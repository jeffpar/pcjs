---
layout: page
title: "PC-SIG Library Disk #1227"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1227/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1227"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ROKMAR ASSETS INVENTORY"

    The ASSETS INVENTORY SYSTEM is an inventory log program from Rokmar that
    enables you to keep track of your home or office assets.
    
    In case of fire, theft, etc., your insurance company will want an
    itemized list of each piece of merchandise, the model numbers, the
    serial numbers, the location the article was kept, the purchase/
    replacement cost, etc.  This information can be difficult to piece
    together with any amount of accuracy after the disaster strikes.
    
    The ASSETS INVENTORY SYSTEM keeps track of all you own, allows for easy
    updating on a regular basis, and provides a detailed inventory report of
    assets sorted by type, location or user defined index.  It is also able
    to generate customized files for importing to spreadsheets or financial
    analysis programs.
    
    You may be amazed to find out how much money you have tied up in
    household/office assets, in what areas this money is concentrated, and
    in what type of merchandise!  This information is useful for capital
    budgeting, tax planning, developing reasonable precautions against
    losses due to theft and fire, and, of course, documentation for
    insurance claims.
    
    The INVENTORY SYSTEM also provides helpful guidance on how to take
    inventory, such as hints concerning often overlooked items: expensive
    clothing articles, landscaping purchases, books, telephones, computer
    software, lighting fixtures, custom curtains, hot water heater, kitchen
    appliances and utensils, tap water filters, children's articles, outside
    articles, items loaned to someone else, important papers, etc.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## SAMPRPT1.BAS

```bas
10 ' ************************************************************************
20 ' *****  Example report: Simple list report sorted by model number.  *****
30 ' ************************************************************************
40 ' ****** extract record description
50 OPEN "R",#1,"tempsort.dat",241
60 FIELD #1, 5 AS ASSETKEY$,25 AS DESC$,8 AS TYPE$,8 AS LOCATION$,8 AS USERDEF$, 8 AS DATEPUR$, 11 AS PURCOST$,25 AS PURFROM$,11 AS APPRAISAL$,10 AS MODELNO$,  20 AS SERIAL$,50 AS COMMENT1$, 50 AS COMMENT2$, 1 AS CR$
70 '
80 LINESPERPAGE = 55
90 PAGECOUNT = 0
100 LINECOUNT = 0
110 TOTAL = 0
120 GOSUB 320                   ' Print the column headers
130 '
140 IF EOF(1) THEN 250
150 GET #1                      ' read the next record
160 '
170 IF VAL(PURCOST$) < 100 THEN GOTO 140
180 '
190 ' ******* record  selection
200 IF LINECOUNT >= LINESPERPAGE THEN GOSUB 320
210 TOTAL = TOTAL + VAL(PURCOST$)
220 LPRINT ASSETKEY$;" ";TYPE$;" ";DATEPUR$;"    ";MODELNO$;" ";SERIAL$;" ";               PURCOST$
230 LINECOUNT = LINECOUNT + 1
240 GOTO 140
250 '
260 ' ******** exit section
270 LPRINT "                                                      Total:  ";
280 LPRINT TOTAL
290 CLOSE #1
295 SYSTEM
300 END
310 '
320 ' ************************************************************************
330 ' *****  Print heading routine.                                   *****
340 ' ************************************************************************
350 PAGECOUNT = PAGECOUNT + 1
360 LINECOUNT = 5
370 LPRINT CHR$(12)                  ' print a form feed character
380 LPRINT DATE$;"         ********* ROKMAR example report *********";
390 LPRINT "        page: ";PAGECOUNT
400 LPRINT "                           List of items over $100.00"
410 LPRINT
420 LPRINT "Key   Type     Date Purch  Model#     Serial#              Purch Cost"
430 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1227

     Volume in drive A has no label
     Directory of A:\

    README   1ST       837   4-03-89   6:38p
    ASSETS   EXE     95427   2-09-90  11:24p
    ASSETS   DOC     25942   2-07-90   3:08a
    ASSETS   HLP      2011   9-25-89   3:48p
    ASSETS   DAT      1732   5-06-89   5:08p
    ASSETS   X01      1024   5-06-89   5:08p
    ASSETS   X02      1024   5-06-89   5:08p
    ASSETS   X03      1024   5-06-89   5:08p
    ASSETS   X04      1024   5-06-89   5:08p
    ASINDEX  EXE     24348   2-04-90  11:33a
    ASREPORT EXE     25674   2-07-90   3:16a
    PSWAP    EXE      5582   5-15-89  10:18p
    PSWAP    DOC       646   5-16-89   7:28p
    TECHMAN  DOC     17976   2-07-90   3:00a
    LICENSE  DOC      3940   4-03-89   6:42p
    CUSTMENU EXE     25460   2-03-90   4:52a
    CUSTMENU HLP       719   5-03-89   9:51p
    CUSTMENU DOC     26549   2-03-90   5:43a
    CUSTMENU CFG      1505   5-06-89   5:03p
    EXTRACT  EXE     23156   2-04-90  11:54a
    SAMPRPT1 BAS      1795   2-04-90  12:04p
    SAMPRPT1 BAT       106   2-04-90  11:59a
    CONFIG   SYS        31   5-20-89   6:16a
    GO       BAT        17   7-09-90   5:52a
    GO       TXT       852   7-09-90   5:52a
    FILE1227 TXT      3109   7-09-90   5:51p
           26 file(s)     291510 bytes
                           20480 bytes free
