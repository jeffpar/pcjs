---
layout: page
title: "PC-SIG Diskette Library (Disk #1436)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1436/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1436"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-CHART HGC & CGA (EGA VERSION ON 1704)"

    Bullish on the market?  Or bearish?  This program will help you decide!
    
    PC-CHART brings you a comprehensive set of technical analysis tools to
    help you decide when to buy and sell stocks and commodities.
    Mathematical algorithms help you determine what action to take.  The
    spreadsheet-like interface permits easy editing and manual updating of
    up to 400 price files.  For anyone who prefers automatic updating,
    PC-CHART lets you use HAV-INFO, a low-cost data vendor to get price
    updates via modem.
    
    The analysis section permits use of price/volume, relative strength,
    moving averages, parabolic system, logarithmic plot, point and figure,
    stochastics, weekly charts, monthly charts, on-balance volume, money
    flow and other parameters.  Menus and a 52-page user guide on disk help
    you get started.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```
                          Instructions

                 To install on hard disk system,

1.  Place System Disk in Drive A.

c:\>md chart
c:\>cd chart
c:\chart>copy a:*.*

2.  Place Data Disk in Drive A.

c:\chart>copy a:*.*

                To install on two floppy disks

1.  Format two 360K diskettes.

2.  Put system disk in drive A, type:

A>install

                   To print out stock charts

1.  Type <p> or <P> to get a hardcopy of the charts on the
    screen.

                      Communication Tips

FOR HAV-INFO & GEnie 

Since DOS does not accept a period as a valid character in
a filename, substitute a underscore in stock symbols.

For example:  Wall Street Journal lists Fst Interst A as:

              stock symbol = I.A
              substitute I_A

Dial/Data

When typing in commodity symbols add a two to the end. 

For example: The proper symbol for the September Standard & Poors
500 stock index future is SA0989. Add a two to the end to get SA09892.
The program will delete the two when it communicates with Dial/Data.

Other commodity futures and options have different conversion factors 
refer to Dial/Data documentation to get the the proper conversion
factor.


```
{% endraw %}

## FILE1436.TXT

{% raw %}
```
Disk No: 1436                                                           
Disk Title: PC-Chart HGC & CGA (EGA version on 1704)                    
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: PC-CHART                                                 
Author Version: 1.15                                                    
Author Registration: $106.00                                            
Special Requirements: 640K RAM, Hercules graphics or CGA, and a modem.  
                                                                        
Bullish on the market?  Or bearish?  This program will help you decide! 
                                                                        
PC-CHART brings you a comprehensive set of technical analysis tools to  
help you decide when to buy and sell stocks and commodities.            
Mathematical algorithms help you determine what action to take.  The    
spreadsheet-like interface permits easy editing and manual updating of  
up to 400 price files.  For anyone who prefers automatic updating,      
PC-CHART lets you use HAV-INFO, a low-cost data vendor to get price     
updates via modem.                                                      
                                                                        
The analysis section permits use of price/volume, relative strenth,     
moving averages, parabolic system, logarithmic plot, point and figure,  
stochastics, weekly charts, monthly charts, on-balance volume, money    
flow and other parameters.  Menus and a 52-page user guide on disk help 
you get started.                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GRAFTRAX.DOC

{% raw %}
```
GRAFTRAX.COM
EPSON MX-80 GRAFTRAX tm Screen Printer.
Left Sh. PrtSc. = LARGE GRAPHICS
Right Sh. PrtSc. = small graphics
Text screen uses regular ROM routine.
ESCape will exit graphics print.

```
{% endraw %}

## GRAPHICS.DOC

{% raw %}
```
    SUMMARY OF GRAPHICS.COM REPLACEMENT ROUTINES (Revised 01-22-90)
                        by Gene Quong

To print stock or commodity charts to any printer that supports
graphics, such as a dot matrix printer, you should first try pressing
<p> or <P> when a particular stock in shown on the screen.  We
currently support Epson FX-80 compatible dot matrix printers.  The
specific model that we use to print stock charts is an Epson FX-80.
In the near future we plan to purchase a Hewlett Packard IIP, and we
intend to add support for the IIP at that time.

The second avenue which you may pursue is the DOS external  command
file, GRAPHICS.COM which is on the DOS system diskette that came with
your computer.  If you type GRAPHICS at the DOS prompt before running
the chart program this will make a graphics routine resident in memory that
enables the Shift-PrintScreen key command to send graphics to the printer.
Ordinarily, the Shift-PrtSc combination will only print out ASCII
characters.  The GRAPHICS.COM program currently only supports CGA,
EGA, and VGA video cards.  IT DOES NOT SUPPORT HERCULES GRAPHICS
CARDS.

In case GRAPHICS.COM does not work for your particular monitor and
printer combination, we are including on this distribution diskette
some shareware and public domain programs.  Also, we recommend a
commercial program called Pizazz which lists for 49.95.  Pizazz
supports over 100 printers.

Each of the enclosed P.D. programs makes itself resident in memory
so you should reboot your system with Ctrl-Alt-Del before loading
and trying a new program.  The programs enclosed are:

CITOH.COM           HERCTOSH.COM        MLPS.COM
DMP200.COM          LASERJET.EXE
DUMPHP.COM          OKIDMP.COM
EGAEPSON.COM        OKIDUMP.COM
EP2GEM.COM          OKIPRTSC.COM
FXPRTS.COM          SCRNDUMP.COM
GEM10GRF.COM        SETUPFX.COM
GEMGRAPH.COM        THINKJET.EXE
GRAFTRAX.COM        TOSHGRPH.COM
GRAPHICR.COM        TOSHDUMP.EXE

--------------------------------
C.ITOH.COM
"This is Marty Smith's program modified for use with the
C.Itoh Prowriter printer.  It replaces IBM's GRAPHICS.COM."
--------------------------------
DMP200.COM
This program works with a Radio Shack DMP-200 printer off an IBM-PC
equipped with an Enhanced Graphics Adaptor (EGA).

Author:  Dr. R. Brooks Van Horn, Jr.
701 Fall Place
Herndon, VA. 22070

--------------------------------
DUMPHP.COM
This program permits a graphics screen to be dumped to an HP LaserJet
printer.  The program expects the output to come from COM1:.

Author:
Scott Pakin
6007 N. Sheridan Rd.
Chicago, IL    60660
--------------------------------
EGAEPSON.COM
This program works with Epson FX series printers off an IBM-PC equipped
with an Enhanced Graphics Adaptor (EGA).

Author:
Dr. R. Brooks Van Horn, Jr.
--------------------------------
EP2GEM.COM
"Modifies the vertical spacing on a Gemini printer to eliminate blank
lines when used with a graphics program designed to output to an Epson."
Makes highly elliptical chartwheels appear circular.  May also eliminate
double-spacing encountered on other program printouts sent to a Gemini
10 printer.
--------------------------------
FXPRTS.COM
"Replacement for GRAPHICS.COM for the Epson FX-80 and FX-100 printers.
The program remains resident in memory to be activated with the
Shift-PrtSc keys."
--------------------------------
GEM10GRF.COM
"The GRAPHICS.COM program has been edited to support the GEMINI-10
printers using the CGA interface.  The default GRAPHICS.COM supplied
with MS-DOS causes a venetian blind effect on copied images.  This
edit replaces the graphics header for proper printer setup on the
GEMINI-10."

Author:
Steve Hathaway
10260 SW Bryton Ct.
Wilsonville, OR 97070

--------------------------------
GEMGRAPH.COM
"Gemgraph.com allows the use of a Gemini 10X for graphic
screen dumps. It is DOS 2.0 graphics.com modified to insert the
correct number of line feeds. Results are excellent."

Author: Unknown







--------------------------------
GRAFTRAX.COM
This program works with Epson MX printers with the GRAFTRAX 80 option.
It is also supposed to work with older non-Epson-compatible Star printers.

"If you print the screen in GRAPHICS-mode, a LEFT SHIFT PrtSc will
print the screen LARGE--filling nearly an 8 1/2 x 11 page--and then
insert carriage returns to restore Top Of Form relative to where it
started.  If you do a RIGHT SHIFT PrtSc, the screen is printed about 5
1/4  x  2  3/4 inches. No TOF reset is made, and multiple screen prints
will be contiguous.

"In either graphics print mode, you can abort printing by hitting
the ESC key.  This can be used to suppress the carriage returns at the
end of the large screen print, for instance.  You cannot abort a screen
print in text mode, however, since it is your IBM ROM routine."

Author:
Marty Smith
SOURCE ST2259           (713) 661-1241  (Office)
COMPUSERVE 72155,1214   (713) 464-6737   (Home)
--------------------------------
GRAPHICR.COM
This program prints hi-res graphics in reduced scale.  Unlike the other
programs, this program does not rotate the chartwheel but prints it right
side up.  However, the chartwheel has the shape of an ellipse.

Author:
P.E. Schmid
--------------------------------
HERCTOSH.COM, Version 1.1
Copyright 1986 by Stephen G. Simpson
This is a memory-resident, Hercules-to-Toshiba, graphics screendump.
Once installed in memory, it occupies 640 bytes.
To print Hercules monochrome graphics page 0 on a Toshiba P1340
or similar printer, type Alt-0.  To print page 1, type Alt-1.
To generate a formfeed, type Alt-9.
Individual users, and distributors of user-supported software,
may freely copy and disseminate this program in unmodified form.
Other vendors should contact the author for terms.
If you find this program useful, please send $5.00 to the author:
Stephen G. Simpson, 1162 S. Garner Street, State College, PA 16801.













--------------------------------
LASERJET.EXE
This utility will enable you to print the contents of your IBM PC or
PC/XT display screen to the Hewlett-Packard LaserJet printer.

The utility is designed to work with a CGA card.  An EGA card will
produce an elliptical chartwheel.

The following commands must be in your AUTOEXEC.BAT file to help
insure proper execution of the print screen utility:

MODE COM1:9600,N,8,1,P
MODE LPT1:=COM1
LASERJET A

Reboot your computer to automatically execute the commands in the
AUTOEXEC.BAT file and load the print screen utility into memory.

Replace the 'LASERJET A' command with 'THINKJET' to use the THINKJET.EXE
driver instead.  Both drivers work on the HP LaserJet with the difference
that THINKJET.EXE produces a larger chartwheel.

Although not required, several printing options are available with the
utility.  If you wish to use any of the following options, they must be
entered within five seconds after pressing the 'Shift' and 'PrtSc'keys.
Only one option from each group (orientation, print position and paper
ejection) may be selected.  The printing process will begin five seconds
after the last key is pressed.

Group           Key            Option
-----           ---            ------
Orientation     * P       Portrait (LaserJet only)
                  L       Landscape (LaserJet only)

Print Position  * T       Top half of page
                  M       Middle of page
                  B       Bottom half of page

Paper Ejection  * Y       Form feed at end of print
                  N       No form feed at end of print

         * indicates default value

Author:
Developed but not officially supported by Hewlett-Packard.
--------------------------------
OKIDMP.COM
"Run OKIDUMP once at boot time to install it and then whenever you hit
<R>ight Shift PrtSc you'll get a small graphics dump to your OKIDATA
printer. Hit <L>eft Shift PrtSc and you'll get a larger printout rotated
90 degrees. This routine is invisible to normal text screen dumps."
Known to work on an OKI 84 printer.



--------------------------------
OKIDUMP.COM
Simply run OKIDUMP as you would GRAPHICS.COM (see the DOS manual).
It acts just like GRAPHICS.COM for OKIDATA printers (without plug'n'play).

Author: unknown
--------------------------------

OKIPRTSC.COM
This program "replaces the GRAPHICS.COM program supplied as part of the
IBM PC-DOS operating system (an External DOS command).  It provides
both text and graphics capabilities for IBM PC owners who have a color
graphics adapter and an Okidata 84/92/93 printer (without the Plug-N-Play
option).

"In graphics mode, 320 x 200 medium resolution pictures are shown with
varying shades of gray to represent the colors on the screen. A 640 x
200 graphics image is shown simply in black & white, the same as it
appears on the screen.

"Additionally, in graphics mode, [OKIPRTSC] automatically places the
picture in the middle of the page (no need to move the tractors or roll
the platen to get the picture centered on the page)."

Author:
Barry R. Nance
Business Software Services

--------------------------------
SCRNDUMP.COM

To enhance graphics printing for any combination of the following:
EGA/EPSON Extended PrtSc Driver
EGA/OKIDATA 192 Extended PrtSc Driver
EGA/OKIDATA 92 Extended PrtSc Driver
EGA/CITOH Extended PrtSc Driver
CGA/EPSON Extended PrtSc Driver
CGA/OKIDATA 192 Extended PrtSc Driver
CGA/OKIDATA 92 Extended PrtSc Driver
CGA/CITOH Extended PrtSc Driver
HERCULES/EPSON Extended PrtSc Driver
HERCULES/OKIDATA 192 Extended PrtSc Driver
HERCULES/OKIDATA 92 Extended PrtSc Driver
HERCULES/CITOH Extended PrtSc Driver

SCRNDUMP Copyright 1986 by Hardwood Software Associates

Usage:  SCRNDUMP /g /p
Where:  g = E[GA] for Enhanced Graphics Adapter(640x350 Color)
            C[GA] for Color Graphics Adapter(640x200 Mono only)
            H[ercules] for Hercules Monochrome Graphics Adapter(720x348 Mono)




        p = E[PSON] for EPSON/IBM printer
            C[ITOH] for CITOH PROWRITER/PROWRITER II printer
            1[92] for OKIDATA 192 printer
            9[2] for OKIDATA 92 printer

Purpose:
To enhance the PrtSc key to include printing the graphics screen.

Operation:

Press 'Shift/PrtSc' to activate.  If no other key is pressed within 10
seconds the regular text print screen routine is used.  To print the
graphics screen, press the appropriate number key from the upper row.
To print the first graphics page press '1', the second (if your graphics
board has one) is printed by pressing '2' and so on.  When printing the
regular text screen, the time delay can be canceled by pressing the
SPACEBAR.  Graphics printing in progress can be canceled by pressing
'ESC'.
--------------------------------
THINKJET.EXE
See LASERJET.EXE.
--------------------------------
TOSHDUMP.EXE

Toshiba 1351 Printer Graphics Screen Dump
For the IBM-PC and compatible micro-computers.
Written by: Gary E. Walker
Vertical Market Software, Incorporated
Westfield Boulevard
Indianapolis, IN

Use just as you would use GRAPHICS.COM for the Epson
--------------------------------
TOSHGRPH.COM
This program bills itself as version 4.0 of GRAFTRAX, but for the
Toshiba P1340, P1351, or P351 printers.  It uses the same commands as
GRAFTRAX.
--------------------------------
Tandy's GRAPHICS.COM
Another set of printer options is provided by the GRAPHICS.COM that
is distributed with Tandy (Radio Shack) computers.  Options A thru E
support [A] the Tandy CGP-220 printer, [B] the Tandy DMP Standard printer,
[C] PC compatible printers, [D] PC compatible printers in Tandy mode,
and [E] the Tandy DMP-110 printer.
This screen dump utility must be obtained directly from Tandy.
--------------------------------
MLPS.COM
If Shift-PrtScr is not moving your paper to the next top of form then
load this memory-resident program beforehand.
--------------------------------

You can make loading MLPS.COM and any other form of GRAPHICS.COM automatic
by putting MLPS and the name of the GRAPHICS program in your AUTOEXEC.BAT
file.  Of course, the programs must either be in your root directory or
in a bootable path.

If you end up using any of these programs, send a $5.00 contribution
to the programmer responsible for it.

```
{% endraw %}

## HERCTOSH.DOC

{% raw %}
```
HERCTOSH.COM, Version 1.1
Copyright 1986 by Stephen G. Simpson
This is a memory-resident, Hercules-to-Toshiba, graphics screendump.
Once installed in memory, it occupies 640 bytes.
To print Hercules monochrome graphics page 0 on a Toshiba P1340
or similar printer, type Alt-0.  To print page 1, type Alt-1.
To generate a formfeed, type Alt-9.
Individual users, and distributors of user-supported software,
may freely copy and disseminate this program in unmodified form.
Other vendors should contact the author for terms.
If you find this program useful, please send $5.00 to the author:
Stephen G. Simpson, 1162 S. Garner Street, State College, PA 16801.

```
{% endraw %}

## OKIDUMP.DOC

{% raw %}
```
Simply run OKIDUMP as you would GRAPHICS.COM (see the DOS manual).
It acts just like GRAPHICS.COM for OKIDATA printers (without plug'n'play).

```
{% endraw %}

## SCRNDUMP.DOC

{% raw %}
```
To enhance graphics printing for any combination of the following:
EGA/EPSON Extended PrtSc Driver
EGA/OKIDATA 192 Extended PrtSc Driver
EGA/OKIDATA 92 Extended PrtSc Driver
EGA/CITOH Extended PrtSc Driver
CGA/EPSON Extended PrtSc Driver
CGA/OKIDATA 192 Extended PrtSc Driver
CGA/OKIDATA 92 Extended PrtSc Driver
CGA/CITOH Extended PrtSc Driver
HERCULES/EPSON Extended PrtSc Driver
HERCULES/OKIDATA 192 Extended PrtSc Driver
HERCULES/OKIDATA 92 Extended PrtSc Driver
HERCULES/CITOH Extended PrtSc Driver

SCRNDUMP Copyright 1986 by Hardwood Software Associates

Usage:  SCRNDUMP /g /p
Where:  g = E[GA] for Enhanced Graphics Adapter(640x350 Color)
            C[GA] for Color Graphics Adapter(640x200 Mono only)
            H[ercules] for Hercules Monochrome Graphics Adapter(720x348 Mono)

        p = E[PSON] for EPSON/IBM printer
            C[ITOH] for CITOH PROWRITER/PROWRITER II printer
            1[92] for OKIDATA 192 printer
            9[2] for OKIDATA 92 printer

Purpose:
To enhance the PrtSc key to include printing the graphics screen.

Operation:

Press 'Shift/PrtSc' to activate.  If no other key is pressed within 10
seconds the regular text print screen routine is used.  To print the
graphics screen, press the appropriate number key from the upper row.
To print the first graphics page press '1', the second (if your graphics
board has one) is printed by pressing '2' and so on.  When printing the
regular text screen, the time delay can be canceled by pressing the
SPACEBAR.  Graphics printing in progress can be canceled by pressing
'ESC'.

```
{% endraw %}

## TOSHDUMP.DOC

{% raw %}
```
Toshiba 1351 Printer Graphics Screen Dump
For the IBM-PC and compatible micro-computers.
Written by: Gary E. Walker
Vertical Market Software, Incorporated
Westfield Boulevard
Indianapolis, IN

Use just as you would use GRAPHICS.COM for the Epson

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1436

     Volume in drive A has no label
     Directory of A:\

    CHART1   ZIP    146791   2-01-90
    PKUNZIP  EXE     21440   7-21-89   1:01a
    GRAPHICS ZIP     34330   2-09-90  11:47a
    CHART2   ZIP    135223   5-12-90  12:00p
    READ     ME        840   4-25-90   4:21p
    FLOPPY   BAT       460   4-25-90   4:02p
    HARD     BAT       410   4-25-90   4:02p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       540   5-03-90   2:52p
    FILE1436 TXT      2221   5-30-90   2:50p
           10 file(s)     342293 bytes
                           14336 bytes free
