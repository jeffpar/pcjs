---
layout: page
title: "PC-SIG Diskette Library (Disk #2338)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2338/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2338"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC ASSEMBLER HELPER & TUTOR #2 (& 2337)"

    The PC ASSEMBLER TUTOR is an assembler tutorial that covers all 8086
    instructions.  Starting with the simplest instructions, it works its
    way through the whole instruction set.  TUTOR also covers details of
    the hardware involved with the 8086.
    
    The PC ASSEMBLER HELPER (ASMHELP.OBJ) is an object file which does I/O
    for assembler-level routines. It also displays the 8086 registers and
    flags, if desired, and allows each arithmetic register to be
    independently formatted.
    
    The intended users are people who are already competent programmers in
    a high-level language and either are just starting to learn assembler,
    or know fewer than 60% of the assembler mnemonics and want to learn
    more. TUTOR assumes that the user has a general knowledge of the DOS
    commands, subdirectory structure, and pathnames. It is also helpful if
    the user has already linked object modules to form an executable file.
    
    This is the only manual on the market that systematically covers the
    assembler mnemonics system, allows easy input and output of data at the
    assembler level, and allows you to see the arithmetic registers in the
    way they are being used.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2338.TXT

{% raw %}
```
Disk No: 2338                                                           
Disk Title: PC Assembler Helper & Tutor #2 (& 2337)                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: The PC Assembler Help & Tutor                            
Author Registration: None                                               
Special Requirements: None.                                             
                                                                        
The PC Assembler Tutor is an assembler tutorial that covers all 8086    
instructions. It starts with the simplest instructions and works its way
through the whole instruction set. It also covers details of the        
hardware involved with the 8086.                                        
                                                                        
The PC Assembler Helper (ASMHELP.OBJ) is an object file which does i/o  
for assembler level routines. It also displays the 8086 registers and   
flags (if desired) and allows each arithmetic register to be            
independently formatted.                                                
                                                                        
The intended users are people who already are competent programmers in a
high-level language and either are just starting to learn assembler or  
know fewer than 2/3 of the assembler mnemonics and want to learn more   
about assembler. The Tutor assumes that the user has a general knowledge
of the DOS commands, subdirectory structure and pathnames. It is helpful
if the user has already linked object modules to form an executable     
file.                                                                   
                                                                        
This is the only manual on the market which:                            
                                                                        
~ covers the assembler mnemonics systematically and thoroughly.         
                                                                        
~ allows easy input and output of data at the assembler level.          
                                                                        
~ allows you to see the arithmetic registers in the way they are being  
used.                                                                   
                                                                        
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## UNPACK.DOC

{% raw %}
```



             This subdirectory contains a compressed file which makes up disk4
             of The PC Assembler Tutor. The Tutor no longer fits on 3 disks so
             it is divided to make 4 disks.

             This file is self-extracting. You enter the name of a file on the
             command line, just as you would the name of a program.

               >disk4

             The program will start and unpack all the files into the current
             directory. Before starting, the program will prompt you to make
             sure that you want to continue. Press N if you don't want to go
             on.

             You may unpack it directly to floppy disk. Just use an empty
             formatted disk and make the floppy disk drive the current
             directory.

             The list of all files is in FILELIST.DOC which is in the
             \COMMENTS subdirectory of disk1. You start doing the Tutor by
             reading INTRO1.DOC and INTRO2.DOC and then doing the chapters
             starting with chapter 0.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2338

     Volume in drive A has no label
     Directory of A:\

    PCREADME DOC      1373   8-13-90   2:53p
    BLOAD    COM      6220   8-06-90   7:09a
    GO       BAT        36  10-05-90   1:52a
    FILE2338 TXT      3183  10-05-90   1:19p
    GO       TXT      1587  10-05-90   3:03a
    UNPACK   DOC      1082   8-13-90   1:18p
    DISK4    EXE     80308   8-11-90   5:42p
            7 file(s)      93789 bytes
                           64000 bytes free
