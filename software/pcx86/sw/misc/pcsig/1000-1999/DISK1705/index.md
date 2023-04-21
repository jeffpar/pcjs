---
layout: page
title: "PC-SIG Diskette Library (Disk #1705)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1705/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1705"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "C-WINDOW TOOLKIT 2 OF 2 (1007 ALSO)"

    The "c_wndw" and "c_ndx" libraries are designed for both novice and
    intermediate C programmers who want full screen, color, cursor control,
    windowing abilities and relational database facilities without
    programming complex escape sequences or DOS-level interrupts.  They are
    designed for experienced programmers who need a set of fast I/O
    windowing and disk access functions.  A full set of file access
    functions are given that trap and handle all usual errors.
    
    The "c_wndw" library provides input and output windowing abilities that
    operate at professional speeds.  The output windowing facilities use
    memory mapping for instant screen display.  Full advantage is taken of
    color monitors, and automatic editing of entry and output fields id
    provided.  Pull-down and pop-up menu functions, help screens, and
    multi-layered windows provide a sophisticated user interface.
    
    The "c_ndx" library provides multiple B-tree access to data files and
    supports intelligent relational access to multiple data files via hashed
    random file access.  The database file is the familiar dBase standard,
    and the indexes are fully compatible with the dBase NDX format.
    
    With these libraries you can develop superior programs in C in less time
    than in the dBase language.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1705.TXT

{% raw %}
```
Disk No: 1705                                                           
Disk Title: C-Window Toolkit 2 of 2 (1007 also)                         
PC-SIG Version: S3                                                      
                                                                        
Program Title: C-Window Toolkit                                         
Author Version: 2.02                                                    
Author Registration: $35.00                                             
Special Requirements: A version of Turbo C or Microsom C.               
                                                                        
C-WNDW TOOLKIT is designed for both novice and intermediate C           
programmers who want full screen, color, cursor control, and windowing  
abilities without programming complex escape sequences or DOS-level     
interrupts.  It's also designed for experienced programmers who need a  
set of fast I/O windowing and disk access functions.  A full set of file
access functions are given that trap and handle all usual errors.       
Access is supported to ASCII, dBase III+, hashed random, and relative   
files.                                                                  
                                                                        
C-WNDW TOOLKIT provides input and output windowing abilities that       
operate at professional speeds.  The output windowing facilities use    
memory mapping for instant screen display.  They take full advantage of 
color monitors, and provide automatic editing of entry and output       
fields.  Pull-down and pop-up menu functions, help screens, and         
multi-layered windows provide a sophisticated user interface.           
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1705

     Volume in drive A has no label
     Directory of A:\

    COMPILE  MSC       768  10-04-89  11:00p
    C_NDX    H        5206   9-16-89   9:22p
    C_WNDW   H       12460   9-06-89   9:50p
    DATETEST C         668  11-25-89   9:00p
    DATETEST MAK       640  11-26-89   5:45p
    DBREAD   C        1023  11-25-89   9:17p
    DBREAD   MAK       640  11-26-89   5:53p
    DBUPDATE C        3950  11-26-89   1:57p
    DBUPDATE MAK       640  11-26-89   5:52p
    FILE1705 TXT      2221   1-12-90   3:58p
    GO       BAT        38   4-12-88   8:37a
    GO       TXT       540  12-11-89   2:48p
    HELLO    C         311  11-25-89   8:55p
    HELLO    MAK       640  11-26-89   5:46p
    MC_NDX   MSC     66048  10-01-89   6:25p
    MC_WNDW  MSC    120103  11-26-89   9:33p
    MENU     C         753  11-25-89  11:04p
    MENU     MAK       640  11-26-89   5:44p
    MESSAGE  C         839  11-25-89   9:05p
    MESSAGE  MAK       640  11-26-89   5:47p
    MONY     C        1211  11-25-89   9:56p
    MONY     MAK       640  11-26-89   5:51p
    QUICKC   BAT      1024  11-21-89  10:12p
    READFILE C        1071  11-25-89  10:29p
    READFILE MAK       640  11-26-89   5:46p
    WINDOW   C         858  11-25-89  10:06p
    WINDOW   MAK       640  11-26-89   5:42p
    WRITFILE C         879  11-26-89  10:23p
    WRITFILE MAK       640  11-26-89   5:40p
           29 file(s)     226371 bytes
                           82944 bytes free
