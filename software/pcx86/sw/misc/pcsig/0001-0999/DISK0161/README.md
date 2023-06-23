---
layout: page
title: "PC-SIG Diskette Library (Disk #161)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0161/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0161"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC FIRING ISSUE #2A"

    Special Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  None.
    
    File Descriptions:
    
    SPLITB   BAT  Batch file.
    T86      BAT  Batch file.
    GC       EXE  Sub-programs.
    GRABBAG  EXE  Sub-programs.
    T86D     EXE  Sub-programs.
    FORTH    BAT  Will display the FORTH.MSG file
    FORTH    MSG  Tells you how to create a self-booting FORTH disk
    FORTH    OBJ  Object code to create a self-booting FORTH disk
    MANUAL   BAT  File to print the Manual for Programmer's Calculator
    MANUAL   DOC  Documentation for PC.EXE
    PC       EXE  Programmer's Calculator
    POLYMAZE EXE  Maze Program
    SQ       C    C source code for SQ.EXE
    SQ       EXE  Program to compress files
    T86TXT1  TXT  Text file.
    T86TXT2  TXT  Text file.
    XXXXXXXX XX2  Data file.
    XXXXXXXX XX3  Data file.
    XXXXXXXX XX4  Data file.
    XXXXXXXX XX5  Data file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES161.TXT

{% raw %}
```
Disk No:  161
Program Title:  PC Firing Issue #2A
PC-SIG version: 1.1

Usage:  Reference.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  None.

File Descriptions:

SPLITB   BAT  Batch file.
T86      BAT  Batch file.
GC       EXE  Sub-programs.
GRABBAG  EXE  Sub-programs.
T86D     EXE  Sub-programs.
FORTH    BAT  Will display the FORTH.MSG file
FORTH    MSG  Tells you how to create a self-booting FORTH disk
FORTH    OBJ  Object code to create a self-booting FORTH disk
MANUAL   BAT  File to print the Manual for Programmer's Calculator
MANUAL   DOC  Documentation for PC.EXE
PC       EXE  Programmer's Calculator
POLYMAZE EXE  Maze Program
SQ       C    C source code for SQ.EXE
SQ       EXE  Program to compress files
T86TXT1  TXT  Text file.
T86TXT2  TXT  Text file.
XXXXXXXX XX2  Data file.
XXXXXXXX XX3  Data file.
XXXXXXXX XX4  Data file.
XXXXXXXX XX5  Data file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 198,85,86,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  Disk No: 161  PC Firing Issue #2A  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To get information on this disk, type:                                ║
║                                                                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## T86TXT1.TXT

{% raw %}
```
 
 
                          TRACE86  DEMONSTRATION
 
This demonstration of TRACE86 shows the trace screen where the program
code, registers, stack and memory are displayed. There is also a command
screen that is disabled for the demonstration version.  Most of the
file and data handling commands are executed from the command screen.
The trace screen does allow control of the trace action and memory
display.  The following commands are available for your use.
1. The SPACE BAR starts and advances the single instruction step mode.
   Each time you press the space bar, the white line advances to the
   next instruction to be executed.
2. The ENTER key starts the continuous tracing action.
3. The "P" key causes the entire trace screen to be printed where the
   active trace line is printed with a row of equal (=) signs.
4. The "C" key causes the program to run at full trace speed until the
   CX register is zero.
5. The "K" key will run a called subroutine at full speed until the
   subroutine is completed.
 
              *****  Commands Continued *****
 
```
{% endraw %}

## T86TXT2.TXT

{% raw %}
```
 
 
6. The "F" key sets a called subroutine to run at full speed.
7. The "S" key sets a called subroutine to run at trace speed.
8. The "B" key causes the memory display to be in byte format
   with the ASCII characters displayed also.
9. The "W" key causes the memory display to be in word format.
10. The "PgUp" and "PgDn" keys will display the previous or next
    256 bytes of memory.
11. The "up arrow" and "down arrow" on the numeric key pad will
    display the previous or next 16 bytes of memory.
12. The "left arrow" and "right arrow" on the numeric key pad will
    display the previous or next byte of memory.
13. The "F3" key will toggle between the last and current instruction.
    The single step mode must be used for two instructions before
    using the F3 key. Also the white line must be on the current
    instruction in order to continue tracing.
14. The "F4" key toggles between displaying hex numbers in upper
    or lower case.
15. The "F5" key toggles between showing or not showing ASCII characters
    in memory monitor, when in byte mode.
16. The "Esc" key ends the demonstration and returns to DOS.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0161

     Volume in drive A has no label
     Directory of A:\

    FILES161 TXT      1078   1-27-89   9:37a
    FORTH    BAT        38   4-15-84   4:07p
    FORTH    MSG       282   4-15-84   3:46p
    FORTH    OBJ     26368   4-26-84   7:10p
    GC       EXE     38272   6-29-83   3:34p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694  12-01-88   3:05p
    GRABBAG  EXE     16162   4-05-84   8:50a
    MANUAL   BAT       576   9-22-83  11:48a
    MANUAL   DOC     41840   2-06-84  11:31a
    PC       EXE     50176   3-18-84  11:21a
    POLYMAZE EXE     28672   3-28-84   3:49a
    SPLITB   BAT       848   1-01-80   1:46a
    SQ       C       28246   3-19-84   3:05p
    SQ       EXE     17024   4-05-84   8:55a
    T86      BAT       109   5-02-84   4:49a
    T86D     EXE     52736   9-29-83  11:33a
    T86TXT1  TXT      1094   7-11-83   3:56p
    T86TXT2  TXT      1153   8-09-83   2:46p
    XXXXXXXX XX1         3   5-02-84   4:57a
    XXXXXXXX XX2         3   5-02-84   4:59a
    XXXXXXXX XX3         3   5-02-84   5:00a
    XXXXXXXX XX4         3   5-02-84   5:01a
    XXXXXXXX XX5         3   5-02-84   5:03a
           24 file(s)     305421 bytes
                            2048 bytes free
