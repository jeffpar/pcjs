---
layout: page
title: "PC-SIG Diskette Library (Disk #890)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0890/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0890"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE BRIDGE GAME"

    TURBO-BRIDGE is a bridge game that lets you practice playing against
    yourself or the computer.  Not only can this program be used for fun,
    but it can help you practice the strategies of the game.
    
    You can have all four hands in play displayed on the table, allowing you
    to play the hands of as many of the players as you wish or, after
    bidding, the computer can play out the game.  You may or may not want
    the computer to see your hand.  Not only are the cards in your hand (and
    optionally others) displayed, but the played cards are listed.
    File Descriptions:
    
    BRIDGE   PAS  Pascal source code.
    BRIDGE   COM  Main program.
    BRIDGE        Script file.
    BID      BR   Data file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES890.TXT

{% raw %}
```
Disk No  890
Program Title:  TURBO-BRIDGE
PC-SIG version 1
 
    TURBO-BRIDGE is a computer bridge game that lets you practice playing
bridge against yourself or against the computer. Not only is this a fun
card game, but this program can help you learn the strategies of the game.
Optionally you can have all four playing hands displayed on the table,
allowing you to play the hands of as many of the players as you wish or,
after bidding, you may let the computer play out the game. You may or may
not wish for the computer to see your own hand. Not only are the cards in
your hand (and optionally others) displayed, but also the played cards are
listed.
 
Usage: Game
 
System Requirements: 192K and one disk drive.
 
How to Start: Type: BRIDGE (press enter).
 
File Descriptions:
 
BID      BR   Data file
BRIDGE        Script file
BRIDGE   COM  Main program
BRIDGE   PAS  Pascal source code
???????? BR   Data file (6 files).
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0890

     Volume in drive A has no label
     Directory of A:\

    BID      BR      25205   6-01-86
    BRIDGE   COM     63830   6-01-86
    BRIDGE   PAS      6783   6-01-86
    DEFAULTS BR      14635   6-01-86
    DISPLAY  BR      24013   6-01-86
    FILES890 TXT      1064  12-07-87   8:57a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       386  12-03-87   5:03p
    INIT     BR       9640   6-01-86
    INPUT    BR      13673   6-01-86
    PLAY     BR      40814   6-01-86
    SCORE    BR      19308   6-01-86
           12 file(s)     219389 bytes
                           96256 bytes free
