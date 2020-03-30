---
layout: page
title: "x86 Opcodes: AAA (0x37)"
permalink: /documents/manuals/intel/8086/ops/AAA/
redirect_from: /docs/x86/ops/AAA/
---

### Description

AAA converts the result of the addition of two valid unpacked BCD digits to a valid 2-digit BCD number and
takes the AL register as its implicit operand.

For the previous addition to have had any meaning, each of the two operands of the addition must have had its
lower 4 bits contain a number in the range from 0 to 9.  The AAA instruction then adjusts AL so that it contains
a correct BCD digit.  If the addition produced a decimal carry (AF=1), the AH register is incremented and the carry
(CF) and auxiliary carry (AF) flags are set to 1.  If the addition did not produce a decimal carry, CF and AF are
cleared to 0 and AH is not altered. In both cases, the high-order 4 bits of AL are cleared to 0.

Traditionally, this instruction is labeled as ASCII Adjust After Addition.  And AAA will adjust the result of the
addition of two ASCII characters that were in the range from 30h ("0") to 39h ("9"). This is because the lower 4 bits
of those characters fall in the range from 0 to 9.  The result of the addition, however, is not an ASCII character;
it is a BCD digit.

The following example shows how to add BCD numbers then adjust the result:

	MOV     AH,0        ; Clear AH for most significant digit
	MOV     AL,6        ; BCD 6 in AL
	ADD     AL,5        ; Add BCD 5 to digit in AL
	AAA                 ; AH=1, AL=1 representing BCD 11.

### Algorithm

	IF ((AL AND 0Fh)>9 OR (AF=1) THEN
	    IF (8086 OR 8088) THEN  ;See note 1
	        AL=AL+6
	    ELSE                    ;80286 or later
	        AX=AX+6
	    ENDIF
	    AH=AH+1
	    AF=1
	    CF=1
	ELSE
	    AF=0
	    CF=0
	ENDIF
	AL=AL AND 0FH

### Notes

1. The 8086 and 8088 implement AAA differently than later processors.  On the 80286 and later processors,
the first addition is performed on AX instead of AL, incrementing the AH register if a carry is generated out
of AL.  If AX contains OOFFh, executing AAA on an 8088 will leave AX=0105h.  On an 80386, the same operation
will leave AX=0205h.  Despite the different implementation, this instruction does operate as intended for all
valid operands.
2. The upper 4 bits of the AL register are always cleared to 0.  This is not noted correctly in Intel's
documentation for the 80386 and 80486.

### Flags

**O** | **D** | **I** | **T** | **S** | **Z** | **A** | **P** | **C**
:---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---:
  -   |       |       |       |   -   |   -   |   *   |   -   |   *

### Timing

Operands   | **x** | **8088** | **8086** | **80286** | **80386** | **80486**
---------- | :---: | :------: | :------: | :-------: | :-------: | :-------:
none       |   0   |     8    |     8    |     3     |     4     |     3

(x is the number of memory transfers)

---

Source: PC Magazine "Programmer's Technical Reference: The Processor and Coprocessor," by Robert L. Hummel.
