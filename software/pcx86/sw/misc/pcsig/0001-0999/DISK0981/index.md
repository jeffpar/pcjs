---
layout: page
title: "PC-SIG Diskette Library (Disk #981)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0981/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0981"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MASTERFILE DISK MANAGEMENT SYSTEM"

    Stop searching through your floppies or hard disk trying to locate
    specific files.
    
    MASTERFILE can describe the contents of a file without having to use
    the application that created the file, determine what each file is, and
    give a unique description of each file or group of files -- up to 75
    characters long.
    
    Search for your files by name or description. Print a hard copy of
    your disk library with these descriptions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES981.TXT

{% raw %}
```
Disk No  981
Program Title: MASTERFILE version 1.2
PC-SIG version 1.2
 
MASTERFILE is a disk file-cataloging program that lets you locate files
on your floppies or hard disk by name or description without having to
search every floppy or subdirectory.
 
With MASTERFILE you can view a catalogue that describes the contents of
a file without having to use the program (word processor, spreadsheet)
that created the file.  The program lets you give any file a unique
description, or you can select a group of files and give these files a
common description.
 
MASTERFILE lets you add a seventy-five-character description to your
disk files (including hidden and system files), no matter what program
created them.  It can also print the catalog of the disks, giving you a
hardcopy of your catalog.
 
Limitations of this shareware version:
 
Shareware version begins with a request to register, delaying immediate
use of program by 5 seconds. Two other features are not enabled: one to
delete files from a directory, and one to remove a directory entirely.
These two features are of minor interest and are not a fundamental part of
the program. They are there for convenience more than anything else.
 
Usage:  Disk Management System.
 
System Requirements:  256K memory and two disk drives.
 
How to Start:  Type MASTER (press enter).
 
Suggested Registration:  $20.00
 
File Descriptions:
 
MASTER   EXE  Main program of MASTERFILE.
MASTERPU EXE  Pop-up (terminate and stay resident) portion of MASTERFILE.
READ     ME   List of improvements from earlier versions.
MASTER   DOC  Documentation (ASCII format).
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0981

     Volume in drive A has no label
     Directory of A:\

    FILES981 TXT      1759   9-16-88   3:20p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694  12-16-87   2:07p
    MASTER   DOC     44544   7-17-88   6:22p
    MASTER   EXE     78720   8-28-88   6:53p
    MASTERPU EXE     41040   8-28-88   6:47p
    READ     ME       1536   9-07-88  10:38a
            7 file(s)     168331 bytes
                          150528 bytes free
