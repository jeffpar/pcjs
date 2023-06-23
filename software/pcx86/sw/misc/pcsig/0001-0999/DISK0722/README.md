---
layout: page
title: "PC-SIG Diskette Library (Disk #722)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0722/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0722"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMPOSER"

    OK, Schroeder -- I mean Beethoven -- here's a program for you.
    COMPOSER
    is a simple music editor that lets you create music and then integrate
    your creation into a batch file or a program written in Turbo Pascal. A
    visual display of a piano keyboard lets you play and "record" your
    music from the computer keys.  COMPOSER is a great way to bring musical
    life to programs you have written.  It has a three-octave range and
    requires some knowledge of music terminology to create original music.
    Eleven prewritten songs come with the program.
    
    Though it lets Turbo Pascal access the songs, it does not put the files
    into source code.  By calling the file TRBOTUNE.SYS in your Pascal
    program, you can access your songs.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES722.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No 722   COMPOSER version 1.1                                   v1
---------------------------------------------------------------------------
The programs on this disk consist of a basic music editor  with  a
three octave range, and programs to make the  tunes  created  with
COMPOSER accessable to TURBO PASCAL (tm)  applications  and  batch
files.
 
------------  COMPOSER (V1.1)
COMPOSER COM  Main program
COMPOSER DOC  Manual for COMPOSER
ERROR    MSG  Error message overlay
COMPOSER PIF  Screen file for COMPOSER
4X6      FON  Part of COMPOSER
8X8      FON  Part of COMPOSER
SONGS    DTA  Data file used by COMPOSER/TUNES/LISTSONG
TEMPSCRN      Screen file for COMPOSER
------------
TUNES    COM  Plays tunes in SONGS.DTA
SONG     BAT  Batch file that plays contents of SONGS.DTA using TUNES.COM
------------
LISTSONG COM  Sends titles of tunes in song file (ex. SONGS.DTA) to printer
------------
TRBOTUNE SYS  Allows access to tunes in TRBOTUNE.LIB for TURBO Pascal
TRBOTUNE LIB  Data file used by TRBOTUNE.SYS
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## GO.TXT

{% raw %}
```
 
If you want to print the manual, at the `A>' type:
            COPY COMPOSER.DOC PRN: <enter>
 
If you want to read the manual, at the `A>' type: TYPE COMPOSER.DOC <enter>
 
If you want to hear some tunes (there are 8), type: SONG <enter>
 
If you want to run COMPOSER, type: COMPOSER <enter>
 
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## NOTES722.TXT

{% raw %}
```
Program name: COMPOSER  V1.1
 
Author name: BOB AMAN
Address:     2829 MOURNING DOVE WAY
             TITUSVILLE, FLORIDA 32780
 
Telephone Number: None listed
 
Suggested Donation: None, but registration requested to allow author to
                    map distribution
 
Program Description:
 
COMPOSER turns the row of keys from "A" to ":" into a keyboard that allows
the user to make single-voice tunes (one note at a time). Function keys
define commands and menus for adjusting tempo, making notes sharp or flat,
editing, loading, saving, changing from piano to organ voices, and changing
octaves. The edit menu allows placement of notes and rests, and allows for
the variation of note timing from 1/16 note to 4 whole notes (the length of
time a note is sustained).
 
Tunes can saved to a file whose default title is SONGS.DTA but can also be
a Turbo Pascal(tm) library file (.LIB). Up to 40 tunes can be saved to this
file which can then be accessed through a of other programs included.
LISTSONG.COM sends a list of the titles in SONGS.DTA to a printer for
hard-copy output. TUNES.COM will read the tunes in SONGS.DTA and can be
used in a batch file to play tunes in sequence. SONG.BAT is an example of
how this works.
 
TRBOTUNES.SYS can be included in Turbo Pascal(tm) applications and will
call the contents of TRBOTUNES.LIB.
 
COMPOSER.COM requires an IBM PC or compatible with 256K Ram, and an IBM CGA
or compatible color graphics adapter. TRBOTUNE.SYS requires Turbo Pascal
and a Songs library created with COMPOSER. TUNES.COM requires a Songs
library created with COMPOSER and named SONGS.DTA.
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0722

     Volume in drive A has no label
     Directory of A:\

    4X6      FON       285   2-25-85   3:50a
    8X8      FON      2048  11-20-84   8:33p
    COMPOSER COM     56469  10-18-86   9:02p
    COMPOSER DOC      8960  10-19-86   8:00p
    COMPOSER PIF       369   1-27-86   9:53p
    ERROR    MSG       569   4-04-85   7:43p
    FILES722 TXT      1223   3-02-87   2:55p
    GO       BAT        18   2-02-87  12:16p
    GO       TXT       405   2-09-87  12:13p
    LISTSONG COM     16457  12-01-85   1:06p
    NOTES722 TXT      1743   3-02-87   2:55p
    SONG     BAT        63  11-30-85   2:03p
    SONGS    DTA      6648  11-29-85   6:09p
    TEMPSCRN         16384   3-02-00   2:25p
    TRBOTUNE LIB      1662  11-24-85  11:38a
    TRBOTUNE SYS      9711  12-01-85   1:04p
    TUNES    COM     14383  12-01-85   1:16p
           17 file(s)     137397 bytes
                           18432 bytes free
