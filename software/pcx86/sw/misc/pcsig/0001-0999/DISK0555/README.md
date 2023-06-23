---
layout: page
title: "PC-SIG Diskette Library (Disk #555)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0555/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0555"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "LINPACK DRIVERS"

    The Linear Equation Package (LINPACK) is a set of routines which solves
    systems of linear equations and related problems.  This package was
    developed by the Applied Mathematics Division of Argonne National
    Laboratory; this source code was taken from a distribution disk
    provided by International Mathematics and Statistical Libraries,
    Inc. (IMSL).
    
    System Requirements:  Fortran complier, 256K memory, color display,
    graphics card and printer and one drive unit.
    
    How to Start:  Consult README and INDEX for program information.
    
    Suggested Registration:  $10.00
    
    File Descriptions:
    
    INDEX         An index of all the routines on the library and driver dis
    SEX      CAL  Undocumented file
    README        A comprehensive writeup on use of these routines
    SP       LNK  The link list of binaries for the single precision
    SGT      LNK  The link list of binaries for the single precision
    SEX      LNK  The link list of binaries for the SEX test set.
    SCH      LNK  The link list of binaries for the single precision
    SUD      FOR  This is the test driver for matrix update subs.
    ST       FOR  Main routine/driver for testing the ST routines.
    SSV      FOR  Main routine/driver for testing the SSV routines.
    SS       FOR  Main routine/driver for testing the SS routines.
    SQR      FOR  Main routine/driver for testing the SQR routines.
    SP       FOR  Main routine/driver for testing the SP routines.
    SGT      FOR  Main routine/driver for testing the SGT routines.
    SG       FOR  Main routine/driver for testing the SG routines.
    SEX      FOR  Main routine/driver for testing the exchange routines.
    SCH      FOR  Main routine/driver for testing the SCH routines.
    SUD      CAL  Undocumented file
    SS       LNK  The link list of binaries for the single precision
    SQR      LNK  The link list of binaries for the single precision
    SUD      LNK  An undocumented link list.
    ST       LNK  The link list of binaries for the single precision
    SSV      LNK  The link list of binaries for the single precision
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES555.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  555  LINPACK DRIVERS                                      v1  DS2
---------------------------------------------------------------------------
The Linear Equation Package (LINPACK) is a set of routines which solves
systems of linear equations and related problems.  This package was
developed by the Applied Mathematics Division of Argonne National
Laboratory; this source code was taken from a distribution disk provided by
International Mathematics and Statistical Libraries, Inc.  (IMSL).
 
INDEX         An index of all the routines on the library and driver disks
README        A comprehensive writeup on use of these routines
SEX      CAL  Undocumented file
SUD      CAL  Undocumented file
SCH      FOR  Main routine/driver for testing the SCH routines.
SEX      FOR  Main routine/driver for testing the exchange routines.
SG       FOR  Main routine/driver for testing the SG routines.
SGT      FOR  Main routine/driver for testing the SGT routines.
SP       FOR  Main routine/driver for testing the SP routines.
SQR      FOR  Main routine/driver for testing the SQR routines.
SS       FOR  Main routine/driver for testing the SS routines.
SSV      FOR  Main routine/driver for testing the SSV routines.
ST       FOR  Main routine/driver for testing the ST routines.
SUD      FOR  This is the test driver for matrix update subs.
SCH      LNK  The link list of binaries for the single precision
              Cholesky decomposition routines' test.
SEX      LNK  The link list of binaries for the SEX test set.
SGT      LNK  The link list of binaries for the single precision
              general tridiagonal test.
SP       LNK  The link list of binaries for the single precision
              positive definite routines' test set.
SQR      LNK  The link list of binaries for the single precision
              orthogonal triangular decomposition routines' test set.
SS       LNK  The link list of binaries for the single precision
              symmetric routines' test set.
SSV      LNK  The link list of binaries for the single precision
              singular value decomposition routines' test set.
ST       LNK  The link list of binaries for the single precision
              triangular routines' test set.
SUD      LNK  An undocumented link list.
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## NOTES555.TXT

{% raw %}
```
Program name:       LINPACK DRIVERS

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

### Directory of PC-SIG Library Disk #0555

     Volume in drive A has no label
     Directory of A:\

    FILES555 TXT      2492   6-11-86  10:42a
    INDEX             5627   5-01-84   8:31p
    NOTES555 TXT      4224   6-08-86   3:20p
    SCH      FOR     11895   1-13-85   1:06p
    SCH      LNK       159   1-13-85   1:02p
    SEX      CAL      1775   1-19-84   9:49p
    SEX      FOR     10358   1-13-84   8:42p
    SEX      LNK        67   1-13-84   8:55p
    SG       FOR     18134   1-05-84  11:45a
    SGT      FOR      8800   1-13-85  11:26a
    SGT      LNK       141   1-13-85  11:53a
    SP       FOR     17495   1-07-84   7:32p
    SP       LNK       210   1-06-84  10:04p
    SQR      FOR     20344   1-06-84   8:09p
    SQR      LNK       105   1-06-84   7:50p
    SS       FOR     18523   1-07-84   8:48p
    SS       LNK       192   1-07-84   9:32p
    SSV      FOR     12179   1-06-84   9:23p
    SSV      LNK       104   1-06-84   9:32p
    ST       FOR     15595   1-12-84   9:40p
    ST       LNK       129   1-12-84   9:36p
    SUD      CAL       411   1-19-84  10:03p
    SUD      FOR     13132   4-30-84   9:59p
    SUD      LNK        78   4-30-84  11:19p
           24 file(s)     162169 bytes
                          144384 bytes free
