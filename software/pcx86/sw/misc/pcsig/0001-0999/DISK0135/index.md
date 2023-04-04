---
layout: page
title: "PC-SIG Library Disk #135"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0135/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0135"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROGRAMERS UTILITIES #3"

    This disk contains many utility programs to facilitate modeming in
    special situations.  For instance, included here is LAR, a program to
    manipulate CP/M LU format libraries.  The primary use of LAR is to
    combine several files together for upload/download to a personal
    computer.  There are also utilities for patches and ways to get around
    different problems with a BASIC Compiler.
    
    How to Start: Read the files suffixed .DOC or .TXT for directions and
    documentation.  To run any file suffixed .EXE or .COM, just type its
    name, i.e. for X.COM, type X and press <ENTER>.
    
    File Descriptions:
    
    APLCHIP  DOC  Where to get an APL character generator chip for IBM APL
    BASRUN   PAT  Fixes for BASRUN.LIB  (See BASCOM.TXT)
    BASLIB   PAT  Fixes for BASCOM.LIB
    BASCOM   TXT  Instructions for program to fix all BASIC Compiler bugs!
    BASCOM   PAT  Fixes for BASCOM.COM  (See BASCOM.TXT)
    DOSFTE   PAS  Part of DOSFUN.PAS
    DOSFUN   INC  Part of DOSFUN.PAS
    DOSFUN   PAS  Procedures for extended DOS file access from Pascal
    DRIVER   ASM  Interrupt driven comm I/O driver for Lattice c
    FILKQQ   INC  Part of DOSFUN.PAS
    DRIVER   OBJ  Linkable module for above
    IBMPCTIP DOC  Tips on using PCDOS
    FILUQQ   INC  Part of DOSFUN.PAS
    LAR      EXE  Program to combine files into libraries to save space
    LAR      DOC  Documentation for file library program
    PRTSCRN  ASM  Replacement print screen driver, filters ctrl chars
    PATCHER  BAS  Program to apply patches to IBM BASIC  (See BASCOM.TXT)
    PAD      WKS  123 desktop-type worksheet, lots of useful functions
    SCAV2XX  ASM  Program to make diskette with bad sectors useable
    PRTSCRN  COM  Executable version of above
    SYSCOM   INC  Assembly language includes for DOS functions
    SCAV2XX  COM  Executable version of above
    READ     ME   Listing of included files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## PATCHER.BAS

```bas
10 'PATCHER - file patching program - PROGRAMMERS JOURNAL Vol 1, No 6, Pg. 21
20 'Copyright 1983 - Data Base Decisions, Atlanta, GA
30 'This program is used to patch other programs or files. It requires
40 'a data file containing the patches. The first three items in the
50 'patch file are the name of the file to be patched, a check sum, and
60 'comments. For each byte to be patched, there is one record containing
70 'the offset of the byte to be patched, the old value of the byte,
80 'and the new (patch) value.
90 'Patches are generated using program  GENPATCH.BAS
100 'Note: If the offset is greater than 32,767, BASIC 2.00 must be used.
110 CLS
120 DEFINT A-Z
130 CLEAR
140 ON ERROR GOTO 500
145 ON ERROR GOTO 0
150 CLOSE
160 PRINT : INPUT "Name of file containing patches";PAT$
165 PRINT :PRINT "Path (drive and/or subdirectory) to file to be patched"
166 INPUT "(Hit <enter> if on same drive and same directory)";PATH$
168 IF PATH$=CHR$(13) THEN PATH$=""
169 IF INSTR(PATH$,"\")<>0 AND RIGHT$(PATH$,1)<>"\" THEN PATH$=PATH$+"\"
170 IF PAT$="" THEN  END
180 OPEN "i",#1,PAT$
190 INPUT #1,FIL$,CKSUM!,COMMENT$
195 FIL$=PATH$+FIL$
200 OPEN "i",#2,FIL$    'is it there
210 PRINT "Patching: " FIL$
220 PRINT "Comments: " COMMENT$
230 CLOSE 2
240 OPEN "r",#2,FIL$,1  'reopen as random file
250 FIELD 2,1 AS R$
260 FILE.LEN = LOF(2)
270 IF EOF(1) THEN 450
280 INPUT# 1,BYTE!,OLDVAL,NEWVAL	'get patch
290 NEWSUM!=(NEWSUM!+BYTE!+OLDVAL!+NEWVAL!)
300 PRINT BYTE!,OLDVAL,NEWVAL, "Checksum " NEWSUM!
310 IF NEWSUM! > 32767 THEN NEWSUM!=NEWSUM!-32767: GOTO 310
320 IF BYTE! > FILE.LEN THEN PRINT "Byte " BYTE! " is beyond end of file": GOTO 400
330 GET 2,BYTE!
340 R=ASC(R$)
350 IF R <> OLDVAL THEN PRINT "Old value for byte " BYTE! " is " R " not " OLDVAL: GOTO 400
360 LSET R$=CHR$(NEWVAL)
370 PUT 2,BYTE!
380 APPLIED=APPLIED+1
390 GOTO 270
400 REM *** invalid condition ***
410 BEEP:INPUT "Continue (y/n)";ANS$
420 IF ANS$="Y" OR ANS$="y" THEN 390
430 IF ANS$="N" OR ANS$="n" THEN 450
440 GOTO 400
450 REM *** wrap it up ***
460 IF CKSUM!=NEWSUM! THEN PRINT "Checksums match" ELSE PRINT "Checksums do not match -- input value is"CKSUM! " and calculated value is "NEWSUM!: BEEP
470 PRINT "Patches applied: " APPLIED
480 CLOSE
490 END
500 REM *** error handler ***
510 UNABLE$="Unable to "
520 IF ERL=180 OR ERL=280 THEN PRINT UNABLE$ "read " PAT$
530 IF ERL=200 OR ERL=240 OR ERL=330 THEN PRINT UNABLE$ "read " FIL$
540 IF ERL=370 THEN PRINT UNABLE$ "write " FIL$
550 RESUME 120
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0135

     Volume in drive A has no label
     Directory of A:\

    APLCHIP  DOC       896   2-20-84   1:31a
    BASCOM   PAT       512   2-05-84   3:02a
    BASCOM   TXT      1792   2-05-84   3:02a
    BASLIB   PAT      1024   2-05-84   3:02a
    BASRUN   PAT      1664   2-05-84   3:02a
    CRC      TXT      1640  11-13-84  11:52a
    CRCK4    COM      1536  10-21-82   7:54p
    DOSFTE   PAS      2944   2-05-84   2:18a
    DOSFUN   INC      2176   2-05-84   2:18a
    DOSFUN   PAS      6400   2-05-84   2:18a
    DRIVER   ASM     14480   2-05-84   2:03a
    DRIVER   OBJ       952   2-22-84  12:35a
    FILKQQ   INC      5376   2-05-84   2:18a
    FILUQQ   INC      1536   2-05-84   2:18a
    IBMPCTIP DOC      4736   2-20-84  12:51a
    LAR      DOC      1792   2-03-84   3:01a
    LAR      EXE     26752   1-08-84   2:10a
    PAD      WKS     29312   2-05-84   1:24a
    PATCHER  BAS      2595   2-20-84   2:30a
    PRTSCRN  ASM      8448   2-05-84   2:45a
    PRTSCRN  COM       175   2-22-84  12:40a
    READ     ME       1445   2-22-84  12:57a
    SCAV2XX  ASM      8192  12-25-83   4:45a
    SCAV2XX  COM     17557   2-22-84  12:30a
    SYSCOM   INC      2048   2-05-84   2:33a
           25 file(s)     145980 bytes
                            8704 bytes free
