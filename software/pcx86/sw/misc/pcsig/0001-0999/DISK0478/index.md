---
layout: page
title: "PC-SIG Diskette Library (Disk #478)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0478/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0478"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HARD DISK UTILITIES"

    This is a collection of utilities for the hard disk drive user, compiled
    from over 25 disks in our library.  Some of the most famous: ALTER, used
    to change your file attributes; DISKPARK, for positioning your hard disk
    drive in the safety zone; and BACKSTAT to find out which files need to
    be backed up.
    File Descriptions:
    
    ALTER    COM  Utility to change file attributes (Hidden/Readonly/etc).
    ALTER    DOC  Documentation for ALTER.COM (4k).
    BACKSTAT EXE  Tells you which files need to be backed up.
    CATALOG  COM  Make a sorted directory.
    CDSECRET COM  Go to a ``secret'' sub-directory.
    DD       BAT  Sort directory by date (PART OF DNXSD.BAT).
    DIR2     BAS  BASIC version of a directory sorter.
    DISKPARK DOC  Documentation for DISKPARK.EXE (1k).
    DISKPARK EXE  Position the hard disk drive head in a safety zone.
    DISRTN   EXE  Undeletes and recovers lost first sectors.
    DN       BAT  Sort directory by name (Part of DNXSD.BAT).
    DNXSD    DOC  Documentation for sorting directory.
    DS       BAT  Sort directory by size (Part of DNXSD.BAT).
    DX       BAT  Sort directory by extension (Part of DNXSD.BAT).
    DXSAVE   BAT  Sample change in .BAT to save sorted directory to disk.
    FREE     COM  Displays amount of actual free space on hard disk.
    GCOPY    DOC  Documentation for GCOPY.EXE (1k).
    GCOPY    EXE  Menu type selective copy program.
    GDEL     DOC  Documentation for GDEL.EXE (1k).
    GDEL     EXE  Menu type selective delete program.
    MDSECRET COM  Make a ``secret'' sub-directory.
    NDOSEDIT COM  VM style editor for DOS commands.
    NDOSEDIT DOC  Documentation for NDOSEDIT.COM (5k).
    POKING   TXT  Text file containing locations of information about disks.
    RDSECRET COM  Remove ``secret'' sub-directory.
    READONLY COM  Make a file read-only to make it un-erasable.
    READONLY DOC  Documentation for READONLY.COM.
    READWRIT COM  Return a read-only file back to normal read/write status.
    READWRIT DOC  Documentation for READWRIT.COM.
    SDIR5    COM  Utility to list files by types and different formats.
    SDIR5    DOC  Documentation for SDIR5.COM.
    SEARCH   COM  Useful replacement for DOS path command.
    SEARCH   DOC  Documentation for SEARCH.COM (2k).
    SECRET   DOC  Documentation for RDSECRET, MDSECRET, and CDSECRET.
    TREED    COM  Make a directory tree.
    UNDEL    COM  Recovers erased files.
    UNDO     BAS  Allows fixed disk users to read backup diskettes.
    VDL      COM  File deletion utility.
    VDL      DOC  Documentation for VDL.COM (2k).
    VIEWDISK DOC  Documentation for VIEWDISK.EXE.
    VIEWDISK EXE  Look at individual disk sectors.
    WHEREIS  COM  Find a file on the hard disk regardless of location.
    WHEREIS  DOC  Documentation for WHEREIS.COM (1k).
    WRT      DOC  Documentation for WRTE.COM and WRTP.COM.
    WRTE     COM  Make a read-only file copyable.
    WRTP     COM  Make a read-only file.
    DIARY    COM  System use logging program.
    ADD      BAT  Batch file used by DIARY.COM.
    LST      BAT  Batch file used by DIARY.COM.
    OFF      BAT  Batch file used by DIARY.COM.
    SEE      BAT  Batch file used by DIARY.COM.
    READ_ME  1ST  Introductory text file for DIARY.COM.
    PASSWORD DOC  Documentation file for PASSWORD.EXE.
    PASSWORD EXE  Protect your system with a password.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## UNDO.BAS

```bas
10 KEY OFF
20 CLS
30 COLOR 0,7
40 LOCATE 5,33
50 PRINT " UNDO-128.BAS "
60 LOCATE 7,31
70 PRINT " By Rich Schinnell "
80 LOCATE 8,26,1
90 PRINT " Rockville, MD (301) 949-8848 "
100 COLOR 7,0
110 PRINT
120 PRINT
130 PRINT "A program for IBM  DOS 2.0/2.1 Fixed Disk owners , ie XT's and"
140 PRINT "expansion chassis's who use the IBM DOS 2.0 BACKUP.COM utility and"
150 PRINT "want to access files from their backup disks without Restore."
160 PRINT "All files are restored up to the next 128 Byte boundry."
170 PRINT "This cause absolutely no problems as DOS always reserves"
180 PRINT "space in blocks of 512 for SS disks and 1024 for DS disks."
190 PRINT "Press <ENTER> to quit... Now Enter  SINGLE Letter Drive  for"
200 DEFINT A-Z
210 FALSE% = 0
220 TRUE% = NOT FALSE%
230 ON ERROR GOTO 1310
240 ZZZ! = 1
250 PRINT:LOCATE ,,1
260 PRINT"Backup disk Location ";
270 DR$=INKEY$:IF LEN(DR$)<1 THEN 270
280 IF ASC(DR$) = 13 THEN 1290
290 DR$ = DR$ + ":"
300 OPEN DR$+"BACKUPID.@@@" FOR INPUT AS #1
310 CLOSE #1
320 FILES DR$ + "*.*"
330 PRINT
340 PRINT
350 INPUT "File name to Recover (no Drive Designation) ";INFILE$
360 IF LEN(INFILE$) < 1 THEN 1290
370 CLOSE #1
380 OPEN DR$+INFILE$ FOR INPUT AS #1
390 CLOSE 1
400 CLOSE #1
410 OPEN DR$+"BACKUPID.@@@" AS #1 LEN=128
420 FIELD #1,128 AS G$
430 GET #1
440 CLOSE #1
450 N$ = STR$( ASC( MID$(G$,3,1))) + STR$( ASC( MID$(G$,2,1)))
460 N=VAL(N$)
470 DTE$=STR$(ASC(MID$(G$,7,1)))+"-"+STR$(ASC(MID$(G$,6,1)))+"-"
480 DTE$=DTE$+STR$(ASC(MID$(G$,4,1))+1792)
490 PRINT "This is your backup disk #"; N;" Dated ";DTE$
500 CLOSE #1
510 OPEN DR$+INFILE$ AS #1 LEN=128
520 C$ = ""
530 D$ = ""
540 FIELD #1,128 AS A$
550 A# = LOF(1)
560 PRINT "Input file has";A# - 128;" Bytes in it"
570 GET #1
580 C$ = A$
590 FOR I% = 1 TO 128
600   IF ASC( MID$(C$,I%,1)) < 33 THEN 620
610   D$ = D$ + MID$(C$,I%,1)
620 NEXT I%
630 IF ASC(MID$(C$,2,1)) = 1 THEN 660
640 PRINT "This is Part 2 of";D$;" You must start with the first part"
650 BEEP:GOTO 330
660 IF ASC(MID$(C$,1,1)) =255 THEN ONLY.ONE%=-1:GOTO 690
670 PRINT:COLOR 23,0:PRINT "File on two Disks ,Insert backup disk #";
680 PRINT N+1;" When Instructed" : COLOR 7,0 : BEEP
690 PRINT
700 PRINT CHR$(34); MID$(D$,1,40); CHR$(34);" Was the file name when backed up"
710 INPUT "What do you want to name the output file ";OUTFILE$
720 IF LEN(OUTFILE$) < 1 THEN 330
730 OPEN OUTFILE$ FOR INPUT AS #2
740 CLOSE 2
750 PRINT "File ";OUTFILE$;" already exists, <O>verwrite ";
760 INPUT ": ";WELL$
770 IF WELL$ = "O" OR WELL$ = "o" THEN 780  ELSE 710
780 CLOSE #2
790 OPEN OUTFILE$ FOR OUTPUT AS #2
800 CLOSE #2
810 OPEN OUTFILE$ AS #2 LEN=128
820 FIELD #2,128 AS B$
830 COLOR 23,0
840 PRINT "Working ....";
850 COLOR 7,0
860 FOR I! = 2 TO INT((A#-128)/128)+2
870   GET #1,I!
880   LSET B$ = A$
890   PUT #2,ZZZ!
900   ZZZ! = ZZZ! + 1
910   PRINT CHR$(15);
920 NEXT I!
930 IF ONLY.ONE% THEN 1260
940 PRINT
950 PRINT "Insert Backup Disk #";N +1;" in drive ";DR$;
960 PRINT " and press <ENTER> or <Q>uit ":BEEP
970 R$ = INKEY$
980 IF R$ = "" THEN 970
990 IF R$ = "Q" OR R$ = "q" THEN CLOSE  : KEY ON  : END
1000 CLOSE #1
1010 OPEN DR$+"BACKUPID.@@@" AS #1 LEN=128
1020 FIELD #1,128 AS G$
1030 GET #1
1040 CLOSE #1
1050 N1$ = STR$( ASC( MID$(G$,3,1))) + STR$( ASC( MID$(G$,2,1)))
1060 N1=VAL(N1$)
1070 IF N1 = N + 1 THEN 1090
1080 PRINT "WRONG DISK, TRY AGAIN You put in disk #"; N1 : GOTO 930
1090 CLOSE #1
1100 OPEN DR$+INFILE$ FOR INPUT AS #1
1110 CLOSE 1
1120 OPEN DR$+INFILE$ AS #1 LEN=128
1130 FIELD #1,128 AS A$
1140 C$ = ""
1150 D$ = ""
1160 A# = LOF(1)
1170 PRINT "Input file has";A# - 128;" Bytes in it"
1180   GET #1
1190   C$ = A$
1200 FOR I% = 1 TO 128
1210   IF ASC( MID$(C$,I%,1)) < 33 THEN 1230
1220   D$ = D$ + MID$(C$,I%,1)
1230 NEXT I%
1240 ONLY.ONE% = - 1
1250 GOTO 860
1260 CLOSE
1270 PRINT
1280 PRINT "File ";OUTFILE$;" created  Size="; STR$((ZZZ!-1)*128);" Bytes
1290 KEY ON
1300 END
1310 IF ERL=300 THEN DR$="":PRINT " Not a Valid Backup Disk":BEEP:RESUME 250
1320 IF ERL=380 THEN PRINT DR$;INFILE$;" NOT FOUND ":CLOSE #1:RESUME 250
1330 IF ERL=730 THEN RESUME 780
1340 IF ERL=890 THEN PRINT "disk is Probably full, check the disk":RESUME 1290
1350 IF ERL=1100 THEN PRINT "Not found " : RESUME 940
1360 PRINT "Error"; ERR ;" has occured in line #"; ERL
1370 RESUME 1290
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0478

     Volume in drive A has no label
     Directory of A:\

    ADD      BAT        12  12-31-87   3:00a
    ALTER    COM      1024   6-12-84   1:42p
    ALTER    DOC      4096   6-12-84   1:43p
    AUTOEXEC BAT        22  12-31-87   3:00a
    BACKSTAT EXE     13312   1-17-85   2:20p
    CATALOG  COM      1280   2-05-83
    CDSECRET COM       512   5-09-85   9:05a
    DD       BAT        26   4-14-84   2:44p
    DIARY    COM     60685  12-31-87   3:00a
    DIARYADD COM     26776  12-31-87   3:00a
    DIR2     BAS     21376  11-27-83   6:00p
    DISKPARK DOC      1792   2-27-85   8:25a
    DISKPARK EXE      1408   2-27-85   8:25a
    DISRTN   EXE      9728   6-06-82
    DN       BAT        22   4-14-84   2:41p
    DNXSD    DOC       752   4-16-84   3:55p
    DS       BAT        26   4-14-84   2:43p
    DX       BAT        25   4-14-84   2:43p
    DXSAVE   BAT        34   4-16-84   3:48p
    FILES478 TXT      3370   9-09-88  10:46a
    FREE     COM      1024   3-25-84   2:08a
    GCOPY    DOC      1024   3-25-84   1:05a
    GCOPY    EXE     14336   3-25-84   1:00a
    GDEL     DOC      1024   3-25-84   1:59a
    GDEL     EXE     13312   3-25-84   1:35a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617   6-03-88   9:01a
    LST      BAT        12  12-31-87   3:00a
    MANUALS  BAT        16   6-03-88   9:02a
    MDSECRET COM       512   5-09-85   9:05a
    NDOSEDIT COM      2560   6-08-84   1:13p
    NDOSEDIT DOC      5632   6-08-84   1:12p
    OFF      BAT        12  12-31-87   3:00a
    PASSWORD DOC      6612  12-04-86   8:18p
    PASSWORD EXE     41686  12-01-86   8:17p
    POKING   TXT      1625   2-20-86   8:27a
    RDSECRET COM       512   5-09-85   9:06a
    README   BAT       650   2-26-87   9:03a
    READONLY COM       128   6-03-85  10:15p
    READONLY DOC       256   6-03-85  10:15p
    READWRIT COM       128   6-03-85  10:15p
    READWRIT DOC       128   6-03-85  10:15p
    READ_ME  1ST      1055  12-31-87   3:00a
    SDIR5    COM      6528   3-20-85   8:57a
    SDIR5    DOC      7936   3-20-85   8:59a
    SEARCH   COM       640   5-08-85   6:58p
    SEARCH   DOC      2048   5-08-85   6:58p
    SECRET   DOC      1408   5-09-85   9:06a
    SEE      BAT        12  12-31-87   3:00a
    TREED    COM      1920   5-10-85   9:37p
    UNDEL    COM      2176   3-19-85   6:57a
    UNDO     BAS      4608   2-21-84   6:56a
    VDL      COM      1024   4-10-84   5:29p
    VDL      DOC      2048   4-10-84   5:31p
    VIEWDISK DOC      4736   3-15-85   8:38a
    VIEWDISK EXE     16384   3-15-85   8:36a
    WHEREIS  COM       512   1-08-84   4:55a
    WHEREIS  DOC      1024   1-08-84   4:56a
    WRT      DOC      1536   4-10-84   5:42p
    WRTE     COM       512   4-10-84   5:40p
    WRTP     COM       512   4-10-84   5:39p
           61 file(s)     294741 bytes
                           35840 bytes free
