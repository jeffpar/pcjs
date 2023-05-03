---
layout: page
title: "PC-SIG Diskette Library (Disk #763)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0763/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0763"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FINGER PAINTING PROGRAM"

    FINGER PAINT, reminiscent of some programs for the Macintosh, is an
    easy-to-use, straightforward paint program for either home or office
    use.
    
    FINGER PAINT has most of the bells and whistles you would find in a
    print program, such as variable drawing functions (dots, lines,
    rectangles, circle, arcs, etc.).  But it also has a few that are rare
    in a program of this price -- animation, variable text fonts, 3-D
    drawing, and more.  The Movie command can serve as a slide show or
    animation program.  19 demo pictures are included to demonstrate this
    feature.  One of its major advantages is its Hercules graphics
    compatibility.  This means it can run on many computers.  The picture
    file format is PCX which can be used by almost all paint programs.  The
    non-registered copy of FINGER PAINT works only with the HP LaserJet
    printer and produces a 150 dot-per-inch output.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0763.TXT

{% raw %}
```
Disk No:  763                                                           
Disk Title: Finger Painting Program                                     
PC-SIG Version: S1.6                                                    
                                                                        
Program Title: Finger Painting Program                                  
Author Version: 4.0                                                     
Author Registration: $29.00                                             
Special Requirements: 320K RAM and CGA, EGA, or Hercules graphics.      
                                                                        
FINGER PAINT, reminiscent of some programs for the Macintosh, is an     
easy-to-use, straightforward paint program for either home or office    
use.                                                                    
                                                                        
FINGER PAINT has most of the bells and whistles you would find in a     
print program, such as variable drawing functions (dots, lines,         
rectangles, circle, arcs, etc.).  But it also has a few that are rare   
in a program of this price -- animation, variable text fonts, two-page  
editing, and more.  One of its major advantages is its Hercules graphics
compatibility.  This means it can run on many computers.                
                                                                        
The non-registered copy of FINGER PAINT works only with the HP LaserJet 
printer and produces a 150 dot-per-inch output.                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk #763 FINGER PAINT  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer type:                         ║
║                  COPY MANUAL.DOC PRN  (press enter)                     ║
║                                                                         ║
║ To start the program type: F (press enter)                              ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
/*******************************************************/
/*  FINGER PAINT (TM)      Version 4.00                */
/*  (C) Copyright, Poisson Technology,  1987-1990      */
/*  All Rights Reserved Worldwide.                     */
/*                                                     */
/*  Address : 816 Gregory Court                        */
/*            Fremont, California 94539                */
/*            U.S.A.                                   */
/*                                                     */
/*  Telephone: 415-623-1087         FAX: 415-490-5865  */
/*******************************************************/

1.  BOOTUP PROCEDURE

 . Boot computer with DOS disk, version 2.10 or later.
 . Put the program floppy diskette in drive A.
 . type F then press enter.

 . To install finger paint into directory fpaint on drive C:
   A:>COPY  *.*  C:\FPAINT

2. SYSTEM  REQUIREMENT

 . IBM PC, XT, AT, PS/2, compatibles, and clones with 256K bytes memory.
 . Hercules(Monographics), EGA or CGA graphics card and monitor.
 . Optional: Printer on parallel port LPT1:, Mouse on serial port COM1:

3. PROGRAM USAGE

 . Use arrow keys or mouse to move cursor in 8 directions and follow
   instructions prompted on top of the screen.  Please read MANUAL.DOC
   for details.

4. METHODS OF COMMAND SELECTION

 . Press function keys [F1 to F10,  ALT-F1  to  ALT-F10 ], or double
   click(using the left button on the mouse) the icon to select.
 . Move the highlighted block horizontally and press ENTER when ready.
 . Type the initial of the command.

5.  Disk files

READ.ME       : Program summary file.
F.EXE         : Finger Paint program.
*.BGI         : Graphics drivers.
*.CHR         : Font files.
DEMO*.PCX     : picture files in PCX format.
ROLL*.PCX     : picture files in PCX format.
RELEASE.DOC   : Release note of Version 4.00.
REGISTER.DOC  : User Registration Form.
MANUAL.DOC    : Finger Paint User's Manual.
PRINTER.DOC   : List of supported LaserJets and dot matrix printers for
                registered users. ( over 160 printers! )

Program Feature Lists:

.  fp2pcx, for registered user only, converts the Finger Paint V2.10
   format into PCX compatible format.
   usage  >fp2pcx inputfilename outputfilename [ENTER]
   or     >fp2pcx  [ENTER]  and enter filenames later.

.  Finger Paint supports EGA(640x350), Hercules(720x348) and
   CGA(640x200) modes in black and white.

.  Commands can be selected by pressing the function key or click
   the left mouse button.  Command can also be selected by
   double click or press the function key twice.

   [F1]     : means pressing the function key F1.
   [ALT F1] : means pressing [ALT] and [F1] keys together.
   [click]  : means pressing the left button then release it.

.  Both keyboard keys and mouse can be used together to draw pictures.

.  Four different fonts are included, and each font can have 81, 9x9,
   different sizes.

.  MOVIE can diplay up to 9999 continuous frames for animation use.
   * Hint: put all *.pcx files into RAM disk to speed up the file loading.

.  Printer drivers are available for registered users:
     The full size printout will fit on the 8.5x11 paper.
     Printout scaling is provided for dot-matrix printers.
     Four different print density for LaserJet, 75dpi to 300 dpi.

.  There are 29 commands in total.  20 commands can be accessed
   directly through function keys.

.  Please use the '+' key on the numeric keypad.


Command summary:

Line [F1] : Draw a line between two points

   Move cursor to the beginning point and press the '+' key or
   the left mouse button to define the starting point.
   Move cursor to the ending point of the line and press the '+' key
   or left button again to complete the line.  Press [ESC] or right
   button to exit the command and back to top menu.

Circle [F2] : Draw a circle with different X & Y radii.

   Move cursor to the center of a circle and press the '+' key or
   the left mouse button to define the center point.
   Move cursor horizontally to increase the X radius, or vertically
   to increate the Y radius, and press the '+' key or left mouse
   button when done.

   Press [ESC] or right button to exit.

Rect [F3] : Draw a rectangle between two diagonal points.

   Move cursor to the corner of a rectangle and press the '+' key or
   the left mouse button to define the corner point.
   Move cursor horizontally to change the width, or vertically to
   change the height of rectangle.  Press the '+' key or left mouse
   button when done.

   Press [ESC] or right button to exit.


Scroll  [F4] :  Move the screen window in all directions.

   The default page width is always 640 pixels wide and the vertical
   number of pixels is based on graphics mode or defined by command line
   parameters 'y'.  For example, typing 'f y750' will setup the vertical
   resolutions to be 750 pixels.  The working screen area is smaller than
   the full page. Use SCROLL commnad to move the drawing around.
   Use up or down arrow keys to move screen up or down.  Use left or
   right arrow keys to move screen left or right.  PgUp or PgDn will move
   screen in Y direction by 20 pixels each key stroke.  'Home' key moves
   screen to top of the page.  'End' key moves screen to bottom of the page.


Draw  [F5] : Free hand drawing.

   Move cursor to the starting point and press the '+' key or left button
   to put the pen down and start drawing.  Press '+' key or left button
   again to lift the pen and move to a new starting point.

   Press [ESC] or the right button to exit.


Triangle [F6] : Draw a pyramid.

   Move cursor to the starting point and press the '+' key or left mouse
   button to define the starting corner.  Move cursor to the diagonal point
   to define a rectangular base and press the '+' key or left button again.
   Move cursor to define the apex of the pyramid and press the key when done.

   Press [ESC] or right button to exit.

Text  [F7] :  Text, Font, Size, Vertical/Horizontal.
   [E] : to enter one line of text.
   [F] : to select [G]othic, [R]oman, [N]ormal, or [S]mall fonts
   [S] : to set X and Y scales from 1 to 9.
   [V] : to toggle the text orientation between horizontal and vertical mode.

   The 'E' command must be selected first to enter a line of text and then
   use cursor to move the text around before pasting it by pressing the '+'
   key or left mouse button.   The Font, Size, and V keys can be pressed
   any time to change the text attribute.

Cube  [F8]: Draw a three-dimensional box.

   Move cursor to the diagonal point of a rectangle and press the '+' key
   or the left mouse button to define the point.  Move cursor horizontally
   to change the width, or vertically to change the height of rectangle.
   Press the '+' key or left mouse button when done.  Move cursor in any
   direction to add the third dimension to the rectangle and make a box.
   Press the '+' key or left mouse button when done.

   Press [ESC] or right mouse button to exit.

Erase [F9]: Erase a square( X:Y = 8:4 pixels) area.

   Move cursor to the area to be erased and press the '+' key or
   left mouse button to turn on the eraser.  Move eraser around
   until done.  Use the key to toggle the eraser on or off.

   Press [ESC] or right mouse button to exit.

   Note: Brush, with pattern #2 selected, can work as an eraser.
         The brush size can be changed by using the [S]ize command
         to make a variable size eraser.

Magnify  [F10] :   Magnify the area by 64 times.(Fat Bit)

    Move the cursor to the center of the area to be magnified, and press
    '+' key or left button to magnify.  Once in magnifying mode, press the
    left button or the '+' key to toggle the pen on/off.  Press the 'DEL'
    key on the numeric keypad to erase pixel.  Press the '+' key again
    to take the pen out of erase mode and back to drawing mode.

Spline [Alt F1] : Draw curves with common starting and ending points.

    The first and second points define the starting and ending points
    of a curve.  The third points and above are used to stretch the middle
    point of the curve until the ESC key is entered.


Global  [ALT F2] :  Full screen view or global view.

     Once selected, press the Enter key or Space bar for screen view.
     Press other keys for global view to see the Y dimension shrunk by 3x
     and the X dimension shrunk by 2x.  The global view is used when the
     Y axis is larger than the maximun y resolution.  For example,
     if the program is invoked as c:>f h y750   which means running
     in Hercules mode with 750 vertical lines.  The screen mode can
     display only 348 lines, so the global view has to be used to see
     the complete page.

Pie [ALT F3]:  Draw a piece of a pie.

      Define the center point of a circle first, then define the X radius
      and Y radius.  Define the starting line segment for pie and rotate
      clockwise to define the ending line segment.


Undo [ALT F4]:  Recover the picture to the previous command.

      The screen image is saved in memory until next command is issued.


[ALT F5]         Brush       Brush the screen or select the brush type.

    [S]ize: define the x and y dimensions of a rectangular brush
            or the x and y radii of a circle.
    [B]ox:  Turn on the boundary line of a brush.
    [F]ill: Turn off the boundary line of a brush.  Fill pattern only.
    [C]irle: Use circular brush.
    [E]raser: pattern #2 is always selected and works as an eraser.


Window [ALT F6]:
    [C]ut:   define the area and save into image buffer for later use.
    [P]aste:
      [H]orizontal: Flip the image horizontally.
      [V]ertical:   Flip vertically.
      [I]nverse:    Inverse the image. Exchange black and white colors.
      [T]ransparent:  Show the background picture and image buffer.
      [B]rush:      Use the image buffer as a brush.

Flush [ALT F7] : Flush the enclosed area with a fill pattern.
    move the cursor inside an enclosed area and click to fill the interior
    with selected fill pattern.  Make sure there is no gap on the boundary
    line.  Use UNDO right after Flush command to recover the previous screen,
    in case the flush was done incorrectly.


[ALT F8]  LinePoly :    Draw a polygon.
    Move to a new point and click to draw a line to the current
    cursor position. Double click to close the polygon.  The interior of
    polygon will be filled if the fill mode has been turned on.


Spray [ALT F9] : Spray paint the screen.
    Press the '+' key or click the left mouse button to toggle the brush on
    or off.  The brush starts with maximum size and will be reduced to a
    single point as the brush moves on the screen.  Click the mouse to reset
    the brush again.
    [S]ize : define the size of the brush.
    [B]ox  : use a rectangluar box brush.
    [C]icle: use a circular shape brush.
    [F]ill : use a rectangular box brush without boundary box.
    [R]andom: spary paint. The paint brush size and pattern is constant.


Parallel  [ALT F10]:  Draw a parallelogram.



Command Line commands :
-----------------------

Command       Comment
-------       --------------------------------
Quit          Exit the program.

To change line style: [click] the linestyle bar on the lower left corner.

Loadpic       Load the pcx picture file from disk to memory.

Savepic       Save the picture from memory to the disk in PCX format.

Disp_Dir      Display the current directory name and specified file name.

Hardcopy      Print graph using HP Laser, EPSON or compatible printers.

(Only 150 dots/inch HP LaserJet Printer driver is included in non-registered
copy.  Registered users can get full size LaserJet printer and dot matrix
printer support. See PRINTER.DOC for lists of supported printers.)

* Please don't put printer offline during printing.  Make
  sure you save the screen image beforehand.

Clear         Clear the current screen window.  Image outside current
              display window is not cleared.

Fill          Toggle the FILL mode of RECTANGLE, CIRCLE, SPLINE, and BLINE.
* [click] the master fill pattern on the bottom of screen.

Movie         Continuous showing of pictures with user defined delays between
              pictures.  Maximum number of pictures 9999.



Notes for mouse users:
---------------------

   . Click the master fill pattern can toggle the fill mode. If FILL ON then
     the rectangle, circle, spline  and bline area will be filled with the
     pattern.

   . Master pattern can be changed by clicking the individual pattern.

   . Don't change line style or thickness when drawing an object.
     Please select line style first before putting pen down or start drawing.


Registration Note:
------------------

    Poisson Technology
    816 Gregory Court
    Fremont, California 94539
    U. S. A.

  International user please send check or money in U.S. dollars.
  No foreign currency or foreign bank check please.

  Telephone: 415-623-1087.     FAX: 415-490-5865.

  If you wish to be on our mailing list and become a registered user, simply
  fill out and send the REGISTER.DOC form with *U.S. $29, plus shipping and
  handling fee to the address above.  Once registered, you will receive the
  a diskette which has the printer driver program  for FREE.  Plase see
  PRINTER.DOC for details.  Feel free to mail in your comments, checks, and
  suggestions to us.

  Thank you.

  * price and terms subject to change without notice.

```
{% endraw %}

## PRINTER.DOC

{% raw %}
```
Printer Control Program Feature List(For Registered Users):
===========================================================

o Dot Matrix printer printing: X: 120 dots/inch, Y: 216 dots/inch.
  Regular printout size is about 7.5" x 10".
  Using dot-matrix printers, the Y pixel can magnified by 2x, 4x or 8x,
  and the X pixel can be scaled by 1x to 8x.

o LaserJet Printing: 75, 100, 150 or 300 dots/inch.

  Printout size for 75 dots/inch is about 7.2" x 10".
  Printout size for 300 dots/inch is about the size of a business card.

o Please inquire if your printer is not listed here.


Lists of supported Dot Matrix and Laser Printers:
-------------------------------------------------

 This list is based on tests performed by the author, reports
 from users, and vendor printer specifications.

 Printer should be connected to LPT1.

 Please don't turn off or deselect the printer during printing
 which might abort Finger Paint and the screen image will be lost.

 !!! Make sure you save the picture file before printing !!!


    Company               Printer model #
 --------------------    -----------------

 ...                       All EPSON or IBM Proprinter compatibles.

 Alps                      ALQ200, ALQ300, P2400C.

 ANTEX DATA SYSTEMS,       ADS-2000.

 AXONIC                    ThinWrite 100.

 BMC (U.S.A.)              BX-80.

 BLUE CHIP ELECTRONICS     120/10.

 BROTHER INTERNATIONAL     M-1009, M-1109 MODEL I & II, M-1709, M-4018,
                           Twinriter 6.

 CAL-ABCO                  Legend 800.

 CENTRONICS                351PC, GLP, H136A

 CIE                       TriPrinter C13500 Model 20.

 C. ITOH                   RITEMAN:II, C-715A, C-815, C-310 CXP
                           ProWriter jr. Plus.

 CITIZEN AMERICA CORP.     MSP-10/15, MSP-20/25, 120D, Tribute 224.

 COPAL(U.S.A.) Inc.        SC-1200, SC-1500, SC-5500.

 CORDATA                   LP-300 Laser Printer.

 DATASOUTH COMPUTER CORP.  Personal Printer I & II.

 DIABLO SYSTEMS.           34LQ, Alternate Mode.

 EPSON AMERICA, Inc.       LQ-1500, FX-80, RX-80, MX-80-III,
                           MX-80 with GRAFTRAX-80.
                           FX+ Series, FX-85/185 (IBM & EPSON mode).
                           FX-86E, FX-286E, LQ-850, LQ-1050,
                           LQ-2500, LX-800,
                           JX-80 color printer, LX-80 SPECTRUM,
                           RX+ Series
                           GQ-3500(Epson LQ mode).

 FACIT                     B3100, B3150, B3350.

 FORTIS                    DM1310

 FUJITSU                   DL2600, DL3400, DX2300, DX2400

 GENICOM CORP.             3014-I, 3024-I, 3014-I, 3024-II.

 HONEYWELL BULL            4/66

 IBM Corp.                 Graphics Printer. Quietwriter III.
                           Proprinter, Proprinter II, Proprinter X24,

 KYOCERA Corp.             F-1010, Epson FX Mode, Laser Printer

 MANNESMANN TALLY CORP.    SPIRIT 80, MT 290, MT 85/86, 87, 90, 330.

 MARTA COMMUNICATION Inc.  SCANSET Mini printer Plus.


 NEC                       Pinwriter P9XL.
                           Silentwriter LC-850(IBM Proprointer mode).

 Nissho                    NP-2405(EPSON mode).

 OKIDATA                   OKIMATE 20 COLOR PRINTER, IBM MODE.
                           ML 84 Step 2, IBM mode.
                           ML 92/93, IBM Mode.
                           ML 182/183, IBM Mode.
                           Microline 393.

 OLYMPIA                   NP30, NP80, NP136.

 OLIVETTI                  DM 280, DM290.

 PANASONIC INDUSTRIAL      KX-P1092, KX-P1091, KX-P1090,
                           KX-P1080, KX-P1092 with "M&C" mark.
                           KX-P1592, KX-P1524.

 PRINTRONIX                S-7024.

 QUME                      LaserTENPlus(EPSON FX80 mode).

 SANYO                     PR-241.

 SMITH-CORONA              D-200 & D-300 Standard Mode, dip SW 3-4 is on.

 RADIO SHACK               DMP-430, DMP-2100P, TRP-100 (IBM mode),
                           DMP-130 (IBM mode), DMP-2200 (IBM mode).

 SAKATA U.S.A.             SP-1000, SP-1500.

 SEIKOSHA                  SP-1000A, SP-1000AS, SP-1000I, MP-5300AI
                           SK-300AI, SK-3005AI, SL-80AI,  SP-180AI,
                           SP-1200AI.

 STAR MICRONICS, Inc.      NB24-15, NR-15, NX-15,
                           SD-1015 (IBM mode). SR-10/15 (IBM mode).
                           SG-10/15 (IBM mode).

 TEXAS INSTRUMENTS Inc.    850.

 The Laser Connection      Big Kiss II.

 TOSHIBA                   P351 (IBM MODE), P321SL, P341SL,
                           P351C Color dot matrix printer, dip SW 2-3 on.



 Company & Laser Printer model #
 --------------------------------------------------------
 ...                       All HP LaserJet Compatibles.

 BlaserStar
 CIE LIPS 10 Plus
 C.Itoh Jet-Setter
 Dataproducts LZR 1230
 Data Technology CrystalPrint VIII
 Destiny Laser ACT I
 Genicom Centronics PagePrinter 8, Genicom 5010.
 Hewlett-Packard LaserJet Series II
 Kyocera F-1010, F2010, F-3010
 The Laser Connection PS Jet.
 Mannesmann Tally 910.
 Oasys LaserPro Express, Express Series II,  Silver Express.
 Okidata Laserline 6.
 Personal Computer Products LaserImage 2000, LaserImage 3000.
 Printronix L1012.
 QMS PS-800 PLus, Smartwriter 80 Plus.
 Quadlaser I.
 Ricoh PC Laser 6000.
 Texas Instruments OmniLaser 2108, 2115.
-------------------------------------------------------------------



```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
     Finger Paint Version 4.00 User Registration Form
==========================================================
         $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
         <<<< 30-Day Money Back Guarantee >>>>
         $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

o First-time user registration fee:  U.S. $29.00.   $_____
  (Special registration fee for current finger
   paint registered users: U.S. $13.00)

o Shipping & handling fees:
  (5 1/4" diskette : U.S. $3.00, Foreign $5.00)
  (3 1/2" diskette : U.S. $4.00, Foreign $6.00)     $_____

No Foreign bank note please.  Check, Cash or
Money Order payable to "POISSON TECHNOLOGY".  Total $_____


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


Obtained Finger Paint 4.00 from:

Vendor Name:______________________________________________

Telephone Number:_________________________________________

Address:__________________________________________________

__________________________________________________________

City_______________________State____________Zip___________

==================== Comments ============================








----------------------------------------------------------
Return Policy:
* product must be returned in original package.
* refunds do not include product shipping charges.

```
{% endraw %}

## RELEASE.DOC

{% raw %}
```
                 Poisson Technology  (415)623-1087
              816 Gregory Court, Fremont, CA 94539, U.S.A.

Shareware Finger Paint Version 4.00 Release Note:

This program works on IBM PC with 256K memory. It can display graphics
on either EGA(640x350), Hercules(720x348) or CGA(640x200) monitor,
supports both keyboard and mouse for drawing pictures.  Four different
stroke fonts are included in this release.  Each font can have 81 sizes.

A separate file translator program is available for registered user to
translate finger paint version 2.00 format into standard PCX format,
and screen size has been increased from 68 columns to 80 columns.
The number of vertical rows can be larger than the full screen and is
limited by the available memory.

The MOVIE command has been improved and can serve as a slide show or
animation program.  25 demo pictures are included to demonstrate this
feature.

The 150 dots/inch HP laserJet printer driver is included in non-registered
copy.  Registered users can get four different size laserjet printer drivers
(75, 100, 150 and 300 dots/inch) and dot matrix printer support.  Dot-matrix
printout can be scaled both in X and Y directions.


----- New or improved features ------
. Scroll  : scroll picture either horizontally or vertically.
. Triangle: draw a three-dimensional pyramid.
. Cube    : draw a three-dimensional box.
. Spray   : change size, box type, fill, circle, random.
. Pie     : draw a piece of pie with defined starting and end angles.
. Parallel: Draw a parallel.
. Brush   : change size, box type, fill, circle, eraser.
. Loadpic : select filename interactively and load in PCX format.
. Savepic : save full screen or part of it in PCX format.
. Dir     : interactive listing of filenames.
. Global  : reduced view or full screen view.
. Polygon : draw a polygon with or without fill.
. Line style: select one out of 8 different line styles.

----- Existing features -------------
. Line    : draw line segment.
. Magnify : magnify the picture by 64 times.
. Circle  : draw a circle or ellipse.
. Draw    : free hand drawing.
. Text    : Text can be sized and written vertically or horizontally.
. Spline  : bezier line with middle point bended.
. Undo    : undo the last command.
. Window  : cut, paste, flip-horiz/vertical, inverse, transparent, brush.
. Flush   : fill a region with fill pattern.
. Clear   : clear screen.
. Fill    : toggle the fill mode on or off.
. Rectangle: draw a rectangle.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0763

     Volume in drive A has no label
     Directory of A:\

    F        EXE    109408   4-05-90   8:59p
    DEMO3    PCX      8168   1-24-90  12:17a
    DEMO1    PCX      8215   1-24-90  12:17a
    GOTH     CHR      8560   5-02-89   5:50a
    LITT     CHR      2138   5-02-89   5:50a
    SANS     CHR      5438   5-02-89   5:50a
    TRIP     CHR      7241   5-02-89   5:50a
    CGA      BGI      6253   5-02-89   5:50a
    EGAVGA   BGI      5363   5-02-89   5:50a
    HERC     BGI      6125   5-02-89   5:50a
    MANUAL   DOC     13832   4-05-90   8:54p
    DEMO2    PCX      8061   1-24-90  12:17a
    ROLL1    PCX      5684   1-30-90   9:54p
    ROLL2    PCX      6095   1-30-90  10:55p
    ROLL3    PCX      5574   1-30-90  10:58p
    ROLL4    PCX      5164   1-30-90  10:55p
    ROLL5    PCX      6402   1-30-90  10:12p
    ROLL6    PCX      5429   1-30-90  10:22p
    REGISTER DOC      1827   4-05-90   8:56p
    DEMO4    PCX      1103   2-10-90   7:14p
    DEMO5    PCX      1321   2-10-90   7:16p
    DEMO6    PCX      1630   2-10-90   7:17p
    DEMO7    PCX      1702   2-10-90   7:20p
    DEMO8    PCX      1636   2-10-90   7:24p
    DEMO9    PCX      1636   2-10-90   7:25p
    DEMO10   PCX      1712   2-10-90   7:26p
    DEMO11   PCX      2711   2-10-90  10:59p
    DEMO12   PCX      2098   2-10-90  11:03p
    DEMO13   PCX      1935   2-10-90  11:04p
    DEMO14   PCX      1608   2-10-90  11:09p
    DEMO15   PCX      3265   2-10-90  11:12p
    DEMO16   PCX      3183   2-10-90  11:15p
    DEMO17   PCX      3496   2-10-90  11:21p
    DEMO18   PCX      1716   2-10-90  11:23p
    DEMO19   PCX      7950   2-10-90  11:30p
    PRINTER  DOC      5617   4-05-90   8:54p
    READ     ME       1408   4-05-90   9:00p
    RELEASE  DOC      2525   4-05-90   8:54p
    GO       BAT        38   5-26-01  11:18p
    GO       TXT       617   8-03-87   3:02p
    FILE0763 TXT      2073   4-19-90   5:59p
           41 file(s)     275957 bytes
                           23552 bytes free
