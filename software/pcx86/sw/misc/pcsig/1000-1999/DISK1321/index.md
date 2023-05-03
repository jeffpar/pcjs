---
layout: page
title: "PC-SIG Diskette Library (Disk #1321)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1321/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1321"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO PASCAL UTILITIES, STUDENT PASCAL"

    The package consists of a Pascal to p-code translator and a p-code
    interpreter.  The translator accepts standard Pascal programs with C
    masking and shifting extensions and produces text assembly language
    files that the interpreter program executes directly.
    
    Programs can be compiled from a user's text file or directly one line at
    a time from the keyboard (keyboard input allows only the current line to
    be edited).  This introductory version allows seven files to be open at
    a time, limits sets to 64 members, and allows string constants of up to
    80 characters.
    
    The PORTABLE PASCAL COMPILER offers students a limited compiler that is
    an effective learning tool.
    
    The current package consists of a compiler and p-code interpreter.
    Compile code from a file or directly from the keyboard.  However, when
    compiling from the keyboard you can edit only the current line.  Sets
    are limited to 64 members and strings to 11 characters.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1321.TXT

{% raw %}
```
Disk No: 1321                                                           
Disk Title: Turbo Pascal Utilities, Student Pascal                      
PC-SIG Version: S2.1                                                    
                                                                        
Program Title: P-Pascal Translator                                      
Author Version: 3.8                                                     
Author Registration: $50.00                                             
Special Requirements: Turbo Pascal 4.0 or 5.0                           
                                                                        
The package consists of a Pascal to p-code translator and a p-code      
interpreter.  The translator accepts standard Pascal programs with C    
masking and shifting extensions and produces text assembly language     
files that the interpreter program executes directly.                   
                                                                        
Programs can be compiled from a user's text file or directly one line at
a time from the keyboard (keyboard input allows only the current line to
be edited).  This introductory version allows seven files to be open at 
a time, limits sets to 64 members, and allows string constants of up to 
80 characters.                                                          
Program Title: Student Pascal                                           
Author Version: 2.3                                                     
Author Registration: $25.00                                             
Special Requirements: Turbo Pascal V4.0                                 
                                                                        
The PORTABLE PASCAL COMPILER offers students a limited compiler that is 
an effective learning tool.                                             
                                                                        
The current package consists of a compiler and p-code interpreter.      
Compile code from a file or directly from the keyboard.  However, when  
compiling from the keyboard you can edit only the current line.  Sets   
are limited to 64 members and strings to 11 characters.                 
                                                                        
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
║  <<<<  PC-SIG Disk #1321  TURBO PASCAL UTILS and STUDENT PASCAL   >>>>  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print documentation for P_PASCAL TRANSLATOR/INTERPRETER, type:       ║
║                    COPY READ.ME PRN (press Enter)                       ║
║                                                                         ║
║ To view author's comments for STUDENT PASCAL, type:  TYPE README (Enter)║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1321

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        40   1-01-80   6:00a
    GO       TXT       848   1-01-80   6:58a
    FILE1321 TXT      2739   9-19-90   3:48p
    DO       BAT       428   6-15-90  12:56a
    PC_SIG   NOT      1592   6-15-90   1:18a
    READ     ME      20959   6-02-90  12:39a
    P_PASCAL     <DIR>    
    SAMPLES      <DIR>    
            8 file(s)      26606 bytes

     Directory of A:\P_PASCAL

    .            <DIR>    
    ..           <DIR>    
    INTERPRE EXE     48830   6-01-90  12:31a
    TRANSLAT EXE     57012   6-15-90  12:50a
    DO       BAT       428   6-15-90  12:56a
            5 file(s)     106270 bytes

     Directory of A:\SAMPLES

    .            <DIR>    
    ..           <DIR>    
    SETS     PAS       800   9-19-89   1:03a
    HELLO    PAS       108   4-21-89  12:53a
    GCD      PAS       417   4-25-89  12:56a
    MAX      PAS       277   4-22-89  12:02a
    RECRSVIO PAS       922   1-28-90  12:26a
    STRINGS  PAS      1268   2-14-90  12:10a
    RANGE    PAS      1037   4-22-89  12:33a
    PRIMES   PAS       428   5-03-89  12:26a
    FACTORIA PAS      1630  10-31-89  12:20a
    SINES    PAS       235   4-22-89  12:37a
    LISTTEST PAS      2021  10-15-89  12:24a
    YESNO    PAS      1127   2-12-90  12:40a
    PI       PAS      2543   5-03-89  12:14a
    PRIMES   EXE     11694   6-02-89  12:04a
    FILECOPY PAS       718   6-15-90  12:16a
    READINT  P         630  11-19-89  12:29a
    COM1PORT PAS       658   5-06-89   1:01a
    MASKSHFT PAS       956   2-09-90  12:36a
    FACT1    P         242  11-19-89  12:28a
    FACT2    P         162  11-19-89  12:48a
    TRUEFALS PAS      1359  11-25-89  12:04a
    NEWTEST  PAS      2758  10-18-89  12:46a
    PI       EXE     17206  11-14-89  12:32a
    VPACK    P        1069  11-25-89   1:31a
    VUNPACK  P        1125  11-25-89   1:32a
    FILEPTRS PAS       932   6-15-90   2:15a
    PRFNPARM PAS       921   3-10-90  12:57a
    COMPLEX  PAS       766   4-02-90   1:47a
    PRINTLPT PAS      2709   5-16-90  12:16a
    FILRECRD PAS      1644   4-27-90  12:12a
           32 file(s)      58362 bytes

    Total files listed:
           45 file(s)     191238 bytes
                          109568 bytes free
