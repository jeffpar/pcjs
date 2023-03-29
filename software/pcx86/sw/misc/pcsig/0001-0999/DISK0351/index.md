---
layout: page
title: "PC-SIG Library Disk #351"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0351/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0351"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

## Information about "TURBO PASCAL SET #2"

    This disk has handy tools for Turbo Pascal programs.  Routines include
    library files for geometric drawings, peripherals information function,
    make or remove subdirectories, DOS path get and set routines and more...
    
    System Requirements: Two disk drives, Turbo Pascal
    
    How to Start: Bring up Turbo Pascal, then load desired Pascal source
    program into work file area, compile and run.  To read the files with
    the DOC extension, enter TYPE filename.DOC and press <ENTER>.
    
    Suggested Registration:  $10.00
    
    File Descriptions:
    
    ALLFILES LIB  Get files matching template + display, then select
    READTHIS NOW  Documentation (9pp) and detailing of disk files
    DISKTYP  LIB  Get disk type (single/double/fixed, 8/9 sectors)
    GETSECTR LIB  Read a sector from disk to buffer  (see DISKMOD.PAS)
    CURSOR   LIB  Change or hide cursor
    CIRCLE   LIB  Circle-drawing procedure for graphics mode
    ERRMESSG LIB  Error messages for DOS 2.0 function calls
    EQUIPMNT LIB  Returns information about equipment attached to PC
    EXTENDIO LIB  EXTENDED I/O based on DOS 2.0 full-path commands
    EXISTFIL LIB  Test for file's existence before opening
    EXTENDIO DAT  Specifications for the new I/O functions
    FILENAME TYP  Filename type definition -- shared by several others
    FILEATTR LIB  Read and write the attribute byte for any file
    HEXFUNCT LIB  Convert integers in range (-32,768 to 32,767)
    GETINTGR LIB  Takes an integer in a given range
    GETFREE  LIB  Get amount of free space on disk
    GETFILE  LIB  Procedures to GET FILEs matching a template
    *        PAS  Pascal source code for *.LIB files
    SUCCESS  DOC  Documention (about another Turbo PASCAL resource)
    WINDOWS  LIB  Eases use of windows and window-frames
    REGPACK  TYP  Contains type definition for REGPACK (Where ...? [ED.])
    SCREEN   LIB  Direct video screen input/output
    SAFEWRIT LIB  Write to screen w/o control characters wrecking display
    RECTANGL LIB  Rectangle-drawing procedure for graphics modes
    QUEUE    LIB  A generic line-up
    SCREENS  TYP  Type declarations for full-screen manipulation
    POPSCREN DAT  Sample screen demo (uses SCREENS.TYP)
    POPSCREN PAS  Source code for POPSCREN
    POPSCREN LIB  Pop full screens into view by addressing screen memory
    KEYCHART DAT  Chart of key codes for GETKEYS.LIB
    GETKEYS  LIB  Simple procedure to catch any keystroke
    PARAMETR COM  Runs COMPILED only
    PARAMETR LIB  Pass parameters to programs from DOS command line
    NEWINT9  LIB  Change the keyboard interrupt to get key release codes
    MOVEFILE LIB  DOS 2.0 file RENAME with parameter for MOVE
    MONITOR  LIB  Simple procedure to check for color or mono
    MKRMDIR  LIB  Make or remove subdirectories
    NUMDISKS COM  Runs COMPILED only (uses REBOOT.LIB)
    LESSRAM  COM  Runs COMPILED only (uses REBOOT.LIB)
    REBOOT   LIB  "Warm" system reboot (without clearing RAM)
    SCANCODE DAT  Chart of keyboard Scan Codes (use with KEYBOARD.LIB)
    KEYBOARD LIB  Another approach to catching any keystroke
    KAVAIL   LIB  Returns available memory in K
    GTSETDIR LIB  Get or Set the current directory path
    TITLES   LIB  Uses ROM character patterns to create titles
    GRFXTABL LIB  Get the dot patterns from the ROM graphics table
    GETSETDD LIB  Get or set the default drive

### Directory of PC-SIG Library Disk 0351

     Volume in drive A has no label
     Directory of A:\

    ALLFILES LIB      6955  12-21-84   6:11a
    ALLFILES PAS      2485  12-19-84   6:52a
    CIRCLE   LIB      1259  12-04-84   6:44a
    CIRCLE   PAS       530  12-04-84   6:47a
    CURSOR   LIB       913  12-03-84   6:30p
    CURSOR   PAS      1280  12-03-84   6:30p
    DISKMOD  PAS     12762  12-21-84   6:41a
    DISKTYP  LIB      1571  12-21-84   6:45a
    DISKTYP  PAS       656  12-03-84   6:39p
    EQUIPMNT LIB      2642  12-20-84  12:01p
    EQUIPMNT PAS       983  12-20-84   9:21a
    ERRMESSG LIB      1432  12-02-84   8:45a
    EXISTFIL LIB      1218  12-21-84   6:49a
    EXISTFIL PAS       812  12-21-84   6:48a
    EXTENDIO DAT      3154  12-17-84   5:25p
    EXTENDIO LIB      8862   1-09-85   7:55a
    EXTENDIO PAS      2482  12-17-84   5:31p
    FANCYKEY PAS      3862  12-20-84   7:54a
    FILEATTR LIB      1061  12-04-84  12:39p
    FILEATTR PAS      2428  12-19-84   6:57a
    FILENAME TYP       251  12-03-84   6:58p
    FILES    TXT      4845   4-29-85  10:56a
    FILES351 TXT      4480   5-23-85   2:14p
    GETFILE  LIB      3841  12-03-84   6:26p
    GETFILE  PAS      6299  12-03-84   6:27p
    GETFREE  LIB      1417  12-18-84   8:54p
    GETFREE  PAS      1126  12-18-84   8:57p
    GETINTGR LIB      3183  12-18-84   7:49p
    GETINTGR PAS      1137  12-19-84   7:10a
    GETKEYS  LIB       755  12-02-84   9:13a
    GETKEYS  PAS      1071  12-02-84   9:16a
    GETSECTR LIB      2571  12-03-84   6:37p
    GETSETDD LIB       983  12-03-84   7:01p
    GETSETDD PAS       566  12-03-84   7:01p
    GRFXTABL LIB      1210  12-04-84   7:32a
    GRFXTABL PAS      1795  12-04-84   7:14a
    GTSETDIR LIB      1638  12-03-84   7:02p
    GTSETDIR PAS      1744  12-03-84   7:03p
    HEXFUNCT LIB      1475  12-02-84  10:19a
    HEXFUNCT PAS      1215  12-19-84   7:30a
    KAVAIL   LIB       467  12-02-84  10:20a
    KAVAIL   PAS       331  12-02-84  10:21a
    KEYBOARD LIB      1581  12-20-84   7:27a
    KEYBOARD PAS      2139  12-20-84   7:42a
    KEYCHART DAT      1742  10-28-84  11:21a
    LABEL    PAS     10969  12-21-84   6:54a
    LESSRAM  COM     10488  12-20-84   8:56a
    LESSRAM  PAS      2745  12-20-84   8:56a
    MKRMDIR  LIB      1581  12-17-84   6:16p
    MKRMDIR  PAS      1366  12-17-84   6:17p
    MONITOR  LIB       700  12-02-84  12:28p
    MOVEFILE LIB      1530  12-17-84   5:33p
    MOVEFILE PAS       854  12-17-84   5:34p
    NEWINT9  LIB      3475  12-17-84   5:35p
    NEWINT9  PAS      1398  12-02-84   8:22p
    NOSOUND  PAS        44  12-02-84   1:13a
    NUMDISKS COM     11214   1-01-80  12:03a
    NUMDISKS PAS      3394   1-01-80  12:04a
    PARAMETR COM     10359  12-18-84   9:09p
    PARAMETR LIB       803  12-18-84   9:01p
    PARAMETR PAS      1233  12-18-84   9:10p
    POPSCREN DAT      2049  12-03-84   8:32p
    POPSCREN LIB      1771  12-03-84   8:23p
    POPSCREN PAS      6110  12-04-84   8:32a
    QUEUE    LIB      1892  12-03-84   6:07p
    QUEUE    PAS      2234  12-17-84   5:43p
    READTHIS NOW     30282  12-20-84   8:56p
    REBOOT   LIB       742  12-20-84   8:47a
    RECTANGL LIB       767  12-03-84   8:12a
    RECTANGL PAS       888  12-03-84   8:15a
    REGPACK  TYP       103  11-13-84   8:06p
    SAFEWRIT LIB      1014  12-02-84   8:27p
    SAFEWRIT PAS      1087  12-02-84   8:27p
    SCANCODE DAT      2735  12-19-84   8:40p
    SCREEN   LIB      1914  12-02-84   8:33p
    SCREEN   PAS      4025  12-21-84   7:12a
    SCREENS  TYP       899  12-03-84   8:23p
    SUCCESS  DOC      7867  12-20-84   6:35p
    TITLES   LIB      1022  12-04-84   7:48a
    TITLES   PAS      1496  12-21-84   7:23a
    WINDOWS  LIB      2737  12-04-84   6:56a
    WINDOWS  PAS      1533  12-04-84   6:56a
           82 file(s)     240529 bytes
                           40960 bytes free
