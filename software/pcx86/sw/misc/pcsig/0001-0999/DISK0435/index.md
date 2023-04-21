---
layout: page
title: "PC-SIG Diskette Library (Disk #435)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0435/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0435"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO PASCAL SET #11"

    This disk contains three separate sets of Turbo Pascal routines.
    Looking at the directory, all but the last three entries pertain to
    the package of statistical distribution functions.  The distributions
    include the Beta, Log Gamma, Incomplete Gamma, F, T, Chi-square, and
    Normal distributions; both the forward and inverse functions are
    provided.  TRIGFUNC contains Pascal procedures for the common trigono-
    metric functions.  UTIL features more than 50 Turbo Pascal utility
    routines for such diverse functions as screen output, frames, windows,
    menus, serial communications, string manipulation, loan calculations,
    file I/O, and even a siren for intruder alert.
    
    System Requirements: 64K, one disk drive and monochrome display;
    Borland's Turbo Pascal.
    
    How to Start:  Enter TYPE README.DOC from the DOS prompt and
    follow the directions in that file.
    
    File Descriptions:
    
    NINV     PAS  Find percentage point of normal distribution
    README   DOC  Description of statistical distribution procedures
    SIGCONST PAS  Global constants for significance routines
    ERF      PAS  Error function
    SIGF     PAS  Significance of F distribution
    TESTSIGF PAS  Demo of F-significance routine
    GAMMAIN  PAS  Evaluate incomplete Gamma integral
    POWTEN   PAS  Calculate power of ten (integer powers only)
    TESTSIGC PAS  Demo of Chi-square distribution routine
    CDNORM   PAS  Cumulative normal distribution probability
    SIGCHI   PAS  Significance of Chi-square distribution
    CDBETA   PAS  Cumulative Beta distribution
    ALGAMA   PAS  Logarithm (base E) of Gamma distribution
    SIGT     PAS  Significance of T distribution
    CINV     PAS  Inverse Chi-square (percentage point)
    TESTINVN PAS  Demo of inverse normal routine
    TESTINVC PAS  Demo of inverse Chi-square routine
    TESTSIGT PAS  Demo of T-significance routine
    TESTINVF PAS  Demo of inverse F routine
    NINV2    PAS  Percentage point of normal distribution
    LOGTEN   PAS  Base 10 logarithm
    BETAINV  PAS  Inverse Beta distribution
    SIGALL   PAS  List of statistical routines on this disk
    FINV     PAS  Inverse central F distribution
    APINVB   PAS  Inverse Beta distribution
    TESTSIGN PAS  Demo of significance of normal distribution
    SIGNORM  PAS  Significance of normal distribution
    POWER    PAS  Exponentiation of real to real power
    TRIGFUNC PAS  Pascal procedures for trigonometric functions
    TINV     PAS  Inverse central T distribution
    POWERI   PAS  Exponentiation of real to integer power
    TESTINVT PAS  Demo of inverse central T distribution
    UTIL     PAS  More than 50 utility routines
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES435.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 435   TURBO Pascal Statistics, Trig, Utilities          v1 DS2
-----------------------------------------------------------------------
This diskette contains three separate sets of TURBO Pascal routines.
Looking at the directory, all but the last three entries pertain to the
package of statistical distribution functions.  The distributions
include the Beta, Log Gamma, Incomplete Gamma, F, T, Chi-square, and
Normal distributions;  both the forward and inverse functions are provided.  TRIGFUNC contains Pascal procedures for the common trigono-
metric functions.  UTIL features more than 50 TURBO Pascal utility
routines for such diverse functions as screen output, frames, windows,
menus, serial communications, string manipulation, loan calculations,
file I/O, and even a siren for intruder alert.
 
README   DOC  Description of statistical distribution procedures
NINV     PAS  Find percentage point of normal distribution
TESTSIGF PAS  Demo of F-significance routine
SIGF     PAS  Significance of F distribution
ERF      PAS  Error function
SIGCONST PAS  Global constants for significance routines
ALGAMA   PAS  Logarithm (base E) of Gamma distribution
CDBETA   PAS  Cumulative Beta distribution
SIGCHI   PAS  Significance of Chi-square distribution
CDNORM   PAS  Cumulative normal distribution probability
TESTSIGC PAS  Demo of Chi-square distribution routine
POWTEN   PAS  Calculate power of ten (integer powers only)
GAMMAIN  PAS  Evaluate incomplete Gamma integral
CINV     PAS  Inverse Chi-square (percentage point)
SIGT     PAS  Significance of T distribution
TESTINVF PAS  Demo of inverse F routine
TESTSIGT PAS  Demo of T-significance routine
TESTINVC PAS  Demo of inverse Chi-square routine
TESTINVN PAS  Demo of inverse normal routine
SIGNORM  PAS  Significance of normal distribution
TESTSIGN PAS  Demo of significance of normal distribution
APINVB   PAS  Inverse Beta distribution
FINV     PAS  Inverse central F distribution
SIGALL   PAS  List of statistical routines on this diskette
BETAINV  PAS  Inverse Beta distribution
LOGTEN   PAS  Base 10 logarithm
NINV2    PAS  Percentage point of normal distribution
POWER    PAS  Exponentiation of real to real power
TESTINVT PAS  Demo of inverse central T distribution
POWERI   PAS  Exponentiation of real to integer power
TINV     PAS  Inverse central T distribution
TRIGFUNC PAS  Description of TRIGFUNC.PAS
TRIGFUNC PAS  Pascal procedures for trigonometric functions
UTIL     PAS  More than 50 utility routines
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## README.DOC

{% raw %}
```
==========================================================================
=                            PIBSIGS.LBR                                 =
==========================================================================

Introduction:
------------

PIBSIGS.LBR contains Turbo Pascal procedures which
compute a variety of statistical distribution functions.  The
distributions include the Beta, Log Gamma, Incomplete Gamma, F, t,
Chi-square, and Normal distributions.  Both the forward
and inverse functions are provided.  Although specific routines for
the binomial and negative binomial distribution are not given here,
probabilities and percentage points for those two distributions
can be computed from the Beta distribution.

Machine-dependent constants assume that Turbo-87 is to be used.
All machine-dependent constants are located in module SIGCONST.PAS,
if you wish to change them.  You will need to change them if you don't
use Turbo-87.

I assume that you know something about these distributions, and when
they should be used.  If you don't, these routines may not be very
useful to you.  If you'd like to learn more about the subject of
statistical distributions, I suggest you read the series of books
by Johnson and Kotz, covering both discrete and continuous
statistical distributions.  The publisher is Houghton Mifflin.


Files:
-----

Library PIBSIGS.LBR contains the following files:

     README.DOC   --- what you are reading now.

--- Basic distribution and support routines

     ALGAMA.PAS   --- logarithm of gamma function
     CDBETA.PAS   --- cumulative Beta distribution
     CDNORM.PAS   --- cumulative normal distribution
     ERF.PAS      --- Gaussian error function
     GAMMAIN.PAS  --- incomplete gamma integral
     LOGTEN.PAS   --- base 10 logarithm
     POWER.PAS    --- raise number to a real power
     POWERI.PAS   --- raise number to an integer power
     POWTEN.PAS   --- computes powers of ten
     SIGCONST.PAS --- machine dependent constants

--- Point probability routines

     SIGCHI.PAS   --- significance of chi-square
     SIGF.PAS     --- significance of F
     SIGNORM.PAS  --- significance of normal value
     SIGT.PAS     --- significance of t

--- Inverse distributions (percentage points)

     BETINV.PAS   --- Inverse Beta
     CINV.PAS     --- Inverse chi-square
     FINV.PAS     --- inverse F
     NINV.PAS     --- inverse normal (low accuracy)
     NINV2.PAS    --- inverse normal (high accuracy)
     TINV.PAS     --- inverse t

--- Demonstration routines

     TESTINVC.PAS --- demonstrate inverse chi-square
     TESTINVF.PAS --- demonstrate inverse F
     TESTINVN.PAS --- demonstrate inverse normal
     TESTINVT.PAS --- demonstrate inverse t
     TESTSIGC.PAS --- demonstrate chi-square significance
     TESTSIGF.PAS --- demonstrate F significance
     TESTSIGN.PAS --- demonstrate normal probability
     TESTSIGT.PAS --- demonstrate t significance

--- File containing "(*$I" include directives for all the distribution
    routines:

     SIGALL.PAS

All of the Pascal source modules (ending in .PAS) are squeezed, so that
they actually appear as *.PQS in the PIBSIGS.LBR library file.
For instance, SIGF.PAS appears under the name SIGF.PQS.  The Pascal
routines were squeezed WITHOUT the time and date stamp, so your favorite
unsqueezer should have no difficulty.  I especially recommend
Alan Losoff's ALUSQ.COM.


Credits:
-------

These routines are translations of Fortran and Assembler routines which I
have used in various programs for many years.  Many of the algorithms
are modified from ones which appeared in Applied Statistics or the
Communications of the ACM algorithms sections.  If the algorithm comes from
one of those sources, that is mentioned in the header comments for the
corresponding routine.

I chose the algorithms included here based upon extensive experience and
empirical, simulation, and theoretical studies that demonstrate these
to be among the best available in terms of speed, accuracy, and robustness.
However, the area of computing for statistical distributions is
a constantly changing one, and any of the methods included here may soon
be retired in favor of new and better ones.


What PIBSIGS does:
------------------

PIBSIGS provides a fairly complete library of statistical distribution
routines covering the three most commonly used families of distributions:
the Incomplete Beta (F, t, binomial); the Incomplete Gamma (Chi-square);
and the Normal.  These three distributions can also be used to approximate
many other families.

These routines may be used to compute the observed probabilities of
hypothesis tests and to compute percentage points required for the
construction of confidence intervals.

The basic routines for the beta and gamma distributions allow you to
specify the degree of accuracy you want and the maximum number of
iterations allowed.  These routines also return an accuracy indicator
showing how many digits of precision were actually calculated.  Note that
this doesn't mean that the answers are correct to that many places,
just that two successive ietratively derived values match to as many
decimal places as indicated.

The programs beginning with TEST... are brief demonstrations of how to
use the lower-level routines.  The test programs typically ask for
a test value or probability value, and degrees of freedom.  The output is
either the corresponding probability or percentage point.


Using PIBSIGS:
--------------

Extract all the .PQS files from the library.  For most library utilities
this request appears as follows:

    LU A PIBSIGS.LBR
        or
    LU86 -A PIBSIGS.LBR

After extracting all the files, unsqueeze all of the .PQS files.
Using an unsqueezer like Losoff's ALUSQ, this can be done as
follows:

    ALUSQ *.PQS

If your unsqueezer doesn't allow wildcards, you will have to unsqueeze
each file one at a time.

To use the routines in your program, include the following routines
in this order before any others from PIBSIGS:

     SIGCONST.PAS
     LOGTEN.PAS
     POWER.PAS
     POWERI.PAS
     POWTEN.PAS
     ALGAMA.PAS
     ERF.PAS

Then write includes for the specific routines you want. The sample programs
TEST*.PAS show which modules need to be included to use a given distribution.

To get ALL of the PIBSIGS modules included, copy the file SIGALL.PAS into your
program.  SIGALL.PAS contains include directives for all the PIBSIGS modules
(except the test program, of course).  Note that you can't include SIGALL.PAS
using a "(*$I" directive, since Turbo Pascal doesn't allow nested includes.


Glitches:
--------

These routines are designed to work with TURBO-87, the 8087 version
of Turbo Pascal. You must alter the constants in SIGCONST.PAS for the
non-8087 version. I have NOT tested the routines without the 8087.
I'd appreciate some feedback on how well they perform.

I hope that there are no coding errors in the routines; if you find
any, please let me know ASAP as indicated below.

I'd also appreciate any feedback on the performance of these routines,
or suggestions for alternate algorithms that you have found to be
valuable -- especially algorithms for troublesome cases where the
algorithms presented here have difficulties.   In particular, it would
be nice to have algorithms that perform accurately and efficiently
to approximate the Incomplete Beta distribution with large degrees
of freedom -- greater than 100000.  Such degrees of freedom DO occur
quite often in approximating multivariate distributions (e.g.,
Box's M test for assessing homogeneity of covariance matrices).


Usage Restrictions
------------------

I've placed these routines in the public domain.  You are free to
add to them, correct them, extend them, or do whatever else you wish,
but PLEASE do NOT sell them as your own work.  That's not nice.
If you wish to use these in a commercial product, PLEASE let me know
that you intend to do so (see below) so that I can inform you of
any needed bug fixes.  You may use these routines in commercial
programs AS LONG AS you mention that I wrote them and you DO NOT
INCREASE THE PROGRAM'S PRICE JUST BECAUSE THESE ROUTINES ARE INCLUDED.


Comments:
--------

Send comments, suggestions, etc. to PHILIP BURNS on either of the
following two Chicago BBSs:

       Gene Plantz's BBS:      (312) 882 4227
       Ron Fox's BBS:          (312) 940 6496

or on the SMUG BBS:

       SMUG BBS (P. Olympia):  (301) 963 5249

As time permits, I will be adding other statistical distribution
functions to these such as approximations for multivariate
distributions, non-central distributions, and so on.  Your comments
and suggestions are most welcome.


Thanks,
Phil Burns
May, 1985
```
{% endraw %}

## TRIGFUNC.DOC

{% raw %}
```
These procedures were originally presented in MicroSystems, Dec. 1983
as "Improved Trigonometric Functions for CBASIC-80", by R. Lurie.
I have taken the code and converted it to Pascal.  It should run
under just about any version, but I am using Turbo Pascal.  The
routines seem accurate enough, and fill in a gap in the Turbo
compiler.

Gary Dale (416) 921-2048

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0435

     Volume in drive A has no label
     Directory of A:\

    ALGAMA   PAS      9171   5-17-85  10:39p
    APINVB   PAS      4846   5-17-85  10:39p
    BETAINV  PAS      9332   5-17-85  10:39p
    CDBETA   PAS      8141   5-17-85  10:39p
    CDNORM   PAS      2353   5-17-85  10:39p
    CINV     PAS      6921   5-17-85  10:39p
    ERF      PAS      5780   5-17-85  10:39p
    FILES435 TXT      2712  11-16-85   2:29p
    FINV     PAS      2913   5-17-85  10:39p
    GAMMAIN  PAS      6418   5-17-85  10:39p
    LOGTEN   PAS      1854   5-17-85  10:39p
    NINV     PAS      2967   5-17-85  10:39p
    NINV2    PAS      2502   5-17-85  10:39p
    POWER    PAS      2095   5-17-85  10:39p
    POWERI   PAS      2047   5-17-85  10:39p
    POWTEN   PAS      2213   5-17-85  10:39p
    README   DOC      8960   5-17-85  10:36p
    SIGALL   PAS       443   5-17-85  10:39p
    SIGCHI   PAS      2977   5-17-85  10:39p
    SIGCONST PAS      1103   5-17-85  10:39p
    SIGF     PAS      3203   5-17-85  10:39p
    SIGNORM  PAS      2372   5-17-85  10:39p
    SIGT     PAS      3088   5-17-85  10:39p
    TESTINVC PAS      2297   5-17-85  10:39p
    TESTINVF PAS      2480   5-17-85  10:39p
    TESTINVN PAS      2014   5-17-85  10:39p
    TESTINVT PAS      2510   5-17-85  10:39p
    TESTSIGC PAS      2193   5-17-85  10:39p
    TESTSIGF PAS      2108   5-17-85  10:39p
    TESTSIGN PAS       466   5-17-85  10:39p
    TESTSIGT PAS      2219   5-17-85  10:39p
    TINV     PAS      2771   5-17-85  10:39p
    TRIGFUNC DOC       384   5-17-85  10:50p
    TRIGFUNC PAS      3456   5-17-85  10:50p
    UTIL     PAS     57728   5-17-85  10:50p
           35 file(s)     175037 bytes
                          129024 bytes free
