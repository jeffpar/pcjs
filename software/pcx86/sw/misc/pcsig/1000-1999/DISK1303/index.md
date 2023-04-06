---
layout: page
title: "PC-SIG Diskette Library (Disk #1303)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1303/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1303"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCROES AND PRN SET"

    SCRDES is a full-screen text/graphics editor designed to ease the coding
    of custom screens -- such as menu screens, data-entry forms and help
    screens -- into programs.  The editor was created for use with CGA and
    EGA, but will also function with a monochrome card, although with less
    distinctive effects.
    
    The program was designed primarily to produce binary files of the type
    ``character, attribute, character, attribute'' for inclusion in
    Assembly language programs, or to be read directly from a file to the
    screen buffer in a high-level language.  It will also produce ASCII
    text files of the form character, character, CR/LF, character,
    character, CR/LF (25 lines) suitable for use in interpreted languages
    such as BASIC or dBase III.
    
    PRNSET is a universal nonresident printer-setting program that takes its
    configuration information from a file, which you can make with any text
    editor.  This feature makes it possible to set the print control symbols
    for any printer and select and organize the instructions you want to
    have in PRNSET's repertoire.  It can operate interactively through a
    menu, from a batch file, or directly from the DOS command line.
    File Descriptions:
    
    PRNSET   EXE  The operating program.
    PRNSET   DOC  User's manual.
    PRNSET   DAT  The default data file. Set for Epson LQ-800.
    FX-80    DAT  Altenative data file for Epson FX-80 printer.
    FX-86    DAT  Data file for Epson FX-86e printer.
    IBM      DAT  Data file for IBM ``Graphics'' printer.
    LQ-800   DAT  Data file for Epson LQ-800 printer.
    OKI      DAT  Data file for Okidata 92 printer.
    XXXXXX   DAT  Other data files.  They name the printer they support.
    COUNTPGS EXE  Count the pages in a file before printing.
    COUNTPGS DOC  Documentation for COUNTPGS.
    E88      EXE  A simple ASCII text editor.
    E88      DOC  Documentation for E88.
    README        Instructions and file explanations.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1303

     Volume in drive A has no label
     Directory of A:\

    SAMPLE   INS       153   2-08-88   5:05p
    SAMPLE   SCR      4000   3-28-88   8:59a
    SCRDES   COM     60087   5-03-88  10:15a
    SCRDES   DOC     16586   5-06-88   8:55a
    FILE1303 TXT      3373   2-23-89   1:29p
    COUNTPGS DOC      3074   4-26-88  10:55p
    COUNTPGS EXE     14368   4-19-88   4:31p
    E88      DOC     86302   2-21-88   9:57p
    E88      EXE     20705   3-11-88   7:23p
    FX-80    DAT      1340   4-20-88  10:51p
    FX-86    DAT      1590   4-20-88  10:51p
    IBM      DAT      1108   4-20-88  10:51p
    LQ-800   DAT      1321   4-20-88  10:52p
    LX-86    DAT      1315   4-20-88  10:52p
    OKI      DAT      1634   4-20-88  10:55p
    PRNSET   DAT      1323   4-20-88  10:29p
    PRNSET   DOC     29473   3-20-88  10:52p
    PRNSET   EXE     39904   3-30-88  11:56p
    README            1254   4-26-88  10:45p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1618   2-21-89  11:07a
    MANUAL   BAT       147  12-15-88  12:39p
           22 file(s)     290713 bytes
                           17408 bytes free
