---
layout: page
title: "PC-SIG Diskette Library (Disk #923)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0923/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0923"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROFESSIONAL REAL ESTATE ANALYST"

    PROFESSIONAL REAL ESTATE ANALYST is designed for multi-family and
    commercial real estate analysis.  All files in the ANALYST are
    interrelated, operate via Lotus-like menus, and have help screens.
    
    The main program, Cash Flow Analysis, has LOTUS worksheets that perform
    13 measures of investment, including Cap Rate, IRR, FMRR, Cash on Cash,
    NPV, and Debt Coverage Ratio.  Determine purchase price with IRR, CR,
    GRM and more.  It has been updated to comply with current tax laws.
    
    The 130-page manual includes menu maps.  You don't need to know Lotus to
    use this program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES923.TXT

{% raw %}
```
Disk No  923
Program Title: PROFESSIONAL REAL ESTATE ANALYST
PC-SIG version 1.1
 
    PROFESSIONAL REAL ESTATE ANALYST is an interactive program run from
within Lotus 1-2-3. It performs a wide variety of financial calculation and
recording functions. Basically, the program is a set of complex Lotus
macros linked by the AUTO123 file. Main features of the program include the
ability to construct an annual property operating data statement that
records real or projected income and expenses associated with a property, a
variety of cash flow analyses that can be compared using 14 different
investment measures, and a comprehensive amortization program. Selection of
options is driven by Lotus menu choices, and support for graphing and
professional report generation are included. Help screens are also
available.
 
Usage: Real Estate Analysis
 
System Requirements: 256K memory, one disk drive, and Lotus 1-2-3.
 
How to start: After loading Lotus, load the file called AUTO123.
 
Suggested Registration: $55.00
 
File Descriptions:
 
AUTO123   WKS Main macro, other macros accessed from here.
APOD      WKS Annual property operating data macro.
CFA       WKS Cash flow analysis macro/data file.
COMPAR    WKS Compares what-if CFA analyses.
AMORTIZA  WKS Amortization macro.
AMORTEXT  WKS Documentation for AMORTIZA.
INSTHARD  BAT Installs program on hard disk.
ANALYST   WKS File used by hard disk installation program.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║        <<<<  Disk No 923 PROFESSIONAL REAL ESTATE ANALYST  >>>>         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ First load LOTUS, then Load the file called AUTO123 from within LOTUS   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0923

     Volume in drive A has no label
     Directory of A:\

    AMORTEXT WKS      5632   7-28-87   9:09a
    AMORTIZA WKS     17152   7-30-87   7:23p
    ANALYST  WKS      3456   9-27-85   9:51a
    APOD     WKS     45184   4-26-87   9:56p
    AUTO123  WKS     97664   3-04-88   9:06p
    CFA      WKS    102912   6-11-87   8:33p
    COMPAR   WKS     26880   4-26-87  10:27p
    FILES923 TXT      1568   4-18-88   7:59a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       386   4-12-88   1:17p
    INSTHARD BAT       915   9-12-87   7:06p
           11 file(s)     301787 bytes
                           14336 bytes free
