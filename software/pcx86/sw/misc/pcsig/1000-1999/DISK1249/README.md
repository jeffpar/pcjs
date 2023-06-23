---
layout: page
title: "PC-SIG Diskette Library (Disk #1249)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1249/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1249"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PHOTO PACK"

    PHOTO PACK is a collection of programs for amateur and professional
    photographers guaranteed to improve your picture taking skills.
    
    With PHOTO PACK, your PC helps you pick the right filters (called
    diopter lenses) for closeup photography, calculates your camera's
    settings for shooting moving objects, determine film image size for
    printing pictures, figures enlarger head to paper distance for blowing
    up an image, and calculates proper flash settings and depth-of-field
    information.
    
    Impressed?  Well, zoom in on this: PHOTO PACK also turns your PC into a
    darkroom processing timer, a label maker, and a negative/slide database.
    It also prints model releases!
    
    The TIMER can be programmed to handle up to 16 separate processing
    steps.  These steps may run in a darkroom or in a ``lights-on'' mode.
    The darkroom mode uses a black screen background with red digits.  You
    can set tones or ``beeps'' to help you with developing and printing.
    
    The LABEL MAKER prints return address labels, equipment identification
    labels, slide labels, or whatever other labels you can think of.
    
    The DATABASE helps you keep track of all those shoeboxes full of
    slides and negatives.  Describe your transparencies with multiple
    keywords in different categories.  Later, retrieve photos by category
    and keyword.  Each database can hold 65,000 records.  If you use floppy
    disks for your database, you can use multiple disks for an unlimited
    number of records.  (NOTE: You can average from around 1400 to 1800
    records per floppy disk.)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1249.TXT

{% raw %}
```
Disk No: 1249
Program Title:  PHOTO PACK
PC-SIG version: 1

PHOTO PACK is a collection of programs for amateur and professional
photographers guaranteed to improve your picture taking skills.

With PHOTO PACK, your PC will help you pick the right filters (called
diopter lenses) for closeup photography, calculate your camera's
settings for shooting moving objects, determine film image size for
printing pictures, figure enlarger head to paper distance for blowing up
an image, and calculate proper flash settings and depth-of-field
information.

Impressed?  Well zoom in on this: PHOTO PACK also turns your PC into a
darkroom processing timer, a label maker, and a negative/slide database.
It will also print model releases!

The TIMER can be programmed to handle up to 16 separate processing
steps.  These steps may run in a darkroom or in a "lights-on" mode.  The
darkroom mode uses a black screen background with red digits.  You can
set tones or "beeps" to help you with developing and printing.

The LABEL MAKER prints return address labels, equipment identification
labels, slide labels, or whatever else labels you can think of.

The DATABASE will help you keep track of all those shoeboxes full of
slides and negatives.  Describe your transparencies with multiple
keywords in different categories.  Later, retrieve photos by category
and keyword.  Each database can hold 65,000 records.  If you use floppy
disks for your database, you can use multiple disks for an unlimited
number of records.  (NOTE: You can average from around 1400 to 1800
records per floppy disk.)

Usage:  Photography.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00

File Descriptions:

MENU      EXE Main program for CGA.
MMENU     EXE Main program for monochrome.
BRUN30    EXE Run time module.
CLOSE     EXE Close up program.
DOF       EXE Depth of field program.
ENLARGER  EXE Enlarger program.
FLASH12   EXE Flash program.
IMAGE     EXE Image size program.
LABELS    EXE Label print program.
MODEL     EXE Model form porgram.
PHOTO     TXT Picture text file.
PROCS         Data file.
READ      ME  Documentation file.
SLIDE11   COM Slide filing program.
SPEED     EXE Shutter speed program.
STEPS         Data file.
TIMER2    EXE Darkroom program.
USERLIB   EXE Data filing program.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk No 1249  PHOTO PACK  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation, type:                                     ║
║                                                                         ║
║             MANUAL (press manual)                                       ║
║                                                                         ║
║   To run the program on a CGA or EGA system, type:                      ║
║                                                                         ║
║             MENU (press enter)                                          ║
║                                                                         ║
║   To run the program on a Monochrome system, type:                      ║
║                                                                         ║
║             MMENU (press enter)                                         ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1249

     Volume in drive A has no label
     Directory of A:\

    BRUN30   EXE     70680   4-07-87  10:48a
    CLOSE    EXE      4737   9-01-87   8:33a
    DOF      EXE      6433   9-01-87   8:34a
    ENLARGER EXE      7761   9-01-87   8:34a
    FILE1249 TXT      2493   1-13-89  10:32a
    FLASH12  EXE      7841   9-01-87   8:33a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1310  12-14-88   9:05a
    IMAGE    EXE      6913   9-01-87   8:34a
    LABELS   EXE     15216  10-03-88   2:30p
    MANUAL   BAT       149  12-14-88   9:03a
    MENU     EXE     12112   9-16-88   9:17a
    MMENU    EXE     12128   9-16-88   9:32a
    MODEL    EXE     10001   9-01-87   8:34a
    PHOTO    TXT     39331   9-16-88  10:48a
    PROCS              311   5-13-87   8:34a
    READ     ME        315   9-01-87   8:43a
    SLIDE11  COM     37012   8-31-87   3:46p
    SPEED    EXE      6561   9-01-87   8:33a
    STEPS              514   5-13-87   8:34a
    TIMER2   EXE     66513   9-01-87   8:33a
    USERLIB  EXE      7570   9-22-88   4:13p
           22 file(s)     315939 bytes
                           34816 bytes free
