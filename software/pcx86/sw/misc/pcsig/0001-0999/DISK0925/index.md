---
layout: page
title: "PC-SIG Diskette Library (Disk #925)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0925/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0925"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LSTSQR"

    LSTSQR carries out a least-squares fit of data to a variety of
    functional forms including linear, logarithmic, polynomial and
    exponential.  It allows multiple fits of the same data using the same
    or different functions without exiting the program.  LSTSQR87 supports
    the 8087 math co-processor.
    
    The program has many measures of quality-of-fit, including standard
    deviation and the 95% confidence interval.  The program also graphs and
    prints the fit if desired.  You can input data by keyboard or from data
    files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.DOC

{% raw %}
```
                              FILES ON THIS DISK
                               (subset version)
             ----------------------------------------------------
                TD1.COM   - TURBO Designer program
                TD1.DOC   - TURBO Designer documentation.
            GLIMPSE.COM   - Gives Subset users a glimpse
                            of the advanced version.
           PRACTICE.COM   - Lets new users toy around while learning
                            how to use pull down menus. Also shows some
                            of the features of the GOODIES toolbox.
           PRACTICE.PAS   - Source code for PRACTICE.COM.
           PRACTICE.DAT   - Data for PRACTICE.
             GLOBAL.PAS   - Global variables for TURBO Designer output.
                            (For TURBO Pascal v4.0)
            GLOBAL3.PAS   - Global variables for TURBO Designer output.
                            (For TURBO Pascal v3.0)
                 PD.PAS   - Pull down (spaghetti, uncommented) source code.
           PRINTDOC.COM   - Utility to put documentation on printer.
              FILES.DOC   - This file.
             README.      - Read this first for initial help.
              ---------------------------------------------------
```
{% endraw %}

## FILES925.TXT

{% raw %}
```
Disk No:  925
Program Title: LSTSQR version 1.00A
PC SIG version: 1.2

LSTSQR carries out a least-squares fit of data to a variety of
functional forms including linear, logarithmic, polynomial and
exponential.  The program allows multiple fits of the same data using
the same or different functions without exiting the program.  LSTSQR87
is nearly identical to LSTSQR except that it supports the 8087 math
co-processor.  In addition, the program provides many measures of
quality-of-fit, including standard deviation and the 95% confidence
interval.  The program also graphs and prints the fit if desired.  Data
can be inputed by keyboard or from data files on disk.

TURBO DESIGNER has been moved to disk #1353.

Usage:  Programming.

Special Requirements:  8087 math co-processor optional and CGA graphics.

How to Start:  Type GO (press enter).

Suggested Registration:  None specified.

File Descriptions:

LSTSQR87 COM  Main program for use with 8087 co-processor.
LSTSQR   COM  Main program.
LSTSQR   DOC  Program documentation.
4X6      FON  Printer font for graphing results.
ERROR    MSG  Contains error messages.
README        Instructions on printing documentation.
DESCRIPT      Brief description of program.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## LSTSQR.DOC

{% raw %}
```
                        DOCUMENTATION FOR PROGRAM LSTSQR


     GENERAL INFORMATION
                          
          AUTHOR:  Arthur Ferguson                                      
                   21 Upper Joclyn Avenue
                   Framingham, MA  01701 

          PURPOSE:  To provide a least-squares fit of data to a variety of 
                    functional forms.
                    
          FUNCTIONAL FORMS SUPPORTED:  
                     A.  Linear (Y = A + BX)
                     B.  Polynomial (Y = A + BX + CX^2 ....) up to a 
                         maximum power of X^5.
                     C.  Exponential (Y = A*Exp(BX))
                     D.  Ln(Y) = A + BX
                     E.  Ln(Y) = A + B/X
                     F.  Ln(Y) = A + B/X + C*Ln(X)
                     G.  1/Y = A + BX
                     H.  Y = A + BX + C/(X^2)
                     I.  Y = A + B/X
                     J.  Y = A + B*Ln(X)
               
          FITTING PROCEDURE USED:  Since all of the functional forms except 
               the exponetial (C) are linear in the coefficients A, B, 
               etc., a single-pass "linear" procedure was used for those 
               functional forms (See the books by Miller and Hildebrand 
               referred to in the acknowledgements).  For the exponential
               functional form a first approximation obtained by 
               linearizing the equation was refined with an iterative 
               solution of the appropriate non-linear equation using 
               Newton's method (See Miller).                               
     
          INTERACTIVE FLEXIBILITY:  A system of menus combined with calls 
               for user input at key decision points allows multiple fits 
               of the same data set, using the same or different functional 
               forms, with the opportunity to change, add, or delete data 
               points between fits, and the fitting of several different 
               data sets, all without leaving the program.  
     
          MEASURES OF THE QUALITY OF THE FIT REPORTED (for all functional 
          forms except the exponential): 
               Standard Deviations of the fitting parameters 
               95% Confidence Intervals of the fitting parameters
               Standard Deviation of the points
               Correlation Coefficient of the fit
               Sum of the Squares of the Residuals (the only
               measure provided for the exponential fit)

          PROGRAMMING LANGUAGE USED: Borland Turbo Pascal Version 3.0
          
          FORMS OF PROGRAM PROVIDED: LSTSQR.COM and LSTSQR87.COM.  These 
               are identical except that LSTSQR87 supports and requires 
               the 8087 numeric co-processor chip while LSTSQR neither 
               supports nor requires the 8087.

          MAXIMUM NUMBER OF DATA POINTS: 200.     
    
          PRECISION OF CALCULATED QUANTITIES
               Up to 11 significant digits (48-bit Reals) with LSTSQR.
               Up to 16 significant digits (64-bit Reals) with LSTSQR87.

          DATA WEIGHTING OPTIONS: Individual weighting of data points or 
               uniform (equal) weighting.
                     
          DATA INPUT OPTIONS: Keyboard entry from within the program or 
               entry in the form of previously prepared ASCII disk file.
               For the format requirements of a disk data file see below.  

          DATA OUTPUT OPTIONS: Screen, printer, or disk file (DOS paths 
               supported), selectable from within the program.
               
          RESULTS OUTPUT OPTIONS: Screen or printer, selectable from within 
               the program.
               
          GRAPHING CAPABILITIES: After a fit is obtained the data and the 
               fitting curve can be graphed (requires CGA or compatible 
               graphics adapter).  WHEN GRAPHING IS PLANNED, THE FILES 
               4X6.FON AND ERROR.MSG MUST BE IN THE CURRENT DISK DIRECTORY!  
               The absence of ERROR.MSG will produce an non-fatal error 
               when graphing is attempted.  Graphs may be printed on IBM 
               compatible printers using the PrtSc or Shift PrtSc key.  
               

                              
     ACKNOWLEDGEMENTS
               
          The theoretical background and general procedure for linear and 
     polynomial least-squares fitting of data was gotten from 
     F.B. Hildebrand, Introduction to Numerical Analysis, McGraw-Hill, 
     New York (1956).  The Gauss-Jordan Elimination procedure for inverting 
     matrices, the equations for determining standard deviations for the 
     fitting parameters and the correlation coefficients in the cases of 
     the "linear" fitting procedures, and the theoretical background for 
     the iterative non-linear fit to the exponential functional form using 
     Newton's Method were obtained from Arthur R. Miller, Pascal Programs 
     for Scientists and Engineers, Sybex (1981).  The equations for the t 
     values used to calculate the 95% confidence intervals for the fitting 
     parameters from their standard deviations were based on those 
     presented by W.J. Blaedel and D.G. Iverson in Analytical Chemistry, 
     Vol. 48, No. 13, p. 2027 (1976).   The graphics routines used were 
     from the Borland Turbo Graphix Toolbox.  
     
     

     RESTRICTIONS ON DATA VALUES AND FORMAT REQUIREMENTS FOR DISK DATA FILES
     
          Data values must conform to the ranges and formats of Turbo 
     Pascal reals.  This means that the exponents of numbers in scientific 
     notation must be represented by E followed by a positive or negative 
     integer (1.5E3 = 1.5 X (10 to the 3rd) = 1500).  The E must follow the 
     last digit of the mantissa with no spaces (1.5E3, not 1.5 E3).  For 
     LSTSQR numbers must be in the range 1E-38 to 1E+38, and the exponents 
     in data values may contain a maximum of two digits (1.5E3 and 1.5E03 
     are O.K.; 1.5E003 is not and will cause an I/O error and termination 
     of the program).  For LSTSQR87 numbers must be in the range 4.09E-307 
     to 1.67E+308, and three digit exponents in data values are O.K. 
     (1.5E003 is acceptable to LSTSQR87).  Though it seems not to be 
     
     necessary, it is probably a good idea to follow the convention of 
     including at least one digit before the decimal point in any data 
     value, even if it is only a zero (for example, 0.5 instead of .5).  

          Disk data files must be pure ASCII files with no symbols other 
     than those involved in the data values themselves.  The first line of 
     the file must contain only one item, the letter W if the data points 
     are to be individually weighted, or the letter N if uniform, equal 
     weighting of the data points is to be used.  Each succeeding line in 
     the file must contain the X value, the Y value, and, where individual 
     weighting factors are included, the weighting value for a single data 
     point.  These values must appear in the order X, Y, weighting factor 
     and be separated by a blank space (NOT a comma).  Below is a sample 
     data file for a set of equally weighted data points 

                           N
                           0.055127 34.06
                           0.041545 54.21
                           0.033333 82.64
                           0.027832 131.6
                           0.023889 200.4
                           0.020925 318.3
                           0.018615 485.1
                           0.016764 765.8
                           0.015249 1188.1
                           0.013984 1845.2

     When fit to the functional form Ln(Y) = A + B/X this set of data gives 
     A = 2.18386, B = 0.07466, and a correlation coefficient of 0.99997426.  
     

                                                                 
     REQUIREMENT OF THE USE OF THE "ENTER" (CARRIAGE RETURN) KEY WHEN 
     ENTERING INFORMATION OR RESPONDING TO QUERIES WITHIN THE PROGRAM
     
          This program uses buffered input throughout, which means that all 
     data values and other information entered from within the program and 
     all menu selections and responses to program queries must be followed 
     by pressing the ENTER or carriage return key (Sometimes pressing the 
     ENTER key alone is sufficient).  Some users used to the current trend 
     toward unbuffered input when single character responses are required 
     may find that this use of buffered input maddeningly slow, but it was 
     consciously chosen to provide the opportunity to correct mistakes or 
     change one's mind before the response is acted on by the program.
               
                                                                      

     FITTING CRITERIA AND THE CHOICE OF WEIGHTING FACTORS
     
          For all functional forms linear in the coefficients, which means 
     all forms except the exponential, the criterion for the fit was the 
     minimization of the sum of the squares of the ABSOLUTE residuals 
     [Y(calc) - Y(exp)].  Therefore, if individual weighting factors are to 
     be used, an appropriate basis for them would be the estimated ABSOLUTE 
     error of the individual data points.  For the exponential functional
     form the criterion for the fit was the minimization of the sum of the 
     squares of the RELATIVE residuals [(Y(calc) - Y(exp))/Y(exp)] (For the 
     rationale for this see Miller).  Therefore, an appropriate basis for 
     weighting factors in this case would be the estimated RELATIVE error 
     of the individual data points.                                        
    
     INTERPRETATION OF THE 95% CONFIDENCE INTERVALS 
     
          The figures given for the 95% confidence intervals represent the 
     "distance" on either side of the value of a parameter to the 
     boundaries of the 95% confidence interval.  Therefore, if the listing 
     of the results of a fit give the parameter A with a value of 1.507 and 
     a 95% confidence interval of 0.021, it means that there is a 95% 
     probability that A lies in the interval 1.507 + or - 0.021.
     
                                                                

     THINGS THAT HAVE BEEN FOUND TO CRASH THE PROGRAM

          In the testing of this program only two things have been found to 
     make it crash.  These are 1) a mistake in entering the name of a data 
     input file which causes the program to search for a file that does not 
     exist and 2) the entering of data, from either a data file or the 
     keyboard, that is out of the acceptable range or contains too many 
     digits in the exponent (See restrictions on data values above).  Both 
     of these cause I/O errors and program termination.  
     


     STEPS TO TAKE IN RUNNING THE PROGRAM

     1.   Use your favorite text editor to set up a data input file as 
          described above, unless you prefer to enter the data from within 
          the program.
     2.   Be sure that either LSTSQR.COM or LSTSQR87.COM, depending on 
          which one you intend to use, is in the current disk directory and 
          that the files 4X6.FON and ERROR.MSG are also in the current 
          directory if you intend to graph the results.  
     3.   Type LSTSQR or LSTSQR87.
     4.   Follow the menus and instructions in the program.
          
          
          
     PROGRAM TESTING AND DISCLAIMERS
     
          This program has been tested on an 8086-based COMPAQ DeskPro with 
     an 8087 and an 8088-based monochrome IBM PC without an 8087.  Both 
     computers have two floppy disk drives and a RAM disk but no hard disk.  
     The tests involved fitting equally weighted data sets for each of the 
     functional forms which the program can handle.  All tests produced the 
     expected results with no equipment problems.  Most of the data sets 
     had previously been run on other computers using other programs, and 
     in all of these cases the results from this program were in excellent 
     agreement with the previous results.  Therefore, the author believes 
     that the program will produce reliable results with no risk to 
     equipment.  HOWEVER, HE ASSUMES NO RESPONSIBILITY FOR THE CONSEQUENCES 
     OF ITS USE.  

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0925

     Volume in drive A has no label
     Directory of A:\

    4X6      FON       285   7-23-87   2:08p
    DESCRIPT          1329   9-18-87  10:46p
    ERROR    MSG       567   7-23-87   2:08p
    FILES    DOC      1276   2-29-88   1:00a
    FILES925 TXT      1366   3-02-89   3:35p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       925   2-24-89   2:58p
    LSTSQR   COM     56509   9-02-87   3:04p
    LSTSQR   DOC     12680   9-18-87  10:14p
    LSTSQR87 COM     55006   9-02-87   3:02p
    READ     ME        189   9-04-87  12:36p
           11 file(s)     130170 bytes
                           27136 bytes free
