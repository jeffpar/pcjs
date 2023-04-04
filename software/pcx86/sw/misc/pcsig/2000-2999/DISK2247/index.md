---
layout: page
title: "PC-SIG Library Disk #2247"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2247/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2247"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "CBASE THE C DATABASE LIBRARY"

    This is a C database file management library.  Records may be accessed
    both randomly and sequentially through indexes stored in B+-trees.
    Records may also be accessed sequentially in the order in which they
    are stored.  Multiuser access is supported under any operating system
    with file locking capabilities.
    
    Designed to be extremely portable, it's written in strict adherence to
    the ANSI C standard and can still be used with the K&R C compilers. All
    system dependent code is isolated to make it easy to port to new
    operating systems.
    
    CBASE is actually made up of four individual libraries, each complete
    and independently accessible.  At its foundation is the block buffered
    I/O library which models a file as a collection of blocks made up of
    fields.  The linked sequential file library provides all the
    facilities necessary for the creation and manipulation of doubly-
    linked sequential files.  The btree library provides the same for B+-
    tree files.  The program's library uses the linked sequential file and
    btree libraries to perform all structured file management
    operations. The linked sequential library is used for record storage
    and the btree library is used for inverted file key storage.  Database
    size is limited only by available disk storage.
    
    CBASE comes complete with all source code, and a demo database is
    included to demonstrate its capabilities.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #2247

     Volume in drive A has no label
     Directory of A:\

    CBASE    RME      5970   1-08-90   2:55p
    CBASE10B ZIP    202769   1-08-90   2:51p
    CBUPDATE ZIP     23684   1-08-90   2:51p
    GO       BAT        37   6-21-90  10:39a
    GO       TXT      1079   6-23-90  12:19p
    FILE2247 TXT      2961   6-24-90   3:38p
            6 file(s)     236500 bytes
                           81920 bytes free
