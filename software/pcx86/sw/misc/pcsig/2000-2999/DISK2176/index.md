---
layout: page
title: "PC-SIG Library Disk #2176"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2176/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2176"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FORMATMASTER & COPYMASTER"

    FORMATMASTER exploits your 1.2MB high capacity 5.25" drive to get the
    most of your 360K low capacity floppies -- it formats them to 800K. It
    forces the BIOS to treat the disk more like a 1.2MB than a 360K. This
    nifty formatting trick doesn't make the disk any less reliable and the
    disk can be read by most other 1.2MB floppies -- even if
    they've never run FORMATMASTER.
    
    Technically, when formatting a 1.2MB disk in a high-capacity 1.2MB
    drive, the BIOS sets the head stepping to the single-step mode, sets
    the data transfer rate to 500Kb/sec, and formats at 15 sectors per
    track.  For a 360K floppy, the head stepping rate is normally double-
    step mode and the data transfer rate is usually 300Kb/sec.
    
    To format a low capacity 360K disk to 800K, FORMATMASTER forces BIOS to
    set the stepping rate to the single-step mode, the data transfer rate to
    300Kb/sec, and formats at 10 sectors per track.  Most modern AT/PS2-
    compatible BIOS have no problem adjusting to the non-standard format of
    the 800K disk, but there are exceptions.
    
    COPYMASTER is a file copy utility that makes file and disk copying
    fast, easy, and effective through the use of the following features:
    
    ~ Dual directory viewing of files
    
    ~ Batch tagging of files for copying
    
    ~ Move files across drives
    
    ~ Selectable date criteria for copying
    
    ~ Selectable file overwrite protection
    
    ~ CRC file copy verification
    
    ~ CRC disk copy verification
    
    ~ File encryption/decryption
    
    ~ Fast file search
    
    ~ Two-drive cyclic disk copying
    
    ~ File-by-file compare option
    
    ~ Disk Compare on 360K/720K/1.2MB/1.4MB
    
    ~ "Lotus"-style command menu
    
    ~ Pop-up data-entry windows.
    
    The program occupies approximately 150K RAM and will use expanded
    memory conforming to the LIM 3.2/4.0 Expanded Memory Specification
    (EMS), if available in the host machine.  COPYMASTER supports the use
    of a two or three button mouse.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #2176

     Volume in drive A has no label
     Directory of A:\

    FM330    EXE    161991   9-21-90  11:52a
    CM114    EXE     89615   9-22-89   2:20p
    FILE2176 TXT      5403  11-19-90  10:00a
    GO       BAT        28  11-13-90   9:23a
    GO       TXT       747  11-19-90  10:13a
            5 file(s)     257784 bytes
                           61440 bytes free
