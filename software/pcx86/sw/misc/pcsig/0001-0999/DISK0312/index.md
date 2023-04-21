---
layout: page
title: "PC-SIG Diskette Library (Disk #312)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0312/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0312"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCREEN DESIGN AID"

    The two programs here are for designing your screen and your output.
    
    Screen Design Aid (SDA) is for designing display screens for data
    input use in other programs; these screens will be callable from
    Assembler, BASIC, or other high-level programs.  SDA includes
    specifications for blinking, high-intensity, underscoring, and
    reverse-video options, as well as a full range of color foreground and
    background options.  It permits the definition of a "screen" utilizing
    any combination of the 254 displayable characters and saves it in a
    highly compressed form.
    
    The second program is the FORMS program for forms generation and
    management.  It allows you to generate and edit master forms tailored
    to your individual application which can then be recalled, filled out,
    and stored as completed forms.  FORMS supports IBM/Epson/compatible
    dot matrix as well as Daisy wheel printers.
    
    How to Start: Consult the FORMS.DOC, BASSCR.DOC and SDA.DOC for
    documentation and instructions.  To run either, enter program name and
    press <ENTER>.
    
    Suggested Registration: $25.00 SDA; $30.00 FORMS (includes full
    manual, latest updates and program revisions)
    
    File Descriptions:
    
    -------- ---  Screen Design Aid
    $SDA     OBJ  Screen Design Aid, object code
    SDA      EXE  Screen Design Aid, Version 3.0
    BASMEN   OBJ  Object file for BASSCR
    BASSCR   ASM  BASIC Interface for SDA, Assembler
    BASSCR   OBJ  BASIC Interface for SDA, object code
    $FIELD   MAC  Macros for Screen Design Aid
    BUGREPT  FRM  Bug report form to report FORMS problems
    REGISTER FRM  Registration form for FORMS users
    FORMS    DOC  Forms program documentation (10 pages)
    FORMS    COM  Forms generation and management program
    -------- ---  Form Generator
    ANSISCR  EXE  Screen driver
    BASSCR   DOC  BASIC-SDA Interface manual (2 pages)
    SDA      DOC  Screen Design Aid manual (32 pages)
    DEMO     BAS  ASCII description of DEMO.EXE source code
    DEMO     EXE  SDA demo program, color monitor, 1 screen
    BONUS    DOC  Notes on included programs
    READ     ME   Listing of files that are a part of FORMS
    SDA      EXE  SDA comptession utility
    IMAGE    DOC  Documentation on SDA.EXE
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BASSCR.ASM

{% raw %}
```
 TITLE	BASSCR	- Screen Design	Aid - Support Module
 SUBTTL	Version	1.0 - January 1983
 PAGE	81,132
 COMMENT \
*******************************************************************************
*		 Copyright 1983	- DD Systems - Springdale, AR		      *
*******************************************************************************
*									      *
*	The utilities required to service a screen under BASIC		      *
*									      *
*   Calls:	DISP - to display primary screen			      *
*   *-Local	FLDOUT - to output a string to a field			      *
*		FLDINP - to input from a field				      *
*		FLDCLR - to clear a field				      *
*		FLDPOS - to position to	a field				      *
*									      *
*   Data (Ext):	Compressed image    Data (Loc):	IMGCNT - Count of screens     *
*						IMGTAB - Pointer to screens   *
*						IMGPTR - Offset	of current    *
*							 compressed image     *
*						IMGFLG - hardware line length *
*									      *
*	The primary entry point	simply determines which	function is being     *
*	invoked, and transfers control to that function.  All registers	      *
*	are saved and restored.	 Interface with	the BASIC data area is	      *
*	also performed.							      *
*									      *
******************************************************************************\
;;
;;	Console	output - Normal	- P1 or	the content of the DL register is
;;				  output to the	current	cursor position.
;;
$COUT	MACRO	P1
	IFNB	<P1>
	MOV	DL,P1
	ENDIF
	MOV	AH,2
	INT	21H
	ENDM
;;
;;	Console	Input -	No Echo	- Wait - Character is returned in AL
;;
$CINE	MACRO
	MOV	AH,8
	INT	21H
	ENDM
;
;  The following structure defines the stack content on	entry.
;
PARMS	STRUC
;
SAVEBP	DW	?
SAVOFF	DW	?
SAVSEG	DW	?
PARM3	DW	?
PARM2	DW	?
PARM1	DW	?
;
PARMS	ENDS
;
PLENG	EQU	6
;
CODE	SEGMENT	BYTE PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	EXTRN	BASMEN:BYTE		;Expects an external stack of screens
;
IMGCNT	DW	-1			;Set for initialization
IMGTAB	DW	10 DUP (?)		;Up to 10 screens
IMGPTR	DW	0			;Current compressed image pointer
IMGFLG	DB	0			;Length	flag for image 0=80,1=40
IMGLEN	DB	0			;Length	of hardware line
;
SAVSS	DW	0			;Stack seg save	area
SAVSP	DW	0			;Stack pointer save area
SAVSI	DW	0			;String	pointer	save area
PRM2	DW	0			;Pointer to second parameter
;
SBUF	DB	81 DUP (?)		;Work buffer
;
	DB	10 DUP ('STACK ')	;Internal stack	area
ENDSTK	EQU	$
;
	PUBLIC	BASSCR
;
BASSCR	PROC	FAR
	PUSH	BP
	MOV	BP,SP			;Get stack reference
	MOV	SI,[BP].PARM1		;Get ptr to first parm
	MOV	AX,WORD	PTR [SI]	;Get first parm
	MOV	SI,[BP].PARM2		;Get ptr to second parm
	MOV	DI,SI			;Save it for return of data
	MOV	BX,WORD	PTR [SI]	;Get second parm
	MOV	SI,[BP].PARM3		;Get ptr to string vector
	MOV	CX,CS			;Now we	can blow DS
	MOV	DS,CX			;Addressability	to 'code' segment
	MOV	PRM2,DI			;Save 2nd parm pointer
	MOV	SAVSS,SS		;Save old stack	segment
	MOV	SAVSP,SP		;   and	pointer
	MOV	SAVSI,SI		;Also string vector address
	MOV	SS,CX			;Set to	new stack
	MOV	SP,OFFSET ENDSTK
	PUSH	ES			;Now save ES
	OR	AX,AX			;Check command
	JZ	DISP			;Standard display screen
	DEC	AX
	JNZ	A1
	JMP	FLDOUT			;Field output request
A1:	DEC	AX
	JNZ	A2
	JMP	FLDINP			;Field input request
A2:	DEC	AX
	DEC	AX
	JNZ	A3
	JMP	FLDCLR			;Field clear request
A3:	DEC	AX
	JNZ	RESRET
	JMP	FLDPOS			;Field position	request
RESRET:	MOV	SS,SAVSS		;Restore stack segment
	MOV	SP,SAVSP		;  and pointer
	MOV	AX,SS
	MOV	ES,AX
	MOV	DS,AX
	POP	BP
	RET	PLENG			;Do a "far" return
;
;	Display	Menu - Expects BX to contain the number	of the
;			compressed image to be displayed.  This	reference
;			is saved for field handling calls.
;
DISP:	MOV	AX,IMGCNT		;Check count for initial value
	INC	AX
	JNZ	IMGINT			;Already initialized
	CALL	SETAB			;Set up	image table
IMGINT:	DEC	BX			;Image number -	1
	SHL	BX,1			;  times two
	MOV	DX,IMGTAB[BX]		;Get pointer to	image
	MOV	IMGPTR,DX		;   and	save for field calls
	CALL	SETES			;Set ES	to proper regen	buffer
	XOR	CX,CX
	MOV	DI,CX			;Initialize regen pointer
	CLD				;Assure	direction
	MOV	SI,DX			;Point to image
	LODSW				;Load field count
	ADD	AX,AX
	ADD	AX,AX			;AX contains size of field table
	ADD	SI,AX			;So step over it
	LODSW				;Load size of compressed image
	MOV	IMGFLG,0
	TEST	AH,80H			;Establish image size flag
	JZ	SIMG1
	MOV	IMGFLG,1		;Forty character image
	AND	AH,7FH
SIMG1:	MOV	BX,SI
	ADD	BX,AX			;BX points one cell beyond image
	MOV	AH,7			;Initial attribute
LODLP:	CMP	SI,BX			;See if	out of screen
	JAE	LODDNE			;Out, so display complete
	LODSB				;Get image byte
	INC	AL			;Check for attribute flag
	JNZ	LOD1			;Not attribute flag
	LODSB				;Load attribute
	MOV	AH,AL			;   and	save
	JMP	LODLP
LOD1:	INC	CX			;Set loop count	to 1
	DEC	AL			;Test for repeat count flag
	JNZ	LOD2			;No
	LODSB				;Load repeat count
	MOV	CL,AL			;   and	set loop count
	LODSB				;Load character	to be repeated
LOD2:	REP	STOSW			;Store character and attribute in regen
	JMP	LODLP
LODDNE:	CMP	IMGLEN,160		;Check for hardware LL
	JZ	LD80
	TEST	IMGFLG,1
	JZ	LDFIX
	MOV	IMGFLG,0		;40/40,	so no adjustment
	JMP	SHORT LODOUT
LD80:	TEST	IMGFLG,1
	JZ	LODOUT			;80/80,	so no adjustment
LDFIX:	PUSH	DS
	PUSH	ES
	POP	DS
	TEST	CS:IMGFLG,1
	JZ	LDTRNC			;Truncate screen
	STD				;Center	screen
	MOV	SI,7CEH			;Point to end of image
	MOV	DI,0F9EH		;Point to end of screen
	MOV	DL,25			;Do 25 lines
XLP2:	MOV	CX,20
	MOV	AX,720H			;Clear 20 columns
	REP	STOSW
	MOV	CX,40			;Move 40 columns
	REP	MOVSW
	MOV	CX,20
	MOV	AX,720H			;Clear 20 columns
	REP	STOSW
	DEC	DL
	JNZ	XLP2			;Loop through 25 lines
	CLD
	JMP	SHORT LODPOP
LDTRNC:	XOR	SI,SI			;Truncate image
	MOV	DI,SI
	MOV	DL,25
XLP1:	MOV	CX,40			;Move 40 columns
	REP	MOVSW
	ADD	SI,80			;Skip 40 columns
	DEC	DL
	JNZ	XLP1			;Loop through 25 lines
LODPOP:	POP	DS
LODOUT:	JMP	RESRET			;Restore registers
;
;	Field Output - Expects DX to point to string for output
;
FLDOUT:	MOV	CX,WORD	PTR ES:[SI]	;Get length of string
	CMP	CX,80
	JBE	LENOK
	MOV	CX,80			;Force to 80 as	max
LENOK:	MOV	SI,WORD	PTR ES:[SI+2]	;Now point to string
	XOR	DI,DI
OLP1:	MOV	AL,BYTE	PTR ES:[SI]	;Get Basic's string
	MOV	SBUF[DI],AL		;  and put in work buffer
	INC	SI
	INC	DI
	LOOP	OLP1			;Loop till string in buffer
	MOV	SBUF[DI],0		;Put on	terminator
	MOV	SI,OFFSET SBUF		;String	pointer	to SI
	MOV	AX,BX			;Put field number in AL
	CALL	FNDFLD			;Set for field requested
	CALL	SETES			;Set ES	for regen buffer
	ADD	DL,CL			;Make col end of field plus 1
FO1:	LODSB				;Get string byte
	OR	AL,AL			;Check for terminator
	JZ	FO3			;String	shorter	than field
	STOSW				;Save string byte and attribute
	LOOP	FO1			;Loop till end of field
FO2:	CALL	SETCUR			;Position cursor
	JMP	RESRET			;  and return
FO3:	MOV	AL,' '
	REP	STOSW			;Clear remainder of field
	JMP	FO2
;
;	Clear requested	field to field attribute
;
FLDCLR:	CALL	DOCLR
	JMP	RESRET
;
;	Position cursor	to start of field
;
FLDPOS:	MOV	AX,BX
	CALL	SETRCL			;Get row/col
	CALL	SETCUR			;  and set cursor
	JMP	RESRET
;
;	Field Input
;
FLDINP:	MOV	AX,BX
	PUSH	AX			;Save field number
	TEST	AL,80H
	JNZ	NOCLR			;Don't clear before input
	AND	AL,7FH
	CALL	DOCLR			;Clear the field in AL
NOCLR:	POP	AX
	AND	AL,7FH			;Clear flag bit, if any
	CALL	SETES
	CALL	FNDFLD			;Set for field data
	MOV	BL,AH			;Save attribute
	INC	CL			;Make field one	count longer
	MOV	SI,OFFSET SBUF		;Use internal buffer
	JMP	SHORT SETC		;  and enter read loop
;
ILP:	DEC	CL			;Decrement characters remaining
	JZ	BEEP			;Out of	field
	MOV	BYTE PTR [SI],AL	;Save current input byte
	INC	SI			;   and	setp to	next buffer locn
	INC	DL			;Step cursor position
	INC	CH			;Step string (read) length
	MOV	AH,BL			;Restore attribute
	STOSW				;  and put char	and attrb to screen
SETC:	CALL	SETCUR			;Advance cursor
FIINP:	$CINE				;Read next character
	OR	AL,AL
	JZ	SCODE			;Scan code character coming
	CMP	AL,13
	JZ	CR			;Carriage return input
	CMP	AL,1BH
	JZ	ESC			;Escape	input
	CMP	AL,9
	JZ	TABR			;Tab right input
	CMP	AL,8
	JZ	BS			;Back space input
	CMP	AL,7FH
	JZ	BS			;Delete	input
	CMP	AL,' '
	JB	FIINP			;Don't take anything less than blank
	JMP	ILP			;Go save character
;
BEEP:	PUSH	DX
	$COUT	7			;Out of	field, so "beep" at him
	POP	DX
	INC	CL
	JMP	FIINP
;
CR:	XOR	AH,AH			;Set flag register
COM:	MOV	BYTE PTR[SI],0		;Set nul at end	of string
	MOV	AL,AH
	CBW
	MOV	DI,PRM2
	POP	ES
	STOSW				;Save return code
	MOV	AL,CH
	CBW
	MOV	CX,AX			;Set CX	to input string	length
	MOV	SI,SAVSI		;Get string vector pointer
	CMP	CX,WORD	PTR ES:[SI]
	JBE	INLOK			;Less than or equal to string
	MOV	CX,WORD	PTR ES:[SI]	   ;Don't move more than field length
INLOK:	PUSH	CX
	MOV	DI,WORD	PTR ES:[SI+2]	   ;Get	pointer	to string
	MOV	SI,OFFSET SBUF
	REP	MOVSB			;Move string to	BASIC
	MOV	SI,SAVSI		;Get pointer again
	MOV	CX,WORD	PTR ES:[SI]	   ;Compute difference in length
	POP	AX
	SUB	CX,AX
	JZ	INDNE
	MOV	AL,' '
	REP	STOSB			;Clear remainder of string
INDNE:	JMP	RESRET
;
SCODE:	$CINE				;Get next character after nul
	MOV	AH,8
	CMP	AL,15
	JNZ	SCN1
	MOV	AH,2			;Set Tab left flag
SCN1:	OR	AL,80H			;Set scan code zone
	MOV	BYTE PTR [SI],AL	;  and save character
	INC	SI
	INC	CH			;Step pointer and length of string
CARRY:	STC				;Set flag
	JMP	COM
;
TABR:	MOV	AH,1			;Set tab right flag
	JMP	CARRY
;
ESC:	MOV	AH,4			;Escape	flag
	JMP	CARRY
;
BS:	OR	CH,CH			;See if	at start
	JNZ	BS1
	JMP	FIINP			;Yes, so ignore	BS
BS1:	DEC	CH			;Decrement string length
	INC	CL			;  and add back	to field length
	DEC	SI			;Step back buffer pointer
	MOV	AH,BL			;Restore attribute
	MOV	AL,' '
	SUB	DI,2			;Move screen pointer back
	STOSW				;Blank last character on screen
	SUB	DI,2
	DEC	DL			;Step cursor back
	JMP	SETC
;
BASSCR	ENDP
;
;	Sets ES	to proper segment for equipment	"installed"
;
SETES	PROC	NEAR
	PUSH	AX
	INT	11H			;Get equipment word
	AND	AL,30H
	XOR	AL,30H			;Mask for display type
	JNZ	ES1			;Not a Mono
	MOV	AX,0B000H		;Monochrome Adapter
	JMP	ES2
ES1:	MOV	AX,0B800H		;Color/graphics	Adapter
ES2:	MOV	ES,AX			;Set ES	for regen buffer
	MOV	AH,15
	INT	10H			;Check DOS mode
	SHL	AH,1
	MOV	IMGLEN,AH		;Save hardware line length
	POP	AX
	RET
SETES	ENDP
;
;	Find field - Sets DI to	regen offset for field
;			  DX to	row/col	for field
;			  CX to	length of field
;			  AH to	attribute of field
;
FNDFLD	PROC	NEAR
	CALL	SETRCL			;Get row/col and length
	MOV	AL,DH			;Row to	accumulator
	MOV	AH,IMGLEN		;Multiplier for	one row
	MUL	AH
	MOV	DI,AX			;Move to regen pointer
	MOV	AL,DL			;Column	to accumulator
	XOR	AH,AH
	ADD	AX,AX			;Double	column for word	offset
	ADD	DI,AX			;DI now	points to field	in regen
	MOV	AH,CH			;Attribute to AH
	XOR	CH,CH			;Leave length in CX
	RET
FNDFLD	ENDP
;
;	Set row/col/length/attribute
;
SETRCL	PROC	NEAR
	CBW
	DEC	AX
	MOV	CX,2
	SHL	AX,CL
	ADD	AX,CX
	MOV	BX,IMGPTR		;Get pointer to	compressed image
	ADD	BX,AX			;And set offset
	MOV	DX,WORD	PTR [BX]	;Load row/col
	XCHG	DH,DL			;DH=Row, DL=Col
	TEST	IMGFLG,1		;See if	screen to be centered
	JZ	FF1
	ADD	DL,20			;It was
FF1:	MOV	CX,WORD	PTR [BX+2]	;  and attrb/length
	RET
SETRCL	ENDP
;
;	Position cursor	to row/col in DX
;
SETCUR	PROC	NEAR
	PUSH	CX
	MOV	AH,1
	MOV	CX,0607H
	INT	10H			;Turn cursor on	(BASIC does
	MOV	AH,2			;  funny things)
	MOV	BH,0			;Page 0
	INT	10H			;Set cursor
	POP	CX
	RET
SETCUR	ENDP
;
SETAB	PROC	NEAR
	XOR	DX,DX
	MOV	DI,DX
	MOV	CX,DX
	INC	CX
	INC	CX
	MOV	SI,OFFSET BASMEN	;External screen stack
STBLP:	MOV	AX,WORD	PTR [SI]	;Get "field table" count
	INC	AX
	JZ	ATEND			;At end	of screens
	MOV	IMGTAB[DI],SI		;Save pointer to start of screen
	ADD	DI,CX			;Step to next entry
	INC	DX			;  and count screen
	DEC	AX
	SHL	AX,CL			;Size of field table
	ADD	AX,CX			;  plus	count word
	ADD	SI,AX			;SI now	points to image	length word
	MOV	AX,WORD	PTR [SI]
	AND	AH,7FH			;Clear flag, if	any
	ADD	SI,AX			;SI points to "next" screen
	JMP	STBLP
ATEND:	MOV	IMGCNT,DX		;Save count of screens
	RET
SETAB	ENDP
;
;	Clear requested	field
;
DOCLR	PROC	NEAR
	CALL	SETES			;Set to	regen buffer
	MOV	AX,BX
	CALL	FNDFLD			;Get pointer to	regen and attribute
	MOV	AL,' '			;Clear to blanks
	REP	STOSW			;Stores	blank plus attribute
	CALL	SETCUR			;Position cursor to start of field
	RET
DOCLR	ENDP
;
CODE	ENDS
;
	END
```
{% endraw %}

## BASSCR.DOC

{% raw %}
```
        Screen Design Aid - V3.0 - BASIC Interface Revision.


        EINTERFACE TO COMPILED BASIC PROGRAMSF

             The  current  distribution  diskette  contains  an  enhanced 
        version  of  the  interface bridge for used with  compiled  BASIC 
        programs.   This  enhanced version permits inclusion of up to  10 
        screens in program memory at one time,  and elminates one of  the 
        modules required during Link.  It follows the interface described 
        in  the original documentation,  in that it expects to be  called 
        with  three  parameters  passed  by  the  call.   The  first  two 
        parameters  are  integer variables,  while the third is a  string 
        variable.  The functions supported, and the proper content of the 
        passed variables are:

             Display Menu - Parm 1 = 0, Parm 2 = Screen number (1 to 10),
                            Parm 3 = unused.

             Output String- Parm 1 = 1, Parm 2 = Field number, Parm 3 =
                            string to be displayed.

             Input String - Parm 1 = 2, Parm 2 = Field number, Parm 3 =
                            string variable to accept the input string.

             Out/In       - Not supported

             Field Clear  - Parm 1 = 4, Parm 2 = Field number, Parm 3 =
                            unused.

             Position     - Parm 1 = 5, Parm 2 = Field number, Parm 3 =
                            unused.

        As discussed in the original documentation, a string being output 
        will be truncated or extended by blanks to the field size defined 
        for  the screen.   Input strings will be similarily  extended  by 
        blanks  or  truncated  to  fit the entry  length  of  the  string 
        parameter passed to this function.  

             To  use this facility,  prepare screens as described in  the 
        main  document.   Having  completed  the design  step,  form  one 
        assembly module, of the form:

             CODE SEGMENT   PARA PUBLIC    'CODE'
                  ASSUME    CS:CODE,DS:CODE
             ;
                  PUBLIC    BASMEN
             ;
             BASMEN    EQU  $
         
                  (Include the source form of the screens desired
                   in the sequence desired...note the sequence)

             ;
                  DW        -1                  ;Must be included!!!!!
             ;
             CODE ENDS
                  END


                                        1





        Screen Design Aid - V3.0 - BASIC Interface Revision.


             Be   particularily  careful  that  the  final  define   word 
        containing 0FFFFH (-1) is included.   Assemble this  module,  and 
        then  when performing the "Link" of your Basic program,  use  the 
        following control string:

                  your-program+BASSCR+screen-module  (sequence critical)

        when prompted for the "object" code to be linked.  Obviously, the 
        object  form of the BASMEN you just produced and the object  form 
        of BASSCR must be available to the Link program.  

             BASSCR requires 3CEH memory, while the screen module size is 
        a  function  of  the  number and content of  the  screens  to  be 
        displayed.   Execution  is normal as for any other compiled Basic 
        program.   This  function  performs properly  whether  the  Basic 
        program  was  compiled  for "stand alone" or "run  time  library" 
        execution.








































                                        2






```
{% endraw %}

## DEMO.BAS

{% raw %}
```bas
	REM
	REM	THIS BASIC PROGRAM DEMONSTRATES	THE SCREEN DESIGN AID
	REM

	DEF SEG=&H40
	POKE &H10,(PEEK(&H10) AND &H0CF) OR &H10
	DEF SEG
	SCREEN	0,1,0,0
	WIDTH 40
	LOCATE	1,1,1,6,7
100	CMD%=0:FLD%=1:PRM$="       "
	GOSUB 200
	FLD%=1
	CMD%=2
	GOSUB 200
	FLD%=ASC(LEFT$(PRM$,1))-48
	IF FLD%	<0 OR FLD% >3 THEN 100
	IF FLD%=0 THEN 1000
	FLD%=FLD%+1
	CMD%=0
	GOSUB 200
	FLD%=1
	CMD%=2
	GOSUB 200
	GOTO 100

200	CALL	BASSCR(CMD%,FLD%,PRM$)
	RETURN

1000	SCREEN 0,0
	END
```
{% endraw %}

## FILES312.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No 312   Screen Design Aid and Forms                            v1.1
---------------------------------------------------------------------------
 
This disk contains two programs.  The first is the Screen Design Aid
(SDA) program for designing display screens for data input use in other
programs, called from Assembler, BASIC, or other high-level programs.
It can be used with the monochrome monitor, and shows spectacular
results with the RGB color monitor.  It includes specifications for
blinking, high-intensity, underscoring, and reverse-video options, as
well as a full range of color foreground and background options.
 
The second program is the Forms (FORMS) program for forms generation and
management.  It allows you to generate master forms tailored to your
individual application which can then be recalled, filled out, and
stored as completed forms.  Requires 256K, 1 drive, either monochrome or
color screen.  Printer output is set for an EPSON MX80 or equivalent.
 
SDA       COM  Screen Design Aid, Version 3.0
$SDA      OBJ  Screen Design Aid, object code
$FIELD    MAC  Macros for Screen Design Aid
BASSCR    OBJ  BASIC Interface for SDA, object code
BASSCR    ASM  BASIC Interface for SDA, Assembler
DEMO      EXE  SDA demo program, color monitor, 1 screen
DEMO      BAS  ASCII description of DEMO.EXE source code
SDA       DOC  Screen Design Aid manual (32 pages)
BASSCR    DOC  BASIC-SDA Interface manual (2 pages)
(READ     ME)  Stmt. to print above 2 files before SDA is run
-------------
FORMS     COM  Forms generation and management program
FORMS     DOC  Forms program documentation (10 pages)
REGISTER  FRM  Registration form for FORMS users
BUGREPT   FRM  Bug report form to report FORMS problems
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## FORMS.DOC

{% raw %}
```
            
















                                     F O R M S


                                 Reference Manual

                                    Version 1.0


                                    March 1985


                                MaeDae Enterprises
                                1826 Wren
                                League City, TX 77573


                     (c) Copyright 1985 by MaeDae Enterprises
                                All Rights Reserved




































                                      PREFACE


         FORMS is distributed under the "Shareware" concept.  Feel free
         to pass copies to your friends and PC users groups.  This program
         may be uplinked to bulletin boards provided this documentation 
         file is included.  YOU MAY NOT SELL FORMS!

         A contribution of $30.00 is suggested if FORMS proves useful to 
         you.  This contribution entitles you to:

                    1.  A copy of the latest version of FORMS
                    2.  A complete users manual
                    3.  Notification of future updates of FORMS
                    4.  Notification of other software products developed
                        by MaeDae Enterprises

         Send all contributions and inquires to:
                   
                    MaeDae Enterprises
                    1826 Wren
                    League City, TX 77573





         Disclaimer:

         MaeDae Enterprises makes no claims for or offers no warranties of 
         any sort with FORMS.  MaeDae Enterprises assumes NO responsibility 
         for any sort of damage resulting from the apparent or actual use 
         of FORMS (mental or physical).  MaeDae Enterprises DOES want to 
         know of any problems users have with FORMS and will fix any 
         "bugs" found by our users.  We will also try to incorporate 
         changes and enhancements based on our users suggestions.





















                                         i








                                 TABLE OF CONTENTS



                           1.  OVERVIEW

                           2.  GETTING STARTED

                           3.  KEY DESCRIPTIONS

                           4.  SUGGESTIONS/EXAMPLE USAGE

                           5.  NOTES ON FORMS
          











































                                        ii








                                     OVERVIEW


         FORMS is a form-generating program that allows you, the user, 
         to generate master forms tailored to your individual needs.
         FORMS allows you to create or revise a master form or a 
         completed (filled out) form.  A master form can be altered only
         if you are operating in the "create or revise a master form"
         mode.

         Master and completed forms can be stored as well as printed.
         Once a master form has been created and saved, it can be 
         recalled an unlimited number of times to be filled out and then
         stored as a completed form.

         FORMS supports IBM (Epson) compatible printers as well as Daisy
         wheel printers, however only Epson and Epson compatibles (Gemini
         10X for example) can take advantage of the compressed mode used
         by FORMS when printing out larger forms.

         FORMS requires an IBM PC or IBM PC compatible with at least 256K
         of RAM.  Direct screen memory access is used to provide high 
         speed screen updates.  This may make FORMS unusable on some
         "not too close" IBM PC compatibles.  If after loading FORMS, 
         you see only text, no borders, then you have a compatibility
         problem.  If you provide MaeDae Enterprises with information 
         on your screen memory starting address, MaeDae Enterprises
         will try to include your display adapter particulars in the
         FORMS defaults.  IBM monochrome, color, and enhanced graphics
         adapters are known to work with FORMS.
            


























                                           1








                                  GETTING STARTED


         Everything has a beginning.  The ballerina begins by sticking 
         her foot into her slipper, the college professor by finding his
         box of multicolored chalk, and you'll begin by loading DOS into
         your computer.  If you are an experienced computer person then
         type FORMS and skip to the description of the menu items.

         However, if you're like the Mae of MaeDae Enterprises (who just
         happens to be the one writing this section), then you'll need
         all the help you can get.

         So find the diskette that has your DOS on it.  After loading 
         DOS, type FORMS and press enter.  A wonderful display written by
         the Dae of MaeDae will come up (my husband really spent some
         time on this so please appreciate it)!

         At this point, some nice to know information will come up. 
         Basically, if you are this far along your computer has enough
         memory to run FORMS.  Press any key.  TA-DA the MAIN MENU.
         The Main Menu options with descriptions are below.

                 1.  Create/Revise Master Form:  This option allows you
                     to create a new master form or revise an existing
                     one.  You have the capability to designate the form
                     size (maximum size is 86 lines by 130 columns), 
                     adding (or deleting) a border and drawing horizontal
                     or vertical lines (diagonal lines are not possible).
                     The cursor control keys are enabled, allowing you to
                     "walk around" a newly created form.
                 
                 2.  Complete a Master Form:  With this option, you can 
                     retrieve, then complete a copy of a master form.
                     Text added to the original master form can be 
                     manipulated, however, any text which is part of the
                     master form can't be changed.
          
                 3.  Revise Completed Form:  Here you can recall a
                     completed form for revision.  This option is the
                     same as option two, except you aren't starting with
                     with the "clean slate" of a master form.  You have
                     complete freedom to revise any portion of the form
                     except for the master form outline.
                     
                 4.  Print a Form:  This option gives you full access to
                     the computer directories and drives to allow you
                     flexibility in searching out and printing forms. If
                     you have an Epson or Epson compatible, then you can
                     take advantage of the compressed print format for
                     larger forms.

                 5.  Utilities:  This section lets advanced users really 
                     "play" with this package.  You will be able to
                     manipulate forms -- erase, copy, rename, and even 
                     export a form to a standard ASCII DOS file.
                      
                                         2
                      
                       

                         
                        
                       
                        
                           
                 6.  General Information:  For those of you who will just
                     have to run FORMS before reading the documentation,
                     here is a short overview.
                       
                 7.  Exit to DOS:  All good things must come to an end.
                     Choose this option if you want to leave FORMS and
                     return to DOS.
                     
                      
                       
                   
                     
                       
                 NOTE:  Once a form size has been selected (option 1),       
                 it cannot be changed.    
                      
                      
                       
                      
                      
                    
                   
                       
                     
                       
                     
                   
                     
                    
                    
                     
                     
                    
                    
                   
                   
                   
                     
                      
                     
                       
                    
                    
                 
                     
                    
                      
                    
                     
                    
                     
                  
                     
                    
                     
                     

                                         3
                      
                       
                          
            




                                 KEY DESCRIPTIONS


         Generating a master form consists of determining form dimensions,
         drawing lines, and adding appropriate text.  FORMS defines the
         numeric keypad keys, the keyboard keys, and function keys to make
         this task easy.

         KEYPAD KEYS:  With the exception of the insert and delete keys, 
         all keypad keys are non-destructive, that is, the character under
         the cursor is not changed.

           left arrow - move cursor one space left
           right arrow - move cursor one space right
           up arrow - move cursor up one line 
           down arrow - move cursor down one line
           page up - move screen up one page (24 lines) within form
           page down - move screen down one page within form
           home - move screen to upper left portion of form
           end - move screen to lower left portion of form
           insert - inserts desired number of spaces at the cursor while
                    moving rest of line right
           delete - deletes character under cursor and moves rest of line
                    to left to fill in space   

         FUNCTION KEYS:  These keys perform different functions depending
         on whether you are working on a master form or a completed form.

          Master Form                                   Completed Form  
          -----------                                   --------------
         F1  Help                                          F1  Help 
         F3  Draw Border                                   F10 Exit
         F4  Erase Border
         F5  Draw Line
         F6  Erase Line
         F10 Exit

         Note:  For F5 and F6 position the cursor at the beginning point 
         and press the function key once.  Then position cursor at the 
         ending point and press the function key again.  F5 and F6 can be
         used for either vertical or horizontal line drawing/erasing.

         KEYBOARD KEYS:  All letters and numbers are entered as you 
         normally would from the keyboard.  The special keyboard keys are:

           control right arrow (hold down Ctrl and press keypad right 
             arrow) - move cursor to right side of form
           control left arrow - move cursor to left side of form
           return - move one line down, start of line
           backspace (keyboard left arrow) - move cursor one position to
             the left along with the rest of line

           Only in Master Form mode:
             Alternate I (hold down Alt and press I) - insert line
             Alternate D - delete line


                                         4








                             SUGGESTIONS/EXAMPLE USAGE



         STEPS FOR EXAMPLE:  Creating a form named TEMP.


         1.  Bring up FORMS.
         2.  Press any key to go from the FORMS logo to the Main Menu.
         3.  Select 1 for Create/Revise Master Form.  The screen will
             clear and you will be presented with a menu of all the
             existing master forms.
         4.  Type TEMP and press enter.  A menu will appear asking you
             to define the form size.
         5.  Select 3 for a 40 line by 80 column form.  You are now in
             the edit mode for a master form.
         6.  Press F3.  A border should appear around the entire form.
             Notice that the bottom of the form is missing.  We are
             only looking at the 1st 24 lines of a 40 line form.
         7.  Press PgDn.  The rest of the form will now appear.
         8.  Press F5 for a line.  Move the cursor to the right side of
             the form by pressing Ctrl and the keypad right arrow.  Press
             F5 again.  We have just drawn a horizontal line on line 17 
             of our form.  Don't worry about the "-" in column 1 of the 
             form overwritting part of the border.  Just press F3 once
             more to restore the border.
         9.  Be creative.  Walk around on the form and type in text,
             make vertical lines, or anything you desire.  Refer to this
             manual or press F1 (Help) then select 4 for more information
             on the key functions.
         10. Press F10 (Exit).  We are ready to save our masterpiece.
         11. Select 7 (Save and Exit).  When asked for the file name type
             TEMP and press enter.  TEMP will now be saved.
         12. Select 2 (Complete a Master Form).  You will see a directory
             of master forms displayed.  Type TEMP and press enter.
         13. You are now in the "complete a form" mode.  Walk around on 
             the screen and "fill out" the form you generated earlier.  
             Notice how the outline of the master form is protected from 
             erasure.
         14. Press F10 (Exit).  We have now completed a master form.
         15. Select 7 (Save and Exit).  When asked for the file name type
             TEMP01 and press enter.  We have just saved our first 
             completed form (notice the 01 we added after TEMP in the file
             name, this allows easy reference later).
         16. We are now back at the Main Menu.  From here you can print 
             TEMP or call it in for further revision.











                                         5







           
                                  NOTES ON FORMS



         A mixture of information relating to FORMS is listed below.
         These items didn't seem to fit into any of the other sections
         but need to be passed on to you.

         GENERAL:  

         1.  FORMS was written in Borland's Turbo Pascal.  The source 
         code consists of 4000 lines of code.

         2.  All screen manipulation, including windowing, is handled by
         writing directly to the screen memory.  This provides extremely
         fast screen updates and allows high speed scrolling of text on
         the screen.  Checks are performed to determine whether your 
         system is color or monochrome and the corresponding section of
         memory is used. 

         3.  FORMS is a "Shareware" software package.  Please provide
         suggestions for improvement and also a contribution of $30 to 
         show us that our efforts are not in vain.  FORMS will continue
         to improve as long as people suggest improvements and contribute
         toward its development.

         PRINTING:

         1.  Most IBM PCs have the printer connected on LPT1 (the first
         parallel printer port).  The Print Menu allows you to select 
         LPT1 as the default printer port.  If you select it, then FORMS
         will do a check to ensure that the printer is turned on and 
         on-line prior to trying to print.  This will allow you to
         correct most problems prior to the start of printing.

         2.  If you have chosen an Epson compatible printer then FORMS
         will use compressed print and adjust the line spacing as 
         necessary to allow your form to fit on a single sheet of paper.

         SAVING:

         1.  Retyping the file name is required only if you are creating
         a new master form or filling out a master form.  If you are
         editing an existing form then press enter when asked for file
         name and the original file name will be used.

         2.  Before saving, a check is done to ensure sufficient space is
         left on the diskette and that the file doesn't already exist.  If
         a problem occurs, FORMS will prompt you for the necessary action.








                                         6






         DEFAULT DRIVE:

         FORMS allows you to change the default drive so that you can have
         full access to all the drives on your system.  If an error occurs
         while saving to one drive, then you can always switch to another
         drive and try again.

         CHANGE DIRECTORY:

         Many of the menus allow you to change to another directory. 
         You can access all the directories available on the default 
         drive.  You must be using DOS ver 2.0 or later for this to work.

         FILE NAME EXTENSIONS:

         1.  FORMS uses the file name extensions FRM and FOF to designate 
         master form and completed (filled out form) respectively.  These
         extensions are transparent to you except when you ask for a 
         complete directory listing under the utilities menu or from DOS.

         2.  Master forms when saved to disk consist of only the text with
         a 128 byte header containing information about the form size.

         3.  Completed forms when saved to disk consist of the text 
         alternated with the video attribute (protected or unprotected) 
         along with the 128 byte header.

































                                         7





```
{% endraw %}

## IMAGE.DOC

{% raw %}
```
                   SDA Compressed Image Format


    The binary "image" file produced by the Screen Design Aid
(SDA) is actually a quite primitive format.  It is easiest to
think of the image as being composed of two parts:  The field
definitions, and the screen body.  The following paragraphs
defined the precise format of these two parts, which are actually
concatenated to form one contiguous, variable length file.

Field Definition Part:

    The first word (normal LSB, MSB sequence in memory), contains
a count of the number of fields defined in this image.  The
remainder of this part is composed of four bytes entries, one per
defined field, where the four bytes contain the following
information:

    Byte 1:  Contains the binary screen row (top = 0).
    Byte 2:  Contains the binary screen column (left most = 0).
    Byte 3:  Contains the length of the field in binary.
    Byte 4:  Contains the display attribute of the field.

These four bytes repeat as many times as necessary to define each
of the fields specified for the screen.

Screen Body:

    Immediately following the field table part, the next word of
the image contains the binary length of the screen body part,
including this word itself.  The remaining bytes of the body
should be considered a "stream" of bytes.  When the compressed
image is formed, a "scan ahead" function is used.  If more than
three screen positions are found to contain identical characters
AND attributes, then these duplicate characters are discarded and
a special code is inserted in the image.  Similarly, when a
change of attribute is noted, a code is inserted in the image.

    To decode the image is straight forward.  Simply load the
"next" byte of the image.  If this byte is a hex 0FFH, the
following byte is the new attribute, and will remain in effect
until another 0FFH flag is encountered.  If this byte is zero,
then the following byte is a "repeat count" (number of
repetitions of the next data character and attribute to be
output).  If the byte loaded is any other value, it is a "data"
byte, and should be output using the current repeat count and the
current attribute.  By setting the "repeat count" to one
initially, and by re-setting it to one after each output
operation, the image will be correctly expanded and displayed.

    When all of the "stream" bytes have been processed, you will
have filled the full display screen, and the expand operation is
complete.


    To further clarify this expansion process, the following
series of steps are provided.

    1.  Load the count of fields.
    2.  Multiply the count by four, and then add two.
    3.  Use the value computed as an offset into the image and
load the word at this offset.  This word is the length of the
body of the image INCLUDING THIS WORD.  
    4.  Subtract two from this length, giving the number of bytes
in the compressed image.  This value should be saved, and
decremented each time a byte is loaded from the image.  The
completion test is therefore a simple check to see if this count
is zero.  Set the repeat count equal to one.
    5.  If complete, go to end.
    6.  Load the "next" byte, decrementing the count
    7.  If the byte is 0FFH then load the next byte, decrementing
the count.  Save the loaded byte as the "current attribute".  Go
to step 5.
    8.  If the byte is zero, then load the next byte,
decrementing the count, and save this byte as the "repeat count".
Go to step 5.
    9.  For any other value, save the loaded byte as the "data"
byte, and output this byte using the current attribute, as many
times as the required by the "repeat count".
    10. Set the repeat count = 1.
    11. Go to step 5.

    It should be obvious that the first byte encountered in the
compressed image is always a 0FFH, since the first function
required is that of loading a "current attribute". 

    It is probably equally obvious that any character can be
displayed, except 0 and 255.  These two characters are reserved
to act as flags.  Neither character can be generated by SDA
during screen design.  Since only one byte is available for the
"repeat count", no repeat count greater than 255 is allowed.
Since this value will always follow a zero byte when used as a
repeat count, no confusion with the attribute flag exists.  If a
character and attribute repeats more than 255 times (this is not
uncommon in screens that are primarily blank), then the maximum
count is set, and the character to be duplicated is inserted.
This sequence is immediately followed by another "repeat count"
flag, another repeat count, and the character to be duplicated.
This repetitive pattern is repeated until a change of character
or attribute is finally encountered, or until the "end of screen"
is found.  It is slightly interesting to note that an all blank
image requires approximately 26 bytes in compressed form.  This
represents 4000 bytes in expanded form.  It is easy to see how
compression can pay signficant storage dividends.

    The use of the "repeat count" has a hidden advantage.  BIOS
does provide a call that permits outputing a character and
attribute, "count times".  The form used for this compression
exactly parallels this BIOS call, providing considerably greater
speed than 2000 single character output calls to BIOS.

```
{% endraw %}

## SDA.DOC

{% raw %}
```























                          ESCREEN DESIGN AIDF


                                 Copyright 1983

                                       by

                                   DD Systems


















             Dan Daetwyler
             Route 5, Box 518A
             Springdale, AR 72764
             501-756-0212







           





        Screen Design Aid - Version 3.0


        EPREFACEF

             This is a T.P.I.R product!  (The Price Is... Reasonable?)  I 
        object  to  paying  half the price of my hardware  for  a  single 
        software  package,  so  I'm trying to do something about  it.   I 
        believe  that there are enough "micros" around to make a  reason-
        able  return on your labor investment through  volume...  if  you 
        don't  have  to pay substantive advertising and marketing  costs.  
        If  you're reading this document,  you have the package.   It  is 
        copyrighted, so what are your rights?  They are given here:

        --  You are free to copy, and encouraged to distribute to any/all 
             of your friends,  the materials included in the distribution 
             diskettte.  Please include this document.

        --  You  may use these materials in any way you see fit,  but you 
             may  not "sell" the package.   You may use screens  designed 
             using the package in commercial products,  and the  $SDA.OBJ 
             module and the $FIELD.MAC macros are hereby declared "Public
             Domain",  so  you  are free to use those in your  commercial 
             endevors.

        Where's the "catch"?   Simple.   Its up to you.   If you use this 
        package, and like it, send me a check for $25.  Otherwise, thanks 
        for experimenting!   What do you get for the $25, besides a clear 
        conscience?   Not much.  I'll put you on my mailing list and when 
        (not  if) bugs are encountered,  I'll notify you and  offer   our 
        handy, dandy copy service, which incidentally is available to all 
        your friends for their initial copy,  if you don't want to bother 
        copying   the  diskette.    I'll  also  notify  you  when  future 
        developments  are available:   within a few weeks,  we'll have  a 
        programmers  full  screen  editor,  a  catalog  facility,  and  a 
        reasonable "batch" listing capability that makes use of all those 
        "goodies" hiding in the EPSON printer.  

             The copy service mentioned,  is also simple:  Send diskette, 
        mailer, and enough postage to the writer and we'll make a copy of 
        the distribution diskette for you.  If you don't want to send the 
        diskette,  mailer,  et al., send a check for $7.50 and we'll send 
        you a new Verbatim with the materials.

        DISCLAIMER (Or I really don't want to be sued!)

        Although  reasonable  testing  has  been  conducted,   under   no 
        circumstances will the author be liable to you or any third party 
        for  any damages,  including lost profits or other incidental  or 
        consequential damages arising out of the use of, or the inability 
        to use,  this software.  Further the offers made in this document 
        are  subject to withdrawal at any time and without  notification, 
        and prices quoted are subject to change without notice.      







        Preface                         2





        Screen Design Aid - Version 3.0


                                TABLE OF CONTENTS

        Preface .........................................  2

        Introduction ....................................  4

        Organization of Document ........................  6

        Basic Operation .................................  7

        Saving a Screen ................................. 12

        Loading an Existing Screen ...................... 14

        Field Definition/Maintenance .................... 15

        Printing Screens ................................ 19

        Printing Field Tables ........................... 20

        Changing Display Device ......................... 21

        Color ........................................... 22

        Line Lengths .................................... 23

        Application Interface ........................... 24

        High Level Languages ............................ 27

        Technical Reference ............................. 30

        Error Messages .................................. 32
         























        Table of Contents               3





        Screen Design Aid - Version 3.0


        EINTRODUCTIONF

             The  Screen  Design  Aid  (SDA,  henceforth)  is  a  utility 
        designed   to  permit  effective  exploitation  of  the   graphic 
        capabilities  of  the IBM Personal Computer,  when  operating  in 
        "text"  mode.   It  requires a relatively minimal  configuration, 
        operating  on something less than a 64K machine euipped  with  at 
        least  one  diskette  drive,  and utilizing at least one  of  the 
        display interfaces (Monochrome or color/graphic) provided by IBM. 
        It  can be used with monitors of either 40 or 80  character  line 
        resolution, and will operate in either "black and white" or color 
        mode.  IBM DOS (or equivalent) is required.

             Basically, it does no more than provide a relatively simple, 
        fast  method  for  laying out display screens for  use  in  other 
        processes.  This "trivial" task happens to be a relatively labor-
        ious job and is usually more than painful.   The display hardware 
        provided is excellent, and includes a fairly comprehensive set of 
        "graphic" characters than may be displayed in "text"  mode.   Un-
        fortunately,  no effective means for utilization of this facility 
        was  provided.   The user is forced to perform detailed  clerical 
        "coding" at the individual character level if he or she wishes to 
        exploit the excellent character set.  This utility elminates that 
        "coding",  and  provides a few other fringe benefits that  should 
        find a lot of friends.

             Before  going  to  more detail,  fair  warning!   If  you're 
        looking  for  a  true  "graphic"  capability  for  use  with  the 
        color/graphic  board,  this ain't it!   This utility operates  in 
        "text" mode exclusively,  and is limited to the graphics that can 
        be  formed  using  the read only memory  (ROM)  based  characters 
        provided by the hardware.  

             Having  said at least one thing its not,  what is  SDA?   It 
        provides the following functions:

             -- Permits  the  definition  of  a  "screen"  utilizing  any 
                  combination of the 254 displayable characters.

             -- Captures this definition in a compressed form, usually a 
                  few  hundred  bytes versus the 4000  required  for  the 
                  actual screen.

             -- Permits 4full5 exploitation of the attribute byte (eg:
                  high intensity, blink, underscore, reverse, et al).

             -- Provides  simple  "maintenance"  of the  image,  so  that 
                  required modifications are "painless".









        Introduction                    4  





        Screen Design Aid - Version 3.0


             -- Allows for definition of up to 100 fields on each screen, 
                  where the "field" is limited only by line length. 
                  Fields,  incidentally,  may have their own  (different) 
                  attributes.  The application using the screen may then
                  easily:

                  *  Output to a field

                  *  Position (cursor) to a field

                  *  Clear a field

                  *  Input from a field (destructively/non-destructively)

                  *  Out/In from a field (output followed by input)

             -- Provides a convenient interface that may be "bridged"
                  to most "high level" compiled languages.  A minimum
                  bridge to BASIC is provided, and sufficient data for
                  development of other bridges is included in this 
                  document.

             -- Provides full color support for those users equipped with
                  the color/graphics interface.

             -- Provides both 80 and 40 character line support for users
                  with the color/graphics interface.

             -- "Memory cost" for the application is limited to slightly
                  over   500  bytes  PLUS  the  size  of  the  compressed 
                  screen(s) used.

             -- Utilizes  "memory mapped" I/O,  so performance is  easily 
                  within human response thresholds.

             -- Liberally provided with "help" menus and prompt aids, to 
                  assist in "learning" the system.

             -- Provides documentation support by permitting print of the
                  resulting screens (and their field tables), on EPSON
                  MX80 with GRAFTRAX plus.

        In short,  provides all the facilities needed for the "bread  and 
        butter" application utilizing interactive display screens.













        Introduction                    5  





        Screen Design Aid - Version 3.0


        EORGANIZATION OF DOCUMENTF

             Because of the variety of interfaces,  display devices, line 
        lengths,  etc., it would be easy to become so involved in details 
        as to make use of the utility appear complicated.  It is not!  To 
        avoid this pitfall,  this document begins by ignoring some of the 
        more  sophisticated uses of the utility.   The next sections will 
        "walk  through" development of a screen,  and will  not  consider 
        which  display  adapter  or line length your machine  happens  to 
        have.   The  following  sections  then  explore  different  "Line 
        lengths"  and "Color".  

             A  section  on use of screens in applications  is  then  in-
        cluded,  together  with  a "cook book" for interfacing with  high 
        level  languages.   A "technical reference" section is  included, 
        which provides insight into the compressed screen,  field tables, 
        etc., for the user that wishes to know more than you need to know 
        to  use the utility.   Finally,  a very brief "error" section  is 
        included,  to  cover the few primitive error conditions that  may 
        occur during use of the utility.  

             It  is  suggested  that all users follow  through  the  next 
        section.   Beyond that section, you can "pick and choose" to suit 
        your  operating environment and needs.   The next section assumes 
        you  will bring the utility up on your machine,  and  follow  the 
        text with use of the utility.  To prepare for that process, it is 
        suggested that you copy the file, SDA.COM to a work diskette, and 
        maintain  your distrubution diskette as a "master  backup".   The 
        file  is  NOT protected,  and you are free to copy it  using  the 
        standard DOS utilities (see Preface for your "rights").  The file 
        is  approximately 24,000 bytes,  so be sure you have a relatively 
        empty diskette.  

























        Organization of Document        6





        Screen Design Aid - Version 3.0


        EBASIC OPERATIONF

             Assuming  that DOS is loaded and running,  simply enter  the 
        "command":

                       SDA

        As  soon as the load process is complete,  you will see, on  what 
        ever  display  you happen to be using,  the main "menu" for  SDA.  
        This menu lists the major functions available under SDA,  and you 
        may   select   any  function  by  entering   the   single   digit 
        corresponding  to the function,  and depressing the "enter"  key.  
        If  you happen to hit a wrong digit,  the error prompt giving the 
        acceptable  range of values,  and a request to "depress any  key" 
        will appear.  

             Since we're starting "cold", enter "1" -- a request to enter 
        "edit/create".   Your  screen will immediately "clear"  with  the 
        exception  of a few cryptic characters on the lowest line of  the 
        display.   A  flashing cursor will be in the upper left corner of 
        the screen.  

             Before explaining the "prompt line" (lowest line), let's try 
        something else.   Depress function key 9 (hereafter given as F9).  
        Again,   the  screen  immediately  changes,  but  this  time  its 
        relatively  full  of "text".   Don't bother to read it  all  now.  
        We'll come back to it many times in the next few paragraphs.  For 
        now,  notice the last line "depress any key to exit", and hit the 
        space bar (or any other key).   Whap!  Back to the "edit screen".  
        As you'll discover,  anything that was displayed on this  screen, 
        before entering "help" mode, will be restored after "help" mode.

             Now  lets look at the prompt line.   The first two fields on 
        the  left  are relatively obvious:   the row and  column  of  the 
        current  cursor  position (zero,  zero).   Let's move the  cursor 
        around a bit.   Use any of the arrow keys on the numeric key  pad 
        or the "backspace" key.   If you happen to display numeric digits 
        rather  than  see the cursor move,  you have the "Num  Lock"  key 
        depressed.  Depress it once, and try again.  OK now?

             Two things to note, as you move the cursor.  The prompt line 
        display "tracks" the cursor,  by showing the current row/col each 
        time  a key is depressed (yes,  the "typematic" function works  - 
        hold a key down,  and watch the cursor fly).   Second, the cursor 
        "wraps" the screen.   If you go off the right side,  you enter on 
        the  same line on the left side.   Similarily,  exit/entry on the 
        top  and  bottom of the screen also "wraps".   Depending  on  the 
        device you're using,  you'll find that the last column is  either 
        39  or  79.   The "bottom" row is 23,  since we're using line  24 
        (25th line) for the prompt (but you can use it too...  we'll talk 
        about that later).  

             OK,  that should be enough watching the blinking light  move 
        around.   Position  the  cursor  to any convenient point  on  the 
        screen,  and key in "data".   "Data", by the way is about all the 


        Basic Operation                 7





        Screen Design Aid - Version 3.0


        other  keys on the keyboard,  with the exception of the  function 
        keys,  the numeric keypad keys, and use of the "control" or "Alt" 
        key  combinations.   For example,  hit the "enter"  key.   That's 
        strange...  a music note appeared, and the cursor advanced!  Well 
        that's  just  what it should do.   Other than the  normal  cursor 
        advance after a character entry, all cursor movement must be made 
        by using the numeric keypad "arrow" keys.   Carriage  return/line 
        feed  just  happens to be two valid  graphic  characters.   Since 
        we've  got 254 of them and only about 90 keys,  we're frugal with 
        keys.   It'll   feel  a little strange for a  short  period,  but 
        you'll get used to it quickly.  One trick is to "wrap" the screen 
        and then move down one line.  

             Experiment  with  the keys a bit.   Don't  use  the  numeric 
        keypad  keys  or function keys,  yet,  but anything else is  fair 
        game.   Screen getting messy?   OK, hit F9, and we're back to the 
        "help"  screen.   Scan  down the list to F8 -- Erase  screen  and 
        field table.   Hit any key,  and we're back to the mess you left.  
        Now try F8.   Whoops!   What happened?   Screen went  blank,  and 
        there's  this "Are you sure?" message on the prompt line.   First 
        let's say "N" for no.   Back to the mess!   Ok,  now lets try  F8 
        again, and this time respond "Y" to the protection against fumble 
        fingers.   That's  better.   Blank screen,  prompt line restored, 
        cursor back to the upper left corner... in fact just like when we 
        started.  

             You  may  use  F8 any time you  desire.   Just  remember  -- 
        anything you haven't saved to disk is LOST, LOST, LOST.  

             One more little "housekeeping" exercise.   Type any  message 
        you  like on the screen.   F9 to see the "help" screen,  and this 
        time  scan down to F10 -- Exit to Main Menu.   Hit any  key,  and 
        confirm that your message is still there.   OK, now hit F10.  And 
        we're back to the main menu we started with.   Ho hum,  so  what?  
        Well  enter a "1" again,  and when you return to the edit  screen 
        you'll  see your message is still displayed.   SDA will save  the 
        current screen through all of its manipulations.   In fact, there 
        are  only  two  ways to getting rid of it.   One  you've  already 
        learned,  F8,  to  clear the screen.   The other is to  "load"  a 
        "saved" screen over the top of the current screen.  

             So far, about all you've got is a very limited single screen 
        editor...right?   OK,  lets start to play a bit.  F9, and look at 
        F3 - Toggle Normal/Reverse video.  While you're here, look at F4, 
        F5 and F6 also.  F3 through F6 all control the "attribute" of the 
        character  you're keying to the screen.   Hit any key,  and we'll 
        see how they work.   First hit F3.   The prompt line changed.  In 
        the field following "At:",  the "N" (for normal) became "R"  (for 
        reversed).   Now  key in some data (yes,  the space bar is data), 
        and watch the characters appear black on white, rather than white 
        on  black.   I'll  mention that the "FG:" and "BG:"  fields  also 
        changed,  but  we'll worry about them in the section on  "Color".  
        You can ignore them throughout this section.  

             One  of  the  exercises  you can  perform  is  to  note  the 


        Basic Operation                 8





        Screen Design Aid - Version 3.0


        difference  between the space bar and the right arrow key.   When 
        you're in reverse video,  the difference is noticable.  The space 
        bar is "data",  but the right arrow is not.   Useful when  you're 
        either trying to move over something without eraseing it, or when 
        you do want to erase.  

             I  won't bother telling you to hit F8 when your screen  gets 
        messy.   Hit F3,  and return to normal video.   Now hit F4.  This 
        time  the  prompt line displays a "B" for "blink".   Key in  some 
        data and watch it flash!.   Hit F4 to turn blink off, and hit F5.  
        An "H" for "high intensity" appears, and the data you key will be 
        displayed  at the "high intensity" level of your display  device. 
        F5 to turn it off,  and F6 to see "U" (for underscore) and  watch 
        your data appear with the "underscore".  

             Now that you've seen it work, try various combinations.  All 
        but one is permissable, although one is of doubtful utility.  You 
        may  not have "reverse" video and "underscore" active at the same 
        time.   You've  probably already noticed that you can't get  this 
        combination  on  the  prompt line.   The reason  is  a  "hardware 
        limitation",  so  SDA  won't  allow  it.   "High  intensity"  and 
        "reverse video" is the "doubtful" combination.   SDA will  permit 
        it, but it sure won't be used for any normal case.  

             Now  do  the F9 and look at the last several lines  -- those 
        labeled "Home",  "PgUp",  "PgDn", "Ins", and "Del".  Hit any key, 
        and we'll try "Ins" and "Del" first.   Position your cursor to  a 
        mid  point  of a string,  and hit the "Del" key.   As  you  would 
        expect,  a single character was deleted,  while the right side of 
        the  line  was shifted left -- blank inserted at the  right  end.  
        Now tap the "Ins" key.   The "In" flag appears on the prompt line 
        to  warn you that you're in "insert mode",  and data entered will 
        be "inserted" into the line at the cursor.  The right side of the 
        line if shifted right to make room.   Characters shifted off  the 
        end of the line went into the "bit bucket", and are lost.  Delete 
        works  each  time you depress the key.   Insert "toggles" a  mode 
        switch,  and you remain in insert mode until the next  depression 
        of the "Ins" key.

             That  was about what you would have expected,  but the  next 
        gets a bit more "tricky".   Move your cursor to the bottom screen 
        line (line above the prompt line),  and enter a data string.   Do 
        the  same thing with the top line.   Now depress the "PgUp"  key.  
        Three  things happened.   First,  an "up arrow" appeared  on  the 
        prompt  line,  indicating  that you're "shifted".   The top  line 
        disappeared from the display,  and all lower lines were moved  up 
        one.   Finally,  the  bottom line showed up blank.   Move back to 
        that bottom line (blank), and key in another string.  Now hit the 
        "PgDn" key.   Your original top line reappears,  the new  "bottom 
        line" disappeared, and the old bottom line shifted down to become 
        the  current  bottom  line.   What's all this?   Not  that  much.  
        Remember,  I  told  you that you could use all 25  lines  of  the 
        display, even though SDA used one for the prompt line?  Well this 
        is  the  mechanism that lets you do  that.   Normally,  the  edit 
        screen  is displaying the first 24 lines of the completed screen.  


        Basic Operation                 9





        Screen Design Aid - Version 3.0


        When "shifted",  it displays lines 2 through 25 (1 through 24  if 
        you start with zero).   All 25 lines are "remembered" and will be 
        in your completed screen,  however.  This shift function lets you 
        use  that  bottom  line just as you would any other line  on  the 
        display.  

             Of the last group of keys we noted, we've still got one left 
        -- "Home".   This  one is not appropriately  labeled,  so  you're 
        memory will have to serve.  To see it most effectively, do the F8 
        bit, and then key a single word at the left margin of the screen.  
        With  the cursor still on the line containing the word,  hit  the 
        "Home" key.   Centered!   That's all it does.   Specifically,  it 
        will  center the string defined by the left most non-blank to the 
        right   most  non-blank  characters.    I'm  tired  of   counting 
        characters  and  computing the leading  blanks,  and  this  works 
        nicely.

             The  F7 key will be discussed in the section on "Color",  so 
        just ignore it now.
         
             OK,  that's  all...  but two of the keys defined on the help 
        screen.   Where  are  the "graphics"?   That's  those  keys,  but 
        they're  at least two topics themselves.   If you glance  at  the 
        help  screen,  you'll see that F1 is defined to "toggle" graphics 
        mode, while F2 is defined to "assign graphic characters".  Before 
        we can use graphics,  we'll have to "assign" some,  so let's talk 
        about F2 first.  

             This  is  the  function  that  gets  around  the  apparently 
        unsolvable  problem of having less than half as many keys  as  we 
        have  characters  to play with.   Poke F2 and let's see  what  we 
        have...    Ugh,  what a mess.  That's every displayable character 
        available  on  the machine,  with the exception of the  "standard 
        data" characters we've been using.   To keep from getting  bogged 
        down in mechanics,  let's do this quickly.   The cursor is in the 
        upper left corner, and the "happy face" graphic character at that 
        position  is "high lighted".   Depress any "data" key (preferably 
        one you can remember for a few minutes,  like "A" or  "a").   The 
        character you depressed will appear in the list on the right side 
        of  the screen,  together with an equals symbol,  and the  "happy 
        face".   You've  just  "assigned" the "happy face" to  that  key.  
        Using  the numeric pad arrow keys,  move the cursor  around,  and 
        note how the graphic characters are high lighted showing which is 
        active  (you  have the cursor too,  just as a  double  visibility 
        aid).   You may "assign" up to 19 graphic characters.   You  need 
        more?   You'll never remember which is which...  but OK.  You may 
        "reassign" as you desire.   If you select the same data character 
        as you have selected previously, you'll see a "prompt" which says 
        "Reassign?".  An "N" will cancel the assignment, while a "Y" will 
        cause  the  prior assignment to be replaced by your  current  re-
        quest.  I'd suggest you only assign a few keys this time, and try 
        to  remember which is which.   When you've assigned all that  you 
        wish to, hit the "Esc" key and you're back to your edit screen.




        Basic Operation                 10





        Screen Design Aid - Version 3.0


             Two  points to remember.   If you use up the 19  slots,  you 
        "must" reassign, if you wish other graphics.  There is no "clear" 
        function for graphic assignments, other than bringing the utility 
        down and starting all over.   On the other hand,  the assignments 
        you've  made are "remembered" from screen to  screen,  throughout 
        the session.  Second, above all, remember the "Esc" to get out of 
        the assignment phase.   Nothing else will take you out,  short of 
        Ctrl-Break,  which takes you completely out of the utility,  with 
        the loss of what ever you were working on.  

             So  now  we've  assigned some keys.   I hope you  used  "a".  
        Let's enter that character a few times.   Gee,  it still displays 
        as "a".   Hit F1,  and enter some more "a's".   Now you're seeing 
        your  "happy face".   You also noted a change in the prompt  line 
        which now displays "Gr" for graphics mode.  Hit F1 again, and the 
        prompt  will disappear,  and your "a" key is now again  producing 
        "a's".  

             And that really is it.   You've covered all of the functions 
        of  the edit phase!   We're not done,  of course,  but you've got 
        enough  now to define a "pretty" screen.   I'd suggest  you  play 
        with  the  edit  phase for a little while,  and then  clear  your 
        screen  and try to define a screen that might have  applicability 
        to some application or another.  Leave room for some "fields" for 
        input and/or output.   Put on headings, etc., and if you want the 
        field  to  have an "initial display" fill in the  initial  value.  
        When you've completed that exercise, proceed to the next section.






























        Basic Operation                 11





        Screen Design Aid - Version 3.0


        ESAVING A SCREENF

             We'll assume you're still in "edit" phase,  and the  current 
        screen is displayed.  Depress the F10 key, and return to the main 
        menu.   Function  3  permits saving the screen you just  created.  
        Depressing  that key will reward you with a prompt screen  and  a 
        request for a file name.   

             I'll  assume  you're familiar with DOS file names,  and  DOS 
        file  name  conventions.    Your  response  to  the  prompt   may 
        (optional) include a drive specifier (ie:  B:),  and must include 
        the  "name"  portion of a file name.   It should NOT include  the 
        "type".   If it does, the type will be ignored.  Entering a name, 
        and depressing the "enter" key will result in some disk  activity 
        and then,  normally,  a return to the main menu.  If you happened 
        to  pick  a  name that already exists on the drive  you  selected 
        (default or specification), you'll get another prompt which warns 
        you that this case exists,  and asks permission to proceed.   You 
        can respond "Y",  in which case the old file is deleted,  or "N", 
        which  will  put back to the original prompt,  and  you  can  try 
        another  name.   "Esc" takes you totally out of the "save"  mode, 
        and back to the main menu.  

             Having made it back to the main menu,  try choice 8!  Yes, I 
        know that takes you out of SDA, but there's madness in my method, 
        or  some  such stuff.   Note that you'll get the usual  "Are  you 
        sure?"  prompt,  to keep from accidentally exiting and  losing  a 
        file you've worked awhile on.   This time, tell it "Y", and we'll 
        go back to DOS.  Enter the DOS command for the drive you've saved 
        to:

                  DIR [drive:] savename.*

        You  should see two files listed,  one with the type .IMG and the 
        other with the type .INC.   Note the size of the .IMG file.  This 
        is the amount of memory your screen will take when included in an 
        application.   If you didn't "fill" the screen with garbage,  I'm 
        sure  you'll  find the size is substantially less than  the  4000 
        bytes  required to store a screen image.   This file is a  binary 
        file,  and is not directly "viewable".   It is, incidentally, the 
        file the SDA will work with if we do any additional work on  this 
        screen.  

             The  .INC  file,  on  the other hand,  may be  displayed  by 
        entering the TYPE command:

                  TYPE  [drive:]savename.INC

        What  you're seeing going whipping by is a set of data  constants 
        in a source format acceptable to the Assembler.   We'll talk more 
        about  this form in the section discussing interface to  applica-
        tions.   Another  section discusses the content of these files in 
        some detail, but we'll wait for that section.




        Saving a Screen                 12





        Screen Design Aid - Version 3.0


             This exercise was simply to demonstrate that when you "save" 
        a screen,  you're creating two files, both of which have use, and 
        to demonstrate that a significant compression occurs.   One point 
        to  remember.   With the .IMG file,  we can always re-create  the 
        ???.INC file,  but the reverse is NOT true.  The .IMG file is the 
        one SDA works with, while the .INC file is a "spin off" for other 
        purposes.  

             Now,  fire  up SDA again,  and we'll continue with the  next 
        section.















































        Saving a Screen                 13





        Screen Design Aid - Version 3.0


        ELOADING AN EXISTING SCREENF

             Assuming we're at the main menu,  glance at option 2.   That 
        seems to be the one we're ready for,  so enter a 2.  Up comes the 
        usual  prompt  menu,  this time asking for the name of  the  file 
        containing  the  screen to edit.   Enter the name you saved  your 
        screen under.   Just as in saving the screen, the drive specifier 
        is optional,  and the type is ignored.   The utility will load  a 
        file  of the name you provided,  with a type of  .IMG.   Assuming 
        nothing "glitched",  there will be some brief disk activity,  and 
        then  you'll flash back to the main menu.   In the event you made 
        an  error on the name,  a "not found" prompt will appear and  you 
        can try again.   As in save,  the "Esc" will take you back to the 
        main menu without executing the load function.  

             Now,  enter a "1",  and confirm that your screen is back  on 
        display.   You  could  make "corrections" or extensions  at  this 
        point,  if  needed,  and then save the screen again.   This time, 
        we're just demonstrating that what you had,  you still have.  Hit 
        F10,  and we'll go back to the main menu.   We're about ready for 
        option "4" -- field definition or maintenance,  so let's  proceed 
        to the next section.



































        Loading An Existing Screen      14 





        Screen Design Aid - Version 3.0


        EFIELD DEFINITION/MAINTENANCEF

             From the main menu, enter "4", and you'll be rewarded by yet 
        another screen.  This one has a blank column on the left and some 
        text  on  the right.   The text will be repeated and expanded  in 
        this section,  so you don't have to read it now.  Note that there 
        are  a  "list" of active function keys shown in the body  of  the 
        text.

             Before getting into the "mechanics" of definition of fields, 
        let's talk first about what is a field, and what use are they?

             First,  a  field  is  any  contiguous  string  of  character 
        positions,  all  of which must be within the same  display  line.  
        The content of the positions does not effect this definition.

             Second,  under  SDA,  a field may have its own "attributes", 
        which may differ from that assigned in the original definition of 
        the screen itself.   For example, lets assume that row 2, columns 
        10  to  20  on the screen contain the first  20  letters  of  the 
        alphabet,  normal attribute.   We could define a field containing 
        any  or  all  of  those  characters,   or  extending  beyond  the 
        characters,  and  the  field could be given the "high  intensity" 
        attribute.  Gee isn't that nice... so what?        

             Well,  when the screen is displayed the 20 letters would  be 
        displayed  at normal intensity,  however the first I/O  operation 
        against  that  field  would cause the result of that  I/O  to  be 
        displayed  at high intensity!   Works nice when you want to  high 
        light a user's response against the "static" screen body.  

             This  is  probably  a great place to talk about  this  vague 
        thing called I/O.   As you read in the introduction,  we  provide 
        support for:  output to a field,  input from a field,  a combined 
        output followed by input,  the clear of a field,  and the ability 
        to  position  the cursor to a field.   Let's take them one  at  a 
        time,  and in a bit more detail.  Don't worry about how we invoke 
        the function,  yet.   This is what the function does, when you do 
        invoke it.  

        EOutput to a fieldF -

             This  function permits output of a character string  to  the 
        specified field.  The attributes of the displayed literal will be 
        the attbributes of the field.   The string may be terminated by a 
        null.  Output of the string will continue until one of two condi-
        tions  is met.   Either the "end of string" (nul) is  encountered 
        before  the  end  of field,  or the end of field  is  encountered 
        first.   In the former case, the balance of the field will be set 
        to blank,  with the attributes of the field.   In either case the 
        cursor  will be positioned to the "end of  field"  position,  and 
        remains there on return to the caller.





        Field Definition/Maintenance    15





        Screen Design Aid - Version 3.0


        EInput from a fieldF -

             Similar to output,  this service will position the cursor to 
        the  start of a defined field,  and wait for input.   As input is 
        keyed  to the field,  it will be displayed,  with  the  attribute 
        assigned  to  the field.   Since this function returns the  input 
        string to a user defined  buffer, it is the user's responsibility 
        to  assure  that the buffer is at least as long  as  the  defined 
        field.   The  input operation is terminated by any of the follow-
        ing:  "enter" key, "Esc" key, "Tab right", "Tab left".  Feed back 
        information is provided in the return to indicate which  termina-
        tor occured,  and to provide the length of the valid string (zero 
        is valid).  The input operation will NOT be terminated by exceed-
        ing  the field length.   Rather if such an attempt is  made,  the 
        "beep"  signal from the console will be invoked,  and the current 
        data character not accepted.  Only a terminator or a backspace is 
        acceptable at end of field.  The backspace may be used to correct 
        keying errors.

             This  function includes one additional  option.   The  input 
        operation   may  be  "destructive"  or   "non-destructive".    In 
        "destruct" mode, initiation of the input operation will clear the 
        defined  field  to blanks with the  appropriate  attribute.   The 
        "non" mode leaves the existing display unchanged, except for data 
        keyed  in  by the user.   This permits display of  the  "default" 
        value for a field.   Note that this "default" must be established 
        by  software,  since  if the user makes an  immediate  terminator 
        response (no data entry),  the feed back will provide a length of 
        zero, and an indication of the terminator used.  

        EOut/In functionF -

             This  is  simply  a  single  call  combining  the  functions 
        described in the previous paragraphs.  It is useful when you wish 
        to  display  "existing"  data and  allow  overwrite.   The  Input 
        portion  of  this  operation is always in  the  "non-destructive" 
        mode.

        EField clearF -

             Clears  the  defined  field to  blanks  with  the  attribute 
        defined for the field.  Cursor is left at START of field.

        EPosition CursorF - 

             Positions  cursor  to  START of a  defined  field.   Current 
        display is not changed, nor is field content.  

        Having learned what you can do with fields, now we're in a better 
        position  to define some.   Refer back to the screen.   The  keys 
        displayed  as  "active"  are  also covered on  a  "help"  screen.  
        Depressing F9 will display that screen,  and as before, returning 
        to the field maintenance screen from "help" is simply the  matter 
        of depressing any key.



        Field Definition/Maintenance    16





        Screen Design Aid - Version 3.0


             Key  assignments  are  as  consistent  as  possible  between 
        functions.  You'll note that F9 is still "help", F8 is clear (the 
        field table ONLY, this time), and F10 returns to the main menu.
        Keys F5 through F7 are not used at this point in this phase.   To 
        better  demonstrate the remaining keys,  press F3 (Add to end  of 
        field list) and watch your current screen appear.

             This  is  not the "edit" screen,  although it has  the  same 
        appearance.   We'll come back to the various options available on 
        this  screen,  but for right now,  simply move the cursor to  the 
        start of a likely field and depress F1.  Note that an "*" appears 
        on  the prompt line.   This is a flag to indicate you're half way 
        through the process of defining a field.   Now move the cursor to 
        the other end of the field, and again depress F1. 

             Flash!  Back to the original field maintenance  screen,  but 
        now  you'll  see one entry in the previously blank column on  the 
        left.   As the column headings indicate, the data displayed (from 
        left to right), is the field number, row (0-24), column (0-screen 
        width), length, and attributes of the field.  

             To  give  us something to work with,  press  F3  and  define 
        another field, repeating the above process.  Do this two or three 
        times,  until you have defined three or four fields,  ending with 
        the  field table display.   As you go through this process you'll 
        note  that  the list of fields continues to  extend  towards  the 
        bottom  of the display.   You'll also note that the last entry in 
        the  list is high lighted.   You've also noticed some changes  on 
        the field definition screen,  but we'll delay discussion of those 
        for a few moments.  

             Two of the numeric keypad arrow keys are active.  The up and 
        down  arrows  (only).   Try pressing the "up"  arrow.   The  high 
        lighted entry moved "up" the list.  The down arrow moves the high 
        lighted  entry  down,  of course.   The indicated  entry  is  the 
        currently "active" entry.  Note the content of the list, position 
        the  active  entry somewhere in the list (not at  the  end),  and 
        depress  F1 (insert field before active entry).   You'll get back 
        to  the definition screen,  so use F1 twice (this time to  define 
        another  field),  and  when you return to the active  field  list 
        you'll find that the field you just defined has been inserted  in 
        the list immediately before the field you selected.

             Depressing F2 will delete the currently active field,  while 
        F4  allows you to redefine it.   As we mentioned  previously,  F8 
        will  clear  the  entire field table (complete with an  "are  you 
        sure" prompt), while F10 will return you to the main menu, and is 
        used  after you have completed field  definition.   Incidentally, 
        you may enter field definition,  define a few fields,  return  to 
        the  edit  phase,  modify the screen,  and then return  to  field 
        defintion  to  find your original definitions as you  left  them.  
        Note  that  if the change in the edited screen throws your fields 
        out of alinement,  its your problem to fix them.   There's no tie 
        back   between  the  edit  screen  phase  and  the  field   table 
        maintenance phase.  


        Field Definition/Maintenance    17





        Screen Design Aid - Version 3.0



             Two points,  before we discuss the field definition  screen.  
        The  number of fields that may be defined for a screen may be any 
        number between zero (valid),  and 100.   As you exceed the number 
        of fields that can be displayed (20),  the list simply grows  off 
        the  top or bottom of the screen.   If you're positioned at field 
        30  and  want to see field 3,  simply move the  currently  active 
        field to the top of the displayed list (using the up arrow),  and 
        continue  to depress the up arrow.   You'll see the  list  scroll 
        down until field 1 is displayed.  Similarily, if the field is off 
        the display "at the bottom", use the down arrow until you see the 
        field you've selected.  

             Now on to the field definition screen.   Again, there's a F9 
        "help"  screen.   If you use one of the field definition keys (F1 
        F3 or F4) to get back to the definition screen,  you can bring up 
        the "help" screen, and follow it through this brief discussion.  

             At first glance, this "help" menu appears almost the same as 
        the  edit  "help" screen,  but closer examination  will  indicate 
        differences.   F1  is  now the "define field"  key  (rather  than 
        toggle  graphics mode,  which isn't applicable now).   F2 is  not 
        active.   F3  through F7 have the same functions as they did  for 
        edit,  but F8 is not active.   F9 is still the "help" key,  while 
        F10   simply  returns  you  to  the  maintenance  screen  without 
        definition of a field.   "Home" is not active,  nor are "Del"  or 
        "Ins".   "PgUp" and "PgDn" are,  and allow shifting the screen as 
        in  edit,  when you wish to define a field on the bottom line  of 
        the  screen.   The cursor positioning keys work the same as edit, 
        of course.   Not much "new" here,  so hit any key to get back  to 
        the definition screen.

             Since you've defined several fields, you'll notice the "half 
        tone"  areas demarking the location of the fields.   These  areas 
        have  "clobbered" any data you might have included in the  screen 
        at that point.   Not to worry...  the data is still there, but we 
        need to show two things in the same space and the display devices 
        won't  cooperate  to that extent.   A "standard" practice  is  to 
        enter the "default" value on the original screen, and then define 
        a field over the top of it.   By using the input function in non-
        destructive  mode,  you can display the default,  but permit  the 
        user to key over the top when he wants to change the default.  

             As  we've said several times,  the field has an attribute of 
        its  own.   You'll see it show up in the field table,  and  there 
        will  be  some  change in the "half tone" display  when  you  use 
        different attributes.  Try defining a field with "high intensity" 
        for an example.  

             That's   all  for  field  definition.    I've   deliberately 
        "skipped" any discussion of F7 in field definition  phase,  since 
        that's  only  used  under  "Color" mode and  is  discussed  in  a 
        separate section.   When you've experimented as much as you like, 
        return to the main menu (F10).



        Field Definition/Maintenance    18





        Screen Design Aid - Version 3.0


        EPRINTING SCREENSF

             This  time,  don't  start poking keys till you've read  this 
        paragraph.   If  you  do not have the EPSON MX80  4with  GRAFTRAX 
        plus5,  or a "bit level" equivalent device,  the only reason  for 
        reading  this  section  is to learn what  you're  missing!   This 
        function will only work using such a device.   You're welcome  to 
        try  it on your printer,  but I'll tell you now that the  results 
        will not be usable.

             For  those  with the "goodies" options,  this  section  will 
        continue.   Assuming  you've left the screen you created  in  the 
        utility (if not,  you can reload it using the 2 option),  depress 
        the  5  key and hit "enter".   You'll be rewarded by yet  another 
        menu,  which asks for a "caption".   Key in any string (up to  40 
        characters)  you  might like to use as a caption for the  screen.  
        If  you  don't want a caption,  try keying one  blank,  and  then 
        "enter".   No data at all will behave similar to the "Esc", which 
        will "take you out" with out printing the screen.

             So  the  printer  "fires  up" and  you  start  printing  the 
        screen...  very  slowly!   If you become fascinated with  printer 
        head  motion,  and watch it,  you'll notice that it behaves in  a 
        very  unusual manner.   Sweeps part  way,  hesitates,  backs  up, 
        resweeps,  etc.,  etc.  Don't worry about it, since that's normal 
        behavior  when printing a mix of "dot graphics" and  text.   This 
        whole behavior pattern (together with the low speed) is caused by 
        the  requirement  to  print characters the printer  doesn't  have 
        "built in".   Under this utility,  however,  the printer can  and 
        will  print any character you've included on your display  screen 
        (or at least a reasonable facsimile, thereof).      

             When  the  screen finally completes,  your caption  will  be 
        added,  centered  in  the  second line below  the  screen.   That 
        completes  the  "functioning" of this  option,  however  for  the 
        "mechanics" of this operation, we'll include a few other words.

             Paper  alignment  (prior to starting the utility) should  be 
        with  the  perfs positioned at the top of  the  bail.   Sorry  if 
        you've  adopted a different "standard" position.   Seems to be at 
        least  two  used in practice.   Printing is  done  in  compressed 
        print,  eight lines/inch.  This gives something that approximates 
        screen  representation.   Don't worry about your printer  control 
        load, however.  The utility restores the printer to normal print, 
        six lines/inch when it ends.  Similarily, it keeps track of forms 
        position,  and will restore to top of form when the utility ends, 
        so DON'T REPOSITION THE PAPER after printing a screen.  

             The  format  is such that two screens will be printed  on  a 
        single  11"  sheet,  or if you use the next option  (print  field 
        table), a screen and its field table will usually be printed on a 
        single sheet (if you have less than 75 fields, that is).  





        Printing Screns                 19





        Screen Design Aid - Version 3.0


        EPRINT FIELD TABLEF

             Option  6  permits  printing the field  table.   This  one's 
        requirements are not as stringent,  and will work on any  printer 
        capable  of handling 132 column print.   Again,  its designed for 
        the EPSON,  and you could find some "funny" characters showing up 
        at the start of print on other printers.   Again, the first thing 
        you  see is a menu requesting a "caption".   "Esc" will take  you 
        out without printing,  while a "caption" of any string (at  least 
        one character, which may be blank) of up to 40 characters will be 
        accepted.  

             A print out of the current field table results.   The format 
        is a three column layout, with headers.  The only thing "cryptic" 
        is  the last columns of the attributes,  which contain "F:xxxxxx" 
        and "B:xxxxxx".   These are "colors" and become meaningful in the 
        section  discussing  "Color".   When print  is  complete,  you're 
        returned to the main menu.   If you're using this option but  not 
        the screen print, better read the screen print option for details 
        of paper handling, alignment, etc.  





































        Print Field Table               20





        Screen Design Aid - Version 3.0


        ECHANGING DISPLAY DEVICEF

             Two groups of users will be interested in this section.  For 
        those afluent types that have both the Monochrome Display and the 
        Color/Graphics  board,   read  on.    For  those  with  only  the 
        color/graphics board, and a monitor that will operate effectively 
        in either 80 or 40 character line width,  read on.   For the user 
        who  has  only  the Monochrome display,  or who does not  have  a 
        monitor  that will work in 80 character mode,  you might as  well 
        skip  this section.   But since you won't,  you can read and  see 
        what you're missing.  

             WARNING:   ANY "CURRENT" SCREEN AND FIELD TABLE WILL BE LOST 
        WHEN THIS FUNCTION IS INVOKED.   IF YOU HAVE A SCREEN AND WANT TO 
        KEEP IT, DO A "SAVE" BEFORE USING THIS FACILITY.

             Before poking keys,  be sure your hardware configuration  is 
        "ready".   For example,  if you're running on the monochrome, but 
        have the color graphics adapter and a monitor driven by it,  turn 
        the  monitor on.   Now,  enter "7",  and on your current  display 
        device  you'll see yet another menu.   This one says what  device 
        you're  currently on (Monochrome or Color/graphics),  and asks if 
        you want to switch.   A "y" response is called for,  so enter it, 
        and  then  look at the next response.   This one says  what  your 
        current  line  width is,  and asks if you want to change  to  the 
        other supported length (80-40).   Make the appropriate  response, 
        and  the  display  will be refreshed with the  configuration  you 
        requested, but you'll still be asked to confirm by responding "Y" 
        to the last prompt.   When you give this last "Y", you'll see the 
        display  switch to the other display monitor (if you  have  two), 
        and/or the line width change to the requested width.   And you'll 
        be back to the main menu.

             I won't include it here, but you'll be interested in reading 
        the  section on "40 Character screens on 80  character  terminals 
        and Visa Versa" included later in this document.





















        Changing Display Device         21





        Screen Design Aid - Version 3.0


        ECOLORF

             If  you have the Color/graphics display board,  and a  color 
        display,  this section will interest you.   Before getting in  to 
        the  discussion,  a couple of "disclaimers".   First,  the  color 
        names used are those in the "book".   I've already found that the 
        actual  color  displayed varies widely with the type  of  display 
        device.  The only "solution" is "try it and see", and then do the 
        mental  conversion  necessary to match the color names  with  the 
        color shown on the display.   Second,  unless you have a true RGB 
        monitor,  using 80 character line width is likely to be a joke -- 
        but  not too funny.   Readability is likely to be totally lost on 
        most composite monitors.  

             Its probably a good place to mention that assigning  "color" 
        to  the  attribute  typically has "no effect" on  the  Monochrome 
        display.   The  one  exception is  that  requesting  "underscore" 
        attribute or the color "blue" has the same effect.  

             With that introduction, get to the "edit" screen (option "1" 
        on  the main menu),  and depress F7.   This will produce  another 
        menu which simply asks for the "foreground" color you wish to use 
        at this point in time.   Entering the initial letter of the color 
        (X  for  black)  and depressing the "enter" key  will  cause  the 
        display  to change to a request for the "background"  color.   In 
        either  case,  an  "enter" without data simply leaves  the  color 
        currently assigned,  still in effect.  After your response to the 
        "background" prompt, you'll be returned to the "edit" screen.  

             Assuming you're on a color display, you can play around with 
        various  combinations.   The color can be changed for  each  data 
        character  entry,  if  you like rainbows,  or it can be  left  in 
        effect  for  the entire screen.   The attribute  assignment  keys 
        still  work as they did,  with two exceptions.   Underscore  will 
        force  a  foreground  color of "Blue",  and will not  produce  an 
        underscore.  Normal/Reverse Video now has the effect of "swaping" 
        the foreground and background colors.  

             This  key  has  a similar use  in  field  definition  phase, 
        permiting  assignment  of "color" to field attributes  associated 
        with  the  defined  fields of the display.   Its  use  should  be 
        obvious, so we'll wave at a detailed review of the screen.  















        Color                           22 





        Screen Design Aid - Version 3.0


        E40 CHARACTER SCREENS TO 80 CHARACTER DISPLAYS
        E(AND VISA VERSA)F

             This topic gets a bit complicated.   If you normally operate 
        using a single display width, you can safely ignore this section.  
        On the other hand,  if you want your application to be capable of 
        running on most configurations, you'll probably need this data.

             First, screens are "saved" in either 40 or 80 character line 
        width.   The mode of the "save" is determined totally by the mode 
        you're running in at the time of the "save".  If you're operating 
        on  an 80 character display,  you can't save in 40 width and visa 
        versa.   So  to  control the width of "saved"  screen,  you  must 
        control the width of the mode you're operating under.  

             Second, the display generation code (used in the utility and 
        included for your use with applications) will attempt to  display 
        a  screen  irregardless of the mode of the display its  outputing 
        to.   It  does this by either expanding or truncating the  screen 
        when  the  screen  mode doesn't  match  the  display  mode.   For 
        example,  if you're trying to display a 40 character screen on an 
        80 character terminal,  it simply "centers" the image,  providing 
        20 blanks of padding on either side of the image.  

             Displaying  an 80 character screen on a 40 character display 
        is  not  as satisfactory.   The only thing the display  code  can 
        rationally do is to truncate the image,  and that's what it does.  
        It  displays  the first 40 columns of  each  line,  dropping  the 
        remainder.

             What's the effect of all this?  Assuming you wish to use the 
        screens  on any device,  your preferred mode of operation will be 
        in 40 character line mode.   Do the edit, field assignment, etc., 
        and  then  "save".   The resultant screen can be used  on  either 
        Monochrome  or  color/graphics adapters,  and will be  usable  in 
        either  40  or  80  character  line  mode.    It  also,   not too 
        incidentally,  will make a smaller compressed image,  so it saves 
        both disk and memory space.

             If you have to work on an 80 character device,  then its all 
        up to you.   If you build your screen in the first 40 columns  of 
        the  edit  screen (and stay totally within those  columns),  then 
        when  that screen is saved,  it can be displayed on a  40  column 
        device, since the 40 unused columns will simply be discarded.  It 
        includes the penalty of a slightly larger "compressed" image than 
        that described for the same screen in 40 column mode.

             This  utility is a good example of the 40 column mode.   All 
        of the screens used were formed under that option,  and therefore 
        may  be displayed on either 40 or 80 column  devices,  in  either 
        color  or black and white.   I won't claim the "art work" is good 
        nor will I boast about the choice of colors...  I'm a hacker, not 
        a painter... but it does demonstrate the flexibility of SDA. 




        Line Lengths                    23





        Screen Design Aid - Version 3.0


        EAPPLICATION INTERFACEF  

             Use  of  screens  produced by SDA may be  made  by  Assembly 
        Language  programs.   The  next section discusses "bridges"  that 
        permit  use  of the screens by "high  level"  languages.   It  is 
        suggested  that even if your interest is "high level",  that  you 
        read this section.   It contains information you will need if you 
        attempt to "bridge" to a language other than BASIC.

             Assembly  usage is very easy.   Just use the macros provided 
        in the file $FIELD.MAC.  The macros are well commented, but we'll 
        cover  them,  and  the  code  sequences  generated  here,  as  an 
        introduction to the "bridges" of the next section.

             In all cases,  a "command code" which indicates the function 
        desired,  is provided in the AH register.   In all cases but one, 
        the  field number is given in the AL  register.   Other  register 
        usage is specified where appropriate.   In all cases the register 
        status,  with the exception of the AX register,  is preserved and 
        restored  before  return to the calling program.   In the  single 
        case that "feed back" is provided,  that data is contained in the 
        AX register.

             To display a screen:

                  $FDISP          screen-image        

                    or

                  XOR       AH,AH
                  MOV       DX,OFFSET screen-image
                  CALL      $SDA

             To output to a field:

                  $FDOUT    field-number,character string
                  
                    or

                  MOV       AH,1
                  MOV       AL,field-number
                  MOV       DX,OFFSET character-string
                  CALL      $SDA

        where  character-string  is any string terminated by a zero  byte 
        (nul).   Output  will  cause the string to be  displayed  in  the 
        output field, and the cursor left at end of field.  If the string 
        is  shorter  than  the field,  the balance of the field  will  be 
        cleared to blank.   If the string is longer than the  field,  the 
        string  will  be  truncated  to  field  length.   Note  that  the 
        attribute of the displayed data is that defined for the field.  






        Application Interface           24





        Screen Design Aid - Version 3.0


             To input from a field:

                  $FDINP    field number,buffer,[flag]

                     or

                  MOV       AH,2
                  MOV       AL,field number  or  field number+80H
                  MOV       SI,OFFSET buffer
                  CALL      $SDA

        where "buffer" is any work buffer for return of the input string.  
        It  is YOUR responsibility that the buffer is at least as long as 
        the  defined  field.   The "flag" in the macro is  any  non-blank 
        string,  which will cause the expansion to "add 80H" to the value 
        in  AL.   This  "+80H" indicates that a  "non-destructive"  input 
        operation is desired.  Input may be either "destructive" or "non-
        destructive".  Destructive clears the field to be blanks with the 
        field's attributes,  while "non-destructive" simply positions the 
        cursor to the start of the field.   In either case,  input  waits 
        for  keyed  data.   If  data is entered and  the  last  character 
        position  of the field is filled,  a "beep" signal is given  when 
        any  additional character entry is attempted.   A terminator or a 
        "backspace" are the only acceptable characters when positioned at 
        end of field.  When "entry termination" is sensed, return is made 
        to the caller, with the following "feed back" information.

             The  input  string will be in the  "buffer"  provided.   The 
        length of the returned data will be contained in the AL  register 
        (zero length is valid), while the AH will contain data indicating 
        the type of termination that occured.  The AH contents may be:

                  AH = 0    Normal return ("enter" key)
                  AH = 1    Right tab
                  AH = 2    Left tab
                  AH = 4    "Esc" key
                  AH = 8    Scan code terminator

        In  all but the first case above,  the carry flag will be set  on 
        return.   The  scan  code  terminator is  a  special  case.   The 
        hardware  produces  two characters for special  keys.   First,  a 
        "nul"  character,  and then typically the scan code of  the  key.  
        When  this condition is sensed,  the "nul" is discarded,  and the 
        second  character  is moved to the buffer,  and the  80H  bit  is 
        turned  on in that character.   Finally the carry and the AH code 
        are set, and return is made.  

             You'll note that this is set up for rapid "field advance" by 
        using, and sensing, the use of the tab keys.








        Application Interface           25





        Screen Design Aid - Version 3.0


             To perform output followed by input in a single call, use:

                  $FDOIN    field-number,output-string,buffer

                    or

                  MOV       AH,3
                  MOV       AL,field-number+80H
                  MOV       DX,OFFSET output-string
                  MOV       SI,OFFSET buffer
                  CALL      $SDA

        which  is  simply  a  combination  of  the  previously  discussed 
        functions.   Feed  back  is  the same as  that  in  the  previous 
        function.   Note that "non-destructive" mode is automatic in this 
        option, when using the macro.

             To  clear a field,  or to position the cursor to a field are 
        almost identical:

                  $FDCLR    field-number  or  $FDPOS   field-number

                    or

                  MOV       AH,4 (clear)  or  MOV    AH,5  (position)
                  MOV       AL,field-number
                  CALL      $SDA

        These simple primitives are all that have been defined,  current-
        ly,  for  use of the screens.   They seem to be all that are  re-
        quired,  and provide the basic building blocks for management  of 
        complex screens.

























        Application Interface           26





        Screen Design Aid - Version 3.0


        EHIGH LEVEL LANGUAGEF          

             Since essentially all high level languages support some form 
        of a "call" interface,  building a "bridge" to permit utilization 
        of  screens from high level code appears straight  forward.   The 
        program BASSCR is included with this distribution,  and is such a 
        bridge for compiled BASIC.  It performs correctly with either the 
        "run time execution library" or the "stand alone" products of the 
        compiler.   A listing of the source form of this program would be 
        helpful in following the discussion given.

             Interface and parameter passing is usually performed through 
        the "stack".   BASIC,  at least,  only insists that the SS and SP 
        registers  be reset to the entry value,  before returning to  the 
        calling BASIC modules.  Those two registers are saved immediately 
        on  entry.   Note  that the MOV instruction uses the  CS  segment 
        register,  rather  than the normal DS.   Both DS and ES registers 
        point to the BASIC data area on entry.   The BP register is  then 
        set to the value of the entry SP, and used to access the stack.  

             The  "call" interface defined for this bridge expects  three 
        parameters: the first two are integers while the last is a string 
        variable.   The  convention  is  that the first  integer  is  the 
        command  type,  while  the  second  is the  field  number  (where 
        applicable).   The arguments are passed as pointers to  arguments 
        in the stack,  with the first argument at the "top".  You'll note 
        that  the  stack  offset for the first argument is 8  (number  of 
        arguments  plus 1 times 2).   Getting this pointer into an  index 
        register  and then using the index to get the integer  is  direct 
        code.  Since  we  are  only  interested in the low  byte  of  the 
        integers,  the  required byte is saved temporarily,  and the  2nd 
        argument  loaded using the same technique (offset  6).   The  two 
        arguments are then returned to the AH and AL register, since they 
        are the command type and field number, respectively.

             The  third argument is an optional string pointer,  so after 
        establishing the address to the pointer,  that address is  simply 
        "saved" (SAVSI).  Unfortunately, establishing the requirement for 
        the string pointer requires "decode" of the command type, so that 
        function  is next performed.   As an aside,  note that the use of 
        the segment registers is such that the BASIC data segment is used 
        for  access to the pointers,  while the segment register set  for 
        this code is used for "saves".  

             Decode  of  the type then permits  establishing  the  proper 
        string relationships for the various call types.   The "combined" 
        output/input operation is not supported in this code, although it 
        could readily be supported by a single simple change.  Because of 
        the  segment  addressability  problem,  and the need to  place  a 
        terminating  "nul" on output strings,  all string operations  are 
        mapped through an internal buffer in this code.   The code  which 
        handles  this mapping and segment register manipulation is direct 
        and straight forward, so no further explanation is given here.




        High Level Language             27





        Screen Design Aid - Version 3.0


             One point is important.  BASIC provides a very limited stack 
        when calling a user application.  This stack must handle not only 
        the  bridge code,  but must also handle $SDA.   $SDA is a  "stack 
        hog", and requires at least 106 bytes of stack area.  This forces 
        reassignment of the SS and SP registers before calling $SDA,  and 
        the inclusion of a stack area in the bridge.  

             You'll  note that even though considerable  manipulation  of 
        registers  has  been made,  the only requirement for  "clean  up" 
        before  return is the restoration of the SS and SP registers.   A 
        FAR return is required with an argument of 2 times the number  of 
        passed parameters.  

             For  the "sharp eyed",  yes there is a call to BIOS  turning 
        "on"  the  cursor.    In  writing  this  bridge,   I  found  some 
        interesting behavior patterns coming out of BASIC.  It apparently 
        does  not  follow the DOS/BIOS interfaces for screen  management.  
        Not  only did I "lose" the cursor on return from this  code,  but 
        BASIC ignored the cursor position established by SDA,  when doing 
        I/O on its own.  Originally, I had hoped that simply using SDA to 
        display  the screen,  and to position the cursor,  would be  ade-
        quate.  This would eliminate the cumbersome LOCATE code sequences 
        of  BASIC,  but would permit use of the I/O statements  directly.  
        Unfortunately,  that won't work!!   So, use the I/O facilities of 
        SDA when working with screens.  

             How do you put the whole mess together?   Well,  first embed 
        the  .INC  file  into  an  assembler  program  that  should  look 
        something like this:

             CODE     SEGMENT PARA PUBLIC 'CODE'
                      ASSUME    CS:CODE,DS:CODE
             ;
                      PUBLIC    BASMEN
             ;
             BASMEN   EQU       $
                  (Include the .INC file here)
             ;
             CODE     ENDS
             ;
                      END

        Now assemble this thing.  You have on the distribution diskette a 
        module  named BASSCR.OBJ.   Write your BASIC program (or look  at 
        the  program named DEMO on the distribution diskette),  and  then 
        run Link.   When Link requests "object" module names, give it the 
        string:  your-module+BASSCR+BASMEN+$SDA.  Obviously, these object 
        modules  must all be on the "signed on" drive,  and the remainder 
        of  the link parameters are standard responses as for  any  other 
        BASIC  compilation.   The  result is a program that will use  SDA 
        generated screens.  

             I'm  sure this is enough information to guide you in writing 
        your own "bridges" what ever language you prefer.   I started  to 
        build  primitive  bridges  for  additional  languages,   but  its 


        High Level Language             28





        Screen Design Aid - Version 3.0


        difficult  to anticipate the potential use,  and that use  should 
        effect the form of the "call" interface.   Frankly,  I also  felt 
        that  I  really  didn't want to have to dig through  all  of  the 
        "nits"  in other languages...   I'm an Assembler bigot,  so happy 
        bridge building...




















































        High Level Language             29





        Screen Design Aid - Version 3.0


        ETECHNICAL REFERENCEF

             For  those  of you who have a burning desire  for  a  deeper 
        understanding  of  this  whole mess,  I've  included  this  brief 
        section  on  the compressed screen and include files produced  by 
        this process.   You really don't need this information for use of 
        the  utility,  so  if your curiosity bump is not  itching  badly, 
        don't bother reading this section.

             First,   the   .IMG   and  .INC  files   contain   identical 
        information, in an obviously different format.  All the .INC file 
        is,  is  an "external" representation of the  binary  information 
        contained in the .IMG file.   Its converted to "external" so that 
        it  can  be handed to the assembler,  who then converts  it  back 
        again into its binary form,  but now it has the nice attribute of 
        being an .OBJ file which can be linked with your code.

             So  what does the .IMG file contain?   It divides  into  two 
        sections:   The field table, and the compressed image.  Beginning 
        with the first word, its content is:

             First  word  contains a count of the defined fields in  this 
        screen.   Immediately  following  the first word is a  series  of 
        repeating entries, each four bytes in length, one for each field.  
        An  entry contains in the first byte the row of the start of  the 
        field,  in the second byte, the column of the start of the field.  
        The third byte contains the length of the field, while the fourth 
        contains  the  attribute  of  the  field  (as  defined  in  IBM's 
        technical reference manual).  

             Immediately  following  the field table  is  the  compressed 
        image.   The  first word of the image is a "length" of the image, 
        including  the  length word.   Following this length  word  is  a 
        string  of  slightly  more complex  structure.   This  string  is 
        composed  of  three  types  of  "sub-strings".   Sub-strings  are 
        identified by their first byte.   If the byte is 0FFH,  then this 
        is  an attribute sub-string,  and the next byte is the  attribute 
        that  is  to  be used until next encountering an  attribute  sub-
        string.  Screens typically start with an attribute sub-string.

             If the byte is 00H,  then this is a repeating character sub-
        string.  The next byte is the number of times the character is to 
        be repeated (max of 255), and the following byte is the character 
        to be repeated.  

             Any other byte configuration (other than FFH or 00H),  is  a 
        data sub-string which is a single byte.   Its simply data that is 
        to be placed on the screen.  

             I'm sure with this,  the basic loop is  apparent.   Starting 
        with  the upper left corner of the screen,  and the start of  the 
        string,  simply  decode  the sub-strings and store the  resultant 
        data  characters and the current attribute.   When the string  is 
        exhausted,  you're  at the end of the regen buffer,  since  every 
        byte  in the original screen is represented.   One  minor  point.  


        Technical Reference             30





        Screen Design Aid - Version 3.0


        Since  a  "compressed"  string requires  three  bytes,  repeating 
        characters  must  repeat more than three times  before  they  are 
        "compressed"  into  a repeating character  substring.   Three  or 
        less, they simply are placed in the string without compression.

             I  won't  dwell  on making 40 character screens work  on  80 
        character displays,  (and visa versa) but that is simply a matter 
        of  "reformatting"  the regen buffers  after  expansion.   You've 
        probably noticed an almost subliminal flash of a poorly displayed 
        screen prior to seeing the "steady" image.  This is caused by the 
        "reformatting"  required.   If the "flash"  bothers  you,  simply 
        avoid  using 40 character screens on 80 character  displays.   It 
        won't occur if you match the screen to the display.












































        Technical Reference             31





        Screen Design Aid - Version 3.0


        EERROR MESSAGESF

             The  only "true" error messages issued by this utility  come 
        from diskette I/O error conditions.  All are identified as to the 
        cause  of error and the file involved.   They appear  at  various 
        locations  on the screens,  so I won't attempt to delineate  each 
        message.   If  you  encounter  a "read" error,  I hope  you  were 
        "backed up".   A write error will invariably be because of a lack 
        of space,  either directory or data,  so try again with a "clean" 
        diskette.   You  may "swap" diskettes at any time the utility  is 
        not actually engaged in reading or writing disk, so if you have a 
        problem  writing  one  diskette,  wait till  you  get  the  error 
        message, and then swap diskettes, and try the command again.  

             Because  of the difficulty in testing "error code",  this is 
        probably the "softest" area in the utility.   I've tried to force 
        all error conditions,  but I'm sure I missed a  few.   Typically, 
        these  conditions  will only occur when something is "not  right" 
        with the hardware, so try again after correcting your problem.






































        Error Messages                  32






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0312

     Volume in drive A has no label
     Directory of A:\

    $SDA     OBJ       876   3-01-83  11:02a
    $FIELD   MAC      3487   3-07-83   7:17p
    BASSCR   OBJ      1271   8-26-86   4:18p
    BASSCR   ASM     12494   8-26-86   4:17p
    DEMO     EXE     21120   3-06-83   4:46p
    DEMO     BAS       495   3-06-83   1:40p
    SDA      DOC     81468   3-05-83   5:02p
    BASSCR   DOC      3840   3-07-83  10:45a
    (READ    ME)      1476   8-03-85  12:50p
    FORMS    COM     56480   3-07-85   9:02p
    FORMS    DOC     18944   3-10-85  10:42a
    REGISTER FRM      3456   3-10-85  10:37a
    BUGREPT  FRM      5376   3-09-85   4:03p
    READ     ME        256   3-10-85   9:14p
    FILES312 TXT      1940   1-31-87   4:13p
    IMAGE    DOC      5504   1-26-85  12:33a
    SDA      EXE     26324   4-17-86  12:33p
    BASMEN   OBJ      2648   2-16-85   9:18a
    BONUS    DOC      1498   4-25-86  10:07p
    ANSISCR  EXE      8622   4-20-86   9:49p
           20 file(s)     257575 bytes
                           54272 bytes free
