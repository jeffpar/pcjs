---
layout: page
title: "PC-SIG Library Disk #19"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0019/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0019"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

## Information about "ARCHIE"

    The title program, ARCHIE, gives you the basic elements for doing
    structured BASIC programming.  ARCHIE is a fun tutorial for beginners
    in BASIC.  RV-EDIT is a simple and sturdy full-screen text editor
    written in BASIC and PCS is a program control system designed to help
    take charge of your PC.  RV-EDIT and PCS are well documented and invite
    tinkering!
    
    How to Start:  To run BASIC programs consult the directions in GETTING
    STARTED for your configuration.  Consult the .DOC files for program
    documentation.
    
    System Requirements:  128k, two disk drives, some of the programs on
    this disk require color graphics.
    
    File Descriptions:
    
    MENU     BAS  Menu program for Disk No 19
    ARCHIE   DOC  Documentation for ARCHIE
    ARCHIE   BAS  Archie la cucharacha - game, BASIC tutorial & fun program
    PCS      DOC  Program control system description
    CONTROL  BAS  Runs the prime program on a BASIC diskette
    CONTROL  PCS  Returns control to Drive "A"
    AUTOEXEC BAT  Requests date & time and gives control to SYSTEM.BAT
    SYSTEM   BAT  Loads BASICA, runs TRANSFER.BAS, runs b:CONTROL.BAT
    MENU     PCS  Sample menu file for BASIC programs
    EXIT     PCS  Mergeable exit hierarchy
    COVER    PCS  Mergeable cover page and exit hierarchy
    CONTROLD PCS  Copy to CONTROL.BAT on data diskettes
    CONTROLB PCS  Copy to CONTROL.BAT on BASIC program diskettes
    TRANSFER BAS  Displays disk swap message, waits for keystroke
    RV-EDIT  DOC  Full screen editor documentation
    RV-EDIT  BAS  Full screen editor  (Limited usefulness)
    CONTROLM PCS  Copy to CONTROL.BAT on machine language program diskettes
    RUN      BAT  Runs the program passed as a parameter

### Directory of PC-SIG Library Disk 0019

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        21  10-24-82   3:15p
    SYSTEM   BAT       128  11-03-82   1:41a
    RUN      BAT       128  11-03-82   1:46a
    TRANSFER BAS       384  11-04-82   3:24a
    MENU     PCS      2304  10-24-82  12:06p
    COVER    PCS      1152  10-21-82   1:47p
    EXIT     PCS       256  10-27-82   7:02p
    CONTROLB PCS         5  10-21-82   9:29a
    CONTROLD PCS        11  10-26-82   2:03a
    CONTROLM PCS        13  10-20-82   1:13p
    RV-EDIT  BAS      8960  11-07-82   2:20a
    CONTROL  BAS       128  11-07-82   7:23p
    CONTROL  PCS         5  10-21-82   9:29a
    RV-EDIT  DOC     10368  11-08-82   3:39a
    ARCHIE   DOC      2048   8-01-82   8:35p
    ARCHIE   BAS     32384  11-07-82   8:04p
    PCS      DOC     21632  11-08-82  10:17a
    MENU     BAS      1792  11-07-82   8:06p
    FILES019 TXT      1331   5-29-87  10:42a
           19 file(s)      83050 bytes
                           70656 bytes free
