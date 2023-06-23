---
layout: page
title: "PC-SIG Diskette Library (Disk #553)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0553/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0553"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "LLSQ"

    This disk contains LLSQ, a package of 14 basic, high-quality
    mathematical FORTRAN subprograms that can be utilized in your
    applications programs.  These first appeared in the "IMSL Numerical
    Computations Newsletter," "User News," and "Directions."
    
    System Requirements:  64K, one disk drive and monochrome display.
    
    How to Start:   For instructions on FOR listings, refer to your FORTRAN
    language manual.
    
    File Descriptions:
    
    PROG?    FOR  Test drivers for the various modules
    LINK?    BAT  Batch files to properly link the various modules
    ???????? FOR  LLSQ FORTRAN source code modules
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES553.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  553  LLSQ  (FORTRAN PROGRAMS)                             v1  DS2
---------------------------------------------------------------------------
This disk contains LLSQ, a package of fourteen basic, high-quality
mathematical FORTRAN subprograms, that can be utilized in your applications
programs.  These first appeared in the "IMSL Numerical Computations Newsletter", "User
News", and/or "Directions".
 
LINK?    BAT  Batch files to properly link the various modules
PROG?    FOR  Test drivers for the various modules
???????? FOR  LLSQ FORTRAN source code modules
NOTES553 TXT  A list and comprehensive explanation of the modules
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## NOTES553.TXT

{% raw %}
```
Program name:       LLSQ

Authors names:      Charles L. Lawson and Richard J. Hanson    

Address:            Not given

Telephone Number:   Not given

Suggested Donation: None

Program Description: 

LLSQ is a package of fourteen basic, high-quality mathematical FORTRAN 
subprograms which can be utilized for your applications programming.  These 
first appeared in the "IMSL Numerical Computations News letter", "User 
News", and/or "Directions", and are reprinted here with only editorial 
changes.

The following lists the subprogram names and provides a brief statement of 
the usage of each module.


Subroutine                       Purpose

 - NNLS        Solve a constrained least squares problem Ax ~ b, subject
               to all solution components being non-negative.  Using LDP,
               one of the other codes, a least squares solution of systems
               Ax ~ b, subject to general inequality constraints Gx >= h
               can be found.

 - SVA and     Solve a least squares problem Ax ~ b using the singular
   SVDRS       value decomposition of the matrix A.

 - HFTI        Solve a least squares problem Ax ~ b using the Golub-
               Businger algorithm for least squares problems.

 - BNDACC and  Solve a least squares problem Ax ~ b using Householder
   BNDSOL      transformations.  This subprogram works with a banded
               matrix that arises in curve or surface fitting of discrete
               data by B-splines, for example.
 
The user must generally provide input and output of data to all the 
routines.  With the exception of routine SVA, the subprograms in the package 
do not do any significant reading or writing of data.
 
These routines are exceptionally well documented in the Prentice-Hall book, 
"Solving Least Squares Problems", by Charles L. Lawson and Richard J. 
Hanson.  This book is, in fact, almost a prerequisite to properly use these 
routines.   
 
The sources on this disk were provided on tape by IMSL.  Thanks to 
Exploration Systems, Inc., for the use of their PRIME computer used to 
convert the source from tape to disk.
 
For additional information, or a little help, write to me, Jeff Fried, c/o 
PC-SIG TECHNICAL DEPARTMENT.

System requirements aren't listed.  If you have a FORTRAN compiler on your 
system, you should be able to use these modules.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0553

     Volume in drive A has no label
     Directory of A:\

    BNDACC   FOR      6069   2-23-84   9:18p
    BNDSOL   FOR      5741   2-23-84   9:24p
    DIFF     FOR       493   2-23-84   9:14p
    FILES553 TXT       835   6-11-86  10:36a
    G1       FOR      2707   2-23-84   9:13p
    G2       FOR       739   2-23-84   9:13p
    GEN      FOR      2297   2-23-84   9:16p
    H12      FOR      6561   2-23-84   9:25p
    HFTI     FOR     11153   2-23-84   9:17p
    LDP      FOR      6479   2-23-84   9:10p
    LINK1    BAT        21   2-23-84   9:53p
    LINK2    BAT        31   2-24-84  12:00a
    LINK3    BAT        43   2-24-84   1:00a
    LINK4    BAT        54   2-26-84   8:04a
    LINK5    BAT        31   2-26-84  11:13p
    LINK6    BAT        43   3-01-84   7:15p
    MFEOUT   FOR      5226   2-26-84   9:19p
    NNLS     FOR     22717   2-23-84   9:11p
    NOTES553 TXT      2432   6-08-86   1:46p
    PROG1    FOR     10273   2-23-84   9:48p
    PROG2    FOR     10437   2-24-84  12:08a
    PROG3    FOR     11317   2-23-84   9:06p
    PROG4    FOR      1899   2-26-84  10:12p
    PROG5    FOR     11992   3-01-84   6:46p
    PROG6    FOR      9562   3-01-84   7:45p
    SVA      FOR     15827   2-23-84   9:15p
    SVDRS    FOR     33867   2-23-84   9:12p
           27 file(s)     178846 bytes
                          125952 bytes free
