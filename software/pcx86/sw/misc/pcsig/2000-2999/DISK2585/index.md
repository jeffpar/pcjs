---
layout: page
title: "PC-SIG Diskette Library (Disk #2585)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2585/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2585"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2585.TXT

{% raw %}
```
Disk No: 2585                                                           
Disk Title: VUIMAGE                                                     
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: VUIMAGE                                                  
Author Version: 2.82                                                    
Author Registration: $30.00                                             
Special Requirements: Graphics card.                                    
                                                                        
If you work with GIF/TIFF/PCX graphic files, you need VUIMAGE!  VUIMAGE 
lets you display or print GIF files and bilevel/grayscale TIFF files.   
It's fast and uses only 150K of free memory.                            
                                                                        
VUIMAGE automatically configures for your monitor with excellent color  
rendition on CGA, EGA, VGA, MCGA, and Super VGA (Hercules monochrome is 
also supported).                                                        
                                                                        
Automatically scale a graphic to the size of your screen or manually    
scale from 1% to 999%.  Zoom in and out, pan to different parts of a    
large graphic, and easily adjust brightness while the picture is on     
screen.                                                                 
                                                                        
Print out any graphic (with six dithering options) and VUIMAGE will     
automatically size it for your printer. (Some GIF images are provided   
for your use.)                                                          
                                                                        
In addition, you can specify a list of files to be automatically viewed 
allowing you to create great slide shows and demos.                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## ORDERFRM.DOC

{% raw %}
```
To register your copy of VUIMAGE(tm) and obtain VUIMAGE PLUS(tm), please
fill out the following form and send it along with a check or money order.

Send To:    Offe Enterprises (Attn: Orders)
            1163 E. Ogden Avenue, Suite #705-131
            Naperville, IL 60563, USA                  Tel:  (708)-357-6679
---------------------------------------------------------------------------       
Name (to register to): ________________________________________________

   Address to ship to: ________________________________________________

                       ________________________________________________

                       ________________________________________________

                       ________________________________________________

Telephone: ___________________________________ Date: __________________


---------------------------------------------------------------------------
QUANTITY         DESCRIPTION                      UNIT PRICE       TOTAL
---------------------------------------------------------------------------

________         VUIMAGE PLUS(tm)                 US $ 30.00       ________

________         __________________________       __________       ________

________         __________________________       __________       ________

                                            Additional Taxes       ________

                                         Additional Shipping       ________

                                                       Total       ________

---------------------------------------------------------------------------
* VUIMAGE PLUS(tm) price includes taxes and shipping within USA.
  Add US $5.00 for shipping to outside USA.

Check/Money Order enclosed for US $ ___________

---------------------------------------------------------------------------

VUIMAGE(tm) Vers. # : ______ Place obtained from: ______________________

Main Interest:  GIF ___  TIFF ___  PCX ___  View ___  Print ___

Type of Computer _________________________________________

Type of Operating System _________________________________

Type of video card/monitor _______________________________

Additional Comments: ___________________________________________________

________________________________________________________________________

________________________________________________________________________
```
{% endraw %}

## PROGRAMS.DOC

{% raw %}
```
------------------------------------------------------------------------------

      INFORMATION ON OTHER PROGRAMS AVAILABLE FROM OFFE ENTERPRISES

                Offe Enterprises
                1163 E. Ogden Avenue, #705-131
                Naperville IL 60563 USA
                Tel: (708)-357-6679

------------------------------------------------------------------------------

                             TBG(tm)

        Tiff Bilevel/Grayscale to TIFF/GIF Bilevel/Grayscale Converter
          Copyright (C) 1990 Offe Enterprises. All rights reserved.

Converts a bilevel (black and white) or grayscale TIFF image to a
same or lower resolution bilevel/grayscale image in TIFF or GIF format.

EXAMPLE USES

  1.  Convert a scanned image in TIFF format (these are usually
      black and white images that have a large number of 
      horizontal and vertical pixels) to a smaller image
      with grayscales so that the image can be viewed more
      completely on a VGA/EGA screen.  The grayscales compensate
      for the loss of resolution caused when the image is
      reduced to a smaller size.

  2.  Convert a bilevel/grayscale TIFF file to a GIF file.

  3.  Reduce the filesize of TIFF files by scaling the image.

The program can be executed non-interactively (for example, from a batch file.
A demo version this program is available on many BBSes.


SYNTAX: tbg [options] inputfile outputfile

OPTIONS:

   -otiff  output file in TIFF format.

   -ogif   output file in  GIF format.

   -xn  where n=1,2,3,etc.  Reduce the width by this factor.
        Example: -x2 reduces the width to half its value.

   -yn  where n=1,2,3,etc.  Reduce the height by this factor.
        Example: -y4 reduces the height to a quarter of its value.

   -bn  where n=1 to 8.  Set the number of bits per pixel in the output to n.
        If a lower number is sufficient, the lower number is used (also see the
        -f option).  The maximum possible gray levels in the output is 2 to the
        power of this number.  Example: -b4 sets the # bits/pixel to 4.

   -f   force the number of bits/pixel to the value specified by the -b option

   -q   quiet.  Do not display input/output image information



EXAMPLE:       tbg -x4 -y4 -b2 input.tif output.tif
               tbg -ogif input.tif output.gif


------------------------------------------------------------------------------

                        SCRtoPS(tm) - Screen-to-PostScript

       PRINT PC SCREENS TO POSTSCRIPT PRINTER OR CAPTURE TO ENCAPSULATED
               POSTSCRIPT FILE FOR INCORPORATION INTO DOCUMENTS

              for IBM PC + Adobe PostScript Printers and Compatibles


Performs screen captures directly into PostScript by pressing Shift-PrintScreen.
Use to include screen snapshots in your documents (including line/box/upper
ASCII characters) or to print from software that does not support postscript.

Supports Text and graphics modes including IBM character graphics on CGA, EGA,
VGA and some SuperVGA.  Text modes use the Courier font for standard ASCII
characters.

Send postscript output to LPT1/LPT2/LPT3 ports, COM1/COM2 ports or disk files.
Send to postscript printer directly or import file into Desk-Top Publishing
packages like Ventura Publisher/ WordPerfect for use with PostScript printers.

Supports color to greyscale conversion on EGA/ VGA/SuperVGA and xon/xoff on
com ports

Uses minimal memory - less than 10K when resident - can be removed from memory.

Graphics cursor indicates progress, screen capture can be aborted

User selectable landscape/portrait mode, x, y sizes, and <ctrl>-d at end-of-job

Built-in help facility


(A new program is also available that will post-process TEXT screens
 captured using SCRtoPS(tm) so that foreground/background color information
 can be translated to different foreground thicknesses and background gray
 shades on the printout)
   
------------------------------------------------------------------------------
Prices subject to change without notice.  SCRtoPS is a trademark of
Offe Enterprises.  PostScript is a registered trademark of Adobe Systems, Inc.
IBM is a trademark of International Business Machines Corporation.  
WordPerfect is a registered trademark of WordPerfect Corporation.

```
{% endraw %}

## VUIMG.DOC

{% raw %}
```
                  VUIMAGE(tm) (Version 2.82) (Shareware)
                GIF*/TIFF Format Picture Viewer/Printer
        Copyright (C) 1990 Offe Enterprises. All rights reserved.
 
                                USERS MANUAL
 
 Offe Enterprises, 1163 E. Ogden Ave.  #705-131, Naperville, IL 60563  USA
                                708-357-6679

   ------------------------------------------------------------------------ 
  | A list of changes in this version is provided at the end of this file. |
   ------------------------------------------------------------------------ 

*  GIF and "Graphics Interchange Format" are trademarks (tm) of Compuserve,
   Inc., an H&R block company.  PostScript is a trademark of Adobe Systems, Inc.
   VUIMAGE, VUIMAGE PLUS, TBG and SCRtoPS are trademarks of Offe Enterprises.


==============================================================================

FEATURES
--------

Offe is proud to bring you our GIF/TIFF display/print software for the 
IBM PC family.  Its main features are:

    - super fast display of GIF files and bilevel/grayscale TIFF files
    - print GIF and TIFF files (six dithering options)
    - handles large images while needing only 150K of free memory*
    - Support for the GIF89a standard - plain text, graphics control, comment
      extensions, restore to background, restore to previous etc.
    - print entire image, set your own print size
    - supports a variety of display types - CGA/Hercules/6300/DEB/EGA/MCGA/
      VGA/SuperVGA/VESA SuperVGA
    - 320x400x256, 360x480x256 and 800x600x16 driver for standard IBM VGA
    - VESA SuperVGA driver for all SuperVGA cards that have VESA BIOS support.
      Supports the following VESA standard modes (if available in card):
       800x600x16, 1024x768x26, 1280x1024x16
       640x400x256, 640x480x256, 800x600x256, 1024x768x256, 1280x1024x256
    - excellent color rendition in all video modes
    - six dithering options for two-color video modes
    - handles large images with low memory requirement
    - automatic/manual video mode selection capability
    - auto/manual scaling - automatically scale to full screen or
      manually scale from 1% to 999%
    - zoom in / zoom out using the "+" and "-" keys
    - panning - cursor keys allow moving screen window over different sections
      of picture 
    - adjust brightness while picture is on screen
    - supports other boards/future boards through BIOS mode
    - user-friendly, multiple interfaces
        - menu-selectable options
        - command-line selectable options (useful in batch files and when
          called as a sub-program by other programs)
        - pre-programmed keystroke mode (std. input re-direction)
	- select files using cursor or by file numbers
    - specify a list of files to be displayed for slide shows
    - continuously repeat list of files (for demos etc.)
    - abort single picture or list of pictures in the middle
    - handles corrupt files well
    - returns DOS errorlevel value (useful in batch files and when
      called as a sub-program by other programs)
    - user selectable menu screen colors

* GIF89a images that use "restore to previous" function need may need more
  memory for complete restoral to previous.


==============================================================================

FOR REGISTERED USERS
--------------------

Registered users get VUIMAGE PLUS(tm) Version 2.82, our non-shareware version
of the program with the following added features:

- menus may be disabled and file (or files) to be shown may be specified from
  the command line (in this mode, the image may be left on the screen when
  the program ends)

- print options (printer select, set print size, printer port etc.) can
  be specifed from the command line (you can create a batch file easily to
  "configure" VUIMAGE PLUS(tm) for your print options).

- invert images by pressing the "i" key after the picture has been displayed
  on the screen or by the "-ii" commandline option.

- PCX files can also be viewed

- compressed bilevel TIFF files (compression type - CCITT Group 3-1D or
  compression type PackBits) can be viewed.  Many scanners come with
  software that can produce such files.

==============================================================================

REGISTRATION
------------

This version of the program is released as shareware. It is not free and is
not in the public domain.  Private, non-commercial users are requested to
register and support its continued development.  Registered users get
VUIMAGE PLUS(tm) Ver 2.82.  To register, please use the order form supplied
with this package, or send your name, address and phone number(s) with the
registration fee of US $30.00** to:

Offe Enterprises, 1163 E. Ogden Ave.  #705-131, Naperville, IL 60563  USA

(Outside US, please add $5.00**).  Telephone: (708)-357-6679 (USA)

Any use of VUIMAGE(tm) in a commercial environment is illegal and is strictly
prohibited.  Commercial users should purchase VUIMAGE PLUS(tm), the
non-shareware version.  Volume discounts and site licenses are available for
VUIMAGE PLUS(tm).  Contact Offe Enterprises for customized versions.


DISTRIBUTION
------------

You may make copies of the program files for VUIMAGE(tm) and the documentation
VUIMG.DOC (this file) together and distribute them to others, upload to
bulletin boards etc. for non-commercial purposes. The program files should
not be distributed without the documentation file VUIMG.DOC.  None of the
files should be modified in any way.  



 OTHER PROGRAMS AVAILABLE FROM OFFE ENTERPRISES:
-----------------------------------------------

   TBG(tm)     - TIFF black&white/grayscale image to GIF/TIFF black&white/
                 grayscale converter (can reduce large b&w images to smaller
                 grayscale ones for easier viewing, convert TIFF to GIF etc.).
                 Commandline options for non-interactive conversion.

   SCRtoPS(tm) - Dump text and graphics screens (CGA/EGA/VGA) to PostScript*
                 printer or capture to Encapsulated PostScript file (including
                 line/box characters).  Requires only about 10K of resident
                 memory.

   See file PROGRAMS.DOC for more information on these programs.
==============================================================================


   *******************************  NOTICE  ********************************
   *                                                                       *
   *    This program, and all supporting programs and documentation are    *
   *    provided "as is" without warranty of any kind, either expressed    *
   *    or implied, including but not limited to the implied warranties    *
   *    of merchantability and fitness for a particular purpose.  In no    *
   *    event will  Offe Enterprises  be liable  to you for any damages    *
   *    arising out of the use or  inability to use this program and/or    *
   *    all supporting programs and documentation.                         *
   *************************************************************************

** All prices and other information are subject to change without notice.



INSTALLATION AND USAGE
----------------------

Note: Requires MS-DOS Version 2.0 or later and at least 150K of free memory.

1.  FLOPPY DISK  Copy all the files from the program disk to another floppy
                 disk.  Use this as your working disk - place this disk into
                 drive A:, type "A:" and press return.  Go to step 2.

    HARD DISK    Make a new subdirectory.  For example, if you are using
                 drive C: and the subdirectory name you want is \VUIMAGE, enter
                          c:
                          md \vuimage
                 Now make this subdirectory your current directory.  In our
                 example, enter
                          cd  \vuimage
                 Copy all the files from the program disk to this subdirectory.
                 Go to step 2.

2.  Now all the files are in the current drive/directory.  To start the program,
    type "vuimg"  at the DOS prompt and press return.

    You will be placed in the main menu.  Also shown will be a list of files
    in the current directory that have the extension "GIF".  The current display
    mode will be displayed at the bottom left of the screen.  The main menu
    options are displayed at the bottom right of the screen.

    Press "Q" to quit back to DOS.  Go to step 3.

3.  You can execute the program any time by changing to the subdirectory that
    has the program files and typing "vuimg"  as in step 2.  However, it is
    much more convenient to create a "batch file" that will execute the
    program from any directory.  WE RECOMMEND THAT YOU DO THIS so that you
    can "configure" the program this way to suit your own needs.  You can
    create a batch file by typing

          copy con: v.bat     <return>

    where "v.bat" is the name of the batch file.  Now enter the program
    name along with the drive and directory name.  For example,

          c:\vuimage\vuimg    <return>

    Then press <ctrl>-Z followed by a <return> to finish creating the batch
    file (you can also use an editor to create this file).  Now you can start
    the program by typing "v" and return.  The batch file need not be kept
    in the same subdirectory as the program files.  However, the sub-directory
    that it is kept in must be part of your "PATH".  The PATH is a list of
    directories that DOS will search when you type in a command.  Refer to
    your DOS manual for information on PATH and how to add a sub-directory to
    your PATH.

    After you become familiar with the command line options of the program (see
    later section on command line options), you can re-create the batch file 
    and also specify the command line options that you normally prefer to use.
    This way you can "configure" the program to suit your needs.


MAIN MENU
---------

From the main menu, at the "File(s)" prompt, you can enter:

        - "t" to select the file type - GIF or TIFF

        - "m" to change the display mode

        - "s" to change the scaling options

        - "o" to change other user selectable options

        - "d" to select a different directory/different group of files

        - "q" or ESC to quit and go back to DOS.

        - a list of picture files to be displayed.  For example, enter

                3,1,5-7,17-14  <return>

           to display files 3,1,5,6,7,17,16,15,14 from the list (in that order).

        - One of the arrow keys to select files using the cursor keys.

          In this mode, to display a single file, move the cursor bar to the
          file and press enter.  To display a list of files, move to each file
          and press the space bar to select (mark) the file.  Press enter to
          display the marked files or "/" to continuously repeat the list of
          files.  If there are too many files to fit on one screen, use the
          PgUp/PgDn keys to see other files.

          After moving the cursor to a specific file, you can press the
          "Insert" key to obtain quick information about the file.

	  To get back to the main menu, press the escape key.



SELECTING THE FILE TYPE
-----------------------

The default file type is "GIF".  To select between TIFF and GIF,
press "t" at the main menu prompt.  You can also select the file type from
the command line using the "-T" option (for example, -Ttiff will select TIFF -
see section on command line options).


SETTING THE DISPLAY MODE
------------------------

The program selects a video display mode appropriate for the video adapter
and the picture being displayed automatically.  The mode is chosen from the
CGA/Hercules/EGA/VGA modes present and any modes supported by any extended
mode driver that has been loaded (extended mode drivers are selected by the
command line option "-v" - see section "Display Boards and Extended
Modes/Drivers" for more details on extended modes).  SuperVGA modes are
extended modes.

If the user desires to select a particular video mode to display the picture
instead of the automatically selected mode, this can be done by pressing
"m" at the main menu prompt, going into the display mode menu and changing
the display mode.  An appropriate mode supported by your video display
board may be specified.  If any extended video mode drivers have been
loaded, the extended modes supported by these drivers are also listed.

Instead of using the menu, you can also specify the mode to be used from the
command line by using the "-m" option (for example, "-m7" will use the
EGA 640x350 16-color mode - see section on command line options).

There is also a "BIOS" mode that you can use for extended modes that are
unsupported.  Your display board will need to provide complete BIOS support.
Usually the BIOS mode is extremely slow. 

If you are using a video mode that has only 2 colors, you can use dithering
to improve the displayed picture.  Use the Options menu to select a type
of dithering to be used for 2-color modes.  A suggested dither option for
2-color displays is 3 (3x3).


DISPLAYING PICTURE FILES
------------------------

From the main menu, enter the number of the file you wish to display and
press return.  If you wish to display a sequence of files, you can enter
a set of numbers, separated by commas:

        Example:  3,5 <return> will display file 3 followed by file 5. 

You can enter a starting number and an ending number to display a list of
files:

        Example:  2,5-7 <return> will display files 2, 5, 6 and 7.
        Example:  2,7-5 <return> will display files 2, 7, 6 and 5.

After you enter a list of files (or one file) and press return, the picture(s)
are displayed in sequence.

Alternately, you can press the "up arrow" to select files using the cursor.
To see one file, move the cursor bar to the file and press return.  To
select a list of files, "mark" each file by moving the cursor bar to it
and then pressing space bar.  When you press return, the files will be 
displayed in sequence.


TIMEOUT
-------

Each picture is displayed for a default time of 20 seconds.  Pressing a
return, however, will force the display to end and move on to the next
picture or back to the main menu.  The timeout value can be changed from
the "Options" menu or from the command line using the -t option.

If the "@" key is pressed after drawing the picture on screen, the timeout
is disabled.  In this case the picture will continue to be displayed
until another key is pressed.

If you use a screen grabber program to capture the displayed image and
you are not successful, use of the "@" key may help.

ABORT PICTURE
-------------

Pressing the ESC key while a picture is being drawn aborts that picture.
You can abort a list of pictures by pressing the ESC key twice.


REPEATING LISTS ( CONTINUOUS SLIDE SHOW MODE )
----------------------------------------------

When you enter a list of pictures in the main menu, if you end the list with
the forward slash ("/") instead of a <return>, the list will be continuously
repeated.  To abort this repeated display, press the ESC key twice in quick
succession.


SELECTING THE DISPLAY DIRECTORY
-------------------------------

From the main menu, press "d" to change the display directory (the directory
containing the picture files).  The files in this directory will be listed
when you return to the main menu.

If only a directory name is specified, all files that have an extension
of GIF or TIF (depending on file type selected) in that directory will be
displayed.  If you want to list other files also, enter an appropriate string
to be matched.

Examples:
          To list                                       Enter

all files in the current directory                      *.*<return>

all files with extension GIF in the current directory   *.gif<return>

all files with extension GIF or TIF (depending on       pics<return>
  file type) in the subdirectory "pics" of the
  current directory

all files with extension GIF or TIF (depending on       \picdir<return>
  file type) in the subdirectory "picdir" of the
  root directory

all files in the subdirectory "picdir" of the root      \picdir\*.*<return>
        directory.

You can also set the display directory from the command line using the -d
option.


SCALING OF PICTURES
-------------------

There are many scaling options. The default scaling is 1:1 i.e. no scaling.
You can choose to set the scales manually.  You can also have the program
perform auto-scaling.  The "auto-scale full screen" option makes the picture
"fit" the screen horizontally and vertically.  You can also auto-scale
with the constraint that the horizontal and vertical scales should be equal.

Use the "Scale" menu to change the scaling options.  You can also select
the scaling method from the command line using the -s option.


ZOOMING
-------

Once a picture is displayed on the screen, you can zoom in using the "+" key
and zoom out using the "-" key.


PANNING
-------

Once a picture is displayed on the screen, you can move the viewing window
around the picture by the use of the cursor keypad:

                           (Number lock should be disabled)

        down arrow  (or "d")       move down  half screen (1/8 screen for TIFF)
        right arrow (or "r")       move right half screen (1/8 screen for TIFF)
        up   arrow  (or "u")       move up    half screen (1/8 screen for TIFF)
        left arrow  (or "l")       move left  half screen (1/8 screen for TIFF)
        "End"       (or "1")       move to bottom left corner
        "PgDn"      (or "3")       move to bottom right corner
        "PgUp"      (or "9")       move to top right corner
        "Home"      (or "7")       move to top left corner

                           (Scroll lock should be disabled)

  shift-down  arrow (or "2")       move down  full screen
  shift-right arrow (or "6")       move right full screen
  shift-up    arrow (or "8")       move up    full screen
  shift-left  arrow (or "4")       move left  full screen
 


BRIGHTNESS
----------

Once a picture is displayed on the screen, you can increase the brightness
by pressing the "b" key and reduce the brightness by pressing the "B" key.


INVERTING THE IMAGE
-------------------

Once a picture is displayed on the screen, you can invert the image by
pressing the "i" key.  This is useful for black and white or grayscale
images.  Image inversion can also be set using the "-ii" commandline option.
Available in VUIMAGE PLUS(tm) only.


PRINTING
--------

Once an image is displayed on the screen, you can print that image by
pressing the "p" key.  Before printing, make sure that you have set up
the printer port and selected the correct printer by going into the
Options menu.

The entire image is printed.  Any brightness adjustments you have made
will affect the print output.  The output to 2-color printers (most printers)
can be dithered so as to obtain a better print-out.  You can choose between
no dithering, 2x2, 3x3, 4x4, 5x5 or 6x6 dithering by going
into the Options menu.  You may wish to experiment with the dithering
options to obtain the best print image.  For fairly high resolution
printers (200x200 dpi or greater), 6x6 or 5x5 is suggested for paint-type
images and scanned images with many shades.  For line art/scanned documents,
eiher no dithering or 2x2 is suggested.

From the Options menu, you can also set the desired size of the print-out.

You can specify "lpt1:","lpt2:","lpt3:","com1:","com2:" or a filename
for the printer port.


TEXT SCREEN COLORS
------------------

You can change the text screen colors used by going into the "Options"
menu and answering "y" when asked "Change Screen Colors ?".
Use the left/right arrow keys to change the foreground color and the
up/down arrow keys to change the background color. (Alternately, you can use
the "f" and "F" keys for foreground and the "b" and "B" keys for background).
Select the colors you like.  Note the numbers shown that corresponds to each
of the colors that you selected - these numbers can be used with the "-cd",
"-co" and the "-cg" command line options to automatically select your
favourite colors when the program is started.

^L


COMMAND LINE OPTIONS
--------------------

Many of the options may be set from the command line instead going through
a menu.  For example, to start the program with the mode option set to 9
and the scaling option set to 3, enter:

        vuimg  -m9 -s3

The available command line options are listed below:

  -Tfiletype    where filetype is "gif" or "tiff".

                Example:   -Ttiff       (display tiff files)

  -vdrivername  where drivername is the name of the extended mode driver
                appropriate for your board.  If the program files are not in
                the current directory, then the drive and subdirectory must
                also be specified.

                Example (load ATI VGAWonder driver):

                           -vdativ            (program files in current dir)
                           -vc:\vuimage\dativ (program files in c:\vuimage)

  -mmodeindex   where modeindex is the number you would enter if you were
                to go into the "Mode" menu and make a selection.

                Example:   -m9          (set 320x200x256 mode)

  -sscaleindex  where scaleindex is the number you would enter if you were
                to go into the Scale menu (part of the "Options" menu) and
                make a selection.

                Example:   -s3          (set autoscale full screen)

  -sxhscale     where hscale is the horizontal scale value (1% to 999%).
                This option should be used only if manual scaling is selected.

                Example:   -sx200       (set horizontal scale to 200%)

  -syvscale     where vscale is the vertical scale value (1% to 999%).
                This option should be used only if manual scaling is selected.

                Example:   -sy50        (set vertical scale to 50%)

  -ddirectory   where directory is a directory name (or file matching string)
                that you would enter when you go into the Dir menu.

  -ttimeout     where timeout is the number of seconds to display each picture.

                Example:   -t40         (set timeout to 40 seconds)

  -by           enables the beep at the end of a picture
  -bn           disables the beep at the end of the picture

                Example:   -bn          (disable beep)

  -Bbrightness  where brightness is the brightness value (100 is nominal)

                Example:   -B120                (set brightness to 120%)

  -cddircolor   where dircolor is the color number for the filenames 
  -cofncolor          fncolor  is the color number for the file numbers 
  -cmmodcolor         modcolor is the color number for the display mode
  -cggencolor         gencolor is the color number for general text
                To find the color numbers for the colors of your choice, first
                go into the "Options" menu and select the colors that you like.
                The corresponding color numbers are also displayed.

                Example:   -cd78    (filenames in yellow on a red background)
                           -co10    (filenumbers in bright green on black)
                           -cm4     (video mode in red on black)
                           -cg14    (general text in yellow on black)

(*** The following options are available only in VUIMAGE PLUS(tm) ***)

  -Tpcx         select filetype to be PCX.

  -pprinternum  where printernum is the number you would enter if you were
                to go into the Options menu and choose a printer.

                Example:   -p1      (select EPSON FX80/100 printer)

  -pddevicename where devicename is the printer device (lpt1:, lpt2:, lpt3:,
                com1:, com2: or filename).

                Example:   -pdlpt1:      (send output to lpt1:)
                           -pdvuimg.prn  (send output to file vuimg.prn)

  -pxwidth      where width is the width of the printed image in 1/100 inches

                Example:   -px904   (print image width=9.04 inches)

  -pyheight     where height is the height of the printed image in 1/100 inches

                Example:   -py1200  (print image height=12.00 inches)

  -fddithertype where dithertype is the number you would enter if you were to
                go into the Options menu and choose the display dither type.

                Example:   -fd3     (dither 2-color displays using 3x3 matrix)

  -fpdithertype where dithertype is the number you would enter if you were to
                go into the Options menu and choose the printer dither type.

                Example:   -fp4     (dither 2-color printers using 4x4 matrix)

  -ii           invert the image (really useful for only black and white or
                grayscale images)

  -C            disables the menus.  If you use this option, you must also
                specify a filename to be displayed including the pathname.
                This should be the last option entered on the command line.
                The filename may contain wild card characters ? and * and 
                should be the last parameter.  Any directory name entered
                with the -d option will be ignored.

                Examples:   -C somefile.gif
                            -C \pics\*.gif

  -L            leave the last image on the screen when the program ends.
                Valid only when the -C option is used.  Useful when called
                as a sub-program by another program.




PRE-PROGRAMMED MODE
-------------------

You can run the program in a PRE-PROGRAMMED mode where it will go through a
display session with no keyboard input.  To do this, go through a manual
session and write down all keystrokes till you quit back to DOS (this is
important).  If you use the ESC key to abort a picture or list,
the return key to move on to the next picture, or the cursor keys to do
panning, do NOT include these keystrokes.  Then create a file containing
these keystrokes (we will use the filename "vuimg.inp" in the following
example).  To do this, type: 

        copy con: vuimg.inp <return>

Enter the keystrokes you wrote down and then type a <CTRL>Z to create the
file called vuimg.inp.  A text editor (ex. edlin) may also be used to
create such a file (start a new line for every "return" key).  This file
may then be used to run the program in the PRE-PROGRAMMED mode by typing

       vuimg  < vuimg.inp


DOS EXIT CODES (ERRORLEVEL)
---------------------------

The return codes generated by the program that may be tested in a batch
file are:

0 - no error
1 - command line option error
2 - the -C option was used without specifying a file
3 - file not found or invalid filename




DISPLAY BOARDS and EXTENDED VIDEO MODES/DRIVERS
-----------------------------------------------

If the program does not work with your display board, try loading any software
drivers (BIOS emulators, int 10h drivers, RAM BIOS drivers) that come with it.
Refer to the instructions that come with your graphics board.

Some video display boards support even higher resolutions than standard VGA,
for example, 640x480 in 256 colors and 800x600 in 16 colors.  These are
sometimes referred to as SuperVGA modes.  Additional drivers that support
these "extended modes" are included with the program.  These drivers have
filenames with the extension ".VDR" and are listed later in this section.
They can be loaded using the "-v" command line option (see section on command
line options).

Typically, extended modes are dependent on your type of graphics card.
Refer to your graphics card manual to see what extended modes are supported.
Only VGA type extended modes with either 16 or 256 colors out of a palette
of 262,144 colors are supported by the extended mode drivers.  Check the
list of extended mode drivers at the end of this section to see which driver
is suitable for use with your card.

However, there is a SuperVGA standard known as the VESA SuperVGA standard.
Many or most of the SuperVGA cards now support this standard.  If your
card supports this standard, then you can take advantage of the VESA driver
(DVESA.VDR) that comes with the program.  Even if there is a separate driver
that supports your card, WE RECOMMEND that you use the VESA driver instead
if your card supports the VESA standard.  In order for your card to support
the VESA standard, you may need to load a device driver or TSR that comes
with your card (through the CONFIG.SYS or AUTOEXEC.BAT file).  Refer to the
documentation that comes with your card (in printed form or disk file form).

If you are not using any extended drivers, you may still be able to display
in an extended mode if your BIOS for the board will support this.  Not all
boards come with BIOS that support the extended modes completely.  Installing
any RAM BIOS drivers that come with your board may help.  Display done
through the BIOS is usually extremely slow.

To use the BIOS supported extended modes, you need to know the mode number,
the no. of columns, the no. of rows, and the no. of colors for the mode.
Refer to the manual for your graphics card.

If you have a plain VGA card with no SuperVGA modes, you may still be able
to get higher resolutions (320x400x256, 360x480x256, 800x600x16) using the
DNVGA driver.


Extended Mode Drivers (SuperVGA drivers) included:

(additional untested drivers may be available from Offe Enterprises)

    If your display board is:                   Try driver
    ------------------------                    ----------
    Any board that suports the VESA standard    DVESA
    and has VESA BIOS installed
	
        ATI VGAWONDER                           DATIV
        Paradise VGA cards                      DPVGA
        AST VGA cards                           DPVGA
        AT&T VDC600                             DPVGA
        Orchid ProDesigner                      DORCH
        STB VGA cards                           DORCH
        Genoa VGA cards                         DORCH
        Sigma VGA cards                         DORCH
        Standard IBM VGA & register compatibles
                with multisync monitors         DNVGA
        Everex EV673                            DE673
        Everex EV678                            DE678
        Video-7 Fastwrite                       DV7FW
        Video-7 1024i                           DV71024
        Video-7 VRAM                            DV7VRAM
        Trident Video cards                     DTRID
	Cardinal 600 VGA 			DCHT
	Other Chips&Technolgies chipset		DCHT


    If your board is not listed, you can try one of the supplied drivers
    to see if any of the extended modes will work. Other drivers may become
    available from Offe in the future.  Not all modes available are supported
    on the listed boards.


Extended Modes Supported by the Drivers (mode numbers in decimal and hex)

DVESA
        Mode 256  (100h)         640 x  400 x 256 colors
        Mode 257  (101h)         640 x  480 x 256 colors
        Mode 258  (102h)         800 x  600 x  16 colors
        Mode 259  (103h)         800 x  600 x 256 colors
        Mode 260  (104h)        1024 x  768 x  16 colors
        Mode 261  (105h)        1024 x  768 x 256 colors
        Mode 262  (106h)        1280 x 1024 x  16 colors
        Mode 263  (107h)        1280 x 1024 x 256 colors

DATIV
        Mode  84 (54h)           800 x 600 x  16 colors 
        Mode  97 (61h)           640 x 400 x 256 colors
        Mode  98 (62h)           640 x 480 x 256 colors
        Mode  99 (63h)           800 x 600 x 256 colors
        Mode 101 (65h)          1024 x 768 x  16 colors

DCHT
        Mode 112 (70h)           800 x 600 x  16 colors 
        Mode 114 (72h)          1024 x 768 x  16 colors
        Mode 120 (78h)           640 x 400 x 256 colors
        Mode 121 (79h)           640 x 480 x 256 colors
        Mode 128 (7bh)           800 x 600 x 256 colors

DE673
        Submode 19 (13h)        640 x 350 x 256 colors
        Submode 20 (14h)        640 x 400 x 256 colors
        Submode 21 (15h)        512 x 480 x 256 colors

DE678
        Submode 49 (31h)        640 x 400 x 256 colors
        Submode 50 (32h)        512 x 480 x 256 colors
        Submode 77 (4dh)        640 x 480 x 256 colors
        Submode 78 (4eh)        800 x 600 x 256 colors

DNVGA
        -------                  320 x 400 x 256 colors
        -------                  360 x 480 x 256 colors
        -------                  800 x 600 x  16 colors

DORCH
        Mode  41 (29h)           800 x 600 x  16 colors
        Mode  45 (2Dh)           640 x 350 x 256 colors
        Mode  46 (2Eh)           640 x 480 x 256 colors
        Mode  47 (2Fh)           720 x 512 x 256 colors
        Mode  48 (30h)           800 x 600 x 256 colors
        Mode  55 (37h)          1024 x 768 x  16 colors

DPVGA
        Mode  88 (58h)           800 x 600 x  16 colors
        Mode  94 (5Eh)           640 x 400 x 256 colors
        Mode  95 (5Fh)           640 x 480 x 256 colors

DV7FW
        Mode  98 (62h)           800 x 600 x  16 colors
        Mode 102 (66h)           640 x 400 x 256 colors
        Mode 103 (67h)           640 x 480 x 256 colors

DTRID
        Mode  91 (5Bh)           800 x 600 x  16 colors
        Mode  92 (5Ch)           640 x 400 x 256 colors
        Mode  93 (5Dh)           640 x 480 x 256 colors
        Mode  95 (5Fh)          1024 x 768 x  16 colors

DV71024
        Mode  98 (62h)           800 x 600 x  16 colors
        Mode 101 (65h)          1024 x 768 x  16 colors
        Mode 102 (66h)           640 x 400 x 256 colors
        Mode 103 (67h)           640 x 480 x 256 colors

DV7VRAM
        Mode  98 (62h)           800 x 600 x  16 colors
        Mode 101 (65h)          1024 x 768 x  16 colors
        Mode 102 (66h)           640 x 400 x 256 colors
        Mode 103 (67h)           640 x 480 x 256 colors
        Mode 105 (69h)           800 x 600 x 256 colors

REVISION HISTORY
----------------

Additions/Changes from Version 2.70 to this version:
  - added the "@" key to freeze display (see section on Timeout)
  - added the "Insert" key to display image info quickly
  - Added 5x5, 6x6 dithering, better dithering
  - VUIMAGE PLUS(tm) now supports PCX also
  - GIF89a - supports "restore-to-previous" feature
  - improved auto-select video mode, scaling in multi-image pictures
  - max. timeout increased to 43199 seconds
  - other minor enhancements

Additions/Changes from the previous version (V2.62):
  - Support for the GIF89a standard - ASCII plain text extensions,
    graphics control extensions (delay, transparency, restore to background),
    comment and application extensions
  - better print quality
  - Ability to invert the image (VUIMAGE PLUS(tm))

Additions/Changes from the previous version (V2.60):
  - SuperVGA support added for any SuperVGA card that supports the VESA
    standard.  Most SuperVGA cards now come with VESA BIOS support in the
    form of a device driver (installed through CONFIG.SYS) or TSR (installed
    through AUTOEXEC.BAT).  The VESA driver for VUIMAGE(tm)/VUIMAGE PLUS(tm)
    supports the following VESA standard modes (if available in card):
       800x600x16, 1024x768x26, 1280x1024x16
       640x400x256, 640x480x256, 800x600x256, 1024x768x256, 1280x1024x256
    Use of the VESA extended video driver (dvesa) is strongly recommended.
  - added Chips & Technologies extended video driver
  - added HP Thinkjet printer
  - from main menu and cursorbar menu, can use ctrl-home/ctrl-end to get to
    top of directory or end of directory
  - from main menu, any arrow key takes you to cursorbar selection
  - four digit filenumber display allows upto 9999 files.

Additions/Changes from the previous version (V2.53):
  - Now supports printing of images.  To choose printer, use the Options menu.
       Print entire image, set your own print size.
  - Now can dither images in 2-color display modes - none, 2x2, 3x3, 4x4,
       5x5 or 6x6 dithering
  - Dither print output - none, 2x2, 3x3, 4x4, 5x5 or 6x6 dithering
  - better Options menu
  - reads more TIFF files
  - memory requirement has increased to 150K

Additions/Changes from the previous version (V2.42):
  - drivers for Trident, Video-7 1024i and Video-7 VRAM cards added
  - select files using cursors, mark/unmark for list of files
  - read more TIFF files - Vuimage Plus(tm) now supports PackBits
    compressed bilevel TIFF files

```
{% endraw %}

## ORDERFRM.DOC

{% raw %}
```
To register your copy of VUIMAGE(tm) and obtain VUIMAGE PLUS(tm), please
fill out the following form and send it along with a check or money order.

Send To:    Offe Enterprises (Attn: Orders)
            1163 E. Ogden Avenue, Suite #705-131
            Naperville, IL 60563, USA                  Tel:  (708)-357-6679
---------------------------------------------------------------------------       
Name (to register to): ________________________________________________

   Address to ship to: ________________________________________________

                       ________________________________________________

                       ________________________________________________

                       ________________________________________________

Telephone: ___________________________________ Date: __________________


---------------------------------------------------------------------------
QUANTITY         DESCRIPTION                      UNIT PRICE       TOTAL
---------------------------------------------------------------------------

________         VUIMAGE PLUS(tm)                 US $ 30.00       ________

________         __________________________       __________       ________

________         __________________________       __________       ________

                                            Additional Taxes       ________

                                         Additional Shipping       ________

                                                       Total       ________

---------------------------------------------------------------------------
* VUIMAGE PLUS(tm) price includes taxes and shipping within USA.
  Add US $5.00 for shipping to outside USA.

Check/Money Order enclosed for US $ ___________

---------------------------------------------------------------------------

VUIMAGE(tm) Vers. # : ______ Place obtained from: ______________________

Main Interest:  GIF ___  TIFF ___  PCX ___  View ___  Print ___

Type of Computer _________________________________________

Type of Operating System _________________________________

Type of video card/monitor _______________________________

Additional Comments: ___________________________________________________

________________________________________________________________________

________________________________________________________________________
```
{% endraw %}

## PROGRAMS.DOC

{% raw %}
```
------------------------------------------------------------------------------

      INFORMATION ON OTHER PROGRAMS AVAILABLE FROM OFFE ENTERPRISES

                Offe Enterprises
                1163 E. Ogden Avenue, #705-131
                Naperville IL 60563 USA
                Tel: (708)-357-6679

------------------------------------------------------------------------------

                             TBG(tm)

        Tiff Bilevel/Grayscale to TIFF/GIF Bilevel/Grayscale Converter
          Copyright (C) 1990 Offe Enterprises. All rights reserved.

Converts a bilevel (black and white) or grayscale TIFF image to a
same or lower resolution bilevel/grayscale image in TIFF or GIF format.

EXAMPLE USES

  1.  Convert a scanned image in TIFF format (these are usually
      black and white images that have a large number of 
      horizontal and vertical pixels) to a smaller image
      with grayscales so that the image can be viewed more
      completely on a VGA/EGA screen.  The grayscales compensate
      for the loss of resolution caused when the image is
      reduced to a smaller size.

  2.  Convert a bilevel/grayscale TIFF file to a GIF file.

  3.  Reduce the filesize of TIFF files by scaling the image.

The program can be executed non-interactively (for example, from a batch file.
A demo version this program is available on many BBSes.


SYNTAX: tbg [options] inputfile outputfile

OPTIONS:

   -otiff  output file in TIFF format.

   -ogif   output file in  GIF format.

   -xn  where n=1,2,3,etc.  Reduce the width by this factor.
        Example: -x2 reduces the width to half its value.

   -yn  where n=1,2,3,etc.  Reduce the height by this factor.
        Example: -y4 reduces the height to a quarter of its value.

   -bn  where n=1 to 8.  Set the number of bits per pixel in the output to n.
        If a lower number is sufficient, the lower number is used (also see the
        -f option).  The maximum possible gray levels in the output is 2 to the
        power of this number.  Example: -b4 sets the # bits/pixel to 4.

   -f   force the number of bits/pixel to the value specified by the -b option

   -q   quiet.  Do not display input/output image information



EXAMPLE:       tbg -x4 -y4 -b2 input.tif output.tif
               tbg -ogif input.tif output.gif


------------------------------------------------------------------------------

                        SCRtoPS(tm) - Screen-to-PostScript

       PRINT PC SCREENS TO POSTSCRIPT PRINTER OR CAPTURE TO ENCAPSULATED
               POSTSCRIPT FILE FOR INCORPORATION INTO DOCUMENTS

              for IBM PC + Adobe PostScript Printers and Compatibles


Performs screen captures directly into PostScript by pressing Shift-PrintScreen.
Use to include screen snapshots in your documents (including line/box/upper
ASCII characters) or to print from software that does not support postscript.

Supports Text and graphics modes including IBM character graphics on CGA, EGA,
VGA and some SuperVGA.  Text modes use the Courier font for standard ASCII
characters.

Send postscript output to LPT1/LPT2/LPT3 ports, COM1/COM2 ports or disk files.
Send to postscript printer directly or import file into Desk-Top Publishing
packages like Ventura Publisher/ WordPerfect for use with PostScript printers.

Supports color to greyscale conversion on EGA/ VGA/SuperVGA and xon/xoff on
com ports

Uses minimal memory - less than 10K when resident - can be removed from memory.

Graphics cursor indicates progress, screen capture can be aborted

User selectable landscape/portrait mode, x, y sizes, and <ctrl>-d at end-of-job

Built-in help facility


(A new program is also available that will post-process TEXT screens
 captured using SCRtoPS(tm) so that foreground/background color information
 can be translated to different foreground thicknesses and background gray
 shades on the printout)
   
------------------------------------------------------------------------------
Prices subject to change without notice.  SCRtoPS is a trademark of
Offe Enterprises.  PostScript is a registered trademark of Adobe Systems, Inc.
IBM is a trademark of International Business Machines Corporation.  
WordPerfect is a registered trademark of WordPerfect Corporation.

```
{% endraw %}

## VUIMG.DOC

{% raw %}
```
                  VUIMAGE(tm) (Version 2.82) (Shareware)
                GIF*/TIFF Format Picture Viewer/Printer
        Copyright (C) 1990 Offe Enterprises. All rights reserved.
 
                                USERS MANUAL
 
 Offe Enterprises, 1163 E. Ogden Ave.  #705-131, Naperville, IL 60563  USA
                                708-357-6679

   ------------------------------------------------------------------------ 
  | A list of changes in this version is provided at the end of this file. |
   ------------------------------------------------------------------------ 

*  GIF and "Graphics Interchange Format" are trademarks (tm) of Compuserve,
   Inc., an H&R block company.  PostScript is a trademark of Adobe Systems, Inc.
   VUIMAGE, VUIMAGE PLUS, TBG and SCRtoPS are trademarks of Offe Enterprises.


==============================================================================

FEATURES
--------

Offe is proud to bring you our GIF/TIFF display/print software for the 
IBM PC family.  Its main features are:

    - super fast display of GIF files and bilevel/grayscale TIFF files
    - print GIF and TIFF files (six dithering options)
    - handles large images while needing only 150K of free memory*
    - Support for the GIF89a standard - plain text, graphics control, comment
      extensions, restore to background, restore to previous etc.
    - print entire image, set your own print size
    - supports a variety of display types - CGA/Hercules/6300/DEB/EGA/MCGA/
      VGA/SuperVGA/VESA SuperVGA
    - 320x400x256, 360x480x256 and 800x600x16 driver for standard IBM VGA
    - VESA SuperVGA driver for all SuperVGA cards that have VESA BIOS support.
      Supports the following VESA standard modes (if available in card):
       800x600x16, 1024x768x26, 1280x1024x16
       640x400x256, 640x480x256, 800x600x256, 1024x768x256, 1280x1024x256
    - excellent color rendition in all video modes
    - six dithering options for two-color video modes
    - handles large images with low memory requirement
    - automatic/manual video mode selection capability
    - auto/manual scaling - automatically scale to full screen or
      manually scale from 1% to 999%
    - zoom in / zoom out using the "+" and "-" keys
    - panning - cursor keys allow moving screen window over different sections
      of picture 
    - adjust brightness while picture is on screen
    - supports other boards/future boards through BIOS mode
    - user-friendly, multiple interfaces
        - menu-selectable options
        - command-line selectable options (useful in batch files and when
          called as a sub-program by other programs)
        - pre-programmed keystroke mode (std. input re-direction)
	- select files using cursor or by file numbers
    - specify a list of files to be displayed for slide shows
    - continuously repeat list of files (for demos etc.)
    - abort single picture or list of pictures in the middle
    - handles corrupt files well
    - returns DOS errorlevel value (useful in batch files and when
      called as a sub-program by other programs)
    - user selectable menu screen colors

* GIF89a images that use "restore to previous" function need may need more
  memory for complete restoral to previous.


==============================================================================

FOR REGISTERED USERS
--------------------

Registered users get VUIMAGE PLUS(tm) Version 2.82, our non-shareware version
of the program with the following added features:

- menus may be disabled and file (or files) to be shown may be specified from
  the command line (in this mode, the image may be left on the screen when
  the program ends)

- print options (printer select, set print size, printer port etc.) can
  be specifed from the command line (you can create a batch file easily to
  "configure" VUIMAGE PLUS(tm) for your print options).

- invert images by pressing the "i" key after the picture has been displayed
  on the screen or by the "-ii" commandline option.

- PCX files can also be viewed

- compressed bilevel TIFF files (compression type - CCITT Group 3-1D or
  compression type PackBits) can be viewed.  Many scanners come with
  software that can produce such files.

==============================================================================

REGISTRATION
------------

This version of the program is released as shareware. It is not free and is
not in the public domain.  Private, non-commercial users are requested to
register and support its continued development.  Registered users get
VUIMAGE PLUS(tm) Ver 2.82.  To register, please use the order form supplied
with this package, or send your name, address and phone number(s) with the
registration fee of US $30.00** to:

Offe Enterprises, 1163 E. Ogden Ave.  #705-131, Naperville, IL 60563  USA

(Outside US, please add $5.00**).  Telephone: (708)-357-6679 (USA)

Any use of VUIMAGE(tm) in a commercial environment is illegal and is strictly
prohibited.  Commercial users should purchase VUIMAGE PLUS(tm), the
non-shareware version.  Volume discounts and site licenses are available for
VUIMAGE PLUS(tm).  Contact Offe Enterprises for customized versions.


DISTRIBUTION
------------

You may make copies of the program files for VUIMAGE(tm) and the documentation
VUIMG.DOC (this file) together and distribute them to others, upload to
bulletin boards etc. for non-commercial purposes. The program files should
not be distributed without the documentation file VUIMG.DOC.  None of the
files should be modified in any way.  



 OTHER PROGRAMS AVAILABLE FROM OFFE ENTERPRISES:
-----------------------------------------------

   TBG(tm)     - TIFF black&white/grayscale image to GIF/TIFF black&white/
                 grayscale converter (can reduce large b&w images to smaller
                 grayscale ones for easier viewing, convert TIFF to GIF etc.).
                 Commandline options for non-interactive conversion.

   SCRtoPS(tm) - Dump text and graphics screens (CGA/EGA/VGA) to PostScript*
                 printer or capture to Encapsulated PostScript file (including
                 line/box characters).  Requires only about 10K of resident
                 memory.

   See file PROGRAMS.DOC for more information on these programs.
==============================================================================


   *******************************  NOTICE  ********************************
   *                                                                       *
   *    This program, and all supporting programs and documentation are    *
   *    provided "as is" without warranty of any kind, either expressed    *
   *    or implied, including but not limited to the implied warranties    *
   *    of merchantability and fitness for a particular purpose.  In no    *
   *    event will  Offe Enterprises  be liable  to you for any damages    *
   *    arising out of the use or  inability to use this program and/or    *
   *    all supporting programs and documentation.                         *
   *************************************************************************

** All prices and other information are subject to change without notice.



INSTALLATION AND USAGE
----------------------

Note: Requires MS-DOS Version 2.0 or later and at least 150K of free memory.

1.  FLOPPY DISK  Copy all the files from the program disk to another floppy
                 disk.  Use this as your working disk - place this disk into
                 drive A:, type "A:" and press return.  Go to step 2.

    HARD DISK    Make a new subdirectory.  For example, if you are using
                 drive C: and the subdirectory name you want is \VUIMAGE, enter
                          c:
                          md \vuimage
                 Now make this subdirectory your current directory.  In our
                 example, enter
                          cd  \vuimage
                 Copy all the files from the program disk to this subdirectory.
                 Go to step 2.

2.  Now all the files are in the current drive/directory.  To start the program,
    type "vuimg"  at the DOS prompt and press return.

    You will be placed in the main menu.  Also shown will be a list of files
    in the current directory that have the extension "GIF".  The current display
    mode will be displayed at the bottom left of the screen.  The main menu
    options are displayed at the bottom right of the screen.

    Press "Q" to quit back to DOS.  Go to step 3.

3.  You can execute the program any time by changing to the subdirectory that
    has the program files and typing "vuimg"  as in step 2.  However, it is
    much more convenient to create a "batch file" that will execute the
    program from any directory.  WE RECOMMEND THAT YOU DO THIS so that you
    can "configure" the program this way to suit your own needs.  You can
    create a batch file by typing

          copy con: v.bat     <return>

    where "v.bat" is the name of the batch file.  Now enter the program
    name along with the drive and directory name.  For example,

          c:\vuimage\vuimg    <return>

    Then press <ctrl>-Z followed by a <return> to finish creating the batch
    file (you can also use an editor to create this file).  Now you can start
    the program by typing "v" and return.  The batch file need not be kept
    in the same subdirectory as the program files.  However, the sub-directory
    that it is kept in must be part of your "PATH".  The PATH is a list of
    directories that DOS will search when you type in a command.  Refer to
    your DOS manual for information on PATH and how to add a sub-directory to
    your PATH.

    After you become familiar with the command line options of the program (see
    later section on command line options), you can re-create the batch file 
    and also specify the command line options that you normally prefer to use.
    This way you can "configure" the program to suit your needs.


MAIN MENU
---------

From the main menu, at the "File(s)" prompt, you can enter:

        - "t" to select the file type - GIF or TIFF

        - "m" to change the display mode

        - "s" to change the scaling options

        - "o" to change other user selectable options

        - "d" to select a different directory/different group of files

        - "q" or ESC to quit and go back to DOS.

        - a list of picture files to be displayed.  For example, enter

                3,1,5-7,17-14  <return>

           to display files 3,1,5,6,7,17,16,15,14 from the list (in that order).

        - One of the arrow keys to select files using the cursor keys.

          In this mode, to display a single file, move the cursor bar to the
          file and press enter.  To display a list of files, move to each file
          and press the space bar to select (mark) the file.  Press enter to
          display the marked files or "/" to continuously repeat the list of
          files.  If there are too many files to fit on one screen, use the
          PgUp/PgDn keys to see other files.

          After moving the cursor to a specific file, you can press the
          "Insert" key to obtain quick information about the file.

	  To get back to the main menu, press the escape key.



SELECTING THE FILE TYPE
-----------------------

The default file type is "GIF".  To select between TIFF and GIF,
press "t" at the main menu prompt.  You can also select the file type from
the command line using the "-T" option (for example, -Ttiff will select TIFF -
see section on command line options).


SETTING THE DISPLAY MODE
------------------------

The program selects a video display mode appropriate for the video adapter
and the picture being displayed automatically.  The mode is chosen from the
CGA/Hercules/EGA/VGA modes present and any modes supported by any extended
mode driver that has been loaded (extended mode drivers are selected by the
command line option "-v" - see section "Display Boards and Extended
Modes/Drivers" for more details on extended modes).  SuperVGA modes are
extended modes.

If the user desires to select a particular video mode to display the picture
instead of the automatically selected mode, this can be done by pressing
"m" at the main menu prompt, going into the display mode menu and changing
the display mode.  An appropriate mode supported by your video display
board may be specified.  If any extended video mode drivers have been
loaded, the extended modes supported by these drivers are also listed.

Instead of using the menu, you can also specify the mode to be used from the
command line by using the "-m" option (for example, "-m7" will use the
EGA 640x350 16-color mode - see section on command line options).

There is also a "BIOS" mode that you can use for extended modes that are
unsupported.  Your display board will need to provide complete BIOS support.
Usually the BIOS mode is extremely slow. 

If you are using a video mode that has only 2 colors, you can use dithering
to improve the displayed picture.  Use the Options menu to select a type
of dithering to be used for 2-color modes.  A suggested dither option for
2-color displays is 3 (3x3).


DISPLAYING PICTURE FILES
------------------------

From the main menu, enter the number of the file you wish to display and
press return.  If you wish to display a sequence of files, you can enter
a set of numbers, separated by commas:

        Example:  3,5 <return> will display file 3 followed by file 5. 

You can enter a starting number and an ending number to display a list of
files:

        Example:  2,5-7 <return> will display files 2, 5, 6 and 7.
        Example:  2,7-5 <return> will display files 2, 7, 6 and 5.

After you enter a list of files (or one file) and press return, the picture(s)
are displayed in sequence.

Alternately, you can press the "up arrow" to select files using the cursor.
To see one file, move the cursor bar to the file and press return.  To
select a list of files, "mark" each file by moving the cursor bar to it
and then pressing space bar.  When you press return, the files will be 
displayed in sequence.


TIMEOUT
-------

Each picture is displayed for a default time of 20 seconds.  Pressing a
return, however, will force the display to end and move on to the next
picture or back to the main menu.  The timeout value can be changed from
the "Options" menu or from the command line using the -t option.

If the "@" key is pressed after drawing the picture on screen, the timeout
is disabled.  In this case the picture will continue to be displayed
until another key is pressed.

If you use a screen grabber program to capture the displayed image and
you are not successful, use of the "@" key may help.

ABORT PICTURE
-------------

Pressing the ESC key while a picture is being drawn aborts that picture.
You can abort a list of pictures by pressing the ESC key twice.


REPEATING LISTS ( CONTINUOUS SLIDE SHOW MODE )
----------------------------------------------

When you enter a list of pictures in the main menu, if you end the list with
the forward slash ("/") instead of a <return>, the list will be continuously
repeated.  To abort this repeated display, press the ESC key twice in quick
succession.


SELECTING THE DISPLAY DIRECTORY
-------------------------------

From the main menu, press "d" to change the display directory (the directory
containing the picture files).  The files in this directory will be listed
when you return to the main menu.

If only a directory name is specified, all files that have an extension
of GIF or TIF (depending on file type selected) in that directory will be
displayed.  If you want to list other files also, enter an appropriate string
to be matched.

Examples:
          To list                                       Enter

all files in the current directory                      *.*<return>

all files with extension GIF in the current directory   *.gif<return>

all files with extension GIF or TIF (depending on       pics<return>
  file type) in the subdirectory "pics" of the
  current directory

all files with extension GIF or TIF (depending on       \picdir<return>
  file type) in the subdirectory "picdir" of the
  root directory

all files in the subdirectory "picdir" of the root      \picdir\*.*<return>
        directory.

You can also set the display directory from the command line using the -d
option.


SCALING OF PICTURES
-------------------

There are many scaling options. The default scaling is 1:1 i.e. no scaling.
You can choose to set the scales manually.  You can also have the program
perform auto-scaling.  The "auto-scale full screen" option makes the picture
"fit" the screen horizontally and vertically.  You can also auto-scale
with the constraint that the horizontal and vertical scales should be equal.

Use the "Scale" menu to change the scaling options.  You can also select
the scaling method from the command line using the -s option.


ZOOMING
-------

Once a picture is displayed on the screen, you can zoom in using the "+" key
and zoom out using the "-" key.


PANNING
-------

Once a picture is displayed on the screen, you can move the viewing window
around the picture by the use of the cursor keypad:

                           (Number lock should be disabled)

        down arrow  (or "d")       move down  half screen (1/8 screen for TIFF)
        right arrow (or "r")       move right half screen (1/8 screen for TIFF)
        up   arrow  (or "u")       move up    half screen (1/8 screen for TIFF)
        left arrow  (or "l")       move left  half screen (1/8 screen for TIFF)
        "End"       (or "1")       move to bottom left corner
        "PgDn"      (or "3")       move to bottom right corner
        "PgUp"      (or "9")       move to top right corner
        "Home"      (or "7")       move to top left corner

                           (Scroll lock should be disabled)

  shift-down  arrow (or "2")       move down  full screen
  shift-right arrow (or "6")       move right full screen
  shift-up    arrow (or "8")       move up    full screen
  shift-left  arrow (or "4")       move left  full screen
 


BRIGHTNESS
----------

Once a picture is displayed on the screen, you can increase the brightness
by pressing the "b" key and reduce the brightness by pressing the "B" key.


INVERTING THE IMAGE
-------------------

Once a picture is displayed on the screen, you can invert the image by
pressing the "i" key.  This is useful for black and white or grayscale
images.  Image inversion can also be set using the "-ii" commandline option.
Available in VUIMAGE PLUS(tm) only.


PRINTING
--------

Once an image is displayed on the screen, you can print that image by
pressing the "p" key.  Before printing, make sure that you have set up
the printer port and selected the correct printer by going into the
Options menu.

The entire image is printed.  Any brightness adjustments you have made
will affect the print output.  The output to 2-color printers (most printers)
can be dithered so as to obtain a better print-out.  You can choose between
no dithering, 2x2, 3x3, 4x4, 5x5 or 6x6 dithering by going
into the Options menu.  You may wish to experiment with the dithering
options to obtain the best print image.  For fairly high resolution
printers (200x200 dpi or greater), 6x6 or 5x5 is suggested for paint-type
images and scanned images with many shades.  For line art/scanned documents,
eiher no dithering or 2x2 is suggested.

From the Options menu, you can also set the desired size of the print-out.

You can specify "lpt1:","lpt2:","lpt3:","com1:","com2:" or a filename
for the printer port.


TEXT SCREEN COLORS
------------------

You can change the text screen colors used by going into the "Options"
menu and answering "y" when asked "Change Screen Colors ?".
Use the left/right arrow keys to change the foreground color and the
up/down arrow keys to change the background color. (Alternately, you can use
the "f" and "F" keys for foreground and the "b" and "B" keys for background).
Select the colors you like.  Note the numbers shown that corresponds to each
of the colors that you selected - these numbers can be used with the "-cd",
"-co" and the "-cg" command line options to automatically select your
favourite colors when the program is started.

^L


COMMAND LINE OPTIONS
--------------------

Many of the options may be set from the command line instead going through
a menu.  For example, to start the program with the mode option set to 9
and the scaling option set to 3, enter:

        vuimg  -m9 -s3

The available command line options are listed below:

  -Tfiletype    where filetype is "gif" or "tiff".

                Example:   -Ttiff       (display tiff files)

  -vdrivername  where drivername is the name of the extended mode driver
                appropriate for your board.  If the program files are not in
                the current directory, then the drive and subdirectory must
                also be specified.

                Example (load ATI VGAWonder driver):

                           -vdativ            (program files in current dir)
                           -vc:\vuimage\dativ (program files in c:\vuimage)

  -mmodeindex   where modeindex is the number you would enter if you were
                to go into the "Mode" menu and make a selection.

                Example:   -m9          (set 320x200x256 mode)

  -sscaleindex  where scaleindex is the number you would enter if you were
                to go into the Scale menu (part of the "Options" menu) and
                make a selection.

                Example:   -s3          (set autoscale full screen)

  -sxhscale     where hscale is the horizontal scale value (1% to 999%).
                This option should be used only if manual scaling is selected.

                Example:   -sx200       (set horizontal scale to 200%)

  -syvscale     where vscale is the vertical scale value (1% to 999%).
                This option should be used only if manual scaling is selected.

                Example:   -sy50        (set vertical scale to 50%)

  -ddirectory   where directory is a directory name (or file matching string)
                that you would enter when you go into the Dir menu.

  -ttimeout     where timeout is the number of seconds to display each picture.

                Example:   -t40         (set timeout to 40 seconds)

  -by           enables the beep at the end of a picture
  -bn           disables the beep at the end of the picture

                Example:   -bn          (disable beep)

  -Bbrightness  where brightness is the brightness value (100 is nominal)

                Example:   -B120                (set brightness to 120%)

  -cddircolor   where dircolor is the color number for the filenames 
  -cofncolor          fncolor  is the color number for the file numbers 
  -cmmodcolor         modcolor is the color number for the display mode
  -cggencolor         gencolor is the color number for general text
                To find the color numbers for the colors of your choice, first
                go into the "Options" menu and select the colors that you like.
                The corresponding color numbers are also displayed.

                Example:   -cd78    (filenames in yellow on a red background)
                           -co10    (filenumbers in bright green on black)
                           -cm4     (video mode in red on black)
                           -cg14    (general text in yellow on black)

(*** The following options are available only in VUIMAGE PLUS(tm) ***)

  -Tpcx         select filetype to be PCX.

  -pprinternum  where printernum is the number you would enter if you were
                to go into the Options menu and choose a printer.

                Example:   -p1      (select EPSON FX80/100 printer)

  -pddevicename where devicename is the printer device (lpt1:, lpt2:, lpt3:,
                com1:, com2: or filename).

                Example:   -pdlpt1:      (send output to lpt1:)
                           -pdvuimg.prn  (send output to file vuimg.prn)

  -pxwidth      where width is the width of the printed image in 1/100 inches

                Example:   -px904   (print image width=9.04 inches)

  -pyheight     where height is the height of the printed image in 1/100 inches

                Example:   -py1200  (print image height=12.00 inches)

  -fddithertype where dithertype is the number you would enter if you were to
                go into the Options menu and choose the display dither type.

                Example:   -fd3     (dither 2-color displays using 3x3 matrix)

  -fpdithertype where dithertype is the number you would enter if you were to
                go into the Options menu and choose the printer dither type.

                Example:   -fp4     (dither 2-color printers using 4x4 matrix)

  -ii           invert the image (really useful for only black and white or
                grayscale images)

  -C            disables the menus.  If you use this option, you must also
                specify a filename to be displayed including the pathname.
                This should be the last option entered on the command line.
                The filename may contain wild card characters ? and * and 
                should be the last parameter.  Any directory name entered
                with the -d option will be ignored.

                Examples:   -C somefile.gif
                            -C \pics\*.gif

  -L            leave the last image on the screen when the program ends.
                Valid only when the -C option is used.  Useful when called
                as a sub-program by another program.




PRE-PROGRAMMED MODE
-------------------

You can run the program in a PRE-PROGRAMMED mode where it will go through a
display session with no keyboard input.  To do this, go through a manual
session and write down all keystrokes till you quit back to DOS (this is
important).  If you use the ESC key to abort a picture or list,
the return key to move on to the next picture, or the cursor keys to do
panning, do NOT include these keystrokes.  Then create a file containing
these keystrokes (we will use the filename "vuimg.inp" in the following
example).  To do this, type: 

        copy con: vuimg.inp <return>

Enter the keystrokes you wrote down and then type a <CTRL>Z to create the
file called vuimg.inp.  A text editor (ex. edlin) may also be used to
create such a file (start a new line for every "return" key).  This file
may then be used to run the program in the PRE-PROGRAMMED mode by typing

       vuimg  < vuimg.inp


DOS EXIT CODES (ERRORLEVEL)
---------------------------

The return codes generated by the program that may be tested in a batch
file are:

0 - no error
1 - command line option error
2 - the -C option was used without specifying a file
3 - file not found or invalid filename




DISPLAY BOARDS and EXTENDED VIDEO MODES/DRIVERS
-----------------------------------------------

If the program does not work with your display board, try loading any software
drivers (BIOS emulators, int 10h drivers, RAM BIOS drivers) that come with it.
Refer to the instructions that come with your graphics board.

Some video display boards support even higher resolutions than standard VGA,
for example, 640x480 in 256 colors and 800x600 in 16 colors.  These are
sometimes referred to as SuperVGA modes.  Additional drivers that support
these "extended modes" are included with the program.  These drivers have
filenames with the extension ".VDR" and are listed later in this section.
They can be loaded using the "-v" command line option (see section on command
line options).

Typically, extended modes are dependent on your type of graphics card.
Refer to your graphics card manual to see what extended modes are supported.
Only VGA type extended modes with either 16 or 256 colors out of a palette
of 262,144 colors are supported by the extended mode drivers.  Check the
list of extended mode drivers at the end of this section to see which driver
is suitable for use with your card.

However, there is a SuperVGA standard known as the VESA SuperVGA standard.
Many or most of the SuperVGA cards now support this standard.  If your
card supports this standard, then you can take advantage of the VESA driver
(DVESA.VDR) that comes with the program.  Even if there is a separate driver
that supports your card, WE RECOMMEND that you use the VESA driver instead
if your card supports the VESA standard.  In order for your card to support
the VESA standard, you may need to load a device driver or TSR that comes
with your card (through the CONFIG.SYS or AUTOEXEC.BAT file).  Refer to the
documentation that comes with your card (in printed form or disk file form).

If you are not using any extended drivers, you may still be able to display
in an extended mode if your BIOS for the board will support this.  Not all
boards come with BIOS that support the extended modes completely.  Installing
any RAM BIOS drivers that come with your board may help.  Display done
through the BIOS is usually extremely slow.

To use the BIOS supported extended modes, you need to know the mode number,
the no. of columns, the no. of rows, and the no. of colors for the mode.
Refer to the manual for your graphics card.

If you have a plain VGA card with no SuperVGA modes, you may still be able
to get higher resolutions (320x400x256, 360x480x256, 800x600x16) using the
DNVGA driver.


Extended Mode Drivers (SuperVGA drivers) included:

(additional untested drivers may be available from Offe Enterprises)

    If your display board is:                   Try driver
    ------------------------                    ----------
    Any board that suports the VESA standard    DVESA
    and has VESA BIOS installed
	
        ATI VGAWONDER                           DATIV
        Paradise VGA cards                      DPVGA
        AST VGA cards                           DPVGA
        AT&T VDC600                             DPVGA
        Orchid ProDesigner                      DORCH
        STB VGA cards                           DORCH
        Genoa VGA cards                         DORCH
        Sigma VGA cards                         DORCH
        Standard IBM VGA & register compatibles
                with multisync monitors         DNVGA
        Everex EV673                            DE673
        Everex EV678                            DE678
        Video-7 Fastwrite                       DV7FW
        Video-7 1024i                           DV71024
        Video-7 VRAM                            DV7VRAM
        Trident Video cards                     DTRID
	Cardinal 600 VGA 			DCHT
	Other Chips&Technolgies chipset		DCHT


    If your board is not listed, you can try one of the supplied drivers
    to see if any of the extended modes will work. Other drivers may become
    available from Offe in the future.  Not all modes available are supported
    on the listed boards.


Extended Modes Supported by the Drivers (mode numbers in decimal and hex)

DVESA
        Mode 256  (100h)         640 x  400 x 256 colors
        Mode 257  (101h)         640 x  480 x 256 colors
        Mode 258  (102h)         800 x  600 x  16 colors
        Mode 259  (103h)         800 x  600 x 256 colors
        Mode 260  (104h)        1024 x  768 x  16 colors
        Mode 261  (105h)        1024 x  768 x 256 colors
        Mode 262  (106h)        1280 x 1024 x  16 colors
        Mode 263  (107h)        1280 x 1024 x 256 colors

DATIV
        Mode  84 (54h)           800 x 600 x  16 colors 
        Mode  97 (61h)           640 x 400 x 256 colors
        Mode  98 (62h)           640 x 480 x 256 colors
        Mode  99 (63h)           800 x 600 x 256 colors
        Mode 101 (65h)          1024 x 768 x  16 colors

DCHT
        Mode 112 (70h)           800 x 600 x  16 colors 
        Mode 114 (72h)          1024 x 768 x  16 colors
        Mode 120 (78h)           640 x 400 x 256 colors
        Mode 121 (79h)           640 x 480 x 256 colors
        Mode 128 (7bh)           800 x 600 x 256 colors

DE673
        Submode 19 (13h)        640 x 350 x 256 colors
        Submode 20 (14h)        640 x 400 x 256 colors
        Submode 21 (15h)        512 x 480 x 256 colors

DE678
        Submode 49 (31h)        640 x 400 x 256 colors
        Submode 50 (32h)        512 x 480 x 256 colors
        Submode 77 (4dh)        640 x 480 x 256 colors
        Submode 78 (4eh)        800 x 600 x 256 colors

DNVGA
        -------                  320 x 400 x 256 colors
        -------                  360 x 480 x 256 colors
        -------                  800 x 600 x  16 colors

DORCH
        Mode  41 (29h)           800 x 600 x  16 colors
        Mode  45 (2Dh)           640 x 350 x 256 colors
        Mode  46 (2Eh)           640 x 480 x 256 colors
        Mode  47 (2Fh)           720 x 512 x 256 colors
        Mode  48 (30h)           800 x 600 x 256 colors
        Mode  55 (37h)          1024 x 768 x  16 colors

DPVGA
        Mode  88 (58h)           800 x 600 x  16 colors
        Mode  94 (5Eh)           640 x 400 x 256 colors
        Mode  95 (5Fh)           640 x 480 x 256 colors

DV7FW
        Mode  98 (62h)           800 x 600 x  16 colors
        Mode 102 (66h)           640 x 400 x 256 colors
        Mode 103 (67h)           640 x 480 x 256 colors

DTRID
        Mode  91 (5Bh)           800 x 600 x  16 colors
        Mode  92 (5Ch)           640 x 400 x 256 colors
        Mode  93 (5Dh)           640 x 480 x 256 colors
        Mode  95 (5Fh)          1024 x 768 x  16 colors

DV71024
        Mode  98 (62h)           800 x 600 x  16 colors
        Mode 101 (65h)          1024 x 768 x  16 colors
        Mode 102 (66h)           640 x 400 x 256 colors
        Mode 103 (67h)           640 x 480 x 256 colors

DV7VRAM
        Mode  98 (62h)           800 x 600 x  16 colors
        Mode 101 (65h)          1024 x 768 x  16 colors
        Mode 102 (66h)           640 x 400 x 256 colors
        Mode 103 (67h)           640 x 480 x 256 colors
        Mode 105 (69h)           800 x 600 x 256 colors

REVISION HISTORY
----------------

Additions/Changes from Version 2.70 to this version:
  - added the "@" key to freeze display (see section on Timeout)
  - added the "Insert" key to display image info quickly
  - Added 5x5, 6x6 dithering, better dithering
  - VUIMAGE PLUS(tm) now supports PCX also
  - GIF89a - supports "restore-to-previous" feature
  - improved auto-select video mode, scaling in multi-image pictures
  - max. timeout increased to 43199 seconds
  - other minor enhancements

Additions/Changes from the previous version (V2.62):
  - Support for the GIF89a standard - ASCII plain text extensions,
    graphics control extensions (delay, transparency, restore to background),
    comment and application extensions
  - better print quality
  - Ability to invert the image (VUIMAGE PLUS(tm))

Additions/Changes from the previous version (V2.60):
  - SuperVGA support added for any SuperVGA card that supports the VESA
    standard.  Most SuperVGA cards now come with VESA BIOS support in the
    form of a device driver (installed through CONFIG.SYS) or TSR (installed
    through AUTOEXEC.BAT).  The VESA driver for VUIMAGE(tm)/VUIMAGE PLUS(tm)
    supports the following VESA standard modes (if available in card):
       800x600x16, 1024x768x26, 1280x1024x16
       640x400x256, 640x480x256, 800x600x256, 1024x768x256, 1280x1024x256
    Use of the VESA extended video driver (dvesa) is strongly recommended.
  - added Chips & Technologies extended video driver
  - added HP Thinkjet printer
  - from main menu and cursorbar menu, can use ctrl-home/ctrl-end to get to
    top of directory or end of directory
  - from main menu, any arrow key takes you to cursorbar selection
  - four digit filenumber display allows upto 9999 files.

Additions/Changes from the previous version (V2.53):
  - Now supports printing of images.  To choose printer, use the Options menu.
       Print entire image, set your own print size.
  - Now can dither images in 2-color display modes - none, 2x2, 3x3, 4x4,
       5x5 or 6x6 dithering
  - Dither print output - none, 2x2, 3x3, 4x4, 5x5 or 6x6 dithering
  - better Options menu
  - reads more TIFF files
  - memory requirement has increased to 150K

Additions/Changes from the previous version (V2.42):
  - drivers for Trident, Video-7 1024i and Video-7 VRAM cards added
  - select files using cursors, mark/unmark for list of files
  - read more TIFF files - Vuimage Plus(tm) now supports PackBits
    compressed bilevel TIFF files

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2585

     Volume in drive A has no label
     Directory of A:\

    VUIMG282 ZIP     76139  12-10-90   5:06p
    VUIMG    DOC     37546  12-10-90
    VUIMG    EXE     86795  12-10-90
    DATIV    VDR       816  12-10-90
    DCHT     VDR       875  12-10-90
    DE673    VDR       659  12-10-90
    DE678    VDR      1596  12-10-90
    DGVGA    VDR      1065  12-10-90
    DNVGA    VDR       970  12-10-90
    DOAK     VDR       756  12-10-90
    DORCH    VDR      1087  12-10-90
    DPV1024  VDR       786  12-10-90
    DPVGA    VDR       603  12-10-90
    DTRID    VDR      1232  12-10-90
    DTSNG4   VDR      1216  12-10-90
    PROGRAMS DOC      4362  12-10-90
    ORDERFRM DOC      2439  12-10-90
    DV71024  VDR       800  12-10-90
    DV7FW    VDR       640  12-10-90
    DV7VRAM  VDR       922  12-10-90
    DVESA    VDR      2203  12-10-90
    STARSHIP GIF      6144  10-04-90   7:56p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1156   3-08-91   1:47p
    BENGAL   GIF     16384  10-04-90   8:03p
    COBRACAR GIF     21504  10-04-90   8:09p
    DRAGON   GIF     17280  10-04-90   1:00a
    EXAMPLE3 GIF     22528   2-23-89   1:30a
    PHANTOM  GIF     19456  10-04-90   9:06p
    PLANETS  GIF      7168  10-04-90   9:09p
    TOMCAT   GIF      8192  10-04-90   9:10p
    FILE2585 TXT      2516   3-08-91   2:21p
           32 file(s)     345873 bytes
                            4096 bytes free
