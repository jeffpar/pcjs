---
layout: page
title: "PC-SIG Diskette Library (Disk #1774)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1774/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1774"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PCHELP & UTILITIES  1 OF 2 (2026)"

    Imagine on-line help for DOS. This utility is a quick-and-easy
    reference guide to DOS commands, their uses and proper formats. When
    you need help, just type PCHELP plus the name of the command you are
    curious about. An explanation of the command and its proper usage come
    to the screen.
    
    Also included on this disk are some of the most popular DOS-like
    utilities. These routines do things that DOS should: WHERE will find
    files on your hard drive, RENDIR will rename a directory, LOCATE will
    find text in a file, DIRCOMP will compare two directories, and more.
    You can find similar files elsewhere in The PC-SIG Library, but these
    versions are supported by PCHELP -- you get an explanation and syntax
    help just like any other DOS command. You'll get helpful information
    without ever dragging out a DOS manual.
    
    PCHELP uses no overhead memory and won't get in the way of normal
    DOS
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1774.TXT

{% raw %}
```
Disk No: 1774                                                           
Disk Title: PCHelp & Utilities disk 1 of 2 (#2026 2 of 2)                       
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: PCHELP & Utilities                                       
Author Version: 1.4                                                     
Author Registration: $20.00                                             
Special Requirements: None                                              
                                                                        
Imagine on-line help for DOS.  This utility is a quick and easy         
reference guide to DOS commands, their use and proper format.  When you 
need help, just type HELP plus the name of the command you are curious
about.  An explanation of the command and its proper usage come to the  
screen.                                                                 
                                                                        
Also included on this disk are some of the most popular DOS-like        
utilities.  These routines do things that DOS should: WHERE will find   
files on your hard drive, RENDIR will rename a directory, LOCATE will   
find text in a file, DIRCOMP will compare two directories, and the list 
goes on.  You can find similar files elsewhere in The PC-SIG Library,   
but these versions are supported by PCHELP--you get an explanation and  
syntax help just like any other DOS command.  You'll get helpful        
information without ever dragging out a DOS manual.                             
                                                                        
PCHELP uses no overhead memory and won't get in the way of normal DOS   
operation for those who don't need the help.                            
                                                                        
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
║   <<<<  Disk #1774  PCHELP & UTILITIES disk 1 of 2 (2026 also)  >>>>    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install program onto hard drive, type:  INSTALL (press enter)        ║
║                                                                         ║
║ To start program, type:  HELP (press enter)                             ║
║                                                                         ║
║ To print documentation, type:  COPY HELP.DOC PRN                        ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HELP.DOC

{% raw %}
```

                              PCHELP.DOC V1.4
                             (C) COMPU.CON 1989

PCHELPxx.EXE (xx = DOS version, PCHELP32.EXE is help for DOS version 3.2)
is a utility to provide PC users a quick and easy reference to DOS commands,
special DOS files and utilities supplied on the disk. This version of PCHELP
includes help for DOS versions 2.X, 3.0, 3.1, 3.2, 3.3 and 4.0. PCHELPxx is
not intended to replace the DOS Reference Manual. Consult the DOS Reference
Manual for details on any DOS command. The correct version of PCHELPxx.EXE
will be renamed HELP.EXE by INSTALL.

Format:  [d:][path]HELP [command]

HELP may be run with or without a command. The command, if entered at the
command line, may be abbreviated to the first unique characters. This HELP
emulates the DEC VAX/VMS Help Utility.

It is suggested that a subdirectory be created (i.e. UTILS) and the files
on the HELP disk copied to that subdirectory. The INSTALL program will
create the directory automatically during installation and copy the files
to that directory.

You will need to include this subdirectory name in the PATH command. The
PATH command is generally set in the AUTOEXEC.BAT file.

PATH=...;[d:]\UTILS;...

Where '...' represents paths before and/or after the subdirectory name and
[d:] is the drive where the subdirectory name resides. This will allow HELP
to be called from any directory and/or drive.

It is recommended that you install the HELP and Utilities with the INSTALL
program.

Format: A:INSTALL

The default directory is UTILS, but this may any directory name you choose.
The INSTALL program will instruct as to installation of HELP and Utilities.

This HELP utility program is distributed under the user supported software
concept. If you find it useful, register your copy by sending $20.00 to:

                             COMPU.CON
               5225 Canyon Crest Drive, Suite 19-224
                        Riverside, CA  92507

We will send you the latest version of PCHELP and any information on other
programs that are available from COMPU.CON. You are encouraged to make
copies of this disk and give unmodified copies to other PC users.


```
{% endraw %}

## PC-SIG.TXT

{% raw %}
```
                      Submission/Update Information Form

Program Title: PCHELP                         Submission Tracking No.: 1774

Submission's Version Number: V1.4

Name: Dick Mathews                          Company Name: COMPU.CON

Address: 5203 El Cerrito Drive, #242

City: Riverside                             State: CA     Zip: 92507

Daytime Phone: 714-684-3569                 Evening Phone: Same

I wrote the above program and hereby place it in the public domain to be
distributed freely.

Signature:                                         Date: 2-4-90

Program Title: PCHELP                         Submission Tracking No.: 1774

If this is an update, improvements over last update?: Yes. Additional help
for other versions of MS-DOS and some enhancements and bug fixes to the
utilities. DOS Version 2.X and 3.0 were added by popular demand.

Unique features of the program (why is your program better?).:

Program's capacity or limitations (i.e. how many records it will hold,
situations or conditions where the program won't work, features described
or implied described or implied above that only come with registration).:
Should work in any version of MS/PC-DOS Ver. 2 or later.

Does your program require any special system requirements other that 256K
memory, one floppy disk drive, and a monocrome monitor. If yes, please
list them.: No

How to start the program.: HELP

What is the registration fee for your program?: $20.00.

Who is the intended user?: Anyone using MS/PC-DOS.

Materials or services that come with registration.: Udated version of HELP
and/or utilities.

List program files and one-line descriptions of each file.:

Disk 1:
INSTALL .EXE   Installation program for PCHELP
PCHELP31.EXE   HELP for MS-DOS Ver. 3.1
PCHELP32.EXE   HELP for MS-DOS Ver. 3.2
PCHELP33.EXE   HELP for MS-DOS Ver. 3.3
PCHELP40.EXE   HELP for MS-DOS Ver. 4.0
HELP    .DOC   Documentation for PCHELP
REGISTER.FRM   PCHELP register form
PC-SIG  .TXT   This file

Disk 2:
PCHELP2X.EXE   HELP for MS-DOS Ver. 2.X
PCHELP30.EXE   HELP for MS-DOS Ver. 3.0
HELP    .DOC   Documentation for PCHELP
REGISTER.FRM   PCHELP register form
CHANGES .EXE   List file changes between two directories.
DIRCOMP .EXE   List files in two directories for comparision.
LISTBKUP.EXE   Lists the files in the backup save-set (ver. 3.3 and later).
SD      .EXE   Display two column sorted directory.
SIZE    .EXE   Reports the total size and the number of files in a directory.
TREE    .EXE   Displays a visual representation of subdirectory tree.

All the above software was authored by Dick Mathews, COMPU.CON.

Disk 3:
The following software descriptions are included in the PCHELP. The source for
these came from the book and disk, PC MAGAZINE DOS POWER TOOLS, edited by Paul
Somerson, Copyright 1988, by Paul Somerson and Ziff Communications Company.

BROWSE  .COM   Scrolls forward and backward through a file.
PARSE   .COM   Counts characters, words and sentences in ASCII files.
RENDIR  .COM   Renames subdirectories.
SCLEAN  .COM   Searches, erases or retains files selectively.
SEARCH  .COM   Searches for filenames or character strings.
TOUCH   .COM   Changes file date and/or time in a directory.
TYPEA   .COM   Displays text strings within files.
WHERE   .COM   Finds a file or group of files on the drive:path.

The following software description is included in the PCHELP. (C)1985 S.Holzner.

LOCATE  .COM   Finds text strings in file(s) in the current directory.

The following software descriptions are included in the PCHELP. The authors
and origins are unknown.

FINDFILE.COM   Finds a file or group of files on the current drive.
MEMAVAIL.EXE   Reports conventional, extended and expanded memory.
PURGE   .COM   File deletion program.

The above utilities may be added to Disk 2, they will install if present.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1774

     Volume in drive A has no label
     Directory of A:\

    INSTALL  EXE     12688   2-05-90   6:35a
    PCHELP31 EXE     72544   2-04-90  10:03a
    PCHELP32 EXE     75872   2-04-90  10:04a
    PCHELP33 EXE     81216   2-04-90  10:04a
    PCHELP40 EXE     87792   2-04-90  10:05a
    HELP     DOC      2214   2-03-90   7:26p
    REGISTER FRM      1471   2-03-90   8:57a
    PC-SIG   TXT      3922   2-04-90   7:35a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   1-01-80  12:20a
    FILE1774 TXT      2383   3-15-90  10:47a
           11 file(s)     340834 bytes
                           15360 bytes free
