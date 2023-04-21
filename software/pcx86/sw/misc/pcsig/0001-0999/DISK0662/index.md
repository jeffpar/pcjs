---
layout: page
title: "PC-SIG Diskette Library (Disk #662)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0662/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0662"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DATA BOSS 1 OF 2 (ALSO 663)"

    This is the first of a two-disk set comprising the DATABOSS Data
    Management System. DATABOSS is a database with flexible report-
    generation and the ability to import and export data to Wordstar, PC-
    File III, DW III and many other programs. It sports user-defined color
    screens, up to eight different disk drives or subdirectories, pre-
    computed (equivalence) fields, wide standard reports, user-defined
    printer characteristics, a full alphabet keyboard enhancer, simple
    mathematical and statistical functions, sorting for up to eight levels,
    and enhanced search capabilities.  This first disk holds the
    documentation for version 3.00.01 of the DATABOSS system -- 70+ pages
    of how-to information with some special tips on maximizing the use of
    your hard disk(s). NOTE: DATABOSS runs in BASIC and needs MS/PC DOS
    3.xx and a hard disk for full functioning.
    
    System Requirements: 128K memory and at least one disk drive.  Two
    drives or a hard drive is recommended.
    
    How to Start: For information on starting the program and printing the
    documentation, type: GO (press enter).
    
    Suggested Registration: $50.00
    
    File Descriptions:
    The First Disk Contains:
    CHANGES  DOC  Note about recent changes to the program.
    BOSS3    DOC  The DATABOSS user's manual.
    README   IMG  The author's introduction to DATABOSS
    FLASH    COM  Video display utility.
    AUTOEXEC BAT  Batch file to print user's manual.
    
    The Second Disk Contains:
    FLOPPY   BAT  To load the system onto a floppy.
    FIXED    BAT  To load DataBoss onto a hard disk.
    ???????? 01   Data Base functional modules (14 files)
    DB       BAS  The DataBoss menu and control program.
    DATABOSS BAT  To load basic and start the program.
    COLOR    BAT  To start the color set up program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHANGES.DOC

{% raw %}
```


                                  DataBoss 3.00.01
                               Changes from Release 1

          1. Import and Export facilities were added to the "Copy this  
             file" function.  Now, a file may be copied into DataBoss from 
             the ASCII, CSV, SDF, or MailMerge formats, or copied out of  
             DataBoss to the same formats.  This change allows files used  
             by PC-FILE* and other application programs to be used by
             DataBoss and returned to their original format, if necessary.
             
          2. New file transfer subroutines have been added allowing faster 
             search and sorting times with less input/output concentration.

          3. A column guide has been added to the on-screen label format to
             better display the format of the label during design.

          4. Documentation now contains information on incorporating  
             DataBoss with DisplayWrite III*, PC-FILE*, , Lotus 1-2-3*, and
             WordStar*.

          5. A bug in the "Search..." function has been fixed.
           
          6. The "Change screen colors" program has been rewritten and
             scaled down slightly in an effort to make this process easier
             to use.

          7. A bug encountered while entering (erroneous) non-numeric tab
             locations in the "Print a report" function has been fixed.

          8. A bug in the "Change file structure" function which inserted
             random text into newly added text items (items with Type = T)
             has been fixed.  When adding new text items, the item is
             initialized (set to blanks).

          *  A registered trademark of another company.





























```
{% endraw %}

## FILES662.TXT

{% raw %}
```
Disk No 662
Program Title: DATABOSS version 3.00.01 (Disk 1 of 2)
PC-SIG version 1.2
 
    This is the first of a two-disk set comprising the DATABOSS Data
Management System. DATABOSS is a database with flexible report-generation
and the ability to import and export data to Wordstar, PC-File III, DW III
and many other programs. It sports user-defined color screens, up to eight
different disk drives or subdirectories, pre-computed (equivalence) fields,
wide standard reports, user-defined printer characteristics, a full
alphabet keyboard enhancer, simple mathematical and statistical functions,
sorting for up to eight levels, and enhanced search capabilities. This
first disk holds the documentation for version 3.00.01 of the DATABOSS
system -- 70+ pages of how-to information with some special tips on
maximizing the use of your hard disk(s). NOTE: DATABOSS runs in BASIC and
needs MS/PC DOS 3.xx and a hard disk for full functioning.
 
Usage: Database Applications
 
System Requirements: 128K memory and at least one disk drive.  Two
drives or a hard drive is recommended.
 
How to Start: For information on starting the program and printing the
documentation, type: GO (press enter).
 
Suggested Registration: $50.00
 
File Descriptions:
 
BOSS3    DOC  The DATABOSS user's manual.
CHANGES  DOC  Note about recent changes to the program.
README   IMG  The author's introduction to DATABOSS
AUTOEXEC BAT  Batch file to print user's manual.
FLASH    COM  Video display utility.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0662

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        70   5-11-87   7:23a
    BOSS3    DOC    153796   9-01-87   1:54p
    CHANGES  DOC      1841   5-12-87  12:48p
    FILES662 TXT      1625   9-30-87  12:47p
    FLASH    COM     13816   4-16-87   3:06p
    GO       BAT        38   7-08-87  12:19a
    GO       TXT       848   9-29-07  12:44p
    README   IMG      3841   5-11-87   7:22a
            8 file(s)     175875 bytes
                          142336 bytes free
