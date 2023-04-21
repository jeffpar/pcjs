---
layout: page
title: "PC-SIG Diskette Library (Disk #3234)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3234/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3234"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BLURB.TXT

{% raw %}
```
PLEASE USE ONE OF THE FOLLOWING DESCRIPTIONS WHEN UPLOADING DATAVIEWER:


One-line, 41-character blurb:

Open up a window on your ASCII datafiles!


Three line, 159-character blurb:

Open up a window on your ASCII datafiles! Take a
quick look at the waveform of an entire data set in a full-
screen plot, then zoom in with a sliding window.


Four line, 228-character blurb:

Open up a window on your ASCII datafiles! Take a
quick look at the waveform of an entire data set in a full-
screen plot, then zoom in with a sliding window that can be
effortlessly moved and sized with standard editing keys.


```
{% endraw %}

## DATA.TXT

{% raw %}
```
******** DATAVIEWER 1.1 Copyright (c) 9/92 Ed Suominen***********
*                                                               *
* Open up a window on your ASCII datafiles! Take a quick look   *
* at the waveform of an entire data set in a full-screen plot,  *
* then zoom in  with a sliding window that can be effortlessly  *
* moved and sized with standard editing keys.                   * 
*                                                               *
*****************************************************************

DATAVIEWER is shareware; if you find it useful please send
$10.00 to:

	Ed Suominen
	16529 28th Ave. W. Apt. A.
	Lynnwood, Wa 98037

This price was deliberately set low to encourage registration
for ALL usages. Please see "Registering: Why ten dollars? "

This software is copyright (c) 1992 Ed Suominen. All Rights
Reserved. It may be freely copied for purposes of evaluation
only, but no more than $5.00 may be charged for its distribution.

NO WARRANTY IS EXPRESSED OR IMPLIED FOR DATAVIEWER; THE USER
ASSUMES ALL RISKS AND LIABILITIES RESULTING FROM ANY INACCURACY
IN PROGRAM EXECUTION, RESULTS, OR DOCUMENTATION. 

WINDOWS is a trademark of Microsoft Corporation.
File Manager, PIF, and CLIPBOARD are features of Microsoft's
WINDOWS operating system.


C O N T E N T S
       		    
I.      Introduction . . . . . . . . . . . . . . . . . . . . . . . 2

II.     Running Dataviewer from DOS or WINDOWS . . . . . . . . . . 2

III.    View modes: overview . . . . . . . . . . . . . . . . . . . 3

IV.     Color modes. . . . . . . . . . . . . . . . . . . . . . . . 4

V.      View modes in detail . . . . . . . . . . . . . . . . . . . 4
	 a. Full-view mode
	 b. Graphics window mode
	 c. Text window mode

VI.     The sample datafiles included with Dataviewer. . . . . . . 6

VIII.   Registration: Why ten dollars? . . . . . . . . . . . . . . 7

IX.     Glossary . . . . . . . . . . . . . . . . . . . . . . . . . 8






				- 1 -

I N T R O D U C T I O N

	Dataviewer is designed to be a convenient window into
large data sets of up to 8000 elements. The spreadsheets and
mathematical calculation tools that create these numbers often
fail to provide a way to quickly look at the results they
generate. Creating plots is usually a tedious process
emphasizing aesthetics over direct, immediate, and detailed
information. With Dataviewer, insight into the most subtle
nuances in these data sets is only a DOS command or mouse click
(from WINDOWS File Manager ) away. 

	The plots produced by Dataviewer are of high quality and
can be exported by running under WINDOWS or using PRINT-SCREEN
under DOS. This program can also be used to support high-end
plotting software that is too top-heavy to move quickly around
huge datafiles. Dataviewer can be used to monitor the data while
it is being prepared, and to select what parts are of interest to
plot. It functions well by itself or as a companion to the
many excellent plotting programs available that may not have the
same speed and agility.

	While Dataviewer is not a WINDOWS application, it is
"WINDOWS-aware. " It was written and tested mostly under
WINDOWS, and works smoothly in 386-enhanced mode. WINDOWS 3.1
offers active display of a graphics window, and this can be
convenient when Dataviewer is run on a fast 386. "Inverse" color
mode has been provided specifically to make it easier to copy
plots from Dataviewer into WINDOWS applications.

	By remaining a native DOS application, however,
Dataviewer can help more users gain insight into their work.
Requiring just a VGA monitor and perhaps an optional boost
from a math coprocessor, this compact program can be tucked into
the DOS directory and run from anywhere to view ASCII datafiles.

	The file reading algorithm is very flexible, and will
simply read past non-numeric characters. Any delimiters are
acceptable between numbers; commas, spaces, returns, and tabs all
work. Entire words can be included in the files and usually will not
affect the results.


R U N N I N G   DATAVIEWER   F R O M    DOS   O R    WINDOWS

	The program's executable file takes up less than 64k of
disk space; it will easily fit into the C:\DOS directory of
any hard disk. This directory is on the DOS path and the
programs in it can be run from anywhere on the hard disk.

	Dataviewer is meant to be run from the command line.
It accepts the name of the datafile right after its program name.
No fancy directory listings are provided from the program; use
the DOS "dir" command to find the datafile of interest then type
"DATA name.extension ".



			   - 2 -

	If Dataviewer is in the DOS directory, DOS will look
there for the executable and run the named datafile in the
current directory. If the datafile is not in the current
directory, a complete path can be named. For example,
"DATA d:\data\sine.dat". If DATA.EXE is in the DOS directory,
this is never necessary; just use the DOS "cd" command to
go to where the data is.

	Running Dataviewer under WINDOWS is even simpler. File
Manager provides a command "Associate" in the "File" menu.
Select it and type "DAT" for the extension and "C:\DOS\DATA.EXE"
in "Associate with. " Then, to look at a datafile, simply double-
click on any file with the extension ".DAT" .

THIS SECTION ASSUMES FAMILIARITY WITH WINDOWS

	Dataviewer is useful for viewing data in a temporary
datafile to monitor work in a spreadsheet or mathematical
software.  Copy DATA.EXE to C:\DOS and create a program icon with
properties:

	DESCRIPTION: Temp Data
	COMMAND LINE: C:\DOS\DATA.EXE C:\TEMP\DATA.DAT

	When working, create the datafile DATA.DAT in the C:\TEMP
directory, then double-click on the icon "Temp Data". The
temporary datafile will be viewed in a window.

	A PIF ( Program Information File ) is included which will
run Dataviewer in a window in 386-enhanced mode. Copy it into the
WINDOWS directory and give it a try. If your CPU is too slow to
support windowed graphics, change the PIF to full-screen.


V I E W    M O D E S :   O V E R V I E W

	All three viewing modes in Dataviewer are based on the
idea of a "data window" into the overall data set. Usually the
data set will be many times the size of the data window, which
can be adjusted to a width of 5, 10, 15, 20, 30, and 60 samples.
These three modes are described in greater detail later in this
document.

	The program starts up with a view of the overall plot,
"full-view" mode (F2 selects). The data window is represented by
a dashed box; its borders will fill the screen when either the
graphics or text data window is selected. Using the standard
keyboard editing keys (arrows, Page up, Page down, Tab, Home,
and End ) this box and the data window it represents may be
quickly moved to any position. 

	When "graph" (F3 selects) is selected, the data within
the dashed box will fill a full-screen plot. This allows close
inspection of the waveform. Scrollbars are provided to help keep
track of the data window position in the entire data set. 

	"Text" (F4 selects) is most useful for viewing the actual

			     - 3 -

numerical data. Both floating point and scientific notation are
shown side by side. Extremely small or large numbers are simply
represented as "~ 0" and "~ (infinity sign)." A vertically
oriented text-symbol version of the graph plot is displayed in a
window to the right of the data. 


C O L O R   M O D E S

	All of these viewing modes can be displayed in either
monochrome ("BW"), VGA 16-color ("Color"), or inverse monochrome
("Inverse"). monochrome is the fastest to display; it uses
2-color VGA mode and one fourth the video memory of 16-color
VGA. It only gives an advantage when run full-screen, either
under DOS or WINDOWS. It will as slowly as color in a WINDOWS
graphics window, and will display everything as blue. Use
monochrome mode in a full-screen to quickly move around or
clarify a dim color of interest.

	Color is the best all-around mode, and is the default.
It looks good in either full-screen or a WINDOWS graphics window,
though windowed operation is too cumbersome for much movement in
anything slower than a 386DX-33. Find the area of interest
in full-screen, and then put it into a graphics window with the
WINDOWS keystroke ALT-ENTER. Text view will display quickly in
color either windowed or full-screen because it is character
based.

	 Inverse monochrome has been provided to make it easier
to copy data from Dataviewer into WINDOWS applications with the
CLIPBOARD. WINDOWS documents are black-on-white, and ordinary
DOS graphics data will print out as white-on-black. Inverse mode
will make the data look more like it came out of a WINDOWS
application, and will save toner or ink in your printer. Inverse
mode is NOT recommended for full-screen or DOS use; the numerics
do not display in the graphics-based views. Text mode shows
blue-characters on white in any display, and might seem
preferable if you're used to WINDOWS text.


	   F U L L - V I E W   M O D E   D E T A I L S

	One of the difficulties in mapping a big ( up to 8000
elements ) data set into a VGA screen ( 640 pixels ) is that
much of the information must be thrown out ( "decimated" ). To
help deal with this, full-view mode displays two plots when
decimation takes place.

	The upper plot is called an AVERAGE plot. It plots a
pixel at the AVERAGE y-position of all the data elements
"stuffed" into it. With 8000 elements of data, each pixel is an
average of twelve data points. This plot is useful for viewing
low-frequency trends in a waveform because it filters out the
high frequency variations. 

	The lower plot only displays when there are more data
elements than VGA pixels ( 640 ). It draws a line from the

			     - 4 -

minimum value "stuffed" into a pixel to the maximum. This
creates an ENVELOPE plot; the maximum variations of the waveform
at each pixel position are shown. This can mask low-frequency
trends shown by the AVERAGE plot, but is essential for seeing
that the waveform does have high-frequency variations that
warrant closer inspection in a data window.

	The data window can be moved in full-view mode just as in
the window modes; the dashed box will show where the window would
be. If an interesting squiggle is seen, the box can be moved and
sized so that it fits right around it; then graphics window mode
will show the squiggle in a full-screen plot. 


G R A P H I C S   W I N D O W   M O D E   D E T A I L S

	Graphics will likely be the most frequently used mode. It
draws a full-screen plot of the data window and allows very
detailed viewing of the data waveform. The data points are
displayed with square symbols and are connected by lines. The
first and last data points in the window are not given symbols,
but are "attached" to the plot borders.

	The scrollbars below and to the right of the plot show
the size and position of the data window in relation to the
entire data set. The horizontal scrollbar is the easiest to
understand; as the data window moves right and left along the
entire data set, the scrollbox moves right and left along the
scrollbar. Move the data window to the first element with the
HOME key and the scrollbox will move to the left. Increase the
size of the data window and the scrollbox will become bigger.

	The vertical scrollbar is less obvious. It also shows the
size and position of the data window, but in the vertical
direction. The vertical size and position of the data window is
not something that can be adjusted manually. The vertical scaling
and position of the data window is automatic, and changes with
the waveform. If the waveform has its maximum amplitude at a
particular position ( sample number ) in the data set, the data
window will be full-size; the vertical scrollbox will fill the
scrollbar. If the waveform is flat at a position, the scrollbox
will be very small. The position of the scrollbar is simply the
vertical offset of the data window at that particular sample
position; it shows how "high up" the data window is on the
waveform.

	The use of the scrollbars is best learned by moving around a
waveform. The sample datafile GIBBS.DAT has many variations that
will move the data window and vertical scrollbar all over at
different sample positions. Exploring the waveform in detail and
checking the scrollbars at each position will make their purpose
more clear than can be explained here.






			   - 5 -

T E X T   W I N D O W   D E T A I L S

	The text window provides the actual numbers behind the
waveform viewed in the other two modes. Floating-point format
( if the number isn't too big or small ) and scientific notation
are displayed. Keeping track of the window position is aided by
the symbol plot in the right window and a position scrollbar
( equivalent to the horizontal scrollbar in graphics mode ). This
plot and scrollbar are vertically oriented to display
side-by-side with the numbers. The graphics plot is simply
turned on its side, with the y-axis labels expanded into greater
precision.

	Since text mode only displays 25 rows, the data window size is
forced to the 20-sample size. It will stay at this when another
mode is entered to keep comparisons accurate. This can be
confusing if the window is expanded to 60 samples and then text
mode is entered; the window will be automatically shrunk to
one-third its original size without warning. 

	Since text mode is character-based, copied data from it will be
pasted as plain text into WINDOWS applications and the PRINT
SCREEN key will yield a character printout. It is also displays
more quickly than the graphics mode.


              S A M P L E   D A T A F I L E S

	Included with Dataviewer are seven sample datafiles. The
first one to look at is "GIBBS.DAT". This shows one cycle of a
non-ideal square wave. The overshoots and high-frequency
variations are known as "Gibbs's phenomenon; "  they result from
a filtered square wave containing only a limited number of
harmonics. Zoom in on the overshoots with the data window and
observe the correlation between the size of the dashed box in
full-view mode, the graphics data window, and the scrollboxes.

	The AVERAGE and ENVELOPE plots look the same for this plot
because, although the datafile is decimated, there are not two
data points per VGA pixel to draw lines between. The lower plot
begins to be useful with datafiles of more than 1240 elements; it
isn't even displayed when there are fewer than 620 ( the number
of VGA pixels in the plot ).

	"AM.DAT" shows an amplitude-modulated waveform. The
carrier frequency is very high and will only show up as white in
the ENVELOPE full-view plot. Zoom in with the data window to see
the carrier sine wave. Look at the smallest parts of the
modulating envelope ( elements 1525-1545 ) with the text window
and note the symmetry of the very small values on either side of
zero. This is a bigger data set; use TAB and SHIFT-TAB to move
the window in bigger jumps.

	"AM_S.DAT" is a spectral plot of the waveform of
"AM.DAT; " it is included to show off Dataviewer's ability to
look at a very wide range of values in a single data set. This
datafile was created by running an FFT on AM.DAT. Since the FFT

			   - 6 -

was performed with a finite precision floating-point numbers,
it has noise on either side of the actual signals. Take a look
for yourself; you may never have seen such imperfections
in an FFT before!

	"2TONE.DAT" was produced by superimposing two signals
close in frequency. The varying envelope is a beat note; its
frequency is the difference between the two signals.

	"DACOUT.DAT" shows the output of a simulated 3-bit
digital-to-analog converter; only 8 discrete output levels are
present. "DACOUT_F.DAT" shows the signal after it has been
lowpass filtered ( with an FIR algorithm ). Zoom in with a
window and note how the filtering in the second datafile has
rounded off the square steps present in the first. These are
smaller data sets; note that the full-view plot does not display,
since there are fewer data elements than VGA pixels.

	Finally, to get a look at very big data numbers look at
"EXP.DAT". This is a plot of the natural constant "e" to the
power of x, also denoted as exp( x ). The full-view plot doesn't
even show the curve on the left side because it scales to the
gigantic numbers on the right side. Interestingly, The graphics
and text windows will show the same exact plot for any position
in the data set; this is because of calculus:

  d      x       x
 ---  e    =  e
 d x

The function grows by the same percentage at each position, so
it looks the same everywhere. The labels show the huge size to
which the function actually grows.


R E G I S T R A T I O N :   W H Y  T E N   D O L L A R S ?

	Dataviewer is priced low to encourage registration for
all uses. Much of today's software is priced so high that
occasional users and students are tempted to pirate it. It seems
unreasonable to pay hundreds of dollars for a slick software
package that will get used for a single college class or project.
It is just as irritating to part with that money to get features
that should have been built into programs already sitting on the
hard drive. Paying a mere ten bucks for Dataviewer should provide
relief from this frustration.

Some example uses of Dataviewer that require registration of $10:

	1.  As a tool for use with high-end mathematical,
	    spreadsheet, or plotting software
	2.  As a stand-alone plotter for casual use
	3.  For use in a single high school or college
	    class or major project
	4.  Installation on the hard drive of an individual PC
	    in a school computer lab


			   - 7 -

	5.  Installation on an individual test station on a
	    production line

You get the idea. Use the software, but please pay for it.

The only use of Dataviewer that does not require registration is
evaluation on a single casual project or assignment to decide
whether or not to use the program in the future.

	This author is sensitive to the plight of student users
and the high prices they face in order to learn with modern
software tools. The ten dollar registration for Dataviewer will
likely be the smallest single software payout made over the
course of a college education.

	Whatever your application, please help pay the author
(me!) for my work. I'll need quite a few  $10  registrations to
just break even on my time spent developing Dataviewer for you.
I hope to see your name among them. All that you will receive in
exchange is a combination thank-you letter  / official software
license with a phone number for technical support, and another
person's gratitude, but for ten bucks that might be a good deal
all by itself.


G L O S S A R Y

data set:
  A one-dimensional array of data that can be
  plotted with a line graph. A common examples of a data set is a
  checking account balance over time. If the weekly balances were
  put into a datafile, a line graph could be drawn from the
  resulting "data set. " Scientific software and spreadsheets often
  produce huge data sets from mathematical functions.

datafile:
  An ASCII text file containing numbers separated
  by any non-numeric character or group of characters.

data window:
  A magnification of a section of the entire data set, viewed
  either in a graphics plot or text columns and plot. Can be
  sized and moved with standard editing keys. The "data window"
  is represented in full-view mode by a dashed box.

graphics window:
  A box on the screen in which the program is run in graphics
  mode under WINDOWS or other windowing operating system.
  Dataviewer has an virtual 8086 processor all to itself and the
  graphics commands it sends to the video card are trapped and
  handled by the operating system. Works only with 386
  processors, and fast ones at that.






			   - 8 -
```
{% endraw %}

## INVOICE.TXT

{% raw %}
```
			  I N V O I CE


Remit to:                       From:

Ed Suominen                     _________________________________
16529 28th Ave. W. Apt. A.
Lynnwood, WA 98037              _________________________________

				_________________________________

				_________________________________

				Contact individual:

				_________________________________

				_________________________________



Qty                             Unit Price           Total


_____ Dataviewer license only   $10.00               ____________


_____ Dataviewer license with   $15.00               ____________
      latest version software
      on disk


				Total                ____________



I use 5 1/4" _________  3 1/2" __________ disks


Comments ________________________________________________________

_________________________________________________________________

_________________________________________________________________

Thank you for your registration!
Upon receipt of this paid invoice, printed software license
or licenses will be sent. If software on disk is requested, the
latest version of Dataviewer will be sent. Please note that this
may not have changed from the release included with this invoice
document file.






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3234

     Volume in drive A has no label
     Directory of A:\

    READ     ME        627   9-14-92  12:51p
    DATA     EXE     61888   9-13-92  10:40p
    DATA     PIF       545   9-14-92  11:52a
    DATA     TXT     20263   9-14-92   1:31p
    INVOICE  TXT      1300   9-13-92  10:51p
    BLURB    TXT       627   9-13-92  10:55p
    GIBBS    DAT     20021   8-18-92  12:16p
    2TONE    DAT     22500   9-14-92  11:37a
    AM       DAT     46080   9-14-92  11:45a
    AM_S     DAT     47239   8-31-92   1:03p
    DAC      DAT      5760   9-14-92  10:01a
    DAC_FILT DAT      5615   9-14-92  10:21a
    EXP      DAT      1931   9-05-92   8:31p
    GO       BAT        36  10-05-92   3:14p
    SHOW     EXE      2040   9-12-88  10:48a
           15 file(s)     236472 bytes
                           79872 bytes free
