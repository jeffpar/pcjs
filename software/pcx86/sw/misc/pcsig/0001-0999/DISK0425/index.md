---
layout: page
title: "PC-SIG Diskette Library (Disk #425)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0425/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0425"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "ENGINEERING PASCAL"

    Most of these programs come from the book entitled "Pascal Programs for
    Scientists and Engineers", published by Sybex.  They include commonly-
    used routines for engineering and statistics.  The MATHPACK.PAS is a
    collection of mathematical and geometrical functions.  For example,
    MEANS.PAS will compute the mean and standard deviation of a set
    of numbers and is RANDOM.LIB which is a random generator.
    
    System Requirements:  64K, one disk drive, monochrome display, and
    Turbo Pascal.
    
    How to Start:  To read the documentation enter TYPE PAS-ENG.DOC
    
    File Descriptions:
    
    BESY     PAS  Evaluation of the Bessel function of the 2nd kind
    CFIT1A   PAS  "  (with a random number generator)
    CFIT1    PAS  Linear least-squares curve fit
    GAUSSJ   LIB  Gauss-Jordan matrix inversion and solution
    GAUSS    PAS  Simultaneous solution by Gaussian elimination
    GAUSID   PAS  Simultaneous solution by Gauss-Seidel
    FITPOL   PAS  Linear least-squares fit to the ratio of two polynomi als
    ERFSIMP  PAS  Gaussian error function by Simpson's rule
    ERFD3    PAS  Gaussian error function and its complement
    ERFD     PAS  Infinite series expansion for Gaussian error function
    ERF4     PAS  An improved Gaussian error function
    DIFFUS   PAS  An example of FITPOL: diffusion of Zn in Cu
    DETERM   PAS  Calculate the determinant of a 3x3 matrix
    CFIT4    PAS  Linear least-squares fit
    CFIT2    PAS  Plotting program using PLOT.LIB
    GD-LINF1 LIB  Linear least-squares fit with Gauss-Jordan routine
    PAS-ENG  DOC  Description of files on this diskette
    NLIN3    PAS  Linear least-squares fit with nonlinearized e-function
    NEWTON-L LIB  Newton program with an iteration counter
    NEWTON   LIB  Solves equations by Newton's method
    NEWDR2   PAS  Solves equations by Newton's method
    NEWDR    PAS  Solves equations by Newton's method
    MEANS    PAS  Computes mean and standard deviation
    MATR1    PAS  Matrix multiplication
    LINFIT2  LIB  Fits a straight line through n sets of x,y points
    LINFIT1  LIB  Fits a straight line through n sets of x,y points
    LEAST6   PAS  Linear least-squares fit with Gauss-Jordan routine
    LEAST3   PAS  Linear least-squares fit with Gauss-Jordan routine
    LEAST2   PAS  Linear least-squares fit with Gauss-Jordan routine
    LEAST1   PAS  Linear least-squares fit using a parabolic curve
    JULIAN   LIB  Converts date to Julian
    GD-LINF2 LIB  "
    MATHPACK PAS  Mathematical & geometrical function package
    TSTSORT  PAS  Test speed of sorting routine
    TSTGAM   PAS  Tests the Gamma function
    TSTBES   PAS  Tests the Bessel function
    TRAPEZ   LIB  "  (with end-correction)
    TRAP2    PAS  "
    TRAP1    PAS  Integrations by the trapezoidal rule
    SQUARE   LIB  Matrix multiplication
    SORT-S   LIB  Shell-Metzner sort
    SORT-Q-R LIB  Recursive Quick-sort
    SORT-Q-N LIB  Nonrecursive Quick-sort
    SORT-B   LIB  Bubble sort
    SOLVGV   PAS  "  (with multiple constant vectors)
    SOLVGJ2  PAS  "  (using more equations than unknowns)
    SOLVGJ   PAS  Simul. equations, Gaussian elimination, Gauss-Jordan
    SOLVEC   PAS  Performs simultaneous solution for complex coefficients
    SIMQ1    PAS  Solves three simultaneous equations by Cramer's rule
    SIMPS    LIB  "  (with end-correction)
    SIMP1    PAS  Integration by Simpson's rule
    ROMB3    PAS  "  (with adjustable panels)
    ROMB1    PAS  Integration by the Romberg method
    RANDOM   PAS  Source code for random number generator
    RANDOM   LIB  Random number generator (0..1)
    RANDG    LIB  Random number generator with gaussian distribution
    PLOT     LIB  A plotter (printer) subroutine
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES425.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 425   Engineering Pascal                                v1 DS2
-----------------------------------------------------------------------
Most of the programs on this diskette come from the book entitled
"Pascal Programs for Scientists and Engineers", published by Sybex.
They include commonly-used routines for engineering and statistics.
The MATHPACK.PAS is a collection of mathematical and geometrical
functions from the Australian Computer Society, based on a paper "A
Compact Mathematical Function Package" by A. P. Clarke and W. Marwood.
 
BESY     PAS  Evaluation of the Bessel function of the 2nd kind
CFIT1    PAS  Linear least-squares curve fit
CFIT1A   PAS  "  (with a random number generator)
CFIT2    PAS  Plotting program using PLOT.LIB
CFIT4    PAS  Linear least-squares fit
DETERM   PAS  Calculate the determinant of a 3x3 matrix
DIFFUS   PAS  An example of FITPOL: diffusion of Zn in Cu
ERF4     PAS  An improved Gaussian error function
ERFD     PAS  Infinite series expansion for Gaussian error function
ERFD3    PAS  Gaussian error function and its complement
ERFSIMP  PAS  Gaussian error function by Simpson's rule
FITPOL   PAS  Linear least-squares fit to the ratio of two polynomials
GAUSID   PAS  Simultaneous solution by Gauss-Seidel
GAUSS    PAS  Simultaneous solution by Gaussian elimination
GAUSSJ   LIB  Gauss-Jordan matrix inversion and solution
GD-LINF1 LIB  Linear least-squares fit with Gauss-Jordan routine
GD-LINF2 LIB  "
JULIAN   LIB  Converts date to Julian
LEAST1   PAS  Linear least-squares fit using a parabolic curve
LEAST2   PAS  Linear least-squares fit with Gauss-Jordan routine
LEAST3   PAS  Linear least-squares fit with Gauss-Jordan routine
LEAST6   PAS  Linear least-squares fit with Gauss-Jordan routine
LINFIT1  LIB  Fits a straight line through n sets of x,y points
LINFIT2  LIB  Fits a straight line through n sets of x,y points
MATRI1   PAS  Matrix multiplication
MEANS    PAS  Computes mean and standard deviation
NEWDR    PAS  Solves equations by Newton's method
NEWDR2   PAS  Solves equations by Newton's method
NEWTON   LIB  Solves equations by Newton's method
NEWTON-L LIB  Newton program with an iteration counter
NLIN3    PAS  Linear least-squares fit with nonlinearized e-function
PAS-ENG  DOC  Description of files on this diskette
PLOT     LIB  A plotter (printer) subroutine
RANDG    LIB  Random number generator with gaussian distribution
RANDOM   LIB  Random number generator (0..1)
RANDOM   PAS  Source code for random number generator
ROMB1    PAS  Integration by the Romberg method
ROMB3    PAS  "  (with adjustable panels)
SIMP1    PAS  Integration by Simpson's rule
SIMPS    LIB  "  (with end-correction)
SIMQ1    PAS  Solves three simultaneous equations by Cramer's rule
SOLVEC   PAS  Performs simultaneous solution for complex coefficients
SOLVGJ   PAS  Simul. equations, Gaussian elimination, Gauss-Jordan
SOLVGJ2  PAS  "  (using more equations than unknowns)
SOLVGV   PAS  "  (with multiple constant vectors)
SORT-B   LIB  Bubble sort
SORT-Q-N LIB  Nonrecursive Quick-sort
SORT-Q-R LIB  Recursive Quick-sort
SORT-S   LIB  Shell-Metzner sort
SQUARE   LIB  Matrix multiplication
TRAP1    PAS  Integrations by the trapezoidal rule
TRAP2    PAS  "
TRAPEZ   LIB  "  (with end-correction)
TSTBES   PAS  Tests the Bessel function
TSTGAM   PAS  Tests the Gamma function
TSTSORT  PAS  Test speed of sorting routine
MATHPACK PAS  Mathematical & geometrical function package
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## PAS-ENG.DOC

{% raw %}
```
****   MTPUG.006   ****   October 15, 1982

Until noted otherwise, the following were written by Allen Miller
and appear in the book entitled "Pascal Programs For Scientists
And Engineers" which is published by Sybex.
They were submitted to this users Group by Juergen Loewner,
D-4400 Muenster, Hoher Heckenweg 3, West Germany

MEANS.PAS:     This  file computes the mean and the standard
               deviation of a set of numbers.

RANDOM.LIB:    A random generator (0..1).

RANDG.LIB:     A random generator with gaussian distribution.

MATR1.PAS:     A matrix multiplication program.

DETERM.PAS:    A  program to calculate the determinant of  a  3x3 
               matrix.

SIMPQ1.PAS:    A program to solve three simultaneous equations.

GAUSS.PAS:     A  program  to  perform simultaneous  solution  by 
               Gaussian elimination.

SOLVGJ.PAS:    same as above but Gauss-Jordan algorithm.

GAUSSJ.LIB:    Gauss-Jordan matrix inversion and solution.

SOLVGV.PAS:    A  program to perform  simultan.  sol.  by  Gauss-
               Jordan elimination with (mult.) const. vect.

SOLVGJ2.PAS:   A  program to perform simult.  solution when using 
               more  equations  than  unknowns  (by  Gauss-Jordan 
               elimination).

SOLVEC.PAS:    A  program  to perform simultaneous  solution  for 
               complex coefficients.

GAUSID.PAS:    A program to perform simult. sol. by Gauss-Seidel.

CFIT1.PAS:     A program to perform a linear least-squares curve-
               fit.

CFIT1a.PAS:    same as above but with a random generator.

PLOT.LIB:      A (printer-) plotter subroutine.

CFIT2.PAS:     A plotting program using PLOT.LIB.

LINFIT1.LIB:   A  program  which fits a straight line  through  n 
               sets of x and y pairs of points.

LINFIT2.LIB:   Another example of the above prog.

CFIT4.PAS:     A linear least-squares fit program.

TSTSORT.PAS:   A Bubble-sort.

SORT-B.LIB:    A variation of the above prog.

SORT-S.LIB:    A Shell-sort procedure.

SORT-Q-S.LIB:  A recursive Quick-sort.

SORT-Q-N.LIB:  A nonrecursive of Quick-sort.

LEAST1.PAS:    A program to perform a linear least-squares fit.

LEAST2.PAS:    As above but now with Gauss-Jordan procedure.

LEAST3.PAS:    A variation of LEAST2.

GD-LINF1.LIB:  and
GD-LINF2.LIB:  and
LEAST6.PAS:    are variationes with different problems.

NEWDR.PAS:     A program to solve equations by Newtons method.

NEWDR2.PAS:    Another version of the program above.

NEWTON.LIB:    The Newton program for a library.

NEWTON-L.LIB:  The Newton program with an iteration counter.

TRAP1.PAS:     A  program  for integrations  by  the  trapezoidal 
               rule.

TRAP2.PAS:     Another better version of the above.

TRAPEZ.LIB:    Another improved version with end-correction.

SIMP1.PAS:     Another integration program now by Simpson's rule.

SIMPS.LIB:     Simp1.pas as a procedure and with end-correction.

ROMB1.PAS:     Last  not least a integration program by the
               Romberg method.

ROMB3.PAS:     As above but now with adjustable panels.

FITPOL.PAS:    A  program to perform linear least-squares fit  to 
               the ratio of 2 polynomals.

DIFFUS.PAS:    An example of the above: diffuson of Zn in Cu.
               (A least squares fit to the linearized e-function)

NLIN3.PAS:     Same  as  above  but now with a  nonlinearized
               e-function.

ERFSIMP.PAS:   The Gaussian Error Function by Simpson's rule.

ERFD.PAS:      An  infinite  series expansion  for  the  Gaussian 
               error function.

ERFD3.PAS:     The Gaussian error function and its complement.

ERF4.PAS:      An improved Gaussian error function.

TSTGAM.PAS:    A program to test the Gamma function

TSTBES.PAS:    A program to test the Bessel function

BESY.PAS:      An  evaluation  of the Bessel function of the  2nd 
               kind.

RANDOM.PAS:    Another random generator.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0425

     Volume in drive A has no label
     Directory of A:\

    BESY     PAS      1792   4-03-85   7:00p
    CFIT1    PAS      1408   4-03-85   7:00p
    CFIT1A   PAS      1664   4-03-85   7:00p
    CFIT2    PAS      1792   4-03-85   7:00p
    CFIT4    PAS      2048   4-03-85   7:00p
    DETERM   PAS      1280   4-03-85   7:00p
    DIFFUS   PAS      3712   4-03-85   7:00p
    ERF4     PAS      1664   4-03-85   7:00p
    ERFD     PAS       896   4-03-85   7:00p
    ERFD3    PAS      1408   4-03-85   7:00p
    ERFSIMP  PAS      1664   4-03-85   7:00p
    FITPOL   PAS      3840   4-03-85   7:00p
    GAUSID   PAS      3456   4-03-85   7:00p
    GAUSS    PAS      3200   4-03-85   7:00p
    GAUSSJ   LIB      3456   4-03-85   7:01p
    GD-LINF1 LIB      2048   4-03-85   7:01p
    GD-LINF2 LIB      2176   4-03-85   7:01p
    JULIAN   LIB       384   4-03-85   7:01p
    LEAST1   PAS      3840   4-03-85   7:01p
    LEAST2   PAS      4096   4-03-85   7:01p
    LEAST3   PAS      3968   4-03-85   7:01p
    LEAST6   PAS      4096   4-03-85   7:01p
    LINFIT1  LIB       896   4-03-85   7:01p
    LINFIT2  LIB      1024   4-03-85   7:01p
    MATR1    PAS      1920   4-03-85   7:01p
    MEANS    PAS      1024   4-03-85   7:01p
    NEWDR    PAS       768   4-03-85   7:01p
    NEWDR2   PAS       768   4-03-85   7:01p
    NEWTON   LIB       512   4-03-85   7:01p
    NEWTON-L LIB       768   4-03-85   7:01p
    NLIN3    PAS      3968   4-03-85   7:01p
    PAS-ENG  DOC      4096   4-03-85   7:02p
    PLOT     LIB      3200   4-03-85   7:01p
    RANDG    LIB       384   4-03-85   7:01p
    RANDOM   LIB       384   4-03-85   7:01p
    RANDOM   PAS       384   4-03-85   7:01p
    ROMB1    PAS      1920   4-03-85   7:01p
    ROMB3    PAS      2048   4-03-85   7:01p
    SIMP1    PAS      1408   4-03-85   7:01p
    SIMPS    LIB      1152   4-03-85   7:01p
    SIMQ1    PAS      2560   4-03-85   7:01p
    SOLVEC   PAS      3712   4-03-85   7:01p
    SOLVGJ   PAS      1792   4-03-85   7:01p
    SOLVGJ2  PAS      2048   4-03-85   7:01p
    SOLVGV   PAS      5504   4-03-85   7:01p
    SORT-B   LIB       640   4-03-85   7:01p
    SORT-Q-N LIB      1408   4-03-85   7:02p
    SORT-Q-R LIB      1024   4-03-85   7:02p
    SORT-S   LIB       640   4-03-85   7:02p
    SQUARE   LIB       640   4-03-85   7:02p
    TRAP1    PAS      1152   4-03-85   7:02p
    TRAP2    PAS      1280   4-03-85   7:02p
    TRAPEZ   LIB      1024   4-03-85   7:02p
    TSTBES   PAS      1664   4-03-85   7:02p
    TSTGAM   PAS       896   4-03-85   7:02p
    TSTSORT  PAS      1408   4-03-85   7:02p
    MATHPACK PAS     12672   5-31-85   8:58a
    FILES425 TXT      3687  11-05-85   2:49p
           58 file(s)     124263 bytes
                           25088 bytes free
