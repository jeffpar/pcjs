---
layout: page
title: "PC-SIG Diskette Library (Disk #704)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0704/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0704"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DANCAD 3D 4 OF 4 (ALSO 701,702,703)"

    DANCAD3D is an excellent and versatile drawing program that lets you do
    very complex things like stereoscopic 3D wire-frame drawing, or very
    simple things like designing letterheads. Draw in two and three
    dimensions. Separate groups of lines into "elements" that can be
    saved, loaded, magnified, rotated, flipped, offset (moved), and used
    over and over again. Keep them as a file on a disk (give them names
    like cube, sphere, and cylinder).
    
    DANCAD3D prints surprisingly sharp, crisp lines on Epson/IBM-compatible
    dot-matrix printers. Use it for many different
    applications, including the following:
    
    ~ Mechanical drawings and technical illustrations
    
    ~ Business forms of many kinds
    
    ~ Page layouts which combine text and drawings
    
    ~ Automatic computer slide shows
    
    ~ Engineering simulation to verify the fit of three-dimensional shapes
    
    DANCAD3D also supports many plotters, PostScript laser printers, and
    image setters such as the Linotronic 300. It works with a mouse, 3-D
    track ball, or cursor keys.
    
    DANCAD3D includes the DANMOVIE program, a full demonstration, and its
    documentation. DANMOVIE is a very useful engineering tool. With it,
    you can program DANCAD3D to make an animated close-up of parts in a
    layout drawing. Use this close-up to confirm the fit of moving parts.
    Produce an animated perspective view of the entire assembly with all of
    the parts in motion.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DANMOVIE.DOC

{% raw %}
```

     [   D  A  N  M  O  V  I  E    D  O  C  U  M  E  N  T  A  T  I  O  N  ]   


                        DANMOVIE.COM v1.10 (512k to 640k)

               For Use With DANCAD3D.COM v1.33-512k or v1.30-640k.

          Daniel H. Hudgins, 466 Diamond St., San Francisco, CA  94114.

         SYSTEM REQUIREMENTS:

         * Color Graphics Adapter Video Board (CGA) 100% compatible.
           Note: DANMOVIE v2.0 supports EGA, MGC and Hercules (tm)  
           video boards, it comes with the manual when you order it.
         * 512k or more memory.
         * 100% compatible PC with a disk drive.
         * DANCAD3D.COM, v2.0 with 14 disks and 300+ page manual.

         DANMOVIE works with DANCAD 3D to animate screens  saved  as  pixel
     bit  maps.  DANCAD  3D can print out or plot the drawings at very high
     resolution (greater than 4 million pixels) if you  like  the  way  the
     animation looks using DANMOVIE.

         DANMOVIE is a useful engineering tool since you can program DANCAD
     3D to make an animated close-up of parts in a layout drawing.  In that
     way  you  can  confirm  the fit of moving parts.  You can also program
     DANCAD 3D to produce a animated perspective view of the whole assembly
     with all its parts in motion!

         To run DANMOVIE you need to have a set of pixel frame  files.  You
     can  make  these  with  DANCAD  3D.  Read  the  tutorial  in  the file
     MANUAL.DOC that comes with DANCAD 3D.  The set of frame files must all
     have the same PATH\FILENAME.  The filename extensions must be numbered
     consecutively    starting    with    .1    (e.g.:    c:\GQ\MY_FRAME.1,
     c:\GQ\MY_FRAME.2,      c:\GQ\MY_FRAME.3,     c:\GQ\MY_FRAME.4,     ...
     c:\GQ\MY_FRAME.24).  DANMOVIE v1.0 will read  up  to  24  frames  into
     memory.

         There are two ways to load the pixel frame files.  One, just enter
     X:\DANMOVIE at the DOS prompt (where X:\ is the path to DANMOVIE.COM).
     And  the enter the path\filename (don't enter the .EXT (e.g.:  B:FRAME
     not  B:FRAME.1))  when  prompted  for  it.   Two,   enter  X:\DANMOVIE
     X:\FRAMES  (where  X:\FRAMES is the path\filename for the set of pixel
     frame files) at the DOS prompt.

         After the frames are loaded you can run them forward (press  [F]),
     reverse  (press  [R]),  back  n'  forth (press [B]),  change the speed
     (press [D] or [S]),  and pause the action at any  point  (press  [P]).
     There is a pop-up help screen you can get by pressing [H] (for help or
     ^[^]  or  [Return]).  To exit to DOS press ^C or ^Q (^C means press
     the [Ctrl] key at the same time you press the [C] key).

         Version 1.10 of DANMOVIE has less flicker when  run fast.  Version 
     2.x supports 34 CGA  color frames, and  Hercules (tm)  Hercules or EGA
     (tm) IBM high  resolution  frames.  DANCAD3D  and  DANCAD87  require a 
     harddisk to run properly.

         If you find this program useful (or just fun) write me and say so.
     If you can think of any changes you would like to see in a up-date  of
     any of my programs send me a letter.
      

                                      [1]

    

```
{% endraw %}

## FILES.DOC

{% raw %}
```

     Daniel H. Hudgins, 466 Diamond St., San Francisco, CA  94114

                  Read the notice on the DANCAD3D.COM 
                     disk before using this disk.

                   Directory of  DANMOVIE DEMO v1.10H 
                               19 Files      

         FRAME    1       DANCAD 3D pixel frame file.
         FRAME    2                   "
         FRAME    3                   "
         FRAME    4                   "
         FRAME    5                   "
         FRAME    6                   "
         FRAME    7                   "
         FRAME    8                   "
         FRAME    9                   "
         FRAME    10                  "
         FRAME    11                  "
         FRAME    12                  "
         FRAME    13                  "
         FRAME    14                  "
         FRAME    15                  "
         DANMOVIE COM     Program that shows the frame files.
         DANMOVIE DOC     Documentation for DANMOVIE.COM
         GO       BAT     Runs demo.
         FILES    DOC     This file.

```
{% endraw %}

## FILES704.TXT

{% raw %}
```
Disk No:  704
Program Title: DANCAD3D version 1.1H - WAVES (Disk 4 of 4)
PC-SIG version 2.3

DANMOVIE works with DANCAD3D to animate screens saved as pixel-bit maps.
DANCAD3D can print or plot the drawings at very high resolution (greater
than 4 million pixels) if you like the way the animation looks using
DANMOVIE.

DANMOVIE is a useful engineering tool since you can program DANCAD3D to
make an animated close-up of parts in a layout drawing.  In that way you
can confirm the fit of moving parts.  You can also program DANCAD3D to
produce an animated perspective view of the whole assembly with all its
parts in motion!  This is the third disk in the DANCAD3D set and
contains an animated demonstration of a piston.

Usage:  Graphics/Cad.

Special Requirements:  512K memory, one disk drive, and color graphics
for this demo.

How to Start:  Type GO (press enter).

Suggested Registration:  $35.00

File Descriptions:

FRAME    ???  DANCAD3D pixel-frame files (15 files).
DANMOVIE COM  Program that shows the frame files.
DANMOVIE DOC  Documentation for DANMOVIE.COM.
GO       BAT  Batch file to run demonstration.
FILES    DOC  Author's file listing for DANMOVIE.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0704

     Volume in drive A has no label
     Directory of A:\

    DANMOVIE COM     27002   8-31-88   9:20a
    DANMOVIE DOC      3258   8-31-88   9:30a
    FILES    DOC      1113   8-31-88   9:37a
    FILES704 TXT      1310  11-21-88   8:48a
    FRAME    1       16384   8-01-87  12:09a
    FRAME    10      16384   8-01-87  12:02a
    FRAME    11      16384   8-01-87  12:02a
    FRAME    12      16384   8-01-87  12:01a
    FRAME    13      16384   8-01-87  12:00a
    FRAME    14      16384   8-01-87  12:00a
    FRAME    15      16384   7-31-87  11:59p
    FRAME    2       16384   8-01-87  12:08a
    FRAME    3       16384   8-01-87  12:07a
    FRAME    4       16384   8-01-87  12:07a
    FRAME    5       16384   8-01-87  12:06a
    FRAME    6       16384   8-01-87  12:05a
    FRAME    7       16384   8-01-87  12:04a
    FRAME    8       16384   8-01-87  12:04a
    FRAME    9       16384   8-01-87  12:03a
    GO       BAT        35   8-31-88   9:32a
           20 file(s)     278478 bytes
                           39936 bytes free
