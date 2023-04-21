---
layout: page
title: "PC-SIG Diskette Library (Disk #3095)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3095/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3095"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE3095.TXT

{% raw %}
```
Disk No: 3095                                                           
Disk Title: REAL Numbers                                                
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: REAL Numbers                                             
Author Version: 1.1                                                     
Author Registration: $39.00                                             
Special Requirements: No special requirements.                          
                                                                        
REAL NUMBERS is an incredibly powerful calculator and report generator! 
Maintain your home-business books, compile scientific data, or do your  
math homework with this wonderfully easy-to-use program.  The on-screen 
tapes (up to 15) scroll much like a desktop calculator.  Entries can be 
arithmetic, financial, or scientific formulas of almost unlimited       
complexity.                                                             
                                                                        
The spreadsheet features allow you to use variable names to update      
multiple tapes.  Data can be saved and imported into a Lotus 1-2- 3     
spreadsheet.  The word processor features allow descriptive text for    
data entries and formatting of reports.                                 
                                                                        
Pull-down menus and extensive on-line help make REAL NUMBERS easy to    
learn and use.  Sample tapes are included which clearly show the        
program's capabilities.  REAL NUMBERS is a thoroughly professional      
product!                                                                
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.DOC

{% raw %}
```

REAL Numbers - Version 1.10                                     README.DOC
--------------------------------------------------------------------------
Copyright 1990, 1991 BU Systems Company
PO Box 1065, Lafayette, CA 94549
415-284-1610

PROGRAM FEATURES
----------------
REAL Numbers combines the ease of use of a desktop calculator with many
powerful features found in spreadsheet programs.  Much more than just a
calculator, it can be used for a wide range of business, home, and school
applications.  For example, REAL Numbers can be used to manage a checkbook,
or set up as a complete accounting system.

Features and Specifications:
- 15 scrolling calculator tapes in separate windows.
- A column for descriptive text in each tape.
- Built-in mathematical and financial functions.
- Evaluation of algebraic expressions.
- Unlimited number of memory variables.
- Report writer for formatting and printing tapes.
- File handling for saving, loading, and exporting tape files.
- Flexible setup options, including:
     Negative values with leading minus, trailing minus, or parentheses.
     Rounding precision can be set from 0 to 18 decimal places.
     Rounding can be up, down, or to the nearest digit.
     Decimal position can be fixed or floating, or placed automatically.

INSTALLATION
------------
1) Installing on a Hard Disk:

Create a directory and copy the diskette to the new directory using the
following two commands.  Press the Enter key to complete each command line.

     MD C:\TAPE
     COPY A:\*.* C:\TAPE/V

2) Optional AUTOEXEC.BAT Commands:

Make these changes to your AUTOEXEC.BAT file if you want to be able to run
REAL Numbers from any directory.  Add to the end of the PATH command and
enter a new SET command to locate the help file:

     PATH <current PATH here>;C:\TAPE
     SET THLP=C:\TAPE\TAPE.HLP

3) Optional Monitor Type Override:

If you should need to override the automatically determined monitor type
(color or monochrome), set environment variable TCOLOR to Y or N.  For
example, enter this command in your autoexec.bat file:

     SET TCOLOR=Y

GETTING STARTED HELP
--------------------
Press F1 for help while running REAL Numbers.  The help text includes a
Quick Start Example section, a detailed reference, and many more examples.

DOCUMENTATION
-------------
See the accompanying TAPE.DOC file for information about REAL Numbers
documentation.  Printed documentation is provided to registered users.

RUNNING THE PROGRAM
-------------------
If you followed the installation suggestions above, simply type "TAPE"
(and press the Enter key) to start the program.

Otherwise, switch to the REAL Numbers directory and run the program with
these two commands (press the Enter key after each command):

     CD \TAPE
     TAPE

VERSION 1.10
------------
Highlights of new features and changes are as follows:

1) New File menu Export selection to save a tape in a file format that
   can be imported into Lotus spreadsheets, as well into many other
   popular programs.

2) New 'T'otal, 'S'ubtotal, and 'TS' operators.  'S'ubtotal displays and
   clears the subtotal.  'T'otal displays the sum of previous subtotals
   and clears the total.  The 'TS' operator displays the total without
   clearing it.

3) New Tape menu Clear selection that clears the lines from a tape, while
   retaining the setup and configuration options.

4) A problem with Automatic Decimal placement in numbers has been fixed.
   Use the 'D'ecimal selection on the Setup menu to turn on the automatic
   decimal feature.

5) A problem with line value references has been fixed.  Line values allow
   you to use the value from another line.  For example, L17 refers to the
   value of line 17.

6) Performance improvements, including better use of background
   recalculation.

7) The Help screens have been expanded and reorganized with more examples
   and better assistance for new users.

8) The demonstration tapes (DEMO1, DEMO2, DEMO3) have been modified
   to use the new features in this release.

9) The program now remembers whether the Edit Window in the tape is
   open when you move between the tape and the menu.

10) The print file name for writing a report to a file can be changed
   at the point of starting the report, rather than having to go
   to the Report menu Options Setup selection first.

11) The GPM (gross profit margin) function now works for mark downs
   (with a negative percentage), as well as for mark ups.

```
{% endraw %}

## TAPE.DOC

{% raw %}
```

REAL Numbers - Version 1.10                                       TAPE.DOC
--------------------------------------------------------------------------
DOCUMENTATION
-------------
1) The program provides a context sensitive help system, including a
   detailed reference section.  The help system has a built-in index,
   and navigation aids for paging among over 50 full screens of help text.
   Many examples are presented for getting started.  Help is accessed with
   the F1 key while running REAL Numbers.

2) A bound and formatted listing of the above described help text is
   provided to registered users.  For registration information, choose
   the 'L'icense selection on the REAL Numbers menu.

3) Several demonstration tape files are included that can be loaded using
   the 'F'ile selection on the REAL Numbers menu.  These demonstration
   files are named DEMO1, DEMO2, DEMO3, etc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3095

     Volume in drive A has no label
     Directory of A:\

    TAPE     EXE    199724   8-27-91   4:04p
    TAPE     HLP     38430   8-26-91  10:21a
    TAPE     DOC       915   8-26-91  10:17a
    README   DOC      4583   8-26-91  10:17a
    DEMO1    TAP      2931   8-26-91  10:19a
    DEMO2    TAP      2484   8-26-91  10:20a
    DEMO3    TAP      1551   8-26-91  10:20a
    GO       TXT       924   8-24-92  10:31a
    GO       BAT        38   1-31-91  12:58a
    FILE3095 TXT      2369   8-25-92   5:48p
           10 file(s)     253949 bytes
                           63488 bytes free
