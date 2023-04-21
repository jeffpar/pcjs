---
layout: page
title: "PC-SIG Diskette Library (Disk #1241)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1241/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1241"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "MANDELBROT & JULIA SET GENERATOR (1076)"

    MANDEL generates and displays marvelously beautiful images based upon
    the recently developed area of mathematics called "fractal geometry."
    With this program, you can create an unlimited number of new images,
    change the colors of the images, and save the images to a disk file.
    Sample images are included, and on-line help suggests numerical values,
    making it easy to begin.
    
    The program has two outstanding features:  the assignment of color masks
    to create an unlimited range of color variations for each image, and the
    ability to zoom in and magnify selected portions of the screen.
    
    MANDEL is a comprehensive program that takes some time to create a new
    image, but once saved to disk the image can be displayed on the screen
    more quickly.  You can also generate Julia images, which are similar to
    the Mandelbrot images, but require different numerical values to create
    the image.  The documentation has suggested readings for more
    information on Mandelbrot and Julia set images.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1241.TXT

{% raw %}
```
Disk No: 1241
Program Title: MANDELBROT & JULIA SET GENERATOR for EGA/VGA (Disk 2 of 2)
PC-SIG version: 1.1

This disk adds additional patterns to the original program that allowed
you to generate detailed and colorful mathematical patterns called
fractals.  Patterns are based upon a recently developed part of
mathematics called "fractal geometry," which creates images in which
each smaller part of the image has the same pattern as the whole part of
the image.  With this program, you can generate an unlimited amount of
new images, change the colors of the images, and save the images to a
disk file.

MANDELBROT is a comprehensive program that takes some time to generate a
new image, but once saved to disk the image can be displayed on the screen
more quickly.  It lets you create "Mandelbrot set" images and "Julia set"
images.  The Julia images are similar to the Mandelbrot images, but require
different numerical values to be inputted to generate the image.  On-line
help displays suggest numerical values for both Mandelbrot and Julia
images.  Sample images are already included, and the documentation has
suggested readings for more information on Mandelbrot and Julia set images.

Usage:  Fractal Images/Mandelbrot and Julia Set Generator.

Special Requirements:  EGA or VGA graphics and monitor.

How to Start:  Insert disk #1076 and type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

M2D           Sample Mandelbrot image for VGA systems.
M2D      HDR  Header file with input parameters.
JULIAX1       Sample Julia image for VGA systems.
JULIAX1  HDR  Header file with input parameters.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1241

     Volume in drive A has no label
     Directory of A:\

    FILE1241 TXT      1775   1-10-89  11:18a
    GO       BAT        38   5-31-88   3:29p
    GO       TXT       925  12-06-88   3:33p
    JULIAX1         118854  11-10-88   6:24p
    JULIAX1  HDR        65  11-06-88   9:09p
    M2D             214246  11-14-88  12:14a
    M2D      HDR        85  11-13-88   6:44p
            7 file(s)     335988 bytes
                           21504 bytes free
