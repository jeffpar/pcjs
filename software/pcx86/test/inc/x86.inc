;
; X86.DESC defines (see x86.js)
;
PS_CF			equ	0x0001
PS_PF			equ	0x0004
PS_AF			equ	0x0010
PS_ZF			equ	0x0040
PS_SF			equ	0x0080
PS_TF			equ	0x0100
PS_IF			equ	0x0200
PS_DF			equ	0x0400
PS_OF			equ	0x0800
PS_ARITH		equ	(PS_CF | PS_PF | PS_AF | PS_ZF | PS_SF | PS_OF)
PS_LOGIC		equ	(PS_CF | PS_PF | PS_ZF | PS_SF | PS_OF)
PS_MULTIPLY		equ	(PS_CF | PS_OF)	; only CF and OF are "defined" following MUL or IMUL
PS_DIVIDE		equ	0		; none of the Processor Status flags are "defined" following DIV or IDIV

CR0_MSW_PE		equ	0x0001
CR0_PG			equ	0x80000000	; set if paging enabled

ACC_TYPE_GATE386_INT	equ	0x0E00
ACC_TYPE_SEG		equ	0x1000
ACC_PRESENT		equ	0x8000
ACC_TYPE_CODE		equ	0x0800
ACC_TYPE_READABLE	equ	0x0200
ACC_TYPE_WRITABLE	equ	0x0200
ACC_TYPE_CODE_READABLE	equ	0x1a00
ACC_TYPE_DATA_WRITABLE	equ	0x1200


EXT_NONE		equ	0x0000
EXT_BIG			equ	0x0040

PTE_FRAME		equ	0xfffff000
PTE_DIRTY		equ	0x00000040	; page has been modified
PTE_ACCESSED		equ	0x00000020      ; page has been accessed
PTE_USER		equ	0x00000004	; set for user level (CPL 3), clear for supervisor level (CPL 0-2)
PTE_READWRITE		equ	0x00000002	; set for read/write, clear for read-only (affects CPL 3 only)
PTE_PRESENT		equ	0x00000001   	; set for present page, clear for not-present page
