---
layout: page
title: "PC-SIG Diskette Library (Disk #1366)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1366/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1366"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "FREEQUENT FLYER 2 OF 3 (ALSO 1365, 1367)"

    FREEQUENT FLYER is for the airline frequent flyer club members to get
    the most of their travel bonuses.
    
    An included comprehensive database has contains airline, hotel, and car
    rental information.  This is cross-referenced so you can see, for
    example, which hotels participate with which airlines giving mileage
    credit.  This can save you money when making travel arrangements.
    
    The database also has the following information to help you in your
    travel plans: which airlines offer mileage bonuses, which hotels offer
    mileage bonuses along with certain airlines, current special airline
    travel bonuses, travel information such as airline or hotel specials for
    a given city, list of all specials for a given city and car rental
    specials associated with a particular airline.
    
    FREEQUENT FLYER also provides a travel log which you can use to enter
    and track your own individual frequent flyer accounts.  The system is
    completely menu-driven and all data entries are verified for
    correctness.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1366.TXT

{% raw %}
```
Disk No: 1366
Program Title: FREEQUENT FLYER (Disk 2 of 3)
PC-SIG version 1

FREEQUENT FLYER is a three disk set, this is the second disk of the set.
All three disks (#1365, #1366, #1367) are needed to run the program.
Refer to disk #1365 for a full description of the program.

Synopsis:  A menu-driven database of flight & travel info that helps you
to maximize your frequent flyer bonuses.

Usage:  Business/Airline Travel/Frequent Flyer Bonuses.

Special Requirements:  Hard disk and a CGA card.

How to Start:  Type GO (press enter).

Suggested Registration:  $19.95 for current update; $49.95 for quarterly
updates (4); $79.95 for monthly updates (12).

File Descriptions:

AIRLINE  NTX  Index file.
AIRLINE2 NTX  Index file.
AIRLINE3 NTX  Index file.
AIRLINE4 NTX  Index file.
AIRLINE5 NTX  Index file.
ARLNMILE DBT  Data file.
CITY     NTX  Index file.
CODE     NTX  Index file.
COUNTRY  NTX  Index file.
HOTEL    NTX  Index file.
HOTEL1   NTX  Index file.
HOTLMSTR DBF  Database file.
HOTLMSTR DBT  Data file.
INITMEM  MEM  Data file.
NOFREQ   DBF  Database file.
STATE    NTX  Index file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## RUN.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║         <<<<  Disk No 1366 FREQUENT FLYER  (Disk 2 of 3)  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install the program to your hard disk insert disk #1365 into drive A ║
║ and type INSTALL (press enter)                                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1366

     Volume in drive A has no label
     Directory of A:\

    AIRLINE  NTX      6144   2-12-89  10:57a
    AIRLINE2 NTX      4096   2-12-89  10:57a
    AIRLINE3 NTX      2048   2-12-89  10:57a
    AIRLINE4 NTX      4096   2-12-89  10:57a
    AIRLINE5 NTX      2048   2-12-89  10:57a
    ARLNMILE DBT    190924   2-08-89   3:59p
    CITY     NTX     20480   2-12-89  10:57a
    CODE     NTX      2048   2-12-89  10:57a
    COUNTRY  NTX      8192   2-12-89  10:57a
    FILE1366 TXT      1242   4-28-89   2:58p
    HOTEL    NTX      2048   2-12-89  10:57a
    HOTEL1   NTX      2048   2-12-89  10:57a
    HOTLMSTR DBF      1264   2-12-89   8:25a
    HOTLMSTR DBT     70957   2-12-89   8:25a
    INITMEM  MEM        35  12-01-85   7:19p
    INSTALL  BAT       694   4-28-89   3:04p
    NOFREQ   DBF     22202   2-12-89  10:31a
    RUN      BAT        39   4-28-89  12:46p
    RUN      TXT       463   4-28-89   1:31p
    STATE    NTX      6144   2-12-89  10:57a
           20 file(s)     347212 bytes
                            9216 bytes free
