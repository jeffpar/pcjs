---
layout: page
title: "PC-SIG Diskette Library (Disk #202)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0202/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0202"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "MIT / ISI COMM GROUP"

    This is a serial I/O package originally developed by John Romkey and
    Jerry Saltzer of MIT. It is fully interrupt-driven on transmit,
    receive, and error detection.  It will run at 9600 baud, and even
    faster if you don't plan on doing anything else.  Both the complexity
    and flexibility of this package come from its ability to support
    multiple operating systems, languages, and address sizes.
    
    System Requirements: Two disk drives, an assembler and a C
    compiler.
    
    How to Start: From DOS, enter TYPE README for the disk's menu.  Enter
    TYPE COMMMSGS.DOC for details about the MIT/ISI communications package.
    
    File Descriptions:
    
    -------- ---  MIT/ISI COMM GROUP
    COMMREAD ME   Release letter for MIT/ISI communications package
    BMAC     MAC  Assembly language macros which encapsulate the sub-
    DOS      MAC  This file comes from the Lattice c distribution.  It
    TITLE    MAC  These macros provide functional replacements for
    TSTCOM2  C    A second test program for the COM package.  It
    TSTCOM   C    A test program for the COM package.  Allows the IBM PC
    TSTEXMEM C    This program tests the routines in EXMEM.  For complete
    TSTINT   C    A test program for INT_PKG
    TSTLPT   C    A test program for LPT_PKG
    BMACTST  ASM  This program tests the BMAC macros
    COM_PKG1 ASM  Provides a library of serial port routines
    COM_PKG  ASM  The interrupt-driven COM package
    EXIO     ASM  These routines provide additional machine I/O functions
    EXMEM    ASM  These routines provide additional physical memory
    INT_PKG  ASM  These routines save and restore interrupt vectors.
    LPT_PKG  ASM  An interrupt driver and interface package for the
    COMMMSGS DOC  Details about IBM ASYNC port & BIOS and MIT/ISI
    TRUTH    H    Contains type definitions for the boolean data type
    EXMEM    H    This file defines the P_ADDR  (Physical address)
    GLASSTTY PAS  Simple dumb terminal for IBM PC. (Microsoft Pascal)
    BEAUTY   H    A set of macros and type definitions which enhance c
    README        Description of included files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BMACTST.ASM

{% raw %}
```
	INCLUDE	TITLE.MAC
	.TITLE	<BMACTST -- Test of BMAC Macros>
	.SBTTL	Declarations

; bmactst.asm  28 Nov 83  Craig Milo Rogers at USC/ISI
;	Convert to new title system.
; bmactst.asm  19 Oct 83  Craig Milo Rogers at USC/ISI
;	This file tests the BMAC macros.
;

if1
	INCLUDE	DOS.MAC
	INCLUDE BMAC.MAC
endif

	.SBHED	<TEST1 -- Simplest Function>

	PSEG
	BENTRY	TEST1
	BEND	TEST1
	ENDPS

	.SBHED	<TEST2 -- Simple Function and Call>

	PSEG
	BENTRY	TEST2
	BCALL	TEST1
	BEND	TEST2
	ENDPS

	.SBHED	<TEST3 -- Function With Arguments>
	PAGE

	PSEG
	BENTRY	TEST3	<ARG1,ARG2,ARG3>
	MOV	AX,ARG1
	MOV	AX,ARG2
	MOV	AX,ARG3
	BEND	TEST3
	ENDPS

	.SBHED	<TEST4 -- Call With Arguments>

	PSEG
	BENTRY	TEST4	<ARG1,ARG2,ARG3>
	BCALL	TEST3	<ARG1,ARG2,ARG3>
	BEND	TEST4
	ENDPS

	.SBHED	<TEST5 -- Save Some Registers>

	PSEG
	BENTRY	TEST5
	SAVE	<AX,BX,CX,DX>
	BEND	TEST5
	ENDPS

	.SBHED	<TEST6 -- Allocate Local Variables>

	PSEG
	BENTRY	TEST6
	AUTO	<VAR1,VAR2,VAR3>
	MOV	AX,VAR1
	MOV	AX,VAR2
	MOV	AX,VAR3
	BEND	TEST6
	ENDPS

	.SBHED	<TEST7 -- Save Regs and Allocate Locals>

	PSEG
	BENTRY	TEST7
	AUTO	<VAR1,VAR2,VAR3>
	SAVE	<AX,BX,CX,DX>
	MOV	AX,VAR1
	MOV	BX,VAR2
	MOV	CX,VAR3
	BEND	TEST7
	ENDPS

	.SBHED	<TEST8 -- Redefine Names with New Values>

	PSEG
	BENTRY	TEST8	<ARG3,ARG2,ARG1>
	AUTO	<VAR3,VAR2,VAR1>
	SAVE	<DX,BX,CX,AX>
	MOV	AX,ARG1
	MOV	BX,ARG2
	MOV	CX,ARG3
	MOV	AX,VAR1
	MOV	BX,VAR2
	MOV	CX,VAR3
	BEND	TEST8
	ENDPS

	END
```
{% endraw %}

## COM_PKG.ASM

{% raw %}
```
	INCLUDE	TITLE.MAC
	.TITLE	<COM_PKG -- COMn: Routines for Lattice C>
	.SBTTL	<History and Copyright Notice>

; com_pkg.asm  1 Dec 83  Craig Milo Rogers at USC/ISI
;	Corrected a few typos.  Added Deficiencies section.
;	Clear interrupt controller before polling UART.
; com_pkg.asm  20 Nov 83  Craig Milo Rogers at USC/ISI
;	Use int_pkg routines to set/restore interrupt vectors.
; com_pkg.asm  15 Nov 83  Craig Milo Rogers at USC/ISI
;	Converted to PDP-11-style TITLEs.
;	Converted control info to a STRUC.
; com_pkg.asm  10 Nov 83  Craig Milo Rogers at USC/ISI
;	Bug fixes in initialization code.
; com_pkg.asm  30 Oct 83  Craig Milo Rogers at USC/ISI
;	Support COM1: and COM2:.
; com_pkg.asm  28 Oct 83  Craig Milo Rogers at USC/ISI
;	Modified to take transmit and receive buffer addresses and
; lengths as initialization arguments.
; com_pkg.asm  26 Oct 83  Craig Milo Rogers at USC/ISI
;	These routines provide an interrupt-driven circular buffer
; interface to the COM1: device.  This version interfaces with the
; multi-model Lattice C compiler version 1.05.  Earlier history:
;
; COM_PKG1 provides a library of serial port routines
; Adapted from code by John Romkey and Jerry Saltzer of MIT
; by Richard Gillmann (GILLMANN@ISIB), 1983
;

	.SBHED	Overview

;	This is a module of routines for interfacing with the
; COM1: communications interface on the IBM PC.  The code has
; been carefully constructed to properly drive the 8250 UART
; and the 8259 Interrupt Controller.  External circular buffers
; are used for transmit and receive.

;	Entry points (Lattice C 1.05 calling conventions):

; void
; com_ini(unit, divisor, tbuf, tbuflen, rbuf, rbuflen)
;			/* Initializes port and interrupt vector. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */
; int divisor;		/* Baud rate generator divisor. */
; char *tbuf;		/* Transmit buffer address. */
; int tbuflen;		/* Transmit buffer length. */
; char *rbuf;		/* Receive buffer address. */
; int rbuflen;		/* Receive buffer length. */

; void
; com_trm(unit)		/* Turns off interrupts from the aux port. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */

; void
; com_doff(unit)	/* Turns off DTR. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */

; void
; com_don(unit)		/* Turns on DTR. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */

; int			/* Number of characters in input buffer. */
; com_icnt(unit)	/* Returns number of characters in input buffer. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */

; int			/* Next character in input buffer or EOF. */
; com_getc(unit)	/* Reads next character in input buffer. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */

; int			/* Number of free bytes in output buffer. */
; com_ocnt(unit)	/* Returns number of free bytes in output buffer. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */

; bool			/* Returns FALSE if no more room. */
; com_putc(unit, ch)	/* Writes a character to the output buffer. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */
; char ch;		/* The character to write. */

; bool			/* Returns FALSE if no more room. */
; com_loopc(unit, ch)	/* Writes a character to the input buffer. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */
; char ch;		/* The character to write. */

; void
; com_bon(unit)		/* Turns on BREAK. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */

; void
; com_boff(unit)	/* Turns off BREAK. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */

; void
; com_break(unit)	/* Sends complete BREAK sequence. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */

	.SBHED	Deficiencies

; 1)	The initialization routine should pre-calculate the 8250
;	addresses, and store them in the control block.  This will
;	save a few percent of code space, and speed up the interrupt
;	service routine.

; 2)	There should be a puts() routine to optimize the common case
;	of transmitting a buffer of characters.  A gets() routine
;	would be desirable for symmetry, although the time savings is
;	less likely to be significant.

; 3)	There should be finer control over the UART initialization.
;	It might also be nice to be able to change UART parameters
;	dynamically.

; 4)	There should be a way to respond to modem control signals,
;	such as Ring Indicator, and to generate modem control signals
;	besides DTR.

; 5)	The com_break() routine has it's name truncated.  This should be
;	repaired when C supports long names.  The int_setup()
;	external, etc. are also affected.

; 6)	There should be provision for addional COM units.

; 7)	The COM register base addresses should be obtained from the BIOS.

; 8)	It should be possible for COM units to share an interrupt level.

; 9)	The error returns from int_setup() and int_restore() should be
;	checked.

; 10)	Perhaps the initialization code can be rewritten so interrupts
;	don't have to be disabled for quite so long.

	.SBHED	Declarations

IF1
	INCLUDE	DOS.MAC	; C segments.
	INCLUDE BMAC.MAC	; C calling conventions.
ENDIF

				; int_pkg routines:
	BEXTRN	INT_SETU	; Setup an interrupt vector.
	BEXTRN	INT_REST	; Restore an interrupt vector.

				; COM1: parameters:
COM1_INT     EQU     4		; Interrupt number for comm. port.
COM1_BASE    EQU     3F8H	; Base address of 8250 registers.

				; COM2: parameters:
COM2_INT     EQU     3		; Interrupt number for comm. port.
COM2_BASE    EQU     2F8H	; Base address of 8250 registers.


INT_OFF EQU     08H		; Converts 8259 interrupt numbers to
				; 8088 interrupt numbers.

				; 8250 device registers:
DATREG  EQU     0H		; Data register.
DLL     EQU     0H		; Low divisor latch.
DLH     EQU     1H		; High divisor latch.
IER     EQU     1H		; Interrupt enable register.
IIR     EQU     2H		; Interrupt identification register.
LCR     EQU     3H		; Line control register.
MCR     EQU     4H		; Modem control register.
LSR     EQU     5H		; Line status register.
MSR     EQU     6H		; Modem status register.

DLA     EQU     80H             ; Divisor latch access.
MODE    EQU     03H             ; 8-bits, no parity.
DTR     EQU     0BH             ; Bits to set dtr line.
DTR_OF  EQU     00H             ; Turn off dtr, rts, and the interupt driver.
THRE    EQU     20H             ; Mask to find status of xmit holding reg.
RXINT   EQU     01H             ; Enable data available interrupt.
TXINT   EQU     02H             ; Enable tx holding register empty interrupt.
TCHECK  EQU     20H             ; Mask for checking tx reg stat on interrupt.
RCHECK  EQU     01H             ; Mask for checking rx reg stat on interrupt.
INT_PEND EQU    01H             ; There is an interrupt pending.
MSTAT   EQU     00H             ; Modem status interrupt.
WR      EQU     02H             ; Ready to xmit data.
RD      EQU     04H             ; Received data interrupt.
LSTAT   EQU     06H             ; Line status interrupt.
ACK     EQU     244             ; Acknowledge symbol.
PARITY  EQU     7FH             ; Bits to mask off parity.
BREAK   EQU     40H             ; Bits to cause break.

				; 8259 Interrupt Controller:
IMR     EQU     21H             ; Interrupt mask register.
OCW2    EQU     20H             ; Operational control word on 8259.
EOI     EQU     60H		; Specific end of interrupt.

				; C return values:
TRUE    EQU     1               ; Truth.
FALSE   EQU     0               ; Falsehood.


COMX_CTRL	STRUC			; Control parameters for COMn:

TBUF_SEG	DW	?	; Transmit buffer segment number.
TBUF_OFF	DW	?	; Transmit buffer offset.
TBUF_SIZE	DW	?	; Transmit buffer size.

START_TDATA     DW      ?       ; Index to first character in x-mit buffer.
END_TDATA       DW      ?       ; Index to first free space in x-mit buffer.
SIZE_TDATA      DW      ?       ; Number of characters in x-mit buffer.

RBUF_SEG	DW	?	; Receive buffer segment number.
RBUF_OFF	DW	?	; Receive buffer offset.
RBUF_SIZE	DW	?	; Receive buffer size.

START_RDATA     DW      ?       ; Index to first character in rec. buffer.
END_RDATA       DW      ?       ; Index to first free space in rec. buffer.
SIZE_RDATA      DW      ?       ; Number of characters in rec. buffer.

COMX_INT	DW	?	; Interrupt number for comm. port.
COMX_BASE	DW	?	; I/O base address of 8250 registers.

COMX_CTRL	ENDS		; End of the structure definition.

	.SBHED	<Data Storage>

	DSEG
COM1_CTRL	COMX_CTRL <>	; Control parameters for COM1:.
COM2_CTRL	COMX_CTRL <>	; Control parameters for COM2:.
	ENDDS

	PSEG			; All the rest is code.

	.SBHED	<COM1: and COM2: Specific Interrupt Handlers>
;
; DATASEG - DS for Use by Interrupt Handler
;
;	WARNING!
;	Note the impure use of DATASEG below.  This code is not ROMmable.
;
DATASEG DW      0		; Holds our data segment number.

;
; INT_HNDLR1 - Handles Interrupts Generated by COM1:
;
INT_HNDLR1 PROC  FAR		;;; Enter here on interrupt.
	PUSH	SI		;;; Save old source index.
	MOV	SI,OFFSET COM1_CTRL	;;; Get pointer to control block.

	JMP SHORT INT_COMMON	;;; Go join common interrupt handler.


;
; INT_HNDLR2 - Handles Interrupts Generated by COM2:
;
INT_HNDLR2 PROC  FAR		;;; Enter here on interrupt.
	PUSH	SI		;;; Save old source index.
	MOV	SI,OFFSET COM2_CTRL	;;; Get pointer to control block.
				;;; Fall into common interrupt handler:

	.SBHED	<Common Interrupt Handler>

INT_COMMON:
        PUSH    DS		;;; Save data segment register.
        PUSH	CS:DATASEG	;;; Set up new data segment.
        POP	DS		;;;
        PUSH    ES		;;; Save previous context on existing stack.
        PUSH    BP		;;;
        PUSH    DI		;;;
        PUSH    AX		;;;
        PUSH    BX		;;;
        PUSH    CX		;;;
        PUSH    DX		;;;

;;; Clear the interrupt controller flag before polling interrupt sources
;;; on the UART to avoid losing additional COM interrupts.

        MOV     DX,OCW2         ;;; Tell the 8259 that I'm done.
        MOV     AL,EOI		;;; Get the End-of-Interrupt code.
	OR	AL,BYTE PTR [SI].COMX_INT ;;; Set to specific int. number.
        OUT     DX,AL		;;;

;;; Find out where interrupt came from and jump to routine to handle it:
	MOV	DX,[SI].COMX_BASE	;;;
        ADD	DX,IIR		;;;
        IN      AL,DX		;;;
        CMP     AL,RD		;;;
	 JZ	RX_INT          ;;; If it's from the receiver.
        CMP     AL,WR		;;;
         JZ	TX_INT          ;;; If it's from the transmitter.
        CMP     AL,LSTAT	;;;
         JZ	LSTAT_INT       ;;; Interrupt becuase of line status.
        CMP     AL,MSTAT	;;;
         JZ	MSTAT_INT       ;;; Interrupt because of modem status.
        JMP     FAR PTR INT_END ;;; Interrupt when no int. pending, go away.

LSTAT_INT:
	MOV	DX,[SI].COMX_BASE	;;;
        ADD	DX,LSR          	;;; Clear interrupt.
        IN      AL,DX			;;;
        JMP     REPOLL          	;;; See if any more interrupts.

MSTAT_INT:
	MOV	DX,[SI].COMX_BASE	;;;
        ADD	DX,MSR          	;;; Clear interrupt.
        IN      AL,DX			;;;
        JMP     REPOLL          	;;; See if any more interrupts.

TX_INT:
	MOV	DX,[SI].COMX_BASE	;;; 
        ADD	DX,LSR			;;;
        IN      AL,DX			;;;
        AND     AL,TCHECK		;;;
	 JNZ	GOODTX          	;;; Good interrupt.
        JMP     REPOLL          	;;; See if any more interrupts.

GOODTX: CMP     [SI].SIZE_TDATA,0	;;; See if any more data to send.
	 JNE	HAVE_DATA       	;;; If not equal then data to send.

;;; If no data to send then reset tx interrupt and return.
	MOV	DX,[SI].COMX_BASE	;;;
        ADD	DX,IER			;;;
        MOV     AL,RXINT		;;;
        OUT     DX,AL			;;;
        JMP     REPOLL			;;;

HAVE_DATA:
	MOV	ES,[SI].TBUF_SEG	;;; Get transmit buffer segment num.
	MOV	DI,[SI].TBUF_OFF	;;; Get transmit buffer offset.
        MOV     BX,[SI].START_TDATA	;;; BX points to next char to be sent.
	MOV	DX,[SI].COMX_BASE	;;;
        ADD	DX,DATREG       	;;; DX equals port to send data to.
        MOV     AL,ES:[BX+DI]   	;;; Get data from buffer.
        OUT     DX,AL           	;;; Send data.
        INC     BX              	;;; Increment START_TDATA.
        CMP     BX,[SI].TBUF_SIZE	;;; See if gone past end.
	 JB	NTADJ           	;;; If not then skip.
        XOR     BX,BX			;;; Reset to beginning.
NTADJ:  MOV     [SI].START_TDATA,BX	;;; Save START_TDATA.
        DEC     [SI].SIZE_TDATA		;;; One less character in xmit buffer.
        JMP     REPOLL			;;;

RX_INT:
	MOV	DX,[SI].COMX_BASE	;;;
	ADD	DX,LSR			;;; Check and see if read is real.
        IN      AL,DX			;;;
        AND     AL,RCHECK       	;;; Look at receive data bit.
         JNZ	GOOD_RX         	;;; Real, go get byte.
        JMP     REPOLL          	;;; Go look for other interrupts.

GOOD_RX:
	MOV	DX,[SI].COMX_BASE	;;;
        ADD	DX,DATREG		;;;
        IN      AL,DX           	;;; Get data.
	MOV	DX,[SI].RBUF_SIZE	;;; Get size of buffer.
        CMP     [SI].SIZE_RDATA,DX	;;; See if any room for data.
	 JAE	REPOLL          ;;; If no room then look for more interrupts.
	MOV	ES,[SI].RBUF_SEG	;;; Get receive buffer segment number.
	MOV	DI,[SI].RBUF_OFF	;;; Get receive buffer offset.
        MOV     BX,[SI].END_RDATA    ;;; BX points to free space.
        MOV     ES:[BX+DI],AL   ;;; Send data to buffer.
        INC     [SI].SIZE_RDATA      ;;; Got one more character.
        INC     BX              ;;; Increment END_RDATA pointer.
        CMP     BX,DX		;;; See if gone past end.
         JB	NRADJ           ;;; If not then skip,
        XOR     BX,BX		;;;   else adjust to beginning.
NRADJ:  MOV     [SI].END_RDATA,BX    ;;; Save value.

REPOLL:
	MOV	DX,[SI].COMX_BASE	;;; Read the line status register.
	ADD	DX,LSR          ;;; We always expect receive data, so
        IN      AL,DX           ;;;   check status to see if any is ready.
	MOV	BL,AL		;;; Save for transmit check, below.
        AND     AL,RCHECK       ;;; Get received data bit.
         JNZ	GOOD_RX         ;;; Yes, go accept the byte.

        ADD	DX,(IER-LSR)    ;;; Look at transmit condition
        IN      AL,DX           ;;;   to see if we are enabled to send data.
        AND     AL,TXINT	;;;
         JZ	INT_END         ;;; Not enabled, so go away.
        AND     BL,TCHECK	;;; Check saved status for xmit done.
         JZ	INT_END		;;;
        JMP     GOODTX          ;;; Transmitter is finished, go get more data.

INT_END:
        POP     DX		;;; Restore previous context.
        POP     CX		;;;
        POP     BX		;;;
        POP     AX		;;;
        POP     DI		;;;
        POP     BP		;;;
        POP     ES		;;;
        POP     DS		;;;
	POP	SI		;;;
        IRET			;;; Return from interrupt.

INT_HNDLR2 ENDP
INT_HNDLR1 ENDP

	.SBHED	<SET_SI -- Select COM Control Block>

;	This internal routine is called to point to the
; appropriate control block.
;
; Calling sequence:
;	MOV	AX,UNIT
;	CALL	SET_SI

SET_SI	PROC	NEAR
	CMP	AX,1		; Is this for unit 1?
	 JNE	SET_CTRL2	;   (must be for unit 2)

	MOV	SI,OFFSET COM1_CTRL ; Point to COM1: control area.
	RET			; Return to caller.

SET_CTRL2:
	MOV	SI,OFFSET COM2_CTRL ; Point to COM2: control area.
	RET			; Return to caller.

SET_SI	ENDP

	.SBHED	<COM_INI -- Initialize Communication Port>

; void
; com_ini(unit, divisor, tbuf, tbuflen, rbuf, rbuflen)
;			/* Initializes port and interrupt vector. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */
; int divisor;		/* Baud rate generator divisor. */
; char *tbuf;		/* Transmit buffer address. */
; int tbuflen;		/* Transmit buffer length. */
; char *rbuf;		/* Receive buffer address. */
; int rbuflen;		/* Receive buffer length. */

;	Initialize the Intel 8250 and set up interrupt vector to int_hndlr.

IF LDATA
	BENTRY	COM_INI	<UNIT,DIVISOR,TBOFF,TBSEG,TBLEN,RBOFF,RBSEG,RBLEN>
ELSE
	BENTRY	COM_INI	<UNIT,DIVISOR,TBOFF,TBLEN,RBOFF,RBLEN>
ENDIF
	AUTO	<HANDLR>

	MOV	AX,UNIT		; Get the unit number.
	CALL	SET_SI		; Point to proper control area.
				; (Leaves AX unchanged)
	CMP	AX,2		; Initializing unit #2?
	 JE	INIT2		;   (yes)

				; Select constants for unit #1:
	MOV	AX,COM1_INT	; Interrupt number.
	MOV	BX,COM1_BASE	; I/O base address.
        MOV	CX,OFFSET INT_HNDLR1	; Start of interrupt handler.

	JMP SHORT INITCOM	; Go join common code.

INIT2:				; Select constants for unit #2:
	MOV	AX,COM2_INT	; Interrupt number.
	MOV	BX,COM2_BASE	; I/O base address.
        MOV	CX,OFFSET INT_HNDLR2	; Start of interrupt handler.
				; Fall into INITCOM:

INITCOM:
	MOV	[SI].COMX_INT,AX	; Save the interrupt number.
	MOV	[SI].COMX_BASE,BX	; Save the I/O base address.
	MOV	HANDLR,CX	; Save the interrupt handler starting address.

        MOV     AX,DS		; Copy our data segment number.
IFE LDATA
	MOV	ES,AX		; Save for buffer addresses.
ENDIF
        MOV     CS:DATASEG,AX	; Store segment # in code space (gulp!).

IF LDATA
	MOV	AX,TBSEG	; Get the transmit buffer segment number.
ENDIF
	MOV	[SI].TBUF_SEG,AX	; Save it.
	MOV	BX,TBOFF	; Copy the transmit buffer offset.
	MOV	[SI].TBUF_OFF,BX	;
	MOV	BX,TBLEN	; Copy the transmit buffer length.
	MOV	[SI].TBUF_SIZE,BX	;

IF LDATA
	MOV	AX,RBSEG	; Get the receive buffer segment number.
ENDIF
	MOV	[SI].RBUF_SEG,AX	; Save it.
	MOV	AX,RBOFF	; Copy the receive buffer offset.
	MOV	[SI].RBUF_OFF,AX	;
	MOV	AX,RBLEN	; Copy the receive buffer length.
	MOV	[SI].RBUF_SIZE,AX	;

	XOR	AX,AX		; Clear the accumulator.
	MOV	[SI].START_TDATA,AX	; Reset start of transmitted data.
	MOV	[SI].END_TDATA,AX	; Reset end of transmitted data.
	MOV	[SI].SIZE_TDATA,AX	; Reset number of transmitted chars.

	MOV	[SI].START_RDATA,AX	; Reset start of received data.
	MOV	[SI].END_RDATA,AX	; Reset end of received data.
	MOV	[SI].SIZE_RDATA,AX	; Reset number of received chars.

        CLI			; ******* Disable Interrupts *******

	MOV	DX,[SI].COMX_BASE	;;;
        ADD	DX,MCR		;;; Reset the UART (AX is still zero).
        OUT     DX,AL		;;;

        ADD	DX,(LSR-MCR)    ;;; Reset line status condition.
        IN      AL,DX		;;;
        ADD	DX,(DATREG-LSR)	;;; Reset receive data condition.
        IN      AL,DX		;;;
        ADD	DX,(MSR-DATREG)	;;; Reset modem deltas and conditions.
        IN      AL,DX		;;;

        ADD     DX,(LCR-MSR)	;;; Set baud rate with the passed argument.
        MOV     AL,DLA+MODE	;;;
        OUT     DX,AL		;;;
        ADD	DX,(DLL-LCR)	;;;
        MOV     AX,DIVISOR	;;;
        OUT     DX,AL		;;; Low byte of passed argument.
        ADD	DX,(DLH-DLL)	;;;
	MOV	AL,AH		;;;
        OUT     DX,AL	        ;;; High byte of passed argument.

        ADD	DX,(LCR-DLH)	;;; Set 8250 to 8 bits, no parity.
        MOV     AL,MODE		;;;
        OUT     DX,AL		;;;

	PUSH	SI			;;; Save pointer to COM block.
	MOV	AX,[SI].COMX_INT	;;; Get the 8259 interrupt number.
	ADD	AX,INT_OFF		;;; Convert to 8086 interrupt number.
	BCALL	INT_SETU <AX HANDLR CS>	;;; Call int_setup(vec, newip, newcs).
	POP	SI			;;; Restore data block pointer.

				;;; Enable interrupts on 8259 and 8250:
        IN      AL,IMR          ;;; Get current enable bits on 8259.
	MOV	CL,BYTE PTR [SI].COMX_INT	;;; Get interrupt number.
	MOV	BL,1		;;; Convert to
	SHL	BL,CL		;;;   bit position.
	NOT	BL		;;; Clear current
        AND     AL,BL		;;;   interrupt bit.
        OUT     IMR,AL		;;; Set enable on 8259.
	MOV	DX,[SI].COMX_BASE	;;;
        ADD	DX,IER          ;;; Enable interrupts on 8250.
        MOV     AL,RXINT	;;;
        OUT     DX,AL		;;;
        ADD	DX,(MCR-IER)	;;; Set dtr and enable int driver.
        MOV     AL,DTR		;;;
        OUT     DX,AL		;;;

        STI			;;; ******* Enable Interrupts *******
				;;; (Next instruction still disabled)
	BEND	COM_INI

	.SBHED	<COM_TRM -- Turn Off Interrupts and Shutdown>

; void
; com_trm(unit)		/* Turns off interrupts from the COM1: port. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */

	BENTRY	COM_TRM <UNIT>

	MOV	AX,UNIT		; Point to COM1: or COM2: save area.
	CALL	SET_SI		;

	MOV	DX,[SI].COMX_BASE
	ADD	DX,IER		; Turn off 8250.
        MOV     AL,0
        OUT     DX,AL

        IN      AL,IMR		; Turn off 8259.
	MOV	CL,BYTE PTR [SI].COMX_INT	; Get interrupt number.
	MOV	BL,1		; Convert to
	SHL	BL,CL		;   bit position.
        OR      AL,BL		; Disable this interrupt.
        OUT     IMR,AL

				; Reset interrupt vector:
	MOV	AX,[SI].COMX_INT	; Get the 8259 interrupt number.
	ADD	AX,INT_OFF		; Convert to 8086 interrupt number.
	BCALL	INT_REST <AX>		; Call int_restore(vec).

	BEND	COM_TRM

	.SBHED	<COM_DOFF -- Turn off DTR>

; void
; com_doff(unit)	/* Turns off DTR. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */

; 	Turns off DTR to tell modems that the terminal has gone away
; and to hang up the phone.

	BENTRY	COM_DOFF <UNIT>

	MOV	AX,UNIT		; Point to COM1: or COM2: save area.
	CALL	SET_SI		;

	MOV	DX,[SI].COMX_BASE
        ADD	DX,MCR
        MOV     AL,DTR_OF
        OUT     DX,AL

	BEND	COM_DOFF

	.SBHED	<COM_DON -- Turn On DTR>

; void
; com_don(unit)		/* Turns on DTR. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */

	BENTRY	COM_DON <UNIT>

	MOV	AX,UNIT		; Point to COM1: or COM2: save area.
	CALL	SET_SI		;

	MOV	DX,[SI].COMX_BASE
        ADD	DX,MCR
        MOV     AL,DTR
        OUT     DX,AL

	BEND	COM_DON

	.SBHED	<COM_ICNT -- Return Number of Input Bytes>

; int			/* Number of characters in input buffer. */
; com_icnt(unit)	/* Returns number of characters in input buffer. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */

	BENTRY	COM_ICNT <UNIT>

	MOV	AX,UNIT		; Point to COM1: or COM2: save area.
	CALL	SET_SI		;

        MOV     AX,[SI].SIZE_RDATA   ; Get number of bytes used.

	BEND	COM_ICNT

	.SBHED	<COM_GETC -- Get the Next Received Character>

; int			/* Next character in input buffer or EOF. */
; com_getc(unit)	/* Reads next character in input buffer. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */
;
;	Returns the next character from the receive buffer and
; removes it from the buffer.

	BENTRY	COM_GETC <UNIT>

	MOV	AX,UNIT		; Point to COM1: or COM2: save area.
	CALL	SET_SI		;

	CMP	[SI].SIZE_RDATA,0	; Is there anything in the buffer?
	 JE	L12		;   (nothing)

	MOV	ES,[SI].RBUF_SEG	; Get receive buffer segment number.
	MOV	DI,[SI].RBUF_OFF	; Get receive buffer offset.
        MOV     BX,[SI].START_RDATA	; Fetch next data byte.
        MOV     AL,ES:[BX+DI]   ; Get data from buffer.
        XOR     AH,AH

        INC     BX              ; Bump START_RDATA so it points at next char.
        CMP     BX,[SI].RBUF_SIZE	; See if past end.
         JB	L10             ; If not then skip.
        XOR     BX,BX		; Adjust to beginning.
L10:    MOV     [SI].START_RDATA,BX  ; Save the new START_RDATA value.

        DEC     [SI].SIZE_RDATA      ; One less character.
	JMP SHORT L14		; Skip to common return code.

L12:	MOV	AX,-1		; Indicate no characters available.

L14:	BEND	COM_GETC

	.SBHED	<COM_OCNT -- Returns Number of Free Bytes>

; int			/* Number of free bytes in output buffer. */
; com_ocnt(unit)	/* Returns number of free bytes in output buffer. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */

	BENTRY	COM_OCNT <UNIT>

	MOV	AX,UNIT		; Point to COM1: or COM2: save area.
	CALL	SET_SI		;

        MOV     AX,[SI].TBUF_SIZE	; Get the size of the x-mit buffer.
        SUB     AX,[SI].SIZE_TDATA   ; Subtract the number of bytes used.

	BEND	COM_OCNT

	.SBHED	<COM_PUTC -- Queue a Character for Output>

; bool			/* Returns FALSE if no more room. */
; com_putc(unit, ch)	/* Writes a character to the output buffer. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */
; char ch;		/* The character to write. */

;	Note that there is an implicit interlock with the interrupt
; level.  It is OK for an interrupt to occur between incrementing
; SIZE_TDATA and the end of the code that monkeys with the interrupt
; enable bits.  The worst that can happen is that there will be an
; extra interrupt, which will be ignored (because SIZE_TDATA will be
; zero again by then).

	BENTRY	COM_PUTC <UNIT,OCHAR>

	MOV	AX,UNIT		; Point to COM1: or COM2: save area.
	CALL	SET_SI		;

        MOV     AX,[SI].TBUF_SIZE	; Get the size of the x-mit buffer.
        SUB     AX,[SI].SIZE_TDATA   ; Subtract the number of bytes used.
	 JE	L24		; No more free space.

	MOV	ES,[SI].TBUF_SEG	; Get transmit buffer segment number.
	MOV	DI,[SI].TBUF_OFF	; Get transmit buffer offset.
        MOV     BX,[SI].END_TDATA    ; BX points to free space.
        MOV     AL,OCHAR        ; Move data from stack to x-mit buffer.
        MOV     ES:[BX+DI],AL
        INC     BX              ; Increment END_TDATA to point to free space.
        CMP     BX,[SI].TBUF_SIZE	; See if past end.
         JB      L20		; If not then skip.
        XOR     BX,BX		; Adjust to beginning.
L20:	MOV     [SI].END_TDATA,BX    ; Save new END_TDATA.

				; (Implicit interlock with interrupt level):
        INC     [SI].SIZE_TDATA      ; One more character in x-mit buffer.

	MOV	DX,[SI].COMX_BASE
        ADD	DX,IER          ; See if tx interrupts are enabled.
        IN      AL,DX
        AND     AL,TXINT
        OR      AL,AL
         JNZ     L22
        MOV     AL,RXINT+TXINT  ; If not then set them.
        OUT     DX,AL
L22:				; (End of implicit interlock)

	MOV	AX,TRUE		; Indicate all's OK.
	JMP SHORT L26		; Go join common return code.

L24:	MOV	AX,FALSE	; No more space in buffer.

L26:	BEND	COM_PUTC

	.SBHED	<COM_LOOPC -- Write to the Input Buffer>

; bool			/* Returns FALSE if no more room. */
; com_loopc(unit, ch)	/* Writes a character to the input buffer. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */
; char ch;		/* The character to write. */

	BENTRY	COM_LOOPC <UNIT,OCHAR>

	MOV	AX,UNIT		; Point to COM1: or COM2: save area.
	CALL	SET_SI		;

        CLI			; ******* Disable Interrupts *******
	MOV	DX,[SI].RBUF_SIZE ;;; Get the size of the receive buffer.
        CMP     [SI].SIZE_RDATA,DX	;;; See if any room for more data.
         JAE	L32             ;;; If no room then quit.

	MOV	ES,[SI].RBUF_SEG	;;; Get receive buffer segment number.
	MOV	DI,[SI].RBUF_OFF	;;; Get receive buffer offset.
        MOV     BX,[SI].END_RDATA    ;;; BX points to free space.
        MOV     AL,OCHAR	;;; Get data.
        MOV     ES:[BX+DI],AL	;;; Send data to buffer.
        INC     [SI].SIZE_RDATA      ;;; Got one more character.
        INC     BX              ;;; Increment END_RDATA pointer.
        CMP     BX,DX		;;; See if gone past end.
         JL	L30             ;;; If not then skip,
        XOR     BX,BX		;;;   else adjust to beginning.
L30:    MOV     [SI].END_RDATA,BX    ;;; Save value.

        STI			;;; ******* Enable Interrupts *******
	MOV	AX,TRUE		;;; Indicate success.
	JMP SHORT L34		; Go join common return code.

L32:	STI			;;; ******* Enable Interrupts *******
	MOV	AX,FALSE	;;; Indicate no more room.

L34:	BEND	COM_LOOPC

	.SBHED	<COM_BON -- Turn On BREAK Condition>

; void
; com_bon(unit)		/* Turns on BREAK. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */
;
;	Causes the UART to send the BREAK condition.

	BENTRY	COM_BON <UNIT>

	MOV	AX,UNIT		; Point to COM1: or COM2: save area.
	CALL	SET_SI		;

	MOV	DX,[SI].COMX_BASE
	ADD	DX,LCR
        MOV     AL,BREAK        ; Set break condition.
        OUT     DX,AL

	BEND	COM_BON

	.SBHED	<COM_BOFF -- Turn Off BREAK Condition>

; void
; com_boff(unit)	/* Turns off BREAK. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */
;
;	Returns the transmit line to the normal state.

	BENTRY	COM_BOFF <UNIT>

	MOV	AX,UNIT		; Point to COM1: or COM2: save area.
	CALL	SET_SI		;

	MOV	DX,[SI].COMX_BASE
	ADD	DX,LCR
        MOV     AL,MODE		; Restore the line control register.
        OUT     DX,AL

	BEND	COM_BOFF

	.SBHED	<COM_BREAK -- Complete BREAK Sequence>

; void
; com_break(unit)	/* Sends complete BREAK sequence. */
; int unit;		/* 1 ==> COM1:, 2 ==> COM2:. */

	BENTRY	COM_BREA <UNIT>

	MOV	AX,UNIT		; Point to COM1: or COM2: save area.
	CALL	SET_SI		;

	MOV	DX,[SI].COMX_BASE
	ADD	DX,LCR
        MOV     AL,BREAK        ; Set break condition.
        OUT     DX,AL

	MOV	CX,0		; Wait a while.
WAIT:	LOOP	WAIT

        MOV     AL,MODE		; Restore the line control register.
        OUT     DX,AL

	BEND	COM_BREA

	ENDPS
        END
```
{% endraw %}

## COM_PKG1.ASM

{% raw %}
```
	title	COM_PKG1
	page	60,132
;
; COM_PKG1 library of serial I/O routines
; For the IBM PC's first serial port
; Uses Microsoft Pascal calling conventions
;
; Adapted from code by John Romkey and Jerry Saltzer of MIT
; by Richard Gillmann (GILLMANN@ISIB), 1983
;
; package entry points (MS Pascal calling conventions) are:
;
; init_au(divisor:word)	initializes port and interrupt vector
; close_a		turns off interrupts from the aux port
; dtr_off		turns off dtr
; dtr_on		turns on dtr
; crcnt : word		returns number of characters in input buffer
; cread : byte		reads next character in input buffer
; cwcnt : word		returns number of free bytes in output buffer
; cwrit(ch:byte)	writes a character to the output buffer
; wlocal(ch:byte)	writes a character to the input buffer
; make_br		causes a break to be sent
;
	page
rsize	equ	2048		; size of receive buffer
tsize	equ	256		; size of transmit buffer
base	equ	3f0h		; base of address of aux. port registers
int	equ	0ch		; interrupt number for aux port
int_off	equ	int*4		; offset of interrupt vector
datreg	equ	base + 8h	; data register
dll	equ	base + 8h	; low divisor latch
dlh	equ	base + 9h	; high divisor latch
ier	equ	base + 9h	; interrupt enable register
iir	equ	base + 0ah	; interrupt identification register
lcr	equ	base + 0bh	; line control register
mcr	equ	base + 0ch	; modem control register
lsr	equ	base + 0dh	; line status register
msr	equ	base + 0eh	; modem status register
dla	equ	80h		; divisor latch access
mode	equ	03h		; 8-bits, no parity
dtr	equ	0bh		; bits to set dtr line
dtr_of	equ	00h		; turn off dtr, rts, and the interupt driver
thre	equ	20h		; mask to find status of xmit holding register
rxint	equ	01h		; enable data available interrupt
txint	equ	02h		; enable tx holding register empty interrupt
tcheck	equ	20h		; mask for checking tx reg status on interrupt
rcheck	equ	01h		; mask for checking rx reg status on interrupt
imr	equ	21h		; interuprt mask register
int_mask equ	0efh		; mask to clear bit 4
int_pend equ	01h		; there is an interrupt pending
mstat	equ	00h		; modem status interrupt
wr	equ	02h		; ready to xmit data
rd	equ	04h		; received data interrupt
lstat	equ	06h		; line status interrupt
ack	equ	244		; acknowledge symbol
parity	equ	7fh		; bits to mask off parity
ocw2	equ	20h		; operational control word on 8259
eoi	equ	64h		; specific end of interrupt 4
break	equ	40h		; bits to cause break
true	equ	1		; truth
false	equ	0		; falsehood
	page
data	segment public 'data'
int_offset	dw	0	; the original interrupt offset
int_segment	dw	0	; the original interrupt segment
start_tdata	dw	0	; index to first character in x-mit buffer
end_tdata	dw	0	; index to first free space in x-mit buffer
size_tdata	dw	0	; number of characters in x-mit buffer
start_rdata	dw	0	; index to first character in rec. buffer
end_rdata	dw	0	; index to first free space in rec. buffer
size_rdata	dw	0	; number of characters in rec. buffer
tdata		db	tsize dup(?)	; transmit buffer
rdata		db	rsize dup(?)	; receive buffr
data	ends
dgroup	group	data
	page
	assume	cs:auxhndlr,ds:dgroup,ss:dgroup
auxhndlr segment 'code'

	public	init_au		; initializes port and interrupt vector
	public	close_a		; turns off interrupts from the aux port
	public	dtr_off		; turns off dtr
	public	dtr_on		; turns on dtr
	public	crcnt		; returns number of characters in input buffer
	public	cread		; reads next character in input buffer
	public	cwcnt		; returns no. of free bytes in output buffer
	public	cwrit		; writes a character to output buffer
	public	wlocal		; writes a character to the input buffer
	public	make_br		; causes a break to be sent
	page
;
; int_hndlr - handles interrupts generated by the aux. port
;
dataseg	dw	0
int_hndlr proc	far
	push    bp
	push    ds
	push    di
	push    ax
	push    bx
	push    cx
	push    dx

; set up data segment
	mov	ax,cs:dataseg
	mov	ds,ax

; find out where interrupt came from and jump to routine to handle it
	mov     dx,iir
	in	al,dx
	cmp     al,rd
	jz      rx_int		; if it's from the receiver
	cmp     al,wr
	jz      tx_int          ; if it's from the transmitter
	cmp     al,lstat
	jz      lstat_int       ; interrupt becuase of line status
	cmp     al,mstat
	jz      mstat_int       ; interrupt because of modem status
	jmp     far ptr int_end	; interrupt when no interrupt pending, go away

lstat_int:
	mov     dx,lsr		; clear interrupt
	in	al,dx
	jmp     repoll		; see if any more interrupts

mstat_int:
	mov     dx,msr		; clear interrupt
	in	al,dx
	jmp     repoll          ; see if any more interrupts

tx_int:
	mov     dx,lsr
	in	al,dx
	and     al,tcheck
	jnz     goodtx          ; good interrupt
	jmp     repoll          ; see if any more interrupts

goodtx: cmp     size_tdata,0	; see if any more data to send
	jne     have_data       ; if not equal then there is data to send

; if no data to send then reset tx interrupt and return
	mov     dx,ier
	mov     al,rxint
	out	dx,al
	jmp     repoll

have_data:
	mov     bx,start_tdata	; bx points to next char. to be sent
	mov     dx,datreg	; dx equals port to send data to
	mov     al,tdata[bx]    ; get data from buffer
	out     dx,al		; send data
	inc     bx              ; increment start_tdata
	cmp     bx,tsize	; see if gone past end
	jl      ntadj           ; if not then skip
	sub     bx,tsize	; reset to beginning
ntadj:  mov     start_tdata,bx  ; save start_tdata
	dec     size_tdata      ; one less character in x-mit buffer
	jmp     repoll

rx_int:
	mov     dx,lsr		; check and see if read is real
	in	al,dx
	and     al,rcheck	; look at receive data bit
	jnz     good_rx         ; real, go get byte
	jmp     repoll          ; go look for other interrupts

good_rx:
	mov     dx,datreg
	in      al,dx		; get data
	cmp     size_rdata,rsize	; see if any room
	jge	repoll          ; if no room then look for more interrupts
	mov     bx,end_rdata    ; bx points to free space
	mov     rdata[bx],al    ; send data to buffer
	inc     size_rdata      ; got one more character
	inc     bx              ; increment end_rdata pointer
	cmp     bx,rsize	; see if gone past end
	jl      nradj           ; if not then skip
	sub     bx,rsize	; else adjust to beginning
nradj:  mov     end_rdata,bx    ; save value

repoll:
	mov     dx,lsr		; we always expect receive data, so
	in      al,dx		; check status to see if any is ready.
	and     al,rcheck	; get received data bit
	jnz     good_rx         ; yes, go accept the byte

	mov     dx,ier		; look at transmit condition
	in      al,dx		; to see if we are enabled to send data
	and     al,txint
	jz      int_end		; not enabled, so go away
	mov     dx,lsr		; we are enabled, so look for tx condition
	in	al,dx
	and     al,tcheck
	jz	int_end
	jmp	goodtx          ; transmitter is finished, go get more data

int_end:
	mov     dx,ocw2		; tell the 8259 that I'm done
	mov     al,eoi
	out	dx,al

	pop     dx
	pop     cx
	pop     bx
	pop     ax
	pop     di
	pop     ds
	pop     bp
	iret
int_hndlr endp
	page
;
; init_aux(divisor:word)
; initialize the Intel 8250 and set up interrupt vector to int_hndlr
; divisor is the divisor for the baud rate generator
;
init_au	proc	far
	push    bp
	mov     bp,sp
	cli

	mov	ax,ds
	mov	cs:dataseg,ax

; reset the UART
	mov     al,0
	mov     dx,mcr
	out	dx,al

	mov     dx,lsr		; reset line status condition
	in	al,dx
	mov     dx,datreg	; reset recsive data condition
	in	al,dx
	mov     dx,msr		; reset modem deltas and conditions
	in	al,dx

; set baud rate with the passed argument
	mov     dx,lcr
	mov     al,dla+mode
	out	dx,al
	mov     dx,dll
	mov     al,6[bp]	; low byte of passed argument
	out	dx,al
	mov     dx,dlh
	mov     al,7[bp]	; high byte of passed argument
	out	dx,al

; set 8250 to 8 bits, no parity
	mov     dx,lcr
	mov     al,mode
	out	dx,al

; set interrupt vector
	push    ds
	mov     ax,0
	mov     ds,ax
	mov     bx,ds:int_off
	mov     cx,ds:int_off+2
	mov     word ptr ds:int_off,offset int_hndlr
	mov     ds:int_off+2,cs
	pop     ds
	mov     int_offset,bx
	mov     int_segment,cx

; enable interrupts on 8259 and 8250
	in      al,imr		; set enable bit on 8259
	and     al,int_mask
	out     imr,al
	mov     dx,ier		; enable interrupts on 8250
	mov     al,rxint
	out	dx,al
	mov     dx,mcr		; set dtr and enable int driver
	mov     al,dtr
	out	dx,al

	sti
	pop     bp
	ret	2
init_au	endp
	page
;
; close_a - turns off interrupts from the auxiliary port
;
close_a	proc	far
; turn off 8250
	mov     dx,ier
	mov     al,0
	out	dx,al

; turn off 8259
	mov     dx,imr
	in	al,dx
	or      al,not int_mask
	out	dx,al

; reset interrupt vector
	cli
	mov     bx,int_offset
	mov     cx,int_segment
	push    ds
	mov     ax,0
	mov     ds,ax
	mov     ds:int_off,bx
	mov     ds:int_off+2,cx
	pop     ds
	sti
	ret
close_a	endp
	page
;
; dtr_off - turns off dtr to tell modems that the terminal has gone away
;           and to hang up the phone
;
dtr_off	proc	far
	mov     dx,mcr
	mov     al,dtr_of
	out	dx,al
	ret
dtr_off	endp
;
; dtr_on - turns dtr on
;
dtr_on	proc	far
	mov     dx,mcr
	mov     al,dtr
	out	dx,al
	ret
dtr_on	endp
	page
;
; crcnt - returns number of bytes in the receive buffer
;
crcnt	proc	far
	mov     ax,size_rdata	; get number of bytes used
	ret
crcnt	endp
;
; cread - returns the next character from the receive buffer and
;         removes it from the buffer
;
cread	proc	far
	mov     bx,start_rdata
	mov     al,rdata[bx]
	mov     ah,0
	inc     bx              ; bump start_rdata so it points at next char
	cmp     bx,rsize	; see if past end
	jl      L12             ; if not then skip
	sub     bx,rsize	; adjust to beginning
L12:    mov     start_rdata,bx  ; save the new start_rdata value
	dec     size_rdata      ; one less character
	ret
cread	endp
	page
;
; cwcnt - returns the amount of free space remaining in the transmit buffer
;
cwcnt	proc	far
	mov     ax,tsize	; get the size of the x-mit buffer
	sub     ax,size_tdata   ; subtract the number of bytes used
	ret
cwcnt	endp
;
; cwrit(ch:byte) - the passed character is put in the transmit buffer
;
cwrit	proc	far
	push    bp
	mov     bp,sp
	mov     bx,end_tdata    ; bx points to free space
	mov     al,6[bp]	; move data from stack to x-mit buffer
	mov     tdata[bx],al
	inc     bx              ; increment end_tdata to point to free space
	cmp     bx,tsize	; see if past end
	jl      L4              ; if not then skip
	sub     bx,tsize	; adjust to beginning
L4:     mov     end_tdata,bx    ; save new end_tdata
	inc     size_tdata      ; one more character in x-mit buffer
	mov     dx,ier		; see if tx interrupts are enabled
	in	al,dx
	and     al,txint
	or      al,al
	jnz     L44
	mov     al,rxint+txint	; if not then set them
	out	dx,al
L44:    pop     bp
	ret	2
cwrit	endp
;
; wlocal(ch:byte) - writes a character to the input buffer
;
wlocal	proc	far
	push    bp
	mov     bp,sp
	cli

	cmp     size_rdata,rsize	; see if any room
	jge	L14		; if no room then quit
	mov     bx,end_rdata    ; bx points to free space
	mov     al,6[bp]	; get data
	mov     rdata[bx],al    ; send data to buffer
	inc     size_rdata      ; got one more character
	inc     bx              ; increment end_rdata pointer
	cmp     bx,rsize	; see if gone past end
	jl      L13             ; if not then skip
	sub     bx,rsize	; else adjust to beginning
L13:    mov     end_rdata,bx    ; save value

L14:	sti
	pop     bp
	ret	2
wlocal	endp
	page
;
; make_break - causes a break to be sent out on the line
;
make_br	proc	far
	mov     dx,lcr		; save the line control register
	in	al,dx
	mov     bl,al
	        
	mov     al,break	; set break condition
	out	dx,al

	mov     cx,0		; wait a while
wait:   loop    wait

	mov     al,bl           ; restore the line control register
	out	dx,al
	ret
make_br	endp
auxhndlr ends
	end
```
{% endraw %}

## COMMMSGS.DOC

{% raw %}
```
Info-IBMPC Digest	Wednesday, 11 January 1984	Volume 3 : Issue 6

This Week's Editor: Randy Cole

    SPECIAL ISSUE for those writing code for the IBM asynch port.  Thanks
     is due to Billy Brackenridge for editing the messages which follow,
       and of course, to the people who participated in the discussion.

----------------------------------------------------------------------

Date: 10 Jan 1984 1244-PST
Subject: Edge Triggered Messages
From: Billy <BRACKENRIDGE@USC-ISIB>

Here is an edited version of the edge triggered interrupt debate.  It also
should shed some light on some of the design decisions taken in the two MIT
communications packages in the INFO-IBMPC library:


Date: 30 Nov 1983
From: Craig Milo Rogers	 <ROGERS@USC-ISIB>

I've been using a version of your interrupt-driven COM: package for the IBM
PC.  I think that I've discovered a timing bug in it, as follows:

1)	The IBM PC uses the 8259 interrupt controller in edge-triggered mode.

2)	The COM interrupt routine checks for interrupts from the 8250 before
	clearing the interrupt flag in the 8259 with a specific
	end-of-interrupt.

3)	Between the time that the interrupt code checks for interrupt sources,
	and the time that it clears the interrupt flag, a new interrupt source
	could appear on the 8250.  The resulting edge to the 8259 would be
	lost when the EOI is issued.

My conclusion is that the end-of-interrupt should be issued to the 8259 BEFORE
the 8250 is checked for interrupt sources.  How does this sound to you?


------------------------------
Date:  16 December 1983
From:  Jerry Saltzer at MIT-MULTICS

I finally had a chance to look into the 8250-8259 interrupt interaction
question that you raised.  The documentation on the 8259 is a little vague on
this point, but I believe that it is actually quite clever in edge-triggered
mode.  If an edge comes along, it latches the fact, and ignores more edges
till the signal goes back down again AND the interrupt gets forwarded to the
8088.  Then it begins watching for more edges.	For the case of an 8250, the
8250 brings up its interrupt line, the 8259 latches and, unless there is other
activity, notifies the 8088.  The 8088 accepts the interrupt and begins
running the COM interrupt handler, which knocks down the interrupt line when
it reads the IIR of the 8250.  That dropping of the interrupt line in turn
causes the 8259 to start watching for another edge.

The EOI has as its only function allowing the 8259 to coordinate interrupts
among various levels.	 Until the EOI is issued, not recognized by the 8259. 
After the EOI, they will be. The EOI has nothing to do with whether or not
edges are noticed and latched for later handling.

Thus the EOI should be set as the last thing on the way out. If you set it
early in the routine, the manipulation of the registers in the 8250 will cycle
the interrupt line and generate a COM interrupt on top of the COM interrupt. 
The result is a series of nested COM interrupts until you get deep enough that
the IIR seems empty and no further COM interrupts get generated.

That is how I read the manual, though I am the first to admit that any
interpretation of the manual seems to require a leap or two of the imagination
to fill in some of the gaps.  In any case, this model of how it works is
consistent with all the external observations we have been able to make of the
two chips and with the bugs we have tripped over when we tried different
models (such as yours.)


------------------------------
Date: 19 Dec 1983
From: Craig Milo Rogers

Thank you for your analysis of the problem.  That must explain the "LATCH
ARMED" indications on the "IR Trigerring Timing Requirements" diagram in the
8259A specs from Intel.	 Your empirical experiences certainly outweigh my
theoretical speculations.

However, I would like to speculate some more based on the new data. Assume
that the receiver were to request an interrupt.	 The 8250 would request an
interrupt.  IRR would be set active in the 8259A.  Eventually, the 8088
interrupts.  IRR is set inactive, ISR is set active.  The interrupt routine
checks the receive condition, and clears it.  The 8250 drops its interrupt
request line.  The 8259A latch is reenabled.  Suppose that the transmit
section were now to request an interrupt.  The 8250 would raise its interrupt
line.  The 8259A would latch it, and set IRR again. The 8088 is still in the
interrupt service routine, which now repolls the 8250 for transmit interrupts. 
Seeing one, it clears it.  The 8250 drops its interrupt line.  The interrupt
service routine issues the EOI, clearing the ISR bit.  The 8088 returns from
the interrupt routine, reenabling its interrupts.  The 8259A has been waiting
for the 8088 to process the interrupt cycle caused by the IRR bit activated by
the transmit request. However, since the 8250's interrupt line was dropped
before the 8088 acknowleged the interrupt to the 8259A, the 8259A should
perform a "Default IR7" interrupt cycle, instead of a normal interrupt.	 If
the line printer (IR7) is enabled at the same time, this will cause a false
line printer interrupt.	 Any objections to this scenario?

In any case, I fail to see how nested COM interrupts could result. 8088
interrupts are disabled throughout execution of the interrupt routine (no STI
or POPF).  At least, this is true of the version the Dick Gillmann gave me to
start with.


------------------------------
Date:  20 December 1983
From:  Saltzer at MIT-MULTICS

Your scenario is one I hadn't thought about before, but it sounds correct.  It
also explains one mystery.  Our serial line interrupt handler has a counter to
pick up interrupts for which no condition code is set; that counter has never
registered anything but zero.  Yet the repoll sequence ought to cause some
conditions to be serviced in advance of the interrupt that they cause, so that
counter ought to occasionally record something.	 (We are certain that such
early conditions actually occur because the handler loses characters if you
don't repoll.)	Your scenario calls for such early-serviced conditions to lead
to level-7 interrupts rather than serial line interrupts, so this handler
never sees them.  I suppose that whatever level-7 handler is available is
smart enough to ignore interrupts that don't have serviceable conditions to
back them up so it doesn't matter.  And I don't suppose it counts these cases
so I can't verify that the com line is giving it extra things to ignore.

I forgot that the CPU remains masked through the handler--the nested interrupt
thing can't happen.

It would help if INTEL would publish wiring diagrams of the 8259 and 8250. 
The English descriptions leave a lot to the imagination.


------------------------------
Date: 20 Dec 1983
From: Craig Milo Rogers

Interesting.  I expect that your repoll sequence is necessary to prevent lost
characters because the 8250 is presenting an interrupt *level* condition,
rather than an interrupt *edge* condition.  Thus, if more than one interrupt
source is present withing the chip (say, receive and transmit), the interrupt
request will remain active until all sources have been serviced.  If the
interrupt service routine were to service only one source before returning,
the 8250 would not generate another edge for the 8259A.	 At least, this is how
I read the 8250 documentation in the IBM Technical Reference manual.

Thus, if you don't repoll to verify that all possible interrupt sources on the
8250 are clear before returning from the current interrupt, I would expect you
to eventually reach a state where no more characters get through.  This is
somewhat different from your description of "losing characters" when repolling
isn't present.	I am concerned about the discrepancy.  Does your application
code perhaps time out and reset the 8250?

So, even if you were to instrument the IRQ7 (line printer) service routine, I
would expect to find few fake interrupts due to the 8250 ports.	 Considering
the various windows involved, missing interrupt request edges should be far
more common than delayed interrupt request edges, up to the point where the
interrupt service routine itself is consuming 50% or so of the 8088 CPU.

By the way, I believe that there is a wiring error in the IBM Line Printer
interface circuit, so that all line printer interrupts are treated by the
8259A as fake IRQ7 interrupts rather than real ones. If you have time, you
might review my analysis at the start of the line printer interrupt handler in
LPT_PKG.ASM.  I am interested in any comments you have.


------------------------------
Date:  20 December 1983
From:  Saltzer at MIT-MULTICS

You are certainly correct in your analysis of why one must repoll for further
conditions after servicing the first one found.	 However I am unconvinced by
the argument that suggests that early handling of conditions will be rare.  If
the line is operating full-duplex, a transmit holding register empty condition
can occur at any time.	If it occurs before the receive condition is read (but
after the receive condition is registered) the interrupt line out of the 8250
will stay high, causing the "lost interrupt" effect.  And that small window
definitely does get hit, at least at 9600 baud and 19.2K, in our experience. 
If the THRE condition occurs after the receive condtion is read, then there
should be a fake interrupt at level 7.	If this window is at least as large as
the previous one (and it is in this code) then unneeded interrupts should be
at least as frequent as lost interrupts without repolling.


------------------------------
From: Craig Milo Rogers

By the way, the repoll code in the COM routines doesn't check for line/modem
status transition interrupts.  It seems to me that this is an error.  A
line/modem status transition could take place while a transmit or receive
interrupt is being processed;  the interrupt request line will not drop;  the
interrupt routine will dismiss;	 no more COM interrupts.


------------------------------
Date:  22 December 1983
From:  Saltzer at MIT-MULTICS

Good try, but no cigar.	 The COM code doesn't enable line/modem status
transition conditions, so they don't affect the interrupt request line. If
they were enabled, they would have to be polled, agreed.  There is a place in
the code to go to in case the conditions appear in the IIR, but that path was
provided as a safety net, not because I expected it ever to be followed.

I ran into a subtle interaction in the polling for transmit interrupts, which
led me look for every possible excuse to avoid enabling for lower priority
interrupts.  The reading of the IIR (which you have to do to find out whether
or not the lower priority interrupts are there) resets the THRE condition.  So
I couldn't figure out any way to repoll without taking a chance on losing a
THRE condition.	 Repolling again for an empty transmitter register would work,
but then one would have to repoll yet again for a modem/line interrupt, etc.,
forever.  So I just ducked the issue and left it for someone to sort out who
really needed those conditions monitored.


End of Info-IBMPC Digest
************************

```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #202, version v2 
 
The following is a list of the file checksums which should be produced by
the CRCK4 program on this disk.  If the CRC numbers do not match the following
list you may have a bad file.  To use type:  CRCK4 <filespec>
 
CRCK4 output for this disk:
 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  COMMREAD.ME          CRC = C4 DA

--> FILE:  LPT_PKG .ASM         CRC = 03 9B

--> FILE:  INT_PKG .ASM         CRC = DE E6

--> FILE:  EXMEM   .ASM         CRC = 5A 79

--> FILE:  EXIO    .ASM         CRC = 5E F9

--> FILE:  COM_PKG .ASM         CRC = C6 80

--> FILE:  BMACTST .ASM         CRC = 36 D9

--> FILE:  TSTLPT  .C           CRC = 50 15

--> FILE:  TSTINT  .C           CRC = EC 40

--> FILE:  TSTEXMEM.C           CRC = AA CC

--> FILE:  TSTCOM2 .C           CRC = F8 8E

--> FILE:  TSTCOM  .C           CRC = E8 E9

--> FILE:  TITLE   .MAC         CRC = FB CF

--> FILE:  DOS     .MAC         CRC = 38 46

--> FILE:  BMAC    .MAC         CRC = 19 C1

--> FILE:  TRUTH   .H           CRC = 6A 8C

--> FILE:  EXMEM   .H           CRC = FA 18

--> FILE:  BEAUTY  .H           CRC = F5 F0

--> FILE:  COM_PKG1.ASM         CRC = C5 05

--> FILE:  GLASSTTY.PAS         CRC = 42 2E

--> FILE:  README  .            CRC = 22 89

--> FILE:  COMMMSGS.DOC         CRC = F7 C9

 ---------------------> SUM OF CRCS = F0 AD

DONE 
 
These and other Public Domain and user-supported programs from:
 
PC Software Interest Group (PC-SIG)
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## EXIO.ASM

{% raw %}
```
	INCLUDE	TITLE.MAC
	.TITLE	<EXIO -- Extended I/O Functions>
	.SBTTL	Declarations

; exio.asm  15 Nov 83  Craig Milo Rogers at USC/ISI
;	Converted to PDP-11-style TITLEs.
; exio.asm  25 Oct 83  Craig Milo Rogers at USC/ISI
;	Converted to multi-model Lattice C.
; exio.asm  8 Sep 83  Craig Milo Rogers at USC/ISI
;	This module defines extended I/O subroutines.
;

IF1
	INCLUDE	DOS.MAC			; C segments.
	INCLUDE	BMAC.MAC		; C procedure calls.
ENDIF


DMA_CMD	EQU	8			; I8237 DMA chip command register.

	PSEG				; All the rest is program code.

	.SBHED	<OUTOUTP -- Output Two Values in a Row>

; name		outoutp -- output two values in a row
;
; synopsis	(void) outoutp(port, reg, val);
;		int port;	I/O port
;		int reg;	internal register address
;		int val;	register value
;
; description	This function handles chips such as the Zilog 8530.
;		Two output instructions are executed for each access.
;		The first output addresses a register on the chip.
;		The second output gives the register a value.

	BENTRY	OUTOUTP <PORT,REGX,VAL>

	MOV	DX,PORT		; Get port address.
	MOV	AX,REGX		; Get register number.
	CLI			; ******* Disable Interrupts *******
	OUT	DX,AL		;;; Address the register.
	MOV	AX,VAL		;;; Get register value.
	OUT	DX,AL		;;; Store the value.
	STI			;;; ******* Enable Interrupts *******
				;;; (Next instruction, too)
	BEND	OUTOUTP

	.SBHED	<OUTINP -- Output Then Input>

; name		outinp -- output then input
;
; synopsis	val = outinp(port, reg);
;		int port;	I/O port
;		int reg;	internal register address
;		int val;	register value
;
; description	This function handles chips such as the Zilog 8530.
;		Two I/O instructions are executed for each access.
;		The first output addresses a register on the chip.
;		The second is an input to read the value.

	BENTRY	OUTINP <PORT,REGX>

	MOV	DX,PORT		; Get port address.
	MOV	AX,REGX		; Get register number.
	CLI			; ******* Disable Interrupts *******
	OUT	DX,AL		;;; Address the register.
	IN	AL,DX		;;; Read the value.
	STI			;;; ******* Enable Interrupts *******
	XOR	AH,AH		;;; Clear high half.

	BEND	OUTINP

	.SBHED	<OUTP2X -- Output Two Values to Different Ports>

; name		outp2x -- output two values to different ports
;
; synopsis	(void) outp2x(port1, val1, port2, val2);
;		int port1;	first I/O port
;		int val1;	register value
;		int port2;	second I/O port
;		int val2;	register value
;
; description	This routine is designed for situations where two
;		devices need to be started simultaneously.  One
;		example is in starting DMA on an SCC channel in
;		SDLC mode.
;
	BENTRY	OUTP2X <PORT1,VAL1,PORT2,VAL2>

	MOV	DX,PORT1	; Get port address.
	MOV	AX,VAL1		; Get register number.
	CLI			; ******* Disable Interrupts *******
	OUT	DX,AL		;;; Store first value.
	MOV	DX,PORT2	;;; Get port address.
	MOV	AX,VAL2		;;; Get register number.
	OUT	DX,AL		;;; Store second value.
	STI			;;; ******* Enable Interrupts *******
				;;; (Next instruction, too)
	BEND	OUTP2X

	.SBHED	<OUTPD -- Output with DMA Interlock>

; name		outpd -- output with DMA interlock
;
; synopsis	outpd(port, val);
;		int port;	I/O port
;		int val;	value to output
;
; description	This function does output with DMA turned off.  This
;		caters to slow chips like the Zilog 8530, which cannot
;		tolerate sequential accesses by the CPU and DMA.  So,
;		it is necessary to temporarily shut off DMA when accessing
;		the device.
;
	BENTRY	OUTPD <PORT,VAL>

	MOV	DX,PORT		; Get port address.
	MOV	CX,VAL		; Get value to output.
	MOV	AL,4		; Bit to disable all DMA (incl. refresh).
	CLI			; ******* Disable Interrupts *******
	OUT	DMA_CMD,AL	;;; Mask off all DMA (incl. refresh).
	MOV	AL,CL		;;; Fetch the data to output.
	OUT	DX,AL		;;; Send it to the external device.
	XOR	AL,AL		;;; Command to reenable DMA.
	OUT	DMA_CMD,AL	;;; Restore the DMA channels.
	STI			;;; ******* Enable Interrupts *******
				;;; (Next instruction, too)
	BEND	OUTPD

	.SBHED	<INPD -- Input with DMA Interlock>

; name		inpd -- input with DMA interlock
;
; synopsis	val = inpd(port);
;		int port;	I/O port
;		int val;	value which was input
;
; description	This function does input with DMA turned off.  This
;		caters to slow chips like the Zilog 8530, which cannot
;		tolerate sequential accesses by the CPU and DMA.  So,
;		it is necessary to temporarily shut off DMA when accessing
;		the device.
;
	BENTRY	INPD <PORT>

	MOV	DX,PORT		; Get port address.
	MOV	AL,4		; Bit to disable all DMA (incl. refresh).
	CLI			; ******* Disable Interrupts *******
	OUT	DMA_CMD,AL	;;; Mask off all DMA (incl. refresh).
	IN	AL,DX		;;; Read data from the external device.
	MOV	CL,AL		;;; Store data in a safer place.
	XOR	AL,AL		;;; Command to reenable DMA.
	OUT	DMA_CMD,AL	;;; Restore the DMA channels.
	STI			;;; ******* Enable Interrupts *******
	MOV	AL,CL		;;; Pickup saved input value.
	XOR	AH,AH		; Clear high half.

	BEND	INPD

	.SBHED	<OUTOUTPD -- Output Two Values with DMA Interlock>

; name		outoutpd -- output two values with DMA interlock
;
; synopsis	outoutpd(port, reg, val);
;		int port;	I/O port
;		int reg;	internal register address
;		int val;	register value
;
; description	This function handles chips such as the Zilog 8530.
;		Two output instructions are executed for each access.
;		The first output addresses a register on the chip.
;		The second output gives the register a value.
;		DMA is masked during I/O to keep slow devices happy.
;
	BENTRY	OUTOUTPD <PORT,REGX,VAL>
	
	MOV	DX,PORT		; Get port address.
	MOV	BX,REGX		; Get register number.
	MOV	CX,VAL		; Get register value.
	MOV	AL,4		; Bit to disable all DMA (incl. refresh).
	CLI			; ******* Disable Interrupts *******
	OUT	DMA_CMD,AL	;;; Mask off all DMA (incl. refresh).
	MOV	AL,BL		;;; Get the register number.
	OUT	DX,AL		;;; Address the register.
	XOR	AL,AL		;;; Command to reenable DMA.
	OUT	DMA_CMD,AL	;;; Restore the DMA channels.
	NOP			;;; Give refresh and DMA a chance.
	NOP			;;; Give refresh and DMA a chance.
	NOP			;;; Give refresh and DMA a chance.
	MOV	AL,4		;;; Bit to disable all DMA (incl. refresh).
	OUT	DMA_CMD,AL	;;; Mask off all DMA (incl. refresh).
	MOV	AL,CL		;;; Get register value.
	OUT	DX,AL		;;; Store the value.
	XOR	AL,AL		;;; Command to reenable DMA.
	OUT	DMA_CMD,AL	;;; Restore the DMA channels.
	STI			;;; ******* Enable Interrupts *******
				;;; (Next instruction, too)
	BEND	OUTOUTPD

	.SBHED	<OUTINPD -- Output then Input with DMA Interlock>

; name		outinpd -- output then input with DMA interlock
;
; synopsis	val = outinpd(port, reg);
;		int port;	I/O port
;		int reg;	internal register address
;		int val;	register value
;
; description	This function handles chips such as the Zilog 8530.
;		Two I/O instructions are executed for each access.
;		The first output addresses a register on the chip.
;		The second is an input to read the value.
;
;
	BENTRY	OUTINPD <PORT,REGX>

	MOV	DX,PORT		; Get port address.
	MOV	BX,REGX		; Get register number.
	MOV	AL,4		; Bit to disable all DMA (incl. refresh).
	CLI			; ******* Disable Interrupts *******
	OUT	DMA_CMD,AL	;;; Mask off all DMA (incl. refresh).
	MOV	AL,BL		;;; Get the register number.
	OUT	DX,AL		;;; Address the register.
	XOR	AL,AL		;;; Command to reenable DMA.
	OUT	DMA_CMD,AL	;;; Restore the DMA channels.
	NOP			;;; Give refresh and DMA a chance.
	NOP			;;; Give refresh and DMA a chance.
	NOP			;;; Give refresh and DMA a chance.
	MOV	AL,4		;;; Bit to disable all DMA (incl. refresh).
	OUT	DMA_CMD,AL	;;; Mask off all DMA (incl. refresh).
	IN	AL,DX		;;; Read the value.
	MOV	CL,AL		;;; Store data in a safer place.
	XOR	AL,AL		;;; Command to reenable DMA.
	OUT	DMA_CMD,AL	;;; Restore the DMA channels.
	STI			;;; ******* Enable Interrupts *******
	MOV	AL,CL		;;; Pickup saved input value.
	XOR	AH,AH		; Clear high half.

	BEND	OUTINPD
;
	ENDPS			; Close the code segment.
	END
```
{% endraw %}

## EXMEM.ASM

{% raw %}
```
	INCLUDE	C:TITLE.MAC
	.TITLE	<EXMEM -- Extended Memory Functions>
	.SBTTL	History

; exmem.asm  20 Dec 83  Craig Milo Rogers at USC/ISI
;	Added peek() and poke(), and variants.
; exmem.asm  15 Nov 83  Craig Milo Rogers at USC/ISI
;	Converted to PDP11-style TITLEs.
; exmem.asm  8 Sep 83  Craig Milo Rogers at USC/ISI
;	Converted to multi-model Lattice C.
; exmem.asm  24 Aug 83  Craig Milo Rogers at USC/ISI
;	Created this module to access extended memory.

	.SBHED	Declarations

;	This module defines subroutines for manipulating extended memory,
; by which I mean memory which can't normally be referenced by the Lattice
; C complier.

IF1
	INCLUDE	C:DOS.MAC		; C segments.
	INCLUDE C:BMAC.MAC		; C procedure calls.
ELSE
;	INCLUDE	C:DOS.MAC		; C segments.
;	INCLUDE C:BMAC.MAC		; C procedure calls.
ENDIF

	PSEG				; Only code from here on.

	.SBHED	<GETADDR -- Return a 20-bit Address>

; name		getaddr -- return a 20-bit address
;
; synopsis	a = getaddr(p);
;		PTR p;		points to something
;		long a;		returned value
;
; description	Converts a pointer to a 20-bit address, for DMA
;		transfers, peek/poke, etc.
;

IF LDATA
	BENTRY	GETADDR <OFFXX,SEGXX>
	MOV	BX,SEGXX	; Load segment part of pointer.
ELSE
	BENTRY	GETADDR <OFFXX>
	MOV	BX,DS		; Get segment part of address.
ENDIF
	MOV	AL,BH		; Copy byte with high 4 bits.
	XOR	AH,AH		; Clear rest of high-order return register.
	MOV	CL,4		; Get shift count.
	SAR	AX,CL		; Isolate high-order 4 bits.
	SHL	BX,CL		; Justify lower 12 bits.
	ADD	BX,OFFXX	; Add in lower bits of address.
	ADC	AX,0		; Propogate carry, if any.

	BEND	GETADDR		; Return with result in AX & BX.
				; (AX is high, BX is low)

	.SBHED	<PEEK -- Return the Contents of a Location>

; name		peek -- return the contents of a location
;
; synopsis	v = peek(a);
;		long a;		20-bit address
;		int v;		returned value
;
; description	Gets the contents of a location.  This routine is
;		inherently machine-specific.  The address is in
;		20-bit integer format.  The value returned is a
;		16-bit integer.
;

	BENTRY	PEEK <LOW16,HGH4>

	MOV	SI,LOW16	; Get low 16 bits of address.
	MOV	AX,HGH4		; Get high four bits (right justified).
	MOV	CX,12		; Need to left justify high bits
	SHL	AX,CL		;   to make segment part of addr.
	MOV	ES,AX		; Transfer into extra segment register.
	MOV	AX,ES:[SI]	; Get the value of the location.

	BEND	PEEK		; Return with result in AX.

	.SBHED	<CPEEK -- Return the Char Contents of a Location>

; name		cpeek -- return the character contents of a location
;
; synopsis	c = cpeek(a);
;		long a;		20-bit address
;		u_char c;	returned value
;
; description	Gets the contents of a location.  This routine is
;		inherently machine-specific.  The address is in
;		20-bit integer format.  The value returned is an
;		8-bit unsigned char.
;
;

	BENTRY	CPEEK <LOW16,HGH4>

	MOV	SI,LOW16	; Get low 16 bits of address.
	MOV	AX,HGH4		; Get high four bits (right justified).
	MOV	CX,12		; Need to left justify high bits
	SHL	AX,CL		;   to make segment part of addr.
	MOV	ES,AX		; Transfer into extra segment register.
	MOV	AL,ES:[SI]	; Get the value of the location.
	XOR	AH,AH		; Clear the high order bits.

	BEND	CPEEK		; Return with result in AX.

	.SBHED	<LPEEK -- Return the Long Contents of a Location>

; name		lpeek -- return the long contents of a location
;
; synopsis	l = lpeek(a);
;		long a;		20-bit address
;		long l;		returned value
;
; description	Gets the contents of a location.  This routine is
;		inherently machine-specific.  The address is in
;		20-bit integer format.  The value returned is a
;		32-bit long integer.
;
;

	BENTRY	LPEEK <LOW16,HGH4>

	MOV	SI,LOW16	; Get low 16 bits of address.
	MOV	AX,HGH4		; Get high four bits (right justified).
	MOV	CX,12		; Need to left justify high bits
	SHL	AX,CL		;   to make segment part of addr.
	MOV	ES,AX		; Transfer into extra segment register.
	MOV	BX,ES:[SI]	; Get the value of the low 16 bits.
	ADD	SI,2		; Point to the high 16 bits.
	 JNC	LPEKNC		;   (no overflow)
	ADD	AX,1000H	; Propogate carry.
	MOV	ES,AX		; Transfer into extra segment register.
LPEKNC:	MOV	AX,ES:[SI]	; Get the value of the high 16 bits.

	BEND	LPEEK		; Return with result in AX and BX,
				; High 16 bits in AX, low 16 bits in BX.

	.SBHED	<POKE -- Change the Contents of a Location>

; name		poke -- change the contents of a location
;
; synopsis	poke(a, v);
;		long a;		20-bit address
;		int v;		new value
;
; description	Sets the contents of a location.  This routine is
;		inherently machine-specific.  The address is in
;		20-bit integer format.  The value changed is a
;		16-bit integer.
;

	BENTRY	POKE <LOW16,HGH4,VALU>

	MOV	SI,LOW16	; Get low 16 bits of address.
	MOV	AX,HGH4		; Get high four bits (right justified).
	MOV	CX,12		; Need to left justify high bits
	SHL	AX,CL		;   to make segment part of addr.
	MOV	ES,AX		; Transfer into extra segment register.
	MOV	AX,VALU		; Get the new value.
	MOV	ES:[SI],AX	; Set the value of the location.

	BEND	POKE		; Return.

	.SBHED	<CPOKE -- Change the Contents of a Char Location>

; name		cpoke -- change the contents of a char location
;
; synopsis	cpoke(a, c);
;		long a;		20-bit address
;		u_char c;	new value
;
; description	Sets the contents of a location.  This routine is
;		inherently machine-specific.  The address is in
;		20-bit integer format.  The value changed is an
;		8-bit unsigned char.
;

	BENTRY	CPOKE <LOW16,HGH4,VALU>

	MOV	SI,LOW16	; Get low 16 bits of address.
	MOV	AX,HGH4		; Get high four bits (right justified).
	MOV	CX,12		; Need to left justify high bits
	SHL	AX,CL		;   to make segment part of addr.
	MOV	ES,AX		; Transfer into extra segment register.
	MOV	AL,VALU		; Get the new value.
	MOV	ES:[SI],AL	; Set the value of the location.

	BEND	CPOKE		; Return.

	.SBHED	<LPOKE -- Change the Contents of a Long Location>

; name		lpoke -- change the contents of a long location
;
; synopsis	lpoke(a, v);
;		long a;		20-bit address
;		long v;		new value
;
; description	Sets the contents of a location.  This routine is
;		inherently machine-specific.  The address is in
;		20-bit integer format.  The value changed is a
;		32-bit long integer.
;

	BENTRY	LPOKE <LOW16,HGH4,LOVALU,HIVALU>

	MOV	SI,LOW16	; Get low 16 bits of address.
	MOV	AX,HGH4		; Get high four bits (right justified).
	MOV	CX,12		; Need to left justify high bits
	SHL	AX,CL		;   to make segment part of addr.
	MOV	ES,AX		; Transfer into extra segment register.
	MOV	BX,LOVALU	; Get the low 16 bits of the new value.
	MOV	ES:[SI],BX	; Set the value of the low 16 bits.
	ADD	SI,2		; Point to the high 16 bits.
	 JNC	LPOKNC		;   (no overflow)
	ADD	AX,1000H	; Propogate carry.
	MOV	ES,AX		; Transfer into extra segment register.
LPOKNC:	MOV	AX,HIVALU	; Get the high 16 bits of the new value.
	MOV	ES:[SI],AX	; Set the high 16 bits.

	BEND	LPOKE		; Return.
;
;
	ENDPS			; End of code segment.
	END
```
{% endraw %}

## INT_PKG.ASM

{% raw %}
```
	INCLUDE	TITLE.MAC
	.TITLE	<INT_PKG -- Interrupt Vector Interface Routines>
	.SBTTL	History

; int_pkg.asm  17 Nov 83  Craig Milo Rogers at USC/ISI
;	Debugged in non-DOS, DOS 1, and DOS 2 configurations.
;	Set to non-DOS for actual use.
;	Added int_prev().
; int_pkg.asm  15 Nov 83  Craig Milo Rogers at USC/ISI
;	Created this package to change and restore interrupt vectors
; on the IBM PC.

	.SBHED	Overview

;	This package manages interrupt vectors on the IBM PC.
;
; 1)	The package may be compiled to use the DOS calls to get and
;	set interrupt vectors, or it may be compiled to do these
;	tasks directly.
;
; 2)	The basic services that this module provides to clients are
;	to set and restore interrupt vectors.  When an interrupt vector
;	is set, its old contents are saved.  The old contents may be
;	restored upon demand by a client, or when a package termination
;	(clean-up) call is issued.
;
; 3)	Nested calls to set and restore the same interrupt vector are
;	not supported.
;
; 4)	The old interrupt vectors are saved in a local storage area.
;	The length of the storage area is an assembly parameter.  A
;	fixed area was selected over a linked list because a linked
;	list is more likely to be damaged by a runaway program.

;	Entry points (Lattice C 1.05 calling conventions):

; void
; int_ini()			/* Initializes the saved interrupt database.*/

; bool				/* FALSE ==> vector in use or out of mem. */
; int_setup(vec, newip, newcs)	/* Setup an interrupt vector. */
; int vec;			/* Interrupt vector number. */
; int newip;			/* Instruction pointer for interrupt code. */
; int newcs;			/* Code segment for interrupt code. */
;				/* Together, newip and newcs are the same
;				 * as a Large model pointer-to-function.
;				 * However, C routines may not be directly
;				 * called this way, since lots of registers
;				 * must be saved and setup first before C
;				 * code can be used. */

; long				/* Actually, a pointer to a "function". */
;				/* 0L ==> vector not saved, or was empty. */
; int_prev(vec)			/* Returns prev. contents of the vector. */
; int vec;			/* Interrupt vector number. */

; bool				/* FALSE ==> vector not in use. */
; int_restore(vec)		/* Restore an interrupt vector. */
; int vec;			/* Interrupt vector number. */

; void
; int_trm()			/* Terminate, ie restore all vectors. */

	.SBHED	Declarations

IF1
	INCLUDE	DOS.MAC	; C segments.
	INCLUDE	BMAC.MAC	; C calling conventions.
ENDIF


;	Here are the two configuration parameters.  Ideally these
; should come from an include file, not the source file.

NODOS	EQU	0		; 0 ==> Use DOS calls, 1 ==> Avoid DOS.
NSAVVEC	EQU	10		; Nomber of vectors to handle.


;	The following structure saves old interrupt vector contents:

SVEC	STRUC			; Saves old vectors.
SAVVEC	DW	?		; Saved vector number.
SAVIP	DW	?		; Saved Instruction Pointer.
SAVCS	DW	?		; Saved Code Segment.
SVEC	ENDS

NOVEC	EQU	0FFFFH		; Indicates an unused entry.


;	Return Codes:

TRUE	EQU	1		; Truth.
FALSE	EQU	0		; Falsehood.

	.SBHED	<Data Storage>

ABS0	SEGMENT	AT 0H		; Segment with interrupt vectors.
ABS0	ENDS

	DSEG

SAVAREA	SVEC	NSAVVEC DUP(<>)	; Saved interrupt vector blocks.

IFE NODOS			; Are we using DOS?
DOSTYPE	DW	?		; Gets the DOS level.
ENDIF

	ENDDS

	PSEG
	DB	'(C) Copyright Inner Loop Software, 1983'

	.SBHED	<FINDVEC -- Internal Routine to Find a Vector>

;	Called with the vector in AX.
;	Returns with a pointer to the vector save block in SI.
;		Carry clear -- found the vector save entry.
;		Carry set -- didn't find the vector save entry.
;	Modifies:  CX, SI, CF

FINDVEC	PROC	NEAR			; Internal routine.

	MOV	SI,OFFSET SAVAREA	; Address of save area.
	MOV	CX,NSAVVEC		; Number of vector save entries.

FINDLOOP:
	CMP	[SI].SAVVEC,AX		; Is this the vector?
	 JE	FOUNDIT			;   (yup, too bad)
	ADD	SI,TYPE SVEC		; Advance SI to next save entry.
	LOOP	FINDLOOP		; Loop for number of save entries.

	STC				; Set the carry flag -- not found.
	RET				; Return with error set.

FOUNDIT:
	CLC				; Clear carry - found entry.
	RET				; Return, no error.

FINDVEC	ENDP

	.SBHED	<INT_INI -- Initialize Saved Interrupt Database>

; void
; int_ini()			/* Initializes the saved interrupt database.*/

	BENTRY	INT_INI

	MOV	SI,OFFSET SAVAREA	; Address of save area.
	MOV	CX,NSAVVEC		; Number of vector save entries.
	XOR	AX,AX			; Clear AX for a handy source of 0.

INILOOP:
	MOV	[SI].SAVVEC,NOVEC	; Indicate no vector present.
	MOV	[SI].SAVIP,AX		; Clear saved Instruction Pointer.
	MOV	[SI].SAVCS,AX		; Clear saved Code Segment.
	ADD	SI,TYPE SVEC		; Advance SI to next save entry.
	LOOP	INILOOP			; Loop for number of save entries.

IFE NODOS				; Are we using DOS?
	MOV	AH,30H			; Get DOS Version function number.
	INT	21H			; DOS Function Call.
	MOV	DOSTYPE,AX		; Save the returned value.
ENDIF

	BEND	INT_INI			; That's all for initialization.

	.SBHED	<INT_SETUP -- Setup an Interrupt Vector>

; bool				/* FALSE ==> vector in use or out of mem. */
; int_setup(vec, newip, newcs)	/* Setup an interrupt vector. */
; int vec;			/* Interrupt vector number. */
; int newip;			/* Instruction pointer for interrupt code. */
; int newcs;			/* Code segment for interrupt code. */
;				/* Together, newip and newcs are the same
;				 * as a Large model pointer-to-function.
;				 * However, C routines may not be directly
;				 * called this way, since lots of registers
;				 * must be saved and setup first before C
;				 * code can be used. */

	BENTRY	INT_SETU <VEC,NEWIP,NEWCS>

	MOV	AX,VEC			; Vector for which we're looking.
	CALL	FINDVEC			; See if already allocated
	 JNC	SETBAD			;   (yup, too bad)

	MOV	SI,OFFSET SAVAREA	; Address of save area.
	MOV	CX,NSAVVEC		; Number of vector save entries.

SETFREE:
	CMP	[SI].SAVVEC,NOVEC	; Is this a free entry?
	 JE	SETVEC			;   (yup)
	ADD	SI,TYPE SVEC		; Advance SI to next save entry.
	LOOP	SETFREE			; Loop for number of save entries.

SETBAD:
	MOV	AX,FALSE		; Vector in use, or no free space.
	JMP SHORT SETDONE		; Go return to the user.

SETVEC:					; Let's set the interrupt vector.
IF NODOS

;	This code copies the old vector contents into the vector save
; block and sets the new vector contents, as an atomic operation.  This
; eliminates the possibility of an interrupt changing the vector's
; contents while the vector is being saved.

	MOV	BX,ABS0			; Get start of interrupt vectors.
	MOV	ES,BX			; ES is vector segment.
	ASSUME	ES:ABS0

					; AX still has target vector.
	MOV	BX,AX			; Transfer vector number.
	ADD	BX,BX			; Convert to vector address.
	ADD	BX,BX
	MOV	CX,NEWIP		; Get the new vector offset.
	MOV	DX,NEWCS		; Get the new vector section.

	PUSHF				; Save current interrupt setting.
	CLI				; ******* Disable Interrupts *******
	XCHG	CX,ES:[BX]		;;; Set vector's Instruction Ptr.
	XCHG	DX,ES:[BX+2]		;;; Set vector's Segment Number.
	MOV	[SI].SAVVEC,AX		;;; Mark this save block used.
	MOV	[SI].SAVIP,CX		;;; Store the old vector offset.
	MOV	[SI].SAVCS,DX		;;; Store the old vector segment.
	POPF				;;; ******* Restore Interrupts *******
					;;; (Next instruction still disabled)
	ASSUME	ES:NOTHING
ELSE

;	This code saves the old contents of the vector, then sets the new
; contents.  The operations are not atomic, so there is an implicit
; assumption that the interrupt vector will not be changed (by an
; interrupt routine) which this routine is running.

	CMP	BYTE PTR DOSTYPE,2	; Is this DOS 2 or greater?
	 JGE	SETDOS2			;   (yup)

;	This system is pre-DOS 2.  Save the old vector without DOS.

	MOV	BX,ABS0			; Get start of interrupt vectors.
	MOV	ES,BX			; ES is vector segment.
	ASSUME	ES:ABS0
					; AX still has target vector.
	MOV	BX,AX			; Transfer vector number.
	ADD	BX,BX			; Convert to vector address.
	ADD	BX,BX

	MOV	CX,ES:[BX]		; Get vector's Instruction Ptr.
	MOV	DX,ES:[BX+2]		; Get vector's Segment Number.
	MOV	[SI].SAVIP,CX		; Store the old vector offset.
	MOV	[SI].SAVCS,DX		; Store the old vector segment.
	MOV	[SI].SAVVEC,AX		; Mark this save block used.
	ASSUME	ES:NOTHING

	JMP SHORT SETDOSVEC		; Go set the vector.

SETDOS2:

;	Use the DOS 2 call to get old vec.  Store the vector number
; into the save block last.  This interlocks the save block contents
; so it can be referenced at interrupt level.

					; AX still has target vector.
	MOV	AH,35H			; DOS Get Vector function.
	INT	21H			; DOS Function Call.
	MOV	[SI].SAVIP,BX		; Store the old vector offset.
	PUSH	ES			; Store the old vector segment
	POP	[SI].SAVCS		;   via the stack.
	MOV	AX,VEC			; Get the vector number again.
	MOV	[SI].SAVVEC,AX		; Mark this save block used.
					; Fall into SETDOSVEC...

SETDOSVEC:

;	 Call DOS to set the interrupt vector.

					; Vector number already in AL.
	MOV	DX,NEWIP		; Fetch the new vector offset.
	PUSH	DS			; Save our data segment.
	PUSH	NEWCS			; Fetch the new vector segment.
	POP	DS			; Transfer new segment to DS.
	MOV	AH,25H			; DOS Set Interrupt Vector function.
	INT	21H			; DOS Function Call.
	POP	DS			; Restore our data segment.
ENDIF

	MOV	AX,TRUE			; Return TRUE to caller.
					; Fall into SETDONE...
SETDONE:
	BEND	INT_SETU

	.SBHED	<INT_PREV -- Return Previous Vector Contents>

; long				/* Actually, a pointer to a "function". */
;				/* 0L ==> vector not saved, or was empty. */
; int_prev(vec)			/* Returns prev. contents of the vector. */
; int vec;			/* Interrupt vector number. */

;	A 0L return can meas two things:  either the wrong vector was
; supplied to int_prev(), or the vector's previous contents were in fact
; zero.  0L is not a significant value for any of the vectors at the
; present time, and isn't a reasonable address for a procedure.
; However, it is quite possible for a vector to contain 0L if it has
; never been used before.  So, don't treat 0L as a fatal error, but
; don't treat it as a valid procedure, either.

	BENTRY	INT_PREV <VEC>

	MOV	AX,VEC			; Vector for which we're looking.
	CALL	FINDVEC			; Try to find save block.
	 JC	PREVERR			;   (not found)
	MOV	AX,[SI].SAVCS		; AX gets segment.
	MOV	BX,[SI].SAVIP		; BX gets offset.
	JMP SHORT PREVDONE		; Go return to the user.

PREVERR:
	XOR	AX,AX			; Failed to find target vector.
	XOR	BX,BX

PREVDONE:
	BEND	INT_PREV		; That's all, return code in AX, BX.

	.SBHED	<INT_RESTORE -- Restore a Saved Vector>

; bool				/* FALSE ==> vector not in use. */
; int_restore(vec)		/* Restore an interrupt vector. */
; int vec;			/* Interrupt vector number. */

	BENTRY	INT_REST <VEC>

	MOV	AX,VEC			; Vector for which we're looking.
	CALL	FINDVEC			; Look for the saved vector.
	 JNC	RESTVEC			;   (found it)
	MOV	AX,FALSE		; Failed to find target vector.
	JMP SHORT RESTDONE		; Go return to the user.

RESTVEC:				; SI points to the save block.

IF NODOS
	MOV	BX,AX			; Transfer vector number.
	ADD	BX,BX			; Convert to vector address.
	ADD	BX,BX
	MOV	CX,[SI].SAVIP		; Fetch the saved vector offset.
	MOV	DX,[SI].SAVCS		; Fetch the saved vector segment.
	PUSH	DS			; Save our data segment.
	MOV	AX,ABS0			; Get start of interrupt vectors.
	MOV	DS,AX			; Now work in vector segment.

	PUSHF				; Save current interrupt setting.
	CLI				; ******* Disable Interrupts *******
	MOV	[BX],CX			;;; Restore vector's Instruction Ptr.
	MOV	[BX+2],DX		;;; Restore vector's Segment Number.
	POPF				;;; ******* Restore Interrupts *******
	POP	DS			;;; Restore our data segment.
ELSE
					; Use DOS call to restore the vector.
					; Vector number already in AL.
	MOV	DX,[SI].SAVIP		; Fetch the saved vector offset.
	PUSH	DS			; Save our data segment.
	PUSH	[SI].SAVCS		; Fetch the saved vector segment.
	POP	DS			; Transfer saved segment to DS.
	MOV	AH,25H			; DOS Set Interrupt Vector function.
	INT	21H			; DOS Function Call.
	POP	DS			; Restore our data segment.
ENDIF

	MOV	[SI].SAVVEC,NOVEC	; Free this saved vector block.
	MOV	AX,TRUE			; Return TRUE to caller.
					; Fall into RESTDONE...

RESTDONE:
	BEND	INT_REST		; That's all, return code in AX.

	.SBHED	<INT_TRM -- Terminate and Restore All Vectors>

; void
; int_trm()			/* Terminate, ie restore all vectors. */

	BENTRY	INT_TRM

	MOV	SI,OFFSET SAVAREA	; Address of save area.
	MOV	CX,NSAVVEC		; Number of vector save entries.

TRMLOOP:
	CMP	[SI].SAVVEC,NOVEC	; Is there a vector present?
	 JE	TRMNEXT			;   (nope)

	PUSH	SI			; Save SI
	PUSH	CX			;   and CX accross subroutine call.
	BCALL	INT_REST <[SI].SAVVEC>	; Call the code to restore the vector.
	POP	CX			; Restore saved registers.
	POP	SI

TRMNEXT:
	ADD	SI,TYPE SVEC		; Advance SI to next save entry.
	LOOP	TRMLOOP			; Loop for number of save entries.

	BEND	INT_TRM			; That's all.

	ENDPS
	END
```
{% endraw %}

## LPT_PKG.ASM

{% raw %}
```
	INCLUDE	C:TITLE.MAC
	.TITLE	<LPT_PKG -- LPT1: Routines for Lattice C>
	.SBTTL	<History and Copyright Notice>

; lpt_pkg.asm  18 Nov 83  Craig Milo Rogers at USC/ISI
;	Use int_pkg routines to set/restore interrupt vectors.
; lpt_pkg.asm  16 Nov 83  Craig Milo Rogers at USC/ISI
;	Converted to PDP-11-like TITLEs.
;	Converted to STRUCT for control data.
; lpt_pkg.asm  9 Nov 83  Craig Milo Rogers at USC/ISI
;	Created from com_pkg.asm.
;
;	These routines provide an interrupt-driven circular buffer
; interface to the LPT1: device.  This version interfaces with the
; multi-model Lattice C compiler version 1.05.  This package was
; adapted from the "com_pkg", which in turn was adapted from "COMM-PKG".
; See below:
;
; COM_PKG1 provides a library of serial port routines
; Adapted from code by John Romkey and Jerry Saltzer of MIT
; by Richard Gillmann (GILLMANN@ISIB), 1983
;

	.SBHED	Overview

;	This is a module of routines for interfacing with the
; LPT1: communications interface on the IBM PC.  The code has
; been carefully constructed to properly drive the printer interface
; and the 8259 Interrupt Controller.  Internal circular buffers
; are used for transmit and receive.

;	Only one LPT: is supported at present.  A unit number is
; included in the calls to provide for multiple-printer support in
; the future.

;	The LPT: interrupt source is the -ACKNOWLEGE signal from
; the printer.  In the case of the Epson MX and FX printers, -ACKNOWLEGE
; goes active (low) for 5 usec when a character has been processed,
; then returns to inactive (high).  Since the -ACKNOWLEGE signal is
; inverted by the printer interface card before it is presented to
; the IRQ7 line on the IBM-PC's bus, it is the high-to-low transition
; of -ACKNOWLEGE which causes the low-to-high transition of IRQ7, which
; in turn triggers the interrupt sequence in the 8259.  This, in turn,
; triggers an interrupt sequence in the 8088 processor.
;
;	Thus, it is the high-to-low transition of -ACKNOWLEGE which
; starts the interrupt sequence.  However, since -ACKNOWLEGE is low
; for only 5 usec, it may have returned to its high state before the
; 8088 sends INTA to the 8259 to acknowlege the interrupt.  This is
; a violation of the 8259 specification.  The 8259 will then generate
; a "DEFAULT" interrupt request cycle, instead of a normal IR7 cycle.
; However, since the DEFAULT cycle just happens to be IR7, too, it
; all works out OK.
;
;	The 8259's restriction on IRn pulse length is intended to
; catch static on the IRn lines, and/or malfunctioning devices.
; It is entirely possible that a DEFAULT IR7 may be generated for
; some reason other than the line printer.  The line printer interrupt
; routine attempts to protect against this case by checking the
; BUSY bit in the interface.  Everything would probably work a lot
; better if the line printer interface fed the -ACKNOWLEGE signal
; directly to IR7, instead of inverting it first.

;	Entry points (Lattice C 1.05 calling conventions):

; void
; lpt_ini(unit, tbuf, tbuflen, pinit)
;			/* Initializes port and interrupt vector. */
; int unit;		/* 1 ==> LPT1:, 2 ==> LPT2:. */
; char *tbuf;		/* Transmit buffer address. */
; int tbuflen;		/* Transmit buffer length. */
; bool pinit;		/* TRUE ==> force printer initialization. */

; void
; lpt_trm(unit)		/* Turns off interrupts from the aux port. */
; int unit;		/* 1 ==> LPT1:, 2 ==> LPT2:. */

; int			/* Number of free bytes in output buffer. */
; lpt_ocnt(unit)	/* Returns number of free bytes in output buffer. */
; int unit;		/* 1 ==> LPT1:, 2 ==> LPT2:. */

; bool			/* Returns FALSE if no more room. */
; lpt_putc(unit, ch)	/* Writes a character to the output buffer. */
; int unit;		/* 1 ==> LPT1:, 2 ==> LPT2:. */
; char ch;		/* The character to write. */

; int			/* Returns printer status bits. */
; lpt_stat(unit)	/* Reads printer hardware status. */
; int unit;		/* 1 ==> LPT1:, 2 ==> LPT2:. */


	.SBHED	Declarations

IF1
	INCLUDE	DOS.MAC		; C segments.
	INCLUDE BMAC.MAC	; C calling conventions.
ENDIF

				; int_pkg routines:
	BEXTRN	INT_SETU	; Setup an interrupt vector.
	BEXTRN	INT_REST	; Restore an interrupt vector.

				; LPT: parameters:
LPT_INT      EQU     7		; Interrupt number for printer port.
PRINTER_BASE EQU     408H	; Address of BIOS table containing
				; the addresses of the printers.

INT_OFF EQU     08H		; Converts 8029 interrupt numbers to
				; 8088 interrupt numbers.

				; Printer device registers:
DATREG  EQU     0H		; Data register.
STATREG EQU	1H		; Status bits from the printer.
CMDREG	EQU	2H		; Command bits to the printer. 

				; Printer status bits:
BUSY	EQU	80H		; Printer is busy, issue no commands.
ACK	EQU	40H		; Printer ready acknowlegement pulse.
PAPER	EQU	20H		; Paper end -- out of paper.
SELECTD	EQU	10H		; Printer is selected.
ERR	EQU	08H		; Error line.

				; Printer command bits:
IRQE	EQU	10H		; Interrupt request enable.
SELECT	EQU	08H		; Select input to printer.
INIT	EQU	04H		; Initialize printer.
AUTOF	EQU	02H		; Auto line feed after carriage return.
STROBE	EQU	01H		; Data strobe pulse.

				; 8259 interrupt controller:
IMR	EQU	21H		; Interrupt mask register.
OCW2    EQU     20H             ; Operational control word.
EOI     EQU     60H		; Specific end of interrupt.

				; Interface to C language
TRUE    EQU     1               ; Truth.
FALSE   EQU     0               ; Falsehood.


LPTX_CTRL	STRUC		; Line printer control structure:

TBUF_SEG	DW	?	; Transmit buffer segment number.
TBUF_OFF	DW	?	; Transmit buffer offset.
TBUF_SIZE	DW	?	; Transmit buffer size.

START_TDATA     DW      ?       ; Index to first character in x-mit buffer.
END_TDATA       DW      ?       ; Index to first free space in x-mit buffer.
SIZE_TDATA      DW      ?       ; Number of characters in x-mit buffer.

LPTX_BASE	DW	?	; I/O base address of printer registers.

LPTX_CTRL	ENDS		; End of the LPT control structure.

	.SBHED	<Data Storage>

	DSEG

LPT1_CTRL	LPTX_CTRL <>	; Control parameters for LPT1:

	ENDDS

	PSEG			; All the rest is code.

	.SBHED	<LPT: Interrupt Handler>
;
; INT_HNDLR - Handles Interrupts Generated by LPT:
;
;	WARNING!
;	Note the impure use of DATASEG below.  This code is not ROMmable.
;
;	There is no provision for recovery in the face of printer errors.
;
DATASEG DW      0		; Holds our data segment number.

INT_HNDLR PROC  FAR		;;; Enter here on interrupt.
        PUSH    DS		;;; Save data segment register.
        PUSH	CS:DATASEG	;;; Set up new data segment.
        POP	DS		;;;

        PUSH    ES		;;; Save previous context on existing stack.
        PUSH    BP		;;;
        PUSH    SI		;;;
        PUSH    DI		;;;
        PUSH    AX		;;;
        PUSH    BX		;;;
        PUSH    CX		;;;
        PUSH    DX		;;;

	MOV	SI,OFFSET LPT1_CTRL ;;; Setup pointer to control structure.

				;;; Clear the interrupt request first
				;;; so new request pulses will not
				;;; be ignored.
        MOV     DX,OCW2         ;;; Tell the 8259 that I'm done.
        MOV     AL,EOI		;;; Get the End-of-Interrupt code.
	OR	AL,LPT_INT	;;; Set to specific int. number.
        OUT     DX,AL		;;;

REPOLL:
	MOV	DX,[SI].LPTX_BASE	;;; Get LPT: base register.
        ADD	DX,CMDREG	;;; Point to command bits.
        IN      AL,DX		;;; Read the command bits.
        TEST	AL,IRQE		;;; Is interrupt request enable on?
         JZ     INT_END		;;; No, return from interrupt.
	ADD	DX,(STATREG-CMDREG)	;;; Point to status bits.
	IN	AL,DX		;;; Read the status bits.
	TEST	AL,BUSY		;;; Is the printer still busy?
	 JZ	INT_END		;;; Yes, ignore this interrupt.

GOODTX: CMP     [SI].SIZE_TDATA,0    ;;; See if any more data to send.
	 JNE	HAVE_DATA       ;;; If not equal then there is data to send.

;;; If no data to send then reset tx interrupt and return.
        ADD	DX,(CMDREG-STATREG) ;;;
        MOV     AL,(SELECT+INIT) ;;;
        OUT     DX,AL		;;;
        JMP SHORT INT_END	;;;

HAVE_DATA:
	MOV	ES,[SI].TBUF_SEG ;;; Get transmit buffer segment number.
	MOV	DI,[SI].TBUF_OFF ;;; Get transmit buffer offset.
        MOV     BX,[SI].START_TDATA  ;;; BX points to next char. to be sent.
	MOV	DX,[SI].LPTX_BASE	;;;
        ADD	DX,DATREG       ;;; DX equals port to send data to.
        MOV     AL,ES:[BX+DI]   ;;; Get data from buffer.
        OUT     DX,AL           ;;; Put data in output register.
	ADD	DX,(CMDREG-DATREG) ;;; Point to command register.
        MOV     AL,(IRQE+SELECT+INIT+STROBE) ;;; Prepare to strobe data.
	OUT	DX,AL		;;; Set strobe high.
        MOV     AL,(IRQE+SELECT+INIT) ;;;
	OUT	DX,AL		;;; Set strobe low.
        INC     BX              ;;; Increment START_TDATA.
        CMP     BX,[SI].TBUF_SIZE	;;; See if gone past end.
	 JB	NTADJ           ;;; If not then skip.
        XOR     BX,BX		;;; Reset to beginning.
NTADJ:  MOV     [SI].START_TDATA,BX  ;;; Save START_TDATA.
        DEC     [SI].SIZE_TDATA      ;;; One less character in x-mit buffer.
	JMP	REPOLL		;;; Check again is ready for next char.

INT_END:
        POP     DX		;;; Restore previous context.
        POP     CX		;;;
        POP     BX		;;;
        POP     AX		;;;
        POP     DI		;;;
        POP     SI		;;;
        POP     BP		;;;
        POP     ES		;;;
        POP     DS		;;;
        IRET			;;; Return from interrupt.

INT_HNDLR ENDP

	.SBHED	<LPT_INI -- Initialize Communication Port>

; void
; lpt_ini(unit, tbuf, tbuflen, pinit)
;			/* Initializes port and interrupt vector. */
; int unit;		/* 1 ==> LPT1:, 2 ==> LPT2:. */
; char *tbuf;		/* Transmit buffer address. */
; int tbuflen;		/* Transmit buffer length. */
; bool pinit;		/* TRUE ==> force printer initialization. */

;	Initialize the Intel 8250 and set up interrupt vector to int_hndlr.

IF LDATA
	BENTRY	LPT_INI	<UNIT,TBOFF,TBSEG,TBLEN,PINIT>
ELSE
	BENTRY	LPT_INI	<UNIT,TBOFF,TBLEN,PINIT>
ENDIF

        MOV     AX,DS		; Copy our data segment number.
IFE LDATA
	MOV	ES,AX		; Save for buffer addresses.
ENDIF
        MOV     CS:DATASEG,AX	; Store segment # in code space (gulp!).

	MOV	SI,OFFSET LPT1_CTRL ; Setup pointer to control structure.

				; Pickup printer port from BIOS:
        PUSH    DS		; Save current data segment.
        XOR     AX,AX		; Zero AX.
        MOV     DS,AX		; Switch to segment zero.
	MOV	AX,WORD PTR DS:PRINTER_BASE ; Get the printer port.
	POP	DS		; Restore our data segment.
	MOV	[SI].LPTX_BASE,AX	; Save printer base address.

IF LDATA
	MOV	AX,TBSEG	; Get the transmit buffer segment number.
ELSE
	MOV	AX,ES		; Default transmit buffer segment number.
ENDIF
	MOV	[SI].TBUF_SEG,AX	; Save it.
	MOV	AX,TBOFF	; Copy the transmit buffer offset.
	MOV	[SI].TBUF_OFF,AX	;
	MOV	AX,TBLEN	; Copy the transmit buffer length.
	MOV	[SI].TBUF_SIZE,AX	;

	XOR	AX,AX		; Clear the accumulator.
	MOV	[SI].START_TDATA,AX	; Reset start of transmitted data.
	MOV	[SI].END_TDATA,AX	; Reset end of transmitted data.
	MOV	[SI].SIZE_TDATA,AX	; Reset number of transmitted chars.

	CMP	WORD PTR PINIT,0	; Do we want a printer init?
	 JE	NOINIT		;   (nope)
	MOV	DX,[SI].LPTX_BASE	; Get printer base address.
	ADD	DX,CMDREG	; Point to command register.
        MOV     AL,(SELECT)
        OUT     DX,AL		; Start initialization.

	MOV	AX,1000		; Prepare to burn some time.
INILOP:	DEC	AX
	JNZ	INILOP

        MOV     AL,(SELECT+INIT)
        OUT     DX,AL		; Stop initialization.
NOINIT:

				; Setup the LPT interrupt vector:
	MOV	AX,(LPT_INT+INT_OFF)	; Get the LPT: interrupt number.
	MOV	BX,OFFSET INT_HNDLR	; Start of the interrupt routine.
	BCALL	INT_SETU <AX BX CS>	; Call int_setup(vec, newip, newcs).

        CLI			; ******* Disable Interrupts *******

				;;; Enable interrupts on 8259:
        IN      AL,IMR          ;;; Get current enable bits on 8259.
	MOV	CL,LPT_INT	;;; Get interrupt number.
	MOV	BL,1		;;; Convert to
	SHL	BL,CL		;;;   bit position.
	NOT	BL		;;; Clear current
        AND     AL,BL		;;;   interrupt bit.
        OUT     IMR,AL		;;; Set enable on 8259.

        STI			;;; ******* Enable Interrupts *******
				;;; (Next instruction still disabled)
	BEND	LPT_INI

	.SBHED	<LPT_TRM -- Turn Off Interrupts and Shutdown>

; void
; lpt_trm(unit)		/* Turns off interrupts from the LPT: port. */
; int unit;		/* 1 ==> LPT1:, 2 ==> LPT2:. */

	BENTRY	LPT_TRM <UNIT>

	MOV	SI,OFFSET LPT1_CTRL ; Setup pointer to control structure.

	MOV	DX,[SI].LPTX_BASE
	ADD	DX,CMDREG	; Turn off line printer interface.
        MOV     AL,(SELECT+INIT)
        OUT     DX,AL

        IN      AL,IMR		; Turn off 8259 interrupt controller.
	MOV	CL,LPT_INT	; Get interrupt number.
	MOV	BL,1		; Convert to
	SHL	BL,CL		;   bit position.
        OR      AL,BL		; Disable this interrupt.
        OUT     IMR,AL

				; Restore the LPT interrupt vector:
	MOV	AX,(LPT_INT+INT_OFF)	; Get the LPT: interrupt number.
	BCALL	INT_REST <AX>		; Call int_restore(vec).

	BEND	LPT_TRM

	.SBHED	<LPT_OCNT -- Returns Number of Free Bytes>

; int			/* Number of free bytes in output buffer. */
; lpt_ocnt(unit)	/* Returns number of free bytes in output buffer. */
; int unit;		/* 1 ==> LPT1:, 2 ==> LPT2:. */

	BENTRY	LPT_OCNT <UNIT>

	MOV	SI,OFFSET LPT1_CTRL ; Setup pointer to control structure.

        MOV     AX,[SI].TBUF_SIZE	; Get the size of the x-mit buffer.
        SUB     AX,[SI].SIZE_TDATA	; Subtract the number of bytes used.

	BEND	LPT_OCNT

	.SBHED	<LPT_PUTC -- Queue a Character for Output>

; bool			/* Returns FALSE if no more room. */
; lpt_putc(unit, ch)	/* Writes a character to the output buffer. */
; int unit;		/* 1 ==> LPT1:, 2 ==> LPT2:. */
; char ch;		/* The character to write. */


	BENTRY	LPT_PUTC <UNIT,OCHAR>

	MOV	SI,OFFSET LPT1_CTRL ; Setup pointer to control structure.

        MOV     AX,[SI].TBUF_SIZE	; Get the size of the x-mit buffer.
        SUB     AX,[SI].SIZE_TDATA	; Subtract the number of bytes used.
	 JE	L24		; No more free space.

	MOV	ES,[SI].TBUF_SEG	; Get transmit buffer segment number.
	MOV	DI,[SI].TBUF_OFF	; Get transmit buffer offset.
        MOV     BX,[SI].END_TDATA	; BX points to free space.
        MOV     AL,OCHAR        ; Move data from stack to x-mit buffer.
        MOV     ES:[BX+DI],AL
        INC     BX              ; Increment END_TDATA to point to free space.
        CMP     BX,[SI].TBUF_SIZE	; See if past end.
         JB      L20		; If not then skip.
        XOR     BX,BX		; Adjust to beginning.
L20:	MOV     [SI].END_TDATA,BX	; Save new END_TDATA.

        INC     [SI].SIZE_TDATA	; One more character in x-mit buffer.
	MOV	DX,[SI].LPTX_BASE ; Prepare to manipulate printer interrupts.
        ADD	DX,CMDREG	; Point to printer command register.
	IN	AL,DX		; Read command register.
	TEST	AL,IRQE		; Are printer interrupts enabled?
	 JNZ	L22		; Yes, so output is active.
        MOV     AL,(IRQE+SELECT+INIT) ; No, so enable printer interrupts.
        OUT     DX,AL		;
	INT	(LPT_INT+INT_OFF) ; Request an interrupt to start output.
L22:
	MOV	AX,TRUE		; Indicate all's OK.
	JMP SHORT L26		; Go join common return code.

L24:	MOV	AX,FALSE	; No more space in buffer.

L26:	BEND	LPT_PUTC

	.SBHED	<LPT_STAT -- Return Line Printer Hardware Status>

; int			/* Returns printer status bits. */
; lpt_stat(unit)	/* Reads printer hardware status. */
; int unit;		/* 1 ==> LPT1:, 2 ==> LPT2:. */

	BENTRY	LPT_STAT <UNIT>

	MOV	SI,OFFSET LPT1_CTRL ; Setup pointer to control structure.

	MOV	DX,[SI].LPTX_BASE	; Get LPT: base register.
        ADD	DX,STATREG	; Point to status bits.
        IN      AL,DX		; Read the status bits.
	XOR	AH,AH		; Clear high bits.
				; Return result in AX.
	BEND	LPT_STAT

	ENDPS
        END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0202

     Volume in drive A has no label
     Directory of A:\

    BEAUTY   H        6542   1-01-84   4:04p
    BMAC     MAC      8084   1-01-84   4:06p
    BMACTST  ASM      1506   1-01-84   4:11p
    COMMMSGS DOC     11374   1-16-84   8:51p
    COMMREAD ME       1887   1-10-84  11:14p
    COM_PKG  ASM     28415   1-01-84   4:17p
    COM_PKG1 ASM     12045   1-01-84   4:20p
    CRC      TXT      1616   2-05-85   9:55a
    CRCK4    COM      1536  10-21-82   5:50p
    DOS      MAC      2056   1-01-84   4:06p
    EXIO     ASM      8003   1-01-84   4:22p
    EXMEM    ASM      7054   1-01-84   4:23p
    EXMEM    H         338   1-01-84   4:04p
    GLASSTTY PAS      2079   1-01-84   4:02p
    INT_PKG  ASM     12893   1-01-84   4:26p
    LPT_PKG  ASM     15875   1-01-84   4:29p
    README            4076   2-04-85   8:27p
    TITLE    MAC       699   1-01-84   4:07p
    TRUTH    H         305   1-01-84   4:04p
    TSTCOM   C        3519   1-01-84   4:07p
    TSTCOM2  C        3731   1-01-84   4:09p
    TSTEXMEM C        1361   1-01-84   4:09p
    TSTINT   C        2426   1-01-84   4:10p
    TSTLPT   C        2185   1-01-84   4:11p
           24 file(s)     139605 bytes
                           14848 bytes free
