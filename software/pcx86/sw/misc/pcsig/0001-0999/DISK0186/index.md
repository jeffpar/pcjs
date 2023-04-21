---
layout: page
title: "PC-SIG Diskette Library (Disk #186)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0186/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0186"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCREEN AND PRINTER"

    The printer utilities in this package are for Epson and compatible
    printers.  Control your printer from the keyboard.  Specify a variety
    of print modes and fonts such as compressed, italics, emphasized,
    underline, and more -- from within other applications.
    
    SP is a print spooler used to hold data intended for the printer.
    It works like the buffers that can be installed in the printer but the
    data is stored in RAM storage instead of in the printer.  The buffer
    is unloaded to the printer at the printer's speed while DOS proceeds
    at its speed.  You can specify the the size of the buffer from 1k to
    62K, the number of copies desired, and also which printer port you want
    to use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #186, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  COMPRSOF.COM         CRC = 00 00

--> FILE:  COMPRSON.COM         CRC = 00 00

--> FILE:  CREATOR .BAS         CRC = 91 5C

--> FILE:  DBLHITOF.COM         CRC = 00 00

--> FILE:  DBLHITON.COM         CRC = 00 00

--> FILE:  DBLWDEOF.COM         CRC = 00 00

--> FILE:  DBLWDEON.COM         CRC = 00 00

--> FILE:  EMPHASOF.COM         CRC = 00 00

--> FILE:  EMPHASON.COM         CRC = 00 00

--> FILE:  EPSONCHR.ASM         CRC = D6 5D

--> FILE:  EPSONCHR.DOC         CRC = 57 42

--> FILE:  EPSONCHR.EXE         CRC = E9 AD

--> FILE:  ITALICOF.COM         CRC = 00 00

--> FILE:  ITALICON.COM         CRC = 00 00

--> FILE:  KYBD    .BAS         CRC = 43 48

--> FILE:  PRINT20 .DOC         CRC = 70 3F

--> FILE:  PRINTSET.            CRC = 00 00

--> FILE:  PRINTSET.DOC         CRC = 3F 31

--> FILE:  PRTSCFX .COM         CRC = F7 6F

--> FILE:  PRTSCFX .DOC         CRC = CB 01

--> FILE:  RESET   .COM         CRC = 00 00

--> FILE:  SET-PRTR.C           CRC = AD E8

--> FILE:  SET-PRTR.EXE         CRC = EE 91

--> FILE:  SET51LNS.COM         CRC = 00 00

--> FILE:  SETCW132.COM         CRC = 00 00

--> FILE:  SETPRF19.COM         CRC = 00 00

--> FILE:  SKP6PERF.COM         CRC = 00 00

--> FILE:  SKP8PERF.COM         CRC = 00 00

--> FILE:  SP      .DOC         CRC = 3C E2

--> FILE:  SP      .EXE         CRC = DF C7

--> FILE:  SPC     .EXE         CRC = 2E 9F

--> FILE:  TOPOFORM.COM         CRC = 00 00

--> FILE:  UNDERLOF.COM         CRC = 00 00

--> FILE:  UNDERLON.COM         CRC = 00 00

--> FILE:  NOCOLOR .COM         CRC = BA 68

--> FILE:  NOCOLOR .DOC         CRC = AD 2A

--> FILE:  SCRLKY  .ASM         CRC = F8 56

--> FILE:  SCRLKY  .COM         CRC = 7D EF

--> FILE:  SCROLLK .COM         CRC = 7D EF

--> FILE:  SCROLLK .DOC         CRC = 6D 5C

--> FILE:  XXX     .            CRC = B5 9B

 ---------------------> SUM OF CRCS = C4 4E

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## CREATOR.BAS

{% raw %}
```bas
10 ON KEY(1) GOSUB 510
20 KEY (1) ON
30 'Program to display dot matrix characters from ROM patterns.
40 'Will Fastie --19 Nov 81. Typed in 6 Feb 82 from Creative Computing
50 ' VOL.8 NO. 3 (MARCH 82) BY R. HILL
60 'Modified to write over whole screen 2/13/82, by R. Hill.
70 'Modified to save screen image by pressing F1.  11/18/83, by M. Seidel
80 DEFINT A-Z
90 GOSUB 480
100 DEF SEG=&HF000
110 BASEADR=&HFA6E
120 BYTESPERCHAR=8
130 KEY OFF
140 REM ADD IN COLOR STATEMENT
150 CLS
160 X=1:Y=1
170 REM ADD IN MESSAGE FOR LINE 25
180 CHAR$=INKEY$: IF CHAR$="" THEN 180
190 CODE=ASC(CHAR$)
200 IF CODE >= 128 THEN BEEP: GOTO 140
210 ADR = BASEADR+(CODE*BYTESPERCHAR)
220 DOTCHAR=CODE
230 'Change "DOTSIZE" to get different width characters.
240 DOTSIZE=1
250 DOT$=STRING$(DOTSIZE,DOTCHAR)
260 GOSUB 360
270 Y=Y+8*DOTSIZE
280 IF Y<SCREENWIDTH GOTO 180
290 IF X=17 GOTO 330
300 X=X+8
310 Y=1
320 GOTO 180
330 Y=1:CHAR$=INKEY$:IF CHAR$="" THEN 330
340 PRINT"":PRINT"":PRINT"":PRINT"":PRINT"":PRINT"":PRINT"":PRINT"":PRINT""
350 GOTO 190
360 FOR ROW=1 TO 8
370   ROWVAL=PEEK(ADR+(ROW-1))
380   FOR COL=1 TO 8
390     COLMASK=2^(7-(COL-1))
400     IF (ROWVAL AND COLMASK) <> 0 THEN GOSUB 440
410   NEXT COL
420 NEXT ROW
430 RETURN
440 'Locate to bit position and display giant pixel!
450 LOCATE X+(ROW-1),Y+(COL-1)*DOTSIZE
460 PRINT LEFT$(DOT$,DOTSIZE);
470 RETURN
480 'Initialize display
490 SCREENWIDTH=80
500 RETURN
510 DEF SEG=&HB800
520 IF SSS=0 THEN BSAVE"PICTURE",0,&H4000
530 IF SSS=1 THEN BSAVE"PICTURE1",0,&H4000
540 IF SSS=2 THEN BSAVE"PICTURE2",0,&H4000
550 IF SSS=3 THEN BSAVE"PICTURE3",0,&H4000
560 IF SSS=4 THEN BSAVE"PICTURE4",0,&H4000
570 IF SSS=5 THEN BSAVE"PICTURE5",0,&H4000
580 IF SSS=6 THEN BSAVE"PICTURE6",0,&H4000
590 IF SSS=7 THEN BSAVE"PICTURE7",0,&H4000
600 IF SSS=8 THEN BSAVE"PICTURE8",0,&H4000
610 IF SSS=9 THEN BSAVE"PICTURE9",0,&H4000
620 IF SSS=10 THEN BSAVE"PICTUREA",0,&H4000
630 IF SSS=11 THEN BSAVE"PICTUREB",0,&H4000
640 IF SSS=12 THEN BSAVE"PICTUREC",0,&H4000
650 IF SSS=13 THEN BSAVE"PICTURED",0,&H4000
660 IF SSS=14 THEN BSAVE"PICTUREE",0,&H4000
670 IF SSS=15 THEN BSAVE"PICTUREF",0,&H4000
680 IF SSS=16 THEN BSAVE"PICTUREG",0,&H4000
690 IF SSS=17 THEN BSAVE"PICTUREH",0,&H4000
700 IF SSS=18 THEN BSAVE"PICTUREI",0,&H4000
710 IF SSS=19 THEN BSAVE"PICTUREJ",0,&H4000
720 IF SSS=20 THEN BSAVE"PICTUREK",0,&H4000:END
730 SSS=SSS+1
740 RETURN
```
{% endraw %}

## EPSONCHR.ASM

{% raw %}
```

PAGE
PAGE 60,132
TITLE PR256 - IBM CHAR SET FOR MX100

;******************************************************************************
;
;   PR256...Copyright Tim Field, 1982 (BYTE March 1983)
;
;   IBM CHARACTER SET - This program resides on the IBM
;     personal computer. All 256 characters used by the IBM will
;     be available to be printed out using the MX1000 or MX80 with
;     graphics option. The non-standard characters are printed
;     automatically by any process or program executing the IBM
;     interrupt #17H (normal print routine in BIOS).
;
;******************************************************************************


;******************************************************************************
;
;   DEFINE THE CONSTANTS USED BY PROGRAM
;
;******************************************************************************

INTADDR  EQU  017H * 4		; Address to interrupt vector addr
NEWINT	 EQU  027H		; DOS interrupt code for "End but stay resident"
ESC_CHAR EQU  1BH		; ASCII escape character
NUL	 EQU  0 		; ASCII NUL character

;
; Define mask bytes used to turn on and off SYS_MODE for each printer
;

MASK$BIT_GRAF EQU 11111110B	; Printer in bit-graphics mode
MASK$SEC_BITG EQU 11111101B	; Next character is 2nd graf char count
MASK$FST_BITG EQU 11111011B	; Next character is 1st graf char count
MASK$NEW_INTL EQU 11110111B	; Next char international char defn
MASK$ESC_SING EQU 11101111B	; Expect one more control character
MASK$ESC_NULL EQU 11011111B	; Expect control chars until NUL found
MASK$ESC_C    EQU 10111111B	; One more control char if non-zero, else 2 more
MASK$PREV_ESC EQU 01111111B	; Next char is escape defn char

;
; Define structure used to hold each of the three (possibly existing)
; printers.
;

PRINTERS STRUC
  SYS_MODE	DB  0		; Stores bits pertaining to current printer code
  GRAF_CNT	DW  0		; 16 bit count of graphics chars...for bit-graf mode
  FULL_INSTR	DB  0		; <0 : CR/LF mode, >0 : No control codes, = 0 : normal
  GRAF_PRINTER	DB  0		; =0; Printer has EPSON graphics, >0; no
  INTLSET	DB  0		; 0-7 value of current international set for Epson
PRINTERS ENDS

;*******************************************************************************
;
; Define a temporary stack. Required for initialization of program only ...
;
;*******************************************************************************

STACK SEGMENT PARA STACK
  DB   10 DUP ('STACK   ')

STACK ENDS
      page
;********************
;
; Start code area!!
;
;********************

CODE SEGMENT
ASSUME CS:CODE,DS:CODE,SS:STACK,ES:NOTHING

PR256 PROC FAR
     ;
     ; Initialization code...used only once, on system startup
     ;
     CALL INIT_CODE		; Call initialization routine
     RET			; Return from initialization

;******************************************************************************
;
; Define storage area here
;
;******************************************************************************

     DWORD_ADDR DW 0,0		; Save address to BIOS print routine here
     TMPBYTE	DB 9		; A multiplicand
     PR1	PRINTERS <>	; Set aside area for three printers
     PR2	PRINTERS <>
     PR3	PRINTERS <>

;******************************************************************************
;
; Start of actual print runtime code
;
;******************************************************************************

START_UP:	; Start of actual print routine

     PUSH DS			; Save segment register
     PUSH SI			;
     PUSH BX			;
     PUSH CX			;
     PUSH DX			;
     PUSH AX			;
     MOV  BX,CS 		;
     MOV  DS,BX 		;
     CMP  AH,0			; Is this to print out a char?
     JE   PCHAR 		; Br if yes
     CALL PR2BYTE		; Otherwise, just print char
     JMP  DONE			;   and exit

PCHAR:

     MOV  BX,OFFSET PR1 	; Now get offset to printer structure
     CMP  DL,0			; DX contains 0,1,2 for printer number
     JE   T1			; Br if printer 0
     ADD  BX,5			; Move to next printer area
     CMP  DL,1			; Is it printer 1?
     JE   T1			; Br if yes
     ADD  BX,5			; Offset to printer 2 structure

T1:

     CMP  GRAF_PRINTER[BX],0	; Are we talking to a printer with Epson graphics?
     JNE  MORE$TO$COME		; Send out char if not graphics printer
     MOV  CH,SYS_MODE[bx]	; Get system mode bits
     RCR  CH,1			; BIT_GRAP_MODE?
     JNC  NOT$BIT$MODE		; Branch if not
     ;
     ; We are in bit-graphics mode... decrement mode count and send character
     ; as is to printer.
     ;
     DEC  GRAF_CNT[BX]		; Decrement count of graphics chars left
     JNZ  MORE$TO$COME		; Are we done with graphics mode?
     AND  SYS_MODE[BX],MASK$BIT_GRAF	; If yes, clear bit to indicate
     page
MORE$TO$COME:

     JMP  SHORT SENDCHAR	; Send bit-graf mode character

NOT$BIT$MODE:

     CMP  FULL_INSTR[BX],1	; Are we "Full Instr Set" mode?
     JE   TO$CHKCHAR		; Br if yes... no "control char" check
     JL   NORM_MODE		; Br if in normal mode
     ;
     ; If we reach here, we are in CR/LF mode. The only "printer action"
     ; codes expected in this mode are CR (ASCII 13) and LF (ASCII 10).
     ; All other ASCII values are interpreted as characters to print.
     ;
     CMP  AL,13 		; Is Carriage Return character?
     JE   SENDCHAR		; Send to printer if yes
     CMP  AL,10 		; Is Line Feed char?
     JE   SENDCHAR		; Send to printer if yes

TO$CHKCHAR:

     JMP  CHKCHAR		; else print character from character set

NORM_MODE:

     RCR  CH,1				; SEG_BITG_CNT?
     JNC  NOT$SEC			; Br if no
     ;
     ; If we reach here, the current character is the second count value for
     ; the bit-graphics mode. It is the high-order byte and must be added
     ; to the low oder byte which was the previous character.
     ;
     MOV  (FULL_INSTR-1)[BX],AL 	; Save Graf Cnt
     AND  SYS_MODE[BX],MASK$SEC_BITG	; Turn off SEC_BITG_CNT bit
     CMP  GRAF_CNT[BX],0		; Is count equal zero?
     JLE  SENDCHAR			; If yes, don't set Bit-graf mode
     OR   SYS_MODE[BX],NOT MASK$BIT_GRAF; Indicate in Bit-graph mode
     JMP  SHORT SENDCHAR		; Send out count character
     page
NOT$SEC:

     RCR  CH,1				; FST_BITG_CNT?
     JNC  NOT$FST			; Br if not
     ;
     ; If this bit is set, it indicates that the last character printed out
     ; was "Start Bit Graphics mode" indication. The current character is
     ; to be used as the low order byte of the count of bit-graphics characters
     ; to be sent. The next character expected is the high-order byte for the
     ; count.
     ;
     AND SYS_MODE[BX],MASK$FST_BITG	; Turn off FST_BITG_CNT bit
     OR  SYS_MODE[BX],NOT MASK$SEC_BITG ; Turn on SEC_BITG_CNT bit
     MOV GRAF_CNT[BX],AX		; Save low order count
     JMP SHORT SENDCHAR 		; Send count to printer

NOT$FST:

     RCR CH,1				; NEW_INTL?
     JNC NOT$INTL			; Br if not
     ;
     ; If this bit is set, it indicates that we previously saw request for a
     ; new "International" character set to be used. The current bute is
     ; expected to be a value from 0 to 7 indicating the set to be used. If
     ; an error is found, no set charge is accomplished.
     ;
     CMP AL,0				; Is current char less than 0?
     JL  NOT$VALID			; Br if yes
     CMP AL,7				; Is it greater than 7?
     JG  NOT$VALID			; Br if yes
     ;
     ; If reach here, have valid set...update in memory
     ;
     MOV INTLSET[BX],AL

NOT$VALID:

     AND SYS_MODE[BX],MASK$NEW_INTL	 ; Clear NEW_INTL bit
     JMP SHORT SENDCHAR 		; Send out value to printer

NOT$INTL:

     RCR CH,1				; ESC_SINGLE mode?
     JNC NOT$ESC_NULL			; Br if not
     AND SYS_MODE[BX],MASK$ESC_SING	; Turn off ESC_SINGLE mode
     JMP SHORT SENDCHAR 		; Send char to printer

NOT$ESC_SING:

     RCR CH,1				; ESC_NULL mode?
     JNC NOT$ESC_NULL			; Br if not
     CMP AL,NUL 			; Is this a NUL character?
     JNE SENDCHAR			; If not, print out character
     AND SYS_MODE[BX],MASK$ESC_NULL	; Otherwise, turn off ESC_NULL mode 1st
     JMP SHORT SENDCHAR 		;

NOT$ESC_NULL:

     RCR CH,1				; ESC_NULL mode?
     JNC NOT$ESC_C			; Br if not
     CMP AL,NUL 			; Is character NUL?
     JNE NOT$NUL			; Skip next if not
     OR  SYS_MODE[BX],NOT MASK$ESC_SING ; Expect one more control char

NOT$NUL:

     AND SYS_MODE[BX],MASK$ESC_C	; Turn off ESC_C mode

SENDCHAR:				; Print out current character and return

     CALL PRBYTE			; Call print routine
     JMP  DONE				; Go to end
     page
NOT$ESC_C:

     RCR  CH,1				; PREV_ESC mode?
     JNC  NOT$ESC			; Br if not
     ;
     ; If PREV_ESC bit is set, it indicates that the last character seen by
     ; this printer was an "Escape" code. We will now look and see if it is
     ; a control code that we need to remember. These are:
     ;
     ;	  ESC "L" - Puts printer in dual density bit graphics mode
     ;	  ESC "K" - Puts printer in single density bit graphics mode
     ;	  ESC "R" - Selects an International character set in printer
     ;
     ; In addition to the codes that we need to remember, we have some
     ; codes which set a temporary mode. These temporary modes are:
     ;
     ;	  "ESC_SINGLE"  : Expect one more control code. This is to be
     ;			  sent to the printer.
     ;	  "ESC_NULL"    : Expect control codes to continue until a NULL
     ;			  character (ASCII 0) is received.
     ;	  "ESC_C"       ; Expect one more control code. If that code is
     ;			  an ASCII 0, expect one more after that.
     ;
     ; The escape sequences which set these modes are:
     ;
     ;	  ESC "A" - ESC_SINGLE mode
     ;	  ESC "D" - ESC_NULL mode
     ;	  ESC "Q" - ESC_SINGLE mode
     ;	  ESC "B" - ESC_NULL mode
     ;	  ESC "C" - ESC_C mode
     ;	  ESC "N" - ESC_SINGLE mode
     ;
     AND SYS_MODE[BX],MASK$PREV_ESC	; Turn off PREV_ESC mode bit
     CMP AL,'L'                         ; CTRL-K?
     JE  SET$BIT_GRAF			; Br if yes
     CMP AL,'K'                         ; CTRL-K?
     JNE ARND$BIT_GRAF			; Br if not

SET$BIT_GRAF:

     OR  SYS_MODE[BX],NOT MASK$FST_BITG ; Ind.that next char is FST_BITG_CNT
     JMP SHORT SENDCHAR 		; Done, send out

ARND$BIT_GRAF:

     CMP AL,'R'                         ; CTRL-R?
     JNE NOT$INT			; Br if not
     OR  SYS_MODE[BX],NOT MASK$NEW_INTL ; Indicate next char is NEW_INTL bit
     JMP SHORT SENDCHAR 		; Send out character

NOT$INT:

     CMP AL,'A'                         ; ESC A?
     JE  DO$ESC_SINGLE			; Br if yes
     CMP AL,'Q'                         ; ESC Q?
     JE  DO$ESC_SINGLE			; Br if yes
     CMP AL,'N'                         ; ESC N?
     JNE NOT$SINGLE			; Br if not ESC_SINGLE mode

DO$ESC_SINGLE:				; Set ESC_SINGLE mode

     OR  SYS_MODE[BX],NOT MASK$ESC_SING ;
     JMP SHORT SENDCHAR 		; Print out char

NOT$SINGLE:				; Check for ESC_NULL mode now

     CMP AL,'D'                         ; ESC D?
     JE  DO$ESC_NULL			; Br if yes
     CMP AL,'B'                         ; ESC B?
     JNE NOT$NULL			; Br if not ESC NULL mode

DO$ESC_NULL:				; Set ESC_NULL mode

     OR  SYS_MODE[BX],NOT MASK$ESC_NULL ;
     JMP SHORT SENDCHAR 		; Print out char

NOT$NULL:				; Check for ESC_C mode now

     CMP AL,'C'                         ; ESC C?
     JNE NOT$ESCC			; Br if not
     OR SYS_MODE[BX],NOT MASK$ESC_C	; Set ESC_C mode bit

NOT$ESCC:			; Whatever type of char this is...print it

     JMP SHORT SENDCHAR

NOT$ESC:			; Previous char was not an ESCAPE control char
     ;
     ; Is thia an ESCAPE code?
     ;
     CMP AL,ESC_CHAR			;
     JNE NESC				; Br if not
     OR SYS_MODE[BX],NOT MASK$PREV_ESC	; Set escape found bit
     JMP SHORT SENDCHAR 		; Send out character

NESC:

     ;
     ; See if we have any standard control codes...ASCII 7-20
     ;
     CMP AL,07H 			; Is character less than 7?
     JL  CHKCHAR			; Br if yes, not control code
     CMP AL,14H 			; Is character greater than 14?
     JLE SENDCHAR			; If not, is a control code...print it

CHKCHAR:
     ;
     ; Here we ckeck to see if the character to be printed is in the range
     ; of 20H to 7EH (ASCII value of the character to be printed.) If in
     ; that range, use standard Epson character set. Otherwise, we have
     ; a special character to print.
     ;
     MOV AH,0				; Make sure nothing is in upper byte
     CMP AX,20H 			; Is character less than 20H?
     JL  BIT$CHAR			; Br if yes, special character
     CMP AX,7EH 			;
     JLE SENDCHAR			; Not a special character, just print it
     SUB AL,7EH-20H+1			; Subtract non-special character set out

BIT$CHAR:
     ;
     ; See if current character is part of the Epson's International character
     ; set. (If its offset into BITTYP array is 0, international.
     ;
     PUSH BX				; Save offset to starage area
     PUSH AX				; Save current character
     MOV BX,AX				;
     MOV CL,3				; Shift count
     SHR BL,CL				; Shift lower three bits from AL
     MOV CH,BITTYP[BX]			; Get byte containing type bit
     SHL BL,CL				; Move AL back to original position
     ; Note: we have now lost the lower three bits from AL.
     NEG BX				; Take two's complement of BL
     ADD BL,AL				; Add original contents of AL to negated
					;   value to get right three bits
     INC BL				; This is now our index to type bit
     MOV CL,BL				; Let's use value as shift count
     MUL TMPBYTE			; Offset into array
     MOV SI,AX				; Get index into array
     POP AX				; Once again, get original char
     SHL CH,CL				; Recall CH holds bit-type byte
     JC  DO$BIT_GRAF			; Carry now is type of the char
     ;
     ; Well, we see that the bit type was 0, so we are to specify a char
     ; from the Epson international character set. To determine which, we
     ; expect the first byte in BITVAL array to tell us which international
     ; set to use and the second byte to tell us the character to print.
     ;
     MOV CH,BITVAL[SI]			; Get character set
     CMP INTLSET[BX],CH 		; Is this the set we are now using?
     JNE NEW$INTSET			; Br if not
     POP BX				; Keep stack clean
     MOV AL,BITVAL[SI][1]		; If yes, just send out character
     JMP SENDCHAR			;

NEW$INTSET:			; Must temporarily set up new international set

     MOV AL,ESC_CHAR			; Print out "ESC" char
     CALL PRBYTE			;
     MOV AL,'R'                         ; Send  out new international signal
     CALL PRBYTE			;
     MOV AL,CH				; Print out character set to use
     CALL PRBYTE			;
     MOV AL,BITVAL[SI][1]		; Get intl character to print
     CALL PRBYTE			;
     MOV AL,ESC_CHAR			; Now restore original character set
     CALL PRBYTE			;
     MOV AL,'R'                         ;
     CALL PRBYTE			;
     POP  BX				; Restore address to store area
     MOV  AL,INTLSET[BX]		; Set type
     CALL PRBYTE			;
     JMP  DONE				; We are done so exit program

DO$BIT_GRAF:			; Special bit-graphics mode

     POP  BX				; Restore to keep stack straight
     PUSH AX				; Save current character for indexing
     MOV  AL,ESC_CHAR			; Put printer in dual density bit mode
     CALL PRBYTE			;
     MOV  AL,'L'                        ;
     CALL PRBYTE			;
     MOV  AL,12 			; Each graphics character consists of
     CALL PRBYTE			; exactly 9 columns of bits followed
     MOV  AL,0				; by 3 blank columns (12 columns total)
     CALL PRBYTE			;
     POP  AX				;
     CMP  AX,0B3H-(7EH-20H+1)		; See if extended set
     JL   NON_EXTND			; Br if not
     CMP  AX,0E0H-(7EH-20H+1)		;
     JGE  NON_EXTND			;
     ;
     ; The character is in the "extended" set. (ASCII 176 to 223)
     ;
     MOV  AL,BITVAL[SI] 		; Pre-extended first column
     CALL PR9BYTS			; Print out character
     JMP  AROUND			; Move around non-extended set

NON_EXTND:			; Character is non-extended

     MOV  AL,0				; First column is blank
     CALL PR9BYTS			; Print out character
     MOV  AL,0				; Last two columns are blank

AROUND:

     CALL PRBYTE			; Print out last two columns
     CALL PRBYTE			;

DONE:				; Exit Program

     POP  DX				; Restore AL without disturbing AH
     MOV  AL,DL 			;
     POP  DX				; Rsetore registers
     POP  CX				;
     POP  BX				;
     POP  SI				;
     POP  DS				;
     IRET				; Return from interrupt

PR256 ENDP			; Done with main routine !!!
     page
;******************************************************************************
;
;    PRBYTE - clears current value of AH and prints out character in AL
;
;*****************************************************************************

PRBYTE PROC NEAR

     MOV  AH,0					; Clear out for printing w/BIOS
     CALL PR2BYTE				; Do actual printout of char
     RET					; Done

PRBYTE	  ENDP

;******************************************************************************
;
;    PR2BYTE - Calls IBM's BIOS print routine to print out contents of AX
;
;******************************************************************************

PR2BYTE PROC NEAR

     PUSH DS
     PUSH SI
     PUSHF					; IBM print proc expects interrupt call
     MOV  SI,SEG DWORD_ADDR			; Get segment to ROM code
     MOV  DS,SI 				;
     MOV  SI,OFFSET DWORD_ADDR			; Get address to ROM code for print
     CALL DWORD PTR [SI]			; Call print routine
     POP  SI
     POP  DS
     RET					; Return

PR2BYTE   ENDP

;******************************************************************************
;
;    PR9BYTS - Prints out a graphics character using BITVAL table below.
;	       On entry, AL contains byte value of first column to be printed.
;	       Next nine columns of character are fetched from indexing thru
;	       SI (which must be initialized by calling routine) into the
;	       BITVAL table.
;
;*****************************************************************************

PR9BYTS PROC NEAR

     CALL PRBYTE				; Print out first column
     MOV  CX,9					; Loop through 9 columns

LOOP$SEND:

     MOV  AL,BITVAL[SI] 			; Get next column to print
     CALL PRBYTE				; Print it out
     INC  SI					; Move to next column
     LOOP LOOP$SEND				; Loop until done
     RET					; If done, then return

PR9BYTS ENDP
     PAGE
;******************************************************************************
;
;    Define characters... 9 bytes per character
;
;******************************************************************************

     .RADIX 16 ; All value in hexadecimal

BITVAL	  DB   000,000,000,000,000,000,000,000,000	; 0 (Decimal ASCII)
	  DB   03C,042,089,0A5,085,0A5,089,042,03C	; 1
	  DB   03C,07E,093,9BH,0FBH,9BH,93,07E,03C	; 2
	  DB   060,0F0,0F8,07C,07E,07C,0F8,0F0,060	; 3
	  DB   000,010,038,07C,0FE,07C,038,010,000	; 4
	  DB   010,038,038,0D0,0EE,0D0,038,038,010	; 5
	  DB   000,000,030,072,0FE,072,030,000,000	; 6
	  DB   000,000,030,078,078,078,030,000,000	; 7
	  DB   0FF,0FF,0CF,087,087,087,0CF,0FF,0FF	; 8
	  DB   000,018,024,042,042,042,024,018,000	; 9
	  DB   0FF,0E7,0DBH,0DBH,0DBH,0DBH,0DBH,0E7,0FF ; 10
	  DB   000,00C,012,012,012,0B2,0CC,0E0,000	; 11
	  DB   000,000,064,094,09F,094,064,000,000	; 12
	  DB   000,006,006,0FE,0A0,0A0,0A0,0E0,000	; 13
	  DB   006,006,0FE,0A0,0A0,0A0,0AC,0AC,0FC	; 14
	  DB   054,010,038,028,0EE,028,038,010,054	; 15
	  DB   000,0FE,07C,07C,038,038,010,010,000	; 16
	  DB   000,010,010,038,038,07C,07C,0FE,000	; 17
	  DB   000,000,028,06C,0FE,06C,028,000,000	; 18
	  DB   000,0F2,0F2,000,000,000,0F2,0F2,000	; 19
	  DB   060,090,090,0FE,080,080,0FE,080,080	; 20
	  DB   001,5DH,000,000,000,000,000,000,000	; 21 * FRANCE - 5D
	  DB   000,03C,03C,03C,03C,03C,03C,03C,000	; 22
	  DB   000,001,029,6DH,0FF,6DH,029,001,000	; 23
	  DB   000,000,020,060,0FE,060,020,000,000	; 24
	  DB   000,000,008,00C,0FE,00C,008,000,000	; 25
	  DB   000,010,010,010,010,07C,038,010,000	; 26
	  DB   000,010,038,07C,010,010,010,010,000	; 27
	  DB   000,000,038,008,008,008,008,000,000	; 28
	  DB   010,038,07C,010,010,010,07C,038,010	; 29
	  DB   000,004,00C,01C,03C,01C,00C,004,000	; 30
	  DB   000,020,030,038,03C,038,030,020,000	; 31
	  DB   000,006,0AH,012,022,012,0AH,006,000	; 127
	  DB   001,05C,000,000,000,000,000,000,000	; 128 * FRANCE - 5C
	  DB   002,7DH,000,000,000,000,000,000,000	; 129 * GERMANY - 7D
	  DB   001,7BH,000,000,000,000,000,000,000	; 130 * FRANCE - 7B
	  DB   005,7DH,000,000,000,000,000,000,000	; 131 * SWEDEN - 7D
	  DB   002,7BH,000,000,000,000,000,000,000	; 132 * GERMANY - 7B
	  DB   001,040,000,000,000,000,000,000,000	; 133 * FRANCE - 40
	  DB   002,007,055,0F5,0B5,0B5,0FE,04F,001	; 134
	  DB   000,071,089,089,08F,088,088,050,000	; 135
	  DB   000,00E,05F,0D5,095,095,0D5,5DH,00C	; 136
	  DB   000,01C,0BE,0AA,02A,02A,0AA,0BA,018	; 137
	  DB   001,7DH,000,000,000,000,000,000,000	; 138 * FRANCE - 7D
	  DB   000,0A2,0A2,03E,01E,082,082,000,000	; 139
	  DB   000,052,0D2,09E,08E,0C2,042,000,000	; 140
	  DB   000,012,092,0DE,04E,002,002,000,000	; 141
	  DB   002,5BH,000,000,000,000,000,000,000	; 142 * GERMANY - 5B
	  DB   003,047,04E,0BA,0B2,0BA,04E,047,003	; 143
	  DB   005,040,000,000,000,000,000,000,000	; 144 * SWEDEN - 40
	  DB   004,7BH,000,000,000,000,000,000,000	; 145 * DENMARK - 7B
	  DB   004,5BH,000,000,000,000,000,000,000	; 146 * DENMARK - 5B
	  DB   000,00E,05F,0D1,091,091,0D1,05F,00E	; 147
	  DB   002,07C,000,000,000,000,000,000,000	; 148 * GERMANY - 7C
	  DB   000,00E,01F,091,0D1,051,011,01F,001	; 149
	  DB   000,05E,0DF,081,081,0C1,05E,01F,001	; 150
	  DB   001,07C,000,000,000,000,000,000,000	; 151 * FRANCE - 7C
	  DB   020,0B0,099,00F,006,00C,098,0B0,020	; 152
	  DB   002,05C,000,000,000,000,000,000,000	; 153 * GERMANY - 5C
	  DB   002,05C,000,000,000,000,000,000,000	; 154 * GERMANY - 5D
	  DB   018,03C,066,042,0FF,0FF,042,066,024	; 155
	  DB   003,023,000,000,000,000,000,000,000	; 156 * ENGLAND - 23
	  DB   000,000,094,054,03F,054,094,000,000	; 157
	  DB   007,023,000,000,000,000,000,000,000	; 158 * SPAIN - 23
	  DB   000,004,012,012,07C,090,090,040,000	; 159
	  DB   004,00E,02A,06A,0EA,0AA,03C,01E,002	; 160
	  DB   000,012,012,05E,0CE,082,002,000,000	; 161
	  DB   000,00E,01F,011,051,0D1,091,01F,00E	; 162
	  DB   000,01E,01F,041,0C1,081,01E,01F,001	; 163
	  DB   007,07C,000,000,000,000,000,000,000	; 164 * SPAIN - 7C
	  DB   007,05C,000,000,000,000,000,000,000	; 165 * SPAIN - 5C
	  DB   000,012,0BA,0AA,0AA,0AA,072,07A,00A	; 166
	  DB   000,072,0FA,08A,08A,08A,08A,0FA,072	; 167
	  DB   007,5DH,000,000,000,000,000,000,000	; 168 * SPAIN - 5D
	  DB   000,000,038,020,020,020,020,000,000	; 169
	  DB   000,000,020,020,020,020,038,000,000	; 170
	  DB   000,042,0F4,008,010,029,053,015,009	; 171
	  DB   000,042,0F4,008,012,026,04A,01F,002	; 172
	  DB   007,5BH,000,000,000,000,000,000,000	; 173 * SPAIN - 5B
	  DB   010,038,06C,044,010,038,06C,044,000	; 174
	  DB   000,044,06C,038,010,044,06C,038,010	; 175
	  DB   000,055,000,0AA,000,055,000,0AA,000	; 176
	  DB   055,0AA,055,0AA,055,0AA,055,0AA,055	; 177
	  DB   0FF,0AA,0FF,055,0FF,0AA,0FF,055,0FF	; 178
	  DB   000,000,000,000,0FF,000,000,000,000	; 179
	  DB   008,008,008,008,0FF,000,000,000,000	; 180
	  DB   028,028,028,028,0FF,000,000,000,000	; 181
	  DB   008,008,008,0FF,000,000,0FF,000,000	; 182
	  DB   008,008,008,00F,008,008,00F,000,000	; 183
	  DB   028,028,028,028,03F,000,000,000,000	; 184
	  DB   028,028,028,0EF,000,000,0FF,000,000	; 185
	  DB   000,000,000,0FF,000,000,0FF,000,000	; 186
	  DB   028,028,028,02F,020,020,03F,000,000	; 187
	  DB   028,028,028,0E8,008,008,0F8,000,000	; 188
	  DB   008,008,008,0F8,008,008,0F8,000,000	; 189
	  DB   028,028,028,028,0F8,000,000,000,000	; 190
	  DB   008,008,008,008,00F,000,000,000,000	; 191
	  DB   000,000,000,000,0F8,008,008,008,008	; 192
	  DB   008,008,008,008,0F8,008,008,008,008	; 193
	  DB   008,008,008,008,00F,008,008,008,008	; 194
	  DB   000,000,000,000,0FF,008,008,008,008	; 195
	  DB   008,008,008,008,008,008,008,008,008	; 196
	  DB   008,008,008,008,0FF,008,008,008,008	; 197
	  DB   000,000,000,000,0FF,028,028,028,028	; 198
	  DB   000,000,000,0FF,000,000,0FF,008,008	; 199
	  DB   000,000,000,0F8,008,008,0E8,028,028	; 200
	  DB   000,000,000,03F,020,020,02F,028,028	; 201
	  DB   028,028,028,0E8,008,008,0E8,028,028	; 202
	  DB   028,028,028,02F,020,020,02F,028,028	; 203
	  DB   000,000,000,0FF,000,000,0EF,028,028	; 204
	  DB   028,028,028,028,028,028,028,028,028	; 205
	  DB   028,028,028,0EF,000,000,0EF,028,028	; 206
	  DB   028,028,028,028,0E8,028,028,028,028	; 207
	  DB   008,008,008,0F8,008,008,0F8,008,008	; 208
	  DB   028,028,028,028,02F,028,028,028,028	; 209
	  DB   008,008,008,00F,008,008,00F,008,008	; 210
	  DB   000,000,000,0F8,008,008,0F8,008,008	; 211
	  DB   000,000,000,000,0F8,028,028,028,028	; 212
	  DB   000,000,000,000,03F,028,028,028,028	; 213
	  DB   000,000,000,00F,008,008,00F,008,008	; 214
	  DB   008,008,008,0FF,008,008,0FF,008,008	; 215
	  DB   028,028,028,028,0FF,028,028,028,028	; 216
	  DB   008,008,008,008,0F8,000,000,000,000	; 217
	  DB   000,000,000,000,00F,008,008,008,008	; 218
	  DB   0FF,0FF,0FF,0FF,0FF,0FF,0FF,0FF,0FF	; 219
	  DB   00F,00F,00F,00F,00F,00F,00F,00F,00F	; 220
	  DB   0FF,0FF,0FF,0FF,0FF,000,000,000,000	; 221
	  DB   000,000,000,000,000,0FF,0FF,0FF,0FF	; 222
	  DB   0F0,0F0,0F0,0F0,0F0,0F0,0F0,0F0,0F0	; 223
	  DB   000,03C,042,042,042,03C,024,042,000	; 224
	  DB   002,07E,000,000,000,000,000,000,000	; 225 * GERMANY - 7E
	  DB   000,07E,040,040,040,040,040,070,000	; 226
	  DB   000,040,07E,040,040,040,07E,040,000	; 227
	  DB   082,0C6,0AA,092,082,082,082,0C6,000	; 228
	  DB   000,03C,042,042,042,07C,040,040,040	; 229
	  DB   000,001,07E,004,004,004,004,078,000	; 230
	  DB   000,020,040,040,03E,020,040,040,000	; 231
	  DB   000,099,0A5,0A5,0E7,0A5,0A5,099,000	; 232
	  DB   000,038,054,092,092,092,054,038,000	; 233
	  DB   002,03A,046,080,080,080,046,03A,002	; 234
	  DB   000,000,04C,0B2,092,092,08C,000,000	; 235
	  DB   038,044,044,044,038,044,044,044,038	; 236
	  DB   000,03A,044,04C,054,064,044,0B8,000	; 237
	  DB   000,000,038,054,092,082,000,000,000	; 238
	  DB   000,01E,020,040,040,040,020,01E,000	; 239
	  DB   000,054,054,054,054,054,054,054,000	; 240
	  DB   000,022,022,022,0FA,022,022,022,000	; 241
	  DB   000,002,08A,08A,052,052,022,022,000	; 242
	  DB   000,022,022,052,052,08A,08A,002,000	; 243
	  DB   000,000,000,000,07F,080,080,060,000	; 244
	  DB   000,006,001,001,0FE,000,000,000,000	; 245
	  DB   000,010,010,010,054,010,010,010,000	; 246
	  DB   000,024,048,048,024,012,012,024,000	; 247
	  DB   000,000,030,048,048,048,030,000,000	; 248
	  DB   000,000,030,078,078,078,030,000,000	; 249
	  DB   000,000,000,010,038,010,000,000,000	; 250
	  DB   010,010,010,008,004,07E,040,040,040	; 251
	  DB   080,070,080,080,078,000,000,000,000	; 252
	  DB   044,08C,094,064,000,000,000,000,000	; 253
	  DB   000,000,07C,07C,07C,07C,07C,000,000	; 254
	  DB   000,000,000,000,000,000,000,000,000	; 255
	PAGE
;******************************************************************************
;
;    Set up bits to distinguish between normal graphics characters
;    and those which can use the MX100 International character sets
;
;*****************************************************************************

.RADIX 10      ; Back to decimal

BITTYP	  DB   11111111B	; ASCII 0 to 7
	  DB   11111111B	;   8 -  15
	  DB   11111011B	;  16 -  23
	  DB   11111111B	;  24 -  31
	  DB   10000001B	; 127 - 134
	  DB   11101110B	; 135 - 142
	  DB   10001011B	; 143 - 150
	  DB   01001010B	; 151 - 158
	  DB   11111001B	; 159 - 166
	  DB   10111101B	; 167 - 174
	  DB   11111111B	; 175 - 182
	  DB   11111111B	; 183 - 190
	  DB   11111111B	; 191 - 198
	  DB   11111111B	; 199 - 206
	  DB   11111111B	; 207 - 214
	  DB   11111111B	; 215 - 222
	  DB   11011111B	; 223 - 230
	  DB   11111111B	; 231 - 238
	  DB   11111111B	; 239 - 246
	  DB   11111111B	; 247 - 254
	  DB   10000000B	; 255

	  PAGE
LASTONE:  ; All code after this label is freed to DOS use after
	  ; initialization of the program


;******************************************************************************
;
;    Code to load and initialize the printing program ...
;    sets up DOS to keep all code before "LASTONE" label
;    safe from overlaying during system operation.
;
;******************************************************************************

INIT_CODE PROC NEAR

     POP  AX				; Remove return address of CALL
     ;
     ; After this initialization routine is finished, we wish to return
     ; to DOS and prevent DOS from overlaying the PR256 code.
     ; This is done by replacing the INT X`20' command found at the front
     ; of the Program Segment Prefix control block with an INT X`27'
     ; "Program end but stay resident" command. The address to this instruction
     ; is placed on the front of the stack, behind the return address
     ; used by this subroutine. When the initialization is finished, this
     ; routine returns to its caller (the main program) which executes a
     ; return to the PSP, resulting in the INT X`27' command execution.
     ;
     PUSH DS				; move segment address to PSP onto stack
     MOV  DI,0				; Set return to first location in PSP
     PUSH DI				;
     PUSH AX				; Restore return address
     MOV  AL,NEWINT			; Set up INT X`27' in PSP
     MOV  [DI+1],AL			;

     MOV  AX,0				; set up address to INT 17H vector
     MOV  DS,AX 			;
     MOV  BX,INTADDR			;
     LES  DI,DWORD PTR [BX]		; Load double word addr to BIOS print routine
     MOV  AX,SEG DWORD_ADDR		; Now set up addr to store BIOS addr
     MOV  DS,AX 			;
     MOV  DWORD_ADDR,DI 		;
     MOV  AX,ES 			;
     MOV  DWORD_ADDR+2,AX		; Store BIOS print routine address
     MOV  AX,SEG START_UP		;
     MOV  ES,AX 			; Don't forget to save segment address
     MOV  DI,OFFSET START_UP		;
     MOV  AX,0				;
     MOV  DS,AX 			; Now address back to INT 17H vector
     MOV  BX,INTADDR			;
     MOV  [BX],DI			;
     MOV  DI,ES 			;
     MOV  [BX+2],DI			;
     MOV  DX,OFFSET LASTONE		; Save all code up to "LASTONE" label
     ADD DX,100H			; from overlaying by DOS
     RET				; Return to MAIN program

INIT_CODE ENDP
CODE ENDS
     END

```
{% endraw %}

## FILES186.TXT

{% raw %}
```
Disk No:  186
Program Title: CRT and Epson Printer Utilities
PC-SIG version: 1.6

This disk contains a collection of useful printer utilities for your
EPSON and compatible printers.

Usage:  Printer Utilities.

Special Requirements:  An EPSON or compatible printer.

How to Start:  Type the filename you wish to run.  Example: type SP
(press enter)

Suggested Registration:  Various.

File Descriptions:

WINEGA  <DIR> Directory with files for enhancing EGA cards.
PRTSCFX <DIR> Files for graphic screen dumps on Epson FX and RX.
NOCOLOR  COM  Switch color graphics card to B/W mode.
NOCOLOR  DOC  Documentation.
SCRLKY   ASM  Assembler source.
SCRLKY   COM  Better screen scrolling control.
SCROLLK  COM  Another screen scrolling control utility.
SCROLLK  DOC  Documentation.
COMPRSOF COM  Set compressed print off.
COMPRSON COM  Set compressed print on.
CREATOR  BAS  Displays characters in dot matrix pattern.
DBLHITOF COM  Set enlarged print off.
DBLHITON COM  Set enlarged print on.
DBLWDEOF COM  Set wide print off.
DBLWDEON COM  Set wide print on.
EMPHASOF COM  Set emphasized print off.
EMPHASON COM  Set emphasized print off.
EPSONCHR ASM  Assembler source.
EPSONCHR DOC  Documentation.
EPSONCHR EXE  Permits printing all characters.
ITALICOF COM  Set italics off.
ITALICON COM  Set italics on.
KYBD     BAS  Send printing directly to monochrome parallel port.
PRINT20  DOC  Patch to skip LPT1? prompt from PRINT.COM.
PRINTSET      Sets Epson to compressed print.
PRINTSET DOC  Documentation.
RESET    COM  Reset printer to power-on settings.
SET-PRTR C    Source.
SET-PRTR EXE  MX-80 printer settings.
SET51LNS COM  Set 51 lines per page.
SETCW132 COM  Set 132 columns per page.
SETPRF19 COM  Perforation setting.
SKP6PERF COM  Perforation setting - 6 lines/inch.
SKP8PERF COM  Perforation setting - 8 lines/inch.
TOPOFORM COM  Skip to top of form.
UNDERLOF COM  Set underline off.
UNDERLON COM  Set underline on.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## KYBD.BAS

{% raw %}
```bas
100 'DIRECT PRINTER DRIVER.  THIS PROGRAM IS USED TO SEND CHARACTERS DIRECTLY
110 'TO THE PRINTER OUTPUT PORT ON THE IBM MONOCHROME BOARD OR PARALLEL PRINTER
120 'BOARD (or equivalent).  CONTROL CHARACTERS OR ESCAPE CODE SEQUENCES CAN BE
130 'SENT.  REMEMBER HOWEVER, THE PRINT BUFFER IS NOT DUMPED UNTIL IT IS FULL
140 '(set by the width command), OR A CARRIAGE RETURN, LINE FEED, OR OTHER
150 'APPROPRIATE CONTROL CHARACTER IS SENT.
160 '***
170 '***  Program by: Lee M. Buck, October, 1982. Arlington, Va.(703-527-5813)
180 '***  The subroutine that performs the direct output to the printer
190 '***  is from W. Fastie's  IBM  column in the Oct. 82 'Creative Computing '
200 '***
210 'THE PROGRAM WILL GET 'HUNG ' IF YOU SPECIFY THE INCORRECT PRINTER ADAPTER.
220 'IF THAT HAPPENS, ENTER Ctrl-Break AND START AGAIN.  TO QUIT THE PROGRAM
230 'ENTER Ctrl-Break.
240 CLEAR:CLOSE:CLS:DEFINT A-Z
250 DATAIO=&H378 : PRNTLATCH=&H37A : STATUSREG=&H379
260 LOCATE 5,1: PRINT "IS YOUR PRINTER ATTACHED TO THE IBM MONOCHROME"
270 PRINT "DISPLAY BOARD OR 'OTHER ' ?  PRESS  M  OR  O : ";
280 Q$=INKEY$: IF Q$="" THEN 280
290 IF Q$="M" OR Q$="m" OR Q$="O" OR Q$="o" THEN PRINT Q$ ELSE BEEP: GOTO 260
300 IF Q$<>"M" AND Q$<>"m" THEN 320
310 DATAIO=&H3BC : PRNTLATCH=&H3BE : STATUSREG=&H3BD
320 WIDTH "LPT1:",80
330 LOCATE 10,1:PRINT"PRESS KEY TO SEND TO PRINTER (including control keys) ";
340 DEF SEG: POKE 106,0
350 Q$=INKEY$: IF Q$="" THEN 350 ELSE PRINT Q$;
360 LNTH=LEN(Q$): C=ASC(MID$(Q$,LNTH))
370 GOSUB 390
380 LOCATE 10,1: PRINT SPACE$(79);:GOTO 330
390 OUT PRNTLATCH, &H6
400 IF INP(STATUSREG) <> &HDF THEN 400
410 OUT DATAIO, C
420 OUT PRNTLATCH, &H3F
430 IF INP(STATUSREG) <> &HDF THEN 430
440 RETURN
```
{% endraw %}

## NOCOLOR.DOC

{% raw %}
```
***************************************************************************
*  NOCOLOR.COM	-  author unknown					  *
*									  *
*  Those PC owners using a COLOR/GRAPHICS card with a monochrome monitor  *
*  may find this program useful.  Many programs assume that if you have   *
*  a C/G card, you have a color display, and proceed to produce color-	  *
*  encoded video output, which makes indecipherable garbarge on a	  *
*  monochrome screen.							  *
*									  *
*  Use this program to switch your Color/Graphics card to B/W mode from   *
*  within such a program.						  *
*									  *
*  Run NOCOLOR at the DOS prompt.  From then on, hitting Alt-Tab will	  *
*  switch the C/G card to B/W mode.					  *
*									  *
*  Uploaded to PCanada by Mark Magner	November 16, 1983		  *
*									  *
***************************************************************************
ark Magner	November 16, 1983		  *
*									  *
*************************************************************************
```
{% endraw %}

## PRINT20.DOC

{% raw %}
```
If you want the PRINT.COM program in dos 2.0 to skip
the prompt for the output list device, to allow for
automatic installation at boot-up,
 
A>debug print.com
-e c0d 90 90
-e c14 90 90
 
If your printer is the default, (LPT1:), that's all 
there is to it.  Write the file to disk and quit.
If your printer is attached to some other port,
like LPT2:, you must make one more patch, to specify
the device.
 
-e 120d 5 "LPT2:"
 
The "5" in this case is the number of characters in 
the name of the device.  Substitute for whatever port
your printer is attached to, then,
 
-w
Writing xx bytes
-q
A>
 
And thats all there is to it.


```
{% endraw %}

## PRINTSET.DOC

{% raw %}
```
 PRINTSET, BY MICHAEL W. CSONTOS  1/18/83

THIS "PROGRAM" SETS UP THE EPSON PRINTER TO PRINT COMPRESSED PRINT
WITH 1/8 IN SPACING WITH AUTO-SKIP-OVER-PERF ON 11 INCH PAGES. IT
ALSO RESETS THE PRINTER TO TOP-OF-FORM WHEN IT IS RUN.

TO "RUN" THE PROGRAM TURN ON THE PRINTER AND, IN DOS, TYPE "TYPE PRINTSET".

THE CHARACTERS THAT APPEAR ON THE SCREEN AND THE BEEP ARE THE RESULT OF
DOS INTERPRETING THE EPSON COMMAND CODES. THE DOTS THAT ARE PRINTED ON THE 
PRINTER WERE JUST TO HELP IN DEBUGGING THE PROGRAM AND TO SHOW THAT IT 
FUNCTIONED PROPERLY.  IT TOOK QUITE A WHILE TO FIND A CODE THAT WAS 
COMPATABLE WITH EDLIN, DOS, AND THE EPSON!

I FIND THIS SMALL ROUTINE VERY USEFUL IN PRINTING OUT LONG DOCUMENTATION 
FILES WITHOUT USING TOO MUCH PAPER.

```
{% endraw %}

## SCRLKY.ASM

{% raw %}
```
;***************************************************************************
;This program intercepts Video I/O routine.Commands to scroll the screen and
;are intercepted,allothers passed through. This routine is attached to DOS.
;***************************************************************************
;***** ***** ***** ***** ***** scrlky.asm ***** ***** ***** ***** ***** *****
;-----------------------------------------------------------------------------
;INTERRUPT VECTORS FOR VIDEO AND KEYBOARD FUNCTIONS
;---------------------------------------------------------------------------
VECTORS SEGMENT AT 0
        ORG     10H*4
VIDEO_INT       LABEL   DWORD
        ORG     16H*4
KEYBOARD_INT    LABEL   DWORD
VECTORS ENDS
;
ROM_BIOS_DATA   SEGMENT AT  40H
        ORG     17H
KB_FLAG DB      ?               ;bit 4 set for scroll lock
ROM_BIOS_DATA   ENDS
;---------------------------------------------------------------------------
;Initialize vectors and attach to DOS
;---------------------------------------------------------------------------
CSEG    SEGMENT PARA
        ASSUME  CS:CSEG
        ORG     100H
BEGIN:  JMP     INIT_VECTORS    ;Initialize INT 10H and attach to DOS
;----------------------------------------------------------------------------
;These memory locations store addresses of ROM routines for Video&KB I/O
;----------------------------------------------------------------------------
ROM_VIDEO_IO    DD              ;address of ROM routines
ROM_KEYBOARD_IO DD
SCROLL_COUNT    DB      0       ;no. lines scrolled since last pause
LAST_LOCK_STATE DB      0       ;scroll by 23 lines leaving one old line
MAX_LINES       DB      23      ;at the top of the screen
LAST_LINE       DB              ;last line the cursor was one
;----------------------------------------------------------------------------
;This routine intercepts calls to Video I/O routine in ROM
;Scroll Lock
;      OFF      This routine passes control directly to ROM BIOS
;      ON       Functions other than Scroll Up orScroll down are passed
;               directly to ROM routines. Otherwise,this routine increments
;               the scroll count and checks to see if it esceeds the page
;               size of 25 lines. If so, loop until either shift key is
;               pressed.
;                       left shift - allows scroll of entire window
;                       right shift- scroll one line
;----------------------------------------------------------------------------
INTERCEPT_VIDEO PROC    FAR
        ASSUME  CS:CSEG
        STI                     ;turn on interrupts again
        PUSH    DS              ;save registers used
        PUSH    BX      
        PUSH    AX
        ASSUME  DS:ROM_BIOS_DATA
        MOV     BX,ROM_BIOS_DATA
        MOV     DS,BX
        MOV     AL,KB_FLAG      ;check state of scroll lock key
        AND     AL,10H          ;pick off scroll lock bit
        ASSUME  DS:CSEG
        MOV     BX,CS           ;Data segment for variables above
        MOV     DS,BX
        CMP     AL,LAST_LOCK_STATE
        JE      UN_CHANGED      
        MOV     BL,MAX_LINES    ;scroll lock key has changed,set to
        MOV     SCROLL_COUNT,BL ;MAX_LINES to stop scrolling
        MOV     LAST_LOCK_STATE,AL      ;Save new scroll lock state
        PUSH    CX              ;read current cursro position
        PUSH    DX      
        PUSH    AX
        MOV     AH,3
        MOV     BH,0
        PUSHF
        CALL    ROM_VIDEO_IO    ;find old cursor position
        MOV     LAST_LINE,DH
        POP     AX
        POP     DX
        POP     CX
UN_CHANGED:
        XCHG    AX,BX           ;Recover function(AH) and retain scroll lock
        POP     AX
        OR      BL,BL           ;is scroll lock on?
        JZ      TO_VIDEO_IO     ;no, jump to ROM video I/O
;----------------------------------------------------------------
;Scroll Lock On
;----------------------------------------------------------------
        CMP     AH,2    ;check for SET CURSOR POSITION function
        JNE     NOPE
        CMP     DH,LAST_LINE    ;is cursor beingmoved to next line?
        MOV     LAST_LINE,DH    ;save new cursor line
        JLE     TO_VIDEO_IO     ;no, go to ROM
        JMP     SHORT CHECK_LOCK        ;yes,see if need to lock
NOPE:   CMP     AH,6            ;scroll up?
        JNE     TO_VIDEO_IO     ;no, ok to scroll
                                ;yes,can't until shit key hit
CHECK_LOCK:
        INC     SCROLL_COUNT    ;take care of scroll lock
        MOV     BH,MAX_LINES
        CMP     SCROLL_COUNT,BH ;have we scrolled more than MAX_LINES
        JL      TO_VIDEO_IO     ;no,its OK to scroll
                                ;yes,can't scroll till shift key hit
        MOV     BL,BH           ;set scroll count to MAX_LINES-1
        DEC     BL              ;so can print onemore line
        MOV     SCROLL_COUNT,BL
        ASSUME  DS:ROM_BIOS_DATA
        MOV     BX,ROM_BIOS_DATA
        MOV     DS,BX
LOOP:   MOV     BL,KB_FLAG      ;wait until right orleft shift key hit
        TEST    BL,10H          ;is scroll lock still on?
        JZ      TO_VIDEO_IO
        AND     BL,3            ;pick off shift key info
        JZ      LOOP            ;stay in loop until shift key pushed
        CMP     BL,1            ;RIGHT SHIFT KEY HIT?
        JE      SCROLL_LINE     ;yes, scroll one line
                                ;no,must be right shift key,reset scroll ct.
        XOR     BX,BX
        MOV     SCROLL_COUNT,BL
SCROLL_LINE:
;
TO_VIDEO_IO:
        POP     BX
        PUSHF
        CALL    ROM_VIDEO_IO
        POP     DS
        IRET
INTERCEPT_VIDEO ENDP
;
;----------------------------------------------------------------------------
;If the KB function calls for a read (AH=0),then reset scroll count
;---------------------------------------------------------------------------
INTERCEPT_KEYBOARD      PROC    FAR
        ASSUME  CS:CSEG,DS:CSEG
        STI
        PUSH    DS                ;save registers used this routine
        PUSH    BX
        MOV     BX,CS
        MOV     DS,BX
        OR      AH,AH             ;check to see if AH=0-read character
        JNZ     KB1               ;no,brancj off to KB I/O
        XOR     BX,BX             ;yes,set scroll count to 0
        MOV     SCROLL_COUNT,BL
KB1:    POP     BX
        ASSUME  DS:NOTHING
        POP     DS
        JMP     ROM_KEYBOARD_IO
INTERCEPT_KEYBOARD      ENDP
;-----------------------------------------------------------------------
;This section saves old interrupt vectors for KB and Video I/O.These vectors
;are replaced by addresses of INTERCEPT_VIDEO & INTERCEPT_KEYBPARD
;----------------------------------------------------------------------
INIT_VECTORS    PROC    NEAR
        ASSUME  CS:CSEG,DS:CSEG
        MOV     AH,3            ;set LAST_LINE to cursor line number
        XOR     BH,BH
        INT     10H
        MOV     LAST_LINE,DH
;
        ASSUME  CS:CSEG,DS:VECTORS
        MOV     AX,VECTORS
        MOV     DS,AX
;
        MOV     AX,VIDEO_INT    ;save address of ROM routines
        MOV     ROM_VIDEO_IO,AX
        MOV     AX,VIDEO_INT[2]
        MOV     ROM_VIDEO_IO[2],AX
        MOV     AX,OFFSET INTERCEPT_VIDEO       ;set video INT 10H to point
        MOV     VIDEO_INT,AX                    ;to INTERCEPT_VIDEO above
        MOV     VIDEO_INT[2],CS
;
        MOV     AX,KEYBOARD_INT         ;save address of the ROM routines
        MOV     ROM_KEYBOARD_IO,AX
        MOV     AX,KEYBOARD_INT[2]
        MOV     ROM_KEYBOARD_IO[2],AX
        MOV     AX,OFFSET INTERCEPT_KEYBOARD    ;set KB INT 16H to point to
        MOV     KEYBOARD_INT,AX                 ;INTERCEPT_KEYBOARD above
        MOV     KEYBOARD_INT[2],CS
;
        MOV     DX,OFFSET INIT_VECTORS          ;end of resident portion
        INT     27H                             ;terminate but stay resident
INIT_VECTORS    ENDP
;
CSEG    ENDS
        END     BEGIN

        
```
{% endraw %}

## SCROLLK.DOC

{% raw %}
```
SCROLLK:  This machine-language program is attached to DOS
whenever you run scrollk.com with the A> prompt showing. It
allows much better scroll control than <Ctrl-NumLock>. See
John Socha's article in Softalk for the IBM Personal Computer
for May 1983 for more information. Scrollk will be handy in 
using files under Directory 4: "Quick Looks at Distant BBSs".


```
{% endraw %}

## SP.DOC

{% raw %}
```

			SP: A PRINT SPOOLER
		    for the IBM Personal Computer
			    Version 3.81

		      Copyright Alan Jones 1983
			 3717 Wildwood Drive
			  Endwell, NY 13760
			   (607) 754-2339
			   June 27, 1984



SP is a software printer buffer to hold data intended for the printer.
It works like the buffers that can be installed in the printer but the
data is stored in RAM storage instead of in the printer.  The buffer
is unloaded to the printer at the printer's speed while DOS proceeds
at its speed.  The size of the buffer is specified as a parameter when
SP is invoked.	For example,

	    SP 14

will produce a buffer of 14KB (1KB = 1024 bytes).

The complete syntax is:

     SP [ss] [C=cc] [P=pp]

where:

	ss: size of buffer in kilobytes.  One kilobyte = 1024 bytes.
	    Maximum size is 62 KB.

	cc: number of copies desired.  Default: 1.

	pp: printer port desired (1, 2, or 3).	Default: 1.

NOTE:  You do not type the square brackets.  They merely indicate that the
contents are optional.	For example, if you want to use printer port 2 with
a buffer size of 20 KB, you would enter:

	SP 20 P=2

If you want to keep the previous buffer and only change the number of
copies to 3 copies, enter:

	SP C=3

For the "C" and "P" you can enter either upper or lower case characters.

If the size parameter is omitted, a default buffer of 16KB is used.

The program will work for all work sent to the printer whether it is from
the DOS TYPE command, a PrtSc command, a BASIC LLIST or LPRINT command, a
print command from The Personal Editor, etc.


TO STOP PRINTING

If you start a printout and decide you don't want it, press,
simultaneously, Alt-LeftShift-PrtSc to flush the buffer.  You can also
flush the buffer by turning the printer off and then back on.



TO PAUSE

If you want the printing to pause, hold down the ON LINE button until the
printer stops (which it will do at the end of a line).	Pressing the ON
LINE button again will allow printing to resume with no loss of data.


CHANGING BUFFER SIZE

You can remove SP from the machine by specifying a buffer of zero.  That
is:

      SP 0


will return DOS to its original state unless another DOS extension is
installed after SP such as FileCommand.

You can change the size of the buffer by re-invoking SP with the new
parameter.  In this case, SP determines that there is already a copy
present in the machine and just alters the size of the buffer of the
older copy.  (This feature not available for DOS 2.0.  However, you can
remove SP and then re-invoke it to get a different buffer size.)  If
the last copy of SP installed was other than printer 1, you must specify
the printer to remove it, e.g.:

     SP 0 P=2



MULTIPLE COPIES

To create multiple copies of a document, you must indicate to SP where the
beginning and end of the document is.  To indicate the beginning of a
document press Alt-LeftShift-B.  To indicate the end of a document press
Alt-LeftShift-E.  Of course, if you have indicated only one copy, that is
all you will get.  You can press the END indication when SP has gobbled up
the text.  You don't have to wait until the first copy is printed.

One nice way of using the multiple copies is after the fact.  That is, if
you just printed a document and decide you'd like another copy, from DOS
indicate the TOTAL number of copies you want (2 or more) and then invoke
the END indication.  SP will determine that one copy has already been
printed and proceed to print the rest according to the quantity specified.

You have to be a bit careful.  Once you indicate the beginning of a
document (Alt-LeftShift-B) that remains the beginning until you change it.
If you print multiple copies of something and then send something else to
the printer and again indicate the END, you will get a document from the
most recent BEGIN.  This may or may not be what you want.


MULTIPLE PRINTERS

SP can support more than one printer.  When you invoke SP it creates a
buffer for the specified printer.  If you do not specify one, it will
create a buffer for LPT1.  You can then re-invoke SP specifying another
printer and a new buffer will be created.  From then on, the data going to
the printer will enter the appropriate buffer and be printed on the
appropriate printer.  When you give keyboard commands, SP does not know
which printer they apply for so it uses them for all.  That is, if you
flush the buffer (Alt-LeftShift-PrtSc) all buffers will be flushed.  If you
indicate the end of a document, this will apply to all buffers.



CAVEATS:

When using with VisiCalc, do not specify a buffer larger than 23K with DOS
1.1 or 10K with DOS 2.0 since VisiCalc will not load (it cannot cross a 64K
boundary during loading.)

There is a problem when using SP with the Personal Editor Version 1.0 on
some occasions when quiting a file.  This has turned out to be a problem in
PE.  To patch PE:  On a scratch disk, rename a copy of PE.EXE to XX and
DEBUG XX.  Type E DS:56E7 and change 6 bytes of code to hex 90 by typing 90
and pressing the space bar 6 times.  The previous contents of those bytes
should be C7 06 56 EF 00 00.  Then use the debug command W (write) to write
the file back out.  Then Q (quit) to leave DEBUG and rename XX back to
PE.EXE.

When using it in some environments such as EasyWriter, there may be
commands that allow you to stop the printer.  However, when SP is present,
the program will be way ahead of the printer and will only stop sending
data to the buffer.  In cases like this, turn off the printer and then turn
back on again to stop printing.


OPERATING ENVIRONMENTS

SP has been tested in the following environments:

   PrtSc command		   WordStar
   DOS TYPE to printer		   EasyWriter 1.1
   BASIC LLIST			   VisiCalc
   BASIC LPRINT 		   With Communications
   BASIC PRINT# 		   The Personal Editor
   Lotus 1-2-3			   Multiplan
   PC-FILE			   PC-TALK

And with the following printers:

   IBM Printer and Printer-2	   TI-800
   C. Itoh PROWRITER		   Okidata
   Epson MX-80 or MX-80 F/T	   NEC 7730



AVAILABILITY

Available from Alan Jones under the "user supported software."
See below.

COPYING

SP can be copied onto one of your own diskettes for use on your machine.
In fact we recommend including it in your AUTOEXEC's so that it is always
invoked.

DISCLAIMER.

In no event will the Author be liable to you for any damages, including any
lost profits, lost savings or other incidental or consequential damages
arising out of the use of or inability to use these programs, even if the
Author has been advised of the possibility of such damages, or for any
claim by any other party.

PERMISSION TO COPY:

Clubs and other non-profit organizations are granted permission by the
author to freely copy these programs and documentation and share it with
their members, so long as:

1.  No price is charged for the software or documentation.  However, a
    distribution cost may be charged for the cost of the diskette, so long
    as it is not more than $10 total.

2.  Club members are informed of the user-supported concept and encouraged
    to support it with their donations.

3.  The program or documentation are not modified in any way and are
    distributed together.


THE USER-SUPPORTED CONCEPT.

			User-Supported Software
       If you are using this program and find it to be of value
		your contribution will be appreciated.
			  ($15 is suggested)

			    Alan Jones
			 3717 Wildwood Drive
			  Endwell, NY 13760

	    Regardless of whether you make a contribution,
	  you are encouraged to copy and share this program.



User-supported software is an experiment in distributing computer
programs, based on these beliefs:

1.  That the value and utility of software is best assessed by the
    user on his/her own system.

2.  That the creation of personal computer software can and should
    be supported by the computing community.

3.  That copying of programs should be encouraged, rather than
    restricted.

Anyone may request a copy of a user-supported program by sending a blank,
formatted disk to the author of the program.  An addressed, postage-paid
return mailer must accompany the disk (no exceptions, please).	A copy of
the program, with documentation on the disk, will be sent by return mail.
The program will carry a notice suggesting a contribution to the program's
author.  Making a contribution is completely voluntary on the part of each
user.

Free distribution of software and voluntary payment for its use eliminates
costs for advertising and copy protection schemes.

Users obtain quality software at reduced cost.	They can try it out before
buying, and do so at their own pace and in the comfort of their own home or
office.  The best programs will survive, based purely on their quality and
usefulness.

Please join the experiment.

If you believe in these ideals, your contribution is solicited to help make
them work.

Many of you have written requesting an invoice so that you could initiate
payment through your company accounting system.  The following invoice is
provided for those of you in this category, or for those who wish an
invoice for your tax records.  Perhaps it will serve the purpose.



		       --------------------
			      INVOICE
		       --------------------




   Purchased from:
       ALAN JONES
       3717 Wildwood Drive
       Endwell, NY 13760


  DATE:     /	  /			      Invoice No. 8810
  --------------------------------------------------------------
				       PRICE	 PRICE
  PRODUCT		     QTY       EACH	 EXTENDED
  -------------------------  ---       -----	 --------

  SP: A Print Spooler
    program and
    documentation	      1 	$15	    $15
    Version 3.82





				      SALES TAX      0

			  --------------------------------------
			  PLEASE PAY THIS AMOUNT    $15    TOTAL
  --------------------------------------------------------------



Please make check payable to :ALAN JONES


You may retain this Invoice
for your tax records.



```
{% endraw %}

## MONOCG.ASM

{% raw %}
```
	page	60,132

	title	MonoCG  - IBM Monochrome Display character generator data

codeSeg	segment	para public 'code'

	public	cgData

cgData	label	byte

 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,07Eh,081h,0A5h,081h,081h,0BDh ; 0000
 db 000h,000h,07Eh,0FFh,0DBh,0FFh,0FFh,0C3h,000h,000h,000h,036h,07Fh,07Fh,07Fh,07Fh ; 0010
 db 000h,000h,000h,008h,01Ch,03Eh,07Fh,03Eh,000h,000h,018h,03Ch,03Ch,0E7h,0E7h,0E7h ; 0020
 db 000h,000h,018h,03Ch,07Eh,0FFh,0FFh,07Eh,000h,000h,000h,000h,000h,018h,03Ch,03Ch ; 0030
 db 0FFh,0FFh,0FFh,0FFh,0FFh,0E7h,0C3h,0C3h,000h,000h,000h,000h,03Ch,066h,042h,042h ; 0040
 db 0FFh,0FFh,0FFh,0FFh,0C3h,099h,0BDh,0BDh,000h,000h,00Fh,007h,00Dh,019h,03Ch,066h ; 0050
 db 000h,000h,03Ch,066h,066h,066h,03Ch,018h,000h,000h,03Fh,033h,03Fh,030h,030h,030h ; 0060
 db 000h,000h,07Fh,063h,07Fh,063h,063h,063h,000h,000h,018h,018h,0DBh,03Ch,0E7h,03Ch ; 0070
 db 000h,000h,040h,060h,070h,07Ch,07Fh,07Ch,000h,000h,001h,003h,007h,01Fh,07Fh,01Fh ; 0080
 db 000h,000h,018h,03Ch,07Eh,018h,018h,018h,000h,000h,033h,033h,033h,033h,033h,033h ; 0090
 db 000h,000h,07Fh,0DBh,0DBh,0DBh,07Bh,01Bh,000h,03Eh,063h,030h,01Ch,036h,063h,063h ; 00A0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,018h,03Ch,07Eh,018h,018h,018h ; 00B0
 db 000h,000h,018h,03Ch,07Eh,018h,018h,018h,000h,000h,018h,018h,018h,018h,018h,018h ; 00C0
 db 000h,000h,000h,000h,00Ch,006h,07Fh,006h,000h,000h,000h,000h,018h,030h,07Fh,030h ; 00D0
 db 000h,000h,000h,000h,000h,060h,060h,060h,000h,000h,000h,000h,024h,066h,0FFh,066h ; 00E0
 db 000h,000h,000h,008h,01Ch,01Ch,03Eh,03Eh,000h,000h,000h,07Fh,07Fh,03Eh,03Eh,01Ch ; 00F0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,018h,03Ch,03Ch,03Ch,018h,018h ; 0100
 db 000h,063h,063h,063h,022h,000h,000h,000h,000h,000h,036h,036h,07Fh,036h,036h,036h ; 0110
 db 00Ch,00Ch,03Eh,063h,061h,060h,03Eh,003h,000h,000h,000h,000h,061h,063h,006h,00Ch ; 0120
 db 000h,000h,01Ch,036h,036h,01Ch,03Bh,06Eh,000h,030h,030h,030h,060h,000h,000h,000h ; 0130
 db 000h,000h,00Ch,018h,030h,030h,030h,030h,000h,000h,018h,00Ch,006h,006h,006h,006h ; 0140
 db 000h,000h,000h,000h,066h,03Ch,0FFh,03Ch,000h,000h,000h,018h,018h,018h,0FFh,018h ; 0150
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,0FFh,000h ; 0160
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,001h,003h,006h,00Ch,018h,030h ; 0170
 db 000h,000h,03Eh,063h,067h,06Fh,07Bh,073h,000h,000h,00Ch,01Ch,03Ch,00Ch,00Ch,00Ch ; 0180
 db 000h,000h,03Eh,063h,003h,006h,00Ch,018h,000h,000h,03Eh,063h,003h,003h,01Eh,003h ; 0190
 db 000h,000h,006h,00Eh,01Eh,036h,066h,07Fh,000h,000h,07Fh,060h,060h,060h,07Eh,003h ; 01A0
 db 000h,000h,01Ch,030h,060h,060h,07Eh,063h,000h,000h,07Fh,063h,003h,006h,00Ch,018h ; 01B0
 db 000h,000h,03Eh,063h,063h,063h,03Eh,063h,000h,000h,03Eh,063h,063h,063h,03Fh,003h ; 01C0
 db 000h,000h,000h,018h,018h,000h,000h,000h,000h,000h,000h,018h,018h,000h,000h,000h ; 01D0
 db 000h,000h,006h,00Ch,018h,030h,060h,030h,000h,000h,000h,000h,000h,07Eh,000h,000h ; 01E0
 db 000h,000h,060h,030h,018h,00Ch,006h,00Ch,000h,000h,03Eh,063h,063h,006h,00Ch,00Ch ; 01F0
 db 000h,000h,03Eh,063h,063h,06Fh,06Fh,06Fh,000h,000h,008h,01Ch,036h,063h,063h,07Fh ; 0200
 db 000h,000h,07Eh,033h,033h,033h,03Eh,033h,000h,000h,01Eh,033h,061h,060h,060h,060h ; 0210
 db 000h,000h,07Ch,036h,033h,033h,033h,033h,000h,000h,07Fh,033h,031h,034h,03Ch,034h ; 0220
 db 000h,000h,07Fh,033h,031h,034h,03Ch,034h,000h,000h,01Eh,033h,061h,060h,060h,06Fh ; 0230
 db 000h,000h,063h,063h,063h,063h,07Fh,063h,000h,000h,03Ch,018h,018h,018h,018h,018h ; 0240
 db 000h,000h,00Fh,006h,006h,006h,006h,006h,000h,000h,073h,033h,036h,036h,03Ch,036h ; 0250
 db 000h,000h,078h,030h,030h,030h,030h,030h,000h,000h,0C3h,0E7h,0FFh,0DBh,0C3h,0C3h ; 0260
 db 000h,000h,063h,073h,07Bh,07Fh,06Fh,067h,000h,000h,01Ch,036h,063h,063h,063h,063h ; 0270
 db 000h,000h,07Eh,033h,033h,033h,03Eh,030h,000h,000h,03Eh,063h,063h,063h,063h,06Bh ; 0280
 db 000h,000h,07Eh,033h,033h,033h,03Eh,036h,000h,000h,03Eh,063h,063h,030h,01Ch,006h ; 0290
 db 000h,000h,0FFh,0DBh,099h,018h,018h,018h,000h,000h,063h,063h,063h,063h,063h,063h ; 02A0
 db 000h,000h,0C3h,0C3h,0C3h,0C3h,0C3h,0C3h,000h,000h,0C3h,0C3h,0C3h,0C3h,0DBh,0DBh ; 02B0
 db 000h,000h,0C3h,0C3h,066h,03Ch,018h,03Ch,000h,000h,0C3h,0C3h,0C3h,066h,03Ch,018h ; 02C0
 db 000h,000h,0FFh,0C3h,086h,00Ch,018h,030h,000h,000h,03Ch,030h,030h,030h,030h,030h ; 02D0
 db 000h,000h,040h,060h,070h,038h,01Ch,00Eh,000h,000h,03Ch,00Ch,00Ch,00Ch,00Ch,00Ch ; 02E0
 db 008h,01Ch,036h,063h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 02F0
 db 018h,018h,00Ch,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,03Ch,006h,03Eh ; 0300
 db 000h,000h,070h,030h,030h,03Ch,036h,033h,000h,000h,000h,000h,000h,03Eh,063h,060h ; 0310
 db 000h,000h,00Eh,006h,006h,01Eh,036h,066h,000h,000h,000h,000h,000h,03Eh,063h,07Fh ; 0320
 db 000h,000h,01Ch,036h,032h,030h,07Ch,030h,000h,000h,000h,000h,000h,03Bh,066h,066h ; 0330
 db 000h,000h,070h,030h,030h,036h,03Bh,033h,000h,000h,00Ch,00Ch,000h,01Ch,00Ch,00Ch ; 0340
 db 000h,000h,006h,006h,000h,00Eh,006h,006h,000h,000h,070h,030h,030h,033h,036h,03Ch ; 0350
 db 000h,000h,01Ch,00Ch,00Ch,00Ch,00Ch,00Ch,000h,000h,000h,000h,000h,0E6h,0FFh,0DBh ; 0360
 db 000h,000h,000h,000h,000h,06Eh,033h,033h,000h,000h,000h,000h,000h,03Eh,063h,063h ; 0370
 db 000h,000h,000h,000h,000h,06Eh,033h,033h,000h,000h,000h,000h,000h,03Bh,066h,066h ; 0380
 db 000h,000h,000h,000h,000h,06Eh,03Bh,033h,000h,000h,000h,000h,000h,03Eh,063h,038h ; 0390
 db 000h,000h,008h,018h,018h,07Eh,018h,018h,000h,000h,000h,000h,000h,066h,066h,066h ; 03A0
 db 000h,000h,000h,000h,000h,0C3h,0C3h,0C3h,000h,000h,000h,000h,000h,0C3h,0C3h,0DBh ; 03B0
 db 000h,000h,000h,000h,000h,063h,036h,01Ch,000h,000h,000h,000h,000h,063h,063h,063h ; 03C0
 db 000h,000h,000h,000h,000h,07Fh,066h,00Ch,000h,000h,00Eh,018h,018h,018h,070h,018h ; 03D0
 db 000h,000h,018h,018h,018h,018h,000h,018h,000h,000h,070h,018h,018h,018h,00Eh,018h ; 03E0
 db 000h,000h,03Bh,06Eh,000h,000h,000h,000h,000h,000h,000h,000h,008h,01Ch,036h,063h ; 03F0
 db 000h,000h,01Eh,033h,061h,060h,060h,061h,000h,000h,066h,066h,000h,066h,066h,066h ; 0400
 db 000h,006h,00Ch,018h,000h,03Eh,063h,07Fh,000h,008h,01Ch,036h,000h,03Ch,006h,03Eh ; 0410
 db 000h,000h,066h,066h,000h,03Ch,006h,03Eh,000h,030h,018h,00Ch,000h,03Ch,006h,03Eh ; 0420
 db 000h,01Ch,036h,01Ch,000h,03Ch,006h,03Eh,000h,000h,000h,000h,03Ch,066h,060h,066h ; 0430
 db 000h,008h,01Ch,036h,000h,03Eh,063h,07Fh,000h,000h,066h,066h,000h,03Eh,063h,07Fh ; 0440
 db 000h,030h,018h,00Ch,000h,03Eh,063h,07Fh,000h,000h,066h,066h,000h,038h,018h,018h ; 0450
 db 000h,018h,03Ch,066h,000h,038h,018h,018h,000h,060h,030h,018h,000h,038h,018h,018h ; 0460
 db 000h,063h,063h,008h,01Ch,036h,063h,063h,01Ch,036h,01Ch,000h,01Ch,036h,063h,063h ; 0470
 db 00Ch,018h,030h,000h,07Fh,033h,030h,03Eh,000h,000h,000h,000h,06Eh,03Bh,01Bh,07Eh ; 0480
 db 000h,000h,01Fh,036h,066h,066h,07Fh,066h,000h,008h,01Ch,036h,000h,03Eh,063h,063h ; 0490
 db 000h,000h,063h,063h,000h,03Eh,063h,063h,000h,030h,018h,00Ch,000h,03Eh,063h,063h ; 04A0
 db 000h,018h,03Ch,066h,000h,066h,066h,066h,000h,030h,018h,00Ch,000h,066h,066h,066h ; 04B0
 db 000h,000h,063h,063h,000h,063h,063h,063h,000h,063h,063h,01Ch,036h,063h,063h,063h ; 04C0
 db 000h,063h,063h,000h,063h,063h,063h,063h,000h,018h,018h,07Eh,0C3h,0C0h,0C0h,0C3h ; 04D0
 db 000h,01Ch,036h,032h,030h,078h,030h,030h,000h,000h,0C3h,066h,03Ch,018h,0FFh,018h ; 04E0
 db 000h,0FCh,066h,066h,07Ch,062h,066h,06Fh,000h,00Eh,01Bh,018h,018h,018h,07Eh,018h ; 04F0
 db 000h,00Ch,018h,030h,000h,03Ch,006h,03Eh,000h,00Ch,018h,030h,000h,038h,018h,018h ; 0500
 db 000h,00Ch,018h,030h,000h,03Eh,063h,063h,000h,00Ch,018h,030h,000h,066h,066h,066h ; 0510
 db 000h,000h,03Bh,06Eh,000h,06Eh,033h,033h,03Bh,06Eh,000h,063h,073h,07Bh,07Fh,06Fh ; 0520
 db 000h,03Ch,06Ch,06Ch,03Eh,000h,07Eh,000h,000h,038h,06Ch,06Ch,038h,000h,07Ch,000h ; 0530
 db 000h,000h,018h,018h,000h,018h,018h,030h,000h,000h,000h,000h,000h,000h,07Fh,060h ; 0540
 db 000h,000h,000h,000h,000h,000h,07Fh,003h,000h,060h,0E0h,063h,066h,06Ch,018h,030h ; 0550
 db 000h,060h,0E0h,063h,066h,06Ch,018h,033h,000h,000h,018h,018h,000h,018h,018h,03Ch ; 0560
 db 000h,000h,000h,000h,01Bh,036h,06Ch,036h,000h,000h,000h,000h,06Ch,036h,01Bh,036h ; 0570
 db 011h,044h,011h,044h,011h,044h,011h,044h,055h,0AAh,055h,0AAh,055h,0AAh,055h,0AAh ; 0580
 db 0DDh,077h,0DDh,077h,0DDh,077h,0DDh,077h,018h,018h,018h,018h,018h,018h,018h,018h ; 0590
 db 018h,018h,018h,018h,018h,018h,018h,0F8h,018h,018h,018h,018h,018h,0F8h,018h,0F8h ; 05A0
 db 036h,036h,036h,036h,036h,036h,036h,0F6h,000h,000h,000h,000h,000h,000h,000h,0FEh ; 05B0
 db 000h,000h,000h,000h,000h,0F8h,018h,0F8h,036h,036h,036h,036h,036h,0F6h,006h,0F6h ; 05C0
 db 036h,036h,036h,036h,036h,036h,036h,036h,000h,000h,000h,000h,000h,0FEh,006h,0F6h ; 05D0
 db 036h,036h,036h,036h,036h,0F6h,006h,0FEh,036h,036h,036h,036h,036h,036h,036h,0FEh ; 05E0
 db 018h,018h,018h,018h,018h,0F8h,018h,0F8h,000h,000h,000h,000h,000h,000h,000h,0F8h ; 05F0
 db 018h,018h,018h,018h,018h,018h,018h,01Fh,018h,018h,018h,018h,018h,018h,018h,0FFh ; 0600
 db 000h,000h,000h,000h,000h,000h,000h,0FFh,018h,018h,018h,018h,018h,018h,018h,01Fh ; 0610
 db 000h,000h,000h,000h,000h,000h,000h,0FFh,018h,018h,018h,018h,018h,018h,018h,0FFh ; 0620
 db 018h,018h,018h,018h,018h,01Fh,018h,01Fh,036h,036h,036h,036h,036h,036h,036h,037h ; 0630
 db 036h,036h,036h,036h,036h,037h,030h,03Fh,000h,000h,000h,000h,000h,03Fh,030h,037h ; 0640
 db 036h,036h,036h,036h,036h,0F7h,000h,0FFh,000h,000h,000h,000h,000h,0FFh,000h,0F7h ; 0650
 db 036h,036h,036h,036h,036h,037h,030h,037h,000h,000h,000h,000h,000h,0FFh,000h,0FFh ; 0660
 db 036h,036h,036h,036h,036h,0F7h,000h,0F7h,018h,018h,018h,018h,018h,0FFh,000h,0FFh ; 0670
 db 036h,036h,036h,036h,036h,036h,036h,0FFh,000h,000h,000h,000h,000h,0FFh,000h,0FFh ; 0680
 db 000h,000h,000h,000h,000h,000h,000h,0FFh,036h,036h,036h,036h,036h,036h,036h,03Fh ; 0690
 db 018h,018h,018h,018h,018h,01Fh,018h,01Fh,000h,000h,000h,000h,000h,01Fh,018h,01Fh ; 06A0
 db 000h,000h,000h,000h,000h,000h,000h,03Fh,036h,036h,036h,036h,036h,036h,036h,0FFh ; 06B0
 db 018h,018h,018h,018h,018h,0FFh,018h,0FFh,018h,018h,018h,018h,018h,018h,018h,0F8h ; 06C0
 db 000h,000h,000h,000h,000h,000h,000h,01Fh,0FFh,0FFh,0FFh,0FFh,0FFh,0FFh,0FFh,0FFh ; 06D0
 db 000h,000h,000h,000h,000h,000h,000h,0FFh,0F0h,0F0h,0F0h,0F0h,0F0h,0F0h,0F0h,0F0h ; 06E0
 db 00Fh,00Fh,00Fh,00Fh,00Fh,00Fh,00Fh,00Fh,0FFh,0FFh,0FFh,0FFh,0FFh,0FFh,0FFh,000h ; 06F0
 db 000h,000h,000h,000h,000h,03Bh,06Eh,06Ch,000h,000h,000h,000h,03Eh,063h,07Eh,063h ; 0700
 db 000h,000h,07Fh,063h,063h,060h,060h,060h,000h,000h,000h,000h,07Fh,036h,036h,036h ; 0710
 db 000h,000h,07Fh,063h,030h,018h,00Ch,018h,000h,000h,000h,000h,000h,03Fh,06Ch,06Ch ; 0720
 db 000h,000h,000h,000h,033h,033h,033h,033h,000h,000h,000h,000h,03Bh,06Eh,00Ch,00Ch ; 0730
 db 000h,000h,07Eh,018h,03Ch,066h,066h,066h,000h,000h,01Ch,036h,063h,063h,07Fh,063h ; 0740
 db 000h,000h,01Ch,036h,063h,063h,063h,036h,000h,000h,01Eh,030h,018h,00Ch,03Eh,066h ; 0750
 db 000h,000h,000h,000h,000h,07Eh,0DBh,0DBh,000h,000h,003h,006h,07Eh,0DBh,0DBh,0F3h ; 0760
 db 000h,000h,01Ch,030h,060h,060h,07Ch,060h,000h,000h,000h,03Eh,063h,063h,063h,063h ; 0770
 db 000h,000h,000h,07Fh,000h,000h,07Fh,000h,000h,000h,018h,018h,018h,0FFh,018h,018h ; 0780
 db 000h,000h,030h,018h,00Ch,006h,00Ch,018h,000h,000h,00Ch,018h,030h,060h,030h,018h ; 0790
 db 000h,000h,00Eh,01Bh,01Bh,018h,018h,018h,018h,018h,018h,018h,018h,018h,018h,018h ; 07A0
 db 000h,000h,018h,018h,000h,000h,0FFh,000h,000h,000h,000h,000h,03Bh,06Eh,000h,03Bh ; 07B0
 db 000h,038h,06Ch,06Ch,038h,000h,000h,000h,000h,000h,000h,000h,000h,000h,018h,018h ; 07C0
 db 000h,000h,000h,000h,000h,000h,000h,018h,000h,00Fh,00Ch,00Ch,00Ch,00Ch,00Ch,0ECh ; 07D0
 db 000h,0D8h,06Ch,06Ch,06Ch,06Ch,06Ch,000h,000h,070h,0D8h,030h,060h,0C8h,0F8h,000h ; 07E0
 db 000h,000h,000h,000h,03Eh,03Eh,03Eh,03Eh,000h,000h,000h,000h,000h,000h,000h,000h ; 07F0
 db 000h,000h,000h,000h,000h,000h,000h,000h,099h,081h,07Eh,000h,000h,000h,000h,000h ; 0800
 db 0E7h,0FFh,07Eh,000h,000h,000h,000h,000h,03Eh,01Ch,008h,000h,000h,000h,000h,000h ; 0810
 db 01Ch,008h,000h,000h,000h,000h,000h,000h,018h,018h,03Ch,000h,000h,000h,000h,000h ; 0820
 db 018h,018h,03Ch,000h,000h,000h,000h,000h,018h,000h,000h,000h,000h,000h,000h,000h ; 0830
 db 0E7h,0FFh,0FFh,0FFh,0FFh,0FFh,000h,000h,066h,03Ch,000h,000h,000h,000h,000h,000h ; 0840
 db 099h,0C3h,0FFh,0FFh,0FFh,0FFh,000h,000h,066h,066h,03Ch,000h,000h,000h,000h,000h ; 0850
 db 07Eh,018h,018h,000h,000h,000h,000h,000h,070h,0F0h,0E0h,000h,000h,000h,000h,000h ; 0860
 db 067h,0E7h,0E6h,0C0h,000h,000h,000h,000h,0DBh,018h,018h,000h,000h,000h,000h,000h ; 0870
 db 070h,060h,040h,000h,000h,000h,000h,000h,007h,003h,001h,000h,000h,000h,000h,000h ; 0880
 db 07Eh,03Ch,018h,000h,000h,000h,000h,000h,000h,033h,033h,000h,000h,000h,000h,000h ; 0890
 db 01Bh,01Bh,01Bh,000h,000h,000h,000h,000h,036h,01Ch,006h,063h,03Eh,000h,000h,000h ; 08A0
 db 07Fh,07Fh,07Fh,000h,000h,000h,000h,000h,07Eh,03Ch,018h,07Eh,000h,000h,000h,000h ; 08B0
 db 018h,018h,018h,000h,000h,000h,000h,000h,07Eh,03Ch,018h,000h,000h,000h,000h,000h ; 08C0
 db 00Ch,000h,000h,000h,000h,000h,000h,000h,018h,000h,000h,000h,000h,000h,000h,000h ; 08D0
 db 07Fh,000h,000h,000h,000h,000h,000h,000h,024h,000h,000h,000h,000h,000h,000h,000h ; 08E0
 db 07Fh,07Fh,000h,000h,000h,000h,000h,000h,01Ch,008h,000h,000h,000h,000h,000h,000h ; 08F0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,018h,018h,000h,000h,000h,000h,000h ; 0900
 db 000h,000h,000h,000h,000h,000h,000h,000h,07Fh,036h,036h,000h,000h,000h,000h,000h ; 0910
 db 043h,063h,03Eh,00Ch,00Ch,000h,000h,000h,018h,033h,063h,000h,000h,000h,000h,000h ; 0920
 db 066h,066h,03Bh,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0930
 db 030h,018h,00Ch,000h,000h,000h,000h,000h,006h,00Ch,018h,000h,000h,000h,000h,000h ; 0940
 db 066h,000h,000h,000h,000h,000h,000h,000h,018h,018h,000h,000h,000h,000h,000h,000h ; 0950
 db 018h,018h,018h,030h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0960
 db 000h,018h,018h,000h,000h,000h,000h,000h,060h,040h,000h,000h,000h,000h,000h,000h ; 0970
 db 063h,063h,03Eh,000h,000h,000h,000h,000h,00Ch,00Ch,03Fh,000h,000h,000h,000h,000h ; 0980
 db 030h,063h,07Fh,000h,000h,000h,000h,000h,003h,063h,03Eh,000h,000h,000h,000h,000h ; 0990
 db 006h,006h,00Fh,000h,000h,000h,000h,000h,003h,063h,03Eh,000h,000h,000h,000h,000h ; 09A0
 db 063h,063h,03Eh,000h,000h,000h,000h,000h,018h,018h,018h,000h,000h,000h,000h,000h ; 09B0
 db 063h,063h,03Eh,000h,000h,000h,000h,000h,003h,006h,03Ch,000h,000h,000h,000h,000h ; 09C0
 db 018h,018h,000h,000h,000h,000h,000h,000h,018h,018h,030h,000h,000h,000h,000h,000h ; 09D0
 db 018h,00Ch,006h,000h,000h,000h,000h,000h,07Eh,000h,000h,000h,000h,000h,000h,000h ; 09E0
 db 018h,030h,060h,000h,000h,000h,000h,000h,000h,00Ch,00Ch,000h,000h,000h,000h,000h ; 09F0
 db 06Eh,060h,03Eh,000h,000h,000h,000h,000h,063h,063h,063h,000h,000h,000h,000h,000h ; 0A00
 db 033h,033h,07Eh,000h,000h,000h,000h,000h,061h,033h,01Eh,000h,000h,000h,000h,000h ; 0A10
 db 033h,036h,07Ch,000h,000h,000h,000h,000h,031h,033h,07Fh,000h,000h,000h,000h,000h ; 0A20
 db 030h,030h,078h,000h,000h,000h,000h,000h,063h,033h,01Dh,000h,000h,000h,000h,000h ; 0A30
 db 063h,063h,063h,000h,000h,000h,000h,000h,018h,018h,03Ch,000h,000h,000h,000h,000h ; 0A40
 db 066h,066h,03Ch,000h,000h,000h,000h,000h,036h,033h,073h,000h,000h,000h,000h,000h ; 0A50
 db 031h,033h,07Fh,000h,000h,000h,000h,000h,0C3h,0C3h,0C3h,000h,000h,000h,000h,000h ; 0A60
 db 063h,063h,063h,000h,000h,000h,000h,000h,063h,036h,01Ch,000h,000h,000h,000h,000h ; 0A70
 db 030h,030h,078h,000h,000h,000h,000h,000h,06Fh,03Eh,006h,007h,000h,000h,000h,000h ; 0A80
 db 033h,033h,073h,000h,000h,000h,000h,000h,063h,063h,03Eh,000h,000h,000h,000h,000h ; 0A90
 db 018h,018h,03Ch,000h,000h,000h,000h,000h,063h,063h,03Eh,000h,000h,000h,000h,000h ; 0AA0
 db 066h,03Ch,018h,000h,000h,000h,000h,000h,0FFh,066h,066h,000h,000h,000h,000h,000h ; 0AB0
 db 066h,0C3h,0C3h,000h,000h,000h,000h,000h,018h,018h,03Ch,000h,000h,000h,000h,000h ; 0AC0
 db 061h,0C3h,0FFh,000h,000h,000h,000h,000h,030h,030h,03Ch,000h,000h,000h,000h,000h ; 0AD0
 db 007h,003h,001h,000h,000h,000h,000h,000h,00Ch,00Ch,03Ch,000h,000h,000h,000h,000h ; 0AE0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,0FFh,000h,000h,000h ; 0AF0
 db 000h,000h,000h,000h,000h,000h,000h,000h,066h,066h,03Bh,000h,000h,000h,000h,000h ; 0B00
 db 033h,033h,06Eh,000h,000h,000h,000h,000h,060h,063h,03Eh,000h,000h,000h,000h,000h ; 0B10
 db 066h,066h,03Bh,000h,000h,000h,000h,000h,060h,063h,03Eh,000h,000h,000h,000h,000h ; 0B20
 db 030h,030h,078h,000h,000h,000h,000h,000h,066h,03Eh,006h,066h,03Ch,000h,000h,000h ; 0B30
 db 033h,033h,073h,000h,000h,000h,000h,000h,00Ch,00Ch,01Eh,000h,000h,000h,000h,000h ; 0B40
 db 006h,006h,066h,066h,03Ch,000h,000h,000h,036h,033h,073h,000h,000h,000h,000h,000h ; 0B50
 db 00Ch,00Ch,01Eh,000h,000h,000h,000h,000h,0DBh,0DBh,0DBh,000h,000h,000h,000h,000h ; 0B60
 db 033h,033h,033h,000h,000h,000h,000h,000h,063h,063h,03Eh,000h,000h,000h,000h,000h ; 0B70
 db 033h,03Eh,030h,030h,078h,000h,000h,000h,066h,03Eh,006h,006h,00Fh,000h,000h,000h ; 0B80
 db 030h,030h,078h,000h,000h,000h,000h,000h,00Eh,063h,03Eh,000h,000h,000h,000h,000h ; 0B90
 db 018h,01Bh,00Eh,000h,000h,000h,000h,000h,066h,066h,03Bh,000h,000h,000h,000h,000h ; 0BA0
 db 066h,03Ch,018h,000h,000h,000h,000h,000h,0DBh,0FFh,066h,000h,000h,000h,000h,000h ; 0BB0
 db 01Ch,036h,063h,000h,000h,000h,000h,000h,063h,03Fh,003h,006h,03Ch,000h,000h,000h ; 0BC0
 db 018h,033h,07Fh,000h,000h,000h,000h,000h,018h,018h,00Eh,000h,000h,000h,000h,000h ; 0BD0
 db 018h,018h,018h,000h,000h,000h,000h,000h,018h,018h,070h,000h,000h,000h,000h,000h ; 0BE0
 db 000h,000h,000h,000h,000h,000h,000h,000h,063h,07Fh,000h,000h,000h,000h,000h,000h ; 0BF0
 db 033h,01Eh,006h,003h,03Eh,000h,000h,000h,066h,066h,03Bh,000h,000h,000h,000h,000h ; 0C00
 db 060h,063h,03Eh,000h,000h,000h,000h,000h,066h,066h,03Bh,000h,000h,000h,000h,000h ; 0C10
 db 066h,066h,03Bh,000h,000h,000h,000h,000h,066h,066h,03Bh,000h,000h,000h,000h,000h ; 0C20
 db 066h,066h,03Bh,000h,000h,000h,000h,000h,03Ch,00Ch,006h,03Ch,000h,000h,000h,000h ; 0C30
 db 060h,063h,03Eh,000h,000h,000h,000h,000h,060h,063h,03Eh,000h,000h,000h,000h,000h ; 0C40
 db 060h,063h,03Eh,000h,000h,000h,000h,000h,018h,018h,03Ch,000h,000h,000h,000h,000h ; 0C50
 db 018h,018h,03Ch,000h,000h,000h,000h,000h,018h,018h,03Ch,000h,000h,000h,000h,000h ; 0C60
 db 07Fh,063h,063h,000h,000h,000h,000h,000h,07Fh,063h,063h,000h,000h,000h,000h,000h ; 0C70
 db 030h,033h,07Fh,000h,000h,000h,000h,000h,0D8h,0DCh,077h,000h,000h,000h,000h,000h ; 0C80
 db 066h,066h,067h,000h,000h,000h,000h,000h,063h,063h,03Eh,000h,000h,000h,000h,000h ; 0C90
 db 063h,063h,03Eh,000h,000h,000h,000h,000h,063h,063h,03Eh,000h,000h,000h,000h,000h ; 0CA0
 db 066h,066h,03Bh,000h,000h,000h,000h,000h,066h,066h,03Bh,000h,000h,000h,000h,000h ; 0CB0
 db 063h,03Fh,003h,006h,03Ch,000h,000h,000h,063h,036h,01Ch,000h,000h,000h,000h,000h ; 0CC0
 db 063h,063h,03Eh,000h,000h,000h,000h,000h,07Eh,018h,018h,000h,000h,000h,000h,000h ; 0CD0
 db 030h,073h,07Eh,000h,000h,000h,000h,000h,0FFh,018h,018h,000h,000h,000h,000h,000h ; 0CE0
 db 066h,066h,0F3h,000h,000h,000h,000h,000h,018h,018h,018h,0D8h,070h,000h,000h,000h ; 0CF0
 db 066h,066h,03Bh,000h,000h,000h,000h,000h,018h,018h,03Ch,000h,000h,000h,000h,000h ; 0D00
 db 063h,063h,03Eh,000h,000h,000h,000h,000h,066h,066h,03Bh,000h,000h,000h,000h,000h ; 0D10
 db 033h,033h,033h,000h,000h,000h,000h,000h,067h,063h,063h,000h,000h,000h,000h,000h ; 0D20
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0D30
 db 063h,063h,03Eh,000h,000h,000h,000h,000h,060h,060h,000h,000h,000h,000h,000h,000h ; 0D40
 db 003h,003h,000h,000h,000h,000h,000h,000h,06Eh,0C3h,006h,00Ch,01Fh,000h,000h,000h ; 0D50
 db 067h,0CFh,01Fh,003h,003h,000h,000h,000h,03Ch,03Ch,018h,000h,000h,000h,000h,000h ; 0D60
 db 01Bh,000h,000h,000h,000h,000h,000h,000h,06Ch,000h,000h,000h,000h,000h,000h,000h ; 0D70
 db 011h,044h,011h,044h,011h,044h,000h,000h,055h,0AAh,055h,0AAh,055h,0AAh,000h,000h ; 0D80
 db 0DDh,077h,0DDh,077h,0DDh,077h,000h,000h,018h,018h,018h,018h,018h,018h,000h,000h ; 0D90
 db 018h,018h,018h,018h,018h,018h,000h,000h,018h,018h,018h,018h,018h,018h,000h,000h ; 0DA0
 db 036h,036h,036h,036h,036h,036h,000h,000h,036h,036h,036h,036h,036h,036h,000h,000h ; 0DB0
 db 018h,018h,018h,018h,018h,018h,000h,000h,036h,036h,036h,036h,036h,036h,000h,000h ; 0DC0
 db 036h,036h,036h,036h,036h,036h,000h,000h,036h,036h,036h,036h,036h,036h,000h,000h ; 0DD0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0DE0
 db 000h,000h,000h,000h,000h,000h,000h,000h,018h,018h,018h,018h,018h,018h,000h,000h ; 0DF0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0E00
 db 018h,018h,018h,018h,018h,018h,000h,000h,018h,018h,018h,018h,018h,018h,000h,000h ; 0E10
 db 000h,000h,000h,000h,000h,000h,000h,000h,018h,018h,018h,018h,018h,018h,000h,000h ; 0E20
 db 018h,018h,018h,018h,018h,018h,000h,000h,036h,036h,036h,036h,036h,036h,000h,000h ; 0E30
 db 000h,000h,000h,000h,000h,000h,000h,000h,036h,036h,036h,036h,036h,036h,000h,000h ; 0E40
 db 000h,000h,000h,000h,000h,000h,000h,000h,036h,036h,036h,036h,036h,036h,000h,000h ; 0E50
 db 036h,036h,036h,036h,036h,036h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0E60
 db 036h,036h,036h,036h,036h,036h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0E70
 db 000h,000h,000h,000h,000h,000h,000h,000h,018h,018h,018h,018h,018h,018h,000h,000h ; 0E80
 db 036h,036h,036h,036h,036h,036h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0E90
 db 000h,000h,000h,000h,000h,000h,000h,000h,018h,018h,018h,018h,018h,018h,000h,000h ; 0EA0
 db 036h,036h,036h,036h,036h,036h,000h,000h,036h,036h,036h,036h,036h,036h,000h,000h ; 0EB0
 db 018h,018h,018h,018h,018h,018h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0EC0
 db 018h,018h,018h,018h,018h,018h,000h,000h,0FFh,0FFh,0FFh,0FFh,0FFh,0FFh,000h,000h ; 0ED0
 db 0FFh,0FFh,0FFh,0FFh,0FFh,0FFh,000h,000h,0F0h,0F0h,0F0h,0F0h,0F0h,0F0h,000h,000h ; 0EE0
 db 00Fh,00Fh,00Fh,00Fh,00Fh,00Fh,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0EF0
 db 06Ch,06Eh,03Bh,000h,000h,000h,000h,000h,063h,07Eh,060h,060h,020h,000h,000h,000h ; 0F00
 db 060h,060h,060h,000h,000h,000h,000h,000h,036h,036h,036h,000h,000h,000h,000h,000h ; 0F10
 db 030h,063h,07Fh,000h,000h,000h,000h,000h,06Ch,06Ch,038h,000h,000h,000h,000h,000h ; 0F20
 db 03Eh,030h,030h,060h,000h,000h,000h,000h,00Ch,00Ch,00Ch,000h,000h,000h,000h,000h ; 0F30
 db 03Ch,018h,07Eh,000h,000h,000h,000h,000h,063h,036h,01Ch,000h,000h,000h,000h,000h ; 0F40
 db 036h,036h,077h,000h,000h,000h,000h,000h,066h,066h,03Ch,000h,000h,000h,000h,000h ; 0F50
 db 07Eh,000h,000h,000h,000h,000h,000h,000h,07Eh,060h,0C0h,000h,000h,000h,000h,000h ; 0F60
 db 060h,030h,01Ch,000h,000h,000h,000h,000h,063h,063h,063h,000h,000h,000h,000h,000h ; 0F70
 db 000h,07Fh,000h,000h,000h,000h,000h,000h,018h,000h,0FFh,000h,000h,000h,000h,000h ; 0F80
 db 030h,000h,07Eh,000h,000h,000h,000h,000h,00Ch,000h,07Eh,000h,000h,000h,000h,000h ; 0F90
 db 018h,018h,018h,018h,018h,018h,000h,000h,0D8h,0D8h,070h,000h,000h,000h,000h,000h ; 0FA0
 db 000h,018h,018h,000h,000h,000h,000h,000h,06Eh,000h,000h,000h,000h,000h,000h,000h ; 0FB0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0FC0
 db 000h,000h,000h,000h,000h,000h,000h,000h,06Ch,03Ch,01Ch,000h,000h,000h,000h,000h ; 0FD0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0FE0
 db 03Eh,03Eh,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0FF0

codeSeg	endS

	end
```
{% endraw %}

## MONOCG.ASM

{% raw %}
```
	page	60,132

	title	MonoCG  - IBM Monochrome Display character generator data

codeSeg	segment	para public 'code'

	public	cgData

cgData	label	byte

 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,07Eh,081h,0A5h,081h,081h,0BDh ; 0000
 db 000h,000h,07Eh,0FFh,0DBh,0FFh,0FFh,0C3h,000h,000h,000h,036h,07Fh,07Fh,07Fh,07Fh ; 0010
 db 000h,000h,000h,008h,01Ch,03Eh,07Fh,03Eh,000h,000h,018h,03Ch,03Ch,0E7h,0E7h,0E7h ; 0020
 db 000h,000h,018h,03Ch,07Eh,0FFh,0FFh,07Eh,000h,000h,000h,000h,000h,018h,03Ch,03Ch ; 0030
 db 0FFh,0FFh,0FFh,0FFh,0FFh,0E7h,0C3h,0C3h,000h,000h,000h,000h,03Ch,066h,042h,042h ; 0040
 db 0FFh,0FFh,0FFh,0FFh,0C3h,099h,0BDh,0BDh,000h,000h,00Fh,007h,00Dh,019h,03Ch,066h ; 0050
 db 000h,000h,03Ch,066h,066h,066h,03Ch,018h,000h,000h,03Fh,033h,03Fh,030h,030h,030h ; 0060
 db 000h,000h,07Fh,063h,07Fh,063h,063h,063h,000h,000h,018h,018h,0DBh,03Ch,0E7h,03Ch ; 0070
 db 000h,000h,040h,060h,070h,07Ch,07Fh,07Ch,000h,000h,001h,003h,007h,01Fh,07Fh,01Fh ; 0080
 db 000h,000h,018h,03Ch,07Eh,018h,018h,018h,000h,000h,033h,033h,033h,033h,033h,033h ; 0090
 db 000h,000h,07Fh,0DBh,0DBh,0DBh,07Bh,01Bh,000h,03Eh,063h,030h,01Ch,036h,063h,063h ; 00A0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,018h,03Ch,07Eh,018h,018h,018h ; 00B0
 db 000h,000h,018h,03Ch,07Eh,018h,018h,018h,000h,000h,018h,018h,018h,018h,018h,018h ; 00C0
 db 000h,000h,000h,000h,00Ch,006h,07Fh,006h,000h,000h,000h,000h,018h,030h,07Fh,030h ; 00D0
 db 000h,000h,000h,000h,000h,060h,060h,060h,000h,000h,000h,000h,024h,066h,0FFh,066h ; 00E0
 db 000h,000h,000h,008h,01Ch,01Ch,03Eh,03Eh,000h,000h,000h,07Fh,07Fh,03Eh,03Eh,01Ch ; 00F0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,018h,03Ch,03Ch,03Ch,018h,018h ; 0100
 db 000h,063h,063h,063h,022h,000h,000h,000h,000h,000h,036h,036h,07Fh,036h,036h,036h ; 0110
 db 00Ch,00Ch,03Eh,063h,061h,060h,03Eh,003h,000h,000h,000h,000h,061h,063h,006h,00Ch ; 0120
 db 000h,000h,01Ch,036h,036h,01Ch,03Bh,06Eh,000h,030h,030h,030h,060h,000h,000h,000h ; 0130
 db 000h,000h,00Ch,018h,030h,030h,030h,030h,000h,000h,018h,00Ch,006h,006h,006h,006h ; 0140
 db 000h,000h,000h,000h,066h,03Ch,0FFh,03Ch,000h,000h,000h,018h,018h,018h,0FFh,018h ; 0150
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,0FFh,000h ; 0160
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,001h,003h,006h,00Ch,018h,030h ; 0170
 db 000h,000h,03Eh,063h,067h,06Fh,07Bh,073h,000h,000h,00Ch,01Ch,03Ch,00Ch,00Ch,00Ch ; 0180
 db 000h,000h,03Eh,063h,003h,006h,00Ch,018h,000h,000h,03Eh,063h,003h,003h,01Eh,003h ; 0190
 db 000h,000h,006h,00Eh,01Eh,036h,066h,07Fh,000h,000h,07Fh,060h,060h,060h,07Eh,003h ; 01A0
 db 000h,000h,01Ch,030h,060h,060h,07Eh,063h,000h,000h,07Fh,063h,003h,006h,00Ch,018h ; 01B0
 db 000h,000h,03Eh,063h,063h,063h,03Eh,063h,000h,000h,03Eh,063h,063h,063h,03Fh,003h ; 01C0
 db 000h,000h,000h,018h,018h,000h,000h,000h,000h,000h,000h,018h,018h,000h,000h,000h ; 01D0
 db 000h,000h,006h,00Ch,018h,030h,060h,030h,000h,000h,000h,000h,000h,07Eh,000h,000h ; 01E0
 db 000h,000h,060h,030h,018h,00Ch,006h,00Ch,000h,000h,03Eh,063h,063h,006h,00Ch,00Ch ; 01F0
 db 000h,000h,03Eh,063h,063h,06Fh,06Fh,06Fh,000h,000h,008h,01Ch,036h,063h,063h,07Fh ; 0200
 db 000h,000h,07Eh,033h,033h,033h,03Eh,033h,000h,000h,01Eh,033h,061h,060h,060h,060h ; 0210
 db 000h,000h,07Ch,036h,033h,033h,033h,033h,000h,000h,07Fh,033h,031h,034h,03Ch,034h ; 0220
 db 000h,000h,07Fh,033h,031h,034h,03Ch,034h,000h,000h,01Eh,033h,061h,060h,060h,06Fh ; 0230
 db 000h,000h,063h,063h,063h,063h,07Fh,063h,000h,000h,03Ch,018h,018h,018h,018h,018h ; 0240
 db 000h,000h,00Fh,006h,006h,006h,006h,006h,000h,000h,073h,033h,036h,036h,03Ch,036h ; 0250
 db 000h,000h,078h,030h,030h,030h,030h,030h,000h,000h,0C3h,0E7h,0FFh,0DBh,0C3h,0C3h ; 0260
 db 000h,000h,063h,073h,07Bh,07Fh,06Fh,067h,000h,000h,01Ch,036h,063h,063h,063h,063h ; 0270
 db 000h,000h,07Eh,033h,033h,033h,03Eh,030h,000h,000h,03Eh,063h,063h,063h,063h,06Bh ; 0280
 db 000h,000h,07Eh,033h,033h,033h,03Eh,036h,000h,000h,03Eh,063h,063h,030h,01Ch,006h ; 0290
 db 000h,000h,0FFh,0DBh,099h,018h,018h,018h,000h,000h,063h,063h,063h,063h,063h,063h ; 02A0
 db 000h,000h,0C3h,0C3h,0C3h,0C3h,0C3h,0C3h,000h,000h,0C3h,0C3h,0C3h,0C3h,0DBh,0DBh ; 02B0
 db 000h,000h,0C3h,0C3h,066h,03Ch,018h,03Ch,000h,000h,0C3h,0C3h,0C3h,066h,03Ch,018h ; 02C0
 db 000h,000h,0FFh,0C3h,086h,00Ch,018h,030h,000h,000h,03Ch,030h,030h,030h,030h,030h ; 02D0
 db 000h,000h,040h,060h,070h,038h,01Ch,00Eh,000h,000h,03Ch,00Ch,00Ch,00Ch,00Ch,00Ch ; 02E0
 db 008h,01Ch,036h,063h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 02F0
 db 018h,018h,00Ch,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,03Ch,006h,03Eh ; 0300
 db 000h,000h,070h,030h,030h,03Ch,036h,033h,000h,000h,000h,000h,000h,03Eh,063h,060h ; 0310
 db 000h,000h,00Eh,006h,006h,01Eh,036h,066h,000h,000h,000h,000h,000h,03Eh,063h,07Fh ; 0320
 db 000h,000h,01Ch,036h,032h,030h,07Ch,030h,000h,000h,000h,000h,000h,03Bh,066h,066h ; 0330
 db 000h,000h,070h,030h,030h,036h,03Bh,033h,000h,000h,00Ch,00Ch,000h,01Ch,00Ch,00Ch ; 0340
 db 000h,000h,006h,006h,000h,00Eh,006h,006h,000h,000h,070h,030h,030h,033h,036h,03Ch ; 0350
 db 000h,000h,01Ch,00Ch,00Ch,00Ch,00Ch,00Ch,000h,000h,000h,000h,000h,0E6h,0FFh,0DBh ; 0360
 db 000h,000h,000h,000h,000h,06Eh,033h,033h,000h,000h,000h,000h,000h,03Eh,063h,063h ; 0370
 db 000h,000h,000h,000h,000h,06Eh,033h,033h,000h,000h,000h,000h,000h,03Bh,066h,066h ; 0380
 db 000h,000h,000h,000h,000h,06Eh,03Bh,033h,000h,000h,000h,000h,000h,03Eh,063h,038h ; 0390
 db 000h,000h,008h,018h,018h,07Eh,018h,018h,000h,000h,000h,000h,000h,066h,066h,066h ; 03A0
 db 000h,000h,000h,000h,000h,0C3h,0C3h,0C3h,000h,000h,000h,000h,000h,0C3h,0C3h,0DBh ; 03B0
 db 000h,000h,000h,000h,000h,063h,036h,01Ch,000h,000h,000h,000h,000h,063h,063h,063h ; 03C0
 db 000h,000h,000h,000h,000h,07Fh,066h,00Ch,000h,000h,00Eh,018h,018h,018h,070h,018h ; 03D0
 db 000h,000h,018h,018h,018h,018h,000h,018h,000h,000h,070h,018h,018h,018h,00Eh,018h ; 03E0
 db 000h,000h,03Bh,06Eh,000h,000h,000h,000h,000h,000h,000h,000h,008h,01Ch,036h,063h ; 03F0
 db 000h,000h,01Eh,033h,061h,060h,060h,061h,000h,000h,066h,066h,000h,066h,066h,066h ; 0400
 db 000h,006h,00Ch,018h,000h,03Eh,063h,07Fh,000h,008h,01Ch,036h,000h,03Ch,006h,03Eh ; 0410
 db 000h,000h,066h,066h,000h,03Ch,006h,03Eh,000h,030h,018h,00Ch,000h,03Ch,006h,03Eh ; 0420
 db 000h,01Ch,036h,01Ch,000h,03Ch,006h,03Eh,000h,000h,000h,000h,03Ch,066h,060h,066h ; 0430
 db 000h,008h,01Ch,036h,000h,03Eh,063h,07Fh,000h,000h,066h,066h,000h,03Eh,063h,07Fh ; 0440
 db 000h,030h,018h,00Ch,000h,03Eh,063h,07Fh,000h,000h,066h,066h,000h,038h,018h,018h ; 0450
 db 000h,018h,03Ch,066h,000h,038h,018h,018h,000h,060h,030h,018h,000h,038h,018h,018h ; 0460
 db 000h,063h,063h,008h,01Ch,036h,063h,063h,01Ch,036h,01Ch,000h,01Ch,036h,063h,063h ; 0470
 db 00Ch,018h,030h,000h,07Fh,033h,030h,03Eh,000h,000h,000h,000h,06Eh,03Bh,01Bh,07Eh ; 0480
 db 000h,000h,01Fh,036h,066h,066h,07Fh,066h,000h,008h,01Ch,036h,000h,03Eh,063h,063h ; 0490
 db 000h,000h,063h,063h,000h,03Eh,063h,063h,000h,030h,018h,00Ch,000h,03Eh,063h,063h ; 04A0
 db 000h,018h,03Ch,066h,000h,066h,066h,066h,000h,030h,018h,00Ch,000h,066h,066h,066h ; 04B0
 db 000h,000h,063h,063h,000h,063h,063h,063h,000h,063h,063h,01Ch,036h,063h,063h,063h ; 04C0
 db 000h,063h,063h,000h,063h,063h,063h,063h,000h,018h,018h,07Eh,0C3h,0C0h,0C0h,0C3h ; 04D0
 db 000h,01Ch,036h,032h,030h,078h,030h,030h,000h,000h,0C3h,066h,03Ch,018h,0FFh,018h ; 04E0
 db 000h,0FCh,066h,066h,07Ch,062h,066h,06Fh,000h,00Eh,01Bh,018h,018h,018h,07Eh,018h ; 04F0
 db 000h,00Ch,018h,030h,000h,03Ch,006h,03Eh,000h,00Ch,018h,030h,000h,038h,018h,018h ; 0500
 db 000h,00Ch,018h,030h,000h,03Eh,063h,063h,000h,00Ch,018h,030h,000h,066h,066h,066h ; 0510
 db 000h,000h,03Bh,06Eh,000h,06Eh,033h,033h,03Bh,06Eh,000h,063h,073h,07Bh,07Fh,06Fh ; 0520
 db 000h,03Ch,06Ch,06Ch,03Eh,000h,07Eh,000h,000h,038h,06Ch,06Ch,038h,000h,07Ch,000h ; 0530
 db 000h,000h,018h,018h,000h,018h,018h,030h,000h,000h,000h,000h,000h,000h,07Fh,060h ; 0540
 db 000h,000h,000h,000h,000h,000h,07Fh,003h,000h,060h,0E0h,063h,066h,06Ch,018h,030h ; 0550
 db 000h,060h,0E0h,063h,066h,06Ch,018h,033h,000h,000h,018h,018h,000h,018h,018h,03Ch ; 0560
 db 000h,000h,000h,000h,01Bh,036h,06Ch,036h,000h,000h,000h,000h,06Ch,036h,01Bh,036h ; 0570
 db 011h,044h,011h,044h,011h,044h,011h,044h,055h,0AAh,055h,0AAh,055h,0AAh,055h,0AAh ; 0580
 db 0DDh,077h,0DDh,077h,0DDh,077h,0DDh,077h,018h,018h,018h,018h,018h,018h,018h,018h ; 0590
 db 018h,018h,018h,018h,018h,018h,018h,0F8h,018h,018h,018h,018h,018h,0F8h,018h,0F8h ; 05A0
 db 036h,036h,036h,036h,036h,036h,036h,0F6h,000h,000h,000h,000h,000h,000h,000h,0FEh ; 05B0
 db 000h,000h,000h,000h,000h,0F8h,018h,0F8h,036h,036h,036h,036h,036h,0F6h,006h,0F6h ; 05C0
 db 036h,036h,036h,036h,036h,036h,036h,036h,000h,000h,000h,000h,000h,0FEh,006h,0F6h ; 05D0
 db 036h,036h,036h,036h,036h,0F6h,006h,0FEh,036h,036h,036h,036h,036h,036h,036h,0FEh ; 05E0
 db 018h,018h,018h,018h,018h,0F8h,018h,0F8h,000h,000h,000h,000h,000h,000h,000h,0F8h ; 05F0
 db 018h,018h,018h,018h,018h,018h,018h,01Fh,018h,018h,018h,018h,018h,018h,018h,0FFh ; 0600
 db 000h,000h,000h,000h,000h,000h,000h,0FFh,018h,018h,018h,018h,018h,018h,018h,01Fh ; 0610
 db 000h,000h,000h,000h,000h,000h,000h,0FFh,018h,018h,018h,018h,018h,018h,018h,0FFh ; 0620
 db 018h,018h,018h,018h,018h,01Fh,018h,01Fh,036h,036h,036h,036h,036h,036h,036h,037h ; 0630
 db 036h,036h,036h,036h,036h,037h,030h,03Fh,000h,000h,000h,000h,000h,03Fh,030h,037h ; 0640
 db 036h,036h,036h,036h,036h,0F7h,000h,0FFh,000h,000h,000h,000h,000h,0FFh,000h,0F7h ; 0650
 db 036h,036h,036h,036h,036h,037h,030h,037h,000h,000h,000h,000h,000h,0FFh,000h,0FFh ; 0660
 db 036h,036h,036h,036h,036h,0F7h,000h,0F7h,018h,018h,018h,018h,018h,0FFh,000h,0FFh ; 0670
 db 036h,036h,036h,036h,036h,036h,036h,0FFh,000h,000h,000h,000h,000h,0FFh,000h,0FFh ; 0680
 db 000h,000h,000h,000h,000h,000h,000h,0FFh,036h,036h,036h,036h,036h,036h,036h,03Fh ; 0690
 db 018h,018h,018h,018h,018h,01Fh,018h,01Fh,000h,000h,000h,000h,000h,01Fh,018h,01Fh ; 06A0
 db 000h,000h,000h,000h,000h,000h,000h,03Fh,036h,036h,036h,036h,036h,036h,036h,0FFh ; 06B0
 db 018h,018h,018h,018h,018h,0FFh,018h,0FFh,018h,018h,018h,018h,018h,018h,018h,0F8h ; 06C0
 db 000h,000h,000h,000h,000h,000h,000h,01Fh,0FFh,0FFh,0FFh,0FFh,0FFh,0FFh,0FFh,0FFh ; 06D0
 db 000h,000h,000h,000h,000h,000h,000h,0FFh,0F0h,0F0h,0F0h,0F0h,0F0h,0F0h,0F0h,0F0h ; 06E0
 db 00Fh,00Fh,00Fh,00Fh,00Fh,00Fh,00Fh,00Fh,0FFh,0FFh,0FFh,0FFh,0FFh,0FFh,0FFh,000h ; 06F0
 db 000h,000h,000h,000h,000h,03Bh,06Eh,06Ch,000h,000h,000h,000h,03Eh,063h,07Eh,063h ; 0700
 db 000h,000h,07Fh,063h,063h,060h,060h,060h,000h,000h,000h,000h,07Fh,036h,036h,036h ; 0710
 db 000h,000h,07Fh,063h,030h,018h,00Ch,018h,000h,000h,000h,000h,000h,03Fh,06Ch,06Ch ; 0720
 db 000h,000h,000h,000h,033h,033h,033h,033h,000h,000h,000h,000h,03Bh,06Eh,00Ch,00Ch ; 0730
 db 000h,000h,07Eh,018h,03Ch,066h,066h,066h,000h,000h,01Ch,036h,063h,063h,07Fh,063h ; 0740
 db 000h,000h,01Ch,036h,063h,063h,063h,036h,000h,000h,01Eh,030h,018h,00Ch,03Eh,066h ; 0750
 db 000h,000h,000h,000h,000h,07Eh,0DBh,0DBh,000h,000h,003h,006h,07Eh,0DBh,0DBh,0F3h ; 0760
 db 000h,000h,01Ch,030h,060h,060h,07Ch,060h,000h,000h,000h,03Eh,063h,063h,063h,063h ; 0770
 db 000h,000h,000h,07Fh,000h,000h,07Fh,000h,000h,000h,018h,018h,018h,0FFh,018h,018h ; 0780
 db 000h,000h,030h,018h,00Ch,006h,00Ch,018h,000h,000h,00Ch,018h,030h,060h,030h,018h ; 0790
 db 000h,000h,00Eh,01Bh,01Bh,018h,018h,018h,018h,018h,018h,018h,018h,018h,018h,018h ; 07A0
 db 000h,000h,018h,018h,000h,000h,0FFh,000h,000h,000h,000h,000h,03Bh,06Eh,000h,03Bh ; 07B0
 db 000h,038h,06Ch,06Ch,038h,000h,000h,000h,000h,000h,000h,000h,000h,000h,018h,018h ; 07C0
 db 000h,000h,000h,000h,000h,000h,000h,018h,000h,00Fh,00Ch,00Ch,00Ch,00Ch,00Ch,0ECh ; 07D0
 db 000h,0D8h,06Ch,06Ch,06Ch,06Ch,06Ch,000h,000h,070h,0D8h,030h,060h,0C8h,0F8h,000h ; 07E0
 db 000h,000h,000h,000h,03Eh,03Eh,03Eh,03Eh,000h,000h,000h,000h,000h,000h,000h,000h ; 07F0
 db 000h,000h,000h,000h,000h,000h,000h,000h,099h,081h,07Eh,000h,000h,000h,000h,000h ; 0800
 db 0E7h,0FFh,07Eh,000h,000h,000h,000h,000h,03Eh,01Ch,008h,000h,000h,000h,000h,000h ; 0810
 db 01Ch,008h,000h,000h,000h,000h,000h,000h,018h,018h,03Ch,000h,000h,000h,000h,000h ; 0820
 db 018h,018h,03Ch,000h,000h,000h,000h,000h,018h,000h,000h,000h,000h,000h,000h,000h ; 0830
 db 0E7h,0FFh,0FFh,0FFh,0FFh,0FFh,000h,000h,066h,03Ch,000h,000h,000h,000h,000h,000h ; 0840
 db 099h,0C3h,0FFh,0FFh,0FFh,0FFh,000h,000h,066h,066h,03Ch,000h,000h,000h,000h,000h ; 0850
 db 07Eh,018h,018h,000h,000h,000h,000h,000h,070h,0F0h,0E0h,000h,000h,000h,000h,000h ; 0860
 db 067h,0E7h,0E6h,0C0h,000h,000h,000h,000h,0DBh,018h,018h,000h,000h,000h,000h,000h ; 0870
 db 070h,060h,040h,000h,000h,000h,000h,000h,007h,003h,001h,000h,000h,000h,000h,000h ; 0880
 db 07Eh,03Ch,018h,000h,000h,000h,000h,000h,000h,033h,033h,000h,000h,000h,000h,000h ; 0890
 db 01Bh,01Bh,01Bh,000h,000h,000h,000h,000h,036h,01Ch,006h,063h,03Eh,000h,000h,000h ; 08A0
 db 07Fh,07Fh,07Fh,000h,000h,000h,000h,000h,07Eh,03Ch,018h,07Eh,000h,000h,000h,000h ; 08B0
 db 018h,018h,018h,000h,000h,000h,000h,000h,07Eh,03Ch,018h,000h,000h,000h,000h,000h ; 08C0
 db 00Ch,000h,000h,000h,000h,000h,000h,000h,018h,000h,000h,000h,000h,000h,000h,000h ; 08D0
 db 07Fh,000h,000h,000h,000h,000h,000h,000h,024h,000h,000h,000h,000h,000h,000h,000h ; 08E0
 db 07Fh,07Fh,000h,000h,000h,000h,000h,000h,01Ch,008h,000h,000h,000h,000h,000h,000h ; 08F0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,018h,018h,000h,000h,000h,000h,000h ; 0900
 db 000h,000h,000h,000h,000h,000h,000h,000h,07Fh,036h,036h,000h,000h,000h,000h,000h ; 0910
 db 043h,063h,03Eh,00Ch,00Ch,000h,000h,000h,018h,033h,063h,000h,000h,000h,000h,000h ; 0920
 db 066h,066h,03Bh,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0930
 db 030h,018h,00Ch,000h,000h,000h,000h,000h,006h,00Ch,018h,000h,000h,000h,000h,000h ; 0940
 db 066h,000h,000h,000h,000h,000h,000h,000h,018h,018h,000h,000h,000h,000h,000h,000h ; 0950
 db 018h,018h,018h,030h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0960
 db 000h,018h,018h,000h,000h,000h,000h,000h,060h,040h,000h,000h,000h,000h,000h,000h ; 0970
 db 063h,063h,03Eh,000h,000h,000h,000h,000h,00Ch,00Ch,03Fh,000h,000h,000h,000h,000h ; 0980
 db 030h,063h,07Fh,000h,000h,000h,000h,000h,003h,063h,03Eh,000h,000h,000h,000h,000h ; 0990
 db 006h,006h,00Fh,000h,000h,000h,000h,000h,003h,063h,03Eh,000h,000h,000h,000h,000h ; 09A0
 db 063h,063h,03Eh,000h,000h,000h,000h,000h,018h,018h,018h,000h,000h,000h,000h,000h ; 09B0
 db 063h,063h,03Eh,000h,000h,000h,000h,000h,003h,006h,03Ch,000h,000h,000h,000h,000h ; 09C0
 db 018h,018h,000h,000h,000h,000h,000h,000h,018h,018h,030h,000h,000h,000h,000h,000h ; 09D0
 db 018h,00Ch,006h,000h,000h,000h,000h,000h,07Eh,000h,000h,000h,000h,000h,000h,000h ; 09E0
 db 018h,030h,060h,000h,000h,000h,000h,000h,000h,00Ch,00Ch,000h,000h,000h,000h,000h ; 09F0
 db 06Eh,060h,03Eh,000h,000h,000h,000h,000h,063h,063h,063h,000h,000h,000h,000h,000h ; 0A00
 db 033h,033h,07Eh,000h,000h,000h,000h,000h,061h,033h,01Eh,000h,000h,000h,000h,000h ; 0A10
 db 033h,036h,07Ch,000h,000h,000h,000h,000h,031h,033h,07Fh,000h,000h,000h,000h,000h ; 0A20
 db 030h,030h,078h,000h,000h,000h,000h,000h,063h,033h,01Dh,000h,000h,000h,000h,000h ; 0A30
 db 063h,063h,063h,000h,000h,000h,000h,000h,018h,018h,03Ch,000h,000h,000h,000h,000h ; 0A40
 db 066h,066h,03Ch,000h,000h,000h,000h,000h,036h,033h,073h,000h,000h,000h,000h,000h ; 0A50
 db 031h,033h,07Fh,000h,000h,000h,000h,000h,0C3h,0C3h,0C3h,000h,000h,000h,000h,000h ; 0A60
 db 063h,063h,063h,000h,000h,000h,000h,000h,063h,036h,01Ch,000h,000h,000h,000h,000h ; 0A70
 db 030h,030h,078h,000h,000h,000h,000h,000h,06Fh,03Eh,006h,007h,000h,000h,000h,000h ; 0A80
 db 033h,033h,073h,000h,000h,000h,000h,000h,063h,063h,03Eh,000h,000h,000h,000h,000h ; 0A90
 db 018h,018h,03Ch,000h,000h,000h,000h,000h,063h,063h,03Eh,000h,000h,000h,000h,000h ; 0AA0
 db 066h,03Ch,018h,000h,000h,000h,000h,000h,0FFh,066h,066h,000h,000h,000h,000h,000h ; 0AB0
 db 066h,0C3h,0C3h,000h,000h,000h,000h,000h,018h,018h,03Ch,000h,000h,000h,000h,000h ; 0AC0
 db 061h,0C3h,0FFh,000h,000h,000h,000h,000h,030h,030h,03Ch,000h,000h,000h,000h,000h ; 0AD0
 db 007h,003h,001h,000h,000h,000h,000h,000h,00Ch,00Ch,03Ch,000h,000h,000h,000h,000h ; 0AE0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,0FFh,000h,000h,000h ; 0AF0
 db 000h,000h,000h,000h,000h,000h,000h,000h,066h,066h,03Bh,000h,000h,000h,000h,000h ; 0B00
 db 033h,033h,06Eh,000h,000h,000h,000h,000h,060h,063h,03Eh,000h,000h,000h,000h,000h ; 0B10
 db 066h,066h,03Bh,000h,000h,000h,000h,000h,060h,063h,03Eh,000h,000h,000h,000h,000h ; 0B20
 db 030h,030h,078h,000h,000h,000h,000h,000h,066h,03Eh,006h,066h,03Ch,000h,000h,000h ; 0B30
 db 033h,033h,073h,000h,000h,000h,000h,000h,00Ch,00Ch,01Eh,000h,000h,000h,000h,000h ; 0B40
 db 006h,006h,066h,066h,03Ch,000h,000h,000h,036h,033h,073h,000h,000h,000h,000h,000h ; 0B50
 db 00Ch,00Ch,01Eh,000h,000h,000h,000h,000h,0DBh,0DBh,0DBh,000h,000h,000h,000h,000h ; 0B60
 db 033h,033h,033h,000h,000h,000h,000h,000h,063h,063h,03Eh,000h,000h,000h,000h,000h ; 0B70
 db 033h,03Eh,030h,030h,078h,000h,000h,000h,066h,03Eh,006h,006h,00Fh,000h,000h,000h ; 0B80
 db 030h,030h,078h,000h,000h,000h,000h,000h,00Eh,063h,03Eh,000h,000h,000h,000h,000h ; 0B90
 db 018h,01Bh,00Eh,000h,000h,000h,000h,000h,066h,066h,03Bh,000h,000h,000h,000h,000h ; 0BA0
 db 066h,03Ch,018h,000h,000h,000h,000h,000h,0DBh,0FFh,066h,000h,000h,000h,000h,000h ; 0BB0
 db 01Ch,036h,063h,000h,000h,000h,000h,000h,063h,03Fh,003h,006h,03Ch,000h,000h,000h ; 0BC0
 db 018h,033h,07Fh,000h,000h,000h,000h,000h,018h,018h,00Eh,000h,000h,000h,000h,000h ; 0BD0
 db 018h,018h,018h,000h,000h,000h,000h,000h,018h,018h,070h,000h,000h,000h,000h,000h ; 0BE0
 db 000h,000h,000h,000h,000h,000h,000h,000h,063h,07Fh,000h,000h,000h,000h,000h,000h ; 0BF0
 db 033h,01Eh,006h,003h,03Eh,000h,000h,000h,066h,066h,03Bh,000h,000h,000h,000h,000h ; 0C00
 db 060h,063h,03Eh,000h,000h,000h,000h,000h,066h,066h,03Bh,000h,000h,000h,000h,000h ; 0C10
 db 066h,066h,03Bh,000h,000h,000h,000h,000h,066h,066h,03Bh,000h,000h,000h,000h,000h ; 0C20
 db 066h,066h,03Bh,000h,000h,000h,000h,000h,03Ch,00Ch,006h,03Ch,000h,000h,000h,000h ; 0C30
 db 060h,063h,03Eh,000h,000h,000h,000h,000h,060h,063h,03Eh,000h,000h,000h,000h,000h ; 0C40
 db 060h,063h,03Eh,000h,000h,000h,000h,000h,018h,018h,03Ch,000h,000h,000h,000h,000h ; 0C50
 db 018h,018h,03Ch,000h,000h,000h,000h,000h,018h,018h,03Ch,000h,000h,000h,000h,000h ; 0C60
 db 07Fh,063h,063h,000h,000h,000h,000h,000h,07Fh,063h,063h,000h,000h,000h,000h,000h ; 0C70
 db 030h,033h,07Fh,000h,000h,000h,000h,000h,0D8h,0DCh,077h,000h,000h,000h,000h,000h ; 0C80
 db 066h,066h,067h,000h,000h,000h,000h,000h,063h,063h,03Eh,000h,000h,000h,000h,000h ; 0C90
 db 063h,063h,03Eh,000h,000h,000h,000h,000h,063h,063h,03Eh,000h,000h,000h,000h,000h ; 0CA0
 db 066h,066h,03Bh,000h,000h,000h,000h,000h,066h,066h,03Bh,000h,000h,000h,000h,000h ; 0CB0
 db 063h,03Fh,003h,006h,03Ch,000h,000h,000h,063h,036h,01Ch,000h,000h,000h,000h,000h ; 0CC0
 db 063h,063h,03Eh,000h,000h,000h,000h,000h,07Eh,018h,018h,000h,000h,000h,000h,000h ; 0CD0
 db 030h,073h,07Eh,000h,000h,000h,000h,000h,0FFh,018h,018h,000h,000h,000h,000h,000h ; 0CE0
 db 066h,066h,0F3h,000h,000h,000h,000h,000h,018h,018h,018h,0D8h,070h,000h,000h,000h ; 0CF0
 db 066h,066h,03Bh,000h,000h,000h,000h,000h,018h,018h,03Ch,000h,000h,000h,000h,000h ; 0D00
 db 063h,063h,03Eh,000h,000h,000h,000h,000h,066h,066h,03Bh,000h,000h,000h,000h,000h ; 0D10
 db 033h,033h,033h,000h,000h,000h,000h,000h,067h,063h,063h,000h,000h,000h,000h,000h ; 0D20
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0D30
 db 063h,063h,03Eh,000h,000h,000h,000h,000h,060h,060h,000h,000h,000h,000h,000h,000h ; 0D40
 db 003h,003h,000h,000h,000h,000h,000h,000h,06Eh,0C3h,006h,00Ch,01Fh,000h,000h,000h ; 0D50
 db 067h,0CFh,01Fh,003h,003h,000h,000h,000h,03Ch,03Ch,018h,000h,000h,000h,000h,000h ; 0D60
 db 01Bh,000h,000h,000h,000h,000h,000h,000h,06Ch,000h,000h,000h,000h,000h,000h,000h ; 0D70
 db 011h,044h,011h,044h,011h,044h,000h,000h,055h,0AAh,055h,0AAh,055h,0AAh,000h,000h ; 0D80
 db 0DDh,077h,0DDh,077h,0DDh,077h,000h,000h,018h,018h,018h,018h,018h,018h,000h,000h ; 0D90
 db 018h,018h,018h,018h,018h,018h,000h,000h,018h,018h,018h,018h,018h,018h,000h,000h ; 0DA0
 db 036h,036h,036h,036h,036h,036h,000h,000h,036h,036h,036h,036h,036h,036h,000h,000h ; 0DB0
 db 018h,018h,018h,018h,018h,018h,000h,000h,036h,036h,036h,036h,036h,036h,000h,000h ; 0DC0
 db 036h,036h,036h,036h,036h,036h,000h,000h,036h,036h,036h,036h,036h,036h,000h,000h ; 0DD0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0DE0
 db 000h,000h,000h,000h,000h,000h,000h,000h,018h,018h,018h,018h,018h,018h,000h,000h ; 0DF0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0E00
 db 018h,018h,018h,018h,018h,018h,000h,000h,018h,018h,018h,018h,018h,018h,000h,000h ; 0E10
 db 000h,000h,000h,000h,000h,000h,000h,000h,018h,018h,018h,018h,018h,018h,000h,000h ; 0E20
 db 018h,018h,018h,018h,018h,018h,000h,000h,036h,036h,036h,036h,036h,036h,000h,000h ; 0E30
 db 000h,000h,000h,000h,000h,000h,000h,000h,036h,036h,036h,036h,036h,036h,000h,000h ; 0E40
 db 000h,000h,000h,000h,000h,000h,000h,000h,036h,036h,036h,036h,036h,036h,000h,000h ; 0E50
 db 036h,036h,036h,036h,036h,036h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0E60
 db 036h,036h,036h,036h,036h,036h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0E70
 db 000h,000h,000h,000h,000h,000h,000h,000h,018h,018h,018h,018h,018h,018h,000h,000h ; 0E80
 db 036h,036h,036h,036h,036h,036h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0E90
 db 000h,000h,000h,000h,000h,000h,000h,000h,018h,018h,018h,018h,018h,018h,000h,000h ; 0EA0
 db 036h,036h,036h,036h,036h,036h,000h,000h,036h,036h,036h,036h,036h,036h,000h,000h ; 0EB0
 db 018h,018h,018h,018h,018h,018h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0EC0
 db 018h,018h,018h,018h,018h,018h,000h,000h,0FFh,0FFh,0FFh,0FFh,0FFh,0FFh,000h,000h ; 0ED0
 db 0FFh,0FFh,0FFh,0FFh,0FFh,0FFh,000h,000h,0F0h,0F0h,0F0h,0F0h,0F0h,0F0h,000h,000h ; 0EE0
 db 00Fh,00Fh,00Fh,00Fh,00Fh,00Fh,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0EF0
 db 06Ch,06Eh,03Bh,000h,000h,000h,000h,000h,063h,07Eh,060h,060h,020h,000h,000h,000h ; 0F00
 db 060h,060h,060h,000h,000h,000h,000h,000h,036h,036h,036h,000h,000h,000h,000h,000h ; 0F10
 db 030h,063h,07Fh,000h,000h,000h,000h,000h,06Ch,06Ch,038h,000h,000h,000h,000h,000h ; 0F20
 db 03Eh,030h,030h,060h,000h,000h,000h,000h,00Ch,00Ch,00Ch,000h,000h,000h,000h,000h ; 0F30
 db 03Ch,018h,07Eh,000h,000h,000h,000h,000h,063h,036h,01Ch,000h,000h,000h,000h,000h ; 0F40
 db 036h,036h,077h,000h,000h,000h,000h,000h,066h,066h,03Ch,000h,000h,000h,000h,000h ; 0F50
 db 07Eh,000h,000h,000h,000h,000h,000h,000h,07Eh,060h,0C0h,000h,000h,000h,000h,000h ; 0F60
 db 060h,030h,01Ch,000h,000h,000h,000h,000h,063h,063h,063h,000h,000h,000h,000h,000h ; 0F70
 db 000h,07Fh,000h,000h,000h,000h,000h,000h,018h,000h,0FFh,000h,000h,000h,000h,000h ; 0F80
 db 030h,000h,07Eh,000h,000h,000h,000h,000h,00Ch,000h,07Eh,000h,000h,000h,000h,000h ; 0F90
 db 018h,018h,018h,018h,018h,018h,000h,000h,0D8h,0D8h,070h,000h,000h,000h,000h,000h ; 0FA0
 db 000h,018h,018h,000h,000h,000h,000h,000h,06Eh,000h,000h,000h,000h,000h,000h,000h ; 0FB0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0FC0
 db 000h,000h,000h,000h,000h,000h,000h,000h,06Ch,03Ch,01Ch,000h,000h,000h,000h,000h ; 0FD0
 db 000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0FE0
 db 03Eh,03Eh,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h,000h ; 0FF0

codeSeg	endS

	end
```
{% endraw %}

## PRTSCFX.ASM

{% raw %}
```
	page	60,132

	title	PrtScFX  - FX-80 monochrome graphics print screen patch

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Written by:	Michael Geary					    ;;
;;		P.O. Box 1479					    ;;
;;		Los Gatos, CA 95031				    ;;
;;		(408) 354-4400					    ;;
;;								    ;;
;; This program is placed in the public domain without restriction. ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; macros

print	macro	char
	  ifnb	<char>
	mov	al, char
	  endif
	call	prtChar
	endM

video	macro	fun
	mov	ah, fun
	int	10h
	endM

DOS	macro	fun
	mov	ah, fun
	int	21h
	endM

; character codes
CR	equ	13
LF	equ	10
ESC	equ	27

; interrupt numbers
PrtSc	equ	05h
keyboard equ	16h
time	equ	1Ah

; interrupt vector locations in absolute zero segment
absSeg	segment at 0
	org	PrtSc * 4
PrtScIntOffset	dw	?
PrtScIntSeg	dw	?
absSeg	endS

; screen addresses & stuff
monoSeg     equ     0B000h
graphSeg    equ     0B800h
row25offset equ     24 * 160

monoBigCrs  equ     000Dh
graphBigCrs equ     0007h

monoNrmCrs  equ     0C0Dh
graphNrmCrs equ     0607h

save25	equ	60h	; use program segment prefix as scratch area

codeSeg segment para public 'code'

	extrn	cgData:byte

stkSize equ	256
cgSize	equ	4096
theEnd	equ	offset cgData + cgSize + stkSize

	org	100h

printScreen	proc	far

	assume	cs:codeSeg, ds:codeSeg, ss:codeSeg, es:absSeg

	mov	dx, offset credit
	DOS	9

	call	cksum
	mov	ckSave, dx

	mov	SPinit, theEnd
	mov	SSinit, cs

	xor	ax, ax
	mov	es, ax

	CLI
	mov	ax, PrtScIntOffset
	mov	SaveIntOffset, ax
	mov	ax, PrtScIntSeg
	mov	SaveIntSeg, ax

	mov	PrtScIntOffset, offset doPrint
	push	cs
	pop	PrtScIntSeg
	STI

	mov	dx, theEnd
	int	27h

SPinit		dw	?	; value to load into SP
SSinit		dw	?	; and SS when dump routine called

SPsave		dw	?	; saved value of SP and SS at start of dump
SSsave		dw	0	; routine (SSsave=0 means not currently active)

ckSave		dw	?	; saved checksum for stack overflow check

scrSeg		dw	?	; B000 or B800 screen segment
pageNo		db	?	; BIOS's page #

crsPos		dw	?	; user's cursor row & column
crsType 	dw	?	; user's cursor type (size)

bigCrs		dw	?	; our big cursor

saveInt 	label	dword	; holds the "other" PrtSc interrupt vector
SaveIntOffset	dw	?
SaveIntSeg	dw	?

paper216ths	db	?	; paper advance after pass (12/216 or 24/216 ")
dotsPerPass	db	?	; # dot rows covered in a pass (4 or 8)

lastCol 	db	?	; last nonblank char col in this print row

prompt		db	' G = text graphics dump, D = darker grap'
		db	'hics, SPACE = normal dump, Esc = cancel ',0

overflow	db	' Stack Overflow ',0

credit		db	CR,LF,'PrtScFX version 1.4 by Michael Geary',CR,LF,'$'

; PrtSc entry point

doPrint:
	assume	cs:codeSeg, ds:nothing, ss:nothing, es:nothing

	cmp	SSsave, 0
	jz	startOK
	jmp	allDone 	    ; already running, no dice
startOK:
	CLI
	mov	SPsave, sp
	mov	SSsave, ss
	mov	ss, SSinit
	mov	sp, SPinit
	STI

	push	ds
	push	es
	push	ax
	push	bx
	push	cx
	push	dx
	push	si
	push	di
	push	bp

	video	15			; get CRT mode in AL
	mov	pageNo, bh
	mov	dx, monoSeg
	mov	cx, monoBigCrs
	mov	si, monoNrmCrs
	cmp	al, 7			; must be monochrome
	je	newDump
	mov	dx, graphSeg
	xor	bl, bl
	add	dx, bx			; (current page segment)
	mov	cx, graphBigCrs
	mov	si, graphNrmCrs
	and	al, 0FEh
	cmp	al, 2			; or 80 column text mode (2 or 3)
	je	newDump
	  jmp	oldDump
newDump:
	mov	scrSeg, dx
	mov	bigCrs, cx
	mov	crsType, si

	video	3			; save cursor
	mov	crsPos, dx
	cmp	cx, 0067h		; avoid ROM bug - incorrect
	je	weirdCrs		; cursor type of 67h
	mov	crsType, cx
weirdCrs:

	or	ch, 20h
	video	1			; turn cursor off

	push	cs			; * * * * * * ProKey kludge!!!
	pop	ds
	xor	ax, ax
	mov	es, ax
	les	si, dword ptr es:24h	; interrupt 9 (keyboard)
	cmp	word ptr es:[si], 0F62Eh
	jne	notProKey
	mov	si, es:3[si]		; looks like ProKey, get their flag
	test	byte ptr es:[si], 0FFh
	jnz	notProKey		; not active
	push	ax
	mov	cx, bigCrs
	video	1			; put up a big fat cursor
	pop	ax
	jmp	oldDump 		; ProKey is active, do old dump!
notProKey:

	mov	ds, scrSeg
	mov	si, row25offset
	push	cs
	pop	es
	mov	di, save25
	mov	cx, 80
	rep movsw			; save row 25

	push	cs
	pop	ds
	assume	ds:codeSeg		; leave DS alone from now on

	mov	si, offset prompt
	call	message

kbdClr: mov	ah, 1			; clear keyboard buffer
	int	keyboard
	pushf
	xor	ah, ah			; and read a key
	int	keyboard
	popf
	jnz	kbdClr

	mov	si, save25
	mov	es, scrSeg
	mov	di, row25offset
	mov	cx, 80
	rep	movsw			; restore row 25

	cmp	al, 27			; exit if Esc
	jne	notEsc
	  jmp	prtDone
notEsc:
	and	al, 0DFh		; convert lower case --> upper
	push	ax
	mov	cx, bigCrs
	video	1			; put up a big fat cursor
	pop	ax

	xor	ch, ch			; CH = char row
	xor	dh, dh			; DH = dot row
	mov	paper216ths, 24
	mov	dotsPerPass, 8
	cmp	al, 'G'
	je	doGraphics

	dec	ch			; double strike starts at char row -1
	mov	dh, 10			; dot row 10 (to do the first strike
	mov	paper216ths, 12 	; of the top 4 dot lines of row 0)
	mov	dotsPerPass, 4
	cmp	al, 'D'
	je	doGraphics

oldDump:
	pushf
	call	SaveInt 		; call the other dump routine
	jmp	prtDone

doGraphics:
	print	CR			; CR-LF to tension paper
	print	LF

nextRow:				; here to begin a character row
	push	cx
	push	dx
	mov	dh, ch
	xor	dl, dl
	mov	bh, pageNo
	video	2			; put a big cursor on current row
	pop	dx
	pop	cx

	mov	cl, 79
chkNxtChr:				; here to check a char col for nonblank
	mov	dl, 7
chkNxtDotCol:				; here to check a dot col for nonblank
	call	getDotCol
	test	al, al
	jnz	startRow
	dec	dl
	jge	chkNxtDotCol
	dec	cl
	jge	chkNxtChr
	jmp	advPaper		; nothing at to print on this row
startRow:
	mov	lastCol, cl
	inc	cl
	mov	al, 9
	mul	cl
	mov	bx, ax			; bx = number of dot cols to print

	print	ESC
	print	'*'                     ; set 720 dot graphics mode
	print	6
	print	bl			; with the exact number of dots
	print	bh

	mov	cl, 0			; CL = char col
nextChar:				; here to dump one character column
	mov	dl, 7			; DL = dot col
nextCol:				; here for each dot column
	call	getDotCol
	print

	dec	dl
	cmp	dl, -1
	jge	nextCol

	inc	cl
	cmp	cl, lastCol
	jle	nextChar

advPaper:
	print	CR
	print	ESC
	print	'J'
	print	paper216ths

	add	dh, dotsPerPass
	cmp	dh, 14
	jge	sub14
	  jmp	nextRow
sub14:
	sub	dh, 14
	inc	ch
	cmp	ch, 25
	jge	prtDone
	  jmp	nextRow

prtDone:
	call	oldCursor
	call	cksum
	cmp	dx, ckSave
	je	exitOK
	mov	si, offset overflow	; stack overflow, complain
	call	message
exitOK:
	pop	bp
	pop	di
	pop	si
	pop	dx
	pop	cx
	pop	bx
	pop	ax
	pop	es
	pop	ds
	CLI
	mov	ss, cs: SSsave
	mov	sp, cs: SPsave
	mov	cs: SSsave, 0
allDone:
	STI
	iRet

printScreen	endP


; Call with CH=char row, CL=char col, DH=topmost dot row, DL=dot col.
; Returns with the dot column byte for printing in AL.
getDotCol   proc    near

	push	bx
	xor	bx, bx			; BH=dot row offset, BL=dot accumulator
nextDot:				; here for each dot vertically
	push	dx
	add	dh, bh
	call	getDot
	pop	dx

	shl	bl, 1
	or	bl, al
	inc	bh
	cmp	bh, 8
	jl	nextDot

	mov	al, bl
	pop	bx
	ret

getDotCol   endP


; Call with CH=char row, CL=char col, DH=dot row, DL=dot col.
; Returns with the dot in AL bit 0.
getDot	proc	near

	push	bx
	push	cx
	push	dx

	cmp	dh, 14			; are we really in next char row?
	jl	gd1
	inc	ch			; yes, adjust char and dot rows
	sub	dh, 14
gd1:
	xor	al, al
	or	ch, ch
	jl	gdRet
	cmp	ch, 25
	jge	gdRet			; return 0 if outside screen bounds

	call	getCA			; AH = attr, AL = char

	or	dl, dl			; special check for dot col "-1"
	jge	gd2
	cmp	al, 192
	jl	gd3
	cmp	al, 223
	jle	gd4
gd3:	xor	al, al			; col -1 not in 192..223 is 0
	jmp	gd6
gd4:	xor	dl, dl			; col -1 in 192..223 duplicates col 0
gd2:
	mov	bl, al
	xor	bh, bh
	shl	bx, 1
	shl	bx, 1
	shl	bx, 1
	push	dx
	mov	dl, dh
	xor	dh, dh
	add	bx, dx			; BX = (chr*8) + dotRow
	pop	dx

	cmp	dh, 8
	jl	gd5
	add	bx, 2040		; dot rows 8-13 are higher in ROM
gd5:
	mov	al, cgData[bx]		; get the character data
	mov	cl, dl
	shr	al, cl			; shift dot into position
	and	al, 1
gd6:
	and	ah, 77h
	cmp	ah, 70h 		; check for reverse video
	jne	gd7
	xor	al, 1			; yes, toggle the dot
gd7:
	cmp	dh, 12			; is this the underline dot row?
	jne	gd8
	cmp	scrSeg, monoSeg 	; yes, are we on a monochrome display?
	jne	gd8
	cmp	ah, 1			; yes, is the underline attribute set?
	jne	gd8
	mov	al, 1			; yes, dot on
gd8:
gdRet:
	pop	dx
	pop	cx
	pop	bx
	ret

getDot	endP


; Call with CH=row, CL=col.  Returns with AH=attribute, AL=character.
getCA	proc	near

	push	bx
	push	cx

	mov	al, 80
	imul	ch
	xor	ch, ch
	add	ax, cx
	shl	ax, 1
	mov	bx, ax
	mov	ax, scrSeg
	mov	es, ax
	mov	ax, es:[bx]

	pop	cx
	pop	bx
	ret

getCA	endP


;prints the character in AL
prtChar proc	near

	push	dx
	xor	dx, dx
	xor	ah, ah
	int	17h
	pop	dx
	test	ah, 25h
	jz	prtRet
	pop	dx		; get rid of our return address
	jmp	prtDone

prtRet: ret

prtChar endP


; restores user's cursor
oldCursor   proc    near

	push	cs
	pop	ds

	mov	bh, pageNo
	mov	dx, crsPos
	video	2			; restore cursor position

	mov	cx, crsType
	video	1			; and type

	ret

oldCursor   endP


; display the message at [si] in reverse video at the bottom of the screen.
; doesn't worry about snow on color screen.  clobbers di.
message proc	near

	mov	es, scrSeg
	mov	di, row25offset
	mov	ah, 70h 		; reverse video
prmLp:	lodsb
	test	al, al
	jz	prmRet
	stosw
	jmp	prmLp
prmRet: ret

message endP


; calculates a checksum for the character generator data, returns it in DX.
; used for stack overflow checking.  clobbers si, cx.
cksum	proc	near

	mov	si, offset cgData
	mov	cx, cgSize / 2
	xor	dx, dx
ckLp:	lodsw
	xor	dx, ax
	loop	ckLp
	ret

cksum	endP

codeSeg endS

	end	printScreen
```
{% endraw %}

## PRTSCFX.DOC

{% raw %}
```
PRTSCFX.DOC -- Documentation for PrtScFX	9/24/84

-------------------------------------------------------------------------------

Version 1.3

This version fixes a bug in 1.2 where the "D" dark print mode missed
part of the top line of the screen.

Be warned that ProKey has a bug which makes it crash if it is used with
PrtScFX.  Because of this bug, PrtScFX attempts to determine (when you
press Shift-PrtSc) whether ProKey is active.  If it is, a normal screen
dump is done instead of giving you the choice of a graphics dump.  You
can include both ProKey and PrtScFX in your AUTOEXEC, but if you do, you
will not be able to get graphics dumps until you do a PROKEY/Q command
to disable ProKey.

Also, the test for discovering ProKey's presence is imperfect.  If you
are running a program which grabs the keyboard interrupt (such as
Framework or BASICA), PrtScFX may not be able to tell that ProKey is
active.  To be completely safe, such programs should be run from batch
files which disable ProKey.  For example, if you use Framework, you
might rename FW.EXE as FRAMEWRK.EXE and then use a FW.BAT file
containing these commands:

prokey /q
cd \frame		    (or wherever)
framewrk
prokey /i

(If you have Framework V1.00, you will need to do this anyway, since it
does not get along with ProKey.)

-------------------------------------------------------------------------------

PrtScFX is a screen dump program which prints a graphic image of a text
mode display on an Epson FX or RX (not MX!) series printer.  The printout
looks just like a screen display, including connected line graphics.

This is different from other graphics dumps, such as IBM's GRAPHICS program.
GRAPHICS dumps a graphics mode screen; PrtScFX dumps a text mode screen.

PrtScFX should be run once, typically from your AUTOEXEC.BAT file.  From
then on, if you are in 80 column text mode, the Shift-Prtsc key will give
you the prompt:

G = text graphics dump, D = darker graphics, SPACE = normal dump, Esc = cancel

and you can type:

    G		for a text mode graphics dump
    D		for a better quality (double-strike) text graphics dump
    Space Bar	for a "normal" screen dump (passes the request on to the
		standard - or other special - screen dump utility)
    Esc 	to cancel the screen dump request

Either the IBM Monochrome Display or the color/graphics adapter can be
used, but only 80-column TEXT mode displays are dumped.  For either display
adapter, the printout duplicates the font of the IBM Monochrome Display.

PrtScFX coexists nicely with IBM's GRAPHICS program.  Just run them both in
your AUTOEXEC (in either order), and then GRAPHICS will handle graphics
mode displays, and PrtScFX will kick in for text mode.

PrtScFX produced the illustrations of Transend PC screens in my article
(with Richard Moore), "A Communications Package for the IBM PC", in the
November 1983 BYTE magazine.  For camera-ready art like this, I recommend:

 *  A fairly fresh ribbon - but not brand new (smudges).  The one we used
    in the article was a little faint.
 *  Good quality bond paper - not typical printout paper (the ink bleeds).
 *  If available, friction feed instead of pin feed - better registration.
 *  The D option for double-strike graphics.

In the article, we used a ribbon that was just a little too faint.


PrtScFX is placed in the public domain without restriction.

Michael Geary
P.O. Box 1479
Los Gatos, CA 95031
(408) 354-0175


FILES
-----

If you just want to use PrtScFX, you just need PRTSCFX.COM

If you want to modify and/or re-assemble PrtScFX, the source files are
PRTSCFX.ASM and MONOCG.ASM.  The latter file contains the character
generator data from the ROM on the display adapters.  If you don't need to
modify this, just use MONOCG.OBJ.


ASSEMBLING & LINKING
--------------------

(change drive letters as needed)

B>masm PrtScFX ;
B>masm MonoCG ;     (omit if you have MONOCG.OBJ)
B>link PrtScFX + MonoCG ;
If you have the Spacemaker program by Realia, Inc.:
    B>sm PrtScFX ; /s
If you don't have Spacemaker, you should get it!  For now, use:
    B>exe2bin PrtScFX.exe PrtScFX.com
    (Your .COM file will be larger using exe2bin)
B>erase PrtScFX.exe

Suggested modifications:  Handle 40 column text, clean up & document code
(sorry, it started out as a "quick and dirty" program).


```
{% endraw %}

## PRTSCFX.ASM

{% raw %}
```
	page	60,132

	title	PrtScFX  - FX-80 monochrome graphics print screen patch

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Written by:	Michael Geary					    ;;
;;		P.O. Box 1479					    ;;
;;		Los Gatos, CA 95031				    ;;
;;		(408) 354-4400					    ;;
;;								    ;;
;; This program is placed in the public domain without restriction. ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; macros

print	macro	char
	  ifnb	<char>
	mov	al, char
	  endif
	call	prtChar
	endM

video	macro	fun
	mov	ah, fun
	int	10h
	endM

DOS	macro	fun
	mov	ah, fun
	int	21h
	endM

; character codes
CR	equ	13
LF	equ	10
ESC	equ	27

; interrupt numbers
PrtSc	equ	05h
keyboard equ	16h
time	equ	1Ah

; interrupt vector locations in absolute zero segment
absSeg	segment at 0
	org	PrtSc * 4
PrtScIntOffset	dw	?
PrtScIntSeg	dw	?
absSeg	endS

; screen addresses & stuff
monoSeg     equ     0B000h
graphSeg    equ     0B800h
row25offset equ     24 * 160

monoBigCrs  equ     000Dh
graphBigCrs equ     0007h

monoNrmCrs  equ     0C0Dh
graphNrmCrs equ     0607h

save25	equ	60h	; use program segment prefix as scratch area

codeSeg segment para public 'code'

	extrn	cgData:byte

stkSize equ	256
cgSize	equ	4096
theEnd	equ	offset cgData + cgSize + stkSize

	org	100h

printScreen	proc	far

	assume	cs:codeSeg, ds:codeSeg, ss:codeSeg, es:absSeg

	mov	dx, offset credit
	DOS	9

	call	cksum
	mov	ckSave, dx

	mov	SPinit, theEnd
	mov	SSinit, cs

	xor	ax, ax
	mov	es, ax

	CLI
	mov	ax, PrtScIntOffset
	mov	SaveIntOffset, ax
	mov	ax, PrtScIntSeg
	mov	SaveIntSeg, ax

	mov	PrtScIntOffset, offset doPrint
	push	cs
	pop	PrtScIntSeg
	STI

	mov	dx, theEnd
	int	27h

SPinit		dw	?	; value to load into SP
SSinit		dw	?	; and SS when dump routine called

SPsave		dw	?	; saved value of SP and SS at start of dump
SSsave		dw	0	; routine (SSsave=0 means not currently active)

ckSave		dw	?	; saved checksum for stack overflow check

scrSeg		dw	?	; B000 or B800 screen segment
pageNo		db	?	; BIOS's page #

crsPos		dw	?	; user's cursor row & column
crsType 	dw	?	; user's cursor type (size)

bigCrs		dw	?	; our big cursor

saveInt 	label	dword	; holds the "other" PrtSc interrupt vector
SaveIntOffset	dw	?
SaveIntSeg	dw	?

paper216ths	db	?	; paper advance after pass (12/216 or 24/216 ")
dotsPerPass	db	?	; # dot rows covered in a pass (4 or 8)

lastCol 	db	?	; last nonblank char col in this print row

prompt		db	' G = text graphics dump, D = darker grap'
		db	'hics, SPACE = normal dump, Esc = cancel ',0

overflow	db	' Stack Overflow ',0

credit		db	CR,LF,'PrtScFX version 1.4 by Michael Geary',CR,LF,'$'

; PrtSc entry point

doPrint:
	assume	cs:codeSeg, ds:nothing, ss:nothing, es:nothing

	cmp	SSsave, 0
	jz	startOK
	jmp	allDone 	    ; already running, no dice
startOK:
	CLI
	mov	SPsave, sp
	mov	SSsave, ss
	mov	ss, SSinit
	mov	sp, SPinit
	STI

	push	ds
	push	es
	push	ax
	push	bx
	push	cx
	push	dx
	push	si
	push	di
	push	bp

	video	15			; get CRT mode in AL
	mov	pageNo, bh
	mov	dx, monoSeg
	mov	cx, monoBigCrs
	mov	si, monoNrmCrs
	cmp	al, 7			; must be monochrome
	je	newDump
	mov	dx, graphSeg
	xor	bl, bl
	add	dx, bx			; (current page segment)
	mov	cx, graphBigCrs
	mov	si, graphNrmCrs
	and	al, 0FEh
	cmp	al, 2			; or 80 column text mode (2 or 3)
	je	newDump
	  jmp	oldDump
newDump:
	mov	scrSeg, dx
	mov	bigCrs, cx
	mov	crsType, si

	video	3			; save cursor
	mov	crsPos, dx
	cmp	cx, 0067h		; avoid ROM bug - incorrect
	je	weirdCrs		; cursor type of 67h
	mov	crsType, cx
weirdCrs:

	or	ch, 20h
	video	1			; turn cursor off

	push	cs			; * * * * * * ProKey kludge!!!
	pop	ds
	xor	ax, ax
	mov	es, ax
	les	si, dword ptr es:24h	; interrupt 9 (keyboard)
	cmp	word ptr es:[si], 0F62Eh
	jne	notProKey
	mov	si, es:3[si]		; looks like ProKey, get their flag
	test	byte ptr es:[si], 0FFh
	jnz	notProKey		; not active
	push	ax
	mov	cx, bigCrs
	video	1			; put up a big fat cursor
	pop	ax
	jmp	oldDump 		; ProKey is active, do old dump!
notProKey:

	mov	ds, scrSeg
	mov	si, row25offset
	push	cs
	pop	es
	mov	di, save25
	mov	cx, 80
	rep movsw			; save row 25

	push	cs
	pop	ds
	assume	ds:codeSeg		; leave DS alone from now on

	mov	si, offset prompt
	call	message

kbdClr: mov	ah, 1			; clear keyboard buffer
	int	keyboard
	pushf
	xor	ah, ah			; and read a key
	int	keyboard
	popf
	jnz	kbdClr

	mov	si, save25
	mov	es, scrSeg
	mov	di, row25offset
	mov	cx, 80
	rep	movsw			; restore row 25

	cmp	al, 27			; exit if Esc
	jne	notEsc
	  jmp	prtDone
notEsc:
	and	al, 0DFh		; convert lower case --> upper
	push	ax
	mov	cx, bigCrs
	video	1			; put up a big fat cursor
	pop	ax

	xor	ch, ch			; CH = char row
	xor	dh, dh			; DH = dot row
	mov	paper216ths, 24
	mov	dotsPerPass, 8
	cmp	al, 'G'
	je	doGraphics

	dec	ch			; double strike starts at char row -1
	mov	dh, 10			; dot row 10 (to do the first strike
	mov	paper216ths, 12 	; of the top 4 dot lines of row 0)
	mov	dotsPerPass, 4
	cmp	al, 'D'
	je	doGraphics

oldDump:
	pushf
	call	SaveInt 		; call the other dump routine
	jmp	prtDone

doGraphics:
	print	CR			; CR-LF to tension paper
	print	LF

nextRow:				; here to begin a character row
	push	cx
	push	dx
	mov	dh, ch
	xor	dl, dl
	mov	bh, pageNo
	video	2			; put a big cursor on current row
	pop	dx
	pop	cx

	mov	cl, 79
chkNxtChr:				; here to check a char col for nonblank
	mov	dl, 7
chkNxtDotCol:				; here to check a dot col for nonblank
	call	getDotCol
	test	al, al
	jnz	startRow
	dec	dl
	jge	chkNxtDotCol
	dec	cl
	jge	chkNxtChr
	jmp	advPaper		; nothing at to print on this row
startRow:
	mov	lastCol, cl
	inc	cl
	mov	al, 9
	mul	cl
	mov	bx, ax			; bx = number of dot cols to print

	print	ESC
	print	'*'                     ; set 720 dot graphics mode
	print	6
	print	bl			; with the exact number of dots
	print	bh

	mov	cl, 0			; CL = char col
nextChar:				; here to dump one character column
	mov	dl, 7			; DL = dot col
nextCol:				; here for each dot column
	call	getDotCol
	print

	dec	dl
	cmp	dl, -1
	jge	nextCol

	inc	cl
	cmp	cl, lastCol
	jle	nextChar

advPaper:
	print	CR
	print	ESC
	print	'J'
	print	paper216ths

	add	dh, dotsPerPass
	cmp	dh, 14
	jge	sub14
	  jmp	nextRow
sub14:
	sub	dh, 14
	inc	ch
	cmp	ch, 25
	jge	prtDone
	  jmp	nextRow

prtDone:
	call	oldCursor
	call	cksum
	cmp	dx, ckSave
	je	exitOK
	mov	si, offset overflow	; stack overflow, complain
	call	message
exitOK:
	pop	bp
	pop	di
	pop	si
	pop	dx
	pop	cx
	pop	bx
	pop	ax
	pop	es
	pop	ds
	CLI
	mov	ss, cs: SSsave
	mov	sp, cs: SPsave
	mov	cs: SSsave, 0
allDone:
	STI
	iRet

printScreen	endP


; Call with CH=char row, CL=char col, DH=topmost dot row, DL=dot col.
; Returns with the dot column byte for printing in AL.
getDotCol   proc    near

	push	bx
	xor	bx, bx			; BH=dot row offset, BL=dot accumulator
nextDot:				; here for each dot vertically
	push	dx
	add	dh, bh
	call	getDot
	pop	dx

	shl	bl, 1
	or	bl, al
	inc	bh
	cmp	bh, 8
	jl	nextDot

	mov	al, bl
	pop	bx
	ret

getDotCol   endP


; Call with CH=char row, CL=char col, DH=dot row, DL=dot col.
; Returns with the dot in AL bit 0.
getDot	proc	near

	push	bx
	push	cx
	push	dx

	cmp	dh, 14			; are we really in next char row?
	jl	gd1
	inc	ch			; yes, adjust char and dot rows
	sub	dh, 14
gd1:
	xor	al, al
	or	ch, ch
	jl	gdRet
	cmp	ch, 25
	jge	gdRet			; return 0 if outside screen bounds

	call	getCA			; AH = attr, AL = char

	or	dl, dl			; special check for dot col "-1"
	jge	gd2
	cmp	al, 192
	jl	gd3
	cmp	al, 223
	jle	gd4
gd3:	xor	al, al			; col -1 not in 192..223 is 0
	jmp	gd6
gd4:	xor	dl, dl			; col -1 in 192..223 duplicates col 0
gd2:
	mov	bl, al
	xor	bh, bh
	shl	bx, 1
	shl	bx, 1
	shl	bx, 1
	push	dx
	mov	dl, dh
	xor	dh, dh
	add	bx, dx			; BX = (chr*8) + dotRow
	pop	dx

	cmp	dh, 8
	jl	gd5
	add	bx, 2040		; dot rows 8-13 are higher in ROM
gd5:
	mov	al, cgData[bx]		; get the character data
	mov	cl, dl
	shr	al, cl			; shift dot into position
	and	al, 1
gd6:
	and	ah, 77h
	cmp	ah, 70h 		; check for reverse video
	jne	gd7
	xor	al, 1			; yes, toggle the dot
gd7:
	cmp	dh, 12			; is this the underline dot row?
	jne	gd8
	cmp	scrSeg, monoSeg 	; yes, are we on a monochrome display?
	jne	gd8
	cmp	ah, 1			; yes, is the underline attribute set?
	jne	gd8
	mov	al, 1			; yes, dot on
gd8:
gdRet:
	pop	dx
	pop	cx
	pop	bx
	ret

getDot	endP


; Call with CH=row, CL=col.  Returns with AH=attribute, AL=character.
getCA	proc	near

	push	bx
	push	cx

	mov	al, 80
	imul	ch
	xor	ch, ch
	add	ax, cx
	shl	ax, 1
	mov	bx, ax
	mov	ax, scrSeg
	mov	es, ax
	mov	ax, es:[bx]

	pop	cx
	pop	bx
	ret

getCA	endP


;prints the character in AL
prtChar proc	near

	push	dx
	xor	dx, dx
	xor	ah, ah
	int	17h
	pop	dx
	test	ah, 25h
	jz	prtRet
	pop	dx		; get rid of our return address
	jmp	prtDone

prtRet: ret

prtChar endP


; restores user's cursor
oldCursor   proc    near

	push	cs
	pop	ds

	mov	bh, pageNo
	mov	dx, crsPos
	video	2			; restore cursor position

	mov	cx, crsType
	video	1			; and type

	ret

oldCursor   endP


; display the message at [si] in reverse video at the bottom of the screen.
; doesn't worry about snow on color screen.  clobbers di.
message proc	near

	mov	es, scrSeg
	mov	di, row25offset
	mov	ah, 70h 		; reverse video
prmLp:	lodsb
	test	al, al
	jz	prmRet
	stosw
	jmp	prmLp
prmRet: ret

message endP


; calculates a checksum for the character generator data, returns it in DX.
; used for stack overflow checking.  clobbers si, cx.
cksum	proc	near

	mov	si, offset cgData
	mov	cx, cgSize / 2
	xor	dx, dx
ckLp:	lodsw
	xor	dx, ax
	loop	ckLp
	ret

cksum	endP

codeSeg endS

	end	printScreen
```
{% endraw %}

## PRTSCFX.DOC

{% raw %}
```
PRTSCFX.DOC -- Documentation for PrtScFX	9/24/84

-------------------------------------------------------------------------------

Version 1.3

This version fixes a bug in 1.2 where the "D" dark print mode missed
part of the top line of the screen.

Be warned that ProKey has a bug which makes it crash if it is used with
PrtScFX.  Because of this bug, PrtScFX attempts to determine (when you
press Shift-PrtSc) whether ProKey is active.  If it is, a normal screen
dump is done instead of giving you the choice of a graphics dump.  You
can include both ProKey and PrtScFX in your AUTOEXEC, but if you do, you
will not be able to get graphics dumps until you do a PROKEY/Q command
to disable ProKey.

Also, the test for discovering ProKey's presence is imperfect.  If you
are running a program which grabs the keyboard interrupt (such as
Framework or BASICA), PrtScFX may not be able to tell that ProKey is
active.  To be completely safe, such programs should be run from batch
files which disable ProKey.  For example, if you use Framework, you
might rename FW.EXE as FRAMEWRK.EXE and then use a FW.BAT file
containing these commands:

prokey /q
cd \frame		    (or wherever)
framewrk
prokey /i

(If you have Framework V1.00, you will need to do this anyway, since it
does not get along with ProKey.)

-------------------------------------------------------------------------------

PrtScFX is a screen dump program which prints a graphic image of a text
mode display on an Epson FX or RX (not MX!) series printer.  The printout
looks just like a screen display, including connected line graphics.

This is different from other graphics dumps, such as IBM's GRAPHICS program.
GRAPHICS dumps a graphics mode screen; PrtScFX dumps a text mode screen.

PrtScFX should be run once, typically from your AUTOEXEC.BAT file.  From
then on, if you are in 80 column text mode, the Shift-Prtsc key will give
you the prompt:

G = text graphics dump, D = darker graphics, SPACE = normal dump, Esc = cancel

and you can type:

    G		for a text mode graphics dump
    D		for a better quality (double-strike) text graphics dump
    Space Bar	for a "normal" screen dump (passes the request on to the
		standard - or other special - screen dump utility)
    Esc 	to cancel the screen dump request

Either the IBM Monochrome Display or the color/graphics adapter can be
used, but only 80-column TEXT mode displays are dumped.  For either display
adapter, the printout duplicates the font of the IBM Monochrome Display.

PrtScFX coexists nicely with IBM's GRAPHICS program.  Just run them both in
your AUTOEXEC (in either order), and then GRAPHICS will handle graphics
mode displays, and PrtScFX will kick in for text mode.

PrtScFX produced the illustrations of Transend PC screens in my article
(with Richard Moore), "A Communications Package for the IBM PC", in the
November 1983 BYTE magazine.  For camera-ready art like this, I recommend:

 *  A fairly fresh ribbon - but not brand new (smudges).  The one we used
    in the article was a little faint.
 *  Good quality bond paper - not typical printout paper (the ink bleeds).
 *  If available, friction feed instead of pin feed - better registration.
 *  The D option for double-strike graphics.

In the article, we used a ribbon that was just a little too faint.


PrtScFX is placed in the public domain without restriction.

Michael Geary
P.O. Box 1479
Los Gatos, CA 95031
(408) 354-0175


FILES
-----

If you just want to use PrtScFX, you just need PRTSCFX.COM

If you want to modify and/or re-assemble PrtScFX, the source files are
PRTSCFX.ASM and MONOCG.ASM.  The latter file contains the character
generator data from the ROM on the display adapters.  If you don't need to
modify this, just use MONOCG.OBJ.


ASSEMBLING & LINKING
--------------------

(change drive letters as needed)

B>masm PrtScFX ;
B>masm MonoCG ;     (omit if you have MONOCG.OBJ)
B>link PrtScFX + MonoCG ;
If you have the Spacemaker program by Realia, Inc.:
    B>sm PrtScFX ; /s
If you don't have Spacemaker, you should get it!  For now, use:
    B>exe2bin PrtScFX.exe PrtScFX.com
    (Your .COM file will be larger using exe2bin)
B>erase PrtScFX.exe

Suggested modifications:  Handle 40 column text, clean up & document code
(sorry, it started out as a "quick and dirty" program).


```
{% endraw %}

## README.TXT

{% raw %}
```
High-resolution EGA Windows drivers by Michael Geary

12/9/86


INTRODUCTION
------------

This package of Windows drivers includes several high-resolution drivers for
Enhanced Graphic Adapters with various monitors.  Most of the drivers
require a 24mhz adapter card to be installed in the feature connector of the
EGA.  Brief instructions for building this card are given below; more
complete instructions can be found in the September 16, 1986 issue of PC
Magazine, page 298.

These drivers and the 24mhz adapter card will work with any EGA card that
has 256K memory.  They do not require one of the new "enhanced" EGA's.
(The 24mhz adapter makes your EGA an "enhanced" EGA equivalent to the VEGA
Deluxe card from Video-7.)

The following drivers are included in this package:

Filenames    Resolution   Display type                24mhz req'd
----------   ----------   -------------------------   -----------
E640X480.*   640 x 480    Multisync                   Yes
E752X410.*   752 x 410    Multisync                   Yes
E896X350.*   896 x 350    Standard ECD or Multisync   Yes
M720X350.*   720 x 350    Monochrome                  No

These drivers have been tested with Windows versions 1.01 and 1.03.  They
should also work with future Windows versions.


HOW TO INSTALL THE DRIVERS
--------------------------

For each driver, there are three files, .DRV, .GRB, and .LGO.  To use the
drivers, these files should be copied to your Windows SETUP and BUILD disks.
Follow these instructions to install the drivers on your Windows disks.

1.  Make copies of the SETUP and BUILD disks and work on the copies, not the
    originals!!  You will be deleting some files from these disks to make
    room for the new drivers.

2.  Delete some files from the SETUP disk to make room for the .DRV files.
    I recommend deleting CGA.DRV, HERCULES.DRV, EGALORES.DRV, EMM.PC, and
    EMM.AT.  For Windows 1.01 and 1.03, this frees up enough space.

3.  Copy *.DRV from this directory onto the SETUP disk.

4.  Copy *.GRB and *.LGO from this directory onto the BUILD disk.

5.  That completes the installation of the enhanced drivers.  Now put the
    SETUP disk in drive A: and run SETUP as you would normally.  You will
    see the additional drivers listed when it asks you what kind of display
    you have.  Choose the one you want and try it out!

Note: If you install the 896x350 driver, you may find that the standard
system font looks awfully tall and skinny.  You may prefer the alternate
font, which is normally used with a CGA, and will give smaller, but more
normal looking characters.  If you want to try this font, then on your
SETUP disk, rename HIFONTS.FON as HIFONTS.STD and then rename LOFONTS.FON
as HIFONTS.FON, and re-run SETUP.  (You can rename the files back again if
you change your mind.)  This is also a useful trick with the other screen
resolutions if you would rather fit more lines of text on the screen when
using the system font.  It doesn't affect other fonts such as used in WRITE.


HOW TO BUILD THE 24MHZ FEATURE CARD
-----------------------------------

To use any of these drivers except the 720x350 Monochrome, you will need to
build a 24mhz "feature card" and install it on your EGA.  This is a very
simple card, with only one main component, a crystal oscillator.  If you
would like step-by-step instructions for building this card, I recommend
getting the September 16, 1986 issue of PC Magazine, and following the
instructions on page 298.  Here are brief instructions for those who are
familiar with building electronic hardware.

You will need these parts, available from a number of suppliers, including
JDR Microdevices, 1224 S. Bascom Av., San Jose, CA 95128;  (800) 538-5000
or (800) 662-6279 in California.  The total cost for parts will be around
ten dollars plus shipping.

JDR Item #      Description
----------      ----------------------------------
OSC24.0         24.0 MHZ crystal oscillator
HDR-80          2x40 breakable header strip
P25x45          Bare 2.5 x 4.5 " prototyping board
14 PIN ST       14-pin low profile IC socket

Cut the header strip so you have two rows of 16 pins each.  Cut the
prototyping board to about 1.5 x 2 inches.  Push the short pins of the
header strip through the holes along one edge of the board and glue it in
place.  (But keep the glue off the pins - you will be soldering on them.)
In the middle of the board, push the IC socket through from the other side
and glue it in place.

Cut three short pieces of hookup wire, and connect the IC socket to the
2x16 header strip as follows (you will need to pass the wires through some
holes in the board):

IC socket       Header strip    Function
---------       ------------    --------
   7                 31         Ground
  14                 32         +5 volts
   8                 28         Signal

To identify the pins of the IC socket, note that one end of the socket has a
little notch in it.  If you are looking at the bottom of the socket (where
the pins are), and you have the notch at the top, pin 14 is at the top left.
Pin 8 is at the bottom left.  Pin 7 is at the bottom right.

To identify the pins of the header strip, observe how it will plug in to the
EGA card.  On the EGA card, the topmost pin farthest from the metal bracket
is pin 31.  Pin 32 is right below that, and pin 28 is two over from pin 32.
Most EGA cards have pins 31 and 32 marked (and pins 1 and 2).

Finally, push the crystal oscillator into the IC socket.  There will be a
little dot at one corner of the oscillator.  This end of the oscillator goes
into the notched end of the socket.  You may need to trim the oscillator
pins a little bit to get it to seat fully in the socket.

Finally, double check all your connections, and cut off excess length on the
IC socket and header pins.  (Don't cut off the header pins where they will
plug in to the EGA!  It's the pins that pass through the card that should be
trimmed.)

Plug the card into the EGA.  Check that nothing looks like it is going to
short out - you may want to cut a little piece of cardboard and put between
the adapter card and the EGA, and tape or glue it in place.  Finally,
install the EGA back into your PC.  To test it, first make sure that your
normal display operations still work!  Then, try one of the enhanced Windows
drivers.  If there's any problem, you may want to try running 120COLS.COM,
which is included with these drivers.  Just run 120COLS, and then give the
command MODE BW40, and you should have a 120 column text display on your
ECD or Multisync display (it won't work on a Monochrome display).  If the
enhanced Windows drivers and 120COLS don't work, but the EGA operates
normally otherwise, there is a problem with your feature card, and you
should remove it and double check everything.  If in doubt, check the PC
Magazine article mentioned above.


CREDITS
-------

These enhanced EGA drivers are based on the standard EGA Windows driver from
Microsoft, and were adapted by:

Michael Geary
P.O. Box 1479
Los Gatos, CA  95031
(408) 354-0175

BIX:        'geary'
GEnie:      'geary'
AT&T Mail:  'geary'
CompuServe: 76146,42
```
{% endraw %}

## README.TXT

{% raw %}
```
High-resolution EGA Windows drivers by Michael Geary

12/9/86


INTRODUCTION
------------

This package of Windows drivers includes several high-resolution drivers for
Enhanced Graphic Adapters with various monitors.  Most of the drivers
require a 24mhz adapter card to be installed in the feature connector of the
EGA.  Brief instructions for building this card are given below; more
complete instructions can be found in the September 16, 1986 issue of PC
Magazine, page 298.

These drivers and the 24mhz adapter card will work with any EGA card that
has 256K memory.  They do not require one of the new "enhanced" EGA's.
(The 24mhz adapter makes your EGA an "enhanced" EGA equivalent to the VEGA
Deluxe card from Video-7.)

The following drivers are included in this package:

Filenames    Resolution   Display type                24mhz req'd
----------   ----------   -------------------------   -----------
E640X480.*   640 x 480    Multisync                   Yes
E752X410.*   752 x 410    Multisync                   Yes
E896X350.*   896 x 350    Standard ECD or Multisync   Yes
M720X350.*   720 x 350    Monochrome                  No

These drivers have been tested with Windows versions 1.01 and 1.03.  They
should also work with future Windows versions.


HOW TO INSTALL THE DRIVERS
--------------------------

For each driver, there are three files, .DRV, .GRB, and .LGO.  To use the
drivers, these files should be copied to your Windows SETUP and BUILD disks.
Follow these instructions to install the drivers on your Windows disks.

1.  Make copies of the SETUP and BUILD disks and work on the copies, not the
    originals!!  You will be deleting some files from these disks to make
    room for the new drivers.

2.  Delete some files from the SETUP disk to make room for the .DRV files.
    I recommend deleting CGA.DRV, HERCULES.DRV, EGALORES.DRV, EMM.PC, and
    EMM.AT.  For Windows 1.01 and 1.03, this frees up enough space.

3.  Copy *.DRV from this directory onto the SETUP disk.

4.  Copy *.GRB and *.LGO from this directory onto the BUILD disk.

5.  That completes the installation of the enhanced drivers.  Now put the
    SETUP disk in drive A: and run SETUP as you would normally.  You will
    see the additional drivers listed when it asks you what kind of display
    you have.  Choose the one you want and try it out!

Note: If you install the 896x350 driver, you may find that the standard
system font looks awfully tall and skinny.  You may prefer the alternate
font, which is normally used with a CGA, and will give smaller, but more
normal looking characters.  If you want to try this font, then on your
SETUP disk, rename HIFONTS.FON as HIFONTS.STD and then rename LOFONTS.FON
as HIFONTS.FON, and re-run SETUP.  (You can rename the files back again if
you change your mind.)  This is also a useful trick with the other screen
resolutions if you would rather fit more lines of text on the screen when
using the system font.  It doesn't affect other fonts such as used in WRITE.


HOW TO BUILD THE 24MHZ FEATURE CARD
-----------------------------------

To use any of these drivers except the 720x350 Monochrome, you will need to
build a 24mhz "feature card" and install it on your EGA.  This is a very
simple card, with only one main component, a crystal oscillator.  If you
would like step-by-step instructions for building this card, I recommend
getting the September 16, 1986 issue of PC Magazine, and following the
instructions on page 298.  Here are brief instructions for those who are
familiar with building electronic hardware.

You will need these parts, available from a number of suppliers, including
JDR Microdevices, 1224 S. Bascom Av., San Jose, CA 95128;  (800) 538-5000
or (800) 662-6279 in California.  The total cost for parts will be around
ten dollars plus shipping.

JDR Item #      Description
----------      ----------------------------------
OSC24.0         24.0 MHZ crystal oscillator
HDR-80          2x40 breakable header strip
P25x45          Bare 2.5 x 4.5 " prototyping board
14 PIN ST       14-pin low profile IC socket

Cut the header strip so you have two rows of 16 pins each.  Cut the
prototyping board to about 1.5 x 2 inches.  Push the short pins of the
header strip through the holes along one edge of the board and glue it in
place.  (But keep the glue off the pins - you will be soldering on them.)
In the middle of the board, push the IC socket through from the other side
and glue it in place.

Cut three short pieces of hookup wire, and connect the IC socket to the
2x16 header strip as follows (you will need to pass the wires through some
holes in the board):

IC socket       Header strip    Function
---------       ------------    --------
   7                 31         Ground
  14                 32         +5 volts
   8                 28         Signal

To identify the pins of the IC socket, note that one end of the socket has a
little notch in it.  If you are looking at the bottom of the socket (where
the pins are), and you have the notch at the top, pin 14 is at the top left.
Pin 8 is at the bottom left.  Pin 7 is at the bottom right.

To identify the pins of the header strip, observe how it will plug in to the
EGA card.  On the EGA card, the topmost pin farthest from the metal bracket
is pin 31.  Pin 32 is right below that, and pin 28 is two over from pin 32.
Most EGA cards have pins 31 and 32 marked (and pins 1 and 2).

Finally, push the crystal oscillator into the IC socket.  There will be a
little dot at one corner of the oscillator.  This end of the oscillator goes
into the notched end of the socket.  You may need to trim the oscillator
pins a little bit to get it to seat fully in the socket.

Finally, double check all your connections, and cut off excess length on the
IC socket and header pins.  (Don't cut off the header pins where they will
plug in to the EGA!  It's the pins that pass through the card that should be
trimmed.)

Plug the card into the EGA.  Check that nothing looks like it is going to
short out - you may want to cut a little piece of cardboard and put between
the adapter card and the EGA, and tape or glue it in place.  Finally,
install the EGA back into your PC.  To test it, first make sure that your
normal display operations still work!  Then, try one of the enhanced Windows
drivers.  If there's any problem, you may want to try running 120COLS.COM,
which is included with these drivers.  Just run 120COLS, and then give the
command MODE BW40, and you should have a 120 column text display on your
ECD or Multisync display (it won't work on a Monochrome display).  If the
enhanced Windows drivers and 120COLS don't work, but the EGA operates
normally otherwise, there is a problem with your feature card, and you
should remove it and double check everything.  If in doubt, check the PC
Magazine article mentioned above.


CREDITS
-------

These enhanced EGA drivers are based on the standard EGA Windows driver from
Microsoft, and were adapted by:

Michael Geary
P.O. Box 1479
Los Gatos, CA  95031
(408) 354-0175

BIX:        'geary'
GEnie:      'geary'
AT&T Mail:  'geary'
CompuServe: 76146,42
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0186

     Volume in drive A has no label
     Directory of A:\

    DISK0186 ZIP     37500   3-20-90  12:07a
    PRTSCFX  ARC     15593  12-19-84   1:57p
    MONOCG   ASM     23738   6-12-83   3:33p
    PRTSCFX  ASM      9979  12-19-84   1:56p
    PRTSCFX  COM      4212  12-19-84   1:57p
    PRTSCFX  DOC      4415   9-28-84  10:08p
    WINEGA   ARC     54424  12-09-86   3:43a
    120COLS  COM       108  10-28-86   2:00a
    E640X480 DRV     17536  12-01-86  12:41a
    E640X480 GRB        14  12-09-86   2:10a
    E640X480 LGO         9  12-09-86   2:11a
    E752X410 DRV     17536  12-01-86   1:20a
    E752X410 GRB        14  12-09-86   2:10a
    E752X410 LGO         9  12-09-86   2:11a
    E896X350 DRV     17536  12-09-86   3:34a
    E896X350 GRB        14  12-09-86   2:10a
    E896X350 LGO         9  12-09-86   2:11a
    M720X350 DRV     14464  12-09-86   3:17a
    M720X350 GRB        13  12-09-86   2:11a
    M720X350 LGO        13  12-09-86   2:11a
    README   TXT      7296  12-09-86   3:43a
           21 file(s)     224432 bytes
                           79872 bytes free
