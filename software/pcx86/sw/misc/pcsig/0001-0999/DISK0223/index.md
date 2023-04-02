---
layout: page
title: "PC-SIG Library Disk #223"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0223/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0223"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

## Information about "ASSEMBLY AND PASCAL"

    This disk contains a variety of Assembly language routines for screen
    clearing and cursor size alteration.  There is a small database
    management system written in Pascal which is linkable to LOCATE.ASM for
    cursor positioning, a text-file preview utility, a routine using
    ANSI.SYS to reset the keyboard, and others.  If you want to use these
    in your programs, or just see how others do their tricks, be sure to
    check out these.
    
    System Requirements: Two disk drives, an Assembler and a Pascal
    compiler.
    
    How to Start:  To run the files with the C and PAS extentions, refer to
    your Assembler and Pascal manuals. To read DOC files, just enter TYPE
    filename.DOC and press <ENTER>.
    
    File Descriptions:
    
    INFO     BAT  Batch file to list file information on screen
    FILE     PAS  Pascal Program to manage a small data base type program
    LOCATE   ASM  Procedure to set cursor position from Pascal
    RESPOND  DOC  Documentation for RESPOND
    RESPOND  ASM  Produces beep
    REPLY    EXE  Produces beep
    REPLY    COM  Produces beep
    REPLY    ASM  Source code for REPLY
    READCHAR OBJ  Object file
    READCHAR DOC  Documentation for READCHAR
    READCHAR ASM  Procedure to read a specified number of characters
    PREVIEW  PAS  Pascal source code for PREVIEW
    PREVIEW  EXE  A Pascal utility to preview a text file prior to printing
    MSBFILE  EXE  Executable image of file
    LOCATE   DOC  Documentation for LOCATE
    MORE     COM  Filter to one screen at a time
    MODULE   PAS  Module to be linked with FILE.PAS
    MODULE   OBJ  Object file
    LOCATE   OBJ  Object file
    RESPOND  OBJ  Object file
    SETANSI  ASM  Source code for SETANSI
    SETP     EXE  Program to setup Epson printer to skip perforations
    SETP     ASM  Source code for SETP
    SETANSI  EXE  Executable file version of SETANSI
    SETANSI  COM  A procedure to communicate with ANSI.SYS to reset keys
    SETP     OBJ  Object file
    BEEP     ASM  Program to make "beep" on speaker
    BEEP     DOC  Documentation for BEEP
    CANCEL   ASM  Source for CANCEL
    CLS      ASM  Program to clear screen
    CANCEL   EXE  Program to cancel the setting that SETP causes
    CLS      OBJ  Object file
    CLS      DOC  Documentation for CLS
    CONTRACT ASM  Procedure to restore the cursor to its system size
    CONTENTS DOC  Description of file on this disk
    EXPAND   DOC  Documentation for EXPAND
    EXPAND   ASM  Procedure to expand curser to solid blinking rectangle
    CONTRACT OBJ  Object file
    CONTRACT DOC  Documentation for CONTRACT
    EXPAND   OBJ  Object file
    PREVIEW  ASM  Assembly language version of PREVIEW.EXE
    PREVIEW  COM  Additional version of PREVIEW.EXE
    SETP     COM  Program to setup Epson printer to skip perforations
    ADDENDA  TXT  Notes on program improvements

### Directory of PC-SIG Library Disk 0223

     Volume in drive A has no label
     Directory of A:\

    ADDENDA  TXT       914   1-13-87   7:28p
    BEEP     ASM      1869   5-23-84   7:15p
    BEEP     DOC       172   5-23-84   7:24p
    CANCEL   ASM      2926   8-08-84   8:49p
    CANCEL   EXE       683   8-08-84   8:50p
    CLS      ASM       644   5-23-84  12:57a
    CLS      DOC       126   5-23-84   1:15p
    CLS      OBJ        85   5-16-84   9:19a
    CONTENTS DOC      4424   8-11-84   7:44p
    CONTRACT ASM       695   7-21-84   6:49p
    CONTRACT DOC       335   7-21-84   7:29p
    CONTRACT OBJ        95   7-21-84   6:57p
    CRC      TXT      2439  11-16-84   6:44a
    CRCK4    COM      1536  10-21-82   7:54p
    EXPAND   ASM       721   7-21-84   6:46p
    EXPAND   DOC       321   7-21-84   7:27p
    EXPAND   OBJ        89   7-21-84   6:50p
    FILE     PAS     19239   7-21-84   7:38p
    FILES223 TXT      1991   1-04-80   8:48a
    INFO     BAT       434   8-11-84   7:35p
    LOCATE   ASM       688   5-23-84  12:57a
    LOCATE   DOC       187   5-23-84   1:16p
    LOCATE   OBJ        95   5-16-84   9:18a
    MODULE   OBJ     11569   7-21-84   1:54p
    MODULE   PAS      8768   6-09-84   9:03p
    MORE     COM       384   8-11-84   8:28p
    MSBFILE  EXE     51840   7-21-84   7:17p
    PREVIEW  ASM      8751   1-13-87   7:15p
    PREVIEW  COM       649   1-02-87   6:03p
    PREVIEW  EXE     29696   7-20-84   8:42p
    PREVIEW  PAS      3102   7-21-84   2:19p
    READCHAR ASM      1994   6-01-84   1:04p
    READCHAR DOC       901   8-11-84   7:03p
    READCHAR OBJ       130   6-01-84   1:06p
    REPLY    ASM      1902   5-29-84  10:40p
    REPLY    COM        54   5-29-84  11:18p
    REPLY    EXE       640   5-29-84  10:40p
    RESPOND  ASM      2170   5-30-84   1:50p
    RESPOND  DOC       404   5-30-84   2:09p
    RESPOND  OBJ       129   5-30-84   1:50p
    SETANSI  ASM      1818   8-10-84   8:48p
    SETANSI  COM       203   8-10-84   8:50p
    SETANSI  EXE       971   8-10-84   8:49p
    SETP     ASM      7938   1-13-87   7:16p
    SETP     COM       549   3-11-86   2:03p
    SETP     EXE       789   8-06-84   6:03p
    SETP     OBJ       435   8-04-84   4:33p
           47 file(s)     176494 bytes
                          121856 bytes free
