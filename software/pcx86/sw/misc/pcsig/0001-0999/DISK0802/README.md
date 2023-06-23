---
layout: page
title: "PC-SIG Diskette Library (Disk #802)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0802/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0802"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "LIFE FORMS (LIFE CYCLE GENERATION)"

    LIFE FORMS is an enhanced version of the "Game of Life," developed by
    mathematician John Conway.  The program creates a video pattern that
    evolves like biological cells, according to a certain growth rate. Many
    features have been added to Conway's simple game, including eight extra
    growth rules for producing whole new families of screen images.
    
    LIFE FORMS is simple to use, with lots of on-screen help and self-
    explanatory menus.  The "life forms" that you create can be stored,
    retrieved, edited, and deleted.  More than 100 life patterns are
    supplied on the program disk, with room for 240 in all.  You can
    "capture a specimen from the zoo," or design a life form according to
    your own specifications.
    
    Control many factors that influence the growth cycle: complexity of
    development, species, pigmentation, habitat and original seed shape.
    There is a library of seed patterns which have been specifically chosen
    for the interesting results that they tend to produce.  Choose one of
    these, edit it or devise your own seed form.  As your life form starts
    to grow, control how fast each growth step is displayed on the screen
    and even pause your life form's development.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES802.TXT

{% raw %}
```
Disk No  802
Program Title: LIFE FORMS
PC-SIG version 1
 
    LIFE FORMS is an excellent version of the game of life developed by the
mathematician John Conway. The LIFE FORM program creates video patterns
that evolve like biological cells, according to a certain growth rate. This
program takes Conway's simple game and adds many additional features,
including eight extra different growth rules for producing whole new
families of screen images. The images are extremely colorful and
interesting to watch, especially on an EGA monitor! This program is
extremely simple to use, with lots of on-screen help and self explanatory
menus. The "life forms" that you create can be stored, retrieved, edited,
and deleted (killed). More than 100 life patterns are supplied on the
program disk, with room for 240 in all. You can "capture a specimen from
the zoo" or you can design a life form according to your own
specifications. You can control many factors that influence the growth
cycle: complexity of development, species of the life form, its
pigmentation (color), habitat, and its original seed shape. There is a
library of seed patterns stored on disk, which have been specifically
chosen for the interesting results that they tend to produce. You can
choose one of these, edit them, or devise your own seed form. If you need
help, you can always view the parameters for each of the life forms that
are supplied on this disk. As your LIFE FORM starts growing, you can
control how fast each growth step is displayed on the screen and you can
even pause your life form's development. Most of the weak species will
"die" almost as soon as they begin, but these species often produce more
interesting patterns if you can coax them to life. After viewing a newly
created LIFE FORM, you can always go back to change certain patterns to see
what developments take place. LIFE FORMS requires an IBM PC or compatible
with 128K memory, one disk drive, color graphics adapter, color monitor,
and DOS 2.0 or later (version 2.1 for the PCjr). If you want your chance to
be creative and see how computer life-forms evolve, this is it!
 
Usage: Entertainment
 
System Requirements: 128K of memory and a color graphics adapter.
 
How to Start: Type GO (press enter)
 
Suggested Registration: $15, includes full documentation, the most
recent program update, plus a year's question and answer support by mail.
 
File Descriptions:
 
CONFIG   SYS  Configuration file with buffers to speed file access.
AUTOEXEC BAT  Batch file that starts program upon boot-up.
ZOOLIFES RND  Data file for LIFEFORM parameters.
SEEDS    RND  Data file for seed patterns.
ZOONAMES SEQ  Data file for LIFEFORM names.
SEEDNUMS SEQ  Data file containing type numbers for LIFEFORM seeds.
LF-TITLE PIC  Title picture that appears at start of program.
LF-PAGES PIC  Instruction pages enabling user to choose parameters.
ED-PAGES PIC  Instruction pages that appear in the editor program.
LINK          Holds system configuration data when switching programs.
LIFEFORM EXE  The main LIFEFORM generation program.
EDITOR   EXE  Program to edit LIFEFORMS.
READ     ME   Brief documentation.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk #802 LIFEFORMS  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer type:                         ║
║                COPY READ.ME PRN (press enter)                           ║
║                                                                         ║
║ To start the program type LIFEFORM (press enter)                        ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0802

     Volume in drive A has no label
     Directory of A:\

    CONFIG   SYS        12   7-03-85  11:11a
    AUTOEXEC BAT        25   7-03-85  11:12a
    ZOOLIFES RND     12544   1-01-80   2:11a
    SEEDS    RND     13568   1-01-80  12:03a
    ZOONAMES SEQ      1152   1-01-80   2:10a
    SEEDNUMS SEQ       128   1-01-80  12:10a
    LF-TITLE PIC      2176   1-01-80  12:58a
    LF-PAGES PIC     14464   1-01-80  12:03a
    ED-PAGES PIC     14464   1-01-80  12:14a
    LINK                32   1-01-80  12:01a
    LIFEFORM EXE     38528   1-01-80  12:22a
    EDITOR   EXE     34688   1-01-80  12:24a
    READ     ME       6259   6-18-87   5:11p
    FILES802 TXT      3307   7-08-87  12:10a
    GO       TXT       617   7-08-87  12:19a
    GO       BAT        38   7-08-87  12:19a
           16 file(s)     142002 bytes
                           12288 bytes free
