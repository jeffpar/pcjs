---
layout: page
title: "PC-SIG Diskette Library (Disk #3986)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3986/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3986"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## INSTRUCT.TXT

{% raw %}
```

These are the rules as included with the X version.

----------------------------------------------------

There are 72 tiles, two of each combination of six colors and six shapes.
At the start of the game, there are six tiles on the board representing
each shape and color.  To place an additional tile on the board, you
must match at least one adjacent tile according to the following rules:
   - To match a single tile, you must match either the color or shape.
   - To match two tiles, you must match one shape and one color.
   - To match three tiles, you must match two colors and one shape OR two
     shapes and one color.
   - To match four tiles, you must match two colors and two shapes.

Tiles placed on the interior (lighter) squares score points when placed,
according to the number of adjacent tiles that they match.
   - Matching one tile:    1 point.    - Matching three tiles:  4 points.
   - Matching two tiles:   2 points.   - Matching four tiles:   8 points.

In addition to the regular score there is an increasing bonus for each
four-way match starting with 25 points for the first and continuing with
50, 100, 200, 400, 600, 800, 1000, 5000, 10000, and 50000 points.

A bonus of 1000 points is awarded at the end of the game placing for all
72 tiles.  500 and 100 points are awarded for one and two tiles remaining.
```
{% endraw %}

## ORDERFRM.TXT

{% raw %}
```
                Box World ( 100 levels ) Order Form
                ===================================

       Name: __________________________________________________

    Company: __________________________________________________

    Address: __________________________________________________

       City: ___________________________ State: _______________

    Country: _______________________ Post/Zip Code: ___________

Where did you obtain
    the program from:  ________________________________________


Payments:
=======
Payments must be in US Dollars.

   Box World (100 Levels)....   $5.00 x ____ copies  = $_______
   Overseas shipping.........                 $3.00  + $_______
   Total.....................                          $_______

specify your disk size:
                          ____ 5.25" ____ 3.5"

Make your check payable to Jeng Long Jiang, and send it to:

     P.O. Box 51731
     2085 E. Bayshore Road
     Palo Alto, CA 94303-9991
     USA
```
{% endraw %}

## README.TXT

{% raw %}
```
This port of Ishido was written by Douglas Mayfield.
The tile set was drawn independently by Phat Tran.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3986

     Volume in drive A has no label
     Directory of A:\

    ORDERFRM TXT      1014   3-19-92   8:57a
    BOXWORLD EXE    103424   3-18-92  11:35p
    ISHIDO   EXE     63022   4-27-92   5:16a
    INSTRUCT TXT      1341   4-24-92  12:14p
    README   TXT       108   4-27-92   5:40a
    ISHIDO   SCR        22   8-19-93   3:18p
    TOBOR    EXE    156754  11-16-91   1:05a
    REGISTER WRI      1792  11-16-91   9:56p
    README   WRI      2944  11-16-91  10:03p
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1155   9-09-93   9:34a
           11 file(s)     331607 bytes
                           24576 bytes free
