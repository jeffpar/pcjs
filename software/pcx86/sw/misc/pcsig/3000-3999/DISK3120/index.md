---
layout: page
title: "PC-SIG Diskette Library (Disk #3120)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3120/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3120"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.TXT

{% raw %}
```
GENERAL INFORMATION:

Jpuzzle (Ver. 1.1) is a windows puzzle game which lets you read in any .BMP
file, scramble it into from 4 to 400 pieces and put it back together.
There are two different modes (and therefore games) for moving
pieces in Jpuzzle, one is called Jigsaw and the other Sliding.  With jigsaw
you select two pieces and exchange their positions, with Sliding there is 
one empty position into which adjacent pieces can be moved to.
Jpuzzle keeps track of how many moves you have taken and how much time has
elapsed.  You can save an unfinished puzzle to work on later. The number of
moves and time spent on the puzzle are also saved so that a cumulative
amount is available.  If you are stuck you can ask Jpuzzle for a hint and
additionally you can tell Jpuzzle to mark the misplaced pieces with an X.
While you are working on the puzzle you can view the picture (i.e.
solved puzzle) by selecting the "Picture" menu item from the "View" menu.
You can also stretch or shrink the picture by selecting "Size to Window".
With Jpuzzle you can also change some of the default parameters like:
Initial .BMP loaded on startup, the number of pieces to divide the puzzle
into, whether or not to display misplaced pieces, whether to startup as a
jigsaw puzzle or a sliding puzzle, and whether to "Size to Window" or not.
To change the default settings simply set them and then select the
"Save Settings" Menu item from the Puzzles menu.  

REQUIREMENTS

Jpuzzle works with Windows 3.0 and 3.1.  The minimum requirement is 1 MB
of RAM and a 16 color VGA monitor, however it works best (i.e. faster,
with larger .BMP files, and with better color) with 2 MB of RAM and a 256
color VGA monitor in Windows Standard or Enhanced mode.  A rough rule of
thumb is that you need as a minimum, enough free memory for the program and
the .BMP file.  If you have enough memory for the program and twice the
.BMP file, it will work faster.  For example to view a 150KB .BMP file, you
should have at least 220KB free memory and ideally 370KB. To view the amount
of free memory select the "About Program Manager" menu item of the "Help"
menu in Program Manager. You can tell when Jpuzzle does not have enough
memory to run optimally, by the screen repaint speed and by the fact that
it repaints the screen from the bottom up instead of from the top down.


COLOR:

The Jpuzzle disk includes pictures in the form of .BMP files.  Some of
these pictures are in 16 colors and some are in 256 colors, including
256 gray scale. The number of colors in each picture is included in the
filename (e.g. mich256.bmp). In order to see the 256 color pictures
correctly, you must have the appropriate monitor, video card and driver.
In addition windows must be configured correctly.

To check your windows configuration, double click on the "Windows Setup"
icon in Main.  If the display setup does not indicate 256 colors
(e.g if it says "VGA") then it is configured for 16 colors.  If you have
the right driver you can configure it for 256. To change it, select "Change
System Settings".  Look at the list of available drivers, if the one for
your video card is there, select it, if not and you have the driver on a
floppy, select "other" and follow the instructions.		  

REGISTRATION:

The unregisterd version of Jpuzzle has all of the same features as the
registerd version except for the number of pieces into which you can divide
the puzzle.  You can freely distribute the unregistered version to your
friends or upload to your favorite BBS.  When you register Jpuzzle you get:

	1. A wider selection of pieces to divide the puzzle into.
	2. The latest version of Jpuzzle with enhancements and bug fixes.
	3. Additional puzzles.
	4. A personalized puzzle of any photo (for an additional $5).
	   You can use the same BMP file as a background for Windows.

To register send $16 ($21 if you want a personalized puzzle) to:

	Sofia Systems
	P.O. BOX 360188
	Milpitas Ca 95036
	tel. 408-942-5401

For each additional photo add $15.
For each additional floppy full of puzzles add $6.
The number of puzzles per floppy depends on the color resolution (16 or 256)

AUTOMATIC SOFTWARE INSTALLATION:

To install Jpuzzle from Windows you simply execute the install command
on the floppy disk.  There are two ways to do this:

	From File Manager:	Select the floppy drive you inserted the 
				floppy into (either A: or B:) and double
				click on the INSTALL.EXE file.  Follow
				instructions for software installation
				and for ICON installation.

	From Program Manager:	Select the "Run" menu item from the "File"
				menu and enter either a:\install or
				b:\install depending on which floppy drive
				you inserted the disk into.  Follow
				instructions for software installation
				and for ICON installation.


MANUAL SOFTWARE INSTALLATION:

If for some reason you do not want to do an automatic installation, the
following procedure can be used for a manual installation:

	For example,
	First from DOS:
		mkdir c:\sofia
		cd c:\sofia
		a:\jpunzip

	Continuing from Windows:
		Select File Manager
		From File Menu Create c:\jpuzzle
		Select c:\jpuzzle as current directory
		from File menu select Run and enter a:\jpunzip

MANUAL WINDOWS ICON INSTALLATION:

	To make Jpuzzle accessible from Windows:

		1. select the program group you want Jpuzzle to be in,
		   by clicking inside one of the boxes (e.g. Games)
		2. select the "file" menu from the Program Manager menu bar
		3. select the "new" menu item
		4. click the "OK" button
		5. in "Description" box type: Jpuzzle
		6. in "Command Line" box type: c:\jpuzzle\jpuzzle.exe
		7. click the "OK" button

The Jpuzzle icon will now appear inside the selected program group box.

CHANGES BETWEEN VERSION 1.0 and 1.1

1. Added simple installation program INSTALL.EXE.
2. Increased the number of allowed pieces for unregistered versions from
   just 4 to 16, 36, 64 and 100.
3. Added more puzzle pieces options.
4. Added more error code for low memory conditions.
5. Made it work in Windows real mode.
6. Changed sample .BMP files

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3120

     Volume in drive A has no label
     Directory of A:\

    README   TXT      6197   5-14-92   3:58p
    JPUNZIP  PIF       545   4-30-92   8:10a
    INSTALL  EXE      9584   5-13-92   3:19a
    JPUNZIP  EXE    342896   5-14-92   8:30a
    GO       BAT       627   1-13-92   3:00a
            5 file(s)     359849 bytes
                               0 bytes free
