---
layout: page
title: "PC-SIG Library Disk #50"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0050/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0050"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

## Information about "ROFF"

    This version of ROFF, based on the formatter in Kernighan and
    Plauger's book SOFTWARE TOOLS, is written in BDS C, and employs
    the directed i/o functions that go along with that package.
    
    Using ROFF, you can make nice printouts of a file, with as little
    or as much help from the program as you want.  There are default
    values for all parameters, so if you don't put any commands in at
    all, your file will come out with filled, right-justified lines.
    The default line-length is 80 characters; the default page-length
    is 66 lines per page.  "Filled lines" means that as many input
    words as possible are packed onto a line before it is printed;
    "non-filled" lines go through the formatter w/o rearrangement.
    "Right-justified" simply means that spaces are added between
    words to make all the right margins line up nicely.
    
    Filling out the disk are a group of solid utilities like SDIR and
    REBOOT and some useful BASIC programs.
    
    How to Start:  Consult ROFF.DOC for directions and
    documentation. Type ROFF <ENTER> to run.  For the BASIC programs,
    consult the directions in Getting Started for your configuration.
    
    File Descriptions:
    
    COLOR    COM  Allows switch to and from mono screen
    MUSICBOX BAS  A few tunes to while away the moment
    MONO     COM  Allows switch to and from mono screen
    FILEIO   C    File redirection utility
    DEPREC   BAS  Simple depreciation
    REBOOT   ASM  Assembly code for REBOOT
    ROFF     EXE  ROFF text formatter
    ROFF     HE   ROFF subprogram ROFF1
    ROFF     H    ROFF subprogram
    SDIR     ASM  Assembly code
    SDIR     COM  Compiled version of directory shell
    REBOOT   COM  Utility for special warm boots
    ROFF     DOC  Directions on using ROFF
    REBOOT   EXE  Executable version of REBOOT
    TABLET   BAS  One for Moses, one for you
    TICCLOCK BAS  Time keeper for your PC
    ROFF?    C    Uncompiled version of ROFF.EXE to modify.
    ADDCRS   BAS  Adds carriage returns to downloaded files
    ASCFILTR BAS  Filter non-ASCII characters from files

### Directory of PC-SIG Library Disk 0050

     Volume in drive A has no label
     Directory of A:\

    ADDCRS   BAS       858   8-24-82   9:37a
    ASCFILTR BAS      1430   8-24-82   9:38a
    COLOR    COM       128   7-07-83  10:52a
    CRC      TXT      1545  11-09-84  10:46a
    CRCK4    COM      1536  10-21-82   7:54p
    DEPREC   BAS     11264  11-30-82  10:26p
    FILEIO   C         235   9-01-82   6:06p
    MONO     COM       128   7-07-83  10:52a
    MUSICBOX BAS     17920   2-01-83   7:26p
    REBOOT   ASM       384   2-08-83  12:25a
    REBOOT   COM        19   2-08-83  12:26a
    REBOOT   EXE       640   8-29-82   1:05a
    ROFF     DOC      7176   9-01-82   6:02p
    ROFF     EXE     18688   9-01-82   6:14p
    ROFF     H        3134   9-01-82   6:10p
    ROFF     HE       3456   9-01-82   5:05p
    ROFF1    C       11192   9-01-82   6:13p
    ROFF2    C        9422   9-01-82   5:21p
    ROFF3    C         302   9-01-82   5:22p
    SDIR     ASM     15872   2-14-83   7:41a
    SDIR     COM      1292   2-14-83   7:38a
    TABLET   BAS      7424  11-24-82   8:52p
    TICCLOCK BAS     11008  11-28-82   9:48a
           23 file(s)     125053 bytes
                           29696 bytes free
