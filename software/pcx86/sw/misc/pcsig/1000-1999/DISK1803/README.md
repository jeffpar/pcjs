---
layout: page
title: "PC-SIG Diskette Library (Disk #1803)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1803/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1803"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EZDOSS"

    It's a DOS shell that the novice will love for its menus and
    verification prompts. The experienced user will appreciate it for
    "quick key" command execution, "expert mode" to let the more
    experienced user work faster, and a unique operational design that
    provides faster disk access.
    
    One of the most annoying features of many DOS shells is each time a
    drive is selected, a time-consuming search for subdirectories takes
    place. With EZDOSS, this is greatly reduced by having the program
    create a disk file the first time it reads a hard disk. This disk file
    keeps track of where all the files are so when the drive is
    selected again, the disk file can be read faster without searching for
    subdirectories.
    
    The power of a DOS shell is realized through features like multiple
    file manipulation, precise "tagging" control by pattern, masking,
    viewing text files, and locating files in any subdirectory by name or
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1803.TXT

{% raw %}
```
Disk No: 1803                                                           
Disk Title: EZDoss                                                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: EzDoss                                                   
Author Version: 3.40                                                    
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
It's a DOS shell that the novice will love for its menus and            
verification prompts, yet the experienced user will appreciate for      
"Quick Key" command execution, "Expert Mode" to let the more experienced
user work faster, and a unique operational design that provides faster  
disk access.                                                            
                                                                        
One of the most annoying feature of many DOS shells is each time a drive
is selected a time-consuming search for subdirectories takes place. With
EZDOSS this is greatly reduced by having the program create a disk file 
the first time it reads a hard disk.  This disk file keeps track of     
where all the files are so when the drive is selected again, the disk   
file can be read faster than searching for subdirectories.              
                                                                        
The power of using a DOS shell is realized through features like        
multiple file manipulation, precise ``tagging'' control by pattern,     
masking, viewing text files, locating files in any subdirectory by name 
or part of their name, and there's even a built-in editor.              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #1803  EZDOSS  >>>>                          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: EZ                                              ║
║                                                                         ║
║ To print documentation, type: COPY MANUAL.DOC PRN                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1803

     Volume in drive A has no label
     Directory of A:\

    EZ       EXE    100425   7-05-89   3:42p
    EZEDITOR EXE     36368   2-14-89   3:58p
    EZLOCATE EXE     16000   4-18-89   9:32a
    FILE1803 TXT      2369  12-20-89   4:13p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   7:46a
    LIST     COM      9209   9-21-88   6:04a
    MANUAL   DOC    130757   6-01-89   1:26p
    README   COM      3939   5-15-89  10:13a
            9 file(s)     299645 bytes
                           18432 bytes free
