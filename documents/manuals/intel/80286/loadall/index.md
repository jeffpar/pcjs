---
layout: page
title: "Intel 80286 LOADALL Instruction"
permalink: /documents/manuals/intel/80286/loadall/
redirect_from: /pubs/pc/reference/intel/80286/loadall/
---

[The following information is from an undated 15-page Intel document titled "[Undocumented iAPX 286 Test Instruction](/documents/manuals/intel/80286/files/80286--LOADALL.pdf)", pp. 1-4]

### LOADALL (0F05H)

The iAPX 286 microprocessor (part number 80286) has an undocumented instruction used by Intel test programs to
allow direct access to internal registers for fast initialization. The instruction is called LOADALL. Each 80286
is tested with the LOADALL instruction. LOADALL is guaranteed to work on each 80286.

LOADALL allows explicit control of the descriptor cache register associated with each segment register independent
of the segment register value and descriptor tables. LOADALL can be used to extend either real mode or protected mode.
The protected mode 80286 can be extended to emulate iAPX 86 real mode programs with LOADALL. In real mode, LOADALL
can provide addressability to the other 15 Mbytes of the 286 physical address space.

The operation of LOADALL is closely tied to the internal hardware of the 80286. The iAPX 386 will not have the
same internal hardware. LOADALL will not work on an iAPX 386. The iAPX 386 has an alternative means of emulating
iAPX 86 real mode programs.

### Description

All CPU registers (including LDTR, TR, GDTR, IDTR, and MSW) are loaded from memory by this instruction.
The normally hidden descriptor cache registers for the ES, DS, SS, CS, TR, and LDT registers are also loaded.
LOADALL may be executed in either real address mode or protected mode (CPL must be 0). Any attempt to execute
LOADALL at any privilege level other than 0 in protected mode causes exception 13 with an error code of 0.

LOADALL allows direct control over the base, limit, and access rights associated with each segment register.
These values are kept in the descriptor cache registers which are normally hidden from programs. In protected mode,
LOADALL can set the selector, base address, limit, and access rights for a segment register without a descriptor
table entry corresponding to the program visible selector value. The normal protected mode protection rules can
also be changed. In real address mode, the physical address, limit, and access rights for a paragraph ID can also
be changed from the normal real mode definition.

The standard protected mode segment register loading checks (for privilege and access rights) are not performed
by LOADALL on the values loaded into the descriptor caches. Using LOADALL in iAPX 86 real mode also does not involve
any checks. Once loaded, the 80286 hardware will perform physical address calculation within the segment, offset
checks against the limit, and access rights checks for all memory accesses using that segment register in either
operating mode.

To retain protected mode system integrity, the policies used to define descriptor table contents must also be
applied to the dynamically created descriptors loaded into the descriptor cache registers with LOADALL. Once defined,
the 80286 segment access hardware will limit segment usage to the physical memory region defined.

The LOADALL instruction is encoded in two consecutive bytes as 00001111 00000101, with 00001111 at the lowest
memory address. LOADALL executes in 195 clocks and performs 51 bus cycles.

LOADALL cannot switch the 80286 from protected mode to real mode. Once in protected mode, the MSW value loaded by
LOADALL must have a one in bit position 0. The RESET input is the only way to reenter real mode.

LOADALL reads a 102 byte area of physical memory starting at physical memory location 000800H (2048). The entire
execution state of the 80286 (consisting of 24 registers) is defined upon completion of this instruction. The
descriptor cache registers for the ES, DS, SS, CS, TR, and LDT are directly loaded from this area. The instruction
requires 190 clocks with no wait states.

### LOADALL Memory Area Format ###

	Physical Address (Hex)    Associated CPU Register
	    800-805                     None
	    806-807                     MSW
	    808-815                     None
	    816-817                     TR
	    818-819                     Flag word
	    81A-81B                     IP
	    81C-81D                     LDT
	    81E-81F                     DS
	    820-821                     SS
	    822-823                     CS
	    824-825                     ES
	    826-827                     DI
	    828-829                     SI
	    82A-82B                     BP
	    82C-82D                     SP
	    82E-82F                     BX
	    830-831                     DX
	    832-833                     CX
	    834-835                     AX
	    836-83B                     ES descriptor cache
	    83C-841                     CS descriptor cache
	    842-847                     SS descriptor cache
	    848-84D                     DS descriptor cache
	    84E-853                     GDTR
	    854-859                     LDT descriptor cache
	    85A-85F                     IDTR
	    860-865                     TSS descriptor cache
        
No checks are made between the program visible selector values and the associated descriptor table entry.
LOADALL does not perform any descriptor table accesses. No checks are made regarding the type or access rights
defined by the descriptor. Any new descriptors defined by this instruction will be automatically used by subsequent
processor extension memory references.

Any subsequent segment register load instruction will reload the associated descriptor cache register in the
normal manner according to the operating mode of the CPU. In real mode, the low 4 bits and high 4 bits of the
base address are set to zero. The paragraph ID is inserted into bits 19-4 of the base address. The segment limit
is reset to FFFFH and access rights is changed to a writable segment. In protected mode, the base address, limit,
and access rights are loaded from the descriptor.

The descriptor cache entries are in the following format:

 * bytes 0-2

	24-bit physical base address of the segment. The bytes are stored in ascending order with the
	least significant byte at lowest memory address.

 * byte 3

	Access rights byte is in the format of the access byte in a descriptor. The only difference is that
	the present bit becomes a valid bit. If zero, the descriptor is considered invalid and any memory reference
	using the descriptor will cause exception 13 with an error code of zero. Loading a descriptor cache register
	with an invalid descriptor does not cause an immediate exception. Any attempted use of the descriptor to
	reference memory causes the exception. Such an exception is restartable and the saved machine state appears
	as if the instruction had not been attempted. The value loaded by LOADALL can be read without any exceptions.
	The DPL fields of the SS and CS descriptor caches determine the CPL. The DPL fields of the DS and ES descriptor
	caches should be 3. The CS descriptor may be loaded with a writable data segment descriptor.

 * bytes 4-5
 
	16-bit limit of the segment. The word is stored in two bytes in normal word format. The interpretation of
	this field is determined by the type of segment identified by byte 3. Grow-down data segments are a special
	case of how to interpret the limit field. The data sheet describes how this field works.

The GDTR and IDTR are in the following format:

 * bytes 0-2

	24-bit physical base address of segment. The bytes are stored in ascending order with the least significant
	byte at the lowest memory address.

 * byte 3

	Should be zeroes.

 * bytes 4-5

	16-bit limit of the segment. The word is stored as two bytes in normal word format.

After properly executing LOADALL, the following is required of the descriptor cache register contents:

 1. The stack segment is a writable, valid data segment.
 
 2. The code segment can be of three types: execute-only, read/execute-only, or read/write/execute.
 To be execute-only, use an execute-only code segment access rights byte value. To be execute/read-only,
 use a execute/read code segment access rights byte value. To be read/write/execute, use a writable,
 expand-up data segment access rights byte value.
 	
For proper protected mode operation, the following is required:

 3. The DPL field of the CS descriptor cache access-rights byte must equal the DPL field of the SS descriptor
 cache access rights byte. These DPL fields are the CPL of the processor.

 4. The DPL fields of the ES and DS descriptors should be 3 to prevent their being zeroed by RET or IRET
 instructions.

{% include gallery/documents.html path="/documents/manuals/intel" title="Intel 80286 Documentation" tag="80286,loadall" width="200" height="260" %}
