---
layout: page
title: "PC-SIG Diskette Library (Disk #2346)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2346/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2346"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "TEXTOUT, CONVDW, & TEXTCON"

    TEXTOUT/5 converts WordPerfect 5.0 and 5.1 document files to ASCII.
    
    It improves upon WordPerfect's Text Out command, in both DOS Text and
    generic word processing formats.  TEXTOUT/5 translates the entire
    document, including text, captions and equations from graphics boxes,
    as well as footnotes and endnotes -- all items that WordPerfect
    ignores.  TEXTOUT/5 can mark certain font attributes, such as
    underlining, in the ASCII file by using special characters.  This is
    useful if you want to transfer the ASCII file to another word
    processor and restore the attributes.
    
    CONVDW converts IBM DisplayWrite 3 & 4 document files to ASCII.
    
    IBM does not publish the file format for DisplayWrite, so CONVDW is one
    of the very few programs that can read DisplayWrite files.  Create
    files that omit the soft returns and retain the tab characters.  This
    format, very useful for importing to another word processor, is not
    available from within DisplayWrite.
    
    CONVDW omits most page-formatting characteristics.  For example, the
    left margin is not expanded to spaces, the top and bottom margins are
    not expanded to blank lines, and page breaks, headers, footers, and
    page numbering are omitted.
    
    TEXTCON allows you to import ASCII files into your word processor
    without having to manually delete carriage returns, remove extra
    spaces, and generally reformat your documents.
    
    Files can be imported with accurate paragraph breaks due to TEXTCON's
    intelligent paragraph recognition algorithms.  No more manual deletion
    of hard returns.  TEXTCON even works with difficult formats, such as
    fully nested, outline style and hanging indents.  TEXTCON also removes
    excess spaces, blank lines, and headers and footers.  TEXTCON can
    accept any form of ASCII file, including those transferred from
    Macintosh or UNIX, as well as WordStar.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #2346

     Volume in drive A has no label
     Directory of A:\

    TEXTCON  ZIP     41706   1-21-90  11:49a
    TEXTOUT5 ZIP     26862   1-17-90   6:06p
    CONVDW   ZIP     19941   1-21-90  12:10p
    GO       TXT      1385  10-05-90   1:41a
    GO       BAT        40   1-01-80   6:00a
    FILE2346 TXT      3997  10-05-90   9:12a
            6 file(s)      93931 bytes
                           65024 bytes free
