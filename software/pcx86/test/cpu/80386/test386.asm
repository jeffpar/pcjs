;
;   test386.asm
;   Copyright © 2012-2018 Jeff Parsons <Jeff@pcjs.org>
;
;   This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
;
;   Overview
;   --------
;   This file is designed to run both as a test ROM and as a DOS .COM file (hence the "org 0x100"),
;   which is why it has a ".com" extension instead of the more typical ".rom" extension.
;
;   When used as a ROM, it should be installed at physical address 983296 (0xf0100) and aliased at
;   physical address 4294902016 (0xffff0100).  The jump at jmpStart should align with the CPU reset
;   address (%0xfffffff0), which will transfer control to 0xf000:0x0100.  From that point on,
;   all memory accesses should remain within the first 1Mb.
;
;   The code which attempts to update myGDT and addrGDT will have no effect when installed as a ROM,
;   which is fine, because those data structures are predefined with appropriate ROM-based addresses.
;
;   See the machine configuration file "/tools/pc/test386.json5" for a test machine that can load
;   this file as a ROM image.
;
;   REAL32 Notes
;   ------------
;   REAL32 is NOT enabled by default, because based on what I've seen in VirtualBox (and notes at
;   http://geezer.osdevbrasil.net/johnfine/segments.htm), if CS is loaded with a 32-bit code segment
;   while in protected-mode and we then return to real-mode, even if we immediately perform a FAR jump
;   with a real-mode CS, the base of CS will be updated, but all the other segment attributes, like
;   the 32-bit EXT_BIG attribute, remain unchanged.  As a result, the processor will crash as soon as
;   it starts executing 16-bit real-mode code, because it's being misinterpreted as 32-bit code, and
;   there doesn't appear to be anything you can do about it from real-mode.
;
;   The work-around: you MUST load CS with a 16-bit code segment BEFORE returning to real-mode.
;
;   "Unreal mode" works by setting OTHER segment registers, like DS and ES, to 32-bit segments before
;   returning to real-mode -- just not CS.  SS probably shouldn't be set to a 32-bit segment either,
;   because that causes implicit pushes to use ESP instead of SP, even in real-mode.
;
;   The code below ensures that, before returning to real-mode, all of CS, DS, ES, and SS contain
;   16-bit protected-mode selectors; note, however, that my 16-bit protected-mode data descriptor uses
;   a full 20-bit limit, so DS, ES, and SS will still have a limit of 1Mb instead of the usual 64Kb,
;   even after returning to real-mode.  I use the larger limit because it's convenient to have access
;   to the first 1Mb in protected-mode, with or without a 32-bit data segment, and the larger data
;   segment limit shouldn't affect any 16-bit real-mode operations.
;
	cpu	386
	org	0x100
	section .text

	%include "dos.inc"
	%include "misc.inc"
	%include "x86.inc"

	bits	16

PAGING equ 1

;
;   If we built our data structures in RAM, we might use the first page of RAM (0x0000-0x0fff) like so:
;
;	0x0000-0x03ff	Real-mode IDT (256*4)
;	0x0400-0x0bff	Prot-mode IDT (256*8)
;	0x0c00-0x0cff	RAM_GDT (for 32 GDT selectors)
;	0x0d00-0x0d07	RAM_IDTR
;	0x0d08-0x0d0f	RAM_GDTR
;	0x0d10-0x0d13	RAM_RETF (Real-mode return address)
;	0x0d14-0x0fff	reserved
;
;   And in the second page (0x1000-0x1fff), we might build a page directory, followed by a single page table
;   that allows us to map up to 4Mb (although we'd likely only create PTEs for the first 1Mb).
;
;   However, the code to do that is currently disabled (see %ifdef RAM_GDT), because it's just as easy to define
;   the structures we need inside the .COM image and statically initialize them to the values assumed for ROM
;   operation.  For RAM operation, we tweak the structures as needed; the tweaks have no effect when loaded in ROM.
;
;RAM_GDT	equ	0x0c00
;RAM_IDTR	equ	0x0d00
;RAM_GDTR	equ	0x0d08
;RAM_RETF	equ	0x0d10
;

CSEG_REAL	equ	0xf000
CSEG_PROT16	equ	0x0008
CSEG_PROT32	equ	0x0010
DSEG_PROT16	equ	0x0018
DSEG_PROT32	equ	0x0020
SSEG_PROT32	equ	0x0028

;
;   We set our exception handlers at fixed addresses to simplify interrupt gate descriptor initialization.
;
OFF_INTDIVERR	equ	0xe000

;
;   The "defGate" macro defines an interrupt gate, given a selector (%1) and an offset (%2)
;
%macro	defGate	2
	dw	(%2 & 0xffff)
	dw	%1
	dw	ACC_TYPE_GATE386_INT | ACC_PRESENT
	dw	(%2 >> 16) & 0xffff
%endmacro

;
;   The "defDesc" macro defines a descriptor, given a name (%1), base (%2), limit (%3), type (%4), and ext (%5)
;
%assign	selDesc	0

%macro	defDesc	1-5 0,0,0,0
	%assign %1 selDesc
	dw	(%3 & 0x0000ffff)
	dw	(%2 & 0x0000ffff)
    %if selDesc = 0
	dw	((%2 & 0x00ff0000) >> 16) | %4 | (0 << 13)
    %else
	dw	((%2 & 0x00ff0000) >> 16) | %4 | (0 << 13) | ACC_PRESENT
    %endif
	dw	((%3 & 0x000f0000) >> 16) | %5 | ((%2 & 0xff000000) >> 16)
	%assign selDesc selDesc+8
%endmacro

;
;   The "setDesc" macro creates a descriptor, given a name (%1), base (%2), limit (%3), type (%4), and ext (%5)
;
%macro	setDesc 1-5 0,0,0,0
	%assign %1 selDesc
	set	ebx,%2
	set	ecx,%3
	set	dx,%4
	set	ax,%5
	call	storeDesc
	%assign selDesc selDesc+8
%endmacro

start:	nop
;
;   If we didn't CALL or PUSH anything on the stack AND we turned interrupts off, the top of our image would be
;   safe, but if we're running in RAM, we do issue a few DOS calls before switching into protected-mode and onto
;   a new stack, so we need to set SP to a safer location inside the .COM image.
;
	mov	sp,tempStack
;
;   Quick tests of unsigned 32-bit multiplication and division
;
	mov	eax,0x80000001
	imul	eax

	mov	eax,0x44332211
	mov	ebx,eax
	mov	ecx,0x88776655
	mul	ecx
	div	ecx
	cmp	eax,ebx
	jne	near error		; apparently we have to tell NASM v0.98.40 "near" for all long forward references

	xor	dx,dx
	mov	ds,dx			; DS -> 0x0000
;
;   Quick test of moving a segment register to a 32-bit register
;
	mov	eax,ds
	test	eax,eax
	jnz	near error

	jmp	initGDT
	times	32768 nop		; lots of NOPs to test generation of 16-bit conditional jumps
tempStack:
;
;   storeDesc(EBX=base, ECX=limit, DX=type, AX=ext, DI=address of descriptor)
;
storeDesc:
	cld
	push	ax
	mov	ax,cx
	stosw				; store the low 16 bits of limit from ECX
	mov	ax,bx
	stosw				; store the low 16 bits of base from EBX
	mov	ax,dx
	shr	ebx,16
	mov	al,bl
	or	ax,ACC_PRESENT
	stosw
	pop	ax
	shr	ecx,16
	and	cl,0xf
	or	al,cl
	mov	ah,bh
	stosw
	ret

addrGDT:dw	myGDTEnd - myGDT - 1	; 16-bit limit of myGDT
	dw	myGDT, 0x000f		; 32-bit base address of myGDT

myGDT:	defDesc	NULL			; the first descriptor in any descriptor table is always a dud (it corresponds to the null selector)
	defDesc	CSEG_PROT16,0x000f0000,0x0000ffff,ACC_TYPE_CODE_READABLE,EXT_NONE
	defDesc	CSEG_PROT32,0x000f0000,0x0000ffff,ACC_TYPE_CODE_READABLE,EXT_BIG
	defDesc	DSEG_PROT16,0x00000000,0x000fffff,ACC_TYPE_DATA_WRITABLE,EXT_NONE
	defDesc	DSEG_PROT32,0x00000000,0x000fffff,ACC_TYPE_DATA_WRITABLE,EXT_BIG
	defDesc	SSEG_PROT32,0x00010000,0x000effff,ACC_TYPE_DATA_WRITABLE,EXT_BIG
myGDTEnd:

addrIDT:dw	myIDTEnd - myIDT - 1	; 16-bit limit of myIDT
	dw	myIDT, 0x000f		; 32-bit base address of myIDT

myIDT:	defGate	CSEG_PROT32,OFF_INTDIVERR
myIDTEnd:

addrIDTReal:
	dw	0x3FF			; 16-bit limit of real-mode IDT
	dd	0x00000000		; 32-bit base address of real-mode IDT

initGDT:
    %ifdef RAM_GDT
	set	edi,RAM_GDT
	mov	[RAM_GDTR+2],edi
	setDesc	NULL
	xor	eax,eax
	mov	ax,cs
	shl	eax,4
	setDesc	CSEG_PROT16,eax,0x0000ffff,ACC_TYPE_CODE_READABLE,EXT_NONE
	setDesc	CSEG_PROT32,eax,0x0000ffff,ACC_TYPE_CODE_READABLE,EXT_BIG
	setDesc	DSEG_PROT16,0x00000000,0x000fffff,ACC_TYPE_DATA_WRITABLE,EXT_NONE
	setDesc	DSEG_PROT32,0x00000000,0x000fffff,ACC_TYPE_DATA_WRITABLE,EXT_BIG
	setDesc	SSEG_PROT32,0x00010000,0x000effff,ACC_TYPE_DATA_WRITABLE,EXT_BIG
	sub	edi,RAM_GDT
	dec	edi
	mov	[RAM_GDTR],di
	mov	word [RAM_RETF],toReal
	mov	word [RAM_RETF+2],cs
    %else
;
;   This code fixes the GDT and all our far jumps if we're running in RAM
;
    	xor	eax,eax
	mov	ax,cs
	shl	eax,4				; EAX == base address of the current CS
	mov	edx,eax				; save it in EDX
	mov	[cs:myGDT+CSEG_PROT16+2],ax	; update the base portions of the descriptor for CSEG_PROT16 and CSEG_PROT32
	mov	[cs:myGDT+CSEG_PROT32+2],ax
	shr	eax,16
	mov	[cs:myGDT+CSEG_PROT16+4],al
	mov	[cs:myGDT+CSEG_PROT32+4],al
	mov	[cs:myGDT+CSEG_PROT16+7],ah
	mov	[cs:myGDT+CSEG_PROT32+7],ah
	mov	eax,edx				; recover the base address of the current CS
	add	eax,myGDT			; EAX == physical address of myGDT
	mov	[cs:addrGDT+2],eax		; update the 32-bit base address of myGDT in addrGDT
	mov	eax,edx				; recover the base address of the current CS again
	add	eax,myIDT			; EAX == physical address of myIDT
	mov	[cs:addrIDT+2],eax		; update the 32-bit base address of myIDT in addrIDT
	mov	ax,cs
      %ifdef REAL32
	mov	[cs:jmpReal+5],ax		; update the segment of the FAR jump that returns us to real-mode
      %else
	mov	[cs:jmpReal+3],ax
      %endif
	mov	[cs:jmpStart+3],ax		; ditto for the FAR jump that returns us to the start of the image
    %endif
;
;   Now we want to build a page directory and a page table, but we need two pages of
;   4K-aligned physical memory.  We can use a hard-coded address (segment 0x100, corresponding
;   to physical address 0x1000) if we're running in ROM; otherwise, we ask DOS for some memory.
;
    	cmp	ax,CSEG_REAL
    	mov	ax,0x100			; default to the 2nd physical page in low memory
    	je	initPages

    	mov	bx,0x1000			; 4K paragraphs == 64K bytes
    	mov	ah,DOS_SETBLOCK			; resize the current block so we can allocate a new block
    	int	INT_DOS
    	jnc	allocPages

exitErrDOSMem:
    	mov	dx,errDOSMem

exitErrDOS:
	mov	ah,DOS_STD_CON_STRING_OUTPUT
	int	INT_DOS
	int	INT_DOSEXIT

errDOSMem:
	db     "Insufficient memory",CR,LF,'$'

allocPages:
	mov	bx,0x2000			; 8K paragraphs == 128K bytes
	mov	ah,DOS_ALLOC
	int	INT_DOS
	jc	errDOSMem
;
;   AX == segment of 64K memory block
;
initPages:
    	movzx	eax,ax
    	shl	eax,4
    	add	eax,0xfff
    	and	eax,~0xfff
	mov	esi,eax				; ESI == first physical 4K-aligned page within the given segment
    	shr	eax,4
    	mov	es,ax
    	xor	edi,edi
;
;   Build a page directory at ES:EDI with only 1 valid PDE (the first one),
;   because we're not going to access any memory outside the first 1Mb (of the first 4Mb).
;
	cld
	mov	eax,esi
	add	eax,0x1000			; EAX == page frame address (of the next page)
	or	eax,PTE_USER | PTE_READWRITE | PTE_PRESENT
	stosd
    	mov	ecx,1024-1			; ECX == number of (remaining) PDEs to write
    	sub	eax,eax
	rep	stosd
;
;   Build a page table at EDI with 256 (out of 1024) valid PTEs, mapping the first 1Mb of the
;   first 4Mb as linear == physical.
;
	mov	eax,PTE_USER | PTE_READWRITE | PTE_PRESENT
    	mov	ecx,256				; ECX == number of PTEs to write
initPT:	stosd
	add	eax,0x1000
	loop	initPT
    	mov	ecx,1024-256			; ECX == number of (remaining) PTEs to write
    	sub	eax,eax
    	rep	stosd

goProt:
	cli					; make sure interrupts are off now, since we've not initialized the IDT yet
	o32 lidt [cs:addrIDT]
	o32 lgdt [cs:addrGDT]
	mov	cr3,esi
	mov	eax,cr0
    %if PAGING
	or	eax,CR0_MSW_PE | CR0_PG
    %else
	or	eax,CR0_MSW_PE
    %endif
	mov	cr0,eax
	jmp	CSEG_PROT32:toProt32

toProt32:
	bits	32

	mov	ax,DSEG_PROT16
	mov	ds,ax
	mov	es,ax
;
;   Of the 128Kb of scratch memory we allocated, we may have lost as much as 4Kb-1 rounding
;   up to the first physical 4Kb page; the next 8Kb (0x2000) was used for a page directory and a
;   single page table, leaving us with a minimum of 116Kb to play with, starting at ESI+0x2000.
;
;   We'll set the top of our stack to ESI+0xe000.  This guarantees an ESP greater than 0xffff,
;   and so for the next few tests, with a 16-bit data segment in SS, we expect all pushes/pops
;   will occur at SP rather than ESP.
;
	add	esi,0x2000			; ESI -> bottom of scratch memory
	mov	ss,ax
	lea	esp,[esi+0xe000]		; set ESP to bottom of scratch + 56K
	lea	ebp,[esp-4]
	and	ebp,0xffff			; EBP now mirrors SP instead of ESP
	mov	edx,[ebp]			; save dword about to be trashed by pushes
	mov	eax,0x11223344
	push	eax
	cmp	[ebp],eax			; did the push use SP instead of ESP?
	jne	near error			; no, error
	pop	eax
	push	ax
	cmp	[ebp+2],ax
	jne	near error
	pop	ax
	mov	[ebp],edx			; restore dword trashed by the above pushes
	mov	ax,DSEG_PROT32
	mov	ss,ax
	lea	esp,[esi+0xe000]		; SS:ESP should now be a valid 32-bit pointer
	lea	ebp,[esp-4]
	mov	edx,[ebp]
	mov	eax,0x11223344
	push	eax
	cmp	[ebp],eax			; did the push use ESP instead of SP?
	jne	near error			; no, error
	pop	eax
	push	ax
	cmp	[ebp+2],ax
	jne	near error
	pop	ax
;
;   Test moving a segment register to a 32-bit memory location
;
	mov	edx,[0x0000]			; save the DWORD at 0x0000:0x0000 in EDX
	or	eax,-1
	mov	[0x0000],eax
	mov	[0x0000],ds
	mov	ax,ds
	cmp	eax,[0x0000]
	jne	near error
	mov	eax,ds
	xor	eax,0xffff0000
	cmp	eax,[0x0000]
	jne	near error
	mov	[0x0000],edx			; restore the DWORD at 0x0000:0x0000 from EDX
;
;   Test moving a byte to a 32-bit register with sign-extension
;
	movsx	eax,byte [cs:signedByte]
	cmp	eax,0xffffff80
	jne	near error
;
;   Test moving a word to a 32-bit register with sign-extension
;
	movsx	eax,word [cs:signedWord]
	cmp	eax,0xffff8080
	jne	near error
;
;   Test moving a byte to a 32-bit register with zero-extension
;
	movzx	eax,byte [cs:signedByte]
	cmp	eax,0x00000080
	jne	near error
;
;   Test moving a word to a 32-bit register with zero-extension
;
	movzx	eax,word [cs:signedWord]
	cmp	eax,0x00008080
	jne	near error
;
;   More assorted zero and sign-extension tests
;
    	mov	esp,0x40000
    	mov	edx,[esp]			; save word at scratch address 0x40000
    	add	esp,4
    	push	byte -128			; NASM will not use opcode 0x6A ("PUSH imm8") unless we specify "byte"
    	pop	ebx				; verify EBX == 0xFFFFFF80
    	cmp	ebx,0xFFFFFF80
    	jne	near error
    	and	ebx,0xff			; verify EBX == 0x00000080
    	cmp	ebx,0x00000080
    	jne	near error
    	movsx	bx,bl				; verify EBX == 0x0000FF80
    	cmp	ebx,0x0000FF80
    	jne	near error
    	movsx	ebx,bx				; verify EBX == 0xFFFFFF80
    	cmp	ebx,0xFFFFFF80
    	jne	near error
    	movzx	bx,bl				; verify EBX == 0xFFFF0080
    	cmp	ebx,0xFFFF0080
    	jne	near error
    	movzx	ebx,bl				; verify EBX == 0x00000080
    	cmp	ebx,0x00000080
    	jne	near error
    	not	ebx				; verify EBX == 0xFFFFFF7F
    	cmp	ebx,0xFFFFFF7F
    	jne	near error
    	movsx	bx,bl				; verify EBX == 0xFFFF007F
    	cmp	ebx,0xFFFF007F
    	jne	near error
    	movsx	ebx,bl				; verify EBX == 0x0000007F
    	cmp	ebx,0x0000007F
    	jne	near error
    	not	ebx				; verify EBX == 0xFFFFFF80
    	cmp	ebx,0xFFFFFF80
    	jne	near error
    	movzx	ebx,bx				; verify EBX == 0x0000FF80
    	cmp	ebx,0x0000FF80
    	jne	near error
    	movzx	bx,bl				; verify EBX == 0x00000080
    	cmp	ebx,0x00000080
    	jne	near error
    	movsx	bx,bl
    	neg	bx
    	neg	bx
    	cmp	ebx,0x0000FF80
    	jne	near error
    	movsx	ebx,bx
    	neg	ebx
    	neg	ebx
    	cmp	ebx,0xFFFFFF80
    	jne	near error
;
;   Test assorted 32-bit addressing modes
;
    	mov	ax,SSEG_PROT32			; we want SS != DS for the next tests
    	mov	ss,ax

    	mov	eax,0x11223344
    	mov	[0x40000],eax			; store a known word at the scratch address

    	mov	ecx,0x40000			; now access that scratch address using various addressing modes
    	cmp	[ecx],eax
    	jne	near error

    	add	ecx,64
    	cmp	[ecx-64],eax
    	jne	near error
    	sub	ecx,64

    	shr	ecx,1
    	cmp	[ecx+0x20000],eax
    	jne	near error

    	cmp	[ecx+ecx],eax
    	jne	near error

    	shr	ecx,1
    	cmp	[ecx+ecx*2+0x10000],eax
    	jne	near error

    	cmp	[ecx*4],eax
    	jne	near error

    	mov	ebp,ecx
    	cmp	[ebp+ecx*2+0x10000],eax
    	je	near error			; since SS != DS, this better be a mismatch

	mov	[0x40000],edx			; restore word at scratch address 0x40000
;
;   Now run a series of unverified opcode tests (verification will happen later, by comparing the output of the tests)
;
	cld
	mov	esi,tableOps			; ESI -> tableOps entry
testOps:
	movzx	ecx,byte [cs:esi]		; ECX == length of instruction sequence
	test	ecx,ecx				; (must use JZ since there's no long version of JECXZ)
	jz	near testDone			; zero means we've reached the end of the table
	movzx	ebx,byte [cs:esi+1]		; EBX == TYPE
	shl	ebx,6				; EBX == TYPE * 64
	movzx	edx,byte [cs:esi+2]		; EDX == SIZE
	shl	edx,4				; EDX == SIZE * 16
	lea	ebx,[cs:typeValues+ebx+edx]	; EBX -> values for type
	add	esi,3				; ESI -> instruction mnemonic
.skip:	cs lodsb
	test	al,al
	jnz	.skip

	push	ecx
	mov	ecx,[cs:ebx]			; ECX == count of values for dst
	mov	eax,[cs:ebx+4]			; EAX -> values for dst
	mov	ebp,[cs:ebx+8]			; EBP == count of values for src
	mov	edi,[cs:ebx+12]			; EDI -> values for src
	xchg	ebx,eax				; EBX -> values for dst
	sub	eax,eax				; set all ARITH flags to known values prior to tests
testDst:
	push	ebp
	push	edi
	pushfd
testSrc:
	mov	eax,[cs:ebx]			; EAX == dst
	mov	edx,[cs:edi]			; EDX == src
	popfd
	call	printOp
	call	printEAX
	call	printEDX
	call	printPS
	call	esi				; execute the instruction sequence
	call	printEAX
	call	printEDX
	call	printPS
	call	printEOL
	pushfd
	add	edi,4				; EDI -> next src
	dec	ebp				; decrement src count
	jnz	testSrc

	popfd
	pop	edi				; ESI -> restored values for src
	pop	ebp				; EBP == restored count of values for src
	lea	ebx,[ebx+4]			; EBX -> next dst (without modifying flags)
	loop	testDst

	pop	ecx
	add	esi,ecx				; ESI -> next tableOps entry
	jmp	testOps

testDone:
	jmp	doneProt

;
;   printOp(ESI -> instruction sequence)
;
;   Rewinds ESI to the start of the mnemonic preceding the instruction sequence and prints the mnemonic
;
;   Uses: None
;
printOp:
	pushfd
	pushad
.findSize:
	dec	esi
	mov	al,[cs:esi-1]
	cmp	al,32
	jae	.findSize
	call	printStr
	movzx	eax,al
	mov	al,[cs:achSize+eax]
	call	printChar
	mov	al,' '
	call	printChar
	popad
	popfd
	ret

;
;   printEAX()
;
;   Uses: None
;
printEAX:
	pushfd
	pushad
	mov	esi,strEAX
	call	printStr
	mov	cl,8
	call	printVal
	popad
	popfd
	ret

;
;   printEDX()
;
;   Uses: None
;
printEDX:
	pushfd
	pushad
	mov	esi,strEDX
	call	printStr
	mov	cl,8
	mov	eax,edx
	call	printVal
	popad
	popfd
	ret

;
;   printPS(ESI -> instruction sequence)
;
;   Uses: None
;
printPS:
	pushfd
	pushad
	pushfd
	pop	edx
.findType:
	dec	esi
	mov	al,[cs:esi-1]
	cmp	al,32
	jae	.findType
	movzx	eax,byte [cs:esi-2]
	and	edx,[cs:typeMasks+eax*4]
	mov	esi,strPS
	call	printStr
	mov	cl,4
	mov	eax,edx
	call	printVal
	popad
	popfd
	ret

;
;   printEOL()
;
;   Uses: None
;
printEOL:
	push	eax
;	mov	al,0x0d
;	call	printChar
	mov	al,0x0a
	call	printChar
	pop	eax
	ret

;
;   printChar(AL)
;
;   Uses: None
;
printChar:
	pushfd
	push	edx
	push	eax
	mov	dx,0x2FD			; EDX == COM2 LSR (Line Status Register)
.loop:	in	al,dx				;
	test	al,0x20				; THR (Transmitter Holding Register) empty?
	jz	.loop				; no
	pop	eax
	mov	dx,0x2F8			; EDX -> COM2 THR (Transmitter Holding Register)
	out	dx,al
	pop	edx
	popfd
	ret

;
;   printStr(ESI -> zero-terminated string)
;
;   Uses: ESI, Flags
;
printStr:
	push	eax
.loop:	cs lodsb
	test	al,al
	jz	.done
	call	printChar
	jmp	.loop
.done:	pop	eax
	ret

;
;   printVal(EAX == value, CL == number of hex digits)
;
;   Uses: EAX, ECX, Flags
;
printVal:
	shl	cl,2				; CL == number of bits (4 times the number of hex digits)
	jz	.done
.loop:	sub	cl,4
	push	eax
	shr	eax,cl
	and	al,0x0f
	add	al,'0'
	cmp	al,'9'
	jbe	.digit
	add	al,'A'-'0'-10
.digit:	call	printChar
	pop	eax
	test	cl,cl
	jnz	.loop
.done:	mov	al,' '
	call	printChar
	ret

TYPE_ARITH	equ	0
TYPE_ARITH1	equ	1
TYPE_LOGIC	equ	2
TYPE_MULTIPLY	equ	3
TYPE_DIVIDE	equ	4

SIZE_BYTE	equ	0
SIZE_SHORT	equ	1
SIZE_LONG	equ	2

%macro	defOp	6
    %ifidni %3,al
	%assign size SIZE_BYTE
    %elifidni %3,dl
	%assign size SIZE_BYTE
    %elifidni %3,ax
	%assign size SIZE_SHORT
    %elifidni %3,dx
	%assign size SIZE_SHORT
    %else
	%assign size SIZE_LONG
    %endif
	db	%%end-%%beg,%6,size
%%name:
	db	%1,0
%%beg:
    %ifidni %4,none
	%2	%3
    %elifidni %5,none
	%2	%3,%4
    %else
	%2	%3,%4,%5
    %endif
	ret
%%end:
%endmacro

strEAX:	db	"EAX=",0
strEDX:	db	"EDX=",0
strPS:	db	"PS=",0
strDE:	db	"#DE ",0			; when this is displayed, it indicates a Divide Error exception
achSize	db	"BWD"

ALLOPS equ 1

tableOps:
	defOp	"ADD",add,al,dl,none,TYPE_ARITH
	defOp	"ADD",add,ax,dx,none,TYPE_ARITH
	defOp	"ADD",add,eax,edx,none,TYPE_ARITH
	defOp	"OR",or,al,dl,none,TYPE_LOGIC
	defOp	"OR",or,ax,dx,none,TYPE_LOGIC
	defOp	"OR",or,eax,edx,none,TYPE_LOGIC
	defOp	"ADC",adc,al,dl,none,TYPE_ARITH
	defOp	"ADC",adc,ax,dx,none,TYPE_ARITH
	defOp	"ADC",adc,eax,edx,none,TYPE_ARITH
	defOp	"SBB",sbb,al,dl,none,TYPE_ARITH
	defOp	"SBB",sbb,ax,dx,none,TYPE_ARITH
	defOp	"SBB",sbb,eax,edx,none,TYPE_ARITH
	defOp	"AND",and,al,dl,none,TYPE_LOGIC
	defOp	"AND",and,ax,dx,none,TYPE_LOGIC
	defOp	"AND",and,eax,edx,none,TYPE_LOGIC
	defOp	"SUB",sub,al,dl,none,TYPE_ARITH
	defOp	"SUB",sub,ax,dx,none,TYPE_ARITH
	defOp	"SUB",sub,eax,edx,none,TYPE_ARITH
	defOp	"XOR",xor,al,dl,none,TYPE_LOGIC
	defOp	"XOR",xor,ax,dx,none,TYPE_LOGIC
	defOp	"XOR",xor,eax,edx,none,TYPE_LOGIC
	defOp	"CMP",cmp,al,dl,none,TYPE_ARITH
	defOp	"CMP",cmp,ax,dx,none,TYPE_ARITH
	defOp	"CMP",cmp,eax,edx,none,TYPE_ARITH
	defOp	"INC",inc,al,none,none,TYPE_ARITH1
	defOp	"INC",inc,ax,none,none,TYPE_ARITH1
	defOp	"INC",inc,eax,none,none,TYPE_ARITH1
	defOp	"DEC",dec,al,none,none,TYPE_ARITH1
	defOp	"DEC",dec,ax,none,none,TYPE_ARITH1
	defOp	"DEC",dec,eax,none,none,TYPE_ARITH1
	defOp	"MULA",mul,dl,none,none,TYPE_MULTIPLY
	defOp	"MULA",mul,dx,none,none,TYPE_MULTIPLY
	defOp	"MULA",mul,edx,none,none,TYPE_MULTIPLY
	defOp	"IMULA",imul,dl,none,none,TYPE_MULTIPLY
	defOp	"IMULA",imul,dx,none,none,TYPE_MULTIPLY
	defOp	"IMULA",imul,edx,none,none,TYPE_MULTIPLY
	defOp	"IMUL",imul,ax,dx,none,TYPE_MULTIPLY
	defOp	"IMUL",imul,eax,edx,none,TYPE_MULTIPLY
	defOp	"IMUL8",imul,ax,dx,0x77,TYPE_MULTIPLY
	defOp	"IMUL8",imul,ax,dx,-0x77,TYPE_MULTIPLY
	defOp	"IMUL8",imul,eax,edx,0x77,TYPE_MULTIPLY
	defOp	"IMUL8",imul,eax,edx,-0x77,TYPE_MULTIPLY
	defOp	"IMUL16",imul,ax,0x777,none,TYPE_MULTIPLY
	defOp	"IMUL32",imul,eax,0x777777,none,TYPE_MULTIPLY
	defOp	"DIVDL",div,dl,none,none,TYPE_DIVIDE
	defOp	"DIVDX",div,dx,none,none,TYPE_DIVIDE
	defOp	"DIVEDX",div,edx,none,none,TYPE_DIVIDE
	defOp	"DIVAL",div,al,none,none,TYPE_DIVIDE
	defOp	"DIVAX",div,ax,none,none,TYPE_DIVIDE
	defOp	"DIVEAX",div,eax,none,none,TYPE_DIVIDE
	defOp	"IDIVDL",idiv,dl,none,none,TYPE_DIVIDE
	defOp	"IDIVDX",idiv,dx,none,none,TYPE_DIVIDE
	defOp	"IDIVEDX",idiv,edx,none,none,TYPE_DIVIDE
	defOp	"IDIVAL",idiv,al,none,none,TYPE_DIVIDE
	defOp	"IDIVAX",idiv,ax,none,none,TYPE_DIVIDE
	defOp	"IDIVEAX",idiv,eax,none,none,TYPE_DIVIDE
	db	0

	align	4

typeMasks:
	dd	PS_ARITH
	dd	PS_ARITH
	dd	PS_LOGIC
	dd	PS_MULTIPLY
	dd	PS_DIVIDE

arithValues:
.bvals:	dd	0x00,0x01,0x02,0x7E,0x7F,0x80,0x81,0xFE,0xFF
	ARITH_BYTES equ ($-.bvals)/4

.wvals:	dd	0x0000,0x0001,0x0002,0x7FFE,0x7FFF,0x8000,0x8001,0xFFFE,0xFFFF
	ARITH_WORDS equ ($-.wvals)/4

.dvals:	dd	0x00000000,0x00000001,0x00000002,0x7FFFFFFE,0x7FFFFFFF,0x80000000,0x80000001,0xFFFFFFFE,0xFFFFFFFF
	ARITH_DWORDS equ ($-.dvals)/4

muldivValues:
.bvals:	dd	0x00,0x01,0x02,0x3F,0x40,0x41,0x7E,0x7F,0x80,0x81,0xFE,0xFF
	MULDIV_BYTES equ ($-.bvals)/4

.wvals:	dd	0x0000,0x0001,0x0002,0x3FFF,0x4000,0x4001,0x7FFE,0x7FFF,0x8000,0x8001,0xFFFE,0xFFFF
	MULDIV_WORDS equ ($-.wvals)/4

.dvals:	dd	0x00000000,0x00000001,0x00000002,0x3FFFFFFF,0x40000000,0x40000001,0x7FFFFFFE,0x7FFFFFFF,0x80000000,0x80000001,0xFFFFFFFE,0xFFFFFFFF
	MULDIV_DWORDS equ ($-.dvals)/4

typeValues:
	;
	; Values for TYPE_ARITH
	;
	dd	ARITH_BYTES,arithValues,ARITH_BYTES,arithValues
	dd	ARITH_BYTES+ARITH_WORDS,arithValues,ARITH_BYTES+ARITH_WORDS,arithValues
	dd	ARITH_BYTES+ARITH_WORDS+ARITH_DWORDS,arithValues,ARITH_BYTES+ARITH_WORDS+ARITH_DWORDS,arithValues
	dd	0,0,0,0
	;
	; Values for TYPE_ARITH1
	;
	dd	ARITH_BYTES,arithValues,1,arithValues
	dd	ARITH_BYTES+ARITH_WORDS,arithValues,1,arithValues
	dd	ARITH_BYTES+ARITH_WORDS+ARITH_DWORDS,arithValues,1,arithValues
	dd	0,0,0,0
	;
	; Values for TYPE_LOGIC (using ARITH values for now)
	;
	dd	ARITH_BYTES,arithValues,ARITH_BYTES,arithValues
	dd	ARITH_BYTES+ARITH_WORDS,arithValues,ARITH_BYTES+ARITH_WORDS,arithValues
	dd	ARITH_BYTES+ARITH_WORDS+ARITH_DWORDS,arithValues,ARITH_BYTES+ARITH_WORDS+ARITH_DWORDS,arithValues
	dd	0,0,0,0
	;
	; Values for TYPE_MULTIPLY (a superset of ARITH values)
	;
	dd	MULDIV_BYTES,muldivValues,MULDIV_BYTES,muldivValues
	dd	MULDIV_BYTES+MULDIV_WORDS,muldivValues,MULDIV_BYTES+MULDIV_WORDS,muldivValues
	dd	MULDIV_BYTES+MULDIV_WORDS+MULDIV_DWORDS,muldivValues,MULDIV_BYTES+MULDIV_WORDS+MULDIV_DWORDS,muldivValues
	dd	0,0,0,0
	;
	; Values for TYPE_DIVIDE
	;
	dd	MULDIV_BYTES,muldivValues,MULDIV_BYTES,muldivValues
	dd	MULDIV_BYTES+MULDIV_WORDS,muldivValues,MULDIV_BYTES+MULDIV_WORDS,muldivValues
	dd	MULDIV_BYTES+MULDIV_WORDS+MULDIV_DWORDS,muldivValues,MULDIV_BYTES+MULDIV_WORDS+MULDIV_DWORDS,muldivValues
	dd	0,0,0,0

error:	jmp	error

	times	OFF_INTDIVERR-0x100-($-$$) nop

intDivErr:
	push	esi
	mov	esi,strDE
	call	printStr
	pop	esi
;
;   It's rather annoying that the 80386 treats #DE as a fault rather than a trap, leaving CS:EIP pointing to the
;   faulting instruction instead of the RET we conveniently placed after it.  So, instead of trying to calculate where
;   that RET is, we simply set EIP on the stack to point to our own RET.
;
	mov	dword [esp],intDivRet
	iretd
intDivRet:
	ret

doneProt:
	mov	ax,DSEG_PROT16
	mov	ss,ax
	sub	esp,esp

    %ifndef REAL32
;
;   Return to real-mode, after first resetting the IDTR and loading CS with a 16-bit code segment
;
	o32 lidt [cs:addrIDTReal]
	jmp	CSEG_PROT16:toProt16
toProt16:
	bits	16
    %endif

goReal:
	mov	eax,cr0
	and	eax,~(CR0_MSW_PE | CR0_PG) & 0xffffffff
	mov	cr0,eax
jmpReal:
	jmp	CSEG_REAL:toReal

toReal:
	mov	ax,cs				; revert to the usual .COM register conventions
	mov	ds,ax
	mov	es,ax
	mov	ss,ax
	mov	sp,0xfffe

	cmp	ax,CSEG_REAL			; is CS equal to 0xf000?
spin:	je	spin ; near jmpStart		; yes, so loop around, because we have nowhere else to go
	int	INT_DOSEXIT			; no, so assume we're running under DOS and exit

;
;   Fill the remaining space with NOPs until we get to target offset 0xFFF0.
;   Note that we subtract 0x100 from the target offset because we're ORG'ed at 0x100.
;
	times	0xfff0-0x100-($-$$) nop

;
;   Unfortunately, when PC-DOS 2.0 loads our .COM file, the last 4 bytes are not valid, in part because DOS must
;   zero the last 2 bytes so that a near RET will return to the PSP's INT 0x20 and gracefully terminate the program.
;   Newer versions of DOS simply refuse to load the file (the safest thing to do), claiming insufficient memory.
;
;   To avoid these loading issues, I now omit the last 4 bytes from image, and it will still work as a ROM image as
;   long as jmpStart is at offset 0xFFF0.
;

jmpStart:
	jmp	CSEG_REAL:start			; 0000FFF0
signedWord:
	db	0x80				; 0000FFF5  80
signedByte:
	db	0x80				; 0000FFF6  80
signature:
	db	'PCJS',0			; 0000FFF7  "PCJS",0
;	db	0x00				; 0000FFFC  00
;	db	0x00				; 0000FFFD  00
;	db	0xFC				; 0000FFFE  FC (Model ID byte)
;	db	0x00				; 0000FFFF  00 (normally a checksum byte)
