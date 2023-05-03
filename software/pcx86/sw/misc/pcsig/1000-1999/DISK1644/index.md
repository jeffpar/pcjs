---
layout: page
title: "PC-SIG Diskette Library (Disk #1644)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1644/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1644"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "UNO AND GAMES & YCAL/DCAL"

    This games package mixes a new computerized version of a classic card
    game with a hard disk menu for your other computer games.  This familiar
    card game -- called UNO -- centers on who can go out first by playing
    all cards dealt.  You play against a relentless computer.  Great for
    anyone who likes computer cards.
    
    The GAME menu offers you a quick, easy way to reach your most popular
    games.  You can edit the menu to allow access to any game on your hard
    disk.  This is not as fancy as other menu systems in the library but it
    does the job.
    
    Calendars are like police, there's never one around when you need one.
    Until now!  YCAL lets you print out a yearly calendar, for any year,
    from 1582 to 9999.  Just type in the year and YCAL creates a file with a
    bold heading for that year.  You only have to copy that file to your
    printer with a DOS command and you have a smart looking calendar that
    fits on standard letter-sized paper.
    
    Just want to check a date?  DCAL displays the any-three-month calendar
    on your screen.  If you don't specify a date, DCAL uses your DOS system
    date.  Use YCAL/DCAL and never waste any more time looking for a
    calendar!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DCAL.DOC

{% raw %}
```
Documentation for DCAL.EXE (Daily CALendar)
Written by Garry Spencer - 5O27 Byron Rd. - Memphis, TN 38122

This program will print a calendar on the screen which corresponds to the
current date or to the date on the DOS command line.  The 3-month calendar
will also show the months before and after the current (or specified) month.

The command syntax options are:

DCAL 
If no command line arguments are given, the current date is used.

DCAL mm-dd-yy
This syntax form assumes that mm=month, dd=day, yy=year.  The 2-digit year
form will assume that (yy=8O to 99) means 198O to 1999 and that (yy=OO to 79)
means 2OOO to 2O79.

DCAL mm-dd-yyyy
This syntax form assumes that mm=month, dd=day, yyyy=year.  The 4-digit year
form will accept the years (1582 to 9999).

This program may be placed in your AUTOEXEC.BAT file using the first command
syntax.  In older XT systems, which require the user to enter the date
each time the system is booted up, the DATE command in the AUTOEXEC.BAT file
may be replaced with the command DCAL.  If the program DCAL is executed with
no command line arguments and the current date is O1-O1-8O, then the
DOS DATE command is invoked.  I hope you will find this program to be useful.

```
{% endraw %}

## FILE1644.TXT

{% raw %}
```
Disk No: 1644                                                           
Disk Title: UNO and Games & YCAL/DCAL                                   
PC-SIG Version: S1.4                                                    
                                                                        
Program Title: UNO and Games                                            
Author Version: 1.5OC                                                   
Author Registration: $5.00                                              
Special Requirements: None.                                             
                                                                        
This games package mixes a new computerized version of a classic card   
game with a hard disk menu for your other computer games.  This familiar
card game -- called UNO -- centers on who can go out first by playing   
all cards dealt.  You play against a relentless computer.  Great for    
anyone who likes computer cards.                                        
                                                                        
The GAME menu offers you a quick, easy way to reach your most popular   
games.  You can edit the menu to allow access to any game on your hard  
disk.  This is not as fancy as other menu systems in the library but it 
does the job.                                                           
Program Title: YCAL/DCAL                                                
Author Version: 1.0                                                     
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
Calendars are like police, there's never one around when you need one.  
Until now!  YCAL lets you print out a yearly calendar, for any year,    
from 1582 to 9999.  Just type in the year and YCAL creates a file with a
bold heading for that year.  You only have to copy that file to your    
printer with a DOS command and you have a smart looking calendar that   
fits on standard letter-sized paper.                                    
                                                                        
Just want to check a date?  DCAL displays the any-three-month calendar  
on your screen.  If you don't specify a date, DCAL uses your DOS system 
date.  Use YCAL/DCAL and never waste any more time looking for a        
calendar!                                                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GAMES.DOC

{% raw %}
```
GAMES MENU PROGRAM FOR HARD DISK (version 1.30)

PLEASE HELP SUPPORT THE SHAREWARE CONCEPT BY SENDING A CONTRIBUTION
( $5 SUGGESTED ) TO: GARRY SPENCER - 5O27 BYRON RD - MEMPHIS, TN - 38122

BOTH of the following files MUST be in the ROOT directory of the hard disk.
C:\GAMES.EXE
C:\GAMES.DAT

GAMES.EXE - MENU PROGRAM
            The up-arrow and down-arrow keys are used to scroll between the
            pages of menu selections

GAMES.DAT - DATA FILE FOR GAMES.EXE
            The included file is just an example.  This file is an ASCII file
            and can be edited by any word-processor or editor program.
            It MUST be customized to suit YOUR particular system needs !!)

            # Increments game number (1 TO 250) - Prints text message to screen
              (note that only one line of text is valid here)

              The line following the # is used to start the data for the
              batch file.  The data can be on more than one line.

              e.g.   #OFFROAD - (4x4 Driving Game)
                     CD GAMES
                     OFFROAD
                     #NEXT-GAME

            ^ The up-carat (^) can be used to indicate a cr-lf combination.
              e.g.   #OFFROAD
              CD GAMES^OFFROAD
              #NEXT-GAME

            * If an asterisk (*) is the first character of a line, it
              indicates the end of the list.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  Disk #1644  UNO AND GAMES  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print documentation for GAMES, type:  COPY GAMES.DOC PRN (Enter)     ║
║                                                                         ║
║ To start GAMES program, type:  GAMES (press Enter)                      ║
║                                                                         ║
║ To print documentation for DCAL, type:  COPY DCAL.DOC PRN (Enter)       ║
║                                                                         ║
║ To start YCAL, type:  YCAL (press Enter)                                ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1644

     Volume in drive A has no label
     Directory of A:\

    GAMES    EXE     36448   7-06-90  12:16p
    GAMES    DAT       111   7-06-90  10:58a
    GAMES    DOC      1436   7-09-90  12:09p
    UNO      EXE     51518   8-06-90   9:08a
    MAZE     EXE     34472   7-06-90  12:20p
    PUZZLE   EXE     34278   7-06-90  12:21p
    DCAL     DOC      1243   7-09-90  12:12p
    DCAL     EXE     33838   7-06-90   8:57a
    YCAL     EXE     40784   7-05-90   8:45p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       881   1-01-80  10:22a
    FILE1644 TXT      3035  10-30-90   4:24p
           12 file(s)     238082 bytes
                           77824 bytes free
