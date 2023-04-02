---
layout: page
title: "PC-SIG Library Disk #142"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0142/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0142"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

## Information about "PROGRAMERS UTILITIES #6"

    A disk for advanced and advancing programmers!  This disk holds quite
    a varied list of utilities.  It contains Logo programs, BASIC code,
    Lisp in Pascal, Assembly code, C code, and graphics code.  BASSUB
    calls DOS 2.x functions from BASIC programs.  KVUTIL provides a screen
    management function for DOS. AFT8087 and TRAN both support math
    functions in ASM and C respectively.  LDIR and LTYPE add screen
    display and printing of files squeezed by LAR. The other files fill
    out the disk and are "icing on the disk".
    
    System Requirements: Some programs require BASIC; C compiler and
    assembler software also.
    
    How to Start: Consult the .DOC and README files for directions and
    documentation.  To run the BASIC programs, consult the directions in
    GETTING STARTED for your configuration.  To run a program with the
    suffix .COM or .EXE, just type its name, i.e., for LTYPE.EXE, type
    LTYPE <ENTER>.
    
    File Descriptions:
    
    READ     ME   Listing of included files
    BASSUB   BAS  Call DOS 2.0 functions from BASIC
    AFT8087  MAC  Assembly macros and interface for Fortran access to 8087
    BASSUB   OBJ  Part of BASSUB.BAS
    BIOS     MAC  Assembly macros for accessing all BIOS functions
    CLINK    COM  Program to load text fonts for graphics display
    CLINK    ASM  Source for CLINK.COM
    GRDRAW   LF   Logo program for interactive graphics drawing
    DOS      MAC  Assembly macros for accessing all DOS 2.0 functions
    KVUTIL   DOC  Documentation for KVUTIL.COM
    KVSET    COM  Part of KVUTIL.COM
    KVUTIL   COM  Display control functions (Auto screen blank, scroll lock)
    HP       C    HP-style RPN calculator in c  (Requires TRAN.C -see below)
    PCUTIL   DOC  Documentation for PCUTIL.DOC
    PCUTIL   COM  Several screen and keyboard utility functions
    LISP     PAS  A simple LISP interpreter in Pascal
    LTYPE    C    Source for LTYPE.EXE
    LTYPE    EXE  Type a library file without extracting it - very useful
    LDIR     C    Source for LDIR.EXE
    LDIR     DOC  Documentation for LDIR.EXE
    LDIR     EXE  List the table of contents of library files made by LAR
    XENIX    ASM  Xenix-like subroutines for accessing DOS 2.0 functions
    VUE      EXE  View file in hex and ASCII
    UTILITES MAC  A set of utility macros and subroutines for IBM Assembler
    TRAN     C    Transcendental functions in c

### Directory of PC-SIG Library Disk 0142

     Volume in drive A has no label
     Directory of A:\

    AFT8087  MAC      3456   4-09-84   1:45a
    BASSUB   BAS      2816   4-09-84   1:45a
    BASSUB   OBJ       384   4-09-84   1:45a
    BIOS     MAC      9088   4-09-84   1:40a
    CLINK    ASM      3471   4-09-84   1:43a
    CLINK    COM       212   4-09-84   9:56a
    CRCK4    COM      1536  10-21-82   7:54p
    DOS      MAC     11904   4-09-84   1:40a
    GRDRAW   LF       4864   4-09-84   1:41a
    HP       C        1536   4-09-84   1:47a
    KVSET    COM      4096   4-09-84   1:42a
    KVUTIL   COM       896   4-09-84   1:41a
    KVUTIL   DOC      3584   4-09-84   1:42a
    LDIR     C       10240   4-09-84   2:30a
    LDIR     DOC       384   4-09-84   2:30a
    LDIR     EXE     14080   4-09-84   2:30a
    LISP     PAS     25600   4-09-84   1:43a
    LTYPE    C        3200   4-09-84   2:30a
    LTYPE    EXE     12800   4-09-84  12:41a
    PCUTIL   COM      3584   4-09-84   1:41a
    PCUTIL   DOC      5632   4-09-84   1:41a
    READ     ME       1450   4-09-84  10:24a
    TRAN     C        1024   4-09-84   1:47a
    UTILITES MAC     12160   4-09-84   1:40a
    VUE      EXE     11776   4-09-84   1:41a
    XENIX    ASM      7296   4-09-84   1:40a
           26 file(s)     157069 bytes
                               0 bytes free
