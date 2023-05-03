---
layout: page
title: "PC-SIG Diskette Library (Disk #2337)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2337/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2337"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC ASSEMBLER HELPER & TUTOR #1 (& 2338)"

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

## FILE2337.TXT

{% raw %}
```
Disk No: 2337                                                           
Disk Title: PC Assembler Helper & Tutor #1 (2338)                       
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

## GO.TXT

{% raw %}
```
  ╔═════════════════════════════════════════════════════════════════════════╗
  ║         <<<< PC-SIG #2337  PC ASSEMBLER HELPER & TUTOR #1 >>>>          ║
  ╠═════════════════════════════════════════════════════════════════════════╣
  ║  To read author's introductory note, type:  TYPE PCREADME.DOC (Enter)   ║
  ║                                                                         ║
  ║  To access author's installation instructions from the program drive,   ║
  ║                   type:  CD PCTUTOR (press Enter)                       ║
  ║                          DIR (press Enter)                              ║
  ║                          COPY UNPACK.DOC PRN (press Enter)              ║
  ║                                                                         ║
  ║                                                                         ║
  ║                                        (c) Copyright 1990, PC-SIG Inc.  ║
  ╚═════════════════════════════════════════════════════════════════════════╝



```
{% endraw %}

## UNPACK.DOC

{% raw %}
```



             This subdirectory contains compressed files which make up disk1,
             disk2 and disk3 of The PC Assembler Tutor. It no longer fits on 3
             disks so it is divided into 4 disks. Disk4 is included in this
             directory if you received this on a high-density disk. Otherwise
             it is on a separate disk.

             These files are self-extracting. You enter the name of a file on
             the command line, just as you would the name of a program.

               >disk1-A

             The program will start and unpack all the files into the current
             directory. Before starting, these programs will prompt you to
             make sure that you want to continue. Press N if you don't want to
             go on.

             Disk1 is divided into two parts:  DISK1-A and DISK1-B. This is so
             that DISK1-A, which contains the i/o interface program for the
             Tutor, may be electronically transmitted. You need to unpack both
             DISK1-A.COM and DISK1-B.EXE into the current directory and then
             run DISK1MAK.BAT (which is in DISK1-B.EXE). It is a batch file
             which will create subdirectories and put all the files in their
             proper subdirectories.

             In order to use DISK1MAK.BAT, you need to put an empty, formatted
             DSDD (or larger) disk in a drive and give the batch file the name
             of the drive:

               >disk1mak  a:

             disk1mak will copy the files from the current directory to the
             specified drive. You must give a drive specification.

             Disks 2, 3 (and 4) need no subdirectories. They are the chapters
             of the Tutor. You may unpack them directly to floppy disk. Just
             use an empty formatted disk and make the floppy disk drive the
             current directory.

             The list of all files is in FILELIST.DOC which is in the
             \COMMENTS subdirectory of disk1. You start doing the Tutor by
             reading INTRO1.DOC and INTRO2.DOC and then doing the chapters
             starting with chapter 0.

```
{% endraw %}

## UNPACK.DOC

{% raw %}
```



             This subdirectory contains compressed files which make up disk1,
             disk2 and disk3 of The PC Assembler Tutor. It no longer fits on 3
             disks so it is divided into 4 disks. Disk4 is included in this
             directory if you received this on a high-density disk. Otherwise
             it is on a separate disk.

             These files are self-extracting. You enter the name of a file on
             the command line, just as you would the name of a program.

               >disk1-A

             The program will start and unpack all the files into the current
             directory. Before starting, these programs will prompt you to
             make sure that you want to continue. Press N if you don't want to
             go on.

             Disk1 is divided into two parts:  DISK1-A and DISK1-B. This is so
             that DISK1-A, which contains the i/o interface program for the
             Tutor, may be electronically transmitted. You need to unpack both
             DISK1-A.COM and DISK1-B.EXE into the current directory and then
             run DISK1MAK.BAT (which is in DISK1-B.EXE). It is a batch file
             which will create subdirectories and put all the files in their
             proper subdirectories.

             In order to use DISK1MAK.BAT, you need to put an empty, formatted
             DSDD (or larger) disk in a drive and give the batch file the name
             of the drive:

               >disk1mak  a:

             disk1mak will copy the files from the current directory to the
             specified drive. You must give a drive specification.

             Disks 2, 3 (and 4) need no subdirectories. They are the chapters
             of the Tutor. You may unpack them directly to floppy disk. Just
             use an empty formatted disk and make the floppy disk drive the
             current directory.

             The list of all files is in FILELIST.DOC which is in the
             \COMMENTS subdirectory of disk1. You start doing the Tutor by
             reading INTRO1.DOC and INTRO2.DOC and then doing the chapters
             starting with chapter 0.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2337

     Volume in drive A has no label
     Directory of A:\

    PCREADME DOC      1369   8-12-90   8:33a
    GO       BAT        36  10-05-90   1:52a
    GO       TXT      1034  10-05-90   2:10a
    FILE2337 TXT      3183  10-05-90  12:39p
    PCTUTOR      <DIR>    
            5 file(s)       5622 bytes

     Directory of A:\PCTUTOR

    .            <DIR>    
    ..           <DIR>    
    UNPACK   DOC      2213   8-13-90   7:01p
    DISK1-A  COM     25872   8-13-90  11:36a
    DISK1-B  EXE     76299   8-13-90   6:39p
    DISK2    EXE    110530   8-12-90  10:36p
    DISK3    EXE     96348   8-11-90   7:38p
            7 file(s)     311262 bytes

    Total files listed:
           12 file(s)     316884 bytes
                           37888 bytes free
