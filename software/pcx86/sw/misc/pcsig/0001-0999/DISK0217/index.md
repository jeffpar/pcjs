---
layout: page
title: "PC-SIG Library Disk #217"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0217/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0217"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "ELIST AND DISK ALIGNMENT"

    NELIST is a Pascal source lister, capable of automatically enhancing
    your printouts, and configurable to your own needs.  WA-TOR is a
    fascinating predator-prey simulation, try changing it's parameters and
    watch what happens!  SUPERDIR is a diskette file manager that allows
    you to give each file a descriptive comment line.
    
    How to Start: To run a COM program simply type its name and press
    <ENTER>.  For instructions on running BASIC programs, please refer to
    the GETTING STARTED section in this catalog.  For information on PAS
    programs, consult your Pascal manual.
    
    Suggested Registration:  NET/ALIGN $20.00.
    
    File Descriptions:
    
    SUPERDIR BAS  "Super directory" program  (Compute Magazine April, l984)
    RESWORDS TXT  Key word list used by NELIST
    DUMPSCRN MRG  Model BASIC program for using DUMPSCRN.BAS
    DUMPSCRN BAS  BLOADable high resolution screen dump  (Softalk July 1983)
    SUPERDIR DOC  Documentation for SUPERDIR.BAS
    NELIST   PAS  Source code for NELIST
    NEINST   COM  Installation program to create NEPRN.DAT
    NEPRN    DAT  Printer control data for NELIST
    NELIST   COM  Turbo Pascal source lister - underlines key words etc.
    NELIST   DOC  Documentation for NELIST
    ALIGN    DOC  Documentation for disk alignment program
    ALIGN    EXE  Disk alignment program
    DUMPSCRN DOC  Documentation for DUMPSCRN
    NEINST   PAS  Source code for NEINST
    WA-TOR   000  Overlays used by WA-TOR.COM
    WA-TOR   COM  Predator-prey simulation (Scientific American, Dec., 1984)
    WA-TOR   DOC  Documentation for WA-TOR
    WA-TOR   PAS  Turbo Pascal source code for WA-TOR
    LETTER        Notes on WA-TOR.COM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## SUPERDIR.BAS

```bas
100 '   Super Directory for the IBM Personal Computer
102 '
104 '   From Compute magazine, April, 1984 (per Dick Haan)
110 '   for monochrome or color adaptor, 80 columns
120     SCREEN 0,0,0: WIDTH 80: COLOR 7,0: CLS: DEFINT A-Z: KEY OFF:                       FOR I=1 TO 10: KEY I,"": NEXT
130     CR$=CHR$(17)+CHR$(196)+CHR$(217)
140     PRINT "Welcome to ";:COLOR 15: PRINT"Super Directory":COLOR 7
150 '   ---Remove the REM from next line for automatic use with drive A:
160 REM DRIVE$="A:": FSPEC$="A:*.*": GOTO 200
170     PRINT:PRINT "Select Drive: (";: COLOR 16,15: PRINT"A B";: COLOR 7,0:               PRINT CHR$(29);CHR$(29)"/";CHR$(28);")"
180     DRIVE$=INKEY$+":":A=ASC(DRIVE$):IF(A OR 32)<97 OR (A OR 32)>98 THEN 180
190     DRIVE$=CHR$(A AND 223)+":": FSPEC$=DRIVE$+"*.*"
200     GOSUB 5000: CLS: COLOR 23: PRINT "Reading description file"
210     DIM D$(ENTRIES): FOR I=0 TO ENTRIES: D$(I)=CHR$(9)+"--": NEXT
220     ON ERROR GOTO 310
230     OPEN DRIVE$+"descr.dir" FOR INPUT AS #1
240     LINE INPUT #1, DISKNAME$: LINE INPUT #1, A$: NUMREC=VAL(A$)
250     FOR ITEMS=0 TO NUMREC
260         LINE INPUT #1, F$: LINE INPUT #1, D$
264         IF ASC(D$)=9 THEN 290
270         FOR I=0 TO ENTRIES
280             IF F$=F$(I) THEN D$(I)=D$
284         NEXT I
290     NEXT ITEMS
300     GOTO 320
310     RESUME 320
320     CLOSE #1: ON ERROR GOTO 0
330     PAGES = INT(ENTRIES/10)
340     CURR = 0
350     START=CURR*10: FINISH=START+9: IF FINISH>ENTRIES THEN FINISH=ENTRIES
360     CLS: COLOR 0,15: LOCATE 2,1: PRINT STRING$(80,32): LOCATE 2,2:                     PRINT"Super Directory"; TAB(70); "Drive " DRIVE$:                               LOCATE 2,40-LEN(DISKNAME$)/2: PRINT DISKNAME$: PRINT
370     FOR I = START TO FINISH
380        COLOR 0,15: PRINT "F"; LEFT$(MID$(STR$(1+I-START),2)+" ",2);:                   COLOR 15,0: PRINT " "; F$(I); TAB(18);: COLOR 7: PRINT D$(I):                   PRINT STRING$(80,196);
390     NEXT
400     LOCATE 25,1:COLOR 15,0:PRINT "Press ";:COLOR 0,15:PRINT"F1";:COLOR 15,0:          PRINT" to ";:COLOR 0,15:PRINT"F";MID$(STR$(1+FINISH-START),2);:COLOR            15,0:PRINT" to select program.  Page with PgUp or PgDn.  ESC quits."
410     LOCATE 23,32: PRINT" Page #";CURR+1;"of";PAGES +1
420     A$=INKEY$: IF A$="" THEN 420
430     IF A$<>CHR$(27) THEN 540
440     LOCATE 25,1: PRINT SPACE$(79);:LOCATE 25,1:PRINT"  1. Exit to BASIC  "+           "2. Exit to DOS  3. Re-RUN  4. Save descriptions  5. Menu";
450     A$=INKEY$: IF A$<"1" OR A$>"5" THEN 450
460     ON VAL(A$) GOTO 470,480,490,500: GOTO 350
470     COLOR 7: CLS: GOTO 5300
480     SYSTEM
490     RUN
500     ON ERROR GOTO 510: GOSUB 1000: GOTO 350
510     BEEP: LOCATE 25,1: PRINT SPACE$(79);: LOCATE 25,1: COLOR 31: PRINT               "Can't save descriptions.  ":COLOR 7:PRINT"Press "CR$;" to continue.";
520     IF INKEY$<>CHR$(13) THEN 520
530     RESUME 350
540     IF A$=CHR$(0)+CHR$(81) THEN CURR=-(CURR+1)*(CURR<PAGES): GOTO 350
550     IF A$=CHR$(0)+CHR$(73) THEN CURR=CURR-1: CURR=CURR-(PAGES+1)*(CURR<0):            GOTO 350
560     A=ASC(MID$(A$+"0",2))-59:IF A<0 OR A>FINISH-START THEN BEEP: GOTO 420
570     LOCATE 25,1: PRINT SPACE$(79);: LOCATE 25,1: PRINT "Press ";CR$;                  " to run program, ESC to return to menu, SPACE to do description.";
580     LOCATE 3+A*2,5: COLOR 31: PRINT F$(START+A);: COLOR 15
590     A$=INKEY$: IF A$<>CHR$(13) AND A$<>CHR$(27) AND A$<>CHR$(32) THEN 590
600     IF A$=CHR$(27) THEN LOCATE 3+A*2,5: PRINT F$(START+A);: GOTO 350
610     IF A$<>CHR$(32) THEN 670
620     IF DISKNAME$="" THEN LOCATE 25,1: PRINT SPACE$(79);: LOCATE 25,1:                 LINE INPUT;"Enter name of disk: "; DISKNAME$: GOTO 620
630     LOCATE 25,1: PRINT SPACE$(79);: LOCATE 25,1: Z=START+A:                         PRINT "Description: ";D$(Z);: LOCATE 25,15: LINE INPUT ;D$(Z):                  D$(Z)=LEFT$(" "+D$(Z),62): GOTO 350
640     LOCATE 25,1: PRINT SPACE$(79);: BEEP: COLOR 31: LOCATE 25,1:                      PRINT "Cannot save descriptions to disk.  ": COLOR 7:                           PRINT "Run program anyway? (Y/N):";
650     A$=INKEY$: IF A$<>"Y" AND A$<>"y" AND A$<>"N" AND A$<>"n" THEN 650
660     IF A$="Y" OR A$="y" THEN RESUME 680 ELSE RESUME 350
670     ON ERROR GOTO 640: GOSUB 1000
680     ON ERROR GOTO 690: COLOR 7: CLS: RUN DRIVE$+F$(START+A)
690     LOCATE 25,1: PRINT SPACE$(79): COLOR 23: BEEP: PRINT "Cannot run ";               F$(A);".  ";: COLOR 7: PRINT "Press  ";CR$;" to continue...";
700     IF INKEY$<>CHR$(13) THEN 700
710     RESUME 350
720     GOTO 5300
1000 '  Save descriptions to disk
1010    OPEN DRIVE$+"DESCR.DIR" FOR OUTPUT AS #1
1020    PRINT #1, DISKNAME$;CHR$(13);ENTRIES '   ;CHR$(13)
1030    FOR I=0 TO ENTRIES: PRINT #1, F$(I);CHR$(13);D$(I);CHR$(13);: NEXT
1040    CLOSE #1: ON ERROR GOTO 0: RETURN
1050 '
5000 '  This subroutine reads disk directory into a string array
5010 '  Enter with FSPEC$, the file spec for the FILES command
5020 '  Exits with array F$, and NUMFILES, the number of files
5030 '  Uses a temporary array, TT$, which is ERASED after use
5040 '
5050    DEF SEG = 0: WIDTH 80
5060    HEAD=1050: TAIL=1052: BUFFER=1054
5070    CLS: COLOR 23,0,0: PRINT "Reading disk directory"
5080    COLOR 0: ON ERROR GOTO 5100
5090    FILES FSPEC$: ON ERROR GOTO 0: GOTO 5110
5100    BEEP: COLOR 31: CLS: PRINT"Cannot read directory": COLOR 7:                       ON ERROR GOTO 0: GOTO 5300
5110    DIM TT$(24): LOCATE 2,1: COLOR 7: ROWS = 0
5120 '  Put code for End, Enter into keyboard standard buffer
5130    POKE HEAD,30: POKE TAIL,34: POKE BUFFER,0: POKE BUFFER+1,79:                      POKE BUFFER+2,13: POKE BUFFER+3,28
5140    LINE INPUT TT$(ROWS)
5150    IF TT$(ROWS)<>"" THEN ROWS=ROWS+1:GOTO 5130
5160    IF NOT DIMMED THEN DIM F$(ROWS*6-1): DIMMED = 1
5170    ROWS=ROWS-1
5180    FOR I = 0 TO ROWS
5190       FOR J = 0 TO 5
5200          T$=MID$(TT$(I),J*13+1,12)
5210          IF T$<>"" THEN F$(ENTRIES) = T$: ENTRIES = ENTRIES+1
5220       NEXT J
5230    NEXT I
5240    ERASE TT$: ENTRIES = ENTRIES-1
5250    DEF SEG: RETURN
5300  ' ---Set the keys
5310    KEY 1, "LIST ": KEY 2, "RUN"+CHR$(13)
5320    KEY 3, "LOAD"+CHR$(34): KEY 4, "SAVE"+CHR$(34)
5330    KEY 5, "EDIT ": KEY 6, "CHR$(12);" + CHR$(13): KEY 7, "CHR$("
5340    KEY 8, "CHR$(27);": KEY 9, ".BAS"+CHR$(34)+",A": KEY 10, "LPRINT "
5350    KEY ON
5360    KEY LIST: CLOSE: END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0217

     Volume in drive A has no label
     Directory of A:\

    RESWORDS TXT       285   7-17-84  10:50p
    SUPERDIR BAS      5376   1-01-80  12:17a
    SUPERDIR DOC      3712   6-23-84   1:22p
    DUMPSCRN BAS       256   4-27-84  10:17p
    DUMPSCRN MRG       512   6-23-84   1:12p
    DUMPSCRN DOC      1408   6-23-84   1:09p
    ALIGN    EXE     33108   6-09-84  10:44a
    ALIGN    DOC     21094   7-07-84   5:59p
    NELIST   DOC     10624  12-23-84   4:16p
    NELIST   COM     19488  12-20-84   5:21p
    NEPRN    DAT        36   8-15-84  12:43p
    NEINST   COM     15620   8-15-84  12:43p
    NELIST   PAS     21248  12-20-84   5:23p
    NEINST   PAS     10519   8-15-84  12:41p
    LETTER            3648   1-21-85  10:39a
    WA-TOR   COM     23921  12-23-84   1:39p
    WA-TOR   000     16896  12-23-84   1:39p
    WA-TOR   PAS     34497  12-23-84   1:38p
    WA-TOR   DOC      9600  12-23-84   1:23a
    CRC      TXT      1475   1-21-85  12:46p
    CRCK4    COM      1536  10-21-82   5:50p
           21 file(s)     234859 bytes
                           74752 bytes free
