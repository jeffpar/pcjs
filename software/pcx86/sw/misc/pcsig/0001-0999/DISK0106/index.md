---
layout: page
title: "PC-SIG Diskette Library (Disk #106)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0106/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0106"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "DISKCAT"

    DISKCAT keeps track of all your disk files. The program reads eight- or
    nine-sectored, single- or double-sided disks. It will not read fixed
    disks or high-capacity drives, or other non-standard disks.
    
    Features:
    ~ Read a disk's directory
    ~ Form a table-of-contents for a disk
    ~ Print a file listing for each disk
    ~ Display the names of all disks in the catalog
    ~ Display the number of sectors and free space left on each disk
    ~ Compare two catalog files and print a comparative list
    ~ Create data files in a format that can be read by Lotus 1-2-3
    ~ Search the catalog for a specific file
    
    System Requirements: RAM disk-emulator or hard disk to hold the
    data, a printer, and a graphics board are all recommended.
    
    How to Start: To start, run DC4-READ and edit the program parameters.
    Change DC4-SAMP to whatever you like and respond Y when asked "Make
    the changes permanent?"  Press the Esc key, as directed, and the file
    will be created.  To read the documentation, enter TYPE DC4-DOC.
    
    Suggested Registration:  $50.00 for source code
    
    File Descriptions:
    
    DC4-CAT  EXE  Program to add descriptions to DISKCAT data files
    DC4-DOC  EXE  Prints DISKCAT documentation
    DC4      DOC  Documentation file for DISKCAT  (41K)
    DC4-PGM  DTA  DISKCAT program data file
    DC4-FIND EXE  Finds a file in DISKCAT catalog
    INVOICE  DC4  Invoice for your records or to bill your company
    CNVRTDC  COM  Conversion program
    DC4-SORT EXE  Program to sort & print DISKCAT catalog
    DC4-SAMP DTA  Sample data file for DISKCAT
    DC4-SAMP DT2  Sample data file for DISKCAT
    DC4-READ EXE  Program to read & catalog disk files
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0106

     Volume in drive A has no label
     Directory of A:\

    DC4-DOC  EXE     23936   1-06-85  11:20p
    DC4      DOC     41379   2-26-85  10:28p
    DC4-READ EXE     65664   2-10-85   8:53p
    DC4-SORT EXE     48384   1-17-85   9:15p
    DC4-CAT  EXE     56704   1-31-85   9:17p
    DC4-FIND EXE     19712   1-06-85  11:20p
    DC4-PGM  DTA       640   1-06-85  11:20p
    DC4-SAMP DTA       896   1-31-85   7:57p
    DC4-SAMP DT2       128   1-31-85   7:55p
    CNVRTDC  COM     12800   1-06-85  11:21p
    INVOICE  DC4      1976   2-26-85  10:28p
           11 file(s)     272219 bytes
                           44032 bytes free
