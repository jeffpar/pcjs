---
layout: page
title: "PC-SIG Diskette Library (Disk #1959)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1959/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1959"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EDFIX2/QB4CREF/ACSORT"

    This program will read, edit, write and transfer random-access files up
    to two billion bytes, with individual records up to 2048 bytes.  It
    will work on any file, even if the file is not truly a random-access
    file.  With EDFIX2, you can manipulate dBase data files--except that
    EDFIX2 records will probably not match up with dBase records.  You may
    also use EDFIX2 on spreadsheet files and files created by various other
    software packages.
    
    This is a cross-reference program for Quickbasic programs.  It's very
    easy to run.  If you don't remember how to use it, just type in QB4CREF
    at the DOS command line and the program itself will tell you what to
    do.  The program can handle up to 1,000 variables, 1,000 labels, 1,000
    subprograms, and 1,000 functions (up to 4,000 items total).
    
    This program will sort data files with fixed-length records and fields.
    The output file will be a list of record numbers (an index to the data
    file in sorted order).  The index itself can be read as either a
    sequential file or a random file with a record length of 12.  The data
    file being sorted may be of any reasonable size.
    
    You may sort data of any type commonly used in any Microsoft language.
    Other sort programs may have difficulties with Microsoft random files.
    ACSORT will not, because it will not sort sequential data files; it is
    only intended for use with true random files.  Because of this, it will
    not sort dBase data files.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1959

     Volume in drive A has no label
     Directory of A:\

    ACSORT   DOC     19333   7-23-89   3:32p
    ACSORT   EXE     96021   5-21-89   8:48p
    EDFIX2   DOC     13049   7-23-89   2:26p
    EDFIX2   EXE     50877   7-23-89   2:07p
    FILE1959 TXT      3413   1-25-90   6:34p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1156   1-01-80   6:43a
    QB4CREF  DOC      9761   7-23-89   3:26p
    QB4CREF  EXE     52917   5-27-89   9:03p
            9 file(s)     246565 bytes
                           71680 bytes free
