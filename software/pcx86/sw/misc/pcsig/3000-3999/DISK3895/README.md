---
layout: page
title: "PC-SIG Diskette Library (Disk #3895)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3895/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3895"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## INVOICE.DOC

{% raw %}
```
                       INVOICE
Remit to:                          From:

                                   ____________________________
Quality Software Designs, Inc.
933 East Stroop Road               ____________________________
Kettering, Ohio 45429           
(513) 299-3023                     ____________________________

                                   ____________________________
                                         
                                   ____________________________
                                   
                                            Contact Individual:
                                                  
                                   ____________________________
                                         
                                   ____________________________
                                         
SPC EXpert Software Licensing Options:
                                         
Qty                                     Unit Price        Total

___  Single User                          $40             _____

___  PC LAN                               $100            _____

___  Single site-license                  $200            _____
          Unlimited Reproduction and
          Redistribution within single
          physical site.

___  Multi site-license                   $500            _____
          Unlimited Reproduction and
          Redistribution within single
          Company.


SPC EXpert Software Related Products

___  Additional User's Manuals            $10             _____


                                          Total enclosed: _____
                                                    
Note that SPC EXpert Software has been delivered and accepted
by the customer.  Upon receipt of this paid invoice, a printed
manual and certificate verifying registration will be sent.
Also, update notices will be sent to announce upgrades to the
SPC EXpert Software.

```
{% endraw %}

## README.TXT

{% raw %}
```
   SPC EXpert - Copyright Quality Software Designs, Inc. 1993

                             SPC EXpert
                 STATISTICAL PROCESS CONTROL SOFTWARE


TABLE OF CONTENTS (README.TXT)

0.  OVERVIEW
1.  REGISTRATION AND LICENSING FEES
2.  AUTOMATIC INSTALLATION
3.  ALTERNATIVE INSTALLATION. (Into directory other than /spcex)
4.  EXECUTING THE DEMONSTRATION PROGRAM.
5.  EXECUTING THE SPC SOFTWARE.
6.  IMPORTANT FILES
7.  Copying or Media Transfer for SPC EXpert
  7.1 Transferring from two 5 1/4" Disks to one 3 1/2" Disk
  7.2 Transferring from one 3 1/2" Disk to two 5 1/4" Disks
8.  SPC EXpert Custom Enhancement Services
9.  SPC EXpert Technical/Customer Support
10. Planned Enhancements To SPC EXpert



0. OVERVIEW
            
SPC EXpert is a software tool which automates the statistical and
graphical techniques used in Statistical Process Control (SPC),
Total Quality Management (TQM), and many other techniques designed
for continuous process improvement.  SPC EXpert,


    1. CONSTRUCTS, ANALYZES, and INTERPRETS 8 different types
       of control charts - both attribute and variables.
       
    2. CONSTRUCTs BAR graphs, PIE charts, PARETO diagrams,
       HISTOGRAMS, Frequency POLYGONS, and Ogives (CDFs).
       
    3. SPC EXpert CONSTRUCTS and ANALYZES scatter diagrams.


SPC EXpert supports multiple printers; exports to graphics files
which can be imported into commercial graphics and desktop publishing
software such as Harvard Graphics, WordPerfect, MicroSoft PowerPoint,
and MicroSoft Word;  produces regression and process capability 
statistics; automatically analyzes control charts for out-of-control
conditions and provides expert advice on their meaning; provides
and integrated word processor; imports data from ASCII files;

Comparable commercial SPC software will cost from $200-$1000 per
single-user copy and from $5000-$20000 for a single-site license.


1. REGISTRATION AND LICENSING FEES

SPC EXpert is a SHAREWARE product.  You may freely reproduce and
re-distribute SPC EXpert for evaluation and educational purposes.
If you make use of this software, you are expected to pay a licensing
fee as outlined below.  Upon receipt of your registration fee you
will receive a printed manual, a license agreement, and notices of
future upgrades to the software. *Academic users must still register.

  Individual User    -  $40        *Academic     - FREE
  Site License       - $200         PC LAN       - $100
  Mutli-Site License - $500         

** Send Check or money order to       CUSTOM ENHANCEMENTS AVAILABLE

   Quality Software Designs, Inc.     ** Master Card and Visa Orders
   933 East Stroop Road                  Accepted 6:00pm-9:00pm
   Kettering, Ohio 45429                 Eastern Time. (513) 299-3023


2. AUTOMATIC INSTALLATION

To install SPC EXpert, place an SPCEX system disk into the a: (or b:)
disk drive and type

        "a:install" <ENTER> (or "b:install" <ENTER>) and

follow the instructions.  You will be asked to select the hard drive
onto which you wish to install SPC EXpert.  If you select "x:" for
example, SPC EXpert will be installed into  x:\spcex.


3.ALTERNATIVE INSTALLATION. (Into directory other than /spcex)

To install the software, simply copy the entire contents of the SPCEX
System Diskette(s) into a separate sub-directory (c:\spcex for the
example below) on your hard disk and then execute the install
routine "install".  (Note:  The example below assumes that the
floppy disk drive being used is the "a" drive.  Some computers may
have the 3 1/2" or 5 1/4" drive as the "b" drive.  If this is the
case, change "a" to "b" for this example.)  Copying the files and
installing the software can be accomplished with the following
steps:

3 1/2" Disk Version (Total of 1 disk)

        (a)  Place the SPCEX Disk into the a: drive
        (b)  Type "c:" <Enter>
        (c)  Type "md c:\spc" <Enter>
        (d)  Type "cd c:\spc" <Enter>
        (e)  Type "copy a:*.*" <Enter>
        (f)  Type "install" <Enter>
        
5 1/4" Disk Version (Total of 2 disks)

        (a)  Place the SPCEX Diskette #1 into the a: drive
        (b)  Type "c:" <Enter>
        (c)  Type "md c:\spc" <Enter>
        (d)  Type "cd c:\spc" <Enter>
        (e)  Type "copy a:*.*" <Enter>
        (f)  Remove SPCEX Diskette #1 from the a: drive
        (g)  Place SPCEX Diskette #2 in the a: drive
        (h)  Type "copy a:*.*" <Enter>
        (i)  Remove SPCEX Diskette #2 from the a: drive
        (j)  Type "install" <Enter>

When complete, the SPCEX installation routine (steps f/j above) will
display the message "SPC EXpert INSTALLED".

4. EXECUTING THE DEMONSTRATION PROGRAM.

This section outlines the steps required to execute the
demonstration program.  The user is encouraged to view the
demonstration program before using the SPCEX software.  To start the
demonstration program:

        (a)  Type "c:" <Enter>
        (b)  Type "cd c:\spcex" <Enter>
        (c)  Type "demo" <Enter>


5.  EXECUTING THE SPC SOFTWARE.

To start SPC EXpert, do the following:

        (a)  Type "c:" <Enter>
        (b)  Type "cd c:\spcex" <Enter>
        (c)  Type "spcex" <Enter>

6. IMPORTANT FILES


The delivery disk(s) should contain the following files:

      1 3-1/2" disk :
      
        Disk  1 of 1   spcex_1.zip
                       spcex_2.zip
                       install.exe
                       invoice.doc
                       readme.txt (This file)
                       
     2 5-1/4" disks :
     
        Disk 1 of 2    spcex_1.zip
                       install.exe
                       invoice.doc
                       readme.txt (This file)
                       
        Disk 2 of 2    spcex_2.zip
                       install.exe            *Also on Disk 1
                       invoice.doc            *Also on Disk 1
                       readme.txt (This file) *Also on Disk 1
                       
                       
Once install.exe has been run, the following files may be useful:


     invoice.doc - An invoice form (in ASCII text) for SPC EXpert

     demo.bat    - Batch file to start SPC Demo program
     
     spcex.exe    - SPC EXpert Executable

     manual.txt  - The SPC EXpert user's manual in ASCII
                   (DOS TEXT) format.

     lan.bat     - Sample batch file to run SPC EXpert on PC LAN
     
     chart1.ico  - Sample Windows Icon
     
     chart2.ico  - Sample Windows Icon

7. Copying or Media Transfer for SPC EXpert

7.1 Transferring from two 5 1/4" Disks to one 3 1/2" Disk

To transfer SPC EXpert from its two 5 1/4" (Double Density - 360K)
disks onto one 3 1/2" (Double Density - 720K) disk you simply copy
the contents of both 5 1/4" System Disks onto a newly formatted 3
1/2" disk.  Assuming that your 3 1/2" floppy disk drive is "a:" and
your 5 1/4" drive is "b:", this transfer can be accomplished as
follows:

     (a) Place a new 3 1/2" disk into the "a:" drive
     (b) Type "format a: /F:720 /v:SPCEX" <ENTER>
                    for Double Density, 720K
          or
           Type "format a: /F:1440 /v:SPCEX" <ENTER>
                    for High Density, 1.44M
     (c) When asked "Format Another Disk?" answer "N"
     (d) Place SPC EXpert Disk 1 of 2 into the "b:" drive
     (e) Type "copy b:*.* a: /v" <ENTER>
     (f) Place SPC EXpert Disk 2 of 2 into the "b:" drive
     (g) Type "copy b:*.* a: /v" <ENTER>

          ** Steps b-c may be ommitted if you already have a
          formatted Double Density (720K) or High Density (1.44M)
          3 1/2" disk.

7.2 Transferring from one 3 1/2" Disk to two 5 1/4" Disks

To transfer SPC EXpert from its one 3 1/2" (Double Density - 720K)
disks onto two 5 1/4" (Double Density - 360K) disks you simply copy
some of the files (see Section 1.3.1) from the 3 1/2" disk onto a
newly formatted 5 1/4" disk and some other of the files onto the
second 5 1/4" disk.  Assuming that your 3 1/2" floppy disk drive is
"a:" and your 5 1/4" drive is "b:", this transfer can be
accomplished as follows:



     (a) Place a new 5 1/4" disk into the "b:" drive
     (b) Type "format b: /F:360 /v:SPCEX1OF2" <ENTER>
     (c) When asked "Format Another Disk?" answer "N"
     (d) Place 3 1/2" SPC EXpert Disk into the "a:" drive
     (e) Type "copy a:spcex_1.zip b: /v" <ENTER>
     (f) Type "copy a:install.exe b: /v" <ENTER>
     (g) Type "copy a:invoice.doc b: /v" <ENTER>
     (h) Type "copy a:readme.txt b: /v" <ENTER>
     (i) Remove the first 5 1/4" disk and label it "Disk 1 of 2"
     (j) Place another 5 1/4" disk into the "b:" drive
     (k) Type "format b: /F:360 /v:SPCEX2OF2" <ENTER>
     (l) When asked "Format Another Disk?" answer "N"
     (m) Type "copy a:spcex_2.zip b: /v" <ENTER>
     (n) Type "copy a:install.exe b: /v" <ENTER>
     (o) Type "copy a:invoice.doc b: /v" <ENTER>
     (p) Type "copy a:readme.txt b: /v" <ENTER>
     (q) Remove the second 5 1/4" disk and label it "Disk 2 of 2"

          ** Steps b-c and k-l may be ommitted if you already have
          two formatted Double Density (360K) 5 1/4" disks.

  


8. SPC EXpert Custom Enhancement Services

Quality Software Designs, Inc., can provide you with a custom enhanced
version of SPC EXpert tailored to your specific needs.  In many cases,
a tailor-made version of SPC EXpert can be produced at a cost comparable
to the single-copy off-the-shelf cost of commercial SPC software products.
To inquire about this service, contact:

                     Quality Software Designs, Inc.
                     933 East Stroop Road
                     Kettering, Ohio 45429
                     (513) 299-3023
                     email: marks@meaddata.com  or
                            ...!uunet!meaddata!marks

                            
Possible areas for customization include,

A. Placing domain-specific advice in the expert consultation text.
   e.g. In place of
                   "A shift-up in the R chart means that your
                    process has become less consistent..."
        we display
                   "A shift-up in the R chart has historically been
                    caused (90%) by a loose ball bearing in the
                    preprocessing machine."
                    
B. Placing company-specific terminology and text in the help screens
   and expert consultation text.
   
C. Translating SPC EXpert into another non-English language.

D. Adding a unique type of statistical/graphical tool.

Remember, Quality Software Designs, Inc., is in the business of
providing Custom Software Solutions.  When you consider which
SPC software package to buy, call up the commercial vendors and
ask then if their $200-$1000 per copy price-tag includes such
customer-driven tailoring.


9. SPC EXpert Technical/Customer Support

A. Phone support is available 6:00pm-9:00pm eastern time (513) 299-3023

B. Messages can be left on an answering machine which is regularly
   checked all day, every day.  (513) 299-3023
   
C. Questions and detailed problem reports can be sent over the INTERNET
   (email) to  marks@meaddata.com  or  ...!uunet!meaddata!marks

D. Send written comments and questions to

                 Quality Software Designs, Inc.
                 933 East Stroop Road
                 Kettering, Ohio 45429

Suggestions are strongly encouraged.  Without your help and feedback,
we cannot improve SPC EXpert to better meet your (changing) needs.


10. Planned Enhancements To SPC EXpert

SHORT TERM

    S.1 Include Short-Run Control Charts
        a. Nominal Xbar-R
        b. Target Xbar-R
        c. Short Run X-Bar-R
        d. Short Run XMR
        e. Short Run Moving Average Moving Range
        f. Short Run C
        g. Short Run U
        h. Short Run NP
        i. Short Run P
        j. Standardized S Chart
        
    S.2 Include Variable Sub-group Size Xbar-R & Xbar-S Charts 

    S.3 "Multiple" Versions of existing tools
        a. multi bar graph
        b. stacked bar graph
        c. stacked pareto diagram
        d. multi line (run chart) graph

MID TERM

    M.1 MicroSoft Windows Based Version 

    M.2 Import Data from Properly Structured DBase-Type FIles
           - The database structure for each type of
             control chart or graphic will be specifically
             given in the documentation.
    
LONG TERM

    L.1 "Real-Time" Data Analysis and Monitoring

    L.2 Macintosh Version.
    
    L.3 MicroSoft Windows Based Graphical TQM Tools
        a. Flow-Charting
        b. Fish-bone Diagrams
        c. Cause & Effect Diagrams
        d. Organizational Charts 
```
{% endraw %}

## MANUAL.TXT

{% raw %}
```
                 SOFTWARE USER'S MANUAL

                      SPC EXpert
            Statistical Process Control Software
                (SPC EXpert  Version  2.0S)

                    March 1993


                 Quality Software Designs, Inc.
                 933 East Stroop Road
                 Kettering, OH 45429


OVERVIEW

Quality Software Designs, Inc. has developed a software tool which
automates the statistical and graphical tools used in Statistical
Process Control and process metrics analysis.  These tools include:

   Run Chart             XMR Chart         Pareto Diagram
   Moving Range Chart    PN Chart          Pie Chart
   R Chart               P Chart           Histogram
   S Chart               C Chart           Frequency Polygon
   XBar-R Chart          U Chart           Ogive(CDF)
   XBar-S Chart          Bar Graph         Scatter Diagram

  SPC EXpert - Copyright Quality Software Designs, Inc. 1993

SPC EXpert is a SHAREWARE product.  You may freely reproduce and
re-distribute SPC EXpert for evaluation and educational purposes.
If you make use of this software, you are expected to pay a
licensing fee as outlined below.  Upon receipt of your registration
fee you will receive a printed manual, a license agreement, and
notices of future upgrades to the software. *Academic users must
still register.

  Individual User    -  $40        *Academic     - FREE
  Site License       - $200         PC LAN       - $100
  Mutli-Site License - $500         

** Send Check or money order to       CUSTOM ENHANCEMENTS AVAILABLE

   Quality Software Designs, Inc.   ** Master Card and Visa Orders
   933 East Stroop Road                Accepted 6:00pm-9:00pm
   Kettering, Ohio 45429               Eastern Time. (513) 299-3023


TABLE OF CONTENTS

1. INTRODUCTION.
  1.1 Summary
  1.2 Detail
  1.3 System Requirements
  1.4 SPC EXpert System Disk(s)
     1.4.1 Files
     1.4.2 Transferring from two 5 1/4" Disks to one 3 1/2" Disk
     1.4.3 Transferring from one 3 1/2" Disk to two 5 1/4" Disks
  1.5 Software Customization Services
  1.6 Customer and Technical Support
  1.7 Planned Enhancements to SPC EXpert

2.  INSTALLATION.
  2.1 Automatic Installation (install.exe)
  2.2 Alternative Installation. (Into directory other than
     /spcex)

3. SPC EXpert Menus and Text Screens.
  3.1 Bottom Strip Menu
  3.2 Scrollable Menus
  3.3 Hypertext Help and Info Screens

4. EXECUTING THE DEMONSTRATION PROGRAM
  4.1  The SPC EXpert Demonstration Menu
     4.1.1  "A.  SPC EXpert Tool".
     4.1.2  "B.  Screen Show".
     4.1.3  "C.  Run Chart"
     4.1.4  "D.  XBAR Chart".
     4.1.5  "E.  R Chart".
     4.1.6  "F.  S Chart".
     4.1.7  "G.  Moving Range Chart".
     4.1.8  "H.  XBAR-R Chart".
     4.1.9  "I.  XBAR-S Chart".
     4.1.10  "J.  X Moving Range Chart".
     4.1.11  "K.  P Chart".
     4.1.12  "L.  PN Chart".
     4.1.13  "M.  C Chart".
     4.1.14  "N.  U Chart".
     4.1.15  "O.  Bar Chart".
     4.1.16  "P.  Pareto Diagram".
     4.1.17  "Q.  Pie Chart".
     4.1.18  "R.  Table".
     4.1.19  "S.  Histogram".
     4.1.20  "T.  Frequency Polygon".
     4.1.21  "U.  Ogive (CDF)".
     4.1.22  "V.  Scatter Diagram".
     4.1.23  Options W through Y
     4.1.24  exit demonstration

5.  EXECUTING SPC EXpert.
  5.1  Program Initiation.
  5.2  SPC EXpert Main Menu.
     5.2.1  SPCEX Main Menu Option A:  Select Data File.
     5.2.2  SPCEX Main Menu Option B:  Select Chart/Diagram Type
     5.2.3  SPCEX Main Menu Option C:  View Chart/Diagram.
     5.2.4  SPCEX Main Menu Option D:  Chart Analysis.
     5.2.5  SPCEX Main Menu Option E:  View Patterns Menu.
     5.2.6  SPCEX Main Menu Option F:  Expert Consultation Menu.
     5.2.7  SPCEX Main Menu Option G:  ON-LINE DOCUMENTATION.
     5.2.8  SPCEX Main Menu Option H:  Print/Export Menu.
     5.2.9  SPCEX Main Menu Option I:  Options Menu.
     5.2.10  SPCEX Main Menu Option J:  Editor/File Manager.
     5.2.11  SPCEX Main Menu Option K:  Shell to DOS.
     5.2.12  SPCEX Main Menu Final Option:  quit.

6.  CREATING DATA FILES.
  6.1  First Four Data Lines:
  6.2  Run, Moving Range (MR), Individual Moving Range (XMR),
     Histogram, Frequency Polygon and Ogive (CDF) data file
     format:
  6.3  XBAR, R, S, XBAR-R, and XBAR-S Chart file formats
  6.4  Bar, Pareto, Pie and Table Data File Format.
  6.5  PN Chart File Format.
  6.6  P Chart File Format.
  6.7  C Chart File Format.
  6.8  U Chart File Format.
  6.9  Scatter Diagram data File Format.
  6.10  Multiple Data File Format.

7.  PC LAN Capability.

8. OPTIONS MENU
  8.A A. Control Charts (I.A)
     A. Range to Display (I.A.A)
     B. Range to Calc Control Limits (I.A.B)
     C. Range for Stats/Regression (I.A.C)
     D. Method for Center Line (I.A.D)
     E. Method for Control Limits (I.A.E)
     F. Dist Graph to Display (I.A.F)
     G. X-Axis Labeling Convention (I.A.G)
     H. Y-Axis Labeling Convention (I.A.H)
     I. Control Limits/Zones (I.A.I)
     J. Process Specs ON/OFF (I.A.J)
     K. Linear Regression ON/OFF (I.A.K)
     L. Eliminate Outliers ON/OFF (I.A.L)
     M. MIN Lengths for Analysis (I.A.M)
     Return to OPTIONS MENU
  8.B B. Distribution Graphs
     A. Show Process Specs ON/OFF (I.B.A)
     B. Eliminate Outliers ON/OFF (I.B.B)
     C. Show Mean ON/OFF (I.B.C)
     D. Show Median ON/OFF (I.B.D)
     E. Standard Dist Display (I.B.E)
     F. Number of Bins (I.B.F)
  8.C C. PIE/BAR/PARETO/TABLE
     A. Data Label Type (I.C.A)
  8.D D. Scatter Diagrams
     A. Show X Process Specs ON/OFF (I.D.A)
     B. Show Y Process Specs ON/OFF (I.D.B)
     C. Eliminate Outliers ON/OFF (I.D.C)
     D. Show X Mean ON/OFF (I.D.D)
     E. Show X Median ON/OFF (I.D.E)
     F. Show Y Mean ON/OFF (I.D.F)
     G. Show Y Median ON/OFF (I.D.G)
     H. Regression Line ON/OFF (I.D.H)
     I. Data Dist Graph Menu (I.D.I)
  8.E E. Process
     Specifications;SPECS_OPTIONS_MENU;screens.hyp
     A. USL (I.E.A)
     B. LSL (I.E.B)
     C. Nominal (I.E.C)
     D. USL (Y) Scatter Only (I.E.D)
     E. LSL (Y) Scatter Only (I.E.E)
     F. Nominal (Y) Scatter Only (I.E.F)
     G. Pop Sigma Est. Type (I.E.G)
  8.F F. Data File Formats
     A. SPC EXpert Format (I.F.A)
     B. USAF SPC 1.1 Format (I.F.B)
     C. USAF SPC 1.2 Format (I.F.C)
  8.G G. Fonts & Font Sizes
     A. Titles Font (I.G.A)
     B. Titles Font Size (I.G.B)
     C. Axes Labels Font (I.G.C)
     D. Axes Labels Font Sizes (I.G.D)
  8.H H. Titles/Stats/etc
     A. Titles ON/OFF (I.H.A)
     B. Enhanced Print ON/OFF (I.H.B)
     C. Summary Stats ON/OFF (I.H.C)
     D. Sound ON/OFF (I.H.D)
  8.I I. Options Files
     A. Save Options for Start-ups (I.I.A)
     B. Save Options to File (I.I.B)
     C. Load Start-up Options (I.I.C)
     D. Load Options from File (I.I.D)
     E. Reset Options to Defaults (I.I.E)
  8.J J. Display Current Options (I.J)
  8.R Return to Main Menu (I.R)

9. COMMON PROBLEMS / QUESTIONS
     

10. ERROR MESSAGES FOR INVALID DATA FILES

11. SPC EXpert Abbreviations

12. SPC EXpert Definitions



1. INTRODUCTION.

1.1 Summary

SPC EXpert is a software tool which automates the statistical and
graphical techniques used in Statistical Process Control (SPC),
Total Quality Management (TQM), and many other techniques designed
for continuous process improvement.  SPC EXpert,

     CONSTRUCTS, ANALYZES, and INTERPRETS 8 different types of
     control charts - both attributes and variables.
       
     CONSTRUCTs BAR graphs, PIE charts, PARETO diagrams,
     HISTOGRAMS, Frequency POLYGONS, and Ogives (CDFs).

     CONSTRUCTS and ANALYZES scatter diagrams.

SPC EXpert supports multiple printers; exports to graphics files
which can be imported into commercial graphics and desktop
publishing software such as Harvard Graphics, WordPerfect,
MicroSoft PowerPoint, and MicroSoft Word;  produces regression and
process capability statistics; automatically analyzes control
charts for out-of-control conditions and provides expert advice on
their meaning; provides an integrated word processor; imports data
from ASCII files; Comparable commercial SPC software will cost from
$200-$1000 per single-user copy and from $5000-$20000 for a
single-site license.

1.2 Detail

SPC EXpert determines which type of control chart is appropriate by
asking a series of questions about the nature of the process data.
Then SPC EXpert graphically displays the chart(s) selected.  SPC
EXpert also identifies the following patterns in control charts
which suggest the presence of assignable causes of variation: 
increasing trends, decreasing trends, shifts ups, shifts down,
cycles, runs, stratification, mixture patterns, freak patterns, and
freak points.  Then it graphically displays and highlights each
chart pattern identified.  SPC EXpert displays text in hypertext
fashion providing generic advice on the meaning of each chart
pattern identified.

To begin, you must load an ASCII file which contains your process
data.  This is done using SPCEX MAIN MENU option A.
 
Process data is collected and placed into an ASCII file.  This file
can be created by any word processing tool.  SPC EXpert includes a
built-in text editor for this purpose.  At any time, you may edit
the current data file (or any other ACSII text file) by using the
SPC EXpert integrated editor.  The SPC EXpert Integrated Text
Editor is available by selecting SPCEX MAIN MENU option J. 

While you may directly select any chart/diagram type, SPC EXpert
provides an automatic CONTROL CHART selection service.  You will be
asked 1 to 3 questions concerning the nature of the process data. 
From these responses, the appropriate control chart type will be
selected and created.  This is done using the SPCEX MAIN MENU
option B.

At this point, the control chart may be viewed using SPCEX MAIN
MENU option C.  The control chart may be searched for unusual
patterns.  After the pattern search, unusual patterns are
highlighted when the control chart is viewed.  Each pattern may be
viewed separately or all together.  Information about each pattern
(separately or all together) is obtained by using SPCEX MAIN MENU
option F.

You may print out a paper copy of any chart or diagram by selection
of SPCEX MAIN MENU option H.

1.3 System Requirements

SPC EXpert can run on any microcomputer that meets the following
requirements:

Processor:  IBM PC or compatible.

Math Co-Processor: Not required but will increase the computational
speed of SPC EXpert.

Memory:  Hard disk drive (2.0M free disk space) and a minimum of
375 K of core memory to execute.

Monitor:  A VGA monitor will provide the best performance; however,
an EGA monitor provides excellent resolutions for most
applications.  Other monitors such a as CGA and Monochrome are
supported but are not recommended.

Operating System: MS DOS 3.21 or higher.

Printer:  SPC EXpert supports the following printers:

              A. Epson FX/IBM Pro Printer
              B. Epson LQ
              C. IBM Proprinter X24
              D. IBM Quietwriter
              E. Toshiba P321
              F. HP Laserjet
              G. Post Script
              H. Paint Jet;
              I. HP 7470 Plotter
              J. HP 7475 Plotter
              K. HP 7550 Plotter
              L. HP 7585 Plotter
              M. HP Desk Jet  

Printer Ports:  SPC EXpert allows you to select the external port
to which your printer is connected.  The following ports are
supported:
                       
               A. LPT1 (Parallel Port #1)
               B. LPT2 (Parallel Port #2)
               C. COM1 (Serial Port #1)
               D. COM2 (Serial Port #2)
                             

Mouse:  A mouse is supported, but not required.

1.4 SPC EXpert System Disk(s)

1.4.1 Files. The delivery disk(s) should contain the files:

      One 3-1/2" disk :
      
        Disk  1 of 1   spcex_1.zip
                       spcex_2.zip
                       install.exe
                       invoice.doc
                       readme.txt
                       
     Two 5-1/4" disks :
     
        Disk 1 of 2    spcex_1.zip
                       install.exe
                       invoice.doc
                       readme.txt
                       
        Disk 2 of 2    spcex_2.zip
                       install.exe  *Also on Disk 1 of 2
                       invoice.doc  *Also on Disk 1 of 2
                       readme.txt   *Also on Disk 1 of 2

1.4.2 Transferring from two 5 1/4" Disks to one 3 1/2" Disk

To transfer SPC EXpert from its two 5 1/4" (Double Density - 360K)
disks onto one 3 1/2" (Double Density - 720K) disk you simply copy
the contents of both 5 1/4" System Disks onto a newly formatted 3
1/2" disk.  Assuming that your 3 1/2" floppy disk drive is "a:" and
your 5 1/4" drive is "b:", this transfer can be accomplished as
follows:

  (a) Place a new 3 1/2" disk into the "a:" drive
  (b) Type "format a: /F:720 /v:SPCEX" <ENTER>
          for Double Density, 720K
     or
      Type "format a: /F:1440 /v:SPCEX" <ENTER>
          for High Density, 1.44M
  (c) When asked "Format Another Disk?" answer "N"
  (d) Place SPC EXpert Disk 1 of 2 into the "b:" drive
  (e) Type "copy b:*.* a: /v" <ENTER>
  (f) Place SPC EXpert Disk 2 of 2 into the "b:" drive
  (g) Type "copy b:*.* a: /v" <ENTER>

     ** Steps b-c may be ommitted if you already have a formatted
     Double Density (720K) or High Density (1.44M) 3 1/2" disk.

1.4.3 Transferring from one 3 1/2" Disk to two 5 1/4" Disks

To transfer SPC EXpert from its one 3 1/2" (Double Density - 720K)
disks onto two 5 1/4" (Double Density - 360K) disks you simply copy
some of the files (see Section 1.4.1) from the 3 1/2" disk onto a
newly formatted 5 1/4" disk and some other of the files onto the
second 5 1/4" disk.  Assuming that your 3 1/2" floppy disk drive is
"a:" and your 5 1/4" drive is "b:", this transfer can be
accomplished as follows:

  (a) Place a new 5 1/4" disk into the "b:" drive
  (b) Type "format b: /F:360 /v:SPCEX1OF2" <ENTER>
  (c) When asked "Format Another Disk?" answer "N"
  (d) Place 3 1/2" SPC EXpert Disk into the "a:" drive
  (e) Type "copy a:spcex_1.zip b: /v" <ENTER>
  (f) Type "copy a:install.exe b: /v" <ENTER>
  (g) Type "copy a:invoice.doc b: /v" <ENTER>
  (h) Type "copy a:readme.txt b: /v" <ENTER>
  (i) Remove the first 5 1/4" disk and label it "Disk 1 of 2"
  (j) Place another 5 1/4" disk into the "b:" drive
  (k) Type "format b: /F:360 /v:SPCEX2OF2" <ENTER>
  (l) When asked "Format Another Disk?" answer "N"
  (m) Type "copy a:spcex_2.zip b: /v" <ENTER>
  (n) Type "copy a:install.exe b: /v" <ENTER>
  (o) Type "copy a:invoice.doc b: /v" <ENTER>
  (p) Type "copy a:readme.txt b: /v" <ENTER>
  (q) Remove the second 5 1/4" disk and label it "Disk 2 of 2"

     ** Steps b-c and k-l may be ommitted if you already have two
     formatted Double Density (360K) 5 1/4" disks.

1.5 Software Customization Services

Quality Software Designs, Inc., can provide you with a custom
enhanced version of SPC EXpert tailored to your specific needs.  In
many cases, a tailor-made version of SPC EXpert can be produced at
a cost comparable to the single-copy off-the-shelf cost of
commercial SPC software products.  To inquire about this service,
contact:

            Mark Shewhart
            Quality Software Designs, Inc.
            933 East Stroop Road
            Kettering, Ohio 45429
            (513) 299-3023
            email: marks@meaddata.com  or
                   ...!uunet!meaddata!marks

Possible areas for customization include,

  1. Placing domain-specific advice in the expert consultation
  text.
  e.g. In place of
       "A shift-up in the R chart means that your process has
       become less consistent..."
  we display
       "A shift-up in the R chart has historically been caused
       (90%) by a loose ball bearing in the preprocessing
       machine."

  2. Placing company-specific terminology and text in the help
  screens and expert consultation text.

  3. Translating SPC EXpert into another non-English language.

  4. Adding a unique type of statistical/graphical tool.

Remember, Quality Software Designs, Inc., is in the business of
providing Custom Software Solutions.  When you consider which SPC
software package to buy, call up the commercial vendors and ask
then if their $200-$1000 per copy price-tag includes such
customer-driven tailoring.

1.6 Customer and Technical Support

  1. Phone support is available 6:00pm-9:00pm eastern time (513)
  299-3023

  2. Messages can be left on an answering machine which is
  regularly checked all day, every day.  (513) 299-3023

  3. Questions or detailed problem reports can be emailed to

          marks@meaddata.com  or
          ...!uunet!meaddata!marks

  4. Send written comments and questions to

     Quality Software Designs, Inc.
     933 East Stroop Road
     Kettering, Ohio 45429

Suggestions are strongly encouraged.  Without your help and
feedback, we cannot improve SPC EXpert to better meet your
(changing) needs.

1.7 Planned Enhancements to SPC EXpert

  SHORT TERM

     S.1 Include Short-Run Control Charts
       a. Nominal Xbar-R
       b. Target Xbar-R
       c. Short Run X-Bar-R
       d. Short Run XMR
       e. Short Run Moving Average Moving Range
       f. Short Run C
       g. Short Run U
       h. Short Run NP
       i. Short Run P
       j. Standardized S Chart

     S.2 Include Variable Sub-group Size Xbar-R & Xbar-S Charts 

     S.3 "Multiple" Versions of existing tools
       a. multi bar graph
       b. stacked bar graph
       c. stacked pareto diagram
       d. multi line (run chart) graph

  MID TERM

     M.1 MicroSoft Windows Based Version 

     M.2 Import Data from Properly Structured DBase-Type FIles
       - The database structure for each type of control chart or
       graphic will be specifically given in the documentation.

  LONG TERM

     L.1 "Real-Time" Data Analysis and Monitoring
    
     L.2 Macintosh Version

     L.3 MicroSoft Windows Based Graphical TQM Tools
       a. Flow-Charting
       b. Fish-bone Diagrams
       c. Cause & Effect Diagrams
       d. Organizational Charts 


2.  INSTALLATION.

2.1 Automatic Installation (install.exe)

To install SPC EXpert, place an SPCEX system disk into the a: (or
b:) disk drive and type

        "a:install" <ENTER> (or "b:install" <ENTER>) and

follow the instructions.  You will be asked to select the hard
drive onto which you wish to install SPC EXpert.  If you select
"x:" for example, SPC EXpert will be installed into  x:\spcex.


2.2 Alternative Installation. (Into directory other than /spcex)

To install SPC EXpert into any directory on your hard drive, simply
copy the entire contents of the SPCEX System Diskette(s) into a
separate sub-directory (c:\spc for the example below) on your hard
disk and then execute the install routine "install.exe".  (Note: 
The example below assumes that the floppy disk drive being used is
the "a" drive.  Some computers may have the 3 1/2" or 5 1/4" drive
as the "b" drive.  If this is the case, change "a" to "b" for this
example.)  Copying the files and installing the software can be
accomplished with the following steps:

3 1/2" Disk Version (Total of 1 disk)

        (a)  Place the SPCEX Disk into the a: drive
        (b)  Type "c:" <Enter>
        (c)  Type "md c:\spc" <Enter>
        (d)  Type "cd c:\spc" <Enter>
        (e)  Type "copy a:*.*" <Enter>
        (f)  Type "install" <Enter>
        
5 1/4" Disk Version (Total of 2 disks)

        (a)  Place the SPCEX Diskette #1 into the a: drive
        (b)  Type "c:" <Enter>
        (c)  Type "md c:\spc" <Enter>
        (d)  Type "cd c:\spc" <Enter>
        (e)  Type "copy a:*.*" <Enter>
        (f)  Remove SPCEX Diskette #1 from the a: drive
        (g)  Place SPCEX Diskette #2 in the a: drive
        (h)  Type "copy a:*.*" <Enter>
        (i)  Remove SPCEX Diskette #2 from the a: drive
        (j)  Type "install" <Enter>

When complete, the SPCEX installation routine (steps f or j above)
will display the message "SPC EXpert INSTALLED".


3. SPC EXpert Menus and Text Screens.

3.1 Bottom Strip Menu.  To move through  SPC EXpert, remember the
keystrokes listed at the bottom of the screen.

     ESC Moves you to a previous screen
     F3  Saves to File
     F2  Exits to previous screen
     F1  Help key

The mouse can also be used to perform these functions by clicking
(left mouse button) on the box next to the function.  In general,
a right mouse button click is equivalent to using the ESC key.

3.2 Scrollable Menus.  Arrow keys can be used to move the cursor up
and down a menu and then the <Enter> key is used to select an
option.  The mouse can also be used to access these functions. 
Move the mouse cursor to the desired option, click once (left mouse
button) to highlight the option and click a second time to select
it.  The keyboard may be used to select options on this menu.  For
options A through Z, the letter (upper or lower case) corresponding
to each option may be typed followed by a return to select the
option.  Select "r" or "R" and press return to exit most menus. 
Another way to exit a menu is to press F2, ESC, or click the right
mouse button.

3.3 Hypertext Help and Info Screens.

Most of the help screens, the on-line documentation, the expert
consultation screens, and the on-line user's manual are presented
in a "hypertext" format.  Most of the information in a hypertext
screen is standard text.  However, text which is highlighted in
light green or light blue are referred to as hot links.  When you
"select" a hot link, a new hypertext window will appear on the
screen.  To "select" a hot link, simply highlight it using the
arrow keys or a LEFT mouse click and then press <ENTER> of click on
the highlighted hot link again with the LEFT mouse button.

While a mouse will make the navigation through a hypertext document
quicker, the SPC EXpert hypertext screens are designed to be easily
navigated using the keyboard only.


The following keystrokes are available:

  <ARROW-DOWN>
     Same as <TAB>.  Moves the highlight down and/or scrolls the
     screen down one line at a time.

  <ARROW-UP>
     Same as <SHIFT-TAB>.  Moves the highlight up and/or scrolls
     the screen up one line at a time.

  <TAB>
     Same as <ARROW-DOWN>.  Moves the highlight down and/or scrolls
     the screen down one line at a time.

  <SHIFT-TAB>
     Same as <ARROW-UP>.  Moves the highlight up and/or scrolls the
     screen up one line at a time.

  <CTRL-ARROW-UP>
     Scrolls the screen up on line at a time.  Some computers will
     not recognize this keystroke.

  <CTRL-ARROW-DOWN>
     Scrolls the screen up on line at a time.  Some computers will
     not recognize this keystroke.

  <PgUp>
     Scrolls the screen up one half of a page at a time.

  <PgDn>
     Scrolls the screen down one half of a page at a time.

  <HOME>
     Go to the top of the text.

  <END>
     Go to the bottom of the text.

  <ENTER>
     Select the currently highlighted hot link.  This has the same
     effect as clicking on the highlighted hot link with the LEFT
     mouse button.
   
  <F1> 
     View a summary of hypertext keystrokes.

  <F2>
     Exit hypertext document.

  <F3>
     The entire contents of any hypertext window may be saved to an
     ASCII (DOS TEXT) file by pressing <F3>.  This is the best way
     to print the contents of a hypertext window by importing the
     resulting ASCII file into a standard word processor. 

  <ESC>
     Same as a RIGHT mouse click.  Exit to previous level or
     screen.

  <CTRL-HOME>
     Exit to the first level or screen (level 1).  This can be very
     useful if you get "lost" in a complex hypertext document.  The
     effect is the same as several consequtive <ESC> or RIGHT mouse
     clicks.

More information on how to navigate through hypertext is provided
in SPC EXpert's MAIN MENU help screen as well as in SPC EXperts on-
line documentation.  ON-LINE HYPERTEXT HELP

4. EXECUTING THE DEMONSTRATION PROGRAM.

This section outlines the steps required to execute the
demonstration program.  You are encouraged to view the
demonstration program before using SPC EXpert.  To start the
demonstration program:

  (a)  Type "c:" <Enter>
  (b)  Type "cd c:\spcex" <Enter>
  (c)  Type "demo" <Enter> or "spcex -a" <Enter>
 
After step (c), the screen below will appear:. 

                        SPC EXpert  :  DEMONSTRATION                        
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓╔═══════════════════════════════════════════════════════════════════════╗▓
▓▓║┌─────────────────────────────────┐  ┌ ──────────────────────────PgUp┐ ║ 
▓▓║│      SPC EXpert                 │  │ A. SPC EXpert Tool            │ ║ 
▓▓║│    DEMONSTRATION                │  │ B. Screen Show                │ ║ 
▓▓║│                                 │  │ C. Run Chart                  │ ║ 
▓▓║│                                 │  │ D. Xbar Chart                 │ ║ 
▓▓║│ Quality Software Designs, Inc.  │  │ E. R Chart                    │ ║ 
▓▓║│ 933 East Stroop Road            │  │ F. S Chart                    │ ║ 
▓▓║│ Kettering, Ohio 45429           │  │ G. Moving Range Chart         │ ║ 
▓▓║│ messages: (513) 299-3023        │  │ H. Xbar-R Chart               │ ║ 
▓▓║│ email:    marks@meaddata.com    │  │ I. Xbar-S Chart               │ ║ 
▓▓║│        ...!uunet!meaddata!marks │  │ J. X Moving Range Chart       │ ║ 
▓▓║│                                 │  │ K. P Chart                    │ ║ 
▓▓║│ Select a Sample data set  ->    │  │ L. PN Chart                   │ ║ 
▓▓║└─────────────────────────────────┘  │ M. C Chart                    │ ║ 
▓▓║                                     │ N. U Chart                    │ ║ 
▓▓║                                     │ O. Bar Chart                  │ ║ 
▓▓║                                     └ ──────────────────────────PgDn┘ ║ 
▓▓╚═══════════════════════════════════════════════════════════════════════╝ 
▓▓▓                                                                         
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
■ Prev (Esc)    ■ Save To File (F3)   ■ Exit (F2)    ■ Help (F1)            


4.1  The SPC EXpert Demonstration Menu offers several options. 
Option A "SPC EXpert Tool" takes you into SPC EXpert.  See Section
5 for further explanation of tool use.  Option B "Screen Show"
provides a screen show illustrating the different charts.  Options
C through N illustrate the different control charts.  Options O
through V illustrate the different graphs and diagrams.  Options W,
X, and Y show how different charts may be combined on a single
screen.  The last option exits the demonstration.

4.1.1  "A.  SPC EXpert Tool".  For information on using SPC EXpert
itself, see Section 5 "EXECUTING SPC EXpert".

4.1.2  "B.  Screen Show".  Move the cursor down one line (using the
arrow keys or whatever) and then press enter to view the
demonstration program.  When you move the cursor down to "B. 
Screen Show" and type <Enter>, you will get a program which
displays examples of all the charts and graphs available.  To exit
out of the repeating graphics screens, hit any non-numeric key. 
The numeric keys 1-9 adjust the time that each graphic is displayed
before the next appears.

4.1.3  "C.  Run Chart"  Run Charts are employed to visually
represent data.  They  are used to monitor a process to see whether
or not the long range average is changing.  Run charts are the
simplest tool to construct and use.  Points are plotted on the
graph in the order in which they become available.

4.1.4  "D.  XBAR Chart".  XBAR is the sample mean (or average).  An
XBAR Chart is for measurable characteristics and shows any changes
in the mean value of the process. 

4.1.5  "E.  R Chart".  R is the range of the data in each sample or
lot.  The R Chart is for measurable characteristics and shows any
changes in the dispersion of the process.

4.1.6  "F.  S Chart".  S is the standard deviation of the data in
each sample or lot.  The S Chart is for measurable characteristics
and shows any changes in the dispersion of the process.  Sample
sizes or ten or more are recommended for an S Chart.

4.1.7  "G.  Moving Range Chart". MR is a range chart made of the
range of the last two individual measurements.

4.1.8  "H.  XBAR-R Chart".  The XBAR-R control chart shows both the
mean value (XBAR) and the range (R) of a sample.  This is the most
common type of control chart using indiscrete or continuous values. 
The XBAR portion of the chart shows any changes in the mean value
of the process; while the R portion shows any changes in the
dispersion of the process.  This chart is particularly useful
because it shows changes in mean value and dispersion of the
process at the same time, making it a very effective method for
checking abnormalities in the process.

4.1.9  "I.  XBAR-S Chart".  The XBAR-S chart is identical to the
XBAR-R chart except that the R (range) is replaced by an S
(standard deviation).  XBAR-S charts should be used when the
logical group size is larger than 10 (ten).

4.1.10  "J.  X Moving Range Chart".  Sometimes collecting enough
data to produce a XBAR-R chart is impossible or at least
impractical.  Sometimes the natural subgroup size should be one (1)
like when a measurement represents a lot or batch.  In this case we
need to be able to look at just a single measurement as a subgroup,
hence an individuals chart.  But what about the fact that the range
is based on the variation between subgroup members?  In this case,
we use a range chart made of the range of the last two individuals
or a moving range chart.


4.1.11  "K.  P Chart".  The P Chart is based on a running record
that is made up of the subgroup proportions of nonconforming
product.  A P chart shows the fraction defective (p).  It is used
when the number of items varies and the statistic of interest is
the fraction (or percent) rejected.  A P chart shows the
characteristics of both the mean (average) and dispersion (spread)
of the process.  It is used with discrete data sets and may be
applied to the results of any inspection that accepts or rejects
individual items.  The P Chart is an extremely useful aid in giving
information as to when and where to exert pressure for quality
improvement.  It is based on a binomial distribution.

4.1.12  "L.  PN Chart".  PN charts show the number of defectives
(pn).  It is used whenever the count data appear to be binomially
distributed and the size of the subgroup (sample size) is constant. 
PN charts show the characteristics of both mean and dispersion of
the process.  They are used with discrete data sets.

4.1.13  "M.  C Chart".  C is the average count per subgroup.  A C
control chart is used in dealing with the number of defects which
appear in fixed unit samples.  The data for a C Chart should
consist  of the counts of the total number of nonconformities
(defects) of a given type. The chart is based on a Poisson
distribution.

4.1.14  "N.  U Chart".  U is the average rate of nonconformities
(defects) per unit.  A U chart is used when the number of
defectives in the material being inspected is not constant in area
and length such as the unevenness of woven materials or pin holes
in enamel wire.  The sample size can vary and the data set is
discrete.  The chart may or may not be based on a Poisson
distribution.

4.1.15  "O.  Bar Chart".  Bar Charts are a very simple way of
illustrating the nature of process data.  A bar chart simply
illustrates the relative frequencies or magnitude of data which can
be broken down into distinct categories.  The example of the Bar
Chart in the demonstration programs is illustrated below.

4.1.16  "P.  Pareto Diagram".  A Pareto chart is a special form of
a vertical bar chart that helps to focus efforts on the problems
offering the greatest potential for improvement.  The basic
structure for a Pareto is the same as a histogram.  The ability of
the Pareto chart to focus attention on the problem that is
associated with the greatest cost, or the greatest incidence, is
most effective when the ordering of the problems is not changing
over time.  An example of a Pareto Chart is given below.

4.1.17  "Q.  Pie Chart".  Pie charts are simply graphs in which the
entire circle represents 100% (not 360 degrees) of the data to be
displayed.  The circle (pie) is divided into percentage slices that
clearly show the largest shares of data.  The pie chart is
generally easy to understand and is widely used to display data in
the media.

4.1.18  "R.  Table".  A table is a systematic arrangement of data
usually in rows and columns for ready reference.

4.1.19  "S.  Histogram".  A histogram is a series of rectangles,
each proportional in width to the range of values within a class
and proportional in height to the number of items falling in the
class.  A histogram reveals the amount of variation that any
process has within it.  The histogram is useful because it
emphasizes and clarifies trends that are not readily discernible in
tables.

4.1.20  "T.  Frequency Polygon".  The frequency polygon is a
graphical display of a frequency distribution (histogram).  It
consists of a series of straight lines joining small circles which
are plotted at cell midpoints with a height proportional to cell
frequencies. 
 
4.1.21  "U.  Ogive (CDF)".  An ogive is the graphical
representation of a cumulative frequency distribution.  A
cumulative frequency distribution enables the user to see how many
observations lie above or below certain values, rather than merely
recording the numbers of items within intervals. 

4.1.22  "V.  Scatter Diagram".  A Scatter Diagram is used to study
the possible relationship between one variable and another.  It is
a graph of the observed data and is used to test for possible cause
and effect relationships. It cannot prove that one variable causes
the other, but it does make it clear whether a relationship exists
and the strength of that relationship. 

A Scatter Diagram is set up whereby the horizontal axis (x-axis)
represents the measurement values of one variable, and the vertical
axis (y-axis) represents the measurement values of a second
variable.

4.1.23  Options W through Y are for use with Multiple Charts. 
MULTIPLE charts are used to display several different charts at one
time.

4.1.24  exit demonstration

5.  EXECUTING SPC EXpert.

5.1  Program Initiation.  To start SPC EXpert, do the following:

  (a)  Type "c:" <Enter>
  (b)  Type "cd c:\spcex" <Enter>
  (c)  Type "spcex" <Enter>

  ALTERNATIVE START-UP METHOD: If you wish to save your data files
  and SPC EXpert system configuration files into a directory
  (c:\spcdata for this example) different from the directory
  (c:\spcex for this example) which contains the SPC EXpert
  software -- as must be the case for a MULTI-USER PC LAN -- you
  can start up SPC EXpert from a data file directory (c:\spcdata)
  as follows:

     (a) Type "c:" <ENTER>
     (b) Type "cd c:\spcdata"
     (c) Type "c:\spcex\spcex" <ENTER> for SPC EXpert
       or
          "c:\spcex\spcex -a" <ENTER> for DEMO

  The default directory for saving and retrieving your data files
  will now be c:\spcdata.  NOTE: DO NOT USE A FLOPPY DISK DRIVE
  (a: or b:) IN THIS MANNER!  The data or default directory is
  also used to store large temporary files; these files may not
  fit on a floppy disk and the speed of the floppy disk drive will
  unacceptably slow down SPC EXpert.

5.2  SPC EXpert Main Menu. When you execute SPC EXpert, the SPCEX
Main Menu and Status Box will appear on the screen.  This is the
primary screen from which you will utilize SPC EXpert.  The SPCEX
Status Box provides a summary of the results of previous SPCEX Menu
Selections.  When the program is first executed, the box appears as
shown below.

                        SPC EXpert  :  MAIN MENU ()                       
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
╔══════════════════════════════════════════════════════════════════════╗▓▓
║┌────────────────────────────────────┐  ┌ ──────────────────────────┐ ║ ▓
║│          CURRENT STATUS            │  │ A. Select Data File       │ ║ ▓
║│ ---------------------------------- │  │ B. Select Graphic Type    │ ║ ▓
║│ Raw Data File :                    │  │ ■. View Graphic           │ ║ ▓
║│                    <Not  Selected> │  │ ■. Control Chart Analysis │ ║ ▓
║│ Chart Type :                       │  │ ■. View Chart Patterns    │ ║ ▓
║│                    <Not  Selected> │  │ ■. Expert Consultation    │ ║ ▓
║│                                    │  │ G. On-Line Documentation  │ ║ ▓
║│ Valid Chart? :            INVALID! │  │ H. Print/Export           │ ║ ▓
║│                     No File & Type │  │ I. Options                │ ║ ▓
║│                                    │  │ J. Editor & File Manager  │ ║ ▓
║│ Analysis                  N/A      │  │ K. Shell to DOS           │ ║ ▓
║│ # Patterns                N/A      │  │ quit                      │ ║ ▓
║└────────────────────────────────────┘  └ ──────────────────────────┘ ║ ▓
╚══════════════════════════════════════════════════════════════════════╝ ▓
▓                                                                        ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
■ Prev (Esc)    ■ Save To File (F3)   ■ Exit (F2)    ■ Help (F1)            


Once a data file has been selected, The "Data File" entry will show
the file name and extension.  Once a chart type has been selected,
the "Chart Type:" will show the chart/graph selected.  "Valid
Chart? :" tells you if the chart or graph selected is appropriate
for the data file selected.  "Chart Analysis" and "# Patterns"
indicate the results of a search of a control chart for unusual
patterns.

Some of the SPCEX MAIN MENU options (C, D, E and F) are "blacked
out" when the menu first appears.  This is because certain actions
must occur before these options are available.  Each  selection is
discussed below.

(X.Y.Z) MENU NOTATION
    
The documentation and HELP screens in SPC EXpert use a special
notation to specify a sequence of menu selections beginning from
the MAIN MENU.  This notation will simplify instructions for
navigating through the SPC EXpert menus.

For example, to view the current options settings, you
would select (I.J) by

     1. Start From SPCEX MAIN MENU
     2. Select item I, "I. Options"
          - Now you are in the OPTIONS MENU
     3. Select item J, "J. Display Current Options"

Another example, to set the method of computing a control chart
center line to "Median", you would select (I.A.D.B) by

     1. Start From SPCEX MAIN MENU
     2. Select item I, "I. Options"
          - Now you are in the OPTIONS MENU
     3. Select item A, "A. Control Charts"
          - Now you are in the CONTROL CHART OPTIONS MENU
     4. Select item D, "D. Center Line Method"
     5. Select item B, "B. Median"


5.2.1  SPCEX Main Menu Option A:  Select Data File.

Option A allows you to enter the name of the ASCII file which
contains your process data.  See section 6 for information on how
to create data files.  There are two ways to select a data file
under Option A.  The first is to type in the filename (complete
with extension) when the black bar appears on the screen.  The
second is to hit the <Enter> key when the black bar appears.  This
gives you a list of data files from which you can select the
desired file using a mouse or the down arrow and <Enter> keys. 
Once a file is selected, the program automatically returns to the
Main Menu.  Several sample data files are included on the SPC
EXpert System Disk.  The names of these files are listed below:

<filename>             <chart-type>
  
run.dmo           RUN,XMR,HISTOGRAM
r.dmo                        XBAR_R
s.dmo                        XBAR_S
pn.dmo                           PN
p.dmo                             P
c.dmo                             C
u.dmo                             U
bar.dmo              BAR/PARETO/PIE
scat.dmo                    SCATTER

5.2.2  SPCEX Main Menu Option B:  Select Chart/Diagram Type

Option B allows you to directly select the type of control chart or
diagram that is appropriate.  An automatic selection option is also
available which will make this determination for control charts
based upon the nature of your process data.  When Option B is
selected, the following Chart Type Menu appears on the screen:


                       Chart Type Selection Menu (B)                      
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
╔══════════════════════════════════════════════════════════════════════╗▓▓
║┌────────────────────────────────────┐  ┌ ──────────────────────────┐ ║ ▓
║│    ╔═══════════════════════════════════════════════════════════╗  │ ║ ▓
║│ ---║┌───────────────────────────┐  ┌ ────────────────────────┐ ║  │ ║ ▓
║│ Raw║│ Current Type Selected :   │  │ A. Control Charts       │ ║  │ ║ ▓
║│    ║│                           │  │ B. Diagrams and Graphs  │ ║  │ ║ ▓
║│ Cha║│                           │  │ Return to SPC MAIN MENU │ ║  │ ║ ▓
║│    ║│                           │  └ ────────────────────────┘ ║  │ ║ ▓
║│    ║└───────────────────────────┘                              ║  │ ║ ▓
║│ Val╚═══════════════════════════════════════════════════════════╝  │ ║ ▓
║│                                                                   │ ║ ▓
║│                                    │  │ J. Editor & File Manager  │ ║ ▓
║│ Analysis                  N/A      │  │ K. Shell to DOS           │ ║ ▓
║│ # Patterns                N/A      │  │ quit                      │ ║ ▓
║└────────────────────────────────────┘  └ ──────────────────────────┘ ║ ▓
╚══════════════════════════════════════════════════════════════════════╝ ▓
▓                                                                        ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
■ Prev (Esc)    ■ Save To File (F3)   ■ Exit (F2)    ■ Help (F1)            


5.2.2.1  If A. is selected from this menu (B.A), the following
Control Chart Menu appears:

                     Control Chart Selection Menu (B.A)                   
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
╔══════════════════════════════════════════════════════════════════════╗▓▓
║┌────────────────────────╔═════════════════════════════════════╗────┐ ║ ▓
║│    ╔═══════════════════║ ┌ ────────────────────────────────┐ ║ ╗  │ ║ ▓
║│ ---║┌──────────────────║ │ A. Automatic chart selection    │ ║ ║  │ ║ ▓
║│ Raw║│ Current Type Sele║ │ B. X (Run) Chart                │ ║ ║  │ ║ ▓
║│    ║│                  ║ │ C. Xbar Chart                   │ ║ ║  │ ║ ▓
║│ Cha║│                  ║ │ D. R Chart                      │ ║ ║  │ ║ ▓
║│    ║│                  ║ │ E. S Chart                      │ ║ ║  │ ║ ▓
║│    ║└──────────────────║ │ F. Moving Range chart           │ ║ ║  │ ║ ▓
║│ Val╚═══════════════════║ │ G. Xbar-R control chart         │ ║ ╝  │ ║ ▓
║│                        ║ │ H. Xbar-S control chart         │ ║    │ ║ ▓
║│                        ║ │ I. X Moving Range control chart │ ║ r  │ ║ ▓
║│ Analysis               ║ │ J. pn control chart             │ ║    │ ║ ▓
║│ # Patterns             ║ │ K. p control chart              │ ║    │ ║ ▓
║└────────────────────────║ │ L. c control chart              │ ║ ───┘ ║ ▓
╚═════════════════════════║ │ M. u control chart              │ ║ ═════╝ ▓
▓                         ║ │ Return to Previous Menu         │ ║        ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║ └ ────────────────────────────────┘ ║ ▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╚═════════════════════════════════════╝ ▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                                       ▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
■ Prev (Esc)    ■ Save To File (F3)   ■ Exit (F2)    ■ Help (F1)            


5.2.2.2  If B. is selected from the Chart Type Menu, the following
Diagram/Graph Type Menu appears:

                        Diagram Selection Menu (B.B)                      
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
╔══════════════════════════════════════════════════════════════════════╗▓▓
║┌────────────────────────────────────┐  ┌ ──────────────────────────┐ ║ ▓
║│    ╔═══════════════════════════════════════════════════════════╗  │ ║ ▓
║│ ---║┌───────────────────────────┐  ┌ ────────────────────────┐ ║  │ ║ ▓
║│ Raw║│ Current Type Selected :   │  │ A. Control Charts       │ ║  │ ║ ▓
║│    ║│                  ╔═════════════════════════════╗raphs  │ ║  │ ║ ▓
║│ Cha║│                  ║ ┌ ────────────────────────┐ ║  MENU │ ║  │ ║ ▓
║│    ║│                  ║ │ A. Bar Graph            │ ║ ──────┘ ║  │ ║ ▓
║│    ║└──────────────────║ │ B. Pareto Diagram       │ ║         ║  │ ║ ▓
║│ Val╚═══════════════════║ │ C. Pie Chart            │ ║ ════════╝  │ ║ ▓
║│                        ║ │ D. Table                │ ║            │ ║ ▓
║│                        ║ │ E. Histogram            │ ║ e Manager  │ ║ ▓
║│ Analysis               ║ │ F. Frequency POLYGON    │ ║            │ ║ ▓
║│ # Patterns             ║ │ G. CDF or Ogive         │ ║            │ ║ ▓
║└────────────────────────║ │ H. Scatter Diagram      │ ║ ───────────┘ ║ ▓
╚═════════════════════════║ │ I. Multiple Graphs      │ ║ ═════════════╝ ▓
▓                         ║ │ Return to Previous Menu │ ║                ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓║ └ ────────────────────────┘ ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╚═════════════════════════════╝ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                               ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
■ Prev (Esc)    ■ Save To File (F3)   ■ Exit (F2)    ■ Help (F1)            


5.2.2.3  If the bottom line of the Control Chart Menu is selected,
the Main Menu returns.

5.2.3  SPCEX Main Menu Option C:  View Chart/Diagram.  This option
allows you to view a graphic display of the control chart or
diagram on the screen.  The option is not available until after a
Data File and Chart/Diagram Type have been selected.  Once the
display appears on the screen, you may hit any key to return to the
Main Menu.

5.2.4  SPCEX Main Menu Option D:  Chart Analysis.  This option is
used to search control charts for unusual patterns.  Option D is
not available for Bar Graphs, Pareto Charts, Pie Charts,
Histograms, Frequency Polygons, Ogives (CDFs), or Scatter Diagrams.

5.2.5  SPCEX Main Menu Option E:  View Patterns Menu.  Option E
allows you to view any unusual patterns found during the pattern
search in Option D.  It is not available until Option D has been
selected and run.  The patterns appear highlighted on the graphic
display of the control chart.  The patterns may be viewed
individually or all together.  Option E is not available for Bar
Graphs,  Pareto Charts, Pie Charts, Histograms, Frequency Polygons,
Ogives (CDFs), or Scatter Diagrams.

5.2.6  SPCEX Main Menu Option F:  Expert Consultation Menu.  Option
F allows you to view expert advice concerning the meaning of any
unusual patterns found during the pattern search in Option D.  It
is not available until Option D has been selected and run.  You
have the option to view advice for individual patterns or for all
of the patterns.  Option F is not available for Bar Graphs,  Pareto
Charts, Pie Charts, Histograms, Frequency Polygons, Ogives (CDFs),
or Scatter Diagrams.

5.2.7  SPCEX Main Menu Option G:  ON-LINE DOCUMENTATION.

Option G provides on-line documentation about SPC EXpert.  When
option G is selected, the following hypertext screen will appear:

                 SPC EXpert  :  ON-LINE DOCUMENTATION  (G)                
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓╔══════════════════════════════════════════════════════╗▓▓▓▓▓▓▓
╔══════════║                  ON LINE DOCUMENTATION               ║════╗▓▓
║┌─────────║                                                      ║──┐ ║ ▓
║│         ║ >HELP< - Click on the >HELP< or Press Enter to learn ║  │ ║ ▓
║│ --------║          how to operate the hypertext help system.   ║  │ ║ ▓
║│ Raw Data║                                                      ║  │ ║ ▓
║│         ║     (X.Y.Z) SPC EXpert menu navigation notation.     ║s │ ║ ▓
║│ Chart Ty║                                                      ║  │ ║ ▓
║│         ║          A. SPC EXpert Licensing Information         ║  │ ║ ▓
║│         ║          B. SPC EXpert Custom Enhancement Services   ║  │ ║ ▓
║│ Valid Ch║          C. Technical/Customer Support               ║  │ ║ ▓
║│         ║          D. Addressing email feedback                ║  │ ║ ▓
║│         ║          E. Planned Enhancements to SPC EXpert       ║  │ ║ ▓
║│ Analysis║          F. SPC Abbreviations                        ║  │ ║ ▓
║│ # Patter║          G. SPC Definitions                          ║  │ ║ ▓
║└─────────║          H. SPC EXpert system overview               ║──┘ ║ ▓
╚══════════║          I. Data File Formats                        ║════╝ ▓
▓          ║          J. Graphs/Diagrams Overview                 ║      ▓
▓▓▓▓▓▓▓▓▓▓▓║          K. Control Charts Overview                  ║▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓║          L. On line SPC EXpert User's Manual         ║▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓╚══════════════════════════════════════════════════════╝▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
■ Prev (Esc)    ■ Save To File (F3)   ■ Exit (F2)   ■ Help (F1)  Level : 1


Each selection in the ON-LINE DOCUMENTATION displays several pages
of text relating to a particular subject or software feature.

5.2.8  SPCEX Main Menu Option H:  Print/Export Menu.  Option H
allows you to make a paper print-out of the current chart or
diagram.  More detailed help on any of the printer option menus is
available by pressing <F1>.  This option may also be used to export
SPC EXpert graphs and diagrams to either a Computer Graphics
Metafile (CGM) or an Encapsulated PostScript (EPS) File.  CGM files
can be easily imported into commercial graphics packages such as
MicroSoft Powerpoint, MicroSoft Word, WordPerfect, and Harvard
Graphics.  With software packages such as Harvard Graphics, you can
edit individual lines, boxes and text once the diagram is imported.

                           Print/Export Menu (H)                           
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
╔══════════════════════════════════════════════════════════════════════╗▓▓▓
║┌────────────────────────────────────┐  ┌ ──────────────────────────┐ ║ ▓▓
║│╔═════════════════════════════════════════════════════════════════════╗▓▓
║│║┌────────────────────────────────┐  ┌ ─────────────────────────────┐ ║ ▓
║│║│    CURRENT PRINTER SETTINGS    │  │ ■. Print Graphic             │ ║ ▓
║│║│ ------------------------------ │  │ ■. View Graphic              │ ║ ▓
║│║│ Printer Type :                 │  │ C. Printer Type              │ ║ ▓
║│║│       Epson FX/IBM Pro Printer │  │ D. Print Orientation/Density │ ║ ▓
║│║│                                │  │ E. I/O Port                  │ ║ ▓
║│║│ Orientation/Density :          │  │ F. Advanced Comm Parameters  │ ║ ▓
║│║│                       Half Low │  │ G. Save Printer Settings     │ ║ ▓
║│║│                                │  │ ■. Export to CGM Mono File   │ ║ ▓
║│║│ I/O Port :                     │  │ ■. Export to CGM Color File  │ ║ ▓
║│║│                           LPT1 │  │ ■. Export to EPS File        │ ║ ▓
║└║│                                │  │ K. Manually Set Video Mode   │ ║ ▓
╚═║│ Video Mode :                   │  │ Return To MAIN MENU          │ ║ ▓
▓ ║│      Auto Detect (Recommended) │  └ ─────────────────────────────┘ ║ ▓
▓▓║└────────────────────────────────┘                                   ║ ▓
▓▓╚═════════════════════════════════════════════════════════════════════╝ ▓
▓▓▓                                                                       ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
■ Prev (Esc)    ■ Save To File (F3)   ■ Exit (F2)    ■ Help (F1)         


5.2.9  SPCEX Main Menu Option I:  Options Menu.  Option I allows
you to set various parameters which affect the performance and
output of SPC EXpert.  A detailed description of each option menu
and option is provided in Section 8 of this guide.

5.2.10  SPCEX Main Menu Option J:  Editor/File Manager.  Option J
allows you to create data files or to edit any ASCII text file in
any (default is \spcex) directory.  When Option J is selected, the
following screen appears:

                        SPC EXpert  :  File Manager                       
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
╔══════════════════════════════════════════════════════════════════════╗▓▓
║┌────────────────────────────────────┐  ┌ ──────────────────────────┐ ║ ▓
║│          CURRENT STATUS            │  │ A. Select Data File       │ ║ ▓
║│ ---------------------------------- │  │ B. Select Graphic Type    │ ║ ▓
║│ Raw Data File :                    │  │ ■. View Graphic           │ ║ ▓
║│                    <Not  Selected> │  │ ■. Control Chart Analysis │ ║ ▓
║│ Chart Type :                       │  │ ■. View Chart Patterns    │ ║ ▓
║│                    <Not  Sel╔═══════════════════════════════╗n    │ ║ ▓
║│                             ║ ┌ ──────────────────────────┐ ║ on  │ ║ ▓
║│ Valid Chart? :            IN║ │ ■. Edit Current Data File │ ║     │ ║ ▓
║│                     No File ║ │ B. Create/Edit A File     │ ║     │ ║ ▓
║│                             ║ │ C. View A File            │ ║ er  │ ║ ▓
║│ Analysis                  N/║ │ D. Copy A File            │ ║     │ ║ ▓
║│ # Patterns                N/║ │ E. Rename A File          │ ║     │ ║ ▓
║└─────────────────────────────║ │ F. Delete A File          │ ║ ────┘ ║ ▓
╚══════════════════════════════║ │ Return to MAIN MENU       │ ║ ══════╝ ▓
▓                              ║ └ ──────────────────────────┘ ║         ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╚═══════════════════════════════╝ ▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                                 ▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
■ Prev (Esc)    ■ Save To File (F3)   ■ Exit (F2)    ■ Help (F1)  


Option A of the SPC EXpert Editor/File manager menu (J.A) allows
you to edit the current data file - assuming one has been selected
using option (A).  Option (J.B) allows you to create a new data
file or edit an existing file.  The filename (complete with
extensions) that you want to create or edit must be entered.  The
SPC EXpert File Manager also allows you to view, copy, rename, and
delete files in any directory - with the SPC EXpert directory
assumed as the default if no path is specified in the filename. 
Detailed help on using the SPC EXpert Editor is available by
pressing <F1> while in the editor.  A summary of the SPC EXpert
editor commands is given below:

<F1>      - Help                   <RETURN>     - Insert Line
                                             (When Insert Is ON)
UP-ARROW  - Up 1 line              <F4> - Data File Formats
DWN-ARROW - Down 1 line                                      
->        - Right 1 Character      <F3>         - Delete Line
<-        - Left 1 Character       Delete       - Delete Char
                                   Backspace    - Delete Previous
PgUp      - Up one page                           Char
PgDn      - Down one page
                                      Insert    - Toggle Between
Home      - Beginning of Line                     Insert Mode and
End       - End of Line                           Overwrite Mode

<F2>      - Save File and Exit           Maximum Lines/Rows : 16000
Esc       - Exit Without Save            Maximum Columns    : 70


5.2.11  SPCEX Main Menu Option K:  Shell to DOS.  This option
allows you to access the DOS Shell while still within SPC EXpert. 
To return to SPC EXpert, type "Exit' at the DOS prompt.  Caution -
many DOS applications (such as word processors and spread sheets)
may not run when you have shelled out to DOS.  This occurs because
much of you computer's core memory is being used by SPC EXpert. 
Also, this option may not work if you are not using MicroSoft DOS
because SPC EXpert assumes that your operating system shell program
is "command.com".

5.2.12  SPCEX Main Menu Final Option:  quit.  The last option on
the SPCEX Main Menu allows you to exit the program.  When this is
selected, the question "Exit Program?  Yes, No" appears on the
screen.  The default is "No" so you must selected "yes" to actually
exit SPC EXpert.

6.  CREATING DATA FILES.

To create data files for use with SPC EXpert, start SPC EXpert and
select (J.B) -- (select SPCEX MAIN MENU option J, Editor/File
Manager, then select B. Create/Edit Any File.) --  A screen will
appear asking for the file name.  Be sure to include an extension
when you enter the filename.  The file created will be in ASCII or
DOS TEXT format.

Different types of control charts within SPC EXpert require
slightly different formats for the ASCII file which contains the
process data.  However, the first four lines of every data file
contain the same type of information (MULTIPLE charts are an
exception - see 6.10).  For all types of charts and diagrams,
entries in the data file must be separated by returns.  Do not
separate entries with commas, etc.!  All entries consist of numeric
values separated by spaces followed by an (optional) string of
characters.  The appropriate formats are outlined below.

6.1  First Four Data Lines:

Lines 1-4 of each data file (MULTIPLE charts are an exception - see
6.10) may be any string of numbers or characters you desire.  The
length of each line may be anywhere from 0 to 70 characters
followed by a carriage return.  These lines may contain all blanks,
but must be included.

  Line 1:  Chart Title
  Line 2:  Subtitle
  Line 3:  X (Horizontal) Axis Label
  Line 4:  Y (Vertical) Axis Label

6.2  Run, Moving Range (MR), Individual Moving Range (XMR),
Histogram, Frequency Polygon and Ogive (CDF) data file format:

After lines 1-4 are completed as shown above, the remaining lines
of a Run, MR, XMR, Histogram, Polygon, or CDF file contain the
numeric data.  All entries consist of a numeric value separated by
spaces followed by an optional string of characters and a carriage
return.  Each data entry is placed on its own line.  The length of
the file is determined by the number of data entries.  SPC EXpert
limits the number of entries in a Run, MR, XMR, Histogram, Polygon
or Ogive chart to 16000 or less.  An example of a Run, MR, XMR,
Histogram, Polygon or Ogive data file is shown below:

  Water Samples
  EPA
  X Axis = Sample Number
  Y Axis = Pollution Rating
  27.2
  38.7
  64.3
  52.8
  47.6
  23.4
  33.9
  45.0
  56.7
  41.1

Another example of a RUN, MR, XMR, HISTOGRAM, POLYGON, or CDF data
file can be found in the file "run.dmo" which is partially
listed below:

Drill Hole Diameters
                        <- Blank Subtitle
                        <- Blank X Axis label
                        <- Blank Y Axis label
3.911754
3.961176
4.130550
4.072248
4.106067
3.965233
3.906805
4.053189
4.072954
...


<Sample RUN Chart "run.dmo">
<Sample MR Chart "run.dmo">
<Sample XMR Chart "run.dmo">
<Sample HISTOGRAM "run.dmo">
<Sample POLYGON "run.dmo">
<Sample CDF "run.dmo">

6.3  XBAR, R, S, XBAR-R, and XBAR-S Chart file formats.  There are
two possible formats for these types of control charts.  The first
four lines for both of these formats is the same as described above
in Paragraph 6.1.  The fifth line of these data files contain the
logical group size (this is the size of each sample and must be an
integer greater than 1).  It is the only entry that appears on line
5.

The remaining lines may be coded in one of two ways.  If the
logical group size is small enough, all entries for each group may
be placed on a single line separated by spaces.  For example, the
data file below depicts measurements of five items for each sample.


  Pitch Diameter
  Units of .0001 inch in excess of .4000 inch
  Sample Number
  Measurement
  5
  36 35 34 33 32 Sample 1
  31 31 34 32 30 Sample 2
  30 30 32 30 32 Sample 3
  32 33 33 32 35 Sample 4

The second way to create the data file is to place the measurements
for each sample or subgroup on more than one line.  The data file
below will produce the exact same results as the one above.  It is
particularly useful when the sample size is too large to fit all
sample measurements on a single line.  NOTE: The optional "user
comment" must be on the same line as the LAST measurement.

  Pitch Diameter
  Units of .0001 inch in excess of .4000 inch
  Sample Number
  Measurement
  5
  36
  35
  34
  33
  32 Sample 1
  31 31 34
  32 30 Sample 2
  30 
  30 32 30 32 Sample 3
  32 33 33 32 35 Sample 4

Examples of XBAR, R, S, XBAR-R, and XBAR-S data files can be found
in the files:

  "r.dmo"

     <Sample XBAR Chart "r.dmo">
     <Sample R Chart "r.dmo">
     <Sample S Chart "r.dmo">
     <Sample XBAR_R Chart "r.dmo">
     <Sample XBAR_S Chart "r.dmo">

and

  "s.dmo"

     <Sample XBAR Chart "s.dmo">
     <Sample R Chart "s.dmo">
     <Sample S Chart "s.dmo">
     <Sample XBAR_R Chart "s.dmo">
     <Sample XBAR_S Chart "s.dmo">


6.4  Bar, Pareto, Pie and Table Data File Format.  The Bar, Pie,
Pareto charts and Table all use the same file format.  Again, the
first four lines are the same as described in Paragraph 6.1.  The
remaining lines contain data consisting of pairs of entries.  The
first entry of any pair can be any non-negative number,  The second
entry can be any alpha-numeric and is the classification name for
the category that the pair represents.  Data files for these charts
are limited to 100 pairs of entries.   A sample data file is shown
below:

  Highway Fatalities
  By Vehicle Type
  Vehicle Type
  Fatalities
  5 Sedans
  8 Vans
  25 Sports Cars
  20 Motorcycles
  10 Trucks

Another example of a BAR, PARETO, PIE, or TABLE data file can be
found the the file "bar.dmo".

<Sample BAR "bar.dmo">
<Sample PARETO "bar.dmo">
<Sample PIE "bar.dmo">
<Sample TABLE "bar.dmo">

6.5  PN Chart File Format.  Again, the first four lines contain
title and axis information are are described in Paragraph 6.1.  All
remaining entries in a PN chart data file must be integers.  Line
5 contains the fixed sample size.  The remaining numeric entries
represent the number of defectives (rejects/failures) out of the
fixed number of samples.  Each entry must appear on its own line
followed by an optional string of characters.  The length of the PN
chart will be one less than the number of entries in the data file. 
A sample PN data file is shown below:

  PN Control Chart
  Lot Size = 200
  Production Order Number
  Number of Rejects
  200
  23
  15
  17
  15
  41
  0
  25
  31
  29
  0
  8
  16
  
Another example of PN chart data is in file "pn.dmo"

<Sample PN Chart "pn.dmo">

6.6  P Chart File Format.  Again, the first four lines contain
title and axis information and are described in Paragraph 6.1.  All
remaining entries in a P chart data file must be pairs of integers
followed by an optional string of characters and a carriage return. 
The first integer in each pair represents the sample size.  The
second integer represents the number of defectives
(rejects/failures) in that sample.  Only one pair of integers per
line is allowed.  The length of the P chart will be the number of
pairs of entries in the data file.  A sample P data file is shown
below:

  P Chart
  Sample Data File
  Day
  Percent Rejected
  28 4
  27 9
  28 3
  16 2
  26 1
  24 1
  25 5
  20 5
  25 14
  14 1

Another example of P chart data is in file "p.dmo"

<Sample P Chart "p.dmo">

6.7  C Chart File Format.  Again, the first four lines contain
title and axis information are described in Paragraph 6.1.  All
remaining entries in a C chart data file must be integers.  Only
one entry per line followed by an optional string of characters is
allowed.  Each entry represents the number of defects (errors) in
a sample of fixed size/weight/length/etc.  The length of the C
chart will be the number of entries in the data file.  A sample C
data file is shown below:

  C Chart
  Sample Data File
  Sample number
  Number of Alignment Errors
  7
  6
  6
  7
  4
  7
  8
  12
  9
  9

Another example of C chart data is in file "c.dmo"

<Sample C Chart "c.dmo">

6.8  U Chart File Format.  Again, the first four lines contain
title and axis information are described in Paragraph 6.1.  All
remaining entries in a U chart data file must be pairs of integers. 
Only one pair followed by an optional string of Characters is
allowed per line.  The first integer in each pair can be either an
integer or a real number and represents the sample size or length
or weight, etc. The second entry must be an integer and represents
the number of defectives (rejects/failures) in that sample.  The
length of the U chart will be the number of pairs of entries in the
data file.  A sample U data file is shown below:

  U Chart
  # Typos in Daily Calendar
  Day
  Typos per Word
  150 2
  100 1
  120 0
  140 3
  200 6
  120 1

Another example of U chart data is in file "u.dmo"

<Sample U Chart "u.dmo">

6.9  Scatter Diagram data File Format.  Again, the first four lines
contain title and axis information are described in Paragraph 6.1. 
All remaining entries in a Scatter Diagram data file are numeric
and consists of pairs of entries.  Only one pair followed by an
optional string of Characters is allowed per line.  Both entries in
each pair can be any number, integer or real.  The first number in
each pair will be displayed on the horizontal axis (x-axis) and the
second on the vertical (y-axis).  A scatter diagram is limited to
16000 pairs of entries.  A sample Scatter Diagram data file is
shown below:

  Scatter Diagram
  Sample Data File
  Time Spent With Clients
  Number of Houses Sold
  40 15
  58 14
  33 12
  65 20
  80 26
  80 26
  56 14
  30 12
  33 12
  90 30
  72 22


Another example of SCATTER diagram data is in file "scat.dmo"

<Sample SCATTER "scat.dmo">


6.10  Multiple Data File Format.  SPC EXpert allows you to design
custom charts by putting up to 6 separate graphs in a single
multiple graph.  The graphs are automatically sized and placed
unless otherwise specified.  The first two lines for these files
contain the multiple chart title and subtitle.  The length of each
line may be anywhere from 0 to 70 characters followed by a carriage
return.  Multiple data files do not have X-axis and Y-axis labels. 
Beginning on the third line, the multiple file consists of filename
and chart-type pairs.  A multiple file may contain up to 6 pairs. 
A sample is shown below:

  Multiple Graph
  Samaple Data File
  bar.dmo  BAR
  bar.dmo PARETO
  bar.dmo PIE
  bar.dmo TABLE

Several other files in the SPC EXpert disk produce MULTIPLE CHARTS:

"multi3.dmo"
<Sample MULTIPLE "multi3.dmo">

"multi2.dmo"
<Sample MULTIPLE "multi2.dmo">

"multi1.dmo"
<Sample MULTIPLE "multi1.dmo">



Caution - Some types of charts do not reproduce well when shrunk to
fit on a multiple chart page.  It is a good idea to view the chart
before sending it to the printer make sure the output is legible.

7.  PC LAN Capability.

SPC EXpert is Multiple Simultaneous-User PC LAN Capable.  The
concept of PC LAN operation for SPC EXpert is that the software
will be installed as described in the installation instructions
onto a (possibly read only) shared drive on the file server.  The
LAN users will start up SPC EXpert while in their personal
directory.  The following hypothetical example will illustrate how
to set up and access SPC EXpert on a PC LAN.

S: is the shared drive which is read only to everyone except for
the system manager.  Note that it is not necessary that S: be
read-only.

Y: is (to a LAN user) a home (personal) directory on the file
server.
 
C: is the user's hard disk drive.

The LAN Manager installs SPC EXpert into the directory S:\SPCEX as
described in Section 2.  If S: is read-only to the LAN users, the
LAN Manager must execute SPC EXpert once while still in the
S:\SPCEX subdirectory as described in Section 4.  This is necessary
to create some permanent working files on the S:\SPCEX
subdirectory.

The LAN Manager should then create a batch file ("lan.bat" or
whatever) for the LAN users to use to call up SPC EXpert. 
"LAN.BAT" should appear as follows:

  Y:
  md Y:\spcdata
  cd Y:\spcdata
  S:\spcex\spcex -a

or

  C:
  md C:\spcdata
  cd C:\spcdata
  S:\spcex\spcex -a

All user data files and temporary work files will be placed in the
user's personal directory (Y:\spcdata or C:\spcdata).


8. OPTIONS MENU

The Options Menu appears when you select SPCEX Main Menu feature
"I".  It allows you to set various parameters which affect the
output and/or performance of SPC EXpert.  The SPC EXpert options
menu appears as below.

                      SPC EXpert  -  Options Menu (I)                     
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╔═════════════════════════════════╗▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
╔═════════════════════║ ┌ ────────────────────────────┐ ║ ═════════════╗▓▓
║┌────────────────────║ │ A. Control Charts           │ ║ ───────────┐ ║ ▓
║│          CURRENT ST║ │ B. Distribution Graphs      │ ║ File       │ ║ ▓
║│ -------------------║ │ C. PIE/BAR/PARETO/TABLE     │ ║ ic Type    │ ║ ▓
║│ Raw Data File :    ║ │ D. Scatter Diagrams         │ ║            │ ║ ▓
║│                    ║ │ E. Process Specifications   │ ║ t Analysis │ ║ ▓
║│ Chart Type :       ║ │ F. Data File Formats        │ ║ atterns    │ ║ ▓
║│                    ║ │ G. Fonts & Font Sizes       │ ║ ltation    │ ║ ▓
║│                    ║ │ H. Titles/Stats/etc         │ ║ mentation  │ ║ ▓
║│ Valid Chart? :     ║ │ I. Saving/Recalling Options │ ║            │ ║ ▓
║│                    ║ │ J. Display Current Options  │ ║            │ ║ ▓
║│                    ║ │ Return to Main Menu         │ ║ e Manager  │ ║ ▓
║│ Analysis           ║ └ ────────────────────────────┘ ║            │ ║ ▓
║│ # Patterns         ╚═════════════════════════════════╝            │ ║ ▓
║└─────────────────────                                   ───────────┘ ║ ▓
╚══════════════════════════════════════════════════════════════════════╝ ▓
▓                                                                        ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
■ Prev (Esc)    ■ Save To File (F3)   ■ Exit (F2)    ■ Help (F1)            


8.A A. Control Charts (I.A)
  This allows you to set parameters which affect the statistical
  calculations and appearance of all control charts.  Be sure to
  read the detailed context-sensitive help available on-line by
  pressing <F1>.

               SPC EXpert  - Control Chart Options Menu (I.A)               
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
╔════════════════════════════════════════════════════════════════════════╗▓▓
║┌────────────────────────────────┐  ┌ ────────────────────────────────┐ ║ ▓
║│      CONTROL CHART OPTIONS     │  │ A. Range to Display             │ ║ ▓
║│ ------------------------------ │  │ B. Range to Calc Control Limits │ ║ ▓
║│                                │  │ C. Range for Stats/Regression   │ ║ ▓
║│ Display Range :  ALL           │  │ D. Method for Center Line       │ ║ ▓
║│ Limits Range :  ALL            │  │ E. Method for Control Limits    │ ║ ▓
║│ Stats Range :  ALL             │  │ F. Dist Graph to Display        │ ║ ▓
║│ Center Line : Mean (Average)   │  │ G. X-Axis Labeling Convention   │ ║ ▓
║│ Control Limits : TABLE Look-up │  │ H. Y-Axis Labeling Convention   │ ║ ▓
║│ Dist Function : NONE           │  │ I. Control Limits/Zones         │ ║ ▓
║│ X Axis Labeling : NONE         │  │ J. Process Specs ON             │ ║ ▓
║│ Y Axis Labeling : UCL & LCL    │  │ K. Linear Regression ON         │ ║ ▓
║│ Limits/Zones : UCL & LCL       │  │ L. Eliminate Outliers ON        │ ║ ▓
║│ Show Specifications : OFF      │  │ M. MIN Lengths for Analysis     │ ║ ▓
║│ Show Regression Line : OFF     │  │ Return to OPTIONS MENU          │ ║ ▓
║│ Eliminate Outliers : OFF       │  └ ────────────────────────────────┘ ║ ▓
║└────────────────────────────────┘                                      ║ ▓
╚════════════════════════════════════════════════════════════════════════╝ ▓
▓                                                                          ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
■ Prev (Esc)    ■ Save To File (F3)   ■ Exit (F2)    ■ Help (F1)            


     A. Range to Display (I.A.A) [default: ALL]
       - You may select the range of data to be displayed on the
       output.  A maximum of 16000 data points may be displayed at
       one time for any control chart.  The practical limit for
       most video monitors is about 200-300 data points.  The
       graphic output is scaled to accommodate the data ranges. 
       The following choices are available:

          A. All (I.A.A.A)
            - Display the entire control chart

          B. Last N (I.A.A.B)
            - Display the most recent N (user provided) data
            points.  You will be prompted to enter a value for N.

          C. Range a to b (I.A.A.C)
            - Display a range of data points where you provide the
            start and end data indices to be displayed.  The first
            data point has index 1.  You will be prompted to enter
            the values for indices a and b.


     B. Range to Calc Control Limits (I.A.B) [default: ALL]
       - You may set what range of data is used in the calculation
       of the control limits (upper & lower limits, center line,
       Cp, Cpl, Cpu, Cpk, and percent in-spec).  The display of
       these statistics may be turned on/off using selection
       I.H.C.  The control chart process specifications (I.A.J)
       must be turned ON to display the in-spec and capability
       statistics.  The following choices are available:

          A. All (I.A.B.A)
            - Use all of the data points to calculate the control
            limits.

          B. First M (I.A.B.B)
            - Use the first M (user provided) data points for
            control limits.  You will be prompted to enter a value
            for M.  This can be used tp stop recalculating the
            control limits after the first M process measurements
            - thus the addition of more data entries will not
            cause the control limits to be constantly re-
            calculated.

          C. Range a to b (I.A.B.C)
            - Use a user provided range to calculate the control
            limits.  The first data point has index 1.  You will
            be prompted to enter the values for indices a and b.

          D. Same as DISPLAY (I.A.B.D)
            - Calculate the control limits using the data in the
            DISPLAY (I.A) range.
      
     C. Range for Stats/Regression (I.A.C) [default: ALL]
       - You may set the range of data used to calculate standard
       statistics and linear regression.  The standard statistics 
       display may be turned on/off using selection I.H.C.  This
       range is also the range of data used for the automated
       control chart ANALYSIS - selection D.  The following
       choices are available:

          A. All (I.A.C.A)
            - Calculate statistics and perform chart analysis on
            ALL data points in the control chart.

          B. Range a to b (I.A.C.B)
            - Calculate statistics and perform chart analysis
            using the data points in a user provide range and data
            point indices.  The first data point in the control
            chart has index 1.  You will be prompted to enter
            values for a and b.
      
          C. Same as LIMITS (I.A.C.C)
            - Calculate statistics and perform chart analysis
            using data points in the LIMITS (I.A.B) range.

          D. Same as DISPLAY (I.A.C.D)
            - Calculate statistics and perform chart analysis
            using data points in the DISPLAY (I.A.A) range.


     D. Method for Center Line (I.A.D) [default: Mean]
       - You may select the method used to determine the center
       line using data in the Limits Range (I.A.B).  The center
       line can be determined using the mean, median or a user
       specified value.  The following choices are available:

          A. Mean (Average) (I.A.D.A)
            - Use the average of the data points in the LIMITS
            range to calculate the center line.  This is the most
            common method used to determine the process center
            line.

          B. Median (I.A.D.B)
            - Use the median of the data points in the LIMITS
            range to calculate the center line.  This method is
            often used to minimize the effect of outliers and
            unusual data values on the process center calculation. 
            The median is the value for which an equal number of
            data values fall above and below.

          C. User Defined (I.A.D.C)
            - Use a value you provide as the process center.  THIS
            METHOD IS NOT RECOMMENDED!  Use at your own risk!

     E. Method for Control Limits (I.A.E) [default: TABLE]
       - You may select the method used to calculate the control
       limits using data in the Limits Range (I.A.B).  The
       follwoing choices are available:

          A. TABLE look-up (I.A.E.A)
            - This approximates the control limits from
            statistical tables or formulas.  This is the
            traditional method used to calculate control limits. 
            In cases where your process may be out of control in
            the LIMITS range, this method is recommended.

          B. 3*Sigma(N) (I.A.E.B)
            - This approximates the control limits using +- 3
            standard deviations with N degrees of freedom.  This
            method should only be used to calculate control
            limits, IF YOU ARE CERTAIN THAT YOUR PROCESS IS STABLE
            AND IN CONTROL in the LIMITS range.

          C. 3*Sigma(N-1) (I.A.E.C)
            - This approximates the control limits using +- 3
            standard deviations with N-1 degrees of freedom.  This
            method should only be used to calculate control
            limits, IF YOU ARE CERTAIN THAT YOUR PROCESS IS STABLE
            AND IN CONTROL in the LIMITS range.

          D. M*Sigma(N) (I.A.E.D)
            - This approximates the control limits using +- M
            standard deviations with N degrees of freedom - where
            you are prompted for the value of M.  This method
            should only be used to calculate control limits, IF
            YOU ARE CERTAIN THAT YOUR PROCESS IS STABLE AND IN
            CONTROL in the LIMITS range.  This is commonly used
            with M<3 in an attempt to reduce the variability of a
            stable, in-control process. 

          E. M*Sigma(N-1) (I.A.E.E)
            - This approximates the control limits using +- M
            standard deviations with N-1 degrees of freedom -
            where you are prompted for the value of M.  This
            method should only be used to calculate control
            limits, IF YOU ARE CERTAIN THAT YOUR PROCESS IS STABLE
            AND IN CONTROL in the LIMITS range.  This is commonly
            used with M<3 in an attempt to reduce the variability
            of a stable, in-control process.

          F. 3*User-Defined-Sigma (I.A.E.F)
            - This approximates the control limits using +- 3
            times a standard deviation you provide.  This method
            might be used in an attempt to reduce the variability
            of a stable, in-control process.  Several types of
            short run control charts (WAIT FOR NEXT RELEASE OF SPC
            EXpert) eliminate any need for this though.

     F. Dist Graph to Display (I.A.F) [default: none]
       - You may display a data distribution function on a control
       chart. The following choices are available: 

          A. none (I.A.F.A)
            - Do not display any distribution graphic.

          B. Histogram (I.A.F.B)
            - Display a HISTOGRAM of the chart values in the STATS
            range.  For an XBAR chart, this will reflect the
            distribution of the sample averages.

          C. Frequency Polygon (I.A.F.C)
            - Display a POLYGON of the chart values in the STATS
            range.  For an XBAR chart, this will reflect the
            distribution of the sample averages.

          D. Ogive (CDF) (I.A.F.D)
            - Display a CDF of the chart values in the STATS
            range.  For an XBAR chart, this will reflect the
            distribution of the sample averages.

          E. Individuals Histogram (I.A.F.E)
            - Display a HISTOGRAM of the individual data values in
            the STATS range.  For an XBAR chart, this will reflect
            the distribution of the individual data samples.

          F. Individuals Polygon (I.A.F.F)
            - Display a POLYGON of the individual data values in
            the STATS range.  For an XBAR chart, this will reflect
            the distribution of the individual data samples.

          G. Individuals Ogive (CDF) (I.A.F.G)
            - Display a CDF of the individual data values in the
            STATS range.  For an XBAR chart, this will reflect the
            distribution of the individual data samples.

     G. X-Axis Labeling Convention (I.A.G) [default: none]
       - You may select the type of label for the X (horizontal)
       Axis.  

          A. none (I.A.G.A)
            - Do not print labels along the X-axis.
      
          B. User Defined Strings (I.A.G.B)
            - Displays the strings (possibly empty if none
            provided) that you provide in the comment field of the
            data file.  If you provide no comments in the data
            file, then this will appear exactly as X-axis lable
            option none (I.A.G.A).

          C. Values of Data Points (I.A.G.C)
            - Displays the actual value of the data point in the
            chart.  This value is the actual number plotted
            above/below the X-Axis -- for XBAR charts this value
            will be the sample average, for P charts the fraction
            defective, etc.

          D. Data point indices (1,2,...N) (I.A.G.D)
            - Labels the X-Axis with sequential integers beginning
            with 1.  These integer indices coorespond to the
            indices you provide in the DISPLAY range (I.A.A),
            LIMITS range (I.A.B), and the STATS range (I.A.C).

     H. Y-Axis Labeling Convention (I.A.H) [default: UCL & LCL]
       - You may select the type of label for the Y (vertical)
       Axis.

          A. none (I.A.H.A)
            - Do not label the Y axis.
      
          B. UCL & LCL only (I.A.H.B)
            - Label only the Centerline and the upper (UCL) and
            lower (LCL) control limits.  The values for the LCL
            and UCL will be part of these labels.
      
          C. Graduated Scale (I.A.H.C)
            - Label the Center line, UCL, LCL, and intermediate
            values (one and two sigma) on the Y Axis.  The values
            will be part of these labels.

     I. Control Limits/Zones (I.A.I) [default: UCL & LCL]
       - You may specify what control limit markings are plotted
       on a control chart besides the center line.

          A. none (I.A.G.A)
            - Display the center line only.
      
          B. UCL only (I.A.G.B)
            - Display the center line and UCL (upper control
            limit) only.

          C. LCL only (I.A.G.C)
            - Display the center line and LCL (lower control
            limit) only.


          D. UCL & LCL (I.A.G.D)
            - Display the center line, UCL (upper control limit)
            and LCL (lower control limit).

          E. zones (I.A.G.E)
            - Display the center line, UCL (upper control limit),
            LCL (lower control limit), and the "1-sigma" and
            "2-sigma" lines above and below the center line. 
            These vertical ranges are often called "zones":

               -1 to +1 sigma                  :  ZONE C
               -2 to -1 sigma & +1 to +2 sigma :  ZONE B
               -3 to -2 sigma & +2 to +3 sigma :  ZONE A

     J. Process Specs ON/OFF (I.A.J) [default: OFF]
       - You may use this selection to toggle ON/OFF the current
       process specifications.  Process specifications may be set
       using selection I.E.  When this is ON, the process
       specifications are graphically displayed on the control
       chart.  Capability statistics are displayed when Process
       Specs (I.A.J) and Summary Stats (I.H.C) are BOTH "ON".

     K. Linear Regression ON/OFF (I.A.K) [default: OFF]
       - This allows you to plot (or not) the linear regression
       line calculated from the data points in the Stats Range
       (I.A.C) on control charts.  The default setting is "OFF". 

     L. Eliminate Outliers ON/OFF (I.A.L) [default: OFF]
       - You may designate any data points in a data file for
       control charts as "outliers"   When eliminate outliers is
       ON, points defined as outliers will be highlighted and will
       not be used in the calculations.  The default setting is
       "OFF".

     M. MIN Lengths for Analysis (I.A.M)
       - You may use this to set the minimum length required for
       each control chart out-of-control condition to be reported
       after the automatic control chart analysis (selection D). 
       The following choices are available:

          A. run (I.A.M.A) [default: 7]
            - A run is and sequence of points which all fall on
            the same side of the center line.  A process which is
            in control (only natural causes of variation) should
            have values randomly above and below the centerline.
      
          B. inc_trend (I.A.M.B) [default: 7]
            - An increasing trend is a sequence of points for
            which each is higher/larger than the previous.  A
            process which is in control (only natural causes of
            variation) should have values which are randomly above
            and below the preceeding value.

          C. dec_trend (I.A.M.C) [default: 7]
            - A decreasing trend is a sequence of points for which
            each is lower/smaller than the previous.  A process
            which is in control (only natural causes of variation)
            should have values which are randomly above and below
            the preceeding value.

          D. shift_up (I.A.M.D) [default: 10]
            - A shift-up is a sequence of points for which the
            first half is below the center line and the second
            half is above the center line.  A process which is in
            control (only natural causes of variation) should have
            values which are randomly above and below the center
            line.

          E. shift_down (I.A.M.E) [default: 10]
            - A shift-down is a sequence of points for which the
            first half is above the center line and the second
            half is below the center line.  A process which is in
            control (only natural causes of variation) should have
            values which are randomly above and below the center
            line.

          F. cyclic (I.A.M.F) [default: 10]
            - A cycle is a sequence of points which alternate up
            and down.  A process which is in control (only natural
            causes of variation) should have values which are
            randomly above and below the preceeding value.

          G. mixture (I.A.M.G) [default: 10]
            - A mixture is a sequence of points which are more
            than 1 sigma above or below the center line.  A
            normally distributed process which is in control (only
            natural causes of variation) should have about 68% of
            its values within +- 1 sigma (standard deviation) of
            its average (mean).

          H. stratification (I.A.M.H) [default: 10]
            - Stratification is a sequence of points which are all
            within +- 1 sigma of the center line.  A normally
            distributed process which is in control (only natural
            causes of variation) should have about 32% of its
            values more than 1 sigma (standard deviation) above or
            below its average (mean).

     Return to OPTIONS MENU
       - Use this option (or ESC or RIGHT-MOUSE-BUTTON or <F2>) to
      return to the SPC EXpert options menu (selection I).

8.B B. Distribution Graphs
  This allows you to set parameters which affect the statistical
  calculations and appearance of HISTOGRAMS, frequency POLYGONS,
  and CDFs.
            SPC EXpert  - Distribution Graph Options Menu (I.B)           
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╔═════════════════════════════════╗▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
╔═════════════════════║ ┌ ────────────────────────────┐ ║ ═════════════╗▓▓
║┌────────────────────║ │ A. Control Charts           │ ║ ───────────┐ ║ ▓
║│          CURRENT ST║ │ B. Distribution Graphs      │ ║ File       │ ║ ▓
║│ -------------------║ │ C. PIE/BAR/PARETO/TABLE     │ ║ ic Type    │ ║ ▓
║│ Raw Data File :    ║ │ D. Scatter Diagrams         │ ║            │ ║ ▓
╔════════════════════════════════════════════════════════════════════╗ ║ ▓
║┌───────────────────────────────────┐  ┌ ─────────────────────────┐ ║ ║ ▓
║│   DISTRIBUTION GRAPH OPTIONS      │  │ A. Show Process Specs ON │ ║ ║ ▓
║│ <<<<<<<---------------->>>>>>>    │  │ B. Eliminate Outliers ON │ ║ ║ ▓
║│                                   │  │ C. Show Mean ON          │ ║ ║ ▓
║│ Show Process Specifications : OFF │  │ D. Show Median ON        │ ║ ║ ▓
║│ Eliminate Outliers : OFF          │  │ E. Standard Dist Display │ ║ ║ ▓
║│ Plot Mean (Average) : OFF         │  │ F. Number of Bins        │ ║ ║ ▓
║│ Plot Median : OFF                 │  │ Return to OPTIONS Menu   │ ║ ║ ▓
║│ Data Bins : AUTO                  │  └ ─────────────────────────┘ ║ ║ ▓
║│ Display Dist Function : NONE      │                               ║ ╝ ▓
║└───────────────────────────────────┘                               ║   ▓
╚════════════════════════════════════════════════════════════════════╝ ▓▓▓
▓                                                                      ▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
■ Prev (Esc)    ■ Save To File (F3)   ■ Exit (F2)    ■ Help (F1)            


     A. Show Process Specs ON/OFF (I.B.A) [default: OFF]
       - Use this selection to toggle ON/OFF the process
       specifications option for distribution graphs.  The process
       specifications for all tools is set using the PROCESS
       SPECIFICATIONS MENU (selection I.E). When ON, the process
       specifications will be displayed over the distribution
       graphic.  When SUMMARY STATS is turned ON (selection I.H.C)
       AND this is ON, capability statistics (Cp, Cpk, Cpu, Cpl,
       etc.) will be displayed in the statistics summary box on
       the graphic.

     B. Eliminate Outliers ON/OFF (I.B.B) [default: OFF]
       - When this is ON, all data points marked as user defined
       outliers (e.g. !45 or ! 0.335) in the data file, will  not
       be used to calculate any statistics or create the
       distribution graphic.

     C. Show Mean ON/OFF (I.B.C) [default: OFF]
       - When this is ON, the mean (average) of the data values 
       will be overlaid on the distribution graphic.

     D. Show Median ON/OFF (I.B.D) [default: OFF]
       - When this is ON, the median of the data values will be
       overlaid on the distribution graphic.

     E. Standard Dist Display (I.B.E) [default: none]
       - You may overlay a standard frequency distribution
       function on the distribution graphic.

          A.  None.  Does not overlay a frequency distribution.
          B.  Uniform (best guess)* 
          C.  Exponential (best guess)* 
          D.  Normal (best guess)* 
          E.  LogNormal (best guess)* 
          F.  Gamma  (best guess)  Not available.
          G.  Uniform(a,b)
          H.  Exponential(mu)
          I.  Normal(mu, sigma)
          J.  LogNormal(mu,sigma)
          K.  Gamma(alpha, theta) Not available.
          L.  Weibull(1,beta,gamma)

            * Best guess is based on estimates calculated from the
            data in the data files.

     F. Number of Bins (I.B.F) [default: auto]
       - You may select how many data groups or bins are used to
       arrange the data.  The maximum is 20, minimum 1, and an
       auto select option is provided/recommended.


8.C C. PIE/BAR/PARETO/TABLE
  This allows you to set parameters which affect the statistical
  calculations and appearance of PIE charts, BAR graphs, PARETO
  diagrams, and data TABLES.

     A. Data Label Type (I.C.A) [default: frequency]
       - This allows you to specify how the PIE, BAR,PARETO, and
       TABLE charts are labeled with the data values.  The choices
       available are listed below:

          A. none (I.C.A.A)
            - This eliminates the data labels from the output.

          B. frequency (I.C.A.B)
            - This labels the bar or slice with the actual number
            of occurances for each data group.

          C. percentage (I.C.A.C)
            - This labels the bar or slice with the percent of
            total represented by each data group.


8.D D. Scatter Diagrams
  This allows you to set parameters which affect the statistical
  calculations and appearance of SCATTER DIAGRAMS.

              SPC EXpert  - Scatter Diagram Options Menu (I.D)             
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╔═════════════════════════════════╗▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
╔═════════════════════║ ┌ ────────────────────────────┐ ║ ═════════════╗▓▓▓
║┌────────────────────║ │ A. Control Charts           │ ║ ───────────┐ ║ ▓▓
║│          CURRENT ST║ │ B. Distribution Graphs      │ ║ File       │ ║ ▓▓
╔═══════════════════════════════════════════════════════════════════════╗▓▓
║┌────────────────────────────────────┐  ┌ ───────────────────────────┐ ║ ▓
║│      SCATTER DIAGRAM OPTIONS       │  │ A. Show X Process Specs ON │ ║ ▓
║│ <<<<<<<-------------------->>>>>>> │  │ B. Show Y Process Specs ON │ ║ ▓
║│                                    │  │ C. Eliminate Outliers ON   │ ║ ▓
║│ Show X Process Specs : OFF         │  │ D. Show X Mean ON          │ ║ ▓
║│ Show Y Process Specs : OFF         │  │ E. Show X Median ON        │ ║ ▓
║│ Eliminate Outliers : OFF           │  │ F. Show Y Mean ON          │ ║ ▓
║│ Plot X Mean (Average) : OFF        │  │ G. Show Y Median ON        │ ║ ▓
║│ Plot X Median : OFF                │  │ H. Regression Line ON      │ ║ ▓
║│ Plot Y Mean (Average) : OFF        │  │ I. Data Dist Graph Menu    │ ║ ▓
║│ Plot Y Median : OFF                │  │ Return to OPTIONS Menu     │ ║ ▓
║│ Regression Line : OFF              │  └ ───────────────────────────┘ ║ ▓
║│ Dist Func to Display : NONE        │                                 ║ ▓
║└────────────────────────────────────┘                                 ║ ▓
╚═══════════════════════════════════════════════════════════════════════╝ ▓
▓                                                                         ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
■ Prev (Esc)    ■ Save To File (F3)   ■ Exit (F2)    ■ Help (F1)   

     A. Show X Process Specs ON/OFF (I.D.A) [default: OFF]
       - This allows you to plot (or not) the X Process
       specifications on the scatter diagram.  You can set the X
       process specs using the PROCESS SPECIFICATIONS menu
       (selection I.E).  X Capability statistics (Cp, Cpk, Cpl,
       Cpu, etc.) are displayed when both Process Specs (I.D.A) is
       ON and Summary Stats (I.H.C) is ON.

     B. Show Y Process Specs ON/OFF (I.D.B) [deault: OFF]
       - This allows you to plot (or not) the Y Process
       specifications on the scatter diagram.  You can set the Y
       process specs using the PROCESS SPECIFICATIONS menu
       (selection I.E).  Y Capability statistics (Cp, Cpk, Cpl,
       Cpu, etc.) are displayed when both Process Specs (I.D.A) is
       ON and Summary Stats (I.H.C) is ON.

     C. Eliminate Outliers ON/OFF (I.D.C) [deault: OFF]
       - You can designate any data points in the data file for
       the scatter diagram as "outliers" (e.g. ! 25 10, etc.). 
       When eliminate outliers is ON, points defined as outliers
       will be highlighted and will not be used in the
       calculations.

     D. Show X Mean ON/OFF (I.D.D) [deault: OFF]
       - You may choose to plot or not the mean (average) of the
       X values on the scatter diagram.

     E. Show X Median ON/OFF (I.D.E) [deault: OFF]
       - You may choose to plot or not the median of the X values
       on the scatter diagram.

     F. Show Y Mean ON/OFF (I.D.F) [deault: OFF]
       - You may choose to plot or not the mean (average) of the
       Y values on the scatter diagram.

     G. Show Y Median ON/OFF (I.D.G) [deault: OFF]
       - You may choose to plot or not the median of the Y values
       on the scatter diagram.

     H. Regression Line ON/OFF (I.D.H) [deault: OFF]
       - This option allows you to plot (or not) the linear
       regression line calculated from the data points in the data
       file.  Regression statistics (r-squared, F-test, t-test,
       regression coefficients, etc.) are displayed when both
       Scatter Diagram regression (I.D.H) is ON and Summary Stats
       (I.H.C) is ON.

     I. Data Dist Graph Menu (I.D.I) [default: none]
       - This feature allows you to select a data distribution
       function (HISTOGRAM, POLYGON, or CDF) to display along with
       the scatter diagram.  Two distribution graphics are
       displayed -  one for the X values and one for the Y values.

8.E E. Process Specifications
  This menu allows you to set upper and lower SPECIFICATION
  limits.  These specification limits are used for process
  capability statistics in control charts, distribution graphs,
  and scatter diagrams. 

              SPC EXpert  - Process Specifications Menu (I.E)               
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╔═════════════════════════════════╗▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
╔═════════════════════║ ┌ ────────────────────────────┐ ║ ═════════════╗▓▓▓▓
║┌────────────────────║ │ A. Control Charts           │ ║ ───────────┐ ║ ▓▓▓
║│          CURRENT ST║ │ B. Distribution Graphs      │ ║ File       │ ║ ▓▓▓
╔═════════════════════════════════════════════════════════════════════════╗▓
║┌─────────────────────────────────────┐  ┌ ────────────────────────────┐ ║ 
║│      SPECIFICATIONS SETTINGS        │  │ A. USL                      │ ║ 
║│ <<<<<<<-------------------->>>>>>>  │  │ B. LSL                      │ ║ 
║│                                     │  │ C. Nominal                  │ ║ 
║│ USL : 0.000000                      │  │ D. USL (Y) Scatter Only     │ ║ 
║│ LSL : 0.000000                      │  │ E. LSL (Y) Scatter Only     │ ║ 
║│ nominal : 0.000000                  │  │ F. Nominal (Y) Scatter Only │ ║ 
║│ USL (Y) Scatter Only : 0.000000     │  │ G. Pop Sigma Est. Type      │ ║ 
║│ LSL (Y) Scatter Only : 0.000000     │  │ Return to OPTIONS Menu      │ ║ 
║│ nominal (Y) Scatter Only : 0.000000 │  └ ────────────────────────────┘ ║ 
║│                                     │                                  ║ 
║│ Population Sigma Estimate Type :    │                                  ║ 
║│     Pop Sigma(n-1)                  │                                  ║ 
║└─────────────────────────────────────┘                                  ║ 
╚═════════════════════════════════════════════════════════════════════════╝ 
▓                                                                           
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
■ Prev (Esc)    ■ Save To File (F3)   ■ Exit (F2)    ■ Help (F1)         

     A. USL (I.E.A) [default: 0.0]
       - Use this to set the USL for all control charts,
       Histograms, Polygons, CDFs (Ogives), and the X variable on
       scatter diagrams.  Any number from -10^7 to +10^7 may be
       entered.

     B. LSL (I.E.B) [default: 0.0]
       - Use this to set the LSL for all control charts,
       Histograms, Polygons, CDFs (Ogives), and the X variable on
       scatter diagrams.  Any number from -10^7 to +10^7 may be
       entered.

     C. Nominal (I.E.C) [default: 0.0]
       - Use this to set the nominal process value for all control
       charts, Histograms, Polygons, CDFs (Ogives), and the X
       variable on scatter diagrams.  Any number from -10^7 to
       +10^7 may be entered.

          *** This is not used in this version of SPC EXpert.

     D. USL (Y) Scatter Only (I.E.D) [default: 0.0]
       - Use this to set the USL value for the Y variable on
       scatter diagrams.  Any number from -10^7 to +10^7 may be
       entered.

     E. LSL (Y) Scatter Only (I.E.E) [default: 0.0]
       - Use this to set the LSL value for the Y variable on
       scatter diagrams.  Any number from -10^7 to +10^7 may be
       entered.

     F. Nominal (Y) Scatter Only (I.E.F) [default: 0.0]
       - Use this to set the nominal process value for the Y
       variable on scatter diagrams.  Any number from -10^7 to
       +10^7 may be entered.

          *** This is not used in this version of SPC EXpert.

     G. Pop Sigma Est. Type (I.E.G) [default: sigma(n-1)]
       - You may select the method used to estimate the population
       standard deviation when calculating capability statistics. 
       The following options are available:


          A. Table Lookup (I.E.G.A)
            - This method approximates the standard deviation of
            the population using statistical tables or formulas
            commonly cited in textbooks.

          B. Pop Sigma(n) (I.E.G.B)
            - This method approximates the standard deviation of
            the population using the standard deviation of the
            individual samples with n degrees of freedom.

          C. Pop Sigma(n-1) (I.E.G.C)
            - This method approximates the standard deviation of
            the population using the standard deviation of the
            individual samples with n-1 degrees of freedom.

          D. User Defined (I.E.G.D)
            - This method allows you to directly specify the
            standard deviation of the population.  This method is
            NOT RECOMMENDED!  Use at your own risk.


8.F F. Data File Formats
  This option has been included in SPC EXpert to accomadate future
  enhancements which include the ability to import data from
  DBase-type database files.  The following data file formats are
  supported:

     A. SPC EXpert Format (I.F.A)
       - This is the data file format described in the SPC EXpert
       software users manual.

     B. USAF SPC 1.1 Format (I.F.B)
       - This is the data file format used in the Air Force's
       Statistical Process Control Software (SPC Version 1.1 -
       March 1992).  SPC Version 1.1 is available only to
       Department of Defense Agencies.

     C. USAF SPC 1.2 Format (I.F.C)
       - This is the data file format used in the Air Force's
       Statistical Process Control Software (SPC Version 1.2 -
       October 1992).  SPC Version 1.2 is available only to
       Department of Defense Agencies.

          *** SPC EXpert's data file formats were patterned
          directly after the USAF SPC 1.2 raw data file formats.

8.G G. Fonts & Font Sizes
  This allows you to select the font sizes and types to be used
  for the titles and axis labels on all graphics.  The following
  options are available:

     A. Titles Font (I.G.A) [default: Stroked Small]
       - You may select the type of text font used in the title
       and subtitle of all graphics.  The following fonts are
       available:
      
                 A. 8x8 bit-mapped
                 B. Stroked triplex
                 C. Stroked small
                 D. Stroked sans-serif
                 E. Stroked gothic

     B. Titles Font Size (I.G.B) [default: Auto]
       - You may select the type of text font used in the title
       and subtitle of all graphics.  The sizes available include:
       "0. Auto" or "1 - 10".  "Auto" selects the font size to fit
       the title length to the screen width and height.  "1" -
       "10" determines the relative size of the font from small
       ("1") to large ("10").

     C. Axes Labels Font (I.G.C) [default: Stroked Small]
       - You may select the type of text font used in the X and Y
       axis labels of all graphics.  The following fonts are
       available:

                 A. 8x8 bit-mapped
                 B. Stroked triplex
                 C. Stroked small
                 D. Stroked sans-serif
                 E. Stroked gothic

     D. Axes Labels Font Sizes (I.G.D) [default: Auto]
       - You may select the type of text font used in the X and Y
       axis labels of all graphics.  The sizes available include:
       "0. Auto" or "1 - 10".  "Auto" selects the font size to fit
       the title length to the screen width and height.  "1" -
       "10" determines the relative size of the font from small
       ("1") to large ("10").

8.H H. Titles/Stats/etc
  This allows you to set parameters which affect all types of
  charts and diagrams.  These include:

     A. Titles ON/OFF (I.H.A) [default: ON]
       - Use this option to toggle ON/OFF the display of the Title
       and subtitle for all charts and diagrams.

     B. Enhanced Print ON/OFF (I.H.B) [default: OFF]
       - Use this option to toggle ON/OFF the display of detailed
       information for all charts and diagrams.  This information
       includes such things as file name, file date, chart type,
       print date, etc.

     C. Summary Stats ON/OFF (I.H.C) [default: OFF]
       - Use this option to toggle ON/OFF the display of a summary
       statistics box on the graphic of all charts and diagrams.

          *** This option must be ON to view any of the specialized
          statistics such as regression and capability stats.

     D. Sound ON/OFF (I.H.D) [default: ON]
       - Use this option to toggle ON/OFF the sound in SPC EXpert.

8.I I. Options Files
  Allows you to save and recall your options settings.  Current
  and past settings for options may be saved and recalled for
  future use using this menu.  In particular, you can use this
  menu to save the current options settings to a named (provided
  by you) file (I.I.B) which can be later specifically referenced
  in a data file ( *<file-name> on first line ).  These include:

     A. Save Options for Start-ups (I.I.A)
       - This feature saves the current option settings to a
       default "options file" which is loaded every time you start
       the program.  The default options file contains the option
       default settings until you change it using this option
       (I.I.A).

     B. Save Options to File (I.I.B)
       - Current option settings may also be saved to an "options
       file" named by you.  This file can be used with Multiple
       Chart files to display the output using the specified
       options file.  If the special "options file" is to be used
       for all charts/graphs in the Multiple Chart, the filename
       would appear in the first line with an asterisk next to it. 
       For example, if the special "options file" is called
       "notitles.cfg", a Multiple Chart file may look like this:

               *notitles.cfg
               Title
               Subtitle
               bar.dmo TABLE
               bar.dmo BAR
               bar.dmo PARETO
               bar.dmo PIE

       If the special "options file" is to be used for a specific
       chart or graph the file name is entered after the chart
       type.  The Multiple Chart data file may look like this:

               Title
               Subtitle
               bar.dmo TABLE
               bar.dmo BAR
               bar.dmo PARETO notitles.cfg
               bar.dmo PIE

     C. Load Start-up Options (I.I.C)
       - Use this to load the Start-up options file.  This is the
       file updated using selection (I.I.A).

     D. Load Options from File (I.I.D)
       - Current options settings may also be saved to an
       "Options" file that you name/create (I.I.B).  Use this
       option to load a user-defined options file.

     E. Reset Options to Defaults (I.I.E)
       - You may also easily reset all the options to the original
       SPCEX software default settings using this selection.  This
       is particularly useful if you have changed a lot of options
       and want to start over with the default settings.

          ***  This does not affect the options settings in the
          Start-up options file that are loaded when the program is
          re-started.  You must save the default settings (I.I.A)
          after resetting the options to their defaul to change the
          start-up settings.

8.J J. Display Current Options (I.J)
  Use this to display the current options settings.  The following
  scrollable hypertext screen will appear.  Selected the
  highlighted options values to learn more about each option.

               SPC EXpert  -  Current Options Settings (I.J)              
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓╔════════════════════════════════════════════════════════╗▓▓▓▓▓▓
╔═════════║ <<<<<<<<    CURRENT OPTIONS SETTINGS    >>>>>>>>       ║═══╗▓▓
║┌────────║                                                        ║─┐ ║ ▓
║│        ║ Control Chart Options Settings >                       ║ │ ║ ▓
║│ -------║     Display Range Type :  ALL                          ║ │ ║ ▓
║│ Raw Dat║     Limits Range Type :  ALL                           ║ │ ║ ▓
║│        ║     Stats Range Type :  ALL                            ║ │ ║ ▓
║│ Chart T║     Center Line Type : Mean (Average)                  ║ │ ║ ▓
║│        ║     Control Limits Type : TABLE Look-up                ║ │ ║ ▓
║│        ║     Distribution Function to Display : NONE            ║ │ ║ ▓
║│ Valid C║     X Axis Labeling : NONE                             ║ │ ║ ▓
║│        ║     Y Axis Labeling : UCL & LCL Only                   ║ │ ║ ▓
║│        ║     Limits/Zones Displayed : UCL & LCL                 ║ │ ║ ▓
║│ Analysi║     Show Process Specifications : OFF                  ║ │ ║ ▓
║│ # Patte║     Show Regression Line : OFF                         ║ │ ║ ▓
║└────────║     Eliminate (User Defined) Outliers : OFF            ║─┘ ║ ▓
╚═════════║     MINIMUM Pattern Lengths for Analysis :             ║═══╝ ▓
▓         ║                 run : 7                                ║     ▓
▓▓▓▓▓▓▓▓▓▓║           inc_trend : 7                                ║▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓╚═Home  End════════════════════Scroll:        PgUp PgDn══╝▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
■ Prev (Esc)   ■ Save To File (F3)  ■ Exit (F2)   ■ Help (F1)    Level : 1


8.R Return to Main Menu (I.R)
  Use this option to return to the SPEX MAIN MENU.  You may also
  press the <ESC> or <F2> key or right mouse button to return.


9. COMMON PROBLEMS / QUESTIONS

P1. Main Menu options C,D,E,F and Printer Options A,B,F,G,H are
blacked out and I cannot select them.

  This means that a valid data-file/chart-type combination has not
  been selected using Main Menu Options A and B.  That is, their
  is nothing to view or print.

P2.  Main Menu Options D,E,F are blacked out (C is available)

  This means that the chart-type that you have selected using Main
  Menu Option B is not a control chart.  Main Menu Options D,E,F
  are for control charts only.

P3. My mouse does not work.

  If you have a mouse, this means that either the mouse is not
  connected or the mouse driver has not been loaded into memory. 
  First, make sure that your mouse is connected.  To load your
  mouse driver, you need to execute once (from DOS) the
  "mouse.com" program which came with the mouse before starting
  SPC EXpert.

  NOTE: MicroSoft Windows uses its own mouse drivers and does not
  require the "mouse.com" program to be executed.  If your mouse
  works in windows but not in SPC EXpert, you will need to execute
  the "mouse.com" program once before starting SPC EXpert.  This
  can easily be done from a batch file as illustrated below:

     cd c:\mouse1
     mouse.com
     cd c:\spcex
     spcex -a


P4.  I get the error message "malloc error ..."

  This message means that your computer does not have enough core
  memory available to execute SPC EXpert.  SPC EXpert requires
  375K of free core memory to execute.  You can check the amount
  of free core memory available by looking at the last line
  produced when you execute the "chkdsk" command from DOS.

P4. I get the SPC EXpert menus but my monitor does not display the
charts and diagrams.

  This problem is common in computers which have dual VGA/EGA
  graphics cards.  When this occurs, you will see erratic lines
  across the screen instead of the intended chart or diagram.

  To fix this problem, you need to manually set the video mode
  using option (H.J.*) -- From SPCEX MAIN MENU select "H.
  Print/Export Menu" and then PRINT/EXPORT MENU option "J.
  Manually Set Video Mode".  At this point you will be given a
  choice of video modes such as "CGA LOW", "EGA HIGH", etc. 
  Select the video mode appropriate for your monitor.

  The video mode is saved along with the printer settings. 
  Therefore, to save the video mode that you have selected for the
  next time you start SPC EXpert, use option (H.H) - PRINT/EXPORT
  MENU option "H. Save Printer Settings".

  NOTE: Except in a few rare cases as above, SPC EXpert will
  automatically detect what kind of monitor your system is using. 
  The autodetect mode is highly recommended and is the default
  setting for SPC EXpert's video mode.

Q1.  How do I print the User's Manual?

  You cannot print the User's Manual directly from SPC EXpert. 
  You can, however, save it to an ASCII (DOS TEXT) file while you
  view it from the ONLINE DOCUMENTATION Menu (G.L).  This ASCII
  file can then be imported into any commercial text editor and
  printed.

Q2.  Are there any MicroSoft Windows Icons for SPC EXpert?

  Two somewhat generic icons have been included on the SPC EXpert
  system disk in the files "chart1.ico" and "chart2.ico".

Q3.  How do I mark User-Defined "Outliers"?

  In all control charts, histograms, polygons, CDF's, and scatter
  diagrams, data points may be marked within the data file as
  "User-Defined Outliers".  When the "Eliminate Outliers' option
  is turned "ON" for a particular chart - (I.A.X for control
  charts, I.B.X for HISTOGRAMS, POLYGONS, and CDFs, and (I.D.X)
  for SCATTER diagrams - those points marked as "Outliers" will
  not be used to calculate control limits, averages, process
  capability indices, regression statistics, etc.

  A data point or entry can be marked as an "Outlier" by placing
  the character "#" in the first column of the row containing the
  data point(s).  An example for (Q3, Q4, & Q5) is given below.

Q4.  How do I mark User-Defined "Highlights"?

  In all control charts, scatter diagrams, and pie charts data
  point(s) may be marked by the user within the data file as
  "User-Defined Highlights".  Those points marked as "Highlights"
  will appear differently from those not.  A "highlighted" pie
  chart entry will appear set out.  "Highlighted" control chart
  and scatter diagram entries will appear in a different shape and
  color.

  A data point or entry can be marked as a "Highlight" by placing
  the character "!" in the first column of the row containing the
  data point(s).  An example for (Q3, Q4, & Q5) is given below.
 
Q5  How do I include User-Defined "Comments"?

  In all control charts, histograms, polygons, CDF's, and scatter
  diagrams, data points may be marked with an optional user
  comment or string of characters.  These comments can only be
  displayed on control charts.  When the "X Axis Labeling
  Convention" Option (I.A.X) is set to "User Defined Strings"
  (I.A.G.B) for control charts, any non-empty comments will be
  displayed vertically along the X Axis.

  A data point or entry can be marked with a comment by placing
  the comment at the end of the same row containing the data
  point(s).  An example for (Q3, Q4, & Q5) is given below (E1).


E1.  Example for Q3, Q4, & Q5 - User Defined "Outliers",
"Highlights", and "Comments".

  Data entries can be marked as both "Highlights" and "Outliers"
  by placing the symbols "!" and "#" in the first two columns
  (either "!#" or "#!") of the row containing the data entry.

  The sample data file from Paragraph 6.5, will be edited and used
  to demonstrated the effect of the use of User Defined Options. 
  First, the 1st entry will be commented as "Day One'.  Next, the
  5th data entry "41" will be designated as an "Outlier" and the
  comment "Measurement Error" will be added.  Data entries 6 and
  10 are designated as "Outliers" and "Highlighted" - note that
  when an entry is both highlighted and marked as an outlier the
  order (!# or #!) of marking does not matter.  The last data
  entry is commented as Day Twelve.  The data file would be
  changed as shown below:

     PN Control Chart
     Lot Size = 200
     Production Order Number
     Number of Rejects
     200
     !23 Day One
     15
     17
     15
     #41 Measurement Error
     !#0
     25
     31
     29
     #!0
     8
     16 Day Twelve

Q6.  How do I display Process Specifications and Capability
Statistics?

  The process specifications are the upper and lower specification
  limits.  These can be set from seletion (I.E.A and I.E.B).  To
  graphically display the process specifications,  the "Process
  Specs" toggle must be in the "ON" position.  This is toggled ON
  and OFF with selection (I.A.J) for control charts, (I.B.A) for
  HISTOGRAMS, and (I.D.A and I.D.B) for SCATTER DIAGRAMS.
 
  Process capability statistics (Cp, Cpl, Cpu, and Cpk) are
  displayed in the statistics box when summary stats is turned
  "ON" using selection (I.H.C)  AND the process specs toggle is ON
  for the appropriate type of chart as described above.

Q7.  How do I display a regression line and statistics?

  Standard regression statistics (regression coefficients, R2, t
  value and F value) are displayed in the statistics box when the
  summary stats are turned "ON" using selection (I.H.C) and the
  regressions options is turned on - (I.A.K) for control charts
  and (I.D.H) for SCATTER diagrams.

10. ERROR MESSAGES FOR INVALID DATA FILES

When your data file is not in the proper format as outlined above
in Section 6, an error message will be displayed in the MAIN MENU
STATUS BOX.  These error message and their meanings are outlined
below:

Valid
  Your data file is valid for the selected chart type.

No File & Type

  No data file or chart type has been selected.  Use MAIN MENU
  option A and B respectively.

No File
  No data file has benn selected.  Use MAIN MENU option A.

No Type
  No chart type has been selected.  Use MAIN MENU option B.

All numerics expected
  This error only occurs when you are attempting to import USAF
  SPC Version 1.1 format raw data files.  The format expected by
  SPC EXpert is selected through option (I.F).  It is recommended
  that you use SPC EXpert format data files.

Integer Sample Size Required
  Sample or logical group sizes are required to be specified for
  R, S, XBAR, XBAR_R, XBAR_S, P, and PN control charts.  These
  sample sizes must be INTEGERS.  This error is usually caused
  (not including P Charts) by the ommission of the sample size on
  the fifth line of the data file.

Sample Size Too Large
  The INTEGER sample size on the fifth line of an R, S, XBAR,
  XBAR_R, or XBAR_S data file exceeds 200.

3 or more Points Required
  To display a control chart, there must be 3 or more points to
  PLOT.  NOTE: For R, S, XBAR, XBAR_R, and XBAR_S, you may have
  more that 3 data values and still get this error message - the
  number of points in this case to PLOT is the number of values
  divided by the sample size (line 5).

Unexpected End of File
  This means that you do not have a complete data file.  This
  message will occur when you have less than 4 lines in the data
  file. 

Numeric Value Expected
  Non-numeric characters were found in the data file where numbers
  were expected.  This can occur for several reasons: (1) the
  sample size in an R, S, XBAR, XBAR_R, or XBAR_S is set larger
  than the number of measurements per sample or a measurement has
  been ommitted from a sample.  (2) the frequency (value) has been
  ommited from a BAR, PIE, PARETO, or TABLE entry.  (3)  the '#'
  or '!' symbol has not been placed before the FIRST data point of
  a sample in a R, S, XBAR, XBAR_R, or XBAR_S chart.

Too Few Entries
  The number of entries in a BAR, PIE, PARETO, or TABLE must be
  more than 1.

Too Many Entries
  The number of entries in a BAR, PIE, PARETO, or TABLE must not
  exceed 100.

Invalid Version Selected
  This error message should NEVER occur.  If it does occur, reset
  your options values using option (I.I.E).

Illegal Chart Type Selected
  This error message should NEVER occur.  If it does occur, reset
  your options values using option (I.I.E).

Cannot Open File
  This means that while the data file specified exist, SPC EXpert
  cannot open the file to read.  This should NEVER occur.  If it
  does, exit SPC EXpert and restart.

Positive Sample Size Required
  Sample or logical group sizes are rerquired to be specified for
  R, S, XBAR, XBAR_R, XBAR_S, P, and PN control charts.  These
  sample sizes must be integers greater than ZERO.

Integer # rejects/flaws required
  P, PN, C, and U charts require you to specify a COUNT of the
  number of rejects or flaws.  This must be an INTEGER.

# rejects/flaws must be >= 0
  P, PN, C, and U charts require you to specify a COUNT of the
  number of rejects or flaws.  This COUNT must be non-negative.

# rejects exceeds sample size
  P and PN charts charts require you to specify the number of
  rejects out of a given sample size.  This number cannot exceed
  the sample size.

# Charts in MULTIPLE Exceeds 6
  A MULTIPLE chart can display between 1 and 6 graphs inclusive.

File Specified Does Not Exist
  A file specifed in a MULTIPLE graph does not exist.

Invalid File/Type Pair
  A file specified in a MULTIPLE data file is not a valid chart.

Non SPC EXpert Options File Specified
  This means that an "options file" specified in a data file is
  not a valid SPC EXpert "options file" as saved with option
  (I.I.B).

Negative BAR/PIE... Entry
  All entries in a BAR, PIE, PARETO, or TABLE must be non-
  negative.

All Entries = 0
  At least one entry in a BAR, PIE, PARETO, or TABLE must be
  greater than zero.

Sample Size < 2
  The sample size for R, S, XBAR, XBAR_R, and XBAR_S control
  charts must be between 2 and 200 inclusive.

Sample Size not on Line 5 
  The sample size for R, S, XBAR, XBAR_R, and XBAR_S control
  charts must be on line 5 of the data file.


11. SPC EXpert Abbreviations

C - Average count per subgroup

CDF - Cumulative Distribution Function

Cp - Capability index

Cpl - Capability index with respect to the LSL

Cpk - Capability index (minimum of Cpl and Cpu)

Cpu - Capability index with respect to the USL

LCL - Lower Control Limit

LSL - Lower Specifications Limit

Max - Maximum

Min - Minimum

MR - Moving Range

P - Fraction Defective

PN - Percent Defective

R - Range

Rel Var - Relative Variation 

S - Standard Deviation

SPC - Statistical Process Control

Stats - Statistics

T - Time

U - Average rate of defects per unit

UCL - Upper Control Limit

USL - Upper Specification Limit process within specs.

XBAR - XBAR is the mean (average) of X

XMR - Individual Moving Range

12. SPC EXpert Definitions

Beta - The shape parameter in the Weibull distribution.

C Chart - C is the average count per subgroup.  The C control chart
displays the number of defects which appear in samples of fixed
size.  C charts are based on a Poisson distribution.

Capability Statistics - Indices that define the degree to which the
process is or is not meeting the specifications.  These include
Cpl, Cpu, Cpk, and Cp.

CDF - Cumulative Distribution Function.  The cumulative
distribution function for a random variable X defined for any real
x by the probability X<x. An Ogive is the graph of a cumulative
distribution function.

Center/Center Line - A horizontal graphical line designating the
mean or median of the process measurements.

Control Chart - A tool for detecting uncontrolled variation.  There
are based on the laws of probability and statistics and are
effective at detecting the presence of uncontrolled variation in
any process.  The SPC software control charts are:  X (Run),
XBAR-R, X Moving Range, XBAR-S, PN, P, C, U, XBAR, R, S and Moving
Range.

Correlation - The degree to which one variable is related to
another.  This statistic can either be negative or positive
depending on the slope of the line.

Cp - A process capability index which is a ratio of the
specification range (USL-LSL) to the standard deviation of the
process.

Cpk - This statistic is the minimum of the Cpl and Cpu statistics. 
It indicates whether to not the process being analyzed is capable
of producing little or no defects.  The higher the number, the less
likely it will be that defectives are produced. 

Cpl - This statistic relates the difference between the center line
and the LSL to the standard deviation.

Cpu - This statistic relates the difference between the USL and the
center line to the standard deviation.

Data Bin - This is a group or class of data points.  Each bar on a
histogram represents a data bin.

Distribution Graph - A representation of the data where  points are
plotted according to the value and frequency of occurrence.  In the
SPC software, distribution graphs include histograms, frequency
polygons and CDFs (Ogives).

F Value - A ratio of the regression mean square to the error mean
square.  It is used to make inferences as to whether or not a
relationship exists between x and y based on the analysis of
variance approach.

Frequency Polygon - A line graph connecting the midpoints of each
class in a data set plotted at a height corresponding to the
frequency of the curve.

Gamma - The location parameter in the Weibull distribution.

Graduated Scale - A y-axis labeling convention where the y-axis is
labelled in incremental units.  The scale of these intervals will
be determined by the computer based on the number of data points.

Individual Moving Range (XMR) Chart - A chart produced by
continuously plotting the range between current and previous
individual measurements.

Lower Specifications Limit (LSL) - A user-defined quantity which
identifies the lowest acceptable value of a product attribute.

Lower Control Limit (LCL) - A statistically determined value which
appears as a horizontal dashed line below the process average. 
Generally considered to be three times the standard deviation of
the process measurements.

Limits - Boundaries which indicate the acceptable ranges for a
product attribute.  These limits are either provided by the user or
calculated based on the process measurements in the data file.

Maximum (Max) - The greatest quantity or value measured.

Mean - The arithmetic average of a set of numbers.

Median - The dividing point where exactly half of the data values
are above and half are below.

Minimum (Min) - The least quantity or value measured.

Moving Range (MR) Chart - A chart produced by continuously plotting
the range between the current and previous sample means.

Mu - A parameter which refers to the mean of a distribution. 

Nominal - The user-defined target value of a process.
 
Ogive - An Ogive is the graph of a cumulative  distribution
function (CDF).

Outlier - A data point which lies outside the relevant range.  This
can be an indication of a severe disturbance in the process or a
data entry problem.  Marking an item as an outlier can serves as a
flag to the user that something is potentially wrong.

Patterns - Traits or other observable features characterizing a
data set. These include runs, freak points, freak patterns,
stratification, trends, shifts, and cycles.

P Chart - P is the fraction of defectives in each group.  The P
Chart is based on a running record of the proportion of defective
product in a subgroup.  It shows the characteristics of both the
mean (average) and dispersion (spread) of the process.

PN Chart - PN Charts show the number of defectives in identical
groups.  They are used whenever the data is binomially distributed
and the sample size is constant.  PN Charts show the
characteristics of both the mean (average) and dispersion (spread)
of the process.

Pop sigma(n-1) - The standard deviation of all the individual
measurements.

Population - A collection of all the items under study.

Process Specifications - Values used to identify the acceptable
ranges for product attributes.  These include LSL, USL, and
nominal.

r2 - Sample coefficient of determination.  It can be interpreted as
the proportionate reduction of the total variation associated with
the independent variable.

Range - The difference between the largest and smallest of a data
set.

R Chart - R is the range of the data in each sample.  The R Chart
shows changes in the dispersion (spread) of the process.

Regression Statistics - The statistics which are associated with
regression analysis.  Regression analysis is the general process of
predicting one variable from another.  The regression statistics
include the regression line, the coefficient of determination (r2),
F-value and t-value.

Regression Formula - Often referred to as the regression line or
fitted line.  The formula describing the "best" line that minimizes
the distance between that line and the  process data points.

Relative Variation - A ratio of the sample's unbiased standard
deviation to its mean.  Often used as a comparison between
processes which have the same mean.

Sample - A representative collection of some, but not all, of the
items of the population.  Samples are used in describing the
population.

S Chart - S is the sample standard deviation.  The S Chart shows
changes in the dispersion (spread) of the measurements.

sigma(n) - The biased standard deviation estimator.  Bias implies
n degrees of freedom.  Generally, sigma(n) is used unless the
sample size is small in relation to the population as a whole.

sigma(n-1) - The unbiased standard deviation estimator.  The
estimator has n-1 degrees of freedom.  Sigma(n-1) is used when the
sample size is small in relation to the population as a whole.

Skewness - This statistic measures the asymmetry of a process. 
This occurs when values in the frequency distribution are
concentrated at either the low end or high end of the measurement
scale on the horizontal axis.

Statistical Process Control (SPC) - The use of statistical
techniques to analyze a process or its output so as to take
appropriate actions to achieve and maintain a state of statistical
control and to improve the capability of the process.

Statistics - A branch of mathematics dealing with the collection,
analysis, interpretation, and presentation of masses of numerical
data.

Summary Statistics - The basic statistics associated with the
process.  These include the mean, median, max, min, sigma, etc.

t Value - A ratio of the slope of the fitted regression line to its
standard deviation.  Generally used as a test statistic to
determine whether or not the true slope of the process equals some
specified non zero value.

Table Lookup - In SPC this term refers to the standard textbook
generated table constants reference.

U Chart - U is the average rate of defects per unit.  The U Chart
displays a rate of defects when sample size is not constant.  The
chart may or may not be based on a Poisson distribution.
 
Upper Control Limit (UCL) - A statistically determined measurement
which appears as a horizontal dashed line above the process
average.  Generally considered to be three times the standard
deviation of the process measurements.

Upper Specifications Limit (USL) -  A user-defined quantity which
identifies the highest acceptable value of a product attribute.

XBAR Chart - XBAR is the sample mean.  The XBAR Chart shows changes
in the mean value of the process. 

XBAR-R Chart - The XBAR-R control chart shows both the mean value
(XBAR) Chart and the range (R) Chart.

XBAR-S Chart - The XBAR-S control chart shows both the mean value
(XBAR) Chart and the standard deviation (S) Chart.  They should be
used when the logical group size is larger than ten.

Zones - Areas between the 1-, 2- and 3-sigma lines above and below
the center line.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3895

     Volume in drive A has no label
     Directory of A:\

    SPCEX_2  ZIP    203338   3-14-93  10:46a
    INSTALL  EXE     76446   3-12-93   6:34a
    README   TXT     12928   3-06-93   8:10a
    INVOICE  DOC      2048   3-14-93   6:36a
            4 file(s)     294760 bytes
                           26624 bytes free
