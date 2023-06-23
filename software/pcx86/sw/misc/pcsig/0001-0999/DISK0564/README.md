---
layout: page
title: "PC-SIG Diskette Library (Disk #564)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0564/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0564"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "JON DART'S UTILITIES"

    Dos Utilities is a collection of usefull utilities for the PC user.
    These programs do a number of diffrent things, from making a file read
    only to doing a word count. There is even source code included on the
    disk if you want to see how the programs were written.
    
    Special Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:
    
    File Descriptions:
    
    CLEAN    EXE  Program to remove control chars. from a file.
    CP       EXE  File/directory copy utility.
    CRC      EXE  Cyclic Redundancy Code generator.
    DETAB    EXE  Program to expand tabs to spaces.
    FDUMP    EXE  File dump/patch utility.
    FIXLINES EXE  Makes all lines in a file end with CR/LF.
    HEAD     EXE  Displays first few lines of a file.
    LS-PC    EXE  Directory listing program.
    LS       EXE  Directory listing program.
    MODEM    EXE  Simple communications program.
    MV       EXE  File/directory move utility.
    RM       EXE  Improved DEL function.
    RO       EXE  Sets file to read-only status.
    RW       EXE  Sets file to read-write status.
    SHOW     EXE  Bidirectional file display program.
    TAIL     EXE  Displays last few lines of a file.
    UPDATE   EXE  Makes date and time of a file current.
    UTIL     DOC  Documentation for all programs.
    WC       EXE  Date/word/line counting utility.
    SOURCE   ARC  Source code for the above files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES564.TXT

{% raw %}
```
Disk No  564
Program Title: Dos Utilities version 3.31
PC-SIG version 2.0

Dos Utilities is a collection of usefull utilities for the PC user.
These programs do a number of diffrent things, from making a file read
only to doing a word count. There is even source code included on the
disk if you want to see how the programs were written.

Usage:  Utilities.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:

File Descriptions:

CLEAN    EXE  Program to remove control chars. from a file.
CP       EXE  File/directory copy utility.
CRC      EXE  Cyclic Redundancy Code generator.
DETAB    EXE  Program to expand tabs to spaces.
FDUMP    EXE  File dump/patch utility.
FIXLINES EXE  Makes all lines in a file end with CR/LF.
HEAD     EXE  Displays first few lines of a file.
LS-PC    EXE  Directory listing program.
LS       EXE  Directory listing program.
MODEM    EXE  Simple communications program.
MV       EXE  File/directory move utility.
RM       EXE  Improved DEL function.
RO       EXE  Sets file to read-only status.
RW       EXE  Sets file to read-write status.
SHOW     EXE  Bidirectional file display program.
TAIL     EXE  Displays last few lines of a file.
UPDATE   EXE  Makes date and time of a file current.
UTIL     DOC  Documentation for all programs.
WC       EXE  Date/word/line counting utility.
SOURCE   ARC  Source code for the above files.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<< Disk No 564  Dos Util. version 3.31 >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To run a program, type the name of the file that you wish to run.       ║
║ For example, if you wanted to run the program called SHOW, you would    ║
║ type the following:                                                     ║
║                SHOW (press enter)                                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## CONSOLE.ASM

{% raw %}
```
        TITLE   MSDOS CONSOLE I/O ROUTINES
        .XLIST
        INCLUDE ASCII.DEF
        INCLUDE MSDOS2.DEF
        .LIST

	DOSSEG
	.MODEL SMALL
	.CODE
EXTRN	UC:NEAR
PUBLIC  COUT,SCIN,CIN,CLRCO,CRLF,PRTSTR,ERRORMSG,GETYORN

;       CONSOLE I/O ROUTINES FOR MSDOS

;	PRTSTR = PRINTS ASCIIZ STRING TO STDOUT
;       ENTRY: DS:DX POINTS TO MSG (ASCIIZ STRING)
;       USES: AX,DX,FLAGS
;
PRTSTR	PROC   NEAR
        PUSH    BX
PRTSTR1: MOV	BX,DX
        MOV     AL,BYTE PTR [BX]
        CMP     AL,0
        JZ      PRTSTR2
	CALL	COUT
        INC     DX
        JMP     PRTSTR1
PRTSTR2:
        POP     BX
        RET
PRTSTR	ENDP

;       COUT = OUTPUT CHARACTER IN AL
;
COUT    PROC    NEAR
        PUSH    DX
        PUSH    AX
        MOV     DL,AL
        MOV     AH,STD_CON_OUTPUT
        INT     DOS
        POP     AX
        POP     DX
        RET
COUT    ENDP

;       SCIN = SEE IF CONSOLE CHARACTER AVAILABLE
;       RETURNS 'C'=1 IF NOT AVAILABLE
;       ELSE RETURNS CHAR. IN AL
;
SCIN    PROC    NEAR
        MOV     AH,CON_INPUT_STATUS
        INT     DOS
        CMP     AL,0
        JNZ     SHORT GOTSOME
        STC
        RET
GOTSOME:
        CALL    NEAR PTR CIN
        CLC
        RET

SCIN    ENDP

;       CIN = GET CHARACTER FROM KEYBOARD
;       EXIT:  CHAR IN AL
;
CIN     PROC    NEAR
        MOV     AH,CON_INPUT_NO_ECHO
        INT     DOS
        RET
CIN     ENDP

;       CLRCO = CLEAR TYPE-AHEAD BUFFER
;
CLRCO   PROC    NEAR
CLRC1:  CALL    SCIN
        JNC     CLRC1
        RET
CLRCO   ENDP

;
;       CRLF = SEND CR + LF TO CONSOLE
;
CRLF    PROC    NEAR
        MOV     AL,CR
        CALL    COUT
        MOV     AL,LF
        CALL    COUT
        RET
CRLF    ENDP

;       ERRORMSG = WRITE MESSAGE TO STD. ERROR OUTPUT
;       ENTRY: DS:DX POINTS TO MSG (ASCIIZ STRING)
;       USES: AX,DX,FLAGS
;
ERRORMSG PROC   NEAR
        PUSH    BX
        PUSH    CX
ERRMSG1: 
	MOV	BX,DX
        MOV     AL,BYTE PTR [BX]
        XCHG    DX,BX
        CMP     AL,0
        JZ      ERRMSG2
        MOV     CX,1
        MOV     AH,WRITE
        MOV     BX,2
        INT     DOS
        INC     DX
        JMP     ERRMSG1
ERRMSG2:
        POP     CX
        POP     BX
        RET
ERRORMSG ENDP

; GETYORN = GET 'Y' OR 'N' RESPONSE FROM CONSOLE
; 	    RETURNS CHAR. ( Y OR N ) IN AX

GETYORN PROC	NEAR
	CALL	CLRCO			;CLEAR TYPE-AHEAD
NOTYN:	CALL	CIN			;GET CONSOLE CHAR.
	CALL	UC			;MAKE UPPER-CASE
	CMP	AL,'Y'
	JE	GOTY
	CMP	AL,'N'
	JNE	NOTYN			;IF NOT Y OR N
GOTY:	PUSH	AX
	CALL	COUT
	CALL	CRLF
	POP	AX
	MOV	AH,0			;IN CASE USER DOES WORD COMPARISON
	RET
GETYORN ENDP

        END
```
{% endraw %}

## CONVERT.ASM

{% raw %}
```
        TITLE   CONVERSION ROUTINES
;	LAST MODIFIED 04-OCT-86
        .XLIST
        INCLUDE ASCII.DEF
        .LIST

	DOSSEG
	.MODEL	SMALL

	.DATA?
TEMPSTOR DB    5 DUP(?)

	.CODE
EXTRN   COUT:NEAR
        PUBLIC BTODEC, DTOBIN, DECOUT

;       BTODEC - CONVERT BINARY TO DECIMAL
;       ENTRY:  (AX) = BINARY WORD
;               (BX) = ADDRESS FOR DECIMAL DIGITS
;       USES:   AX,BX,CX,DX
;
BTODEC  PROC    NEAR
        MOV     CX,10000
BTOD1:
        PUSH    CX
        MOV     DL,"0"
SUBMORE:
        SUB     AX,CX
        INC     DL
        JNB     SUBMORE
        DEC     DL
        ADD     AX,CX
        MOV     [BX],DL
        INC     BX
        POP     CX
        PUSH    AX
        PUSH    BX
        MOV     AX,CX
        MOV     BX,10
        MOV     DX,0
        DIV     BX
        POP     BX
        MOV     CX,AX
        CMP     CX,0
        POP     AX
        JNE     BTOD1
        RET
BTODEC  ENDP

;       DECOUT = OUTPUT DECIMAL NUMBER TO CONSOLE
;       ENTRY:  BX = NUMBER (IN BINARY)
;               CX = FIELD WIDTH
;               AL = CHAR. TO USE INSTEAD OF LEADING "0"
;		(0 TO SUPPRESS LEADING 0'S)
;
DECOUT  PROC    NEAR
        PUSH    AX
        MOV     AX,BX
        MOV     BX,OFFSET TEMPSTOR
        PUSH    CX
        CALL    BTODEC
        POP     CX
        POP     AX
        MOV     BX,OFFSET TEMPSTOR+5
        SUB     BX,CX
        CMP     CX,1
        JLE     SHOWDEC
        DEC     CX
ZEROSUP:
        MOV     DL,[BX+0]
        CMP     DL,"0"
        JNZ     SHORT DONESUP
	AND	AL,AL
	JZ	SUP0
        CALL    COUT
SUP0:
	INC     BX
        LOOP    ZEROSUP
DONESUP:
        INC     CX
SHOWDEC:
        MOV     AL,[BX]
        CALL    COUT
        INC     BX
        LOOP    SHOWDEC
        RET
DECOUT  ENDP

;       DTOBIN = CONVERT DECIMAL TO BINARY
;       ENTRY: BX POINTS TO DECIMAL DIGIT (MSD)
;              CX HOLDS NUMBER OF DIGITS (5 MAX.)
;       EXIT: 'C'=1 IF OVERFLOW OR ILLEGAL CHAR. IN DIGIT STRING
;               AX = RESULT OF CONVERSION
;
DTOBIN  PROC    NEAR
        MOV     DX,0            ;ACCUMULATOR FOR RESULT
DTOB1:  MOV     AL,[BX+0]
        SUB     AL,"0"
        JB      SHORT BADCHAR
        CMP     AL,10
        JGE     SHORT BADCHAR
        PUSH    AX
        INC     BX
        PUSH    BX
        MOV     AX,DX
        MOV     BX,10
        MUL     BX
        POP     BX
        JC      SHORT OVFLOW    ;IF >65535
        MOV     DX,AX
        POP     AX
        MOV     AH,0
        ADD     DX,AX
        LOOP    DTOB1
        MOV     AX,DX
        CLC
        RET
OVFLOW:
BADCHAR:
        STC
        RET
DTOBIN  ENDP

        END
```
{% endraw %}

## FIXPATH.ASM

{% raw %}
```
        TITLE   MSDOS2 PATHNAME PARSER

PATHSIZE EQU    65
        .XLIST
        INCLUDE MSDOS2.DEF
	INCLUDE MACROS.DEF
        .LIST

	DOSSEG
	.MODEL SMALL

	.DATA
SSTARS  DB      '\'
STARS   DB      '*.*',0
DOTS    DB      '..',0
SLASHALONE  DB  '\',0

	.DATA?
CURDIR  DB	PATHSIZE DUP (?)
DRIVE	DB	1 DUP (?)

	.CODE
        EXTRN CPYCNT:NEAR
	EXTRN SKIPSP:NEAR
	EXTRN UC:NEAR
        PUBLIC TYPE_UFN,TYPE_AFN,TYPE_DIR
        PUBLIC TYPE_DSP,TYPE_DRV,TYPE_UNK
        PUBLIC FIXPATH

;       THIS PROCEDURE PARSES A (POSSIBLY AMBIGUOUS) DOS PATH NAME
;       INTO A SEARCH PATH AND A LEAD-IN PATH.  THE SEARCH PATH CAN
;       BE USED AS AN ARGUMENT TO DOS FUNCTIONS 4E AND 4F.  THE
;       LEAD-IN PATH IS INTENDED TO BE PREFIXED TO THE SIMPLE FILENAME
;       RETURNED BY THESE FUNCTIONS, IN ORDER TO PRODUCE A COMPLETE
;       PATH NAME USABLE BY OPEN, RENAME, ETC.
;
;       DS = ES IS ASSUMED.
;
;       MODELLED AFTER THE C FUNCTION fixpath() IN DR. DOBB'S JOURNAL,
;       OCT. 1985, PP. 16-18.
;
;       ENTRY: BX - POINTS TO INPUT PATH
;              CX - POINTS TO SEARCH PATH
;              DX - POINTS TO LEAD-IN PATH
;       EXIT:
;              AX = 0 IF PATH IS AN UNAMBIGUOUS FILE NAME
;                 = 1 IF PATH IS AN AMBIGUOUS FILE NAME (E.G. "FOO?.*")
;                 = 2 IF PATH IS A DIRECTORY SPEC (E.G.: A:\FOO\BAR\")
;                 = 3 IF PATH IS A DRIVE SPEC (E.G. "A:") OR NULL STRING
;                 = 4 IF PATH IS A DIRECTORY
;                 = 5 IF PATH TYPE UNKNOWN OR DOES NOT EXIST
;
;       USES:  SI,DI,FLAGS
;
TYPE_UFN EQU    0
TYPE_AFN EQU    1
TYPE_DRV EQU    2
TYPE_DSP EQU    3
TYPE_DIR EQU    4
TYPE_UNK EQU    5

COPYPATH PROC   NEAR
        PUSH    CX
        MOV     CX,PATHSIZE
        CALL    CPYCNT
        POP     CX
	RET
COPYPATH ENDP

FIXPATH PROC    NEAR
	CALL	SKIPSP
        JB      DRVSPEC                 ;IF NULL STRING
	MOV	BYTE PTR DRIVE, 0	;SET DRIVE TO DEFAULT
        CMP     BYTE PTR [BX+1],':'     ;CHECK FOR DRIVE SPEC
        JNE     NODSPEC                 ;IF NONE
	MOV	AL, BYTE PTR [BX]	;GET DRIVE LETTER
	CALL	UC			;MAKE UPPER-CASE
	SUB	AL, 'A'-1		;MAKE BINARY
	MOV	BYTE PTR DRIVE, AL	;SAVE IT
        CMP     BYTE PTR [BX+2],0       ;CHECK FOR ONLY DRIVE SPEC
        JE      DRVSPEC                 ;IF THAT'S WHAT IT IS
NODSPEC:
        MOV     DI,BX
	PUSH	CX
	MOV	CX,PATHSIZE
	XOR	AX,AX
	REPNE	SCASB			;SEARCH FOR 0 BYTE
	JCXZ	TOOLONG			;IF PATH TOO LONG
GOTEND:
	SUB	DI,2			;POINT TO LAST CHAR.
	POP	CX
        MOV     AL,[DI]                 ;GET LAST CHAR.
        CMP     AL,'\'                  ;IS IT BACKSLASH?
        JNE     FIXPATH2                ;NO.
        MOV     AX,TYPE_DSP
        JMP     SHORT DIRSPEC           ;YES, IT IS, ASSUME (*.*)
TOOLONG:
	POP	CX
	MOV	AX,TYPE_UNK		;IF PATH TOO LONG
	RET
DRVSPEC:
        MOV     AX,TYPE_DRV
DIRSPEC:
        PUSH    AX                      ;SAVE PATH TYPE
        MOV     SI,BX
        MOV     DI,DX
        CALL    COPYPATH                ;COPY INPUT TO LEAD-IN PATH
        MOV     SI,BX
        MOV     DI,CX
        CALL    COPYPATH                ;COPY INPUT TO SEARCH PATH
        DEC     DI                      ;BACK UP OVER NULL
        MOV     SI,OFFSET STARS
        CALL    COPYPATH                ;NOW ADD "*.*" TO SEARCH PATH
        POP     AX                      ;RETURN PATH TYPE
        RET
FIXPATH2:
	MOV	SI, OFFSET DOTS
	MOV	DI, BX
	COMP_STRINGS			;SEE IF NAME = ".."
	JNE	NOTUPDIR
;	.. is special case because CHMOD may not return its attribute
;	correctly
	PUSH	DX
	DOSCALL CURRENT_DISK		;GET CURRENT DISK
	PUSH	AX			;SAVE IT
	MOV	SI,OFFSET CURDIR
	MOV	BYTE PTR [SI],0		;CLEAR DIRECTORY BUFFER
	MOV	DL, BYTE PTR DRIVE
	DOSCALL	CURRENT_DIR		;GET CURRENT DIRECTORY 
	POP	DX
	DOSCALL	SELECT_DISK		;RESTORE CURRENT DISK
	POP	DX
	CMP	BYTE PTR CURDIR, 0	;ROOT DIRECTORY?
	JNE	FIXPATH4		;IF NOT ROOT DIRECTORY
	MOV	AX, TYPE_UNK		;.. AT ROOT, ERROR
	JMP	FIXPATH3
NOTUPDIR:
        PUSH    CX
        PUSH    DX
        MOV     DX,BX
        MOV     CX,0
        MOV     AL,0
        DOSCALL CHMOD                   ;GET ATTRIBUTES FROM PATH
        POP     DX
        JC      BADNAME                 ;IF ERROR
        TEST    CX,0010H                ;IS IT A DIRECTORY?
        POP     CX
        MOV     AX,TYPE_UFN             ;SIGNAL UFN, JUST IN CASE
        JZ      FIXPATH3                ;IF NOT DIRECTORY, IS UFN
        JMP     SHORT FIXPATH4          ;IF DIRECTORY
BADNAME:
        POP     CX
        CMP     AX,3                    ;IF ERROR CODE 3,
        JZ      TESTWILD                ;MIGHT BE VALID (BUT AMBIGUOUS) PATH NAME
        MOV     AX,TYPE_UNK             ;SET TYPE =UNKNOWN
        JMP     SHORT FIXPATH3          ;WEIRD ERROR CODE, TREAT PATH AS A UFN
TESTWILD:                               ;CAN'T GET ATTRIBUTES, SEE IF
        PUSH    BX                      ;PATH INCLUDES WILDCARDS
WLOOP:  MOV     AL,[BX]
        CMP     AL,0
        JE      NOTWILD
        CMP     AL,'*'
        JE      WILD
        CMP     AL,'?'
        JE      WILD
        INC     BX
        JMP     WLOOP
WILD:   POP     BX                      ;FOUND WILD CARD,
        MOV     AX,TYPE_AFN             ;SET PATH TYPE = AFN
        JMP     SHORT FIXPATH3
NOTWILD:
        POP     BX                      ;NO WILD CARD FOUND,
        MOV     AX,TYPE_UNK             ;SET PATH TYPE UNKNOWN
FIXPATH3:                               ;COME HERE IF PATH IS AFN, UFN OR UNKNOWN
        PUSH    AX
        PUSH    DX
        PUSH    BX
        MOV     SI,BX
        MOV     DI,CX
        PUSH    CX
        CALL    COPYPATH                ;MAKE SEARCH PATH=INPUT PATH
        POP     DX                      ;DX = START OF PATH
        MOV     BX,DI                   ;BX = END OF PATH (1 PAST NULL)
        DEC     BX
SRCLUP: 
	CMP     BX,DX                   ;BEFORE START OF PATH?
        JL      RETAIN                  ;YUP.
        MOV     AL,[BX]                 ;GET A CHAR. FROM PATH
        CMP     AL,'\'                  ;IS IT BACKSLASH OR COLON?
        JE      RETAIN
        CMP     AL,':'
        JE      RETAIN
        DEC     BX                      ;NO, BACK UP 1
        JMP     SRCLUP                  ;KEEP SEARCHING
RETAIN: INC     BX
        MOV     [BX],BYTE PTR 0         ;ZAP WHATEVER IS AFTER ':' OR '\'
        POP     BX
        POP     DX
        MOV     SI,CX
        MOV     DI,DX
        CALL    COPYPATH                ;COPY SEARCH PATH TO LEAD-IN PATH
        MOV     SI,BX
        MOV     DI,CX
        CALL    COPYPATH                ;WHOLE INPUT FOR SEARCH
        POP     AX                      ;RESTORE TYPE
        RET
FIXPATH4:                               ;COME HERE IF PATH IS A DIRECTORY
        MOV     SI,BX
        MOV     DI,CX
        CALL    COPYPATH                ;COPY INPUT TO SEARCH PATH
        DEC     DI                      ;BACK UP OVER NULL
        MOV     SI,OFFSET SSTARS   	;POINT TO "\*.*"
        CALL    COPYPATH                ;ADD TO SEARCH PATH
        MOV     SI,BX
        MOV     DI,DX
        CALL    COPYPATH                ;COPY INPUT TO LEAD-IN PATH
        DEC     DI                      ;BACK UP OVER NULL
        MOV     SI,OFFSET SLASHALONE    ;POINT TO "\"
        CALL    COPYPATH                ;ADD TO LEAD-IN PATH
        MOV     AX,TYPE_DIR             ;SIGNAL DIRECTORY
        RET
FIXPATH ENDP

        END
```
{% endraw %}

## GETARGS.ASM

{% raw %}
```
        TITLE   COMMAND LINE ARGUMENT PARSER

	.XLIST
	INCLUDE	MACROS.DEF
	INCLUDE ASCII.DEF
	.LIST

	DOSSEG
	.MODEL	SMALL
	.CODE
        EXTRN SKIPSP:NEAR
        PUBLIC GETARGS
;
;	COLLECT ARGUMENTS FROM COMMAND LINE
;
;	ENTRY:	DS:BX POINTS TO COMMAND LINE
;		ES:SI POINTS TO SPACE FOR ARGUMENT POINTERS
;		ES:DI POINTS TO BUFFER FOR ARGUMENTS
;		CX = MAX. # OF ARGUMENTS
;
;	EXIT:	CX = ACTUAL # OF ARGUMENTS
;		'C'=1 IF TOO MANY ARGS
;
GETARGS PROC NEAR
        MOV     DX,0                    ;DX COUNTS # OF ARGUMENTS
TOP:
	CALL	SKIPSP
	JB	ENDLINE			;IF END OF LINE
SAVEARG:
        INC     DX                      ;BUMP ARGUMENT COUNT
        CMP     DX,CX
        JG      TOOMANY                 ;IF TOO MANY ARGS
	MOV	AX,DI
        MOV     WORD PTR ES:[SI],AX     ;SAVE POINTER TO ARG
        ADD     SI,2                    ;ADVANCE TO NEXT TABLE ENTRY
CNTARGS:
        MOV     AL,BYTE PTR DS:[BX]     ;GET CHAR. FROM COMMAND LINE
        CMP     AL,0
        JE      ENDLINE                 ;IF END OF LINE
        COMPLIST <SPACE,TAB>,NEXTARG    ;SEE IF SPACE OR TAB
	MOV	BYTE PTR ES:[DI],AL	;NOT DELIM, STORE ARG. TEXT
	INC	DI
        INC     BX
        JMP     CNTARGS                 ;LOOP TILL DELIMITER FOUND
NEXTARG:
	MOV	BYTE PTR ES:[DI],0	;0-TERMINATE ARG
	INC	DI
	JMP	TOP			;BACK TO TOP OF LOOP
ENDLINE:
	MOV	BYTE PTR ES:[DI],0	;END ARG. W. 0
	MOV	CX,DX			;MOVE ARG COUNT TO CX
	CLC				;CLEAR CARRY TO SIGNAL NO ERROR
	RET
TOOMANY:
	MOV	CX,DX			;MOVE ARG COUNT TO CX
	STC				;TOO MANY ARGUMENTS, SET CARRY
	RET
GETARGS ENDP

	END

```
{% endraw %}

## PRINTDD.ASM

{% raw %}
```
        SUBTTL  PRINTDD - PRINT A DOUBLE WORD IN DI:SI
	PAGE
;       This is a modified version of a routine from SDIR Version
;       2.4, by Ted Reuss (modified from a program by John Chapman), on
;       PC-SIG Volume 185.

        .XLIST
        INCLUDE ASCII.DEF
        INCLUDE MSDOS2.DEF
        .LIST

	DOSSEG
	.MODEL	SMALL

	.DATA
LDZERO  DB      1 DUP (?)
DOUBLE  DB      8 DUP (20H)
        DB      '$'
DBLCNT  DW      1 DUP (?)

	.CODE
PUBLIC  PRINTDD

PRINTDD PROC    NEAR            ;Prints a 32 bit integer in DI:SI
                                ;AL = 0 to suppress leading 0's
				;   = "0" (60Q) to print leading 0's
				;   = " " (20Q) to print leading spaces
        MOV     BYTE PTR LDZERO,AL
	MOV	BX,OFFSET DOUBLE
	MOV	CX,8
FILL:	MOV	BYTE PTR [BX],SPACE  ;FILL BUFFER WITH SPACES
	INC	BX
	LOOP	FILL
        CALL    PRINTDX         ;format the double word into DOUBLE     2.4
        MOV     DX,OFFSET DOUBLE
        MOV     BX,DX
        MOV     CX,7            ;SUPPRESS LEADING 0'S
SUPP0:  CMP	BYTE PTR [BX],SPACE
        JNE     SPDONE
        MOV     AL,BYTE PTR LDZERO
	AND	AL,AL
	JNZ	SUPP2
	INC	DX
SUPP1:
        MOV     [BX],AL
SUPP2:
        INC     BX
        LOOP    SUPP0
SPDONE:
        MOV     AH,CON_STRING_OUTPUT
        INT     DOS             ;print the digits                       2.4
        RET                     ;and return                             2.4
PRINTDD ENDP                    ;                                       2.4

PRINTDX PROC    NEAR            ;converts integer in DI:SI to decimal   2.4
        MOV     WORD PTR DBLCNT,0   ;reset the offset for DOUBLE   2.4
        XOR     AX,AX           ;Zero out the                           2.4
        MOV     BX,AX           ; working
        MOV     BP,AX           ; registers.
        MOV     CX,32           ;# bits of precision
J1:     SHL     SI,1
        RCL     DI,1
        XCHG    BP,AX
        CALL    J6
        XCHG    BP,AX
        XCHG    BX,AX
        CALL    J6
        XCHG    BX,AX
        ADC     AL,0
        LOOP    J1
        MOV     CX,1710H        ;5904 ?
        MOV     AX,BX
        CALL    J2
        MOV     AX,BP
J2:     PUSH    AX
        MOV     DL,AH
        CALL    J3
        POP     DX
J3:     MOV     DH,DL
        SHR     DL,1            ;Move high
        SHR     DL,1            ; nibble to
        SHR     DL,1            ; the low
        SHR     DL,1            ; position.
        CALL    J4
        MOV     DL,DH
J4:     AND     DL,0FH          ;Mask low nibble
        JZ      J5              ;If not zero
        MOV     CL,0
J5:     DEC     CH
        AND     CL,CH
        OR      DL,'0'          ;Fold in ASCII zero
        SUB     DL,CL
        PUSH    DI              ;save DI                                2.4
        MOV     DI,OFFSET DOUBLE ;point to DOUBLE                  2.4
        ADD     DI,WORD PTR DBLCNT  ;add current offset            2.4
        INC     WORD PTR DBLCNT  ;bump offset for next time        2.4
        MOV     BYTE PTR DS:[DI],DL ;move next digit to DOUBLE          2.4
        POP     DI              ;restore DI                             2.4
        RET                     ;Exit to caller
PRINTDX ENDP                    ;                                       2.4

J6      PROC    NEAR
        ADC     AL,AL
        DAA
        XCHG    AL,AH
        ADC     AL,AL
        DAA
        XCHG    AL,AH
        RET
J6      ENDP

        END

```
{% endraw %}

## UNLINK2.ASM

{% raw %}
```
	INCLUDE	MSDOS2.DEF

	DOSSEG
	.MODEL	SMALL
	.CODE
	PUBLIC	UNLINK2

;	UNLINK2 = DELETE FILE EVEN IF WRITE-PROTECTED
;	ENTRY:	DS:DX POINTS TO FILE NAME
;	EXIT:	'C'=1 IF ERROR
;
UNLINK2 PROC	NEAR
	PUSH	DX
	MOV	AH,UNLINK
	INT	DOS			;TRY TO DELETE FILE
	POP	DX
	JNB	UNLEND			;IF OK
        MOV     AL,1                    ;PREPARE TO CHANGE ATTRIBUTES
        MOV     CX,0                    ;NEW ATTRIBUTES = 0
        MOV     AH,CHMOD
	PUSH	DX
        INT     DOS                     ;MAKE FILE R/W
	POP	DX
	JB	UNLEND
	MOV	AH,UNLINK
	INT	DOS			;NOW TRY TO REMOVE IT AGAIN
UNLEND: RET
UNLINK2	ENDP

	END


```
{% endraw %}

## UTIL.ASM

{% raw %}
```
        TITLE   GENERAL-PURPOSE MSDOS UTILITIES
        .XLIST
        INCLUDE ASCII.DEF
        .LIST

	DOSSEG
	.MODEL	SMALL
	.CODE
EXTRN   COUT:NEAR
        PUBLIC UC,UCSTR,SKIPSP,CPY,CPYCNT,TYPTX,FILL,ZERO
        PUBLIC CMDSRC

;       COMMON ASSEMBLY-LANGUAGE UTILITY ROUTINES

;       UC = CONVERT CHARACTER IN AL TO UPPER-CASE
;
UC      PROC    NEAR
        CMP     AL,'a'
        JC      SHORT UC1
        CMP     AL,'z'+1
        JNC     SHORT UC1
        SUB     AL,'a'-'A'
UC1:    RET
UC      ENDP

;       UCSTR = CONVERT A LINE (0-TERMINATED) TO UPPER-CASE
;
;       ENTRY:  DS:BX POINTS TO THE LINE
;       EXIT:   LINE CONVERTED, BX IS UNCHANGED
;       USES:   AL,FLAGS
;
UCSTR   PROC    NEAR
        PUSH    BX
UCSTR0: MOV     AL,BYTE PTR [BX]
        CALL    UC
        MOV     BYTE PTR [BX],AL
        INC     BX
        CMP     AL,0
        JNE     UCSTR0
        POP     BX
        RET
UCSTR   ENDP

;       SKIPSP = SKIP OVER BLANKS AND TABS
;       ENTRY:  [BX] POINTS TO CHAR. STRING
;       EXIT:   [BX] POINTS TO 1ST NON-BLANK CHAR., OR NULL
;               AL = 1ST NON-BLANK CHAR.
;               'C' FLAG SET IF AL=NULL.
;
SKIPSP  PROC    NEAR
        JMP     SHORT SKIPS1
SKIPS0: INC     BX
SKIPS1: MOV     AL,BYTE PTR [BX]
        CMP     AL,SPACE
        JE      SKIPS0
        CMP     AL,TAB
        JE      SKIPS0
        CMP     AL,0
        JE      SKIPS2
        CLC                     ;CLEAR CARRY
        RET
SKIPS2: STC
        RET
SKIPSP  ENDP

;       CPY = COPY CX BYTES FROM (SI) TO (DI)
;
CPY     PROC    NEAR
        CLD
        REP     MOVSB
        RET
CPY     ENDP

;       CPYCNT = COPY FROM (DS:SI) TO (ES:DI) UNTIL 0 BYTE TRANSFERRED
;       TRANSFERS CX BYTES MAXIMUM
;
CPYCNT  PROC    NEAR
        CLD
CPYC0:  LODSB
        STOSB
        CMP     AL,0
        JE      SHORT CPYC1
        LOOP    CPYC0
CPYC1:
        RET
CPYCNT  ENDP

;       ZERO = CLEAR MEMORY (CX BYTES, STARTING AT ES:DI)
;
ZERO    PROC    NEAR
        MOV     AL,0

;       FILL = FILL MEMORY (CX BYTES, STARTING AT ES:DI) WITH AL
;
FILL:   CLD
        REP     STOSB
        RET 
ZERO    ENDP

;       TYPTX = TYPE TEXT IN LINE
;       LAST CHAR. HAS BIT [7] SET
;
TYPTX   PROC    NEAR
        PUSH    BP              ;SAVE REGISTERS
        PUSH    BX
        MOV     BP,SP
        MOV     BX,[BP+4]       ;GET OFFSET OF DATA
        DEC     BX              ;COMPENSATE FOR NEXT INC
TYPTX1: INC     BX              ;BUMP POINTER
        MOV     AL,BYTE PTR CS:[BX]      ;FETCH A CHAR.
        AND     AL,7FH          ;STRIP HI BIT
        CALL    COUT            ;PRINT IT
        CMP     AL,BYTE PTR CS:[BX]      ;SEE IF HI BIT WAS SET
        JE      TYPTX1          ;IF NOT, KEEP GOING
        INC     BX              ;POINT 1 PAST END OF STRING
        MOV     [BP+4],BX       ;FIX OFFSET IN RETURN LINK
        POP     BX
        POP     BP              ;RESTORE REGISTERS
        RET
TYPTX   ENDP

;       CMDSRC = SEARCH FOR COMMAND IN LIST
;       ENTRY:  AL = COMMAND LETTER
;               BX POINTS TO LIST (0 BYTE ENDS IT)
;       EXIT:   AL = NUMBER OF COMMAND IN LIST, IF FOUND
;               AL = 0 IF NO MATCH
;
CMDSRC  PROC    NEAR
        PUSH    CX
        MOV     CL,0
        MOV     CH,AL
CMDSR1: MOV     AL,BYTE PTR [BX]
        CMP     AL,0
        JE      SHORT NOMATCH
        CMP     AL,CH
        PUSHF
        INC     BX
        INC     CL
        POPF
        JNZ     CMDSR1
        MOV     AL,CL
NOMATCH:
        POP     CX
        RET
CMDSRC  ENDP

        END
```
{% endraw %}

## CP.ASM

{% raw %}
```
        TITLE CP - MSDOS FILE COPY UTILITY
        PAGE 55,132
;***************************************************************************
;       THIS PROGRAM COPIES ONE OR MORE FILES, OR THE CONTENTS OF A WHOLE
;       DIRECTORY, TO ANOTHER DISK, FILE OR DIRECTORY.
;
;       USAGE (afn = ambiguous file name, ufn = unambiguous file name,
;              dir = directory):
;
;               CP ufn1 ufn2    - copies ufn1 to unf2
;
;               CP afn1 afn2 ... dir  - copies one or more files into dir.
;
;               CP -R dir1 dir2  - if dir2 doesn't exist, creates it and
;                                 copies dir1 to dir2.
;
;                               - if dir2 exists, creates dir2\dir1 and
;                                 copies dir1 to it.
;
;       SWITCHES (OPTIONAL):
;
;		CP -I  prompt before overwriting file
;
;		CP -R  allow recursive copying of directories.
;
;               CP -V  turns on "verbose" mode (shows name of each file as it
;                      is copied).
;***************************************************************************
;   TO BUILD CP.EXE:
;	MASM CP,CP,NUL,NUL
;	LINK CP,CP,NUL,ASM
;	EXEPACK CP.EXE CP.NEW
;	DEL CP.EXE
;	REN CP.NEW=CP.EXE
;***************************************************************************
;       BY: JON DART
;           3012 HAWTHORN ST.,
;           SAN DIEGO, CA 92104
;***************************************************************************
;	Version 3.3, 30-Mar-89 copies with root directory as destination
;				now handled correctly.  Also a bug fix in
;				procedure SETUP_SRC_DIR.
;	Version 3.2, 19-Jan-89 another fix to FIXPATH; relinked.
;	Version 3.1, 17-Oct-88 fix similar to one in MV: CP *.* FOO gives
;			       an error unless FOO is a directory.
;	Version 3.0, 24-Sep-88 bug fix in FIXPATH; relinked. version made
;			       consistent with MV.
;	Version 1.7, 09-Feb-88 assembles under MASM 5.0
;	Version 1.6, 28-Nov-86 fixes bug involving relative directory moves
;				(e.g. mv -r ..\foo .)
;	Version 1.5, 24-Oct-86 switch parser now accepts -rvi as well as 
;			       -r -v -i
;	Version 1.4, 06-Jul-86 changes to memory alloc., allows hyphen for
;				switches, now assembles under masm 4.0
;	Version 1.3, 30-Jun-86 minor cleanup, adds i and r switches, removes
;				c switch
;       Version 1.2, 26-Apr-86 doesn't exit after user types n to overwrite
;			        msg
;       Version 1.1, 31-Mar-86 bug fixes
;       Version 1.0, 30-Mar-86 modified from MV v. 1.7
;***************************************************************************

	DOSSEG
	.MODEL	SMALL

PATHSIZE EQU    65                      ;MAX. SIZE OF DOS PATHNAME, +1
BUFSIZE EQU     32*1024                 ;SIZE OF COPY BUFFER
MAXLEVEL EQU    12                      ;MAX NESTING LEVEL FOR DIRECTORIES
MAXARGS EQU     40                      ;MAXIMUM # OF COMMAND LINE ARGUMENTS
TRUE    EQU     0FFH
FALSE   EQU     0
CONFIRM EQU     FALSE                   ;"CONFIRM BEFORE OVERWRITE" OPTION (DEFAULT VALUE)
RECURSE EQU	FALSE			;"RECURSIVE" DEFAULT
VERBOSE EQU     FALSE                   ;"VERBOSE" OPTION (DEFAULT VALUE)
M       EQU     BYTE PTR 0[BX]
BIT$DIR EQU     00010000B               ;BIT IN ATTRIBUTE FOR DIRECTORY
BIT$RO  EQU     00000001B               ;BIT IN ATTRIBUTE FOR WRITE-PROTECT

        .XLIST
        INCLUDE ASCII.DEF
        INCLUDE MSDOS2.DEF
	INCLUDE MACROS.DEF

ADDR    MACRO   REG,OFFST	        ;COMPUTE ADDRESS OFFSET FROM BASE REGISTER (BX)
	MOV	REG,BX
	ADD	REG,OFFST
        ENDM

ERROR   MACRO   ERRNUM                  ;SHOW ERROR MESSAGE
        MOV     DX,OFFSET DGROUP:MSG&ERRNUM
	CALL	PRTERR
	ENDM

COPYPATH MACRO  SOURCE,DEST             ;COPY PATHNAME FROM SOURCE TO DEST
        ADDR    SI,SOURCE
        ADDR    DI,DEST
        MOV     CX,PATHSIZE
        CALL    CPYCNT
        ENDM

        .LIST

MVINFO  STRUC
NEWDIR  DW      1 DUP (?)               ;FLAG, =1 IF NEW DIRECTORY CREATED
SRCTYPE DB     2 DUP (?)                ;TYPE OF SOURCE (0 IF UFN)
DESTTYPE DB    2 DUP (?)                ;TYPE OF DEST (0 IF UFN)
ARG1    DB      PATHSIZE DUP (?)        ;FIRST ARGUMENT (SOURCE)
ARG2    DB      PATHSIZE DUP (?)        ;SECOND ARGUMENT (DEST)
ARG2A   DB      PATHSIZE DUP (?)        ;SOURCE PREFIX + DEST
SSPATH  DB      PATHSIZE DUP (?)        ;SOURCE SEARCH PATH
SPREFIX DB      PATHSIZE DUP (?)        ;SOURCE LEAD-IN PATH
DSPATH  DB      PATHSIZE DUP (?)        ;DEST SEARCH PATH
                                        ;(USED ONLY AS SCRATCH AREA)
DPREFIX DB      PATHSIZE DUP (?)        ;DEST LEAD-IN PATH
SRCNAME DB      PATHSIZE DUP (?)        ;UNAMBIGUOUS SOURCE NAME
DESTNAME DB     PATHSIZE DUP (?)        ;UNAMBIG. DEST NAME
DTA     DB      128 DUP (?)             ;DTA FOR SEARCH FN.
MVINFO  ENDS
MVSTRUCSIZE EQU 9*PATHSIZE+135          ;SIZE OF STRUCTURE

	.DATA
;       INITIALIZED DATA STORAGE:
;
MSG1    DB 'CP Version 3.3 by Jon Dart (30-Mar-89)',CR,LF,CR,LF
        DB 'USAGE (afn = ambiguous file name, ufn = unambiguous file name,'
        DB CR,LF
        DB '       dir = directory):',CR,LF,CR,LF
        DB 'CP ufn1 ufn2          copies ufn1 to ufn2.',CR,LF,CR,LF
        DB 'CP afn1 afn2 ... dir  copies one or more files into dir.',CR,LF
        DB CR,LF
        DB "CP -R dir1 dir2       if dir2 doesn't exist, creates it and copies"
        DB CR,LF
        DB '                      all files from dir1 to dir2.',CR,LF,CR,LF
        DB "                      if dir2 exists, creates dir2\dir1 and copies"
        DB CR,LF
        DB '                      all files from dir1 into it.',CR,LF,CR,LF
        DB 'SWITCHES (OPTIONAL):',CR,LF,CR,LF
	DB '-I   prompt before overwriting files.',CR,LF,CR,LF
	DB '-R   allow recursive copying of directories.',CR,LF,CR,LF
        DB '-V   echo file names as they are copied.',CR,LF
        DB 0
MSG2    DB      ': file not found.',CR,LF,0
MSG3    DB      'Source and dest are incompatible.',CR,LF,0
MSG4    DB      ' exists. Overwrite [Y or N]? ',0
MSG5    DB      ': open failed.',CR,LF,0
MSG6    DB      ': file is R/O. Are you SURE [Y or N]? ',0
MSG7	DB	': directory.',CR,LF,0
MSG8    DB      ': write error.',CR,LF,0
MSG9    DB      ': read error.',CR,LF,0
MSG10   DB      ': write error (probably disk full).',CR,LF,0
MSG11   DB      ': rename failed.',CR,LF,0
MSG12   DB      ": can't create.",CR,LF,0
MSG13   DB      ": can't remove.",CR,LF,0
MSG14   DB      "Directories nested too deep.",CR,LF,0
; MSG15   DB      "Insufficient memory for buffers.",CR,LF,0
MSG16   DB      ": Illegal switch.",CR,LF,0
MSG17   DB      "Error: source and dest are identical.",CR,LF,0
MSG18   DB      "Too many arguments.",CR,LF,0
SWLIST	DB	'IRV',0		;LIST OF VALID SWITCHES

	.STACK
        DB      512 DUP (?)

;       UNITIALIZED VARIABLES AND BUFFER AREAS

	.DATA?
RBASE   DW 	1 DUP (?)               ;POINTER TO MVSTRUC IN RSTACK
LEVEL   DW      1 DUP (?)               ;RECURSION LEVEL
SRCDRIVE  DW    1 DUP (?)               ;SOURCE DRIVE (0 = DEFAULT)
DESTDRIVE  DW   1 DUP (?)               ;DEST DRIVE (0 = DEFAULT)
INHANDLE DW	1 DUP (?)               ;INPUT FILE HANDLE
OUTHANDLE DW	1 DUP (?)               ;OUTPUT FILE HANDLE
IFLAG   DW	1 DUP (?)               ;CONFIRM FLAG
RFLAG	DW	1 DUP (?)		;RECURSIVE FLAG
VFLAG   DW	1 DUP (?)               ;VERBOSE FLAG
CMDTAIL DB	128 DUP (?)             ;STORAGE FOR COMMAND TAIL
DEST_DTA DB     128 DUP (?)             ;HOLDS INFO ON DEST, RETURNED FROM DOS
                                        ;FN 4E.
NUMARGS DW      1 DUP (?)               ;NUMBER OF ARGUMENTS ON COMMAND LINE
ARGPTRS DW      MAXARGS DUP (?)         ;POINTERS TO START OF ARGUMENTS
BUFFER  DB      BUFSIZE DUP (?)         ;FILE XFER BUFFER
RSTACK  MVINFO  MAXLEVEL DUP (<>)	;RECURSION STACK

        PAGE +

	.CODE

EXTRN   CPYCNT:NEAR,UC:NEAR,UCSTR:NEAR,CRLF:NEAR
EXTRN   ERRORMSG:NEAR,COUT:NEAR,CIN:NEAR,CLRCO:NEAR
EXTRN   SKIPSP:NEAR,TYPTX:NEAR,ERRORMSG:NEAR,CLRCO:NEAR
EXTRN   CMDSRC:NEAR,FIXPATH:NEAR,TYPE_DIR:ABS,TYPE_AFN:ABS
EXTRN   TYPE_UFN:ABS,TYPE_DSP:ABS,TYPE_DRV:ABS,TYPE_UNK:ABS
EXTRN   GETYORN:NEAR,UNLINK2:NEAR

;**********************
; PROGRAM ENTRY POINT *
;**********************
ENTRY:
        TEST_DOS2                       ;TEST FOR DOS 2.0, EXIT IF DOS 1
	MOV	AX,DGROUP
	MOV	ES,AX
        MOV     BX,(80H)      		;POINT TO BYTE COUNT FOR COMMAND LINE
        CMP     [BX],BYTE PTR 0
        JE      USEMSG                  ;IF NO COMMAND TAIL
        PUSH    BX
        MOV     DL,[BX]			;LOAD BYTE COUNT IN DX
        MOV     DH,0
        ADD     BX,DX
        INC     BX
        MOV     [BX],BYTE PTR 0         ;PUT 0 BYTE AT END OF COMMAND LINE
        POP     BX
        INC     BX
        CALL    SKIPSP                  ;SKIP LEADING SPACES
        JNC     L_2                     ;IF SOMETHING ON LINE
USEMSG: ERROR   1
	MOV	AL,1			;SET ERROR CODE
        JMP     EXIT2
L_2:
        MOV     SI,BX
        MOV     DI,OFFSET ES:CMDTAIL
        MOV     CX,128
        CALL    CPYCNT                  ;SAVE COMMAND TAIL
        MOV     AX,ES
        MOV     DS,AX                   ;SET DATA SEG TO VARIABLE AREA
        MOV     BYTE PTR DS:IFLAG,CONFIRM  ;SET CONFIRM FLAG DEFAULT
        MOV     BYTE PTR DS:VFLAG,VERBOSE  ;SET VERBOSE FLAG DEFAULT
	MOV	BYTE PTR DS:RFLAG,RECURSE  ;SET RECURSIVE FLAG DEFAULT
	MOV	WORD PTR DS:LEVEL,0	;ZERO RECURSION LEVEL
        MOV     BYTE PTR DS:SRCDRIVE,0  ;SET SOURCE DRIVE DEFAULT
        MOV     BYTE PTR DS:DESTDRIVE,0 ;SET DEST DRIVE DEFAULT
;***************************
; COLLECT SWITCHES, IF ANY *
;***************************
        MOV     BX,OFFSET CMDTAIL       ;POINT TO COMMAND TAIL
        CALL    UCSTR                   ;MAKE UPPER-CASE
NEXTSW:
        CALL    SKIPSP
        JB      USEMSG                  ;IF NOTHING ON LINE BESIDES SWITCHES
        CMP     BYTE PTR [BX],'/'       ;SWITCH SPECIFIED?
        JE      GOTSW			;YES.
	CMP	BYTE PTR [BX],'-'	;CHECK FOR HYPHEN, TOO
	JNE	NOSWITCH
GOTSW:
        INC     BX                      ;SKIP OVER SWITCH CHARACTER
        CALL    SKIPSP                  ;SKIP LEADING BLANKS
        JB      USEMSG                  ;IF NOTHING
SWLOOP:
	PUSH	BX
	MOV	BX,OFFSET SWLIST
	CALL	CMDSRC			;SEARCH LIST OF VALID SWITCHES
	POP	BX
	MOV	AH,0
	ADD	AX,AX			;NOT FOUND IN LIST?
	JZ	BADSWITCH		;NO.
	MOV	SI,OFFSET IFLAG - 2
	ADD	SI,AX			;POINT TO FLAG
	NOT	BYTE PTR [SI]		;1'S COMPLEMENT
	INC	BX
	MOV	AL,BYTE PTR [BX]	;GET NEXT CHAR. FROM LINE
	CMP	AL,SPACE
	JE	NEXTSW			;IF SPACE, LOOK FOR - OR FILENAME
	CMP	AL,TAB
	JE	NEXTSW			;IF TAB, LOOK FOR - OR FILENAME
	JMP	SWLOOP			;ELSE ASSUME THIS IS A SWITCH CHAR.
BADSWITCH:
	MOV	AL,BYTE PTR [BX]
        CALL    COUT                    ;DISPLAY BAD CHAR.
        ERROR   16                      ;ILLEGAL SWITCH
	MOV	AL,16			;SET ERROR CODE
        JMP     EXIT2
;************************************************************
; SCAN THE COMMAND LINE AND STORE POINTERS TO ALL ARGUMENTS *
;************************************************************
NOSWITCH:
        MOV     CX,0                    ;CX COUNTS # OF ARGUMENTS
        MOV     SI,OFFSET DS:ARGPTRS    ;POINT TO ARG POINTER TABLE
SAVEARG:
        INC     CX                      ;BUMP ARGUMENT COUNT
        CMP     CX,MAXARGS
        JG      TOOMANY                 ;IF TOO MANY
        MOV     DS:[SI],BX              ;SAVE POINTER TO ARG
        ADD     SI,2                    ;ADVANCE TO NEXT TABLE ENTRY
CNTARGS:
        MOV     AL,DS:[BX]              ;GET CHAR. FROM COMMAND LINE
        CMP     AL,0
        JE      ENDLINE                 ;IF END OF LINE
        COMPLIST <SPACE,TAB>,NEXTARG    ;SEE IF SPACE OR TAB
        INC     BX
        JMP     CNTARGS                 ;LOOP TILL DELIMITER FOUND
NEXTARG:
        CALL    SKIPSP                  ;SKIP SPACES AND TABS
        JNB     SAVEARG                 ;IF NOT EOL, BACK TO TOP OF LOOP
ENDLINE:
        CMP     CX,0                    ;CHECK ARGUMENT COUNT
        JE      NOARGS                  ;IF NO ARGS
        CMP     CX,1
        JG      ARGSOK                  ;IF >=2 ARGS
        MOV     DS:[SI],BX              ;EXACTLY ONE ARGUMENT, SO
        INC     CX                      ;MAKE A DUMMY (NULL) 2ND ARGUMENT
        JMP     SHORT ARGSOK
NOARGS:
        JMP     USEMSG                  ;ELSE USE MESSAGE
TOOMANY:
        ERROR   18                      ;TOO MANY ARGUMENTS (PRETTY UNLIKELY)
	MOV	AL,18			;SET ERROR CODE
        JMP     EXIT2
;************************************
;* COLLECT THE DESTINATION PATHNAME *
;************************************
ARGSOK: MOV     WORD PTR NUMARGS,CX  	;SAVE NUMBER OF ARGUMENTS
        DEC     CX                      ;NUMBER OF ARGS - 1
        ADD     CX,CX                   ;TIMES TWO
        MOV     SI,OFFSET ARGPTRS
        ADD     SI,CX                   ;POINT TO ADDR. OF LAST ARGUMENT (DEST)
        MOV     BX,DS:[SI]              ;PUT ADDR. INTO BX
        MOV     DI,OFFSET RSTACK.ARG2  	;POINT TO STORAGE FOR DEST
        MOV     AL,[BX+1]
        CMP     AL,':'                  ;CHECK FOR DEST DRIVE SPEC
        JNE     GETLAST                 ;IF NONE
        MOV     AL,[BX]                 ;DRIVE SPECIFIED, GET DRIVE LETTER
        SUB     AL,'A'-1                ;MAKE BINARY
        MOV     BYTE PTR DESTDRIVE,AL   ;SAVE DRIVE
GETLAST: MOV    AL,[BX]                 ;GET A CHAR. FROM CMD LINE
        COMPLIST <0,SPACE,TAB>,ENDARG2  ;IF DELIMITER
        STOSB                           ;NOT DELIMITER, STORE IT
        INC     BX                      ;BUMP POINTER
        JMP     GETLAST                 ;LOOP
ENDARG2:
        MOV     AL,0
        STOSB                           ;END DEST W. 0
;************************************************************
;* LOOP, TAKING ONE SOURCE AT A TIME AND COPYING IT TO DEST *
;************************************************************
        MOV     CX,WORD PTR DS:NUMARGS  ;GET NUMBER OF ARGS AGAIN
        DEC     CX                      ;-1
        MOV     SI,OFFSET ARGPTRS    	;POINT TO POINTER TABLE
COPY1ARG:
        MOV     BX,DS:[SI]              ;GET POINTER TO ARG
        PUSH    SI
        PUSH    CX
        CALL    COPYARG                 ;COPY IT
        POP     CX
        POP     SI
        ADD     SI,2                    ;ADVANCE TO NEXT ARG POINTER
        LOOP    COPY1ARG                ;LOOP TILL NO MORE ARGS TO COPY
	MOV	AL,0			;ERROR CODE 0 MEANS OK
        JMP     EXIT2

;**********************************
;* COPY 1 SOURCE ARGUMENT TO DEST *
;**********************************
COPYARG PROC   NEAR
        MOV     BYTE PTR DS:SRCDRIVE,0  ;SET SOURCE DRIVE DEFAULT
        MOV     DI,OFFSET RSTACK.ARG1  	;COLLECT SOURCE
        MOV     AL,[BX+1]
        CMP     AL,':'                  ;CHECK FOR SOURCE DRIVE SPEC
        JNE     GETARG
        MOV     AL,[BX]                 ;GET DRIVE LETTER
        SUB     AL,'A'-1                ;MAKE BINARY
        MOV     BYTE PTR DS:SRCDRIVE,AL ;SAVE SOURCE DRIVE
GETARG: MOV     AL,[BX]                 ;COPY FROM [BX] TO [DI] UNTIL DELIMITER
        COMPLIST <0,SPACE,TAB>,ENDARG
        STOSB
        INC     BX
        JMP     GETARG
ENDARG: MOV     AL,0
        STOSB                           ;END ARG1 W. ZERO
        MOV     WORD PTR RBASE,OFFSET RSTACK   ;SAVE OFFSET TO RSTACK
        CALL    COPYIT                  ;DO THE STUFF
        RET
COPYARG ENDP

        PAGE +
;********************************************************************
; THIS IS THE COPY SUBROUTINE. IT ASSUMES THAT ARG1 AND ARG2 ARE
; SET UP PROPERLY IN THE RECURSION STACK AREA, AND THAT "RBASE" POINTS
; TO THE START OF THE DATA STRUCTURE FOR THIS RECURSION LEVEL.
;
COPYIT  PROC    NEAR
        MOV     BX,WORD PTR RBASE    	;GET BASE ADDR. (POINTER TO MVINFO)
        CALL    SETUP                   ;PARSE ARGUMENTS, CHECK FOR ERRORS
        JNC     NOARGERR                ;IF OK
        JMP     EXIT2                   ;QUIT IF ERROR
;******************************************
; SEE IF ANYTHING MATCHES THE SOURCE SPEC *
;******************************************
NOARGERR:
        ADDR    DX,SSPATH               ;POINT TO SEARCH PATH
        MOV     CX,31H                  ;SET SEARCH ATTRIBUTES
        MOV     AH,FIND_FIRST
        INT     DOS                     ;SEARCH FOR 1ST MATCH
        JNC     SRCOK                   ;OK IF SOMETHING FOUND
        ADDR    DX,ARG1
        CALL    ERRORMSG                ;ELSE SHOW ARGUMENT
        ERROR   2                       ;SAY IT DOESN'T EXIST
	MOV	AL,2			;SET ERROR CODE
        JMP     EXIT2			;EXIT 2 DOS
;**************************************
; CREATE DEST DIRECTORY, IF NECESSARY *
;**************************************
SRCOK:  CMP     WORD PTR [BX].NEWDIR,1  ;CHECK NEW DIRECTORY FLAG
        JNE     GOTONE                  ;IF NOT SET
        ADDR    DX,ARG2A                ;POINT TO DEST NAME
        MOV     AH,MKDIR
        INT     DOS                     ;CREATE NEW DIRECTORY
        JNB     GOTONE                  ;IF OK
        ADDR    DX,ARG2A                ;IF CAN'T CREATE,
        CALL    ERRORMSG                ;SHOW DIRECTORY NAME
        ERROR   12                      ;AND ERROR MSG.
	MOV	AL,12			;SET ERROR CODE
        JMP     EXIT2                   ;EXIT 2 DOS
;**************
; TOP OF LOOP *
;**************
GOTONE:
        CALL    BUILD_NAMES             ;MAKE UNAMBIG. SOURCE AND DEST NAMES
        JNC     NOSKIP
        JMP     NEXTFILE                ;IF SOURCE IS "." OR ".." OR = DEST
NOSKIP:
        CMP     BYTE PTR VFLAG,TRUE  	;CHECK VERBOSE FLAG
        JNE     QUIET                   ;IF QUIET MODE
        ADDR    DX,SRCNAME              ;NOT QUIET, SHOW VERBIAGE
        CALL    ERRORMSG
        CALL    TYPTX
        DB      ' -->',SPACE+200Q
        ADDR    DX,DESTNAME
        CALL    ERRORMSG
        CALL    CRLF
QUIET:
        TEST    [BX].DTA+21,BIT$DIR     ;IS SOURCE A DIRECTORY?
        JZ      COPYFILE                ;NO
	CMP	BYTE PTR DS:RFLAG,TRUE	;IS R FLAG SET?
	JNE	NEXTFILE		;NO, JUST SKIP OVER DIRECTORY
;***********************************************
; IF SOURCE IS A DIRECTORY, RECURSIVELY COPY IT*
;***********************************************
        CMP     WORD PTR LEVEL,MAXLEVEL-1 ;ARE WE AT MAX LEVEL?
        JL      NOTMAX                  ;NO
        ERROR   14                      ;YES, TOO DEEP
	MOV	AL,14			;SET ERROR CODE
        JMP     EXIT2
NOTMAX:
        COPYPATH SRCNAME,(ARG1+MVSTRUCSIZE)  ;COPY SOURCE DIRECTORY TO ARG1 AT NEXT LEVEL
        COPYPATH DESTNAME,(ARG2+MVSTRUCSIZE) ;COPY DEST NAME TO ARG2 AT NEXT LEVEL
        PUSH    BX                      ;SAVE POINTER TO BASE
        INC     WORD PTR LEVEL       	;INCREMENT RECURSION LEVEL
        ADD     WORD PTR RBASE,MVSTRUCSIZE ;ADVANCE BASE POINTER
        CALL    COPYIT                  ;COPY THE DIRECTORY
        POP     BX                      ;RESTORE BASE POINTER
        DEC     WORD PTR LEVEL          ;DECREMENT RECURSION LEVEL
        SUB     WORD PTR RBASE,MVSTRUCSIZE ;RESTORE BASE TO PREVIOUS LEVEL
        ADDR    DX,DTA
        MOV     AH,SET_DTA
        INT     DOS                     ;RESET DTA
        JMP     SHORT NEXTFILE          ;DO NEXT FILE
;*******************************
; IF SOURCE IS A FILE, COPY IT *
;*******************************
COPYFILE:
        CALL    COPY_FILE		;COPY A FILE
	JNB	NEXTFILE		;IF OK
	JMP	EXIT2			;IF ERROR
;*****************
; BOTTOM OF LOOP *
;*****************
NEXTFILE:
        MOV     AH,FIND_NEXT
        INT     DOS                     ;FIND NEXT MATCH, IF ANY
        JC      NOMORE                  ;IF NONE
        JMP     GOTONE                  ;GOT ONE, BACK TO TOP OF LOOP
;**********************
; NO MORE FILES, DONE *
; *********************
NOMORE:
JUSTCLOSE:
        CALL	CLOSE2                 ;CLOSE OUTPUT FILE
        CALL	CLOSE1                 ;CLOSE INPUT FILE
        RET                             ;ALL DONE
COPYIT  ENDP

        PAGE +
;*************************************************************************
; THIS PROCEDURE PARSES ARG1 AND ARG2 AND CHECKS FOR INCOMPATIBLE TYPES
; (E.G. "CP FOOBAR *.*").  IF SUCCESSFUL, IT SETS SSPATH = SOURCE SEARCH
; PATH, SPREFIX = SOURCE PREFIX, DSPATH = DEST SEARCH PATH (NOT USED),
; DPREFIX = DEST PREFIX, SRCTYPE = SOURCE TYPE, DESTTYPE = DESTINATION TYPE.
; IT ALSO SETS "NEWDIR"=1 IF THE DESTINATION DIRECTORY MUST BE CREATED.
; ALL OF THESE VARIABLES ARE IN A STRUCTURE OF TYPE 'MVINFO' IN THE RECURSION
; STACK AREA (STARTING AT THE ADDRESS IN 'RBASE').
;
; ON RETURN, THE CARRY FLAG IS SET IF AN ERROR OCCURRED, AND AL HOLDS AN
; ERROR CODE (<>0)
;
SETUP   PROC    NEAR
        MOV     BX,WORD PTR DS:RBASE    ;GET ADDR. OF DATA STRUCTURE
        MOV     WORD PTR [BX].NEWDIR,0  ;CLEAR "NEW DIRECTORY" FLAG
        ADDR    DX,DTA
        MOV     AH,SET_DTA
        INT     DOS                     ;SET DTA
        ADDR    SI,ARG1
        ADDR    DI,ARG2
        COMP_STRINGS                    ;COMPARE ARG1 AND ARG2
        JNE     NOTIDENT                ;IF NOT IDENTICAL
        ERROR   17                      ;ARG1 = ARG2, BAD NEWS
	MOV	AL,17			;SET ERROR CODE
        STC
        RET
NOTIDENT:
        ADDR    CX,SSPATH
        ADDR    DX,SPREFIX
        PUSH    BX
        ADD     BX,ARG1
        CALL    FIXPATH                 ;PARSE SOURCE PATHNAME
        POP     BX
        CMP     AX,TYPE_UNK
        JNE     GOODPATH                ;IF APPARENTLY OK
        ADDR    DX,ARG1
        CALL    ERRORMSG
        ERROR   2                       ;NONEXISTENT PATHNAME, COMPLAIN
	MOV	AL,2			;SET ERROR CODE
        STC
        RET
GOODPATH:
        MOV     WORD PTR [BX].SRCTYPE,AX     ;SAVE TYPE OF SOURCE
	CMP	AX,TYPE_DIR		;IS IT DIRECTORY?
	JNE	RSET			;J/NO.
	CMP	BYTE PTR DS:RFLAG,TRUE  ;YES IT IS, IS RFLAG SET?
	JE	RSET			;J/YES.
	ADDR	DX,ARG1			;R FLAG NOT SET,
	CALL	ERRORMSG		;SHOW NAME
	ERROR	7			;COMPLAIN ABOUT DIRECTORY
	MOV	AL,7			;SET ERROR CODE
	STC				;SIGNAL ERROR
	RET
RSET:
        ADDR    SI,ARG2			;GET POINTER TO DEST
PDEST:  PUSH    SI			;SAVE IT ON STACK
	MOV	DI, SI			;AND IN DI
SRCBS:  MOV     AX,[SI]                 ;FIND END OF DEST
        COMPLIST <0,SPACE,TAB>,GOTEND
        INC     SI
        JMP     SRCBS
GOTEND:
        DEC     SI
        CMP     [SI],BYTE PTR '\'       ;DOES DEST SPEC END W. BACKSLASH?
        JNE     NOBS                    ;J/NO, IT DOESN'T
	CMP	SI, DI			;IS DEST="\"?
	JE	NOBS			;J/YES, ROOT DIRECTORY, LEAVE IT ALONE
	CMP	BYTE PTR [SI-1],':'	;IS PREVIOUS CHAR ':'?
	JE	NOBS			;J/YES, ROOT DIRECTORY, LEAVE IT ALONE
        MOV     [SI],BYTE PTR 0         ;\ AT END AND NOT ROOT DIR, REMOVE IT
NOBS:   COPYPATH ARG2,ARG2A   		;MAKE ARG2A = ARG2
        POP     SI                      ;POINT TO START OF ARG2 AGAIN
        ADDR    CX,DSPATH
        ADDR    DX,DPREFIX
        PUSH    BX
        MOV     BX,SI
        CALL    FIXPATH                 ;PARSE DEST PATHNAME
        POP     BX
        MOV     WORD PTR [BX].DESTTYPE,AX       ;SAVE DEST TYPE
        CMP     AL,TYPE_AFN
        JE      BADDEST                 ;DEST CAN'T BE AFN
        CMP     AL,TYPE_UFN
        JNE     NOTUFN                  ;IF DEST TYPE IS UFN,
        CMP     WORD PTR DS:NUMARGS,2   ;BETTER HAVE ONLY 1 SOURCE
        JG      BADDEST
        CMP     WORD PTR DS:SRCTYPE,TYPE_AFN  ;AND SOURCE TYPE BETTER NOT BE AFN
        JNE     NOTUFN
BADDEST:
        ERROR   3
	MOV	AL,3			;SET ERROR CODE
        STC
        RET
NOTUFN:
        COMPLIST <TYPE_DSP,TYPE_DRV,TYPE_DIR>,DESTDSP ;IF DEST IS DIR OR DRIVE
        CMP     AL,TYPE_UNK
        JNE     SHORT DESTOK            ;IF DEST EXISTS
DESTNX:
        MOV     AX,WORD PTR [BX].SRCTYPE  ;GET SOURCE TYPE
        CMP     AL,TYPE_DIR             ;IF SOURCE TYPE IS DIRECTORY,
        JE      DESTDIR			;MAKE DEST A DIRECTORY, TOO
	CMP	WORD PTR [BX].SRCTYPE,TYPE_AFN ;SOURCE NOT A DIRECTORY
	JE	BADDEST			;AFN IS BAD (E.G. CP *.* FOO)
	JMP	SHORT DESTOK		;OTHERWISE OK
DESTDIR:
        CALL    SETUP_DEST_DIR          ;MAKE DEST A DIRECTORY, TOO
        JMP     SHORT DESTOK
DESTDSP: MOV    AX,WORD PTR [BX].SRCTYPE  ;DEST IS DIRECTORY, DIR SPEC OR DRIVE
        CMP     AL,TYPE_DIR             ;IS SOURCE A DIRECTORY? -
        JNE     DESTOK                  ;- NO
        CALL    SETUP_SRC_DIR           ;- YES, SOURCE IS DIRECTORY, SET IT UP
        JB      ERRRET                  ;IF ERROR
        MOV     AX,WORD PTR [BX].DESTTYPE
        CMP     AX,TYPE_DIR             ;IS DEST A DIRECTORY? -
        JNE     DESTOK                  ;- NO
        CALL    SETUP_DEST_DIR          ;- YES, SET IT UP, TOO
;*******************************
; CHECK FOR INCOMPATIBLE TYPES *
;*******************************
DESTOK:
        MOV     CX,WORD PTR [BX].DESTTYPE    ;GET DEST TYPE
        MOV     AX,WORD PTR [BX].SRCTYPE     ;GET SOURCE TYPE
        CMP     AX,TYPE_DIR             ;IS SOURCE A DIRECTORY? -
        JNE     TYPEOK                  ;- NO, IT ISN'T
        CMP     CX,TYPE_DIR             ;- YES, SOURCE IS DIRECTORY,
        JE      TYPEOK                  ;DEST BETTER BE DIRECTORY
        CMP     CX,TYPE_DRV             ;OR DRIVE SPEC
        JE      TYPEOK
ERRRET:
        ERROR   3                       ;ELSE INCOMPATIBLE TYPE ERROR
	MOV	AL,3			;SET ERROR CODE
	STC                             ;ERROR RETURN
        RET
TYPEOK: CLC                             ;NORMAL RETURN
        RET
SETUP   ENDP

;**********************************************
; COPY IS FROM DIR TO DIR, DIR SPEC OR DRIVE
; BUILD FULL DEST PATHNAME (IN ARG2A) AND CHECK
; ITS TYPE.  (SETS CARRY ON ERROR)
;
SETUP_SRC_DIR PROC NEAR
        COPYPATH ARG2,DSPATH  		;COPY DEST DIRECTORY OR DRIVE SPEC TO
                                        ;DEST PATH (USE AS SCRATCH AREA)
        DEC     DI                      ;BACK UP OVER NULL
        MOV     AX,WORD PTR [BX].DESTTYPE
        CMP     AX,TYPE_DIR             ;SEE IF DEST IS DIRECTORY -
        JNE     NOTDIR                  ;- NO
        MOV     BYTE PTR [DI],'\'       ;- YES, ADD BACKSLASH TO DEST NAME
        INC     DI
        DEC     CX			;CX IS # CHARS REMAINING OUT OF 64
NOTDIR: ADDR    SI,ARG1                 ;POINT TO SOURCE DIRECTORY NAME
        CMP     BYTE PTR [SI+1],':'     ;DRIVE SPECIFIED? -
        JNE     NODRV                   ;- NO IT WASN'T
        ADD     SI,2                    ;- YES, IT WAS, SKIP IT
NODRV:
;	skip to the last element in the source path
	MOV	DX, SI			;SAVE START OF SOURCE IN DX
STRIP_PATH:
	CMP	BYTE PTR [SI],0		;END OF SOURCE?
	JE	END_OF_SRC		;J/YES
	CMP	BYTE PTR [SI],'\'	;BACKSLASH IN SOURCE?
	JNE	NEXT_CHAR		;J/NO, KEEP SEARCHING
	MOV	DX, SI			;SAVE LOCATION OF BACKSLASH
NEXT_CHAR:
	INC	SI
	JMP	STRIP_PATH
END_OF_SRC:
	MOV	SI, DX			;POINT TO LAST \ OR START OF STRING
	CMP	BYTE PTR [SI],'\'	;IS THERE A \?
	JNE	NOBKSL			;NO
	INC	SI			;YES, SKIP PAST IT
NOBKSL:
        CALL    CPYCNT                  ;COPY LAST PART OF SOURCE DIRECTORY 
					;NAME TO DEST PATH
        COPYPATH DSPATH,ARG2A 		;COPY AUGMENTED DEST PATH TO ARG2A
        ADDR    CX,DSPATH
        ADDR    DX,DPREFIX
        PUSH    BX
        ADD     BX,ARG2A
        CALL    FIXPATH                 ;PARSE FULL DEST PATHNAME
        POP     BX
        MOV     WORD PTR [BX].DESTTYPE,AX    ;SAVE DEST TYPE
        CMP     AL,TYPE_UNK
        JNE     DESTXST                 ;IF DEST EXISTS
        MOV     AX,WORD PTR [BX].SRCTYPE  ;DEST DOESN'T EXIST, GET SOURCE TYPE
        CMP     AX,TYPE_DIR             ;IF SOURCE IS A DIRECTORY,
        JNE     DESTXST
        MOV     [BX].DESTTYPE,TYPE_DIR  ;MAKE DEST A DIRECTORY, TOO
DESTXST:
        CLC
        RET
SETUP_SRC_DIR ENDP

;***************************************************************
; THIS PROCEDURE IS CALLED IF THE DESTINATION IS A NEW DIRECTORY
;
SETUP_DEST_DIR PROC NEAR
        ADDR    SI,DSPATH
        ADDR    DI,DPREFIX
        PUSH    DI
        MOV     CX,PATHSIZE
        CALL    CPYCNT                  ;COPY SEARCH PATH TO PREFIX
        POP     DI
        MOV     CX,PATHSIZE
        MOV     AL,0
        REPNE   SCASB                   ;FIND END OF DEST PREFIX
        DEC     DI
        MOV     [DI],BYTE PTR '\'       ;ADD BACKSLASH
        MOV     [DI+1],BYTE PTR 0
        MOV     [BX].NEWDIR,WORD PTR 1  ;SET "NEW DIRECTORY FLAG"
        MOV     WORD PTR [BX].DESTTYPE,TYPE_DIR ;SET DEST TYPE = DIRECTORY
        RET
SETUP_DEST_DIR ENDP

        PAGE +
;****************************************************************************
; THIS ROUTINE TAKES THE INFO ON A FILE IN THE DTA AND USES IT TO GENERATE
; FULL, UNAMBIGUOUS SOURCE AND DESTINATION FILE NAMES BY ADDING THE NECESSARY
; DIRECTORY PREFIXES TO IT.  IT SETS THE CARRY FLAG IF THE "FILE"
; IS "." OR "..", OR IF THE SOURCE IS IDENTICAL TO THE DESTINATION.
;
BUILD_NAMES  PROC  NEAR
        COPYPATH SPREFIX,SRCNAME	;GET SOURCE PREFIX, 
					;COPY TO SOURCE NAME
        DEC     DI                      ;BACK UP OVER NULL
        ADDR    SI,(DTA+30)             ;POINT TO FILE NAME WE FOUND
        CMP     [SI],BYTE PTR '.'       ;DOES IT START WITH .? -
        JNE     NOTDOT                  ;- NO
        STC                             ;- YES, SET CARRY TO SKIP IT
        RET
NOTDOT:
        CALL    CPYCNT                  ;ADD IT TO SOURCE PREFIX
        CMP     WORD PTR [BX].DESTTYPE,TYPE_UFN  ;IS DEST A UFN?
        JE      DESTUFN                 ;YES, JUST USE IT
        CMP     WORD PTR [BX].DESTTYPE,TYPE_UNK
        JE      DESTUFN                 ;DITTO IF DEST DOESN'T EXIST
                                        ;IF NOT, MAKE DEST NAME = SOURCE NAME
        COPYPATH DPREFIX,DESTNAME       ;COPY DEST PREFIX TO DEST NAME
        DEC     DI                      ;BACK UP OVER NULL
        ADDR    SI,DTA+30               ;POINT TO FILE NAME WE FOUND
        CALL    CPYCNT                  ;ADD IT TO DEST PREFIX
        JMP     SHORT DONE              ;GO TO NEXT STEP
DESTUFN:                                ;DEST IS A FILE, NOT A DIRECTORY
        COPYPATH ARG2,DESTNAME          ;SO DESTNAME JUST = ARG2
DONE:
        CALL    CHECK_NAMES             ;CHECK SOURCE AND DEST FOR IDENTITY
        RET
BUILD_NAMES ENDP

        PAGE +
;*********************************************************************
; THIS PROCEDURE CHECKS THE SOURCE AND DEST FILES, AND SETS THE CARRY
; FLAG IF THEY ARE IDENTICAL
;
CHECK_NAMES PROC NEAR
        MOV     BX,WORD PTR DS:RBASE    ;GET ADDR. OF DATA STRUCTURE
        MOV     AH,SET_DTA
        MOV     DX,OFFSET DEST_DTA
        INT     DOS                     ;SET DTA
        ADDR    DX,ARG2                 ;POINT TO DESTINATION
        MOV     CX,0FFH
        MOV     AH,FIND_FIRST
        INT     DOS                     ;SEARCH FOR IT
        PUSHF
        ADDR    DX,DTA
        MOV     AH,SET_DTA
        INT     DOS                     ;RESET DTA
        POPF
        JNB     GOTDEST                 ;IF FOUND IT
        CLC                             ;OK IF IT DOESN'T EXIST
        RET
GOTDEST: ADDR   SI,DTA+21               ;POINT TO INFO ON SOURCE
        MOV     DI,OFFSET DEST_DTA+21  	;POINT TO INFO ON DEST
        MOV     CX,9                    ;SIZE OF FILE ATTRIBUTES
        REPE    CMPSB                   ;COMPARE SOURCE AND DEST
        JNE     NOTEQU                  ;IF NOT =
        COMP_STRINGS                    ;COMPARE STRINGS
        JNE     NOTEQU                  ;IF SOURCE AND DEST NAMES NOT EQUAL
        STC                             ;FILES ARE EQUAL (NAMES AND ATTRIB.)
        RET
NOTEQU: CLC
        RET
CHECK_NAMES ENDP
        PAGE +
;**************************************************************************
; THIS ROUTINE COPIES A SINGLE FILE (SRCNAME) TO ITS DESTINATION (DESTNAME)
;
; IT SETS THE CARRY FLAG ON ERROR, AND RETURNS AN ERROR CODE IN AL.
;
COPY_FILE PROC  NEAR
        ADDR    DX,SRCNAME              ;DX = SOURCE FILE NAME
        MOV     AL,READ_ACCESS
        MOV     AH,DOS2_OPEN
        INT     DOS                     ;TRY TO OPEN SOURCE FILE
        JC      FAIL                    ;IF CAN'T
        MOV     WORD PTR DS:INHANDLE,AX    ;SAVE FILE HANDLE
        CALL    GETOK                   ;GET CONFIRMATION IF DEST EXISTS
        JNC     OKGIVEN                 ;IF OK TO DELETE
        MOV     BX,WORD PTR DS:INHANDLE ;IF NOT OK,
        MOV     AH,DOS2_CLOSE
        INT     DOS                     ;CLOSE INPUT FILE
	CLC
        RET                             ;QUIT W/O COPYING
FAIL:   ADDR    DX,SRCNAME              ;POINT TO SOURCE FILE NAME
        CALL    ERRORMSG                ;SHOW IT
        ERROR   5                       ;COMPLAIN THAT CAN'T OPEN
	MOV	AL,5			;SET ERROR CODE
	STC
        RET				;ERROR RETURN
OKGIVEN: ADDR   DX,DESTNAME
        MOV     CL,BYTE PTR [BX].DTA+21  ;MAKE DEST ATTRIBUTES=SOURCE ATTRIB.
        MOV     CH,0
        MOV     AH,DOS2_CREATE
        INT     DOS                     ;CREATE DEST FILE (OR TRUNCATE OLD ONE)
        JNC     CREATED                 ;IF OK
        ADDR    DX,DESTNAME
        CALL    ERRORMSG                ;CREATE FAILED, SHOW FILE NAME
        ERROR   5                       ;COMPLAIN THAT CAN'T OPEN
	CALL	CLOSE1			;CLOSE INPUT FILE
	MOV	AL,5			;SET ERROR CODE
	STC				;SIGNAL ERROR
	RET
CREATED:
        MOV     WORD PTR DS:OUTHANDLE,AX   ;SAVE OUTPUT HANDLE
COPYLOOP:
        PUSH    BX
        MOV     BX,WORD PTR DS:INHANDLE ;BX = FILE HANDLE
        MOV     DX,OFFSET BUFFER        ;DX = BUFFER OFFSET
        MOV     CX,BUFSIZE              ;CX = BUFFER SIZE
        MOV     AH,READ                 ;USING DOS 2 CALL,
        INT     DOS                     ;READ FROM SOURCE
        POP     BX
        JC      RDERR                   ;IF ERROR
        MOV     CX,AX                   ;SAVE AMT. READ
        CMP     AX,0
        JE      ENDCOPY                 ;IF 0
        PUSH    BX
        MOV     BX,WORD PTR DS:OUTHANDLE ;BX = FILE HANDLE
        MOV     DX,OFFSET BUFFER        ;DX = BUFFER OFFSET
        MOV     AH,WRITE
        INT     DOS                     ;WRITE BUFFER TO DEST
        POP     BX
        JC      WRERR                   ;IF ERROR
        CMP     AX,CX                   ;WERE ALL BYTES WRITTEN?
        JE      COPYLOOP                ;YES, KEEP GOING
	ADDR	DX,DESTNAME		;ERROR, POINT TO DEST NAME
	CALL	ERRORMSG		;SHOW IT
        ERROR   10                      ;PROBABLY DISK FULL
	MOV	AL,10
        JMP     SHORT SCRATCH		;ABORT
WRERR:  ADDR	DX,DESTNAME		;POINT TO DEST NAME
	CALL	ERRORMSG		;SHOW IT
	ERROR   8                       ;WRITE ERROR
	MOV	AL,8
        JMP     SHORT SCRATCH		;ABORT
RDERR:  ADDR	DX,SRCNAME		;POINT TO SOURCE NAME
	CALL	ERRORMSG		;SHOW IT
	ERROR   9                       ;READ ERROR
	MOV	AL,9
        JMP     SHORT SCRATCH		;ABORT
ENDCOPY: PUSH   BX                      ;NO ERRORS
        MOV     BX,WORD PTR DS:INHANDLE
        MOV     AH,FILE_TIMES
        MOV     AL,0                    ;GET FILE DATE AND TIME FOR SOURCE
        INT     DOS
        MOV     BX,WORD PTR DS:OUTHANDLE   ;GET OUTPUT FILE HANDLE
        MOV     AH,FILE_TIMES
        MOV     AL,1
        INT     DOS                     ;SET OUTPUT DATE AND TIME SAME AS INPUT
        MOV     BX,WORD PTR DS:INHANDLE
        MOV     AH,DOS2_CLOSE
        INT     DOS                     ;CLOSE INPUT FILE
        MOV     BX,WORD PTR DS:OUTHANDLE
        MOV     AH,DOS2_CLOSE
        INT     DOS                     ;CLOSE OUTPUT FILE
        POP     BX
        RET
SCRATCH:
	PUSH	AX			;SAVE ERROR CODE
	ADDR	DX,DESTNAME		;POINT TO DEST FILE
	CALL	UNLINK2			;REMOVE IT
	CALL	CLOSE1			;CLOSE INPUT FILE
	POP	AX
	STC				;SIGNAL ERROR
	RET
COPY_FILE ENDP

        PAGE +
;*******************************************************************
;       THIS ROUTINE CHECKS TO SEE IF THE DEST FILE EXISTS.
;       IF IT DOES, AND IF THE CONFIRM FLAG IS SET, IT ASKS
;       FOR CONFIRMATION BEFORE DELETING THE FILE.  IF THE
;       CONFIRM FLAG IS NOT SET, IT JUST DELETES IT.
;       ON EXIT, 'C'=1 IF THE USER REPLIED 'N' TO THE CONFIRM MSG.
;
GETOK   PROC    NEAR
        ADDR    DX,DESTNAME
        MOV     AL,0
        MOV     AH,CHMOD
        INT     DOS                     ;GET ATTRIBUTES FOR DEST
        JNC     EXISTS                  ;IF FILE EXISTS
        CLC
        RET
EXISTS:
        CMP     BYTE PTR DS:IFLAG,TRUE  ;IS FLAG SET TO CONFIRM?
        JNE     COK                     ;NO.
        ADDR    DX,DESTNAME
        CALL    ERRORMSG                ;SHOW DEST FILE
        ERROR   4                       ;ASK FOR CONFIRMATION
	CALL	GETYORN			;GET Y OR N RESPONSE
        CMP     AL,'Y'                  ;IS IT YES?
        JNE     ABEXIT                  ;NO, SIGNAL CALLING ROUTINE
COK:
TRYAGAIN:
        ADDR    DX,DESTNAME
        MOV     AH,UNLINK
        INT     DOS                     ;DELETE THE FILE
        JNC     OKEXIT                  ;IF NO PROBLEM
        CMP     AX,5                    ;WAS FILE R/O? (THIS OUGHT TO BE
                                        ; THE ONLY POSSIBLE ERROR)
        JNE     ABEXIT                  ;EXIT IF SOME OTHER ERROR
	ADDR	DX,DESTNAME
	CALL	ERRORMSG		;SHOW DEST FILE NAME
        ERROR   6                       ;R/O FILE, QUERY USER AGAIN
	CALL	GETYORN			;GET Y OR N RESPONSE
        CMP     AL,'Y'                  ;TEST FOR 'Y' RESPONSE
        JNE     ABEXIT                  ;ABORT IF USER SAYS 'N'
        MOV     CX,0                    ;'Y' TYPED CLEAR ALL ATTRIBUTES
        ADDR    DX,DESTNAME             ;POINT TO FILE NAME
        MOV     AH,CHMOD
        MOV     AL,1                    ;CHANGE ATTRIBUTES
        INT     DOS                     ;TRY MAKING IT R/W
        JMP     TRYAGAIN                ;TRY TO ERASE IT AGAIN
ABEXIT: STC
        RET
OKEXIT: CLC
        RET
GETOK   ENDP

; PRTERR = PRINT ERROR MESSAGE (DX POINTS TO OFFSET FROM DGROUP)

PRTERR:
        PUSH    DS
        MOV     AX,DGROUP
        MOV     DS,AX
        CALL    ERRORMSG
        POP     DS
	RET

CLOSE2:  MOV    BX,WORD PTR OUTHANDLE
        MOV     AH,DOS2_CLOSE
        INT     DOS                     ;CLOSE OUTPUT FILE
	RET
CLOSE1:
        MOV     BX,WORD PTR INHANDLE
        MOV     AH,DOS2_CLOSE
        INT     DOS                     ;CLOSE INPUT FILE
	RET
EXIT2:
        MOV     AH,EXIT
        INT     DOS                     ;EXIT TO DOS

        END     ENTRY

```
{% endraw %}

## HEAD.ASM

{% raw %}
```
        TITLE HEAD - A FILTER FOR MSDOS2
        PAGE 55,132
;******************************************************************************
;       THIS PROGRAM PRINTS THE FIRST FEW LINES OF A TEXT FILE.
;
;       IT READS FROM A FILE IF SPECIFIED, OR FROM THE STANDARD INPUT OTHERWISE
;       IT WRITES TO THE STANDARD OUTPUT.
;
;       USAGE:  HEAD -n file1 file2 ...
;               -n is optional, limits output to n lines (20 default)
;		file names can be ambiguous
;
;
;	VERSION 1.8, 02-OCT-87: assembles under MASM 5.0
;	VERSION 1.7, 21-DEC-86: now supports wildcards, multiple files
;	VERSION 1.6, 06-SEP-86: minor cleanup, fixed bug involving failure
;				to set data segment when reading from stdin.
;	VERSION 1.5, 13-AUG-86: handles arbitrary -n (up to 65535)
;				also now buffers output, doesn't expand tabs
;	VERSION 1.4, 06-JUL-86: changes to memory allocation, now assembles
;				under MASM 4.0
;       VERSION 1,3, 04-FEB-86: fixed bug in reading from std. input
;       VERSION 1.2, 16-JAN-86: makes UTIL and CONSOLE external modules
;       VERSION 1.1, 27-SEP-85: defaults to std. input if no file given
;       VERSION 1.0, 19-SEP-85
;
;       BY: JON DART
;           3012 HAWTHORN ST.,
;           SAN DIEGO, CA 92104
;
;   	TO BUILD HEAD EXE:
;
;	MASM HEAD,HEAD,NUL,NUL
;	LINK HEAD,HEAD,NUL,ASM 

INBUFSIZE EQU   8192                    ;SIZE OF INPUT BUFFER
OUTBUFSIZE EQU	512			;SIZE OF OUTPUT BUFFER
MAXARGS EQU	40			;MAX. # CMD. LINE ARGUMENTS
PRGSIZE EQU	1000H			;MAX. SIZE OF CODE + FIXED DATA
M       EQU     BYTE PTR 0[BX]

        .XLIST
        INCLUDE ASCII.DEF
        INCLUDE MSDOS2.DEF
	INCLUDE MACROS.DEF
        .LIST

	DOSSEG
	.MODEL	SMALL

;       MEMORY DEFINITIONS:
;
	.DATA
INHANDLE DW     0                       ;INPUT FILE HANDLE
                                        ;(DEFAULTS TO STD. INPUT)
NUMARGS DW	1			;NUMBER OF COMMAND LINE ARGUMENTS
OUTNDX	DW	0			;OFFSET TO NEXT SLOT IN OUTPUT BUFFER
NUMLIN  DW      20                      ;NUMBER OF LINES TO LIST
ONEFILE	DB	1			;SET 1 IF ONE UNAMBIG. ARGUMENT		
MSG1    DB      CR,LF,"head: can't open ",0
MSG1E   DB      CR,LF,0
MSG2    DB      CR,LF,"head: read error on file ",0
MSG4	DB	CR,LF,"head usage: head -n filename",CR,LF,0
MSG5	DB	CR,LF,"head: too many command line arguments",CR,LF,0
MSG6	DB	CR,LF,"head: unknown pathname ",0

;	UNINITIALIZED DATA SPACE:

	.DATA?
INBUF   DB      INBUFSIZE DUP (?)       ;INPUT BUFFER
OUTBUF	DB      OUTBUFSIZE DUP (?)	;OUTPUT BUFFER
ARGPTRS DB	(2*MAXARGS) DUP (?)	;POINTERS TO ARGUMENTS
ARGBUF  DB	512 DUP (?) 		;ARGUMENT BUFFER	
SPATH	DB	65 DUP (?)		;SEARCH PATH
PREFIX	DB      65 DUP (?)		;SEARCH PREFIX
FILENAME DB	65 DUP (?)		;COMPOSITE FILE NAME (PREFIX + NAME)
DTA	DB	128 DUP (?)		;DTA  AREA
MAXMEM	EQU	DTA + 128		;MAX. MEMORY USED

	.STACK
        DB 512 DUP (?)

	.CODE
        EXTRN   COUT:NEAR,ERRORMSG:NEAR
        EXTRN   SKIPSP:NEAR,DTOBIN:NEAR,CPYCNT:NEAR,TYPTX:NEAR
	EXTRN	FIXPATH:NEAR,GETARGS:NEAR
	EXTRN	TYPE_UNK:ABS,TYPE_UFN:ABS

ENTRY:
        TEST_DOS2                       ;TEST FOR DOS 2.0, EXIT IF DOS 1
MEMOK:  
	MOV     AX,DGROUP
	MOV	ES,AX			;SET EXTRA SEG TO POINT TO BUFFERS
        MOV     BX,80H		        ;GET BYTE COUNT FOR COMMAND LINE
        CMP     BYTE PTR [BX],0         ;TEST IT
        JNE     L_1                     ;IF NOT 0
        JMP     START			;NO ARGUMENTS, USE STDIN
L_1:
        PUSH    BX
        MOV     DL,BYTE PTR [BX]
        MOV     DH,0
        ADD     BX,DX
        INC     BX
        MOV     BYTE PTR [BX],0         ;PUT 0 BYTE AT END OF COMMAND LINE
        POP     BX
        INC     BX			;POINT TO START OF COMMAND LINE
	MOV	SI,OFFSET ARGPTRS
	MOV	DI,OFFSET ARGBUF
	MOV	CX,MAXARGS
	CALL	GETARGS			;COLLECT COMMAND LINE ARGUMENTS
	JNB	L_2			;IF OK
        MOV     AX,DGROUP
        MOV     DS,AX
        MOV     DX,OFFSET MSG5
        CALL    ERRORMSG                ;TOO MANY ARGUMENTS
        JMP     EXIT2
L_2:
	MOV	AX,DGROUP
	MOV	DS,AX			;SET DATA SEG TO FIXED DATA
	MOV	WORD PTR NUMARGS,CX	;SAVE # OF ARGUMENTS
	CMP	CX,0
	JNE	L_2A			;IF SOME ARGUMENT
	JMP	START			;NO ARGUMENTS, USE STDIN
L_2A:
	MOV	SI,OFFSET ARGPTRS
	MOV	BX,WORD PTR [SI]	;POINT TO 1ST ARGUMENT
	MOV	AL,BYTE PTR [BX]	;GET 1ST CHAR.
        CMP     AL,'-'
        JE      L_3                     ;IF SWITCH SPECIFIED
	MOV	SI,OFFSET ARGPTRS
	MOV	CX,WORD PTR NUMARGS	;GET # OF ARGUMENTS
        JMP     GETFILES
L_3:
        INC     BX
        MOV     CL,0
        PUSH    BX
CD:     MOV     AL,BYTE PTR [BX]     	;HAVE NUMBER, COUNT NUMBER OF DIGITS
        CMP     AL,'0'
        JC      NODGT
        CMP     AL,'9'+1
        JNC     NODGT
        INC     BX
        INC     CL
        JMP     SHORT CD
NODGT:
        POP     BX
        MOV     CH,0                    ;CL HOLDS DIGIT COUNT
        CALL    DTOBIN                  ;CONVERT NUMBER TO BINARY
        JNC     L_4                     ;IF OK
	JMP	SHORT USE
L_4:
        CMP     AX,0                    ;IS NUMBER 0?
        JNE     NOT0                    ;NO.
        JMP     EXIT2                   ;YES, IT IS, JUST EXIT
NOT0:
        MOV     WORD PTR NUMLIN,AX      ;STORE # LINES
	MOV	SI,OFFSET ARGPTRS+2
	MOV	CX,WORD PTR NUMARGS	;GET # OF ARGUMENTS
	DEC	CX			;-1 CAUSE OF SWITCH
	JMP	SHORT GETFILES
USE:
        MOV     DX,OFFSET MSG4
        CALL    ERRORMSG                ;TELL USER HOW TO USE
        JMP     EXIT2
START:	
	CALL	HEAD
	JMP	EXIT2
GETFILES:
	MOV	AX,DGROUP
	MOV	DS,AX
	CMP	CX,0			;NO FILE ARGUMENTS?
	JNE	GOT1
	JMP	START			;NO, JUST USE STDIN
GOT1:
	CMP	CX,1			;>1 ARG?
	JE	ONLY1			;NOPE
	MOV	BYTE PTR ONEFILE,0	;>1 ARG
ONLY1:
ARGLUP:	MOV	BX,WORD PTR [SI]	;BX POINTS TO FILE NAME
	PUSH	CX
	PUSH	SI
	CALL	DOARG
	POP	SI
	POP	CX
SKIPSW:
	ADD	SI,2
	LOOP	ARGLUP
	JMP	EXIT2	

;	DOARG = PROCESS 1 ARGUMENT
;	ES:BX POINTS TO IT

DOARG	PROC 	NEAR
NONUM:
	MOV	AH,SET_DTA
	MOV	DX,OFFSET DTA
	INT	DOS			;SET DTA
        MOV	CX,OFFSET SPATH
        MOV	DX,OFFSET PREFIX
        PUSH    BX
        CALL    FIXPATH                 ;PARSE PATHNAME
	POP	BX
	CMP	AL,TYPE_UNK
	JE	BADNAME
	CMP	AL,TYPE_UFN
	JE	GOTNAME			;IF UNAMBIG. FILE NAME
	MOV	BYTE PTR ONEFILE,0	;AMBIG. FILE NAME OR DIR, FLAG IT
	JMP	GOTNAME
BADNAME:
	MOV	DX,OFFSET MSG6
	CALL	ERRORMSG		;BAD FILE NAME, SHOW MSG.
	MOV	DX,BX
	CALL	ERRORMSG		;SHOW FILE THAT CAUSED IT
	RET
GOTNAME:
        MOV     DX,OFFSET SPATH        	;POINT TO SEARCH PATH
        MOV     CX,31H                  ;SET SEARCH ATTRIBUTES
        MOV     AH,FIND_FIRST
        INT     DOS                     ;SEARCH FOR 1ST MATCH
	JB	BADNAME			;IF NOTHING FOUND
GOTFILE:
	MOV	SI,OFFSET PREFIX
	MOV	DI,OFFSET FILENAME
	MOV	CX,65
	CALL	CPYCNT			;COPY PREFIX TO FILE NAME AREA
        DEC     DI                      ;BACK UP OVER NULL
        MOV     SI,(OFFSET DTA)+30     	;POINT TO FILE NAME WE FOUND
        CMP     [SI],BYTE PTR '.'       ;DOES IT START WITH .? -
        JNE     NOTDOT                  ;- NO
	JMP     SHORT SKIPFILE 		;YES, JUST SKIP IT
NOTDOT:
	CALL	CPYCNT			;COPY FILE WE FOUND AFTER PREFIX
	CALL	DOFILE			;DO 1 FILE
SKIPFILE:
        MOV     AH,FIND_NEXT
        INT     DOS                     ;FIND NEXT MATCH, IF ANY
        JC      NOMORE                  ;IF NONE
        JMP     GOTFILE                 ;GOT ONE, BACK TO TOP OF LOOP
NOMORE:
	RET
DOARG	ENDP

;	DOFILE = PROCESS 1 FILE (NAME IN ES:FILENAME)

DOFILE  PROC	NEAR
        MOV     DX,OFFSET FILENAME     	;DX POINTS TO FILE NAME
        MOV     AL,READ_ACCESS
        MOV     AH,DOS2_OPEN
        INT     DOS                     ;TRY TO OPEN FILE
        JNC     NAMEOK                  ;IF OK
        JMP     SHORT BADOPN
NAMEOK:
        MOV     WORD PTR INHANDLE,AX    ;SAVE FILE HANDLE
	CMP	BYTE PTR ONEFILE,1
	JE	NOSHOW
	CALL	SHOWFILE		;SHOW FILE NAME (ONLY IF >1 SPECIFIED)
NOSHOW:
	CALL	HEAD			;SHOW HEAD OF FILE
	RET
BADOPN:
        MOV     DX,OFFSET MSG1
        CALL    ERRORMSG                ;BAD OPEN, SHOW MSG.
        MOV     DX,OFFSET FILENAME     	;DX POINTS TO FILE NAME
        CALL    ERRORMSG                ;SHOW IT
	RET
DOFILE	ENDP

;	SHOW FILE NAME

SHOWFILE PROC	NEAR
	MOV	AX,"="
	MOV	CX,5
BARS:
	CALL	WRITEBYTE
	LOOP	BARS
	MOV	AX,SPACE
	CALL	WRITEBYTE
	MOV	BX,OFFSET FILENAME
SHOWF:	MOV	AL,BYTE PTR [BX]
	CMP	AL,0
	JE	ENDF
	CALL	WRITEBYTE
	INC	BX
	JMP	SHOWF	
ENDF:	MOV	AL,SPACE
	CALL	WRITEBYTE
	MOV	AL,'='
	MOV	CX,5
BARS2:
	CALL	WRITEBYTE
	LOOP	BARS2
	MOV	AL,CR
	CALL	WRITEBYTE
	MOV	AL,LF
	CALL	WRITEBYTE
	RET
SHOWFILE ENDP

HEAD	PROC	NEAR
	MOV	CX,WORD PTR NUMLIN
NEWBUF:
	CALL	FILLBUF			;FILL INPUT BUFFER
	JNB	BEGIN			;IF OK
	JMP	BADREAD
BEGIN:
	CMP	BX,DX			;SEE IF ANYTHING READ 
	JE	CLOSEFILE		;NO, ASSUME EOF

SHOW:   CMP     BX,DX                   ;DISPLAY TEXT - TOP OF LOOP
        JGE     NEWBUF			;IF END OF BUFFER
        MOV     AL,BYTE PTR [BX]	;GET CHAR. FROM BUFFER
        INC     BX			;BUMP POINTER
	CALL	WRITEBYTE		;WRITE CHAR. TO STDOUT
        CMP     AL,CTRL$Z		;TEST FOR ^Z
	JE	CLOSEFILE		;IF FOUND ^Z
        CMP     AL,CR                   ;IS CR?
        JNE     SHOW                    ;NOPE
        LOOP    SHOW                    ;YES, COUNT A LINE

;	LINE COUNT REACHED

	CMP	BX,DX			;EXACTLY AT END OF BUFFER?
	JNE	NOTEND			;NO
	CALL	FILLBUF			;YES, JUST OUR LUCK, FILL IT AGAIN
	JNB	NOTEND
	JMP	SHORT BADREAD		;IF ERROR
NOTEND:
        MOV     AL,BYTE PTR [BX]	;GET CHAR. AFTER LAST CR
        CMP     AL,LF
        JNE     CLOSEFILE
        CALL    WRITEBYTE               ;SHOW LF IF AFTER LAST CR
	JMP	CLOSEFILE
BADREAD:
        MOV     DX,OFFSET MSG2		;SHOW ERROR
        CALL    ERRORMSG
	MOV	DX,OFFSET FILENAME	
	CALL	ERRORMSG		;AND FILENAME
	MOV	DX,OFFSET MSG1E
	CALL	ERRORMSG		;AND CR/LF
CLOSEFILE:
        MOV     BX,WORD PTR INHANDLE
        MOV     AH,DOS2_CLOSE
        INT     DOS                     ;CLOSE INPUT FILE
EXIT1:
	CALL	FLUSH			;CLEAR OUTPUT BUFFER
	RET
HEAD	ENDP

;	FILL BUFFER FROM DISK - RETURN 'C'=1 IF ERROR, BX = POINTER
;	TO START OF BUFFER, DX = POINTER TO LAST CHAR + 1

FILLBUF PROC	NEAR
	PUSH	CX			;SAVE LINE COUNT
        MOV     CX,INBUFSIZE            ;CX = # BYTES TO READ
        MOV     BX,WORD PTR INHANDLE    ;BX = FILE HANDLE
        MOV     DX,OFFSET INBUF
        MOV     AH,READ
        INT     DOS                     ;FILL BUFFER FROM FILE
	POP	CX			;RESTORE LINE COUNT
        JC      BAD                     ;IF ERROR
        MOV     BX,OFFSET INBUF
        ADD     AX,BX                   ;COMPUTE ADDR. OF LAST BYTE
        MOV     DX,AX                   ;SAVE IN DX
	CLC
BAD:
	RET
FILLBUF ENDP

; 	WRITE A BYTE TO THE OUTPUT
;
WRITEBYTE PROC 	NEAR
	PUSH	BX
	PUSH	CX
	PUSH	DX
	MOV	BX,WORD PTR OUTNDX
	MOV	BYTE PTR [BX+OUTBUF],AL
	INC	BX
	MOV	WORD PTR OUTNDX,BX
	CMP	BX,OUTBUFSIZE
	JL	NOTFUL
	CALL	FLUSH
NOTFUL:
	POP	DX
	POP	CX
	POP	BX
	RET
WRITEBYTE ENDP

;	FLUSH - WRITE OUTPUT BUFFER 

FLUSH	PROC	NEAR
	PUSH	AX
	MOV	CX,WORD PTR OUTNDX
	MOV	DX,OFFSET OUTBUF
	MOV	BX,1
	MOV	AH,WRITE
	INT	DOS		;WRITE TO OUTPUT
	POP	AX
	MOV	WORD PTR OUTNDX,0
	RET
FLUSH	ENDP

EXIT2:
        MOV     AH,EXIT
        INT     DOS                     ;EXIT TO DOS

        END     ENTRY



```
{% endraw %}

## LS.ASM

{% raw %}
```
        TITLE LS - SORTED DIRECTORY PROGRAM
        PAGE  55,132
;************************************************************************
;       THIS PROGRAM DISPLAYS A SORTED DIRECTORY WITH FILE SIZES.
;       IT REQUIRES MSDOS VERSION 2 OR HIGHER.
;
;       usage:  LS [-A -D -L -N -R -S - T -1] afn
;               -A includes hidden and system files
;		-D displays information on directory (not its contents)
;               -L shows date, time, file size in bytes for each file
;		-N suppresses sorting
;		-R reverses order of sort
;		-T sorts by date/time of file
;		-S shows file sizes
;		-1 forces single-column display with no paging
;               afn may contain * and ?: e.g. "LS PROG?.*"
;
;       BY: JON DART
;           3012 HAWTHORN ST.,
;           SAN DIEGO, CA 92104
;
;	Version 3.2, 30-Mar-89 -T option without -R sorts dates so that most
;			       recent files are first (like unix).  Illegal
;			       switch error msg. also corrected.
;	Version 3.1, 21-Mar-89 fixed bug in free space display.
;	Version 3.0, 18-Jan-89 modifications to handle disks > 65 Megabytes.
;		 	       also a bug fix in FIXPATH.
;	Version 2.2, 30-Apr-88 allows multiple file arguments, uses GETARGS
;		     library routine, adds NODUPES procedure.
;	Version 2.1, 09-Feb-88 minor cleanup, some redundant code removed.
;	Version 2.0, 28-Nov-87 fixes bug in display of very large directories.
;		     -S and -D options and PAD asssembly option added.  Old
;		     -D option changed to -T.
;	Version 1.9, 01-Nov-87 assembles under MASM 5.0
;	Version 1.8, 24-Oct-86 adds LOWCASE assembly option, -1, -D, -N and
;		     -R switches.  Some problems in redirecting output to
;		     disk were fixed.  Also minor bugs in display routine.
;	Version 1.7, 04-Oct-86 linked with new library, no longer writes
;		     nulls to console (which interfered with screen print)
;	Version 1.6, 05-Jul-86 fixes sometime loss of top display line.
;		     Now accepts - as well as / for switches.
;		     Also modified to assemble under MASM 4.0.
;       Version 1.5, 04-May-86 fixes clear screen routine
;       Version 1.4, 17-Jan-86 UTIL and CONSOLE made external modules,
;                    adds FIXPATH function
;       Version 1,3, 07-Nov-85 /L option added
;       Version 1.2, 03-Nov-85 fixes bug in size function
;       Version 1.1, 18-Oct-85
;
;   TO BUILD LS.EXE:
;	MASM LS,LS,NUL,NUL
;	LINK LS,LS,NUL,ASM
;	EXEPACK LS.EXE LS.NEW
;	DEL LS.EXE
;	REN LS.NEW LS.EXE

TRUE    EQU     1
FALSE   EQU     0
IBM     EQU     TRUE            ;TRUE IF IBM-COMPATIBLE AT BIOS LEVEL
LOWCASE EQU	FALSE		;TRUE FOR LOWER-CASE OUTPUT (FOR UNIX PURISTS)
PAD	EQU	TRUE		;PAD FILE NAMES WITH SPACES (SO EXTENSIONS LINE
				;UP). FALSE MEANS DON'T PAD WITHIN FILE NAMES.
BIOS    EQU     10H             ;BIOS INTERRUPT FOR VIDEO FUNCTIONS
MAXARGS EQU	100		;MAX # COMMAND-LINE ARGUMENTS
MAXFILES EQU    512             ;MAX # OF FILES
NCOLUMN EQU     5               ;# OF COLUMNS TO DISPLAY (SHORT MODE,
				;WITH NO FILE SIZES)
NCOLUMNS EQU	4		;# OF COLUMNS TO DISPLAY (SHORT MODE,
				;WITH FILE SIZES)
MAXLINES EQU    24              ;# LINES ON SCREEN FOR FILE DISPLAY
	IF	IBM
FENCE	EQU	179		;VERTICAL BAR CHAR. (IBM ONLY)
	ELSE
FENCE   EQU     '|'             ;BORDER BETWEEN COLUMNS
	ENDIF
K       EQU     1024            ;1 K

M       EQU     BYTE PTR 0[BX]

        .XLIST
        INCLUDE ASCII.DEF
        INCLUDE MSDOS2.DEF
	INCLUDE MACROS.DEF
        .LIST

ERROR   MACRO   ERRNUM                  ;SHOW ERROR MESSAGE
        MOV     DX,OFFSET MSG&ERRNUM
	CALL	ERRORMSG
	ENDM

;	UNINITIALIZED DATA

DATA	SEGMENT PUBLIC PARA 'DATA'
DGROUP  GROUP DATA
	ASSUME DS:DGROUP
ARGPTRS DW      MAXARGS DUP (?)         ;POINTERS TO START OF ARGUMENTS
ARGBUF  DB      256 DUP (?)		;BUFFER FOR ARGUMENTS
FILNAM  DB      80 DUP (?)              ;FILE NAME FROM COMMAND LINE
SPATH   DB      80 DUP (?)              ;SEARCH PATH
SPREFIX DB      80 DUP (?)              ;SEARCH PREFIX (NOT USED)
OUR_DTA DB      128 DUP (?)             ;DISK TRANSFER ADDRESS, USED BY MSDOS
                                        ;FUNCTIONS 4EH AND 4FH.
ADDRLIST DB     (2*MAXFILES) DUP (?)    ;HOLDS POINTERS TO INFO ON EACH FILE
BUFFER  DB      (22*MAXFILES) DUP (?)   ;HOLDS INFO ON EACH FILE, RETURNED BY
                                        ;MSDOS FUNCTION 4EH OR 4FH.
ENDBUF  EQU     BUFFER+(MAXFILES*22)

STACK   SEGMENT PARA STACK 'STACK'
        ASSUME SS:STACK
        DB 512 DUP (?)
STACK   ENDS

;*********************
; MEMORY DEFINITIONS *
;*********************
;

SWLIST		DB	'ADLNRST1',0	;LIST OF LEGAL SWITCHES
AFLAG   	DW      0               ;SET <>0 IF -A
DFLAG		DW	0		;SET <>0 IF -D
LFLAG   	DW      0               ;SET <>0 IF -L
NFLAG		DW	0		;SET <>0 IF -N
RFLAG		DW	0		;SET <>0 IF -R
SFLAG   	DW	0		;SET <>0 IF -S
TFLAG		DW	0		;SET <>0 IF -T
ONEFLAG 	DW	0		;SET <>0 IF -1
DRIVE   	DB      0               ;DRIVE (0 FOR DEFAULT, 1 FOR A, ETC)
ISDEV		DB	0		;=0 IF OUTPUT REDIRECTED TO DISK
VPAGE   	DB      0               ;VIDEO PAGE # (IBM ONLY)
SCRSIZE 	DB      80              ;SCREEN WIDTH (80 IS DEFAULT FOR NON-IBM)
VMODE   	DB      0               ;DISPLAY MODE (IBM ONLY)
ATTRIBUTES 	DB  	00010001B       ;DEFAULT FILE ATTRIBUTES
NUMFILES 	DW      0               ;NUMBER OF FILES FOUND
NDUPES		DW	0	        ;NUMBER OF DUPLICATE FILE NAMES
GAP     	DW      0               ;USED BY SORT ROUTINE
COLCOUNT 	DW      1               ;COUNT OF COLUMNS DISPLAYED
LINECOUNT 	DW      1               ;COUNT OF LINES DISPLAYED
FIRSTSCREEN 	DW 	1 DUP (?)	;SET =1 IF -L OR -S AND FIRST SCREEN
FILECOUNT 	DW      0              	;COUNT OF FILES DISPLAYED
BASE    	DW      1	        ;FIRST FILE TO SHOW
NEXTFREE 	DW      1 DUP (?)       ;ADDR. OF NEXT FREE SLOT IN BUFFER
MAXLINE 	DW      1 DUP (?)       ;NO. OF LINES TO DISPLAY
MAXFILE 	DW      1 DUP (?)       ;MAX FILE TO SHOW
MAXCOL  	DB      1 DUP (?)       ;COLUMN WIDTH OF DISPLAY
FILESPERSCREEN  DW 1 DUP (?)		;FILES PER SCREEN
LOSIZE  DW      1 DUP (?)               ;USED IN CALCULATING FREE SPACE
USED    DQ      0                       ;COUNT OF FILE SPACE USED
DEFAULT DB      '????????.???',0        ;DEFAULT FILE NAME
TXT0    DB      '<DIR','>',0            ;SAY IT'S A DIR
TXT1    DB      ' files, using ',0
TXT2    DB      ' bytes ','(',0
TXT3    DB      ' bytes free',')',0
TXT4    DB      ' free',')',0
TXT5	DB	CR,LF,0
MSG2    DB      ' : no matching files.',CR,LF,0
MSG3    DB      '[ More ] ',0
MSG4	DB	CR,LF,'illegal switch: ',0
MSG5    DB      CR,LF,'too many arguments',CR,LF,0

DATA	ENDS

CODE	SEGMENT PUBLIC PARA 'CODE'
	ASSUME CS:CODE
        EXTRN   SKIPSP:NEAR,UC:NEAR,DECOUT:NEAR,CPYCNT:NEAR,CPY:NEAR
	EXTRN   UCSTR:NEAR
	EXTRN	CMDSRC:NEAR
        EXTRN   ERRORMSG:NEAR
	EXTRN	TYPTX:NEAR
	EXTRN	PRTSTR:NEAR
        EXTRN   PRINTDD:NEAR
        EXTRN   COUT:NEAR,CIN:NEAR,CLRCO:NEAR,CRLF:NEAR
        EXTRN   FIXPATH:NEAR
	EXTRN   TYPE_DIR:ABS
	EXTRN   GETARGS:NEAR

;*********************
; START OF CODE HERE *
;*********************
ENTRY:
        TEST_DOS2                       ;TEST FOR DOS 2.0, EXIT IF DOS 1
	PUSH	DS
	MOV	AX,DGROUP
	MOV	DS,AX
	MOV	AL,0			;PREPARE TO CHECK DEVICE STATUS
	MOV	BX,1			;OF STDOUT
	MOV	AH,IO_CTL
	INT	DOS			;GET STATUS
	AND	DX,0080H		;MASK ISDEV BIT
	MOV	BYTE PTR ISDEV,DL	;SAVE RESULT
        IF      IBM
        MOV     AH,15
        INT     BIOS                    ;GET VIDEO MODE
        MOV     BYTE PTR VPAGE,BH       ;STORE VIDEO PAGE #
        MOV     BYTE PTR SCRSIZE,AH     ;STORE CHARS/LINE
        MOV     BYTE PTR VMODE,AL       ;STORE DISPLAY MODE
        ENDIF
	POP	DS
        CALL    PARSE_SWITCHES		;PARSE COMMAND-LINE SWITCHES
        MOV     AX,OFFSET BUFFER
        MOV     WORD PTR NEXTFREE,AX	;INIT "NEXTFREE" TO START OF FILE LIST
GETFILES:
	PUSH	CX
	PUSH	SI
	CALL	PARSE_ARG		;BUILD SEARCH PATH
        CALL    FIND_FILES              ;SEARCH FOR FILES, BUILD LIST IN MEMORY
	POP	SI
	POP	CX
	ADD	SI,2
	CMP	CX,0
	JLE	SORT
	LOOP	GETFILES
SORT:
        CALL    SORT_FILES              ;SORT FILE LIST
        CALL    SHOW_INFO               ;SHOW DISK USAGE INFO
        CALL    SHOW_FILES              ;DISPLAY DIRECTORY
        MOV     AX,256*EXIT
        INT     DOS                     ;EXIT TO DOS

;***********************************************
; PARSE COMMAND LINE SWITCHES                  *
; ENTRY:   DS:BX POINTS TO DOS COMMAND LINE    *
; RETURNS: CX = # OF ARGUMENTS (LESS SWITCHES) *
;	   SI = POINTER TO ARGUMENT POINTERS   *
;***********************************************
PARSE_SWITCHES  PROC  NEAR
	MOV	AX,DGROUP
	MOV	ES,AX
        MOV     BX,(80H)         	;GET BYTE COUNT FOR COMMAND LINE
        PUSH    BX
        MOV     DL,[BX]
        MOV     DH,0
        ADD     BX,DX
        INC     BX
        MOV     [BX],BYTE PTR 0         ;PUT 0 BYTE AT END OF COMMAND LINE
        POP     BX
        INC     BX
	MOV	SI,OFFSET ARGPTRS
	MOV	DI,OFFSET ARGBUF
	MOV	CX,MAXARGS
	CALL	GETARGS			;COLLECT COMMAND LINE ARGUMENTS
	JNB	L_2			;IF OK
TOOMANY:
        ERROR   5                       ;TOO MANY ARGUMENTS (PRETTY UNLIKELY)
	MOV	AL,5			;SET EXIT CODE
	MOV	AH,EXIT
	INT	DOS			;EXIT TO DOS
;***************************
; COLLECT SWITCHES, IF ANY *
;***************************
L_2:
	MOV	AX,DGROUP
	MOV	DS,AX			;POINT TO OUR DATA SEG, NOT PSP
	MOV	SI,OFFSET ARGPTRS
NEXTSW:
	MOV	BX,WORD PTR [SI]	;POINT TO ARGUMENT
	MOV	AL,BYTE PTR [BX]	;GET 1ST CHAR.
        CMP     AL,'-'
        JE      GOTSW                   ;IF SWITCH SPECIFIED
	CMP	AL,'/'
	JE 	GOTSW
	RET
GOTSW:
        INC     BX                      ;SKIP OVER SWITCH CHARACTER
	MOV	AL,BYTE PTR [BX]
SWLOOP:
        CALL    UC                      ;MAKE SWITCH UPPER CASE
	PUSH	BX
	MOV	BX,OFFSET SWLIST
	CALL	CMDSRC			;SEARCH LIST OF VALID SWITCHES
	POP	BX
	MOV	AH,0
	ADD	AX,AX			;NOT FOUND IN LIST?
	JZ	BADSWITCH		;NO.
	MOV	DI,OFFSET AFLAG - 2
	ADD	DI,AX			;POINT TO FLAG
	NOT	WORD PTR [DI]		;1'S COMPLEMENT
	INC	BX
	MOV	AL,BYTE PTR [BX]	;GET NEXT CHAR. FROM LINE
	COMPLIST <SPACE,TAB,NULL>,ENDSW ;IF DELIM
	JMP	SWLOOP			;ELSE ASSUME THIS IS A SWITCH CHAR.
ENDSW:	ADD	SI,2			;POINT TO NEXT POINTER TO AN ARG
	LOOP	NEXTSW
	RET				;NO ARGS BESIDES SWITCHES
BADSWITCH:
        ERROR   4                       ;ILLEGAL SWITCH
	MOV	AL,BYTE PTR [BX]
        CALL    COUT                    ;DISPLAY BAD CHAR.
	CALL	CRLF
	MOV	AL,4			;SET EXIT CODE
	MOV	AH,EXIT
	INT	DOS			;EXIT TO DOS
PARSE_SWITCHES  ENDP

;*****************************************************************
; TAKE A COMMAND LINE ARGUMENT AND SET UP SEARCH PATH IN "SPATH" *
;*****************************************************************
PARSE_ARG PROC	NEAR
	CMP	CX,0
	JE	NONAME			;IF NULL ARGUMENT
	MOV	BX,[SI]
	MOV	AL,BYTE PTR [BX+1]
        CMP     AL,':'			;SEE IF DRIVE SPECIFIED
        JNE     NODRIVE                 ;IF NOT
        MOV     AL,BYTE PTR [BX]        ;GET DRIVE LETTER
        CALL    UC                      ;MAKE UPPER-CASE
        MOV     BYTE PTR FILNAM,AL   	;SAVE DRIVE LETTER IN FILE NAME BUFFER
        MOV     BYTE PTR (FILNAM+1),':'   ;SAVE COLON ALSO
        SUB     AL,'A'-1                ;CONVERT ASCII TO BINARY (A=1, ETC.)
        MOV     BYTE PTR DRIVE,AL       ;SAVE BINARY DRIVE
        ADD     BX,2                    ;SKIP OVER DRIVE AND COLON
        CALL    SKIPSP                  ;ANYTHING AFTER DRIVE SPEC?
        MOV     SI,BX                   ;SAVE START OF FILE NAME, JUST IN CASE
        JNB     DRVPLUSFILE             ;IF FILE NAME GIVEN, COPY INTO NAME BUFFER
        MOV     SI,OFFSET DEFAULT       ;ELSE SI POINTS TO DEFAULT FILE NAME
DRVPLUSFILE:
        MOV     DI,OFFSET FILNAM+2      ;DI POINTS TO DESTINATION
        JMP     SHORT COPYNAME2         ;GO COPY FILENAME TO FILE BUFFER
NONAME: 
        MOV     SI,OFFSET DEFAULT	;IF NO NAME, JUST COPY DEFAULT TO FILNAM
        MOV     DI,OFFSET FILNAM
        JMP     SHORT COPYNAME2
NODRIVE:
COPYNAME:
        MOV     SI,BX                   ;DS:SI POINTS TO START OF NAME
        MOV     DI,OFFSET FILNAM
COPYNAME2:
        MOV     CX,80
        CALL    CPYCNT                  ;SAVE FILE NAME
        MOV     BX,OFFSET FILNAM        ;BX - FILE NAME
        MOV     CX,OFFSET SPATH         ;CX - STORAGE FOR SEARCH PATH
        MOV     DX,OFFSET SPREFIX       ;DX - STORAGE FOR SEARCH PREFIX (NOT USED)
        CALL    FIXPATH                 ;PARSE FILE NAME
	CMP	AX,TYPE_DIR
	JE	GOTDIR			;IF DIRECTORY
        RET
GOTDIR:	CMP	BYTE PTR DFLAG,0	;-D FLAG SET?
	JNE	DFLAGSET
	RET
DFLAGSET:
	MOV	SI,OFFSET FILNAM
	MOV	DI,OFFSET SPATH
	MOV	CX,65
	CALL	CPYCNT			;MAKE SEARCH PATH = FILE NAME
	RET	
PARSE_ARG ENDP

;**********************
; FILE SEARCH ROUTINE *
;**********************
FIND_FILES PROC NEAR
        MOV     DX,OFFSET OUR_DTA       ;LOAD DTA OFFSET
        MOV     AH,SET_DTA

        INT     DOS                     ;SET UP DTA
        MOV     CX,WORD PTR ATTRIBUTES  ;GET DEFAULT ATTRIBUTES
        CMP     BYTE PTR AFLAG,0        ;A FLAG SET?
        JE      SHORT NOAFLAG           ;NO
        OR      CX,00000110B            ;YES, SET SYSTEM & HIDDEN ATTRIBUTES
NOAFLAG:
;***********************
; SEARCH FOR 1ST MATCH *
;***********************
        MOV     DX,OFFSET SPATH         ;POINT TO SEARCH PATH
        MOV     AH,FIND_FIRST
        INT     DOS                     ;SEARCH FOR 1ST MATCH
        JNC     FOUND1ST                ;IF FOUND
	MOV	DX,OFFSET TXT5
	CALL	ERRORMSG
	MOV	DX,OFFSET FILNAM	;POINT TO FILE NAME
	CALL	ERRORMSG
	ERROR	2			;NO MATCHING FILES
	MOV	AX,256*EXIT+2
	INT	DOS
;*********************************************************************
; COLLECT FILE INFO BLOCKS IN BUFFER, POINTERS TO BLOCKS IN ADDRLIST *
;*********************************************************************
FOUND1ST:
FOUND1: INC     WORD PTR NUMFILES
        CMP     WORD PTR NUMFILES,MAXFILES
        JGE     LASTFILE
        MOV     DI,WORD PTR NEXTFREE
        PUSH    DI
        MOV     SI,OFFSET OUR_DTA+21
        MOV     CX,22
        CALL    CPY             ;COPY FILE INFO TO TABLE
        MOV     AX,WORD PTR OUR_DTA+26  ;LSW OF FILE SIZE
        MOV     DX,WORD PTR OUR_DTA+28  ;MSW OF FILE SIZE
        ADD     AX,WORD PTR USED        ;ADD LSW OF FILE SIZE TO
                                        ;LSW OF USED COUNT
        MOV     WORD PTR USED,AX
        ADC     WORD PTR USED+2,DX      ;NOW ADD MSW
        ADD     WORD PTR NEXTFREE,22
        MOV     AX,NUMFILES
        ADD     AX,AX
        ADD     AX,OFFSET ADDRLIST
        MOV     SI,AX
        POP     BX
        MOV     WORD PTR [SI],BX   ;STORE ADDR IN LIST
        MOV     AH,FIND_NEXT
        INT     DOS             ;FIND NEXT FILE
        JNC     FOUND1          ;LOOP UNTIL NO MORE
LASTFILE:
        RET
FIND_FILES ENDP

;********************************************************
; SORT POINTERS IN ADDRLIST, USING SHELL SORT ALGORITHM *
;********************************************************
SORT_FILES PROC NEAR
	CMP	BYTE PTR NFLAG,0	;CHECK N FLAG
	JNE	NODUPES			;IF NO SORTING
        MOV     AX,WORD PTR NUMFILES
SORT1:					;TOP OF LOOP 1
        SHR     AX,1
        MOV     WORD PTR GAP,AX
        JNZ     SORT11			;DONE IF GAP = 0

;***********************************************************
; make one more pass to eliminate duplicate file names     *
; (necessary if user types something like "LS *.ASM H*.*") *
;***********************************************************
NODUPES:
	MOV	AX,WORD PTR NUMFILES
	CMP	AX,2
	JGE	NODUPES0
	RET
NODUPES0:
	MOV	CX,1
NODUPES1:
	MOV	AX,WORD PTR NDUPES
	AND	AX,AX
	JZ	NODUPES2
	ADD	AX,CX
	MOV	SI,AX
	ADD	SI,SI
	ADD	SI,OFFSET ADDRLIST
	MOV	DI,CX
	ADD	DI,DI
	ADD	DI,OFFSET ADDRLIST
	MOV	AX,WORD PTR [SI]
	MOV	WORD PTR [DI],AX
NODUPES2:
	MOV	DX,CX
	INC	DX
	ADD	DX,WORD PTR NDUPES
	CALL	COMPARE
	JNE	NODUPES3
	INC	WORD PTR NDUPES		;BUMP # OF DUPLICATES
NODUPES3:
	INC	CX
	MOV	AX,WORD PTR NUMFILES
	CMP	CX,AX
	JL	NODUPES1
	MOV	AX,WORD PTR NUMFILES
	SUB	AX,WORD PTR NDUPES
	MOV	WORD PTR NUMFILES,AX
        RET

SORT11:
        INC     AX
        MOV     BX,AX			;BX = COUNTER FOR LOOP 2
SORT2:  CMP     BX,WORD PTR NUMFILES	;TOP OF LOOP 2
        JG      SHORT SORT5
        MOV     CX,BX
SORT3:					;TOP OF LOOP 3
        MOV     DX,CX
        SUB     CX,WORD PTR GAP
        JBE     SHORT SORT4
	CMP	BYTE PTR TFLAG,0
	JE	SORT3A			;IF SORTING NAMES
	CALL	COMPDATE		;SORTING DATES, USE SPECIAL COMPARE
	JMP	SHORT SORT3B
	CALL	SWAP
	JMP	SORT3
SORT3A:
        CALL    COMPARE                 ;COMPARE ADDRLIST[DX], ADDRLIST[CX]
SORT3B:
	MOV	AX,0
        JLE     SORT3C
	NOT	AX
SORT3C:
	CMP	BYTE PTR RFLAG,0	;R FLAG SET?
	JE	SORT3D			;NO
	NOT	AX			;YES, NEGATE RESULT OF COMPARISON
SORT3D: 
	AND	AX,AX
	JZ	SORT4
        CALL    SWAP			;OUT OF ORDER, SO SWAP
        JMP     SORT3			;BOTTOM OF LOOP 3
SORT4:
        INC     BX
        JMP     SORT2			;BOTTOM OF LOOP 2
SORT5:
        MOV     AX,WORD PTR GAP
        JMP     SORT1			;BOTTOM OF LOOP 1
SORT_FILES ENDP

;********************************************************
; COMPARE TWO FILE NAMES                                *
; ENTRY:  CX AND DX ARE INDEX TO POINTERS (1..NUMFILES) *
;         IN ADDRLIST                                   *
;********************************************************
COMPARE PROC    NEAR
        PUSH    CX
        MOV     SI,CX
        ADD     SI,SI
        ADD     SI,OFFSET ADDRLIST
        MOV     AX,WORD PTR [SI]
        ADD     AX,9
        MOV     SI,AX
        MOV     DI,DX
        ADD     DI,DI
        ADD     DI,OFFSET ADDRLIST
        MOV     AX,WORD PTR [DI]
        ADD     AX,9
        MOV     DI,AX
        MOV     CX,11
	COMP_STRINGS
        POP     CX
        RET
COMPARE ENDP

;*********************************************************
; COMPARE TWO FILES BY DATE                              *
; ENTRY:   CX AND DX ARE INDEX TO POINTERS (1..NUMFILES) *
;  	   IN ADDRLIST                                   *
;*********************************************************
COMPDATE PROC    NEAR
        PUSH    CX
        MOV     SI,CX
        ADD     SI,SI
        ADD     SI,OFFSET ADDRLIST
        MOV     AX,WORD PTR [SI]
        MOV     SI,AX
        MOV     DI,DX
        ADD     DI,DI
        ADD     DI,OFFSET ADDRLIST
        MOV     AX,WORD PTR [DI]
        MOV     DI,AX
	MOV	AX,WORD PTR [DI+3]
	CMP	AX,WORD PTR [SI+3]
	JNE	COMPD1			;J/IF DATES NOT =
	MOV	AX,WORD PTR [DI+1]	;COMPARE TIMES
	CMP	AX,WORD PTR [SI+1]
COMPD1:
        POP     CX
        RET
COMPDATE ENDP

;*********************************************************
; SWAP TWO OUT-OF-ORDER FILES                            *
; ENTRY:   CX AND DX ARE INDEX TO POINTERS (1..NUMFILES) *
; 	   IN ADDRLIST                                   *
;*********************************************************
SWAP    PROC    NEAR
        PUSH    BX
        MOV     SI,CX
        ADD     SI,SI
        ADD     SI,OFFSET ADDRLIST
        MOV     BX,WORD PTR [SI]
        MOV     DI,DX
        ADD     DI,DI
        ADD     DI,OFFSET ADDRLIST
        MOV     AX,WORD PTR [DI]
        MOV     WORD PTR [SI],AX
        MOV     WORD PTR [DI],BX
        POP     BX
        RET
SWAP    ENDP

;********************
; DISPLAY DIRECTORY *
;********************
SHOW_FILES PROC NEAR
        MOV     SI,OFFSET ADDRLIST
	MOV	WORD PTR FIRSTSCREEN,0
	MOV	AL,BYTE PTR LFLAG
	OR	AL,BYTE PTR SFLAG	;S OR L FLAG SET?
	JZ	DISP0A			;NO
	INC	WORD PTR FIRSTSCREEN	;YES, SET FLAG
DISP0A:
	CMP	BYTE PTR ONEFLAG,0
	JE	DISP0			;IF -1 FLAG NOT SET
        MOV     AX,WORD PTR NUMFILES    ;NUMBER OF FILES THERE ARE
        MOV     WORD PTR MAXFILE,AX     ;=LAST FILE # TO DISPLAY
	MOV	BX,2			;INDEX TO 1ST FILE
	JMP	DISP11			;GO SHOW FILES IN 1 COLUMN
DISP0:
        MOV     BYTE PTR MAXCOL,2	;INITIALIZE MAXCOL FOR LONG DISPLAY
        CMP     BYTE PTR LFLAG,0        ;LONG DISPLAY FLAG SET?
        JNE     DISP2                   ;YES, KEEP MAXCOL INTACT
	CMP	BYTE PTR SFLAG,0	;S FLAG SET?
	JE	DISP1			;NO
        MOV     BYTE PTR MAXCOL,NCOLUMNS   ;YES, SET MAXCOL APPROPRIATELY
	JMP	SHORT DISP2
DISP1:	MOV	BYTE PTR MAXCOL,NCOLUMN	;SET NCOLUMN FOR SHORT DISPLAY, NO SIZES
DISP2:
        MOV     BL,BYTE PTR MAXCOL
        MOV     AL,MAXLINES
	SUB	AL,BYTE PTR FIRSTSCREEN
        MUL     BL                      ;COMPUTE (MAXLINES)*MAXCOL
	MOV	WORD PTR FILESPERSCREEN,AX ; SAVE RESULT
        ADD     AX,WORD PTR BASE        ;ADD BASE TO GET LAST FILE # WE
                                        ;CAN SHOW ON THIS SCREEN
        MOV     BX,AX
        MOV     AX,WORD PTR NUMFILES    ;COMPARE WITH TOTAL # FILES
        INC     AX                      ;+1
        CMP     AX,BX                   ;WILL ALL FILES FIT ON SCREEN?
        JG      DISP6                   ;NO
	MOV	AX,WORD PTR NUMFILES	;GET MAX. FILE NUMBER
	SUB	AX,WORD PTR BASE	;FIND HOW MANY FILES TO GO
	INC	AX
        DIV     BYTE PTR MAXCOL         ;COMPUTE # OF LINES/COLUMN
        CMP     AH,0                    ;IS REMAINDER 0?
        JE      DISP5                   ;YES, SKIP AHEAD
        INC     AL                      ;NO, ADD 1 TO LINE COUNT
DISP5:  MOV     AH,0                    ;ZERO HI BYTE OF LINES/COLUMN
        MOV     WORD PTR MAXLINE,AX     ;MAXLINE=# OF LINES TO SHOW IN
                                        ;THIS SCREEN
        MOV     AX,WORD PTR NUMFILES    ;NUMBER OF FILES THERE ARE
        MOV     WORD PTR MAXFILE,AX     ;=LAST FILE # TO DISPLAY
        JMP     SHORT DISP7
DISP6:  MOV     AX,MAXLINES             ;TOO MANY FILES FOR 1 SCREEN, SO
	SUB	AX,WORD PTR FIRSTSCREEN
        MOV     WORD PTR MAXLINE,AX     ;USE WHOLE SCREEN FOR DISPLAY
	MOV	AX,WORD PTR FILESPERSCREEN ; GET MAX. FILES/SCREEN
        MOV     WORD PTR MAXFILE,AX     ;STORE AS # OF FILES TO SHOW
DISP7:
        MOV     WORD PTR COLCOUNT,1	;START AT COLUMN 1
	MOV	WORD PTR LINECOUNT,1	;AND LINE 1
        MOV     WORD PTR FILECOUNT,0    ;# OF FILES DISPLAYED IN THIS SCREEN
DISP8:
        MOV     CX,1                    ;CX WILL COUNT UP TO COLCOUNT
        MOV     BX,0                    ;BX WILL HOLD (CX-1)*MAXLINE
DISP9:                                  ;COMPUTE (COLCOUNT-1)*MAXLINE
        CMP     CX,WORD PTR COLCOUNT
        JGE     DISP10
        ADD     BX,WORD PTR MAXLINE
        INC     CX
        JMP     DISP9
DISP10:
        ADD     BX,WORD PTR LINECOUNT   ;ADD LINE COUNT
        DEC     BX                      ;-1
        ADD     BX,WORD PTR BASE        ;ADD TO BASE
        CMP     BX,WORD PTR NUMFILES    ;BLANK SLOT IN LAST COLUMN?
        JG      DISP12                   ;YUP.
	ADD	BX,BX			;DOUBLE BX TO GET INDEX TO ADDRLIST
        CMP     WORD PTR COLCOUNT,1     ;1ST COLUMN?
        JE      DISP11                   ;YES, NO FENCE
        CALL    DOFENCE                 ;SHOW FENCE
DISP11:
        MOV     DI,WORD PTR [SI+BX]     ;GET ADDRESS OF FILE INFO
	PUSH	BX
        CALL    SHOW                    ;SHOW A FILE
        CALL    BUMPCOL                 ;UPDATE LINE & COLUMN COUNTS
	POP	BX
        INC     WORD PTR FILECOUNT      ;BUMP FILE COUNT
        MOV     AX,WORD PTR FILECOUNT   ;GET IT
        CMP     AX,WORD PTR MAXFILE     ;DONE ALL FILES?
        JGE     DISP14                  ;IF DONE
	CMP	BYTE PTR ONEFLAG,0	;TEST 1-COLUMN FLAG
	JE	DISP13			;IF NOT SET, DO PAGING
	CALL	CRLF			;SHOW CR/LF
	ADD	BX,2			;ADVANCE TO NEXT SLOT IN ADDRLIST
	JMP	DISP11			;DO NEXT FILE
DISP12:
        CALL    BUMPCOL
DISP13:
        MOV     AX,WORD PTR LINECOUNT   ;GET LINE COUNT
        CMP     AX,WORD PTR MAXLINE     ;IS IT >MAX LINE?
        JLE     DISP8                   ;IF NOT

;       COME HERE WHEN SCREEN IS FULL OR ALL FILES DONE:
DISP14:
	CMP	BYTE PTR ONEFLAG,0
	JE	DISP15			;IF NOT -1
	RET				;DONE IF -1
DISP15:
        CMP     WORD PTR COLCOUNT,1     ;IS COLUMN COUNT =1?
        JE      DISP16                  ;YES, NO CR NEEDED
	CMP	WORD PTR NUMFILES,0	;WAS AT LEAST ONE FILE DISPLAYED?
	JE	DISP16			;NO, NO CR NEEDED
        CALL    CRLF                    ;SHOW CR AFTER LAST LINE
DISP16:
        MOV     AX,WORD PTR BASE
        ADD     AX,WORD PTR MAXFILE
        MOV     WORD PTR BASE,AX        ;GET BASE FOR NEXT SCREEN
        MOV     BX,AX
        MOV     AX,WORD PTR NUMFILES
        SUB     AX,BX                   ;COMPUTE # FILES REMAINING
        JBE     DISP17                  ;IF NO MORE
        CALL    WAITCR                  ;WAIT FOR USER
	MOV	WORD PTR FIRSTSCREEN,0	;CLEAR "FIRST SCREEN" FLAG
        JMP     DISP2                   ;DO NEXT SCREEN
DISP17:
        RET
SHOW_FILES ENDP

BUMPCOL PROC    NEAR
	CMP	BYTE PTR ONEFLAG,0
	JNE	BC1			;JUST RETURN IF 1 COLUMN
        INC     WORD PTR COLCOUNT       ;BUMP COLUMN COUNT
        MOV     AX,WORD PTR COLCOUNT
        CMP     AL,BYTE PTR MAXCOL      ;PAST LAST COLUMN?
        JLE     BC1                     ;NO, KEEP GOING
        CALL    CRLF                    ;YES, START NEW LINE
        MOV     WORD PTR COLCOUNT,1     ;RESET COLUMN COUNTER
        INC     WORD PTR LINECOUNT      ;UPDATE LINE COUNTER
BC1:
        RET
BUMPCOL ENDP

DOFENCE PROC    NEAR                    ;SHOW "FENCE" BETWEEN COLUMNS
        CMP     BYTE PTR LFLAG,0        ;L FLAG SET?
        JE      SHORTFENCE              ;NO.
	CALL    TWOSP
	MOV	AX,FENCE
        CALL	COUT
TWOSP:
	MOV	AL,SPACE		;YES, LONGER GAP BTWN. COLUMNS
	CALL	COUT
	MOV	AL,SPACE
	CALL	COUT
        RET
SHORTFENCE:
        MOV	AX,SPACE
	CALL	COUT
	MOV	AX,FENCE
	CALL	COUT
	MOV	AX,SPACE
	CALL	COUT
        RET
DOFENCE ENDP

;*******************************************
; SHOW FILE NAME, SIZE (DI POINTS TO INFO) *
;*******************************************
SHOW    PROC    NEAR
        PUSH    DI
        MOV     CX,8
SHOWNAME:                               ;SHOW FILE NAME
        MOV     AL,BYTE PTR [DI+9]      ;GET CHAR.
        CMP     AL,'.'
        JE      SHOW1                   ;DOT MEANS END OF NAME
        CMP     AL,0
        JE      SHOW1			;SO DOES NULL
	IF	LOWCASE
	CALL	LC			;MAKE LOWER CASE
	ENDIF
        CALL    COUT                    ;SHOW CHAR.
        INC     DI                      ;BUMP POINTER
	DEC	CX
	JMP	SHOWNAME		;LOOP

SHOW1:
	IF	PAD
	PUSH    AX                      ;FOUND END OF NAME, UNUSED COUNT IN CX
        CALL    SPOUT                   ;WRITE CX SPACES
        POP     AX
	ENDIF
	CMP	AL,'.'			;WAS LAST CHAR DOT?
	JNE	NODOT			;NO
	INC	DI			;POINT PAST DOT
	MOV	AX,'.'
        CALL    COUT                    ;NOW WRITE DOT
	JMP	SHORT SHOW3
NODOT:	MOV	AX,SPACE		;SHOW SPACE (INSTEAD OF DOT)
	CALL	COUT
SHOW3:
	PUSH	CX
	MOV     CX,3                    ;PREPARE TO SHOW EXTENSION (3 CHARS.)
SHOW4:  MOV     AL,BYTE PTR [DI+9]      ;GET CHAR.
        CMP     AL,0
        JE      SHOW4A                  ;IF NULL, SHOW A SPACE
	IF	LOWCASE	
	CALL	LC			;MAKE LOWER CASE
	ENDIF
        INC     DI                      ;BUMP POINTER
	JMP	SHORT SHOW4B
SHOW4A:	MOV	AX,SPACE
SHOW4B:	
        CALL    COUT                    ;SHOW CHAR.
        LOOP	SHOW4			;LOOP
	POP	CX
SHOW5:  
	CALL    SPOUT                   ;PAD OUT FIELD
SHOW6:  POP     DI                      ;POINT TO START OF INFO AGAIN
        MOV     AL,BYTE PTR [DI]        ;GET FILE ATTRIBUTE
        AND     AL,00010000B            ;IS IT A DIRECTORY?
        JZ      SHOW7                   ;NO.
        CMP     BYTE PTR LFLAG,0        ;LONG DISPLAY?
        JE      SHOW6B                  ;NO
        MOV     CX,3                    ;YES, 3 EXTRA SPACES
        CALL    SPOUT
SHOW6B:                                 ;HAVE DIRECTORY
	CMP	BYTE PTR SFLAG,0
	JNE	SHOW6C			;IF S FLAG SET
	CMP	BYTE PTR LFLAG,0
	JNE	SHOW6C			;IF L FLAG SET
	RET				;OTHERWISE JUST RETURN
SHOW6C:
	MOV	DX,OFFSET TXT0
	CALL	PRTSTR			;PRINT <DIR>
        CMP     BYTE PTR LFLAG,0        ;IS L FLAG SET?
        JNE     SHOW8A                  ;YES, FINISH UP
        RET                             ;NO, ALL DONE
SHOW7:                                  ;HAVE FILE, NOT DIR
        CMP     BYTE PTR LFLAG,0        ;L FLAG SET?
        JNE     SHOW8                   ;YES, LONG DISPLAY
	CMP	BYTE PTR SFLAG,0	;S FLAG SET?
	JE	SHOW9			;NO, SUPPRESS FILE SIZE DISPLAY
        MOV     AX,WORD PTR [DI+5]      ;SHORT DISPLAY, GET LSW FILE SIZE
	MOV	DX,WORD PTR [DI+7]	;AND MSW FILE SIZE
        CALL    MAKEK                   ;CONVERT TO KBYTES
        MOV     AL,SPACE                ;WITH LEADING SPACES,
        MOV     CX,5                    ;AND FIELD WIDTH = 5,
        CALL    DECOUT                  ;SHOW FILE SIZE
SHOW9:
        RET                             ;DONE

SHOW8:  MOV     AX,WORD PTR [DI+5]      ;LONG DISPLAY
        PUSH    SI                      ;MOVE SIZE TO DI:SI
        MOV     SI,AX
        MOV     AX,WORD PTR [DI+7]
        PUSH    DI
        MOV     DI,AX
        MOV     AL,SPACE                ;WITH LEADING SPACES,
        CALL    PRINTDD                 ;SHOW FILE SIZE IN BYTES
        POP     DI
        POP     SI
SHOW8A:
        MOV     CX,2
        CALL    SPOUT                   ;PRINT 2 SPACES
        MOV     AX,WORD PTR [DI+3]      ;GET PACKED DATE
        CALL    PRTDTE                  ;SHOW IT
        MOV     CX,2
        CALL    SPOUT                   ;PRINT 2 SPACES
        MOV     AX,WORD PTR [DI+1]      ;GET PACKED TIME
        CALL    PRTTME                  ;SHOW IT
        RET                             ;DONE
SHOW    ENDP

	IF 	LOWCASE
;************************************
; CONVERT CHAR. IN AL TO LOWER CASE *
;************************************
LC	PROC	NEAR
	CMP	AL,'A'
	JL	NOTUC
	CMP	AL,'Z'
	JG	NOTUC
	ADD	AL,'a'-'A'
NOTUC:
	RET
LC	ENDP
	ENDIF

;*******************************************
; SUBROUTINE - WRITES CX SPACES TO SCREEN  *
;*******************************************
SPOUT   PROC    NEAR
        JCXZ    SPOUT1
        MOV     AL,SPACE
        CALL    COUT
        DEC     CX
        JMP     SPOUT
SPOUT1: RET
SPOUT   ENDP

;****************************************
; SUBROUTINE - PAUSES AT END OF SCREEN  *
;****************************************
WAITCR  PROC    NEAR
	CMP	BYTE PTR ISDEV,0  ;ARE WE WRITING TO A DEVICE?
	JE	FILEOUT		;NO
	MOV	DX,OFFSET MSG3
	CALL	ERRORMSG	;PROMPT USER FOR OK TO SHOW NEXT SCREEN
        CALL    CLRCO           ;CLEAR TYPE-AHEAD
        CALL    CIN             ;GET A CHAR.
        CALL    CLRSCR          ;CLEAR SCREEN
        RET
FILEOUT:
	CALL	CRLF		;FILE OUTPUT, JUST SHOW CR/LF TO SEPARATE SCREENS
	RET
WAITCR  ENDP

;********************************************
; ROUTINE TO CLEAR SCREEN, HOME CURSOR:     *
; (MAY HAVE TO CHANGE FOR NON-IBM MACHINES) *
;********************************************
CLRSCR  PROC    NEAR
        PUSH    BX
        IF      IBM
        MOV     DX,0
        CALL    MOVEXY                  ;MOVE TO HOME POSITION
        MOV     AL,BYTE PTR VMODE  	;GET CURRENT VIDEO MODE
        MOV     AH,0
        INT     BIOS                    ;RESET MODE (CLEARS SCREEN)
        ELSE
        MOV     AL,FF                   ;NON-IBM CLEAR SCREEN
        CALL    COUT                    ;USE FF (WILL WORK ON MOST TERMINALS)
        ENDIF
        POP     BX
        RET
CLRSCR  ENDP

;*****************************************
; CURSOR POSITIONING ROUTINE (USES BIOS) *
;*****************************************
MOVEXY  PROC    NEAR                    ;MOVE TO ROW (DH) AND COLUMN (DL)
        MOV     AH,2
        MOV     BH,BYTE PTR VPAGE       ;VIDEO PAGE #
        MOV     BL,0                    ;COLOR (DON'T CHANGE)
        INT     BIOS                    ;MOVE CURSOR
        RET
MOVEXY  ENDP

;**************************************************
; DISPLAY NUMBER OF FILES, SPACE USED, SPACE FREE *
;**************************************************
SHOW_INFO PROC NEAR
	MOV	AL,BYTE PTR SFLAG
	OR	AL,BYTE PTR LFLAG	;S OR L FLAG SET?
	JNE	INFO0A			;YES, GO AHEAD
	RET				;NO, SUPPRESS DISPLAY
INFO0A:
        MOV     BX,WORD PTR NUMFILES    ;GET NUMBER OF FILES
	OR	BX,BX			;> 0?
	JNE	INFO0B			;YES, GO AHEAD
	RET
INFO0B:
        MOV     AL,0                    ;SUPPRESS LEADING 0'S
        MOV     CX,5                    ;FIELD WIDTH = 5
        CALL    DECOUT                  ;SHOW # FILES
	MOV	DX,OFFSET TXT1
	CALL	PRTSTR
        CMP     BYTE PTR LFLAG,0        ;L FLAG SET?
        JE      INFO1                   ;NO, SHORT DISPLAY
        MOV     DI,WORD PTR USED+2
        MOV     SI,WORD PTR USED        ;GET SPACE USED IN SI:DI
        MOV     AL,0                    ;SUPPRESS LEADING 0'S
        CALL    PRINTDD                 ;SHOW SPACE USED
	MOV	DX,OFFSET TXT2
	CALL	PRTSTR
        JMP     SHORT INFO2
INFO1:                                  ;SHORT DISPLAY
        MOV     AX,WORD PTR USED
        MOV     DX,WORD PTR USED+2      ;GET AMT. USED IN DX:AX
        CALL    MAKEK                   ;CONVERT TO K
        MOV     AL,0                    ;SUPPRESS LEADING 0'S
        MOV     CX,5                    ;FIELD WIDTH = 5
        CALL    DECOUT                  ;SHOW AMT. USED
	IF	LOWCASE
	MOV	AL,'k'
	ELSE
        MOV     AL,'K'
	ENDIF
        CALL    COUT                    ;SHOW LETTER K
INFO2:
        MOV     AH,CURRENT_DISK
        INT     DOS                     ;GET CURRENT DISK
        PUSH    AX                      ;SAVE IT
        MOV     DL,BYTE PTR DRIVE       ;DL = DRIVE WE SPECIFIED
        CMP     DL,0                    ;CURRENT DISK?
        JE      NOCHANGE                ;YES, NO NEED TO CHANGE
        INC     AL
        CMP     AL,DL                   ;SAME AS CURRENT DISK?
        JE      NOCHANGE                ;YES, NO NEED TO CHANGE
        DEC     DL                      ;MAKE 0=A, ETC.
        MOV     AH,SELECT_DISK
        INT     DOS                     ;SELECT DISK
NOCHANGE:
        MOV     DL,0                    ;NOW USING CURRENT DISK,
        MOV     AH,GET_FREE_SPACE
        INT     DOS                     ;GET FREE SPACE
        MUL     BX                      ;COMPUTE # SECTORS FREE
        PUSH    DX                      ;SAVE HI WORD
        MUL     CX                      ;MULTIPLY LO WORD OF SECTOR COUNT
                                        ;BY BYTES/SECTOR
        MOV     WORD PTR LOSIZE,AX      ;SAVE LO WORD OF FREE SPACE
        POP     BX                      ;GET HI WORD OF SECTOR COUNT
        PUSH    DX                      ;SAVE CARRY FROM LO WORD MULT.
        MOV     AX,BX                   ;MULTIPLICAND IN AX
        MUL     CX                      ;MULTIPLY HI WORD OF SECTOR COUNT
                                        ;TIMES BYTES/SECTOR
        POP     BX                      ;GET CARRY FROM LO WORD
        ADD     AX,BX                   ;ADD IT
        MOV     DX,AX                   ;DX = HI WORD OF FREE SPACE
        MOV     AX,WORD PTR LOSIZE      ;AX = LO WORD OF FREE SPACE
        CMP     BYTE PTR LFLAG,0        ;L FLAG SET?
        JE      INFO3                   ;NO, SHORT DISPLAY
        MOV     DI,DX                   ;LONG DISPLAY,
        MOV     SI,AX                   ;MOVE AMT. FREE TO DI:SI
        MOV     AL,0                    ;SUPPRESS LEADING 0'S
        CALL    PRINTDD                 ;SHOW AMT. FREE
	MOV	DX,OFFSET TXT3
	CALL	PRTSTR
        JMP     SHORT INFO4
INFO3:                                  ;SHORT DISPLAY
	CMP	DX, K
	JGE	BIG_DISK		;IF >65 MEGABYTES

        MOV     CX,K                    ;CX = 1 K
        DIV     CX                      ;DIVIDE TO GET KBYTES FREE
	MOV	DX, 0
	JMP	SHORT INFO3A

BIG_DISK:
	MOV	CX, 10*K
	DIV	CX			;DIVIDE BY 10K
	MOV	BX,10
	MUL	BX			;GET KBYTES FREE IN DX:AX

INFO3A:
	PUSH	AX			;SAVE LO WORD OF SPACE FREE
        MOV     AL,SPACE
        CALL    COUT                    ;WRITE SPACE
        MOV     AL,'('
        CALL    COUT                    ;WRITE PAREN
	POP	SI			;RESTORE LO WORD OF SPACE FREE
        MOV     DI,DX                   ;LONG DISPLAY,
        MOV     AL,0                    ;SUPPRESS LEADING 0'S
        CALL    PRINTDD                 ;SHOW AMT. FREE
	IF	LOWCASE
	MOV	AL,'k'
	ELSE
	MOV	AL,'K'
	ENDIF
	CALL	COUT
	MOV	DX,OFFSET TXT4
	CALL	PRTSTR
INFO4:
        CALL    CRLF                    ;SHOW CR/LF
        POP     DX
        MOV     AH,SELECT_DISK          ;RESET DEFAULT DISK
        INT     DOS
        RET                             ;DONE
SHOW_INFO ENDP

;***************************************************
; MAKEK = TAKE QUAD # IN DX:AX, CONVERT TO K IN BX *
;***************************************************
MAKEK   PROC    NEAR
        MOV     BX,K
        DIV     BX                      ;DIVIDE TO GET SIZE IN K
        MOV     BX,AX                   ;QUOTIENT IN BX
        CMP     DX,0                    ;MODULUS>0?
        JE      NOROUND
        INC     BX                      ;IF SO, ROUND UP
NOROUND:
        RET
MAKEK   ENDP

;       The following two routines are adapted from SDIR Version
;       2.4, by Ted Reuss (modified from a program by John Chapman), on
;       PC-SIG Volume 185.

        SUBTTL  PRINT DATE, TIME & # FILES ROUTINES
        PAGE

; PC-DOS packed date   <yyyyyyym mmmddddd>
P_DTE       RECORD  P_YR:7,P_MO:4,P_DY:5
; PC-DOS packed time   <hhhhhmmm mmmsssss>
P_TME       RECORD  P_HR:5,P_MI:6,P_2S:5

PRTDTE  PROC    NEAR    ;Print packed date in AX as MM/DD/YY
        OR      AX,AX
        JNZ     K1              ;If date <> 0
        MOV     CX,8
        CALL    SPOUT            ;Print 8 spaces
        RET
K1:     PUSH    AX
        AND     AX,MASK P_MO    ;Mask the month,
        MOV     CL,P_MO         ; set shift count,
        SHR     AX,CL           ; right justify, &
        CALL    PRTBCD          ; print it.
        MOV     AX,'/'
        CALL    COUT
        POP     AX
        PUSH    AX
        AND     AX,MASK P_DY    ;Mask the day &
        CALL    PRTBCD          ; print it.
        MOV     AX,'/'
        CALL    COUT
        POP     AX
        AND     AX,MASK P_YR    ;Mask the year,
        MOV     CL,P_YR         ; set shift count,
        SHR     AX,CL           ; right justify,
        ADD     AX,80           ; add in year bias, &
                                ; print it.
PRTBCD: AAM                     ;Convert AL to BCD
        OR      AX,'00'         ;Convert to ASCII
        PUSH    AX
        MOV     AL,AH
        CALL    COUT            ;High order digit
        POP     AX
        CALL    COUT            ;Low order digit
        RET
PRTDTE  ENDP

PRTTME  PROC    NEAR            ;Print packed time in AX as HH:MM
        OR      AX,AX
        JNZ     L1              ;if date<>0
        MOV     CX,5
        CALL    SPOUT           ;Print 5 spaces
        RET
L1:     PUSH    AX
        AND     AX,MASK P_HR    ;Mask the hours,
        MOV     CL,P_HR         ; set shift count,
        SHR     AX,CL           ; right justify, &
        CALL    PRTBCD          ; print it.
        MOV     AX,':'
        CALL    COUT
        POP     AX
        AND     AX,MASK P_MI    ;Mask the minutes,
        MOV     CL,P_MI         ; set shift count,
        SHR     AX,CL           ; right justify, &
        CALL    PRTBCD          ; print it.
        RET
PRTTME  ENDP

CODE	ENDS
        END     ENTRY

```
{% endraw %}

## MV.ASM

{% raw %}
```
        TITLE MV - MSDOS FILE MOVE UTILITY
        PAGE 55,132
;***************************************************************************
;       THIS PROGRAM RENAMES A FILE OR DIRECTORY, OR MOVES ONE OR MORE FILES
;       OR DIRECTORIES BETWEEN DISKS OR DIRECTORIES.
;
;       USAGE (afn = ambiguous file name, ufn = unambiguous file name,
;              dir = directory):
;
;               MV ufn1 ufn2    - renames or moves ufn1 to ufn2.
;
;               MV afn1 afn2 ... dir  - moves one or more files into dir.
;
;               MV -R dir1 dir2  if dir2 doesn't exist, renames or moves
;                                 dir1 to dir2.
;                                 (note: DOS 2 requires that renaming a direc-
;                                 tory be done by creating dir2, moving all
;                                 files from dir1 into it, then deleting dir1).
;
;                               - if dir2 exists, makes dir1 a subdirectory
;                                 of it.
;
;       SWITCHES (OPTIONAL):
;
;		I  prompts before overwriting files
;
;		R  allows recursively moving directories.
;
;               V  turns on "verbose" mode (shows name of each file as it
;                      is moved).
;***************************************************************************
;       BY: JON DART
;           3012 HAWTHORN ST.,
;           SAN DIEGO, CA 92104
;***************************************************************************
;   TO BUILD MV.EXE:
;	MASM MV,MV,NUL,NUL
;	LINK MV,MV,NUL,ASM
;	EXEPACK MV.EXE MV.NEW
;	DEL MV.EXE
;	REN MV.NEW=MV.EXE
;***************************************************************************
;	Version 3.3, 30-Mar-89 moves with root directory as destination
;				now handled correctly.  Also a bug fix in
;				procedure SETUP_SRC_DIR.
;	Version 3.2, 19-Jan-89 fix to FIXPATH; relinked
;	Version 3.1, 03-Nov-88 disallows MV afn foo if foo doesn't exist.
;	Version 3.0, 24-Sep-88 bug fix in FIXPATH; relinked
;	Version 2.5, 09-Feb-88 assembles under MASM 5.0
;       Version 2.4, 30-May-87 fixes a bug causing file deletion when source
;                              is in current directory and dest is omitted.
;	Version 2.3, 28-Nov-86 fixes bug involving relative directory moves
;			       (e.g. mv -r ..\foo .)
;	Version 2.2, 24-Oct-86 switch parser allows -rvi as well as -r -v -i
;	Version 2.1, 06-Jul-86 changes to memory alloc, allows hyphen for
;				switches, now assembles under masm 4.0
;	Version 2.0, 30-Jun-86 minor cleaning up, r and i switches added, c
;				switch removed
;       Version 1.9, 26-Apr-86 doesn't exit after user responds n to 
;			        overwrite msg.
;       Version 1.8, 31-Mar-86 more bug fixes (*sigh*)
;       Version 1.7, 29-Mar-86 bug fixes
;       Version 1.6, 24-Mar-86 allows multiple source files
;       Version 1.5, 25-Jan-86 adds check for identical source & dest
;       Version 1.4, 14-Jan-86 adds switches
;       Version 1.3, 12-Jan-86 adds recursion
;       Version 1.2, 01-Jan-86
;       Version 1.1, 01-Nov-85
;       Version 1.0, 29-Sep-85
;***************************************************************************

	DOSSEG
	.MODEL	SMALL

PATHSIZE EQU    65                      ;MAX. SIZE OF DOS PATHNAME, +1
BUFSIZE EQU     32*1024                 ;SIZE OF COPY BUFFER
MAXLEVEL EQU    12                      ;MAX NESTING LEVEL FOR DIRECTORIES
MAXARGS EQU     40                      ;MAXIMUM # OF COMMAND LINE ARGUMENTS
TRUE    EQU     0FFH
FALSE   EQU     0
CONFIRM EQU     FALSE                   ;"CONFIRM BEFORE OVERWRITE" OPTION (DEFAULT VALUE)
RECURSE EQU	FALSE			;"RECURSE" OPTION (DEFAULT VALUE)
VERBOSE EQU     FALSE                   ;"VERBOSE" OPTION (DEFAULT VALUE)
M       EQU     BYTE PTR 0[BX]
BIT$DIR EQU     00010000B               ;BIT IN ATTRIBUTE FOR DIRECTORY
BIT$RO  EQU     00000001B               ;BIT IN ATTRIBUTE FOR WRITE-PROTECT

        .XLIST
        INCLUDE ASCII.DEF
        INCLUDE MSDOS2.DEF
	INCLUDE MACROS.DEF
        .LIST

MVINFO  STRUC
NEWDIR  DW      1 DUP (?)               ;FLAG, =1 IF NEW DIRECTORY CREATED
SRCTYPE DB     2 DUP (?)                ;TYPE OF SOURCE (0 IF UFN)
DESTTYPE DB     2 DUP (?)		;TYPE OF DEST (0 IF UFN)
ARG1    DB      PATHSIZE DUP (?)        ;FIRST ARGUMENT (SOURCE)
ARG2    DB      PATHSIZE DUP (?)        ;SECOND ARGUMENT (DEST)
ARG2A   DB      PATHSIZE DUP (?)        ;SOURCE PREFIX + DEST
SSPATH  DB      PATHSIZE DUP (?)        ;SOURCE SEARCH PATH
SPREFIX DB      PATHSIZE DUP (?)        ;SOURCE LEAD-IN PATH
DSPATH  DB      PATHSIZE DUP (?)        ;DEST SEARCH PATH
                                        ;(USED ONLY AS SCRATCH AREA)
DPREFIX DB      PATHSIZE DUP (?)        ;DEST LEAD-IN PATH
SRCNAME DB      PATHSIZE DUP (?)        ;UNAMBIGUOUS SOURCE NAME
DESTNAME DB     PATHSIZE DUP (?)        ;UNAMBIG. DEST NAME
DTA     DB      128 DUP (?)             ;DTA FOR SEARCH FN.
MVINFO  ENDS
MVSTRUCSIZE EQU 9*PATHSIZE+135          ;SIZE OF STRUCTURE

	.DATA
;       INITIALIZED DATA STORAGE:
;
MSG1    DB 'MV Version 3.3 by Jon Dart (30-Mar-89)',CR,LF,CR,LF
        DB 'USAGE (afn = ambiguous file name, ufn = unambiguous file name,'
        DB CR,LF
        DB '       dir = directory):',CR,LF,CR,LF
        DB 'MV ufn1 ufn2          move or rename ufn1 to ufn2.',CR,LF,CR,LF
        DB 'MV afn1 afn2 ... dir  move one or more files into dir.',CR,LF,CR,LF
        DB "MV -R dir1 dir2       if dir2 doesn't exist, move or rename"
        DB CR,LF
        DB '                      dir1 to dir2.',CR,LF,CR,LF
        DB '                      if dir2 exists, make dir1 a subdirectory'
        DB CR,LF
        DB '                      of it.',CR,LF,CR,LF
        DB 'SWITCHES (OPTIONAL):',CR,LF,CR,LF
        DB '-I   prompt before overwriting files.',CR,LF,CR,LF
	DB '-R   allow recursive moving of directories.',CR,LF,CR,LF
        DB '-V   echo file names as they are moved.',CR,LF
        DB 0
MSG2    DB      ': file not found.',CR,LF,0
MSG3    DB      'Source and dest are incompatible.',CR,LF,0
MSG4    DB      ' exists. Overwrite [Y or N]? ',0
MSG5    DB      ': open failed.',CR,LF,0
MSG6    DB      ': file is R/O. Are you SURE [Y or N]? ',0
MSG7	DB	': directory.',CR,LF,0
MSG8    DB      ': write error.',CR,LF,0
MSG9    DB      '; read error.',CR,LF,0
MSG10   DB      ': write error (probably disk full).',CR,LF,0
MSG11   DB      ': rename failed.',CR,LF,0
MSG12   DB      ": can't create.",CR,LF,0
MSG13   DB      ": can't remove.",CR,LF,0
MSG14   DB      "Directories nested too deep.",CR,LF,0
; MSG15   DB      "Insufficient memory for buffers.",CR,LF,0
MSG16   DB      ": Illegal switch.",CR,LF,0
MSG17   DB      "Error: source and dest are identical.",CR,LF,0
MSG18   DB      "Too many arguments.",CR,LF,0
SWLIST  DB	'IRV',0		;LIST OF LEGAL SWITCHES

	.STACK
        DB      512 DUP (?)

	.DATA?
;	UNINITIALIZED DATA AND BUFFER AREAS       

RBASE   DW 	1 DUP (?)               ;POINTER TO MVSTRUC IN RSTACK
LEVEL   DW      1 DUP (?)               ;RECURSION LEVEL
SRCDRIVE  DW    1 DUP (?)               ;SOURCE DRIVE (0 = DEFAULT)
DESTDRIVE  DW   1 DUP (?)               ;DEST DRIVE (0 = DEFAULT)
INHANDLE DW	1 DUP (?)               ;INPUT FILE HANDLE
OUTHANDLE DW	1 DUP (?)               ;OUTPUT FILE HANDLE
IFLAG   DW	1 DUP (?)               ;CONFIRM FLAG
RFLAG	DW	1 DUP (?)		;RECURSIVE FLAG
VFLAG   DW	1 DUP (?)               ;VERBOSE FLAG
CMDTAIL DB	128 DUP (?)             ;STORAGE FOR COMMAND TAIL
DEST_DTA DB     128 DUP (?)             ;HOLDS INFO ON DEST, RETURNED FROM DOS
                                        ;FN 4E.
NUMARGS DW      1 DUP (?)               ;NUMBER OF ARGUMENTS ON COMMAND LINE
ARGPTRS DW      MAXARGS DUP (?)         ;POINTERS TO START OF ARGUMENTS
BUFFER  DB      BUFSIZE DUP (?)         ;FILE XFER BUFFER
RSTACK  MVINFO  MAXLEVEL DUP (<>)	;RECURSION STACK

        PAGE +
	.CODE

EXTRN   CPYCNT:NEAR,UC:NEAR,UCSTR:NEAR,CRLF:NEAR,ERRORMSG:NEAR,COUT:NEAR
EXTRN   CIN:NEAR,CLRCO:NEAR,SKIPSP:NEAR,TYPTX:NEAR,ERRORMSG:NEAR,CLRCO:NEAR
EXTRN   CMDSRC:NEAR,FIXPATH:NEAR,GETYORN:NEAR,UNLINK2:NEAR
EXTRN   TYPE_DIR:ABS,TYPE_AFN:ABS,TYPE_UFN:ABS,TYPE_DSP:ABS,TYPE_DRV:ABS
EXTRN   TYPE_UNK:ABS

;*********************
;* MACRO DEFINITIONS *
;*********************

ADDR    MACRO   REG,OFFST               ;COMPUTE ADDRESS OFFSET FROM BASE REGISTER (BX)
        MOV     REG,BX
        ADD     REG,OFFST
        ENDM

ERROR   MACRO   ERRNUM                  ;SHOW ERROR MESSAGE
        MOV     DX,OFFSET DGROUP:MSG&ERRNUM
	CALL	PRTERR
        ENDM

COPYPATH MACRO  SOURCE,DEST             ;COPY PATHNAME FROM SOURCE TO DEST
        ADDR    SI,SOURCE
        ADDR    DI,DEST
        MOV     CX,PATHSIZE
        CALL    CPYCNT
        ENDM

;**********************
; PROGRAM ENTRY POINT *
;**********************
ENTRY:
        TEST_DOS2                       ;TEST FOR DOS 2.0, EXIT IF DOS 1
	MOV	AX,DGROUP
	MOV	ES,AX
MEMOK:
        MOV     BX,80H		      	;POINT TO BYTE COUNT FOR COMMAND LINE
        CMP     [BX],BYTE PTR 0
        JE      USEMSG                  ;IF NO COMMAND TAIL
        PUSH    BX
        MOV     DL,[BX]
        MOV     DH,0
        ADD     BX,DX
        INC     BX
        MOV     [BX],BYTE PTR 0         ;PUT 0 BYTE AT END OF COMMAND LINE
        POP     BX
        INC     BX
        CALL    UCSTR                   ;CONVERT COMMAND LINE TO UPPER CASE
        CALL    SKIPSP                  ;SKIP LEADING SPACES
        JNC     L_2                     ;IF SOMETHING ON LINE
USEMSG: ERROR   1
	MOV	AL,1			;SET ERROR CODE
        JMP     EXIT2
L_2:
        MOV     SI,BX
        MOV     DI,OFFSET ES:CMDTAIL
        MOV     CX,128
        CALL    CPYCNT                  ;SAVE COMMAND TAIL
        MOV     AX,ES
        MOV     DS,AX                   ;SET DATA SEG TO VARIABLE AREA
        MOV     BYTE PTR DS:IFLAG,CONFIRM  ;SET CONFIRM FLAG DEFAULT
        MOV     BYTE PTR DS:VFLAG,VERBOSE  ;SET VERBOSE FLAG DEFAULT
	MOV	BYTE PTR DS:RFLAG,FALSE	;SET RECURSIVE FLAG DEFAULT
	MOV	WORD PTR DS:LEVEL,0	;SET RECURSION LEVEL = 0
        MOV     BYTE PTR DS:SRCDRIVE,0  ;SET SOURCE DRIVE DEFAULT
        MOV     BYTE PTR DS:DESTDRIVE,0 ;SET DEST DRIVE DEFAULT
;***************************
; COLLECT SWITCHES, IF ANY *
;***************************
        MOV     BX,OFFSET CMDTAIL       ;POINT TO COMMAND TAIL
NEXTSW:
        CALL    SKIPSP
        JB      USEMSG                  ;IF NOTHING ON LINE BESIDES SWITCHES
        CMP     BYTE PTR [BX],'/'       ;SWITCH SPECIFIED?
        JE	GOTSW			;YES
	CMP	BYTE PTR [BX],'-'	;CHECK FOR HYPHEN, TOO
	JNE	NOSWITCH
GOTSW:
        INC     BX                      ;SKIP OVER SWITCH CHARACTER
        CALL    SKIPSP                  ;SKIP LEADING BLANKS
        JB      USEMSG                  ;IF NOTHING
SWLOOP:
        CALL    UC                      ;MAKE SWITCH UPPER CASE
	PUSH	DS
	PUSH	BX
	PUSH	AX
	MOV	AX,DGROUP
	MOV	DS,AX
	POP	AX
	MOV	BX,OFFSET SWLIST
	CALL	CMDSRC			;SEARCH LIST OF VALID SWITCHES
	POP	BX
	POP	DS
	MOV	AH,0
	ADD	AX,AX			;NOT FOUND IN LIST?
	JZ	BADSWITCH		;NO.
	MOV	SI,OFFSET IFLAG - 2
	ADD	SI,AX			;POINT TO FLAG
	NOT	WORD PTR [SI]		;1'S COMPLEMENT
	INC	BX
	MOV	AL,BYTE PTR [BX]	;GET NEXT CHAR. FROM LINE
	CMP	AL,SPACE
	JE	NEXTSW			;IF SPACE, LOOK FOR - OR FILENAME
	CMP	AL,TAB
	JE	NEXTSW			;IF TAB, LOOK FOR - OR FILENAME
	JMP	SWLOOP			;ELSE ASSUME THIS IS A SWITCH CHAR.
BADSWITCH:
	MOV	AL,BYTE PTR [BX]
        CALL    COUT                    ;DISPLAY BAD CHAR.
        ERROR   16                      ;ILLEGAL SWITCH
	MOV	AL,16			;SET ERROR CODE
        JMP     EXIT2
;************************************************************
; SCAN THE COMMAND LINE AND STORE POINTERS TO ALL ARGUMENTS *
;************************************************************
NOSWITCH:
        MOV     CX,0                    ;CX COUNTS # OF ARGUMENTS
        MOV     SI,OFFSET DS:ARGPTRS    ;POINT TO ARG POINTER TABLE
SAVEARG:
        INC     CX                      ;BUMP ARGUMENT COUNT
        CMP     CX,MAXARGS
        JG      TOOMANY                 ;IF TOO MANY
        MOV     DS:[SI],BX              ;SAVE POINTER TO ARG
        ADD     SI,2                    ;ADVANCE TO NEXT TABLE ENTRY
CNTARGS:
        MOV     AL,DS:[BX]              ;GET CHAR. FROM COMMAND LINE
        CMP     AL,0
        JE      ENDLINE                 ;IF END OF LINE
        COMPLIST <SPACE,TAB>,NEXTARG    ;SEE IF SPACE OR TAB
        INC     BX
        JMP     CNTARGS                 ;LOOP TILL DELIMITER FOUND
NEXTARG:
        CALL    SKIPSP                  ;SKIP SPACES AND TABS
        JNB     SAVEARG                 ;IF NOT EOL, BACK TO TOP OF LOOP
ENDLINE:
        CMP     CX,0                    ;CHECK ARGUMENT COUNT
        JE      NOARGS                  ;IF NO ARGS
        CMP     CX,1
        JG      ARGSOK                  ;IF >=2 ARGS
        MOV     DS:[SI],BX              ;EXACTLY ONE ARGUMENT, SO
        INC     CX                      ;MAKE A DUMMY (NULL) 2ND ARGUMENT
        JMP     SHORT ARGSOK
NOARGS:
        JMP     USEMSG                  ;ELSE USE MESSAGE
TOOMANY:
        ERROR   18                      ;TOO MANY ARGUMENTS (PRETTY UNLIKELY)
	MOV	AL,18			;SET ERROR CODE
        JMP     EXIT2
;************************************
;* COLLECT THE DESTINATION PATHNAME *
;************************************
ARGSOK: MOV     WORD PTR DS:NUMARGS,CX  ;SAVE NUMBER OF ARGUMENTS
        DEC     CX                      ;NUMBER OF ARGS - 1
        ADD     CX,CX                   ;TIMES TWO
        MOV     SI,OFFSET DS:ARGPTRS
        ADD     SI,CX                   ;POINT TO ADDR. OF LAST ARGUMENT (DEST)
        MOV     BX,DS:[SI]              ;PUT ADDR. INTO BX
        MOV     DI,OFFSET RSTACK.ARG2   ;POINT TO STORAGE FOR DEST
        MOV     AL,[BX+1]
        CMP     AL,':'                  ;CHECK FOR DEST DRIVE SPEC
        JNE     GETLAST                 ;IF NONE
        MOV     AL,[BX]                 ;DRIVE SPECIFIED, GET DRIVE LETTER
        SUB     AL,'A'-1                ;MAKE BINARY
        MOV     BYTE PTR DS:DESTDRIVE,AL   ;SAVE DRIVE
GETLAST: MOV    AL,[BX]                 ;GET A CHAR. FROM CMD LINE
        COMPLIST <0,SPACE,TAB>,ENDARG2  ;IF DELIMITER
        STOSB                           ;NOT DELIMITER, STORE IT
        INC     BX                      ;BUMP POINTER
        JMP     GETLAST                 ;LOOP
ENDARG2:
        MOV     AL,0
        STOSB                           ;END DEST W. 0
;***********************************************************
;* LOOP, TAKING ONE SOURCE AT A TIME AND MOVING IT TO DEST *
;***********************************************************
        MOV     CX,WORD PTR DS:NUMARGS  ;GET NUMBER OF ARGS AGAIN
        DEC     CX                      ;-1
        MOV     SI,OFFSET DS:ARGPTRS    ;POINT TO POINTER TABLE
MOVE1ARG:
        MOV     BX,DS:[SI]              ;GET POINTER TO ARG
        PUSH    SI
        PUSH    CX
        CALL    MOVEARG                 ;MOVE IT
        POP     CX
        POP     SI
        ADD     SI,2                    ;ADVANCE TO NEXT ARG POINTER
        LOOP    MOVE1ARG                ;LOOP TILL NO MORE ARGS TO MOVE
	MOV	AL,0			;ERROR CODE 0 MEANS OK
        JMP     EXIT2

;**********************************
;* MOVE 1 SOURCE ARGUMENT TO DEST *
;**********************************
MOVEARG PROC   NEAR
        MOV     BYTE PTR DS:SRCDRIVE,0  ;SET SOURCE DRIVE DEFAULT
        MOV     DI,OFFSET RSTACK.ARG1   ;COLLECT SOURCE
        MOV     AL,[BX+1]
        CMP     AL,':'                  ;CHECK FOR SOURCE DRIVE SPEC
        JNE     GETARG
        MOV     AL,[BX]                 ;GET DRIVE LETTER
        SUB     AL,'A'-1                ;MAKE BINARY
        MOV     BYTE PTR DS:SRCDRIVE,AL ;SAVE SOURCE DRIVE
GETARG: MOV     AL,[BX]                 ;COPY FROM [BX] TO [DI] UNTIL DELIMITER
        COMPLIST <0,SPACE,TAB>,ENDARG
        STOSB
        INC     BX
        JMP     GETARG
ENDARG: MOV     AL,0
        STOSB                           ;END ARG1 W. ZERO
        MOV     WORD PTR DS:RBASE,OFFSET RSTACK   ;SAVE OFFSET TO RSTACK
        CALL    MOVEIT                  ;DO THE STUFF
        RET
MOVEARG ENDP

        PAGE +
;********************************************************************
; THIS IS THE MOVE SUBROUTINE. IT ASSUMES THAT ARG1 AND ARG2 ARE
; SET UP PROPERLY IN THE RECURSION STACK AREA, AND THAT "RBASE" POINTS
; TO THE START OF THE DATA STRUCTURE FOR THIS RECURSION LEVEL.
;
MOVEIT  PROC    NEAR
        MOV     BX,WORD PTR DS:RBASE    ;GET BASE ADDR. (POINTER TO MVINFO)
        CALL    SETUP                   ;PARSE ARGUMENTS, CHECK FOR ERRORS
        JNC     NOARGERR                ;IF OK
        JMP     EXIT2                   ;QUIT IF ERROR
;******************************************
; SEE IF ANYTHING MATCHES THE SOURCE SPEC *
;******************************************
NOARGERR:
        ADDR    DX,SSPATH               ;POINT TO SEARCH PATH
        MOV     CX,31H                  ;SET SEARCH ATTRIBUTES
        MOV     AH,FIND_FIRST
        INT     DOS                     ;SEARCH FOR 1ST MATCH
        JNC     SRCOK                   ;OK IF SOMETHING FOUND
        ADDR    DX,ARG1
        CALL    ERRORMSG                ;ELSE SHOW ARGUMENT
        ERROR   2                       ;SAY IT DOESN'T EXIST
	MOV	AL,2			;SET ERROR CODE
        JMP     EXIT2
;**************************************
; CREATE DEST DIRECTORY, IF NECESSARY *
;**************************************
SRCOK:  CMP     WORD PTR [BX].NEWDIR,1  ;CHECK NEW DIRECTORY FLAG
        JNE     GOTONE                  ;IF NOT SET
        ADDR    DX,ARG2A                ;POINT TO DEST NAME
        MOV     AH,MKDIR
        INT     DOS                     ;CREATE NEW DIRECTORY
        JNB     GOTONE                  ;IF OK
        ADDR    DX,ARG2A                ;IF CAN'T CREATE,
        CALL    ERRORMSG                ;SHOW DIRECTORY NAME
        ERROR   12                      ;AND ERROR MSG.
	MOV	AL,12			;SET ERROR CODE
        JMP     EXIT2                   ;EXIT 2 DOS
;**************
; TOP OF LOOP *
;**************
GOTONE:
        CALL    BUILD_NAMES             ;MAKE UNAMBIG. SOURCE AND DEST NAMES
        JNC     NOSKIP
        JMP     NEXTFILE                ;IF SOURCE IS "." OR ".." OR = DEST
NOSKIP:
        CMP     BYTE PTR DS:VFLAG,TRUE  ;CHECK VERBOSE FLAG
        JNE     QUIET                   ;IF QUIET MODE
        ADDR    DX,SRCNAME              ;NOT QUIET, SHOW VERBIAGE
        CALL    ERRORMSG
        CALL    TYPTX
        DB      ' -->',SPACE+200Q
        ADDR    DX,DESTNAME
        CALL    ERRORMSG
        CALL    CRLF
QUIET:
        TEST    [BX].DTA+21,BIT$DIR     ;IS SOURCE A DIRECTORY?
        JZ      CHKDRIVES               ;NO
;***********************************************
; IF SOURCE IS A DIRECTORY, RECURSIVELY MOVE IT*
;***********************************************
	CMP	BYTE PTR DS:RFLAG,TRUE	;R FLAG SET?
	JNE	NEXTFILE		;NO, SKIP OVER DIRECTORY
        CMP     WORD PTR DS:LEVEL,MAXLEVEL-1 ;ARE WE AT MAX LEVEL?
        JL      NOTMAX                  ;NO
        ERROR   14                      ;YES, TOO DEEP
	MOV	AL,14			;SET ERROR CODE
        JMP     EXIT2
NOTMAX:
        COPYPATH SRCNAME,(ARG1+MVSTRUCSIZE)  ;COPY SOURCE DIRECTORY TO ARG1 AT NEXT LEVEL
        COPYPATH DESTNAME,(ARG2+MVSTRUCSIZE) ;COPY DEST NAME TO ARG2 AT NEXT LEVEL
        PUSH    BX                      ;SAVE POINTER TO BASE
        INC     WORD PTR DS:LEVEL       ;INCREMENT RECURSION LEVEL
        ADD     WORD PTR DS:RBASE,MVSTRUCSIZE ;ADVANCE BASE POINTER
        CALL    MOVEIT                  ;MOVE THE DIRECTORY
        POP     BX                      ;RESTORE BASE POINTER
        DEC     WORD PTR DS:LEVEL       ;DECREMENT RECURSION LEVEL
        SUB     WORD PTR DS:RBASE,MVSTRUCSIZE  ;RESTORE BASE TO PREVIOUS LEVEL
        ADDR    DX,DTA
        MOV     AH,SET_DTA
        INT     DOS                     ;RESET DTA
        JMP     SHORT NEXTFILE          ;DO NEXT FILE
;*****************************************
; IF SOURCE IS A FILE, COPY OR RENAME IT *
;*****************************************
CHKDRIVES:
        MOV     AL,BYTE PTR DS:SRCDRIVE    ;GET SOURCE DRIVE
        CMP     AL,BYTE PTR DS:DESTDRIVE   ;COMPARE W. DEST..
        JNE     MOVEM
        CALL    RENAME_FILE             ;SAME DRIVE, JUST RENAME
	JNB	NEXTFILE
	JMP	EXIT2			;ERROR, EXIT TO DOS
MOVEM:  CALL    COPY_FILE               ;DIFFERENT DRIVE, COPY SOURCE TO DEST
	JNB	NEXTFILE
	JMP	EXIT2			;ERROR, EXIT TO DOS
;*****************
; BOTTOM OF LOOP *
;*****************
NEXTFILE:
        MOV     AH,FIND_NEXT
        INT     DOS                     ;FIND NEXT MATCH, IF ANY
        JC      NOMORE                  ;IF NONE
        JMP     GOTONE                  ;GOT ONE, BACK TO TOP OF LOOP
;**********************
; NO MORE FILES, DONE *
; *********************
NOMORE: MOV     AX,WORD PTR [BX].SRCTYPE    ;GET TYPE OF SOURCE
        CMP     AX,TYPE_DIR             ;DIRECTORY?
        JNE     JUSTCLOSE               ;NO
        ADDR    DX,ARG1                 ;YES, POINT TO NAME
        MOV     AH,RMDIR
        INT     DOS                     ;REMOVE IT
        JNB     JUSTCLOSE
        ADDR    DX,ARG1
        CALL    ERRORMSG
        ERROR   13                      ;COMPLAIN IF ERROR
        CALL    CLOSE2			;CLOSE OUTPUT FILE
	MOV	AL,13			;SET ERROR CODE
	JMP	EXIT2			;EXIT TO DOS
	
;**************
; NORMAL EXIT *
;**************
JUSTCLOSE:
	CALL	CLOSE2			;CLOSE OUTPUT FILE
	CALL	CLOSE1			;CLOSE INPUT FILE
        RET                             ;ALL DONE
MOVEIT  ENDP

        PAGE +
;*************************************************************************
; THIS PROCEDURE PARSES ARG1 AND ARG2 AND CHECKS FOR INCOMPATIBLE TYPES
; (E.G. "MV FOOBAR *.*").  IF SUCCESSFUL, IT SETS SSPATH = SOURCE SEARCH
; PATH, SPREFIX = SOURCE PREFIX, DSPATH = DEST SEARCH PATH (NOT USED),
; DPREFIX = DEST PREFIX, SRCTYPE = SOURCE TYPE DESTTYPE = DESTINATION TYPE.
; IT ALSO SETS "NEWDIR"=1 IF THE DESTINATION DIRECTORY MUST BE CREATED.
; ALL OF THESE VARIABLES ARE IN A STRUCTURE OF TYPE 'MVINFO' IN THE RECURSION
; STACK AREA (STARTING AT THE ADDRESS IN 'RBASE').
;
; ON RETURN, THE CARRY FLAG IS SET IF AN ERROR OCCURRED, AND AL HOLDS AN
; ERROR CODE KEYED TO THE ERROR MESSAGE NUMBER.
;
SETUP   PROC    NEAR
        MOV     BX,WORD PTR DS:RBASE    ;GET ADDR. OF DATA STRUCTURE
        MOV     WORD PTR [BX].NEWDIR,0  ;CLEAR "NEW DIRECTORY" FLAG
        ADDR    DX,DTA
        MOV     AH,SET_DTA
        INT     DOS                     ;SET DTA
        ADDR    SI,ARG1
        ADDR    DI,ARG2
        COMP_STRINGS                    ;COMPARE ARG1 AND ARG2
        JNE     NOTIDENT                ;IF NOT IDENTICAL
        ERROR   17                      ;ARG1 = ARG2, BAD NEWS
	MOV	AL,17
        STC
        RET
NOTIDENT:
        ADDR    CX,SSPATH
        ADDR    DX,SPREFIX
        PUSH    BX
        ADD     BX,ARG1
        CALL    FIXPATH                 ;PARSE SOURCE PATHNAME
        POP     BX
        CMP     AX,TYPE_UNK
        JNE     GOODPATH                ;IF APPARENTLY OK
        ADDR    DX,ARG1
        CALL    ERRORMSG
        ERROR   2                       ;NONEXISTENT PATHNAME, COMPLAIN
	MOV	AL,2
        STC
        RET
GOODPATH:
        MOV     WORD PTR [BX].SRCTYPE,AX     ;SAVE TYPE OF SOURCE
	CMP	AX,TYPE_DIR		     ;IS IT A DIRECTORY?
	JNE	RSET			     ;NO.
	CMP	BYTE PTR DS:RFLAG,TRUE	     ;R FLAG SET?
	JE	RSET			;IF OK
	ADDR	DX,ARG1			;SHOW NAME
	CALL	ERRORMSG
	ERROR	7			;COMPLAIN ABOUT DIRECTORY
	MOV	AL,7
	STC				;SIGNAL ERROR
	RET
RSET:
        ADDR    SI,ARG2			;GET POINTER TO DEST
PDEST:  PUSH	SI			;SAVE IT ON STACK
	MOV	DI, SI			;AND IN DI
SRCBS:  MOV     AX,[SI]                 ;FIND END OF DEST
        COMPLIST <0,SPACE,TAB>,GOTEND
        INC     SI
        JMP     SRCBS
GOTEND:
        DEC     SI
        CMP     [SI],BYTE PTR '\'       ;DOES DEST SPEC END W. BACKSLASH?
        JNE     NOBS                    ;J/NO, IT DOESN'T
	CMP	SI, DI			;IS DEST="\"?
	JE	NOBS			;J/YES, ROOT DIRECTORY, LEAVE IT ALONE
	CMP	BYTE PTR [SI-1],':'	;IS PREVIOUS CHAR ':'?
	JE	NOBS			;J/YES, ROOT DIRECTORY, LEAVE IT ALONE
        MOV     [SI],BYTE PTR 0         ;\ AT END AND NOT ROOT DIR, REMOVE IT
NOBS:   COPYPATH ARG2,ARG2A             ;MAKE ARG2A = ARG2
        ADDR    CX, DSPATH
        ADDR    DX, DPREFIX
	POP	SI			;GET POINTER TO ARG2 AGAIN
        PUSH    BX
        MOV     BX, SI
        CALL    FIXPATH                 ;PARSE DEST PATHNAME
        POP     BX
        MOV     WORD PTR [BX].DESTTYPE,AX       ;SAVE DEST TYPE
        CMP     AL,TYPE_AFN
        JE      BADDEST                 ;DEST CAN'T BE AFN
        CMP     AL,TYPE_UFN
        JNE     NOTUFN                  ;IF DEST TYPE IS UFN,
        CMP     WORD PTR DS:NUMARGS,2   ;BETTER HAVE ONLY 1 SOURCE
        JG      BADDEST
        CMP     WORD PTR DS:SRCTYPE,TYPE_AFN  ;AND SOURCE TYPE BETTER NOT BE AFN
        JNE     NOTUFN
BADDEST:
        ERROR   3
	MOV	AL,3
        STC
        RET
NOTUFN:
        COMPLIST <TYPE_DSP,TYPE_DRV,TYPE_DIR>,DESTDSP ;IF DEST IS DIR OR DRIVE
        CMP     AL,TYPE_UNK
        JNE     SHORT DESTOK            ;IF DEST EXISTS

DESTNX:
        MOV     AX,WORD PTR [BX].SRCTYPE  ;DEST DOESN'T EXIST
        CMP     AL,TYPE_DIR             ;IF SOURCE IS DIRECTORY,
        JE      DESTDIR			;MAKE DEST A DIRECTORY, TOO
	CMP	AL,TYPE_AFN 		;SOURCE NOT A DIRECTORY
	JE	BADDEST			;AFN IS BAD (E.G. MV *.* FOO)
	JMP	SHORT DESTOK		;OTHERWISE OK
DESTDIR:
        CALL    SETUP_DEST_DIR          ;MAKE DEST A DIRECTORY, TOO
        JMP     SHORT DESTOK
DESTDSP: MOV    AX,WORD PTR [BX].SRCTYPE  ;DEST IS DIRECTORY, DIR SPEC OR DRIVE
        CMP     AL,TYPE_DIR             ;IS SOURCE A DIRECTORY? -
        JNE     DESTOK                  ;- NO
        CALL    SETUP_SRC_DIR           ;- YES, SOURCE IS DIRECTORY, SET IT UP
        JB      ERRRET                  ;IF ERROR
        MOV     AX,WORD PTR [BX].DESTTYPE
        CMP     AX,TYPE_DIR             ;IS DEST A DIRECTORY? -
        JNE     DESTOK                  ;- NO
        CALL    SETUP_DEST_DIR          ;- YES, SET IT UP, TOO
;*******************************
; CHECK FOR INCOMPATIBLE TYPES *
;*******************************
DESTOK:
        MOV     CX,WORD PTR [BX].DESTTYPE    ;GET DEST TYPE
        MOV     AX,WORD PTR [BX].SRCTYPE     ;GET SOURCE TYPE
        CMP     AX,TYPE_DIR             ;IS SOURCE A DIRECTORY? -
        JNE     TYPEOK                  ;- NO, IT ISN'T
        CMP     CX,TYPE_DIR             ;- YES, SOURCE IS DIRECTORY,
        JE      TYPEOK                  ;DEST BETTER BE DIRECTORY
        CMP     CX,TYPE_DRV             ;OR DRIVE SPEC
        JE      TYPEOK
ERRRET:
        ERROR   3                       ;ELSE INCOMPATIBLE TYPE ERROR
	MOV	AL,3
	STC                             ;ERROR RETURN
        RET
TYPEOK: CLC                             ;NORMAL RETURN
        RET
SETUP   ENDP

;**********************************************
; MOVE IS FROM DIR TO DIR, DIR SPEC OR DRIVE
; BUILD FULL DEST PATHNAME (IN ARG2A) AND CHECK
; ITS TYPE.  (SETS CARRY ON ERROR)
;
SETUP_SRC_DIR PROC NEAR
        COPYPATH ARG2,DSPATH            ;COPY DEST DIRECTORY OR DRIVE SPEC TO
                                        ;DEST PATH (USE AS SCRATCH AREA)
        DEC     DI                      ;BACK UP OVER NULL
        MOV     AX,WORD PTR [BX].DESTTYPE
        CMP     AX,TYPE_DIR             ;SEE IF DEST IS DIRECTORY
        JNE     NOTDIR                  ;NOPE
        MOV     BYTE PTR [DI],'\'       ;YES, ADD BACKSLASH TO DEST NAME
        INC     DI
        DEC     CX
NOTDIR: ADDR    SI,ARG1                 ;POINT TO SOURCE DIRECTORY NAME
        CMP     BYTE PTR [SI+1],':'     ;DRIVE SPECIFIED? -
        JNE     NODRV                   ;- NO IT WASN'T
        ADD     SI,2                    ;- YES, IT WAS, SKIP IT
NODRV:
;	skip to the last element in the source path
	MOV	DX, SI			;SAVE START OF SOURCE IN DX
STRIP_PATH:
	CMP	BYTE PTR [SI],0		;END OF SOURCE?
	JE	END_OF_SRC		;J/YES
	CMP	BYTE PTR [SI],'\'	;BACKSLASH IN SOURCE?
	JNE	NEXT_CHAR		;J/NO, KEEP SEARCHING
	MOV	DX, SI			;SAVE LOCATION OF BACKSLASH
NEXT_CHAR:
	INC	SI
	JMP	STRIP_PATH
END_OF_SRC:
	MOV	SI, DX			;POINT TO LAST \ OR START OF STRING
	CMP	BYTE PTR [SI],'\'	;IS NEXT CHAR. \?
	JNE	NOBKSL			;NO
	INC	SI			;YES, SKIP PAST IT
NOBKSL:
        CALL    CPYCNT                  ;COPY LAST PART OF SOURCE DIRECTORY
					;NAME TO DEST PATH
        COPYPATH DSPATH,ARG2A           ;COPY AUGMENTED DEST PATH TO ARG2A
        ADDR    CX,DSPATH
        ADDR    DX,DPREFIX
        PUSH    BX
        ADD     BX,ARG2A
        CALL    FIXPATH                 ;PARSE FULL DEST PATHNAME
        POP     BX
        MOV     WORD PTR [BX].DESTTYPE,AX    ;SAVE DEST TYPE
        CMP     AL,TYPE_UNK
        JNE     DESTXST                 ;IF DEST EXISTS
        MOV     AX,WORD PTR [BX].SRCTYPE  ;DEST DOESN'T EXIST, GET SOURCE TYPE
        CMP     AX,TYPE_DIR             ;IF SOURCE IS A DIRECTORY,
        JNE     DESTXST
        MOV     [BX].DESTTYPE,TYPE_DIR  ;MAKE DEST A DIRECTORY, TOO
DESTXST:
        CLC
        RET
SETUP_SRC_DIR ENDP

;***************************************************************
; THIS PROCEDURE IS CALLED IF THE DESTINATION IS A NEW DIRECTORY
;
SETUP_DEST_DIR PROC NEAR
        ADDR    SI,DSPATH
        ADDR    DI,DPREFIX
        PUSH    DI
        MOV     CX,PATHSIZE
        CALL    CPYCNT                  ;COPY SEARCH PATH TO PREFIX
        POP     DI
        MOV     CX,PATHSIZE
        MOV     AL,0
        REPNE   SCASB                   ;FIND END OF DEST PREFIX
        DEC     DI
        MOV     [DI],BYTE PTR '\'       ;ADD BACKSLASH
        MOV     [DI+1],BYTE PTR 0
        MOV     [BX].NEWDIR,WORD PTR 1  ;SET "NEW DIRECTORY FLAG"
        MOV     WORD PTR [BX].DESTTYPE,TYPE_DIR ;SET DEST TYPE = DIRECTORY
        RET
SETUP_DEST_DIR ENDP

        PAGE +
;****************************************************************************
; THIS ROUTINE TAKES THE INFO ON A FILE IN THE DTA AND USES IT TO GENERATE
; FULL, UNAMBIGUOUS SOURCE AND DESTINATION FILE NAMES BY ADDING THE NECESSARY
; DIRECTORY PREFIXES TO IT.  IT SETS THE CARRY FLAG IF THE "FILE"
; IS "." OR "..", OR IF THE SOURCE IS IDENTICAL TO THE DESTINATION.
;
BUILD_NAMES  PROC  NEAR
        COPYPATH SPREFIX,SRCNAME        ;GET SOURCE PREFIX, COPY TO SOURCE NAME
        DEC     DI                      ;BACK UP OVER NULL
        ADDR    SI,(DTA+30)             ;POINT TO FILE NAME WE FOUND
        CMP     [SI],BYTE PTR '.'       ;DOES IT START WITH .? -
        JNE     NOTDOT                  ;- NO
        STC                             ;- YES, SET CARRY TO SKIP IT
        RET
NOTDOT:
        CALL    CPYCNT                  ;ADD IT TO SOURCE PREFIX
        CMP     WORD PTR [BX].DESTTYPE,TYPE_UFN  ;IS DEST A UFN?
        JE      DESTUFN                 ;YES, JUST USE IT
        CMP     WORD PTR [BX].DESTTYPE,TYPE_UNK
        JE      DESTUFN                 ;DITTO IF DEST DOESN'T EXIST
                                        ;IF NOT, MAKE DEST NAME = SOURCE NAME
        COPYPATH DPREFIX,DESTNAME       ;COPY DEST PREFIX TO DEST NAME
        DEC     DI                      ;BACK UP OVER NULL
        ADDR    SI,DTA+30               ;POINT TO FILE NAME WE FOUND
        CALL    CPYCNT                  ;ADD IT TO DEST PREFIX
        JMP     SHORT DONE              ;GO TO NEXT STEP
DESTUFN:                                ;DEST IS A FILE, NOT A DIRECTORY
        COPYPATH ARG2,DESTNAME          ;SO DESTNAME JUST = ARG2
DONE:
        CALL    CHECK_NAMES             ;CHECK SOURCE AND DEST FOR IDENTITY
        RET
BUILD_NAMES ENDP

        PAGE +
;*********************************************************************
; THIS PROCEDURE CHECKS THE SOURCE AND DEST FILES, AND SETS THE CARRY
; FLAG IF THEY ARE IDENTICAL
;
CHECK_NAMES PROC NEAR
        MOV     BX,WORD PTR RBASE    	;GET ADDR. OF DATA STRUCTURE
        MOV     AH,SET_DTA
        MOV     DX,OFFSET DEST_DTA
        INT     DOS                     ;SET DTA
        ADDR    DX,DESTNAME             ;POINT TO DESTINATION
        MOV     CX,0FFH
        MOV     AH,FIND_FIRST
        INT     DOS                     ;SEARCH FOR IT
        PUSHF
        ADDR    DX,DTA
        MOV     AH,SET_DTA
        INT     DOS                     ;RESET DTA
        POPF
        JNB     GOTDEST                 ;IF FOUND IT
        CLC                             ;OK IF IT DOESN'T EXIST
        RET
GOTDEST: ADDR   SI,DTA+21               ;POINT TO INFO ON SOURCE
        MOV     DI,OFFSET DEST_DTA+21   ;POINT TO INFO ON DEST
        MOV     CX,9                    ;SIZE OF FILE ATTRIBUTES
        REPE    CMPSB                   ;COMPARE SOURCE AND DEST
        JNE     NOTEQU                  ;IF NOT =
        COMP_STRINGS                    ;COMPARE STRINGS
        JNE     NOTEQU                  ;IF SOURCE AND DEST NAMES NOT EQUAL
        STC                             ;FILES ARE EQUAL (NAMES AND ATTRIB.)
        RET
NOTEQU: CLC
        RET
CHECK_NAMES ENDP
        PAGE +
;**************************************************************************
; THIS ROUTINE COPIES A SINGLE FILE (SRCNAME) TO ITS DESTINATION (DESTNAME)
; ON ANOTHER DISK.
;
; IT SETS THE CARRY FLAG IF AN ERROR OCCURRED.
;
COPY_FILE PROC  NEAR
        ADDR    DX,SRCNAME              ;DX = SOURCE FILE NAME
        MOV     AL,READ_ACCESS
        MOV     AH,DOS2_OPEN
        INT     DOS                     ;TRY TO OPEN SOURCE FILE
        JC      FAIL                    ;IF CAN'T
        MOV     WORD PTR INHANDLE,AX    ;SAVE FILE HANDLE
        CALL    GETOK                   ;GET CONFIRMATION IF DEST EXISTS
        JNC     OKGIVEN                 ;IF OK TO DELETE
        MOV     BX,WORD PTR INHANDLE 	;IF NOT OK, GET FILE HANDLE
        MOV     AH,DOS2_CLOSE
        INT     DOS                     ;CLOSE INPUT FILE
	CLC
        RET                             ;EXIT W/O MOVING
FAIL:   ADDR    DX,SRCNAME              ;POINT TO SOURCE FILE NAME
        CALL    ERRORMSG                ;SHOW IT
        ERROR   5                       ;COMPLAIN THAT CAN'T OPEN
	MOV	AL,5
	STC
	RET
OKGIVEN: ADDR   DX,DESTNAME
        MOV     CL,BYTE PTR [BX].DTA+21  ;MAKE DEST ATTRIBUTES=SOURCE ATTRIB.
        MOV     CH,0
        MOV     AH,DOS2_CREATE
        INT     DOS                     ;CREATE FILE (OR TRUNCATE OLD ONE)
        JNC     CREATED                 ;IF OK
        ADDR    DX,DESTNAME
        CALL    ERRORMSG                ;CREATE FAILED, SHOW FILE NAME
        ERROR   5                       ;COMPLAIN THAT CAN'T OPEN
	MOV	AL,5
	STC
	RET
CREATED:
        MOV     WORD PTR OUTHANDLE,AX   ;SAVE OUTPUT HANDLE
COPYLOOP:
        PUSH    BX
        MOV     BX,WORD PTR INHANDLE 	;BX = FILE HANDLE
        MOV     DX,OFFSET BUFFER        ;DX = BUFFER OFFSET
        MOV     CX,BUFSIZE              ;CX = BUFFER SIZE
        MOV     AH,READ                 ;USING DOS 2 CALL,
        INT     DOS                     ;READ FROM SOURCE
        POP     BX
        JC      RDERR                   ;IF ERROR
        MOV     CX,AX                   ;SAVE AMT. READ
        CMP     AX,0
        JE      ENDCOPY                 ;IF 0
        PUSH    BX
        MOV     BX,WORD PTR OUTHANDLE 	;BX = FILE HANDLE
        MOV     DX,OFFSET BUFFER        ;DX = BUFFER OFFSET
        MOV     AH,WRITE
        INT     DOS                     ;WRITE BUFFER TO DEST
        POP     BX
        JC      WRERR                   ;IF ERROR
        CMP     AX,CX                   ;WERE ALL BYTES WRITTEN?
        JE      COPYLOOP                ;YES, KEEP GOING
	ADDR	DX,DESTNAME		;POINT TO DEST NAME
	CALL	ERRORMSG		;SHOW IT
        ERROR   10                      ;PROBABLY DISK FULL
	MOV	AL,10			;SET ERROR CODE
	JMP     SCRATCH			;ABORT
WRERR:  ADDR	DX,DESTNAME		;POINT TO DEST NAME
	CALL	ERRORMSG		;SHOW IT
	ERROR   8                       ;WRITE ERROR
	MOV	AL,8			;SET ERROR CODE
        JMP     SCRATCH                 ;ABORT
RDERR:  ADDR	DX,SRCNAME		;POINT TO SOURCE NAME
	CALL	ERRORMSG		;SHOW IT
	ERROR   9                       ;READ ERROR
	MOV	AL,9			;SET ERROR CODE
        JMP     SCRATCH                 ;ABORT
ENDCOPY: PUSH   BX                      ;NO ERRORS
        MOV     BX,WORD PTR INHANDLE    ;GET INPUT FILE HANDLE
        MOV     AH,FILE_TIMES
        MOV     AL,0                    ;GET DATE AND TIME
        INT     DOS                     ;GET IT
        MOV     BX,WORD PTR OUTHANDLE   ;GET OUTPUT FILE HANDLE
        MOV     AH,FILE_TIMES
        MOV     AL,1
        INT     DOS                     ;SET OUTPUT DATE AND TIME SAME AS INPUT
        MOV     BX,WORD PTR INHANDLE
        MOV     AH,DOS2_CLOSE
        INT     DOS                     ;CLOSE INPUT FILE
        MOV     BX,WORD PTR OUTHANDLE
        MOV     AH,DOS2_CLOSE
        INT     DOS                     ;CLOSE OUTPUT FILE
        POP     BX
        ADDR    DX,SRCNAME              ;POINT TO SOURCE NAME
	CALL	UNLINK2			;REMOVE IT
        JB      DELERR                  ;IF SOME PROBLEM
        RET                             ;ALL DONE
DELERR: ADDR    DX,SRCNAME              ;CAN'T DELETE FILE, SHOW FILE NAME
        CALL    ERRORMSG
        ERROR   13                      ;AND ERROR MSG.
	MOV	AL,13
	STC
        RET

SCRATCH:
	PUSH	AX			;SAVE ERROR CODE
	PUSH	BX
	MOV	BX,WORD PTR OUTHANDLE
	MOV	AH,DOS2_CLOSE
	INT	DOS			;CLOSE OUTPUT FILE
	POP	BX
	ADDR	DX,DESTNAME
	CALL	UNLINK2			;REMOVE PARTIAL FILE
	POP	AX
	STC
	RET

COPY_FILE ENDP

PAGE +
;*******************************************************************
; THIS ROUTINE "MOVES" A FILE (SRCNAME) BY RENAMING IT (TO DESTNAME)
;
; IT SETS THE CARRY FLAG IF AN ERROR OCCURRED.
;
RENAME_FILE PROC NEAR
        CALL    GETOK                   ;SEE IF FILE EXISTS
        JNC     OK                      ;USER SAID OK TO ERASE
	MOV	AL,4
	STC
        RET                             ;NOT OK, SKIP THIS ONE
OK:     ADDR    DX,SRCNAME              ;POINT TO SOURCE
        ADDR    DI,DESTNAME             ;AND DEST
        MOV     AH,DOS2_RENAME
        PUSH    BX
        INT     DOS                     ;RENAME
        POP     BX
        JNC     RENOK                   ;IF OK
        ADDR    DX,SRCNAME
        CALL    ERRORMSG                ;SHOW SOURCE
        ERROR   11                      ;SHOULDN'T HAPPEN
	MOV	AL,11			;SET ERROR CODE
	STC				;SIGNAL ERROR
RENOK:  RET
RENAME_FILE ENDP

        PAGE +
;*******************************************************************
;       THIS ROUTINE CHECKS TO SEE IF THE DEST FILE EXISTS.
;       IF IT DOES, AND IF THE CONFIRM FLAG IS SET, IT ASKS
;       FOR CONFIRMATION BEFORE DELETING THE FILE.  IF THE
;       CONFIRM FLAG IS NOT SET, IT JUST DELETES IT.
;       ON EXIT, 'C'=1 IF THE USER REPLIED 'N' TO THE CONFIRM MSG.
;
GETOK   PROC    NEAR
        ADDR    DX,DESTNAME
        MOV     AL,0
        MOV     AH,CHMOD
        INT     DOS                     ;GET ATTRIBUTES FOR DEST
        JNC     EXISTS                  ;IF FILE EXISTS
        CLC
        RET
EXISTS:
        CMP     BYTE PTR DS:IFLAG,TRUE  ;IS FLAG SET TO CONFIRM?
        JNE     COK                     ;NO.
        ADDR    DX,DESTNAME
        CALL    ERRORMSG                ;SHOW DEST FILE
        ERROR   4                       ;ASK FOR CONFIRMATION
	CALL	GETYORN			;GET Y OR N RESPONSE
        CMP     AL,'Y'                  ;IS IT YES?
        JNE     ABEXIT                  ;NO, SIGNAL CALLING ROUTINE
COK:
TRYAGAIN:
        ADDR    DX,DESTNAME
        MOV     AH,UNLINK
        INT     DOS                     ;DELETE THE FILE
        JNC     OKEXIT                  ;IF NO PROBLEM
        CMP     AX,5                    ;WAS FILE R/O? (THIS OUGHT TO BE
                                        ; THE ONLY POSSIBLE ERROR)
        JNE     OKEXIT                  ;EXIT IF SOME OTHER ERROR
	ADDR	DX,DESTNAME
	CALL	ERRORMSG		;SHOW DEST FILE NAME
        ERROR   6                       ;R/O FILE, QUERY USER AGAIN
	CALL	GETYORN			;GET Y OR N RESPONSE
        CMP     AL,'Y'                  ;TEST FOR 'Y' RESPONSE
        JNE     ABEXIT                  ;ABORT IF USER SAYS 'N'
        MOV     CX,0                    ;'Y' TYPED CLEAR ALL ATTRIBUTES
        ADDR    DX,DESTNAME             ;POINT TO FILE NAME
        MOV     AH,CHMOD
        MOV     AL,1                    ;CHANGE ATTRIBUTES
        INT     DOS                     ;TRY MAKING IT R/W
        JMP     TRYAGAIN                ;TRY TO ERASE IT AGAIN
ABEXIT: STC
        RET
OKEXIT: CLC
        RET
GETOK   ENDP

; PRTERR = PRINT ERROR MESSAGE (DX POINTS TO OFFSET FROM DGROUP)

PRTERR: PUSH    DS
        MOV     AX,DGROUP
        MOV     DS,AX
        CALL    ERRORMSG
        POP     DS
	RET

CLOSE2:  MOV    BX,WORD PTR OUTHANDLE
        MOV     AH,DOS2_CLOSE
        INT     DOS                     ;CLOSE OUTPUT FILE
	RET
CLOSE1:
        MOV     BX,WORD PTR INHANDLE
        MOV     AH,DOS2_CLOSE
        INT     DOS                     ;CLOSE INPUT FILE
	RET
EXIT2:
        MOV     AH,EXIT
        INT     DOS                     ;EXIT TO DOS

        END     ENTRY


```
{% endraw %}

## RM.ASM

{% raw %}
```
        TITLE RM - MSDOS FILE DELETE UTILITY
        PAGE 55,132
;**********************************************************************
;       THIS PROGRAM DELETES ONE OR MORE FILES, OR (WITH THE /R SWITCH)
;	DIRECTORIES.
;
;       USAGE (afn = ambiguous file name):
;
;               RM afn1 afn2 ...  - deletes the named file(s)
;
;       SWITCHES (OPTIONAL):
;
;		RM/F - remove write-protected files without warning
;
;		RM/I - query before each deletion
;
;               RM/R - allows deleting directories (recursively).
;		       (this is DANGEROUS, especially without the /I switch)
;
;               RM/V - "verbose" mode, shows name of each file deleted.
;************************************************************************
;       BY: JON DART
;           3012 HAWTHORN ST.,
;           SAN DIEGO, CA 92104
;************************************************************************
;   TO BUILD RM.EXE:
;	MASM RM,RM,NUL,NUL
;	LINK RM,RM,NUL,ASM
;	EXEPACK RM.EXE RM2.EXE
;	DEL RM.EXE
;	REN RM2.EXE=RM.EXE
;************************************************************************
;       Version 3.2, 04-Feb-89  fixes to CHECKWILD
;	Version 3.1, 19-Jan-89  another fix to FIXPATH; relinked.
;	Version 3.0, 24-Sep-88  bug fix in FIXPATH; relinked. Version made
;				consistent with MV and CP.
;	Version 1.6, 16-Feb-88  assembles under MASM 5.0, uses GETARGS
;				for argument processing.
;	Version 1.5, 24-Oct-86  switch parser modified, recognizes -rv
;				form as well as -r -v
;	Version 1.4, 10-Sep-86  (fixes prompt for write-protected files)
;	Version 1.3, 19-Jul-86  (fixes gross bugs in wildcard handling)
;	Version 1.2, 06-Jul-86  (changes to memory alloc., accepts hyphen
;				 as switch char., assembles under masm 4.0)
;	Version 1.1, 03-Jul-86  (bug fixes)
;       Version 1.0, 30-Jun-86
;************************************************************************

	DOSSEG
	.MODEL	SMALL

PATHSIZE EQU    65                      ;MAX. SIZE OF DOS PATHNAME, +1
MAXLEVEL EQU    12                      ;MAX NESTING LEVEL FOR DIRECTORIES
MAXARGS EQU     40                      ;MAXIMUM # OF COMMAND LINE ARGUMENTS
FALSE   EQU     0
TRUE    EQU     0FFH
CONFIRM EQU     FALSE                   ;"CONFIRM BEFORE DELETE" DEFAULT
VERBOSE EQU     FALSE                   ;"VERBOSE" OPTION (DEFAULT VALUE)
GOOFPROOF EQU	TRUE			;CONFIRM BEFORE DELETING *.*
BIT$DIR EQU     00010000B               ;BIT IN ATTRIBUTE FOR DIRECTORY
BIT$RO  EQU     00000001B               ;BIT IN ATTRIBUTE FOR WRITE-PROTECT

        .XLIST
        INCLUDE ASCII.DEF
        INCLUDE MSDOS2.DEF
	INCLUDE MACROS.DEF
        .LIST

RMINFO  STRUC
NEWDIR  DW      1 DUP (?)               ;FLAG, =1 IF NEW DIRECTORY CREATED
PATHTYPE DB     2 DUP (?)               ;TYPE OF SOURCE (0 IF UFN)
ARG     DB      PATHSIZE DUP (?)        ;FIRST ARGUMENT (SOURCE)
SPATH   DB      PATHSIZE DUP (?)        ;SOURCE SEARCH PATH
SPREFIX DB      PATHSIZE DUP (?)        ;SOURCE LEAD-IN PATH
SCRATCH DB      PATHSIZE DUP (?)        ;SCRATCH AREA
FULLNAME DB     PATHSIZE DUP (?)        ;UNAMBIGUOUS SOURCE NAME
DTA     DB      128 DUP (?)             ;DTA FOR SEARCH FN.
RMINFO  ENDS
RMSTRUCSIZE EQU 5*PATHSIZE+135          ;SIZE OF STRUCTURE

	.DATA
;
;       FIXED DATA AREA:
;
MSG1    DB 'RM Version 3.2 by Jon Dart (04-Feb-89)',CR,LF,CR,LF
        DB 'USAGE:',CR,LF,CR,LF
        DB 'RM [-F -I -R -V] file1 file2  ...      deletes the named file(s)',CR,LF,CR,LF
        DB 'SWITCHES (OPTIONAL):',CR,LF,CR,LF
	DB '-F   remove write-protected files without warning',CR,LF
	DB CR,LF
        DB '-I   query before delete',CR,LF
        DB CR,LF
        DB '-R   allow recursive deletion of directories',CR,LF
	DB CR,LF
	DB '-V   echo file names as they are deleted',CR,LF
        DB 0
MSG2    DB      ': file not found.',CR,LF,0
MSG3    DB      ': directory.',CR,LF,0
MSG4	DB      ' : OK to delete [Y or N]? ',0
MSG5    DB      ": can't remove.",CR,LF,0
MSG6    DB      ': file is R/O. '
MSG6A	DB	'Are you SURE [Y or N]? ',0
MSG7    DB      "Directories nested too deep.",CR,LF,0
; MSG8    DB      "Insufficient memory for buffers.",CR,LF,0
MSG9    DB      ": Illegal switch.",CR,LF,0
MSG10   DB      "Too many arguments.",CR,LF,0
MSG11	DB	' directory. Enter it [Y or N]? ',0
MSG12	DB	' directory. Delete it [Y or N]? ',0
MSG13	DB	'? ',0
WILD	DB	'*.*',0
SWLIST  DB	'FIRV',0		;LIST OF LEGAL SWITCHES

	.STACK
        DB      512 DUP (?)

	.DATA?
;	UNINITIALIZED DATA AND BUFFER AREAS       

RBASE   DW 	1 DUP (?)               ;POINTER TO MVSTRUC IN RSTACK
LEVEL   DW      1 DUP (?)               ;RECURSION LEVEL
DRIVE   DW      1 DUP (?)               ;SOURCE DRIVE (0 = DEFAULT)
FFLAG   DW	1 DUP (?)               ;FORCE FLAG
IFLAG	DW	1 DUP (?)		;CONFIRM FLAG
RFLAG   DW	1 DUP (?)               ;RECURSIVE FLAG
VFLAG   DW	1 DUP (?)               ;VERBOSE FLAG
FNAME_START DW  1 DUP (?)               ;USED BY CHECKWILD
NUMARGS DW      1 DUP (?)               ;NUMBER OF ARGUMENTS ON COMMAND LINE
ARGPTRS DW      MAXARGS DUP (?)         ;POINTERS TO START OF ARGUMENTS
ARGBUF  DB      256 DUP (?)		;BUFFER FOR ARGUMENTS
RSTACK  RMINFO  MAXLEVEL DUP (<>)	;RECURSION STACK

        PAGE +
	.CODE
EXTRN   CPYCNT:NEAR,UC:NEAR,UCSTR:NEAR,CRLF:NEAR
EXTRN   ERRORMSG:NEAR,COUT:NEAR,CIN:NEAR,CLRCO:NEAR
EXTRN   SKIPSP:NEAR,TYPTX:NEAR,ERRORMSG:NEAR,CLRCO:NEAR
EXTRN   CMDSRC:NEAR,FIXPATH:NEAR,TYPE_DIR:ABS,TYPE_AFN:ABS
EXTRN   TYPE_UFN:ABS,TYPE_DSP:ABS,TYPE_DRV:ABS,TYPE_UNK:ABS
EXTRN	GETYORN:NEAR
EXTRN	GETARGS:NEAR

;*********************
;* MACRO DEFINITIONS *
;*********************

ADDR    MACRO   REG,OFFST               ;COMPUTE ADDRESS OFFSET FROM BASE REGISTER (BX)
        MOV     REG,BX
        ADD     REG,OFFST
        ENDM

COPYPATH MACRO  SOURCE,DEST             ;COPY PATHNAME FROM SOURCE TO DEST
        ADDR    SI,SOURCE
        ADDR    DI,DEST
        MOV     CX,PATHSIZE
        CALL    CPYCNT
        ENDM

ERROR   MACRO   ERRNUM                  ;SHOW ERROR MESSAGE
        PUSH    DS
        MOV     AX,DGROUP 
        MOV     DS,AX
        MOV     DX,OFFSET MSG&ERRNUM
        CALL    ERRORMSG
        POP     DS
        ENDM

;**********************
; PROGRAM ENTRY POINT *
;**********************
ENTRY:
        TEST_DOS2                       ;TEST FOR DOS 2.0, EXIT IF DOS 1
	MOV	AX,DGROUP
	MOV	ES,AX
        MOV     BX,(80H)         	;GET BYTE COUNT FOR COMMAND LINE
        CMP     [BX],BYTE PTR 0
        JE      USEMSG                  ;IF NO COMMAND TAIL
        PUSH    BX
        MOV     DL,[BX]
        MOV     DH,0
        ADD     BX,DX
        INC     BX
        MOV     [BX],BYTE PTR 0         ;PUT 0 BYTE AT END OF COMMAND LINE
        POP     BX
        INC     BX
	MOV	SI,OFFSET ARGPTRS
	MOV	DI,OFFSET ARGBUF
	MOV	CX,MAXARGS
	CALL	GETARGS			;COLLECT COMMAND LINE ARGUMENTS
	JNB	L_2			;IF OK
TOOMANY:
        ERROR   10                      ;TOO MANY ARGUMENTS (PRETTY UNLIKELY)
	MOV	AL,10			;SET EXIT CODE
        JMP     EXIT2
L_2:	CMP 	CX,0
	JG	L_3			;IF AT LEAST 1 ARG
USEMSG: ERROR   1			;NO ARGUMENTS, SHOW CORRECT USAGE
	MOV	AL,1			;SET ERROR CODE
        JMP     EXIT2			;EXIT 2 DOS
L_3:
        MOV     AX,ES
        MOV     DS,AX                   ;SET DATA SEG TO VARIABLE AREA
        MOV     BYTE PTR IFLAG,CONFIRM  ;SET CONFIRM FLAG DEFAULT
        MOV     BYTE PTR VFLAG,VERBOSE  ;SET VERBOSE FLAG DEFAULT
	MOV	BYTE PTR RFLAG,FALSE    ;SET RECURSIVE FLAG DEFAULT
	MOV	BYTE PTR FFLAG,FALSE	;SET FORCE FLAG DEFAULT
	MOV	WORD PTR LEVEL,0	;ZERO RECURSION LEVEL
        MOV     BYTE PTR DRIVE,0     	;SET DRIVE DEFAULT
;***************************
; COLLECT SWITCHES, IF ANY *
;***************************
	MOV	SI,OFFSET ARGPTRS
NEXTSW:
	MOV	BX,WORD PTR [SI]	;POINT TO ARGUMENT
	MOV	AL,BYTE PTR [BX]	;GET 1ST CHAR.
        CMP     AL,'-'
        JE      GOTSW                   ;IF SWITCH SPECIFIED
	CMP	AL,'/'
	JE 	GOTSW
	JMP	GETFILES
GOTSW:
        INC     BX                      ;SKIP OVER SWITCH CHARACTER
	MOV	AL,BYTE PTR [BX]
SWLOOP:
        CALL    UC                      ;MAKE SWITCH UPPER CASE
	PUSH	BX
	MOV	BX,OFFSET SWLIST
	CALL	CMDSRC			;SEARCH LIST OF VALID SWITCHES
	POP	BX
	MOV	AH,0
	ADD	AX,AX			;NOT FOUND IN LIST?
	JZ	BADSWITCH		;NO.
	MOV	DI,OFFSET FFLAG - 2
	ADD	DI,AX			;POINT TO FLAG
	NOT	WORD PTR [DI]		;1'S COMPLEMENT
	INC	BX
	MOV	AL,BYTE PTR [BX]	;GET NEXT CHAR. FROM LINE
	COMPLIST <SPACE,TAB,NULL>,ENDSW ;IF DELIM
	JMP	SWLOOP			;ELSE ASSUME THIS IS A SWITCH CHAR.
ENDSW:	ADD	SI,2			;POINT TO NEXT POINTER TO AN ARG
	LOOP	NEXTSW
	ERROR	1			;NO ARGS BESIDES SWITCHES
	MOV	AL,1
	JMP	EXIT2	
BADSWITCH:
	MOV	AL,BYTE PTR [BX]
        CALL    COUT                    ;DISPLAY BAD CHAR.
        ERROR   9                       ;ILLEGAL SWITCH
	MOV	AL,9			;SET EXIT CODE
        JMP     EXIT2
GETFILES:
        CMP     CX,0                    ;CHECK ARGUMENT COUNT
        JG      ARGSOK                  ;IF AT LEAST 1
NOARGS:
        JMP     USEMSG                  ;GIVE USE MESSAGE
ARGSOK: MOV     WORD PTR NUMARGS,CX  	;SAVE NUMBER OF ARGUMENTS (LESS SWITCHES)

;*****************************************
;* LOOP, DELETING FILES IN ARGUMENT LIST *
;*****************************************
RM1ARG:
        MOV     BX, WORD PTR [SI]       ;GET POINTER TO ARG
        PUSH    SI
        PUSH    CX
        CALL    RMARG                   ;DELETE IT
        POP     CX
        POP     SI
        ADD     SI,2                    ;ADVANCE TO NEXT ARG POINTER
        LOOP    RM1ARG                  ;LOOP TILL NO MORE ARGS TO DELETE
	MOV	AL,0			;SET EXIT CODE
        JMP     EXIT2

;*******************
;* REMOVE ONE FILE *
;*******************
RMARG   PROC   NEAR
        MOV     BYTE PTR DRIVE,0     	;SET DRIVE DEFAULT
        MOV     DI,OFFSET RSTACK+ARG    ;COLLECT FILE NAME
        MOV     AL,[BX+1]
        CMP     AL,':'                  ;CHECK FOR DRIVE SPEC
        JNE     GETARG			;IF NONE
        MOV     AL,[BX]                 ;GET DRIVE LETTER
        SUB     AL,'A'-1                ;MAKE BINARY
        MOV     BYTE PTR DRIVE,AL    	;SAVE DRIVE
GETARG: MOV     AL,[BX]                 ;COPY FROM [BX] TO [DI] UNTIL DELIMITER
	CMP	AL,0
	JE	ENDARG
        STOSB
        INC     BX
        JMP     GETARG
ENDARG: 
        STOSB                           ;END ARG W. ZERO
        MOV     WORD PTR RBASE,OFFSET RSTACK   ;SAVE OFFSET TO RSTACK
        CALL    RMIT                    ;DO IT TO IT
        RET
RMARG   ENDP

        PAGE +
;*********************************************************************
; THIS ROUTINE REMOVES A FILE OR DIRECTORY WHOSE PATHNAME IS SPECIFIED
; IN FIELD 'ARG' OF A STRUCTURE OF TYPE 'RMSTRUC'.  'RBASE' POINTS
; TO THE START OF THE DATA STRUCTURE FOR THIS RECURSION LEVEL.
;
RMIT    PROC    NEAR
        MOV     BX,WORD PTR RBASE    	;GET BASE ADDR. (POINTER TO RMINFO)
        ADDR    DX,DTA
        MOV     AH,SET_DTA
        INT     DOS                     ;SET DTA
        ADDR    CX,SPATH
        ADDR    DX,SPREFIX
        PUSH    BX
        ADD     BX,ARG
        CALL    FIXPATH                 ;PARSE PATHNAME
        POP     BX
        CMP     AX,TYPE_UNK
        JNE     GOODPATH                ;IF APPARENTLY OK
        ADDR    DX,ARG
        CALL    ERRORMSG
        ERROR   2                       ;NONEXISTENT PATHNAME, COMPLAIN
        RET
GOODPATH:
        MOV     WORD PTR [BX].PATHTYPE,AX     ;SAVE TYPE OF ARGUMENT
	IF	GOOFPROOF
	CMP	AX,TYPE_DSP		;DIRECTORY SPEC?
	JE	CHECKI			;YES, MAY NEED OK
	CMP	AX,TYPE_DRV		;DRIVE SPEC?
	JNE	NOTDRV			;NO
CHECKI:
	CMP	BYTE PTR IFLAG,TRUE	;I FLAG SET?
	JNE	GETOK			;NO, GET OK
	JMP	NOARGERR		;ELSE GO AHEAD
	ENDIF
NOTDRV:
	CMP	AX,TYPE_DIR		;DIRECTORY?
	JNE	NOTDIR
	CMP	BYTE PTR RFLAG,TRUE	;R FLAG SET?
	JNE	DIRERR			;NO, ERROR
	JMP	NOARGERR		;YES, OK
DIRERR:
	ADDR	DX,ARG
	CALL	ERRORMSG		;SHOW ARGUMENT
	ERROR	3			;COMPLAIN THAT IT'S A DIRECTORY
	RET
NOTDIR:
	IF	GOOFPROOF
	CMP	AX,TYPE_AFN
	JNE	NOARGERR		;IF NOT AFN
	CMP	BYTE PTR LEVEL,0
	JG	NOARGERR		;IF LEVEL>0, DON'T CHECK FOR *.*
	CMP	BYTE PTR IFLAG,TRUE
	JE	NOARGERR		;DITTO IF I SWITCH SPECIFIED
	CALL	CHECKWILD		;CHECK FOR *.*
	JNC	NOARGERR		;IF SOMETHING ELSE
GETOK:
;	User typed something like *.* or *foo.* or A: or A:\FOO\
;	In all cases make the end of the path = *.* and ask for 
;	confirmation.
	ADDR	SI,SPATH
	MOV	WORD PTR FNAME_START, SI
FINDFNAME:
	MOV	AL, BYTE PTR [SI]
	CMP	AL, ':'
	JE	FOUNDPATH
	CMP	AL, '\'
	JE	FOUNDPATH
	CMP	AL, 0
	JE	ENDOFNAME
	INC	SI
	JMP	FINDFNAME
FOUNDPATH:
	INC	SI
	MOV	WORD PTR FNAME_START, SI
	JMP	FINDFNAME
ENDOFNAME:
	MOV	DI, WORD PTR FNAME_START
	MOV	AL, '*'
	STOSB
	MOV	AL, '.'
	STOSB
	MOV	AL, '*'
	STOSB
	XOR	AL, AL
	STOSB
	ADDR	DX,SPATH
	CALL	ERRORMSG		;SHOW SEARCH PATH
	ERROR	13	
	ERROR	6A			;USER TYPED *.*, ASK FOR CONFIRMATION
	CALL	GETYORN
	CMP	AL,'Y'
	JE	NOARGERR		;GO AHEAD IF 'Y' TYPED
	MOV	AL,13			;SET EXIT CODE
	JMP	EXIT2
	ENDIF
;******************************************
; SEE IF ANYTHING MATCHES THE SEARCH SPEC *
;******************************************
NOARGERR:
        ADDR    DX,SPATH                ;POINT TO SEARCH PATH
        MOV     CX,31H                  ;SET SEARCH ATTRIBUTES
        MOV     AH,FIND_FIRST
        INT     DOS                     ;SEARCH FOR 1ST MATCH
        JNC     GOTONE                  ;OK IF SOMETHING FOUND
        ADDR    DX,ARG
        CALL    ERRORMSG                ;ELSE SHOW ARGUMENT
        ERROR   2                       ;SAY IT DOESN'T EXIST
	RET
;**************
; TOP OF LOOP *
;**************
GOTONE:
        CALL    BUILD_NAME              ;MAKE UNAMBIG. FILE NAME
        JNC     NOSKIP
        JMP     NEXTFILE                ;IF "FILE" IS "." OR ".." 
NOSKIP:
        TEST    [BX].DTA+21,BIT$DIR     ;IS THIS A DIRECTORY?
        JNZ	GOTADIR			;YES.
	JMP	RMFILE			;NO, IT'S A FILE
;*************************************************************
; IF ARG IS A DIRECTORY, AND R FLAG SET, DELETE ITS CONTENTS *
;*************************************************************
GOTADIR:
	CMP	BYTE PTR RFLAG,TRUE	;R FLAG SET?
	JE	RSET			;YES, OK TO DELETE DIRECTORY
	JMP	NEXTFILE		;NO, JUST SKIP OVER DIRECTORY
RSET:
	CMP	BYTE PTR IFLAG,TRUE	;I FLAG SET?
	JNE	INOTSET			;NO, GO INTO DIRECTORY
	ADDR	DX,FULLNAME
	CALL	ERRORMSG		;SHOW DIRECTORY NAME
	ERROR	11			;ASK IF USER WANTS TO ENTER IT
	CALL	GETYORN			;GET RESPONSE
	CMP	AL,'N'
	JE	NEXTFILE		;IF N TYPED
INOTSET:
        CMP     WORD PTR LEVEL,MAXLEVEL-1 ;ARE WE AT MAX LEVEL?
        JL      NOTMAX                  ;NO
        ERROR   7                       ;YES, TOO DEEP
	MOV	AL,7			;SET EXIT CODE
        JMP     EXIT2
NOTMAX:
        COPYPATH FULLNAME,(ARG+RMSTRUCSIZE)  ;COPY DIRECTORY TO ARG AT NEXT LEVEL
        PUSH    BX                      ;SAVE POINTER TO BASE
        INC     WORD PTR LEVEL          ;INCREMENT RECURSION LEVEL
        ADD     WORD PTR RBASE,RMSTRUCSIZE ;ADVANCE BASE POINTER
        CALL    RMIT                    ;REMOVE THE DIRECTORY CONTENTS
        POP     BX                      ;RESTORE BASE POINTER
        DEC     WORD PTR LEVEL       	;DECREMENT RECURSION LEVEL
        SUB     WORD PTR RBASE,RMSTRUCSIZE  ;RESTORE BASE TO PREVIOUS LEVEL
        ADDR    DX,DTA
        MOV     AH,SET_DTA
        INT     DOS                     ;RESET DTA
        JMP     SHORT NEXTFILE          ;DO NEXT FILE
;**************************
; FOUND A FILE, REMOVE IT *
;**************************
RMFILE:
        CMP     BYTE PTR VFLAG,TRUE  	;CHECK VERBOSE FLAG
        JNE     QUIET                   ;IF QUIET MODE
        ADDR    DX,FULLNAME             ;NOT QUIET, SHOW VERBIAGE
        CALL    ERRORMSG
        CALL    CRLF
QUIET:
        CALL    RM_FILE
	JNC	NEXTFILE
	ADDR	DX,FULLNAME		;IF ERROR, SHOW NAME
	ERROR	5			;AND ERROR MSG.
;*****************
; BOTTOM OF LOOP *
;*****************
NEXTFILE:
        MOV     AH,FIND_NEXT
        INT     DOS                     ;FIND NEXT MATCH, IF ANY
        JC      NOMORE                  ;IF NONE
        JMP     GOTONE                  ;GOT ONE, BACK TO TOP OF LOOP
;*************************************************
; NO MORE FILES, DELETE DIRECTORY (IF NECESSARY) *
; ************************************************
NOMORE:
	CMP	WORD PTR [BX].PATHTYPE,TYPE_DIR	;WAS THIS ARG A DIRECTORY?
	JNE	DONE			;NO, DONE
	CMP	BYTE PTR RFLAG,TRUE	;RFLAG SET?
	JNE	DONE			;NO, DONE
	ADDR	DX,ARG			;POINT TO DIRECTORY NAME
	CMP	BYTE PTR IFLAG,TRUE	;I FLAG SET?
	JNE	NOI
	CALL	ERRORMSG		;DISPLAY DIRECTORY NAME
	ERROR	12			;ASK FOR OK TO DELETE
	CALL	GETYORN			;GET Y OR N RESPONSE
	CMP	AL,'N'
	JE	DONE			;IF N, DON'T DELETE IT
NOI:
	ADDR	DX,ARG
	MOV	AH,RMDIR		
	INT	DOS			;REMOVE DIRECTORY (IT SHOULD BE EMPTY NOW)
	JNC	DONE			;IF OK
	ADDR	DX,ARG
	CALL	ERRORMSG		;ELSE SHOW DIRECTORY NAME
	ERROR	5			;AND ERROR MSG.
DONE:
        RET                             ;ALL DONE
RMIT    ENDP

;**************************************************
; CHECKWILD = CHECK ARG FOR *.* ERASURE
; RETURNS 'C' = 1 IF *.* ON WHOLE DIRECTORY OR DRIVE 

CHECKWILD PROC	NEAR
	ADDR	SI,ARG			;GET ARG
	MOV	WORD PTR FNAME_START, SI
FINDFN:					;FIND THE FILE NAME PORTION
	CMP	BYTE PTR [SI],0
        JE	GOTEND
	CMP	BYTE PTR [SI],'\'
	JE	PATH_CHAR
	CMP	BYTE PTR [SI],':'
	JE	PATH_CHAR
	INC	SI
	JMP	SHORT FINDFN
PATH_CHAR:
	INC	SI
	CMP	BYTE PTR [SI], 0	; IF ARG ENDS W. \ OR :
	JE	WIPEOUT			; TREAT AS WILDCARD
	MOV	WORD PTR FNAME_START, SI
	JMP	SHORT FINDFN
GOTEND:
	MOV	SI, WORD PTR FNAME_START ; GET START OF FILE NAME	
        CMP	BYTE PTR [SI], '*'	; IS IT STAR?
	JNE	NOTWIPE			; J/NO
FINDEXT:
	INC	SI
	CMP	BYTE PTR [SI], '.'
	JE	FOUND_EXT
	CMP	BYTE PTR [SI], 0
	JE	NOTWIPE
	JMP	FINDEXT
FOUND_EXT:
	INC	SI
	CMP	BYTE PTR [SI], '*'
	JNE	NOTWIPE
WIPEOUT:
	STC
	RET
NOTWIPE:
	CLC
	RET

CHECKWILD ENDP

        PAGE +
;*****************************************************************************
; THIS ROUTINE TAKES THE INFO ON A FILE IN THE DTA AND USES IT TO GENERATE A
; FULL, UNAMBIGUOUS FILE NAME BY ADDING THE NECESSARY DIRECTORY PREFIXES TO IT.
; IT SETS THE CARRY FLAG IF THE "FILE" IS "." OR "..".
;
BUILD_NAME  PROC  NEAR
        COPYPATH SPREFIX,FULLNAME       ;GET SOURCE PREFIX, COPY TO FULL NAME
        DEC     DI                      ;BACK UP OVER NULL
        ADDR    SI,(DTA+30)             ;POINT TO FILE NAME WE FOUND
        CMP     [SI],BYTE PTR '.'       ;DOES IT START WITH .? -
        JNE     NOTDOT                  ;- NO
        STC                             ;- YES, SET CARRY TO SKIP IT
        RET
NOTDOT:
        CALL    CPYCNT                  ;ADD IT TO SOURCE PREFIX
	CLC				;CLEAR CARRY
        RET
BUILD_NAME ENDP

;*************************************************************************
; REMOVE ONE FILE (NAME IS IN FIELD 'FULLNAME' OF THE 'RMSTRUC' POINTED TO
; BY BX).  RETURNS WITH CARRY SET IF ERROR.
;
RM_FILE	PROC	NEAR
        CMP     BYTE PTR IFLAG,TRUE  	;IS FLAG SET TO CONFIRM?
        JNE     COK                     ;NO.
        ADDR    DX,FULLNAME
        CALL    ERRORMSG                ;SHOW FILE
        ERROR   4                       ;ASK FOR CONFIRMATION
	CALL	GETYORN			;GET Y OR N RESPONSE
        CMP     AL,'Y'                  ;IS IT YES?
        JNE     OKEXIT                  ;NO, RETURN W/O ERROR
COK:
TRYAGAIN:
        ADDR    DX,FULLNAME
        MOV     AH,UNLINK
        INT     DOS                     ;UNLINK THAT SUCKER
        JNC     OKEXIT                  ;IF NO PROBLEM
        CMP     AX,5                    ;WAS FILE R/O? (THIS OUGHT TO BE
                                        ; THE ONLY POSSIBLE ERROR)
        JNE     ABEXIT                  ;EXIT IF SOME OTHER ERROR
	CMP	BYTE PTR FFLAG,TRUE	;CHECK F FLAG
	JE	NOWARN			;IF SET, DON'T WARN ABOUT R/O FILE
	ADDR	DX,FULLNAME
	CALL	ERRORMSG		;SHOW FILE NAME
        ERROR   6                       ;R/O FILE, QUERY USER AGAIN
	CALL	GETYORN			;GET Y OR N RESPONSE
        CMP     AL,'Y'                  ;TEST FOR 'Y' RESPONSE
        JNE     OKEXIT                  ;QUIT (WITH NO ERROR) IF USER SAYS 'N'
NOWARN:
        MOV     CX,0                    ;'Y' TYPED CLEAR ALL ATTRIBUTES
        ADDR    DX,FULLNAME             ;POINT TO FILE NAME
        MOV     AH,CHMOD
        MOV     AL,1                    ;CHANGE ATTRIBUTES
        INT     DOS                     ;TRY MAKING IT R/W
        JMP     TRYAGAIN                ;TRY TO ERASE IT AGAIN
ABEXIT: STC
        RET
OKEXIT: CLC
        RET
RM_FILE	ENDP

EXIT2:
        MOV     AH,EXIT
        INT     DOS                     ;EXIT TO DOS

        END     ENTRY

```
{% endraw %}

## SHOW.ASM

{% raw %}
```
        TITLE SHOW - MSDOS FILE DISPLAY PROGRAM
        PAGE 55,132
;****************************************************************************
; BIDIRECTIONAL FILE DISPLAY PROGRAM FOR MSDOS 2
;
;       BY: JON DART
;           3012 HAWTHORN ST.,
;           SAN DIEGO, CA 92104
;
; VERSION 2.2, 01-Nov-87
;
; THIS IS A MODIFIED VERSION OF THE CP/M PROGRAM 'BISHOW' ON SIG/M V. 145.
; I ADDED SOME MODS OF MY OWN TO THE CP/M VERSION, AND THEN TRANSLATED
; IT TO MSDOS, USING THE PROGRAM 'ICT.COM' FROM THE HEATH USERS' GROUP.
; (A CP/M-86 VERSION OF THE PROGRAM EXISTS, BUT I DIDN'T MAKE USE OF IT
; IN PREPARING THIS VERSION).
;
; FURTHER ENHANCEMENTS WERE ADDED TO THE MSDOS VERSION, AS FOLLOWS:
;
; 1. TAB CHARACTERS ARE EXPANDED AND LINES ARE TRUNCATED AFTER 80 COLS.
;
; 2. FOR COMPATIBILITY WITH WORD PERFECT (tm) FILES, LINE FEEDS WITHOUT
; CARRIAGE RETURNS AND CARRIAGE RETURNS W/O LINE FEEDS ARE TREATED THE
; SAME AS CR + LF. (WORDSTAR (tm) FILES ARE ALSO HANDLED CORRECTLY, SINCE
; THE HI BITS ARE STRIPPED OFF.)
;
; 3. 'B' GOES TO BEGINNING OF FILE, 'E' SKIPS TO END.
;****************************************************
; TO BUILD SHOW.EXE:
;	MASM SHOW,SHOW,NUL,NUL
;	LINK SHOW,SHOW,NUL,ASM
;
;****************************************************
; ORIGINAL COMMENTS FROM THE CP/M VERSION:
;
;A buffered, bidirectional version of SHOW.ASM.
;Ver 1.0, 23 Aug 82
;Phil Cary, 748 Kenilworth Parkway, Baton Rouge, LA  70808
;Ver 1.1, 30 Mar 83 added BDOS function 6 W.F.McGee
;Ver 1.2, 22 May 83 added hi-bit mask for WordStar files
;         and Wyse-100/200 SCRL keys-changed messages
;         also made CP/M-86 ver using XLT86 see A86 file
;         H.M. Van Tassell
;modified for H89 by Jon Dart 04/13/84 -- uses H89 up and down arrow keys.
;Also cleaned up code, made pgrm. return to CCP instead of warm-booting.
;
;BISHOW is a buffered, bidirectional version of SHOW.ASM which first
;appeared in Interface Age, November, 1981.  That program could
;only scroll forward in a file, and read sectors from disk one at a
;time as they were sent to the console.  I used SHOW frequently to take
;a quick look at a file without loading a big text editor, and to examine
;another file with the RUN command while in Wordstar.  TYPE does not work
;since it is not a file that Wordstar can load and run.
;
;It was annoying when I went past the point I was looking for in a file
;with SHOW, and could not go backwards.  Thus, this bidirectional version
;which uses random access reads. In addition, buffering was added so that
;the number of disk reads would be reduced, and moving back and forth
;in a moderate sized file would be speeded up.  There is a trade off
;between the size of the buffer and the length of time it takes to refill
;the buffer which should be set to the user's preference.
;
;Just a small contribution to the public domain software as partial
;payment for the many fine and educational programs the system has
;given me.  Phil Cary.

	DOSSEG
	.MODEL	SMALL

;*************
; BEGIN CODE *
;*************
        .XLIST
        INCLUDE MSDOS2.DEF
        INCLUDE ASCII.DEF
	INCLUDE MACROS.DEF
        .LIST

MAXSEC  EQU     64                      ;BUFFER SIZE IN 128-BYTE RECORDS
FULBUF  EQU     (MAXSEC*128)            ;OFFSET TO END OF BUFFER
EOF     EQU     CTRL$Z                  ;END OF FILE CHAR.
TRUE    EQU     1
FALSE   EQU     1-TRUE
IBM     EQU     TRUE                    ;TRUE IF IBM-COMPAT AT BIOS LEVEL
BIOS    EQU     10H                     ;IBM INTERRUPT FOR BIOS VIDEO SERVICES

; MEMORY ALLOCATION

	.DATA
JMPTBL  DW      OFFSET _TEXT:BCMD        ;JUMP TABLE TO COMMAND ROUTINES
        DW      OFFSET _TEXT:ECMD        ;(PUT HERE BECAUSE MUST BE DEFINED ON PASS 1)
        DW      OFFSET _TEXT:XCMD
CMDLST  DB      'BEX',0                 ;VALID COMMANDS
LINMAX  DB      24                      ;NUMBER OF TO WRITE LINES ON CONSOLE
LINCNT  DB      0                       ;LINE NUMBER ON WRITE OR MOVE BACK IN BUFFER
COLCNT  DB      1                       ;COUNT OF COLUMNS WRITTEN TO DISPLAY
AMTREAD DW      0                       ;AMOUNT READ ON LAST READ OP
FILEPOS DQ      0                       ;OFFSET FROM START OF FILE
INHANDLE DW     0                       ;INPUT FILE HANDLE

	.DATA?
VMODE   DB      1 DUP (?)               ;VIDEO MODE (IBM ONLY)
VPAGE   DB      1 DUP (?)               ;VIDEO PAGE (IBM ONLY)
SCRSIZE DB      1 DUP (?)               ;PHYSICAL SCREEN WIDTH, COLUMNS
BUFFER	DB	FULBUF DUP (?)

	.STACK
        DB      512 DUP (?)

	.CODE
EXTRN   SKIPSP:NEAR,TYPTX:NEAR,UC:NEAR,CMDSRC:NEAR
EXTRN   CLRCO:NEAR,CIN:NEAR,COUT:NEAR

ENTRY:  JMP     SHORT START             ;SKIP OVER NEXT SUBROUTINE

;       ROUTINE TO CLEAR SCREEN, HOME CURSOR:
;       (MAY HAVE TO CHANGE FOR NON-IBM MACHINES)

CLRSCR  PROC    NEAR
        PUSH    BX
        IF      IBM
        PUSH    DS
        MOV     AX,DGROUP
        MOV     DS,AX
        MOV     DX,0
        CALL    MOVEXY                  ;MOVE TO HOME POSITION
        MOV     AL,BYTE PTR DGROUP:VMODE  ;GET CURRENT VIDEO MODE
        MOV     AH,0
        INT     BIOS                    ;RESET MODE (CLEARS SCREEN)
        POP     DS
        ELSE
        MOV     AL,FF                   ;USE FF (WILL WORK ON MOST TERMINALS)
        CALL    COUT                    ;(OR ADD YOUR CLEAR SCREEN FN. HERE)
        ENDIF
        POP     BX
        RET
CLRSCR  ENDP

MOVEXY  PROC    NEAR                    ;MOVE TO ROW (DH) AND COLUMN (DL)
        MOV     AH,2
        MOV     BH,BYTE PTR DGROUP:VPAGE  ;VIDEO PAGE #
        MOV     BL,0                    ;COLOR (DON'T CHANGE)
        INT     BIOS                    ;MOVE CURSOR
        RET
MOVEXY  ENDP

START:  TEST_DOS2                       ;TEST FOR DOS 2.0
        PUSH    DS                      ;SAVE DATA SEG (POINTS TO PSP)
        MOV     AX,DGROUP
        MOV     DS,AX                   ;SET DATA SEG.
        IF      IBM
        MOV     AH,15
        INT     BIOS                    ;GET VIDEO MODE
        MOV     BYTE PTR VPAGE,BH       ;STORE VIDEO PAGE #
        MOV     BYTE PTR SCRSIZE,AH     ;STORE CHARS/LINE
        MOV     BYTE PTR VMODE,AL       ;STORE DISPLAY MODE
        ELSE
        MOV     BYTE PTR SCRSIZE,80     ;ASSUME 80 COLUMN DISPLAY (MODIFY IF NEEDED)
        ENDIF

        POP     DS                      ;RESTORE INITIAL DATA SEG.
        CALL    CLRSCR                  ;CLEAR SCREEN, HOME CURSOR
MEMOK:  MOV     AX,DGROUP		;GET DATA SEG
	MOV	ES,AX			;SET EXTRA SEG TO POINT TO BUFFER
        MOV     BX,(80H)         	;GET BYTE COUNT FOR COMMAND LINE
        MOV     AL,[BX]                 ;GET BYTE COUNT
        CMP     AL,0                    ;TEST IT
        JNE     GOTFN                   ;IF GOT SOMETHING
        JMP     HELP                    ;NOTHING, GIVE HELP
GOTFN:  MOV     AH,0
        INC     BX
        PUSH    BX
        ADD     BX,AX
        MOV     [BX],BYTE PTR 0         ;MAKE SURE COMMAND LINE ENDS W. 0
        POP     BX
        CALL    SKIPSP                  ;SKIP BLANKS AND TABS
        JNB     START2                  ;IF GOT SOMETHING
        MOV     AX,CS
        MOV     DS,AX
        JMP     HELP                    ;OTHERWISE GIVE HELP
START2: MOV     DX,BX
        MOV     AL,READ_ACCESS
        MOV     AH,DOS2_OPEN
        INT     DOS                     ;TRY TO OPEN FILE
        PUSHF                           ;SAVE STATUS
        PUSH    AX
        MOV     AX,DGROUP
        MOV     DS,AX                   ;SET DATA SEG
        CALL    CLRSCR                  ;CLEAR SCREEN
        POP     AX
        POPF                            ;RESTORE STATUS FROM FILE OPEN
        JNB     OPENOK                  ;IF OK
        JMP     BADOPEN                 ;NOT OK, GIVE ERROR MSG.
OPENOK:
        MOV     WORD PTR INHANDLE,AX    ;SAVE FILE HANDLE
        CALL    FILBUF                  ;FILL THE DISK BUFFER

BEGIN:
        MOV     BYTE PTR LINCNT,0       ;INIT LINE COUNT
        MOV     BYTE PTR COLCNT,1       ;AND COLUMN COUNT TO 1
        MOV     BYTE PTR LINMAX,24      ;SET MAX LINE COUNT
WRTFWD: MOV     BX,OFFSET BUFFER        ;POINT TO START OF BUFFER
WRTFWD1:MOV     AL,BYTE PTR [BX]     	;GET A CHARACTER
        CMP     AL,EOF                  ;IS IT EOF?
        JNE     L_2                     ;IF NOT
        JMP     GETCMD                  ;EOF, GO WAIT FOR COMMAND ENTRY
L_2:
        PUSH    AX                      ;SAVE CHAR.
        CALL    CTYPE                   ;PUT IT ON CONSOLE
        POP     AX                      ;GET CHAR.
        AND     AL,7FH                  ;STRIP HI BIT
        CMP     AL,CR                   ;SEE IF END OF LINE
        JE      SAWCR                   ;IF GOT CR, CHECK FOR LF
        CMP     AL,LF                   ;CHECK FOR LF
        JNE     WRTFWD2                 ;IF NOT LF
        DEC     BX                      ;POINT TO PREV. CHARACTER
        CMP     [BX],BYTE PTR CR     	;WAS PREVIOUS CHARACTER CR?
        PUSHF                           ;SAVE FLAGS
        INC     BX                      ;BUMP POINTER
        POPF                            ;GET FLAGS - 'Z'=1 IF LAST CHAR. CR
        JE      WRTFWD2                 ;IF CR, IGNORE IT
        MOV     AL,CR                   ;GOT LF ALONE, MAP TO CR
        CALL    CTYPE                   ;SHOW CR
        JMP     SHORT FWDCNT            ;COUNT LF AS END OF LINE CHAR.
WRTFWD2:INC     BX                      ;BUMP BUFFER POINTER
        MOV     DX,OFFSET BUFFER+FULBUF  ;GET END OF BUFFER OFFSET
        CMP     BX,DX                   ;COMPARE W. BUFFER PTR.
        JNE     WRTFWD1                 ;IF NOT EQUAL, CONTINUE
        CALL    FILBUF                  ;ELSE FILL BUFFER AGAIN
        JMP     WRTFWD                  ;..AND START AT BEGINNING OF BUFFER
SAWCR:  MOV     AL,BYTE PTR [BX+1]      ;SAW CR, GET NEXT CHAR.
        CMP     AL,LF                   ;IS IT LF?
        JE      FWDCNT                  ;YES, DON'T WORRY
        MOV     AL,LF                   ;NO LF AFTER CR,
        CALL    CTYPE                   ;SHOW LF ANYWAY

FWDCNT: MOV     SI,OFFSET LINCNT
        MOV     AL,BYTE PTR LINMAX      ;GET MAX. LINE COUNT
        CMP     BYTE PTR [SI],AL        ;COMPARE LINE COUNT WITH LIMIT
        JNE     WRTFWD2                 ;IF NOT THERE, CONTINUE
        MOV     BYTE PTR [SI],0         ;RE-INIT LINE COUNT

GETCMD:                                 ;WAIT FOR COMMAND
        IF      IBM
        PUSH    BX
        MOV     DH,24
        MOV     DL,0
        CALL    MOVEXY                  ;MOVE TO BOTTOM OF SCREEN
        POP     BX
        ENDIF
        CALL    CIN                     ;GET CHAR. FROM CONSOLE
        CALL    UC                      ;MAKE IT UPPER CASE
        CMP     AL,0                    ;IS IT NULL (FUNCTION KEY LEADIN)? -
        JE      FNKEY                   ;YES.
        PUSH    BX
        MOV     BX,OFFSET CMDLST        ;POINT TO COMMAND LIST
        CALL    CMDSRC                  ;SEARCH FOR MATCH
        POP     BX
        DEC     AL                      ;-1 SO INDEX STARTS AT 0
        JS      BADCMD                  ;IF NO MATCH
        SHL     AL,1                    ;DOUBLE INDEX
        MOV     AH,0                    ;HI BYTE 0
        MOV     BX,AX                   ;INDEX IN INDEX REGISTER
        JMP     JMPTBL[BX]              ;JUMP TO ROUTINE

FNKEY:
        CALL    CIN                     ;FUNCTION KEY PRESSED, GET NEXT CHAR.
        CMP     AL,49H                  ;PAGE UP?
        JE      GOBACK                  ;YES, GO BACK
        CMP     AL,51H                  ;PAGE DOWN?
        JE      GOFWD                   ;YES, GO FWD
BADCMD: CALL    TYPTX                   ;..A WRONG CHOICE SO GIVE MESSAGE
        DB      CR,LF,LF
        DB      'Commands: PG DN, PG UP, B(eginning), E(nd), X(exit)'
        DB      CR,BEL+80H
        JMP     GETCMD                  ;TRY AGAIN FOR COMMAND

GOFWD:
        CMP     BYTE PTR [BX],EOF    	;AT EOF?
        JE      GETCMD                  ;YES, IGNORE 'FORWARD' COMMAND
        MOV     BYTE PTR LINMAX,24      ;24 LINES 2 WRITE
        CALL    CLRSCR                  ;CLEAR SCREEN
        JMP     WRTFWD1                 ;SCROLL FORWARD
GOBACK:
        MOV     BYTE PTR LINMAX,24      ;24 LINES 2 WRITE
WRTBAK:
        MOV     BYTE PTR LINCNT,44      ;LINES TO MOVE BACK
        CALL    CLRSCR                  ;CLEAR THE SCREEN
WRTBAK1:
        CMP     BX,OFFSET BUFFER        ;AT START OF BUFFER?
        JE      FILBAK                  ;IF AT START OF BUFFER
WRTBAK2:MOV     AL,BYTE PTR [BX]     	;GET A CHARACTER
        DEC     BX                      ;DECREMENT BUFFER
        AND     AL,7FH                  ;STRIP HI BIT
        CMP     AL,CR                   ;SEE IF END OF LINE
        JE      BAKCNT                  ;IF CR
        CMP     AL,LF
        JNE     WRTBAK1                 ;IF NOT LF
        MOV     AL,BYTE PTR [BX]        ;GET CHAR. BEFORE LF
        CMP     AL,CR                   ;IS CR?
        JE      WRTBAK1                 ;YES, IGNORE LF

BAKCNT: DEC     BYTE PTR LINCNT         ;ELSE, DECR. NUMBER OF LINES TO MOVE BACK
        JNZ     WRTBAK1                 ;..AND LOOP IF NOT THERE
        INC     BX                      ;ELSE BUMP POINTER TO ACCOUNT FOR LF WITH CR
        JMP     WRTFWD1                 ;..AND GO WRITE A SCREEN

FILBAK: MOV     DX,FULBUF 		;GET THE BUFFER SIZE
        MOV     BX,WORD PTR AMTREAD	;AND THE # OF BYTES LAST READ
        ADD     BX,DX                   ;ADD THEM
        MOV     DX,WORD PTR FILEPOS
        MOV     CX,WORD PTR FILEPOS+2   ;LOAD FILEPOS INTO CX:DX
        SUB     DX,BX                   ;SUBTRACT AMT. TO MOVE BACK
        JNB     NOBORROW                ;IF NO BORROW
        SUB     CX,1                    ;CX <- CX-1 (AFFECTS BORROW FLAG)
NOBORROW:
        JB      FILBEG                  ;IF BEYOND BEGINNING OF FILE
        MOV     WORD PTR FILEPOS,DX     ;STORE LO WORD OF FILE POS
        MOV     WORD PTR FILEPOS+2,CX   ;AND HI WORD OF FILE POS
        MOV     BX,WORD PTR INHANDLE
        MOV     AL,0                    ;POSITION FROM START
        MOV     AH,LSEEK
        INT     DOS                     ;MOVE FILE POINTER
        CALL    FILBUF                  ;FILL THE BUFFER
        MOV     BX,OFFSET BUFFER+FULBUF  ;..AND POINT TO END OF BUFFER
        CALL    CLRSCR                  ;CLEAR THE SCREEN
        JMP     WRTBAK2                 ;CONTINUE MOVING BACK IN FILE

ECMD:                                   ;COME HERE TO MOVE TO END OF FILE
        CALL    CLRSCR                  ;CLEAR SCREEN
        MOV     AH,LSEEK                ;PREPARE TO MOVE FILE POINTER
        MOV     BX,WORD PTR INHANDLE    ;GET FILE HANDLE
        MOV     AL,2                    ;POSITION AT END
        MOV     CX,0                    ;OFFSET, MSW
        MOV     DX,0                    ;OFFSET, LSW
        INT     DOS                     ;MOVE FILE POINTER
        SUB     AX,FULBUF               ;SUBTRACT BUFFER SIZE
        JNB     NOBORR                  ;IF NO BORROW
        SUB     DX,1
        JNB     NOBORR                  ;IF FILE BIGGER THAN BUFFER
        MOV     AX,0
        MOV     DX,0                    ;FILE SMALLER THAN BUFFER
        JMP     SHORT SMALL             ;FILL BUFFER STARTING FROM BEGINNING
NOBORR:
        MOV     CX,DX                   ;MSW OF OFFSET IN CX
        MOV     DX,AX                   ;LSW OF OFFSET IN DX
SMALL:
        MOV     AH,LSEEK                ;GOING TO MOVE POINTER AGAIN
        MOV     BX,WORD PTR INHANDLE    ;GET HANDLE
        MOV     AL,0                    ;POSITION FROM START
        INT     DOS                     ;MOVE FILE POINTER
        MOV     WORD PTR FILEPOS,AX     ;UPDATE FILE POSITION
        MOV     WORD PTR FILEPOS+2,DX   ;HI WORD TOO
        CALL    FILBUF                  ;FILL BUFFER
        MOV     BX,OFFSET BUFFER        ;LOAD BUFFER OFFSET
        ADD     BX,WORD PTR AMTREAD     ;COMPUTE ADDR. OF LAST VALID BYTE
        MOV     BYTE PTR LINMAX,24      ;24 LINES TO DISPLAY
        MOV     BYTE PTR LINCNT,24      ;24 LINES TO MOVE BACK
        JMP     WRTBAK1                 ;GO BACK FROM END

BCMD:                                   ;MOVE TO BEGINNING OF FILE
        CALL    CLRSCR                  ;CLEAR SCREEN
FILBEG: MOV     WORD PTR FILEPOS,0      ;ZERO FILE POS
        MOV     WORD PTR FILEPOS+2,0
        MOV     CX,0
        MOV     DX,0
        MOV     BX,WORD PTR INHANDLE
        MOV     AL,0
        MOV     AH,LSEEK
        INT     DOS                     ;SEEK TO START OF FILE
        CALL    FILBUF                  ;FILL BUFFER
        JMP     BEGIN                   ;GO WRITE IT

FILBUF  PROC    NEAR                    ;FILL BUFFER FROM FILE
        PUSH    DX                      ;SAVE REGS.
        PUSH    BX
        MOV     BX,WORD PTR INHANDLE    ;LOAD FILE HANDLE
        MOV     DX,OFFSET BUFFER        ;LOAD OFFSET TO DISK BUFFER
        MOV     CX,FULBUF               ;SIZE OF BUFFER
        MOV     AH,READ
        INT     DOS                     ;READ FROM DISK
        JB      RDERR                   ;IF ERROR
        MOV     WORD PTR AMTREAD,AX     ;SAVE AMT. READ
        CMP     AX,CX                   ;IS BUFFER FULL?
        JE      FULL                    ;YES, IT IS
        MOV     BX,AX                   ;NO, MAKE BX POINT TO LAST BYTE+1
	ADD	BX,OFFSET BUFFER
        MOV     BYTE PTR [BX],EOF    	;STICK IN EOF CHAR.
FULL:
        ADD     WORD PTR FILEPOS,AX     ;UPDATE FILE POINTER
        JNC     NOCARRY
        INC     WORD PTR FILEPOS+2
NOCARRY:                                ;READ OK
        POP     BX
        POP     DX
        RET
FILBUF  ENDP

RDERR:  CALL    TYPTX                   ;READ ERROR
        DB      'Disk read error.',CR,LF+80h
        POP     BX                      ;CLEAR STACK
        POP     DX
        POP     DX
        JMP     EXIT0                   ;GO EXIT

BADOPEN:                                ;COME HERE WHEN CAN'T OPEN FILE
        CALL    TYPTX                   ;GIVE ERROR MSG AND QUIT
        DB      CR,LF,LF,'Requested file is not on this disk.',CR,LF
        DB      'Please check your spelling or use DIR.',cr,lf,lf,bel+80H
        JMP     EXIT1                   ;LEAVE MSG ON SCREEN ON EXIT

HELP:                                   ;COME HERE WHEN NO FILE NAME GIVEN
        MOV     AX,DGROUP
        MOV     DS,AX
        CALL    CLRSCR
        CALL    TYPTX
        DB      'SHOW V. 2.2 by Jon Dart (01-Nov-87)',CR,LF,CR,LF
        DB      'Correct usage of SHOW is --',cr,lf,lf
        DB      '    A>SHOW filename  ',cr,lf,lf
        DB      'After first page is displayed, press the PG DN key to go'
        DB      CR,LF
        DB      "forward, and the PG UP key to go backward.  'B' moves to"
        DB      CR,LF
        DB      'the beginning of the file, and E moves to the end.  Type'
        DB      CR,LF
        DB      'X to exit.',bel,cr,lf,lf+80h

        JMP     EXIT1

;       OUTPUT 1 CHAR. - EXPANDS TABS, SHOWS CONTROL CHARS. IN VISIBLE FORM.
;       ENTRY:  AL = CHAR.
;
CTYPE   PROC    NEAR
        PUSH    CX                      ;SAVE THE REGISTERS
        PUSH    DX                      ;..FROM
        PUSH    BX                      ;..CLOBBER
        AND     AL,7FH                  ;STRIP HI BIT
        JZ      QUIT                    ;IF NULL
        CMP     AL,SPACE                ;CONTROL CHAR?
        JGE     NOTCTL                  ;NOPE.
        CMP     AL,CR                   ;GOT CONTROL CHAR.
        JE      NOTCTL                  ;IF CR, JUST PRINT IT
        CMP     AL,LF
        JE      NOTCTL                  ;IF LF, JUST PRINT IT
        CMP     AL,TAB
        JE      GOTTAB                  ;IF TAB, EXPAND
        ADD     AL,'A'-1                ;ELSE CONVERT TO LETTER
        PUSH    AX
        MOV     AL,'^'
        CALL    CTYPE1                  ;SHOW UP-ARROW
        POP     AX
NOTCTL: CALL    CTYPE1                  ;DISPLAY CHAR.
        JMP     SHORT QUIT
GOTTAB: MOV     AL,COLCNT               ;GET COLUMN COUNT
        MOV     BL,AL
        CALL    NEXTTAB                 ;COMPUTE NEXT TAB STOP
        SUB     AL,BL                   ;GET DISTANCE TO IT
        MOV     CL,AL
        MOV     CH,0
GOTAB:  MOV     AL,SPACE                ;PRINT SPACES TO NEXT TAB STOP
        PUSH    CX
        CALL    CTYPE1
        POP     CX
        LOOP    GOTAB
QUIT:   POP     BX                      ;RESTORE
        POP     DX                      ;..THE REGISTERS
        POP     CX
        RET
CTYPE   ENDP

;       SHOW 1 CHAR. (IN AL)
;       DOESN'T SHOW PAST 80TH COLUMN
;       ENTRY:  AL = CHAR.

CTYPE1  PROC    NEAR
        IF      IBM
        CMP     AL,SPACE
        JGE     NOTCTRL                 ;IF NOT CONTROL CHAR. (CR OR LF)
CTRL:   CALL    UPDATE                  ;CR OR LF, UPDATE LINE & COL. COUNTS
        JMP     SHORT MOVE              ;JUST MOVE CURSOR
NOTCTRL:
        MOV     BL,BYTE PTR COLCNT
        CMP     BL,BYTE PTR SCRSIZE
        JG      UPDATE                  ;IF PAST LAST COL., DON'T SHOW CHAR.
        PUSH    AX
        MOV     AH,10                   ;BIOS FUNCTION #
        MOV     BH,BYTE PTR VPAGE       ;PAGE #
        MOV     CX,1                    ;# CHARS. TO WRITE
        INT     BIOS                    ;WRITE USING BIOS
        POP     AX
        CALL    UPDATE                  ;UPDATE LINE AND COL. COUNTS
MOVE:
        PUSH    AX
        MOV     DH,BYTE PTR LINCNT      ;LINE COUNT IN DH
        MOV     DL,BYTE PTR COLCNT      ;COLUMN COUNT IN DL
        DEC     DL                      ;-1 CAUSE COLUMNS START AT 1
        CALL    MOVEXY                  ;MOVE CURSOR USING BIOS
        POP     AX
        RET
        ELSE
        CMP     BYTE PTR COLCNT,80      ;REACHED 80TH COL?
        JG      UPDATE                  ;YES, DON'T SHOW CHAR.
        CALL    COUT                    ;DISPLAY CHAR. USING DOS
        ENDIF
UPDATE:
        CMP     AL,CR                   ;IF CHAR. = CR,
        JE      ZEROCOL                 ;ZERO COL. COUNT
        CMP     AL,LF                   ;DON'T COUNT LF
        JE      SKIPINC                 ;AS PRINTING CHAR.
        INC     BYTE PTR COLCNT         ;PRINTING CHAR., BUMP COLUMN COUNT
        RET
SKIPINC:
        INC     BYTE PTR LINCNT         ;GOT LINE FEED, BUMP LINE COUNT
        RET
ZEROCOL:
        MOV     BYTE PTR COLCNT,1
        RET
CTYPE1  ENDP

;       NEXTTAB = COMPUTE NEXT STANDARD TAB STOP
;
;       ENTRY:  (AL) = CURSOR POSITION
;       EXIT:   (AL) = POSITION OF NEXT TAB
;       USES:   AL,FLAGS
;
NEXTTAB PROC    NEAR
        PUSH    CX
        DEC     AL
        MOV     CH,AL
        AND     AL,00000111B
        MOV     CL,8
        SUB     CL,AL
        ADD     CH,CL
        MOV     AL,CH
        INC     AL
        POP     CX
        RET
NEXTTAB ENDP

XCMD:
EXIT0:  CALL    CLRSCR                  ;CLEAR THE SCREEN
EXIT1:  CALL    CLRCO                   ;CLEAR ANY TYPE-AHEAD
EXIT2:  MOV     AH,EXIT
        INT     DOS                     ;RETURN TO DOS
ENDCODE EQU     $

        END     ENTRY

```
{% endraw %}

## TAIL.ASM

{% raw %}
```
        TITLE TAIL - A FILTER FOR MSDOS2
        PAGE 55,132
;**********************************************************************
;       THIS PROGRAM PRINTS THE LAST FEW LINES OF A TEXT FILE.
;
;       USAGE:  TAIL -n filename
;               -n is optional, limits output to n lines (20 default)
;
;       BY: JON DART
;           3012 HAWTHORN ST.,
;           SAN DIEGO, CA 92104
;
;	VERSION 1.8: 02-OCT-87 ASSEMBLES UNDER MASM 5.0
;	VERSION 1.7: 10-JAN-87 HANDLES AMBIG. FILE NAMES, MULTIPLE FILES
;	VERSION 1.6: 14-AUG-86 HANDLES -n UP TO 65535, NOW BUFFERS OUTPUT
;	VERSION 1.5: 06-JUL-86 CHANGES TO MEMORY ALLOC, + NOW ASSEMBLES UNDER
;		     MASM 4.0
;       VERSION 1.4: 04-FEB-86 FIXED BUG, NOW READS FROM STDIN CORRECTLY
;       VERSION 1.3: 16-JAN-86 MORE KOSHER MEMORY USAGE, NOW .EXE FILE
;       VERSION 1.2: 27-SEP-85 USES STD. INPUT IF NO FILE NAME GIVEN
;
;       CONVERTED FROM CP/M-80 TO MSDOS, 16-SEP-85
;
;       VERSION 1.1: 15-MAR-85
;       VERSION 1.0: 15-JAN-85
;
;   TO BUILD TAIL.EXE:
;	MASM TAIL,TAIL,NUL,NUL
;	LINK TAIL,TAIL,NUL,ASM

INBUFSIZE EQU   8192                    ;SIZE OF INPUT BUFFER
OUTBUFSIZE EQU	512			;SIZE OF OUTPUT BUFFER
MAXARGS	EQU	40			;MAX. # COMMAND LINE ARGUMENTS
PRGSIZE	EQU 	800H			;MAX. SIZE OF PROGRAM + FIXED DATA

        .XLIST
        INCLUDE ASCII.DEF
        INCLUDE MSDOS2.DEF
	INCLUDE MACROS.DEF
        .LIST

ERROR   MACRO   ERRNUM                  ;SHOW ERROR MESSAGE
	PUSH	DS
	MOV	AX,DGROUP
	MOV	DS,AX
        MOV     DX,OFFSET MSG&ERRNUM
	CALL	ERRORMSG
	POP	DS
        ENDM

	DOSSEG
	.MODEL 	SMALL

;       MEMORY DEFINITIONS:
;
	.DATA
ENDTXT  DW      1 DUP (?)               ;OFFSET TO END OF TEXT IN INPUT BUFFER
NREAD   DW      1 DUP (?)               ;NUMBER OF BYTES READ
SIZEHI  DW      1 DUP (?)               ;HI WORD OF FILE SIZE
SIZELO  DW      1 DUP (?)               ;LO WORD OF FILE SIZE
POSHI	DW	1 DUP (?)		;HI WORD OF FILE POSITION
POSLO	DW	1 DUP (?)		;LO WORD OF FILE POSITION
NUMARGS	DW	1 DUP (?)		;NUMBER OF COMMAND LINE ARGUMENTS
INHANDLE DW     0                       ;INPUT FILE HANDLE
                                        ;(STD. INPUT BY DEFAULT)
NUMLIN  DW      20                      ;NUMBER OF LINES TO LIST
NUMCNT	DW	1 DUP (?)		;COUNTS NUMBER OF LINES TO GO
ONEFILE	DB	1			;FLAG, SET 0 WHEN >1 FILE
ATSTART DB	0			;FLAG, SET <>0 WHEN AT START OF FILE
AMTTOREAD DW	INBUFSIZE		;AMOUNT TO READ ON NEXT READ OP
OUTNDX	DW	0			;INDEX TO NEXT FREE SLOT IN OUTPUT BUFFER
MSG1    DB      CR,LF,"tail: can't open: ",0
MSG1E   DB      CR,LF,0
MSG2    DB      CR,LF,"tail: read error.",CR,LF,0
MSG4	DB	CR,LF,"tail usage: tail -n file1 file2 ...",CR,LF,0
MSG5	DB	CR,LF,"tail: too many command line arguments",CR,LF,0
MSG6	DB	CR,LF,"tail: unknown pathname ",0

	.STACK
        DB      512 DUP (?)

;	UNINITIALIZED DATA:

	.DATA?
INBUF	DB      INBUFSIZE DUP (?)	;INPUT BUFFER
OUTBUF	DB      OUTBUFSIZE DUP (?)	;OUTPUT BUFFER
PREFIX	DB      65 DUP (?)         	;DRIVE/DIRECTORY PREFIX
SPATH	DB      65 DUP (?)		;SEARCH PATH
FILENAME DB     65 DUP (?)		;FILE NAME
ARGPTRS DB 	(2*MAXARGS) DUP (?)	;POINTERS TO COMMAND LINE ARGUMENTS
ARGBUF	DB 	300 DUP (?)  		;BUFFER FOR COMMAND LINE ARGUMENTS
DTA	DB      128 DUP (?)		;DATA TRANSFER AREA FOR DOS
MAXMEM	EQU	DTA+128

	.CODE
        EXTRN   SKIPSP:NEAR,DTOBIN:NEAR,CPYCNT:NEAR
        EXTRN   ERRORMSG:NEAR,TYPTX:NEAR,COUT:NEAR
	EXTRN	FIXPATH:NEAR,GETARGS:NEAR,TYPE_UFN:ABS,TYPE_UNK:ABS

ENTRY:
        TEST_DOS2                       ;TEST FOR DOS 2.0, EXIT IF DOS 1
MEMOK:  
	MOV	AX,DGROUP
	MOV	ES,AX 		 	;SET EXTRA SEG TO POINT TO DATA
        MOV     BX,(80H)         	;GET BYTE COUNT FOR COMMAND LINE
        CMP     BYTE PTR [BX],0         ;TEST IT
        JNE     L_1                     ;IF NOT 0
	MOV	DS,AX
        JMP     START			;NO ARGUMENTS, USE STDIN
L_1:
        PUSH    BX
        MOV     DL,BYTE PTR [BX]
        MOV     DH,0
        ADD     BX,DX
        INC     BX
        MOV     BYTE PTR [BX],0         ;PUT 0 BYTE AT END OF COMMAND LINE
        POP     BX
        INC     BX			;POINT TO START OF COMMAND LINE
	MOV	SI,OFFSET ARGPTRS
	MOV	DI,OFFSET ARGBUF
	MOV	CX,MAXARGS
	CALL	GETARGS			;COLLECT COMMAND LINE ARGUMENTS
	JNB	SHORT L_2		;IF OK
        ERROR   5	                ;TOO MANY ARGUMENTS
        JMP     EXIT2
L_2:
	MOV	AX,DGROUP
	MOV	DS,AX			;SET DATA SEG
	MOV	WORD PTR NUMARGS,CX	;SAVE # OF ARGUMENTS
	CMP	CX,0
	JNE	SHORT L_2A		;IF SOME ARGUMENT
	JMP	START			;NO ARGUMENTS, USE STDIN
L_2A:
	MOV	SI,OFFSET ARGPTRS
	MOV	BX,WORD PTR [SI]	;POINT TO 1ST ARGUMENT
	MOV	AL,BYTE PTR [BX]	;GET 1ST CHAR.
        CMP     AL,'-'
        JE      L_3                     ;IF SWITCH SPECIFIED
	MOV	SI,OFFSET ARGPTRS
	MOV	CX,WORD PTR NUMARGS	;GET # OF ARGUMENTS
        JMP     GETFILES		;IF NO SWITCH
L_3:
        INC     BX
        MOV     CL,0
        PUSH    BX
CD:     MOV     AL,BYTE PTR [BX]     	;HAVE NUMBER, COUNT NUMBER OF DIGITS
        CMP     AL,'0'
        JC      NODGT
        CMP     AL,'9'+1
        JNC     NODGT
        INC     BX
        INC     CL
        JMP     SHORT CD
NODGT:
        POP     BX
        MOV     CH,0                    ;CL HOLDS DIGIT COUNT
        CALL    DTOBIN                  ;CONVERT NUMBER TO BINARY
        JNC     L_4                     ;IF OK
	JMP	SHORT USE
L_4:
        CMP     AX,0                    ;IS NUMBER 0?
        JNE     NOT0                    ;NO.
        JMP     EXIT2                   ;YES, IT IS, JUST EXIT
NOT0:
        MOV     WORD PTR NUMLIN,AX      ;STORE # LINES
	MOV	SI,OFFSET ARGPTRS+2
	MOV	CX,WORD PTR NUMARGS	;GET # OF ARGUMENTS
	DEC	CX			;-1 CAUSE OF SWITCH
	JMP	SHORT GETFILES
USE:
        ERROR   4	                ;TELL USER HOW TO USE
        JMP     EXIT2
START:	
	CALL	TAIL			;SHOW THE "TAIL"
	JMP	EXIT2
GETFILES:
	MOV	AX,DGROUP
	MOV	DS,AX
	CMP	CX,0			;NO FILE ARGUMENTS?
	JNE	GOT1
	JMP	START			;NO, JUST USE STDIN
GOT1:
	CMP	CX,1			;>1 ARG?
	JE	ONLY1			;NOPE
	MOV	BYTE PTR ONEFILE,0	;>1 ARG
ONLY1:
ARGLUP:	MOV	BX,WORD PTR [SI]	;BX POINTS TO FILE NAME
	PUSH	CX
	PUSH	SI
	CALL	DOARG
	POP	SI
	POP	CX
SKIPSW:
	ADD	SI,2
	LOOP	ARGLUP
	JMP	EXIT2	

;	DOARG = PROCESS 1 ARGUMENT
;	ES:BX POINTS TO IT

DOARG	PROC 	NEAR
	MOV	AH,SET_DTA
	MOV	DX,OFFSET DTA
	INT	DOS			;SET DTA
        MOV	CX,OFFSET SPATH
        MOV	DX,OFFSET PREFIX
        PUSH    BX
        CALL    FIXPATH                 ;PARSE PATHNAME
	POP	BX
	CMP	AL,TYPE_UNK
	JE	BADNAME
	CMP	AL,TYPE_UFN
	JE	GOTNAME			;IF UNAMBIG. FILE NAME
	MOV	BYTE PTR ONEFILE,0	;AMBIG. FILE NAME OR DIR, FLAG IT
	JMP	SHORT GOTNAME
BADNAME:
	MOV	DX,OFFSET MSG6
	CALL	ERRORMSG		;BAD FILE NAME, SHOW MSG.
	MOV	DX,BX
	CALL	ERRORMSG		;SHOW FILE THAT CAUSED IT
	RET
GOTNAME:
        MOV     DX,OFFSET SPATH        	;POINT TO SEARCH PATH
        MOV     CX,31H                  ;SET SEARCH ATTRIBUTES
        MOV     AH,FIND_FIRST
        INT     DOS                     ;SEARCH FOR 1ST MATCH
	JB	BADNAME			;IF NOTHING FOUND
GOTFILE:
	MOV	SI,OFFSET PREFIX
	MOV	DI,OFFSET FILENAME
	MOV	CX,65
	CALL	CPYCNT			;COPY PREFIX TO FILE NAME AREA
        DEC     DI                      ;BACK UP OVER NULL
        MOV     SI,(OFFSET DTA)+30     	;POINT TO FILE NAME WE FOUND
        CMP     [SI],BYTE PTR '.'       ;DOES IT START WITH .? -
        JNE     NOTDOT                  ;- NO
	JMP	SHORT SKIPFILE		;YES, JUST SKIP IT
NOTDOT:
	CALL	CPYCNT			;COPY FILE WE FOUND AFTER PREFIX
	CALL	DOFILE			;DO 1 FILE
SKIPFILE:
        MOV     AH,FIND_NEXT
        INT     DOS                     ;FIND NEXT MATCH, IF ANY
        JC      NOMORE                  ;IF NONE
        JMP     GOTFILE                 ;GOT ONE, BACK TO TOP OF LOOP
NOMORE:
	RET
DOARG	ENDP

DOFILE  PROC	NEAR
        MOV     DX,OFFSET FILENAME      ;DX POINTS TO FILE NAME
        MOV     AL,READ_ACCESS
        MOV     AH,DOS2_OPEN
        INT     DOS                     ;TRY TO OPEN FILE
	JB	BADOPN			;IF ERROR
	MOV	WORD PTR INHANDLE,AX	;SAVE FILE HANDLE
	CMP	BYTE PTR ONEFILE,1	;ONE FILE ONLY?
	JE	NOSHOW			;YES, DON'T SHOW NAME
	CALL	SHOWFILE		;SHOW FILE NAME
NOSHOW:
	CALL	TAIL			;SHOW TAIL OF FILE
	RET
BADOPN:
        MOV     DX,OFFSET MSG1
        CALL    ERRORMSG		;CAN'T OPEN FILE
	MOV	DX,OFFSET FILENAME
	CALL	ERRORMSG		;SHOW NAME
        MOV     DX,OFFSET MSG1E
        CALL    ERRORMSG		;SHOW CR/LF
	RET
DOFILE	ENDP

;	SHOW FILE NAME

SHOWFILE PROC	NEAR
	MOV	AX,"="
	MOV	CX,5
BARS:
	CALL	WRITEBYTE
	LOOP	BARS
	MOV	AX,SPACE
	CALL	WRITEBYTE
	MOV	BX,OFFSET FILENAME
SHOWF:	MOV	AL,BYTE PTR [BX]
	CMP	AL,0
	JE	ENDF
	CALL	WRITEBYTE
	INC	BX
	JMP	SHOWF	
ENDF:	MOV	AL,SPACE
	CALL	WRITEBYTE
	MOV	AL,'='
	MOV	CX,5
BARS2:
	CALL	WRITEBYTE
	LOOP	BARS2
	MOV	AL,CR
	CALL	WRITEBYTE
	MOV	AL,LF
	CALL	WRITEBYTE
	RET
SHOWFILE ENDP

;	AFTER A FILE HAS BEEN OPENED, THIS PROCEDURE OUTPUTS ITS "TAIL"

TAIL	PROC	NEAR
	MOV	BYTE PTR ATSTART,0	;CLEAR "AT START" FLAG
	MOV	WORD PTR AMTTOREAD,INBUFSIZE  ;SET INITIAL AMOUNT TO READ
	MOV	AX,WORD PTR NUMLIN	;GET # LINES TO SHOW
	MOV	WORD PTR NUMCNT,AX	;INIT COUNT
        MOV     BX,WORD PTR INHANDLE    ;GET FILE HANDLE
        MOV     DX,0
        MOV     CX,0
        MOV     AL,2
        MOV     AH,LSEEK
        INT     DOS                     ;SEEK TO END OF FILE
        MOV     WORD PTR SIZEHI,DX
        MOV     WORD PTR SIZELO,AX      ;SAVE FILE SIZE
        CMP     DX,0
        JNE     BIG                     ;IF HI WORD >0
        CMP     AX,0
        JNE     L_11
        JMP     CLOSEFILE               ;IF FILE SIZE 0, JUST EXIT
L_11:
        CMP     AX,INBUFSIZE
        JC      SMALL                   ;IF FILE SIZE < BUFFER SIZE
BIG:
        SUB     AX,INBUFSIZE
        JNB     NOBORROW
        DEC     DX
NOBORROW:
        MOV     CX,DX                   ;CX = MSW OF OFFSET
        MOV     DX,AX                   ;DX = LSW OF OFFSET
        MOV     BX,WORD PTR INHANDLE
        MOV     AL,0
        MOV     AH,LSEEK
        INT     DOS                     ;MOVE FILE POINTER BACK BY BUFSIZ
	MOV	WORD PTR POSHI,DX	;SAVE HI WORD OF POSITION
	MOV	WORD PTR POSLO,AX	;SAVE LO WORD OF POSITION
        JMP     FILLBUF
SMALL:
        MOV     CX,0
        MOV     DX,0
        MOV     AL,0
        MOV     BX,WORD PTR INHANDLE
        MOV     AH,LSEEK
        INT     DOS                     ;REWIND TO START OF FILE
	MOV	BYTE PTR ATSTART,1	;SET "AT START" FLAG
FILLBUF:
        MOV     CX,WORD PTR AMTTOREAD   ;CX = # BYTES TO READ
        MOV     BX,WORD PTR INHANDLE    ;BX = FILE HANDLE
        MOV     DX,OFFSET INBUF        	;OFFSET TO BUFFER
        MOV     AH,READ
        INT     DOS                     ;FILL BUFFER FROM FILE
        JNB	READOK			;IF NO ERROR
	JMP	BADREAD			;IF READ ERROR
READOK:
        MOV     WORD PTR NREAD,AX       ;SAVE # BYTES READ
        MOV     CX,AX
        MOV     BX,OFFSET INBUF
SRCEND:
        MOV     AL,BYTE PTR [BX]
        CMP     AL,CTRL$Z
        JE      FOUND                   ;IF ^Z FOUND
        INC     BX
        LOOP    SRCEND
FOUND:
        MOV     WORD PTR ENDTXT,BX      ;SAVE ADDRESS OF END OF TEXT
                                        ;(ACTUALLY, OFFSET FR. DATA SEGMENT)
	JMP	SHORT SRC1
SRC:	DEC	BX
SRC1:
        CMP     BX,OFFSET INBUF         ;AT START OF BUFFER?
        JE      NEWBUF			;YES, BACK UP FURTHER (IF POSSIBLE)
        MOV     AL,BYTE PTR [BX]     	;GET BYTE
        CMP     AL,CR			;IF NOT CR,
	JNE	SRC			;LOOP

	MOV	AX,1			;FOUND CR,
	SUB	WORD PTR NUMCNT,AX	;COUNT 1 LINE
	JNB	SRC			;LOOP IF COUNT STILL >0
        ADD	BX,2                    ;START OF RIGHT LINE FOUND, SKIP CR/LF
	JMP	BEGIN			;BEGIN OUTPUT

NEWBUF: CMP	BYTE PTR ATSTART,0	;SEE IF WE CAN BACK UP MORE
	JNE	BEGIN			;NO, WE CAN'T
	MOV	AX,WORD PTR POSLO	;GET LO WORD OF FILE POSITION
	SUB	AX,INBUFSIZE		;SUBTRACT BUFFER SIZE
	MOV	BX,WORD PTR POSHI	;GET HI WORD OF FILE POSITION
	SBB	BX,0			;IF 'C' FLAG SET, SUBTRACT 1
	JB	TOOFAR			;IF <1 BUFFER LEFT TO GO
	MOV	CX,BX
	MOV	DX,AX			;OFFSET IN CX:DX
	MOV	BX,WORD PTR INHANDLE
	MOV	AL,0
	MOV	AH,LSEEK
	INT	DOS			;MOVE FILE POINTER BACK
	MOV	WORD PTR POSHI,DX
	MOV	WORD PTR POSLO,AX	;SAVE NEW POSITION	
	JMP	FILLBUF			;GO FILL BUFFER AGAIN

;	COME HERE WHEN <1 FULL BUFFER REMAINS TO BE READ

TOOFAR:	MOV	AX,WORD PTR POSLO
	MOV	WORD PTR AMTTOREAD,AX	;SET AMT TO READ = AMOUNT UNREAD
	MOV	CX,0	
	MOV	DX,0			;MOVE TO START OF FILE
	MOV	BX,WORD PTR INHANDLE
	MOV	AL,0
	MOV	AH,LSEEK
	INT	DOS			;SEEK TO START
	MOV	BYTE PTR ATSTART,1	;SET "AT START" FLAG
	JMP	FILLBUF			;GO FILL BUFFER

;	READY TO OUTPUT LINE(S)

BEGIN:
        MOV     DX,WORD PTR ENDTXT      ;GET END OF TEXT IN DX
SHOW:   CMP     DX,BX                   ;DISPLAY TEXT - TOP OF LOOP
        JE	ENDBUF 			;UNTIL END OF BUFFER
        MOV     AL,BYTE PTR [BX]
        CALL    WRITEBYTE
	CMP	AL,CTRL$Z		;QUIT IF ^Z WRITTEN
	JE	DONE
        INC     BX
        JMP     SHOW
ENDBUF:	
        MOV     CX,INBUFSIZE   		;CX = # BYTES TO READ
        MOV     BX,WORD PTR INHANDLE    ;BX = FILE HANDLE
        MOV     DX,0                    ;OFFSET TO BUFFER FROM ES
        MOV     AH,READ
        INT     DOS                     ;FILL BUFFER FROM FILE
        JB	BADREAD			;IF ERROR
	MOV	DX,AX			;SAVE BYTES READ
	CMP	AX,0
	JE	DONE			;DONE IF 0
	MOV	BX,0			;BX = OFFSET TO START OF BUFFER
	JMP	SHOW			;OUTPUT SOME MORE

BADREAD:
        MOV     DX,OFFSET MSG2
        CALL    ERRORMSG
DONE:
CLOSEFILE:
        MOV     BX,WORD PTR INHANDLE
        MOV     AH,DOS2_CLOSE
        INT     DOS                     ;CLOSE FILE
	CALL	FLUSH			;FLUSH ANYTHING IN OUTPUT BUFFER
	RET
TAIL	ENDP

EXIT2:
        MOV     AH,EXIT
        INT     DOS                     ;EXIT TO DOS

; 	WRITE A BYTE TO THE OUTPUT
;
WRITEBYTE PROC 	NEAR
	PUSH	BX
	PUSH	CX
	PUSH	DX
	MOV	BX,WORD PTR OUTNDX
	MOV	BYTE PTR [BX+OUTBUF],AL
	INC	BX
	MOV	WORD PTR OUTNDX,BX
	CMP	BX,OUTBUFSIZE
	JL	NOTFUL
	CALL	FLUSH
NOTFUL:
	POP	DX
	POP	CX
	POP	BX
	RET
WRITEBYTE ENDP

;	FLUSH - WRITE OUTPUT BUFFER 

FLUSH	PROC	NEAR
	PUSH	AX
	MOV	CX,WORD PTR OUTNDX
	MOV	DX,OFFSET OUTBUF
	MOV	BX,1
	MOV	AH,WRITE
	INT	DOS		;WRITE TO OUTPUT
	POP	AX
	MOV	WORD PTR OUTNDX,0
	RET
FLUSH	ENDP

        END     ENTRY


```
{% endraw %}

## WC.ASM

{% raw %}
```
        TITLE WC - WORD COUNT UTILITY
        PAGE 55,132
;***********************************************************************
;       THIS PROGRAM COUNTS BYTES, WORDS AND LINES IN A TEXT FILE.
;
;       USAGE:  WC file1 file2 ... 
;               defaults to standard input if no file name given.
;		file names can be ambiguous
;
;       REQUIRES MSDOS 2 OR HIGHER
;
;       BY: JON DART
;           DEPARTMENT OF ANTHROPOLOGY
;           UCSD C-001
;	    LA JOLLA, CA  92093
;
;	VERSION 1.5, 08-May-88 BUG FIX IN BYTE COUNT
;	VERSION 1.4, 24-OCT-87 ASSEMBLES UNDER MASM 5.0
;	VERSION 1.3, 10-JAN-87 ADDS WILDCARDS, MULTIPLE FILENAMES
;	VERSION 1.2, 06-JUL-86
;       VERSION 1.1, 16-JAN-86
;       VERSION 1.0, 08-NOV-85
;
;	TO BUILD WC.EXE:
;	    MASM WC,WC,NUL,NUL
;	    LINK WC,WC,NUL,ASM 

TRUE	EQU	1
FALSE	EQU	0
SILENT	EQU	FALSE			;"TRUE" FOR UNLABELED OUTPUT (LIKE UNIX)
BUFSIZE EQU     8192                    ;SIZE OF FILE BUFFER
MAXARGS	EQU	40			;MAX. # OF COMMAND LINE ARGUMENTS
M       EQU     BYTE PTR 0[BX]

        .XLIST
        INCLUDE ASCII.DEF
        INCLUDE MSDOS2.DEF
	INCLUDE MACROS.DEF
        .LIST

	DOSSEG
	.MODEL SMALL

	.STACK
        DB 512 DUP (?)

;       INITIALIZED DATA AREA:
;
	.DATA
NUMARGS DW	0			;NUMBER OF COMMAND LINE ARGUMENTS
INHANDLE DW	0                       ;INPUT FILE HANDLE
                                        ;(DEFAULTS TO STD. INPUT)
NUMLINE DD      0 			;NUMBER OF LINES
NUMWORD DD      0                       ;NUMBER OF WORDS
NUMBYTE DD      0                       ;NUMBER OF BYTES
ONEFILE	DB	1			;SET 1 IF ONE UNAMBIG. ARGUMENT		
PREV    DB      0                       ;PREVIOUS CHAR., USED IN WORD COUNT
TXT1    DB      ' bytes, ',0
TXT2    DB      ' words, ',0
TXT3    DB      ' lines.',0
MSG1    DB      CR,LF,"wc: can't open: ",0
MSG1E   DB      CR,LF,0
MSG2    DB      CR,LF,"wc: read error.",CR,LF,0
MSG4	DB	CR,LF,"wc: unknown pathname: ",0
MSG5	DB	CR,LF,"wc: too many arguments.",CR,LF,0

;	UNINITIALIZED DATA AREA:

	.DATA?
BUFFER  DB      BUFSIZE DUP (?)         ;OFFSET TO BUFFER (FROM ES)
ARGPTRS DB	(MAXARGS*2) DUP (?)	;POINTERS TO COMMAND LINE ARGS
ARGBUF	DB	512 DUP (?)		;BUFFER FOR COMMAND LINE ARGS
SPATH	DB	65 DUP (?)		;SEARCH PATH
PREFIX	DB	65 DUP (?)		;SEARCH PREFIX
FILENAME DB	65 DUP (?)		;COMPOSITE FILE NAME (PREFIX + NAME)
DTA	DB	128 DUP (?)		;DISK TRANSFER ADDRESS
BUFEND	EQU	DTA + 128		;END OF BUFFER SPACE

	.CODE
        EXTRN   PRTSTR:NEAR,COUT:NEAR,ERRORMSG:NEAR,CRLF:NEAR
        EXTRN   TYPTX:NEAR,SKIPSP:NEAR,CPYCNT:NEAR,ZERO:NEAR
        EXTRN   PRINTDD:NEAR
	EXTRN	GETARGS:NEAR
	EXTRN	FIXPATH:NEAR
	EXTRN	TYPE_UFN:ABS, TYPE_UNK:ABS

ENTRY:
        TEST_DOS2                       ;TEST FOR DOS 2.0, EXIT IF DOS 1
	MOV     AX,DGROUP		;GET DATA SEG
	MOV	ES,AX			;SET EXTRA SEG TO POINT TO DATA
        MOV     BX,80H          	;GET BYTE COUNT FOR COMMAND LINE
        CMP     BYTE PTR [BX],0
        JNE     L_1                     ;IF NOT 0
        MOV     AX,DGROUP
        MOV     DS,AX
        CALL    WC                      ;NO COMMAND LINE INPUT, USE STD. INPUT
	JMP	EXIT2
L_1:
        PUSH    BX
        MOV     DL,M
        MOV     DH,0
        ADD     BX,DX
        INC     BX
        MOV     M,0                     ;PUT 0 BYTE AT END OF COMMAND LINE
        POP     BX
        INC     BX
	MOV	CX,MAXARGS
	MOV	SI,OFFSET ARGPTRS
	MOV	DI,OFFSET ARGBUF
	CALL	GETARGS			;GET COMMAND LINE ARGS
	JB	TOOMANY			;IF TOO MANY ARGS
	MOV	AX,DGROUP
	MOV	DS,AX
	CMP	CX,0			;NO ARGUMENTS?
	JNE	L_2			;YES, HAVE SOME
	CALL	WC			;NO ARGS, JUST READ STDIN
	JMP	EXIT2
TOOMANY:
	MOV	AX,DGROUP		;TOO MANY ARGUMENTS
	MOV	DS,AX
	MOV	DX,OFFSET MSG5
	CALL	ERRORMSG		;SHOW MSG
	JMP	EXIT2			;QUIT
L_2:
	MOV	AX,DGROUP
	MOV	DS,AX
	CMP	CX,1
	JE	GETFILES		;IF JUST ONE ARGUMENT
	MOV	BYTE PTR ONEFILE,0	;CLEAR "ONE ARG" FLAG
GETFILES:
	MOV	SI,OFFSET ARGPTRS
ARGLOOP:
	MOV	BX,WORD PTR [SI]	;DS:BX POINTS TO NEXT ARG
	PUSH	CX
	PUSH	SI
	CALL	DOARG			;DO WC FOR ONE ARGUMENT
	POP	SI
	POP	CX
SKIPSW:
	ADD	SI,2			;ADVANCE TO NEXT ARG
	LOOP	ARGLOOP
	JMP	EXIT2			;ALL DONE

DOARG   PROC	NEAR
	MOV	AH,SET_DTA
	MOV	DX,OFFSET DTA
	INT	DOS			;SET DTA
        MOV	CX,OFFSET SPATH
        MOV	DX,OFFSET PREFIX
        PUSH    BX
        CALL    FIXPATH                 ;PARSE PATHNAME
	POP	BX
	CMP	AL,TYPE_UNK
	JE	BADNAME
	CMP	AL,TYPE_UFN
	JE	GOTNAME			;IF UNAMBIG. FILE NAME
	MOV	BYTE PTR ONEFILE,0	;AMBIG. FILE NAME OR DIR, FLAG IT
	JMP	SHORT GOTNAME
BADNAME:
	MOV	DX,OFFSET MSG4
	CALL	ERRORMSG		;BAD FILE NAME, SHOW MSG.
	MOV	DX,BX
	CALL	ERRORMSG		;SHOW FILE THAT CAUSED IT
	RET
GOTNAME:
        MOV     DX,OFFSET SPATH         ;POINT TO SEARCH PATH
        MOV     CX,31H                  ;SET SEARCH ATTRIBUTES
        MOV     AH,FIND_FIRST
        INT     DOS                     ;SEARCH FOR 1ST MATCH
	JB	BADNAME			;IF NOTHING FOUND
GOTFILE:
	MOV	SI,OFFSET PREFIX
	MOV	DI,OFFSET FILENAME
	MOV	CX,65
	CALL	CPYCNT			;COPY PREFIX TO FILE NAME AREA
        DEC     DI                      ;BACK UP OVER NULL
        MOV     SI,OFFSET (DTA+30)      ;POINT TO FILE NAME WE FOUND
        CMP     [SI],BYTE PTR '.'       ;DOES IT START WITH .? -
        JNE     NOTDOT                  ;- NO
	JMP     SHORT SKIPFILE 		;YES, JUST SKIP IT
NOTDOT:
	CALL	CPYCNT			;COPY FILE WE FOUND AFTER PREFIX
	CALL	DOFILE			;DO 1 FILE
SKIPFILE:
        MOV     AH,FIND_NEXT
        INT     DOS                     ;FIND NEXT MATCH, IF ANY
        JC      NOMORE                  ;IF NONE
        JMP     GOTFILE                 ;GOT ONE, BACK TO TOP OF LOOP
NOMORE:
	RET
DOARG	ENDP

;	DOFILE = PROCESS 1 FILE (NAME IN ES:FILENAME)

DOFILE  PROC	NEAR
        MOV     DX,OFFSET FILENAME      ;DX POINTS TO FILE NAME
        MOV     AL,READ_ACCESS
        MOV     AH,DOS2_OPEN
        INT     DOS                     ;TRY TO OPEN FILE
        JNC     NAMEOK                  ;IF OK
        JMP     SHORT BADOPN
NAMEOK:
        MOV     WORD PTR INHANDLE,AX    ;SAVE FILE HANDLE
	CMP	BYTE PTR ONEFILE,1
	JE	NOSHOW
	CALL	SHOWFILE		;SHOW FILE NAME (ONLY IF >1 SPECIFIED)
NOSHOW:
	CALL	WC			;SHOW BYTE, WORD, LINE COUNTS FOR FILE
	RET
BADOPN:
        MOV     DX,OFFSET MSG1
        CALL    ERRORMSG                ;BAD OPEN, SHOW MSG.
        MOV     DX,OFFSET FILENAME      ;DX POINTS TO FILE NAME
        CALL    ERRORMSG                ;SHOW IT
	RET
DOFILE	ENDP

;	SHOW FILE NAME

SHOWFILE PROC	NEAR
	MOV	AX,"="
	MOV	CX,5
BARS:
	CALL	COUT
	LOOP	BARS
	MOV	AX,SPACE
	CALL	COUT
	MOV	BX,OFFSET FILENAME
SHOWF:	MOV	AL,BYTE PTR ES:[BX]
	CMP	AL,0
	JE	ENDF
	CALL	COUT
	INC	BX
	JMP	SHOWF	
ENDF:	MOV	AL,SPACE
	CALL	COUT
	MOV	AL,'='
	MOV	CX,5
BARS2:
	CALL	COUT
	LOOP	BARS2
	CALL	CRLF
	RET
SHOWFILE ENDP

WC 	PROC NEAR
	MOV	BYTE PTR PREV,0		;CLEAR "PREVIOUS CHAR"
	MOV	DI,OFFSET NUMLINE
	MOV	CX,12
	CALL	ZERO			;CLEAR COUNTS
FILLBUF:
        MOV     CX,BUFSIZE              ;CX = # BYTES TO READ
        MOV     BX,WORD PTR INHANDLE    ;BX = FILE HANDLE
        MOV     DX,OFFSET BUFFER
        MOV     AH,READ
        INT     DOS                     ;FILL BUFFER FROM FILE
        JC      BADREAD                 ;IF ERROR
        MOV     BX,OFFSET BUFFER
        CMP     AX,0
        JNE     GOTTEXT                 ;IF SOMETHING READ
        JMP     DONE

BADREAD:
        MOV     DX,OFFSET MSG2
        CALL    ERRORMSG
        JMP     CLOSEFILE

GOTTEXT:
	PUSH	AX
        ADD     AX,BX                   ;COMPUTE ADDRESS OF END OF BUFFER
        MOV     DX,AX                   ;SAVE IN DX
	POP	AX
	MOV	SI,OFFSET NUMBYTE
        ADD     WORD PTR [SI],AX        ;UPDATE BYTE COUNT
        JNC     NOCARRY
        INC     WORD PTR [SI+2]         ;IF CARRY
NOCARRY:
        MOV     DI,OFFSET NUMLINE       ;NUMBER OF LINES
        MOV     SI,OFFSET NUMWORD	;NUMBER OF WORDS
BEGIN:
COUNT:  CMP     DX,BX                   ;COUNT BYTES AND LINES
        JNE     L_12                    ;UNTIL END OF BUFFER
        JMP     FILLBUF                 ;GO FILL BUFFER AGAIN
L_12:
        MOV     AL,BYTE PTR [BX]     	;GET BYTE FROM BUFFER
        AND     AL,7FH                  ;STRIP HI BIT
        INC     BX
        CMP     AL,SPACE                ;IS SPACE?
        JE      WCOUNT                  ;YES, POSSIBLE END OF WORD
        CMP     AL,CR                   ;IS CR?
        JNE     COUNT2                  ;NO, IGNORE CHAR.
COUNTLINE:
        INC     WORD PTR [DI]        	;COUNT A LINE
        JNC     WCOUNT
        INC     WORD PTR [DI+2]		;IF CARRY, INCREMENT HI WORD
WCOUNT: CMP     BYTE PTR PREV,0         ;SAW A SPACE OR CR, WAS PREV. CHAR. NULL?
        JE      COUNT2
        CMP     BYTE PTR PREV,CR        ;OR CR?
        JE      COUNT2
        CMP     BYTE PTR PREV,LF        ;OR LF?
        JE      COUNT2
        CMP     BYTE PTR PREV,SPACE     ;OR SPACE?
        JE      COUNT2
        CMP     BYTE PTR PREV,TAB       ;OR TAB?
        JE      COUNT2
        INC     WORD PTR [SI]           ;NO, ASSUME END OF WORD
        JNC     COUNT2
        INC     WORD PTR [SI+2]
COUNT2:
        MOV     BYTE PTR PREV,AL
        JMP     COUNT
DONE:
        MOV     AX,WORD PTR NUMBYTE
        MOV     SI,AX
        MOV     AX,WORD PTR NUMBYTE+2
        MOV     DI,AX
        MOV     AL,0
        CALL    PRINTDD
	IF	SILENT
	MOV	AL,SPACE
	CALL	COUT
	ELSE
	MOV	DX,OFFSET TXT1
	CALL	PRTSTR
	ENDIF
        MOV     AX,WORD PTR NUMWORD
        MOV     SI,AX
        MOV     AX,WORD PTR NUMWORD+2
        MOV     DI,AX
        MOV     AL,0
        CALL    PRINTDD
	IF 	SILENT
	MOV	AL,SPACE
	CALL	COUT
	ELSE
	MOV	DX,OFFSET TXT2
	CALL	PRTSTR
	ENDIF
        MOV     AX,WORD PTR NUMLINE
        MOV     SI,AX
        MOV     AX,WORD PTR NUMLINE+2
        MOV     DI,AX
        MOV     AL,0
        CALL    PRINTDD
	IF	NOT SILENT
	MOV	DX,OFFSET TXT3
	CALL	PRTSTR
	ENDIF
	CALL	TYPTX
	DB	CR,LF+200Q
CLOSEFILE:
        MOV     BX,WORD PTR INHANDLE
        CMP     BX,0                    ;WERE WE READING STD. INPUT?
        JE      NOCLOSE                 ;YES, NO NEED TO CLOSE
        MOV     AH,DOS2_CLOSE
        INT     DOS                     ;CLOSE FILE
NOCLOSE:
	RET
WC	ENDP

EXIT2:
        MOV     AH,EXIT
        INT     DOS                     ;EXIT TO DOS

        END     ENTRY
```
{% endraw %}

## UTIL.DOC

{% raw %}
```
     MSDOS UTILITIES BY JON DART - Version 3.3 of 30-Mar-89

       This  disk  contains  a  collection  of  utility programs, including
     several which mimic the operation of unix (tm) commands.

       All of these programs require MSDOS or PCDOS version 2 or above.  To
     run SHOW  and  MODEM, your computer must be IBM-compatible at the BIOS
     level (SHOW can be reassembled to produce a "generic MSDOS"  version).
     LS is supplied  in  both generic and PC-dependent versions.  The other
     programs are not at all machine-specific and should run on  any  MSDOS
     system.

       LS displays  a  sorted directory with file sizes.  There are several
     such programs in the public domain, but all of the ones  I  have  seen
     have deficiencies--they  are  too  big,  too slow, don't show the disk
     free space, can't display system files, and/or use tricks that  render
     them unusable on my computer, which is NOT a perfect IBM clone.  LS is
     designed to be easily adaptable to any "generic MSDOS" system, with at
     most minor modifications.  There are two executable files on the disk:
     LS.EXE and  LS-PC.EXE.  LS.EXE is "generic" and will run on most MSDOS
     computers, while LS-PC will run on IBM PCs, ATs and close clones only.

       LS is used like the DIR command.    To  see  the  contents  of  your
     current directory, just  type  LS.   If you follow LS with one or more
     file names, it will show only files matching those  names  (the  names
     can contain wildcards).    You  can  also  insert  one  or more of the
     following options on the command line:

       -A  displays system and hidden files
       -D  displays information on a directory, not its contents
       -L  displays a "long" listing with file sizes in bytes, times and
           dates
       -N  produces a non-sorted output (with files in the same order they
           are in the directory)
       -R  reverses order of sort
       -S  displays file sizes in kilobytes
       -T  sort by time rather than name of file
       -1  forces single-column output with no paging (like DIR)

       HEAD and TAIL are simple filters that display a few lines  from  the
     start or the end of a file, respectively. The general syntax for these
     programs is:

       HEAD -n file1 file2 ...

       n is the  number  of lines to display: e.g.  "HEAD -50 FOO" displays
     the first 50 lines of "FOO".  Wildcards can be  used  in  file  names.
     The default  number  of lines is 20; the maximum that can be specified
     is 65535.  If no input file is specified, HEAD reads from the standard
     input, so it can be hooked to another program's  output  via  a  pipe.
     TAIL is used similarly.

       WC is a  utility  to count bytes, words and lines in a file.  To use
     it, just type WC followed by the name(s) of the file(s)  you  want  to
     get counts for.    Like  HEAD  and  TAIL,  WC  defaults to reading the
     standard input device if no input file is  specified  on  the  command
     line.

       SHOW  is my adaptation of a CP/M bidirectional file display program.
     It shows a file on the screen, and allows you to  scroll  forward  and
     backwards.  If  all you want to do is see the file, this is often more
     convenient than calling up your editor. Unlike TYPE, SHOW will display
     WordStar (tm) and WordPerfect (tm) files  in  more  or  less  readable
     format. Type SHOW with no arguments to get instructions.

       MV  is  a  general-purpose  program  to  move  files and directories
     between disks and directories.  It is similar to the UNIX (tm) utility
     of the same  name.    With  the  R  switch,  MV   treats   directories
     recursively: that  is,  if  it  is  told  to move a directory, it will
     transfer all files found in that  directory,  AND  all  files  in  any
     subdirectories of it.  Type MV with no arguments to get instructions.

       CP  is  virtually  the  same  as  MV, except that it copies files or
     directories, without  deleting  the  originals.    Type  CP  with   no
     arguments to get instructions.

       RM deletes files and/or directories.  It is similar to the MSDOS DEL
     command,  but  allows  multiple  files to be specified, and supports a
     number of options.  Type RM with no  arguments  to  get  instructions.
     CAUTION: the  F and R switches are potentially dangerous.  Be sure you
     know what you are doing before you use them; if in  doubt,  experiment
     on a "junk" disk first.

       RO  is  a utility to make one or more file read-only. Files that are
     set "read-only" cannot be deleted by the ordinary  MSDOS  DEL  command
     (it will  respond  "File  not  found"  if you try this). They are also
     protected from  deletion by the RM program (unless  the  F  switch  is
     used).  Type RO to get instructions.

       RW  is  a  utility  to  restore one or more files that have been set
     read-only back  to   ordinary   read-write   status.   Type   RW   for
     instructions.

       CRC computes  a cyclic redundancy code for one or more files.  It is
     a good idea to run CRC on your valuable files and record the  results.
     Then  if  you ever suspect that a file has been corrupted in some way,
     re-run CRC and compare  the  results  to  what  you  recorded.    Most
     possible errors  in the file will alter the CRC for the file, enabling
     you to detect that an error has occurred.

       The CRC program accepts one or more file names and writes their  CRC
     codes to the standard output. The output can be redirected into a file
     if you so desire.

       By  default,  CRC  computes  Cyclic  Redundancy Codes using the same
     algorithm used by XMODEM and other communications programs.    If  you
     add  the  -a  switch  to  the  command  line,  it  will  compute codes
     compatible with those computed by archiving utilities such as ARC  and
     PKARC.

       UPDATE is similar to the unix "touch" utility.  It sets the time and
     date of  one  or more files to the current system time and date.  Type
     UPDATE with no arguments for instructions.

       FDUMP is a simple utility for viewing and patching files  in  ASCII,
     hex, decimal or  octal.  It examines one logical sector (128 bytes) at
     a time.  When you run the program, you will be asked for a  file  name
     and then  presented with a menu of commands (you can also invoke FDUMP
     with the name of a file, e.g.  "FDUMP FDUMP.EXE." In  this  case,  you
     don't get the file prompt).  The "dump" commands (A, H, D, and O) show
     the contents of  the current file sector.  The edit command (E) allows
     you to alter the sector contents, and  the  W  command  will  put  the
     changed sector  back  on  the disk, overwriting its previous contents.
     The C command allows you to copy one or more sectors from the file you
     are looking at to a new file.  This command can  be  used  to  recover
     usable data from  files  that  have damaged sectors.  The "+", "-" and
     "S" commands are used to select a new sector to  look  at  or  change.
     The "F" command closes the current file and allows you to select a new
     file.  To exit the program, type X.

       CLEAN, FIXLINES  and DETAB are filter programs.  Like HEAD and TAIL,
     they read from a file (if specified) or from the standard  input,  and
     write to  the  standard  output  device.  To save the output in a text
     file, you must use the redirection operator (>).  CLEAN strips off the
     high bits in a file, and removes all  control  characters  except  for
     carriage return  (^M),  line  feed  (^J), backspace (^H), tab (^I) and
     form feed (^L).  FIXLINES converts files with  lines  ending  in  only
     carriage returns  or  line  feeds  to files with lines ending in CR/LF
     pairs (which is the DOS standard text file  format).    DETAB  expands
     tabs in  a file into spaces; it assumes that tab stops are set every 8
     spaces.  Since these programs are filters, they can be combined  in  a
     pipe, e.g.:

        CLEAN foo | DETAB | FIXLINES >foo2

        processes file  "foo" through all 3 programs and writes the results
     to file "foo2".  I use this combination to convert  the  brain-damaged
     output files created by SPSS-PC into something I can print.

       MODEM is  a simple communications program loosely modelled after the
     classic "MODEM7" series for CP/M.  Far fancier programs are available,
     but this one may be of interest because it includes  source.    Unlike
     most modem  programs,  it  uses BIOS calls to access the COM port, and
     will thus work with semi-compatible computers such as the Tandy  2000.
     However, since  BIOS  calls are slower than directly fiddling with the
     hardware, transfers  at  speeds  above  1200  bps  will  probably   be
     unreliable.  MODEM supports both CRC and Checksum transfers, but there
     is no ASCII transfer mode.

       All  of the programs are supplied "ready to use" in the form of .EXE
     files. It is not necessary to re-assemble or re-compile any of them in
     order to use them.  However, the source code is also provided for  the
     use of anyone who wishes to make custom modifications to the programs.
     The following  information  concerns  the  source code, and will be of
     interest to programmers only.

       The source code for all programs is contained in the  archive  named
     SOURCE.ARC.  Any of the available archiving utilities for the PC (such
     as ARC,  PKARC  and  NARC)  can be used to extract the files from this
     archive.

       LS, HEAD, TAIL, MV, CP, RM and WC are written in  assembly  language
     and were assembled  with  MASM  5.0.    All  of these programs must be
     linked with the utility library ASM.LIB.   The  source  code  for  the
     modules in  ASM.LIB  is in the archive ASM.ARC, which is stored within
     the SOURCE archive.  ASM.ARC also contains some include  files  needed
     for assembling the programs.

       RO,  RW,  CRC,  UPDATE, FDUMP, CLEAN, FIXLINES, DETAB, and MODEM are
     written in Aztec C, and were compiled in the "small model" mode  using
     version 3.40a  of  the  optimizing  compiler.  If you modify them, you
     must recompile and then link them  with  the  library  B.LIB  and  the
     standard Aztec library  C.LIB  (in  that  order).    B.LIB  is a small
     utility library that is provided within the source archive. The source
     for the modules in B.LIB is in B.ARC.  B.ARC also contains some header
     files used by the c programs.

       These programs are PUBLIC DOMAIN and may  be  freely  copied,  used,
     modified,  etc.  for  ANY  purpose  (the  one thing you probably can't
     legally do is to copyright them  yourself).    I  don't  ask  for  any
     donation or contribution  for  them.  The best "donation" you can give
     me is to donate something of your  own  to  the  public  domain,  thus
     improving the pool of available free software.

        I don't  offer  any  guarantee of support for these programs, but I
     will generally fix bugs that  are  reported  to  me.    Any  comments,
     complaints, bug  reports or suggestions for improvement should be sent
     to: Jon Dart, 3012 Hawthorn St., San Diego CA 92104.



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0564

     Volume in drive A has no label
     Directory of A:\

    SOURCE   ARC    137544   4-02-89   9:40a
    UTIL     DOC     11624   4-02-89   8:00p
    CLEAN    EXE      5312  11-16-86   9:50p
    CP       EXE      4209   4-02-89   9:34a
    CRC      EXE      7712   9-03-88  10:25p
    DETAB    EXE      5392  11-16-86   9:55p
    FDUMP    EXE     11984  10-04-86   8:48p
    FIXLINES EXE      4992  11-16-86   8:33p
    HEAD     EXE      2060   1-19-89   7:15p
    LS-PC    EXE      3779   4-02-89   9:09a
    LS       EXE      3747   4-02-89   9:08a
    MODEM    EXE     18864   4-23-87  11:21p
    MV       EXE      4323   4-02-89   9:33a
    RM       EXE      3231   2-04-89   1:09p
    RO       EXE      6176   4-23-87  11:11p
    RW       EXE      6192   4-23-87  11:05p
    SHOW     EXE      2036  11-21-87  10:02p
    TAIL     EXE      2808   1-19-89   7:16p
    UPDATE   EXE      6496   4-10-86   9:38p
    WC       EXE      2042   1-19-89   7:20p
    GO       BAT        38   6-01-88   9:55a
    FILES564 TXT      1559   6-01-88  10:08a
    GO       TXT       617   5-10-89   2:26p
           23 file(s)     252737 bytes
                           56320 bytes free
