---
layout: page
title: "PC-SIG Diskette Library (Disk #1851)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1851/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1851"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "READY SET DRAW"

    Looking for a small paint program that does the basics without all the
    frills of a full-blown computer studio?  READY SET DRAW has the simple
    functions you want, and it works with or without a mouse.
    READY SET DRAW is a fun, easy drawing program with features like
    copy, paint, color, loading and saving pictures, and other basic
    operations.
    
    Once loaded you will find a small X in the middle of the screen --
    that's your drawing pen.  In the top left hand corner of the screen it
    has the pen status (up, down, erasing).  When the pen is down it will
    draw, when the pen is up it won't draw, and when the pen is erasing it
    will erase each dot in the middle of the X.  Eight direction keys, up,
    left, down, right, and diagonals, move the X the corresponding
    direction.
    
    From there, you can fill in enclosed areas, cut and paste portions of
    your drawing, automatically draw various sized circles and rectangles,
    even change the color of your pen -- all with simple key strokes.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1851.TXT

{% raw %}
```
Disk No: 1851                                                           
Disk Title: Ready Set Draw                                              
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Ready Set Draw                                           
Author Version: 2.0                                                     
Author Registration: $5.00                                              
Special Requirements: CGA, hard disk drive, and mouse optional.         
                                                                        
Looking for a small paint program that does the basics without all      
the frills of a full blown computer studio?  READY SET DRAW has the     
simple functions you want and it works with or without a mouse.         
READY SET DRAW is a fun, easy, drawing program with features like       
copy, paint, color,loading and saving pictures and other basic          
operations.                                                             
                                                                        
Once loaded you will find a small X in the middle of the screen--that's 
your drawing pen.  In the top left hand corner of the screen it has the 
pen status (up,down,erasing).  When the pen is down it will draw, when  
the pen is up it won't draw, and when the pen is erasing it will erase  
each dot in the middle of the X. Eight direction keys, up, left, down,  
right, and diagonals, move the X the corresponding direction.           
                                                                        
From there, you can fill in enclosed areas, cut and paste portions of   
your drawing, automatically draw various sized circles and rectangles,  
even change the color of your pen--all with simple key strokes.         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```
DISKFILS.ARC-------This is an arced file. This file contains:
	RSDRAW.DOC--This is the documentation to Ready Set Draw.
	RSDRAW.EXE--This is the CGA version of RSDRAW.
	VGEGDRAW.EXE--This is the EGA version of RSDRAW.
	VGADRAW.EXE--This is the VGA version of RSDRAW.
	SAMPLE.xxx--There are two   of these. They are sample pictures
		for (VGA-.VPC,CGA-.PIC)
	RSDRAW.MNU--Menu file for logitech mouse.
	MENU.COM--Menu driver for mouse.
        GO.EXE--Program to run RSDRAW and others.
	GROUNDS.EXE-Little adventur game.
------------files not in DISKFILS.ARC----------------------
ARCE.COM--To un-arc DISKFILS.ARC
INSTALL.BAT--To install RSDRAW on your C drive [make sure there is 60k on you 
	     C drive.]
README.1ST--Little instruction on INSTALL.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1851

     Volume in drive A has no label
     Directory of A:\

    ARCE     COM      7517   3-03-89   4:03a
    DISKFILS ARC    339776   1-17-90   4:57p
    FILE1851 TXT      2369   3-26-90   1:18p
    FILES    TXT       767   1-04-80  12:44a
    GO1      BAT        39   3-26-90   1:13p
    GO1      TXT       694   3-26-90   1:15p
    INSTALL  BAT        55   1-04-80   1:12a
    README   1ST       480   1-04-80  12:18a
            8 file(s)     351697 bytes
                            6144 bytes free
