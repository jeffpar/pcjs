---
layout: page
title: "PC-SIG Library Disk #534"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0534/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0534"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMPUTER HANDBAG #1"

    This disk contains several powerful DOS utilities, a background
    dialer, a text file lister, and a multi-tasking operating
    environment.  It also contains a communications program, some
    printer utilities, and a small memory resident program to
    automatically disable Caps Lock when an alphabetic key is
    pressed.  All but one of the programs are fully documented, and
    most have Assembly source code or BASIC listings.
    
    System Requirements:  128k, 1 disk drive, monochrome
    monitor.
    
    How to Start:  To read DOC or TXT files, enter TYPE filename.ext and
    press <ENTER>.  To run an EXE or COM program, just type its name and
    press <ENTER>. For instructions on ASM listings, refer to your
    Assembler manual.
    
    Suggested Registration:  SDIR50 $10.00
    
    File Descriptions:
    
    The First Disk Contains:
    CAPSUNLK COM  Memory resident utility to unlock the caps-lock
    CAPSUNLK ASM  ASSEMBLY Source Listing for CAPSUNLK.COM
    INT13    COM  Copy Protection Breaker DOS Utility
    INT13    ASM  ASSEMBLY Source Listing for Copy Protection Breaker
    ERRMON   DOC  Documentation for Disk I/O Error Monitor
    ERRMON   COM  Disk I/O Error Monitor for the AT
    DISKIDX  DOC  Documentation for disk organizer
    DISKIDX  BAS  BASIC source code listing for disk organizer utility
    DIALER95 DOC  Background dialer documentation
    DIALER95 COM  Background dialer program
    TMODEM32 COM  Program thats transmit data in several protocols.
    TMODEM   KEY  Auxiliary Communications utility
    TMODEM   CNF  Configuration file for communications program
    TFL      EXE  ASCII File Transfer Utility - Compiled
    TFL      DOC  ASCII File Transfer Utility - Documentation
    TFL      BAS  ASCII File Transfer Utility - BASIC source listing
    SDIR50   DOC  Documentation for all purpose directory utility
    SDIR50   COM  All purpose directory utility  and command shell
    LPTX     DOC  Documentation for above
    LPTX     COM  Allow capture of printer output to disk.
    INT13    DOC  Documentation for Copy Protection Breaker
    
    The Second Disk Contains:
    QWIKLABL KEY  Key assignments file for QWIKLABL
    QWIKLABL EXE  Computer-assisted typing of gummed labels
    PCDISK   COM  Disk cataloging program.
    COPYQ    EXE  Wildcard selective y/n copy, such as used in VDEL.
    LOAD     ASM  ASSEMBLY Source for LOAD.COM
    LOAD     COM  Loads COM file larger than 64KB.
    SUPEREN  COM  Renames files, subdirectories, volume labels.
    PUSH     COM  Save CRT image to a file.
    PUSH-POP DOC  Documentation for PUSH & POP.COM.
    POP      COM  Restore CRT image from a file.
    INDEXER  DOC  Documentation for use of INDEXER
    INDEXER  PAS  Microsoft PASCAL Source Code of INDEXER
    TRIVIA   C    A chuckle for C programmers.
    SUPEREN  ASM  ASSEMBLY Source for SUPEREN.COM
    INDEXER  EXE  Computer-aid for book indexing
    SHOW     COM  Like TYPE with MORE built in.
    FLIP     ASM  ASSEMBLY Source for FLIP.COM.
    FLIP     COM  Flips between page 0 & 1 of graphics text screens.
    CED1_03B COM  DOS Multiple Command Line Editor-create new DOS commands
    CED1_03B DOC  Documentation for CED1_03B.COM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DISKIDX.BAS

```bas


2  '
4  '
6  'INDEX  (ver. 3.20)
8  '
10 'by Alan Centa
12 '   504 Ethan Allen Ave.
14 '   Takoma Park, MD  20912
26 '
28 '
30 '***************************  NOTICE  ***************************
31 '*  A limited license is granted to all users of this program,  *
32 '*  to make copies of this program and distribute them to other *
33 '*  users, on the following conditions:                         *
34 '*     1. The notices contained in lines 2 through 50  of the   *
35 '*        program are not to be altered or removed.             *
36 '*     2. The program is not to be distributed to others in     *
37 '*        modified form.                                        *
38 '*     3. No fee is to be charged for copying or distributing   *
39 '*        the program without an express written agreement with *
40 '*        the holder of the copyright.                          *
41 '*                                                              *
42 '*                 Copyright (c) 1983 Alan Centa                *
43 '****************************************************************
44 '
45 '
46 '
47 '
48 '
49 '
100 KEY OFF: WIDTH 80: WIDTH "LPT1:",132: SCREEN 0,0,0,0: CLS
110 ' MENU for indexing program
120 FILE$="INDEX32" :FALSE=0 :TRUE=NOT FALSE :QT$=CHR$(34): DRIVE$="A"
130  DIM D$(80), AC$(1000), AD$(20)
140  ACCFLAG=0: ADSFLAG=0: NAD=1: NAC=0
150 '
160 ' SET UP FUNCTION KEYS TO NUMBERS
170 KEY 1,"": KEY 2,"": KEY 3,"": KEY 4,"": KEY 5,""
180 KEY 6,"": KEY 7,"": KEY 8,"": KEY 9,"": KEY 10,"": KEY OFF
190 '
200 CLS
210 COLOR 4:LOCATE 2,6:PRINT "US NEWS - Disk indexing program - VERSION 3.2"
220 COLOR 7:LOCATE 4,12:PRINT "INDEXING FUNCTIONS AVAILIBLE"
230 LOCATE 6,3:PRINT "UNSHIFTED": LOCATE 6,35: PRINT "SHIFTED"
240 LOCATE 7,3,0 :PRINT "1. INDEX NEW DISK"
250 LOCATE 7,35,0 :PRINT "1. TURN ACCUMULATION ";
260 IF ACCFLAG=0 THEN PRINT "OFF" ELSE PRINT "ON"
270 LOCATE 8,3,0 :PRINT "2. RETITLE DISK"
280 LOCATE 8,35,0 :PRINT "2. TURN AUTO DISPLAY ";
290 IF ADSFLAG=0 THEN PRINT "OFF" ELSE PRINT "ON"
300 LOCATE 9,3,0 :PRINT "3. PRINT CURRENT INDEX"
310 LOCATE 9,35,0 :PRINT "3. PRINT ACCUMULATED INDEX"
320 LOCATE 10,3,0:PRINT "4. SPACE PRINT"
330 LOCATE 10,35,0:PRINT "4. SPACE PRINT"
340 LOCATE 11,3,0:PRINT "5. EJECT PRINT"
350 LOCATE 11,35,0:PRINT "5. EJECT PRINT"
360 LOCATE 12,3,0:PRINT "6. SELECT DRIVE"
370 LOCATE 12,35,0:PRINT "6. CLEAR ACCUMULATION"
380 'LOCATE 13,3,0:PRINT "7. SAVE INDEX TO A DOS FILE"
390 'LOCATE 13,35,0:PRINT "7. SAVE ACCUMULATION"
400 LOCATE 17,3,0:PRINT "ESC KEY - EXIT TO SYSTEM"
410 '
420 POKE 106,0 :'CLEAR KYBD BUFFER
430 K$ = INKEY$:IF K$ <> "" THEN GOTO 420
440 K$ = INKEY$:IF K$ = "" THEN GOTO 440
450 ON ERROR GOTO 0  : 'WAS 520
460 A$=MID$(K$,1,1) :'PRINT A$,ASC(A$)
470 IF ASC(A$)=0 THEN GOSUB 1470
480 IF A$="1" THEN GOSUB 760: GOTO 200: 'INDEX DISK
490 IF A$="!" THEN ACCFLAG=NOT ACCFLAG: GOTO 200 ; 'ACCUM ON/OFF
500 IF A$="2" THEN GOSUB 1100: GOTO 200: 'RENAME
510 IF A$="@" THEN ADSFLAG=NOT ADSFLAG: GOSUB 1130 :GOTO 200:  'AUTO DISPLAY
520 IF A$="3" THEN GOSUB 1260 : GOTO 420: 'PRINT CURRENT
530 IF A$="#" THEN GOSUB 1590 : GOTO 200: 'PRINT ACCUMULATED
540 IF A$="4" THEN GOSUB 1380: GOTO 420: 'SPACE PRINTER
550 IF A$="$" THEN GOSUB 1380: GOTO 420: 'SPACE PRINTER
560 IF A$="5" THEN GOSUB 1420: GOTO 420: 'EJECT
570 IF A$="%" THEN GOSUB 1420: GOTO 420: 'EJECT
580 IF A$="6" THEN GOSUB 1450: GOSUB 760: GOTO 200: 'CHANGE DRIVE
590 IF A$="^" THEN GOSUB 1940           : GOTO 200: 'CLEAR ACCUMULATION
600 IF A$="7" THEN
610 IF A$="&" THEN
620 IF A$="8" THEN
630 IF A$="*" THEN
640 IF A$="9" THEN
650 IF A$="(" THEN
660 IF A$="0" THEN
670 IF A$=")" THEN
680 IF A$=CHR$(13)THEN LOCATE 20,3,0:PRINT"                         ": GOTO 420
690 IF A$= CHR$(27) THEN GOTO 740
700 BEEP: LOCATE 20,3,0:COLOR 22: PRINT " FUNCTION NOT AVAILIBLE"
710 COLOR 7: GOTO 420
720 BEEP: LOCATE 20,3,0:COLOR 20: PRINT " DRIVE NOT READY"
730 COLOR 7: RESUME 210
740 ON ERROR GOTO 0: CLS: CHAIN "MENU": END
750 '
760 'NEW DISKETTE INDEX
770 PRINT "Enter title of diskette:"
780 ON ERROR GOTO 720
790 CLS: FILES DRIVE$+":*.*" :PRINT:PRINT
800 ON ERROR GOTO 0
810 I=1: J=1: N=0: A$="":
820 WHILE SCREEN(I,J)<>0 AND J<78 AND SCREEN(I,J)<>32
830   WHILE SCREEN(I,J)<>0 AND SCREEN(I,J)<>32
840      FOR K=9 TO 11
850        A$=A$+CHR$(SCREEN(I,J+K))
860      NEXT K
870      FOR K=0 TO 7
880        A$=A$+CHR$(SCREEN(I,J+K))
890      NEXT K
900      IF ACCFLAG=0 THEN NAC=NAC+1:AC$(NAC)=A$+STR$(NAD)
910      N=N+1: D$(N)=A$: A$="": I=I+1
920      WEND
930   I=1: J=J+13: WEND
940 PRINT "ENTER DISKETTE NAME:"
950 C=0 :S=0
960 ' START OF SHELL METZNER SORT
970 M=N
980 M=INT(M/2) :IF M=0 THEN 1090
990 J=1 :K=N-M
1000 I=J
1010 L=I+M :C=C+1
1020 IF D$(I) <=D$(L) THEN 1060
1030 SWAP D$(I),D$(L)
1040 I=I-M
1050 IF I>0 THEN 1010
1060 J=J+1
1070 IF J>K THEN 980
1080 GOTO 1000
1090 '
1100 CLS:BEEP: INPUT "Enter title of diskette:",TITLE$: B$="               "
1110 NEWNAME=1: AD$(NAD)=TITLE$: NAD=NAD+1
1120 '
1130 IF ADSFLAG<>0 THEN RETURN
1140 'SHOW NAMES ON CURRENT DISK
1150 CLS: PRINT "Enter title of diskette:";TITLE$+"     "+DATE$
1160 OLDEXT$=" ":J=0:A$=""
1170 FOR I=1 TO N
1180 IF J=INT(J/6)*6 THEN PRINT A$:A$=""
1190 IF MID$(D$(I),1,3)=OLDEXT$ THEN 1220
1200 OLDEXT$=MID$(D$(I),1,3):PRINT A$: PRINT
1210 PRINT "."+OLDEXT$+":": J=0: A$=""
1220 A$=A$+MID$(D$(I)+B$,4,12):J=J+1
1230 NEXT I: PRINT A$
1240 GOSUB 1520: RETURN
1250 '
1260 'PRINTING THE INDEX
1270 OLDEXT$=" ": LPRINT "Diskette: "+TITLE$+"    "+DATE$
1280 LPRINT:J=0:A$=""
1290 FOR I=1 TO N
1300 IF J=INT(J/6)*6 THEN LPRINT A$:A$=""
1310 IF MID$(D$(I),1,3)=OLDEXT$ THEN 1340
1320 OLDEXT$=MID$(D$(I),1,3):LPRINT A$: LPRINT:PRINT
1330 LPRINT "."+OLDEXT$+":": J=0: A$=""
1340 A$=A$+MID$(D$(I)+B$,4,12):J=J+1
1350 NEXT I:LPRINT A$
1360 RETURN
1370 '
1380 'SPACE PRINTER
1390 LPRINT : RETURN
1400 '
1410 'EJECT PRINTER
1420 LPRINT CHR$(12);: RETURN
1430 '
1440 'CHANGE DRIVE
1450 INPUT "ENTER DRIVE LETTER-",DRIVE$:NEWNAME=0:RETURN
1460 '
1470 ' INTERPRET FUNCTION KEYS
1480 A=ASC(MID$(K$,2,1))
1490 IF A>58 AND A<69 THEN A$=MID$("1234567890",A-58,1)
1500 IF A>83 AND A<94 THEN A$=MID$("!@#$%^&*()",A-83,1)
1510 RETURN
1520 ' ANY KEY TO END
1530 LOCATE 25,1: PRINT "PRESS ANY KEY TO CONTINUE";
1540 POKE 106,0 :'CLEAR KYBD BUFFER
1550 K$ = INKEY$:IF K$ <> "" THEN GOTO 1520
1560 K$ = INKEY$:IF K$ = "" THEN GOTO 1560
1570 ON ERROR GOTO 0  : RETURN
1580 '
1590 'PRINTING ACCUMULATED DATA
1600 PRINT "ENTER ACCUMULATION NAME:";
1610 C=0 :S=0
1620 ' START OF SHELL METZNER SORT
1630 M=NAC
1640 M=INT(M/2) :IF M=0 THEN 1740
1650 J=1 :K=NAC-M
1660 I=J
1670 L=I+M :C=C+1
1680 IF AC$(I) <=AC$(L) THEN 1720
1690 SWAP AC$(I),AC$(L)
1700 I=I-M
1710 IF I>0 THEN 1670
1720 J=J+1
1730 IF J>K THEN 1640 ELSE 1660
1740 ' ---- END OF S/M SORT
1750 '
1760 'PRINTING THE INDEX
1770 INPUT " ",TITLE$
1780 'PRINT DISK NAMES
1790 OLDEXT$=" ": LPRINT          TITLE$+"    "+DATE$
1800 FOR I=1 TO NAD-1: LPRINT I,AD$(I): NEXT I
1810 FOR I=1 TO 5 : LPRINT: NEXT I
1820 '
1830 OLDEXT$=" ": LPRINT CHR$(12)+TITLE$+"    "+DATE$
1840 LPRINT:J=0:A$="":B$="            "
1850 FOR I=1 TO NAC
1860 IF J=INT(J/6)*6 THEN LPRINT A$:A$=""
1870 IF MID$(AC$(I),1,3)=OLDEXT$ THEN 1900
1880 OLDEXT$=MID$(AC$(I),1,3):LPRINT A$: LPRINT:PRINT
1890 LPRINT "."+OLDEXT$+":": J=0: A$=""
1900 A$=A$+MID$(AC$(I)+B$,4,14):J=J+1
1910 NEXT I:LPRINT A$
1920 RETURN
1930 '
1940 ' CLEAR ACCUMULATION
1950 NAD=1: NAC=0: RETURN

```

## TFL.BAS

```bas
' TFL - Text File Lister
' Version 1.02  September 20,1985
'
' (C) Copright 1985 by William D. Hileman
'
10 ' For misc. error traps
'
defint a-z
'
on error goto TRAPPER
'
' Main Program
'
gosub INITIALIZE
gosub DISPLAY.TITLE
gosub GET.SOURCE
width "lpt1:",pgwid
if not done then _
  while inkey$<>"":wend: _
  if batch then _
    gosub LIST.BATCH _
  else _
    gosub LIST.ONE
  rem endif
rem endif
'
end
'
' Subroutines
'
' ***********
  INITIALIZE:
' ***********
'
false=0:true=(not false)
batch=false
done=false
abort=false
pglen=66:pgwid=80
version$="1.02"
versdate$="09/20/85"
'
return
'
' **************
  DISPLAY.TITLE:
' **************
'
print "┌──────────────────────────────────────────────┐"
print "│ TFL - Text File Lister Version ";version$;" ";versdate$;" │"
print "│    (C)opyright 1985 by William D. Hileman    │"
print "└──────────────────────────────────────────────┘"
'
return
'
' ***********
  GET.SOURCE:
' ***********
'
if command$="?" then _
  gosub DISPLAY.FORMAT: _
  done=true _
else _
  if command$="" then _
    gosub ASK.SOURCE _
  else _
    gosub PARSE.SOURCE
  rem endif
rem endif
if not done then _
  while right$(src.fil$,1)=" ": _
    src.fil$=left$(src.fil$,len(src.fil$)-1): _
  wend: _
  while left$(src.fil$,1)=" ": _
    src.fil$=mid$(src.fil$,2): _
  wend: _
  if len(src.fil$)>7 then _
    if right$(src.fil$,8)="TFL.DAT" then _
      batch=true
    rem endif
  rem endif
rem endif
'
return
'
' ************
  MAKE.UPCASE:
' ************
'
for cnt=1 to len(src.fil$)
  sub$=mid$(src.fil$,cnt,1)
  if sub$>="a" and sub$<="z" then _
    mid$(src.fil$,cnt,1)=chr$(asc(sub$) and 223)
  rem endif
next cnt
'
return
'
' ***********
  LIST.BATCH:
' ***********
'
gosub CHECK.FIL
'
if not exist then _
  print: _
  print "'";src.fil$;"' not found!";: _
  beep _
else _
  open "I",2,src.fil$: _
  while (not eof(2) and not abort): _
    line input #2, src.fil$: _
    gosub LIST.ONE: _
  wend: _
  close #2
rem endif
'
return
'
' *********
  LIST.ONE:
' *********
'
gosub CHECK.FIL
'
if not exist then _
  print: _
  print "'";src.fil$;"' not found!";: _
  beep _
else _
  gosub FILE.INTEGRITY: _
  if file.ok then _
    print: _
    print "Now listing '";src.fil$;"'";: _
    lincnt=pglen:page=1: _
    open "I",1,src.fil$: _
    while (not eof(1) and not abort): _
      line input #1, ps$: _
      gosub REPLACE.TABS: _
      firstcheck=true: _
      gosub MAKE.SUBSTRING: _
      firstcheck=false:
      while (ss$<>"" and not abort): _
        gosub HEADER.CHECK: _
        lprint ss$: _
        lincnt=lincnt+1: _
        gosub MAKE.SUBSTRING: _
        gosub KEYCHECK: _
      wend: _
    wend: _
    close #1: _
    gosub PAGE.EJECT: _
    if abort then _
      print " - print aborted";: _
      beep
    rem endif
  rem endif
rem endif
'
return
'
' *********
  KEYCHECK:
' *********
'
if inkey$=chr$(27) then _
  abort=true
rem endif
'
return
'
' **********
  CHECK.FIL:
' **********
'
100 '
'
exist=true
open "I",3,src.fil$
'
101 '
'
close #3
'
return
'
' ***************
  FILE.INTEGRITY:
' ***************
'
file.ok=false
open "R",4,src.fil$
field #4,1 as tst$
get #4,1
if lof(4)=0 or tst$=chr$(26) then _
  print: _
  print "'";src.fil$;"' is empty!";: _
  beep _
else if tst$=chr$(255) then _
  print: _
  print "'";src.fil$;"' is a binary file!";: _
  beep _
else if tst$=chr$(254) then _
  print: _
  print "'";src.fil$;"' is a protected file!";: _
  beep _
else _
  file.ok=true
rem endif
close #4
'
return
'
' *************
  REPLACE.TABS:
' *************
'
x=instr(ps$,chr$(9))
while (x<>0)
  ps$=left$(ps$,x-1)+space$(9-(x mod 8))+mid$(ps$,x+1)
  x=instr(ps$,chr$(9))
wend
'
return
'
' ***************
  MAKE.SUBSTRING:
' ***************
'
if len(ps$)>pgwid then _
  ss$=left$(ps$,pgwid): _
  ps$=right$(ps$,len(ps$)-pgwid) _
else _
  ss$=ps$: _
  ps$="": _
  if firstcheck and ss$="" then _
    gosub HEADER.CHECK: _
    lprint: _
    lincnt=lincnt+1: _
    gosub KEYCHECK
  rem endif
rem endif
'
return
'
' *************
  HEADER.CHECK:
' *************
'
if lincnt>pglen-3 then _
  for cnt=lincnt to pglen: _
    lprint: _
  next cnt: _
  lprint src.fil$;: _
  txt$=date$+"  "+time$: _
  lprint tab((pgwid-len(txt$))/2+1);txt$;: _
  lprint tab(pgwid-9);"Page ";using "###";page: _
  lprint: _
  page=page+1: _
  lincnt=3
rem endif
'
return
'
' ***********
  PAGE.EJECT:
' ***********
'
for cnt=lincnt to pglen-1
  lprint
next cnt
'
return
'
' ***************
  DISPLAY.FORMAT:
' ***************
'
print
print "Formats are: TFL                          - Prompts for filename"
print "             TFL drive:\path\filename.ext - Lists specific file"
print "             TFL drive:\path\TFL.DAT      - Lists files in TFL.DAT"
print "             TFL ?                        - Displays this message"
print
print "Optional command line switches:"
print
print "             /PWnnn - Width of page in characters - default is 80"
print "             /PLnnn - Length of page in lines - default is 66"
print
print "For example, TFL C:\SOURCE\MYPROG.BAS /PW132 /PL88 would list file"
print "'MYPROG.BAS' in subdirectory 'SOURCE' on drive 'C' with a page width"
print "of 132 characters per line, and a page length of 88 lines per page."
print
print "Notes:  Your printer must already be set-up for the correct vertical"
print "        and horozontal spacing before using the 'PW' and 'PL' switches."
print "        Pressing [ESC] during execution will cause printing to abort.";
'
return
'
' ***********
  ASK.SOURCE:
' ***********
'
print
print "List file name: ";
line input src.fil$
if src.fil$="" then _
  done=true _
else _
  gosub MAKE.UPCASE
rem endif
'
return
'
' *************
  PARSE.SOURCE:
' *************
'
pwv=0:plv=0
src.fil$=command$
gosub MAKE.UPCASE
pw=instr(src.fil$,"/PW")
if pw<>0 then _
  stp=instr(pw+1,src.fil$,"/"): _
  if stp=0 then _
    pwv=val(mid$(src.fil$,pw+3)): _
    src.fil$=left$(src.fil$,pw-1) _
  else _
    pwv=val(mid$(src.fil$,pw+3,stp-pw-3)): _
    src.fil$=left$(src.fil$,pw-1)+mid$(src.fil$,stp)
  rem endif
rem endif
if pwv>0 then _
  pgwid=pwv
rem endif
pl=instr(src.fil$,"/PL")
if pl<>0 then _
  stp=instr(pl+1,src.fil$,"/"): _
  if stp=0 then _
    plv=val(mid$(src.fil$,pl+3)): _
    src.fil$=left$(src.fil$,pl-1) _
  else _
    plv=val(mid$(src.fil$,pl+3,stp-pl-3)): _
    src.fil$=left$(src.fil$,pl-1)+mid$(src.fil$,stp)
  rem endif
rem endif
if plv>0 then _
  pglen=plv
rem endif
'
return
'
' ********
  TRAPPER:
' ********
'
if erl=100 then _
  exist=false: _
  resume 101 _
else _
  on error goto 0
rem endif
'
' End of Code
'
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0534

     Volume in drive A has no label
     Directory of A:\

    CAPSUNLK ASM      3942   9-24-85  12:55p
    CAPSUNLK COM       118   9-21-85  12:42p
    DIALER95 COM     16384   9-21-85   4:11p
    DIALER95 DOC      1664   9-21-85   5:58p
    DISKIDX  BAS      7600   8-22-85  10:01p
    DISKIDX  DOC      5888   8-22-85  10:01p
    ERRMON   COM       719   7-14-85   7:32p
    ERRMON   DOC      6646   7-14-85   8:05p
    FILES534 TXT      1973   1-27-87   3:23p
    GO       BAT      1645   1-27-87   3:25p
    INT13    ASM      9744   8-17-85   9:49p
    INT13    COM       605   8-17-85   9:50p
    INT13    DOC      8951   8-17-85  10:13a
    LPTX     COM     18023   1-09-87   5:01p
    LPTX     DOC      8529   1-09-87   4:57p
    NOTES534 TXT      3474   1-27-87   3:27p
    SDIR50   COM      6656   9-16-85   5:54p
    SDIR50   DOC      8320   9-16-85   5:56p
    TFL      BAS      6893   9-20-85  11:34p
    TFL      DOC      5406   9-20-85  11:02p
    TFL      EXE     34530   9-20-85  11:53p
    TMODEM   CNF       158   5-20-86   4:28p
    TMODEM   KEY        80   5-20-86   4:28p
    TMODEM32 COM     52608   8-14-85  12:48a
           24 file(s)     210556 bytes
                          100352 bytes free
