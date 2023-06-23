---
layout: page
title: "PC-SIG Diskette Library (Disk #43)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0043/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0043"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "EXIDY WORD PROCESSOR"

    Exidy is a full featured text editor with the flexibility of up to
    four active screen windows and the sophistication to directly access
    the buffers prior to saving the text in a disk file.  Exidy commands
    are invoked by either the function keys or with the use of the ALT key
    plus a keyboard key easily associated with the desired function, such
    as ALT-I to Insert a line.  While Exidy has the lean feel of a text
    editor, it includes a few key word processing features allowing for
    credible but simple word processing.
    
    Features:
    
    ~  Split screen into as many as 4 windows
    ~  Reformatting of specified lines
    ~  On screen help
    ~  Cursor move by line numbers
    ~  Bold/Underline/Extended ASCII character set
    
    How to Start:  For directions, consult the HELP.EDX text file.  To
    run it, at the DOS prompt type "EXIDY"<ENTER>.
    
    File Descriptions:
    
    EDIX     EXE  Program to run
    TEXT          Sample text
    GRADUATE BAT  Used to turn off tutorial mode
    STUDENT  BAT  Used to turn on tutorial mode
    EXELOAD  EXE  Part of Exidy system
    ????     EDX  Exidy text, help, and config files
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0043

     Volume in drive A has no label
     Directory of A:\

    CONFIG   EDX       512   2-10-84   1:44p
    EDIX     EXE     67691   3-12-84  10:20a
    EXELOAD  EXE      1676   3-01-84   1:38p
    GRADUATE BAT       287   4-15-83   5:16p
    HELP     EDX     14848   2-10-84  10:34a
    KEYCODES EDX      3072   2-10-84  10:45a
    LSN      EDX     17920   2-13-84   9:17a
    LSNCFG   EDX       455   4-18-83   4:26p
    STUDENT  BAT        15   4-15-83   5:11p
    TEXT              1671   5-18-82
           10 file(s)     108147 bytes
                           50176 bytes free
