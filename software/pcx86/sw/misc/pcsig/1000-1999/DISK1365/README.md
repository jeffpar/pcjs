---
layout: page
title: "PC-SIG Diskette Library (Disk #1365)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1365/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1365"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FREEQUENT FLYER 1 OF 3 (ALSO 1366, 1367)"

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

## FILE1365.TXT

{% raw %}
```
Disk No: 1365
Program Title: FREEQUENT FLYER version 2.15 (Disk 1 of 3)
PC-SIG version 1

FREEQUENT FLYER is designed to help the airline frequent flyer club
member to maximize travel bonuses available for his/her travel plans.

A comprehensive data base is supplied with the program that contains
airline, hotel, car rental, etc. information.  This data is all
cross-referenced so that you can see, for example, which hotels
participate with which airlines, giving mileage credit.  This
information can save you money when making travel arrangements.

The data base provides the following information to aid you with your
travel plans; which airlines offer mileage bonuses, which hotels offer
mileage bonuses in conjunction with particular airlines, current special
airline travel bonuses, travel information such as airline or hotel
specials for a given city, list of all specials for a given city and car
rental specials associated with a particular airline.

FREEQUENT FLYER also provides a Travel Log which you can use to enter
and track your own individual frequent flyer accounts.  The system is
completely menu-driven and all data entries are verified for
correctness.

Synopsis:  A menu-driven database of flight & travel info that helps you
to maximize your frequent flyer bonuses.

Usage:  Business/Airline Travel/Frequent Flyer Bonuses.

Special Requirements:  Hard disk and a CGA card.

How to Start:  Type GO (press enter).

Suggested Registration:  $19.95 for current update; $49.95 for quarterly
updates (4); $79.95 for monthly updates (12).

File Descriptions:

GO       EXE  Main program.
ACCTMILE DBF  Database file.
ACCTPNTS DBF  Database file.
AIRLINE6 NTX  Index file.
CONVERT  DBF  Database file.
HOTEL2   NTX  Index file.

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
║         <<<<  Disk No 1365 FREQUENT FLYER  (Disk 1 of 3)  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install the program to your hard disk type INSTALL (press enter)     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1365

     Volume in drive A has no label
     Directory of A:\

    ACCTMILE DBF      1900   7-24-88   7:51a
    ACCTPNTS DBF      1156   4-24-88   9:25a
    AIRLINE6 NTX      2048   7-17-88   5:45p
    CONVERT  DBF        78   8-16-87  11:27a
    FILE1365 TXT      1896   4-28-89  12:39p
    GO       EXE    216144   8-15-88   6:52p
    HOTEL2   NTX      2048   7-17-88   5:45p
    INSTALL  BAT       694   4-28-89   3:04p
    RUN      BAT        39   4-28-89  12:46p
    RUN      TXT       386   4-28-89   1:25p
           10 file(s)     226389 bytes
                           91136 bytes free
