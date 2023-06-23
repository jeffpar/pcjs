---
layout: page
title: "PC-SIG Diskette Library (Disk #2719)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2719/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2719"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2719.TXT

{% raw %}
```
Disk No: 2719                                                           
Disk Title: FLEXIBAK Plus                                               
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: FLEXIBAK Plus                                            
Author Version: 1.01                                                    
Author Registration: $39.95 + $4.00 S&H                                 
Special Requirements: None.                                             
                                                                        
FLEXIBAK PLUS, like its predecessor FLEXIBAK, is a flexible, easy-to-use
hard disk backup system with a logical, simple and unique approach to   
the backup problem.                                                     
                                                                        
With the conventional backup system, you are required to complete a full
backup approximately once a week with daily incremental backups, placed 
on separate disks.  If you need to restore from the backup, you must    
first restore the full backup and then each of the incremental backups  
up to the last backup done.  FLEXIBAK Plus, replaces the concept of full
and incremental backups.  Instead, you only need to do a full backup    
once with all subsequent backups placed on the same backup disks,       
providing some long-term speed increases, simpler file restoration, and 
an improved backup management capability.                               
                                                                        
Some outstanding features provided by FLEXIBAK PLUS:                    
                                                                        
~ Selective backups allow you to specify, globally and by directory,    
which file groups should be included or excluded from the backup        
                                                                        
~ Incremental backups are placed on the same disks as the full backup   
                                                                        
~ The file management system keeps track of what has been backed up, and
informs you if any files are missing from your hard disk since the last 
backup, allowing you to recover accidentally deleted files              
                                                                        
~ File compression is included as well as the ability to handle up to 20
hard disk drives                                                        
                                                                        
~ The alarm system warns you that you have forgotten to do a backup for 
a specified number of days                                              
                                                                        
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

 ╔═══════════════════════════════════════════════════════════════════════╗
 ║             <<<<  PC-SIG DISK #2719 FLEXIBAK PLUS  >>>>               ║
 ╠═══════════════════════════════════════════════════════════════════════╣
 ║   Installation:                                                       ║
 ║                                                                       ║
 ║       Installation is a very straightforward process. All you need    ║
 ║  to do is insert the disk on which FLEXIBAK Plus is located into      ║
 ║  the drive, select that drive as the current drive by typing "A:"     ║
 ║  or "B:" (depending on the drive in which the disk is inserted)       ║
 ║  at the DOS prompt. Now type "INSTALL" and press <ENTER> and then     ║
 ║  follow the instructions. Alternatively, if you acquired your copy    ║
 ║  of FLEXIBAK Plus by downloading it from a BBS or you prefer to       ║
 ║  manually install it, just create a directory on your hard disk       ║
 ║  and copy all the files to that directory.                            ║
 ║                                                                       ║
 ║  To print all documentation files, type: COPY *.DOC PRN  (press Enter)║
 ║                                                                       ║
 ║                                     (c) COPYRIGHT 1991, PC-SIG INC.   ║
 ╚═══════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HISTORY.DOC

{% raw %}
```
--------------------------------------------------------------------------
Release Date | Version | Details
--------------------------------------------------------------------------
19/05/91     | 1.00    | Initial release
             |         |
21/05/91     | 1.01    | Bug fix: File Specs not retained if no files
             |         | backed up in that directory.
--------------------------------------------------------------------------

```
{% endraw %}

## INSTALL.DOC

{% raw %}
```

Installation

     Installation is a very straightforward process. All you need
to do is insert the disk on which FLEXIBAK Plus is located into
the drive, select that drive as the current drive by typing "A:"
or "B:" (depending on the drive in which the disk is inserted)
at the DOS prompt. Now type "INSTALL" and press <ENTER> and then
follow the instructions. Alternatively, if you acquired your copy
of FLEXIBAK Plus by downloading it from a BBS or you prefer to
manually install it, just create a directory on your hard disk
and copy all the files to that directory.


Setting The Alarm

     FLEXIBAK Plus has a warning alarm feature that warns you if
you haven't taken a backup recently. To enable this, you should
place the following lines in your AUTOEXEC.BAT file in an
appropriate place. (If you are not sure about the function of the
AUTOEXEC.BAT file or how to alter it, please consult your MS-DOS
reference manual).

x:
CD \FLEXPLUS
FLEXPLUS /A=y
C:

     Where 'x' is the hard disk drive where you have installed
FLEXIBAK Plus - if other than drive C - and 'y' is the number of
days after which you wish the alarm to sound.

     If you have done this correctly, every time you boot your
computer FLEXIBAK Plus will check to see how long it has been
since the last backup was taken and if it is longer ago than the
specified threshold - 'y' in the above example - an alarm will
be sounded giving you the opportunity to take a backup.


Command Line Parameters

     If you are running on a machine with a particularly low
amount of free memory or a particularly high number of files, you
may have trouble getting started with FLEXIBAK Plus as it will
abort with an exception message saying that it has either run out
of memory, file space or directory space. You can override the
initial memory allocation settings of FLEXIBAK Plus by use of
some command line options which can later be set permanently by
using the General Setup option of the Setup menu. To override the
number of files (the default is 4000) that space is allocated
for, use the "/F" command line option and to override the number
of directories (the default is 300), use the "/D" command line
option. For example, if you have a particularly large hard disk,
you might use a command like this:

FLEXPLUS /F=5000 /D=500

     This would tell FLEXIBAK Plus to allocate space for 5000
files and 500 directories.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2719

     Volume in drive A has no label
     Directory of A:\

    FLEXPLUS EXE    151332   5-21-91   9:27p
    FPDIR    EXE     17730   5-21-91   9:27p
    FPREST   EXE     23620   5-21-91   9:27p
    INSTALL  EXE     32496   5-21-91   9:27p
    REGISTER DOC      1956   5-21-91   9:27p
    INSTALL  DOC      2453   5-21-91   9:27p
    HISTORY  DOC       458   5-21-91   9:27p
    READ     ME        202   5-21-91   9:27p
    VENDOR   DOC      6599   5-21-91   9:27p
    FLEXPLUS DOC     41127   5-26-91  12:39p
    GO       BAT        28  10-04-90   5:21a
    GO       TXT      1447   7-17-91   8:10p
    FILE2719 TXT      3331   7-24-91   9:10a
           13 file(s)     282779 bytes
                           31744 bytes free
