---
layout: page
title: "PC-SIG Diskette Library (Disk #2600)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2600/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2600"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
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

## FILE2600.TXT

{% raw %}
```
Disk No: 2600                                                           
Disk Title: GRAPHIC WORKSHOP,GRAFCAT,CROPGIF  #2                        
PC-SIG Version: S5.1                                                    
                                                                        
Program Title: Graphic Workshop                                         
Author Version: 5.1                                                     
Author Registration: $35.00                                             
Special Requirements: None.                                             
                                                                        
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
║  <<<< PC-SIG Disk #2600 (2of2) GRAPHIC WORKSHOP, GRAFCAT, CROPGIF >>>>  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To view instructions on how to unzip all three programs, type:          ║
║     TYPE READ.ME  (press Enter)                                         ║
║                                                                         ║
║ To print out the documentation of each of the three programs after      ║
║     unzipping them, type:  COPY <respective program filename>.DOC PRN   ║
║                            (press Enter)                                ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1991, PC-SIG Inc.
```
{% endraw %}

## GRAFCAT.DOC

{% raw %}
```
GRAFCAT 2.3

Graphics cataloging program deluxe: 
	Requires a laser printer... LaserJet Plus compatible or
	a Postcript printer... and some graphics to catalog. Works 
	with any mixture of MacPaint, GEM/IMG, PC Paintbrush PCX,
	TIFF, Microsoft Paint MSP, Deluxe Paint IFF/LBM, EPS 
	files with previews and GIF files.
__________________________________________________________________

If you like this program, please do one of the following:

	Go down to your local bookstore and buy a copy of "Coven: 
        A Novel", by Steven William Rimmer, published by 
        Ballantine Books. Read the book and tell your friends 
        about it if you like it. Send us some comments about the 
        book or a photocopy of the cover and we'll consider you a 
        registered user of this program.

        If your local bookstore doesn't have Coven, ask them to 
        order it for you.

        Alternately, send us $35.00, the normal user fee for this 
        software. (The book is $3.95 or $5.50 in Canada: 
        considerably cheaper than cash.) 

        Registered users of this software are entitled to phone 
        support, notification of upgrades and good karma. Please 
        tell us the version number of your copy of Grafcat when 
        you register... we'll send you the most recent one 
        immediately if it's newer than yours. Our address can be 
        found at the end of this file.

NOTE: If you're searching for Coven and having trouble finding 
it, you can mail order it from the following book store: 
Christies of Cookstown, P.O. Box 392, Cookstown, Ontario L0L 1L0, 
Canada, (705) 458-1562. The cost is $6.50, which includes 
the postage. The author would like to thank everyone who's thus 
far chased it down (or tried).
__________________________________________________________________

New features as of version 2.3
______________________________

-	Added PIC support

-	Added image scaling and BMP support

-	Largely rewrote the beast using the file handling code 
	from Graphic Workshop. It now works with virtually all 
	the popular PC based image files, handles all 256 colour 
	files correctly and so on.


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
find the one you want. The pictures can be any mixture of image 
files you like.

The program prints sixteen files to a page. Said pages come out 
of a laser printer... you'll need one of these or GRAFCAT won't 
be much use. The pictures are printed at three hundred dots to 
the inch, so they come out readable but pretty small... which is 
how so many make it onto a page.

The printer must be connected to LPT1 on your computer. You'll 
need at least a megabyte of memory in the printer.

GRAFCAT will print pictures up to 576 by 720 pixels in their 
entirety. This is the size of a MacPaint file. Confronted with 
files bigger than this, it will print the middle part of the 
image.

GRAFCAT can print a mixture of image types at once. Thus, if you 
just tell it to print *.*, it will sort out the file types it 
knows how to handle and print them, ignoring anything else. 
It assumes that the file extensions reflect the file types 
properly. The default extensions are as follows.

	- MAC: MacPaint files
	- IMG: GEM/IMG files
	- PCX: PC Paintbrush files
	- GIF: GIF files
	- TIF: TIFF files
	- EPS: EPS files
	- WPG: WordPerfect graphic files
	- MSP: Microsoft Windows Paint files.
	- LBM: IFF files (Deluxe Paint and others)
	- BMP: Windows 3 wallpaper files
	- PIC: PC Paint/Pictor/Grasp PIC files.

You can change any of them if you like.


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

Files which are too large for GrafCat to print in their entirety 
are usually cropped so you see the centre of the image. You can 
optionally have GrafCat scale files which are too big so the 
whole image will fit in its frame. This means that you'll lose 
some detail, but you'll see the whole pictures.

Scaling also takes longer than loading and cropping.

To enable the scaling option, add /F... fit to frame... to your 
GrafCat command line. For example

	GRAFCAT *.IMG /F

Black and white images which have been dithered from colour 
images do not scale well... very often you will not be able to 
make any sense of an image which is first dithered and the 
scaled. In these cases, it's probably better to have the pictures 
cropped and not see the whole thing. 

If you use Graphic Workshop to dither files, the names of the 
dithered files will always start with "D_" if you add /D to your 
GrafCat command line when /F is also optional, GrafCat will scale 
all oversize files except for those which are monochrome and have 
file names starting with "D_". In effect, this combination of 
switches will scale everything which is too big to print except 
large dithered monochrome files. 

It's all so simple a politician could use it... probably.


Printer Selection

GRAFCAT defaults to printing to a PostScript printer, but you can 
use it with a LaserJet printer if that's what you have. If you 
have a printer which can do both emulations, be advised that 
LaserJet printing is a great deal faster than PostScript printing 
is... at least so far as GrafCat is concerned.

You can set the default printer GrafCat will print to with the 
installer, as discussed below. You can override the default 
printer by using the command line switches:

	/P - PostScript printer
	/H - Hewlett Packard LaserJet Plus compatible printer

Note that if you print PostScript data to a LaserJet you'll get 
many pages of fairly meaningless PostScript code and if you print 
LaserJet data to a PostScript printer you'll probably hang it, 
necessitating a reboot.


Installing GrafCat
__________________

The GCTINSTL program allows you to configure GrafCat if you don't 
like the defaults as they stand. To use it, GrafCat must be named 
GRAFCAT.EXE and reside in the same subdirectory as GCTINSTL. Run 
GCTINSTL and a screen should appear with the configurable 
options.

The things you might want to change are the default printer and 
perhaps the file name extensions. Hit Esc to abort the changes or 
F10 to save them. You can run GCTINSTL as often as you like.


Notes about PIC files
---------------------
The structure of sixteen colour PIC files is a bit troublesome 
for GrafCat, requiring that the entire file be buffered before it 
can be printed. As such, unlike as for the other formats which 
GrafCat supports, printing a large PIC file requires that there 
be a lot of memory around.
	
Secondly, you'll find that if you have the /F switch active, 
there will be an inordinately long pause at the end of any 
picture which gets scaled.


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
file or by sending us $35.00. We'd rather you bought the book. 
This will entitle you to telephone support, notification of 
updates and other good things like that. More to the point, 
though, it'll make you feel good. We've not infested the program 
with excessive beg notices, crippled it or had it verbally insult 
you after ten days. We trust you to support GrafCat if you like 
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

GRAPHIC
 WORKSHOP - This is the last word in image programs. It converts, 
            prints, views, dithers, transforms, scales and 
            halftones MacPaint, GEM/Ventura IMG, PCX, GIF, TIFF, 
            WPG, MSP, IFF/LBM, BMP, PIC and EPS files. It drives 
            CGA, Hercules, EGA, VGA, Paradise, Video 7, Trident, 
            Hercules Graphics Station and ATI VGA Wonder cards. 
            It features batch processing, extended and expanded 
            memory support, an intuitive user interface and easy 
            to follow menus. It allows you to convert colour 
            image files into superb black and white clip art for 
            desktop publishing, among other things. 

VFM      -  Ventura soft font manager deluxe with a side of fries. 
            Adds new fonts and creates width tables with menu 
            driven simplicity.

CROPGIF   - allows you to crop smaller fragments out of your GIF 
            files. Use graphic Workshop, above, to convert other 
            formats into GIF files for cropping. This program 
            uses a simple mouse interface to make cropping image 
            fragments no more complicated than using a paint 
            program. Requires a Microsoft compatible mouse.

FI        - File Information... this is a small utiltity which 
            will examine mystery image files and tell you what 
            they are and some details of what's inside them. 

GIFINFO   - Creates catalog files from your GIF collection, 
            allowing you to store fifty or more miniature full 
            colour representations of GIF files on a single quad 
            floppy.

STORYTELLER -
	    A hypertext program with a mouse driven graphical 
            user interface which will allow you to create 
            reports, manuals and interactive fiction, among other 
            things, which has a tree stucture. Each page of a 
            storyteller document can lead to related sub-pages, 
            which can in turn have their own sub-sub pages, and 
            so on. It looks slick and is exceedingly user 
            friendly.

If you can't find them in the public domain, they're available 
from us for $35.00 each. 

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


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2600

     Volume in drive A has no label
     Directory of A:\

    CRPGIF11 ZIP     33474   4-16-90   9:43a
    GO       BAT        38   3-26-91   3:31p
    FILE2600 TXT      2739   3-28-91   9:39a
    GRAFCT23 ZIP     55915   9-22-90   9:55a
    PKZ      EXE     21440   7-21-89   1:01a
    READ     ME        359   3-26-91   3:38p
    GO       TXT       804   3-28-91   1:03a
            7 file(s)     114769 bytes
                           43520 bytes free
