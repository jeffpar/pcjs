---
layout: page
title: "PC-SIG Diskette Library (Disk #2277)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2277/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2277"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GRAPHIC WORKSHOP, GRAFCAT, CROPGIF"

    Need to convert .GIF or .PCX files for inclusion as halftoned art in
    desktop publishing, or use MACPAINT pictures for WORDPERFECT?  Then try
    this program -- the last word in image programs.
    
    It converts, prints, views, dithers, transforms and halftones:
    MACPAINT, GEM/VENTURA, .IMG, .GIG, .TIFF, .WPG, .MSP, and .ESP files.
    Batch processing is featured if you need to convert many files.
    Extended and expanded memory are supported.  It has an intuitive user
    interface and easy-to-follow menus.  With GRAPHIC WORKSHOP, you can
    even convert color image files into superb black and white clip art for
    desktop publishing.
    
    Other features:
    
    ~ Rotate image files in 90  increments.
    
    ~ Flip image files horizontally and vertically.
    
    ~ Print to most laser and dot matrix printers.
    
    ~ Support for .IFF/.LBM files allows pictures which originate in Amiga
    and Deluxe Paint files to be converted into more common PC formats.
    
    Print a visual catalog of your image files, sixteen to a page.  Drive
    all LaserJet and PostScript laser printers, and work with any mixture
    of.GIF, .MAC, and .IMG files.
    
    Crop smaller fragments out of your .GIF files. Use the GRAPHIC
    WORKSHOP to convert other formats into .GIF files for cropping.
    CROPGIF uses a simple mouse interface to make cropping image fragments
    no more complicated than using a paint program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CROPGIF.DOC

{% raw %}
```
GIF FILE CROPPER 1.1
__________________________________________________________________

If you like this program, please do one of the following:

Go down to your local bookstore and buy a copy of "Coven: A 
Novel", by Steven William Rimmer, published by Ballantine Books. 
In Canada, try Coles... they usually have it. Read the book and 
tell your friends about it if you like it. Send us some comments 
about the book or a photocopy of the cover and we'll consider you 
a registered user of this program.

Alternately, send us $25.00, the normal user fee for this 
software. (The book is $3.95 or $5.50 in Canada: considerably 
cheaper than cash.) 

Registered users of this software are entitled to phone support, 
notification of upgrades and good karma. Our address can be found 
at the end of this file.
__________________________________________________________________


Thanks for checking out CROPGIF.

This program will allow you to crop fragments from existing GIF 
files. The fragments will be written to new... smaller... GIF 
files. 

Unlike other GIF cropping programs, this one doesn't involve the 
use of any tricky measurements. It works like the cut and paste 
functions of a paint program. It requires that a Microsoft 
compatible mouse driver be present before it will work, as the 
mouse does all the work.

In order to make the program work reasonably fast and in a 
decent amount of memory, the image you'll get to work with 
will not be a full colour one. Instead, CROPGIF will show you a 
dithered monochrome version of your source GIF file. However, the 
destination file will have the same colours as the source file 
did.

Because the CROPGIF display works with monochrome graphics, it 
can be used with pretty well any display card. It supports:

	- CGA (ugh!)
	- EGA
	- VGA
	- Hercules monochrome

and, of course, anything which can emulate these modes. It should 
automatically sense your display card type.

Here's how the beast works. Let's assume that you have a GIF file 
called ANGELA.GIF, from which you wish to crop a fragment to be 
called FACE.GIF. We'll allow that the fragment will probably 
contain Angela's face, although the program itself probably won't 
care.

Note that FACE.GIF, the destination file, will be created by 
CROPGIF. ANGELA.GIF, the source file, will not be modified in any 
way.

Making sure that you have previously loaded your mouse driver... 
and that, prior to doing so you have indeed remembered to buy a 
mouse... you would type the following:

CROPGIF ANGELA.GIF FACE.GIF

In fact, you can leave off the .GIF extensions, as CROPGIF 
assumes these. You will see a beg notice... please don't merely 
ignore this... with the program status below it. CROPGIF will 
begin by loading ANGELA.GIF. It will then proceed to dither 
ANGELA.GIF, that is, to create a temporary black and white 
version of it. When this is complete, your screen will pop into 
graphics mode and you'll see the dithered image.

The dithered image probably won't look too great, but don't worry 
about this. It's only used to help you decide what to crop out, 
and has no effect on the final image.

Move the mouse cursor to the upper left corner of the part of the 
image you want to crop out. Hold down the left mouse button and 
drag your mouse until the bounding rectangle encloses everything 
you want to crop into FACE.GIF. Release the mouse button.

If you discover that you've selected the wrong bit of the picture 
you can click your mouse to erase the bounding rectangle and try 
again.

When you've got the right part of the picture enclosed, hit the 
End key and your screen will return to text mode. The beg notice 
will return... once again, please don't ignore this... and you'll 
see a line at the bottom of your screen informing you that your 
fragment is being written to FACE.GIF.

When this is done, you'll return to the DOS prompt.

If you change your mind and decide you don't want to crop a 
fragment once you're in graphics mode, just hit Esc to return to 
DOS.

Note that if you attempt to crop a fragment in which either 
dimension is less than eight pixels, CROPGIF will assume you've 
made a mistake and abort.

Also note that the cropped fragment will include everything 
within the bounding rectangle and the pixels under the lines of 
the rectangle.


OTHER DETAILS
_____________

CROPGIF uses a fair bit of memory, especially for large GIF 
files. It might refuse to function on machines with restricted 
memory, or on computers which have a lot of resident stuff 
already loaded.

Some of the more voluminous GIF files around might be larger than 
your screen. This probably won't occur if you use a VGA card... 
which will show you up to 640 by 480 pixels in monochrome mode... 
but it could happen on an EGA or Herc system. In this case, you 
can make the picture scroll around by simply moving the mouse 
cursor to the edge of your screen.

If your computer refuses to go into graphics mode, chances are 
you have a multimode card which is confusing CROPGIF. In this 
case, you can manually force the screen mode by adding a third 
command line argument. For example, this would make CROPGIF use 
Hercules graphics.

CROPGIF ANGELA.GIF FACE.GIF /HER

The following are the mode switches which CROPGIF recognizes.

/CGA	- 	CGA card
/EGA	-	EGA card
/VGA	-	VGA card in 640 by 480 monochrome mode
/HER	-	Hercules card in 720 by 438 monochrome mode

Some low rent Microsoft compatible mice seem to have a problem in 
some graphics modes, in that their cursors will refuse to move 
more than about halfway down the screen, flash on and off, vanish 
and so on. The Agiler mouse, for example, is a problem. This 
doesnt happen with real Microsoft mice, or with the better 
compatibles, such as the LogiTech mice.

Some versions of the ATI EGA Wonder card refuse to go into the
Hercules graphics mode under CROPGIF. The EGA graphics mode works 
fine. We're looking into this.


ROLL YOUR OWN
_____________

This is another book plug. If you're interested in writing 
programs which use graphics, you'll find everything you need to 
know in "The Book of Bitmapped Graphics", also by Steven William 
Rimmer. It's published by TAB books, (TAB book 3558) and should 
be available in August 1990. It features code to pack and unpack 
MacPaint, IMG, PCX, GIF and TIFF files, as well as chapters on 
screen drivers, dithering and printing.


MORAL DOGMA
___________

If you like this program and find it useful, you are requested to 
support it either by buying the book mentioned at the top of this 
file or by sending us $25.00. We'd rather you bought the book. 
This will entitle you to telephone support, notification of 
updates and other good things like that. More to the point, 
though, it'll make you feel good. We've not infested the program 
with excessive beg notices, crippled it or had it verbally insult 
you after ten days. We trust you to support this program if 
you like it.
	Oh yes, should you fail to support this program and 
continue to use it, a leather winged demon of the night will tear 
itself, shrieking blood and fury, from the endless caverns of the 
nether world, hurl itself into the darkness with a thirst for 
blood on its slavering fangs and search the very threads of time 
for the throbbing of your heartbeat. Just thought you'd want to 
know that.

We are
                      Alchemy Mindworks Inc.
                          P.O. Box 500
                         Beeton, Ontario
                             L0G 1A0
                             Canada

Other programs we've done that you might like include:

Scoop    -  MacPaint, GEM/IMG and PC Paintbrush file readers, 
            with Epson FX-80, LaserJet and PostScript printer 
            support. Drives CGA, EGA, VGA and Hercules cards. 
            Source code in Turbo C and Microsoft MASM is 
            included for this program.
HP_Slash -  Make LaserJet soft fonts smaller by selectively excising
            those characters you'll never use.
Calendar -  Slick perpetual calendar that tells you when the 
            equinoxes happen, what day Michaelmas fell on in 1705 
            and so on.
gemCAP   -  Capture graphics screen in GEM/IMG paint format, 
            suitable for inhalation into Ventura.
CPM2DOS  -  Read CP/M formatted disks on your PC.
IMGCUT   -  Crop GEM/IMG paint files into smaller files.
ADDRESS  -  Memory resident envelope addresser with graphics.
VFM      -  Ventura soft font manager deluxe with a side of fries. 
            Adds new fonts and creates width tables with menu 
            driven simplicity.
MCOPY    -  Copying program which packs as many files as possible
            onto a floppy, pauses when the current floppy is
            full and asks for another one.
TCAP     -  A text screen capture program which generates GEM/IMG
            graphics that look like your text, all ready for inhalation
            into Ventura.
GRAFCAT  -  Prints a visual catalog of your image files, with 
            sixteen pictures to a page. Drives all LaserJet and 
            PostScript laser printers, and works with any mixture 
            of GIF, PCX, MAC and IMG files.
GRAPHIC
 WORKSHOP - This is the last word in image programs. It converts, 
            prints, views, dithers and halftones MacPaint, 
            GEM/Ventura IMG, PCX, GIF, TIFF and EPS files. It 
            drives CGA, Hercules, EGA, VGA, Paradise and ATI VGA 
            Wonder cards. It features batch processing, extended 
            and expanded memory support, an intuitive user 
            interface and easy to follow menus. It allows you to 
            convert colour image files into superb black and 
            white clip art for desktop publishing, among other 
            things. 

If you can't find them in the public domain, they're available 
from us for $25.00 each, except Graphic Workshop, which is 
$35.00.


REVISION HISTORY
________________


Version 1.1 - Now supports monochrome GIF files.


LEGAL DOGMA
___________

The author assumes no responsibility for any damage or loss 
caused by the use of these programs, however it comes down. If 
you can think of a way a picture program can cause you damage 
or loss you've a sneakier mind than mine.

All the trademarks used herein are registered to whoever it is 
that owns them. This notification is given in lieu of any 
specific list of trademarks and their owners, which would not be 
as inclusive and would probably take a lot longer to type. 
 
That's it...


```
{% endraw %}

## FILE2277.TXT

{% raw %}
```
Disk No: 2277                                                           
Disk Title: Graphic Workshop, Grafcat, CropGIF                          
PC-SIG Version: S1                                                      
                                                                        
Program Title: Graphic Workshop                                         
Author Version: 1.9                                                     
Author Registration: $35.00                                             
Special Requirements: None.                                             
                                                                        
If you need to convert GIF or PCX files for inclusion as halftoned art  
in desktop publishing, or use MACPAINT pictures for WORDPERFECT then try
this program -- the last word in image programs.                        
                                                                        
It converts, prints, views, dithers, transforms and halftones: MACPAINT,
GEM/VENTURA, IMG, GIG, TIFF, WPG, MSP, and ESP files.  Batch processing 
is featured if you need to convert many files.  Extended and expanded   
memory are supported.  It has an intuitive user interface, and          
easy-to-follow menus.  With GRAPHIC WORKSHOP, you can even convert      
color image files into superb black and white clip art for desktop      
publishing.                                                             
                                                                        
Other features:                                                         
                                                                        
~ Rotate image files in 90 degree increments                            
                                                                        
~ Flip image files horizontally and vertically                          
                                                                        
~ Print to most laser and dot matrix printers                           
                                                                        
~ Support for IFF/LBM files allows pictures which originate in Amiga    
and Deluxe Paint files to be converted into more common PC formats.     
Program Title: GrafCat                                                  
Author Version: 1.9                                                     
Author Registration: $20.00                                             
Special Requirements: Laser printer.                                    
                                                                        
This program prints a visual catalog of your image files, with sixteen  
to a page. Drives all LaserJet and PostScript laser printers, and works 
with any mixture of GIF, MAC, and IMG files.                            
Program Title: CROPGIF (GIF File Cropper)                               
Author Version: 1.1                                                     
Author Registration: $20.00                                             
Special Requirements: 640K RAM, and a mouse.                            
                                                                        
With this program you can crop smaller fragments out of your GIF files. 
Use the GRAPHIC WORKSHOP to convert other formats into GIF files for    
cropping.  CROPGIF uses a simple mouse interface to make cropping image 
fragments no more complicated than using a paint program.               
                                                                        
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
║    <<<<  PC-SIG Disk #2277  GRAPHIC WORKSHOP, GRAFCAT, CROPGIF  >>>>    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To view instructions on how to start all three programs, type:          ║
║     TYPE READ.ME  (press Enter)                                         ║
║                                                                         ║
║ To print out the documentation of each of the three programs after      ║
║     unzipping them, type:  COPY <respective program filename>.DOC PRN   ║
║                            (press Enter)                                ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## GRAFCAT.DOC

{% raw %}
```
GRAFCAT 2.0

Graphics cataloging program deluxe: 
	Requires a laser printer... LaserJet Plus compatible or
	a Postcript printer... and some graphics to catalog. Works 
	with any mixture of MacPaint, GEM/IMG, PC Paintbrush PCX 
	and GIF files.
__________________________________________________________________

If you like this program, please do one of the following:

Go down to your local bookstore and buy a copy of "Coven: A 
Novel", by Steven William Rimmer, published by Ballantine Books. 
In Canada, try Coles... they usually have it. Read the book and 
tell your friends about it if you like it. Send us some comments 
about the book or a photocopy of the cover and we'll consider you 
a registered user of this program.

Alternately, send us $20.00, the normal user fee for this 
software. (The book is $3.95 or $5.50 in Canada: considerably 
cheaper than cash.) 

Registered users of this software are entitled to phone support, 
notification of upgrades and good karma. Our address can be found 
at the end of this file.
__________________________________________________________________

New features as of version 2.0
______________________________

-       Fixed a bug which caused some sixteen colour PCX files 
        (from programs which didn't really pack 'em properly) to 
        print mangled.


New features as of version 1.8
______________________________

-	Does Bayer dithering, which is faster than the 
	Floyd-Steinberg dither used in previous versions.

-	Supports PostScript as well as LaserJet printers.

-	Supports GIF files, dithering them down to black and
	white before printing. (This requires lots of memory...
	if there is not enough free memory available, this 
	feature automatically switches off and the GIF pictures
	print very contrasty.)

- 	Supports "headerless" MacPaint files of the type used
	by First Publisher. They can be intermixed with normal
	MacPaint files... GRAFCAT will figure out which is which.

-	Fixes a bug in the PostScript printing which caused some
	printers to hang after the first page.

What it Does and Why
____________________

We have seven hundred and sixteen image files in a subdirectory 
called \GEMART. They occupy almost twenty megabytes. We use 'em a 
lot... they're all public domain graphics and we can pop them 
into desktop publishing documents when we want to dress up a page 
quickly or just throw in a nude for effect.

You know, it's damn hard to remember what three hundred and 
seventy five picture files contain. In addition, I think that 
late at night after we've gone away the little mothers breed in 
there.

In order to help figure out what all those file names are, we 
wrote GRAFCAT. It creates a visual catalog of picture files which 
makes it easy to check out a whole collection of pictures and 
find the one you want. The pictures can be MacPaint files, 
GEM/IMG files like the ones Ventura uses, colour GIF files with 
up to 256 colours and PCX or PCC files from PC Paintbrush. 

The program prints sixteen files to a page. Said pages come out 
of a laser printer... you'll need one of these or GRAFCAT won't 
be much use. The pictures are printed at three hundred dots to 
the inch, so they come out readable but pretty small... which is 
how so many make it onto a page.

The printer must be connected to LPT1 on your computer. You'll 
need at least a megabyte of memory in the printer.

GRAFCAT will print pictures up to 576 by 720 pixels in their 
entirety. This is the size of a MacPaint file. Confronted with 
GIF, IMG or PCX files bigger than this, it will print the middle 
part of the image.

GRAFCAT can print a mixture of image types at once. Thus, if you 
just tell it to print *.*, it will sort out the file types it 
knows how to handle and print them, ignoring anything else. 
It assumes that the file extensions reflect the file types 
properly, that is:

	MAC for MacPaint
	IMG for GEM/IMG
	PCC or PCX for PC Paintbrush
	GIF for GIF files

GRAFCAT does not handle colour IMG files or PC Paintbrush files 
with 256 colours. PC Paintbrush files with sixteen or fewer 
colours do print, although some of the colour information will 
be ignored. Colour GIF files are dithered to black and white.


How to use GRAFCAT
__________________

Well, it's pretty heavy stuff. Type GRAFCAT followed by any wild 
card file specification that points to some image files of the 
types discussed. Examples are:

	GRAFCAT D:\*.PCX
	GRAFCAT \GEMART\*.IMG
	GRAFCAT *.MAC
	GRAFCAT *.*
	GRAFCAT A*.GIF
	GRAFCAT @LISTFILE

Make sure there's lots of paper in your printer and that you have 
some time to kill. GRAFCAT takes a while, especially on slower 
laser printers.

If you want to print selected pages of a large collection of 
images, you can use GRAFCAT's command line options, to wit,

/Sn for the page to start printing with
/En for the page to stop printing after

To print pages 10, 11 and 12 of a catalog of images, you would do 
this:

	GRAFCAT *.IMG /S10 /E12

If you want to work out which images these would be, you can do 
so as follows. First off, use a sorted directory utility to look 
at the image file names. GRAFCAT prints them in alphabetical 
order. Page 10 would start 160 files from the beginning of the 
directory, as there are sixteen images to a page.

If you create a text file with the names of all the files you 
want cataloged, to you can make GRAFCAT print those files by 
passing the name of the text file as the file parameter with an 
"@" in front of it, for example:

	GRAFCAT @LISTFILE

Where LISTFILE is the name of a plain text file with one file 
name per line. LISTFILE must be in the subdirectory where the 
files you want to print reside.

GRAFCAT normally prints GIF files by dithering them if there's 
enough memory to do so. You can disable this... to speed up 
printing slightly... by adding the /D switch to your command 
line.

If there is not enough memory to hande dithering, GRAFCAT will 
throw the /D switch for you.

Without dithering, GIF images come up pretty contrasty looking. 
The other image types are not affected.

If you attempt to print to a PostScript printer with insufficient 
memory or with the /D switch set, GRAFCAT will complain. It needs 
a big buffer to handle PostScript graphics.

GIF images are passed through a Bayer dither filter to make them 
look more recognizable in black and white. 

It's all so simple a politician could use it... probably.


PostScript Printing
___________________

GRAFCAT defaults to printing to a LaserJet Plus compatible 
printer, but you can use it with a PostScript printer by using
the /P command line switch. PostScript is much slower at printing 
bitmaps than a LaserJet is. If you have a printer which supports 
both page description languages, you should use the LaserJet 
mode.

There are reputedly some PostScript printers which hang after the 
first page of printing. Ours does not, and we're pretty sure this 
version of the program gets around this bug. However, if you 
encounter it anew please let us know.


Roll Your Own
_____________

This is another book plug. If you're interested in writing 
programs which use graphics, you'll find everything you need to 
know in "The Book of Bitmapped Graphics", also by Steven William 
Rimmer. It's published by TAB books, (TAB book 3558) and should 
be available in August 1990. It features code to pack and unpack 
MacPaint, IMG, PCX, GIF and TIFF files, as well as chapters on 
screen drivers, dithering and printing. It also includes the 
source code for a simplified version of this program.

	
Moral dogma
___________

If you like this program and find it useful, you are requested to 
support it either by buying the book mentioned at the top of this 
file or by sending us $20.00. We'd rather you bought the book. 
This will entitle you to telephone support, notification of 
updates and other good things like that. More to the point, 
though, it'll make you feel good. We've not infested the program 
with excessive beg notices, crippled it or had it verbally insult 
you after ten days. We trust you to support GRAFCAT if you like 
it.

Oh yes, and if you fail to support this program and continue to 
use it, a leather winged demon of the night will tear itself, 
shrieking blood and fury, from the endless caverns of the nether 
world, hurl itself into the darkness with a thirst for blood on 
its slavering fangs and search the very threads of time for the 
throbbing of your heartbeat. Just thought you'd want to know 
that.

We are
                      Alchemy Mindworks Inc.
                          P.O. Box 500
                         Beeton, Ontario
                             L0G 1A0
                             Canada

Other programs we've done that you might like include:

Scoop    -  MacPaint, GEM/IMG and PC Paintbrush file readers, 
            with Epson FX-80, LaserJet and PostScript printer 
            support. Drives CGA, EGA, VGA and Hercules cards.
HP_Slash -  Make LaserJet soft fonts smaller by selectively excising
            those characters you'll never use.
Calendar -  Slick perpetual calendar that tells you when the 
            equinoxes happen, what day Michaelmas fell on in 1705 
            and so on.
ADDRESS  -  Memory resident envelope addresser with graphics.
VFM      -  Ventura soft font manager deluxe with a side of fries. 
            Adds new fonts and creates width tables with menu 
            driven simplicity.
MCOPY    -  Copying program which packs as many files as possible
            onto a floppy, pauses when the current floppy is
            full and asks for another one.

CROPGIF   - allows you to crop smaller fragments out of your GIF 
            files. Use graphic Workshop, above, to convert other 
            formats into GIF files for cropping. This program 
            uses a simple mouse interface to make cropping image 
            fragments no more complicated than using a paint 
            program Requires a Microsoft compatible mouse.

GRAPHIC
 WORKSHOP - This is the last word in image programs. It converts, 
            prints, views, dithers, transforms and halftones 
            MacPaint, GEM/Ventura IMG, PCX, GIF, TIFF, WPG, MSP 
            and EPS files. It drives CGA, Hercules, EGA, VGA, 
            Paradise, Video 7 and ATI VGA Wonder cards. It 
            features batch processing, extended and expanded 
            memory support, an intuitive user interface and easy 
            to follow menus. It allows you to convert colour 
            image files into superb black and white clip art for 
            desktop publishing, among other things. 

If you can't find them in the public domain, they're available 
from us for $20.00 each. Source is available for Scoop, for $25.00.

Legal dogma
-----------
The author assumes no responsibility for any damage or loss 
caused by the use of these programs, however it comes down. If 
you can think of a way a picture program can cause you damage 
or loss you've a sneakier mind than mine.

All the trademarks used herein are registered to whoever it is 
that owns them. This notification is given in lieu of any 
specific list of trademarks and their owners, which would not be 
as inclusive and would probably take a lot longer to type. 
 
That's it...


```
{% endraw %}

## DRIVERS.DOC

{% raw %}
```
Dot matrix printer drivers for Graphic Workshop
_______________________________________________

This version of Graphic Workshop includes the following dot 
matrix printer drivers. All the supplied drivers print to LPT1. 
You can redirect this with the DOS MODE command. If you write a 
custom driver you can have it print to any port you like.

Note that while the external printer driver facility was 
implemented in Graphic Workshop to support dot matrix printers, 
you can write a driver to support pretty well any output device, 
including film recorders, FAX boards and so on.

This release of Graphic Workshop is a bit thin on specialized 
drivers... yes, two is a bit thin. We're working on borrowing 
some of the popular printers to write drivers for them.
	
EPSNFX80.PDR	This is a driver for the generic Epson FX-80 
                modes. It will work with many dot matrix 
                printers, although with far less resolution than 
                some newer printers can manage.

EPSNFX80.ASM	This is the source code for the generic Epson FX-
                80 driver, for use as a starting point in writing 
                your own custom driver. If you come up with a 
                printer driver of your own, please send us the 
                source and we'll include it in future releases of 
                Graphic Workshop with suitable credit.

GEMINI.PDR	This is a driver for the 480 dot wide mode of the 
                arcane Star Micronics Gemini 10X. The output from 
                this printer is pretty ugly. The double 
                resolution graphics mode of the Gemini 10X is a 
                bit narrow, and pictures come out with badly 
                distorted aspect ratios, so we didn't use this 
                mode.

Registered users of Graphic Workshop wishing to write their own 
drivers are welcome to whatever help we can supply. We can't 
teach you to program in assembler over the phone, but we can 
probably help you with basic questions and suggest ways around 
any problems you encounter.


Super VGA card drivers for Graphic Workshop
___________________________________________

NOTE: As of version 2.4 of Graphic Workshop, the internal 
structure of the super VGA drivers changed a bit. The old drivers 
will no longer work with GWS.EXE. New versions of all the current 
drivers are included with this release... delete your old 
drivers.

MORE NOTES: As of version 2.7, all the drivers were changed 
slightly. This involved using a slightly different technique for 
setting the VGA palette to make palette adjustments from within 
the VGA 256 colour mode look nicer. Older drivers... written after 
version 2.4 of Graphic Workshop... will still work, but you'll 
see a bit of screen trash when you adjust the VGA palette.

This version of Graphic Workshop includes the following drivers:

TRIDENT.DRV	This is a driver for the Trident VGA graphic 
                cards. It drives the card in its 640 by 400, 256 
                colour mode, and will work with cards having 256 
                kilobytes or more of onboard memory. We 
                originally found the Trident card this driver was 
                developed on in a Sun Moon Star 386SX we were 
                loaned. It turned out that the monitor provided 
                with this computer would not sync in the 640 by 
                400 256 colour mode, even though the card was 
                doing fine. If you have this system, you probably 
                won't be able to use this driver unless you 
                spring for a multisync monitor.

VIDEO7.DRV	This is a driver for the Headland Technologies 
                Video Seven VRAM and Video Seven 1024i cards. It 
                supports the 640 by 480 line 256-colour mode. It 
                uses the standard VGA and EGA 16-colour and 
                monochrome modes... we decided not to implement 
                the 1024 by 768 16-colour mode. There are very 
                few 16-colour images around which could take 
                advantage of this mode, but there are a lot of 
                monitors which cannot.

PARAPLUS.DRV	This is a full featured driver for the Western 
                Digital Paradise Plus card. This driver also 
                works with the Dell Super VGA card, which is 
                actually a Paradise 16-bit card.

DELLVGA.DRV	This is a version of PARAPLUS.DRV, above. It has 
                been modified not to use the 800 by 600 pixel EGA 
                and monochrome modes of the Paradise card, as 
                this causes the super VGA monitor on a Dell to 
                click a (loud) internal relay every time it 
                changes modes. If you don't mind the relay, or 
                you want the 800 by 600 modes, use PARAPLUS.DRV, 
                above.

                Note: rumour has it that some Dell systems have 
                been shipped with Headland Video 7 cards rather 
                than Paradise cards. If your Dell system is so 
                equipped... or if you can't get GWS to work in 
                the super VGA modes with one of the above two 
                drivers... try VIDEO7.DRV.

ATIWONDR.DRV	This is a driver for the ATI VGA Wonder and ATI 
                VGA Edge cards. It drives the 256 colour screen 
                in the 400 line mode, and will work with cards 
                having 256K on them. The upper 256K on half meg 
                cards will be ignored by this driver.

ATI512.DRV	This is a driver for ATI Wonder cards having 512K 
                of memory on board. It will display pictures in 
                up to 800 by 600 pixel resolution, selecting 
                among the three available 256 colour display 
                modes based on the dimensions of the image to be 
                viewed.
		
GRAFDRV.DRV	This is a stock VGA card driver. You might want 
                to use this if there is no super VGA card driver 
                available for your card, however, as it handles 
                the 16-colour and monochrome modes in potentially 
                more useful ways than the internal VGA driver of 
                Graphic Workshop does.

VGA400.DRV	This is a "gadget" driver for a stock VGA card 
                which reprograms the beast into an undocumented 
                320 by 400 line mode. It should work on any VGA 
                card, but being undocumented one cannot be sure. 
                In any case, while interesting, this mode has 
                such a squashed aspect ratio that it's not really 
                useful for anything. In addition, having heavily 
                interlaced memory, it's painfully slow to update.

VGA480.DRV	This is another undocumented mode. It gets still 
                more on the screen, with still more distortion.

To use one of these drivers, use GWSINSTL to select EXTERNAL for 
display type and enter the path to your driver in the path name 
field at the bottom of GWSINSTL screen. This should be the 
complete path, including the drive letter. Graphic Workshop does 
not assume that driver file names end in .DRV... you can call 'em 
anything you like.
	The name of the driver you've loaded should appear in the 
F10 "About" window when you're running GWS.EXE.
	

Writing your own driver

Also included with this version of Graphic Workshop is 
GRAFDRV.ASM, the source code for GRAFDRV.DRV. This file can be 
used as the boilerplate for writing your own super VGA card 
driver. You will need a pretty good grasp of assembly language 
and the hardware specific details of the card you want to write a 
driver for to get this together. This file should be assembled 
with Microsoft's MASM assembler, version 4.0 or better.
	The following batch file is useful in assembling 
GRAFDRV.ASM into GRAFDRV.DRV... or any other driver you happen to 
write.

MASM %1 %1 NUL NUL
IF ERRORLEVEL 1 GOTO PROBLEM
LINK %1 @AUTOLINK
EXE2BIN %1 %1.DRV
DEL %1.EXE
DEL %1.OBJ
:PROBLEM

	The file AUTOLINK must be present... it contains four 
carriage returns, that is, four blank lines.
	In future releases we hope to include a number of SVGA 
drivers with Graphic Workshop. If you write one using the 
GRAFDRV.ASM skeletal driver and care to send us the source, we'll 
be pleased to include it with future releases, with suitable credit.
	Registered users of Graphic Workshop who want to write 
their own drivers are welcome to the source code for all the 
above drivers... you might find some of the techniques used in 
them helpful in writing your driver. The only conditions are that 
you must be a registered user and we'd like to have the source 
code for the driver you write when you get it working... we'll 
include the object file in with future releases of Graphic 
Workshop.
	We'll be happy to give you whatever help we can in 
writing your driver, too.
	If you want the driver source files, please phone or 
write us and we'll send 'em off to you.


Custom drivers

We've been asked on a few occasions whether we'll write custom 
drivers for Graphic Workshop on behalf of various interested 
parties. We might be able to, depending on time and whathaveyou. 
If you really want a specific SVGA driver for Graphic Workshop... 
for example, if you want to licence it for inclusion with a 
particular card or computer... and you can't get it together 
yourself, contact us. Our address is in GRAFWORK.DOC.

```
{% endraw %}

## EPSNFX80.ASM

{% raw %}
```
		COMMENT %

	GRAPHIC WORKSHOP DOT MATRIX PRINTER DRIVER
	COPYRIGHT (C) 1990 ALCHEMY MINDWORKS INC.
	VERSION 1.0

		%

PAGEWIDE	EQU	612		;PAGE WIDTH IN PIXELS
PAGEDEEP	EQU	756		;PAGE DEPTH IN PIXELS
LINEDEEP	EQU	8		;NUMBER OF BITS (PINS) IN A LINE
COLOURS		EQU	1		;ONLY ONE COLOUR SUPPORTED AS YET

VERSION		EQU	1		;VERSION NUMBER
SUBVERSION	EQU	0		;SUBVERSION NUMBER

_AOFF		EQU	6		;STACK OFFSET

CODE		SEGMENT PARA PUBLIC 'CODE'
		ASSUME	CS:CODE

		ORG	0000H		;ORIGIN FOR LOADABLE DRIVER

		DB	'ALCHPRDR'	;SIGNATURE - DON'T CHANGE THIS

;THE FOLLOWING ARE THE POINTERS TO THE CALLABLE ROUTINES AND THE COMMON
;DATA. THE SEGMENTS ARE FILLED IN BY GRAPHIC WORKSHOP. DON'T CHANGE ANYTHING.
DISPATCH	PROC	FAR
		DW      INIT_PRINTER	;FAR POINTER TO PRINTER INITIALIZATION
		DW      ?
		DW	PRINT_LINE	;FAR POINTER TO LINE PRINT
		DW	?
		DW	DEINIT_PRINTER	;FAR POINTER TO PRINTER DEINIT
		DW	?
		DW	PRINT_TEXT	;FAR POINTER TO TEXT PRINT
		DW	?
		DW	0,0		;NULL ONE
		DW	0,0		;NULL TWO
		DW	0,0		;NULL THREE
		DW	0,0		;NULL FOUR

V_PAGEWIDE	DW	PAGEWIDE
V_PAGEDEEP	DW	PAGEDEEP
V_LINEDEEP	DW	LINEDEEP
V_COLOURS	DW	COLOURS

;THESE VERSION NUMBERS REFLECT THE DRIVER TEMPLATE VERSION AND THE
;VERSION OF THE DRIVER ITSELF. YOU CAN CHANGE THE SUBVERSION VALUE
;TO REFLECT CHANGES IN YOUR DRIVER. THE VERSION VALUE MUST REMAIN
;UNCHANGED OR GRAPHIC WORKSHOP MAY REJECT YOUR DRIVER.
		DW	VERSION
		DW	SUBVERSION

;THIS SHOULD BE THE PRINTER NAME AS IT WILL APPEAR IN THE GWS MENU.
;THE FIRST BYTE MUST BE 01H AND THE NAME MUST BE EXACTLY 19 BYTES LONG
;PLUS ONE ZERO BYTE AT THE END.

		DB      01H,'Epson FX-80        ',0
DISPATCH        ENDP

;THIS PROCEDURE SHOULD INITIALIZE THE PRINTER. IT SHOULD ALSO STORE THE
;FIRST THREE INTS ON THE STACK FOR FUTURE USE. THESE ARE IMAGE_WIDTH,
;IMAGE_DEPTH AND IMAGE_BYTES RESPECTIVELY. ALSO ON THE STACK ARE A POINTER
;TO THE GWS CONFIGURATION STRUCT AND A POINTER TO THE CURRENT FILE NAME
INIT_PRINTER	PROC	NEAR
		PUSH	BP
		MOV	BP,SP

		MOV	AX,[BP + _AOFF + 0]
		MOV	CS:[IMAGE_WIDTH],AX

		MOV	AX,[BP + _AOFF + 2]
		MOV	CS:[IMAGE_DEPTH],AX

		MOV	AX,[BP + _AOFF + 4]
		MOV	CS:[IMAGE_BYTES],AX

		MOV	DX,OFFSET INIT_SEQ
		CALL	PRINT_STRING

		POP	BP
		RETF
INIT_PRINTER	ENDP

;THIS PROCEDURE SHOULD PRINT ONE LINE. A POINTER TO THE LINE IS
;ON THE STACK.
PRINT_LINE	PROC	NEAR
		PUSH	BP
		MOV	BP,SP
		PUSH	DS

		MOV	CX,CS:[IMAGE_WIDTH]
		CMP	CX,0
		JE	PRINT_L3
		CMP	CX,CS:[V_PAGEWIDE]
		JL	PRINT_L1
		MOV	CX,CS:[V_PAGEWIDE]

PRINT_L1:	MOV	CS:[START_LO],CL
		MOV	CS:[START_HI],CH
		MOV	DX,OFFSET START_SEQ
		CALL	PRINT_STRING

		MOV	SI,[BP + _AOFF + 0]
		MOV	DS,[BP + _AOFF + 2]

		MOV	DX,0
PRINT_L2:	PUSH	CX
		CALL	GET_BYTE
		CALL	PRINT_BYTE
		INC	DX
		POP	CX
		LOOP	PRINT_L2

		MOV	DX,OFFSET END_SEQ
		CALL	PRINT_STRING

PRINT_L3:	POP	DS
		POP	BP
		RETF
PRINT_LINE	ENDP

;THIS SHOULD DO ANYTHING NECESSARY TO FINISH THE PICTURE. IT SHOULD NOT
;ISSUE A FORM FEED, THOUGH.
DEINIT_PRINTER	PROC	NEAR
		PUSH	BP
		MOV	BP,SP
		PUSH	DS

		MOV	DX,OFFSET DEINIT_SEQ
		CALL	PRINT_STRING
		POP	DS
		POP	BP
		RETF
DEINIT_PRINTER	ENDP

;THIS WILL PRINT A LINE OF TEXT TO THE PRINTER. THE STRING IS ON THE
;STACK FOLLOWED BY THE LENGTH OF THE STRING
PRINT_TEXT	PROC	NEAR
		PUSH	BP
		MOV	BP,SP
		PUSH	DS

		MOV	SI,[BP + _AOFF + 0]
		MOV	DS,[BP + _AOFF + 2]
		MOV	CX,[BP + _AOFF + 4]
		CMP	CX,0
		JE	PRINT_T2

		CLD
PRINT_T1:	LODSB
		CALL	PRINT_BYTE
		LOOP    PRINT_T1

PRINT_T2:	POP	DS
		POP	BP
		RETF
PRINT_TEXT	ENDP

;GET ONE BYTE FROM THE LINE FIELD
GET_BYTE	PROC	NEAR
		PUSH	BX
		PUSH	CX
		PUSH	DX
		PUSH	SI

		MOV	BX,DX
		SHR	BX,1
		SHR	BX,1
		SHR	BX,1

		MOV	AH,80H
		MOV	CL,DL
		AND	CL,0007H
		SHR	AH,CL

		MOV	AL,0
		MOV	CX,CS:[V_LINEDEEP]

		MOV	DH,80H
GETBYTE1:	TEST	DS:[SI + BX],AH
		JNZ	GETBYTE2
		OR	AL,DH
GETBYTE2:	ADD     SI,CS:[IMAGE_BYTES]
		SHR	DH,1
		LOOP    GETBYTE1

		POP	SI
		POP	DX
		POP	CX
		POP	BX
		RET
GET_BYTE	ENDP

;PRINT A PASCAL STYLE STRING IN CS:DX
PRINT_STRING	PROC	NEAR
		PUSH	CX
		PUSH	BX
		MOV	BX,DX
		MOV	CX,0
		MOV	CL,CS:[BX]
PRINT_S1:	INC	BX
		MOV	AL,CS:[BX]
		CALL	PRINT_BYTE
		LOOP	PRINT_S1
		POP	BX
		POP	CX
		RET
PRINT_STRING	ENDP

;PRINT ONE BYTE IN AL
PRINT_BYTE	PROC	NEAR
		PUSH	AX
		PUSH	BX
		PUSH	CX
		PUSH	DX
		PUSH	SI
		PUSH	DS
		PUSH	AX

PRINT_B1:	MOV	AH,2
		MOV	DX,0
		INT	17H
		TEST	AH,80H
		JZ	PRINT_B1

		POP	AX

		MOV	AH,0
		MOV	DX,0
		INT	17H

		POP	DS
		POP	SI
		POP	DX
		POP	CX
		POP	BX
		POP	AX
		RET
PRINT_BYTE	ENDP

IMAGE_WIDTH	DW	0
IMAGE_DEPTH	DW	0
IMAGE_BYTES	DW	0

;
;	NOTE - ALL STRINGS START WITH A LENGTH BYTE
;

;THIS IS THE STRING SENT TO THE PRINTER AT THE START OF A GRAPHIC LINE
START_SEQ	DB      5,1BH,'*',06H
START_LO	DB	0
START_HI	DB	0

;THIS IS THE STRING SENT TO THE PRINTER AT THE END OF A GRAPHIC LINE
END_SEQ		DB	4,0DH,1BH,'J',18H

;THIS IS THE STRING SENT TO THE PRINTER TO INITIALIZE THE BEAST
INIT_SEQ	DB      2,1BH,'@'

;THIS IS THE STRING SENT TO THE PRINTER TO DIINITIALIZE THE BEAST
DEINIT_SEQ	DB      4,0DH,0AH,1BH,'@'

CODE		ENDS
		END

```
{% endraw %}

## EXAMPLES.TXT

{% raw %}
```
The example files are images to try Graphic Workshop
out with. 

Example 1 -  two colour image file. This will be
             viewable on any card.

Example 2 -  sixteen colour image file. This will
             be viewable on EGA and VGA cards.

Example 3 -  256 colour image file. This will be
             viewable in its true colours on VGA 
             cards, although you'll be able to see
             it on EGA cards using colour approximation. 

To really see what dithering can do, print out
example one.

```
{% endraw %}

## GRAFDRV.ASM

{% raw %}
```
		COMMENT %

	GRAPHIC WORKSHOP VGA SCREEN DRIVER
	COPYRIGHT (C) 1990 ALCHEMY MINDWORKS INC.
	VERSION 1.1

	This is a skeletal driver for use as the
	basis for writing custom SVGA loadable drivers
	for Graphic Workshop. You will require the
	hardware specific information about your
	card to customize this driver.

	As it stands, the driver implements the code for
	a stock VGA card running in mode 13H for 256
	colour images, mode 12H for 16 colour images
	and mode 11H for monochrome images.

	To generate a driver from this file, it must
	be assembled using MASM, linked and converted
	to a binary file with EXE2BIN.

	The binary driver file must be less than 64K in size...
	not a likely problem.

	Best of cosmic luck...

		%

VERSION		EQU	1		;VERSION NUMBER
SUBVERSION	EQU	1		;SUBVERSION NUMBER

_AOFF		EQU	6		;STACK OFFSET

VGA_WIDE	EQU	320		;WIDTH OF VGA SCREEN IN PIXELS
VGA_DEEP	EQU	200		;DEPTH OF VGA SCREEN IN PIXELS
VGA_SCREENSEG	EQU	0A000H		;SEGMENT OF VGA SCREEN
EGA_WIDE	EQU	640		;WIDTH OF EGA SCREEN IN PIXELS
EGA_DEEP	EQU	480		;DEPTH OF EGA SCREEN IN PIXELS
EGA_BYTES	EQU	80		;WIDTH OF EGA SCREEN IN BYTES
EGA_SCREENSEG	EQU	0A000H		;SEGMENT OF EGA SCREEN
MONO_WIDE	EQU	640		;WIDTH OF MONO SCREEN IN PIXELS
MONO_DEEP	EQU	480		;DEPTH OF MONO SCREEN IN PIXELS
MONO_BYTES	EQU	80		;WIDTH OF MONO SCREEN IN BYTES
MONO_SCREENSEG	EQU	0A000H		;SEGMENT OF MONO SCREEN

;THIS MACRO SELECTS AN EGA PLANE
EGAPLANE        MACRO	ARG1
		MOV	AL,2
		MOV	DX,03C4H
		OUT	DX,AL
		INC	DX
		MOV	AL,ARG1
		OUT	DX,AL
		ENDM

CODE		SEGMENT PARA PUBLIC 'CODE'
		ASSUME	CS:CODE

		ORG	0000H		;ORIGIN FOR LOADABLE DRIVER

		DB	'ALCHDRV2'	;SIGNATURE - DON'T CHANGE THIS

;THE FOLLOWING ARE THE POINTERS TO THE CALLABLE ROUTINES AND THE COMMON
;DATA. THE SEGMENTS ARE FILLED IN BY GRAPHIC WORKSHOP. DON'T CHANGE ANYTHING.
DISPATCH	PROC	FAR
		DW      VGA_ON		;FAR POINTER TO VGA MODE SELECT
		DW      ?
		DW	VGA_LINE	;FAR POINTER TO VGA LINE DISPLAY
		DW	?
		DW	VGA_OFF		;FAR POINTER TO VGA MODE DESELECT
		DW	?
		DW	VGA_PALETTE	;FAR POINTER TO VGA PALETTE SET
		DW	?
		DW	VGA_OVERSCAN	;FAR POINTER TO VGA OVERSCAN SET
		DW	?
		DW      EGA_ON		;FAR POINTER TO EGA MODE SELECT
		DW      ?
		DW	EGA_LINE	;FAR POINTER TO EGA LINE DISPLAY
		DW	?
		DW	EGA_OFF		;FAR POINTER TO EGA MODE DESELECT
		DW	?
		DW	EGA_PALETTE	;FAR POINTER TO EGA PALETTE SET
		DW	?
		DW      MONO_ON		;FAR POINTER TO MONO MODE SELECT
		DW      ?
		DW	MONO_FRAME	;FAR POINTER TO MONO PAGE DISPLAY
		DW	?
		DW	MONO_LINE	;FAR POINTER TO MONO LINE DISPLAY
		DW	?
		DW	MONO_OFF	;FAR POINTER TO MONO MODE DESELECT
		DW	?
		DW	0,0		;NULL ONE
		DW	0,0		;NULL TWO
		DW	0,0		;NULL THREE
		DW	0,0		;NULL FOUR

V_VGAWIDE	DW	VGA_WIDE	;VGA SCREEN WIDTH
V_VGADEEP	DW	VGA_DEEP	;VGA SCREEN DEPTH
V_VGASCRNSEG	DW	VGA_SCREENSEG	;VGA SCREEN SEGMENT
V_EGAWIDE	DW	EGA_WIDE	;EGA SCREEN WIDTH
V_EGADEEP	DW	EGA_DEEP	;EGA SCREEN DEPTH
V_EGABYTES	DW	EGA_BYTES	;EGA SCREEN BYTES
V_EGASCRNSEG	DW	EGA_SCREENSEG	;EGA SCREEN SEGMENT
V_MONOWIDE	DW	MONO_WIDE	;MONO SCREEN WIDTH
V_MONODEEP	DW	MONO_DEEP	;MONO SCREEN DEPTH
V_MONOBYTES	DW	MONO_BYTES	;BYTE WIDTH ON MONOCHROME SCREEN
V_MONOSCRNSEG	DW	MONO_SCREENSEG	;MONOCHROME SCREEN SEGMENT

;THESE VERSION NUMBERS REFLECT THE DRIVER TEMPLATE VERSION AND THE
;VERSION OF THE DRIVER ITSELF. YOU CAN CHANGE THE SUBVERSION VALUE
;TO REFLECT CHANGES IN YOUR DRIVER. THE VERSION VALUE MUST REMAIN
;UNCHANGED OR GRAPHIC WORKSHOP MAY REJECT YOUR DRIVER.
		DW	VERSION
		DW	SUBVERSION

;THE DESCRIPTION APPEARS IN THE F10 "ABOUT" BOX IN GRAPHIC
;WORKSHOP WHEN AN EXTERNAL DRIVER IS BEING USED. IT CAN'T
;EXCEED 24 CHARACTERS AND MUST BE NULL TERMINATED
		DB      'Standard VGA 320 x 200 ',0
DISPATCH        ENDP

;THIS ROUTINE SELECTS THE VGA 256 COLOUR MODE
;THE HEIGHT AND WIDTH OF THE IMAGE ARE ON THE STACK - THESE
;MAY BE USEFUL IF YOU WANT TO PICK ONE OF SEVERAL AVAILABLE
;MODES BASED ON THE AREA OF THE PICTURE TO BE DISPLAYED
VGA_ON		PROC	NEAR
		PUSH	DS
		MOV	AX,CS
		MOV	DS,AX
		MOV	CX,VGA_DEEP		;DEPTH OF SCREEN
		SUB	DX,DX
		MOV	SI,OFFSET SCREENTABLE

VGA_ON1:	PUSH	DX
		MOV	AX,VGA_WIDE		;WIDTH OF SCREEEN
		MUL	DX
		MOV	[SI],AX
		ADD	SI,2
		POP	DX
		INC	DX
		LOOP	VGA_ON1

		MOV	AX,0013H
		INT	10H
		POP	DS
		RETF
VGA_ON		ENDP

;THIS ROUTINE DISPLAYS A VGA LINE
;THE FIRST ARGUMENT ON THE STACK (2 WORDS) IS A FAR POINTER TO
;THE LINE. THE SECOND ARGUMENT IS THE LENGTH OF THE LINE IN PIXELS
VGA_LINE	PROC	NEAR
		PUSH	BP
		MOV	BP,SP
		PUSH	DS
		PUSH	ES

		MOV	SI,[BP + _AOFF + 0]	;OFFSET OF SOURCE
		MOV	DS,[BP + _AOFF + 2]	;SEGMENT OF SOURCE

		MOV     BX,[BP + _AOFF + 6]	;GET LINE NUMBER
		CMP	BX,VGA_DEEP
		JGE	SHOWVGAX

		SHL	BX,1
		MOV	DI,CS:[SCREENTABLE+BX]

		CLD
		MOV	CX,[BP + _AOFF + 4]	;LENGTH OF MOVE IN BYTES
		CMP	CX,0
		JE	SHOWVGAX		;CHECK FOR NASTIES
		CMP	CX,VGA_WIDE
		JL      SHOWVGA1
		MOV	CX,VGA_WIDE
SHOWVGA1:	MOV	AX,VGA_SCREENSEG
		MOV	ES,AX
	REPNE	MOVSB

SHOWVGAX:	POP	ES
		POP	DS
		POP	BP
		RETF
VGA_LINE	ENDP

;THIS ROUTINE DESELECTS THE VGA 256 COLOUR MODE
VGA_OFF		PROC	NEAR
		MOV	AX,1200H
		MOV	BX,0031H
		INT	10H

		MOV	AX,0003H
		INT	10H
		RETF
VGA_OFF		ENDP

;THIS ROUTINE SETS THE VGA PALETTE
;THE FIRST ARGUMENT ON THE STACK IS A FAR POINTER TO
;THE PALETTE DATA. THE SECOND ARGUMENT IS THE NUMBER OF COLOURS.
VGA_PALETTE	PROC	NEAR
		PUSH	BP
		MOV	BP,SP
		PUSH	DS
		PUSH	ES
		MOV	AX,CS
		MOV	ES,AX

		MOV	SI,[BP + _AOFF + 0]	;OFFSET OF SOURCE
		MOV	DS,[BP + _AOFF + 2]	;SEGMENT OF SOURCE

		MOV	CX,[BP + _AOFF + 4]	;NUMBER OF COLOURS
		MOV	DI,OFFSET VGAPALETTE

                CMP	CX,0			;CHECK FOR NASTIES
		JG	GVP0
		JMP	GVPX

		;WE'LL SET THE PALLETTE USING DIRECT REGISTERS RATHER
		;THAN A BIOS CALL AS IT LOOKS NIVER

GVP0:		MOV	DX,03C6H
		MOV	AL,0FFH
		OUT	DX,AL

		MOV	BX,0

GVP1:		PUSH	CX
		MOV	DX,03C8H
		MOV	AL,BL
		INC	BX
		OUT	DX,AL

		INC	DX

		LODSB
		SHR	AL,1
		SHR	AL,1
		OUT	DX,AL

		LODSB
		SHR	AL,1
		SHR	AL,1
		OUT	DX,AL

		LODSB
		SHR	AL,1
		SHR	AL,1
		OUT	DX,AL

		POP	CX
		LOOP    GVP1


		COMMENT &

GVP0:           PUSH	CX
		LODSB
		SHR	AL,1
		SHR	AL,1
		STOSB
		LODSB
		SHR	AL,1
		SHR	AL,1
		STOSB
		LODSB
		SHR	AL,1
		SHR	AL,1
		STOSB

		POP	CX
		LOOP	GVP0

		MOV	AX,1012H                ;POINT TO THE PALETTE
		MOV	BX,0000H
		MOV	CX,256
		MOV	DX,OFFSET VGAPALETTE
		INT	10H

			&

GVPX:   	POP	ES
		POP	DS
		POP	BP
		RETF
VGA_PALETTE	ENDP

;THIS ROUTINE SETS THE VGA OVERSCAN.
;THE FIRST STACK ARGUMENT IS THE COLOUR NUMBER.
VGA_OVERSCAN	PROC	NEAR
		PUSH    BP
		MOV	BP,SP
		MOV	AX,1001H
		MOV	BX,[BP + _AOFF + 0]
		XCHG	BH,BL
		INT	10H
		POP	BP
		RETF
VGA_OVERSCAN	ENDP

;THIS ROUTINE SELECTS THE EGA 16 COLOUR MODE
;THE HEIGHT AND WIDTH OF THE IMAGE ARE ON THE STACK - THESE
;MAY BE USEFUL IF YOU WANT TO PICK ONE OF SEVERAL AVAILABLE
;MODES BASED ON THE AREA OF THE PICTURE TO BE DISPLAYED
EGA_ON		PROC	NEAR
		PUSH	DS
		MOV	AX,CS
		MOV	DS,AX
		MOV	CX,EGA_DEEP		;DEPTH OF SCREEN
		SUB	DX,DX
		MOV	SI,OFFSET SCREENTABLE

EGA_ON1:	PUSH	DX
		MOV	AX,EGA_BYTES		;WIDTH OF SCREEEN
		MUL	DX
		MOV	[SI],AX
		ADD	SI,2
		POP	DX
		INC	DX
		LOOP	EGA_ON1

		MOV	AX,0012H
		INT	10H
		POP	DS
		RETF
EGA_ON		ENDP

;THIS ROUTINE DISPLAYS AN EGA LINE
;THE FIRST ARGUMENT ON THE STACK (2 WORDS) IS A FAR POINTER TO
;THE LINE. THE SECOND ARGUMENT IS THE LENGTH OF THE LINE IN BYTES
EGA_LINE	PROC	NEAR
		PUSH	BP
		MOV	BP,SP
		PUSH	DS
		PUSH	ES

		MOV	SI,[BP + _AOFF + 0]	;OFFSET OF SOURCE
		MOV	DS,[BP + _AOFF + 2]	;SEGMENT OF SOURCE
		MOV     BX,[BP + _AOFF + 6]	;GET LINE NUMBER
		CMP	BX,EGA_DEEP
		JGE	SHOWEGAX

		SHL	BX,1
		MOV	DI,CS:[SCREENTABLE+BX]

		MOV	AX,0A000H
		MOV	ES,AX
		MOV	BX,[BP + _AOFF + 4]	;LENGTH OF MOVE IN BYTES

		MOV	CX,BX
		EGAPLANE	1
		CLD
		PUSH	DI
	REPNE	MOVSB
		POP	DI

		MOV	CX,BX
		EGAPLANE	2
		PUSH	DI
	REPNE	MOVSB
		POP	DI

		MOV	CX,BX
		EGAPLANE	4
		PUSH	DI
	REPNE	MOVSB
		POP	DI

		MOV	CX,BX
		EGAPLANE	8
		PUSH	DI
	REPNE	MOVSB
		POP	DI
		EGAPLANE	0FH

SHOWEGAX:	POP	ES
		POP	DS
		POP	BP
		RETF
EGA_LINE	ENDP

;THIS ROUTINE SETS THE EGA PALETTE
;THE FIRST ARGUMENT ON THE STACK IS A FAR POINTER TO
;THE PALETTE DATA. THE SECOND ARGUMENT IS THE NUMBER OF COLOURS.
EGA_PALETTE	PROC	NEAR
		PUSH	BP
		MOV	BP,SP
		PUSH	DS

		MOV	SI,[BP + _AOFF + 0]	;OFFSET OF SOURCE
		MOV	DS,[BP + _AOFF + 2]	;SEGMENT OF SOURCE

		MOV	CX,[BP + _AOFF + 4]	;NUMBER OF COLOURS
		SUB	BX,BX
                CMP	CX,16
		JLE	EGA_PALETTE1
		MOV	CX,16

EGA_PALETTE1:	MOV	BH,[SI]
		MOV	AX,1000H
		INT	10H
		INC	BL
		INC	SI
		LOOP	EGA_PALETTE1

		POP	DS
		POP	BP
		RETF
EGA_PALETTE	ENDP

;THIS ROUTINE DESELECTS THE EGA 16 COLOUR MODE
EGA_OFF		PROC	NEAR
		MOV	AX,0003H
		INT	10H
		RETF
EGA_OFF		ENDP

;THIS ROUTINE SELECTS THE 2 COLOUR MODE
;THE HEIGHT AND WIDTH OF THE IMAGE ARE ON THE STACK - THESE
;MAY BE USEFUL IF YOU WANT TO PICK ONE OF SEVERAL AVAILABLE
;MODES BASED ON THE AREA OF THE PICTURE TO BE DISPLAYED
MONO_ON		PROC	NEAR
		PUSH	DS
		PUSH	ES
		MOV	AX,CS
		MOV	DS,AX
		MOV	ES,AX
		MOV	AX,0011H
		INT	10H

		MOV	CX,MONO_DEEP
		SUB	DX,DX
		MOV	SI,OFFSET SCREENTABLE

MONO_ON1:	PUSH	DX
		MOV	AX,MONO_BYTES
		MUL	DX
		MOV	[SI],AX
		ADD	SI,2
		POP	DX
		INC	DX
		LOOP	MONO_ON1

		POP     ES
		POP	DS
		SUB	AX,AX
		RETF
MONO_ON		ENDP

UPDATE_MOVE	EQU	2
UPDATE_PAD	EQU	4
UPDATE_ADJUST	EQU	6

;THIS ROUTINE DISPLAYS A FULL MONOCHROME PAGE
;THE FIRST ARGUMENT ON THE STACK IS A FAR POINTER TO THE PAGE
;THE SECOND ARGUMENT IS THE WIDTH OF THE BITMAP (IN BYTES)
;THE THIRD ARGUMENT IS THE NUMBER OF LINES TO DISPLAY
;NOTE: THE SOURCE BUFFER MAY BE BIGGER THAN 64K.
MONO_FRAME	PROC	NEAR
		PUSH	BP
		MOV	BP,SP
		SUB	SP,UPDATE_ADJUST
		PUSH	DS
		PUSH	ES

		MOV	AX,MONO_SCREENSEG	;POINT TO THE SCREEN
		MOV	ES,AX
		MOV	AX,[BP + _AOFF + 4]    	;GET THE WIDTH OF MOVE
		MOV	[BP - UPDATE_MOVE],AX	;SAVE IT LOCALLY
		MOV	WORD PTR [BP - UPDATE_PAD],0	;SET ADJUSTMENT

		CMP	AX,MONO_BYTES		;IF THE MOVE IS LESS THAN
		JL	UPDATE0			;SCREEN WIDTH, GO FOR IT

		SUB	AX,MONO_BYTES		;ELSE, SET MOVE WIDTH
		MOV	[BP - UPDATE_PAD],AX	;...AND THE AMOUNT TO

		MOV	AX,MONO_BYTES		;...ADJUST THE POINTER
		MOV	[BP - UPDATE_MOVE],AX	;...AFTER EACH LINE

UPDATE0:	MOV	SI,[BP + _AOFF + 0]	;OFFSET OF BITMAP
		MOV	DS,[BP + _AOFF + 2]	;SEGMENT OF BITMAP
		MOV	CX,[BP + _AOFF + 6]	;NUMBER OF LINES

		CLD				;CLEAR DIRECTION FLAG
		SUB	BX,BX

UPDATE1:	PUSH	CX			;SAVE COUNT (LINE NUMBER)

		MOV	DI,CS:[SCREENTABLE + BX]
		ADD	BX,2			;POINT TO NEXT LINE

		MOV	CX,[BP - UPDATE_MOVE]	;GET THE MOVE SIZE
	REPNE	MOVSB				;DO THE MOVE

		ADD	SI,[BP - UPDATE_PAD]	;ADJUST THE POINTER

		CMP	SI,0F800H		;ARE WE WITHIN 2K OF TOP?
		JL      UPDATE2			;IF NOT, CARRY ON

		MOV	AX,SI			;SEE HOW MANY SEGMENTS ARE
		MOV	CL,4			;...IN SI (SI DIV 4)
		SHR	AX,CL

		MOV	CX,DS			;ADD THEM TO THE DATA SEGMENT
		ADD	CX,AX			;...(YOU CAN'T JUST ADD DS,AX)
		MOV	DS,CX
		AND	SI,000FH		;ADJUST SI (SI MOD 16)

UPDATE2:	POP	CX			;GET COUNT BACK
		LOOP	UPDATE1                	;DECREMENT AND LOOP

		POP	ES
		POP	DS

		ADD	SP,UPDATE_ADJUST
		POP	BP

		RETF
MONO_FRAME	ENDP

;THIS ROUTINE DISPLAYS A SINGLE MONOCHROME LINE
;THE FIRST ARGUMENT ON THE STACK IS A FAR POINTER TO THE LINE
;THE SECOND ARGUMENT IS THE LINE NUMBER
;THE THIRD ARGUMENT IS THE WIDTH OF THE BITMAP (IN BYTES)
MONO_LINE	PROC	NEAR
		PUSH	BP
		MOV	BP,SP

		PUSH	DS
		PUSH	ES

		MOV	AX,MONO_SCREENSEG	;POINT TO THE SCREEN
		MOV	ES,AX

		MOV	CX,[BP + _AOFF + 6]    	;GET THE WIDTH OF MOVE
		CMP	CX,0
		JE	MONO_LINE2
		CMP	CX,MONO_BYTES
		JL	MONO_LINE1
		MOV	CX,MONO_BYTES

MONO_LINE1:	MOV	SI,[BP + _AOFF + 0]	;OFFSET OF BITMAP
		MOV	DS,[BP + _AOFF + 2]	;SEGMENT OF BITMAP
		MOV	BX,[BP + _AOFF + 4]	;NUMBER OF LINE
		SHL	BX,1

		CLD				;CLEAR DIRECTION FLAG
		MOV	DI,CS:[SCREENTABLE + BX]
	REPNE	MOVSB				;DO THE MOVE

MONO_LINE2:	POP	ES
		POP	DS

		POP	BP
		RETF
MONO_LINE	ENDP

;THIS ROUTINE DESELECTS THE 2 COLOUR MODE
MONO_OFF	PROC	NEAR
		MOV	AX,0003H
		INT	10H
		SUB	AX,AX
		RETF
MONO_OFF	ENDP

;THIS IS A LINE START LOOKUP TABLE

SCREENTABLE	DW	MONO_DEEP DUP(?)	;LINE START TABLE

;THIS IS WHERE THE VGA PALETTE IS STORED
VGAPALETTE	DB	768 DUP(?)		;PALETTE
CODE		ENDS
		END

```
{% endraw %}

## GRAFWORK.DOC

{% raw %}
```
GRAPHIC WORKSHOP 3.4
__________________________________________________________________

If you like this program, please do one of the following:

Go down to your local bookstore and buy a copy of "Coven: A 
Novel", by Steven William Rimmer, published by Ballantine Books. 
In Canada, try Coles... they usually have it. Read the book and 
tell your friends about it if you like it. Send us some comments 
about the book or a photocopy of the cover and we'll consider you 
a registered user of this program.

Alternately, send us $35.00, the normal user fee for this 
software. (The book is $3.95 or $5.50 in Canada: considerably 
cheaper than cash.) 

Registered users of this software are entitled to phone support, 
notification of upgrades and good karma. Please tell us the 
version number of your copy of Graphic Workshop when you 
register... we'll send you the most recent one immediately if 
it's newer than yours. Our address can be found at the end of 
this file.
__________________________________________________________________

----> NEW: 	TIFF and LBM details
		Grey scale TIFF support.
		WordPerfect Graphic file support.
		Microsoft Paint support.
		VGA palette adjustment.
		Driver update: Please see DRIVERS.DOC.
		Dot Matrix Printer support: Also see DRIVERS.DOC.
		Image rotation and flipping.
		IFF/LBM/CE support.
		Non-dither halftoning

Welcome to Graphic Workshop...


WHAT IT IS
__________

Graphic Workshop is a program for working with computer graphic 
files. It will handle most of the popular formats:

- MacPaint files
- PC Paintbrush files with up to 256 colours
- GEM/IMG files of the sort used by Ventura Publisher
- GIF files of any size and up to 256 colours
- TIFF files (with some restrictions)
- EPS files... encapsulated PostScript... for some operations
- WordPerfect graphic files.
- Microsoft Windows Paint (MSP) files.
- IFF/LBM/CE files (from Deluxe Paint, among others)

Graphic workshop is a simple, menu driven environment which will 
let you perform the following operations on the aforementioned 
files.

- View them.
- Convert between any two formats (with a few restrictions).
- Print them to any LaserJet Plus compatible or PostScript laser   
  and many dot matrix printers.
- Dither the colour ones to black and white.
- Reverse the monochrome ones black for white.
- Rotate and flip them.

Using Graphic Workshop, you can have your image files in the formats 
that your software wants to use them in, all without keeping 
track of numerous funky utilities. In addition, using the 
halftoning and dithering facilities of Graphic Workshop, you can 
convert full colour digitized photographs... most notably GIF 
files... for use as really excellent black and white clip art, 
suitable for inclusion in your documents.

Graphic Workshop will handle image files of any size. It will use 
extended or expanded memory if you have some, and disk space if 
you don't. It has a fast and easily understood user interface. 
Hopefully, it lacks even the merest vestiges of bugs... a likely 
story, but we hope so.

Graphic Workshop will drive all of the popular display cards. At 
present, it will support the following.

- CGA card (Ugh!)
- Hercules card
- EGA card
- VGA card
- Paradise Plus card
- Dell super VGA card (which is actually a Paradise card)
- ATI VGA Wonder card or ATI VGA Edge
- Headland Video 7 

As it comes out of the box... or out of the ZIP... Graphic 
Workshop is configured like this. If you want to change some of 
these parameters, see the installation section at the end of this 
file.

- Attempts to autodetect the display card type
- Uses expanded memory
- Uses colour text
- Prints titles on its hard copy
- Uses the following file name extensions:
	- MAC: MacPaint files
	- IMG: GEM/IMG files
	- PCX: PC Paintbrush files
	- GIF: GIF files
	- TIF: TIFF files
	- EPS: EPS files
	- WPG: WordPerfect graphic files
	- MSP: Microsoft Windows Paint files.
	- LBM: IFF files (Deluxe Paint and others)

FILE FORMATS
____________

A NOTE ABOUT MEMORY AND FILE FORMATS: One of the design criteria 
of Graphic Workshop is that it should have enough memory left 
over on a 640 kilobyte PC to be able to unpack a 640 by 480 
pixel, 256 colour file without having to resort to using extra 
memory, which would slow it down. This requires a minimum of 300 
kilobytes plus a bit for various internal things. To achieve 
this, the size of the program itself has to remain at a 
reasonable degree of hugeness. This is why, for example, the 
installation functions, GWSINSTL.EXE, is separate from the main 
program.
	The lesser used functions of Graphic Workshop, dithering 
and image transformation, have been implemented for the GIF file 
format only in order to keep the code size down. This is a bit of 
an inconvenience, as you will have to convert files in other 
formats to GIF to use these facilities with them, and then 
probably convert the results back to the format your files 
started off in. However, not implementing these features for all 
the formats supported by Graphic Workshop reduced the code size 
of the program by something over a hundred kilobytes by our 
estimates. The result is a much faster program at the expense of 
a bit of inconvenience.
	A long time ago someone decided that 640 kilobytes was 
more memory than anyone could possibly want. Someone should find 
the person responsible and paint something easily recognizable 
on his bald head, such that the rest of us will know where to 
throw things.


MacPaint files
These can come in two flavours. The most common one is straight 
ported MacPaint files, that is, files having the "MacBinary" 
header. The other is "headerless" files, these being the ones 
used with PFS:First Publisher. Graphic Workshop reads both types, 
but if you convert a file to MacPaint format you can select which 
of these two variations on the format you want to use.

Files converted to the MacPaint format from other formats will be 
cropped or padded out as necessary to fit in the MacPaint 
format's 576 by 720 format. Only monochrome files can be 
converted to MacPaint files, since MacPaint in a monochrome-only 
format.

GEM/IMG files
There are actually quite a few variations on IMG files. Only the 
monochrome ones are currently supported by Graphic Workshop. 
This is the format used by Ventura for its monochrome image file 
format. Any size monochrome image can be converted to this 
format.

PCX files
These are the files used to hold images for Z-Soft's PC 
Paintbrush package. These can range from monochrome to 256-colour 
images. All the various formats are supported by Graphic 
Workshop. Note, however, that Graphic Workshop will allow you to 
create 256-colour PCX files from GIF files which may be too large 
to work with using the current version of PC-Paintbrush.

GIF files
These can range from monochrome to 256-colour images in any size 
you can find 'em.

TIFF files
Graphic workshop supports monochrome and grey scale TIFF files. 
If you convert a colour file from PCX or GIF to TIFF, the 
resulting file will be a grey scale version of the colour file. 
These import into desktop publishing packages such as Ventura for 
sharp looking PostScript halftones.
	Note that due to the wide variations among the programs 
which produce TIFF files, Graphic Workshop would be lying rather 
badly if it claimed to be able to read all TIFF files. 

EPS files
These are encapsulated PostScript files, and are not strictly 
speaking image files at all. Graphic Workshop treats them a bit 
differently.
	Many EPS files which are created with the intent of 
importing them into a desktop publishing package include 
bitmapped "preview" images to be used for positioning. If you 
attempt to view an EPS file with Graphic Workshop, you will see 
the preview image. If there is no preview image in the EPS file 
you select, Graphic Workshop will tell you so.
	Graphic Workshop will print EPS files to a PostScript 
printer. It will also convert other graphic files into EPS files, 
suitable for use with desktop publishing programs. If you convert 
a colour graphic into an EPS file, the result will be a black and 
white halftone when you print it... pretty slick, this.

WPG files
These are the native import graphic files for WordPerfect. These 
files can contain both bitmaps and line art, or vector graphics. 
Graphic Workshop can only deal with the bitmapped parts of them. 
If you view, print or convert a WPG file containing both 
bitmapped and vector elements, the vector elements will be 
discarded.
	WPG files which refuse to read with Graphic Workshop are 
usually those which contain only vector elements and no bitmaps. 
If you use the F4 function on a WPG file which does not read, the 
comments field of the file information box will say "No bitmap" 
if this is the case.
	Graphic Workshop will deal with WPG files having one, 
four or eight bits of colour information, that is, monochrome 
files, sixteen colour files and 256-colour files. It doesn't work 
with two bit files as these are exceedingly rare.

MSP files
These are the image files used by the paint program which comes 
with Microsoft Windows. Don't confuse these with PCX files... 
some versions of Windows came with a Windows implementation of PC 
Paintbrush from ZSoft as well. The two programs... and the two 
file formats... are not compatible. MSP files are monochrome 
only.

IFF files
These started out on the Amiga. The IFF file standard is 
extremely flexible, and allows all sorts of things besides images 
to be stored in IFF files. IFF files are found on the PC having 
been ported from Amiga systems. They are also created on the PC 
by several applications such as Electronic Arts' Deluxe Paint 
package and Digital Vision's Computer Eyes video scanner board. 
In the first case they are given the extension LBM. In the second 
they are given the extension CE. The basic file structure is the 
same, however.
	The IFF format allows specific programs to include 
proprietary "chunks" in a file which no one else knows how to 
deal with without imparing the usefulness of the files in 
question for other applications. For example, Deluxe Paint's LBM 
files include a chunk called TINY, which contains a small version 
of the image in the file which will appear when you're selecting 
a file to load. Electronic Arts does not seem willing to part 
with the structure of this chunk, and as it's more of an ornament 
than an essential part of the IFF file structure, Graphic 
Workshop simply ignores it. It does not read TINY chunks, nor 
does it create TINY images in the IFF files it writes. As 
such,there will be no preview image in the Deluxe Paint file load 
dialog box when you select an LBM file created by Graphic 
Workshop, but the file itself will load fine.
	There are a few caveats in using IFF files under this 
version of Graphic Workshop. First off, the IFF files created by 
Graphic Workshop are not compressed as we have yet to find a 
compression algorythm which will create files that Deluxe Paint 
will accept reliably. As such, they tend to get a tad large... 
this will be remedied by the next revision.
	Secondly, odd size files converted into IFF files may not 
load into all applications which accept IFF files. In the next 
version Graphic Workshop will pad these out to dimensions which 
IFF based software finds more edible.
	If you encounter problems with IFF/LBM files please wait 
'til the next release of Graphic Workshop... all will (most 
likely) be well. We're in the process of trying to get Commodore 
to tell us how the little beasts actually work. As of this 
writing, the only documentation we've been able to find about the 
IFF format was a five kilobyte text file on a bulletin board.


MEMORY REQUIREMENTS
___________________

Graphic Workshop will use whatever memory you have going. If you 
ask it to do something which needs a large amount of memory, it 
will try to use your normal DOS memory, which is fastest. If 
there isn't enough DOS memory, it will use extra memory.
	There are three sorts of "extra" memory which Graphic 
Workshop can use, to wit, extended, expanded and virtual. 
Extended memory is also called XMS memory, and is only available 
on AT and 386 systems. Expanded memory, also called EMS or LIM 
memory, is available if you have a LIM board and driver in your 
machine. Virtual memory means using a big disk file and making 
believe it's memory. Virtual memory is very slow compared to real 
memory.
	You must tell Graphic Workshop what to do about extra 
memory when you install it. See the section on installation.
	Graphic Workshop can run in restricted memory, such as 
that which is found in a really old PC or when running "shelled 
out" of another program. However, it can do nasty things when 
it's really starved for memory. Some virtual memory operations 
will not work in this condition, and if it's really stuck for 
RAM... if there's only a few tens of kilobytes free... it may 
manage to crash. Try not to run it when there's almost no room 
left for it to store things. The help menu will tell you how much 
memory is free.


PRINTERS
________

You can print to any sort of LaserJet Plus compatible printer 
with one megabyte of memory or more or any sort of PostScript 
printer. You can print to any dot matrix printer which is 
supported by a Graphic Workshop external printer driver. These 
are described in greater detail in DRIVERS.DOC. Note that if you 
attempt to print PostScript data to a LaserJet or a dot matrix 
printer you'll get reams of meaningless ASCII text.
	Graphic Workshop allows you to print a picture in four 
resolution modes to laser printers, ranging from 75 to 300 dots 
per inch. This will determine the resulting size of your picture.
	Each page of Graphic Workshop output can include any 
combination of data about the picture on it you like. See the 
installation section for more information about enabling this 
feature. 
	The size and resolution of dot matrix printing is 
determined by the driver being used. 
	Note that if you have a printer for which there is no 
driver available, one of the Epson FX-80 drivers will probably 
work, as most dot matrix printers support the Epson FX-80 
standard. The print might not be as good as your printer can 
manage, but it'll be better than a blank sheet of paper.


RUNNING GRAPHIC WORKSHOP
________________________

To run Graphic Workshop, type GWS at the DOS prompt. Depending on 
your installation procedure, you may also want to type some 
command line switches, as described in the installation section.
	The main file screen will appear. Graphic Workshop always 
shows you all the names of the image files it knows how to deal 
with in the current directory, along with all the visible 
subdirectory names, if any. If you are in a subdirectory, you 
will also see a subdirectory entry which is two periods.
	The cursor mover keys will move the file selector bar 
around. If you move it to a directory entry... shown in dim 
text... and hit Enter, you will move into that directory. If you 
select the two period entry, you will move back up your directory 
tree by one step.
	If there are too many files in your current directory to 
see all at once, Graphic Workshop will organize them into pages. 
The PgUp and PgDn keys will step you through the pages.
	If you place the selector bar on a file name and hit 
Enter, Graphic Workshop will attempt to show you the file. It 
will start by showing you a wait box, which has a bar graph in it 
to show you the status of what you've asked Graphic Workshop to 
do. When the picture is fully unpacked, Graphic Workshop will 
switch to your display card's graphic mode and show you the 
picture.
	You can always abort an operation when the wait box is 
visible by hitting the Esc key.
	If the picture is larger than your screen, the cursor 
keys will allow you to pan around it.
	Esc will return you to the main screen.
	Several things can go wrong here. If you have installed 
Graphic Workshop for the wrong kind of display card, you might 
see random characters rather than a picture. In this case, check 
your installation.
	If Graphic Workshop could not find enough memory to unpack 
your picture into, it will abort the process and say so.
	Finally, if your picture requires more colours than your 
card can display, Graphic Workshop will tell you this. There is a 
specific exception to this. Graphic Workshop will show you GIF 
files having more than sixteen colours on a sixteen colour EGA 
card by fudging the colours. Bear in mind that while you'll get 
to see an approximation of the actual colours in the GIF file... 
it will not be the real thing.
	This does not work for 256 colour PCX files, just GIF 
files. You must have a VGA card of some sort to see 256 colour 
PCX files.
	You can see how many colours a colour image has by using 
the Get Info key, as discussed below.
	Note that you cannot view grey scale TIFF files without a 
VGA card.
	In the VGA display mode... and in the super VGA modes 
provided by external VGA drivers... you can make small 
adjustments to the VGA colour palette while a picture is being 
displayed. The 'r' and 'R' keys will increase and decrease the 
amount of red in a picture, the 'g' and 'G' keys will adjust the 
amount of green, the 'b' and 'B' keys will adjust the amount of 
blue. The 'i' and 'I' keys will adjust the overall intensity of 
the picture. The '=' key will return the picture to its normal 
state. Note that these adjustments only affect the picture that 
you're viewing... they do not alter the palette in the file on 
your disk.
	If you hear a beep while you're playing with these keys, 
you've gone to the limit of whichever of the adjustments you're 
using. Graphic Workshop will not allow you to adjust the palette 
to the point where the picture would start looking weird.
	Because Graphic Workshop will not allow you to actually 
distort the colour balance of the palette, there will be some GIF 
files which will not be adjustable using this feature.


OTHER KEYS
__________

If you hit "?", you'll see a menu of the keys which control the 
main file screen of Graphic Workshop. This box also tells you how 
much free DOS memory is available.

The Esc key will allow you to quit Graphic Workshop and return to 
DOS.

If you hit "T", the currently selected file name will be 
"tagged". The "U" key will untag it. The batch operations 
described below will work with multiple files if you have some of 
them tagged. If you hit "C", all the tags will be cleared.

If you hit "L", Graphic Workshop will allow you to log in a new 
disk drive. Note that this version of the software does not check 
for illegal drives or open drive doors. If you select an illegal 
drive, the familiar "Abort, Retry or Ignore" message will appear, 
but it will do so below the bottom of your screen, where you 
can't see it. Close the drive door and hit "R" or hit "A" to 
abort and return to DOS.

If you hit "D", you will be prompted to delete the current file. 
Note that this is not a batch command... it only works on one 
file at a time. 

If you hit F5, Graphic Workshop will shell out to the DOS prompt 
if there's enough memory. If you do this, Graphic Workshop will 
still be in memory. Type EXIT at the DOS prompt to return to it 
right where you left off. If you change drives or subdirectories 
while you have the DOS prompt active, Graphic Workshop will 
restore the previous drive and subdirectory when you return to 
it.

The F10 key will show you some information about Graphic Workshop 
as well as your current display adapter and memory settings. 


GRAPHIC FUNCTIONS
_________________

The graphic functions of Graphic Workshop are accessed through 
the function keys. They may be used on individual files or in 
batch mode. If no files are tagged, the operation you select will 
take place using the file name the selector bar is currently on. 
If one or more files are tagged, the operation will take place
on all the tagged files.
	Hitting Esc will abort any operation.

F1 - Print

	This function will print one or more files to the printer 
of your choice. Hit it and a menu of printers and resolution 
settings will pop up. As with all menus under Graphic Workshop, 
hitting Esc will make it go away if you discover you've gotten to 
it in error.
	Colour files printed to a PostScript printer will be 
halftoned. Colour files cannot be printed to a LaserJet or a dot 
matrix printer directly... you can dither them to black and 
white, though, as described in a moment.
	Big files can take a long time to print... be patient.
	All printing to laser printers takes place through LPT1. 
If you want to drive a different printer port, use the DOS MODE 
command to redirect the output of Graphic Workshop to a different 
port. Printing to dot matrix printers takes place through 
whatever port the driver was written to work with.
	One of the options in Graphic Workshop's installation 
involves the default screen size for printing colour graphics to 
PostScript printers. This can be set to anything you like for 
special effects. However, the best results can usually be had by 
allowing the PostScript printer to choose the optimum screen 
setting.
	Note that there's a potential memory problem involved in 
printing to a dot matrix printer under Graphic Workshop. We've 
never encountered it, but it could happen. In order to print to a 
dot matrix printer through a PDR driver, Graphic Workshop has to 
create a buffer which holds anywhere from eight to twenty-four 
lines of your image, depending on how many pins your printer's 
print head has. It also has to buffer the picture you're 
printing, of course.
	Now, it could happen that there's just enough memory to 
buffer the picture but not enough to create the line buffer. 
Graphic Workshop will refuse to print the picture under these 
conditions.
	This is a pretty unlikely occurrence. If you think it has 
happened, you can easily check it. See how much free memory there 
is by hitting a question mark, then open the F4 get info box. See 
how much memory your picture needs to unpack into. Whipping out a 
calculator, see how much memory is left over. Figure out how many 
bytes a line of your picture takes to hold by dividing the 
horizontal dimension by eight, rounding this number up if the 
result isn't even. Multiply this number by the number of print 
head pins in your printer... probably either eight or twenty-
four. If the result is bigger than the amount of free memory left 
when your picture is loaded, you've encountered the 
aforementioned condition.
	Note that none of this applies if the help box tells you 
there isn't enough memory to buffer your picture all by itself. 
If this happens, Graphic Workshop will use extended, expanded or 
virtual memory for your picture, leaving the DOS memory free for 
a line buffer. We'll assume here that there's at least enough 
memory free for a line buffer all by itself. Note that if you use 
expanded memory, Graphic Workshop will need thirty-two kilobytes 
of DOS memory to manage the expanded memory.
	If you happen to encounter this condition, you can trick 
Graphic Workshop into getting around it by forcing it to use 
extended, expanded or virtual memory rather than DOS memory for 
its picture buffer, thus freeing up the DOS memory for a line 
buffer. Simply shell out to DOS and run a second copy of GWS. 
Print from that. When you're done, quit the second copy and type 
EXIT at the DOS prompt to get back to the first copy.
	All this is a very unlikely situation, and one you'll 
probably never run into.	

F2 - Convert

	You can convert a file of any format into a file of any 
other format... with a few restrictions. The new file will have 
the same name as the original but a new extension. Converting 
PICTURE.MAC into an IMG file will create PICTURE.IMG. PICTURE.MAC 
will not be touched.
	As noted above, large images converted into MacPaint 
files will be cropped to fit. Colour files cannot be converted 
directly into monochrome-only formats, that is, to MacPaint, 
Microsoft Paint or IMG. 
	Colour files converted to TIFF will be written as grey 
scale files.
	EPS files cannot be converted to any other format.
	Any file can be converted into an EPS file. If you enable 
the preview option during installation, the resulting EPS file 
will have both the original image and a dithered preview image, 
making it ideal for use with a desktop publishing package such as 
Ventura. The results are stunning.
	Note that Ventura will print an EPS file to a PostScript 
printer. If you attempt to print a chapter with an EPS file in it 
to a LaserJet, Ventura will print the preview image.
	See the Ventura section below for more information about 
using EPS files with Ventura.
	Note that you can convert monochrome image files to EPS 
files, but there's no good reason for doing so.
	EPS files are huge, far larger than a compressed image 
would be. Leave lots of disk space if you intend to use one. As 
a rule of thumb, you can figure the size of a colour image packed 
into an EPS file as being 

	width * depth * 2 plus a few hundred bytes

	The width and depth can be worked out using the Get Info 
function, below.
	EPS files created by Graphic Workshop do not have 
trailing showpage operators... ignore this remark if it doesn't 
mean anything to you.
	Note that you can batch convert any mixture of file types 
using Graphic Workshop. Any files which are inappropriate for the 
conversion you've requested will simply be ignored. The ongoing 
status will appear at the bottom of the screen.

F3 - Dither/HT (Halftone)

	Dithering is a sort of magical process by which colour 
images can be converted into pretty excellent black and white 
versions for reproduction on a monochrome screen or a black and 
white laser printer. Graphic Workshop allows you to dither GIF 
files down to monochrome IMG, PCX, MSP, WPG or TIFF files.
	Dithering often works a lot better if you scale the 
original image up. Graphic Workshop lets you dither with images 
of anywhere from "size as" up to 500 percent expansion if you 
have enough memory.
	Aside from dithering to a file, you can dither to the 
screen to see what your selection of dithering parameters will 
look like.
	Dithering is a fairly slow process, and the better the 
dithering algorithm, the slower it gets. Big files and really 
good dithering can take half an hour or more, although the 
results are usually worth it.
	At its best, dithering can look better than halftoning, 
and a dithered file can be printed on both PostScript and 
LaserJet printers.
	If you have Graphic Workshop dither a file, it will 
create a new file for you of the type selected and with "D_" 
before the name. Thus PICTURE.GIF would be dithered to 
D_PICTUR.IMG, for example. PICTURE.GIF would be left untouched.
	If you want to dither a colour PCX file, you must first 
convert it to a GIF file. Dithering only works on colour GIF 
files.
	The simplest... and fastest... form of dithering is a 
Bayer dither. This does not produce great results, but it's 
extremely quick. The EPS preview images created by Graphic 
Workshop use Bayer dithering.
	The remaining three dithering algorithms use what is 
called "error diffusion". These produce really nice looking 
dithers, but they're quite slow. The fastest... and least 
attractive... is Floyd-Steinberg. The best... and by far the 
slowest... is Stucki. The Burkes dither is somewhere in the 
middle.
	All three of these dithers come in two flavours, UD... 
unidirectional... and BD... bidirectional. These options will 
produce slightly different results.
	You should plan to experiment with the dithering options 
of Graphic Workshop a bit to see what it's capable of.
	Dithering scans an image line by line, starting in the 
upper left corner and working down to the lower right corner. For 
this reason, you will find that if you rotate an image by ninety 
degrees, dither it and then rotate the dithered version by a 
further two hundred and seventy degrees, you'll get different 
results than you would have had you dithered the original image. 
	The last two items in the dither menu are not really 
dithering functions at all, but rather true halftones
They will produce sixteen and sixty-four grey level halftones 
respectively from a colour image. They do this by approximating 
the grey levels in dot sizes, just like newspaper halftones do. 
The destination image will always have four or eight times the 
dimensions of the source image. There is absolutely no advantage 
to expanding images for halftoning, so the expansion menu will 
not appear for sixteen and sixty-four level halftoning.
	Halftones often look more realistic than dithers. The 
drawback to using halftones is that the files can get enormous, 
and even a sicty-four grey level halftone doesn't really handle 
grey levels as well as an error diffused dither... although in 
some cases it may look better.

F4 - Get Info

	This box will show you some basic information about one 
or more selected files. Among other things, it will tell you how 
much memory the file needs to unpack into. You can use this 
number to figure out whether the file in question will fit in 
your available DOS memory or whether extra memory will be 
required, as discussed previously. The amount of available DOS 
memory is available by hitting the "?" key from within the main 
screen.
	The last field in this box displays the file comments if 
there were any, or "No comments". File comments are, in fact, 
Macintosh file names if they're present or, in some cases, 
information about the internal structure of the file. You will 
find Mac comments in some GIF files and many MacPaint files.
	Some file formats actually contain a lot more information 
than can be displayed in the normal Get Info box. TIFF files, for 
example, can conatin the name of the artist responsible for them, 
the type of software used to create them and so on. You can this 
sort of optional information for formats which support it by 
using the "details" option of the F4 box when it's available. The 
arrow keys will scroll you through the detail window. Details are 
available, for example, if you get information about TIFF and IFF 
files.
	You may need some external assiatnce in fully 
interpreting the details. 

F6 - Reverse

	This function will create a reversed version of any 
monochrome image file. The new file will have the same name as 
the original file, with "R_" appended to the front of it. Thus, 
reversing PICTURE.MAC will leave you with R_PICTUR.MAC. This 
function will ignore any files which are not monochrome.

F7 - Transform

	This key will pop up a menu offering you five image 
transformations. You can rotate an image in ninety degree 
increments and you can flip it horizontally or vertically. These 
functions work on images of any number of colours, but only if 
the source images are in the GIF format. You'll have to convert 
images from other formats to GIF if you want to use the 
transformation functions on them.
	Note that the ninety and two hundred and seventy degree 
rotation functions will take a very long time if your images are 
large and require the use of virtual memory... this assumes that 
you lack extended or expanded memory. Them's the breaks.
	Transformed images will be stored in files with "T_" in front 
of the names. Thus PICTURE.GIF will become T_PICTUR.GIF after any 
of the five transformations have been wrought upon it. If you 
rotate it and then flip the rotated image, for example, it will 
become T_T_PICT.GIF, and so on, with intermediate files along the 
way.


INSTALLATION
____________

Making permanent changes to the modifiable features of Graphic 
Workshop involves using the installer, GWSINSTL.EXE. The 
configuration of Graphic Workshop is handled by a separate 
program in order to keep GWS.EXE as small as possible, leaving 
lots of memory for putting graphics in.


Using the Installer

The GWSINSTL program actually modifies GWS.EXE. In order for it 
to work, GWS.EXE and GWSINSTL.EXE must be in the same directory 
and must be so named. Both programs must be of the same version. 
Be aware that as it directly modifies GWS.EXE, there is the 
outside chance that a bug in the installer might crop up and kill 
GWS.EXE beyond repair. Make sure you have a virgin copy of 
GWS.EXE somewhere before you use the installer.
	Place GWSINSTL.EXE and GWS.EXE in the same directory and 
type GWSINSTL. The installation screen will appear. It looks 
something like this:

               Screen colours: COLOUR
                  Memory type: VIRTUAL
                 Display type: EXTERNAL
              Default printer: LASERJET - 150 DPI
       PostScript Screen size: PRINTER'S DEFAULT
   Default dither destination: IMG
          Default dither type: FLOYD BIDIRECTIONAL
      Default conversion type: IMG
     Default expansion factor: SIZE AS
           PostScript preview: ON
      MacPaint file extension: MAC
       GEM/IMG file extension: IMG
           PCX file extension: PCX
           GIF file extension: GIF
          TIFF file extension: TIF
           EPS file extension: EPS
              Print filenames: ON
                  Print dates: OFF
             Print image size: OFF
          Print image colours: OFF
      Print output resolution: OFF
             Print EPS titles: ON
         External driver path: GRAFDRV.DRV

Move the section bar to the option you want to change and hit 
Enter to step through the available options. The PgUp and PgDn 
keys will show you additional options. When you're all done, hit 
F10 to save your changes or Esc to abort and return to DOS.
	The file name extension fields allow you to type in new 
extensions. Hit enter, change the field and hit enter again to 
save the changes.
	

The Configurable Options

These are the things which you can change in Graphic Workshop. 
These parameters can be changed permanently by using the 
installer or temporarily by using the command line switches. 
Having installed GWS.EXE for a particular set of options, you 
might find it convenient to boot it up with one or more of these 
switches to override the installed configuration for particular 
circumstances, such as to use virtual memory for a particularly 
large file when you know you won't have enough extended memory, 
or to use a different PostScript screen size.

Memory: 	
Select EMS for expanded memory.
Select XMS for extended memory.
Select VIRTUAL to use a disk file if you have neither extended 
nor expanded memory. Consult your system documentation to if 
you're unsure about the memory situation of your machine. Note 
that in order to use EMS or XMS memory, you will need the 
appropriate driver installed in your machine, as provided with 
your memory board. Also note that XMS memory will not work 
properly if you have VDISK.SYS installed.

Display card:
If you have a fairly typical display adapter, select AUTODETECT. 
If this doesn't work... if your card refuses to go into the 
graphics mode you expect... select the specific card type you 
have. If you have a VGA card and there's a driver available for 
it, you can set this to EXTERNAL. See below for some additional 
discussion of drivers. Otherwise, select the straight VGA setting.
	Note that some ATI EGA Wonder cards will not go into 
their Hercules graphics modes reliably under Graphic Workshop. 
We're looking into this one.

Print options:
This controls the printing of information at the bottom of each 
page of hard copy. You can enable none, some or all of these 
items, as follows:
	- Print the image file name.
	- Print the date.
	- Print the image dimensions.
	- Print the number of colours in the original image.
	- Print the resolution mode selected.
	- Print the EPS title for EPS files only.	

Preview:
You can enable or disable the creation of a preview image when 
Graphic Workshop converts files to the EPS format.

Screen size:
You can select the screen size for printing colour images as 
halftones to a PostScript printer. This does not effect 
converting colour images to EPS files. Unless you particularly 
want to create special effects, it's recommended that you leave 
this at its default setting. Note that having printed one image 
with a fixed size screen, all subsequent ones will print at that 
size until you reset you PostScript printer or specify a new 
screen size.

Command line switches

You can always see a complete list of these by typing GWS ? at the 
DOS prompt.

/EXT - use extended memory
/EXP - use expanded memory
/VIR - use virtual memory
/CGA - use CGA card
/HER - use Hercules card
/EGA - use EGA card
/PAR - use Paradise card
/ATI - use ATI VGA Wonder card 
/PRD - disable all print options
/S80 - set screen size to 80 lines
/S60 - set screen size to 60 lines
/S40 - set screen size to 40 lines
/S30 - set screen size to 30 lines
/S20 - set screen size to 20 lines
/S10 - set screen size to 10 lines
/SDF - set screen size to printer default
/PRE - enable EPS preview creation
/NOP - disable EPS preview creation
/PFN - enable printing filenames on hard copy
/PDT - enable printing dates on hard copy
/PPS - enable printing image size on hard copy
/PCL - enable printing number of colours on hard copy
/PRS - enable printing resolution on hard copy
/PET - enable printing EPS title on hard copy
/DRV - use the named external graphics driver (defaults to GRAFDRV.DRV)
/PRX - use the named external printer driver (defaults to PRINTER.PRD)

VENTURA PUBLISHER TRICKS
________________________

Graphic Workshop is great for getting images into Ventura 
Publisher documents. Here are a few tips for getting the most out 
of it.
	Monochrome bitmapped images... anything other than EPS 
files... should be converted into IMG files for use with Ventura. 
Note that while Ventura will import colour PCX files with up to 
16 colours, the results are rarely pretty. You'll do much better 
to halftone or dither colour PCX files for use with Ventura.
	Having poured an image into a frame, use the Sizing and 
Scaling box in the Frames menu to select "By Scale Factors." Set 
the scale width to the natural size of the image... as it 
defaults to... or to some integral multiple of it. This will 
eliminate distortion or plaiding of the image.
	Using EPS files is a bit different if you want to get the 
optimum image quality. (If you aren't too fussy, just pour 'em, 
stretch 'em and see what happens.) In this case, you must load 
the EPS file as line art... it's a PostScript file... and use the 
"Fit in Frame" option of the Sizing and Scaling box. Set the 
frame size initially to the natural size of the picture. If you are 
working in inches, you can work this out by dividing the 
dimensions of the image in pixels by 300. 
	If you have forgotten the dimensions of the original GIF 
file you halftoned the picture from, use the DOS TYPE command to 
look at the first few lines of your EPS file. You should see 
something like this:

	/width 640 def
	/depth 480 def

These are the natural dimensions of the image in pixels.
	The initial frame dimensions for this picture would be 
2.13 by 1.60 inches. 
	Next, select "By Scale Factors" and "Distorted". Set the 
scale dimensions to the same values as the frame size.
	You can now change the frame size if you want to. You can 
also expand the image dimensions by some integral amount.
	EPS files used this way can be cropped just like any 
other picture.
	In addition to EPS files, you can create halftones from 
colour images by converting them to grey scale TIFF files. There 
are several advantages to producing halftones this way rather 
than using EPS files. The files will be much smaller... by about 
half... and Ventura will import them with less requisite fiddling 
in the Sizing and Scaling box. In addition, Ventura allows you a 
great deal of control over the way the grey scale and screening 
information is handled in a TIFF file.
	You might want to experiment a bit with these two types 
of files to get a feel for the results produced by them in 
Ventura chapters.
	When you convert a GIF file to a TIFF or EPS file for use 
with Ventura, it's a good idea to dither it to an IMG file at the 
same time, renaming the resulting file so it has the same name as 
your TIFF or EPS file... with an IMG extension, of course. This 
will prevent Ventura from creating its own... almost always 
cruder... IMG file, making your pictures a lot easer to see in 
your Ventura chapters.


COREL DRAW TRICKS
-----------------

If you import bitmapped images into Corel Draw, you can decide 
how they'll be handled once they get there by choosing the image 
type you use. Imported PCX files will be scaled to an arbitrary 
size upon entering Corel Draw, with the result that it's almost 
impossible to adjust them to get a one to one relationship 
between the image pixels and the printer pixels. This will make 
many PCX print badly.
	TIFF files, on the other hand, import initially with one 
to one scaling. If you use TIFF files and leave them at their 
initial size, or stretch them to integral multiples of their 
original sizes, they'll print without distortion or plaiding.
	Grey scale TIFF files imported into Corel Draw come up as 
PostScript halftones... these can look very slick as part of a 
line drawing.
	Another book plug here: you might want to check out 
"Mastering Corel Draw" by Steven William Rimmer, published by 
Sybex Books. This will be available in May of 1990.


CUSTOM SCREEN DRIVERS
_____________________

If you have a super VGA card you can use its super VGA modes by 
having Graphic Workshop drive your card through an external 
driver. External drivers are little blocks of code which know all 
about your specific VGA card, and present it to Graphic Workshop 
in a useful form.
	In order to have Graphic Workshop use an external driver, 
you must select EXTERNAL for the display type in GWSINSTL and set 
the screen driver path to reflect the name and location of your 
driver. For example, if your driver was called TATUNG.DRV and it 
lived in the directory \COMMON\DRIVERS on drive C:, you would 
enter C:\COMMON\DRIVERS\TATUNG.DRV in this field.
	The drivers included with this version of Graphic 
Workshop are discussed in a separate file called DRIVERS.DOC.
	Note that every super VGA card must have a custom 
Graphic Workshop driver if it is to work in its super VGA modes. 
The driver for one brand of card will not work for a different 
card. If there's no driver for your particular card you can still 
use Graphic Workshop in its default VGA mode, but you'll see 
fewer pixels on your screen at a time.
	In future releases we hope to include a number of SVGA 
drivers. If you write one using the GRAFDRV.ASM skeletal driver 
and care to send us the source, we'll be pleased to include it 
with future releases of Graphic Workshop, with suitable credit.


CUSTOM DOT MATRIX PRINTER DRIVERS
_________________________________

Custom dot matrix printer drivers are used to support dot matrix 
printers or other similar output devices which Graphic Workshop 
doesn't know how to deal with directly. In order to load one, you 
must enable the external printer driver option in GWSINSTL and 
fill in the path to your printer driver.
	When Graphic Workshop boots up with an external printer 
driver in place, a ninth entry will be added to the printer 
selection menu, this being the name of the printer your driver 
drives.
	Only monochrome pictures can be printed to dot matrix 
printers... even if you have a colour dot matrix printer.


BUGS
____	

There are bound to be some. If you encounter a problem with 
Graphic Workshop, please contact us. We'll also be interested in 
hearing your suggestions for future releases of this software. If 
you encounter a file which Graphic Workshop won't read, we'll be 
interested in having a look at it.


COMING NEXT VERSION
___________________

These are the features we're working on for the next major 
release of Graphic Workshop:
	- Targa support
	- BMP support
If you register your copy of Graphic Workshop, you'll be notified 
when the next release is available.	


ROLL YOUR OWN
_____________

This is yet another book plug. If you're interested in writing 
programs which use graphics, you'll find everything you need to 
know in "The Book of Bitmapped Graphics", also by Steven William 
Rimmer. It's published by TAB books, (TAB book 3558) and should 
be available in August 1990. It features code to pack and unpack 
MacPaint, IMG, PCX, GIF and TIFF files, as well as chapters on 
screen drivers, dithering and printing.


MORAL DOGMA
___________

If you like this program and find it useful, you are requested to 
support it either by buying the book mentioned at the top of this 
file or by sending us $35.00. We'd rather you bought the book. 
This will entitle you to telephone support, notification of 
updates, a free copy of the latest version of Graphic Workshop 
and other good things like that. More to the point, though, it'll 
make you feel good. We've not infested the program with excessive 
beg notices, crippled it or had it verbally insult you after ten 
days. We trust you to support Graphic Workshop if you like it.
	Oh yes, should you fail to support this program and 
continue to use it, a leather winged demon of the night will tear 
itself, shrieking blood and fury, from the endless caverns of the 
nether world, hurl itself into the darkness with a thirst for 
blood on its slavering fangs and search the very threads of time 
for the throbbing of your heartbeat. Just thought you'd want to 
know that.

We are
                      Alchemy Mindworks Inc.
                          P.O. Box 313
                        Markham, Ontario
                             L3P 3J8
                             Canada

Other programs we've done that you might like include:

Scoop    -  MacPaint, GEM/IMG and PC Paintbrush file readers, 
            with Epson FX-80, LaserJet and PostScript printer 
            support. Drives CGA, EGA, VGA and Hercules cards. 
            Source code in Turbo C and Microsoft MASM is 
            available for this program.
HP_Slash -  Make LaserJet soft fonts smaller by selectively excising
            those characters you'll never use.
Calendar -  Slick perpetual calendar that tells you when the 
            equinoxes happen, what day Michaelmas fell on in 1705 
            and so on.
gemCAP   -  Capture graphics screen in GEM/IMG paint format, 
            suitable for inhalation into Ventura.
CPM2DOS  -  Read CP/M formatted disks on your PC.
ADDRESS  -  Memory resident envelope addresser with graphics.
VFM      -  Ventura soft font manager deluxe with a side of fries. 
            Adds new fonts and creates width tables with menu 
            driven simplicity.
MCOPY    -  Copying program which packs as many files as possible
            onto a floppy, pauses when the current floppy is
            full and asks for another one.
TCAP     -  A text screen capture program which generates GEM/IMG
            graphics that look like your text, all ready for inhalation
            into Ventura.
GRAFCAT  -  Prints a visual catalog of your image files, with 
            sixteen pictures to a page. Drives all LaserJet and 
            PostScript laser printers, and works with any mixture 
            of GIF, PCX, MAC and IMG files.
CROPGIF   - allows you to crop smaller fragments out of your GIF 
            files. Use graphic Workshop, above, to convert other 
            formats into GIF files for cropping. This program 
            uses a simple mouse interface to make cropping image 
            fragments no more complicated than using a paint 
            program Requires a Microsoft compatible mouse.

If you can't find them in the public domain, they're available 
from us for $20.00 each. Source is available for Scoop, for $25.00.


REVISION HISTORY
________________

For them what cares...

Version 3.4 - Fixed a bug in the monochrome EPS previews. There 
aren't many uses for monochrome EPS files. Improved the 
monochrome IMG file reader considerably... it now loads pretty 
well any two colour IMG file, even the weird ones which Ventura 
creates when it imports EPS files.

Version 3.3 - Added halftoning to the dither... now the 
dither/halftone... functions.

Version 3.2 - Added detailed tag analysis for tag based formats. 
Also added drop shadows to the menus and such... this adds four
bytes of code to the program. Fixed a bug of sorts in the TIFF 
display code which made it a bit finicky.

Version 3.1 - Improved several of the image compression 
functions... they're a lot more effective now. Also fixed a 
cosmetic bug in the wait box which caused it to completely close 
on files onler than about 1600 lines.

Version 3.0 - Added descriptive comments to some of the F4 Get 
Info functions. Added IFF/LBM/CE support.

Version 2.9 - Fixed a potential bug in the PCX palette code, 
added file renaming in the finder. Also, one of our users pointed 
out that the compiler was adding a debug table to the final EXE 
file without being asked to do so. Eliminating this has made the 
code about twenty kilobytes smaller. Thanks, Don... things you 
learn...

Version 2.8 - Added loadable drivers for dot matrix support, 
fixed a few obscure bugs in the printing and display code. Added 
image rotation and flipping.

Version 2.7 - Added VGA colour adjustment in the view mode. Added 
Microsoft Windows Paint (MSP) file support. One might ask why... 
Microsoft Windows Paint is not one of the leading lights in 
digital artistry. It was mostly in the interest of completeness. 
We had the format details and it was a hot Saturday afternoon 
with nothing better to do.

Version 2.6 - Added WordPerfect Graphics support, fixed a bug 
which kept some EGA cards from autodetecting properly, made the 
TIFF and IMG packing code tighter still for large images. Fixed a 
bug in the grey scale TIFF printing function.

Version 2.5 - Fixed a bug in the monochrome GIF file decoder 
which caused files with horizontal dimensions not an even 
multiple of eight to display incorrectly... but only on Tuesdays.

Version 2.4 - Fixed some bugs in the external super VGA graphics 
drivers. Be sure to read DRIVERS.WS if you use and external 
driver.

Version 2.3 - Added grey scale TIFF support (at last). Removed 
the built in Paradise Plus and ATI VGA Wonder card drivers in 
favour of the external ones, which frees up a bit of memory and 
makes maintaining these drivers much simpler. Improved the TIFF 
file creation routines, such that they now conform to TIFF 5.0, 
and will import into most applications which accept TIFF, 
including Corel Draw... which is a bit particular about the sorts 
of TIFF files it want to deal with. Fixed a bug in the expanded 
memory manager which caused a few hangs on really immense files.

Version 2.2 - Fixed a bug in the dithering code. This would cause 
some machines to hang if an attempt was made to dither colour GIF 
files to the screen with an external VGA driver loaded. Nasty but 
obscure.

Version 2.1 - Added Macintosh GIF file reading. Macintosh GIF 
files ported to a PC have a 128 byte "Macbinary" header before 
the GIF file proper. Graphic Workshop now detects this, gets 
around it and reads the GIF information normally. Also added a 
comment field to the F4 file information box. This will display 
the Macintosh file names of GIF and MacPaint files with Macbinary 
headers. Fixed some very obscure bugs in the IMG and TIFF file 
compression routines. These would occasionally cause very large 
dithered files to compress incorrectly.

Version 2.0 - Fixed a fairly obscure bug in the 16 colour PCX 
file compression code. 

Version 1.9 - Added image reversal for monochrome files. The 
menus got larger.

Version 1.8 - Added monochrome GIF file packing... monochrome 
files in other formats can now be converted into GIF files. Added 
an external driver for Headland Technologies Video Seven VGA 
cards. Fixed (or rather sidestepped) a weird bug in the EPS 
preview code which very occasionally generated unreadable preview 
images.

Version 1.7 - Added loadable custom drivers for super VGA cards 
other than the ones supported by the built in drivers.

Version 1.6 - Fixed a bug in the TIFF decoder and another really 
tiny one in the file finder. Gettin' down to the aphids and fleas 
now.

Version 1.5 - Added file deletion and fixed an obscure bug in the 
dithering code. Added EGA palette reduction for GIF files.

Version 1.4 - Fixed a bug in the file finder that kept batch 
processes from working across multiple pages. Also, a cosmetic 
bug the in the wait bar graph that happened on files longer than 
about two thousand lines. 

Version 1.3 - Fixed a few persistent bugs in the ATI VGA Wonder 
card driver. ATI cards were put in this dimension to vex us.

Version 1.2 - Fixed several bugs which prohibited PCX to GIF 
conversion for 32 colour files, kept some extremely large 
monochrome PCX files from converting and so on.

Version 1.1 - Added ATI VGA Wonder card driver

Version 1.0 - Sprung GWS on an unsuspecting universe.


SOURCE CODE
___________

After considerable meditation and several bad experiences, we 
have decided not to release the source code for Graphic Workshop. 
We do licence parts of it for specific applications... if you 
want more information about using some of the functions of 
Graphic Workshop in your software, please contact us.


BUNDLING GRAPHIC WORKSHOP
_________________________

If you'd like to include Graphic Workshop with your product, 
please get in touch with us. We have several ways to help you do 
this so your users get the most out of Graphic Workshop and we 
don't have to set our leather winged demon of the night on 'em.
	

LEGAL DOGMA
___________

The author assumes no responsibility for any damage or loss 
caused by the use of these programs, however it comes down. If 
you can think of a way a picture program can cause you damage 
or loss you've a sneakier mind than mine.

All the trademarks used herein are registered to whoever it is 
that owns them. This notification is given in lieu of any 
specific list of trademarks and their owners, which would not be 
as inclusive and would probably take a lot longer to type. 
 
That's it...


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2277

     Volume in drive A has no label
     Directory of A:\

    GRAFCT20 ZIP     34348   5-13-90   7:03p
    GRAFWK34 ZIP    221814   6-08-90  12:13p
    PKZ      EXE     21440   2-14-90  11:37a
    CRPGIF11 ZIP     33474   4-16-90   9:43a
    READ     ME        373   6-10-90   7:46p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       804   1-01-80   2:21a
    FILE2277 TXT      3997   7-17-90   9:54a
            8 file(s)     316290 bytes
                            3072 bytes free
