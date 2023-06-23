---
layout: page
title: "PC-SIG Diskette Library (Disk #3028)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3028/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3028"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## 256DEMO.DOC

{% raw %}
```

           +---------------------------------------------------+
           |  256 Paint - 256 Color VGA Image Workshop - Demo  |       1
           +---------------------------------------------------+

Load the 256DEMO image into 256 Paint.  Notice there are 9 images that
have been condensed (using the size feature, incidentally) and numbered as
well.  The following sections will step through the process necessary to
create a previously full-size (200x150) image bearing the likeness of its 
numbered counterpart in this image.  For each attempt, make sure that you 
choose the new command and select a size of 200x150.  It is also important to
make sure that the 256DEMO.PAL palette is loaded.  If you have loaded the
256DEMO image, don't worry, it already is.  Points are described by the
notation "Pn-m (x,y)" with n meaning Polygon n and m being the point
located at coordinates x and y.  Thus, P1-3 (200,1) is point 3 of the 1st
polygon and it should be selected at location 200,1.  After the last point
of polygon 1, you always need to hit the right button to tell 256 Paint
that the last point entered was the final point in the polygon.  It is
assumed that in the instructions below you do so before choosing P2-1.  In
the first demo below, all instructions are spelled out, notive that they are
ommitted in demos 2-9.


1.  Select Color [191]
    Select [Shape, Interpolation]
    P1-1 (1,1)       P1-2 (200,1)     P1-3 (200,150)   P1-4 (1,150)
    Hit [Right Mouse Button]
    Select [Yes] to "Continue?"
    P2-1 (100,75)    P2-2 (100,75)    P2-3 (100,75)    P2-4 (100,75)
    Select [32] Number of Colors
    Select [No] to "Colors Increase?"
    Select [Yes] to "Solid?"


2.  Select Color [128]
    Select [Shape, Interpolation]
    P1-1 (1,1)       P1-2 (200,1)     P1-3 (100,150)
    P2-1 (200,1)     P2-2 (200,1)     P2-3 (100,150)
    Select [16] Colors, Increase [Yes], Solid [Yes]


3.  Select Color [255]
    Select [Shape, Interpolation]
    Enter an odd shaped polygon like the one in 256DEMO2.
    Select all points in Polygon 2 at the center.
    Select [64] Colors, Increase [No], Solid [Yes]


4.  Select Color [112]
    Select [Shape, Interpolation]
    P1-1 (1,1)       P1-2 (200,1)     P1-3 (200,150)   P1-4 (1,150)
    P2-1 (100,1)     P2-2 (100,1)     P2-3 (100,150)   P2-4 (100,150)
    Select [16] Colors, Increase [Yes], Solid [Yes]

           +---------------------------------------------------+
           |  256 Paint - 256 Color VGA Image Workshop - Demo  |       2
           +---------------------------------------------------+


5.  Select Color [192]
    Select [Shape, Interpolation]
    P1-1 (1,70)      P1-2 (1,150)     P1-3 (200,150)   P1-4 (200,70)
    P2-1 (1,150)     P2-2 (1,150)     P2-3 (200,150)   P2-4 (200,150)
    Select [48] Colors, Increase [Yes], Solid [Yes]
    Select Color [64]
    Select [Advanced, Color Replacement]
    Select Whole Image for Rectangular Bounds
    Point to Color 0 (Black), Click Left Button
    Select [Advanced, Sunburst]
    Select Whole Image for Rectangular Bounds
    Select [16] Colors, Increase Outwardly [Yes]


6.  Select Color [80]
    Select [Shape, Interpolation]
    P1-1 (1,1)       P1-2 (200,1)     P1-3 (200,150)   P1-4 (1,150)
    P2-1 (200,150)   P2-2 (200,150)   P2-3 (1,1)       P2-4 (1,1)
    Select [16] Colors, Increase [Yes], Solid [Yes]


7.  Select Color [255]
    Select [Shape, Interpolation]
    P1-1 (1,1)       P1-2 (1,150)     P1-3 (200,150)
    P2-1 (1,1)       P2-2 (200,150)   P2-3 (200,150)
    Select [64] Colors, Increase [No], Solid [Yes]

    Select [Shape, Interpolation]
    P1-1 (1,1)       P1-2 (200,1)     P1-3 (200,150)
    P2-1 (1,1)       P2-2 (200,150)   P2-3 (200,150)
    Select [64] Colors, Increase [No], Solid [Yes]

    Select [Resize], Select (100,75), Scale Image [Yes]
    Select [Resize], Select (200,150), Scale Image [No]

    Select [Rectangle Operation, Copy], (1,1) x (100,75), Copy to (101,1)
    Select [Zoom], (101,1) x (200,75)
    Select [Tools, Horizontal Flip]
    Select [Zoom], Keep Zoomed Changes [Yes]

    Select [Rectangle Operation, Copy], (1,1) x (200,75), Copy to (1,76)
    Select [Zoom], (1,76) x (200,150)
    Select [Tools, Vertical Flip]
    Select [Zoom], Keep Zoomed Changes [Yes]

           +---------------------------------------------------+
           |  256 Paint - 256 Color VGA Image Workshop - Demo  |       3
           +---------------------------------------------------+


8.  Select Color [128]
    Select [Shape, Interpolation]
    P1-1 (200,150)   P1-2 (1,150)     P1-3 (100,1)
    P2-1 (100,110)   P2-2 (84,90)     P2-3 (116,90)
    Select [16] Colors, Increase [Yes], Solid [Yes]

9.  Select Color [191]
    Select [Shape, Interpolation]
    P1-1 (1,1)       P1-2 (200,1)     P1-3 (200,150)   P1-4 (1,150)
    P2-1 (140,35)    P2-2 (140,105)   P2-3 (60,105)    P2-4 (60,35)
    Select [48] Colors, Increase [No], Solid [Yes]

    Select Color [144]
    P1-1 (60,35)     P1-2 (140,35)    P1-3 (140,105)   P1-4 (60,105)
    P2-1 (104,72)    P2-2 (104,78)    P2-3 (96,78)     P2-4 (96,72)
    Select [48] Colors, Increase [Yes], Solid [Yes]

10. You're on your own here.  Try and recreate this image using the
    Interpolation routines.  Good Luck!
```
{% endraw %}

## README.DOC

{% raw %}
```
---------------------------------------------------------------------------
The following files should be on the 256 Paint Disk:

256PAINT.EXE  256 Paint main program executable file (version 2.0)
  VGADIR.EXE  Quick (*.VGA) file directory utility (version 1.1)

256PAINT.DOC  256 Paint main program documentation
 256DEMO.DOC  256 Paint Demonstration walk-thru documentation
  README.DOC  This file
REGISTER.DOC  A form you can use to simplify the registration process.

    EURO.CHR  .BGI Stroked Font from the BGI Toolkit
    SIMP.CHR  .BGI Stroked Font from the BGI Toolkit

 EXAMPLE.C    Turbo C code example
 EXAMPLE.PAS  Turbo Pascal code example
EXAMPLE2.PAS  Turbo Pascal Example using the Shortend PB256 Units.
              (See 256Paint.Doc p.20)

SPB256_4.TPU  Shortened PB256 Unit for use with TP v4.0 (See 256Paint.Doc p.20)
SPB256_5.TPU  Shortened PB256 Unit for use with TP v5.5 (See 256Paint.Doc p.20)
SPB256_6.TPU  Shortened PB256 Unit for use with TP v6.0 (See 256Paint.Doc p.20)

256PAINT.HLP  The Help File (Keep with 256 Paint.Exe)
 SVGA256.BGI  Jordan Hargave's 256 Color Graphics Device Driver
---------------------------------------------------------------------------
The following files are sample image files located on the 256 DRAW disk.
Some of them were originaly downloaded from a public domain Durham, NC
Bulletin Board System in the Compuserve (C) GIF format.  They were then
converted into ZSoft's (C) PCX format and then converted to VGA format
using 256 Plus.  Others were created using the 256 Draw environment.

 256DEMO.VGA  Sample VGA image, Look at this in conjunction with Demo.Doc
  PARROT.VGA  Sample VGA image, You'll remember this guy
   STONE.VGA  Sample VGA image, look for this from POD BAY in the future
SANDSTRM.PCX  Sample PCX image, A Current Pod Bay Release
   ALIAS.VGA  Sample VGA image, demonstrates the Anti-aliasing feature
   PHASE.VGA  Sample VGA image, demonstrates the Phase feature
SUNBURST.VGA  Sample VGA image, demonstrates the Sunburst feature
---------------------------------------------------------------------------
The following files are palette files that you may find useful.  Hint: If you
have converted a .GIF or .PCX file into VGA and really like the palette,
you can save the palette into its own palette file without saving the image
itself...just choose option 2 under the palette menu.

 256DEMO.PAL  Sample palette, used with the demo.
      BW.PAL  Sample palette, 64 color greyscale palette.
STANDARD.PAL  The Standard VGA palette used by 256 Paint, with a couple changes.
---------------------------------------------------------------------------
!!! A Note about device drivers
Version 1.0 of 256 Draw used Borland's VGA256.BGI device driver.  Due to
palette inconsistencies and the lack of ability to Putimage an entire screen,
Version 1.1 and all later versions use Jordan Hargrave's SVGA256.BGI device
driver.  For image's created with 256 Draw 1.0, don't worry, version 1.1
will comment about the image being non-compatible with the SVGA driver, but
will load it anyway, making the necessary adjustment.  The image will also be
saved as a version 1.1 compatible image!  For those of you who wish to create
images with version 1.1 but still prefer to use the VGA256.BGI driver, there
is a utility provided in 256 Plus.  For those of you who order 256 Plus, If you
have 720k capacity (default for orders not specifying), I will send you the
SVGA256.ZIP package as well.  You also might want to consider the PB256 Units
to avoid device driver usage altogether.  Those who wish to obtain more
information about the SVGA256.BGI driver, contact Jordan via the following:
*===============================*===========================================*
| Jordan Powell Hargrave	|   Internet:	jh5y@andrew.cmu.edu	    |
| 1000 Morewood Ave, Box #3277  |     Bitnet:	jh5y%andrew.cmu.edu@cmccvb  |
| Pittsburgh, PA 15213		|       UUCP:	uunet!andrew.cmu.edu!jh5y   |
| (412) 268-4493	 	|    Prodigy:	HXNJ79A			    |
|			  	| Compuserve:	[72510,1143]		    |
*===============================*===========================================*
```
{% endraw %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library. It has over 3000 different, and complete applications
for your every need.  Every shareware program we have is on one disc;
over 700 megabytes (unzipped) of software you can have immediate access
to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

#             #             #
PC-SIG UPDATES PC-SIG LIBRARY ON CD-ROM

For Immediate Release


PC-SIG LIBRARY ON CD-ROM UPDATED TO INCLUDE A NEW USER INTERFACE AND MORE
THAN 800 MB OF PROGRAMS June 21, 1992, SUNNYVALE, CALIF. - PC-SIG, Inc.
today announced availability of The Eleventh Edition of the PC-SIG Library
on CD-ROM.  The PC-SIG Library on CD-ROM contains over 800 megabytes of
shareware and includes more than 300 new programs, 550 updated programs,
and the addition of 75 megabytes of Windows 3.x shareware.  The
user-interface has been completely re-engineered to take advantage of the
HyperWriter! hypermedia and multimedia authoring system from NTERGAID, Inc.

The implementation of HyperWriter! provides significant performance and
ease of use enhancements.  Programs can access and download much faster
than with previous editions.  Programs have been reorganized and indexed
for better referencing.  Users just c lick with a mouse, or point with the
cursor, on a program name to see a complete description of the program.
Downloading or copying a program is handled automatically by HyperWriter!
Addition of a preview option is especially important for anyone who uses
images, icons, or fonts.  "You can preview the whole library of images to
find the right one," according to Bruce Kent, product development manager.
"This CD finally makes it possi ble to conserve your disk space and paper,
yet still have all the information you need to make an informed decision,"
said Kent.

All new and updated programs have been reviewed and tested by PC-SIG. Every
program goes through extensive virus checking using the most recent version
of VIRUSCAN from McAfee Associates, and other anti-virus software.
According to Kent, "In the ten ye ars we've distributed shareware, we have
never had a confirmed report of a virus on any of our distributed programs
or CD-ROMs."

The PC-SIG Library on CD-ROM, Eleventh Edition has a list price of $179.

Upgrades from previous editions are available for $99.

Users of PC-SIG's Essential Home & Business Collection CD-ROM can upgrade
for $120.

PC-SIG CD-ROMs are distributed worldwide through a network of distributors
and resellers. Based in Sunnyvale, Calif., PC-SIG, Inc. markets and
supports one of the world's largest collections of shareware for IBM PCs
and compatible systems.  PC-SIG also publishes Shareware Magazine, which is
devoted solely to shareware.  The magazine is availa ble by subscription
and on newsstands nationwide.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 640K memory, DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions, and a hard drive. Microsoft compatible
mouse supported and VGA highly recommended.

To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## FILE3028.TXT

{% raw %}
```
Disk No: 3028                                                           
Disk Title: *256 Paint                                                  
PC-SIG Version:                                                         
                                                                        
Program Title: 256 Paint                                                
Author Version: 2.0                                                     
Author Registration: $15.00                                             
Special Requirements: VGA and Microsoft compatible mouse. Hard drive rec
                                                                        
A 256 color VGA paint program and image editor. 256 Paint uses images   
in 320x200 mode. Images stored in Borland's .BGI format but .PCX        
loading and saving are also included. Many of the normal routines you   
would expect in a paint program are included: text, lines, circles,     
rectangles, ellipses and polygons. In addition, many advanced features  
such as color phasing, sun-bursting, anti-aliasing, and polygon         
interpolation have been implemented as well.                            
                                                                        
Full-screen image editing and palette RGB editing make this program a   
must-have for artists and programmers alike. Example code shows         
programmers how to load and display images in Pascal or C. Registration 
entitles you to even more support.                                      
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.25 for 5.25" or $3.75 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $12.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine )
(also The Encyclopedia of Shareware, and 5 free disks )

The Encyclopedia of Shareware special price at         $14.95  ______

The Essential Home & Business Collection for           $59.00  ______

*** PC-SIG Library on CD-ROM 11th Edition  ***         $159.00 ______
              NEW LOWER PRICE!

Upgrade to the 11th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $85.00  ______

Upgrade from ANY other shareware CD-ROM just           $99.00  ______

                                                    Subtotal   ______

If you want 3-1/2 inch disks please add .25 cents per disk     ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2316





                                *****




              TO PRINT THIS ORDER FORM, PRESS ANY KEY AND
              THEN "Quit" ONCE TO RETURN TO THE MAIN MENU.
                     SELECT "Print Reply Form."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3028

     Volume in drive A has no label
     Directory of A:\

    256PAINT ZIP    128961   6-05-92  12:50p
    FILE3028 TXT      2073   6-05-92  11:21a
    CDROM    TXT      3972   6-24-92   1:25p
    SHAREMAG TXT      1837   1-21-92   6:11a
    PCSIG    TXT      2335   1-21-92   6:09a
    GO       EXE     26022   1-10-92  12:14p
    GO-FORM  DAT      2401   1-20-92  10:24a
    GO-STRT  DAT       535   6-05-92  11:39a
    PKUNZIP  EXE     23528   3-15-90   1:10a
    SIGORDER TXT      3332   6-25-92   2:28p
           10 file(s)     194996 bytes
                          122880 bytes free
