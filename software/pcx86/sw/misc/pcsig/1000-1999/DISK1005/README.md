---
layout: page
title: "PC-SIG Diskette Library (Disk #1005)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1005/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1005"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "APPLY"

    Keep track of the applications (for jobs, grants, contests, etc.) you
    have sent out.  APPLY stores the relevant data and merges it with text
    files you create.  It orders dossiers and prints your letters,
    resumes, and envelopes.  APPLY also maintains a record of any past
    experiences you might have had with the person/institution.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1005.TXT

{% raw %}
```
Disk No: 1005
Program Title:  APPLY
PC-SIG version: 1.1

APPLY helps you keep track of the applications (for jobs, grants,
contests, etc.) you have sent out.  APPLY stores the relevant data and
merges it with text files which you create.  It orders dossiers and
prints your letters, resumes, and envelopes.  APPLY also keeps track of
any past experiences you may have had with the person/institution before
you try again.

Usage:  Applicant Database.

Special Requirements:  A printer, SORT.EXE and FIND.EXE from your DOS
diskette.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00

File Descriptions:

APPLY    EXE  Main program.
AUTOEXEC BAT  Batch file to automatically start the program.
MANUAL   APP  Manual for APPLY.
MANUAL   ASC  Manual for PRINTASC.
PARA     APP  Data file.
PARA     ASC  Data file.
PMANUALS BAT  Batch file to print the documentation.
PRINTASC EXE  Program to print the documentation.
APPLY    MM   Data file.
END      MM   Data file.
HEAD     MM   Data file.
WSMODEL  MM   Data file.
PROFESS       Data file.
UNWS     DOC  Documentation for un-Wordstar program.
UNWS     EXE  Un-Wordstar program.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                       <<<<  Disk #1005 APPLY  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, Type:                        ║
║                           PMANUALS (press enter)                        ║
║                                                                         ║
║ To start the program, you must first make a back-up of this disk.       ║
║ Then copy the following files from your DOS disk to your back-up disk.  ║
║ FIND.EXE and SORT.EXE. After you have copied these two files over to    ║
║ your back-up disk, type: APPLY (press enter) to start the program.      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## UNWS.DOC

{% raw %}
```
UNWS converts text files into pure ASCII format.  

To use UNWS, at the MS-DOS prompt, type 

		UNWS <>.  

The program will prompt you to name the input and the output file names.  

The input file must have an extension or the program will abort.  The program 
does not require your output file name to have an extension.

Gene Plantz created UNWS and put it in the public domain.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1005

     Volume in drive A has no label
     Directory of A:\

    APPLY    EXE     96202   5-14-87   1:51p
    APPLY    MM       1536   5-20-87   9:49a
    AUTOEXEC BAT        18   5-19-87  12:11p
    END      MM       1408   5-20-87   9:49a
    FILE1005 TXT      1297   1-26-89   1:33p
    GO       BAT        38   2-03-88   3:38p
    GO       TXT       848   2-03-88   4:01p
    HEAD     MM        768   5-20-87   9:49a
    MANUAL   APP     32256   5-19-87  12:06p
    MANUAL   ASC     17792   5-18-87   2:53p
    PARA     APP       342   5-19-87  12:16p
    PARA     ASC       242   1-12-87  11:31a
    PMANUALS BAT       608   5-19-87  12:11p
    PRINTASC EXE     54646   5-13-87   6:48p
    PROFESS           1408   5-19-87  11:37a
    UNWS     DOC       512   5-28-86   9:29a
    UNWS     EXE      2714   8-31-84  10:09a
    WSMODEL  MM       1152   5-20-87   9:50a
           18 file(s)     213787 bytes
                           98304 bytes free
