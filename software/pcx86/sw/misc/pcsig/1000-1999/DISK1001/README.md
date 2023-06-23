---
layout: page
title: "PC-SIG Diskette Library (Disk #1001)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1001/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1001"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MACPASTE"

    Read, edit, save and print pictures orignally drawn with MacPaint on the
    Apple Macintosh.  MACPASTE lets you do this on your IBM-PC.
    
    It has many features such as: cut-and-truncate, line-drawing, paint,
    scroll, magnify and much more.  Printer parameters can be set from
    MACPASTE for printing ReadMac pictures.  MACSHOW shows sequential
    ReadMac pictures on the same drive and MANYMAC combines four ReadMac
    pictures into one.  MACBLANK creates a blank ReadMac picture which can
    then be edited with MACPASTE.  When printed, a ReadMac picture is
    surprisingly realistic and detailed in nature.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1001.TXT

{% raw %}
```
Disk No: 1001
Program Title:  MACPASTE version 2.10
PC-SIG version: 1.1

MACPASTE reads, edits, saves, and prints Readmac pictures.  A ReadMac or
a MacPaint picture are pictures that originally had to be drawn with
MacPaint on the Apple Macintosh, but MACPASTE lets you do this on your
IBM-PC.  It has many editing features, such as cut-and-truncate
functions, a line-drawing function, a paint function, and much more.
Scrolling and magnify features are also included.  Printer parameters
can be set from MACPASTE for printing ReadMac pictures.  MacOki93 will
print a ReadMac picture on an Okidata 93 Microline printer.  MACSHOW
sequentially shows ReadMac pictures on the same drive, and MANYMAC
combines four ReadMac pictures into one.  MACFIX fixs the header records
on ReadMac files, so it can be read by other programs that require this
header.  MACBLANK creates a blank ReadMac picture which can then be
edited with MACPASTE.  When printed, a ReadMac picture is surprisingly
realistic and detailed in nature.

Usage:  Editing and Printing ReadMac Pictures.

Special Requirements:  CGA graphics card.

How to Start:  Type GO (press enter).

Suggested Registration:  Any amount sent is welcomed.

File Descriptions:

EXAMPLE  MAC  ReadMac picture designed with MACPASTE.
MACBLANK COM  Blank Readmac picture generator.
MACBLANK DOC  Documentation for MACBLANK.
MACFIX   COM  Readmac picture file header fixer.
MACFIX   DOC  Documentation for MACFIX.
MACOKI93 COM  Readmac printer program for Okidata 93.
MACOKI93 DOC  Documentation for MACOKI93.
MACPASTE COM  Readmac picture editor.
MACPASTE DOC  Documentation for MACPASTE picture editor.
MACSHOW  COM  Sequential readmac picture viewer.
MACSHOW  DOC  Documentation for MACSHOW.
MANYMAC  COM  Picture group creator.
MANYMAC  DOC  Documentation for MANYMAC.
CATALOG       Text file.
SEMPRINI      Text file.
UPDATE   TXT  Text on latest changes to MACPASTE.


PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  Disk #1001 MACPASTE  >>>>                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, Type:                        ║
║                        MANUAL (press enter)                             ║
║                                                                         ║
║ To start a program simply type in the name of the program you wish to   ║
║ run.  For example, if you wanted to run the MACPASTE program you would  ║
║ type:  MACPASTE (press enter)                                           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MACBLANK.DOC

{% raw %}
```
                       S E M P R I N I W A R E

                         MacBlank version 1.00

                             written by 

                           Brad Taliaferro  


                          Brought to you by

                      Scanline BBS (619-298-2023)
                                               



     This is a program to create blank readmac pics for your own creative 
editting with MacPaste or some other editor program.  To create a blank simply
invoke the program then press W for a white background, B for a black 
background, or G for a gray background.  The file created is BLANK.MAC, you may 
rename it to whatever you wish.

     Contributions are encouraged and suggestions are invited.  Send all 
correspondence to:

                        Bradford B. Taliaferro
                        c/o Dr. Sandra Linck
                        P.O. Box 135
                        Wellsboro, PA 16901


```
{% endraw %}

## MACFIX.DOC

{% raw %}
```
                       S E M P R I N I W A R E

                         MacFix version 2.00

                             written by 

                           Brad Taliaferro  


                          Brought to you by

                      Scanline BBS (619-298-2023)
                                               



     This program will fix the header records on readmac pictures.  Some 
programs such as MacPaint and CvtMac require true macintosh macpaint type 
headers.  Some programs, such as Fmac2com replace this header.  This can cause 
problems when converting to PC-Paint+ or when other programs need the header.  
MacFix should remedy this problem.  If anyone converts a picture with MacFix 
and then tries to read it with Macintosh MacPaint, please notify me of the 
result.  MacFix runs pretty quickly, so check before assuming that it hasn't 
worked.

     Contributions are encouraged and suggestions are invited.  Send all 
correspondence to:

                        Bradford B. Taliaferro
                        c/o Dr. Sandra Linck
                        P.O. Box 135
                        Wellsboro, PA 16901


```
{% endraw %}

## MACOKI93.DOC

{% raw %}
```
                        S E M P R I N I W A R E

                         MacOki93 version 1.00

                             written by 

                           Brad Taliaferro  


                          Brought to you by

                      Scanline BBS (619-298-2023)
                                               

     MacOki93 is a program to print a readmac picture on the Okidata 93 
Microline printer.  Usage is as follows:
             MACOKI93  filename [w] [h] [b]
The W option will print the file 50% of its original width.
The H option will print the file 50% of its original height.
The B option will print the file twice its height and width.
This program may work on other printers, but I have not had the opportunity to 
test it out.  It writes character 3 to enter graphics mode and characters 0 to 
127 for the line graphics characters.

     Contributions are encouraged and suggestions are invited.  Send all 
correspondence to:

                        Bradford B. Taliaferro
                        c/o Dr. Sandra Linck
                        P.O. Box 135
                        Wellsboro, PA 16901


```
{% endraw %}

## MACPASTE.DOC

{% raw %}
```
 
 
 
 
 
 
 
 
 
 
 
 













                    M A C P A S T E   v. 2.10

                          SEMPRINIWARE

                           written by

                     BRADFORD B. TALIAFERRO















                    Copyright September 1987


                 Brought to you by SCANLINE BBS
  Call their philo-graphic hot line BBS at 619-298-2023 (data)
                              INDEX






     Introduction ------------------------------------------  1

     Key Definitions and Function Outline  -----------------  3

     Program Notes  ----------------------------------------  9

     Short Tutorial  --------------------------------------- 10

     Programmer Contacts  ---------------------------------- 13

     Quick Reference  -------------------------------------- 14
                          Introduction                          1



     First of all, you may or may not know what a Readmac or
MacPaint picture is.  These are pictures that originally had to
be drawn with MacPaint on the Apple Macintosh.  Now there are
scanners that can scan a picture and store the data on an IBM PC.
Viewers were written to display what originally had to be down
loaded from a Macintosh to a PC.

     The Readmac pictures recieved a huge boost from Micro
Technologies with their Pixiscanner.  MT also runs a bulletin
board called PHOENIX (618-233-2315).  This BBS has become a
clearing house for Readmac pics.

     The name Readmac came into being with MT's program READMAC,
for viewing MacPaint pictures on the IBM PC.  The pictures of
this format go under the names of Readmac or Macpaint pics. 

     A few run offs ocurred from the Readmac pics.  One of the
first and biggest was Digital Vision BBS's DIGIPIC (213-732-
6935).  This was a program with a picture stored internally. 
When run, the program displayed the picture on the screen and
allowed some cursor movement.  These pictures were in medium
resolution and the programs were large and clumsy.  A high
resolution version came from my BBS, The Micron Firefly.  This
was the short lived MICROPIX.  These were discontinued because of
their large size.

     Many viewers appeared on the public domain market.  FMAC
from PC Rockland BBS (914-353-2176) was on of the first to allow
picture altering (squishing, color, etc) as well as a Bsave
option.  FMAC evolved into PCRGB, which then evolved into OPTIKS.
This will be an excellent program when it is finished.  To access
the different save formats (MS PAINT, Readmac, etc) one now has
to pay and register.  Many functions are not yet implemented. 
OPTIKS is the work of Keith Graham.

     Many other viewers appeared around the same time:  Allmac,
Edmac, Macshow, TheGrin, Readmac!, and MacPaint (for the IBM PC).

MacPaint, by Joan Riff, is one of the few to save in true
Macintosh MacPaint format.  Edmac, by S. G. Gorrell, provided
Turbo Pascal source code with its release.  TheGrin, by Ian
Davis, is an excellent program with some great picture altering
functions.  It features variable squishing, stretching, blowup
and other functions.

     MacSplat, by Porcine software, can print pictures without
displaying them.  This allowed users without graphics capability
to see pictures.                      Introduction (cont.)                      2


     Conversion programs also began to appear.  Cvtmac, by John
Bridges, to convert Readmac to PC-PAINT+ was one such program. 
Jim Neargardner released a set of conversion programs which
failed to work correctly most of the time.  William T. Morrison
released another set of conversion programs which worked quite
well.  Among his programs was one which read the picture data
from a Digipic program and wrote it to a Readmac type file.

     Another conversion type program also appeared:  Fmac2Com. 
Fmac2Com is one of Keith Graham's most ingenious programs. 
Fmac2Com reads in a Readmac file and sticks a display program in
the header section (the header section is usually unused by PC
viewer programs).  The file was then an executable file which
would display itself.  The file could still be viewed by most
viewers as well.

     Allmac, by Frank Scweiger, incorporated a nifty display
feature into a pixel by pixel editor.  The main menu is on one
side of the screen and a small photograph of the picture is on
the other.  editing takes place in a magnified mode only, will
work on a monochrome monitor and adapter!  So monochrome users
could edit and print their pictures (but not display on screen).

     Hopefully this short history of the Readmac pictures will
give you an idea of what has gone on and what is going on. 
Readmac pictures bring to the PC world a photograph-like graphics
ability.  I hope you will enjoy playing with them and my program, 
MacPaste.  For information on the latest changes to MacPaste, please
see UPDATE.TXT.

     It has recently come to my attention that not everyone in the 
world knows how to get Readmac pictures.  I apologize to those of you
who hunger for more of these pictures.  If you can access bulletin boards
you might try one of the above listed boards.  If you can't then ask 
around; many people have them.  If you still can't find them then write
to me or call.  If you send me $5.00 I will send a disk full of pictures.
Please let me know what types of pictures you prefer (i.e. nudes, animals,
eschers, cartoons).  I don't claim to have the biggest collection, but I
do want users of MacPaste to know that they have a support line (sort of).

     MacPaste is now distributed as SempriniWare.  SempriniWare is dedicated
to having fun and being as silly as possible.  SempriniWare is the work of
Bradford B. Taliaferro and needs no other copyright (for now).           Key Definitions and Function Outline                 3
 
 
F1  -  Crunch screen to view.  This is to let you see
       more of the picture. 
 
F2  -  Display the help screens.  Hit any key to page through
       the screens.
 
F3  -  Get a clipping.  Move the crosshairs to the upper left
       hand corner of the area to be copied and press F3.
       The word "Get" will appear in the left hand
       side of the screen.  Move the crosshairs to the
       lower right hand corner to be copied and press F3.        
       The word "Put" will  appear in the left hand
       side of the screen.  If you attempt to get a            
       clipping with the crosshairs to the left or above the
       position of the upper left hand corner of the
       clipping a short beep will sound.  To view the area 
       that will be copied while in "Get" mode, press <ENTER>. 
 
F4  -  Put a clipping.  If the word "Put" appears in the
       left hand side of the screen you may put
       the clipping.  The clipping will be permanently
       pasted to the right and below the crosshairs when you
       press F4.  To view the area the clipping will
       occupy press <ENTER>.
 
F5  -  Toggles the crosshairs between fast and slow mode.
       The word "Fast" or  "Slow" will appear in the
       lower left hand corner of the screen. 

F6  -  Toggles the pen up and down.  The word "Up" or
       "Down" will appear in the lower left hand corner
       of the screen.  When the pen is down the crosshairs
       will drag a line.  It will drag a white line in
       erase mode and a black one in draw mode. 
 
F7  -  Toggles magnify on and off.  In magnify mode the
       word "Zoom" appears in the left hand side
       of the screen.  In regular mode the word the word
       "Reg" will appear there.  This mode is especially 
       handy for pixel by pixel editing.

F8  -  Toggles draw color.  The word "Blac" or "Whit" will appear 
       in the lower left hand corner of the screen, meaning BLACk and
       WHITe, respectively.
 
F9  -  Save picture to the file.  This will save to the
       name it was loaded under.  It will write the old
       file to the same name with the extension .BAK.            Key Definitions and Function Outline (cont.)         4
 
 
 
F10  -  Loads a picture file from disk.  Drive specifier,
        path name, and file extension are legal here.
 
ESC  -  Quit with option to save.   You will be asked if you wish
        to save the file and then if you wish to quit or
        continue.
 
SPACE  -  Toggles pixel under crosshairs. 
 
PgUp  -  Moves up the picture page. 
 
PgDn  -  Moves down the picture page. 

Home  -  Moves to the top of the picture.

End  -  Moves to the end of the picture.
 
Cursor keys - Move crosshairs (left, right, up, down). 

<ALT> Backspace - Quits immediately.  I made this hard to
                  hit to avoid accidental file loss. 
                  This DOES NOT save the file.  On the AT keyboard
                  use <CTRL> Backspace.
 
<ENTER>  -  Show clip/paste area. 
 
<TAB>  -  Hide screen key.  This will put up a fake DOS.
          Type "EXIT" to leave the fake DOS and return to
          the picture.  This is for all those who
          desperately needed a break from whatever they
          were doing and are about to be caught not doing
          it. 
 
<ALT> F1  -  Squishes picture 50%.  This is in memory only - you
             must save the squished picture. 
 
<ALT> F2  -  Change the current directory and/or drive.
             To change simply type in the drive specifier
             and/or the path name.  Examples:
             C:\GRAPHICS,  GRAPHICS, C:.           Key Definitions and Function Outline (cont.)         5


 
<ALT> F3  -  Read a clipping file from disk.  DO NOT put
             a file extension on the filename here.  The
             program automatically adds .MCF to the
             filename.  Drive specifiers and path names
             are legal here. 

<ALT> F4  -  Save a clipping file to the disk.  DO NOT
             put a file extension on the filename here.
             The program automatically adds .MCF to the
             filename.  Drive specifiers and path names
             are legal here.

<ALT> F5  -  Flip picture end for end.  This turns the
             picture upside down.
 
<ALT> F6  -  Delete lines of picture.  This will allow you to cut out 
             portions of the middle of a picture.  Position the crosshairs 
             on the first line to be deleted.  Press <ALT> F6.  The word 
             "Del" will appear on the left of the screen.  Move the crosshairs
             to the last line to be deleted.  Press <ALT> F6 again.
 
<ALT> F7  -  Reverse picture image.  This will make a
             negative image of the picture (i.e.  black
             becomes white and white becomes black). 
 
<ALT> F8  -  Squeeze picture horizontally (50%).  This is in
             memory only - you must save the squeezed picture.

<ALT> F9  -  Save picture under a different name.  Saves
             the picture under a different filename while
             keeping the original file intact and keeps
             the current picture. 
 
<ALT> F10  -  Reloads the current picture from disk. 

<SHIFT> F1  -  Cut top of picture.  The line at the crosshairs
               becomes the new top line of the file.  This is to
               help cut down picture storage size.

<SHIFT> F2  -  Truncate picture at crosshairs row.  This will make
               the current crosshairs row the last row of the picture.  
               Truncating will cut down on the size of the file 
               when it is saved.
           Key Definitions and Function Outline (cont.)         6



<SHIFT> F3  -  Add lines to picture.  This will allow you to increase the
               total number of lines in the picture.  This will move the
               lines at and below the cursor down the number you specify
               and add blank lines in.

<SHIFT> F4  -  Fill an area.  Move the crosshairs to the upper left
               hand corner of the area to be filled and press
               <SHIFT> F4.  The word "Fill" should appear in the
               left hand side of the screen.  Move the crosshairs 
               to the lower right hand corner of the area
               to be filled and press <SHIFT> F4 again.  You will
               then be asked to give the color to fill it with. 
               The colors are as follows:

                            W  -  fill with white
                            B  -  fill with black
                            G  -  fill with gray

               When the "Fill" indicator is in the left
               hand side of the screen you may press enter to
               see the approximate area that will be filled.

<SHIFT> F5  -  Flop picture side for side.  This exchanges sides
               of the picture.

<SHIFT> F6  -  Input text at the crosshairs.  This will allow you to type
               text in at the crosshairs.  Pressing return will end the text 
               input mode as will reaching the right side of the picture.
               The backspace key will erase one character left and reposition
               the input column.  While in text mode the crosshairs will 
               disappear and the word "Text" will appear in the lower left 
               hand corner of the screen.

<SHIFT> F7  -  Draw a line.  Position the crosshairs so that the center is at
               the point where you wish the line to begin.  Press <SHIFT> F7.
               The word "Line" should appear in the lower left hand corner of
               the screen.  Move the crosshairs to the point where you wish the
               line to end.  Press <SHIFT> F7 again.  Note that the points are 
               relative to the screen, not the picture.

<SHIFT> F8  -  Paint an area.  Unlike the FILL option, this will fill
               irregular areas.  Move the crosshairs so the center is inside
               the area to be filled.  Press <SHIFT> F8.  You will be asked to
               specify the paint color.  Next, the border color.  Make sure 
               that your border is solid, otherwise the paint will spill out.           Key Definitions and Function Outline (cont.)         7

<SHIFT> F9  -  Print the picture currently in memory.  You have two options:

                         N - Print the picture normal size.
                         D - Print the picture double size.

               If you select double size the picture will be printed in two
               halves (first the left, then the right).  

<SHIFT> F10  -  Change printer definitions.  Enter the decimal number for
                the codes.  You will be asked to give the codes for your 
                printer for the following items:

                      Printer precode (escape code) - for most printers this
                      is ESC (for ESC enter decimal 27).

                      Text mode or Reset code - you may enter the reset to
                      power up, the text mode, the end graphics mode, or the
                      set text line feed.

                      Graphics mode code - Enter the graphics mode for your
                      printer.  On most this is 75 or 76.  Use the 120 DPI or
                      the 60 DPI graphics mode.

                      First line spacing code - Enter the first part of the 
                      set line spacing code for your printer.  Most use 65
                      decimal.  

                      Second line spacing code - Enter the second part of the
                      set line spacing code.  For some this will be a 8 
                      decimal.  This is the number of 1/72"s of line feed.

                      Third line spacing code - Enter the third part of the
                      set line spacing code.  If this is not needed just enter
                      -1.  For most this is not needed.  For those that do 
                      need it, it is usually the activate variable line
                      spacing code.

                      Here are some settings that have worked:

                                                        Okidata
                      Epson MX-100    IBM Proprinter    Microline 182
                      ------------    --------------    -------------
                           27              27                27
                           64              49                49
                           76              75                76
                           65              51                65
                           08              24                08
                           -1              -1                50           Key Definitions and Function Outline (cont.)         8


1  -  Scroll to end of picture.  This will slowly scroll to the end of the
      picture.  Press any key to stop scrolling at any point.  

2  -  Move to the bottom of the screen.  This will move the crosshairs to the 
      very bottom of the editing screen.

4  -  Move to the left of the screen.  This will move the crosshairs to the far
      left of the editing screen.

5  -  Toggle crosshairs on and off.  The +On and +Off indicator (respectively)
      appear in the lower left hand corner of the screen.

6  -  Move to the right of the screen.  This will move the crosshairs to the 
      far right of the editing screen.

7  -  Scroll to top of picture.  This will slowly scroll to the top of the
      picture.  Press any key to stop scrolling at any point.

8  -  Move to the top of the screen.  This will move the crosshairs to the very
      top of the editing screen.
                       Program Notes                            9

     Macpaste is written in Turbo Pascal and is based on the
program EDMAC by S. G. Gorrell.  This program is brought to you 
by Scott Bain Sysop of Scanline Remote BBS.  Their data line phone 
number is 619-298-2023. 
 
     The program is run by typing MACPASTE filename, where
filename is the name of a Readmac/Macpaint file.  Drive or path
may also be specified in the filename.  If filename is omitted
the program will prompt for a filename.  You may start with a blank
picture by typing enter instead of a filename at this prompt.
 
     To copy a clipping from one file to another is simple. 
First, follow the directions for getting a clipping from a
picture.  Then load in another picture.  Check to make sure the
placement is right and paste it in.  Voila!  Eddie Murphy's smile
on a fish!  The changes are saved only if you save the picture. 
 
     The files saved by this program are readable by all the
other readmac programs I've tried, i.e., Fmac, PcRGB, TheGrin,
Macpaint, Readmac, Allmac and Optiks.  I even got my pictures in
PC-PAINT+.  Convert it to PC-PAINT+ with a program such as CVTMAC
and edit away.  I am currently working on an interface system to
convert to and from various formats.   

     Please note that when you get a clipping it is no longer
saved to disk!  I plead temporary inebriation as the reason for
not using dynamic memory in the first place.  You should be able
to cut an entire picture out and add it in where you wish in a
reasonable amount of space and time.
 
     Files converted to COM files by Keith Graham's FMAC2COM
program should run after editing, although I have had some
problems after extensive editing.  The best method is to edit
the .MAC file and then convert it to a .COM file.
 
     Example.mac (included) is an example of a picture that
was editted with MacPaste.  First, I called up the picture of the
tiger.  Next, I defined a clip area.  Then I called up the
picture of Madonna (the rock singer) and pasted ("Put") the
clipping in place.  I then used the pixel by pixel editing to 
smooth the transition from tiger's head to woman's neck.  The
text at the bottom was done with the pixel by pixel editing (before
text input was added) The reflection of the text was done as follows:  
I flipped the picture upside down, got a clipping of the upside down 
text, flipped the picture back to normal, and pasted the reflection
text in place.                          Short tutorial                         10
 
 
  
 
           If you need a little help try this: 


 
           1.  Make sure you are at the DOS prompt and that
               MACPASTE.COM and EXAMPLE.MAC are both on the
               current directory. 
 
           2.  At the DOS prompt type  "MACPASTE  EXAMPLE.MAC"
               (don't type the quotes).

           3.  Please read the intro screen.  Hit any key to
               continue.
 
           4.  The picture file should begin loading. 
 
           5.  When loaded the top of the picture will be shown.
               To move the picture press PgDn or PgUp.  When done
               viewing the picture press <HOME> to move to the
               top of the picture.
 
           6.  The crosshairs will be in the middle of the screen. 
 
           7.  Press F2 for the help screens. 
 
           8.  Press any key to page through the help screens and then to 
               return to the picture.

           9.  Press F1 to view the picture in squished mode.
               Press any key to return to the normal picture.

          10.  Press F5.  Now press an arrow key a few times.
               Press F5 again.  Press the arrow key some more.
               Notice the difference in crosshair's speed.

          11.  Press F7.  Press the spacebar a few times and see
               how the pixel under the crosshair toggles.

          12.  Press F6.  The word "Down" should be in the lower
               left hand corner of the screen.  If "Up" is there,
               press F6 again.  Now press a crosshairs key a few
               times.  Press F8.  Note the color indicator in the 
               lower left hand corner.  Press the arrow key some more.
               Press F6 then F7.

          13.  Hold down the <ALT> key and press F5.  The picture
               should be flipped upside down.  If you cannot see
               the picture, press <END>.                         Short Tutorial (Cont.)                11

          14.  Hold down the <ALT> key and press F6.  The word "Del" should 
               appear at the left of the screen.  Move the crosshairs down
               a few lines.  Hold down the <ALT> key and press F6 again.
               A few lines of the picture should be deleted.

          15.  Press F3.  The word "Get" should appear in the
               upper left hand corner of the screen.  Move the
               crosshairs down and to the right.  Press F3 again.
               The word "Put" should appear in the upper left
               hand corner of the screen.  You now have a
               clipping stored in memory.

          16.  Hold down the <ALT> key and press F7.  The picture
               should now be reversed (a negative image).

          17.  Press Enter.  This will show you where the clipping you
               got will be put.  Press F4.  Then press "P". This will paste 
               the clipping you got earlier to the right and below the 
               crosshairs.

          18.  Press F10.  Type in "EXAMPLE.MAC" then press
               <ENTER> (don't type the quotes).  The picture should be
               reloaded.

          19.  Press <TAB>.  You should see a fake DOS on the screen now.
               Type anything you wish.  You should get a "Bad command or
               filename" message.  Type EXIT to leave the fake DOS.

          20.  Hold down the <ALT> key and press F8.  The picture should
               be squished horizontally.

          21.  Move the crosshairs to just a few lines below the top of the
               picture.  Hold down the <SHIFT> key and press F1.  The top
               few lines of the picture should be cut off.  
  
          22.  Press <END>.  Now move the crosshairs to a few lines above the
               bottom.  Hold down the <SHIFT> key and press F2.  The last few 
               lines of the picture should be cut off.

          23.  Now move the crosshairs to the middle of the picture.  Hold
               down the <SHIFT> key and press F3.  Type in 20 in response to
               the prompt (Hit enter after typing 20).  Twenty blank lines
               should be inserted at the cursor.

          24.  Move the crosshairs to the left side of the screen.  Hold down 
               the <SHIFT> key and press F4.  Move the crosshairs down and to 
               the right a bit.  Hold down the <SHIFT> key again and press F4.  
               In response to the prompt press the letter of the color you
               to fill the area with.                         Short Tutorial (Cont.)                12

          25.  Hold down the <SHIFT> key and press F5.  The picture should
               now be flipped side for side.

          26.  Hold down the <SHIFT> key and press F6.  Type your name then
               press enter.  Note the word "Text" will appear in the lower
               left hand corner of the screen while you are typing text.

          27.  Hold down the <SHIFT> key and press F7.  Move the crosshairs
               anywhere you wish.  Hold down the <SHIFT> key and press F7.  
               In response to the prompt press the letter of the color that
               will show up the best on the background.  You should see a line
               drawn between the two points you specified.

          28.  Press <HOME>.  Press <1>.  Press any key to stop the scrolling.
               Press <7>.

          29.  That about wraps it up for this little tutorial.  Hopefully you
               will have a feel for the keys and style of this editor now.
               Enjoy this program and feel free to yell, praise, criticize, or
               donate.
                                   Programmer Contacts                   13



     If you have any comments or suggestions please contact:

 
                         Brad Taliaferro
                         c/o Dr. Sandra Linck
                         P.O. Box 135
                         Wellsboro, PA 16901
                           
                                  or

                 Leave a message for me on ScanLine BBS
                 at 619-298-2023 (data).

                 Please note that NIGHT-FLIGHT 007 BBS
                 has received permission to distribute
                 MacPaste v2.10.


                         NIGHT FLIGHT 007
                  (313) 348-8535 2400/1200 8-N-1
                         24 hours / 7 Days
                         SYSOP:  Ann Mark

     Contributions are welcome, invited, begged and sought after.

Time is money, and I have spent a bit of time.  Any contributors
will recieve a disk with my latest programs and any other public
domain goodies I have on hand.  Contributors will also recieve a
thousand thanks (hard copies available).                         Quick Reference                       14

             (Also displayed when F2 is pressed)



          F1 -------------- Crunch to view        
          F2 -------------- Display this help screen      
          F3 -------------- Get a clipping           
          F4 -------------- Put a clipping          
          F5 -------------- Fast/slow cursor toggle 
          F6 -------------- Pen up/down toggle        
          F7 -------------- Magnify on/off toggle   
          F8 -------------- Draw/erase toggle 
          F9 -------------- Save picture to file  
          F10 ------------- Load a picture file   
          Esc ------------- Quit with option to save 
          Space ----------- Toggle pixel at crosshairs
          Home ------------ Move to top of picture
          End ------------- Move to bottom of picture
          PgUp ------------ Move up the picture page
          PgDn ------------ Move down the picture page
          Cursor keys ----- Move crosshairs
          <Alt> Backspace - Quit without saving
          <Ctrl> Backspace  Quit without saving
          <ENTER> --------- Show clip/paste area
          <TAB> ----------- Fake DOS (EXIT to quit)
          <ALT> F1 -------- Squish picture vertically 50%
          <ALT> F2 -------- Change directory       
          <ALT> F3 -------- Get clipping from disk 
          <ALT> F4 -------- Write clipping to disk 
          <ALT> F5 -------- Flip pict. length wise 
          <ALT> F6 -------- Delete lines of picture  
          <ALT> F7 -------- Reverse picture image
          <ALT> F8 -------- Squeeze picture horizontally 50%
          <ALT> F9 -------- Save picture-diff name 
          <ALT> F10 ------- Reload current picture
          <SHIFT> F1 ------ Cut top of picture
          <SHIFT> F2 ------ Truncate picture
          <SHIFT> F3 ------ Add lines to picture
          <SHIFT> F4 ------ Fill an area
          <SHIFT> F5 ------ Flop pict. side for side
          <SHIFT> F6 ------ Input text
          <SHIFT> F7 ------ Draw a line
          <SHIFT> F8 ------ Paint an area
          <SHIFT> F9 ------ Print current picture
          <SHIFT> F10 ----- Change printer definition
          1 --------------- Scroll to bottom of picture
          2 --------------- Move to bottom of screen
          4 --------------- Move to left of screen
          5 --------------- Toggle crosshairs on/off  
          6 --------------- Move to right of screen
          7 --------------- Scroll to top of picture
          8 --------------- Move to top of screen
```
{% endraw %}

## MACSHOW.DOC

{% raw %}
```
                       S E M P R I N I W A R E

                         MacShow version 2.00

                             written by 

                           Brad Taliaferro  


                          Brought to you by

                      Scanline BBS (619-298-2023)
                                               


     MacShow will sequentially view readmac pics.  Usage is as follows:
                  MACSHOW d: extension
where d: is the drive and extension is the readmac file extension 
(MAC, COM, PIC, etc).  If you are using readmac pics with the extension COM
then the only other file with that extension on the current directory should be
MacShow.

     Contributions are encouraged and suggestions are invited.  Send all 
correspondence to:

                        Bradford B. Taliaferro
                        c/o Dr. Sandra Linck
                        P.O. Box 135
                        Wellsboro, PA 16901


```
{% endraw %}

## MANYMAC.DOC

{% raw %}
```
                       S E M P R I N I W A R E
 
                         ManyMac version 1.00

                             written by 

                           Brad Taliaferro  


                          Brought to you by

                      Scanline BBS (619-298-2023)
                                               



     This program will combine four readmac pictures into one.  Each picture
will be half its original height and width.  After the intro screen is 
displayed press any key to continue.  The program will ask for the first file
name.  Path names and drive specifiers are OK.  This will be repeated four 
times.  The program will then ask for the file name to save the new picture.  
Again, path names and drive specifiers are OK.  If no drive of path is 
specified then the program will save to the current directory.

     Contributions are encouraged and suggestions are invited.  Send all 
correspondence to:

                        Bradford B. Taliaferro
                        c/o Dr. Sandra Linck
                        P.O. Box 135
                        Wellsboro, PA 16901


```
{% endraw %}

## UPDATE.TXT

{% raw %}
```
                           MacPaste Update Scratch Pad


         MacPaste is now up to version 2.10.  It now has erase, flop, squeeze,
     and fill functions; I have changed the way the picture is stored in 
     memory; sped the help function up considerably; changed clippings to 
     memory storage instead of disk; the manual is a bit more complete;
     there are cut and truncate functions; there is a scroll and stop feature;
     a quick cursor move; a line drawing function; a paint function; a text 
     line function; cursor on/off toggle; a more organized screen; "squish" has
     been sped up slightly; "flip" is a bit quicker; minor help is on the main
     screen; different methods of "put" are available; annoying screen mode
     changes have been minimized; screen movement is possible in magnify; the
     screen now scrolls with the crosshairs; print ability is in; you can 
     start the program with a blank picture; printer definition is possible 
     (changes are made to the program code itself);  and a few other little 
     changes.  A few annoying little bugs have been removed and some 
     annoying sounds added.
         That slightly readable mouthful was the first big overhaul for
     MacPaste.  A few more changes have been added.  One such change is the
     ability to delete lines anywhere in the picture.
         Well after about a year of being on the PC-SIG response has been
     mild, so no major revisions have been added yet.  I would still like
     to add in conversion from other formats.  With the onslaught of EGA and
     VGA pictures, I can see why MacPaste is not experiencing a great 
     reaction.
         However, a few people have written to me with their suggestions and
     comments.  To those people I say THANK YOU.  Let me end this note with
     my short list of contributors:


                      Derek Amos
                      Paul Andres
                      Robert A. Morris
                      Floyd Pfeffer

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1001

     Volume in drive A has no label
     Directory of A:\

    CATALOG           7292   1-15-89  10:18p
    EXAMPLE  MAC     23424   9-14-87   1:42a
    FILE1001 TXT      2067   2-01-89   3:45p
    GO       BAT        38   1-11-88  11:04a
    GO       TXT       771   2-01-89   3:56p
    MACBLANK COM     16297   9-20-87   1:45p
    MACBLANK DOC       969   1-15-89   9:54p
    MACFIX   COM     14777  10-27-87   8:12a
    MACFIX   DOC      1181   1-15-89   9:54p
    MACOKI93 COM     16731   9-20-87   3:42a
    MACOKI93 DOC      1170   1-15-89   9:55p
    MACPASTE COM     52842   1-14-89   7:53p
    MACPASTE DOC     30064   1-14-89   7:42p
    MACSHOW  COM     16035  10-27-87  10:13a
    MACSHOW  DOC       972   1-15-89   9:55p
    MANUAL   BAT       147   1-30-89   1:46p
    MANYMAC  COM     17248   9-20-87   4:31a
    MANYMAC  DOC      1150   1-15-89   9:56p
    SEMPRINI          2277   1-15-89   3:44p
    UPDATE   TXT      2036   1-14-89   7:32p
           20 file(s)     207488 bytes
                          104448 bytes free
