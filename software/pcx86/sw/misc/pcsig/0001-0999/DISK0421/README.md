---
layout: page
title: "PC-SIG Diskette Library (Disk #421)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0421/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0421"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES #20"

    This entry in our DOS utilities series is a collection of DOS
    tools and helpers to keep your housekeeping chores from getting
    out of hand.  DOSHELP gives you a helping hand when you can't
    quite remember the right command.  PCWINDOW is a desktop utility
    and makes a nice organizational tool.  SDIR% is simply one of the
    nicest DOS file managers available.  The list goes on.  Once you
    try some of these programs, you'll probably make them part of
    your regular routine.  Enjoy!
    
    System Requirements:  128K, 1 disk drive, monochrome monitor.
    
    How to Start:  To read DOC or TXT files, enter TYPE filename.ext and
    press <ENTER>.  To run an EXE or COM program, just type its name and
    press <ENTER>.
    
    Suggested Registration: RAMTEST and SDIR5 both $10.00
    
    File Descriptions:
    
    PEACOCK  DOC  Documentation file
    PEACOCK  COM  Dynamic notepad
    PCWINDOW DOC  Documentation file
    PCWINDOW COM  Notepad, alarm clock, ASCII table - Sidekickish
    KBDBUF   DOC  Documentation file
    KBDBUF   COM  160 character keyboard buffer
    IPLTIME  COM  Easy way to get time and date
    GLOBALS  DOC  Documentation file
    GLOBALS  LBR  Do path calls with data files
    DOSHELP  BAT  DOS syntax reference
    DISKPARK EXE  Hard disk head parking
    DISKPARK DOC  Documentation file
    CLOCK    DOC  Documentation file
    CLOCK    COM  Digital clock on upper right of screen
    CAPS     DOC  Documentation file
    CAPS     COM  Turn caps lock on from a batch file
    RAMTEST  COM  Good memory checker
    SDIR5    COM  Menu driven DOS helper with file management tool
    RAMTEST  DOC  Documentation file
    FFM      EXE  Dual menu DOS command helper
    SPEEDKEY DOC  Documentation file
    SPEEDKEY COM  Double your curser speed
    SDIR5    DOC  Documentation file
    CDSECRET COM  Goes to secret sub-directory
    RDSECRET COM  Removes secret sub-directory
    MDSECRET COM  Makes secret sub-directory
    SECRET   DOC  Create and control secret directories
    LIST2DAY COM  List all files created today
    FILES    PAS  Pascal source code
    FILES    DOC  Documentation file
    FILES    COM  Intellegent DIR command
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CAPS.DOC

{% raw %}
```
caps designates if the caps lock is set by arrow up or down in upper
left corner of screen.
also indicates if numlock is on or off.
use in autoexec.bat file or type caps

```
{% endraw %}

## CLOCK.DOC

{% raw %}
```
another clock program for dos 2.x
automatically sets with date command of dos
set built in alarm by typing clock hh:mm:sec
turn clock off by typing clock -
use in autoexec.bat file
displays 24 hour clock in upper right corner of screen

```
{% endraw %}

## DISKPARK.DOC

{% raw %}
```
  DiskPark by Simcha Lerner
  Version 1.00, November 1984
  
  This program is a utility that will  locate all hard disks in the system
  and move  their heads to the  inner-most cylinder.  It will  give status
  messages for  each drive encountered.   This program uses the  hard disk
  ROM BIOS calls  as documented in the  IBM Tech Ref for the  XT. This has
  been tested on a  Compaq Plus without any problems.  It  will work on PC
  compatible  machines and  non-IBM  hard  disks only  if  they are  fully
  compatible at the BIOS level.  All other  I/O is through DOS so that you
  can use this via a re-directed console.
  
  The ability to exit back to DOS is  to allow you to park the disk if you
  are going to leave the machine for  a while.  EXITING TO DOS CAN UN-PARK
  THE HARD DISK, SO DO NOT EXIT TO  DOS IF YOU ARE ABOUT TO POWER OFF YOUR
  MACHINE.   In order  to exit  back to  DOS, hit  three carriage  returns
  slowly.  The program  flushes the buffer before each  character to avoid
  accidental activation.
  
****************************************************************************
*                                                                          *
* IMPORTANT:                                                               *
*                                                                          *
* This  program does  NOT lock  the  heads.  If  you intend  to move  your *
* system, run the utility that came with it for that purpose.              *
*                                                                          *
****************************************************************************
                                              *
*****************************************************************
```
{% endraw %}

## FILES.DOC

{% raw %}
```
NAME

  Files -- a flexible file/directory listing tool.

USAGE

  FILES [pathname] [-F|D] [-S] [-X string]

DESCRIPTION

  FILES with no arguments will list all the files (including directories and
  hidden and system files) in the current directory.  Each file will be listed
  in the following (default) format:

        <filename> <date> <time> <attributes> <size> <volume>

  The "pathname" argument can be a full MSDOS path with a wildcarded file name.
  If no pathname is given the default is "*.*".

  The "-F" or "-D" switches control the types of files found.  With the "-F"
  option only files (no directories) will be listed.  With the "-D" option only
  the files and directories that would be found with the MSDOS DIR command will
  be listed (no system or hidden files).

  The "-S" option specifies that all subdirectories below the given path should
  also be searched for files matching the specified filename.

  The "-X" option is followed by a string that will be expanded for each file
  found.  The string may contain special character combinations that will be
  expanded, similar to the MSDOS PROMPT command.  The special character
  combinations consist of a dollar sign ($) followed by one of the following
  characters:

        $ - the '$' character
        t - the time the file was last written
        d - the date the file was last written
        p - the path to the directory the file is in
        g - the '>' character
        l - the '<' character
        b - the '|' character
        f - the file name
        a - the file attribute
        0 - the low word of the file size (in hex)
        1 - the high word of the file size (in hex)
        k - the file size (in Kbytes)
        v - the volume label

  The default string is '$f $d $t $a $k $v $p'.

  The file attribute field consists of six characters, one character for each
  attribute.  If an attribute is reset then it is represented by a dash (-).
  The attributes that are set are represented by:

        r - read only
        h - hidden
        s - system
        v - volume label
        d - directory
        a - archive


EXAMPLES

  > FILES
        -- will list all entrys in the current directory

  > FILES /bin/src/*.pas
        -- will list all files in the directory "/bin/src" with the extension
        -- ".pas"

  > FILES /bin/*.p -s
        -- will list all files with the ".p" extension in "/bin" or any
        -- directory below "/bin"

  > FILES c:/*.bak -s -x del $p$f >delbaks.bat
        -- will list all files with the ".bak" extension in any directory on
        -- disk "c:" and produce a string of the form "del <path><file>" of
        -- every file found.  The output is redirected into the file
        -- "delbaks.bat".  (The batch file could be used to delete all .BAK
        -- files on the disk).

  > FILES *.def -x .include $f | sort | pp >prn
        -- will produce a list of ".include" commands that is sorted and passed
        -- to a print utility which interprets the commands and writes the
        -- resulting file to the printer.  The net result is a formatted listing
        -- of the contents of all the .DEF files in alphabetical order.

```
{% endraw %}

## FILES421.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 421   DOS Utilities                                     v1 DS
-------------------------------------------------------------------------
A collection of DOS tools and helpers to keep your housekeeping chores
from getting out of hand.
 
CAPS     COM  Turn caps lock on from a batch file
CAPS     DOC  Documentation file
CLOCK    COM  Digital clock on upper right of screen
CLOCK    DOC  Documentation file
DISKPARK DOC  Documentation file
DISKPARK EXE  Hard disk head parking
DOSHELP  BAT  DOS syntax reference
GLOBALS  LBR  Do path calls with data files
GLOBALS  DOC  Documentation file
IPLTIME  COM  Easy way to get time and date
KBDBUF   COM  160 character keyboard buffer
KBDBUF   DOC  Documentation file
PCWINDOW COM  Notepad, alarm clock, ASCII table - Sidekickish
PCWINDOW DOC  Documentation file
PEACOCK  COM  Dynamic notepad
PEACOCK  DOC  Documentation file
RAMTEST  COM  Good memory checker
RAMTEST  DOC  Documentation file
SDIR5    COM  Menu driven DOS helper with file management tool
SDIR5    DOC  Documentation file
SPEEDKEY COM  Double your curser speed
SPEEDKEY DOC  Documentation file
FFM      EXE  Dual menu DOS command helper
FILES    COM  Intellegent DIR command
FILES    DOC  Documentation file
FILES    PAS  Pascal source code
LIST2DAY COM  List all files created today
SECRET   DOC  Create and control secret directories
MDSECRET COM  Makes secret sub-directory
RDSECRET COM  Removes secret sub-directory
CDSECRET COM  Goes to secret sub-directory
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## GLOBALS.DOC

{% raw %}
```
Globals is provided on this disk in a library form in order
to keep the files separate from the others so you can organize
your hard disk better.
In order to use globals you should:
  1) md\globals             create a globals subdirectory
  2) cd\globals
  3) copy a:globals.lbr     move in the globals library
  4) lu a globals.lbr       disperse the files in the globals library
  5) type globals.txt       this file will tell you everything else
                            you need to know.

```
{% endraw %}

## KBDBUF.DOC

{% raw %}
```
extends keyboard buffer to 150 characters from default of 16
use in autoexec.bat file

```
{% endraw %}

## PCWINDOW.DOC

{% raw %}
```
PCWINDOW.COM  combines Notepads, Multiple Timers, ASCII Reference
Code and other features.  The utility, once activated remains in
memory until the computer is re-booted.  Functions are menu
driven and activated by ALT 0-7.
ity, once activated remains
```
{% endraw %}

## PEACOCK.DOC

{% raw %}
```
load peacock.com in autoexec.bat file
used with color monitor
alt f1 changes forground color
alt f3 changes background color
alt f5 changes from 80 to 40 columns and back
alt f7 changes from color monitor to monochrome and back
alt f9 fills backgound color

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0421

     Volume in drive A has no label
     Directory of A:\

    CAPS     COM       256   3-18-85   7:28p
    CAPS     DOC       256   3-18-85   7:28p
    CDSECRET COM       512   5-09-85   9:05a
    CLOCK    COM      1024   3-18-85   7:28p
    CLOCK    DOC       256   3-18-85   7:28p
    DISKPARK DOC      1792   2-27-85   8:25a
    DISKPARK EXE      1408   2-27-85   8:25a
    DOSHELP  BAT      3987  10-04-84   8:39a
    FFM      EXE     31872   1-22-85   3:35p
    FILES    COM     17035   5-08-85   5:39p
    FILES    DOC      3328   5-08-85   5:26p
    FILES    PAS     19957   5-08-85   5:39p
    FILES421 TXT      1691  10-23-85   8:45a
    GLOBALS  DOC       507   4-03-85   7:22p
    GLOBALS  LBR     57984  11-07-84  10:46a
    IPLTIME  COM      2176   3-15-85   7:37a
    KBDBUF   COM       768   3-18-85   7:28p
    KBDBUF   DOC        89   3-18-85   7:33p
    LIST2DAY COM       384   5-09-85  11:01a
    MDSECRET COM       512   5-09-85   9:05a
    PCWINDOW COM     27648   3-12-85   9:57a
    PCWINDOW DOC       256   3-18-85   2:52p
    PEACOCK  COM       640   3-18-85   7:28p
    PEACOCK  DOC       384   3-18-85   7:28p
    RAMTEST  COM      2048   2-25-85   9:00a
    RAMTEST  DOC      8704   2-25-85   9:02a
    RDSECRET COM       512   5-09-85   9:06a
    SDIR5    COM      6528   3-20-85   8:57a
    SDIR5    DOC      7936   3-20-85   8:59a
    SECRET   DOC      1408   5-09-85   9:06a
    SPEEDKEY COM       512   2-12-85  12:43p
    SPEEDKEY DOC      1920   4-17-85   8:00a
           32 file(s)     204290 bytes
                          102400 bytes free
