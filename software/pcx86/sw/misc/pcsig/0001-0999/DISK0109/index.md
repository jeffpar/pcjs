---
layout: page
title: "PC-SIG Library Disk #109"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0109/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0109"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 5"

    A grabbag of utilities aimed mostly at the needs of the more advanced
    programmer types among us.  BREAKPT lets you do a breakpoint within any
    program, FILEDUMP will do a hex dump to your screen.  There are
    routines to demonstrate structured macros and one on APL. One of the
    most interesting programs here is UTIL.  This is a DOS utility that
    allows you to do things like: sort directories, do paged display of
    text files, redefine your keyboard, and others.  This could be quite
    useful for anyone interested in a simple, effective way to enhance
    their system.
    
    How to Start: To run an EXE or COM program simply type its name and
    press <ENTER>.  WKS files are for use with LOTUS 1-2-3.  For
    instructions on ASM listings, refer to your Assembler manual.  To read
    DOC and read-me files simply enter TYPE filename.ext and press
    <ENTER>.
    
    Suggested Registration:  UTIL $10.00, $15.00 includes latest
    version and printed documentation.
    
    File Descriptions:
    
    BREAKPT  COM  Makes ctrl-esc do a breakpoint to trace any program
    BREAKPT  DOC  Documentation for above
    BREAKPT  ASM  Source for above
    DATE     PRG  dBASE II program to validate dates
    FEDTAX83 WKS  123 worksheet for 1040 form, schedules A, B, C, W
    REGDISP  ASM  Source for program to display 8088 regs in real time
    PV______ APL  Present value functions in APL
    MACTEST  ASM  Illustrates structured assembler macros in STRUCT.MAC
    FILEDUMP COM  Hex dump a file to screen
    STRUCT   MAC  Assembler macros for structured programming
    UTIL     EXE  Fantastic set of screen/file/directory, etc. functions
    UTILREAD ME   Introductory note about these utilities
    UTIL     DOC  Documentation for UTIL.DOC
    DATABASE      Sample database
    READ     ME   List of files on this diskette
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk 0109

     Volume in drive A has no label
     Directory of A:\

    BREAKPT  ASM      4096  11-27-83   3:46a
    BREAKPT  COM      1024  11-27-83   3:51a
    BREAKPT  DOC       384  11-27-83   3:47a
    CRC      TXT      1289  12-17-84  12:35p
    CRCK4    COM      1536  10-21-82   5:50p
    DATABASE           150  11-13-83  12:34p
    DATE     PRG      2048   2-03-84   2:17a
    FEDTAX83 WKS     37888   2-03-84   3:15a
    FILEDUMP COM      1408  10-23-83  12:18a
    MACTEST  ASM      1024   2-03-84   2:21a
    PV______ APL      6016  12-11-83   1:51a
    READ     ME        849   2-03-84  12:04a
    REGDISP  ASM      5376   2-03-84   2:23a
    STRUCT   MAC      3072   2-03-84   2:24a
    UTIL     DOC     49152  12-25-83   2:30a
    UTIL     EXE     46080  12-25-83   2:19a
    UTILREAD ME       1241   1-11-84  12:34p
           17 file(s)     162633 bytes
                          154624 bytes free
