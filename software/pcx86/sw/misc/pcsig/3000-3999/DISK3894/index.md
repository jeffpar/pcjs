---
layout: page
title: "PC-SIG Diskette Library (Disk #3894)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3894/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3894"
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

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3894

     Volume in drive A has no label
     Directory of A:\

    SPCEX_1  ZIP    258360   3-14-93  10:45a
    INSTALL  EXE     76446   3-12-93   6:34a
    README   TXT     12928   3-06-93   8:10a
    INVOICE  DOC      2048   3-14-93   6:36a
    GO       BAT        34   8-11-93   9:55a
    SHOW     EXE      2040   9-12-88  10:48a
            6 file(s)     351856 bytes
                            8192 bytes free
