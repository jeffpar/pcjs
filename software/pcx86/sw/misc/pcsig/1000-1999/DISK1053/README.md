---
layout: page
title: "PC-SIG Diskette Library (Disk #1053)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1053/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1053"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BRADFORD"

    You don't need an expensive laser printer to output pages in beautiful
    fonts. With BRADFORD, you can print any ASCII or WordStar file in
    different types of fonts (typestyles) on your dot-matrix printer.  The
    fonts include Greek text, double-height fonts, typewriter quality print,
    a variety of italics, and much more.  There are over 40 fonts included
    and you can create additional fonts.
    
    BRADFORD is excellent for printing other languages, such as Russian or
    Hebrew.  Print reports and memos.  The font commands can either be
    issued when BRADFORD is executed, or can be inserted into text files.
    
    BRADFORD also has commands for page formatting.  These include
    adjustable margins, center text, adjustable page length, underline,
    double underline, boldface, superscript, subscript, and proportional
    spacing.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BRAD2.DOC

{% raw %}
```
--------------

FOR A FAST DEMO OF THE BRADFORD PRINTING PROGRAM:
     A> BRADFORD MX BRADDEMO   (for Epson MX-compatible printers)
     A> BRADFORD FX BRADDEMO   (for Epson FX-compatible printers
                                and Epson LQ-compatible printers)
     A> BRADFORD ST BRADDEMO   (for Star Gemini-10x and 15x)

--------------

INTRODUCTION
Greetings!  These are the instructions for version 2.04 of
Bradford, the printing program.  Bradford prints WordStar and 
ASCII files in very high quality, in a large variety of fonts
(typestyles).  It also allows you to give commands, either on 
the system command line or within your document, to control how 
your document will be printed.

This version of Bradford is far more versatile, and often much 
faster, than previous versions, so you might want to give it a 
look even if you've tried an earlier version of Bradford.

SETTING UP
Bradford works with three types of printers:
Type MX -- compatible with the Epson MX-80 or IBM Graphics Printer.
Type FX -- compatible with the Epson FX-80 or IBM Proprinter.
           (This includes 24-pin Epson LQ and compatibles.)
Type ST -- Star Gemini-10x and compatibles

There are three "configuration files" on your disk, named MX, FX,
and ST, one for each type of printer.  Before using Bradford, you
should rename your printer's configuration file to the new name
CONFIG.BF.  For example:  REN FX CONFIG.BF

Now you are ready to use Bradford.  Use the command
     A> bradford braddemo
to print the demonstration file.  (Don't type the "A>".)

THE FONTS
There are many files on your disk that end in ".BF2".  These are
the font files.  The part of the name before the ".BF2" is the
name of the font.  Bradford reads one of these files in order to 
print in the corresponding font.

Notice that there's a font called "select".  Let's print the file 
called ASCII in the "select" font.
     A> bradford ascii  .fnselect
Notice that we included a special Bradford command ".fnselect"
on the command line.  This told Bradford to read the new font
before printing our document.  Bradford has a very large number
of commands that can be used in this way.

PRINTING THIS FILE
If you want to use Bradford to print this instruction file, use 
this command at the system prompt:
     A> bradford brad2.doc .mo1 .dcc

PRINTING WORDSTAR FILES
Bradford has a special facility to print WordStar files.  Use
this command to print a WordStar file:
     A> bradford ws.bf myfile
Substitute the name of your file for the word "myfile".

USING BRADFORD COMMANDS
A command can be used in any of three ways:
(1) Put it on the command line after the name of your document, 
preceded by a period, as demonstrated above.
(2) Include it in your document, on a line by itself, preceded by 
a period.
(3) Include it in your document, within a line of text, preceded 
by a backslash (\) and followed by a space.
The file BRADDEMO demonstrates methods (2) and (3) of using 
commands.

PARTIAL LIST OF COMMANDS
Here's a list of some of the commands available with Bradford.  
If part of a command must be typed exactly as shown, we'll show 
it in capital letters.  If you should substitute your own 
information for part of a command, we'll show that part in lower-
case letters.  Remember that comands must be put on the command 
line preceded by a period, or in your document as described 
above.  See the file BRADDEMO for some examples of how to use 
commands.

FNfontname   Selects the specified font.
POvalue      Sets the left margin to the specified value (0-79)
             Normally 8
MRvalue      Sets the right margin to the specified value (1-80)
             Normally 73
MTvalue      Sets top margin to specified value (0-65)
             Normally 3
MBvalue      Sets bottom margin to specified value (0-65)
             Normally 8
HMvalue      Sets horizontal magnification (width) (1-9)
             Normally 2
STL          Print the document flush-left
             (This is the normal setting)
STJA         Print the document justified.  (Must double space 
             between paragraphs before using this.)
STC          Print the document centered
STR          Print the document flush-right
PLvalue      Set page length in lines for odd-sized paper (1-254)
             Normally 66
MO1          Print in monospace instead of proportional space
MO0          Resume proportional space printing
UL1          Begin underlining
UL2          Begin double underlining
UL0          Stop underlining
DK3          Begin boldface printing
DK1          Resume non-boldface printing
SUB          Begin subscript printing
SUP          Begin superscript printing
SU0          Resume mid-line (standard) printing

MORE ABILITIES
If you decide that you wish to continue using Bradford after a 
reasonable trial period, you are expected to "register" your copy 
by purchasing a manual.  Additional features and abilities 
explained in the manual include:  print multiple copies, print 
selected range of pages, pause before each new page, high-speed 
draft mode, change spacing between characters, headers and 
footers, conditional and unconditional page breaks, a very 
thorough system of macros, changing the command characters, 
overstriking, custom configuration files, and page and chapter 
numbering.

IF YOU WISH TO ORDER A MANUAL
You can get the printed Bradford 2.04 manual (well over 50 pages 
of text) for $25, which includes postage.  It's a very well 
written manual, not full of hard-to-understand terminology.  Or 
get both the latest manual and the latest version of the disk(s)
for a total of $39.95.  Please send your check or money order
(in U.S. dollars) to:
     Contorer Computing Enterprises
     Post Office Box 6755
     Bellevue, WA 98008-0755, USA
Add $3 for air mail outside North America.
You may print the enclosed file "orderfrm.doc" for a convenient
order form.

QUESTIONS?
If Bradford seems to be severely malfunctioning, it's more likely
a problem with this explanation than with the program.  Please send
us a note if you can't get the program to work, and we will try to 
solve your problem.

Technical support -- advice on how to get Bradford to do 
something in particular -- will be given only to registered 
users (those who have purchased at least a manual).

BRADFONT AND UNFONT
These are programs for use in making your own font.  Use the command
     A> unfont fontname
to read the font file "fontname.bf2" and create the editable text file
"fontname.bff".  You can then edit this file with a text editor, and
turn it back into a font file with the command
     A> bradfont fontname
This process is explained in more detail in the manual.


"Brad2.doc" file last updated July 3, 1990.

```
{% endraw %}

## FILE1053.TXT

{% raw %}
```
Disk No: 1053                                                           
Disk Title: Bradford                                                    
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: Bradford                                                 
Author Version: 2.04E                                                   
Author Registration: $25.00 or $39.95.                                  
Special Requirements: IBM or Epson compatible printer or Gemini-10X prin
                                                                        
You don't need an expensive laser printer to output pages in beautiful  
fonts. With BRADFORD, you can print any ASCII or WordStar file in       
different types of fonts (typestyles) on your dot-matrix printer.  The  
fonts include Greek text, double-height fonts, typewriter quality print,
a variety of italics, and much more.  There are over 40 fonts included  
and you can create additional fonts.                                    
                                                                        
BRADFORD is excellent for printing other languages, such as Russian or  
Hebrew.  Print reports and memos.  The font commands can either be      
issued when BRADFORD is executed, or can be inserted into text files.   
                                                                        
BRADFORD also has commands for page formatting.  These include          
adjustable margins, center text, adjustable page length, underline,     
double underline, boldface, superscript, subscript, and proportional    
spacing.                                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  PC-SIG Disk #1053  BRADFORD  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print out documentation for BRADFORD, type:                          ║
║           BRADFORD BRAD2.DOC  (press Enter)                             ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## HEBREW2.DOC

{% raw %}
```
.mo1
.hm3
.fnselect
.stc
HEBREW FONT FOR BRADFORD
.stl


.hm2 
This font creates Hebrew characters with \dk2 \ul1 Bradford 2.0\ul0 \dk1.
This is a new version of the Hebrew font.  Version one permitted
printing only an unpointed text.  This version permits printing a
pointed or unpointed Hebrew text. 

   Some things to remember:

        > Hebrew is written right-to-left.  Therefore you must
                enter your Hebrew text backwards. 

        > To print a pointed text you must use Bradford's
                overstrike capability.  Enter your line including
                the Hebrew text, then add a line with the
                pointings [pointings must be entered backwards as
                well].  

        Suggestion:  1. Enter all your text [English & Hebrew],
                     2. On the next line enter your pointings
                        under the corresponding Hebrew letter, 
                     3. Finally, enter your Bradford commands
                        into the document.  

                     [This procedure assures that the correct
                      pointings will appear under the appropriate
                      Hebrew character.]   



\dk2 \ul1 EXAMPLE\ul0 \dk1


       :M0qy rPA-lA N)rHaw yH ylag ytADy ynaw
           1  22  4    _48  2  7_   7831  7_3

                                   Bwya 19.25
.fnhebrew2


       :M0qy rPA-lA N)rHaw yH ylag ytADy ynaw\ov
           1  22  4    _48  2  7_   7831  7_3

                                   Bwya \fnselect 19.25
.fnselect

               I know that my Redeemer lives,
                 and that in the end he will stand
                        upon the earth.

                                         Job 19.25


-- \dk2 \ul1 Bradford\ul0 \dk1  is a trademark of Concom Enterprises.
.pa
\dk2 \ul1 HEBREW CHARACTERS\ul0 \dk1

     Hebrew Letter       Arabic      Hebrew Letter      Arabic
   =============================================================

     Aleph          --     a           Mem          --    m\ov
\fnhebrew2            a                         m

\fnselect       Beth          --     b                        --    M\ov
\fnhebrew2            b	                         M

\fnselect                     --     B           Nun          --    n\ov
\fnhebrew2            B	                         n

\fnselect      Gimel          --     g                        --    N\ov
\fnhebrew2            g	                         N

\fnselect                     --     G        Samekh          --    s\ov
\fnhebrew2            G	                         s

\fnselect     Daleth          --     d         'Ayin          --    A\ov
\fnhebrew2            d	                         A

\fnselect                     --     D            Pe          --    p\ov
\fnhebrew2            D	                         p

\fnselect        He           --     h                        --    P\ov
\fnhebrew2            h	                         P

\fnselect       Waw           --     w                        --    f\ov
\fnhebrew2            w	                         f

\fnselect     Zayin           --     z        TSadhe          --    v\ov
\fnhebrew2            z	                         v

\fnselect      Heth           --     H                        --    V\ov
\fnhebrew2            H	                         V

\fnselect      Teth           --     Q          Qoph          --    q\ov
\fnhebrew2            Q	                         q

\fnselect      Yodh           --     y          Resh          --    r\ov
\fnhebrew2            y	                         r

\fnselect      Kaph           --     k           Sin          --    x\ov
\fnhebrew2            k	                         x

\fnselect                     --     K          SHin          --    X\ov
\fnhebrew2            K	                         X

\fnselect                     --     c           Taw          --    t\ov
\fnhebrew2            c	                         t

\fnselect    Lamedh           --     l                        --    T\ov
\fnhebrew2            l	                         T
.pa
.fnselect
\dk2 \ul1 HEBREW POINTINGS\ul0 \dk1


     Hebrew Pointing     Arabic      Hebrew Pointing     Arabic
   ==============================================================

     Qames          --     1         Qibbus          --     9\ov
\fnhebrew2             1                        9
\fnselect      (rht)

\fnselect      (mid)          --     2          Sureq          --     0\ov
\fnhebrew2             2                        0

\fnselect     Pathah          --     3          Holem          --     )\ov
\fnhebrew2             3                        )
\fnselect      (rht)

\fnselect      (mid)          --     4                         --     =\ov
\fnhebrew2             4                        =

\fnselect     Seghol          --     5  Hateph Pathah          --     _\ov
\fnhebrew2             5                        _
\fnselect                                                          (undln)

\fnselect       Sere          --     6    "    Seghol          --     !\ov
\fnhebrew2             6                        !

\fnselect      Hireq          --     7    "    Kamets          --     +\ov
\fnhebrew2             7                        +

\fnselect      Shewa          --     8\ov
\fnhebrew2             8
.fnselect


\dk2 \ul1 PUNCTUATION MARKINGS\ul0 \dk1

     Hebrew Punctn.     Arabic       Hebrew Punctn.     Arabic
   =============================================================

   Makkeph          --     -     Soph Pasuq          --     :\ov
\fnhebrew2             -                        :
.fnselect
                        (hyphen)

rht)

\fnselect      (mid)          --     4             
```
{% endraw %}

## ORDERFRM.DOC

{% raw %}
```
.. To print this with Bradford:
..      A> bradford orderfrm.doc .mo1

If you decide that you wish to continue using Bradford after a
reasonable trial period, you are expected to "register" your copy
by purchasing a manual.  The manual explains how to use Bradford,
including many advanced features not explained elsewhere.

You can get the printed Bradford 2.04 manual (well over 50 pages
of text) for $25, which includes postage.  It's a very well
written manual, not full of hard-to-understand terminology.  Or
get both the latest manual and the latest version of the disk(s)
for a total of $39.95.

------------------- BRADFORD 2.0 ORDER FORM --------------------

Send to:
     Contorer Computing Enterprises
     Post Office Box 6755
     Bellevue, WA 98008-0755, USA


Please send ____ copies of the latest Bradford disk or disks.

My operating system is [ ] MS-DOS or PC-DOS      [ ] CP/M

Operating system version number: _______

Computer model: _________________________________________________

Disk format: ____________________________________________________



Please send ____ copies of the Bradford 2.04 manual.
     (Use this option if you're not ordering disks.)

Please send ____ copies of the latest Bradford manual.
     (Use this option if you're ordering disks.)



$14.95 times number of disk copies =   $_______ for disks.

$25.00 times number of manual copies = $_______ for manuals.

If outside North America,
  add $3.00 per manual for air mail:   $_______ for air mail.

             Total amount enclosed:    $_______

Your name and address:

```
{% endraw %}

## RUSSIAN.DOC

{% raw %}
```
.fnselect
.stl
.mt12

The Russian font is a new addition to Bradford.  A shareware
distributor named PC-SIG stated (incorrectly) in its ads that
Bradford already had a Russian font, and quite a few people
responded with letters saying they would indeed like to have
such a font for use with Bradford.  So we made one, and here it
is.

This is a new font, and we are still taking suggestions on how
to improve it, so feel free to send us a note indicating what
changes you would like to see.  For more information on using
non-English fonts, please see page 17 of the Bradford manual.

----------------------------------------------------------------
Print this file with Bradford to see how the characters in the
Russian font correspond to the characters on your keyboard.  Use
this command:  BRADFORD RUSSIAN.DOC
----------------------------------------------------------------


.mo1
.ai7
!"#$%&' ()*+,-./  0123456 789:;<=>?@
ABCDEFG HIJKLMNO  PQRSTUV WXYZ[\pr \]^_`
abcdefg hijklmno  pqrstuv wxyz {|}~

.fnrussian
.ai3
!"#$%&' ()*+,-./  0123456 789:;<=>?@
ABCDEFG HIJKLMNO  PQRSTUV WXYZ[\pr \]^_`
abcdefg hijklmno  pqrstuv wxyz {|}~

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1053

     Volume in drive A has no label
     Directory of A:\

    ARTICLE            335   3-18-88   7:42p
    ASCII              140   2-19-88   4:14p
    AVANT3   BF2      5760   7-22-88   8:00p
    AVANT3B  BF2      6016   5-30-89  11:32p
    AVANTW   BF2      3456   7-29-88   1:29a
    ORDERFRM DOC      1626   7-04-90   5:19p
    BRADFONT COM     13636   3-19-88   6:10p
    BRADFORD COM     31970   5-04-88   5:20p
    CHART    BF2      2944   3-08-88   5:21p
    CHART2   BF2      8192   3-15-88  10:10p
    CHART2H  BF2      8320   3-15-88  10:13p
    DIGIT    BF2      2688   2-07-88  10:27p
    DIGIT2   BF2      6912   2-07-88  10:28p
    EXTEND   BF2      2432   2-07-88  10:23p
    FX                 128   1-29-88   5:19p
    GREEK    BF2      2560   4-03-88   2:11p
    GRID              2931   3-19-88   6:00p
    HEBREW   BF2      2688   6-08-88   7:04p
    HEBREW2  BF2      3328   8-14-89   8:28p
    HEBREW2  DOC      5888  12-15-88  12:19a
    IDIGIT   BF2      2816   2-19-88   4:11p
    INTRO              160   3-18-88   7:12p
    IORATOR  BF2      2816   3-09-88   4:59p
    IPIZZA   BF2      2816   2-07-88  10:23p
    IPIZZA2B BF2      7296   3-08-88   1:12a
    IPIZZAW  BF2      4096   2-07-88  10:24p
    ISELECTW BF2      4608   3-08-88  10:21a
    ITYPE    BF2      2944   2-07-88  10:24p
    ITYPEX   BF2      4096   2-07-88  10:26p
    IVANIL   BF2      2688   2-07-88  10:27p
    JAZZ     BF2      2816   2-07-88  10:22p
    JAZZ2    BF2      6912   2-07-88  10:28p
    JAZZ2H   BF2      6912   2-07-88  10:24p
    JAZZH    BF2      2816   2-08-88  11:31p
    MAIN               245   3-18-88   7:15p
    MODERN   BF2      2688   2-07-88  10:26p
    MOVEIN              71   3-07-88   8:40p
    MX                 116   2-02-88  10:15p
    NOSTALG  BF2      2816   2-07-88  10:27p
    ORATOR   BF2      2688   3-06-88  10:20a
    BRADDEMO          3939   7-15-90   7:09p
    PIZZA    BF2      2560   2-07-88  10:25p
    PIZZA2   BF2      6144   2-07-88  10:26p
    PIZZA2B  BF2      6400   2-07-88  10:29p
    PIZZA2C  BF2      6912   2-19-88   4:28p
    PIZZA2H  BF2      6912   3-08-88   2:34a
    PIZZAW   BF2      3712   2-07-88  10:24p
    RUSSIAN  BF2      2816   5-16-89  12:13p
    RUSSIAN  DOC      1171   5-18-89   8:04p
    SAMPLE1             19   3-07-88   8:34p
    SAMPLE2             26   3-07-88   8:38p
    SAMPLE3            241   3-07-88   8:40p
    SELECT   BF2      2688   2-07-88  10:27p
    SELECT2  BF2      7168   2-07-88  10:23p
    SELECT2B BF2      7552   3-08-88   2:36a
    SELECT2C BF2      7936   3-08-88   2:36a
    SELECTW  BF2      4224   2-07-88  10:27p
    SHARP3   BF2      7168   7-15-88  11:46a
    SHARPW   BF2      4224   7-30-88   2:17a
    SMALCAP  BF2      2688   2-07-88  10:29p
    ST                 122   2-02-88  10:15p
    STRIPE2  BF2      7040   2-07-88  10:28p
    SUMMARY            196   3-18-88   7:15p
    TINY     BF2      2048   2-07-88  10:25p
    TINYW    BF2      2688   2-07-88  10:23p
    TYPE     BF2      2688   2-07-88  10:26p
    TYPEX    BF2      4096   2-07-88  10:29p
    UNFONT   COM     13385   3-19-88   6:10p
    USETABS            109   3-19-88   6:03p
    VANILLA  BF2      2560   2-07-88  10:26p
    WS       BF       1159   3-19-88   6:03p
    BRAD2    DOC      6872   7-04-90   5:19p
    FILE1053 TXT      2227   8-11-90  10:39p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       727   8-13-90   6:58a
           75 file(s)     304823 bytes
                           21504 bytes free
