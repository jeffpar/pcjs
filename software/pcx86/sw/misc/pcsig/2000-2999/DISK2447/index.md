---
layout: page
title: "PC-SIG Diskette Library (Disk #2447)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2447/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2447"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PAINT SHOP & WALLMAC"

    PAINT SHOP is a Windows program that converts files between PCX, BMP,
    and GIF formats.  If you have any PCX or GIF files this program will
    convert them to BMP format, which can be used to change the background
    (wallpaper) on Windows.
    
    If you are tired of the wallpaper files that come with Windows, check
    out these two new background screens that you can use to customize your
    desktop with, and even impress Mac users.
    
    You get the original monochrome Macintosh(tm) background screen, and the
    newer color Mac II (tm), to use instead of the ribbons, paper, and other
    backgrounds that Windows offers you. These two BMP screens "look so
    realistic that you will find yourself reaching for the pull-down menus!"
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2447.TXT

{% raw %}
```
Disk No: 2447                                                           
Disk Title: Paint Shop & Wallmac                                        
PC-SIG Version: S1                                                      
                                                                        
Program Title: Paint Shop                                               
Author Version: 1.0                                                     
Author Registration: $25.00                                             
Special Requirements: Windows 3.0                                       
                                                                        
PAINT SHOP is a good Windows program for converting PCX, BMP, and GIF   
files between each other. If you have any PCX or GIF files this program 
will convert them to BMP format, which can be used to change the        
background (wallpaper) on Windows.                                      
                                                                        
                                                                        
                                                                        
Program Title: Wallmac                                                  
Author Version: 07/90                                                   
Author Registration: $2.00                                              
Special Requirements: Windows 3.0                                       
                                                                        
If you are tired of the wallpaper files that come with Windows, check   
out these two new background screens that you can use to customize your 
desktop with, and even impress Mac users.                               
                                                                        
You get the original monochrome Macintosh(tm) background screen, and the
newer color Mac II (tm), to use instead of the ribbons, paper, and other
backgrounds that Windows offers you. These two BMP "look so realistic   
that you will find yourself reaching for the drop-down menus!"          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PS.TXT

{% raw %}
```

                        Paint Shop by Robert Voit
                            Version 1.0


Paint Shop is a Windows 3.0 program.
The purpose of Paint Shop is to convert a picture file format to a different
format.
Paint Shop will convert picture file formats - BMP, PCX, and GIF.

Paint Shop will convert the entire picture, not a clipped portion of your
picture. If the original picture size is 900 by 900, then that will be the
resulting picture size.

Running Paint Shop:
Start Paint Shop up as you would any other Window program.
Once Paint Shop is running, you should select the file format that you want
to CONVERT FROM. Just click the mouse on the format.
Now select the file format that you want to CONVERT TO, just click the mouse
on the format.
Now select the file that you would like to convert, by selecting FILE, SELECT.
Select the file in the same manner as you would select a file to open with any
other Windows program.
Paint Shop will now convert the file that you have selected.
That is all there is to using Paint Shop, but you should know a few things about
the formats that you are converting from and to, so please read the entire
document.



Acknowledgements:
Paintbrush:
Paintbrush is a trademark of ZSoft Corporation.
PCX and BMP files are products of Paintbrush. (not sure if they are trademarks
or Service Marks)

Windows:
Windows is a trademark of Microsoft Corporation.

GIF files:
The Graphics Interchange Format(c) is the Copyright property of
CompuServe Incorporated. GIF(sm) is a Service Mark property of
CompuServe Incorporated.

For further information, please contact :
CompuServe Incorporated
Graphics Technology Department
5000 Arlington Center Boulevard
Columbus, Ohio  43220
U. S. A.






GIF files:
There are 2 versions of the GIF file formats 87a and 89a.
Paint Shop supports both versions.

The specifications of version 89a was released summer of 1990. In these
specifications some items that were not too clear in the 87a version were
cleared up. Unfortunately, by clearing up some of these items some GIF files
have become invalid in their format.

When converting a picture from GIF to BMP, the file format of the GIF file must
be correct. But, when you convert GIF to PCX the file format of the GIF is not
as important.
You can tell that the GIF file has an invalid format because the resulting
BMP file does not look right.
As a result, I have found that I can convert these invalid GIF files to PCX.
I then convert the resulting PCX to GIF and now have a valid GIF file.

Paint Shop will always CONVERT TO version 87a. When converting between file
formats I find no advantage to creating the new version 89a.


PCX files:
PCX files come in many formats and versions.
Paint Shop supports version 5, single plane.

Version 5 is the version that Paintbrush (that came with Windows 3.0) reads and
writes. Single plane is the type produced for vga.

Paint Shop will always produce a version 5, 256 color picture.
This is not to say that your picture will have 256 colors, but rather it will
produce a file that has a palette capable of holding 256 different colors.
Some viewers will see this as the number of unique colors within the picture.
This is not correct. There is room for 256 colors, but the PCX file will only
contain the palette information of the original file.
As an example, if you convert a black and white GIF file to PCX the resulting
PCX will have room for 256 colors, but the picture will still be black and
white.


BMP files:
BMP files come in many formats.
Paint Shop supports the format that is written by Paintbrush.




SHAREWARE:
           
Paint Shop is user supported software.  You may use it for a free ten day trial
period.
If you find this program useful,  please license the program by sending $25.00
($26.50 for Minnesota residents) to:

Robert Voit
17743 Evener Way 
Eden Prairie, MN 55346
CIS-72557,256


REVISION HISTORY:
version 1.0 - original

PRODUCT SUPPORT:
Registered users may obtain support by contacting Robert Voit at the above
address or CompuServe number.

FUTURE FORMATS:
More file formats will be supported in the future, provided that Paint Shop
is adequately supported. If there is a file format that you would like to see
supported please send me a note when you register Paint Shop. The formats
that are requested the most will be the first ones to be added.




Questions and Answers:

Question-
Why is Paint Shop altering the colors of the original picture?

Answer-
I assure you that Paint Shop does not alter the colors of the original
picture. Here is a long explanation as to what is happening.

As an example we will assume that you have converted a GIF file to a PCX file.
First you must understand the graphics environment. Most of you are probably
using a VGA card with your computer. You elected VGA for its 256 colors over
EGA with only 16 colors. On a standard VGA system the 256 colors are only
available in one mode. This mode is 320x200 (320 pixels (dots) across by
200 pixels down). The other modes of the VGA card only allow for 16 or less
colors. With a standard VGA card Windows uses a mode that is 640x480 with only
16 colors.

As a result, you can use a gif viewer to view a gif picture with 256 colors.
But when you use the Paintbrush, you will only get 16 of the 256 colors. I hope
you can now see why a 256 color picture would not look right with the
Paintbrush program.

Color Ranges: The different modes have there own color ranges. The mode with
256 colors can select its palette of colors from 262,144 different colors. The
mode with 16 colors selects its colors from only 64 different colors.

If you have a 16 color picture the colors may still be different. In a 256
color mode you could view a picture that has 16 different shades of grey. But
with a 16 color system, only 4 of those shades fall within its range of colors.
Thus, even though the picture is made up of only 16 colors, not all of the 16
colors can be represented on a 16 color system. In this example you would see
the 16 color grey scaled picture as only having 4 shades of grey.

Pictures that use 16 different colors (not grey shaded) have the same limits
on them. If the picture uses any colors that are outside of the 64 color range,
those colors will be different when viewed with the Paintbrush program.


I can not fix Paint Shop to allow for the limits of your hardware. I tried to
reduce a 16 color grey scale picture to the limits of the 16 color range. Since
the 16 color range only has 4 shades of grey (black and white are 2 of them)
the other 12 colors showed up as blues, greens, and reds. Thus there is no way
of converting colors outside of the color range to a color within the color
range without changing the color.




What to do...
In order to get your 256 colors back you would have to upgrade your video
card to what is called SVGA (S stands for Super). I have a Video 7 card with
512k of memory on the card. This allows for 640x480x256. In addition, I have a
video driver for Windows that allows me to run windows at 640x480x256. The
standard driver that comes with windows is "vga.drv" ( you can check to see if
you are using this by viewing "system.ini" with notepad, and finding the line
that says "display.drv=??????.drv", your line probably reads
"display.drv=vga.drv"). If you are using "vga.drv", then you are running in
640x480x16. Because it is a 16 color mode it can not select its colors from the
full range of vga colors (262,144 different colors), but rather the range of the
of a 16 color system (64 different colors).

There are many boards out there that support 256 colors in Windows. To take
advantage of the board, you need a Windows 3.0 driver with the board (this will
replace "vga.drv"). Most major board makers have all ready produced this driver.
By upgrading your board, and changing the Windows video driver in "system.ini"
you can run Windows at 640x480x256 instead of 640x480x16. It may be that your
present board is upgradable. What I mean is that some boards just need more
memory added to them to allow for this new mode (you would still need a driver).

Your video board may already allow for 640x400x256 (check with the
manufacturer). You will still need to obtain the video driver from the
manufacturer to use this mode in Windows.



Question-
I have a beautiful picture that I use as wallpaper. When I view a picture
converted with Paint Shop it goofs up all of the colors in my wallpaper
picture. If I close the painting program, everything goes back to normal. If
I make the painting program an icon, the colors stay goofed up. Why?

Answer-
On a vga monitor there are 262,144 different colors. Windows picks 16 or 256
(depending on you video setup) to use as its' set of colors. The picture
that you view (with Paintbrush) may use a different set of 16 or 256 colors than
what your wallpaper is using. To allow your pictures to be viewed properly
Windows gives the painting program the ability to change Windows' set of colors.
In this way your picture will have the correct colors, but since your wallpaper
uses different colors, it will now be incorrect. Windows should correct this
when you close your painting program, or view a picture with the same colors as
Windows normally uses.

```
{% endraw %}

## README.TXT

{% raw %}
```
******************* Underware Presents! **********************
 "Subversive" bit-mapped wallpaper for Microsoft Windows 3.0! 
**************************************************************
This first sample of Underware's series of Windows 3 wallpaper
bitmaps includes the traditional Macintosh(tm) desktop and the
color Mac II(tm) desktop. Amaze your friends as they marvel at
your IBM's computing prowess! So realistic, you'll catch your-
self trying to pull down the menus yourself!

MANY MORE bitmaps are planned in this excitingly subversive
Underware series, including the amazing System 7.0(tm), coming
soon! Watch for them on a bbs or ftp site near you!

You are encouraged to distribute WALLMAC.ZIP freely as long as
its contents remain in tact.

If you find this public domain offering to be useful, please
help keep starving students fed by sending your generous dona-
tion of $2.00 to:
                           Underware
 Thank you                 C/O Daniel Bise or Andy Groeneveld
for enjoying               809 Brent Avenue, #4
 UNDERWARE!                So. Pasadena, CA  91030
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2447

     Volume in drive A has no label
     Directory of A:\

    COLORMAC BMP    153718   7-19-90  12:14a
    MONOMAC  BMP     38462   7-18-90  11:46p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT      2157  12-05-90   6:37a
    README   TXT      1152   7-19-90  12:31a
    FILE2447 TXT      2591  10-24-90   1:12p
    PS       EXE     62478   8-27-90   4:30p
    PS       TXT      9482   8-27-90   4:45p
            8 file(s)     270080 bytes
                           46080 bytes free
