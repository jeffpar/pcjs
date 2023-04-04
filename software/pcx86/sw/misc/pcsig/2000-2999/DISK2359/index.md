---
layout: page
title: "PC-SIG Library Disk #2359"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2359/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2359"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCREEN DEBUT"

    SCREEN DEBUT is a program used to build and develop text screens
    in any of four languages. Ansi code for use with dos, Basic code
    with and without line numbers, C code for Turbo Pascal, and compressed
    binary format for use with Fast Screen.
    
    Fast Screen is included with SCREEN DEBUT and is used to view your
    screen. If you build screens in any of the formats mentioned, SCREEN
    DEBUT will make your task much easier. It is so fast to learn and use
    that you'll be producing screens instead of mulling over a thick
    manual. This manual is just an F1 key away. The program uses few
    commands, but the ones used are all you need; commands like cursor
    border, select color, box junctions, load screen, save screen, cut and
    paste, copy and paste, and recolor.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BLOAD.BAS

```bas
'--------------------------------------------------------------------------
'- BLOAD.BAS                                                              -
'-                          Willie Robinson                               -
'-                          2613 Louis Blvd                               -
'-                          Hephzibah Ga 30815                            -
'-                                                                        -
'-         Example: How to Load a BSAVE File with Quick Basic             -
'-                                                                        -
'-                                                                        -
'- UpDated 1 June 1990                                                  -
'-                                                                        -
'--------------------------------------------------------------------------

DEFINT A-Z

'-/Modify this Line by Entering Your Own Screens/-------------------------
BSaveScreenToBeRetrived$ = "YourFile.BAS" '--Change "YourScrn"

'-/Get Video Mode/--------------------------------------------------------
DEF SEG = &H40
IF PEEK(&H49) = 7 THEN            '--PEEK to See Type of Monitor(Mono = 7)
   DEF SEG = &HB000               '--MonoChrome Monitor(Memory Location)
 ELSE
   DEF SEG = &HB800               '--Color Monitor(Memory Location)
END IF

'-/Load the Screen into the Video Memory/---------------------------------
BLOAD BSaveScreenToBeRetrived$, &H0

END

```

## BLOAD.BAS

```bas
'--------------------------------------------------------------------------
'- BLOAD.BAS                                                              -
'-                          Willie Robinson                               -
'-                          2613 Louis Blvd                               -
'-                          Hephzibah Ga 30815                            -
'-                                                                        -
'-         Example: How to Load a BSAVE File with Quick Basic             -
'-                                                                        -
'-                                                                        -
'- UpDated 1 June 1990                                                  -
'-                                                                        -
'--------------------------------------------------------------------------

DEFINT A-Z

'-/Modify this Line by Entering Your Own Screens/-------------------------
BSaveScreenToBeRetrived$ = "YourFile.BAS" '--Change "YourScrn"

'-/Get Video Mode/--------------------------------------------------------
DEF SEG = &H40
IF PEEK(&H49) = 7 THEN            '--PEEK to See Type of Monitor(Mono = 7)
   DEF SEG = &HB000               '--MonoChrome Monitor(Memory Location)
 ELSE
   DEF SEG = &HB800               '--Color Monitor(Memory Location)
END IF

'-/Load the Screen into the Video Memory/---------------------------------
BLOAD BSaveScreenToBeRetrived$, &H0

END

```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2359

     Volume in drive A has no label
     Directory of A:\

    SD       EXE    119308   7-15-90  12:00p
    SNAPSCRN COM      5503   7-15-90  12:00p
    SD       DOC     32809   7-15-90  12:00p
    SD2GT    DOC     11084   7-15-90  12:00p
    REGISTER DOC      1012   7-15-90  12:00p
    PREDATOR DOC      2629   7-15-90  12:00p
    HISTORY  DOC      5532   7-15-90  12:00p
    BLOAD    BAS      1530   7-15-90  12:00p
    1KEYS    SD       1048   7-15-90  12:00p
    ARCADE   SD       1391   7-15-90  12:00p
    AUTOSIZE SD        790   7-15-90  12:00p
    CHESS    SD       1453   7-15-90  12:00p
    CHRIS'   SD       1588   7-15-90  12:00p
    CUSHMAN  SD       1044   7-15-90  12:00p
    EXAMPLE  SD        450   7-15-90  12:00p
    FUJI     SD       1128   7-15-90  12:00p
    HOKKAIDO SD       1152   7-15-90  12:00p
    HPYFACE  SD        871   7-15-90  12:00p
    INFO     SD       1331   7-15-90  12:00p
    JACK     SD       1671   7-15-90  12:00p
    MONKEY   SD       1157   7-15-90  12:00p
    PREDATOR SD       1165   7-15-90  12:00p
    RADIX    SD        831   7-15-90  12:00p
    ROADSTR  SD        847   7-15-90  12:00p
    SAHARA   SD        774   7-15-90  12:00p
    SURF     SD        879   7-15-90  12:00p
    SWISS    SD       1194   7-15-90  12:00p
    TIP      SD        705   7-15-90  12:00p
    DEBUT140 ZIP    103076   7-15-90  12:00p
    GO       BAT        24  10-03-90   1:40a
    FILE2359 TXT      2073  10-03-90   2:41p
    GO       TXT      1116  10-04-90  12:08a
           32 file(s)     307165 bytes
                           36864 bytes free
