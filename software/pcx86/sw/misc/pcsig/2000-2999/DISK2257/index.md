---
layout: page
title: "PC-SIG Diskette Library (Disk #2257)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2257/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2257"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO-SCREEN SYSTEM"

    A tool for Turbo Pascal programmers who wish to develop screen I/O
    procedures quickly, TURBO SCREEN SYSTEM generates source code directly
    from ``screen panel'' files which you can design.  The generated code
    will handle field editing, cursor movement, placement of messages and
    prompts, and passing field values to appropriate variables within the
    program.  In addition to the application code, sample code for calling
    the generated procedures is also created.  This makes integration into
    your main program easier.
    
    Screen panels conform to the Common User Access terminology (IBM SAA)
    that some programmers may already be familiar with, but is intuitively
    logical if they are not.  Using this program will virtually eliminate
    common development bugs and help a programmer maintain consistent
    standards throughout all applications.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2257.TXT

{% raw %}
```
Disk No: 2257                                                           
Disk Title: Turbo-Screen System                                         
PC-SIG Version: S1                                                      
                                                                        
Program Title: Turbo-Screen System                                      
Author Version: 1.0                                                     
Author Registration: $33.00                                             
Special Requirements: Turbo Pascal 4.0 (or greater).                    
                                                                        
A tool for Turbo Pascal programmers who wish to develop screen I/O      
procedures quickly, TURBO SCREEN SYSTEM generates source code directly  
from "screen panel" files which you can design.  The generated code will
handle field editing, cursor movement, placement of messages and        
prompts, and passing field values to appropriate variables within the   
program.  In addition to the application code, sample code for calling  
the generated procedures is also created to make integration into your  
main program easier.                                                    
                                                                        
Screen panels conform to the Common User Access terminology (IBM SAA)   
that some programmers may already be familiar with, but is intuitively  
logical if they are not.  Using this program will virtually eliminate   
common development bugs and help a programmer maintain consistent       
standards throughout all applications.                                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```
The Turbo-Screen System, by THE CONNELLY BROTHERS, is a utility package
that builds Screen Panels to support programs written with Borland's
Turbo Pascal Versions 4.0 or 5.0.  For more information concerning
installation and use, please read the file called TSS.MAN which is The
Turbo-Screen System Documentation and User's Manual.

Turbo-Screen was conceived as a means to get programs running quickly
while spending minimum time developing the screen panels for those
programs.  Turbo-Screen generates Pascal code that performs the Common
User Access for your application code.  Common User Access (CUA) is
terminology used by the IBM Systems Application Architecture (SAA).
Even though Pascal is not a language that is accepted within SAA, we
have tried to keep our general terminolgy compatible with the concepts
and terminology of SAA.

The Turbo-Screen System (Hereinafter called TSS) was developed to allow
the easy definition and implementation of screen panels.  Implementation
requires the TSS abilities to:

1. Locate and place messages, and Entry or Menu panel variables (fields
to be editted or chosen) on the screen.

2. Control the editing of the panel fields through the positioning of a
cursor with Cursor-Movement/Editing functions (called Key-Functions).

3. Pass the panel field values to variables within the main program.

The TSS System contains a CODE GENERATING PROGRAM program that generates
Pascal procedures that interface your Menu Design (through a Menu Design
File that you build) into a main Pascal program. The Turbo-Screen System
also produces sample test code as an example of menu inclusion in a main
program.  This test code allows the user to quickly test menu and entry
panel ideas.
------------------ -----------------------------------------------------
FILE               DESCRIPTION
------------------ -----------------------------------------------------

TSS.MAN            The Turbo-Screen System Documentation and User's
                   Manual.

ENTRY.PAN          Entry Panel Design Example File.
ENTRY.PAS          Entry Panel Example Program Source Code.
MENU.PAN           Menu Panel Design Example File.
MENU.PAS           Menu Panel Example Program Source Code.
SPECKEYS.H         Special Keys description file.
SWAPTPU.BAT        Swaps TPU libraries from Version 5.0 to 4.0 and
                   vice versa.  This batch file will rename files
                   on the diskette.
TSS.DEF            TSS Definition File

TSSINST.EXE        The Turbo-Screen System Installation Program.
                   This program helps the user to install
                   The Turbo-Screen System.
TSSINST.HLP        Help File used by TSSINST.EXE.

TSSLIB04.TPU       Screen Panel Support Library-Turbo Pascal Vers 4.0.
TSSLIB.TPU         Screen Panel Support Library-Turbo Pascal Vers 5.0.

TSS.EXE            Code generating program.
                   This program uses Panel Design files to create User
                   Access Code for Pascal programs written using
                   Borland's Turbo Pascal Compilers of Version 4.0.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2257

     Volume in drive A has no label
     Directory of A:\

    TSS      EXE     68976   2-16-89   1:09a
    TSSLIB   TPU     49088   2-16-89   1:08a
    ENTRY    PAN       663  12-12-88   3:15a
    ENTRY    PAS       543   2-17-89  12:25a
    FILES    TXT      3151   2-16-89   1:16a
    MENU     PAN       783   2-17-89  12:27a
    MENU     PAS       796   2-17-89  12:25a
    SPECKEYS H        9126  12-12-88   3:15a
    TSS      DEF        40   2-17-89  12:29a
    TSS      MAN     46180   2-16-89   2:02a
    TSSINST  EXE     42736   2-16-89   1:09a
    TSSINST  HLP      1358  12-12-88   3:15a
    TSSLIB04 TPU     38608  12-12-88   3:15a
    SWAPTPU  BAT      1153  12-12-88   3:15a
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       727   1-01-80   6:52a
    FILE2257 TXT      2147   7-13-90   3:15p
           17 file(s)     266115 bytes
                           47104 bytes free
