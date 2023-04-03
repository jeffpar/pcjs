---
layout: page
title: "PC-SIG Library Disk #962"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0962/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0962"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PDVIM, INDENT, AND SXU"

    INDENT is a C program formatter that reformats any C program in the
    input file according to the switches or command options.  Make your
    source code more readable and appear in an acceptable format.  The C
    source code for the main program is included so you can modify it to fit
    your exact needs.
    
    Programmers -- A utility for you called THE SELECT XTRAC UTILITY (SXU).
    SXU extracts selected sections of data files according to your
    specifications.  It accepts any standard ASCII sequential files composed
    of character or numerical data.
    
    The input file to SXU cannot have embedded control characters, except
    for normal print-control characters.  SXU reads the input data file and
    creates an output extract file with the data between your specified
    start and end strings in the input data file.
    
    SXU can extract data and append it to an already-existing extract file,
    and allows up to 32 different extracts from a single file at one time.
    On-line help and directions are included.
    File Descriptions:
    
    SXU      DAT  Test data.
    SXU      HLP  Help file.
    SXU      COM  Main program.
    
    PDVIM, is the shareware version of VIM (VIrtual Machine), an
    interpreter/debugger that can simulate and/or allow access to the
    hardware of an XT or AT in an addressing space independent of the normal
    hardware.
    
    This debugger can stop execution at any point, examine or alter memory
    or registers, examine the program, determine where the program has been,
    and much more.  Unlike DOS DEBUG and other debuggers, these functions
    are accomplished by a program outside the addressing space of the
    program or system under test, so VIM can never be altered or destroyed
    by the errant program.
    
    VIM also can trace DOS itself, or the ROMs, and set breakpoints within
    ROM or on data.  When a faulty interrupt code is reached, the breakpoint
    stops VIM, so the code can be traced and variables examined.  VIM's
    virtual approach allows it to debug programs that others can't,
    including terminate-and-stay-resident programs and device drivers.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk 0962

     Volume in drive A has no label
     Directory of A:\

    ARGS     C        9829  11-02-86  12:48a
    DOINDENT C       16651  11-02-86  12:51a
    DOPREESC C        3452  11-02-86  12:12a
    FILES962 TXT      3617  12-17-87   3:58p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1387   1-04-80   1:46a
    INDENT   C       24809  11-02-86  12:12a
    INDENT   EXE     37634  11-02-86   1:06a
    INDENT   MAN     13413  11-01-86   6:51a
    INDENT   PRO        47  11-02-86  12:17a
    INDENT_C H        1762  11-01-86   4:11a
    INDENT_G H       11395  11-02-86  12:08a
    INVOICE  DAT      1002   8-28-87   1:46p
    IO       C       13069  11-02-86  12:12a
    LEXI     C       13561  11-02-86  12:12a
    MAKEFILE          2117  11-02-86  12:53a
    PARSE    C        9257  11-02-86  12:12a
    PDVIM    EXE     81408   9-08-87   8:02a
    PR_COMME C       11689  11-02-86  12:12a
    READ     ME        475  11-01-86  10:01a
    README            4278   8-28-87   2:13p
    SXU      COM     19786  11-30-86   7:29p
    SXU      DAT      2462  11-23-86   4:09p
    SXU      HLP     13972   8-28-87   1:50p
           24 file(s)     297110 bytes
                           10240 bytes free
