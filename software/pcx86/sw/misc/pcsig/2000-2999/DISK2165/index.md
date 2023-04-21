---
layout: page
title: "PC-SIG Diskette Library (Disk #2165)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2165/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2165"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MICROMACROBAT"

    MICROMACROBAT lets your batch files perform tricks for which DOS
    makes no provision.  Simple batch file commands allow for box drawing,
    scrolling, printing, fadeout, printing of big text and a plethora of
    other functions; all in color.  Mix MICROMACROBAT commands freely with
    the batch file commands to which you are accustomed.  For example,
    putting the command MB BOX/1/1/25/80/1/31/C in your batch file draws a
    white on blue box around the entire screen and clears the inside to
    blue.  There are no complicated commands to learn and there no
    compiling steps.  MICROMACROBAT is useful for installation programs,
    back-up batch files, tutorials, demos, slide shows and any occasion for
    which you need snappy batch files.  MICROMACROBAT is a worthwhile
    utility for batch file creators and programmers.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2165.TXT

{% raw %}
```
Disk No: 2165                                                           
Disk Title: MicroMacroBat                                               
PC-SIG Version: S1                                                      
                                                                        
Program Title: Micro Macro Bat                                          
Author Version: 12/89                                                   
Author Registration: $35.00                                             
Special Requirements: None.                                             
                                                                        
MICROMACROBAT allows your batch files to perform tricks for which       
DOS makes no provision.  Simple batch file commands allow for box       
drawing, scrolling, printing, fadeout, printing of big text and a       
plethora of other functions; all in color.  Mix MICROMACROBAT           
commands freely with the batch file commands to which you are           
accustomed.  For example, putting the command   MB                      
BOX/1/1/25/80/1/31/C in your batch file draws a white on blue box       
around the entire screen and clears the inside to blue.  There are      
no complicated commands to learn and there is no compiling step.        
MICROMACROBAT is useful for installation programs, back-up batch        
files, tutorials, demos, slide shows and any occasion for which you     
need snappy batch files.  MICROMACROBAT is a worthwhile utility for     
batch file creators and programmers.                                    
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MB.DOC

{% raw %}
```
Document for MicroMacroBat....................................................

MB.EXE is a program which when run with an argument on the command line, from
either the DOS prompt or within a batch file, performs the operations specified
by that argument.  For example, by typing or placing this line in a batch
file or on the command line:

MB BOX/1/1/12/80/1/112

MicroMacroBat will perform the operation specified by the argument
BOX/1/1/12/80/1/112. The argument tells MicroMacroBat to place a BOX with the
upper left corner at row 1, column 1, the lower right corner at row 12,
column 80, use the single line box character and make the color black on
white.

MicroMacroBat can be a very handy extention to your batch file writing tools
without having to learn a new batch-file-writing language or performing
a compilation.

MB.EXE can be tucked away in your utilities directory with a "path" pointing
to it.  MicroMacroBat calls may be intermixed with the batch file routines you
normally use without any further consideration other than proper syntax usage.

MicroMacroBat will have many uses:

*             In your AUTOEXEC.BAT files.
*             In distribution disc BAT files for hard drive installations.
*             In BAT files for making file backups.
*             In BAT files for demonstration programs and slide shows.
*             For Shareware distributors GO files.
*             BLOADable screen design.  See note 3 under REGISTRATION.

DEMO.BAT is a batch file which demonstrates some of the routines and contains
some important remarks.

NOTE:  In order that MB can load and execute as quickly as possible, syntax
.      and error checking are non-existent.  Make no errors and you will have
.      no problems.

The ONLY legal argument separator is the "/".  DO NOT use anything else.
Either upper or lower case text is acceptable.  Remember, each line is to
be prefixed with MB, followed by a space and the argument, ie:

.                        MB BOX/1/1/12/80/1/31

The following is a list of supported arguments, their proper syntax and an
explanation of what the operation does.  The meaning of the parameter TEXT$
is:  Any group of ASCII characters in the range of 0 to 255.


BOX/BR/BC/ER/EC/CHARACTER/COLOR/C       Draws a box where BR is the beginning
.                                       row, BC the beginning column, ER the
.                                       ending row, EC the ending column where
.                                       BR < ER, BC < EC and COLOR < 256.
.                                       CHARACTER is either 1 or 2 indicating
.                                       a single or double line box.  COLOR
.                                       is a single value representing the
.                                       foreground and background colors.  See
.                                       the single color chart below.  The
.                                       values for   BR,  BC,  ER  and  EC
.                                       should be within the allowable limits
.                                       as dictated by the lines/columns mode
.                                       of your monitor.  Appending /C to the
.                                       argument clears the inside of the box
.                                       to the background color specified in
.                                       the COLOR argument.
.                           Example:    BOX/1/5/12/75/1/79 draws a single-line
.                                       box with the upper left corner at row
.                                       1, column 5, the lower right corner at
.                                       row 12 column 75 in bright white on
.                                       red and not cleared.

CLEARSCR/BR/BC/ER/EC/COLOR              Clears an area of the screen where BR,
.                                       BC, ER, EC and COLOR have the meanings
.                                       as described above.
.                           Example:    CLEARSCR/1/5/12/75/31

BLOAD/FILENAME$                         BLOADS a file into video memory as
.                                       the BASIC's BLOAD command.  The area
.                                       of video memory the file is loaded into
.                                       is automatically determined by the
.                                       monitor in use.  This command is for
.                                       "slide shows" of predetermined screen
.                                       files made with Basic's BSAVE or a
.                                       screen capture utility.
.                           Example:    BLOAD/MAINMENU.SCR

FILLSCRN/BR/BC/ER/EC/COLOR/ASCII        Fills the screen with the character
.                                       represented by the value ASCII.  BR,
.                                       BC, ER, EC and COLOR are as previously
.                                       described.
.                           Example:    FILLSCRN/1/5/12/75/30/45 will fill the
.                                       described area with dashes colored
.                                       yellow on blue.

PAINT/BR/BC/ER/EC/COLOR                 Paints the screen without disturbing
.                                       the existing text.
.                           Example:    PAINT/1/5/12/75/7

OCPRINT/ROW/COLUMN/TEXT$/COLOR          Same as PRINT, below, except that
.                                       printing takes place slowly; one
.                                       character at a time, for effect.

PRINT/ROW/COLUMN/TEXT$/COLOR            Rapidly prints TEXT$ in COLOR at the
.                                       ROW/COLUMN.  TEXT$ will be displayed
.                                       exactly as entered, including quotes
.                                       if used.  Extended ASCII characters
.                                       may be displayed. The routine writes
.                                       to video memory; no line feed issued.
.                           Example:    PRINT/5/1/display these words/31

CURSOROFF                               Turns the cursor off.  Be sure to turn
.                                       the cursor back on at the end of the
.                                       bat file.

CURSORON                                Turns the cursor on.

LOCATE/ROW/COLUMN                       Locates the cursor at ROW/COLUMN.
.                                       Handy if you want to use the ECHO
.                                       command.  Printing by DOS will begin
.                                       at the cursor position.
.                           Example:    LOCATE/1/1

WAIT                                    Suspends operation and waits for a
.                                       keypress.

CHIME/WHICHONE                          Makes a chime-like tone.  WHICHONE
.                                       must be in the range of 1 to 10.
.                           Example:    CHIME/7

SLEEP/SECONDS                           Suspends operation until SECONDS
.                                       seconds elapses.
.                           Example:    SLEEP/4

STUFF/TEXT$                             Stuffs text into the keyboard buffer,
.                                       appending an <ENTER> keypress.
.                                       To simulate pressing <ENTER>, simply
.                                       use STUFF without parameters.  TEXT$
.                                       CANNOT be more than 15 characters.
.                           Example:    STUFF/Y

USCROLL/BR/BC/ER/EC/TIMES               Provides for scrolling of a selected
DSCROLL/BR/BC/ER/EC/TIMES               area of the screen, either Up, Down,
LSCROLL/BR/BC/ER/EC/TIMES               Left or Right, TIMES times.
RSCROLL/BR/BC/ER/EC/TIMES
.                           Example:    LSCROLL/1/1/12/80/4

FADE/COLOR                              Provides for a screen disolve to COLOR.
.                           Example:    FADE/64

BIG/TEXT/CHR/R/C/COLOR                  Prints large block text; 3 rows, 10
.                                       columns in COLOR color with ASCII
.                                       character CHR.
.                           Example:    BIG/Hello there/219/1/1/31

RECOLOR/OLD/NEW                         Changes all instances of color OLD to
.                                       color NEW.
.                           Example:    RECOLOR/31/78

LIST/ROW/COLUMN/COLOR/X/word/word/....  Prints a vertical list of words (18max)
.                                       starting at ROW, COLUMN in COLOR.
.                                       There will be X rows between words.
.                           Example:    LIST/12/1/31/1/Item 1/Item 2/Item 3


VPRINT/ROW/COLUMN/TEXT/COLOR            Prints TEXT vertically in starting at
.                                       ROW, COLUMN.  Do not print more text
.                                       than there is room for.
.                           Example:    VPRINT/1/1/HELLO THERE/2

CBUF                                    Clears the keyboard buffer.




__________________________________OneColor Chart______________________________

.             ......................Background...........................
.             Black   Blue   Green   Cyan   Red   Magenta   Brown   White

Foreground
..........
Black          0      16      32     48     64      80      96      112
Blue           1      17      33     49     65      81      97      113
Green          2      18      34     50     66      82      98      114
Cyan           3      19      35     51     67      83      99      115
Red            4      20      36     51     67      83     100      116
Magenta        5      21      37     52     68      84     101      117
Brown          6      22      38     52     69      85     102      118
White          7      23      39     53     70      86     103      119
Gray           8      24      40     54     71      87     104      120
Bright blue    9      25      41     55     72      88     105      121
Bright green  10      26      42     56     73      89     106      122
Bright cyan   11      27      43     57     74      90     107      123
Bright red    12      28      44     58     75      91     108      124
Bright Mag    13      29      45     59     76      92     109      125
Bright Brown  14      30      46     60     77      93     110      126
Bright White  15      31      47     61     78      94     111      127

For a blinking foreground, add 128 to the above values.


REGISTRATION.................................................................

The $35 registration fee for this program will provide you with:

The MicroMacroBat program broken down into it's component parts.  VMB, UMB and
DMB are the video, utility and display/printing controllers, respectively.
Separate controllers load and execute faster, but the speed is partly offset
by the additional disc seek time.  Also, you may only need, or have room for,
one controller on a disc.  The breakdown is as follows:

------------------------------------------------------------------------------
.          VMB                     UMB                        DMB
------------------------------------------------------------------------------
.        ClearScr                 CBuf                       Big
.        FillScrn                 Chime                      VPrint
.        Paint                    Stuff                      BLoad
.        CursorOn                 Sleep                      OCPrint
.        CursorOff                                           RScroll
.        Print                Future additions               UScroll
.        Recolor              will be in this                DScroll
.        Box                  file.                          LScroll
.        List                                                Wait-Rotate
.        Wait                                                Fade
.        Locate

You will also be provided with:

1.      A handy four page manual.

2.      A collection of even smaller, individual control programs, each
.         containing a SINGLE routine.  These will prove to be of value,
.         especially if you need only one or two.  You may use these stand
.         alones in your batch files or run them from the DOS command line.
.         The single routines will not need the MB prefix, are called by
.         name and will use the same syntax as required by MicroMacroBat.

3.      Other routines which will have been developed since the release
.          of this shareware program.  One of these will DEFINITELY be a
.          routine to allow MicroMacroBat to be used as a screen design
.          utility; use a batch file to call MB repeatedly until you like
.          the design then, simply press ^F1 and the screen is saved as a
.          BLOADable file.  Using a small batch file to put you in a loop
.          with a text editor will allow you to completely design a screen
.          in less than 15 minutes!  You can save screens prior to registering
.          MicroMacroBat with one of the screen capture utilities available.
           WAIT-ROTATE, a moving sign "marguee" will also be included.

4.      Possible inclusion of YOUR suggestions in the registered disc you
.          recieive.

5.      Placement on the update list.  You will automatically receive notices
.          of program enhancements and have the opportunity to upgrade for a
.          pittance.

6.      Access to the 25th line of the monitor with the removal of our copyright
.          notice.

Even if you do not wish to receive the separate controllers & other advantages
of registration, you are still expected to register your continued use of
MicroMacroBat.

Send your $35 registration fee to:  Sitting Duck Software
.                                   POBox 130
.                                   Veneta, OR 97487
.                                   (503) 935-3982

If you have suggestions for additional features, we are happy to consider
them.

SITE and DISTRIBUTION LICENSES................................................

Site licenses are available for MicroMacroBat.  In order to legally distribute
MB.EXE with your products, distribution licenses are also available.  Because
the execution speed of MicroMacroBat depends on the size of the MB.EXE file,
licensees may ask that only the routines they require be included.  Contact
us at the above address for details.

MicroMacroBat (c) 1989        Sitting Duck Software         All rights reserved

REGISTRATION FORM


Date______________________               Telephone  (    )    -

Name_________________________________________________ Apt_________________

Address___________________________________________________________________

City______________________________________ State_______ Zip_______________


Registration for MicroMacroBat                                      $35.00


Registration fee includes First Class postal shipment.                n/c

Specify here if you prefer UPS ground         [ ]                     n/c

Specify here if you prefer UPS Blue (air)     [ ]        @            5.00


                                               Total enclosed:    _________

Sorry, we are not set up to accept charge cards.

Shipping address if different from above:

___________________________________________________________________________

___________________________________________________________________________

___________________________________________________________________________

___________________________________________________________________________


Mail payment to:   Sitting Duck Software
                   POBox 130
                   Veneta, OR 97487






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2165

     Volume in drive A has no label
     Directory of A:\

    MB       EXE      7220  12-12-89   1:58p
    MB       DOC     16325  12-12-89   1:56p
    DEMO     BAT      4065  12-12-89   1:39p
    DEMO     SCR      4007  11-05-89   6:42a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   4-25-90   8:18a
    FILE2165 TXT      2147   4-25-90   9:33p
            7 file(s)      34342 bytes
                          123904 bytes free
