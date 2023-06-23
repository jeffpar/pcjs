---
layout: page
title: "PC-SIG Diskette Library (Disk #2122)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2122/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2122"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  Disk #2122 VGACAD Disk 3 of 3  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ The programs on this three disk set have been archived.  You will first ║
║ need to unarchive the files with PKUNZIP                                ║
║                      To unarchive, type in the following:               ║
║       PKUNZIP filename.zip  c:\(path)   (press enter)                   ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
+------------------------------------------------------------------------+
|  VGA2EGA v4.0 Registration                       Date:                 |
|  [ ] 5.25"  or  [ ] 3.5" (add $10)                                     |
|                                                                        |
|  Name:                                                                 |
|                                                                        |
|  Address:                                                              |
|                                                                        |
|                                                                        |
|  Where/How     BBS [ ] Name/City/State :                               |
|  Acquired ?  Other [ ] Specify.        :                               |
|------------------------------------------- (Model/Manufacturer) -------|
|  Computer:                                                             |
|                                                                        |
|  Monitor:                                                              |
|                                                                        |
|  Video Card (BIOS version):                                            |
|                                                                        |
|  Other (e.g. Scanner, Video Capturer:                                  |
|                                                                        |
|  Comments: (use back)                                                  |
|                                                  Signature             |
+------------------------------------------------------------------------+
```
{% endraw %}

## CONTENTS.DOC

{% raw %}
```

                              VGACAD v1.60

                      T A B L E   O F   C O N T E N T S

    1.    Requirements...................................................1
    2.    Installation...................................................2
    3.    Command Line Options...........................................2
    4.    Testing........................................................3
    5.    Main Menu......................................................3
    6.    Undo Function..................................................3
    7.    Brush Menu.....................................................4
    8.    Color Menu.....................................................4
    9.    Fill Menu......................................................7
    10.   Zoom Menu......................................................8
    11.  Image Processing Menu..........................................10
    12.   Edit Menu.....................................................13
    13.   Shapes Menu...................................................14
    14.   Text Menu.....................................................15
    15.   File Menu.....................................................16
    16.  VSCRN - The Virtual Screen.....................................18
    17.  VSCRN Tutorial.................................................21
    18.  MVGAVU GIF BLD/PT Viewing Utility..............................24
    19.  VGACAP Utility, RAW2GIF and BLD2GIF............................27
    20.  CGA2VGA (Screen Capture & Convert Utility).....................29
    21.  REGISTRATION...................................................29
     A.  Palette Organization Map.......................................31
     B.  How To Colorize Grey Shade Images..............................32
     C.  Notes On Additive Color Mixtures...............................34





































```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
+------------------------------------------------------------------------+
|  VGACAD v1.60 Registration Form      DATE TODAY:                       |
+------------------------------------+-----------------------------------+
|  TO: Dr. Marvin Gozum              | [  ]  $27.95 BASIC REGISTRATION   |
|      2 Independence Place - #303-2 |                                   |
|      6th and Locust Street         | [  ]  $15.00 HANDLING FOR OUTSIDE |
|      Philadelphia, PA 19106        |              OF USA/CANADA ORDERS |
|------------------------------------|                                   |
|  FULL NAME    (PLEASE PRINT)       | [  ]  $10.00 FOR 3.5" UPDATES     |
|  & ADDRESS                         |              (optional)           |
|                                    | ============                      |
|                                    |                                   |
|                                    |              TOTAL ENCLOSED       |
|                                    | ============                      |
|                                    |                                   |
+------------------------------------+-----------------------------------+
|  Where/How   [  ] COMPUSERVE Forum:                                    |
|  Acquired ?  [  ] LOCAL BBS   Name:                                    |
|                         City/State:                                    |
|                               Tel#:                                    |
|              [  ] DISTRIBUTOR Name:                                    |
|              [  ] FRIEND/ASSOCIATE                                     |
+------------------------------------------------------------------------+
|  Computer    [  ] PS/2             Manufacturer/Model/CPU/Speed(Mhz)   |
|              [  ] PC/XT/AT ------->                                    |
|                                                                        |
|  Memory      [  ] 512 KB RAM                                           |
|              [  ] 640 KB RAM       Manufacturer/Model/RAM on Board     |
|              [  ] Other ---------->                                    |
|                                                                        |
|  Monitor     [  ] PS/2             Manufacturer/Model/Max. Resolution  |
|              [  ] Other ---------->                                    |
|                                                                        |
|  Mouse or    [  ] NONE             Manufacturer/Model/(Serial or Bus)  |
|  Pointing    [  ] MOUSE ---------->                                    |
|  Device      [  ] Other ---------->                                    |
|                                                                        |
|  Video Card  [  ] MCGA/VGA (PS/2)                                      |
|              [  ] 8514/A   (PS/2)  Manufacturer/Model/Video RAM        |
|            * [  ] VGA  (Other) --->                                    |
|            * [  ] SVGA (Other) --->                                    |
|                                                                        |
|  * Do you have a 256 color Video Mode you want to see in future VGACAD |
|    updates/utilities ?  If so, please specify resolution and calling   |
|    "number" (code); refer to your manual for "hex" or decimal codes.   |
|                                                                        |
|    _____ x ____ x 256 colors       _____ (HEX)  or     _____  (DEC)    |
|                                                                        |
|  OTHER EQUIPMENT                                                       |
|  (Scanner,Video Grabber, etc)                                          |
|                                                                        |
|                                                                        |
|  (use back for comments)                         Signature             |
+------------------------------------------------------------------------+

```
{% endraw %}

## UPDATE.DOC

{% raw %}
```
MAJOR NEW FEATURES OF VGACAD v1.60

User Interface

        * "/FM" Force Mouse switch lets YOU initialize the mouse with ANY
          program.  VGACAD will not initialize the mouse and will assume it
          is set correctly.  This is intended for users with optical mice
          that are not as "Microsoft-compatible" as they claim to be.

        * "Panic Button" - pressing both the left and right mouse buttons,
          while in the File Menu, will exit and return to the main menu;
          this feature allows you to exit when the palette has similar
          colors for 0 and 255, which render text and menu options invisible
          after such a palette is loaded.  After exiting, the screen and
          colors 0 and 255 are adjusted automatically.

        * BLD2GIF v3.0 - this is an optional stand-alone conversion
          utility that is integrated with VGACAD; it can be used "outside"
          of VGACAD as a batch utility.  Faster.  BLDLZW.OVL is no longer
          required.


FILES Menu

        * MELD function adjusts a loaded picture to match a new palette as
          close as possible to original.  This function allows editing of
          two or more pictures with different palettes on the same SVGA
          virtual screen.  Choice of HSV or RGB color matching is provided.

        * Faster GIF interface for saving/loading 320x200x256 color GIF pics. 
          BLDLZW.OVL and LZWBLD.OVL are no longer required.  COMMAND.COM is
          no longer required.

        * Automatic interpolation of large GIFs (up to 2048x2048x256)
          to VGA/MCGA 320x200x256.

        * Faster .PLT load; slow BIOS calls replaced.

        * Automatic load of matching *.PLT  when found.

        * Direct "listing" of *.BLD, *.PLT, *.CLP and *.GIF files;
          "LIST" box removed from Files menu.


VSCRN Menu

        * Virtual Screens (up to 32000x32000x256) to edit Super VGA
          GIFs of any known size with any number of colors.  Includes
          preset 640x400x256, 640x480x256 and 800x600x256 screens.

        * 320x200 with 1:1 aspect ratio (really !); this is a special
          hardware trick to adjust the 320x200x256 screen to simulate
          a 320x240x256 (Jovian VIA) screen with 320x200 size for
          creating/editing GIFs with 320x240, 640x480, 800x600, 1024x768
          or ANY screen with 1:1 aspect ratio.

        * User-locatable "Virtual Screen"; locate it anywhere (e.g., RAMDISK
          for transparent access) or 3.5" HD disks for portability.

        * MVGAVU v1.0 - this is an optional stand-alone GIF and BLD/PLT
          viewing utility that is integrated with VGACAD.  320x400x256 and
          360x480x256 viewing modes for "generic" VGA cards, SuperVGA, and
          and regular 320x200x256 VGA/MCGA modes, and  User-definable video
          modes (up to 32000x32000x256) are supported.  It can be used
          "outside" of VGACAD as a presentation program.

        * VGACAP v4.0 - this 100% BIOS Compatible screen capture utility
          that now supports 640x480x256 screen grabs.  It can grab a
          640x480x256 section (starting from upper-left quadrant) from
          larger video screen modes too.
        
        * RAW2GIF v1.0 - this is an optional stand-alone SuperVGA conversion
          utility, integrated with VGACAD, for encoding SuperVGA screens
          (up to 32000x32000x256).  It can be used "outside" of VGACAD for  
          encoding GIFs from screens grabbed with VGACAP(v4.0).


ZOOM Menu

        * FIND and MARK functions

          - FIND will allow the user to "click" any pixel on the "zoomed"
            image; VGACAD locates the appropriate color bar and highlights
            the specific color on the color bar for identification.

          - MARK (formerly FIND) will mark all "zoomed pixels" with an
            asterisk ("*") which correspond to a selected color.

        * BLEND function "blends","tints" or "shades" any "zoomed pixels
          with another color by mixing the new color with "zoomed pixel"
          using the closest palette match.  This function is recursive
          and works the same way a REAL AIRBRUSH would to alter the "tone"
          of a picture.


SHAPES Menu

        * Splines ("curves") can now be plotted with up to 32 points.

        * Variable frame thickness for rectangular shapes.

        * Polygons with unlimited plotting points.

        * Last Action UNDO for shape creation.


Bug Fixes     

        * Since VGACAD uses color 0 and 255 for menus and text, certain
          pictures that had similar colors assigned to color 0 and 255 made
          them invisible; in those cases, 0 and 255 where forced to black
          and white, respectively.  Now, VGACAD will search for the inverse
          color and swap all colors in the screen or Virtual Screen after
          loading; your palette is NEVER affected despite conflicting
          inverse colors.

        * The GIF interface used dynamic memory allocation and "shelled"
          into the DOS environment causing occasional unpredicatble results
          on some exotic machines.  This is now avoided by the new GIF
          interface.

        * The ZOOM menu options sporadically resulted in "Error 5 at 900"
          due to dynamic memory allocation problems; this situation has been
          totally isolated as a separate ZOOM module, with its own memory
          allocation environment.  This module has a "LAST UNDO" screen
          recovery error routine to preserve screens you are working on.

         

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2122

     Volume in drive A has no label
     Directory of A:\

    VGACAD16 ZIP    275848   9-08-89   9:41a
    VGA2EGA4 ZIP     80143   9-08-89  10:50a
    READTHIS NOW      1517  11-13-89  10:21p
    GO       BAT        40  10-18-89   5:11p
    GO       TXT       771   4-15-90   4:08a
            5 file(s)     358319 bytes
                            1024 bytes free
