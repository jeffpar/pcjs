---
layout: page
title: "PC-SIG Diskette Library (Disk #309)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0309/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0309"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "ASSEMBLY UTILITIES NO 3"

    A variety of Assembly language programs gathered for the convenience of
    the programmer. Source code is in Assembly language. Many routines
    improve handling of screens, disks and printers.  See file descriptions
    for a real appreciation of the breadth of this collection.
    File Descriptions:
    
    ASM      TXT  2 tips from Boca Raton.
    BEEP     ASM  Sound effect generator.
    CLEAR    ASM  Sample clear screen routine from CHASM.
    CLOCK    ASM  Print date and time on screen.
    CLOCK    DOC  Documentation for CLOCK.
    CO       DOC  Documentation for COENDP and COPRNT.
    COENDP   ASM  Part of program to list disk contents.
    COPRNT   ASM  Part of program to list disk contents.
    DISASM   BAS  A BASIC program that disassembles assembly programs.
    DISKDIRL ASM  Part of program to list disk contents.
    DISPTEXT ASM  Displays a line on screen without BIOS.
    DOS-EDIT ASM  Assembly language text editor.
    DOSERROR DOC  Lists error return codes.
    DSK      ASM  Returns the number of free sectors on a disk.
    FREE     ASM  Shows available free space on a disk.
    FREE     DOC  Documentation for FREE.
    GETSP    ASM  Lists free space on disk.
    INIT     ASM  Assembly Source Code..
    INITMEM  ASM  Initializes memory between 544k and 576k.
    LIB      EXE  Sub-program.
    LIST80   ASM  Lists the first 80 characters in a line of ASCII text.
    MEMDRV   ASM  Faster bootup and use ALL of your available memory.
    MEMDRV   DOC  Documents MEMDRV.
    MORERAM  ASM  Use all of available RAM.
    NOLF     ASM  Deletes extra linefeeds from some printer files.
    OBJSNOOP COM  Displays label references in object files.
    OPCODE   DOC  Used by DISASM.BAS.
    OPCODE   TXT  Used by DISASM.BAS.
    PAGE     ASM  Demonstrates multiple screen pages.
    PARTBIOS LIS  Partial listing of BIOS low memory.
    PASSWORD ASM  Password protection of system.
    PRTPATH  ASM  Prints current directory path.
    PUT_DEC  ASM  Puts decimal point in ASCII string.
    PUT_DEC  OBJ  Object code for PUT_DEC.
    ROMBIOS  ASM  ROM BIOS information.
    SCRN     ASM  A variable time screen saver.
    SCRN     DOC  Documentation for SCRN.ASM.
    SCROLL10 ASM  Tests DISPTEXT.
    SKELETON ASM  Skeleton of a minimal Assembly language program.
    SL       ASM  Tests program that scrolls screen.
    SPEDUPDK ASM  Changes some disk drive parameters.
    TABS     ASM  Replaces blanks with tabs in ASCII text files.
    TALK1    ASM  Dumb terminal for IBM PC.
    TEXT     DOC  Documentation for TEXT.EXE.
    TEXT     EXE  Several text conversion options.
    UPDIR    ASM  Moves the user up one directory level.
    UPPATCH  ASM  Patch of another program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ASM.TXT

{% raw %}
```

EPSON PRINTER TIP

When using the printer to print your Macro Assembler .LST files, put the
following line at the beginning of your .ASM files to automatically switch
the printer to 132 column mode:

	PAGE ,132 ;^O

That's a Control-O  -seen by the printer but ignored by the assembler.
To automatically revert to 80-column mode at the end of the listing,
append a comment with a Control-R to the last line in your listing:
   ....;^R


USING RADIX 16

If you use .RADIX 16 to avoid typing in H's after all your hex numbers,
it won't work for hex 0B or 0D.  This is because the assembler will always
interpret them as meaning the no. is Binary (B) or Decimal (D) - unless
they are followed by an H, i.e. 0BH.

Thanks to Boca Raton for these tips.
JW

```
{% endraw %}

## BEEP.ASM

{% raw %}
```
;SOUND EFFECT GENERATOR
;SQUARE WAVE STYLE
;
STACK	  SEGMENT PARA STACK 'SATCK'
	  DB 256 DUP (0)
STACK	  ENDS
;
;
DATA	  SEGMENT PARA PUBLIC 'DATA'
FREQ	  DW 300	; LOWER VALUE TO RAISE FREQ
DURA	  DW 160	;INCREASE VALUE INCREASE DURATION
DATA	  ENDS
;
;
CODE	  SEGMENT PARA PUBLIC 'CODE'
MK_TONE   PROC FAR
	  ASSUME CS:CODE,SS:STACK
	  PUSH DS
	  SUB AX,AX
	  PUSH AX
	  ASSUME DS:DATA
	  MOV AX,DATA
	  MOV DS,AX
	  CLI
	  MOV DX,DURA
	  IN AL,61H
	  AND AL,0FEH
AGAIN:	  OR AL,2
	  OUT 61H,AL
	  MOV CX,FREQ
WAIT1:	  LOOP WAIT1
	  AND AL,0FDH
	  OUT 61H,AL
	  MOV CX,FREQ
WAIT2:	  LOOP WAIT2
;
;ONE SQUARE WAVE CYCLE NOW COMPLETE
;
	  DEC DX
	  JNZ AGAIN
;
;TONE HAS NOW BEEN PRODUCED FOR DESIRED DURATION
;
	  STI
	  RET
MK_TONE   ENDP
CODE	  ENDS
	  END MK_TONE
```
{% endraw %}

## CLEAR.ASM

{% raw %}
```
;--------------------------------------
; PROGRAM CLS
;
; Provides an external DOS command to clear
; the CRT screen.  Example source file for CHASM.
;
; Uses BIOS routine VIDEO_IO to scroll up
; the screen and position the cursor.  For
; documentation of VIDEO_IO see page A-43
; of Technical Reference.
;---------------------------------------
    MOV AH,6     ;this specifys we want a scroll
                 ;CH/CL specifies row & column
                 ;scroll region's upper left corner
    MOV CH,0     ;row = 0
    MOV CL,0     ;column = 0
                 ;DH/DL does the same for lower
                 ;right corner.
    MOV DH,24    ;row = 24
    MOV DL,79    ;column = 79
                 ;BH specifies color to fill with
    MOV BH,7     ;we'll use black
                 ;AL specifies how far to scroll
    MOV AL,0     ;0 means blank out entire region
    INT 16       ;call video_io

    MOV AH,2     ;position cursor function
                 ;DH/DL specifies row and column
    MOV DH,0     ;row = 0
    MOV DL,0     ;column = 0
                 ;BH specifies which display page
    MOV BH,0     ;page 0
    INT 16       ;call video_io

    INT 32       ;return to DOS
```
{% endraw %}

## CLOCK.ASM

{% raw %}
```
	PAGE	66,132
;****************************************************************************
;
; PROGRAM: CLOCK
;
; DESCRIPTION: PRINT DATE AND TIME ON SCREEN
;
; INPUT: NONE
;
; OUTPUT: CURRENT DATE AND TIME ON SCREEN
;
; TYPE OF FILE: .COM FILE
;
; COMMENTS: THIS PROGRAM WILL PICK UP THE CURRENT DATE AND TIME AND
;     DISPLAY DAY, DATE AND TIME ON THE SCREEN.  DATE IS FORMATTED OUT
;     TO MONTH NAME, DAY AND YEAR, TIME IS HH:MM:SS.  THIS PROGRAM WILL
;     LOOP UNTIL CONTROL BREAK IS INTERCEPTED.
;
;  TO INCREASE READABILITY OF THE DISPLAY, IT WILL SAVE THE CURRENT
;     CURSOR TYPE, AND ERASE THE CURSOR.  WHEN CONTROL-BREAK IS DETECTED,
;     THE PROGRAM WILL INTERCEPT THE INTERRUPT AT ROUTINE TERMIN, RESTORE
;     THE CURSOR AND TERMINATE.
;
;  THIS PROGRAM ALSO CHECKS FOR DOS 2.0 OR ABOVE, AND IF IT IS NOT
;     PRESENT, TERMINATE IMMEDIATELY
;
;  THIS PROGRAM USES THE EQUATIONS FROM WES MEIER'S DFACT.BAS TO COMPUTE
;     THE DAY OF THE WEEK.  THEY ARE:
;
;	F = 365 * YEAR + DAY + (31 * (MONTH - 1))
;
;	IF MONTH < 3 THEN F = F + INT ((YEAR - 1) / 4) -
;	   INT ((INT ((YEAR / 100) + 1)) * 3 / 4)
;
;	IF MONTH >= 3 THEN F = F + INT ((MONTH + 23) * 4 / 10) +
;	   INT (YEAR / 4) - INT ((INT (YEAR / 100) + 1) * 3 / 4)
;
;	DAY NUMBER = F MOD 7 (REMAINDER OF F / 7) AND IS FIGURED AS
;
;	WHERE 0 = SATURDAY, 1 = SUNDAY, ETC.
;
;	NOTE: THE DAY NUMBER IS FIGURED AS (F MOD 7000) MOD 7 TO
;	   PREVENT AN OVERFLOW CAUSED BY DIVIDING A LARGE NUMBER
;	   BY A SMALL ONE.
;
;  THIS PROGRAM IS MADE TO RUN AS A .COM FILE, AND MUST BE RUN THROUGH
;     EXE2BIN.EXE IN ORDER TO OPERATE CORRECTLY
;
;****************************************************************************;
	IF1					;DURING PASS 1
	INCLUDE ASSEMBLE.MAC			;INCLUDE MACRO LIBRARY
	ENDIF
;
COLUMNS EQU	80				;NUMBER OF COLUMNS ON SCREEN
;
BDATES	STRUC					;STRUCTURE FOR BINARY DATE
MONTH	DB	0				;BYTE MONTH
DAY	DB	0				;BYTE DAY
YEAR	DW	0				;WORD YEAR
BDATES	ENDS
;
DATETIME SEGMENT PARA PUBLIC 'CODE'
	ASSUME	CS:DATETIME, DS:DATETIME, ES:DATETIME, SS:NOTHING
	ORG	100H				;SET ORIGIN TO XXXX:0100H
ENTRY	LABEL	NEAR				;ENTRY POINT
	JMP	CODE_START			;JUMP AROUND DATA AREAS
	DB	'CLOCK.ASM'                     ;COPYRIGHT NOTICE
	DB	'COPYRIGHT (C) 1983'
	DB	'JERRY D. STUCKLE'
	DB	'PUBLIC DOMAIN SOFTWARE'        ;PROGRAM FOR PUBLIC DOMAIN
CSRSAVE DW	?				;CURSOR MODE SAVE AREA
WRKAREA DB	11 DUP (?)			;WORK AREA
TIME	DB	8 DUP (0),'$'                   ;AREA FOR ASCII TIME
BDATE	BDATES	<,,>				;BINARY DATE AREA
CURRDAY DB	10 DUP (?)			;AREA FOR ASCII DAY
DATEOUT DB	20 DUP (?)			;AREA FOR ASCII DATE
DOSERR	DB	'DOS 2.0 OR ABOVE REQUIRED.  PROGRAM TERMINATED.',0AH,0DH
;
MO_TBL	LABEL	WORD				;POINTER TO MONTH NAMES
	DW	OFFSET JAN			;JANUARY
	DW	OFFSET FEB			;FEBRUARY
	DW	OFFSET MAR			;MARCH
	DW	OFFSET APR			;APRIL
	DW	OFFSET MAY			;MAY
	DW	OFFSET JUN			;JUNE
	DW	OFFSET JUL			;JULY
	DW	OFFSET AUG			;AUGUST
	DW	OFFSET SEP			;SEPTEMBER
	DW	OFFSET OCT			;OCTOBER
	DW	OFFSET NOV			;NOVEMBER
	DW	OFFSET DEC			;DECEMBER
;						;ASCIIZ STRINGS FO MONTH NAMES
JAN	DB	'JANUARY ',0
FEB	DB	'FEBRUARY ',0
MAR	DB	'MARCH ',0
APR	DB	'APRIL ',0
MAY	DB	'MAY ',0
JUN	DB	'JUNE ',0
JUL	DB	'JULY ',0
AUG	DB	'AUGUST ',0
SEP	DB	'SEPTEMBER ',0
OCT	DB	'OCTOBER ',0
NOV	DB	'NOVEMBER ',0
DEC	DB	'DECEMBER ',0
;
;
DAY_NAM LABEL	WORD				;POINTER TO DAY NAMES
	DW	OFFSET SAT			;SATURDAY
	DW	OFFSET SUN			;SUNDAY
	DW	OFFSET MON			;MONDAY
	DW	OFFSET TUE			;TUESDAY
	DW	OFFSET WED			;WEDNESDAY
	DW	OFFSET THU			;THURSDAY
	DW	OFFSET FRI			;FRIDAY
;						;ASCIIZ STRINGS OF DAY NAMES
SAT	DB	'SATURDAY',0
SUN	DB	'SUNDAY',0
MON	DB	'MONDAY',0
TUE	DB	'TUESDAY',0
WED	DB	'WEDNESDAY',0
THU	DB	'THURSDAY',0
FRI	DB	'FRIDAY',0
;
CODE_START LABEL NEAR
;
;	FIRST, WE CLEAR THE SCREEN.  THEN, IF NOT AT AT LEAST DOS 2.0,
;	WE TERMINATE THE PROGRAM.
;
	CLS
	DOSCALL 30H				;GET DOS VERSION NUMBER
	CMP	AL,2				;AT LEAST DOS 2.0?
	JGE	CONT				;YES - CONTINUE
	DISPLAY DOSERR				;NO - DISPLAY DOS ERROR MESSAGE
	INT	20H				;AND TERMINATE
;
;	SAVE THE CURSOR MODE, THEN ERASE IT
;	ALSO, SET THE CONTROL-BREAK INTERRUPT VECTOR
;
CONT:						;DOS VERSION GOOD
	CURSOR	SAVE,CSRSAVE			;SAVE CURSOR MODE
	CURSOR	ERASE				;ERASE CURSOR
	SETINT	23H,TERMIN			;SET CNTL-BREAK VECTOR
	CALL	PROCESS_DATE			;GET THE DATE
;
;	DATE PROCESSING IS COMPLETE.  PROCESS THE TIME
;	NOTE: WHEN DX IS LOADED, THE 2 CHARACTERS ARE SWAPPED, SO THE
;	COMPARE '32' IS FOR THE 23'RD HOUR.
;
PROCESS_TIME:
	GETTIME WRKAREA,CHAR			;GET CURRENT TIME IN ASCII
	MOV	DX,WORD PTR TIME		;GET OLD HOUR IN DH
	MOVE	TIME,WRKAREA,8			;MOVE IT INTO THE TIME FIELD
	CMP	DX,WORD PTR TIME		;SAME AS NEW AREA?
	JE	SHOW_TIME			;YES - NO NEED TO DISPLAY DATE
	CMP	DX,'32'                         ;WAS IT 23:XX:XX?
	JNE	SHOW_TIME			;NO - DON'T DISPLAY THE DATE
	CALL	PROCESS_DATE			;DAY HAS CHANGED - DISPLAY IT
SHOW_TIME:
	LOCATE	15,(COLUMNS-8)/2		;LOCATE THE CURSOR
	DISPLAY TIME				;AND DISPLAY IT
	JMP	PROCESS_TIME			;AND GO PROCESS THE TIME AGAIN
;
;	GET THE CURRENT DATE AND PROCESS IT
;
PROCESS_DATE PROC NEAR				;PROCESS DATE
	GETDATE BDATE,BIN			;GET CURRENT DATE IN BINARY
;
;	   F = 365 * YEAR + DAY + (31 * (MONTH - 1))
;
	MOV	AX,BDATE.YEAR			;GET CURRENT YEAR
	SAVE	AX				;SAVE ON STACK
	MOV	BX,365				;NUMBER OF DAYS IN A YEAR
	MUL	BX				;MULTIPLY
	CLEAR	BH				;CLEAR BH
	MOV	BL,BDATE.DAY			;GET THE DAY
	ADD	AX,BX				;ADD TO AX
	ADC	DX,0				;ADD ANY CARRY TO DX
	MOV	WORD PTR WRKAREA,AX		;SAVE IN WORK AREA
	MOV	WORD PTR WRKAREA+2,DX		;SAVE HIGH ORDER, TOO.
	CLEAR	AH				;CLEAR AH
	MOV	AL,BDATE.MONTH			;GET THE MONTH
	DEC	AL				;DECREMENT
	MOV	BL,31				;MAX DAYS IN MONTH
	MUL	BL				;MULTIPLY
	ADD	WORD PTR WRKAREA,AX		;ADD TO WRKAREA
	ADC	WORD PTR WRKAREA+2,0		;ADD ANY CARRY
;NOW WE MUST USE ONE OF TWO DIFFERENT ROUTINES
	CMP	BDATE.MONTH,3			;JANUARY OR FEBRUARY?
	JGE	PROCESS_DATE_2			;NO - GO TO SECOND ROUTINE
;
;	IF MONTH < 3 THEN F = F + INT ((YEAR - 1) / 4) -
;	   INT ((INT ((YEAR / 100) + 1)) * 3 / 4)
;
	RESTORE AX				;GET YEAR BACK
	DEC	AX				;DECREMENT UEAR
	SAVE	AX				;AND SAVE IT AGAIN
	SHR	AX,1				;DIVIDE BY 2...
	SHR	AX,1				;AND AGAIN.
	ADD	WORD PTR WRKAREA,AX		;ADD TO WORK AREA
	ADC	WORD PTR WRKAREA+2,0		;ADD ANY CARRY
	RESTORE AX				;GET (YEAR-1) BACK
	MOV	BL,100				;100 TO DL
	DIV	BL				;AND DIVIDE
	INC	AL				;INCREMENT IT
	MOV	BL,3				;MULTIPLY BY 3...
	MUL	BL				;DO IT
	SHR	AX,1				;DIVIDE BY 2...
	SHR	AX,1				;AND THEN AGAIN.
	CLEAR	AH				;THROW AWAY REMAINDER
	SUB	WORD PTR WRKAREA,AX		;SUBTRACT NUMBER OF LEAP DAYS
	SBB	WORD PTR WRKAREA,0		;AND ANY BORROW REQUIRED.
	JMP	PROCESS_DATE_3			;GO BACK TO COMMON ROUTINE
PROCESS_DATE_2:
;
;	IF MONTH >= 3 THEN F = F + INT ((MONTH + 23) * 4 / 10) +
;	   INT (YEAR / 4) - INT ((INT (YEAR / 100) + 1) * 3 / 4)
;
	MOV	AL,BDATE.MONTH			;GET THE MONTH IN AL
	CLEAR	AH				;CLEAR HIGH ORDER BYTE
	SHL	AX,1				;MULTIPLY BY 2...
	SHL	AX,1				;AND AGAIN BY 2
	ADD	AX,23				;ADD 23
	MOV	BL,10				;MOVE 10 TO BL
	DIV	BL				;AND DIVIDE
	CLEAR	AH				;THROW OUT REMAINDER
	SUB	WORD PTR WRKAREA,AX		;SUBTRACT FROM WORK AREA
	SBB	WORD PTR WRKAREA+2,0		;AND SUBTRACT ANY BORROW.
	RESTORE AX				;GET YEAR BACK
	SAVE	AX				;SAVE IT AGAIN
	SHR	AX,1				;DIVIDE BY 2
	SHR	AX,1				;AND DO IT AGAIN
	ADD	WORD PTR WRKAREA,AX		;ADD TO WORK AREA
	ADC	WORD PTR WRKAREA+2,0		;ADD ANY CARRY
	RESTORE AX				;GET (YEAR-1) BACK
	MOV	BL,100				;100 TO DL
	DIV	BL				;AND DIVIDE
	INC	AL				;INCREMENT IT
	MOV	BL,3				;MULTIPLY BY 3...
	MUL	BL				;DO IT
	SHR	AX,1				;DIVIDE BY 2...
	SHR	AX,1				;AND THEN AGAIN.
	CLEAR	AH				;THROW AWAY REMAINDER
	SUB	WORD PTR WRKAREA,AX		;SUBTRACT NUMBER OF LEAP DAYS
	SBB	WORD PTR WRKAREA,0		;AND ANY BORROW REQUIRED.
PROCESS_DATE_3:
;
;	DAY NUMBER = (F MOD 7000) MOD 7
;
	MOV	AX,WORD PTR WRKAREA		;GET TOTAL IN AX...
	MOV	DX,WORD PTR WRKAREA+2		;AND HIGH ORDER IN DX
	MOV	BX,7000 			;DIVIDE BY 7000 SO WE...
	DIV	BX				;...DON'T GET AN OVERFLOW
	MOV	AX,DX				;REMAINDER TO AX
	CLEAR	DX				;CLEAR HIGH ORDER WORD
	MOV	BX,7				;NOW DIVIDE BY 7 IN 32...
	DIV	BX				;BIT MODE SO WE DON'T OVERFLOW.
	MOV	BX,DX				;GET DAY NUMBER IN BL
	SHL	BX,1				;SHIFT FOR TABLE LOOKUP
	MOV	SI,WORD PTR DAY_NAM [BX]	;GET DAY NAME
	LEA	DI,CURRDAY			;GET ADDRESS OF DAY AREA
	CLD					;SET INCREMENT
;
;	WE HAVE THE CURRENT DAY.  MOVE IT INTO THE WORK AREA AND DISPLAY
;	IT, CENTERED. FORMULA FOR CENTERING IS (COLUMNS+1-LENGTH)/2
;	AND IS FIGURED BY ((START ADDRESS+COLUMNS+1)-END ADDRESS)/2
;
DAY_LOOP:
	MOVSB					;MOVE A BYTE
	CMP	BYTE PTR [SI],0 		;END OF STRING?
	JNE	DAY_LOOP			;NO - WE'RE NOT DONE
	MOV	BYTE PTR [DI],'$'               ;MOVE IN A '$'
	LEA	BX,CURRDAY+(COLUMNS+1)		;START ADDRESS + LINE LENGTH
	SUB	BX,DI				;SUBTRACE END ADDRESS
	SHR	BL,1				;AND DIVIDE BY 2
	CLS					;CLEAR THE SCEEN
	LOCATE	11,BL				;LOCAT THE CURSOR
	DISPLAY CURRDAY 			;AND DISPLAY THE DAY
;
;	NOW WE MUST MOVE THE CURRENT MONTH INTO THE STRING
;
	MOV	BL,BDATE.MONTH			;GET CURRENT MONTH
	DEC	BL				;DECREMENT FOR TABLE LOOKUP
	SHL	BX,1				;MULTIPLY BY 2
	MOV	SI,MO_TBL[BX]			;GET ADDRESS OF MONTH NAME
	LEA	DI,DATEOUT			;GET TO STRING ADDRESS
	CLD					;INCREMENT ADDRESSES
MONTH_LOOP:					;MOVE THE MONTH NAME
	MOVSB					;NO - MOVE THE BYTE
	CMP	BYTE PTR [SI],0 		;IS THE NEXT BYTE 0?
	JNE	MONTH_LOOP			;AND GO CHECK THE NEXT BYTE
;
;	CURRENT MONTH NAME IS READY.  LET'S GET THE DAY NEXT, CONVERT IT
;	TO ASCII, AND PUT IT IN THE STRING
;
MOVE_DAY:
	MOV	AL,BDATE.DAY			;GET THE DAY IN AL
	AAM					;CONVERT TO UNPACKED DECIMAL
	OR	AX,3030H			;CONVERT TO ASCII
	CMP	AH,'0'                          ;IS THE FIRST CHARACTER 0?
	JE	MOVE_LOW_DATE			;YES - DO NOT MOVE IT
	MOV	BYTE PTR [DI],AH		;NO - MOVE IT
	INC	DI				;AND INCREMENT DESTINATION
MOVE_LOW_DATE:
	MOV	BYTE PTR [DI],AL		;MOVE IN LOW DATE
	INC	DI				;POINT TO NEXT BYTE
	MOV	BYTE PTR [DI],','               ;MOVE IN A COMMA
	INC	DI				;POINT TO NEXT BYTE
	MOV	BYTE PTR [DI],' '               ;A SPACE GOES HERE
	INC	DI				;AND POINT AT NEXT BYTE
;
;	DAY PROCESSING IS COMPLETE, NOW DO THE SAME TO THE YEAR
;
	MOV	AX,BDATE.YEAR			;GET CURRENT YEAR
	SAVE	DI				;SAVE DESTINATION ADDRESS
	CVD	WRKAREA,BDATE.YEAR		;CONVERT THE YEAR TO ASCII
	RESTORE DI				;RESTORE DESTINATION ADDRESS
	MOVE	[DI],WRKAREA,4			;MOVE YEAR TO DESTINATION
	MOV	BYTE PTR [DI],'$'               ;SET A '$' AT THE END
;
;	STRING IS BUILT.  CENTER IT USING THE SAME EQUATION AS THE DAY.
;
	LEA	BX,DATEOUT+COLUMNS		;START ADDRESS + LINE LENGTH
	SUB	BX,DI				;SUBTRACE END ADDRESS
	SHR	BX,1				;AND DIVIDE BY 2
	LOCATE	13,BL			       ;LOCATE THE CURSOR
	DISPLAY DATEOUT 			;AND DISPLAY THE DATE
	RET					;RETURN TO CALLER
PROCESS_DATE ENDP
TERMIN	PROC	NEAR				;TERMINATION PROCEDURE
	CURSOR	SET,CSRSAVE			;RESTORE CURSOR
	CLS					;CLEAR THE SCREEN
	CLEAR	AX				;RETURN CODE 0
	DOSCALL 4CH				;AND TERMINATE
TERMIN	ENDP
DATETIME ENDS
	END	ENTRY

```
{% endraw %}

## CLOCK.DOC

{% raw %}
```

    This documentation describes CLOCK.ASM and CLOCK.COM, a sample program
 written for upcoming DEBUG and MASM conferences.  This program is written
 in IBM MACRO ASSEMBLER (MASM), and uses the file ASSEMBLE.MAC for the
 macro library.  The program is not elegant; rather I did my best to write
 a program and macro library which would be a good example for beginning
 A/L programmers.  The macros make use of conditional assemblies, and are
 (hopefully), well enough documented to be used by beginning programmers.
 some of them (like LOCATE and CLS) are very useful in making the program
 easier to write.  others, like DOSCALL, are just to make the program
 easier to understand.

  - This program intercepts interrupt 23h (control-break).
  - There are DOS calls for date and time, there are examples of table
    lookups.
  - The month and day names are ASCIIZ strings (standard ASCII strings
    ending with 00h), and DOS calls are used to display data on the screen.
  - Some of the macros in the macro library are not used, but are there for
    your use and modification.	CLOCK.COM will currently run only on an 80
    column screen.  To run CLOCK.COM on a 40 column screen, change the
    equate columns from 80 to 40.  The program initialization phase can be
    modified to get the attributes from a call to BIOS.  I leave that up to
    you as an exercise in modifying the program.

  - CLOCK.ASM is set up to run as a .COM file.	Note that there is no stack
    segment and the program starts at xxxx:0100H (an ORG 100H preceeds the
    first executable statement).  This program will not run as an .EXE file
    and must be run through EXE2BIN.EXE.  The following proceedure will
    allow you to assemble, link, and convert CLOCK.ASM to CLOCK.COM.  This
    proceedure assumes you have a disk with CLOCK.ASM and ASSEMBLE.MAC in
    drive B and MASM.EXE, LINK.EXE and EXE2BIN.EXE on a disk in drive A.

B>A:MASM CLOCK,,;

THE IBM PERSONAL COMPUTER MACRO ASSEMBLER
VERSION 1.00 (C)COPYRIGHT IBM CORP 1981

WARNING SEVERE
ERRORS	ERRORS
0	0

B>A:LINK CLOCK;

IBM PERSONAL COMPUTER LINKER
VERSION 1.10 (C)COPYRIGHT IBM CORP 1982

  WARNING: NO STACK SEGMENT

THERE WAS 1 ERROR DETECTED.

B>A:EXE2BIN CLOCK CLOCK.COM

B>

At this time, you will have the following files on your diskette:

CLOCK.ASM
CLOCK.OBJ
CLOCK.LST
CLOCK.EXE
CLOCK.COM

    CLOCK.OBJ and CLOCK.EXE are intermediate files, they can be erased.
 CLOCK.ASM is, of course, still our input file, CLOCK.LST is the ASSEMBLER
 OUTPUT listing, and CLOCK.COM is the ready to run file.



```
{% endraw %}

## CO.DOC

{% raw %}
```

	      * * * * * * * * * * * * * * * * * * *
	      * 				  *
	      *   SORTED DISKETTE CONTENTS LIST   *
	      * 				  *
	      *   By Dan Daetwyler		  *
	      *      Route 5, Box 518A		  *
	      *      Springdale, Arkansas 72746   *
	      *      (501) 756-0212		  *
	      * 				  *
	      * * * * * * * * * * * * * * * * * * *

Source:  Dr. Dobb's Journal, February 1984, p60.

FILES:

COENDP	 ASM	Diskette Contents List - Workarea definition.
COFREE	 ASM	Diskette Contents List - Get free space.
COPRNT	 ASM	Diskette Contents List - Print cover sheet.
COSCAN	 ASM	Diskette Contents List - Scan directory.
COSORT	 ASM	Diskette Contents List - Sort entry stack.
COVER	 ASM	Diskette Contents List - Get title.
LIST	 COM	Diskette Contents List - Executable code.
LIST	 DOC	Diskette Contents List - Documentation

Files:	 LIST.DOC		COVER.ASM
	 LIST.COM		COTITL.ASM
				COFREE.ASM
				COSCAN.ASM
				COSORT.ASM
				COPRNT.ASM
				COENDP.ASM

    This utility sorts the directories of DOS 1.0, 1.1 and 2.0 disks and
 prints the sorted information to fit inside the disk envelopes.  You have
 to provide your own paper cutter, but the program does the rest.  You also
 get the amount of free space on the disks and the date.  It requires the
 IBM or Epson MX80 printer, but the assembly language files can me modified
 to fit any printer that offers condensed print and eight lines-per-inch
 spacing, if you are skilled at assembly language programming.	The seven
 .ASM files are included for your convenience.

    Please see the Dr.Dobb's article for a detailed description of the
 program.  Only LIST.COM is needed to use the program as written, but you
 may want to change it for your needs.


INSTRUCTIONS FOR USING LIST.COM
    Call the program from a disk in Drive A by typing LIST <ENTER>.  The
 printer must be turned on.  Follow the two requests for information:  Type
 in the designation of the drive that contains the file to be listed, no
 <ENTER>!; then type in the NAME you want to call the list and press
 <ENTER>.  Sit back and watch.	You will get two lists per page from the
 printer.



```
{% endraw %}

## COENDP.ASM

{% raw %}
```
	TITLE	COENDP	- Diskette Contents List - Work Area Definition
	SUBTTL	Version 1.0 - June 1983
	PAGE	81,132
;
CODE	SEGMENT PARA PUBLIC 'CODE'
	ASSUME CS:CODE,DS:CODE
;
	PUBLIC SRCE,PNTR
;
PNTR	DW	0			;Pointer list
SRCE	EQU	PNTR+240		;Start of entry stack
;
CODE	ENDS
;
	END
COVER+COTITL+COFREE+COSCAN+COSORT+COPRNT+COENDP
COVER/M
COVER
```
{% endraw %}

## COPRNT.ASM

{% raw %}
```
	TITLE	COPRNT  - Diskette Contents List - Print Cover Sheet
	SUBTTL	Version 1.0 - June 1983
	PAGE	81,132
;
CODE	SEGMENT	PARA PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	EXTRN	PNTR:WORD,STKCNT:WORD,TITLX:BYTE
;
	EXTRN	CONVRT:NEAR
;
	PUBLIC	PSX,RESTR
PSX	DB	0			;Pass counter
RESTR	DB	12,0			;Printer "restore" forms
DBUF	DB	7 DUP (0)		;Work buffer for file size
DBLK	DB	'  ',0			;Double blank between columns
LFTB	DB	'|    ',0		;Left border
RGTB	DB	'    |'			;Right border (includes CRLF)
CRLF	DB	13,10,0
BCNT	DB	0			;Body line counter
;
	PUBLIC	PRINT
PRINT	PROC	NEAR
	INC	PSX			;Count number of prints
	MOV	BCNT,33			;Set body line counter
	MOV 	AX,STKCNT		;Load entry count
	MOV	DH,4			;Divide by number of columns
	DIV	DH
	OR	AH,AH
	JZ	SETCNT			;Evenly divisible
	INC	AL			;Ragged edge
	CBW
SETCNT:	PUSH	AX			;Entries per column count
	CALL	DOBRDR			;Do upper border
	CALL 	DOBLNE			;  and a blank line
	CALL	DOLFTM			;Do left margin
	MOV	DX,OFFSET TITLX
	CALL	DOPRT			;Output the title line
	CALL	DORGTM			;Do a right margin
	CALL	DOBLNE			;  and a other blank line
	POP	CX	
	MOV	BP,CX	
	SHL	BP,1			;BP contains offset/column in ptr list
	MOV	SI,OFFSET PNTR		;Point to start of ptr list
OTLP:	CALL	DOLFTM			;Do a left margin
	MOV	DL,4			;Set inner loop count to columns
	XOR	BX,BX			;Clear column offset reg
INLP:   CALL	PRTENT			;Print stack entry
	ADD	BX,BP			;Step to next column entry
	DEC 	DL
	JNZ	INLP			;End of inner loop
	CALL	DORGTM			;Do a right margin
	ADD	SI,2			;Step to next ptr
	DEC	BCNT			;Decrement body line count
	LOOP	OTLP			;End of outer loop
	MOV	CL,BCNT			;Load remaining body lines
	XOR	CH,CH
	JCXZ	NOFILL			;All used
FILL:	CALL    DOBLNE			;Fill out body lines
	LOOP	FILL
NOFILL:	CALL	DOBRDR			;Do bottom border
	MOV	DX,OFFSET RESTR
	CALL 	DOPRT			;Restore page
	RET
PRINT	ENDP
;
	PUBLIC	DOPRT
DOPRT	PROC	NEAR			;This subroutine simply prints
	PUSH	DX			;the string pointed to by the
	PUSH	SI			;DX reg on entry.  The string
	MOV	SI,DX			;is terminated by a nul byte.
	MOV	AH,5
DPLP:	MOV	DL,BYTE PTR [SI]
	OR	DL,DL
	JZ	PRTEND
	INT	21H
	INC	SI
	JMP	DPLP
PRTEND:	POP	SI
	POP	DX	
	RET
DOPRT	ENDP
;
PRTENT	PROC	NEAR			;Print one stack entry
	PUSH    CX
	PUSH	DX
	MOV	CX,12
	MOV	DI,WORD PTR [SI+BX]	;DI points to stack entry
	OR	DI,DI			;If entry is zero, blank space
	JZ	BLNK1
	MOV	AH,5
PELP:	MOV	DL,BYTE PTR [DI]	;Print to the end of the
	OR	DL,DL			;  name/type entry
	JZ	BLNK2			;  blanking remainder of 12
	INT	21H			;  character field
	INC	DI
	LOOP	PELP
BACK:	INC	DI
	MOV	AX,WORD PTR [DI]	;Load file size
	MOV	DX,WORD PTR [DI+2]
	PUSH	SI
	MOV	DI,OFFSET DBUF
	CALL	CONVRT			;Convert size to ASCII decimal
	POP 	SI
	MOV	DX,OFFSET DBUF
	CALL 	DOPRT			;Print size
GONE:	POP	DX
	PUSH	DX			;Reload entry value
	DEC	DL
	JZ	PUNT			;If last column, don't space over
	MOV	DX,OFFSET DBLK		
	CALL 	DOPRT			;Two blanks between columns
PUNT:	POP 	DX
	POP	CX
	RET
BLNK1:	MOV	CX,18			;No entry, so blank entire column
	CALL    CLER
	JMP	GONE
BLNK2:	CALL	CLER			;Blanks remainder of name/type field
	JMP	BACK
PRTENT	ENDP
;
DOBLNE	PROC	NEAR
	PUSH	CX
	CALL	DOLFTM			;Output a bordered blank line
	MOV	CX,78
	CALL	CLER
	CALL	DORGTM
	POP	CX
	RET
DOBLNE	ENDP 
;
DOBRDR	PROC	NEAR
	MOV	CX,88
	MOV	DL,'-'
	CALL 	DLFIL			;Output a top or bottom border
	MOV	DX,OFFSET CRLF
	CALL 	DOPRT
	RET
DOBRDR	ENDP
;
DOLFTM	PROC	NEAR			;Outputs "|    "
	PUSH	DX
	MOV	DX,OFFSET LFTB
	CALL	DOPRT
	POP	DX
	RET
DOLFTM	ENDP
;
DORGTM	PROC	NEAR			;Outputs "    |CRLF"
	PUSH	DX
	MOV	DX,OFFSET RGTB
	CALL 	DOPRT
	POP	DX
	RET
DORGTM	ENDP
;
CLER	PROC	NEAR			;Outputs CX blanks to the printer
	MOV	DL,' '
DLFIL:	MOV	AH,5			;Outputs DL character CX times
CLRLP:	INT	21H
	LOOP	CLRLP
	RET
CLER	ENDP
;
CODE	ENDS
;
	END
```
{% endraw %}

## DISASM.BAS

{% raw %}
```bas
1 REM Program by Ross H. Cobb
2 REM 8540 SW 163 Terr
3 REM Miami, FL  33157
4 REM (305) 233-7458
10 CLEAR 32767 : DIM O$(512) : KEY OFF : CLS
15 PRINT "Loading opcodes..."
20 OPEN "A:OPCODES" FOR INPUT AS 1
25 IF EOF(1) THEN 50
30 LINE INPUT #1,O$(X) : X=X+1 : GOTO 25
50 CLOSE 1 : LINE INPUT "Source file name (HEX file only ? ";FL$
55 PRINT "Output device may be a disk file, com port or screen."
56 PRINT "Default is SCRN:"
57 LINE INPUT "Device ? ";D$
58 IF D$="" THEN D$="SCRN:"
59 OPEN D$ FOR OUTPUT AS 2
60 OPEN FL$ FOR INPUT AS 1
70 IF EOF(1) THEN 5000
80 A$=INPUT$(2,1)
85 B1$="":W1$="":W2$=""
90 Z=VAL ("&H"+A$)
95 HC$=A$
100 OP$=O$(Z)
110 W=INSTR(OP$,"@")
120 IF W THEN 500
130 B=INSTR(OP$,"#")
140 IF B THEN 2000
141 NN$=OP$:GOSUB 1000
145 AD=AD+1
150 GOTO 70
500 W1$=INPUT$(2,1):W2$=INPUT$(2,1):WW$=W2$+W1$
550 NN$=LEFT$(OP$,W-1)+WW$+RIGHT$(OP$,LEN(OP$)-W)
560 GOSUB 1000 : AD=AD+2 :GOTO 145
1000 AD$=HEX$(AD):AD$=STRING$(4-LEN(AD$),"0")+AD$
1100 IF W THEN 1200
1101 IF B THEN 1300
1102 HX$=HC$:GOTO 1400
1200 HX$=HC$+W1$+W2$:GOTO 1400
1300 HX$=HC$+B1$:GOTO 1400
1400 PRINT #2,AD$,HX$,NN$
1500 RETURN
2000 B1$=INPUT$(2,1)
2010 NN$=LEFT$(OP$,B-1)+B1$+RIGHT$(OP$,LEN(OP$)-B)
2020 GOSUB 1000 : AD=AD+1 : GOTO 145
5000 PRINT "End of file...." : CLOSE : STOP
```
{% endraw %}

## DISKDIRL.ASM

{% raw %}
```
          title DISKDIRL  -  DISKette DIRectory List    Ver 1.0
          page  85,132
;
code      segment
          assume   cs:code,ds:code
;
          org   100h
begin:    jmp   starther
;
version   db    0                  ;DOS Version flag
defdrv    db    0                  ;Default drive address at entry
numdrv    db    0                  ;Number of drives in the system
drivemsg  db    13,10,'Enter drive to be listed  (Esc to end): $'
errmsg1   db    13,10,'Invalid drive letter$'
setprt    db    27,'0',27,'C',44,15,0  ;Set 1/8" 132 ch 44 ln condensed
restprt   db    27,64,0            ;Restore printer to power up status
restr     db    12,0               ;Printer "restore" forms command
titlelen  equ   44                 ;Length of user inputed title line
titlemsg  db    13,10,'Enter 44 char title: $'
titlebuf  db    titlelen+1,0       ;Input buffer for user title
          db    titlelen+1 dup (?)
title1    db    6  dup (' ')       ;First title line
titlelne  db    49 dup (' ')       ;Where user supplied title input goes
          db    'Free: '
freespc   db    10 dup (' ')       ;Formatted free space in title line
month     db    '  /'              ;Date fields in title line
day       db    '  /'
year      db    '  ',0             ;End of title
f10000    dw    10000              ;Conversion constants
f1000     dw    1000,100,10
extfcb    db    0ffh,5 dup (0),16h ;Extended FCB for read all entries
          db    0,11 dup('?'),24 dup (?)
stacknum  dw    0                  ;Count of entries in stack
entryprt  db    0                  ;Number of entries printed
lnecnt    db    0                  ;Line count of current entry
work      db    7 dup (0),' ',0    ;Work buffer for file size
leftbdr   db    '| ',0             ;Left border
rightbdr  db    ' |'               ;*  Right border (includes CRLF)
crlf      db    13,10,0            ;*  Carriage return + line feed
          page
starther  proc  near
          mov   dx,offset setprt
          call  prtstrng           ;Set printer with required options
          mov   ah,30h
          int   21h                ;Check DOS Version
          or    al,al
          jz    notver2            ;Version 1.x
          dec   al                 ;Version 2.x
notver2:  mov   version,al         ;Save DOS version flag
          mov   ah,19h
          int   21h                ;Get default drive
          mov   defdrv,al          ;Save it
          mov   dl,al
          mov   ah,0eh
          int   21h                ;Get number of drives
          mov   numdrv,al          ;Save it
;
;         Start of main loop
;
mainloop: mov   dx,offset drivemsg
          mov   ah,9
          int   21h                ;Prompt for drive for directory read
          mov   ah,1
          int   21h                ;Get user response
          cmp   al,1bh             ;Check for exit (Esc char)
          je    finished           ;We're done, so end program
          or    al,' '             ;Force lower case
          sub   al,'a'-1           ;Compute drive number (A = 0)
          jnc   drvok              ;Check for valid drive
msgerror: mov   dx,offset errmsg1  ;Invalid drive message
          mov   ah,9
          int   21h                ;Put out error message
          jmp   mainloop
finished: mov   dl,12
          mov   ah,2
          int   21h                ;Force page restore
          mov   dl,defdrv          ;Load default drive at entry
          mov   ah,0eh
          int   21h                ;Restore default drive
          test  entryprt,1         ;Were any entries printed ?
          jz    norest             ;Skip if not
          mov   dx,offset crlf
          call  prtstrng           ;Restore page
norest:   mov   dx,offset restprt
          call  prtstrng           ;Reset printer
          int   20h                ;Exit program
drvok:    cmp   al,numdrv          ;Check for installed drive
          ja    msgerror           ;Drive not installed
          dec   al
          mov   dl,al
          mov   ah,0eh
          int   21h                ;Make selected drive default
;
;         Get Title routine
;
          mov   di,offset title1
          mov   cx,55              ;Length to clear
          mov   al,' '
          rep   stosb              ;Clear title line
          mov   dx,offset titlemsg
          mov   ah,9
          int   21h                ;Prompt for title
          mov   dx,offset titlebuf
          mov   ah,0ah
          int   21h                ;Get title from user
          mov   cl,titlebuf+1      ;Load length
          xor   ch,ch
          mov   si,offset titlebuf+2
          mov   di,offset titlelne
          rep   movsb              ;Move user title to title line
          mov   ah,2ah
          int   21h                ;Get today's date
          sub   cx,1900            ;Convert to two digit year
          mov   di,offset year
          mov   al,cl
          call  decimal            ;Fill in month/day/year on title line
          mov   di,offset month
          mov   al,dh
          call  decimal
          mov   di,offset day
          mov   al,dl
          call  decimal
;
;         Get Free Space routine
;
          test  version,1          ;DOS version 2.x will supply that
          jz    vers1x
          xor   dl,dl              ;Set for default drive
          mov   ah,36h
          int   21h                ;Ver 2.x - get free space from DOS
          mul   bx
          mul   cx                 ;AX,DX contains bytes free
          jmp   vers1x4            ;Enter common code
vers1x:   push  ds
          mov   ah,1bh
          int   21h                ;Ver 1.x - get FAT
          xor   ah,ah
          xchg  cx,dx              ;CX has number of units
          mul   dx                 ;Bytes/allocation unit
          push  ax                 ;Save
          xor   ax,ax
          mov   si,2               ;First FAT entry
vers1x1:  mov   di,si
          shr   di,1
          add   di,si              ;Compute 1 1/2 bytes
          mov   di,word ptr [bx+di]  ;Load FAT entry
          test  si,1               ;See if odd or even
          jz    vers1x2
          push  cx
          mov   cl,4
          shr   di,cl              ;Adjust for 12 bits
          pop   cx
vers1x2:  and   di,0fffh           ;Three nibbles
          jnz   vers1x3            ;In use, so don't count
          inc   ax
vers1x3:  inc   si                 ;Step to next entry
          loop  vers1x1            ;Loop through FAT
          pop   cx                 ;Restore bytes/allocation unit
          mul   cx                 ;Compute total free bytes
          pop   ds                 ;Restore program seg reg
vers1x4:  mov   di,offset freespc  ;Point to output area
          call  convert            ;Convert size to ASCII
;
;         Load Directory Entries routine
;
          mov   di,offset ptrtbl
          xor   ax,ax
          mov   cx,121
          rep   stosw              ;Clear pointer table
          mov   bx,offset ptrtbl   ;BX points to start of pointer list
          mov   di,offset entries  ;DI points to start of entry stack
          xor   cx,cx
          mov   dx,offset extfcb
          mov   ah,11h
nxdirent: int   21h                ;Get next entry
          or    al,al
          jnz   sortdir
          call  saventry           ;Stack entry
          inc   cx                 ;Count entry
          mov   dx,offset extfcb
          mov   ah,12h
          jmp   nxdirent
;
;         Sort Directory Entries routine
;
sortdir:  mov   stacknum,cx        ;Save entry count
          dec   cx
          mov   si,offset ptrtbl   ;Point to first stack entry ptr
sortdir1: mov   di,si
          add   di,2               ;Set to "next" pointer
          mov   dx,cx
          push  cx
sortdir2: push  si                 ;This compare forces short strings
          push  di                 ;     low since they end with nuls
          mov   cx,12              ;Max compare allowed
          mov   si,word ptr [si]   ;Point to entry
          mov   di,word ptr [di]   ;Point to other entry
          rep   cmpsb              ;Compare strings
          pop   di
          pop   si
          jbe   sortdir3           ;Ascending sequence, so no change
          mov   ax,word ptr [si]
          xchg  ax,word ptr [di]
          mov   word ptr [si],ax   ;Exchange pointers
sortdir3: add   di,2
          dec   dl
          jnz   sortdir2           ;Bubble through inner loop
          pop   cx
          add   si,2
          loop  sortdir1           ;Bubble through outer loop
;
;         Have Listing Produced routine
;
          inc   entryprt           ;Count numbers of prints
          mov   ax,stacknum        ;Load entry count
          add   ax,2               ;Round up before divide
          mov   dh,3               ;Divide by num of entrys per line
          div   dh
          cbw
          push  ax                 ;Entries per column count
          mov   cx,33              ;Set body default line count
          cmp   ax,cx              ;See if number of lines to print
          jl    prtent2            ;    is greater than the default
          mov   cx,ax
prtent2:  mov   lnecnt,cl          ;Set new body line count
          call  prtbordr           ;Do upper border
          call  blanklne           ;Do a blank line
          call  prtlbdr            ;Do left margin
          mov   dx,offset title1
          call  prtstrng           ;Output the title line
          mov   cx,6               ;Add 6 extra blanks after date
          call  prtblks
          call  prtrbdr            ;Do right margin
          call  blanklne           ;Another blank line
          pop   cx
          mov   bp,cx
          shl   bp,1               ;BP has offset/col in ptr list
          mov   si,offset ptrtbl   ;Point to start of ptr list
prtent3:  call  prtlbdr            ;Do a left margin
          mov   dl,3               ;Set inner loop count to columns
          xor   bx,bx              ;Clear column offset reg
prtent4:  call  prtentry           ;Print stack entry
          add   bx,bp              ;Step to next column entry
          dec   dl
          jnz   prtent4            ;End of inner loop
          call  prtrbdr            ;Do a right margin
          add   si,2               ;Step to next ptr
          dec   lnecnt             ;Decrement body line count
          loop  prtent3            ;End of outer loop
          mov   cl,lnecnt          ;Load remaining body lines
          xor   ch,ch
          jcxz  prtent6            ;All used
prtent5:  call  blanklne           ;Fill out body lines
          loop  prtent5
prtent6:  call  prtbordr           ;Do bottom border
          mov   dx,offset restr
          call  prtstrng           ;Restore page
          jmp   mainloop
starther  endp
          page
decimal   proc  near               ;Converts AL to two decimal digits
          aam                      ;Store it at SI
          or    ax,'00'
          xchg  al,ah
          stosw                    ;Save in image
          ret
decimal   endp
;
convert   proc  near               ;Convert 6 digits, zero surpressed
          push  di                 ;Save pointer for later use
          div   f10000             ;Result range 0-99
          aam
          or    ax,'00'            ;Make ASCII
          xchg  ah,al
          stosw                    ;Place in image
          mov   cx,3               ;Convert last four digits
          mov   si,offset f1000
divloop:  mov   ax,dx              ;Remainder becomes dividend
          xor   dx,dx
          div   word ptr [si]      ;Power of 10 divide
          or    al,'0'             ;Result range 0-9
          stosb
          add   si,2
          loop  divloop
          or    dl,'0'             ;Last digit in remainder
          mov   al,dl
          stosb
          mov   cx,5               ;Now zero surpress 5 digits
          pop   di
          mov   al,' '
padloop:  cmp   byte ptr [di],'0'
          jnz   cnvtret            ;Conversion complete
          stosb                    ;Replace leading zero with blank
          loop  padloop
cnvtret:  ret
convert   endp
;
saventry  proc  near
          push  cx
          mov   word ptr [bx],di   ;Save pointer to start of entry
          add   bx,2               ;Step pointer table reg
          push  di                 ;Save DI for now
          mov   di,81h+7+8         ;Point pass end of DTA - file name
          mov   cx,8
savcmpfn: dec   di
          cmp   byte ptr [di],' '  ;Look for last non-blank in name
          loope savcmpfn
          add   cx,1               ;Compensate for LOOPE
          mov   si,81h+7           ;Point to beginning DTA - file name
          pop   di
          rep   movsb              ;Copy DTA - file name to 'entries:'
          mov   si,89h+7           ;Point to DTA type field
          cmp   byte ptr [si],' '
          jz    savend             ;No file type
          mov   byte ptr [di],'.'
          inc   di
          mov   cx,3
          rep   movsb              ;Move type field to stack
savend:   mov   byte ptr [di],0    ;Mark end of string
          inc   di
          mov   si,9dh+7           ;Point to size of file
          mov   cx,4
          rep   movsb              ;And save in stack
          mov   si,99h+7           ;Point to last update date
          movsw                    ;Save it in the stack
          pop   cx
          ret
saventry  endp
;
prtstrng  proc  near               ;This sub prints the string pointed
          push  dx                 ;     to by the DX reg on entry.
          push  si                 ;     The string is terminated by
          mov   si,dx              ;     a nul byte.
          mov   ah,5
prtsloop: mov   dl,byte ptr [si]
          or    dl,dl
          jz    prtsend
          int   21h
          inc   si
          jmp   prtsloop
prtsend:  pop   si
          pop   dx
          ret
prtstrng  endp
;
prtentry  proc  near               ;Print one stack entry
          push  bx
          push  cx
          push  dx
          mov   cx,12
          mov   di,word ptr [si+bx]  ;DI points to stack entry
          or    di,di
          jz    prtenty4
          mov   ah,5
prtenty1: mov   dl,byte ptr [di]   ;Print to the end of the name/type
          or    dl,dl              ;    entry blanking remainder of 12
          jz    prtenty5           ;    character field
          int   21h
          inc   di
          loop  prtenty1
prtenty2: inc   di
          mov   ax,word ptr[di]    ;Load file size
          mov   dx,word ptr[di+2]
          mov   bx,word ptr[di+4]  ;Load file last update date
          push  si
          mov   di,offset work
          call  convert            ;Convert size to ASCII decimal
          pop   si
          mov   dx,offset work
          call  prtstrng           ;One blank between fields
          mov   ax,bx              ;Save last update date data
          mov   cl,1+8             ;Shift year in bottom part of reg
          shr   ax,cl
          add   ax,80              ;Format in year-1980, correct for it
          mov   di,offset year
          call  decimal            ;Make year printable
          mov   ax,bx              ;Now do month
          mov   cl,5
          shr   ax,cl
          and   ax,000fh           ;Reg now has month in it
          mov   di,offset month
          call  decimal
          mov   ax,bx              ;Finally do day
          and   ax,001fh
          mov   di,offset day
          call  decimal
          mov   dx,offset month-1  ;Use date starting with a blank
          call  prtstrng           ;Go print it
prtenty3: pop   dx
          push  dx                 ;Reload entry value
          dec   dl
          jz    prteend            ;If last column, don't space over
          mov   cx,2
          call  prtblks            ;Two blanks between columns
prteend:  pop   dx
          pop   cx
          pop   bx
          ret
prtenty4: mov   cx,27              ;No entry, so blank entire column
          call  prtblks
          jmp   prtenty3
prtenty5: call  prtblks            ;Blanks remainder of name/type field
          jmp   prtenty2
prtentry  endp
;
blanklne  proc  near
          push  cx
          call  prtlbdr            ;Output a bordered blank line
          mov   cx,85
          call  prtblks            ;Go clear line
          call  prtrbdr            ;Print right margin
          pop   cx
          ret
blanklne  endp
;
prtbordr  proc  near
          mov   cx,89
          mov   dl,'-'
          call  prtblk1            ;Output a top or bottom border
          mov   dx,offset crlf
          call  prtstrng
          ret
prtbordr  endp
;
prtlbdr   proc  near               ;Outputs "|  "
          push  dx
          mov   dx,offset leftbdr
          call  prtstrng
          pop   dx
          ret
prtlbdr   endp
;
prtrbdr   proc  near               ;Outputs "  |CRLF"
          push  dx
          mov   dx,offset rightbdr
          call  prtstrng
          pop   dx
          ret
prtrbdr   endp
;
prtblks   proc  near               ;Outputs CX blanks to the printer
          mov   dl,' '
prtblk1:  mov   ah,5               ;Outputs DL char CX times
prtbloop: int   21h
          loop  prtbloop
          ret
prtblks   endp
;
ptrtbl    dw    0                  ;Pointer list
entries   equ   ptrtbl+121*2       ;Start of entry stack
;
code      ends
;
          end   begin
```
{% endraw %}

## DISPTEXT.ASM

{% raw %}
```
	page	,132
;------------------------------------------------------------
;
; PROGRAM:
;
;	This routine tests DISP_TEXT which prints a string
;	on the screen without using BIOS interupts.
;
; Author: Malcolm McCorquodale III.
; Date	: July 1983.
;
;------------------------------------------------------------
;
; BIOS data areas.
;
intdata 	segment at 40h
		org	10h
equip_flag	dw	?		;installed hardware
;----------------------------------
; video display data area
;----------------------------------
		org	49h
crt_mode	db	?	; Current crt mode
crt_cols	dw	?	; Number of columns on screen
crt_len 	dw	?	; Length of regen in bytes
crt_start	dw	?	; Startimg address in regen buffer
cursor_posn	dw	8 dup(?) ; Cursor for each of up to 8 pages
cursor_mode	dw	?	; Current cursor mode setting
active_page	db	?	; Current page being displayed
addr_6845	dw	?	; Base address for active display card
crt_mode_set	db	?	; Current setting of the 3x8 register
crt_pallette	db	?	; Current pallette setting color card
intdata 	ends

;----------------------------------
; myprog's data area.
;----------------------------------
data	segment 'data'
string1 db	100 dup (31h)	; The number 1
string2 db	100 dup (32h)	; The number 2
data	ends

;--------------------------------
; Stack segment
;--------------------------------
stack	segment stack 'stack'
stk	db	24 dup (?)
stack	ends

;----------------------------------------------------
;
; This routine prints a character to the screen
;	without using BIOS interupts.
;
;----------------------------------------------------
code	segment 'code'
	assume	CS:code,DS:data,SS:stack

myprog	proc	far
			; DOS linkage.
	push	ds	; Save return segment address on stack.
	xor	ax,ax	; Zero out ax reg,
	push	ax	;   and place on stack.
	mov	ax,data  ;
	mov	ds,ax	 ; Establish addressibility,
			 ;   for DATA segment.
;
; Set up for and simulate a INT 10h with ah = 10
;
	mov	ah,0		 ; Write on row 6
	mov	al,0		 ;  column 10
	mov	bh,0		 ;  on page 0
	mov	cx,length string1 ; 1000 characters
	mov	si,offset string1
	call	disp_text

	mov	ah,0		 ; Write on row 6
	mov	al,0		 ;  column 10
	mov	bh,0		 ;  on page 0
	mov	cx,length string2 ; 1000 characters
	mov	si,offset string2
	call	disp_text
	ret
myprog	endp

;-------------------------------------------------------------
;
; DISP_TEXT
;
; This routine will print N characters on the screen.
;
; INPUT
;	(ah)	= Row to start printing data on.
;	(al)	= Column to start printing data on.
;	(bh)	= Number of page to use.
;	(cx)	= Number of characters to write.
;	(ds:si) = Address of message to print on screen.
;
; OUTPUT
;	None.
;
;-------------------------------------------------------------
DISP_TEXT	proc	near
	assume	ds:intdata	; Use intdata as data segment.
	sti		; Restore interupts.
	cld		; Set direction forward.
	push	es	; Save registers on stack.
	push	dx
	push	cx
	push	bx
	push	si
	push	di
	push	ds
	push	ax	; save row, column value.

	mov	ax,intdata	; Establish addressibility for
	mov	ds,ax		;   DISP_TEXT procs.
	mov	ax,0b800h	; Color card segment
	mov	di,equip_flag	; Get equipment setting
	and	di,30h		; Isolate CRT switches
	cmp	di,30h		;   Is setting for B&W card?
	jne	skip_bw
	mov	ax,0b000h	;   If B&W reset address.
skip_bw:
	mov	es,ax		; Set up ES to point at video ram areas.
	mov	ah,crt_mode	; Move the CRT mode into ah.
	jmp	write_character ; Jump over Write_Character's subroutines.
DISP_TEXT	endp

;--------------------------------------------------------------------
;
; FIND_POSITION
;
;	These routines convert the row and column contained in AX
;	to the offset required for screen memory. (The regen buffer).
;	This routine works for alphanumeric modes.
;
; INPUT
;	ax = row, column position for characters.
;
; OUTPUT
;	ax = offset of char position in regen buffer.
;
;--------------------------------------------------------------------

Find_position	proc	near
	push	cx
	mov	cl,bh		; display page to cx
	xor	ch,ch
	xor	bx,bx		; Assume screen 0.
	jcxz	no_page
page_loop:			; If we are not on screen 0 then
	add	bx,crt_len	;    adjust bx for the page we're on.
	loop	page_loop
no_page:

	push	bx		; Save work register
	mov	bx,ax
	mov	al,ah		; Move rows to al.
	mul	byte ptr crt_cols	; Determine # of bytes to row.
	xor	bh,bh
	add	ax,bx		; Add in column value.
	sal	ax,1		; Times 2 for attribute bytes.
	pop	bx		; Restore work register

	add	bx,ax		; Add to start of screen buffer.
	pop	cx
	ret
find_position	endp

;----------------------------------------------------------------------
;
; WRITE_CHARACTER
;
;	This routine writes the characters at
;	the calculated cursor position, with attribute unchanged.
;
;	This procedure could be changed to write the attribute
;	byte also. This would require changing the MOVSB instruction
;	to a MOVSW instruction as well as deleting the INC DI
;	instruction that follows it.
;
;----------------------------------------------------------------------

write_character proc	near
	cmp	ah,4		; Is this graphics ?
	jc	begin
	cmp	ah,7		; Is this the b&w card ?
	je	begin
	pop	ax		; Throw away ax,
	ret			;   and abort.
begin:
	pop	ax		; Restore row and column.
	call	find_position	; Calculate address at which to
	mov	di,bx		;   put text, and put it in di.
;
;------Wait for horizontal retrace.
;
wait_retrace:
	mov	dx,addr_6845	; Get base address of 6845 screen controller,.
	add	dx,6		;     and point at 6845 status port.
	pop	ds		; Restore users Data segment so we can
	assume	ds:data 	;	  find and print his data.
wait_low:
	in	al,dx		; Get status.
	test	al,1		; Is it low ?
	jnz	wait_low	; Wait until it is.
	cli			; Mask out interupts.
wait_high:
	in	al,dx		; Get status.
	test	al,1		; Is it high ?
	jz	wait_high	; Wait until it is.
	movsb			; Put the the char/attr
	inc	di		; Bump pointer past attribute byte.
	loop	wait_low	;   as many times as requested.
;
;  Return to caller.
;
	sti		; reallow interupts
	pop	di	; recover registers and segments
	pop	si
	pop	bx
	pop	cx
	pop	dx
	pop	es
	ret
write_character endp


code	ends
	end
```
{% endraw %}

## DOS-EDIT.ASM

{% raw %}
```
        PAGE    60,132
;***************************************************************************
; General comments
;***************************************************************************
; The following comprises the disassembled and documented version of DOS-ED
; as it exists on Compuserve's XA6 data base.  If one reassembles this
; program one will obtain the exact version of DOS-ED.COM that exists on
; that database.  No attempt has been made to make improvements to this code
; other than to indicate in the margin were some could (and probably should)
; be made.  If you notice that the program sizes are different between this
; reassembled and relinked version and the version that has been generated
; from the HEX file on CIS, that is because there is some trailing garbage
; on the CIS file.  You can strip it off in the debugger and the files will
; compare exactly.
;
; Even after disassembling and documenting this code I have a few questions
; about what was being done in places.  If my comments seem spurious at
; times, then just take them with a grain of salt.  They should help you
; understand this code for the most part.
;
; When linking this program you should expect to receive a No Stack warning
; message along with an Unsatisfied external error on DOS_RETURN.  These
; are normal and should be ignored.
;
; DOS-ED is a fine piece of programming performed by Jack Gersbach.
; This disassembly and documentation was done by myself.
;                                     - Scott W. Killen
;
;***************************************************************************
; Definitions and commentary on conventions in coding
;***************************************************************************
; Register usage:  (Most common (but not exclusive) uses are listed)
; AX, DX, CX - Used for many reasons
; DH - Usually current row on crt
; DL - Usually current col on crt
; SI - Usually points to offset of current character in input buffer (first character is offset 0)
; DI - Usually has the value of one of the following:
;      * The number of characters currently in the input buffer   *or*
;      * Points to a destination in the text holding buffer
; BX - Usually contains the address at which the first character in the input buffer is located.
;         (The two characters before this are the max buffer size and length of string
;          characters.)
; BP - Usually a register of flags organized as bits |01234567| where:
;      Bits 0-3 have no function
;      Bit 4 - Off means the input buffer has been altered since interrupt processing began.
;              On means *only* lateral cursor positioning commands have been issued since interrupt
;                 processing began.
;      Bit 5 - Off means previous line from holding buffer, On means original line
;      Bit 6 - Off means no changes to current line in input buffer, On means changes have been made
;      Bit 7 - Applies to the redisplay of lines on the screen after an intra-line edit operation
;                 Off means line wasn't shortened therefore no trailing blanks needed
;                 On means line is now shorter and blanks are needed over trailing characters
;
; Memory Usage:
; ES:[0450H] - Contains current cursor position in Bios data area
; ES:[044AH] - Contains # of columns of current crt screen in Bios data area
; ES:[0417H] - Keyboard flag, containing insert, shift, num lock, scroll lock etc in Bios data area
;                   insert flag bit is 80h
;
; CS:[inline_mod1+1] - Jump return address to normal DOS funcion processing
; CS:[inline_mod2+1] - Current cursor definition (start/stop lines)
; CS:[inline_mod3+1] - Screen location of end of line (row/col)
; CS:[inline_mod4+2] - Higher of DS or CS on entry into interrupt.
; CS:[inline_mod5+2] - Maximum size of input buffer
;
; start_off  - Offset of start of input buffer on screen (example if prompt is A> then screen column position
;                   of input buffer start would be 2
; current_col - Current column position on screen (1st column is 0)
; last_entry - Address (offset) of last string accessed in text buffer
; next_entry - Address (offset) of next available block in text buffer
; buffer_bot - Base address of text buffer
; buffer_top - Top address of text buffer
; aux_last  \
; aux_next   \ Same as previous four except for auxiliary buffer
; aux_bot    /
; aux_top   /
;

; Character equates
ACK              equ  06h  ; Acknowledge character (Cntrl F)
BELL             equ  07h  ; Bell character        (Cntrl G)
BACKSPACE        equ  08h  ; Backspace character
TAB              equ  09h  ; Tab character
ESC              equ  1Bh  ; Escape character
BLANK            equ  20h  ; Space character
CR               equ  0dh  ; carriage return
LF               equ  0ah  ; Line feed
HAT              equ  5eh  ; "^" character
SMALLA           equ  61h  ; "a" character
LEFT_CURLY_BRACE equ  7Bh  ; "{" character
CNTL_BACKSPACE   equ  7fh  ; Control and backspace pressed simultaneously

; Masks
INSERT_ON_MASK   equ  80h  ; Insert key bit on, corresponding to keyboard status word
INSERT_OFF_MASK  equ  7fh  ; Insert key bit off, corresponding to keyboard status word
LENGTH_BYTE_MASK equ  80h  ; Mask to identify the text string length bit in text buffer
LENGTH_OFF_MASK  equ  7fh  ; Mask to turn of the length byte identifier
UPPER_CASE_MASK  equ  40h  ; Convert control character to upper case character
LOWER_CASE_MASK  equ  20h  ; Convert upper case character to lower case character

; Physical characteristics
ROWS_ON_CRT       equ 19h               ; Ordinal number of lines on crt
LAST_ROW_ON_CRT   equ  ROWS_ON_CRT - 1  ; Offset of last line on crt (top line is line 0)
MONO_CUR_DEF      equ  0B0Ch            ; Start, stop lines of cursor
MONO_CUR_STOP     equ  0Ch              ; Stop line for standard cursor
GRAPHICS_CUR_DEF  equ  0607h            ; Start, stop lines of cursor for graphics device
GRAPHICS_CUR_STOP equ  07h              ; Stop line for standard cursor for graphics device
TEXT_BUFFER_START equ 60h               ; Start address for text holding buffer
TEXT_BUFFER_END   equ 160h              ; End address for text holding buffer
TEXT_BUFFER_SIZE  equ TEXT_BUFFER_END - TEXT_BUFFER_START ; Extent of text buffer
BOTH_BUFFS_SIZE   equ TEXT_BUFFER_SIZE + TEXT_BUFFER_SIZE ; Combined buffer size
AUX_BUFFER_START  equ 160h              ; Auxiliary holding buffer start address
AUX_BUFFER_END    equ 260h              ; Auxilliary holding buffer end address
                                        ; *NOTE* TEXT_BUFFER_END - TEXT_BUFFER_START =
                                        ;        AUX_BUFFER_END - AUX_BUFFER_START

; Bios interrupt 10 functions
SET_CURSOR_TYPE  equ  01h
SET_CURSOR_POSN  equ  02h
READ_CURSOR_POSN equ  03h
READ_VIDEO_STATE equ  0fh

; Dos interrupt 21 functions
INPUT_CHR_NOECHO  equ  08h
OUTPUT_CHR        equ  02h

;***************************************************************************
; BIOS data segment definition
;***************************************************************************
BIOSEG  SEGMENT at 0h
        org 417h
        kbd_flag     db  ?
        org 44ah
        crt_cols     dw  ?
        org 450h
        cursor_posn  dw  ?
BIOSEG  ends

;***************************************************************************
; DOS-ED code segment begins
;***************************************************************************
CSEG    SEGMENT
        ASSUME CS:CSEG
        ORG 100H
DOSED   PROC NEAR

        MOV     SI,offset loadlabel    ; Source of code to move is at loadlable
        MOV     DI,offset initialize   ; Destination is at end of file at initialize
        MOV     CX,offset line_table   ; Above the code to be moved is linetable
        SUB     CX,SI                  ; The difference is the amount of code to be moved
        repz MOVSB                     ; Move it!!
        JMP     initialize             ; Now go do it.

loadlabel:
        XOR     AX,AX                       ; Clear AX
        MOV     DS,AX                       ; Prepare to save original interrupt
        MOV     SI,0084H                    ; Source for INT 21h as provided for in the interrupt table
        MOV     DI, offset [inline_mod1+1]  ; Destination in the code segment for moving this pointer
        MOVSW                               ; Move the two word address
        MOVSW
        MOV     AX, offset entry_point ; Move this programs starting address into the dos interrupt slot
        MOV     [SI-04H],AX            ; Move offset in line
        MOV     [SI-02H],CS            ; Move segment value in line
        MOV     DI, TEXT_BUFFER_START  ; Working buffer begins at offset 60h which is Formatted parameter
        MOV     CX, BOTH_BUFFS_SIZE    ;   area 1 in the Program Segment Prefix.
        MOV     AL, CR                 ; Fill 512 bytes with CR characters.  Note that this technique uses
        repz STOSB                     ;   161 bytes of PSP for storage!  Very Clever!
        MOV     DX, offset initialize  ; Dos may load above this address
        INT     27H                    ; Terminate but stay resident

line_table      db  300 dup (?)

entry_point:
        CMP     AH,0AH               ; Is this function 10?
        JE      wrapper              ; Nope, continue with normal Dos 21 interrupt
        EXTRN   DOS_RETURN:FAR

inline_mod1:
        JMP     DOS_RETURN           ; This code is modified in line!
                                     ;    Go to normal Dos function handling.

wrapper:
        PUSH    AX
        PUSH    BX
        PUSH    CX
        PUSH    DX
        PUSH    SI
        PUSH    DI
        PUSH    BP
        PUSH    DS
        PUSH    ES
        STI
        CALL    begin_dosed
        POP     ES
        POP     DS
        POP     BP
        POP     DI
        POP     SI
        POP     DX
        POP     CX
        POP     BX
        POP     AX
        MOV     AL,00H
        IRET

;***************************************************************************
; Extended keystroke recognition and branching tables
;***************************************************************************
                ; Table 1 of extended keyboard function codes
table1:
t1_1    db  0fh ; Back Tab
t1_2    db  47h ; Home key
t1_3    db  48h ; Up arrow
t1_4    db  4bh ; Left arrow
t1_5    db  4dh ; Right arrow
t1_6    db  4fh ; End key
t1_7    db  50h ; Down Arrow
t1_8    db  53h ; Del key
t1_9    db  73h ; Cntrl Left Arrow
t1_a    db  74h ; Cntrl Right Arrow
t1_b    db  75h ; Cntrl End
t1_c    db  77h ; Cntrl Home
t1_d    db  76h ; Cntrl PgDn
t1_e    db  84h ; Cntrl PgUp
t1_f    db  00h ; ?
                    ; Table 2 indexes correspond to table 1 indexes
                    ; and points to code address where the function is handled.
table2:
t2_f    dw offset error_return        ;    0ah, 05h   ; ?
t2_e    dw offset cntrl_page_up       ;    74h, 07h   ; Cntrl PgUp
t2_d    dw offset cntrl_page_down     ;   0a9h, 06h   ; Cntrl PgDn
t2_c    dw offset cntrl_home          ;    0bh, 05h   ; Cntrl Home
t2_b    dw offset cntrl_end           ;    27h, 05h   ; Cntrl End
t2_a    dw offset cntrl_right_arrow   ;    41h, 05h   ; Cntrl Right Arrow
t2_9    dw offset cntrl_left_arrow    ;    83h, 05h   ; Cntrl Left Arrow
t2_8    dw offset del_key             ;   0edh, 05h   ; Del key
t2_7    dw offset down_arrow          ;    44h, 06h   ; Down Arrow
t2_6    dw offset end_key             ;   0e4h, 04h   ; End key
t2_5    dw offset right_arrow         ;    67h, 05h   ; Right arrow
t2_4    dw offset left_arrow          ;    99h, 05h   ; Left arrow
t2_3    dw offset up_arrow            ;    43h, 06h   ; Up arrow
t2_2    dw offset home_key            ;   0e1h, 05h   ; Home
t2_1    dw offset backtab             ;    8dh, 05h   ; Backtab

;***************************************************************************
; Display and output services
;***************************************************************************
screen_and_display:                 ; Screen out control characters of form ^x
        CMP     AL, BLANK           ; Compare AL to blank character
        JNB     display_one_char    ; If we have a printable character go to display routine
        CMP     AL, TAB             ; Is this a forward tab?
        JE      display_one_char    ; If so, go display.
        PUSH    AX                  ; No, this is a "normal" control character
        MOV     AL,HAT              ; Place a "^" character in AL
        CALL    display_one_char    ; Print the "^" out.
        POP     AX                  ; Now convert the Control character to its
        OR      AL, UPPER_CASE_MASK ; upper case equivalent and print it.  Result is "^E"
                                    ;    construct for representing control characters.

display_one_char:
        CMP     AL, BLANK           ; Does AL contain a blank character
        JB      display_cntrl_chr   ; Jump if we have a control character

ready_display:
        CMP     AL, CNTL_BACKSPACE           ; Don't increment column counter if this
        JE      output_to_display            ;    is a control Backspace character
        INC     BYTE PTR CS:[current_col]    ; Increment column position because we received
                                             ;    something printable
output_to_display:
        PUSH    DX                           ; Save the DX register and set up the
        XCHG    AX,DX                        ;    AH register for a DOS function 2 (Display
        MOV     AH,  OUTPUT_CHR              ;    output) call.
        INT     21H
        XCHG    AX,DX                        ; Restore the AX register
        POP     DX                           ;    and restore the DX register
        RET

display_cntrl_chr:                           ; Process a control character for output
        CMP     AL, CR                       ; Is this a carriage return character?
        JE      cr_out                       ; If so go take care of it
        CMP     AL, BACKSPACE                ; Is this a backspace?
        JE      bs_out                       ; If so we need to take care of it
        CMP     AL, TAB                      ; Maybe its a tab character
        JNE     relay_to_output              ; Continue if its not a tab
        MOV     AL,BYTE PTR CS:[current_col] ; Set AL to current column on screen
        OR      AL,0F8H                      ; Get the number of spaces to the next
        NEG     AL                           ;    8 byte boundary
        PUSH    CX                           ; Save the CX register
        MOV     CL,AL                        ; Place the count of blanks to be output in CL
        mov     ch, 00h                      ; Zero out high byte
        JCXZ    skip_tabbing                 ; Dont do anything if count is zero

tab_loop:
        MOV     AL, BLANK                    ; Ok, now print out all necessary
        CALL    display_one_char             ;    blanks to reach an 8 character
        LOOP    tab_loop                     ;    boundary.

skip_tabbing:
        POP     CX                           ; Restore the CX register.
        RET

cr_out:
        MOV     CS:BYTE PTR [current_col],00H   ; Reset current column pointer to zero

relay_to_output:
        JMP     SHORT output_to_display

bs_out:
        DEC     BYTE PTR CS:[current_col]  ; Decrement the current column pointer
        PUSH    AX                         ; Save the character in register AX
        PUSH    DX                         ; Save the DX register
        MOV     DX,ES:[0050H]              ; Get the Cursor position from Bios data area
        MOV     AH,ES:[004AH]              ; Get the # of CRT cols on screen from Bios data area
        OR      DL,DL                      ; Are we at column zero?
        JNE     bs_end                     ; If not forget the rest.
        OR      DH,DH                      ; Are off the screen at the top?
        JNE     set_cur_loc                ; If not then dont reset rows
        MOV     DH, ROWS_ON_CRT            ; (Re)set row value to 25

set_cur_loc:
        DEC     DH                         ; Decrement the row count
        MOV     DL,AH                      ; Move in # of columns.  (0, 0) is home.
        PUSH    BX                         ; Save BX
        MOV     BH,00H                     ; Prepare for BIOS interrupt 10 funtion 2
        MOV     AH, SET_CURSOR_POSN        ;    call (Set cursor position)
        INT     10H                        ; Do it.
        POP     BX                         ; Restore BX

bs_end:
        POP     DX                         ; Restore DX register
        POP     AX                         ; and the AX register
        JMP     SHORT relay_to_output      ; and now we are done.

decrement_col_row:                         ; Wrap back if line spans two screen lines
        OR      DL,DL                      ; Are we at column zero
        JNE     dcr_end                    ; If so then dont worry about row update
        DEC     DH                         ; Yep, decrement the row pointer
        MOV     DL,BYTE PTR ES:[crt_cols]  ; Get the # of CRT cols per screen from Bios data area

dcr_end:
        DEC     DL                         ; Decrement the column pointer
        RET

display_blank:
        MOV     AL, BLANK

display_and_test:                             ; Display and test for updated cursor location
        PUSH    CX                            ; Save CX register
        MOV     CX,ES:[cursor_posn]           ; Load CX with cursor position from Bios
        CALL    screen_and_display            ; Send the character in AL to output display
        CMP     CH, LAST_ROW_ON_CRT           ; Are we on the last row?
        JNE     dat_end                       ; If not then no further tests are needed
        CMP     CL,BYTE PTR ES:[cursor_posn]  ; Are we now on a new column?  (alternative question
                                              ;    is: have we scrolled?)
        JBE     dat_end                       ; If current location > cl then yes we have scrolled
                                              ;    up a line and need to decrement the line pointer
        DEC     DH                            ; Decrement the line pointer

dat_end:
        POP     CX                   ; Restore CX
        RET
;***************************************************************************

set_cursor:
        PUSH    BX
        PUSH    CX
        PUSH    DX
        PUSH    BP                                  ; Save registers
        PUSH    SI
        PUSH    DI

inline_mod2:
        MOV     CX, MONO_CUR_DEF                       ; Assume Standard char def
                                                       ;   (Note that this word is modified
                                                       ;    in line if it is later determined
                                                       ;    that a graphics board is in use)
        TEST    BYTE PTR ES:[kbd_flag], INSERT_ON_MASK ; Is insert on?
        JE      after_box                              ; If not then branch
        MOV     CH,CL                                  ; Yep, turn the cursor into
        SHR     CH,1                                   ;   a half sized box

after_box:
        MOV     AH, SET_CURSOR_TYPE                    ; Set up and call Bios for
        INT     10H                                    ;   support.
        POP     DI
        POP     SI
        POP     BP                                     ; Restore Registers
        POP     DX
        POP     CX
        POP     BX
        MOV     AX,WORD PTR ES:[cursor_posn]            ; Load AX with current cursor position

inline_mod3:
        CMP     AX,0888H                                 ; Compare current cursor position to end of line position
        JB      sc_ret                                   ; If less than then dont update end of line position
        MOV     CS:WORD PTR [inline_mod3+1],AX  ; Modify end of line address with value of current cursor position

sc_ret:
        RET

credit  db 'DOS EDITOR BY J. Gersbach',CR,LF,00


begin_dosed:                            ; Save registers
        PUSH    BX
        PUSH    CX
        PUSH    DX
        MOV     BH,00H                  ; Set up to read current cursor position
        MOV     AH, READ_CURSOR_POSN    ; Cursor position returned as DH, DL is row, col
        INT     10H                     ; Read the current cursor position into DH, DL
        MOV     CS:[start_off],DL       ; Move current column into storage
        MOV     CS:[current_col],DL     ; Move current column into storage
        CMP     CL, MONO_CUR_STOP       ; Check: Is current end line for cursor = 12
        JB      bd2                     ; Branch if less than 12
        MOV     AH, READ_VIDEO_STATE    ; Set up to return current video state
        INT     10H                     ; Go get it
        CMP     AL, GRAPHICS_CUR_STOP   ; Is this a 80x25 BW card
        MOV     CX, MONO_CUR_DEF        ; Set start/stop lines for cursor to 11/12
        JE      bd1                     ; Yes it is 80x25 BW card, branch
        MOV     CX, GRAPHICS_CUR_DEF    ; No its not 80x25 card, start/stop lines are 6/7

bd1:
        MOV     AH, SET_CURSOR_TYPE     ; Set function call to set cursor type
        INT     10H                     ; Do it

bd2:
        MOV     CS:WORD PTR [inline_mod2+1],CX   ; Save the cursor type setting in line
        POP     DX
        POP     CX
        POP     BX
        MOV     BX,DX                           ; DX points to offset of input buffer
        MOV     AL,[BX]                         ; Get the number of characters in the buffer
        CMP     AL,02H                          ; Is it bigger than 2 characters?
        JB      sc_ret                          ; Nope, we have a problem here!
        DEC     AL                              ; Now decrement AL to get number of real characters
        MOV     AH, 00H                         ;    buffer han hold.   Zero out AH
        MOV     CS:WORD PTR [inline_mod5+2],AX  ; AX now contains the max number of chars that the buffer
                                                ;    can hold.
        ADD     BX,02H                          ; BX points to address at which to put first real character
                                                ;    in input buffer
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
                                                ;;  AUTOMATIC BUFFER TOGGLE (Why, I don't know)
auto_buffer_toggle:                             ;;
        MOV     BP,DS                           ;;  Place the DS register into BP
        PUSH    DS                              ;;  Save the value of the DS register
        MOV     DI,CS                           ;;  Place the CS register into DI
        MOV     DS,DI                           ;;     and also into DS
        CMP     BP,DI                           ;;  Compare DS : CS values
        JB      abt1                            ;;  If DS < CS then jump
                                                ;;
inline_mod4:                                    ;;
        CMP     DI,0888H                        ;;  Compare CS : AUX    (this in-line address will be called AUXiliary)
        JE      abt2                            ;;  If its equal (if we came this way last time!) then go swap
        JMP     SHORT after_swap_loop           ;;  If so then avoid swaps
                                                ;;
abt1:                                           ;;
        MOV     BP,DI                           ;;  Set BP to highest register value (now determined to be CS)
        CMP     DI,DS:WORD PTR [inline_mod4+2]  ;;  Compare CS : AUX
        JE      after_swap_loop                 ;;  If its not equal (if we came this way last time!) then go swap
                                                ;;
abt2:                                           ;;
        PUSH    CS                              ;;  Now we must swap the appropriate memory locations to allow the
        POP     ES                              ;;     editor to use the other buffer (There are two buffers that one
                                                ;;     can transfer between depending on DS : CS relationship.
        MOV     SI,offset last_entry            ;;  Load SI with starting address
        LEA     DI,[SI+08H]                     ;;  Load DI with second starting address
        MOV     CX,0004H                        ;;  4 words are to be moved ... in order ... address of last string accessed,
                                                ;;     address of highest available byte, base address of text holding buffer,
                                                ;;     high address of holding buffer.
                                                ;;  Values are initiallized to:
                                                ;;     1st buffer - 60h, 60h, 60h, 160h
                                                ;;     2nd buffer - 160h, 160h, 160h, 260h
                                                ;;
swap_loop:                                      ;;
        MOV     AX,[DI]                         ;;  Save the value in the secondary buffer
        MOVSW                                   ;;  Move the primary buffer value into the secondary buffer position
        MOV     [SI-02H],AX                     ;;  Replace emptied location with saved value
        LOOP    swap_loop                       ;;  Go back and swap next set of values
                                                ;;
after_swap_loop:                                ;;
        MOV     DS:WORD PTR [inline_mod4+2],BP  ;;  Load AUX such that AUX = Max(CS, DS)
        POP     DS                              ;;  Restore DS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
        MOV     BP,000CH
        JMP     SHORT rib1

reinit_buffer:
        MOV     BP,0004H

rib1:
        XOR     SI,SI                                    ; Zero out Source index
        MOV     CS:WORD PTR [inline_mod3+1],SI           ; Modify inline address just above
        XOR     DI,DI                                    ; Zero out Destination index
        MOV     ES,DI                                    ; Zero out the ES register
        AND     BYTE PTR ES:[kbd_flag], INSERT_OFF_MASK  ; Turn insert off

start_read_char:
        AND     BP,0FFFEH                  ; Turn off low bit in BP (Line may be shorter)
        CALL    set_cursor                 ; Set the cursor shape as per mode
        XCHG    AX,DX                      ; Save AX in DX
        MOV     AH, INPUT_CHR_NOECHO       ; Get a character from the keyboard
        INT     21H                        ; Call DOS for service
        CMP     AL, ACK                    ; Is it an acknowledge character?
        JE      start_read_char            ; If so ... just forget it and go back
        MOV     CX, offset start_read_char ; Save address of start_read_char label
        PUSH    CX                         ; This is a return address for a nonexistent call!
        OR      AL,AL                      ; Set up for test
        JNE     normal_keyboard_chr        ; Jump if non null character input

extended_keyboard_chr:
        MOV     AH, INPUT_CHR_NOECHO       ; Null character, get ready to read next character
        INT     21H                        ; Get it
        PUSH    ES                         ; Save ES
        PUSH    CS                         ; Set ES to value in CS
        POP     ES
        PUSH    DI                         ; Save DI
        MOV     CX,000FH                   ; Set counter to number of items in table 1
        MOV     DI, offset [table1]        ; Set starting address of table 1
        repnz SCASB                        ; Scan for occurrence of second character in table 1
        POP     DI                         ; Restore DI
        POP     ES                         ;    and ES
        XCHG    CX,BX                      ; Let BX contain pointer to item found in table 1
        ADD     BX,BX                      ; Double it
        PUSH    CS:WORD PTR [BX+table2]    ; Index into table 2 for starting address of service code
                                           ;    The value is pushed onto the stack to allow for the
                                           ;    return (Without a corresponding call!)
        MOV     BX,CX                      ; Restore original BX value
        RET                                ; Execute the fake return


;***************************************************************************
; Individual service routines
;***************************************************************************
;*********************************************************************************** Escape Key
escape_handling:                        ; Escape character here
        CALL    home_key                ; Go to start of line
        CALL    cntrl_end               ; Delete to end

restart_input:
        POP     DI                      ; Pop the return address off of the stack
        JMP     SHORT reinit_buffer     ; Jump to reinitialize buffer and read

normal_keyboard_chr:
        CMP     AL, CNTL_BACKSPACE    ; Control Backspace?
        JE      nkc1                  ; if so, go to backspace handling
        CMP     AL, BACKSPACE         ; Backspace?
        JNE     nkc2                  ; If not continue

nkc1:
        JMP     backspace_handling    ; Backspace here, take care of it

nkc2:
        CMP     AL, CR                ; Is it a carriage return?
        JNE     nkc3                   ; If not continue
        JMP     cr_key                ; Yes, go take care of it

nkc3:
        CMP     AL, ESC               ; Is it an escape character
        JE      escape_handling       ; If so, go take care of it

        CMP     AL, TAB               ; Bad code here                                              ** remove this **
        JE      nkc4                  ; Bad code here                                              ** remove this **

inline_mod5:
nkc4:   CMP     DI,0888H              ; Compare DI to max buffer size (modified in line in Begin_Dosed)
        JB      printable_char        ; If less than max then continue with printable character
        MOV     AL, BELL              ; Prepare to ring the bell
        JMP     display_one_char      ; Do it


;*********************************************************************************** Non editing character
printable_char:
        AND     BP,0FFF7H             ; Turn off the no changes made flag
        OR      BP,0002H              ; Turn on the changes made to this line flag
        PUSH    AX                    ; Save AX
        CALL    display_and_test      ; go display the character
        MOV     DX,ES:[cursor_posn]   ; Place the current cursor position in DX
        TEST    BYTE PTR ES:[kbd_flag], INSERT_ON_MASK   ; Is insert mode mask on?
        JE      add_chr_to_inbuf      ; If not then branch around shift up string
        PUSH    DI                    ; Save the DI register

shift_up:
        CMP     DI,SI                 ; Are we pointing past the end?
        JBE     end_shift_up          ; Have we decended to the original point?
        MOV     AL,[BX+DI-01H]        ; Move this character in input buffer up
        MOV     [BX+DI],AL            ;    one byte in memory
        DEC     DI                    ; Next character down
        JMP     SHORT shift_up        ; Return for more

end_shift_up:
        POP     DI                    ; Restore original end of input buffer pointer
        INC     DI                    ; Increment it by one
        INC     SI                    ; Also increment the current character pointer
        CALL    redisplay_line
        DEC     SI                    ; Now decrement source so that it will look
                                      ;    like normal overwrite to next code section

add_chr_to_inbuf:
        POP     AX                    ; Restore AX
        MOV     AH,AL                 ; Move the current character into AH
        XCHG    AL,[BX+SI]            ; Put it into the input buffer
        INC     SI                    ; Point to next character position
        CMP     DI,SI                 ; Have we gone past the end
        JNB     acti1                 ; If not then forget update of DI
        MOV     DI,SI                 ; DI is now reset to SI (which was >)

acti1:
        AND     AL,AH                 ; AND old character against new character
        CMP     AL, BLANK             ; If both are printable then we are finished
                                      ;    because we have coundn't have shortened
        JNB     acti_ret              ;    the line with the overwrite.  (eg. A over ^E
                                      ;    would shorten line by one character)
        TEST    BYTE PTR ES:[kbd_flag], INSERT_ON_MASK  ; If insert mode was on then we
        JNE     acti_ret              ;    are finished also because we have already
                                      ;    printed the string
        CMP     SI,DI                 ; Also we can forget if we are at the end of the line
        JE      acti_ret              ; None of the above hold, and we may have trailing
        JMP     note_shorter_change   ;    characters on the line that need to be blanked
                                      ;    over. (caused by overwriting a ^x diagraph or a
                                      ;    Tab character with a single character.)
acti_ret:
        RET


;*********************************************************************************** End key
end_key:
        TEST    BP,0008H               ; Have we made any changes to this buffer?
        JE      move_to_end            ; If so then go ahead an position to end of line.
        AND     BP,0FFF7H              ; No changes, lets now indicate that changes have been made,
        OR      DI,DI                  ;    and restore the input buffer.  Start by checking DI for zero.
        JNE     move_to_end            ; Go restore if something is there.
        MOV     AL,[BX-01H]            ; Get the length of the string in the holding buffer.
        CMP     [BX-02H],AL            ; Is it larger than the max buffer size?
        JB      recycle_input          ; If so then we have problems and a restart is necessary.
        MOV     AH,00H                 ; Zero out AH
        XCHG    AX,DI                  ; Move the new length into DI
        CMP     BYTE PTR [BX+DI], CR   ; Is there a carriage return here
        JE      move_to_end            ; If so then go ahead and restore it

recycle_input:
        JMP     restart_input          ; No, we must have garbage in the input buffer, go back and restart

move_to_end:
        CALL    right_arrow     ; move over one character to the right
        JB      move_to_end     ; keep going if not at end

error_return:
        RET


;*********************************************************************************** Control home key
cntrl_home:
        PUSH    SI              ; Save the pointer into the input buffer
        CALL    home_key        ; Move to start of line
        POP     SI              ; Restore pointer
        MOV     CX,DI           ; Set CX to character count in string and remove the
        SUB     CX,SI           ;    characters from start of line to current position from count.
        XOR     DI,DI           ; Clear out the DI register
        PUSH    DI              ; Save it.                                                               ** get rid of this **
        PUSH    CX              ;   and the new count of characters.
        JCXZ    after_drop_down ; If the new count of characters is zero then nothing else to do.

drop_text_down:
        MOV     AL,[BX+SI]      ; Get the current character
        INC     SI              ; Advance source pointer to next character
        MOV     [BX+DI],AL      ; Store it down into the next destination available
        INC     DI              ; Increment the destination pointer
        LOOP    drop_text_down  ;    and continue for the count

after_drop_down:
        POP     DI                    ; Restore DI
        POP     SI                    ;    and SI                                                             ** change this to xor SI,SI **
        JMP     note_shorter_change   ; Now go redisplay line on screen


;*********************************************************************************** Control end key
cntrl_end:
        OR      BP,0002H                        ; Turn on the change to line flag
        MOV     CX,CS:WORD PTR [inline_mod3+1]  ; Get the screen position of the last character in the screen

blank_to_end:
        CMP     CX,ES:[cursor_posn]      ; Is the current screen position at the end of line?
        JBE     after_blanking           ; If so then jump
        CALL    display_blank            ; Display a blank
        JMP     SHORT blank_to_end       ; and continue until end of line position on screen is reached

after_blanking:
        MOV     DI,SI                    ; The new line length is current offset in the line
        JMP     place_cursor             ; and now place the cursor on the screen


;*********************************************************************************** Control right arrow
cntrl_right_arrow:                       ; Move right to start of next word
        CALL    right_arrow              ; Move right one character
        JNB     cra_ret                  ; If at the end then fall out of loop
        CALL    check_non_by_alpha       ; Check for non-alpha/alpha combination (return issued from subroutine
                                         ;    if the condition is satisfied)
        JMP     SHORT cntrl_right_arrow  ; continue the cycle

cra_ret:
        RET

check_non_by_alpha:
        MOV     AL,[BX+SI]       ; Get character
        CALL    check_alpha      ; See if this is an alphabetic character
        JB      cnba_ret         ; If not then we are finished
        MOV     AL,[BX+SI-01H]   ; Get previous character
        CALL    check_alpha      ; Is this an alpha?
        JNB     cnba_ret         ; If so then we are still not happy and must continue searching.
        POP     AX               ; Pop off the fake return address if this location points
                                 ;    to an alpha character and the previous one doesnt.
cnba_ret:
        RET

check_alpha:
        OR      AL, LOWER_CASE_MASK  ; Or in lower case bit
        CMP     AL, SMALLA           ; Is this the letter "a"?
        JB      cnba_ret             ; It is less than the letter "a" ... return
        CMP     AL, LEFT_CURLY_BRACE ; Is this the character "{"?  (one greater than "z")
        CMC                          ; Complement Carry flag so its on if < "{"
        RET

;*********************************************************************************** Right arrow
right_arrow:
        CMP     SI,DI                      ; Are we past the last character
        JNE     redisplay_char             ; If not then continue
        RET

redisplay_char:
        MOV     AL,[BX+SI]          ; Move the current character into AL
        INC     SI                  ; Bump the pointer #U8z]ge9^Z
into input buffer
        CALL    display_and_test    ; Redisplay that character
        STC                         ; Set the carry flag
        RET

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
L0474:  CALL    right_arrow                    ;\                             ;;
        JNB     L0482                          ; \                            ;;
        MOV     AL,07H                         ;  \ This code is not called.  ;;
        AND     AL, BYTE PTR ES:[cursor_posn]  ;  /                           ;;
        JNE     L0474                          ; /                            ;;
L0482:  RET                                    ;/                             ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


;*********************************************************************************** Control left arrow
cntrl_left_arrow:
        CALL    left_arrow               ; Move left one character
        JB      bt_ret                   ; Jump if we are at the end of the buffer
        CALL    check_non_by_alpha       ; See if we are at the start of an alph character string.
        JMP     SHORT cntrl_left_arrow   ; If not then loop (if we were then the return was issued from
                                         ;    check_non_by_alpha)

;*********************************************************************************** Backtab key
backtab:
        CALL    left_arrow    ; move left one character
        JB      bt_ret        ; If at the start of the line then quit
        MOV     AL,07H        ; set up the mask
        AND     AL,DL         ; check to see if we are on an 8 byte column.
        JNE     backtab       ; If not then continue left.

bt_ret:
        RET


;*********************************************************************************** Left Arrow
left_arrow:
        OR      SI,SI                      ; Are we at the start of the line
        STC                                ; Set the carry flag
        JE      cnba_ret                   ; If so then do nothing
        DEC     SI                         ; Move the input buffer pointer back one
        CALL    decrement_col_row          ; Adjust the col row positon
        CMP     BYTE PTR [BX+SI], TAB      ; Have we just run over a tab?
        JE      back_over_tab              ; If so then go expand it
        CMP     BYTE PTR [BX+SI], BLANK    ; Compare for printable character
        JNB     la_end                     ; If we have one then jump to final section
        CALL    decrement_col_row          ; Decrement col row one more time (for ^ character)
        JMP     SHORT la_end               ; Finish up
                                           ; Expand the tab character
back_over_tab:
        PUSH    SI                         ; Save the SI pointer into input buffer
        MOV     CX,SI                      ; Set the count to its value
        MOV     AL,CL                      ;    and also AL
        MOV     AH,07H                     ;
        JCXZ    no_prev_tabs               ; At start of line (no previous tab to align us)
                                           ; See if we can find another tab in front of us to
                                           ;    align us on screen (character after that tab
                                           ;    would be properly aligned on 8 byte boundary.)
align:
        DEC     SI                         ; Decrement the pointer into input buffer
        CMP     BYTE PTR [BX+SI], BLANK    ; Check for printable character
        JNB     align_end                  ; If found cycle in loop
        CMP     BYTE PTR [BX+SI], TAB      ; Have we succeded in finding another tab?
        JE      sub_prev_char_cnt          ; If so then we know we are aligned so jump
        DEC     AH                         ; No, this must be a control character diagraph (^x form)
                                           ;    so we need to subract an additional character from the
align_end:                                 ;    count of characters found so far.
        LOOP    align                      ; Go back for more

no_prev_tabs:                              ; Ok, we only get here if there were no previous
                                           ;    characters in input buffer or if there were no previous
                                           ;    tabs in the buffer
        SUB     AH,CS:[start_off]          ; Subtract out the screen bias position for location 0 of the
                                           ;    input buffer pointer.
sub_prev_char_cnt:
        SUB     AH,AL                      ; These two statements remove the count of all previous characters
        ADD     CL,AH                      ;    in the buffer (either to tab boundary or start of line).
                                           ;    Additional diagraph hats "^" have been previously subtracted
                                           ;    from AH.
        AND     CL,07H                     ; take modulo 8
        JE      end_jump_tab               ; Did this tab expand into only one blank (remember we've already
                                           ;    moved over one!), if so jump
jump_tab:
        CALL    decrement_col_row          ; Calculate new column and row on screen
        LOOP    jump_tab

end_jump_tab:
        POP     SI                         ; Restore input buffer pointer

la_end:
        CLC                                ; Clear the carry flag
        JMP     SHORT place_cursor         ; Go place the cursor on the screen
        NOP


;*********************************************************************************** Home key
home_key:                                  ; home key service begins here
        CALL    left_arrow                 ; move over one
        JB      pc_ret                     ; jump if back at start
        JMP     SHORT home_key             ; Not there yet, keep going


;*********************************************************************************** Backspace key
backspace_handling:                        ; backspace handling begins here
        CALL    left_arrow                 ; first just move over one character
        JB      pc_ret                     ; If we are already at the start of the line
                                           ;    then we neednt continue

;*********************************************************************************** Delete Key
del_key:                                   ; Delete key handling begins here
        OR      DI,DI                      ; Is the string length zero?
        JE      pc_ret                     ; If so go to end
        CMP     SI,DI                      ; Are we past the end of the string?
        JE      pc_ret                     ; If so go to end
        PUSH    SI                         ; Save the SI pointer to input buffer

shift_down:
        CMP     SI,DI                      ; Are we past the end:
        JE      after_shift_down           ; If so, finish up
        MOV     AL,[BX+SI+01H]             ; Get next character up
        MOV     [BX+SI],AL                 ; then shift it down into this slot
        INC     SI                         ; Increment the input buffer pointer
        JMP     SHORT shift_down           ;    and cycle

after_shift_down:
        POP     SI                         ; Restore the input text buffer pointer
        DEC     DI                         ; Decrement the length of the input buffer string

note_shorter_change:
        OR      BP,0003H                   ; Indicate that we have changed and potentially shortened the string.

redisplay_line:
        AND     BP,0FFF7H
        PUSH    SI                       ; Save the pointer into the input buffer

display_next_char:
        CMP     SI,DI                    ; Are we past the end of the string?
        JNB     after_display_char       ; If so dont display
        MOV     AL,[BX+SI]               ; Get the character from the input buffer
        CALL    display_and_test         ; send it to the display
        INC     SI                       ; update buffer pointer
        JMP     SHORT display_next_char  ; continue to end

after_display_char:
        CALL    set_cursor                      ; Set type of cursor, AX returns with current cursor location (end of line)
        TEST    BP,0001H                        ; Is the old line longer?
        JE      after_blank_pad                 ; If not then forget blanking the tail
        XCHG    AX,CS:WORD PTR [inline_mod3+1]  ; Put current cursor positon in end of line indicator and
                                                ;    save that value for blanking operation
        XCHG    AX,CX                           ; Put former end of line position in CX

add_blank_pad:
        CALL    display_blank            ; Display a blank
        CMP     CX,ES:[cursor_posn]      ; Is current cursor position now at end of line
        JNBE    add_blank_pad            ; If not, then continue blanking loop.

after_blank_pad:
        POP     SI

place_cursor:
        MOV     AH, SET_CURSOR_POSN      ; Load AH for Bios call
        PUSH    BX                       ; Save BX and CX registers
        PUSH    CX
        MOV     CS:[current_col],DL     ; Record current column position
        MOV     BH,00H
        INT     10H                     ; Call bios for service
        POP     CX                      ; Restore registers
        POP     BX

pc_ret:
        RET


;*********************************************************************************** Up Arrow
up_arrow:                               ; Up arrow service starts here
        STD                             ; Set direction flag to decrement

;*********************************************************************************** Down Arrow
down_arrow:                             ; Down arrow service starts here
        AND     BP,0FFF7H
        CALL    home_key                ; Go to beginning of line
        CALL    cntrl_end               ; Delete to end of line

da1:
        PUSH    ES                      ; Save ES register
        PUSH    DS                      ; Set ES to DS
        POP     ES
        PUSH    CS                      ; Set DS to CS
        POP     DS
        MOV     SI,DS:[last_entry]      ; Get pointer to first byte of current string in
                                        ;    input buffer (from text buffer)
        LODSB                           ; Obtain the character
        LEA     DI,[BX-01H]             ; Load DI with the offset of the length character
                                        ;    of the input buffer
        MOV     CX, TEXT_BUFFER_SIZE    ; Set counter to look at each location in the text buffer

search_for_len_byte:
        CALL    get_char                ; Get a character from the text holding buffer
        TEST    AL,  LENGTH_BYTE_MASK   ; Is it a length byte?
        LOOPZ   search_for_len_byte     ; Nope, go back and try again
        CLD                             ; Yep, clear the direction flag
        JNE     found_a_len_byte        ; Jump if we found a length byte
        PUSH    ES                      ; Restore DS
        POP     DS
        POP     ES                      ; Restore ES
        JMP     restart_input

found_a_len_byte:
        AND     BP,0FFF1H                         ; Indicate new line from holding buffer, and no changes made to it.
        CALL    get_char                          ; Get a dummy character to readjust the SI pointer
        TEST    BYTE PTR [SI],  LENGTH_BYTE_MASK  ; Is next location a length byte
        JNE     recover_string                    ; If so (then down arrow issued) jump to recover string
        DEC     SI                                ; No, an up arrow was issued and we need to back SI down two bytes to
                                                  ;   set up for next get_char to be the length byte.
        CALL    swap_and_get_tp                   ; Back a-one
        DEC     SI
        CALL    swap_and_get_tp                   ; and a-two

recover_string:
        MOV     DS:[last_entry],SI       ; Load the address of the last accessed buffer string
        CALL    get_char                 ; Get the length character from holding buffer
        AND     AL, LENGTH_OFF_MASK      ; Mask off the length byte identifier
        MOV     AH, BYTE PTR ES:[DI-01H] ; Place Max buffer size in AH
        CMP     AL,AH                    ; Is text string smaller than max buffer size?
        JB      continue_recovery        ; If so then continue recovery
        MOV     AL,AH                    ; Uh-oh, take the max buffer size as the count of chars to restore

continue_recovery:
        STOSB                           ; Save the length count
        CBW                             ; Get rid of high portion of AX
        XCHG    AX,CX                   ; Place the count in CX
        PUSH    CX                      ;    and save it for later

load_chr_and_display:
        CALL    get_char                ; Get a character from the holding buffer
        STOSB                           ; Store this character in the input buffer
        CALL    display_and_test        ; Display this character
        LOOP    load_chr_and_display    ; Continue until all characters are done
        POP     DI                      ; Place the count of the number of characters in the
                                        ;    string into DI
        MOV     SI,DI                   ; Require the current pointer to be just past the end
        PUSH    ES                      ; Restore DS
        POP     DS
        POP     ES                      ; Restore ES

lcad_ret:
        RET

;*********************************************************************************** Control Page Down
cntrl_page_down:
        TEST    BP,0006H             ; Are we on the original line or have we made mods
        JNE     lcad_ret             ; If so then do nothing
        PUSH    DS                   ; Save some registers
        PUSH    ES
        PUSH    BX
        CALL    home_key             ; Move to start of line
        CALL    cntrl_end            ; Delete to the end of the line
        PUSH    CS                   ; Set ES register to CS                                                ** change to mov **
        POP     ES
        PUSH    CS                   ; Set DS register to CS
        POP     DS
        MOV     DI,DS:[last_entry]   ; Get address of last string accessed in holding buffer
        PUSH    DI                   ; Save it.
        MOV     SI,DI                ; Point the source index to it.

skip:
        CALL    get_char             ; Get a character from the text buffer
        CMP     AL, CR               ; Is it a carriage return?
        JNE     skip                 ; If n~r~_ot keep going

move_down:
        CMP     SI,DS:[next_entry]   ; Are we at the next available location in buffer
        JE      pad_crs              ; If so then break out of loop
        CALL    get_char             ; Get this character
        CALL    save_char            ;    and move it down in the holding buffer.
        JMP     SHORT move_down      ; Continue the loop.

pad_crs:
        MOV     AL, CR               ; Load AL with a carriage return
        MOV     [DI],AL              ; and into the buffer
        MOV     BX,DI                ; Now reset the base pointer one beyond last string in holding buffer.
        XCHG    BX,DS:[next_entry]   ; Put the old value in BX and the new value in place
        POP     SI                   ; Restore the pointer to last string accessed

continue_pad_cr:
        CMP     BX,DI                   ; Are we at the old next_available slot yet?
        JE      after_pad_cr            ; If yes the break out
        CALL    save_char               ; No, save the carriage return
        JMP     SHORT continue_pad_cr   ; Keep going

after_pad_cr:
        DEC     SI                      ; Point to just before this entry (so Down arrow will pick it up)
        MOV     DS:[last_entry],SI      ; Save it as last accessed text entry
        POP     BX                      ; Restore registers.
        POP     ES
        POP     DS
        JMP     da1                     ; Go perform a down arrow operation

;*********************************************************************************** Carriage Return
cr_key:
        AND     BYTE PTR ES:[kbd_flag], INSERT_OFF_MASK  ; Turn off insert mode
        CALL    set_cursor               ; Change the cursor on the screen
        POP     AX                       ; Pop the fake return address off the stack (so we really return)
        CALL    move_to_end              ; Move the cursor to the end of the line
        MOV     AL, CR                   ; Move a CR into AL
        CALL    display_one_char         ; Display it
        MOV     [BX+DI],AL               ; Add the CR to the input buffer
        MOV     AX,DI                    ; Move the length into AX
        MOV     [BX-01H],AL              ; Now move it into the length byte of the input buffer
        MOV     SI,BX                    ; Point the Source index to the input buffer
        CMP     AL,02H                   ; Are there at least two characters?                         ** remove this? **
        JBE     crk_ret                  ; If not then just forget the save
        PUSH    CS                       ; Set ES to value in CS
        POP     ES
        INC     WORD PTR CS:[last_entry] ; Bump the pointer to the strings location in the text buffer
        TEST    BP,0002H                 ; Have changes been made to this line?
        JE      crk_ret                  ; If not then we are through
        MOV     DI,CS:[next_entry]       ; Point the destination to the next available slot
        OR      AL,  LENGTH_BYTE_MASK    ; Add in the length byte bit mask

save_string:
        CALL    save_char                ; Add it to the holding buffer
        CMP     AL, CR                   ; Is this a carriage return?
        JE      after_save_string        ; If so, break out of loop
        LODSB                            ; Get the next character from the input buffer
        JMP     SHORT save_string

after_save_string:
        MOV     CS:[next_entry],DI       ; Save the new pointer to the text holding buffer

omit_partial_string:
        CMP     CS:[DI],AL                 ; Is it a carriage return?
        JE      after_omit_partial         ; If so we are finished
        CALL    save_char                  ; No, that means there is a partial string here
        JMP     SHORT omit_partial_string  ;    so fill with CRs until next CR is found

after_omit_partial:
        MOV     CS:[last_entry],DI

crk_ret:
        RET

get_char:                        ; Obtain a character from the text holding buffer
        CALL    swap_and_get_tp  ; First we must reverse SI and DI pointers
        LODS    CS:[SI]          ; Load the character from the text holding buffer into AL

swap_and_get_tp:                 ; Reverse SI and DI pointers because
        XCHG    SI,DI            ;    get_text_pointer assumes that DI indexes
        CALL    get_text_pointer ;    into the text holding buffer and not SI
        XCHG    SI,DI            ; Verify legal pointer into holding buffer
        RET

save_char:                        ; Add a character to the text holding buffer
        CALL    get_text_pointer  ; Verify correctness of pointer
        STOSB                     ; Move the character in AL to the text holding buffer

get_text_pointer:                   ; Obtain a legal pointer into the text holding buffer
        CMP     DI,CS:[buffer_bot]  ; Is the current pointer too small?
        JNB     gtp1                ; If not, then continue
        MOV     DI,CS:[buffer_top]  ; Yes, set to upper limit
        DEC     DI                  ;    and decrement one

gtp1:
        CMP     DI,CS:[buffer_top]  ; Is the current pointer too big?
        JB      gtp_ret             ; If not jump to end
        MOV     DI,CS:[buffer_bot]  ; Yes, set to lower limit

gtp_ret:
        RET

;*********************************************************************************** Control Page Up
cntrl_page_up:                         ; Control Page Up service begins here
        CALL    home_key               ; Go to start of line
        CALL    cntrl_end              ; And delete forward
        PUSH    DS                     ; Save DS
        MOV     AX,CS                  ; Set DS and ES to value in CS
        MOV     DS,AX
        MOV     ES,AX
        MOV     DI,DS:[buffer_bot]     ; Get base address of text buffer
        MOV     DS:[last_entry],DI     ; Set current pointer into text buffer to base
        MOV     DS:[next_entry],DI     ; Set next new pointer into text buffer to base
        MOV     CX, TEXT_BUFFER_SIZE   ; Set count to size of text holding buffer
        MOV     AL, CR                 ; Set AL with CR and fill holding buffer
        repz STOSB                     ;    with carriage returns
        POP     DS                     ; Restore DS
        JMP     restart_input

; Data area
start_off    db      0h
current_col  db      0h
last_entry   dw      TEXT_BUFFER_START
next_entry   dw      TEXT_BUFFER_START
buffer_bot   dw      TEXT_BUFFER_START
buffer_top   dw      TEXT_BUFFER_END
aux_last     dw      AUX_BUFFER_START
aux_next     dw      AUX_BUFFER_START
aux_bot      dw      AUX_BUFFER_START
aux_top      dw      AUX_BUFFER_END

initialize:

DOSED   ENDP
CSEG    ENDS
        END  DOSED
```
{% endraw %}

## DOSERROR.DOC

{% raw %}
```
;	*****************************************************************
;	* DOS Error Return Codes (DOS 2.00 manual, appendix D, page 14) *
;	*****************************************************************
;
invalid_func_num	EQU	1
file_not_found		EQU	2
path_not_found		EQU	3
no_handles_left 	EQU	4
access_denied		EQU	5
invalid_handle		EQU	6
mem_ctrl_blks_destroyed EQU	7
insufficient_mem	EQU	8
invalid_mem_blk_addr	EQU	9
invalid_environment	EQU	10
invalid_format		EQU	11
invalid_access_code	EQU	12
invalid_data		EQU	13
invalid_drive		EQU	14
rmdir_on_current_dir	EQU	15
not_same_device 	EQU	16
no_more_files		EQU	17
;
;

```
{% endraw %}

## DSK.ASM

{% raw %}
```
PAGE 60,132 ;
TITLE BASIC SUBROUTINE : DSK(A,B)
;------------------------------------------------------
;
; Returns the number of free sectors on a disk.
; Called form BASIC. Used with a PC-TALK patch.
;
;------------------------------------------------------

.RADIX 16
	;BASIC machine lang. subroutine: CALL DSK(A,B)
	;A=Drive to check- 0,1,2 or 3.	0=default drv, 1=A:, etc.
	;B=# of free sectors (returned).
	;Jack Wright  Nov 1983
CSEG	SEGMENT PARA PUBLIC 'CODE'
	ASSUME CS:CSEG
	PUBLIC DSK
	;DS=ES=SS=default DEF SEG (BASIC's data segment)
	;All seg. regs. & SP must be saved & restored.
	;BIOS interrupts preserve all seg. regs. & BX,CX,DX.
	;DOS 2.0
	ORG	100
DSK	PROC	FAR
	PUSH	BP
	MOV	BP,SP
	MOV	SI,[BP+08]	;Addr. of arg. A->SI.
	MOV	DX,[SI] 	;A->DX (A=drive # to check)
	CLI			;Disable maskable interrupts
	MOV	AX,CS
	MOV	SS,AX		;Set up new stack for INT 21 s
	MOV	SP,100
	STI
	MOV	AH,36		;DL=drive to check
	INT	21		;Returns AX=# of sectors/alloc. unit,
	MUL	BX		;BX=# of avail. alloc. units
				;after MUL, DX,AX=no. of avail. sectors
	CLI
	MOV	BX,ES		;SS was saved in ES
	MOV	SS,BX
	MOV	SP,BP		;SP was saved in BP
	STI
	;Must restore SS (above) before checking [BP+06] (below):
	MOV	DI,[BP+06]	;Point DI to B
	MOV	[DI],AX 	;Transfer AX to last arg. (B)
EXIT:	POP	BP
	RET	4
DSK	ENDP
CSEG	ENDS
	END	DSK ;
```
{% endraw %}

## FILES309.TXT

{% raw %}
```
Disk No:  309
Program Title:  ASSEMBLY UTILITIES No 3
PC-SIG version: 1.1

The programs on this disk are Assembly language programs relating
specifically to the IBM PC.  Routines include sound effects generator, a
text editor, space left on disk and how many sectors are free.  Password
protection is also included.

Usage:  Assembly language programmers

Special Requirements:  An Assembler.

How to Start:  Type GO (press enter).

Suggested Registration:  Various amounts, consult program documentation.

File Descriptions:

ASM      TXT  2 tips from Boca Raton.
BEEP     ASM  Sound effect generator.
CLEAR    ASM  Sample clear screen routine from CHASM.
CLOCK    ASM  Print date and time on screen.
CLOCK    DOC  Documentation for CLOCK.
CO       DOC  Documentation for COENDP and COPRNT.
COENDP   ASM  Part of program to list disk contents.
COPRNT   ASM  Part of program to list disk contents.
DISASM   BAS  A BASIC program that disassembles assembly programs.
DISKDIRL ASM  Part of program to list disk contents.
DISPTEXT ASM  Displays a line on screen without BIOS.
DOS-EDIT ASM  Assembly language text editor.
DOSERROR DOC  Lists error return codes.
DSK      ASM  Returns the number of free sectors on a disk.
FREE     ASM  Shows available free space on a disk.
FREE     DOC  Documentation for FREE.
GETSP    ASM  Lists free space on disk.
INIT     ASM  Assembly Source Code..
INITMEM  ASM  Initializes memory between 544k and 576k.
LIB      EXE  Sub-program.
LIST80   ASM  Lists the first 80 characters in a line of ASCII text.
MEMDRV   ASM  Faster bootup and use ALL of your available memory.
MEMDRV   DOC  Documents MEMDRV.
MORERAM  ASM  Use all of available RAM.
NOLF     ASM  Deletes extra linefeeds from some printer files.
OBJSNOOP COM  Displays label references in object files.
OPCODE   DOC  Used by DISASM.BAS.
OPCODE   TXT  Used by DISASM.BAS.
PAGE     ASM  Demonstrates multiple screen pages.
PARTBIOS LIS  Partial listing of BIOS low memory.
PASSWORD ASM  Password protection of system.
PRTPATH  ASM  Prints current directory path.
PUT_DEC  ASM  Puts decimal point in ASCII string.
PUT_DEC  OBJ  Object code for PUT_DEC.
ROMBIOS  ASM  ROM BIOS information.
SCRN     ASM  A variable time screen saver.
SCRN     DOC  Documentation for SCRN.ASM.
SCROLL10 ASM  Tests DISPTEXT.
SKELETON ASM  Skeleton of a minimal Assembly language program.
SL       ASM  Tests program thst scrolls screen.
SPEDUPDK ASM  Changes some disk drive parameters.
TABS     ASM  Replaces blanks with tabs in ASCII text files.
TALK1    ASM  Dumb terminal for IBM PC.
TEXT     DOC  Documentation for TEXT.EXE.
TEXT     EXE  Several text conversion options.
UPDIR    ASM  Moves the user up one directory level.
UPPATCH  ASM  Patch of another program.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1986,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## FREE.ASM

{% raw %}
```
cseg	segment
	org 100h
	assume cs:cseg,ds:cseg
start	proc near
	call lfeed
	mov si,offset buff
	call parse
	cmp byte ptr [si],255
	jnz here
	mov ah,19h
	int 21h
	inc al
	mov ah,al
	mov al,0
	mov [si],ax
	mov byte ptr [si+2],255
here:	cmp byte ptr [si],0
	jnz leave
	mov dl,[si+1]
	inc si
	inc si
	call space
	cmp ah,1
	jz here
	mov dx,offset bytes
	mov ah,9
	int 21h
	jmp here
leave:	int 20h
space:	push si
	push dx
	add dl,64
	mov [drive],dl
	mov dx,offset message
	mov ah,9
	int 21h
	pop dx
	mov ah,36h
	int 21h
	cmp ax,0ffffh
	jnz conts
	mov dx,offset errmess
	mov ah,9
	int 21h
	mov ah,1
	jmp lvspa
conts:	mul bx
	mul cx
	mov si,offset buffer
	call condw
	call ascdw
	mov byte ptr [si+10],'$'
	mov cx,9
	call zapzer
	mov dx,si
here3:	mov ah,9
	int 21h
	mov ah,0
lvspa:	pop si
	ret
lfeed:	mov dx,offset lfee
	mov ah,9
	int 21h
	ret
start	endp

;CONVERT WORD TO DECIMAL

;Takes a number in AX and places the ascii value at DS:SI
;AX, BX, CX, and flags are messed up

conw	proc near
	mov cx,5
	mov bx,10
	add si,4
conaaa: mov dx,0
	div bx
	mov [si],dl
	dec si
	loop conaaa
	inc si
	ret
conw	endp

;CONVERT DOUBLEWORD TO DECIMAL

;Handles numbers 0-655,350,000 - pass it others and it INT 0s
;Takes a number in DX-AX and places the ascii value at DS:SI
;AX, BX, CX, DX, and flags are messed up

condw	proc near
	mov bx,10000
	div bx
	push dx
	call conw
	add si,4
	pop ax
	mov dl,[si]
	push dx
	call conw
	pop dx
	mov [si],dl
	sub si,4
	ret
condw	endp

;CONVERT DECIMAL WORD TO ASCII

;Takes number at DS:SI and leaves it in ASCII
;CX and flags messed up

ascw	proc near
	mov cx,5
ascaaa: add byte ptr [si],48
	inc si
	loop ascaaa
	sub si,5
	ret
ascw	endp

;CONVERT DECIMAL DOUBLEWORD TO ASCII

;Takes number at DS:SI and leaves it in ASCII
;CX, DX, and flags messed up

ascdw	proc near
	call ascw
	add si,4
	mov dl,[si]
	call ascw
	mov [si],dl
	sub si,4
	ret
ascdw	endp

;ZAP LEADING ZEROS IN A STRING

;Zaps leading zeros in a string of length CX at address DS:SI
;Returns with SI pointing to first nonzero byte
;CX and flags messed up

zapzer	proc near
	cmp byte ptr [si],48
	jnz zapaaa
	mov byte ptr [si],32
	inc si
	loop zapzer
zapaaa: ret
zapzer	endp

;PARSE COMMAND LINE

;Places parsed list at DS:SI - format
; 0/#		     Drive number #
; 1/#/filespec.ext   Filename of length #
; 2/#/parameter      /parameter of length #
; 255		     End of list
;everthing but SI, BP, segment registers, and stack messed up

parse	proc near
	push si
	mov di,80h
	mov cl,[di]
	inc di
	cmp cl,0
	jnz paraaa
	jmp paraar
paraaa: mov al,[di]			;main loop - jump here to
	cmp al,32			;process new sections
	jnz paraab
	jmp paraal
paraab: cmp al,'/'    ;47
	jnz paraac
	jmp paraam
paraac: cmp al,64
	jle paraal
	mov bx,offset paraat		;either filename or drivespec
	mov [paraas],0
paraad: mov [bx],al			;main loop for moving characters
	inc bx				;to the temporary buffer with
	inc di				;either filename or drivespec
	dec cl
	jz paraaf
paraae: mov al,[di]
	inc di
	dec cl
	cmp al,32
	jnz paraah
paraaf: cmp byte ptr [paraas],1 	;end of current string by end of
	jz paraak			;buffer or delimeter
	mov byte ptr [si],1
	mov dx,bx
	sub dx,offset paraat
	inc si
	mov [si],dl
	inc si
	mov bx,offset paraat
paraag: mov al,[bx]			;loop for moving filespec to return
	mov [si],al			;buffer
	inc si
	inc bx
	dec dl
	jnz paraag
	cmp cl,0
	jz paraar
	jmp paraaa
paraah: cmp al,':'                      ;check to see if char is a colon
	jnz paraai
	mov [paraas],1			;set colon=last character
	jmp paraaj
paraai: mov [paraas],0			;set colon<>last character
paraaj: mov [bx],al			;put in buffer
	inc bx
	cmp cl,0
	jz paraaf
	jmp paraae
paraak: mov byte ptr [si],0		;end of buffer, drivespec found
	inc si
	dec bx
	dec bx
	mov al,[bx]
	and al,95
	sub al,64
	mov byte ptr [si],al
	inc si
	cmp cl,0
	jz paraar
	jmp paraaa
paraal: inc di				;ignore character
	dec cl
	jz paraar
	jmp paraaa
paraam: inc di				;/parameter found
	dec cl
	jz paraao
	mov bx,offset paraat
paraan: mov al,[di]			;loop for placing characters
	cmp al,32			;into the temporary buffer
	jz paraao
	mov [bx],al
	inc di
	inc bx
	dec cl
	jnz paraan
paraao: mov byte ptr [si],2		;end of parameter
	inc si
	mov dx,bx
	sub dx,offset paraat
	mov [si],dl
	inc si
	cmp dl,0
	jz paraaq
	mov bx,offset paraat
paraap: mov al,[bx]			;move characters from temporary
	mov [si],al			;buffer
	inc si
	inc bx
	dec dl
	jnz paraap
paraaq: cmp cl,0			;jump back to normal routine
	jz paraar
	jmp paraaa
paraar: mov byte ptr [si],255		;end of buffer code
	pop si
	ret				;leave
paraas	db ?				;colon=last character?
paraat	db 128 dup(?)			;temporary storage area
parse	endp

buffer	db 10 dup(?)
buff	db 170 dup(?)
message db 'Drive '
drive	db ?,': $'
errmess db 'invalid',13,10,'$'
bytes	db 'bytes free',13,10,'$'
lfee	db 13,10,'$'
cseg	ends
	end start

;program by Alan Bishop - CIS 72405,647 Version 1.2

```
{% endraw %}

## FREE.DOC

{% raw %}
```

       FREE.COM is a small machine language routine that reports the free
    space on a given disk.  Without any parameters it displays the space on
    the default disk, and with parameters it displays the space on the
    disks specified.  A non-drivspec parameter will cause FREE to exit,
    ignoring the rest of the command line.

Examples:

A>free

Drive A: xxxxx bytes free

A>free a: b:

Drive A: xxxxx bytes free
Drive B: xxxxx bytes free

A>free a: b: c:

Drive A: xxxxx bytes free
Drive B: xxxxx bytes free
Drive C: invalid	    (unless you happen to have a drive c:)

A>free a: hi! b:

Drive A: xxxxx bytes free

A>free foobar


A>

       This routine is useful in checking the disk space on multiple drives
    or when you don't feel like sitting through a DIR or CHKDSK.  When put
    on a RAMDISK, this utility is very helpful as it will act almost as
    fast as an internal command.

       There are a few useful routines in the assembler listing such as
    convert doubleword to decimal and parse DOS command line.

    Please report any bugs to Alan Bishop - CIS 72405,647


```
{% endraw %}

## GETSP.ASM

{% raw %}
```
 ; GETSPACE
 ;
 ; THIS ROUTINE COMPUTES USUABLE SPACE
 ; AVAILABLE ON
 ; DISKETTE OR HARD DISK AND IS CALLED
 ; FROM BASIC
 ;
 ; WRITTEN BY HOWARD GLOSSER
 ;
CSEG                SEGMENT
GETSPACE            PROC FAR
          ASSUME    CS:CSEG
          PUSH      BP
          MOV       BP,SP
          MOV       BX,[BP]+6
          MOV       DI,2[BX]
          MOV       CX,8
          MOV       AL,' '
          CLD
          REP       STOSB
          MOV       BX,[BP+8] 
          MOV       SI,2[BX]
          MOV       AX,[SI]
          AND       AL,0DFH
          CMP       AL,41H
          JGE       CKVER
          JMP       EXITSPC
CKVER: 
          PUSH      AX
          MOV       AH,30H
          INT       21H
          XCHG      AL,AH
          CMP       AX,0200H
          JB        SYSDRV
          JMP       SPACE20
SYSDRV: 
          MOV       AH,19H
          INT       21H
          POP       DX
          XOR       DL,40H
          DEC       DL
          CMP       AL,DL
          JE        GETFAT
          PUSH      AX
          PUSH      DX
          MOV       AH,0EH
          INT       21H
          POP       CX
          POP       DX
          INC       CL
          CMP       CL,AL
          JBE       GETFAT
          JMP       EXITSPC
GETFAT: 
          PUSH      DX
          MOV       AH,1BH
          INT       21H
          POP       AX
          PUSH      DX
          XCHG      AL,DL
          MOV       AH,0EH
          INT       21H
          POP       DX
          MOV       DI,BX
          MOV       AL,BYTE PTR[DI]
          MOV       SI,CX
          CMP       AL,0FEH
          JE        SNGLSIDE
          SHL       SI,1
SNGLSIDE: 
          ADD       DI,3
          MOV       CX,DX
          XOR       AX,AX
          XOR       DX,DX
                                    ;WORD
          PUSH      AX
          PUSH      DX
SCANFAT: 
          MOV       AX,[DI]
          INC       DI
          AND       AX,0FFFH
          CMP       AX,00H
          JNE       NEXTENT
          CLC 
          POP       DX
          POP       AX
          ADD       AX,SI
          JNC       STRSPC1
          INC       DX
STRSPC1:
          PUSH      AX
          PUSH      DX
NEXTENT: 
          DEC       CX
          JCXZ      END1
          MOV       AX,[DI]
          ADD       DI,2
          PUSH      CX
          MOV       CL,4
          SHR       AX,CL
          POP       CX
          CMP       AX,00H
          JNE       NOTAVAIL
          CLC 
          POP       DX
          POP       AX
          ADD       AX,SI
          JNC       STRSPC2
          INC       DX
STRSPC2: 
          PUSH      AX
          PUSH      DX
NOTAVAIL: 
          LOOP      SCANFAT
END1: 
          MOV       AX,ES
          MOV       DS,AX
          JMP       ENDSPC
SPACE20: 
          POP       DX
          XOR       DL,40H
          MOV       AH,36H
          INT       21H
          CMP       AX,0FFFFH
          JE        EXITSPC
          XOR       DX,DX
          MUL       CX
          XCHG      BX,CX
          MUL       CX
          PUSH      AX
          PUSH      DX
ENDSPC: 
          MOV       BX,[BP]+6
          MOV       DI,2[BX]
          ADD       DI,7
          POP       DX
          POP       AX
HEXTODEC: 
          MOV       SI,10
          PUSH      AX
          MOV       AX,DX
          XOR       DX,DX
          DIV       SI
          POP       CX
          PUSH      AX
          MOV       AX,CX
          DIV       SI
          POP       SI
          OR        DL,30H
          MOV       BYTE PTR[DI],DL
          DEC       DI
          XCHG      DX,SI
          OR        AX,AX
          JNZ       HEXTODEC
EXITSPC: 
          POP       BP
          RET       4 
          RET 
GETSPACE            ENDP
CSEG                ENDS
END 
```
{% endraw %}

## INIT.ASM

{% raw %}
```
	page	,132

cseg	segment 'code'
	assume	cs:cseg
initmem proc	far
	push	ds	; Linkage.
	xor	ax,ax
	push	ax

	cld		; Set auto incr for string ops.
	mov	ax,40h
	mov	ds,ax
	mov	ax,ds:[72h]
	cmp	ax,1234h


	mov	cx,544/16*1024
	mov	es,cx		; ES = 544kb.
	mov	cx,32*1024	; Initialize 32kb.
	xor	di,di		; Offset into ES at which to start.
	rep	stosb		; Init memory.

	ret			; Return to caller.
initmem endp
cseg	ends
	end
```
{% endraw %}

## INITMEM.ASM

{% raw %}
```
	page	,132

;----------------------------------------------------------
;
; FUNCTION: This program initializes memory from
;	    544k to 576k.
;
; Author: Malcolm McCorquodale III
;	  3470 Locke Lane
;	  Houston, Texas 77027
;	  713 - 626 -4979
;
;----------------------------------------------------------
cseg	segment 'code'
	assume	cs:cseg
initmem proc	far
	push	ds	; Linkage.
	xor	ax,ax
	push	ax

	cld		; Set auto incr for string ops.
	mov	cx,544*1024/16
	mov	es,cx		; ES = 544kb.
	mov	cx,32*1024	; Initialize 32kb.
	xor	di,di		; Offset into ES at which to start.
	rep	stosb		; Init memory.

	ret			; Return to caller.
initmem endp
cseg	ends
	end
```
{% endraw %}

## LIST80.ASM

{% raw %}
```
	 PAGE	 60,132
	 TITLE	 LIST --- Replace TYPE and MORE commands
;==============================================================================
; Name:     LIST, display contents of an ASCII file.
; Syntax:
;	    LIST  <[d:][path]filename[.ext]>
; Input:
;	    An ASCII file of any size may be listed, however only the
;	    first 80 bytes of each record is displayed.
;
;	    After the 'More?' prompt, enter a CR to continue, or
;	    any other character to terminate.
; Output:
;	    Logical records (ending in LF and/or CR) are placed into
;	    the screen buffer.
; Notes:
;	    Written for the IBM PC by Vernon Buerg, November 1983,
;	    and is supplied for public domain use.
;
; Revised:  Robert S. Russell, Bootstrap Creations, Walnut Creek, Calif.
;	    December 3, 1983 to allow enough space in buffer for filename
;	    so that a path may also be specified.  Also removed a bug which
;	    caused the system to lock if a carriage return is entered in
;	    response to the filename prompt.
;
;==============================================================================
;
STACK	 SEGMENT PARA STACK 'STACK'
	 DB	 128 DUP (0)
STACK	 ENDS
;
DATA	 SEGMENT PUBLIC PARA 'DATA'
ASKFILE  DB	 13,10,'Enter [d:][path]filename[.ext]:$'             ;RSR
CLEAR	 DB	 27,'[2J$'
PROMPT	 DB	 27,'[25;1H','More?$'
EOFMSG	 DB	 27,'[25;1HEnd-of-file$'
CODE2	 DB	 13,10,'File not found$'                              ;RSR
CODE4	 DB	 13,10,'Too many open files$'                         ;RSR
KEYIN	 DB	 0	      ;keyboard buffer size
KEYOUT	 DB	 0	      ;keyboard length read
FILENAME DB	 45 DUP (0)   ;drive:\path\filename.ext 	      ;RSR
HANDLE	 DW	 0	      ;file handle from open
COL	 DW	 1	      ;current display column
ROW	 DW	 2	      ;current display row
INDEX	 DW	 0	      ;offset in buffer to record
;
OPENMSG  DB	 13,10,'Open code: '                                  ;RSR
OPENCODE DW	 '00'
	 DB	 '  $'
RECLEN	 DW	 0	      ;length of current record
RECADDR  DW	 0	      ;addr of i/o buffer
;
SWITCH1  DB	 0
EOR	 EQU	 1	      ;end-of-record
SWITCH2  DB	 0
NODATA	 EQU	 2	      ;null record
NUMLF	 DB	 0	      ;line feed count
NUMCR	 DB	 0	      ;C/R count
WORK	 DB	 256 DUP (?)  ;current logical record
DATA	 ENDS
;
ZBUFFER  SEGMENT PARA PUBLIC 'BUFFER'
RECORDS  DB	 65535 DUP (?)
ZBUFFER  ENDS
;
BIOS	 SEGMENT AT 40H       ;set up labels to determine
	 ORG	 10H	      ;color or monochrome card
EQFLAG	 LABEL	 WORD
	 ORG	 4AH	      ;40 or 80 column display
NCLMS	 LABEL	 WORD
	 ORG	 63H
A6845	 LABEL	 WORD	      ;points to video card ports
BIOS	 ENDS
;
	 PAGE
CSEG	 SEGMENT PARA PUBLIC 'CODE'
	 ASSUME  CS:CSEG,DS:DATA,SS:STACK,ES:ZBUFFER
LIST	 PROC	 FAR
	 PUSH	 DS	      ;save for linkage
	 XOR	 AX,AX	      ;clear for return
	 PUSH	 AX	      ;put in stack
;
	 MOV	 AX,DATA      ;Addr of work areas
	 MOV	 DS,AX	      ;Set data segment reg
;
	 PUSH	 DS	      ;Save DS
	 XOR	 CX,CX	      ;clear hi-byte
	 MOV	 CL,BYTE PTR ES:[80H]  ;Length of command parm
	 DEC	 CL	      ;For ending CR
	 CMP	 CL,0	      ;Any parm string?
	 JLE	 GETNAME      ;No, ask for it
;
	 MOV	 SI,82H       ;Offset to command parm string
	 MOV	 DI,OFFSET FILENAME
	 MOV	 AX,DS	      ;Swap DS/ES
	 MOV	 BX,ES
	 MOV	 DS,BX	      ;Copy command string
	 MOV	 ES,AX
	 REP	 MOVSB
	 POP	 DS	      ;Restore DS
	 JMP	 OPEN
	 PAGE
;  No filename supplied with command
;
GETNAME: POP	 DS
RETRYNAME:								;RSR
	 MOV	 DX,OFFSET ASKFILE    ;Prompt for file name
	 MOV	 AH,9
	 INT	 21H
	 MOV	 AH,0AH       ;Buffered kybd input DOS req
	 MOV	 DX,OFFSET KEYIN
	 MOV	 KEYIN,44     ;Size of buffer				;RSR
	 INT	 21H
;
	 XOR	 BX,BX
	 MOV	 BL,KEYOUT    ;Number of chars read
	 CMP	 BL,0
	 JE	 RETRYNAME						;RSR
	 MOV	 FILENAME[BX],0 ;overlay CR
	 PAGE
;
OPEN:	 MOV	 DX,OFFSET FILENAME	 ;file to open
	 MOV	 AX,0	      ;for read only				;RSR
	 MOV	 AH,3DH       ;open a file
	 INT	 21H
	 MOV	 HANDLE,AX    ;save file handle
;
	 JNC	 INIT	      ;if OPEN okay
	 MOV	 DX,OFFSET CODE2
	 CMP	 AL,2	      ;is it 'file not found'?
	 JE	 ERROR
	 MOV	 DX,OFFSET CODE4					;RSR
	 CMP	 AL,4	      ;is it 'too many open files'?             ;RSR
	 JE	 ERROR
;
	 AAM
	 XCHG	 AL,AH
	 OR	 OPENCODE,AX
	 MOV	 DX,OFFSET OPENMSG
ERROR:	 MOV	 AH,9
	 INT	 21H	      ;say OPEN FAILED
	 RET
	 PAGE
;
; Initialize buffer to EOF stoppers
;
INIT:	 MOV	 BX,ZBUFFER   ;addr of I/O area
	 MOV	 RECADDR,BX   ;save it
	 MOV	 DX,OFFSET CLEAR
	 MOV	 AH,9
	 INT	 21H	      ;to clear screen
;
READAGN: MOV	 CX,65535     ;number of bytes to clear
	 MOV	 ES,RECADDR
;
STOPPER: MOV	 DI,CX
	 MOV	 ES:BYTE PTR[DI],1AH	;fill with stoppers
	 LOOP	 STOPPER
	 PAGE
;
; Read a block	(64K)
;
	 MOV	 BX,HANDLE	 ;get file handle from open
	 MOV	 DX,RECADDR	 ;offset to record buffer
	 PUSH	 DS
	 MOV	 DS,DX		 ;set data segment ptr
	 SUB	 DX,DX		 ; with zero offset
	 MOV	 CX,65534	 ;number of bytes to read
	 MOV	 AH,3FH 	 ;read from a file
	 INT	 21H
;
	 POP	 DS
;	 MOV	 BX,AX		 ;Save length read
	 MOV	 SWITCH1,0	 ;reset EOR flag
	 MOV	 INDEX,0	 ;offset into buffer
	 CMP	 AX,0		 ;Any bytes read?
	 JNE	 READ		 ;Yes, list the buffer
	 JMP	 CLOSE		 ;No, all done
;
; Set next row and column for next display line
;
READ:	 MOV	 CX,RECLEN	 ;set column and row
	 INC	 CX		 ; for next record
	 MOV	 AX,ROW
	 DEC	 AX
	 CMP	 NUMLF,0	 ;record ended in LF?
	 JE	 SET		 ;no, have col/row
	 INC	 AX		 ;yes, row stays where it is
	 MOV	 CX,1		 ; and in column 1
;
SET:	 MOV	 ROW,AX 	 ;set row
	 MOV	 COL,CX 	 ;set column
;
; Extract next logical record from display
;
GETNEXT: CALL	 SCAN_BUF	 ;Scan for logical record
	 MOV	 CX,RECLEN	 ;Record size
	 SUB	 CL,NUMLF	 ;for LF
	 SUB	 CL,NUMCR	 ;for CR
	 MOV	 RECLEN,CX
	 CMP	 CX,0		 ;blank line?
	 JE	 GETROW 	 ;yes, increment row only
;
	 LEA	 SI,WORK	 ;addr of record
	 MOV	 AX,ROW 	 ;destination row
	 CALL	 PRINT		 ;put into screen buffer
;
GETROW:  MOV	 AX,ROW 	 ;get row again
	 INC	 AX		 ;bump to next row
	 MOV	 ROW,AX 	 ;save row number
	 CMP	 AL,25		 ;exceeded screen?
	 JNE	 TESTEOR	 ;no, read next record
;
	 MOV	 DX,OFFSET PROMPT
	 MOV	 AH,9
	 INT	 21h		 ;say 'More?'
;
; Wait for keyboard input
;
	 MOV	 AH,12		 ;clear console
	 MOV	 AL,7		 ;and get a char
	 INT	 21H		 ;pause for enter
	 CMP	 AL,0DH 	 ;want to quit?
	 JNE	 CLOSE		 ;yes, clean up
;
	 MOV	 ROW,2		 ;no, reset to first row
	 MOV	 AX,ROW
;
	 MOV	 DX,OFFSET CLEAR
	 MOV	 AH,9
	 INT	 21H		 ;to clear screen
;
	 LEA	 SI,WORK	 ;addr of record
	 MOV	 AX,1		 ;put last line on top
	 MOV	 CX,RECLEN
	 CALL	 PRINT		 ;put into screen buffer
;
TESTEOR: TEST	 SWITCH1,EOR	 ;end-of-records?
	 JZ	 READ
	 JMP	 READAGN	 ;yes, read next block
;
CLOSE:	 MOV	 BX,HANDLE	 ;file handle from open
	 MOV	 AH,3EH 	 ;close a file handle
	 INT	 21H
;
	 MOV	 DX,OFFSET EOFMSG
	 MOV	 AH,9
	 INT	 21H		 ;to say done
;
	 RET
	 PAGE
SCAN_BUF PROC	 NEAR
;
; Function: Scan the buffer for special characters and copy wanted
;	 data to field WORK. A logical record ends in an LF and/or CR.
;
; Input: ZBUFFER (RECORDS) contains a block of data from the file
;	 INDEX is the current offset to a logical record
; Output:
;	 WORK contains a logical record
;	 NUMLF contains number of line feeds (ignored)
;	 NUMCR contains number of carriage returns (ignored)
;	 RECLEN contains length of logical record
; Notes: Tabs are replaced by blanks;
;	 lines beginning with hex-F are ignored
;
	 PUSH	 ES
	 PUSH	 CX
	 PUSH	 SI
	 PUSH	 DI
	 TEST	 SWITCH1,EOR
	 JZ	 SCAN1
	 JMP	 SCAN_END
;
SCAN1:	 XOR	 CX,CX
	 XOR	 DI,DI
	 AND	 SWITCH2,0FFH-NODATA
	 MOV	 NUMLF,0	 ;reset LF indicator
	 MOV	 NUMCR,0	 ;zero CR counter
	 MOV	 AX,ZBUFFER
	 MOV	 ES,AX		 ;set addr of I/O buffer segment
;
SCAN2:	 MOV	 SI,INDEX
	 MOV	 AL,RECORDS[SI]  ;Get a byte
	 CMP	 AL,1AH 	 ;End of buffer?
	 JNE	 SCAN3
	 MOV	 RECLEN,CX
	 OR	 SWITCH1,EOR	 ;Indicate end-of-records
	 JMP	 SCAN_END
;
SCAN3:	 CMP	 AL,9H		 ;Is it TAB?
	 JNE	 SCAN4
	 MOV	 AL,' '          ;Yes, replace with blank
;
SCAN4:	 MOV	 WORK[DI],AL	 ;Store character
	 INC	 DI		 ;Increment pointer
	 INC	 CX		 ;Increment counter
	 INC	 INDEX		 ;Increment counter
;
	 CMP	 AL,0DH 	 ;Is it a CR?
	 JNE	 SCAN5
	 INC	 NUMCR		 ;Yes, increment counter
SCAN5:	 CMP	 AL,' '
	 JE	 SCAN7
	 CMP	 AL,0AH 	 ;Is it line feed?
	 JNE	 SCAN6
	 INC	 NUMLF
	 JMP	 SCAN8
SCAN6:	 OR	 SWITCH2,NODATA  ;Non-space found
;
SCAN7:	 CMP	 CX,255 	 ;Record too big?
	 JE	 SCAN8		 ;Chop record at 255 bytes
	 JMP	 SCAN2
;
SCAN8:	 MOV	 RECLEN,CX
	 CMP	 WORK,0FH	 ;If record begins with "sun"
	 JNE	 SCAN9		 ; symbol, skip it
	 JMP	 SCAN1
;
SCAN9:	 TEST	 SWITCH2,NODATA  ;If nothing but spaces found,
	 JNZ	 SCAN_END	 ; read another record
	 JMP	 SCAN1
;
SCAN_END:
	 POP	 DI
	 POP	 SI
	 POP	 CX
	 POP	 ES
	 RET
;
SCAN_BUF ENDP
;
	 PAGE
	 ASSUME  CS:CSEG,DS:DATA,ES:NOTHING
PRINT	 PROC	 NEAR
	 PUSH	 ES
	 PUSH	 DI
	 PUSH	 DX
	 PUSH	 SI
;
	 MOV	 DI,COL 	 ;set column
	 DEC	 DI		 ;adjust for zero offset
	 DEC	 AX		 ;adjust row too
	 CMP	 CL,0		 ;null string?
	 JE	 EXIT		 ;if so,do nothing, Else,
;
	 MOV	 BX,BIOS	 ;get ready to determine card type
	 MOV	 ES,BX		 ;and number of columns
	 MUL	 ES:NCLMS	 ;AX = column * words per line
	 ADD	 DI,AX		 ;DI = words from start of screen
	 SHL	 DI,1		 ;adjust for attribute bytes
;
	 MOV	 DX,ES:A6845	 ;point to 6845 base port
	 ADD	 DX,6		 ;point to status port
;
;CX has the count of characters to write,
;SI points to the string data,
;DI points to a screen position
;
	 MOV	 AX,0B800H	 ;default to color card
	 MOV	 BX,ES:EQFLAG
	 AND	 BX,30H
	 CMP	 BX,30H 	 ;is it monochrome?
	 JNE	 CARDOK 	 ;no, go
	 MOV	 AX,0B000H	 ;yes, set for monochrome
CARDOK:  MOV	 ES,AX		 ;points ES to video
;
;  DS:SI => first character of string
;  ES:DI => screen memory to display it
;  CX	 => number of characters to display
;  DX	 => status port of video card
;
;-------- Wait for horzontal retrace
TESTLO:  IN	 AL,DX		 ;get status
	 TEST	 AL,1		 ;is it low?
	 JNZ	 TESTLO 	 ;no, keep checking
	 CLI			 ;turn off interrupts
TESTHI:  IN	 AL,DX		 ;get status
	 TEST	 AL,1		 ;is it high?
	 JZ	 TESTHI 	 ;no, keep checking
;-------- Okay to write to screen now (no 'hash')
	 MOVSB			 ;[DS:DI]->[ES:DI],DI++,SI++,CX--
	 INC	 DI		 ;skip the attribute byte
	 LOOP	 TESTLO 	 ;do till end of string
	 STI			 ;turn interrupts back on
;
EXIT:	 POP	 SI
	 POP	 DX
	 POP	 DI
	 POP	 ES
	 RET
;
PRINT	 ENDP
;
LIST	 ENDP
CSEG	 ENDS
;
	 END	 LIST
```
{% endraw %}

## MEMDRV.ASM

{% raw %}
```
title	ramdvr 01-01-84        [01-01-84]
;-------------------------------------------------------------------------------
; RAMDVR.SYS -- Modification to Dan O'Brien's excellent program by
;		Tom Perry, CIS 70455,751 or FORUM ][ 305/772-4444.
;
;		This modified version performs the same function described
;		below.	The only difference is that it runs as a "device
;		driver" on DOS 2.0 and up.  This means not only that it gets
;		control earlier and thus works faster, but also that it will
;		not cripple the system if you want to install a device that
;		takes a fair amount of memory.	For instance, I had a virtual
;		disk driver that uses 180K.  With switches set for 64K, it
;		could not be installed.  To get around this with MORRAM.COM,
;		you have to put logic in AUTOEXEC.BAT to switch between two
;		CONFIG.SYS files; it can be done (I did it for a while), but
;		it's messy and takes more disk space -- a LOT more if you're
;		working with a hard file with its large allocation unit.
;
;		To use this version, simply create a file on your boot disk
;		named CONFIG.SYS containing the line DEVICE=RAMDVR.SYS
;		and copy RAMDVR.SYS onto the boot disk.  If you already have
;		a CONFIG file, enter DEVICE=RAMDVR.SYS as its first line.
;		Set your switches for 64K, turn on the machine, and notice
;		the difference.  To learn how it works, read Dan's description
;		below.
;
;		There IS a penalty for doing it this way: Part of the program
;		remains permanently installed in the system as a device driver,
;		eating up a few bytes of precious RAM.	I have left enough to
;		keep the system from crashing if the device driver is driven
;		again (for instance, by a MODE RAMCHECK command).  More bytes
;		could be saved if you're willing to take that slight risk;
;		probably the minimum you'd need to keep is the four bytes
;		constituting the device driver chain at label "next_dev";
;		uncomment the indicated line if you want to try this.


; MORERAM.COM - by Daniel M. O'Brien (v 1.0) 21 Dec 1983
;
;	      - freely adapted from a PC-WORLD User-to-User column program
;		of the same name (object disassembled using ASMGEN) and from
;		a program shown in a DR. DOBBS Journal article
;		(16 bit Toolkit) called MEMSIZE.
;
; This program has two (or three) purposes.
;
;	1) Allow a PC to use more memory than is allowed via the motherboard
;	memory switches (544 K bytes for the 64K motherboard and 640 K bytes
;	for the newer 256K motherboard). And because of 1)...
;
;	2) Allow faster power-up sequence by setting the motherboard memory
;	switch settings to 64 K bytes installed.
;
;	And as long as we are in the neighborhood...
;
;	3) Patch the ROM BIOS data area to indicate that this PC has four
;	floppy diskettes installed (instead of the normal two). This is for
;	ram disk emulation programs that require the motherboard equipment
;	options switch to be set to include the number of ram disks.
;	This is most notably required by the AST RESEARCH ramdisk program
;	called SUPERDRV. This code is commented out. To use it you must
;	uncomment out the code and reassemble. Search for the string:
;
;			;stub***
;
; Using MORERAM.
;
;	First, copy MORERAM.COM to your boot device (floppy or fixed).
;	Next, create or edit your AUTOEXEC.BAT file found on your
;	boot device to include MORERAM as the **FIRST** program that
;	will be executed. This is important as results are not guaranteed
;	if MORERAM is not the first command executed at boot time.
;	Next, open the covers of your PC and set the memory switches
;	to indicate that your PC only has 64K.
;
;	Now try rebooting your PC using the Alt-Ctrl-Del sequence.
;
;	MORERAM will first display a hello banner and the amount of
;	memory DOS thinks your PC has (should be 64K). Next, MORERAM
;	will pause a second or two while it determines how much memory
;	your PC really has. (It also clears this memory in the process
;	to eliminate PARITY 2 errors later).
;	Once the physical memory limit is determined, MORERAM will display
;	that amount and then automatically re-boot. (Don't get excited,
;	this won't loop indefinitely, because...) The next time MORERAM
;	is again executed from your AUTOEXEC.BAT it will find that the amount
;	of memory DOS thinks you have will be the same as that installed, and
;	a reboot will be avoided!
;
; I use this program on my PC that has 576K (64K + 512K) worth of memory.
; Also, I have successfully tested it with 704K (64K + 512K + 128K) of memory,
; but this requires placing memory into the semi-forbidden zone (segment A000)
; designated by IBM as "reserved". But that's ok, as long as you don't install
; memory beyond this into the B000 segment where monochrome and graphics display
; memory live!
;
; Questions or comments should be left for me (DAN OBRIEN) on Gene Plantz'
; BBS in Chicago, IL (312-882-4227). I will attempt to fix bugs that may
; crop up, but I make no guarantees. You use this at your own risk (just like
; I do!). If you break something valuable, it's your own fault.
;
;-------------------------------------------------------------------------------


lf	equ	0ah
cr	equ	0dh
;
;initial values :	cs:ip	0000:0100
;			ss:sp	0000:ffff

s0000	segment
	assume ds:s0000, ss:s0000 ,cs:s0000 ,es:s0000
	org	$+0000h
;
;	device driver header and logic added 1-1-84 by Tom Perry.
;
next_dev	dd	-1
		dw	8000h	       ;char device
strategy	dw	dstrategy
interrupt	dw	dinterrupt
whatcall	db	'RAMCHECK'      ;name

dstrategy	proc	far

	mov	cs:rh_seg,es
	mov	cs:rh_off,bx		;save ptr to request header
	ret

dstrategy	endp

rh_off	dw	0
rh_seg	dw	0

dinterrupt	proc	far

	cld
	push	ds
	push	es
	push	ax
	push	bx
	push	cx
	push	dx
	push	di
	push	si

	mov	al,switch
	cmp	al,0ffh
	je	continue
	mov	al,0ffh
	mov	switch,al

	call	memdrvr

	mov	bx,rh_off
	mov	ax,rh_seg
	mov	es,ax		;pt to req hdr
	mov	ds,ax
	mov	ax,offset last_place
;*risk	mov	ax,offset strategy ;USE THIS LINE TO SAVE RAM AT SOME RISK!
	mov	14[bx],ax	;set ending address
	mov	ax,cs
	mov	16[bx],ax	; including segment
continue:
	mov	ax,0100h
	or	3[bx],ax	;set device status as DONE with NO ERROR

	pop	si
	pop	di
	pop	dx
	pop	cx
	pop	bx
	pop	ax
	pop	es
	pop	ds

	ret

switch	db	0,0,0		;one time switch & bug protection
last_place db	'LAST PLACE'

dinterrupt	endp


memdrvr proc	near

;	end of device driver modifications by Tom Perry
;	(except as noted below).

start:	jmp	begin

hello	db	"Device driver to use MORE RAM than switches (v 1.1) ",cr,lf
	db	"by Daniel M. O'Brien and Tom Perry (1 Jan 1984)",cr,lf,lf,'$'
inmem	db	" Current memory is $"
kbytes	db	" K bytes. $"
findmem db	cr,lf," Physical memory is $"
analyze db	" Analyzing & Clearing...$"
reboot	db	" Re-Booting...",cr,lf,'$'
done	db	cr,lf," Memory size is set correctly.",cr,lf,'$'

begin:
	mov	dx,offset hello 	; say hello
	mov	ah,9
	int	21h

	mov	dx,offset inmem 	; how much memory?
	mov	ah,9
	int	21h

; next 3 lines of code added 1-1-84 by Tom Perry for device driver environment.

	int	12h		; ask bios how much memory
	mov	cl,6
	shl	ax,cl		;shift left 6 times to look like PSP+2

;	mov	ax,ds:2 	; get top segment number from program prefix

	push	ds		; save ds for later

	push	ax		; save top segment number for later
	mov	cl,6		; convert to K bytes
	shr	ax,cl
	call	decout		; and display

	mov	dx,offset kbytes	; display "K bytes"
	mov	ah,9
	int	21h

	mov	dx,offset analyze	; display analyzing message
	mov	ah,9
	int	21h

	xor	ax,ax		; stop parity errors while we poke around
	out	0a0h,al

	pop	ax		; recover top segment number

loop:	mov	bx,0		; look into this 16 byte "segment"
;	cmp	ax,0a000h	; is ax = beginning of "reserved" addrs?
				; stop at display memory instead!
	cmp	ax,0b000h	; is ax = beginning of "reserved" addrs?
	je	ramend		; yes, so end of ram
	mov	ds,ax		; no, so use this as segment
	mov	[bx],ax 	; write contents of ax to ds:bx...
	mov	cx,[bx] 	;... and read it back to cx
	cmp	ax,cx		; does data read = data written?
	jne	ramend		; if it not, then ran out of ram!

	mov	cx,8		;    else - reset this 16 byte area
	mov	es,ax
	xor	ax,ax		;      reset means 0000h
	xor	di,di
	rep	stosw		;    to prevent parity errors when used

	mov	ax,ds		; copy ds to ax...
	inc	ax		;... increment it...
	jmp	loop		;... and loop

ramend:
	mov	bx,ax		; found real end of ram - save it

	mov	al,80h		; enable parity errors for the future
	out	0a0h,al

	mov	ax,bx		; convert segments to K bytes
	mov	cl,6
	shr	ax,cl

	mov	bx,40h		; point to bios data area
	mov	ds,bx
	mov	bx,13h		; and to memory size word in particular

	cmp	[bx],ax 	; same size?
	je	exit		; yes-then we must have done this before

	mov	[bx],ax 	; else - update and
	push	ax

; remove comments to patch equipment flag to indicate 4 floppies attached.
; especially useful for AST RESEARCH's SUPERDRV.

;stub** mov	bx,10h		; point to equipment flag
;stub** mov	ax,[bx] 	; get equipment flag
;stub** or	ax,00c0h	; set installed floppy count to 4
;stub** mov	[bx],ax 	; and restore to proper spot

	pop	ax		; get ds back but save ax on stack
	pop	ds
	push	ax

	mov	dx,offset findmem	; tell how much memory we found
	mov	ah,9
	int	21h

	pop	ax		; get K byte count
	call	decout

	mov	dx,offset kbytes
	mov	ah,9
	int	21h

	mov	dx,offset reboot	; tell them about reboot
	mov	ah,9
	int	21h

	int	19h		; re-boot

exit:
	pop	ds
	mov	dx,offset done
	mov	ah,9
	int	21h

; exit via return to caller instead of int 20h exit to DOS.
; changed 1-1-84 by Tom Perry for device driver environment.

	ret


; quick and probably dirty - display decimal in ax routine

decout:
	push	ax
	push	bx
	push	cx
	push	dx

	xor	cx,cx		;counter of digits
	mov	bx,10		;divide by 10 for conversion

decimal$loop:
	xor	dx,dx		;clear for divide
	div	bx		;get remainder and quotient
	add	dx,'00'         ;make remainder ascii
	push	dx		;save it
	inc	cx		;and count it
	or	ax,ax		;out of digits?
	jnz	decimal$loop	;no-loop on the decimal

decimal$out:
	pop	dx		;get digit
	mov	ah,2		;print digit
	int	21h
	loop	decimal$out	;and loop

	pop	dx
	pop	cx
	pop	bx
	pop	ax
	ret

memdrvr endp

s0000	ends

	end
```
{% endraw %}

## MEMDRV.DOC

{% raw %}
```

 #: 23905      Sec. 4 - Programming
Sb: #MORRAM
    01-Jan-84  22:00:54
Fm: Tom Perry  70455,751
To:  71445,1006 (X)

Hey, your program is neat!  I downloaded it yesterday (i.e., last year)
and installed it and it works fine.
	EXCEPT (of course) for one thing.  My CONFIG.SYS file installs
a memory disk program of size 180K.  When switches are set for 64K, RAM
runs out and the command interpreter never gets loaded and the AUTOEXEC
file never gets run so MORRAM gets no chance to fix things....
	So I put a front end on your code to make it into a device
driver.  That way it gets run earlier, too.  I put it first in my
CONFIG file and that saves even more time.  The only thing I had to
change in your code was your reference to the PSP+2, which of course is
not there at device-driver-install time; I made it a call to BIOS INT
12H instead and did the appropriate shifting.  Works fine.
	(The only puzzling thing is that with the MORRAM code installed
as a character device driver, the KEYSWAPPER program from
Vertex/Rickerdata hangs the system.  Strange!  I may make it a block
device, though I hate to use up a drive letter on it.....)
	If you don't object I'll put the device driver version up here
with appropriate credit to you + mods by me.  Okay by you?

 #: 23936      Sec. 4 - Programming
Sb: #23905-#MORRAM
    02-Jan-84  05:23:26
Fm: Wes Gray 71445,1006
To: Tom Perry  70455,751 (X)

Tom: Your changes sound good. However, please credit Dan O'Brien who is
the author. I only uploaded it here because it was a useful program. I
will pass along your copy to Dan.		      Wes
*** There is a reply:
	23941

 #: 23941      Sec. 4 - Programming
Sb: #23936-#MORRAM
    02-Jan-84  09:05:26
Fm: Tom Perry  70455,751
To: Wes Gray 71445,1006 (X)

Okay, Wes.  By the way, the problem I mentioned in parentheses
(concerning my Vertex/Rickerdata KEYSWAPPER program not working) had
nothing to do with MORRAM; the villain is BUF128, which changes several
interrupt vectors without regard for what they were before.
	I would like to put this program up on some other bulletin
boards I frequent.  I gather that is not a problem -- it seems to be
public domain, right?		     thanks, tom

*** There is a reply:
	24015

 #: 24015      Sec. 4 - Programming
Sb: #23941-MORRAM
    02-Jan-84  18:27:11
Fm: Wes Gray 71445,1006
To: Tom Perry  70455,751 (X)

Tom: It is public domain, and Dan appreciates people spreading it
around. 		 Wes


```
{% endraw %}

## MORERAM.ASM

{% raw %}
```
title	moreram 12-16-83	[12-16-83]
;-------------------------------------------------------------------------------
; MORERAM.COM - by Daniel M. O'Brien (v 1.0) 21 Dec 1983
;
;	      - freely adapted from a PC-WORLD User-to-User column program
;		of the same name (object disassembled using ASMGEN) and from
;		a program shown in a DR. DOBBS Journal article
;		(Socha's 16 bit Toolkit) called MEMSIZE.
;
; This program has two (or three) purposes.
;
;	1) Allow a PC to use more memory than is allowed via the motherboard
;	memory switches (544 K bytes for the 64K motherboard and 640 K bytes
;	for the newer 256K motherboard). And because of 1)...
;
;	2) Allow faster power-up sequence by setting the motherboard memory
;	switch settings to 64 K bytes installed.
;
;	And as long as we are in the neighborhood...
;
;	3) Patch the ROM BIOS data area to indicate that this PC has four
;	floppy diskettes installed (instead of the normal two). This is for
;	ram disk emulation programs that require the motherboard equipment
;	options switch to be set to include the number of ram disks.
;	This is most notably required by the AST RESEARCH ramdisk program
;	called SUPERDRV. This code is commented out. To use it you must
;	uncomment out the code and reassemble. Search for the string:
;
;			;stub***
;
; Using MORERAM.
;
;	First, copy MORERAM.COM to your boot device (floppy or fixed).
;	Next, create or edit your AUTOEXEC.BAT file found on your
;	boot device to include MORERAM as the **FIRST** program that
;	will be executed. This is important as results are not guaranteed
;	if MORERAM is not the first command executed at boot time.
;	Next, open the covers of your PC and set the memory switches
;	to indicate that your PC only has 64K.
;
;	Now try rebooting your PC using the Alt-Ctrl-Del sequence.
;
;	MORERAM will first display a hello banner and the amount of
;	memory DOS thinks your PC has (should be 64K). Next, MORERAM
;	will pause a second or two while it determines how much memory
;	your PC really has. (It also clears this memory in the process
;	to eliminate PARITY 2 errors later).
;	Once the physical memory limit is determined, MORERAM will display
;	that amount and then automatically re-boot. (Don't get excited,
;	this won't loop indefinitely, because...) The next time MORERAM
;	is again executed from your AUTOEXEC.BAT it will find that the amount
;	of memory DOS thinks you have will be the same as that installed, and
;	a reboot will be avoided!
;
; I use this program on my PC that has 576K (64K + 512K) worth of memory.
; Also, I have successfully tested it with 704K (64K + 512K + 128K) of memory,
; but this requires placing memory into the semi-forbidden zone (segment A000)
; designated by IBM as "reserved". But that's ok, as long as you don't install
; memory beyond this into the B000 segment where monochrome and graphics display
; memory live!
;
; Questions or comments should be left for me (DAN OBRIEN) on Gene Plantz'
; BBS in Chicago, IL (312-882-4227). I will attempt to fix bugs that may
; crop up, but I make no guarantees. You use this at your own risk (just like
; I do!). If you break something valuable, it's your own fault.
;
;-------------------------------------------------------------------------------


lf	equ	0ah
cr	equ	0dh
;
;initial values :	cs:ip	0000:0100
;			ss:sp	0000:ffff

s0000	segment
	assume ds:s0000, ss:s0000 ,cs:s0000 ,es:s0000
	org	$+0100h

start:	jmp	begin

hello	db	"MORE RAM than switches (v 1.0) "
	db	"by Daniel M. O'Brien (21 Dec 1983)",cr,lf,'$'
inmem	db	" Current memory is $"
kbytes	db	" K bytes. $"
findmem db	cr,lf," Physical memory is $"
analyze db	" Analyzing & Clearing...$"
reboot	db	" Re-Booting...",cr,lf,'$'
done	db	cr,lf," Memory size is set correctly.",cr,lf,'$'

begin:
	mov	dx,offset hello 	; say hello
	mov	ah,9
	int	21h

	mov	dx,offset inmem 	; how much memory?
	mov	ah,9
	int	21h

	mov	ax,ds:2 	; get top segment number from program prefix

	push	ds		; save ds for later

	push	ax		; save top segment number for later
	mov	cl,6		; convert to K bytes
	shr	ax,cl
	call	decout		; and display

	mov	dx,offset kbytes	; display "K bytes"
	mov	ah,9
	int	21h

	mov	dx,offset analyze	; display analyzing message
	mov	ah,9
	int	21h

	xor	ax,ax		; stop parity errors while we poke around
	out	0a0h,al

	pop	ax		; recover top segment number

loop:	mov	bx,0		; look into this 16 byte "segment"
;	cmp	ax,0a000h	; is ax = beginning of "reserved" addrs?
				; stop at display memory instead!
	cmp	ax,0b000h	; is ax = beginning of "reserved" addrs?
	je	ramend		; yes, so end of ram
	mov	ds,ax		; no, so use this as segment
	mov	[bx],ax 	; write contents of ax to ds:bx...
	mov	cx,[bx] 	;... and read it back to cx
	cmp	ax,cx		; does data read = data written?
	jne	ramend		; if it not, then ran out of ram!

	mov	cx,8		;    else - reset this 16 byte area
	mov	es,ax
	xor	ax,ax		;      reset means 0000h
	xor	di,di
	rep	stosw		;    to prevent parity errors when used

	mov	ax,ds		; copy ds to ax...
	inc	ax		;... increment it...
	jmp	loop		;... and loop

ramend:
	mov	bx,ax		; found real end of ram - save it

	mov	al,80h		; enable parity errors for the future
	out	0a0h,al

	mov	ax,bx		; convert segments to K bytes
	mov	cl,6
	shr	ax,cl

	mov	bx,40h		; point to bios data area
	mov	ds,bx
	mov	bx,13h		; and to memory size word in particular

	cmp	[bx],ax 	; same size?
	je	exit		; yes-then we must have done this before

	mov	[bx],ax 	; else - update and
	push	ax

; remove comments to patch equipment flag to indicate 4 floppies attached.
; especially useful for AST RESEARCH's SUPERDRV.

;stub** mov	bx,10h		; point to equipment flag
;stub** mov	ax,[bx] 	; get equipment flag
;stub** or	ax,00c0h	; set installed floppy count to 4
;stub** mov	[bx],ax 	; and restore to proper spot

	pop	ax		; get ds back but save ax on stack
	pop	ds
	push	ax

	mov	dx,offset findmem	; tell how much memory we found
	mov	ah,9
	int	21h

	pop	ax		; get K byte count
	call	decout

	mov	dx,offset kbytes
	mov	ah,9
	int	21h

	mov	dx,offset reboot	; tell them about reboot
	mov	ah,9
	int	21h

	int	19h		; re-boot

exit:
	pop	ds
	mov	dx,offset done
	mov	ah,9
	int	21h

	int	20h		; exit to dos


; quick and probably dirty - display decimal in ax routine

decout:
	push	ax
	push	bx
	push	cx
	push	dx

	xor	cx,cx		;counter of digits
	mov	bx,10		;divide by 10 for conversion

decimal$loop:
	xor	dx,dx		;clear for divide
	div	bx		;get remainder and quotient
	add	dx,'00'         ;make remainder ascii
	push	dx		;save it
	inc	cx		;and count it
	or	ax,ax		;out of digits?
	jnz	decimal$loop	;no-loop on the decimal

decimal$out:
	pop	dx		;get digit
	mov	ah,2		;print digit
	int	21h
	loop	decimal$out	;and loop

	pop	dx
	pop	cx
	pop	bx
	pop	ax
	ret

s0000	ends

	end	start
```
{% endraw %}

## NOLF.ASM

{% raw %}
```
PAGE 66,132
TITLE NOLF - PRINTER FRONT END
;
; BY: RICHARD HAMILTON (713) 726-9459
;
; PURPOSE:
; THIS PROGRAM IS A FRONT END TO THE PRINTER INTERRUPT TO DELETE ANY 
; LINE FEEDS SENT BY THE SOFTWARE TO THE PRINTER. THIS IS FOR PRINTERS
; WHICH WILL ALWAYS INSERT LF AFTER CR.
;
; NOTE: THROUGH OUT THIS PROGRAM THE PRINTER INTERRUPT IS REFERRED TO
;       BY IT'S DECIMAL NUMBER. MANY PEOPLE REFUR TO INTERRUPTS BY
;       THEIR HEXIDECIMAL NUMBER. THE PRINTER INTERRUPT IS 17H OR 23D.
;
; TECHNICAL DESIGN:
; THIS PROGRAM SHOULD BE INVOKED IN THE AUTOEXEC.BAT FILE OR ANY TIME 
; AFTER BOOTING DOS. UPON FIRST ENTRY THE PROGRAM WILL SAVE THE STANDARD 
; INTERRUPT 23 ADDRESS IN THIS PROGRAM FOR A JUMP AFTER CHECKING THE 
; CHARTER SENT (IN AL) FOR LF. THE STANDARD INTERRUPT 23 ADDRESS WILL
; BE REPLACED WITH THE ADDRESS OF THIS PROGRAM'S SECONDARY ENTRY POINT
; CHARACTER SCANNING. NEXT THE PROGRAM WILL EXIT TO DOS WITH AN INTERRUPT
; 27H TO STAY RESIDENT. BECAUSE THE PSP PRECEEDS THIS CODE, 100H BYTES ARE
; TAKEN FROM AVALIABLE MEMORY FOR THE PSP BY USING INT 27H. MANY PROGRAMS
; MOVE THE CODE FROM THE SECONDARY ENTRY POINT TO PROGRAM'S LASTBYTE AND
; OVERLAY THE PSP. THEN THEY DO NOT ADJUST DX FOR THE PSP LENGTH, AND
; CONSEQUENTLY KEEP RESIDENT ONLY THE LENGTH OF CODE THAT WAS MOVED OVER
; THE PSP. BECAUSE WE ARE USING INT 27, ONLY THE FIRST 5C OF THE PSP IS 
; NECESSARY TO KEEP. ALTHOUGH THIS PRACTICE SAVES A FEW BYTES, IT WAS
; NOT DONE IN THIS PROGRAM FOR THE SAKE OF SIMPLICITY. AS THIS PROGRAM IS
; RIGHT NOW, IT TAKES LESS THAN 300 BYTES INCLUDING THE PSP.
; PLEASE CONSULT THE TECHNICAL REFERENCE MANUAL STARTING OF PAGE A-42 FOR 
; ADDITIONAL INSIGHTS INTO THE BIOS PRINTER INTERRUPT HANDLER.
;
; INPUTS:  AL CONTAINS INPUT PRINT BYTE
;          ALL OTHER VALUES UNKNOWN
;
; OUTPUTS: AL CONTAINS INPUT PRINT BYTE OR
;          AN IRET IS DONE WITH NO PROCESSING
;
CSEG     SEGMENT PARA PUBLIC 'CODE'
         ASSUME  CS:CSEG
START    PROC    FAR
INIT:                                 ;THIS POINT IS ENTERED ONLY ONCE TO SET
                                      ;UP VECTOR TABLE FOR INT23.
                                      ;INTERRUPT VECTOR ADDRESSES FOR INVOCKING
                                      ;AT THE SECONDARY ENTRY POINT "PRINT".
         CLI                          ;CLEAR INTERRUPTS SO WE WILL NOT BE 
                                      ;INTERRUPTED BY ANY ADDITIONAL PRINTING.
         XOR    DX,DX                 ;SET DX TO 0 FOR MOVE INTO ES.
         MOV    ES,DX                 ;POINT TO LOWEST SEGMENT IN DOS.
         LDS    DX,DWORD PTR ES:INT23_ADDR ;GET PREVIOUS INT 23 SEGMENT & OFFSET.
         MOV    WORD PTR CS:INT23_SAV,DX ;STORE REAL INT23 ADDRESS IN OUR ROUTINE.
         MOV    WORD PTR CS:INT23_SAV+2,DS ;ALSO STORE INT23 SEGMENT ADDRESS.
         MOV    WORD PTR ES:INT23_OFF,OFFSET PRINT ;STORE OUR NEW ENTRY POINT
                                      ;OFFSET IN VECTOR TABLE.
         MOV    ES:INT23_SEG,CS       ;STORE OUR NEW SEGMENT ADDRESS IN VECTOR
                                      ;TABLE.
         STI                          ;IT IS NOW SAFE TO ALLOW INTERRUPTS.
         LEA    DX,WORD PTR CS:LASTBYTE ;SET PROGRAM LENGTH FOR INT 27H SO DOS
                                      ;KNOWS HOW MUCH MEMORY WILL BE RESIDENT
         ADD    DX,100H               ;ADD IN LENGTH OF PSP IN TOTAL MEMORY.
         INT    27H                   ;GO BACK TO DOS WITH RESIDENCY.
;
; THE FOLLOWING IS LOCATED HERE BECAUSE THE MICROSOFT ASSEMBLER HAS A BUG
; WHICH WILL RESOLVE THE FOWARD DOUBLE WORD REFERENCE TO THIS VARIABLE, BUT
; WILL STILL INDICATE A PHASE ERROR. THIS BUG HAS BEEN REPORTED TO IBM AND
; MICROSOFT.
; 
INT23_SAV DD     0                    ;INTERRUPT 23 JUMP TABLE ADDRESS SAVE AREA.
;
PRINT:
         CMP    AL,CS:LINEF           ;IS THE CHAR A LINE FEED?
         JE     SKIPLF                ;YES, GO SKIP LINEFEED.
         JMP    DWORD PTR INT23_SAV   ;JUMP TO BIOS FOR STANDARD KB PROCESSING.
SKIPLF:  IRET                         ;RETURN TO PROGRAM DOING NOTHING.
;
; DATA DEFINITIONS FOLLOW. THESE ARE IN THE CODE SEGMENT FOR SIMPLICITY.
;
LINEF     DB     0AH                   ;DEFINE CHAR FOR LINEFEED.
INT23_ADDR EQU   5CH                   ;OFFSET INTO VECTOR TABLE FOR INT23 ADDRESS. 
INT23_OFF EQU    5CH                   ;OFFSET INTO VECTOR TABLE FOR INT23 OFFSET.
INT23_SEG EQU    5EH                   ;OFFSET INTO VECTOR TABLE FOR INT23 SEGMENT.
LASTBYTE  EQU    $+1                   ;THIS MUST BE ONE MORE THAN THE LAST BYTE OF
                                       ;THIS PROGRAM TO INDICATE TO DOS HOW MUCH
                                       ;MEMORY TO KEEP RESIDENT AFTER INT 27H.
START     ENDP
CSEG      ENDS
          END

```
{% endraw %}

## OPCODE.DOC

{% raw %}
```
opcode.txt  is a data file that is used by disasm.bas
```
{% endraw %}

## OPCODE.TXT

{% raw %}
```
NOP
LD    BC,@
LD    (BC),A
INC   BC
INC   B
DEC   B
LD    B,#
RLCA
---
ADD   HL,BC
LD    A,(BC)
DEC   BC
INC   C
DEC   C
LD    C,#
RRCA
---
LD    DE,@
LD    (DE),A
INC   DE
INC   D
DEC   D
LD    D,#
RLA
---
ADD   HL,DE
LD    A,(DE)
DEC   DE
INC   E
DEC   E
LD    E,#
RRA
RIM
LD    HL,@
LD    (@),HL
INC   HL
INC   H
DEC   H
LD    H,#
DAA
---
ADD   HL,HL
LD    HL,(@)
DEC   HL
INC   L
DEC   L
LD    L,#
CPL
SIM
LD    SP,@
LD    (@),A
INC   SP
INC   (HL)
DEC   (HL)
LD    (HL),#
SCF
---
ADD   HL,SP
LD    A,(@)
DEC   SP
INC   A
DEC   A
LD    A,#
CCF
LD    B,B
LD    B,C
LD    B,D
LD    B,E
LD    B,H
LD    B,L
LD    B,(HL)
LD    B,A
LD    C,B
LD    C,C
LD    C,D
LD    C,E
LD    C,H
LD    C,L
LD    C,(HL)
LD    C,A
LD    D,B
LD    D,C
LD    D,D
LD    D,E
LD    D,H
LD    D,L
LD    D,(HL)
LD    D,A
LD    E,B
LD    E,C
LD    E,D
LD    E,E
LD    E,H
LD    E,L
LD    E,(HL)
LD    E,A
LD    H,B
LD    H,C
LD    H,D
LD    H,E
LD    H,H
LD    H,L
LD    H,(HL)
LD    H,A
LD    L,B
LD    L,C
LD    L,D
LD    L,E
LD    L,H
LD    L,L
LD    L,(HL)
LD    L,A
LD    (HL),B
LD    (HL),C
LD    (HL),D
LD    (HL),E
LD    (HL),H
LD    (HL),L
HALT
LD    (HL),A
LD    A,B
LD    A,C
LD    A,D
LD    A,E
LD    A,H
LD    A,L
LD    A,(HL)
LD    A,A
ADD   A,B
ADD   A,C
ADD   A,D
ADD   A,E
ADD   A,H
ADD   A,L
ADD   A,(HL)
ADD   A,A
ADC   A,B
ADC   A,C
ADC   A,D
ADC   A,E
ADC   A,H
ADC   A,L
ADC   A,(HL)
ADC   A,A
SUB   B
SUB   C
SUB   D
SUB   E
SUB   H
SUB   L
SUB   (HL)
SUB   A
SBC   A,B
SBC   A,C
SBC   A,D
SBC   A,E
SBC   A,H
SBC   A,L
SBC   A,(HL)
SBC   A,A
AND   B
AND   C
AND   D
AND   E
AND   H
AND   L
AND   (HL)
AND   A
XOR   B
XOR   C
XOR   D
XOR   E
XOR   H
XOR   L
XOR   (HL)
XOR   A
OR    B
OR    C
OR    D
OR    E
OR    H
OR    L
OR    (HL)
OR    A
CP    B
CP    C
CP    D
CP    E
CP    H
CP    L
CP    (HL)
CP    A
RET   NZ
POP   BC
JP    NZ,@
JP    @
CALL  NZ,@
PUSH  BC
ADD   A,#
RST   00
RET   Z
RET
JP    Z,@
---
CALL  Z,@
CALL  @
ADC   A,#
RST   08
RET   NC
POP   DE
JP    NC,@
OUT   (#),A
CALL  NC,@
PUSH  DE
SUB   #
RST   10
RET   C
---
JP    C,@
IN    A,(#)
CALL  C,@
---
SBC   A,#
RST   18
RET   PO
POP   HL
JP    PO,@
EX    (SP),HL
CALL  PO,@
PUSH  HL
AND   #
RST   20
RET   PE
JP    (HL)
JP    PE,@
EX    DE,HL
CALL  PE,@
---
XOR   #
RST   28
RET   P
POP   AF
JP    P,@
DI
CALL  P,@
PUSH  AF
OR    #
RST   30
RET   M
LD    SP,HL
JP    M,@
EI
CALL  M,@
---
CP    #
RST   38
```
{% endraw %}

## PAGE.ASM

{% raw %}
```
	PAGE	,132
;---------------------------------------------------------------------
;
; This program demonstates using multiple screen pages and includes
; 2 macros.
;
; Malcolm McCorquodale III. Summer 1983   713 - 626 - 4979
;
;---------------------------------------------------------------------

MYPROG	SEGMENT 'CODE'
	ASSUME	CS:MYPROG

ACT_DISP_PAGE	MACRO	PAGE_NO
	MOV	AH,5
	MOV	AL,PAGE_NO
	INT	10H
	ENDM

WRITE_CHAR	MACRO	PAGE,CNT,CHAR
	MOV	BH,PAGE
	MOV	CX,CNT
	MOV	AH,10
	MOV	AL,CHAR
	INT	10H
	ENDM

TEST	PROC	FAR
	PUSH	DS	; DOS LINKAGE
	XOR	AX,AX
	PUSH	AX

	WRITE_CHAR	1,2000,30H
	WRITE_CHAR	0,2000,31H
	MOV	CX,1001

LP:
	PUSH	CX
	ACT_DISP_PAGE 1
	ACT_DISP_PAGE 0
	POP	CX
	LOOP	LP
	RET
TEST	ENDP
MYPROG	ENDS
	END
```
{% endraw %}

## PASSWORD.ASM

{% raw %}
```
;
; Program for password protection of the system
;	Written by Dave Staehlin
;	5430 Candleglow NE
;	Albuquerque,NM 87111
;	(505) 822-1889
;
; Enter the password desired at the 'psw' label.  Note that this routine
; is set up for a 20 character maximum length password.
;
; Use this program by entering your password below and assembling this 
; program into a .COM type file by using EXE2BIN.  Then place the command
; PASSWORD as the first line in your AUTOEXEC.BAT file.  This program
; will not keep anyone that knows what their doing off your system but
; it will keep the kids, wifey, and nosey secretaries from gaining
; unauthorized access to your system.  It serves its purpose on a hard
; disk system.  I don't know how useful it would be on a floppy based system
; however.
;
; Since this is my first attempt at 8088 assembler, I assume no responsibility
; for my oddball way of coding this!  I've still got a lot to learn!
;
;							Dave
;
;
password	segment				;set up code and data section
		assume	cs:password,ds:password,es:password ;tell assembler about conditions at entry
		org	100h			;com programs begin here
main:		jmp	begin			;skip area for data
;
;	*** DATA AREA ***
;
;  *** Put your password between the quotes in the line below. ***
;
psw		db	'Put Password Here   '	;room for 20 byte password
;
inpsw		db	'                    '	;store user input password here
prompt		db	1bh,'[2J',1bh,'[32;40mPlease enter system password: $'
match		db	13,10,10,1bh,'[2JPassword Accepted - Initializing system.....',13,10,'$'
;
;	*** PROGRAM STARTS HERE ***
begin:		mov	dx,offset prompt	;output the prompt to the consol
		call	stringout
		mov	cl,20			;maximum length of password
		mov	bx,offset inpsw		;put input password here
inloop:		call	charin			;consol input w/o echo
		cmp	al,08h			;backspace?
		jnz	goon			;go on if not
		cmp	cl,20			;at the beginning?
		jz	inloop			;ignore if so
		inc	cl			;else increment the counter
		dec	bx			;and decrement the memory pointer
		mov	al,' '
		mov	[bx],al			;erase last char in input string
		call	backspc			;output a backspace to console
		jmp 	inloop
;
;
goon:		cmp	al,0dh			;carriage return?
		jz	checkit			;done with input if so
		dec	cl			;count one input done
		jz	checkit			;done if 20 chars input
		mov	[bx],al			;else save the char
		inc	bx			;increment save address by one
echo:		mov	dl,'.'			;output a period echo
		call	charout
		jmp	inloop			;and get another
;
checkit:	mov	cx,20			;set up counter for string compare
		mov	dx,offset match		;assume a match
		mov	si,offset psw		;compare the strings
		mov	di,offset inpsw
		cld				;clear the df flag for compare
		repe	cmpsb
		cmp	cx,0			;did cl reach zero?
		jz	gotmatch		;if they match
		jmp	inloop			;oops - bomb system
;
;	we have a match - return system to the user
;
gotmatch:	mov	ah,9			
		int	21h	
		ret				;return to system
;
; subroutines
;
stringout:	mov	ah,9			;output a string to the console
		int	21h
		ret
charout:	mov	ah,2			;output a character to the console
		int	21h
		ret
charin:		mov	ah,7			;input console char w/o echo
		int	21h
		ret
backspc:	mov	dl,08h			;output a backspace
		call	charout
		mov	dl,' '			;output a backspace
		call	charout
		mov	dl,08h			;output a backspace
		call	charout
		ret
;
password	ends				;end of code and data section
		end	main
```
{% endraw %}

## PRTPATH.ASM

{% raw %}
```
;
; PRTPATH - This .COM file will print the current directory path.
;
; From PC-TECH Journal	Feb 1984. p. 22
; Author: Bruce Kvam.

dos	macro	function
	mov	ah,function
	int	21h
	endm

putc	macro	char
	mov	dl,char
	dos	2
	endm

code	segment

	assume	cs:code,ds:code,es:code
	org 100h
start:

; Get and print the current drive

	dos	19h	; Get default drive code form DOS.
	add	al,'A'
	putc	al	; Display drive code.
	putc	':'
	putc	'\'

; Get and print current pathname

	mov	dl,0	; Default drive from DOS.
	lea	si,pathname
	dos	47h

printloop:
	cmp	byte ptr [si],0 ;pathname terminated by 0.
	jz	exit
	putc	[si]
	inc	si	; point to next character.
	jmp	printloop

exit:
	int	20h		; Return to DOS.

; Storage area where DOS writes the current pathname.  An ASCIIZ string.

pathname	db	65 dup (?)

code	ends
	end	start


```
{% endraw %}

## PUT_DEC.ASM

{% raw %}
```
;PUT_DEC.ASM       10-10-83 
;
;ROUTINE TO PUT A DECIMAL POINT 'X' CHARACTERS FROM RIGHT END
;OF A ASCII STRING
;
;CALLED WITH                                                   
;            BX = OFFSET OF ASCII STRING
;            CX = NUMBER OF CHARACTERS IN STRING           
;            DX = NUMBER OF CHARACTERS TO RIGHT OF DECIMAL
;RETURN WITH DECIMAL IN STRING AND NUMBER AT RIGHT SIDE OF STRING
;--------------------------------------------
DATA SEGMENT PARA 'DATA'
TEMP_STRING  DB  10 DUP (?)    ;PLACE TO PUT ASCII STRING 
                               ;WHILL WORKING WITH IT
TEMP_NUM     DW  ?
PUT_DEC_SIGN DB  ?             ;PLACE TO PUT SIGN
DATA ENDS
;--------------------------------------------
CODE SEGMENT PARA 'CODE'
      PUBLIC PUT_DEC 
      ASSUME CS:CODE,DS:DATA,ES:DATA
PUT_DEC PROC FAR

;MOVE ASCII STRING TO TEMPORARY LOCATION AND PUT
;DECIMAL INTO PROPER LOCATION AS STRING IS MOVED
;BACK


       PUSH DX        ;NUMBERS OF CHARACTERS TO RIGHT OF DEC
       PUSH BX        ;OFFSET OF START OF STRING
       PUSH CX        ;NUMBER OF CHARACTERS IN STRING

       CMP  DX,0         ;IF NO CHARACTERS TO RIGHT OF DECIMAL THEN
       JZ  PUT_DEC_EXIT1 ;   DON'T NEED A DECIMAL POINT

;CLEAR TEMP STRING AREA
       LEA  AX,TEMP_STRING
       MOV  SI,AX
       MOV  CX,10            ;SIZE OF TEMP_STRING
LOOP_CLEAR:
       MOV  BYTE PTR [SI],' '  ;GOING TO PUT BLANKS IN STRING
       INC  SI                 
       LOOP LOOP_CLEAR

       POP  CX       ;NUMBER OF CHARACTERS IN ORIGINAL STRING
       POP  BX       ;POINTS TO START OF ORIGINAL STRING
       PUSH CX       ;SAVE FOR LATER USE

       XOR  DX,DX
       LEA  AX,TEMP_STRING
       MOV  SI,AX     ;PUT ADDRESS OF TEMP STRING IN DESTINATION INDEX
      
       MOV  AL,BYTE PTR [BX]
       CMP  AL,'-'
       JNE  TEST_FOR_PLUS
       MOV  PUT_DEC_SIGN,AL    ;FIRST CHAR WAS A '-'
       INC  BX
       DEC  CX
       JMP  MOVE_CHAR

TEST_FOR_PLUS:
       CMP  AL,'+'
       JNE  MOVE_CHAR           ;FIRST CHAR WAS NOT - OR +
       MOV  PUT_DEC_SIGN,AL
       INC  BX
       DEC  CX

;NOTE HAVE NOT MOVED THE SIGN TO THE TEMPARY STRING

MOVE_CHAR:
       MOV  AL,BYTE PTR [BX]   ;PUT STRING CHAR IN AX
       MOV  BYTE PTR [SI],AL   ;  AND THEN INTO TEMP STRING
       INC  BX
       INC  SI
       LOOP MOVE_CHAR

       POP  CX        ;NUMBER OF CHARACTERS IN STRING
       DEC  BX        ;BX POINTS TO POSITION OF LAST CHARACTER IN STRING
       DEC  SI        ;SI POINTS TO END OF STRING IN TEMP STRING SPACE
       POP  DX

MOVE_CHAR_BACK:
       CMP  DX,0      ;PUT DECIMAL IN STRING WHEN DX CHARS HAVE BEEN PUT
       JE PUT_IN_DEC
       MOV  AL,BYTE PTR [SI]   ;PUT CHAR FROM TEMP STRING IN AX
       MOV  BYTE PTR [BX],AL   ;  AND THEN BACK TO ORIGINAL STRING
       DEC  BX
       DEC  SI
       DEC  DX
       LOOP MOVE_CHAR_BACK

       CMP  DX,0                ;IF DX IS NEG THEN DEC IN PLACE
       JL   PUT_DEC_EXIT

PUT_LEADING_ZEROS:
       CMP  DX,0
       JZ PUT_IN_DEC_1
       MOV  BYTE PTR [BX],'0'   ;ZERO
       DEC  BX
       DEC  DX
       JMP PUT_LEADING_ZEROS

PUT_IN_DEC_1:
       MOV  BYTE PTR [BX],'.'    ;DECIMAL
       DEC  BX
       MOV  BYTE PTR [BX],'0'    ;ZERO BEFORE THE DECIMAL
       DEC  BX
       MOV  AL,PUT_DEC_SIGN
       MOV  [BX],AL              ;PUT SIGB ON STRING
       JMP  PUT_DEC_EXIT

PUT_IN_DEC:           ;PUT THE DECIMAL POINT IN THE STRING
       MOV  BYTE PTR [BX],'.'  
       DEC  BX
       DEC  DX                ;SO DX NOT ZERO
       JMP MOVE_CHAR_BACK

PUT_DEC_EXIT1:
        POP  CX       ;FIX STACK FOR EXIT
        POP  BX
        POP  DX

PUT_DEC_EXIT:
       RET            ;RETURN TO CALLER

PUT_DEC  ENDP
CODE     ENDS
         END
```
{% endraw %}

## ROMBIOS.ASM

{% raw %}
```
; from gaithersburg md ibm pc bulletin board 19mar83
;
;
		SUBTTL ROM BIOS DATA AREAS AND EQUATES
;--------------------------------
;   EQUATES
;--------------------------------
PORT_A		EQU	60H		 ; 8255 PORT A ADDR
PORT_B		EQU	61H		 ; 8255 PORT B ADDR
PORT_C		EQU	62H		 ; 8255 PORT C ADDR
CMD_PORT	EQU	63H
INTA00		EQU	20H		 ; 8259 PORT
INTA01		EQU	21H		 ; 8259 PORT
EOI		EQU	20H
TIMER		EQU	40H
TIM_CTL 	EQU	43H		 ; 8253 TIMER CONTROL PORT ADDR
TIMER0		EQU	40H		 ; 8253 TIMER/CNTER 0 PORT ADDR
TMINT		EQU	01		 ; TIMER 0 INTR RECVD MASK
DMA08		EQU	08		 ; DMA STATUS REG PORT ADDR
DMA		EQU	00		 ; DMA CHANNEL 0 ADDRESS REG PORT ADDR
MAX_PERIOD	EQU	540H
MIN_PERIOD	EQU	410H
KBD_IN		EQU	60H		 ; KEYBOARD DATA IN ADDR PORT
KBDINT		EQU	02		 ; KEYBOARD INTR MASK
KB_DATA 	EQU	60H		 ; KEYBOARD SCAN CODE PORT
KB_CTL		EQU	61H		 ; CONTROL BITS FOR KEYBOARD SENSE DATA
;--------------------------------
;  8088 INTERRUPT LOCATIONS
;--------------------------------
ABS0		SEGMENT AT 0
STG_LOC0	LABEL	BYTE
		ORG	2*4
NMI_PTR 	LABEL	WORD
		ORG	5*4
INTS_PTR	LABEL	WORD
		ORG	8*4
INT_ADDR	LABEL	WORD
INT_PTR 	LABEL	DWORD
		ORG	10H*4
VIDEO_INT	LABEL	WORD
		ORG	1DH*4
PARM_PTR	LABEL	DWORD		 ; POINTER TO VIDEO PARMS
		ORG	01EH*4		 ; INTERRUPT 1EH
DISK_PTR	LABEL	DWORD
		ORG	01FH*4		 ; LOCATION OF POINTER
EXT_PTR 	LABEL	DWORD		 ; POINTER TO EXTENSION
		ORG	7C00H
BOOT_LOCN	LABEL	FAR
ABS0		ENDS
		PAGE
;--------------------------------
;  STACK -- USED DURING INITIALIZATION ONLY
;--------------------------------
STACK		SEGMENT AT 30H
		DW	128 DUP(?)
TOS		LABEL	WORD
STACK		ENDS
;--------------------------------
;  ROM BIOS DATA AREAS
;--------------------------------
DATA		SEGMENT AT 40H
RS232_BASE	DW	4 DUP(?)	 ; ADDRESSES OF RS232 ADAPTERS
PRINTER_BASE	DW	4 DUP(?)	 ; ADDRESSES OF PRINTERS
EQUIP_FLAG	DW	?		 ; INSTALLED HARDWARE
MFG_TST 	DB	?		 ; INITIALIZATION FLAG
MEMORY_SIZE	DW	?		 ; MEMORY SIZE IN K BYTES
IO_RAM_SIZE	DW	?		 ; MEMORY IN I/O CHANNEL
		PAGE
;-------------------------------
;  KEYBOARD DATA AREAS
;-------------------------------
KB_FLAG 	DB	?
;------ SHIFT FLAG EQUATES WITHIN KB_FLAG
INS_STATE	EQU	80H		 ; INSERT STATE IS ACTIVE
CAPS_STATE	EQU	40H		 ; CAPS LOCK STATE HAS BEEN TOGGLED
NUM_STATE	EQU	20H		 ; NUM LOCK STATE HAS BEEN TOGGLED
SCROLL_STATE	EQU	10H		 ; SCROLL LOCK STATE HAS BEEN TOGGLED
ALT_STATE	EQU	08H		 ; ALTERNATE SHIFT KEY DEPRESSED
CTL_SHIFT	EQU	04H		 ; CONTROL SHIFT KEY DEPRESSED
LEFT_SHIFT	EQU	02H		 ; LEFT SHIFT KEY DEPRESSED
RIGHT_SHIFT	EQU	01H		 ; RIGHT SHIFT KEY DEPRESSED
;-------------------------------
KB_FLAG_1	DB	?		 ; SECOND BYTE OF KEYBOARD STATUS
INS_SHIFT	EQU	80H		 ; INSERT KEY IS DEPRESSED
CAPS_SHIFT	EQU	40H		 ; CAPS LOCK KEY IS DEPRESSED
NUM_SHIFT	EQU	20H		 ; NUM LOCK KEY IS DEPRESSED
SCROLL_SHIFT	EQU	10H		 ; SCROLL LOCK KEY IS DEPRESSED
HOLD_STATE	EQU	08H		 ; SUSPEND KEY HAS BEEN TOGGLED
;-------------------------------
ALT_INPUT	DB	?		 ; STORAGE FOR ALTERNATE KEYPAD ENTRY
BUFFER_HEAD	DW	?		 ; POINTER TO HEAD OF KEYBOARD BUFFER
BUFFER_TAIL	DW	?		 ; POINTER TO TAIL OF KEYBOARD BUFFER
KB_BUFFER	DW	16 DUP(?)	 ; ROOM FOR 15 ENTRIES
KB_BUFFER_END	LABEL	WORD
;------ HEAD = TAIL INDICATES THAT THE BUFFER IS EMPTY
NUM_KEY 	EQU	69		 ; SCAN CODE FOR NUMBER LOCK
SCROLL_KEY	EQU	70		 ; SCROLL LOCK KEY
ALT_KEY 	EQU	56		 ; ALTERNATE SHIFT KEY SCAN CODE
CTL_KEY 	EQU	29		 ; SCAN CODE FOR CONTROL KEY
CAPS_KEY	EQU	58		 ; SCAN CODE FOR SHIFT LOCK
LEFT_KEY	EQU	42		 ; SCAN CODE FOR LEFT SHIFT
RIGHT_KEY	EQU	54		 ; SCAN CODE FOR RIGHT SHIFT
INS_KEY 	EQU	82		 ; SCAN CODE FOR INSERT KEY
DEL_KEY 	EQU	83		 ; SCAN CODE FOR DELETE KEY
		PAGE
;-------------------------------
;   DISKETTE DATA AREAS
;-------------------------------
SEEK_STATUS	DB	?		 ; DRIVE RECALIBRATION STATUS
;					 BIT 3-0 = DRIVE 3-0 NEEDS RECAL BEFORE
;					 NEXT SEEK IF BIT IS = 0
INT_FLAG	EQU	080H		 ; INTERRUPT OCCURRENCE FLAG
MOTOR_STATUS	DB	?		 ; MOTOR STATUS
;			 BIT 3-0 = DRIVE 3-0 IS CURRENTLY RUNNING
;			 BIT 7	 = CURRENT OPERATION IS A WRITE, REQUIRES DELAY
MOTOR_COUNT	DB	?		 ; TIME OUT COUNTER FOR DRIVE TURN OFF
MOTOR_WAIT	EQU	37	   ; TWO SECONDS OF COUNTS FOR MOTOR TURN OFF
;
DISKETTE_STATUS DB	?	   ; SINGLE BYTE OF RETURN CODE INFO FOR STATUS
TIME_OUT	EQU	80H	   ; ATTACHMENT FAILED TO RESPOND
BAD_SEEK	EQU	40H	   ; SEEK OPERATION FAILED
BAD_NEC 	EQU	20H	   ; NEC CONTROLLER HAS FAILED
BAD_CRC 	EQU	10H	   ; BAD CRC ON DISKETTE READ
DMA_BOUNDARY	EQU	09H	   ; ATTEMPT TO DMA ACROSS 64K BOUNDARY
BAD_DMA 	EQU	08H	   ; DMA OVERRUN ON OPERATION
RECORD_NOT_FND	EQU	04H	   ; REQUESTED SECTOR NOT FOUND
WRITE_PROTECT	EQU	03H	   ; WRITE ATTEMPTED ON WRITE PROT DISK
BAD_ADDR_MARK	EQU	02H	   ; ADDRESS MARK NOT FOUND
BAD_CMD 	EQU	01H	   ; BAD COMMAND PASSED TO DISKETTE I/O
;
NEC_STATUS	DB	7 DUP(?)   ; STATUS BYTES FROM NEC
;--------------------------------
;   VIDEO DISPLAY DATA AREA
;--------------------------------
CRT_MODE	DB	?	   ; CURRENT CRT MODE
CRT_COLS	DW	?	   ; NUMBER OF COLUMNS ON SCREEN
CRT_LEN 	DW	?	   ; LENGTH OF REGEN IN BYTES
CRT_START	DW	?	   ; STARTING ADDRESS IN REGEN BUFFER
CURSOR_POSN	DW	8 DUP(?)   ; CURSOR FOR EACH OF UP TO 8 PAGES
CURSOR_MODE	DW	?	   ; CURRENT CURSOR MODE SETTING
ACTIVE_PAGE	DB	?	   ; CURRENT PAGE BEING DISPLAYED
ADDR_6845	DW	?	   ; BASE ADDRESS FOR ACTIVE DISPLAY CARD
CRT_MODE_SET	DB	?	   ; CURRENT SETTING OF THE 3X8 REGISTER
CRT_PALLETTE	DB	?	   ; CURRENT PALLETTE SETTING COLOR CARD
		PAGE
;--------------------------------
;   CASSETTE DATA AREA
;--------------------------------
EDGE_CNT	DW	?	   ; TIME COUNT AT DATA EDGE
CRC_REG 	DW	?	   ; CRC REGISTER
LAST_VAL	DB	?	   ; LAST INPUT VALUE
;--------------------------------
;   TIMER DATA AREA
;--------------------------------
TIMER_LOW	DW	?	   ; LOW WORD OF TIMER COUNT
TIMER_HIGH	DW	?	   ; HIGH WORD OF TIMER COUNT
TIMER_OFL	DB	?	   ; TIMER HAS ROLLED OVER SINCE LAST READ
;COUNTS_SEC	EQU	18
;COUNTS_MIN	EQU	1092
;COUNTS_HOUR	EQU	65543
;COUNTS_DAY	EQU	1573040 = 1800B0H
;-------------------------------
;   SYSTEM DATA AREA
;-------------------------------
BIOS_BREAK	DB	?	   ; BIT 7 = 1 IF BREAK KEY HAS BEEN DEPRESSED
RESET_FLAG	DW	?	   ; WORD = 1234H IF KEYBOARD RESET UNDERWAY
DATA		ENDS
;
;--------------------------------
;   EXTRA DATA AREA
;--------------------------------
XXDATA		SEGMENT AT 50H
STATUS_BYTE	DB	?
XXDATA		ENDS
;
;--------------------------------
;   VIDEO DISPLAY BUFFER
;--------------------------------
VIDEO_RAM	SEGMENT AT 0B800H
REGEN		LABEL	BYTE
REGENW		LABEL	WORD
		DB	16384 DUP(?)
VIDEO_RAM	ENDS
;
;--------------------------------
;   ROM RESIDENT CODE
;--------------------------------
ROMCODE 	SEGMENT AT 0F000H
		DB	57344 DUP(?)		 ; FILL LOWEST 56K
		DB	'5700051 CORP. IBM 1981' ; COPYRIGHT NOTICE
ROMCODE 	ENDS
;
;--------------------------------
;   PROGRAM SEGMENT PREFIX
;--------------------------------
;
PROGRAM 	SEGMENT
INT20		DW			;INT 20 for DOS return
MEMORYSIZE	DW			;TOTAL MEMORY SIZE
CALLDOS_FAR	DB	5 DUP(?)	; LONG CALL DOS DISPATCHER
TERMADDR	DB	4 DUP(?)	; TERMINATE ADDRESS (ip,cs)
CTRLBREAK	DB	4 DUP(?)	; ctrl_break EXIT ADDRESS
RESERVED	DB	4ah DUP(?)	; RESERVED AREA
FCB_ONE 	DB	10H DUP(?)	; unopened fcb #1
FCB_TWO 	DB	10H DUP(?)	; unopened fcb #2
PARM_LENGTH	DB			; LENGTH OF PARAMETERS
PARM_FIELD	DB	19 DUP(?)	; PARAMETER STRING DATA
;
		SUBTTL
		PAGE
		ORG	100H		; DEFAULT ENTRY ADDRESS
PROGRAM_ENTRY	EQU	$
```
{% endraw %}

## SCRN.ASM

{% raw %}
```
	TITLE	SCRN - SCREEN SAVE RESIDENT UTILITY COMMAND, Version 2.2
	PAGE	60,132				  ; JAN 21, 1984
COMMENT |
╔═══════════════════════════════════════════════════════════════════╗
║	       Copyright (c), 1984 by J. T. Thannum		    ║
║	       All rights reserved.  May be copied		    ║
║	       for personal non-commercial use only.		    ║
╚═══════════════════════════════════════════════════════════════════╝

SCRN n
  [options]
	n - The Delay Interval in Minutes as a single Integer from 1 to 9
	    [Default: 10 Minutes]

SCRN is a screen saver utility command which operates using the Timer,
Video and Keyboard Interrupts to monitor activity of the system user.  Upon
detecting no entry via the keyboard OR output to the monitor(s) for "n" min.
the SCRN routine will turn off the video to all monitors attached to the
system.  The idea for this program originated from an article in Softalk,
Dec.  1983 by John Socha.  However, the version presented in this article
had several limitations which needed to be corrected for a viable
permanmently resident utility.	These limitations became the design
criteria for this version, as follows:

	1. Must turn "both" color and monochrome monitors off, not
	   just the active monitor on two monitor systems.
	2. Must function in a single monitor envirnoment with either
	   monitor attached.
	3. Must be extremely frugal in execution.  Since this routine
	   will be executed at each timer interrupt,or 18.2 times/sec,
	   and at each keyboard interrupt the routine must have the
	   minimum of overhead so as not to degrade system performance.
	4. Must be able blank background on color monitor as well as
	   foreground text or graphics.
	5. Should utilize the User Exit Interrupt provided in the
	   Timer Routine. [INT 1C] (This can be considered optional)
	6. Handle the blanking of the cursor on the Monochrome display
	   more efficiently.
	7. Output to the Monitor(s) should reset the timeout counter
	   within the delay window but not turn the video back on if
	   a timeout has occurred.
	8. Optional Parameter to set Delay Interval from 1 to 10 min.

(Special Note:	The Mode register definition shown in the Softalk article
		is incorrect as well as the referenced Enable Video bit.
		The program is correct as shown in the article.)

For efficiency and execution the Screen Saver program "hard codes"
addresses and uses its own routine to set adapter parameters.  However,
this hard coding is done via equates and because of the brevity of the
program this would cause only  minor problems if changes were required.

						J. T. Thannum
						Naperville, Ill 60540
|
		PAGE
;
; System Interrupt Vectors for BIOS and DOS
;	- TIMER_INT Routine User Exit [INT 1C] redirected by SCRN
;	- KB_INT Routine [INT 9] intercepted by SCRN
;	- VIDEO_INT Routine [INT 10] intercepted by SCRN
;
INT_VECTORS	SEGMENT AT 0
		ORG	9H*4
KB_INT		LABEL	DWORD		;KEYBOARD INTERRUPT
		ORG	10H*4
VIDEO_INT	LABEL	DWORD		;VIDEO I/O INTERRUPT
		ORG	1CH*4
TIMER_EXIT	LABEL	DWORD		;TIMER USER ROUTINE EXIT

INT_VECTORS	ENDS
;
; ROM BIOS Data Area
;
DATA		SEGMENT AT 40H
		ORG	10H
EQUIP_FLAG	DW	?		;EQUIPMENT INSTALLED IN SYSTEM
		ORG	60H
CURSOR_MODE	DW	?		;CURRENT CURSOR MODE FOR ACTIVE DISPLAY
		ORG	63H
ADDR_6845	DW	?		;BASE ADDRESS OF ACTIVE ADAPTER
CRT_MODE_SET	DB	?		;CURRENT SETTING OF 3x8 REGISTER
CRT_PALLETTE	DB	?		;CURRENT COLOR SETTINGS

DATA		ENDS
		PAGE
;
; SCRN - Screen Save Program Code Segment
;	-Main Procedures:
;		-TIMER_USER_ROUTINE - Processing at each Timer Interrupt to
;				      determine if video should be turned "off"
;		-KEYBOARD_INTERCEPT - Processing at each Keyboard interrupt to
;				      determine of video should be turned "on".
;				      Resets delay counter at each invocation.
;		-VIDEO_IO_INTERCEPT - Processing at each Video I/O interrupt to
;				      keep video on by resetting delay counter.
;		-INIT_PROC	    - Initialize program and make resident. Not
;				      retained in memory with resident portion
;		-CURSOR_SET	    - Subroutine to turn Monochrome Adapter
;				      cursor on and off
;
SCREEN_SAV	SEGMENT PUBLIC 'CODE'
		ASSUME	CS:SCREEN_SAV
;
; Program Segment Prefix
;	- Location of Command Parameters
;	- For Valid Parameter String the PARM_COUNT = 2 and the
;	  PARM_DATA byte will be 1 to 9 (31H to 39H ASCII)
;
		ORG	80H
PARM_COUNT	DB	?		;NO. OF CHARACTERS IN PARAMETER STRING
SPACE		DB	?
PARM_DATA	DB	?		;DELAY VALUE PARAMETER
;
		ORG	100H
BEGIN:		JMP	INIT_PROC		;INITIALIZE & MAKE RESIDENT
;
; Program Save Area for Interrupts and Data
;
BIOS_KB_INT	DD	?		;BIOS INTERRUPT POINTERS FOR KEYBOARD
BIOS_VIDEO_INT	DD	?		;BIOS INTERRUPT POINTERS FOR VIDEO I/O
BIOS_TIMER_EXIT DD	?		;BIOS INTERRUPT POINTERS FOR TIMER EXIT
VIDEO_STATUS	DB	8		;SET BIT 4 TO ONE - INITIALIZES AS "ON"
DELAY_VALUE	DW	2AA8H		;SETS DELAY INTERVAL - DEFAULT 10 MIN
DELAY_COUNTER	DW	2AA8H		;COUNTDOWN TIMER - INIT @ DEFAULT
MESSAGE 	DB	'Screen Saver, Ver. 2.2',CR,LF,'$'
;
; Equates
;
CR		EQU	0DH		;CARRIAGE RETURN
LF		EQU	0AH		;LINE FEED
VALID_COUNT	EQU	2		;VALID COMMAND PARAMETER STRING COUNT
DELAY_1_MIN	EQU	444H		;DELAY INTERVAL FOR 1 MINUTE
VIDEO_OFF	EQU	8		;TEST VALUE FOR VIDEO OFF BIT
MONO_CUR_OFF	EQU	2B0CH		;VALUES TO WRITE TO CURSOR REGISTERS
MONO_CUR_ON	EQU	0B0CH		;    TO TURN CURSOR "ON" AND "OFF"
COLOR_MODE_REG	EQU	3D8H		;ADDRESSES FOR EACH ADAPTERS
MONO_MODE_REG	EQU	3B8H		;    6845 MODE REGISTER
ADDR_6845_MONO	EQU	3B4H		;MONOCHROME ADAP.- 6845 ADDRESS REGISTER
COLOR_SEL_REG	EQU	3D9H		;COLOR ADAP.- 6845 COLOR SELECT REGISTER
REG_10		EQU	10		;CURSOR START REGISTER - CURSOR ENABLE
REG_11		EQU	11		;CURSOR END   REGISTER
DEF_MODE_ON	EQU	29H		;DEFAULT CRT_MODE_SET FOR VIDEO ENABLED
DEF_MODE_OFF	EQU	21H		;   "     "    "   "   "    "  DISABLED
COLOR_ACTIVE	EQU	10H		;TEST FOR ACTIVE MONITOR ADAPTER
BG_BLACK	EQU	0FH		;TEST FOR BLACK BACKGROUND SETTING
		PAGE
;
; Timer Exit Routine - Determines if video should be turned off
;	-Uses INT 1C, but chains interrupt in the event additional user routines
;	 are installed
;
TIMER_USER_ROUTINE  PROC NEAR
		ASSUME CS:SCREEN_SAV,DS:DATA
		PUSH	AX
		PUSH	DS
		MOV	AX,DATA 		;ESTABLISH DATA SEGMENT
		MOV	DS,AX
		TEST	VIDEO_STATUS,VIDEO_OFF	;IS VIDEO, OFF?
		JZ	EXIT_TIMER		;  YES, NO ACTION IS REQUIRED
		DEC	DELAY_COUNTER		;HAS DELAY TIME ELAPSED?
		JNZ	EXIT_TIMER		;  NO, THEN NO ACTION IS REQ'D
;
		CLI
		PUSH	DX
		PUSH	CX
;
; Turn Monochrome Video OFF including Cursor
;
		MOV	DX,MONO_MODE_REG ;SET OUTPUT TO MODE REGISTER,
		MOV	AL,DEF_MODE_OFF  ;  GET DATA TO OUTPUT
		OUT	DX,AL		 ;  THEN TURN OFF WITH DEFAULT MODE
		MOV	CX,MONO_CUR_OFF  ;SET TO TURN CURSOR OFF,
		CALL	CURSOR_SET	 ;  THEN CALL ROUTINE TO DO IT
;
; Turn Color Video OFF
;
		TEST	EQUIP_FLAG,COLOR_ACTIVE ;IS COLOR DISPLAY ACTIVE?
		JZ	GET_MODE		;  YES, THEN GET CURRENT MODE
		MOV	AL,DEF_MODE_OFF 	;  NO,	THEN USE DEFAULT MODE
		JMP	SHORT CONT
GET_MODE:	MOV	AL,CRT_MODE_SET 	;CURRENT ACTIVE MODE SETTING
		AND	AL,0F7H 		;TURN VIDEO ENABLE BIT OFF
		MOV	CRT_MODE_SET,AL 	;SAVE NEW MODE SETTING
CONT:		MOV	DX,COLOR_MODE_REG	;GET ADDRESS OF MODE REGISTER
		OUT	DX,AL			; THEN OUTPUT TO TURN VIDEO OFF
		TEST	CRT_PALLETTE,BG_BLACK	;IS BACKGROUND COLOR BLACK?
		JZ	DONE			;  YES, THEN DONE
		MOV	AL,CRT_PALLETTE 	;  ELSE, GET CURRENT PALLETTE
		AND	AL,0F0H 		;SET FOR BLACK BACKGROUND
		MOV	DX,COLOR_SEL_REG	;GET ADDR OF COLOR SELECT REG
		OUT	DX,AL			;SET BACKGROUND TO BLACK
DONE:		AND	VIDEO_STATUS,0F7H	;SET VIDEO STATUS "OFF"
		POP	CX
		POP	DX
		STI
EXIT_TIMER:	POP	DS
		POP	AX
		JMP	BIOS_TIMER_EXIT 	;CHAIN TO NEXT ROUTINE OR EXIT
						; TO FINISH TIMER INTERRUPT
TIMER_USER_ROUTINE	ENDP
		PAGE
;
; Keyboard Intercept Routine
;	-Intercepts Keyboard INT 9, checks if video should be turned on
;	 then chains to normal keyboard processing
;
KEYBOARD_INTERCEPT PROC NEAR
		ASSUME CS:SCREEN_SAV,DS:DATA
		PUSH	AX
		PUSH	DS
		MOV	AX,DATA 		;ESTABLISH DATA SEGMENT
		MOV	DS,AX
		MOV	AX,DELAY_VALUE		;RESET,
		MOV	DELAY_COUNTER,AX	;  DELAY COUNTER
		TEST	VIDEO_STATUS,VIDEO_OFF	;IF VIDEO IS ON,
		JNZ	EXIT_KB 		;  EXIT, NO ACTION IS REQUIRED
;
		CLI
		PUSH	DX
		PUSH	CX
;
; Turn Monochrome Video ON including Cursor
;
		MOV	DX,MONO_MODE_REG ;SET OUTPUT TO MODE REGISTER,
		MOV	AL,DEF_MODE_ON	 ;  GET DATA TO OUTPUT,
		OUT	DX,AL		 ;  THEN TURN OFF WITH DEFAULT MODE
		MOV	CX,MONO_CUR_ON	 ;SET TO TURN CURSOR ON,
		CALL	CURSOR_SET	 ;  THEN CALL ROUTINE TO DO IT
;
; Turn Color Video ON
;
		TEST	EQUIP_FLAG,COLOR_ACTIVE ;IS COLOR DISPLAY ACTIVE?
		JZ	GET_MODE1		;  YES, THEN GET CURRENT MODE
		MOV	AL,DEF_MODE_ON		;  NO,	THEN USE DEFAULT MODE
		JMP	SHORT CONT1
GET_MODE1:	MOV	AL,CRT_MODE_SET 	;CURRENT ACTIVE MODE SETTING
		OR	AL,8			;TURN VIDEO ENABLE BIT ON
		MOV	CRT_MODE_SET,AL 	;SAVE NEW MODE SETTING
CONT1:		MOV	DX,COLOR_MODE_REG	;GET ADDRESS OF MODE REGISTER
		OUT	DX,AL			; THEN OUTPUT TO TURN VIDEO ON
		TEST	CRT_PALLETTE,BG_BLACK	;IS BACKGROUND COLOR BLACK?
		JZ	DONE1			;  YES, THEN DONE
		MOV	AL,CRT_PALLETTE 	;  ELSE, GET CURRENT PALLETTE
		MOV	DX,COLOR_SEL_REG	;GET ADDR OF COLOR SELECT REG
		OUT	DX,AL			;RESTORE BACKGROUND COLOR
DONE1:		OR	VIDEO_STATUS,8		;SET VIDEO STATUS "ON"
		POP	CX
		POP	DX
		STI
EXIT_KB:	POP	DS
		POP	AX
		JMP	BIOS_KB_INT		;CHAIN TO NEXT ROUTINE OR EXIT
						; TO FINISH TIMER INTERRUPT
KEYBOARD_INTERCEPT	ENDP
		PAGE
;
; Video I/O Intercept Routine
;	-Intercepts Video I/O INT 10H, resets the delay counter
;	 then chains to normal Video I/O processing
;
VIDEO_IO_INTERCEPT PROC NEAR
		ASSUME CS:SCREEN_SAV,DS:NOTHING
		PUSH	AX
		MOV	AX,DELAY_VALUE		;RESET,
		MOV	DELAY_COUNTER,AX	;  DELAY COUNTER
		POP	AX
		JMP	BIOS_VIDEO_INT		;CHAIN TO VIDEO I/O INTERRUPT
						; PROCESSING
VIDEO_IO_INTERCEPT	ENDP
;
; Subroutine to Turn Monochrome Adapter Cursor ON or OFF
;
CURSOR_SET	PROC	NEAR
		ASSUME	CS:SCREEN_SAV,DS:DATA
		MOV	DX,ADDR_6845_MONO	;SET TO WRITE ADDRESS REGISTER,
		MOV	AL,REG_10		;  SELECT CURSOR START REGISTER
		OUT	DX,AL			;  OUTPUT REGISTER SELECTION
		INC	DX			;POINT TO 6845 DATA REGISTER
		MOV	AL,CH			;GET CURSOR START VALUE, THEN
		OUT	DX,AL			;  SET START REGISTER
		DEC	DX			;POINT BACK TO ADDRESS REGISTER
		MOV	AL,REG_11		;  SELECT CURSOR END REGISTER
		OUT	DX,AL			;  OUTPUT REGISTER SELECTION
		INC	DX			;POINT AGAIN TO DATA REGISTER
		MOV	AL,CL			;GET CURSOR END VALUE, THEN
		OUT	DX,AL			;  SET END REGISTER
		RET
CURSOR_SET	ENDP
		PAGE
;
; Initialize Screen Save Program and Make Resident
;
INIT_PROC	PROC	NEAR
		ASSUME	DS:INT_VECTORS
		MOV	AX,INT_VECTORS
		MOV	DS,AX
		PUSH	ES
		CLI
		LES	AX,KB_INT		;SAVE KB_INT
		MOV	BIOS_KB_INT,AX		;  POINTERS TO
		MOV	BIOS_KB_INT[2],ES	;      BIOS KEYBOARD ROUTINE
		MOV	KB_INT,OFFSET KEYBOARD_INTERCEPT  ;SET KEYBOARD INT
		MOV	KB_INT[2],CS			  ;  TO POINT HERE
;
		LES	AX,VIDEO_INT		;SAVE VIDEO_INT
		MOV	BIOS_VIDEO_INT,AX	;  POINTERS TO
		MOV	BIOS_VIDEO_INT[2],ES	;      BIOS VIDEO I/O ROUTINE
		MOV	VIDEO_INT,OFFSET VIDEO_IO_INTERCEPT  ;SET VIDEO I/O INT
		MOV	VIDEO_INT[2],CS 		     ;	TO POINT HERE
;
		LES	AX,TIMER_EXIT		;SAVE ANY OTHER USER
		MOV	BIOS_TIMER_EXIT,AX	;  ROUTINE USING
		MOV	BIOS_TIMER_EXIT[2],ES	;      TIMER EXIT
		MOV	TIMER_EXIT,OFFSET TIMER_USER_ROUTINE ;SET TIMER EXIT
		MOV	TIMER_EXIT[2],CS		     ;	TO POINT HERE
;
		CMP	PARM_COUNT,VALID_COUNT	;CHECK FOR OPTIONS
		JNZ	DEFAULT 		;  NONE, USE DEFAULT OF 10 MIN
		MOV	AL,PARM_DATA		;GET DELAY OPTION AND
		AND	AX,000FH		;  CONVERT ASCII TO BINARY
		MOV	BX,DELAY_1_MIN		;LOAD DELAY VALUE FOR 1 MIN
		MUL	BX			;CALCULATE DELAY VALUE
		MOV	DELAY_VALUE,AX		;SAVE DELAY VALUE
		MOV	DELAY_COUNTER,AX	;SET DELAY COUNTER
DEFAULT:	STI
		ASSUME	DS:SCREEN_SAV
		MOV	AX,CS
		MOV	DS,AX
		MOV	DX,OFFSET MESSAGE	;PRINT INTRO
		MOV	AH,9
		INT	21H
		MOV	DX,OFFSET INIT_PROC	;END OF RESIDENT PORTION
		INT	27H			;  TERMINATE AND STAY RESIDENT
INIT_PROC	ENDP
SCREEN_SAV	ENDS
		END	BEGIN
```
{% endraw %}

## SCROLL10.ASM

{% raw %}
```
	page	,132
;------------------------------------------------------------
;
; PROGRAM:
;
;	This is a test program.
;	This routine tests DISP_TEXT which prints a string
;	on the screen without using BIOS interupts.
;
; Author: Malcolm McCorquodale III.
;	  3470 Locke Lane
;	  Houston, Texas 77027
;	  713 - 626 - 4979
;
; Date	: July 1983.
;
;------------------------------------------------------------
;
; BIOS data areas.
;
intdata 	segment at 40h
		org	10h
equip_flag	dw	?		;installed hardware
;----------------------------------
; video display data area
;----------------------------------
		org	49h
crt_mode	db	?	; Current crt mode
crt_cols	dw	?	; Number of columns on screen
crt_len 	dw	?	; Length of regen in bytes
crt_start	dw	?	; Startimg address in regen buffer
cursor_posn	dw	8 dup(?) ; Cursor for each of up to 8 pages
cursor_mode	dw	?	; Current cursor mode setting
active_page	db	?	; Current page being displayed
addr_6845	dw	?	; Base address for active display card
crt_mode_set	db	?	; Current setting of the 3x8 register
crt_pallette	db	?	; Current pallette setting color card
intdata 	ends

;----------------------------------
; myprog's data area.
;----------------------------------
data	segment 'data'
string1 db	100 dup (31h)	; The number 1
string2 db	100 dup (32h)	; The number 2
data	ends

;--------------------------------
; Stack segment
;--------------------------------
stack	segment stack 'stack'
stk	db	24 dup (?)
stack	ends

;----------------------------------------------------
;
; This routine prints a character to the screen
;	without using BIOS interupts.
;
;----------------------------------------------------
code	segment 'code'
	assume	CS:code,DS:data,SS:stack

myprog	proc	far
			; DOS linkage.
	push	ds	; Save return segment address on stack.
	xor	ax,ax	; Zero out ax reg,
	push	ax	;   and place on stack.
	mov	ax,0b800h ;
	mov	ds,ax	 ; Establish addressibility,
			 ;   for source seg reg.
;
; Set up for and simulate a INT 10h code 10
;
	mov	cx,10
biglp:
	push	cx
	mov	ah,0		 ; Write on row AH
	mov	al,0		 ;  column AL
	mov	bh,0		 ;  on page 0
	mov	cx,2000 	 ; Number of chars to write.
	mov	si,160
	call	disp_text

	pop	cx
	loop	biglp

	mov	ah,0		  ; Write on row AH
	mov	al,0		  ;  column AL
	mov	bh,0		  ;  on page 0
	mov	cx,length string2 ; Number of chars to write.
	mov	si,offset string2
	call	disp_text
	ret
myprog	endp

;-------------------------------------------------------------
;
; DISP_TEXT
;
; This routine will print N characters on the screen.
;
; INPUT
;	(ah)	= Row to start printing data on.
;	(al)	= Column to start printing data on.
;	(bh)	= Number of page to use.
;	(cx)	= Number of characters to write.
;	(ds:si) = Address of message to print on screen.
;
; OUTPUT
;	None.
;
;-------------------------------------------------------------
DISP_TEXT	proc	near
	assume	ds:intdata	; Use intdata as data segment.
	sti		; Restore interupts.
	cld		; Set direction forward.
	push	es	; Save registers on stack.
	push	dx
	push	cx
	push	bx
	push	si
	push	di
	push	ds
	push	ax	; save row, column value.

	mov	ax,intdata	; Establish addressibility for
	mov	ds,ax		;   DISP_TEXT procs.
	mov	ax,0b800h	; Color card segment
	mov	di,equip_flag	; Get equipment setting
	and	di,30h		; Isolate CRT switches
	cmp	di,30h		;   Is setting for B&W card?
	jne	skip_bw
	mov	ax,0b000h	;   If B&W reset address.
skip_bw:
	mov	es,ax		; Set up ES to point at video ram areas.
	mov	ah,crt_mode	; Move the CRT mode into ah.
	jmp	write_character ; Jump over Write_Character's subroutines.
DISP_TEXT	endp

;--------------------------------------------------------------------
;
; FIND_POSITION
;
;	These routines convert the row and column contained in AX
;	to the offset required for screen memory. (The regen buffer).
;	This routine works for alphanumeric modes.
;
; INPUT
;	ax = row, column position for characters.
;
; OUTPUT
;	ax = offset of char position in regen buffer.
;
;--------------------------------------------------------------------

Find_position	proc	near
	push	cx
	mov	cl,bh		; display page to cx
	xor	ch,ch
	xor	bx,bx		; Assume screen 0.
	jcxz	no_page
page_loop:			; If we are not on screen 0 then
	add	bx,crt_len	;    adjust bx for the page we're on.
	loop	page_loop
no_page:

	push	bx		; Save work register
	mov	bx,ax
	mov	al,ah		; Move rows to al.
	mul	byte ptr crt_cols	; Determine # of bytes to row.
	xor	bh,bh
	add	ax,bx		; Add in column value.
	sal	ax,1		; Times 2 for attribute bytes.
	pop	bx		; Restore work register

	add	bx,ax		; Add to start of screen buffer.
	pop	cx
	ret
find_position	endp

;----------------------------------------------------------------------
;
; WRITE_CHARACTER
;
;	This routine writes the characters at
;	the calculated cursor position, with attribute unchanged.
;
;	This procedure could be changed to write the attribute
;	byte also. This would require changing the MOVSB instruction
;	to a MOVSW instruction as well as deleting the INC DI
;	instruction that follows it.
;
;----------------------------------------------------------------------

write_character proc	near
	cmp	ah,4		; Is this graphics ?
	jc	begin
	cmp	ah,7		; Is this the b&w card ?
	je	begin
	pop	ax		; Throw away ax,
	ret			;   and abort.
begin:
	pop	ax		; Restore row and column.
	call	find_position	; Calculate address at which to
	mov	di,bx		;   put text, and put it in di.
;
;------Wait for horizontal retrace.
;
wait_retrace:
	mov	dx,addr_6845	; Get base address of 6845 screen controller,.
	add	dx,6		;     and point at 6845 status port.
	pop	ds		; Restore users Data segment so we can
	assume	ds:data 	;	  find and print his data.
wait_low:
	in	al,dx		; Get status.
	test	al,1		; Is it low ?
	jnz	wait_low	; Wait until it is.
	cli			; Mask out interupts.
wait_high:
	in	al,dx		; Get status.
	test	al,1		; Is it high ?
	jz	wait_high	; Wait until it is.
	movsb			; Put the the char/attr
	inc	di		; Bump pointer past attribute byte.
	inc	si		; Bump pointer past attribute byte.
	loop	wait_low	;   as many times as requested.
;
;  Return to caller.
;
	sti		; reallow interupts
	pop	di	; recover registers and segments
	pop	si
	pop	bx
	pop	cx
	pop	dx
	pop	es
	ret
write_character endp

code	ends
	end
```
{% endraw %}

## SKELETON.ASM

{% raw %}
```
	page	,132

sseg	segment stack 'stack'
	db	64 dup('stack   ')
sseg	ends

dseg	segment 'data'
dseg	ends

cseg	segment 'code'
	assume	cs:cseg,ds:dseg,ss:sseg,es:dseg
p1	proc	far
	push	ds	; Linkage.
	xor	ax,ax
	push	ax

	ret		; Return to caller.
p1	endp
cseg	ends
	end
```
{% endraw %}

## SL.ASM

{% raw %}
```

;---------------------------------------------------------------
;
; Scroll the screen by telling the 6845 that the screen
; begins a line later.
;
;  FUNCTION:
;		This is a test program, which scrolls the screen
;
;  Author: Malcolm McCorquodale III.  Summer 1983.
;	   3470 Locke Lane
;	   Houston, Texas 77027
;	   713 - 626 - 4979
; Copyright 1983.
;
;---------------------------------------------------------------
	PAGE	,132
DATA	SEGMENT AT 40H
	org	4ah
CRT_COLS	DW	?
	org	4eh
CRT_START	DW	?
	org	50h
CURSOR_POSN	DW	8 DUP(?)
	org	63h
ADDR_6845	DW	?
DATA	ENDS

CODE	SEGMENT 'CODE'
	ASSUME	CS:CODE,DS:DATA

MAIN	PROC	FAR
	PUSH	DS	; DOS linkage.
	XOR	AX,AX
	PUSH	AX
	MOV	AX,DATA    ; Establish addressibility for low memory.
	MOV	DS,AX
	MOV	CX,10
LP:
	PUSH	CX
	CALL	SCROLL
	POP	CX
	LOOP	LP

	RET
MAIN	ENDP

;------------------------------------------------------------------------
;
; This routine outputs the CX register to the 6845
; registers at [AH] and [AH+1].
;
;------------------------------------------------------------------------
OUTPUT_TO_6845	PROC	NEAR
	MOV	DX,ADDR_6845	; Address of 6845 Address register to DX.
	MOV	AL,AH		; Get register number into AL.
	OUT	DX,AL		; Tell 6845 what register to write to.

	INC	DX		; Point to Data Register
	MOV	AL,CH		; Output <CH> to 6845 register addressed
	OUT	DX,AL		;    by DX.

	DEC	DX
	MOV	AL,AH
	INC	AL		; Point to other data register.
	OUT	DX,AL		; Tell 6845 what register to write to.

	INC	DX		; Point to data register.
	MOV	AL,CL		; Output <CL> to register addressed
	OUT	DX,AL		;    by DX.

	RET
OUTPUT_TO_6845	ENDP

;------------------------------------------------------------------------
;
; Set cursor position,
; INPUT: AX has ROW/COLUMN for cursor.
;
;------------------------------------------------------------------------
SET_CURSOR	PROC	NEAR
	MOV	CX,AX		; Save Row / Col.
	MOV	AL,AH
	MUL	BYTE PTR CRT_COLS	; Determine bytes per row.
	XOR	CH,CH		; Zap 'saved' rows.
	ADD	CX,AX		; Add in column value.
	SHR	CX,1		; *2 for attribute bytes.
	ADD	CX,CRT_START	; Add offset to begining of screen to offset
				;   into screen.
	SAR	CX,1		; /2 for attribute bytes.
	MOV	AH,14
	CALL	OUTPUT_TO_6845
	RET
SET_CURSOR	ENDP

;----------------------------------------------------------------
; SCROLL
;	This routine scrolls the screen by telling the 6845 that the
;	screen begins a line later.
; INPUT
;	None.
; OUTPUT
;	The 6845 is reset to display a new page starting one line
;	later.
;------------------------------------------------------------------------
SCROLL	PROC	NEAR

	MOV	AX,CRT_START	; Get start of screen.
	ADD	AX,CRT_COLS	; Increment by number of columns.
	MOV	CRT_START,AX	; Save screen start address.
	SAR	CX,1		; Divide columns by 2 for 6845 handling.
	MOV	AH,12		; 6845 register 12 = start address.
	CALL	OUTPUT_TO_6845	; Output screen starting address to 6845.

	MOV	AX,[OFFSET CURSOR_POSN]     ; Get cursor for this page.
	CALL	SET_CURSOR	; Set the cursor position.
	RET
SCROLL	ENDP
CODE	ENDS
	END
```
{% endraw %}

## SPEDUPDK.ASM

{% raw %}
```

	 TITLE	 'SPEED - Adjust Diskette Parameters'

; Adapted from SPEED411 and from "Inside the IBM PC",
; by Peter Norton, pages 138-139.
;
; At location x'78' is a pointer to the diskette
; parameter table. This program changes the first
; value, the Step Rate Time, which results in a
; quieter and somewhat faster running drive.
;
; The third byte of the table specifies the motor
; turn off delay time. It is changed from 37 msec
; to 200 msec, which results in fewer start-up
; operations.
;
; To install:
;     MASM SPEED;
;     LINK SPEED;
;     EXE2BIN SPEED.EXE SPEED.COM
;     DEL SPEED.EXE
;     SPEED
; The program can be run again without harm.
;
CSEG	 SEGMENT PARA PUBLIC 'CODE'
	 ASSUME  CS:CSEG,DS:CSEG,ES:CSEG
	 ORG	 100H
SPEED	 PROC	 FAR
	 PUSH	 DS			 ;save for linkage
	 XOR	 AX,AX			 ;clear for return
	 PUSH	 AX			 ;put in stack
;
	 PUSH	 DS			 ;Modify diskette parameters
	 MOV	 DS,AX			 ;Offset into disk table
	 LDS	 DI,DWORD PTR DS:78H	 ;Addr of disk table
	 MOV	 BYTE PTR [DI],239	 ;Modify step rate
	 MOV	 BYTE PTR [DI+2],200	 ;And motor stop delay
	 INT	 13H			 ;Reset diskette system
	 POP	 DS
;
	 INT	 20H
;
SPEED	 ENDP
CSEG	 ENDS
	 END	 SPEED
```
{% endraw %}

## TABS.ASM

{% raw %}
```
r
Title   TABS - Align ASCII File
        Page    82,132
        Comment | Version 1.2, April 27, 1984

TABS Command
-----------------

Purpose:   Replace blanks with TAB character(s).

Format:    TABS  d:input.ext  d:output.ext

Remarks:   Any TAB characters found are first expanded. Thus, if TABS
        appear within quoted strings - out of context - they will
        be expanded incorrectly.

        In replacing blanks with tabs, quoted strings are ignored.
        The maximum logical record size is 255, see MAXREC equate.
        Defacto tab columns are 9,17,25,...

        V. Buerg, March, 1984. For public domain use.

-----------------                                       |

Cseg    Segment Public Para 'CODE'
        Assume  CS:Cseg,DS:Cseg,ES:Nothing

Tabs    Proc    Far
        Push    DS                      ;DOS convention
        Sub     AX,AX
        Push    AX
        Mov     CS:Stk_Top,SP           ;Save stack ptr to insure return
        Mov     AH,30h
        Int     21h                     ;Verify DOS 2.0 or later
        Mov     DX,Offset Sorry
        Cmp     AL,2
        Jb      Error

        Call    GetFile                 ;Get file names

        Call    OpenIn                  ;Open input

        Call    OpenOut                 ;Open output

        Call    Inform                  ;Display "cooking" message

        Call    GenTab                  ;Generate tabs

        Call    Flush                   ;Empty the output buffer

        Mov     DX,Offset EofMsg        ;Say END-OF-FILE
Error:  Mov     SP,Stk_Top              ;Insure proper return
        Mov     AH,9                    ;Print any message
        Int     21h

        Call    Close                   ;Close files

        Ret                             ;Return to DOS
        Page

Buflen  Equ     16*1024                 ;I/O buffer size
Maxrec  Equ     255                     ;Longest logical record

S_Quote Equ     34                      ;Single quote
D_Quote Equ     39                      ;Double quote
Tab     Equ     9
Lf      Equ     10
Cr      Equ     13
Eof     Equ     1Ah

Rec     Db      Maxrec Dup (0)          ;Current record
Rlen    Dw      0                       ;Current record length
Sw      Db      0                       ;Number of blanks skipped
Qsw     Db      0                       ;Quote switch
Stk_Top Dw      0                       ;SP at entry

MsgIn   Db      Cr,Lf,'Enter INPUT file name>  $'
Msg1    Db      Cr,Lf,'Input failed to open>'
InKey   Db      32,32                   ;Keyboard buffer
Input   Db      64 Dup (0),0,'$'        ;Drive:path\name.ext
IHandle Dw      0                       ;Input file handle
Ilen    Dw      0                       ;Input block length
Iptr    Dw      0                       ;Offset to next char

MsgOut  Db      Cr,Lf,'Enter OUTPUT file name> $'
Msg2    Db      Cr,Lf,'Output failed to open>'
OutKey  Db      32,32
Output  Db      64 Dup (0),0,'$'
OHandle Dw      0                       ;Output file handle
Olen    Dw      0                       ;Output block size
Optr    Dw      0                       ;Offset to next char

Sorry   Db      Cr,Lf,'Sorry, PC DOS Version 2 required',Cr,Lf,'$'
Msg3    Db      Cr,Lf,'I/O error reading',Cr,Lf,'$'
Msg4    Db      Cr,Lf,'I/O error writing',Cr,Lf,'$'
Cooking Db      Cr,Lf,'TABBING:  $'
Mark    Db      ' => $'
EofMsg  Db      Cr,Lf,'End of File',Cr,Lf,'$'
NewLine Db      CR,LF,'-$'

Code2   Db      'File not found $'
Code3   Db      'Path not found $'
Code4   Db      'Too many files $'
Code5   Db      'Access denied  $'
        Page

        ;       Replace blanks with tabs

GenTab  Proc    Near
Loop:   Call    GetRec                  ;Get a record
        Mov     CX,Rlen                 ; its length
        Sub     BX,BX                   ;Output column
        Mov     Sw,0                    ;No blanks yet
        Mov     Qsw,0                   ;No quotes yet
        Or      CX,CX                   ;Any data in record?
        Jnz     Set1
        Jmp     Null                    ; no, just CR-LF

Set1:   Mov     SI,Offset Rec           ;Look for blanks and
Wloop:  Lodsb                           ; replace strings of blanks
        Inc     BX                      ; with tab characters
        Cmp     AL,D_Quote              ;Don't count blanks
        Jne     Chk1                    ; within single or double
        Xor     Qsw,2                   ; quoted strings
        Jmp     Chk2

Chk1:   Cmp     AL,S_Quote              ;Insert TABs for any
        Jne     Chk3                    ; blanks skipped before
        Xor     Qsw,1                   ; a quote
Chk2:   Cmp     Sw,0                    ;Must re-insert
        Je      Check                   ; any blanks skipped
        Jmp     Insert                  ; if not enough for a TAB

Chk3:   Cmp     AL,' '                  ;Tis a blank?
;       Jmp     Check                   ;for DETAB
        Jne     Check                   ; no, see if eof
        Test    Qsw,3                   ;Within quotes?
        Jnz     Check
        Inc     Sw
        Test    BL,07h                  ;Ready for a tab?
        Jnz     Tloop                   ; no, keep going
        Mov     AL,Tab                  ; yes, send one
        Jmp     Copy

Check:  Cmp     AL,Eof                  ;End of file?
        Je      Done                    ; yes, all done
;       Jmp     Copy                    ;for DETAB
        Test    Qsw,3                   ;When a non-blank is
        Jnz     Copy                    ; encountered, insert a TAB
        Cmp     Sw,0                    ; if there were blanks
        Je      Copy                    ; before it
        Mov     DX,BX
        Dec     DL
        Test    DL,07h                  ;If the non-blank is not
        Jnz     Insert                  ; in a TAB column, then
        Push    AX                      ; keeps all the blanks
        Mov     AL,Tab
        Call    PutChar
        Pop     AX
        Jmp     Copy

Insert: Push    AX                      ;Insert any blanks that
        Mov     DL,Sw                   ; didn't line up on
Blanks: Cmp     DL,1                    ; a TAB column
        Jb      None
        Mov     AL,' '
        Call    PutChar
        Dec     DL                      ;Decr insert count
        Jmp     Blanks                  ; and continue

None:   Pop     AX                      ;Get char back
Copy:   Call    PutChar                 ; and write it
        Mov     Sw,0                    ;Ind not blank
Tloop:  Loop    Wloop
Null:   Mov     AL,Cr                   ;Append CR
        Call    PutChar
        Mov     AL,Lf                   ; and LF
        Call    PutChar
        Jmp     Loop
Done:   Ret
GenTab  Endp
        Page

        ;       Build a logical record

GetRec  Proc    Near
        Push    DI
        Sub     DI,DI                   ;Target record offset
        Mov     Rlen,0                  ; and length
        Mov     Qsw,0                   ;Quote indicator

Get1:   Call    GetChar                 ;Build up a logical record
        Cmp     AL,Cr                   ; by looking for a CR or LF
        Je      Get1                    ; as end-of-record
        Cmp     AL,Lf
        Je      Get7
        Cmp     AL,S_Quote              ;Don't expand tabs
        Jne     Get2                    ; found within a
        Xor     Qsw,1                   ; quoted string
Get2:   Cmp     AL,D_Quote
        Jne     Get3
        Xor     Qsw,2
Get3:   Cmp     AL,Tab                  ;Is it TAB?
        Jne     Get5                    ; no, pass it
        Test    Qsw,3                   ;Within quotes?
        Jnz     Get5                    ; yes, pass it
Get4:   Mov     Rec[DI],' '             ;Expand embedded tabs
        Inc     DI                      ; with blanks
        Test    DI,0007h
        Jz      Get1
        Jmp     Get4

Get5:   Mov     Rec[DI],AL              ;Build the record by
        Inc     DI                      ; copying each character
        Cmp     DI,Maxrec               ; or TABs expanded to blanks
        Jae     Get6
        Cmp     AL,Eof                  ;Is it EOF?
        Je      Get6                    ; yes, all done
        Jmp     Get1                    ; no, continue
Get6:   Mov     Rlen,DI                 ;Final record length
        Pop     DI
        Ret

Get7:   Cmp     Rec-1[DI],' '           ;Strip trailing blanks
        Jne     Get6
        Dec     DI
        Jz      Get6
        Jmp     Get7

GetRec  Endp
        Page
        ;       Extract one char from record

GetChar Proc    Near                    ;Read char into AL
        Push    CX
        Push    SI
Read1:  Cmp     Ilen,0                  ;Any in buffer?
        Je      Read                    ; no, read next block
        Mov     SI,Iptr                 ; yes, get offset in buf
        Push    DS
        Mov     AX,Seg InBuf            ;Copy a char from the
        Mov     DS,AX                   ; input (segment) buffer
        Lodsb
        Pop     DS
        Mov     Iptr,SI                 ;Offset for next one
        Dec     Ilen                    ;Decr buffer size left
        Jmp     Read4                   ; and return with AL

Read:   Mov     BX,IHandle              ;Read a block of data
        Mov     CX,BufLen               ; into Input (segment) buffer
        Sub     DX,DX
        Push    DS
        Mov     AX,Seg InBuf
        Mov     DS,AX
        Mov     AH,3Fh
        Int     21h
        Pop     DS
        Mov     Iptr,0                  ;Reset buffer ptr
        Mov     Ilen,AX                 ; and length
        Jc      Read2
        Or      AX,AX                   ;Anything read?
        Jnz     Read1                   ; yes, pick it up
        Mov     AL,Eof                  ; no, return EOF
        Jmp     Read4

Read2:  Mov     DX,Offset Msg3          ;Say I/O ERROR
        Jmp     Error

Read4:  Pop     SI
        Pop     CX
        Ret
GetChar Endp
        Page

        ;       Block output records

PutChar Proc    Near                    ;Write from AL
        Push    AX
        Push    BP
        Push    BX
        Push    CX
        Push    DI
        Push    DX
        Mov     DI,Optr                 ;Offset in buffer
        Mov     DX,Seg OutBuf
        Push    ES                      ;Get buffer segment
        Mov     ES,DX
        Stosb                           ;Place into buffer
        Pop     ES
        Inc     Olen                    ;Incr the length
        Mov     Optr,DI                 ; and buffer ptr
        Cmp     Olen,Buflen             ;Full block?
        Jb      Write2                  ; no, return
        Mov     CX,Buflen               ; yes,write it
        Jmp     Write3

Flush:  Push    AX                      ;Write data left over
        Push    BP                      ; in output buffer
        Push    BX
        Push    CX
        Push    DI
        Push    DX
        Mov     CX,Olen                 ;Any left in output?
        Or      CX,CX
        Jz      Write2

Write3: Mov     BX,OHandle              ;Get file handle
        Mov     BP,CX                   ;Save size requested
        Sub     DX,DX
        Push    DS                      ;Set up DS:DX
        Mov     AX,Seg OutBuf           ; in buffer segment
        Mov     DS,AX
        Mov     AH,40h                  ;Write the block
        Int     21h
        Pop     DS
        Mov     Optr,0                  ;Reset buffer ptr
        Mov     Olen,0                  ; and size used
        Jc      Writer                  ;Write OK?
        Cmp     BP,AX                   ;Wrote all data?
        Je      Write2                  ; yes, good
Writer: Mov     DX,Offset Msg4          ; no, say I/O error
        Jmp     Error

Write2: Pop     DX
        Pop     DI
        Pop     CX
        Pop     BX
        Pop     BP
        Pop     AX
        Ret
PutChar Endp
        Page

        ;       Open input file

OpenIn  Proc    Near
        Mov     DX,Offset Input
        Mov     AL,0                    ;For input
        Mov     AH,3Dh                  ;Open a file
        Int     21h
        Jnc     Openi
        Mov     DX,Offset Msg1
        Jmp     OpenErr

Openi:  Mov     IHandle,AX
        Ret
OpenIn  Endp

        ;       Open output file

OpenOut Proc    Near
        Mov     DX,Offset Output
        Sub     CX,CX                   ;Normal file attribute
        Mov     AH,3Ch                  ;Create a file
        Int     21h
        Jnc     Openo
        Mov     DX,Offset Msg2
        Jmp     OpenErr

Openo:  Mov     OHandle,AX
        Ret
OpenOut Endp

        ;       Determine why OPEN failed

OpenErr:Cmp     AL,2                    ;AL has reason code
        Jb      Opene
        Cmp     AL,5
        Ja      Opene
        Sub     BX,BX                   ;Get offset to reason
        Mov     BL,AL                   ; text for open failure
        Mov     CL,4
        Shl     BX,CL
        Mov     AH,9                    ;Say OPEN FAILED
        Int     21h
        Mov     DX,Offset NewLine
        Mov     AH,9
        Int     21h
        Lea     DX,Code2-32[BX]
Opene:  Jmp     Error

        ;       Close input/output

Close   Proc    Near                    ;Close files
        Mov     BX,IHandle              ; input
        Mov     AH,3Eh
        Int     21h
        Mov     BX,OHandle              ; output
        Mov     AH,3Eh
        Int     21h
        Ret
Close   Endp
        Page

        ;       Get file names from command line

GetFile Proc    Near                    ;Get file name(s)
        Push    CS                      ;DS points to PSB
        Pop     ES                      ;Now ES points to data
        Mov     SI,80h                  ;Point to command line
        Sub     BP,BP                   ;Indicates first or second name
        Sub     CH,CH                   ;The PSP may contain one or two
        Or      CL,Byte Ptr DS:[SI]     ; filenames separated by blanks
        Jz      GetF5
        Lea     DI,ES:Input
        Inc     SI

GetF1:  Lodsb                           ;Copy command line to file names
        Cmp     AL,' '                  ; by skipping leading blanks
        Jne     GetF2                   ; until a CR is found
        Or      BP,BP                   ; or until the length is zero
        Jz      GetF4                   ;If a second blank is found,
        Mov     AX,2400h                ; append zero and dollar sign
        Stosw
        Lea     DI,ES:Output            ; and it starts the second file name
        Jmp     GetF4

GetF2:  Cmp     AL,Cr                   ;Is it CR, end of line?
        Je      GetF5                   ; yes, end of command
        Stosb                           ; no, save in name
        Mov     BP,DI                   ; and indicate data copied
GetF4:  Loop    GetF1

GetF5:  Mov     AX,2400h                ;Append zero and dollar sign
        Stosw
        Mov     AX,CS                   ;When done, set up
        Mov     DS,AX                   ; segment registers

GetF7:  Cmp     Input,0                 ;Any input name?
        Jne     GetF8                   ; yes, try output name
        Mov     DI,Offset MsgIn         ; no, ask for one
        Mov     SI,Offset InKey
        Call    AskName                 ;Get the input file name

GetF8:  Cmp     Output,0                ;Any output name?
        Jne     GetF9                   ; yes, that was easy
        Mov     DI,Offset MsgOut        ; no, ask for it
        Mov     SI,Offset OutKey
        Call    AskName                 ;Get the output name

GetF9:  Cmp     Word Ptr Output+1,003Ah ;If just a drive is given
        Jne     GetFend                 ; for the output,
        Mov     CX,64                   ; use the input filename
        Mov     DI,Offset Output+2
        Mov     SI,Offset Input
        Cmp     Input+1,':'             ;If drive was given for
        Jne     GetF10                  ; input, must skip over it
        Dec     CL
        Dec     CL                      ;Adjust pointers passed drive
        Dec     SI
        Dec     SI
GetF10: Rep     Movsb

GetFend:Ret
GetFile Endp
        Page

        ;       Ask for file name(s)

AskName Proc    Near                    ;Ask for input file name
        Push    DI                      ;Ptr to prompt msg
        Push    SI                      ;Ptr to reply buffer
        Mov     Byte Ptr [SI],64        ;Reply length
Ask1:   Mov     DX,DI
        Mov     AH,9                    ;Print the prompt msg
        Int     21h
        Mov     DX,SI                   ;Read console reply
        Mov     AH,10
        Int     21h
        Sub     BX,BX                   ;If a reply is given,
        Add     BL,1[SI]                ; append a zero as the
        Jz      Ask1                    ; ASCIIZ name stopper
        Mov     Word Ptr 2[SI][BX],2400h
        Mov     Word Ptr 0[SI],'  '     ;Clear error message part
        Pop     SI
        Pop     DI
        Ret
AskName Endp

        ;       Display "cooking" message

Inform  Proc    Near
        Mov     AH,9
        Mov     DX,Offset Cooking
        Int     21h
        Mov     AH,9
        Mov     DX,Offset Input
        Int     21h
        Mov     AH,9
        Mov     DX,Offset Mark
        Int     21h
        Mov     AH,9
        Mov     DX,Offset Output
        Int     21h
        Ret
Inform  Endp

Tabs    Endp


Cseg    Ends

Stk     Segment Byte Stack 'STACK'
        Db      128 Dup (?)
Stk     Ends

InBuf   Segment Public Byte 'DATA'
        Db      Buflen Dup (?)
InBuf   Ends

OutBuf  Segment Public Byte 'DATA'
        Db      Buflen Dup (?)
OutBuf  Ends

        End     Tabs


Press ENTER to continue: 
```
{% endraw %}

## TALK1.ASM

{% raw %}
```
	name	  talk
	page	  66,80
	.lfcond   ;conditional assem
	title	  TALK-dumb terminal
;
;Talk- a dumb terminal emulator
;      for the IBM-PC, illustrates
;      ROM-BIOS asynch. support.
;      copyright (c)1983 RAY DUNCAN
;      May be freely reproduced for
;      non-commercial use.
CR   EQU  0DH			     ;ASCII carriage return
LF   EQU  0AH			     ;ASCII line feed
ESC  EQU  1BH			     ;ASCII escape code
;
ECHO EQU  0			     ;flags conditional assembly 0=full duplex
;								 1=half duplex
COM_PORT EQU 0			     ;set to 0 or 1 0=comm1, 1=comm2.
;
CSEG SEGMENT PARA PUBLIC 'CODE'
;
ASSUME CS:CSEG,DS:DSEG,SS:STACK
;
TALK  PROC FAR			     ;ENTRY POINT FROM DOS
  PUSH	DS			     ;save DS:0000 on stack for return to DOS
  XOR	AX,AX			     ;make data area accessible
  PUSH	AX			     ;
  MOV	AX,SEG DSEG		     ;
  MOV	DS,AX			     ;
  CALL	COM_STAT		     ;Check that modem is on-line by checking
  TEST	AL,20H			     ;the "DATA SET READY" bit in status word.
  JNZ	TALK1			     ;if the bit is on then proceed.
  MOV	DX,OFFSET MSG1		     ;if the bit is off, print a message and
  JMP	TALK6			     ;return to DOS.
;
TALK1:				     ;let the user know the modem is on.
  MOV	AH,15			     ;use "get mode" of rom bios video driver
  INT	10H			     ;to get the number of columns, for CLEAR
  DEC	AH			     ;
  MOV	COLUMNS,AH		     ;
  CMP	AL,7			     ;make sure screen is in text mode
  JE	TALK2			     ;mode 7 ok proceed
  CMP	AL,3			     ;
  JBE	TALK2			     ;mode 0-3 is ok proceed
  MOV	DX,OFFSET MSG2		     ;all else is illegal. return and show
  JMP	TALK6			     ;message.
;
TALK2:				     ;clear screen,reverse video, cursor home.
  MOV	BH,70H			     ;
  CALL	CLEAR			     ;
  CALL	HOME			     ;
;
;******************************************************************************
;		 THIS IS THE MAIN BODY OF THE PROGRAM
;******************************************************************************
;
TALK3:	CALL PC_STAT		     ;check for keybrd buffer w/ character
  JZ	TALK4			     ;Nope!
  CALL	PC_IN			     ;read character from keyboard.
  CMP	AL,ESC			     ;is it the ESCape key?
  JE	TALK5			     ;Yes, it is, lets exit this turkey!
  IF	ECHO			     ;CONDITIONAL if echo = 0 then dont
  PUSH	AX			     ;assemble this.
  CALL	PC_OUT			     ;save character, send it to display
  POP	AX			     ;restore character.
ENDIF				     ;END CONDITIONAL
  CALL	COM_OUT 		     ;write the character to the comm port
;
TALK4:	CALL COM_STAT		     ;Check for character in the comm port
  JZ	TALK3			     ;No? loop
  CALL	COM_IN			     ;read character from comm port
  CALL	PC_OUT			     ;display it
  JMP	TALK3			     ;start from TALK3 and do it again
;
TALK5:				     ;EXIT fom talk1,
  MOV	BH,07H			     ;restore normal video
  CALL	CLEAR			     ;clear screen
  CALL	HOME			     ;set cursor upper left
  MOV	DX,OFFSET  MSG3 	     ;point to sign off message
;
TALK6:MOV AH,9			     ;call function 9 to display "GOOD BYE..."
  INT	21H			     ;do it.
RET				     ;Now return to dos
;
TALK ENDP			     ;
;
COM_STAT PROC NEAR		     ;use ROM BIOS function 3
  MOV	DX,COM_PORT		    ;to get
  MOV	AH,3			     ;comm port status
  INT	14H			     ;
  TEST	AH,098H 		     ;check error flags for time_out, break,
  JNZ	COM_ERR 		     ;or frame error. error detected, then beep
;
;
COM_STAT1:			     ;test data ready bit,
  TEST	AH,1			     ;Z flag = 0 if data waiting
RET				     ;return
;
;
COM_ERR:PUSH AX 		     ;error detected
  MOV	AL,7			     ;set 7 for beep
  CALL	PC_OUT			     ;beep it
  POP	AX			     ;return comm status
  JMP	COM_STAT1		    ;
COM_STAT ENDP			     ;
;
COM_IN PROC NEAR		     ;use ROM BIOS function 2 to get character
  MOV	DX,COM_PORT		    ;
  MOV	AH,2			     ;
  INT	14H			     ;
RET				     ;
COM_IN ENDP			     ;
;
COM_OUT PROC NEAR		     ;write the character in AL
  MOV	DX,COM_PORT		    ;to the comm port. DX destroyed
  MOV	AH,1			     ;use ROM BIOS function 1 to
  INT	14H			     ;send character
RET				     ;
COM_OUT ENDP			     ;
;
PC_STAT PROC NEAR		     ;read status of keyboard
  MOV	AL,IN_CHAR		     ;Z=0 if character waiting
  OR	AL,AL			     ;Z=1 if empty
  JNZ	PC_STAT1		     ;if character waiting just return w/status
  MOV	AH,6			     ;otherwise call DOS to determine status
  MOV  DL,0FFH			    ;
  INT	21H			     ;
  JZ	PC_STAT1		     ;jump if nothing ready
  MOV	IN_CHAR,AL		     ;got a character, save it for PC-IN
;
PC_STAT1:			     ;return with status
RET				     ;
PC_STAT ENDP			     ;
;
PC_IN PROC NEAR 		     ;
  MOV	AL,IN_CHAR		     ;
  OR	AL,AL			     ;any character waiting?
  JNZ	PC_IN1			     ;yes, return it to caller.
  CALL	PC_STAT 		     ;no, try and read a character.
  JMP	PC_IN			     ;
;
PC_IN1: XOR AH,AH		     ;clear the character waiting flag.
  MOV	IN_CHAR,AH		     ;
RET				     ;exit with the character in AL
PC_IN ENDP			     ;
;				     ;
;
PC_OUT PROC NEAR		     ;write the character in AL to the screen
  MOV	DL,AL			     ;use DOS function 6 to send the character
  MOV	AH,6			     ;because it ignores ctrl characters so
  INT	21H			     ;they can be sent to remote system
RET				     ;
PC_OUT ENDP			     ;
;
CLEAR PROC NEAR 		     ;clear display and set it to the attribute
  MOV	DL,COLUMNS		     ;in BH. AX,CX,DX may be destroyed.
  MOV	DH,24			     ;DL,DH = x,y of lower right of window
  MOV	CX,0			     ;CL,CH = x,y of upper left of window
  MOV	AX,600H 		     ;AH=6 for scroll or intialize AL=0 for #
  INT	10H			     ;to scroll. Call ROM BIOS video driver
RET				     ;
CLEAR ENDP			     ;
;
HOME PROC NEAR			     ;
  MOV	DX,0			     ;DL,DH = x,y for cursor both = 0
  MOV	BH,0			     ;BH = video page
  MOV	AH,2			     ;function 2= set cursor
  INT	10H			     ;call ROM BIOS video driver
RET				     ;
HOME ENDP			     ;
;
CSEG ENDS			     ;
;
;
DSEG SEGMENT PARA'DATA'              ;
  IN_CHAR DB 0			     ;stores kybrd input character
  COLUMNS DB 0			     ;highest # column in current display mode
;
;
  MSG1	  DB CR,LF,'Check your MODEM!'
	  DB CR,LF,'$'
  MSG2	  DB cr,lf,'Display is TEXT MODE'
	  DB CR,LF,'$'
  MSG3	  DB CR,LF,'Good Bye, Thanks for Calling!'
	  DB CR,LF,'$'
DSEG ENDS
;
;
STACK SEGMENT PARA stack 'stack'
  DB 64 DUP(?)
STACK ENDS
;
;
END TALK

```
{% endraw %}

## UPDIR.ASM

{% raw %}
```
title UP - move up 1 directory level
page 60,132

;++++++++++++++++++++++++++++++
; Abstract:
;    This routine will move the
; user up one directory level. It
; will yield an error message as
; to it's success. The dos errorlevel
; parameter is used for exit. It is
; set to:
; 0 - if the up was successful
; 1 - if the user was at the top of
;     the tree when up was executed.
; 2 - If there was an error in the
;     program.
;------------------------------

; +++
; Author:
;	Jeffrey Spidle
;	Office of Continuing Education
;	Ames,Ia 50011
;	(515)294-6222
;
; Date:
;	11 JAN 84
;
; System:
;	IBM-PC executing PC-DOS 2.0 or
;			 MS-DOS 2.0
; Release:
;	1.1
; ---
;*****************************************
; Instructions:
;   To assemble link and go:
;  Masm up;
;  Link up;
;  Exe2bin up.exe up.com
;  UP
;
; This program is placed in the public domain and
; is not intended for any type of commercial sale.
; Free use and copying of this program is allowed
; provided that no fee is charged for its distribution.
;******************************************
cgroup group code_seg, data_seg
	assume cs:cgroup,ds:cgroup

data_seg	segment 	public
hello		db	'Up ok.$'
cant_go_up	db	'Can',39,'t go up.$'
error		db	'Up Error.$'
start_path	db	'\'
path_name	db	64 dup (0)
data_seg ends

code_seg segment
	org 100h
main	proc	near
	mov	si,offset cgroup:path_name ;address of where to put the
					; current path_name
	mov	dl,0			; default drive request
	mov	ah,47H			; get current path
	int	21H			; call dos to get it
	jnc	ok1			; call ok ?
	jmp	oops			; nope
ok1:	mov	bx,offset cgroup:path_name ; get the begining of the
					; path into bx
	cmp	byte ptr [bx],0 	; if first char of path is a
					; null then we must be at the
					; top of the tree ==> we can't
					; go up from here
	je	cant			; therefore put out a message
	add	bx,64			; get the end of the path area
loop:	cmp	byte ptr [bx],92	; is this a \ char
	je	backslash		; it is
	mov	byte ptr [bx],0 	; no then null it
	dec	bx			; back up a char
	cmp	bx,offset cgroup:path_name ; begining of string?
	jne	loop			; nope go back up
backslash:				; it is or found a \
	mov	byte ptr [bx],0 	; get rid of the backslash
	mov	dx,offset cgroup:start_path
					; have dx point to the new
					; pathname prefaced with a \
	mov	ah,3bH			; chdir call
	int	21H			; call dos to do it
	jnc	ok2			; call ok?
	jmp	oops			; nope
ok2:	mov	dx,offset cgroup:hello
	mov	ah,9
	int	21H
	mov	ax,4c00H		; set errorcode 00
	int	21H

oops:	mov	dx,offset cgroup:error
	mov	ah,9
	int	21H
	mov	ax,4c02H		; set errorcode 02
	int	21H

cant:	mov	dx,offset cgroup:cant_go_up
	mov	ah,9
	int	21H
	mov	ax,4c01H		; set errorcode 01
	int	21H

main	endp
code_seg ends
	end	main
```
{% endraw %}

## UPPATCH.ASM

{% raw %}
```
;up.com patch file	02/20/84
;	The up program is distributed with the Gemini printer equate
;	set to true. This should work with the Epson also.
;
;	For a list of the commands just type UP with nothing else
;	on the command line.
;
;	example of a valid command:
;
;	up uppatch.asm [dl8h]
;
;	The above line will cause the printer to print 8 lines per inch
;	in the compressed print mode with two pages of the file on one
;	page of the paper and cause a big block header page to be printed.
;
;	Set the equate for your printer and assemble this program.
;	If your printer is not listed here enter the values in the same format
;	as shown below.
;
;	Do the following steps to patch in the printer codes:
;
;	ASM UPPATCH;
;	LINK UPPATCH;
;	EXE2BIN UPPATCH UPPACTH.COM
;	DEBUG UP.COM
;	-NUPPATCH.COM
;	-L
;	-RCX
;	cx 009b
;	:3131
;	-NUPGEMINI.COM
;	-W
;	-Q
;
;
TRUE	EQU	0FFFFH
FALSE	EQU	NOT TRUE

OKIDATA EQU	FALSE		;okidata 84 step 2
GEMINI	EQU	TRUE		;10x and also Epson
TI810	EQU	FALSE
;
;
codeseg segment public 'code'

assume cs:codeseg,ds:codeseg,es:codeseg,ss:codeseg

	org	100h
;
begg:
	db	0e9h				;jump intruction
	dw	1fd1h				;start of program
;
	IF	OKIDATA
COMPRESS DB	29,0FFH,0,0,0,0,0,0		;COMPRESS PRINTING 17 CPI
NORMALW  DB	30,0FFH,0,0,0,0,0,0		;NORMAL PRINTING 10 CPI
LINESP8  DB	27,56,0FFH,0,0,0,0,0		;8 LINES PER INCH
LINEPAG8 DB	27,70,56,56,0FFH,0,0,0		;88 LINES PER PAGE
LINESP6  DB	27,54,0FFH,0,0,0,0,0		;6 LINES PER INCH
LINEPAG6 DB	27,70,54,54,0FFH,0,0,0		;66 LINES PER PAGE
SETTOF	 DB	27,53,0FFH,0,0,0,0,0		;SETS TOF
DOUBLEW  DB	31,0FFH,0,0,0,0,0,0		;DOUBLE WIDTH CHARACTER
EGRAPHIC DB	14,0FFH,0,0,0,0,0,0		;ENTER GRAPHIC MODE
XGRAPHIC DB	15,0FFH,0,0,0,0,0,0		;EXIT GRAPHIC MODE
TAB72	 DB	27,9,'072',0DH,0FFH,0           ;SETS TAB AT COLUMN 72
TAB116	 DB	27,9,'116',0DH,0FFH,0           ;SETS TAB AT COLUMN 116
EMPHAS	 DB	27,'H',0FFH,0,0,0,0,0           ;EMPHASIZED PRINTING
OFFEMPH  DB	27,'I',0FFH,0,0,0,0,0           ;TURN OFF EMPHASIZE PRINTING
;
;
;
RESTORE DB	1BH,30H,27,70,54,54,30,27	;RESTORE PRINTER TO NORMAL
	DB	54,27,53,0FFH,0,0,0,0
	DB	0,0,0,0,0,0,0,0
;
LPAGE6	DB	60			;DATA LINES PER PAGE FOR 6
LPAGE8	DB	82			;DATA LINES PER PAGE FOR 8
GRAPHIC DB	78			;GRAPHIC CHARACTER FOR HEADING
GRAPHSP DB	63			;GRAPHIC SPACE FOR HEADING
DOUBCOL DB	70			;NUMBER OF DATA COLUMNS DOUBLE PAGE
DOUBCOLW DB	116			;NUMBER OF DATA COLUMNS DOUBLE WIDE
;
	ENDIF
;
	IF	GEMINI
COMPRESS DB	27,66,3,0FFH,0,0,0,0		;COMPRESS PRINTING 17 CPI
NORMALW  DB	27,66,1,0FFH,0,0,0,0		;NORMAL PRINTING 10 CPI
LINESP8  DB	27,48,0FFH,0,0,0,0,0		;8 LINES PER INCH
LINEPAG8 DB	27,67,88,0FFH,0,0,0,0		;88 LINES PER PAGE
LINESP6  DB	27,50,0FFH,0,0,0,0,0		;6 LINES PER INCH
LINEPAG6 DB	27,67,66,0FFH,0,0,0,0		;66 LINES PER PAGE
SETTOF	 DB	0FFH,0,0,0,0,0,0,0		;SETS TOF
DOUBLEW  DB	14,0FFH,0,0,0,0,0,0		;DOUBLE WIDTH CHARACTER
EGRAPHIC DB	27,62,0FFH,0,0,0,0,0		;ENTER GRAPHIC MODE
XGRAPHIC DB	27,35,0FFH,0,0,0,0,0		;EXIT GRAPHIC MODE
TAB72	 DB	27,68,66,0,0FFH,0,0,0		;SETS TAB AT COLUMN 66
TAB116	 DB	27,68,66,0,0FFH,0,0,0		;SETS TAB AT COLUMN 66
EMPHAS	 DB	27,'G',0FFH,0,0,0,0,0           ;EMPHASIZED PRINTING
OFFEMPH  DB	27,'H',0FFH,0,0,0,0,0           ;TURN OFF EMPHASIZE PRINTING
;
;
;
RESTORE  DB	1BH,64,0FFH,0,0,0,0,0		;RESTORE PRINTER TO NORMAL
	 DB	0,0,0,0,0,0,0,0
	 DB	0,0,0,0,0,0,0,0
;
LPAGE6	 DB	60			;DATA LINES PER PAGE FOR 6
LPAGE8	 DB	82			;DATA LINES PER PAGE FOR 8
GRAPHIC  DB	239			;GRAPHIC CHARACTER FOR HEADING
GRAPHSP  DB	224			;GRAPHIC SPACE FOR HEADING
DOUBCOL  DB	64			;NUMBER OF DATA COLUMNS DOUBLE PAGE
DOUBCOLW DB	64			;NUMBER OF DATA COLUMNS DOUBLE WIDE
;
	ENDIF
;
	IF	TI810
COMPRESS DB	27,'7',0DH,0FFH,0,0,0,0         ;COMPRESS PRINTING 17 CPI
NORMALW  DB	27,'6',0DH,0FFH,0,0,0,0         ;NORMAL PRINTING 10 CPI
LINESP8  DB	27,'5',0DH,0FFH,0,0,0,0         ;8 LINES PER INCH
LINEPAG8 DB	27,'2',88,0DH,0FFH,0,0,0        ;88 LINES PER PAGE
LINESP6  DB	27,'4',0DH,0FFH,0,0,0,0         ;6 LINES PER INCH
LINEPAG6 DB	27,'2',66,0DH,0FFH,0,0,0        ;66 LINES PER PAGE
SETTOF	 DB	0FFH,0,0,0,0,0,0,0		;SETS TOF
DOUBLEW  DB	14,0FFH,0,0,0,0,0,0		;DOUBLE WIDTH CHARACTER
EGRAPHIC DB	0FFH,0,0,0,0,0,0,0		;ENTER GRAPHIC MODE
XGRAPHIC DB	0FFH,0,0,0,0,0,0,0		;EXIT GRAPHIC MODE
TAB72	 DB	27,'3',66,0,0DH,0FFH,0,0        ;SETS TAB AT COLUMN 66
TAB116	 DB	27,'3',66,0,0DH,0FFH,0,0        ;SETS TAB AT COLUMN 116
EMPHAS	 DB	0FFH,0,0,0,0,0,0,0		;EMPHASIZED PRINTING
OFFEMPH  DB	0FFH,0,0,0,0,0,0,0		;TURN OFF EMPHASIZE PRINTING
;
;
;
RESTORE DB	1BH,64,0FFH,0,0,0,0,0		;RESTORE PRINTER TO NORMAL
	DB	0,0,0,0,0,0,0,0
	DB	0,0,0,0,0,0,0,0
;
LPAGE6	DB	60			;DATA LINES PER PAGE FOR 6
LPAGE8	DB	82			;DATA LINES PER PAGE FOR 8
GRAPHIC DB	'#'                     ;GRAPHIC CHARACTER FOR HEADING
GRAPHSP DB	' '                     ;GRAPHIC SPACE FOR HEADING
DOUBCOL DB	64			;NUMBER OF DATA COLUMNS DOUBLE PAGE
DOUBCOLW	DB	64		;NUMBER OF DATA COLUMNS DOUBLE WIDE
;
	ENDIF
;
;	IF THE '[' IS NOT ENTERED IN THE COMMAND LINE THE PROGRAM WILL
;	SEARCH THIS LOCATION FOR A LIST OF OPTIONS. ENTER THE ASCII VALUES
;	OF THE COMMANDS YOU WISH TO DEFAULT TO.
;
;NOTE:
;	IF THE `[` IS ENTERED BUT NO OPTIONS ARE ENTERED THE PROGRAM
;	WILL DEFAULT TO THE FOLLOWING:
;			6 LINES PER INCH
;			10 CPI
;			66 LINES PER PAGE
;			PAGE NUMBERING
;			FILTERING OF FORM FEEDS
;			NORMAL TABS
;			NO INDENT
;			AUTO TIME AND DATE
;
;
;	DEFAULT COMMANDS (UP TO TEN CHARACTERS ALLOWED)
;
;
DEFAULT:
	DB	0,0,0,0,0,0,0,0,0,0	;DEFAULT COMMANDS LOOKED AT
					;IF NO [ ENTERED
;
codeseg ends
	end	begg
;
;
;	For those who do not have the assembler the following
;	locations must be patched. End each escape seq. with a 0ffh
;
;
;memory location	description
;---------------	-----------
;0103			COMPRESS PRINTING 17 CPI
;010B			NORMAL PRINTING 10 CPI
;0113			8 LINES PER INCH
;011B			88 LINES PER PAGE
;0123			6 LINES PER INCH
;012B			66 LINES PER PAGE
╗013│			SETS TOF
;013B			DOUBLE WIDTH CHARACTER
;0143			ENTER GRAPHIC MODE
;014B			EXIT GRAPHIC MODE
;0153			SETS TAB AT COLUMN 66
;015B			SETS TAB AT COLUMN 66
;0163			EMPHASIZED PRINTING
;016B			TURN OFF EMPHASIZE PRINTING
;0173			RESTORE PRINTER TO NORMAL
;018B			DATA LINES PER PAGE FOR 6
;018C			DATA LINES PER PAGE FOR 8
;018D			GRAPHIC CHARACTER FOR HEADING
;018E			GRAPHIC SPACE FOR HEADING
;018F			NUMBER OF DATA COLUMNS DOUBLE PAGE
;0190			NUMBER OF DATA COLUMNS DOUBLE WIDE
;0191			DEFAULT COMMANDS LOOKED AT
;019B			start of the program
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0309

     Volume in drive A has no label
     Directory of A:\

    DOS-EDIT ASM     62209   5-03-84   6:06p
    LIB      EXE     32128   2-18-82
    GETSP    ASM      3947   5-01-84   3:27p
    SCROLL10 ASM      6404   5-15-85   6:17p
    CLOCK    ASM     11059   5-11-85   2:12p
    CLEAR    ASM      1225   7-28-83   1:36p
    SKELETON ASM       287  12-28-83   6:11p
    INITMEM  ASM       683   5-15-85   6:26p
    INIT     ASM       439  12-26-84   4:16p
    DISPTEXT ASM      6203   5-15-85   6:19p
    PRTPATH  ASM       871   1-19-84   9:01p
    PARTBIOS LIS      2611   5-15-85   6:18p
    PAGE     ASM       767   5-15-85   6:15p
    SL       ASM      3104   5-15-85   6:23p
    DISASM   BAS      1312   7-13-84   7:16p
    OPCODE   TXT      2636   7-13-84   7:17p
    COPRNT   ASM      4096   2-21-84   7:06a
    COENDP   ASM       354   5-11-85  11:11p
    CO       DOC      2165   5-11-85   2:14a
    FREE     ASM      5104   5-11-85  10:54p
    FREE     DOC      1141   5-11-85  10:55p
    UPPATCH  ASM      6564   4-18-84  10:52p
    SCRN     ASM     12071   5-11-85   3:02a
    SCRN     DOC      2570   5-11-85   3:03a
    DSK      ASM      1367   5-11-85   3:37a
    LIST80   ASM     10644   5-11-85   4:27a
    UPDIR    ASM      2809   5-11-85   4:18a
    OPCODE   DOC        55   9-01-84  12:21p
    ROMBIOS  ASM      7509   9-23-84   6:46p
    PUT_DEC  ASM      3827  10-15-83   5:20p
    SPEDUPDK ASM      1218   5-11-85   4:47a
    TALK1    ASM      6330   5-11-85   4:54a
    MEMDRV   ASM     10335   5-11-85   5:00a
    MEMDRV   DOC      2496   5-11-85   3:56a
    MORERAM  ASM      7168   1-02-84   1:09a
    CLOCK    DOC      2626   5-11-85   2:40p
    BEEP     ASM       817   5-11-85   4:50p
    NOLF     ASM      4842   4-05-84   8:45a
    TABS     ASM     18304   5-04-84   9:01a
    PUT_DEC  OBJ       242  12-05-83   9:54p
    DISKDIRL ASM     17842   7-31-84  10:03p
    ASM      TXT       779   6-30-83   7:43p
    DOSERROR DOC       641   9-10-83  11:28a
    PASSWORD ASM      3456  10-12-84   4:30p
    TEXT     DOC      2560   2-24-85  11:11a
    TEXT     EXE      9728   2-24-85  11:11a
    OBJSNOOP COM      3072   1-01-80   3:27a
    FILES309 TXT      2923  12-15-88  10:23a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540  12-15-88  10:23a
           50 file(s)     292118 bytes
                            5120 bytes free
