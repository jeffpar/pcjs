---
layout: page
title: "PC-SIG Diskette Library (Disk #610)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0610/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0610"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PACKDISK"

    PACKDISK utilities is a handy collection for file, floppy and hard disk
    management.  Clean up your act!
    
    ~ DELDIR -- Deletes a subdirectory with its files and subdirectories.
    
    ~ LISTFRAG -- Lists all fragmented files in the drive.
    
    ~ NAMEDIR -- Renames a subdirectory.
    
    ~ PACKDISK -- Eliminates file fragmentation in the drive. Eliminates
    unallocated spaces between files. Reintegrates lost clusters (file
    allocation units) into available disk space. Packs the root directory
    and subdirectories. Frees trailing clusters.
    
    ~ TRANSDIR -- Transfers a subdirectory and its files and subdirectories
    into another directory in the same drive.
    
    ~ PARK -- Parks disk head before power off.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES610.TXT

{% raw %}
```
-----------------------------------------------------------------------------
Disk No  610  PACKDISK  Version 1.3                                v1.1 DS2
-----------------------------------------------------------------------------
This disk has a useful array of disk utilities. Packdisk being the most
useful file on the disk, eliminates file fragmentation which will in turn
optimize the space on your disk.
 
DELDIR   COM   Deletes the designated subdirectory with its files
LISTFRAG COM   List all fragmented files
NAMEDIR  COM   Renames subdirectory
PACKDISK COM   Disk optimizer
TRANSDIR COM   Transfers subdirectory and its files to another subdirectory
PARK     COM   Parks hard drive head into safety zone before power down
MANUAL         Documentation READ FIRST
README         Tells you how to use checkbak program
CHECKBAK.COM   Lists files that need to be backed up
FILES610 TXT   This file
GO       BAT   Start up batch file
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0610

     Volume in drive A has no label
     Directory of A:\

    CHECKBAK COM      2617   1-02-86   4:14a
    DELDIR   COM      3058  12-04-86  10:59p
    FILES610 TXT      1067   1-23-87   9:09a
    GO       BAT       860  10-09-86   7:57a
    LISTFRAG COM      2760  12-04-86  11:00p
    MANUAL           21575   2-25-87   1:58p
    NAMEDIR  COM      2873  12-04-86  11:01p
    PACKDISK COM      4736  12-04-86  11:25p
    PARK     COM       372  12-04-86  11:02p
    README             830   1-27-87   1:57a
    TRANSDIR COM      3776  12-04-86  11:02p
           11 file(s)      44524 bytes
                          112640 bytes free
