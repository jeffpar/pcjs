---
layout: page
title: "PC-SIG Diskette Library (Disk #302)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0302/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0302"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOTUS WORKSHEETS #3"

    LOTUS WORKSHEETS 3 is a collection of miscellaneous but useful
    worksheets.  Investors, in particular, may find the stock analysis
    worksheets very helpful for what-if analysis and portfolio management.
    The cash and checkbook management worksheets are designed well, too.
    Business professionals are sure to find most of these worksheets
    useful, which are easy to use and nicely detailed.
    
    System Requirements: 256K, two disk drives, LOTUS 1-2-3 v2.0
    
    How to Start:  Access through LOTUS 1-2-3
    
    File Descriptions:
    
    2X2DISC  WKS  2 x 2 Linear Discriminant Function (Fisher's Method)
    CARCOST  WKS  Auto operating expense
    BIORYTHM WKS  Biorythm calculator and graph
    AMORT1X  WKS  Loan amortization self study
    ACRS     WKS  ACRS depreciation
    PAD      WKS  123 template-notepad/calendar/phone directory -menued
    OPTIONZ  WKS  Options manager/stock current price
    NLBE     WKS  Non-linear breakeven analysis
    MISTOX   WKS  Stock portfolio analysis-what-ifs
    LEDGER   WKS  Checkbook ledger
    IRR      WKS  Internal rate of return calculator
    INDUST   WKS  Industry Analysis - Transportation sector stocks
    ICR_CALC WKS  IRS interest calculator for tax underpayment
    HANGROBO WKS  Game of hangman--very slow
    GOLF     WKS  Golf handicapper
    FLCHART  WKS  Draw & place flowchart symbols
    EXPENSRP WKS  Travel business expense report
    DATEWR   WKS  Date value to string form
    CASHREAD WKS  Instructions for CASH.WKS
    CASHMAN  WKS  Manual for CASH.WKS
    CASH     WKS  Checkbook/cash management system & journal
    PRNTMENU WKS  Menu for enhanced printer control - for EPSON
    RENTAL   WKS  Rental property analysis
    TAXPLAN  WKS  Five-year tax planner
    TREND123 WKS  Macros-trend analysis-curve fitting
    TREND123 DOC  Documentation file for TREND123.WKS
    DIR-LIST      Listing of included files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

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

 If you have any suggestions contact me on COMPUSERVE at the IBMPC SIG.  END123.WKS befor
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0302

     Volume in drive A has no label
     Directory of A:\

    CASHREAD WKS      6912   7-29-84   9:54a
    ICR_CALC WKS      9472   7-29-84  10:04a
    NLBE     WKS     30592   7-29-84   9:54a
    PRNTMENU WKS      4352   7-29-84   9:54a
    RENTAL   WKS      4736   7-29-84   9:54a
    AMORT1X  WKS     27648   7-29-84   9:46a
    BIORYTHM WKS      7040   7-29-84   9:46a
    CASH     WKS     10624   7-29-84   9:46a
    CASHMAN  WKS     20608   7-29-84   9:47a
    EXPENSRP WKS      5248   7-29-84   9:47a
    FLCHART  WKS      8192   7-29-84   9:47a
    GOLF     WKS      2816   7-29-84   9:47a
    MISTOX   WKS     37504   7-29-84   9:47a
    2X2DISC  WKS     16256   1-01-80  12:56a
    TAXPLAN  WKS     13952  10-03-84   8:46a
    DATEWR   WKS      5120  10-31-84   7:58p
    INDUST   WKS     21504  12-01-84  11:36a
    OPTIONZ  WKS     21376   7-29-84   8:55a
    PAD      WKS     29312   7-29-84   8:56a
    HANGROBO WKS     16384   7-29-84   8:52a
    ACRS     WKS      6400   7-29-84   8:51a
    CARCOST  WKS      6272   7-29-84   8:52a
    IRR      WKS      7552   7-29-84   8:53a
    LEDGER   WKS      9728   3-27-84  11:17a
    TREND123 DOC      3328   2-23-84   6:51a
    TREND123 WKS      4224   2-23-84   6:49a
    DIR-LIST          2688  12-16-84   8:31p
           27 file(s)     339840 bytes
                           11264 bytes free
