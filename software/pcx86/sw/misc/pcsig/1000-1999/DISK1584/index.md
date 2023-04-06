---
layout: page
title: "PC-SIG Diskette Library (Disk #1584)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1584/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1584"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FC AND FCDOC"

    FCDOC is a file comparison utility that compares English
    documents and lists the differences between them, sentence by sentence.
    The program lists the changes applied to the first file to make the
    second file. The output listing can be put in a third output file, or
    displayed on the screen. Output to the screen can be controlled
    interactively; e.g., show next screen, show next line, scroll
    continuously, etc.
    
    FCDOC works with any file that contains up to 16,300 sentences of ASCII
    English text. FCDOC ignores non-printable characters and white space
    when comparing sentences, so only differences in the content of the
    document are shown.
    
    FCDOC always find a minimal list of differences (smallest number of
    lines or sentences deleted or added), and never misses matching
    sentences.
    
    FC compares ASCII text files and lists the differences between
    them line by line. FC provides the following benefits:
    
    ~ shows word by word differences between lines that
    have changed.
    
    ~ helps "C" programmers merge program changes. FC can compare two "C"
    programs containing separate sets of changes, and combine them
    automatically to make a single program.
    
    ~ lets you do multiple comparisons in one run. Wildcards can be used to
    specify groups of files to compare.
    
    ~ can ignore white space changes. This is useful when you want to ignore
    format changes in "C" programs or other text.
    
    ~ never gets confused or "unsynchronized" (as some comparison programs
    can).
    
    ~ always finds the smallest set of differences between files, and never
    misses matching lines.
    
    ~ lets you list changes in ways that make sense to you by providing
    multiple display options. You can also customize FC to use your favorite
    options automatically.
    
    ~ The difference listing can be put in a third output file, or displayed
    on the screen. Output to the screen can be controlled interactively;
    e.g.; show next screen, show next line, scroll continuously, etc.
    
    FC works with any ASCII text file that contains up to 16,300 lines.
    Non-ASCII characters (e.g., line drawing characters) are handled
    correctly too.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1584

     Volume in drive A has no label
     Directory of A:\

    LETTER            2459   6-12-90   8:27p
    FC       DOC     28805   6-05-90
    FC       EXE     45350   6-05-90
    FCDOC    DOC     24316   6-05-90
    FCDOC    EXE     46512   6-05-90
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       883   7-09-90   3:20a
    FILE1584 TXT      5403   7-10-90   2:20p
            8 file(s)     153766 bytes
                            4608 bytes free
