---
layout: page
title: "PC-SIG Diskette Library (Disk #1682)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1682/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1682"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CAPACITY AND LOCKTITE PLUS"

    Upon execution CAPACITY displays free disk space in bytes and kilobytes,
    disk capacity, cluster size, and a horizontal bar graph display of the
    free space as percentage of the whole disk.  Helpful hardware
    information like the CPU speed, type of display adapter, I/O port
    detection including a mouse or joystick, installed memory, and DOS
    version is also displayed.
    
    LOCKTITE is a file and program protector that's easy to use and requires
    no special hardware.  Although your files or programs are locked, you
    can still copy them, transport them to home or office, where you can
    unlock the files and continue your work.
    
    Best of all, LOCKTITE works with any DOS file, whether it's an
    executable file, a document file or even a compacted file.  The program
    can read in your file or program, encrypt it using your password and
    then write it out to disk, along with a small header.  Your information
    is locked tight!
    
    Also offered is disaster insurance.  Should the awful happen and you
    forget your password, follow the instructions included and the author
    will unlock your program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ASCII.TXT

{% raw %}
```
INFORMATION FOR PC-SIG UPDATE TO CAPACITY Disk 1682
from TREVOR MICHIE, P.O. Box 5658, Boroko, Papua New Guinea.
14 June, 1990


FILE LIST 
                *****************************************************
                *                                                   *
                *   FILE NAME     DESCRIPTION                       *
                *===================================================*
                *   CAP-210b.EXE  FULL Program                      *
                *   CAPACITY.DOC  This Document                     *
                *   CAPACITY.NEW  What's new in this Version        *
                *   CAPACITY.HIS  History Information               *
                *   MAKE-CTL.EXE  Produces CTL file or patches EXE  *
                *   MAKE-CTL.TXT  Very brief file on MAKE-CTL.EXE   *
                *   CAPACITY.ASC  ASCII Chart (Typeable)            *
                *   SAMPLE  .CTL  Control file with comments        *
                *   CAP     .BAT  Sample batch file                 *
                *                                                   *
                *****************************************************


                           =====================
                           *SUMMARY OF FEATURES*
                           =====================



                    o   Shows Total Disk Capacity
                    o   Shows Free Space on Disk
                    o   Shows Used Space on Disk
                    o   Shows Cluster Size
                    o   Shows Standard Memory Size
                    o   Shows DOS Version Number
                    o   Shows Number of Parallel Ports
                    o   Shows Number of Serial Ports
                    o   Shows Number of Game Ports
                    o   Shows Type of Display Adapter (VGA, EGA, CGA, MDA)
                    o   Shows System Date
                    o   Shows System Time
                    o   Shows Default Drive and Path
                    o   Shows whether Mouse is Present & # of Buttons
                    o   Checks CPU Speed (Optional)
                    o   Shows Date of BIOS in USA Format
                    o   Shows Type of CPU
                    o   Sets DOS ErrorLevel on Exit
                    o   Patchable location for Configuration
```
{% endraw %}

## FILE1682.TXT

{% raw %}
```
Disk No: 1682                                                           
Disk Title: Capacity and Locktite Plus                                  
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: Capacity                                                 
Author Version: 2.10B                                                   
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
Upon execution CAPACITY displays free disk space in bytes and kilobytes,
disk capacity, cluster size, and a horizontal bar graph display of the  
free space as percentage of the whole disk.  Helpful hardware           
information like the CPU speed, type of display adapter, I/O port       
detection including a mouse or joystick, installed memory, and DOS      
version is also displayed.                                              
Program Title: LOCKTITE PLUS                                            
Author Version: 1.0                                                     
Author Registration: $39.95                                             
Special Requirements: None.                                             
                                                                        
LOCKTITE is a file and program protector that's easy to use and requires
no special hardware.  Although your files or programs are locked, you   
can still copy them, transport them to home or office, where you can    
unlock the files and continue your work.                                
                                                                        
Best of all, LOCKTITE works with any DOS file, whether it's an          
executable file, a document file or even a compacted file.  The program 
can read in your file or program, encrypt it using your password and    
then write it out to disk, along with a small header.  Your information 
is locked tight!                                                        
                                                                        
Also offered is disaster insurance.  Should the awful happen and you    
forget your password, follow the instructions included and the author   
will unlock your program.                                               
                                                                        
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
║            <<<<  Disk #1682  CAPACITY AND LOCKTITE  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start CAPACITY, type:  CAP-210b (press Enter)                        ║
║ To start LOCKTITE, type:  LTP (press Enter)                             ║
║                                                                         ║
║ To print CAPACITY documentation, type:  COPY CAPACITY.DOC PRN (Enter)   ║
║ To print LOCKTITE documentation, type:  COPY LOCKTITE.DOC PRN (Enter)   ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## MAKE-CTL.TXT

{% raw %}
```
                            ============
                            MAKE-CTL.EXE
                            ============
                            
                            
                            
                            
        This program produces a Control File which will be read by the
        CAPACITY program or alternatively it will enable you to  Patch 
        the CAP.EXE file or whatever you have named CAPACITY.

        You  only  need  to run this if you want  to alter  CAPACITY's
        configuration - such as Colours, Box Frames, Tests, etc.
        
        When run the bottom lines of the program will give you help on
        what type of input is required.
        
        If you opt for the configuration file rather than patching the
        CAP.EXE file;  the produced file is  called  CAPACITY.CTL  and 
        can be edited by any standard ASCII  editor  or Word Processor 
        in NON DOCUMENT mode.
        
        The MAKE-CTL  file  does not read the information from CAP.EXE
        This will be  corrected in later versions, if requested. Until
        then if you want to re-patch CAP.EXE with similar  colours you
        will  need  to  first save a copy of the configuration file to
        disk using the default save option.  Then "MAKE-CTL" will read
        this file each time it is run and let  you  patch  these  into
        CAP.EXE.  Be warned however that CAP.EXE reads this file first 
        before reading its own patch information.   This is so you can 
        have different CTL files for different directories.    I don't
        know why you'd want this but the option is there.
        
        
        
Trevor Michie (14 Jun 1990)


V1.00a  Initial Release.
V1.00b  Allows user the option of what CAP?????.EXE file to patch.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1682

     Volume in drive A has no label
     Directory of A:\

    LOCKTITE DOC     16394   2-18-90  12:05p
    LTP      EXE     40752   2-18-90  11:45a
    GO       BAT        38   1-01-80   1:37a
    CAP      BAT      1363   6-14-90   7:54p
    CAP-210B EXE     62190   6-14-90   7:54p
    CAPACITY NEW      1675   6-14-90   7:54p
    CAPACITY ASC      4348   6-14-90   7:54p
    MAKE-CTL EXE     71882   6-14-90   7:54p
    MAKE-CTL TXT      1853   6-14-90   7:54p
    SAMPLE   CTL      2718   6-14-90   7:54p
    CAPACITY DOC     20094   6-14-90   7:54p
    ASCII    TXT      2387   6-14-90   7:54p
    CAPACITY HIS      7389   6-14-90   7:54p
    GO       TXT       727   1-01-80   4:44a
    FILE1682 TXT      2961   9-05-90  12:38p
           15 file(s)     236771 bytes
                           77824 bytes free
