---
layout: page
title: "PC-SIG Library Disk #15"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0015/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0015"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

## Information about "COLORDEMO"

    Two main programs are on this disk.  P*man are maze games that run
    under BASIC.  PCMAN requires a joystick, PATHMAN doesn't.  As far as
    games go, they are worth looking at and will beat you! COLORDEMO is
    just that a demo program that displays computer generated graphics.
    The demo can be run on a non-color monitor but to get the full effect a
    color monitor is required (really no other use for the demo).
    
    System Requirements:  Color graphics
    
    How to Start:  Load DOS and type DRAW to enter the main program.  To
    run BASIC programs consult the directions in GETTING STARTED for your
    configuration.
    
    File Descriptions:
    
    -------- ---  COLORDEMO
    ELEPH    DAT  Part of COLORDEMO
    ELEPH    EXE  Part of COLORDEMO
    ADVLAND  PIC  Part of COLORDEMO
    FINISH   BAS  Part of COLORDEMO - end of demo
    MCODE    %%%  Part of COLORDEMO
    BLASTOFF BAS  Part of COLORDEMO - rocket blasts off
    ESSXFADE BAS  Part of COLORDEMO
    FLYBY    BAS  Part of COLORDEMO - objects in space
    LANDSEQ  BAS  Part of COLORDEMO - landing
    WELCOME  BAS  Part of COLORDEMO
    BUTTRFLY BAS  Part of COLORDEMO - butterflies flying
    ELEPHANT BAS  Part of COLORDEMO - dancing elephant
    BLIMP    BAS  Part of COLORDEMO - blimp flying
    OTHDEMO  BAS  Part of COLORDEMO - game demonstration
    SCREEN   ASM  Assembler source for SCREEN.EXE
    SCREEN   EXE  Set color/mono/40/80/low/med/high resolution
    DRAW     ASM  Assembler source for DRAW.EXE
    DRAW     EXE  Block-read a file directly to color/graphics buffer
    FAMILYDA Y    Part of COLORDEMO
    NEXTSHOW BAS  Part of COLORDEMO
    START    BAS  Part of COLORDEMO
    COLORDEM BAT  Part of COLORDEMO - run color demo  (impressive demo)
    COLOR    EXE  Set display to color
    MONO     EXE  Set display to monochrome
    PRTGRAF  BAS  Draw a polygon, optionally print with graftrax
    MONSW    BAS  Another color/mono program  (Good as a subroutine)
    PCMAN    BAS  Color game using joysticks  (Untested)
    PATHMAN  BAS  Color game using keypad - no joysticks needed
    TEST     BAS  Test program

### Directory of PC-SIG Library Disk 0015

     Volume in drive A has no label
     Directory of A:\

    PCMAN    BAS      7552   8-03-82
    PATHMAN  BAS      9344   8-07-82
    DRAW     EXE       640   6-17-82
    DRAW     ASM       884   6-17-82
    SCREEN   EXE      1280   6-19-82
    COLOR    EXE       640   5-29-82
    MONO     EXE       640   5-29-82
    COLORDEM BAT        37   7-31-82
    START    BAS       256   7-31-82
    WELCOME  BAS      4224   7-31-82
    LANDSEQ  BAS      3584   6-10-82
    FLYBY    BAS      2688   6-10-82
    MONSW    BAS      2304   7-14-82
    ELEPHANT BAS      3584   7-31-82
    PRTGRAF  BAS      1152   6-18-82
    ESSXFADE BAS      1152   6-12-82
    BLASTOFF BAS      3200   6-12-82
    FINISH   BAS      6144   7-31-82
    NEXTSHOW BAS      3456   6-12-82
    BUTTRFLY BAS      3712   7-31-82
    SCREEN   ASM      2636   6-19-82
    TEST     BAS       128   3-03-82
    OTHDEMO  BAS      6144   6-12-82
    BLIMP    BAS      1408   6-12-82
    ELEPH    EXE     18048
    ELEPH    DAT      8960
    ADVLAND  PIC     16512   5-31-82
    FAMILYDA Y        4864   6-11-82
    MCODE    %%%       128   4-20-82
    FILES015 TXT      1732   5-29-87  10:06a
           30 file(s)     117033 bytes
                           34816 bytes free
