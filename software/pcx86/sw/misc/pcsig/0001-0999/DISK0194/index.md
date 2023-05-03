---
layout: page
title: "PC-SIG Diskette Library (Disk #194)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0194/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0194"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "ROFF AND PC-READ"

    ROFF is a text formatter.  Using ROFF, you can make nice printouts of a
    file with as little or as much help from the program as you want,
    depending on the commands.  There are default values for all parameters,
    so if you don't put any commands in at all, your file will come out with
    filled, right-justified lines.  The default line-length is 80 characters
    and the default page-length is 66 lines per page.
    
    Special Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  None.
    
    File Descriptions:
    
    INTEGRAL C    Source in C for integration routine.
    INTEGRAL DCL  Declaration of integral for calling Pascal program.
    INTEGRAL PAS  Source in Pascal for integration routine.
    READ     ME   Notes on integration routine.
    RKF45    C    Source in c for RKF45 integrator.
    RKF45    DCL  Declaration of RKF45 for calling Pascal program.
    RKF45    H    Part of RKF45 integration programs.
    RKF45    PAS  Source in Pascal for RKF45 integrator.
    ROFF     DOC  Documentation of ROFF.
    ROFF     EXE  Version of ROFF produced from source code on this disk.
    ROFF     H0   Header common to all ROFF source.
    ROFF     H1   Header specific to ROFF1.
    ROFF     H2   Header specific to ROFF2.
    ROFF1    C    Part 1 of ROFF source  (Modified from PC-SIG Disk No 50).
    ROFF2    C    Part 2 of ROFF source.
    ROFF3    C    Part 3 of ROFF source.
    TSTINTEG C    Source in C for example of use of integral.
    TSTINTEG PAS  Source in Pascal for example for use of integral.
    TSTRKF45 C    Source in C for example of use of RKF45.
    TSTRKF45 PAS  Source in Pascal for example of use of RKF45.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES194.TXT

{% raw %}
```
Disk No:  194
Program Title:  ROFF text formatter.
PC-SIG version: 3.1

ROFF is a text formatter.  Using ROFF, you can make nice printouts of a
file with as little or as much help from the program as you want,
depending on the commands.  There are default values for all parameters,
so if you don't put any commands in at all, your file will come out with
filled, right-justified lines.  The default line-length is 80 characters
and the default page-length is 66 lines per page.

Usage:  Text formatting and writing analysis.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  None.

File Descriptions:

INTEGRAL C    Source in C for integration routine.
INTEGRAL DCL  Declaration of integral for calling Pascal program.
INTEGRAL PAS  Source in Pascal for integration routine.
READ     ME   Notes on integration routine.
RKF45    C    Source in c for RKF45 integrator.
RKF45    DCL  Declaration of RKF45 for calling Pascal program.
RKF45    H    Part of RKF45 integration programs.
RKF45    PAS  Source in Pascal for RKF45 integrator.
ROFF     DOC  Documentation of ROFF.
ROFF     EXE  Version of ROFF produced from source code on this disk.
ROFF     H0   Header common to all ROFF source.
ROFF     H1   Header specific to ROFF1.
ROFF     H2   Header specific to ROFF2.
ROFF1    C    Part 1 of ROFF source  (Modified from PC-SIG Disk No 50).
ROFF2    C    Part 2 of ROFF source.
ROFF3    C    Part 3 of ROFF source.
TSTINTEG C    Source in C for example of use of integral.
TSTINTEG PAS  Source in Pascal for example for use of integral.
TSTRKF45 C    Source in C for example of use of RKF45.
TSTRKF45 PAS  Source in Pascal for example of use of RKF45.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                     <<<<  Disk No: 194  Roff  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the manual on this disk, type:                               ║
║                                                                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## ROFF.DOC

{% raw %}
```
4 March 1984       Modified to K & R standard C by H.L. Lynch
August 28, 1982 /* Modified for IBM PC by MSZachmann */
May 7, 1981

                            ROFF

    This version of ROFF, based  on  the  formatter  in  Kernighan  and
Plauger's  book  SOFTWARE  TOOLS,  is written in BDS C, and employs the
directed i/o functions that go along with that package. Well,  half  of
the  directed  I/O  anyway  - it doesn't use redirected input because I
wanted to be able to format more than one file at a run. Please  ignore
any  "odd"  comments  to myself in ROFF1.C and ROFF2.C; I tried to find
them all but there may be a few extra silly remarks around.

    For more details on the directed I/O  (NDIO  in  our  version)  see
NDIO.C


Sample calls:

A> roff filename

    This will send the formatted output to the Console (display)

A> roff >filename2  filename

    This will send the formatted output to filename2

A> roff >PRN:  filename

    This will send the formatted output to the printer.

    Using  ROFF,  you can make nice printouts of a file, with as little
or as much help  from  the  program  as  you  want,  depending  on  the
commands.  There are default values for all parameters, so if you don't
put  any  commands  in  at  all,  your  file will come out with filled,
right-justified lines.  The default line-length is 72  characters;  the
default page-length  is 66 lines per page. "Filled lines" means that as
many input words as possible are  packed  onto  a  line  before  it  is
printed; "non-filled" lines go through the formatter w/o rearrangement.
"Right-justified"  simply  means that spaces are added between words to
make all the right margins line up nicely. 

    To set  a  parameter,  use  the  appropriate  commands  below.  All
commands have  the  form of a period followed by two letters. A command
line should have nothing on it but the command and  its  arguments  (if
any); any  text  would  be lost.  

   A command argument can be either ABSOLUTE or RELATIVE : 

.in      5      sets the indent value to 5 spaces

.in     +5      sets the indent value to the CURRENT value plus 5

.ls     -1      sets the line spacing value to the current value 
                minus one

    Also,  all commands have a minimum and maximum value that will weed
out any odd command settings (like setting the line  spacing  to  zero,
for example.   It won't let you do that, but it could be changed if you
REALLY have a burning desire to do so).

    Some commands cause a "break", which is noted in the  table  below.
Before such a command goes into effect, the current line of text is put
out, whether  it  is completely filled or not. (this is what happens at
the end of a paragraph, for example.) A line beginning with spaces or a
tab will cause a break, and will be indented by that  many  spaces  (or
tabs) regardless of the indent value at that time (this is a "temporary
indent", which  can  also  be  set explicitly).  An all blank line also
causes a break.  If you find that seem to  have  some  lines  that  are
indented  strangely,  and  it's not obvious WHY, look at which commands
are causing a break, and which aren't.  For instance:

.fi
.ti 0
this is a line of text
.in 8
                                        <- blank line
more text for the machine to play with

At first glance it seems obvious that the line "this is a line of text"
will be indented zero spaces, but it won't - it will be indented 8. The
indent command does NOT cause a break (although the  .ti  does)  so  it
will  not  cause the line to be put out before setting the indent value
to 8.  Then, when the blank line is encountered, it will cause a break,
and "this is a line of text" will be indented incorrectly.


*********************** Table of Commands *****************************

Command       Break?    Default         Function
-------       ------    -------         ---------
.bp n           yes     n = +1          begin page numbered n

.br             yes                     cause a break

.ce n           yes     n = 1           center next n lines

.fi             yes     active          start filling lines

.fo string      no      empty           sets footer to string

.he string      no      empty           sets header to string

.in n           no      n = 0           sets indent value to n

.ls n           no      n = 1           sets line spacing to n

.m1             no      n = 3           sets topmost margin to n
                             
.m2             no      n = 3           sets 2nd top margin to n lines

.m3             no      n = 3           1st bottom margin to n lines

.m4             no      n = 3           bottom-most margin to n lines
            
.nf             yes     passive         stop filling lines

.pl n           no      n = 66          sets page length to n (paper size)

.rm n           no      n = 72          sets right margin to n

.sp n           yes     n = 1           space down n lines

.ti n           yes     n = 0           sets temporary indent of n

.ul n           no      n = 1           underline next n lines

----------------------------------------------------------------------



Here's what the page parameters look like:

-   _________________________________________________
|   |       top margin - (includes header)          |
|   |-----------------------------------------------|
|   |               top margin 2                    |
|   |-----------------------------------------------|
P   |       :                               :       |
A   |       :<-indent                       :       |
G   |       :                               :       |
E   |       :lots and lots of silly text and:       |
L   |       :other garbage. Get the picture?:       |
E   |          :This is a temp.  indentation:       |
N   |       :                               :       |
G   |       :                right margin ->:       |
T   |       :                               :       |
H   |       :                               :       |
|   |-----------------------------------------------|
|   |               margin 3                        |
|   |-----------------------------------------------|
|   |       margin 4 - (includes footer)            |
-   -------------------------------------------------


To  change  the  default  for  any  parameter,  simply  alter  ROFFGLOB
recompile ROFF1.c and ROFF2.c, and re-clink them with NDIO.CRL (you can
use DIO.CRL, but it doesn't have all the features of NDIO )



************************************************************
A Few Extra Comments on Some of the Commands:
************************************************************

    If you want to center lots of lines, but don't want to count  them,
do something like this:

.ce 1000
lots and
lots of words to
be centered
.ce 0

        --------------------------------------

    To underline a few words on a line:

.fi
.ul
Some
of the words in
.ul
this
sentence are 
.ul
underlined
.nf

would produce

Some of the words in this sentence are underlined.
----                 ----              -----------

(obviously  you  don't have to turn the fill on and off if it's already
on )

        ------------------------------------

    A new paragrah may be caused by using the temporary indent command,
like

.ti +5

or  by  simply  beginning the paragraph with a tab, as you would if you
were just typing.

        ------------------------------------

                    Headers and Footers.

    A page number can be incorporated into  any  header  or  footer  by
putting a "#" in the title where you want the number to go:

.he     This is a witty header title for page #

Each time this is printed at the top of a page, the current page number
will be substituted for the "#".

        ------------------------------------
    If you want to send the output to a file, and don't want  the  page
breaks in there ( that's what I did for this ) set margins 1-4 to zero.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0194

     Volume in drive A has no label
     Directory of A:\

    FILES194 TXT      1851   1-06-88  11:07a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694  11-21-88   1:33p
    INTEGRAL C        4170   5-08-84
    INTEGRAL DCL       235   5-06-84  10:36p
    INTEGRAL PAS      3364   5-06-84   9:06p
    MANUAL   BAT       147   6-08-88   3:02p
    READ     ME       7106   6-10-84   6:02p
    RKF45    C        8070   6-08-84   6:31p
    RKF45    DCL      1537   5-06-84  10:35p
    RKF45    H         388   6-08-84   6:31p
    RKF45    PAS     10484   5-06-84  10:33p
    ROFF     DOC      8212   6-08-84
    ROFF     EXE     21882   6-09-84   6:15p
    ROFF     H0       2575   6-08-84
    ROFF     H1       1207   6-08-84
    ROFF     H2       1367   6-08-84
    ROFF1    C       12714   6-08-84
    ROFF2    C       10368   6-08-84
    ROFF3    C        1144   6-09-84   6:12p
    TSTINTEG C        3107   6-08-84   5:04p
    TSTINTEG PAS      1216   5-08-84   9:05p
    TSTRKF45 C        4696   6-10-84   4:30p
    TSTRKF45 PAS      4523   5-08-84   9:30p
           24 file(s)     111095 bytes
                           41984 bytes free
