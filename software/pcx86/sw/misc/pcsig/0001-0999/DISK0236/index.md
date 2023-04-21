---
layout: page
title: "PC-SIG Diskette Library (Disk #236)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0236/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0236"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRINTER UTILITIES"

    FPRINT's purpose is to print ASCII files, but with certain safeguards
    built-in for your convenience.  For instance, a check will be made to
    see if it is indeed an ASCII file.  If the program thinks you are
    trying to print a non-ASCII file, it will pause and tell you so.  You
    then have the option to cancel your print request, or continue anyway.
    FPRINT also has a printer setup menu which can be useful for regular
    print jobs when you want specific printer settings.  This can be very
    useful with the accompanying set of tables for using the Toshiba
    printer with Volkswriter Deluxe.  The program converts the IBM codes
    into Toshiba codes and allows the user to use the various types of
    printer programs with ease.
    
    System Requirements:  Toshiba printer with Volkswriter
    
    How to Start: Consult the .DOC and README files for
    directions and documentation.  To run the BASIC programs, consult
    the directions in GETTING STARTED for your configuration.  To run
    a program suffixed .COM or .EXE, just type its name, i.e., for
    FPRINTF.EXE, type FRPINT and press <ENTER>.
    
    Suggested Registration: $15.00 to $25.00 for Volkswriter to Toshiba.
    
    File Descriptions:
    
    -------- ---  BPRINT (BASIC program lister) Version 1.05
    BPRINT   EXE  List BASIC programs
    COPYPRTR BAT  Copy file utilities for Toshiba/Volks tables (3 files)
    VXPRINT* TBL  Part of Toshiba printer/Volkswriter tables
    ???      FMT  Part of Toshiba printer/Volkswriter tables (5 files)
    INSTVXPT RCE  Part of Toshiba printer/Volkswriter tables
    README        How to use the Toshiba printer/Volkswriter tables
    -------- ---  Toshiba/Volkswriter printer tables
    FPRINT   TRY  Sample file for FPRINT.EXE
    FPRINT   HLP  Help file for FPRINT.EXE
    FPRINT   DOC  Documentation for FPRINT.EXE
    FPRINT   EXE  List ASCII files
    COPYALL  BAT  Makes diskcopy of Volkswriter printer tables
    PC-SIG   DOC  Notes on BPRINT, FPRINT, etc.
    COPYINST BAT  Copies *.fmt files to second diskette
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FPRINT.DOC

{% raw %}
```
  FPRINT.DOC - 01.SEP.1984 - Westra-Danen Associates Inc.
  =======================================================

  Program FPRINT was compiled under DOS V2.00, using
       The BASIC Compiler V1.00, and
       The DOS Linker V2.00.

  The program will likely work under other releases of DOS,
  but success is NOT guaranteed!

  More information is contained in FPRINT.HLP, which is also
  used by the program itself.

  You may delete the FPRINT.DOC file, but

                 DO NOT DELETE FPRINT.HLP...
                 ========================

```
{% endraw %}

## PC-SIG.DOC

{% raw %}
```

                                                       September 1, 1984

  Programs submitted by: Westra-Danen Associates Inc.
                         204, 12910 - 50 Street
                         Edmonton, AB         T5A 4L2
                         CANADA
                         Phone 403/478-2985


  There are two utility programs on this disk:

  BPRINT, a BASIC program lister, is offered under the FREEWARE, or
  user-supported software concept.  A $25.00 donation is requested.  All
  instructions are contained within the program.  Given enough response,
  an extention to the program in the form of a line-number and
  variable-name cross-reference, will be added, along with some other
  enhancements.  A version that uses the BASRUN.EXE runtime program is
  also available:  see information contained in the program.

  FPRINT, a general-purpose ASCII file lister, is offered in the public
  domain library.  It uses an external help file, called FPRINT.HLP.  A
  .DOC file is also included with some general notes.  A sample file to
  try the program is included under the name FPRINT.TRY.

  Files:  BPRINT.EXE    61824   List BASIC programs
          FPRINT.EXE    51968   List ASCII files
          FPRINT.DOC      571   documentation for FPRINT.EXE
          FPRINT.HLP     2790   help file for FPRINT.EXE
          FPRINT.TRY     2646   sample file for FPRINT.EXE


                                                       [File PC-SIG.DOC]


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0236

     Volume in drive A has no label
     Directory of A:\

    PC-SIG   DOC      1500   9-01-84  12:00p
    BPRINT   EXE     61568   2-01-85   3:18p
    FPRINT   EXE     52096   9-01-84  12:01p
    FPRINT   DOC       571   9-01-84  12:00p
    FPRINT   HLP      2790   9-01-84  12:00p
    FPRINT   TRY      2646   9-01-84  12:00p
    README            3200   9-09-84   1:24p
    INSTVXPT RCE     18560   9-09-84   3:44p
    IN12     FMT       384   8-15-84   6:36p
    IN12HS   FMT       384   7-28-84   3:33p
    IN12INDT FMT       384   9-09-84   1:15p
    IN12TITL FMT       384   8-15-84   6:37p
    INCOND   FMT       384   8-13-84   8:59p
    COPYPRTR BAT      1152   9-08-84   4:21p
    COPYINST BAT      1152   8-22-84   7:27p
    COPYALL  BAT      1536   9-23-84   1:56p
    VXPRINTP TBL       512   7-15-84   1:08p
    VXPRINTQ TBL       512   8-12-84   5:13p
    VXPRINTR TBL       512   8-12-84   5:29p
    VXPRINTS TBL       512   9-08-84   3:43p
    VXPRINTT TBL       512   9-08-84   3:47p
    VXPRINTU TBL       512   9-08-84   3:53p
    VXPRINTV TBL       512   9-08-84   4:06p
           23 file(s)     152275 bytes
                            4096 bytes free
