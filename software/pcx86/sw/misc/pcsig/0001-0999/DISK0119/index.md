---
layout: page
title: "PC-SIG Diskette Library (Disk #119)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0119/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0119"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "ABC DATABASE"

    ABC DATABASE is a user-friendly data filing system that accepts up to
    1,500 records with up to 12 fields in each record.  It handles
    customer files or mailing lists of 100s to 1000s of records.  It will
    also handle daily schedules or technical-article cross references.
    
    Features:
    
    ~ Maintains 1,500 records, 12 fields, and 50 characters per field
    ~ Handles customer files or mailing lists of up 1000s of records
    ~ Handles daily schedules, technical article cross references, recipe
    files, sales records, parts inventories, student grades, etc.
    ~ Ability to specify character or numeric fields
    ~ Simple calculations on fields
    
    System Requirements: Epson FX/MX-80 or equivalent.
    
    How to Start: Consult the .DOC files for documentation and directions.
    To run the ABCFILE.EXE program, just enter ABCFILE and press <ENTER>.
    
    Suggested Registration:  $30.00
    
    File Descriptions:
    
    ABCFILE  HLP  ABC-FILE help file
    ABCFILE  DOC  Documentation
    ABCFILE  EXE  ABC database main program ABCFILE  HLP  Help data
    NUMSAM   CFG  Sample configuration
    DBII-ABC EXE  Translate dBASE II files to ABC
    AUTOEXEC BAT  Boot start up file
    ABCONVRT BAS  Convert files to ABC format
    NUMSAM   DAT  Sample program data
    NUMSAM   NUM  Part of sample program
    SAMPLE   DAT  Sample program data
    SAMPLE   CFG  Sample configuration
    README   1ST  Initial documentation
    NUMSAM1  NDX  Sample program
    SAMPLE1  NDX  Sample program
    SAMPLE   NUM  Part of sample program
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ABCONVRT.BAS

```bas
10 '****************************************************************************
20 '********   Copywrite 1984  DND Enterprises  All rights reserved     ********
30 '********  Program to convert files delimited with ", to ABC-FILE    ********
40 '****************************************************************************
50 ON ERROR GOTO 130:KEY OFF:CLS:FLDNUM=0
60 LOCATE 5,5:INPUT "ENTER FILENAME TO IMPORT TO ABC-FILE:";OLDFILE$:IF LEN(OLDFILE$)>12 THEN BEEP:GOTO 60:ELSE IF OLDFILE$="" THEN CLOSE:SYSTEM
70 OPEN OLDFILE$ FOR INPUT AS #1:GOSUB 140
80 LOCATE 7,5:INPUT "ENTER ABC-FILE TO CREATE (NEW FILE):";NEWFILE$:IF INSTR(NEWFILE$,".")>0 OR LEN(NEWFILE$)>8 THEN LOCATE 25,5:BEEP:PRINT "MAX LEN=8, NO EXTENSION!";:GOTO 80
90 GOSUB 140:OPEN NEWFILE$+".IMP" FOR OUTPUT AS #2:WHILE NOT EOF(1):FLDNUM=FLDNUM+1:INPUT #1,A$:LOCATE 10,5:PRINT "WORKING,FIELD #"FLDNUM;:PRINT #2,A$;CHR$(13);:WEND:CLOSE
100 PRINT:PRINT:PRINT TAB(5) "Your  file has been written to disk in ABC-FILE  format ,":PRINT:PRINT TAB(5) "PRESS [RETURN]"
110 NXT$=INKEY$:IF NXT$=CHR$(13) THEN 120 ELSE GOTO 110
120 CLS:SYSTEM
130 IF ERR=53 THEN LOCATE 25,5:BEEP:PRINT "FILE NOT FOUND";:RESUME 60:ELSE LOCATE 25,5:BEEP:PRINT "SORRY, UNDEFINEABLE ERROR, RE-TRY";:SYSTEM
140 LOCATE 25,5:PRINT SPACE$(40);:RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0119

     Volume in drive A has no label
     Directory of A:\

    ABCFILE  DOC     60288   1-11-80  11:47p
    ABCFILE  EXE     88064   1-11-80  12:48p
    ABCFILE  HLP     14276   1-11-80   4:37p
    ABCONVRT BAS      1062   1-11-80   4:37p
    AUTOEXEC BAT        14   1-11-80  12:00a
    DBII-ABC EXE     23168   1-01-80   4:47p
    NUMSAM   CFG       128   1-11-80   5:10p
    NUMSAM   DAT       896   1-11-80  11:38p
    NUMSAM   NUM       128   1-11-80   5:44p
    NUMSAM1  NDX       256   1-11-80   5:44p
    README   1ST       647   1-11-80   4:57p
    SAMPLE   CFG       137   1-11-80   6:05p
    SAMPLE   DAT      7040   1-11-80   6:04p
    SAMPLE   NUM       128   1-11-80   6:04p
    SAMPLE1  NDX       640   1-11-80   6:05p
    XXX                768   5-02-84  10:28p
    CRC      TXT      1313  11-09-84   2:47p
    CRCK4    COM      1536  10-21-82   7:54p
           18 file(s)     200489 bytes
                          112640 bytes free
