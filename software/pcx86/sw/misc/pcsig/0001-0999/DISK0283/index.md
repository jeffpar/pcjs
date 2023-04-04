---
layout: page
title: "PC-SIG Library Disk #283"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0283/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0283"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 15"

    This disk contains a wide variety of different file and system tools.
    DTK and CWEEP13 are powerful file handlers.  DOCUFILE lets you develop
    callable help screens for your programs, RAM is a nice RAM-disk program,
    installable as a device driver, (exercise caution when using with other
    RAM-resident software, and it will serve you well).  Other utilities
    give Epson owners good letter-quality print, generate interrupts on
    demand, find files, and more.
    
    CWEEP 2.31a is a file-manager similar to the CP/M program SWEEP which
    lets the user move through a list of files, tag ones to be worked on,
    and then copy, delete, or rename them.  It will also allow the user to
    view files, make and remove directories.
    
    A very fast, single keystroke way to work through a directory of files,
    copying, viewing, and deleting them.  Has a protected copy feature,
    which will warn the user if a file of the same name is about to be
    over-written.  After a file is copied, it will (optionally) be re-opened
    and a CRC done to verify the copy.
    
    Special Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  DTK $10.00.
    
    File Descriptions:
    
    -------- ---  KWSEARCH by Patrick Teti
    KWSEARCH DOC  Documentation for KWSEARCH (13K).
    KWSEARCH EXE  Copies text using search criteria.
    -------- ---  3 Utilities by John White
    INT      COM  Program interrupt.
    INT      DOC  Documentation for INT.
    INT      A    Part of INT.
    -------- ---  Famous Sweep program from CPM
    CWEEP    DSC  Introductory text file.
    CWEEP    EXE  Main program file.
    CWEEP    TXT  Manual.
    -------- ---  Directory Toolkit
    DTK      DOC  Documentation for DTK (8K).
    DTK      EXE  Sort directory, change attributes, etc.
    MAKERAM  BAT  Batch file to install RAM.
    MAKEINT  BAT  Batch file to install INT.
    FFIND    DOC  Documentation for FFIND.
    FFIND    C    Part of FFIND.
    FFIND    EXE  Finds files by scanning for specific argument.
    INT_PORT DOC  Additional Documentation for INT.
    SETRAM   EXE  Sets up RAM.
    RAM      DOC  Documentation for RAM.
    RAM      A    Part of RAM.
    RAM      SYS  RAM drive installer.
    -------- ---  Docufile
    KILLER   EXE  Deletes files.
    AUTOEXEC BAT  Batch file to diskcopy.
    README   BAS  BASIC version of README.TXT.
    README   TXT  Documentation for DOCUFILE.
    DOCUFILE BAS  Creates BASIC program of text file.
    CATALOG  EXE  Demonstration of multiple file searcher.
    HELP     BAT  DOCUFILE help screen generator.
    DOCUFILE BAT  Batch file to bring up DOCUFILE in BASIC.
    -------- ---  Letter Quality print routine
    LQ       COM  Letter quality print on Epson MX printer.
    LQ       DOC  Documentation for LQ (9K).
    SETRAM   C    Part of SETRAM.EXE.
    MESSAGE  EXE  Displays message at bootup.
    LABELS   FIL  Part of LABELS.EXE.
    LABELS   DOC  Documentation for LABELS.EXE.
    LABELS   EXE  Envelope label making program.
    MESSAGE  DOC  Documentation for MESSAGE.EXE.
    MESSAGE  FIL  Part of MESSAGE.EXE.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DOCUFILE.BAS

```bas
10 ' docufile
20 ' (c) 1984 by Global Technologies Corporation
30 ' author: W. French
100 CLS
110 PRINT "DocuFile - (c) 1984 by Global Technologies"
120 PRINT "------------------------------------------"
130 PRINT
140 INPUT "Enter source text file name............ ",INFILE$
150 PRINT
160 INPUT "Enter help screen program file name.... ",OUTFILE$
170 PRINT
180 INPUT "Enter starting line number............. ",L
190 PRINT
192 CLS
194 PRINT "DocuFile - (c) 1984 by Global Technologies"
196 PRINT "------------------------------------------"
198 PRINT:PRINT "Creating help screen, please stand by..."
200 ' file i/o
210 GOSUB 800:' open source file for reading...
220 GOSUB 900:' open destination file for writting...
300 ' build help screen from source file...
301 TOP=L:PTOP=L
310 IF EOF(1) THEN 350
320 INPUT #1,TEXT$
322 IF LEFT$(TEXT$,1)="*" THEN GOSUB 400:GOTO 340
325 TEXT$=STR$(L)+" print "+CHR$(34)+TEXT$+CHR$(34)
330 PRINT #2,TEXT$
335 L=L+2
340 GOTO 310
350 TEXT$=STR$(L)+" return"
360 L=L+2
370 PRINT #2,TEXT$
380 CLS                 
390 SYSTEM
400 ' page break subr...
420 TEXT$=STR$(L)+" print "         
422 L=L+2
430 PRINT #2,TEXT$
440 TEXT$=STR$(L)+" print "+CHR$(34)+"N)ext page, P)revious page, or C)ancel "+CHR$(34)+";"
442 L=L+2
450 PRINT #2,TEXT$
460 TEXT$=STR$(L)+" a$=inkey$:if a$="+CHR$(34)+CHR$(34)+" then "+STR$(L)
462 L=L+2
470 PRINT #2,TEXT$
480 TEXT$=STR$(L)+" if a$="+CHR$(34)+"C"+CHR$(34)+" or a$="+CHR$(34)+"c"+CHR$(34)+" then cls:return"
490 L=L+2
500 PRINT #2,TEXT$
510 TEXT$=STR$(L)+" if a$="+CHR$(34)+"P"+CHR$(34)+" or a$="+CHR$(34)+"p"+CHR$(34)+" then cls:goto "+STR$(PTOP)
512 L=L+2
520 PRINT #2,TEXT$
530 TEXT$=STR$(L)+" cls"
540 L=L+2
550 PRINT #2,TEXT$
555 PTOP=TOP
560 TOP=L
570 RETURN
800 ' open source file
810 OPEN INFILE$ FOR INPUT AS 1
820 RETURN
900 ' open destination file
910 OPEN OUTFILE$ FOR OUTPUT AS #2
920 RETURN
```

## README.BAS

```bas
1000 PRINT "DocuFile - Help Screen Generator         	            General Information"
1002 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1004 PRINT ""
1006 PRINT "DocuFile will take any standard text file and create a basic program to"
1008 PRINT "display the text file. This allows you to create help screens from your"
1010 PRINT "favorite text editor and then add all the PRINT statements automatically."
1012 PRINT "This is beneficial for two reasons. 1 - if you need to insert portions of text"
1014 PRINT "you do so with your text editor and then regenerate the help screens with  "
1016 PRINT "DocuFile. 2 - all the prompts for next page and previous page are added"
1018 PRINT "wherever you indicate a page break."
1020 PRINT ""
1022 PRINT "This program was developed by Global Technologies Corporation and has been "
1024 PRINT "placed in public domain for the benefit of all. If you feel this program is"
1026 PRINT "beneficial to your needs please send a check for $10.00 to Global Technologies"
1028 PRINT "P.O. Box 441000 Aurora Colorado 80044."
1030 PRINT ""
1032 PRINT "Please copy this program and give it to as many people as you want."
1034 PRINT 
1036 PRINT "N)ext page, P)revious page, or C)ancel ";
1038 A$=INKEY$:IF A$="" THEN  1038
1040 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1042 IF A$="P" OR A$="p" THEN CLS:GOTO  1000
1044 CLS
1046 PRINT "DocuFile - Help Screen Generator         	               Source Text File"
1048 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1050 PRINT ""
1052 PRINT "The source text file is the word processing file that you are going to"
1054 PRINT "convert to Basic language file code for purposes of generating easy"
1056 PRINT "to use help screens that may be called from Basic applications.             "
1058 PRINT ""
1060 PRINT "Enter the file name with a disk drive letter if it does not reside on"
1062 PRINT "the drive you are currently defaulted to. For Example [B:TEXTFILE.EXT]."
1064 PRINT ""
1066 PRINT "The source text file must be a standard ASCII file and must not contain"
1068 PRINT "special control characters single or double quotation marks asemi colons"
1070 PRINT "or commas! If you must have commas or special punctuation in the help"
1072 PRINT "screen add it after DocuFile has created the help screen program."
1074 PRINT 
1076 PRINT "N)ext page, P)revious page, or C)ancel ";
1078 A$=INKEY$:IF A$="" THEN  1078
1080 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1082 IF A$="P" OR A$="p" THEN CLS:GOTO  1000
1084 CLS
1086 PRINT "Docufile - Help Screen Generator         		    Help Screen Program"
1088 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1090 PRINT ""
1092 PRINT "The destination help screen is the Basic program file that will contain the "
1094 PRINT "text from your source file converted into Basic source code. This file "
1096 PRINT "should be named as the help program you will be running from your Basic"
1098 PRINT "application program."
1100 PRINT ""
1102 PRINT "Enter the file name with a disk drive letter if it will not reside on"
1104 PRINT "the drive you are currently defaulted to. For example [B:DESTFILE.BAS]."
1106 PRINT ""
1108 PRINT "The output code file will be generated with Basic PRINT statements and"
1110 PRINT "may be executed from any Basic application as a subroutine. The program        "
1112 PRINT "generated will contain RETURN statements on every page and at the end of"
1114 PRINT "the entire subroutine to facilitate use with other programs and appli-"
1116 PRINT "cations without modifications. If you need to run the help screen as a free"
1118 PRINT "standing program simply replace all RETURN statements with SYSTEM statements."
1120 PRINT 
1122 PRINT "N)ext page, P)revious page, or C)ancel ";
1124 A$=INKEY$:IF A$="" THEN  1124
1126 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1128 IF A$="P" OR A$="p" THEN CLS:GOTO  1046
1130 CLS
1132 PRINT "DocuFile - Help Screen Generator                                       AutoPage"
1134 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1136 PRINT ""
1138 PRINT "The AutoPage function automatically places pause/continue prompts wherever"
1140 PRINT "an [*] is found in the document text file. The asterix [*] must be in the "
1142 PRINT "first column of any line in the text file. When used a prompt will appear"
1144 PRINT "when the listing reaches that point and three options will be offered. "
1146 PRINT ""
1148 PRINT "(N)ext page (P)revious Page or C)ancel"
1150 PRINT ""
1152 PRINT "If you choose not to have AutoPage enter these features for you may"
1154 PRINT "place such prompts as you desire using whatever text editor is available."
1156 PRINT "This may be necessary if you want to chain to other programs from a help"
1158 PRINT "screen."
1160 PRINT ""
1162 PRINT "AutoPage will RETURN program control to where it was called from with the"
1164 PRINT "RETURN statement."
1166 PRINT 
1168 PRINT "N)ext page, P)revious page, or C)ancel ";
1170 A$=INKEY$:IF A$="" THEN  1170
1172 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1174 IF A$="P" OR A$="p" THEN CLS:GOTO  1086
1176 CLS
1178 SYSTEM
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0283

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        17   2-23-84   5:02p
    CATALOG  EXE      7424   2-23-84   5:00p
    CWEEP    DSC      2250   2-15-89   1:33p
    CWEEP    EXE     54309   1-17-88   3:32p
    CWEEP    TXT     38553   1-18-88   2:00p
    DISKCOPY COM      2008   5-07-82  12:00p
    DOCUFILE BAS      1792  12-27-83   7:52a
    DOCUFILE BAT       128  12-27-83   7:43a
    DTK      DOC      8704  11-09-86   9:19a
    DTK      EXE     57856  11-09-86   9:19a
    FFIND    C        2098   1-23-85   6:55p
    FFIND    DOC       826   1-23-85   7:13p
    FFIND    EXE      7680   1-23-85   6:55p
    FILES283 TXT      3173   3-02-89   9:29a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       848   2-28-89   8:48a
    HELP     BAT       128  12-27-83   7:09a
    INT      A        3080   1-25-85  12:31p
    INT      COM       512   1-25-85  12:31p
    INT      DOC      1561   1-17-85  10:00a
    INT_PORT DOC      1854   1-29-85   9:01p
    KILLER   EXE      1920   2-23-84   5:00p
    KWSEARCH DOC     13135   1-31-85  10:22a
    KWSEARCH EXE     39424   1-31-85  11:59a
    LABELS   DOC      3200   1-09-87  11:45p
    LABELS   EXE     23936   1-09-87  11:45p
    LABELS   FIL       256   1-09-87  11:45p
    LQ       COM      5760   1-01-80   1:42a
    LQ       DOC      9216   1-01-80   1:44a
    MAKEINT  BAT       126   1-25-85  11:15a
    MAKERAM  BAT       445   1-25-85  11:16a
    MANUAL   BAT       163   2-28-89   8:45a
    MESSAGE  DOC      1152   1-09-87  10:39p
    MESSAGE  EXE     20352   1-09-87  10:39p
    MESSAGE  FIL       128   1-09-87  10:39p
    RAM      A        4492   1-18-85   1:00p
    RAM      DOC      1438   1-27-85   9:36p
    RAM      SYS       512   1-11-85  10:27p
    README   BAS      4736  12-27-83   7:52a
    README   TXT      3712  12-27-83   7:41a
    SETRAM   C        2034   1-27-85   8:09p
    SETRAM   EXE      2048   1-27-85   9:13p
           42 file(s)     333024 bytes
                            6144 bytes free
