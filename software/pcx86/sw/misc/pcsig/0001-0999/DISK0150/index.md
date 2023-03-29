---
layout: page
title: "PC-SIG Library Disk #150"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0150/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0150"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

## Information about "IBM BBS"

    A simple, straight-forward BBS written especially for the IBM PC. The
    code is compiled BASIC.  Both the source and executable versions are
    provided so you can run it as is or modify it.
    
    It is a reasonably powerful system with a lot of thought and experience
    behind its design.  However, it has been around for awhile and many of
    the newer BBS offerings surpass its capabilities by quite a bit. This
    system, for example, handles only one line at a time.
    
    System Requirements: Two drives, one serial port, modem, BASIC
    
    How to Start: Documentation is spread out in files marked .DOC (for
    DOCument) and .HLP and plenty of simple text files.  To run IBBS.EXE,
    type IBBS and hit <ENTER>.
    
    File Descriptions:
    
    BBSCOMP  BAT  BAT startup file
    BBSLOGO  BAS  Logo displayed upon BBS startup
    CALLERS       List of each logon, excepting SYSOP
    COUNTERS      Workfile containing next message #, next caller, etc.
    FLASH         File displayed after WELCOME file
    IBBS     BAS  Compiler BASIC source code
    HARDWARE      Information file on hardware prices
    HELP     BBS  Help file
    IBBS     DOC  Limited documentation
    IBBS     EXE  Compiler object code for IBBS
    NEWCOM        Message file for first-time callers
    MESSAGES      Main messages file
    RBBSUTIL BAS  Source code for file cleanup utility
    SOFTWARE      Information file on software prices
    RBBSUTIL EXE  Compiled object code for file cleanup utility
    USERS         List of logon IDs
    SUMMARY       Messages summary file
    XFER     HLP  Help file for file transfer function
    WELCOME       First file displayed after logon
    XFERLIST      List of files that can be transferred

### Directory of PC-SIG Library Disk 0150

     Volume in drive A has no label
     Directory of A:\

    BBSCOMP  BAT       118  12-04-82   8:24p
    BBSLOGO  BAS       755   2-19-83   7:04p
    CALLERS            256  12-29-82   9:59p
    COUNTERS           128  12-29-82  10:01p
    CRC      TXT      1546  11-14-84   8:59a
    CRCK4    COM      1536  10-21-82   7:54p
    FLASH              115   9-28-82   9:39p
    HARDWARE            59   2-24-83   8:45p
    HELP     BBS      1095  10-27-82  10:26p
    IBBS     BAS     44628   3-30-83   9:49p
    IBBS     DOC     11813   1-01-80  10:01a
    IBBS     EXE     81408   3-30-83   9:54p
    MESSAGES           896  12-29-82  10:01p
    NEWCOM            1020   9-17-82  10:53p
    RBBSUTIL BAS      9166   9-19-82  11:15p
    RBBSUTIL EXE     33920   9-19-82  11:17p
    SOFTWARE            44   2-24-83   8:44p
    SUMMARY            256  12-29-82  10:01p
    USERS              256  12-29-82   9:59p
    WELCOME            308   9-17-82   9:55p
    XFER     HLP      2519  11-25-82  11:46p
    XFERLIST           159  12-29-82   9:32p
    XXX               1280   4-25-84  11:56p
           23 file(s)     193281 bytes
                          114688 bytes free
