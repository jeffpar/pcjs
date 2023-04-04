---
layout: page
title: "PC-SIG Library Disk #373"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0373/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0373"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 17"

    This collection is oriented towards general system maintenance with
    programs for applying self-styled, useful filename extensions and other
    enhancements to the DOS batch file capabilities.  There is also an
    assortment of general purpose utilities.  You can improve the security
    of your system by preventing `break-out' of a boot or file operation.
    The SCR121F package provides full screen design and edit capabilities,
    and interfaces to DOS, DBase, MS Cobol, and Clipper.  And just for fun,
    the BANNER program lets you design and print large messages.
    
    System Requirements: Some programs require BASIC
    
    How to Start: To run a COM or BAT program simply type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.  To read DOC
    files simply enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:  SCR1 $24.00
    
    File Descriptions:
    
    WAIT     COM  Pauses a batch file for 3 seconds to allow interruption
    BRK      COM  Causes a termination with error code return
    BANNR1   BAT  Batch file to run BANNER1.COM
    BANNER1  DOC  Documentation for BANNER1.COM
    BANNER1  COM  Prints block letters on the display/printer with options.
    WAITTIME COM  Used in batch files to wait for a certain time to pass
    WAIT     DOC  Documentation for WAIT.COM
    WAITTIME DOC  Documentation for WAITTIME.COM
    TUNE     DOC  Documentation for TUNE.COM
    TUNE     COM  Used in batch files to produce an audible signal of
    SIZER    DOC  Documentation for SIZER.COM
    SETERROR DOC  Documentation for SETERROR.COM
    SIZER    COM  Tests the size of a file and sets an errorlevel based
    SIZER    BAS  BASIC version of SIZER
    SIZER    ASM  Assembly version of SIZER
    SIGNAL   COM  Produces a signal and waits for a keystroke
    SETERROR COM  Accepts one command line argument and sets the DOS
    QUERY    EXE  Batch file 'Y/N' prompt routine
    SCR21F   ARC  Screen editor and display utilities (Archived format)
    REMDOT   EXE  Displays keyboard buffer strings
    QUERY    ASM  Assembly source code for QUERY.EXE
    PRTSC    DOC  Documentation for PRTSC.COM
    PRTSC    COM  Starts/stops the printer during batch file processing
    PAUSE2   DOC  Documentation for PAUSE2.COM
    PAUSE2   COM  Improved version of DOS's PAUSE command
    NORESET  BAS  Disables the <Ctrl><Alt><Del> keyboard reset sequence
    CHECKING DOC  Documentation for CHECKING.COM
    CHECKING COM  Allows conditional termination of batch files
    FLIP     COM  Control special key states from the DOS command line
    DSIZE    DOC  Documentation for DSIZE.COM
    DSIZE    COM  Determine the format of a diskette from in a batch file
    CR       COM  Useful for putting 64K, one disk drive and monochrome
    NORESET  ASM  Disables the <Ctrl><Alt><Del> keyboard reset sequence
    NOBRKCOM BAS  Patches COMMAND.COM to prevent breaking of AUTOEXEC.BAT
    INPUT    COM  Get input from console
    INP-TEST BAT  Sample batch file
    INP      BAT  Sample batch file
    GETDIGIT DOC  Documentation for GETDIGIT.COM
    GETDIGIT COM  Accepts a prompt from the command line and a one digit
    FLIP     DOC  Documentation for FLIP.COM
    SCREDIT  COM  Screen editor
    SETERROR ASM  Source code for SETERROR.COM
    SCRHELP? SCR  Help screens for SCREDIT.COM
    SCR      TXT  Documentation for SCREDIT.COM
    SCR???   ???  Programming language interfaces for SCREDIT.COM
    SCRBATCH COM  Display files created by SCREDIT.COM
    CR       DOC  Documentation of CR.COM
    ANSIPCH  EXE  Part of Re-View
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## NOBRKCOM.BAS

```bas
10 REM NOBRKCOM.BAS BY JOHN F. RATTI 13 JULY, 1983
20 REM THIS PROGRAM PATCHES "COMMAND.COM" TO PREVENT BREAKING OF AUTOEXEC.BAT
30 OPEN "COMMAND.COM" AS #1 LEN=1
40 FIELD #1, 1 AS A$
50 LSET A$=CHR$(&H4C):PUT #1,&H5D8
60 LSET A$=CHR$(&H1B):PUT #1,&H5DB
70 CLOSE
```

## NORESET.BAS

```bas
  1 CLS:PRINT "THIS basic PROGRAM WAS AUTOMATICALLY CREATED BY CONVERT.BAS"
  2 PRINT"Copyright 1982 ,Rich Schinnell Rockville,MD. Not for Sale."
  3 PRINT "This program will automatically generate you a .COM program named NORESET.COM":PRINT 
  4 ON ERROR GOTO 5000
  6 INPUT "PLACE the disk to write the file TO in Default Drive (A: Usually) HIT <ENTER> "; SCHINNELL$
  9 PRINT:PRINT " Now reading the data statements, wait!"
 10 RESTORE:READ T:FOR I = 1 TO T:READ N:X#=X#+N:NEXT I
 20 READ TOT# :IF TOT#<>X# THEN 5000
 22 CLS:LOCATE 12,5:PRINT "Now writing file NAMED NORESET.COM standby please  ASCII COUNT IS ";TOT#
 30 RESTORE
 40 OPEN "R", #1,"NORESET.COM",1 
 50 FIELD #1, 1 AS N$
 60 READ N
 70 FOR I = 1 TO N
 80 READ N:LSET N$=CHR$(N):
 92 PUT #1 :NEXT I:CLOSE
 94 PRINT "NORESET.COM CREATED * *":GOTO 5010
 99 DATA  170
1000 DATA 235,115,0,0,0,0,80,30,184,64,0,142
1011 DATA 216,246,6,23,0,4,116,12,246,6,23,0,8
1012 DATA 116,5,128,38,23,0,243,31,88,46,255,46,2
1013 DATA 1,78,79,82,69,83,69,84,58,32,73,110,99
1014 DATA 111,114,114,101,99,116,32,68,79,83,32,118,101
1015 DATA 114,115,105,111,110,46,13,10,36,78,79,82,69
1016 DATA 83,69,84,58,32,60,67,116,114,108,62,60,65
1017 DATA 108,116,62,60,68,101,108,62,32,114,101,115,101
1018 DATA 116,32,100,105,115,97,98,108,101,100,46,13,10
1019 DATA 36,180,48,205,33,60,0,117,10,141,22,39,1
1020 DATA 180,9,205,33,205,32,184,9,53,205,33,140,6
1021 DATA 4,1,137,30,2,1,186,6,1,184,9,37,205
1022 DATA 33,141,22,73,1,180,9,205,33,141,22,40,1
1023 DATA 205,39
1024 DATA  13131
5000 PRINT "* * ERROR VERIFY DATA * * * "
5010 CLOSE:END
```

## SIZER.BAS

```bas
  1 CLS:PRINT "THIS basic PROGRAM WAS AUTOMATICALLY CREATED BY CONVERT.BAS"
  2 PRINT"Copyright 1982 ,Rich Schinnell Rockville,MD. Not for Sale."
  3 PRINT "This program will automatically generate you a .COM program named sizer.com":PRINT 
  4 ON ERROR GOTO 5000
  6 INPUT "PLACE the disk to write the file TO in Default Drive (A: Usually) HIT <ENTER> "; SCHINNELL$
  9 PRINT:PRINT " Now reading the data statements, wait!"
 10 RESTORE:READ T:FOR I = 1 TO T:READ N:X#=X#+N:NEXT I
 20 READ TOT# :IF TOT#<>X# THEN 5000
 22 CLS:LOCATE 12,5:PRINT "Now writing file NAMED sizer.com standby please  ASCII COUNT IS ";TOT#
 30 RESTORE
 40 OPEN "R", #1,"sizer.com",1 
 50 FIELD #1, 1 AS N$
 60 READ N
 70 FOR I = 1 TO N
 80 READ N:LSET N$=CHR$(N):
 92 PUT #1 :NEXT I:CLOSE
 94 PRINT "sizer.com CREATED * *":GOTO 5010
 99 DATA  257
1000 DATA 180,48,205,33,60,0,117,3,235,63,144,14
1011 DATA 31,141,22,141,1,184,0,61,205,33,115,3,235
1012 DATA 65,144,139,216,184,2,66,51,201,51,210,205,33
1013 DATA 115,3,235,49,144,131,250,0,116,3,235,86,144
1014 DATA 61,115,0,116,3,235,78,144,180,62,205,33,115
1015 DATA 3,235,18,144,184,0,76,205,33,141,22,148,1
1016 DATA 180,9,205,33,51,192,205,33,80,180,62,205,33
1017 DATA 88,80,141,22,185,1,180,9,205,33,90,128,250
1018 DATA 9,126,11,82,178,49,180,2,205,33,90,128,234
1019 DATA 10,128,194,48,180,2,205,33,178,13,180,2,205
1020 DATA 33,178,10,180,2,205,33,184,1,76,205,33,69
1021 DATA 82,82,76,79,71,0,83,73,90,69,82,32,114
1022 DATA 101,113,117,105,114,101,115,32,68,79,83,32,50
1023 DATA 46,48,32,111,114,32,103,114,101,97,116,101,114
1024 DATA 46,13,10,36,70,105,108,101,32,97,99,99,101
1025 DATA 115,115,32,101,114,114,111,114,32,45,45,32,115
1026 DATA 116,97,116,117,115,58,32,36,83,73,90,69,82
1027 DATA 32,45,45,32,67,111,112,121,114,105,103,104,116
1028 DATA 32,40,67,41,32,49,57,56,51,32,84,111,110
1029 DATA 121,32,65,108,97,110,32,82,104,101,97
1030 DATA  23779
5000 PRINT "* * ERROR VERIFY DATA * * * "
5010 CLOSE:END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0373

     Volume in drive A has no label
     Directory of A:\

    READ_ME  1ST       719   1-15-87   4:48p
    SCREDIT  COM      8611   1-15-87   4:42p
    SCRHELPA SCR      3872   1-15-87   4:23p
    SCRHELPB SCR      3872   1-15-87   4:24p
    SCRHELPC SCR      3872   1-15-87   4:24p
    SCRHELPD SCR      3872   1-15-87   4:24p
    SCRHELPE SCR      3872   1-15-87   4:24p
    SCRHELPF SCR      3872   1-15-87   4:25p
    DSIZE    COM       384   1-19-85  11:41a
    DSIZE    DOC       806   9-25-83   9:05p
    INP      BAT      1280   1-01-80   3:10a
    INP-TEST BAT      1536   1-01-80   3:09a
    INPUT    COM       256   1-01-80   3:09a
    WAITTIME COM       384  12-07-84   5:04p
    WAITTIME DOC       896  12-07-84   5:04p
    BANNER1  COM       931   1-29-83   8:28p
    BANNER1  DOC      2114   9-17-83   9:44a
    FLIP     COM       384  12-14-83   7:54a
    BANNR1   BAT        22   1-07-85   7:05p
    FLIP     DOC       640  12-14-83   7:55a
    PRTSC    COM       512  12-14-83   7:53a
    PRTSC    DOC       512  12-14-83   7:53a
    REMDOT   EXE      4887  11-24-84  12:29p
    BRK      COM       128   1-12-85   8:01a
    CHECKING COM       118   1-17-83   4:51p
    CHECKING DOC      1152  11-30-83  10:30a
    GETDIGIT COM       173  12-13-83   8:37a
    GETDIGIT DOC      2280  12-13-83   8:56a
    QUERY    ASM      6615   2-22-84   9:39p
    QUERY    EXE       768   2-22-84   9:43p
    SETERROR ASM      6744   4-26-84   7:46p
    SETERROR COM       292   4-26-84  12:37p
    SETERROR DOC      1920   4-26-84   8:15a
    SIZER    ASM      9856  12-13-83   7:51a
    SIZER    BAS      2048  12-13-83   7:48a
    SIZER    COM       257  12-13-83   8:45a
    SIZER    DOC      3136  12-15-83   1:26p
    SIGNAL   COM       256  12-28-84   7:01p
    NORESET  ASM      7040  10-12-84   4:15p
    NORESET  BAS      1664  10-12-84   4:15p
    WAIT     COM       128   1-01-80  12:24a
    WAIT     DOC        85   2-19-84   2:06p
    NOBRKCOM BAS       512   8-11-83   7:20a
    TUNE     COM       512   6-10-84  12:27a
    TUNE     DOC      1536   6-10-84  12:28a
    CR       COM       128   2-16-85   1:41a
    CR       DOC      1280   2-24-85   1:03p
    PAUSE2   COM       384  11-04-84   5:40p
    PAUSE2   DOC      5120  11-04-84   5:39p
    FILES373 TXT      3142   7-08-85   2:36p
    SCRBATCH COM      2060  12-12-86   9:27p
    SCR      TXT     29184   1-15-87   4:19p
    SCRCONV  COM      2681   6-26-86   9:44p
    SCRCOB   OBJ       744   7-01-86   2:44p
    SCRCLIPR OBJ       663   9-01-86   7:29p
    SCRDBASE BIN      8183   9-01-86   7:30p
    SCRQBAS  OBJ       749   6-28-86  11:13p
    SCR21F   ARC     35814   1-15-87   4:48p
           58 file(s)     185458 bytes
                          107520 bytes free
