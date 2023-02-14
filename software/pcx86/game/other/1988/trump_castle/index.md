---
layout: page
title: "Trump Castle (1988)"
permalink: /software/pcx86/game/other/1988/trump_castle/
redirect_from: /disks/pcx86/games/other/1988/trump_castle/
machines:
  - id: ibm5170-trump120
    type: pcx86
    config: /machines/pcx86/ibm/5170/ega/640kb/rev1/enhanced/machine.xml
    autoMount:
      A:
        name: PC DOS 3.30 (Disk 1)
      B:
        name: None
    resume: 1
    autoScript: startMouse
machineScripts:
  startMouse: |
    wait Keyboard DOS;
    type Keyboard "\r\r";
    wait Keyboard;
    sleep 1000;
    select FDC listDrives "A:";
    select FDC listDisks "MS Mouse 6.14 (SETUP)";
    loadDisk FDC;
    wait FDC;
    type Keyboard "MOUSE\r";
    sleep 2000;
    select FDC listDrives "A:";
    select FDC listDisks "Trump Castle 1.20 (1988)";
    loadDisk FDC;
    wait FDC;
    type Keyboard "TRUMP\r";
---

{% include machine.html id="ibm5170-trump120" %}

### Directory of Trump Castle 1.20 (1988)

     Volume in drive A is TRUMP
     Directory of A:\

    ALLFRUIT CGA     11680  10-15-88   3:31p
    ALLFRUIT EGA     11520  10-21-88  12:09a
    ALLNAMES CGC      9156  10-16-88   3:16p
    ALLNAMES EGC     15432  10-16-88   3:16p
    BLKJACK  CGC      4926  10-18-88   9:40p
    BLKJACK  EGC      8848  10-16-88  12:04a
    CARDPART         19790  10-16-88   4:41p
    CRAP     CGC     14466  10-18-88   9:40p
    CRAP     EGC     31414  10-18-88   9:40p
    CROWNDAT CGC     18672  10-20-88  10:38p
    CROWNDAT EGA      7784  10-08-88   3:55p
    DICEPART          7176  10-16-88   4:41p
    HANDLES  CGA      3036  10-15-88  12:02p
    HANDLES  EGA      6624  10-15-88  12:08p
    HANDPART          6424  10-16-88   4:41p
    KENOBET  CGC     16114  10-10-88   9:39p
    KENOBET  EGC     30008  10-10-88   9:37p
    KENOBOX  CGC      5392  10-10-88   9:39p
    KENOBOX  EGC     14156  10-10-88   9:38p
    POKERTEM CGC      9876  10-10-88   9:39p
    POKERTEM EGC     22162  10-10-88   9:38p
    PROSLOTS          2906  10-15-88   4:05p
    R&C      EXE     81665   1-27-89   5:59p
    ROULETTE CGC     14452  10-15-88   5:41p
    ROULETTE EGC     33640  10-15-88   7:46p
    SCORES             198   6-18-01   9:41p
    SLOTLG   CGC     11208  10-15-88   8:00p
    SLOTLG   EGC     25696  10-15-88  11:03p
    SLOTS    EXE     83191  11-10-88   9:02p
    SLOTSLCT CGA      4960  10-15-88   2:41p
    SLOTSLCT EGA     10384   9-25-88   5:45p
    SLOTSM   CGC     10550  10-15-88   8:01p
    SLOTSM   EGC     24134  10-15-88  11:03p
    TEXTPART          6423  10-30-88  11:42p
    TITLE            17906  10-16-88   4:41p
    TITLE    EXE     82833  11-09-88   7:47p
    TRUMP    BAT       607   2-06-11   9:28p
    WHEEL1           16872  10-20-88  10:11p
           38 file(s)     702281 bytes
                          502272 bytes free
