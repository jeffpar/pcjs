---
layout: page
title: "PC-SIG Diskette Library (Disk #1539)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1539/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1539"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EISSENGER UTILITIES AND MORE"

    A passel of useful tools for Turbo Pascal programmers, as well as some
    batch utilities that do not require any programming language to use.
    Batch File Utilities:
    
    ~ PASTE -- Concatenates two files together line-by-line, butted together
    end-to-end.  A line from the second file is appended to the first file
    to make a longer line for the new file.
    
    ~ BLDBAT -- Creates a text file containing directory's filenames
    specified by a file masking parameter.  Similar to Unix's LS command to
    file.
    
    ~ MELD -- Merges two text files by interleaving lines of each file.  The
    new file receives a line from the first file, then a line from the
    second, then one from the first, etc..
    
    ~ PUTCURS -- Moves the cursor to a designated line on the screen.
    Extremely useful for batch file I/O.
    
    Pascal Utilities:
    
    ~ INDENT -- Reformats and standardizes PASCAL source files for indents
    and case.  Useful when two or more programmers with different writing
    styles work on code for a program.
    
    ~ EXTRACT -- Pulls out and prints the names of all procedures and
    functions along with all in-line comments from source files.  This is
    invaluable for documentation and cross-referencing.
    
    ~ SGCVERT -- For Screen Genie users, reveals how to take advantage of an
    undocumented feature in this popular window generator that permits the
    use of the Screen Genie work file as a screen in an object file or in a
    Turbo Pascal TPU unit.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1539

     Volume in drive A has no label
     Directory of A:\

    BLDBAT   EXE      6768   4-19-88   2:53p
    EXTRACT  EXE      8544   4-19-88   3:02p
    FILE1539 TXT      2243   8-29-89   9:18a
    GO       BAT        38   8-29-89   9:19a
    INDENT   EXE     13536   4-19-88   2:56p
    MELD     EXE      8368   4-19-88   2:57p
    PAGE     COM       325   1-06-87   4:21p
    PASTE    EXE      8224   4-19-88   2:57p
    PUTCURS  EXE      4592   4-19-88   2:58p
    README            1337   4-19-88   2:51p
    SGCVERT  EXE      6544   4-19-88   3:03p
    SGDISP   TPU       656   4-09-88   4:20p
    SGTEST   EXE      6304   4-19-88   2:59p
    TP4UTIL  SCN      4000   4-19-88   5:56p
    TP4UTIL  WRK      4008   4-19-88   5:55p
    UTIL     PRN     18948   4-19-88   5:18p
           16 file(s)      94435 bytes
                           61440 bytes free
