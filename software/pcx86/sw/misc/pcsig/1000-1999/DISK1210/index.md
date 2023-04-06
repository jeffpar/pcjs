---
layout: page
title: "PC-SIG Diskette Library (Disk #1210)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1210/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1210"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "RECIPES"

    Use your PC to plan weekly meals, parties and special holiday dinners.
    RECIPES contains over 125 recipes for delicious appetizers, soups,
    salads, pastas, breads and desserts. RECIPES lets you find the recipes
    you want in seconds. However, you will not be able to add recipes of
    your own to the data file. Adjust serving sizes from one to 99, and
    print recipes to take to the kitchen. For a bonus, you can print a
    shopping list to take to the store.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## PBS.BAS

```bas
To Start A>RECIPES:

With A Floppy Diskette System:
Put A>RECIPES in the A drive, at the A> type "RECIPES" (without the "s) and
press ENTER.

With A Fixed Disk System:
Prepare a subdirectory C>MD \RECDIR, then go to that directory C>CD \RECDIR,
then type "RECIPES" (without the "s) after the C>.

With A>RECIPES you can use your personal computer to plan weekly meals,
parties and special holiday dinners.  A>RECIPES contains over 125 recipes.
There are delicious appetizers, soups, salads, pastas, breads and desserts.
A>RECIPES lets you find the recipes you want in seconds, and then you can
adjust serving sizes from 1 to 99, print recipes to take to the kitchen and
print a shopping list.

BON APPETIT

East Hampton Industries, Inc. also publishes A>COOK, The Complete Computer
Recipe System.  With A>COOK you can set up your own recipe diskettes.  A>COOK
has the same features as A>RECIPES, but in addition has special easy to use
screens to help you set up your own recipes and categories.  A>COOK also has
a unique feature to help you create a cross reference index of recipes giving
the name, the book, magazine or notebook where it appears, and the page
number.  You will also find 75 basic recipes and 500 recipe references from 5
popular cookbooks on the A>COOK diskette.  You may purchase A>COOK directly
from EHI for $40.00 postage paid.

In addition we have available 6 additional titles in the A>RECIPES series.
These diskettes are copy protected at the request of the authors.

						 Item No.        Cost
Woman's Day Recipes                               524I         $16. ppd.
MicroMeals - favorite microwave recipes           525I         $16. ppd.
Natural Food Recipes - by Rodale Press            526I         $16. ppd.
No Salt, No Sugar, No Fat -
	      by Nitty Gritty Productions         527I         $16. ppd.
Recipes for Parents & Kids - by Mona Moffat       528I         $16. ppd.
The James Beard Cookbook                          529I         $16. ppd.

Registration fee is $15.

Send your order or registration fee to:

East Hampton Industries, Inc.
81 Newtown Lane, P.O. Drawer EEEE
East Hampton, N.Y. 11937
516-324-2224

American Express, MasterCard and Visa accepted.

```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1210

     Volume in drive A has no label
     Directory of A:\

    BASRUN   EXE     31744   5-07-82  12:00p
    FILE1210 TXT      1027  11-22-88   4:31p
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       540  11-04-88  10:21a
    INGINDEX DAT     15060  10-30-87   2:45p
    MANUAL   BAT       147  11-04-88  10:21a
    MOD2REC  EXE     16640  11-25-85   2:36p
    PBS      BAS      2253  11-06-87   5:07p
    README   DOC      2253  11-06-87   5:07p
    RECFILE  DAT    152192  10-30-87   5:13p
    RECIPES  EXE      3200  11-22-85  11:23a
    RECIPNAM DAT     61696  10-30-87   5:13p
    SHOPPING DAT      4992   5-23-88  11:15a
    SHOPREC  EXE      9216  11-22-85  11:24a
           14 file(s)     300998 bytes
                           13312 bytes free
