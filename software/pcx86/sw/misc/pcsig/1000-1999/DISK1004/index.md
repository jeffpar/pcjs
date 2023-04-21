---
layout: page
title: "PC-SIG Diskette Library (Disk #1004)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1004/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1004"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HIRE"

    HIRE is a must for any manager or personnel officer who has a need to
    keep track of applications and resumes.  HIRE lets you monitor all the
    people who apply for specific jobs, grants, or any other positions.
    
    HIRE uses merge files to help you respond professionally in writing to
    everyone.  It writes letters to send to applicants, acknowledging their
    applications, alerting those who have not sent all support documents,
    and rejecting those who don't qualify.  You can personalize the merge
    files, by including the applicant's personal data, such as title, name,
    address, etc.
    
    HIRE can handle from 300-500 applicants, and can help you screen them
    according to your criteria.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1004.TXT

{% raw %}
```
Disk No  1004
Program Title: HIRE version 1.1
PC-SIG version 1
 
    HIRE monitors all who apply to you for a job, grant, position, or any
other kind of request. It uses merge files to help you respond
professionally to everyone. It writes letters to acknowledge applications,
alert those who have not sent all support documents, and reject applicants.
You personalize the merge files, while HIRE combines the letter with the
factual data, such as title, name, address, etc., of the applicant. It can
handle 300-500 applicants, and can help you screen them according to your
criteria.
 
Usage: Management Hiring Tool
 
System Requirements: 128K memory, one disk drive, a printer, and FIND.EXE,
SORT.EXE from your DOS disk.
 
How to Start: Type: PMANUALS (press enter).
 
Suggested Registration:  $10.00
 
File descriptions:
 
MANUAL   ASC  Documentation for PRINTASC
PARA     ASC  Set-up for PRINTASC
PMANUALS BAT  Batch file to print documenation for HIRE
HIRE     EXE  Main program
PRINTASC EXE  Mergeprint program
MANUAL   HIR  Documentation for HIRE
PARA     HIR  Set-up for HIRE
???????  MM   Merge file (8 files)
AUTOEXEC BAT  Batch file for start up
STRPFIND EXE  Strips headers from cloned data files
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1004

     Volume in drive A has no label
     Directory of A:\

    ACKN     MM        768   5-13-87   4:49p
    ALERT    MM       1024   5-13-87   4:49p
    ALERT1   MM       1024   5-13-87   4:50p
    ALERT2   MM       1024   5-13-87   4:50p
    ALERT3   MM       1152   5-13-87   4:50p
    AUTOEXEC BAT        17   5-19-87  12:10p
    FILE1004 TXT      1350   2-05-88  11:00a
    GO       BAT        38   2-03-88   3:38p
    GO       TXT       848   2-03-88   3:42p
    HEAD     MM        768   5-13-87   4:50p
    HIRE     EXE    102058   8-05-87   7:02p
    MANUAL   ASC     17792   5-18-87   2:53p
    MANUAL   HIR     29440   8-05-87   7:14p
    PARA     ASC       209   5-13-87   7:07p
    PARA     HIR       193   5-12-87   1:17p
    PMANUALS BAT       608   5-13-87   8:38p
    PRINTASC EXE     54694   5-26-87  10:19p
    REJECT   MM        896   5-13-87   4:49p
    STRPFIND EXE     32544   6-22-87   6:40a
    WSMODEL  MM       1024   5-13-87   4:51p
           20 file(s)     247471 bytes
                           66560 bytes free
