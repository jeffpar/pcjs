---
layout: page
title: "PC-SIG Library Disk #1122"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1122/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1122"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BLACK MAGIC 3 OF 3 (ALSO 1120, 1121)"

    Wordprocessors, databases and spreadsheets all manipulate and structure
    information in specific, but different ways.  Hypertext systems, such as
    BLACK MAGIC, enable you to expand information in another way -- by
    dynamically linking keywords, graphics and blocks of information to one
    another.
    
    For example, you are creating a document and need to define a concept or
    word but the detail of the definition would distract the reader from the
    main text.  You can tag a keyword that will indicate that the definition
    is available.  An area of the screen opens and you type the definition
    or explanation.  To explore the definition, the user triggers the tag
    and the reference is displayed.  This is a simple illustration of
    hypertext.
    
    BLACK MAGIC can shell to DOS, and link and transfer information between
    hypertext and other applications.  Build context-sensitive help systems,
    link specific items in text documents to technical drawings or
    illustrations and expand obscure references with detailed explanations.
    A screen grabber has been added to integrate graphics into BLACK MAGIC.
    The extended ASCII character set is supported for the use of
    international characters.
    
    If you are currently using a document generator for live electronic
    documents such as:  computer-based training guides, foreign language
    tutorials, interactive catalogs, or educational courseware, then you
    should be moving over to BLACK MAGIC hypertext writing.  You will find
    BLACK MAGIC to be more than you ever imagined.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BITSTRIP.BAS

```bas
100 PRINT CHR$(12)
110 PRINT"bitstrip"
120 INPUT "enter name of input file - ";F1$
130 INPUT "enter name of output file - ";F2$
140 OPEN F1$ FOR INPUT AS #1 LEN=512
150 OPEN F2$ FOR OUTPUT AS #2 LEN=512
160 IF EOF(1) THEN END
170 N=(ASC(INPUT$(1,#1)) AND 127)
180 IF N<10 OR (N>13 AND N<20) THEN 160
190 PRINT #2,CHR$(N);
200 PRINT CHR$(N);
210 GOTO 160
```

## FIXTABS.BAS

```bas
110 PRINT "RemoveTab"
120 INPUT "enter name of input file - ";F1$
130 INPUT "enter name of output file - ";F2$
140 OPEN F1$ FOR INPUT AS #1 LEN=512
150 OPEN F2$ FOR OUTPUT AS #2 LEN=512
160 IF EOF(1) THEN END
170 N=(ASC(INPUT$(1,#1)) AND 127)
180 IF N=9 THEN N = 32          ' Replace Tabs with Spaces
190 PRINT #2,CHR$(N);
200 PRINT CHR$(N);
210 GOTO 160
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1122

     Volume in drive A has no label
     Directory of A:\

    BITSTRIP BAS       367  11-02-89   1:14p
    COLLAT   MGR      7808  11-02-89   1:14p
    CONVERT  COM     15031  11-02-89   1:14p
    FILE1122 TXT      1859   3-26-90  11:44p
    FIXTABS  BAS       367  11-02-89   1:14p
    GO       BAT        38   7-25-88   9:04a
    GO       TXT       463   7-25-88  12:45p
    GRABIT   COM     26903  11-02-89   1:14p
    HOWTO    MAG     45440  11-02-89   1:14p
    INTRO2   TXT      3904  11-02-89   1:14p
    MAGIC    MGR     33920  11-02-89   1:14p
    MANUAL   ARC    127992  11-02-89   1:14p
    README   DOC     18416  11-02-89   1:14p
    SAMPLE   TXT     10037  11-02-89   1:14p
           14 file(s)     292545 bytes
                           23552 bytes free
