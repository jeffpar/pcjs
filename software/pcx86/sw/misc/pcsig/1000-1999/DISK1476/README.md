---
layout: page
title: "PC-SIG Diskette Library (Disk #1476)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1476/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1476"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "FLIGHT PLANNING 2 OF 2 (ALSO 939)"

    FLIGHT is a flight-planning program for private pilots.
    
    Enter up to 20 waypoints by name and the estimated airspeed of the
    plane. The program matches the waypoints against data files, retrieves
    the latitude, longitude and magnetic variation for each point, and then
    calculates the magnetic course, the distance between the waypoints, and
    the estimated time between each set of waypoints.
    
    The results are printed on the screen, together with the total distance
    and the total estimated flight time. You can then have a flight log
    printed. The files containing the waypoints for FLIGHT can be edited
    from within the program or with an ASCII wordprocessor.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1476.TXT

{% raw %}
```
Disk No:  939 (Disk 2 of 2)
Program Title:  FLIGHT PLANNING FOR PRIVATE PILOTS v3.0
PC-SIG version:  2

This is the second disk of a two disk set.  The first disk can be found
on disk #939.  Refer to the first disk for a full description.

Usage:  Flight-Planning/Morse Code.

Special Requirements:  A printer is optional.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

ALLUS    DAT  Data file for FLIGHT.
ATLANTIC DAT  Data file for FLIGHT.
EASTUS   DAT  Data file for FLIGHT.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  Disk No 1476 FLIGHT and MORSE  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for FLIGHT insert disk #939 and type:        ║
║             COPY FLIGHT.TXT LPT1: (press enter)                         ║
║                                                                         ║
║ To run the program FLIGHT insert disk #939 and type:  FLIGHT            ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1476

     Volume in drive A has no label
     Directory of A:\

    ALLUS    DAT     46074  11-26-88   9:06p
    ATLANTIC DAT      1933   4-01-89  11:43a
    EASTUS   DAT    160556   1-22-89  11:05a
    FILE1476 TXT       657   6-19-89  10:09a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617   6-19-89  10:08a
            6 file(s)     209875 bytes
                          110592 bytes free
