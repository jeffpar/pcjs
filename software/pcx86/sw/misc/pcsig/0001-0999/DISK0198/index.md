---
layout: page
title: "PC-SIG Diskette Library (Disk #198)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0198/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0198"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "SREEN UTILITIES #3"

    File Descriptions:
    
    CASTLE   EXE  Great adventure game - combines text, pictures, animation
    CASTLE   RAN  Data file for castle.exe
    L4       EXE  Full-screen list program with 4-way scroll and search!
    L4       DOC  Documentation for above
    L4       ASM  Source for above
    MEMBRAIN EXE  Best ram disk yet - supports many config parameters
    MEMBRAIN DOC  Documentation for above
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #198, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  CASTLE  .EXE         CRC = 3E FC

--> FILE:  CASTLE  .RAN         CRC = A5 D8

--> FILE:  MEMBRAIN.EXE         CRC = 4C E5

--> FILE:  MEMBRAIN.DOC         CRC = B6 E1

--> FILE:  L4      .ASM         CRC = 04 2B

--> FILE:  L4      .EXE         CRC = 37 8D

--> FILE:  L4      .DOC         CRC = 3B FF

--> FILE:  READ    .ME          CRC = AC 9E

 ---------------------> SUM OF CRCS = 0C EF

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## L4.ASM

{% raw %}
```
	Page	80,132
	Title	LIST --- Display contents of ASCII file

	Comment	|

Command	LIST
----------------

 Purpose:  To display the contents of an ASCII file, line by
	   line, with operator positioning commands.

 Format:   LIST	[d:][path]filename[.ext]

 Remarks:  An ASCII file of any	size may be listed.

	On the COMMAND line, enter a letter or control key:-

	Letter(s)	Control key	Function
	-----------	------------	------------------------
			Enter		continue to next page
	Q, X		ESCape		terminate and exit to DOS
	T		HOME		restart	from first block (top)
	B		END		skip to	end of file (bottom)
	D	 	PgDn		scroll down one	page
	U		PgUp		scroll up one page
	H or ?		F1		list commands (HELP)
	L		left arrow	scroll left 20 columns
	R		right arrow	scroll right 20	columns
	P		up arrow	up one (previous) line
	N		down arrow	down one (next)	line

	/text				find 'text'
	A		F3		find next occurance of 'text'

			ctl-HOME	restart from CURRENT block
			ctl-PgUp	restart from first block (TOP)
			ctl-PgDn	skip to end of file (BOTTOM)
			ctl-left-arrow	reset scroll to column 1

			F1		Help
			F3		Find next
			F10		Exit

 Restrictions:
	All positioning	is relative to the current block in
	storage. The size of the block depends on the amount of
	memory available, up to	64K.

	The maximum record length currently allowed is 255.

	Logical	records	(ending	in LF and/or CR) are placed
	into the DOS screen buffer - mono or color display.

	PC-DOS Version 2.0 or later is required.

	ANSI.SYS is NOT required.

 Scanning for text:
	To scan for a character string, type a slash (/)
	followed by one or more (up to 32) characters. The
	scan text, but not the slash, is displayed on the
	command line. The entire file, from the current line,
	is scanned.

	If the text is found, the line containing it is displayed
	as a blinking line.

	If the text is NOT found, an error message is displayed
	and the display remains unchanged.

 Screen attributes:
	There are three classes of attributes used. One for
	normal display lines - lines 2 to 24, another for
	special lines - lines 1 and 25, and a third for the
	background color.

	These attributes may be changed by using DEBUG:

	 at offset 11C = 09	;special lines, hi-lighted or lt.blue
	 at offset 11D = 02	;normal lines, green
	 at offset 11E = 00	;background, black

	If these values don't match, you have a different version.
	----------------------------------------------------------

	Written	by Vernon Buerg for the IBM PC using DOS 2.0,
	and is supplied for public domain use. Not for sale or hire.

	Version	1.5, June 2, 1984.				|

	Page

Bios	Segment	At 40h			;DOS data area
	Db	16 Dup (?)
Flag	Dw	?			;Hardware features
	Db	56 Dup (?)
Cols	Dw	?			;Columns on screen
	Db	23 Dup (?)
A6845	Dw	?			;Base addr for active card
Bios	Ends


Cseg	Segment	Para Public 'CODE'
	Assume	CS:Cseg,DS:Cseg,ES:Nothing
	Org	100h
List	Proc	Far
	Mov	DX,Offset Stackx	;Local stack
	Mov	SP,DX
	Push	DS			;Standard linkage
	Xor	AX,AX			; for DOS return
	Push	AX
	Mov	AH,30h			;Check for
	Int	21h			; DOS 2.0 or later
	Cmp	AL,2
	Jb	TooBad
	Jmp	Start

TooBad:	Mov	DX,Offset Sorry		;Say Version 2 required
	Mov	AH,9
	Int	21h
	Ret
	Page
;	Constants and work areas

Special	Db	09h			;Attribute for attention
Normal	Db	02h			;Normal	display	attribute
Foregrd	Db	07h			;Fill attribute
Blink	Equ	0Fh			;Hilite	for FIND (143h blinks)

CR	Equ	0Dh
LF	Equ	0Ah
EOF	Equ	1Ah
Eor	Equ	1			;End-of-record
Nodata	Equ	2			;null record

Crt_Col	Dw	0			;Columns for display monitor
Crt_Buf	Dw	0			;Addr of display buffer
Crt_Prt	Dw	0			;Addr of display port

Index	Dw	0			;Current record	address
Reclen	Dw	0			; length
Row	Db	2			; display row
Col	Db	1			; display column
Attr	Db	02h			; screen attribute
Blknum	Db	0			; block	number
Scroll	Dw	0			;Scroll	left/right amount
First	Dw	0			;Ptr to	top line on screen
Current	Dw	0			;Ptr to	top after UP one
Last	Dw	0			;Ptr to	last record

Recaddr	Dw	0			;addr of i/o buffer
Handle	Dw	0			;File handle from open
Psize	Dw	16			;Size of a paragraph
Blksize	Dw	0			;File read size

Switch1	Db	0
Switch2	Db	0
Numlf	Db	1			;line feed count
Numcr	Db	0			;C/R count

TextMax	Db	32			;Keyboard buffer
TextLen	Db	0
TextBuf	Db	32 Dup (0)		;Scan text

Prompt	Db	'Command:'
Spaces	Db	32 Dup (32)		;Scan text entered
	Db	'Keys: PgUp PgDn Arrows ESC=exit ?=Help '
Pr_Len	Equ	This Byte - Prompt

TextMsg	Db	'*** Text not found ***'
EofMsg	Db	'   *** End-of-file ***'
EofLen	Equ	This Byte - EofMsg

Work	Db	'LIST'			;current logical record
Keyin	Db	64			;keyboard buffer size
Keyout	Db	0			; and length read
Filenm	Db	76 Dup (0)		;d:path\filename.ext

Askfile	Db	13,10,'Enter filename: $'
Openmsg	Db	'  Open failed, return code='
Opencod	Dw	'00'
	Db	'$'
Code2	Db	'File not found $'
Code3	Db	'Path not found $'
Code4	Db	'Too many files $'
Code5	Db	'Access denied  $'
Sorry	Db	Cr,Lf,'Sorry, DOS 2.0 or later required',Cr,Lf,'$'

	Org	Work+256
Workx	Equ	$-Work
Stack	Db	64 Dup (0)		;may overlay above constants
Stackx	Equ	$

	Page
;
;	Command letters and keys

What1	Db	13,32,27,81	;Cr,Sp,Esc,Q
	Db	68,85,63,72	;D,U,?,H
	Db	47,82,76,84	;/,R,L,T
	Db	80,65,78,88	;P,A,N,X
	Db	66		;B
Num1	Equ	$-What1			;How many letters

What2	Db	77,75,73,81	;->,<-,PgUp,PgDn
	Db	71,72,61,80	;HOME,^,F3,v
	Db	59,68,79,119	;F1,F10,END,^HOME
	Db	115,132,118	;^<-,^PgUp,^PgDn
Num2	Db	$-What2			;Number	of control keys

Where1	Dw	Offset NxtPage,Offset NxtPage,Offset Close, Offset Close
	Dw	Offset NxtPage,Offset Back,   Offset Got_H, Offset Got_H
	Dw	Offset Got_S,  Offset Right,  Offset Left,  Offset Top
	Dw	Offset Up1,    Offset Got_Rs, Offset Down1, Offset Close
	Dw	Offset Bottom

Where2	Dw	Offset Right,  Offset Left,   Offset Back,  Offset NxtPage
	Dw	Offset Top,    Offset Up1,    Offset Got_Rs,Offset Down1
	Dw	Offset Got_H,  Offset Close,  Offset Bottom,Offset Home
	Dw	Offset Scroll0,Offset Top,    Offset Bottom
	Page
HelpMsg	Db	CR,LF,LF
	Db	9,'LIST 1.5 by Vernon Buerg',CR,LF,LF
	Db	9,'Commands and keys:',CR,LF
	Db	CR,LF,9,'Enter        ',9,9,'continue to next page'
	Db	CR,LF,9,'ESCape or F10',9,9,'terminate'
	Db	CR,LF,9,'HOME or T    ',9,9,'restart from Top of file'
	Db	CR,LF,9,'END or B     ',9,9,'skip to Bottom of block'
	Db	CR,LF,9,'PgDn or D    ',9,9,'scroll Down one page'
	Db	CR,LF,9,'PgUp or U    ',9,9,'scroll Up one page'
	Db	CR,LF,9,'H or ?       ',9,9,'list Help for keys'
	Db	CR,LF
	Db	CR,LF,9,'left-arrow   ',9,9,'scroll Left 20 columns'
	Db	CR,LF,9,'right-arrow  ',9,9,'scroll Right 20 columns'
	Db	CR,LF,9,'up-arrow     ',9,9,'Previous, up one line'
	Db	CR,LF,9,'down-arrow   ',9,9,'Next, down one line'
	Db	CR,LF
	Db	CR,LF,9,'/text        ',9,9,'find text'
	Db	CR,LF,9,'A or F3      ',9,9,'find text Again'
	Db	'$'

	Page
;
;	Initialization

Start:	Mov	BX,PgmSize		;Length	of Cseg	and Stack
	Mov	AH,4Ah			;Modify	allocated memory
	Int	21h			; using	ES from	entry

	Call	GetParm			;Get filename from command line
Openit:	Call	Open
	Jz	Init
	Ret

Close:	Mov	BX,Handle		;End of	job
	Mov	AH,3Eh			;Close a file handle
	Int	21h

	Mov	AX,0600h		;Clear the screen
	Sub	BL,BL
	Mov	BH,Foregrd
	Sub	CX,CX			;Screen	begin
	Mov	DX,184Fh		; and end
	Int	10h
	Ret				;Return	to DOS

	Page
;
; Allocate memory for file buffer

Init:	Mov	BX,1000h		;Try for 64K more
GetMem:	Mov	AH,48h			;Allocate memory
	Int	21h
	Jc	GetMem			;Get what there	is

	Mov	RecAddr,AX		;Save segment addr
	Mov	AX,BX			;Paragraphs available
	Sub	AX,32			; less one sector
	Mul	Psize			; as bytes available
	Mov	Blksize,AX		; and as file read size

	Call	InitCrt			;Get CRT buffer	constants

	Call	Set1			;Display title line

	Call	Set25			;Display prompt	line

	Page
;
; Extract next logical record for display

Read1:	Call	ReadBlk			;Load next block
	Mov	BL,Normal
	Mov	Attr,BL
	Jnz	Read2
	Jmp	AtEnd

Read2:	Dec	Row			;Spot for incomplete record
	Cmp	Numlf,0			;record	ended in LF?
	Je	GetNext			;no, have col/row
	Inc	Row			;yes, row stays	where it is
	Mov	Col,1			; and in column	1

GetNext:
	Mov	AX,Index		;Is record in buffer?
	Cmp	AX,Last
	Jb	GotNext
	Jmp	AtEnd
GotNext:
	Call	ListOne			;Display next logical record
	Mov	CX,Reclen
	Add	Col,CL			;For end-of-block
	Mov	DH,Row
	Cmp	DH,25			;Exceeded screen?
	Jne	TestEor			; no, read next	record
	Cmp	NumLF,0			;Ended in LF?
	Jne	Wait

TEstEor:Jmp Read2			;End-of-records?

Wait:	Mov	AH,0			;Wait and read console
	Int	16h

	Mov	SI,Offset Spaces	;Clear prompt line
	Call	Msg25
	Page
;
; Process keyboard (command) input

	Cmp	AL,27			;ESCape	to exit?
	Jne	Chk00
	Jmp	Close

Chk00:	Cmp	AL,0			;Control char?
	Jne	Chk_97			; no, a	letter
	Xchg	AL,AH			; yes, get extended code
	Mov	DI,Offset What2
	Mov	BP,Offset Where2
	Mov	CL,Num2
	Jmp	Short Control

Chk_97:	Cmp	AL,97			;Lower case?
	Jl	Upper
	Sub	AL,32			;Yes, make upper

Upper:	Mov	DI,Offset What1		;Letter	table
	Mov	BP,Offset Where1	;Where-to-go list
	Mov	CL,Num1			;Number	of entries

Control:Mov	SI,DI			;Find letter/code
	Mov	CH,0			;Number	in list
	Push	DS
	Pop	ES
	Repnz	Scasb
	Jne	Wait			; if not found
	Dec	DI			;Point to letter/code
	Sub	DI,SI			;Offset	into list
	Shl	DI,1			; times	word size
	Mov	BX,Word	Ptr DS:[DI][BP]
	Jmp	BX			;Go to routine

Right:	Cmp	Scroll,220		;right arrow
	Jb	Got77
	Jmp	Wait
Got77:	Add	Scroll,20
	Jmp	BackUp

Scroll0:Mov	Scroll,0		;ctrl-left-arrow
	Jmp	BackUp

Left:	Cmp	Scroll,0		;left arrow
	Jne	Got75
	Jmp	Wait
Got75:	Sub	Scroll,20
	Jmp	BackUp

Got_Rs:	Call	ReScan			;F3 for	re-scan
	Jmp	NxtPage

Got_H:	Call	Help			;List key functions
	Call	Back1
	Jmp	Wait

Got_S:	Call	Scan			;Find text
	Jmp	NxtPage

	Page
NxtPage:				;Advance to next "page"
	Mov	AX,Index
	Cmp	AX,Last			;At end	of file?
	Jae	BWait
	Mov	Current,AX
	Mov	DH,2			;Restart at row	2
	Mov	Row,DH
	Call	Clear			;Clear screen
	Jmp	TestEor
	Page
; Scroll up one	line

Up1:	Cmp	First,0			;Already at top?
	Jne	Up12			; no, scroll up	one more
Bwait:	Jmp	AtEnd			; yes, ignore it

Up12:	Call	Scroll_Up		;Display down one line
	Mov	AX,Index		; to empty top line
	Mov	Current,AX		;Save bottom line ptr
	Mov	AX,First
	Mov	Index,AX
	Call	UpOne
	Mov	Row,2
	Mov	Col,1
	Call	ListOne
	Mov	AX,Current
	Mov	Index,AX
	Call	UpOne
	Jmp	Wait

Home:	Mov	Index,0			;Restart from top of block
	Jmp	NxtPage


AtEnd:	Mov	SI,Offset EofMsg	;say End-of-file
	Call	Msg25
	Jmp	Wait

Bottom:	Mov	AX,Last			;Position to last record
	Mov	Index,AX
	Jmp	BackUp

Top:	Sub	CX,CX			;Restart
	Mov	AL,0			; from beginning
	Sub	DX,DX
	Mov	AH,42h			;Reposition file
	Mov	BX,Handle
	Int	21h
	Call	Clear
	Mov	Row,2
	Mov	Col,1
	Mov	First,0
	Mov	Blknum,0
	Jmp	Read1

; Scroll Up one	page

Back:	Call	Back1			;Back up to top	of page
BackUp:	Call	Back1			; or to	previous page
	Jmp	Nxtpage

; Scroll down one line

Down1:	Mov	AX,Index		;Current line
	Cmp	AX,Last			;At end	of file?
	Jb	Down2
	Jmp	AtEnd

Down2:	Mov	Current,AX
	Mov	AX,First
	Mov	Index,AX
	Call	GetRec			;Set new first ptr
	Mov	AX,Index

Down3:	Call	Scroll_Dn		;Move display up one line
	Mov	AX,Index
	Mov	First,AX
	Mov	AX,Current
	Mov	Index,AX
	Mov	Row,24
	Mov	Col,1
	Jmp	GetNext

; Scroll Up one	page

Back1	Proc	Near
	Mov	CX,23			;Back to current page
Back0:	Call	UpOne
	Loop	Back0
	Mov	Col,1
	Ret
Back1	Endp

; Scroll up one	line

UpOne	Proc	Near			;Position to previous line
	Push	CX
	Mov	CX,2
	Cmp	Index,0			;Already at top?
	Je	Up1d			; yes, no change
Up1a:	Mov	ES,Recaddr		;Buffer	start
Up1b:	Mov	DI,Index		;Offset	into buffer
	Cmp	ES:Byte	Ptr[DI],LF	;A line	feed?
	Je	Up1c
	Dec	Index
	Jnz	Up1b			;Out of	buffer?
Up1e:	Mov	Index,0			; yes, stop at top
	Jmp	Up1d

Up1c:	Dec	Index			;Passed	CR
	Jz	Up1d
	Loop	Up1b
	Inc	Index			;Skip over LF
Up1d:	Pop	CX
	Ret
UpOne	Endp
	Page
;
;	Place Records into Screen Buffer

	Assume	CS:Cseg,DS:Cseg,ES:Nothing
Display	Proc	Near
	Push	AX
	Push	BX
	Push	CX			;Line length
	Push	DX			;Row,col
	Push	DI
	Push	ES
	Push	SI			;Addr of record

	Sub	AX,AX
	Mov	AL,DH			;get row
	Sub	DH,DH
	Mov	DI,DX			; and column
	Dec	DI			;adjust	for zero offset
	Dec	AX
	Cmp	CX,0			;Skip null strings
	Jng	Dsp9
	Cmp	CX,80			;Can only display 80
	Jbe	Dsp1			; cols at a time
	Mov	CX,80

Dsp1:	Mul	Crt_Col			;AX = row * chars per line
	Add	DI,AX			;DI = chars from start of screen
	Shl	DI,1			;adjust	for attribute bytes

	Mov	DX,Crt_Prt		;Addr of card status port
	Mov	ES,Crt_Buf		;Addr of display buffer

	Mov	BH,Attr			;Display attribute
Dsp2:	Lodsb				;Next character
	Cmp	AL,' '			;Don't bother with blanks
	Jae	Dsp3			; or control chars
	Add	DI,2
	Jmp	Dsp4

Dsp3:	Mov	BL,AL			;Char and attr
	Call	Displa
Dsp4:	Loop	Dsp2

Dsp9:	Pop	SI
	Pop	ES
	Pop	DI
	Pop	DX
	Pop	CX
	Pop	BX
	Pop	AX
	Ret

;  Wait	for horzontal retrace

Displa:	In	AL,DX			;Port status
	Test	AL,1			;Is it low?
	Jnz	Displa			; no, keep checking
	Cli				; yes, turn off	interrupts
Disphi:	In	AL,DX			;Get status
	Test	AL,1			;Is it high?
	Jz	Disphi			; no, keep checking

	Mov	AX,BX			;Attrib	and char
	Stosw				; to display buffer
	Sti
	Ret

Display	Endp
	Page
;
; Display next logical record

ListOne	Proc	Near
	Cmp	Row,2
	Jne	List1
	Mov	AX,Index
	Mov	First,AX		;Ptr to	current	top line
List1:	Call	GetRec			;Return	logical	record
	Mov	CX,Reclen		;Record	size
	Sub	CL,Numlf		; less LF
	Sub	CL,Numcr		; less CR
	Mov	Reclen,CX
	Or	CX,CX			;blank line?
	Jz	List9			;yes, increment	row only

	Mov	SI,Offset Work		;Addr of record
	Cmp	Row,2			;Is row	valid?
	Jae	List2
	Mov	Row,2
List2:	Mov	DH,Row			;destination row
	Mov	DL,Col			; and column
	Add	SI,Scroll
	Sub	CX,Scroll
	Call	Display			;put into screen buffer

List9:	Inc	Row			;Bump to next row
	Mov	BL,Normal		; restore attribute
	Mov	Attr,BL
	Ret
ListOne	Endp
	Page
;
;	GetRec - Extract next logical record
;
; Scan the buffer for special characters and copy wanted
; data to field	WORK. A	logical	record ends in an LF and/or CR.
; Tabs are expanded and	x'0F' is deleted.

GetRec	Proc	Near
	Push	ES
	Push	CX
	Push	SI
	Push	DI

GetR:	Test	Switch1,Eor		;Found end of file?
	Jz	GetR0
	Mov	AX,Last			; yes, set ptr to EOF
	Mov	Index,AX
	Call	ReadBlk			;Try for next block
	Jnz	GetR0
	Jmp	GetRd

GetR0:	Sub	DI,DI			;Record	size/output offset
	Mov	Word Ptr NumLF,DI	;zero NUMLF and	NUMCR
	And	Switch2,0FFh-Nodata
	Mov	ES,RecAddr		;Set buffer segment addr

GetR2:	Mov	SI,Index		;Current input offset
	Mov	AL,ES:[SI]		;Copy a	char
	Cmp	AL,Eof			;End of	file?
	Jne	GetR3
	Mov	Reclen,DI
	Or	Switch1,Eor		;Indicate end-of-file
	Jmp	GetR

GetR3:	Cmp	AL,09h			;Is it TAB?
	Jne	GetR4
	Mov	CX,DI			;Current work size
	Add	CX,8			;Round to 8-bytes
	And	CX,0FFF8h
	Sub	CX,DI			;Number	of blanks
GetR3b:	Mov	Work[DI],' '		; to insert
	Inc	DI
	Loop	GetR3b
	Inc	Index			;Bump input offset
	Jmp	GetR2			; and get next char

GetR4:	And	AL,7Fh			;Assure	readable
	Mov	Work[DI],AL		;Copy character
	Inc	DI			;Incr output offset
	Inc	Index			; and input offset
	Cmp	AL,Cr			;Is it a CR?
	Jne	GetR5
	Inc	NumCR			;Yes, incr count

GetR5:	Cmp	AL,' '
	Je	GetR7
	Cmp	AL,Lf			;Is it line feed?
	Jne	GetR6
	Inc	NumLF			;Yes, incr count
	Jmp	GetR8

GetR6:	Or	Switch2,Nodata		;Non-space found

GetR7:	Cmp	DI,255			;Record	too big?
	Je	GetR8			;Chop record at	255 bytes
	Jmp	GetR2

GetR8:	Mov	Reclen,DI
	Cmp	Work,0Fh		;If record begins with "sun"
	Jne	GetR9			; symbol, skip it
	Jmp	GetR0

GetR9:	Test	Switch2,Nodata		;If all	blank
	Jnz	GetRd
	Jmp	GetR0			; read another one

GetRd:	Pop	DI
	Pop	SI
	Pop	CX
	Pop	ES
	Ret
GetRec Endp

	Page
;
; Read a block

ReadBlk	Proc	Near
	Mov	Switch1,0		;reset EOR flag
	Mov	BX,Handle		;get file handle from open
	Mov	CX,Blksize		;bytes to read
	Push	DS
	Mov	DS,RecAddr		;addr of gotten	memory
	Sub	DX,DX			; with zero offset
	Mov	AH,3Fh
	Int	21H			;read a	block
	Pop	DS

	Or	AX,AX			;Any bytes read?
	Jz	ReadB2			; no, return with ZF
	Mov	Last,AX			; yes, set record pointers
	Mov	Index,0
	Mov	First,0
	Mov	Current,0
	Inc	Blknum
	Mov	DI,Last			;Append	EOF to buffer
	Mov	ES,RecAddr
	Mov	Byte Ptr ES:[DI],1Ah
ReadB2:	Ret
Readblk	Endp

	Page
;
; Scan for text	entered	after slash (/)

ReScan	Proc
	Push	DI
	Push	SI
	Push	DS
	Pop	ES
	Jmp	Scan1

Scan:	Push	DI
	Push	SI
	Push	DS
	Pop	ES
	Mov	TextMax,32		;Max string length
	Mov	DX,Offset TextMax
	Mov	AH,0Ah			;Read console
	Int	21h

Scan1:	Sub	CX,CX
	Or	CL,TextLen		;Get and test length
	Jz	NoMatch			; none,	return as is
	Mov	AX,First		;Start with current screen
	Mov	Index,AX
	Call	GetRec			;Skip top line

Scan3:	Call	GetRec			;Read next logical record
	Test	Switch1,Eor		;End of	data?
	Jnz	NoMatch			; yes, NOT FOUND
	Mov	AX,Index		;Current record	ptr
	Cmp	AX,Last			;Beyond	buffer?
	Jae	NoMatch			; yes, NOT FOUND
	Mov	CX,RecLen
	Sub	CL,TextLen		;Columns to search
	Jle	Scan3

	Mov	AL,TextBuf		;Scan for first	char in	record
	Mov	DI,Offset Work		;Current record	data
	Repnz	Scasb
	Jne	Scan3			; not found
	Cmp	TextLen,1		;Whole thing done?
	Je	Match
	Sub	CH,CH
	Mov	CL,TextLen		;Search	for rest of it
	Dec	CL
	Mov	SI,Offset TextBuf+1
	Repe	Cmpsb
	Jne	Scan3
	Or	CX,CX			;Found it?
	Jnz	Scan3			; no, try next record

Match:	Call	Set25			;Restore prompt	line
	Mov	Attr,Blink		; and blink
	Call	UpOne
	Jmp	Scaned

NoMatch:Mov	AX,First		;Not found,
	Mov	Index,AX		; restart at last page
	Call	Set25			;Restore prompt	line

	Mov	SI,Offset TextMsg	;Say TEXT NOT FOUND
	Add	Special,128		;Make it blink
	Call	Msg25
	Sub	Special,128
	Mov	Switch1,0
	Mov	Col,1

Scaned:	Pop	SI
	Pop	DI
	Ret
ReScan	Endp
	Page
;
; Clear	screen or records window

Clear	Proc	Near			;Clear entire screen
	Push	AX
	Push	BX
	Push	CX
	Push	DX

	Mov	AX,0600h
	Mov	BH,Foregrd
	Jmp	Scroller

Scroll_Dn:				;Scroll	list window down
	Push	AX
	Push	BX
	Push	CX
	Push	DX

	Mov	AX,0601h
	Mov	BH,Foregrd
	Jmp	Scroller

Scroll_Up:				;Scroll	list window up
	Push	AX
	Push	BX
	Push	CX
	Push	DX

	Mov	AX,0701h
	Mov	BH,Foregrd
Scroller:
	Mov	CX,0100h		;Screen	begin
	Mov	DX,174Fh		; and end
	Int	10h

	Pop	DX
	Pop	CX
	Pop	BX
	Pop	AX
	Ret
Clear	Endp
	Page
;
;	Set top title line

Set1	Proc	Near
	Mov	AX,0600h		;Clear the screen
	Sub	BL,BL
	Mov	BH,Foregrd
	Sub	CX,CX			;Screen	begin
	Mov	DX,184Fh		; and end
	Int	10h

	Mov	Word Ptr Work+4,0000h	;Title in work area
	Mov	DH,1			;Row 1
	Mov	DL,DH			;Column	1
	Mov	SI,Offset Work
	Mov	CX,79			;Length
	Mov	BL,Special		;Hi-intensity or yellow
	Mov	Attr,BL
	Call	Display
	Ret
Set1	Endp

;	Set prompt line

Set25	Proc	Near
	Push	DI
	Push	SI
	Mov	DH,25			;set row
	Mov	DL,1			; and column
	Mov	CX,Pr_Len		; length
	Mov	BL,Special
	Mov	Attr,BL
	Mov	SI,Offset Prompt
	Call	Display

	Mov	AH,2			;Set cursor position
	Mov	DX,1808h		; to row 25, col 9
	Mov	BX,0			; page zero
	Int	10H
	Pop	SI
	Pop	DI
	Ret
Set25	Endp

;	Display message on prompt line

Msg25	Proc	Near
;	Push	SI			;Ptr to	msg text
	Mov	DH,25			;Clear message area
	Mov	DL,10			; its column
	Mov	CX,EofLen		; length
	Mov	BL,Special		;Hi-intensity or yellow
	Mov	Attr,BL
	Call	Display
	Mov	BL,Normal
	Mov	Attr,BL
	Ret
Msg25	Endp

;
; Initialize display constants

InitCrt	Proc	Near
	Push	ES
	Mov	AX,Bios			;Point to BIOS data
	Mov	ES,AX
	Mov	CX,ES:Cols		;Save display columns
	Mov	Crt_Col,CX
	Mov	DX,ES:A6845		;Save card base	addr
	Add	DX,6			; point	to status port
	Mov	Crt_Prt,DX
	Mov	Crt_Buf,0B800h		;Default to color card
	Mov	BX,ES:Flag
	And	BX,30h
	Cmp	BX,30h			;Is it mono card?
	Jne	CrtSet			; no, set for color
	Mov	Crt_Buf,0B000h		; yes, point to	mono buffer
CrtSet:	Pop	ES
	Ret
InitCrt	Endp
	Page
;
; HELP - Display command key usage

Help	Proc	Near			;Describe the commands
	Call	Clear
	Mov	DX,0200h		;Position cursor
	Mov	AH,2
	Sub	BH,BH
	Mov	BL,Foregrd
	Int	10h
	Mov	DX,Offset HelpMsg	;List the text lines
	Mov	AH,9
	Int	21h
	Mov	AH,2			;restore position
	Mov	DX,1808h		; to row 25, col 9
	Sub	BX,BX
	Int	10H
	Ret
Help	Endp
	Page
;
; Get file name	from command line

GetParm	Proc	Near
	Xor	AX,AX			;For COM, CS=DS=ES
	Xor	CX,CX
	Mov	AL,Byte	Ptr DS:[80h]	;Gather	file name from command line
	Or	CX,AX			;Any supplied?
	Jz	GetFile			; no, ask for it
	Mov	DI,Offset Filenm	; yes, point to target
	Mov	SI,81h			;Offset	to parm	in PSP
Blanks:	Lodsb
	Cmp	AL,' '			;Skip any blanks
	Je	Skipit
	Stosb				;Copy parm to FileNm
Skipit:	Loop	Blanks
	Ret

GetFile:
	Mov	DX,Offset AskFile	;Prompt	for file name
	Mov	AH,9
	Int	21H
	Mov	AH,0AH			;Buffered kybd input DOS req
	Mov	DX,Offset Keyin
	Int	21h

	Sub	BL,BL
	Or	BL,Keyout		;Number	of chars read
	Jz	GetFile			; none,	ask for	name
	Mov	Filenm[BX],0		;Overlay CR to make ASCIIZ name
	Ret
GetParm	Endp

;  Open	the file to list

Open	Proc	Near
	Mov	OpenCod,0		;Reset open return code
	Mov	DX,Offset Filenm	;OPEN file
	Mov	AL,0			; for read only
	Mov	AH,3DH
	Int	21H
	Mov	Handle,AX		;save file handle
	Jnc	Opened			;if OPEN okay

	Mov	OpenCod,AX
	Cmp	AL,2			;Check code to be
	Jl	Error			; within our messages
	Cmp	AL,5
	Ja	Error
	Sub	BX,BX			;For message index
	Mov	BL,AL
	Mov	CL,4
	Shl	BX,CL
	Lea	DX,Code2-32[BX]		;Point to msg text
	Jmp	Error2

Error:	Aam				;Other return codes
	Xchg	AL,AH
	Or	OpenCod,AX
	Mov	DX,Offset OpenMsg

Error2:	Mov	AH,9
	Int	21H			;say OPEN FAILED
Opened:	Cmp	OpenCod,0
	Ret
Open	Endp

List	Endp

PgmSize	Equ	($-Cseg+16)/16		;Program size in paragraphs

Cseg	Ends

	End	List
```
{% endraw %}

## L4.DOC

{% raw %}
```

Command	LIST
----------------

 Purpose:  To display the contents of an ASCII file, line by
	   line, with operator positioning commands.

 Format:   LIST	[d:][path]filename[.ext]

 Remarks:  An ASCII file of any	size may be listed.

	On the COMMAND line, enter a letter or control key:-

	Letter(s)	Control key	Function
	-----------	------------	------------------------
			Enter		continue to next page
	Q, X		ESCape		terminate and exit to DOS
	T		HOME		restart	from first block (top)
	B		END		skip to	end of file (bottom)
	D	 	PgDn		scroll down one	page
	U		PgUp		scroll up one page
	H or ?		F1		list commands (HELP)
	L		left arrow	scroll left 20 columns
	R		right arrow	scroll right 20	columns
	P		up arrow	up one (previous) line
	N		down arrow	down one (next)	line

	/text				find 'text'
	A		F3		find next occurance of 'text'

			ctl-HOME	restart from CURRENT block
			ctl-PgUp	restart from first block (TOP)
			ctl-PgDn	skip to end of file (BOTTOM)
			ctl-left-arrow	reset scroll to column 1

			F1		Help
			F3		Find next
			F10		Exit

 Restrictions:
	All positioning	is relative to the current block in
	storage. The size of the block depends on the amount of
	memory available, up to	64K.

	The maximum record length currently allowed is 255.

	Logical	records	(ending	in LF and/or CR) are placed
	into the DOS screen buffer - mono or color display.

	PC-DOS Version 2.0 or later is required.

	ANSI.SYS is NOT required.

 Scanning for text:
	To scan for a character string, type a slash (/)
	followed by one or more (up to 32) characters. The
	scan text, but not the slash, is displayed on the
	command line. Only the current block is scanned.

	If the text is found, the line containing it is displayed
	as a blinking line.

	If the text is NOT found, an error message is displayed
	and the display remains unchanged. To scan the next block,
	"page" into it with PgDn or Down, and use F3 to re-scan.

 Screen attributes:
	There are three classes of attributes used. One for
	normal display lines - lines 2 to 24, another for
	special lines - lines 1 and 25, and a third for the
	background color.

	These attributes may be changed by using DEBUG:

	 at offset 11C = 09	;special lines, hi-lighted or lt.blue
	 at offset 11D = 02	;normal lines, green
	 at offset 11E = 00	;background, black

	If these values don't match, you have a different version.
	----------------------------------------------------------

	Written	by Vernon Buerg, April,	1984, for the IBM PC
	using DOS 2.0 and is supplied for public domain	use.
	Not for sale or hire.

	Version	1.4, April 27, 1984.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0198

     Volume in drive A has no label
     Directory of A:\

    CASTLE   EXE     72832   6-13-84  12:37p
    CASTLE   RAN     48384   6-13-84  12:47p
    CRC      TXT       935  11-15-84   8:41a
    L4       ASM     21888   6-12-84   3:06p
    L4       DOC      2688   5-11-84  12:59p
    L4       EXE      2688   5-11-84  12:58p
    MEMBRAIN DOC      4096   6-12-84   5:48p
    MEMBRAIN EXE      3584   6-12-84   5:46p
    READ     ME        537   6-16-84   7:37p
            9 file(s)     157632 bytes
                             512 bytes free
