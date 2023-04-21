---
layout: page
title: "PC-SIG Diskette Library (Disk #2491)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2491/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2491"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## NRINFO.DOC

{% raw %}
```
                  ABOUT NUMERICAL RECIPES IN PASCAL

This  NUMERICAL RECIPES PASCAL    SHAREWARE DISKETTE  contains  Pascal
procedures originally published as the Pascal Appendix  to the FORTRAN
book NUMERICAL RECIPES: THE ART OF SCIENTIFIC COMPUTING by William  H.
Press, Saul A. Teukolsky, Brian P. Flannery, and William T. Vetterling
(Cambridge   University  Press,  1986),  and   test   driver  programs
originally  published as  the NUMERICAL RECIPES EXAMPLE  BOOK (PASCAL)
(Cambridge  University Press,  1986).  All  procedures and programs on
this disk are   Copyright (C) 1986  by   Numerical  Recipes  Software.
Please read the file NRREADME.DOC to learn the  conditions under which
you may use these programs for free.

The   procedures on  this  diskette are    translations  from FORTRAN.
Subsequently, new versions of all the procedures have been written, in
native Pascal, and a new, all-Pascal  edition of the NUMERICAL RECIPES
book  has been  published.   These new  materials are available, at  a
modest  cost,   from  Cambridge    University   Press.   Here  follows
information on  ordering  the new  materials,   the  book's table   of
contents and list of included programs:

The book, and diskettes of the REVISED (non-shareware) programs can be
ordered by  telephone:  800-872-7423  [in   NY: 800-227-0247];  or  by
writing Cambridge University Press, 110 Midland  Avenue, Port Chester,
NY 10573.  Current prices at the time of writing are: Book (hardcover)
(37516-9) $44.50.  Diskette (37532-0) $29.95; Example Book (paperback)
(37675-0)  $19.95; Example   Diskette  (37533-9)  $24.95.   NOTE:  The
example book and diskette presume that you also have the main book and
diskette; they are not useful by themselves.

**********************************************************************

TABLE OF CONTENTS and LIST OF PROGRAMS for the book
NUMERICAL RECIPES IN PASCAL: THE ART OF SCIENTIFIC COMPUTING
by William H. Press, Saul A. Teukolsky, Brian P. Flannery,
and William T. Vetterling

Cambridge University Press, New York, 1989.

Copyright (C) 1986, 1989 by Cambridge University Press and
Numerical Recipes Software.

{Preface to the Pascal Edition}{xi}
{Preface}{xiii}
{List of Computer Programs}{xvii}

{1}{PRELIMINARIES}{1}
1.0 Introduction    1
1.1 Program Organization and Control Structures    4
1.2 Conventions for Scientific Computing in Pascal    14
1.3 Error, Accuracy, and Stability    23

{2}{SOLUTION OF LINEAR ALGEBRAIC EQUATIONS}{27}
2.0 Introduction    27
2.1 Gauss-Jordan Elimination    31
2.2 Gaussian Elimination with Backsubstitution    37
2.3 $LU$ Decomposition    39
2.4 Inverse of a Matrix    46
2.5 Determinant of a Matrix    47
2.6 Tridiagonal Systems of Equations    48
2.7 Iterative Improvement of a Solution to Linear Equations    49
2.8 Vandermonde Matrices and Toeplitz Matrices    52
2.9 Singular Value Decomposition    61
2.10 Sparse Linear Systems    74
2.11 Is Matrix Inversion an $N^3$ Process?    84

{3}{INTERPOLATION AND EXTRAPOLATION}{87}
3.0 Introduction    87
3.1 Polynomial Interpolation and Extrapolation    90
3.2 Rational Function Interpolation and Extrapolation    93
3.3 Cubic Spline Interpolation    97
3.4 How to Search an Ordered Table    101
3.5 Coefficients of the Interpolating Polynomial    104
3.6 Interpolation in Two or More Dimensions    107

{4}{INTEGRATION OF FUNCTIONS}{116}
4.0 Introduction    116
4.1 Classical Formulas for Equally-Spaced Abscissas    117
4.2 Elementary Algorithms    124
4.3 Romberg Integration    129
4.4 Improper Integrals    130
4.5 Gaussian Quadratures    138
4.6 Multidimensional Integrals    144

{5}{EVALUATION OF FUNCTIONS}{149}
5.0 Introduction    149
5.1 Series and Their Convergence    150
5.2 Evaluation of Continued Fractions    153
5.3 Polynomials and Rational Functions    155
5.4 Recurrence Relations and Clenshaw's Recurrence Formula    159
5.5 Quadratic and Cubic Equations    163
5.6 Chebyshev Approximation    165
5.7 Derivatives or Integrals of a Chebyshev-approximated Function   170
5.8 Polynomial Approximation from Chebyshev Coefficients    172

{6}{SPECIAL FUNCTIONS}{175}
6.0 Introduction    175
6.1 Gamma Function, Beta Function, Factorials, Binomial
    Coefficients    176
6.2 Incomplete Gamma Function, Error Function, Chi-Square
    Probability Function, Cumulative Poisson Distribution  180
6.3 Incomplete Beta Function, Student's Distribution,
    F$-Distribution, Cumulative Binomial Distribution    186
6.4 Bessel Functions of Integer Order    191
6.5 Modified Bessel Functions of Integer Order    197
6.6 Spherical Harmonics    202
6.7 Elliptic Integrals and Jacobian Elliptic Functions    205

{7}{RANDOM NUMBERS}{212}
7.0 Introduction    212
7.1 Uniform Deviates    213
7.2 Transformation Method: Exponential and Normal Deviates    222
7.3 Rejection Method: Gamma, Poisson, Binomial Deviates    226
7.4 Generation of Random Bits    233
7.5 The Data Encryption Standard    239
7.6 Monte Carlo Integration    249

{8}{SORTING}{254}
8.0 Introduction    254
8.1 Straight Insertion and Shell's Method    255
8.2 Heapsort    258
8.3 Indexing and Ranking    261
8.4 Quicksort    264
8.5 Determination of Equivalence Classes    267


{9}{ROOT FINDING AND NONLINEAR SETS OF EQUATIONS}{270}
9.0 Introduction    270
9.1 Bracketing and Bisection    274
9.2 Secant Method and False Position Method    279
9.3 Van Wijngaarden--Dekker--Brent Method    283
9.4 Newton-Raphson Method Using Derivative    286
9.5 Roots of Polynomials    292
9.6 Newton-Raphson Method for Nonlinear Systems of Equations    305

{10}{MINIMIZATION OR MAXIMIZATION OF FUNCTIONS}{309}
10.0 Introduction    309
10.1 Golden Section Search in One Dimension    312
10.2 Parabolic Interpolation and Brent's Method in One Dimension
   318
10.3 One-Dimensional Search with First Derivatives    322
10.4 Downhill Simplex Method in Multidimensions    326
10.5 Direction Set (Powell's) Methods in Multidimensions    331
10.6 Conjugate Gradient Methods in Multidimensions    339
10.7 Variable Metric Methods in Multidimensions    346
10.8 Linear Programming and the Simplex Method    351
10.9 Combinatorial Minimization: Method of Simulated Annealing   366

{11}{EIGENSYSTEMS}{375}
11.0 Introduction    375
11.1 Jacobi Transformations of a Symmetric Matrix    382
11.2 Reduction of a Symmetric Matrix to Tridiagonal Form:
     Givens and Householder Reductions    389
11.3 Eigenvalues and Eigenvectors of a Tridiagonal Matrix    397
11.4 Hermitian Matrices    404
11.5 Reduction of a General Matrix to Hessenberg Form    405
11.6 The $QR$ Algorithm for Real Hessenberg Matrices    410
11.7 Improving Eigenvalues and/or Finding Eigenvectors by Inverse
     Iteration    418

{12}{FOURIER TRANSFORM SPECTRAL METHODS}{422}
12.0 Introduction    422
12.1 Fourier Transform of Discretely Sampled Data    427
12.2 Fast Fourier Transform (FFT)    431
12.3 FFT of Real Functions, Sine and Cosine Transforms    438
12.4 Convolution and Deconvolution Using the FFT    449
12.5 Correlation and Autocorrelation Using the FFT    457
12.6 Optimal (Wiener) Filtering with the FFT    459
12.7 Power Spectrum Estimation Using the FFT    463
12.8 Power Spectrum Estimation by the Maximum Entropy (All Poles)
     Method    473
12.9 Digital Filtering in the Time Domain    478
12.10 Linear Prediction and Linear Predictive Coding    487
12.11 FFT in Two or More Dimensions    493

{13}{STATISTICAL DESCRIPTION OF DATA}{498}
13.0 Introduction    498
13.1 Moments of a Distribution: Mean, Variance, Skewness,
    and so forth     499
13.2 Efficient Search for the Median    503
13.3 Estimation of the Mode for Continuous Data    507
13.4 Do Two Distributions Have the Same Means or Variances?    509
13.5 Are Two Distributions Different?    515
13.6 Contingency Table Analysis of Two Distributions    523
13.7 Linear Correlation    532
13.8 Nonparametric or Rank Correlation    536
13.9 Smoothing of Data    543

{14}{MODELING OF DATA}{547}
14.0 Introduction    547
14.1 Least Squares as a Maximum Likelihood Estimator    548
14.2 Fitting Data to a Straight Line    553
14.3 General Linear Least Squares    558
14.4 Nonlinear Models    572
14.5 Confidence Limits on Estimated Model Parameters    580
14.6 Robust Estimation    590

{15}{INTEGRATION OF ORDINARY DIFFERENTIAL EQUATIONS}{599}
15.0 Introduction    599
15.1 Runge-Kutta Method    602
15.2 Adaptive Stepsize Control for Runge-Kutta    607
15.3 Modified Midpoint Method    614
15.4 Richardson Extrapolation and the Bulirsch-Stoer Method    617
15.5 Predictor-Corrector Methods    624
15.6 Stiff Sets of Equations    628

{16}{TWO POINT BOUNDARY VALUE PROBLEMS}{633}
16.0 Introduction    633
16.1 The Shooting Method    637
16.2 Shooting to a Fitting Point    641
16.3 Relaxation Methods    645
16.4 A Worked Example: Spheroidal Harmonics    658
16.5 Automated Allocation of Mesh Points    666
16.6 Handling Internal Boundary Conditions or Singular Points    669

{17}{PARTIAL DIFFERENTIAL EQUATIONS}{673}
17.0 Introduction    673
17.1 Flux-Conservative Initial Value Problems    681
17.2 Diffusive Initial Value Problems    693
17.3 Initial Value Problems in Multidimensions    700
17.4 Fourier and Cyclic Reduction Methods for Boundary Value
     Problems    704
17.5 Relaxation Methods for Boundary Value Problems    710
17.6 Operator Splitting Methods and ADI    718

{APPENDIX A: References}{727}

{APPENDIX B: Table of Program Dependencies}{732}

{Index}{737}


{Computer Programs by Chapter and Section}

 1.0      FLMOON  phases of the moon, calculated by date
 1.1      JULDAY  Julian day number, calculated by date
 1.1      BADLUK  Friday the 13th when the moon is full
 1.1      CALDAT  calendar date, calculated from Julian day number

 2.1      GAUSSJ  matrix inversion and linear equation solution, Gauss-Jordan
 2.3      LUDCMP  linear equation solution, $LU$ decomposition
 2.3      LUBKSB  linear equation solution, backsubstitution
 2.6      TRIDAG  linear equation solution, tridiagonal equations
 2.7      MPROVE  linear equation solution, iterative improvement
 2.8      VANDER  linear equation solution, Vandermonde matrices
 2.8      TOEPLZ  linear equation solution, Toeplitz matrices
 2.9      SVDCMP  singular value decomposition of a matrix
 2.9      SVBKSB  singular value backsubstitution
 2.10     SPARSE  linear equation solution, sparse matrix, conjugate-gradient
                  method

 3.1      POLINT  interpolation, polynomial
 3.2      RATINT  interpolation, rational function
 3.3      SPLINE  interpolation, construct a cubic spline
 3.3      SPLINT  interpolation, evaluate a cubic spline
 3.4      LOCATE  search an ordered table, bisection
 3.4      HUNT  search an ordered table, correlated calls
 3.5      POLCOE  polynomial coefficients from a table of values
 3.5      POLCOF  polynomial coefficients from a table of values
 3.6      POLIN2  interpolation, two-dimensional polynomial
 3.6      BCUCOF  interpolation, two-dimensional, construct bicubic
 3.6      BCUINT  interpolation, two-dimensional, evaluate bicubic
 3.6      SPLIE2  interpolation, two-dimensional, construct two-dimensional
                  spline
 3.6      SPLIN2  interpolation, two-dimensional, evaluate two-dimensional
                  spline

 4.2      TRAPZD  integrate a function by trapezoidal rule
 4.2      QTRAP  integrate a function to desired accuracy, trapezoidal rule
 4.2      QSIMP  integrate a function to desired accuracy, Simpson's rule
 4.3      QROMB  integrate a function to desired accuracy, Romberg adaptive 
                 method
 4.4      MIDPNT  integrate a function by extended midpoint rule
 4.4      QROMO  integrate a function to desired accuracy, open Romberg
 4.4      MIDINF  integrate a function on a semi-infinite interval
 4.4      MIDSQL  integrate a function with a square-root singularity
 4.4      MIDSQU  integrate a function with an inverse square-root singularity
 4.4      MIDEXP  integrate a function which decreases exponentially
 4.5      QGAUS  integrate a function by Gaussian quadratures
 4.5      GAULEG  compute Gauss-Legendre weights and abscissas
 4.6      QUAD3D  integrate a function over a three-dimensional space

 5.1      EULSUM  sum a series, Euler--van Wijngaarden algorithm
 5.3      DDPOLY  polynomial, fast evaluation of specified derivatives
 5.3      POLDIV  polynomials, divide one by another
 5.6      CHEBFT  fit a Chebyshev polynomial to a function
 5.6      CHEBEV  Chebyshev polynomial evaluation
 5.7      CHINT  integrate a function already Chebyshev fitted
 5.7      CHDER  derivative of a function already Chebyshev fitted
 5.8      CHEBPC  polynomial coefficients from a Chebyshev fit
 5.8      PCSHFT  polynomial coefficients of a shifted polynomial

 6.1      GAMMLN  logarithm of gamma function
 6.1      FACTRL  factorial function
 6.1      BICO  binomial coefficients function
 6.1      FACTLN  factorial function, logarithm
 6.1      BETA  beta function
 6.2      GAMMP  gamma function, incomplete
 6.2      GAMMQ  gamma function, incomplete, complementary
 6.2      GSER  gamma function, incomplete, series evaluation
 6.2      GCF  gamma function, incomplete, continued fraction evaluation
 6.2      ERF  error function
 6.2      ERFC  error function, complementary
 6.2      ERFCC  error function, complementary, concise routine
 6.3      BETAI  beta function, incomplete
 6.3      BETACF  beta function, incomplete, continued fraction evaluation
 6.4      BESSJ0  Bessel function $J_0$
 6.4      BESSY0  Bessel function $Y_0$
 6.4      BESSJ1  Bessel function $J_1$
 6.4      BESSY1  Bessel function $Y_1$
 6.4      BESSJ  Bessel function $J$ of integer order
 6.4      BESSY  Bessel function $Y$ of integer order
 6.5      BESSI0  Modified Bessel function $I_0$
 6.5      BESSK0  Modified Bessel function $K_0$
 6.5      BESSI1  Modified Bessel function $I_1$
 6.5      BESSK1  Modified Bessel function $K_1$
 6.5      BESSI  Modified Bessel function $I$ of integer order
 6.5      BESSK  Modified Bessel function $K$ of integer order
 6.6      PLGNDR  Legendre polynomials, associated (spherical harmonics)
 6.7      EL2  Elliptic integral of the first and second kinds
 6.7      CEL  Elliptic integrals, complete, all three kinds
 6.7      SNCNDN  Jacobian elliptic functions

 7.1      RAN0  random deviates, improve an existing generator
 7.1      RAN1  random deviates, uniform
 7.1      RAN2  random deviates, uniform
 7.1      RAN3  random deviates, uniform, subtractive method
 7.2      EXPDEV  random deviates, exponential
 7.2      GASDEV  random deviates, normally distributed (Box-Muller)
 7.3      GAMDEV  random deviates, gamma-law distribution
 7.3      POIDEV  random deviates, Poisson distributed
 7.3      BNLDEV  random deviates, binomial distributed
 7.4      IRBIT1  random bit sequence, generate
 7.4      IRBIT2  random bit sequence, generate
 7.5      RAN4  random deviates, uniform, using Data Encryption Standard
 7.5      DES  encryption, using the Data Encryption Standard

 8.1      PIKSRT  sort an array by straight insertion
 8.1      PIKSR2  sort two arrays by straight insertion
 8.1      SHELL  sort an array by Shell's method
 8.2      SORT  sort an array by heapsort method
 8.2      SORT2  sort two arrays by heapsort method
 8.3      INDEXX  sort, construct an index for an array
 8.3      SORT3  sort, use an index to sort 3 or more arrays
 8.3      RANK  sort, construct a rank table for an array
 8.4      QCKSRT  sort an array by quicksort method
 8.5      ECLASS  determine equivalence classes
 8.5      ECLAZZ  determine equivalence classes

 9.0      SCRSHO  graph a function to search for roots
 9.1      ZBRAC  roots of a function, search for brackets on
 9.1      ZBRAK  roots of a function, search for brackets on
 9.1      RTBIS  root of a function, find by bisection
 9.2      RTFLSP  root of a function, find by false-position
 9.2      RTSEC  root of a function, find by secant method
 9.3      ZBRENT  root of a function, find by Brent's method
 9.4      RTNEWT  root of a function, find by Newton-Raphson
 9.4      RTSAFE  root of a function, find by Newton-Raphson and bisection
 9.5      LAGUER  root of a polynomial, Laguerre's method
 9.5      ZROOTS  roots of a polynomial, Laguerre's method with deflation
 9.5      QROOT  root of a polynomial, complex or double, Bairstow
 9.6      MNEWT  nonlinear systems of equations, Newton-Raphson
10.1      MNBRAK  minimum of a function, bracket
10.1      GOLDEN  minimum of a function, find by golden section search
10.2      BRENT  minimum of a function, find by Brent's method
10.3      DBRENT  minimum of a function, find using derivative information
10.4      AMOEBA  minimum of a function, multidimensions, downhill-simplex
10.5      POWELL  minimum of a function, multidimensions, Powell's method
10.5      LINMIN  minimum of a function, along a ray in multidimensions
10.5      F1DIM  minimum of a function, used by {LINMIN}
10.6      FRPRMN  minimum of a function, multidimensions, conjugate-gradient
10.6      DF1DIM  minimum of a function, used by {LINMIN}
10.7      DFPMIN  minimum of a function, multidimensions, variable metric
10.8      SIMPLX  linear programming maximization of a linear function
10.9      ANNEAL  minimize by simulated annealing (traveling salesman problem)

11.1      JACOBI  eigenvalues and eigenvectors of a symmetric matrix
11.1      EIGSRT  eigenvectors, sorts into order by eigenvalue
11.2      TRED2  Householder reduction of a real, symmetric matrix
11.3      TQLI  eigenvalues and eigenvectors of a symmetric tridiagonal matrix
11.5      BALANC  balance a nonsymmetric matrix
11.5      ELMHES  Hessenberg form, reduce a general matrix to
11.6      HQR  eigenvalues of a Hessenberg matrix

12.2      FOUR1  Fourier transform (FFT) in one dimension
12.3      TWOFFT  Fourier transform of two real functions
12.3      REALFT  Fourier transform of a single real function
12.3      SINFT  sine transform using FFT
12.3      COSFT  cosine transform using FFT
12.4      CONVLV  convolution or deconvolution of data using FFT
12.5      CORREL  correlation or autocorrelation of data using FFT
12.7      SPCTRM  power spectrum estimation using FFT
12.8      MEMCOF  power spectrum estimation, evaluate maximum entropy
                  coefficients
12.8      EVLMEM  power spectrum estimation using maximum entropy coefficients
12.10     FIXRTS  roots of a polynomial, reflects inside unit circle
12.10     PREDIC  linear prediction using MEM coefficients
12.11     FOURN  Fourier transform (FFT) in multidimensions

13.1      MOMENT  moments of a data set, calculate
13.2      MDIAN1  median of a data set, calculate by sorting
13.2      MDIAN2  median of a data set, calculate iteratively
13.4      TTEST  Student's t-test for difference of means
13.4      AVEVAR  mean and variance of a data set, calculate
13.4      TUTEST  Student's t-test for means, with unequal variances
13.4      TPTEST  Student's t-test for means, with paired data
13.4      FTEST  F-test for difference of variances
13.5      CHSONE  chi-square test for difference between data and model
13.5      CHSTWO  chi-square test for difference between two data sets
13.5      KSONE  Kolmogorov-Smirnov test of data against model
13.5      KSTWO  Kolmogorov-Smirnov test between two data sets
13.5      PROBKS  Kolmogorov-Smirnov probability function
13.6      CNTAB1  contingency table analysis using chi-square
13.6      CNTAB2  contingency table analysis using entropy measure
13.7      PEARSN  correlation between two data sets, Pearson's
13.8      SPEAR  correlation between two data sets, Spearman's rank
13.8      KENDL1  correlation between two data sets, Kendall's tau
13.8      KENDL2  contingency table analysis using Kendall's tau
13.9      SMOOFT  smooth data using FFT

14.2      FIT  fit data to a straight line, least squares
14.3      LFIT  linear least squares fit, general, normal equations
14.3      COVSRT  covariance matrix, sort, used by {LFIT}
14.3      SVDFIT  linear least squares fit, general, singular value
                  decomposition
14.3      SVDVAR  variances from singular value decomposition
14.3      FPOLY  fit a polynomial, using {LFIT} or {SVDFIT}
14.3      FLEG  fit a Legendre polynomial, using {LFIT} or {SVDFIT}
14.4      MRQMIN  nonlinear least squares fit, Marquardt's method
14.4      FGAUSS  fit a sum of Gaussians, using {MRQMIN}
14.6      MEDFIT  fit data to a straight line robustly, least absolute
                  deviation

15.1      RK4  integrate one step of ODEs, 4th order Runge-Kutta
15.1      RKDUMB  integrate ODEs by 4th order Runge-Kutta
15.2      RKQC  integrate one step of ODEs with accuracy monitoring
15.2      ODEINT  integrate ODEs with accuracy monitoring
15.3      MMID  integrate ODEs by modified midpoint method
15.4      BSSTEP  integrate ODEs, Bulirsch-Stoer step
15.4      RZEXTR  rational function extrapolation, used by {BSSTEP}
15.4      PZEXTR  polynomial extrapolation, used by {BSSTEP}

16.1      SHOOT  two-point boundary value problem, solve by shooting
16.2      SHOOTF  two-point boundary value problem, shooting to a fitting point
16.3      SOLVDE  two-point boundary value problem, solve by relaxation
16.4      SFROID  spheroidal functions, obtain using {SOLVDE}

17.5      SOR  elliptic PDE solved by simultaneous overrelaxation method
17.6      ADI  elliptic PDE solved by alternating direction implicit method
```
{% endraw %}

## NRREADME.DOC

{% raw %}
```
             NUMERICAL RECIPES PASCAL SHAREWARE DISKETTE

The entire contents of this diskette are
Copyright (C) 1986 by Numerical Recipes Software.

HERE ARE ANSWERS TO YOUR IMMEDIATE QUESTIONS:

** What is this diskette?  ** This NUMERICAL  RECIPES PASCAL SHAREWARE
DISKETTE contains Pascal procedures originally published as the Pascal
Appendix to the FORTRAN book NUMERICAL RECIPES: THE  ART OF SCIENTIFIC
COMPUTING (Cambridge University Press, 1986), and test driver programs
originally published as the  NUMERICAL  RECIPES EXAMPLE BOOK  (PASCAL)
(Cambridge University Press, 1986).

** What kinds of procedures  are these Numerical Recipes? **  They are
practically a complete library for  scientific computation.  Numbering
more than  200,  their scope  includes   integration,  linear algebra,
differential  equations, Fourier methods,  data analysis,  statistics,
lots of special functions, random   numbers,  sorting, root   finding,
optimization, and much more.

** Do I really get this whole library for FREE? ** Yes, providing that
you follow these  simple  rules:   (1) You must   read and accept  the
disclaimer of warranty at the end of this  document.  (2) You must not
expect any  user support from  Numerical Recipes Software,   Cambridge
University Press, or the authors of  the Numerical Recipes books.  (3)
You must not copy  or redistribute any  of  the programs or procedures
for commercial purposes.  You CAN make copies of the programs for your
friends  and    colleagues, providing   that you  include   this  file
(especially its copyright notice and  disclaimer of warranty) with any
copy that you make.

** What's  the  catch, then?  **    None at  all.   Many  thousands of
satisfied users paid more than $20 to purchase exactly the programs on
this disk,  which were sold   by Cambridge  University  Press (C.U.P.)
between 1986 and 1989.  C.U.P.  now sells a  revised  version  of  the
Numerical  Recipes program library,  whose   Pascal  style   is   much
improved, but whose basic algorithmic  workings are identical  to this
disk.  Rather  than  let  the older version go  to waste,  its authors
decided to make it available to the shareware community of users.

** How can I figure out what the procedures do? ** One way is  to read
the brief descriptions of all the programs in the  file NRINFO.DOC.  A
better  way is to  look  at the  book   Numerical Recipes: The  Art of
Scientific Computing  in   any  one of its  three  editions  (FORTRAN,
Pascal, or  C).  If you  don't  want to buy this book   from Cambridge
University Press   (see the file  NRINFO.DOC),  you  can  find   it in
libraries.  Or, take  a pencil and   a small  piece  of paper  into  a
bookstore that carries the book and take  notes  on which programs you
might find interesting.

** How do I figure out how to use  the procedures? **  Again, you have
several  options.   All  the   procedures  (named   *.PAS)  come  with
demonstration  programs  (named *.DEM).   These demonstration programs
are included on this shareware diskette.  (When sold, they are sold as
a separate  diskette.)  Usually  you can figure    out how  to   use a
procedure by figuring out its .DEM program.  Another way is to look at
the Numerical Recipes book in a library or bookstore.

** Aren't you just trying to get me to  buy the book?  **  Think of it
this way: Most shareware comes with the requirement that if you use it
more than casually, you are  required to become  a registered user and
pay a fee.  We are not requiring any  fee at all.   We think that  you
will  be able to  use MOST of the procedures  on this diskette without
the Numerical Recipes book.  If you become a more-than-casual user, or
if you look at the book in a bookstore, we  are betting  that you will
WANT to buy it,  and  perhaps  then  want to purchase  the revised and
improved versions of the programs, also.   But it is completely  up to
you.

** OK, what if I do want to get the book? ** Call Cambridge University
Press at their  toll-free  number,  800-872-7423.  (In  New York  call
800-227-0247 or 914-937-9600.)  Ask for "Numerical Recipes in Pascal",
ISBN  number  0-521-37516-9.  We think  you'll like it.  (Over 100,000
copies of the book are in print, in FORTRAN, Pascal, and C.)

** What  are the files  on this diskette? **  All  the  procedures, in
Pascal source  code, are  in   the ZIP   file NRPAS13.ZIP.   You   use
PKUNZIP.EXE to decompress them.  (For  info  just execute PKUNZIP with
no  command  line  arguments.)  All  the  demonstration  programs  are
similarly in NRPEX10.ZIP (PEX means Pascal EXamples).  Some data files
used by the procedures and demonstrations programs are in NRPDATA.ZIP.
The files NRPAS13.LST and NRPEX10.LST each list the names of the files
in their corresponding ZIP file.   The short file  MODFILE.PAS is used
by many of the  procedures to customize  to your particular variety of
Pascal  compiler; feel free to modify  it, if  you need to.  The  file
NRINFO.DOC tells about the book Numerical Recipes in Pascal and  gives
a   brief description of  all the  procedures.   The  file you are now
reading is NRREADME.DOC.

Good luck, and happy number-crunching!

                       DISCLAIMER OF WARRANTY
                       ---------- -- -------- 
THE PROGRAMS AND  PROCEDURES  ON  THIS DISKETTE  ARE PROVIDED "AS  IS"
WITHOUT  WARRANTY OF  ANY KIND.   WE  MAKE NO  WARRANTIES, EXPRESS  OR
IMPLIED, THAT THE PROGRAMS  AND PROCEDURES ARE FREE  OF ERROR, OR  ARE
CONSISTENT WITH ANY  PARTICULAR  STANDARD OF MERCHANTABILITY,  OR THAT
THEY WILL MEET YOUR REQUIREMENTS FOR ANY PARTICULAR APPLICATION.  THEY
SHOULD NOT BE RELIED ON FOR SOLVING A PROBLEM WHOSE INCORRECT SOLUTION
COULD RESULT IN INJURY TO A PERSON OR LOSS OF PROPERTY.  IF YOU DO USE
THE PROGRAMS OR PROCEDURES IN SUCH A MANNER, IT  IS AT YOUR OWN  RISK.
THE AUTHORS   AND  PUBLISHER   DISCLAIM ALL LIABILITY    FOR   DIRECT,
INCIDENTAL, OR  CONSEQUENTIAL DAMAGES RESULTING FROM YOUR  USE  OF THE
PROGRAMS OR PROCEDURES ON THIS DISKETTE.  ANY LIABILITY  OF THE PERSON
OR PERSONS FROM WHOM YOU DIRECTLY OR INDIRECTLY OBTAINED THIS DISKETTE
WILL BE LIMITED EXCLUSIVELY  TO PRODUCT REPLACEMENT OF DISKETTES  WITH
MANUFACTURING DEFECTS.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2491

     Volume in drive A has no label
     Directory of A:\

    NRREADME DOC      6328   6-08-90   3:15p
    NRINFO   DOC     21807   6-08-90   3:15p
    NRPAS13  ZIP    133940   6-08-90   8:48a
    NRPAS13  LST      2674   6-08-90   3:14p
    NRPEX10  ZIP    132887   6-08-90   9:05a
    NRPEX10  LST      3119   6-08-90   9:04a
    NRPDATA  ZIP     21402   6-08-90   9:33a
    MODFILE  PAS       216   6-08-90   3:14p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO       BAT        28  10-04-90   5:21a
    GO       TXT       962  12-17-90   9:58a
           11 file(s)     346891 bytes
                           10240 bytes free
