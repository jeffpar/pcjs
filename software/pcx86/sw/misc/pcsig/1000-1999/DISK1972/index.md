---
layout: page
title: "PC-SIG Diskette Library (Disk #1972)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1972/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1972"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MOSAIX  DISK 1 OF 2"

    MOSAIX is a computerized jigsaw puzzle program that turns photographic
    quality color images into puzzles. The puzzles presented by MOSAIX may
    be created using a video image capture board, a black and white scanner,
    or a color scanner. Since MOSAIX can import standard PCX graphics
    files, puzzles may also be created using almost any PC paint program.
    Whether you scan your own PCX graphics files, create them in a paint
    program, have personal photo's scanned, or use included PCX files,
    you'll have high quality screen images in your jigsaw puzzles.
    
    For those who do not have access to a color scanner or digitizing
    equipment, MOSAIX creators, Data Assist, provide a color image scanning
    service. Scan in your own photographs and custom create personal
    jigsaws. Since MOSAIX displays actual color pictures for its puzzles, a
    VGA, MCGA or EGA graphics system is highly recommended. The use of a
    mouse is optional.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1972.TXT

{% raw %}
```
Disk No: 1972                                                           
Disk Title: Mosaix  Disk 1 of 2                                         
PC-SIG Version: S1                                                      
                                                                        
Program Title: MOSAIX                                                   
Author Version: 1.0                                                     
Author Registration: $35.00                                             
Special Requirements: 384K RAM, CGA, EGA, VGA, 2 Floppy Disks or Hard Dr
                                                                        
MOSAIX is a computerized jigsaw puzzle program that turns photographic  
quality color images into puzzles.  The puzzles presented by MOSAIX may 
be created using a video image capture board, a black and white scanner 
or a color scanner.  Since MOSAIX can import standard PCX graphics      
files, puzzles may also be created using almost any PC paint program.   
Whether you scan your own PCX graphics files, create them in a paint    
program, have personal photo's scanned, or use included PCX files,      
you'll have high quality screen images in your jigsaw puzzles.          
                                                                        
For those who do not have access to a color scanner or digitizing       
equipment, MOSAIX creators, Data Assist, provide a color image scanning 
service.  Scan in your own photographs and custom create personal       
jigsaws.  Since MOSAIX displays actual color pictures for its puzzles, a
VGA, MCGA or EGA graphics system is highly recommended.  The use of a   
mouse is optional.                                                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MOSAIX.DOC

{% raw %}
```

                                   MOSAIX
                                 Version 1.0
                                 01-Jul-89

Copyright (c) 1989 - Data Assist, All Rights Reserved.

                                REGISTRATION

MOSAIX is distributed under the Shareware concept. If you continue to use
MOSAIX, you are expected to register. Registration is only $35. For an
additional $10 you will receive an update and the ARGUS graphics utility.
As an added bonus for your registration, you will receive one FREE color
scan of any color print or 35mm slide that you enclose with your
registration.

Your slide or print will be returned along with a diskette of your photo
saved as a PCX graphics file. You will then be able to load your picture
with MOSAIX and use it as a jigsaw puzzle!

                      YOUR PICTURES AS MOSAIX PUZZLES

For best results your print should be 8" x 10" or smaller, but no smaller
than wallet size. Data Assist can also scan 35mm slides, but we prefer to
get standard size prints. The prints developed by Fotomat, K-mart or your
local drug store will scan very well. 

When selecting a picture to send, try to select a clear, colorful picture.
Complex pictures with large amounts of detail generally do not make good
MOSAIX puzzles. For best results, the photograph should be in landscape
mode; wider than it is high. Otherwise, we will need to crop the image in
order to create a full screen VGA or EGA puzzle.

Note: All slides and prints will be returned after processing. However,
Data Assist ASSUMES NO LIABILITY for any loss or damage to your property
during shipping or processing.
  
Please allow 2-4 weeks for processing.

                                INTRODUCTION

MOSAIX is a computerized jigsaw puzzle program. Unlike other PC based
jigsaw puzzle programs, MOSAIX is designed for use with photographic
quality color images, rather than cartoon pictures. The puzzles presented
by MOSAIX may be created using a video image capture board, a black and
white scanner or a color scanner. Since MOSAIX can import standard PCX
graphics files, puzzles may also be created using almost any PC paint
program.

For our customers who do not have access to a color scanner or digitizing
equipment, Data Assist provides a color image scanning service. 


                                     1



                                REQUIREMENTS

Since MOSAIX displays actual color pictures for its puzzles, a VGA, MCGA or
EGA graphics system is highly recommended. The program may also be used on
CGA graphics system; however, a CGA Graphics Library is not currently
distributed with the shareware MOSAIX package.

MOSAIX supports the use of a Microsoft, Logitech or Mouse Systems
compatible mouse. The use of a mouse is optional.

MOSAIX requires 384K bytes of memory. A Hard disk is not required. If a
hard disk is not available, the computer system must have one 720K or 1.2M
floppy disk drive, or two 360K floppy disk drives available. 

                                INSTALLATION

MOSAIX is distributed on two 360K 5.25" diskettes, or one 720K 3.5"
diskette. The first diskette contains the MOSAIX program, the VGA Graphics
Library, documentation and registration information. 

The second diskette contains the EGA graphics library. If your system is an
IBM PS/2 system, or any other system with a VGA compatible graphics card,
you do not need to install the EGA graphics library.

                           Hard Disk Installation

1. Create a subdirectory called MOSAIX on your hard disk.
2. Change Directory to the MOSAIX directory.
3. Copy the files from disk #1 to your hard disk.
4. For EGA users, delete VGA.MGL and copy EGA.MGL from Disk #2.
5. Type MOSAIX to start the program. 

                      Single Floppy Disk Installation

1. Create a bootable DOS system diskette. (720K or larger)
2. Copy the file MOSAIX.EXE to this diskette.
3. For VGA users, copy the file VGA.MGL (Disk #1)
4. For EGA users, copy the file EGA.MGL (Disk #2)
5. Type MOSAIX to start the program.

                       Dual Floppy Disk Installation

1. Create a bootable DOS system diskette in drive A:
2. Copy the file MOSAIX.EXE to the diskette in drive A:
3. Format a data disk in drive B:
4. For VGA users, copy the file VGA.MGL (Disk #1) to your B: disk.
5. For EGA users, copy the file EGA.MGL (Disk #2) to your B: disk.
6. Type MOSAIX B:VGA or MOSAIX B:EGA to start the program.





                                     2



                           OPERATING INSTRUCTIONS

MOSAIX is run by typing the command MOSAIX from the DOS '>' prompt. If you
have installed MOSAIX correctly, the program will display the title screen.
After a few seconds, the screen will dissolve and the main menu will
appear.

Dual Floppy disk users will need to specify the path to their graphics
diskette on the command line. For example:

     MOSAIX B:VGA     -or-     MOSAIX B:EGA

If you have purchased additional MOSAIX graphics libraries from Data
Assist, you can invoke MOSAIX and specify the name of an alternate graphics
library from the DOS command line. For example:

     MOSAIX VGA2     -or-     MOSAIX EGA

Registered users will be informed when additional MOSAIX graphics libraries
become available.


                               THE MAIN MENU
  
                                 Pictures 
 
The Pictures option displays a list of pictures in the MOSAIX Graphics
Library that you are currently using. The default libraries, VGA.MGL and
EGA.MGL, contain three sample pictures provided by Data Assist. These
pictures were produced by our Color Scanning Service. Your pictures will be
scanned using the same professional equipment.

Use the arrow keys and the Enter key to select a picture from the list. You
may select a picture from this list or load another picture using the Load
option. 
 
                              Load: PCX File  
 
The Load option is used to load a PCX graphics file. Most PC based paint
programs, scanners and video capture boards are capable of creating PCX
graphics files. Please read the section on PCX File Compatibility later in
this document.  
 
When you register your copy of MOSAIX and send a photograph to Data Assist,
you will be sent a PCX file of your photo. To load your photo into MOSAIX,
use the load option and enter the name of your PCX file. 







                                     3



                             Options: Keyboard 
 
MOSAIX can be configured to use the keyboard arrow keys or a mouse. The
default setting is for MOSAIX to use the keyboard. You do not need to
select this option unless you have switched to using the mouse and want to
switch back to using the keyboard.
 
                              Options: Mouse 
 
Use the Mouse option if you prefer to use your mouse to select and move the
puzzle tiles. In order for MOSAIX to properly use your mouse you must
install a mouse software driver during your system start up. Please refer
to your mouse documentation for specific information regarding installation
of your mouse software. 

Note: The mouse is only functional while in graphics mode. The keyboard
must be used to select items from the main menu.
 
                             Options: Sound-On 
 
Whenever you move a puzzle tile to its correct screen location, MOSAIX will
produce a sound. This feature makes the puzzle easier to solve since MOSAIX
will inform you when you have moved a tile to its correct screen location.
 
                            Options: Sound-Off 
 
This option disables MOSAIX from producing a sound whenever you move a
puzzle tile to its correct screen location. Selecting this option will make
the puzzle more difficult to solve. 
 
                              Start: Level-1 
 
Level 1 is the easiest of the three levels of play. The puzzle is divided
into 25 tiles. The picture will display for a few seconds and will then be
scrambled. This level is recommended for small children. 
 
                              Start: Level-2 
 
Level 2 is the medium level of play. The puzzle is divided into 50 tiles.  
 
                              Start: Level-3 
 
Level 3 is the most difficult level of play. The puzzle is divided
into 100 tiles.  
 
                              Start: View-It 
 
This option will display a picture, but will not scramble it. When you are
finished looking at the picture, press the ESC key to return to the main
menu. 
 


                                     4



                                   Help 
 
The help menu provides a quick introduction to MOSAIX as well as some
additional information about the services offered by Data Assist. 
 
                             USING THE KEYBOARD

While the puzzle is displayed on the screen, you must use the arrow keys to
select and move tiles. 

Press the Enter key to pick up a tile. You may then move the tile around
the screen using the arrow keys. Press the Enter key once more and the
original tile and the current tile will swap places.

If you have picked up a tile and then decide that you do not want to move
it, you may press the ESC key to cancel the move. However, once you have
swapped two tiles, you can not cancel the move. 

There are several function keys that may be used, either in keyboard mode
or in mouse mode. They are:

    Alt-L ... Move the puzzle Left one tile. 
    Alt-R ... Move the puzzle Right one tile. 
    Alt-U ... Move the puzzle Up one tile. 
    Alt-D ... Move the puzzle Down one tile. 
    Alt-K ... Switch to using the Keyboard. 
    Alt-M ... Switch to using the Mouse. 
    Alt-V ... View the completed picture. 
              Press the ESC key to return to the puzzle.
    Alt-Q ... Quit this puzzle. 

Note: Alt-V can not be used if you are in the process of moving a tile.
This function may only be used while you are selecting a tile.
 
                              USING THE MOUSE

If you selected the mouse option, either through the main menu or via the
Alt-M function keys, you may use the mouse to select and swap tiles. 

Move the outline box to the tile that you wish to move. Click any mouse
button to select the tile. Move the tile around the screen by again moving
the mouse. Press any mouse key again and the original tile and the current
tile will swap places.

Note: The Alt-Keys and the ESC key may be used while the mouse is active.
The arrow keys should not be used in conjunction with the mouse!







                                     5



                               ERROR MESSAGES
 
Unable to find a MOSAIX Graphics Library. - MOSAIX was unable to locate a
VGA.MGL, EGA.MGL or CGA.MGL file on your system. Install one of these
files. If you have installed MOSAIX on a dual floppy drive system, you must
specify the path and filename of the Graphics Library on the MOSAIX command
line.
 
Unable to open Graphics Library: xxxxx - MOSAIX was not able to open the
specified Graphics Library. 
 
Please select or load a picture first. - You must select a picture from the
Picture menu or load a picture using the Load option. 
 
Unable to load picture xxxxxx from library. - MOSAIX was not able to read
the graphics library file. This error may indicate that your MGL file has
been damaged. Install a new MGL file on your system. 
 
Unable to load picture xxxxxx from disk. - MOSAIX was not able to read the
PCX file specified. This error may indicate that your PCX file has been
damaged. Specify a valid PCX file. 
 
Picture xxxxxx can not be used with version 1.0 of MOSAIX. - The PCX file
that you specified is valid, but will not work with this version of MOSAIX.
Contact Data Assist to purchase a MOSAIX program upgrade.  
 
Not enough memory to load picture. - MOSAIX does not have enough free
memory to load the selected picture. Remove all memory resident programs
from your system, then run MOSAIX again. 
 
Load failure for xxxxxx from library. - Please send a copy of the
xxxxxx.MGL file to Data Assist. 
 
Load failure for xxxxxx from disk. - Please send a copy of the xxxxxx.PCX
file to Data Assist. 
 
Program-crash: xxxxx, status=yyyyy. - Please report this error to Data
Assist. 















                                     6



                           PCX FILE COMPATIBILITY

Version 1.0 of MOSAIX is compatible with three PCX file types:

     320 x 200 x 4 color, CGA graphics.
     640 x 350 x 16 color, EGA graphics.
     320 x 200 x 256 color, MCGA and VGA graphics.

The next release of MOSAIX will provide PCX file support for:

     All Standard CGA graphic modes,
     All Standard EGA graphic modes,
     All Standard VGA and MCGA graphic modes,
     640 X 480 x 256 color, Super VGA graphics ***
     800 x 600 x 256 color, Super VGA graphics ***

*** Supported on Super VGA cards manufactured by Orchid, Video Seven,
Paradise and compatible Tseng based products. Customers who register for
the full ($45) MOSAIX package will receive this upgrade automatically. 

                           Incompatible PCX Files

Until recently, the 256 color PCX format was not well standardized. As
such, several vendors sell products that produce non-standard 256 color PCX
files. MOSAIX conforms to the latest standard for 256 color PCX files!

We have seen several products that create incompatible PCX files. If you
wish to use an image created by these products with MOSAIX, you must
capture the image using the ARGUS program available from Data Assist. 

                             APPLICATION NOTES

This section provides tips on converting images from other products to a
format compatible with MOSAIX. Please send us your tips!

                            Converting GIF Files

GIF is Compuserve's Graphics Interchange Format. There are several hundred
high quality, color pictures available in the Compuserve Picture Forum.
Many of these pictures are also available on various BBS systems and
through many Shareware vendors.

Use any GIF display program to display the picture. Then use ARGUS to
convert the picture into a PCX file. This procedure is an easy way to
create hundreds of MOSAIX puzzles! 

                PC Paintbrush, Paintbrush+, PC Paintbrush IV

The PCX files created by these ZSoft products are compatible with MOSAIX.
Some video modes are not currently supported but will be in the next
release of MOSAIX. 


                                     7



                               PC Paint Plus

Create a picture using PC Paint Plus. Use the Tools Option: Show Screen to
view the picture. Capture the picture using ARGUS.

                               Pictor / Grasp

Pictor is the paint program that comes with GRASP from Paul Mace Software.
The CGA and EGA mode PCX files created by Pictor are compatible with
MOSAIX. However, Pictor does not create compatible 256 color PCX files.

To create a 256 color MOSAIX puzzle, first use Pictor and create a .PIC
file. Exit Pictor and use SHOWPIC to display the picture. Use ARGUS to
convert the picture into a useable PCX file.  

                                  Splash!

Create a picture using Splash! Save the picture as a .SS file. Use the
SHOWSS program to display the picture and capture it using ARGUS. 

                                  ColoRIX

Create a picture using ColoRIX. Save the picture as a .SCI file. Use the
RIXLATE program to display the picture and capture it using ARGUS.

                              Deluxe Paint II

For EGA pictures: Create a picture using Deluxe Paint II. Save the picture
as a .LBM file. Use the CONVERT utility to convert the .LBM file to a .PCX
file. 

Example:  convert -d puzzle.lbm -p3 puzzle.pcx

This procedure does not work for 256 color VGA pictures.

                                Dr. Halo III

Create a .PIC file using DRHALO. Use the PRESENTS program to display the
picture and capture using ARGUS.

                               GEM Draw Plus

Create a picture using GEM Draw Plus. Select the 'To Output' menu option.
Output the picture to the screen and capture using ARGUS.

                                   VGACAD

VGACAD is a Shareware paint program created by Lawrence Gozum and Marvin
Gozum, MD. Create a picture using VGACAD. Save the picture as a .BLD file.
Use the MVGAVU program to display the picture and capture it using ARGUS.



                                     8



                                 VGA Paint

You may use ARGUS to capture a picture directly from the VGA Paint screen.
Hint: If you press Alt-Ctrl-G just after pressing the left mouse button,
the mouse cursor will be invisible in the captured image.

                                PC-Key-Draw

Create and save the picture using PC-Key-Draw. Press F8 O (the capital
letter O) to invoke the picture view option. Press the space bar until the
desired picture is shown. Press Alt-Ctrl-G to capture the picture with
ARGUS.

                 Logitech PaintShow-Plus / ScanMan Scanner

Scan an image using the Logitech ScanMan Scanner. Use the Logitech PS-Plus
paint program to display the image and capture using ARGUS. Do not use the
TIF2PCX conversion utility provided by Logitech. This utility will not
create a MOSAIX compatible PCX file.
 
                               Computer Eyes

Computer Eyes is a video capture board available from Digital Vision.
Create a .CE file using the EYES program. Use the Digital Vision VIEW
program to view the .CE file and capture with ARGUS. This procedure works
for both VGA and EGA pictures. 
 
                         Jovian Logic VIA & SYLVIA

Jovian's 256 color PCX file format is not compatible with MOSAIX. Use
VU.COM to grab a video image. Store the image in .VI format. Exit VU.COM,
then use SHOW to display the .VI file. Capture the image using ARGUS. 

                               Kidwriter Gold

Kidwriter Gold is a storybook program for children. The package contains
over 200 images of people, monsters, animals, flowers, dolls, vehicles and
furniture that can be placed anywhere the screen. ARGUS will save a
Kidwriter Gold screen as a PCX file that may be used with MOSAIX. Ideal for
kids! 

                                      Other Paint Programs

Most paint programs have an option that enables you to view a picture
without showing all the icons and tools. Use this capability to display a
picture and capture using ARGUS. ARGUS will save the image as a MOSAIX
compatible PCX file.






                                     9



                                 TRADEMARKS

MOSAIX is a trademark of Data Assist.
ColoRIX is a trademark of RIX Soft Works, Inc.
ComputerEyes is a trademark of Digital Vision, Inc.
Dr. Halo III is a trademark of Media Cybernetics.
GEM Draw Plus is a trademark of Digital Research.
GIF is a trademark of Compuserve.
Kidwriter and Splash! are trademarks of Spinnaker Software.
PC Paint Plus is a trademark of Mouse Systems.
PaintShow and ScanMan are trademarks of Logitech.
Pictor and Grasp are trademarks of Paul Mace Software.
VIA and SYLVIA are trademarks of Jovian Logic.








































                                     10



```
{% endraw %}

## REGIS.DOC

{% raw %}
```

=================================================================
||                    REGISTRATION INVOICE                     ||
||                         FOR MOSAIX                          ||
=================================================================

Date: ____________________  MOSAIX Version: _____________________

Name: ___________________________________________________________

Company: ________________________________________________________

Address: ________________________________________________________

City: ________________________ State: __________ Zip: ___________


_________ MOSAIX Registration only ($35) ............ $__________
(Includes 1 Free Color Scan)

_________ MOSAIX Registration & Update ($45) ........ $__________
(Includes 1 Free Color Scan, Update and ARGUS Utility)

___ 1 ___ FREE Color Scan of your slide or print .... $__ 0.00 __
[ ] VGA / MCGA    [ ] EGA

_________ Additional Color Scans ($25 per image) .... $__________
[ ] VGA / MCGA    [ ] EGA

_________ 3.5" Disk Media Surcharge ($3)............. $__________

Disk format:                        SHIPPING ($3):    $__________

[ ] 5.25"                   OHIO SALES TAX (5.5%):    $__________

[ ] 3.5"                            TOTAL PAYMENT:    $__________

[ ] Mastercard      [ ] Visa       [ ] Check      [ ] Money Order

Card #: ___________________________________ Exp. Date: __________

Signature: ______________________________________________________

                      Optional Information

Computer: ____________________ Dos Version: _____________________

Memory: ______________________ Disk: ____________________________

Monitor: _____________________ Adapter:__________________________

Where did you get MOSAIX from: __________________________________

=================================================================
|| Please mail to:              | Phone Orders:                ||
||                              |                              ||
|| Data Assist                  | (614) 888-8088               ||
|| 651 Lakeview Plaza, Suite G  |                              ||
|| Columbus, Ohio 43085         | Thank you for your support!! ||
=================================================================

```
{% endraw %}

## SCAN.DOC

{% raw %}
```

                           COLOR SCANNING SERVICE

Data  Assist provides  a  complete  Color  Scanning  and  Image  Processing
Service. In addition to creating pictures  for our MOSAIX(tm) Jigsaw Puzzle
program,  we  can  also  scan pictures  for  almost  any  program  the uses
bitmapped color images.

We can convert scanned pictures into the following file formats:

     Ext       For use with
     ---       ------------
     BIT       Lotus Manuscript
     BLD       BSAVE - Basic Programs
     CUT       Halo I-II-III, Dr. Halo.
     GIF       Any Compuserve GIF Display Program.
     GX1       Show Partner F/X.
     IMG       GEM Paint.
     LBM       Deluxe Paint II.
     MAC       Macintosh.
     MSP       Microsoft Windows.
     PIC       Mouse Systems PC Paint+
     PIC       Pictor / Grasp.
     PCC       Z-Soft
     PCX       PC Paintbrush (Z-Soft)
     PCX       Any PCX compatible program.
     SCx       RIX/EGA and ColoRix programs.
     TIF       Aldus Pagemaker.
     TGA       Targa 16.
     WPG       Word Perfect 5.0

These file types are compatible with most graphics applications:

     Computer Based Advertising.
     Computer Based Instruction.
     Computer Based Training.
     Business Graphics.
     Desktop Publishing.
     Desktop Presentation.
     Educational Software.
     Image Databases.
     Paint Programs.

We can also convert pictures into Macintosh II and Amiga formats. 

Call us at (614) 888-8088 and ask to speak to one of our graphics experts.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1972

     Volume in drive A has no label
     Directory of A:\

    CGA      MGL      4772   7-01-89   1:00a
    FILE1972 TXT      2221  12-29-89   5:16p
    MOSAIX   DOC     19610   7-01-89   1:00a
    MOSAIX   EXE     98650   7-01-89   1:00a
    READ     ME        820   7-01-89   1:00a
    REGIS    DOC      2311   7-01-89   1:00a
    SCAN     DOC      1549   7-01-89   1:00a
    VGA      MGL    226670   7-01-89   1:00a
            8 file(s)     356603 bytes
                            1024 bytes free
