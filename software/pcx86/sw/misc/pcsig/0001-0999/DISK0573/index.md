---
layout: page
title: "PC-SIG Diskette Library (Disk #573)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0573/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0573"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "XASM CROSSASSEMBLER"

    XASM is a cross-assembler that allows the use of a PC as a development
    station for several target CPUs.  Among those supported are the Zilog
    Z80 family, the Intel 8048 and 8041 series, and many more.  The
    assembler uses a text macro to specify the target machine, making the
    assembler user-configurable for a specific target machine.  Also on
    this disk are demo versions of four APL language workspaces.
    
    System Requirements:  64K, one disk drive and monochrome display and
    NOTE: The APL workspaces require STSC's APL*PLUS(tm), version 3.0+, and
    at least 192K.
    
    How to Start:  With the disk in the driver, type GO. Information on
    starting XASM is given in XASM.DOC.
    
    Suggested Registration:  $50.00
    
    File Descriptions:
    
    ZPLEX    AWS  APL file - Complex number mathematical functions.
    QDOC     AWS  APL file - Make neatly paged workspace documentation.
    QSCAN    AWS  APL file - Scan/clean/edit functions and variables.
    ALL6805  ASM  Sample source file for XASM
    6805MACS ASM  Sample XASM macro file
    XASM     DOC  XASM cross-assembler documentation.
    XASM     EXE  Macro configured Cross-assembler.
    README   1ST  Information on APL workspace files.
    APLDEMO  AWS  APL workspace file - 115 public domain utility functions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 6805MACS.ASM

{% raw %}
```
	title	"6805 Cross assembler"
;6805macs.asm Copyright 1986 Stuart Venters.

rdop	macro
	 if	"#" ? "$2"
	  db	$1,"#" ^ $2
	 else
	  wrop	$1,$2,$3
	 endif
	endm

wrop	macro
	 if	"" = "$3"
	  wrop2 $1,$2
	 else
	  if "$3" = "X"
	   wrop3	$1,$2
	  else
	   wrop3	$1,$2
	   error	"A"
	  endif
	 endif
	endm

wrop2	macro
	 if	"X" = "$2"
	  db	$1+0x50
	 else
	  if	($2) < 256
	   db	$1+0x10,$2
	  else
	   db	$1+0x20
	   dw	$2
	  endif
	 endif
	endm

wrop3	macro
	 if ($2) < 256
	  if	$2
	   db	$1+0x40,$2
	  else
	   db	$1+0x50
	  endif
	 else
	  db	$1+0x30
	  dw	$2
	 endif
	endm

lda	macro
	rdop	0xa6,$1,$2
	endm

ldx	macro
	rdop	0xae,$1,$2
	endm

sta	macro
	wrop	0xa7,$1,$2
	endm

stx	macro
	wrop	0xaf,$1,$2
	endm

add	macro
	rdop	0xab,$1,$2
	endm

adc	macro
	rdop	0xa9,$1,$2
	endm

sub	macro
	rdop	0xa0,$1,$2
	endm

sbc	macro
	rdop	0xa2,$1,$2
	endm

and	macro
	rdop	0xa4,$1,$2
	endm

ora	macro
	rdop	0xaa,$1,$2
	endm

eor	macro
	rdop	0xa8,$1,$2
	endm

cmp	macro
	rdop	0xa1,$1,$2
	endm

cpx	macro
	rdop	0xa3,$1,$2
	endm

bit	macro
	rdop	0xa5,$1,$2
	endm

jmp	macro
	wrop	0xac,$1,$2
	endm

jsr	macro
	wrop	0xad,$1,$2
	endm


rmwop	macro
	 if	"" = "$3"
	  rmwop2	$1,$2
	 else
	  rmwop3	$1,$2,$3
	 endif
	endm

rmwop2	macro
	 if	"A" = "$2"
	  db	$1+0x10
	 else
	  if	"X" = "$2"
	   db	$1+0x20
	  else
	   db	$1,$2
	  endif
	 endif
	endm

rmwop3	macro
	 if	"X" = "$3"
	  if	$2 = 0
	   db	$1+0x40
	  else
	   db	$1+0x30,$2
	  endif
	 else
	  error "A"
	  db	$1+0x30,0
	 endif
	endm

inc	macro
	rmwop	0x3c,$1,$2
	endm

dec	macro
	rmwop	0x3a,$1,$2
	endm

clr	macro
	rmwop	0x3f,$1,$2
	endm

com	macro
	rmwop	0x33,$1,$2
	endm

neg	macro
	rmwop	0x30,$1,$2
	endm

rol	macro
	rmwop	0x39,$1,$2
	endm

ror	macro
	rmwop	0x36,$1,$2
	endm

lsl	macro
	rmwop	0x38,$1,$2
	endm

lsr	macro
	rmwop	0x34,$1,$2
	endm

asr	macro
	rmwop	0x37,$1,$2
	endm

asl	macro
	rmwop	0x38,$1,$2
	endm

tst	macro
	rmwop	0x3d,$1,$2
	endm

dbr	macro
	iferr	"V",(($2)>127) & (($2)<256)
	db	$1,$2
	endm

bra	macro
	dbr	0x20,($1)-$-2
	endm

brn	macro
	dbr	0x21,($1)-$-2
	endm

bhi	macro
	dbr	0x22,($1)-$-2
	endm

bls	macro
	dbr	0x23,($1)-$-2
	endm

bcc	macro
	dbr	0x24,($1)-$-2
	endm

bhs	macro
	dbr	0x24,($1)-$-2
	endm

bcs	macro
	dbr	0x25,($1)-$-2
	endm

blo	macro
	dbr	0x25,($1)-$-2
	endm

bne	macro
	dbr	0x26,($1)-$-2
	endm

beq	macro
	dbr	0x27,($1)-$-2
	endm

bhcc	macro
	dbr	0x28,($1)-$-2
	endm

bhcs	macro
	dbr	0x29,($1)-$-2
	endm

bpl	macro
	dbr	0x2a,($1)-$-2
	endm

bmi	macro
	dbr	0x2b,($1)-$-2
	endm

bmc	macro
	dbr	0x2c,($1)-$-2
	endm

bms	macro
	dbr	0x2d,($1)-$-2
	endm

bil	macro
	dbr	0x2e,($1)-$-2
	endm

bih	macro
	dbr	0x2f,($1)-$-2
	endm

bsr	macro
	dbr	0xad,($1)-$-2
	endm

brset	macro
	db	($1)*2
	dbr	$2,($3)-$-3
	endm

brclr	macro
	db	1+(($1)*2)
	dbr	$2,($3)-$-3
	endm

bset	macro
	db	0x10+($1)+($1),$2
	endm

bclr	macro
	db	0x11+($1)+($1),$2
	endm

tax	macro
	db	0x97
	endm

txa	macro
	db	0x9f
	endm

sec	macro
	db	0x99
	endm

clc	macro
	db	0x98
	endm

sei	macro
	db	0x9B
	endm

cli	macro
	db	0x9A
	endm

swi	macro
	db	0x83
	endm

rts	macro
	db	0x81
	endm

rti	macro
	db	0x80
	endm

rsp	macro
	db	0x9c
	endm

nop	macro
	db	0x9D
	endm

```
{% endraw %}

## ALL6805.ASM

{% raw %}
```
	include "6805macs.asm"
aa:equ 0x43
aaaa:equ 0x1234
;
	adc	#0x56
	adc	aa
	adc	aaaa
	adc	x
	adc	aa,x
	adc	aaaa,x
	adc	0,x
;
	add	#0x56
	add	aa
	add	aaaa
	add	x
	add	aa,x
	add	aaaa,x
	add	0,x
;
	and	#0x56
	and	aa
	and	aaaa
	and	x
	and	aa,x
	and	aaaa,x
	and	0,x
;
	asl	A
	asl	X
	asl	aa
	asl	0,x
	asl	aa,x
;
	asr	A
	asr	X
	asr	aa
	asr	0,x
	asr	aa,x
;
	bcc	$
;
	bclr	0,aa
;
	bcs	$
;
	beq	$
;
	bhcc	$
;
	bhcs	$
;
	bhi	$
;
	bhs	$
;
	bih	$
;
	bil	$
;
	bit	#0x56
	bit	aa
	bit	aaaa
	bit	x
	bit	aa,x
	bit	aaaa,x
	bit	0,x
;
	blo	$
;
	bls	$
;
	bmc	$
;
	bmi	$
;
	bms	$
;
	bne	$
;
	bpl	$
;
	bra	$
;
	brn	$
;
	brclr	0,aa,$
;
	brset	0,aa,$
;
	bset	0,aa
;
	bsr	$
;
	clc
;
	cli
;
	clr	A
	clr	X
	clr	aa
	clr	0,x
	clr	aa,x
;
	cmp	#0x56
	cmp	aa
	cmp	aaaa
	cmp	x
	cmp	aa,x
	cmp	aaaa,x
	cmp	0,x
;
	com	A
	com	X
	com	aa
	com	0,x
	com	aa,x
;
	cpx	#0x56
	cpx	aa
	cpx	aaaa
	cpx	x
	cpx	aa,x
	cpx	aaaa,x
	cpx	0,x
;
	dec	A
	dec	X
	dec	aa
	dec	0,x
	dec	aa,x
;
	eor	#0x56
	eor	aa
	eor	aaaa
	eor	x
	eor	aa,x
	eor	aaaa,x
	eor	0,x
;
	inc	A
	inc	X
	inc	aa
	inc	0,x
	inc	aa,x
;
	jmp	aa
	jmp	aaaa
	jmp	x
	jmp	aa,x
	jmp	aaaa,x
	jmp	0,x
;
	jsr	aa
	jsr	aaaa
	jsr	x
	jsr	aa,x
	jsr	aaaa,x
	jsr	0,x
;
	lda	#0x56
	lda	aa
	lda	aaaa
	lda	x
	lda	aa,x
	lda	aaaa,x
	lda	0,x
;
	ldx	#0x56
	ldx	aa
	ldx	aaaa
	ldx	x
	ldx	aa,x
	ldx	aaaa,x
	ldx	0,x
;
	lsl	A
	lsl	X
	lsl	aa
	lsl	0,x
	lsl	aa,x
;
	lsr	A
	lsr	X
	lsr	aa
	lsr	0,x
	lsr	aa,x
;
	neg	A
	neg	X
	neg	aa
	neg	0,x
	neg	aa,x
;
	nop
;
	ora	#0x56
	ora	aa
	ora	aaaa
	ora	x
	ora	aa,x
	ora	aaaa,x
	ora	0,x
;
	rol	A
	rol	X
	rol	aa
	rol	0,x
	rol	aa,x
;
	ror	A
	ror	X
	ror	aa
	ror	0,x
	ror	aa,x
;
	rsp
;
	rti
;
	rts
;
	sbc	#0x56
	sbc	aa
	sbc	aaaa
	sbc	x
	sbc	aa,x
	sbc	aaaa,x
	sbc	0,x
;
	sec
;
	sei
;
	sta	aa
	sta	aaaa
	sta	x
	sta	aa,x
	sta	aaaa,x
	sta	0,x
;
	stx	aa
	stx	aaaa
	stx	x
	stx	aa,x
	stx	aaaa,x
	stx	0,x
;
	sub	#0x56
	sub	aa
	sub	aaaa
	sub	x
	sub	aa,x
	sub	aaaa,x
	sub	0,x
;
	swi
;
	tax
;
	tst	A
	tst	X
	tst	aa
	tst	0,x
	tst	aa,x
;
	txa


```
{% endraw %}

## FILES573.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  573  XASM CROSSASSEMBLER                                   v1 DS2
---------------------------------------------------------------------------
XASM is a cross-assembler that allows the use of a PC as a development station
for several target CPUs.  Among those supported are the Zilog Z8 family, the
Intel 8048 and 8041 series, and many more.  Also on this disk are demo versions
of four APL language workspaces.
 
???????? ASM  Marco source code files (2 files)
XASM     DOC  Documentation file
XASM     EXE  Main program file
 
QSCAN    AWS  APL workspace file - Scan/clean/edit functions and variables.
QDOC     AWS  APL workspace file - Make neatly paged workspace documentation.
ZPLEX    AWS  APL workspace file - Complex number mathematical functions.
APLDEMO  AWS  APL workspace file - 115 public domain utility functions.
README   1ST  Information on APL workspace files.
 
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## NOTES573.TXT

{% raw %}
```
Program name: XASM v1.04
 
Author name:  Stuart Venters
Address:      804 Watts Drive.
              Huntsville, Alabama  35801
 
Suggested Donation:  $50.00.  This includes the latest version release disk and
user's choice of target machine definition file.
 
Program Description:
 
XASM is a macro configured cross-assembler written for single chip computers
that allows the use of a PC as a development station for several target CPUs.
It was not written for any specific machine.  It contains no built in machine
opcodes like JMP or LOAD.  Instead these are provided by macro definitions
files configured for each target microprocessor.  It was designed to eliminate
problems associated with cross-compilers such as cost, speed, error checking,
listing format, macro implementation, and portability.  Macro files are
currently available for the Seiko 1102 1112 and the SMC 1102 (these require
the object code scrambler program).  Also available are macro files for the
General Instrument PIC-1650 series, the Hitachi 6301, 6303, 63701, 6801, 6803,
and the Motorola 6800, 6801, and 6803. The Hitachi 6305 and 6805 are support-
ed, as are the Motorola 6805 and 68705.  There are also macro files for the
INTEL 8048 and 8041 series and for ZILOG Z8 family.
 
This diskette also contains abbreviated demonstration versions of four user
supported APL Workspaces, which require STSC's APL*PLUS(tm), version 3.0+,
and at least 192 K ram to run.
```
{% endraw %}

## XASM.DOC

{% raw %}
```


















				     X A S M


				  Revision 1.04


		       A macro configured cross assembler






	    Copyright 1986 by Stuart Venters  ALL RIGHTS RESERVED.
			      804 Watts Drive.
			      Huntsville, Alabama  35801








	THIS SOFTWARE MAY NOT BE USED FOR PROFIT WITHOUT PRIOR WRITTEN
	AUTHORIZATION FROM THE AUTHOR.	The price is $50 and includes
	the latest version release disk and your choice of target machine
	definition file.




		      History and available targets

     XASM is a cross assembler written for single chip computers.  It was not
     written for a specific target machine.  It contains no built in machine
     opcodes like JMP or LOAD.	Instead these are provided by a macro definition
     file for the particular target machine.

     XASM is a personal tool which I think may be of general interest.	I wrote
     this assembler after working on several single chip projects with available
     cross assemblers.	This assembler eliminates problems I had with those
     assemblers in areas of cost, speed, error checking, listing format, macro
     implementation, and portability.  It is 4 times faster than the last
     assembler I bought or about 1500 LPM on a PC-AT.  The listing is clean
     showing all of the code bytes and none of the internal macro expansions.

     XASM was written in C under CPM80.  It currently runs on MS-DOS. The port
     from CPM to MS-DOS took about two hours.  This speaks well of both C and
     the portability of XASM to other machines.

     Plans are to enhance XASM in two directions:  adding a relocating loader
     and creating a microcode assembler for custom projects.  I have made every
     effort to ensure that XASM is a reliable tool.  However, if you find a bug
     or are interested in the enhancements please drop me a note.

     XASM can be configured for a variety of targets.  The current list of
     macro files available for XASM is as follows:

	   1102MACS	   (Requires object code scrambler program.)
			   Seiko 1102 1112
			   SMC 1102

	   1650MACS	   General Instrument PIC-1650 series

	   6301MACS	   Hitachi 6301 6303 63701 6801 6803
			   Motorola 6800 6801 6803

	   6805MACS	   Hitachi 6305 6805
			   Motorola 6805 68705

	   8048MACS	   INTEL 8048 8041 series

	   Z8MACS	   ZILOG Z8 family

     It is my intention to extend this list if there is demand.  To this end
     I will construct the required macro files for other targets as they are
     ordered.


			    Operation

     The assembler is invoked by a command line as follows:

	XASM {debug} {filenames} mainfile

	    Files are read in order from left to right.
	    Filenames have ".ASM" appended to them.
	    Mainfile.ASM is the last source file.
	    Mainfile.LST is the list file.
	    Mainfile.HEX is the object file in INTEL hex format.

	    Example:
		XASM 6805MACS UTIL TEST
			Reads the macro definitions from 6805MACS.ASM
			Reads the utilities file UTIL.ASM
			Reads the test file TEST.ASM
			Writes the object file TEST.HEX
			Writes the listing file TEST.LST

	    Debug sets the internal debug level from 0 to 9.
	       -d1 is useful for watching assembler progress.
	       -d4 is useful for debugging macro definitions.

     The source file is a text file of source lines.  A source line consists of
     a possible label field, an opcode field, and possibly some operand fields
     separated by commas.  The label field, if present, starts in column 1 and
     may end with a colon.  The opcode field is a single legal variable name
     surrounded on both sides with spaces or tabs.

     A real source file follows:



;define a macro SUM which puts out 1 byte which is the sum or it's arguments
sum	  macro
	   db	  $1+($2)
	  endm

a	  equ	  16
b:	  set	  7	  ;

;now use the macro
LABEL:	  SUM	  a,b	  ;set LABEL equal to current pc,
			  ; calls macro SUM with $1="A" and $2="B"
;
b	  set	  8	  ;
;
label	  sum	  A,b	  ;same, colon and case are not significant
	  sum	  a,b	  ;same, except no label (leading space is delimiter)



			    Assembler built in functions


    SET  sets the label to the left of the SET to the expression value
	to the right.  Can be done more than once in a pass.  Value is not
	recalculated in pass 2 but is saved from pass 1.

    EQU  sets the label to the left of the EQU to the expression value
	to the right.  Label can not have a previous value. Value is not
	recalculated in pass 2 but is saved from pass 1.

    ORG  sets the program counter to the value of the expression to the
	right of the ORG.   Value is not recalculated in pass 2 but is saved
	from pass 1.

    DB	 outputs a byte or series of bytes according to the expression(s) to
	the right of the DB. Legal byte values are from -128 to 255.

    DW	 outputs a word or series of bytes according to the
	expression(s) to the right of the DW.

    PACKING sets the output mode for DW.  PACKING 0 sets MSB first and is the
	default.  PACKING 1 sets LSB FIRST.  PACKING 2 sets word mode.

    ERROR marks the current line as being in error.  The argument is a string
	with the error code.

    IFERR has two arguments.  The second is evaluated and if non-zero
	an error is caused using the first argument as the error value.
	The evaluation occurs in both pass 1 and 2.  If the expression is
	undefined, no error occurs.

    IF	 tests the expression to the right of the IF.  If the expression is
	non-zero, the if part is executed.  If the expression is zero or
	undefined, the else part is executed.  The expression is not
	recalculated in pass 2 but is saved from pass 1.  Hence if's always
	execute the same way in pass 1 and 2.

    ELSE separates the true part from the false part of an IF sequence.  Is
	optional.

    ENDIF terminates an IF sequence.  Is not optional.

    TITLE sets the current title string to the string to the right of TITLE.

    PAGE causes printing to start on a new page

    END  causes assembly to stop.  May be inside an IF statement.

    MACRO causes all lines following until an ENDM to be stored as a macro
	definition.  The macro name is the label to the left of MACRO.

    ENDM  terminates a macro definition.

    INCLUDE causes the file named in the quoted string to the right of INCLUDE
	to be included in the source stream.  Nesting is permitted.



			    Expressions
	Expressions are evaluated from left to right with no hierarchy but
	with parentheses. There are two types of operations.  These are
	numeric and string. All operations are dyadic.	They take a left
	and right value or expression in parens and put out an expression
	value.

		The numeric operations work on numeric values.	If they
		are given a string, they will use the character code of
		the first string element as the numeric value.	Arithmetic
		is 16 bit unsigned. The list of operations is as follows:

			+   addition
			-   subtraction
			*   multiply
			/   divide
			&   bitwise and
			|   bitwise or
			<   relation less than. (0 if false, 1 if true)
			>   relation greater than. (0 if false, 1 if true)
			=   relation equal to. (0 if false, 1 if true)
			!   relation not equal to. (0 if false, 1 if true)


		The string operations are included to make programming target
		machine opcode macros easier.  They operate on two strings.
		The operations are as follows:

			=  Returns 1 if the strings are equal. 0 otherwise.

			!  Returns 0 if the strings are equal. 1 otherwise.

			?  Returns 1 if the characters in the first string
			     match the first characters in the second string.
			     Else returns 0.

			^  Called with a string on the left and an expression
			     on the right.  First removes the leading characters
			     in the expression which match the string. Next
			     evaluates the rest of the expression and returns
			     result.


			    Values
     Values are the simplest form of an expression.  There are three types
     of values.  These are constants, variables, and pseudo constants.

	String constants are formed by a string of characters enclosed in
	double quotes.	A backslash is an escape character in a string.  A
	double quote can be entered by preceeding it with a backslash.	Watch
	backslashes in filenames of INCLUDE statements.  (DOS takes forward
	slashes just fine.)

	Numeric constants always begin with "0" thru "9".  Examples of
	the possible numeric constants are as follows:

		123	a simple base 10 number
		123d	the same base 10 number
		10X123	the same base 10 number

		16XABC	the base 16 number ABC
		ABCh	the same base 16 number
		0XABC	the same base 16 number (base 0 --> base 16)

		777q	the base 8 number 777
		8x777	same

		101b	the base 2 number 101
		2x101	same

		36x10Q	the base 36 number 10Q

	Variables always begin with "A" thru "Z".  The following characters
	may be "A"-"Z", "0"-"9", or  "_".  Examples of legal variables are:

		A
		A923
		a923   (The same as case does not count.)
		FIRST_ONE
		FIRST_ONE_1 (Symbol size is not limited.)

	Pseudo constants always begin with "$".

		$ means the program counter value at the beginning of the
			current source file line. (Not macro line.)

		$1 means the first macro argument
		 .
		 .
		$9 means the ninth macro argument

     Values may be preceeded by a minus sign.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0573

     Volume in drive A has no label
     Directory of A:\

    6805MACS ASM      3447   2-08-86   2:52p
    ALL6805  ASM      2208   2-08-86   2:52p
    APLDEMO  AWS     61660   3-18-86   9:32a
    FILES573 TXT      1081   2-10-87   4:22p
    GO       BAT       476   1-30-87   8:38a
    NOTES573 TXT      1471   1-30-87   8:33a
    QDOC     AWS     36453   3-15-86   6:56a
    QSCAN    AWS     27760   3-15-86   7:00a
    README   1ST       945   1-30-87   8:29a
    XASM     DOC      9544   3-05-86   5:33p
    XASM     EXE     19926   2-12-86   6:28p
    ZPLEX    AWS     21870   3-15-86  12:51a
           12 file(s)     186841 bytes
                          128000 bytes free
