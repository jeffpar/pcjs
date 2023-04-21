---
layout: page
title: "PC-SIG Diskette Library (Disk #207)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0207/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0207"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOTUS WORKSHEETS #1"

    This disk contains a collection of some really nice worksheets. AUTO.WKS
    records every auto expense and tracks repair history. JOGLOG.WKS, a
    memory hog (needs 340k), is designed for the serious runner who must
    track performance at every level.  FEDTAX83.WKS is complete.  PAD.WKS
    is a sophisticated demo of Desktop-like templates. Additional
    spreadsheets are available from the author.  AUTO and JOGLOG are
    especially well designed for profressional performance management.
    
    System Requirements: 340k, two disk drives, LOTUS 1-2-3 version 1A
    
    How to Start:  Access through LOTUS 1-2-3
    
    File Descriptions:
    
    123KEY   BAT  Batch start up file
    123KEY   PRO  Prokey template - permits using numeric key pad with LOTUS
    123KEY   DOC  Documentation
    AUTO     WKS  Calculates your gas usage and mileage  (Vince Heiker)
    JOGLOG   WKS  Simple jogging log  (Vince Heiker)
    FEDTAX83 WKS  1983 Tax Schedules 1040, 1040A, B, C, W  (Les Wheeler)
    TREND123 MAC  Version 1.0 (John Dannenfeldt) - Curve fitting macro
    TREND123 DOC  Documentation
    PAD      WKS  Version 1.2 (Frank Girard) - Desktop-like template
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 123KEY.DOC

{% raw %}
```
          PROKEY SUBSET FOR 1-2-3        [123KEY.DOC]
          -----------------------
In order for Prokey to work with a 123 spreadsheet, certain
setups are required.  First, the 123 system disk must contain
the files PROKEY.EXE (the main PROKEY tm. program) as well as
the file 123KEY.PRO which is the file that contains all the
custom key assignments to be used while in 1-2-3.

An additional third file may be included 123KEY.BAT (may be
re-named Autoexec.bat).  This file installs prokey and the keys
before it calls in the main 1-2-3 program.
     [123KEY.BAT]=  PROKEY/R 123KEY.PRO
                    123
                    ^Z
Upon boot-up the PROKEYS for 1-2-3 will be loaded into high
memory and will be invisible to the user until called.

One additional set-up is required on each new spreadsheet that
is started.  Because of the way 1-2-3 defines certain of the
function keys, it is necessary to inbed the definitions some
where in a group of isolated spreadsheet cells.  In doing so
you will cause PROKEY to interact with the 1-2-3 typing alternative.

The result is to move the functions STEP NAME ABS QUERY TABLE CALC GRAPH
from their respective keys F3 F4 F7 F8 F9 F10 to their new assignments
respectively altF3 altF4 altF7 altF8 altF9 altF10.

The move is to allow the re-assignment of those function keys as follows:
         F3   becomes HOME
         F4   becomes END
         F7   becomes the UP arrow
         F8   becomes the DOWN arrow
         F9   becomes the LEFT arrow
        F10   becomes the RIGHT arrow

You may now leave your NumLock key on and use the keypad as a
numeric keypad.  As stated above this requires a ONE-TIME-ONLY
setup on EACH NEW spreadsheet.  The setup is an automatic feature
built into the Prokey set loaded by the first step.  To use the
setup feature do this:

****  AFTER YOU HAVE CALLED IN A NEW SHEET OR CLEARDED THE       ****
****  OLD SHEET TO BUILD A NEW ONE, PRESS altF2  .               ****

      AltF2 moves the cursor to Cell position BA1 and writes
      cells that 1-2-3 's typing alternative will use in
      re-defining the keypad.  If this group of cells at
      BA1 is going to interfere with the spreadsheet, you
      may change their location by useing the 1-2-3 MOVE
      command to move the group to another section of the sheet.
      Or if you can change the prokey 123PRO.KEY file to have
      another beginning cell in place of BA1 (To do this pull
      up 123PRO.KEY with an editor and find BA1, change it!).

      Each cell in this special group has a range name and they
      remain the same in a 1-2-3 move. It is these names that
      the typing alternative uses in looking for those cells.






               |------|------|
               | HELP |EDIT  |
               |      |      |
               |  alt | alt  |                Print this template on an
               | step |setup |                Epson or Epson-like printer
               |------|------|                in the compressed print mode.
               | HOME |END   |
               |      |      |                then draw the arrows in the
               |  alt |alt   |                bottom four boxes as follows:
               | name |abs   |
               |------|------|
               |      |      |
               | GOTO |WINDOW|
               |      |      |
               |------|------|
               | /|\  |  |   |
               |  |   | \|/  |                    up           down
               |  alt |alt   |
               |query |table |
               |------|------|                   left          right
               | /___ | ___\ |
               | \    |    / |
               |  alt |alt   |                  Now tape this to your 1-2-3
               | calc |graph |                  plastic template.
               |______|______|


To use this you need to own PROKEY and download three files to put on your
1-2-3 system disk.  They are as follows : [123KEY.DOC]=this explanation
[123KEY.PRO]=the prokey definition file   [123KEY.BAT]=the new 123 autoexec.bat

```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #207, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  123KEY  .BAT         CRC = 00 00

--> FILE:  123KEY  .DOC         CRC = 3B B9

--> FILE:  123KEY  .PRO         CRC = 06 41

--> FILE:  AUTO    .WKS         CRC = A6 9E

--> FILE:  FEDTAX83.WKS         CRC = BD 9B

--> FILE:  JOGLOG  .WKS         CRC = 15 D4

--> FILE:  PAD     .WKS         CRC = 06 72

--> FILE:  TREND123.DOC         CRC = 53 75

--> FILE:  TREND123.MAC         CRC = D1 15

--> FILE:  XXX     .            CRC = 46 EA

--> FILE:  CRC     .TXT         CRC = 2A 7C

--> FILE:  CRCK4   .COM         CRC = BD 22

 ---------------------> SUM OF CRCS = 15 8B

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## FILES207.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No xxx   Lotus 123 Templates and Tools                    v1      
------------------------------------------------------------------------
123KEY   BAT  Batch start up file
123KEY   DOC  Documentation
123KEY   PRO  Prokey template - permits using numeric key pad with LOTUS
AUTO     WKS  Calculates your gas usage and mileage (Vince Heiker)
FEDTAX83 WKS  1983 Tax Schedules 1040, 1040A, B, C, W (Les Wheeler) 
JOGLOG   WKS  Simple jogging log (Vince Heiker)
PAD      WKS  V1.2 (Frank Girard) - Desktop-like template 
TREND123 DOC  Documentation
TREND123 MAC  V1.0 (John Dannenfeldt) - Curve fitting macro for Lotus
```
{% endraw %}

## TREND123.DOC

{% raw %}
```
                                   TREND123
                                 version 1.0
                       A Lotus 123 Curve fitting macro
               created by John C. Dannenfeldt (Compuserve 71435,561)

The file TREND123.WKS is a independent macro that may be used within any Lotus
123 spreadsheet.  This version enables you to create a set of data points with
the range name LINE or CURVE which fit any set of data points you range name
DATA with either a least squares straight line or an exponential curve:

     Linear (LINE)-         y=(c1 * x) + c2

     Exponential (CURVE)-   ln y=(c1 * x) + c2

Restrictions:
     The DATA range must be continous.. no blank cells.
     ...     ...    must be less than 257 points long.
     You must be at A70 before you load the macro into your worksheet.
     Your spreadsheet must not extend beyond A1..IV69 or it may be partially
        overwritten.

Instructions:
     Before running the macro you must:
          1) Define a continuous set of numbers range named DATA.
               They may be in either a row or column orientation but the
               program takes much longer to work on the vertical ranges
               because it must first transpose them into a horizontal range.

          2) Name the macro so that you can call it by typing:

               /RNC\t  then press (ENTER)
               A70     then press (ENTER)

          3) Load the macro into your spreadsheet-
             Now goto A70 and type:

               /FCCETREND123   then press (ENTER)

    To activate the macro type ALT-T and follow the instructions.  When the
    macro is done it will return you to its main menu and ask if you would
    like to do a linear or exponential curve fit or quit.  If you do a
    different curve fit the old LINE or CURVE will be destroyed.  If you quit
    you may then look at LINE or CURVE directly or even better graph it beside
    the original DATA that you were trying to fit the curve to.

Comments:
     I was forced to create some type of curve fitting regime for an
application I had and in the process developed part of the current macro.  The
next version will include some additional curve fitting routines such as
parabolic, moving averages and exponential smoothing.
     Some of the things I don't like about this macro are a result of the
limitations of the 123 macro language.  After finally figuring out how to
transpose a column into a row I certainly wished that 123 had a general
command for that function.  Hopefully the next version will have an easier to
use macro language.
     Feel free to make changes to the routine to fit your needs.  Some obvious
variants would be a basically vertical layout (which would make vertical
ranges faster to input) and locating the origin of the macro at a point more
suitable for your particular spreadsheet( remember that all references to
cells within a macro must be changed for it to work in a new location).
     If you got this macro in the form TREND123.HEX you must convert it to a
binary file called TREND123.WKS before trying to use it in a worksheet.

 If you have any suggestions contact me on COMPUSERVE at the IBMPC SIG.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0207

     Volume in drive A has no label
     Directory of A:\

    123KEY   BAT        31  12-11-83   4:09p
    123KEY   DOC      4166  12-11-83   4:09p
    123KEY   PRO       602  12-11-83   4:10p
    AUTO     WKS     44928   6-24-84   6:17p
    CRC      TXT      1123  11-15-84   9:17a
    CRCK4    COM      1536  10-21-82   7:54p
    FEDTAX83 WKS     38400   1-12-84   8:31a
    FILES207 TXT       768   6-24-84   7:23p
    JOGLOG   WKS    100992   6-24-84   6:25p
    PAD      WKS     29312   2-05-84   1:24a
    TREND123 DOC      3250  12-11-83   2:39p
    TREND123 MAC      4224  12-11-83   2:32p
           12 file(s)     229332 bytes
                           86016 bytes free
