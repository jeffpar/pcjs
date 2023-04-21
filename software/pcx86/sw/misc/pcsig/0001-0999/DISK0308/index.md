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

## ASC_BIN.ASM

{% raw %}
```
;asc-bin.asm
;converts a string of numbers to a signed 16 bit number
STACK SEGMENT PARA STACK 'STACK'
       DB 64 DUP('STACK ')
STACK ENDS

CODE SEGMENT PARA 'CODE'

ASCII_BIN PROC FAR
          ASSUME CS:CODE,SS:STACK
          PUBLIC ASCII_BIN

       PUSH BX          ;SAVE BX AND CX
       PUSH CX
       SUB  AX,AX       ;TO START, RESULT = 0
       SUB  DX,DX       ;  DECIMAL COUNT = 0
       MOV  DI,0FFH     ;  ASSUME NO BAD CHARACTERS
       CMP  CX,7        ;STRING TOO LONG?
       JA   NO_GOOD     ;IF SO, GO SET CF AND EXIT
       
BLANKS:
       CMP  BYTE PTR [BX],' '   ;SCAN PAST LEADING BLANKS
       JNE  CHK_NEG
       INC  BX
       LOOP BLANKS

CHK_NEG:
       CMP  BYTE PTR [BX],'-'   ;NEGATIVE NUMBER?
       JNE  CHK_POS
       INC  BX                  ;IF SO INCREMENT POINTER
       DEC  CX                  ;   DECREMENT THE COUNT
       CALL CONV_AB             ;   AND CONVERT THE STRING

       JC   THRU
       CMP  AX,32768            ;IS THE NUMBER TOO SMALL?
       JA   NO_GOOD
       NEG  AX                  ;NO. COMPLEMENT THE RESULT
       JS   GOOD

CHK_POS:
       CMP  BYTE PTR [BX],'+'   ;POSITIVE NUMBER?
       JNE  GO_CONV
       INC  BX                  ;IF SO, INCREMENT POINTER
       DEC  CX                  ;   DECREMENT THE COUNT
GO_CONV:
       CALL CONV_AB             ;   AND CONVERT THE STRING

       JC   THRU
       CMP  AX,32767            ;IS THE NUMBER TOO BIG?
       JA   NO_GOOD
GOOD:
       CLC
       JNC  THRU
NO_GOOD:
       STC                      ;IF SO, SET CARRY FLAG
THRU:
       POP  CX                  ;RESTORE REGISTERS
       POP  BX
       RET                      ;EXIT

ASCII_BIN ENDP
;
;   THIS PROCEDURE PERFORMS THE ACTUAL CONVERSION.
;
CONV_AB PROC
       PUSH BP          ;SAVE SCRATCH REGISTERS
       PUSH BX
       PUSH SI

       MOV  BP,BX       ;IS THIS NECESSARY     ******NOT IN BOOK

CHK_PT:
       CMP  DX,0        ;DICIMAL POINT ALREADY FOUND?
       JNZ  RANGE       ;  IF SO, SKIP FOLLOWING CHECK
       CMP  BYTE PTR DS:[BP],'.'   ;DECIMAL POINT
       JNE  RANGE
       DEC  CX          ;IF SO DECREMENT COUNT
       MOV  DX,CX       ;  AND RECOR IT IN DX
       JZ   END_CONV    ;  EXIT IF CX=0
       INC  BP          ;  INCREMENT POINTER

RANGE:
       CMP  BYTE PTR DS:[BP],'0'  ;IF THE CHARACTER IS
       JB   NON_DIG               ;  NOT A DIGIT
       CMP  BYTE PTR DS:[BP],'9'
       JBE  DIGIT

NON_DIG:
       MOV  DI,BP        ;PUT ITS ADDRESS IN DI
       STC               ;SET THE CARRY FLAG,
       JC   END_CONV     ;AND EXIT

DIGIT:
       MOV  SI,10        ;THE CHARACTER IS A DIGIT
       PUSH DX
       MUL  SI           ;  SO MULTIPLY AX BY 10
                         ;NOTE-FIRST TIME THROUGH AX=0
       JC   END_CONV1    ;EXIT IF RESULT IS TOO BIG  ******NOT IN BOOK
       POP  DX
       MOV  BL,DS:[BP]   ;FETCH ASCII CODE,  
       AND  BX,0FH       ; SAVE ONLY HIGH BITS, 
       ADD  AX,BX        ; AND UPDATE PARTIAL RESULTS
       JC   END_CONV     ;EXIT IF RESULT IS TOO BIG
       INC  BP           ;OTHERWISE, INCREMENT
       LOOP CHK_PT       ; BP AND CONTINUE
       CLC               ;WHEN DONE, CLEAR CARRY FLAG

       JMP END_CONV      ;                            ******NOT IN BOOK

END_CONV1:               ;                             *****NOT IN BOOK
       POP  DX           ;TO KEEP STACK RIGHT          *****NOT IN BOOK
END_CONV:
       POP  SI           ;RESTORE REGISTERS
       POP  BX
       POP  BP
       RET               ;RETURN TO CALLER
CONV_AB ENDP

CODE ENDS
      END
```
{% endraw %}

## BIN_ASC.ASM

{% raw %}
```
;BIN_ASC.ASM
;
;This procedure converts a signed binary number to a six-
;byte ASCII string (sign plus five digits) in the data
;segment.  Upon entry, the number to be converted must be
;in AX and the starting addresss of the memory buffer
;must be in BX.  Upon return, BX holds the address of 
;the converted output string and CX holds the length
;of the string.  Other registers are preserved.
;
CODE SEGMENT PARA 'CODE'
     ASSUME CS:CODE
     PUBLIC BIN_ASCII

BIN_ASCII PROC FAR
       PUSH DX        ;SAVE AFFECTED REGISTERS
       PUSH SI
       PUSH AX        ;SAVE BINARY VALUE
       MOV  CX,6      ;FILL BUFFER WITH SPACES
FILL_BUFFER:
       MOV  BYTE PTR [BX],' '    ;BLANK
       INC  BX
       LOOP FILL_BUFFER
       MOV  SI,10     ;GET READY TO DIVIDE BY 10
       OR   AX,AX     ;IF VALUE IS NEGITIVE
       JNS  CLR_DVD
       NEG  AX        ;MAKE IT POSITIVE
CLR_DVD:
       SUB  DX,DX     ;CLEAR UPPER HALF OF DIVIDEND
       DIV  SI        ;DIVIDE AX BY 10
       ADD  DX,'0'    ;CONVERT REMAINDER TO ASCII DIGIT
       DEC  BX        ;BACK UP THROUGH BUFFER
       MOV  [BX],DL   ;STORE THIS CHAR IN THE STRING
       INC  CX        ;COUNT CONVERTED CHARACTER
       OR   AX,AX     ;ALL DONE?
       JNZ  CLR_DVD   ;N0. GO GET NEXT DIGIT
       POP  AX        ;YES. RETRIEVE ORIGINAL VALUE
       OR   AX,AX     ;WAS IT NEGITIVE?
       JNS  NO_MORE   
       DEC  BX        ;YES. STORE SIGN
       MOV  BYTE PTR [BX],'-'
       INC  CX        ;    AND INCREASE CHARACTER COUNT
NO_MORE:
       POP  SI
       POP  DX
       RET            ;RETURN TO CALLER

BIN_ASCII  ENDP
CODE       ENDS
           END
```
{% endraw %}

## CASE.ASM

{% raw %}
```

COMMENT^ *** CASE.COM *** Last Rev. 10/08/83 *** Vincent T. Bly ***
 -------------------------------------------------------------------
|								    |
| PURPOSE:  Provide a resident utility to aid assembly language     |
|	    programmers who wish to write their source code in	    |
|	    ALL CAPS and their comments in lower case.		    |
|								    |
| FUNCTION: Change the cursor shape to indicate the present state   |
|	    of the "Caps Lock" key (block cursor for caps lock and  |
|	    underline cursor for upper/lower case).		    |
|	    Shift to upper/lower case for comments whenever the ";" |
|	    key is pressed.					    |
|	    Shift to caps lock for source code whenever the "Enter" |
|	    key is pressed.					    |
|	    Toggle the ";"/"Enter" case switching off or on when-   |
|	    ever both shift keys are pressed simultaneously.	    |
|								    |
| TO USE:   From DOS, type CASE and press the "Enter" key.          |
|								    |
| NOTES:    This version works with either the color graphics or    |
|	    monochrome card.  The DOS utilities (DIR, DEBUG, etc.)  |
|	    do not turn off the cursor during printing.  If you     |
|	    find the effect with the block cursor objectionable,    |
|	    you can temporarily turn off the case switching by	    |
|	    pressing both shift keys simultaneously or you can	    |
|	    change the DWs defining the cursor shapes.		    |
|								    |
 -------------------------------------------------------------------^

INTERRUPTS	SEGMENT AT 00H	;*********** Interrupt vector table **
		ORG	09H*4
KB_INT		LABEL	DWORD		; keyboard hardware interrupt
		ORG	16H*4
KEYBRD_INT	LABEL	DWORD		; keyboard software interrupt
INTERRUPTS	ENDS

BIOS_DATA	SEGMENT AT 40H	;*********** BIOS data segment *******
		ORG	10H
EQUIP_FLAG	LABEL	WORD		; bits 4 & 5 indicate CRT board type
		ORG	17H
KYBD_FLAG	LABEL	BYTE		; primary keyboard status flag
		ORG	63H
ADDR_6845	LABEL	WORD		; port address of 6845 index register
BIOS_DATA	ENDS

CSEG		SEGMENT
		ORG	100H		; necessary for a .COM file
		ASSUME	CS:CSEG
START:		JMP	INITIALIZE	; jump to initilization routine
CAP_CURSOR_C	DW	0006H		; caps lock cursor type (color board)
CAP_CURSOR_M	DW	000BH		;     as above, for monochrome board
LOW_CURSOR_C	DW	0607H		; upper/lower case cursor type (color)
LOW_CURSOR_M	DW	0B0CH		;     as above, for monochrome board
ROM_KEY_INT	DD			; ROM keyb'rd hardware interrupt addr.
ROM_KYBD_IO	DD			; ROM keyb'rd software interrupt addr.
CASE_FLAG	DB	0FFH		; case switching flag (FF=on, 00=off)
OLD_KYF 	DB	040H		; old value of KYBD_FLAG



;===========================================================================;
@HARD_KYBD_INT	PROC	FAR		    ; Keyboard hardware interrupts  ;
		ASSUME CS:CSEG,DS:BIOS_DATA ; (09H) are re-vectored to here ;
		STI			    ;-------------------------------;
		PUSHF			; set-up to call like an interrupt
		CALL	ROM_KEY_INT	; call ROM BIOS, but return here
		PUSH	AX		; save regs
		PUSH	DS
		MOV	AX,BIOS_DATA	; point DS to BIOS data seg
		MOV	DS,AX
		MOV	AL,[KYBD_FLAG]	; get BIOS keyboard status flag
		CMP	AL,CS:[OLD_KYF] ; has status flag changed?
		JE	GO_BACK 	; if not, go back
		MOV	CS:[OLD_KYF],AL ; refresh old status flag value
		CALL	SET_CURSOR	; go set proper cursor type
		AND	AL,3		; mask all but shift keys
		CMP	AL,3		; check for both shift keys down
		JNE	GO_BACK 	; if not both shifts, skip toggle
		MOV	AL,CS:[CASE_FLAG] ; get case switch flag
		NOT	AL		; toggle flag
		MOV	CS:[CASE_FLAG],AL ; replace flag
GO_BACK:	POP	DS
		POP	AX
		IRET			; back to program
@HARD_KYBD_INT	ENDP

;============================================================================;
SET_CURSOR	PROC	NEAR	; Set cursor for uppr/lowr case or caps lock ;
		ASSUME	CS:CSEG,DS:BIOS_DATA ;-------------------------------;
		PUSH	AX		; save regs
		PUSH	BX
		PUSH	DX
		LEA	BX,LOW_CURSOR_C ; load upper/lower case cursor
		TEST	AL,40H		; is caps lock on?
		JZ	CHK_BOARD	; if not, go check board type
		LEA	BX,CAP_CURSOR_C ; load caps lock cursor
CHK_BOARD:	MOV	AX,EQUIP_FLAG	; get equipment flag
		AND	AX,30H		; isolate CRT board type bits
		CMP	AX,30H		; is it monochrome board?
		JNE	CG_SET		; if not, skip ahead
		ADD	BX,2		; bump BX to mono cursor type
CG_SET: 	MOV	BX,CS:[BX]	; get proper cursor into BX
		MOV	DX,ADDR_6845	; point to 6845 index reg
		MOV	AL,10D		; point to cursor start reg
		OUT	DX,AL		; select cursor start reg
		INC	DX		;     point to 6845 data reg
		MOV	AL,BH		;     data into AL
		OUT	DX,AL		;     data to cursor start reg
		DEC	DX		; point to 6845 index reg
		MOV	AL,11D		; point to cursor end reg
		OUT	DX,AL		; select cursor end reg
		INC	DX		;     point to 6845 data reg
		MOV	AL,BL		;     next data into AL
		OUT	DX,AL		;     data to cursor end reg
		POP	DX		; restore regs
		POP	BX
		POP	AX
		RET
SET_CURSOR	ENDP


;============================================================================;
@SOFT_KYBD_INT	PROC	FAR		     ; Keyboard software interrupts  ;
		ASSUME	CS:CSEG,DS:BIOS_DATA ; (16H) are re-vectored to here ;
		STI			     ;-------------------------------;
		OR	AH,AH		; is it wait for keyboard input?
		JZ	THIS_ROUTINE	; if so, do this routine
		JMP	ROM_KYBD_IO	; else go to ROM & back to caller
THIS_ROUTINE:	PUSHF			; set-up to CALL like an interrupt
		CALL	ROM_KYBD_IO	; call ROM BIOS, but return here
		PUSH	AX		; save caller's registers
		PUSH	DS		;	"
		TEST	CS:[CASE_FLAG],1 ; is case switching flag on?
		JZ	BACK_TO_CALLER	; if case flag off, skip the rest
		CMP	AL,";"          ; is the character a semicolon?
		JE	CAPS_OFF	; if so, go turn caps lock off
		CMP	AL,0DH		; is the character a carriage return?
		JE	CAPS_ON 	; if so, go turn caps lock on
BACK_TO_CALLER: POP	DS		; restore caller's registers
		POP	AX		;	"
		IRET			; return to the caller
;--- Toggle caps lock for ";" or "Enter" ----------------------------------
CAPS_ON:	STC			; set carry to indicate caps on
CAPS_OFF:	MOV	AX,BIOS_DATA	; point to BIOS data segment
		MOV	DS,AX
		MOV	AL,[KYBD_FLAG]	; get keyboard state flag
		JC	SET_ON		; if caps should be set on, skip ahead
		AND	AL,NOT 40H	; turn off caps lock
		JMP	REPLACE_FLAG
SET_ON: 	OR	AL,40H		; turn caps lock on
REPLACE_FLAG:	MOV	[KYBD_FLAG],AL	; replace keyboard state flag
		CALL	SET_CURSOR	; go set proper cursor type
		JMP	BACK_TO_CALLER
@SOFT_KYBD_INT	ENDP

;============================================================================;
INITIALIZE	PROC	NEAR		      ; Re-vector keyb'rd interrupts ;
		ASSUME	CS:CSEG,DS:INTERRUPTS ;------------------------------;
		MOV	AX,INTERRUPTS	; point to interrupt vector segment
		MOV	DS,AX
;--- Set intercept for software keyboard interrupt -------------------------
		MOV	AX,KEYBRD_INT	; save old keyboard interrupt vector
		MOV	ROM_KYBD_IO,AX
		MOV	AX,KEYBRD_INT[2]
		MOV	ROM_KYBD_IO[2],AX
		MOV	AX,OFFSET @SOFT_KYBD_INT ; reset keyboard interrupt
		MOV	KEYBRD_INT,AX	; vector to point to this routine
		MOV	KEYBRD_INT[2],CS
;--- Set intercept for hardware keyboard interrupt -------------------------
		MOV	AX,KB_INT	; save old keyboard interrupt vector
		MOV	ROM_KEY_INT,AX
		MOV	AX,KB_INT[2]
		MOV	ROM_KEY_INT[2],AX
		MOV	AX,OFFSET @HARD_KYBD_INT ; reset keyboard interrupt
		MOV	KB_INT,AX	; vector to point to this routine
		MOV	KB_INT[2],CS
		MOV	DX,OFFSET INITIALIZE ; point to end of resident code
		INT	27H		; terminate but stay resident
INITIALIZE	ENDP

CSEG		ENDS
		END	START
```
{% endraw %}

## CIRCLE_1.ASM

{% raw %}
```
TITLE CALLER - CALLS CIRCLE SUBROUTINE
EXTRN CIRCLE:FAR;external subroutine

STACK    SEGMENT PARA STACK 'STACK'
         DB   64 DUP('STACK   ')
STACK    ENDS
CALLER   SEGMENT PARA 'CODE'
START    PROC FAR
         ASSUME CS:CALLER,SS:STACK
         PUSH DS        ;save ret seg on stack
         XOR  AX,AX     ;zero for ret offset
         PUSH AX        ;and save on stack
         MOV  AL,4      ;color/graphics select
         INT  10H       ;set mode
         MOV  AX,160    ;X origin coord
         PUSH AX        ;save on stack
         MOV  AX,100    ;Y origin coord
         PUSH AX        ;save on stack
         MOV  AX,50     ;circle radius
         PUSH AX        ;save on stack
         MOV  AX,5      ;aspect numer
         PUSH AX        ;save on stack
         MOV  AX,6      ;aspec denom
         PUSH AX        ;save on stack
         MOV  AX,1      ;foregrnd color 
         PUSH AX        ;save on stack  
         CALL CIRCLE    ;draw circle 
         RET            ;far ret to DOS  
START    ENDP 
CALLER   ENDS 
         END 
```
{% endraw %}

## CIRCLE_2.ASM

{% raw %}
```
TITLE CALLER - CALLS CIRCLE SUBROUTINE
EXTRN CIRCLE:FAR;external subroutine

STACK    SEGMENT PARA STACK 'STACK'
         DB   64 DUP('STACK   ')
STACK    ENDS
CALLER   SEGMENT PARA 'CODE'
START    PROC FAR
RADIUS   DW   20        ;INITIAL VALUE OF RADIUS
         ASSUME CS:CALLER,SS:STACK
         PUSH DS        ;save ret seg on stack
         XOR  AX,AX     ;zero for ret offset
         PUSH AX        ;and save on stack
         MOV  AL,4      ;color/graphics select
         INT  10H       ;set mode
LOOP_CIR: MOV  AX,160    ;X origin coord
         PUSH AX        ;save on stack
         MOV  AX,100    ;Y origin coord
         PUSH AX        ;save on stack
         MOV  AX,RADIUS ;CIRCLE RADIUS
         PUSH AX        ;save on stack
         MOV  AX,5      ;aspect numer
         PUSH AX        ;save on stack
         MOV  AX,6      ;aspec denom
         PUSH AX        ;save on stack
         MOV  AX,1      ;foregrnd color 
         PUSH AX        ;save on stack  
         CALL CIRCLE    ;draw circle 
         ADC  RADIUS,10 ;INCREASE RADIUS BY 10
         CMP  CX,80     ;END VALUE
         JLE  LOOP_CIR   ;ONE MORE CIRCLE
         RET            ;far ret to DOS  
START    ENDP 
CALLER   ENDS 
         END 
```
{% endraw %}

## CIRCLE_3.ASM

{% raw %}
```
TITLE CALLER - CALLS CIRCLE SUBROUTINE
EXTRN CIRCLE:FAR;external subroutine

STACK    SEGMENT PARA STACK 'STACK'
         DB   64 DUP('STACK   ')
STACK    ENDS
CALLER   SEGMENT PARA 'CODE'
START    PROC FAR
         ASSUME CS:CALLER,SS:STACK
X_COORD  DW   50        ;INITIAL VALUE X OF CENTER
Y_COORD  DW   50        ;INITIAL VALUE Y OF CENTER
         PUSH DS        ;save ret seg on stack
         XOR  AX,AX     ;zero for ret offset
         PUSH AX        ;and save on stack
         MOV  AL,4      ;color/graphics select
         INT  10H       ;set mode
LOOP_CIR: MOV  AX,X_COORD ;X CURRENT COORD
         PUSH AX        ;save on stack
         MOV  AX,Y_COORD  ;Y CURRENT COORD
         PUSH AX        ;save on stack
         MOV  AX,30     ;circle radius
         PUSH AX        ;save on stack
         MOV  AX,5      ;aspect numer
         PUSH AX        ;save on stack
         MOV  AX,6      ;aspec denom
         PUSH AX        ;save on stack
         MOV  AX,1      ;foregrnd color 
         PUSH AX        ;save on stack  
         CALL CIRCLE    ;draw circle 
         ADC  X_COORD,2    ;INCREASE X BY 2       
         CMP  X_COORD,200  ;END VALUE
         JA  EXIT_POINT    ;END OF PROGRAM 
         CMP  X_COORD,120  ;TURNING POINT
         JA  TURN_POINT
         ADC  Y_COORD,2    ;INCREASE Y BY 1
         JMP LOOP_CIR      ;DO ANOTHER CIRCLE
TURN_POINT: ADC Y_COORD,-2 ;DECREASE Y BY 1
         JMP LOOP_CIR      ;DO ANOTHER CIRCLE
EXIT_POINT:  RET        ;far ret to DOS  
START    ENDP 
CALLER   ENDS 
         END 
```
{% endraw %}

## CLINK.DOC

{% raw %}
```
; CLINK - LOAD AND LINK GRAPHICS CHARACTER TABLE
;
; ORIGINAL BY RAY DUNCAN, PUBLISHED IN DDJ #74
; REVISED BY PATRICK BANCHY, 1249 PARK AVE. #5C, NYC
;
; THE IBM PC ALLOWS THE USER TO DEFINE THE MEANINGS OF THE
; CHARACTERS IN THE RANGE 80H-FFH IN THE GRAPHICS MODES.

; THIS PROGRAM WHEN FIRST CALLED WILL ALLOCATE THE 1 KB OF
; MEMORY NEEDED FOR THE TABLE.	SUBSEQUENT CALLS WILL LOAD
; THE TABLE SPECIFIED IN THE INVOCATION INTO MEMORY.

```
{% endraw %}

## CLOSER.ASM

{% raw %}
```
         NAME      CLOSER
         PAGE      55,132
         TITLE     'CLOSER - SHOW BUG IN PC-DOS FUNCTION 10H'
;
; THIS PROGRAM DEMONSTRATES A SUBTLE BUT DANGEROUS BUG IN THE
; PC-DOS CLOSE FILE FUNCTION 10H.  IF A CLOSE REQUEST IS ISSUED
; USING A FILE CONTROL BLOCK THAT HAS NOT BEEN PREVIOUSLY
; ACTIVATED BY A SUCCESSFUL OPEN COMMAND, THE FILE'S LENGTH
; WILL BE TRUNCATED TO ZERO AND THE CLUSTERS PREVIOUSLY ASSIGNED
; TO THE FILE ARE LEFT FLOATING.
;
; RAY DUNCAN, NOVEMBER 1983

CR       EQU       0DH       ;ASCII CARRIAGE RETURN
LF       EQU       0AH       ;ASCII LINE FEED

CSEG     SEGMENT   PARA PUBLIC 'CODE'

         ASSUME    CS:CSEG,DS:DATA,ES:DATA,SS:STACK

CLOSER   PROC      FAR
         PUSH      DS        ;SAVE DS:0000 FOR FINAL
         XOR       AX,AX     ;RETURN TO PC-DOS
         PUSH      AX

         MOV       AX,DATA   ;MAKE OUR DATA AREA
         MOV       DS,AX     ;ADDRESSABLE
         MOV       ES,AX

                             ;NOW CREATE FILE QUACK.DAT
         MOV       AH,16H
         MOV       DX,OFFSET FCB
         INT       21H
         OR        AL,AL     ;CREATE SUCCESSFUL?
         JNZ       CLOSER8   ;NO,JUMP
         MOV       AH,9      ;YES,PRINT SUCCESS MESSAGE
         MOV       DX,OFFSET MSG1
         INT       21H

                             ;NOW SET THE RECORD LENGTH
                             ;TO 1024 BYTES AND WRITE
                             ;RANDOM DATA INTO THE
                             ;FILE (USING DEFAULT DTA)
         MOV       WORD PTR FCB+14,1024
         MOV       AH,15H
         MOV       DX,OFFSET FCB
         INT       21H
         OR        AL,AL     ;WAS WRITE SUCCESSFUL?
         JNZ       CLOSER8   ;NO,JUMP
         MOV       AH,9      ;YES,PRINT SUCCESS MESSAGE
         MOV       DX,OFFSET MSG2
         INT       21H

                             ;NOW CLOSE THE FILE SO THE
                             ;DIRECTORY WILL BE UPDATED
         MOV       AH,10H
         MOV       DX,OFFSET FCB
         INT       21H
         OR        AL,AL     ;CLOSE OPERATION SUCCESSFUL?
         JNZ       CLOSER8   ;NO,JUMP
         MOV       AH,9      ;YES,PRINT SUCCESS MESSAGE
         MOV       DX,OFFSET MSG3
         INT       21H

                             ;NOW CLEAR OUT THE FILE CONTROL
                             ;BLOCK EXCEPT FOR THE FILESPEC,
                             ;AS THOUGH THE FILE HAD NEVER
                             ;BEEN OPENED, AND THEN REQUEST
                             ;ANOTHER CLOSE OPERATION.

         MOV       DI,OFFSET FCB+12
         MOV       CX,25
         XOR       AL,AL
         CLD
         REP STOSB           ;THIS ZEROS OUT THE FCB

         MOV       AH,10H    ;NOW CLOSE FILE AGAIN
         MOV       DX,OFFSET FCB
         INT       21H
         OR        AL,AL     ;CHECK STATUS
         JNZ       CLOSER8   ;BAD STATUS,JUMP

                             ;STATUS OK, PRINT FINAL
                             ;MESSAGE TO INSPECT DIRECTORY
         MOV       DX,OFFSET MSG4
         JMP       CLOSER9

CLOSER8:                     ;COME HERE IF UNEXPECTED
                             ;FAILURE OF DISK OPERATION
         MOV       DX,OFFSET MSG5

CLOSER9:                     ;PRINT MESSAGE AND EXIT
         MOV       AH,9
         INT       21H

         RET                 ;FAR RETURN TO PC-DOS

CLOSER   ENDP

CSEG     ENDS


STACK    SEGMENT   PARA STACK 'STACK'
         DB        64 DUP (?)
STACK    ENDS


DATA     SEGMENT   PARA PUBLIC 'DATA'

MSG1     DB        CR,LF
         DB        'FILE QUACK.DAT CREATED'
         DB        CR,LF,'$'

MSG2     DB        CR,LF
         DB        '1024 BYTES WRITTEN INTO QUACK.DAT'
         DB        CR,LF,'$'

MSG3     DB        CR,LF
         DB        'FILE QUACK.DAT CLOSED PROPERLY'
         DB        CR,LF,'$'

MSG4     DB        CR,LF,LF
         DB        'SECOND CLOSE OPERATION REQUESTED '
         DB        'ON FILE QUACK.DAT'
         DB        CR,LF
         DB        'INSPECT LENGTH OF FILE QUACK.DAT '
         DB        'ON DIRECTORY LISTING'
         DB        CR,LF
         DB        'THEN RUN CHKDSK WITH /F SWITCH TO '
         DB        'RECOVER LOST DISK CLUSTERS'
         DB        CR,LF,'$'

MSG5     DB        CR,LF
         DB        'UNEXPECTED FAILURE OF DISK OPERATION'
         DB        CR,LF,'$'

                             ;FILE CONTROL BLOCK
FCB      DB        0         ;USE DEFAULT DRIVE
         DB        'QUACK   DAT'
         DB        25 DUP (0)

DATA     ENDS

         END       CLOSER
```
{% endraw %}

## COMPAQ.ASM

{% raw %}
```
		   PAGE      52,132
STACK		   SEGMENT   BYTE STACK 'STACK'  ;STACK SEGMENT
		   DB	     64 DUP ('STACK   ') ;INITIAL STACK VALUE
STACK		   ENDS 			 ;STACK SEGMENT END
		   PAGE
CSEG		   SEGMENT   BYTE PUBLIC 'CODE'  ;CODE SEGMENT
		   ASSUME    CS:CSEG,ES:CSEG	 ;ASSUME'S
INT5_OFF	   EQU	     14H		 ;INT 5 OFFSET ADDRESS
INT5_SEG	   EQU	     16H		 ;INT 5 SEG. ADDRESS
OLD_SEG 	   EQU	     -2 		 ;OLD SEQ. OFFSET
OLD_OFF 	   EQU	     -4 		 ;OLD OFFSET OFFSET
INT_27		   EQU	     27CDH		 ;INT 27 OP-CODE
CODE_9		   EQU	     9H 		 ;FUNCTION CODE 9
INT_21		   EQU	     21H		 ;INT 21 REQUEST VALUE
RET		   EQU	     0H 		 ;RETURN CODE OFFSET
BASIC_DS	   EQU	     510H		 ;BASIC DS SAVE ADDR.
PROTECT 	   EQU	     59BH		 ;PROT OFFSET (COMPAQ)
POINT		   EQU	     8			 ;OFFSET TO IDENT
BYTES		   EQU	     4			 ;SIZE OF IDENT
PRE		   EQU	     100H		 ;PREFIX SIZE
		   PAGE
START		   LABEL     NEAR		 ;START OF BODY
IDENT		   DB	     'PROT'              ;PROGRAM IDENT.
PRTSC_OFF	   DW	     0			 ;PRINT SCREEN OFFSET
PRTSC_SEG	   DW	     0			 ;PRINT SCREEN SEGMENT
INT		   LABEL     NEAR		 ;INTERRUPT ROUTINE
		   PUSH      DS 		 ;SAVE DS REGISTER
		   PUSH      AX 		 ;SAVE AX REGISTER
		   XOR	     AX,AX		 ;ZERO AX REGISTER
		   MOV	     DS,AX		 ;LOWER CORE POINTER
		   MOV	     DS,[DS:BASIC_DS]	 ;BASIC WORK AREA
		   XOR	     AL,AL		 ;ZERO AL REGISTER
		   MOV	     [DS:PROTECT],AL	 ;UN-PROTECT PROGRAM
		   POP	     AX 		 ;RESTORE AX REGISTER
		   POP	     DS 		 ;RESTORE DS REGISTER
		   STI				 ;ALLOW INTERRUPTS
		   IRET 			 ;INTERRUPT RETURN
I_END		   EQU	     $			 ;RESIDENT CODE END
		   PAGE
INITIAL 	   PROC      FAR		 ;INITIALIZATION CODE
		   PUSH      DS 		 ;SAVE RETURN SEGMENT
		   MOV	     AX,INT_27		 ;GET INT 27 OP-CODE
		   MOV	     [DS:RET],AX	 ;CHANGE RETURN CODE
		   XOR	     AX,AX		 ;ZERO AX REGISTER
		   PUSH      AX 		 ;SAVE RETURN OFFSET
		   MOV	     DS,AX		 ;POINT TO LOWER CORE
		   CLD				 ;SET DIRECTION FLAG
		   MOV	     DX,CS		 ;GET POINTER TO CODE
		   MOV	     ES,DX		 ;POINT TO CODE
		   MOV	     CX,BYTES		 ;GET LENGTH OF IDENT
		   MOV	     DI,OFFSET IDENT	 ;POINT TO IDENT
		   MOV	     BX,[DS:INT5_SEG]	 ;GET INT 5 SEGMENT
		   MOV	     SI,[DS:INT5_OFF]	 ;GET INT 5 OFFSET
		   MOV	     DS,BX		 ;POINT TO INT 5
		   SUB	     SI,POINT		 ;POINT TO ID LOC
		   REPZ      CMPSB		 ;CHECK IF LOADED
		   JNE	     LOAD		 ;GO LOAD IF NOT
		   PAGE
UNLOAD		   LABEL     NEAR		 ;UN-LOAD CODE
		   MOV	     DS,AX		 ;POINT TO LOWER CORE
		   MOV	     SI,[DS:INT5_OFF]	 ;GET INT 5 OFFSET
		   MOV	     DS,BX		 ;POINT TO INT 5
		   MOV	     BX,[OLD_SEG][SI]	 ;GET OLD SEGMENT
		   MOV	     CX,[OLD_OFF][SI]	 ;GET OLD OFFSET
		   MOV	     DS,AX		 ;POINT TO LOWER CORE
		   MOV	     [DS:INT5_SEG],BX	 ;RESTORE SEGMENT
		   MOV	     [DS:INT5_OFF],CX	 ;RESTORE OFFSET
		   MOV	     DS,DX		 ;POINT TO CODE
		   MOV	     DX,OFFSET OFF	 ;POINT TO OFF MESS.
		   MOV	     AH,CODE_9		 ;GET DESIRED CODE
		   INT	     INT_21		 ;PRINT MESSAGE
		   MOV	     DX,OFFSET START	 ;GET BODY OFFSET
		   PAGE
		   JMP	     EXIT		 ;GO EXIT FOR GOOD
LOAD		   LABEL     NEAR		 ;LOAD CODE
		   MOV	     DS,AX		 ;POINT TO LOWER CORE
		   MOV	     AX,[DS:INT5_OFF]	 ;INTERRUPT 5 OFFSET
		   MOV	     [CS:PRTSC_OFF],AX	 ;SAVE INT 5 OFFSET
		   MOV	     AX,[DS:INT5_SEG]	 ;INTERRUPT 5 SEGMENT
		   MOV	     [CS:PRTSC_SEG],AX	 ;SAVE INT 5 SEGMENT
		   CLI				 ;NO INTERRUPTIONS
		   MOV	     AX,OFFSET INT	 ;GET INTERRUPT OFFSET
		   MOV	     [DS:INT5_OFF],AX	 ;SAVE INT 5 OFFSET
		   MOV	     [DS:INT5_SEG],CS	 ;SAVE INT 5 SEGMENT
		   STI				 ;ALLOW INTERRUPTS
		   MOV	     DS,DX		 ;POINT TO CODE
		   MOV	     DX,OFFSET ON	 ;POINT TO ON MESS.
		   MOV	     AH,CODE_9		 ;GET DESIRED CODE
		   INT	     INT_21		 ;PRINT MESSAGE
		   MOV	     DX,OFFSET I_END+PRE ;GET END POINTER
		   PAGE
EXIT		   LABEL     NEAR		 ;EXIT CODE
		   RET				 ;TERMINATE RESIDENT
INITIAL 	   ENDP 			 ;END OF INITIAL
ON		   DB	     "Protect Bypass Enabled$"
OFF		   DB	     "Protect Bypass Disabled$"
CSEG		   ENDS 			 ;CODE SEGMENT END
		   END	     INITIAL		 ;SET TRANSFER ADDRESS
```
{% endraw %}

## DEC_ADJ.ASM

{% raw %}
```
;DEC_ADJ.ASM           9-28-83
;
;INPUT AX = 16 BIT SIGNED NUMBER
;      CX = NUMBER OF CHARACTER TO RIGHT OF DECIMAL POINT
;THIS PROGRAM MULTIPLIES AX BY 10 AND ADJUSTS CX TO MAKE THE
;NUMBER IN AX A MAXIMUN VALUE AND CX A EVEN NUMBER

;----------------------------------------------------
;DATA SEGMENT PARA 'DATA'
;SAVE_NUM   DW  ?
;DATA    ENDS
;----------------------------------------------------
CODE SEGMENT PARA PUBLIC 'CODE'

DEC_ADJ PROC FAR
       ASSUME CS:CODE
 ;     ASSUME DS:DATA
       PUBLIC DEC_ADJ


       CMP AX,0         ;IF NUMBER IS ZERO JUMP TO END AND EXIT
       JZ DEC_ADJ_EXIT

       MOV  BX,10       ;GOING TO MULTIPLY AX BY 10 AND INCREMENT
                        ;  CX BY 1 UNTIL GET A CARRY (AX GOT TOO
                        ;  LARGE)
MUL_BY_10:
       MOV  SI,AX       ;SAVE CURRENT VALUE OF NUMBER  IN DI
       IMUL  BX
       JC   UN_DO_LAST  ;LAST MULTIPLY WAS ONE TOO MANY GO UNDO
       INC  CX
       JMP  MUL_BY_10

UN_DO_LAST:          ;SAVE_NUM CONTAINS VALUE BEFORE LAST MULTI
  ;    MOV  AX,DX       ;UNDO LAST MULTIPLY
  ;    MOV  SAVE_NUM,AX ;SAVE PRESENT VALUE OF NUMBER
      

;CHECK THAT CX IS EVEN NUMBER
       MOV  AX,CX       ;PUT IN AX FOR DIVIDE
       CBW
       MOV  BL,2        ;GOING TO DO A BYTE DIVIDE
       DIV  BL          ;AL WILL CONTAIN REMAINDER
       CMP  AH,0        ;IF REMAINDER WAS ZERO CX WAS EVEN
       JZ   DEC_ADJ_EXIT   ;WAS EVEN GO EXIT
       MOV  AX,SI          ;WAS NOT EVEN PUT NUMBER BACK IN AX
       MOV  BX,10       ;  AND divide   BY 10 
       CWD
       IDIV BX
       DEC  CX          ;ADJUST CX FOR divide  

       JMP  DEC_ADJ_EXIT1


DEC_ADJ_EXIT:
       MOV  AX,SI

DEC_ADJ_EXIT1:

;ax has number and cx has number of characters after decimal point

       RET               ;RETURN TO CALLER

DEC_ADJ  ENDP
CODE     ENDS
         END
```
{% endraw %}

## DISP-REG.ASM

{% raw %}
```
	PAGE	,132
	TITLE	DISPREGS - DISPLAY REGISTERS AS SET BY LOADER
	NAME	DISPREGS
;****************************************************************
;* MODULE NAME = DISPREGS
;*
;* COPYRIGHT(C) 1984	SKIP GILBRECH
;*			90 LEXINGTON AVE. #10-G
;*			NEW YORK, NY 10016
;*			212-685-0551
;*
;* AUTHOR = SKIP GILBRECH
;* DATE WRITTEN = 01/13/84
;*
;* ENVIRONMENT:
;*  SYSTEM = IBM PC (DOS 2.0 - SHOULD WORK ON ANY VERSION)
;*  PROCESSOR = MICROSOFT 8086 MACRO ASSEMBLER
;*
;* THIS PROGRAM MAY BE FREELY COPIED/ALTERED FOR ANY NON-COMMERCIAL
;* PURPOSE BUT MAY NOT BE SOLD OR USED IN ANY WAY AS PART OF ANY
;* PROFIT-MAKING VENTURE WITHOUT PERMISSION OF THE AUTHOR.
;* (I.E., IN THE UNLIKELY EVENT THAT ANY MONEY IS MADE OFF THIS,
;* I WANT SOME OF IT...)
;*
;* THIS LITTLE PROGRAM WAS INSPIRED BY SOME OF THE RECENT DISCUSSION
;* ON THE SIG CONCERNING STARTING CONDITIONS (I.E. REGISTER & FLAG
;* SETTINGS) ENCOUNTERED BY FILES LOADED UNDER DEBUG VERSUS THOSE
;* ENCOUNTERED BY FILES LOADED BY COMMAND.COM.	IT WAS NOTED THAT
;* CERTAIN PROGRAMS WORKED UNDER ONE BUT NOT UNDER THE OTHER, AND I
;* REALIZED THAT I HAD ALWAYS ASSUMED THINGS WERE THE SAME EITHER WAY...
;*
;* IT SEEMS, HOWEVER, THAT ALTHOUGH THE DIFFERENCES AREN'T GREAT, THEY
;* DO EXIST.  IT IS, OF COURSE, FOOLISH TO RELY ON REGISTER AND FLAG
;* SETTINGS MADE BY SOMEONE ELSE, BUT THAT DOESN'T MEAN IT ISN'T DONE.
;*
;* THE ONLY ASSUMPTIONS MADE ABOUT REGISTER SETTINGS IN THIS PROGRAM
;* ARE THAT:
;*
;*   -- CS:IP POINTS TO THE BEGINNING OF THE CODE (HARD TO AVOID
;*	THAT ASSUMPTION...)
;*   -- DS:0 CONTAINS AN INT 21H INSTRUCTION (WILL RUN FINE WITHOUT
;*	IT, BUT WILL HAVE TROUBLE EXITING...)
;*
;* BY THE WAY, THIS CAN BE MADE INTO A .COM OR .EXE FILE BY CHANGING
;* THE EQUATE BELOW.  IT WAS NECESSARY TO MAKE TWO VERSIONS AS THE
;* TWO TYPES OF FILES ARE LOADED DIFFERENTLY.  TO MAKE A .COM FILE,
;* USE EXE2BIN AFTER YOU GET THE OBNOXIOUS 'NO STACK SEGMENT' WARNING
;* FROM LINK.  OF COURSE, THE .EXE REGISTER SETTINGS FOR CS,IP,SS AND
;* SP ARE PECULIAR TO THIS FILE, AS THEY ARE DEFINED BY THE LINKER AND
;* PASSED TO DOS IN THE .EXE HEADER.
;*
;****************************************************************
	PAGE
;****************************************************************
;*
;*	CONSTANTS
;*
;****************************************************************

FALSE		EQU	0
TRUE		EQU	NOT FALSE

MAKE_COM	EQU	TRUE		; IF TRUE, MAKE .COM FILE

IF NOT MAKE_COM 			; ELSE MAKE .EXE FILE
MAKE_EXE	EQU	TRUE
ELSE
MAKE_EXE	EQU	FALSE
ENDIF

LF	EQU	10			; LINE FEED
CR	EQU	13			; CARRIAGE RETURN

DOSINT		EQU	21H		; INT. NUMBER FOR DOS FUNCTIONS
PRINT_STRING	EQU	9		; DOS PRINT STRING FUNCTION

;****************************************************************
;*
;*	MACRO
;*
;****************************************************************

MSG_MAC MACRO	TEXT,FORMAT_ROUTINE
	MOV	DX,OFFSET TEXT
	MOV	AH,PRINT_STRING
	INT	DOSINT
	POP	AX
	CALL	FORMAT_ROUTINE
	ENDM

;****************************************************************
;*
;*	STACK SEGMENT IF MAKING .EXE FILE
;*
;****************************************************************

IF MAKE_EXE
STACK	SEGMENT STACK
DW	128 DUP (?)
STACK	ENDS
ENDIF

	PAGE
;****************************************************************
;*
;*	CODE (AND DATA) SEGMENT
;*
;****************************************************************

CODE	SEGMENT
	ASSUME	CS:CODE,DS:NOTHING,ES:NOTHING,SS:NOTHING

IF MAKE_COM
	ORG	100H		; FOR COM FILE
ENDIF

REG_DISP PROC FAR		; SET UP FOR FAR RETURN TO DOS

	JMP	MAINLINE	; JUMP TO PROGRAM CODE

; STRINGS FOR FORMATTING THE REGISTER DISPLAY:

MSG_CS		DB	CR,LF,'CS ==>$'
MSG_DS		DB	'  DS ==>$'
MSG_ES		DB	'  ES ==>$'
MSG_SS		DB	'  SS ==>$'
MSG_AX		DB	CR,LF,'AX ==>$'
MSG_BX		DB	'  BX ==>$'
MSG_CX		DB	'  CX ==>$'
MSG_DX		DB	'  DX ==>$'
MSG_SI		DB	CR,LF,'SI ==>$'
MSG_DI		DB	'  DI ==>$'
MSG_BP		DB	'  BP ==>$'
MSG_SP		DB	'  SP ==>$'
MSG_IP		DB	CR,LF,'IP ==>$'

; BUFFERS FOR OUTPUTTING DIGITS AND PRINTING FLAG SETTINGS:

DIGIT_BUF	DB	'      $'
MSG_FLAGS	DB	CR,LF,'FLAGS ==>  - - - - O D I T S Z - A - P - C'
		DB	CR,LF,'           $'
FLAGBUF 	DB	'                               ',CR,LF,'$'

SAVE_DS 	DW	?
SAVE_ES 	DW	?
SAVE_SS 	DW	?
SAVE_SP 	DW	?
SAVE_AX 	DW	?
SAVE_FL 	DW	?

	PAGE
;****************************************************************
;*
;*	REG_DISP MAINLINE
;*
;****************************************************************

MAINLINE	LABEL NEAR

	MOV	CS:SAVE_DS,DS		; SAVE DS & ES
	MOV	CS:SAVE_ES,ES		;
	MOV	CS:SAVE_SS,SS		; SAVE SS:SP SO WE CAN GET
	MOV	CS:SAVE_SP,SP		;  VALUE OF FLAGS
	MOV	CS:SAVE_AX,AX		; SAVE AX BEFORE USING

; EARLY 8088'S MIGHT BOMB HERE IF INTERRUPTS AREN'T DISABLED, BUT I CAN'T
; THINK OF ANY WAY TO SAVE THE INITIAL FLAG SETTINGS WITHOUT USING THE
; STACK, AND I'M NOT ASSUMING THE STACK IS VALID, SO....

	MOV	AX,CS			; SET SS TO CS
	MOV	SS,AX			;
	MOV	SP,OFFSET SHORT_STACK	; WE CAN NOW USE THE STACK

	PUSHF				; SAVE FLAGS BEFORE WE CHANGE THEM
	POP	CS:SAVE_FL		;

; SET UP FOR FAR RETURN TO DOS:

	PUSH	DS			; PTR TO PSP (EITHER .COM OR .EXE)
	SUB	AX,AX			; OFFSET 0
	PUSH	AX			; PUSH IT

	MOV	AX,CS			; SET DS & ES TO CS FOR ADDRESSING DATA
	MOV	DS,AX			;
	MOV	ES,AX			;

	ASSUME DS:CODE,ES:CODE		; TELL MASM

; SAVE ALL ORIGINAL REGISTER VALUES ON THE STACK

	PUSH	SAVE_FL 		;
	MOV	AX,OFFSET REG_DISP	; STARTING VALUE OF IP -- IF THIS WAS
	PUSH	AX			; WRONG, WE'LL NEVER GET HERE
	PUSH	SAVE_SP 		;
	PUSH	BP			; (NOT CHANGED)
	PUSH	DI			; (NOT CHANGED)
	PUSH	SI			; (NOT CHANGED)
	PUSH	DX			; (NOT CHANGED)
	PUSH	CX			; (NOT CHANGED)
	PUSH	BX			; (NOT CHANGED)
	PUSH	SAVE_AX 		;
	PUSH	SAVE_SS 		;
	PUSH	SAVE_ES 		;
	PUSH	SAVE_DS 		;
	PUSH	CS			; (NOT CHANGED)

; NOW DISPLAY EVERYTHING

	MSG_MAC 	MSG_CS, HEXDIG_OUT
	MSG_MAC 	MSG_DS, HEXDIG_OUT
	MSG_MAC 	MSG_ES, HEXDIG_OUT
	MSG_MAC 	MSG_SS, HEXDIG_OUT
	MSG_MAC 	MSG_AX, HEXDIG_OUT
	MSG_MAC 	MSG_BX, HEXDIG_OUT
	MSG_MAC 	MSG_CX, HEXDIG_OUT
	MSG_MAC 	MSG_DX, HEXDIG_OUT
	MSG_MAC 	MSG_SI, HEXDIG_OUT
	MSG_MAC 	MSG_DI, HEXDIG_OUT
	MSG_MAC 	MSG_BP, HEXDIG_OUT
	MSG_MAC 	MSG_SP, HEXDIG_OUT
	MSG_MAC 	MSG_IP, HEXDIG_OUT
	MSG_MAC 	MSG_FLAGS, PRT_FLAGS

	RET		; FAR RETURN TO OFFSET 0 IN PSP

REG_DISP	ENDP

	PAGE
;****************************************************************
;*
;*	HEXDIG_OUT	OUTPUT VALUE IN AX IN HEX TO CONSOLE
;*
;****************************************************************

HEXDIG_OUT	PROC	NEAR

	PUSH	AX
	PUSH	DX
	PUSH	DI

	MOV	DI,OFFSET DIGIT_BUF	; STRING BUFFER ADDRESS
	PUSH	DI			; SAVE FOR LATER
	ADD	DI,5			; POINT TO LAST DIGIT
	STD				; SET FOR AUTO DECREMENT
	PUSH	AX			; SAVE VALUE IN AH
	CALL	HEXDIG_OUT0		; STORE TWO LEAST SIGNIFICANT DIGITS
	POP	AX			; RESTORE VALUE IN AH
	MOV	AL,AH			; GET TWO MOST SIG. DIGITS
	CALL	HEXDIG_OUT0		; STORE THEM
	POP	DX			; PT DX TO BEGINNING OF STRING
	MOV	AH,PRINT_STRING 	; DOS FUNCTION NUMBER
	INT	DOSINT			;

	POP	DI
	POP	DX
	POP	AX
	RET

HEXDIG_OUT0:
	PUSH	AX			; SAVE AL FOR OTHER HALF OF DIGIT
	AND	AL,0FH			; STRIP OFF HIGH DIGIT
	CALL	HEXDIG_OUT1		; STORE LOWER DIGIT
	POP	AX			; GET AL BACK FOR HIGH DIGIT
	SHR	AL,1			; SHIFT INTO LOWER DIGIT
	SHR	AL,1			;
	SHR	AL,1			;
	SHR	AL,1			;
					; THEN STORE LOWER DIGIT
HEXDIG_OUT1:
	OR	AL,30H			; CONVERT 0-9 TO ASCII
	CMP	AL,3AH			;
	JB	HEXDIG_OUT2		;
	ADD	AL,7			; CONVERT 10-15 TO A-F

HEXDIG_OUT2:
	STOSB				; STORE DIGIT IN BUFFER & PT TO NEXT
	RET				; MOST SIGNIFICANT DIGIT

HEXDIG_OUT	ENDP

	PAGE
;****************************************************************
;*
;*	PRT_FLAGS	PRINT FLAG SETTINGS (IN AX) AS 1 OR 0
;*
;****************************************************************

PRT_FLAGS	PROC NEAR

	PUSH	AX
	PUSH	CX
	PUSH	DX
	PUSH	DI
	MOV	DX,AX			; SAVE FLAG SETTINGS IN DX
	MOV	CX,16			; REPEAT FOR EACH BIT
	MOV	DI,OFFSET FLAGBUF	; SET DI TO BUFFER FOR FLAGS
	PUSH	DI			; SAVE FOR DOS CALL
	CLD				; AUTO-INCREMENT
PF_LOOP:
	ROL	DX,1			; GET FLAG BIT IN BIT 0
	MOV	AL,DL			; MOVE BIT TO AL
	AND	AL,1			; ISOLATE IT
	ADD	AL,'0'                  ; MAKE ASCII
	STOSB				; STORE CHAR. IN BUF, BUMP PTR
	INC	DI			; BUMP AGAIN PAST SPACE
	LOOP	PF_LOOP 		; REPEAT WHILE BITS REMAIN

	POP	DX			; RESTORE ADDRESS OF BUFFER
	MOV	AH,PRINT_STRING 	;
	INT	DOSINT			;

	POP	DI
	POP	DX
	POP	CX
	POP	AX
	RET

PRT_FLAGS	ENDP

	EVEN		; PUT STACK ON WORD BOUNDARY

SHORT_STACK	EQU	$ + 100H

CODE	ENDS

END	REG_DISP
```
{% endraw %}

## DPATH.ASM

{% raw %}
```
        page    60,132
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;
;  Copyright (C) 1984  David Micon
;
;  This code may be freely copied or modified, but not sold for
;  profit.
;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
        title   data path
        name    dpath
 
CR      equ     0dh
 
intseg  segment at 0
        org     21h*4
int21   label   word
intseg  ends
 
code    segment para
        assume  cs:code
        org     100h
start:
        jmp     loaddpath
oldint21 dd     ?               ;old interrupt
lstptr  dw      ?               ;dir lst ptr
defdrv  db      ?               ;default drive
func    db      ?               ;interrupt function
alsave  db      ?               ;interrupt al
loadflag db     ?               ;load interrupt flag
 
        even
dpathid equ     4213h
id      dw      0
newint21 label  far
        sti
        cmp     ah,0fh          ;open?
        je      doint0f         ;yes
        cmp     ah,17h          ;rename?
        je      doint0f         ;yes
        jmp     oldint21
doint0f:
        mov     func,ah         ;save function
        mov     alsave,al       ;save al
        pushf
        call    oldint21        ;do open
        cmp     al,0            ;in current dir?
        jne     notincurrent    ;no
        iret
notincurrent:
        mov     lstptr,81h      ;initialize lstptr
        mov     ah,19h
        int     21h             ;get default drive
        mov     defdrv,al       ;save default drive
        push    dx
        push    si
        push    ds
        push    cs
        pop     ds
        mov     si,0
        mov     byte ptr [si],'\' ;put in initial char
        inc     si              ;to next char
        xor     dl,dl           ;do default drive
        mov     ah,47h
        int     21h             ;get current directory
        pop     ds
        pop     si
        pop     dx
lstloop:
        push    di
        push    ds
        push    cs
        pop     ds              ;ds=cs
        mov     di,ds:lstptr
        cmp     byte ptr [di],0 ;done?
        je      lstdone         ;yes
        push    dx
        mov     dl,defdrv       ;get default drive
        mov     ah,0eh
        int     21h             ;set default drive
        cmp     byte ptr [di+1],':' ;drive change needed?
        jne     nochgdrv        ;no
        mov     dl,[di]         ;get drive letter
        and     dl,0dfh         ;make upper case
        sub     dl,'A'          ;convert to binary
        mov     ah,0eh
        int     21h             ;change default drive
nochgdrv:
        mov     dx,di           ;point to string
        mov     ah,3bh
        int     21h             ;change default directory
        pop     dx
        pop     ds
        pop     di
        jc      nxtlst          ;br if dir does not exist
        mov     ah,func         ;set function
        mov     al,alsave       ;restore al
        pushf
        call    oldint21        ;do function
        cmp     al,0            ;function ok?
        je      leave           ;yes
nxtlst:
        push    cx
        push    di
        push    es
        push    cs
        pop     es              ;es=cs
        mov     di,lstptr       ;get list ptr
        mov     cx,80h          ;set count
        mov     al,0
        repnz   scasb           ;look for null
        mov     lstptr,di       ;set new list ptr
        pop     es
        pop     di
        pop     cx
        jmp     lstloop
lstdone:
        pop     ds
        pop     di
        mov     ah,func         ;put in func
        mov     al,0ffh
leave:
        push    ax
        push    dx
        push    ds
        push    cs
        pop     ds              ;ds=cs
        mov     dl,defdrv
        mov     ah,0eh
        int     21h             ;restore default drive
        mov     dx,0
        mov     ah,3bh
        int     21h             ;set dir
        pop     ds
        pop     dx
        pop     ax
        iret
 
loaddpath:
        call    srchdpath       ;dpath installed?
        jnc     loaded          ;yes
        mov     loadflag,1      ;set load flag
        push    cs
        pop     es
        jmp     short procargs
loaded:
        mov     loadflag,0      ;reset load flag
        mov     ax,es           ;get search seg
        xor     dx,dx           ;clear high part
        mov     cx,4
shftlp:
        shl     ax,1            ;shift low
        rcl     dx,1            ;shift high
        loop    shftlp
        add     ax,di           ;add offset
        adc     dx,0            ;add possible carry
        sub     ax,(offset id-offset start)+102h ;sub offset
        sbb     dx,0            ;sub possible borrow
        mov     cx,4
shftlp1:
        shr     dx,1            ;shift high
        rcr     ax,1            ;shift low
        loop    shftlp1
        mov     es,ax           ;point to old segment
procargs:
        push    cs
        pop     ds              ;ds=cs
        mov     si,81h          ;point to src
        mov     di,si           ;point to dst
        cld                     ;move forward
        mov     byte ptr es:[di-1],1 ;make byte before 1st arg non-zero
firstlp:
        lodsb
        cmp     al,' '          ;blank?
        je      firstlp         ;yes
        cmp     al,CR           ;CR?
        jne     argloopst       ;no
        cmp     loadflag,0      ;loaded?
        je      prtdpath        ;yes
        mov     dx,offset noloadmsg
        mov     ah,9
        int     21h             ;print msg
        int     20h
prtdpath:
        mov     dx,offset dpathmsg
        mov     ah,9
        int     21h             ;print dpath msg
        dec     si              ;move back
        push    es
        pop     ds              ;ds=es
        mov     si,81h          ;point to beginning of path names
prtloop:
        lodsb                   ;get byte
        cmp     al,0            ;null?
        je      prtpathend      ;yes
        mov     dl,al
        mov     ah,2
        int     21h             ;print char
        jmp     prtloop
prtpathend:
        mov     dl,';'
        mov     ah,2
        int     21h             ;print semicolon
        cmp     byte ptr [si],0 ;at end?
        jne     prtloop         ;no
        push    cs
        pop     ds              ;ds=cs
        mov     dx,offset crlfmsg
        mov     ah,9
        int     21h             ;print CRLF
        int     20h
argloopst:
        dec     si              ;move back
argloop:
        lodsb                   ;get arg char
        cmp     al,CR           ;CR?
        je      docr            ;yes
        cmp     al,' '          ;space?
        je      argloop         ;yes, skip
        cmp     al,';'          ;semicolon?
        jne     notsemi         ;yes
        mov     al,0            ;set null
notsemi:
        stosb                   ;put char in dst
        jmp     argloop
docr:
        mov     al,0
        cmp     al,byte ptr es:[di-1] ;already null at end?
        je      nullatend       ;yes
        stosb                   ;put in null
nullatend:
        stosb                   ;put in null
        cmp     loadflag,0      ;load?
        jne     doload          ;yes
        int     20h
doload:
        mov     dx,offset loadmsg
        mov     ah,9
        int     21h
        mov     id,dpathid
        mov     ax,intseg
        mov     ds,ax
        assume  ds:intseg
        mov     ax,int21+2      ;get int seg
        mov     word ptr oldint21+2,ax ;save it
        mov     ax,int21        ;get int offset
        mov     word ptr oldint21,ax ;save it
        mov     int21+2,cs      ;set new int seg
        mov     int21,offset newint21 ;set new int offset
        assume  ds:nothing
        mov     dx,offset loaddpath
        int     27h
 
srchdpath proc  near
        xor     ax,ax           ;start at segment 0
        cld
blkloop:
        mov     es,ax           ;set segment
        mov     cx,4000h        ;set count
        mov     di,0
        mov     ax,dpathid
loop1:
        repnz   scasw           ;look for 1st word
        jnz     nxtblk          ;no dpath found in this 32k block
        push    cx              ;save cnt
        push    di              ;save ptr
        mov     si,offset id+2  ;set code offset
        mov     cx,(offset loaddpath-offset id)-2
        repz    cmpsb           ;see if rest is here
        pop     di              ;restore ptr
        pop     cx              ;restore cnt
        jnz     loop1           ;search unsuccessful
        clc                     ;set found flag
        ret
nxtblk:
        mov     ax,es           ;get es
        add     ax,800h         ;to next block
        mov     dx,cs
        cmp     ax,dx           ;done?
        jb      blkloop         ;no
        stc                     ;set not found flag
        ret
srchdpath endp
 
loadmsg db      'Resident part of dpath loaded',13,10,'$'
noloadmsg db    'Dpath not loaded'
crlfmsg db      13,10,'$'
dpathmsg db     'DPATH=$'
code    ends
        end     start
```
{% endraw %}

## DRAWLINE.ASM

{% raw %}
```
         PAGE,132
         PUBLIC DRAWLINE

;        DAN ROLLINS  (213) 246-5021
;
;8088 self-modifying program implements fast-vector algorithm
;described by Michalsky, Doctor Dobb's Journal #74, 12/82
;see also: FAST-LINE DRAWING TECHNIQUE, BYTE, Aug 81
;
;routine expects to be called with DS:SI pointing
;to a list of 2-byte arguments:
;
;     si+0   = x1     starting clm (0-319)
;     si+2   = y1     starting row (0-159)
;     si+4   = x2     ending clm
;     si+6   = y2     ending row
;     si+8   = color  (0,1,2,3)
;     si+10  = length 
;              0    = draw entire line
;              else = draw sub- or super-set of this vector
;     si+12  = skip length
;              number of pels to go before starting to draw
;              0    = draw entire line

;destroys all registers execpt si and segment regs
 
code     group    cseg
cseg     segment  public 'code '
         assume   CS:cseg,DS:nothing,ES:nothing

;make it easier to acceess variables and arguments

x1       equ   word ptr [si]
y1       equ   word ptr [si+2]
x2       equ   word ptr [si+4]
y2       equ   word ptr [si+6]
color    equ   byte ptr [si+8]
len      equ   word ptr [si+10]
skip     equ   word ptr [si+12]
 
;these are values that will be overlayed in the code

INC_X  EQU  41H
DEC_X  EQU  49H
INC_Y  EQU  42H
DEC_Y  EQU  4AH

;these are the addresses where new code is overlayed

ADJ_LONG_AXIS   EQU  BYTE PTR CS:[DI]
ADJ_MASTER      EQU  WORD PTR CS:[DI+3]
TEST_MASTER     EQU  WORD PTR CS:[DI+7]
ALT_ADJ_MASTER  EQU  WORD PTR CS:[DI+13]
ADJ_SHRT_AXIS   EQU  BYTE PTR CS:[DI+15]

DRAWLINE PROC FAR

      MOV   BL,INC_X   ;ASSUME XSTEP = +1
      MOV   AX,X2
      SUB   AX,X1
      JGE   DL1        ;IF X1 <= X2 THEN NO CHANGE

      MOV   BL,DEC_X   ;XSTEP = -1
      NEG   AX         ;Xdist = ABS(Xdist)
dl1:
      MOV   CX,AX      ;SAVE XDIST

      MOV   BH,INC_Y   ;ASSUME YSTEP = +1
      MOV   AX,Y2      
      SUB   AX,Y1
      JGE   DL2        ;IF Y1 <= Y2 THEN NO CHANGE

      MOV   BH,DEC_Y   ;YSTEP = -1
      NEG   AX         ;YDIST = ABS(YDIST)
DL2:
      MOV   DX,AX                     ;SAVE YDIST
      MOV   DI,OFFSET CS:MODIFY_BASE  ;POINT TO THE CODE
                                      ;TO MODIFY
      CMP   DX,CX                     ;DETERMINE LONGEST AXIS
      JGE   DL3                       ;Y IS LONGER, SO SKIP
                   
      XCHG  CX,DX              ;SWAP XDIST, YDIST
      XCHG  BL,BH              ;SWAP INC/DEC X/Y VALUES
DL3:                           ;MODIFY:
      MOV   ADJ_LONG_AXIS,BH   ;THE 1st INC/DEC CODE
      MOV   ADJ_MASTER,CX      ;MAIN DUTY MASTER ADJUSTMENT
      SHR   CX,1               ;SET UP CYCLE TESTER
      MOV   TEST_MASTER,CX     ;TEST FOR CYCLING
      MOV   ALT_ADJ_MASTER,DX  ;ALTERNATE ADJUSTMENT
      MOV   ADJ_SHRT_AXIS,BL   ;ALTERNATE INC/DEC CODE

      MOV   DI,DX      ;DI IS COUNTER: LONG AXIS LENGTH  
      CMP   LEN,0      ;IF LENGTH ARG > 0 
      JE    DL4 
      MOV   DI,LEN     ;THEN USE IT AS COUNTER 
DL4: 
      MOV   BP,SKIP    ;GET SKIP COUNT
      MOV   CX,X1      ;   AND OTHER ARGS
      MOV   DX,Y1
      MOV   AL,COLOR
      XOR   BX,BX      ;DUTY MASTER STARTS = 0
;--------TOP OF VECTOR PLOTTING LOOP--------------------
DL5:
      CMP   BP,0       ;TEST SKIP COUNT
      JE    OK_PLOT    
      DEC   BP
      JMP   SHORT NO_PLOT
OK_PLOT:
      CALL  PLOTDOT    ;PLOT A DOT
;
;MOST OF THE FOLLOWING CODE IS MODIFIED BY THE PREVIOUS SEQUENCE.
;THE 1111H'S ARE DUMMY VALUES THAT ARE ALWAYS OVERLAYED.
;
MODIFY_BASE   LABEL   BYTE
NO_PLOT:
       INC   CX        ;INC/DEC CX/DX: ADJUST LONG AXIS PTR
       ADD   BX,1111H  ;XDIST OR YDIST: ADJUST DUTY MASTER
       CMP   BX,1111H  ;YDIST OR XDIST: CHECK CYCLE POSITION
       JLE   DL6       ;SKIP IF SHORT AXIS IS STILL OK

       SUB   BX,1111H  ;XDIST OR YDIST: ADJUST DUTY MASTER
       INC   DX        ;INC/DEC DX/CX: ADJUST SHORT AXIS PTR
DL6:
       DEC   DI        ;DI IS USED AS COUNTER
       JGE   DL5       ;DO NEXT DOT IF NOT FINISHED
             ;--------------------------------------------------
       RET             ;FAR RETURN BACK TO CALLER
DRAWLINE  ENDP

;this routine plots the pixel at column CX (0-319) or (0-639)
;                                row    DX (0-199)
;                                color  AL (0-3) or (0-1) in high res
;note: a much faster routine
;      can be wiritten to plot dots
;
PLOTDOT  PROC  NEAR
         PUSH  AX
         PUSH  DI      ;BIOS DESTROYS THESE REGISTERS
         PUSH  BP

         MOV   AH,12   ;WRITE_DOT FUNCTION
         INT   10H     ;  VIDEO I/O CALL

         POP   BP
         POP   DI
         POP   AX
         RET           ;NEAR RETURN TO DRAWLINE PROC
PLOTDOT  ENDP
CSEG     ENDS
```
{% endraw %}

## FAST_CIR.ASM

{% raw %}
```
TITLE 'FAST CIRCLE ROUTINE'
 
BIOSCALL MACRO
         INT   10H               ;BIOS service id in AH
         ENDM

STACK SEGMENT PARA STACK 'STACK'
         DB 64 DUP('STACK  ')



STACK    ENDS

CSEG     SEGMENT PARA 'CODE'
;---------------------------------------------
;PROCEDURE CIRCLE (X,Y,RADIUS,NUMER,DEMON,
;                          COLOR:INTEGER)
;Dan Lee   July 1, 1982
;SourceWare
;
;draws a circle at center (x,y) with aspect
;ratio numer/denom; radius in column units
;
;assumes entry via inter-segment call
;
;FRAME:  VALUE X     : BP+16
;        VALUE Y     : BP+14
;        VALUE RADIUS: BP+12
;        VALUE NUMER : BP+10
;        VALUE DENOM : BP+8
;        VALUE COLOR : BP+6
;---------------------------------------------
CIRCLE    PROC FAR
          ASSUME CS:CSEG,SS:STACK
          PUBLIC CIRCLE
          PUSH BP           ;caller's frame pntr
          MOV  BP,SP        ;set proc frame pntr
          MOV  AX,[BP+10]   ;get aspect numer and
          MOV  BX,1000      ;scale it by 1000
          IMUL BX           
          MOV  CX,[BP+8]    ;get aspect denom
          IDIV CX           ;AX=aspect*1000
          PUSH AX           ;store aspect*1000
          XCHG AX,CX        ;get denom in AX
          MOV  CX,[BP+10]   ;get numer in CX
          IMUL BX           ;AX=denom*1000
          IDIV CX           ;AX=inv aspect*1000
          MOV  [BP+8],AX    ;store it
          POP  AX           ;get aspect*1000
          MOV  [BP+10],AX   ;and store it

;
;start by incrementing  Y by one unit and
;decrementing X by TAN units*inv aspect
;start at (RADIUS,Y) and plot to 45 deg
;
          MOV  AX,[BP+12]   ;get radius for
          MOV  BX,1000      ;initial X and scale
          IMUL BX           ;up by 1000
          XOR  DI,DI        ;zero initial Y value

CR5:      PUSH AX           ;save lo word x*1000
          PUSH DX           ;save hi word x*1000
          XOR  BX,BX        ;begin round process
          ADD  AX,500       ;`one-half'
          ADC  DX,BX        
          MOV  BX,1000      ;rescale X by 1000
          IDIV BX           ;to graph
          MOV  BX,AX        ;BX=1st quad X
          ADD  AX,[BP+16]   ;add X origin
          MOV  DX,[BP+14]   ;get Y origin
          SUB  DX,DI        ;and sub Y to plot
          MOV  CX,AX        ;get X to plot
          MOV  AL,[BP+6]    ;get color
          MOV  AH,12        ;write dot funct select
          PUSH AX           ;save write dot parms
          BIOSCALL          ;write 1st quad point
          POP  AX           ;restore write dot parms
          SUB  CX,BX        ;get 2nd quad
          SUB  CX,BX        ;X+origin
          PUSH AX           ;save write dot parms
          BIOSCALL          ;write 2nd quad point
          POP  AX           ;restore write dot parms
          ADD  DX,DI        ;get 3rd quad
          ADD  DX,DI        ;Y+origin
          PUSH AX           ;save write dot parms
          BIOSCALL          ;plot 3rd quad point 
          POP  AX           ;restore write dot parms  
          ADD  CX,BX        ;get 4th quad  
          ADD  CX,BX        ;X+origin  
          BIOSCALL          ;plot 4th quad point 
;  
;cx now at original point 
; 

          XCHG CX,BX        ;get 1st quad X 
          INC  DI           ;get new Y 
          MOV  AX,DI        ;AX=Y 
          MOV  BX,[BP+8]    ;BX=inv aspect*1000  
          IMUL BX           ;AX=Y*inv aspect*1000 
          IDIV CX           ;AX=TAN*inv aspect*1000 
          XOR  DX,DX        ;zero remainder
          MOV  SI,AX        ;SI=TAN*inv aspect*1000
          IDIV BX           ;AX=TAN
          CMP  AX,1         ;TAN=1?
          POP  DX           ;DX=hi word X*1000
          POP  AX           ;AX=lo word X*1000
          JAE  CR7          ;yes, go to next sector
          NEG  SI           ;to decrement *X
          MOV  BX,-1        ;negative carry
          ADD  AX,SI        ;new X value
          ADC  DX,BX        ;hi word carry
          JMP  SHORT CR5    ;plot new point
          
;
;plot 45 to 90 degrees
;now decrease X by one unit and
;increase Y by COT units*aspect ratio
;
CR7:      MOV  AX,DI        ;get nest Y to plot and
          MOV  BX,1000      ;scale by 1000
          IMUL BX           ;DX:AX=Y*1000
          MOV  DI,CX        ;DI=last X value
          DEC  DI           ;next X to plot


CR8:      PUSH AX           ;save lo word Y*1000
          PUSH DX           ;save hi word Y*1000
          XOR  BX,BX        ;begin round process
          ADD  AX,500       ;'one-half'
          ADC  DX,BX        
          MOV  BX,1000      ;rescale Y to plot
          IDIV BX           ;AX=Y
          MOV  BX,AX        ;BX=1st quad Y coord
          ADD  AX,[BP+14]   ;add Y origin
          MOV  CX,[BP+16]   ;CX=X origin
          ADD  CX,DI        ;X to plot
          MOV  DX,AX        ;Y to plot
          MOV  AL,[BP+6]    ;get color
          MOV  AH,12        ;write dot funct select
          PUSH AX           ;save write dot parms
          BIOSCALL          ;write 1st quad point
          POP  AX           ;restore write dot parms
            
          SUB  CX,DI        ;get 2nd quad
          SUB  CX,DI        ;X to plot
          PUSH AX           ;save write dot parms
          BIOSCALL          ;plot 2nd quad point
          POP  AX           ;restore write dot parms
          SUB  DX,BX        ;get 3rd quad
          SUB  DX,BX        ;Y to plot
          PUSH AX           ;save write dot parms
          BIOSCALL          ;write 3rd quad point
          POP  AX           ;restore write dot parms
          ADD  CX,DI        ;get 4th quad
          ADD  CX,DI        ;X to plot
          BIOSCALL          ;plot 4th quad point
          SUB  DX,[BP+14]   ;DX=Y-Y origin
          NEG  DX           ;Y origin adjust
          XCHG CX,DX        ;CX=Y
          OR   DI,DI        ;90 deg?
          JS   CR11         ;yes,exit
          DEC  DI           ;get new X
          MOV  AX,DI        ;AX=X
          MOV  BX,[BP+10]   ;BX=aspect*1000
          IMUL BX           ;AX=aspect*1000*X
          IDIV CX           ;AX=aspect*1000*COT
          MOV  SI,AX        ;SI=change in Y
          
          POP  DX           ;DX=hi word Y*1000
          POP  AX           ;AX=lo word Y*1000
          XOR  BX,BX
          OR   SI,SI        ;for sign check
          JNS  CR10         ;positive
          MOV  BX,-1        ;negitive carry
CR10:     ADD  AX,SI        ;AX=new X value
          ADC  DX,BX        ;hi word carry
          JMP  SHORT CR8    ;plot next point
;         
; exit
;

CR11:     ADD  SP,4         ;adjust stack pntr
          POP  BP           ;caller's frame pntr
          RET  12           ;release parms
CIRCLE    ENDP
CSEG      ENDS
          END
```
{% endraw %}

## FLIST.ASM

{% raw %}
```
	      NAME	FLIST
	      PAGE	60,132
	      TITLE	'FLIST - Alphabetically Sorted List of Diskette Files'
;
; References: 1 	DOS 2.0 Manual
;	      2 	IBM Macro Assembler Manual
;
DATA	      SEGMENT	PARA	  PUBLIC 'DATA'
;
; Extended File Control Block Area (see 1, pages E-10 through E-14 for a
; description of Standard and Extended File Control Blocks):
  FCB_FLAG    DB		  (0)		 ;FCB extension flag
  RES_AREA1   DB	5    DUP  (0)		 ;Reserved space ???
  FCB_ATTR    DB		  (0)		 ;1=read only, 2=hidden file,
; Standard FCB: 				  4=system file (see 1, C.4)
  FCB_DRIVE   DB		  (0)		 ;1=A, 2=B, etc.
  FILE_NAME   DB		  '????????'     ;Left-justfd, trailing blanks
  FILE_EXT    DB		  '???'          ;Left-justfd, trailing blanks
  CUR_BLOCK   DW		  (0)		 ;Current block, starting at 0
  REC_SIZE    DW		  (0)		 ;Initialized to 128 bytes
  FILE_SIZE   DW	2    DUP  (0)		 ;Least-significant word is 1st
  LAST_UPDT   DW		  (0)		 ;Last update (see 1, E-12)
  RES_AREA2   DW	5    DUP  (0)		 ;Reserved space ???
  REL_RECNO   DB		  (0)		 ;Cur. rel. rec. no. (0-127)
  ACT_RECNO   DW	2    DUP  (0)		 ;Actual rec. no. (see 1, E-12)
; End of Extended FCB Area
;
; Extended DOS Disk Transfer Area (see 1, D-22 for a description of the data
; transferred by INT 21H, AH=11, and pages C-3 through C-6 for a description of
; the DOS Disk Directory):
  DTA_FLAG    DB		  (0)		 ;Extension flag from FCB_FLAG
  RES_AREA3   DB	5    DUP  (0)		 ;Reserved space ???
  SRCH_ATTR   DB		  (0)		 ;Search attr. from FCB_ATTR
; Standard DTA:
  DTA_DRIVE   DB		  (0)		 ;1=A, 2=B, etc.
  DTA_FNAME   DB	8    DUP  (0)		 ;First byte indicates status
  DTA_FEXT    DB	3    DUP  (0)		 ;Left-justfd, trailing blanks
  DTA_ATTR    DB		  (0)		 ;File attribute (see FCB_ATTR)
  RES_AREA4   DW	5    DUP  (0)		 ;Reserved space ???
  DTA_TIME    DW		  (0)		 ;Time of last update
  DTA_DATE    DW		  (0)		 ;Date of last update
  STRT_CLSTR  DW		  (0)		 ;First relative cluster number
  DTA_FSIZE   DW	2    DUP  (0)		 ;Least-significant word is 1st
; End of Extended DTA Area
;
; Disk Format Table, used to interpret first byte of the File Allocation Table:
  DISK_FORMAT DB		  (0)		 ;Disk format. See 1, C-7
  FAT_FLAG    DB		  0FFH		 ;2 sided, 8 sectors-per-track
	      DW		  FORMAT_28
	      DB		  0FEH		 ;1 sided, 8 sectors-per-track
	      DW		  FORMAT_18
	      DB		  0FDH		 ;2 sided, 9 sectors-per-track
	      DW		  FORMAT_29
	      DB		  0FCH		 ;1 sided, 9 sectors-per-track
	      DW		  FORMAT_19
	      DB		  0F8H		 ;Fixed disk
	      DW		  FORMAT_FD
	      DB		  0		 ;unknown end of table
	      DW		  FORMAT_??
; End of Disk Format Table
;
; Top Line Information Area:
  TLINE_1     DB	'Sorted Directory for '
  REQ_DRIVE   DB	'@'                      ;The drive for which the dir.
;						  list was requested. A=A, etc.
  TLINE_2     DB	' Drive Diskette   |   UNUSED SPACE = $'
  TLINE_3     DB	'  bytes',0DH,0AH
  TLINE_4     DB	'Current Date: '
  CURMONTH    DW	'00'
  TLINE_5     DB	'/'
  CURDAY      DW	'00'
  TLINE_6     DB	'/'
  CURYEAR     DW	'00'
  TLINE_7     DB	'    Time: '
  CURHOUR     DW	'00'
  TLINE_8     DB	':'
  CURMIN      DW	'00'
  TLINE_9     DB	'   |   DISK FORMAT  =  $'
  FORMAT_18   DB	'1 sided 8 sectored$'
  FORMAT_28   DB	'2 sided 8 sectored$'
  FORMAT_19   DB	'1 sided 9 sectored$'
  FORMAT_29   DB	'2 sided 9 sectored$'
  FORMAT_FD   DB	'fixed disk$'
  FORMAT_??   DB	'unknown$'
  COL_TITLES  DB	'Filename.Ext        Size      Date$'
;
; End of Top Line Information Area
;
  SKIP_1      DW	0D0AH			 ;Carriage return / line feed
  CR_LF       DW	0D0AH			 ;Carriage return / line feed
  PRINT_END   DB	'$'                      ;Print string terminator
  TAB_4       DB	'    $'
  TAB_6       DB	'      $'
  TAB_8       DB	'        $'
;
  DEF_DRIVE   DB		  (0)		 ;Default drive: 0=A, 1=B, etc.
  FILE_COUNT  DW		  (0)		 ;Number of files in the disk
;						  directory which conform to
;						  the user-specified parameter
  FIRST_ENTRY DW		  (0)		 ;Points to the first entry in
;						 ;alpha-sorted DIR_LIST
  MID_ENTRY   DW		  (0)		 ;Points to the entry half-way
;						  down the sorted DIR_LIST
  LAST_ENTRY  DW		  (0)		 ;Points to the byte after the
;						  last entry in DIR_LIST
  FREE_SPACE  DW	2    DUP  (0)		 ;The unused or available space
;						  on the disk
  DIR_LIST    DB		  (0)		 ;Area used to save file
;						  directory data which conform
;						  to the user-specified param.
;	      The structure of each entry in
;	      DIR_LIST is as follows:
;
;	      link pointer	     2 bytes (1 word)
;	      filename		     8 bytes
;	      . separator	     1 byte
;	      file extension	     3 bytes
;	      date of last update    2 bytes (1 word)
;	      file size in bytes     4 bytes (2 words)
;				    --------
;	      size of each entry:   20 bytes
;
DATA	      ENDS
;
	      USER_PARMS     EQU  05CH
	      INT24_SEG      EQU  090H
	      INT24_OFF      EQU  092H
;
CODE	      SEGMENT	PARA	  PUBLIC 'CODE'
MAIN	      PROC	FAR
	      ASSUME	CS:CODE, SS:STACK
;
; Standard Program Prologue:
;
	      PUSH	DS			 ;Save PSP Segment Address
	      XOR	AX,AX			 ;Zero out AX and push it to
	      PUSH	AX			 ;save PSP Offset Address
;
; Establish Extra Segment Addressability:
;
	      MOV	AX,DATA 		 ;Point ES to Data Segment and
	      MOV	ES,AX			 ;establish Extra Segment
	      ASSUME	ES:DATA 		 ;Addressability
;
	      CALL	GET_PARMS
;
; Establish Data Segment Addressability:
;
	      PUSH	ES			 ;Point DS to ES, i.e. our Data
	      POP	DS			 ;Segment, and establish Data
	      ASSUME	DS:DATA 		 ;Segment Addressability
;
;
	      CALL	SETUP_DRIVE
;
	      CALL	SETUP_FCB
;
	      CALL	GET_ENTRIES
;
	      CALL	SORT_ENTRIES
;
	      CALL	FIND_MIDDLE
;
	      CALL	GET_FAT_INFO
;
	      CALL	DISPLAY_TOP
;
	      CALL	LIST_ENTRIES
;
	      CALL	RESET_DRIVE
;
	      RET				 ;Return control to DOS
;
; Move user-specified parameters (if any) from the first formatted FCB area in
; the PSP into the Extended FCB Area in our Data Segment:
;
GET_PARMS     PROC	NEAR
	      MOV	SI,USER_PARMS		 ;1st parm offset in PSP
	      MOV	DI,OFFSET FCB_DRIVE	 ;Offset within our FCB area
	      MOV	CX,1			 ;Initialize count to 1
	      CMP	BYTE PTR[SI+01],' '      ;Second byte is blank if the
;						  user specified no parameters
	      JE	SHORT XFER_PARM 	 ;Jump if no parms specified
	      ADD	CX,11			 ;Otherwise, let CX = 12
XFER_PARM:
	      CLD				 ;Set 'forward' MOVSB operation
	      REP	MOVSB			 ;Transfer parameters
	      RET
GET_PARMS     ENDP
;
SETUP_DRIVE   PROC	NEAR
;
; Find the default drive and save the default drive code in DEF_DRIVE:
;
	      MOV	AH,19H			 ;See 1, D-26
	      INT	21H			 ;Code is returned in AL:
	      MOV	DEF_DRIVE,AL		 ;0=A, 1=B, etc.
;
; If the user did not specify a drive in his parameters, FCB_DRIVE is 0. This
; must be changed to reflect the default drive code stored in DEF_DRIVE:
;
	      MOV	DL,FCB_DRIVE		 ;0=default, 1=A, 2=B, etc.
	      DEC	DL			 ;-1=default, 0=A, 1=B, etc.
	      JNS	SHORT CHECK_DRIVE	 ;If user specified a drive,
;						  value of DL is "not signed"
;						  (DL => 0) so jump, i.e. DON'T
;						  adjust the value of DEF_DRIVE
	      INC	AL			 ;Otherwise, set FCB_DRIVE to
	      MOV	FCB_DRIVE,AL		 ;DEF_DRIVE: 1=A, 2=B, etc.
	      JMP	END_OF_CHECK
CHECK_DRIVE:
;
; Change the default drive to that specified in the user parameters.
; The drive specified by the user is not necessarily valid.
;
	      MOV	AH,0EH			 ;Use DL value to set default
	      INT	21H			 ;drive (0=A, 1=B, etc.)
	      INC	DL			 ;Number of drives is returned
	      CMP	DL,AL			 ;in AL (1=1 drive, etc.)
	      JNA	END_OF_CHECK
	      MOV	DL,DEF_DRIVE		 ;The user specified an invalid
	      INC	DL			 ;drive so set the FCB_DRIVE to
	      MOV	FCB_DRIVE,DL		 ;the default drive
END_OF_CHECK:
	      MOV	AL,FCB_DRIVE		 ;Record the value of FCB_DRIVE
	      ADD	REQ_DRIVE,AL		 ;as a letter (A=1, B=2, etc.)
	      RET
SETUP_DRIVE   ENDP
;
; Initialize the Extended FCB Area in our Data Segment to indicate that it is
; an Extended FCB and that we want to retrieve ALL files (including read-only,
; hidden, and system files) from the disk directory:
;
SETUP_FCB     PROC	NEAR
	      MOV	AL,0FFH
	      MOV	FCB_FLAG,AL		 ;See 1, E-14
	      MOV	AL,00000111B		 ;See 1, C-4,C-5, and D-22,D-23
	      MOV	FCB_ATTR,AL		 ;See 1, E-14
	      RET
SETUP_FCB     ENDP
;
; Move each entry in the disk directory which conforms to the user parameters
; into the DIR_LIST in our Data Area:
;
GET_ENTRIES   PROC	NEAR
	      MOV	BX,OFFSET DIR_LIST	 ;Initialize LAST_ENTRY to
	      MOV	LAST_ENTRY,BX		 ;beginning of DIR_LIST area
;
	      MOV	DX,OFFSET DTA_FLAG	 ;Point DS:DX, the Disk
;						  Transfer Address, to our DTA
;						  Area so that data transferred
;						  from the disk will appear in
;						  Data Seg rather than the PSP
	      MOV	AH,1AH			 ;Set Disk Transfer Address
	      INT	21H			 ;(DTA) to DS:DX (see 1, D-26)
;
	      MOV	DX,OFFSET FCB_FLAG	 ;Point DS:DX to our unopened
	      MOV	AH,11H			 ;FCB Area and go looking for
	      INT	21H			 ;the first match-up. If no
;						  files match-up whatsoever,
;						  AL returns  with a value of
	      OR	AL,AL			 ;FF. Otherwise, AL is zero.
	      JNZ	END_XFER		 ;If no entry whatsoever, jump
;						  Otherwise:
DIR_XFER:
	      MOV	SI,OFFSET DTA_FNAME	 ;Point to transferred filename
	      MOV	DI,LAST_ENTRY		 ;Point DI to next entry space
	      LEA	DI,[DI+02]		 ;in our DIR_LIST. Leave 2
;						  bytes for the link pointer
	      MOV	CX,8			 ;8 byte filename to move
	      CLD				 ;Set 'forward' MOVSB operation
	      REP	MOVSB			 ;Transfer the filename from
;						  the DTA to the DIR_LIST
	      MOV	BYTE PTR [DI],'.'        ;Set filename.ext period
	      INC	DI
	      MOV	CX,3			 ;3 byte file extension to move
	      REP	MOVSB			 ;Transfer the file extension
	      MOV	SI,OFFSET DTA_DATE	 ;Transfer the date the file
	      MOVSW				 ;was created or last updated
	      MOV	SI,OFFSET DTA_FSIZE	 ;Transfer size of file (bytes)
	      MOVSW				 ;Least-significant part of the
	      MOVSW				 ;size is stored in 1st word
;
	      ADD	BX,20			 ;Each entry in DIR_LIST uses
	      MOV	LAST_ENTRY,BX		 ;20 bytes. Update LAST_ENTRY
	      INC	WORD PTR FILE_COUNT	 ;1 more file in the list
;
	      MOV	DX,OFFSET FCB_FLAG	 ;Reset DS:DX to the start of
	      MOV	AH,12H			 ;our FCB Area and go looking
	      INT	21H			 ;for the next match-up in the
;						  disk directory
	      OR	AL,AL			 ;Any more match-ups?
	      JZ	DIR_XFER		 ;If so, jump back baby
END_XFER:
	      RET
GET_ENTRIES   ENDP
;
; The following code uses a bubble sort to establish a linked list of entries
; in DIR_LIST. The link pointers are stored in the first word of each entry in
; DIR_LIST and the variable FIRST_ENTRY points to the first entry in the sorted
; list. The link pointer in this first entry points to the second entry, etc.
; The last entry in the sorted list has a link pointer value of zero.
;
; At the start of each pass in the bubble sort, DI is set to the first entry
; in the sub-list sorted so far and SI points to the DIR_LIST entry being
; added to the sorted sub-list.  During the pass, DI moves up the sorted sub-
; list and the filename beginning at [DI+02] is compared to the filename at
; [SI+02].  BX points to the previous value of DI.  When the correct location
; for the SI entry is found in the sorted sub-list (entry in BX < entry in SI
; < entry in DI), the link pointer in BX is set to the offset of the SI entry
; and the link pointer in SI is set to the offset of the DI entry.
; i.e., BX points to SI and SI points to DI.
; A value of DI = 0 indicates that we are at the top of the sorted sub-list.
;
SORT_ENTRIES  PROC	NEAR
	      MOV	SI,OFFSET DIR_LIST	 ;Initially, select the first
;						  entry in DIR_LIST for sort
	      CMP	SI,LAST_ENTRY		 ;If no entries in DIR_LIST,
	      JE	SHORT	  END_SORT	 ;bypass the sort step
NEW_PASS:
	      MOV	DI,OFFSET FIRST_ENTRY	 ;Point DI to the first entry
;						  in the sorted sub-list of
;						  DIR_LIST entries
NEXT_COMPARE:
	      MOV	BX,DI			 ;Update DI, retaining previous
	      MOV	DI,[BX] 		 ;value of DI in BX
	      OR	DI,DI			 ;Are we at the top of the
	      JZ	FIX_PTRS		 ;sub-list? If so, jump
	      PUSH	SI
	      PUSH	DI
	      LEA	SI,[SI+02]		 ;If not, compare the filenames
	      LEA	DI,[DI+02]		 ;pointed to by SI and DI
	      MOV	CX,12			 ;12 chars in "filename.ext"
	      CLD				 ;Set 'forward' CMPSB operation
	      REPE	CMPSB			 ;Compare until different:
;						  (value in SI - value in DI)
;						  i.e. result is positive if
;						  SI entry > DI entry
	      POP	DI
	      POP	SI
	      JA	NEXT_COMPARE		 ;If the entry in SI is alpha-
;						  betically greater than the
;						  entry in DI, try the next
;						  entry in the sorted sub-list
FIX_PTRS:
	      MOV	[BX],SI 		 ;Point BX entry to SI entry
	      MOV	[SI],DI 		 ;Point SI entry to DI entry
	      ADD	SI,20			 ;Point SI to next entry in
;						  DIR_LIST to be sorted
	      CMP	SI,LAST_ENTRY		 ;Proceed with a new pass only
	      JB	NEW_PASS		 ;if we are not at the end of
;						  DIR_LIST
END_SORT:
	      RET
SORT_ENTRIES  ENDP
;
; The screen display is going to list the files in two columns.  To do this we
; must know the file entry in DIR_LIST which is half-way down the list, as
; this will be displayed on the right-hand side of the screen against the first
; entry in the list which will be displayed on the left-hand side, and so on
; down the list.  So here goes:
;
FIND_MIDDLE   PROC	NEAR
	      MOV	CX,FILE_COUNT
	      SAR	CX,1			 ;CX = FILE_COUNT / 2
	      JZ	NO_RHS
	      ADC	CL,00			 ;Add 0 to CL ???
	      MOV	BX,OFFSET FIRST_ENTRY
NEXT_ENTRY:
	      MOV	BX,[BX] 		 ;Find the entry which is half-
	      LOOP	NEXT_ENTRY		 ;way down the sorted DIR_LIST
	      MOV	AX,[BX]
	      MOV	MID_ENTRY,AX		 ;Save the list mid-point
	      XOR	AX,AX
	      MOV	[BX],AX 		 ;Set the link pointer in the
;						  mid-point entry to zero
NO_RHS:
	      RET
FIND_MIDDLE   ENDP
;
; Read the File Allocation Table information. See 1, C-1, C-2, C-6 through C-9,
; and D-26.
;
GET_FAT_INFO  PROC	NEAR
	      PUSH	DS			 ;DS is destroyed by next
;						  DOS function call
	      MOV	AH,1BH			 ;Get DOS File Allocation Table
	      INT	21H			 ;information. See 1, A-12
;				     On return, DS:BX points to FAT i.d. byte
;				     AL = number of sectors per cluster
;				     CX = number of bytes per sector
;				     DX = number of clusters (allocation units)
	      POP	DS			 ;Restore DS to Data Segment
	      XCHG	CX,DX			 ;Swap values in CX and DX
	      XOR	AH,AH			 ;Zero out AH
	      MUL	DX			 ;Multiply the no. of sectors
;						  per cluster (AX) by the
;						  physical sector size (DX)
	      PUSH	AX			 ;Save AX = number of bytes per
;						  cluster
	      PUSH	CX			 ;Save number of clusters (for
;						  future use as loop counter)
	      MOV	AH,2			 ;Read sectors into memory
	      MOV	AL,2			 ;Read two sectors
	      MOV	BX,OFFSET DIR_LIST+800H  ;Point ES:BX to buffer address
;						  at 2K bytes above DIR_LIST
	      XOR	CH,CH			 ;Read track zero
	      MOV	CL,2			 ;Start reading at sector 2
	      XOR	DH,DH			 ;Read side zero (head 0)
	      MOV	DL,FCB_DRIVE		 ;1=A, 2=B, etc.
	      DEC	DL			 ;0=A, 1=B, etc.
	      INT	13H			 ;Diskette I/O BIOS interrupt
	      MOV	AL,DIR_LIST+800H	 ;Store first byte of FAT in
	      MOV	DISK_FORMAT,AL		 ;DISK_FORMAT.	See 1, C-7
	      POP	CX			 ;Number of clusters on disk
	      XOR	AX,AX			 ;AX is used to accumulate the
;						  number of clusters unused or
;						  available on the disk
	      MOV	SI,02			 ;Point to the cluster which
;						  begins mapping of the data
;						  area on the disk (see 1, C-7)
NEXT_CLUSTER:
	      MOV	DI,SI			 ;DI = SI
	      SHR	DI,1			 ;DI = SI/2
	      ADD	DI,SI			 ;DI = 1.5 * SI, i.e. the byte
;						  offset from the beginning of
;						  the FAT corresponding to the
;						  cluster numbered SI
	      MOV	DI,[BX+DI]		 ;The address of the FAT entry
	      TEST	SI,01			 ;If SI is even (right-most
	      JZ	EVEN_CLUSTER		 ;bit is 0), jump
	      SHR	DI,1			 ;Keep the 12 high-order bits
	      SHR	DI,1			 ;of DI.  This is the fastest
	      SHR	DI,1			 ;way to shift right 4 times,
	      SHR	DI,1			 ;dividing DI by 16 (8 clocks)
EVEN_CLUSTER:					 ;See 1, C-8, C-9
	      AND	DI,0FFFH		 ;Check 12 low-order bits for
	      JNZ	IN_USE			 ;000 (unused space)
	      INC	AX			 ;AX = number of clusters not
;						  in use on the disk
IN_USE:
	      INC	SI			 ;Point to the next cluster in
;						  the File Allocation Table
	      LOOP	NEXT_CLUSTER
	      POP	DX			 ;DX = number of bytes per
;						  cluster
	      MUL	DX			 ;AX = number of bytes not in
;						  use on the disk. DX is set to
;						  most-significant word of
;						  AX*DX result. See 2, 6-114
	      MOV	FREE_SPACE,AX		 ;Save least-significant and
	      MOV	FREE_SPACE+02,DX	 ;most-sig. words of FREE_SPACE
	      PUSH	DS			 ;Save pointer to Data Seg
	      XOR	AX,AX
	      MOV	DS,AX			 ;Point DS to interrupt vectors
	      MOV	SI,[DS:INT24_SEG]	 ;Segment address for INT 24H
	      MOV	DI,[DS:INT24_OFF]	 ;Offset address for INT 24H
	      PUSH	DS			 ;Save interrupt vector DS
	      PUSH	CS
	      POP	DS			 ;Point DS to Code Segment
	      MOV	DX,OFFSET INT_24H	 ;Set interrupt vector for
	      MOV	AL,24H			 ;INT 24H to point to service
	      MOV	AH,25H			 ;routine in our Code Segment
	      INT	21H			 ;See 1, D-28
	      POP	DS			 ;Reset DS to interrupt vectors
	      MOV	AH,0DH			 ;Disk reset - flushes all file
	      INT	21H			 ;buffers. See 1, D-20
	      MOV	[DS:INT24_SEG],SI	 ;Reset interrupt vector for
	      MOV	[DS:INT24_OFF],DI	 ;INT 24H to original address
	      POP	DS			 ;Restore DS to Data Segment
	      RET
GET_FAT_INFO  ENDP
;
; Replacement for DOS interrupt 24H, used in PROC GET_FAT_INFO:
;
INT_24H       PROC	NEAR
	      STI				 ;Set Interrupt Flag
	      XOR	AX,AX			 ;Zero out value of AX
	      IRET				 ;Interrupt Return
INT_24H       ENDP
;
; Display the title line, including the requested drive and the available space
; on the disk. The value in FREE_SPACE must be converted from a 4-byte binary
; number to a multi-byte ASCII unpacked number before it can be displayed !!
;
DISPLAY_TOP   PROC	NEAR
	      MOV	DX,OFFSET CR_LF
	      MOV	AH,9			 ;Print string at DX,
	      INT	21H			 ;terminated by $ sign
;
; Print the title line, including the requested drive and the unused
; (available) space on the diskette.
;
	      MOV	DX,OFFSET TLINE_1	 ;Display the first part of the
	      MOV	AH,9			 ;display line (up to the no.
	      INT	21H			 ;of bytes of free space)
	      MOV	SI,FREE_SPACE		 ;Create an ASCII string of
	      MOV	DI,FREE_SPACE+02	 ;decimal numbers equivalent to
	      CALL	BIN_TO_ASCII		 ;the binary number stored in
;						  SI:DI, and display the string
	      MOV	AH,2AH			 ;Get cur. date. Date returned
	      INT	21H			 ;in CX:DX. See 1, D-31
	      MOV	AL,DH			 ;Move month (1-12) into AL
	      AAM				 ;ASCII adjust for multiply
	      XCHG	AL,AH			 ;Put least-sig. byte first
	      OR	CURMONTH,AX		 ;Store month in display line
	      MOV	AL,DL			 ;Move day (1-31) into AL
	      AAM
	      XCHG	AL,AH
	      OR	CURDAY,AX		 ;Store day in display line
	      MOV	AX,CX			 ;Move year (1980-2099) into AL
	      SUB	AX,1900 		 ;Convert to (80-199)
	      AAM
	      XCHG	AL,AH
	      OR	CURYEAR,AX		 ;Store year in display line
	      MOV	AH,2CH			 ;Get cur. time. Time returned
	      INT	21H			 ;in CX:DX. See 1, D-31
	      MOV	AL,CH			 ;Move hours (0-23) into AL
	      AAM
	      XCHG	AL,AH
	      OR	CURHOUR,AX		 ;Store hours in display line
	      MOV	AL,CL			 ;Move minutes (0-59) into AL
	      AAM
	      XCHG	AL,AH
	      OR	CURMIN,AX		 ;Store minutes in display line
;
	      MOV	DX,OFFSET TLINE_3	 ;Display some more of the
	      MOV	AH,9			 ;title line
	      INT	21H
;
; Determine the disk format and display the appropriate message:
;
	      MOV	BL,DISK_FORMAT
	      MOV	SI,OFFSET FAT_FLAG
	      CLD				 ;Set 'forward' LODSB operation
NEXT_FORMAT:
	      LODSB				 ;Load byte addressed by SI
;						  into AL and increase SI
	      OR	AL,AL			 ;If zero, we didn't match up
;						  any valid format type
	      JZ	SHORT DISP_FORMAT
	      CMP	AL,BL			 ;Check byte from table against
;						  first byte from FAT
	      JZ	SHORT DISP_FORMAT
	      ADD	SI,02			 ;Skip past the improper msg.
	      JMP	NEXT_FORMAT		 ;Check for next format type
DISP_FORMAT:
	      LODSW				 ;Load word addressed by SI
;						  into AX and increase SI, i.e.
	      MOV	DX,AX			 ;Pick up message address,
	      MOV	AH,9			 ;store address in DX, and
	      INT	21H			 ;display the message
	      MOV	DX,OFFSET CR_LF 	 ;Carriage return, line feed
	      MOV	AH,9
	      INT	21H
; Display the column titles on the left-half of the screen and, if
; appropriate, also display them on the right-half of the screen
;
	      MOV	DX,OFFSET COL_TITLES
	      MOV	AH,9
	      INT	21H
	      CMP	WORD PTR  MID_ENTRY,0	 ;Are there any entries for the
	      JZ	LINE_FEED		 ;right-half of the screen?
	      MOV	DX,OFFSET TAB_8
	      MOV	AH,9
	      INT	21H
	      MOV	DX,OFFSET COL_TITLES
	      MOV	AH,9
	      INT	21H
LINE_FEED:
	      MOV	DX,OFFSET SKIP_1
	      MOV	AH,9
	      INT	21H
	      RET
DISPLAY_TOP   ENDP
;
; Display the lines containing the filenames, their sizes, and dates of last
; update. File sizes are stored as 4-byte binary numbers. The least-significant
; part of the number is in the first 2 bytes.
;
LIST_ENTRIES  PROC	NEAR
NEXT_LINE:
	      MOV	BX,FIRST_ENTRY		 ;Point BX to the LHS entry to
	      OR	BX,BX			 ;be displayed
	      JZ	END_OF_LIST
	      MOV	AX,[BX] 		 ;Adjust FIRST_ENTRY so that it
	      MOV	FIRST_ENTRY,AX		 ;points to the following entry
;						  to be displayed on the LHS
	      CALL	DISPLAY_ENTRY
	      MOV	BX,MID_ENTRY		 ;Point BX to the RHS entry to
	      OR	BX,BX			 ;be displayed
	      JZ	END_OF_LINE
	      MOV	DX,OFFSET TAB_6 	 ;Leave 6 spaces down the
	      MOV	AH,9			 ;middle of the screen,
	      INT	21H			 ;separating LHS and RHS.
	      MOV	AX,[BX] 		 ;Adjust MID_ENTRY so that it
	      MOV	MID_ENTRY,AX		 ;points to the following entry
;						 ;to be displayed on the RHS
	      CALL	DISPLAY_ENTRY
END_OF_LINE:
	      MOV	DX,OFFSET CR_LF
	      MOV	AH,9
	      INT	21H
	      JMP	NEXT_LINE
END_OF_LIST:
	      RET
LIST_ENTRIES  ENDP
;
; Reset the default drive to its original status, as saved in DEF_DRIVE:
;
RESET_DRIVE   PROC	NEAR
	      MOV	DL,DEF_DRIVE		 ;Reset the default drive to
	      MOV	AH,0EH			 ;the value stored in DEF_DRIVE
	      INT	21H
	      RET
RESET_DRIVE   ENDP
;
; Display the filename, extension, size, and date of last update for the file
; in DIR_LIST pointed to by BX.
;
DISPLAY_ENTRY PROC	NEAR
	      MOV	CX,12
	      XOR	DI,DI
NEXT_CHAR:
	      MOV	DL,[BX+DI+02]		 ;Display the filename, period
	      MOV	AH,02			 ;separator, and file extension
	      INT	21H			 ;(12 bytes), 1 byte at a time
	      INC	DI			 ;Point to next character
	      LOOP	NEXT_CHAR		 ;Loop controlled by CX
	      PUSH	BX
	      MOV	SI,[BX+16]		 ;SI = least-significant word &
	      MOV	DI,[BX+18]		 ;DI = most-significant word of
;						  binary number to be unpacked
	      CALL	BIN_TO_ASCII
	      POP	BX
	      MOV	DX,OFFSET TAB_4 	 ;Leave 4 spaces between the
	      MOV	AH,9			 ;file size and the date of
	      INT	21H			 ;last update
	      MOV	AX,[BX+14]		 ;AX = the date of last update
	      CALL	DISPLAY_DATE
	      RET
DISPLAY_ENTRY ENDP
;
; Interpret AX as a date and display it on the screen as an 8 character string:
;				(MM/DD/YY)
;
DISPLAY_DATE  PROC	NEAR
	      OR	AX,AX
	      JNZ	REAL_DATE
	      MOV	DX,OFFSET TAB_8 	 ;Word at AX is all-zero so
	      MOV	AH,9			 ;display 8 blanks instead of
	      INT	21H			 ;a real date value
	      RET
REAL_DATE:
	      PUSH	AX			 ;Save date value stored in AX
	      AND	AX,0000000111100000B	 ;Extract the month value from
	      MOV	CL,5			 ;the date. See 1, C-5
	      SHR	AX,CL			 ;Get rid of 5 least-sig. bits
	      CALL	DISPLAY_CHARS
	      MOV	DL,'/'                   ;Display the slash separator
	      MOV	AH,2			 ;between the month and day
	      INT	21H			 ;of last update
	      POP	AX			 ;Restore date value to AX
	      PUSH	AX			 ;and save it again
	      AND	AX,0000000000011111B	 ;Extract the day value from
	      CALL	DISPLAY_CHARS		 ;the date. No shift necessary
	      MOV	DL,'/'
	      MOV	AH,2			 ;Slash is between day and year
	      INT	21H			 ; of last update
	      POP	AX
	      AND	AX,1111111000000000B	 ;Extract the year value from
	      MOV	CL,9			 ;the date.  Get rid of the 9
	      SHR	AX,CL			 ;least-significant bits in AX
	      ADD	AX,80			 ;Zero value corresponds to
	      CALL	DISPLAY_CHARS		 ;1980.  See 1, C-5
	      RET
DISPLAY_DATE  ENDP
;
; Convert the binary number stored in AX to a decimal number and display it as
; 2 digits.
;
DISPLAY_CHARS PROC NEAR
	      AAM
	      OR	AX,3030H		 ;30H = 48 = ASCII value of 0
	      PUSH	AX
	      MOV	DL,AH			 ;Display first digit of date
	      MOV	AH,2			 ;field
	      INT	21H
	      POP	AX
	      MOV	DL,AL			 ;Display second digit of date
	      MOV	AH,2			 ;field
	      INT	21H
	      RET
DISPLAY_CHARS ENDP
;
; Convert the 2-word binary number stored in SI:DI (where SI contains the
; least-significant part of the binary number and DI contains the
; most-significant part) into a multi-byte string containing the ASCII
; representation of the corresponding decimal number, and display the ASCII
; string on the screen at the current cursor location.
;
BIN_TO_ASCII  PROC	NEAR
	      XOR	AX,AX
	      MOV	BX,AX
	      MOV	BP,AX
	      MOV	CX,32			 ;32 bits to convert
NEXT_BIT:
	      SHL	SI,1
	      RCL	DI,1
	      XCHG	AX,BP
	      CALL	BTOA_SUBR4
	      XCHG	AX,BP
	      XCHG	AX,BX
	      CALL	BTOA_SUBR4
	      XCHG	AX,BX
	      ADC	AL,0
	      LOOP	NEXT_BIT
	      MOV	CX,1B10H
	      CALL	BTOA_SUBR1
	      MOV	AX,BX
	      CALL	BTOA_SUBR1
	      MOV	AX,BP
	      CALL	BTOA_SUBR1
	      RET
BIN_TO_ASCII  ENDP
;
;
;
BTOA_SUBR1    PROC	NEAR
	      PUSH	AX
	      MOV	DL,AH
	      CALL	BTOA_SUBR2
	      POP	DX
	      CALL	BTOA_SUBR2
	      RET
BTOA_SUBR1    ENDP
;
;
;
BTOA_SUBR2    PROC	NEAR
	      MOV	DH,DL
	      SHR	DL,1
	      SHR	DL,1
	      SHR	DL,1
	      SHR	DL,1
	      CALL	BTOA_SUBR3
	      MOV	DL,DH
	      CALL	BTOA_SUBR3
	      RET
BTOA_SUBR2    ENDP
;
;
;
BTOA_SUBR3    PROC	NEAR
	      AND	DL,0FH
	      JZ	SHORT	  TARGET
	      MOV	CL,0
TARGET:
	      DEC	CH
	      AND	CL,CH
	      OR	DL,48			 ;48 = ASCII value of zero
	      SUB	DL,CL			 ;Display the character in DX
	      MOV	AH,2			 ; on the screen
	      INT	21H
	      RET
BTOA_SUBR3    ENDP
;
;
;
BTOA_SUBR4    PROC	NEAR
	      ADC	AL,AL
	      DAA
	      XCHG	AL,AH
	      ADC	AL,AL
	      DAA
	      XCHG	AL,AH
	      RET
BTOA_SUBR4    ENDP
MAIN	      ENDP
CODE	      ENDS
;
STACK	      SEGMENT	PARA	  STACK 'CODE'
	      DB	128  DUP  (0)		 ;128 Byte Stack Space
STACK	      ENDS
	      END	MAIN
```
{% endraw %}

## HELLO.ASM

{% raw %}
```
         NAME      HELLO
         PAGE      55,132
         TITLE     'HELLO --- PRINT HELLO ON TERMINAL'
;
; HELLO UTILITY TO DEMONSTRATE VARIOUS PARTS
; OF A FUNCTIONAL ASSEMBLY LANGUAGE PROGRAM,
; USE OF SEGMENTS, AND A PC-DOS FUNCTION CALL.
;
; RAY DUNCAN, SEPTEMBER 1983
;
                             ;SHOW USE OF SOME EQUATES:
CR       EQU       0DH       ;ASCII CARRIAGE RETURN
LF       EQU       0AH       ;ASCII LINE FEED
                             ;
;
                             ;BEGIN THE "CODE" SEGMENT
                             ;CONTAINING EXECUTABLE
                             ;MACHINE CODE
CSEG     SEGMENT   PARA PUBLIC 'CODE'
;
         ASSUME    CS:CSEG,DS:DSEG,SS:STACK
;
PRINT    PROC      FAR       ;ACTUAL PROGRAM CODE
                             ;IS COMPLETELY CONTAINED
                             ;IN THE "PROCEDURE" NAMED
                             ;"PRINT".
                             ;
         PUSH      DS        ;SAVE DS:0000 ON STACK
         XOR       AX,AX     ;FOR FINAL EXIT TO PC-DOS.
         PUSH      AX
                             ;SET DATA SEGMENT REGISTER
                             ;TO POINT TO THE DATA SEGMENT
                             ;OF THIS PROGRAM, SO THAT THE
                             ;MESSAGE WE WANT TO PRINT IS
                             ;ADDRESSABLE.
         MOV       AX,SEG DSEG
         MOV       DS,AX
                             ;NOW PUT THE OFFSET OF THE
                             ;MESSAGE TEXT INTO DX,
         MOV       DX,OFFSET MESSAGE
                             ;NOW DS:DX SPECIFIES THE
                             ;FULL ADDRESS OF THE MESSAGE.
         MOV       AH,9      ;USE THE PC-DOS FUNCTION 9
         INT       21H       ;TO PRINT THE STRING.
                             ;
         RET                 ;NOW RETURN TO PC-DOS USING
                             ;THE ADDRESSES WE PUSHED ON
                             ;THE STACK AT ENTRY.
                             ;
PRINT    ENDP                ;END OF THE "PROCEDURE"
                             ;NAMED "PRINT"
                             ;
CSEG     ENDS                ;END OF THE CODE SEGMENT
                             ;CONTAINING EXECUTABLE
                             ;PROGRAM.
                             ;
                             ;NOW WE DEFINE A DATA SEGMENT
                             ;CONTAINING OUR PROGRAM'S
                             ;CONSTANTS AND VARIABLES.
DSEG     SEGMENT   PARA 'DATA'
                             ;
MESSAGE  DB        CR,LF,'HELLO!',CR,LF,'$'
                             ;
DSEG     ENDS
                             ;
                             ;LASTLY, WE DEFINE A STACK
                             ;SEGMENT WHICH CONTAINS
                             ;A SCRATCH AREA OF MEMORY
                             ;FOR USE BY OUR PROGRAM'S STACK
STACK    SEGMENT   PARA STACK 'STACK'
                             ;ALLOW 64 BYTES IN THIS CASE
         DB        64 DUP (?)
                             ;
STACK    ENDS
                             ;THE FINAL "END" STATEMENT
                             ;SIGNALS THE END OF THIS
                             ;PROGRAM SOURCE FILE, AND GIVES
                             ;THE STARTING ADDRESS OF
                             ;THE EXECUTABLE PROGRAM
         END       PRINT
```
{% endraw %}

## IBM.ASM

{% raw %}
```
		   PAGE      52,132
STACK		   SEGMENT   BYTE STACK 'STACK'  ;STACK SEGMENT
		   DB	     64 DUP ('STACK   ') ;INITIAL STACK VALUE
STACK		   ENDS 			 ;STACK SEGMENT END
		   PAGE
CSEG		   SEGMENT   BYTE PUBLIC 'CODE'  ;CODE SEGMENT
		   ASSUME    CS:CSEG,ES:CSEG	 ;ASSUME'S
INT5_OFF	   EQU	     14H		 ;INT 5 OFFSET ADDRESS
INT5_SEG	   EQU	     16H		 ;INT 5 SEG. ADDRESS
OLD_SEG 	   EQU	     -2 		 ;OLD SEQ. OFFSET
OLD_OFF 	   EQU	     -4 		 ;OLD OFFSET OFFSET
INT_27		   EQU	     27CDH		 ;INT 27 OP-CODE
CODE_9		   EQU	     9H 		 ;FUNCTION CODE 9
INT_21		   EQU	     21H		 ;INT 21 REQUEST VALUE
RET		   EQU	     0H 		 ;RETURN CODE OFFSET
BASIC_DS	   EQU	     510H		 ;BASIC DS SAVE ADDR.
PROTECT 	   EQU	     464H		 ;PROT OFFSET (IBM)
POINT		   EQU	     8			 ;OFFSET TO IDENT
BYTES		   EQU	     4			 ;SIZE OF IDENT
PRE		   EQU	     100H		 ;PREFIX SIZE
		   PAGE
START		   LABEL     NEAR		 ;START OF BODY
IDENT		   DB	     'PROT'              ;PROGRAM IDENT.
PRTSC_OFF	   DW	     0			 ;PRINT SCREEN OFFSET
PRTSC_SEG	   DW	     0			 ;PRINT SCREEN SEGMENT
INT		   LABEL     NEAR		 ;INTERRUPT ROUTINE
		   PUSH      DS 		 ;SAVE DS REGISTER
		   PUSH      AX 		 ;SAVE AX REGISTER
		   XOR	     AX,AX		 ;ZERO AX REGISTER
		   MOV	     DS,AX		 ;LOWER CORE POINTER
		   MOV	     DS,[DS:BASIC_DS]	 ;BASIC WORK AREA
		   XOR	     AL,AL		 ;ZERO AL REGISTER
		   MOV	     [DS:PROTECT],AL	 ;UN-PROTECT PROGRAM
		   POP	     AX 		 ;RESTORE AX REGISTER
		   POP	     DS 		 ;RESTORE DS REGISTER
		   STI				 ;ALLOW INTERRUPTS
		   IRET 			 ;INTERRUPT RETURN
I_END		   EQU	     $			 ;RESIDENT CODE END
		   PAGE
INITIAL 	   PROC      FAR		 ;INITIALIZATION CODE
		   PUSH      DS 		 ;SAVE RETURN SEGMENT
		   MOV	     AX,INT_27		 ;GET INT 27 OP-CODE
		   MOV	     [DS:RET],AX	 ;CHANGE RETURN CODE
		   XOR	     AX,AX		 ;ZERO AX REGISTER
		   PUSH      AX 		 ;SAVE RETURN OFFSET
		   MOV	     DS,AX		 ;POINT TO LOWER CORE
		   CLD				 ;SET DIRECTION FLAG
		   MOV	     DX,CS		 ;GET POINTER TO CODE
		   MOV	     ES,DX		 ;POINT TO CODE
		   MOV	     CX,BYTES		 ;GET LENGTH OF IDENT
		   MOV	     DI,OFFSET IDENT	 ;POINT TO IDENT
		   MOV	     BX,[DS:INT5_SEG]	 ;GET INT 5 SEGMENT
		   MOV	     SI,[DS:INT5_OFF]	 ;GET INT 5 OFFSET
		   MOV	     DS,BX		 ;POINT TO INT 5
		   SUB	     SI,POINT		 ;POINT TO ID LOC
		   REPZ      CMPSB		 ;CHECK IF LOADED
		   JNE	     LOAD		 ;GO LOAD IF NOT
		   PAGE
UNLOAD		   LABEL     NEAR		 ;UN-LOAD CODE
		   MOV	     DS,AX		 ;POINT TO LOWER CORE
		   MOV	     SI,[DS:INT5_OFF]	 ;GET INT 5 OFFSET
		   MOV	     DS,BX		 ;POINT TO INT 5
		   MOV	     BX,[OLD_SEG][SI]	 ;GET OLD SEGMENT
		   MOV	     CX,[OLD_OFF][SI]	 ;GET OLD OFFSET
		   MOV	     DS,AX		 ;POINT TO LOWER CORE
		   MOV	     [DS:INT5_SEG],BX	 ;RESTORE SEGMENT
		   MOV	     [DS:INT5_OFF],CX	 ;RESTORE OFFSET
		   MOV	     DS,DX		 ;POINT TO CODE
		   MOV	     DX,OFFSET OFF	 ;POINT TO OFF MESS.
		   MOV	     AH,CODE_9		 ;GET DESIRED CODE
		   INT	     INT_21		 ;PRINT MESSAGE
		   MOV	     DX,OFFSET START	 ;GET BODY OFFSET
		   PAGE
		   JMP	     EXIT		 ;GO EXIT FOR GOOD
LOAD		   LABEL     NEAR		 ;LOAD CODE
		   MOV	     DS,AX		 ;POINT TO LOWER CORE
		   MOV	     AX,[DS:INT5_OFF]	 ;INTERRUPT 5 OFFSET
		   MOV	     [CS:PRTSC_OFF],AX	 ;SAVE INT 5 OFFSET
		   MOV	     AX,[DS:INT5_SEG]	 ;INTERRUPT 5 SEGMENT
		   MOV	     [CS:PRTSC_SEG],AX	 ;SAVE INT 5 SEGMENT
		   CLI				 ;NO INTERRUPTIONS
		   MOV	     AX,OFFSET INT	 ;GET INTERRUPT OFFSET
		   MOV	     [DS:INT5_OFF],AX	 ;SAVE INT 5 OFFSET
		   MOV	     [DS:INT5_SEG],CS	 ;SAVE INT 5 SEGMENT
		   STI				 ;ALLOW INTERRUPTS
		   MOV	     DS,DX		 ;POINT TO CODE
		   MOV	     DX,OFFSET ON	 ;POINT TO ON MESS.
		   MOV	     AH,CODE_9		 ;GET DESIRED CODE
		   INT	     INT_21		 ;PRINT MESSAGE
		   MOV	     DX,OFFSET I_END+PRE ;GET END POINTER
		   PAGE
EXIT		   LABEL     NEAR		 ;EXIT CODE
		   RET				 ;TERMINATE RESIDENT
INITIAL 	   ENDP 			 ;END OF INITIAL
ON		   DB	     "Protect Bypass Enabled$"
OFF		   DB	     "Protect Bypass Disabled$"
CSEG		   ENDS 			 ;CODE SEGMENT END
		   END	     INITIAL		 ;SET TRANSFER ADDRESS
```
{% endraw %}

## KEYBUFF.ASM

{% raw %}
```
VECTORS       SEGMENT	AT   0H
  ORG	      9H*4
  KEYBOARD_INT_VECTOR	LABEL	  DWORD
  ORG	      16H*4
  KEYBOARD_IO_VECTOR	LABEL	  DWORD
VECTORS       ENDS
;
ROM_BIOS_DATA SEGMENT	AT   40H
  ORG	      17H
  KBD_FLAG		DB   ?
  ORG	      1AH
  ROM_BUFFER_HEAD	DW   ?
  ROM_BUFFER_TAIL	DW   ?
  KB_BUFFER		DW   16 DUP (?)
  KB_BUFFER_END 	LABEL	  WORD
ROM_BIOS_DATA ENDS
;
CODE_SEG      SEGMENT
	      ASSUME	CS:CODE_SEG
	      ORG	100H
  BEGIN:      JMP	INIT_VECTORS	    ;Initialize vectors and attach to
;					     DOS
  ROM_KEYBOARD_INT	DD		    ;Address for ROM routine
  ROM_KEYBOARD_IO	DD
  BUFFER_HEAD		DW   OFFSET KEYBOARD_BUFFER
  BUFFER_TAIL		DW   OFFSET KEYBOARD_BUFFER
  KEYBOARD_BUFFER	DW   160 DUP (0)    ;159 character input buffer
  KEYBOARD_BUFFER_END	LABEL	  WORD
;
; This procedure sends a short beep when the buffer fills:
;
  KB_CONTROL		EQU  61H	    ;Control bits for keyboard and
;					     speaker
ERROR_BEEP		PROC NEAR
	      PUSH	AX
	      PUSH	BX
	      PUSH	CX
	      PUSHF			    ;Save the old interrupt enable flag
	      CLI			    ;Turn off beep during interrupt
	      MOV	BX,30		    ;Number of cycles for 1/8 sec beep
	      IN	AL,KB_CONTROL	    ;Get control info from speaker port
	      PUSH	AX		    ;Save the control information
  START_OF_ONE_CYCLE:
	      AND	AL,0FCH 	    ;Turn off the speaker
	      OUT	KB_CONTROL,AL
	      MOV	CX,60		    ;Delay for one half cycle
  OFF_LOOP:   LOOP	OFF_LOOP
	      OR	AL,2		    ;Turn on the speaker
	      OUT	KB_CONTROL,AL
	      MOV	CX,60		    ;Delay for second half of cycle
  ON_LOOP:    LOOP	ON_LOOP
	      DEC	BX		    ;200 cycles yet?
	      JNZ	START_OF_ONE_CYCLE
	      POP	AX		    ;Recover old keyboard information
	      OUT	KB_CONTROL,AL
	      POPF			    ;Restore interrupt flag
	      POP	CX
	      POP	BX
	      POP	AX
	      RET
ERROR_BEEP		ENDP
;
; This procedure checks the ROM keyboard buffer to see if some program tried to
; clear this buffer.  We know it's been cleared when the ROM tail and header
; overlap.  Normally, the new procedures below keep the dummy character,
; word 0, in the buffer.
;
; Uses BX,DS
; Writes:     BUFFER_HEAD, BUFFER_TAIL, ROM_BUFFER_HEAD, ROM_BUFFER_TAIL
; Reads:      KEYBOARD_BUFFER, KB_BUFFER
;
CHECK_CLEAR_BUFFER	PROC NEAR
	      ASSUME	DS:ROM_BIOS_DATA
	      MOV	BX,ROM_BIOS_DATA    ;Establish pointer to BIOS data
	      MOV	DS,BX
	      CLI			    ;Turn of interrupts during check
	      MOV	BX,ROM_BUFFER_HEAD  ;Check to see if buffer cleared
	      CMP	BX,ROM_BUFFER_TAIL  ;Is the buffer empty?
	      JNE	BUFFER_OK	    ;No, then everything is OK
;					     Yes, then clear internal buffer
	      MOV	BX,OFFSET KB_BUFFER ;Reset buffer with word 0 in buffer
	      MOV	ROM_BUFFER_HEAD,BX
	      ADD	BX,2
	      MOV	ROM_BUFFER_TAIL,BX
	      ASSUME	DS:CODE_SEG
	      MOV	BX,CS
	      MOV	DS,BX
	      MOV	BX,OFFSET KEYBOARD_BUFFER    ;Reset internal buffer
	      MOV	BUFFER_HEAD,BX
	      MOV	BUFFER_TAIL,BX
  BUFFER_OK:
	      ASSUME	DS:CODE_SEG
	      STI			    ;Interrupts back on
	      RET
CHECK_CLEAR_BUFFER	ENDP
;
; This procedure intercepts the keyboard interrupt and moves any new characters
; to the internal, 80 character buffer
;
INTERCEPT_KEYBOARD_INT	PROC NEAR
	      ASSUME	DS:NOTHING
	      PUSH	DS
	      PUSH	SI
	      PUSH	BX
	      PUSH	AX
	      CALL	CHECK_CLEAR_BUFFER  ;Check for buffer cleared
	      PUSHF
	      CALL	ROM_KEYBOARD_INT    ;Read scan code with BIOS routines
;
; Transfer any characters to the internal buffer
;
	      ASSUME	DS:ROM_BIOS_DATA
	      MOV	BX,ROM_BIOS_DATA
	      MOV	DS,BX
	      MOV	SI,BUFFER_TAIL
	      MOV	BX,ROM_BUFFER_HEAD  ;Check if real character in buffer
	      ADD	BX,2		    ;Skip over dummy character
	      CMP	BX,OFFSET KB_BUFFER_END
	      JB	DONT_WRAP	    ;No need to wrap pointer
	      MOV	BX,OFFSET KB_BUFFER
  DONT_WRAP:
	      CMP	BX,ROM_BUFFER_TAIL  ;Is there a real character?
	      JE	NO_NEW_CHARACTERS   ;No, then return to caller
	      MOV	AX,[BX] 	    ;Yes, move char to internal buffer
	      MOV	CS:[SI],AX
	      ADD	SI,2		    ;Move to next position
	      CMP	SI,OFFSET KEYBOARD_BUFFER_END
	      JB	NOT_AT_END
	      MOV	SI,OFFSET KEYBOARD_BUFFER
  NOT_AT_END:
	      CMP	SI,BUFFER_HEAD	    ;Buffer overrun?
	      JNE	WRITE_TO_BUFFER     ;Yes, beep and throw out character
	      CALL	ERROR_BEEP
	      JMP	SHORT NOT_AT_KB_END
  WRITE_TO_BUFFER:
	      MOV	BUFFER_TAIL,SI
  NOT_AT_KB_END:
	      MOV	ROM_BUFFER_HEAD,BX
;
; See if [Ctrl] + [Alt] pushed and clear buffer if so
;
  NO_NEW_CHARACTERS:
	      MOV	AL,KBD_FLAG	    ;Get status of shift keys into AL
	      AND	AL,0CH		    ;Isolate Ctrl and Alt shift flags
	      CMP	AL,0CH		    ;Both Ctrl and Alt keys pressed?
	      JNE	DONT_CLEAR_BUFFER   ;No, so don't clear buffer
	      MOV	AX,BUFFER_TAIL	    ;Yes, so clear buffer
	      MOV	BUFFER_HEAD,AX
  DONT_CLEAR_BUFFER:
	      POP	AX
	      POP	BX
	      POP	SI
	      POP	DS
	      IRET
INTERCEPT_KEYBOARD_INT	ENDP
;
; This procedure replaces the ROM BIOS routines for reading a character
;
	      ASSUME	DS:CODE_SEG
INTERCEPT_KEYBOARD_IO	PROC FAR
	      STI			    ;Interrupts back on
	      PUSH	DS		    ;Save current DS
	      PUSH	BX		    ;Save BX temporarily
	      CALL	CHECK_CLEAR_BUFFER  ;Check for buffer cleared
	      MOV	BX,CS		    ;Establish pointer to Data Area
	      MOV	DS,BX
	      OR	AH,AH		    ;AH = 0?
	      JZ	READ_CHARACTER	    ;Yes, read a character
	      DEC	AH		    ;AH = 1?
	      JZ	READ_STATUS	    ;Yes, return the status
	      DEC	AH		    ;AH = 2?
	      JZ	READ_SHIFT_STATUS   ;Yes, return the shift status
	      POP	BX		    ;Ignore other function numbers
	      POP	DS
	      IRET
;
; Read the character
;
  READ_CHARACTER:			    ;ASCII Read
	      STI			    ;Interrupts back on
	      NOP			    ;Allow an interrupt to occur
	      CLI			    ;Interrupts back off
	      MOV	BX,BUFFER_HEAD	    ;Get pointer to head of buffer
	      CMP	BX,BUFFER_TAIL	    ;Test end of buffer
	      JE	READ_CHARACTER	    ;Loop until something appears
	      MOV	AX,[BX] 	    ;Get scan code and ASCII code
	      ADD	BX,2		    ;Move to next word in buffer
	      CMP	BX,OFFSET KEYBOARD_BUFFER_END	  ;At end of buffer?
	      JNE	SAVE_POINTER	    ;No, continue
	      MOV	BX,OFFSET KEYBOARD_BUFFER	  ;Yes, reset to start
  SAVE_POINTER:
	      MOV	BUFFER_HEAD,BX	    ;Store value in variable
	      POP	BX
	      POP	DS
	      IRET			    ;Return to caller
;
; ASCII status
;
  READ_STATUS:
	      CLI			    ;Interrupts off
	      MOV	BX,BUFFER_HEAD	    ;Get head pointer
	      CMP	BX,BUFFER_TAIL	    ;If equal then nothing there
	      MOV	AX,[BX]
	      STI			    ;Interrupts back on
	      POP	BX		    ;Recover registers
	      POP	DS
	      RET	2		    ;Throw away flags
;
; Shift status
;
  READ_SHIFT_STATUS:
	      JMP	ROM_KEYBOARD_IO     ;Let ROM routine do this
INTERCEPT_KEYBOARD_IO	ENDP
;
; This procedure initializes the interrupt vectors
;
INIT_VECTORS		PROC NEAR
	      ASSUME	DS:VECTORS
	      PUSH	DS		    ;Save old Data Segment
	      MOV	AX,VECTORS	    ;Set up Data Segment for vectors
	      MOV	DS,AX
	      CLI			    ;Dont allow interrupts
	      MOV	AX,KEYBOARD_INT_VECTOR	     ;Save addresses of BIOS
	      MOV	ROM_KEYBOARD_INT,AX	     ;routines and set up new
	      MOV	AX,KEYBOARD_INT_VECTOR[2]    ;KEYBOARD_INT vector
	      MOV	ROM_KEYBOARD_INT[2],AX	     ;
	      MOV	KEYBOARD_INT_VECTOR,OFFSET INTERCEPT_KEYBOARD_INT
	      MOV	KEYBOARD_INT_VECTOR[2],CS
	      STI			    ;allow interrupts again
	      MOV	AX,KEYBOARD_IO_VECTOR	     ;Set up KEYBOARD_IO vector
	      MOV	ROM_KEYBOARD_IO,AX
	      MOV	AX,KEYBOARD_IO_VECTOR[2]
	      MOV	ROM_KEYBOARD_IO[2],AX
	      MOV	KEYBOARD_IO_VECTOR,OFFSET INTERCEPT_KEYBOARD_IO
	      MOV	KEYBOARD_IO_VECTOR[2],CS
	      ASSUME	DS:ROM_BIOS_DATA    ;Now set up the keyboard buffer,
	      MOV	AX,ROM_BIOS_DATA    ;etc.
	      MOV	DS,AX
	      CLI			    ;Dont allow interrupts
	      MOV	BX,OFFSET KB_BUFFER
	      MOV	ROM_BUFFER_HEAD,BX
	      MOV	WORD PTR[BX],0
	      ADD	BX,2
	      MOV	ROM_BUFFER_TAIL,BX
	      STI			    ;Allow interrupts again
	      MOV	DX,OFFSET INIT_VECTORS	     ;End of resident portion
	      INT	27H		    ;Terminate but stay resident
INIT_VECTORS		ENDP
;
CODE_SEG		ENDS
	      END	BEGIN
```
{% endraw %}

## LOAD.ASM

{% raw %}
```
	NAME	 LOAD
	PAGE	 55,128
	TITLE	'LOAD -- LOAD .COM FILE FOR MS-DOS 2.0'
;
;
; LOAD -- LOAD .COM FILE BIGGER THAN 64K
; REQUIRES MS-DOS 2.0
; VERSION 1.1	DEC 83 RGD
; VERSION 1	MARCH 1983 RJW

; COPYRIGHT (C) 1983
; LABORATORY MICROSYSTEMS
; 4147 BEETHOVEN STREET
; LOS ANGELES, CA  90066
;
CR	EQU	0DH	;ASCII CARRIAGE RETURN
LF	EQU	0AH	;ASCII LINE FEED

CSEG	SEGMENT BYTE

	ORG	100H

	ASSUME	CS:CSEG,DS:CSEG

LOAD	PROC	FAR		; SETS UP FAR RETURN ...

	PUSH	ES		; SAVE SEGMENT OF PSP
	MOV	DX,OFFSET MES2	; STARTUP MESSAGE
	MOV	AH,9
	INT	21H
	XOR	DX,DX		; ZERO DX
	MOV	AH,25H		; SET TERMINATE ADDRESS ...
	MOV	AL,22H		; ... FOR NEW PROGRAM SEGMENT
	INT	21H

	MOV	DX,OFFSET ENDOFS ; OFFSET TO END OF THIS LOADER
	MOV	CL,4		; NO OF BITS TO SHIFT
	SHR	DX,CL		; CONVERT BYTE ADDR TO PARAGRAPH
	INC	DX		; OFFSET OF 1ST AVAILABLE SEGMENT
	MOV	AX,CS		; CURRENT SEGMENT TO AX
	ADD	DX,AX		; ACTUAL VALUE OF 1ST AVAILABLE SEGMENT
	MOV	USEG,DX 	; SAVE IT FOR LATER ...
	MOV	ES,DX		; ... AND FOR SUBSEQUENT MOVE
	MOV	AH,26H		; CALL TO DOS
	INT	21H		; CREATE NEW PROGRAM SEGMENT

	MOV	SI,6CH		; 2ND PARAM FCB IN CURRENT SEGMENT
	MOV	DI,5CH		; 1ST PARAM FCB IN NEW SEGMENT
	MOV	CX,0CH		; BYTE COUNT FOR MOVE
	REPZ MOVSB		; COPY THE FILENAME

	MOV	AX,CS		; COPY CURRENT CODE SEG ...
	MOV	DS,AX		; ... TO DS
	MOV	DX,5CH		; DS:DX POINTS TO FCB OF .COM FILE
	MOV	BX,DX		; MAKE FCB ADDRESSIBLE
	MOV	BYTE PTR  9 [BX],'C' ; FORCE COM EXTENSION
	MOV	BYTE PTR 10 [BX],'O'
	MOV	BYTE PTR 11 [BX],'M'
	MOV	AH,0FH		; OPEN THE .COM FILE
	INT	21H
	OR	AL,AL		; TEST RETURN CODE
	JNZ	LOAD8		; EXIT IF NON-ZERO
	MOV	WORD PTR 33 [BX],0000 ; ZERO THE RANDOM
	MOV	WORD PTR 35 [BX],0000 ; RECORD FIELD IN THE FCB
	POP	ES		; GET LOADER'S PSP SEGMENT
	MOV	BX,USEG 	; LET SS:SP = DEFAULT BUFFER OF
	MOV	SS,BX		; NEW PSP
	MOV	SP,100H
	PUSH	ES		; SAVE LOADER'S PSP AGAIN
	ADD	BX,10H		; BX = SEGMENT OF CURRENT DTA
	MOV	DS,BX		; SET UP DS:DX TO POINT TO THE DTA
	XOR	DX,DX
	MOV	AH,1AH		; SET UP DOS CALL AND DO IT
	INT	21H

LOAD5:	MOV	CX,100H 	; NUMBER OF RECORDS OF LENGTH 80H
	MOV	AX,CS		; COPY CURRENT CS TO DS
	MOV	DS,AX
	MOV	DX,5CH		; DS:DH POINTS TO FCB OF .COM FILE
	MOV	AH,27H		; DO RANDOM BLOCK READ
	INT	21H
	TEST	AL,1		; END OF FILE?
	JNZ	LOAD9		; YES, SO EXIT
	ADD	BX,800H 	; INCREMENT LOCATION OF DTA
	MOV	DS,BX		; COPY TO DS
	XOR	DX,DX		; DS:DX NOW POINTS TO NEXT DTA
	MOV	AH,1AH		; SET UP DOS CALL TO SET DTA
	INT	21H
	JMP	LOAD5		; DO IT AGAIN

LOAD8:	MOV	DX,OFFSET MES1	; "FILE NOT FOUND"
	MOV	AH,9		; WRITE TO TERMINAL
	INT	21H
	INT	20H		; EXIT TO DOS

LOAD9:	MOV	AX,USEG 	; SET UP REGISTERS FOR NEW SEGMENT
	MOV	DS,AX
	POP	ES		; PASS LOADER'S PSP SEGMENT TO OVERLAY
	PUSH	AX		; PUSH NEW CS ONTO STACK
	MOV	AX,100H
	PUSH	AX		; PUSH OFFSET ONTO STACK
	RET			; FAR RETURN CAUSES CS:IP TO BE SET
LOAD	ENDP

MES1	DB	CR,LF,
	DB	'.COM FILE NOT FOUND'
	DB	CR,LF,'$'
MES2	DB	CR,LF
	DB	'MULTI-SEGMENT LOADER VERSION 1.1 FOR MS-DOS 2.0'
	DB	CR,LF
	DB	'COPYRIGHT (C) 1983 LABORATORY MICROSYSTEMS INC.'
	DB	CR,LF,'$'

USEG	DW	0

ENDOFS	EQU	$

CSEG	ENDS			; END OF CODE SEGMENT

	END	LOAD
```
{% endraw %}

## LOOK.ASM

{% raw %}
```
        PAGE    ,132
        TITLE   LOOK - LOOK AT MEMORY
        SUBTTL  LOOK AT MEMORY IN ANY SEGMENT
;                                                                             ;
;*****************************************************************************;
;                                                                             ;
;                     JOHN R. PULLIAM    VERSION 2/21/84                      ;
;                                                                             ;
;              FOR COLUMBIA DATA PRODUCT COMPUTERS AND COMPATIBLES            ;
;                         RELEASED TO PUBLIC DOMAIN                           ;
;                                                                             ;
;*****************************************************************************;
;                                                                             ;
;
;  DOS CALL INT 21H FUNCTIONS USED
;
;
;       AH = 01H => INPUT ONE CHARACTER FROM KEYBOARD
;                   AL = ASCII CHARACTER RECEIVED
;
;       AH = 02H => DISPLAY ONE CHARACTER ON CRT
;                   DL = ASCII CHARACTER TO DISPLAY
;
;       AH = 09H => DISPLAY MESSAGE ON CRT
;                   DS = SEGMENT OF MESSAGE
;                   DX = OFFSET ADDRESS OF MESSAGE
;
;       AH = 0CH &
;       AL = 0AH => CLEAR THEN FETCH KEYBOARD BUFFER
;                   DI     = BUFFER FIRST WORD ADDRESS
;                   [DI]   = NUMBER OF CHARACTERS WANTED TO INPUT
;                   [DI+1] = NUMBER OF CHARACTERS ACTUALLY RECEIVED
;                   [DI+2] = FIRST CHARACTER RECEIVED
;
;
;  DOS INT 20H = TERMINATE PROGRAM AND RETURN TO DOS
;
;  TO ASSEMBLE THIS PROGRAM:
;
;       1. PLACE THE SOURCE FILE, LOOK.ASM, IN DRIVE B
;
;       2. MASM B:LOOK,B:LOOK,B:LOOK,NUL.CRF
;
;       3. LINK B:LOOK,B:LOOK,NUL.MAP,NUL.LIB
;          (THERE SHOULD BE 1 WARNING ERROR MESSAGE AFTER LINKING)
;
;       4. EXE2BIN B:LOOK,B:LOOK.COM
;
;       5. B:LOOK.OBJ AND B:LOOK.LST MAY BE DELETED IF DESIRED.
;
;*****************************************************************************;
;
        CSEG    SEGMENT PARA PUBLIC
        ASSUME  CS:CSEG,DS:CSEG,ES:CSEG

        ORG     100H

;  DEFINE THE CONSTANTS

CR      EQU     13              ; CARRIAGE RETURN CODE
LF      EQU     10              ; LINE FEED CODE
QT      EQU     34              ; QUOTE MARK
BYT     EQU     16              ; NUMBER OF BYTES PER LINE
LINES   EQU     8               ; NUMBER OF LINES TO DISPLAY

;  SET UP THE SEGMENT REGISTERS

LOOK:   MOV     AX,CS           ; GET CURRENT SEGMENT
        MOV     DS,AX           ; SET DS TO THIS SEG
        MOV     ES,AX           ; SET ES TO THIS SEG
        MOV     WORD PTR SEGADD,AX ; INITIALIZE DISPLAY SEGMENT

;  ASK IF ANOTHER SEGMENT IS DESIRED

ASKSEG: MOV     DX,OFFSET SEGMSG ;ADDRESS OF MESSAGE
        MOV     AH,9            ; DISPLAY STRING FUNCTION
        INT     21H             ; CALL DOS

;  READ REPLY

        MOV     AH,1            ; REQUEST "Y" OR "N"
        INT     21H             ; GET KEY INPUT
        AND     AL,0DFH         ; ALLOW EITHER UPPER OR LOWER CASE
        CMP     AL,'N'          ; BRANCH TO GET STARTING ADD IF "N"
        JE      DISPSEG
        CMP     AL,'Y'          ; REPEAT QUERY IF NOT "Y"
        JNE     ASKSEG

;  GET THE SEGMENT TO DISPLAY MEMORY FROM

GETSEG: MOV     DX,OFFSET SEGMSG2 ; ADDRESS OF MESSAGE
        MOV     AH,9            ; DISPLAY STRING FUNCTION
        INT     21H             ; CALL DOS

;  READ DESIRED SEGMENT

        MOV     AH,4            ; MAX NUMBER OF CHARACTERS WANTED
        MOV     DI,OFFSET KBUFSZ ; KEYBOARD BUFFER
        CALL    KYBD            ; INPUT REPLY

        CMP     AH,4            ; WANT 4 CHARS EXCLUDING THE CR
        JE      CV1             ; SKIP IF NO LEADING ZEROS
        CALL    INSERT          ; INSERT LEADING ZEROS

CV1:    CALL    CRLF            ; OUTPUT CR AND LF

;  CONVERT FOUR ASCII CODES INTO TWO HEX BYTES (FOUR HEX DIGITS)

        MOV     AX,WORD PTR KBUF ; FIRST TWO ASCII CODES
        CALL    ASC_HEX         ; RETURNS ONE HEX BYTE
        JC      GETSEG          ; REPEAT QUERY IF ILLEGAL INPUT
        MOV     SEGADD+1,AL     ; STORE HIGH SEGMENT BYTE
        MOV     AX,WORD PTR KBUF+2 ; THIRD AND FOURTH ASCII CODES
        CALL    ASC_HEX         ; RETURNS ONE HEX BYTE
        JC      GETSEG          ; REPEAT QUERY IF ILLEGAL INPUT
        MOV     SEGADD,AL       ; STORE LOW SEGMENT BYTE

;  DISPLAY THE SEGMENT FROM WHICH DATA IS TO BE DISPLAYED

DISPSEG:
        MOV     AL,SEGADD+1     ; GET THE FIRST SEGMENT BYTE
        CALL    HEX_ASC         ; CONVERT TO ASCII
        MOV     ASCSEG,AX       ; SAVE FOR OUTPUT TO CRT
        MOV     AL,SEGADD       ; GET THE SECOND SEGMENT BYTE
        CALL    HEX_ASC         ; CONVERT IT TO ASCII TOO
        MOV     ASCSEG+2,AX     ; AND SAVE IT ALSO

        MOV     DX,OFFSET SEGMSG3 ; ADDRESS OF MESSAGE
        MOV     AH,9            ; DISPLAY STRING FUNCTION
        INT     21H             ; CALL DOS

        MOV     DX,OFFSET ASCSEG ; ADDRESS OF MESSAGE
        MOV     AH,9            ; DISPLAY STRING FUNCTION
        INT     21H             ; CALL DOS

;  ASK FOR THE STARTING ADDRESS

ASKADD: MOV     DX,OFFSET STMSG ; ADDRESS OF MESSAGE
        MOV     AH,9            ; DISPLAY STRING FUNCTION
        INT     21H             ; CALL DOS

;  READ REPLY

        MOV     AH,4            ; MAX NUMBER OF CHARACTERS WANTED
        MOV     DI,OFFSET KBUFSZ ; KEYBOARD BUFFER
        CALL    KYBD            ; INPUT REPLY

        CMP     AH,4            ; WANT 4 CHARS EXCLUDING THE CR
        JE      CV2             ; SKIP IF NO LEADING ZEROS
        CALL    INSERT          ; INSERT LEADING ZEROS

CV2:    CALL    CRLF            ; OUTPUT CR AND LF
        CALL    CRLF            ; OUTPUT CR AND LF

;  CONVERT FOUR ASCII CODES INTO TWO HEX BYTES (FOUR HEX DIGITS)

        MOV     AX,WORD PTR KBUF ; FIRST AND SECOND ASCII CODES
        CALL    ASC_HEX         ; RETURNS ONE HEX BYTE
        JC      ASKADD          ; REPEAT QUERY IF ILLEGAL INPUT
        MOV     STADD+1,AL      ; STORE HIGH ADDRESS BYTE
        MOV     AX,WORD PTR KBUF+2 ; THIRD AND FOURTH ASCII CODES
        CALL    ASC_HEX         ; RETURNS ONE HEX BYTE
        JC      ASKADD          ; REPEAT QUERY IF ILLEGAL INPUT
        MOV     STADD,AL        ; STORE LOW ADDRESS BYTE

        MOV     AX,WORD PTR STADD ; GET STARTING ADDRESS
        MOV     SI,AX           ; STARTING ADDRESS IN SI REGISTER

        CALL    DISPLA          ; DISPLAY MEMORY (AT LAST)

;  ASK IF WE SHOULD REPEAT

EMSG:   MOV     DX,OFFSET ENDMSG ; ADDRESS OF MESSAGE
        MOV     AH,9            ; DISPLAY STRING FUNCTION
        INT     21H             ; CALL DOS

        MOV     AH,1            ; REQUEST "Y" OR "N"
        INT     21H             ; GET KEY INPUT
        AND     AL,0DFH         ; ALLOW EITHER UPPER OR LOWER CASE
        CMP     AL,'N'          ; EXIT IF "N"
        JE      EXIT
        CMP     AL,'Y'          ; REPEAT QUERY IF NOT "Y"
        JNE     EMSG
        JMP     ASKSEG          ; LOOP TO START OVER

EXIT:   INT     20H             ; RETURN TO DOS
        .XLIST
        SUBTTL  MISCELLANEOUS CALLABLE ROUTINES
        PAGE    +
        .LIST
;
;
;  INSERT LEADING ZEROS INTO KEYBOARD INPUT BUFFER
;
INSERT: MOV     AL,4            ; NUMBER OF DIGITS IN NUMBER
        SUB     AL,AH           ; NUMBER OF LEADING ZEROS
INS1:   MOV     DI,OFFSET KBUF+3 ; DESTINATION ADDRESS
        MOV     SI,OFFSET KBUF+2 ; SOURCE ADDRESS
        MOV     CX,3            ; LOOP COUNT
INS2:   MOV     AH,[SI]         ; MOVE ONE
        MOV     [DI],AH         ;    CHARACTER
        DEC     DI              ; DEC POINTERS
        DEC     SI
        LOOP    INS2            ; SHIFT ALL DIGITS
        MOV     AH,'0'          ; ASCII ZERO
        MOV     [DI],AH         ; ADD LEADING ZERO
        DEC     AL
        JNZ     INS1            ; LOOP FOR EACH ZERO TO ADD
;
;  WRITE CR LF TO CRT
;
CRLF:   MOV     DX,OFFSET CRLFM ; ADDRESS OF 'CR,LF'
        MOV     AH,9
        INT     21H             ; WRITE CR LF
        RET                     ; RETURN TO CONTINUE
CRLFM   DB      CR,LF,'$'
;
;
;  DISPLAY MEMORY
;
;       SI REG = STARTING ADDRESS TO DISPLAY
;       SEGADD = SEGMENT TO DISPLAY FROM
;       STADD  = OFFSET TO DISPLAY FROM
;       ASCSEG = ASCII CODE OF SEGMENT
;       ASCADD = ASCII CODE OF OFFSET
;       ALL REGISTERS ARE ALTERED
;
DISPLA: MOV     DX,OFFSET SPACE ; SPACE CODES
        MOV     AH,9            ; DISPLAY STRING FUNCTION
        INT     21H             ; OUTPUT SPACES
;
;  OUTPUT THE TOP LINE
;
        MOV     CX,BYT          ; NUMBER OF BYTES PER LINE
        MOV     AL,STADD        ; GET THE LOW ADDRESS BYTE
LUP1:   PUSH    AX              ; SAVE FOR NEXT OUTPUT
        CALL    HEX_ASC         ; CONVERT TO ASCII
        MOV     ASCTOP,AH       ; SAVE FOR OUTPUT
        MOV     AH,9            ; OUTPUT STRING FUNCTION
        MOV     DX,OFFSET ASCTOP ; ADDRESS OF STRING
        INT     21H             ; OUTPUT ONE DIGIT ON TOP LINE
        POP     AX              ; GET PREVIOUS DIGIT
        INC     AL              ; INCREMENT FOR NEXT DIGIT
        LOOP    LUP1            ; REPEAT FOR THE REST
        CALL    CRLF            ; CR AND LF
;
        MOV     BX,LINES        ; NUMBER OF LINES TO DISPLAY
        MOV     AX,WORD PTR SEGADD ; FETCH SEGMENT TO DISPLAY
        MOV     ES,AX           ; PUT DESIRED SEGMENT IN ES REGISTER
;
;  OUTPUT ADDRESS AT START OF LINE
;
LUP3:   PUSH    BX              ; SAVE LINE COUNTER
        MOV     AL,STADD+1      ; GET THE FIRST ADDRESS BYTE
        CALL    HEX_ASC         ; CONVERT TO ASCII
        MOV     ASCADD,AX       ; SAVE FOR OUTPUT TO CRT
        MOV     AL,STADD        ; GET THE SECOND ADDRESS BYTE
        CALL    HEX_ASC         ; CONVERT IT TO ASCII TOO
        MOV     ASCADD+2,AX     ; AND SAVE IT ALSO
;
        MOV     AH,9            ; DISPLAY STRING FUNCTION
        MOV     DX,OFFSET ASCADD ; ADDRESS OF MESSAGE
        INT     21H             ; CALL DOS
        MOV     AL,STADD        ; INCREMENT STARTING ADDRESS
        ADD     AL,BYT          ; BY NUMBER OF BYTES IN A LINE
        MOV     STADD,AL
        JNC     DLINES
        INC     STADD+1         ; INCREMENT HIGH BYTE IF NECESSARY
;
;  OUTPUT ONE LINE
;
DLINES: MOV     CX,BYT          ; NUMBER OF BYTES TO DISPLAY IN A LINE
        MOV     DI,OFFSET ASCCHAR ; ADDRESS OF ASCII BUFFER
;
LUP4:   MOV     AL,ES:[SI]      ; PICK UP NEXT MEMORY BYTE
        PUSH    AX              ; SAVE IT
        CMP     AL,7FH          ; SEE IF IT CAN BE DISPLAYED ON CRT
        JGE     DASC1           ; BRANCH IF NOT
        CMP     AL,20H
        JGE     DASC2           ; BRANCH IF YES
DASC1:  MOV     AL,'.'          ; SUBSTITUTE PERIOD
DASC2:  MOV     [DI],AL         ; STORE FOR LATER DISPLAY
        INC     DI              ; INCREMENT BUFFER POINTER
        POP     AX              ; RETRIEVE MEMORY BYTE
        CALL    HEX_ASC         ; CONVERT IT TO TWO ASCII CODES
        MOV     CHARS,AX        ; STORE THEM
        PUSH    SI              ; SAVE POINTER
        PUSH    CX              ; SAVE BYTE COUNTER
        MOV     DX,OFFSET CHARS ; ADDRESS OF STRING
        MOV     AH,9            ; DISPLAY STRING FUNCTION
        INT     21H             ; CALL DOS TO DISPLAY THIS BYTE
        POP     CX              ; RESTORE BYTE COUNTER
        POP     SI              ; RESTORE POINTER
        INC     SI              ; INCREMENT SOURCE POINTER
        LOOP    LUP4            ; REPEAT UNTIL DONE
;
        MOV     CX,BYT+2        ; NUMBER OF TOTAL SYMBOLS
        MOV     DI,OFFSET ASCSYM ; ADDRESS OF STRING
LUP5:   MOV     DL,[DI]         ; NEXT CHARACTER TO DISPLAY
        PUSH    DI              ; SAVE REGISTERS
        PUSH    CX
        MOV     AH,2            ; DISPLAY CHARACTER FUNCTION
        INT     21H             ; CALL DOS TO DISPLAY SYMBOLS
        POP     CX              ; RESTORE REGISTERS
        POP     DI
        INC     DI              ; INCREMENT SYMBOL ADDRESS
        LOOP    LUP5            ; REPEAT UNTIL FINISHED
;
        CALL    CRLF            ; OUTPUT CR AND LF
        POP     BX              ; RESTORE LINE COUNTER
        DEC     BX              ; DECREMENT LINE COUNTER
        JNZ     LUP3            ; REPEAT FOR ALL LINES
;
        MOV     AX,DS
        MOV     ES,AX           ; RESTORE ES REGISTER
        RET                     ; RETURN TO CALLING ROUTINE
        PAGE
;                                                                             ;
;*****************************************************************************;
;                                                                             ;
;       KEYBOARD INPUT SUBROUTINE     VERSION 2/19/84                         ;
;                                                                             ;
;       THIS ROUTINE READS ASCII CODES FROM THE KEYBOARD INTO A BUFFER        ;
;                                                                             ;
;       ENTRY:  AH = MAX NUMBER OF CHARACTERS TO READ EXCLUDING ANY CR CODE   ;
;               DI = FWA OF THE BUFFER IN WHICH TO STORE THE CHARACTERS       ;
;                                                                             ;
;       EXIT:   AL = THE LAST CHARACTER READ EXCLUDING ANY CR CODE            ;
;               AH = THE NUMBER OF CHARACTERS READ EXCLUDING BS OR CR CODES   ;
;               DI = ADDRESS OF THE LAST CHARACTER READ                       ;
;                    ONE LESS THAN BUFFER FWA IF ONLY CR IS RECEIVED          ;
;                                                                             ;
;       BACKSPACE AND CARRIAGE RETURN CODES ARE PROCESSED BY DOS              ;
;                                                                             ;
;       THE BUFFER MUST HAVE THE FIRST TWO BYTES AVAILABLE FOR STORAGE OF     ;
;       THE MAX NUMBER OF CHARACTERS TO READ AND NUMBER OF CHARACTERS READ    ;
;       INCLUDING THE CARRAIGE RETURN CODE                                    ;
;                                                                             ;
;       ALTERS: ALL REGISTERS EXCEPT BX ARE ALTERED                           ;
;                                                                             ;
;*****************************************************************************;
;                                                                             ;
KYBD:   PUSH    BX              ; SAVE REGISTER
        PUSH    DI              ; SAVE BUFFER ADDRESS
        INC     AH              ; ALLOW FOR THE CR CODE
        MOV     [DI],AH         ; STORE MAX NUMBER OF WORDS TO READ
        MOV     AX,0C0AH        ; CLEAR AND READ KEYBOARD BUFFER
        MOV     DX,DI           ; BUFFER ADDRESS IN DX
        INT     21H             ; CALL DOS
        POP     DI              ; GET BUFFER ADDRESS
        INC     DI
        MOV     AH,[DI]         ; GET NUMBER OF CHARACTERS READ
        MOV     BL,AH           ; PUT IN BASE REGISTER
        XOR     BH,BH
        ADD     DI,BX           ; SET DI TO LAST CHARACTER POSITION
        MOV     AL,[DI]         ; GET LAST CHARACTER READ
        POP     BX              ; RESTORE REGISTER
        RET                     ; RETURN TO CALLING ROUTINE
        PAGE
;                                                                             ;
;*****************************************************************************;
;                                                                             ;
;       CONVERT ASCII TO HEX                VERSION 2/21/84                   ;
;                                                                             ;
;       CONVERT TWO ASCII CODES IN AX TO ONE HEX NUMBER IN AL                 ;
;                                                                             ;
;       ENTRY:  AL = UPPER ASCII CODE                                         ;
;               AH = LOWER ASCII CODE                                         ;
;                                                                             ;
;       EXIT:   AL = ONE HEX NUMBER  (TWO HEX DIGITS)                         ;
;               CARRY FLAG IS SET IF AN ILLEGAL HEX DIGIT IS IN THE INPUT     ;
;                                                                             ;
;       ALTERS: REGISTERS AL AND AH ARE ALTERED                               ;
;                                                                             ;
;       NOTE:   VALID FOR ALL HEX NUMBERS 00 TO FF                            ;
;                                                                             ;
;*****************************************************************************;
;                                                                             ;
ASC_HEX:PUSH    BX              ; SAVE REGISTERS
        MOV     BX,AX           ; SAVE THE ASCII CODES
        CALL    CNVRT1          ; RETURNS UPPER DIGIT IN LOWER AL
        SHL     AL,1            ; PUT IT IN UPPER AL
        SHL     AL,1
        SHL     AL,1
        SHL     AL,1
        XCHG    AL,BH           ; SAVE IN BH & GET LOWER DIGIT
        CALL    CNVRT1          ; RETURNS LOWER DIGIT IN LOWER AL
        OR      AL,BH           ; COMBINE BOTH HEX DIGITS INTO AL
        POP     BX              ; RESTORE REGISTERS
        CLC                     ; CLEAR CARRY/ERROR FLAG
        RET                     ; RETURN TO CALLING ROUTINE
;
CNVRT1: SUB     AL,30H          ; PARTIAL CONVERSION
        JL      CERR            ; AL < 0 => ILLEGAL HEX CODE
        CMP     AL,9            ; CHECK FOR 0 - 9
        JLE     CEND            ; AL <= 9 => 0 - 9
        CMP     AL,11H          ; CHECK FOR A - F
        JL      CERR            ; AL < 11H => ILLEGAL (BETWEEN '9' AND 'A')
        SUB     AL,7            ; CONVERT A - F
        CMP     AL,0FH          ; AL > 0FH => ILLEGAL
        JG      CERR            ; ERROR EXIT
CEND:   RET                     ; RETURN TO CONTINUE
;
CERR:   POP     AX              ; ERASE FIRST RETURN ADDRESS
        SUB     AX,AX           ; SET RESULT TO ZERO
        POP     BX              ; ADJUST STACK
        STC                     ; SET CARRY/ERROR FLAG
        RET                     ; RETURN TO CALLING ROUTINE
        PAGE
;                                                                             ;
;*****************************************************************************;
;                                                                             ;
;       CONVERT HEX TO ASCII                                                  ;
;                                                                             ;
;       CONVERT FROM TWO HEX DIGITS IN AL TO TWO ASCII CODES IN AX            ;
;                                                                             ;
;       ENTRY:  AL = HEX NUMBER 00H TO FFH                                    ;
;                                                                             ;
;       EXIT:   AL = UPPER ASCII CODE                                         ;
;               AH = LOWER ASCII CODE                                         ;
;                                                                             ;
;       ALTERS: REGISTERS AL AND AH ARE ALTERED                               ;
;                                                                             ;
;       NOTE:   THIS CONVERSION IS VALID FOR ALL HEX CODES                    ;
;                                                                             ;
;*****************************************************************************;
;                                                                             ;
HEX_ASC:
        MOV     AH,AL           ; SAVE UPPER HEX DIGIT
        CALL    CVRT2           ; CONVERT HEX LOWER DIGIT
        XCHG    AH,AL           ; SAVE IT IN AH / GET UPPER DIGIT TO CONVERT
        SHR     AL,1            ; SHIFT INTO LOW NIBBLE
        SHR     AL,1
        SHR     AL,1
        SHR     AL,1
        CALL    CVRT2           ; CONVERT UPPER HEX DIGIT
        RET                     ; RETURN TO CALLING ROUTINE
;
;  CONVERT ONE HEX DIGIT IN LOWER NIBBLE OF AL INTO ONE ASCII CODE IN AL
;
CVRT2:  AND     AL,0FH          ; SEPARATE OUT ONE HEX DIGIT
        OR      AL,30H          ; CONVERT 0 - 9
        CMP     AL,'9'          ; CHECK FOR A - F
        JLE     CVRT4           ; SKIP IF 0 - 9
        ADD     AL,07H          ; CONVERT A - F
CVRT4:  RET                     ; RETURN TO CALLING ROUTINE
        .XLIST
        SUBTTL  MESSAGES AND DATA STORAGE
        PAGE    +
        .LIST
;
;  MESSAGES AND DATA STORAGE
;
SEGMSG  DB      CR,LF,LF,'DO YOU WANT TO DISPLAY A DIFFERENT SEGMENT ? (Y/N) $'
;
SEGMSG2 DB      CR,LF,LF,'ENTER THE SEGMENT IN HEX $'
;
SEGMSG3 DB      CR,LF,LF,'DISPLAYING FROM SEGMENT NUMBER  $'
;
STMSG   DB      CR,LF,LF,'ENTER THE HEX STARTING ADDRESS $'
;
ENDMSG  DB      CR,LF,'REPEAT TO LOOK AT MORE ? (Y/N) $'
;
CHARS   DW      '  '
        DB      ' $'
;
SPACE   DB      '       $'
ASCTOP  DB      '   $'
;
ASCSYM  DB      '  '
ASCCHAR DB      16 DUP(' ')
;
SEGADD  DB      0,0,0,0
ASCSEG  DW      0,0
        DB      '  $'
;
STADD   DB      0,0,0,0
ASCADD  DW      0,0
        DB      '  $'
KBUFSZ  DB      0,0
KBUF    DB      '    $'
;
        CSEG    ENDS
        END     LOOK
```
{% endraw %}

## MACRO.ASM

{% raw %}
```
;-----------------------------------------------------------------------
;
;  Assembly Language Macros  Version 0.1
;  Written by: Malcolm McCorquodale III  Houston, Texas  713-626-4979
;
;  (c) 1984 by Malcolm McCorquodale III  All commercial rights reserved.
;
;  This software is distributed using the "FREE-SOFTWARE" concept.
;  If you find these macros useful send whatever contribution you
;  deem appropriate to:
;
;	     Malcolm McCorquodale III
;	     3470 Locke Lane,
;	     Houston Texas 77027.
;	     (713) 626 - 4979
;
;-----------------------------------------------------------------------

;;-----------------------------------------------------------------------
;;
;;	 General Purpose Macros
;;
;;-----------------------------------------------------------------------

;;-----------------------------------------------------------------------
;;
;; SAVE <p1,..,p8>  Pushes 1 to 8 parameters.
;;		    Parameters p2 through p8 are optional.
;;
;;-----------------------------------------------------------------------
SAVE	MACRO	P1,P2,P3,P4,P5,P6,P7,P8
	IRP	X,<P1,P2,P3,P4,P5,P6,P7,P8>
IFNB	<X>
	PUSH   X
ENDIF
	ENDM
	ENDM

;;-----------------------------------------------------------------------
;;
;; RESTORE <p1,..,p8>  Pops 1 to 8 parameters.
;;		       Parameters p2 through p8 are optional.
;;
;;-----------------------------------------------------------------------
RESTORE MACRO	P1,P2,P3,P4,P5,P6,P7,P8
	IRP	X,<P1,P2,P3,P4,P5,P6,P7,P8>
IFNB	<X>
	POP    X
ENDIF
	ENDM
	ENDM

;;-----------------------------------------------------------------------
;;
;; PRINT <msg> - Writes msg on the screen.
;;
;;		 No registers destroyed.
;;
;;-----------------------------------------------------------------------
PRINT	MACRO	MSG		; Print message on the screen.
	LOCAL	TEXT,PEXIT
	SAVE	DS,DX
	MOV	DX,CS
	MOV	DS,DX
	MOV	DX,OFFSET TEXT
	MOV	AH,9
	INT	21H
	RESTORE DX,DS
	JMP	PEXIT
TEXT	DB	MSG,'$'
PEXIT:
	ENDM

;;-----------------------------------------------------------------------
;;
;; The macros below this point have not been fully tested.  MM.
;;
;;-----------------------------------------------------------------------
;;-----------------------------------------------------------------------
;;
;; TERMINATE - End program and return to caller.
;;
;;-----------------------------------------------------------------------
TERMINATE MACRO 		; End of program.
	  INT	  20H
	  ENDM

;;-----------------------------------------------------------------------
;;
;; RWABS <rw>,<drive>,<nofsect>,<beg>
;;	 <rw>	   - 'R' for read, 'W' for write.
;;	 <drive>   - drive number.
;;	 <nofsect> - number of sectors to transfer.
;;	 <beg>	   - Begining logical sector number.
;;
;;	 Read and write absolute sectors.
;;
;;	 Note: 1) Status information is returned in flags, After the
;;		  flags are sampled they should be poped off the stack
;;		  with a POPF.
;;
;;	       2) DS:DX must point to the DTA before this call.
;;
;;-----------------------------------------------------------------------
RWABS	MACRO	RW,DRIVE,NOFSECT,BEG	; R/W absolute disk sector.
	SAVE	BX,CX,DX
	MOV	AL,DRIVE
	MOV	CX,NOFSECT
	MOV	DX,BEG
IFIDN	<RW>,<'R'>
	INT	25H
ENDIF
IFIDN	<RW>,<'W'>
	INT	26H
ENDIF
	RESTORE DX,CX,BX
	ENDM

;;-----------------------------------------------------------------------
;;
;; ADDTODOS <dosend> - Add the current proc to DOS.
;;
;;	    Note: <dosend> is a label at the highest memory address
;;		  used by your code.
;;
;;-----------------------------------------------------------------------
ADDTODOS MACRO	DOSEND		; Add a procedure to DOS.
	MOV	DX,DOSEND
	INC	DX
	INT	27H
	ENDM

;;-----------------------------------------------------------------------
;;
;; DOSRS232 <char>
;;	    Sends or receives a <char> to/from the standard RS232 port.
;;
;;	    If <char> is specified then it is sent to the RS232 port.
;;	    If <char> is not specified then a character is read into AL.
;;
;;	    OUTPUT: If receiving data AL will contain the byte received.
;;
;;	    All registers saved.
;;
;;-----------------------------------------------------------------------
DOSRS232 MACRO	CHAR
	SAVE	AH,DL
IFB	<CHAR>
	MOV	AH,3	; Receive a character from the RS232 port.
ELSE
	MOV	AH,4	; Send a character to the RS232 port.
ENDIF
	INT	21H
	RESTORE DL,AH
	ENDM

;;-----------------------------------------------------------------------
;;
;; PRINT1 <char> - Send <char> to the standard printer.
;;
;;		   No registers destroyed.
;;
;;-----------------------------------------------------------------------
PRINT1	MACRO	CHAR		; Send a character to the printer.
	SAVE	AH,DL
	MOV	DL,CHAR
	MOV	AH,5
	INT	21H
	RESTORE DL,AH
	ENDM

;;-----------------------------------------------------------------------
;;
;; INPUTSTR <len>,<bufoff>,[<bufseg>]
;;	    <len> - Length of input buffer.
;;	    <bufoff> - Offset from <bufseg> to message buffer.
;;	    <bufseg> - Optional segment for input buffer.
;;
;;	    Input a string ending with a RETURN from the standard
;;	    input device.
;;
;;	    No registers destroyed except DS:DX which points to
;;	    input buffer on output.
;;
;;	    On exit: DS:DX will have <bufseg>:<bufoff>.
;;		     Byte 1 of buffer = Size of buffer.
;;		     Byte 2 of buffer = Number of bytes read w/o c/r.
;;		     Byte 3 of buffer = Start of text read.
;;
;;-----------------------------------------------------------------------
INPUTSTR MACRO	LEN,BUFOFF,BUFSEG	; Get a line of text.
	PUSH	AH
IFNB	<BUFSEG>
	MOV	DX,BUFSEG
	MOV	DS,DX
ENDIF
	MOV	DX,BUFOFF
	MOV	[DX],LEN
	MOV	AH,0AH
	INT	21H
	POP	AH
	ENDM

;;-----------------------------------------------------------------------
;;
;; POLLSTDIN - Check the status of the standard input device.
;;
;;	       On exit: AL = 0FFH - Character is available.
;;			      00H - Character not available.
;;
;;	       Note: This routine executes an INT 23H if a ctl-brk
;;		     is detected.
;;
;;	       No registesrs destroyed.
;;
;;-----------------------------------------------------------------------
POLLSTDIN MACRO 		; Poll the standard input device.
	PUSH	AH
	MOV	AH,0BH
	INT	21H
	POP	AH
	ENDM

;;-----------------------------------------------------------------------
;;
;; CLRSTDIN <func> - Clear standard input buffer then execute
;;		     function <func>.
;;	    <func> may be 1 - Keyboard input.
;;			  6 - Direct Console I/O.
;;			  7 - Direct Console Input w/o Echo.
;;			  8 - Console Input w/o Echo.
;;			  A - Buffered Keyboard Input.
;;
;;	    No registers destroyed except AX.
;;
;;-----------------------------------------------------------------------
CLRSTDIN MACRO	FUNC		; Clear the standard input device.
	MOV	AL,FUNC
	MOV	AH,0CH
	INT	21H
	ENDM

;;-----------------------------------------------------------------------
;;
;; DISKRESET - Flushes all file buffers.
;;
;;-----------------------------------------------------------------------
DISKRESET MACRO 		; Reset the disk.
	PUSH	AH
	MOV	AH,0DH
	INT	21H
	POP	AH
	ENDM

;;-----------------------------------------------------------------------
;;
;; PICKDRIVE  <drive> - Select the default disk drive.
;;
;;			Input: 0 = Drive A, 1 = Drive B, etc.
;;
;;			Output: AL = number of drives. Minimum=2.
;;
;;			No registers destroyed.
;;
;;-----------------------------------------------------------------------
PICKDRIVE MACRO DRIVE		; Pick the default disk drive.
	SAVE	DL,AH
	MOV	DL,DRIVE
	MOV	AH,0EH
	INT	21H
	RESTORE AH,DL
	ENDM

;;-----------------------------------------------------------------------
;;
;; FINDRIVE - Determine the default drive.
;;
;;	      Output: AL = 0 = Drive A, 1 = Drive B, etc.
;;
;;	      No registers destroyed except AL.
;;
;;-----------------------------------------------------------------------
FINDRIVE MACRO			; Find the default disk drive.
	PUSH	AH
	MOV	AH,19H
	INT	21H
	POP	AH
	ENDM

;;-----------------------------------------------------------------------
;;
;; SETDTA - Set the DTA.
;;
;;	    On input: DS:DX must point to new DTA.
;;
;;-----------------------------------------------------------------------
SETDTA	MACRO			; Set the DTA.
	PUSH	AH
	MOV	AH,1AH
	INT	21H
	POP	AH
	ENDM

;;-----------------------------------------------------------------------
;;
;; ALLOCTAB <drive> - Get pointer to FAT ID byte.
;;
;;	    If <drive> is specified then the pointer to the FAT ID
;;		       for drive <drive> is returned.
;;	    If <drive> is not specified then a pointer to the FAT ID
;;		       byte for the default drive is returned.
;;
;;	    Output: [DS:BX] = FAT ID byte.
;;		    DX	    = Number of allocation units.
;;		    AL	    = Number of sectors per allocation unit.
;;		    CX	    = Size of the physical sector.
;;
;;-----------------------------------------------------------------------
ALLOCTAB MACRO	DRIVE
	PUSH	AH
IFB	<DRIVE>
	MOV	AH,1BH		; Get FAT ID for default drive.
ELSE
	MOV	AH,1CH		; Get FAT ID for specified drive.
	MOV	DL,DRIVE
ENDIF
	INT	21H
	POP	AH
	ENDM

;;-----------------------------------------------------------------------
;;
;; CHANGEINT <int>,<seg>,<off> - If <seg> and <off> are specified then
;;	     interupt vector <int> is set to <seg>:<off>. If <seg> and
;;	     <off> are not specified then interupt vector <int> is
;;	     returned in ES:BX.
;;
;;	     All registers saved except ES and BX when a GET VECTOR
;;-----------------------------------------------------------------------
CHANGEINT MACRO INT,SEG,OFF
	PUSH	AX
	MOV	AL,INT
IFNB	<SEG>
	MOV	AH,25H		; Set interupt vector.
	MOV	DX,SEG
	MOV	DS,DX
	MOV	DX,OFF
ELSE
	MOV	AH,35H		; Get interupt vector.
ENDIF
	INT	21H
	POP	AX
	ENDM

;;-----------------------------------------------------------------------
;;
;; GETDATE - Return the date in CX:DX. CX has the year (1980-2099) in bi
;;	     in binary. DH has the month (1-0C). DL has the day.
;;	     All registers preserved
;;
;;-----------------------------------------------------------------------
GETDATE MACRO			; Get the date.
	PUSH	AH
	MOV	AH,2AH
	INT	21H
	POP	AH
	ENDM

;;-----------------------------------------------------------------------
;;
;; SETDATE <yr>,<mo>,<day> - Set the date. <yr> is 1980..2099.
;;	   <mo> is 1..0CH. <day> is 1..31. On return: AL = 00 = sucess
;;	   AL = 0FFH = failure.
;;
;;-----------------------------------------------------------------------
SETDATE MACRO YR,MO,DAY 	; Set the date.
	SAVE	CX,DX,AH
	MOV	AH,2BH
	MOV	CX,YR
	MOV	DH,MO
	MOV	DL,DAY
	INT	21H
	RESTORE AH,DX,CX
	ENDM

;;-----------------------------------------------------------------------
;;
;; GETTIME - Get the time of day. Returns CX:DX. CH = hours (0..23),
;;	     CL = minutes (0..59), DH = seconds (0..59), DL = 1/100
;;	     seconds (0..99).
;;
;;-----------------------------------------------------------------------
GETTIME MACRO			; Get the time.
	PUSH	AH
	MOV	AH,2CH
	INT	21H
	POP	AH
	ENDM

;;-----------------------------------------------------------------------
;;
;; SETTIME <hr>,<min>,<sec>,<sec100> - Set the time.
;;
;;-----------------------------------------------------------------------
SETTIME MACRO	HR,MIN,SEC,SEC100	; Set the time.
	SAVE	CX,DX,AH
	MOV	AH,2D
	MOV	CH,HR
	MOV	CL,MIN
	MOV	DH,SEC
	MOV	DL,SEC100
	INT	21H
	RESTORE AH,DX,CX
	ENDM

;;-----------------------------------------------------------------------
;;
;; VERIFY <flag> - Set or reset the verify flag.
;;
;;	  <flag> may be either 'ON', 'OFF' or 'QUERY'.
;;		 For 'OFF' and 'ON' all regs are
;;		 saved.  For 'QUERY' AL returns 00 if off, 01 if on.
;;
;;	   OUTPUT: If <flag> is 'QUERY' then: AL = 0 for verify off
;;						   1 for verify on
;;	   All registers saved if <flag> is not 'QUERY' else AL destroyed.
;;
;;-----------------------------------------------------------------------
VERIFY	MACRO	FLAG
IFIDN	<FLAG>,<'OFF'>  ; TURN VERIFY SWITCH OFF.
	SAVE	AX,DL
	XOR	DL,DL
	XOR	AL,AL
	MOV	AH,2EH
	INT	21H
	RESTORE DL,AX
ENDIF
IFIDN	<FLAG>,<'ON'>   ; TURN VERIFY SWITCH ON.
	SAVE	AX,DL
	XOR	DL,DL
	MOV	AL,1
	MOV	AH,2EH
	INT	21H
	RESTORE DL,AX
ENDIF
IFIDN	<FLAG>,<'QUERY'> ; QUERY VERIFY SWITCH.
	PUSH	AH
	MOV	AH,54H
	INT	21H
	POP	AH
ENDIF
	ENDM

;;-----------------------------------------------------------------------
;;
;; GETDTA - Get DTA (Data Transfer Area).  On return - ES:BX has address
;;	    of DTA.
;;
;;-----------------------------------------------------------------------
GETDTA	MACRO			; Get address of DTA.
	PUSH	AH
	MOV	AH,2FH
	INT	21H
	POP	AH
	ENDM

;;-----------------------------------------------------------------------
;;
;; VERSION - Get PC-DOS version number.
;;
;;  OUTPUT:  AL = major version number,
;;	     AH = minor version number.
;;	     If AL = 0 then assume pre DOS 2.0
;;
;;-----------------------------------------------------------------------
VERSION MACRO			; Get PC-DOS version number.
	MOV	AH,30H
	INT	21H
	ENDM

;;-----------------------------------------------------------------------
;;
;; KEEP <rc>,<beg>,<fin> - Terminate this program but stay resident.
;;
;;	<rc>  = The return code for this program.
;;	<beg> = The begining address of the program.
;;	<fin> = The last byte plus one used by the program.
;;		This number is divided by 16 to determine the memory
;;		size in paragraphs required.
;;	Registers may not be passed for <beg> and <fin>.
;;
;;-----------------------------------------------------------------------
KEEP	MACRO RC,BEG,FIN
	MOV	AL,RC
	MOV	DX,(FIN-BEG)/16
	MOV	AH,31H
	INT	21H
	ENDM

;;-----------------------------------------------------------------------
;;
;; CTL_BRK <flag> - Read or write the current CTL-BRK state.
;;
;;	   <flag> - Is either 'ON', 'OFF' or not specified.
;;
;;	   If flag is not specified then current CTL-BRK state is
;;	   returned in DL.
;;
;;	   All registers saved if <flag> is specified elss DL is destroyed.
;;
;;-----------------------------------------------------------------------
CTL_BRK MACRO	FLAG		; R/W  CTRL-BREAK status flag.
	PUSH	AX
	MOV	AH,33H
IFB	<FLAG>
	XOR	AL,AL
ELSE
	MOV	AL,1
ENDIF
IFNB
  IFIDN   <FLAG>,<'OFF'>
	  XOR	  DL,DL
  ENDIF
  IFIDN   <FLAG>,<'ON'>
	  MOV	  DL,1
  ENDIF
ENDIF
	INIT	21H
	POP	AX
	ENDM

;;-----------------------------------------------------------------------
;;
;; DISKAVAIL <DRIVE>
;;
;;-----------------------------------------------------------------------

;;-----------------------------------------------------------------------
;;
;;
;;
;;-----------------------------------------------------------------------

;;-----------------------------------------------------------------------
;;
;;
;;
;;-----------------------------------------------------------------------

;;-----------------------------------------------------------------------
;;
;;
;;
;;-----------------------------------------------------------------------

;;-----------------------------------------------------------------------
;;
;;
;;
;;-----------------------------------------------------------------------

;;-----------------------------------------------------------------------
;;
;;
;;
;;-----------------------------------------------------------------------

;;-----------------------------------------------------------------------
;;
;;
;;
;;-----------------------------------------------------------------------

;;-----------------------------------------------------------------------
;;
;;
;;
;;-----------------------------------------------------------------------

;;-----------------------------------------------------------------------
;;
;;
;;
;;-----------------------------------------------------------------------

;;-----------------------------------------------------------------------
;;
;;
;;
;;-----------------------------------------------------------------------

;;;;;; test prog
	assume cs:cseg,ds:cseg,es:cseg
cseg	segment para 'code'
x	proc	far
	push	ds
	xor	ax,ax
	push	ax

	writeln 'a message'     ;; test writeln, save, restore.

	ret
x	endp
cseg	ends
	end

```
{% endraw %}

## MACRO1.ASM

{% raw %}
```
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;									     ;;
;;				 ASSEMBLE.MAC				     ;;
;;									     ;;
;;	      SAMPLE MACRO LIBRARY FOR THE IBM PC MACRO ASSEMBLER	     ;;
;;									     ;;
;;			      (C) COPYRIGHT 1983			     ;;
;;				      BY				     ;;
;;			       JERRY D. STUCKLE 			     ;;
;;									     ;;
;;			   RELEASED TO PUBLIC DOMAIN			     ;;
;;									     ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;




CLEAR	MACRO	R1,R2,R3,R4,R5,R6,R7,R8
;;***************************************************************************;;
;;									     ;;
;; MACRO: CLEAR 							     ;;
;;									     ;;
;; DESCRIPTION: CLEAR REGISTERS 					     ;;
;;									     ;;
;; PARAMATERS: UP TO 8 REGISTERS TO BE CLEARED				     ;;
;;									     ;;
;; INPUT: N/A								     ;;
;;									     ;;
;; OUTPUT: REQUESTED REGISTERS SET TO BINARY 0'S                             ;;
;;									     ;;
;; REGISTERS USED: NONE 						     ;;
;;									     ;;
;;***************************************************************************;;
	IRP	RX,<R1,R2,R3,R4,R5,R6,R7,R8>	;REGISTER LIST
	IFNB	<RX>				;FOR EACH REGISTER IN LIST
	XOR	RX,RX				;CLEAR THE REGISTER
	ENDIF					;END OF IFIDN
	ENDM					;END OF IRP
	ENDM					;MACRO END
CLS	MACRO
	LOCAL	CLS1,CLSD

;;***************************************************************************;;
;;									     ;;
;; MACRO: CLS								     ;;
;;									     ;;
;; DESCRIPTION: CLEAR THE DISPLAY SCREEN				     ;;
;;									     ;;
;; PARAMATERS: NONE							     ;;
;;									     ;;
;; INPUT: NONE								     ;;
;;									     ;;
;; OUTPUT: NONE 							     ;;
;;									     ;;
;; REGISTERS USED: AX,DX						     ;;
;;									     ;;
;;***************************************************************************;;
	DISPLAY CLSD				;DISPLAY THE DOS2 STRING
	JMP	SHORT CLS1			;GO AROUND THE STRING DATA
CLSD	DB	1BH,'[2J$'                      ;DATA FOR DOS CALL
CLS1	LABEL	NEAR
	ENDM
COLOR	MACRO	FOREGROUND,BACKGROUND
	LOCAL	COLD,COL1
;;***************************************************************************;;
;;									     ;;
;; MACRO: COLOR 							     ;;
;;									     ;;
;; DESCRIPTION: SETS DISPLAY COLOR					     ;;
;;									     ;;
;; PARAMATERS: FOREGROUND COLOR, BACKGROUND COLOR			     ;;
;;									     ;;
;; INPUT: NONE								     ;;
;;									     ;;
;; OUTPUT: NONE 							     ;;
;;									     ;;
;; REGISTERS USED: AX,DX						     ;;
;;									     ;;
;;***************************************************************************;;
	DISPLAY COLD				;DISPLAY THE COLOR STRING
	JMP	SHORT COL1			;GO AROUND THE STRING
COLD	DB	1BH,'['                         ;START OF STRING
	IFIDN	<FOREGROUND>,<NORMAL>		;IF NORMAL REQUEST
	DB	'0'                             ;NORMAL FOREGROUND
	ELSE
	IFIDN	<FOREGROUND>,<BOLD>		;IF BOLD REQUEST
	DB	'1'                            ;BOLD FOREGROUND
	ELSE
	IFIDN	<FOREGROUND>,<UNDERSCORE>	;IF UNDERSCORED
	DB	'4'                             ;UNDERSCORE FOREGROUND
	ELSE
	IFIDN	<FOREGROUND>,<BLINK>		;IF BLINK REQUEST
	DB	'5'                             ;BLINK FOREGROUND
	ELSE
	IFIDN	<FOREGROUND>,<REVERSE>		;IF REVERSE REQUEST
	DB	'7'                             ;REVERSE VIDEO
	ELSE
	IFIDN	<FOREGROUND>,<INVISIBLE>	;IF INVISABLE REQUEST
	DB	'8'                             ;INVISABLE (NO-SHOW)
	ELSE
	IFIDN	<FOREGROUND>,<BLACK>		;IF BLACK REQUEST
	DB	'30'                            ;BLACK FOREGROUND
	ELSE
	IFIDN	<FOREGROUND>,<RED>		;IF RED REQUEST
	DB	'31'                            ;RED FOREGROUND
	ELSE
	IFIDN	<FOREGROUND>,<GREEN>		;IF GREEN REQUEST
	DB	'32'                            ;GREEN FOREGROUND
	ELSE
	IFIDN	<FOREGROUND>,<YELLOW>		;IF YELLOW REQUEST
	DB	'33'                            ;YELLOW FOREGROUND
	ELSE
	IFIDN	<FOREGROUND>,<BLUE>		;IF BLUE REQUEST
	DB	'34'                            ;BLUE FOREGROUND
	ELSE
	IFIDN	<FOREGROUND>,<MAGENTA>		;IF MAGENTA REQUEST
	DB	'35'                            ;MAGENTA FOREGROUND
	ELSE
	IFIDN	<FOREGROUND>,<CYAN>		;IF CYAN REQUEST
	DB	'36'                            ;CYAN FOREGROUND
	ELSE
	IFIDN	<FOREGROUND>,<WHITE>		;IF WHITE REQUEST
	DB	'37'                            ;WHITE FOREGROUND
	ENDIF
	ENDIF
	ENDIF
	ENDIF
	ENDIF
	ENDIF
	ENDIF
	ENDIF
	ENDIF
	ENDIF
	ENDIF
	ENDIF
	ENDIF
	ENDIF
	IFNB	<FOREGROUND>			;IF WE HAVE FOREGROUND...
	IFNB	<BACKGROUND>			;AND BACKGROUND COLORS
	DB	';'                             ;PUT IN A SEPERATOR
	ENDIF
	ENDIF
	IFIDN	<BACKGROUND>,<BLACK>		;IF BLACK REQUEST
	DB	'40'                            ;BLACK BACKGROUND
	ELSE
	IFIDN	<BACKGROUND>,<RED>		;IF RED REQUEST
	DB	'41'                            ;RED BACKGROUND
	ELSE
	IFIDN	<BACKGROUND>,<GREEN>		;IF GREEN REQUEST
	DB	'42'                            ;GREEN BACKGROUND
	ELSE
	IFIDN	<BACKGROUND>,<YELLOW>		;IF YELLOW REQUEST
	DB	'43'                            ;YELLOW BACKGROUND
	ELSE
	IFIDN	<BACKGROUND>,<BLUE>		;IF BLUE REQUEST
	DB	'44'                            ;BLUE BACKGROUND
	ELSE
	IFIDN	<BACKGROUND>,<MAGENTA>		;IF MAGENTA REQUEST
	DB	'45'                            ;MAGENTA BACKGROUND
	ELSE
	IFIDN	<BACKGROUND>,<CYAN>		;IF CYAN REQUEST
	DB	'46'                            ;CYAN BACKGROUND
	ELSE
	IFIDN	<BACKGROUND>,<WHITE>		;IF WHITE REQUEST
	DB	'47'                            ;WHITE BACKGROUND
	ENDIF
	ENDIF
	ENDIF
	ENDIF
	ENDIF
	ENDIF
	ENDIF
	ENDIF
COL1	LABEL	NEAR				;SKIP AROUND DATA
	ENDM
CURSOR	MACRO	FUNCTION,AREA
;;***************************************************************************;;
;;									     ;;
;; MACRO: CURSOR							     ;;
;;									     ;;
;; DESCRIPTION: SAVE OR SET CURRENT CURSOR TYPE, BLANK CURSOR ON SCREEN      ;;
;;									     ;;
;; PARAMATERS: FUNCTION (SAVE,SET OR ERASE), DATA OR DATA ADDRESS	     ;;
;;									     ;;
;; INPUT: CURSOR START AND END LINES (SET ONLY) 			     ;;
;;									     ;;
;; OUTPUT: CURSOR START AND END LINES (SAVE ONLY)			     ;;
;;									     ;;
;; REGISTERS USED: AX,CX  (DS USED AND RESTORED)			     ;;
;;									     ;;
;;***************************************************************************;;
	IFIDN	<FUNCTION>,<ERASE>		;IF CURSOR ERASE REQUESTED
	MOV	AH,1				;SET CURSOR MODE
	MOV	CX,0F0FH			;START AND END ON LINE 15
	INT	10H				;GO DO A VIDEO INTERRUPT
	ELSE
	IFIDN	<FUNCTION>,<SAVE>		;IF CURSOR SAVE REQUEST
	PUSH	DS				;SAVE DS
	MOV	AX,40H				;GET SEGMENT 40H IN AX
	MOV	DS,AX				;AND PUT IT IN DS
	MOV	CX,DS:60H			;GET CURRENT CURSOR MODE
	POP	DS				;RESTORE DS
	MOV	AREA,CX 			;AND MOVE CURSOR MODE TO AREA
	ELSE
	IFIDN	<FUNCTION>,<SET>		;IF CURSOR SET REQUEST
	MOV	CX,AREA 			;GET CURSOR MODE IN CX
	MOV	AH,1				;SET CURSOR MODE
	INT	10H				;GO DO VIDEO INTERRUPT
	ENDIF
	ENDIF
	ENDIF
	ENDM
CVD	MACRO	DEST,ORG
	LOCAL	CVBP,CVDE
;;***************************************************************************;;
;;									     ;;
;; MACRO: CVD								     ;;
;;									     ;;
;; DESCRIPTION: CONVERT BINARY NUMBER TO  ASCII DECIMAL NUMBER		     ;;
;;									     ;;
;; PARAMATERS: OUTPUT LABEL, INPUT LABEL				     ;;
;;									     ;;
;; INPUT: WORD BINARY NUMBER						     ;;
;;									     ;;
;; OUTPUT: 4 BYTE DECIMAL NUMBER					     ;;
;;									     ;;
;; REGISTERS USED: AX,BX,DX,DI						     ;;
;;									     ;;
;;***************************************************************************;;
	IFDIF	<ORG>,<AX>			;IF BINARY VALUE NOT IN AX
	MOV	AX,WORD PTR ORG 		;MOVE ORIGIN TO AX
	ENDIF
	LEA	DI,DEST 			;GET ADDRESS OF DESTINATION
	MOV	BL,100D 			;DIVISOR TO BL
	DIV	BL				;DIVIDE BY 100
	MOV	BH,AH				;SAVE REMAINDER IN BH
	CALL	CVDP				;CONVERT HIGHORDER  TO DECIMAL
	MOV	AL,BH				;GET REMAINDER
	CALL	CVDP				;CONVERT LOW ORDER TO DECIMAL
	JMP	SHORT CVDE			;JUMP AROUND PROC
CVDP	PROC	NEAR
	AAM					;CONVERT TO PACKED DECIMAL
	OR	AX,3030H			;CONVERT TO ASCII
	MOV	[DI],AH 			;STORE HIGH ORDER BYTE
	INC	DI				;POINT TO NEXT BYTE
	MOV	[DI],AL 			;STORE LOW ORDER BYTE
	INC	DI				;POINT TO NEXT BYTE
	RET					;RETURN TO CALLER
CVDP	ENDP
CVDE	LABEL	NEAR
	ENDM
DISPLAY MACRO	STRING
;;***************************************************************************;;
;;									     ;;
;; MACRO: DISPLAY							     ;;
;;									     ;;
;; DESCRIPTION: PRINT AN ASCII STRING ON THE SCREEN			     ;;
;;									     ;;
;; PARAMATERS: LABEL OF STRING TO BE PRINTED				     ;;
;;									     ;;
;; INPUT: ASCII STRING, ENDING WITH A $ 				     ;;
;;									     ;;
;; OUTPUT: NONE 							     ;;
;;									     ;;
;; REGISTERS USED: AX,DX						     ;;
;;									     ;;
;;***************************************************************************;;
	LEA	DX,STRING			;ADDRESS OF STRING TO DISPLAY
	DOSCALL 9				;DOS PRINT STRING FUNCTION
	ENDM
DOSCALL MACRO	FUNCTION
;;***************************************************************************;;
;;									     ;;
;; MACRO: DOSCALL							     ;;
;;									     ;;
;; DESCRIPTION:  SET UP AND EXECUTE REQUESTED DOS FUNCTION CALL 	     ;;
;;									     ;;
;; PARAMATERS: FUNCTION TO BE CALLED					     ;;
;;									     ;;
;; INPUT: NONE								     ;;
;;									     ;;
;; OUTPUT: NONE 							     ;;
;;									     ;;
;; REGISTERS USED: AX							     ;;
;;									     ;;
;;***************************************************************************;;
	MOV	AH,FUNCTION			;GET FUNCTION IN AH
	INT	21H				;DOS CALL
	ENDM
GETDATE MACRO	DEST,TYPE
	LOCAL	GDTE,GTDP
;;***************************************************************************;;
;;									     ;;
;; MACRO: GETDATE							     ;;
;;									     ;;
;; DESCRIPTION: GETS CURRENT DATE INTO DESTINATION			     ;;
;;									     ;;
;; PARAMATERS: DESTINATION, TYPE OF DATE (CHAR OR BIN)			     ;;
;;									     ;;
;; INPUT: NONE								     ;;
;;									     ;;
;; OUTPUT: MM/DD/YY (CHAR) OR MDYY (BIN)				     ;;
;;									     ;;
;; REGISTERS USED: AX,BX,CX,DX,DI					     ;;
;;									     ;;
;;***************************************************************************;;
	IFIDN	<TYPE>,<CHAR>			;IF CHARACTER REQUEST
	DOSCALL 2AH				;GET DATE FUNCTION CALL
	LEA	DI,DEST 			;GET ADDRESS OF DESTINATION
	MOV	AL,DH				;GET MONTH IN AL
	CALL	GDTP				;CONVERT BYTE TO ASCII
	MOV	WORD PTR [DI],'/'               ;MOVE IN /
	INC	DI				;POINT TO NEXT BYTE
	MOV	AL,DL				;GET DAY IN AL
	CALL	GDTP				;CONVERT BYTE TO ASCII
	MOV	WORD PTR [DI],'/'               ;MOVE IN /
	INC	DI				;POINT TO NEXT BYTE
	MOV	AX,CX				;GET YEAR IN AL
	MOV	BL,100D 			;MOVE IN DIVISOR
	DIV	BL				;DIVIDE BY 100
	MOV	AL,AH				;REMAINDER TO AL
	CALL	GDTP				;CONVERT BYTE TO ASCII
	JMP	SHORT GDTE			;JUMP AROUND PROC
GDTP	PROC	NEAR
	AAM					;CONVERT TO PACKED DECIMAL
	ADD	AX,3030H			;CONVERT TO ASCII
	MOV	BYTE PTR [DI],AH		;STORE HIGH ORDER BYTE
	INC	DI				;POINT TO NEXT BYTE
	MOV	BYTE PTR [DI],AL		;STORE LOW ORDER BYTE
	INC	DI				;POINT TO NEXT BYTE
	RET					;RETURN TO CALLER
GDTP	ENDP
GDTE	LABEL	NEAR
	ELSE
	IFIDN	<TYPE>,<BIN>			;IF BINARY REQUEST
	DOSCALL 2AH				;GET CURRENT DATE
	MOV	BYTE PTR DEST,DH		;MOVE MONTH TO DESTINATION
	MOV	BYTE PTR [DEST+1],DL		;MOVE DAT TO DESTINATION
	MOV	WORD PTR [DEST+2],CX		;MOVE YEAR TO DESTINATION
	ENDIF
	ENDIF
	ENDM
GETTIME MACRO	DEST,TYPE
	LOCAL	GTMP,GTME
;;***************************************************************************;;
;;									     ;;
;; MACRO: GETTIME							     ;;
;;									     ;;
;; DESCRIPTION: GET CURRENT TIME INTO DESTINATION			     ;;
;;									     ;;
;; PARAMATERS: DESTINATION, TYPE (CHAR OR BIN)				     ;;
;;									     ;;
;; INPUT: NONE								     ;;
;;									     ;;
;; OUTPUT: HH:MM:SS:HH (CHAR) OR HMSH (BIN)				     ;;
;;									     ;;
;; REGISTERS USED: AX,BX,CX,DX,DI					     ;;
;;									     ;;
;;***************************************************************************;;
	IFIDN	<TYPE>,<CHAR>			;IF CHARACTER REQUEST
	DOSCALL 2CH				;GET CURRENT TIME
	LEA	DI,DEST 			;GET DESTINATION ADDRESS
	MOV	AL,CH				;MOVE HOURS TO AL
	CALL	GTMP				;AND CONVERT TO ASCII
	MOV	WORD PTR [DI],':'               ;PUT IN :
	INC	DI				;POINT TO NEXT BYTE
	MOV	AL,CL				;MOVE MINUTES TO AL
	CALL	GTMP				;AND CONVERT TO ASCII
	MOV	WORD PTR [DI],':'               ;PUT IN :
	INC	DI				;POINT TO NEXT BYTE
	MOV	AL,DH				;MOVE SECONDS TO AL
	CALL	GTMP				;AND CONVERT TO ASCII
	MOV	WORD PTR [DI],':'               ;PUT IN :
	INC	DI				;POINT TO NEXT BYTE
	MOV	AL,DL				;MOVE HUNDRETHS TO AL
	CALL	GTMP				;AND CONVERT TO ASCII
	JMP	SHORT GTME			;JUMP AROUND PROC
GTMP	PROC	NEAR
	AAM					;CONVERT TO PACKED DECIMAL
	ADD	AX,3030H			;CONVERT TO ASCII
	MOV	BYTE PTR [DI],AH		;STORE HIGH ORDER BYTE
	INC	DI				;POINT TO NEXT BYTE
	MOV	BYTE PTR [DI],AL		;STORE LOW ORDER BYTE
	INC	DI				;POINT TO NEXT BYTE
	RET					;RETURN TO CALLER
GTMP	ENDP
GTME	LABEL	NEAR
	ELSE
	IFIDN	<TYPE>,<BIN>			;IF REQUEST FOR BINARY TIME
	DOSCALL 2CH				;GET CURRENT TIME
	MOV	BYTE PTR DEST,CH		;MOVE HOURS TO DESTINATION
	MOV	BYTE PTR DEST+1,CL		;MOVE MINUTES TO DESTINATION
	MOV	BYTE PTR DEST+2,DH		;MOVE SECONDS TO DESTINATION
	MOV	BYTE PTR DEST+3,DL		;MOVE HUNDRETHS TO DESTINATION
	ENDIF
	ENDIF
	ENDM
LOCATE	MACRO	ROW,COLUMN
	LOCAL	LOC1,LOCD
;;***************************************************************************;;
;;									     ;;
;; MACRO: LOCATE							     ;;
;;									     ;;
;; DESCRIPTION: POSITION CURSOR ON SCREEN				     ;;
;;									     ;;
;; PARAMATERS: ROW, COLUMN						     ;;
;;									     ;;
;; INPUT: BINARY ROW AND COLUMN LOCATION, IF NOT IN MACRO CALL		     ;;
;;									     ;;
;; OUTPUT: NONE 							     ;;
;;									     ;;
;; REGISTERS USED: AX,DX						     ;;
;;									     ;;
;;***************************************************************************;;
	MOV	AL,ROW				;GET BINARY ROW
	AAM					;CONVERT TO PACKED DECIMAL
	ADD	AX,3030H			;CONVERT TO ASCII
	MOV	BYTE PTR [LOCD+2],AH		;HIGH ORDER ROW TO STRING
	MOV	BYTE PTR [LOCD+3],AL		;LOW ORDER ROW TO STRING
	CLEAR	AH				;CLEAR AH AGAIN
	MOV	AL,COLUMN			;GET COLUMN IN AL
	AAM					;CONVERT TO PACKED DECIMAL
	ADD	AX,3030H			;CONVERT TO ASCII
	MOV	BYTE PTR [LOCD+5],AH		;HIGH ORDER COLUMN TO STRING
	MOV	BYTE PTR [LOCD+6],AL		;LOW ORDER COLUMN TI STRING
	DISPLAY LOCD				;POSITION THE CURSOR
	JMP	SHORT LOC1			;JUMP AROUND STRING
LOCD	DB	1BH,'[  ;  H$'                  ;POSITION CURSOR STRING
LOC1	LABEL	NEAR
	ENDM
MOVE	MACRO	TO,FROM,LNGTH
	LOCAL	MOVELP
;;***************************************************************************;;
;;									     ;;
;; MACRO: MOVE								     ;;
;;									     ;;
;; DESCRIPTION: MULTIPLE BYTE MOVE					     ;;
;;									     ;;
;; PARAMATERS: TO LOCATION, FROM LOCATION, LENGTH (OPT.)		     ;;
;;									     ;;
;; INPUT: SOURCE STRING 						     ;;
;;									     ;;
;; OUTPUT: DESTINATION STRING						     ;;
;;									     ;;
;; REGISTERS USED: CX,SI,DI (ES ASSUMED POINTING TO DESTINATION SEGMENT)     ;;
;;									     ;;
;;***************************************************************************;;
	CLEAR	CH				;CLEAR LENGTH REG
	IFB	<LENGTH>			;IF NO LENGTH REQUESTED
	MOV	CX,LENGTH TO			;USE LENGTH OF TO STRING
	ELSE					;IF LENGTH REQUESTED
	MOV	CX,LNGTH			;USE LENGTH IN MACRO
	ENDIF
	IFDIF	<TO>,<DI>			;IF DI NOT SPECIFIED FOR TO
	LEA	DI,TO				;LOAD TO ADDRESS INTO DI
	ENDIF
	IFDIF	<FROM>,<SI>			;IF SI NOT SPECIFIED FOR FROM
	LEA	SI,FROM 			;LOAD FROM ADDRESS INTO SI
	ENDIF
	CLD					;CLEAR DIRECTION FLAG
	REP	MOVSB				;MOVE THE DATA
	ENDM
RESTORE MACRO	R1,R2,R3,R4,R5,R6,R7,R8,R9,R10
;;***************************************************************************;;
;;									     ;;
;; MACRO: RESTORE							     ;;
;;									     ;;
;; DESCRIPTION: RESTORE REGISTERS FROM STACK				     ;;
;;									     ;;
;; PARAMATERS: REGISTERS TO BE RESTORED (IN REVERSE ORDER)		     ;;
;;									     ;;
;; INPUT: NONE								     ;;
;;									     ;;
;; OUTPUT: RESTORED REGISTERS						     ;;
;;									     ;;
;; REGISTERS USED: NONE 						     ;;
;;									     ;;
;;***************************************************************************;;
	IRP	RX,<R10,R9,R8,R7,R6,R5,R4,R3,R2,R1> ;REPEAT FOR EACH PARM
	IFNB	<RX>				;IF THIS PARM NOT BLANK
	POP	RX				;POP THE REGISTER
	ENDIF					;END IFNB
	ENDM					;END IRP
	ENDM
SAVE	MACRO	R1,R2,R3,R4,R5,R6,R7,R8,R9,R10
;;***************************************************************************;;
;;									     ;;
;; MACRO: SAVE								     ;;
;;									     ;;
;; DESCRIPTION: SAVE REGISTERS ON THE STACK				     ;;
;;									     ;;
;; PARAMATERS: REGISTERS TO BE SAVED					     ;;
;;									     ;;
;; INPUT: NONE								     ;;
;;									     ;;
;; OUTPUT: REGISTERS SAVED ON STACK					     ;;
;;									     ;;
;; REGISTERS USED: NONE 						     ;;
;;									     ;;
;;***************************************************************************;;
	IRP	RX,<R1,R2,R3,R4,R5,R6,R7,R8,R9,R10> ;REPEAT FOR EACH PARM
	IFNB	<RX>				;IF THIS PARM NOT BLANK
	PUSH	RX				;SAVE THE REGISTER
	ENDIF					;END IFNB
	ENDM					;END IRP
	ENDM
SETINT	MACRO	INTERRUPT,ROUTINE
;;***************************************************************************;;
;;									     ;;
;; MACRO: SETINT							     ;;
;;									     ;;
;; DESCRIPTION: SET INTERRUPT VECTOR					     ;;
;;									     ;;
;; PARAMATERS: INTERRUPT VECTOR, INTERRUPT ROUTINE ADDRESS		     ;;
;;									     ;;
;; INPUT: NONE								     ;;
;;									     ;;
;; OUTPUT: NONE 							     ;;
;;									     ;;
;; REGISTERS USED: AX,DX						     ;;
;;									     ;;
;;***************************************************************************;;
	MOV	AL,INTERRUPT			;GET INTERRUPT TO BE SET
	LEA	DX,ROUTINE			;GET ADDRESS OF ROUTINE
	DOSCALL 25H				;CALL DOS
	ENDM
SETTIME MACRO	HOURS,MINUTES,SECONDS,HUNDRETHS
;;***************************************************************************;;
;;									     ;;
;; MACRO: SETTIME							     ;;
;;									     ;;
;; DESCRIPTION: SET CURRENT TIME					     ;;
;;									     ;;
;; PARAMATERS: HOURS, MINUTES, SECONDS,HUNDRETHS			     ;;
;;									     ;;
;; INPUT: TIME TO BE SET						     ;;
;;									     ;;
;; OUTPUT: NONE 							     ;;
;;									     ;;
;; REGISTERS USED: AX,CX,DX						     ;;
;;									     ;;
;;***************************************************************************;;
	IFNB	<HOURS> 			;IF HOURS SPECIFIED
	MOV	CH,HOURS			;MOVE HOURS TO CH
	ELSE					;IF HOURS NOT SPECIFIED
	CLEAR	CH				;CLEAR CH
	ENDIF
	IFNB	<MINUTES>			;IF MINUTES SPECIFIED
	MOV	CL,MINUTES			;MOVE MINUTES TO CL
	ELSE					;IF MINUTES NOT SPECIFIED
	CLEAR	CL				;CLEAR CL
	ENDIF
	IFNB	<SECONDS>			;IF SECONDS SPECIFIED
	MOV	DH,SECONDS			;MOVE SECONDS TO DH
	ELSE					;IF SECONDS NOT SPECIFIED
	CLEAR	DH				;CLEAR DH
	ENDIF
	IFNB	<HUNDRETHS>			;IF HUNDRETHS SPECIFIED
	MOV	DL,HUNDRETHS			;MOVE HUNDRETHS TO DL
	ELSE					;IF HNDRETHS NOT SPECIFIED
	CLEAR	DL				;CLEAR DL
	ENDIF
	DOSCALL 2DH				;CALL DOS TO SET TIME
	ENDM

```
{% endraw %}

## OPER.ASM

{% raw %}
```
        NAME    OPTEST
        PAGE    55,132
        TITLE   'OPTEST - TEST MICROSOFT ASSEMBLER OPERATORS'
;
; SHOW OPERATION OF VARIOUS OPERATORS AND DEMONSTRATE SOME
; NOTATIONAL IDIOSYNCRACIES IN THE MICROSOFT IBM PC ASSEMBLER.
;
; RAY DUNCAN, NOVEMBER 1983
;
;
; EVERY OTHER ASSEMBLER I HAVE EVER ENCOUNTERED WILL DISPLAY
; THE TRUE HEX EQUIVALENT OF AN EQUATE IN THE OBJECT CODE COLUMN.
; THE MICROSOFT ASSEMBLER, HOWEVER, SHOWS A SIGNED HEX INTEGER!
;
NEG_ONE EQU     -1      ;SHOULD DISPLAY AS FFFF


; FOR UNKNOWN REASONS, THE MICROSOFT ASSEMBLER ALSO FAILS TO DISPLAY
; THE BYTE SWAPPED NATURE OF SOME 16 BIT VALUES.

        DW      1


; THE MICROSOFT ASSEMBLER MANUAL SAYS NOTHING ABOUT THE SHR
; AND SHL OPERATORS.  HOWEVER, AN EXAMPLE ON PAGE 4-21 STATES
; THAT THE OPERATION 101B SHL (2*2) SHOULD RETURN 01010000B OR 50H,
; IMPLYING THAT THE ORDER OF ARGUMENTS IS DATA SHL SHIFT_COUNT.

        DW      101B SHL (2*2)

; SINCE MICROSOFT'S OWN EXAMPLE DOESN'T WORK WITH THEIR ASSEMBLER,
; BY EXPERIMENTING WE FIND THAT THE EXPECTED ORDER OF ARGUMENTS IS
; SHIFT_COUNT SHL DATA. THIS CONFLICTS WITH THE INTEL SPECIFICATION.

        DW      0 SHL 1
        DW      1 SHL 1
        DW      2 SHL 1

; THE SHR OPERATOR DOESN'T WORK CORRECTLY.  APPARENTLY GIVES
; THE SAME RESULTS AS SHL...

        DW      2 SHL 1
        DW      2 SHR 1

; EXCEPT WHEN IT GIVES NO RESULT AT ALL...

        DW      1 SHL 8
        DW      1 SHR 8

; SHR MAY EVEN GIVE DIFFERENT RESULTS WITH EQUIVALENT DATA

        DW      16 SHR -1
        DW      16 SHR 0FFFFH

; SOMETIMES THE SHL OPERATOR SEEMS TO PERFORM A "LOGICAL SHIFT"

        DW      1 SHL -1
        DW      15 SHL -1

; OTHER TIMES, IT APPEARS TO PERFORM A CIRCULAR SHIFT

        DW      16 SHL -1

; THE EQ OPERATOR DOESN'T WORK PROPERLY

        DW      1 EQ 1
        DW      1 EQ -1

; THE EQ OPERATOR CAN GIVE DIFFERENT RESULTS WITH EQUIVALENT DATA

        DW      1 EQ -1
        DW      1 EQ 0FFFFH

; THE NE OPERATOR IS SIMILARLY AFFLICTED

        DW      1 NE 1
        DW      1 NE -1
        DW      1 NE 0FFFFH

; THE LE, LT, GE, AND GT OPERATORS GIVE CONFUSING RESULTS

        DW      -1 LT 1
        DW      -1 LE 1
        DW      -1 GT 1
        DW      -1 GE 1

; AGAIN, THESE OPERATORS CAN GIVE DIFFERENT RESULTS WITH
; EQUIVALENT DATA

        DW      1 GE -1
        DW      1 GE 0FFFFH

; THE NOT OPERATOR FAILS MISERABLY ON SOME SIGNED INTEGERS

        DW      NOT -1



; SIMILARLY, THE OR OPERATOR FLUBS WITH SIGNED INTEGERS

        DW      -1 OR 0
        DW      0FFFFH OR 0

; THE XOR OPERATOR APPARENTLY WORKS AS AN INCLUSIVE OR
; INSTEAD OF EXCLUSIVE OR

        DW      0 XOR 0
        DW      1 XOR 0
        DW      0 XOR 1
        DW      1 XOR 1

        END
```
{% endraw %}

## PMODE.ASM

{% raw %}
```
         NAME      PMODE
         PAGE      58,132
         TITLE     '        P M O D E   ---  SET LPT1: print options'





COMMENT  /*

   UTILITY TO SET PRINTER (LPT1: PRN) MODES ON IBM PERSONAL COMPUTER

  PMODE is a DOS command (P.COM) which will set frequently used printer
  options on the EPSON MX-80 or MX-100 printer. Only those options that
  I frequently desire are set in order to keep the size of the command
  within 256 bytes, which allows it to fit within one cluster on my RAM
  drive. For the same reason, only one single character keyword option
  may be specified with each execution. You can however issue the
  command multiple times to achieve complimentary results, if they are
  allowed by the printer.

  Only the default printer may be set with this version. Other printers
  may be selected by changing the value in the DH reg just prior to the
  INT 17 in the PRTIO subroutine.

  Other options can be easily added if you keep the keyword to a single
  unique letter of a thru z.

  Due to size no ERROR RECOVERY is performed. If the printer is turned
  off or not ready nothing will happen. The bell is rung with each
  successful execution, (except top of form) to let you know the IO was
  performed.

  I renamed the command to P.COM for easy of execution but you can call
  it whatever you like.






         */
         PAGE


COMMENT  /*


  FORMAT:

    P option

  OPTION:

          T - Eject to next top of form

          B - Ring the bell. Helpful to detect if the printer is ready.

          C - Turn on COMPRESSED print (not valid with EMPHASIZED).

          D - Turn on DOUBLE STRIKE mode.

          E - Turn on EMPHASIZED mode (not valid with COMPRESSED mode).

          N - Turn off automatic skip over perforation.

          S - Set automatic skip over perforation to 6 lines.

          R - RESET printer to power up specifications.

          6 - Set printer spacing to 6 lines per inch.

          8 - Set printer spacing to 8 lines per inch.


  EXAMPLE:

   p n      - Turn off automatic skip over perforation.

   p d      - Turn on double strike.



   (C)Copyright September 1983:

   Timothy M. Hanes               (713) 350-1438

   ASYST Inc.                     (713) 776-9091
   7502 Corporate Dr. Suite 237
   Houston, Tx. 77036

                                                                     */
         PAGE



;**********************
;*       EQUATES      *
;**********************


INPUT    EQU       080H           ;address of command tail
                                  ;buffer (set up by DOS)
BELL     EQU       07H            ;EPSON buzzer
BLANK    EQU       20H            ;ASCII blank code
COMP     EQU       0FH            ;EPSON compressed
CR       EQU       0DH            ;ASCII carriage return
DBLSTK   EQU       47H            ;EPSON double strike
EMPHSIZ  EQU       45H            ;EPSON emphasize
ESC      EQU       1BH            ;ASCII escape code
LF       EQU       0AH            ;ASCII line feed
LPI_6    EQU       32H            ;EPSON 6 lines per inch
LPI_8    EQU       30H            ;EPSON 8 lines per inch
NSOP     EQU       4FH            ;EPSON no skip over perf
RESET    EQU       40H            ;EPSON reset to power up state
SOP      EQU       4EH            ;EPSON skip over perf
TOF      EQU       0CH            ;EPSON advance to top of form

MASK_DF  EQU       11011111B      ;mask to AND lower case to upper case
         PAGE



CSEG     SEGMENT   BYTE
         ASSUME    CS:CSEG,DS:CSEG
         ORG       100H



PMODE:                            ;
         MOV       DI,OFFSET INPUT ;initialize DI to the
                                  ;address of the input buffer
         MOV       AL,[DI]        ;check if any command tail
         OR        AL,AL          ;and if not
         JZ        NODATA         ;go set no input msg
         MOV       AL,BLANK       ;load ASCII blank for scan
         INC       DI             ;increment address in DI
                                  ;past the input count byte
         MOV       CX,80          ;scan max of 80 chars.
         CLD                      ;clear direction flag
         REPZ SCASB               ;look for first non-blank
                                  ;character in input buffer
         JZ        NODATA         ;if none found set no input msg
         XOR       AX,AX          ;zero  AX
         XOR       DX,DX          ;zero  DX
                                  ;load the non-blank char.,
         MOV       DL,-1[DI]      ;use offset 0f -1 since DI
                                  ;will be pointing past it
         CMP       DL,CR          ;if first non-blank char was CR
         JE        NODATA         ;set no input msg

         CMP       DL,'a'         ;compare for lower case a
         JB        SELECT         ;go select if < a
         CMP       DL,'z'         ;compare for lower case z
         JA        SELECT         ;go select if > z
         AND       DL,MASK_DF     ;change lower case to upper case

         PAGE

SELECT:                           ;select the input character
         CMP       DL,'T'         ;was it upper case "T"
         JNE       NOT_T          ;no, go check for next character
SETTOF:  MOV       AL,TOF         ;insert printer code
         JMP       SHORT SENDCODE ;go do printer io

NOT_T:                            ;check input character

         CMP       DL,'C'         ;was it upper case "C"
         JNE       NOT_C          ;no, go check for next character
SETCOMP: MOV       AL,COMP        ;insert printer code
         JMP       SHORT SENDCODE ;go do printer io

NOT_C:                            ;check input character

         CMP       DL,'D'         ;was it upper case "D"
         JNE       NOT_D          ;no, go check for next character
SETDBL:  MOV       AL,DBLSTK      ;insert printer code
         JMP       SHORT ESC1ST   ;go do printer io

NOT_D:                            ;check input character

         CMP       DL,'E'         ;was it upper case "E"
         JNE       NOT_E          ;no, go check for next character
SETEMPH: MOV       AL,EMPHSIZ     ;insert printer code
         JMP       SHORT ESC1ST   ;go do printer io

NOT_E:                            ;check input character

         CMP       DL,'N'         ;was it upper case "N"
         JNE       NOT_N          ;no, go check for next character
SETNSOP: MOV       AL,NSOP        ;insert printer code
         JMP       SHORT ESC1ST   ;go do printer io

NOT_N:                            ;check input character

         CMP       DL,'S'         ;was it upper case "S"
         JNE       NOT_S          ;no, go check for next character
SETSOP:  MOV       AL,SOP         ;insert printer code
         JMP       SHORT ESC1ST   ;go do printer io

NOT_S:                            ;check input character

         CMP       DL,'R'         ;was it upper case "R"
         JNE       NOT_R          ;no, go check for next character
SETRSET: MOV       AL,RESET       ;insert printer code
         JMP       SHORT ESC1ST   ;go do printer io

NOT_R:                            ;check input character

         CMP       DL,'6'         ;was it "6"
         JNE       NOT_6          ;no, go check for next character
SETLPI6: MOV       AL,LPI_6       ;insert printer code
         JMP       SHORT ESC1ST   ;go do printer io

NOT_6:                            ;check input character

         CMP       DL,'8'         ;was it "8"
         JNE       NOT_8          ;no, go check for next character
SETLPI8: MOV       AL,LPI_8       ;insert printer code
         JMP       SHORT ESC1ST   ;go do printer io

NOT_8:                            ;check input character

         CMP       DL,'B'         ;was it upper case "B"
         JE        RINGBELL       ;yes go ring the the bell

;        all other codes come thru here and are invalid

NODATA:                           ;no input data
         MOV       DX,OFFSET MSG1 ;set msg and
                                  ;print the message whose
                                  ;address is in reg DX
PRTMSG:  MOV       AH,9           ;function 9 = print string
         INT       21H            ;call DOS to print
         JMP       SHORT EXIT     ;and exit back to DOS

ESC1ST:                           ;send escape code first
         PUSH      AX             ;save AX
         MOV       AL,ESC         ;move in ASCII 27 escape code
         CALL      PRTIO          ;perform DOS print function
         POP       AX             ;recover AX, contains prt code

SENDCODE:                         ;printer output routine
         CALL      PRTIO          ;perform DOS print function
         CMP       DL,'S'         ;if option  "S"
         JNE       RINGBELL       ;no, ring the bell
         MOV       AL,6           ;set SOP to 6 lines
         CALL      PRTIO          ;perform DOS print function

RINGBELL:                         ;notify user of seccessful IO
         CMP       DL,'T'         ;if option  "T"
         JE        CR_            ;dont ring the bell
         MOV       AL,BELL        ;move in ASCII 7 bell code
         CALL      PRTIO          ;perform DOS print function
CR_:                              ;send carriage return
         CMP       DL,'R'         ;if option  "R"
         JE        EXIT           ;dont send CR
         MOV       AL,CR          ;send CR
         CALL      PRTIO          ;perform DOS print function

EXIT:                             ;
         INT       20H            ;return to DOS
         PAGE



;**********************
;*  CLOSED ROUTINES   *
;**********************



;**********************************************************************


PRTIO:                            ;INT 17 printer I/O routine
         PUSH      DX             ;save DX
         XOR       DX,DX          ;zero DX
         PUSH      AX             ;save AX
         MOV       AH,00H         ;zero AH, AL contains printer code

         INT       17H            ;DOS print function

         POP       AX             ;recover AX
         POP       DX             ;recover DX

         RET                      ;return to caller


;**********************************************************************

         PAGE


;**********************
;*     CONSTANTS      *
;**********************


MSG1     DB        CR,LF
         DB        'Invalid or no input - '
         DB        'options= T B C D E N S R 6 or 8'
         DB        CR,LF,'$'

CSEG     ENDS

         END       PMODE
```
{% endraw %}

## PX.DOC

{% raw %}
```
                            PX Procedure Cross Referencer
                             User's Guide for Ver. 1.00
                                   April 27, 1984

          PURPOSE

          In the process of writing large assembler programs, it sometimes
          becomes difficult to keep track of where procedures (subroutines)
          are located and of where they are referenced (called).  Typically,
          the programmer will include a prologue for each procedure, listing
          the procedures it calls and the procedures from which it is
          called.  Unfortunately, this practice requires the programmer
          to update the procedure prologue every time a new call to it
          is added; this can get pretty tedious for a large program, and
          (also typically) the programmer's good intentions fall by the
          wayside as the program gets larger.

          PX is a procedure documenter.  It allows you to print out all
          of the procedure prologues in a "dictionary" and to then print
          a cross reference of all procedural calls;  i.e., a listing
          of which procs call which procs.  It just makes life a little
          easier.


          WHAT YOU NEED

          You need one or more disk drives, at least 128K of memory, and
          DOS 2.00 or later.  A printer would be nice, but it's not a
          requirement.  PX is designed to understand files written for
          the Microsoft Assembler: IBM's ASM or MASM, or Microsoft Version
          1.25.  With some restrictions, PX will also work with files
          written for Digital Research's RASM-86.


          OUTPUT FORMAT

          PX's output (which can be sent to disk, screen, printer, or
          any other device) is in two parts.  The first part is the procedure
          dictionary; it is simply the text of your procedure prologues,
          preceded by the name of the procedure and the file/line where
          the prologue was found.  The dictionary looks like this:

            PX 1.00 Procedure Dictionary           Date  Time  Page 1

            MYPROC [File THISFILE.ASM at 50]
            ; This is the procedure prologue for MyProc...
            ; It contains whatever you put in it

            VERYSLICK [File THISFILE.ASM at 70]
            ; And this is the prologue for proc VerySlick...
            ; And so on...


                                                                          2
                              ==== PX User's Guide ===

          The second part is the procedure cross reference.  It is formatted
          like this:

            PX 1.00 Procedure Cross Reference      Date  Time  Page x

            Proc MYPROC                 Near in THISFILE.ASM at 56 [1]
            DUMB_PROC GREAT_PROC PROC1 PROC2 VERYSLICK

            Proc VERYSLICK              Far  in THISFILE.ASM at 75 [1]
            PROC6

          The first line of each entry names the procedure, and specifies
          its near/far attribute and the file and line where it was found.
          The number in brackets is the dictionary page where the procedure's
          prologue is printed.  The second and subsequent lines of each
          procedure entry comprise an alphabetical list of procedures
          which contain calls to the named proc.  For example, procedure
          MYPROC is called by DUMB_PROC, GREAT_PROC, PROC1, PROC2, and
          VERYSLICK.

          Note that the line numbers in the dictionary and cross reference
          sections may differ.  In the dictionary, the line number is
          the line where the prologue was found; in the cross reference,
          it is the line where the PROC statement was found.

          At the end of each report, PX will print a line like:

               UnDef: 2   UnRef: 6   Use Factor: 12.1%

          This indicates that PX found calls to 2 procedures that it knew
          nothing about (Undefined), and 6 procedures were defined but
          unreferenced (nobody CALLed them [uncalled for procedures?]). PX
          used about 12.1% of its available table space.


          INCLUDE FILES

          PX processes include files as it encounters them in the source
          files.  However, it will read a given include file only once.
          For example, if you are processing multiple source files, and
          they each INCLUDE the file "MACLIB.ASM", PX will read MACLIB
          only the first time.


          DEFINING PROCEDURE PROLOGUES

          If PX is to be able to print a "dictionary" of procedure prologues,
          it must be able to find the prologues in the source code.  For
          this purpose, PX understands two keywords in your file:  "DICT"
          and "ENDD". You need to bracket your prologues with this pair
          (in comments of course):


                                                                         3
                              ==== PX User's Guide ===

               ;Dict MyProc

               ; --------------------------
               ; Procedure MyProc
               ; Entry conditions:
               ;   ...
               ; Exit conditions:
               ;   ...
               ; --------------------------
               ;EndD
               MyProc proc near
               ...

          When PX reads the file containing the above "code", it will
          print out everything between "Dict MyProc" and "EndD".  It doesn't
          make any difference how you capitalize the two keywords, but
          they MUST begin in the first column after the semicolon.  That
          is, this won't work:

               ;  dict myproc

          The procedure name must follow the DICT keyword;  this enables
          PX to match up procedure CALLs with the dictionary page where
          the prologue appears.


          RUNNING PX

          The basic syntax for invoking PX is as follows:

               PX {infile} {/command}

          The infile(s) specify which assembler source files you want
          PX to read.  For example,

               PX thisfile thatfile

          would read the files "thisfile" and "thatfile", prepare a procedure
          dictionary and cross reference (hereinafter Xref), and display
          the results.  If PX cannot find a file called "thisfile" it
          will search for "thisfile.asm" before it gives up.  You can
          specify up to twenty parameters (input files and commands) on
          one command line.

          The commands are as follows:

               /o=filename    Specifies an output file
               /i=filename    Specifies a command file
               /s=filename    Specifies a "skip" file
               /p=nn:nn       Set output page length:width
               /x             Prepare Xref only
               /d             Prepare dictionary only

  
                                                                          4
                              ==== PX User's Guide ===

          The commands are entered on the DOS command line and are always
          preceded by a slash (/); PX assumes that anything without a
          slash is an assembler source file to be processed.  Here is
          an example of a command line with options:

               PX thisfile thatfile /x /p=66:132 /o=prn

          This PX run will process the files "thisfile" and "thatfile";
          it will produce only an Xref (no dictionary); it will format
          output for pages with 66 lines of 132 characters each; and the
          output will go to the system printer.  We'll now cover each
          of the commands in turn.  (Commands and files may be specified
          on the command line in any order, by the way.)


          OUTPUT FILE SELECTION (/O)

          The /o command tells PX where to send its report.  Any valid
          device that is defined for output to DOS is OK:

               /o=prn    /o=lpt1   /o=com1   /o=con    /o=nul

          You may also send output to a file:

               /o=a:zapdict.txt    /o=crossref

          Due to a compiler restriction, path names cannot currently be
          used in ANY file specifications (input, output, or command).

          Output defaults to console if no /o command is given.


          COMMAND FILE SELECTION (/I)

          PX command lines can be quite long if they contain multiple
          source files and options; it is quite easy to exceed the maximum
          length of a DOS command line (about 160 or so characters).
          It would also be nice to avoid repetitive typing if you are
          going to be using PX a number of times on the same assembler
          project.  Fortunately, PX can obtain its commands from a standard
          DOS text file known as a command file.

          The /i command tells PX to look in a text file for further commands.
          For example, the command "/i=zap.px" tells the program to look
          for additional commands in a file called "zap.px".  (The format
          of command files is detailed later.) If there is no extension
          on the specified command file name and PX cannot find a file
          with that name, it will append ".px" and try again.  For example,
          "/i=zap" would find the file "zap.px" if "zap" did not exist.

          The "i" in "/i", by the way, stands for "input commands".  The
          more logical "/c" is reserved for a future command.
   
                                                                          5
                              ==== PX User's Guide ===



          SKIP FILES (/S)

          PX is interested only in procedures, their prologues, and their
          calls.  It is not interested in macros, data definitions, or
          long files full of equates.  If such files are INCLUDEd in your
          source, you can instruct PX to ignore them with a /s command.
          For example, the command "/s=equates.asm" tells PX to ignore
          the statement "include equates.asm" in the source.  This can
          save you considerable processing time in large projects.


          PAGE SPECS (/P)

          You can specify the length and width of the output medium with
          the /p option.  The format is

               /p=length:width

          Either parameter may be missing. Examples:

               /p=66:132      Set length=66 lines, width=132 cols
               /p=:40         Set width=40
               /p=120         Set length=120

          PX defaults to a page of length 66 and width 80.  It skips about
          6 lines at the end of each page.  Limits: 20 <= length <= 200;
          40 <= width <= 240.


          XREF/DICT ONLY (/X and /D)

          In some cases you may wish to skip either the dictionary or
          the Xref portion of the report.  A "/x" command tells PX to
          print ONLY the Xref; "/d" prints ONLY the dictionary.  Specifying
          BOTH /x and /d is silly, and PX will tell you so.


          COMMAND FILE FORMAT

          Command files are simply DOS text files containing lists of
          PX commands and input files.  You can put as many files/commands
          as you want on each line, separated by commas, space, or tabs.
          The semicolon specifies a comment, just as in MASM; anything
          after a semicolon will be ignored.  Here is an example of a
          command file:


                                                                          6
                              ==== PX User's Guide ===

               ; ----- PX command file for ZAP program
               /p=66:132                     ; Pagesize = 66x132
               zap, edit, display, diskio    ; Input files
               /s=equates, /s=maclib.mac     ; Skip file
               /o=zap.ref                    ; Output to "zap.ref"

          There is one restriction on command files: they cannot be nested.
          That is, a command file cannot contain a "/i" command.

          When PX has completed processing a command file, it returns
          to the command line if there are more parameters.  For example,

               PX  /x  /i=cmdfile.px  /i=cmdfile2.px  /s=xtrafile

          is perfectly OK.


          QUICK PRINCIPLES OF OPERATION

          PX works by scanning for two assembler reserved words: PROC
          and CALL.  When it encounters a PROC statement, it sets up a
          table entry for the named procedure; when it encounters a CALL
          statement, it looks for the CALLed label in the procedure table.
          If no entry is found, a new entry is created and PX waits for
          a later definition.

          A few situations will cause problems for PX:

               o Table-driven calls.  If you set up a table of routines
                    to be called and execute the call via CALL [BX] or
                    some such, PX can't know what's being called.  The
                    call is ignored.

               o Calls to labels not defined via PROC statements (e.g.,
                    CALL LABEL, where LABEL is defined "LABEL:" rather
                    than "LABEL PROC NEAR").  PX creates a table entry
                    for the label, but cannot find a definition.  This
                    results in an undefined procedure.

               o Jumps to procedures. If a procedure is JuMPed to rather
                    than CALLed, PX will not find the reference.

          Note, however, that PX will create a table entry when it encounters
          a ";DICT procname" directive.  You may be able to use this to
          overcome the second problem above.  (This also allows you to
          use PX with RASM-86, which has no PROC statement or equivalent.)
          When a table entry is defined only by a DICT directive, PX will
          not know whether it is NEAR or FAR.


                                                                          7
                              ==== PX User's Guide ===

          LIMITS, RESTRICTIONS, AND QUIRKS

          On a 128K machine, PX has about 63K available for storage of
          the procedure and reference tables.  This is plenty for all
          but the largest projects.  For example, I have used PX on a
          program consisting of 16 files totaling more than 110K of source;
          only about 11% of the available memory was used.  PX is compiled
          using the small memory model (for execution speed), so larger
          amounts of RAM do not increase the available storage.

          PX allows for a maximum of 40 files of any type that it keeps
          track of: source files, include files, and skip files.

          Regrettably, PX does not, at this point, understand the COMMENT
          directive in assembler source.  It will scan anything between
          COMMENT delimiters; if the keywords PROC or CALL appear in the
          comments, you may find some strange results in the cross refer-
          ence. (PROCs or CALLs in procedure prologues are OK.)

          The current version of the C compiler used does not permit path
          names in file specifications.  This should be corrected shortly.

          Due to a compiler oddity, commas cannot be used as command line
          parameter separators; use spaces or tabs.  Commas are OK in
          command files, however.


                       ---------------------------------------

                                   The PX program
                                and this document are
                                Copyright (C) 1984 by

                               Christopher J. Dunford
                              10057-2 Windstream Drive
                              Columbia, Maryland 21044

          -- who hereby authorizes you to use PX for your own private,
          noncommercial use.  You may copy PX for others, but you may
          not charge for the copies or for the use of the program or for
          anything else connected with the PX program, in any manner,
          whatsoever.  Please do not alter or bypass the notice displayed
          at program startup.  You will find it to be unobtrusive and
          in good taste.

          -- and who welcomes your comments, criticisms, suggestions,
          or bug reports (provided they are also unobtrusive and in good
          taste), directed to the above address or to CompuServe 71076,1115.
          He will also accept phone calls, as long as West Coast people
          exercise restraint and recognize that 11PM PST is not a good
          time to call the East Coast.

```
{% endraw %}

## SETOKI.ASM

{% raw %}
```
        TITLE   SET_OKI PRINTER MODES
        PAGE    80,132

; THIS PROGRAM SENDS CONTROL CHARACTERS TO AN OKIDATA MICROLINE 92
; PRINTER CONNECTED AS LPT1.
;
; THE USER IS PRESENTED WITH A MENU OF 16 ITEMS. ANY NUMBER OF
; CONTROL FUNCTIONS MAY BE PERFORMED.
;
; DOS 2.00 WITH ANSI.SYS IS REQUIRED.

CSEG    SEGMENT PARA PUBLIC 'CODE'
        ORG     100H

SET_OKI PROC    FAR
        ASSUME  CS:CSEG,DS:CSEG,ES:NOTHING
SET:    PUSH    DS
        XOR     AX,AX   ;SET RETURN CODE
        PUSH    AX
        PUSH    CS      ;SET DATA SEG
        POP     DS

        MOV     DX,OFFSET TITLES      ;START-UP MESSAGE
        MOV     AH,9
        INT     21H

PROMPT: MOV     AH,8  pe"w*:hr AAL NNO ECHO
        INT     21H     ; CALL DOS TO DO IT
        CMP     AL,0    ;EXTENDED CODE?
        JE      ERROR   ;YES, INVALID
        CMP     AL,27   ; OR ESCAPE?
        JE      DONE

        MOV     WHAT,AL
        CMP     AL,97   ;IS IT LOWER CASE
        JL      UPPER   ; NO, SEE IF LETTER
        SUB     AL,97   ;FORM OFFSET
        ADD     AL,10   ; ADJUST FOR LETTER CODE
        JMP     LETTER

UPPER:  CMP     AL,65   ;IS IT A LETTER?
        JL      NUMBER  ; NO, ASSUME NUMBER
        SUB     AL,65   ;GET OFFSET
        ADD     AL,10
        JMP     LETTER

NUMBER: CMP     AL,57   ;VALID NUMBER?
        JA      ERROR   ; NOPE
        SUB     AL,48   ;TO BINARY VALUE
        JS      ERROR   ;IF LESS THAN ZERO
LETTER: MOV     SI,AX   ;SAVE BINARY CODE
        CMP     AL,15   ;EXCEEDED MENU LIST?
        JA      ERROR   ;YES, OOPS
        ADD     AL,AL   ;TIMES 2 FOR INDEXING
        MOV     BL,AL   ;COPY OFFSET
        SUB     BH,BH   ;CLEAR HI-BYTE
        MOV     CX,WORD PTR CMDS[BX]

        MOV     AX,SI   ;GET CODE BACK
        MUL     TEXT_SIZE
        MOV     BX,AX   ; AS INDEX TO ATTRIBUTE
        MOV     TEXT+2[BX],'1'  ; AND HI-LITE CHOSEN TEXT
        MOV     TEXT+39[BX],'$' ; AND PRINT STOPPER

        MOV     DL,CL
        MOV     AH,5    ;PRINT CHAR IN DL
        INT     21H

        MOV     DL,CH
        MOV     AH,5    ;PRINT CHAR IN DL
        INT     21H

        MOV     DX,OFFSET WORD PTR TEXT
        ADD     DX,BX   ;HI-LITE SELECTED OPTION
        MOV     AH,9
        INT     21H
        MOV     DX,OFFSET ANSWER
        MOV     AH,9    ;CONFIRM SELECTION
        INT     21H
        JMP     PROMPT  ;GET ANOTHER SELECTION

ERROR:  MOV     AH,9
        MOV     DX,OFFSET ERR_MSG       ;INVALID ENTRY
        INT     21H
        JMP     PROMPT

DONE:   MOV     AH,9
        MOV     DX,OFFSET END_MSG       ;ALL SET
        INT     21H
        RET             ;RETURN TO DOS
        PAGE
TEXT_SIZE DB    40      ;LENGTH OF SELECTION ITEMS
TITLES  DB      27,'[2J',27,'[=2H',27,'[0M'
VERSION DB      'SET OKIDATA(R) PRINTER - VER. 1.0'
        DB      27,'[1;41H (C) 1984 VERNON D. BUERG'
;        EACH ENTRY MUST BE 40 BYTES AND IN NUMBER SEQUENCE
TEXT    DB      27,'[0M',27,'[3;1H0 = SIX (6) LPI               ';2754
        DB      27,'[0M',27,'[4;1H1 = PICA 10 CPI               ';3000
        DB      27,'[0M',27,'[5;1H2 = ELITE 12 CPI              ';2800
        DB      27,'[0M',27,'[6;1H3 = CONDENSED 17 CPI          ';2900
        DB      27,'[0M',27,'[7;1H4 = CORRESPONDENCE QUALITY    ';2749
        DB      27,'[0M',27,'[8;1H5 = EMPHASIZED PRINT          ';2784
        DB      27,'[0M',27,'[9;1H6 = STOP ENHANCED/EMPHASIZE   ';2773
        DB      27,'[0M',27,'[10;1H7 = UNDERLINED               ';2767
        DB      27,'[0M',27,'[3;41H8 = EIGHT (8) LPI            ';2756
        DB      27,'[0M',27,'[4;41H9 = DOUBLE PICA, 5 CPI       ';3031
        DB      27,'[0M',27,'[5;41HA = DOUBLE ELITE, 6 CPI      ';2831
        DB      27,'[0M',27,'[6;41HB = DOUBLE CONDENSED, 8.5CPI ';2931
        DB      27,'[0M',27,'[7;41HC = DATA PROCESSING QUALITY  ';2748
        DB      27,'[0M',27,'[8;41HD = ENHANCED PRINT           ';2772
        DB      27,'[0M',27,'[9;41HE = FORM FEED                ';1200
        DB      27,'[0M',27,'[10;41HF = STOP UNDERLINING        ';2768

MSG     DB      27,'[14;18HENTER SELECTION =>     '
        DB      27,'[17;18HESCAPE TO EXIT'
        DB      27,'[14;37H$'

ANSWER  DB      27,'[0M',27,'[15;18H'
WHAT    DB      0,' HAS BEEN PROCESSED',27,'[14;37H $'

ERR_MSG DB      07,27,'[1M',27,'[15;18HINVALID ENTRY           '
        DB      27,'[0M',27,'[14;37H $'

END_MSG DB      27,'[19;20H',27,'[1M ALL SET',27,'[0M$'

CMDS    DB      27,54 ;0        TWO BYTE DECIMAL CODES
        DB      30,00 ;1        REFER TO USER'S MANUAL
        DB      28,00 ;2
        DB      29,00 ;3
        DB      27,49 ;4
        DB      27,84 ;5
        DB      27,73 ;6
        DB      27,67 ;7
        DB      27,56 ;8
        DB      30,31 ;9
        DB      28,31 ;A
        DB      29,31 ;B
        DB      27,48 ;C
        DB      27,72 ;D
        DB      12,00 ;E
        DB      27,68 ;F

SET_OKI ENDP
CSEG    ENDS
        END     SET
```
{% endraw %}

## SQ_RT.ASM

{% raw %}
```
;SQR_T.ASM          10-14-83
;
;PROGRAM TO TAKE KEYBOARD INPUT AND CALCULATE THE SQUARE
;ROOT USING THE SQ ROOT ROUTINE, THEN DISPLAY THE RESULT
;
EXTRN ASCII_BIN:FAR    ;EXTERNAL SUBROUTINE
EXTRN BIN_ASCII:FAR    ;EXTERNAL SUBROUTINE
EXTRN DEC_ADJ:FAR      ;EXTERNAL SUBROUTINE
EXTRN PUT_DEC:FAR
;---------------------------------------
STACK SEGMENT PARA STACK 'STACK'
      DB 256 DUP(0)
STACK ENDS
;----------------------------------------
DATA SEGMENT PARA 'DATA'
ESC           EQU  27  ;ESC USED TO RETURN TO DOS
END_SYM       EQU '\' ;SYMBOL AT END OF STRING
SC_TITLE      DB  'INTEGER SQUARE ROOT ROUTINE\'
TYPE_NUM      DB  'FOR A POSITIVE NUMBER FROM 0 TO 32767\'
INPUT_NUM     DB  'INPUT TEST NUMBER \'
COL_HEADER    DB  'TEST NUMBER            SQ ROOT\'
UNDERLINE     DB  '-----------            --------\'
ERR_MSG1      DB  'NOT VALID NUMBER - REDO \'
ERR_MSG2      DB  'NUMBER TOO LARGE - REDO \'
ERR_MSG3      DB  'NEGATIVE NUMBER - REDO\'
BLANKS        DB  '                         \'  ;25 BLANKS
TEST_STRING   DB  10 DUP(0)
TEST_NUMBER   DW  0  ;THE TEST_STRING CONVERTED TO A NUMBER
CHAR_COUNT    DW  0  ;NO. OF CHARS IN A STRING - CX IN BIOS CALL
SQ_ROOT_VALUE   DW  0  ;CALUCLATED SQ ROOT VALUE
SQ_ROOT_STRING  DB '          \' ;STRING TO PUT CAL VALUE IN FOR DISP
OFFSET_VALUE  DW  0
INPUT_LARGE   DW  0  ;STATUS PASSING INDICATOR
INPUT_STATUS  DW  0  ;STATUS PASSING INDICATOR
DEC_POINT     DW  0
test1         db  'test4\'
test2         db  'test2\'
test3         db  'test3\'
TEST_NUM_CNT  DB  10 DUP (0)   ;STRING TO USE IN FINDING WHERE DECIMAL WAS
TEST_NUMBER_SIZE  DW  0        ;INDICATOR IF TEST_NUMBER <1 OR >1
data ends
;----------------------------------------
CODE  SEGMENT PARA PUBLIC 'CODE'
START PROC FAR
;
;STANDARD PROGRAM PROLOGUE
;
       ASSUME CS:CODE                  

       PUSH DS
       MOV  AX,0
       PUSH AX
       MOV  AX,DATA
       MOV  DS,AX
       ASSUME DS:DATA

       CALL CLEAR_THE_SCREEN 
 ;PUT STRING OF SCREEN

;IF COLOR GRAPHICS MAKE SURE IS MODE 2
        MOV  AH,15
        INT  10H
        CMP  AL,7           ;IS IT MONOCHROME?
        JE  SCREEN_MODE_OK  ;YES
        CMP  AL,2           ;NOT MONO, IS MODE 2?
        JE  SCREEN_MODE_OK  ;YES
        MOV  AH,0           ;NOT MODE 2 SO MAKE IT
        MOV  AL,2           ;   MODE 2
        INT  10H
SCREEN_MODE_OK:

;SC_TITLE
       MOV AH,2         ;CALL TO SET CURSOR POSITION
       MOV  DX,0112H    ;CURSOR POSITION
       MOV  BH,0
       INT  10H
       MOV  BX,OFFSET SC_TITLE  ;PUT SC_TITLE ADDRESS IN BX
       MOV  OFFSET_VALUE,BX     ;PUT ADDRESS IN VARIABLE
       CALL DISPLAY  

;TYPE_NUM
      MOV  AH,2
      MOV  DX,0210H     ;CURSOR POSITION
      MOV  BH,0
      INT  10H
      MOV  BX,OFFSET TYPE_NUM
      MOV  OFFSET_VALUE,BX      ;PUT ADDRESS IN VARIABLE
      CALL DISPLAY

;INPUT_NUM
       MOV  AH,2
       MOV  DX,0310H    ;CURSOR POSITION
       MOV  BH,0
       INT  10H
       MOV  BX,OFFSET INPUT_NUM
       MOV  OFFSET_VALUE,BX
       CALL DISPLAY

;COL_HEADER
       MOV  AH,2        ;CALL TO SET CURSOR POSITION
       MOV  DX,0510H    ;CURSOR POSITION
       MOV  BH,0
       INT  10H
       MOV  BX, OFFSET COL_HEADER
       MOV  OFFSET_VALUE,BX        ;PUT ADDRESS IN VARIABLE
       CALL DISPLAY

;UNDERLINE
       MOV  AH,2
       MOV  DX,0610H     ;CURSOR POSITION
       MOV  BH,0
       INT  10H
       MOV  BX,OFFSET UNDERLINE
       MOV  OFFSET_VALUE,BX
       CALL DISPLAY

;POSITION CURSOR FOR KEYBOARD INPUT
INPUT:
;CLEAR_INPUT_AREA
       MOV  AH,2
       MOV  DH,3
       MOV  DL,25H
       MOV  BH,0
       INT  10H
      
      MOV   BH,0
       MOV  CX,30    ;blank 30 spaces       
       MOV  AH,10    ;WRITE CHAR AT CURSOR LOCATION
       MOV  AL,' '   ;BLANK
       INT  10H

;clear test_string
       LEA  SI,TEST_STRING
       mov   cx,10             ;TEST STRING IS 10 CHAR LONG
next_char:
        MOV  BYTE PTR [SI],' '
        inc  SI
        dec  cx
        cmp  cx,0
        JA  next_char

;SCROLL PART OF SCREEN DOWN TOO BET READY FOR NEXT INPUT
       MOV  AH,7     ;SCROLL ACTIVE PAGE DOWN
       MOV  AL,1     ;NUMBER OF LINES
       MOV  CH,7     ;UPPER LINE TO SCROLL
       MOV  CL,0     ;LEFT COLUMN OF SCROLL
       MOV  DH,23    ;LOWER LINE OF SCROLL
       MOV  DL,79    ;RIGHT COLUMN OF SCROLL
       MOV  BH,0FH   ;ATTRIBUTE OF BLANK LINE
       INT  10H      ;DO IT

       MOV  INPUT_LARGE,0   ;SET TO ZERO AT START-UNDER 65384
       MOV  INPUT_STATUS,0  ;SET TO ZERO AT START-NUMBERS
       MOV  AH,2
       MOV  DX,0325H      ;CURSOR POSITION
       MOV  BH,0
       INT  10H

       CALL READ_KEYS

;PUT THE TEST_NUMBER UNDER THE TEST NUMBER COLUMN HEADING
       MOV  AH,2
       MOV  DX,0711H        ;CURSOR POSITION
       MOV  BH,0
       INT  10H
       MOV  BX,OFFSET TEST_STRING
       MOV  CX,10
PUT_TEST_NUMBER:
       MOV  AL,[BX]         ;PUT STRING CHAR IN AX
       MOV  AH,14           ;FUNCTION CODE FOR WRITE AND ADVANCE CURSOR
       INT  10H
       INC  BX              ;NEXT CHARACTER IN STRING
       LOOP PUT_TEST_NUMBER ;PUT ALL OF STRING + BLANKS



;PREPAIR TO CALL ASCII_BIN ROUTINE
;PUT STARTING ADDRESS OF STRING IN BX
;PUT CHARACTER COUNT IN CX
       MOV  BX,OFFSET TEST_STRING
       MOV  CX,CHAR_COUNT

       CALL ASCII_BIN       ;CONVERT STRING TO NUMBER


      JC  CARRY_SET        ;GO CHECK WHY
      MOV TEST_NUMBER,AX   ;SAVE TEST NUMBER
      MOV  DEC_POINT,DX    ;SAVE DECIMAL POINT
      CMP AX,0             ;CHECK FOR NEGATIVE
      JGE  NUM_OK          ;NUMBER IS GOOD-GO DO SQ ROOT  
      MOV AH,2
      MOV  DX,0730H        ;CURSOR POSITION
      INT  10H
      MOV  BX,OFFSET ERR_MSG3   ;NEGITIVE NUMBER
      MOV  OFFSET_VALUE,BX
      CALL DISPLAY

      JMP  INPUT            ;NEXT KEYBOARD INPUT

BAD_CHAR:
      MOV  AH,2
      MOV  DX,0730H         ;CURSOR POSITION
      MOV  BH,0
      INT  10H
      MOV  BX,OFFSET ERR_MSG1  ;NOT VALID INPUT
      MOV  OFFSET_VALUE,BX
      CALL DISPLAY

      JMP  INPUT           ;GO GET NEXT KEYBOARD INPUT

CARRY_SET:
      cmp  di,0ffh          ;check for bad character
      jne  bad_char

       MOV  AH,2
       MOV  DX,0730H        ;CURSOR POSITION
       MOV  BH,0
       INT  10H
       MOV  BX,OFFSET ERR_MSG2
       MOV  OFFSET_VALUE,BX
       CALL DISPLAY

       JMP  INPUT           ;NOT VALID, GO GET NEW INPUT

NUM_OK:

;ADJUST NUMBER FOR SQUART ROOT ROUTING BY MAKING NUMBER AS LARGE AS 
;POSSIBLE, BUT LESS THEN 32768, BY MULTIPLYING BY 10 AND CHANGINE
;DECIMAL POINT TO MATCH.                                                       
; CALL DEC_ADJ  WITH AX = NUMBER - 16 BIT SIGNED                    
;                    CX = NUMBER OF CHARACTERS TO RIGHT OF DECIMAL POINT
;RETURN WITH AX = NUMBER AND   CX = NUMBER OF CHARACTERS TO RIGHT
;OF DECIMAL POINT THAT TOGETHER = OLD NUMBER
; NOTE CX WILL BE A EVEN NUMBER
   
 
       MOV AX,TEST_NUMBER
       MOV CX,DEC_POINT
       CALL DEC_ADJ     
  
       MOV  TEST_NUMBER,AX
      
;NOW READY TO CALCULATE SQUARE ROOT.  AX IS TO CONTAIN THE TEST
;NUMBER WHEN THE SQ_ROOT ROUTINE IS CALLED AND AX WILL CONTAIN
;THE CALCULATED SQ ROOT ON RET.

        MOV AX,CX         ;PUT DEC POINT IN AX FOR DIVIDE
        CWD
        MOV BX,2
        DIV BX
        MOV  DEC_POINT,AX  ;STORE SQ ROOT OF DEC POINT


 
       MOV  AX,TEST_NUMBER    ;PUT NUMBER IN AX
       CALL SQ_ROOT
       MOV  SQ_ROOT_VALUE,AX  ;SAVE THE CALCULATED SQ ROOT VALUE


;CONVERT THE SQ_ROOT VALUE TO ASCII STRING AND PUT UNDER THE
;SQ ROOT HEADING                            

;CONVERT THE NUMBER TO A ASCII STRING

       MOV  BX,OFFSET SQ_ROOT_STRING      ;PLACE TO PUT RESULT
       CALL BIN_ASCII

;ON RETURN BX HOLDS ADDRESS OF THE STRING AND CX THE COUNT

;POSITION DECIMAL POINT IN SQ ROOT STRING
; CALL   PUT_DEC  WITH
;    AX = 10  SIZE OF STRING 
;    BX = OFFSET OF ASCII STRING
;    CX = NUMBER OF CHARACTERS IN STRING
;    DX = NUMBER OF CHARACTERS TO RIGHT OF DECIMAL
;RETURN IS WITH DECIMAL IN STRING AT BX

       MOV  AX,10
       MOV  DX,DEC_POINT
       CALL PUT_DEC

;SQ_ROOT_STRING NOW CONTAINS THE ANSWER READY FOR DISPLAY

       MOV  AH,2
       MOV  DX,0728H       ;CURSOR POSITION
       MOV  BH,0
       INT  10H

       MOV  BX,OFFSET SQ_ROOT_STRING
       MOV  OFFSET_VALUE,BX
       CALL DISPLAY

       JMP INPUT            ;READY FOR AN OTHER KEYBOARD INPUT

START ENDP
;------------------------------------------
CLEAR_THE_SCREEN  PROC NEAR
       PUSH AX
       PUSH BX
       PUSH CX
       PUSH DX

       STI             ;ENABLE INTERRUPTS
       MOV  AH,0       ;SELECT 80X25, B/W, ALPHANUMERIC
       INT  10H  
       MOV  AH,6       ;CLEAR THE SCREEN WITH THE SCROLL
       MOV  AL,0       ;   UP OPTION
       MOV  CX,0                                       
       MOV  DH,24                       
       MOV  DL,79                                      
       MOV  BH,7                                           
       INT  10H  
            
       POP DX
       POP CX
       POP BX
       POP AX
       RET             ;RETURN TO CALLER
CLEAR_THE_SCREEN ENDP
;------------------------------------------
DISPLAY PROC NEAR
;GET THE CHARACTER COUNT
       MOV  CHAR_COUNT,0      ;SET TO 0 FOR THIS STRING
       MOV  BX,OFFSET_VALUE   ;GET OFFSET OF STRING IN BX
       XOR  AX,AX
LOOP_COUNT:
       MOV  AL,[BX]    ;PUT STRING CHAR IN AL
       CMP  AL,END_SYM  ;IS THIS LAST SYMBOL IN STRING?
       JE   DISP1      
       INC  BX             ;ADDRESS OF NEXT CHARACTER IN STRING
       ADD  CHAR_COUNT,1   ;COUNT OF CHARACTERS IN STRING
       JMP  LOOP_COUNT     ;DO UNTIL END_SYM ENCOUNTERED

;PUT THE STRING ON THE SCREEN
DISP1:  MOV  BX,OFFSET_VALUE     ;GET OFFSET OF STRING IN BX
        MOV  CX,CHAR_COUNT   ;NO. OF CHARACTERS IN STRING
DISP2:  MOV  AL,[BX]         ;GET NEXT CHARACTER 
        CALL DISPCHAR
        INC  BX              ;POINT TO NEXT CHARACTER
        LOOP DISP2           ;DO IT CX TIMES

        RET
DISPLAY ENDP
;---------------------------------------------------------
DISPCHAR PROC NEAR
        PUSH BX
        MOV  BX,0     ;SELECT DISPLAY PAGE 0
        MOV  AH,14    ;FUNCTION CODE FOR 'WRITE'
        INT  10H      ;CALL BIOS
        POP  BX
        RET
DISPCHAR ENDP
;--------------------------------------------------------
READ_KEYS PROC NEAR
       PUSH AX
       PUSH DI
       STI            ;ENABLE INTERRUPTS
       MOV  AH,15     ;READ DISPLAY PAGE NUMBER INTO BX
       INT  10H
       MOV  DI,0      ;SET KEY COUNT TO ZERO
       MOV  CX,5      ;UP TO 5  KEY STROKES
GET_KEY:
       MOV  AH,0      ;READ NEXT KEY
       
       INT 16H
       CMP  AL,ESC    ;IS IT ESC?
       JE   GO_EXIT   ;RETURN TO DOS IN TWO STEPS(JE SHORT-LABEL ONLY)
       CMP  AL,0DH    ;IS IT A CARRIAGE RETURN?
       JE   SAVE_CNT  ;IF IT WAS A CARRIAGE RETURN THEN GO TO NEXT STEP
       MOV  TEST_STRING[DI],AL    ;STORE THE KEY INPUT
       INC  DI                    ;INCREASE THE KEY COUNT
       MOV  AH,14                 ;DISPLAY THE CHARACTER
       PUSH DI                     ;SAVE REGISTER
       INT  10H
       POP  DI
       LOOP GET_KEY               ;GO GET NEXT KEY
SAVE_CNT:
       MOV  CX,DI                 ;PUT FINAL KEY COUNT IN CX
       MOV  CHAR_COUNT,CX         ;STORE NO OF CHARS IN STRING
       LEA  BX,TEST_STRING        ;BUFFER ADDRESS IN BX
       POP DI
       POP AX
       RET               ;RETURN TO CALLER
GO_EXIT:
       POP DI
       POP AX
       POP AX
       JMP EXIT          ;RETURN TO DOS

READ_KEYS ENDP
;----------------------------------------------------------
;-----------------------------------------------------------------
;
;-------------------------------------------------------------
;----------------------------------------------------------------
;INTEGER SQUARE ROOT
;  CALL WITH    AX = ARGUMENT
;  RETURN       AX = SQUARE ROOT
;
SQ_ROOT PROC
SQRT:
        PUSH BX
        PUSH CX
        PUSH DX
        MOV  DX,AX     ;ARGUMENT INTO DX
        MOV  CX,8      ;NUMBER OF ITERATIONS
        XOR  BX,BX     ;CLEAR THE REMAINDER
        MOV  AX,BX     ;CLEAR TRIAL VALUE AND FINAL RESULT STORE

SQRT1:
        SHL  BX,1      ;DOUBLE PARTIAL RESULT
        INC  BX        ;GUESS NEXT BIT IS A 1
        SHL  DX,1      ;FETCH 2 NEW BITS
        RCL  AX,1      ; FROM ARGUMENT
        SHL  DX,1
        RCL  AX,1
        SUB  AX,BX     ;DO A TRIAL SUBTRACTION
        JNC  SQRT2     ;GUESS WAS RIGHT
                       ; APPEND A 1 BIT
        ADD  AX,BX     ;GUESS WAS WRONG, PUT IT BACK
        DEC  BX        ;AND CLEAN UP FOR NEXT PASS
        LOOP SQRT1
        JMP  SQRT3     ;GO SCALE RESULT
SQRT2: 
        INC  BX        ;CONVERT xxxx01 to
                       ;xxxx10, i.e. append a 1 bit
        loop sqrt1
SQRT3:
        SAR  BX,1      ;DIVIDE BY 2 TO GET
                       ;ACTUAL SQUARE ROOT
        MOV  AX,BX     ;RETURN RESULT IN AX

        POP  DX
        POP  CX
        POP  BX
        
        RET            ;RETURN TO CALLER

SQ_ROOT ENDP
;--------------------------------------------------------------------
EXIT_TO_DOS PROC FAR
EXIT:  RET            ;RETURN TO DOS
EXIT_TO_DOS ENDP
;----------------------------------------------------------

CODE   ENDS
       END   START
```
{% endraw %}

## STDBOOT.ASM

{% raw %}
```
		TITLE		STDBOOT
		PAGE		66,132
;-----------------------------------------------------------------------;
;									;
;		DEFINE IBMBIO ENTRY POINT FOR DOS 2.0 (FAR ENTRY)	;
;									;
;	DOS VERSION	IBMBIO ENTRY POINT				;
;	-----------	------------------				;
;									;
;	   1.1		SEGMENT AT 60H					;
;	   2.0		SEGMENT AT 70H					;
;									;
;-----------------------------------------------------------------------;
CSEG		SEGMENT 	AT 70H
BIOENT		LABEL		FAR
CSEG		ENDS
;-----------------------------------------------------------------------;
;									;
;		START OF THE CODE SEGMENT (BOOT RECORD) 		;
;									;
;-----------------------------------------------------------------------;
CODE		SEGMENT 	BYTE PUBLIC 'CODE'
		ASSUME		CS:CODE,DS:CODE,ES:CODE
;-----------------------------------------------------------------------;
;									;
;		INCLUDE BIOS MACROS					;
;									;
;-----------------------------------------------------------------------;
		INCLUDE 	BIOS.MAC
;-----------------------------------------------------------------------;
;									;
;		INCLUDE DOS STRUCTURES					;
;									;
;-----------------------------------------------------------------------;
		INCLUDE 	DOS.STR
		PAGE
;-----------------------------------------------------------------------;
;									;
;		DEFINE ALL THE EQUATES NEEDED BY THIS PROGRAM		;
;									;
;-----------------------------------------------------------------------;
LOAD_OFFSET	EQU		7C00H		;LOAD OFFSET
ATTR_PAGE	EQU		0007H		;ATTRIBUTE BYTE AND PAGE NUMBER
PARITY_MASK	EQU		7FH		;PARITY MASK
WRITE_TTY	EQU		0EH		;BIOS WRITE TTY CODE
WAIT_KEY	EQU		00H		;BIOS WAIT FOR KEY CODE
CRLF		EQU		0A0DH		;CARRIAGE RETURN, LINE FEED
TERM		EQU		00H		;MESSAGE TERMINATOR
READ_CODE	EQU		02H		;BIOS READ DISK COMMAND CODE
READ_COMMAND	EQU		0201H		;READ ONE SECTOR COMMAND
LEN		EQU		0BH		;FILENAME LENGTH (PLUS EXT.)
CONVERT 	EQU		20H		;CONVERSION BYTE
MSG_PTR 	EQU		BYTE PTR [SI]	;MESSAGE POINTER
BIO_PTR 	EQU		BYTE PTR [DI]	;IBMBIO POINTER
DOS_PTR 	EQU		BYTE PTR [DI+32];IBMDOS POINTER
DISK_SEGMENT	EQU		7AH		;DISK TABLE SEGMENT POINTER
DISK_OFFSET	EQU		78H		;DISK TABLE OFFSET POINTER
ENTRY_SIZE	EQU		20H		;DIRECTORY ENTRY SIZE (BYTES)
ROUND_DIR	EQU		1FFH		;ROUND UP VALUE FOR DIR. SIZE
NUM_BYTES	EQU		200H		;BYTES PER SECTOR
DIR_SEG 	EQU		50H		;DIRECTORY SEGMENT VALUE
DIR_OFF 	EQU		00H		;DIRECTORY OFFSET VALUE
DISK_MASK	EQU		03H		;DISK COUNT MASK
HARD_MASK	EQU		80H		;HARD DISK TEST MASK
SHIFT_COUNT	EQU		06H		;SHIFT COUNT
		PAGE
;-----------------------------------------------------------------------;
;									;
;		START OF THE BOOT RECORD				;
;									;
;-----------------------------------------------------------------------;
ENTRY		PROC		NEAR
;-----------------------------------------------------------------------;
;									;
;		SET UP JUMP TO START OF CODE AND OEM NAME AND VERSION	;
;									;
;	DOS VERSION	OEM NAME AND VERSION NUMBER			;
;	-----------	---------------------------			;
;									;
;	   1.1		IBM  1.1					;
;	   2.0		IBM  2.0					;
;									;	;									;
;-----------------------------------------------------------------------;
		JMP		START
DIR_OFFSET	EQU		$+LOAD_OFFSET
TRACK_NUMBER	EQU		$+5+LOAD_OFFSET
OEM		DB		"IBM  2.0"
		PAGE
;-----------------------------------------------------------------------;
;									;
;		SET UP THE BIOS PARAMETER BLOCK AND OPTION BLOCK FOR 2.0;
;									;
;	DOS VERSION	DISK FORMAT	BPB BLOCK			;
;	-----------	-----------	---------			;
;									;
;	   1.1		SINGLE SIDED	<512,1,1,2,64,320,0FEH,1>	;
;	   1.1		DOUBLE SIDED	<512,2,1,2,112,640,0FFH,1>	;
;	   2.0		SINGLE SIDED	<512,1,1,2,64,360,0FCH,2>	;
;	   2.0		DOUBLE SIDED	<512,2,1,2,112,720,0FDH,2>	;
;									;
;	DOS VERSION	DISK FORMAT	BPB OPTION BLOCK		;
;	-----------	-----------	----------------		;
;									;
;	   1.1		SINGLE SIDED	<8,1,0> 			;
;	   1.1		DOUBLE SIDED	<8,2,0> 			;
;	   2.0		SINGLE SIDED	<9,1,0> 			;
;	   2.0		DOUBLE SIDED	<9,2,0> 			;
;									;
;-----------------------------------------------------------------------;
BPB		EQU		$+LOAD_OFFSET
IBMBIO_OFFSET	EQU		$+8+LOAD_OFFSET
SECTOR_NUMBER	EQU		$+10+LOAD_OFFSET
		BPB_BLOCK	<512,2,1,2,112,720,0FDH,2>
OPT		EQU		$+LOAD_OFFSET
SECTORS 	EQU		BYTE PTR $+LOAD_OFFSET
		BPB_OPTION	<9,2,0>
		PAGE
;-----------------------------------------------------------------------;
;									;
;		SET UP DISK READ FROM, HEAD NUM., AND NUMBER OF SECTORS ;
;									;
;	DOS VERSION	SECTORS TO READ 				;
;	-----------	--------------- 				;
;									;
;	   1.1		14H (DECIMAL 20)				;
;	   2.0		0AH (DECIMAL 20)				;
;									;
;		NOTE - THE DISK READ FROM IS AS FOLLOWS:		;
;									;
;		       00H - 03H = FLOPPY DISK 0 - 3			;
;		       80H - 83H = HARD DISK 0 - 3			;
;									;
;-----------------------------------------------------------------------;
DISK_AND_HEAD	EQU		WORD PTR $+LOAD_OFFSET
DISK_READ_FROM	EQU		BYTE PTR $+LOAD_OFFSET
		DB		00H
HEAD_NUMBER	EQU		BYTE PTR $+LOAD_OFFSET
		DB		00H
NUM_SECTORS	EQU		BYTE PTR $+LOAD_OFFSET
		DB		0AH
;-----------------------------------------------------------------------;
;									;
;		SET UP THE DISK PARAMETER TABLE FOR 2.0 		;
;									;
;  DOS VERSION		    DISK PARAMETER TABLE			;
;  -----------		    --------------------			;
;									;
;     1.1		<0DFH,2H,25H,2H,8H,2AH,0FFH,50H,0F6H,0H,4H>	;
;     2.0		<0DFH,2H,25H,2H,9H,2AH,0FFH,50H,0F6H,0H,2H>	;
;									;
;-----------------------------------------------------------------------;
DISK_TABLE	EQU		$+LOAD_OFFSET
		DSK_PRM_TABLE	<0DFH,2H,25H,2H,9H,2AH,0FFH,50H,0F6H,0H,2H>
;-----------------------------------------------------------------------;
;									;
;		RE-TRY CODE (COME HERE TO RE-TRY THE BOOT)		;
;									;
;-----------------------------------------------------------------------;
RETRY		LABEL		NEAR
		BOOT
		PAGE
START		LABEL		NEAR
;-----------------------------------------------------------------------;
;									;
;		TURN OFF INTERRUPTS AND SET UP THE STACK		;
;									;
;-----------------------------------------------------------------------;
		CLI
		XOR		AX,AX
		MOV		SS,AX
		MOV		SP,LOAD_OFFSET
;-----------------------------------------------------------------------;
;									;
;		SET UP THE NEW DISK PARAMETER TABLE			;
;									;
;-----------------------------------------------------------------------;
		MOV		DS,AX
		MOV		[DS:DISK_SEGMENT],AX
		MOV		[DS:DISK_OFFSET],OFFSET DISK_TABLE
;-----------------------------------------------------------------------;
;									;
;		ALLOW INTERRUPTS AND RESET DISK SYSTEM, JUMP IF ERROR	;
;									;
;-----------------------------------------------------------------------;
		STI
		DISK
		JNC		RESET_OK
		JMP		BOOT_ERROR
		PAGE
;-----------------------------------------------------------------------;
;									;
;		COMPUTE NUMBER OF SECTORS USED BY THE FAT TABLES	;
;									;
;-----------------------------------------------------------------------;
RESET_OK	LABEL		NEAR
		PUSH		CS
		POP		DS
		MOV		AL,[DS:BPB].NUM_FATS
		CBW
		MUL		WORD PTR [DS:BPB].SECTORS_PER_FAT
;-----------------------------------------------------------------------;
;									;
;		ADD IN THE NUMBER OF HIDDEN AND RESERVED SECTORS	;
;									;
;-----------------------------------------------------------------------;
		ADD		AX,[DS:OPT].HIDDEN_SECTORS
		ADD		AX,[DS:BPB].RES_SECTORS
;-----------------------------------------------------------------------;
;									;
;		SAVE THE COMPUTED SECTOR OFFSET 			;
;									;
;-----------------------------------------------------------------------;
		MOV		[DS:DIR_OFFSET],AX
		MOV		[DS:IBMBIO_OFFSET],AX
;-----------------------------------------------------------------------;
;									;
;		COMPUTE DIRECTORY SIZE IN SECTORS			;
;									;
;-----------------------------------------------------------------------;
		MOV		AX,ENTRY_SIZE
		MUL		WORD PTR [DS:BPB].ROOT_DIR_ENTRIES
		ADD		AX,ROUND_DIR
		MOV		BX,NUM_BYTES
		DIV		BX
;-----------------------------------------------------------------------;
;									;
;		UPDATE THE SAVED OFFSET VALUE				;
;									;
;-----------------------------------------------------------------------;
		ADD		[DS:IBMBIO_OFFSET],AX
;-----------------------------------------------------------------------;
;									;
;		CALL ROUTINE TO CHECK FOR SYSTEM DISK, JUMP IF ERROR	;
;									;
;-----------------------------------------------------------------------;
		CALL		DISK_CHECK
		JC		RETRY
		PAGE
;-----------------------------------------------------------------------;
;									;
;		SET UP TO READ IBMBIO AND IBMDOS INTO MEMORY		;
;									;
;-----------------------------------------------------------------------;
		MOV		AX,[DS:IBMBIO_OFFSET]
		MOV		[DS:SAVE_OFFSET],AX
		MOV		AX,SEG BIOENT
		MOV		ES,AX
		MOV		DS,AX
		MOV		BX,OFFSET BIOENT
;-----------------------------------------------------------------------;
;									;
;		READ A SECTION INTO MEMORY (WHOLE OR PARTIAL TRACK)	;
;									;
;-----------------------------------------------------------------------;
READ_LOOP	LABEL		NEAR
		MOV		AX,[CS:IBMBIO_OFFSET]
		CALL		COMPUTE_ADDRESS
		MOV		AL,[CS:SECTORS]
		SUB		AL,[CS:SECTOR_NUMBER]
		INC		AL
		XOR		AH,AH
		PUSH		AX
		MOV		AH,READ_CODE
		CALL		READ_DISK
		POP		AX
		JC		BOOT_ERROR
;-----------------------------------------------------------------------;
;									;
;		CHECK FOR MORE LEFT TO READ, JUMP IF ALL READ IN	;
;									;
;-----------------------------------------------------------------------;
		SUB		[CS:NUM_SECTORS],AL
		JBE		READ_DONE
;-----------------------------------------------------------------------;
;									;
;		UPDATE SECTOR OFFSET AND TRANSFER OFFSET AND READ AGAIN ;
;									;
;-----------------------------------------------------------------------;
		ADD		[CS:IBMBIO_OFFSET],AX
		MUL		WORD PTR [CS:BPB].BYTES_PER_SECTOR
		ADD		BX,AX
		JMP		READ_LOOP
		PAGE
;-----------------------------------------------------------------------;
;									;
;		SET UP REGISTERS AS FOLLOWS AND JUMP TO IBMBIO		;
;									;
;		AX - IF 0 THEN FLOPPY BOOT, IF NOT 0 THEN HARD DISK BOOT;
;		BX - SECTOR OFFSET TO IBMBIO AND IBMDOS 		;
;		CX - NUMBER OF FLOPPY DRIVES (STILL 2 IF ONLY 1 DRIVE)	;
;									;
;-----------------------------------------------------------------------;
READ_DONE	LABEL		NEAR
		PUSH		CS
		POP		DS
		EQUIP
		ROL		AL,1
		ROL		AL,1
		AND		AX,DISK_MASK
		JNZ		MULTIPLE_DISK
		INC		AX
MULTIPLE_DISK	LABEL		NEAR
		INC		AX
		MOV		CX,AX
		TEST		BYTE PTR [DS:DISK_READ_FROM],HARD_MASK
		JNZ		HARD_DISK_BOOT
		XOR		AX,AX
HARD_DISK_BOOT	LABEL		NEAR
		MOV		BX,[DS:SAVE_OFFSET]
		JMP		BIOENT
		PAGE
;-----------------------------------------------------------------------;
;									;
;		BOOT ERROR ROUTINE, PRINT MESSAGE AND LOOP FOREVER	;
;									;
;-----------------------------------------------------------------------;
BOOT_ERROR	LABEL		NEAR
		MOV		SI,OFFSET MSG2
		CALL		PRINT_MESSAGE
DEAD_END	LABEL		NEAR
		JMP		DEAD_END
;-----------------------------------------------------------------------;
;									;
;		PRINT MESSAGE ROUTINE, PRINT MESSAGE AND RETURN 	;
;									;
;-----------------------------------------------------------------------;
PRINT_MESSAGE	LABEL		NEAR
		LODS		CS:MSG_PTR
		AND		AL,PARITY_MASK
		JZ		RETURN_INST
		MOV		AH,WRITE_TTY
		MOV		BX,ATTR_PAGE
		VIDEO
		JMP		PRINT_MESSAGE
;-----------------------------------------------------------------------;
;									;
;		ROUTINE TO CHECK FOR SYSTEM DISK, FIRST SET UP REGS.	;
;									;
;-----------------------------------------------------------------------;
DISK_CHECK	LABEL		NEAR
		MOV		AX,DIR_SEG
		MOV		ES,AX
		PUSH		CS
		POP		DS
;-----------------------------------------------------------------------;
;									;
;		GET SECTOR OFFSET TO DIRECTORY AND COMPUTE DISK ADDR.	;
;									;
;-----------------------------------------------------------------------;
		MOV		AX,[CS:DIR_OFFSET]
		CALL		COMPUTE_ADDRESS
;-----------------------------------------------------------------------;
;									;
;		READ IN FIRST SECTOR OF DIRECTORY, JUMP IF ERROR	;
;									;
;-----------------------------------------------------------------------;
		MOV		BX,DIR_OFF
		MOV		AX,READ_COMMAND
		CALL		READ_DISK
		JC		DISK_ERROR
		PAGE
;-----------------------------------------------------------------------;
;									;
;		CONVERT FIRST TO ENTRIES TO LOWERCASE WITH BLANKS	;
;									;
;-----------------------------------------------------------------------;
		XOR		DI,DI
		MOV		CX,LEN
CONVERSION_LOOP LABEL		NEAR
		OR		ES:BIO_PTR,CONVERT
		OR		ES:DOS_PTR,CONVERT
		INC		DI
		LOOP		CONVERSION_LOOP
;-----------------------------------------------------------------------;
;									;
;		CHECK FIRST ENTRY FOR IBMBIO, JUMP IF NO MATCH		;
;									;
;-----------------------------------------------------------------------;
		XOR		DI,DI
		MOV		SI,OFFSET IBMBIO
		MOV		CX,LEN
		CLD
		REPZ		CMPSB
		JNZ		DISK_ERROR
;-----------------------------------------------------------------------;
;									;
;		CHECK SECOND ENTRY FOR IBMDOS, JUMP IF NO MATCH 	;
;									;
;-----------------------------------------------------------------------;
		MOV		DI,ENTRY_SIZE
		MOV		SI,OFFSET IBMDOS
		MOV		CX,LEN
		REPZ		CMPSB
		JNZ		DISK_ERROR
RETURN_INST	LABEL		NEAR
		RET
		PAGE
;-----------------------------------------------------------------------;
;									;
;		DISK ERROR ROUTINE, PRINT MESSAGE AND WAIT FOR KEY	;
;									;
;-----------------------------------------------------------------------;
DISK_ERROR	LABEL		NEAR
		MOV		SI,OFFSET MSG1
		CALL		PRINT_MESSAGE
		MOV		AH,WAIT_KEY
		KEYBOARD
;-----------------------------------------------------------------------;
;									;
;		SET THE ERROR FLAG AND RETURN (WILL TRY TO REBOOT)	;
;									;
;-----------------------------------------------------------------------;
		STC
		RET
;-----------------------------------------------------------------------;
;									;
;		COMPUTE DISK ADDRESS ROUTINE, SET UP THE REGISTERS	;
;									;
;-----------------------------------------------------------------------;
COMPUTE_ADDRESS LABEL		NEAR
		PUSH		DS
		PUSH		CS
		POP		DS
		XOR		DX,DX
;-----------------------------------------------------------------------;
;									;
;		COMPUTE CYLINDER NUMBER WITH SECTOR REMAINDER		;
;									;
;-----------------------------------------------------------------------;
		DIV		[DS:OPT].SECTORS_PER_TRACK
		INC		DL
		MOV		[DS:SECTOR_NUMBER],DL
;-----------------------------------------------------------------------;
;									;
;		COMPUTE TRACK NUMBER WITH HEAD NUMBER REMAINDER 	;
;									;
;-----------------------------------------------------------------------;
		XOR		DX,DX
		DIV		[DS:OPT].NUMBER_OF_HEADS
		MOV		[DS:HEAD_NUMBER],DL
		MOV		[DS:TRACK_NUMBER],AX
;-----------------------------------------------------------------------;
;									;
;		RESTORE ORIGINAL DS REGISTER AND RETURN TO CALLER	;
;									;
;-----------------------------------------------------------------------;
		POP		DS
		RET
		PAGE
;-----------------------------------------------------------------------;
;									;
;		READ THE DISK ROUTINE, SET UP TRACK NUMBER		;
;									;
;-----------------------------------------------------------------------;
READ_DISK	LABEL		NEAR
		MOV		DX,[CS:TRACK_NUMBER]
		MOV		CL,SHIFT_COUNT
		SHL		DH,CL
;-----------------------------------------------------------------------;
;									;
;		SET UP THE SECTOR NUMBER				;
;									;
;-----------------------------------------------------------------------;
		OR		DH,[CS:SECTOR_NUMBER]
		MOV		CX,DX
		XCHG		CH,CL
;-----------------------------------------------------------------------;
;									;
;		SET UP HEAD AND DRIVE NUMBER THEN READ DISK AND RETURN	;
;									;
;-----------------------------------------------------------------------;
		MOV		DX,[CS:DISK_AND_HEAD]
		DISK
		RET
		PAGE
;-----------------------------------------------------------------------;
;									;
;		SET UP A SAVE AREA FOR IBMBIO OFFSET			;
;									;
;-----------------------------------------------------------------------;
SAVE_OFFSET	EQU		WORD PTR $+LOAD_OFFSET
		DW		0
MSG1		EQU		$+LOAD_OFFSET
		DW		CRLF
		DB		"Non-System disk or disk error"
		DW		CRLF
		DB		"Replace and strike any key when ready"
		DW		CRLF
		DB		TERM
MSG2		EQU		$+LOAD_OFFSET
		DW		CRLF
		DB		"Disk Boot failure"
		DW		CRLF
		DB		TERM
IBMBIO		EQU		$+LOAD_OFFSET
		DB		"ibmbio  com0"
IBMDOS		EQU		$+LOAD_OFFSET
		DB		"ibmdos  com0"
ENTRY		ENDP
CODE		ENDS
		END		ENTRY
```
{% endraw %}

## SWITCH_1.ASM

{% raw %}
```
;..............................................................................
;         THIS IS AN ASSEMBLER PROGRAM IN '.COM' FORM.WILL NOT RUN AS .EXE    .
;                                                                             .
;  SET UP ADDRESS FOR THE DATA USED BY THE ROM BIOS.                          .
;  THE EQUIPMENT FLAG CAN BE CHANGED TO FOOL THE SYSTEM INTO THINKING THAT THE.
;  COLOR/GRAPHICS BOARD EXITS INSTEAD OF THE MONOCHROME BOARD.                .
;                                                                             .
;  <---------|----------->                                                    .
;               AA--DISPLAY TYPE                                              .
;  DISPLAY TYPE: 1 - COLOR CARD 40 X 25                                       .
;                2 - COLOR CARD 80 X 25                                       .
;                3 - MONOCHROME DISPLAY                                       .
;..............................................................................
ROM_BIOS_DATA    SEGMENT  AT 40H
RS232_BASE       DW    4 DUP(?)	        ;ADDRESSES OF RS232 ADAPTER
PRINTER_BASE     DW    4 DUP(?)	        ;ADDRESSES OF PRINTER
EQUIP_FLAG	 DW    ? 	        ;INSTALLED HARDWARE	 
ROM_BIOS_DATA    ENDS 


;..............................................................................
;  THIS IS THE START OF THE EXECUTABLE CODE.                                  .
;.............................................................................. 
CSEG	 SEGMENT PARA 'CODE'		 
	 ASSUME CS:CSEG,DS:ROM_BIOS_DATA  
         ORG   100H              ;Set starting point for a COM file
SWITCH:  MOV   AX,ROM_BIOS_DATA  ;Set up data segment to point to data         
         MOV   DS,AX
 
         MOV   DX,RS232_BASE
         XOR   AH,AH             ;AH = 0 calls for set-mode function
         MOV   BX,EQUIP_FLAG     ;Get the current equipment flag
         MOV   CX,BX             ;Make a copy of the flag
         AND   CX,30H            ;Pick off the display information
         XOR   BX,CX             ;Erase current display information
         OR    BX,10H            ;Set to color display, 40 x 25
         MOV   AL,0              ;BW 40X25 mode
         CMP   CX,30H            ;Was it set to monochrome display?
         JE    S1                ;Yes, then set to BW, 40x25
         OR    BX,30H            ;No, set to monochrome display
         MOV   AL,7              ;Monochrome mode 
S1:      MOV   EQUIP_FLAG,BX     ;Write flag back to memory 
         INT   10H               ;Make request to BIOS to set display mode 

         INT   20H               ;Return to DOS 

CSEG     ENDS 

         END   SWITCH 
```
{% endraw %}

## SWITCH_2.ASM

{% raw %}
```
;..............................................................................
; SWITCH2.ASM                                                                 .
;                                                                             .
;         THIS IS AN ASSEMBLER PROGRAM IN '.COM' FORM.WILL NOT RUN AS .EXE    .
;                                                                             .
;  SET UP ADDRESS FOR THE DATA USED BY THE ROM BIOS.                          .
;  THE EQUIPMENT FLAG CAN BE CHANGED TO FOOL THE SYSTEM INTO THINKING THAT THE.
;  COLOR/GRAPHICS BOARD EXITS INSTEAD OF THE MONOCHROME BOARD.                .
;                                                                             .
;  <- - - - - - - - | - - - - - - - ->  EQUIP_FLAG                            .
;                         ^ ^ --display type
;               AA--DISPLAY TYPE                                              .
;  DISPLAY TYPE: 1 - COLOR CARD 40 X 25                                       .
;                2 - COLOR CARD 80 X 25                                       .
;                3 - MONOCHROME DISPLAY                                       .
;..............................................................................
ROM_BIOS_DATA    SEGMENT  AT 40H
RS232_BASE       DW    4 DUP(?)	        ;ADDRESSES OF RS232 ADAPTER
PRINTER_BASE     DW    4 DUP(?)	        ;ADDRESSES OF PRINTER
EQUIP_FLAG	 DW    ? 	        ;INSTALLED HARDWARE	 
ROM_BIOS_DATA    ENDS 


;..............................................................................
;  THIS IS THE START OF THE EXECUTABLE CODE.                                  .
;.............................................................................. 
CSEG	 SEGMENT PARA 'CODE'		 
	 ASSUME CS:CSEG,DS:ROM_BIOS_DATA  
         ORG   100H              ;Set starting point for a COM file
SWITCH:  MOV   AX,ROM_BIOS_DATA  ;Set up data segment to point to data         
         MOV   DS,AX

         MOV   CH,0FH            ;Remove cursor by placing out of display range
         MOV   CL,0
         MOV   AH,1              ;Set cursor type, to clear cursor
         INT   10H

         MOV   AH,6              ;Scroll screen to clear screen
         MOV   AL,0              ;Blank entire screen
         XOR   CX,CX             ;Upper left corner at 0,0
         MOV   DL,70             ;Lower right corner at 79,24
         MOV   DH,24             
         MOV   BH,07             ;Fill attributes with 7 for normal display
         INT   10H               ;Clear screen

      
 
         XOR   AH,AH             ;AH = 0 calls for set-mode function
         MOV   BX,EQUIP_FLAG     ;Get the current equipment flag
         MOV   CX,BX             ;Make a copy of the flag
         AND   CX,30H            ;Pick off the display information
         XOR   BX,CX             ;Erase current display information
         OR    BX,20H            ;Set to color display, 40 x 25
         MOV   AL,2              ;BW 40X25 mode
         CMP   CX,30H            ;Was it set to monochrome display?
         JE    S1                ;Yes, then set to BW, 40x25
         OR    BX,30H            ;No, set to monochrome display

         MOV   AL,7              ;Monochrome mode 
S1:      MOV   EQUIP_FLAG,BX     ;Write flag back to memory 
         INT   10H               ;Make request to BIOS to set display mode 

         INT   20H               ;Return to DOS 

CSEG     ENDS 

         END   SWITCH 
```
{% endraw %}

## SWPTR.ASM

{% raw %}
```
PAGE	60,132
TITLE	SWPTR.ASM - Swap LPT1 and LPT2 base addresses.

COMMENT \

		COPYRIGHT 1983 by	Thomas M. Rowlett
					11296 Windsor Court
					Ijamsville, Maryland  21754
					(301) 831-9382

	This program exchanges the printer addresses for LPT1 and
	LPT2 in the BIOS Data Area (see page 3-7 of the IBM
	Personal Computer Technical Reference Manual for further
	information).

	This program is made available to all members of the Capital
	PC Users Group for their own personal use and not for resale
	in any manner.	The program may be modified and distributed
	but it is requested that the original copyright remain in the
	program.

	Code modified by J.A. Poth for PC-SIG, 2. March 1987, to
	conform to the more stringent error checking of Microsoft
	Macro Assembler version 4.00.  Original code caused fatal
	errors due to careless use of NAMES and LABELS.        \
 
DISPLAY	MACRO	MSG		;Display message string on screen.
	MOV	DX,OFFSET MSG	;Point DX to MSG.
	MOV	AH,09H		;DOS Display String function.
	INT	21H		;DOS function call.
	ENDM
;
DATA	SEGMENT AT 40H
RS232	DW	4 DUP (?)	;RS-232 base addresses @ 0400-0407 hex.
LPT1	DW	?		;LPT1 base address at 0408H (port 0).
LPT2	DW	?		;LPT2 base address at 040AH (port 1).
DATA	ENDS
;
SUBTTL	MAIN PROGRAM SECTION
PAGE
CSEG	SEGMENT PARA PUBLIC 'CODE'
MAIN	PROC	FAR
	ASSUME	CS:CSEG,DS:CSEG,ES:DATA
;
	ORG	5DH		;Address of command line param.
PARAM	DB	?		;Get command line parameter.
;
	ORG	100H	;BEGIN CODING SECTION.  Organized as .COM file.
BEGIN:	DISPLAY	MSG1		;Display header.
	MOV	AX,DATA 	;Get DATA starting address.
	MOV	ES,AX		;Point ES to data.
	MOV	AL,PARAM 	;Evaluate command line parameter:
	CMP	AL,'I'		;Is it "I" for "Inspect"?
	JNE	SWAP		;If not, swap the pointers.
	DISPLAY	MSG5		;Display 'Inspect'.
	CALL	PTMSG2		;Display printer base addresses.
	DISPLAY	MSG7	 	;DONE - Display inspect end message.
	JMP	EXIT		;Done.  Return to DOS.
;
SWAP:	DISPLAY	MSG3		;Display 'Before -' on screen.
	CALL	PTMSG2		;Display beginning status of pointers.
	MOV	DX,LPT1 	;Move pointer for LPT1 to DX.
	MOV	AX,LPT2 	;Move pointer for LPT2 to AX.
	MOV	LPT1,AX 	;Move old LPT2 pointer to LPT1.
	MOV	LPT2,DX 	;Move old LPT1 pointer to LPT2.
	DISPLAY	MSG4		;Display 'After -' on screen.
	CALL	PTMSG2		;Display result of swap.
	DISPLAY	MSG6		;Display completion message.
;
	MOV	AH,1		;ROM BIOS Initialize Printer function.
	MOV	DX,0		;Select printer at logical port 0.
	INT	17H		;ROM BIOS function call.
EXIT:	MOV	AH,4CH		;DOS Process Terminate function.
	INT	21H		;DOS function call.  -DONE-
;
;
PAGE
PTMSG2	PROC	NEAR
; SUBROUTINE TO DISPLAY STATUS OF POINTERS.
;
	MOV	BX,LPT1
	MOV	AL,BH		;CONVERT HIGH-ORDER BYTE OF LPT1.
	CALL	HEXCHAR
	MOV	PL1,AX
	MOV	AL,BL		;CONVERT LOW-ORDER BYTE OF LPT1.
	CALL	HEXCHAR
	MOV	PL2,AX
	MOV	BX,LPT2
	MOV	AL,BH		;CONVERT HIGH-ORDER BYTE OF LPT2.
	CALL	HEXCHAR
	MOV	PL3,AX
	MOV	AL,BL		;CONVERT LOW-ORDER BYTE OF LPT2.
	CALL	HEXCHAR
	MOV	PL4,AX
	DISPLAY	MSG2		;Display base addresses.
	RET
PTMSG2	ENDP
;
;
HEXCHAR PROC	NEAR
; SUBROUTINE TO CONVERT ONE BYTE TO 2 HEX CHARACTERS
; Characters are returned in AX register in reverse order so that
; a MOV x,AX will store the characters in their proper order in 'x'
;
	XOR	AH,AH		;Clear work register (high-order byte).
	CALL	HXBYTE		;Convert first 4 bits to hex char and
				; store in AH.
	MOV	DH,AH		;Save high-order character in DH
				; temporarily.
	XOR	AH,AH		;Clear AH again.
	CALL	HXBYTE		;Convert low-order four bits and save
				; in AH.
	MOV	AL,DH		;Move high-order character back into
				; low-order of AX.
	RET			;Return with AX set LLHH.
HEXCHAR ENDP
;
;
HXBYTE	PROC	NEAR
; SUBROUTINE TO CONVERT HEX CHAR IN AL TO DISPLAY HEX IN AH.
;
	MOV	CL,04H		;Set shift count register.
	SHL	AX,CL		;Shift AX left 4 bits.
	OR	AH,30H		;Make it ASCII 0-9 (30H - 3FH).
	CMP	AH,3AH		;Is it less than 3A hex?
	JB	HXCEX		;It is - digits 0-9.  Done.
	ADD	AH,07H		;Else, make it ASCII A-F.
HXCEX:	RET			;Done - return.
HXBYTE	ENDP
;
;------ data area begins -------
MSG1	DB	'SWAP LPT1 AND LPT2 BASE ADDRESSES IN BIOS DATA AREA:'
	DB	13,10,10
	DB	'               LPT1:     LPT2:',13,10,'$'
MSG2	DB	'      '
PL1	DW	'XX'
PL2	DW	'XX'
	DB	'      '
PL3	DW	'XX'
PL4	DW	'XX'
	DB	13,10,'$'
MSG3	DB	'Before - ','$'
MSG4	DB	'After  - ','$'
MSG5	DB	'Inspect  ','$'
MSG6	DB	10,'LPT1 AND LPT2 BASE ADDRESSES SWAPPED.',13,10,'$'
MSG7	DB	10,'$'
;------ data area ends ---------
;
MAIN	ENDP
CSEG	ENDS
	END	BEGIN
```
{% endraw %}

## SYSINT.ASM

{% raw %}
```
page 66,132
;+
;	.title sysint
; index  system interrupt call function   sysint()
;
; Usage
;	sysint(inum,&inreg,&outreg);
;
; in
;	int	inum;		; interrupt number to execute
;	int	inreg[4];	; input registers ax,bx,cx,dx
;
; out
;	int	outreg[4];	; registers returned ax,bx,cx,dx
;
; Description
;	This is a system interface call to allow system intrinsic functions
;      to be called from C. Parameters are passed via the register values
;      stored in inreg for input to the system call and returned in the
;      outreg struct. The default values for the segment registers are the
;      same as C routines.
;
; status
;	ax register is returned as status
;
; bugs
;	low level internal routine must be modified to be ported.
;
; Updates
;
;	date		vers	who	description
;	15-aug-83	0001	EJK	Added documemtation
;-
pgroup	group	prog
prog	segment byte	public 'prog'
	assume	cs:pgroup
	public	sysint

sysint	proc	near
	push bp 	;save bp
	mov bp,sp	;sp->bp
	mov ax,[bp]+4	;get int#
	mov cs:itm+1,al ;set int#
	mov si,[bp]+6	;in struc
	mov ax,[si]	;set ax
	mov bx,[si]+2	;set bx
	mov cx,[si]+4	;set cx
	mov dx,[si]+6	;set dx
	push bp 	;save bp2
itm	equ  this byte	; 'this byte' is a keyword.
	int 16		;interrupt
	pop bp		;restore bp2
	mov si,[bp]+8	;out struc
	mov [si],ax	;ret ax
	mov [si]+2,bx	;ret bx
	mov [si]+4,cx	;ret cx
	mov [si]+6,dx	;ret dx
	pop bp		;restore bp
	ret		;return
sysint	endp
prog	ends
	end
```
{% endraw %}

## SYSINT2.ASM

{% raw %}
```
page 66,132
;+
;       .title sysint
; index  system interrupt call function   sysint()
;
; Usage
;       int flags;
;
;       flags = sysint(inum,&inreg,&outreg);
;
; in
;       int     inum;           ; interrupt number to execute
;       int     inreg[4];       ; input registers ax,bx,cx,dx
;
; out
;       int     outreg[4];      ; registers returned ax,bx,cx,dx
;       sysint                  ; flag register returned
;
; Description
;       This is a system interface call to allow system intrinsic functions
;      to be called from C. Parameters are passed via the register values
;      stored in inreg for input to the system call and returned in the
;      outreg struct. The default values for the segment registers are the
;      same as C routines.
;
; status
;       ax register is returned as status
;
; bugs
;       low level internal routine must be modified to be ported.
;
; Updates
;
;       date            vers    who     description
;       15-aug-83       0001    EJK     Added documemtation
;       13-sep-83       0002    CMC     Added flag register return
;-
pgroup  group   prog
prog    segment byte    public 'prog'
        assume  cs:pgroup
        public  sysint

sysint  proc    near
        push bp         ;save bp
        mov bp,sp       ;sp->bp
        mov ax,[bp]+4   ;get int#
        mov cs:itm+1,al ;set int#
        mov si,[bp]+6   ;in struc
        mov ax,[si]     ;set ax
        mov bx,[si]+2   ;set bx
        mov cx,[si]+4   ;set cx
        mov dx,[si]+6   ;set dx
        push bp         ;save bp2
itm     equ  this byte  ; 'this byte' is a keyword.
        int 16          ;interrupt
        pop bp          ;restore bp2
        mov si,[bp]+8   ;out struc
        mov [si],ax     ;ret ax
        mov [si]+2,bx   ;ret bx
        mov [si]+4,cx   ;ret cx
        mov [si]+6,dx   ;ret dx
        pop bp          ;restore bp
	pushf           ;save return flag register on stack
        pop ax          ;restore flag register in ax
        ret             ;return
sysint  endp
prog    ends
        end
```
{% endraw %}

## TESTLINE.ASM

{% raw %}
```
     PAGE,132
     EXTRN DRAWLINE:FAR

;     DAN ROLLINS  (213) 246-5021
;
;     TESTLINE---sample driver for DRAWLINE
;---------------------------------------------------------------
STACK   SEGMENT  PARA STACK 'STACK '
        DB       64 DUP('STACK   ')
STACK   ENDS
;---------------------------------------------------------------
DATA    SEGMENT  PARA PUBLIC 'DATA'

PARMS   DW       7 DUP (?)

;equates make it easier to program access to arguments

X1      EQU      WORD PTR [SI]
Y1      EQU      WORD PTR [SI+2]
X2      EQU      WORD PTR [SI+4]
Y2      EQU      WORD PTR [SI+6]
COLOR   EQU      WORD PTR [SI+8]
LEN     EQU      WORD PTR [SI+10]
SKIP    EQU      WORD PTR [SI+12]
DATA    ENDS
;---------------------------------------------------------------
TESTSEG SEGMENT PARA PUBLIC 'CODE'
        ASSUME  CS:TESTSEG, DS:DATA

TESTLINE PROC FAR
        PUSH  DS          ;save program prefix segment for exit
        XOR   AX,AX
        PUSH  AX          ;word of 0000 for exit return address

        MOV   AH,0        ;set mode function
        MOV   AL,4        ;med-res graphics
        INT   10H         ;initialize graphics mode

        MOV   AX,DATA     
        MOV   DS,AX               ;set up data segment
        MOV   SI,OFFSET DS:PARMS  ;point si to line parameter block

        MOV   COLOR,3     ;white  
        MOV   X1,0        ;start is top left of screen 
        MOV   Y1,0 
        MOV   X2,319      ;end is bottom right 
        MOV   Y2,199 

        MOV   LEN,0       ;display entire line
        MOV   SKIP,0
        CALL  DRAWLINE
        RET               ;program exits to DOS (or DEBUG)
TESTLINE   ENDP
TESTSEG  ENDS
         END    TESTLINE
```
{% endraw %}

## TRACE02.DOC

{% raw %}
```

		TRACE02.COM
		Copyright (C) 1983 By C.P. Fricano

This program will display the current values of the CS:IP
registers. The CS:IP can be sampled a maximum of 18 times
per second. This program must be the last inperupt handler loaded.
The DOS command line looks like this:

		A>TRACE02 /xx

Where xx is a decimal dividend from 01 to 99.
The sample time is figured by dividing 18.2 by the value of xx.
For expamle: TRACE02 /01 ( or just TRACE02 ) will
sample the CS:IP 18.2 times per second.
TRACE02 /18 will sample the CS:IP aprox. 1 time per second.

Any comments or suggestions concerning this program should be
addressed to:
	Chuck Fricano
	P.O. Box 16147
	Pittsburgh , PA  15242


```
{% endraw %}

## UASM-LST.BAS

{% raw %}
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
{% endraw %}

## UNDOS.ASM

{% raw %}
```
	TITLE	UNDOS		;UN-DOS A SYSTEM DISK
	PAGE	25,80		;25 LINES PER PAGE, 80 COLUMNS PER LINE
CODE	SEGMENT BYTE PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
EXTFCB	STRUC
FLAG	DB	0FFH		;EXTENDED FCB FLAG BYTE
RES1	DB	5 DUP (0)	;RESERVED FOR SYSTEM USE
ATTR	DB	06H		;ATTRIBUTE BYTE (HIDDEN, SYSTEM)
DRV	DB	0		;DRIVE NUMBER
FILE	DB	"        "      ;FILE NAME
EXT	DB	"   "           ;FILE EXTENSION
BLK	DW	0		;CURRENT BLOCK NUMBER
REC	DW	0		;LOGICAL RECORD SIZE OF FILE
SIZE1	DW	0		;LSB OF FILE SIZE
SIZE2	DW	0		;MSB OF FILE SIZE
DATE	DW	0		;DATE FILE WAS CREATED
TIME	DW	0		;TIME THE FILE WAS CREATED
RES2	DB	8 DUP (0)	;RESERVED FOR SYSTEM USE
RELREC	DB	0		;CURRENT RELATIVE RECORD NUMBER (IN BLOCK)
RREC1	DW	0		;LSB OF RELATIVE RECORD NUMBER
RREC2	DW	0		;MSB OF RELATIVE RECORD NUMBER
SAVE1	DW	0		;SAVE AREA ONE
SAVE2	DW	0		;SAVE AREA TWO
SAVE3	DW	0		;SAVE AREA THREE
EXTFCB	ENDS			;END OF EXTFCB STRUCTURE
INPUT	EQU	0C08H		;CLEAR KEYBOARD BUFFER THEN INPUT CODE
PRINT	EQU	09H		;PRINT STRING FUNCTION CODE
OPEN	EQU	0FH		;OPEN FILE FUNCTION CODE
CLOSE	EQU	10H		;CLOSE FILE FUNCTION CODE
GETDRV	EQU	19H		;GET CURRENT DEFAULT DRIVE FUNCTION CODE
SETDTA	EQU	1AH		;SET DISK TRANSFER ADDRESS FUNCTION CODE
TABLE	EQU	1CH		;GET ALLOCATION TABLE ADDRESS FUNCTION CODE
RBLKRD	EQU	27H		;RANDOM BLOCK READ FUNCTION CODE
RBLKWR	EQU	28H		;RANDOM BLOCK WRITE FUNCTION CODE
DSPEC	EQU	BYTE PTR 5CH	;POINTER TO DRIVE SPECIFICATION
PARAM	EQU	BYTE PTR 5DH	;POINTER TO INPUT PARAMETER
BAD	EQU	0FFH		;ERROR CODE
CONV	EQU	40H		;BINARY TO ASCII CONVERSION FACTOR
ZERO	EQU	00H		;ZERO BYTE
ONE	EQU	01H		;ONE WORD
BLANK	EQU	20H		;ASCII BLANK
CRLF	EQU	0A0DH		;ASCII LINE FEED, CARRIAGE RETURN
BIOMAX	EQU	8000H		;MAXIMUM BYTE COUNT FOR IBMBIO FILE
DOSMAX	EQU	2000H		;MAXIMUM BYTE COUNT FOR IBMDOS FILE
EXIT	MACRO			;TERMINATE INTERRUPT MACRO
	INT	20H		;DO THE TERMINATE INTERRUPT 20
	ENDM			;END OF THE EXIT MACRO
DOS	MACRO			;DOS INTERRUPT CALL MACRO
	INT	21H		;DO THE DOS INTERRUPT 21
	ENDM			;END OF DOS MACRO
	ORG	100H		;ORIGIN ADDRESS FOR COM FILES
UNDOS	PROC	NEAR		;ENTRY POINT FROM DOS 1.1
	JMP	SHORT START	;GO TO THE START-UP POINT
ILLEGAL LABEL	NEAR		;ILLEGAL PARAMETER CODE SECTION
	MOV	DX,OFFSET MSG2	;POINT TO ILLEGAL PARAMETER MESSAGE
	JMP	MSGRET		;GO PRINT THE MESSAGE AND RETURN TO DOS
INVALID LABEL	NEAR		;INVALID DRIVE CODE SECTION
	MOV	DX,OFFSET MSG1	;POINT TO INVALID DRIVE MESSAGE
	JMP	MSGRET		;GO PRINT THE MESSAGE AND RETURN TO DOS
INSERT	LABEL	NEAR		;INSERT CORRECT DISK SECTION
	MOV	AL,[DEFAULT]	;GET CURRENT DEFAULT DRIVE NUMBER
	ADD	AL,CONV 	;CONVERT DRIVE NUMBER TO ASCII
	MOV	[DRIVE],AL	;STUFF DRIVE NUMBER IN MESSAGE
	MOV	DX,OFFSET MSG3	;POINT TO INSERT SYSTEM DISK MESSAGE
	MOV	AH,PRINT	;GET PRINT STRING FUNCTION CODE
	DOS			;PRINT THE MESSAGE
	MOV	AX,INPUT	;LOAD AX WITH CLEAR BUFFER AND INPUT CODE
	DOS			;GO WAIT FOR ANY CHARACTER
	XOR	AL,AL		;ZERO THE AL REGISTER
START	LABEL	NEAR		;INITIAL STARTING CODE (FROM ENTRY POINT)
	CMP	[DS:PARAM],BLANK;CHECK FOR ENTERED FILENAME OR PARAMETER
	JNZ	ILLEGAL 	;JUMP IF FILENAME OR PARAMETER ENTERED
	CMP	AL,BAD		;CHECK FOR INVALID DRIVE SPECIFICATION
	JZ	INVALID 	;JUMP IF INVALID DRIVE SPECIFIED
	MOV	AL,[DS:DSPEC]	;GET THE REQUESTED DRIVE NUMBER
	MOV	[IBMDOS].DRV,AL ;PUT DRIVE NUMBER IN IBMDOS.COM FCB
	MOV	[IBMBIO].DRV,AL ;PUT DRIVE NUMBER IN IBMBIO.COM FCB
	MOV	AH,OPEN 	;LOAD AH WITH OPEN FILE FUNCTION CODE
	MOV	DX,OFFSET IBMBIO;POINT TO FCB FOR IBMBIO.COM FILE
	DOS			;ATTEMPT TO OPEN THE FILE IBMBIO.COM
	OR	AL,AL		;CHECK TO SEE IF FILE IS PRESENT
	JNZ	INSERT		;JUMP IF THIS IS NOT A GOOD DISK
	MOV	DX,OFFSET IBMDOS;POINT TO FCB FOR IBMDOS.COM FILE
	MOV	AH,OPEN 	;LOAD AH WITH OPEN FILE FUNCTION CODE
	DOS			;ATTEMPT TO OPEN THE FILE IBMDOS.COM
	OR	AL,AL		;CHECK TO SEE IF FILE IS PRESENT
	JNZ	INSERT		;JUMP IF THIS IS NOT A GOOD DISK
	MOV	AH,SETDTA	;LOAD AH WITH SET DTA FUNCTION CODE
	MOV	DX,OFFSET DTA2	;POINT TO DISK TRANSFER ADDRESS FOR IBMBIO.COM
	DOS			;SET THE DISK TRANSFER ADDRESS
	MOV	AX,ONE		;LOAD AX WITH ONE
	MOV	[IBMBIO].REC,AX ;SET IBMBIO.COM RECORD SIZE TO ONE
	MOV	[IBMDOS].REC,AX ;SET IBMDOS.COM RECORD SIZE TO ONE
	MOV	BX,OFFSET IBMBIO;POINT TO FCB FOR IBMBIO.COM
	MOV	CX,BIOMAX	;LOAD CX WITH MAXIMUM RECORD COUNT (BYTES)
	CALL	READ		;CALL ROUTINE TO READ IN THE FILE
	MOV	BX,OFFSET IBMBIO;POINT TO FCB FOR IBMBIO.COM
	MOV	DX,OFFSET DTA2	;POINT TO WHERE READ IN
	CALL	WIPE		;CALL ROUTINE TO WIPE-OUT THE CODE
	MOV	DX,OFFSET DTA1	;POINT TO DISK TRANSFER ADDRESS FOR IBMDOS.COM
	MOV	AH,SETDTA	;LOAD AH WITH SET DTA FUNCTION CODE
	DOS			;SET THE DISK TRANSFER ADDRESS
	MOV	BX,OFFSET IBMDOS;POINT TO FCB FOR IBMDOS.COM
	MOV	CX,DOSMAX	;LOAD CX WITH MAXIMUM RECORD COUNT (BYTES)
	CALL	READ		;CALL ROUTINE TO READ THE FILE
	MOV	BX,OFFSET IBMDOS;POINT TO FCB FOR IBMDOS.COM
	MOV	DX,OFFSET DTA1	;POINT TO WHERE IT WAS READ IN
	CALL	WIPE		;CALL ROUTINE TO WIPE-OUT THE CODE
	MOV	DX,OFFSET DTA2	;POINT TO DISK TRANSFER AREA FOR IBMBIO.COM
	MOV	AH,SETDTA	;LOAD AH WITH SET DTA FUNCTION CODE
	DOS			;SET THE DISK TRANSFER ADDRESS
	MOV	BX,OFFSET IBMBIO;POINT TO IBMBIO.COM FCB
	CALL	WRITE		;CALL ROUTINE TO WRITE THE FILE
	MOV	DX,OFFSET DTA1	;POINT TO DISK TRANSFER AREA FOR IBMDOS.COM
	MOV	AH,SETDTA	;LOAD AH WITH SET DTA FUNCTION CODE
	DOS			;SET THE DISK TRANSFER ADDRESS
	MOV	BX,OFFSET IBMDOS;POINT TO IBMDOS.COM FCB
	CALL	WRITE		;CALL ROUTINE TO WRITE THE FILE
	MOV	DX,OFFSET MSG4	;POINT TO SYSTEM ERASED MESSAGE
MSGRET	LABEL	NEAR		;PRINT MESSAGE AND RETURN TO DOS SECTION
	MOV	AH,PRINT	;LOAD AH WITH PRINT STRING FUNCTION CODE
	DOS			;PRINT THE MESSAGE
	EXIT			;RETURN CONTROL TO PC-DOS
UNDOS	ENDP			;END OF SYS PROCEDURE
WIPE	PROC	NEAR		;PROCEDURE TO WIPE-OUT DISK TRANSFER AREA
	MOV	CX,[BX].SAVE3	;GET THE NUMBER OF BYTES TO WIPE-OUT
	MOV	DI,DX		;GET OFFSET TO DISK TRANSFER AREA
	PUSH	DS		;SAVE A COPY OF DS ON THE STACK
	POP	ES		;PUT THE DS COPY INTO ES (POINT ES:DI TO DTA)
	XOR	AL,AL		;ZERO THE AL REGISTER
	REPZ	STOSB		;ZERO THE DISK TRANSFER AREA
	RET			;RETURN TO THE CALLER
WIPE	ENDP			;END OF THE WIPE PROCEDURE
READ	PROC	NEAR		;ROUTINE TO READ A FILE
	MOV	AH,RBLKRD	;LOAD AH WITH RANDOM BLOCK READ CODE
	MOV	DX,BX		;POINT DX TO FCB
	DOS			;READ THE BLOCK
	MOV	[BX].SAVE3,CX	;SAVE THE FILE SIZE (BYTES)
	MOV	AX,[BX].DATE	;GET DATE CREATED
	MOV	[BX].SAVE1,AX	;SAVE DATE CREATED
	MOV	AX,[BX].TIME	;GET TIME CREATED
	MOV	[BX].SAVE2,AX	;SAVE TIME CREATED
	RET			;RETURN TO THE CALLER
READ	ENDP			;END OR READ PROCEDURE
WRITE	PROC	NEAR		;ROUTINE TO WRITE THE FILE
	MOV	DX,BX		;MOVE FCB POINTER TO DX
	XOR	AX,AX		;ZERO AX REGISTER
	MOV	[BX].RREC1,AX	;SET LSB OF RELATIVE RECORD NUMBER TO ZERO
	MOV	[BX].RREC2,AX	;SET MSB OF RELATIVE RECORD NUMBER TO ZERO
	INC	AX		;INCREMENT AX TO ONE
	MOV	[BX].REC,AX	;SET RELATIVE RECORD SIZE TO ONE (BYTE)
	MOV	AH,RBLKWR	;LOAD AH WITH RANDOM BLOCK WRITE CODE
	MOV	CX,[BX].SAVE3	;GET RECORD COUNT (FILE SIZE IN BYTES)
	DOS			;WRITE THE FILE
	MOV	AX,[BX].SAVE1	;GET SAVED DATE CREATED (ORIGINAL)
	MOV	[BX].DATE,AX	;SAVE AS CURRENT DATE
	MOV	AX,[BX].SAVE2	;GET SAVED TIME CREATED (ORIGINAL)
	MOV	[BX].TIME,AX	;SAVE AS CURRENT TIME
	MOV	AH,CLOSE	;LOAD AH WITH CLOSE FILE CODE
	DOS			;CLOSE THE FILE
	RET			;RETURN TO THE CALLER
WRITE	ENDP			;END OF WRITE PROCEDURE
MSG1	EQU	THIS WORD	;MESSAGE NUMBER ONE
	DB	"Invalid drive specification$"
MSG2	EQU	THIS WORD	;MESSAGE NUMBER TWO
	DB	"Invalid parameter$"
MSG3	EQU	THIS WORD	;MESSAGE NUMBER THREE
	DB	"Insert system disk in drive "
DRIVE	EQU	THIS BYTE	;DRIVE NUMBER IN PRINT MESSAGE
	DB	"A"
	DW	CRLF
	DB	"and strike any key when ready"
	DW	CRLF
	DB	"$"
MSG4	EQU	THIS WORD	;MESSAGE NUMBER SIX
	DB	"System erased!$"
DEFAULT EQU	THIS BYTE	;SAVE AREA FOR CURRENT DEFAULT DRIVE NUMBER
	DB	0
IBMBIO	EXTFCB	<,,,,"IBMBIO","COM">
IBMDOS	EXTFCB	<,,,,"IBMDOS","COM">
CHK	EQU	THIS WORD/2*2
OFF	EQU	THIS WORD-CHK
DTA1	EQU	THIS WORD+1	;DISK TRANSFER AREA ONE (FILE IBMDOS)
DTA2	EQU	DTA1+DOSMAX	;DISK TRANSFER AREA TWO (FILE IBMBIO)
CODE	ENDS			;END OF CODE SEGMENT
	END	UNDOS		;END OF UNDOS COMMAND
```
{% endraw %}

## VMODE.ASM

{% raw %}
```
         name      vmode
         page      55,132
         title     'VMODE --- Set PC Video Mode'
;
; VMODE utility to set display
; mode on IBM Personal Coeputer
;
; Ray Duncan, July 1983   (Transcribed from Sept 1983 Softtalk p.181)
;
input    equ       080h           ;address of command tail
                                  ;buffer (set up by DOS)
blank    equ       20h            ;ASCII blank code
cr       equ       0dh            ;ASCII carriage return
lf       equ       0ah            ;ASCII line feed
;
;
cseg     segment   byte
         assume    cs:cseg,ds:cseg
         org       100h
;
vmode:                            ;initialize DI to the
                                  ;address of the input buffer
         mov       di,offset input
         mov       al,[di]        ;check if any command tail
         or        al,al          ;and exit if not
         jz        vmode7
         mov       al,blank       ;load ASCII blank for scan
         inc       di             ;increment address in DI
                                  ;past the input count byte
         mov       cx,80          ;scan max of 80 chars.
         cld                      ;clear direction flag
         repz scasb               ;look for first non-blank
                                  ;character in input buffer
         jz        vmode7         ;jump if none found
                                  ;load the non-blank char.,
                                  ;use offset 0f -1 since DI
                                  ;will be pointing past it
         mov       al,-1[di]
         cmp       al,cr          ;if first non-blank char
                                  ;was RETURN, mode was missing
         jz        vmode7         ;so go print error message
         cmp       al,'0'         ;make sure it is range 0-7
         jb        vmode8         ;exit if ASCII code is <'0'
         cmp       al,'7'         ;compare for '7'
         ja        vmode8         ;exit if ASCII code >'7'
         mov       vmodeb,al      ;store mode number into
                                  ;output string
         and       al,0fh         ;mask off upper four bits
                                  ;of character. to get 0-7
         push      ax             ;save mode for later
         xor       bx,bx          ;zero BX
         mov       es,bx          ;set ES=zero
         mov       bx,410h        ;set BX=addr of DOS's
                                  ;equipment flags word
         cmp       al,7           ;check if monochrome
                                  ;or graphics board
         mov       al,30h         ;assume monochrome
         jz        vmode6
         mov       al,20h         ;no, was graphics board
vmode6:                           ;mask off the old
                                  ;display equipment flags
         and   byte ptr es:[bx],0cfh
                                  ;merge in the proper flag
                                  ;for the newly selected display
         or        es:[bx],al
         pop       ax             ;recover mode
         xor       ah,ah          ;force AH=zero
         int       10h            ;and call ROM BIOS
                                  ;to set new display,
                                  ;go print success message,
                                  ;and exit
         mov       dx,offset vmodea
         jmp       short vmode9
vmode7:                           ;print "missing mode number"
         mov       dx,offset vmodec
         jmp       short vmode9
vmode8:                           ;print "illegal mode number"
         mov       dx,offset vmoded
vmode9:                           ;print the message whose
                                  ;address is in reg DX
         mov       ah,9           ;function 9 = print string
         int       21h            ;call DOS to print
                                  ;and exit back to DOS
         int       20h
;
vmodea   db        cr,lf
         db        'Video mode set to '
vmodeb   db        ' ',cr,lf,'$'
vmodec   db        cr,lf
         db        'Missing mode number '
         db        cr,lf,'$'
vmoded   db        cr,lf
         db        'Illegal mode number '
         db        cr,lf,'$'
;
cseg     ends
;
         end       vmode
```
{% endraw %}

## VW-TO-WS.ASM

{% raw %}
```
        NAME    VWTOWS
        PAGE    55,132
        TITLE   'VWTOWS --- FILTER VW TEXT FILE FOR WORDSTAR'

;
; VWTOWS -- CONVERT VOLKSWRITER FILE TO WORDSTAR DOCUMENT FILE.
; EXTRA SEQUENTIAL SPACES ARE CONVERTED TO "SOFT SPACES".
; PARAGRAPH MARKERS ARE CONVERTED TO "HARD CARRIAGE RETURNS".
; NORMAL CR'S ARE CONVERTED TO "SOFT CARRIAGE RETURNS".
; ALL OTHER CONTROL CHARACTERS EXCEPT FOR LINE FEEDS AND FORM
; FEEDS ARE DISCARDED.

; VERSION 1.0    10 DEC 83
;
; COPYRIGHT (C) 1983 BY RAY DUNCAN

CR      EQU     0DH             ;ASCII CARRIAGE RETURN
LF      EQU     0AH             ;ASCII LINE FEED
FF      EQU     0CH             ;ASCII FORM FEED
EOF     EQU     01AH            ;END OF FILE MARKER
TAB     EQU     09H             ;ASCII TAB CHARACTER

COMMAND EQU     80H             ;BUFFER FOR COMMAND TAIL

BLKSIZE EQU     1024            ;BLOCKING/DEBLOCKING SIZE


CSEG    SEGMENT PARA PUBLIC 'CODE'

        ASSUME  CS:CSEG,DS:DATA,ES:DATA,SS:STACK


CLEAN   PROC    FAR             ;ENTRY POINT FROM PC-DOS

        PUSH    DS              ;SAVE DS:0000 FOR FINAL
        XOR     AX,AX           ;RETURN TO PC-DOS
        PUSH    AX
        MOV     AX,DATA         ;MAKE OUR DATA SEGMENT
        MOV     ES,AX           ;ADDRESSABLE VIA ES REGISTER
        CALL    INFILE          ;GET PATH AND FILE SPEC.
                                ;FOR INPUT FILE
        MOV     AX,ES           ;SET DS=ES FOR REMAINDER
        MOV     DS,AX           ;OF PROGRAM
        JNC     CLEAN1          ;JUMP, GOT ACCEPTABLE NAME
        MOV     DX,OFFSET MSG4  ;MISSING OR ILLEGAL FILESPEC,
        JMP     CLEAN9          ;PRINT ERROR MESSAGE AND EXIT.

CLEAN1: CALL    OUTFILE         ;SET UP OUTPUT FILE NAME
        CALL    OPEN_INPUT      ;NOW TRY TO OPEN INPUT FILE
        JNC     CLEAN2          ;JUMP,OPENED INPUT OK
        MOV     DX,OFFSET MSG1  ;OPEN OF INPUT FILE FAILED,
        JMP     CLEAN9          ;PRINT ERROR MSG AND EXIT.

CLEAN2:
        CALL    OPEN_OUTPUT     ;TRY TO OPEN OUTPUT FILE.
        JNC     CLEAN25         ;JUMP,OPENED OK
        MOV     DX,OFFSET MSG2  ;OPEN OF OUTPUT FILE FAILED,
        JMP     CLEAN9          ;PRINT ERROR MESSAGE AND EXIT.

CLEAN25:                        ;ALL FILES OPENED SUCCESSFULLY,
        CALL    SIGN_ON         ;PRINT SIGN-ON MESSAGE AND
        CALL    INIT_BUFFS      ;SET UP BUFFERS.

CLEAN3:                         ;NOW FILTER THE FILE.
        CALL    GET_CHAR        ;READ 1 CHARACTER FROM INPUT.
        AND     AL,07FH         ;STRIP OFF THE HIGH BIT
        CMP     AL,20H          ;IS IT A CONTROL CODE OR SPACE?
        JA      CLEAN4          ;NO,WRITE IT TO NEW FILE
        JNE     CLEAN32         ;JUMP IF NOT A SPACE CODE
        MOV     AH,PREV_CHAR    ;CHECK IF LAST CHAR WAS A SPACE
        AND     AH,7FH
        CMP     AH,20H
        JNE     CLEAN4          ;NO,WRITE NORMAL SPACE
        OR      AL,80H          ;YES, CONVERT THIS SPACE TO "SOFT"
        JMP     CLEAN4          ;AND WRITE IT TO THE FILE
CLEAN32:                        ;IT IS CONTROL CODE,
        CMP     AL,EOF          ;IS IT END OF FILE MARKER?
        JE      CLEAN6          ;YES,JUMP TO CLOSE FILES.

        CMP     AL,14H          ;IS IT VW PARAGRAPH MARKER?
        JNE     CLEAN33         ;NO,JUMP
        CALL    GET_CHAR        ;DISCARD FOLLOWING CR-LF
        CALL    GET_CHAR
        MOV     AL,CR           ;CONVERT IT TO "HARD" RETURN
        CALL    PUT_CHAR        ;AND LINE FEED SEQUENCE.
        MOV     AL,LF
        JMP     CLEAN35         ;AND WRITE IT TO FILE.
CLEAN33:
        CMP     AL,TAB          ;IS IT A TAB COMMAND?
        JZ      CLEAN5          ;YES,JUMP TO SPECIAL PROCESSING.
        CMP     AL,CR           ;IF CARRIAGE RETURN AND THE LINE IS
        JNE     CLEAN34         ;NOT EMPTY, CONVERT IT TO "SOFT RETURN"
        MOV     BX,COLUMN
        OR      BX,BX
        JZ      CLEAN35
        OR      AL,80H          ;AND WRITE IT TO FILE
        JMP     CLEAN35
CLEAN34:
        CMP     AL,LF           ;IF LINE FEED WRITE IT TO FILE,
        JNE     CLEAN3          ;OTHERWISE DISCARD CONTROL CODE.
CLEAN35:                        ;IF IT IS ONE OF THOSE THREE,
        MOV     COLUMN,0        ;INCIDENTALLY INITIALIZE
        JMP     CLEAN45         ;COLUMN COUNT FOR TAB PROCESSOR.

CLEAN4:                         ;COUNT ALPHANUMERIC CHARS. SENT.
        INC     COLUMN

CLEAN45:                        ;WRITE THIS CHARACTER TO
        CALL    PUT_CHAR        ;OUTPUT FILE,
        JNC     CLEAN3          ;IF CY NOT SET, WRITE WAS
                                ;OK SO GO GET NEXT CHAR.
CLEAN47:
        CALL    CLOSE_INPUT     ;IF CY SET, DISK IS FULL
        CALL    CLOSE_OUTPUT    ;SO CLOSE FILES AND EXIT
        MOV     DX,OFFSET MSG5  ;WITH ERROR MESSAGE.
        JMP     CLEAN9

CLEAN5:                         ;PROCESS TAB CHARACTER
        MOV     AX,COLUMN       ;LET DX:AX=COLUMN COUNT
        CWD
        MOV     CX,8            ;DIVIDE IT BY EIGHT...
        IDIV    CX
        SUB     CX,DX           ;REMAINDER IS IN DX.
        ADD     COLUMN,CX       ;UPDATE COLUMN POINTER.
CLEAN55:                        ;8 MINUS THE REMAINDER
        PUSH    CX              ;GIVES US THE NUMBER OF
        MOV     AL,20H          ;SPACES TO SEND OUT TO
        CALL    PUT_CHAR        ;MOVE TO THE NEXT TAB POSITION
        POP     CX              ;RESTORE SPACE COUNT
        JC      CLEAN47         ;JUMP IF DISK IS FULL
        LOOP    CLEAN55
        JMP     CLEAN3          ;GET NEXT CHARACTER

CLEAN6:                         ;END OF FILE DETECTED,
        CALL    PUT_CHAR        ;WRITE END-OF-FILE MARKER,
        JC      CLEAN47         ;JUMP IF DISK WAS FULL
        CALL    FLUSH_BUFFS     ;WRITE REMAINING DATA TO DISK
        JC      CLEAN47         ;IF CY SET,DISK WAS FULL
                                ;OTHERWISE FILE WAS WRITTEN OK
        CALL    CLOSE_INPUT     ;CLOSE INPUT AND OUTPUT
        CALL    CLOSE_OUTPUT    ;FILES.
        MOV     DX,OFFSET MSG3  ;ADDR OF SUCCESS MESSAGE,

CLEAN9:                         ;PRINT MESSAGE AND RETURN
        MOV     AH,9            ;CONTROL TO PC-DOS
        INT     21H
        RET

CLEAN   ENDP


INFILE  PROC    NEAR            ;PROCESS NAME OF INPUT FILE
                                ;DS:SI <- ADDR COMMAND LINE
        MOV     SI,OFFSET COMMAND
                                ;ES:DI <- ADDR FILESPEC BUFFER
        MOV     DI,OFFSET INPUT_NAME
        CLD
        LODSB                   ;ANY COMMAND LINE PRESENT?
        OR      AL,AL           ;RETURN ERROR STATUS IF NOT.
        JZ      INFILE4
INFILE1:                        ;SCAN OVER LEADING BLANKS
        LODSB                   ;TO FILE NAME
        CMP     AL,CR           ;IF WE HIT CARRIAGE RETURN
        JZ      INFILE4         ;FILENAME IS MISSING.
        CMP     AL,20H          ;IS THIS A BLANK?
        JZ      INFILE1         ;IF SO KEEP SCANNING.

INFILE2:                        ;FOUND FIRST CHAR OF NAME,
        STOSB                   ;MOVE LAST CHAR. TO OUTPUT
                                ;FILE NAME BUFFER.
        LODSB                   ;CHECK NEXT CHARACTER, FOUND
        CMP     AL,CR           ;CARRIAGE RETURN YET?
        JE      INFILE3         ;YES,EXIT WITH SUCCESS CODE
        CMP     AL,20H          ;IS THIS A BLANK?
        JNE     INFILE2         ;IF NOT KEEP MOVING CHARS.

INFILE3:                        ;EXIT WITH CARRY =0
        CLC                     ;FOR SUCCESS FLAG
        RET

INFILE4:                        ;EXIT WITH CARRY =1
        STC                     ;FOR ERROR FLAG
        RET
INFILE  ENDP

OUTFILE PROC    NEAR            ;SET UP PATH AND FILE
        CLD                     ;NAME FOR OUTPUT FILE.
        MOV     CX,64           ;LENGTH TO MOVE
        MOV     SI,OFFSET INPUT_NAME  ;SOURCE ADDR
        MOV     DI,OFFSET OUTPUT_NAME ;DEST ADDR
        REP MOVSB               ;TRANSFER THE STRING
        MOV     DI,OFFSET OUTPUT_NAME
OUTFILE1:                       ;SCAN STRING LOOKING FOR
        MOV     AL,[DI]         ;"." MARKING START OF EXTENSION
        OR      AL,AL           ;OR ZERO BYTE MARKING NAME END.
        JZ      OUTFILE2        ;IF EITHER IS FOUND,JUMP.
        CMP     AL,'.'
        JE      OUTFILE2        ;BUMP STRING POINTER, LOOP
        INC     DI              ;IF NEITHER '.' OR ZERO FOUND.
        JMP     OUTFILE1
OUTFILE2:                       ;FOUND ZERO OR '.',FORCE THE
                                ;EXTENSION OF OUTPUT FILE TO '.WS'
        MOV     SI,OFFSET OUTFILE_EXT
        MOV     CX,4
        REP MOVSB
        RET                     ;BACK TO CALLER
OUTFILE ENDP

OPEN_INPUT PROC NEAR            ;OPEN INPUT FILE
                                ;DS:DX=ADDR FILENAME
        MOV     DX,OFFSET INPUT_NAME
        MOV     AL,0            ;AL=0 FOR READ ONLY
        MOV     AH,3DH          ;FUNCTION 3DH=OPEN
        INT     21H             ;HANDLE RETURNED IN AX,
        MOV     INPUT_HANDLE,AX ;SAVE IT FOR LATER.
        RET                     ;CY IS SET IF ERROR
OPEN_INPUT ENDP

OPEN_OUTPUT PROC NEAR           ;OPEN OUTPUT FILE
                                ;DS:DX=ADDR FILENAME
        MOV     DX,OFFSET OUTPUT_NAME
        MOV     AL,1            ;AL=1 FOR WRITE ONLY
        MOV     AH,3CH          ;FUNCTION 3CH=MAKE OR
        INT     21H             ;TRUNCATE EXISTING FILE
                                ;HANDLE RETURNED IN AX
        MOV     OUTPUT_HANDLE,AX;SAVE IT FOR LATER.
        RET                     ;RETURN CY=TRUE IF ERROR
OPEN_OUTPUT ENDP

CLOSE_INPUT PROC NEAR           ;CLOSE INPUT FILE
        MOV     BX,INPUT_HANDLE ;BX=HANDLE
        MOV     AH,3EH
        INT     21H
        RET
CLOSE_INPUT ENDP

CLOSE_OUTPUT PROC NEAR          ;CLOSE OUTPUT FILE
        MOV     BX,OUTPUT_HANDLE;BX=HANDLE
        MOV     AH,3EH
        INT     21H
        RET
CLOSE_OUTPUT ENDP

GET_CHAR PROC   NEAR            ;GET ONE CHARACTER FROM INPUT BUFFER
        MOV     BX,INPUT_PTR
        CMP     BX,BLKSIZE
        JNE     GET_CHAR1
        CALL    READ_BLOCK
        MOV     BX,0
GET_CHAR1:
        MOV     AL,[INPUT_BUFFER+BX]
        INC     BX
        MOV     INPUT_PTR,BX
        RET
GET_CHAR ENDP

PUT_CHAR PROC   NEAR            ;PUT ONE CHARACTER INTO OUTPUT BUFFER
        MOV     PREV_CHAR,AL    ;SAVE COPY OF MOST RECENT OUTPUT
        MOV     BX,OUTPUT_PTR
        MOV     [OUTPUT_BUFFER+BX],AL
        INC     BX
        MOV     OUTPUT_PTR,BX
        CMP     BX,BLKSIZE      ;BUFFER FULL YET?
        JNE     PUT_CHAR1       ;NO,JUMP
        CALL    WRITE_BLOCK     ;YES,WRITE THE BLOCK
        RET                     ;RETURN CY AS STATUS CODE
PUT_CHAR1:
        CLC                     ;RETURN CY CLEAR FOR OK STATUS
        RET
PUT_CHAR ENDP

READ_BLOCK PROC NEAR
        MOV     BX,INPUT_HANDLE ;READ FIRST BLOCK OF INPUT
        MOV     CX,BLKSIZE
        MOV     DX,OFFSET INPUT_BUFFER
        MOV     AH,3FH
        INT     21H
        JNC     READ_BLOCK1     ;JUMP IF NO ERROR STATUS
        MOV     AX,0            ;SIMULATE A ZERO LENGTH READ IF ERROR
READ_BLOCK1:
        CMP     AX,BLKSIZE      ;WAS FULL BUFFER READ IN?
        JE      READ_BLOCK2     ;YES,JUMP
        MOV     BX,AX           ;NO, STORE END-OF-FILE MARK
        MOV     BYTE PTR [INPUT_BUFFER+BX],EOF
READ_BLOCK2:
        XOR     AX,AX           ;INITIALIZE INPUT BUFFER POINTER
        MOV     INPUT_PTR,AX
        RET
READ_BLOCK ENDP

WRITE_BLOCK PROC NEAR           ;WRITE BLOCKED OUTPUT (BLKSIZE BYTES)
        MOV     DX,OFFSET OUTPUT_BUFFER
        MOV     CX,BLKSIZE
        MOV     BX,OUTPUT_HANDLE
        MOV     AH,40H
        INT     21H
        XOR     BX,BX           ;INITIALIZE POINTER TO BLOCKING BUFFER
        MOV     OUTPUT_PTR,BX
        CMP     AX,BLKSIZE      ;WAS CORRECT LENGTH WRITTEN?
        JNE     WRITE_BLOCK1    ;NO,DISK MUST BE FULL
        CLC                     ;YES,RETURN CY=0 INDICATING ALL OK
        RET
WRITE_BLOCK1:                   ;DISK IS FULL, RETURN CY =1
        STC                     ;AS ERROR CODE
        RET
WRITE_BLOCK ENDP

INIT_BUFFS PROC NEAR
        CALL    READ_BLOCK      ;READ 1ST BLOCK OF INPUT
        XOR     AX,AX           ;INITIALIZE POINTER TO OUTPUT
        MOV     OUTPUT_PTR,AX   ;OUTPUT BLOCKING BUFFER
        RET
INIT_BUFFS ENDP

FLUSH_BUFFS PROC NEAR           ;WRITE ANY DATA IN OUTPUT BUFFER TO DISK
        MOV     CX,OUTPUT_PTR
        OR      CX,CX
        JZ      FLUSH_BUFFS1    ;JUMP,BUFFER IS EMPTY
        MOV     BX,OUTPUT_HANDLE
        MOV     DX,OFFSET OUTPUT_BUFFER
        MOV     AH,40H
        INT     21H
        CMP     AX,OUTPUT_PTR   ;WAS WRITE SUCCESSFUL?
        JNZ     FLUSH_BUFFS2    ;NO,JUMP
FLUSH_BUFFS1:                   ;SUCCESSFUL DISK WRITE,
        CLC                     ;RETURN CY=0 FOR
        RET                     ;SUCCESS FLAG
FLUSH_BUFFS2:                   ;DISK WAS FULL SO WRITE FAILED,
        STC                     ;RETURN CY=1 AS ERROR FLAG
        RET
FLUSH_BUFFS ENDP

SIGN_ON PROC    NEAR            ;PRINT SIGN-ON MESSAGE
        MOV     DX,OFFSET MSG6  ;TITLE...
        MOV     AH,9
        INT     21H
        MOV     DX,OFFSET MSG7  ;INPUT FILE:
        MOV     AH,9
        INT     21H
        MOV     DX,OFFSET INPUT_NAME
        CALL    PASCIIZ
        MOV     DX,OFFSET MSG8  ;OUTPUT FILE:
        MOV     AH,9
        INT     21H
        MOV     DX,OFFSET OUTPUT_NAME
        CALL    PASCIIZ
        MOV     DX,OFFSET MSG9
        MOV     AH,9
        INT     21H
        RET
SIGN_ON ENDP

PASCIIZ PROC    NEAR            ;CALL DX=OFFSET OF ASCIIZ STRING
        MOV     BX,DX           ;WHICH WILL BE PRINTED ON STANDARD OUTPUT
PASCIIZ1:
        MOV     DL,[BX]
        OR      DL,DL
        JZ      PASCIIZ9
        CMP     DL,'A'
        JB      PASCIIZ2
        CMP     DL,'Z'
        JA      PASCIIZ2
        OR      DL,20H
PASCIIZ2:
        MOV     AH,2
        INT     21H
        INC     BX
        JMP     PASCIIZ1
PASCIIZ9:
        RET
PASCIIZ ENDP

CSEG    ENDS


DATA    SEGMENT PARA PUBLIC 'DATA'

INPUT_NAME      DB      64 DUP (0)      ;BUFFER FOR INPUT FILESPEC
OUTPUT_NAME     DB      64 DUP (0)      ;BUFFER FOR OUTPUT FILESPEC

INPUT_HANDLE    DW      0               ;TOKEN RETURNED BY PCDOS
OUTPUT_HANDLE   DW      0               ;TOKEN RETURNED BY PCDOS

INPUT_PTR       DW      0               ;POINTER TO INPUT BLOCKING BUFFER
OUTPUT_PTR      DW      0               ;POINTER TO OUTPUT BLOCKING BUFFER

OUTFILE_EXT     DB      '.WS',0         ;EXTENSION FOR FILTERED FILE

COLUMN          DW      0               ;COLUMN COUNT FOR TAB PROCESSING

PREV_CHAR       DB      0               ;LAST CHARACTER WRITTEN TO OUTPUT

MSG1            DB      CR,LF
                DB      'CANNOT FIND INPUT FILE.'
                DB      CR,LF,'$'

MSG2            DB      CR,LF
                DB      'FAILED TO OPEN OUTPUT FILE.'
                DB      CR,LF,'$'

MSG3            DB      CR,LF
                DB      'FILE PROCESSING COMPLETED'
                DB      CR,LF,'$'

MSG4            DB      CR,LF
                DB      'MISSING FILE NAME.'
                DB      CR,LF,'$'

MSG5            DB      CR,LF
                DB      'DISK IS FULL.'
                DB      CR,LF,'$'

MSG6            DB      CR,LF
                DB      'CONVERT VOLKSWRITER FILE TO WORDSTAR DOCUMENT'
                DB      CR,LF
                DB      'COPYRIGHT (C) 1983 LABORATORY MICROSYSTEMS INC.'
                DB      CR,LF,'$'

MSG7            DB      CR,LF,'INPUT FILE:   $'

MSG8            DB      CR,LF,'OUTPUT FILE:  $'

MSG9            DB      CR,LF,'$'


INPUT_BUFFER    DB      BLKSIZE DUP (?) ;BUFFER FOR DEBLOCKING OF DATA
                                        ;FROM INPUT FILE

OUTPUT_BUFFER   DB      BLKSIZE DUP (?) ;BUFFER FOR BLOCKING OF DATA
                                        ;SENT TO OUTPUT FILE

DATA    ENDS


STACK   SEGMENT PARA STACK 'STACK'
        DB      64 DUP (?)
STACK   ENDS

        END     CLEAN
```
{% endraw %}

## WHEREIS.ASM

{% raw %}
```
TITLE WHEREIS - FIND A FILE ON THE DRIVE
PAGE 60,132
CGROUP  GROUP   CODSEG, DATSEG
        ASSUME  CS:CGROUP,DS:CGROUP
DTA     STRUC
        RESERVED        DB      21 DUP(?)
        ATTRIBUTE       DB
        TIME            DW
        DATE            DW
        SIZE            DD
        NAMFOUND      DB      13 DUP(?)
DTA     ENDS

DATSEG SEGMENT        PUBLIC
STANAME       DB      '*.*',0
PATNAME       DB      '\',0
                DB      80 DUP (0)      ; SPACE FOR 64 CHAR PATH NAME
                                        ; AND 13 CHAR FILE NAME
FILNAME       DB      13 DUP (0)      ; SAVE ROOM FOR FULL DOS NAME
DISTRANSFEAREAS     LABEL   BYTE    ; THIS STARTS AT THE END OF THE WHEREIS
DATSEG        ENDS
PAGE
;---------------------------------------------------------------------;
;  THIS IS THE MAIN PROGRAM THAT SETS UP THE INITIAL CONDITIONS FOR   ;
; SEARCDIRECTORY WHICH, IN TURN, DOES A RECURSIVE SEARCH.           ;
;                                                                     ;
; READS: PATNAME                                            ;
; WRITES: FILNAME                                           ;
; CALLS: SEARCDIRECTORY                                     ;
;---------------------------------------------------------------------;
CODSEG        SEGMENT
        ORG     100H
WHEREIS         PROC    NEAR
        MOV     SI,82H                  ; START OF COMMAND LINE
        MOV     DI,OFFSET CGROUP:FILNAME
GESEARCNAME:
        LODSB                           ; GET FIRST CHARACTER
        CMP     AL,0DH                  ; CARRIAGE RETURN CHARACTER?
        JE      DONREADINNAME       ; YES, END OF NAME
        STOSB
        JMP     GESEARCNAME
DONREADINNAME:
        XOR     AL,AL                   ; WRITE A 0 AT THE END
        STOSB
        MOV     DI,OFFSET CGROUP:PATNAME
        XOR     AL,AL                   ; SEARCH DIRECTORY FOR THE ZERO AT THE END
        CLD                             ; OF PATNAME
        MOV     CX,64                   ; MAX. LENGTH OF SCAN FOR 0
        REPNZ   SCASB
        MOV     BX,DI
        DEC     BX                      ; DS:BX POINTS TO THE END OF PATNAME
        MOV     DX,0                    ; TELL SEARCH DIRECTORY THIS IS FIRST
        CALL    SEARCDIRECTORY        ; NOW DO THE RECURSIVE SEARCH
        INT     20H                     ; ALL DONE RETURN TO DOS
WHEREIS ENDP
PAGE
;----------------------------------------------------------------;
;  THIS PROCEDURE SEARCHES ALL THE FILES IN THE CURRENT DIRECTORY;
;LOOKING FOR A MATCH. IT ALSO PRINTS THE FULL NAME OF EACH MATCH ;
;                                                                ;
;       DS:BX   POINTER TO END OF CURRENT PATH NAME.             ;
;       DS:DX   OLD DISK TRANSFER AREA (DTA).                    ;
;                                                                ;
{; READS:        DISK TRANSFER AREA                               ;
; WRITES: DISK TRANSFER AREA                             ;
; CALLS: BUILNAME,GEFIRSMATCH,                     ;
;               WRITMATCHENAME,GENEXMATCH                ;
;               BUILSTANAME,SEARCSUDIRECTORY             ;
;----------------------------------------------------------------;
SEARCDIRECTORY        PROC    NEAR
        PUSH    SI                      ; NEED TO RESTORE ON EXIT
        PUSH    DX
        CALL    BUILNAME              ; BUILD THE ABSOLUTE SEARCH NAME
        CALL    GEFIRSMATCH         ; SEE IF THERE IS A MATCH THERE
        JC      NMATCH                ; NO MATCH CHECK SUB DIRECTORIES
        CALL    WRITMATCHENAME      ; WRITE NAME OF MATCH
FINNEXFILE:
        CALL    GENEXMATCH          ; FIND THE NEXT MATCH
        JC      NMATCH                ; NO MATCH CHECK SUB DIRECTORIES
        CALL    WRITMATCHENAME      ; WRITE NAME OF MATCH
        JMP     FINNEXFILE          ; LOOK FOR NEXT MATCHING NAME
NMATCH:
        POP     DX                      ; RESTORE DTA
        PUSH    DX
        CALL    BUILSTANAME         ; SEARCH FOR ALL DIRECTORIES
        CALL    GEFIRSMATCH         ; GET FIRST ENTRY
        JC      NMORMATCHES         ; THERE ARE NO ENTRIES
        MOV     SI,DX                   ; PUT ADDRESS OF DTA IN SI
        TEST    [SI].ATTRIBUTE,10H      ; IS IT A DIRECTORY ?
        JNZ     IDIRECTORY            ; YES, THEN SEARCH DIRECTORY
FINNEXDIRECTORY:
        CALL    GENEXMATCH          ; NO, THEN FIND THE NEXT MATCH
        JC      NMORMATCHES         ; THERE ARE NO MORE ENTRIES
        TEST    [SI].ATTRIBUTE,10H      ; IS IT A DIRECTORY ?
        JZ      FINNEXDIRECTORY     ; YES, SEARCH DIRECTORY
IDIRECTORY:
        CMP     [SI].NAMFOUND,'.'     ; IS THIS A . OR .. DIRECTORY
        JE      FINNEXDIRECTORY     ; YES THEN SKIP TO NEXT DIRECTORY
        CALL    SEARCSUDIRECTORY    ; SEARCH THE SUB DIR
        PUSH    AX                      ; NOW RESET THE DTA
        MOV     AH,1AH
        INT     21H
        POP     AX
        JMP     FINNEXDIRECTORY
NMORMATCHES:
        POP     DX
        POP     SI
        RET
SEARCDIRECTORY        ENDP
PAGE
;---------------------------------------------------------------;
; THIS PROCEDURE SEARCHES THE SUB DIR WHOSE NAME IS IN THE DTA  ;
;                                                               ;
;       DS:BX   END OF CURRENT PATHNAME                         ;
;       DS:[DX].NAMFOUND      NAME OF SUB DIR TO SEARCH ;
;                                                               ;
; READS:        PATNAME                                       ;
; WRITE:        PATNAME                                       ;
; CALLS:        SEARCDIRECTORY                                ;
;--------------------------------------------------------------;
SEARCSUDIRECTORY    PROC    NEAR
        PUSH    DI
        PUSH    SI
        PUSH    AX
        PUSH    BX
        CLD                             ; SET FOR INCREMENT
        MOV     SI,DX                   ; PUT THE ADDRESS OF DTA IN SI
        ADD     SI,OFFSET NAMFOUND    ; SET TO START OF SUB DIR NAME
        MOV     DI,BX                   ; DS:DI - 0 AT END OF PATH NAME
COPLOOP:
        LODSB                           ; COPY ONE CHARACTER
        STOSB
        OR      AL,AL                   ; WAS IT A ZERO
        JNZ     COPLOOP               ; NO, KEEP COPYING
        MOV     BX,DI                   ; SET BX TO END OF NEW PATHNAME
        STD                             ; SET FLAG FOR DECREMENT
        STOSB                           ; STORE A 0 AT END OF STRING
        MOV     AL,'\'
        STOSB                           ; PLACE A \ AT END OF PATHNAME
        CALL    SEARCDIRECTORY        ; SEARCH THIS NEW PATH
        POP     BX                      ; RESTORE THE OLD END-OF-PATH
        MOV     BYTE PTR [BX],0         ; AND STORE A ZERO THERE
        POP     AX
        POP     SI
        POP     DI
        RET
SEARCSUDIRECTORY    ENDP
PAGE
;---------------------------------------------------------------;
;  THIS PROCEDURE PRINTS THE MATCHED NAME AFTER THE PATH NAME   ;
;                                                               ;
;       DS:DX   POINTER TO CURRENT DTA                          ;
;                                                               ;
; READS:        PATNAME,NAMFOUND (IN DTA)                   ;
; CALLS: WRITSTRING,SENCRLF                         ;
;---------------------------------------------------------------;
WRITMATCHENAME      PROC    NEAR
        PUSH    AX
        PUSH    DX
        MOV     DX,OFFSET CGROUP:PATNAME
        MOV     AL,[BX]                 ; SAVE CHAR AT END OF PATH
        MOV     BYTE PTR [BX],0         ; SET FOR END OF STRING
        CALL    WRITSTRING
        MOV     [BX],AL                 ; RESTORE CHARACTER
        POP     DX
        PUSH    DX
        ADD     DX,OFFSET NAMFOUND
        CALL    WRITSTRING
        CALL    SENCRLF
        POP     DX
        POP     AX
        RET
WRITMATCHENAME      ENDP
PAGE
;---------------------------------------------------------------;
;  THIS PROCEDURE BUILDS AN ABSOLUTE SEARCH NAME FROM PATNAME ;
; FOLLOWED BY FILNAME                                         ;
;                                                               ;
; READS:        FILNAME                                       ;
; CALLS:        BUILD                                           ;
;---------------------------------------------------------------;
BUILNAME      PROC    NEAR
        PUSH    SI
        MOV     SI,OFFSET CGROUP:FILNAME
        CALL    BUILD
        POP     SI
        RET
BUILNAME      ENDP
BUILSTANAME PROC    NEAR
        PUSH    SI
        MOV     SI,OFFSET CGROUP:STANAME
        CALL    BUILD
        POP     SI
        RET
BUILSTANAME ENDP
PAGE
;---------------------------------------------------------------;
;  THIS PROCEDURE APPEND THE STRING AT DS:SI TO PATNAME IN    ;
; PATNAME. IT KNOWS WHERE THE PATNAME END FROM KNOWING HOW  ;
; LONG PATNAME IS.                                            ;
;                                                               ;
;       DS:SI   NAME OF FILE                                    ;
;       DS:BX   END OF PATNAME                                ;
;                                                               ;
; READS:        DS:SI                                           ;
; WRITES:       PATNAME                                       ;
;---------------------------------------------------------------;
BUILD   PROC    NEAR
        PUSH    AX
        PUSH    DI
        MOV     DI,BX
        CLD                             ; SET FOR INCREMENT
COPNAME:
        LODSB
        STOSB                           ; COPY A CHARACTER OF NAME
        OR      AL,AL                   ; END OF STRING YET?
        JNZ     COPNAME               ; NO KEEP COPYING
        POP     DI
        POP     AX
        RET
BUILD   ENDP
PAGE
;------------------------------------------------------------------;
;  THIS PROCEDURE FINDS THE FIRST MATCH BETWEEN THE NAME GIVEN BY  ;
; DS:DX AND THE DIRECTORY ENTRIES FOUND IN THE DIRECTORY PATNAME ;
;                                                          ;
;       DS:DX   POINTER TO CURRENT DTA                             ;
;RETURNS:                                                          ;
;       CF      0       A MATCH WAS FOUND                          ;
;               1       NO MATCH FOUND                     ;
;       AX      2      FILE NOT FOUND                             ;
;               18      NO MORE FILES                              ;
;       DS:DX           POINTER TO NEW DTA                         ;
;                                                                  ;
; READS:        PATNAME                                          ;
; WRITES:       DISTRANSFEAREAS                                ;
;------------------------------------------------------------------;
GEFIRSMATCH PROC    NEAR
        PUSH    CX
        CMP     DX,0            ; FIRST ONE :
        JA      ALLOCATE        ; NO THEN ALLOCATE SPACE
        MOV     DX,OFFSET CGROUP:DISTRANSFEAREAS-TYPE DTA
ALLOCATE:
        ADD     DX,TYPE DTA     ; NO THEN ALLOCATE ROOM FOR NEW DTA
        MOV     CX,10H          ; SEARCH ATTRIBUTE FOR FILES ANDS DIRS.
        MOV     AH,1AH          ; SET DTA
        INT     21H
        PUSH    DX              ; NEED DX FOR ADDRESS OF SEARCH NAME
        MOV     DX,OFFSET CGROUP:PATNAME
        MOV     AH,4EH          ; CALL FOR FIND FIRST MATCH
        INT     21H
        POP     DX
        POP     CX
        RET
GEFIRSMATCH ENDP
PAGE
;---------------------------------------------------------------;
; THIS PROCEDURE IS MUCH LIKE GET FIRST MATCH.                  ;
;                                                               ;
; RETURNS                                                       ;
;       CF      0       A MATCH WAS FOUND                       ;
;               1       NO MATCH FOUND                          ;
;       AX      2       FILE NOT FOUND                          ;
;               18      NO MORE FILES                           ;
;                                                               ;
; READS:        PATNAME                                       ;
; WRITES:       DISTRANSFEAREAS                             ;
;---------------------------------------------------------------;
GENEXMATCH  PROC    NEAR
        PUSH    CX
        PUSH    DX
        MOV     DX,OFFSET CGROUP:PATNAME
        MOV     CX,10H          ;ATTRIBUTE FOR FILES AND DIRECTORIES
        MOV     AH,4FH          ; CALL FOR FIND NEXT MATCH
        INT     21H
        POP     DX
        POP     CX
        RET
GENEXMATCH  ENDP
PAGE
;---------------------------------------------------------------;
; THIS PROC SEND A CRLF TO THE SCREEN                           ;
;---------------------------------------------------------------;
SENCRLF       PROC    NEAR
        PUSH    AX
        PUSH    DX
        MOV     AH,02
        MOV     DL,0AH
        INT     21H
        MOV     DL,0DH
        INT     21H
        POP     DX
        POP     AX
        RET
SENCRLF       ENDP
;---------------------------------------------------------------;
; THIS PROC WRITES THE ASCIIZ STRING AT                         ;
; DS:DX         ADDRESS OF ASCIIZ                               ;
;---------------------------------------------------------------;
WRITSTRING    PROC    NEAR
        PUSH    AX
        PUSH    DX
        PUSH    SI
        CLD                             ; SET FOR INCREMENT
        MOV     SI,DX                   ; SET POINTER TO STRING
        MOV     AH,2
       LODSB
WRITSTRINLOOP:
        MOV     DL,AL
        INT     21H                     ; WRITE THE CHAR
        LODSB
        OR      AL,AL                   ; ENOF STRING??
        JNZ     WRITSTRINLOOP
        POP     SI
        POP     DX
        POP     AX
        RET
WRITSTRING    ENDP
;
CODSEG        ENDS
        END     WHEREIS
```
{% endraw %}

## WS-TO-VW.ASM

{% raw %}
```
        NAME    WSTOVW
        PAGE    55,132
        TITLE   'WSTOVW --- FILTER WORDSTAR TEXT FILE FOR VOLKSWRITER'

;
; WSTOVW --- CONVERT WORDSTAR DOCUMENT FILE TO VOLKSWRITER.
;
; HIGH BIT OF ALL CHARACTERS STRIPPED.
; SOFT SPACES CONVERTED TO NORMAL.
; HARD CARRIAGE RETURNS CONVERTED TO VW PARAGRAPH MARKER FOLLOWED BY CR-LF.
; SOFT CARRIAGE RETURNS TURNED INTO NORMAL CARRIAGE RETURNS.
; TABS ARE EXPANDED.
;
; VERSION 1.0    11 DEC 83
;
; COPYRIGHT (C) 1983 BY RAY DUNCAN

CR      EQU     0DH             ;ASCII CARRIAGE RETURN
LF      EQU     0AH             ;ASCII LINE FEED
FF      EQU     0CH             ;ASCII FORM FEED
EOF     EQU     01AH            ;END OF FILE MARKER
TAB     EQU     09H             ;ASCII TAB CHARACTER

COMMAND EQU     80H             ;BUFFER FOR COMMAND TAIL

BLKSIZE EQU     1024            ;BLOCKING/DEBLOCKING SIZE


CSEG    SEGMENT PARA PUBLIC 'CODE'

        ASSUME  CS:CSEG,DS:DATA,ES:DATA,SS:STACK


CLEAN   PROC    FAR             ;ENTRY POINT FROM PC-DOS

        PUSH    DS              ;SAVE DS:0000 FOR FINAL
        XOR     AX,AX           ;RETURN TO PC-DOS
        PUSH    AX
        MOV     AX,DATA         ;MAKE OUR DATA SEGMENT
        MOV     ES,AX           ;ADDRESSABLE VIA ES REGISTER
        CALL    INFILE          ;GET PATH AND FILE SPEC.
                                ;FOR INPUT FILE
        MOV     AX,ES           ;SET DS=ES FOR REMAINDER
        MOV     DS,AX           ;OF PROGRAM
        JNC     CLEAN1          ;JUMP, GOT ACCEPTABLE NAME
        MOV     DX,OFFSET MSG4  ;MISSING OR ILLEGAL FILESPEC,
        JMP     CLEAN9          ;PRINT ERROR MESSAGE AND EXIT.

CLEAN1: CALL    OUTFILE         ;SET UP OUTPUT FILE NAME
        CALL    OPEN_INPUT      ;NOW TRY TO OPEN INPUT FILE
        JNC     CLEAN2          ;JUMP,OPENED INPUT OK
        MOV     DX,OFFSET MSG1  ;OPEN OF INPUT FILE FAILED,
        JMP     CLEAN9          ;PRINT ERROR MSG AND EXIT.

CLEAN2:
        CALL    OPEN_OUTPUT     ;TRY TO OPEN OUTPUT FILE.
        JNC     CLEAN25         ;JUMP,OPENED OK
        MOV     DX,OFFSET MSG2  ;OPEN OF OUTPUT FILE FAILED,
        JMP     CLEAN9          ;PRINT ERROR MESSAGE AND EXIT.

CLEAN25:                        ;ALL FILES OPENED SUCCESSFULLY,
        CALL    SIGN_ON         ;PRINT SIGN-ON MESSAGE AND
        CALL    INIT_BUFFS      ;SET UP BUFFERS.

CLEAN3:                         ;NOW FILTER THE FILE.
        CALL    GET_CHAR        ;READ 1 CHARACTER FROM INPUT.

        CMP     AL,CR OR 80H    ;IS IT A "SOFT CARRIAGE RETURN"?
        JNE     CLEAN31         ;NO,JUMP
        MOV     AL,CR           ;YES, WRITE NORMAL CR
        JMP     CLEAN35
CLEAN31:
        AND     AL,07FH         ;STRIP OFF THE HIGH BIT
        CMP     AL,20H          ;IS IT A CONTROL CODE?
        JAE     CLEAN4          ;NO, WRITE IT TO NEW FILE
                                ;IF CONTROL CODE,
        CMP     AL,EOF          ;IS IT END OF FILE MARKER?
        JE      CLEAN6          ;YES,JUMP TO CLOSE FILES.
        CMP     AL,CR           ;IS IT HARD CARRIAGE RETURN?
        JNE     CLEAN33         ;NO,JUMP
        MOV     AL,014H         ;YES,WRITE PARAGRAPH MARKER AND
        CALL    PUT_CHAR        ;TRAILING CR
        MOV     AL,CR           ;
        JMP     CLEAN35         ;WRITE IT TO FILE AND CLEAR COLUMN COUNT.
CLEAN33:
        CMP     AL,TAB          ;IS IT A TAB COMMAND?
        JZ      CLEAN5          ;YES,JUMP TO SPECIAL PROCESSING.
        CMP     AL,LF           ;IF LINE FEED WRITE IT TO FILE,
        JNE     CLEAN3          ;OTHERWISE DISCARD CONTROL CODE.
CLEAN35:                        ;IF IT IS CR OR LF,
        MOV     COLUMN,0        ;INCIDENTALLY INITIALIZE
        JMP     CLEAN45         ;COLUMN COUNT FOR TAB PROCESSOR.

CLEAN4:                         ;COUNT ALPHANUMERIC CHARS. SENT.
        INC     COLUMN

CLEAN45:                        ;WRITE THIS CHARACTER TO
        CALL    PUT_CHAR        ;OUTPUT FILE,
        JNC     CLEAN3          ;IF CY NOT SET, WRITE WAS
                                ;OK SO GO GET NEXT CHAR.
CLEAN47:
        CALL    CLOSE_INPUT     ;IF CY SET, DISK IS FULL
        CALL    CLOSE_OUTPUT    ;SO CLOSE FILES AND EXIT
        MOV     DX,OFFSET MSG5  ;WITH ERROR MESSAGE.
        JMP     CLEAN9

CLEAN5:                         ;PROCESS TAB CHARACTER
        MOV     AX,COLUMN       ;LET DX:AX=COLUMN COUNT
        CWD
        MOV     CX,8            ;DIVIDE IT BY EIGHT...
        IDIV    CX
        SUB     CX,DX           ;REMAINDER IS IN DX.
        ADD     COLUMN,CX       ;UPDATE COLUMN POINTER.
CLEAN55:                        ;8 MINUS THE REMAINDER
        PUSH    CX              ;GIVES US THE NUMBER OF
        MOV     AL,20H          ;SPACES TO SEND OUT TO
        CALL    PUT_CHAR        ;MOVE TO THE NEXT TAB POSITION
        POP     CX              ;RESTORE SPACE COUNT
        JC      CLEAN47         ;JUMP IF DISK IS FULL
        LOOP    CLEAN55
        JMP     CLEAN3          ;GET NEXT CHARACTER

CLEAN6:                         ;END OF FILE DETECTED,
        CALL    PUT_CHAR        ;WRITE END-OF-FILE MARKER,
        JC      CLEAN47         ;JUMP IF DISK WAS FULL
        CALL    FLUSH_BUFFS     ;WRITE REMAINING DATA TO DISK
        JC      CLEAN47         ;IF CY SET,DISK WAS FULL
                                ;OTHERWISE FILE WAS WRITTEN OK
        CALL    CLOSE_INPUT     ;CLOSE INPUT AND OUTPUT
        CALL    CLOSE_OUTPUT    ;FILES.
        MOV     DX,OFFSET MSG3  ;ADDR OF SUCCESS MESSAGE,

CLEAN9:                         ;PRINT MESSAGE AND RETURN
        MOV     AH,9            ;CONTROL TO PC-DOS
        INT     21H
        RET

CLEAN   ENDP


INFILE  PROC    NEAR            ;PROCESS NAME OF INPUT FILE
                                ;DS:SI <- ADDR COMMAND LINE
        MOV     SI,OFFSET COMMAND
                                ;ES:DI <- ADDR FILESPEC BUFFER
        MOV     DI,OFFSET INPUT_NAME
        CLD
        LODSB                   ;ANY COMMAND LINE PRESENT?
        OR      AL,AL           ;RETURN ERROR STATUS IF NOT.
        JZ      INFILE4
INFILE1:                        ;SCAN OVER LEADING BLANKS
        LODSB                   ;TO FILE NAME
        CMP     AL,CR           ;IF WE HIT CARRIAGE RETURN
        JZ      INFILE4         ;FILENAME IS MISSING.
        CMP     AL,20H          ;IS THIS A BLANK?
        JZ      INFILE1         ;IF SO KEEP SCANNING.

INFILE2:                        ;FOUND FIRST CHAR OF NAME,
        STOSB                   ;MOVE LAST CHAR. TO OUTPUT
                                ;FILE NAME BUFFER.
        LODSB                   ;CHECK NEXT CHARACTER, FOUND
        CMP     AL,CR           ;CARRIAGE RETURN YET?
        JE      INFILE3         ;YES,EXIT WITH SUCCESS CODE
        CMP     AL,20H          ;IS THIS A BLANK?
        JNE     INFILE2         ;IF NOT KEEP MOVING CHARS.

INFILE3:                        ;EXIT WITH CARRY =0
        CLC                     ;FOR SUCCESS FLAG
        RET

INFILE4:                        ;EXIT WITH CARRY =1
        STC                     ;FOR ERROR FLAG
        RET
INFILE  ENDP

OUTFILE PROC    NEAR            ;SET UP PATH AND FILE
        CLD                     ;NAME FOR OUTPUT FILE.
        MOV     CX,64           ;LENGTH TO MOVE
        MOV     SI,OFFSET INPUT_NAME  ;SOURCE ADDR
        MOV     DI,OFFSET OUTPUT_NAME ;DEST ADDR
        REP MOVSB               ;TRANSFER THE STRING
        MOV     DI,OFFSET OUTPUT_NAME
OUTFILE1:                       ;SCAN STRING LOOKING FOR
        MOV     AL,[DI]         ;"." MARKING START OF EXTENSION
        OR      AL,AL           ;OR ZERO BYTE MARKING NAME END.
        JZ      OUTFILE2        ;IF EITHER IS FOUND,JUMP.
        CMP     AL,'.'
        JE      OUTFILE2        ;BUMP STRING POINTER, LOOP
        INC     DI              ;IF NEITHER '.' OR ZERO FOUND.
        JMP     OUTFILE1
OUTFILE2:                       ;FOUND ZERO OR '.',FORCE THE
                                ;EXTENSION OF OUTPUT FILE TO '.VW'
        MOV     SI,OFFSET OUTFILE_EXT
        MOV     CX,4
        REP MOVSB
        RET                     ;BACK TO CALLER
OUTFILE ENDP

OPEN_INPUT PROC NEAR            ;OPEN INPUT FILE
                                ;DS:DX=ADDR FILENAME
        MOV     DX,OFFSET INPUT_NAME
        MOV     AL,0            ;AL=0 FOR READ ONLY
        MOV     AH,3DH          ;FUNCTION 3DH=OPEN
        INT     21H             ;HANDLE RETURNED IN AX,
        MOV     INPUT_HANDLE,AX ;SAVE IT FOR LATER.
        RET                     ;CY IS SET IF ERROR
OPEN_INPUT ENDP

OPEN_OUTPUT PROC NEAR           ;OPEN OUTPUT FILE
                                ;DS:DX=ADDR FILENAME
        MOV     DX,OFFSET OUTPUT_NAME
        MOV     AL,1            ;AL=1 FOR WRITE ONLY
        MOV     AH,3CH          ;FUNCTION 3CH=MAKE OR
        INT     21H             ;TRUNCATE EXISTING FILE
                                ;HANDLE RETURNED IN AX
        MOV     OUTPUT_HANDLE,AX;SAVE IT FOR LATER.
        RET                     ;RETURN CY=TRUE IF ERROR
OPEN_OUTPUT ENDP

CLOSE_INPUT PROC NEAR           ;CLOSE INPUT FILE
        MOV     BX,INPUT_HANDLE ;BX=HANDLE
        MOV     AH,3EH
        INT     21H
        RET
CLOSE_INPUT ENDP

CLOSE_OUTPUT PROC NEAR          ;CLOSE OUTPUT FILE
        MOV     BX,OUTPUT_HANDLE;BX=HANDLE
        MOV     AH,3EH
        INT     21H
        RET
CLOSE_OUTPUT ENDP

GET_CHAR PROC   NEAR            ;GET ONE CHARACTER FROM INPUT BUFFER
        MOV     BX,INPUT_PTR
        CMP     BX,BLKSIZE
        JNE     GET_CHAR1
        CALL    READ_BLOCK
        MOV     BX,0
GET_CHAR1:
        MOV     AL,[INPUT_BUFFER+BX]
        INC     BX
        MOV     INPUT_PTR,BX
        RET
GET_CHAR ENDP

PUT_CHAR PROC   NEAR            ;PUT ONE CHARACTER INTO OUTPUT BUFFER
        MOV     PREV_CHAR,AL    ;SAVE COPY OF MOST RECENT OUTPUT
        MOV     BX,OUTPUT_PTR
        MOV     [OUTPUT_BUFFER+BX],AL
        INC     BX
        MOV     OUTPUT_PTR,BX
        CMP     BX,BLKSIZE      ;BUFFER FULL YET?
        JNE     PUT_CHAR1       ;NO,JUMP
        CALL    WRITE_BLOCK     ;YES,WRITE THE BLOCK
        RET                     ;RETURN CY AS STATUS CODE
PUT_CHAR1:
        CLC                     ;RETURN CY CLEAR FOR OK STATU2
        RET
```
{% endraw %}

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
