---
layout: page
title: "PC-SIG Diskette Library (Disk #285)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0285/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0285"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "WIZARD SCREEN"

    The WHIZZARD Screen I/O Routines are designed to allow maximum
    performance on the IBM PC.  They can be called from BASIC to increase
    the speed at which text goes to the screen.  Some of the routines will
    NOT work properly on non-IBM PCs.  In particular, the pieces that
    increase print speed for the BASIC Interpreter (See Item 3, below)
    will not operate properly with non-IBM versions of BASIC.  Try the
    software.  If it works on your configuration, great.  If not, the
    source code is on the diskette.
    
    The software on this diskette can be divided:
    
    (1)  WHIZZARD Screen I/O Subroutines. These can be called from BASIC
    to increase the speed at which text gets to the screen.
    (2)  A rational approach to calling assembly routines in BASIC code.
    This approach allows one source version for both interpreter and
    compiler input. The example uses Whizzard Screen I/O Subroutines,
    but any useful assembly routines can be added.
    (3)  Software to accelerate the PRINT statement for interpreted BASIC
    WITHOUT changing the BASIC source code.
    (4)  Software to accelerate the PRINT statement for compiled BASIC
    that uses BASRUN.EXE.  Source code is NOT changed.
    (5)  Software to accelerate the PRINT statement for BASIC compiled /O.
    Source code is NOT changed.
    (6)  Software to demonstrate BASPRINT, COMPRINT, PRSLASHO and ASMBASIC
    (7)  Patch to DOS 2.0  DEBUG  TRACE command to prevent collision between
    external interrupts (like the timer) and the TRACE command
    (8)  Software to allow editing or printing of the source and text files
    shown above despite the presence of tab characters
    
    How to Start: Consult the .DOC and .TXT files for directions and
    documentation.  To run the BASIC programs, consult the directions in
    GETTING STARTED for your configuration.
    
    Suggested Registration:  $5.00
    
    File Descriptions:
    
    XREP     ASM  Repeat some character along the x axis
    YREP     ASM  Repeat some character down the y axis
    BASPRINT ASM  Source to primary module
    PRSLASHO ASM  Source to primary module
    COMPRINT ASM  Source to primary module
    ASMBASIC ASM  Source to primary module
    ZPRINT   ASM  Print a string using the color/attribute given
    SCRLUP   ASM  Scroll some portion of the screen up
    QPRINT   ASM  Quickly print a string at the current location
    CLREOS   ASM  Clear from the current position to the end of the screen
    CLREOL   ASM  Clear from the current position to the end of the line
    BANDDEMO BAS  Source to graphic demo program showing the enhancement
    TIMEDEMO BAS  Source to timing program demonstrating improvement
    DETAB    BAS  Interpreted BASIC program to remove tabs
    SCRLDN   ASM  Scroll some portion of the screen down
    LONGDEMO BAT  Demonstrates all three modules and QPRINT from ASM BAS
    SUBDEMO  BAS  Interpreted BASIC program demonstrating ASMBASIC
    PRSLASHO EXE  Module to be executed after booting the system
    EASYDEMO BAT  BAT file demonstrating compiled routines using PRSLOASHO
    SUBDEMO  EXE  Compiled program
    BANDDEMO EXE  BASIC graphic demo program compiled with the I/O option
    DEBUG20  FIX  PIPELINE input file which can be used to apply the
    ASMBASIC EXE  Sample executable linked with the I/O subroutines
    BASPRINT EXE  Module to be executed after booting the system
    COMPRINT EXE  Module to be executed after booting the system
    ???      OBJ  Object code for .BAS files of the same name (9 files)
    ASMBASIC TXT  How to call assembly routines in BASIC
    SCRNIO   TXT  Explanation of acceleratiing the PRINT statement
    DEBUGFIX TXT  Explanation of the patch to DOS 2.0 DEBUG  TRACE command
    README   TXT  Description of programs
    ??SLASHO BAT  Batch file to compile programs
    BANDNOO  EXE  Basic program
    TIMEPRIN FIL  Information on compiling times
    CLUBWARE DSC  Information on Clubware Software
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ASMBASIC.ASM

{% raw %}
```
COMMENT *

			     CLUBware  (tm)

	 ASMBASIC interfaces assembly language subroutines to the BASIC
		 interpreter.

		   Copyright 1984 Rayhawk Automation N.W. Inc
				  P.O. Box 1427
				  Beaverton, Oregon   97075


	 Method:
	      1) Our Basic code calls the service routines directly
		   CALL QPRINT ( FLAG% , STRING )
	      2) The flag indicates whether we are interpreted or compiled
	      3) Compiled code has the object code for QPRINT linked into it
	      4) Interpreted code has a separate module resident below
		   the BASIC interpreter (this module contains QPRINT)
	      5) Both the interpreted Basic code and the compiled Basic code
		   use an initialization routine to determine whether
		   currently running compiled or interpreted and sets global
		   variable, FLAG, accordingly
	      6) If compiled, basic initialization routine does nothing
	      7) If interpreted, initialization routine performs following
		   steps
		   A) Insert two instruction assembly language subroutine
			into variable SUBINIT
			Two instructions are   INT 67h
					       RET 2
		   B) Make the following assignments
			SEGVALUE% = 0
			QPRINT%   = 1
			ZPRINT%   = 2
			CLREOL%   = 3
			SHELSORT% = 4
			etc
			(Everyone concerned with this project will agree on an
			  ordering and use it consistently.)
		   C) Make repeated calls to SUBINIT
			CALL SUBINIT ( SEGVALUE% )
			CALL SUBINIT ( QPRINT% )
			CALL SUBINIT ( ZPRINT% )
			CALL SUBINIT ( CLREOL% )
			CALL SUBINIT ( SHELSORT% )
		   D) Use the Basic DEFSEG to make our subroutines addressable
			DEFSEG = SEGVALUE%
		   E) Return from initialization
		   F) Implied but not stated is that after return from SUBINIT
			the variable QPRINT% no longer contains 1 but the
			offset within SEGVALUE% where the QPRINT% subroutine
			can be found. Same for other subroutines
									      *


CODE	  SEGMENT PARA PUBLIC 'CODE'
	  ASSUME  CS:CODE,DS:NOTHING,ES:NOTHING,SS:STACK

;_______________________________________________________________________________


;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	   INT 67h	interrupt routine	 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  EXTRN   QPRINT:FAR
	  EXTRN   SCRLDN:FAR
	  EXTRN   SCRLUP:FAR
	  EXTRN   XREP:FAR
	  EXTRN   YREP:FAR
	  EXTRN   CLREOL:FAR
	  EXTRN   CLREOS:FAR
	  EXTRN   ZPRINT:FAR
;	  EXTRN   STDIN:FAR
;	  EXTRN   STDOUT:FAR

TABLE_LEN	  LABEL  WORD
	  DW	  8		       ; eight subroutines so far

	  DW	  5252h 	       ; tag to allow basic to make sure
				       ;  ASMBASIC is resident
; entry point for assembly SUBINT routine

SUBINIT   PROC	  FAR
	  JMP	  SHORT SUB_CODE

SUBROUTINE_TABLE  LABEL  WORD	       ; table of subroutine offsets
	  DW	  OFFSET BAD_CALL      ; 0
	  DW	  OFFSET QPRINT        ; 1
	  DW	  OFFSET SCRLDN        ; 2
	  DW	  OFFSET SCRLUP        ; 3
	  DW	  OFFSET XREP	       ; 4
	  DW	  OFFSET YREP	       ; 5
	  DW	  OFFSET CLREOL        ; 6
	  DW	  OFFSET CLREOS        ; 7
	  DW	  OFFSET ZPRINT        ; 8
;	  DW	  OFFSET STDIN	       ; 9
;	  DW	  OFFSET STDOUT        ; 10

ARG	  EQU	  WORD PTR [BP+12]     ; argument to SUBINIT

SUB_CODE:

	  PUSH	  BP		       ; address the argument
	  MOV	  BP,SP

	  MOV	  SI,ARG	       ; load the address of the argument
	  MOV	  AX,WORD PTR [SI]     ; load the argument itself


;    argument of 0 means return code segment for use in DEFSEG statement

	  CMP	  AX,0		       ; return segment?
	  JA	  PREP_SUB

	  MOV	  AX,SEG CODE	       ; get our segment
	  MOV	  WORD PTR DS:[SI],AX  ; return it to caller
	  JMP	  FAR PTR SUBINIT_DONE

PREP_SUB:


;    non-zero argument means return offset of that subroutine

	  CMP	  AX,TABLE_LEN
	  JBE	  GOOD_ARGUMENT

	  CALL	  FAR PTR BAD_CALL     ; let user know a bad call
	  MOV	  AX,0		       ;  has been made

GOOD_ARGUMENT:

	  SHL	  AX,1		       ; each table entry is 2 bytes long
	  MOV	  BX,AX
	  MOV	  AX,SUBROUTINE_TABLE[BX]     ; load subroutine offset
	  MOV	  WORD PTR DS:[SI],AX	      ; return offset to caller



;    initialization complete, return to caller
;	  stack is cleared by code within basic segment

SUBINIT_DONE:
	  POP	  BP
	  IRET

SUBINIT   ENDP

;_______________________________________________________________________________

BAD_MESSAGE	  LABEL  BYTE
	  DB	  10,13,'An invalid subroutine call was made to subinit.',10,13
	  DB	  'There are only 8 subroutines defined within subinit.',10,13
	  DB	  'A request was made for a subroutine outside of this range.'
	  DB	  10,13,'$'

BAD_CALL  PROC	  FAR

	  PUSH	  DS

	  MOV	  AX,SEG CODE
	  MOV	  DS,AX

	  MOV	  DX,OFFSET BAD_MESSAGE
	  MOV	  AH,09
	  INT	  21h

	  POP	  DS
	  RET

BAD_CALL  ENDP

;_______________________________________________________________________________


ASMBASIC  PROC	  FAR

;					 Establish standard DOS linkage
	  PUSH	  DS		       ; Push addr of Program Segment Prefix
	  XOR	  AX,AX 	       ; Zero AX
	  PUSH	  AX		       ; Push zero onto stack
;					 (offset of INT 20 within PSF)


;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	   take over the INT 67h		 |
;		      | 	   interrupt if not already done	 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  DS,AX 		   ; address low memory
	  LDS	  BX,DWORD PTR DS:[019Ch]  ; load interrupt vector for int 67

	  MOV	  AX,WORD PTR SUBINIT
	  CMP	  AX,WORD PTR DS:[BX]
	  JNE	  NOT_HERE_YET
	  MOV	  AX,WORD PTR SUBINIT+2
	  CMP	  AX,WORD PTR DS:[BX+2]
	  JNE	  NOT_HERE_YET
	  MOV	  AX,WORD PTR SUBINIT+4
	  CMP	  AX,WORD PTR DS:[BX+4]
	  JNE	  NOT_HERE_YET
	  MOV	  AX,WORD PTR SUBINIT+6
	  CMP	  AX,WORD PTR DS:[BX+6]
	  JNE	  NOT_HERE_YET

	  JMP	  SHORT ALREADY_RESIDENT

NOT_HERE_YET:

	  MOV	  AX,SEG ASMBASIC      ; Move our code segment
	  MOV	  DS,AX 	       ; to the data segment register

;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	   take over the INT 67h		 |
;		      | 	   interrupt				 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  DX,OFFSET SUBINIT    ; Load offset of interrupt service mod
	  MOV	  AX,2567h	       ; Prepare for DOS service call type 25
;					 to establish service for INT 05
	  INT	  21h		       ; Ask DOS to establish service

;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	   modify INT 20 into INT 27 in the	 |
;		      | 	   program segment prefix		 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  BYTE PTR ES:[01],27h ; Change INT 20h to INT 27h

;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	6) load address of ending tag into DX	 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  AX,SEG BOTSTACK
	  SUB	  AX,SEG ASMBASIC
	  MOV	  CL,4		       ; prepare for 4 bit shift
	  SHL	  AX,CL 	       ; shift up (convert from seg to abs)
	  ADD	  AX,OFFSET BOTSTACK   ; add address of bottom location
	  ADD	  AX,0103h	       ; Pad offset because DOS measures
;					  offset relative to Program
;					  Segment Prefix
	  MOV	  DX,AX 	       ; leave where DOS will find it

;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	7) use RET FAR to return to DOS and	 |
;		      | 	   leave service routine resident	 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|


ALREADY_RESIDENT:

	  RET

ASMBASIC  ENDP

CODE	  ENDS

;_______________________________________________________________________________

STACK	  SEGMENT PARA STACK 'STACK'
BOTSTACK  LABEL   BYTE
	  DB	  24 DUP('STACK***')
TOPSTACK  DB	  0
STACK	  ENDS

	  END	  ASMBASIC
```
{% endraw %}

## ASMBASIC.TXT

{% raw %}
```
File:  ASMBASIC.TXT		 On: CLUBware Software Diskette #1
Author: Stan Radzio
Copyright (C) 1984. RAYHAWK AUTOMATION, N W, INC.


ASMBASIC represents an improved approach for calling assembly
language routines from IBM PC BASIC. The major improvement is that
this approach allows the same source code to be used by both the
BASIC Interpreter and the BASIC Compiler. Hence, you can debug a
program in the more productive interpreter environment and migrate
them easily to the faster executing compiled environment.

The published approaches in the magazines make it very difficult to
use the same source to both programs.  These approaches involve
storing routines within BASIC arrays or in high memory beyond the
reaches of the interpreter.  ASMBASIC stores the assembly routines in
low memory below the Basic interpreter.

The required subroutines are not loaded with BLOAD or POKE; they are
already resident in memory when the Basic interpreter is invoked.
ASMBASIC is distributed already assembled and linked with eight
assembly language subroutines:

	QPRINT - quickly print a string at the current location
	ZPRINT - print a string using the color/attribute given
	SCRLDN - scroll some portion of the screen down
	SCRLUP - scroll some portion of the screen up
	XREP   - repeat some character along the x axis
	YREP   - repeat some character down the y axis
	CLREOL - clear from the current position to the end of the line
	CLREOS - clear from the current position to the end of the screen

The source to ASMBASIC is included on the CLUBware diskette so that
these subroutines may be replaced with ones of your own choosing or so
that you may add additional subroutines.

The technique is demonstrated in program SUBDEMO.BAS and works like
this:

1) Assemble your utility subroutines.

2) Enter the names of your assembly routines into the subroutine table
   within ASMBASIC.

3) The first name in the table is subroutine 1.
   The second name in the table is subroutine 2.
   Print the table so you won't forget the ordering of names.

4) Assemble ASMBASIC and link it with your assembly language routines.

5) Execute ASMBASIC to make the code resident.	You need only execute
   ASMBASIC once after the system is booted.  However, if you execute
   it more than once, no harm will be done.















File:  ASMBASIC.TXT					    Page 2


   Review SUBDEMO.BAS.	You will see a method which allows the Basic
   program to determine if it is running compiled or interpreted.
   (The interpreter uses 3 bytes for the string descriptor; the
   compiler uses 4 bytes.  Hence, the difference in the offsets of
   successive elements of a string array is either 3 or 4.) If
   SUBDEMO.BAS is running compiled, it will jump to step 11.

   For the steps 6-10, assume you are still developing the code under
   the interpreter.


6) Bring up the Basic interpreter.  Load and run a program with code
   equivalent to SUBDEMO.BAS.  This will check for running under the
   interpreter.  Since it is, it will do the following:

7) Poke a two line subroutine into an array:
      INT 67
      RET
   We call this subroutine SUBINIT.  (Note that ASMBASIC services
   interrupt 67.)

8) Call SUBINIT with an argument of 1 to learn the offset of
   subroutine 1 (the first subroutine in the subroutine table).  Call
   SUBINIT with a 2 to learn the offset of subroutine 2, etc.

     I% = 1		'We want the offset to the first routine
     CALL  SUBINIT(I%)	'SUBINIT will place the offset into I%
     QPRINT = I%	'Copy the offset into variable QPRINT

     I% = 2		'We want the offset to the second routine
     CALL  SUBINIT(I%)	'SUBINIT will place the offset into I%
     SUB2 = I%		'Copy the offset into variable QPRINT

9) After processing all the names in the subroutine table, call
   SUBINIT with an argument of 0 to learn the code segment where
   ASMBASIC has stored your subroutines.

     CODESEG% = 0	'To get the Code Segment, use 0 as input.
     CALL  SUBINIT(CODESEG%)	'SUBINIT will return code segment.

10) Use the Basic DEF SEG statement to make your assembly language
   routines callable.

     DEF SEG = CODESEG%

11) Call the subroutines wherever and whenever you want:

     CALL QPRINT ( FLAG% , MYSTRING$ )
     CALL SUB2( ARG1 , ARG2% , ARG3$ )


   Since steps 6-10 are skipped during execution of the compiled
   version, the above CALL statements are executed as we desire.
   Under the interpreter, QPRINT and SUB2 are treated as VARIABLES.









File:  ASMBASIC.TXT					    Page 3


Some General Comments

An obvious benefit to using ASMBASIC over storing assembly subroutines
in arrays is that the assembly code does not reduce the amount of
memory available for variables and string storage (assuming sufficient
physical memory in the machine).

Assembly language programmers will appreciate the ease with which
assembly routines can be debugged.  Link your new subroutine into
ASMBASIC.  Invoke ASMBASIC to make your routine resident.  Bring up
the Basic interpreter under DOS Debug:

	DEBUG  BASICA.COM

You can find the subroutine table by looking down the interrupt vector
for INT 67h (used to invoke SUBINIT).

	-D 00:19C L4
	0000:019C  2C 00 10 06

The subroutine table is 2 bytes after the address in the interrupt
vector.  In this example:  0610:002C + 2 = 0610:002E

Display the subroutine table.

	-D 0610:002E L10
	0610:002E  19 01
	0610:0030  30 01 B0 02 F0 02 D0 04-30 03 70 02 F0 01

The eight subroutines in this example can be found at

	0610:0119     QPRINT	    1
	0610:0130     SCRLDN	    2
	0610:02B0     SCRLUP	    3
	0610:02F0     XREP	    4
	0610:04D0     YREP	    5
	0610:0330     CLREOL	    6
	0610:0270     CLREOS	    7
	0610:01F0     ZPRINT	    8

Start the interpreter and set breakpoints at the start of the
subroutines you wish to debug:

	-G  610:119


ASMBASIC will not make itself resident more than once after the system
is booted.  If you are modifying and assembling a new subroutine (and
relinking it into ASMBASIC) then you should comment out the:

	  JMP	  SHORT ALREADY_RESIDENT

instruction in ASMBASIC so that each execution of ASMBASIC will make
your latest copy of the subroutine available for debugging.









File:  ASMBASIC.TXT					    Page 4


A subtle benefit of ASMBASIC is easy addressability for local data
segments.  In contrast, assembly routines POKE'd or BLOAD'ed into
memory do not have relocation services performed for them.  For
example, the following subroutine will work with ASMBASIC and will
fail if attempted with POKE.

	LOCLSEG   SEGMENT
		my local data
	LOCLSEG   ENDS

	CODE	  SEGMENT PARA PUBLIC 'CODE'
		  PUBLIC  MYSUB
		  ASSUME  CS:CODE,ES:LOCLSEG

	MYSUB	  PROC	  FAR
		  MOV	  AX,SEG LOCLSEG
		  MOV	  ES,AX
		  rest of subroutine
	MYSUB	  ENDP

	CODE	  ENDS
		  END


The standard way of allowing routines called by BASIC to have their
own data areas has some undesirable aspects.  First, the code must be
linked /HIGH.  Then, it is loaded by the Debugger (who performs the
relocation needed), BSAVE'ed by the interpreter, then BLOAD'ed into
the exact same location by the interpreter when needed.  There is an
incomplete description of this latter method in the back of the BASIC
manual.  Note that the location occupied by such a BLOAD'ed routine is
the same memory location which will hold BASRUN.EXE if the BASIC code
is ever compiled and executed.

For a more reasonable approach, try ASMBASIC.

```
{% endraw %}

## BANDDEMO.BAS

{% raw %}
```bas
10  REM
20  REM BANDDEMO      date: June 16, 1984
30  REM
40  REM Demonstrate advantages of ASMBASIC versus standard BASICA print
50  REM statements.
60  REM
70  REM This program is written for running under BASICA version 2.0,
80  REM with Rayhawk Automation NW  ASMBASIC.EXE previously executed to
90  REM provide assembler interfaces to the IBM PC ROM screen drivers.
100 REM
110 REM Throughput is demonstrated to speed up by a factor of 5 by
120 REM bypassing the BASIC PRINT statement.  Using Rayhawk Automation
130 REM BASPRINT.EXE the same result can be accomplished for interpreted
131 REM BASIC programs.
132 REM
133 REM ****** The real program starts at 2000
135 REM
140 REM If your program just uses PRINT statements just execute
142 REM
144 REM BASPRINT.EXE for interpreted BASIC on the IBM
148 REM COMPRINT.EXE for compiled BASIC, compiled without the /O option
152 REM PRSLASHO.EXE for compiled BASIC, compiled with the /O option
160 REM
162 REM If your interpreted program uses the QPRINT subroutine from ASMBASIC
164 REM then lines 190 and 250 to 860 must be executed in your program.
166 REM ASMBASIC.EXE must be run once every time you boot, ( use AUTOEXEC.BAT),
168 REM the PC.  Then it will be in memory ready to be used by your program.
170 REM If your compiled program uses the QPRINT subroutine then link it using
172 REM QPRINT.OBJ.  This is supplied with the diskette so that you do not need
174 REM the assembler to process QPRINT.ASM.
178 REM
180    DIM A$(20),T$(20)
190    DEFINT S,I
192    DIM IIA(40)
200    KEY OFF
210	FOR I = 1 TO 10
220	   KEY I,""
230	NEXT I
240 REM
242 REM Determine whether we are running compiled or interpreted
244 REM 	     FLAG% = 0	 if interpreted
246 REM 	     FLAG% = 1	 if compiled without /O (needs BASRUN.EXE)
247 REM 	     FLAG% = 2	 if compiled with /O
248 REM 	     FLAG% = 3	 if business basic compiled
249 REM
250   DEF SEG
260   TEST$ = "K"
270   A% = VARPTR(TEST$)
280    B% = PEEK(A%+1) + 256*PEEK(A%+2)
290	 IF CHR$(PEEK(B%)) = "K" THEN FLAG% = 0 : GOTO 360
300    B% = PEEK(A%+2) + 256*PEEK(A%+3)
310	 IF CHR$(PEEK(B%)) <> "K" THEN FLAG% = 3 : GOTO 880
312	  WIDTH 80 : IF PEEK(&H7CC) = 80 THEN FLAG% = 1   ELSE FLAG% = 2
320	   GOTO 880
330 REM
340 REM If interpreted, check that ASMBASIC is resident below the interpreter
350 REM
360  DEF SEG = 0
370  A% = PEEK(&H19C) + 256*PEEK(&H19D) : B% = PEEK(&H19E) + 256*PEEK(&H19F)
380	DEF SEG = B%
390	IF (PEEK(A%-1) = &H52) AND (PEEK(A%-2) = &H52) THEN ASM%=1:GOTO 470
400	  CLS : PRINT TAB(85);"ASMBASIC must be executed once before starting"
410		PRINT TAB(15);"the Basic interpreter"
420	  ASM% = 0
430	  GOTO 880
440 REM
450 REM If interpreted, then get the segment and offset of the utility routines
460 REM
470    DEF SEG
480    DIM INIT%(3)	       ' setup subroutine containing  INT  67h
490    INIT%(1) = &H67CD       '                              RETF 2
500    INIT%(2) = &H2CA
510    INIT%(3) = 0
520    SUBINIT = 0
530 REM
540 REM 	    get the code segment of the utility subroutines
550  SEGVALUE% = 0
560    SUBINIT = VARPTR(INIT%(1)): CALL SUBINIT(SEGVALUE%)
570 REM
580 REM 	    get the offset of the utility subroutines
590  A% = 1
600    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
610	 QPRINT = A%
620  A% = 2
630    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
640	 SCRLDN = A%
650  A% = 3
660    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
670	 SCRLUP = A%
680  A% = 4
690    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
700	 XREP = A%
710  A% = 5
720    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
730	 YREP = A%
740  A% = 6
750    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
760	 CLREOL = A%
770  A% = 7
780    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
790	 CLREOS = A%
800  A% = 8
810    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
820	 ZPRINT = A%
830 REM
840 REM 	    set the segment value for interpreted basic
845 REM 	    this is used by BASIC for all interpreted CALLs to QPRINT,
848 REM 	    SCRLDN, etc. and must be valid prior to each such CALL.
850 REM
860	 DEF SEG = SEGVALUE%
870 REM
880 REM  define some attributes for use throughout the demo
890	 IF FLAG% = 0 THEN GOTO 930 ELSE DEF SEG
900	 ' check for comprint or prslasho, prslasho will be in the demo
910    '  if 40 lines take less than 2 seconds comprint or prslasho is here
915	 CLS   ' first initialize comprint or prslasho if compiled !!!!!!!
920	 STARTTIME$=TIME$
922	 FOR I = 1 TO 40:
923	   LOCATE 1,1:PRINT " TESTING IF COMPRINT OR PRSLASHO ARE PRESENT"
924	 NEXT I
927	 ENDTIME$ = TIME$
928	 GOSUB 2840: IF DIFTIME# < 2! THEN BASPRINT%=1 ELSE BASPRINT% = 0
929 GOTO 1000
930	 DEF SEG = 0  ' interpreted, check for basprint
940	 B02D0% = PEEK(&H2D0):B02D1%=PEEK(&H2D1):B02D2%=PEEK(&H2D2):B02D3%=PEEK(&H2D3)
950 '    PRINT " CHECKING FOR BASPRINT  0:02D0 = ";HEX$(B02D1%);" ";HEX$(B02D0%);" ";HEX$(B02D3%);" ";HEX$(B02D2%)
960	 IF B02D1% = 0 THEN BASPRINT% = 1 ELSE BASPRINT% = 0
962 ' if ASMBASIC has been run, then restore the DEF SEG value so ASMBASIC
964 ' routines can be used
970	 IF ASM% =1 THEN  DEF SEG = SEGVALUE% ELSE DEF SEG
980 REM
990 REM
1000	IF FLAG% = 0 THEN PRINT " INTERPRETED "
1010	IF FLAG% = 1 THEN PRINT " COMPILED WITHOUT /O, NEEDS BASRUN.EXE "
1012	IF FLAG% = 1 THEN PRINT " COMPILED WITH /O "
1020	IF FLAG% = 3 THEN PRINT " BUSINESS BASIC COMPILED "
1030	IF FLAG% = 0 AND ASM% = 0 THEN PRINT " ASMBASIC NOT PRESENT"
1040	IF FLAG% = 0 AND ASM% = 1 THEN PRINT " ASMBASIC PRESENT"
1050	IF FLAG% > 0 AND BASPRINT% = 0 THEN PRINT " COMPRINT OR PRSLASHO ARE NOT PRESENT "
1060	IF FLAG% > 0 AND BASPRINT% = 1 THEN PRINT " COMPRINT OR PRSLASHO ARE PRESENT"
1070	IF FLAG% = 0 AND BASPRINT% = 0 THEN PRINT " BASPRINT NOT PRESENT"
1080	IF FLAG% = 0 AND BASPRINT% = 1 THEN PRINT " BASPRINT PRESENT"
1095  ' while inkey$ <> "":wend
1100  ' input " enter to continue ";junk$
1110  ' CLS : LOCATE 4,4 : INPUT "Would you like the demonstration in color (Y/N)";AA$
1112	AA$="N"
1120	IF AA$ = "Y" OR AA$ = "y" THEN 1320
1130	IF AA$ <> "N" AND AA$ <> "n" THEN 1080
1140 REM
1150 REM	black and white attributes
1160 REM
1170	NORMAL%  = 7   ' normal intensity white on black
1180	BLUE%	 = 7
1190	GREEN%	 = 7
1200	CYAN%	 = 7
1210	RED%	 = 7
1220	MAGENTA% = 7
1230	BROWN%	 = 7
1240	YELLOW%  = 7
1250	WHITE%	 = 15  ' high intensity white on black
1260	LIGHTER% = 7
1270	BLINK%	 = 128
1280	    GOTO 1570
1290 REM
1300 REM	color attributes
1310 REM
1320	NORMAL%  = 7   ' normal intensity white on black
1330	BLUE%	 = 1
1340	GREEN%	 = 2
1350	CYAN%	 = 3
1360	RED%	 = 4
1370	MAGENTA% = 5
1380	BROWN%	 = 6
1390	YELLOW%  = 14
1400	WHITE%	 = 15  ' high intensity white on black
1410 REM
1420 REM  To make a color lighter, logically OR the LIGHTER% with
1430 REM    the color.
1440 REM	     Ex:      ATTRIBUTE% = RED% OR LIGHTER%
1450 REM    will give a light red color.
1460 REM
1470	       LIGHTER% = 8
1480 REM
1490 REM  To make a color blink, logically OR the BLINK% with
1500 REM    the color.
1510 REM	     Ex:      ATTRIBUTE% = RED% OR BLINK%
1520 REM    will give a blinking red color.
1530 REM
1540	       BLINK% = 128
1550 REM
1560 REM
1570 REM
1580 REM
1600 REM
2000 REM *************	The real program starts here
2010 REM
2015 REM Show how slow standard BASIC print statements are.
2020 REM Print A$(1) TO A$(5) in boxes, with origins in the array IIA(40)
2030 REM
2040 REM Then show how fast ASMBASIC routines QPRINT is.  This is also how
2050 REM fast BASPRINT makes the routines
2060 REM
2070 REM If BASPRINT is resident, then do not use A$(1) contents as STANDARD
2080 REM BASIC, use A$ to show how fast BASPRINT is.
2100 RESTORE 2110
2101 IWRITES = 11:IJ=0
2102 FOR I = 1 TO IWRITES:IJ=IJ+1:READ IIA(IJ):IJ=IJ+1:READ IIA(IJ):NEXT I
2110 DATA 7,27,1,1,1,27,1,55,7,55,13,55,19,55,19,27,19,1,13,1,7,1
2125 BLANKIT$=SPACE$(25)
2130 CLS
2135 AA$="HIT ANY KEY TO STOP THE DEMO"
2140 LOCATE 15,27:
2150 IF FLAG%>0 OR ASM% = 1 THEN CALL QPRINT (FLAG%, AA$)  ELSE PRINT AA$;
2190 IF FLAG% = 0 AND BASPRINT% = 0 THEN GOTO 2210
2200 IF FLAG% = 0 AND BASPRINT% = 1 THEN GOTO 3200
2205 IF FLAG% > 0 AND BASPRINT% = 1 THEN GOTO 4200
2206 IF FLAG% > 0 AND BASPRINT% = 0 THEN GOTO 5200
2210 '  interpreted with ASMBASIC present, but BASPRINT is not present
2220 '  this means slow slow BASIC print statements
2230 A$(1)="*************************"
2231 A$(2)="*   GET OFF THE SLOW    *"
2232 A$(3)="*    MERRY-GO-ROUND     *"
2233 A$(4)="* OF INTERPRETED BASIC  *"
2234 A$(5)="*   PRINT STATEMENTS    *"
2235 A$(6)="*************************"
2240 GOSUB 6000 ' use PRINT
2250 IF ASM% = 1 THEN GOSUB 2400 ' set up and use QPRINT if ASMBASIC has run
2255 IF INKEY$ <> "" THEN SYSTEM
2260 GOTO  2210 ' infinite loop
2400 ' SHOW HOW FAST ASMBASIC STATEMENTS ARE
2425 BLANKIT$=SPACE$(25)
2430 A$(1)="*************************"
2431 A$(2)="*      GET ON THE       *"
2432 A$(3)="*      BANDWAGON        *"
2433 A$(4)="* WITH CLUBware ASMBASIC*"
2434 A$(5)="*    QPRINT STATEMENTS  *"
2435 A$(6)="*************************"
2440 IF FLAG% = 0 THEN ILOOP = 5 ELSE ILOOP = 10
2450 FOR IB = 1 TO ILOOP
2460  GOSUB 6200
2470 NEXT IB
2480 RETURN
2840 REM TIMING SUBROUTINE
2850 REM  inputs:  STARTTIME$
2860 REM	    ENDTIME$
2870 REM  output:  DIFTIME#	 time in seconds
2880   SHH#=VAL(LEFT$(STARTTIME$,2))
2890   EHH#=VAL(LEFT$(ENDTIME$,2))
2900   SSS#=VAL(RIGHT$(STARTTIME$,2))
2910   ESS#=VAL(RIGHT$(ENDTIME$,2))
2920   SMM#=VAL(MID$(STARTTIME$,4,2))
2930   EMM#=VAL(MID$(ENDTIME$,4,2))
2940   STIME#=SHH#*3600!+SMM#*60!+SSS#
2950   ETIME#=EHH#*3600!+EMM#*60!+ESS#
2960   DIFTIME#=ETIME#-STIME#
2970   IF DIFTIME# < 0! THEN DIFTIME#= DIFTIME# + 3600! * 24!
2980 RETURN
2990 REM
3200 ' SHOW HOW FAST BASPRINT SPEEDS UP INTERPRETED BASIC PRINT STATEMENTS
3225   BLANKIT$=SPACE$(25)
3230   A$(1)="*************************"
3231   A$(2)="* CLUBware BASPRINT.EXE *"
3232   A$(3)="*       speeds up       *"
3233   A$(4)="*    Interpreted BASIC  *"
3234   A$(5)="*     PRINTs 6 times    *"
3235   A$(6)="*************************"
3250   FOR IB = 1 TO 5
3260	 GOSUB 6000  ' use print statements around the screen
3270   NEXT IB
3280   IF ASM%=1 THEN GOSUB 2400 ' use QPRINT calls around the screen
3300   GOTO 3200 ' infinite loop
3310 REM
4200 ' SHOW HOW FAST PRSLASHO or COMPRINT SPEEDS UP COMPILED BASIC PRINTS
4225   BLANKIT$=SPACE$(25)
4230   A$(1)="*************************"
4231   A$(2)="* CLUBware PRSLASHO.EXE *"
4232   A$(3)="*       speeds up       *"
4233   A$(4)="*     Compiled BASIC    *"
4234   A$(5)="*     PRINTs 6 times    *"
4235   A$(6)="*************************"
4236   IF FLAG% = 1 THEN A$(2)="* CLUBware COMPRINT.EXE *"
4250   FOR IB = 1 TO 5
4260	 GOSUB 6000 ' use print statements around the screen
4262   IF INKEY$ <> "" THEN SYSTEM
4270   NEXT IB
4275   GOSUB 2400   ' use QPRINT statements around the screen
4285   IF INKEY$ <> "" THEN SYSTEM
4300   GOTO 4200 ' infinite loop
4310 REM
5200 ' compiled BASIC, COMPRINT or PRSLASHO not present.
5220 ' this means slow slow BASIC print statements
5230   A$(1)="*************************"
5231   A$(2)="*   GET OFF THE SLOW    *"
5232   A$(3)="*     MERRYGOROUND      *"
5233   A$(4)="*   OF COMPILED BASIC   *"
5234   A$(5)="*   PRINT STATEMENTS    *"
5235   A$(6)="*************************"
5240   GOSUB 6000 ' use PRINT
5250   GOSUB 2400 ' set up and use QPRINT
5255   IF INKEY$ <> "" THEN SYSTEM
5260 GOTO  5200 ' infinite loop
5270 REM
6000 REM  ' use standard BASIC PRINT statements - slow, slower, slowest
6036   FOR I = 1 TO IWRITES
6040	 IROW = IIA(I+I-1)
6050	 ICOL = IIA(I+I)
6060	 FOR IJ = 1 TO 6:LOCATE IROW,ICOL:PRINT A$(IJ);:IROW = IROW+1:NEXT IJ
6080	 IK = I-1
6090	 IF I = 1 THEN IK = IWRITES
6092	 IF I = 2 THEN GOTO 6150 ' leave the center statement
6100	 IROW = IIA(IK+IK-1)
6110	 ICOL = IIA(IK+IK)
6120	 FOR IJ = 1 TO 6:LOCATE IROW,ICOL:PRINT BLANKIT$;:IROW = IROW+1:NEXT IJ
6142	 IF INKEY$ <> "" THEN SYSTEM
6150   NEXT I
6160 RETURN
6170 REM
6200 REM  ' use ASMBASIC QPRINT statements
6236   FOR I = 1 TO IWRITES
6240	 IROW = IIA(I+I-1)
6250	 ICOL = IIA(I+I)
6254	 FOR IJ = 1 TO 6:LOCATE IROW,ICOL:CALL QPRINT (FLAG%, A$(IJ)):IROW=IROW+1:NEXT IJ
6280	 IK = I-1
6290	 IF I = 1 THEN IK = IWRITES
6292	 IF I = 2 THEN GOTO 6350 ' leave the center statement
6300	 IROW = IIA(IK+IK-1)
6310	 ICOL = IIA(IK+IK)
6320	 FOR IJ = 1 TO 6:LOCATE IROW,ICOL:CALL QPRINT (FLAG%, BLANKIT$):IROW=IROW+1:NEXT IJ
6342	 IF INKEY$ <> "" THEN SYSTEM
6350   NEXT I
6360 RETURN
```
{% endraw %}

## BASPRINT.ASM

{% raw %}
```
COMMENT *

			     CLUBware  (tm)

	  BASPRINT - Enhancement to the Basic Interpreter Print statement

		   Copyright 1984 Rayhawk Automation N.W. Inc
				  P.O. Box 1427
				  Beaverton, Oregon   97075
									      *

SCRDSEG   SEGMENT

	  ASSUME  CS:SCRDSEG,DS:NOTHING,ES:NOTHING,SS:STACK

ORIG_INT10	  LABEL  WORD	       ; original int 10
	  DW	  0
	  DW	  0
;______________________________________________________________________________

;   Swap the B4 interrupt used by BASIC to print strings.  Swap must be made
;    after BASIC has been loaded and initialized its environment.  Swap takes
;    place when BASIC clears the screen.


ORIG_INTB4	  LABEL  WORD	       ; original int b4
	  DW	  0
	  DW	  0


INTSWAP   PROC	  FAR

	  CMP	  AX,0600h	       ; clear screen request?
	  JE	  DO_SWAP
	  JMP	  DWORD PTR ORIG_INT10 ; pass call to BIOS

DO_SWAP:
	  PUSH	  DS
	  PUSH	  AX

	  SUB	  AX,AX 	       ; address low memory
	  MOV	  DS,AX

	  CLI			       ; disable interrupts for a moment

;   vector for B4 is at 2D0

;   have we already taken over this interrupt once before?

	  CMP	  WORD PTR DS:[02D0h],OFFSET PRINTER
	  JE	  ALREADY_SAVED


;   save the original interrupt vector for use by error message reports

	  MOV	  AX,WORD PTR DS:[02D0h]
	  MOV	  ORIG_INTB4,AX
	  MOV	  AX,WORD PTR DS:[02D2h]
	  MOV	  ORIG_INTB4+2,AX

;   replace the original interrupt vector to allow us to intercept prints

	  MOV	  AX,OFFSET PRINTER
	  MOV	  WORD PTR DS:[02D0h],AX
	  MOV	  AX,SEG PRINTER
	  MOV	  WORD PTR DS:[02D2h],AX

ALREADY_SAVED:

	  STI

	  POP	  AX
	  POP	  DS
	  JMP	  DWORD PTR ORIG_INT10 ; pass clear screen to BIOS now



INTSWAP   ENDP

;______________________________________________________________________________

COMMENT * PRINTER prints a character string on the screen starting
		  at the current cursor position.  After the string is
		  written to the screen the cursor position is updated
		  to just after the string.

	  To use this routine, INTSWAP must have swapped the interrupt
		  vector for intterupt B4 and redirected it to the PRINTER
		  subroutine.

	  The BASPRINT module will take over the INT 10h and make
		  this module permanently resident.  When the screen is cleared
		  by BASIC,  INTSWAP will swap INT B4 and point the vector
		  to the PRINTER subroutine.

	  Algorithm:

		 check context for simple text to screen or possibly something
		   more involved that basic should handle

		  1) store character count and mark the flag for type of i/o
		  2) load current page from DS:[0049]
		  3) load current position on page from DS:[0056]
		  4) load attribute for string from DS:[004E]
		  5) move character count to CX for use in loop
		  6) load type of crt display from 0000:463
		  7) address the screen segment
		  8) move string to screen while synchronizing
		      with horizontal retrace
		  9) update cursor position on screen
		 10) update cursor position in database at DS:[0056]
		 11) leave registers in manner BASIC expects

	  On entry
		  DS:[SI] points to string to write
		  DH	  contains count of characters to write
		  DS:[CX] also points to string and must be updated on exit
		  DS:[0049] contains the page to which we write
		  DS:[004E] contains the attribute for the text
		  DS:[0056] contains the current screen location and must
			       be updated after print is complete


									      *
;______________________________________________________________________________

;  Local data addressable through CS register


CHAR_COUNT	  LABEL  BYTE
	  DB	  0


LINE_START	  LABEL  WORD
	  DW	  0		       ;  0
	  DW	  160		       ;  1
	  DW	  320		       ;  2
	  DW	  480		       ;  3
	  DW	  640		       ;  4
	  DW	  800		       ;  5
	  DW	  960		       ;  6
	  DW	  1120		       ;  7
	  DW	  1280		       ;  8
	  DW	  1440		       ;  9

	  DW	  1600		       ;  10
	  DW	  1760		       ;  11
	  DW	  1920		       ;  12
	  DW	  2080		       ;  13
	  DW	  2240		       ;  14
	  DW	  2400		       ;  15
	  DW	  2560		       ;  16
	  DW	  2720		       ;  17
	  DW	  2880		       ;  18
	  DW	  3040		       ;  19
	  DW	  3200		       ;  20
	  DW	  3360		       ;  21
	  DW	  3520		       ;  22
	  DW	  3680		       ;  23
	  DW	  3840		       ;  24

PAGE_START	  LABEL  WORD
	  DW	  0
	  DW	  4000
	  DW	  8000
	  DW	  12000

STARTING_PAGE	  LABEL  WORD
	  DW	  0

END_OF_PAGE	  LABEL  WORD
	  DW	  0

STARTING_LINE	  LABEL  WORD
	  DW	  0

RESIDUAL	  LABEL  BYTE
	  DB	  0

ROM_SEGMENT	  LABEL  WORD	       ; basic segment in ROM
	  DW	  0F600h

LOCAL_FLAG	  LABEL  BYTE
		  DB   00000000b
JUST_BLANKS	  EQU  00000001b       ; basic wants just blanks displayed


;______________________________________________________________________________

COMMENT *

   New service routine for interrupt B4

     Calls to routine F600:2BA5 generate B4 interrupts.
     These calls come from several places within the BASIC ROM.
     We service calls from two locations: 26CC - call to display a string
					  148D - call to display blanks
     Calls from anywhere else are serviced by the original basic code.
     The two labels corresponding to the two types of calls we service
     are  STRING_IO
	  REPEAT_BLANKS
     The code labeled BASIC_IO passes the interrupt back to the basic code
     for service.
									      *


PRINTER   PROC	  FAR

	  PUSH	  BP
	  MOV	  BP,SP 	       ; address the stack


;    check context for simple text to screen or possibly something
;      more involved that basic should handle

	  CMP	  WORD PTR DS:[04E9h],0
	  JNE	  BASIC_IO
	  CMP	  WORD PTR DS:[071Fh],0
	  JNE	  BASIC_IO
	  CMP	  BYTE PTR DS:[0758h],0
	  JNE	  BASIC_IO
	  CMP	  BYTE PTR DS:[071Bh],0
	  JNE	  BASIC_IO
	  CMP	  BYTE PTR DS:[0029h],50h  ; 80 bytes per line?
	  JNE	  BASIC_IO
	  CMP	  BYTE PTR DS:[0056h],25   ; on bottom line of screen?
	  JE	  BASIC_IO		   ; if so, let basic handle it
	  CMP	  WORD PTR [BP+8],26CCh  ; just regular i/o?
	  JE	  STRING_IO
	  CMP	  WORD PTR [BP+8],148Dh  ; just repeated blanks?
	  JE	  REPEAT_BLANKS

;    allow original B4 service routine to perform I/O

BASIC_IO:
	  POP	  BP
	  JMP	  DWORD PTR ORIG_INTB4 ; pass control to original B4



; ----------


;    repeated blanks sent to screen

REPEAT_BLANKS:

	  PUSH	  BX		       ; save registers used
	  PUSH	  DX
	  PUSH	  DI
	  PUSH	  ES
	  PUSH	  CX


;	  ...	  1) store character count and mark the flag for type of i/o

	  MOV	  CHAR_COUNT,CH        ; save character count
	  OR	  LOCAL_FLAG,JUST_BLANKS
	  MOV	  RESIDUAL,DH	       ; dh should be untouched
	  JMP	  SETUP_START


; ----------


;    write the string for basic

STRING_IO:

	  PUSH	  BX		       ; save registers used,
	  PUSH	  DX
	  PUSH	  DI
	  PUSH	  ES



;	  ...	  1) backup to start of string and store character count

	  DEC	  SI		       ; backup to start of string
	  MOV	  CHAR_COUNT,DH        ; save character count
	  MOV	  LOCAL_FLAG,0	       ; clear the flag for string i/o
	  MOV	  RESIDUAL,1	       ; dh to contain 1 on exit


;	  ...	  2) load current page from DS:[0049]

SETUP_START:
	  MOV	  BL,BYTE PTR DS:[0049h]    ; load current page
	  SUB	  BH,BH
	  SHL	  BX,1		       ; convert to a table offset
	  MOV	  DI,PAGE_START[BX]    ; load start of page
	  MOV	  STARTING_PAGE,DI     ; save the page
	  MOV	  END_OF_PAGE,DI       ; save ending page pointer
	  ADD	  END_OF_PAGE,3840



;	  ...	  3) load current position on page from DS:[0056]

	  MOV	  DX,WORD PTR DS:[0056h]    ; load current position
	  DEC	  DH		       ; basic counts from 1 instead of 0
	  DEC	  DL		       ; basic counts from 1 instead of 0
	  MOV	  BL,DL 	       ; load row number
	  SHL	  BX,1		       ; two bytes per table entry
	  ADD	  DI,LINE_START[BX]    ; add in start of line
	  MOV	  STARTING_LINE,DI     ; store this for later


	  MOV	  DL,DH 	       ; bring down column number
	  SUB	  DH,DH
	  ADD	  DI,DX 	       ; add in column position
	  ADD	  DI,DX 	       ; account for attribute bytes



;	  ...	  4) load attribute for string from DS:[004E]

	  MOV	  BH,BYTE PTR DS:[004Eh]  ; load attribute for string



;	  ...	  5) move character count to CX for use in loop

	  SUB	  CH,CH 	       ; clear upper byte
	  MOV	  CL,CHAR_COUNT        ; load the character count



;	  ...	  6) load type of crt display from 0000:463

	  SUB	  AX,AX 	       ; address system memory
	  MOV	  ES,AX

	  MOV	  DX,WORD PTR ES:[463h]      ; load address of display adapter
	  ADD	  DX,6			     ; address crt status port


;	  ...	  7) address the screen segment

	  MOV	  AX,0B000h	       ; screen seg for monochrome card
	  CMP	  DX,03DAh	       ; is this a graphic card?
	  JNE	  MONOCHROME

	  MOV	  AX,0B800h	       ; load screen seg for graphic card

MONOCHROME:

	  MOV	  ES,AX 	       ; address the screen buffer



;	  ...	  8) move string to screen while synchronizing
;		      with horizontal retrace

	  TEST	  LOCAL_FLAG,JUST_BLANKS
	  JZ	  DISPLAY_LOOP

	  MOV	  BL,20h	       ; load a blank
BLANK_LOOP:
	  CALL	  DISPLAY_CHAR	       ; display a line of blanks for basic
	  LOOP	  BLANK_LOOP
	  JMP	  UPDATE_POSITION


DISPLAY_LOOP:
	  LODSB 		       ; load next character

	  CMP	  AL,20h	       ; special character?
	  JGE	  NOT_SPECIAL
	  CALL	  SPECIAL
	  JZ	  ANOTHER_CHAR	       ; if flag set, go for another character

NOT_SPECIAL:

	  MOV	  BL,AL

	  CLI
HSYNC_WAIT1:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JNZ	  HSYNC_WAIT1	       ; wait for retrace
HSYNC_WAIT2:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JZ	  HSYNC_WAIT2	       ; wait for retrace

	  MOV	  AX,BX
	  STOSW 		       ; store character and attribute

ANOTHER_CHAR:
	  STI

	  CMP	  DI,END_OF_PAGE
	  JL	  NOT_SCROLLED

	  MOV	  AL,0Dh	       ; force a carriage return
	  CALL	  SPECIAL

NOT_SCROLLED:

	  LOOP	  DISPLAY_LOOP	       ; repeat cx times



;	  ...	 9) update cursor position on screen


UPDATE_POSITION:
	  MOV	  AX,DI
	  SUB	  AX,STARTING_PAGE
	  SHR	  AX,1		       ; eliminate attribute bytes
	  SUB	  DX,DX
	  MOV	  BX,80 	       ; divide by bytes per line
	  DIV	  BX		       ;   quotient in AL (ROW)
				       ;   remainder in DL (COLUMN)
	  MOV	  DH,AL
	  MOV	  BH,BYTE PTR DS:[0049h]    ; load page number
	  MOV	  AH,2		       ; request new position
	  INT	  10h


;	  ...	  10) update cursor position in database at DS:[0056]

	  XCHG	  DH,DL 	       ; basic likes this reversed
	  INC	  DH		       ; basic counts from 1 instead of 0
	  INC	  DL		       ; basic counts from 1 instead of 0
	  MOV	  WORD PTR DS:[0056h],DX


;	  ...	  11) leave registers in manner BASIC expects


	  TEST	  LOCAL_FLAG,JUST_BLANKS
	  JZ	  STRING_DISPLAYED

	  POP	  CX		       ; restore original blank count
	  MOV	  CH,1		       ; allow basic to decrement this to 0
	  JMP	  RESTORE_REGS


STRING_DISPLAYED:		       ; for a string
	  MOV	  CX,SI 	       ;  CX must point to last character
	  DEC	  CX


RESTORE_REGS:
	  POP	  ES
	  POP	  DI
	  POP	  DX

	  MOV	  DH,RESIDUAL	       ; let decrement instr take this to zero
				       ;  inside basic interpreter
	  POP	  BX
	  POP	  BP


	  ADD	  SP,4		       ; throw away offset and code segment
				       ;  from INT B4
	  POPF			       ; restore flags from interrupt

	  POP	  AX		       ; throw away near call on stack
	  PUSH	  ROM_SEGMENT	       ; and convert to a far call
	  PUSH	  AX
	  MOV	  AL,20h	       ; leave a character in AL for basic
				       ;  to compare against a CR  (0Dh)
	  RET			       ; return to ROM


PRINTER   ENDP

;______________________________________________________________________________

;  subroutine to handle special control characters

SPECIAL   PROC	  NEAR

; ----------

	  CMP	  AL,0Ah	       ; line feed?
	  JE	  NEW_LINE


; ----------

	  CMP	  AL,0Bh	       ; home?
	  JNE	  NOT_HOME
	  MOV	  DI,STARTING_PAGE     ; start over at top of screen
	  MOV	  STARTING_LINE,DI
	  SUB	  AL,AL
	  RET

NOT_HOME:

; ----------

	  CMP	  AL,0Ch	       ; clear screen?
	  JNE	  NOT_CLEAR
	  MOV	  DI,STARTING_PAGE
	  MOV	  STARTING_LINE,DI
	  MOV	  AL,0		       ; clear whole window
	  JMP	  SHORT SCROLL_SCREEN


NOT_CLEAR:

; ----------

	  CMP	  AL,0Dh	       ; carriage return?
	  JNE	  NOT_CR

NEW_LINE:
	  MOV	  DI,STARTING_LINE
	  ADD	  DI,160
	  JMP	  SHORT TEST_RIGHT

NOT_CR:

; ----------

	  CMP	  AL,1Ch	       ; move right?
	  JNE	  NOT_RIGHT
	  ADD	  DI,2
	  JMP	  SHORT TEST_RIGHT

NOT_RIGHT:

; ----------

	  CMP	  AL,1Dh	       ; move left?
	  JNE	  NOT_LEFT
	  SUB	  DI,2
	  JMP	  SHORT TEST_LEFT

NOT_LEFT:

; ----------

	  CMP	  AL,1Eh	       ; move up?
	  JNE	  NOT_UP

	  SUB	  DI,160
	  JMP	  SHORT TEST_LEFT

NOT_UP:

; ----------

	  CMP	  AL,1Fh	       ; move down?
	  JNE	  NOT_DOWN

	  ADD	  DI,160
	  JMP	  SHORT TEST_RIGHT

NOT_DOWN:
	  JMP	  SHORT TEST_FOR_TAB

; ----------

TEST_RIGHT:
	  MOV	  AX,DI 	       ; are we past line 24?
	  SUB	  AX,STARTING_PAGE
	  CMP	  AX,3840
	  JL	  VALID_RIGHT
	  MOV	  DI,STARTING_PAGE     ; back at start of last line
	  ADD	  DI,3680
	  MOV	  STARTING_LINE,DI

	  MOV	  AL,1		       ; scroll one line
	  JMP	  SHORT SCROLL_SCREEN

VALID_RIGHT:
	  SUB	  AL,AL
	  RET

; ----------

SCROLL_SCREEN:
	  PUSH	  CX
	  MOV	  CX,0		       ; start in upper left corner
	  PUSH	  DX
	  MOV	  DX,174Fh	       ; end in lower right, one line up
	  MOV	  AH,6
	  PUSHF 		       ; simulate an INT 10
	  CALL	  DWORD PTR ORIG_INT10
	  POP	  DX
	  POP	  CX
	  SUB	  AL,AL
	  RET

; ----------

TEST_LEFT:
	  CMP	  DI,STARTING_PAGE
	  JGE	  VALID_LEFT

	  MOV	  DI,STARTING_PAGE

VALID_LEFT:
	  SUB	  AL,AL
	  RET

; ----------

TEST_FOR_TAB:

	  CMP	  AL,09h	       ; tab?
	  JNE	  NOT_TAB

	  PUSH	  CX
	  PUSH	  DX
	  MOV	  AX,DI
	  SUB	  AX,STARTING_LINE
	  SHR	  AX,1		       ; discount attribute bytes
	  SUB	  DX,DX
	  MOV	  CX,8
	  DIV	  CX
	  MOV	  CX,8		       ; tab positions are every 8 charactes
	  SUB	  CX,DX 	       ; subtract off remainder
	  MOV	  BL,' '               ; write some blanks
	  POP	  DX
TAB_LOOP:
	  CALL	  DISPLAY_CHAR
	  LOOP	  TAB_LOOP

	  POP	  CX
	  SUB	  AL,AL
	  RET

NOT_TAB:

; ----------

	  CMP	  AL,08h	       ; backspace?
	  JNE	  NOT_BACKSPACE

	  CMP	  DI,STARTING_LINE
	  JE	  AT_START
	  SUB	  DI,2		       ; back up a space

AT_START:
	  MOV	  BL,' '               ; write a blank
	  CALL	  DISPLAY_CHAR

	  SUB	  DI,2		       ; back up a space
	  SUB	  AL,AL
	  RET

NOT_BACKSPACE:

; ----------

	  MOV	  AH,2
	  SUB	  AH,1		       ; set flag to display the char
	  RET

SPECIAL   ENDP

;______________________________________________________________________________

;  routine to display a character in BL - used only for special characters
;     attribute is in BH


DISPLAY_CHAR	  PROC	NEAR

	  CLI
HSYNC_WAIT3:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JNZ	  HSYNC_WAIT3	       ; wait for retrace
HSYNC_WAIT4:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JZ	  HSYNC_WAIT4	       ; wait for retrace

	  MOV	  AX,BX
	  STOSW 		       ; store character and attribute

	  STI
	  RET

DISPLAY_CHAR	  ENDP


;______________________________________________________________________________

LASTADDR  LABEL   BYTE

COPYRIGHT LABEL   BYTE
	  DB	  10,13
	  DB  '         CLUBware  (tm)',10,13,10,13
	  DB  'BASPRINT - Enhancement to the Basic Interpreter Print statement'
	  DB	  10,13,10,13
	  DB  '         Copyright 1984 Rayhawk Automation N.W. Inc',10,13
	  DB  '                        P.O. Box 1427',10,13
	  DB  '                        Beaverton, Oregon   97075',10,13,'$'

;______________________________________________________________________________

BASPRINT  PROC	  FAR


	  PUSH	  DS		       ; Push addr of Program Segment Prefix
	  SUB	  AX,AX 	       ; Zero AX
	  PUSH	  AX		       ; Push zero onto stack
;					 (offset of INT 20 within PSP)


;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	   take over the INT 10h		 |
;		      | 	   interrupt if not already done	 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  DS,AX 		   ; address low memory
	  LDS	  BX,DWORD PTR DS:[02D0h]  ; load interrupt vector for int B4

	  MOV	  AX,WORD PTR PRINTER
	  CMP	  AX,WORD PTR DS:[BX]
	  JNE	  NOT_HERE_YET
	  MOV	  AX,WORD PTR PRINTER+2
	  CMP	  AX,WORD PTR DS:[BX+2]
	  JNE	  NOT_HERE_YET
	  MOV	  AX,WORD PTR PRINTER+4
	  CMP	  AX,WORD PTR DS:[BX+4]
	  JNE	  NOT_HERE_YET
	  MOV	  AX,WORD PTR PRINTER+6
	  CMP	  AX,WORD PTR DS:[BX+6]
	  JNE	  NOT_HERE_YET

	  JMP	  ALREADY_RESIDENT

NOT_HERE_YET:
	  SUB	  AX,AX
	  MOV	  DS,AX
	  MOV	  AX,WORD PTR DS:[40h] ; save original int10
	  MOV	  ORIG_INT10,AX
	  MOV	  AX,WORD PTR DS:[42h]
	  MOV	  ORIG_INT10+2,AX

	  MOV	  AX,SEG BASPRINT
	  MOV	  DS,AX
	  MOV	  DX,OFFSET INTSWAP    ; Load offset of interrupt service mod
	  MOV	  AX,2510h	       ; Prepare for DOS service call type 25
;					 to establish service for INT 10
	  INT	  21h		       ; Ask DOS to establish service

;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	   issue copyright message		 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  DX,OFFSET COPYRIGHT
	  MOV	  AH,9
	  INT	  21h


;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	   modify INT 20 into INT 27 in the	 |
;		      | 	   program segment prefix		 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  BYTE PTR ES:[01],27h ; Change INT 20h to INT 27h

;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	6) load address of ending tag into DX	 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  AX,SEG LASTADDR
	  SUB	  AX,SEG BASPRINT
	  MOV	  CL,4		       ; prepare for 4 bit shift
	  SHL	  AX,CL 	       ; shift up (convert from seg to abs)
	  ADD	  AX,OFFSET LASTADDR   ; add address of bottom location
	  ADD	  AX,0103h	       ; Pad offset because DOS measures
;					  offset relative to Program
;					  Segment Prefix
	  MOV	  DX,AX 	       ; leave where DOS will find it

;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	7) use RET FAR to return to DOS and	 |
;		      | 	   leave service routine resident	 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

ALREADY_RESIDENT:

	  RET

BASPRINT  ENDP

SCRDSEG   ENDS

;______________________________________________________________________________


STACK	  SEGMENT PARA STACK 'STACK'
	  DB	  24 DUP('STACK***')
TOPSTACK  DB	  0
STACK	  ENDS

	  END	  BASPRINT
```
{% endraw %}

## CLREOL.ASM

{% raw %}
```
COMMENT *

			     CLUBware  (tm)

	  CLREOL clears the screen from the current position to the end
		  of the current line.	Cursor is left at starting
		  position.

		   Copyright 1984 Rayhawk Automation N.W. Inc
				  P.O. Box 1427
				  Beaverton, Oregon   97075

	  Algorithm:
		  1) determine current position
		  2) determine number of blanks required
		  3) write that many blanks using INT 10, AH=9


	  CALL	CLREOL ( FLAG% )

		  FLAG%       environment flag
			      = 0 means under basic interpreter
			      = 1 means under compiled basic
			      = 2 means under compiled business basic

									      *

;______________________________________________________________________________

;  Normal assembly directives

CODE	  SEGMENT PARA PUBLIC 'CODE'

	  ASSUME  CS:CODE

	  PUBLIC  CLREOL

ENV_FLAG	  EQU  WORD PTR [BP+6] ; address of environment flag on stack


;______________________________________________________________________________

CLREOL	  PROC	  FAR

	  PUSH	  AX		       ; save all registers used,
	  PUSH	  BX		       ;  no data segment local to this
	  PUSH	  CX		       ;  routine so segment registers
	  PUSH	  DX		       ;  are untouched.
	  PUSH	  ES


;	  ...	  0) load environment flag showing compiled or interpreted

	  MOV	  BX,ENV_FLAG	       ; load address of environment flag


;	  ...	  1) load current position from 0000:0450 if compiled
;		      or from DS:[0056h] if interpreted

	  SUB	  AX,AX 	       ; address system memory
	  MOV	  ES,AX

	  CMP	  WORD PTR DS:[BX],0	   ; check environment flag
	  JNE	  COMPILED

	  MOV	  DX,WORD PTR DS:[0056h]   ; load from basic space
	  XCHG	  DL,DH 		   ; basic has it reversed
	  DEC	  DL			   ; basic starts count from 1
	  DEC	  DH			   ;  instead of zero
	  JMP	  SHORT HAVE_POSITION

COMPILED:
	  MOV	  DX,WORD PTR ES:[450h]    ; load current position
					   ;  from system space
HAVE_POSITION:

;	  ...	  2) determine number of blanks required

	  MOV	  CX,80 	       ; first column on line is 0
	  SUB	  CL,DL 	       ; subtract off current column
	  JZ	  AT_END_OF_LINE       ; if zero, then already at end


;	  ...	  3) write that many blanks using INT 10, AH=9

	  MOV	  AX,0A20h	       ; AH = 10  and  AL = blank
	  MOV	  BX,0000h	       ; BH = 0 (assume always on page 0
				       ; use existing attribute
	  INT	  10h		       ; write that many blanks

AT_END_OF_LINE:
	  POP	  ES
	  POP	  DX
	  POP	  CX
	  POP	  BX
	  POP	  AX
	  RET	  2


CLREOL	  ENDP

;______________________________________________________________________________

CODE	  ENDS

	  END
```
{% endraw %}

## CLREOS.ASM

{% raw %}
```
COMMENT *

			     CLUBware  (tm)

	  CLREOS clears the screen from the current position to the end
		  of the screen.  Cursor is left at starting
		  position.

		   Copyright 1984 Rayhawk Automation N.W. Inc
				  P.O. Box 1427
				  Beaverton, Oregon   97075


	  Algorithm:
		  1) load type of crt display from 0000:463
		  2) turn off crt display
		  3) load current position from 0000:0450
		  4) determine number of blanks to end of screen
		  5) do repeated store into screen buffer to blank area
		  6) reactive crt display


	  CALL	  CLREOS ( FLAG% )

		  FLAG%       environment flag
			      = 0 means under basic interpreter
			      = 1 means under compiled basic
			      = 2 means under compiled business basic

									      *

;______________________________________________________________________________

;  Normal assembly directives

CODE	  SEGMENT PARA PUBLIC 'CODE'

	  ASSUME  CS:CODE

	  PUBLIC  CLREOS

ENV_FLAG	  EQU  WORD PTR [BP+6] ; address of environment flag on stack

;______________________________________________________________________________

CLREOS	  PROC	  FAR

	  PUSH	  AX		       ; save all registers used,
	  PUSH	  BX
	  PUSH	  CX
	  PUSH	  DX
	  PUSH	  DI
	  PUSH	  ES



;	  ...	  1) load type of crt display from 0000:463

	  SUB	  AX,AX 		     ; address system area
	  MOV	  ES,AX

	  MOV	  DX,WORD PTR ES:[463h]      ; load address of display adapter



;	  ...	  2) turn off crt display
;		     if this is a graphic display, wait for vertical retrace

	  ADD	  DX,4		       ; addres crt control port

	  CMP	  DX,3D8h	       ; graphic card?
	  JNE	  NOT_GRAPHIC

	  ADD	  DX,2		       ; address crt status port
VERT_RETRACE:
	  IN	  AL,DX 	       ; wait for vertical retrace
	  TEST	  AL,8
	  JZ	  VERT_RETRACE
	  SUB	  DX,2		       ; address crt mode port

NOT_GRAPHIC:

	  MOV	  AL,21h	       ; turn off the video signal
	  OUT	  DX,AL


;	  ...	  3) load environment flag showing compiled or interpreted

	  MOV	  BX,ENV_FLAG	       ; load address of environment flag


;	  ...	  4) load current position from 0000:0450 if compiled
;		      or from DS:[0056h] if interpreted


	  CMP	  WORD PTR DS:[BX],0	   ; check environment flag
	  JNE	  COMPILED

	  MOV	  CX,WORD PTR DS:[0056h]   ; load from basic space
	  XCHG	  CL,CH 		   ; basic has it reversed
	  DEC	  CL			   ; basic starts count from 1
	  DEC	  CH			   ;  instead of zero
	  JMP	  SHORT HAVE_POSITION

COMPILED:
	  MOV	  CX,WORD PTR ES:[450h]    ; load current position
					   ;  from system space
HAVE_POSITION:

	  SUB	  AH,AH 	       ; isolate row number in AX
	  MOV	  AL,CH
	  MOV	  BL,80 	       ; multiply row by 80 bytes per row
	  MUL	  BL
	  SUB	  CH,CH 	       ; add in column number
	  ADD	  AX,CX

	  MOV	  DI,AX
	  SHL	  DI,1		       ; multiply by 2 to account
				       ;  for attribute bytes



;	  ...	  5) determine number of blanks to end of screen

	  MOV	  CX,2000	       ; 2000 chars on entire screen
	  SUB	  CX,AX 	       ; cx now holds number of blanks



;	  ...	  6) do repeated store into screen buffer to blank area

	  MOV	  AX,0B000h	       ; screen seg for monochrome card
	  CMP	  DX,03D8h	       ; is this a graphic card?
	  JNE	  MONOCHROME

	  MOV	  AX,0B800h	       ; load screen seg for graphic card

MONOCHROME:

	  MOV	  ES,AX 	       ; address the screen buffer
	  MOV	  AX,0720h	       ; AH = 07 ( normal video attribute
				       ; AL = 20 ( blank
	  REP	  STOSW 	       ; store CX blanks



;	  ...	  7) reactive crt display


	  MOV	  AL,29h	       ; DX already has correct port
	  OUT	  DX,AL



	  POP	  ES
	  POP	  DI
	  POP	  DX
	  POP	  CX
	  POP	  BX
	  POP	  AX
	  RET	  2


CLREOS	  ENDP

;______________________________________________________________________________

CODE	  ENDS

	  END
```
{% endraw %}

## COMPRINT.ASM

{% raw %}
```
COMMENT *

			     CLUBware  (tm)

	  COMPRINT - Enhancement to the Basic Compiler Print statement
				(for routines compiled without /O option)

		   Copyright 1984 Rayhawk Automation N.W. Inc
				  P.O. Box 1427
				  Beaverton, Oregon   97075
									      *

SCRDSEG   SEGMENT

	  ASSUME  CS:SCRDSEG,DS:NOTHING,ES:NOTHING,SS:STACK

ORIG_INT10	  LABEL  WORD	       ; original int 10
	  DW	  0
	  DW	  0


;______________________________________________________________________________

;   Swap the code used by BASIC to print strings.  Swap must be made
;    after BASIC has been loaded and initialized its environment.  When the
;    screen is cleared INTSWAP intercepts the BASIC print statement.

ORIG_2841	  LABEL  WORD	       ; original subroutine 2841
	  DW	  2846h
BASIC_SEGMENT	  LABEL  WORD
	  DW	  0

CALLERS_SEG	  EQU  WORD PTR [BP+4]	; location of callers segment on stack


INTSWAP   PROC	  FAR

	  CMP	  AX,0600h	       ; clear screen request?
	  JE	  DO_SWAP
	  JMP	  DWORD PTR ORIG_INT10 ; pass call to BIOS

DO_SWAP:
	  PUSH	  BP		       ; address the stack
	  MOV	  BP,SP
	  PUSH	  DS
	  PUSH	  AX

	  MOV	  AX,CALLERS_SEG       ; address basic space
	  MOV	  DS,AX
	  MOV	  BASIC_SEGMENT,AX     ; save basic's code segment

	  CLI			       ; disable interrupts for a moment

;   have we already taken over this subroutine once before?

	  CMP	  WORD PTR DS:[2844h],SEG PRINTER
	  JE	  ALREADY_SAVED


;   replace the original code with a call to PRINTER to intercept prints

	  CMP	  WORD PTR DS:[2842h],OFFSET PRINTER  ; two copies of INTSWAP?
	  JE	  SECOND_COPY
	  CMP	  WORD PTR DS:[2841h],8B56h	      ; basic loaded yet?
	  JNE	  ALREADY_SAVED 		      ; jump if not

SECOND_COPY:
	  MOV	  BYTE PTR DS:[2841h],9Ah	      ; opcode is far call
	  MOV	  WORD PTR DS:[2842h],OFFSET PRINTER  ; target for call
	  MOV	  WORD PTR DS:[2844h],SEG    PRINTER

ALREADY_SAVED:

	  STI

	  POP	  AX
	  POP	  DS
	  POP	  BP
	  JMP	  DWORD PTR ORIG_INT10 ; pass clear screen to BIOS now



INTSWAP   ENDP

;______________________________________________________________________________

COMMENT * PRINTER prints a character string on the screen starting
		  at the current cursor position.  After the string is
		  written to the screen the cursor position is updated
		  to just after the string.

	  To use this routine, a clear screen must occur
		  to swap in the PRINTER routine for basic.


	  The COMPRINT module will take over the INT 10h and make
		  this module permanently resident.  The user from inside
		  his BASIC program will clear the screen with a CLS
		  which will perform the vector swap.

	  Algorithm:

		 check context for simple text to screen or possibly something
		   more involved that basic should handle

		  1) backup to start of string and store character count
		  2) load current page from DS:[0085]
		  3) load current position on page from DS:[0087]
		  4) load attribute for string from DS:[00B5]
		  5) move character count to CX for use in loop
		  6) load type of crt display from 0000:463
		  7) address the screen segment
		  8) move string to screen while synchronizing
		      with horizontal retrace
		  9) update cursor position on screen
		 10) update cursor position in database at DS:[0087]
		 11) leave registers in manner BASIC expects

	  On entry
		  DS:[SI] points to string to write
		  CX	  contains count of characters to write
		  DS:[0085] contains the page to which we write
		  DS:[00B5] contains the attribute for the text
		  DS:[0087] contains the current screen location and must
			       be updated after print is complete


									      *
;______________________________________________________________________________

;  Local data addressable through CS register


CHAR_COUNT	  LABEL  WORD
	  DW	  0


LINE_START	  LABEL  WORD
	  DW	  0		       ;  0
	  DW	  160		       ;  1
	  DW	  320		       ;  2
	  DW	  480		       ;  3
	  DW	  640		       ;  4
	  DW	  800		       ;  5
	  DW	  960		       ;  6
	  DW	  1120		       ;  7
	  DW	  1280		       ;  8
	  DW	  1440		       ;  9

	  DW	  1600		       ;  10
	  DW	  1760		       ;  11
	  DW	  1920		       ;  12
	  DW	  2080		       ;  13
	  DW	  2240		       ;  14
	  DW	  2400		       ;  15
	  DW	  2560		       ;  16
	  DW	  2720		       ;  17
	  DW	  2880		       ;  18
	  DW	  3040		       ;  19
	  DW	  3200		       ;  20
	  DW	  3360		       ;  21
	  DW	  3520		       ;  22
	  DW	  3680		       ;  23
	  DW	  3840		       ;  24

PAGE_START	  LABEL  WORD
	  DW	  0
	  DW	  4000
	  DW	  8000
	  DW	  12000

STARTING_PAGE	  LABEL  WORD
	  DW	  0

END_OF_PAGE	  LABEL  WORD
	  DW	  0

STARTING_LINE	  LABEL  WORD
	  DW	  0

RESIDUAL	  LABEL  WORD
	  DW	  0


LOCAL_FLAG	  LABEL  BYTE
		  DB   00000000b
JUST_BLANKS	  EQU  00000001b       ; basic wants just blanks displayed
ZERO_TAGGED	  EQU  00000010b       ; string length unknown, tagged by 0


;______________________________________________________________________________

COMMENT *

   New PRINT service routine for BASIC

     Calls to routine XXXX:2841 are rerouted to this piece of code
     These calls come from several places within the BASIC rutime library
     We service calls from three locations: 4A07 - call to display a string
					    4ECE - call to display blanks
					    612F - call to display number
     Calls from anywhere else are serviced by the original basic code.
     The three labels corresponding to the three types of calls we service
     are  STRING_IO
	  REPEAT_BLANKS
	  NUMBER_STRING
     The code labeled BASIC_IO passes the interrupt back to the basic code
     for service.
									      *


PRINTER   PROC	  FAR

	  PUSH	  BP
	  MOV	  BP,SP 	       ; address the stack
	  MOV	  LOCAL_FLAG,0	       ; clear the flag for string i/o


;    check context for simple text to screen or possibly something
;      more involved that basic should handle

	  CMP	  WORD PTR DS:[079Eh],0
	  JNE	  BASIC_IO
	  CMP	  BYTE PTR DS:[07CCh],50h  ; 80 bytes per line?
	  JNE	  BASIC_IO
;	  CMP	  BYTE PTR DS:[0056h],25   ; on bottom line of screen?
;	  JE	  BASIC_IO		   ; if so, let basic handle it
	  CMP	  WORD PTR [BP+6],4A07h  ; just regular i/o?
	  JE	  STRING_IO
	  CMP	  WORD PTR [BP+6],4ECEh  ; just repeated blanks?
	  JE	  REPEAT_BLANKS
	  CMP	  WORD PTR [BP+6],612Fh  ; number string?
	  JE	  NUMBER_STRING

;    allow original service routine to perform I/O

BASIC_IO:
	  POP	  BP
	  ADD	  SP,4		       ; clear our far call from stack
	  PUSH	  SI		       ; original first two statements
	  MOV	  SI,WORD PTR DS:[079Eh] ;   of the basic subroutine
	  JMP	  DWORD PTR ORIG_2841  ; pass control to original routine



; ----------


;    send a number string to screen
;		  string length is not known but end is tagged by a zero

NUMBER_STRING:

	  PUSH	  BX		       ; save registers used
	  PUSH	  DX
	  PUSH	  DI
	  PUSH	  ES


;	  ...	  1) store character count and mark the flag for type of i/o

	  DEC	  SI		       ; backup to start of string
	  MOV	  CHAR_COUNT,80        ; always less than 80 characters
	  OR	  LOCAL_FLAG,ZERO_TAGGED
	  MOV	  RESIDUAL,CX	       ; restore original cx contents when done
	  JMP	  SETUP_START


; ----------


;    repeated blanks sent to screen

REPEAT_BLANKS:

	  PUSH	  BX		       ; save registers used
	  PUSH	  DX
	  PUSH	  DI
	  PUSH	  ES


;	  ...	  1) store character count and mark the flag for type of i/o

	  MOV	  CHAR_COUNT,CX        ; save character count
	  OR	  LOCAL_FLAG,JUST_BLANKS
	  MOV	  RESIDUAL,1	       ; leave one in cx register when done
	  JMP	  SETUP_START


; ----------


;    write the string for basic

STRING_IO:

	  PUSH	  BX		       ; save registers used,
	  PUSH	  DX
	  PUSH	  DI
	  PUSH	  ES



;	  ...	  1) backup to start of string and store character count

	  DEC	  SI		       ; backup to start of string
	  MOV	  CHAR_COUNT,CX        ; save character count
	  MOV	  RESIDUAL,1	       ; leave one in cx register when done


;	  ...	  2) load current page from DS:[0085]

SETUP_START:
	  MOV	  BL,BYTE PTR DS:[0085h]    ; load current page
	  SUB	  BH,BH
	  SHL	  BX,1		       ; convert to a table offset
	  MOV	  DI,PAGE_START[BX]    ; load start of page
	  MOV	  STARTING_PAGE,DI     ; save the page
	  MOV	  END_OF_PAGE,DI       ; save ending page pointer
	  ADD	  END_OF_PAGE,4000



;	  ...	  3) load current position on page from DS:[0087]

	  MOV	  DX,WORD PTR DS:[0087h]    ; load current position
	  DEC	  DH		       ; basic counts from 1 instead of 0
	  DEC	  DL		       ; basic counts from 1 instead of 0
	  MOV	  BL,DL 	       ; load row number
	  SHL	  BX,1		       ; two bytes per table entry
	  ADD	  DI,LINE_START[BX]    ; add in start of line
	  MOV	  STARTING_LINE,DI     ; store this for later


	  MOV	  DL,DH 	       ; bring down column number
	  SUB	  DH,DH
	  ADD	  DI,DX 	       ; add in column position
	  ADD	  DI,DX 	       ; account for attribute bytes



;	  ...	  4) load attribute for string from DS:[00B5]

	  MOV	  BH,BYTE PTR DS:[00B5h]  ; load attribute for string



;	  ...	  5) move character count to CX for use in loop

	  MOV	  CX,CHAR_COUNT        ; load the character count



;	  ...	  6) load type of crt display from 0000:463

	  SUB	  AX,AX 	       ; address system memory
	  MOV	  ES,AX

	  MOV	  DX,WORD PTR ES:[463h]      ; load address of display adapter
	  ADD	  DX,6			     ; address crt status port


;	  ...	  7) address the screen segment

	  MOV	  AX,0B000h	       ; screen seg for monochrome card
	  CMP	  DX,03DAh	       ; is this a graphic card?
	  JNE	  MONOCHROME

	  MOV	  AX,0B800h	       ; load screen seg for graphic card

MONOCHROME:

	  MOV	  ES,AX 	       ; address the screen buffer



;	  ...	  8) move string to screen while synchronizing
;		      with horizontal retrace

	  TEST	  LOCAL_FLAG,JUST_BLANKS
	  JZ	  DISPLAY_LOOP

	  MOV	  BL,20h	       ; load a blank
BLANK_LOOP:
	  CALL	  DISPLAY_CHAR	       ; display a line of blanks for basic
	  LOOP	  BLANK_LOOP
	  JMP	  UPDATE_POSITION


DISPLAY_LOOP:
	  LODSB 		       ; load next character

	  CMP	  AL,20h	       ; special character?
	  JGE	  NOT_SPECIAL
	  CALL	  SPECIAL
	  JZ	  ANOTHER_CHAR	       ; if flag set, go for another character

NOT_SPECIAL:

	  MOV	  BL,AL

	  CLI
HSYNC_WAIT1:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JNZ	  HSYNC_WAIT1	       ; wait for retrace
HSYNC_WAIT2:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JZ	  HSYNC_WAIT2	       ; wait for retrace

	  MOV	  AX,BX
	  STOSW 		       ; store character and attribute

ANOTHER_CHAR:
	  STI

	  CMP	  DI,END_OF_PAGE
	  JL	  NOT_SCROLLED

	  MOV	  AL,0Dh	       ; force a carriage return
	  CALL	  SPECIAL

NOT_SCROLLED:

	  LOOP	  DISPLAY_LOOP	       ; repeat cx times



;	  ...	 9) update cursor position on screen


UPDATE_POSITION:
	  MOV	  AX,DI
	  SUB	  AX,STARTING_PAGE
	  SHR	  AX,1		       ; eliminate attribute bytes
	  SUB	  DX,DX
	  MOV	  BX,80 	       ; divide by bytes per line
	  DIV	  BX		       ;   quotient in AL (ROW)
				       ;   remainder in DL (COLUMN)
	  MOV	  DH,AL
	  MOV	  BH,BYTE PTR DS:[0085h]    ; load page number
	  MOV	  AH,2		       ; request new position
	  INT	  10h


;	  ...	  10) update cursor position in database at DS:[0087]

	  XCHG	  DH,DL 	       ; basic likes this reversed
	  INC	  DH		       ; basic counts from 1 instead of 0
	  INC	  DL		       ; basic counts from 1 instead of 0
	  MOV	  WORD PTR DS:[0087h],DX


;	  ...	  11) leave registers in manner BASIC expects

	  MOV	  CX,RESIDUAL	       ; let decrement instr take this to zero
				       ;  inside basic
	  POP	  ES
	  POP	  DI
	  POP	  DX

	  POP	  BX
	  POP	  BP


	  ADD	  SP,4		       ; throw away offset and code segment
				       ;  from our call

	  POP	  AX		       ; throw away near call on stack
	  PUSH	  BASIC_SEGMENT        ; and convert to a far call
	  PUSH	  AX
	  RET			       ; return to basic


PRINTER   ENDP

;______________________________________________________________________________

;  subroutine to handle special control characters

SPECIAL   PROC	  NEAR

; ----------

	  CMP	  AL,0Ah	       ; line feed?
	  JE	  NEW_LINE


; ----------

	  CMP	  AL,0Bh	       ; home?
	  JNE	  NOT_HOME
	  MOV	  DI,STARTING_PAGE     ; start over at top of screen
	  MOV	  STARTING_LINE,DI
	  SUB	  AL,AL
	  RET

NOT_HOME:

; ----------

	  CMP	  AL,0Ch	       ; clear screen?
	  JNE	  NOT_CLEAR
	  MOV	  DI,STARTING_PAGE
	  MOV	  STARTING_LINE,DI
	  MOV	  AL,0		       ; clear whole window
	  JMP	  SHORT SCROLL_SCREEN


NOT_CLEAR:

; ----------

	  CMP	  AL,0Dh	       ; carriage return?
	  JNE	  NOT_CR

NEW_LINE:
	  MOV	  DI,STARTING_LINE
	  ADD	  DI,160
	  JMP	  SHORT TEST_RIGHT

NOT_CR:

; ----------

	  CMP	  AL,1Ch	       ; move right?
	  JNE	  NOT_RIGHT
	  ADD	  DI,2
	  JMP	  SHORT TEST_RIGHT

NOT_RIGHT:

; ----------

	  CMP	  AL,1Dh	       ; move left?
	  JNE	  NOT_LEFT
	  SUB	  DI,2
	  JMP	  SHORT TEST_LEFT

NOT_LEFT:

; ----------

	  CMP	  AL,1Eh	       ; move up?
	  JNE	  NOT_UP

	  SUB	  DI,160
	  JMP	  SHORT TEST_LEFT

NOT_UP:

; ----------

	  CMP	  AL,1Fh	       ; move down?
	  JNE	  NOT_DOWN

	  ADD	  DI,160
	  JMP	  SHORT TEST_RIGHT

NOT_DOWN:
	  JMP	  SHORT TEST_FOR_TAB

; ----------

TEST_RIGHT:
	  CMP	  DI,END_OF_PAGE       ; are we past line 25?
	  JL	  VALID_RIGHT
	  MOV	  DI,STARTING_PAGE     ; back at start of last line
	  ADD	  DI,3840
	  MOV	  STARTING_LINE,DI

	  MOV	  AL,1		       ; scroll one line
	  JMP	  SHORT SCROLL_SCREEN

VALID_RIGHT:
	  SUB	  AL,AL
	  RET

; ----------

SCROLL_SCREEN:
	  PUSH	  CX
	  MOV	  CX,0		       ; start in upper left corner
	  PUSH	  DX
	  MOV	  DX,184Fh	       ; end in lower right
	  MOV	  AH,6
	  PUSHF 		       ; simulate an INT 10
	  CALL	  DWORD PTR ORIG_INT10
	  POP	  DX
	  POP	  CX
	  SUB	  AL,AL
	  RET

; ----------

TEST_LEFT:
	  CMP	  DI,STARTING_PAGE
	  JGE	  VALID_LEFT

	  MOV	  DI,STARTING_PAGE

VALID_LEFT:
	  SUB	  AL,AL
	  RET

; ----------

TEST_FOR_TAB:

	  CMP	  AL,09h	       ; tab?
	  JNE	  NOT_TAB

	  PUSH	  CX
	  PUSH	  DX
	  MOV	  AX,DI
	  SUB	  AX,STARTING_LINE
	  SHR	  AX,1		       ; discount attribute bytes
	  SUB	  DX,DX
	  MOV	  CX,8
	  DIV	  CX
	  MOV	  CX,8		       ; tab positions are every 8 charactes
	  SUB	  CX,DX 	       ; subtract off remainder
	  MOV	  BL,' '               ; write some blanks
	  POP	  DX
TAB_LOOP:
	  CALL	  DISPLAY_CHAR
	  LOOP	  TAB_LOOP

	  POP	  CX
	  SUB	  AL,AL
	  RET

NOT_TAB:

; ----------

	  CMP	  AL,08h	       ; backspace?
	  JNE	  NOT_BACKSPACE

	  CMP	  DI,STARTING_LINE
	  JE	  AT_START
	  SUB	  DI,2		       ; back up a space

AT_START:
	  MOV	  BL,' '               ; write a blank
	  CALL	  DISPLAY_CHAR

	  SUB	  DI,2		       ; back up a space
	  SUB	  AL,AL
	  RET

NOT_BACKSPACE:

; ----------

	  CMP	  AL,00h	       ; null?
	  JNE	  NOT_NULL

	  TEST	  LOCAL_FLAG,ZERO_TAGGED  ; does this mean end of string?
	  JZ	  NOT_NULL		  ;  branch if null meaningless
	  MOV	  CX,1		       ; terminate the display loop
	  DEC	  SI		       ; backup so basic can see null too
	  SUB	  AL,AL
	  RET

NOT_NULL:

; ----------

	  MOV	  AH,2
	  SUB	  AH,1		       ; set flag to display the char
	  RET

SPECIAL   ENDP

;______________________________________________________________________________

;  routine to display a character in BL - used only for special characters
;     attribute is in BH


DISPLAY_CHAR	  PROC	NEAR

	  CLI
HSYNC_WAIT3:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JNZ	  HSYNC_WAIT3	       ; wait for retrace
HSYNC_WAIT4:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JZ	  HSYNC_WAIT4	       ; wait for retrace

	  MOV	  AX,BX
	  STOSW 		       ; store character and attribute

	  STI
	  RET

DISPLAY_CHAR	  ENDP


;______________________________________________________________________________

LASTADDR  LABEL   BYTE


COPYRIGHT LABEL   BYTE
	  DB	  10,13
	  DB  '         CLUBware  (tm)',10,13,10,13
	  DB  'COMPRINT - Enhancement to the Basic Compiler Print statement'
	  DB	  10,13
	  DB  '                 (for routines compiled without /O option)'
	  DB	  10,13,10,13
	  DB  '         Copyright 1984 Rayhawk Automation N.W. Inc',10,13
	  DB  '                        P.O. Box 1427',10,13
	  DB  '                        Beaverton, Oregon   97075',10,13,'$'


;______________________________________________________________________________

COMPRINT  PROC	  FAR


	  PUSH	  DS		       ; Push addr of Program Segment Prefix
	  SUB	  AX,AX 	       ; Zero AX
	  PUSH	  AX		       ; Push zero onto stack
;					 (offset of INT 20 within PSP)


;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	   take over the INT 10h		 |
;		      | 	   interrupt if not already done	 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  DS,AX 	       ; address low memory

;	  CMP	  WORD PTR DS:[40h],OFFSET INTSWAP
;	  JE	  ALREADY_DONE

	  MOV	  AX,WORD PTR DS:[40h] ; save original int10
	  MOV	  ORIG_INT10,AX
	  MOV	  AX,WORD PTR DS:[42h]
	  MOV	  ORIG_INT10+2,AX

	  MOV	  AX,SEG COMPRINT
	  MOV	  DS,AX
	  MOV	  DX,OFFSET INTSWAP    ; Load offset of interrupt service mod
	  MOV	  AX,2510h	       ; Prepare for DOS service call type 25
;					 to establish service for INT 10
	  INT	  21h		       ; Ask DOS to establish service

;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	   issue copyright message		 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  DX,OFFSET COPYRIGHT
	  MOV	  AH,9
	  INT	  21h


;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	   modify INT 20 into INT 27 in the	 |
;		      | 	   program segment prefix		 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  BYTE PTR ES:[01],27h ; Change INT 20h to INT 27h

;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	6) load address of ending tag into DX	 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  AX,SEG LASTADDR
	  SUB	  AX,SEG COMPRINT
	  MOV	  CL,4		       ; prepare for 4 bit shift
	  SHL	  AX,CL 	       ; shift up (convert from seg to abs)
	  ADD	  AX,OFFSET LASTADDR   ; add address of bottom location
	  ADD	  AX,0103h	       ; Pad offset because DOS measures
;					  offset relative to Program
;					  Segment Prefix
	  MOV	  DX,AX 	       ; leave where DOS will find it

;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	7) use RET FAR to return to DOS and	 |
;		      | 	   leave service routine resident	 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

ALREADY_DONE:

	  RET

COMPRINT  ENDP

SCRDSEG   ENDS

;______________________________________________________________________________

STACK	  SEGMENT PARA STACK 'STACK'
	  DB	  24 DUP('STACK***')
TOPSTACK  DB	  0
STACK	  ENDS

	  END	  COMPRINT
```
{% endraw %}

## DEBUGFIX.TXT

{% raw %}
```


File: DEBUGFIX.TXT		     On: CLUBware Software Diskette #1
Author: Stan Radzio
Copyright (C) 1984. RAYHAWK AUTOMATION, N W, INC.

This patch to DOS 2.0 DEBUG prevents system lockup during trace
operations.

While single stepping through programs with the DEBUG T (trace)
command, a timer interrupt may occur at the moment DEBUG transfers
control to the next program instruction to execute.  Instead of single
stepping the next instruction from the user's program, DEBUG begins
execution of the first instruction within the timer interrupt routine:
an STI at location F000:FEA5 .

When this happens, DEBUG displays the current register contents, the
STI instruction from the timer interrupt routine, the DEBUG command
prompt (-), then waits for a command from the keyboard.
Unfortunately, the timer interrupt is an external hardware interrupt
prioritized by the 8259 interrupt controller chip present on the PC
motherboard.  Once a timer interrupt occurs, no further external
interrupts are allowed by the 8259 until an end-of-interrupt signal is
sent to the 8259.  Characters are transmitted from the keyboard to the
PC by means of an external interrupt.  DEBUG is left in a state where
it is waiting for a command from the keyboard while the keyboard
cannot communicate with the PC because external interrupts have been
temporarily disabled by the 8259.  The only recovery possible at this
point is to power down the PC, then power up for a cold reboot.

We have seen one previous fix to this problem.	The circumvention is
to disable timer interrupts while tracing program execution.  From
within DEBUG, use the I (in) command to retrieve the current contents
of port 21h.  This is the mask used by the 8259 to determine which
external interrupts will be passed through to the 8088 CPU.

	-I  21
	BC
	-

The normal mask is BC allowing keyboard interrupts, disk controller
interrupts, and timer interrupts.  Change the mask to BD to prevent
timer interrupts.

	-O  21	BD
	-

There is a major problem with this process other than inaccuracies in
the time of day.  The timer interrupt service routine is used by the
BIOS to turn off the diskette drive motor after diskette operations.
With the timer interrupts masked off, the next diskette I/O will start
the motor and the motor will remain on indefinitely.

A true fix for this problem must be a modification to DEBUG itself.
Once the problem occurs, the keyboard is silenced and there is no
opportunity to invoke special service routines to bail us out.












File: DEBUGFIX.TXT					Page 2



One modification to DEBUG would be to have DEBUG send an
end-of-interrupt signal to the 8259 just before requesting the next
command from the keyboard.  However, the BIOS routines have
initialized the 8259 to recognize a non-specific end-of-interrupt.
The end-of-interrupt signal is a 20h sent to port 20h and means an end
to the current external interrupt whatever it may be.  The possibility
of DEBUG clearing an external interrupt not related to the timer is
very small with the current hardware and software available for the
PC.  As for the future...?

Without access to the source code for DEBUG, we have developed a
modification to DEBUG which eliminates the problem and is completely
safe.  Our modification is to compare the address of the interrupted
routine to the list of hardware interrupt service routines in low
memory.  If the address matches, we know that we collided with the
interrupt and must act quickly to prevent the system from becoming
deaf and mute.

When the timer interrupts the code being traced, DEBUG is given
control with the stack in this state:

	SP	 FEA5  - offset of timer interrupt routine
	SP+2	 F000  - segment of timer interrupt routine
	SP+4	 flags - saved copy of timer's flags
			 (trap flag bit is set)
	SP+6	 XXXX  - offset of user code being traced
	SP+8	 ZZZZ  - segment of user code being traced
	SP+10	 flags - saved copy of user's flags
			 (trap flag bit is set)

Our modification looks at the stack to see the F000:FEA5 and
recognizes we are in trouble.  To extricate ourselves, we clear the
trap flag bit from SP+4, the timer's flags, and perform an IRET to
return control to the timer interrupt routine.	The timer code updates
his count of the seconds in the day, turns the diskette motor off if
needed, signals an end-of-interrupt to the 8259 (very important to
us), then performs an IRET which transfers control to our code at
SP+6.  The trap flag at SP+10 is still set so a single step interrupt
again occurs and DEBUG trace picks up normally as if nothing strange
had happened.  A similar process occurs when any external hardware
interrupt other than the timer occurs during the trace command.

The code we wish to add to DEBUG should be invoked whenever a single
step interrupt occurs.	Locating the correct insertion point within
DEBUG.COM is as simple as looking backwards from the interrupt vector
stored at 0000:0004, the single step interrupt vector.	This interrupt
vector is 0600:08ED for my version of DOS.  The segment value, 600,
varies with the number of I/O buffers, whether there are other
interrupt service routines resident below DEBUG, whether we are
executing from within a BAT file or invoked directly from DOS, etc,
etc.  The important piece of information obtained from this vector is
8ED, the offset relative to the start of DEBUG where we want to begin
our code changes.









File: DEBUGFIX.TXT					Page 3



Within DEBUG at this offset is code to swap the stack and save all the
registers.

	600:8ED     MOV    WORD PTR CS:[2AEA],SP
	600:8F2     MOV    WORD PTR CS:[XXXX],SS

We will replace the MOV instruction at 8ED with a JMP to our special
code.  When our code completes, we will execute the MOV instruction we
have displaced and JMP back to 600:8F2.

We need to find a safe place in memory to insert 35 instructions
within DEBUG.COM.  This is not easy without the source code.  We have
chosen to insert the extra code into the location currently occupied
by the user's program segment prefix.  In turn, the program segment
prefix is pushed up in memory by 64 bytes.  The prefix must be on a
paragraph boundary so the number of bytes stolen must be a multiple of
16.

The next logical step is to begin looking around inside DEBUG for
an invocation of the DOS function 26h which builds the user's program
segment prefix.  The DEBUG code at 600:138 asks DOS to build a program
segment prefix at 600:2f20 but when the smoke clears and the user's
program actually starts execution, the prefix has been moved to
600:2f60 and the area at 2f20 has been trashed.  Since we don't have
DEBUG source, our only possible work around is to pad this area,
soaking up 144 bytes to insert a patch less than 64 bytes long.

We modify DEBUG code at 600:138 from

	MOV  AX,2F17
to
	MOV  AX,2FA0

For good measure we use the DEBUG S (search) command to look around
inside DEBUG.COM for any other occurrences of the string 2F17.	This
search reveals a second place within DEBUG which must be changed, this
time at 600:183 from

	MOV  BX,2F17
to
	MOV  BX,2FA0

The remaining modifications are straight-forward.  Modify the
instruction pointed to by the single step interrupt vector (600:8ED)
from

	MOV    WORD PTR CS:[2AEA],SP
to
	JMP    2F60













File: DEBUGFIX.TXT					Page 4



At 600:2F60 start adding our special instructions

	PUSH  BP
	MOV   BP,SP
	PUSH  AX
	PUSH  BX
	PUSH  CX
	PUSH  DI
	PUSH  ES
	SUB   AX,AX
	MOV   ES,AX
	MOV   DI,20
	MOV   AX,WORD PTR [BP+2]
	MOV   BX,WORD PTR [BP+4]
	MOV   CX,8
	SCASW
	JNE   2F8C
	ES:CMP	 BX,WORD PTR [DI]
	JNE   2F8C
	AND   WORD PTR [BP+6],FEFF
	POP   ES
	POP   DI
	POP   CX
	POP   BX
	POP   AX
	POP   BP
	IRET

If the PUSH BP is at 2F60 then the following ADD is at 2F8C.

	ADD   DI,2
	LOOP  2F78
	POP   ES
	POP   DI
	POP   CX
	POP   BX
	POP   AX
	POP   BP
	CS:
	MOV   [2AEA],SP
	JMP   8F2

We set BP to point to the stack.  Since BP itself is now on the stack,
the offsets listed earlier relative to SP are two bytes off.  We check
the segment and offset stored on the stack to see if it is an external
interrupt service routine.  If it isn't, we restore the registers,
execute the instruction which used to be at 600:8ED, and JMP back to
600:8F2.  If it is an external interrupt, we clear the trap flag with
the AND instruction, restore the registers, then IRET back to the
interrupt service routine.












File: DEBUGFIX.TXT					Page 5



As distributed, the DEBUG.COM file does not contain the temporary
variables used by DEBUG during execution.  These variables reside
between 600:2E80 (end of the DEBUG code) and 600:2F60 (eventual home
of the user's program segment prefix).  Since we are storing our code
at 2F60, we must enlarge the DEBUG.COM file to include our added code
and the intervening temp space.

We modify DEBUG.COM using the DEBUG commands

	-n debug.com
	-l

make the changes and then enlarge DEBUG.COM by writing back to disk
more than we read

	-r cx
	CX 2E80
	:2FA0
	-w
	Writing 2FA0 bytes

The simplest means of propagating this fix to other interested users
is to create a text file containing all the needed DEBUG commands,
then use the TYPE command to put the text file into the pipeline and
feed the commands to DEBUG itself.  If we put the following commands
in a file named DEBUG20.FIX

	n debug.com
	l
	a 138
	mov   ax,2fa0

	a 183
	mov   bx,2fa0

	a 8ed
	jmp   2f60

	a 2f60
	push  bp
	mov   bp,sp
	push  ax
	push  bx
	push  cx
	push  di
	push  es
	sub   ax,ax
	mov   es,ax
	mov   di,20
	mov   ax,word ptr [bp+2]
	mov   bx,word ptr [bp+4]
	mov   cx,8
	scasw
   --------------- Code split for page separation. No blank lines here








File: DEBUGFIX.TXT					Page 6




   --------------- Code split for page separation. No blank lines here
	jne   2f8c
	es:cmp	 bx,word ptr [di]
	jne   2f8c
	and   word ptr [bp+6],feff
	pop   es
	pop   di
	pop   cx
	pop   bx
	pop   ax
	pop   bp
	iret
	add   di,2
	loop  2f78
	pop   es
	pop   di
	pop   cx
	pop   bx
	pop   ax
	pop   bp
	cs:mov [2aea],sp
	jmp   08f2

	r cx
	2fa0
	w
	q

Then with a copy of DEBUG.COM on the diskette in the default drive
merely give the following pipelined command to DOS.

	TYPE  DEBUG20.FIX | DEBUG


The blank lines within the DEBUG20.FIX file are needed for correct
execution of the commands.  Once all the commands have executed, your
DEBUG patch is complete.

The cost of the patch is a DEBUG.COM file which requires 288 more
bytes to store on diskette and which consumes an extra 144 bytes of
memory when executed.

```
{% endraw %}

## DETAB.BAS

{% raw %}
```bas
10   KEY OFF
30   CLS
40   PRINT "This program removes tabs from files"
45 REM
50     INPUT; "What is the name of the input file containing tabs: ",NM$
60	 PRINT " "
70	  OPEN NM$ FOR INPUT AS 2
80     INPUT; "What is the name of the output file: ",OUTNM1$
90	 PRINT " "
100	  IF NM$ <> OUTNM1$ THEN 120
110	    PRINT "The output file must have a different filename" : GOTO 80
120	  OPEN OUTNM1$ FOR OUTPUT AS 1
290 REM
300	    WHILE ( NOT EOF(2) )
310	       LINE INPUT# 2,INPFILE$
320 REM
360		  HASTABS = INSTR(INPFILE$,CHR$(9))
370		  WHILE HASTABS
380		     BLANKFILL% = 9 - HASTABS MOD 8
390		     IF BLANKFILL% = 9 THEN BLANKFILL% = 1
400		     TEMP$ = MID$(INPFILE$,1,HASTABS-1)
410		     TEMP$ = TEMP$ + SPACE$(BLANKFILL%)
420		     INPFILE$ = TEMP$ + MID$(INPFILE$,HASTABS+1)
430		     HASTABS = INSTR(INPFILE$,CHR$(9))
440		  WEND
450 REM
470	       PRINT #1,INPFILE$
480	    WEND
485 REM
490	 PRINT "detab completed"
500	 CLOSE# 1,2
520 REM
```
{% endraw %}

## PRSLASHO.ASM

{% raw %}
```
COMMENT *

			     CLUBware  (tm)

	  PRSLASHO - Enhancement to the Basic Compiler Print statement
				(for routines compiled with /O option)

		   Copyright 1984 Rayhawk Automation N.W. Inc
				  P.O. Box 1427
				  Beaverton, Oregon   97075
									      *

SCRDSEG   SEGMENT

	  ASSUME  CS:SCRDSEG,DS:NOTHING,ES:NOTHING,SS:STACK

ORIG_INT10	  LABEL  WORD	       ; original int 10
	  DW	  0
	  DW	  0

;______________________________________________________________________________

;   Swap the code used by BASIC to print strings.  Swap must be made
;    after BASIC has been loaded and initialized its environment.  When the
;    screen is cleared INTSWAP intercepts the BASIC print statement.

ORIG_SUB	  LABEL  WORD	       ; original subroutine for printing
	  DW	  0		       ;  strings
BASIC_SEGMENT	  LABEL  WORD
	  DW	  0

FLAG_ADDRESS	  LABEL  WORD	       ; address of flag used to determine
	  DW	  0		       ;  target of i/o for basic


SWAPFLAG	  LABEL  BYTE
		  DB  00000000b        ; flag controlling swapping of subs
TRAP_CHAR	  EQU 00000001b        ; trap next character to be printed
SECOND_TIME	  EQU 00000010b        ; second character printed
UNDER_DEBUG	  EQU 00000100b        ; executing under debug

SCREEN_PAGE	  LABEL  WORD
	  DW	  0		       ; address of current page

SCREEN_POSITION   LABEL  WORD
	  DW	  0		       ; address of screen position

BYTES_LINE	  LABEL  WORD
	  DW	  0		       ; address of number of bytes per line

CHAR_ATTRIBUTE	  LABEL  WORD
	  DW	  0		       ; address of attribute

CALLERS_SEG	  EQU  WORD PTR [BP+4]	; location of callers segment on stack

STRING_CALLER	  EQU  WORD PTR [BP+16] ; location of callers offset on stack

NUMBER_CALLER	  EQU  WORD PTR [BP+26] ; location of callers offset on stack


INTSWAP   PROC	  FAR

	  CMP	  AX,0600h	       ; clear screen request?
	  JNE	  NOT_SCREEN_CLEAR
	  MOV	  SWAPFLAG,TRAP_CHAR   ; try trapping the next char printed
	  JMP	  DWORD PTR ORIG_INT10 ; pass call to BIOS


NOT_SCREEN_CLEAR:

	  TEST	  SWAPFLAG,TRAP_CHAR   ; supposed to trap next char?
	  JZ	  NOT_TRAPPED
	  CMP	  AH,09 	       ; request to print a char?
	  JNE	  NOT_TRAPPED
	  TEST	  SWAPFLAG,SECOND_TIME ; is this the second char printed?
	  JNZ	  DO_SWAP
	  OR	  SWAPFLAG,SECOND_TIME ; first character has been seen

NOT_TRAPPED:
	  JMP	  DWORD PTR ORIG_INT10 ; pass call to BIOS

DO_SWAP:
	  TEST	  SWAPFLAG,UNDER_DEBUG
	  JNZ	  NOT_TRAPPED
	  OR	  SWAPFLAG,UNDER_DEBUG
	  PUSH	  BP		       ; address the stack
	  MOV	  BP,SP
	  PUSH	  DS
	  PUSH	  SI
	  PUSH	  AX


	  MOV	  AX,CALLERS_SEG       ; address basic's code space
	  MOV	  DS,AX

	  MOV	  SI,NUMBER_CALLER     ; load offset of intermediate caller
	  SUB	  SI,8		       ; back up to start of LOOP

;    do we recognize this as a number being printed?

	  CMP	  WORD PTR DS:[SI],0AACh	     ; code to print number?
	  JNE	  MAYBE_STRING			     ; jump if so

	  CMP	  BYTE PTR DS:[SI+8],0EBh	     ; just to make sure
	  JE	  GET_SUB_ADDRESS
	  JMP	  ALREADY_SAVED


;     see if perhaps this is a string being printed

MAYBE_STRING:
	  CMP	  WORD PTR DS:[SI+4],0E8ACh	     ; code to print string?
	  JNE	  ALREADY_SAVED 		     ; jump if not

	  CMP	  BYTE PTR DS:[SI+8],0E2h	     ; just to make sure
	  JNE	  ALREADY_SAVED


GET_SUB_ADDRESS:
	  ADD	  SI,WORD PTR DS:[SI+6] 	     ; load offset of sub
	  ADD	  SI,8

;   have we already taken over this subroutine once before?

	  CMP	  WORD PTR DS:[SI+1],OFFSET PRINTER
	  JE	  ALREADY_SAVED

	  CMP	  BYTE PTR DS:[SI],9Ah		     ; opcode is far call?
	  JE	  SECOND_COPY


;   track down the data we need to perform screen output

	  PUSH	  SI
	  PUSH	  AX

	  MOV	  AX,WORD PTR DS:[SI+3] 	     ; load offset of flag
	  MOV	  FLAG_ADDRESS,AX		     ; save it for later

	  ADD	  SI,WORD PTR DS:[SI+11]  ; code where screen position is used
	  ADD	  SI,60h
	  ADD	  SI,WORD PTR DS:[SI]	  ; code where screen position is used
	  ADD	  SI,8
	  MOV	  AX,WORD PTR DS:[SI]
	  MOV	  SCREEN_POSITION,AX

	  ADD	  SI,23h	       ; code where bytes/line is used
	  MOV	  AX,WORD PTR DS:[SI]
	  MOV	  BYTES_LINE,AX

	  ADD	  SI,5Eh	       ; code where attribute is used
	  MOV	  AX,WORD PTR DS:[SI]
	  MOV	  CHAR_ATTRIBUTE,AX

	  SUB	  SI,5		       ; back up to where new position is called
	  ADD	  SI,WORD PTR DS:[SI]  ; add offset of subroutine

	  ADD	  SI,11 	       ; forward to where next sub is called
	  ADD	  SI,WORD PTR DS:[SI]  ; add offset of subroutine

	  ADD	  SI,5		       ; code where page is used
	  MOV	  AX,WORD PTR DS:[SI]
	  MOV	  SCREEN_PAGE,AX


	  POP	  AX
	  POP	  SI


;   replace the original code with a call to PRINTER to intercept prints

SECOND_COPY:
	  MOV	  BYTE PTR DS:[SI],9Ah		      ; opcode is far call
	  MOV	  WORD PTR DS:[SI+1],OFFSET PRINTER   ; target for call
	  MOV	  WORD PTR DS:[SI+3],SEG    PRINTER
	  MOV	  BASIC_SEGMENT,AX		      ; save basic's code seg
	  ADD	  SI,5				      ; walk past call
	  MOV	  ORIG_SUB,SI			      ; save original sub addr

ALREADY_SAVED:
	  MOV	  SWAPFLAG,0			      ; clear the swap flag

	  POP	  AX
	  POP	  SI
	  POP	  DS
	  POP	  BP
	  JMP	  DWORD PTR ORIG_INT10 ; pass clear screen to BIOS now



INTSWAP   ENDP

;______________________________________________________________________________

COMMENT * PRINTER prints a character string on the screen starting
		  at the current cursor position.  After the string is
		  written to the screen the cursor position is updated
		  to just after the string.

	  To use this routine, a clear screen must occur
		  to swap in the PRINTER routine for basic.


	  The PRSLASHO module will take over the INT 10h and make
		  this module permanently resident.  The user from inside
		  his BASIC program will clear the screen with a CLS
		  which will perform the vector swap.

	  Algorithm:

	  On entry
		  DS:[SI] points to string to write
		  CX	  contains count of characters to write
		  BX	  may contain count of blanks to write
		  SCREEN_PAGE	  contains the page to which we write
		  CHAR_ATTRIBUTE  contains the attribute for the text
		  SCREEN_POSITION contains the current screen location and must
			       be updated after print is complete


									      *
;______________________________________________________________________________

;  Local data addressable through CS register


CHAR_COUNT	  LABEL  WORD
	  DW	  0


LINE_START	  LABEL  WORD
	  DW	  0		       ;  0
	  DW	  160		       ;  1
	  DW	  320		       ;  2
	  DW	  480		       ;  3
	  DW	  640		       ;  4
	  DW	  800		       ;  5
	  DW	  960		       ;  6
	  DW	  1120		       ;  7
	  DW	  1280		       ;  8
	  DW	  1440		       ;  9

	  DW	  1600		       ;  10
	  DW	  1760		       ;  11
	  DW	  1920		       ;  12
	  DW	  2080		       ;  13
	  DW	  2240		       ;  14
	  DW	  2400		       ;  15
	  DW	  2560		       ;  16
	  DW	  2720		       ;  17
	  DW	  2880		       ;  18
	  DW	  3040		       ;  19
	  DW	  3200		       ;  20
	  DW	  3360		       ;  21
	  DW	  3520		       ;  22
	  DW	  3680		       ;  23
	  DW	  3840		       ;  24

PAGE_START	  LABEL  WORD
	  DW	  0
	  DW	  4000
	  DW	  8000
	  DW	  12000

STARTING_PAGE	  LABEL  WORD
	  DW	  0

END_OF_PAGE	  LABEL  WORD
	  DW	  0

STARTING_LINE	  LABEL  WORD
	  DW	  0

RESIDUAL	  LABEL  WORD
	  DW	  0


LOCAL_FLAG	  LABEL  BYTE
		  DB   00000000b
JUST_BLANKS	  EQU  00000001b       ; basic wants just blanks displayed
ZERO_TAGGED	  EQU  00000010b       ; string length unknown, tagged by 0


;______________________________________________________________________________

COMMENT *

   New PRINT service routine for BASIC

     Calls to routine XXXX:0C5B are rerouted to this piece of code
     These calls come from several places within the BASIC rutime library
     We service calls from four locations:  - calls to display a string
					    - calls to expand tabs
					    - calls to blank pad fields
					    - calls to display a number
     Calls from anywhere else are serviced by the original basic code.
     The four labels corresponding to the four types of calls we service
     are  STRING_IO
	  REPEAT_BLANKS
	  NUMBER_STRING
	  PAD_FIELD
     The code labeled BASIC_IO passes the interrupt back to the basic code
     for service.
									      *


PRINTER   PROC	  FAR

	  PUSH	  BP
	  PUSH	  ES
	  MOV	  BP,BASIC_SEGMENT
	  MOV	  ES,BP

	  MOV	  LOCAL_FLAG,0	       ; clear the flag for string i/o


;    check context for simple text to screen or possibly something
;      more involved that basic should handle

	  MOV	  BP,FLAG_ADDRESS
	  CMP	  WORD PTR DS:[BP],0
	  JNE	  BASIC_IO

	  MOV	  BP,BYTES_LINE
	  CMP	  BYTE PTR DS:[BP],50h ; 80 bytes per line?
	  JNE	  BASIC_IO

	  MOV	  BP,SP 	       ; address the stack

	  MOV	  BP,WORD PTR [BP+8]	   ; load offset of caller

	  CMP	  BYTE PTR ES:[BP],0EBh    ; number to print?
	  JE	  NUMBER_STRING

	  CMP	  BYTE PTR ES:[BP],04Bh    ; tab to expand?
	  JE	  REPEAT_BLANKS

	  CMP	  BYTE PTR ES:[BP],0E2h    ; is this a loop instruction?
	  JNE	  BASIC_IO
	  CMP	  BYTE PTR ES:[BP-4],0ACh  ; is this LODSB in loop?
	  JE	  STRING_IO
	  CMP	  WORD PTR ES:[BP-5],20B0h ; is this MOV AL in loop?
	  JE	  PAD_FIELD

;    allow original service routine to perform I/O

BASIC_IO:
	  MOV	  BP,SP
	  PUSH	  AX
	  MOV	  AX,WORD PTR [BP+8]
	  POP	  AX

	  POP	  ES
	  POP	  BP
	  ADD	  SP,4		       ; clear our far call from stack
	  PUSH	  SI		       ; original first two statements
	  MOV	  SI,FLAG_ADDRESS
	  MOV	  SI,WORD PTR DS:[SI]  ;   of the basic subroutine
	  JMP	  DWORD PTR ORIG_SUB   ; pass control to original routine



; ----------


;    send a number string to screen
;		  string length is not known but end is tagged by a zero

NUMBER_STRING:

	  PUSH	  BX		       ; save registers used
	  PUSH	  DX
	  PUSH	  DI


;	  ...	  1) store character count and mark the flag for type of i/o

	  DEC	  SI		       ; backup to start of string
	  MOV	  CHAR_COUNT,80        ; always less than 80 characters
	  OR	  LOCAL_FLAG,ZERO_TAGGED
	  MOV	  RESIDUAL,CX	       ; restore original cx contents when done
	  JMP	  SETUP_START


; ----------


;    repeated blanks sent to screen to expand a tab

REPEAT_BLANKS:

	  PUSH	  BX		       ; save registers used
	  PUSH	  DX
	  PUSH	  DI


;	  ...	  1) store character count and mark the flag for type of i/o

	  MOV	  CHAR_COUNT,BX        ; save character count
	  OR	  LOCAL_FLAG,JUST_BLANKS
	  MOV	  RESIDUAL,1	       ; leave one in cx register when done
	  JMP	  SETUP_START


; ----------


;    repeated blanks sent to screen to fill a field area

PAD_FIELD:

	  PUSH	  BX		       ; save registers used
	  PUSH	  DX
	  PUSH	  DI


;	  ...	  1) store character count and mark the flag for type of i/o

	  MOV	  CHAR_COUNT,CX        ; save character count
	  OR	  LOCAL_FLAG,JUST_BLANKS
	  MOV	  RESIDUAL,1	       ; leave one in cx register when done
	  JMP	  SETUP_START


; ----------


;    write the string for basic

STRING_IO:

;	  CMP	  BYTE PTR DS:[06CAh],50h  ; 80 bytes per line?
;		  WAS ORIGINALLY 6D0h
;	  JNE	  BASIC_IO

	  PUSH	  BX		       ; save registers used,
	  PUSH	  DX
	  PUSH	  DI



;	  ...	  1) backup to start of string and store character count

	  DEC	  SI		       ; backup to start of string
	  MOV	  CHAR_COUNT,CX        ; save character count
	  MOV	  RESIDUAL,1	       ; leave one in cx register when done


;	  ...	  2) load current page

SETUP_START:
	  MOV	  BP,SCREEN_PAGE
	  MOV	  BL,BYTE PTR DS:[BP]  ; load current page
	  SUB	  BH,BH
	  SHL	  BX,1		       ; convert to a table offset
	  MOV	  DI,PAGE_START[BX]    ; load start of page
	  MOV	  STARTING_PAGE,DI     ; save the page
	  MOV	  END_OF_PAGE,DI       ; save ending page pointer
	  ADD	  END_OF_PAGE,4000



;	  ...	  3) load current position on page

	  MOV	  BP,SCREEN_POSITION
	  MOV	  DX,WORD PTR DS:[BP]  ; load current position
	  DEC	  DH		       ; basic counts from 1 instead of 0
	  DEC	  DL		       ; basic counts from 1 instead of 0
	  MOV	  BL,DL 	       ; load row number
	  SHL	  BX,1		       ; two bytes per table entry
	  ADD	  DI,LINE_START[BX]    ; add in start of line
	  MOV	  STARTING_LINE,DI     ; store this for later


	  MOV	  DL,DH 	       ; bring down column number
	  SUB	  DH,DH
	  ADD	  DI,DX 	       ; add in column position
	  ADD	  DI,DX 	       ; account for attribute bytes



;	  ...	  4) load attribute for string

	  MOV	  BP,CHAR_ATTRIBUTE
	  MOV	  BH,BYTE PTR DS:[BP]  ; load attribute for string



;	  ...	  5) move character count to CX for use in loop

	  MOV	  CX,CHAR_COUNT        ; load the character count



;	  ...	  6) load type of crt display from 0000:463

	  SUB	  AX,AX 	       ; address system memory
	  MOV	  ES,AX

	  MOV	  DX,WORD PTR ES:[463h]      ; load address of display adapter
	  ADD	  DX,6			     ; address crt status port


;	  ...	  7) address the screen segment

	  MOV	  AX,0B000h	       ; screen seg for monochrome card
	  CMP	  DX,03DAh	       ; is this a graphic card?
	  JNE	  MONOCHROME

	  MOV	  AX,0B800h	       ; load screen seg for graphic card

MONOCHROME:

	  MOV	  ES,AX 	       ; address the screen buffer



;	  ...	  8) move string to screen while synchronizing
;		      with horizontal retrace

	  TEST	  LOCAL_FLAG,JUST_BLANKS
	  JZ	  DISPLAY_LOOP

	  MOV	  BL,20h	       ; load a blank
BLANK_LOOP:
	  CALL	  DISPLAY_CHAR	       ; display a line of blanks for basic
	  LOOP	  BLANK_LOOP
	  JMP	  UPDATE_POSITION


DISPLAY_LOOP:
	  LODSB 		       ; load next character

	  CMP	  AL,20h	       ; special character?
	  JGE	  NOT_SPECIAL
	  CALL	  SPECIAL
	  JZ	  ANOTHER_CHAR	       ; if flag set, go for another character

NOT_SPECIAL:

	  MOV	  BL,AL

	  CLI
HSYNC_WAIT1:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JNZ	  HSYNC_WAIT1	       ; wait for retrace
HSYNC_WAIT2:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JZ	  HSYNC_WAIT2	       ; wait for retrace

	  MOV	  AX,BX
	  STOSW 		       ; store character and attribute

ANOTHER_CHAR:
	  STI

	  CMP	  DI,END_OF_PAGE
	  JL	  NOT_SCROLLED

	  MOV	  AL,0Dh	       ; force a carriage return and scroll
	  CALL	  SPECIAL

NOT_SCROLLED:

	  LOOP	  DISPLAY_LOOP	       ; repeat cx times



;	  ...	 9) update cursor position on screen


UPDATE_POSITION:
	  MOV	  AX,DI
	  SUB	  AX,STARTING_PAGE
	  SHR	  AX,1		       ; eliminate attribute bytes
	  SUB	  DX,DX
	  MOV	  BX,80 	       ; divide by bytes per line
	  DIV	  BX		       ;   quotient in AL (ROW)
				       ;   remainder in DL (COLUMN)
	  MOV	  DH,AL
	  MOV	  BP,SCREEN_PAGE
	  MOV	  BH,BYTE PTR DS:[BP]  ; load page number
	  MOV	  AH,2		       ; request new position
	  INT	  10h


;	  ...	  10) update cursor position

	  XCHG	  DH,DL 	       ; basic likes this reversed
	  INC	  DH		       ; basic counts from 1 instead of 0
	  INC	  DL		       ; basic counts from 1 instead of 0
	  MOV	  BP,SCREEN_POSITION
	  MOV	  WORD PTR DS:[BP],DX


;	  ...	  11) leave registers in manner BASIC expects

	  MOV	  CX,RESIDUAL	       ; let decrement instr take this to zero
				       ;  inside basic
	  POP	  DI
	  POP	  DX

	  POP	  BX
	  POP	  ES
	  POP	  BP


	  ADD	  SP,4		       ; throw away offset and code segment
				       ;  from our call

	  POP	  AX		       ; throw away near call on stack
	  PUSH	  BASIC_SEGMENT        ; and convert to a far call
	  PUSH	  AX
	  RET			       ; return to basic


PRINTER   ENDP

;______________________________________________________________________________

;  subroutine to handle special control characters

SPECIAL   PROC	  NEAR

; ----------

	  CMP	  AL,0Ah	       ; line feed?
	  JE	  NEW_LINE


; ----------

	  CMP	  AL,0Bh	       ; home?
	  JNE	  NOT_HOME
	  MOV	  DI,STARTING_PAGE     ; start over at top of screen
	  MOV	  STARTING_LINE,DI
	  SUB	  AL,AL
	  RET

NOT_HOME:

; ----------

	  CMP	  AL,0Ch	       ; clear screen?
	  JNE	  NOT_CLEAR
	  MOV	  DI,STARTING_PAGE
	  MOV	  STARTING_LINE,DI
	  MOV	  AL,0		       ; clear whole window
	  JMP	  SHORT SCROLL_SCREEN


NOT_CLEAR:

; ----------

	  CMP	  AL,0Dh	       ; carriage return?
	  JNE	  NOT_CR

NEW_LINE:
	  MOV	  DI,STARTING_LINE
	  ADD	  DI,160
	  JMP	  SHORT TEST_RIGHT

NOT_CR:

; ----------

	  CMP	  AL,1Ch	       ; move right?
	  JNE	  NOT_RIGHT
	  ADD	  DI,2
	  JMP	  SHORT TEST_RIGHT

NOT_RIGHT:

; ----------

	  CMP	  AL,1Dh	       ; move left?
	  JNE	  NOT_LEFT
	  SUB	  DI,2
	  JMP	  SHORT TEST_LEFT

NOT_LEFT:

; ----------

	  CMP	  AL,1Eh	       ; move up?
	  JNE	  NOT_UP

	  SUB	  DI,160
	  JMP	  SHORT TEST_LEFT

NOT_UP:

; ----------

	  CMP	  AL,1Fh	       ; move down?
	  JNE	  NOT_DOWN

	  ADD	  DI,160
	  JMP	  SHORT TEST_RIGHT

NOT_DOWN:
	  JMP	  SHORT TEST_FOR_TAB

; ----------

TEST_RIGHT:
	  CMP	  DI,END_OF_PAGE       ; are we past line 25?
	  JL	  VALID_RIGHT
	  MOV	  DI,STARTING_PAGE     ; back at start of last line
	  ADD	  DI,3840
	  MOV	  STARTING_LINE,DI

	  MOV	  AL,1		       ; scroll one line
	  JMP	  SHORT SCROLL_SCREEN

VALID_RIGHT:
	  SUB	  AL,AL
	  RET

; ----------

SCROLL_SCREEN:
	  PUSH	  CX
	  MOV	  CX,0		       ; start in upper left corner
	  PUSH	  DX
	  MOV	  DX,184Fh	       ; end in lower right
	  MOV	  AH,6
	  PUSHF 		       ; simulate an INT 10
	  CALL	  DWORD PTR ORIG_INT10
	  POP	  DX
	  POP	  CX
	  SUB	  AL,AL
	  RET

; ----------

TEST_LEFT:
	  CMP	  DI,STARTING_PAGE
	  JGE	  VALID_LEFT

	  MOV	  DI,STARTING_PAGE

VALID_LEFT:
	  SUB	  AL,AL
	  RET

; ----------

TEST_FOR_TAB:

	  CMP	  AL,09h	       ; tab?
	  JNE	  NOT_TAB

	  PUSH	  CX
	  PUSH	  DX
	  MOV	  AX,DI
	  SUB	  AX,STARTING_LINE
	  SHR	  AX,1		       ; discount attribute bytes
	  SUB	  DX,DX
	  MOV	  CX,8
	  DIV	  CX
	  MOV	  CX,8		       ; tab positions are every 8 charactes
	  SUB	  CX,DX 	       ; subtract off remainder
	  MOV	  BL,' '               ; write some blanks
	  POP	  DX
TAB_LOOP:
	  CALL	  DISPLAY_CHAR
	  LOOP	  TAB_LOOP

	  POP	  CX
	  SUB	  AL,AL
	  RET

NOT_TAB:

; ----------

	  CMP	  AL,08h	       ; backspace?
	  JNE	  NOT_BACKSPACE

	  CMP	  DI,STARTING_LINE
	  JE	  AT_START
	  SUB	  DI,2		       ; back up a space

AT_START:
	  MOV	  BL,' '               ; write a blank
	  CALL	  DISPLAY_CHAR

	  SUB	  DI,2		       ; back up a space
	  SUB	  AL,AL
	  RET

NOT_BACKSPACE:

; ----------

	  CMP	  AL,00h	       ; null?
	  JNE	  NOT_NULL

	  TEST	  LOCAL_FLAG,ZERO_TAGGED  ; does this mean end of string?
	  JZ	  NOT_NULL		  ;  branch if null meaningless
	  MOV	  CX,1		       ; terminate the display loop
	  DEC	  SI		       ; backup so basic can see null too
	  SUB	  AL,AL
	  RET

NOT_NULL:

; ----------

	  MOV	  AH,2
	  SUB	  AH,1		       ; set flag to display the char
	  RET

SPECIAL   ENDP

;______________________________________________________________________________

;  routine to display a character in BL - used only for special characters
;     and repeated blanks - attribute is in BH


DISPLAY_CHAR	  PROC	NEAR

	  CLI
HSYNC_WAIT3:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JNZ	  HSYNC_WAIT3	       ; wait for retrace
HSYNC_WAIT4:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JZ	  HSYNC_WAIT4	       ; wait for retrace

	  MOV	  AX,BX
	  STOSW 		       ; store character and attribute

	  STI
	  RET

DISPLAY_CHAR	  ENDP


;______________________________________________________________________________



LASTADDR  LABEL   BYTE

COPYRIGHT LABEL   BYTE
	  DB	  10,13
	  DB  '         CLUBware  (tm)',10,13,10,13
	  DB  'PRSLASHO - Enhancement to the Basic Compiler Print statement'
	  DB	  10,13
	  DB  '                 (for routines compiled with /O option)'
	  DB	  10,13,10,13
	  DB  '         Copyright 1984 Rayhawk Automation N.W. Inc',10,13
	  DB  '                        P.O. Box 1427',10,13
	  DB  '                        Beaverton, Oregon   97075',10,13,'$'


;______________________________________________________________________________


PRSLASHO  PROC	  FAR


	  PUSH	  DS		       ; Push addr of Program Segment Prefix
	  SUB	  AX,AX 	       ; Zero AX
	  PUSH	  AX		       ; Push zero onto stack
;					 (offset of INT 20 within PSP)


;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	   take over the INT 10h		 |
;		      | 	   interrupt if not already done	 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  DS,AX 	       ; address low memory

;	  CMP	  WORD PTR DS:[40h],OFFSET INTSWAP
;	  JE	  ALREADY_DONE

	  MOV	  AX,WORD PTR DS:[40h] ; save original int10
	  MOV	  ORIG_INT10,AX
	  MOV	  AX,WORD PTR DS:[42h]
	  MOV	  ORIG_INT10+2,AX

	  MOV	  AX,SEG PRSLASHO
	  MOV	  DS,AX
	  MOV	  DX,OFFSET INTSWAP    ; Load offset of interrupt service mod
	  MOV	  AX,2510h	       ; Prepare for DOS service call type 25
;					 to establish service for INT 10
	  INT	  21h		       ; Ask DOS to establish service

;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	   issue copyright message		 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  DX,OFFSET COPYRIGHT
	  MOV	  AH,9
	  INT	  21h


;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	   modify INT 20 into INT 27 in the	 |
;		      | 	   program segment prefix		 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  BYTE PTR ES:[01],27h ; Change INT 20h to INT 27h

;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	6) load address of ending tag into DX	 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

	  MOV	  AX,SEG LASTADDR
	  SUB	  AX,SEG PRSLASHO
	  MOV	  CL,4		       ; prepare for 4 bit shift
	  SHL	  AX,CL 	       ; shift up (convert from seg to abs)
	  ADD	  AX,OFFSET LASTADDR   ; add address of bottom location
	  ADD	  AX,0103h	       ; Pad offset because DOS measures
;					  offset relative to Program
;					  Segment Prefix
	  MOV	  DX,AX 	       ; leave where DOS will find it

;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|
;		      | 						 |
;		      | 	7) use RET FAR to return to DOS and	 |
;		      | 	   leave service routine resident	 |
;		      | 						 |
;		      | - - - - - - - - - - - - - - - - - - - - - - - - -|

ALREADY_DONE:

	  RET

PRSLASHO  ENDP

SCRDSEG   ENDS

;______________________________________________________________________________

STACK	  SEGMENT PARA STACK 'STACK'
	  DB	  24 DUP('STACK***')
TOPSTACK  DB	  0
STACK	  ENDS

	  END	  PRSLASHO
```
{% endraw %}

## QPRINT.ASM

{% raw %}
```
COMMENT *

			     CLUBware  (tm)

	  QPRINT prints a character string on the screen starting
		  at the current cursor position.  After the string is
		  written to the screen the cursor position is updated
		  to just after the string.

		   Copyright 1984 Rayhawk Automation N.W. Inc
				  P.O. Box 1427
				  Beaverton, Oregon   97075

	  Algorithm:
		  1) load type of crt display from 0000:463
		  2) load current position from 0000:0450
		  3) load count of characters to write
		  4) load string address
		  5) address the screen segment
		  6) move string to screen segment while synchronizing
		      with horizontal retrace
		  7) update cursor position


	  CALL	QPRINT ( FLAG% , CHARACTER$ )

		  FLAG%       environment flag
			      = 0 means under basic interpreter
			      = 1 means under compiled basic not /O
			      = 2 means under compiled basic with /O
			      = 3 means under compiled business basic

		  CHARACTER$  character string to write to screen

									      *

;______________________________________________________________________________

;  Normal assembly directives

CODE	  SEGMENT PARA PUBLIC 'CODE'

	  ASSUME  CS:CODE

	  EXTRN   $PUTCPOS:FAR

	  PUBLIC  QPRINT

STRING_DESC	  EQU  WORD PTR [BP+6] ; address of string descriptor on stack

ENV_FLAG	  EQU  WORD PTR [BP+8] ; address of environment flag on stack

;______________________________________________________________________________

QPRINT	  PROC	  FAR

	  PUSH	  BP		       ; address parameters on stack
	  MOV	  BP,SP

	  PUSH	  AX		       ; save all registers used,
	  PUSH	  BX
	  PUSH	  CX
	  PUSH	  DX
	  PUSH	  DI
	  PUSH	  SI
	  PUSH	  ES


;	  ...	  0) load environment flag showing compiled or interpreted

	  MOV	  SI,ENV_FLAG	       ; load address of environment flag
	  MOV	  SI,WORD PTR [SI]     ; load flag itself



;	  ...	  1) load type of crt display from 0000:463

	  SUB	  AX,AX 		     ; address system area
	  MOV	  ES,AX

	  MOV	  DX,WORD PTR ES:[463h]      ; load address of display adapter
	  ADD	  DX,6			     ; address crt status port



;	  ...	  2) load current position from 0000:0450 if compiled
;		      or from DS:[0056h] if interpreted

	  CMP	  SI,0			   ; check environment flag
	  JNE	  COMPILED

	  MOV	  CX,WORD PTR DS:[0056h]   ; load from basic space
	  XCHG	  CL,CH 		   ; basic has it reversed
	  DEC	  CL			   ; basic starts count from 1
	  DEC	  CH			   ;  instead of zero
	  JMP	  SHORT CALC_POSITION

COMPILED:
	  MOV	  CX,WORD PTR ES:[450h]    ; load current position
					   ;  from system space
CALC_POSITION:
	  SUB	  AH,AH 	       ; isolate row number in AX
	  MOV	  AL,CH
	  MOV	  BL,80 	       ; multiply row by 80 bytes per row
	  MUL	  BL
	  SUB	  CH,CH 	       ; add in column number
	  ADD	  AX,CX

	  MOV	  DI,AX
	  SHL	  DI,1		       ; multiply by 2 to account
				       ;  for attribute bytes

;	  ...	  3) load count of characters to write
;		     only 1 byte if interpreted
;		      2 bytes if compiled

	  MOV	  BX,STRING_DESC       ; load address of string descriptor

	  CMP	  SI,0		       ; running compiled?
	  JNE	  NOT_INTERPRETED

	  MOV	  CL,BYTE PTR [BX]     ; load 1 byte count itself
	  SUB	  CH,CH
	  INC	  BX		       ; bump to string address
	  JMP	  SHORT LOAD_ADDRESS

NOT_INTERPRETED:
	  MOV	  CX,WORD PTR [BX]     ; load 2 byte count itself
	  ADD	  BX,2		       ; bump to string address

LOAD_ADDRESS:

;	  ...	  4) load string address
;		       next two bytes if normal compiled
;			three bytes past if in business basic

	  MOV	  BX,WORD PTR [BX]     ; load offset of string

	  CMP	  SI,3
	  JNE	  NOT_BUSINESS

	  ADD	  BX,3		       ;  Support BBC String format

NOT_BUSINESS:

	  MOV	  SI,BX 	       ; move offset over
	  MOV	  BH,07h	       ; use normal video attribute


;	  ...	  5) address the screen segment

	  MOV	  AX,0B000h	       ; screen seg for monochrome card
	  CMP	  DX,03DAh	       ; is this a graphic card?
	  JNE	  MONOCHROME

	  MOV	  AX,0B800h	       ; load screen seg for graphic card

MONOCHROME:

	  MOV	  ES,AX 	       ; address the screen buffer


;	  ...	  6) move string to screen while synchronizing
;		      with horizontal retrace

DISPLAY_LOOP:
	  LODSB 		       ; load next character
	  MOV	  BL,AL

	  CLI
HSYNC_WAIT1:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JNZ	  HSYNC_WAIT1	       ; wait for retrace
HSYNC_WAIT2:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JZ	  HSYNC_WAIT2	       ; wait for retrace

	  MOV	  AX,BX
	  STOSW 		       ; store character and attribute
	  STI

	  CMP	  DI,4000
	  JL	  NOT_OFF_PAGE
	  MOV	  DI,0		       ; start at top again
NOT_OFF_PAGE:

	  LOOP	  DISPLAY_LOOP	       ; repeat cx times


;	  ...	  7) update cursor position

	  MOV	  AX,DI 	       ; load current position
	  SHR	  AX,1		       ; discount attribute bytes
	  SUB	  DX,DX 	       ; no sign in this division
	  MOV	  BX,80 	       ; divide by nmbr of chars per row
	  DIV	  BX
	  MOV	  DH,AL 	       ; store row number
				       ; column number already in DL
	  MOV	  BH,0		       ; assume page 0
	  MOV	  AH,2		       ; request new position
	  INT	  10h

	  XCHG	  DH,DL 	       ; basic likes it reversed
	  INC	  DL		       ; basic starts count from 1
	  INC	  DH		       ;  instead of zero

	  MOV	  SI,ENV_FLAG	       ; load address of environment flag
	  CMP	  WORD PTR DS:[SI],0   ; examine flag
	  JE	  NOT_COMPILED

	  CMP	  WORD PTR DS:[SI],3   ; business basic?
	  JE	  RET_TO_BASIC

	  CMP	  WORD PTR DS:[SI],2   ; compiled with /O?
	  JE	  WITH_SLASH_O

								    ; FLAG = 1
	  MOV	  WORD PTR DS:[87h],DX ; store screen address
	  JMP	  SHORT RET_TO_BASIC


WITH_SLASH_O:							    ; FLAG = 2
	  MOV	  DI,SEG $PUTCPOS	 ; address put cursor routine
	  MOV	  ES,DI
	  MOV	  DI,OFFSET $PUTCPOS
	  MOV	  DI,WORD PTR ES:[DI+2]  ; load offset of cursor storage
	  MOV	  WORD PTR DS:[DI],DX	 ; store new cursor position
	  JMP	  SHORT RET_TO_BASIC


NOT_COMPILED:							    ; FLAG = 0
	  MOV	  WORD PTR DS:[0056h],DX ; store new cursor position


RET_TO_BASIC:							    ; FLAG = 3

	  POP	  ES
	  POP	  SI
	  POP	  DI
	  POP	  DX
	  POP	  CX
	  POP	  BX
	  POP	  AX
	  POP	  BP
	  RET	  4


QPRINT	  ENDP

;______________________________________________________________________________

CODE	  ENDS

	  END
```
{% endraw %}

## README.TXT

{% raw %}
```
File:  README			On: CLUBware Software Diskette #1
COPYRIGHT (C) 1984.  RAYHAWK AUTOMATION, N W, INC.

This is the table of contents file for CLUBware Software(tm) Diskette #1.

If the software proves useful to you, please send a $5.00 author
appreciation royalty to:

		  Rayhawk Automation, N W, Inc.
		  P.O. BOX 1427
		  Beaverton, Oregon  97075

Please include your name and address (with zip code) so that we can
drop you a line concerning enhancements to the software.  We also
accept problem reports and requests for enhancements from registered
owners.  Your name will not be sold or divulged to anyone outside of
Rayhawk Automation.

    *****  WARNING *****
The WHIZZARD Screen I/O Routines are designed to allow maximum performance
on the IBM PC.	Some of the routines will NOT work properly on non-IBM PCs.
In particular, the pieces that increase print speed for the BASIC
Interpreter (See Item 3, below) will not operate properly with non-IBM
versions of BASIC.  The rest of the software should work on machines that
have a reasonable claim to compatibility.  We have not attempted to test
with non-IBM display cards.  Try the software.	If it works on your
configuration, great.  If not, the source code is on the diskette.

The software on this diskette can be divided into logical pieces by function:

   (1)	WHIZZARD Screen I/O Subroutines. These can be called from BASIC
	to increase the speed at which text gets to the screen.
	Routines:   (source and assembled versions included)
	  QPRINT - quickly print a string at the current location.
	  ZPRINT - print a string using the color/attribute given.
	  CLREOL - clear from the current position to the end of the line.
	  CLREOS - clear from the current position to the end of the screen.
	  SCRLDN - scroll some portion of the screen down.
	  SCRLUP - scroll some portion of the screen up.
	  XREP	 - repeat some character along the x axis.
	  YREP	 - repeat some character down the y axis.

   (2)	A rational approach to calling assembly routines in BASIC code.
	This approach allows one source version for both interpreter and
	compiler input. The example uses Whizzard Screen I/O Subroutines,
	but any useful assembly routines can be added.

	ASMBASIC.TXT  - Explanation of the technique used
	ASMBASIC.ASM  - Source to primary module
	ASMBASIC.OBJ  - Object code for ASMBASIC
	ASMBASIC.EXE  - Sample executable linked with the Whizzard
			Screen I/O Subroutines (See (1) above).
	SUBDEMO.BAS   - Interpreted BASIC program which demonstrates
			ASMBASIC and the sample subroutines.

   (3)	Software to accelerate the PRINT statement for interpreted BASIC
	WITHOUT changing the BASIC source code.

	SCRNIO.TXT    - Explanation of the technique used
	BASPRINT.ASM  - Source to primary module
	BASPRINT.OBJ  - Object code for BASPRINT
	BASPRINT.EXE  - Module to be executed after booting the system






File:  README						Page 2


   (4)	Software to accelerate the PRINT statement for compiled BASIC
	that uses BASRUN.EXE.  Source code is NOT changed.

	SCRNIO.TXT    - Explanation of the technique used
	COMPRINT.ASM  - Source to primary module
	COMPRINT.OBJ  - Object code for COMPRINT
	COMPRINT.EXE  - Module to be executed after booting the system


   (5)	Software to accelerate the PRINT statement for BASIC compiled /O.
	Source code is NOT changed.

	SCRNIO.TXT    - Explanation of the technique used
	PRSLASHO.ASM  - Source to primary module
	PRSLASHO.OBJ  - Object code for PRSLASHO
	PRSLASHO.EXE  - Module to be executed after booting the system


   (6)	Software to demonstrate BASPRINT, COMPRINT, PRSLASHO and ASMBASIC

	EASYDEMO.BAT  - BAT file demonstrating compiled routines using
			PRSLASHO as well as QPRINT.OBJ.  This will run on
			DOS 2.0 or DOS 1.1 with no additional software.
	LONGDEMO.BAT  - BAT file demonstrating all three modules and
			QPRINT from ASMBASIC. This requires an IBM
			BASICA.COM on the same directory or on a DOS 2.0
			PATH.  The COMPRINT demo requires BASRUN.EXE to be
			on the directory or on a DOS 2.0 PATH.
			(We are not shipping BASICA.COM or BASRUN.EXE)
	TIMEDEMO.BAS  - Source to timing program demonstrating
			improvement in BASIC PRINT statement
	BANDDEMO.BAS  - Source to graphic demonstration program
			showing enhancement to PRINT statement
	BANDDEMO.EXE  - BASIC graphic demonstration program
			compiled with the /O option


   (7)	Patch to DOS 2.0  DEBUG  TRACE command to prevent collision between
	external interrupts (like the timer) and the TRACE command

	DEBUGFIX.TXT  - Explanation of the patch
	DEBUG20.FIX   - PIPELINE input file which can be used to apply the
			patch automatically.  (Read the DEBUGFIX.TXT first)


   (8)	Software to allow editing or printing of the source and text files
	shown above despite the presence of tab characters

	DETAB.BAS     - Interpreted BASIC program to remove tabs
	SETABS.EPS    - File which can be printed to set the tab positions
			on an IBM/Epson printer to match the tabs
			in the above text files
```
{% endraw %}

## SCRLDN.ASM

{% raw %}
```
COMMENT *

			     CLUBware  (tm)

	  SCRLDN scrolls down a window on the screen.

		   Copyright 1984 Rayhawk Automation N.W. Inc
				  P.O. Box 1427
				  Beaverton, Oregon   97075


	  Algorithm:
		  Simply pass parameters to BIOS video AH = 6


	  CALL	  SCRLDN ( STARTY% , STARTX% , ENDY% , ENDX% , COUNT% )

		  ( STARTX% , STARTY% ) upper left corner of window

		  ( ENDX% , ENDY% ) lower right corner of window

		  1,1 is upper left corner

		  COUNT%  count of lines to scroll up
			  = 0 means blank the entire window

									      *

;______________________________________________________________________________

;  Normal assembly directives

CODE	  SEGMENT PARA PUBLIC 'CODE'

	  ASSUME  CS:CODE

	  PUBLIC  SCRLDN

;______________________________________________________________________________

SCRLDN	  PROC	  FAR

	  PUSH	  BP
	  MOV	  BP,SP
	  PUSH	  AX		       ; save all registers used,
	  PUSH	  BX		       ;  no data segment local to this
	  PUSH	  CX		       ;  routine so segment registers
	  PUSH	  DX		       ;  are untouched.


;	  ...	  1) load the input parameters into registers

	  MOV	  BX,WORD PTR [BP+6]   ; address of COUNT%
	  MOV	  AL,BYTE PTR [BX]     ; load count itself

	  MOV	  BX,WORD PTR [BP+8]   ; address of ENDX%
	  MOV	  DL,BYTE PTR [BX]
	  DEC	  DL

	  MOV	  BX,WORD PTR [BP+10]  ; address of ENDY%
	  MOV	  DH,BYTE PTR [BX]
	  DEC	  DH

	  MOV	  BX,WORD PTR [BP+12]  ; address of STARTX%
	  MOV	  CL,BYTE PTR [BX]
	  DEC	  CL

	  MOV	  BX,WORD PTR [BP+14]  ; address of STARTY%
	  MOV	  CH,BYTE PTR [BX]
	  DEC	  CH

	  MOV	  BH,07h	       ; use normal video attribute


;	  ...	  2) have BIOS scroll the window down

	  MOV	  AH,7
	  INT	  10h


	  POP	  DX
	  POP	  CX
	  POP	  BX
	  POP	  AX
	  POP	  BP
	  RET	  10


SCRLDN	  ENDP

;______________________________________________________________________________

CODE	  ENDS

	  END
```
{% endraw %}

## SCRLUP.ASM

{% raw %}
```
COMMENT *

			     CLUBware  (tm)

	  SCRLUP scrolls up a window on the screen.

		   Copyright 1984 Rayhawk Automation N.W. Inc
				  P.O. Box 1427
				  Beaverton, Oregon   97075

	  Algorithm:
		  Simply pass parameters to BIOS video AH = 6

	  CALL	  SCRLUP ( STARTY% , STARTX% , ENDY% , ENDX% , COUNT% )

		  ( STARTX% , STARTY% ) upper left corner of window

		  ( ENDX% , ENDY% ) lower right corner of window

		  1,1 is upper left corner

		  COUNT%  count of lines to scroll up
			  = 0 means blank the entire window

									      *

;______________________________________________________________________________

;  Normal assembly directives

CODE	  SEGMENT PARA PUBLIC 'CODE'

	  ASSUME  CS:CODE

	  PUBLIC  SCRLUP

;______________________________________________________________________________

SCRLUP	  PROC	  FAR

	  PUSH	  BP
	  MOV	  BP,SP
	  PUSH	  AX		       ; save all registers used,
	  PUSH	  BX		       ;  no data segment local to this
	  PUSH	  CX		       ;  routine so segment registers
	  PUSH	  DX		       ;  are untouched.


;	  ...	  1) load the input parameters into registers

	  MOV	  BX,WORD PTR [BP+6]   ; address of COUNT%
	  MOV	  AL,BYTE PTR [BX]     ; load count itself

	  MOV	  BX,WORD PTR [BP+8]   ; address of ENDX%
	  MOV	  DL,BYTE PTR [BX]
	  DEC	  DL

	  MOV	  BX,WORD PTR [BP+10]  ; address of ENDY%
	  MOV	  DH,BYTE PTR [BX]
	  DEC	  DH

	  MOV	  BX,WORD PTR [BP+12]  ; address of STARTX%
	  MOV	  CL,BYTE PTR [BX]
	  DEC	  CL

	  MOV	  BX,WORD PTR [BP+14]  ; address of STARTY%
	  MOV	  CH,BYTE PTR [BX]
	  DEC	  CH

	  MOV	  BH,07h	       ; use normal video attribute


;	  ...	  2) have BIOS scroll the window up

	  MOV	  AH,6
	  INT	  10h


	  POP	  DX
	  POP	  CX
	  POP	  BX
	  POP	  AX
	  POP	  BP
	  RET	  10


SCRLUP	  ENDP

;______________________________________________________________________________

CODE	  ENDS

	  END
```
{% endraw %}

## SCRNIO.TXT

{% raw %}
```
File:	SCRNIO.TXT		      on CLUBware Software Diskette #1
Author: Stan Radzio
Copyright (C) 1984. RAYHAWK AUTOMATION, N W, INC


Introductory User Instructions:

  To use the speed-up routines (BASPRINT, COMPRINT or PRSLASHO), do
the following:

    1)Bring your system up with either DOS 1.1 or DOS 2.0.

    2)Have access to the routine you need on disk.

    3)Key the name of the routine you need and press ENTER.
      (For example:  BASPRINT <ENTER>)
      The routine will be loaded by DOS. It will initialize itself,
      and exit back to DOS, leaving itself resident. That is, it
      becomes a part of DOS until the next system initialization.
      If you need the routine for normal work, you should make this
      invocation part of your AUTOEXEC.BAT.

    4)From now on when you invoke your application program, the newly
      resident code will display data much faster.

---------------------------------------------------------------------
The rest of the this article is divided into two sections.  The first
discusses some of the technical issues involved in developing the
Whizzard Screen I/O Routines.  This section is probably above anyone
who is not familiar with Assembly language.  The second section
(which starts on Page 4) gives a detailed description of how the
individual routines work.  You need to read this only if you are
interested or if the above description is a little too concise.
---------------------------------------------------------------------


Motivation For the Effort

I've seen a fair number of articles with titles such as:  "What IBM
Did Right/Wrong With the PC, PC/XT, PCjr".  Several talk about the
slow BIOS screen interface.  I wanted to do something about those
complaints.  So, I rewrote the BIOS screen interface, a complete
replacement for interrupt 10.  I squeezed every bit of speed I could
out of that code.  I used faster instructions, table lookups instead
of multiply instructions, twists in the logic to avoid a divide
instruction, and very tight code.

What did I get for my trouble?	An 8% improvement in the TYPE command,
an 11% improvement in BASICA, a 10% improvement in WORDSTAR.  We're
talking about something not worth the money here.  There is a
principle of Physics involved, the Conservation of Difficulty.	Given
the need to support both the graphics and monochrome card, given the
ability to segment the buffer on the graphics card into 4 or 8 pages,
there is a certain amount of work required to setup the registers for
screen I/O, and that work is a conserved quantity.

Aha, you say!  If I can't eliminate that work, what happens if I send
a whole stream of characters to the screen at once instead of a single
letter at a time?









File:	SCRNIO.TXT					      Page 2



This is a great deduction on your part, Sherlock.  We can do the
register setup once, then send out a whole stream of characters.  As
it is now, the BIOS screen interface will only print one character at
a time on the screen.  (BIOS will repeat a single character several
times but this facility is not terribly useful except to blank out a
line.)	There is a DOS call (AH=9) which appears to handle a stream of
characters.  Actually, this call breaks the string up and sends it to
BIOS a character at a time.  Speaking of this DOS call, whose idea was
it to use the dollar sign ($) as the string terminator?  (Miss Marfle,
please get that man on the phone and bring in my air horn.)

Besides sitting around complaining, we can respond by writing a
subroutine to take the place of the missing BIOS call.	Programs that
do this, like the IBM Personal Editor, are called memory mapped in
some magazines.  This makes for very snappy screens for programs that
you write yourself.  We have provided a set of routines that do this
if you are willing to code the CALLs in your BASIC programs.  They are
included on this diskette.  They were the easy part.  I also got very
tired of the hassles of doing CALLs in the interpreter and created a
technique to make it source-compatible with the compiler approach.
This technique is also included on this diskette.

Now, what can we do for programs we have bought off the shelf?	With a
little patience and a little luck, we can discover a critical area in
many programs where the data to be displayed on the screen is still
tied together as a string.  The program area will probably look like:

	(type A)       MOV     CX,CHAR_COUNT
		       MOV     SI,STRING_ADDRESS
	      LABEL:   LODSB			  ; load a character
		       CALL    OUTPUT_CHAR
		       LOOP    LABEL

The subroutine OUTPUT_CHAR will typically PUSH CX, move a 1 into CX
(display one character per call), issue an INT 10, move the cursor
over one to the right, POP CX, then return.



The other usual layout looks like:

	(type B)       MOV     SI,STRING_ADDRESS
	      LABEL:   LODSB			  ; load a character
		       OR      AL,AL
		       JZ      DONE
		       CALL    OUTPUT_CHAR
		       JMP     LABEL
	      DONE:

This piece of code operates on a string where the length is unknown
but the end of the string is tagged by a zero (null).  Only someone
with tapioca for brains would use a dollar sign as a terminator.











File:	SCRNIO.TXT					    Page 3


Once you find the critical piece of code within a program, you can
modify the CALL OUTPUT_CHAR to call your own subroutine, or you
can replace the call with an unused interrupt, like INT 68.  Your
video subroutine or interrupt handler can then grab up the whole
string, send it to the screen in one shot, then return to the main
program with conditions set to terminate the loop (leave a 1 in CX or
leave SI pointing to a 0).

On CLUBware Software Diskette #1, there are three examples of this
kind of program modification - one for the BASIC Interpreter, one for
Compiled BASIC programs that use BASRUN.EXE, and one for Compiled
BASIC programs which do not use BASRUN.EXE.  Now we leave theory
behind and enter the very complicated real world.  Real programs do
not have just a type A structure or just a type B structure; most use
both techniques.  For instance, the BASIC Interpreter uses type A for
PRINT statements writing text and type B for error messages.  The
BASIC compiler uses type A for printing character strings and type B
for printing numbers.  Both the BASIC Interpreter and the compiler
also have a type C structure which looks like:

	(type C)       MOV     AL,0D
		       CALL    OUTPUT_CHAR

to be used when putting a carriage return on the end of a line.  Both
the Compiler and the Interpreter use such a weird technique for
keeping track of where carriage returns have been written and where
they might be needed (and when the screen should scroll) that we don't
want to mess with type C.  This brings up the next point, if you
replace a subroutine like OUTPUT_CHAR in someone else's program, keep
a copy of the original address in your back pocket.  If you get into a
situation that your replacement subroutine can't handle, you can pass
the call off to the original code.






























File:	SCRNIO.TXT					    Page 4


OVERVIEWS


How BASPRINT can be used to speed up Inpterpreter PRINT statements:

1) Execute BASPRINT to make our code resident.	(Do this once after
   booting the system.)

2) Bring up the BASIC Interpreter by invoking either: BASIC or BASICA.

3) When BASIC clears the screen, BASPRINT intercepts the I/O and takes
   this opportunity to point the interrupt vector for INT B4 to itself.

4) The OUTPUT_CHAR subroutine for BASIC is burned into system ROM so
   it can't be changed.  However, the first instruction of the
   OUTPUT_CHAR subroutine is INT B4 which will allow us to intercept
   the output string and speed it to the screen.

5) When a BASIC PRINT statement executes, it will generate an INT B4.
   BASPRINT will service the interrupt, intercept the output
   string, put it on the screen, then nudge the stack a little so
   control returns to the OUTPUT_CHAR caller with conditions set to
   terminate the type A loop.

6) The increase in PRINT speed is a function of the string length to
   be displayed.  A seven-fold increase in speed is demonstrated by
   the TIMEDEMO program on the CLUBware diskette.


How COMPRINT is used to speed up PRINT Statements compiled non-/O.

1) Execute COMPRINT to make our code resident.	(Do this once after
   booting the system.)

2) Execute your compiled and linked BASIC program.

3) When the BASIC module, BASRUN.EXE, clears the screen, COMPRINT
   intercepts the I/O and uses the break in the action to change the
   first instructions of the OUTPUT_CHAR subroutine into a call to the
   PRINTER subroutine inside COMPRINT.	The OUTPUT_CHAR subroutine
   inside BASRUN.EXE is loaded into high memory by the initialization
   code generated by the BASIC compiler and linked from BASRUN.LIB.
   The exact location of OUTPUT_CHAR is a function of the amount of
   memory in your machine.  COMPRINT tracks it down and modifies it
   at execution time.  This is not terribly difficult since the
   routine that tried to clear the screen is a near relative to
   OUTPUT_CHAR (same code segment).

4) When a BASIC PRINT executes, the control will filter down to the
   OUTPUT_CHAR subroutine who will pass the string to COMPRINT for
   display on the screen.

5) COMPRINT will increase PRINT speed in the TIMEDEMO program by a
   factor of eleven.









File:	SCRNIO.TXT					    Page 5




How PRSLASHO is used to speed up PRINT Statements compiled with /O.

There is a similar module for BASIC compiled with the /O option.  The
module is called PRSLASHO and the flow of control is close to that in
COMPRINT with the extra complication that the data areas accessed by
PRSLASHO are not fixed relative to the BASIC library routines.	Their
final position is set by the LINK command and those data areas must be
located by PRSLASHO at execution time.


Storage Requirements:

You can use all of the modules at the same time.  Execute each one
after booting the system, then run the BASIC Interpreter, execute a
BASIC program compiled with or without the /O option, go back to the
Interpreter, whatever.	Each module uses about 1056 bytes of memory.


Some Limitations:

1) Modules that write directly to the screen buffer will not be sped
   up.

2) DOS 2.0 pipelining will not pick up the screen output while these
   programs are running.

3) WINDOW type packages will probably not work properly.

4) BASPRINT will only work with the IBM versions of BASIC and BASICA.
   It will not work with any version of BASIC that does not use the
   IBM ROM routines. This should eliminate all other machines.

```
{% endraw %}

## SUBDEMO.BAS

{% raw %}
```bas
10 REM
20 REM	Determine whether we are running compiled or interpreted
30 REM		    FLAG% = 0	if interpreted
40 REM		    FLAG% = 1	if compiled without /O (needs BASRUN.EXE)
45 REM		    FLAG% = 2	if compiled with /O
50 REM		    FLAG% = 3	if business basic compiled
60 REM
65 DEFINT I	  '   *****  this ISUBINIT will be an integer
70    KEY OFF
80	FOR I% = 1 TO 10
90	   KEY I%,""
100	NEXT I%
110 REM
120   DEF SEG
130   TEST$ = "K"
140   A% = VARPTR(TEST$)
150    B% = PEEK(A%+1) + 256*PEEK(A%+2)
160	 IF CHR$(PEEK(B%)) = "K" THEN FLAG% = 0 : GOTO 230
170    B% = PEEK(A%+2) + 256*PEEK(A%+3)
180	 IF CHR$(PEEK(B%)) <> "K" THEN FLAG% = 3 : GOTO 740
182	  WIDTH 80 : IF PEEK(&H7CC) = 80 THEN FLAG% = 1   ELSE FLAG% = 2
188	   GOTO 740
200 REM
210 REM If interpreted, check that ASMBASIC is resident below the interpreter
220 REM
230  DEF SEG = 0
240  A% = PEEK(&H19C) + 256*PEEK(&H19D) : B% = PEEK(&H19E) + 256*PEEK(&H19F)
250	DEF SEG = B%
260	IF (PEEK(A%-1) = &H52) AND (PEEK(A%-2) = &H52) THEN 330
270	  CLS : PRINT TAB(85);"ASMBASIC must be executed once before starting"
280		PRINT TAB(15);"the Basic interpreter"
290	  SYSTEM
300 REM
310 REM If interpreted, then get the segment and offset of the utility routines
320 REM
330    DEF SEG
340    DIM INIT%(3)	       ' setup subroutine containing  INT  67h
350    INIT%(1) = &H67CD       '                              RETF 2
360    INIT%(2) = &H2CA
370    INIT%(3) = 0
380    ISUBINIT = 0
390 REM
400 REM 	    get the code segment of the utility subroutines
410  SEGVALUE% = 0
420    ISUBINIT = VARPTR(INIT%(1)): CALL ISUBINIT(SEGVALUE%)
430 REM
440 REM 	    get the offset of the utility subroutines
450  A% = 1
460    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
470	 QPRINT = A%
480  A% = 2
490    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
500	 SCRLDN = A%
510  A% = 3
520    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
530	 SCRLUP = A%
540  A% = 4
550    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
560	 XREP = A%
570  A% = 5
580    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
590	 YREP = A%
600  A% = 6
610    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
620	 CLREOL = A%
630  A% = 7
640    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
650	 CLREOS = A%
660  A% = 8
670    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
680	 ZPRINT = A%
690 REM
700 REM 	    set the segment value for interpreted basic
710 REM
720	 DEF SEG = SEGVALUE%
730 REM
740 REM  define some attributes for use throughout the demo
750 REM
760    CLS : LOCATE 4,4 : INPUT "Would you like the demonstration in color (Y/N)";A$
770    IF A$ = "Y" OR A$ = "y" THEN 970
780    IF A$ <> "N" AND A$ <> "n" THEN 760
790 REM
800 REM 	black and white attributes
810 REM
820	NORMAL%  = 7   ' normal intensity white on black
830	BLUE%	 = 7
840	GREEN%	 = 7
850	CYAN%	 = 7
860	RED%	 = 7
870	MAGENTA% = 7
880	BROWN%	 = 7
890	YELLOW%  = 7
900	WHITE%	 = 15  ' high intensity white on black
910	LIGHTER% = 7
920	BLINK%	 = 128
930	    GOTO 1240
940 REM
950 REM 	color attributes
960 REM
970	NORMAL%  = 7   ' normal intensity white on black
980	BLUE%	 = 1
990	GREEN%	 = 2
1000	CYAN%	 = 3
1010	RED%	 = 4
1020	MAGENTA% = 5
1030	BROWN%	 = 6
1040	YELLOW%  = 14
1050	WHITE%	 = 15  ' high intensity white on black
1060 REM
1070 REM  To make a color lighter, logically OR the LIGHTER% with
1080 REM    the color.
1090 REM	     Ex:      ATTRIBUTE% = RED% OR LIGHTER%
1100 REM    will give a light red color.
1110 REM
1120	       LIGHTER% = 8
1130 REM
1140 REM  To make a color blink, logically OR the BLINK% with
1150 REM    the color.
1160 REM	     Ex:      ATTRIBUTE% = RED% OR BLINK%
1170 REM    will give a blinking red color.
1180 REM
1190	       BLINK% = 128
1200 REM
1210 REM
1220 REM  start by demonstrating XREP --------------------------------------
1230 REM
1240	CLS : INPUT "Type a carriage return for a countdown by subroutine XREP",A$
1250	 FOR I% = 9 TO 0 STEP -1
1260	       LOCATE 1,1
1270	       COUNT% = 2000	    ' write 2000 characters (full screen
1280	       LETTER$ = RIGHT$(STR$(I%),1)   ' letter to write is loop counter
1290 REM	  if user asks for a color display then use I% to set color
1300		  IF BLUE% = 1 THEN ATTRIBUTE% = I% + 1 ELSE ATTRIBUTE% = NORMAL%
1310	       CALL XREP( FLAG% , LETTER$ , COUNT% , ATTRIBUTE% )
1320	 NEXT I%
1330 REM
1340	CLS : LOCATE 2,1
1350	PRINT TAB(3);"XREP repeats a given character along the x axis"
1360	PRINT TAB(9);"The argument list for XREP includes the repetition count"
1370	PRINT TAB(9);"and color you want for the character.  The demonstration"
1380	PRINT TAB(9);"countdown is generated by a LOCATE 1,1 followed by a call"
1390	PRINT TAB(9);"to XREP with a repeat count of 2000 (25 lines times 80"
1400	PRINT TAB(9);"columns = 2000)."
1410	  LOCATE 10,20 : A$ = "A" : COUNT% = 40
1420	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1430	  LOCATE 11,25 : A$ = "B" : COUNT% = 30
1440	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1450	  LOCATE 12,30 : A$ = "C" : COUNT% = 20
1460	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1470	  LOCATE 13,35 : A$ = "D" : COUNT% = 10
1480	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1490	  LOCATE 14,39 : A$ = "E" : COUNT% = 2
1500	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1510	  LOCATE 15,35 : A$ = "F" : COUNT% = 10
1520	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1530	  LOCATE 16,30 : A$ = "G" : COUNT% = 20
1540	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1550	  LOCATE 17,25 : A$ = "H" : COUNT% = 30
1560	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1570	  LOCATE 18,20 : A$ = "I" : COUNT% = 40
1580	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1590 REM
1600	LOCATE 20,5
1610	PRINT TAB(3);"Press ESC to repeat the XREP countdown.  Enter a carriage"
1620	PRINT TAB(3);"return to proceed to the next demonstration."
1630	X$ = INKEY$ : IF LEN(X$) = 0 THEN 1630
1640	IF X$ = CHR$(13) THEN 1700
1650	IF X$ = CHR$(27) THEN 1250 ELSE 1630
1660 REM
1670 REM
1680 REM  next demonstrate	YREP --------------------------------------
1690 REM
1700	CLS : LOCATE 2,2
1710	PRINT "Just as XREP repeats a character along the X axis"
1720	PRINT "YREP repeats a character down the Y axis.  For applications"
1730	PRINT "with vertical elements, this beats the tar out of a series"
1740	PRINT "of LOCATE:PRINT statment pairs."
1750	PRINT
1760	INPUT "Type a carriage return for a demonstration of subroutine YREP",A$
1770 REM
1780	CLS
1790	LOCATE 1,1 : LETTER$ = "A" : COUNT% = 25 : ATTRIBUTE% = NORMAL%
1800		     GOSUB 2310
1810	LOCATE 2,2 : LETTER$ = "B" : COUNT% = 23 : ATTRIBUTE% = BLUE%
1820		     GOSUB 2310
1830	LOCATE 3,3 : LETTER$ = "C" : COUNT% = 21 : ATTRIBUTE% = GREEN%
1840		     GOSUB 2310
1850	LOCATE 4,4 : LETTER$ = "D" : COUNT% = 19 : ATTRIBUTE% = CYAN%
1860		     GOSUB 2310
1870	LOCATE 5,5 : LETTER$ = "E" : COUNT% = 17 : ATTRIBUTE% = RED%
1880		     GOSUB 2310
1890   LOCATE 6,6 : LETTER$ = "F" : COUNT% = 15 : ATTRIBUTE% = MAGENTA%
1900		     GOSUB 2310
1910   LOCATE 7,7 : LETTER$ = "G" : COUNT% = 13 : ATTRIBUTE% = BROWN%
1920		     GOSUB 2310
1930   LOCATE 8,8 : LETTER$ = "H" : COUNT% = 11
1940		     ATTRIBUTE% = BLUE% OR LIGHTER%
1950		     GOSUB 2310
1960   LOCATE 9,9 : LETTER$ = "I" : COUNT% = 9
1970		     ATTRIBUTE% = GREEN% OR LIGHTER%
1980		     GOSUB 2310
1990   LOCATE 10,10 : LETTER$ = "J" : COUNT% = 7
2000		      ATTRIBUTE% = CYAN% OR LIGHTER%
2010		      GOSUB 2310
2020   LOCATE 11,11 : LETTER$ = "K" : COUNT% = 5
2030		      ATTRIBUTE% = RED% OR LIGHTER%
2040		      GOSUB 2310
2050   LOCATE 12,12 : LETTER$ = "L" : COUNT% = 3
2060		      ATTRIBUTE% = MAGENTA% OR LIGHTER%
2070		      GOSUB 2310
2080   LOCATE 13,13 : LETTER$ = "M" : COUNT% = 1
2090		      ATTRIBUTE% = BROWN% OR LIGHTER%
2100		      GOSUB 2310
2110   LOCATE 14,14 : LETTER$ = "N" : COUNT% = 24
2120		      ATTRIBUTE% = BLUE% OR BLINK%
2130		      GOSUB 2310
2140   LOCATE 15,15 : LETTER$ = "O" : COUNT% = 22
2150		      ATTRIBUTE% = GREEN%
2160		      GOSUB 2310
2170   LOCATE 16,16 : LETTER$ = "P" : COUNT% = 20
2180		      ATTRIBUTE% = CYAN%
2190		      GOSUB 2310
2200   LOCATE 17,17 : LETTER$ = "Q" : COUNT% = 18
2210		      ATTRIBUTE% = RED%
2220		      GOSUB 2310
2230   LOCATE 18,18 : LETTER$ = "R" : COUNT% = 16
2240		      ATTRIBUTE% = MAGENTA%
2250		      GOSUB 2310
2260   LOCATE 19,19 : LETTER$ = "S" : COUNT% = 14
2270		      ATTRIBUTE% = BROWN%
2280		      GOSUB 2310
2290   GOTO 2330
2300 REM
2310	 CALL YREP( FLAG% , LETTER$ , COUNT% , ATTRIBUTE% ) : RETURN
2320 REM
2330   LOCATE 2,30 : PRINT "Like XREP, the argument list for YREP includes the"
2340   LOCATE 3,30 : PRINT "repeat count and the color of the character."
2350   LOCATE 4,30 : PRINT "When a repeat count carries a character off the"
2360   LOCATE 5,30 : PRINT "bottom of the screen it wraps around to the top."
2370 REM
2380   LOCATE 7,30 : PRINT "Press ESC to repeat the YREP screen."
2390   LOCATE 8,30 : PRINT "  Enter a carriage return to proceed to"
2400   LOCATE 9,30 : PRINT "  the next demonstration."
2410   X$ = INKEY$ : IF LEN(X$) = 0 THEN 2410
2420   IF X$ = CHR$(13) THEN 2450
2430   IF X$ = CHR$(27) THEN 1780 ELSE 2410
2440 REM
2450 REM
2460 REM  next demonstrate     QPRINT --------------------------------------
2470 REM
2480   CLS : LOCATE 2,1
2490   PRINT TAB(3);"QPRINT will quickly print any string on the screen"
2500   PRINT TAB(9);"starting at the current location.  The cursor is then"
2510   PRINT TAB(9);"moved to just after the string.  Whatever color has been"
2520   PRINT TAB(9);"set by the BASIC COLOR statement will be used by QPRINT"
2530   PRINT TAB(9);"to print the string passed to it."
2540	PRINT
2550	INPUT "Type a carriage return to display a screen using subroutine QPRINT",A$
2560 REM
2562   CLS : LOCATE 2,20
2564	A$ = "This screen has been printed using QPRINT"
2566	CALL QPRINT( FLAG% , A$ )
2570   LOCATE 5,5
2580	A$ = "There are eight subroutines in the Basic Support Clubware Package"
2590	CALL QPRINT( FLAG% , A$ )
2600   LOCATE 7,10
2610	A$ = "XREP     - repeat a character along the X axis some number of times"
2620	CALL QPRINT( FLAG% , A$ )
2630   LOCATE 9,10
2640	A$ = "YREP     - repeat a character down the y axis some number of times"
2650	CALL QPRINT( FLAG% , A$ )
2660   LOCATE 11,10
2670	A$ = "QPRINT   - quickly print a string on the screen"
2680	CALL QPRINT( FLAG% , A$ )
2690   LOCATE 13,10
2700	A$ = "ZPRINT   - write a string to the screen using a special color attribute"
2710	CALL QPRINT( FLAG% , A$ )
2720   LOCATE 15,10
2730	A$ = "SCRLDN   - scroll some portion of the screen down"
2740	CALL QPRINT( FLAG% , A$ )
2750   LOCATE 17,10
2760	A$ = "SCRLUP   - scroll some portion of the screen up"
2770	CALL QPRINT( FLAG% , A$ )
2780   LOCATE 19,10
2790	A$ = "CLREOS   - clear screen from current position to end of page"
2800	CALL QPRINT( FLAG% , A$ )
2810   LOCATE 21,10
2820	A$ = "CLREOL   - clear screen from current position to end of line"
2830	CALL QPRINT( FLAG% , A$ )
2840 REM
2850   LOCATE 24,5
2860	A$ = "Press ESC to rewrite the screen using QPRINT.  Enter a carriage"
2870	CALL QPRINT( FLAG% , A$ )
2880   LOCATE 25,5
2890	A$ = "return to proceed to the next demonstration."
2900	CALL QPRINT( FLAG% , A$ )
2910	X$ = INKEY$ : IF LEN(X$) = 0 THEN 2910
2920	IF X$ = CHR$(13) THEN 2940
2930	IF X$ = CHR$(27) THEN 2570 ELSE 2910
2940 REM
2950 REM
2960 REM  next demonstrate     CLREOL and CLREOS ---------------------------
2970 REM
2980   CLS : LOCATE 2,1
2990   PRINT TAB(3);"CLREOL will clear from the current position to the"
3000   PRINT TAB(9);"end of the line and CLREOS will clear from the current"
3010   PRINT TAB(9);"position to the end of the screen.  Move the cursor using"
3020   PRINT TAB(9);"the cursor control keys (up ";CHR$(24);", down ";CHR$(25);
3030	      PRINT ", left ";CHR$(27);", right ";CHR$(26);") then"
3040   PRINT TAB(12);"press F1 to demonstrate CLREOL"
3050   PRINT TAB(12);"press F2 to demonstrate CLREOS"
3060 REM
3070   A$ = "ABCDEFGHIJ----------KLMNOPQRST----------"
3080   B$ = "----------1234567890----------1234567890"
3090	LOCATE 9,1
3100 REM
3110 REM       Use qprint to prevent unwanted scrolls when writing line 24, 25
3120 REM
3130	 FOR I% = 1 TO 8
3140	    PRINT A$; :  CALL QPRINT( FLAG% , B$ )
3150	    PRINT B$; :  CALL QPRINT( FLAG% , A$ )
3160	 NEXT I%
3170	    PRINT A$; :  CALL QPRINT( FLAG% , B$ )
3180 REM
3190	Y% = 15 : X% = 40
3200	LOCATE Y%,X%,1
3210	X$ = INKEY$ : IF LEN(X$) < 2 THEN 3210
3220	X$ = RIGHT$(X$,1)
3230	IF X$ = CHR$(59) THEN CALL CLREOL( FLAG% ) : GOTO 3370	'F1
3240	IF X$ = CHR$(60) THEN CALL CLREOS( FLAG% ) : GOTO 3370	'F2
3250	IF X$ = CHR$(72) THEN Y% = Y% - 1	   : GOTO 3320	'up
3260	IF X$ = CHR$(80) THEN Y% = Y% + 1	   : GOTO 3320	'down
3270	IF X$ = CHR$(75) THEN X% = X% - 1	   : GOTO 3300	'left
3280	IF X$ = CHR$(77) THEN X% = X% + 1	   : GOTO 3300	'right
3290	GOTO 3210
3300	IF X% < 1 THEN X% = 80 : ELSE IF X% > 80 THEN X% = 1
3310	GOTO 3200
3320	IF Y% < 9 THEN Y% = 25 : ELSE IF Y% > 25 THEN Y% = 9
3330	GOTO 3200
3340 REM
3350 REM  use xrep to clear the top 8 lines
3360 REM
3370   A$ = " " : COUNT% = 8 * 80  : ATTRIBUTE% = NORMAL%
3380	    LOCATE 1,1 : CALL XREP( FLAG% , A$ , COUNT% , ATTRIBUTE% )
3390   LOCATE 2,20 : PRINT "After clearing the requested portion of the screen"
3400   LOCATE 3,20 : PRINT "CLREOL and CLREOS will leave the cursor in its original"
3410   LOCATE 4,20 : PRINT "location."
3420   LOCATE 5,30 : PRINT "Press ESC to repeat the CLREOL/CLREOS demo."
3430   LOCATE 6,30 : PRINT "  Enter a carriage return to proceed to"
3440   LOCATE 7,30 : PRINT "  the next demonstration."
3450   X$ = INKEY$ : IF LEN(X$) = 0 THEN 3450
3460   IF X$ = CHR$(27) THEN 2980
3470   IF X$ = CHR$(13) THEN 3530 ELSE 3450
3480 REM
3490 REM
3500 REM
3510 REM  next demonstrate     ZPRINT, SCRLDN, SCRLUP  ---------------------
3520 REM
3530   CLS : LOCATE 2,1
3540   PRINT TAB(3);"ZPRINT will print a character string starting at the"
3550   PRINT TAB(9);"current location using the special color/attribute"
3560   PRINT TAB(9);"passed in."
3570   PRINT TAB(3);"This screen will also demonstrate SCRLUP/SCRLDN which"
3580   PRINT TAB(9);"allow any portion of the page to be scrolled up or"
3585   PRINT TAB(9);"down."
3590   PRINT
3600   INPUT "Type a carriage return to display a screen using subroutine ZPRINT",A$
3601   CLS
3602   GOSUB 5690  ' write instructions at bottom of screen
3603	A1$ = "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"
3604	A2$ = "2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2"
3605	A3$ = "3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3"
3606	A4$ = "4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4"
3607	A5$ = "5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5"
3608	A6$ = "6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6"
3609	A7$ = "7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7"
3610	A8$ = "8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8"
3611	A9$ = "9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9"
3612	AA$ = "A A A A A A A A A A A A A A A A A A A"
3613	AB$ = "B B B B B B B B B B B B B B B B B B"
3614	AC$ = "C C C C C C C C C C C C C C C C C"
3615	AD$ = "D D D D D D D D D D D D D D D D"
3616	AE$ = "E E E E E E E E E E E E E E E"
3619 REM
3620	GOSUB 5030   'clear the screen
3630	GOSUB 5390   'generate page1 on top half of screen
3650	GOTO  4000
3660 REM
3670	GOSUB 5030   'clear the screen
3680	GOSUB 5090   'generate page2 on bottom half of screen
3700	GOTO  4000
3710 REM
4000	X$ = INKEY$ : IF LEN(X$) = 0 THEN 4000
4005	IF LEN(X$) = 1 THEN IF X$ = CHR$(13) THEN 6000 : ELSE 4000
4010	X$ = RIGHT$(X$,1)
4020	IF X$ = CHR$(59) THEN		     GOTO 3620	'F1 page 1
4030	IF X$ = CHR$(60) THEN		     GOTO 3670	'F2 page 2
4040	IF X$ = CHR$(72) THEN  GOSUB 5830  : GOTO 4000	'scroll up
4050	IF X$ = CHR$(80) THEN  GOSUB 5890  : GOTO 4000	'scroll down
4060	GOTO 4000
4997 REM
4998 REM --start of subroutines used for ZPRINT demo-----
4999 REM
5000	REM
5010	REM  clear the top 19 lines using SCRLDN
5020	REM
5030	 X1% = 1 : Y1% = 1 : X2% = 80 : Y2% = 19 : COUNT% = 0
5040	     CALL SCRLDN( Y1% , X1% , Y2% , X2% , COUNT%)
5050	  RETURN
5060	REM
5070	REM  generate page2 in the bottom half of the screen
5080	REM
5090	PAGE% = 2
5095	A$ = "/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\"
5100	  LOCATE 11,10 : CALL ZPRINT ( FLAG% , A$ , BLUE% )
5110	A$ = CHR$(179) : COUNT% = 7
5120	  LOCATE 12,9  : CALL YREP ( FLAG% , A$ , COUNT% , BLUE% )
5130	A$ = CHR$(192) : COUNT% = 1
5140	  LOCATE 19,9  : CALL XREP ( FLAG% , A$ , COUNT% , BLUE% )
5150	A$ = CHR$(196) : COUNT% = 60
5160			 CALL XREP ( FLAG% , A$ , COUNT% , BLUE% )
5170	A$ = CHR$(217) : COUNT% = 1
5180			 CALL XREP ( FLAG% , A$ , COUNT% , BLUE% )
5190	A$ = CHR$(179) : COUNT% = 7
5200	  LOCATE 12,70 : CALL YREP ( FLAG% , A$ , COUNT% , BLUE% )
5220	  LOCATE 12,18 : CALL ZPRINT ( FLAG% , A7$ , YELLOW% )
5240	  LOCATE 13,17 : CALL ZPRINT ( FLAG% , A6$ , YELLOW% )
5260	  LOCATE 14,16 : CALL ZPRINT ( FLAG% , A5$ , YELLOW% )
5280	  LOCATE 15,15 : CALL ZPRINT ( FLAG% , A4$ , YELLOW% )
5300	  LOCATE 16,14 : CALL ZPRINT ( FLAG% , A3$ , YELLOW% )
5320	  LOCATE 17,13 : CALL ZPRINT ( FLAG% , A2$ , YELLOW% )
5340	  LOCATE 18,12 : CALL ZPRINT ( FLAG% , A1$ , YELLOW% )
5350	 RETURN
5360   REM
5370   REM  generate page1 in the top half of the screen
5380   REM
5390	PAGE% = 1
5395	A$ = "\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/"
5400	  LOCATE 10,10 : CALL ZPRINT ( FLAG% , A$ , RED% )
5410	A$ = CHR$(179) : COUNT% = 7
5420	  LOCATE  3,9  : CALL YREP ( FLAG% , A$ , COUNT% , RED% )
5430	A$ = CHR$(218) : COUNT% = 1
5440	  LOCATE  2,9  : CALL XREP ( FLAG% , A$ , COUNT% , RED% )
5450	A$ = CHR$(196) : COUNT% = 60
5460			 CALL XREP ( FLAG% , A$ , COUNT% , RED% )
5470	A$ = CHR$(191) : COUNT% = 1
5480			 CALL XREP ( FLAG% , A$ , COUNT% , RED% )
5490	A$ = CHR$(179) : COUNT% = 7
5500	  LOCATE  3,70 : CALL YREP ( FLAG% , A$ , COUNT% , RED% )
5520	  LOCATE  3,26 : CALL ZPRINT ( FLAG% , AE$ , YELLOW% )
5540	  LOCATE  4,25 : CALL ZPRINT ( FLAG% , AD$ , YELLOW% )
5560	  LOCATE  5,24 : CALL ZPRINT ( FLAG% , AC$ , YELLOW% )
5580	  LOCATE  6,23 : CALL ZPRINT ( FLAG% , AB$ , YELLOW% )
5600	  LOCATE  7,22 : CALL ZPRINT ( FLAG% , AA$ , YELLOW% )
5620	  LOCATE  8,21 : CALL ZPRINT ( FLAG% , A9$ , YELLOW% )
5640	  LOCATE  9,20 : CALL ZPRINT ( FLAG% , A8$ , YELLOW% )
5650	 RETURN
5660 REM
5670 REM   print instructions at the bottom of the screen
5680 REM
5690	A$ = "Type F1 to display page 1"
5700	  LOCATE  20,6 : CALL ZPRINT ( FLAG% , A$ , GREEN% )
5710	A$ = "Type F2 to display page 2"
5720	  LOCATE  21,6 : CALL ZPRINT ( FLAG% , A$ , GREEN% )
5730	A$ = "Type "+CHR$(24)+" to scroll the page up"
5740	  LOCATE  22,6 : CALL ZPRINT ( FLAG% , A$ , GREEN% )
5750	A$ = "Type "+CHR$(25)+" to scroll the page down"
5760	  LOCATE  23,6 : CALL ZPRINT ( FLAG% , A$ , GREEN% )
5770	A$ = "Type a carriage return to leave this demonstration screen"
5780	  LOCATE  24,6 : CALL ZPRINT ( FLAG% , A$ , GREEN% )
5790   RETURN
5800 REM
5810 REM  scroll page up a line
5820 REM
5830	 IF PAGE% = 2 THEN X1% = 10 : Y1% = 12 : X2% = 69 : Y2% = 18				      ELSE X1% = 10 : Y1% = 3 : X2% = 69 : Y2% = 9
5840	    COUNT% = 1 : CALL SCRLUP( Y1% , X1% , Y2% , X2% , COUNT%)
5850	RETURN
5860 REM
5870 REM  scroll page down a line
5880 REM
5890	 IF PAGE% = 2 THEN X1% = 10 : Y1% = 12 : X2% = 69 : Y2% = 18				      ELSE X1% = 10 : Y1% = 3 : X2% = 69 : Y2% = 9
5900	    COUNT% = 1 : CALL SCRLDN( Y1% , X1% , Y2% , X2% , COUNT%)
5910	RETURN
5997 REM
5998 REM ----end of subroutines used for ZPRINT demo-----
5999 REM
6000 REM
6010   CLS : LOCATE 2,1
6020   PRINT TAB(3);"This concludes the ASMBASIC demonstration program."
6025   PRINT
6030   PRINT TAB(9);"The program is stored on diskette in file SUBDEMO.BAS"
6040   PRINT TAB(9);"as a printable text file.  Some versions will however"
6050   PRINT TAB(9);"contain tab characters.  Refer to files DETAB.BAS and"
6060   PRINT TAB(9);"SETABS.EPS for help in eliminating the embedded tabs."
6063 REM
6064   IF FLAG% = 3 THEN SYSTEM 'nothing more to do for business basic
6065 REM
6066   PRINT
6070   IF FLAG% > 0 THEN GOTO 6200
6080   PRINT "You may use this program to demonstrate the BASPRINT module."
6090   PRINT "Execute BASPRINT.EXE, then use the BASIC interpreter to rerun"
6100   PRINT "BASDEMO.BAS .  Those portions of the demonstration screens"
6110   PRINT "generated by PRINT statements will then execute several times"
6120   PRINT "faster."
6130	SYSTEM
6140 REM
6200   IF FLAG% = 1 THEN GOTO 6240 ' already compiled without /O
6202   PRINT "You may use this program to demonstrate the PRSLASHO module."
6210   PRINT "Execute PRSLASHO.EXE, then rerun this compiled BASIC program."
6220   PRINT "Those portions of the demonstration screens generated by"
6230   PRINT "PRINT statements will then execute several times faster."
6240   PRINT
6250   PRINT "If you use the BASIC runtime module BASRUN.EXE, you "
6260   PRINT "can compile and link SUBDEMO.BAS without the /O option."
6270   PRINT "Then execute COMPRINT.EXE to speed up those portions of"
6280   PRINT "the demonstration screens generated by PRINT statements."
6340	SYSTEM
```
{% endraw %}

## TIMEDEMO.BAS

{% raw %}
```bas
1  REM	TIMEDEMO.BAS	Measure time to print 10 long strings on a screen
2  REM			under varying conditions below
3  REM
4  REM	***** NOTE:  USE SUBDEMO.BAS for examples of how to use the routines
5  REM		     Because extra convoluted logic is used here.
6  REM
10 REM	Time QPRINT, PRINT under conditions below
20 REM	Interpreted Standard PRINT
30 REM	Interpreted PRINT with BASPRINT
40 REM	Interpreted QPRINT with ASMBASIC
50 REM	Compiled PRINT
60 REM	Compiled PRINT with COMPRINT or PRSLASHO
70 REM	Compiled QPRINT
80 REM	Compiled CLS versus CLREOS
90 REM	Make a random access file with	time to write the screen.
100 REM For each time cycle, read in the RA file, and display the times for
110 REM   each type of print, and display the number of times the screen has
120 REM   been written.
130 REM Determine whether we are running compiled or interpreted
140 REM 	     FLAG% = 0	 if interpreted
144 REM 	     FLAG% = 1	 if compiled without /O (needs BASRUN.EXE)
145 REM 	     FLAG% = 2	 if compiled with /O
150 REM 	     FLAG% = 3	 if business basic compiled
170 REM
180    DIM A$(20),T$(20)
190    DEFINT S,I
200    KEY OFF
210	FOR I = 1 TO 10
220	   KEY I,""
230	NEXT I
240 REM
250   DEF SEG
260   TEST$ = "K"
270   A% = VARPTR(TEST$)
280    B% = PEEK(A%+1) + 256*PEEK(A%+2)
290	 IF CHR$(PEEK(B%)) = "K" THEN FLAG% = 0 : GOTO 360
300    B% = PEEK(A%+2) + 256*PEEK(A%+3)
310	 IF CHR$(PEEK(B%)) <> "K" THEN FLAG% = 3 : GOTO 788
312	  WIDTH 80 : IF PEEK(&H7CC) = 80 THEN FLAG% = 1   ELSE FLAG% = 2
320	   GOTO 880
330 REM
340 REM If interpreted, check that ASMBASIC is resident below the interpreter
350 REM
360  DEF SEG = 0
370  A% = PEEK(&H19C) + 256*PEEK(&H19D) : B% = PEEK(&H19E) + 256*PEEK(&H19F)
380	DEF SEG = B%
390	IF (PEEK(A%-1) = &H52) AND (PEEK(A%-2) = &H52) THEN ASM%=1:GOTO 470
400	  CLS : PRINT TAB(85);"ASMBASIC must be executed once before starting"
410		PRINT TAB(15);"the Basic interpreter"
420	  ASM% = 0
430	  GOTO 880
440 REM
450 REM If interpreted, then get the segment and offset of the utility routines
460 REM
470    DEF SEG
480    DIM INIT%(3)	       ' setup subroutine containing  INT  67h
490    INIT%(1) = &H67CD       '                              RETF 2
500    INIT%(2) = &H2CA
510    INIT%(3) = 0
520    SUBINIT = 0
530 REM
540 REM 	    get the code segment of the utility subroutines
550  SEGVALUE% = 0
560    SUBINIT = VARPTR(INIT%(1)): CALL SUBINIT(SEGVALUE%)
570 REM
580 REM 	    get the offset of the utility subroutines
590  A% = 1
600    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
610	 QPRINT = A%
620  A% = 2
630    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
640	 SCRLDN = A%
650  A% = 3
660    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
670	 SCRLUP = A%
680  A% = 4
690    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
700	 XREP = A%
710  A% = 5
720    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
730	 YREP = A%
740  A% = 6
750    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
760	 CLREOL = A%
770  A% = 7
780    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
790	 CLREOS = A%
800  A% = 8
810    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
820	 ZPRINT = A%
830 REM
840 REM 	    set the segment value for interpreted basic
850 REM
860	 DEF SEG = SEGVALUE%
870 REM
880 REM  define some attributes for use throughout the demo
890    IF FLAG% = 0 THEN GOTO 930 ELSE DEF SEG
900	 ' check for comprint or prslasho, prslasho will be in the demo
910    '  if 100 lines take less than 3 seconds comprint is here
911    CLS ' initialize PRSLASHO or COMPRINT !!!!!!!!!!
920    STARTTIME$=TIME$
922    FOR I = 1 TO 100:
923	LOCATE 1,1:PRINT " TESTING IF COMPRINT OR PRSLASHO ARE PRESENT"
924    NEXT I
927    ENDTIME$ = TIME$
928    GOSUB 2840: IF DIFTIME# < 3! THEN BASPRINT%=1 ELSE BASPRINT% = 0
929 GOTO 1000
930    DEF SEG = 0  ' interpreted, check for basprint
940	 B02D0% = PEEK(&H2D0):B02D1%=PEEK(&H2D1):B02D2%=PEEK(&H2D2):B02D3%=PEEK(&H2D3)
950	 PRINT " CHECKING FOR BASPRINT  0:02D0 = ";HEX$(B02D1%);" ";HEX$(B02D0%);" ";HEX$(B02D3%);" ";HEX$(B02D2%)
960	 IF B02D1% = 0 THEN BASPRINT% = 1 ELSE BASPRINT% = 0
980    DEF SEG
990 REM
1000	IF FLAG% = 0 THEN PRINT " INTERPRETED, ASMBASIC.EXE SPEEDS UP PRINTS "
1010	IF FLAG% = 1 THEN PRINT " COMPILED WITHOUT /O, BASRUN.EXE NEEDED, COMPRINT.EXE SPEEDS UP PRINTS"
1015	IF FLAG% = 2 THEN PRINT " COMPILED WITH /O, BASRUN.EXE NOT NEEDED, PRSLASHO.EXE SPEEDS UP PRINTS"
1020	IF FLAG% = 3 THEN PRINT " BUSINESS BASIC COMPILED "
1030	IF FLAG% = 0 AND ASM% = 0 THEN PRINT " ASMBASIC NOT PRESENT"
1040	IF FLAG% = 0 AND ASM% = 1 THEN PRINT " ASMBASIC PRESENT"
1050	IF FLAG% = 1 AND BASPRINT% = 0 THEN PRINT " COMPRINT IS NOT PRESENT "
1052	IF FLAG% = 1 AND BASPRINT% = 1 THEN PRINT " COMPRINT IS PRESENT"
1054	IF FLAG% = 2 AND BASPRINT% = 0 THEN PRINT " PRSLASHO IS NOT PRESENT "
1060	IF FLAG% = 2 AND BASPRINT% = 1 THEN PRINT " PRSLASHO IS PRESENT"
1070	IF FLAG% = 0 AND BASPRINT% = 0 THEN PRINT " BASPRINT NOT PRESENT"
1080	IF FLAG% = 0 AND BASPRINT% = 1 THEN PRINT " BASPRINT PRESENT"
1090	IF ASM% =1 THEN  DEF SEG = SEGVALUE%
1095	INPUT " ENTER HOW MANY SECONDS YOU WANT THE DEMO TO LAST ";JUNK$
1096	IF JUNK$="" THEN SECDIV# = 1!:GOTO 1110
1100	NU$=""
1101	FOR I = 1 TO LEN(JUNK$)
1102	  TE$ = MID$(JUNK$,I,1)
1103	IF INSTR("0123456789",TE$) > 0 THEN NU$=NU$+TE$ ELSE NU$="":I=LEN(JUNK$)
1104	NEXT I
1105	IF LEN(NU$) > 0 THEN SECS#=VAL(RIGHT$(NU$,8)) ELSE BEEP:GOTO 1095
1106	SECDIV# = SECS#/100!
1107	IF SECDIV# < .05 THEN SECDIV# = .05   ' keep for loop indices in bounds
1108	IF SECDIV# > 100! THEN SECDIV# = 100!
1110	CLS : LOCATE 4,4 : INPUT "Would you like the demonstration in color (Y/N)";A$
1120	IF A$ = "Y" OR A$ = "y" THEN 1320
1130	IF A$ <> "N" AND A$ <> "n" THEN 1080
1140 REM
1150 REM	black and white attributes
1160 REM
1170	NORMAL%  = 7   ' normal intensity white on black
1180	BLUE%	 = 7
1190	GREEN%	 = 7
1200	CYAN%	 = 7
1210	RED%	 = 7
1220	MAGENTA% = 7
1230	BROWN%	 = 7
1240	YELLOW%  = 7
1250	WHITE%	 = 15  ' high intensity white on black
1260	LIGHTER% = 7
1270	BLINK%	 = 128
1280	    GOTO 1570
1290 REM
1300 REM	color attributes
1310 REM
1320	NORMAL%  = 7   ' normal intensity white on black
1330	BLUE%	 = 1
1340	GREEN%	 = 2
1350	CYAN%	 = 3
1360	RED%	 = 4
1370	MAGENTA% = 5
1380	BROWN%	 = 6
1390	YELLOW%  = 14
1400	WHITE%	 = 15  ' high intensity white on black
1410 REM
1420 REM  To make a color lighter, logically OR the LIGHTER% with
1430 REM    the color.
1440 REM	     Ex:      ATTRIBUTE% = RED% OR LIGHTER%
1450 REM    will give a light red color.
1460 REM
1470	       LIGHTER% = 8
1480 REM
1490 REM  To make a color blink, logically OR the BLINK% with
1500 REM    the color.
1510 REM	     Ex:      ATTRIBUTE% = RED% OR BLINK%
1520 REM    will give a blinking red color.
1530 REM
1540	       BLINK% = 128
1550 REM
1560 REM
1570 REM
1580 REM
1590 REM If interpreted, check that ASMBASIC is resident below the interpreter
1600 REM
1610 ' DEF SEG = 0
1620 ' A% = PEEK(&H19C) + 256*PEEK(&H19D) : B% = PEEK(&H19E) + 256*PEEK(&H19F)
1630 '    DEF SEG = B%
1640 '    IF (PEEK(A%-1) = &H52) AND (PEEK(A%-2) = &H52)  THEN PRINT " ASMBASIC PRESENT " :ASM% = 1:ELSE PRINT " ASMBASIC NOT PRESENT ":ASM%=0
1650 'GOTO 1500
1660 '      CLS : PRINT TAB(85);"ASMBASIC must be executed once before starting"
1670 'REM OR comprint  should be executed when testing accelerated technique
1680 '            PRINT TAB(15);"the Basic interpreter"
1690 '      SYSTEM
1700 REM   ***************************************************************
1710 REM   Read in or Initialize as necessary a printable file of data
1712 GOSUB 1950  ' initialize the timing string arrays
1720 OPEN "R",1,"TIMEPRIN.FIL",81
1730 FIELD #1, 1 AS CHECKI$, 49 AS AA$, 10 AS TT$, 21 AS SS$
1740 REM    initialize the time per screen variable strings to spaces
1750 FOR I = 1 TO 10:T$(I)=SPACE$(10):NEXT I
1760 S$  =  " Seconds per screen"
1770 FIELD #1, 79 AS OURNAME$, 2 AS ENDFILE$
1772 TEMP$= " RAYHAWK AUTOMATION, P.O. BOX 1427, BEAVERTON OR, 97075"
1774 LSET OURNAME$=SPACE$(79)
1776 LSET ENDFILE$=CHR$(13)+CHR$(10)
1778 PUT #1,10	 ' if the file was not there before, it will be now,
1779 REM	   disk space permitting
1790 FOR I = 1 TO 9
1800   GET #1,I:IF LEFT$(A$(I),49)=AA$ THEN T$(I) = TT$:GOTO 1810
1802 REM     uninitialized record, lets initialize it so it can be printed
1804   LSET CHECKI$=RIGHT$(STR$(I),1)
1805   LSET AA$ = A$(I)
1806   LSET TT$ = T$(I)
1807   IF I = 1 THEN LSET SS$=SPACE$(19)+CHR$(13)+CHR$(10)
1808   IF I > 1 THEN LSET SS$=S$+CHR$(13)+CHR$(10) ' carriage return, line feed
1809   PUT #1,I
1810 NEXT I
1820 ON ERROR GOTO 0
1830 GOSUB 1950
1840 REM
1850 IF FLAG% > 0 AND BASPRINT% = 0 THEN TINDEX%=5:GOSUB 2150 ' no comprint
1860 IF FLAG% > 0 AND BASPRINT% = 1 THEN TINDEX%=6:GOSUB 2150 '  comprint
1870 IF FLAG% = 0 AND BASPRINT% = 0 THEN TINDEX%=2:GOSUB 2150 ' no comprint
1880 IF FLAG% = 0 AND BASPRINT% = 1 THEN TINDEX%=3:GOSUB 2150 '  comprint
1890 IF FLAG% > 0 THEN GOSUB 2350 ' compiled, show off QPRINT
1900 IF FLAG% = 0 AND ASM% = 1 THEN GOSUB 2490	' interpreted, ASMBASIC present
1901					       '   show off QPRINT
1910 IF FLAG% > 0 THEN GOSUB 2630  'compiled, time CLS
1920 IF FLAG% > 0 THEN GOSUB 2710  'compiled, time CLREOS
1930 LOCATE 25,1:INPUT	" ENTER TO STOP THE PROGRAM ";JUNK$
1940 SYSTEM
1942 REM
1944 REM ****************************************************************
1946 REM
1950 REM   Initialize the timing arrays
1960 REM
1970 A$(1) =  " Time QPRINT, PRINT under conditions below       "
1980 A$(2) =  " Interpreted Standard PRINT                      " + T$(2)+ S$
1990 A$(3) =  " Interpreted PRINT with BASPRINT                 " + T$(3)+ S$
2000 A$(4) =  " Interpreted QPRINT with ASMBASIC                " + T$(4)+ S$
2010 A$(5) =  " Compiled PRINT                                  " + T$(5)+ S$
2020 A$(6) =  " Compiled PRINT with COMPRINT or PRSLASHO        " + T$(6)+ S$
2030 A$(7) =  " Compiled QPRINT                                 " + T$(7)+ S$
2040 A$(8) =  " Compiled CLS                                    " + T$(8)+ S$
2050 A$(9) =  " Compiled CLREOS performing CLS function         " + T$(9)+ S$
2060 RETURN
2070 REM
2080 REM   print out the latest results
2090 GOSUB 1950
2100 FOR I = 0 TO 9
2110   LOCATE I+I+6,1:PRINT A$(I);
2120 NEXT I
2130 RETURN
2140 REM
2150 REM   TEST PRINT  compiled or interpreted
2160 IF TINDEX%=5 AND FLAG% = 1 THEN A$(0) = " Testing  Compiled PRINT statements without COMPRINT "
2162 IF TINDEX%=6 AND FLAG% = 1 THEN A$(0) = " Testing  Compiled PRINT statements with    COMPRINT "
2164 IF TINDEX%=5 AND FLAG% = 2 THEN A$(0) = " Testing  Compiled PRINT statements without PRSLASHO "
2166 IF TINDEX%=6 AND FLAG% = 2 THEN A$(0) = " Testing  Compiled PRINT statements with    PRSLASHO "
2180 IF TINDEX%=2 THEN A$(0) = " Testing  Interpreted PRINT statements without BASPRINT "
2190 IF TINDEX%=3 THEN A$(0) = " Testing  Interpreted PRINT statements with    BASPRINT "
2200   ASPACE$=SPACE$(79)
2205   NOSCREENS = 50 * SECDIV#
2206   IF TINDEX% < 5 THEN NOSCREENS = 20 * SECDIV#
2210   STARTTIME$=TIME$
2240   FOR ISCREEN = 1 TO NOSCREENS
2250	 CLS
2260	 FOR I = 0 TO 9
2270	    LOCATE I+I+6,1:PRINT A$(I);
2280	  NEXT I
2290 ' SCNO$= " SCREEN NUMBER "+RIGHT$("     "+STR$(ISCREEN) ,5)
2300 ' LOCATE 20,10:PRINT SCNO$
2310   NEXT ISCREEN
2320   GOSUB 3000
2330 RETURN
2340 REM  next demonstrate     QPRINT --------------------------------------
2350 REM   TEST COMPILED QPRINT
2360   A$(0) = " Testing  Compiled QPRINT statements "
2365   NOSCREENS = 100 * SECDIV#
2370   STARTTIME$=TIME$
2390   FOR ISCREEN = 1 TO NOSCREENS
2400	CLS
2410	FOR I = 0 TO 9
2420	   LOCATE I+I+6,1:CALL QPRINT (FLAG%,A$(I))
2430	 NEXT I
2440 ' SCNO$= " SCREEN NUMBER "+RIGHT$("     "+STR$(ISCREEN) ,5)
2450 ' LOCATE 20,10:PRINT SCNO$
2460   NEXT ISCREEN
2470   TINDEX%=7:GOSUB 3000
2480 RETURN
2490 REM   TEST INTERPRETED QPRINT
2500   A$(0) = " Testing  Interpreted QPRINT statements "
2505   NOSCREENS = 20 * SECDIV#
2510   STARTTIME$=TIME$
2530   FOR ISCREEN = 1 TO NOSCREENS
2540	 CLS
2550	 FOR I = 0 TO 9
2560	   LOCATE I+I+6,1:CALL QPRINT (FLAG%,A$(I))
2570	 NEXT I
2580  ' SCNO$= " SCREEN NUMBER "+RIGHT$("     "+STR$(ISCREEN) ,5)
2590  ' LOCATE 20,10:PRINT SCNO$
2600   NEXT ISCREEN
2610   TINDEX%=4:GOSUB 3000
2620 RETURN
2630 ' time CLS routine
2632	PRINT " READY TO DO BASIC  'CLS' 500 TIMES "
2634	INPUT " ENTER TO CONTINUE ";JUNK$
2640   NOSCREENS=200 * SECDIV#
2650   STARTTIME$=TIME$
2660   FOR ISCREEN = 1 TO NOSCREENS
2670	 CLS
2680   NEXT ISCREEN
2690   TINDEX%=8:GOSUB 3000
2700 RETURN
2710 ' time xrep routine
2720   ATTRIBUTE% = NORMAL%
2730   BLANK$=" "
2732	PRINT " READY TO DO STAN'S CLREOS SUBROUTINE TO CLEAR THE SCREEN 500 TIMES "
2734	INPUT " ENTER TO CONTINUE ";JUNK$
2740   COUNT%=2000
2750   NOSCREENS=200  * SECDIV#
2760   STARTTIME$=TIME$
2770   FOR ISCREEN = 1 TO NOSCREENS
2780	 LOCATE 1,1:CALL CLREOS(FLAG%)
2790   NEXT ISCREEN
2800   TINDEX%=9:GOSUB 3000
2810 RETURN
2820 INPUT  " ENTER TO STOP THE PROGRAM ";JUNK$
2830 END
2840 REM TIMING SUBROUTINE
2850 REM  inputs:  STARTTIME$
2860 REM	    ENDTIME$
2870 REM  output:  DIFTIME#	 time in seconds
2880 SHH#=VAL(LEFT$(STARTTIME$,2))
2890 EHH#=VAL(LEFT$(ENDTIME$,2))
2900 SSS#=VAL(RIGHT$(STARTTIME$,2))
2910 ESS#=VAL(RIGHT$(ENDTIME$,2))
2920 SMM#=VAL(MID$(STARTTIME$,4,2))
2930 EMM#=VAL(MID$(ENDTIME$,4,2))
2940 STIME#=SHH#*3600!+SMM#*60!+SSS#
2950 ETIME#=EHH#*3600!+EMM#*60!+ESS#
2960 DIFTIME#=ETIME#-STIME#
2970 IF DIFTIME# < 0! THEN DIFTIME#= DIFTIME# + 3600! * 24!
2980 RETURN
2990 REM
3000 REM  compute the end time for TINDEX%
3010	ENDTIME$ = TIME$
3020	GOSUB 2840
3060	T$(TINDEX%) = STR$( DIFTIME# / NOSCREENS )
3070	T$(TINDEX%) = LEFT$(T$(TINDEX%)+SPACE$(10),10)
3080 ' display the end time on the screen and on the TIMEPRIN.FIL
3090	LSET TT$=T$(TINDEX%)
3100	LSET AA$=A$(TINDEX%)
3102   LSET CHECKI$=RIGHT$(STR$(TINDEX%),1)
3104   IF I = 1 THEN LSET SS$=SPACE$(19)+CHR$(13)+CHR$(10)
3108   IF I > 1 THEN LSET SS$=S$+CHR$(13)+CHR$(10) ' carriage return, line feed
3110	PUT 1,TINDEX%
3120 GOSUB 2080
3130 RETURN
```
{% endraw %}

## XREP.ASM

{% raw %}
```
COMMENT *

			     CLUBware  (tm)

	  XREP repeates an input character some number of times.
		  The string starts at the current cursor position
		  and after the string is written to the screen
		  the cursor position is updated to just after the
		  string.

		   Copyright 1984 Rayhawk Automation N.W. Inc
				  P.O. Box 1427
				  Beaverton, Oregon   97075

	  Algorithm:
		  1) load type of crt display from 0000:463
		  2) load current position from 0000:0450
		  3) load count of characters to write
		  4) load character to write
		  5) address the screen segment
		  6) move string to screen segment while synchronizing
		      with horizontal retrace
		  7) update cursor position


	  CALL	XREP ( FLAG% , CHARACTER$ , COUNT% , ATTRIBUTE% )

		  FLAG%       environment flag
			      = 0 means under basic interpreter
			      = 1 means under compiled basic not /O
			      = 2 means under compiled basic with /O
			      = 3 means under compiled business basic

		  COUNT%  number of times to repeat the character

		  CHARACTER$  character to write to screen

		  ATTRIBUTE%  attribute for character


									      *

;______________________________________________________________________________

;  Normal assembly directives

CODE	  SEGMENT PARA PUBLIC 'CODE'

	  ASSUME  CS:CODE

	  EXTRN   $PUTCPOS:FAR

	  PUBLIC  XREP

ATTRIBUTE	  EQU  WORD PTR [BP+6] ; address of string descriptor on stack

CHAR_COUNT	  EQU  WORD PTR [BP+8] ; address of character count on stack

STRING_DESC	  EQU  WORD PTR [BP+10] ; address of string descriptor on stack

ENV_FLAG	  EQU  WORD PTR [BP+12] ; address of environment flag on stack

;______________________________________________________________________________

XREP	  PROC	  FAR

	  PUSH	  BP		       ; address parameters on stack
	  MOV	  BP,SP

	  PUSH	  AX		       ; save all registers used,
	  PUSH	  BX
	  PUSH	  CX
	  PUSH	  DX
	  PUSH	  SI
	  PUSH	  DI
	  PUSH	  ES


;	  ...	  0) load environment flag showing compiled or interpreted

	  MOV	  SI,ENV_FLAG	       ; load address of environment flag
	  MOV	  SI,WORD PTR [SI]     ; load flag itself



;	  ...	  1) load type of crt display from 0000:463

	  SUB	  AX,AX 		     ; address system area
	  MOV	  ES,AX

	  MOV	  DX,WORD PTR ES:[463h]      ; load address of display adapter
	  ADD	  DX,6			     ; address crt status port



;	  ...	  2) load current position from 0000:0450 if compiled
;		      or from DS:[0056h] if interpreted

	  CMP	  SI,0			   ; check environment flag
	  JNE	  COMPILED

	  MOV	  CX,WORD PTR DS:[0056h]   ; load from basic space
	  XCHG	  CL,CH 		   ; basic has it reversed
	  DEC	  CL			   ; basic starts count from 1
	  DEC	  CH			   ;  instead of zero
	  JMP	  SHORT CALC_POSITION

COMPILED:
	  MOV	  CX,WORD PTR ES:[450h]    ; load current position
					   ;  from system space
CALC_POSITION:
	  SUB	  AH,AH 	       ; isolate row number in AX
	  MOV	  AL,CH
	  MOV	  BL,80 	       ; multiply row by 80 bytes per row
	  MUL	  BL
	  SUB	  CH,CH 	       ; add in column number
	  ADD	  AX,CX

	  MOV	  DI,AX
	  SHL	  DI,1		       ; multiply by 2 to account
				       ;  for attribute bytes



;	  ...	  3) load count of characters to write

	  MOV	  BX,CHAR_COUNT        ; load address of character count
	  MOV	  CX,WORD PTR DS:[BX]


;	  ...	  4) load character to write
;		       note that each of the modes supported has their
;		       own format for the string descriptor

	  MOV	  BX,STRING_DESC       ; load address of string descriptor
	  CMP	  SI,0		       ; running compiled?
	  JNE	  IS_COMPILED
	  MOV	  BX,WORD PTR [BX+1]   ; load offset of string
	  JMP	  SHORT LOAD_CHAR

IS_COMPILED:
	  MOV	  BX,WORD PTR [BX+2]   ; load offset of string

	  CMP	  SI,3
	  JNE	  LOAD_CHAR

	  ADD	  BX,3		       ;  Support BBC String format

LOAD_CHAR:

	  MOV	  AL,BYTE PTR [BX]     ; load the character itself


;	  ...	  4) load attribute for character

	  MOV	  BX,ATTRIBUTE	       ; load address of attribute
	  MOV	  BH,BYTE PTR DS:[BX]  ; load the attribute itself
	  MOV	  BL,AL 	       ; move in the character


;	  ...	  5) address the screen segment

	  MOV	  AX,0B000h	       ; screen seg for monochrome card
	  CMP	  DX,03DAh	       ; is this a graphic card?
	  JNE	  MONOCHROME

	  MOV	  AX,0B800h	       ; load screen seg for graphic card

MONOCHROME:

	  MOV	  ES,AX 	       ; address the screen buffer


;	  ...	  6) move string to screen while synchronizing
;		      with horizontal retrace

DISPLAY_LOOP:

	  CLI
HSYNC_WAIT1:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JNZ	  HSYNC_WAIT1	       ; wait for retrace
HSYNC_WAIT2:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JZ	  HSYNC_WAIT2	       ; wait for retrace

	  MOV	  AX,BX
	  STOSW 		       ; store character and attribute
	  STI

	  CMP	  DI,4000
	  JL	  NOT_OFF_PAGE
	  MOV	  DI,0		       ; start at top again
NOT_OFF_PAGE:

	  LOOP	  DISPLAY_LOOP	       ; repeat cx times


;	  ...	  7) update cursor position

	  MOV	  AX,DI 	       ; load current position
	  SHR	  AX,1		       ; discount attribute bytes
	  SUB	  DX,DX 	       ; no sign in this division
	  MOV	  BX,80 	       ; divide by nmbr of chars per row
	  DIV	  BX
	  MOV	  DH,AL 	       ; store row number
				       ; column number already in DL
	  MOV	  BH,0		       ; assume page 0
	  MOV	  AH,2		       ; request new position
	  INT	  10h

	  XCHG	  DH,DL 	       ; basic likes it reversed
	  INC	  DL		       ; basic starts count from 1
	  INC	  DH		       ;  instead of zero

	  MOV	  SI,ENV_FLAG	       ; load address of environment flag
	  CMP	  WORD PTR DS:[SI],0   ; examine flag
	  JE	  NOT_COMPILED

	  CMP	  WORD PTR DS:[SI],3   ; business basic?
	  JE	  RET_TO_BASIC

	  CMP	  WORD PTR DS:[SI],2   ; compiled with /O?
	  JE	  WITH_SLASH_O

								    ; FLAG = 1
	  MOV	  WORD PTR DS:[87h],DX ; store screen address
	  JMP	  SHORT RET_TO_BASIC


WITH_SLASH_O:							    ; FLAG = 2
	  MOV	  DI,SEG $PUTCPOS	 ; address put cursor routine
	  MOV	  ES,DI
	  MOV	  DI,OFFSET $PUTCPOS
	  MOV	  DI,WORD PTR ES:[DI+2]  ; load offset of cursor storage
	  MOV	  WORD PTR DS:[DI],DX	 ; store new cursor position
	  JMP	  SHORT RET_TO_BASIC


NOT_COMPILED:							    ; FLAG = 0
	  MOV	  WORD PTR DS:[0056h],DX ; store new cursor position


RET_TO_BASIC:							    ; FLAG = 3




	  POP	  ES
	  POP	  DI
	  POP	  SI
	  POP	  DX
	  POP	  CX
	  POP	  BX
	  POP	  AX
	  POP	  BP
	  RET	  8


XREP	  ENDP

;______________________________________________________________________________

CODE	  ENDS

	  END
```
{% endraw %}

## YREP.ASM

{% raw %}
```
COMMENT *
			     CLUBware  (tm)

	  YREP repeates an input character some number of times.
		  The string starts at the current cursor position
		  and proceeds down the screen in a vertical column.
		  The cursor position is updated to just after the
		  string when complete.

		   Copyright 1984 Rayhawk Automation N.W. Inc
				  P.O. Box 1427
				  Beaverton, Oregon   97075


	  Algorithm:
		  1) load type of crt display from 0000:463
		  2) load current position from 0000:0450
		  3) load count of characters to write
		  4) load character to write
		  4a) load attribute for character
		  5) address the screen segment
		  6) move string to screen segment while synchronizing
		      with horizontal retrace
		  7) update cursor position


	  CALL	YREP ( FLAG% , CHARACTER$ , COUNT% , ATTRIBUTE% )

		  FLAG%       environment flag
			      = 0 means under basic interpreter
			      = 1 means under compiled basic not /O
			      = 2 means under compiled basic with /O
			      = 3 means under compiled business basic

		  COUNT%  number of times to repeat the character

		  CHARACTER$  character to write to screen

		  ATTRIBUTE%  attribute for character


									      *

;______________________________________________________________________________

;  Normal assembly directives

CODE	  SEGMENT PARA PUBLIC 'CODE'

	  ASSUME  CS:CODE

	  EXTRN   $PUTCPOS:FAR

	  PUBLIC  YREP

ATTRIBUTE	  EQU  WORD PTR [BP+6] ; address of string descriptor on stack

CHAR_COUNT	  EQU  WORD PTR [BP+8] ; address of character count on stack

STRING_DESC	  EQU  WORD PTR [BP+10] ; address of string descriptor on stack

ENV_FLAG	  EQU  WORD PTR [BP+12] ; address of environment flag on stack

;______________________________________________________________________________

YREP	  PROC	  FAR

	  PUSH	  BP		       ; address parameters on stack
	  MOV	  BP,SP

	  PUSH	  AX		       ; save all registers used,
	  PUSH	  BX
	  PUSH	  CX
	  PUSH	  DX
	  PUSH	  DI
	  PUSH	  ES


;	  ...	  0) load environment flag showing compiled or interpreted

	  MOV	  SI,ENV_FLAG	       ; load address of environment flag
	  MOV	  SI,WORD PTR [SI]     ; load flag itself



;	  ...	  1) load type of crt display from 0000:463

	  SUB	  AX,AX 		     ; address system area
	  MOV	  ES,AX

	  MOV	  DX,WORD PTR ES:[463h]      ; load address of display adapter
	  ADD	  DX,6			     ; address crt status port



;	  ...	  2) load current position from 0000:0450 if compiled
;		      or from DS:[0056h] if interpreted

	  CMP	  SI,0			   ; check environment flag
	  JNE	  COMPILED

	  MOV	  CX,WORD PTR DS:[0056h]   ; load from basic space
	  XCHG	  CL,CH 		   ; basic has it reversed
	  DEC	  CL			   ; basic starts count from 1
	  DEC	  CH			   ;  instead of zero
	  JMP	  SHORT CALC_POSITION

COMPILED:
	  MOV	  CX,WORD PTR ES:[450h]    ; load current position
					   ;  from system space
CALC_POSITION:
	  SUB	  AH,AH 	       ; isolate row number in AX
	  MOV	  AL,CH
	  MOV	  BL,80 	       ; multiply row by 80 bytes per row
	  MUL	  BL
	  SUB	  CH,CH 	       ; add in column number
	  ADD	  AX,CX

	  MOV	  DI,AX
	  SHL	  DI,1		       ; multiply by 2 to account
				       ;  for attribute bytes



;	  ...	  3) load count of characters to write

	  MOV	  BX,CHAR_COUNT        ; load address of character count
	  MOV	  CX,WORD PTR DS:[BX]


;	  ...	  4) load character to write
;		       note that each of the modes supported has their
;		       own format for the string descriptor

	  MOV	  BX,STRING_DESC       ; load address of string descriptor
	  CMP	  SI,0		       ; running compiled?
	  JNE	  IS_COMPILED
	  MOV	  BX,WORD PTR [BX+1]   ; load offset of string
	  JMP	  SHORT LOAD_CHAR

IS_COMPILED:
	  MOV	  BX,WORD PTR [BX+2]   ; load offset of string

	  CMP	  SI,3
	  JNE	  LOAD_CHAR

	  ADD	  BX,3		       ;  Support BBC String format

LOAD_CHAR:

	  MOV	  AL,BYTE PTR [BX]     ; load the character itself


;	  ...	  4) load attribute for character

	  MOV	  BX,ATTRIBUTE	       ; load address of attribute
	  MOV	  BH,BYTE PTR DS:[BX]  ; load the attribute itself
	  MOV	  BL,AL 	       ; move in the character


;	  ...	  5) address the screen segment

	  MOV	  AX,0B000h	       ; screen seg for monochrome card
	  CMP	  DX,03DAh	       ; is this a graphic card?
	  JNE	  MONOCHROME

	  MOV	  AX,0B800h	       ; load screen seg for graphic card

MONOCHROME:

	  MOV	  ES,AX 	       ; address the screen buffer




;	  ...	  6) move string to screen while synchronizing
;		      with horizontal retrace

DISPLAY_LOOP:

	  CLI
HSYNC_WAIT1:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JNZ	  HSYNC_WAIT1	       ; wait for retrace
HSYNC_WAIT2:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JZ	  HSYNC_WAIT2	       ; wait for retrace

	  MOV	  AX,BX
	  STOSW 		       ; store character and attribute
	  STI

	  ADD	  DI,158	       ; drop down one line
	  CMP	  DI,4000
	  JL	  NOT_OFF_BOTTOM

	  SUB	  DI,4000	       ; start over again at top
NOT_OFF_BOTTOM:

	  LOOP	  DISPLAY_LOOP	       ; repeat cx times

	  SUB	  DI,158	       ; remain on last line



;	  ...	  7) update cursor position

	  MOV	  AX,DI 	       ; load current position
	  SHR	  AX,1		       ; discount attribute bytes
	  SUB	  DX,DX 	       ; no sign in this division
	  MOV	  BX,80 	       ; divide by nmbr of chars per row
	  DIV	  BX
	  MOV	  DH,AL 	       ; store row number
				       ; column number already in DL
	  MOV	  BH,0		       ; assume page 0
	  MOV	  AH,2		       ; request new position
	  INT	  10h

	  XCHG	  DH,DL 	       ; basic likes it reversed
	  INC	  DL		       ; basic starts count from 1
	  INC	  DH		       ;  instead of zero

	  MOV	  SI,ENV_FLAG	       ; load address of environment flag
	  CMP	  WORD PTR DS:[SI],0   ; examine flag
	  JE	  NOT_COMPILED

	  CMP	  WORD PTR DS:[SI],3   ; business basic?
	  JE	  RET_TO_BASIC

	  CMP	  WORD PTR DS:[SI],2   ; compiled with /O?
	  JE	  WITH_SLASH_O

								    ; FLAG = 1
	  MOV	  WORD PTR DS:[87h],DX ; store screen address
	  JMP	  SHORT RET_TO_BASIC


WITH_SLASH_O:							    ; FLAG = 2
	  MOV	  DI,SEG $PUTCPOS	 ; address put cursor routine
	  MOV	  ES,DI
	  MOV	  DI,OFFSET $PUTCPOS
	  MOV	  DI,WORD PTR ES:[DI+2]  ; load offset of cursor storage
	  MOV	  WORD PTR DS:[DI],DX	 ; store new cursor position
	  JMP	  SHORT RET_TO_BASIC


NOT_COMPILED:							    ; FLAG = 0
	  MOV	  WORD PTR DS:[0056h],DX ; store new cursor position


RET_TO_BASIC:							    ; FLAG = 3




	  POP	  ES
	  POP	  DI
	  POP	  DX
	  POP	  CX
	  POP	  BX
	  POP	  AX
	  POP	  BP
	  RET	  8


YREP	  ENDP

;______________________________________________________________________________

CODE	  ENDS

	  END
```
{% endraw %}

## ZPRINT.ASM

{% raw %}
```
COMMENT *

			     CLUBware  (tm)

	  ZPRINT prints a character string on the screen starting
		  at the current cursor position.  After the string is
		  written to the screen the cursor position is updated
		  to just after the string.

		   Copyright 1984 Rayhawk Automation N.W. Inc
				  P.O. Box 1427
				  Beaverton, Oregon   97075


	  Algorithm:
		  1) load type of crt display from 0000:463
		  2) load current position from 0000:0450
		  3) load count of characters to write
		  4) load string address
		  5) address the screen segment
		  6) move string to screen segment while synchronizing
		      with horizontal retrace
		  7) update cursor position


	  CALL	ZPRINT ( FLAG% , CHARACTER$ , ATTRIBUTE% )

		  FLAG%       environment flag
			      = 0 means under basic interpreter
			      = 1 means under compiled basic not /O
			      = 2 means under compiled basic with /O
			      = 3 means under compiled business basic

		  CHARACTER$  character string to write to screen

		  ATTRIBUTE%  is the attribute to use with the string.
				       07 is normal
				       70 is reverse video
				       01 is blue
			      other definitions can be found
			       in the technical reference manual or in
			       the basic manual under the color statement
									      *

;______________________________________________________________________________

;  Normal assembly directives

CODE	  SEGMENT PARA PUBLIC 'CODE'

	  ASSUME  CS:CODE

	  EXTRN   $PUTCPOS:FAR

	  PUBLIC  ZPRINT

ATTRIBUTE	  EQU  WORD PTR [BP+6] ; address of attribute on stack

STRING_DESC	  EQU  WORD PTR [BP+8] ; address of string descriptor on stack

ENV_FLAG	  EQU  WORD PTR [BP+10] ; address of environment flag on stack

;______________________________________________________________________________

ZPRINT	  PROC	  FAR

	  PUSH	  BP		       ; address parameters on stack
	  MOV	  BP,SP

	  PUSH	  AX		       ; save all registers used,
	  PUSH	  BX
	  PUSH	  CX
	  PUSH	  DX
	  PUSH	  DI
	  PUSH	  SI
	  PUSH	  ES


;	  ...	  0) load environment flag showing compiled or interpreted

	  MOV	  SI,ENV_FLAG	       ; load address of environment flag
	  MOV	  SI,WORD PTR [SI]     ; load flag itself



;	  ...	  1) load type of crt display from 0000:463

	  SUB	  AX,AX 		     ; address system area
	  MOV	  ES,AX

	  MOV	  DX,WORD PTR ES:[463h]      ; load address of display adapter
	  ADD	  DX,6			     ; address crt status port



;	  ...	  2) load current position from 0000:0450 if compiled
;		      or from DS:[0056h] if interpreted

	  CMP	  SI,0			   ; check environment flag
	  JNE	  COMPILED

	  MOV	  CX,WORD PTR DS:[0056h]   ; load from basic space
	  XCHG	  CL,CH 		   ; basic has it reversed
	  DEC	  CL			   ; basic starts count from 1
	  DEC	  CH			   ;  instead of zero
	  JMP	  SHORT CALC_POSITION

COMPILED:
	  MOV	  CX,WORD PTR ES:[450h]    ; load current position
					   ;  from system space
CALC_POSITION:
	  SUB	  AH,AH 	       ; isolate row number in AX
	  MOV	  AL,CH
	  MOV	  BL,80 	       ; multiply row by 80 bytes per row
	  MUL	  BL
	  SUB	  CH,CH 	       ; add in column number
	  ADD	  AX,CX

	  MOV	  DI,AX
	  SHL	  DI,1		       ; multiply by 2 to account
				       ;  for attribute bytes

;	  ...	  3) load count of characters to write
;		     only 1 byte if interpreted
;		      2 bytes if compiled

	  MOV	  BX,STRING_DESC       ; load address of string descriptor

	  CMP	  SI,0		       ; running compiled?
	  JNE	  NOT_INTERPRETED

	  MOV	  CL,BYTE PTR [BX]     ; load 1 byte count itself
	  SUB	  CH,CH
	  INC	  BX		       ; bump to string address
	  JMP	  SHORT LOAD_ADDRESS

NOT_INTERPRETED:
	  MOV	  CX,WORD PTR [BX]     ; load 2 byte count itself
	  ADD	  BX,2		       ; bump to string address

LOAD_ADDRESS:

;	  ...	  4) load string address
;		       next two bytes if normal compiled
;			three bytes past if in business basic

	  MOV	  BX,WORD PTR [BX]     ; load offset of string

	  CMP	  SI,3
	  JNE	  NOT_BUSINESS

	  ADD	  BX,3		       ;  Support BBC String format

NOT_BUSINESS:

	  MOV	  SI,BX 	       ; move offset over


;	  ...	  4a) load the attribute to be used with the string

	  MOV	  BX,ATTRIBUTE	       ; load address of the attribute
	  MOV	  BH,BYTE PTR DS:[BX]  ; load the attribute itself


;	  ...	  5) address the screen segment

	  MOV	  AX,0B000h	       ; screen seg for monochrome card
	  CMP	  DX,03DAh	       ; is this a graphic card?
	  JNE	  MONOCHROME

	  MOV	  AX,0B800h	       ; load screen seg for graphic card

MONOCHROME:

	  MOV	  ES,AX 	       ; address the screen buffer


;	  ...	  6) move string to screen while synchronizing
;		      with horizontal retrace

DISPLAY_LOOP:
	  LODSB 		       ; load next character
	  MOV	  BL,AL

	  CLI
HSYNC_WAIT1:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JNZ	  HSYNC_WAIT1	       ; wait for retrace
HSYNC_WAIT2:
	  IN	  AL,DX 	       ; check for horizontal retrace
	  TEST	  AL,1
	  JZ	  HSYNC_WAIT2	       ; wait for retrace

	  MOV	  AX,BX
	  STOSW 		       ; store character and attribute
	  STI

	  CMP	  DI,4000
	  JL	  NOT_OFF_PAGE
	  MOV	  DI,0		       ; start at top again
NOT_OFF_PAGE:

	  LOOP	  DISPLAY_LOOP	       ; repeat cx times


;	  ...	  7) update cursor position

	  MOV	  AX,DI 	       ; load current position
	  SHR	  AX,1		       ; discount attribute bytes
	  SUB	  DX,DX 	       ; no sign in this division
	  MOV	  BX,80 	       ; divide by nmbr of chars per row
	  DIV	  BX
	  MOV	  DH,AL 	       ; store row number
				       ; column number already in DL
	  MOV	  BH,0		       ; assume page 0
	  MOV	  AH,2		       ; request new position
	  INT	  10h

	  XCHG	  DH,DL 	       ; basic likes it reversed
	  INC	  DL		       ; basic starts count from 1
	  INC	  DH		       ;  instead of zero

	  MOV	  SI,ENV_FLAG	       ; load address of environment flag
	  CMP	  WORD PTR DS:[SI],0   ; examine flag
	  JE	  NOT_COMPILED

	  CMP	  WORD PTR DS:[SI],3   ; business basic?
	  JE	  RET_TO_BASIC

	  CMP	  WORD PTR DS:[SI],2   ; compiled with /O?
	  JE	  WITH_SLASH_O

								    ; FLAG = 1
	  MOV	  WORD PTR DS:[87h],DX ; store screen address
	  JMP	  SHORT RET_TO_BASIC


WITH_SLASH_O:							    ; FLAG = 2
	  MOV	  DI,SEG $PUTCPOS	 ; address put cursor routine
	  MOV	  ES,DI
	  MOV	  DI,OFFSET $PUTCPOS
	  MOV	  DI,WORD PTR ES:[DI+2]  ; load offset of cursor storage
	  MOV	  WORD PTR DS:[DI],DX	 ; store new cursor position
	  JMP	  SHORT RET_TO_BASIC


NOT_COMPILED:							    ; FLAG = 0
	  MOV	  WORD PTR DS:[0056h],DX ; store new cursor position


RET_TO_BASIC:							    ; FLAG = 3


	  POP	  ES
	  POP	  SI
	  POP	  DI
	  POP	  DX
	  POP	  CX
	  POP	  BX
	  POP	  AX
	  POP	  BP
	  RET	  6


ZPRINT	  ENDP

;______________________________________________________________________________

CODE	  ENDS

	  END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0285

     Volume in drive A has no label
     Directory of A:\

    ASMBASIC ASM      8104   6-18-84   1:21p
    ASMBASIC EXE      2432   7-12-84   6:00p
    ASMBASIC TXT      7647   7-11-84   9:12a
    BANDDEMO BAS     12682   7-06-84  10:06a
    BANDDEMO EXE     26981   7-12-84   5:27p
    BANDNOO  EXE      7965   7-12-84   5:35p
    BASPRINT ASM     19481   6-18-84   1:17p
    BASPRINT EXE      1920   6-18-84   1:23p
    CLREOL   ASM      2672   6-27-83   3:35a
    CLREOL   OBJ       111   6-27-83   3:40a
    CLREOS   ASM      3940   6-27-83   3:36a
    CLREOS   OBJ       169   6-27-83   3:40a
    CLUBWARE DSC      3757   7-07-84   3:11p
    COMPRINT ASM     19856   6-16-84  11:31a
    COMPRINT EXE      1920   6-16-84  11:41a
    DEBUG20  FIX       555   3-31-84  12:44a
    DEBUGFIX TXT     10885   7-11-84   9:10a
    DETAB    BAS       986   3-31-84   1:07a
    EASYDEMO BAT      1524   7-12-84   3:58p
    LONGDEMO BAT      2081   7-12-84   3:55p
    NOSLASHO BAT       580   6-29-84   9:07a
    PRSLASHO ASM     23440   6-26-84   9:08a
    PRSLASHO EXE      2176   6-26-84   9:10a
    QPRINT   ASM      6555   7-12-84   5:22p
    QPRINT   OBJ       304   7-12-84   5:22p
    README   TXT      5109   7-11-84  11:47a
    SCRLDN   ASM      1989   6-27-83   3:38a
    SCRLDN   OBJ       108   6-27-83   3:42a
    SCRLUP   ASM      1981   6-27-83   3:39a
    SCRLUP   OBJ       108   6-27-83   3:42a
    SCRNIO   TXT     10938   7-11-84   3:46p
    SLASHO   BAT       580   6-29-84   9:08a
    SUBDEMO  BAS     21504   6-26-84   4:50p
    SUBDEMO  EXE     37402   7-12-84   5:33p
    TIMEDEMO BAS     14295   6-26-84   5:47p
    TIMEPRIN FIL       896   6-26-84   5:58p
    XREP     ASM      6818   7-12-84   5:49p
    XREP     OBJ       303   7-12-84   5:53p
    YREP     ASM      6960   7-12-84   5:50p
    YREP     OBJ       310   7-12-84   5:53p
    ZPRINT   ASM      7060   7-12-84   5:50p
    ZPRINT   OBJ       307   7-12-84   5:52p
           42 file(s)     285391 bytes
                           18432 bytes free
