---
layout: page
title: "PC-SIG Diskette Library (Disk #318)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0318/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0318"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DBASE II PROGRAMS"

    The programs on this disk are all for use with dBASE II.  Some knowledge
    of the language is assumed.  The first four sections shown below are
    dBASE example programs and their format, index, and data files.  The
    last section is a collection of dBASE utility programs that make life a
    little bit easier for the dBASE user.
    
    System Requirements:  Two disk drives; dBASE II or III
    
    How to Start: To read DOC files simply enter TYPE filename.ext and
    press <ENTER>.  To run dBASE programs, bring up dBASE II then load in
    the selected program file.
    
    File Descriptions:
    
    ???      PRG  Other dBase program files
    ???      FMT  Other dBase report files
    DBASE1   DOC
    DBASE1   BAT
    ADD      PRG
    MAIN     PRG
    LASTNAME NDX
    CAPITAL  DBF
    GETDATA  FMT
    DELCHECK PRG
    DELETE   PRG
    PRINT    FMT
    DIRECTOR PRG
    HELP     PRG
    EDIT     PRG
    ADD      MEM
    INIT     PRG
    MAILMEN  DOC
    MAILINP  PRG
    MAILED   PRG
    MAIL     DBF
    GETMAIL  FMT
    BIRTHDAY PRG
    REPORT   FMT
    SIGN-ON  PRG
    DATE     PRG
    LAB-SEL  PRG
    CRT-SEL  PRG
    MENU     PRG
    DUPREM   PRG
    DUPCHECK PRG
    MAINTAIN PRG
    LABEL    PRG
    DOP      DOC  Documentation for DOP2 and DOP3
    MAILSET  MEM
    XMASLAB  PRG
    PRINTROL PRG
    PRINTMEN FMT
    PRINTLAB PRG
    PRINTIND PRG
    PRINTCAT PRG
    MAILMEN  PRG
    COPYFLD  PRG  Copies fields from one file to another
    COPYFLD  DOC  Documentation for COPYFLD.PRG
    DBS      EXE  Helps create dBASE II & III screens
    COMP     NDX
    DBASEGRF CMD  Graph program for dBASE II data files
    LAST     NDX
    DBASECHG BAS  Allows field changes without changing structure file
    PROF1    NDX
    -------- ---
    PROF2    NDX
    MAILDEL  PRG
    PROF3    NDX
    MAILED   BAK
    MAILSET  PRG
    TRACK_IT PRG
    TRACK_IT DBT
    LISTDB2  PRG
    TRACKCO  NDX
    TRACKMEM FMT
    TRACKDEX PRG
    LISTDB3  PRG
    TRACK_IT DBF
    TRACKSTS NDX
    TRACKRST DBF
    TRACKRDX NDX
    TRACKPRO PRG
    TRACKPRD NDX
    TRACKNXT NDX
    TRACKNME NDX
    DOP2     PRG  Menu driven file inspect and change system for dBASE II
    DBASE2C1 COM  Puts color into dBASE programs
    DOP3     PRG  Menu driven file inspect and change system for dBASE III
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DBASECHG.BAS

```bas
10 DEFINT A-Z:FALSE=0:TRUE=NOT FALSE:DIM F$(50),T$(50),L$(50),HOLD$(5)
20 ON ERROR GOTO 930:TST$="ABCDEFG":CLS:LOCATE 10,1 'DBASECHG.BAS
30 PRINT"This program is designed to allow you to change the names
40 PRINT"of any of the fields in a dBASEII file without the struggle of
50 PRINT"exporting the file and creating a new structure, There are rules.
60 PRINT
70 PRINT"1. You can not use any unauthorized characters in a field name.
80 PRINT"2. You have  to be careful about duplicate field names.":PRINT
90 PRINT"If you end up with 2 Field names identical, Just change one back...
100 PRINT"Follow the directions and enjoy another utility by---":PRINT
110 PRINT"Rich Schinnell, Rockville, MD. (301) 949-9292
120 INPUT " Press <ENTER> to continue ";RICH$
130 KEY OFF:CLS:LOCATE 5,1,1:PRINT "Change any field name in a dBASE II file"
140 PRINT "By Rich Schinnell, Rockville,MD  FREE to all *"
150 LOCATE 14,1:PRINT "Which drive is the dBASE file located on?"
160 LOCATE 16,1,1:INPUT "ABCDEFG [Press Enter to Quit] ";A$
170 IF A$="" THEN KEY ON:CLOSE:END
180 IF ASC(A$)>72 THEN A$=CHR$(ASC(A$)-32)
190 IF INSTR(TST$,A$)<1 THEN BEEP:GOTO 130
200 A$=A$+":"
210 CLS:FILES A$+"*.DBF"
220 PRINT"Enter the File Name without the .DBF "
230 INPUT ;"Which dBASE file do you wish to change field names ";B$
240 IF LEN(B$)<1 THEN GOTO 920
250 IF INSTR(B$,".")>0 THEN GOTO 920
260 C$=A$+B$+".DBF":OPEN C$ FOR INPUT AS #1:CLOSE #1
270 OPEN C$ AS #1 LEN=128
280 FIELD #1,128 AS I$
290 'This is where the first 5 128 Char groups from the header are extracted
300 FOR I=1 TO 5
310    GET #1,I
320    HOLD$(I)=I$
330 NEXT I
340 B$=HOLD$(1):X=9:B=1
350 FOR I=1 TO 7
360    F$(B)=MID$(B$,X,10)
370    L$(B)=STR$(ASC(MID$(B$,X+12,1)))
380    T$(B)=MID$(B$,X+11,1)
390 IF ASC(F$(B))=13 THEN TOP=B-1:GOTO 740 'check for last field name
400 X=X+16:B=B+1
410 NEXT I
420 B$=RIGHT$(HOLD$(1),8)+HOLD$(2):X=1:B=8
430 FOR I=1 TO 8
440    F$(B)=MID$(B$,X,10)
450    L$(B)=STR$(ASC(MID$(B$,X+12,1)))
460    T$(B)=MID$(B$,X+11,1)
470 IF ASC(F$(B))=13 THEN TOP=B-1:GOTO 740
480 X=X+16:B=B+1
490 NEXT I
500 B$=RIGHT$(HOLD$(2),8)+HOLD$(3):X=1:B=16
510 FOR I=1 TO 8
520    F$(B)=MID$(B$,X,10)
530    L$(B)=STR$(ASC(MID$(B$,X+12,1)))
540    T$(B)=MID$(B$,X+11,1)
550 IF ASC(F$(B))=13 THEN TOP=B-1:GOTO 740
560 X=X+16:B=B+1
570 NEXT I
580 B$=RIGHT$(HOLD$(3),8)+HOLD$(4):X=1:B=24
590 FOR I=1 TO 8
600    F$(B)=MID$(B$,X,10)
610    L$(B)=STR$(ASC(MID$(B$,X+12,1)))
620    T$(B)=MID$(B$,X+11,1)
630 IF ASC(F$(B))=13 THEN TOP=B-1:GOTO 740
640 X=X+16:B=B+1
650 NEXT I
660 B$=RIGHT$(HOLD$(4),8)+HOLD$(5):X=1:B=32
670 FOR I=1 TO 1
680    F$(B)=MID$(B$,X,10)
690    L$(B)=STR$(ASC(MID$(B$,X+12,1)))
700    T$(B)=MID$(B$,X+11,1)
710 IF ASC(F$(B))=13 THEN TOP=B-1:GOTO 740
720 X=X+16:B=B+1
730 NEXT I:TOP=B-1
740 MM=ASC(MID$(HOLD$(1),4,1))  'unfold date of last update
750 DD=ASC(MID$(HOLD$(1),5,1))
760 YY=ASC(MID$(HOLD$(1),6,1))
770 LL=(ASC(MID$(HOLD$(1),8,1))*256)+ASC(MID$(HOLD$(1),7,1)) 'rec length
780 MM$=MID$(STR$(MM),2,2):DD$="-"+MID$(STR$(DD),2,2):YY$="-"+MID$(STR$(1900+YY),2,4)
790 TR=(ASC(MID$(HOLD$(1),3,1))*256)+ASC(MID$(HOLD$(1),2,1))
800 CLS  ' TR is number of records in data base.. first 8 chars is all this
810 PRINT "your data base was last updated on  ";MM$;DD$;YY$
820 PRINT "Your records are";LL;" characters long"
830 PRINT TR;" Records in Data Base ";C$
840   PRINT  "F# Field Name    Type   Size"
850 C=5:XX=1:FOR I=1 TO TOP
860   LOCATE C,XX
870   PRINT USING "## \        \   \  \   \ \  ";I;F$(I);T$(I);L$(I);
880   C=C+1:IF C>20 THEN C=5:XX=40
890 NEXT I
900 GOTO 990
910 LOCATE 23,1,1
920 CLOSE:KEY ON:END
930 ' ERROR TRAPPING ROUTINE
940 IF ERL=210 THEN PRINT "No Data Base files on Drive ";A$:SOUND 32767,36:SOUND 32767,0:RESUME 160
950 IF ERL=260 THEN CLOSE #1:PRINT
960 IF ERL=260 THEN LOCATE 12,1:PRINT "FILE ";C$;" Does not exist, try again":SOUND 750,2:SOUND 400,1:SOUND 500,2:SOUND 32767,36:SOUND 32767,1:RESUME 210
970 PRINT ERR;" has occured in line #;"ERL
980 END
990 'change the field names
1000 LOCATE 21,1:NEW1$=""
1010 INPUT "Enter the Field Number of the Field name you wish to Change";CH$
1020 IF CH$="" THEN 920
1030 A=VAL(CH$):IF A>TOP THEN PRINT "Bad field number":GOTO 920
1040 IF A<1 THEN PRINT "Bad field number":GOTO 920
1050 LOCATE 22,1:COLOR 0,7:PRINT F$(A);" Field #";A;:COLOR 7,0
1060 LOCATE 23,1:INPUT "Enter New Field Name, No Spaces (10 MAX) ";N$
1070 IF LEN(N$)>10 THEN BEEP:N$=LEFT$(N$,10)
1080 FOR I=1 TO LEN(N$):CASE=ASC(MID$(N$,I,1)):IF CASE>96 AND CASE<123 THEN CASE=CASE-32:NEW1$=NEW1$+CHR$(CASE):GOTO 1130
1090  IF CASE=58 THEN 1120
1100  IF CASE>47 AND CASE<58 THEN 1120
1110 IF (CASE<64 OR CASE>91) THEN NEW1$=NEW1$+STRING$(10-LEN(NEW1$),0):GOTO 1140
1120  NEW1$=NEW1$+CHR$(CASE)
1130 NEXT I:NEW1$=NEW1$+STRING$(10-LEN(NEW1$),0)
1140 LOCATE 23,60:COLOR 0,7:PRINT NEW1$;"   (ok Y/N)?";:COLOR 7,0:BEEP
1150 ANS$= INKEY$:IF LEN(ANS$)<1 THEN 1150 ELSE IF ANS$="Y" OR ANS$="y" THEN GOTO 1170
1160 KEY ON:CLOSE:END
1170 ' change the field names as per instructions....
1180 IF A>8 THEN 1230
1190 A1=A-1
1200 MID$(HOLD$(1),(A1*16)+9,10)=NEW1$:LSET I$=HOLD$(1):PUT #1,1
1210 IF A=8 THEN MID$(HOLD$(2),1,2) =RIGHT$(NEW1$,2):LSET I$=HOLD$(2):PUT #1,2
1220 GOTO 1370
1230 IF A>16 THEN 1280
1240 A1=A-9
1250 MID$(HOLD$(2),(A1*16)+9,10)=NEW1$:LSET I$=HOLD$(2):PUT #1,2
1260 IF A=16 THEN MID$(HOLD$(3),1,2) =RIGHT$(NEW1$,2):LSET I$=HOLD$(3):PUT #1,3
1270 GOTO 1370
1280 IF A>24 THEN 1330
1290 A1=A-17
1300 MID$(HOLD$(3),(A1*16)+9,10)=NEW1$:LSET I$=HOLD$(3):PUT #1,3
1310 IF A=24 THEN MID$(HOLD$(4),1,2) =RIGHT$(NEW1$,2):LSET I$=HOLD$(4):PUT #1,4
1320 GOTO 1370
1330 ' put the last one in
1340 A1=A-25
1350 MID$(HOLD$(4),(A1*16)+9,10)=NEW1$:LSET I$=HOLD$(4):PUT #1,4
1360 IF A=32 THEN MID$(HOLD$(5),1,2) =RIGHT$(NEW1$,2):LSET I$=HOLD$(5):PUT #1,5
1370 FOR X=21 TO 24:LOCATE X,1:PRINT SPC(79);:NEXT X
1380 LOCATE 21,1:INPUT "Another Change (Y/N) ? ";ANS$
1390 IF ANS$="Y" OR ANS$="y" THEN 300
1400 GOTO 920
1410 'Please make any changes to this program you wish
1420 'You better be careful in doing so, as you can destroy your data base file
1430 'so I recommend you always work with a copy of the dBASE file..
1440 'Rich Schinnell, 13527 Turkey Branch Parkway, Rockville, MD 20853
1450 'Voice (301) 949-9292 : Data (301) 949-8848
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0318

     Volume in drive A has no label
     Directory of A:\

    DBASE1   BAT      1178   4-30-84   6:38p
    DBASE1   DOC      1902   4-30-84   6:37p
    CAPITAL  DBF      1024   5-17-85  10:12a
    LASTNAME NDX      1024   5-19-83   2:37p
    MAIN     PRG      2176   5-13-83   8:42p
    ADD      PRG      1664   5-13-83   8:44p
    GETDATA  FMT      1920   5-13-83   8:34p
    DELCHECK PRG       384   5-13-83   8:51p
    DELETE   PRG       256   5-13-83   8:44p
    DIRECTOR PRG      4352   5-13-83   9:14p
    PRINT    FMT      2048   5-13-83   8:39p
    EDIT     PRG      1408   5-13-83   8:46p
    HELP     PRG      1152   5-13-83   8:47p
    INIT     PRG      1152   5-13-83   8:52p
    ADD      MEM      3072   5-19-83   2:18p
    LABEL    PRG       640   5-13-83   8:49p
    MAINTAIN PRG      1024   5-13-83   8:53p
    DUPCHECK PRG      1152   5-13-83   8:54p
    DUPREM   PRG      2176   5-13-83   9:02p
    TWOSHOW  FMT      2176   5-13-83   8:37p
    PURGE    PRG      1280   5-13-83   9:03p
    INDEX    PRG       384   5-13-83   9:04p
    VERIFDEL PRG      1408   5-13-83   9:07p
    SAYDATA  FMT      1880   5-19-83   3:58p
    VERIFNEW PRG      1536   5-13-83   9:06p
    MAINTAIN FMT      1920   5-13-83   8:40p
    PRINTER  PRG      1152   5-13-83   8:50p
    ROSTER   PRG      3328   5-13-83   9:11p
    SEARCH   PRG      1280   5-13-83   8:48p
    MENU     PRG      2048   6-21-83   4:54p
    CRT-SEL  PRG       640   6-21-83   4:58p
    LAB-SEL  PRG      2048   6-21-83   5:00p
    DATE     PRG       640   6-21-83   4:59p
    SIGN-ON  PRG       512   6-21-83   4:57p
    REPORT   FMT      2048   6-21-83   4:56p
    BIRTHDAY PRG       768   9-13-84   4:22p
    GETMAIL  FMT      2560   9-13-84   4:21p
    MAIL     DBF      2560   5-17-85  10:16a
    MAILED   PRG      5120   9-13-84   4:22p
    MAILINP  PRG      1536   9-13-84   4:22p
    MAILMEN  DOC      7168   9-13-84   4:20p
    MAILMEN  PRG      1536   9-13-84   4:23p
    PRINTCAT PRG      6656   9-13-84   4:23p
    PRINTIND PRG      1024   9-13-84   4:23p
    PRINTLAB PRG      3072   9-13-84   4:23p
    PRINTMEN FMT      2048   9-13-84   4:21p
    PRINTROL PRG      4096   9-13-84   4:24p
    XMASLAB  PRG      1408   9-13-84   4:24p
    MAILSET  MEM      1024   9-13-84   4:21p
    COMP     NDX      1024   9-13-84   4:21p
    LAST     NDX      1024   9-13-84   4:21p
    PROF1    NDX      1024   9-13-84   4:21p
    PROF2    NDX      1024   9-13-84   4:22p
    PROF3    NDX      1024   9-13-84   4:22p
    MAILDEL  PRG      1024   9-13-84   4:22p
    MAILSET  PRG      1536   9-13-84   4:23p
    TRACKCO  NDX      1024   2-07-85   2:23p
    LISTDB2  PRG      2944   2-03-85   8:03a
    LISTDB3  PRG      2944   2-03-85   8:04a
    TRACKDEX PRG       591   2-07-85   1:03p
    TRACKMEM FMT       245   2-07-85  12:40p
    TRACKNME NDX      1024   2-07-85   2:23p
    TRACKNXT NDX      1024   2-07-85   2:23p
    TRACKPRD NDX      1024   2-07-85   2:23p
    TRACKPRO PRG      3894   2-07-85   3:19p
    TRACKRDX NDX      1024   2-07-85   2:23p
    TRACKRST DBF       270   2-07-85  12:52p
    TRACKSTS NDX      1024   2-07-85   2:23p
    TRACK_IT DBF       451   2-07-85   3:21p
    TRACK_IT DBT       512   2-07-85   3:21p
    TRACK_IT PRG      5211   2-07-85   2:22p
    DBASECHG BAS      5504   4-24-84   9:58p
    DBASEGRF CMD      5376   4-13-84  11:32p
    MAILED   BAK      5120   1-01-80  12:17a
    DBS      EXE     39936   7-13-86   2:39p
    READ     ME       1024   7-13-86   2:43p
    COPYFLD  DOC      3712  11-20-84   1:40a
    COPYFLD  PRG      4480  11-20-84   1:40a
    DOP      DOC     10368  12-30-84  12:56p
    DOP2     PRG      9088  12-30-84  12:56p
    DOP3     PRG     10240  12-30-84  12:56p
    DBASE2C1 COM      8448   6-11-83  12:17a
    FILES318 TXT      2834   1-04-80  12:26a
           83 file(s)     231576 bytes
                           61440 bytes free
