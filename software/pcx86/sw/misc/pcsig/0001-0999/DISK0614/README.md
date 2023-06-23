---
layout: page
title: "PC-SIG Diskette Library (Disk #614)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0614/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0614"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "NEW YORK ADVENTURE"

    NEW YORK is a cleverly-designed adventure program. The goal is to
    escape from a New York City ghetto. There are many obstacles to
    overcome and many hardships to endure. After you escape the dangerous
    ghetto areas, you must find adequate food and shelter or you will soon
    die from the rough exposure of the city. Documentation is included.
    
    System Requirements: 128K memory and one disk drive.
    
    How to Start: Type: NEWYORK (press enter).
    
    Suggested Registration: $5.00
    
    File Descriptions:
    
    NEWYORK  BAS  Escape from New York city
    -------- ---  -  New York (v1.0)
    NEWYORK  DOC  Documentation for NEWYORK.BAS
    DOC      TXT  Documentation files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0614.TXT

{% raw %}
```
Disk No:  614
Program Title:  NEW YORK version 2.0
PC-SIG version:  2.1

NEW YORK is a cleverly-designed adventure program.  The goal is to
escape from a New York City ghetto.  There are many obstacles to
overcome and many hardships to endure.  After you escape the dangerous
ghetto areas, you must find adequate food and shelter or you will soon
die from the rough exposure of the city.  Documentation is included.

Usage:  Entertainment

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Donation:  $5.00

File Descriptions:

NEWYORK  EXE  Adventure program.
NEWYORK  DOC  Program documentation.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  Disk #614 NEW YORK ADVENTURE  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, Type:                        ║
║                           COPY NEWYORK.DOC PRN (press enter)            ║
║                                                                         ║
║ To start the program, Type: NEWYORK (press enter)                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## NEWYORK.DOC

{% raw %}
```



                          Survival in New York City
                              text-adventure
                       A game of interactive fiction
                               Version 2.0
                             Bert Lewis, 1988


The goal of 'New York' is to escape from a New York ghetto. There will be many
obstacles to overcome and many hardships to endure. After you escape the
dangerous ghetto areas, you must find adequate food and shelter, or you will
soon die from the rough exposure of the city.

The program has the subtitle 'interactive fiction' because you
direct the course of the game.  You determine what will happen. You simply
talk to the computer, telling it what you want to do. Sometimes you will have
to rephrase a particular sentence or use different wording, as the porgram's
vocabulary is much smaller than yours.

For most situations, simply specify a verb and an object.
Examples:
  Get (object)            such as 'Get library book'
  Use (object)            such as 'Use explosives'
  Drop (object)           such as 'Drop rusty key'
  Read (object)           such as 'Read magazine'
  Shoot (person)          such as 'Shoot thief'

The verbs 'Put' and 'Give' require an indirect object.
Format:
  Put (object) in (object)  such as 'Put diamonds in plastic bag'
  Give (object) to (person) such as 'Give rifle to sheriff'

One word commands
  Time          : gives current time
  Inventory     : tells you what you're carrying
  Score         : gives current score
  Wait          : causes time to elapse.
  Save          : Saves your current position to disk
  Restore       : Restores a saved game
  Quit          : Quits the game


To move around,
Type the words 'Walk (direction)'
Four allowable directions: North, South, East, and West


Please note,

All streets, buildings, names, etc. are fictitious.
You may use lowercase or uppercase letters.  The program does not
distinquish between the two.


Unlike other adventure games, where only one solution exists, 'New York' can be
solved many different ways.  You can overcome the obstacles in this game by
using evil tactics, or you can try using less violent mehtods. The choice is
entirely up to you. You will find different obstacles and different endings for
each method you choose.

Good Luck!


A hint book (on disk) is available from the author for $5. All puzzles
and obstacles (and their solutions) are described in detail.  A complete list
of verbs and objects recognized by the program is included, along with all
other pertinent information needed to successfully complete the game.
Please send to:

   Bert Lewis, Jr.
   Clarion Computing
   446 Gore Road
   Onalaska, WA 98570

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0614

     Volume in drive A has no label
     Directory of A:\

    FILE0614 TXT       761   9-08-89   9:23a
    GO       BAT        38   1-29-88  12:31p
    GO       TXT       617   1-29-88  12:30p
    NEWYORK  DOC      2765   9-05-89  12:06p
    NEWYORK  EXE    123490   1-09-88  12:59a
            5 file(s)     127671 bytes
                           30720 bytes free
