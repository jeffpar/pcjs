---
layout: page
title: "PC-SIG Diskette Library (Disk #2656)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2656/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2656"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2656.TXT

{% raw %}
```
Disk No: 2656                                                           
Disk Title: The SPELLBOUND! Spelling Tutor                              
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: The SPELLBOUND! Spelling Tutor                           
Author Version: 2.00                                                    
Author Registration: $15.00, $25.00, #35.00                             
Special Requirements: 384K RAM, CGA/VGA/EGA, DOS 3.0, and two floppy dri
                                                                        
THE SPELLBOUND! SPELLING TUTOR helps you improve your spelling skills,  
no matter what your grade level. It can even help adults learn to spell 
difficult words from a specialized field like law or medicine. For      
children, there are optional animated "smileys" who cheer the child on  
when a word is spelled properly, but shed tears when a word is          
misspelled.                                                             
                                                                        
SPELLBOUND! features word list creation, editing, viewing, and          
maintenance functions as well as a full battery of teaching tools like  
automatic grading and report generation.  As it teaches spelling, a     
personal "difficult word" list is created for each student.  An         
impressively simple user interface makes SPELLBOUND! a wise choice among
even the most popular commercial programs.                              
                                                                        
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
      +============================================================+
      | I N S T A L L A T I O N  --   2   F L O P P Y  S Y S T E M |
      +============================================================+

     (1.) Format two blank floppy diskettes in the following manner:
          Place your DOS diskette containing FORMAT.COM into drive A:
          and a blank diskette into drive B:. Type "A:FORMAT B:" press
          ENTER.  This will be your PROGRAM diskette.  When it is
          finished, format another diskette in the same way.  This
          will be your DATA diskette.

     (2.) Place the SPELLBOUND! diskette into drive A: and with the
          blank formatted PROGRAM diskette still in drive B:, do the
          following.  Type: "A:INSTALL" press ENTER, read all of the
          instructions and follow the prompts.  Both destination
          diskettes will be inserted into drive B: at the proper time.

     (3.) If everything went okay, your program is now ready to run!
          Place the PROGRAM diskette into drive A:, the DATA diskette
          (containing SPELL.WDS, SPELL.DOC, etc. into drive B:, type:
          "B:" (this will change you to drive B:) and then type:
          "SPELL" and press ENTER.
```
{% endraw %}

## GO1.TXT

{% raw %}
```
     +===============================================================+
     | I N S T A L L A T I O N  --   H A R D   O R   H D   D R I V E |
     +===============================================================+
 (1.) a: Type: "A:INSTALL" (without quotes) press ENTER.
      b: Read all of the instructions, and follow the prompts.  The INSTALL
      program can make some very necessary changes to AUTOEXEC.BAT and
      CONFIG.SYS for you, or you can make them yourself if you are leery
      of having installation programs mess with your system.  If you
      choose to have the program do it for you, the original copies of
      your programs will be backed up first, so the changes are reversible.
      If you have the program make these changes for you, then skip step (2.).

(2.) Add the  program directory to your PATH environment variable
     in AUTOEXEC.BAT or at the DOS prompt.  If you already have a
     PATH statement in AUTOEXEC.BAT, then append a semicolon
     before appending the directory. Example: PATH
     C:\DOS;C:\UTIL;C:\WP;C:\SPELL If there is no PATH statement
     in your AUTOEXEC.BAT file, then you must enter the
     following: (Assuming the PROGRAM files were installed in
     "C:\SPELL") PATH C:\SPELL The PATH environment variable tells DOS where
     to search for commands it cannot find in the current directory.  When
     you type "SPELL" from the DATA directory, DOS will not be able to find
     SPELL.EXE in the  current directory.  It will look through the
     directories listed in the PATH statement.
```
{% endraw %}

## GO2.TXT

{% raw %}
```



IMPORTANT!  If you have a hard drive system with a single
          High density drive, you will first have to install to a
          single directory on your hard drive, and then copy all the
          files from that directory to the diskette.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2656

     Volume in drive A has no label
     Directory of A:\

    ARCHIVE1        194117   1-03-91   5:00p
    ARCHIVE2         53416   1-03-91   5:00p
    GO       BAT        72   6-25-91   1:50a
    INSTALL  EXE     54923   1-03-91   5:00p
    README   1ST     12683   1-03-91   5:00p
    GO       TXT      1265   6-25-91   1:38a
    GO1      TXT      1581   6-25-91   1:46a
    GO2      TXT       257   6-25-91   1:51a
    FILE2656 TXT      2073   6-26-91   5:56p
    GO1      BAT       918   6-26-91   5:36p
           10 file(s)     321305 bytes
                           34816 bytes free
