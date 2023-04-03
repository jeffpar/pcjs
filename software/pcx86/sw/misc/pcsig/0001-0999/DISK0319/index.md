---
layout: page
title: "PC-SIG Library Disk #319"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0319/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0319"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 16"

    This collection has a bit of something for every DOS user.  Find files
    lost in a hard disk subdirectory or in a big pile of floppies.  List
    BASIC and WordStar files without having to go into either program first.
    Develop a visual DOS shell, remove hidden directories, manage your
    memory, increase the speed of your disk drives, create a disk catalog,
    print diskette labels and much more.  If you've ever been frustrated by
    the design of DOS commands, this is a library you will use often.
    File Descriptions:
    
    SCAVEN   DOC  Documentation for SCAVEN.
    DRVTEST  BAS  Simple disk test.
    DISKORAY EXE  Check diskette for rotation speed and seek test.
    COVER2   COM  Prints compressed directory for diskette envelopes.
    COVER    DOC  Documentation for cover2.
    KNEW     DOC  Documentation for KNEW.EXE.
    HIDE_RD  COM  Remove a hidden directory.
    HIDE_MD  COM  Make a hidden directory.
    HIDE_CD  COM  Access a hidden directory.
    HIDE     DOC  Documentation for HIDE, a simple security system.
    FDATE    DOC  Documentation for FDATE.
    FDATE    COM  Change date and time stamp of a disk file.
    FASTDISK COM  Part of SPEEDUP.
    SCAVEN   COM  Protect blocks from being deallocated by CHKDSK.
    RENDIR   COM  Rename directories.
    READBAS5 EXE  List a non-ASCII basic program without loading BASIC.
    PFM      COM  Visual shell for DOS commands.
    PC-DISK  COM  Catalogs your floppy diskettes.
    MOVE     DOC  Documentation for MOVE2.
    MOVE     COM  Copy files to new dir and verify copy, erase old copy.
    LISTPAST COM  List all files created before today.
    LISTARCH COM  List all archive files.
    KNEW     EXE  Copy *.* but only new files with more recent date stamp.
    LIST---- DOC  Documentation for LIST2DAY,LISTPAST,LISTARCH.
    LABEL    LBR  Part of COVER2.
    LIST52   HLP  Part of LIST52.
    LIST52   DOC  Documentation for LIST52.
    LIST52   COM  Scroll up and down through files using editor keys.
    LIST2DAY COM  List all files with today's date stamp.
    SDIR26   COM  List directories in 4 columns with file name and size.
    SDIR50   COM  Visual shell for executing DOS programs.
    SDL      COM  List directories sorted by various means.
    SDISK2   DOC  Documentation for SDISK2.
    SDISK2   COM  Sorts disk directory so dir will list files in order.
    SDIR50   DOC  Documentation for SDIR50.
    SHOWDIR  COM  List subdirectories in a given directory.
    SDL      DOC  Documentation for SDL.
    SORTF    EXE  Sorts ASCII data files.
    SORTF    DOC  Documentation for SORTF.
    SPEEDUP  DOC  Documentation on SPEEDUP.
    SPEEDUP  COM  Make your floppy disk run faster.
    TD13     DOC  Documentation on TD13.
    TD13     COM  Combines DOS TREE and DIR commands; makes a better tree.
    ST       DOC  Documentation for ST.COM.
    ST       COM  List WORDSTAR files one screen at a time.
    TREE2    COM  Tree showing only subdirectory names without file names.
    UNIQCOPY BAT  Same as copy *.* but only new files not on target disk.
    UNIQCOPY DOC  Documentation for UNIQCOPY.
    VFILER   EXE  Visual interface for maintaining files and subdirectories.
    VFILER   DOC  Documentation for VFILER.
    Z        EXE  Visual shell lets you look at your directories.
    WHEREII  DOC  Documentation for WHEREII.
    WHEREII  COM  Finds directory path for all copies of a file on a disk.
    READ     ME   Notes on DB Screen.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DRVTEST.BAS

```bas


10  'DISK DRIVE TEST
20  'JOE McDERMOTT - DECEMBER 1982
25  'NORTH JERSEY IBM PC CLUB
30  '
40  'THE PROGRAM CREATES A SERIES OF SEQUENTIAL FILES
50  'IT WRITES DATA TO THEM AND READS IT BACK FOR VERIFICATION
60  'FINALLY THE TEST FILES ARE ERASED/
70  'THE FILES ARE OF THE FORM "XXX.TST" WHERE "XXX" ARE THREE LETTERS
80  'CHOSEN AT RANDOM, E.G. "EBG.TST","CXU.TST"
90  '
100  NUMFILES=40        'NUMBER OF FILES THAT WILL BE CREATED
110  DIM FS$(NUMFILES)  'ARRAY FOR STORING FILESPECS
120  FTYPE$=".TST"      'FILE EXTENSION USED IN THE TEST
130  INPUT"DRIVE TO BE TESTED ";DD$
140  DD$=DD$+":"
150  '
160  INPUT"*** INSERT DISK AND PRESS `ENTER' ***",Z$
170  '
180  '   ---------- CREATE FILES ----------
190  FOR I=1 TO NUMFILES
200    FILENAME$ = CHR$(RND*26+64)+CHR$(RND*26+64)+CHR$(RND*26+64)
205    FS$(I)=DD$+FILENAME$+FTYPE$
210    PRINT"CREATING: ";FS$(I);" #";I
220    OPEN "O",1,FS$(I)           'CREATE DIRECTORY ENTRY
230    PRINT#1,STRING$(255,"*")    'WRITE DATA TO FILE
240    PRINT#1,STRING$(255,"*")
250    PRINT#1,STRING$(255,"*")
260    CLOSE 1
270  NEXT I
280  '   ---------- READ BACK FILES -----------
290  FOR I=1 TO NUMFILES
300    PRINT"READING: ";FS$(I);" #";I
310    OPEN "I",1,FS$(I)
320    INPUT#1,L$:PRINT LEFT$(L$,75)
330    INPUT#1,L$:PRINT LEFT$(L$,75)
335    INPUT#1,L$:PRINT LEFT$(L$,75)
340    CLOSE 1
350  NEXT I
360  '   ---------- ERASE FILES ----------
370  FOR I=1 TO NUMFILES
380    PRINT"ERASING: ";FS$(I)
390    KILL FS$(I)
400  NEXT I
410  END  'OF PROGRAM

---------
370  FOR I=1 TO NUMFILES
380    PRINT"ERASING: ";FS$(I)
390    KILL FS$(I)
400  NEXT I
410 
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0319

     Volume in drive A has no label
     Directory of A:\

    -DIRLIST          3467  11-11-84   8:40a
    COVER    DOC      2304   3-01-84   7:03a
    COVER2   COM      1228  11-01-84  12:42p
    DISKORAY EXE      6656   3-17-83   9:48a
    DRVTEST  BAS      1664   2-23-84   6:48a
    FASTDISK COM       512   4-03-84   8:04a
    FDATE    COM      1280   2-17-84   3:06p
    FDATE    DOC      1280   2-17-84   3:07p
    HIDE     DOC      3511  12-29-84   1:58p
    HIDE_CD  COM       256  10-30-84  12:35p
    HIDE_MD  COM       256  10-30-84  12:35p
    HIDE_RD  COM       256  10-30-84  12:35p
    KNEW     DOC      7011  10-14-84   7:00p
    KNEW     EXE     23808  10-14-84   1:21a
    LABEL    LBR     10752   2-19-85   1:57p
    LIST---- DOC       188  12-30-84   1:59p
    LIST2DAY COM       242   8-31-84   4:04a
    LIST52   COM      3072   2-10-85   3:44p
    LIST52   DOC      7156  11-23-84   6:58p
    LIST52   HLP      1536   2-08-85  10:35p
    LISTARCH COM       212   8-31-84   4:19a
    LISTPAST COM       241   8-31-84   4:31a
    MOVE     COM      2499   1-15-87   3:20p
    MOVE     DOC      1405   1-15-87   3:15p
    PC-DISK  COM     33408   1-20-85   7:28a
    PFM      COM     15872   1-06-85   6:48p
    READBAS5 EXE     24704   1-27-85  11:36a
    RENDIR   COM       640  10-20-84   1:26p
    SCAVEN   COM      1238   3-19-84  10:43p
    SCAVEN   DOC       591   5-10-84   8:42p
    SDIR26   COM      3584   6-29-84   7:03a
    SDIR50   COM      6656   2-19-85   1:49p
    SDIR50   DOC      8259   2-19-85   6:59p
    SDISK2   COM      4608   5-16-84   5:23p
    SDISK2   DOC      1536   5-16-84   5:25p
    SDL      COM      2816   8-22-84  12:50a
    SDL      DOC      2048   8-22-84  12:51a
    SHOWDIR  COM      1280   5-17-84   1:10p
    SORTF    DOC      1412   6-06-84  11:47a
    SORTF    EXE      3200   6-06-84  11:58a
    SPEEDUP  COM        37   9-10-83  11:47a
    SPEEDUP  DOC      2409   9-10-83  11:24a
    ST       COM     14336   1-09-84   8:44a
    ST       DOC      1048   1-10-84  10:41a
    TD13     COM      6400   9-21-84   7:16a
    TD13     DOC      1307   9-21-84   7:15a
    TREE2    COM      1513   1-01-83   7:48p
    UNIQCOPY BAT       768  12-24-84   3:27p
    UNIQCOPY DOC       512  12-24-84   3:27p
    VFILER   DOC      5129   1-25-85   6:59p
    VFILER   EXE     12416   1-25-85  12:52p
    WHEREII  COM      1024  11-21-84  10:12p
    WHEREII  DOC      2944  11-21-84  10:12p
    Z        EXE      9728   5-03-84   5:01p
    FILES319 TXT      3308   1-30-87   9:27a
           55 file(s)     255523 bytes
                           34816 bytes free
