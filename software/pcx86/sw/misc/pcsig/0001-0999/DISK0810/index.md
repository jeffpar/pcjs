---
layout: page
title: "PC-SIG Diskette Library (Disk #810)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0810/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0810"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DISK NAVIGATOR"

    DISK NAVIGATOR takes over for the ordinary DOS prompt on your computer
    and displays the files on your disk(s) in several display formats;
    copy, move and erase files on an individual or group basis.
    
    Individual files can be browsed or renamed. There is a submit facility
    in which the commands and file names normally typed at the DOS prompt
    are now typed and automatically passed on to DOS. The benefit -- no
    misspellings!
    
    Context-sensitive help screens and pop-up windows make DISK NAVIGATOR
    easy to use. The program can show the files from a number of drives/
    directories on the screen at the same time, giving your computer a
    "super" disk directory. Scan one disk directory or the entire disk
    directory structure.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DNAVSMRY.DOC

{% raw %}
```

DNAV is a directory shell with several powerful features:

    - SUBMIT facility eliminates the need to key in file and path names.  
                
    - Macros to reduce keystrokes needed.
     
    - Graphic directory tree when you press 'J' (to jump to a directory)

    - Shows files from multiple drives/directories (intermixed, if you wish).

    - Context sensitive Help screens (press F1) and pop-up windows.
     
    - Scans only the directories of interest, reading the whole disk directory 
      structure is optional.  

    - Copys are safer, you are prompted before you overwrite files.
    
    - View function has find commands, the cursor pad is enabled. 

  Here is a sample screen format (seven are available):

Line Type:  ________________   Screen Image   _________________________
           |
Format  1:>|  DNAV 1.2 Copr. 1987 S.Peters    COLS:4  SORT: dir:Y files:F
           |
SUBMIT  2:>|   d:\>  list             D:\blip\blp.txt 
           |
Title   3:>|     Filename Ext  Sz-K Filename Ext  Sz-K    (for details 5:)
           | 
Root dir4:>|  D:\    3 of 89  Files  5756 Bytes,  Label:RAMDISK,  721K free
Detail  5:>|     \BLIP         <D>|  Cf      .doc   4|  Dnav    .doc  45
        5:>|      Blp     .txt   2|  Dnav-hi .bat   2|  Dnav    .exe  53
           | 
Subdir  6:>|  D:\BLIP            2 of   2  Files       3232 Bytes 
        5:>|      Bl      .bat   2|  Blp     .txt   2
           |                                 
Prompt  7:>|  Tag  Add  Scroll  Xclude  Jump   F1 - Help  F10 - Quit 

   The top line (1:) indicate the sort sequence of the displayed files:
   by directory or intermixed; by name, size, date, or extension.

   The next line (2:) is for the SUBMIT feature which is used to call
   DOS.  Use the F5 and F6 keys to move file names from the detail
   lines (5:) to this line.  Above it is set to call program 'LIST' for
   file 'BLP.TXT'.

   The title line (3:) identifies the fields in the detail (5:) lines.

   The directory lines (4: and 6:) identifies the owner of the files.

   The detail line (5:) shows files and subdirectories.  The amount of
   information shown varies with the setting of the top line.
      
   The prompt line (7:) indicates what functions are available at each
   cursor position.  Key in the first letter to call the function.

   F1 gives context sensitive help, F10 quits to DOS.  Use the cursor
   keys to move around the screen.  <PgUp> and <PgDn> move you thru the
   data in DNAV's tables.  

DNAV is shareware.  Upgrades will be prompt with YOUR support. 
```
{% endraw %}

## FILES810.TXT

{% raw %}
```
Disk No  810
Program Title: DISK NAVIGATOR (DNAV) version 1.3
PC-SIG version 1.4
 
DISK NAVIGATOR is a program which takes over for the ordinary DOS
prompt you see on your computer and displays the files on your disk(s)
in several display formats, letting you copy, move, and erase files on
an individual or group basis.
 
Individual files of your choosing can be browsed through or renamed.
It has a SUBMIT facility in which the commands and file names normally
typed at the DOS prompt are now typed and automatically passed on to
DOS. The benefit: no misspellings!
 
Context-sensitive help screens and pop-up windows make DISK NAVIGATOR
easy to use.  The program can also show the files from a number of
drives/directories on the screen at the same time, giving your computer
a "super" disk directory.  You can command DISK NAVIGATOR to scan just
one disk directory, or the entire disk directory structure.
 
Usage:  DOS Shell.
 
Special Requirements:  None.
 
How to Start:  Type DNAV (press enter).
 
Suggested Registration:  $19.00
 
File Descriptions:
 
DNAV     EXE  The program.
DNAV     DOC  Maunual (has form feeds, set your printer).
DNAVSMRY DOC  A one-page summary.
DNAV-HI  BAT  Used in the tutorial.
DNAVTERM USG  Conditions for usage and distribution.
DNAV     MAC  DNAV macro.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║       <<<<  Disk No 810  DISK NAVIGATOR (DNAV) version 1.3  >>>>        ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation on this disk, type:                        ║
║                                                                         ║
║             COPY DNAV.DOC PRN (press enter)                             ║
║                                                                         ║
║   To run the program, type:                                             ║
║                                                                         ║
║             DNAV (press enter)                                          ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0810

     Volume in drive A has no label
     Directory of A:\

    DNAV-HI  BAT        71   1-15-87   4:37p
    DNAV     DOC     57571  10-21-87  10:19a
    DNAV     EXE     62464  10-13-87  11:44a
    DNAV     MAC      2495  10-21-87  10:19a
    DNAVSMRY DOC      2627   9-23-87   4:30p
    DNAVTERM USG       940   7-23-87   2:12p
    FILES810 TXT      1440  10-18-88   7:25a
    GO       BAT        38   8-07-87   3:28p
    GO       TXT      1002  10-07-88  12:15p
    READ     ME        578  10-20-87   3:02p
           10 file(s)     129226 bytes
                           28672 bytes free
