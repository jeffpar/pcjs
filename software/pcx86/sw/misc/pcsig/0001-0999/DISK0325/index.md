---
layout: page
title: "PC-SIG Library Disk #325"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0325/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0325"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOGON AND LOGOFF"

    This disk is dedicated to a special category of utilities: programs
    for PC user logging, timekeeping and documenting job starting/ending.
    For example, PC-Logger gives you a computer use log that creates a PC
    FILE III database for later sort/print.  These types of utilities are
    a must for anyone who needs to document machine-time, for taxes or
    other reasons.
    
    How to Start:  To read DOC files, enter TYPE filename.ext and press
    <ENTER>.  To run an EXE or COM program, just type its name and press
    <ENTER>. For instructions on running BASIC programs, please refer to the
    GETTING STARTED section in this catalog.
    
    Suggested Registration:  SYSLOG has a suggested donation of $25.00
    
    File Descriptions:
    
    -------- ---  Time Keeper
    -------- ---  PC-Logger
    TIMSTALL COM  Install program for TIMEKEEP
    -------- ---  PC-Logger
    TIMEKEEP EXE  TIMEKEEPER (Ver 3.0): produces job log report
    TIMEKEEP DOC  Documentation for TIMEKEEP
    STARTLOG COM  Writes date & time to log
    DEFAULTS COM  Defaults.com creates log file
    PCUSELOG DOC  Documentation
    USELOG   RPT  PC-FILE III report file listing database
    USELOG   HDR  PC-FILE III header file defining log database
    STOPLOG  COM  Reads log, calculates time
    -------- ---  SYSLOG
    SYSLOG   EXE  SYSLOG (Ver 2.0): system use log (128K;DOS 2.0)
    SYSLOG   DOC  Documentation
    START    EXE  compiled version of start log program
    START    BAS  START/END: Logs start & end of jobs with comments
    END      EXE  compiled version of end log program
    END      BAS  BASICA version of end log program
    ONTIME   EXE  Part of TIMEKEEP utility
    OFFTIME  EXE  Part of TIMEKEEP utility
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## END.BAS

```bas
20 OPEN "A:TIMES" FOR APPEND AS #1
30 PRINT #1, "End:   ";DATE$;"   ";TIME$;
32 INPUT "Comment about session: ",X$
34 PRINT #1, "   ";X$:PRINT #1,
40 CLOSE #1: SYSTEM
```

## START.BAS

```bas
10 '================START================
20 OPEN "A:TIMES" FOR APPEND AS #1 ' ACCUMULATE ALL TIMES
30 PRINT #1, "Start: ";DATE$;"   ";TIME$  'THIS DOES THE RECORDING
40 CLOSE #1: SYSTEM  'WRAP-UP;RETURN TO DOS
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0325

     Volume in drive A has no label
     Directory of A:\

    TIMEKEEP DOC     16128   6-28-85   1:24a
    TIMEKEEP EXE     53246   7-08-85   8:24p
    ONTIME   EXE     21120   6-27-85   6:20p
    OFFTIME  EXE     20444   6-27-85   6:21p
    TIMSTALL COM     14621   6-27-85  11:39p
    --------             4   8-20-85   8:01a
    DEFAULTS COM     18877   1-08-85   8:48p
    STARTLOG COM     11003   1-08-85   8:52p
    STOPLOG  COM     21645   1-08-85   9:12p
    USELOG   HDR        85   1-08-85   9:14p
    USELOG   RPT       154   1-08-85   9:48p
    PCUSELOG DOC      9232   1-08-85   9:42p
    -------              4   8-20-85   8:04a
    SYSLOG   EXE     34373   1-15-87   2:02a
    SYSLOG   DOC     84733   1-15-87   2:02a
    START    BAS       216   6-19-84   9:04p
    START    EXE     18176   6-19-84   9:09p
    END      BAS       256   8-06-84  12:33a
    END      EXE     18304   6-19-84   9:14p
    GO       BAT       792   1-28-87   9:01p
           20 file(s)     343413 bytes
                            8192 bytes free
