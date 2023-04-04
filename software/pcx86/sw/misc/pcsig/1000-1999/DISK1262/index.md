---
layout: page
title: "PC-SIG Library Disk #1262"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1262/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1262"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOUG'S PROGRAMMING LANGUAGE (DPL)"

    DPL, or DOUG'S PROGRAMMING LANGUAGE, is a macro language which uses high
    level language syntax for its instructions.
    
    DPL's language does not limit the programmer from using native 8088
    code, but makes programming easier by automatically declaring segments
    and the program entrypoint.  All return codes except end-of-file are
    standard DOS return codes.  The program handles 64K of code and data and
    stack segments.  Variables are automatically declared.
    
    DPL supports simple data types and still permits the programmer to build
    other types.  Basic data types supported are 16 bit integers and ASCIIZ
    strings.  The 16 bit integers are considered to be signed integers and
    therefore will be manipulated appropriately.  Files are supported which
    allow the program to address any disk file or logical device, such as
    the keyboard and screen.
    
    Extensive documentation is available on disk in both standard ASCII and
    WordStar format.  Also available is the DPL source program written in
    TURBO C.  Many application routines and application routine
    construction files are provided, along with a demonstration of the use
    of shade and how to manipulate it.
    File Descriptions:
    
    DPL      DOC  DPL reference manual in WORDSTAR format.
    DDPL     DOC  DPS reference manual in text form.
    READ     ME   Lists files.
    DPL      EXE  DPL prepass macro assembler.
    DPL      C    Source program written in TURBOC.
    DPL           DPL ``MAKE'' file for use with Microsoft MASM.
    DPL      L    Microsoft LINK input file used in DPL make function.
    DPL      LIB  Final output of DPL make function.
    CMP      BAT  Compare source/target disks of DPL release code.
    D        BAT  DOS batch files for assembling/linking DPL programs.
    DV       BAT  Set up output listings for use with Microsoft CODEVIEW.
    MOVE     BAT  Moves entire DPL distribution list to target disk drive.
    MOVEDEV  BAT  Moves ony those files needed to develop code.
    DPL      MAC  DPL macro ``include'' file.
    _CRSR    D    Video cursor positioning.
    _DEC     D    ASCII decimal tosigned 16 bit integer conversion.
    _DPL     D    Startup code executed at the start of DPL program.
    _DV1616  D    16 bit division routine to protects against division by 0.
    _ENC     D    Signed 16 bit integer to ASCII decimal representation.
    _FILEIO  D    File I/O routines for all four file access methods.
    _HSTOI   D    Hexedecimal representation to 16 bit integer conversion.
    _IFS     D    String comparison routines.
    _INKY    D    Single character input routines.
    _ITOBS   D    16 bit integer to binary string representation.
    _ITOHS   D    16 bit integer to hexedecimal representation.
    _SCONCAT D    String concatenation routines.
    _STREND  D    String length calculation routines.
    MOVEAPP  BAT  Batch file to move the sample routines.
    CMPAPP   BAT  Compare source/target disks of DPL release code.
    APP           Application routine's ``MAKE'' file.
    APP      L    Additional ``MAKE'' file for Microsoft LINK.
    APP      LIB  Final output from make function.
    CLICK    D    Make click noise to simulate keyboard clickings.
    CLRSCR   D    Clear screen routine.
    CMDLN    D    Retrieve data from the command line.
    CMPRSS   D    Compress text.
    DELAY    D    Delay x number of clock ticks.
    DOBEEP   D    Beep speaker.
    EDITM    D    Edit a fixed ASCIIZ string from the keyboard.
    EDITS    D    Perform edit of an ASCIIZ string from the keyboard.
    ENVSTR   D    Fetch and environment string.
    EXPR     D    Algebraic evaluator returning 16 bit signed integer.
    FMOVE    D    Move an ASCIIZ string into a file name.
    FSTRNG   D    Search a string for a match.
    GETMWORD D    Return the machine ID word from PROM.
    LWRCS    D    Convert ASCIIZ string to lowercase.
    SCRNBK   D    Backup a video page.
    SHADE    D    Pulldown menuing and display routine.
    SHDDO    D    Additional shade manipulation routines.
    TRIM     D    Trim off blanks from an ASCIIZ string.
    UPRCS    D    Convert ASCIIZ string to uppercase.
    VIDOFF   D    Turn video screen off.
    VIDWRT   D    Direct video text output routines.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1262

     Volume in drive A has no label
     Directory of A:\

    APP               1536   7-08-88   4:25p
    APP      L         384   7-08-88   4:26p
    APP      LIB     10893   7-11-88   2:40p
    CLICK    D        1024   7-11-88   2:26p
    CLRSCR   D         896   7-11-88   2:26p
    CMDLN    D        3200   7-11-88   2:26p
    CMP      BAT       896   7-12-88   8:22a
    CMPAPP   BAT       896   7-12-88   9:08a
    CMPRSS   D        1664   7-11-88   2:27p
    D        BAT       128   7-12-88   8:20a
    DDPL     DOC     34176   7-13-88  10:52a
    DELAY    D         640   7-11-88   2:27p
    DEMO     D        4224   7-11-88   2:24p
    DOBEEP   D        1024   7-11-88   2:27p
    DPL               1024   1-27-88   3:59p
    DPL      C       11265   7-12-88   8:20a
    DPL      DOC     34176   7-13-88  10:50a
    DPL      EXE     12278   7-12-88   8:20a
    DPL      L         256   1-27-88   3:59p
    DPL      LIB      6769   7-11-88   2:33p
    DPL      MAC      9344   7-11-88   2:20p
    DV       BAT       256   7-12-88   8:21a
    EDITM    D        4608   7-11-88   2:27p
    EDITS    D       12800   7-11-88   2:28p
    ENVSTR   D        4480   7-11-88   2:28p
    EXPR     D       11008   7-12-88   9:04a
    FILE1262 TXT      4613   1-16-89  11:08a
    FMOVE    D        1024   7-11-88   2:28p
    FSTRNG   D        1792   7-11-88   2:29p
    GETMWORD D         512   7-11-88   2:29p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002  12-14-88  11:08a
    LIST     D       10880   7-11-88   2:25p
    LWRCS    D        1024   7-11-88   2:29p
    MANUAL   BAT       150   1-16-89  11:35a
    MOVE     BAT       896   7-12-88   8:22a
    MOVEAPP  BAT       896   7-12-88   9:08a
    MOVEDEV  BAT       384   7-12-88   8:22a
    READ     ME       4992   7-27-88   9:27a
    SCRNBK   D        3072   7-11-88   2:29p
    SHADE    D       13312   7-11-88   2:29p
    SHDDO    D       10752   7-11-88   2:30p
    TRIM     D        1152   7-11-88   2:30p
    UPRCS    D        1152   7-11-88   2:30p
    VIDOFF   D        1536   7-11-88   2:30p
    VIDWRT   D        7552   7-11-88   2:30p
    _CRSR    D         512   7-11-88   2:21p
    _DEC     D        1536   7-11-88   2:21p
    _DPL     D        2560   7-11-88   2:21p
    _DV1616  D         896   7-11-88   2:21p
    _ENC     D        1792   7-11-88   2:21p
    _FILEIO  D       24064   7-11-88   2:22p
    _HSTOI   D        1408   7-11-88   2:22p
    _IFS     D        1536   7-11-88   2:22p
    _INKY    D         768   7-11-88   2:22p
    _ITOBS   D        1024   7-11-88   2:23p
    _ITOHS   D         896   7-11-88   2:23p
    _SCONCAT D         640   7-11-88   2:24p
    _STREND  D        1024   7-11-88   2:24p
           59 file(s)     275232 bytes
                           22528 bytes free
