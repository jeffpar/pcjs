---
layout: page
title: "80386 Opcodes: LOADALL"
permalink: /documents/manuals/intel/80386/ops/LOADALL/
redirect_from: /docs/x86/ops/LOADALL/
---

### LOADALL

Excerpt from [http://www.rcollins.org/secrets/opcodes/LOADALL.html](http://www.rcollins.org/secrets/opcodes/LOADALL.html):

	(LOADALL) An undocumented op code used by ICE host software and
	diagnostics software to test CPU functionality. This instruction
	has the ability to bypass the entire protection checking mechanism
	in the CPU, and therefore can be used to test many aspects of CPU
	behavior that can't be duplicated by any other software means.
	
	Read LOADALL magazine article and download LOADALL demo source code.
	
	Undocumented:  Available on all 80386 processors.
	               Useful for diagnostics purposes on production
	                CPU's.
	               Useful for ICE BONDOUT CPU's to return the
	                processor to EMUlation state.
	                                                          LOADALL
	Flags:                                 Loads the entire CPU state
	All flags set according to                +----------+----------+
	the LOADALL flags image.                  | 00001111 | 00000111 |
	                                          +----------+----------+
	                                          |    0F    |    07    |
	                                          +----------+----------+
	Input:  ES:EDI points to the                         Clocks:  122
	        LOADALL register image.                   Bus Cycles:  51
	
	LOADALL loads the entire CPU state from a table pointed to by
	ES:EDI.  At the completion of LOADALL, the CPU state is defined
	according to this table.  No protection checks are performed
	against values in the table, and LOADALL can generate no
	exceptions in real mode, or in protected mode at IOPL 0.
	Attempting to execute LOADALL at any other privilege level will
	generate an exception 13.
	
	There are three types of structures in the LOADALL image:
	1) 32-bit CPU registers entries;
	2) 16-bit segment registers (zero-extended to 32-bits);
	3) 96-bit segment descriptor cache entries.
	
	The segment register entries have the following format:
	SREG      STRUC
	          REG_VAL   DW   ?    ; low 16-bits defined
	                    DW   0    ; high 16-bits=0
	          ENDS
	          
	The segment descriptor cache entires have the following format:
	DESC_CACHE     STRUC
	                         DB   0    ; b[00-07] not used
	               S_USE     DB   ?    ; b[14]    operand size
	               S_Access  DB   ?    ; b[16-23] Access Rights
	                         DB   0    ; b[24-31] not used
	               S_Addr    DD   ?    ; Segment Address in memory
	               S_Limit   DD   ?    ; Segment size limit
	               ENDS
	
	The LOADALL tables is organized as follows:
	;----------------------------------------------------------------
	; LOADALL table pointed to by ES:EDI
	;----------------------------------------------------------------
	Offset  Description     Size    Value
	======  ===========     ====    =====
	[00]    CR0             DD      ?
	[04]    EFLAGS          DD      ?
	[08]    EIP             DD      ?
	[0C]    EDI             DD      ?
	[10]    ESI             DD      ?
	[14]    EBP             DD      ?
	[18]    ESP             DD      ?
	[1C]    EBX             DD      ?
	[20]    EDX             DD      ?
	[24]    ECX             DD      ?
	[28]    EAX             DD      ?
	[2C]    DR6             DD      ?
	[30]    DR7             DD      ?
	[34]    TR_REG          SREG       <?>
	[38]    LDT_REG SREG       <?>
	[3C]    GS_REG          SREG       <?>
	[40]    FS_REG          SREG       <?>
	[44]    DS_REG          SREG       <?>
	[48]    SS_REG          SREG       <?>
	[4C]    CS_REG          SREG       <?>
	[50]    ES_REG          SREG       <?>
	[54]    TSS_DESC        DESC_CACHE <?,?,?>
	[60]    IDT_DESC        DESC_CACHE <0,?,?>
	[6C]    GDT_DESC        DESC_CACHE <0,?,?>
	[78]    LDT_DESC        DESC_CACHE <?,?,?>
	[84]    GS_DESC DESC_CACHE <?,?,?>
	[90]    FS_DESC DESC_CACHE <?,?,?>
	[9C]    DS_DESC DESC_CACHE <?,?,?>
	[A8]    SS_DESC DESC_CACHE <?,?,?>
	[B4]    CS_DESC DESC_CACHE <?,?,?>
	[C0]    ES_DESC DESC_CACHE <?,?,?>
	[CC]    LENGTH OF TABLE
	The following two diagrams take a closer look at fields within
	the LOADALL table:
	1) the descriptor cache register;
	2) the access rights within the descriptor cache register.
	;---------------------------------------------------------------------
	; Segment descriptor cache register
	;
	; 9              6                     3   2             1 1   0   0
	; 5              3                     1   3             5 3   7   0
	; +--------------+---------------------+---+---------------+---+---+
	; | 32-bit limit | 32-bit base address | 0 | Access Rights | 0 | 0 |
	; +--------------+---------------------+---+---------------+---+---+
	;
	;---------------------------------------------------------------------
	; 386 Descriptor Cache Access Rights
	;
	;  ++++++++----------------------------- 0=Undefined
	;  |||||||| +--------------------------- Present      0=No  1=Yes
	;  |||||||| |++------------------------- Descriptor privelege level
	;  |||||||| |||+------------------------ System Desc. 0=Sys 1=Code/Data
	;  |||||||| ||||+++--------------------- Type(*)
	;  |||||||| ||||||+-----------------------Read/Write 0=R/O 1=R/W
	;  |||||||| |||||+|-----------------------Expansion  0=Up  1=Dwn
	;  |||||||| ||||+||-----------------------Executable 0=No  1=Yes*
	;  |||||||| |||||||                        000=Read Only
	;  |||||||| |||||||                        001=Read/Write
	;  |||||||| |||||||                        010=Read Only, Expand down
	;  |||||||| |||||||                        011=Read/Write, Expand down
	;  |||||||| |||||||                        100=Execute only
	;  |||||||| |||||||                        101=Execute/Read
	;  |||||||| |||||||                        110=Execute only, conforming
	;  |||||||| |||||||                        111=Execute/Read, conforming
	;  |||||||| |||||||+-------------------- Accessed
	;  |||||||| |||||||| +------------------ 0=Undefined (was G bit)
	;  |||||||| |||||||| |+----------------- Default operand size(+)
	;  |||||||| |||||||| ||            0=16-bit operands
	;  |||||||| |||||||| ||            1=32-bit operands
	;  |||||||| |||||||| ||
	;  |||||||| |||||||| ||++++++-++++++++-- 0=Undefined
	;  |||||||| |||||||| |||||||| ||||||||
	;  |||||||| |||||||| |||||||| ||||||||
	; 3||||||||2||||||||1||||||||0||||||||0 Bit
	; 1||||||||3||||||||5||||||||7||||||||0 Offset
	; +++++++++++++++++++++++++++++++++++++
	; | Intel  |22221111|11|Intel| Intel  | (*) = CS can be marked as a R/W
	; |Reserved|32109876|54|Rsvd.|Reserved|       data segment if LOADALL
	; +++++++++++++++++++++++++++++++++++++       is used to load register.
	;                                       (+) = Only applicable for CS
	;
	;---------------------------------------------------------------------
	;---------------------------------------------------------------------
	; A closer look at the access rights field definitions:
	;
	;  2 2 2 2 1 1 1 1 1 1 1  Bit     2 2 2 2 1 1 1 1 1 1
	;  3 2 1 0 9 8 7 6 5 4 3  Offset  3 2 1 0 9 8 7 6 5 4
	; +-+---+-+-----+-+-+-+-+        +-+---+-+-----+-+-+-+
	; |P|DPL|S|Type |A|0|G|D|        |P|DPL|S| Type  |G|D|
	; | | | |0| | | | | | | |        | | | |1| | | | | | |
	; +-+---+-+-----+-+-+-+-+        +-+---+-+-----+-+-+-+
	; Bit:
	; P     Present bit.  1=Present, 0=Not present.
	;         This bit signals the CPU if the segment addressed by the
	;         segment base address is actually present in memory.
	; DPL   Descriptor Privilege Level:  0=highest, 3=lowest
	; S     System descriptor:  0=Code, Data; 1=System descriptor
	; Type  Segment Type:  (S=0)
	;         +-+-+-+
	;         |X|Y|Z|
	;         +-+-+-+
	;          | | |
	;          | | +-- Read/Write            0=Read-only  1=Read/Write
	;          | +---- Expansion direction.  0=Expand up  1=Expand down
	;          +------ Executable            0=Data Seg   1=Code Seg
	; Type  Segment Type:  (S=1)
	;         0000 = Reserved
	;         0001 = Available 286 TSS
	;         0010 = LDT
	;         0011 = Busy 286 TSS
	;         0100 = 286 Call Gate
	;         0101 = Task Gate
	;         0110 = 286 Interrupt Gate
	;         0111 = 286 Trap Gate
	;         1000 = Reserved
	;         1001 = Available 386, 486 TSS
	;         1010 = Reserved
	;         1011 = Busy 386, 486 TSS
	;         1100 = 386, 486 Call Gate
	;         1101 = Reserved
	;         1110 = 386, 486 Interrupt Gate
	;         1111 = 386, 486 Trap Gate
	; A     Accessed  (S=0)          0=Not Accessed 1=Accessed
	;         The processor sets this bit when the descriptor is
	;         accessed.
	; G     Granularity                      0=Byte 1=4k
	;         When set, upon loading the limit field of the descriptor
	;         cache register, the CPU shifts the limit by 12, and fills
	;         in the 1st 12 bits with 1's as follows:
	;           SHL   LIMIT,12
	;           OR    LIMIT,0FFFh
	; D     Default operand size             0=16-bit       1=32-bit
	;         When set, the CPU interprets all operands, and effective
	;         addresses as 32-bit values.  When clear, all operands
	;         and effective addresses are 16-bit values.  This bit
	;         is only applicable to the CS descriptor cache.
	;---------------------------------------------------------------------
	;---------------------------------------------------------------------
	; The definition of these bits is exactly as that of the access
	; rights in the descriptor table, with the following exceptions:
	; 1) The "PRESENT" bit becomes a valid bit.  Using LOADALL, you
	;    may load a descriptor cache register whose P bit is marked
	;    not present (P=0).  During normal CPU operaion, simply
	;    loading the segment selector with a descriptor table entry
	;    whose P=0 will cause an exception-11.  This is different
	;    that operating with LOADALL.  LOADALL will let you load the
	;    descriptor cache register with P=0.  But any memory
	;    reference using that segment selector will cause exception-
	;    13.
	; 2) The DPL field for SS & CS descriptors determine the CPL.
	; 3) The DPL field for DS, ES, FS, & GS should be 3.
	; 4) The Granularity (G) bit has no effect on the limit field
	;    in the descriptor cache register
	; 5) A Code segment (CS) may be Read/Write/Executable by setting
	;    the access rights as a Read/Write/Data segment.  This will
	;    even work in protected mode.
	;---------------------------------------------------------------------

The following related files were saved on February 16, 2015 from [http://www.rcollins.org](http://www.rcollins.org/):

  - [The LOADALL Instruction](tspec_a3_doc.html)
  - [286LOAD.ASM](286load.asm)
  - [386LOAD.ASM](386load.asm)
  - [CPU_TYPE.ASM](cpu_type.asm)
  - [EMULOAD.ASM](emuload.asm)
  - [LOADFNS.286](loadfns.286.asm)
  - [LOADFNS.386](loadfns.386.asm)
  - [MACROS.286](macros.286.asm)
  - [MACROS.386](macros.386.asm)
