---
layout: page
title: "PC-SIG Diskette Library (Disk #809)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0809/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0809"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "GENERAL LEDGER UK VERSION 2 OF 2 (808)"

    THE REMARKABLE GENERAL LEDGER allows you to set up and operate a
    complete General Ledger with a wide range of reports.  The program
    includes a Bank Information module with facilities for listing banks,
    reports on used and unused checks, and bank statement reconciliation.
    
    With TRGL you can print out reports on your transactions either in
    summary or in detail, on a leading or account level.  You can also
    print a trial balance and your chart of accounts.  A simple menu is
    offered that allows you to add, change, delete, or view your various
    entries made into your chart of accounts, journal, your record of bank
    deposits, and your checking account.  TRGL also has on-line help for
    every screen that requires input from the user.
    
    This system is designed to work for the UK and countries using
    currencies OTHER than the dollar.  (For countries using a dollar-based
    monetary system, please see PC-SIG #806 & #807.)
    
    Please note: the version of THE REMARKABLE GENERAL LEDGER being
    marketed on this disk is a restricted version of the program.  The full
    version of THE REMARKABLE GENERAL LEDGER includes all the features of
    the shareware version plus profit and loss reports, balance sheets,
    password protection, a complete manual, service, and backup.  You will
    also need disk #809 to operate this program.
    
    System Requirements: 512K memory and two disk drives.
    
    How to Start: Type GO (press enter).
    
    Suggested Registration: $69.95.  Includes full version of the program
    with a printed manual, along with service and backup.
    
    File Descriptions:
    The First Disk Contains:
    READ     ME   How to get started.
    SUBINST  BAT  Installation batch file.
    INSTALL  BAT  Installation batch file.
    TGL      INT  Subfile for main program.
    TGL      EXE  Main program.
    TGL      BAT  Start-up batch file.
    
    The Second Disk Contains:
    CONFIG   SYS  Sample configuration file
    ???????? DBF  Data file (12 files)
    DOC      <DIR>Directory containing the documentation.
    READ     ME   General information about the disk.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES808.TXT

{% raw %}
```
Disk No  808
Program Title: THE REMARKABLE GENERAL LEDGER (UK version disk 1 of 2)
PC-SIG version 1
 
    New Zealand has done it now. Remarkable Enterprises Ltd, which is
located in New Zealand, has created the REMARKABLE GENERAL LEDGER. This
system is designed to work for the UK and countries using currencies other
than the dollar.
 
    REMARKABLE GENERAL LEDGER will allow you to set up and operate a
complete General Ledger, with a wide range of reports, and a Bank
Information module including facilities for listing banks, reports on used
and unused checks and Bank Statement Reconciliation. You can print out
reports on your transactions either in summary or in detail. Reports can be
printed either on a leading or account level. You can also print a trial
balance and your chart of accounts. A simple menu is offered that allows
you to add, change, delete, or view your various entries made into your
chart of accounts, journal, your record of bank deposits, and your checking
account. The program has on-line help for every screen that requires input
from the user.
 
    The full version of REMARKABLE GENERAL LEDGER includes all the features
of the public domain version plus profit and loss reports, balance sheets
password protection, a complete manual and service and backup.
 
Usage: Financial
 
System Requirements: IBM PC or PC compatible, running MS/PC DOS 2.0 or
greater, minimum of 512k bytes RAM and at least two disk drives.
 
How to Start: Type GO (press enter)
 
Suggested Registration: $69.95, includes full version of the program
with a printed manual, and includes service and backup.
 
File Descriptions:
 
READ     ME   How to get started
INSTALL  BAT  Installation batch file
SUBINST  BAT  Installation batch file
TGL      BAT  Start-up batch file
TGL      EXE  Main program
TGL      INT  Subfile for main program
HELP    <DIR> Directory containing on-line help files
 
PC-SIG, Inc.
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## FILES809.TXT

{% raw %}
```
Disk No  809
Program Title: THE REMARKABLE GENERAL LEDGER (UK version disk 2 of 2)
PC-SIG version 1
 
    New Zealand has done it now. Remarkable Enterprises Ltd, which is
located in New Zealand, has created the REMARKABLE GENERAL LEDGER. This
system is designed to work for the UK and countries using currencies other
than the dollar.
 
    REMARKABLE GENERAL LEDGER will allow you to set up and operate a
complete General Ledger, with a wide range of reports, and a Bank
Information module including facilities for listing banks, reports on used
and unused checks and Bank Statement Reconciliation. You can print out
reports on your transactions either in summary or in detail. Reports can be
printed either on a leading or account level. You can also print a trial
balance and your chart of accounts. A simple menu is offered that allows
you to add, change, delete, or view your various entries made into your
chart of accounts, journal, your record of bank deposits, and your checking
account. The program has on-line help for every screen that requires input
from the user.
 
    The full version of REMARKABLE GENERAL LEDGER includes all the features
of the public domain version plus profit and loss reports, balance sheets
password protection, a complete manual and service and backup.
 
Usage: Financial
 
System Requirements: IBM PC or PC compatible, running MS/PC DOS 2.0 or
greater, minimum of 512k bytes RAM and at least two disk drives.
 
How to Start: Type GO (press enter)
 
Suggested Registration: $69.95, includes full version of the program
with a printed manual, and includes service and backup.
 
File Descriptions:
 
DOC     <DIR> Directory containing the documentation
???????? DBF  Data file (12 files)
CONFIG   SYS  Sample configuration file
 
PC-SIG, Inc.
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║    <<<<  Disk #809 THE REMARKABLE GENERAL LEDGER Disk 2 of 2  >>>>      ║
╠═════════════════════════════════════════════════════════════════════════╣
║                    THE UNITED KINGDOM VERSION                           ║
║                                                                         ║
║ To obtain instructions for start up procedures type:                    ║
║                    COPY READ.ME PRN (press enter)                       ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0809

     Volume in drive A has no label
     Directory of A:\

    ABLTMPLT DBF       131  12-17-86   4:31p
    ACCTMPLT DBF       227  11-19-86   5:10p
    BATTMPLT DBF       323   5-11-87   3:10p
    BKYTMPLT DBF       227   9-02-85  11:07a
    BNKTMPLT DBF       323  11-28-86  10:01a
    BRFTMPLT DBF       227   6-16-86  12:14p
    CHKTMPLT DBF       163   9-04-85   9:08a
    CONFIG   SYS       512   2-04-86   2:17p
    ENVIRON  DBF       781   7-09-87   8:54a
    FILES808 TXT      2058   7-30-87  11:59a
    FILES809 TXT      1919   7-30-87  11:59a
    GO       BAT        38   7-08-87  12:19a
    GO       TXT       694   7-27-87   3:37p
    PASTMPLT DBF       195   1-22-86   8:50a
    PRINTERS DBF      1907   5-18-87   9:20a
    READ     ME       7054   7-27-87   3:05p
    RPLTMPLT DBF       131   1-27-86   4:26p
    SYSTEM   DBF       547   1-19-87  11:22a
    SYSTMPLT DBF       547   1-19-87  11:22a
    TRNTMPLT DBF       355  12-16-86   1:49p
           20 file(s)      18359 bytes
                          136192 bytes free
