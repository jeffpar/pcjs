---
layout: page
title: "PC-SIG Diskette Library (Disk #1386)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1386/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1386"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "P-ROBOTS"

    P-ROBOTS is a game that helps teach programming in Pascal.  The
    objective is to design and program a ``robot'' that can triumph over
    similar robots designed and programmed by others in a real-time battle
    of wits and flying missiles.
    
    You control your robot by writing a procedure in Pascal to specify your
    robot's behavior and strategy in its efforts to vanquish up to three
    other robots in a battle to the death.  A variety of pre-defined
    P-ROBOTS Pascal functions allow your robot to track its position on the
    battlefield, monitor its health or damage condition, and calculate the
    distance and angle to opponents from its current battlefield position.
    Each robot is equipped with a cannon to fire missiles, and a motorized
    drive mechanism to either close in to kill a hapless opponent or
    flee from a fierce foe.
    
    P-ROBOTS is an excellent way for the novice programmer to sharpen
    his/her Pascal skills and have fun at the same time.  However, P-ROBOTS
    does assume that the robot designer/programmer already knows the
    fundamentals of programming in Pascal.
    
    For the experienced programmer, P-ROBOTS offers a chance to see just how
    well you program in a programming environment where ``bad'' code can
    lead to graphic and ignoble defeat and ``brilliant'' code can bring
    triumph and glory.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1386.TXT

{% raw %}
```
Disk No: 1386                                                           
Disk Title: P-Robots                                                    
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: P-Robots                                                 
Author Version: 2.1                                                     
Author Registration: $20.00                                             
Special Requirements: NONE                                              
                                                                        
P-ROBOTS is a game that helps teach programming in Pascal.  The         
objective is to design and program a ``robot'' that can triumph over    
similar robots designed and programmed by others in a real-time battle  
of wits and flying missiles.                                            
                                                                        
You control your robot by writing a procedure in Pascal to specify your 
robot's behavior and strategy in its efforts to vanquish up to three    
other robots in a battle to the death.  A variety of pre-defined        
P-ROBOTS Pascal functions allow your robot to track its position on the 
battlefield, monitor its health or damage condition, and calculate the  
distance and angle to opponents from its current battlefield position.  
Each robot is equipped with a cannon to fire missiles, and a motorized  
drive mechanism to either close in to kill a hapless opponent or        
flee from a fierce foe.                                                 
                                                                        
P-ROBOTS is an excellent way for the novice programmer to sharpen       
his/her Pascal skills and have fun at the same time.  However, P-ROBOTS 
does assume that the robot designer/programmer already knows the        
fundamentals of programming in Pascal.                                  
                                                                        
For the experienced programmer, P-ROBOTS offers a chance to see just how
well you program in a programming environment where ``bad'' code can    
lead to graphic and ignoble defeat and ``brilliant'' code can bring     
triumph and glory.                                                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO1.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  PC-SIG Disk #1386  P-ROBOTS  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print instructions, type:  COPY README.TXT PRN (press ENTER)         ║
║                                                                         ║
║ To view instructions, type:  GO (press ENTER)                           ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## README.TXT

{% raw %}
```


This disk contains the shareware version of P-ROBOTS:
 
 
This disk has the following files:

    OOZ.EXE -- A program to unpack the various .ZOO files on the disk
    P-ROBT21.ZOO -- Version 2.1 of the P-ROBOTS program plus the latest
                    collection of robots
    RE.ZOO -- An editor especially designed for developing and testing robots
    RRR.ZOO -- A "shell" to enable you to play round-robin P-ROBOTS
               tournaments
    README.TXT -- The file you are reading


Just a few words about each of these:


OOZ.EXE

    This program is used to unpack the various .ZOO files on the disk.  To use
    it, follow these directions:

    HARD DISK USERS:
         
         Copy all of the files from the disk on to your hard disk, then unpack
         each file with an .ZOO extension by giving the command:

              ooz filename.zoo

         followed by a carriage return -- where filename is the name of
         whatever file you wish to unpack.  For example, OOZ P-ROBOTS.ZOO
         would unpack the file P-ROBOTS. (You can use wildcards: for example,
         OOZ *.ZOO.)

    DUAL-FLOPPY USERS:

         First, format three new blank disks.  Put the P-ROBOTS disk (i.e., this
         disk) into drive B.  Then, for each .ZOO file, follow the following
         steps:

              1.   Put a formatted blank disk in drive A.  Make drive A the
                   default drive by giving the command "A:" followed by a
                   carriage return.
              2.   Unpack each file (on drive B) by giving the command:

                        B:OOZ B:filename.ZOO

                   followed by a carriage return -- where filename is the name
                   of whatever file you wish to unpack.  For example, 
                   B:OOZ B:P-ROBOTS.ZOO would unpack the file P-ROBOTS on to
                   the blank disk in drive A.

         It is important to use completely blank, but already formatted disks,
         since the files within the .ZOO groups are quite large and take a
         great deal of disk space.

    SINGLE-FLOPPY USERS:

         The P-ROBOTS files are too large to all be unpacked at once if you have
         only a single floppy drive.  Find a friend with either a hard drive 
         or a dual-floppy system and follow the instructions above. 


P-ROBT21.ZOO:

    This is a .ZOO file that must be unpacked using OOZ.EXE.
    
    This file contins (1) version 2.1 of P-ROBOTS (2) the documentation
    for P-ROBOTS, and (3) a collection of the latest and best robots that have
    been written for P-ROBOTS.

 
RE.ZOO:

    This an editor especially designed for developing and testing robots.
    It was developed by Professor B.J. Gleason of Upsala College and is being
    provided to users of P-ROBOTS with his permission.


RRR.ZOO:

    This is a "shell" to enable you to play round-robin P-ROBOTS
    tournaments.  It was developed by Professor B.J. Gleason of Upsala
    College and is being provided to users of P-ROBOTS with his permission.



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1386

     Volume in drive A has no label
     Directory of A:\

    OOZ      EXE     11520  10-17-86   4:54p
    README   TXT      3135  11-13-89  10:22a
    P-ROBT21 ZOO    176684  11-13-89   9:12a
    RE       ZOO     30872  12-11-89  12:07a
    RRR      ZOO     16028   1-08-90  12:46a
    GO       BAT        21   7-10-90   4:00a
    GO1      TXT       573   1-01-80   1:27a
    GO1      BAT        41   1-01-80   2:35a
    FILE1386 TXT      2887   1-01-80   1:00a
            9 file(s)     241761 bytes
                           74752 bytes free
