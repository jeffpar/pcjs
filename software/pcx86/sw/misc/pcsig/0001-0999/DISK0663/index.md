---
layout: page
title: "PC-SIG Diskette Library (Disk #663)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0663/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0663"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DATA BOSS 2 OF 2 (662 1ST DISK IN SET)"

    This is the first of a two-disk set comprising the DATABOSS Data
    Management System. DATABOSS is a database with flexible report-
    generation and the ability to import and export data to Wordstar, PC-
    File III, DW III and many other programs. It sports user-defined color
    screens, up to eight different disk drives or subdirectories, pre-
    computed (equivalence) fields, wide standard reports, user-defined
    printer characteristics, a full alphabet keyboard enhancer, simple
    mathematical and statistical functions, sorting for up to eight levels,
    and enhanced search capabilities.  This first disk holds the
    documentation for version 3.00.01 of the DATABOSS system -- 70+ pages
    of how-to information with some special tips on maximizing the use of
    your hard disk(s). NOTE: DATABOSS runs in BASIC and needs MS/PC DOS
    3.xx and a hard disk for full functioning.
    
    System Requirements: 128K memory and at least one disk drive.  Two
    drives or a hard drive is recommended.
    
    How to Start: For information on starting the program and printing the
    documentation, type: GO (press enter).
    
    Suggested Registration: $50.00
    
    File Descriptions:
    The First Disk Contains:
    CHANGES  DOC  Note about recent changes to the program.
    BOSS3    DOC  The DATABOSS user's manual.
    README   IMG  The author's introduction to DATABOSS
    FLASH    COM  Video display utility.
    AUTOEXEC BAT  Batch file to print user's manual.
    
    The Second Disk Contains:
    FLOPPY   BAT  To load the system onto a floppy.
    FIXED    BAT  To load DataBoss onto a hard disk.
    ???????? 01   Data Base functional modules (14 files)
    DB       BAS  The DataBoss menu and control program.
    DATABOSS BAT  To load basic and start the program.
    COLOR    BAT  To start the color set up program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DB.BAS

{% raw %}
```bas
10 '************     ╔════════════════════════════════════════════════════╗
15 '* DataBoss *     ║o| DataBoss 3.00.01 MS-DOS COLOR Version (C) 1984 |o║
20 '*  MS-DOS  *     ║o| This source code may be read, printed, or used |o║
25 '************     ║o| in part in other applications as long as there |o║
30 '*   Menu   *     ║o| are no changes made to the original code as it |o║
35 '************     ║o| is presented herein.                           |o║
40 '                 ║o|------------------------------------------------|o║
45 ' LU:5/12/87      ║o| Created By Kevin King, 389 Johnson Ln,  Apt. B |o║
50 '                 ║o| Sheridan, WY 82801 to be a user-oriented, easy |o║
55 '                 ║o| to learn, comprehensive information management |o║
60 '                 ║o| system for the general public.  If you find it |o║
65 '                 ║o| useful, a contribution of $50 would be greatly |o║
70 '                 ║o| appreciated.  (Also, please include your name, |o║
75 '                 ║o| address, phone, and application details.)      |o║
80 '                 ╚════════════════════════════════════════════════════╝
85 '
90 COMMON FILE$,CT,CC
95 ON ERROR GOTO 915
100 GOSUB 605:'===CHECK FOR RE-CONFIG===
105 KEY OFF:COLOR F,B,B:CLS:IF FILE$="" THEN GOSUB 795:LOCATE 22,1:FILE$="No File"
110 FOR X=1 TO 10:KEY X,"":NEXT X
115 LOCATE 1,1:COLOR F+8,B:PRINT "╔";STRING$(78,205);"╗"
120 LOCATE 2,1:PRINT "║";:COLOR 0,7:PRINTSPC(16);"* DataBoss 3.00.01 -- (C) 1984 by Kevin King *";SPC(16);:COLOR F+8,B:PRINT"║"
125 LOCATE 3,1:COLOR F+8,B:PRINT "║";STRING$(78,205);"║"
130 LOCATE 4,1:COLOR F+8,B:PRINT"║";:COLOR F,B:PRINT"  Current File :";:IF FILE$="No File" THEN COLOR F+16,B ELSE COLOR F+8,B
135 PRINT FILE$:COLOR F+8,B:LOCATE 4,80:PRINT"║"
140 LOCATE 5,1:COLOR F+8,B:PRINT"║";:COLOR F,B:PRINT"  Current Time :";TIME$:COLOR F+8,B:LOCATE 5,80:PRINT"║"
145 LOCATE 6,1:COLOR F+8,B:PRINT"║";:COLOR F,B:PRINT"  Current Date :";DATE$:COLOR F+8,B:LOCATE 6,80:PRINT"║"
150 LOCATE 4,36:COLOR F,B:PRINT"Number of records";SPC(8);"Number of items"
155 LOCATE 5,38:PRINT"in this file";SPC(14);"per record"
160 COLOR F,B:LOCATE 6,43,0:PRINT CT:LOCATE 6,67,0:PRINT CC
165 LOCATE 7,1:COLOR F+8,B:PRINT "╚";STRING$(78,205);"╝"
170 LOCATE 23,1:COLOR F+8,B:PRINT STRING$(80,205);:COLOR F,B:IF PEEK(0)=21 THEN 310
175 COLOR F,B:LOCATE 8,5:PRINT"Please enter the new time and date as it appears in the format shown"
180 LOCATE 9,1:PRINT"above.  Simply pressing Enter will leave the values unchanged."
185 COLOR F,B
190 LOCATE 11,27:PRINT"What is the new time ";:COLOR F+8,B:PRINT"________"
195 COLOR F,B
200 LOCATE 13,27:PRINT"What is the new date ";:COLOR F+8,B:PRINT"__________"
205 ON ERROR GOTO 595
210 L1=11:L2=48:LEN.FIELD=8:GOSUB 590:IF X$<>"" THEN TIME$=X$ ELSE LOCATE 11,48,0:PRINT TIME$
215 ON ERROR GOTO 600
220 L1=13:L2=48:LEN.FIELD=10:GOSUB 590:IF X$<>"" THEN DATE$=X$ ELSE LOCATE 13,48,0:PRINT DATE$
225 LOCATE 6,18,0:COLOR F,B:PRINT DATE$
230 IF SW=1 THEN 315
310 RESET:DIM E$(15),D(15):SW=1
315 ON ERROR GOTO 915
320 GOSUB 635
325 GOSUB 605
330 FILE$="":FOR X=18 TO 28:IF SCREEN(4,X)<>32 THEN FILE$=FILE$+CHR$(SCREEN(4,X)):NEXT X
335 CT$="0":FOR X=44 TO 50:IF SCREEN(6,X)<>32 THEN CT$=CT$+CHR$(SCREEN(6,X)):NEXT X
340 CT=VAL(CT$):CC$="0":FOR X=68 TO 71:IF SCREEN(6,X)<>32 THEN CC$=CC$+CHR$(SCREEN(6,X)):NEXT X
345 CC=VAL(CC$)
350 IF FILE$="No" THEN FILE$="No File"
355 GOSUB 1060
360 LOCATE 14,1,0:PRINT SPC(79)
365 '===CHOICES===
370 ON ERROR GOTO 915
375 DATA "Create a new file","Add information to this file","Review, change, or remove information from this file","Print a report","Perform mathematical or statistical functions","Search and save/remove/set"
380 DATA "Sort the information in this file","Import/Export information or copy this file","Review or change file structure","Select file or review directory","Modify system parameters"
385 DATA "Change time and date","Change screen colors"
390 LOCATE 8,18,0:COLOR F,B:PRINT"You may choose from the following functions:"
395 D0=0
400 RESTORE 375
405 FOR X=1 TO 13:READ E$(X):NEXT
410 LC=0:FOR A=1 TO 13
415 IF SCREEN(4,18)=78 AND (A>1 AND A<10) THEN 450
420 IF (SCREEN(6,44)=48 AND SCREEN(6,43)=32) AND (A>2 AND A<9) THEN 450
425 IF PRINTER%=0 AND A=4 THEN 450
430 IF DCT=0 AND A=10 THEN 450
435 IF DCT>98 AND (A=1 OR A=8 OR A=6) THEN 450
440 LC=LC+1:LOCATE LC+8,7,0:PRINT CHR$(A+96);". ";E$(A)
445 D0=D0+1:D(D0)=A
450 NEXT A
455 LOCATE 23,1,0:COLOR F+8,B:PRINT STRING$(80,205);
460 LOCATE 23,34,0:COLOR F+8,B:PRINT" Select <";:COLOR F+16,B:PRINT CHR$(95);:COLOR F+8,B:PRINT"> ":LOCATE 23,52,0:COLOR F+8,B:PRINT"╡ Enter Q to quit ╞"
465 L1=23:L2=43:LEN.FIELD=1:GOSUB 655:IF X$="" THEN SOUND 400,2:GOTO 465 ELSE A$=X$
470 IF ASC(A$)<97 THEN A$=CHR$(ASC(A$)+32)
475 IF A$="q" THEN 585
480 CHOICE=ASC(A$)-96:FOR X=1 TO D0:IF D(X)=CHOICE THEN 495
485 NEXT X:SOUND 400,2:GOTO 460
490 IF CHOICE=14 THEN 585
495 LOCATE 23,43,0:COLOR F+8,B:PRINT A$
500 GOSUB 1060
505 IF CHOICE <> 12 THEN LOCATE 14,38,0:COLOR F+8,B:PRINT"Wait.."
510 LOCATE 23,52,0:COLOR F+8,B:PRINT STRING$(20,205)
515 X$="═════╡ "+E$(CHOICE)+" ╞═════":COLOR F+8,B:LOCATE 23,(40-(LEN(X$)/2)):PRINT X$
520 ON CHOICE GOTO 525,530,535,540,545,550,555,560,570,565,575,175,580
525 LOAD"CREATE.01",R
530 LOAD"ADD.01",R
535 LOAD"REVIEW.01",R
540 LOAD"PRINT.01",R
545 LOAD"STAT.01",R
550 LOAD"SEARCH.01",R
555 LOAD"SORT.01",R
560 LOAD"COPY.01",R
565 LOAD"DIR.01",R
570 LOAD"STRUCT.01",R
575 LOAD"PARMS.01",R
580 POKE 0,21:CHAIN "COLOR.01"
585 CLS:SYSTEM
590 GOSUB 655:RETURN
595 SOUND 400,2:LOCATE 11,48:PRINT"_____":RESUME 210
600 SOUND 400,2:LOCATE 13,48:PRINT"__________":RESUME 220
605 '===CHECK FOR RE-CONFIG===
610 OPEN "INSTALL.SYS" AS #1:L=LOF(1)
615 IF L=0 THEN RESET:RUN"CONFIG.01"
620 CLOSE 1:OPEN "INSTALL.SYS" FOR INPUT AS #1:FOR X=1 TO 3:INPUT #1,A$:NEXT X:INPUT #1,B:INPUT #1,F:INPUT #1,A$:INPUT #1,A$:CLOSE #1
625 RETURN
630 RUN "COLOR.01"
635 '===CHECK PRINTER/DIRECTORY===
640 OPEN "INSTALL.SYS" FOR INPUT AS #1:INPUT #1,PRINTER%:CLOSE 1
645 OPEN "DIR.SYS" AS #1 LEN=41:FIELD 1,10 AS DCT$:GET 1,1:DCT=CVI(DCT$):CLOSE 1
650 RETURN
655 '===GETLN===
660 LEN.FIELD=LEN.FIELD+1
665 COLOR F+8,B:X$=""
670 FOR Y=1 TO LEN.FIELD:IF Y=LEN.FIELD THEN CH%=SCREEN(L1,L2):COLOR F+16,B:LOCATE L1,L2,0:PRINT CHR$(174):COLOR F+8,B:GOTO 725
675 COLOR F+16,B:LOCATE L1,L2,0:PRINT CHR$(219);
680 A$=INKEY$:IF A$="" THEN LOCATE 5,18,0:COLOR F,B:PRINT TIME$:LOCATE 6,18,0:PRINT DATE$:GOTO 680 ELSE COLOR F+8,B:IF A$=CHR$(27) THEN CHAIN "DB.BAS",310
685 IF LEN(A$)>1 AND MACRO%=1 THEN IF (ASC(RIGHT$(A$,1))>15 AND ASC(RIGHT$(A$,1))<26) OR (ASC(RIGHT$(A$,1))>29 AND ASC(RIGHT$(A$,1))<39) OR (ASC(RIGHT$(A$,1))<51 AND ASC(RIGHT$(A$,1))>43) THEN GOSUB 750:GOTO 720
690 IF ASC(A$)<27 AND ASC(A$)<>8 AND ASC(A$)<>13 THEN 680
695 IF A$=CHR$(13) THEN 740
700 A=ASC(A$):IF Y=1 AND A=8 THEN 670
705 IF A=8 THEN LOCATE L1,L2,0:PRINT"_":Y=Y-2:L2=L2-1:X$=LEFT$(X$,LEN(X$)-1):GOTO 720
710 X$=X$+A$
715 LOCATE L1,L2,0:PRINT A$:L2=L2+1
720 NEXT Y
725 LOCATE L1,L2,0:COLOR F+16,B:PRINT CHR$(174):COLOR F+8,B
730 A$=INKEY$:IF A$="" THEN COLOR F,B:LOCATE 5,18,0:PRINT TIME$:LOCATE 6,18,0:PRINT DATE$:GOTO 730 ELSE COLOR F+8,B:LOCATE L1,L2,0:PRINT CHR$(CH%)
735 IF ASC(A$)=8 THEN COLOR F+8,B:LOCATE L1,L2,0:PRINT CHR$(CH%):Y=Y-2:L2=L2-1:X$=LEFT$(X$,LEN(X$)-1):GOTO 720 ELSE IF ASC(A$)<>13 THEN SOUND 400,2: GOTO 725
740 IF Y<LEN.FIELD THEN LOCATE L1,L2,0:PRINT"_"
745 RETURN
750 '===MACRO===
755 Z$="3048463218333435233637385049242516193120224717452144"
760 FOR M=1 TO 26
765 IF VAL(MID$(Z$,M*2-1,2))=ASC(RIGHT$(A$,1)) THEN 775
770 NEXT M:RETURN
775 X6=LEN(X$)
780 IF X6+LEN(M$(M))>LEN.FIELD-1 THEN X1$=LEFT$(M$(M),LEN.FIELD-X6-1) ELSE X1$=M$(M)
785 X$=X$+X1$:LOCATE L1,L2,0:PRINT X1$:L2=L2+LEN(X1$):Y=Y+LEN(X1$)-1
790 RETURN
795 '*** Author's Note ***
800 COLOR F+8,B
805 LOCATE 4,15:PRINT "╔═══════════════════════════════════════════════╗"
810 LOCATE 5,15:PRINT "║  DataBoss has no warranties, either expressed ╟─┐"
815 LOCATE 6,15:PRINT "║ or implied, and author is not responsible for ║ │"
820 LOCATE 7,15:PRINT "║ the applicability or usability in any certain ║ │"
825 LOCATE 8,15:PRINT "║ situation.                                    ║ │"
830 LOCATE 9,15:PRINT "║  This code may be copied and distributed with ║ │"
835 LOCATE 10,15:PRINT"║ no fees, as long as it is unaltered, not only ║ │"
840 LOCATE 11,15:PRINT"║ in content, but in source code.     Users are ║ │"
845 LOCATE 12,15:PRINT"║ encouraged to register with author to receive ║ │"
850 LOCATE 13,15:PRINT"║ periodic information on updates and document  ║ │"
855 LOCATE 14,15:PRINT"║ changes.                                      ║ │"
860 LOCATE 15,15:PRINT"║  To register, send your name, address, phone, ║ │"
865 LOCATE 16,15:PRINT"║ brief description of your application(s), and ║ │"
870 LOCATE 17,15:PRINT"║ $50 to Kevin King, 389 Johnson Ln. Apt B,     ║ │"
875 LOCATE 18,15:PRINT"║ Sheridan Wyoming 82801.                       ║ │"
880 LOCATE 19,15:PRINT"║  See the documentation for more information.  ║ │"
885 LOCATE 20,15:PRINT"╚╤═══════════>                   <══════════════╝ │"
890 LOCATE 21,15:PRINT" └────────────────────────────────────────────────┘"
895 COLOR F+16,B:LOCATE 20,32,0:PRINT"Press any key"
900 A$=INKEY$:IF A$="" GOTO 900
905 CLS:COLOR F,B
910 RETURN
915 '===ERRORS===
920 SOUND 400,2
925 ON ERROR GOTO 915
930 GOSUB 970:'===GET ER$===
935 LOCATE 25,1:COLOR 0,7:PRINT"Error:";:COLOR F+8,B:PRINT" "; ER$;:COLOR 22,B:PRINT"  * Press any key to continue *";:COLOR F,B
940 A$=INKEY$:IF A$="" THEN COLOR F,B:LOCATE 5,18,0:PRINT TIME$:LOCATE 6,18,0:PRINT DATE$:GOTO 940
945 LOCATE 25,1:PRINT SPC(79);
950 IF ERR=27 OR ERR=25 OR ERR=24 OR ERR=57 THEN RESUME
955 GOSUB 1060:LOCATE 14,38,0:COLOR F+8,B:PRINT"Wait.."
960 RESUME 965
965 ERASE E$,D:GOTO 310
970 IF ERR=7 OR ERR=14 THEN ER$="Out of memory":RETURN
975 IF ERR=24 THEN ER$="Device timeout":RETURN
980 IF ERR=25 THEN ER$="Device fault":RETURN
985 IF ERR=27 THEN ER$="No paper for printer":RETURN
990 IF ERR=51 THEN ER$="Internal error":RETURN
995 IF ERR=53 THEN ER$="File or program segment missing":RETURN
1000 IF ERR=57 THEN ER$="Device input/output error":RETURN
1005 IF ERR=58 THEN ER$="File already exists":RETURN
1010 IF ERR=61 THEN ER$="Disk full":RETURN
1015 IF ERR=64 THEN ER$="Bad file name":RETURN
1020 IF ERR=68 THEN ER$="Device unavailable":RETURN
1025 IF ERR=70 THEN ER$="Disk write-protected":RETURN
1030 IF ERR=71 THEN ER$="Disk is not ready":RETURN
1035 IF ERR=72 THEN ER$="Disk surface/media error":RETURN
1040 IF ERR=73 THEN ER$="Wrong BASIC.  Use BASICA.":RETURN
1045 IF ERR=75 OR ERR=76 THEN ER$="Disk path error":RETURN
1050 ER$="Internal error #"+RIGHT$("00"+RIGHT$(STR$(ERR),LEN(STR$(ERR))-1),2)
1055 RETURN
1060 DEF SEG
1065 BIOS$=CHR$(&H55)+CHR$(&HB0)+CHR$(0)+CHR$(&HB4)+CHR$(6)+CHR$(&HB3)+CHR$(0)+CHR$(&HB7)+CHR$(17)+CHR$(&HB1)+CHR$(0)+CHR$(&HB5)+CHR$(7)+CHR$(&HB2)+CHR$(79)+CHR$(&HB6)+CHR$(21)+CHR$(&HCD)+CHR$(16)+CHR$(&H5D)+CHR$(&HCB)
1070 'color
1075 MID$(BIOS$,9,1)=CHR$(B*16)
1080 I%=VARPTR(BIOS$):J!=PEEK(I%+1)+256*PEEK(I%+2)
1085 IF J!>32767 THEN I%=J!-65536. ELSE I%=J!
1090 CALL I%
1095 RETURN
```
{% endraw %}

## FILES663.TXT

{% raw %}
```
Disk No 663
Program Title: DATABOSS version 3.00.01 (Disk 2 of 2)
PC-SIG version 1.2
 
    This is the first of a two-disk set comprising the DATABOSS Data
Management System. DATABOSS is a database with flexible report-generation
and the ability to import and export data to Wordstar, PC-File III, DW III
and many other programs. It sports user-defined color screens, up to eight
different disk drives or subdirectories, pre-computed (equivalence) fields,
wide standard reports, user-defined printer characteristics, a full
alphabet keyboard enhancer, simple mathematical and statistical functions,
sorting for up to eight levels, and enhanced search capabilities. This
first disk holds the documentation for version 3.00.01 of the DATABOSS
system -- 70+ pages of how-to information with some special tips on
maximizing the use of your hard disk(s). NOTE: DATABOSS runs in BASIC and
needs MS/PC DOS 3.xx and a hard disk for full functioning.
 
    This second disk contains the actual DATABOSS program files. For
complete documentation, refer to disk #662.
 
Usage: Database Applications
 
System Requirements: 128K memory and at least one disk drive.  Two
drives or a hard drive is recommended.
 
How to Start: For information on starting the program and printing the
documentation, type: GO (press enter).
 
Suggested Registration: $50.00
 
File Descriptions:
 
DB       BAS    The DataBoss menu and control program.
???????? 01     Data Base functional modules (14 files)
FIXED    BAT    To load DataBoss onto a hard disk.
FLOPPY   BAT    To load the system onto a floppy.
COLOR    BAT    To start the color set up program.
DATABOSS BAT    To load basic and start the program.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0663

     Volume in drive A has no label
     Directory of A:\

    ADD      01      11115   9-18-86   9:00a
    COLOR    01       2642   4-08-87   8:05a
    COLOR    BAT        30   1-01-80  12:00a
    CONFIG   01       3359   6-18-86   1:02p
    COPY     01      15832   2-09-87   9:29a
    CREATE   01       7743   4-02-87   2:24p
    DATABOSS BAT        22   1-01-80   1:36a
    DB       BAS      8997   5-12-87   2:19p
    DIR      01      11758   9-11-86   2:27p
    FILES663 TXT      1824   9-30-87  12:49p
    FIXED    BAT       406   8-28-86   7:17p
    FLOPPY   BAT        69   8-28-86   7:18p
    GO       BAT        38   7-08-87  12:19a
    GO       TXT      1156   9-29-07  12:39p
    PARMS    01       3951   9-09-86  12:42a
    PRDIR    01      32608   5-12-87  12:56p
    PRINT    01      30195   5-12-87  12:54p
    REVIEW   01      19156  10-01-86   9:25a
    SEARCH   01      14953   2-03-87  11:53a
    SORT     01       7279   9-17-86  10:00a
    STAT     01      17103   9-09-86  12:44a
    STRUCT   01      22290   5-12-87  12:41p
           22 file(s)     212526 bytes
                           98304 bytes free
