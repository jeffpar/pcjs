---
layout: page
title: "PC-SIG Library Disk #607"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0607/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0607"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

## Information about "TEXT UTILITIES"

    A special collection of text-processing utilities:
    
    HEBREW uses a downloaded character set on an Epson FX series printer to
    print in Hebrew, after preparing the file with WordStar.  The source
    code is provided for those who might want to change the mapping
    of English to Hebrew letters.
    
    TEXT CHECKER checks a WordStar text file for two kinds of errors:
    certain control characters, quotes, parentheses, and brackets,
    that are not in pairs; extra spaces between words and
    inconsistent numbers of spaces between sentences.
    
    CDIR -> DB is a cataloging program.  Most of the disk cataloging
    programs available impose size limitations but this one creates two
    files on the 64K, one disk drive and monochrome display disk, VOL.LIB
    and DB.LIB, and keeps appending to these as long as you keep shoving in
    disks.  CDIR is terminated after each disk read to permit you to do
    something else in the midst of doing all this cataloging.
    
    SMX is a printer utility designed for an EPSON MX80 (SFX is for the
    FX185).  It accepts a parameter (or asks for one) and then sends the
    translated codes to the printer.
    
    INDEXER creates an index file, with page numbers, from a formatted text
    file.
    
    System Requirements:  96K, one disk drive and a monochrome display;
    however, many are printer-related, so verify substitutions!
    
    How to Start:  Consult the files ending in .DOC for instructions; all
    can be printed out by entering "COPY filename.DOC prn" from the DOS
    prompt.  To run, type the filename at the DOS level and press <ENTER>.
    
    Suggested Registration:  TEXTCHECK: $15.00;  HEBREW: $15.00.
    
    File Descriptions:
    
    TC       BAK  Backup file
    CDCONCAT BAT  Batch file to collect CDIR source into one file
    CD?????? FNC  CDIR function files (9 files)
    INDEXER  EXE  Program to genereate indexex
    HEBREW   EXE  HEBREW characters for and EPSON printer
    HEBREW   DOC  Documentation for HEBREW.EXE
    HEBREW   BAS  Source code for HEBREW.EXE
    CDIRA    OBJ  Assembler directory and freespace routines
    CDIRA    ASM  Assembly source code to get directory and freespace
    CDIR     H    Constants and declaration for CDIR
    CDIR     DOC  Documentation for CDIR
    CDIR     C    C source code for CDIR.EXE
    CDIR     EXE  Disk cataloging program
    MAINLIB  DBF  Sample dBASE II file from CDIR
    LNK      BAT  Batch file to link CDIR
    INDEXER  DOC  Documentation for INDEXER.EXE
    INDEXER  C    C source code for INDEXER.EXE
    *        LIB  Sample output files (2 files)
    TC       EXE  Text checker program
    TC       DOC  Documentation for TC.EXE
    SMX      DOC  Documentation for SMX.COM
    SMX      COM  Printer initialization for MX 80, run file
    SMX      ASM  Assembly source code to set up an MX 80 printer
    SFX      ASM  Assembly source code to set up an FX 185 printer
    READ     ME   Letter about HEBREW and Text Checker
    MC       BAT  Batch file to compide CDIR

### Directory of PC-SIG Library Disk 0607

     Volume in drive A has no label
     Directory of A:\

    ABBREVS            384   1-01-80
    CDATE    FNC       313   9-11-84   8:10a
    CDCONCAT BAT       156  10-21-85  12:24p
    CDDBPRNT FNC       560   9-16-84  10:16p
    CDDEBUG  FNC       981   9-16-84  10:14p
    CDDSKPRT FNC       673   9-16-84  10:17p
    CDGETDRV FNC       615   9-16-84  10:14p
    CDIR     C         991   9-16-84   1:57a
    CDIR     DOC      1224   1-07-86  11:00p
    CDIR     EXE     18824   1-07-86  10:25p
    CDIR     H        2931   9-16-84  10:13p
    CDIRA    ASM      3102   9-16-84  10:12p
    CDIRA    OBJ       178   9-16-84   2:05a
    CDIROUTP FNC      2349   9-17-84   2:10a
    CDSCRPRT FNC       554   9-16-84  10:15p
    CDTIME   FNC       542   9-16-84  10:14p
    CDWDEPRT FNC       751   9-16-84   1:42a
    DB       LIB       468   1-07-86  10:25p
    FILES607 TXT      2768   1-22-86   4:37p
    GO       BAT       533   1-22-86   4:55p
    HEBREW   BAS     10624  12-03-85  11:38a
    HEBREW   DOC     16512   1-01-80
    HEBREW   EXE     28672   1-01-80
    INDEXER  C       10652   5-14-86   5:39p
    INDEXER  DOC      7203   5-14-86   5:37p
    INDEXER  EXE     11992   4-21-86  10:32a
    LNK      BAT        31   1-07-86  10:21p
    MAINLIB  DBF      1024   1-07-86  10:35p
    MC       BAT        20   1-07-86  10:20p
    NOTES607 TXT      2504   1-22-86   4:35p
    READ     ME       2176   1-01-80
    SFX      ASM      4362   9-29-85   4:51p
    SMX      ASM      4103   8-11-85   4:40p
    SMX      COM       990   1-07-86  10:32p
    SMX      DOC       529   1-07-86  11:06p
    TC       BAK     16512   1-01-80
    TC       DOC     16512  10-01-86   4:08p
    TC       EXE     37888   1-16-86  12:11p
    VOL      LIB       515   1-07-86  10:25p
           39 file(s)     211718 bytes
                           89088 bytes free
