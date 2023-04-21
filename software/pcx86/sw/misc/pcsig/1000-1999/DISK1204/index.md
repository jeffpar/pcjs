---
layout: page
title: "PC-SIG Diskette Library (Disk #1204)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1204/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1204"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DLITE"

    DLITE brings powerful dBase III application tools to RAM memory,
    providing instant access to 10 powerful utilities. Applications
    "pop-up" at the press of a key while you are in another program.
    
    DLITE has a natural home in the busy office where a majority of the
    computer time is spent running accounting or word-processing programs
    but instant access to database files is needed for telephone queries.
    It's like having a multiuser program without buying the expensive
    hardware and software necessary. An expensive and comprehensive
    mailing list manager comes with the package. Edit, add, select,
    delete/undelete records or paste the data from any dBase III file into
    spreadsheets or text files. Indexes can be altered at will.
    
    DLITE includes three sample databases: the congressional directory, an
    index of PC Magazine articles for the last three years, and a mailing
    list manager.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1204.TXT

{% raw %}
```
Disk No: 1204
Program Title:  DLITE version 1.0
PC-SIG version 1

DLITE brings powerful dBASE III tools to PC resident memory giving users 
instant access to ten powerful utilities including a mail list manager. 
Applications pop up at the press of akey while you are running other 
programs.  Users can edit, add, select, delete or undelete records or 
paste the data from any dBase III file into spreadsheets or text files.  
Indexes can be altered at will.  Output from the databases can be 
customized and data selected through highly defined filters. 

DLITE has a natural home in the busy office where the computer operator
spends a majority of the time running accounting or word processing
programs but must have instant access to database files when answering
telephones queries.  It's like having a multiuser program without
needing to buy the expensive hardware and software that goes with it.
An expensive and comprehensive mail list manager comes with the package
and customizing tools with the registered version.

DLITE includes two sample databases: the congressional directory and a 
index of articles in PC-Magazine for the last three years.

Usage:  dBASE III Utility.

Special Requirements:  dBASE III.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

DLITE10  EXE  Archived main program.
PCMAG    EXE  Archived PC Magazine articles.
CONGRESS EXE  Complete 1988 Congressional directory archived.
INSTALL  BAT  Batch file to install program on hard disk.
README   DOC  Documentation.
README2  DOC  Description of PCMAG and CONGRESS programs.
LICENSE  DOC  Licensing information.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## LICENSE.DOC

{% raw %}
```
We are pleased to introduce a unique, new ShareWare data base, dLITE. It brings
"pop-up" dBASE Power to the desktop by giving you instant access to 10 dBASE-
compatible data base applications from within your favorite foreground program!

Many popular dBASE file management functions are supported as well as a unique
"cut-and-paste" option to extract data from any dBASE data base into virtually
any text-based, foreground application. Three sample applications are included:
a full-featured mailing list manager, a Congressional directory, and a 3-year
index to PC Magazine articles.

End-users are licensed to use dLITE up to 90 days to determine whether it meets
their needs. After 90 days, end-users must discontinue using the ShareWare copy
and (1) destroy the software, (2) give it to a non-related friend, or (3) pay
the required $25 license fee.  Those who include a shipping and handling fee of
$5 (in U.S) or $10 (foreign) will receive the Developer's Version and softbound
dLITE Developer's Guide by return mail at no additional cost.

ShareWare distributors are licensed to distribute dLITE to end-users subject to
the following conditions.  dLITE must be distributed on a single floppy in the
form received.  A copying fee not to exceed $10 may be charged so long as the
end-user is informed that this fee neither enriches nor otherwise constitutes
payment of the required licensing fee to the developer, Ward Mundy Software.

ee neither enriches nor otherwise constitutes
payment of the required 
```
{% endraw %}

## README.DOC

{% raw %}
```
PLEASE read the dLITE documentation before you proceed any further.  This is
for your own safety!!!  To print the documentation:

  (1)  Turn on your printer.

  (2)  Insert the dLITE distribution diskette in Drive A.

  (3)  Type the following DOS command:  A:DLITE10 -P DLITE.DOC

If you have trouble printing the documentation or installing dLITE, type the
following DOS command to verify that your diskette is undamaged:  A:DLITE10 /T
If a CRC error is reported, your diskette is damaged.  Otherwise, try again!

hat your diskette is undamaged:  A:DLITE10 /T
If a CRC error is reported, your diskette is damaged.  Otherwi
```
{% endraw %}

## README2.DOC

{% raw %}
```
This ShareWare version of dLITE also includes two additional applications:

  (1)  CONGRESS.EXE is a self-unarchiving application which includes
       the complete 1988 Congressional directory.  Once unarchived,
       print out the CONGRESS.DOC file for additional documentation.

  (2)  PCMAG.EXE is a self-unarchiving application which includes a
       complete index to all articles in the 1985, 1986, and 1987
       editions of PC Magazine.  Once unarchived, print out PCMAG.DOC.

Both of these applications should be unarchived in the same directory which
houses the dLITE program.  And, this directory should be in your DOS PATH.

To unarchive these two application, change to the directory housing dLITE
and type A:CONGRESS.  Then type A:PCMAG.

As distributed, the CONGRESS application is activated by pressing ALT-2. And
the PCMAG application is activated by pressing ALT-3.  The documentation files
identified above contain instructions for changing these "hot-keys."

And finally, REMEMBER:

  Your financial support encourages development of reasonably-priced software!
these "hot-keys."

And finally, REMEMBER
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1204

     Volume in drive A has no label
     Directory of A:\

    CONGRESS EXE     38021   8-08-88   8:24p
    DLITE10  EXE    149268   8-08-88   9:27p
    FILE1204 TXT      1790  10-27-88  11:37a
    GO       BAT        55  10-27-88  10:36a
    INSTALL  BAT       512   8-08-88   8:08p
    LICENSE  DOC      1536   8-08-88   8:08p
    PCMAG    EXE    164000   8-08-88   8:24p
    README   DOC       640   8-08-88   8:24p
    README2  DOC      1152   8-08-88   8:24p
            9 file(s)     356974 bytes
                               0 bytes free
