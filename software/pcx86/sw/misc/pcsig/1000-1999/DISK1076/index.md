---
layout: page
title: "PC-SIG Diskette Library (Disk #1076)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1076/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1076"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MANDELBROT & JULIA SET GENERATOR (1241)"

    MANDEL generates and displays marvelously beautiful images based upon
    the recently developed area of mathematics called "fractal geometry."
    With this program, you can create an unlimited number of new images,
    change the colors of the images, and save the images to a disk file.
    Sample images are included, and on-line help suggests numerical values,
    making it easy to begin.
    
    The program has two outstanding features:  the assignment of color masks
    to create an unlimited range of color variations for each image, and the
    ability to zoom in and magnify selected portions of the screen.
    
    MANDEL is a comprehensive program that takes some time to create a new
    image, but once saved to disk the image can be displayed on the screen
    more quickly.  You can also generate Julia images, which are similar to
    the Mandelbrot images, but require different numerical values to create
    the image.  The documentation has suggested readings for more
    information on Mandelbrot and Julia set images.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1076.TXT

{% raw %}
```
Disk No: 1076
Program Title: MANDELBROT & JULIA SET GENERATOR for EGA/VGA (Disk 1 of 2)
PC-SIG version: 1.1

This disk adds additional patterns to the original program that allowed
you to generate detailed and colorful mathematical patterns called
fractals.  Patterns are based upon a recently developed part of
mathematics called "fractal geometry," which creates images in which
each smaller part of the image has the same pattern as the whole part of
the image.  With this program, you can generate an unlimited amount of
new images, change the colors of the images, and save the images to a
disk file.

MANDELBROT is a comprehensive program that takes some time to generate a
new image, but once saved to disk the image can be displayed on the
screen more quickly.  It lets you create "Mandelbrot set" images and
"Julia set" images.  The Julia images are similar to the Mandelbrot
images, but require different numerical values to be inputted to
generate the image.  On-line help displays suggest numerical values for
both Mandelbrot and Julia images.  Sample images are already included,
and the documentation has suggested readings for more information on
Mandelbrot and Julia set images.

Usage:  Fractal Images/Mandelbrot and Julia Set Generator.

Special Requirements:  EGA or VGA graphics and monitor.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

COLOR    MSK  Default color mask.
COLOR01  MSK  Sample color mask.
COLOR02  MSK  Sample color mask.
COLOR03  MSK  Sample color mask.
COLOR04  MSK  Sample color mask.
COLOR05  MSK  Sample color mask.
COLOR06  MSK  Sample color mask.
COLOR07  MSK  Sample color mask.
COLOR08  MSK  Sample color mask.
COLOR09  MSK  Sample color mask.
COLOR10  MSK  Sample color mask.
COLOR11  MSK  Sample color mask.
COLOR12  MSK  Sample color mask.
COLOR13  MSK  Sample color mask.
COLOR14  MSK  Sample color mask.
HELP1         Help screen file.
JULIAEGA      Sample Julia image for EGA systems.
JULIAEGA HDR  Header file with input parameters.
M1            Sample Mandelbrot image for VGA systems.
M1       HDR  Header file with input parameters.
MANDEL   EXE  Mandelbrot/Julia set program.
MANUAL   DOC  Instruction manual for MANDEL
PRINTMAN BAT  Batch file to print documentation.
SCREEN1       Small Mandelbrot image for main menu.
SCREEN2       Small Mandelbrot image for main menu.
SCREEN3       Small Mandelbrot image for main menu.
SCREEN4       Small Julia image for main menu.
SCREEN5       Small Julia image for main menu.
SCREEN6       Small Julia image for main menu.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
                                MANDEL
                             Version  3.0
                   MANDELBROT - JULIA SET GENERATOR 

    MANDEL is a comprehensive program that generates and displays 
Mandelbrot and Julia sets, using VGA or EGA graphics. MANDEL 
autodetects the graphics hardware available and initializes the 
software for either VGA or EGA. The images produced are 480 pixels 
square in VGA mode and 480 x 350 in EGA, with a choice of 16 different 
colors. Images are generated and then stored on disk and the colors 
for the various dwell values, assigned to each pixel, can be changed. 
Standard color masks can be assigned and stored on disk for each 
image. Image files are automatically stored in compressed format and 
decompressed on retrieval, thereby saving disk space and improving 
speed. Users not completely familiar with Mandelbrot and Julia sets 
are referred to the following publications: 

    Dewdney, A.K.  Computer Recreations column. Scientific American, 
August 1985. (This was the first major article on the Mandelbrot set
that caught the attention of the public.)

    Gleick, J.  Chaos, Making a New Science.  Viking, New York, 1987. 

    Peitgen, H.O. & Richter, P.H.  The Beauty of Fractals.  Springer-
Verlag, New York, 1985. 

    Peitgen, H.O. & Saupe, D.  The Science of Fractal Images. 
Springer-Verlag, New York, 1988. 

    To start the program simply type MANDEL at the DOS prompt. The 
main menu displays six small samples of Mandelbrot and Julia sets and 
the various commands that are available. 

------------------------------------------------------------------------

    M - Generate Mandelbrot set.

    This command produces a Mandelbrot set. The pixels in the array 
are both displayed and stored on a disk file as they are generated. 
Each pixel has a dwell value assigned to it which represents the size 
or magnitude associated with that point of the array. The image can be 
viewed later with the "D" command. The user is asked for a new file 
name, the center point of the array and the magnification. The 
magnification is defined as 2 divided by the image width. The values 

                              -1.7  0  8
    
represent an image centered at x = -1.7, y = 0 and a magnification of 
8. These values would generate the array from -1.825 to -1.575 in the 
x direction and -0.125 to 0.125 in the y direction. Note that spaces 
separate the numbers and that a leading zero must be put before the 
decimal point on decimal values. 

------------------------------------------------------------------------

    J - Generate Julia set.

    This command is similar to the "M" command except different values 
are input. A good value for the center point and magnification is 
always 

                               0  0  0.5 
    
although a slightly larger value for the magnification like 0.6 or 0.7 
will often enlarge the interesting part of the image slightly. A point 
in the plane must also be chosen, and should be from the boundary 
region of the Mandelbrot set, for example 0.32 0.043. 

------------------------------------------------------------------------

    P - Plot dwell values of a stored Mandelbrot or Julia set.

    This function has you type in the file name and then reads and 
sums all of the various dwell values of an image file. The sum for 
each value is then plotted in the colors assigned by the current color 
mask. This function is useful when trying to decide what colors should 
be assigned to the various ranges of dwell values that exist for a 
given image. Samples of the 16 different colors available and their 
numbers are also displayed. The maximum dwell value should be kept to 
511 when using this plot feature.

------------------------------------------------------------------------

    D - Display Mandelbrot or Julia set.

    A previously generated Mandelbrot or Julia set can be displayed on 
the screen using this command. On startup a default color mask is loaded 
and unless changed will be used to determine the colors used for the 
various dwell values that were stored for each image file. The user 
chooses an image file to display by pressing the <Enter> key when the 
desired image file name is highlighted. The highlighted area can be 
moved with the arrow keys. If the user interrupts the generation of a 
Mandelbrot or Julia set, such that the image is only partially 
completed, the generation can be continued by simply displaying the 
partial image at which point the image will be completed. 

    Users can break out of the generation or display of a Mandelbrot 
or Julia set by simply pressing the <Esc> key. The program will halt 
and return to DOS after finishing the current line when generating an 
image; when displaying an image the <Esc> will return the program to the 
main menu.

    After an image has been displayed the following functions are 
available through the Alt toggle keys:

    Alt B - Blank Side Panels.

    This function simply blanks out the side panels with the XCent, 
YCent, Mag, etc. information and the Color Mask. This creates a cleaner 
display screen for those who wish to take photographs of the images. 
After the side panels have been blanked pressing any key will return the 
program to the main menu.

    Alt Z - The Zoom Function.

    This function makes the generation of new images at increased 
magnification very easy. After an image has been displayed using the D 
command, enter an Alt Z (hold down the Alt key and enter a letter Z). A 
small window with a center crosshair will appear in the center of the 
displayed image. This zoom window can be moved around with the following 
keys: 

          Arrow up    - moves the zoom window up one pixel
          Arrow down  - moves the zoom window down one pixel
          Arrow left  - moves the zoom window left one pixel
          Arrow right - moves the zoom window right one pixel
          Alt L       - inceases the size of the zoom window
          Alt S       - decreases the size of the zoom window

    After the zoom window has been placed such that it surrounds the 
area of the image to be magnified, enter an Alt G and the new image will 
be generated. To exit the Zoom Function without generating a new image
press the <Esc> key.
    Note that as the zoom window is moved about, the new values for X-
Center, Y-Center and Magnification which will be used for the magnified 
image, are updated and displayed in the upper left.

------------------------------------------------------------------------

    S - Display, Load, Create a color mask or Set the maximum dwell 
        value (10 - 10,000).

    These are very useful functions that make a big difference in the 
appearance of the images that are displayed. 
    Choosing the "C" subcommand will prompt the user for a file name 
and an array of numbers that defines a color mask. Color mask names 
must have the extension .MSK, the default color mask being COLOR.MSK.
Each line input should consist of four numbers, separated by spaces (not 
commas). The four numbers are the low range dwell value, the high range 
dwell value, the color for odd dwell values and the color for even dwell 
values. The numbers 

                             10  19  1  2 
    
would mean color the odd dwell values between 10 and 19 with color 1 
(blue), and the even dwell values with color 2(green). If a solid 
color is desired the two color numbers should be the same. When the 
chosen number of lines has been input (maximum of 32), they are stored 
on disk as a color mask, which can be loaded later, replacing the 
default color mask. The default color mask is: 

                   LowRange HighRange Color1 Color2 
                   --------------------------------
                      0       19        1      1 
                     20       29       14      1 
                     30       34        4      4 
                     35       49       12     12 
                     50       99       14     14 
                    100      511        0      0 

    The color numbers are: 

                 0 - Black           8 - Dark Gray 
                 1 - Blue            9 - Light Blue 
                 2 - Green          10 - Light Green 
                 3 - Cyan           11 - Light Cyan 
                 4 - Red            12 - Light Red 
                 5 - Magenta        13 - Light Magenta
                 6 - Brown          14 - Yellow 
                 7 - Light Gray     15 - White 

    The "L" subcommand loads an existing color mask you have created 
from disk. Color mask files must have the extension .MSK. The 
highlighted color mask will be loaded when the <Enter> key is pressed. 
    The "D" subcommand displays the current color mask MANDEL will use 
while generating a new image or displaying a previously stored image. 
    The "S" subcommand allows the user to set the maximum dwell value. 
The default value is 511, and range of possible values the user can 
set is from 10 to 10,000. Simple plots of wide areas can use smaller 
values which will shorten the computation time for new images. Larger 
values are necessary if good detail is wanted on images that are 
highly magnified. 

------------------------------------------------------------------------

    H - The Help command.

    The Help command displays a screen of suggested input values and 
the default color mask. 

------------------------------------------------------------------------

    Converting Version 1.0 files for use with versions 2.0 and higher.

    The file that contains an image is simply the named file without any 
extension. For example, if you generate an image TEST1 then the image 
itself is stored in a file named TEST1 and the initial input parameters 
are stored in TEST1.HDR. As it turns out, the TEST1 file will be 
identical in any version, ie. Ver. 1.0 and 2.0 produce the same 
compressed data file. The only reason you can't use your files created 
with Ver. 1.0 is that they lack a header (.HDR) file. This is a simple 
matter to fix. 

    To add the header files (those with extension .HDR) to files generated with 
Ver. 1.0 such that they can be used with higher numbered versions, assume you 
have a Ver. 1.0 image file called MAN01:

    1. Begin generation of a new image file for MAN01 using the same input 
       parameters. Use a temporary name for this image such as TEMP. Note that
       the values for XMin, YMin and Side will have to first be converted to 
       the new input values XCent, YCent and Mag used by Ver. 2.0 and higher.
       The equations to convert these values are as follows:

                            XCent = XMin+(Side*0.5)
                            YCent = YMin+(Side*0.5)
                            Mag   = 2/Side

    2. Once generation begins immediately press <Esc> and the program will quit 
       after one vertical line has been produced.
    
    3. At the DOS prompt erase the TEMP file by typing:

            ERASE TEMP

    4. Next rename the TEMP.HDR file to MAN01.HDR by typing the following at 
       the DOS prompt.

            RENAME TEMP.HDR MAN01.HDR

    At this point re-enter the MANDEL program and the MAN01 image file should 
be useable by Ver. 2.0 and higher.

------------------------------------------------------------------------

    Some suggested parameters for Mandelbrot sets are: 

                         XCent     YCent     Mag 
                   ----------------------------------
                   (1)   0         0         0.5 
                   (2)  -0.745195  0.112675  1400 
                   (3)  -0.745915  0.110235  195 
                   (4)  -0.165     0.9898    40 
                   (5)  -0.7454286 0.1129948 142857
                   (6)  -1.9425955 0         158640
                   (7)  -0.597717  0.6633617 200
                   (8)  -0.7700834 0.1131875 200
     
    Suggested Julia set parameters are: 

                 XCent    YCent    Mag      A        B 
           -------------------------------------------------
           (1)   0        0       0.833333  0.32     0.043 
           (2)   0        0       0.666667 -0.194    0.6557   
           (3)   0        0       0.625     0        1.0 
           (4)   0        0       0.555555 -1.25     0 
           (5)   0        0       0.625    -0.74543  0.11301 

    Any center point of an interesting Mandelbrot set makes a good 
choice for the A and B values for a Julia set. 

------------------------------------------------------------------------

    The files on this disk are:

    MANDEL   EXE    72464  Mandelbrot/Julia set program
    SCREEN1          5258  Small Mandelbrot image for main menu
    SCREEN2          5258  Small Mandelbrot image for main menu
    SCREEN3          5258  Small Mandelbrot image for main menu
    SCREEN4          5258  Small Julia image for main menu
    SCREEN5          5258  Small Julia image for main menu
    SCREEN6          5258  Small Julia image for main menu
    HELP1            1694  Help screen file
    COLOR    MSK       48  Default color mask
    COLOR01  MSK       32  Sample color mask
    COLOR02  MSK       32  Sample color mask
    COLOR03  MSK       48  Sample color mask
    COLOR04  MSK       48  Sample color mask
    COLOR05  MSK       48  Sample color mask
    COLOR06  MSK       48  Sample color mask
    COLOR07  MSK       40  Sample color mask
    COLOR08  MSK       64  Sample color mask
    COLOR09  MSK       96  Sample color mask
    COLOR10  MSK       48  Sample color mask
    COLOR11  MSK       48  Sample color mask
    COLOR12  MSK      160  Sample color mask
    COLOR13  MSK      256  Sample color mask
    COLOR14  MSK      256  Sample color mask
    MANUAL   DOC    16440  Instruction manual for MANDEL (this file)
    PCSIG    TXT     1697  List of files on the disk
    M1              49448  Sample Mandelbrot image for VGA systems
    M1       HDR       65  Header file with input parameters
    JULIAEGA       107116  Sample Julia image for EGA systems
    JULIAEGA HDR       65  Header file with input parameters
    M2D            214246  Sample Mandelbrot image for VGA systems
    M2D      HDR       85  Header file with input parameters
    JULIAX1        118854  Sample Julia image for VGA systems
    JULIAX1  HDR       65  Header file with input parameters

    A sample Mandelbrot and Julia image can be found in files M2D and 
JULIAX1. The default color mask works well with JULIAX1 and COLOR13.MSK 
should be loaded to use with M2D. JULIAEGA is provided as a sample image 
for EGA systems. 

                            REGISTRATION FORM

    Copies of this program may be freely shared with other users. 
Shareware users are invited to support the author and register their 
copies. The form found below should be used for registration. Registered 
users will receive a disk with a listing of MANDEL in Turbo Pascal 5.0, 
an updated MANDEL version with any improvements, an updated manual and 
additional Mandelbrot and Julia image files. In addition an 8087/80287 
version of MANDEL is included which provides improved speed for machines 
with a coprocessor. The registration fee is $20. and should be sent to: 
    
           Theron Wierenga, P.O. Box 595, Muskegon, MI 49443 




    Name____________________________________________________________

    Address_________________________________________________________

    City_______________________________________State_____Zip________

    Disk size desired:       5 1/4 in._______       3 1/2 in._______

    How did you receive your copy of this program?__________________

    ________________________________________________________________

    What type of computer are you using for MANDEL?_________________

    ________________________________________________________________

    Suggested improvements__________________________________________

    ________________________________________________________________

    ________________________________________________________________


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1076

     Volume in drive A has no label
     Directory of A:\

    COLOR    MSK        48   4-07-88  11:08p
    COLOR01  MSK        32   4-14-88   8:20p
    COLOR02  MSK        32   4-14-88   5:08p
    COLOR03  MSK        48   4-14-88   9:03p
    COLOR04  MSK        48   4-08-88  10:55a
    COLOR05  MSK        48   7-01-88   8:33a
    COLOR06  MSK        48   7-09-88   5:15p
    COLOR07  MSK        40   8-22-88  10:22p
    COLOR08  MSK        64   4-27-88   2:49p
    COLOR09  MSK        96   4-30-88   9:39a
    COLOR10  MSK        48   4-17-88  10:53p
    COLOR11  MSK        48  11-06-88   8:34p
    COLOR12  MSK       160  11-10-88   5:38p
    COLOR13  MSK       256  11-12-88  10:16p
    COLOR14  MSK       256  11-13-88   6:34p
    FILE1076 TXT      2741   1-10-89  11:17a
    GO       BAT        38   5-31-88   3:29p
    GO       TXT       540   5-31-88   3:31p
    HELP1             1694  11-19-88   4:10p
    JULIAEGA        107116   9-13-88   6:49p
    JULIAEGA HDR        65   9-13-88   5:10p
    M1               49448  11-07-88   1:12a
    M1       HDR        65  11-06-88  10:02p
    MANDEL   EXE     72464  11-22-88   5:58p
    MANUAL   DOC     16440  11-22-88   6:01p
    PRINTMAN BAT       147   5-31-88   2:16p
    SCREEN1           5258   4-05-88   7:44p
    SCREEN2           5258   4-05-88   8:21p
    SCREEN3           5258   4-05-88   7:23p
    SCREEN4           5258   4-06-88  10:27a
    SCREEN5           5258   4-06-88   9:47a
    SCREEN6           5258   4-06-88  10:54a
           32 file(s)     283578 bytes
                           12288 bytes free
