---
layout: page
title: "PC-SIG Diskette Library (Disk #2420)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2420/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2420"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FINGER MAPS"

    FINGER MAPS is an object-oriented drawing package supplemented with a
    comprehensive database of world geographical coordinates.  It can serve
    as a standalone object drawing program, a world map maker, or simply a
    .PCX paint image file editor.
    
    The finished drawing or map can be saved and converted into a. PCX
    bitmap or a proprietary object format.  FINGER MAPS can read other .PCX
    files as a background image and draw objects on top of it.  The screen
    image can be printed to an HP-compatible LaserJet in 300 dpi.
    
    The map database contains geographical coordinates of all country
    borders, U.S. state borders, major rivers and lakes, U.S. state
    capitals and other major U.S. cities, and foreign capitals.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```
          Poisson Technology
816 Gregory Court, Fremont, CA 94539, U.S.A.
    Phone:415-623-1087   FAX:415-490-5865


Finger Maps Version 1.00 Release Note:

Finger Maps is a object-oriented drawing package supplemented with
a comprehensive database of world geographical coordinates.  It can
serve as a stand-alone object drawing program, a world map maker or
simply a PCX paint image file editor.

The finished drawing or map can be saved and converted into a PCX
bitmap or a proprietary object format. Finger Maps can read other
PCX files as background image and draw objects on top of it.  The
screen image can be printed to a HP compatible laserjet in 300
dots/inch. Registered users will get support for both 9-pin and
24-pin Epson compatible dot-matrix printers.

System Requirements:
o IBM PC with 384K memory and a 360K floppy drive.
o VGA or EGA color monitors or B/W CGA or Hercules.
o (Optional) Microsoft compatible mouse on COM1.

Map database contains geographical coordinates of all country
borders, U.S. state borders, major rivers and lakes, U.S. state
capitals and other major U.S. cities and foreign capitals.

Command Summary:
*R is for registered user only.  Please see REGISTER.DOC.

  FILE
    Load  : load pcx file.
    Save  : save the screen image into a PCX file.
    Print : Print the screen image.
      LaserJet : HP LaserJet at 300 dpi.
      Inverse : Inverse the print out color.
*R    Scale   : Scale the image both in X and Y directions
*R    Eps-24pin: EPSON 24-pin printer at 180 dpi.
*R    Dotmatrix: EPSON compatible dot-matrix printer
*R    Window  : Define the window area to be printed.
    Saveas: save screen into a new PCX filename.
    Load_obj:  Load object files.
    Save_obj:  Save object files.

  EDIT
    Undo  : Undo the last entered object.
    Copy  : Copy objects into redo buffer.
    Cut   : Cut objects  into Redo buffer.
    Paste : Copy redo buffer objects into screen.
    Redo  : Undo the last undo.
    Clear_buf : Clear redo buffer.
    CopyAll   : Copy all objects and put into redo buffer.
    EraseAll  : Erase all objects and put into redo buffer.

  MAP
    World  : Draw the world map and corner map.
*R  Window : Redefine the window area.
    Redraw : Redraw the window area without corner map.
    Corner : Redraw the corner map.
*R  Zoomin : Magnify the world view by 4x.
    Clear  : Clear the screen display.
    Distance: Distance between two points in miles.
*R  Zoomout : Shrink the world view by 4x.
    Refill  : redraw FILL object only.

  OBJECT
    Line   : Draw a line.
    Box    : Draw a rectangle.
    Circle : Draw a circle.
    Ellipse: Draw a ellipse.
    Text   : Enter a line of text.
    Fill   : Fill a region enclosed by white boundary lines.
    Redraw : Redraw objects fully enclosed by window area.

  FILL
    Box    : Draw a filled rectangle.
    Circle : Draw a filled circle.
    Ellipse: Draw a filled ellipse.

  SET
    Line   : Select line style.
    Pattern: Select fill pattern for solid objects.
    Color_f: Set drawing color.   { default white }
    Color_b: Set background color.{ default black }
    Memory : (Debug use) show available memory in bytes.
    River  : Toggle on/off map river data.(default OFF)
    Text   : Toggle on/off TEXT object display.(default ON)

  DISPLAY
    USA : Display US/Canada cities and states.
      City  : Display all cities.
      State : Display all states.
      Showall : Show both cities and states.
      Showone : Show all matching data points.
    World   : Display foreign capitols and countries.
      City  : Display all cities.
      Country : Display all countries.
      Showall : Display both foreign capitol and countries.
      Showone : Show all matching data points.

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
+========================================================+
|     Finger Maps Version 1.00 User Registration Form    |
+========================================================+
         $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
         <<<< 30-Day Money Back Guarantee >>>>
         $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

o Registration Fee:  U.S. $15.00.                   $_____

o Shipping & handling:
  (5 1/4" diskette : U.S. $3.00, Foreign $5.00)
  (3 1/2" diskette : U.S. $4.00, Foreign $6.00)     $_____

No Foreign check please.  U.S. Check, Cash or
Money Order payable to "POISSON TECHNOLOGY".  Total $_____

Address: 816 Gregory Court, Fremont, CA 94539, U.S.A
Phone:415-623-1087    FAX:415-490-5865

------------- REGISTERED USER INFORMATION ----------------

Date: ____/____/____      Telephone Number: ______________

Name:_____________________________________________________

Address:__________________________________________________

__________________________________________________________

City_______________________State____________Zip___________

Country_________________________

Printer Model: ________________
IBM   PC___    XT____   AT____   PS/2___   Others:________
Monitor: Hercules__   CGA__   EGA__        Others:________

Obtained Finger Maps 1.00 from:
Vendor Name:______________________________________________
Telephone Number:_________________________________________
Address:__________________________________________________
__________________________________________________________
City_______________________State____________Zip___________
==================== Comments ============================






----------------------------------------------------------
Return Policy:
* product must be returned in original package.
* shipping and handling charges not refundable.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2420

     Volume in drive A has no label
     Directory of A:\

    MAP      EXE    155920  10-05-90   9:30a
    USA      DAT      4600   7-14-90   5:26p
    WORLD    DAT      4554   7-14-90   1:00p
    WORLD    MAP    156960   6-15-86   3:29p
    EGAVGA   BGI      5363   5-02-89   5:50a
    CGA      BGI      6253   5-02-89   5:50a
    HERC     BGI      6125   5-02-89   5:50a
    TRIP     CHR      7241   5-02-89   5:50a
    PRINTER  DAT      1332   7-27-90   4:27p
    README   DOC      3838  10-05-90   8:00a
    REGISTER DOC      1871  10-05-90   9:31a
    GO       BAT       977   1-01-80   6:11a
           12 file(s)     355034 bytes
                            1024 bytes free
