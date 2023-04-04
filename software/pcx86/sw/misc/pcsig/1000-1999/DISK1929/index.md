---
layout: page
title: "PC-SIG Library Disk #1929"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1929/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1929"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GREP"

    GREP UTILITIES overcomes the limitations of the DOS wildcard expressions
    in matching files. They provide more power and flexibility with
    UNIX-like file searches, moves, and copies not possible with normal DOS.
    No longer are you limited to wildcards * and ?, now any number of letter
    and number combinations can be specified with ranges to search.
    
    Here are examples of GREP wildcard expressions: "A[0-9]+Z" matches all
    files starting with an "A", followed by a string of one or more digits,
    and then a "Z", such as A0Z.PAS, or A99Z.MAP. You can also do "negative
    searches" such as finding all files that don't start with the letter
    "A."
    
    Organizing files is made easier with GREP commands that search files
    using GREP wildcard expressions: "Grep Delete" uses a regular
    expression to select files for deletion. "Grep Grep" searches specified
    files for a text string. "Grep Move" is similar to Grep Copy, except
    that if the files are on the same drive, the file is not copied, but its
    directory entry is modified so that it is moved to the new subdirectory.
    "Grep Whereis" uses a regular expression to search for matching files
    in all subdirectories of the specified drive, or all drives. It
    includes an option to delete the files as they are matched. The GREP
    UTILITIES always prompt the user before overwriting or deleting an
    existing file, unless directed not to do so. Bundled with GREP
    UTILITIES are environment and path editors, and "Which.exe," a program
    that identifies executable files in the path.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1929

     Volume in drive A has no label
     Directory of A:\

    EDITENV  EXE     35978   4-14-89   4:32p
    EDITPATH EXE     36877   4-14-89   4:32p
    G        EXE     31472   3-22-90  10:06p
    GC       EXE     34064   3-22-90  10:06p
    GD       EXE     25888   3-22-90  10:06p
    GF       EXE      4240   3-19-89  11:30a
    GG       EXE     28288   3-22-90  10:05p
    GM       EXE     35264   3-22-90  10:06p
    GW       EXE     28448   3-22-90  10:06p
    WHICH    EXE     12057   1-31-90   3:59p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       575   1-01-80   1:48a
    FILE1929 TXT      2813   7-13-90  11:25p
           13 file(s)     276002 bytes
                           38912 bytes free
