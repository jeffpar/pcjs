---
layout: page
title: "PC-SIG Library Disk #661"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0661/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0661"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "RESICALC"

    RESICALC v.1.0 is a memory-resident calculator which can be "popped-up"
    whenever needed.  The matrix functions supported in RESICALC are called
    by an "expressionfunc(x)" where x is a matrix expression.  They
    include:
    
    ~ DIM returns the total number of components.
    ~ ROWS returns the number of rows.
    ~ COLS returns the number of columns.
    ~ CSUM returns a row vector whose components are the sum of columns.
    ~ RSUM returns a column vector whose components are the sum of rows.
    ~ CAVG returns a row vector whose components are the averages of
    columns.
    ~ RAVG returns a column vector whose components are the averages of
    rows.
    ~ CSUM2 returns a row vector whose components are the sum of squares of
    columns.
    ~ RSUM2 returns a column vector whose components are the sum of squares
    of rows.
    
    Of course, there are limits.  For example, it does not solve system of
    linear equations or inverts a matrix.  If you like it and want more,
    the same folks who built it have a more powerful MATRIX CALCULATOR,
    whose capabilities include linear programming calculations,
    differential equations, solution of system of linear and non-linear
    equations, etc.
    
    System Requirements:  128K, one disk drive and a monchrome display
    
    How to Start:  Check the README.DOC and MANUAL.DOC files for
    directions.  To bring up RESICALC, press the ALT and F9 keys together.
    
    File Descriptions:
    
    RESICALC COM  Pop up calculator program
    ERRMSG        Run time error messages of RESICALC.
    NAMELIST      Names of built-in functions of RESICALC.
    READ     ME   Quick start-up procedure for RESICALC.
    MANUAL   DOC  Short manual of RESICALC.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk 0661

     Volume in drive A has no label
     Directory of A:\

    ERRMSG             366   8-31-84   4:02a
    FILES661 TXT       731   1-04-80   3:25a
    GO       BAT       475  12-19-86   3:15p
    MANUAL   DOC     13100   8-31-84  12:16a
    NAMELIST           674   8-31-84  12:03a
    READ     ME       4002   8-31-84  12:17a
    RESICALC COM     64082   8-31-84  12:05a
            7 file(s)      83430 bytes
                           75264 bytes free
