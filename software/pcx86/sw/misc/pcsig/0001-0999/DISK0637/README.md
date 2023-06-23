---
layout: page
title: "PC-SIG Diskette Library (Disk #637)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0637/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0637"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "UNCLE"

    UNCLE provides analysis of four different possible tax strategies
    simultaneously.  All four alternate form 1040s are on screen at the
    same time.  This version even has an on-screen RPN calculator!  UNCLE
    was professionally written for annuity and life brokers, and financial
    planners; they had no method of properly interpreting and illustrating
    certain obscure sections of the tax code, lacked computer savvy, and
    who couldn't adequately illustrate the concepts of tax planning and
    pension maximization.
    
    The user projects taxes for the current year (to be prepared NEXT
    year) using a full 1040 input format and then tries alternative
    scenarios using four columns on a single screen (inputs need only be
    entered once).  W-4 changes for one or two combined wage earners may
    be calculated to correspond to whatever part of the tax is targeted
    for prepayment and what has already been prepaid.  Pocket expense of
    investment and paycheck changes are shown.
    
    System Requirements: 256K, two disk drives and a monochrome/graphics
    display
    
    How to Start: Documentation is found in files PART1, PART2 and CALCKEY;
    as it is written using PC-WRITE, if possible use that program to print
    it.  To run: after loading DOS, enter INTRO or UNCLE and press <ENTER>.
    
    Suggested Registration:  $40.00 (includes full manual, update of Tax
    Analysis module and telephone support)
    
    File Descriptions:
    
    READ2         Notes on program
    ???           Various documentation files
    INSHARD  BAT  Installation program for hard disks
    INSTALL  BAT  Installation batch program
    INTRO    EXE  The basic menu and system manager
    CALCKEY       Some information about the calculator
    PART2         The MANUAL part 2
    PART1         The MANUAL part 1
    FEDSPRD  EXE  The Fed 1040 analysis module
    UNCLE    BAT  Start up batch file
    AUTOEXEC BAT  Automatic start up, if you want it
    README   BAT  File to automate READ
    READ          Some information from the Author.
    BRUN20   EXE  BASIC Runtime
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES637.TXT

{% raw %}
```
----------------------------------------------------------------------------
Disk No  637  UNCLE                                                  v1.1
----------------------------------------------------------------------------
UNCLE allows the analysis of four different possible tax strategies at one
time. All four alternate form 1040s are on screen at the same time. This
version has an on screen RPN calculator. This program is for the IBM-PC or
compatible, 256K  RAM is required.
 
PART1    DOC  The MANUAL part 1
PART2    DOC  The MANUAL part 2
CALCKEY  DOC  Some information about the calculator.
INTRO    EXE  The basic menu and system manager.
FEDSPRD  EXE  The Fed 1040 analysis module.
AUTOEXEC BAT  Automatic start up, if you want it.
UNCLE    BAT  Start up batch file
BRUN20   EXE  BASIC Runtime
SAMPLE   FED  Tax files
AMSTADT  FED  Tax files
ERASEME  FED  Tax files
INSHARD  BAT  Installs UNCLE to your harddrive
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
 
 
 
 
 
```
{% endraw %}

## GO.TXT

{% raw %}
```
This disk contains the program: UNCLE   a tax analysis program
 
To find out about this program: "PRINT" or "TYPE" these files:
 
READ            The authors' introduction
PART1.DOC       The user's Manual, part 1
PART2.DOC       The user's Manual, part 2
CALCKEY.DOC     Information about the pop up calculator
 
to print the Manual type:  PRINT PART1.DOC and press ENTER  or
                    type:  COPY PART1.DOC PRT1 and press ENTER
 
To print the other documents, use the same commands with the appropriate
file name.
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## NOTES637.TXT

{% raw %}
```
--------------------------------------------------------------------------
DISK NO  637  UNCLE 1987 VERSION                                     v1.1
--------------------------------------------------------------------------
 
   UNCLE  FEDERAL TAX ANALYSIS SPREADSHEET (only)  u-s $75
 
 
UNCLE was professionally written for annuity and life brokers, and financial
planners, who had no method of properly interpreting and illustrating certain
obscure sections of the tax code, lacked computer savvy, and who had no fully
adequate method of illustrating the concepts of tax planning and pension
maximization. Many brokers have made large sums of money planning tax strategies
and illustrating state retirement systems using UNCLE.
 
The user projects his taxes for the current year (to be prepared NEXT year)
using a full 1040 input format and then tries alternative scenarios using four
columns on a single screen (inputs need only be entered once). W-4 changes for
one or two combined wage earners may be calculated to correspond to whatever
part of the tax is targeted for prepayment and what has already been prepaid.
Pocket expense of investment and paycheck changes are shown.
 
Tax data for unlimited cases may be saved to disk and recalled for later edit.
Currrently used intensively in commercial settings, UNCLE is no-nonsense,
extremely fast, powerful, and accurate. Most of the development effort has gone
into making the program user-considerate, with extensive error-trapping and
blooper-recovery provisions.
 
On-screen reverse polish calculator is provided. 256K RAM required, for IBM-PC
or compatible. Compiled BASICA.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
PC-SIG
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0637

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT       276   1-01-80  12:15a
    BRUN20   EXE     68396   6-13-86  10:55a
    CALCKEY           2400   1-02-87  12:28p
    CONTENTS          2214  11-02-85   9:59a
    FEDSPRD  EXE     74953   1-19-87  12:09a
    FIGURES           1871  10-31-85   9:47p
    FILES637 TXT      1062   1-31-87   4:46p
    GO       BAT        28  11-27-86  12:31p
    GO       TXT       638   1-31-87   4:52p
    INSHARD  BAT      1295  12-19-86  12:54p
    INSTALL  BAT      1053  12-19-86  12:38p
    INTRO    EXE      8745   1-17-87   6:14p
    NOTES637 TXT      1771   1-31-87   4:51p
    PART1            43677  10-25-86  12:12a
    PART2            46968   3-01-86   3:15p
    READ              1088  12-12-86  12:15a
    READ2             1783  12-07-86   6:17p
    README   BAT        27  10-25-86  12:16a
    UNCLE    BAT       276   1-01-80  12:15a
           19 file(s)     258521 bytes
                           52224 bytes free
