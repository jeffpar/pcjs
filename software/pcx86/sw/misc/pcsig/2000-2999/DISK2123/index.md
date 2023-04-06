---
layout: page
title: "PC-SIG Diskette Library (Disk #2123)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2123/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2123"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROBABILITY AND STATISTICS 2 OF 2 (985)"

    The following programs are included:
    
    KSPROB computes probabilities, percentage points, reliability and hazard
    functions for 23 probability distributions.  It is menu-driven, can
    output to the screen, printer or disk.  An 80x87 is used if present, but
    is not required.
    
    KSSTAT has modules for exploratory regression (CFIT), testing for
    normality (LILFOR) and crosstabulations (XTAB), as well as for summary
    statistics and histograms with breakdown variables and test mode scatter
    plots.  Missing values can be handled; column names can be specified and
    are used in output.
    
    KSPDAT produces date files that can be used for producing probability
    tables and graphs.  Output formats can be specified by the user.  Output
    can be either multicolumn files or multiple two column files.
    
    KSPRBAS is a BASIC program with accurate approximations for probability
    distributions commonly used in introductory courses.  Intended for use
    in hand held computers, it is very compact.
    
    SIMCORR produces pseudo-random samples from a bivariate normal
    population.  It illustrates the meaning of the correlation
    coefficient.
    
    An extensive chart showing interrelationships between distributions is
    included.  There are examples of graphs produced with KSPDAT output.
    All programs are documented.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #2123

     Volume in drive A has no label
     Directory of A:\

    KSSTAT   EXE     70093   5-29-90  11:48p
    KSPROB   EXE     45767   5-29-90  11:59p
    KSPDAT   EXE     57947   5-29-90  11:59p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1037   7-10-90   2:10p
    FILE2123 TXT      2961   7-09-90   6:00p
            6 file(s)     177843 bytes
                          141312 bytes free
