---
layout: page
title: "PC-SIG Diskette Library (Disk #132)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0132/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0132"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PASCAL TOOLS VOL 3"

    This is the third of the three-disk series Pascal Tools, and includes
    the source code for the routines included on Disks No 130 and
    131 along with batch files to create utilties, all accompanied by
    documentation.  See disk #130 for more information.
    
    How to Start: Enter TYPE README3 and press <ENTER> for program
    information.  To run Pascal routines, refer to your Pascal language
    manual.
    
    File Descriptions:
    
    GLOBCONS INC  Include files (3 files)
    GETFCB   ASM  Pascal callable routine to fill File Control Block (FCB)
    *        AR   Source code for Pascal tools (15 files)
    README3       Notes about using Pascal tools
    *        OBJ  Object files
    *        DCL  Procedure definition files
    CMDFILE  BAT  Batch files used to create utilities (3 files)
    ???      BAT  PASCAL batch file utilities
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #132, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  README3 .            CRC = 8A 03

--> FILE:  ARCHIVE .AR          CRC = 55 EA

--> FILE:  CHARCNT .AR          CRC = B1 49

--> FILE:  ECHOARG .AR          CRC = 2B 55

--> FILE:  FINDP   .AR          CRC = 12 3A

--> FILE:  FMT     .AR          CRC = 3F 93

--> FILE:  KWIC    .AR          CRC = 88 67

--> FILE:  LINECNT .AR          CRC = 28 C7

--> FILE:  MACRO   .AR          CRC = 21 5F

--> FILE:  PRIMS   .AR          CRC = AE 5E

--> FILE:  PRINTF  .AR          CRC = 0F BE

--> FILE:  SORTF   .AR          CRC = FA 58

--> FILE:  TED     .AR          CRC = 84 DE

--> FILE:  TRANSLIT.AR          CRC = 9E 4C

--> FILE:  UNIQUE  .AR          CRC = 80 1D

--> FILE:  UNROTATE.AR          CRC = E0 3E

--> FILE:  UTILITY .AR          CRC = 1E FE

--> FILE:  WORDCNT .AR          CRC = 3A 59

--> FILE:  GETFCB  .ASM         CRC = 9F 55

--> FILE:  GLOBCONS.INC         CRC = 9F 9F

--> FILE:  GLOBTYPS.INC         CRC = A4 E3

--> FILE:  GLOBVARS.INC         CRC = 00 00

--> FILE:  ADDSTR  .DCL         CRC = 00 00

--> FILE:  CLOSE   .DCL         CRC = 00 00

--> FILE:  CREATE  .DCL         CRC = 00 00

--> FILE:  CTOI    .DCL         CRC = 00 00

--> FILE:  EQUAL   .DCL         CRC = 00 00

--> FILE:  ERROR   .DCL         CRC = 00 00

--> FILE:  ESC     .DCL         CRC = 00 00

--> FILE:  FCOPY   .DCL         CRC = 00 00

--> FILE:  FLUSH   .DCL         CRC = 00 00

--> FILE:  GDATE   .DCL         CRC = 00 00

--> FILE:  GETARG  .DCL         CRC = 00 00

--> FILE:  GETC    .DCL         CRC = 00 00

--> FILE:  GETCF   .DCL         CRC = 00 00

--> FILE:  GETLINE .DCL         CRC = 00 00

--> FILE:  GTIME   .DCL         CRC = 00 00

--> FILE:  IMAX    .DCL         CRC = 00 00

--> FILE:  IMIN    .DCL         CRC = 00 00

--> FILE:  INDEX   .DCL         CRC = 00 00

--> FILE:  INITIO  .DCL         CRC = 00 00

--> FILE:  ISALPHAN.DCL         CRC = 00 00

--> FILE:  ISDIGIT .DCL         CRC = 00 00

--> FILE:  ISLETTER.DCL         CRC = 00 00

--> FILE:  ISLOWER .DCL         CRC = 00 00

--> FILE:  ISUPPER .DCL         CRC = 00 00

--> FILE:  ITOC    .DCL         CRC = 00 00

--> FILE:  LENGTH  .DCL         CRC = 00 00

--> FILE:  MESSAGE .DCL         CRC = 00 00

--> FILE:  MUSTCREA.DCL         CRC = 00 00

--> FILE:  MUSTOPEN.DCL         CRC = 00 00

--> FILE:  NARGS   .DCL         CRC = 00 00

--> FILE:  OPEN    .DCL         CRC = 00 00

--> FILE:  PUTC    .DCL         CRC = 00 00

--> FILE:  PUTCF   .DCL         CRC = 00 00

--> FILE:  PUTDEC  .DCL         CRC = 00 00

--> FILE:  PUTSTR  .DCL         CRC = 00 00

--> FILE:  REMOVE  .DCL         CRC = 00 00

--> FILE:  SCOPY   .DCL         CRC = 00 00

--> FILE:  CMDFILE .BAT         CRC = 00 00

--> FILE:  LKTOOL  .BAT         CRC = 00 00

--> FILE:  MKFLOP1 .BAT         CRC = 7E D1

--> FILE:  MKFLOP2 .BAT         CRC = EB 56

--> FILE:  MKFLOP3 .BAT         CRC = 34 D1

--> FILE:  MKOBJ   .BAT         CRC = 00 00

--> FILE:  MKPR    .BAT         CRC = 00 00

--> FILE:  MKPRIMS .BAT         CRC = 16 C0

--> FILE:  MKTOOL  .BAT         CRC = 00 00

--> FILE:  MKUT    .BAT         CRC = 00 00

--> FILE:  MKUTILS .BAT         CRC = FE FE

--> FILE:  ADDSTR  .OBJ         CRC = E8 2D

--> FILE:  CLOSE   .OBJ         CRC = BA F8

--> FILE:  CREATE  .OBJ         CRC = 74 F2

--> FILE:  CTOI    .OBJ         CRC = 58 81

--> FILE:  EQUAL   .OBJ         CRC = DC 2E

--> FILE:  ERROR   .OBJ         CRC = 15 A1

--> FILE:  ESC     .OBJ         CRC = 95 75

--> FILE:  FCOPY   .OBJ         CRC = 85 B4

--> FILE:  FLUSH   .OBJ         CRC = 8E 53

--> FILE:  GDATE   .OBJ         CRC = 52 7F

--> FILE:  GETARG  .OBJ         CRC = A9 4E

--> FILE:  GETC    .OBJ         CRC = 96 78

--> FILE:  GETCF   .OBJ         CRC = 75 80

--> FILE:  GETFCB  .OBJ         CRC = 00 00

--> FILE:  GETLINE .OBJ         CRC = A9 F3

--> FILE:  GTIME   .OBJ         CRC = 90 78

--> FILE:  IMAX    .OBJ         CRC = 54 FE

--> FILE:  IMIN    .OBJ         CRC = B2 DD

--> FILE:  INDEX   .OBJ         CRC = 18 75

--> FILE:  INITIO  .OBJ         CRC = 65 45

--> FILE:  ISALPHAN.OBJ         CRC = 8B 5C

--> FILE:  ISDIGIT .OBJ         CRC = 3E 55

--> FILE:  ISLETTER.OBJ         CRC = E6 68

--> FILE:  ISLOWER .OBJ         CRC = EA 83

--> FILE:  ISUPPER .OBJ         CRC = A5 BC

--> FILE:  ITOC    .OBJ         CRC = F5 1E

--> FILE:  LENGTH  .OBJ         CRC = 1F 53

--> FILE:  MESSAGE .OBJ         CRC = 10 3C

--> FILE:  MUSTCREA.OBJ         CRC = 68 C9

--> FILE:  MUSTOPEN.OBJ         CRC = 53 7A

--> FILE:  NARGS   .OBJ         CRC = 49 93

--> FILE:  OPEN    .OBJ         CRC = DC 86

--> FILE:  PUTC    .OBJ         CRC = 58 D2

--> FILE:  PUTCF   .OBJ         CRC = 2C 2A

--> FILE:  PUTDEC  .OBJ         CRC = EE BB

--> FILE:  PUTSTR  .OBJ         CRC = 63 D4

--> FILE:  REMOVE  .OBJ         CRC = AD 4E

--> FILE:  SCOPY   .OBJ         CRC = 14 2F

 ---------------------> SUM OF CRCS = C2 D3

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## GETFCB.ASM

{% raw %}
```
	 TITLE	PASCAL CALLABLE ROUTINE TO FILL FCB FROM A DIRECTORY
	 PAGE  ,132
;
; FUNCTION GETFCB (VARS IFCB : DOSFCB;	  {input fcb}
;		   VARS OFCB : DOSFCB;	  {output fcb}
;		   CONST FUNC: INTEGER);  {1=RESTART SEARCH, 2=CONTINUE}
;
; You fill the IFCB with the filename info, and OFCB will be returned with
; all the FCB info for the file.  Filename may contain wild characters on
; initial call.  Returns TRUE if successful, FALSE otherwise.
;
;
CSEG	 SEGMENT
	 ASSUME CS:CSEG
PUBLIC	 GETFCB
GETFCB	 PROC	FAR
	 PUSH	BP	      ; SAVE BP REG
	 MOV	DI,DS	      ; SAVE DS FOR PASCAL
	 MOV	BP,SP	      ; BP = BASE OF PARM LIST
	 MOV	BX,[BP]+10    ; SET DS/DX TO OUTPUT FCB ADDRESS
	 MOV	DS,BX
	 MOV	DX,[BP]+8
	 MOV	AH,1AH	      ; SET DISK TRANSFER ADDRESS
	 INT	21H	      ; CALL DOS TO SET DTA
	 MOV	BX,[BP]+14    ; SET DS/DX TO INPUT FCB ADDRESS
	 MOV	DS,BX
	 MOV	DX,[BP]+12
	 MOV	AH,11H	      ; SPECIFY DOS SEARCH FOR FIRST DIRECTORY ENTRY
	 MOV	SI,[BP]+6
	 CMP	SI,02H	      ; SEE IF WE WANT TO CONTINUE INSTEAD
	 JNE	L1	      ; NOPE
	 MOV	AH,12H	      ; SPECIFY DOS SEARCH CONTINUE
L1:
	 INT	21H	      ; CALL DOS TO GET DIRECTORY ENTRY
	 CMP	AL,0	      ; SEE IF ZERO RETURN CODE
	 JNE	L2	      ; NO, SET ERROR CODE
	 MOV	AX,1	      ; YES, SET RETURN TO 'TRUE'
	 JMP	RETURN	      ; GET OUT OF HERE
L2:
	 MOV	AX,0	      ; SET RETURN TO 'FALSE'
RETURN:
	 MOV	DS,DI	      ; RESTORE DS REGISTER
	 POP	BP	      ; RESTORE BP REG
	 RET	0AH	      ; RETURN TO PASCAL
GETFCB	 ENDP
CSEG	 ENDS
	 END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0132

     Volume in drive A has no label
     Directory of A:\

    ADDSTR   DCL       115  10-30-82  11:07a
    ADDSTR   OBJ       426   6-12-83   7:58p
    ARCHIVE  AR      11118   9-01-83   2:05p
    CHARCNT  AR        659   9-02-83   8:40a
    CLOSE    DCL        46  10-25-82  10:39a
    CLOSE    OBJ       529   6-12-83   7:48p
    CMDFILE  BAT       122   8-31-83   8:26p
    CRC      TXT      5635  11-13-84  11:33a
    CRCK4    COM      1536  10-21-82   7:54p
    CREATE   DCL        77  10-30-82  10:58a
    CREATE   OBJ       892   6-12-83   7:49p
    CTOI     DCL        72  10-30-82  11:08a
    CTOI     OBJ       582   6-12-83   7:58p
    ECHOARG  AR        769   9-02-83  10:13a
    EQUAL    DCL        65  10-30-82  11:08a
    EQUAL    OBJ       442   6-12-83   7:59p
    ERROR    DCL        49  10-25-82  10:30a
    ERROR    OBJ       496   6-12-83   7:48p
    ESC      DCL        73  10-30-82  11:09a
    ESC      OBJ       499   6-12-83   7:59p
    FCOPY    DCL        52  10-25-82  10:03p
    FCOPY    OBJ       418   6-12-83   8:00p
    FINDP    AR       2055   8-31-83  11:34p
    FLUSH    DCL        44  10-26-82  11:04p
    FLUSH    OBJ       796   6-12-83   7:45p
    FMT      AR      36267   9-02-83  12:15p
    GDATE    DCL        47   6-12-83   7:32p
    GDATE    OBJ       438   6-12-83   9:59p
    GETARG   DCL        89  10-30-82  11:00a
    GETARG   OBJ       682   6-12-83   7:53p
    GETC     DCL        59  10-25-82  10:52a
    GETC     OBJ       672   8-31-83   8:21p
    GETCF    DCL        74  10-25-82  10:55a
    GETCF    OBJ       710   8-31-83   8:20p
    GETFCB   ASM      1533  10-25-82  11:44p
    GETFCB   OBJ       117  10-25-82  11:45p
    GETLINE  DCL        95  10-30-82  10:57a
    GETLINE  OBJ       525   7-17-83  10:57p
    GLOBCONS INC      1999   6-11-83  12:41p
    GLOBTYPS INC       734  11-02-82  11:14p
    GLOBVARS INC       120  10-22-82   4:01p
    GTIME    DCL        47   6-12-83   7:32p
    GTIME    OBJ       438   6-12-83   9:59p
    IMAX     DCL        54  10-25-82  10:05p
    IMAX     OBJ       378   6-12-83   8:00p
    IMIN     DCL        54  10-25-82  10:08p
    IMIN     OBJ       378   6-12-83   8:01p
    INDEX    DCL        71  10-30-82  11:09a
    INDEX    OBJ       440   6-12-83   8:01p
    INITIO   DCL        61  10-25-82  10:58p
    INITIO   OBJ      5142   7-17-83  10:41p
    ISALPHAN DCL        59  10-25-82  10:13p
    ISALPHAN OBJ       453   6-12-83   8:02p
    ISDIGIT  DCL        56  10-25-82  10:14p
    ISDIGIT  OBJ       423   6-12-83   8:02p
    ISLETTER DCL        57  10-25-82  10:15p
    ISLETTER OBJ       486   6-12-83   8:03p
    ISLOWER  DCL        46  10-25-82  10:16p
    ISLOWER  OBJ       431   6-12-83   8:03p
    ISUPPER  DCL        56  10-25-82  10:18p
    ISUPPER  OBJ       427   6-12-83   8:04p
    ITOC     DCL        84  10-30-82  11:10a
    ITOC     OBJ       519   6-12-83   8:05p
    KWIC     AR       1387   9-01-83   1:11p
    LENGTH   DCL        57  10-30-82  11:10a
    LENGTH   OBJ       418   6-12-83   8:05p
    LINECNT  AR        680   9-02-83   4:27p
    LKTOOL   BAT        24   6-11-83   3:59p
    MACRO    AR      20766   9-06-83   7:26p
    MESSAGE  DCL        51  10-25-82  11:17a
    MESSAGE  OBJ       468   6-12-83   7:52p
    MKFLOP1  BAT       646   9-06-83   9:46p
    MKFLOP2  BAT       245   9-06-83   9:53p
    MKFLOP3  BAT      2349   9-06-83   9:38p
    MKOBJ    BAT        22   6-11-83   3:37p
    MKPR     BAT        31   6-11-83   3:56p
    MKPRIMS  BAT       715   6-12-83   7:55p
    MKTOOL   BAT        45   6-11-83   3:38p
    MKUT     BAT        31   6-11-83   3:56p
    MKUTILS  BAT       772   6-12-83   7:57p
    MUSTCREA DCL        84  10-30-82  11:11a
    MUSTCREA OBJ       543   6-12-83   8:06p
    MUSTOPEN DCL        82  10-30-82  11:11a
    MUSTOPEN OBJ       523   6-12-83   8:06p
    NARGS    DCL        38  10-25-82  11:13a
    NARGS    OBJ       387   6-12-83   7:52p
    OPEN     DCL        75  10-30-82  10:58a
    OPEN     OBJ       879   6-12-83   7:51p
    PRIMS    AR      20840   9-06-83   7:48p
    PRINTF   AR       2959   9-06-83   7:57p
    PUTC     DCL        44  10-26-82  11:05p
    PUTC     OBJ       582   6-12-83   7:44p
    PUTCF    DCL        60  10-25-82  11:07a
    PUTCF    OBJ       623   6-12-83   7:44p
    PUTDEC   DCL        47  10-25-82  10:29p
    PUTDEC   OBJ       536   6-12-83   8:07p
    PUTSTR   DCL        62  10-30-82  10:59a
    PUTSTR   OBJ       436   6-12-83   7:43p
    README3            317   9-06-83   9:38p
    REMOVE   DCL        51  10-30-82  10:59a
    REMOVE   OBJ       628   6-12-83   7:51p
    SCOPY    DCL        98  10-30-82  11:12a
    SCOPY    OBJ       431   6-12-83   8:07p
    SORTF    AR      13380   9-01-83   1:19p
    TED      AR      35948   8-31-83  11:16p
    TRANSLIT AR       3498   8-31-83  11:24p
    UNIQUE   AR        795   9-06-83   8:04p
    UNROTATE AR       1290   9-06-83   8:19p
    UTILITY  AR       7001   9-06-83   8:30p
    WORDCNT  AR        829   9-06-83   8:21p
          110 file(s)     203661 bytes
                           43008 bytes free
