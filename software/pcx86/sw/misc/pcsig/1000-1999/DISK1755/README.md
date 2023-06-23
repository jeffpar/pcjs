---
layout: page
title: "PC-SIG Diskette Library (Disk #1755)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1755/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1755"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "UTILITIES #2"

    For those who program lots of batch commands, FUGUE UTILITIES #2 brings
    a disk full of helpful tools including a file editor and a memory
    resident DOS handler. This assemblage of eleven programs will make your
    programming day easier.
    
    ~ ACCEPT takes a string as a parameter and appends the accepted
    information to the end of a string for display or redirection.
    
    ~ ASK is similar to ACCEPT but is more suited to building a menu system
    from batching.
    
    ~ YESNO is similar to ASK except it accepts only the letters Y, y, N, or
    n.
    
    ~ BEEP emits a half second beep to alert you when a long job is
    finished.
    
    ~ EDITENV helps set an environment variable from a batch file.
    
    ~ XQT lets you run nests of batch files within other batch files.
    
    ~ EXCLUDE will exclude a list of files from any command by setting
    hidden bits.
    
    ~ RENAMED changes the name of a directory without the need to move files
    out of it, delete it and set it up again under a new name.
    
    ~ SYSDATE remembers the last date you booted and is for those without
    battery-backed clocks.
    
    ~ DOSH is a memory resident DOS handler that keeps a circular queue of
    commands and makes them available via arrow commands.
    
    ~ ED is a simple editor with WordStar-like commands which handles ASCII
    files up to 64K with one window.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1755.TXT

{% raw %}
```
Disk No: 1755                                                           
Disk Title: Utilities #2                                                
PC-SIG Version: S1                                                      
                                                                        
Program Title: Utilities #2                                             
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
For those who program lots of batch commands, FUGUE UTILITIES #2 brings 
a disk full of helpful tools including a file editor and a memory       
resident DOS handler.  This assemblage of eleven programs will make your
programming day easier.                                                 
                                                                        
ACCEPT takes a string as a parameter and appends the accepted           
information to the end of a string for display or redirection.          
                                                                        
ASK is similar to ACCEPT but is more suited to building a menu system   
from batching.                                                          
                                                                        
YESNO is similar to ASK except it accepts only the letters Y,y,N or n.  
                                                                        
BEEP emits a half second beep to alert you when a long job is finished. 
                                                                        
EDITENV helps set an environment variable from a batch file.            
                                                                        
XQT lets you run nests of batch files within other batch files.         
                                                                        
EXCLUDE will exclude a list of files from any command by setting hidden 
bits.                                                                   
                                                                        
RENAMED changes the name of a directory without the need to move files  
out of it, delete it and set it up again under a new name.              
                                                                        
SYSDATE remembers the last date you booted and is for those without     
battery-backed clocks.                                                  
                                                                        
DOSH is a memory resident DOS handler that keeps a circular queue of    
commands and makes them available via arrow commands.                   
                                                                        
ED is a simple editor with WORDSTAR-like commands which handles ASCII   
files up to 64k with one window.                                        
                                                                        
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
║                 <<<<  Disk #1755  UTILITIES #2  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print documentation, type: COPY READ.ME PRN                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## REGIST.TXT

{% raw %}
```
To:

David J Noakes,
P.O. Box 942
WODEN   ACT   2606
AUSTRALIA


From:
___________________________________________________
___________________________________________________
___________________________________________________
___________________________________________________


[ ] I enclose $25 for registration as a user of Fugue Utilities #2

[ ] Please bill my MASTERCARD


           ACCT NO _______________________________________
           EXPIRY DATE _____________

           SIGNED ________________________________________
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1755

     Volume in drive A has no label
     Directory of A:\

    ACCEPT   COM        80   6-05-86  11:00p
    ASK      EXE       646   7-16-88  12:52a
    BEEP     COM        16   1-21-85   3:00p
    DOSH     COM      2310   5-30-88  10:19p
    ED       EXE     25872   8-30-88  11:01p
    ED       HLP      4525   8-30-88  11:27p
    EDITENV  EXE     13296   8-18-88   3:16p
    EXCLUDE  COM       746   6-30-87  10:44p
    FILE1755 TXT      3479  12-19-89  11:14a
    GO       BAT        11  10-12-88   3:19p
    GO       TXT       386   1-01-80   2:32a
    GO1      BAT        38   1-01-80   1:37a
    READ     ME      15028  10-12-88   3:24p
    REGIST   TXT       562  10-12-88   3:06p
    RENAMED  COM       208   6-26-85   9:22p
    SYSDATE  COM       512   8-30-88   3:05p
    XQT      EXE      7520   7-30-88   9:10p
    YESNO    EXE       725   1-01-80  12:27a
           18 file(s)      75960 bytes
                           79360 bytes free
