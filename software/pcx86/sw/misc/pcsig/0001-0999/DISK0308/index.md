---
layout: page
title: "PC-SIG Diskette Library (Disk #308)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0308/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0308"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ASSEMBLY UTILITIES NO 2"

    The files on this disk are Assembly programs that may serve to both
    teach and tantalize you Assembly language programmers out there.  This
    disk is intended for the more experienced, or adventurous, among you.
    Not all routines have much in the way of remarks.
    
    Special Requirements:  An Assembler.
    
    How to Start: To read the files with the DOC extensions, enter TYPE
    filename.DOC press return.  To run the files with the ASM extension,
    refer to your Assembler manual.
    
    File Descriptions:
    
    ASC_BIN  ASM  Converts a string of numbers to a signed 16 binary
    ASC_BIN  OBJ  Object code for ASC_BIN
    BIN_ASC  ASM  Converts signed binary to a 6 digit ASCII string
    BIN_ASC  OBJ  Object code for BIN_ASC
    CASE     ASM  Source code for CASE
    CASE     COM  Utility changes case for comments and instructions
    CIRCLE_1 ASM  Calls circle subroutine
    CIRCLE_2 ASM  Similar to CIRCLE_1.ASM
    CIRCLE_3 ASM  Similar to CIRCLE_1.ASM
    CLINK    DOC  Documentation file.
    CLOSER   ASM  Demonstrates a bug in CLOSE routine in PC-DOS
    COMPAQ   ASM  Function unknown
    DEC_ADJ  ASM  Multiplies a number by ten
    DEC_ADJ  OBJ  Object code for DEC_ADJ
    DISP-REG ASM  Display various registers as set by loader
    DPATH    ASM  Does something with subdirectories or paths
    DRAWLINE ASM  Program to draw line
    FAST_CIR ASM  Program to draw a circle
    FLIST    ASM  Sorted list of diskette files
    HELLO    ASM  Assembly language demo program
    IBM      ASM  Function unknown
    KEYBUFF  ASM  Keyboard buffer expansion program
    LOAD     ASM  Will load a .COM file larger than 64k
    LOOK     ASM  Looks at memory
    MACRO    ASM  A bunch of utility macros
    MACRO1   ASM  More macros
    OPER     ASM  Demonstrates operators:20a
    PMODE    ASM  Sets up printer modes
    PX       DOC  Documentation for PX
    PX       EXE  Keeps track of procedure calls within a program
    SETOKI   ASM  Sends control characters to Okidata Microline 92
    SQ_RT    ASM  Assembly source for SQ_RT
    SQ_RT    EXE  Calculates square roots
    SQ_RT    OBJ  Object code for SQ_RT
    STDBOOT  ASM  Define IBMBIO entry point
    SWITCH_1 ASM  Fool hardware switch settings
    SWITCH_2 ASM  Another version of SWITCH_1
    SWPTR    ASM  Exchanges printer addresses LPT1 and LPT2
    SWPTR    COM  Swaps LPT1 and LPT2
    SYSINT   ASM  Indexes system interrupt function calls
    SYSINT2  ASM  Variation of SYSINT.ASM   "       "
    TESTLINE ASM  Sample driver for DRAWLINE
    TRACE02  COM  Displays current values of CS:IP registers
    TRACE02  DOC  Documentation for TRACE02
    UASM-LST BAS  Removes addresses and adds labels on DEBUG output
    UNDOS    ASM  UnDOS a system disk
    VMODE    ASM  Sets up display mode
    VW-TO-WS ASM  Volkswriter to Wordstar conversion
    WHEREIS  ASM  Find a file on a hard disk drive
    WS-TO-VW ASM  Wordstar to Volkswriter conversion
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## UASM-LST.BAS

```bas
1  '------------------------------------------------------------------------
2  '-               UASMLST.BAS    VER 1.0     07/02/83                    -
3  '-                                                                      -
4  '-        REMOVES ADDRESSES FROM FILES CREATED FROM DEBUG UN-           -
5  '-        ASSEMBLE SCRIPT FILES (DOS 2.0 ONLY) AND INSERTS LABELS.      -
6  '-        A SCRIPT FILE (ASCII PLEASE ) IS CREATED WITH THE             -
7  '-        DEBUG INSTRUCTIONS (I.E.:                                     -
8  '-                           U ADR1 ADR2                                -
9  '-                           U ADR3 ADR4                                -
10 '-                           Q                                          -
11 '-        AND THEN PROCESSED AS FOLLOWS FROM THE DOS PROMPT:            -
12 '-         A>DEBUG D:MYFILE.EXT <SCRIPT >UNASM.TXT                      -
13 '-        ALL OUTPUT THAT WOULD NORMALLY GO TO THE SCREEN IS PIPED      -
14 '-        TO THE FILE UNASM.TXT.                                        -
15 '-                                                                      -
16 '-        UNASM.TXT IS THEN SUBMITTED TO UASMLST FOR PROCESSING.        -
17 '-                                                                      -
18 '-        DEBUG PIPED OUTPUT IS FORMATTED AS FOLLOWS:                   -
19 '-        POSITION            DATA                                      -
20 '-        --------            ----                                      -
21 '-        1 -  4              DEFAULT SEGMENT                           -
22 '-             5              CONSTANT :                                -
23 '-        6 -  9              OFFSET VALUE                              -
24 '-            10              BLANK                                     -
25 '-       11 - 24              HEX VALUE OF CONTENTS                     -
26 '-       25 - 32              MNEMONIC                                  -
27 '-       33 -  -              OPERAND                                   -
28 '-                                                                      -
29 '-                                                                      -
30 '------------------------------------------------------------------------
100 CLS
110 KEY OFF
120 DEFINT A-Z
130 DIM ADDR.REF$(2000),JUMP$(25)
140 JUMPNUMBER=21
150     FOR I = 1 TO JUMPNUMBER
160         READ JUMP$(I)
170     NEXT
180 DATA "JMP ","JMPS","JZ  ","JNZ ","LOOP","CALL","JCXZ","JB  ","JBE ","JNB ","JA  "
190 DATA "JG  ","JGE ","JL  ","JLE ","JNO ","JPO ","JNS ","JO  ","JPE ","JS  "
200 '--------------------------------------------
210 '         GET FILE NAME                     -
220 '--------------------------------------------
230 LOCATE 2,7:PRINT "UASMLST VERSION 1.0"
240 LOCATE 4,12:INPUT "ENTER NAME OF INPUT FILE: ",INPUTFILE$   'DEBUG OUTPUT
250 LOCATE 5,12:INPUT "ENTER NAME OF OUTPUT FILE: ",OUTPUTFILE$ 'UASMLST OUTPUT
260 LOCATE 6,12:PRINT "WORKING........."
270 '--------------------------------------------
280 '          PARSE FILE                       -
290 '--------------------------------------------
300 OPEN INPUTFILE$ FOR INPUT AS #1
310 OPEN OUTPUTFILE$ FOR OUTPUT AS #2
320 IF EOF(1) THEN 390
330 LINE INPUT #1,UNASSEMBLE$:IF LEN(UNASSEMBLE$)<28 THEN 320 ELSE UNASMINSTR$=MID$(UNASSEMBLE$,25,4)
340 FOR COUNTER = 1 TO JUMPNUMBER:IF UNASMINSTR$<>JUMP$(COUNTER) THEN NEXT:GOTO 320
350 IF MID$(UNASSEMBLE$,33,1)="[" THEN 320
360 IF MID$(UNASSEMBLE$,33,3)="FAR" THEN 320
370 IF MID$(UNASSEMBLE$,37,1)=":" THEN 320
380 ADDR.REF=ADDR.REF+1:ADDR.REF$(ADDR.REF)=MID$(UNASSEMBLE$,33,4):GOTO 320
390 CLOSE #1:OPEN INPUTFILE$ FOR INPUT AS #1
400 LOCATE 20,13:PRINT "SORTING ........."
410 '---------------------------------------------------
420 '              SHELL SORT                          -
430 '---------------------------------------------------
440 D=2^INT(LOG(ADDR.REF)/LOG(2))-1
450 FOR COUNTER = 1 TO ADDR.REF-D
460 IF ADDR.REF$(COUNTER)<=ADDR.REF$(COUNTER+D) THEN 520 ELSE T$=ADDR.REF$(COUNTER+D):ADDR.REF$(COUNTER+D)=ADDR.REF$(COUNTER)
470 IF COUNTER<=D THEN ADDR.REF$(COUNTER)=T$:GOTO 520
480 FOR J=COUNTER-D TO 1 STEP -D
490 IF T$>=ADDR.REF$(J) THEN 510 ELSE ADDR.REF$(J+D)=ADDR.REF$(J)
500 NEXT J
510 ADDR.REF$(J+D)=T$
520 NEXT COUNTER
530 D=INT(D/2):IF D>0 THEN 450 ELSE COUNTER = 1
540 IF COUNTER=ADDR.REF THEN 600
550 IF ADDR.REF$(COUNTER)=ADDR.REF$(COUNTER+1) THEN FOR J = COUNTER TO ADDR.REF:ADDR.REF$(J)=ADDR.REF$(J+1):NEXT:ADDR.REF=ADDR.REF-1 ELSE COUNTER = COUNTER+1
560 GOTO 540
570 '-----------------------------------------------------
580 '-      NOW SORTED, GOT THRU AND INSERT LABELS       -
590 '----------------------------------------------------
600 L=1         'L = LABEL REFERENCE
610 IF NOT EOF(1) THEN 650 ELSE IF L>ADDR.REF THEN 640
620 PRINT "ERROR: REFERENCED CODE AT ";ADDR.REF$(L);" WAS NOT FOUND."
630 PRINT "THE FOLLOWING REFERENCE(S) ARE NOT INCLUDED:":FOR COUNTER =L TO ADDR.REF:PRINT ADDR.REF$(COUNTER),:NEXT
640 CLOSE:END 'OF PROGRAM
650 LINE INPUT #1,UNASSEMBLE$:IF LEN(UNASSEMBLE$)<28 THEN 610
660 IF MID$(UNASSEMBLE$,6,4)<ADDR.REF$(L) THEN MID$(UNASSEMBLE$,6,4)="     ":GOTO 710
670 IF MID$(UNASSEMBLE$,6,4)=ADDR.REF$(L) THEN 690
680 IF L>ADDR.REF THEN MID$(UNASSEMBLE$,6,4)="     ":GOTO 710 ELSE 620
690 L$=STR$(L):L$="L"+RIGHT$(L$,LEN(L$)-1)
700 L$=L$+":"+STRING$(4-LEN(L$)," "):MID$(UNASSEMBLE$,6,5)=L$:L=L+1
710 UNASMINSTR$=MID$(UNASSEMBLE$,25,4):FOR COUNTER = 1 TO JUMPNUMBER:IF UNASMINSTR$<>JUMP$(COUNTER) THEN NEXT:GOTO 780
720 IF MID$(UNASSEMBLE$,33,1)="[" THEN 780
730 IF MID$(UNASSEMBLE$,33,3)="FAR" THEN 780
740 IF MID$(UNASSEMBLE$,37,1)=":" THEN 780
750 REF$=MID$(UNASSEMBLE$,33,4):FOR COUNTER = 1 TO ADDR.REF:IF REF$<>ADDR.REF$(COUNTER) THEN NEXT
760 L$=STR$(COUNTER):L$="L"+RIGHT$(L$,LEN(L$)-1)
770 MID$(UNASSEMBLE$,33,4)=L$+STRING$(4-LEN(L$)," ")
780 UNASSEMBLE$=MID$(UNASSEMBLE$,6,5)+" "+RIGHT$(UNASSEMBLE$,LEN(UNASSEMBLE$)-23)
790 FOR COUNTER = LEN(UNASSEMBLE$) TO 2 STEP -1:IF MID$(UNASSEMBLE$,COUNTER,1)=" " THEN NEXT
800 UNASSEMBLE$=LEFT$(UNASSEMBLE$,COUNTER)
810 PRINT UNASSEMBLE$:PRINT #2,UNASSEMBLE$:GOTO 610
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0308

     Volume in drive A has no label
     Directory of A:\

    LOOK     ASM     21933   3-04-84  10:16a
    DISP-REG ASM      8617   3-04-84  10:19a
    ASC_BIN  ASM      3658   9-17-83  12:04a
    ASC_BIN  OBJ       255  12-05-83   9:52p
    BIN_ASC  ASM      1680   1-01-80  12:07a
    BIN_ASC  OBJ       106  12-05-83   9:53p
    CASE     ASM      7542   5-11-85  11:04p
    CASE     COM       256   2-20-84   9:38a
    CIRCLE_1 ASM      1085   7-10-83  10:18p
    CIRCLE_2 ASM      1263   7-27-83   5:38p
    CIRCLE_3 ASM      1583   7-27-83   5:25p
    CLINK    DOC       452   3-04-84  10:50a
    CLOSER   ASM      4680   3-04-84  11:02a
    COMPAQ   ASM      4248   8-28-83   7:23p
    DEC_ADJ  ASM      1909  10-13-83   9:36p
    DEC_ADJ  OBJ        99  12-05-83   9:53p
    DPATH    ASM      9338  12-08-84  10:06a
    DRAWLINE ASM      4866   7-27-83   9:55p
    FAST_CIR ASM      6928   7-25-83   6:40p
    FLIST    ASM     27742  11-16-83   7:57p
    HELLO    ASM      3417   3-04-84  11:22a
    IBM      ASM      4245   8-28-83   7:24p
    KEYBUFF  ASM      8481  11-14-83   7:45p
    LOAD     ASM      3169   3-04-84  11:03a
    MACRO    ASM     16370   5-19-85   2:03a
    MACRO1   ASM     19317   5-11-85   5:11a
    OPER     ASM      2873   3-04-84  11:20a
    PMODE    ASM     10880   1-01-80  12:17a
    PX       DOC     17004   5-02-84   9:01a
    PX       EXE     22912   5-02-84   3:52p
    SETOKI   ASM      5073   3-04-84  10:47a
    SQ_RT    ASM     13633  10-15-83   5:24p
    SQ_RT    EXE      2560  12-05-83   9:58p
    SQ_RT    OBJ      1531  12-05-83   9:56p
    STDBOOT  ASM     16911  12-20-83  10:00a
    SWITCH_1 ASM      2745   6-19-83   5:10p
    SWITCH_2 ASM      3532   6-19-83   9:56p
    SWPTR    ASM      4561   3-02-87   3:23a
    SWPTR    COM       360   3-02-87   3:24a
    SYSINT   ASM      1470   9-10-83  11:10a
    SYSINT2  ASM      2560   9-15-83   7:37a
    TESTLINE ASM      1740   7-27-83  10:18p
    TRACE02  COM       640  12-20-83   7:20a
    TRACE02  DOC       710  12-20-83   8:04a
    UASM-LST BAS      6258   3-04-84  11:24a
    UNDOS    ASM      8109  10-23-83   7:53a
    VMODE    ASM      4480   9-26-83   5:28p
    VW-TO-WS ASM     16430   3-04-84  11:21a
    WHEREIS  ASM     14207   3-04-84  10:22a
    WS-TO-VW ASM     10439   3-04-84  11:22a
           50 file(s)     334857 bytes
                               0 bytes free
