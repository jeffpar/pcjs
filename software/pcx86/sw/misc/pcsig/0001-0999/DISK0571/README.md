---
layout: page
title: "PC-SIG Diskette Library (Disk #571)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0571/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0571"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOTUS WORKSHEETS #7"

    1-2-3 Worksheets 7 contains various useful worksheets for financial
    analysis and accounting applications.  PAYROLL.WKS is a standalone
    payroll system that can be used in many small businesses.  It even
    includes graphs.  LOAN.WKS  requires 340k RAM and calculates
    amortization on loans up to 50 years.  PAD.WKS is a Desktop-like
    electronic notepad.   RENTAL.WKS is a detailed management system for
    income property owners. This disk requires that you have LOTUS 1-2-3
    version 1.1a, or you can convert to version 2 of LOTUS.  It will work
    with any system that runs LOTUS.
    
    System Requirements:   256K, two disk drives, monochrome display, LOTUS
    1-2-3 v1.1
    
    How to Start:   Access through LOTUS 1-2-3
    
    File Descriptions:
    
    PAD      WKS  LOTUS worksheet - Menu driven Notepad
    LOAN     WKS  LOTUS worksheet - Amortization on 50 year loan
    CHR256   WKS  LOTUS worksheet - Display all IBM characters in workshee t
    BAR      WKS  LOTUS worksheet - Data  Entry for Curve Smoothing
    PAYROLL  WKS  LOTUS worksheet - Menu driven Payroll
    SCHEDULE WKS  LOTUS worksheet - Project Scheduler
    PRNCINT  WKS  LOTUS worksheet - Principal, Interest and Insurance
    RENTAL   WKS  LOTUS worksheet - Rental Units financial Manager
    PRTFOL   WKS  LOTUS worksheet - Portfolio Manager
    TREND123 MAC  LOTUS 1-2-3 Trend line curve fitting macro
    TREND123 DOC  Documentation for TREND123.MAC
    PAYROLL  PIC  Payroll grafix
    CHR256   DOC  Documentation for using IBM characters in a Lotus Workshee
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHR256.DOC

{% raw %}
```
 
Use of this worksheet is as follows:
 
  -  In your Lotus spreadsheet place the "cursor" in the cell that
     is to contain the special character.
 
  -  Issue a /FileCombineCopyNamedrange command
 
        Give the range as  CHRxxx where xxx is the number 000 to 256
        of the value to be brought in.
 
        Give the worksheet as  CHR256
 
To stack special characters for printer commands, they must be in
successive cells with width one. The special characters may be
editted via the F2 function to repeat printing, centering, etc.
 
It is as easy as that.

```
{% endraw %}

## FILES571.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  571  1-2-3 Worksheets #7                                  V1  DS2
---------------------------------------------------------------------------
This disk contains various useful worksheet utilities as described below.
It requires that you have LOTUS 1-2-3 version 1.1a, or you can convert to
version 2 of LOTUS.  It will work with any system that will run LOTUS.
 
BAR      WKS  LOTUS worksheet - Data  Entry for Curve Smoothing
CHR256   WKS  LOTUS worksheet - Display all IBM characters in worksheet
LOAN     WKS  LOTUS worksheet - Amortization on 50 year loan
PAD      WKS  LOTUS worksheet - Menu driven Notepad
PAYROLL  WKS  LOTUS worksheet - Menu driven Payroll
PRNCINT  WKS  LOTUS worksheet - Principal, Interest and Insurance
PRTFOL   WKS  LOTUS worksheet - Portfolio Manager
RENTAL   WKS  LOTUS worksheet - Rental Units financial Manager
SCHEDULE WKS  LOTUS worksheet - Project Scheduler
TREND123 DOC  Documentation for TREND123.MAC
TREND123 MAC  LOTUS 1-2-3 Trend line curve fitting macro
CHR256   DOC  Documentation for using IBM characters in a Lotus Worksheet
PAYROLL  PIC  Payroll grafix
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## NOTES571.TXT

{% raw %}
```
Program name: PC SIG LOTUS 1-2-3 WORKSHEETS
 
Author name:  Various Authors
Address:      1030D East Duane Avenue
              Sunnyvale, CA 94086
 
Telephone Number: (408) 730-9291
 
Program Description:
 
TREND123.WKS is a independent macro that may be used within any Lotus 123
spreadsheet, enabling the user to create a set of data points with the range
name LINE or CURVE to fit either a least squares straight line or an exponential
curve.  Other worksheets on this disk enable the user to manage rental units,
work out a business payroll, calculate principal and interest on a loan, keep
notes, embed IBM characters into a spreadsheet, or calculate the amortization
on a loan.
 
System requirements vary with the worksheet, but 256K minimum is recommended.
Also needed is Lotus 123 and any IBM PC or IBM PC compatable.
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

### Directory of PC-SIG Library Disk #0571

     Volume in drive A has no label
     Directory of A:\

    BAR      WKS     64384   3-13-85   9:32a
    CHR256   DOC       589   6-23-86   5:05p
    CHR256   WKS     11520   7-10-85   7:55p
    FILES571 TXT      1312   6-23-86   5:07p
    GO       BAT      1086   6-23-86   5:03p
    LOAN     WKS     49280   4-03-85  12:03p
    NOTES571 TXT       848   6-23-86   4:59p
    PAD      WKS     29312   2-05-84   1:24a
    PAYROLL  PIC       768   8-11-85   8:56p
    PAYROLL  WKS     60800   4-03-85   8:28p
    PRNCINT  WKS      3712   4-03-85  12:33p
    PRTFOL   WKS     47872   4-03-85  12:13p
    RENTAL   WKS      4736   4-17-85   8:03a
    SCHEDULE WKS     38528   4-17-85   8:10a
    TREND123 DOC      3250  12-11-83   2:39p
    TREND123 MAC      4224  12-11-83   2:32p
           16 file(s)     322221 bytes
                           31744 bytes free
