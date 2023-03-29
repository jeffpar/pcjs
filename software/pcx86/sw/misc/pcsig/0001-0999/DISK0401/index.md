---
layout: page
title: "PC-SIG Library Disk #401"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0401/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0401"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

## Information about "THE ADDRESS BOOK"

    The Address Book is a user-friendly personal or business address book
    program written in BASIC.  With it, you can create your own address
    book file which can be edited, printed, searched, and sorted.  Mailing
    labels can be routinely prepared.  Birthdays and other user-defined
    notes may be kept.  WordStar and WordPerfect mailmerge files also can
    be created.  Sub-directories of the main directory can be routinely
    created.  Function keys are used extensively and a RAM-disk may be used
    for more speed.
    
    NOTE: This program is set up to run on PC-DOS; clear directions to move
    to MS-DOS are enclosed. It has been updated recently to assure it will
    run on compatibles as well as IBM systems.
    
    System Requirements:  64K, one disk drive and monochrome display
    
    How to Start: Read the README.DOC and MANUAL.DOC files before
    starting. To run the BASIC programs follow the GETTING STARTED
    instructions for your configuration.
    
    Suggested Registration:  $25.00
    
    File Descriptions:
    
    AD       BAS  Abreviated ADSTART.BAS without starting graphics
    AD       HLP  Text file used by program to provide online help
    AD       BAT  Batch file for starting ADSTART.BAS
    ADFILES  BAS  Creates all necessary data files
    ADEDIT   BAS  Program to edit entries
    ADDIR    BAS  ?? << doesn't load properly >>
    ADDELETE BAS  Program to delete entries
    ADTRANS  BAS  Program to transfer records
    ADSTART  BAS  Set-up and start program - chains to ADMAIN.BAS
    ADSORT   BAS  Program to sort base by criteria
    ADSEARCH BAS  Program to search by criteria
    ADRODX   BAS  Program to print Rolodex-type labels
    ADREAD   BAS  Program to scan entries
    ADPRTC   BAS  Supplemental printing program
    ADPRTA   BAS  Supplemental printing program
    ADPRT    BAS  Master printing program
    ADPRINT  BAS  Program to set printer parameters
    ADNOTE   BAS  Program to create notes to records
    ADNAME   BAS  Determines name of sub-program to run
    ADMAIN   BAS  Main address book program
    ADMAIL   HLP  Help file used by ADMAIL.BAS
    ADMAIL   BAS  Prints address labels
    ADLIST   BAS  Prints address book
    ADWP     BAS  Converts data files for WordPerfect mail-merge
    MANUAL   DOC  Text file containing instructions and user manual
    AUTOEXEC BAT  Auto-start batch file to run ADSTART.BAS
    ADZIP    BAS  Prints labels by zip code
    ADWS     BAS  Converts data files for WordStar mail-merge
    TEMPOR   TEM  Temporary data file (used internally)
    SAMPLES  NTE  Data file - note codes
    SAMPLES  ISS  Sample configuration file
    SAMPLES  DAT  Sample data file

### Directory of PC-SIG Library Disk 0401

     Volume in drive A has no label
     Directory of A:\

    AD       BAS       494   7-02-83  12:49a
    AD       BAT        29   7-09-83  12:47p
    AD       HLP      1920   5-21-83  11:32p
    ADDELETE BAS     11538   2-13-84   1:55a
    ADDIR    BAS       167   1-22-84   1:57a
    ADEDIT   BAS     15978   4-19-84  11:38a
    ADFILES  BAS      2356   1-23-84   3:51a
    ADLIST   BAS      4805   1-01-80  12:44a
    ADMAIL   BAS     13779   6-17-84   7:16a
    ADMAIL   HLP      1920   5-21-83  11:22p
    ADMAIN   BAS     13846   1-01-80  12:11a
    ADNAME   BAS      1362  10-30-83   9:47p
    ADNOTE   BAS      3493   1-01-80   4:53a
    ADPRINT  BAS      4584   1-01-80  12:09a
    ADPRT    BAS      9084   6-12-84   9:42p
    ADPRTA   BAS      5675   1-01-80  12:24a
    ADPRTC   BAS      6392   1-01-80  12:20a
    ADREAD   BAS      5781   1-01-80  12:30a
    ADRODX   BAS     12360   7-02-84   5:09p
    ADSEARCH BAS     10846   1-01-80   1:07a
    ADSORT   BAS     11166   4-26-84   2:14a
    ADSTART  BAS      4625   1-01-80  12:02a
    ADTRANS  BAS     15584   1-19-84   5:02p
    ADWP     BAS      9572  10-30-83   2:33a
    ADWS     BAS      9344  10-30-83   2:33a
    ADZIP    BAS      6265   1-01-80  12:39a
    AUTOEXEC BAT        38   9-01-83  12:22p
    FILES401 TXT      2329   1-29-87   4:08p
    MANUAL   DOC     39552   8-05-84   5:01p
    SAMPLES  DAT      9256   9-01-83   1:31a
    SAMPLES  ISS       215   7-07-84   9:00p
    SAMPLES  NTE        77   1-01-80  12:07a
    TEMPOR   TEM        11   7-06-85   1:13p
           33 file(s)     234443 bytes
                           67584 bytes free
