---
layout: page
title: "PC-SIG Diskette Library (Disk #554)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0554/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0554"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "LINPACK LIBRARY"

    The Linear Equation Package (LINPACK) is a set of routines which solves
    systems of linear equations and related problems.  This package was
    developed by the Applied Mathematics Division of Argonne National
    Laboratory; this source code was taken from a distribution disk
    provided by International Mathematics and Statistical Libraries, Inc.
    (IMSL).
    
    System Requirements:  FORTRAN compiler, 256K memory, color
    monitor, one drive, graphics card and printer.
    
    How to Start:   For instructions on FOR listings, refer to your FORTRAN
    language manual. Consult the INDEX file to review the routines included
    on this disk.
    
    Suggested Registration:  $10.00
    
    File Descriptions:
    SPOFA    FOR  real positive definite factor
    SPPCO    FOR  real positive definite packed condition estimate
    SPOSL    FOR  real positive definite solver
    SCHEX    FOR  real Cholesky decomposition exchange
    SCHDD    FOR  real Cholesky decomposition downdate
    SCHDC    FOR  real Cholesky decomposition decompose
    INDEX         An index of all the routines on the library and driver dis
    SPPDI    FOR  real positive definite packed determinant, inverse, inerti
    SPPSL    FOR  real positive definite packed solver
    SPPFA    FOR  real positive definite packed factor
    SPODI    FOR  real positive definite determinant, inverse, inertia
    SPOCO    FOR  real positive definite condition estimate
    SPBSL    FOR  real positive definite banded solver
    SPBFA    FOR  real positive definite banded factor
    SPBDI    FOR  real positive definite banded determinant, inverse, inerti
    SPBCO    FOR  real positive definite banded condition estimate
    SGTSL    FOR  real general tridiagonal solver solver
    SGESL    FOR  real general solver
    SGEFA    FOR  real general factor
    SGEDI    FOR  real general determinant, inverse, inertia
    SGECO    FOR  real general condition estimate
    SGBSL    FOR  real general band solver
    SGBFA    FOR  real general band factor
    SGBDI    FOR  real general band determinant, inverse, inertia
    SGBCO    FOR  real general band condition estimate
    SCHUD    FOR  real Cholesky decomposition update
    SQRDC    FOR  real orthogonal triangular decompose
    SPTSL    FOR  real positive definite tridiagonal solver
    NOTES554 TXT  A comprehensive writeup on use of these routines
    SSWAP    FOR  |
    SSCAL    FOR  |
    SROTG    FOR  |
    SROT     FOR  |
    SSISL    FOR  real symmetric indefinite solver
    SSIFA    FOR  real symmetric indefinite factor
    SSIDI    FOR  real symmetric indefinite determinant, inverse,inertia
    SSICO    FOR  real symmetric indefinite condition estimate
    SQRTS    FOR  real orthogonal triangular
    SQRSL    FOR  real orthogonal triangular solver
    SNRM2    FOR  |
    SDOT     FOR  |
    SCOPY    FOR  | metic calculations.
    SAXPY    FOR  | library.  These handle vector movement and arith-
    SASUM    FOR  | from the "Basic Linear Algebraic Subroutine"
    ISAMAX   FOR  | This and the following are the support routines
    SMACH    FOR  Computes machine dependent parameters of floating
    STRSL    FOR  real triangular solver
    STRDI    FOR  real triangular determinant, inverse, inertia
    STRCO    FOR  real triangular condition estimate
    SSVDC    FOR  real singular value decomposition
    SSPSL    FOR  real symmetric indefinite packed solver
    SSPFA    FOR  real symmetric indefinite packed factor
    SSPDI    FOR  real symmetric indefinite packed determinant, inverse, ine
    SSPCO    FOR  real symmetric indefinite packed condition estimate
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES554.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  554  LINPACK LIBRARY (FORTRAN PROGRAMS)                   v1  DS2
---------------------------------------------------------------------------
The Linear Equation Package (LINPACK) is a set of routines which solves
systems of linear equations and related problems.  This package was
developed by the Applied Mathematics Division of Argonne National
Laboratory; this source code was taken from a distribution disk provided by
International Mathematics and Statistical Libraries, Inc.  (IMSL).
 
INDEX         An index of all the routines on the library and driver disks
SCH      FOR  Main routine/driver for testing the SCH routines.
SCHDC    FOR  real Cholesky decomposition decompose
SCHDD    FOR  real Cholesky decomposition downdate
SCHEX    FOR  real Cholesky decomposition exchange
SCHUD    FOR  real Cholesky decomposition update
SEX      FOR  Main routine/driver for testing the exchange routines.
SG       FOR  Main routine/driver for testing the SG routines.
SGBCO    FOR  real general band condition estimate
SGBDI    FOR  real general band determinant, inverse, inertia
SGBFA    FOR  real general band factor
SGBSL    FOR  real general band solver
SGECO    FOR  real general condition estimate
SGEDI    FOR  real general determinant, inverse, inertia
SGEFA    FOR  real general factor
SGESL    FOR  real general solver
SGT      FOR  Main routine/driver for testing the SGT routines.
SGTSL    FOR  real general tridiagonal solver solver
SP       FOR  Main routine/driver for testing the SP routines.
SPBCO    FOR  real positive definite banded condition estimate
SPBDI    FOR  real positive definite banded determinant, inverse,inertia
SPBFA    FOR  real positive definite banded factor
SPBSL    FOR  real positive definite banded solver
SPOCO    FOR  real positive definite condition estimate
SPODI    FOR  real positive definite determinant, inverse, inertia
SPOFA    FOR  real positive definite factor
SPOSL    FOR  real positive definite solver
SPPCO    FOR  real positive definite packed condition estimate
SPPDI    FOR  real positive definite packed determinant, inverse,inertia
SPPFA    FOR  real positive definite packed factor
SPPSL    FOR  real positive definite packed solver
SPTSL    FOR  real positive definite tridiagonal solver
SQR      FOR  Main routine/driver for testing the SQR routines.
SQRDC    FOR  real orthogonal triangular decompose
SQRSL    FOR  real orthogonal triangular solver
SQRTS    FOR  real orthogonal triangular
SS       FOR  Main routine/driver for testing the SS routines.
SSICO    FOR  real symmetric indefinite condition estimate
SSIDI    FOR  real symmetric indefinite determinant, inverse,inertia
SSIFA    FOR  real symmetric indefinite factor
SSISL    FOR  real symmetric indefinite solver
SSPCO    FOR  real symmetric indefinite packed condition estimate
SSPDI    FOR  real symmetric indefinite packed determinant, inverse, inertia
SSPFA    FOR  real symmetric indefinite packed factor
SSPSL    FOR  real symmetric indefinite packed solver
SSV      FOR  Main routine/driver for testing the SSV routines.
SSVDC    FOR  real singular value decomposition
ST       FOR  Main routine/driver for testing the ST routines.
STRCO    FOR  real triangular condition estimate
STRDI    FOR  real triangular determinant, inverse, inertia
STRSL    FOR  real triangular solver
SUD      FOR  This is the test driver for matrix update subs.
SMACH    FOR  Computes machine dependent parameters of floating
              point arithmetic for use in testing only.  It is
              not required by LINPACK proper.
ISAMAX   FOR  | This and the following are the support routines
SASUM    FOR  | from the "Basic Linear Algebraic Subroutine"
SAXPY    FOR  | library.  These handle vector movement and arith-
SCOPY    FOR  | metic calculations.
SDOT     FOR  |
SNRM2    FOR  |
SROT     FOR  |
SROTG    FOR  |
SSCAL    FOR  |
SSWAP    FOR  |
NOTES554 TXT  A comprehensive writeup on use of these routines
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## NOTES554.TXT

{% raw %}
```
Program name:       LINPACK LIBRARY

Author name:        Argonne National Laboratory

Address:            None given

Telephone Number:   None given 

Suggested Donation: None 

Program Description: 

The Linear Equation Package (LINPACK) is a set of routines which solves 
systems of linear equations and related problems.  This package was 
developed by the Applied Mathematics Division of Argonne National Laboratory 
through funding by the National Science Foundation and Department of Energy.  
The original package was developed and tested on large machines over the 
years 1976 through 1979.  The source included on these diskettes was taken 
from a distribution disk provided by International Mathematics and 
Statistical Libraries, Inc.  (IMSL). 

An excerpt from the LINPACK USER'S GUIDE Introduction: "Many of the 
subroutines deal with square coefficient matrices, where there are as many 
equations as unknowns.  Some of the subroutines process rectangular 
coefficient matrices, where the system may be over- or under-determined.  
Such systems are frequently encountered in least squares problems and other 
statistical calculations.  Different subroutines are intended to take 
advantage of different special properties of the matrices and thereby save 
computer time and storage."

The total package will handle equations in single, double, complex and 
complex double precision arithmetic.  For each data type, there are two 
diskettes: test driver and linpack source.  This diskette contains the 
single precision version of the LINPACK library.
   
The driver disk contains a FORTRAN source and link file list (.LNK) for each 
test set.  The source for these drivers can be used to study the calling 
sequences for the various routines.  Since each driver has been successfully 
tested under MS-DOS using Microsoft FORTRAN (V3.31), it is not necessary for 
you to rebuild these executable modules.  If you should, however, decide to 
alter any routines, it would be best to test them using these drivers.  The 
.LNK files are used with the BUILDS.BAT file, so examine that file if you 
wish to rebuild the test executables. 

Each of the following test files was successfully constructed and executed:  
SCH, SGT, SP, SQR, SS, SSV, ST, SG.  Each driver evaluates those single 
precision routines whose names begin with the same characters as the name of 
the driver.  The drivers SUD and SEX test the update and exchange routines 
respectively.

The source disk contains the LINPACK routines along with several of the BLAS 
routines.  Each source file contains some information about usage, but a 
fair amount of knowledge about the different techniques for solving systems 
of equations is required.  If you are unsure where to begin, try 
implementing the SG* (single precision general) routines first since they do 
not utilize any special storage techniques.

I offer the following list of references as a sample with which I am most 
familiar; not necessarily the best, just the ones I know :

LINPACK USER'S GUIDE by Dongarra, Moler, Bunch and Stewart, published by 
    Society for Industrial and Applied Mathematics 
        This is "THE BOOK" written by the authors of the LINPACK system.

NUMERICAL METHODS by Ake Bjorck, published by Prentice-Hall 
        This book has everything, but it is definitely not easy reading. Any 
        university level book on the subject of numerical methods should 
        suffice.
         
THE THEORY OF MATRICES IN NUMERICAL ANALYSIS by Alston S. Householder, 
    published by Dover 
        This is an older, even more theoretical, work than the previous.

If you have any doubts about using these routines, you should at least have 
the LINPACK USER'S GUIDE.  Don't limit yourself, however, to these books as 
there are a number of new, very readable textbooks which can be found at 
most technical or university book stores.

See the "index" directory for an idea of the contents of this disk. If you 
have any questions or criticisms of this package, please write me (Jeffrey 
Fried) through the PC-SIG offices.

No system requirements are given.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0554

     Volume in drive A has no label
     Directory of A:\

    FILES554 TXT      4203   6-11-86  10:39a
    INDEX             5627   5-01-84   8:31p
    ISAMAX   FOR       825   1-01-84   7:34p
    NOTES554 TXT      4224   6-08-86   2:52p
    SASUM    FOR       924   1-01-84  12:40p
    SAXPY    FOR      1192   1-01-84  12:39p
    SCHDC    FOR      7894   1-13-85  12:34p
    SCHDD    FOR      6051   1-13-85  12:34p
    SCHEX    FOR      7091   1-13-85  12:34p
    SCHUD    FOR      4521   1-13-85  12:34p
    SCOPY    FOR      1163   1-05-84   1:19p
    SDOT     FOR      1202   1-01-84  12:39p
    SGBCO    FOR      8482   1-01-84  12:20p
    SGBDI    FOR      1932   1-01-84  12:20p
    SGBFA    FOR      5345   1-01-84  12:20p
    SGBSL    FOR      3848   1-01-84  12:20p
    SGECO    FOR      5829   1-01-84  12:20p
    SGEDI    FOR      3630   1-01-84   7:37p
    SGEFA    FOR      2890   1-01-84  12:21p
    SGESL    FOR      3197   1-01-84  12:21p
    SGTSL    FOR      3285   1-13-85  11:33a
    SMACH    FOR      1391   1-01-84  12:37p
    SNRM2    FOR      4461   1-20-84  12:37p
    SPBCO    FOR      7983   1-06-84   9:56p
    SPBDI    FOR      1713   1-06-84   9:56p
    SPBFA    FOR      2812   1-06-84   9:56p
    SPBSL    FOR      2167   1-06-84   9:56p
    SPOCO    FOR      6197   1-06-84   9:56p
    SPODI    FOR      3626   1-06-84   9:57p
    SPOFA    FOR      2033   1-06-84   9:57p
    SPOSL    FOR      1860   1-06-84   9:57p
    SPPCO    FOR      6874   1-06-84   9:57p
    SPPDI    FOR      3518   1-06-84   9:57p
    SPPFA    FOR      2448   1-06-84   9:57p
    SPPSL    FOR      1768   1-06-84   9:57p
    SPTSL    FOR      2500   1-06-84   9:56p
    SQRDC    FOR      7162   1-06-84   8:10p
    SQRSL    FOR      9187   1-05-84  12:33p
    SQRTS    FOR     14958   1-06-84   1:41p
    SROT     FOR       869   1-06-84   9:25p
    SROTG    FOR       644   1-06-84   9:02p
    SSCAL    FOR       916   1-07-84   8:31p
    SSICO    FOR      7689   1-07-84   8:30p
    SSIDI    FOR      6682   1-07-84   8:30p
    SSIFA    FOR      6573   1-07-84   8:30p
    SSISL    FOR      4198   1-07-84   8:30p
    SSPCO    FOR      8912   1-07-84   8:30p
    SSPDI    FOR      7642   1-07-84   8:31p
    SSPFA    FOR      8004   1-07-84   8:31p
    SSPSL    FOR      4473   1-07-84   8:31p
    SSVDC    FOR     15448   1-06-84   8:53p
    SSWAP    FOR      1280   1-07-84   8:31p
    STRCO    FOR      4862   1-12-84   8:59p
    STRDI    FOR      4460   1-12-84   8:59p
    STRSL    FOR      3881   1-12-84   9:01p
           55 file(s)     252546 bytes
                           44032 bytes free
