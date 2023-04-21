---
layout: page
title: "PC-SIG Diskette Library (Disk #1339)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1339/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1339"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "WORDPERFECT 5.0 LEARNING SYSTEM  2 OF 2"

    For classroom or private use, THE ECC LEARNING SYSTEM is a state-of-the-
    art disk-based tutorial for WordPerfect v5.0.  Composed of 500 screens,
    it covers basic commands and provides exercises practicing those
    commands in a real look and feel simulation.  A computer user can use
    the tutorial as a self-paced learning tool.  A 200-page workbook comes
    with registration.
    
    You are introduced to the computer, the disk operating system, the
    WordPerfect wordprocessor and learn to create and edit documents and how
    to use WordPerfect commands and menus.  Starting with basic DOS commands
    and conventions, the tutorial runs through WordPerfect commands which
    teach in detail how to: set margins, set tabs, use tabs, use indents,
    center text, interpret the document screen, select a printer, print,
    edit a document by using delete, insert, move and block, use newspaper
    columns, perform math calculations, spell-check, use the thesaurus, and
    more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1339.TXT

{% raw %}
```
Disk No: 1339                                                           
Disk Title: WordPerfect 5.0 Learning System  2 of 2  (Disk 2 of 2)      
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: WordPerfect 5.0 Learning System                          
Author Version: 04/90                                                   
Author Registration: $79.95                                             
Special Requirements: 512K RAM and WordPerfect version 5.0.             
                                                                        
Developed for a classroom setting, LEARNING SYSTEM is a state-of-the-   
art training tutorial for WordPerfect v5.0.  Composed of 500 screens, it
covers basic commands and offers you exercises practicing those         
commands.  The corporate trainer can obtain an instructor's guide with  
transparency originals, pre-test and post-test originals, and student   
packets.  A student can use the tutorial for self-teaching.             
                                                                        
Students are introduced to the computer, the WordPerfect wordprocessor  
and learn to create and edit documents and how to use WordPerfect       
commands and menus.  Starting with basic DOS commands and conventions,  
the tutorial runs through every WordPerfect command and teaches in      
detail how to print, spell-check, use the thesaurus and how to handle   
math columns.                                                           
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FINISHED.TXT

{% raw %}
```











The installation process has been completed.  You should have a
sub-directory on the hard drive named WORDPTUT.  All of the files
for running The WordPerfect Learning System have been transferred to
the hard drive and you are ready to use the tutorial.

Change your current drive to C:

Change your current directory to c:\WORDPTUT

Type in the command Go and press <ENTER>


```
{% endraw %}

## GO1.TXT

{% raw %}
```
echo off
echo ╔═════════════════════════════════════════════════════════════════════════╗
echo ║       Disk No 1339 WordPerfect 5.0 Learning System, Disk 1 of 2         ║
echo ╠═════════════════════════════════════════════════════════════════════════╣
echo ║ To run from floppies, place disk 1338 in drive A and disk 1339 in       ║
echo ║    in drive B, change current drive to A and type: GOSOFT (press enter) ║
echo ║                                                                         ║
echo ║ To install on a hard disk, place 1338 in drive A and type:  GOHARD      ║
echo ╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INSTALL.TXT

{% raw %}
```
 
 


This will install The Learning System Tutorial on your hard drive

This will create a sub-directory called WORDPTUT and copy all the
files from the floppy diskette to the sub-directory.  

When you are ready to run The WordPerfect LEARNING SYSTEM make the
WORDPTUT sub-directory your current directory.  

The type in the command GO and press <ENTER>.

NOTE! If you are going to run The WordPerfect Learning System on a
floppy diskette system and NOT on a hard drive.....

          PRESS <CTRL> AND <BREAK>

If you are going to use the hard drive to run The WordPerfect 
Learning System, press <ANY KEY> to continue.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1339

     Volume in drive A has no label
     Directory of A:\

    GOHARD   BAT       256   9-15-88  10:13a
    GO       BAT        32   1-02-89   9:45p
    GOSOFT   BAT        34   1-02-89   9:45p
    INSTALL  TXT       650   9-16-88   8:48a
    FINISHED TXT       411   9-15-88  10:14a
    WORDPERF DBD    149164   4-18-90   1:54p
    WP3      DBD    164448   4-18-90   4:10p
    GO1      TXT       669   1-01-80  12:54a
    FILE1339 TXT      2073   7-09-90   7:21p
            9 file(s)     317737 bytes
                           38912 bytes free
