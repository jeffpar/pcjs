---
layout: page
title: "PC-SIG Diskette Library (Disk #966)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0966/
preview: https://pcsigdisks.pcjs.org/pcx86/sw/misc/pcsig/0001-0999/DISK0966/DISK0966.jpg
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0966"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ASTROL95 - ASTROLOGY PROGRAM"

    Know what the stars have in store for you, your family and friends.
    ASTROL96 is a comprehensive astrology program that calculates the
    zodiacal positions of all of the planets and the sun, moon, and the 12
    house cusps for any date, time, and place. Display the aspects and
    midpoints between the planets, ascendant, and midheaven and
    midpoint/planet conjunctions.
    
    ASTROL96 lets you calculate a person's transits for up to one year.
    Charts can be displayed in either graphic chartwheel format or in non-
    graphic format. The charts can be saved to disk, reviewed, deleted,
    sorted alphabetically, and compared with other charts.
    
    You can compare mutual aspects and indexes of communication for
    compatibility, as well as conduct rapid searches for compatible matches
    between charts.
    
    So, what's your sign?
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0966.TXT

{% raw %}
```
Disk No:  966                                                           
Disk Title: Astrol95 - Astrology Program                                
PC-SIG Version: S1.7                                                    
                                                                        
Program Title: Astrol96                                                 
Author Version: 9.6                                                     
Author Registration: $29.00                                             
Special Requirements: None.                                             
                                                                        
Know what the stars have in store for you, your family and friends.     
                                                                        
ASTROL95 is a comprehensive astrology program that calculates the       
zodiacal positions of all of the planets and the sun, moon, and the 12  
house cusps for any date, time, and place.  Display the aspects and     
midpoints between the planets, ascendant, and midheaven and             
midpoint/planet conjunctions.                                           
                                                                        
ASTROL95 lets you calculate a person's transits for up to one year.     
Charts can be displayed in either graphic chartwheel format or in non-  
graphic format.  The charts can be saved to disk, reviewed, deleted,    
sorted alphabetically, and compared with other charts.                  
                                                                        
You can compare mutual aspects and indexes of communication for         
compatibility, as well as conduct rapid searches for compatible matches 
between charts.                                                         
                                                                        
So, what's your sign?                                                   
                                                                        
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
║                 <<<<  Disk #966 Astrol96  >>>>                          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ For information on the program, insert disk #1 and type:                ║
║             COPY README.DOC PRN  (press enter)                          ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## GRAPHICS.DOC

{% raw %}
```
             SUMMARY OF GRAPHICS TO PRINTER ROUTINES    (revised 3-16-90)
                        by John Halloran

To print the graphics chartwheel to any printer that supports graphics,
such as a dot matrix printer, laser printer, or ink-jet printer, you
should first try the DOS external command file, GRAPHICS.COM, which is
on the DOS system diskette that came with your computer.  If you type
GRAPHICS at the DOS prompt before running ASTROL96 this will make a
graphics routine resident in memory that enables the Shift-PrintScreen
key command to send graphics to the printer.  Ordinarily, the Shift-PrtSc
combination will only print out the ASCII characters defined on the
Monochrome Graphics card, even if the Color Graphics card is in use.

In case GRAPHICS.COM does not work for your particular monitor and 
printer combination, I am including on my distribution diskette some
alternative programs from the public domain.  Also, I recommend a
commercial program called Pizazz which Telemart at 1-800-426-6659 sells
for $42.  It produces the most attractive version of ASTROL96's CGA
wheel that I have seen - it smooths jagged edges to produce a high-
resolution look and allows rotation and positioning.  Pizazz supports
over 100 printers.  My AstrolDeluxe program, described in the Program
Assistance Overview, comes with graphic screen dump drivers from a
commercial vendor which will produce a large round wheel on a wide
variety of dot matrix, ink-jet, and laser printers.  If you have
EGA, VGA, or Hercules, AstrolDeluxe will display and print a higher 
resolution graphic chartwheel than will ASTROL96.

Each of the enclosed P.D. programs makes itself resident in memory
so you should reboot your system with Ctrl-Alt-Del before loading
and trying a new program.  The programs enclosed are:

CITOH.COM             HIGRAF-L.COM          MLPS.COM    
DMP200.COM            HPPS.COM  
EGAEPSON.COM          LASERJET.EXE
EP2GEM.COM            OKIDMP.COM  
FXPRTS.COM            OKIPRTSC.COM
GEM10GRF.COM          THINKJET.EXE
GRAFTRAX.COM          TOSHGRPH.COM

The above programs are contained in an archive file called 
GRAPHICS.ARC on the distribution diskette.  You will also find a
program on the distribution diskette called ARCE.COM which may be
used to extract a program from the archive.  As an example of the
syntax involved, if the distribution diskette is on drive A: and
you want to extract CITOH.COM from GRAPHICS.ARC to a diskette on
drive B:, then from the A> prompt, you would enter:

ARCE GRAPHICS CITOH.COM B:

Or, if you want to extract to the ASTROL directory on drive C:, then
from the A> prompt you would enter:

ARCE GRAPHICS CITOH.COM C:\ASTROL

Additional information on using ARCE.COM will display if you type
ARCE with no parameters.

                             (more)

--------------------------------
CITOH.COM
"This is Marty Smith's GRAF.COM program modified for use with the C.Itoh
Prowriter printer.  It replaces IBM's GRAPHICS.COM."
--------------------------------
DMP200.COM
This program works with a Radio Shack DMP-200 printer off an IBM-PC
equipped with an Enhanced Graphics Adaptor (EGA).

Author:
Dr. R. Brooks Van Horn, Jr.
701 Fall Place
Herndon, VA. 22070
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
Shift-PrtSc keys."  If this driver does not work for your Epson FX
printer, try EGAEPSON.COM instead.
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
GRAFTRAX.COM
This program works both with IBM graphics printers and with Epson MX
printers with the GRAFTRAX 80 option.  It is also supposed to work with
older non-Epson-compatible Star printers.

"If you print the screen in GRAPHICS-mode, a LEFT SHIFT PrtSc will
print the screen LARGE--filling nearly an 8 1/2 x 11 page--and then
insert carriage returns to restore Top Of Form relative to where it
started.  If you do a RIGHT SHIFT PrtSc, the screen is printed about 5
1/4  x  2  3/4 inches. No TOF reset is made, and multiple screen prints
will be contiguous. [good for capturing large numbers of horary charts]

"In either graphics print mode, you can abort printing by hitting
the ESC key.  This can be used to suppress the carriage returns at the
end of the large screen print, for instance."

Author:
Marty Smith
310 Cinnamon Oak Lane
Houston, TX 77079
--------------------------------
HIGRAF-L.COM
By reducing it slightly, this program allows you to print the chartwheel
right side up.

Source:
PC Magazine 
--------------------------------
HPPS.COM
HP LaserJet+/SeriesII CGA/EGA Print Screen Driver 7.1

Syntax:	HPPS /? 	for help
	     /r		reverse b/w
	     /2		SeriesII

Author:
Darin May
Society of Critical Care Medicine
251 East Imperial Hwy. Suite 480
Fullerton, CA 92635
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
THINKJET.EXE
See LASERJET.EXE.
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

```
{% endraw %}

## SIMCGA.DOC

{% raw %}
```

    SIMCGA - Simulate CGA with Hercules Monochrome Card

	Written in September 1986 by
	    Chuck Guzis
	    153 North Murphy Ave.
	    Sunnyvale, CA  94086


This memory-resident utility allows you to "fool" most software requiring
a Color Graphics Adapter into using your Hercules (or compatible) mono-
chrome adapter in the graphics mode.  Graphics images are reproduced
in normal aspect ratio, using as much of the available screen area as
is possible.

The trick used here is to program the HGC to display more lines of 3
lines per character time instead of 4 (The CGA displays 2).  A service
routine hooked into the hardware timer interrupt (int 8) copies one line
to the third displayed line to give a filled-out image.

The method used here works and results in some useful color gray-scaling,
but it does have a few minor drawbacks -

    1.	Since the copy operation occurs in real-time concurrent with the
	display, some "ghosting" on moving images is inevitable.

    2.	Since the image is expanded vertically by 1/2, small line details
	will be affected by the line doubling technique.  This is mostly
	an aesthetic annoyance.

    3.	Those utilities which "read" the CGA registers at 03d4 et seq.
	are going to find no registers to read.	 This does not seem to
	affect many programs.

    4.	40x25 text mode is not supported - the hardware just isn't there.
	This mode is mapped into 80x25 and again, doesn't seem to bother
	many utilities.

    5.	When in text mode (modes 0, 1, 2 and 3), the normal monochrome
	character attributes are not available - this is a problem with
	the way the HGC handles the attribute memory map.


Quite a few programs have been tested, including Flight Simulator, PC-CAD,
BASICA and some games with no hitches.

This package contains three programs - SIMCGA, SETCGA, SETMONO.	 SIMCGA
is the memory-resident part and must be run before the CGA simulation
feature is available.  SETMONO will restore the monochrome-only mode;
SETCGA will reset CGA compatibility after a SETMONO.  If this feature
is used routinely, you might want to put this in your AUTOEXEC.BAT file -

	SIMCGA
	SETMONO

and then run a SETCGA when you need the CGA feature.

```
{% endraw %}

## HERCULES.DOC

{% raw %}
```
ASTROL96 program users with monochrome Hercules graphics adapter cards
(720x348) can access the program's graphics features by loading a color
graphics emulator utility such as SIMCGA.COM into memory prior to running
ASTROL96.  This utility will cause the Hercules board to simulate the
IBM Color Graphics Adapter (CGA) board for which ASTROL96 is written.
(Note: the AstrolDeluxe chartwheel directly supports Hercules.)

You can obtain a printed hardcopy of the graphic chartwheel displayed on
a monitor using a Hercules monochrome graphics board simply by loading
GRAPHICS.COM beforehand and using Shift-PrtScr as normal, as discussed
in the file GRAPHICS.DOC.

The archive file HERCULES.ARC on the distribution diskette includes
a public domain utility program which will cause a Hercules
monographics card to emulate an IBM color graphics card.  The
archive files are:

SIMCGA.COM - See archive file SIMCGA.DOC.
 SETMONO.COM - Turn off emulation.
 SETCGA.COM - Turn emulation back on.
SIMCGA.DOC - Documentation by the author of this emulation utility.

The above programs and document files are contained in an archive file
on the distribution diskette called HERCULES.ARC.  You will also find a 
program on the distribution diskette called ARCE.COM which may be used to
extract a file from the archive.  As an example of the syntax involved,
if the distribution diskette is on drive A: and you want to extract 
SIMCGA.DOC from HERCULES.ARC to a diskette on drive B:, then from the
A> prompt, enter:

ARCE HERCULES SIMCGA.DOC B:

Or, if you want to extract to the ASTROL directory on drive C:, then
from the A> prompt, enter:

ARCE HERCULES SIMCGA.DOC C:\ASTROL

Additional information on using ARCE.COM will display if you type
ARCE with no parameters.

IMPORTANT NOTE FOR HERCULES GRAPHICS USERS
------------------------------------------
Before running ASTROL96 with CGA simulation, run CUSTOM96 and use the
option at the Supplementary Menu to change the text screen colors from
yellow on black (14 and 0) to light gray on black (7 and 0).  This is
a precaution to avoid blowing components in your monochrome monitor's
video board if the CGA simulation is incomplete.  If you do this, the
U.S. map will be the only color screen remaining.  If, during CGA
simulation, any part of the U.S. map appears in high intensity, turn off
your computer immediately.  The one case of video board damage that I
know of involved a Hercules Plus card on an IBM PC with an early version
of the shareware color emulation utility HGCIBM.COM.

After extracting SIMCGA.COM, enter SIMCGA at the DOS prompt and your
screen should change from Hercules resolution to CGA resolution.

On a true-blue AT with an original Hercules monographics card I preferred
SIMCGA, but if you have a different set-up then SIMCGA may not work.  If
it does not, order the latest version of HGCIBM.COM directly from its
author.  HGCIBM.COM handles a wider variety of computers, including the
Leading Edge, model D computer.  Obtain it by sending $9.95 plus $3.00
handling, together with the type of graphic card and monitor you have, to:
Athena Digital, 2351 College Station Rd., Ste. 567, Athens, GA 30605.

```
{% endraw %}

## PD96.DOC

{% raw %}
```
Program Title:  ASTROL96
Program Description:
ASTROL96 is a comprehensive astrology program that accurately calculates
the zodiacal positions of the sun, moon, and planets together with the
12 house cusps for any date, time, and place.  The calculated charts can
be saved to disk, reviewed, deleted, sorted alphabetically, and compared
with other charts.  Charts can be displayed in either graphic chartwheel
format or in non-graphic format.
ASTROL96 lets you calculate a person's transits for up to one year.
Display the aspects and midpoints between the planets, ascendant, and
midheaven and midpoint/planet conjunctions.
You can compare mutual aspects and indexes of communication for
compatibility, as well as conduct rapid searches for compatible matches
between charts.

Intended User:  Astrology hobbyists.

Improvements over ASTROL95:  ASTROL96 works reliably on all 386 computers.
Many small improvements.  The disk includes a program to produce a printed
Program Assistance Manual.  

Unique features of this astrology program:
Menu-driven program is fast and easy to use.  This is the only inexpensive
program with an on-screen graphic wheel that includes glyphs for the
planets and signs, that calculates a transiting aspects list, that has the
ability to compare charts, and that has an atlas module with on-screen maps.
It is the only public domain program featuring one minute accuracy.

Program capacity or limitations: Users can calculate and save an
unlimited number of charts, but until they register with the author,
they can only access 150 saved charts and can only display saved chart
number one in the nice graphic wheel format.

System requirements: 256K RAM, DOS 2.1 or higher.  Runs on monochrome.
Graphic displays require CGA or ability to emulate with Hercules.

How to start the program:  Install in accordance with README.DOC file
instructions.  Then start by entering ASTROL96

Registration fee: $29.00

Materials or services that come with registration:  Registration code that
gives the user full access; addition to mailing list for update notices.

List of program files and one-line description of each file:

README.DOC - Instructions for installing ASTROL96.
ASTROL96.EXE - Astrology calculation program.
ATLAS.ARC - Holds 2 image files of U.S. & world maps and 2 city lists.
HELPDOC.ARC - Holds the 12 help files of program operating instructions.
CUSTOM96.COM - Allows user to customize ASTROL96.
GRAPHICS.DOC - Describes how to print the on-screen graphic chartwheel.
GRAPHICS.ARC - Holds 15 public domain graphic screen dump programs.
HERCULES.DOC - Describes how to emulate CGA and contents of HERCULES.ARC.
HERCULES.ARC - Holds SIMCGA.COM and its documentation files.
ARCE.COM - Utility to unarchive files ending with ARC extension.
REL96FIX.DOC - Describes how ASTROL96 is superior to ASTROL95.
UPGRADE.DOC - Instructions for those upgrading from an earlier version.
PRINTDOC.COM - New program to print the 12 help files as a 16-page manual.

```
{% endraw %}

## README.DOC

{% raw %}
```
Shareware Program Name: ASTROL96

Author:   John Halloran
          P.O. Box 75713
          Los Angeles, CA 90075

Registration Fee:   $29.00

Install the astrology program as follows:
Floppy-based systems: Format a blank diskette.  Do NOT format a 360K
diskette with the /s system option, as this option would leave no space
in which to save charts.  Place the distribution diskette in drive A:
and the formatted diskette in drive B:.  Log to drive B: (by entering B:).

Enter COPY A:ASTROL96.EXE   When this finishes copying, unarchive the
map and city files by entering A:ARCE A:ATLAS   Unarchive the help
documentation files by entering A:ARCE A:HELPDOC   When these finish,
enter COPY A:CUSTOM96.COM

Place your DOS system diskette in drive A: and enter COPY A:SORT.EXE
If you have a printer that supports graphics, enter COPY A:GRAPHICS.COM
You are finished creating the working diskette.  Each time you want to
run the program, boot the computer with your system diskette in A:,
log to drive B: (by entering B:) where you have the astrology working
diskette, and start the program by entering ASTROL96

Hard disk-based systems:  from your root directory create a directory
for the program - enter MD ASTROL  then change to this directory by
entering CD ASTROL  Place the program distribution diskette in drive
A: and proceed as above for floppy installation.  Make sure the PATH
statement in the AUTOEXEC.BAT file in your root directory includes the
directory that has the SORT.EXE and GRAPHICS.COM files, or else copy
these DOS system files to the ASTROL directory.  You are finished
installing the program.  Each time you want to run the program, boot up
the computer, enter CD\ASTROL, and start the program by entering ASTROL96

The instructions and documentation for the astrology program are 
contained in the HELPn.AST files which are accessed from the Program
Assistance menu inside the program.  If you want a printed copy, my
PRINTDOC program will print these documentation files as a 16-page manual.
If logged to drive B where the HELPn.AST files are, enter A:PRINTDOC
You can find information regarding printing the graphic chartwheel to
your printer in the file GRAPHICS.DOC on the distribution diskette.
Users who have a Hercules monographics card instead of a color graphics
card will find information of interest to them in the file HERCULES.DOC.

The program is written in compiled Microsoft Basic and operates on all
IBM-compatible personal computers that have at least 208K of free RAM.

New users can obtain a registration code for ASTROL96 by sending
a check or money order for $29.00 to the author at the above address.

Enter your registration code at the Program Registration screen each
time you start up the program.  The registration code is not hardcoded
into your program copy.  The program calculates the correct registration
code from the name that you enter.  Enter the code without spaces between
the letters and numbers.  You can permanently save your registration code
by running the CUSTOM96.COM program, for which see CUSTOMIZING THE PROGRAM
at the PROGRAM ASSISTANCE menu inside ASTROL96.

```
{% endraw %}

## REL96FIX.DOC

{% raw %}
```
ASTROL96, created in March, 1990, replaces ASTROL95, created in December,
1987.  The impetus to replace ASTROL95 comes from the tendency of its
graphic chartwheel to freeze some 386 computers.  ASTROL95 was a product
of the excellent but dated IBM Basic compiler 2.0.  With Microsoft's
Basic compiler 7.0, I was finally able to produce a program which 
approaches ASTROL95 in speed and size.  For speed ASTROL96 uses the
alternate math library which does not emulate a math coprocessor in
software.  For size, the ASTROL96.EXE file contains two overlay files
which are memory-swapped; CHKDSK need show only 212,000 free bytes.

While updating for more modern machines, some backward compatibility was
lost, as ASTROL95 will run under PC-DOS 2.0 but ASTROL96 requires 2.1.

ASTROL96 has many small improvements, most of which derive from work
on my commercial AstrolDeluxe program.  I incorporated improvements into
ASTROL96 if I could do so without increasing the size of the program.

If anyone discovers problems or has recommendations for additions or
changes to the program, my Compuserve ID is 76317,547 and my address is:

John Halloran
P.O. Box 75713
Los Angeles, CA 90075

```
{% endraw %}

## UPGRADE.DOC

{% raw %}
```

There is upward compatibility between versions of the astrology program
with respect to saved charts.  Saved charts from versions prior to 9.5 
will not have the moon's nodes, Part of Fortune, house system name,
type of zodiac, or Remarks field, but the saved information should
retrieve and display correctly.

Saved charts are stored in files CHART.AST and POINTER.AST.  If you are
upgrading from an earlier version, copy these two files from your old
working diskette to your new working diskette.  These files are not on
the distribution diskette.  They are created when the user first saves
a chart to file.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0966

     Volume in drive A is #0966 S1.7
     Directory of A:\

    README   DOC      3200   6-05-90  11:04a
    ASTROL96 EXE    224935   5-17-90   2:10p
    ATLAS    ARC      6966   3-15-90   2:54p
    HELPDOC  ARC     17015   6-05-90   9:09a
    CUSTOM96 COM     26274   3-16-90  12:43a
    GRAPHICS DOC     10240   3-16-90   1:29a
    GRAPHICS ARC     22147   6-01-88  12:00p
    HERCULES DOC      3328   3-16-90   1:19a
    HERCULES ARC      2117   9-11-86  10:05a
    ARCE     COM      7136   9-16-87   3:12a
    PRINTDOC COM     14529   6-04-90   1:54p
    UPGRADE  DOC       640   6-04-90   4:24p
    REL96FIX DOC      1204   5-17-90   2:53p
    PD96     DOC      3072   6-09-90  10:01a
    GO       TXT       498   7-09-90  12:44a
    GO       BAT        38  10-19-87   3:56p
    FILE0966 TXT      2443   7-09-90   6:03p
    CHART    AST         0
           18 file(s)     345782 bytes
                            8192 bytes free

![PC-SIG Library Disk #0966]({{ site.software.pcsigdisks.server }}/pcx86/sw/misc/pcsig/0001-0999/DISK0966/DISK0966.jpg)
