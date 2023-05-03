---
layout: page
title: "PC-SIG Diskette Library (Disk #3016)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3016/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3016"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE3016.TXT

{% raw %}
```
Disk No: 3016                                                           
Disk Title: SFWare Font Utilities #2 of 4                               
PC-SIG Version: S1.1A                                                   
                                                                        
Program Title: Sfware Font Utilities                                    
Author Version: 1.0                                                     
Author Registration: $60.00                                             
Special Requirements: A hard drive & one HPLaserJet softfont file. HP la
                                                                        
SFWARE FONT UTILITIES gives you the tools to download, rotate, compress,
expand, view, and perform special effects on the PCL softfonts used with
your Hewlett-Packard laser printer.  SFWARE is not a collection of      
fonts, but a set of font manipulation utilities.  It can even be set up 
to access the utilities from an integrated menu system.                 
                                                                        
If you don't already know, softfonts are fonts stored in files on your  
computer and sent to the memory of your laser printer each time you turn
it on.  Downloading softfonts to a laser printer is something lots of   
programs do, but SFWARE does a lot more.  It lets you take any existing 
font and use SFWARE's special effects to create some new, eye-catching  
fonts.                                                                  
                                                                        
The special effects available through SFWARE include bold, fill, convert
to fixed spacing, halftone, hollow, invert, mirror, outline, convert to 
proportional spacing, resize, reverse, shade, shadow, slant, stripe,    
3-D, hollow-3-D, and filled-3-D effects.  The effects can be tailored   
and combined in countless ways.  For example, you could take an existing
18-point Times font and make it hollow, slant it, and put a 3-D shadow  
behind it.  Before you actually use these fonts you can view them       
on-screen, or print reference sheets.                                   
                                                                        
Another added feature is the ability to use fonts on older HP laser     
printers.  Older printers don't normally support compressed fonts, but  
SFWARE can expand them for easy use.  In addition, for older HP printers
that won't do this automatically, SFWARE can change a portrait font to  
landscape.  This is a quick, easy way to create a big font collection   
from a small set of fonts.                                              
                                                                        
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
║           <<<<  PC-SIG Disk #3016  SFWARE FONT UTILITIES  >>>>          ║
║                  Disk 2 of 4 (also #3001, #3017, #3018)                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║  Insert disk 2 (#3016) into drive A.                                    ║
║  Create a subdirectory on your hard drive.  From the subdirectory on    ║
║  the hard drive type:                                                   ║
║          COPY A:PKUNZIP.EXE  (press Enter)                              ║
║          PKUNZIP A:SFW11AP2  (press Enter)                              ║
║  Then insert disk 1 (#3001) into drive A and type:                      ║
║          PKUNZIP A:SFW11AP1  (press Enter)                              ║
║  Then insert disk 3 (#3017) into drive A and type:                      ║
║          PKUNZIP A:SFW11AD1  (press Enter)                              ║
║  Then insert disk 4 (#3018) into drive A and type:                      ║
║          PKUNZIP A:SFW11AD2  (press Enter)                              ║
║          PKUNZIP A:SFW11AEX  (press Enter)                              ║
║  To print program instructions, type:  COPY READ.ME PRN  (press Enter)  ║
║  To print printing instructions, type:  COPY PRINTDOC PRN  (Enter)      ║
║  To print registration form, type:  COPY ORDER.FRM  (press Enter)       ║
║                                           Copyright 1992, PC-SIG Inc.   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PATTERN.DOC

{% raw %}
```
The Pattern Program: PATTERN.EXE
--------------------------------

The PATTERN program is a primitive pattern translator for creating Sfware
patterns.  This program is provided because translating patterns to Sfware
strings by hand is extraordinarily tedious.

Usage: PATTERN [magnification] < inputfile > outputfile

The PATTERN program reads from standard input and writes to standard output.
You must use DOS file redirection to provide input to PATTERN and to capture
output from PATTERN.

The optional magnification scales the bits in the pattern.  The magnification
should be an integer between 1 and 9.  The default magnification is 1.

Input:
------

PATTERN reads a DOS text file from standard input.  The text file should have
the following format:

        .name1
        <bitpattern-row1>
        <bitpattern-row2>
        .
        .
        .
        <bitpattern-rown>
        .name2
        <bitpattern-row1>
        .
        .
        .
        .eof

The <bitpattern> for each row should be a single line of zeros and ones.  Any
number of patterns may be present in the file.  The last line of the file
should be ".eof"

Output:
-------

Pattern writes the pattern strings in the format:

        pattern name1=<pattern>
        pattern name2=<pattern>

This is precisely the format required for defining patterns in the
configuration file (for more information about configuration files, read the
configuration chapter in the Sfware manual).

Examples:
---------

The following pattern file creates several standard patterns that are
provided in the initial Sfware configuration file:

.DarkSaw
11111111
01111111
00111110
00011100
00001000
10000000
11000001
11100011
11110111
.LightSaw
10000000
01000001
00100010
00010100
00001000
00000000
00000000
00000000
.NarrowBackslash
10001000
01000100
00100010
00010001
.NarrowDot
00000000
10101010
.Narrowhatch
00010001
10101010
01000100
10101010
.NarrowHoriz
00000000
00000000
00000000
11111111
00000000
00000000
00000000
11111111
.NarrowSlash
00010001
00100010
01000100
10001000
00010001
00100010
01000100
10001000
.NarrowVert
00010001
.WideBackslash
10000000
01000000
00100000
00010000
00001000
00000100
00000010
00000001
.WideDot
00000000
00100010
00000000
00000000
.WideHatch
00000001
10000010
01000100
00101000
00010000
00101000
01000100
10000010
.WideHoriz
00000000
00000000
00000000
11111111
00000000
00000000
00000000
00000000
.WideSlash
00000001
00000010
00000100
00001000
00010000
00100000
01000000
10000000
.WideVert
00010000
.Black
11111111
.White
00000000
.Gray50%
10101010
01010101
.Gray25%
10001000
00100010
.Gray16%
10001000
00000000
00100010
00000000
.SPS
0110011100011000
1001010010100100
1000010010100000
0110011100011000
0001010000000100
1001010000100100
0110010000011000
0000000000000000
0000000000000000
.SPSbig
00011100000011110000001111000000
01111110000111111000011111100000
11000011001100001100110000110000
11000011001100001100110000110000
11000000001100001100110000000000
11000000001100001100110000000000
01111100001111111000011111000000
00111110001111110000001111100000
00000011001100000000000000110000
00000011001100000000000000110000
11000011001100000000110000110000
11000011001100000000110000110000
01111110001100000000011111100000
00111100001100000000001111000000
00000000000000000000000000000000
00000000000000000000000000000000
00000000000000000000000000000000
00000000000000000000000000000000
.TightSaw
01101011
11011101
10110110
01101011
11011101
10110110
.DecoSlash
11010010
01101001
10110100
01011010
00101101
10010110
01001011
10100101
.Cross
00010001
10111011
11101110
10111011
.CircleSquare
00100100
00111100
11100111
01000010
01000010
11100111
00111100
00100100
.Brick
11111111
10000000
10000000
10000000
11111111
00001000
00001000
00001000
.Weave
10000100
11111100
11001111
01001000
01001000
11001111
11111100
10000100
.DiagDark
01110111
10111011
11011101
10101010
.DiagLight
00010001
10101010
01000100
10001000
.Ells
00010001
01110111
10001000
11101110
.EllsRev
11101110
10001000
01110111
00010001
.SquareDot
00010001
01010101
00010001
11111111
.Circles
01110000
10001000
00000111
10001000
.BrCircles
11101110
10000010
10111010
10101010
10111010
10000010
11101110
00000000
.gray17%
10001000
00000000
00100010
00000000
.eof

The output from PATTERN for this input file is:

Pattern DarkSaw         =255;127;62;28;8;128;193;227;247
Pattern LightSaw        =128;65;34;20;8;0;0;0
Pattern NarrowBackslash =136;68;34;17
Pattern NarrowDot       =0;170
Pattern Narrowhatch     =17;170;68;170
Pattern NarrowHoriz     =0;0;0;255;0;0;0;255
Pattern NarrowSlash     =17;34;68;136;17;34;68;136
Pattern NarrowVert      =17
Pattern WideBackslash   =128;64;32;16;8;4;2;1
Pattern WideDot         =0;34;0;0
Pattern WideHatch       =1;130;68;40;16;40;68;130
Pattern WideHoriz       =0;0;0;255;0;0;0;0
Pattern WideSlash       =1;2;4;8;16;32;64;128
Pattern WideVert        =16
Pattern Black           =255
Pattern White           =0
Pattern Gray50%         =170;85
Pattern Gray25%         =136;34
Pattern Gray16%         =136;0;34;0
Pattern SPS             =103,24;148,164;132,160;103,24;20,4;148,36;100,24;0,0;0,0
Pattern SPSbig          =28,15,3,192;126,31,135,224;195,48,204,48;195,48,204,48;192,48,204,0;192,48,204,0;124,63,135,192;62,63,3,224;3,48,0,48;3,48,0,48;195,48,12,48;195,48,12,48;126,48,7,224;60,48,3,192;0,0,0,0;0,0,0,0;0,0,0,0;0,0,0,0
Pattern TightSaw        =107;221;182;107;221;182
Pattern DecoSlash       =210;105;180;90;45;150;75;165
Pattern Cross           =17;187;238;187
Pattern CircleSquare    =36;60;231;66;66;231;60;36
Pattern Brick           =255;128;128;128;255;8;8;8
Pattern Weave           =132;252;207;72;72;207;252;132
Pattern DiagDark        =119;187;221;170
Pattern DiagLight       =17;170;68;136
Pattern Ells            =17;119;136;238
Pattern EllsRev         =238;136;119;17
Pattern SquareDot       =17;85;17;255
Pattern Circles         =112;136;7;136
Pattern BrCircles       =238;130;186;170;186;130;238;0
Pattern gray17%         =136;0;34;0
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3016

     Volume in drive A has no label
     Directory of A:\

    SFW11AP2 ZIP    311296   4-30-92   3:13p
    PKUNZIP  EXE     23536   1-16-91  12:38p
    FILE3016 TXT      3183   5-01-92   3:31p
    GO       TXT      1617   1-01-80   2:11a
    GO       BAT        38   1-31-91  12:58a
            5 file(s)     339670 bytes
                           20480 bytes free
