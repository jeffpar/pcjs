---
layout: page
title: "PC-SIG Diskette Library (Disk #3506)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3506/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3506"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## SFII.DOC

{% raw %}
```

STICK FIGHTER II   programmed by Gary Shaw   Copyright (C) 1992

        This program is in the PUBLIC DOMAIN.  Feel free to distribute it for
NO PROFIT in its complete unaltered form.

        You should have the following files:

        sfii.exe     - the actual program
        sfii.doc     - what you're reading
        egavga.bgi   - the graphics driver
        ct-voice.drv*- sound blaster driver file
        RKick.voc    - voice data
        UCut.voc
        FBall.voc         thanx to Calvin, Henry, Matt, Frank, Alex
        Grab.voc                for these sounds + beta testing!
        SBoom.voc
        CLGrab.voc
        Whoosh.voc
        Fly.voc
        Hold.voc
        LKick.voc

* This file and all following files are for Sound Blaster support.  If you have
a Sound Blaster Pro you may have to substitute your own ct-voice.drv file for
the one here.  Naturally this program will still work without Sound Blaster.

*****************************************************************************
               STICK FIGHTER II  Second Release  May 1992

                    Copyright (C) 1992 by Gary Shaw
****************************************************************************

- a martial arts type game featuring various kicks/punches, jumping, blocking,
  crouching, throwing and special moves such as fireballs, blade kicks, etc.
- SOUND BLASTER SUPPORT NOW HERE!
- MULTIPLE CHARACTERS AND THE ABILITY TO CONSTRUCT NEW CHARACTERS NOW HERE!
- make sure NUMLOCK is ON
- press ESC during combat to get back to main menu
- Just type
  SFII
  to run the game.  If you have a fast computer ( > 16 MHZ ) you may wish to
use the Command line option to reduce game speed for faster computers:

  sfii [speed] where [speed] is optional and should range from about 1 to 30.

  The higher the number, the slower.  You shouldn't have to go above
  20 unless you have an incredibly fast computer, and should not need this
  option for computers running at 16MHz or less.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3506

     Volume in drive A has no label
     Directory of A:\

    CLGRAB   VOC      6178   4-20-92   1:52p
    CT-VOICE DRV      2493   5-14-90   3:54p
    EGAVGA   BGI      5554  10-23-90   6:00a
    FBALL    VOC      7457   6-30-92  11:20p
    FLY      VOC     10461   6-30-92  11:28p
    GRAB     VOC      1821  12-27-91   9:08a
    HOLD     VOC      4066   7-02-92  12:49a
    LKICK    VOC      2530   4-20-92   9:13p
    RKICK    VOC     14434   4-20-92   1:37p
    SBOOM    VOC     11426   4-20-92   1:36p
    SFII     DOC      2039   7-02-92  12:49a
    SFII     EXE     74560   7-01-92   2:25p
    UCUT     VOC     15173   6-30-92  11:14p
    WHOOSH   VOC      3273   3-12-92   5:06a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       539   3-31-93   4:09p
           16 file(s)     162035 bytes
                          151552 bytes free
