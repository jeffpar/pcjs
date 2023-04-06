---
layout: page
title: "PC-SIG Diskette Library (Disk #1587)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1587/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1587"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VGACAD 1 OF 3 (ALSO 1588, 2122)"

    VGACAD is an all-purpose graphics editor, image processor and paint
    program to create, enhance, or colorize digitized images.
    
    VGACAD provides 21 brush shapes with 5 different brush modes, normal,
    spray, air#1, air#2, and eraser. There are 256 color fills, border
    tracing, and pattern/gradient fills. Three modes of zoom editing are
    also available. Air#1 (airbrush) adds a color mixture as you paint
    over your picture, just like a real air brush. Air#2 mixes colors in
    more gradually. Spray, when used with the Mask feature, has the
    effect of placing a stencil over the painted area. Colorize grey
    images in the same way old movies are reborn in color. Cut and Paste
    functions are also fully supported.
    
    VGACAD provides several ways of altering the size and orientation of an
    image. Rotate the entire screen 90x or continue to 180x to turn it
    upside-down. Create a mirror image, or an upside-down mirror image, of
    any defined area.
    
    VGACAD supports .BLD, .PLT, .GIF and .CLP file formats. Utilities are
    provided to convert pictures to VGA from CGA and EGA, and from VGA to
    EGA. Also available is a VGA print utility that prints any viewable
    color picture in 7 user-selected grey shades. Shrink large-sized
    pictures. Edit large .GIF files (up tp 32K x 32K x 256).
    
    VGACAD has been used by such institutions as Lawrence Livermore Labs,
    the University of Pittsburgh, Warner Brothers, and the New York Times.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## XCGAVU.BAS

```bas
CGXNAME$ = COMMAND$:                    'get name from Command line
ON ERROR GOTO NoFile

OPEN CGXNAME$ + ".CGX" FOR INPUT AS 1:  'make sure it exists
CLOSE

GOSUB SetXCGA                           'trigger 160x100x16 mode
DEF SEG = &HB800                        'change DSEG to screen
BLOAD CGXNAME$ + ".CGX", 0              'dump picture to screen
a$ = INPUT$(1)
SCREEN 2: SCREEN 0: END                 'restore text mode and exit

NoFile: BEEP:
        PRINT "Cannot find " + CGXNAME$
        END


SetXCGA:

'WARNING: Changing these registers settings may cause a CRASH !

DEF SEG = 0
POKE &H465, 0: OUT &H3D8, 0:
POKE &H466, 0: OUT &H3D9, 0
OUT &H3D4, 0: OUT &H3D5, 113
OUT &H3D4, 1: OUT &H3D5, 80
OUT &H3D4, 2: OUT &H3D5, 90
OUT &H3D4, 3: OUT &H3D5, 10
OUT &H3D4, 4: OUT &H3D5, 127
OUT &H3D4, 5: OUT &H3D5, 6
OUT &H3D4, 6: OUT &H3D5, 100
OUT &H3D4, 7: OUT &H3D5, 112
OUT &H3D4, 8: OUT &H3D5, 2
OUT &H3D4, 9: OUT &H3D5, 1
OUT &H3D4, 10: OUT &H3D5, 32
OUT &H3D4, 11: OUT &H3D5, 0
POKE &H465, 9: OUT &H3D8, 9
RETURN

```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1587

     Volume in drive A has no label
     Directory of A:\

    PKUNZIP  EXE     21440   7-21-89   1:01a
    GIFDTP20 ZIP    147791   1-28-90   7:38p
    VGA2CGA2 ZIP     31201  12-17-89  10:09p
    SQZGIF20 ZIP    102871  12-17-89   3:19p
    GO       BAT        40  10-18-89   5:11p
    GO       TXT       771   4-15-90   4:00a
    FILE1587 TXT      1826   4-15-90   4:10a
            7 file(s)     305940 bytes
                           13312 bytes free
