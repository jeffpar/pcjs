;
; Posted in comp.sys.ibm.pc by Michael A. Shiels 8/16/89
; From https://groups.google.com/forum/#!searchin/comp.sys.ibm.pc/single-step$20interrupt/comp.sys.ibm.pc/irWPIdzmCHQ/SyqEtq9mqCEJ
;
; Converted from MASM syntax to NASM syntax by Jeff Parsons 4/3/15
;

;;	title	CPUID - Determine CPU & NDP Type
;;	page	58,122
;;	name	CPUID

;
; CPUID uniquely identifies each NEC & Intel CPU & NDP.
;
; Environments tested in:
;
;		   CPU Speed
;    System	    in MHz	CPU		NDP
;    ------	   ---------	---		---
;    IBM PC AT		6	Intel 80286	Intel 80287
;    IBM PC AT		9	Intel 80286	Intel 80287
;    IBM PC AT		6	Intel 80286	none
;    IBM PC AT		8.5	Intel 80286	none
;    IBM PC		4.77	Intel 8088	Intel 8087-3
;    IBM PC		4.77	Intel 8088*	Intel 8087-3
;    IBM PC XT		4.77	Intel 8088	none
;    IBM PC XT		4.77	Intel 8088	Intel 8087-3
;    IBM PC Portable	4.77	NEC V20		none
;    COMPAQ		4.77	Intel 8088	none
;    COMPAQ		4.77	NEC V20		none
;    AT&T PC 6300	8	Intel 8086	Intel 8087-2
;    AT&T PC 6300	8	NEC V30		Intel 8087-2
;    Tandy 2000		8	Intel 80186	none
;
;    * = faulty CPU
;
; Original code by:
;
;	Bob Smith    May 1985
;	Qualitas, Inc.
;	8314 Thoreau Dr.
;	Bethesda, MD   20817
;
; Arthur Zachai suggested the technique to distinguish within the
; 808x and 8018x families by exploiting the difference in the
; length of their pre-fetch instruction queues.
;
; Published in PC Tech Journal - April 1986 - Vol 4 No 4
;

	CPU 	8086

struc ARG_STR
ARG_BP	resw	1	; caller's BP
ARG_OFF	resw	1	; caller's offset
ARG_SEG resw	1	;	   segment
ARG_FLG resw	1	;	   flags
endstruc

; Record to define bits in the CPU's & NDP's flags' registers

CPU_CF	 equ	0001h
CPU_PF	 equ	0004h
CPU_AF	 equ	0010h
CPU_ZF	 equ	0040h
CPU_SF	 equ	0080h
CPU_TF	 equ	0100h
CPU_IF	 equ	0200h
CPU_DF	 equ	0400h
CPU_OF	 equ	0800h
CPU_IOPL equ	3000h
CPU_NT	 equ	4000h

NDP_IM	 equ	0001h
NDP_DM	 equ	0002h
NDP_ZM	 equ	0004h
NDP_OM	 equ	0008h
NDP_UM	 equ	0010h
NDP_PM	 equ	0020h
NDP_IEM	 equ	0080h
NDP_PC	 equ	0300h
NDP_IC	 equ	1000h

;   FLG_PIQL	Pre-fetch instruction queue length, 0 => 4-byte, 1 => 6-byte
;   FLG_08	Intel 808x
;   FLG_NEC	NEC V20 or V30
;   FLG_18	Intel 8018x
;   FLG_28	Intel 8028x
;   FLG_87	Intel 8087
;   FLG_287	Intel 80287
;
;   FLG_CERR	Faulty CPU
;   FLG_NERR	Faulty NDP switch setting

FLG_CPU		equ	0007h

; CPU-related flags

FLG_PIQL	equ	001b
FLG_08		equ	000b
FLG_NEC		equ	010b
FLG_18		equ	100b
FLG_28		equ	110b
FLG_8088	equ	FLG_08
FLG_8086	equ	FLG_08  | FLG_PIQL
FLG_V20		equ	FLG_NEC
FLG_v30		equ	FLG_NEC | FLG_PIQL
FLG_80188	equ	FLG_18
FLG_80186	equ	FLG_18  | FLG_PIQL
FLG_80286	equ	FLG_28  | FLG_PIQL

FLG_NDP		equ	0018h

; NDP-related flags

FLG_NP		equ	00b << 3
FLG_87		equ	01b << 3
FLG_287		equ	10b << 3

; Assorted constants

BEL		equ	07h
LF		equ	0ah
CR		equ	0dh
EOS		equ	'$'

POPFF	macro
	local	L1,L2
	jmp	short L2		; skip over IRET
L1:
	iret				; pop the CP & IP pushed below along
					; with the flags, our original purpose
L2:
	push	cs			; prepare for IRET by pushing CS
	call	L1			; push IP, jump to IRET
	endm				; POPFF macro

TAB	macro	TYP
	push	bx			; save for a moment
	and	bx,mask FLG_&TYP	; isolate flags
	mov	cl,FLG_&TYP		; shift amount
	shr	bx,cl			; shift to low-order
	shl	bx,1			; times two to index table of words
	mov	dx,TYP&MSG_TAB[bx]	; ds:dx => descriptive message
	pop	bx			; restore
	mov	ah,09h			; function code to display string
	int	21h			; request dos service
	endm				; TAB macro

INT_VEC	segment at 0			; start INT_VEC segment
		dd	?		; pointer to INT 00h
INT01_OFF	dw	?		; pointer to INT 01h
INT01_SEG	dw	?
INT_VEC	ends				; end INT_VEC segment

I11_REC	record	I11_PRN:2,I11_RSV1:2,I11_COM:3,I11_RSV2:1,I11_DISK:2,I11_VID:2,I11_RSV3:2,I11_NDP:1,I11_IPL:1

	.section data

OLDINT01_VEC	label	dword		; save area for original INT 01h handler
OLDINT01_OFF	dw	?
OLDINT01_SEG	dw	?

NDP_CW	label	word			; save area for NDP control word
		db	?
NDP_CW_HI	db	0		; high byte of control word
NDP_ENV		dw	7 dup(?)	; save area for NDP environment

DATA	ends
	subttl	Message Data Area
	page

MDATA	segment	byte public 'data'	; start MDATA segment

	assume	ds:PGROUP

MSG_START	db	'CPUID -- Version 1.0'
		db	CR,LF,CR,LF,EOS
MSG_8088	db	'CPU is an Intel 8088.'
		db	CR,LF,EOS
MSG_8086	db	'CPU is an Intel 8086.'
		db	CR,LF,EOS
MSG_V20		db	'CPU is an NEC V20.'
		db	CR,LF,EOS
MSG_V30		db	'CPU is an NEC V30.'
		db	CR,LF,EOS
MSG_80188	db	'CPU is an Intel 80188.'
		db	CR,LF,EOS
MSG_80186	db	'CPU is an Intel 80186.'
		db	CR,LF,EOS
MSG_UNK		db	'CPU is a maverick -- 80288??.'
		db	CR,LF,EOS
MSG_80286	db	'CPU is an Intel 80286.'
		db	CR,LF,EOS

CPUMSG_TAB	dw	PGROUP:MSG_8088		; 000 = Intel 8088
		dw	PGROUP:MSG_8086		; 001 = Intel 8086
		dw	PGROUP:MSG_V20		; 010 = NEC V20
		dw	PGROUP:MSG_V30		; 011 = NEC V30
		dw	PGROUP:MSG_80188	; 100 = Intel 80188
		dw	PGROUP:MSG_80186	; 101 = Intel 80186
		dw	PGROUP:MSG_UNK		; 110 = ?
		dw	PGROUP:MSG_80286	; 111 = Intel 80286

NDPMSG_TAB	dw	PGROUP:MSG_NDPX		; 00 = No NDP
		dw	PGROUP:MSG_8087		; 01 = Intel 8087
		dw	PGROUP:MSG_80287	; 10 = Intel 80287

MSG_NDPX	db	'NDP is not present.'
		db	CR,LF,EOS
MSG_8087	db	'NDP is an Intel 8087.'
		db	CR,LF,EOS
MSG_80287	db	'NDP is an Intel 80287.'
		db	CR,LF,EOS

CERRMSG_TAB	dw	PGROUP:MSG_CPUOK	; 0 = CPU healthy
		dw	PGROUP:MSG_CPUBAD	; 1 = CPU faulty

MSG_CPUOK	db	'CPU appears to be healthy.'
		db	CR,LF,EOS
MSG_CPUBAD	db	BEL,'*** CPU incorrectly allows interrupts '
		db	'after a change to SS ***',CR,LF
		db	'It should be replaced with a more recent '
		db	'version as it could crash the',CR,LF
		db	'system at seemingly random times.',CR,LF,EOS

NERRMSG_TAB	dw	PGROUP:MSG_NDPSWOK	; 0 = NDP switch set correctly
		dw	PGROUP:MSG_NDPSWERR	; 1 = NDP switch set incorrectly

MSG_NDPSWOK	db	EOS			; no message
MSG_NDPSWERR	db	'*** Although there is an NDP installed '
		db	'on this sytem, the corresponding',CR,LF
		db	'system board switch is not properly set.  '
		db	'To correct this, flip switch 2 of',CR,LF
		db	'switch block 1 on the system board.',CR,LF,EOS

MDATA	ends				; end MDATA segment

	subttl	Main Routine
	page

CODE	segment	byte public 'prog'	; start CODE segment

	assume	  cs:PGROUP,ds:PGROUP,es:PGROUP

	org    100h			; skip over PSP

INITIAL	proc	near
	mov	dx,offset ds:MSG_START	; starting message
	mov	ah,09h			; function code to display string
	int	21h			; request DOS service

	call	CPU_ID			; check the CPU's identity

	TAB	CPU			; display CPU results
	TAB	NDP			; display NDP results
	TAB	CERR			; display CPU ERR results
	TAB	NERR			; display NDP ERR results

	ret				; return to DOS
INITIAL endp				; end INITIAL procedure

	subttl	CPU_ID Procedure
	page

CPU_ID	proc	near			; start CPU_ID procedure

	assume	cs:PGROUP,ds:PGROUP,es:PGROUP

; This procedure determines the type of CPU and NDP (if any) in use.
;
; The possibilities include:
;
;	Intel 8086
;	Intel 8088
;	NEC V20
;	NEC V30
;	Intel 80186
;	Intel 80188
;	Intel 80286
;	Intel 8087
;	Intel 80287
;
; Also checked is whether or not the CPU allows interrupts after
; changing the SS register segment.  If the CPU does, it is faulty
; and should be replaced.
;
; Further, if an NDP is installed, non-AT machines should have a
; system board switch set.  Such a discrepancy is reported.
;
; On exit, BX contains flag settings (as defined in FLG record) which
; the caller can check.  For example, to test for an Intel 80286, use
;
;	and	bx,mask FLAG_CPU
;	cmp	bx,FLG_80286
;	je	ITSA286

	irp	XX,<ax,cx,di,ds,es>	; save registers
	push	XX
	endm

; test for 80286 -- this CPU executes PUSH SP by first storing SP on
; stack, then decrementing it.  earlier CPU's decrement, THEN store.

	mov	bx,FLG_28		; assume it's a 286
	push	sp			; only 286 pushes pre-push SP
	pop	ax			; get it back
	cmp	ax,sp			; check for same
	je	CHECK_PIQL		; they are, so it's a 286

; test for 80186/80188 -- 18xx and 286 CPU's mask shift/rotate
; operations mod 32; earlier CPUs use all 8 bits of CL.

	mov	bx,FLG_18		; assume it's an 8018x
	mov	cl,32+1			; 18x masks shift counts mod 32
					; note we can't use just 32 in CL
	mov	al,0ffh			; start with all bits set

	shl	al,cl			; shift one position if 18x
	jnz	CHECK_PIQL		; some bits still on,
					; so its a 18x, check PIQL
; test for V20

	mov	bx,FLG_NEC		; assume it's an NEC V-series CPU
	call	CHECK_NEC		; see if it's an NEC chip
	jcxz	CHECK_PIQL		; good guess, check PIQL

	mov	bx,FLG_08		; it's an 808x

	subttl	Check Length of Pre-Fetch Instruction Queue
	page

; Check the length of the pre-fetch instruction queue (PIQ).
;
; xxxx6 CPUs have a PIQ length of 6 bytes,
; xxxx8 CPUs have a PIQ length of 4 bytes
;
; Self-modifying code is used to distinguish the two PIQ lengths.

CHECK_PIQL:
	call	PIQL_SUB		; handle via subroutine
	jcxz	CHECK_ERR		; if CX is 0, INC was not executed,
					; hence PIQ length is 4
	or	bx,FLG_PIQL		; PIQ length is 6

	subttl	Check for Allowing Interrupts After POP SS
	page

; Test for faulty chip (allows interrupts after change to SS register)

CHECK_ERR:
	xor	ax,ax			; prepare to address
					; interrupt vector segment
	mov	ds,ax			; DS points to segment 0

	assume	ds:INT_VEC		; tell the assembler

	cli				; nobody move while we swap

	mov	ax,offset cs:INT01	; point to our own handler
	xchg	ax,INT01_OFF		; get and swap offset
	mov	OLDINT01_OFF,ax		; save to restore later

	mov	ax,cs			; our handler's segment
	xchg	ax,INT01_SEG		; get and swap segment
	mov	OLDINT01_SEG,ax		; save to restore later

; note we continue with interrupts disabled to avoid
; an external interrupt occuring during this test

	mov	cx,1			; initialize a register
	push	ss			; save ss to store back into itself
	pushf				; move flags
	pop	ax			; ... into ax
	or	ax,mask TF		; set trap flag
	push	ax			; place onto stack
	POPFF				; ... and then into effect
					; some CPUs affect the trap flag
					; immediately, some
					; wait one instruction
	nop				; allow interrupt to take effect

POST_NOP:
	pop	ss			; change the stack segment register
					; (to itself)
	dec	cx			; normal cpu's execute this instruction
					; before recognizing the single-step
					; interrupt
	hlt				; we never get here

INT01:

; Note: IF=TF=0
; If we're stopped at or before POST_NOP, continue on

	push	bp			; prepare to address the stack
	mov	bp,sp			; hello, Mr. stack

	cmp	[bp].ARG_STR.ARG_OFF,offset cs:POST_NOP	; check offset
	pop	bp			; restore
	ja	INTO1_DONE		; we're done

	iret				; return to caller

INTO1_DONE:

; restore old INT 01h handler

	les	ax,OLDINT01_VEC		; ES:AX ==> old INT 01h handler
	assume	es:nothing		; tell the assembler
	mov	INT01_OFF,ax		; restore offset
	mov	INT01_SEG,es		; ... and segment
	sti				; allow interrupts again (IF=1)

	add	sp,3*2			; strip IP, CS, and flags from stack

	push	cs			; setup DS for code below
	pop	ds
	assume	ds:PGROUP		; tell the assembler

	jcxz	CHECK_NDP		; if cx is 0, the dec cx was executed,
					; and the cpu is ok
	or	bx,mask FLG_CERR	; it's a faulty chip

	subttl	Check For Numeric Data Processor
	page

; Test for a Numeric Data Processor -- Intel 8087 or 80287.  The
; technique used is passive -- it leaves the NDP in the same state in
; which it is found.

CHECK_NDP:
	cli				; protect FNSTENV
	fnstenv NDP_ENV			; if NDP present, save
					; current environment,
					; otherwise, this instruction
					; is ignored
	mov	cx,50/7			; cycle this many times
	loop	$			; wait for result to be stored
	sti				; allow interrupts
	fninit				; initialize processor to known state
	jmp	short $+2		; wait for initialization

	fnstcw	NDP_CW			; save control word
	jmp	short $+2		; wait for result to be stored
	jmp	short $+2
	cmp	NDP_CW_HI,03h		; check for NDP initial control word
	jne	CPUID_EXIT		; no NDP installed
	int	11h			; get equipment flags into ax
	test	ax,mask I11_NDP		; check NDP-installed bit
	jnz	CHECK_NDP1		; it's correctly set
	or	bx,mask FLG_NERR	; mark as in error

CHECK_NDP1:
	and	NDP_CW,not mask IEM	; enable interrupts
					; (IEM=0, 8087 only)
	fldcw	NDP_CW			; reload control word
	fdisi				; disable interrupts (IEM=1) on 8087,
					; ignored by 80287
	fstcw	NDP_CW			; save control word
	fldenv	NDP_ENV			; restore original NDP environment
					; no need to wait
					; for environment to be loaded
	test	NDP_CW,mask IEM		; check interrupt enable mask
					; (8087 only)
	jnz	CPUID_8087		; it changed, hence NDP is an 8087
	or	bx,FLG_287		; NDP is an 80287
	jmp	short CPUID_EXIT	; exit with falgs in BX

CPUID_8087:
	or	bx,FLG_87		; NDP is an 8087

CPUID_EXIT:
	irp    XX,<es,ds,di,cx,ax>	; restore registers
	pop    XX
	endm

	assume	ds:nothing,es:nothing
	ret				; return to caller
CPU_ID	endp				; end CPU_ID procedure

	subttl	Check For NEC V20/V30
	page

CHECK_NEC proc	near

; The NEC V20/V30 are very compatible with the Intel 8086/8088.
; The only point of "incompatibility" is that they do not contain
; a bug found in the Intel CPU's.  Specifically, the NEC CPU's
; correctly restart an interrupted multi-prefix string instruction
; at the start of the instruction.  The Intel CPU's incorrectly
; restart in the middle of the instruction.  This routine tests
; for that situation by executing such an instruction for a
; sufficiently long period of time for a timer interrupt to occur.
; If at the end of the instruction, CX is zero, it must be an NEC
; CPU; if not, it's an Intel CPU.
;
; Note that we're counting on the timer interrupt to do its thing
; every 18.2 times per second.
;
; Here's a worst case analysis: An Intel 8088/8086 executes 65535
; iterations of LODSB ES[SI] in 2+9+13*65535 = 851,966 clock ticks.
; If the Intel 8088/8086 is running at 10 MHz, each clock tick is
; 100 nanoseconds, hence the entire operation takes 85 milliseconds.
; If the timer is running at normal speed, it interrupts the CPU every
; 55ms and so should interrupt the repeated string instruction at least
; once.

	mov	cx,0ffffh		; move a lot of data
	sti				; ensure timer enabled

; execute multi-prefix instruction.  note that the value of ES as
; well as the direction flag setting is irrelevant.

	push	ax			; save registers
	push	si
	rep	lods byte ptr es:[si]
	pop	si			; restore
	pop	ax

; on exit: if cx is zero, it's an NEC CPU, otherwise it's an Intel CPU

	ret				; return to caller
CHECK_NEC endp

	subttl	Pre-Fetch Instruction Queue Subroutine
	page

PIQL_SUB proc	near

; This subroutine discerns the length of the CPU's pre-fetch
; instruction queue (PIQ).
;
; The technique used is to first ensure that the PIQ is full, then
; change an instruction which should be in a 6-byte PIQ but not in a
; 4-byte PIQ.  Then, if the original instruction is executed, the PIQ
; is 6-bytes long; if the new instruction is executed, PIQ length is 4.
;
; We ensure the PIQ is full be executing an instruction which takes
; long enough so that the Bus Interface Unit (BIU) can fill the PIQ
; while the instruction is executing.
;
; Specifically, for all byt the last STOSB, we're simple marking time
; waiting for the BIU to fill the PIQ.  The last STOSB actually changes
; the instruction.  By that time, the orignial instruction should be in
; a six-byte PIQ byt not a four-byte PIQ.

	assume	cs:PGROUP,es:PGROUP
@REP	equ	3			; repeat the store this many times
	std				; store backwards
	mov	di,offset es:LAB_INC+@REP-1 ; change the instructions
					; at ES:DI
					; and preceding
	mov	al,ds:LAB_STI		; change to a sti
	mov	cx,@REP			; give the BIU time
					; to pre-fetch instructions
	cli				; ensure interrupts are disabled,
					; otherwise a timer tick
					; could change the PIQ filling
	rep	stosb			; change the instruction
					; during execution of this instruction
					; the BIU is refilling the PIQ.  The
					; current instruction is no longer
					; in the PIQ.
					; Note at end, CX is 0.
; The PIQ begins filling here

	cld				; restore direction flag
	nop				; PIQ fillers
	nop
	nop

; The following instruction is beyond a four-byte-PIQ CPU's reach,
; but within that of a six-byte-PIQ CPU.

LAB_INC	label	byte
	inc	cx			; executed only if PIQ length is 6

LAB_STI	label	byte
	rept	@REP-1
	sti				; restore interrupts
	endm

	ret				; return to caller

	assume	ds:nothing,es:nothing
PIQL_SUB endp				; end PIQL_SUB procedure

CODE	ends				; end code segment

	end	INITIAL			; end CPU_ID module
