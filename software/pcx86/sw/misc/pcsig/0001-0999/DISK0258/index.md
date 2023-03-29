---
layout: page
title: "PC-SIG Library Disk #258"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0258/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0258"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

## Information about "COMMUNICATION NO 3"

    This disk includes an assortment of communications programs and
    utilities.  HC.COM is a Hex File converter which converts to and from
    HEX format.  It can automatically provide a COM or EXE extension.
    TALK.EXE is a simple terminal emulator.  RING.BAS will set up the
    HAYES to patiently look for an incoming ring, and turn SYSTEM control
    over to the caller.  SCRIPT.DOC is a procedure to set up a menu
    processing system for Crosstalk.  Included are procedures to perform
    automatic logon and capture to the IBMSIG which may be extracted and
    used as stand-alone Crosstalk scripts.  SERIAL.COM inserts itself into
    memory below command.com ,and changes the ROM bios interupt vectors
    for RS232 I/O to use interupt driven I/O.
    
    System Requirements:  Some programs require BASIC
    
    How to Start: Consult the .DOC files for documentation and
    directions.  To run the BASIC programs follow the GETTING STARTED
    instructions for your configuration.  Programs suffixed .COM or
    .EXE run from DOS by typing <filename> <ENTER>.
    
    File Descriptions:
    
    HC       DOC  Documentation for HC.COM
    HC       COM  Hex Converter, very fast
    ATO      BAS  CompuServe auto logon and message retrieval
    SCRIPT   DOC  Script files for CROSSTALK XVI
    CTTY     DOC  Discussion of CTTY command and RING.BAS
    RING     BAS  Turns SYSTEM control over to caller
    TALK     ASM  Source for TALK.EXE
    TALK     DOC  Documentation for TALK.EXE
    TALK     EXE  Simple terminal emulator from December '83 Softalk
    HC       ASM  Source for HC.COM
    ATO      EXE  Compiled version of ATO.BAS
    ATO      DOC  Documentation for ATO.BAS/EXE
    PCT3JR   DOC  Documentation for PCT3JR.MRG
    PCT3JR   MRG  Merge file for PC-TALK III to run on PCjr
    XAPRIN   BAS  Prints files downloaded from Compuserve database
    QPRINT   OBJ  Link with ATO when compiled
    AT       COM  "AT hhmm" waits until hh:mm  (Within 24 hours)
    AT       ASM  Source for AT.COM
    Z        COM  "Z s" sleeps for s (5 if omitted) seconds
    Z        ASM  Source for Z.COM
    SERIAL   DOC  Documents SERIAL.COM
    SERIAL   COM  Makes BIOS serial (COM1) I/O interrupt-driven so
    SERIAL   ASM  Source for SERIAL.COM

### Directory of PC-SIG Library Disk 0258

     Volume in drive A has no label
     Directory of A:\

    AT       ASM       713   9-30-83   8:31p
    AT       COM        58   9-30-83   8:32p
    ATO      BAS     15387   5-20-84   9:51a
    ATO      DOC      6872   5-19-84   2:31p
    ATO      EXE     38016   5-20-84  10:38a
    CTTY     DOC      2472   5-03-84   7:23a
    HC       ASM     42645   5-08-84   6:44p
    HC       COM      3693   5-08-84   6:56p
    HC       DOC      2768   5-08-84   6:48p
    PCT3JR   DOC      2459   5-19-84   3:38p
    PCT3JR   MRG      2868   5-19-84   3:37p
    QPRINT   OBJ       256   5-20-84   8:17a
    README             824   4-06-85   9:30a
    RING     BAS      2056   5-08-84   6:36p
    SCRIPT   DOC     12397   5-08-84   6:39p
    SERIAL   ASM      4563  12-19-83   4:33p
    SERIAL   COM      1113  12-19-83   4:36p
    SERIAL   DOC      2193   1-10-84  11:29p
    TALK     ASM     11219   5-01-84  11:18p
    TALK     DOC       224   5-08-84   7:36p
    TALK     EXE       896   5-01-84  11:18p
    XAPRIN   BAS      1536   5-20-84   8:56a
    Z        ASM      1419   9-30-83  10:11p
    Z        COM       126   9-30-83  10:12p
           24 file(s)     156773 bytes
                          151552 bytes free
