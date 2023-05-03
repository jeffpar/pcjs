---
layout: page
title: "PC-SIG Diskette Library (Disk #563)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0563/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0563"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "MAX - EMACS EDITOR"

    MAX is a freeware text editor that is a downsized version of the
    popular EMACS editor.  Down in size but not much in power!  It is
    quite fast and has some very powerful text-editing features.  If
    you have used the mainframe version, you'll feel right at home.
    The program is distributed in versions for both color and
    monochrome systems, and the source code is provided for the
    curious programmers among you.  However, for those not it that
    league, there is included an optional menu-driven interface for
    novices.
    
    Features:
    
    ~ Move by word, or globally
    ~ Search for text
    ~ Search and replace text by other text
    ~ Switch buffers
    ~ Multiple buffers and windows
    ~ Incremental search
    ~ Use windows or split screens (limited to 64K)
    ~ Give arguments to functions
    ~ Insert Control-Characters
    ~ Kill and yank back lines, words or regions
    ~ Format paragraphs
    ~ Define and invoke macro commands
    
    System Requirements: 128K, one disk drive and monochrome display
    
    How to Start:  NOTE: the Documentation, Color version and the Source
    code are all in separate subdirectories with their appropriate
    documentation files.  To run it, enter MAX and go for it!
    
    Suggested Registration:  $20.00 for individuals; $25.00 per copy for
    commercial and governmental sites.
    
    File Descriptions:
    
    ???           Various information files
    AUTOEXEC BAT  Special program to configure system at bootup
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ALLOCATE.ASM

{% raw %}
```
PUBLIC	ALLOC, $Buffer1, $Buffer2, $Buffer3, $Buffer4, $Buffer5, $Buffer6
PUBLIC	$Buffer7, $Buffer8, $Buffernumber, $StackInit, $WorkSpaceSegment
PUBLIC	$WorkSpaceEnd 

EXTRN	.Msg:NEAR, LastLabel:Near, $MsgAdd:Word, CBuffer1:Word
EXTRN	ActiveWindow:Byte, Initwindows:NEAR
;---------------------------------------------------------------------------
	Page ,132
NAME	FALLOC

TITLE Buffer Allocator

; MEMORY MAP:
;
; 0000 - xxxx:	Internal ( RAMDISK/MS-DOS/INTERRUPTS etc )
; xxxx - yyyy:	MAX.COM
; yyyy - zzzz:	Help Area / StackSpace
; bbb1 - bbb2:	Buffer 1 ( 64K )
; ....   ....:	Buffer 2...8
; bbb9 - xxxx:	WorkSpace ( for yankback, minimum size: 8K )
; xxxx - FFFF:	MS-DOS/Screen, etc/



	Include FDef.Def


div16	MACRO	Register
	shr	Register, 1
	shr	Register, 1
	shr	Register, 1
	shr	register, 1
ENDM

mul16	MACRO	Register
	shl	Register, 1
	shl	Register, 1
	shl	Register, 1
	shl	Register, 1

ENDM
;---------------------------------------------------------------------------
PROGRAM SEGMENT Para    PUBLIC  'Code'
	ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

$BufferNumber	dw	0
$Buffer1	dw	?
$Buffer2	dw	?
$Buffer3	dw	?
$Buffer4	dw	?
$Buffer5	dw	?
$Buffer6	dw	?
$Buffer7	dw	?
$Buffer8	dw	?

$WorkspaceSegment	dw	?
$WorkspaceEnd	dw	?
$StackInit	dw	?

;---------------------------------------------------------------------------
;...........................................................................
; ALLOC:
;	IN:	LastLabel: last Symbol in command file
;		CS:[0002]: Start of MS-DOS
;
;	OUT:	SP:		directly after program and HelpSpace
;		CS:Buffer*:	after Stackspace
;		CS:WorkSpace*:	after Buffers

Alloc   PROC    Near

; 1) Initialize the stack:

	mov	CX, Offset LastLabel
	add	CX, HelpSpace+StackSpace

	pop	AX			; remember the returnaddress
	mov	SP, CX
	mov	CS:$Stackinit, CX
	push    AX			; restore the returnaddress

	div16	CX

	inc	CX			; mod 16 + 1
	mov	AX, CS
	add	CX, AX			; this is where freemem starts

	mov	DX, CS:[0002]		; this is the end
	dec	DX			; DX is end, CX is start of free
					; while CX < (DX)
	mov	BX, Offset $Buffer1

AllocNext:
	cmp	CX, DX
	jae	AllocEnd

	mov	CS:[BX], CX
	add	BX, 2
	add	CX, 1001h
	inc	CS:$Buffernumber
	jmp	Allocnext

AllocEnd:
	sub	CX, 1000h
	sub	DX, CX				; this is the amount of space
	cmp	DX, MinWorkSpace
	jae	SmallWorkBuffer

	sub	CS:$Buffernumber, 2		; we actually reassign two
	sub	BX, 4				; buffers ( one and a half )
	mov	AX, CS:[BX]
	mov	CS:$WorkSpaceSegment, AX
	mov	CS:$WorkSpaceEnd, 0FFF0h
	jmp	ReportSpace

SmallWorkBuffer:

	dec	CS:$Buffernumber		; reassign last buffer as
	sub	BX, 2				; our workspace
	mov	AX, CS:[BX]
	mov	CS:$WorkSpaceSegment, AX

	mov	CX, CS:[0002]
	sub	CX, AX
	dec	CX
	mul16	CX
	mov	CS:$WorkSpaceEnd, CX

	call	InitBuffers

	call	InitWindows

	jmp	ReportSpace

ALLOC   ENDP
;---------------------------------------------------------------------------
InitBuffers	PROC	NEAR
	mov	CX, CS:$Buffernumber
	mov	BX, CX
	add	BX, BX
	add	BX, Offset $Buffer1

IB1:	mov	DS, CS:[BX]
	sub	BX, 2
	mov	DS:BCB.FCursor, 100h
	mov	DS:BCB.FEnd, 100h
	mov	Byte Ptr DS:[100h], EOF
	mov	DS:BCB.AuxScrStart, 100h
	mov	DS:BCB.AuxCursor, 100h
	mov	DS:BCB.ScrStart, 100h
	mov	DS:BCB.FCurCol, 1
	mov	DS:BCB.Mark, 100h
	mov	DS:BCB.ScrCursor, 0
	mov	DS:BCB.Dirty, FALSE
	mov	DS:BCB.EDMode, 0
	mov	Word Ptr DS:BCB.File, 'O'*256+'F'
	mov	WORD PTR DS:BCB.File+2, '.'*256+'O'
	mov	WORD PTR DS:BCB.File+4, 'A'*256+'B'
	mov	Word PTR DS:BCB.File+6, 'R'
	mov	DS:BCB.UnUsed, TRUE

	loop	IB1
	ret
InitBuffers	ENDP
;---------------------------------------------------------------------------
FatalMsg	db	'****> NOT ENOUGH SPACE TO OPEN BUFFER <****$'
StartMsg	db	'['
BuffernumberMsg	db	' Buffers,'
WorkSpaceMsg	db	'K Workspace]'

ReportSpace	PROC	NEAR

	mov	SI, Offset StartMsg
	mov	CX, 1
	call	.MSG
	sub	CS:$MsgAdd, 6
	mov	AL, Byte Ptr CS:$BufferNumber
	call	.Msg8

	mov	SI, Offset BuffernumberMsg
	mov	CX, 8
	call	.Msg

	mov	AX, CS:$WorkSpaceEnd
	mov	AL, AH
	shr	AL, 1
	shr	AL, 1
	call	.Msg8

	mov	SI, Offset WorkSpaceMsg
	mov	CX, 12
	call	.Msg

	cmp	CS:$BufferNumber, 0
	je	NoSpace
	ret

NoSpace:mov	AX, CS
	mov	DS, AX
	mov	DX, Offset FatalMsg
	mov	AH, 9
	int	21h
	int	20h

ReportSpace	ENDP
;--------------------------------------------------------------------------
; .Msg8:
;	IN:	AL:	8bit number
;	OUT:	Messageline=****
;
Msg8	db	'00'

.Msg8	PROC	NEAR

	mov	SI, Offset Msg8
        xor     AH, AH
                                        ; number 0..99

					; now the number is in the range 0..99
					; now we can use the AAM instruction !
	aam				; divide by 100-> DIV in AH, MOD in AL
	add     AH, '0'
	mov	CS:[SI], AH
	add     AL, '0'
	mov	CS:[SI+1], AL

	mov	CX, 2
	cmp	Byte Ptr CS:[SI], '0'
	jne	NoSuppress
	inc	SI
	dec	CX
NoSuppress:
	call	.Msg

	sub	CS:$MsgAdd, 6
	ret
.Msg8	ENDP
;---------------------------------------------------------------------------
WFormat	PROC	NEAR

	cmp	AL, 9
	ja	Letter
Number:	add	AL, '0'
	ret
Letter:	add	AL, 'A'-10
	ret

WFormat	ENDP
;---------------------------------------------------------------------------
; .Msg16:
;	IN:	AX:	16bit number
;	OUT:	Messageline=****
;
Msg16	db	'0000'

.Msg16	PROC	NEAR

	mov	DI, Offset Msg16
	mov	BX, AX

	mov	AL, BH
	and	AL, 11110000b		; digit 1
	div16	AL
	call	WFormat

	mov	CS:[DI], AL
	inc	DI

	mov	AL, BH			; digit 2
	and	AL, 00001111b
	call	WFormat
	mov	CS:[DI], AL
	inc	DI

	mov	AL, BL			; digit 3
	and	AL, 11110000b
	div16	AL
	call	WFormat
	mov	CS:[DI], AL
	inc	DI

	mov	AL, BL			; digit 4
	and	AL, 00001111b
	call	WFormat
	mov	CS:[DI], AL

	mov	SI, Offset Msg16
	mov	CX, 4
	call	.Msg

	sub	CS:$MsgAdd, 4
	ret


.Msg16	ENDP

PROGRAM	ENDS
END
```
{% endraw %}

## CTRLC.ASM

{% raw %}
```
	IF2
		%OUT [Pass 1 Completed]
	ENDIF


PUBLIC  Ctrl_Character, CBack, InsertCRLF, SaveEnd , $NoUpdate
PUBLIC  CCenter, CDelete, .Msg, .CLRMsg, $Wait, CYSave, CDelK, $MsgAdd
PUBLIC	.InvMsg

EXTRN	.OutCH:Near, FModeline:Near, .OutStr:Near, .Piss:Near, .InCH:Near
EXTRN	$History:Byte, RSearch:Near, ISearch:Near, .Error0:Near
EXTRN	$WorkSpaceSegment:Word, $WorkSpaceEnd:Word, .?Col:Near, FHELP:Near
EXTRN	$Repeat:Word, $Repeat:Word, $KBufPtr:Word, CRUBOUT:NEAR
EXTRN	NumWinsScr:Word, FillParagraph:Near, GetColumn:Near
EXTRN	NextScreen:NEAR, ScrollUp:NEAR


;---------------------------------------------------------------------------
	; NOTE FOR ADAPTATIONS:
	;
	; The following routines inside CTRL-C(haracters) directly manipulate
	; the screen:
	;
	;	.MSG		prints a message in the message-field area
	;	.INVMSG		prints a message in reverse video
	;	.CLRMSG		clears the message-field area
	;
	;	[The message-field area is below the modeline and above]
	;	[the last line]


;---------------------------------------------------------------------------
TITLE Control Command Handler

	; The routines in this module execute commands invoked by
	; pressing CTL and another character simultaneously, e.g. CTL-@,
	; CTL-A, CTL-B ...

Program SEGMENT PARA	PUBLIC  'code'
	ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

; <----------------------------------------------------------------------->

	INCLUDE FDEF.DEF
	$Free	=	(Offset CInvalid)

	$NoUpdate	dw	0	; not used ?

	SaveEnd		dw	0	; holds end of yankback buffer

	$Wait		dw	30	; holds time interval of msg display
	$MsgAdd		dw	0	; remembers where the next msg
					; should go to the screen ( append )

	Error1Msg	db	'*** FileStart ***'
	Error2Msg	db	'*** FileEnd ***'
	CInvalidT0	db	'*** CTL-'
	CInvalidT1	db	'? unknown ***'


; <---------------------------- Jump Table ----------------------------->
CJTable	dw	Offset SetMark		; ^@
	dw	Offset CBegl		; ^A
	dw	Offset CBack		; ^B
	dw	$Free			; ^C
	dw	Offset CDelete  	; ^D
	dw	Offset CEndL		; ^E
	dw	Offset CForward 	; ^F
	dw	$Free			; ^G
	dw	Offset CRubout		; ^H = Help
	dw	Offset TabIn		; ^I
	dw	$Free			; ^J
	dw	Offset CKill		; ^K
	dw	Offset CCenter  	; ^L
	dw	Offset InsertCRLF
	dw	Offset CNext		; ^N
	dw	Offset CTL_O		; ^O
	dw	Offset CPrevious  	; ^P
	dw	Offset LitIns		; ^Q
	dw	Offset RSearch  	; ^R
	dw	Offset ISearch  	; ^S
	dw	Offset BExchange	; ^T
	dw	$Free			; ^U
	dw	Offset NextScreen 	; ^V
	dw	Offset CRegKill 	; ^W
	dw	$Free			; ^X
	dw	Offset CYank		; ^Y
	dw	Offset Scrollup		; ^Z
	dw	$Free
	dw	$Free
	dw	$Free
	dw	$Free
	dw	Offset CHELP		; ^_
	dw	$Free


;***************************************************************************
	; The following routine directs the caller to the correct routine
	; by using above jump table

Ctrl_Character  PROC	Near

CParse: mov	AL, DL			; adjust AL to a 16bit pointer in
	xor	AH, AH			; the table
	mov	BX, AX
	add	BX, BX
	jmp	CS:CJTable [BX]

CInvalid:				; ohoh - table held INVALID
	add	 AL, 40h		; adjust the character to ASCII
	mov	CS:CInvalidT1, AL	; put it into the msg to be sent
	mov	SI, Offset CInvalidT0	; and announce the error
	mov	CX, 21
	jmp	.Error0

Ctrl_Character  ENDP

;***************************************************************************
;----------------------------Ctrl Functions---------------------------------
	; SETMARK sets the mark at the current cursor position

	SetMarkT	db	'[Mark Set]'

SetMark PROC	Near

	mov	AX, DS:BCB.FCursor		; get cursor position
	mov	DS:BCB.Mark, AX			; save as new mark
	mov	SI, Offset SetMarkT
	mov	CX, 10
	jmp	.Msg

SetMark ENDP

;---------------------------------------------------------------------------
	; The following routine moves the cursor back by one character

CBack	PROC	Near

	mov	BX, DS:BCB.FCursor		; load cursor value
	cmp	BX, 100h			; beginning of file ?
	jbe	CBackErr			; then error
	dec	BX				; go back and check if on LF
	cmp	Byte Ptr DS:[BX], Byte Ptr LF	; if so go back again
	jne	CBack0
	dec	BX
CBack0: mov	DS:BCB.FCursor, BX		; and save new cursor
	ret

CBackErr:mov	SI, Offset Error1Msg		; display an error message
	mov	CX, 17
	jmp	.Error0

CBack	ENDP

;---------------------------------------------------------------------------
	; insert a new line after the cursor position

CTL_O	PROC	NEAR

	call	InsertCRLF			; insert a CRLF, and go back
	call	.Piss
	jmp	CBack

CTL_O	ENDP

;---------------------------------------------------------------------------
	; advances cursor by one [see CBackward for comments]

CForward	PROC	NEAR
	mov	BX, DS:BCB.FCursor
	cmp	BX, DS:BCB.FEnd
	jae	CForwardErr	
	inc	BX
	cmp	Byte Ptr DS:[BX], Byte Ptr LF
	jne	CForward0
	inc	BX
CForward0:
	mov	DS:BCB.FCursor, BX
	ret

CForwardErr:
	mov	SI, Offset Error2Msg
	mov	CX, 15
	jmp	.Error0

CForward	ENDP

;---------------------------------------------------------------------------
	; advances the cursor to the next line

CNext	PROC	NEAR

	mov	BX, Offset $History		; check whether last command
	inc	BX				; was a CTL-P or CTL-N
	cmp	Byte Ptr CS:[BX], 16
	je	CNext0
	cmp	Byte Ptr CS:[BX], 14
	jne	CNext1

CNext0:						; is consecutive CTL-N/P
	mov	AX, DS:BCB.FOldCurCol
	mov	CS:CDesiredCol, AX		; this is where we want to be
	jmp	CNext2

CNext1:						; is a first CTL-N/P
	mov	BX, DS:BCB.FCursor		; so get where it is
	call	GetColumn
	mov	DS:BCB.FOldCurCol, CX		; and remember it for another
	mov	CS:CDesiredCol, CX		; next or previous line after



	; now we know the desired column we want to get to

CNext2:	mov	BX, DS:BCB.FCursor

CNC1:	cmp	Byte Ptr [BX], LF	; loop until we are at end of file
	je	CNC2			; or at LF
	cmp	BX, DS:BCB.Fend
	jae	CNC2
	inc	BX
	jmp	CNC1

CNC2:	cmp	BX, DS:BCB.FEnd		; don't allow CTL-N at least line
	jae	CNErr


CNC3:	inc	BX			; now we are at column 1 of the
					; next line.

	cmp	Word Ptr DS:[BX], CRLF	; if we hit the end of a line,
	je	FoundPosition		; 	[this is all we can do
	cmp	BX, DS:BCB.FEnd		; the fileend is also the end of all
	jae	FoundPosition		; 	[efforts
	call	GetColumn		; check if we have reached the desired
	cmp	CX, CS:CDesiredCol	;	[column
	jae	FoundPosition
	jmp	CNC3			; and advance if we haven't yet


CNErr:  mov	SI, Offset Error2Msg
	mov	CX, 15
	jmp	.Error0

FoundPosition:
	mov	DS:BCB.Fcursor, BX
	ret
CNext	ENDP



	CDesiredCOl	dw	0	



;---------------------------------------------------------------------------
	; This routine [improvable] moves the cursor to the previous line.
	; ( for comments please see CTL-N [CNext] )

CPrevious	PROC	NEAR

	mov	BX, Offset $History
	inc	BX
	cmp	Byte Ptr CS:[BX], 16
	je	CPrevious0
	cmp	Byte Ptr CS:[BX], 14
	jne	CPrevious1
CPrevious0:					; is a consecutive CTL-N/P
	mov	AX, DS:BCB.FOldCurCol
	mov	CS:CdesiredCol, AX		; this is where it shall be
	jmp	CPreviousCont

CPrevious1:					; is a first CTL-N/P
	mov	BX, DS:BCB.FCursor		; so get where it is
	call	GetColumn
	mov	DS:BCB.FOldCurCol, CX		; and remember it for another
	mov	CS:CDesiredCol, CX

CPreviousCont:
	mov	BX, DS:BCB.FCursor

CPC1:	cmp	Byte Ptr [BX], LF	; loop until we are at start of file
	je	CPC2			; or at LF
	cmp	BX, 0FFh
	je	CPC2
	dec	BX
	jmp	CPC1

CPC2:	dec	BX
	cmp	BX, 100h		; error at line 1
	jb	CPreviousErr

CPC3:	cmp	Byte Ptr [BX], LF	; loop until we are at start of file
	je	CPC4			; or at LF again, this is our new line
	cmp	BX, 0FFh
	je	CPC4
	dec	BX
	jmp	CPC3

CPC4:	inc	BX			; now we are at column 1 of the
					; line.
	cmp	Word Ptr DS:[BX], CRLF	; if we hit the end of a line,
	je	FoundPosition		; this is all we can do
	call	GetColumn		; check if we have reached it
	cmp	CX, CS:Cdesiredcol
	jae	FoundPosition
	jmp	CPC4			; and advance if we haven't


CPreviousErr:
	mov	SI, Offset Error1Msg
	mov	CX, 17
	jmp	.Error0

CPrevious	ENDP


;---------------------------------------------------------------------------
	; This routine inserts a CRLF when CR is pressed

InsertCRLF	PROC	NEAR

	mov	DS:BCB.Dirty, TRUE
	test	DS:BCB.EDMode, Wrapmode
	jz	NormalCRLF
	mov	BX, DS:BCB.FCursor
	cmp	Word Ptr DS:[BX-2], CRLF
	je	NormalCRLF			; opening a new paragraph
	cmp	BX, 100h
	jbe	NormalCRLF
	call	FillParagraph
NormalCRLF:
	mov	BX, CS:$KBufPtr
	mov	Byte Ptr CS:[BX], CR
	inc	BX
	mov	Byte Ptr CS:[BX], LF
	inc	BX
	mov	CS:$KBufPtr, BX
	call	.Piss
	ret

InsertCRLF	ENDP


;---------------------------------------------------------------------------
	; CCenter centers the line on which the cursor is. It is not
	; 100% correct, but will miss by +/- 1 line in strange situations.
	; The advantage is much simpler code and much faster execution.


DefCenter	EQU	 10
LineLength	EQU	 79


CCenter	PROC	NEAR
	mov	CX, CS:NumWinsScr	; find out what a centered line
					; means (could be one or two windows)
	xor	CX, 1			; 1<>0 = n*6+4
	add	CX, CX			; *2
	mov	AX, CX
	add	CX, CX			; *4
	add	CX, AX			; *6
	add	CX, 3			; 10 or 6

	cmp	CS:$Repeat, 0		; now reinterpret the argument
	je	.CC1
	cmp	CS:$Repeat, 1
	jne	.CC0
		mov	CS:$Repeat, 0	; use this line to center
		mov	 BX, DS:BCB.FCursor
		jmp	 .CCGoStart

.CC0:	mov	 CX, CS:$Repeat
	mov	 CS:$Repeat, 0

.CC1:
			mov	 BX, DS:BCB.FCursor

; go back CX physical lines | If (BX<=100h)  -> ERROR

.CCGoBack:	mov	AX, LineLength
			.CCPhysBack:
				dec	 BX
				cmp	 Byte Ptr [BX], LF
				je		.CCPhysBackEnd
				dec	 AX
				jnz	 .CCPhysback
			.CCPhysBackEnd:
		cmp	Byte Ptr [BX], LF
		jne	.CCPhysB1
		dec	BX			; point to the CR ( also on this line )
		.CCPhysB1:
		cmp	BX, 100h
		jbe	.CCErr
		loop	.CCGoBack

; BX points now to a character on this physical line
.CCGoStart:

		call	GetColumn		; BX holds cursor

		call	Findcolumn1		; returns in DX what the real
						; column should be

.CCGoLoop:	call	GetColumn		; this will go back until
		cmp	CX, DX			; it hits the real start
		jbe	AtLineStart
		dec	BX
		jmp	.CCGoLoop

ATLineStart:	mov	DS:BCB.ScrStart, BX
		cmp	CX, DX
		jb	HitTabLine
		ret
HitTabLine:	inc	BX
		ret

.CCErr:		mov	DS:BCB.ScrStart, 100h
		ret

;...........................................................................
	; CX holds a column - I want to know the column number of
	; the first character on this line.

FindColumn1	PROC	NEAR
	mov	DX, 1

FAgain:	add	DX, 79
	cmp	DX, CX
	jbe	FAgain
	sub	DX, 79		; return the real start
	ret
FindColumn1	ENDP
CCenter ENDP


;---------------------------------------------------------------------------
	; CDelete deletes one character

CDelete PROC	NEAR

	mov	DS:BCB.Dirty, TRUE		; buffer is modified

	xor	CX, CX
	mov	DX, DS:BCB.FEnd			; first check whether
	mov	BX, DS:BCB.FCursor		; we are at the end
	cmp	BX, DX				; of the buffer
	jae	CDeleteErr
	cmp	Byte Ptr DS:[BX], CR		; then check whether we are at
	jne	CDelete0			; a lineend = delete 2 chars
	inc	CX

CDelete0:
	inc	CX				; well one has to be deleted
	mov	SI, BX				; Cursor
	mov	DI, SI				; Cursor + #chars to be del
	add	SI, CX
	sub	DS:BCB.FEnd, CX			; of course our file shrinks
	mov	CX, DX				; by 1/2 chars | calculate
	sub	CX, SI				; how many bytes have to be
	inc	CX				; moved
	cld
	mov	AX, DS				; use the correct register
	mov	ES, AX
	clc					; and set up word, instead of
	shr	CX, 1				; slower byte move
	inc	CX
	rep	movsw

	ret

CDeleteErr:
	mov	SI, Offset Error2Msg
	mov	CX, 15
	jmp	.Error0

CDelete ENDP

;---------------------------------------------------------------------------
	; TABIN inserts a TAB ( ^I ) into the buffer.

Tabin	PROC	NEAR

	mov	BX, CS:$KBufPtr		; insert a "real" tab
	mov	Byte Ptr CS:[BX], 9
	inc	BX
	mov	CS:$KBufPtr, BX
	jmp	.Piss
	ret
	
	call	.Piss			; get rid of any leftover characters
	call	.?col			; which may not be necessary
	mov	DL, ' '			; calculate how many spaces should
	mov	AX, DS:BCB.FCurCol	; be inserted
	dec	AX
	and	AX, 111b		; which is AX:= AX mod 8
	mov	CX, 8
	sub	CX, AX

	mov	BX, CS:$KBufPtr

TabIn0: mov	Byte Ptr CS:[BX], ' '	; now insert our spaces
	inc	BX
	loop	TabIn0

	mov	CS:$KBufPtr, BX

	jmp	.Piss			; and output them

TabIn	ENDP

;---------------------------------------------------------------------------
	; CBEGL moves the cursor to the linestart


CBegL	PROC	NEAR

	mov	BX,DS:BCB.FCursor
CBegLoop:
	cmp	Byte Ptr [BX], LF	; loop until we are at start of file
	je	CBegFound		; or at LF
	cmp	BX, 0FFh
	je	CBegFound
	dec	BX
	jmp	CBegLoop

CBegFound:
	inc	BX			; and save the cursor
	mov	DS:BCB.FCursor, BX
	ret

CBegL	ENDP

;---------------------------------------------------------------------------
	; CENDL moves the cursor to the end of the line

CEndL	PROC	NEAR

	mov	BX,DS:BCB.FCursor
CEndLLoop:
	cmp	Byte Ptr [BX], CR
	je	CEndFound
	cmp	BX, DS:BCB.FEnd
	jae	CEndFound
	inc	BX
	jmp	CEndLLoop

CEndFound:
	mov	DS:BCB.FCursor, BX
	ret

CEndL	ENDP

;---------------------------------------------------------------------------
	; This routines exchanges two characters

BExchange	PROC	NEAR 

	mov	DS:BCB.Dirty, TRUE	; buffer is modified

	mov	BX, DS:BCB.FCursor	; load cursor
	cmp	BX, 100h		; if it is start of file, then error
	jbe	BExchangeErr

	mov	AL, DS:[BX]		; if it is end of line, then special
	cmp	AL, CR			; is done to reverse last two chars
	je	BEx1			; which allows typing correction

	mov	AH, DS:[BX-1]		; if we are at start of a line,
	cmp	AH, LF			; then we have an error, too
	je	BExchangeErr

	mov	DS:[BX-1], AL		; exchange current and last char
	mov	DS:[BX], AH
	cmp	BX, DS:BCB.FEnd		; check whether we are at FileEnd
	jae	BExEnd1			; if so, don't advance
	inc	DS:BCB.FCursor		; otherwise do advance
BExEnd1:ret

BEx1:	cmp	BX, 101h		; we are at eoln, which says to
	jbe	BExchangeErr		; exchange last two -1 chars
	mov	AL, DS:[BX-1]		; of course check for all errors etc.
	cmp	AL, LF
	je	BExchangeErr
	mov	AH, DS:[BX-2]
	cmp	AL, LF
	je	BExchangeErr
	mov	DS:[BX-2], AL
	mov	DS:[BX-1], AH
	ret

BExchTM db	'*** LineStart ***'
BExchangeErr:
	mov	CX, 18
	mov	SI, Offset BExchTM
	jmp	.Error0

BExchange	ENDP

;---------------------------------------------------------------------------
	; This routine inserts a literal character

	C_QMsg  db	'CTL-Q '

LitIns  PROC	NEAR

	mov	DS:BCB.Dirty, TRUE	; buffer is modified

	call	.CLRMsg			; put up the CTL-Q message
	mov	SI, Offset C_QMsg
	mov	CX, 6
	call	.Msg

LInfLoop:call	.InCH			; get a character
	jz	LInfLoop

LitIns1:cmp	AL, 1Ah			; EOF is an invalid character to
	je	LitInsErr1		; insert
	cmp	AL, LF			; LF would confuse too many functions
	je	LitInsErr2

	push	AX
	mov	DL, AL			; clear the screen
	call	.CLRMsg
	pop	AX

	mov	BX, CS:$KBufPtr		; and insert it into the real buffer
	mov	Byte Ptr CS:[BX], AL
	inc	BX
	mov	CS:$KBufPtr, BX
	jmp	.Piss


LitInsErr1T	db	'*** Ctrl-Z Invalid ***'
LitInsErr2T	db	'*** Ctrl-J Invalid ***'
LitInsErr1:
	mov	SI, Offset LitInsErr1T
	jmp	LitInsErrC
LitInsErr2:
	mov	SI, Offset LitInsErr2T
LitInsErrC:
	mov	CX, 22
	jmp	.Error0

LitIns  ENDP


;------------------------------------------------------------------------
	; Calls the help routine. Once upon a time, this could take a
	; number from the last error or environment, and directly jump
	; to the appropriate help message.

CHelp	PROC	NEAR
	jmp	FHelp
	ret
CHELP	ENDP

;---------------------------------------------------------------------------
	; CYANK yanks back from the current workspacesegment ( byte 0 to
	; cs:saveend ) into the main buffer.

CYank	PROC	NEAR

	mov	DS:BCB.Dirty, TRUE
	mov	ES, CS:$WorkSpaceSegment ; ES:SI (CX) define the string length
	xor	SI, SI
	mov	CX, CS:SaveEnd

	call	.OutSTR			; outstr will do the rest
	ret

CYank	ENDP

;---------------------------------------------------------------------------
	; KILL kills up to the end of the line.

CKill	PROC	NEAR

	mov	SI, DS:BCB.FCursor	; load the cursor

	mov	BX, SI
	xor	CX, CX
	cmp	BX, DS:BCB.FEnd		; if it is on the fileend, then do
	jae	CKillErr		; nothing

	mov	AL, DS:[BX+1]		; if we are at the end of a line,
	cmp	AL, LF			; then just kill the CRLF
	je	CKA

CKLoop: inc	BX			; otherwise, kill everything up to
	mov	AL, DS:[BX]		; the CR
	cmp	AL, LF
	je	CKFound
	inc	CX
	cmp	AL, EOF
	jne	CKLoop
					; SI = Start  CX = Number of character
CKFound:call	CYSave			; now save in the yank back buffer
	jmp	CDELK			; and delete it from the file

CKA:	mov	CX, 2			; this is a CRLF to save
	call	CYSave			; so save it
	jmp	CDELK			; and delete it

CKillErr:
	mov	SI, Offset Error2Msg
	mov	CX, 15
	jmp	.Error0

CKill	ENDP

;---------------------------------------------------------------------------
	; This routine will kill the entire region

	CRegKillTE	db	'*** Cursor on Mark ***'

CRegKill	PROC	Near
	mov	SI, DS:BCB.Mark		; get the mark
	mov	AX, DS:BCB.FCursor	; get the cursor
	cmp	AX, SI			; if they are the same, there is no
	je	CRegKillErr		; region, if they are reversed, change
	ja	CRegKill0		; them.
	xchg	AX, SI
CRegKill0:
	mov	DS:BCB.FCursor, SI	; this is our new cursor after kill
	mov	CX, AX			; this is our region length
	sub	CX, SI

	call	CYSaveNewKill		; this will have to be a new save
	jmp	CDELK			; and. after saving, delete it.

CRegKillErr:
	mov	SI, Offset CRegKillTE
	mov	CX, 22
	jmp	.Error0

CRegKill	ENDP

;---------------------------------------------------------------------------
	; This procedure will delete, starting at ES:SI, CX characters

CDelK	PROC	Near

	mov	DS:BCB.Dirty, TRUE
	mov	DI, SI
	add	SI, CX
	sub	DS:BCB.FEnd, CX

	add	CX, DS:BCB.FEnd
	sub	CX, SI
	inc	CX
	cld
	mov	AX, DS
	mov	ES, AX
	clc
	shr	CX, 1
	inc	CX
	rep	movsw
	ret

CDELK	ENDP

;---------------------------------------------------------------------------
	; This procedure will first check whether it should add to the old
	; save buffer, or whether to create a new one. Then it saves the
	; area in the workspace segment

CYSave  PROC	Near

	mov	BX, Offset $History	; First it checks whether this and
	cmp	Byte Ptr CS:[BX+1], 11  ; previous command was CTL-K
	jne	CYSavenewkill
MayCYSadd:
	cmp	Byte Ptr CS:[BX], 11	; how about old one ?
	je	CYSadd

CYSavenewkill:
	cmp	CX, CS:$WorkSpaceEnd	; will kill fit into our segment ?
	jae	CYSOF

	xor	DI, DI			; yes, then the length of our new
	mov	CS:SaveEnd, CX		; save is what we insert
CYLbl:  push	CX			; which we will do right here
	push	SI
	mov	ES, CS:$WorkSpaceSegment
	rep	movsb
	pop	SI
	pop	CX
	ret

CYSadd: mov	DI, CS:SaveEnd		; will additional stuff still fit ?
	add	DI, CX
	cmp	DI, CS:$WorkSpaceEnd
	jae	CYSOF
	sub	DI, CX			; reget additional characters ( not
	add	CS:Saveend, CX		; necessary I think
	jmp	CYLbl			; and save it

CYSOFT  db	'*** Kill Space Exhausted ***'
CYSOF:  pop	AX	 ; return to upper level ( avoid call CDELK )
	mov	CX, 28
	mov	SI, Offset CYSOFT
	jmp	.Error0

CYSave  ENDP



;***************************************************************************
;				SCREEN
;
;	The following routines put up messages below the modeline
;
;---------------------------------------------------------------------------

MsgIntens	db	Lowintensity	; holds the color of the next msg

;...........................................................................
.InvMsg	PROC	NEAR
	mov	CS:MsgIntens, Inverse	; this will set the default msg
	jmp	.Msg			; intensity to inverse, and call
					; the standard message.
.InvMsg	ENDP
;...........................................................................
.Msg	PROC	Near
	push	SI			; save all
	push	CX
	pushf
	cld				; insert strings direction forward

	mov	AX, Screensegment	; sets the screen segment
	mov	ES, AX

	mov	DI, CS:$MsgAdd		; CS:$MsgAdd holds the end of the
	add	DI, StartofMsgField	; last message: DI holds now the
					; start of the message pointer

dummy	Label	Byte
.msg1:	lods	CS:dummy		; get a byte from the message
	mov	AH, CS:MsgIntens	; what is the msg's color ?
	stosw				; put a word with the character in
					; AL and the color in AH to the screen

	cmp	DI, EndofMsgfield-5	; check whether we have reached
	jae	.MAgain			; the screen end
		loop	.msg1		; no, so put other bytes to the scr

					; msg is on scr now

	sub	DI, StartofMsgField-6	; remember where this message ended
	mov	CS:$MsgAdd, DI
	mov	CS:MsgIntens, Lowintensity	; clear the default color

	popf				; restore the registers
	pop	CX
	pop	SI

					; and assign a wait state of 15 sec
	mov	CS:$Wait, Word Ptr 15	; before erasing screen messages
	ret




	; The following routine, .MAgain is called when a msg does not fit at
	; the end after the previous message. It clears the msg-area, and
	; attempts to put up the message now at the start of the msg area


.MOFMsg db	'*** Message Line Overflow ***'
.MAgain:call	.CLRMsg			; clear the screen

	popf
	pop	CX
	pop	SI

	cmp	CX, 75
	jbe	.MAg2			; if the message is larger than an
					; entire line, then ...

	mov	CX, 29			; ... report an error instead
	mov	SI, Offset .MOfMsg
	jmp	.Error0
.MAg2:  jmp	.Msg
.Msg	ENDP

;...........................................................................
	; CLRMSG clears the message area

.ClrMsg		 PROC	Near
	push	ES			; This will clear the message line
	push	DI
	mov	AX, Screensegment	; get screen segment
	mov	ES, AX
	mov	DI, StartofMsgField	; get message line start
	mov	AX, ' '			; get a space character
	mov	CX, (EndofMsgField-StartofMsgField)/2 ; and put it n times
					; to the screen
	rep	stosw
	mov	CS:$Wait, 0FFFFh	; wait forever until we reerase
	mov	CS:$MsgAdd, 0		; and remember that there is nothing
	pop	DI			; on message line
	pop	ES
		ret
.CLRMsg		 ENDP



	PROGRAM ENDS
END
```
{% endraw %}

## CTRLXC.ASM

{% raw %}
```
PUBLIC CTRL_X_Sequence, L25Switch, MacroDefinition, MacroInvocation
PUBLIC MACPtr, MacCtr, MacBack, MacArg, Store, FillColumn

EXTRN	.ERROR0:Near, .Error1:Near, .Msg:Near, .InCh:Near, .CLRMsg:Near
EXTRN	.CAPS:Near, InsertCRLF:Near, $KBufPtr:Word, .Piss:Near
EXTRN	FSave:Near, .Text:Near, FVisit:Near
EXTRN	Sound:Near

EXTRN	SwitchWindow:Near, ToggleNumWindows:Near, SelectBuffer:Near
EXTRN	FindFile:NEAR
EXTRN	BufToggle:Near, $Repeat:Word
EXTRN	Directory:Near
EXTRN	LastLineUpdate:NEAR, NoMODELINE:Byte
;---------------------------------------------------------------------------
	Page ,132
TITLE CTRL-X-C: commands CTL-X ?

INCLUDE        FDEF.DEF

Program        SEGMENT PARA    PUBLIC  'code'
       ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

;-------------------------------------------------------------------------
Free	=	Offset CXInvalid

CXJTable	dw	Free	; ^@
dw	Free			; ^A
dw	Offset BufToggle	; ^B
dw	Free			; ^C
dw	Directory		; ^D
dw	Free			; ^E
dw	Offset FindFile		; ^F
dw	Free			; ^G
dw	Free			; ^H
dw	Free			; ^I
dw	Free			; ^J
dw	Free			; ^K
dw	Free			; ^L
dw	Free			; ^M
dw	Free			; ^N
dw	Offset SwitchWindow	; ^O
dw	Free			; ^P
dw	Free			; ^Q
dw	Free			; ^R
dw	Offset SaveBuffer	; ^S
dw	Free			; ^T
dw	Free			; ^U
dw	Offset FVisit		; ^V
dw	Offset Writebuffer	; ^W
dw	Offset ExCursMark	; ^X
dw	Free			; ^Y
dw	Offset DOSExit		; ^Z
dw	Free			; ^[
dw	Free			; ^\
dw	Free			; ^]
dw	Free			; ^^
dw	Free			; ^_
dw	Free			; ' '
dw	Free			; !
dw	Free			; "
dw	Free			; #
dw	Free			; $
dw	Free			; %
dw	Free			; &
dw	Free			; `
dw	Offset DefineMacro	; (
dw	Offset EndDefineMacro	; )
dw	Free			; *
dw	Free			; +
dw	Free			; `
dw	Free			; -
dw	Free			; .
dw	Free			; \
dw	Free			; 0
dw	Offset ToggleNumWindows	; 1
dw	Offset ToggleNumWindows	; 2
dw	Free			; 3
dw	Free			; 4
dw	Free			; 5
dw	Free			; 6
dw	Free			; 7
dw	Free			; 8
dw	Free			; 9
dw	Free			; :
dw	Free			; ;
dw	Free			; <
dw	Free			; =
dw	Free			; >
dw	Free			; ?
dw	Free			; @
dw	Free			; A
dw	Offset SelectBuffer	; B
dw	Free			; C
dw	Offset Directory	; D
dw	Offset InvokeMacro	; E
dw	Offset SetFillColumn	; F
dw	Free			; G
dw	Free			; H
dw	Free			; I
dw	Free			; J
dw	Free			; K
dw	Offset WhereamI		; L
dw	Free			; M
dw	Free			; N
dw	Offset SwitchWindow	; O
dw	Free			; P
dw	Free			; Q
dw	Free			; R
dw	Free			; S
dw	Free			; T
dw	Free			; U
dw	Free			; V
dw	Free			; W
dw	Free			; X
dw	Free			; Y
dw	Free			; Z
dw	Free			; [
dw	Free			; \
dw	Free			; ]
dw	Free			; ^
dw	CreateMap		; _
dw	Free			; '
					; lowercase trapped

CXInvalidT0	db	'*** CTL-X '
CXInvalidT1	db	'? unknown ***'
ConfirmMsg1	db	'NOT CRASHPROOF: needs valid HELP file !! [CTL-Y]'
TellFill	db	'[Fill Column Set]'
TellFillDefault	db	'[Set Fill Column Default (=75)]'
Invalidfillcolumn db	'*** Range must be 25 to 255 ***'

Store		db	(Macmaximum+1) dup ( 7 )  ; if at all, then ctl-g !
MacMsg1		db	'[Defining Macro]'
MacMsg2		db	'[Macro Defined]'
MacMsg3		db	'[Macro Invoked]'
MacroErr2	db	'*** Already in Macro Definition: Restart ***'
MacroErr1	db	'*** Not in Macro Definition ***'
MacroErr3	db	'*** Invalid Nesting ***'

MacroDefinition	db	False
MacroInvocation	db	False
MACPtr		dw	Offset Store
MacCtr		db	0
MacBack		db	0
MacArg		dw	0

SERIALNUMBER	dw	1
L25Switch	db	1
Bye		db	'MAX [Version 1.01], '
		db	'(C) 1984, Ivo Welch. All Rights Reserved.'

WRITINGMSG	db	'[Writing File]'
SAVEDMSG	db	'[File Saved]'
AskFile		db	'WRITE FILE <CR>:'
ConfirmMsg	db	'! CONFIRM WITH CTL-Y !'
NOTCONFIRMED	db	'*** NOT CONFIRMED ***'
WrErrMsg	db	'*** No Filename ***'

PStart		dw	100h
PEnd		dw	101h

;---------------------------------------------------------------------------
Ctrl_X_Sequence	PROC	Near

	call	.CAPS

	cmp	AL, 'z'
	ja	CXInvalid1
	
CXParse:xor	AH, AH			; clear insignificant
	add	AX, AX			; dw index
	mov	BX, AX			; get the index
	jmp	CS:CXJTable [BX]	; and jump

CXInvalid:
	shr	AL, 1
CXInvalid1:
	mov	CS:CXInvalidT1, AL
        mov     SI, Offset CXInvalidT0
        mov     CX, 23
        jmp     .Error0

Ctrl_X_Sequence	ENDP

;-----------------------------------------------------------------
DOSExit	PROC	NEAR

if Confirm
	mov	SI, Offset ConfirmMsg	; ask for CTL-Y confirmation for exit
	mov	CX, 22
	call	.Error1			; beep and display
DOS1:	call	.Inch			; get one character
	jz	 DOS1
	cmp	AL, 25			; is it CTL-Y
	je	FinalExit		; if so, we will soon die
	mov	SI, Offset NOTCONFIRMED	; no, then print an error message
	mov	CX, 21
	jmp	.Error0			; and exit
endif
FinalExit:
	mov	AH, 2			; set cursor position to print a nice
	mov	BH, 0			; exit message on leave.
	mov	DX, 23*256
	int	10h
	call	.CLRMsg
	mov	SI, Offset Bye
	mov	CX, 61
	call	.Msg			; and say bye

	mov	CS:L25Switch, 0		; don't know if this is necessary
	mov	CS:NoModeLine, TRUE
	call	LastLineUpdate
if noblockexit
	mov	CH, 6
	mov	CL, 7
	mov	AH, 1			; set the cursor to block via BIOS
	int	10h
endif
	int	20h			; and exit to DOS

DOSExit	ENDP

;---------------------------------------------------------------------------
SaveBuffer	PROC	Near

	mov	SI, Offset WRITINGMSG	; say "Saving Buffer"
	mov	CX, 14
	call	.Msg
	call	FSave			; call the routine that does it
	mov	SI, Offset SAVEDMSG	; and say you have finished
	mov	CX, 12
	jmp	.Msg

SaveBuffer	ENDP

;---------------------------------------------------------------------------
WriteBuffer	PROC	Near
	call	.CLRMsg			; ask for the filename
	mov	SI, Offset AskFile
	mov	CX, 16
	call	.Msg

	mov	SI, CX			; prepare to enter .Text
	add	SI, SI			; SI holds the start of the cursor
	add	SI, StartofMsgField	; on the screen
	mov	DL, CR			; end input with CR
	mov	DI, Offset BCB.File	; and put result to File field
	call	.Text

	cmp	BX, 0			; if we received 0 characters, too bad
	je	WrErr

	call	FSave			; and now save it with the new file
					; name already in our field
	mov	SI, Offset SAVEDMSG	; write [Saved]
	mov	CX, 12
	jmp	.Msg

WrErr:	mov	SI, Offset WrErrMsg	; sorry we received no characters
	mov	CX, 19
	jmp	.Error0

WriteBuffer	ENDP
;---------------------------------------------------------------------------
ExCursMark	PROC	Near

	mov	AX, DS:BCB.FCursor	; simply exchange cursor and mark
	xchg	AX, DS:BCB.Mark
	mov	DS:BCB.FCursor, AX
	ret

ExCursMark	ENDP

;----------------------------------------------------------------------
DefineMacro	PROC	NEAR

	cmp	CS:MacroDefinition, TRUE
	jne	DM1
	mov	SI, Offset MacroErr2
	mov	CX, 44
	jmp	.Error0
DM1:	mov	CS:Macrodefinition, TRUE	; signal start of definition
	mov	CS:Macptr, Offset Store		; this is the offset of field
	mov	CS:Macctr, 0			; number of characters
	mov	CS:MacBack, 0			; as well
	mov	SI, Offset MacMsg1
	mov	CX, 16
	jmp	.Msg

DefineMacro	ENDP

;---------------------------------------------------------------------------
EndDefineMacro	PROC	NEAR

	cmp	CS:Macrodefinition, FALSE
	jne	EDM1
	mov	SI, Offset MacroErr1
	mov	CX, 31
	jmp	.Error0
EDM1:	mov	CS:Macrodefinition, FALSE
	dec	CS:MacBack
	dec	CS:Macctr
	mov	SI, Offset MacMsg2
	mov	CX, 15
	jmp	.Msg

EndDefineMacro	ENDP

;---------------------------------------------------------------------------
InvokeMacro	PROC	NEAR

	cmp	CS:$Repeat, 0
	je	IM1
		mov	AX, CS:$Repeat
		mov	CS:MacArg, AX
		mov	CS:$Repeat, 0
IM1:	cmp	CS:Macrodefinition, TRUE
	je	IMError
	mov	AL, CS:MacBack
	mov	CS:MacCtr, AL
	mov	CS:MACptr, Offset Store
	mov	CS:MacroInvocation, TRUE
	mov	SI, Offset MacMsg3
	mov	CX, 15
	call	.Msg
	ret
IMError:mov	SI, Offset MacroErr3
	mov	CX, 23
	jmp	.Error0

InvokeMacro	ENDP
;---------------------------------------------------------------------------
LocMsg		db	'[at Byte '
Location	db	'0000'
		db	']'

WhereamI	PROC	NEAR

	mov	BX, DS:BCB.FCursor
	sub	BX, 100h
	call	WhereSUB
	mov	SI, Offset LocMsg
	mov	CX, 14
	jmp	.Msg

WhereamI	ENDP
;---------------------------------------------------------------------------
WhereSub	PROC	NEAR
	mov	DI, Offset Location

	mov	AL, BH
	and	AL, 11110000b		; digit 1
	shr	AL, 1
	shr	AL, 1
	shr	AL, 1
	shr	AL, 1
	call	WFormat
	mov	CS:[DI], AL
	inc	DI

	mov	AL, BH			; digit 2
	and	AL, 00001111b
	call	WFormat
	mov	CS:[DI], AL
	inc	DI

	mov	AL, BL			; digit 3
	and	AL, 11110000b
	shr	AL, 1
	shr	AL, 1
	shr	AL, 1
	shr	AL, 1
	call	WFormat
	mov	CS:[DI], AL
	inc	DI

	mov	AL, BL			; digit 4
	and	AL, 00001111b
	call	WFormat
	mov	CS:[DI], AL
	inc	DI
	ret
WFormat	PROC	NEAR
	cmp	AL, 9
	ja	Letter
Number:	add	AL, '0'
	jmp	WMerge
Letter:	add	AL, 'A'-10
WMerge:	ret
Finished:ret

WFormat	ENDP
Wheresub	ENDP
db ' createmap   '
;---------------------------------------------------------------------------
CreateMap	PROC	NEAR

	call	.CLRMsg
	mov	SI, Offset ConfirmMsg1
	mov	CX, 48
	call	.Msg
	call	Sound

CWait:	call	.Inch
	jz	CWait

	cmp	AL, 25			; ^Y
	je	CMOK
	mov	SI, Offset NotConfirmed
	mov	CX, 21
	jmp	.Error0

CMOK:	mov	CX, DS:BCB.FEnd
	sub	CX, 100			; do in entire file

	mov	SI, 0FFh

UntilEof:
	mov	AX, 00

CSLoop:	inc	SI
	cmp	Byte Ptr DS:[SI], newpage
	loopne	CSLoop

	call	.Inch
	jnz	Finished

	cmp	SI, DS:BCB.FEnd
	jae	Finished
	cmp	CX, 10
	je	Finished

	mov	BX, SI
	sub	BX, 2
	sub	BX, 100h
	call	WhereSub

	mov	BX, CS:$KBufPtr		; put up the name
	inc	SI

MAg:	mov	AL, DS:[SI]		; get a char from the name
	inc	SI
	cmp	AL, NUL
	je	Nametransferred
	mov	CS:[BX], AL		; and save it
	inc	BX
	jmp	MAg
Nametransferred:
	mov	Byte Ptr CS:[BX], 9		; a tab
	inc	BX
	push	SI
	mov	SI, Offset Location	; now the location
	mov	AX, CS:[SI]
	add	SI, 2
	mov	CS:[BX], AX
	add	BX, 2
	mov	AX, CS:[SI]
	mov	CS:[BX], AX
	add	BX, 2
	pop	SI

	mov	CS:$KBufPtr, BX
	push	SI
	push	CX

	call	BufToggle

	call	.Piss

	call	InsertCRLF

	call	BufToggle

	pop	CX
	pop	SI
	add	SI, 5
	jmp	UntilEOF

NodeName	dw	5 dup ('$')
CreateMap	ENDP
;---------------------------------------------------------------------------
FillDefault	equ	75
MaxFillColumn	equ	255
MinFillColumn	equ	25
FillColumn	dw	FillDefault

SetFillColumn	PROC	Near
	mov	AX, CS:$Repeat
	cmp	AX, 0
	je	SFCDefault
	cmp	AX, MaxFillColumn
	ja	SFCWrong
	cmp	AX, MinFillCOlumn
	jb	SFCWrong
	mov	CS:FillColumn, AX
	mov	CS:$Repeat, 0
	mov	SI, Offset TellFill
	mov	CX, 17
	jmp	.Msg
SFCDefault:
	mov	CS:FillColumn, FillDefault
	mov	SI, Offset TellFillDefault
	mov	CX, 31
	jmp	.Msg
SFCWrong:
	mov	SI, Offset InvalidFillCOlumn
	mov	CX, 31
	jmp	.Error0


SetFillColumn	ENDP

	PROGRAM	ENDS
END
```
{% endraw %}

## DOSFILES.ASM

{% raw %}
```
PUBLIC  FVISIT, FVINIT, FSAVE, .Text, FindFile, Directory

EXTRN	.Msg:Near, .Error0:Near, .InCh:Near, .CLRMsg:Near
EXTRN	$Buffer1:Word, $Buffer2:Word, $BufferNumber:Word
EXTRN	.CAPS:Near, Sound:Near
EXTRN	Separatorline:NEAR, .InvMsg:Near, Switchmenu:Near

;---------------------------------------------------------------------------
	Page ,132
NAME FILE

TITLE File handler

Cursorhome	MACRO
		mov	AH, 2		; set cursor position
		sub	dx, dx
		mov	BH, 0
		int	10h		; request new cursor

	ENDM

cls	macro
	mov	CX, 0			; clear the screen via BIOS
	mov	dx, 184fh
	mov	bh, 7
	mov	AX, 600h
	int 10h
	ENDM

;----------------------------------------------------------------------
Program SEGMENT PARA	PUBLIC  'code'
	ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

;......................................................................

	INCLUDE FDEF.DEF

Maxsize		equ	0F000h
NewfileFlag	equ	10000000b
OF		equ	00000001b

;----------------------------------------------------------------------
; FVisitFile
; FSaveFile
; .ProcessCommandLine
;
; .FLoad		Disk Operation
; .BCBInit		sets up BCB for just loaded file
;----------------------------------------------------------------------

Readonly	equ	0
FileOpen	equ	3Dh
FileRead	equ	3Fh
FileClose	equ	3Eh
FileCreate	equ	3Ch
FileWrite	equ	40h
MSDOS		equ	21h
Cursor		equ	lowintensity*256+178


Defaultfile	db	'WORK.TXT '
VIFT		db	'VISIT FILE <CR>:'
.?Con		db	'SAVE THIS MODIFIED BUFFER (Y/N/CTL-G) ?'
.TextMsg	db	70 dup ('#')
DFMsg		db	'*** Disk Overflow ***'
WriteErr	db	'*** No Filename ***'
NewfileMsg	db	'[NEW FILE]'
NoHandle	db	'*** No Handle Left ***'
Nopath		db	'*** No such Path ***'
AccessDen	db	'*** Access Denied ***'
InternalE	db	'***Internal Error***'
BigMsg		db	'*** File TOO Big ***'
.TQuit		db	'*** User Abort ***'
Rubbish		db	22 dup ('$')
Noth		db	5 dup (0)

;---------------------------------------------------------------------------
FVINIT PROC	NEAR

	call	.ProcessCommandLine
	cmp	CS:$Buffer2, 0
	je	FVOne
		mov	DS, CS:$Buffer2
		call	FLoadFile
FVOne:	mov	DS, CS:$Buffer1
	call	FLoadFile
	ret

FVINIT ENDP

;---------------------------------------------------------------------------
.ProcessCommandLine	PROC	Near


	mov	BL, CS:[80h]
	sub	BH, BH
	mov	Word Ptr CS:[BX+81h], 0
	

	push	DS

 	mov	DS, CS:$Buffer1

	mov	BX, 82h
	call	Transfer_File_Name

	cmp	CS:$Buffer2, 0
	je	.PCLret

		inc	BX			; start transfer from next nam
		mov	DS, CS:$Buffer2
		call	Transfer_File_Name
.PCLret:pop	DS
	ret

.ProcessCommandLine	ENDP

;----------------------------------------------------------------------
; Takes a string from [BX] and puts it into the file-location of the current
; buffer. If there is no filename, then the default filename is loaded.

Transfer_File_Name	PROC	NEAR
	xor	DI, DI				; DI will act as a counter

TFN1:	mov	AL, CS:[BX+DI]			; transfer until a space is
	cmp	AL, ' '				; found
	je	TFN2
	cmp	AL, 0
	je	TFN2
	mov	DS:BCB.File[DI], AL
	inc	DI
	jmp	TFN1
TFN2:	mov	DS:BCB.File[DI], 0		; -> ASCIIZ
	cmp	DI, 0				; if the first character was
	je	No_FileName_On_Line		; a ' ', put something special
	add	BX, DI				; remem where next one starts
	cmp	BX, 100h
	jbe	TFN3
	mov	BX, 80h
TFN3:	ret

No_FileName_On_Line:
	mov	BX, Offset Defaultfile
	call	Transfer_File_name
	ret
Transfer_File_Name	ENDP

;---------------------------------------------------------------------------
; File Not Found Handler
DOSERROR:
	cmp	AX, 2
	je	DOSERROR2
	cmp	AX, 3
	je	DOSERROR3
	cmp	AX, 4
	je	DOSERROR4
	cmp	AX, 5
	je	DOSERROR5
	mov	SI, Offset InternalE
	mov	CX, 20
	jmp	.Error0


; new file
DOSERROR2:
	mov	Byte Ptr DS:[100h], EOF
	mov	DS:BCB.FCursor, 100h
	mov	DS:BCB.FEnd, 100h
	mov	DS:BCB.AuxScrStart, 100h
	mov	DS:BCB.AuxCursor, 100h
	mov	DS:BCB.ScrStart, 100h
	mov	DS:BCB.FCurCol, 1
	mov	DS:BCB.Mark, 100h
	mov	DS:BCB.ScrCursor, 0
	mov	DS:BCB.Dirty, FALSE
	mov	DS:BCB.EDMode, 0
	mov	DS:BCB.UnUsed, FALSE
	mov	SI, Offset NewfileMsg
	mov	CX, 10
	jmp	.Msg

; Invalid Pathname
DOSERROR3:
	mov	SI, Offset NoPath
	mov	CX, 20
	jmp	.Error0


; No Handle Available
DOSERROR4:
	mov	SI, Offset NoHandle
	mov	CX, 22
	jmp	.Error0


; Access denied
DOSERROR5:
	mov	SI, Offset AccessDen
	mov	CX, 21
	jmp	.Error0

;...........................................................................
FLoadFile	PROC	Near

	mov	AL, Readonly
	mov	AH, FileOpen
	mov	DX, Offset BCB.File
	int	MSDOS
	jnc	FL1
		jmp	DOSERROR
FL1:	mov	BX, AX			; holds file handle
	mov	DX, 100h		; holds the filepointer
	mov	CX, 0F001h		; min bufferlength for real work
	mov	AH, FileRead
	int	MSDOS

	cmp	AX, 0F000h
	jae	OFERROR

	push	AX
	mov	AH, FileClose
	int	MSDOS
	pop	AX
	jnc	FL2
	jmp	DOSERROR

FL2:	add	AX, 100h		; and adjust for our buffer starts at
	mov	DS:BCB.FEnd, AX		; 100h
	mov	BX, AX
	mov	Byte Ptr DS:[BX], 1Ah	; set the eof character

	mov	DS:BCB.EDmode, 0	; Fundamental
	mov	DS:BCB.Dirty, FALSE	; saved buffer
	mov	DS:BCB.Scrend, 0	; screen end
	mov	DS:BCB.Scrcursor, 0	; screen cursor
	mov	DS:BCB.Unused, FALSE

	mov	DS:BCB.FCurCol, 1

	mov	AX, 0100h

	mov	DS:BCB.ScrStart,  AX	
	mov	DS:BCB.FCursor,	AX
	mov	DS:BCB.AuxScrStart,  AX	
	mov	DS:BCB.AuxCursor, AX
	mov	DS:BCB.Mark, AX
	mov	DS:BCB.FOldCursor, AX
	mov	DS:BCB.FOldCurCol, AX

	ret

;---------------------------------------------------------------------------
; File TOO Big
OFERROR:
	mov	AH, FileClose
	int	MSDOS

	mov	CX, 20
	mov	SI, Offset BigMsg
	call	.Msg
	mov	DS:BCB.File, '-'
	ret


FLoadFile	ENDP


;----------------------------------------------------------------------
FVISIT PROC	NEAR

	call	.CLRMsg			; first put up the visit file msg
	mov	SI, Offset ViFT
	mov	CX, 16
	call	.Msg
	mov	SI, CX			; now calculate the screen message
	add	SI, SI
	add	SI, StartofMsgField	
	mov	DI, Offset BCB.File	; load to the filename DS:DI
	mov	DL, CR			; and end everything with a CR
	call	.Text			; result in BCB.File, CX: # of chars

	cmp	CX, 0
	je	WrErr

	push	SI
	push	BX
	call	.?Save			; ask for confirmation
	pop	BX
	pop	SI

	mov	DI, Offset BCB.File	; Filename Start

	call	FLoadFile		; and load the file to 100h
	ret

WrErr: mov	SI, Offset WriteErr
	mov	CX, 19
	jmp	.Error0

FVISIT ENDP


;**********************************************************************
FSAVE  PROC	Near

	mov	DX, Offset BCB.File	; here I should first rename
	xor	CX, CX			; no attribute
	mov	AH, Filecreate
	int	MSDOS
	jnc	FS1
	jmp	DOSERROR
FS1:	mov	BX, AX			; file handle
	mov	CX, DS:BCB.FEnd
	sub	CX, 100h		; # bytes to be written
	mov	DX, 100h
	push	CX
	mov	AH, FileWrite
	int	MSDOS
	pop	CX
	jnc	FS2
	jmp	DOSERROR	
FS2:	push	AX
	mov	AH, FileClose
	int	MSDOS
	pop	AX	
	cmp	AX, CX
	jne	DiskFull
	mov	DS:BCB.Dirty, FALSE
	ret

FSAVE  ENDP


DiskFull	PROC	NEAR
	mov	SI, Offset DFMsg
	mov	CX, 21
	jmp	.Error0
DiskFull	ENDP


;***************************************************************************
;----------------------------------------------------------------------
; accepts text and puts it into [DI]. The exit character is in AL.
; [SI] points to the current character on the screen
; other functions:
;
;	CTL-G	cancel and exit
;	CTL-U	cancel and retry
;	CTL-H	backspace one character
;	ESC	parse for the filename
;
; returns on exit in CX the number of received characters, in DI the start of
; the message ( as it was received on entry ).
;

Exitcharacter	db	CR

.Text	PROC	Near

	xor	BX, BX			; 0 characters received
	mov	CS:Exitcharacter, DL

.TextLoop:
	mov	AX, Cursor		; set the cursor
	mov	ES:[SI+BX], AX


.Text0:	call	.InCh
	jz	.Text0

	cmp	AL, CS:Exitcharacter	; if we have an end character
	je	.TextEnd
	cmp	AL, ESC			; if we wish to parse for a file
	je	.TextParse
	cmp	AL, 21			; if we wish to retry = C-U
	je	.TextRedo
	cmp	AL, 7			; if we wish to quit = C-G
	je	.TextQuit
	cmp	AL, 8			; if we wish to backspace
	je	.TextDel

.TextChar:				; if we just wish to add a char
	mov	CS:[BX+Offset .TextMsg], AL

	mov	AH, lowintensity	; put it to screen
	mov	ES:[BX+SI], AX

	inc	BX			; next character.
	inc	SI			; advance the screen by one extra.

	jmp	.TextLoop

;...........................................................................
.TextRedo:	
	cmp	BX, 0				; are there 0 chars ?
	je	.TextLoop
	mov	AX, ' '+lowintensity*256	; no, then clear from scr
	mov	ES:[BX+SI], AX
	dec	BX				; one less char to clear
	dec	SI				; but adjust for scr *2
	jmp	.TextRedo

;...........................................................................
.TextQuit:
	call	.CLRMsg
	xor	BX, BX
	mov	SI, Offset .TQuit
	mov	CX, 18
	jmp	.Error0

;...........................................................................
.TextEnd:
	mov	CX, BX				; we have received BX chars
	cmp	cx, 0
	je	.TEnd2
	mov	SI, Offset .TextMsg		; This is where we stored our
						; temporary string: DI holds
						; where it should be
.TEnd1:	mov	AL, CS:[SI]			; this transfers everything
	mov	DS:[DI], AL			; to the desired location
	inc	DI
	inc	SI
	loop	.TEnd1

.TEnd2:	mov	Byte Ptr DS:[DI], 0		; oh, and signal ASCIIZ flag
	push	bx
	call	.CLRMsg				; clear the messagefield
	pop	cx
	ret
;...........................................................................

.Textdel:
	cmp	BX, 0				; if there are 0 chars...
	je	.TextDelErr
	mov	AX, ' '+lowintensity*256	; clear the cursor
	mov	ES:[BX+SI], AX
	dec	SI				; adjust to point to
	dec	BX				; previous character
	jmp	.TextLoop

.TextDelErr:
	call	Sound
	jmp	.Text0				; do nothing

CannotParse:
	call	Sound
	jmp	.text0
;...........................................................................
.TextParse:
	mov	AL, CS:Rubbish+1
	cmp	AL, ':'
	je	CannotParse
	push	DS
	mov	AX, CS
	mov	DS, AX
	mov	DX, Offset Rubbish		; DS:DX -> Rubbish
	mov	AH, 1Ah
	int	MSDOS				; DTA set

	call	AddStars

	mov	DX, Offset .TextMsg		; request first directory name
	xor	CX, CX				; no attributes
	mov	AH, 4Eh
	int	MSDOS
	jc	NoSuchFile

	mov	AH, 4Fh				; request another such file
	int	MSDOS
	jnc	Multiplefiles

	pop	DS				; now we don't need these
						; pointers anymore.

; When we reach here, we have a unique filename in rubbish.
FNT:	mov	AL, CS:[BX+(Offset Rubbish)+1Eh] ; get one new character
	cmp	AL, NUL				; check if it is the end
	je	FNTEnd
	mov	CS:[Offset .TextMsg+BX], AL	; and add it to our name

	mov	AH, nocolor			; and put it to the screen
	mov	ES:[SI+BX], AX

	inc	BX				; next character
	inc	SI
	jmp	FNT

FNTEnd:	mov	AX, Cursor			; reset the cursor
	mov	ES:[SI+BX], AX
	jmp	.Text0				; and wait for more commands


MultipleFiles:
	pop	DS
	call	Sound
	jmp	.Text0

NoFileMsg	db	'*** No such File ***'
NoSuchFile:
	pop	DS
	call	.CLRMsg
	mov	SI, Offset NoFileMsg
	mov	CX, 20
	jmp	.Error0

;...........................................................................
AddStars	PROC	NEAR		; pads with either * or *.*

	push	AX
	mov	AX, BX
AddAgain:
	dec	BX
	jz	Endreached
	cmp	Byte Ptr CS:[Offset .TextMsg+BX], '.'
	jne	Addagain

FoundPeriod:
	mov	BX, AX
	mov	Byte Ptr CS:[BX+Offset .TextMsg], '*'	; convert to ASCIIZ
	mov	Byte Ptr CS:[BX+Offset .TextMsg+1], 0
	pop	AX
	ret
EndReached:
	mov	BX, AX
	mov	Byte Ptr CS:[BX+Offset .TextMsg], '*'	; convert string to ASCIIZ
	mov	Byte Ptr CS:[BX+Offset .TextMsg+1], '.'	; parse format
	mov	Byte Ptr CS:[BX+Offset .TextMsg+2], '*'
	mov	Byte Ptr CS:[BX+Offset .TextMsg+3], 0
	pop	AX
	ret

AddStars	ENDP

.Text  ENDP

;----------------------------------------------------------------------
.NFile PROC	NEAR	; archaic but public
	ret

.NFile ENDP

;..............................
.?Save PROC	Near

	cmp	DS:BCB.Dirty, TRUE
	jne	NoQuestion

	mov	SI, Offset .?Con
	mov	CX, 38
	call	.Msg

.?Save0:call	Sound

.?Save1:call	.InCH
	jz	.?Save1
	call	.CAPS
	cmp	AL, 'N'
	je	.?Save2
	cmp	AL, CTL_G
	je	AbortQuick
	cmp	AL, 'Y'
	jne	.?Save0

	jmp	FSave

.?Save2:
NoQuestion:
	ret
AbortQuick:
	mov	SI, Offset .TQuit
	mov	CX, 18
	jmp	.Error0

.?Save ENDP

;---------------------------------------------------------------------------
Scraparea	equ	Offset BCB.File+100
Dirmaskmsg	db	'Directory Mask [*.*]: '
Entries		db	44 dup ( '|')

Directory	PROC	Near
	call	.CLRMsg			; first put up the visit file msg
	mov	SI, Offset Dirmaskmsg
	mov	CX, 22
	call	.Msg
	mov	SI, CX			; now calculate the screen message
	add	SI, SI
	add	SI, StartofMsgField	
	mov	DI, Scraparea		; load to some free space
	mov	DL, CR			; and end everything with a CR
	call	.Text			; in BCB.File+100, CX: # of chars

	cmp	cx, 2			; more than 2 characters
	ja	Dir2

	cmp	cx, 1			; one character filename
	je	Dir2

	mov	bx, scraparea
	cmp	cx, 0			; no file so default to *.*
	je	Dir1

	cmp	byte ptr Ds:[bx+1], ':'	; default drive
	jne	Dir2
	add	bx, 2	
	
Dir1:	mov	Byte Ptr DS:[bx],   '*'	; default mask : *.*
	mov	Byte Ptr DS:[bx+1], '.'
	mov	Byte Ptr DS:[bx+2], '*'
	mov	Byte Ptr DS:[bx+3],  0
	add	cx, 3
	
Dir2:	push	ds			; set DTA to entries
	push	cs
	pop	ds
	mov	dx, offset entries
	mov	ah, 1Ah
	int	MSDOS
	pop	ds

	mov	dx, Scraparea		; get first file
	sub	cx, cx
	mov	ah, 4Eh
	int	MSDOS
	jc	faildir

	cls
	cursorhome

Another:call	printentry
	mov	ah, 4Fh			; get another file
	int	MSDOS
	jc	Allreported
	jmp	Another

printentry	proc	near
	mov	cx, 20
	mov	si, offset entries +30

printentry1:
	mov	dl, cs:[si]
	inc	si
	cmp	dl, 0
	je	printedentry
	mov	ah, 6			; print one character
	int	MSDOS
	loop	printentry1

printedentry:
	mov	dl, ' '
	mov	ah, 6
printspaces:
	int	MSDOS
	loop	printspaces

	ret
printentry	endp


Allreported:
	mov	si, offset presskey
	mov	cx, 30
	call	.InvMsg
Allreported1:
	call	.Inch
	jz	Allreported1

	call	.CLRMsg			; restore msgarea
	call	Separatorline		; restore separator line for windows
	mov	ax, 7*256+0		; reinitialize last line
	jmp	Switchmenu

faildir:mov	si, offset dirfailmsg
	mov	cx, 31
	jmp	.Error0

presskey	db	'Press any key to return to MAX'
dirfailmsg	db	'*** No Such Accessible File ***'

Directory	ENDP
;---------------------------------------------------------------------------
FindFile	PROC	NEAR
	
	mov	SI, Offset InImplementation
	mov	CX, 21
	jmp	.Msg

InImplementation	db	'* In Implementation *'
;	mov	BX, 0
;	mov	CX, CS:$Buffernumber

;TBLoop:	mov	DS, CS:[BX+Offset $Buffer1]
;	shr	BX, 1
;	mov	AX, BX
;	add	BX, BX
;	add	BX, 2
;	push	AX
;	cmp	AX, CS:ActiveBuffer
;	je	SWI

FindFile	ENDP
	PROGRAM ENDS
END
```
{% endraw %}

## ESCC.ASM

{% raw %}
```
PUBLIC	.CAPS,	Escape_Character, FillParagraph, GetColumn

EXTRN	CYSave:Near, CDELK:Near, .Error0:Near, CCenter:Near
EXTRN	.ERROR1:NEAR, CDELK:Near, .MakeSpace:Near, FillColumn:Word
EXTRN	PreviousScreen:NEAR, ScrollDown:NEAR
;---------------------------------------------------------------------------

	Page ,132
NAME	FESC

TITLE Escape Character Handler

IF2
	%OUT *Pass 2*
ENDIF


Program SEGMENT PARA	PUBLIC  'code'
	ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

INCLUDE	FDEF.DEF

MJTable	dw	Offset	MInvalid	; ^@
dw	Offset	MInvalid		; ^A
dw	Offset	MInvalid		; ^B
dw	Offset	MInvalid		; ^C
dw	Offset	MInvalid		; ^D
dw	Offset	MInvalid		; ^E
dw	Offset	MInvalid		; ^F
dw	Offset	MInvalid		; ^G
dw	Offset	MRubWord		; ^H
dw	Offset	MInvalid		; ^I
dw	Offset	MInvalid		; ^J
dw	Offset	MInvalid		; ^K
dw	Offset	MInvalid		; ^L
dw	Offset	MInvalid		; ^M
dw	Offset	MInvalid		; ^N
dw	Offset	MInvalid		; ^O
dw	Offset	MInvalid		; ^P
dw	Offset	MInvalid		; ^Q
dw	Offset	MInvalid		; ^R
dw	Offset	MInvalid		; ^S
dw	Offset	MInvalid		; ^T
dw	Offset	MInvalid		; ^U
dw	Offset	MInvalid		; ^V
dw	Offset	MInvalid		; ^W
dw	Offset	MInvalid		; ^X
dw	Offset	MInvalid		; ^Y
dw	Offset	MInvalid		; ^Z
dw	Offset	MInvalid		; ^[
dw	Offset	MInvalid		; ^\
dw	Offset	MInvalid		; ^]
dw	Offset	MInvalid		; ^^
dw	Offset	MInvalid		; ^_
dw	Offset	MInvalid		; ' '
dw	Offset	MInvalid		; !
dw	Offset	MInvalid		; "
dw	Offset	MInvalid		; #
dw	Offset	MInvalid		; $
dw	Offset	MInvalid		; %
dw	Offset	MInvalid		; &
dw	Offset	MInvalid		; `
dw	Offset	MInvalid		; (
dw	Offset	MInvalid		; )
dw	Offset	MInvalid		; *
dw	Offset	MInvalid		; +
dw	Offset	MInvalid		; `
dw	Offset	MInvalid		; -
dw	Offset	MInvalid		; .
dw	Offset	MInvalid		; \
dw	Offset	MInvalid		; 0
dw	Offset	MInvalid		; 1
dw	Offset	MInvalid		; 2
dw	Offset	MInvalid		; 3
dw	Offset	MInvalid		; 4
dw	Offset	MInvalid		; 5
dw	Offset	MInvalid		; 6
dw	Offset	MInvalid		; 7
dw	Offset	MInvalid		; 8
dw	Offset	MInvalid		; 9
dw	Offset	MInvalid		; :
dw	Offset	MInvalid		; ;
dw	Offset	CStartFile		; <
dw	Offset	MInvalid		; =
dw	Offset	CEndFile		; >
dw	Offset	MInvalid		; ?
dw	Offset	MInvalid		; @
dw	Offset	MInvalid		; A
dw	Offset	WBackward		; B
dw	Offset	WCapitalize		; C
dw	Offset	MDelWord		; D
dw	Offset	MInvalid		; E
dw	Offset	WForward		; F
dw	Offset	MInvalid		; G
dw	Offset	MInvalid		; H
dw	Offset	MInvalid		; I
dw	Offset	MInvalid		; J
dw	Offset	MInvalid		; K
dw	Offset	MInvalid		; L
dw	Offset	MInvalid		; M
dw	Offset	MInvalid		; N
dw	Offset	MInvalid		; O
dw	Offset	MInvalid		; P
dw	Offset	FillParagraph		; Q
dw	Offset	MInvalid		; R
dw	Offset	MInvalid		; S
dw	Offset	MInvalid		; T
dw	Offset	WUppercase		; U
dw	Offset	PreviousScreen		; V
dw	Offset	MInvalid		; W
dw	Offset	MInvalid		; X
dw	Offset	MInvalid		; Y
dw	Offset	ScrollDown		; Z
dw	Offset	MInvalid		; [
dw	Offset	MInvalid		; \
dw	Offset	MInvalid		; ]
dw	Offset	MInvalid		; ^
dw	Offset	MInvalid		; _
dw	Offset	MInvalid		; '
					; lowercase trapped

MInvalidT0	db	'*** ESC-'
MInvalidT1	db	'? unknown ***'
$Error1	 	db	'*** FileStart ***'
$Error2	 	db	'*** FileEnd ***'
Confusedbreak	db	'*** Can not break Line ***'
PStart		dw	100h
PEnd		dw	101h


;---------------------------------------------------------------------------
Escape_Character	PROC	Near

	call	.CAPS

	cmp	AL, 'z'
	ja	MInvalid1
	
MParse:	xor	AH, AH			; clear insignificant
	add	AX, AX			; dw index
	mov	BX, AX			; get the index
	jmp	CS:MJTable [BX]		; and jump
MInvalid:
	shr	AL, 1			; to adjust for the jump table
MInvalid1:
	mov	CS:MInvalidT1, AL
	mov	SI, Offset MInvalidT0
	mov	CX, 21
	jmp	.Error0

Escape_Character  ENDP

;-------------------Escape-Sequences-Processing---------------------------
CStartFile	PROC	Near

	mov	DS:BCB.FCursor, 100h
	ret

CStartFile	ENDP
;...........................................................................
CEndFile	PROC	Near

	mov	AX, DS:BCB.FEnd
	mov	DS:BCB.FCursor, AX
	ret

CEndFile	ENDP
;---------------------------------------------------------------------------
WUppercase	PROC	NEAR
	mov	DS:BCB.Dirty, TRUE
	call	.?WBackWard
	mov	DX, DS:BCB.FCursor
WUp1:	mov	AL, DS:[BX]
	call	.CAPS
	mov	DS:[BX], AL
	inc	BX
	cmp	BX, DX
	jbe	WUp1
	ret
WUppercase	ENDP
;...........................................................................
WCapitalize	PROC	NEAR
	mov	DS:BCB.Dirty, TRUE
	mov	DX, DS:BCB.FCursor
	call	.?WBackWard
	mov	AL, DS:[BX]
	call	.CAPS
	mov	DS:[BX], AL
	inc	BX
	cmp	BX, DX
	ja	WCap3
WCap2:	mov	AL, DS:[BX]
	call	.NOCAPS
	mov	DS:[BX], AL
	inc	BX
	cmp	BX, DX
	jbe	WCap2
WCap3:	ret

WCapitalize	ENDP
;---------------------------------------------------------------------------
.CAPS  PROC	Near
	cmp	AL, 'a'
	jb	.Caps1
	cmp	AL, 'z'
	ja	.Caps1
	sub	AL, 'a'-'A'
.Caps1: ret
.CAPS  ENDP
;...........................................................................
.NOCAPS	PROC	NEAR
	cmp	AL, 'A'
	jb	.NOCAPS1
	cmp	AL, 'Z'
	ja	.NOCAPS1
	add	AL, 'a'-'A'
.NoCaps1:
	ret
.NoCAPS	ENDP

;---------------------------------------------------------------------------
WBackWard	PROC	NEAR

	call	.?WBackWard
	cmp	BX, 0
	je	WBErr
	mov	DS:BCB.FCursor, BX
	ret

WBErr:  mov	SI, Offset $Error1
	mov	CX, 17
	jmp	.Error0

WBackward	ENDP

;...........................................................................
WForward	PROC	Near

	call	.?WForward
	cmp	BX, 0
	je	WFErr
	mov	DS:BCB.FCursor, BX
	ret

WFErr:  mov	SI, Offset $Error2
	mov	CX, 16
	jmp	.Error0

WForward	ENDP

;...........................................................................
MRubWord	PROC	Near

	call	.?WBackWard
	cmp	BX, 0
	je	MRubWErr
	mov	SI, BX
	mov	CX, DS:BCB.FCursor
	sub	CX, BX
	mov	DS:BCB.FCursor, SI
	call	CYSave
	jmp	CDelK

MRubWErr:
	mov	SI, Offset $Error1
	mov	CX, 16
	jmp	.Error0

MRubWord	ENDP

;...........................................................................
MDelWord	PROC	Near
	call	.?WForWard
	cmp	BX, 0
	je	MDelWErr
	mov	SI, DS:BCB.FCursor
	mov	CX, BX
	sub	CX, SI

	call	CYSave
	jmp	CDelK

MDelWErr:
	mov	SI, Offset $Error2
	mov	CX, 16
	jmp	.Error0

MDelWord	ENDP
;---------------------------------------------------------------------------
; BUGGY !!!
;CPScreen	PROC	NEAR

	mov	BX, DS:BCB.ScrStart
	mov	AH, 79
	mov	AL, 20
CPLoop1:
	cmp	Byte Ptr [BX], LF
	je	CPPhysical
	cmp	AH, 0
	je	CPPhysical
	cmp	BX, 100h
	je	CPErr
	dec	BX
	dec	AH
	jmp	CPLoop1

CPPhysical:					; now we are on the physical
	dec	AL				; and logical line, but still
	jz	CPPhysicalFound			; have to find the filestart
	mov	AH, 79
	cmp	Byte Ptr [BX], LF
	jne	CPLoop1
	dec	BX
	jmp	CPLoop1

CPPhysicalFound:				; this can probably be improvd
	cmp	Byte Ptr ds:[bx], LF
	jne	CPPhysicl0
	dec	bx
CPPhysicl0:
	mov	AL, 0
	mov	AH, 1
CPLoop2:
	dec	BX
	cmp	BX, 100h
	jbe	CPStartFound
	cmp	Byte Ptr [BX], LF
	je	CPStartFound
	inc	AL
	cmp	AL, 79
	jne	CPLoop2

	add	AH, 79
	mov	AL, 0
	jmp	CPLoop2

CPStartFound:
	cmp	BX, 100h
	ja	CPLoop3
	mov	BX, 100h
	jmp	CPEnd

CPLoop3:
	inc	BX
	dec	AH
	je	CPEnd
	jmp	CPLoop3

CPEnd:
	mov	DS:BCB.ScrStart, BX
	mov	DS:BCB.FCursor, BX
	ret

CPErrT  db	'>>>Incomplete ESC-V<<<'

CPErr:
	mov	DS:BCB.ScrStart, BX
	mov	DS:BCB.FCursor, BX
	mov	SI, Offset CPErrT
	mov	CX, 22
	jmp	.Error1


;CPScreen	ENDP

;---------------------------------------------------------------------------
.?WForward	PROC	Near

	mov	BX, DS:BCB.FCursor
	mov	DX, DS:BCB.FEnd
	dec	BX			; initialize

; find space character
.?WFL1:	cmp	BX, DX
	jae	.?WForwardErr
	inc	BX
	mov	AL, DS:[BX]
	cmp	AL, LF
	je	.?WFL2
	cmp	AL, CR
	je	.?WFL2
	cmp	AL, ' '
	je	.?WFL2
	cmp	AL, TAB
	je	.?WFL2
	jmp	.?WFL1

; find non space
.?WFL2:	cmp	BX, DX		  ; FEnd
	jae	.?WFL2Ex
	inc	BX
	mov	AL, DS:[BX]
	cmp	AL, LF
	je	.?WFL2
	cmp	AL, ' '
	je	.?WFL2
	cmp	AL, CR
	je	.?WFL2
	cmp	AL, TAB
	je	.?WFL2

.?WFL2Ex:ret		; BX points to first character of next word

.?WForwardErr:
	mov	BX, 0		; Error indicator
	ret

.?WForward	ENDP

;---------------------------------------------------------------------------
Comment %
	Back (1)
	if space then
			Back (nonspace)
			Back (space)
			Forward (1)
		 else
			Back (space)
			Forward (1)
	END
%

.?WBackward	PROC	Near

	mov	BX, DS:BCB.FCursor
	cmp	BX, 100h
	jbe	.?WBackwardErr
	dec	BX
	mov	AL, DS:[BX]
	cmp	AL, CR
	je	.?WSP
	cmp	AL, ' '
	je	.?WSP
	cmp	AL, TAB
	je	.?WSP
	cmp	AL, LF
	je	.?WSP
.?WBMerge:
	cmp	BX, 100h
	jb	.?WBM1
	dec	BX
	mov	AL, DS:[BX]
	cmp	AL, CR
	je	.?WBM1
	cmp	AL, LF
	je	.?WBM1
	cmp	AL, ' '
	je	.?WBM1
	cmp	AL, TAB
	je	.?WBM1
	jmp	.?WBMerge

.?WBM1: inc	BX
	ret
.?WBackwardErr:
	mov	BX, 0
	ret

.?WSP:  cmp	BX, 100h
	jb	.?WBMerge
	dec	BX
	mov	AL, DS:[BX]
	cmp	AL, CR
	je	.?WSP
	cmp	AL, LF
	je	.?WSP
	cmp	AL, ' '
	je	.?WSP
	cmp	AL, TAB
	je	.?WSP
	jmp	.?WBMerge

.?WBackward	ENDP

;---------------------------------------------------------------------------

FillParagraph	PROC	Near
	mov	DS:BCB.Dirty, TRUE
	call	.FindLastParagraph		; fills PStart
	call	.FindEndParagraph		; fills PEnd
	call	.FillBetween			; fills the text
	ret
FillParagraph	ENDP

;---------------------------------------------------------------------------
.FindlastParagraph	PROC	Near
	mov	BX, DS:BCB.FCursor

Findit:	cmp	BX, 100h
	jbe	FoundlastParagraph

	cmp	Word Ptr DS:[BX-2], CRLF
	je	FoundLineStart
Findit2:
	dec	BX
	jmp	Findit

FoundLineStart:
	cmp	Word Ptr DS:[BX-4], CRLF
	jne	Findit2

FoundLastParagraph:
	mov	CS:PStart, BX
	ret
.FindLastParagraph	ENDP

;...........................................................................
.FindEndParagraph	PROC	Near
	mov	BX, CS:PStart

FindE:	cmp	BX, DS:BCB.FEnd
	jae	FoundEndParagraph

	cmp	Word Ptr DS:[BX], CRLF
	je	FoundLineStart2
FindE2:
	inc	BX
	jmp	FindE

FoundLineStart2:
	cmp	Word Ptr DS:[BX+2], CRLF
	jne	FindE2

FoundEndParagraph:
	mov	CS:PEnd, BX
	ret
.FindEndParagraph	ENDP

;---------------------------------------------------------------------------
.FillBetween	PROC	NEAR
	mov	BX, CS:PStart
	mov	DX, CS:PEnd		; where fill stops

F0:	cmp	BX, CS:Pend
	jae	EndFillBetween
	cmp	Word Ptr DS:[BX], CRLF
	jne	F1
	call	DeleteCRLF
F1:	call	GetColumn
	cmp	CX, CS:FillColumn
	jae	BreakLine
	inc	BX
	jmp	F0

EndFillBetween:
	ret

;--------
BreakLine:
RetreatToWord:
	mov	AL, DS:[BX]		; first go back until you find a
	cmp	AL, ' '			; Space
	je	AtSpace
	cmp	AL, TAB
	je	AtSpace
	cmp	AL, LF
	je	RTWErr
	dec	BX
	jmp	RetreatToWord

AtSpace:
					; now we are on one space in front of
					; a word
	push	DS:BCB.FCursor
	mov	DS:BCB.FCursor, BX	; allow the extra LF
	mov	CX, 1
	call	.MakeSpace
	pop	DS:BCB.FCursor
	mov	Word Ptr DS:[BX], CRLF
	cmp	BX, DS:BCB.FCursor
	ja	BLE
	inc	DS:BCB.FCursor
BLE:	inc	CS:Pend
	add	BX, 2
	jmp	F0

RTWErr:	mov	SI, Offset Confusedbreak
	mov	CX, 26
	jmp	.Error0
;...........................................................................
DeleteCRLF:
	cmp	BX, DS:BCB.FCursor
	jae	DCRLF1
	dec	DS:BCB.FCursor			; adjust the cursor
DCRLF1:	mov	SI, BX
	mov	CX, 1
	call	CDELK				; and delete 2 characters
	mov	Byte Ptr DS:[BX], ' '
	dec	CS:Pend				; adjust end of fill
	ret
;...........................................................................
.FillBetween	ENDP


;...........................................................................
GetColumn	PROC	NEAR
; on entry BX points to a character on a line. On Exit, CX holds the column
; on which BX is.

	push	DX
	mov	DX, BX			; remember where we started

GC1:	dec	BX			; first retreat to the CRLF
	cmp	Byte Ptr DS:[BX], LF
	je	GC2
	cmp	BX, 0FFh
	je	GC2
	jmp	GC1

;-------
GC2:	mov	CX, 1			; Column 1, Character 1 on line
	inc	BX


GC3:	cmp	BX, DX
	je	GCQ			; if we reach the cursor, we are fine

	cmp	Byte Ptr DS:[BX], TAB
	jne	GC4

	push	DX			; CX:= CX+(8- [(CX-1) mod 8])
	push	CX
	dec	CX			; CX:=CX-1
	and	CX, 111b		; CX:=CX mod 8
	mov	DX, 8			; DX:= 8-CX
	sub	DX, CX
	pop	CX
	add	CX, DX			; CX:=CX+DX
	pop	DX

	dec	CX
GC4:	inc	CX				; TAB = 8, Char = 1
	inc	BX
	jmp	GC3

GCQ:	pop	DX
	ret

GetColumn	ENDP

Program	ENDS
	END

```
{% endraw %}

## ESCXC.ASM

{% raw %}
```
PUBLIC	Extended_Character, Wrapmode

EXTRN	.CAPS:Near, .Error0:Near, .Msg:Near, .Makespace:near, CDELK:Near
EXTRN	.CLRMsg:Near, .Screen:NEAR, FMODELINE:Near, .InCH:NEAR
EXTRN	Sound:Near, .OUTSTR:NEAR

EXTRN	NoModeline:BYTE, LastLineUpdate:Near, LastLastLine:Word

;---------------------------------------------------------------------------
	page	,132
NAME ESCX

TITLE extended commands ESC-X

IF2
       %OUT *Pass 2*
ENDIF

INCLUDE        FDEF.DEF

Program        SEGMENT PARA    PUBLIC  'code'
       ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

;-------------------------------------------------------------------------
CaseReplace	db	TRUE
QUERY		db	TRUE
Toggling	db	'[Toggling Wrap Mode]'
LastSearchStart	dw	100h
Confirmswitch	db	'Skip=<BS>   Replace=<SPACE>  Abort=<CTL-G>'
AbortedReplace	db	'*** User Abort ***'
ExitCharacter	db	CR
Cursor		equ	lowintensity*256+178


$Free	=	(Offset MXInvalid)

MXJTable	dw	$Free	; ^@
dw	$Free		; ^A
dw	$Free		; ^B
dw	$Free		; ^C
dw	$Free		; ^D
dw	$Free		; ^E
dw	$Free		; ^F
dw	$Free		; ^G
dw	$Free		; ^H
dw	$Free		; ^I
dw	$Free		; ^J
dw	$Free		; ^K
dw	$Free		; ^L
dw	$Free		; ^M
dw	$Free		; ^N
dw	$Free		; ^O
dw	$Free		; ^P
dw	$Free		; ^Q
dw	$Free		; ^R
dw	$Free		; ^S
dw	$Free		; ^T
dw	$Free		; ^U
dw	$Free		; ^V
dw	$Free		; ^W
dw	$Free		; ^X
dw	$Free		; ^Y
dw	$Free		; ^Z
dw	$Free		; ^[
dw	$Free		; ^\
dw	$Free		; ^]
dw	$Free		; ^^
dw	$Free		; ^_
dw	$Free		; ' '
dw	$Free		; !
dw	$Free		; "
dw	$Free		; #
dw	$Free		; $
dw	$Free		; %
dw	$Free		; &
dw	$Free		; `
dw	$Free		; (
dw	$Free		; )
dw	$Free		; *
dw	$Free		; +
dw	$Free		; `
dw	$Free		; -
dw	$Free		; .
dw	$Free		; \
dw	$Free		; 0
dw	$Free		; 1
dw	$Free		; 2
dw	$Free		; 3
dw	$Free		; 4
dw	$Free		; 5
dw	$Free		; 6
dw	$Free		; 7
dw	$Free		; 8
dw	$Free		; 9
dw	$Free		; :
dw	$Free		; ;
dw	$Free		; <
dw	$Free		; =
dw	$Free		; >
dw	$Free		; ?
dw	$Free		; @
dw	$Free		; A
dw	$Free		; B
dw	$Free		; C
dw	$Free		; D
dw	$Free		; E
dw	$Free		; F
dw	$Free		; G
dw	$Free		; H
dw	$Free		; I
dw	$Free		; J
dw	$Free		; K
dw	$Free		; L
dw	Offset ToggleLastLine		; M
dw	$Free		; N
dw	$Free		; O
dw	$Free		; P
dw	Offset QuerySearchReplace	; Q
dw	$Free		; R
dw	Offset SearchReplace		; S
dw	$Free		; T
dw	$Free		; U
dw	$Free		; V
dw	Offset ToggleWrapmode		; W
dw	$Free		; X
dw	$Free		; Y
dw	$Free		; Z
dw	$Free		; [
dw	$Free		; \
dw	$Free		; ]
dw	$Free		; ^
dw	$Free		; _
dw	$Free		; '
					; lowercase trapped

MXInvalidT0	db	'*** ESC-X '
MXInvalidT1	db	'? unknown ***'
$Error1         db      '*** FileStart ***'
$Error2         db      '*** FileEnd ***'


;---------------------------------------------------------------------------
Extended_Character	PROC	Near

	call	.CAPS

	cmp	AL, 'z'
	ja	MXInvalid
	
MxParse:xor	AH, AH			; clear insignificant
	add	AX, AX			; dw index
	mov	BX, AX			; get the index
	jmp	CS:MXJTable [BX]	; and jump

MXInvalid:
	mov	CS:MXInvalidT1, AL
        mov     SI, Offset MXInvalidT0
        mov     CX, 23
        jmp     .Error0

Extended_Character  ENDP

;---------------------------------------------------------------------------
ToggleWrapmode	PROC	Near

	xor	DS:BCB.EDMode, Wrapmode
	mov	SI, Offset Toggling
	mov	CX, 20
	jmp	.Msg

ToggleWrapmode	ENDP
;---------------------------------------------------------------------------


;---------------------------------------------------------------------------
; Search and Replace
Skip	equ	8
String1	db	80 dup ('?')
STRLEN1	dw	0
String2	db	80 dup ('?')
STRLEN2	dw	0
StringLength	equ	79
SeaMsg	db	'Replace string <CR>:'
QSeaMsg	db	'Query Replace string <CR>:'
RepMsg	db	'with string <CR>:'
DoneMsg	db	'[Done]'

;---------------------------------------------------------------------------
ToggleLastLine	PROC	NEAR
	xor	CS:Nomodeline, Toggle
	mov	SI, CS:LastLastLine
	call	LastLineupdate
	ret
ToggleLastLine	ENDP
;---------------------------------------------------------------------------
QuerySearchReplace	PROC	Near
	mov	CS:Query, TRUE

	call	.CLRMsg
	mov	SI, Offset QSeaMsg
	mov	CX, 26

	call	.SRPL
	ret
QuerySearchReplace	ENDP
;---------------------------------------------------------------------------
SearchReplace	PROC	NEAR
	mov	CS:Query, FALSE

	call	.CLRMsg
	mov	SI, Offset SeaMsg
	mov	CX, 20

	call	.SRPL
	ret
SearchReplace	ENDP

;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
.SRPL	PROC	NEAR

	call	.Msg

	mov	SI, CX			; now calculate the screen message
	add	SI, SI
	add	SI, StartofMsgField
	mov	DI, Offset String1	; load to string 1
	mov	DL, CR			; and end everything with a CR
	call	.GetMsg			; result in String1, CX: # of chars

	cmp	CX, 0
	jne	Continue1
	jmp	AbortReplace
Continue1:
	mov	CS:STRLEN1, CX
	cmp	CS:CaseReplace, TRUE
	jne	LeaveCase

	mov	SI, Offset String1
Changecase:
	mov	AL, CS:[SI]
	call	.CAPS
	mov	CS:[SI], AL
	inc	SI
	loop	Changecase
leavecase:
	call	.CLRMsg
	mov	SI, Offset RepMsg
	mov	CX, 17
	call	.Msg

	mov	SI, CX			; now calculate the screen message
	add	SI, SI
	add	SI, StartofMsgField
	mov	DI, Offset String2	; load to string 1
	mov	DL, CR			; and end everything with a CR
	call	.GetMsg			; result in String1, CX: # of chars

	push	DS:BCB.FCursor

	mov	CS:STRLEN2, CX
	mov	SI, DS:BCB.FCursor
	mov	CS:LastSearchStart, SI
SRLoop:	call	SearchforStr1
	cmp	SI, 0
	je	NotFound
	call	AskforAction
	cmp	AL, Skip
	je	SRLoop

	call	Replace1with2
	jmp	SRLoop
NotFound:
	pop	DS:BCB.FCursor
	call	.CLRMsg
	call	Sound
	mov	SI, Offset DoneMsg
	mov	CX, 6
	jmp	.Msg

.SRPL	ENDP
;---------------------------------------------------------------------------
SearchforStr1	PROC	NEAR
	mov	SI, CS:LastSearchStart
	mov	DX, CS:STRLEN1
	call	.Find
	mov	CS:LastSearchStart, SI
	inc	CS:LastSearchStart
	ret
SearchforStr1	ENDP
;---------------------------------------------------------------------------
AbortReplace:
	mov	SI, Offset AbortedReplace
	mov	CX, 18
	jmp	.Error0


AskforAction	PROC	NEAR
	cmp	CS:QUERY, TRUE
	je	AskComplicated
	push	SI
	mov	DS:BCB.FCursor, SI
	pop	SI
	mov	AL, ' '
	ret
AskComplicated:
				; here check whether question necessary
	push	SI
	add	SI, CS:STRLEN1
	mov	DS:BCB.FCursor, SI

	call	.Screen		; maybe put all into inverse

	push	DS:BCB.ScrCursor

	mov	SI, CS:STRLEN1
	sub	DS:BCB.FCursor, SI

	call	.Screen

	pop	SI		; get the start of the to be replaced word

	mov	BX, DS:BCB.ScrCursor
RedoPaint:
	cmp	BX, SI
	jae	FinishedPaint
	mov	Byte Ptr ES:[BX+1], modelinecolor
	inc	BX
	inc	BX
	jmp	RedoPaint

FinishedPaint:
	call	FModeline

	call	.CLRMsg
	mov	SI, Offset ConfirmSwitch
	mov	CX, 42
	call	.Msg

AA1:	call	.Inch
	jz	AA1

	cmp	AL, CTL_G
	je	Abortreplace

	cmp	AL, ' '
	je	OKret

	cmp	AL, Skip
	je	OKret

	call	Sound
	jmp	AA1

OKret:	pop	SI
	ret

AskforAction	ENDP

;---------------------------------------------------------------------------
Replace1with2	PROC	NEAR
	mov	AX, DS
	mov	ES, AX
	mov	CX, CS:StrLen1

	call	CDELK			; killed string 1

	mov	AX, CS
	mov	ES, AX
	push	SI
	mov	SI, Offset String2
	mov	CX, CS:StrLen2
	call	.OutStr
	pop	SI
	ret

Replace1with2	ENDP
;---------------------------------------------------------------------------
Wildcard	EQU	10	; ^J
.FIND	PROC	Near
; SI -> Start of Search	DX  -> # characters in Searchbuffer

	dec	SI
.FNew:  xor	BX, BX  ; last try unsuccessful, try one character further
	mov	DI, Offset String1
	inc	SI
.FMay:  cmp	SI, DS:BCB.FEnd  ; all characters so far match
	jae	.FErr
	mov	AH, CS:[DI+BX]
	cmp	AH, Wildcard
	je	.F1Mat
	mov	AL, DS:[SI+BX]
	call	.CAPS
	cmp	AL, AH
	jne	.FNew
.F1Mat: inc	BX		; one character matches
	cmp	BX, DX
	jb	.FMay

.FFound:mov	AH, 0
	ret
.FErr:  mov	AH, 0FFh
	sub	SI, SI
	ret

.Find	ENDP

;...........................................................................
; DI holds where the message shall go

.GetMsg	PROC	NEAR
	xor	BX, BX			; 0 characters received
	mov	CS:Exitcharacter, DL

.TextLoop:
	mov	AX, Cursor		; set the cursor
	mov	ES:[SI+BX], AX


.Text0:	call	.InCh
	jz	.Text0

	cmp	AL, CS:Exitcharacter	; if we have an end character
	je	.TextEnd
	cmp	AL, 21			; if we wish to retry = C-U
	je	.TextRedo
	cmp	AL, 7			; if we wish to quit = C-G
	je	.TextQuit
	cmp	AL, 8			; if we wish to backspace
	je	.TextDel

.TextChar:				; if we just wish to add a char
	cmp	BX, StringLength
	jae	FailLength

	mov	CS:[BX+DI], AL

	mov	AH, lowintensity	; put it to screen
	mov	ES:[BX+SI], AX

	inc	BX			; next character.
	inc	SI			; advance the screen by one extra.

	jmp	.TextLoop
FailLength:
	call	Sound
	jmp	.TextLoop
;...........................................................................
.TextRedo:	
	cmp	BX, 0				; are there 0 chars ?
	je	.TextLoop
	mov	AX, ' '+lowintensity*256	; no, then clear from scr
	mov	ES:[BX+SI], AX
	dec	BX				; one less char to clear
	dec	SI				; but adjust for scr *2
	jmp	.TextRedo

;...........................................................................
.TextQuit:
	call	.CLRMsg
	xor	BX, BX
	mov	SI, Offset AbortedReplace
	mov	CX, 18
	jmp	.Error0

;...........................................................................
.TextEnd:
	mov	CX, BX
	ret
;...........................................................................

.Textdel:
	cmp	BX, 0				; if there are 0 chars...
	je	.TextDelErr
	mov	AX, ' '+lowintensity*256	; clear the cursor
	mov	ES:[BX+SI], AX
	dec	SI				; adjust to point to
	dec	BX				; previous character
	jmp	.TextLoop

.TextDelErr:
	call	Sound
	jmp	.Text0				; do nothing
.GetMsg	ENDP



;---------------------------------------------------------------------------
	PROGRAM	ENDS
END
```
{% endraw %}

## FILES563.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No  563  MAX - Freeware Editor                                  v2
------------------------------------------------------------------------
MAX is a freeware editor that is a clone of the popular EMACS editor. It is
fast and has powerful text editing features and in some areas clones the
SCRIBE text formatter. The source code is also provided in the MAX\SOURCE
directory.
 
 
--- ROOT DIRECTORY ---
max          <dir>
ABSTRACT      Brief description of MAX's capabilities
FILES         Brief description of files on disk
START         Brief description how to start
WELCOME       Description of agreement, installation, documentation
AUTOEXEC BAT  Starts the introduction
 
--- MAX SUB-DIRECTORY ---
source       <dir>
doc          <dir>
MONO     BIN  The monochrome MAX editor
COLOR    BIN  The color MAX editor
 
--- SOURCE SUB-DIRECTORY (UNDER MAX) ---
MAKEFILE      An assembler/linker control file
ALLOCATE ASM  Assembler source of buffer allocation
CTRLC    ASM  Assembler source of control functions
CTRLXC   ASM  Assembler source of control-x functions
DOSFILES ASM  Assembler source of file handling
ESCC     ASM  Assembler source of escape functions
ESCXC    ASM  Assembler source of escape-x functions
HELP     ASM  Assembler source of help facility
LAST     ASM  Assembler source of locate last symbol of code
MAIN     ASM  Assembler source of start and initialize MAX
MODELINE ASM  Assembler source of display the modeline (menu)
MORESCRE ASM  Assembler source of some more screen routines
PARSE    ASM  Assembler source of filename escape completion
SCREEN   ASM  Assembler source of screen updating
SEARCH   ASM  Assembler source of incremental and replace-searches
WINDOWS  ASM  Assembler source of window and buffer handling
COLOR    DEF  Assembler color adapter definition globals
MONO     DEF  Assembler monochrome adapter definition globals
 
--- DOCUMENTATION SUB-DIRECTORY (UNDER MAX) ---
CONTRACT      The basic contract
FIXES         What changed from the previous version 1.01
MAX      HLP  The MAX help file
MAX-REF  DOC  The MAX reference: formatted
MAX-REF  MSS  The MAX reference: unformatted
TUTORIAL TXT  The MAX tutorial text
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1986,1987 PC-SIG
```
{% endraw %}

## HELP.ASM

{% raw %}
```
PUBLIC  FHelp

EXTRN	LastLabel:Near
EXTRN	.Screen:Near, .Error0:Near, .InCH:Near, Sound:near, .Msg:Near
EXTRN	Separatorline:Near
EXTRN	.CLRMsg:Near
EXTRN	Switchmenu:Near

;---------------------------------------------------------------------------
	; This module executes the HELP interpreter. It reads in the file
	; MAX.HLP, and executes the user-typed commands. It only uses
	; standard DOS and BIOS calls for Keyboard, Diskette and Screen Access

Title Help Facility

program segment	 para	public	'code'
	assume  cs:program, ds:program, es:program, ss:program

;---------------------------------------------------------------------------
	INCLUDE		FDEF.DEF

	readonly	equ	0	; MSDOS call numbers
	fileopen	equ	3dh
	fileread	equ	3fh
	fileclose	equ	3eh
	msdos		equ	21h

	backspace	equ	8	; options other than  numbers
	exit1		equ	1Bh	; quit via ESC, SPACE or CTL-G
	exit2		equ	' '
	exit3		equ	7

	cursor	macro	x, y		; SCREEN macro: moves the cursor
		mov	dh, x		; to location x, y
		mov	dl, y
		mov	ah, 2
		mov	bh, 0
		int	10h
	endm

	cls	macro			; SCREEN
		mov	cx, 0		; clears the screen
		mov	dx, 184fh
		mov	bh, 7
		mov	ax, 600h
		int 10h
	endm

numberofoptions	db	0
optionaddresses	dw	8 dup (0)
helpindex	dw	0
helpfilehandle	dw	0
helpsaveds	dw	0
Strange		db	'*** File Disappeared ***'

Returnstackptr	dw	Offset Returnstack
ReturnStack	dw	20 dup (2)

;***************************************************************************
fhelp	proc	near

	cursor	0, 0

	mov	ax, screensegment
	mov	es, ax

	mov	cs:helpsaveds, ds
	call	helpinit		; this will open the file

	call	.help			; while this will do all the help

	call	helpexit		; close the file
	mov	ds, cs:helpsaveds
	ret


fhelp	endP

;***************************************************************************
HFile	db	ordinary_help, 00	; first search on connected
HHFile	db	default_help , 0	; default location if not found

HelpInit	PROC	Near

	push	CS			; initialize the segment
	pop	DS			; operations to take place in CS

	call	HFOpen
	ret

;...........................................................................
HFOpen	PROC	Near
	mov	DX, Offset HFile	; now open the file
	mov	AL, Readonly
	mov	AH, FileOpen
	int	MSDOS
	jnc	HI1
		cmp	AX, 2		; error
		je	Filenotfound
		jmp	DOSERROR
Filenotfound:	mov	DX, Offset HHFile ; try again with default drive
		mov	AL, ReadOnly
		mov	AH, FileOpen
		int	MSDOS
		jnc	HI1
		jmp	DOSERROR

HI1:	mov	CS:HelpFileHandle, AX	; save the filehandle
	ret

DOSconfused	db	'*** Can not open MAX.HLP ***'
DOSError:
	mov	DS, CS:HelpSaveDS
	mov	SI, Offset DOSConfused
	mov	CX, 28
	jmp	.Error0

HFOpen	ENDP

HelpInit	ENDP
;***************************************************************************
.HELP	PROC	Near

	mov	BX, CS:HelpFileHandle	; filehandle
	mov	DX, CS:Helpindex

	call	HSeek			; load it from
	call	HLoad			; our disk

	call	MemSeek			; look for the first 00 00
	cls
	call	HHeader			; get the nodename
	Cursor	3, 0
	call	HScreen			; print the help screen
	call	HOptions		; output the options

ComWait:call	.InCH			; wait for a character to be pressed
	jz	ComWait

	cmp	AL, Exit1
	je	.HelpExit
	cmp	AL, Exit2
	je	.HelpExit
	cmp	AL, Exit3
	je	.HelpExit
	cmp	AL, Backspace
	je	Stackret

	sub	AL, '1'
	cmp	AL, CS:NumberofOptions
	jb	CW1
	call	Sound
	jmp	Comwait

CW1:	xor	AH, AH
	add	AL, AL
	mov	BX, AX
	mov	AX, CS:Optionaddresses[BX]

	mov	DI, CS:ReturnStackPtr	; push Nodename
	push	AX
	mov	AX, CS:Helpindex
	mov	CS:[DI], AX
	pop	AX
	add	DI, 2
	mov	CS:ReturnStackPtr, DI

	mov	CS:Helpindex, AX
	jmp	.Help
.HelpExit:
	mov	ax, 7*256+0		; reinitialize last line
	call	Switchmenu
	call	.CLRMsg			; clear msg area
	jmp	Separatorline		; and rebuild separatorline

Stackret:
	mov	DI, CS:ReturnStackPtr
	sub	DI, 2
	mov	CS:ReturnStackPtr, DI		; pop Nodename

	cmp	DI, Offset ReturnStack		; underflow
	jb	.HelpExit

	mov	AX, CS:[DI]
	mov	CS:Helpindex, AX
	jmp	.Help
	
;...........................................................................
HSeek	PROC	Near
	sub	CX, CX
	mov	AL, 0
	mov	AH, 42h
	int	MSDOS
	ret
HSeek	ENDP

;...........................................................................
HLoad	PROC	Near
	mov	DX, Offset LastLabel	; make it easy
	mov	CX, 2150		; can find it within 2000 bytes
	mov	AH, 3Fh			; and load it
	int	MSDOS
	ret
HLoad	ENDP

.Help	ENDP
;---------------------------------------------------------------------------

Memseek	PROC	Near
	mov	AL, NUL
	mov	SI, (Offset LastLabel)-1
	mov	CX, 2150

MSLoop:	inc	SI
	cmp	Byte Ptr CS:[SI], Newpage
	loopne	MSLoop
	inc	SI				; step over the ^L
	ret

Memseek	ENDP
;---------------------------------------------------------------------------
HHeader	PROC	Near
	cmp	Byte Ptr CS:[SI], NUL
	jnz	HH1
	mov	SI, Offset Strange
	mov	CX, 24
	call	.Msg
	call	Sound
	jmp	HelpExit
HH1:	mov	DI, 2*(160+25)

HHL:	mov	AL, CS:[SI]		; take a character from nodename
	cmp	AL, NUL
	je	EndOfName
	inc	SI
	mov	AH, modelinecolor	; and put it to the screen
	mov	ES:[DI], AX
	add	DI, 2
	jmp	HHL
EndofName:
	ret
HHeader	ENDP
;---------------------------------------------------------------------------
HScreen	PROC	Near
	mov	DX, SI			; output the node
	mov	AH, 9
	int	MSDOS

HS1:	mov	DL, CS:[SI]		; now search for the end of the text
	inc	SI
	cmp	DL, '$'
	jne	HS1
	ret
HScreen	ENDP
;---------------------------------------------------------------------------
HOptions	PROC	NEAR
	cmp	Byte Ptr DS:[SI], NUL
	je	NoOptions

	mov	DI, 23*160		; put it to screen
	cursor	24, 0

	mov	BX, Offset OptionAddresses
	mov	DX, 0

Nextoption:
	inc	DX			; BX incremented in addresspreserve
	call	AddressPreserve
	call	ChoicePrint
	call	OptPrint
	cmp	Byte Ptr DS:[SI], NUL	; a double NUL ends everything
	jne	Nextoption
	mov	CS:NumberofOptions, DL
	ret
Nooptions:
	mov	CS:NumberofOptions, 0
	ret

;...........................................................................
AddressPreserve	PROC	Near

	push	CX
	mov	AL, CS:[SI]		; calculate first 8 bit
	inc	SI
	call	Get16
	mov	CH, AL

	mov	AL, CS:[SI]
	inc	SI
	call	Get8
	add	CH, AL

	mov	AL, CS:[SI]
	inc	SI
	call	Get16
	mov	CL, AL

	mov	AL, CS:[SI]
	inc	SI
	call	Get8
	add	CL, AL

	mov	CS:[BX], CX
	add	BX, 2
	pop	CX
	ret

Get8	PROC	Near		; convert an ASCII to the less significant
	cmp	AL, 'A'		; 4 bits of the AL register
	jae	Get8Ch
	sub	AL, '0'		; '0' -> 0
	ret
Get8Ch:	sub	AL, 'A'-10	; 'A' -> A
	ret
Get8	ENDP

Get16	PROC	Near
	call	Get8		; put the number as a lower 8 bit
	shl	AL, 1		; and put it to the higher one
	shl	AL, 1
	shl	AL, 1
	shl	AL, 1
	ret
Get16	ENDP
AddressPreserve	ENDP	

ChoicePrint	PROC	Near
	mov	Word Ptr ES:[DI], 20
	add	DI, 2
	mov	Word Ptr ES:[DI], 'F'+modelinecolor*256
	add	DI, 2
	mov	DH, modelinecolor
	add	DL, '0'
	mov	Word Ptr ES:[DI], DX	; the number of the function
	sub	DL, '0'
	add	DI, 2
	mov	Word Ptr ES:[DI], '='+modelinecolor*256
	add	DI, 2
	ret
ChoicePrint	ENDP

OptPrint	PROC	NEAR
	mov	AL, CS:[SI]
	inc	SI
	cmp	AL, 0
	je	EndOption
	mov	AH, nocolor
	mov	ES:[DI], AX
	add	DI, 2
	jmp	OptPrint
EndOption:
	ret

OptPrint	ENDP

HOptions	ENDP

HelpExit	PROC	Near
	mov	BX, CS:HelpFileHandle
	mov	AH, FileClose
	int	MSDOS
	mov	CS:HelpIndex, 0
	mov	DI, 23*160
	mov	AX, nocolor*256+' '
	mov	CX, 79
	rep	stosw
	mov	CS:ReturnStackPtr, Offset ReturnStack	; to reenter for DEL
	ret
HelpExit	ENDP

	PROGRAM	ENDS
END


```
{% endraw %}

## LAST.ASM

{% raw %}
```
Public LastLabel

EXTRN	.Error0:Near
;---------------------------------------------------------------------------
PROGRAM SEGMENT Para    PUBLIC  'Code'
	Assume	CS:Program, DS:Program

LastLabel:	mov	CX, 10
		jmp	.Error0
PROGRAM ENDS
	END
```
{% endraw %}

## MAIN.ASM

{% raw %}
```
PUBLIC	.SCREEN
PUBLIC  .InCh, .OutCh, .OutStr, .Piss, .?Col, CRUBOUT
PUBLIC  .Error0, .Error1, Sound
PUBLIC  $History, $KBufPtr, $KBufStart, $KBufEnd, .Makespace, MainScreenDraw
PUBLIC	MainCommand

EXTRN	FSCREEN:NEAR, FPARSE:NEAR, FMODELINE:NEAR
EXTRN	CCENTER:NEAR, .MSG:NEAR
EXTRN	ESCAPE_CHARACTER:NEAR, EXTENDED_CHARACTER:NEAR
EXTRN	CTRL_X_SEQUENCE:NEAR, CTRL_CHARACTER:NEAR, FVINIT:NEAR
EXTRN	CDELK:NEAR, $REPEAT:WORD, .CLRMsg:Near, $NoUpdate:Word
EXTRN	CBACK:NEAR, WindowStart:Word, WindowEnd:Word, GetColumn:Near
EXTRN	LastLineUpdate:NEAR, LASTLASTLine:WORD, .InvMsg:Near
EXTRN	SwitchMenu:Near

EXTRN	MACPtr:Word, MacCtr:Byte, MacBack:Byte, MacArg:Word
EXTRN	MacroDefinition:Byte, MacroInvocation:Byte, Store:Byte

EXTRN	LastLabel:Near

EXTRN	$StackInit:WORD, Alloc:NEAR

;---------------------------------------------------------------------------
	;	MAX
	;
	;	This is the main routine calling all other routines. Some
	;	remarks at the end of this file

PROGRAM SEGMENT Para	PUBLIC  'Code'
	Org 100h

;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
%Out	Definitions

	INCLUDE		FDEF.DEF

if	mono
	noflicker = false
endif

	Autotype	equ	70	; 70 characters maximum can be typed
					; before they are all actually
					; inserted in buffer ( and not only
					; quickly to screen )

	MS_FN	MACRO	Fun
		mov	AH, Fun
		int	21h
	ENDM

	Prt	MACRO	text
		push	DX
		push	AX
		push	DS
		mov	AX, CS
		mov	DS, AX
		mov	DX, Offset text
		MS_FN	9
		pop	DS
		pop	AX
		pop	DX
	ENDM


	case	MACRO	Index, Table	;; does a near jump via an Indextable
		push	BX		;; to an 8bit Register
		push	AX
		mov	BL, Index
		sub	BH, BH
		add	BX, BX
		call	CS:[BX]. Table
		pop	AX
		pop	BX
	ENDM







;***************************************************************************
Main	PROC	Far
	ASSUME  CS:PROGRAM, DS:PROGRAM, ES:PROGRAM, SS:PROGRAM

	;**************
	jmp	MAX
	;**************

;***************************************************************************
; Data Section

Welcome	db	'		MAX   [Version 1.01], '
	db	CR, LF
	db	'		(C) 1984, Ivo Welch. All Rights Reserved.'
	db	CR, LF
	db	CR, LF, LF, LF
	db  'This software is protected by U.S. Copyright Law (Title 17 U.S. code).'
	db	CR, LF
	db  'Unauthorized reproduction and/or sales may result in imprisonment of up'
	db	CR, LF
	db  'to one year and fines of up to Dollar 10,000 (17 USC 506).'
	db	CR, LF, LF
	db  'Copyright Infringers may be subject to civil liability.'
	db	CR, LF, LF, '$'

	Copyright	db	'                                                                 [MAX, Copyright (C) Ivo Welch, 1984]'

BNoFit		db	' INSUFFICIENT MEMORY [NO BUFFER SPACE]$'
Helpcode	db	'00'

MEMsg		db	'*** Macro Invocation inside Definition ***'
MEMsg2		db	'*** Macro Overflow ***'
MacCancel	db	'*** User Abort ***'

$History	db	11 DUP (7)
$KBufptr	dw	Offset $KBufStart
$KBufStart	db	70 DUP ( '$')
$KBufEnd	db	'()'

Commandtable	dw	Offset Character
		dw	Offset Ctrl_Character
		dw	Offset Ctrl_X_Sequence
		dw	Offset Escape_Character
		dw	Offset Extended_Character



;***************************************************************************

MAX:					; initialize the SCREEN
	mov	CX, 0			; clear the screen via BIOS
	mov	dx, 184fh
	mov	bh, 7
	mov	AX, 600h
	int 10h

	mov	AH, 1			; set the cursor to block via BIOS
	mov	CH, 0
	mov	CL, 0Fh
	int	10h

	mov	AH, 2			; Cursor home
	sub	DX, DX
	mov	bh, 0
	int	10h

	mov	CX, Offset LastLabel+110h	; and so with this



	Prt	Welcome			; say Hi via DOS

	cld
	call	Alloc			; allocate buffer space
	call	FVINIT			; visit default files
					; afterwards, ES=DS=CS:$Buffer1

	mov	AH, 1			; set the cursor to block
	mov	CH, 0
	mov	CL, 0Fh
	int	10h

	mov	SI, Offset CopyRight	; display a second copyright msg
	mov	CX, 101
	call	.Msg

	mov	AX, 7*256+0		; and initialize the menu at the
	nop				; last line
	call	Switchmenu

MainScreenDraw:
		call	.Screen		; display the first screen

MainWait:
	call	FModeline		; always update modelines in spare t
	call	FParse			; chack for newly typed character
	or	AH, AH
	jz	MainWait		; none, so reupdate

MainCommand:
	dec	AH			; determine CTL-, ESC-, ESC-X or
	case	AH, CommandTable	; other such character, and call

	cmp	CS:$Repeat, 0		; and do it until the arg is 0
	jz	MainScreenDraw
	dec	CS:$Repeat
	jz	MainScreenDraw

	mov	AX, Word Ptr CS:$Repeat+2	; but reload the command
	mov	DL, Byte Ptr CS:$Repeat+4	; that was pressed
	jmp	MainCommand

Main	ENDP



;***************************************************************************
	; Subroutines

	; Character [(AL=Character) -> (*)]

Character	PROC	Near
	mov	DS:BCB.Dirty, TRUE	; buffer is modified

	cmp	AL, 127			; first check whether this is delete
	je	CRubout			; which is more like a control char.

	cmp	CS:$Repeat, 0		; if there is an argument to a char,
	jnz	CharacterArg		; call	Autowrap to put up n chars.


Charac1:call	.OutCH			; wait for more quick inserts
	mov	CX, AutoType

Charac2:call	FParse			; wait for input
	or	AH, AH
	jnz	FastTyped		; loop until you get a char or
	loop	Charac2			; until it is unlikely that he types
					; another one quickly

	call	.Piss			; finally output it
	call	.?Col			; and update the current column
	ret

Fasttyped:
	cmp	AH, 1			; if the character is not a normal
	jne	CharacterExit		; character, or if it is DEL, then
	cmp	AL, 127			; clean out the fastype buffer and
	je	CharacterExit		; execute the proper function
	 jmp	Character		; actually autowrap

CharacterExit:
	push	AX
	push	DX
	call	.Piss
	pop	DX
	pop	AX
	pop	BP		; do not return normal, since we already got
	pop	BX		; a real command, and do not simply piss and
	pop	BX		; return to main loop
	jmp	MainCommand

CharacterArg:
	mov	CX, CS:$Repeat		; make space for all to be inserted
	call	.MakeSpace

	cld				; and store a string into memory
	mov	DI, DS:BCB.FCursor
	mov	CX, CS:$Repeat
	mov	AL, Byte Ptr CS:$Repeat+4
	push	DS
	pop	ES
	rep	stosb
	mov	DS:BCB.FCursor, DI	; and readjust for the new cursor
	mov	CS:$Repeat, 0
	ret

CHaracter	ENDP

;***************************************************************************
	; %OUT CRubout [(BCB.FCursor) -> (Buffer)]
	; calls::	.Piss, CDELK, REPEATS
	; rubs out one character

CRubout PROC	NEAR

	mov	DS:BCB.Dirty, TRUE	; buffer is modified

	call	.Piss			; get rid of old stuff

	mov	SI, DS:BCB.FCursor
	cmp	SI, 100h
	je	CRuboutErr
	dec	SI
	mov	CX, 1
	cmp	Byte Ptr DS:[SI], LF
	jne	CRubout1
	dec	SI
	inc	CX
CRubout1:
	mov	DS:BCB.FCursor, SI
	call	CDELK
	cmp	CS:$Repeat, 0
	jne	CRuboutAgain
	ret
CRuboutAgain:
	dec	CS:$Repeat
	jmp	CRubout

CRuboutErrT	db	'*** File Start ***'
CRuboutErr:
	mov	SI, Offset CRuboutErrT
	mov	CX, 18
	jmp	.Error0
CRubout ENDP

;---------------------------------------------------------------------------
	; This routine calls the routine to update the screen, which
	; is called after each function is executed. It updates the
	; screen, checks whether the cursor is still inside the boundary
	; (if not, it reupdates the screen after centering around the cursor),
	; and withdraws.
	; For other PCs, this should probably not be changed, since everything
	; is in terms of symbolics screenstart and screenend etc.

	; .Screen [(BCB.ScrStart,BCB.Fcursor, BCB.ScrEnd) ->
	; %OUT	  (BCB.ScrStart,BCB.Fcursor, BCB.ScrEnd)]
	; calls FScreen, CCenter

.Screen PROC	Near

	mov	DX, CS:WindowEnd	; FScreen always requires start and
	mov	DI, CS:WindowStart	; end address of screen region, and
	mov	SI, DS:BCB.ScrStart	; the SI start of the buffer which
	call	FScreen			; shall be the first character in
					; this window

	mov	AX, DS:BCB.FCursor
	cmp	AX, DS:BCB.ScrStart	; if the cursor is above the scrstart
	jb	.Screen1
	cmp	AX, DS:BCB.ScrEnd	; or below ( which we only know after
	jae	.Screen1		; FSCREEN returns us the last char
					; that fit on screen ), reupdate
	ret

.Screen1:
	call	CCenter			; center anew

	mov	DX, CS:WindowEnd	; and reupdate screen
	mov	DI, CS:WindowStart
	mov	SI, DS:BCB.ScrStart
	call	FScreen
	ret

.Screen ENDP

;---------------------------------------------------------------------------
	; .?Col returns the column of the cursor position
	; %OUT .?Col [(BCB.FCursor) -> (BCB.FCurCol)]

.?Col  PROC	Near

	push	ES
	mov	BX, DS:BCB.FCursor
	call	GetColumn
	mov	DS:BCB.FCurCol, CX
	pop	ES
	ret

.?Col	ENDP

; <------------------------ .InCH ------------------------>

.InCH	PROC	Near
	cmp	CS:MacroInvocation, TRUE
	je	MacroChar
	call	GetChar
	jnz	.Inch0
	ret

.InCh0:	pushf
	cmp	CS:Macrodefinition, TRUE
	je	MacroDef
	popf
	ret

;...........................................................................
; we do not wait for keyboard input, but just play back our macro recording
MacroChar:
	cmp	CS:Macctr, 0			; exit on 0 characters left
	je	EndMacInv
	cmp	CS:Macrodefinition, TRUE	; error if we nest macros
	je	MacError
	mov	SI, CS:MacPtr			; take a character from the
	mov	AL, CS:[SI]			; buffer.
	mov	DL, AL				; for historic reasons
	inc	SI
	mov	CS:Macptr, SI
	dec	CS:MacCtr			; and remember the taking
	ret					; return a character

EndMacInv:
	call	GetChar				; first see whether there is
	jz	EMI2				; a ^G
	cmp	AL, 7
	jne	EMI2
		mov	SI, Offset MacCancel	; yes, so quit
		mov	CX, 18
		jmp	.Error0
EMI2:	cmp	CS:MacArg, 0			; now check whether we have
	je	EndMI				; to do the macro repeatedly
	dec	CS:MacArg			; yes, so remember we did
	mov	AL, CS:MacBack			; it once, and redo it
	mov	CS:MacCtr, AL
	mov	CS:MACptr, Offset Store
	mov	CS:MacroInvocation, TRUE
	jmp	MacroChar

EndMI:	mov	CS:MacroInvocation, FALSE	; reset the invocation
	cmp	CS:MacroInvocation, FALSE	; this will set the zero flag
	ret

MacError:
	mov	SI, Offset MEMsg
	mov	CX, 41
	jmp	.Error0
;...........................................................................
; this routine records everything that we are doing

MacroDef:
	mov	DI, CS:MacPtr
	mov	CS:[DI], AL
	inc	DI
	mov	CS:MACptr, DI
	inc	CS:MACctr
	inc	CS:MACBack
	cmp	CS:MacCtr, MacMaximum
	jae	MErr
	popf				; restore "something there"
	ret
MErr:	mov	SI, Offset MEMsg2
	mov	CX, 22
	jmp	.Error0



;...........................................................................
Getchar	PROC	NEAR
	mov	DL, 0FFh
	MS_FN	6
	jnz	.InHistory
	ret
.InHistory:
	pushf
	push	BX
	push	AX
	mov	BX, Offset $History

	mov	AX, CS:[BX+8]
	mov	CS:[BX+9], AX
	mov	AX, CS:[BX+6]
	mov	CS:[BX+7], AX
	mov	AX, CS:[BX+4]
	mov	CS:[BX+5], AX
	mov	AX, CS:[BX+2]
	mov	CS:[BX+3], AX
	mov	AX, CS:[BX]
	mov	CS:[BX+1], AX
	pop	AX
	mov	CS:[BX], AL
	pop	BX
	popf
	ret

GetChar	ENDP

.InCH	ENDP
;...........................................................................

;---------------------------------------------------------------------------
	; This routine outputs a character quickly to the screen. However, if
	; there are already too many quickly typed characters overflowing the
	; quickbuffer, it calls the routine that inserts all the quickly typed
	; characters into the real buffer.

.OutCH  PROC	Near

	push	BX
	mov	BX, CS:$KBufPtr			; always note the new char
	mov	CS:[BX], AL			; at the end of all typed
	inc	BX				; but not inserted characters
	mov	CS:$KBufPtr, BX

	cmp	CS:$KBufPtr, Offset $KBufEnd	; are there too many temporary
	jb	.OutCh0				; characters ? No
	pop	BX				; Yes, so insert all temporary
	jmp	.Piss				; typed characters into the
						; real buffer


;...........................................................................
	; SCREEN:
	;	Here are some routines that put a character at the
	;	location where the screencursor is.
	;
	; OK, we now have a recently typed character. This character sits
	; in the temporary "quick" or "fasttyped" buffer (KBUF), and DL.
	; There is not enough time to move around the possible 64K
	; that can be in the user's file to insert this one character,
	; so we just leave it in the buffer for a while, and put it to
	; the screen ( which is lots faster ). When the user stops
	; typing quickly, i.e. when we have time, .Piss will then take the
	; temporary character and insert it really into the edited file.

	; So, lets see how we put it to the screen quickly:

.OutCh0:mov	AX, Screensegment		; DL holds the character
	mov	ES, AX

	mov	BX, DS:BCB.ScrCursor		; ScrCursor holds the cursor
						; position on the screen

	mov	AH, nocolor			; The new quick char should be
	mov	AL, DL				; colorless



	; To make it look nicer, we try to guess where the actual line
	; ends, i.e. how it would look like if we had really inserted it.

.OutCh1:xchg	AX, ES:[BX]			; move all chars up to CR left
	add	BX, 2				; to make space. This makes it
	cmp	BX, 160*Textlastline-2		; look as if we really inser-
	ja	.OutCh2				; ted it 99% of the time

	cmp	AL, CR				; if we have a CR, we know
	je	.OutCh2				; the line is probably over
	cmp	AL, 1Ah				; analogous
	je	.OutCh2
	cmp	AL, LF
	je	.OutCH2
	cmp	AL, 7
	je	.OutCh2

	cmp	AX, lowintensity*256+'<'	; stop the game at the phy-
	je	.OutCH2				; sical lineend

	cmp	AX, lowintensity*256+' '
	je	.OutCH2

	cmp	AL, 9				; TABs are a problem. It looks
	je	.OutCh2				; best  to just stop insert

	cmp	AX, lowintensity*256+'!'	; This is a nice special case.
	jne	.OutCh1				; it looks good to leave the

if noflicker
		push	dx
		push	ax
		mov	dx, 3dah
	Wait:	in	al, dx
		test	al, 8
		jz	Wait
		pop	ax
		pop	dx
endif
	xchg	ES:[BX-2], AX			; '!' wraparound where it is
	jmp	.OutCh1				; and exchange for the follow
						; ing character

.OUTCH2:
	add	DS:BCB.ScrCursor, 2		; note that the cursor must
	mov	AH, 3				; be advanced now for another
	mov	BH, 0				; quick insert if necessary
	int	10h
	add	DL, 1
	mov	AH, 2
	int	10h

	pop	BX
	ret

.OutCH  ENDP

;---------------------------------------------------------------------------
	; Piss is responsible for inserting all quickly tyoed characters
	; that are held in the KBUF into the file ( which is the "real
	; insert" ), and to finally reupdate the screen. After this
	; routine is called, we are sure we have one big, correct, nice
	; buffer holding all characters. "The hectic is over."
	;
	; .Piss [ (CS:$KBufptr=Typebufferend, *[CS:$KBufStart]=Typebuffer)
	; %OUT	-> (CS:$KBufptr, *[CS:$KBufStart], Buffer) ]
	; calls::	 .outstr, .screen

.Piss	PROC	Near

	cmp	CS:$KBufptr, Offset $KBufStart	; output characters only if
	je	.PissNo				; there are any temp ones

	push	ES
	push	SI
	push	CX
	mov	AX, CS
	mov	ES, AX
	mov	SI, Offset $KBufStart
	mov	CX, CS:$KBufPtr
	sub	CX, Offset $KBufStart

	call	.OutStr			; output all characters

	pop	CX
	pop	SI
	pop	ES

	mov	CS:$KBufPtr, Offset $KBufStart ; clear the temporary Kbuffer

	call	.Screen			; and update it to a correct screen
	ret

.PissNo:ret			; there is nothing in $KBuf

.Piss	ENDP

;---------------------------------------------------------------------------
	; This routine transfers bytes from ES:DI into a normal DS buffer
	; that usually points to a buffer the user is editing.
	; %OUT .OutStr [ (*ES:SI=InString, CX=Length) -> (Buffer) ]

.OutSTR PROC	Near

	push	ES
	call	.MakeSpace
	pop	AX

	cld				; part 2 -> transfer the instring
					; into the real buffer
	push	DS
	push	DS
	pop	ES

	mov	DI, DS:BCB.FCursor
	mov	DS, AX
	rep	movsb			; actually insert
	pop	DS

	mov	DS:BCB.FCursor, DI	; and readjust for the new cursor
	ret
;. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

OFBUFMSG	db	'*** NO ROOM IN BUFFER LEFT ***'
OFBUF:  sub	DS:BCB.FEnd, CX
	pop	CX
	pop	SI
	pop	ES
	cld
	mov	SI, Offset OFBUFMSG
	mov	CX, 30
	jmp	.Error0
.OutSTR  ENDP

;---------------------------------------------------------------------------
	; This routine makes space in the DS buffer
	; %OUT	MakeSpace ( CX=#bytes )

.MakeSpace	PROC	Near
	mov	DS:BCB.Dirty, TRUE

	std				; make space in DS Buffer
	push	ES
	push	SI
	push	CX
	mov	AX, DS
	mov	ES, AX

	mov	SI, DS:BCB.FEnd		; check whether we would overflow
	add	DS:BCB.FEnd, CX		; the 64KB RAM Buffer
	jc	OFBUF
	cmp	DS:BCB.FEnd, 0FFD0h
	jae	OFBUF
	mov	DI, SI
	add	DI, CX

	mov	CX, SI			; set up word (instead of Byte) move
	sub	CX, DS:BCB.FCursor
	inc	CX
	mov	AX, CX
	test	AX, 1			; isolate one bit
	  jz	.MakeSpace0
	  inc	SI
	  inc	DI
	  inc	CX
.MakeSpace0:
	clc
	shr	CX, 1			; CX:=CX/2+1
	inc	CX
	rep	movsw			; actually insert the space now

	pop	CX
	pop	SI
	pop	ES
	ret

.MakeSpace	ENDP




;---------------------------------------------------------------------------
	; Damn: User Error. Clear out any macro commands in progress,
	; reset the stack pointer, and print the passed error message

.Error0 PROC	Near

	mov	SP, CS:$StackInit
	mov	CS:$Repeat, 0
	mov	CS:MacArg, 0
	mov	CS:Macrodefinition, FALSE
	mov	CS:Macroinvocation, FALSE
	call	.InvMsg
	call	Sound
	jmp	MainScreendraw

.Error0 ENDP

;---------------------------------------------------------------------------
	; this is a non-fatal error ( hardly called )
	; %Out .Error1 [(*SI=Msg, CX=Length) -> (*CS:$Repeat)]

.Error1 PROC	Near

	call	.Msg
	call	Sound
	ret

.Error1  ENDP

;---------------------------------------------------------------------------
	; I hate the dumb long beep of the PC !!! /ivo

timer	EQU	40h		; Use to issue short beep.
port_b	equ	61h
Sound	PROC	NEAR
	mov al,10110110B	; Gen a short beep (long one losses data.)
	out timer+3,al		; Code snarfed from Technical Reference.
	mov ax,533H
	out timer+2,al
	mov al,ah
	out timer+2,al
	in al,port_b
	mov ah,al
	or al,03
	out port_b,al
	mov cx, 32000
snd0:	loop snd0
	mov al,ah
	out port_b,al
	ret
Sound	ENDP

;---------------------------------------------------------------------------
Comment $

Some remarks:

MAX always updates the screen after a function is executed. The screen
update function's speed is crucial, and presently apparently excellent.

There is one exception, the case when a user types a character. Since a
user can type faster than the 8088 can insert in its buffer ( which  can
be a file of up to 64K ), something must be done to let the user think the
computer has already digested his last character. I do it as follows: I
store the character in KBuf, and perform a "fake" insert on the screen,
i.e. I insert it on the screen, guessing where the user's line ends from
screen information only. This is very fast, and makes the user thinks the
insert was performed fine. As soon as he stops typing, or when the buffer
that holds these quickly faked characters overflows, I call .Piss which
will insert the quickly typed characters into the buffer, and everything
is fine. It works great !!

So, SCREEN updates are only in the FSCREEN routine, which updates the
entire screen, and the quick insert, which is somewhere up in this module.
There are also some further screen commands in the following areas, which
have to be modified for the color screen:

-	the Modeline
-	the Message Area
-	the Lastline
-	the Buffer/Window commands which draw a separating line
	between windows on the screen

I have tried to mark this with the keyword SCREEN, so fgrep and you will
get the locations to change.
$


IF2
	%OUT [Pass 1 Completed]
ENDIF

	Program ENDS
End Main
```
{% endraw %}

## TUTORIAL.TXT

{% raw %}
```



                               -PAGE 1-                       TUTORIAL-I V0.2
Topics:   Notation | CTL-V

This  is  an interactive tutorial which will teach you how to use this editor.
Please read carefully through each page, and then follow the instructions.

There  are  two  different  kind of commands which you can give to the editor,
namely  "control-commands"  and  "escape sequences." You can perform the first
by  holding  down  the  CONTROL  ( ALT ) key and pressing another key simulta-
neously.  You  can  specify  the  second  by pressing the ESCAPE key once, and
then,  afterwards,  another  key.   We  will  use  the  following abbreviation
convention.  CTL-x  means holding down CONTROL and pressing key x, ESC-x means
pressing ESCAPE and then key x.

The  purpose  of an editor is to edit a document ( file ). You will always see
a  screenful  of information. Now you are looking at page ( screen ) 1 of this
tutorial.  For  your  convenience, the header above specifies the page you are
on.   The  command  to  advance  to the next screen is CTL-V ( for vertical ).
Hold down the CONTROL key and press v or V, and page 2 will appear.

*End of Page 1*
                               -PAGE 2-                       TUTORIAL-I V0.2
Topics:   Paging | ESC-V


Now  you  have learned how to go to following pages. But note that one line of
the  last page is still on top of the screen. This is to allow for your easier
recognition and more continuity between consecutive pages.


The  next command to remember is the command to go back one page ( screen- ful
)  in  your  document.  This will enable you to view a file page by page, just
like  you can go through a real document, and page back. The command is ESC-V.
To  go back to the previous screen ( the one you saw the when you started this
tutorial,  and whose last line is the line you see on top of this page ) press
ESCAPE  once.   Now  you  should  see  below  the  modeline  an inverse "ESC-"
message.  This  means  the  editor  has  recognized  that you wish to input an
escape  sequence,  and  is  waiting for its completion. When you press V , you
will  see  the  last  page.  After  you have done this do a CTL-V to come back
here, and another one to go to page 3.

                               -PAGE 3-                       TUTORIAL-I V0.2
Topics:  Cursor | Modeline

The  most  important  idea  about the use of the editor which you will have to
understand  is  the  cursor.   The cursor is just like a pen which you use for
editing  a  document  by  hand.  Most  things  you  do  (  like  crossing  out
characters, writing etc. ) takes place on the character below the pen.

The  cursor  is  like  an electronic pen which you can move through your file.
Most  things  you  do,  like  writing,  takes  place where your cursor is. The
cursor  is  always  located  at  the  character  which is displayed in inverse
color, in this case it is in line 1, column 1 of this page. Look at it.

The  modeline  is the top line. It informs you about the name of the file that
you  are  editing ( in this case TUTORIAL.TXT ), its size, date, time and some
more  things.  Important  now  is  that  the  number after COL tells you which
column  the  cursor is in on its line, and the number after it ( e.g. -- 10%--
)  tells you at which percentage in tems of the size of the file the cursor is
on.  0 % is the beginning, 100% the end of the file.
. , . , . , . , . , . , . , . , . , . , . , . , . , . , . , . , . , . , . , 
                               -PAGE 4-                       TUTORIAL-I V0.2
Topics:  Character Insertion | Wraparound

To  insert  text, simply type characters. These characters are inserted at the
cursor  position.  The  cursor  moves one right and all characters right of it
are  shifted right, so as to make space for your new character. This is called
"insert"  mode.  Although  it  may  require  some  adaptation,  you  will find
"insert"  mode  more  economical and more error-proof than the typewriter-like
overstrike mode.

What  happens if I want more than 80 characters on a line ? Well, in this case
the  editor  will  change  the  < at the end of the line to !, open a new line
below,  and  continue the line on the newly opened line. It will treat the two
physical  lines  as one logical lines. For instance when you insert characters
on  the  start  of  a  line,  characters on such an extension-line are shifted
right  just  like  the  characters on the first line, and the character on the
end  of  the  first line becomes the first character on the continuation line.
This  is  called  wraparound. Now just type your name, and watch the described
action.
                               -PAGE 5-                       TUTORIAL-I V0.2
Topics:  Cursor Movement | CTL-B | CTL-F | CTL-A | CTL-E

Your  name has disappeared - of course, we are on another page. Please type it
again.

Of  course  you  will also wish to insert text anywhere on this line, not only
on  the  cursor  position ( the start of the line ). For this you will want to
move your cursor freely on this line.

CTL-B  moves the cursor B-ackwards, CTL-F F-orwards. Make sure not to move out
of  this  line. You do not know other commands yet to get back to this paging.
This  is  not  tragic,  but will distort the nice "screen-ful" organization of
this tutorial.

CTL-A  moves  the  cursor directly to the start of the line, CTL-E to the E-nd
of  the  line.  Now  move  the cursor a little around, and insert some text at
various points ( e.g. insert your middle name ).


                               -PAGE 6-                       TUTORIAL-I V0.2
Topics:  Cursor Movement | CTL-N | CTL-P


The  command to move down one line, to the N-ext line is CTL-N, the command to
move up one line, to the P-revious line is CTL-P.


Again,  try  to stay on this screen, because otherwise MAX would try to center
the  screen  for you. The cursor would be in the middle of the screen, but you
would loose the nice tutorial paging,


Below  is  an  incomplete sentence. Move down to the correct line, then to the
place where you wish to insert text, and insert it.

        It is a lot easier to fight mythan to fight computers,
        but it is a lot hrdr to ignore my thn my.


                               -PAGE 7-                       TUTORIAL-I V0.2
Topics:   Cursor Movement : Summary

You should remember the following commands by now:


CTL-V   go to the next page
ESC-V   go to the last page


CTL-A   go to the start of the line
CTL-E   go to the   end of the line


CTL-F   advance one character              |             CTL-P
CTL-B   retreat one character              |     CTL-B           CTL-F
CTL-P   go to the previous line ( up )     |             CTL-N
CTL-N   go to the     next line ( down )   |


                               -PAGE 8-                       TUTORIAL-I V0.2
Topics:  Character Deletion

There  are two commands to delete one character: CTL-D and the DEL key.  CTL-D
deletes  the  character  at the cursor position, and DEL deletes the character
one  before  the cursor position. The first is more often used.  The second is
handy  when  you insert a lot of text and want to correct the typo(s) you just
made, and are to lazy to move back and then delete.

These  commands  also work with the end of lines. They delete the lineend, and
thereby attach the second logical line to the first logical line.

Below  is  a  line  with some obvious errors. Use the cursor commands that you
already  know  to  move  the cursor there, delete the mistakes, and insert the
correct words.

        In the bginnning, God createdfsh



                               -PAGE 9-                       TUTORIAL-I V0.2
Topics:  Centering | CTL-L

Do  you  remember  the warnings not to leave the page with other commands than
CTL-V  and  ESC-V  ?  This  is  because  as  soon as you move your cursor to a
character  not  on the screen, MAX will update the screen such that the cursor
is  in  the  center  of  the  screen. This allows you to easily work through a
document  while  seeing the cursor without page commands.  Only in the case of
the  tutorial,  this  feature  would  throw you out of my special page by page
organization.  Pages  do  not  really  exist - I had to count lines to see how
many lines I wished on a page.

CTL-L  will  center  your cursor whereever you are in the file and rebuild the
screen.  Try  it  when  you  have  read through this page ( also try CTL-P and
other  commands  at  the start of a page ). Then go down line by line, and try
CTL-L  each line. You will see that the entire page shifts up one line ( since
you  center  now  in another place. Do this until you see in the last line the
same thing you see now, and then go to the next page.

*Last Line of Page 9*
                              -PAGE 10-                       TUTORIAL-I V0.2
Topics:  Editing a File | CTL-X CTL-V

Now  you  know all the necessary action to manipulate a file. But where do you
get the file from ? There are two ways:

Firstly,  you  can specify when you start MAX that you want to edit a specific
file. For example, if you type to the DOS prompt:
       A>MAX TUTORIAL.TXT    (the general Format is: >MAX filename.ext)
MAX  will  read  the command line, discover that you wish to edit a file named
TUTORIAL.TXT,  and  this  is  exactly what you are doing right now.  Secondly,
when  you  are  already  inside  MAX,  you  can wish to edit another file. The
command  is  CTL-X  CTL-V, which stands for "extended command - Visit a file."
MAX  will  ask you for its name ( use CTL-G if you changed your mind and don't
want  to  visit  another  file  )  and confirmation to throw away what you are
editing at the moment (for your protection against mistakes)

If  you  want  to  create a new file instead of editing an existing file, just
specify a filename of a nonexisting file, and MAX will create it for you.

                              -PAGE 11-                       TUTORIAL-I V0.2
Topics:  Saving and Writing | CTL-X CTL-S | CTL-X CTL-W | CTL-X CTL-Z

Now  you can edit a file of your choice and manipulate it in any way you like.
But  you  still  don't know how to save your work to the disk, so as to use it
for other things like printing, processing etc.

CTL-X  CTL-S  will  save  your work as the filename which you see specified in
the  first  line  (  presently it is A:TUTORIAL.TXT ). However, if you wish to
write  your  work  to  a  file with a different name ( and thereby keeping the
original  version  of this file under the old name on disk ), you will have to
use  the  command  CTL-X  CTL-W. Just like when you visit a file, MAX will ask
you for the new name under which to save your work.

! ATTENTION: DO NOT SAVE YOUR FILE NOW - YOU WOULD SAVE ALSO ALL
!            THE CHANGES YOU MADE DURING YOUR LEARNING SESSION !




                              -PAGE 12-                       TUTORIAL-I V0.2
Topics:  Documentation

Now  you  know  enough  to create and manipulate files in any way you like to.
Of  course, there are more powerful commands, too, but the commands which this
file  tought you, allow you to start using and familiarizing yourself with the
MAX.  There  are  more  powerful  commands, but they are extras, nice ones but
only  extras.

What  other  documentation  can  you  get  ?  As  you  may remember, MAX is an
EMACS-lookalike   editor.    Worst   case   EMACS  information  or  any  other
EMACS-look-  alike  editors  (  like  Perfect-Writer  or  MINCE  )  have  more
information.   CTL-H  ( or the help key on your keyboard ) will put you into a
help  mode,  which will remind you of all the available commands. Try it, then
come  back with ESC. Of course, there is always the written documentation: the
handbook,  the  reference  guide and the keyboard layout description which you
can   consult.    New  information  may  be  available  from  newsletters  and
magazines,  or private individuals distributing information. [If you decide to
create  new  documenta-  tion,  please  contact  the  author  who will make it
available to all users, which in the end will benefit all buyers.]

                              -PAGE 13-                       TUTORIAL-I V0.2
Topics:  More Advanced Commands

If  you  are  familiar  with all these commands, and you have exercised enough
with  them,  you can start using the more powerful commands. There is a second
tutorial available for these commands.

To give you an idea what you can do, here are some points: 
        - move by word, or globally
        - search for text
        - search and replace text by other text (*)
        - switch buffers
        - use windows (*)
        - give arguments to functions
        - insert Control-Characters
        - kill and yank back lines, words or regions
        - format paragraphs (*)
        - define and invoke macro commands (*)
        - and many more things...

                              -PAGE 14-                       TUTORIAL-I V0.2
Topics:  Exiting from MAX | CTL-X CTL-Z

I  guess the best thing I can do for you now is to ask you to practice all the
commands  which  you have learned in this tutorial. Create some nonsense files
and  play with the commands you know. It should take you no more than two days
of  intensive  practicing to know MAX command sequences by heart.  Don't worry
if it takes you longer, though. Es ist noch kein Meister vom Himmel gefallen.

Probably  you are tempted now to use all the arrow and function keys that your
keyboard  offers  :  They  are defined, and do the same things for you without
you  having  to  remember the long sequences. But it will be to your advantage
to  know  exactly  what  you are doing. So don't use the fancy keys right from
the beginning.

Now  I  can  finally tell you how to exit MAX. The command is CTL-X CTL-Z.  It
will  zap  you  right out of the editor, back to the DOS, after you confirm as
MAX asks you with CTL-Y.

                                GOOD LUCK
...and thank you for your choice,

Ivo Welch
---------------------------------------------------------------------------
MAX
Version 1.02, (C) Ivo Welch, 1984

MAX Tutorial
Version 0.2a, (C) Ivo Welch, 1984

---------------------------------------------------------------------------
Other companies mentioned in this document:

EMACS           is a trademark of MIT ??
Perfect Writer  is a trademark of Perfect Software
MINCE           is a trademark of Mark of the Unicorn

```
{% endraw %}

## ALLOCATE.ASM

{% raw %}
```
PUBLIC	ALLOC, $Buffer1, $Buffer2, $Buffer3, $Buffer4, $Buffer5, $Buffer6
PUBLIC	$Buffer7, $Buffer8, $Buffernumber, $StackInit, $WorkSpaceSegment
PUBLIC	$WorkSpaceEnd 

EXTRN	.Msg:NEAR, LastLabel:Near, $MsgAdd:Word, CBuffer1:Word
EXTRN	ActiveWindow:Byte, Initwindows:NEAR
;---------------------------------------------------------------------------
	Page ,132
NAME	FALLOC

TITLE Buffer Allocator

; MEMORY MAP:
;
; 0000 - xxxx:	Internal ( RAMDISK/MS-DOS/INTERRUPTS etc )
; xxxx - yyyy:	MAX.COM
; yyyy - zzzz:	Help Area / StackSpace
; bbb1 - bbb2:	Buffer 1 ( 64K )
; ....   ....:	Buffer 2...8
; bbb9 - xxxx:	WorkSpace ( for yankback, minimum size: 8K )
; xxxx - FFFF:	MS-DOS/Screen, etc/



	Include FDef.Def


div16	MACRO	Register
	shr	Register, 1
	shr	Register, 1
	shr	Register, 1
	shr	register, 1
ENDM

mul16	MACRO	Register
	shl	Register, 1
	shl	Register, 1
	shl	Register, 1
	shl	Register, 1

ENDM
;---------------------------------------------------------------------------
PROGRAM SEGMENT Para    PUBLIC  'Code'
	ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

$BufferNumber	dw	0
$Buffer1	dw	?
$Buffer2	dw	?
$Buffer3	dw	?
$Buffer4	dw	?
$Buffer5	dw	?
$Buffer6	dw	?
$Buffer7	dw	?
$Buffer8	dw	?

$WorkspaceSegment	dw	?
$WorkspaceEnd	dw	?
$StackInit	dw	?

;---------------------------------------------------------------------------
;...........................................................................
; ALLOC:
;	IN:	LastLabel: last Symbol in command file
;		CS:[0002]: Start of MS-DOS
;
;	OUT:	SP:		directly after program and HelpSpace
;		CS:Buffer*:	after Stackspace
;		CS:WorkSpace*:	after Buffers

Alloc   PROC    Near

; 1) Initialize the stack:

	mov	CX, Offset LastLabel
	add	CX, HelpSpace+StackSpace

	pop	AX			; remember the returnaddress
	mov	SP, CX
	mov	CS:$Stackinit, CX
	push    AX			; restore the returnaddress

	div16	CX

	inc	CX			; mod 16 + 1
	mov	AX, CS
	add	CX, AX			; this is where freemem starts

	mov	DX, CS:[0002]		; this is the end
	dec	DX			; DX is end, CX is start of free
					; while CX < (DX)
	mov	BX, Offset $Buffer1

AllocNext:
	cmp	CX, DX
	jae	AllocEnd

	mov	CS:[BX], CX
	add	BX, 2
	add	CX, 1001h
	inc	CS:$Buffernumber
	jmp	Allocnext

AllocEnd:
	sub	CX, 1000h
	sub	DX, CX				; this is the amount of space
	cmp	DX, MinWorkSpace
	jae	SmallWorkBuffer

	sub	CS:$Buffernumber, 2		; we actually reassign two
	sub	BX, 4				; buffers ( one and a half )
	mov	AX, CS:[BX]
	mov	CS:$WorkSpaceSegment, AX
	mov	CS:$WorkSpaceEnd, 0FFF0h
	jmp	ReportSpace

SmallWorkBuffer:

	dec	CS:$Buffernumber		; reassign last buffer as
	sub	BX, 2				; our workspace
	mov	AX, CS:[BX]
	mov	CS:$WorkSpaceSegment, AX

	mov	CX, CS:[0002]
	sub	CX, AX
	dec	CX
	mul16	CX
	mov	CS:$WorkSpaceEnd, CX

	call	InitBuffers

	call	InitWindows

	jmp	ReportSpace

ALLOC   ENDP
;---------------------------------------------------------------------------
InitBuffers	PROC	NEAR
	mov	CX, CS:$Buffernumber
	mov	BX, CX
	add	BX, BX
	add	BX, Offset $Buffer1

IB1:	mov	DS, CS:[BX]
	sub	BX, 2
	mov	DS:BCB.FCursor, 100h
	mov	DS:BCB.FEnd, 100h
	mov	Byte Ptr DS:[100h], EOF
	mov	DS:BCB.AuxScrStart, 100h
	mov	DS:BCB.AuxCursor, 100h
	mov	DS:BCB.ScrStart, 100h
	mov	DS:BCB.FCurCol, 1
	mov	DS:BCB.Mark, 100h
	mov	DS:BCB.ScrCursor, 0
	mov	DS:BCB.Dirty, FALSE
	mov	DS:BCB.EDMode, 0
	mov	Word Ptr DS:BCB.File, 'O'*256+'F'
	mov	WORD PTR DS:BCB.File+2, '.'*256+'O'
	mov	WORD PTR DS:BCB.File+4, 'A'*256+'B'
	mov	Word PTR DS:BCB.File+6, 'R'
	mov	DS:BCB.UnUsed, TRUE

	loop	IB1
	ret
InitBuffers	ENDP
;---------------------------------------------------------------------------
FatalMsg	db	'****> NOT ENOUGH SPACE TO OPEN BUFFER <****$'
StartMsg	db	'['
BuffernumberMsg	db	' Buffers,'
WorkSpaceMsg	db	'K Workspace]'

ReportSpace	PROC	NEAR

	mov	SI, Offset StartMsg
	mov	CX, 1
	call	.MSG
	sub	CS:$MsgAdd, 6
	mov	AL, Byte Ptr CS:$BufferNumber
	call	.Msg8

	mov	SI, Offset BuffernumberMsg
	mov	CX, 8
	call	.Msg

	mov	AX, CS:$WorkSpaceEnd
	mov	AL, AH
	shr	AL, 1
	shr	AL, 1
	call	.Msg8

	mov	SI, Offset WorkSpaceMsg
	mov	CX, 12
	call	.Msg

	cmp	CS:$BufferNumber, 0
	je	NoSpace
	ret

NoSpace:mov	AX, CS
	mov	DS, AX
	mov	DX, Offset FatalMsg
	mov	AH, 9
	int	21h
	int	20h

ReportSpace	ENDP
;--------------------------------------------------------------------------
; .Msg8:
;	IN:	AL:	8bit number
;	OUT:	Messageline=****
;
Msg8	db	'00'

.Msg8	PROC	NEAR

	mov	SI, Offset Msg8
        xor     AH, AH
                                        ; number 0..99

					; now the number is in the range 0..99
					; now we can use the AAM instruction !
	aam				; divide by 100-> DIV in AH, MOD in AL
	add     AH, '0'
	mov	CS:[SI], AH
	add     AL, '0'
	mov	CS:[SI+1], AL

	mov	CX, 2
	cmp	Byte Ptr CS:[SI], '0'
	jne	NoSuppress
	inc	SI
	dec	CX
NoSuppress:
	call	.Msg

	sub	CS:$MsgAdd, 6
	ret
.Msg8	ENDP
;---------------------------------------------------------------------------
WFormat	PROC	NEAR

	cmp	AL, 9
	ja	Letter
Number:	add	AL, '0'
	ret
Letter:	add	AL, 'A'-10
	ret

WFormat	ENDP
;---------------------------------------------------------------------------
; .Msg16:
;	IN:	AX:	16bit number
;	OUT:	Messageline=****
;
Msg16	db	'0000'

.Msg16	PROC	NEAR

	mov	DI, Offset Msg16
	mov	BX, AX

	mov	AL, BH
	and	AL, 11110000b		; digit 1
	div16	AL
	call	WFormat

	mov	CS:[DI], AL
	inc	DI

	mov	AL, BH			; digit 2
	and	AL, 00001111b
	call	WFormat
	mov	CS:[DI], AL
	inc	DI

	mov	AL, BL			; digit 3
	and	AL, 11110000b
	div16	AL
	call	WFormat
	mov	CS:[DI], AL
	inc	DI

	mov	AL, BL			; digit 4
	and	AL, 00001111b
	call	WFormat
	mov	CS:[DI], AL

	mov	SI, Offset Msg16
	mov	CX, 4
	call	.Msg

	sub	CS:$MsgAdd, 4
	ret


.Msg16	ENDP

PROGRAM	ENDS
END
```
{% endraw %}

## CTRLC.ASM

{% raw %}
```
	IF2
		%OUT [Pass 1 Completed]
	ENDIF


PUBLIC  Ctrl_Character, CBack, InsertCRLF, SaveEnd , $NoUpdate
PUBLIC  CCenter, CDelete, .Msg, .CLRMsg, $Wait, CYSave, CDelK, $MsgAdd
PUBLIC	.InvMsg

EXTRN	.OutCH:Near, FModeline:Near, .OutStr:Near, .Piss:Near, .InCH:Near
EXTRN	$History:Byte, RSearch:Near, ISearch:Near, .Error0:Near
EXTRN	$WorkSpaceSegment:Word, $WorkSpaceEnd:Word, .?Col:Near, FHELP:Near
EXTRN	$Repeat:Word, $Repeat:Word, $KBufPtr:Word, CRUBOUT:NEAR
EXTRN	NumWinsScr:Word, FillParagraph:Near, GetColumn:Near
EXTRN	NextScreen:NEAR, ScrollUp:NEAR


;---------------------------------------------------------------------------
	; NOTE FOR ADAPTATIONS:
	;
	; The following routines inside CTRL-C(haracters) directly manipulate
	; the screen:
	;
	;	.MSG		prints a message in the message-field area
	;	.INVMSG		prints a message in reverse video
	;	.CLRMSG		clears the message-field area
	;
	;	[The message-field area is below the modeline and above]
	;	[the last line]


;---------------------------------------------------------------------------
TITLE Control Command Handler

	; The routines in this module execute commands invoked by
	; pressing CTL and another character simultaneously, e.g. CTL-@,
	; CTL-A, CTL-B ...

Program SEGMENT PARA	PUBLIC  'code'
	ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

; <----------------------------------------------------------------------->

	INCLUDE FDEF.DEF
	$Free	=	(Offset CInvalid)

	$NoUpdate	dw	0	; not used ?

	SaveEnd		dw	0	; holds end of yankback buffer

	$Wait		dw	30	; holds time interval of msg display
	$MsgAdd		dw	0	; remembers where the next msg
					; should go to the screen ( append )

	Error1Msg	db	'*** FileStart ***'
	Error2Msg	db	'*** FileEnd ***'
	CInvalidT0	db	'*** CTL-'
	CInvalidT1	db	'? unknown ***'


; <---------------------------- Jump Table ----------------------------->
CJTable	dw	Offset SetMark		; ^@
	dw	Offset CBegl		; ^A
	dw	Offset CBack		; ^B
	dw	$Free			; ^C
	dw	Offset CDelete  	; ^D
	dw	Offset CEndL		; ^E
	dw	Offset CForward 	; ^F
	dw	$Free			; ^G
	dw	Offset CRubout		; ^H = Help
	dw	Offset TabIn		; ^I
	dw	$Free			; ^J
	dw	Offset CKill		; ^K
	dw	Offset CCenter  	; ^L
	dw	Offset InsertCRLF
	dw	Offset CNext		; ^N
	dw	Offset CTL_O		; ^O
	dw	Offset CPrevious  	; ^P
	dw	Offset LitIns		; ^Q
	dw	Offset RSearch  	; ^R
	dw	Offset ISearch  	; ^S
	dw	Offset BExchange	; ^T
	dw	$Free			; ^U
	dw	Offset NextScreen 	; ^V
	dw	Offset CRegKill 	; ^W
	dw	$Free			; ^X
	dw	Offset CYank		; ^Y
	dw	Offset Scrollup		; ^Z
	dw	$Free
	dw	$Free
	dw	$Free
	dw	$Free
	dw	Offset CHELP		; ^_
	dw	$Free


;***************************************************************************
	; The following routine directs the caller to the correct routine
	; by using above jump table

Ctrl_Character  PROC	Near

CParse: mov	AL, DL			; adjust AL to a 16bit pointer in
	xor	AH, AH			; the table
	mov	BX, AX
	add	BX, BX
	jmp	CS:CJTable [BX]

CInvalid:				; ohoh - table held INVALID
	add	 AL, 40h		; adjust the character to ASCII
	mov	CS:CInvalidT1, AL	; put it into the msg to be sent
	mov	SI, Offset CInvalidT0	; and announce the error
	mov	CX, 21
	jmp	.Error0

Ctrl_Character  ENDP

;***************************************************************************
;----------------------------Ctrl Functions---------------------------------
	; SETMARK sets the mark at the current cursor position

	SetMarkT	db	'[Mark Set]'

SetMark PROC	Near

	mov	AX, DS:BCB.FCursor		; get cursor position
	mov	DS:BCB.Mark, AX			; save as new mark
	mov	SI, Offset SetMarkT
	mov	CX, 10
	jmp	.Msg

SetMark ENDP

;---------------------------------------------------------------------------
	; The following routine moves the cursor back by one character

CBack	PROC	Near

	mov	BX, DS:BCB.FCursor		; load cursor value
	cmp	BX, 100h			; beginning of file ?
	jbe	CBackErr			; then error
	dec	BX				; go back and check if on LF
	cmp	Byte Ptr DS:[BX], Byte Ptr LF	; if so go back again
	jne	CBack0
	dec	BX
CBack0: mov	DS:BCB.FCursor, BX		; and save new cursor
	ret

CBackErr:mov	SI, Offset Error1Msg		; display an error message
	mov	CX, 17
	jmp	.Error0

CBack	ENDP

;---------------------------------------------------------------------------
	; insert a new line after the cursor position

CTL_O	PROC	NEAR

	call	InsertCRLF			; insert a CRLF, and go back
	call	.Piss
	jmp	CBack

CTL_O	ENDP

;---------------------------------------------------------------------------
	; advances cursor by one [see CBackward for comments]

CForward	PROC	NEAR
	mov	BX, DS:BCB.FCursor
	cmp	BX, DS:BCB.FEnd
	jae	CForwardErr	
	inc	BX
	cmp	Byte Ptr DS:[BX], Byte Ptr LF
	jne	CForward0
	inc	BX
CForward0:
	mov	DS:BCB.FCursor, BX
	ret

CForwardErr:
	mov	SI, Offset Error2Msg
	mov	CX, 15
	jmp	.Error0

CForward	ENDP

;---------------------------------------------------------------------------
	; advances the cursor to the next line

CNext	PROC	NEAR

	mov	BX, Offset $History		; check whether last command
	inc	BX				; was a CTL-P or CTL-N
	cmp	Byte Ptr CS:[BX], 16
	je	CNext0
	cmp	Byte Ptr CS:[BX], 14
	jne	CNext1

CNext0:						; is consecutive CTL-N/P
	mov	AX, DS:BCB.FOldCurCol
	mov	CS:CDesiredCol, AX		; this is where we want to be
	jmp	CNext2

CNext1:						; is a first CTL-N/P
	mov	BX, DS:BCB.FCursor		; so get where it is
	call	GetColumn
	mov	DS:BCB.FOldCurCol, CX		; and remember it for another
	mov	CS:CDesiredCol, CX		; next or previous line after



	; now we know the desired column we want to get to

CNext2:	mov	BX, DS:BCB.FCursor

CNC1:	cmp	Byte Ptr [BX], LF	; loop until we are at end of file
	je	CNC2			; or at LF
	cmp	BX, DS:BCB.Fend
	jae	CNC2
	inc	BX
	jmp	CNC1

CNC2:	cmp	BX, DS:BCB.FEnd		; don't allow CTL-N at least line
	jae	CNErr


CNC3:	inc	BX			; now we are at column 1 of the
					; next line.

	cmp	Word Ptr DS:[BX], CRLF	; if we hit the end of a line,
	je	FoundPosition		; 	[this is all we can do
	cmp	BX, DS:BCB.FEnd		; the fileend is also the end of all
	jae	FoundPosition		; 	[efforts
	call	GetColumn		; check if we have reached the desired
	cmp	CX, CS:CDesiredCol	;	[column
	jae	FoundPosition
	jmp	CNC3			; and advance if we haven't yet


CNErr:  mov	SI, Offset Error2Msg
	mov	CX, 15
	jmp	.Error0

FoundPosition:
	mov	DS:BCB.Fcursor, BX
	ret
CNext	ENDP



	CDesiredCOl	dw	0	



;---------------------------------------------------------------------------
	; This routine [improvable] moves the cursor to the previous line.
	; ( for comments please see CTL-N [CNext] )

CPrevious	PROC	NEAR

	mov	BX, Offset $History
	inc	BX
	cmp	Byte Ptr CS:[BX], 16
	je	CPrevious0
	cmp	Byte Ptr CS:[BX], 14
	jne	CPrevious1
CPrevious0:					; is a consecutive CTL-N/P
	mov	AX, DS:BCB.FOldCurCol
	mov	CS:CdesiredCol, AX		; this is where it shall be
	jmp	CPreviousCont

CPrevious1:					; is a first CTL-N/P
	mov	BX, DS:BCB.FCursor		; so get where it is
	call	GetColumn
	mov	DS:BCB.FOldCurCol, CX		; and remember it for another
	mov	CS:CDesiredCol, CX

CPreviousCont:
	mov	BX, DS:BCB.FCursor

CPC1:	cmp	Byte Ptr [BX], LF	; loop until we are at start of file
	je	CPC2			; or at LF
	cmp	BX, 0FFh
	je	CPC2
	dec	BX
	jmp	CPC1

CPC2:	dec	BX
	cmp	BX, 100h		; error at line 1
	jb	CPreviousErr

CPC3:	cmp	Byte Ptr [BX], LF	; loop until we are at start of file
	je	CPC4			; or at LF again, this is our new line
	cmp	BX, 0FFh
	je	CPC4
	dec	BX
	jmp	CPC3

CPC4:	inc	BX			; now we are at column 1 of the
					; line.
	cmp	Word Ptr DS:[BX], CRLF	; if we hit the end of a line,
	je	FoundPosition		; this is all we can do
	call	GetColumn		; check if we have reached it
	cmp	CX, CS:Cdesiredcol
	jae	FoundPosition
	jmp	CPC4			; and advance if we haven't


CPreviousErr:
	mov	SI, Offset Error1Msg
	mov	CX, 17
	jmp	.Error0

CPrevious	ENDP


;---------------------------------------------------------------------------
	; This routine inserts a CRLF when CR is pressed

InsertCRLF	PROC	NEAR

	mov	DS:BCB.Dirty, TRUE
	test	DS:BCB.EDMode, Wrapmode
	jz	NormalCRLF
	mov	BX, DS:BCB.FCursor
	cmp	Word Ptr DS:[BX-2], CRLF
	je	NormalCRLF			; opening a new paragraph
	cmp	BX, 100h
	jbe	NormalCRLF
	call	FillParagraph
NormalCRLF:
	mov	BX, CS:$KBufPtr
	mov	Byte Ptr CS:[BX], CR
	inc	BX
	mov	Byte Ptr CS:[BX], LF
	inc	BX
	mov	CS:$KBufPtr, BX
	call	.Piss
	ret

InsertCRLF	ENDP


;---------------------------------------------------------------------------
	; CCenter centers the line on which the cursor is. It is not
	; 100% correct, but will miss by +/- 1 line in strange situations.
	; The advantage is much simpler code and much faster execution.


DefCenter	EQU	 10
LineLength	EQU	 79


CCenter	PROC	NEAR
	mov	CX, CS:NumWinsScr	; find out what a centered line
					; means (could be one or two windows)
	xor	CX, 1			; 1<>0 = n*6+4
	add	CX, CX			; *2
	mov	AX, CX
	add	CX, CX			; *4
	add	CX, AX			; *6
	add	CX, 3			; 10 or 6

	cmp	CS:$Repeat, 0		; now reinterpret the argument
	je	.CC1
	cmp	CS:$Repeat, 1
	jne	.CC0
		mov	CS:$Repeat, 0	; use this line to center
		mov	 BX, DS:BCB.FCursor
		jmp	 .CCGoStart

.CC0:	mov	 CX, CS:$Repeat
	mov	 CS:$Repeat, 0

.CC1:
			mov	 BX, DS:BCB.FCursor

; go back CX physical lines | If (BX<=100h)  -> ERROR

.CCGoBack:	mov	AX, LineLength
			.CCPhysBack:
				dec	 BX
				cmp	 Byte Ptr [BX], LF
				je		.CCPhysBackEnd
				dec	 AX
				jnz	 .CCPhysback
			.CCPhysBackEnd:
		cmp	Byte Ptr [BX], LF
		jne	.CCPhysB1
		dec	BX			; point to the CR ( also on this line )
		.CCPhysB1:
		cmp	BX, 100h
		jbe	.CCErr
		loop	.CCGoBack

; BX points now to a character on this physical line
.CCGoStart:

		call	GetColumn		; BX holds cursor

		call	Findcolumn1		; returns in DX what the real
						; column should be

.CCGoLoop:	call	GetColumn		; this will go back until
		cmp	CX, DX			; it hits the real start
		jbe	AtLineStart
		dec	BX
		jmp	.CCGoLoop

ATLineStart:	mov	DS:BCB.ScrStart, BX
		cmp	CX, DX
		jb	HitTabLine
		ret
HitTabLine:	inc	BX
		ret

.CCErr:		mov	DS:BCB.ScrStart, 100h
		ret

;...........................................................................
	; CX holds a column - I want to know the column number of
	; the first character on this line.

FindColumn1	PROC	NEAR
	mov	DX, 1

FAgain:	add	DX, 79
	cmp	DX, CX
	jbe	FAgain
	sub	DX, 79		; return the real start
	ret
FindColumn1	ENDP
CCenter ENDP


;---------------------------------------------------------------------------
	; CDelete deletes one character

CDelete PROC	NEAR

	mov	DS:BCB.Dirty, TRUE		; buffer is modified

	xor	CX, CX
	mov	DX, DS:BCB.FEnd			; first check whether
	mov	BX, DS:BCB.FCursor		; we are at the end
	cmp	BX, DX				; of the buffer
	jae	CDeleteErr
	cmp	Byte Ptr DS:[BX], CR		; then check whether we are at
	jne	CDelete0			; a lineend = delete 2 chars
	inc	CX

CDelete0:
	inc	CX				; well one has to be deleted
	mov	SI, BX				; Cursor
	mov	DI, SI				; Cursor + #chars to be del
	add	SI, CX
	sub	DS:BCB.FEnd, CX			; of course our file shrinks
	mov	CX, DX				; by 1/2 chars | calculate
	sub	CX, SI				; how many bytes have to be
	inc	CX				; moved
	cld
	mov	AX, DS				; use the correct register
	mov	ES, AX
	clc					; and set up word, instead of
	shr	CX, 1				; slower byte move
	inc	CX
	rep	movsw

	ret

CDeleteErr:
	mov	SI, Offset Error2Msg
	mov	CX, 15
	jmp	.Error0

CDelete ENDP

;---------------------------------------------------------------------------
	; TABIN inserts a TAB ( ^I ) into the buffer.

Tabin	PROC	NEAR

	mov	BX, CS:$KBufPtr		; insert a "real" tab
	mov	Byte Ptr CS:[BX], 9
	inc	BX
	mov	CS:$KBufPtr, BX
	jmp	.Piss
	ret
	
	call	.Piss			; get rid of any leftover characters
	call	.?col			; which may not be necessary
	mov	DL, ' '			; calculate how many spaces should
	mov	AX, DS:BCB.FCurCol	; be inserted
	dec	AX
	and	AX, 111b		; which is AX:= AX mod 8
	mov	CX, 8
	sub	CX, AX

	mov	BX, CS:$KBufPtr

TabIn0: mov	Byte Ptr CS:[BX], ' '	; now insert our spaces
	inc	BX
	loop	TabIn0

	mov	CS:$KBufPtr, BX

	jmp	.Piss			; and output them

TabIn	ENDP

;---------------------------------------------------------------------------
	; CBEGL moves the cursor to the linestart


CBegL	PROC	NEAR

	mov	BX,DS:BCB.FCursor
CBegLoop:
	cmp	Byte Ptr [BX], LF	; loop until we are at start of file
	je	CBegFound		; or at LF
	cmp	BX, 0FFh
	je	CBegFound
	dec	BX
	jmp	CBegLoop

CBegFound:
	inc	BX			; and save the cursor
	mov	DS:BCB.FCursor, BX
	ret

CBegL	ENDP

;---------------------------------------------------------------------------
	; CENDL moves the cursor to the end of the line

CEndL	PROC	NEAR

	mov	BX,DS:BCB.FCursor
CEndLLoop:
	cmp	Byte Ptr [BX], CR
	je	CEndFound
	cmp	BX, DS:BCB.FEnd
	jae	CEndFound
	inc	BX
	jmp	CEndLLoop

CEndFound:
	mov	DS:BCB.FCursor, BX
	ret

CEndL	ENDP

;---------------------------------------------------------------------------
	; This routines exchanges two characters

BExchange	PROC	NEAR 

	mov	DS:BCB.Dirty, TRUE	; buffer is modified

	mov	BX, DS:BCB.FCursor	; load cursor
	cmp	BX, 100h		; if it is start of file, then error
	jbe	BExchangeErr

	mov	AL, DS:[BX]		; if it is end of line, then special
	cmp	AL, CR			; is done to reverse last two chars
	je	BEx1			; which allows typing correction

	mov	AH, DS:[BX-1]		; if we are at start of a line,
	cmp	AH, LF			; then we have an error, too
	je	BExchangeErr

	mov	DS:[BX-1], AL		; exchange current and last char
	mov	DS:[BX], AH
	cmp	BX, DS:BCB.FEnd		; check whether we are at FileEnd
	jae	BExEnd1			; if so, don't advance
	inc	DS:BCB.FCursor		; otherwise do advance
BExEnd1:ret

BEx1:	cmp	BX, 101h		; we are at eoln, which says to
	jbe	BExchangeErr		; exchange last two -1 chars
	mov	AL, DS:[BX-1]		; of course check for all errors etc.
	cmp	AL, LF
	je	BExchangeErr
	mov	AH, DS:[BX-2]
	cmp	AL, LF
	je	BExchangeErr
	mov	DS:[BX-2], AL
	mov	DS:[BX-1], AH
	ret

BExchTM db	'*** LineStart ***'
BExchangeErr:
	mov	CX, 18
	mov	SI, Offset BExchTM
	jmp	.Error0

BExchange	ENDP

;---------------------------------------------------------------------------
	; This routine inserts a literal character

	C_QMsg  db	'CTL-Q '

LitIns  PROC	NEAR

	mov	DS:BCB.Dirty, TRUE	; buffer is modified

	call	.CLRMsg			; put up the CTL-Q message
	mov	SI, Offset C_QMsg
	mov	CX, 6
	call	.Msg

LInfLoop:call	.InCH			; get a character
	jz	LInfLoop

LitIns1:cmp	AL, 1Ah			; EOF is an invalid character to
	je	LitInsErr1		; insert
	cmp	AL, LF			; LF would confuse too many functions
	je	LitInsErr2

	push	AX
	mov	DL, AL			; clear the screen
	call	.CLRMsg
	pop	AX

	mov	BX, CS:$KBufPtr		; and insert it into the real buffer
	mov	Byte Ptr CS:[BX], AL
	inc	BX
	mov	CS:$KBufPtr, BX
	jmp	.Piss


LitInsErr1T	db	'*** Ctrl-Z Invalid ***'
LitInsErr2T	db	'*** Ctrl-J Invalid ***'
LitInsErr1:
	mov	SI, Offset LitInsErr1T
	jmp	LitInsErrC
LitInsErr2:
	mov	SI, Offset LitInsErr2T
LitInsErrC:
	mov	CX, 22
	jmp	.Error0

LitIns  ENDP


;------------------------------------------------------------------------
	; Calls the help routine. Once upon a time, this could take a
	; number from the last error or environment, and directly jump
	; to the appropriate help message.

CHelp	PROC	NEAR
	jmp	FHelp
	ret
CHELP	ENDP

;---------------------------------------------------------------------------
	; CYANK yanks back from the current workspacesegment ( byte 0 to
	; cs:saveend ) into the main buffer.

CYank	PROC	NEAR

	mov	DS:BCB.Dirty, TRUE
	mov	ES, CS:$WorkSpaceSegment ; ES:SI (CX) define the string length
	xor	SI, SI
	mov	CX, CS:SaveEnd

	call	.OutSTR			; outstr will do the rest
	ret

CYank	ENDP

;---------------------------------------------------------------------------
	; KILL kills up to the end of the line.

CKill	PROC	NEAR

	mov	SI, DS:BCB.FCursor	; load the cursor

	mov	BX, SI
	xor	CX, CX
	cmp	BX, DS:BCB.FEnd		; if it is on the fileend, then do
	jae	CKillErr		; nothing

	mov	AL, DS:[BX+1]		; if we are at the end of a line,
	cmp	AL, LF			; then just kill the CRLF
	je	CKA

CKLoop: inc	BX			; otherwise, kill everything up to
	mov	AL, DS:[BX]		; the CR
	cmp	AL, LF
	je	CKFound
	inc	CX
	cmp	AL, EOF
	jne	CKLoop
					; SI = Start  CX = Number of character
CKFound:call	CYSave			; now save in the yank back buffer
	jmp	CDELK			; and delete it from the file

CKA:	mov	CX, 2			; this is a CRLF to save
	call	CYSave			; so save it
	jmp	CDELK			; and delete it

CKillErr:
	mov	SI, Offset Error2Msg
	mov	CX, 15
	jmp	.Error0

CKill	ENDP

;---------------------------------------------------------------------------
	; This routine will kill the entire region

	CRegKillTE	db	'*** Cursor on Mark ***'

CRegKill	PROC	Near
	mov	SI, DS:BCB.Mark		; get the mark
	mov	AX, DS:BCB.FCursor	; get the cursor
	cmp	AX, SI			; if they are the same, there is no
	je	CRegKillErr		; region, if they are reversed, change
	ja	CRegKill0		; them.
	xchg	AX, SI
CRegKill0:
	mov	DS:BCB.FCursor, SI	; this is our new cursor after kill
	mov	CX, AX			; this is our region length
	sub	CX, SI

	call	CYSaveNewKill		; this will have to be a new save
	jmp	CDELK			; and. after saving, delete it.

CRegKillErr:
	mov	SI, Offset CRegKillTE
	mov	CX, 22
	jmp	.Error0

CRegKill	ENDP

;---------------------------------------------------------------------------
	; This procedure will delete, starting at ES:SI, CX characters

CDelK	PROC	Near

	mov	DS:BCB.Dirty, TRUE
	mov	DI, SI
	add	SI, CX
	sub	DS:BCB.FEnd, CX

	add	CX, DS:BCB.FEnd
	sub	CX, SI
	inc	CX
	cld
	mov	AX, DS
	mov	ES, AX
	clc
	shr	CX, 1
	inc	CX
	rep	movsw
	ret

CDELK	ENDP

;---------------------------------------------------------------------------
	; This procedure will first check whether it should add to the old
	; save buffer, or whether to create a new one. Then it saves the
	; area in the workspace segment

CYSave  PROC	Near

	mov	BX, Offset $History	; First it checks whether this and
	cmp	Byte Ptr CS:[BX+1], 11  ; previous command was CTL-K
	jne	CYSavenewkill
MayCYSadd:
	cmp	Byte Ptr CS:[BX], 11	; how about old one ?
	je	CYSadd

CYSavenewkill:
	cmp	CX, CS:$WorkSpaceEnd	; will kill fit into our segment ?
	jae	CYSOF

	xor	DI, DI			; yes, then the length of our new
	mov	CS:SaveEnd, CX		; save is what we insert
CYLbl:  push	CX			; which we will do right here
	push	SI
	mov	ES, CS:$WorkSpaceSegment
	rep	movsb
	pop	SI
	pop	CX
	ret

CYSadd: mov	DI, CS:SaveEnd		; will additional stuff still fit ?
	add	DI, CX
	cmp	DI, CS:$WorkSpaceEnd
	jae	CYSOF
	sub	DI, CX			; reget additional characters ( not
	add	CS:Saveend, CX		; necessary I think
	jmp	CYLbl			; and save it

CYSOFT  db	'*** Kill Space Exhausted ***'
CYSOF:  pop	AX	 ; return to upper level ( avoid call CDELK )
	mov	CX, 28
	mov	SI, Offset CYSOFT
	jmp	.Error0

CYSave  ENDP



;***************************************************************************
;				SCREEN
;
;	The following routines put up messages below the modeline
;
;---------------------------------------------------------------------------

MsgIntens	db	Lowintensity	; holds the color of the next msg

;...........................................................................
.InvMsg	PROC	NEAR
	mov	CS:MsgIntens, Inverse	; this will set the default msg
	jmp	.Msg			; intensity to inverse, and call
					; the standard message.
.InvMsg	ENDP
;...........................................................................
.Msg	PROC	Near
	push	SI			; save all
	push	CX
	pushf
	cld				; insert strings direction forward

	mov	AX, Screensegment	; sets the screen segment
	mov	ES, AX

	mov	DI, CS:$MsgAdd		; CS:$MsgAdd holds the end of the
	add	DI, StartofMsgField	; last message: DI holds now the
					; start of the message pointer

dummy	Label	Byte
.msg1:	lods	CS:dummy		; get a byte from the message
	mov	AH, CS:MsgIntens	; what is the msg's color ?
	stosw				; put a word with the character in
					; AL and the color in AH to the screen

	cmp	DI, EndofMsgfield-5	; check whether we have reached
	jae	.MAgain			; the screen end
		loop	.msg1		; no, so put other bytes to the scr

					; msg is on scr now

	sub	DI, StartofMsgField-6	; remember where this message ended
	mov	CS:$MsgAdd, DI
	mov	CS:MsgIntens, Lowintensity	; clear the default color

	popf				; restore the registers
	pop	CX
	pop	SI

					; and assign a wait state of 15 sec
	mov	CS:$Wait, Word Ptr 15	; before erasing screen messages
	ret




	; The following routine, .MAgain is called when a msg does not fit at
	; the end after the previous message. It clears the msg-area, and
	; attempts to put up the message now at the start of the msg area


.MOFMsg db	'*** Message Line Overflow ***'
.MAgain:call	.CLRMsg			; clear the screen

	popf
	pop	CX
	pop	SI

	cmp	CX, 75
	jbe	.MAg2			; if the message is larger than an
					; entire line, then ...

	mov	CX, 29			; ... report an error instead
	mov	SI, Offset .MOfMsg
	jmp	.Error0
.MAg2:  jmp	.Msg
.Msg	ENDP

;...........................................................................
	; CLRMSG clears the message area

.ClrMsg		 PROC	Near
	push	ES			; This will clear the message line
	push	DI
	mov	AX, Screensegment	; get screen segment
	mov	ES, AX
	mov	DI, StartofMsgField	; get message line start
	mov	AX, ' '			; get a space character
	mov	CX, (EndofMsgField-StartofMsgField)/2 ; and put it n times
					; to the screen
	rep	stosw
	mov	CS:$Wait, 0FFFFh	; wait forever until we reerase
	mov	CS:$MsgAdd, 0		; and remember that there is nothing
	pop	DI			; on message line
	pop	ES
		ret
.CLRMsg		 ENDP



	PROGRAM ENDS
END
```
{% endraw %}

## CTRLXC.ASM

{% raw %}
```
PUBLIC CTRL_X_Sequence, L25Switch, MacroDefinition, MacroInvocation
PUBLIC MACPtr, MacCtr, MacBack, MacArg, Store, FillColumn

EXTRN	.ERROR0:Near, .Error1:Near, .Msg:Near, .InCh:Near, .CLRMsg:Near
EXTRN	.CAPS:Near, InsertCRLF:Near, $KBufPtr:Word, .Piss:Near
EXTRN	FSave:Near, .Text:Near, FVisit:Near
EXTRN	Sound:Near

EXTRN	SwitchWindow:Near, ToggleNumWindows:Near, SelectBuffer:Near
EXTRN	FindFile:NEAR
EXTRN	BufToggle:Near, $Repeat:Word
EXTRN	Directory:Near
EXTRN	LastLineUpdate:NEAR, NoMODELINE:Byte
;---------------------------------------------------------------------------
	Page ,132
TITLE CTRL-X-C: commands CTL-X ?

INCLUDE        FDEF.DEF

Program        SEGMENT PARA    PUBLIC  'code'
       ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

;-------------------------------------------------------------------------
Free	=	Offset CXInvalid

CXJTable	dw	Free	; ^@
dw	Free			; ^A
dw	Offset BufToggle	; ^B
dw	Free			; ^C
dw	Directory		; ^D
dw	Free			; ^E
dw	Offset FindFile		; ^F
dw	Free			; ^G
dw	Free			; ^H
dw	Free			; ^I
dw	Free			; ^J
dw	Free			; ^K
dw	Free			; ^L
dw	Free			; ^M
dw	Free			; ^N
dw	Offset SwitchWindow	; ^O
dw	Free			; ^P
dw	Free			; ^Q
dw	Free			; ^R
dw	Offset SaveBuffer	; ^S
dw	Free			; ^T
dw	Free			; ^U
dw	Offset FVisit		; ^V
dw	Offset Writebuffer	; ^W
dw	Offset ExCursMark	; ^X
dw	Free			; ^Y
dw	Offset DOSExit		; ^Z
dw	Free			; ^[
dw	Free			; ^\
dw	Free			; ^]
dw	Free			; ^^
dw	Free			; ^_
dw	Free			; ' '
dw	Free			; !
dw	Free			; "
dw	Free			; #
dw	Free			; $
dw	Free			; %
dw	Free			; &
dw	Free			; `
dw	Offset DefineMacro	; (
dw	Offset EndDefineMacro	; )
dw	Free			; *
dw	Free			; +
dw	Free			; `
dw	Free			; -
dw	Free			; .
dw	Free			; \
dw	Free			; 0
dw	Offset ToggleNumWindows	; 1
dw	Offset ToggleNumWindows	; 2
dw	Free			; 3
dw	Free			; 4
dw	Free			; 5
dw	Free			; 6
dw	Free			; 7
dw	Free			; 8
dw	Free			; 9
dw	Free			; :
dw	Free			; ;
dw	Free			; <
dw	Free			; =
dw	Free			; >
dw	Free			; ?
dw	Free			; @
dw	Free			; A
dw	Offset SelectBuffer	; B
dw	Free			; C
dw	Offset Directory	; D
dw	Offset InvokeMacro	; E
dw	Offset SetFillColumn	; F
dw	Free			; G
dw	Free			; H
dw	Free			; I
dw	Free			; J
dw	Free			; K
dw	Offset WhereamI		; L
dw	Free			; M
dw	Free			; N
dw	Offset SwitchWindow	; O
dw	Free			; P
dw	Free			; Q
dw	Free			; R
dw	Free			; S
dw	Free			; T
dw	Free			; U
dw	Free			; V
dw	Free			; W
dw	Free			; X
dw	Free			; Y
dw	Free			; Z
dw	Free			; [
dw	Free			; \
dw	Free			; ]
dw	Free			; ^
dw	CreateMap		; _
dw	Free			; '
					; lowercase trapped

CXInvalidT0	db	'*** CTL-X '
CXInvalidT1	db	'? unknown ***'
ConfirmMsg1	db	'NOT CRASHPROOF: needs valid HELP file !! [CTL-Y]'
TellFill	db	'[Fill Column Set]'
TellFillDefault	db	'[Set Fill Column Default (=75)]'
Invalidfillcolumn db	'*** Range must be 25 to 255 ***'

Store		db	(Macmaximum+1) dup ( 7 )  ; if at all, then ctl-g !
MacMsg1		db	'[Defining Macro]'
MacMsg2		db	'[Macro Defined]'
MacMsg3		db	'[Macro Invoked]'
MacroErr2	db	'*** Already in Macro Definition: Restart ***'
MacroErr1	db	'*** Not in Macro Definition ***'
MacroErr3	db	'*** Invalid Nesting ***'

MacroDefinition	db	False
MacroInvocation	db	False
MACPtr		dw	Offset Store
MacCtr		db	0
MacBack		db	0
MacArg		dw	0

SERIALNUMBER	dw	1
L25Switch	db	1
Bye		db	'MAX [Version 1.01], '
		db	'(C) 1984, Ivo Welch. All Rights Reserved.'

WRITINGMSG	db	'[Writing File]'
SAVEDMSG	db	'[File Saved]'
AskFile		db	'WRITE FILE <CR>:'
ConfirmMsg	db	'! CONFIRM WITH CTL-Y !'
NOTCONFIRMED	db	'*** NOT CONFIRMED ***'
WrErrMsg	db	'*** No Filename ***'

PStart		dw	100h
PEnd		dw	101h

;---------------------------------------------------------------------------
Ctrl_X_Sequence	PROC	Near

	call	.CAPS

	cmp	AL, 'z'
	ja	CXInvalid1
	
CXParse:xor	AH, AH			; clear insignificant
	add	AX, AX			; dw index
	mov	BX, AX			; get the index
	jmp	CS:CXJTable [BX]	; and jump

CXInvalid:
	shr	AL, 1
CXInvalid1:
	mov	CS:CXInvalidT1, AL
        mov     SI, Offset CXInvalidT0
        mov     CX, 23
        jmp     .Error0

Ctrl_X_Sequence	ENDP

;-----------------------------------------------------------------
DOSExit	PROC	NEAR

if Confirm
	mov	SI, Offset ConfirmMsg	; ask for CTL-Y confirmation for exit
	mov	CX, 22
	call	.Error1			; beep and display
DOS1:	call	.Inch			; get one character
	jz	 DOS1
	cmp	AL, 25			; is it CTL-Y
	je	FinalExit		; if so, we will soon die
	mov	SI, Offset NOTCONFIRMED	; no, then print an error message
	mov	CX, 21
	jmp	.Error0			; and exit
endif
FinalExit:
	mov	AH, 2			; set cursor position to print a nice
	mov	BH, 0			; exit message on leave.
	mov	DX, 23*256
	int	10h
	call	.CLRMsg
	mov	SI, Offset Bye
	mov	CX, 61
	call	.Msg			; and say bye

	mov	CS:L25Switch, 0		; don't know if this is necessary
	mov	CS:NoModeLine, TRUE
	call	LastLineUpdate
if noblockexit
	mov	CH, 6
	mov	CL, 7
	mov	AH, 1			; set the cursor to block via BIOS
	int	10h
endif
	int	20h			; and exit to DOS

DOSExit	ENDP

;---------------------------------------------------------------------------
SaveBuffer	PROC	Near

	mov	SI, Offset WRITINGMSG	; say "Saving Buffer"
	mov	CX, 14
	call	.Msg
	call	FSave			; call the routine that does it
	mov	SI, Offset SAVEDMSG	; and say you have finished
	mov	CX, 12
	jmp	.Msg

SaveBuffer	ENDP

;---------------------------------------------------------------------------
WriteBuffer	PROC	Near
	call	.CLRMsg			; ask for the filename
	mov	SI, Offset AskFile
	mov	CX, 16
	call	.Msg

	mov	SI, CX			; prepare to enter .Text
	add	SI, SI			; SI holds the start of the cursor
	add	SI, StartofMsgField	; on the screen
	mov	DL, CR			; end input with CR
	mov	DI, Offset BCB.File	; and put result to File field
	call	.Text

	cmp	BX, 0			; if we received 0 characters, too bad
	je	WrErr

	call	FSave			; and now save it with the new file
					; name already in our field
	mov	SI, Offset SAVEDMSG	; write [Saved]
	mov	CX, 12
	jmp	.Msg

WrErr:	mov	SI, Offset WrErrMsg	; sorry we received no characters
	mov	CX, 19
	jmp	.Error0

WriteBuffer	ENDP
;---------------------------------------------------------------------------
ExCursMark	PROC	Near

	mov	AX, DS:BCB.FCursor	; simply exchange cursor and mark
	xchg	AX, DS:BCB.Mark
	mov	DS:BCB.FCursor, AX
	ret

ExCursMark	ENDP

;----------------------------------------------------------------------
DefineMacro	PROC	NEAR

	cmp	CS:MacroDefinition, TRUE
	jne	DM1
	mov	SI, Offset MacroErr2
	mov	CX, 44
	jmp	.Error0
DM1:	mov	CS:Macrodefinition, TRUE	; signal start of definition
	mov	CS:Macptr, Offset Store		; this is the offset of field
	mov	CS:Macctr, 0			; number of characters
	mov	CS:MacBack, 0			; as well
	mov	SI, Offset MacMsg1
	mov	CX, 16
	jmp	.Msg

DefineMacro	ENDP

;---------------------------------------------------------------------------
EndDefineMacro	PROC	NEAR

	cmp	CS:Macrodefinition, FALSE
	jne	EDM1
	mov	SI, Offset MacroErr1
	mov	CX, 31
	jmp	.Error0
EDM1:	mov	CS:Macrodefinition, FALSE
	dec	CS:MacBack
	dec	CS:Macctr
	mov	SI, Offset MacMsg2
	mov	CX, 15
	jmp	.Msg

EndDefineMacro	ENDP

;---------------------------------------------------------------------------
InvokeMacro	PROC	NEAR

	cmp	CS:$Repeat, 0
	je	IM1
		mov	AX, CS:$Repeat
		mov	CS:MacArg, AX
		mov	CS:$Repeat, 0
IM1:	cmp	CS:Macrodefinition, TRUE
	je	IMError
	mov	AL, CS:MacBack
	mov	CS:MacCtr, AL
	mov	CS:MACptr, Offset Store
	mov	CS:MacroInvocation, TRUE
	mov	SI, Offset MacMsg3
	mov	CX, 15
	call	.Msg
	ret
IMError:mov	SI, Offset MacroErr3
	mov	CX, 23
	jmp	.Error0

InvokeMacro	ENDP
;---------------------------------------------------------------------------
LocMsg		db	'[at Byte '
Location	db	'0000'
		db	']'

WhereamI	PROC	NEAR

	mov	BX, DS:BCB.FCursor
	sub	BX, 100h
	call	WhereSUB
	mov	SI, Offset LocMsg
	mov	CX, 14
	jmp	.Msg

WhereamI	ENDP
;---------------------------------------------------------------------------
WhereSub	PROC	NEAR
	mov	DI, Offset Location

	mov	AL, BH
	and	AL, 11110000b		; digit 1
	shr	AL, 1
	shr	AL, 1
	shr	AL, 1
	shr	AL, 1
	call	WFormat
	mov	CS:[DI], AL
	inc	DI

	mov	AL, BH			; digit 2
	and	AL, 00001111b
	call	WFormat
	mov	CS:[DI], AL
	inc	DI

	mov	AL, BL			; digit 3
	and	AL, 11110000b
	shr	AL, 1
	shr	AL, 1
	shr	AL, 1
	shr	AL, 1
	call	WFormat
	mov	CS:[DI], AL
	inc	DI

	mov	AL, BL			; digit 4
	and	AL, 00001111b
	call	WFormat
	mov	CS:[DI], AL
	inc	DI
	ret
WFormat	PROC	NEAR
	cmp	AL, 9
	ja	Letter
Number:	add	AL, '0'
	jmp	WMerge
Letter:	add	AL, 'A'-10
WMerge:	ret
Finished:ret

WFormat	ENDP
Wheresub	ENDP
db ' createmap   '
;---------------------------------------------------------------------------
CreateMap	PROC	NEAR

	call	.CLRMsg
	mov	SI, Offset ConfirmMsg1
	mov	CX, 48
	call	.Msg
	call	Sound

CWait:	call	.Inch
	jz	CWait

	cmp	AL, 25			; ^Y
	je	CMOK
	mov	SI, Offset NotConfirmed
	mov	CX, 21
	jmp	.Error0

CMOK:	mov	CX, DS:BCB.FEnd
	sub	CX, 100			; do in entire file

	mov	SI, 0FFh

UntilEof:
	mov	AX, 00

CSLoop:	inc	SI
	cmp	Byte Ptr DS:[SI], newpage
	loopne	CSLoop

	call	.Inch
	jnz	Finished

	cmp	SI, DS:BCB.FEnd
	jae	Finished
	cmp	CX, 10
	je	Finished

	mov	BX, SI
	sub	BX, 2
	sub	BX, 100h
	call	WhereSub

	mov	BX, CS:$KBufPtr		; put up the name
	inc	SI

MAg:	mov	AL, DS:[SI]		; get a char from the name
	inc	SI
	cmp	AL, NUL
	je	Nametransferred
	mov	CS:[BX], AL		; and save it
	inc	BX
	jmp	MAg
Nametransferred:
	mov	Byte Ptr CS:[BX], 9		; a tab
	inc	BX
	push	SI
	mov	SI, Offset Location	; now the location
	mov	AX, CS:[SI]
	add	SI, 2
	mov	CS:[BX], AX
	add	BX, 2
	mov	AX, CS:[SI]
	mov	CS:[BX], AX
	add	BX, 2
	pop	SI

	mov	CS:$KBufPtr, BX
	push	SI
	push	CX

	call	BufToggle

	call	.Piss

	call	InsertCRLF

	call	BufToggle

	pop	CX
	pop	SI
	add	SI, 5
	jmp	UntilEOF

NodeName	dw	5 dup ('$')
CreateMap	ENDP
;---------------------------------------------------------------------------
FillDefault	equ	75
MaxFillColumn	equ	255
MinFillColumn	equ	25
FillColumn	dw	FillDefault

SetFillColumn	PROC	Near
	mov	AX, CS:$Repeat
	cmp	AX, 0
	je	SFCDefault
	cmp	AX, MaxFillColumn
	ja	SFCWrong
	cmp	AX, MinFillCOlumn
	jb	SFCWrong
	mov	CS:FillColumn, AX
	mov	CS:$Repeat, 0
	mov	SI, Offset TellFill
	mov	CX, 17
	jmp	.Msg
SFCDefault:
	mov	CS:FillColumn, FillDefault
	mov	SI, Offset TellFillDefault
	mov	CX, 31
	jmp	.Msg
SFCWrong:
	mov	SI, Offset InvalidFillCOlumn
	mov	CX, 31
	jmp	.Error0


SetFillColumn	ENDP

	PROGRAM	ENDS
END
```
{% endraw %}

## DOSFILES.ASM

{% raw %}
```
PUBLIC  FVISIT, FVINIT, FSAVE, .Text, FindFile, Directory

EXTRN	.Msg:Near, .Error0:Near, .InCh:Near, .CLRMsg:Near
EXTRN	$Buffer1:Word, $Buffer2:Word, $BufferNumber:Word
EXTRN	.CAPS:Near, Sound:Near
EXTRN	Separatorline:NEAR, .InvMsg:Near, Switchmenu:Near

;---------------------------------------------------------------------------
	Page ,132
NAME FILE

TITLE File handler

Cursorhome	MACRO
		mov	AH, 2		; set cursor position
		sub	dx, dx
		mov	BH, 0
		int	10h		; request new cursor

	ENDM

cls	macro
	mov	CX, 0			; clear the screen via BIOS
	mov	dx, 184fh
	mov	bh, 7
	mov	AX, 600h
	int 10h
	ENDM

;----------------------------------------------------------------------
Program SEGMENT PARA	PUBLIC  'code'
	ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

;......................................................................

	INCLUDE FDEF.DEF

Maxsize		equ	0F000h
NewfileFlag	equ	10000000b
OF		equ	00000001b

;----------------------------------------------------------------------
; FVisitFile
; FSaveFile
; .ProcessCommandLine
;
; .FLoad		Disk Operation
; .BCBInit		sets up BCB for just loaded file
;----------------------------------------------------------------------

Readonly	equ	0
FileOpen	equ	3Dh
FileRead	equ	3Fh
FileClose	equ	3Eh
FileCreate	equ	3Ch
FileWrite	equ	40h
MSDOS		equ	21h
Cursor		equ	lowintensity*256+178


Defaultfile	db	'WORK.TXT '
VIFT		db	'VISIT FILE <CR>:'
.?Con		db	'SAVE THIS MODIFIED BUFFER (Y/N/CTL-G) ?'
.TextMsg	db	70 dup ('#')
DFMsg		db	'*** Disk Overflow ***'
WriteErr	db	'*** No Filename ***'
NewfileMsg	db	'[NEW FILE]'
NoHandle	db	'*** No Handle Left ***'
Nopath		db	'*** No such Path ***'
AccessDen	db	'*** Access Denied ***'
InternalE	db	'***Internal Error***'
BigMsg		db	'*** File TOO Big ***'
.TQuit		db	'*** User Abort ***'
Rubbish		db	22 dup ('$')
Noth		db	5 dup (0)

;---------------------------------------------------------------------------
FVINIT PROC	NEAR

	call	.ProcessCommandLine
	cmp	CS:$Buffer2, 0
	je	FVOne
		mov	DS, CS:$Buffer2
		call	FLoadFile
FVOne:	mov	DS, CS:$Buffer1
	call	FLoadFile
	ret

FVINIT ENDP

;---------------------------------------------------------------------------
.ProcessCommandLine	PROC	Near


	mov	BL, CS:[80h]
	sub	BH, BH
	mov	Word Ptr CS:[BX+81h], 0
	

	push	DS

 	mov	DS, CS:$Buffer1

	mov	BX, 82h
	call	Transfer_File_Name

	cmp	CS:$Buffer2, 0
	je	.PCLret

		inc	BX			; start transfer from next nam
		mov	DS, CS:$Buffer2
		call	Transfer_File_Name
.PCLret:pop	DS
	ret

.ProcessCommandLine	ENDP

;----------------------------------------------------------------------
; Takes a string from [BX] and puts it into the file-location of the current
; buffer. If there is no filename, then the default filename is loaded.

Transfer_File_Name	PROC	NEAR
	xor	DI, DI				; DI will act as a counter

TFN1:	mov	AL, CS:[BX+DI]			; transfer until a space is
	cmp	AL, ' '				; found
	je	TFN2
	cmp	AL, 0
	je	TFN2
	mov	DS:BCB.File[DI], AL
	inc	DI
	jmp	TFN1
TFN2:	mov	DS:BCB.File[DI], 0		; -> ASCIIZ
	cmp	DI, 0				; if the first character was
	je	No_FileName_On_Line		; a ' ', put something special
	add	BX, DI				; remem where next one starts
	cmp	BX, 100h
	jbe	TFN3
	mov	BX, 80h
TFN3:	ret

No_FileName_On_Line:
	mov	BX, Offset Defaultfile
	call	Transfer_File_name
	ret
Transfer_File_Name	ENDP

;---------------------------------------------------------------------------
; File Not Found Handler
DOSERROR:
	cmp	AX, 2
	je	DOSERROR2
	cmp	AX, 3
	je	DOSERROR3
	cmp	AX, 4
	je	DOSERROR4
	cmp	AX, 5
	je	DOSERROR5
	mov	SI, Offset InternalE
	mov	CX, 20
	jmp	.Error0


; new file
DOSERROR2:
	mov	Byte Ptr DS:[100h], EOF
	mov	DS:BCB.FCursor, 100h
	mov	DS:BCB.FEnd, 100h
	mov	DS:BCB.AuxScrStart, 100h
	mov	DS:BCB.AuxCursor, 100h
	mov	DS:BCB.ScrStart, 100h
	mov	DS:BCB.FCurCol, 1
	mov	DS:BCB.Mark, 100h
	mov	DS:BCB.ScrCursor, 0
	mov	DS:BCB.Dirty, FALSE
	mov	DS:BCB.EDMode, 0
	mov	DS:BCB.UnUsed, FALSE
	mov	SI, Offset NewfileMsg
	mov	CX, 10
	jmp	.Msg

; Invalid Pathname
DOSERROR3:
	mov	SI, Offset NoPath
	mov	CX, 20
	jmp	.Error0


; No Handle Available
DOSERROR4:
	mov	SI, Offset NoHandle
	mov	CX, 22
	jmp	.Error0


; Access denied
DOSERROR5:
	mov	SI, Offset AccessDen
	mov	CX, 21
	jmp	.Error0

;...........................................................................
FLoadFile	PROC	Near

	mov	AL, Readonly
	mov	AH, FileOpen
	mov	DX, Offset BCB.File
	int	MSDOS
	jnc	FL1
		jmp	DOSERROR
FL1:	mov	BX, AX			; holds file handle
	mov	DX, 100h		; holds the filepointer
	mov	CX, 0F001h		; min bufferlength for real work
	mov	AH, FileRead
	int	MSDOS

	cmp	AX, 0F000h
	jae	OFERROR

	push	AX
	mov	AH, FileClose
	int	MSDOS
	pop	AX
	jnc	FL2
	jmp	DOSERROR

FL2:	add	AX, 100h		; and adjust for our buffer starts at
	mov	DS:BCB.FEnd, AX		; 100h
	mov	BX, AX
	mov	Byte Ptr DS:[BX], 1Ah	; set the eof character

	mov	DS:BCB.EDmode, 0	; Fundamental
	mov	DS:BCB.Dirty, FALSE	; saved buffer
	mov	DS:BCB.Scrend, 0	; screen end
	mov	DS:BCB.Scrcursor, 0	; screen cursor
	mov	DS:BCB.Unused, FALSE

	mov	DS:BCB.FCurCol, 1

	mov	AX, 0100h

	mov	DS:BCB.ScrStart,  AX	
	mov	DS:BCB.FCursor,	AX
	mov	DS:BCB.AuxScrStart,  AX	
	mov	DS:BCB.AuxCursor, AX
	mov	DS:BCB.Mark, AX
	mov	DS:BCB.FOldCursor, AX
	mov	DS:BCB.FOldCurCol, AX

	ret

;---------------------------------------------------------------------------
; File TOO Big
OFERROR:
	mov	AH, FileClose
	int	MSDOS

	mov	CX, 20
	mov	SI, Offset BigMsg
	call	.Msg
	mov	DS:BCB.File, '-'
	ret


FLoadFile	ENDP


;----------------------------------------------------------------------
FVISIT PROC	NEAR

	call	.CLRMsg			; first put up the visit file msg
	mov	SI, Offset ViFT
	mov	CX, 16
	call	.Msg
	mov	SI, CX			; now calculate the screen message
	add	SI, SI
	add	SI, StartofMsgField	
	mov	DI, Offset BCB.File	; load to the filename DS:DI
	mov	DL, CR			; and end everything with a CR
	call	.Text			; result in BCB.File, CX: # of chars

	cmp	CX, 0
	je	WrErr

	push	SI
	push	BX
	call	.?Save			; ask for confirmation
	pop	BX
	pop	SI

	mov	DI, Offset BCB.File	; Filename Start

	call	FLoadFile		; and load the file to 100h
	ret

WrErr: mov	SI, Offset WriteErr
	mov	CX, 19
	jmp	.Error0

FVISIT ENDP


;**********************************************************************
FSAVE  PROC	Near

	mov	DX, Offset BCB.File	; here I should first rename
	xor	CX, CX			; no attribute
	mov	AH, Filecreate
	int	MSDOS
	jnc	FS1
	jmp	DOSERROR
FS1:	mov	BX, AX			; file handle
	mov	CX, DS:BCB.FEnd
	sub	CX, 100h		; # bytes to be written
	mov	DX, 100h
	push	CX
	mov	AH, FileWrite
	int	MSDOS
	pop	CX
	jnc	FS2
	jmp	DOSERROR	
FS2:	push	AX
	mov	AH, FileClose
	int	MSDOS
	pop	AX	
	cmp	AX, CX
	jne	DiskFull
	mov	DS:BCB.Dirty, FALSE
	ret

FSAVE  ENDP


DiskFull	PROC	NEAR
	mov	SI, Offset DFMsg
	mov	CX, 21
	jmp	.Error0
DiskFull	ENDP


;***************************************************************************
;----------------------------------------------------------------------
; accepts text and puts it into [DI]. The exit character is in AL.
; [SI] points to the current character on the screen
; other functions:
;
;	CTL-G	cancel and exit
;	CTL-U	cancel and retry
;	CTL-H	backspace one character
;	ESC	parse for the filename
;
; returns on exit in CX the number of received characters, in DI the start of
; the message ( as it was received on entry ).
;

Exitcharacter	db	CR

.Text	PROC	Near

	xor	BX, BX			; 0 characters received
	mov	CS:Exitcharacter, DL

.TextLoop:
	mov	AX, Cursor		; set the cursor
	mov	ES:[SI+BX], AX


.Text0:	call	.InCh
	jz	.Text0

	cmp	AL, CS:Exitcharacter	; if we have an end character
	je	.TextEnd
	cmp	AL, ESC			; if we wish to parse for a file
	je	.TextParse
	cmp	AL, 21			; if we wish to retry = C-U
	je	.TextRedo
	cmp	AL, 7			; if we wish to quit = C-G
	je	.TextQuit
	cmp	AL, 8			; if we wish to backspace
	je	.TextDel

.TextChar:				; if we just wish to add a char
	mov	CS:[BX+Offset .TextMsg], AL

	mov	AH, lowintensity	; put it to screen
	mov	ES:[BX+SI], AX

	inc	BX			; next character.
	inc	SI			; advance the screen by one extra.

	jmp	.TextLoop

;...........................................................................
.TextRedo:	
	cmp	BX, 0				; are there 0 chars ?
	je	.TextLoop
	mov	AX, ' '+lowintensity*256	; no, then clear from scr
	mov	ES:[BX+SI], AX
	dec	BX				; one less char to clear
	dec	SI				; but adjust for scr *2
	jmp	.TextRedo

;...........................................................................
.TextQuit:
	call	.CLRMsg
	xor	BX, BX
	mov	SI, Offset .TQuit
	mov	CX, 18
	jmp	.Error0

;...........................................................................
.TextEnd:
	mov	CX, BX				; we have received BX chars
	cmp	cx, 0
	je	.TEnd2
	mov	SI, Offset .TextMsg		; This is where we stored our
						; temporary string: DI holds
						; where it should be
.TEnd1:	mov	AL, CS:[SI]			; this transfers everything
	mov	DS:[DI], AL			; to the desired location
	inc	DI
	inc	SI
	loop	.TEnd1

.TEnd2:	mov	Byte Ptr DS:[DI], 0		; oh, and signal ASCIIZ flag
	push	bx
	call	.CLRMsg				; clear the messagefield
	pop	cx
	ret
;...........................................................................

.Textdel:
	cmp	BX, 0				; if there are 0 chars...
	je	.TextDelErr
	mov	AX, ' '+lowintensity*256	; clear the cursor
	mov	ES:[BX+SI], AX
	dec	SI				; adjust to point to
	dec	BX				; previous character
	jmp	.TextLoop

.TextDelErr:
	call	Sound
	jmp	.Text0				; do nothing

CannotParse:
	call	Sound
	jmp	.text0
;...........................................................................
.TextParse:
	mov	AL, CS:Rubbish+1
	cmp	AL, ':'
	je	CannotParse
	push	DS
	mov	AX, CS
	mov	DS, AX
	mov	DX, Offset Rubbish		; DS:DX -> Rubbish
	mov	AH, 1Ah
	int	MSDOS				; DTA set

	call	AddStars

	mov	DX, Offset .TextMsg		; request first directory name
	xor	CX, CX				; no attributes
	mov	AH, 4Eh
	int	MSDOS
	jc	NoSuchFile

	mov	AH, 4Fh				; request another such file
	int	MSDOS
	jnc	Multiplefiles

	pop	DS				; now we don't need these
						; pointers anymore.

; When we reach here, we have a unique filename in rubbish.
FNT:	mov	AL, CS:[BX+(Offset Rubbish)+1Eh] ; get one new character
	cmp	AL, NUL				; check if it is the end
	je	FNTEnd
	mov	CS:[Offset .TextMsg+BX], AL	; and add it to our name

	mov	AH, nocolor			; and put it to the screen
	mov	ES:[SI+BX], AX

	inc	BX				; next character
	inc	SI
	jmp	FNT

FNTEnd:	mov	AX, Cursor			; reset the cursor
	mov	ES:[SI+BX], AX
	jmp	.Text0				; and wait for more commands


MultipleFiles:
	pop	DS
	call	Sound
	jmp	.Text0

NoFileMsg	db	'*** No such File ***'
NoSuchFile:
	pop	DS
	call	.CLRMsg
	mov	SI, Offset NoFileMsg
	mov	CX, 20
	jmp	.Error0

;...........................................................................
AddStars	PROC	NEAR		; pads with either * or *.*

	push	AX
	mov	AX, BX
AddAgain:
	dec	BX
	jz	Endreached
	cmp	Byte Ptr CS:[Offset .TextMsg+BX], '.'
	jne	Addagain

FoundPeriod:
	mov	BX, AX
	mov	Byte Ptr CS:[BX+Offset .TextMsg], '*'	; convert to ASCIIZ
	mov	Byte Ptr CS:[BX+Offset .TextMsg+1], 0
	pop	AX
	ret
EndReached:
	mov	BX, AX
	mov	Byte Ptr CS:[BX+Offset .TextMsg], '*'	; convert string to ASCIIZ
	mov	Byte Ptr CS:[BX+Offset .TextMsg+1], '.'	; parse format
	mov	Byte Ptr CS:[BX+Offset .TextMsg+2], '*'
	mov	Byte Ptr CS:[BX+Offset .TextMsg+3], 0
	pop	AX
	ret

AddStars	ENDP

.Text  ENDP

;----------------------------------------------------------------------
.NFile PROC	NEAR	; archaic but public
	ret

.NFile ENDP

;..............................
.?Save PROC	Near

	cmp	DS:BCB.Dirty, TRUE
	jne	NoQuestion

	mov	SI, Offset .?Con
	mov	CX, 38
	call	.Msg

.?Save0:call	Sound

.?Save1:call	.InCH
	jz	.?Save1
	call	.CAPS
	cmp	AL, 'N'
	je	.?Save2
	cmp	AL, CTL_G
	je	AbortQuick
	cmp	AL, 'Y'
	jne	.?Save0

	jmp	FSave

.?Save2:
NoQuestion:
	ret
AbortQuick:
	mov	SI, Offset .TQuit
	mov	CX, 18
	jmp	.Error0

.?Save ENDP

;---------------------------------------------------------------------------
Scraparea	equ	Offset BCB.File+100
Dirmaskmsg	db	'Directory Mask [*.*]: '
Entries		db	44 dup ( '|')

Directory	PROC	Near
	call	.CLRMsg			; first put up the visit file msg
	mov	SI, Offset Dirmaskmsg
	mov	CX, 22
	call	.Msg
	mov	SI, CX			; now calculate the screen message
	add	SI, SI
	add	SI, StartofMsgField	
	mov	DI, Scraparea		; load to some free space
	mov	DL, CR			; and end everything with a CR
	call	.Text			; in BCB.File+100, CX: # of chars

	cmp	cx, 2			; more than 2 characters
	ja	Dir2

	cmp	cx, 1			; one character filename
	je	Dir2

	mov	bx, scraparea
	cmp	cx, 0			; no file so default to *.*
	je	Dir1

	cmp	byte ptr Ds:[bx+1], ':'	; default drive
	jne	Dir2
	add	bx, 2	
	
Dir1:	mov	Byte Ptr DS:[bx],   '*'	; default mask : *.*
	mov	Byte Ptr DS:[bx+1], '.'
	mov	Byte Ptr DS:[bx+2], '*'
	mov	Byte Ptr DS:[bx+3],  0
	add	cx, 3
	
Dir2:	push	ds			; set DTA to entries
	push	cs
	pop	ds
	mov	dx, offset entries
	mov	ah, 1Ah
	int	MSDOS
	pop	ds

	mov	dx, Scraparea		; get first file
	sub	cx, cx
	mov	ah, 4Eh
	int	MSDOS
	jc	faildir

	cls
	cursorhome

Another:call	printentry
	mov	ah, 4Fh			; get another file
	int	MSDOS
	jc	Allreported
	jmp	Another

printentry	proc	near
	mov	cx, 20
	mov	si, offset entries +30

printentry1:
	mov	dl, cs:[si]
	inc	si
	cmp	dl, 0
	je	printedentry
	mov	ah, 6			; print one character
	int	MSDOS
	loop	printentry1

printedentry:
	mov	dl, ' '
	mov	ah, 6
printspaces:
	int	MSDOS
	loop	printspaces

	ret
printentry	endp


Allreported:
	mov	si, offset presskey
	mov	cx, 30
	call	.InvMsg
Allreported1:
	call	.Inch
	jz	Allreported1

	call	.CLRMsg			; restore msgarea
	call	Separatorline		; restore separator line for windows
	mov	ax, 7*256+0		; reinitialize last line
	jmp	Switchmenu

faildir:mov	si, offset dirfailmsg
	mov	cx, 31
	jmp	.Error0

presskey	db	'Press any key to return to MAX'
dirfailmsg	db	'*** No Such Accessible File ***'

Directory	ENDP
;---------------------------------------------------------------------------
FindFile	PROC	NEAR
	
	mov	SI, Offset InImplementation
	mov	CX, 21
	jmp	.Msg

InImplementation	db	'* In Implementation *'
;	mov	BX, 0
;	mov	CX, CS:$Buffernumber

;TBLoop:	mov	DS, CS:[BX+Offset $Buffer1]
;	shr	BX, 1
;	mov	AX, BX
;	add	BX, BX
;	add	BX, 2
;	push	AX
;	cmp	AX, CS:ActiveBuffer
;	je	SWI

FindFile	ENDP
	PROGRAM ENDS
END
```
{% endraw %}

## ESCC.ASM

{% raw %}
```
PUBLIC	.CAPS,	Escape_Character, FillParagraph, GetColumn

EXTRN	CYSave:Near, CDELK:Near, .Error0:Near, CCenter:Near
EXTRN	.ERROR1:NEAR, CDELK:Near, .MakeSpace:Near, FillColumn:Word
EXTRN	PreviousScreen:NEAR, ScrollDown:NEAR
;---------------------------------------------------------------------------

	Page ,132
NAME	FESC

TITLE Escape Character Handler

IF2
	%OUT *Pass 2*
ENDIF


Program SEGMENT PARA	PUBLIC  'code'
	ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

INCLUDE	FDEF.DEF

MJTable	dw	Offset	MInvalid	; ^@
dw	Offset	MInvalid		; ^A
dw	Offset	MInvalid		; ^B
dw	Offset	MInvalid		; ^C
dw	Offset	MInvalid		; ^D
dw	Offset	MInvalid		; ^E
dw	Offset	MInvalid		; ^F
dw	Offset	MInvalid		; ^G
dw	Offset	MRubWord		; ^H
dw	Offset	MInvalid		; ^I
dw	Offset	MInvalid		; ^J
dw	Offset	MInvalid		; ^K
dw	Offset	MInvalid		; ^L
dw	Offset	MInvalid		; ^M
dw	Offset	MInvalid		; ^N
dw	Offset	MInvalid		; ^O
dw	Offset	MInvalid		; ^P
dw	Offset	MInvalid		; ^Q
dw	Offset	MInvalid		; ^R
dw	Offset	MInvalid		; ^S
dw	Offset	MInvalid		; ^T
dw	Offset	MInvalid		; ^U
dw	Offset	MInvalid		; ^V
dw	Offset	MInvalid		; ^W
dw	Offset	MInvalid		; ^X
dw	Offset	MInvalid		; ^Y
dw	Offset	MInvalid		; ^Z
dw	Offset	MInvalid		; ^[
dw	Offset	MInvalid		; ^\
dw	Offset	MInvalid		; ^]
dw	Offset	MInvalid		; ^^
dw	Offset	MInvalid		; ^_
dw	Offset	MInvalid		; ' '
dw	Offset	MInvalid		; !
dw	Offset	MInvalid		; "
dw	Offset	MInvalid		; #
dw	Offset	MInvalid		; $
dw	Offset	MInvalid		; %
dw	Offset	MInvalid		; &
dw	Offset	MInvalid		; `
dw	Offset	MInvalid		; (
dw	Offset	MInvalid		; )
dw	Offset	MInvalid		; *
dw	Offset	MInvalid		; +
dw	Offset	MInvalid		; `
dw	Offset	MInvalid		; -
dw	Offset	MInvalid		; .
dw	Offset	MInvalid		; \
dw	Offset	MInvalid		; 0
dw	Offset	MInvalid		; 1
dw	Offset	MInvalid		; 2
dw	Offset	MInvalid		; 3
dw	Offset	MInvalid		; 4
dw	Offset	MInvalid		; 5
dw	Offset	MInvalid		; 6
dw	Offset	MInvalid		; 7
dw	Offset	MInvalid		; 8
dw	Offset	MInvalid		; 9
dw	Offset	MInvalid		; :
dw	Offset	MInvalid		; ;
dw	Offset	CStartFile		; <
dw	Offset	MInvalid		; =
dw	Offset	CEndFile		; >
dw	Offset	MInvalid		; ?
dw	Offset	MInvalid		; @
dw	Offset	MInvalid		; A
dw	Offset	WBackward		; B
dw	Offset	WCapitalize		; C
dw	Offset	MDelWord		; D
dw	Offset	MInvalid		; E
dw	Offset	WForward		; F
dw	Offset	MInvalid		; G
dw	Offset	MInvalid		; H
dw	Offset	MInvalid		; I
dw	Offset	MInvalid		; J
dw	Offset	MInvalid		; K
dw	Offset	MInvalid		; L
dw	Offset	MInvalid		; M
dw	Offset	MInvalid		; N
dw	Offset	MInvalid		; O
dw	Offset	MInvalid		; P
dw	Offset	FillParagraph		; Q
dw	Offset	MInvalid		; R
dw	Offset	MInvalid		; S
dw	Offset	MInvalid		; T
dw	Offset	WUppercase		; U
dw	Offset	PreviousScreen		; V
dw	Offset	MInvalid		; W
dw	Offset	MInvalid		; X
dw	Offset	MInvalid		; Y
dw	Offset	ScrollDown		; Z
dw	Offset	MInvalid		; [
dw	Offset	MInvalid		; \
dw	Offset	MInvalid		; ]
dw	Offset	MInvalid		; ^
dw	Offset	MInvalid		; _
dw	Offset	MInvalid		; '
					; lowercase trapped

MInvalidT0	db	'*** ESC-'
MInvalidT1	db	'? unknown ***'
$Error1	 	db	'*** FileStart ***'
$Error2	 	db	'*** FileEnd ***'
Confusedbreak	db	'*** Can not break Line ***'
PStart		dw	100h
PEnd		dw	101h


;---------------------------------------------------------------------------
Escape_Character	PROC	Near

	call	.CAPS

	cmp	AL, 'z'
	ja	MInvalid1
	
MParse:	xor	AH, AH			; clear insignificant
	add	AX, AX			; dw index
	mov	BX, AX			; get the index
	jmp	CS:MJTable [BX]		; and jump
MInvalid:
	shr	AL, 1			; to adjust for the jump table
MInvalid1:
	mov	CS:MInvalidT1, AL
	mov	SI, Offset MInvalidT0
	mov	CX, 21
	jmp	.Error0

Escape_Character  ENDP

;-------------------Escape-Sequences-Processing---------------------------
CStartFile	PROC	Near

	mov	DS:BCB.FCursor, 100h
	ret

CStartFile	ENDP
;...........................................................................
CEndFile	PROC	Near

	mov	AX, DS:BCB.FEnd
	mov	DS:BCB.FCursor, AX
	ret

CEndFile	ENDP
;---------------------------------------------------------------------------
WUppercase	PROC	NEAR
	mov	DS:BCB.Dirty, TRUE
	call	.?WBackWard
	mov	DX, DS:BCB.FCursor
WUp1:	mov	AL, DS:[BX]
	call	.CAPS
	mov	DS:[BX], AL
	inc	BX
	cmp	BX, DX
	jbe	WUp1
	ret
WUppercase	ENDP
;...........................................................................
WCapitalize	PROC	NEAR
	mov	DS:BCB.Dirty, TRUE
	mov	DX, DS:BCB.FCursor
	call	.?WBackWard
	mov	AL, DS:[BX]
	call	.CAPS
	mov	DS:[BX], AL
	inc	BX
	cmp	BX, DX
	ja	WCap3
WCap2:	mov	AL, DS:[BX]
	call	.NOCAPS
	mov	DS:[BX], AL
	inc	BX
	cmp	BX, DX
	jbe	WCap2
WCap3:	ret

WCapitalize	ENDP
;---------------------------------------------------------------------------
.CAPS  PROC	Near
	cmp	AL, 'a'
	jb	.Caps1
	cmp	AL, 'z'
	ja	.Caps1
	sub	AL, 'a'-'A'
.Caps1: ret
.CAPS  ENDP
;...........................................................................
.NOCAPS	PROC	NEAR
	cmp	AL, 'A'
	jb	.NOCAPS1
	cmp	AL, 'Z'
	ja	.NOCAPS1
	add	AL, 'a'-'A'
.NoCaps1:
	ret
.NoCAPS	ENDP

;---------------------------------------------------------------------------
WBackWard	PROC	NEAR

	call	.?WBackWard
	cmp	BX, 0
	je	WBErr
	mov	DS:BCB.FCursor, BX
	ret

WBErr:  mov	SI, Offset $Error1
	mov	CX, 17
	jmp	.Error0

WBackward	ENDP

;...........................................................................
WForward	PROC	Near

	call	.?WForward
	cmp	BX, 0
	je	WFErr
	mov	DS:BCB.FCursor, BX
	ret

WFErr:  mov	SI, Offset $Error2
	mov	CX, 16
	jmp	.Error0

WForward	ENDP

;...........................................................................
MRubWord	PROC	Near

	call	.?WBackWard
	cmp	BX, 0
	je	MRubWErr
	mov	SI, BX
	mov	CX, DS:BCB.FCursor
	sub	CX, BX
	mov	DS:BCB.FCursor, SI
	call	CYSave
	jmp	CDelK

MRubWErr:
	mov	SI, Offset $Error1
	mov	CX, 16
	jmp	.Error0

MRubWord	ENDP

;...........................................................................
MDelWord	PROC	Near
	call	.?WForWard
	cmp	BX, 0
	je	MDelWErr
	mov	SI, DS:BCB.FCursor
	mov	CX, BX
	sub	CX, SI

	call	CYSave
	jmp	CDelK

MDelWErr:
	mov	SI, Offset $Error2
	mov	CX, 16
	jmp	.Error0

MDelWord	ENDP
;---------------------------------------------------------------------------
; BUGGY !!!
;CPScreen	PROC	NEAR

	mov	BX, DS:BCB.ScrStart
	mov	AH, 79
	mov	AL, 20
CPLoop1:
	cmp	Byte Ptr [BX], LF
	je	CPPhysical
	cmp	AH, 0
	je	CPPhysical
	cmp	BX, 100h
	je	CPErr
	dec	BX
	dec	AH
	jmp	CPLoop1

CPPhysical:					; now we are on the physical
	dec	AL				; and logical line, but still
	jz	CPPhysicalFound			; have to find the filestart
	mov	AH, 79
	cmp	Byte Ptr [BX], LF
	jne	CPLoop1
	dec	BX
	jmp	CPLoop1

CPPhysicalFound:				; this can probably be improvd
	cmp	Byte Ptr ds:[bx], LF
	jne	CPPhysicl0
	dec	bx
CPPhysicl0:
	mov	AL, 0
	mov	AH, 1
CPLoop2:
	dec	BX
	cmp	BX, 100h
	jbe	CPStartFound
	cmp	Byte Ptr [BX], LF
	je	CPStartFound
	inc	AL
	cmp	AL, 79
	jne	CPLoop2

	add	AH, 79
	mov	AL, 0
	jmp	CPLoop2

CPStartFound:
	cmp	BX, 100h
	ja	CPLoop3
	mov	BX, 100h
	jmp	CPEnd

CPLoop3:
	inc	BX
	dec	AH
	je	CPEnd
	jmp	CPLoop3

CPEnd:
	mov	DS:BCB.ScrStart, BX
	mov	DS:BCB.FCursor, BX
	ret

CPErrT  db	'>>>Incomplete ESC-V<<<'

CPErr:
	mov	DS:BCB.ScrStart, BX
	mov	DS:BCB.FCursor, BX
	mov	SI, Offset CPErrT
	mov	CX, 22
	jmp	.Error1


;CPScreen	ENDP

;---------------------------------------------------------------------------
.?WForward	PROC	Near

	mov	BX, DS:BCB.FCursor
	mov	DX, DS:BCB.FEnd
	dec	BX			; initialize

; find space character
.?WFL1:	cmp	BX, DX
	jae	.?WForwardErr
	inc	BX
	mov	AL, DS:[BX]
	cmp	AL, LF
	je	.?WFL2
	cmp	AL, CR
	je	.?WFL2
	cmp	AL, ' '
	je	.?WFL2
	cmp	AL, TAB
	je	.?WFL2
	jmp	.?WFL1

; find non space
.?WFL2:	cmp	BX, DX		  ; FEnd
	jae	.?WFL2Ex
	inc	BX
	mov	AL, DS:[BX]
	cmp	AL, LF
	je	.?WFL2
	cmp	AL, ' '
	je	.?WFL2
	cmp	AL, CR
	je	.?WFL2
	cmp	AL, TAB
	je	.?WFL2

.?WFL2Ex:ret		; BX points to first character of next word

.?WForwardErr:
	mov	BX, 0		; Error indicator
	ret

.?WForward	ENDP

;---------------------------------------------------------------------------
Comment %
	Back (1)
	if space then
			Back (nonspace)
			Back (space)
			Forward (1)
		 else
			Back (space)
			Forward (1)
	END
%

.?WBackward	PROC	Near

	mov	BX, DS:BCB.FCursor
	cmp	BX, 100h
	jbe	.?WBackwardErr
	dec	BX
	mov	AL, DS:[BX]
	cmp	AL, CR
	je	.?WSP
	cmp	AL, ' '
	je	.?WSP
	cmp	AL, TAB
	je	.?WSP
	cmp	AL, LF
	je	.?WSP
.?WBMerge:
	cmp	BX, 100h
	jb	.?WBM1
	dec	BX
	mov	AL, DS:[BX]
	cmp	AL, CR
	je	.?WBM1
	cmp	AL, LF
	je	.?WBM1
	cmp	AL, ' '
	je	.?WBM1
	cmp	AL, TAB
	je	.?WBM1
	jmp	.?WBMerge

.?WBM1: inc	BX
	ret
.?WBackwardErr:
	mov	BX, 0
	ret

.?WSP:  cmp	BX, 100h
	jb	.?WBMerge
	dec	BX
	mov	AL, DS:[BX]
	cmp	AL, CR
	je	.?WSP
	cmp	AL, LF
	je	.?WSP
	cmp	AL, ' '
	je	.?WSP
	cmp	AL, TAB
	je	.?WSP
	jmp	.?WBMerge

.?WBackward	ENDP

;---------------------------------------------------------------------------

FillParagraph	PROC	Near
	mov	DS:BCB.Dirty, TRUE
	call	.FindLastParagraph		; fills PStart
	call	.FindEndParagraph		; fills PEnd
	call	.FillBetween			; fills the text
	ret
FillParagraph	ENDP

;---------------------------------------------------------------------------
.FindlastParagraph	PROC	Near
	mov	BX, DS:BCB.FCursor

Findit:	cmp	BX, 100h
	jbe	FoundlastParagraph

	cmp	Word Ptr DS:[BX-2], CRLF
	je	FoundLineStart
Findit2:
	dec	BX
	jmp	Findit

FoundLineStart:
	cmp	Word Ptr DS:[BX-4], CRLF
	jne	Findit2

FoundLastParagraph:
	mov	CS:PStart, BX
	ret
.FindLastParagraph	ENDP

;...........................................................................
.FindEndParagraph	PROC	Near
	mov	BX, CS:PStart

FindE:	cmp	BX, DS:BCB.FEnd
	jae	FoundEndParagraph

	cmp	Word Ptr DS:[BX], CRLF
	je	FoundLineStart2
FindE2:
	inc	BX
	jmp	FindE

FoundLineStart2:
	cmp	Word Ptr DS:[BX+2], CRLF
	jne	FindE2

FoundEndParagraph:
	mov	CS:PEnd, BX
	ret
.FindEndParagraph	ENDP

;---------------------------------------------------------------------------
.FillBetween	PROC	NEAR
	mov	BX, CS:PStart
	mov	DX, CS:PEnd		; where fill stops

F0:	cmp	BX, CS:Pend
	jae	EndFillBetween
	cmp	Word Ptr DS:[BX], CRLF
	jne	F1
	call	DeleteCRLF
F1:	call	GetColumn
	cmp	CX, CS:FillColumn
	jae	BreakLine
	inc	BX
	jmp	F0

EndFillBetween:
	ret

;--------
BreakLine:
RetreatToWord:
	mov	AL, DS:[BX]		; first go back until you find a
	cmp	AL, ' '			; Space
	je	AtSpace
	cmp	AL, TAB
	je	AtSpace
	cmp	AL, LF
	je	RTWErr
	dec	BX
	jmp	RetreatToWord

AtSpace:
					; now we are on one space in front of
					; a word
	push	DS:BCB.FCursor
	mov	DS:BCB.FCursor, BX	; allow the extra LF
	mov	CX, 1
	call	.MakeSpace
	pop	DS:BCB.FCursor
	mov	Word Ptr DS:[BX], CRLF
	cmp	BX, DS:BCB.FCursor
	ja	BLE
	inc	DS:BCB.FCursor
BLE:	inc	CS:Pend
	add	BX, 2
	jmp	F0

RTWErr:	mov	SI, Offset Confusedbreak
	mov	CX, 26
	jmp	.Error0
;...........................................................................
DeleteCRLF:
	cmp	BX, DS:BCB.FCursor
	jae	DCRLF1
	dec	DS:BCB.FCursor			; adjust the cursor
DCRLF1:	mov	SI, BX
	mov	CX, 1
	call	CDELK				; and delete 2 characters
	mov	Byte Ptr DS:[BX], ' '
	dec	CS:Pend				; adjust end of fill
	ret
;...........................................................................
.FillBetween	ENDP


;...........................................................................
GetColumn	PROC	NEAR
; on entry BX points to a character on a line. On Exit, CX holds the column
; on which BX is.

	push	DX
	mov	DX, BX			; remember where we started

GC1:	dec	BX			; first retreat to the CRLF
	cmp	Byte Ptr DS:[BX], LF
	je	GC2
	cmp	BX, 0FFh
	je	GC2
	jmp	GC1

;-------
GC2:	mov	CX, 1			; Column 1, Character 1 on line
	inc	BX


GC3:	cmp	BX, DX
	je	GCQ			; if we reach the cursor, we are fine

	cmp	Byte Ptr DS:[BX], TAB
	jne	GC4

	push	DX			; CX:= CX+(8- [(CX-1) mod 8])
	push	CX
	dec	CX			; CX:=CX-1
	and	CX, 111b		; CX:=CX mod 8
	mov	DX, 8			; DX:= 8-CX
	sub	DX, CX
	pop	CX
	add	CX, DX			; CX:=CX+DX
	pop	DX

	dec	CX
GC4:	inc	CX				; TAB = 8, Char = 1
	inc	BX
	jmp	GC3

GCQ:	pop	DX
	ret

GetColumn	ENDP

Program	ENDS
	END

```
{% endraw %}

## ESCXC.ASM

{% raw %}
```
PUBLIC	Extended_Character, Wrapmode

EXTRN	.CAPS:Near, .Error0:Near, .Msg:Near, .Makespace:near, CDELK:Near
EXTRN	.CLRMsg:Near, .Screen:NEAR, FMODELINE:Near, .InCH:NEAR
EXTRN	Sound:Near, .OUTSTR:NEAR

EXTRN	NoModeline:BYTE, LastLineUpdate:Near, LastLastLine:Word

;---------------------------------------------------------------------------
	page	,132
NAME ESCX

TITLE extended commands ESC-X

IF2
       %OUT *Pass 2*
ENDIF

INCLUDE        FDEF.DEF

Program        SEGMENT PARA    PUBLIC  'code'
       ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

;-------------------------------------------------------------------------
CaseReplace	db	TRUE
QUERY		db	TRUE
Toggling	db	'[Toggling Wrap Mode]'
LastSearchStart	dw	100h
Confirmswitch	db	'Skip=<BS>   Replace=<SPACE>  Abort=<CTL-G>'
AbortedReplace	db	'*** User Abort ***'
ExitCharacter	db	CR
Cursor		equ	lowintensity*256+178


$Free	=	(Offset MXInvalid)

MXJTable	dw	$Free	; ^@
dw	$Free		; ^A
dw	$Free		; ^B
dw	$Free		; ^C
dw	$Free		; ^D
dw	$Free		; ^E
dw	$Free		; ^F
dw	$Free		; ^G
dw	$Free		; ^H
dw	$Free		; ^I
dw	$Free		; ^J
dw	$Free		; ^K
dw	$Free		; ^L
dw	$Free		; ^M
dw	$Free		; ^N
dw	$Free		; ^O
dw	$Free		; ^P
dw	$Free		; ^Q
dw	$Free		; ^R
dw	$Free		; ^S
dw	$Free		; ^T
dw	$Free		; ^U
dw	$Free		; ^V
dw	$Free		; ^W
dw	$Free		; ^X
dw	$Free		; ^Y
dw	$Free		; ^Z
dw	$Free		; ^[
dw	$Free		; ^\
dw	$Free		; ^]
dw	$Free		; ^^
dw	$Free		; ^_
dw	$Free		; ' '
dw	$Free		; !
dw	$Free		; "
dw	$Free		; #
dw	$Free		; $
dw	$Free		; %
dw	$Free		; &
dw	$Free		; `
dw	$Free		; (
dw	$Free		; )
dw	$Free		; *
dw	$Free		; +
dw	$Free		; `
dw	$Free		; -
dw	$Free		; .
dw	$Free		; \
dw	$Free		; 0
dw	$Free		; 1
dw	$Free		; 2
dw	$Free		; 3
dw	$Free		; 4
dw	$Free		; 5
dw	$Free		; 6
dw	$Free		; 7
dw	$Free		; 8
dw	$Free		; 9
dw	$Free		; :
dw	$Free		; ;
dw	$Free		; <
dw	$Free		; =
dw	$Free		; >
dw	$Free		; ?
dw	$Free		; @
dw	$Free		; A
dw	$Free		; B
dw	$Free		; C
dw	$Free		; D
dw	$Free		; E
dw	$Free		; F
dw	$Free		; G
dw	$Free		; H
dw	$Free		; I
dw	$Free		; J
dw	$Free		; K
dw	$Free		; L
dw	Offset ToggleLastLine		; M
dw	$Free		; N
dw	$Free		; O
dw	$Free		; P
dw	Offset QuerySearchReplace	; Q
dw	$Free		; R
dw	Offset SearchReplace		; S
dw	$Free		; T
dw	$Free		; U
dw	$Free		; V
dw	Offset ToggleWrapmode		; W
dw	$Free		; X
dw	$Free		; Y
dw	$Free		; Z
dw	$Free		; [
dw	$Free		; \
dw	$Free		; ]
dw	$Free		; ^
dw	$Free		; _
dw	$Free		; '
					; lowercase trapped

MXInvalidT0	db	'*** ESC-X '
MXInvalidT1	db	'? unknown ***'
$Error1         db      '*** FileStart ***'
$Error2         db      '*** FileEnd ***'


;---------------------------------------------------------------------------
Extended_Character	PROC	Near

	call	.CAPS

	cmp	AL, 'z'
	ja	MXInvalid
	
MxParse:xor	AH, AH			; clear insignificant
	add	AX, AX			; dw index
	mov	BX, AX			; get the index
	jmp	CS:MXJTable [BX]	; and jump

MXInvalid:
	mov	CS:MXInvalidT1, AL
        mov     SI, Offset MXInvalidT0
        mov     CX, 23
        jmp     .Error0

Extended_Character  ENDP

;---------------------------------------------------------------------------
ToggleWrapmode	PROC	Near

	xor	DS:BCB.EDMode, Wrapmode
	mov	SI, Offset Toggling
	mov	CX, 20
	jmp	.Msg

ToggleWrapmode	ENDP
;---------------------------------------------------------------------------


;---------------------------------------------------------------------------
; Search and Replace
Skip	equ	8
String1	db	80 dup ('?')
STRLEN1	dw	0
String2	db	80 dup ('?')
STRLEN2	dw	0
StringLength	equ	79
SeaMsg	db	'Replace string <CR>:'
QSeaMsg	db	'Query Replace string <CR>:'
RepMsg	db	'with string <CR>:'
DoneMsg	db	'[Done]'

;---------------------------------------------------------------------------
ToggleLastLine	PROC	NEAR
	xor	CS:Nomodeline, Toggle
	mov	SI, CS:LastLastLine
	call	LastLineupdate
	ret
ToggleLastLine	ENDP
;---------------------------------------------------------------------------
QuerySearchReplace	PROC	Near
	mov	CS:Query, TRUE

	call	.CLRMsg
	mov	SI, Offset QSeaMsg
	mov	CX, 26

	call	.SRPL
	ret
QuerySearchReplace	ENDP
;---------------------------------------------------------------------------
SearchReplace	PROC	NEAR
	mov	CS:Query, FALSE

	call	.CLRMsg
	mov	SI, Offset SeaMsg
	mov	CX, 20

	call	.SRPL
	ret
SearchReplace	ENDP

;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
.SRPL	PROC	NEAR

	call	.Msg

	mov	SI, CX			; now calculate the screen message
	add	SI, SI
	add	SI, StartofMsgField
	mov	DI, Offset String1	; load to string 1
	mov	DL, CR			; and end everything with a CR
	call	.GetMsg			; result in String1, CX: # of chars

	cmp	CX, 0
	jne	Continue1
	jmp	AbortReplace
Continue1:
	mov	CS:STRLEN1, CX
	cmp	CS:CaseReplace, TRUE
	jne	LeaveCase

	mov	SI, Offset String1
Changecase:
	mov	AL, CS:[SI]
	call	.CAPS
	mov	CS:[SI], AL
	inc	SI
	loop	Changecase
leavecase:
	call	.CLRMsg
	mov	SI, Offset RepMsg
	mov	CX, 17
	call	.Msg

	mov	SI, CX			; now calculate the screen message
	add	SI, SI
	add	SI, StartofMsgField
	mov	DI, Offset String2	; load to string 1
	mov	DL, CR			; and end everything with a CR
	call	.GetMsg			; result in String1, CX: # of chars

	push	DS:BCB.FCursor

	mov	CS:STRLEN2, CX
	mov	SI, DS:BCB.FCursor
	mov	CS:LastSearchStart, SI
SRLoop:	call	SearchforStr1
	cmp	SI, 0
	je	NotFound
	call	AskforAction
	cmp	AL, Skip
	je	SRLoop

	call	Replace1with2
	jmp	SRLoop
NotFound:
	pop	DS:BCB.FCursor
	call	.CLRMsg
	call	Sound
	mov	SI, Offset DoneMsg
	mov	CX, 6
	jmp	.Msg

.SRPL	ENDP
;---------------------------------------------------------------------------
SearchforStr1	PROC	NEAR
	mov	SI, CS:LastSearchStart
	mov	DX, CS:STRLEN1
	call	.Find
	mov	CS:LastSearchStart, SI
	inc	CS:LastSearchStart
	ret
SearchforStr1	ENDP
;---------------------------------------------------------------------------
AbortReplace:
	mov	SI, Offset AbortedReplace
	mov	CX, 18
	jmp	.Error0


AskforAction	PROC	NEAR
	cmp	CS:QUERY, TRUE
	je	AskComplicated
	push	SI
	mov	DS:BCB.FCursor, SI
	pop	SI
	mov	AL, ' '
	ret
AskComplicated:
				; here check whether question necessary
	push	SI
	add	SI, CS:STRLEN1
	mov	DS:BCB.FCursor, SI

	call	.Screen		; maybe put all into inverse

	push	DS:BCB.ScrCursor

	mov	SI, CS:STRLEN1
	sub	DS:BCB.FCursor, SI

	call	.Screen

	pop	SI		; get the start of the to be replaced word

	mov	BX, DS:BCB.ScrCursor
RedoPaint:
	cmp	BX, SI
	jae	FinishedPaint
	mov	Byte Ptr ES:[BX+1], modelinecolor
	inc	BX
	inc	BX
	jmp	RedoPaint

FinishedPaint:
	call	FModeline

	call	.CLRMsg
	mov	SI, Offset ConfirmSwitch
	mov	CX, 42
	call	.Msg

AA1:	call	.Inch
	jz	AA1

	cmp	AL, CTL_G
	je	Abortreplace

	cmp	AL, ' '
	je	OKret

	cmp	AL, Skip
	je	OKret

	call	Sound
	jmp	AA1

OKret:	pop	SI
	ret

AskforAction	ENDP

;---------------------------------------------------------------------------
Replace1with2	PROC	NEAR
	mov	AX, DS
	mov	ES, AX
	mov	CX, CS:StrLen1

	call	CDELK			; killed string 1

	mov	AX, CS
	mov	ES, AX
	push	SI
	mov	SI, Offset String2
	mov	CX, CS:StrLen2
	call	.OutStr
	pop	SI
	ret

Replace1with2	ENDP
;---------------------------------------------------------------------------
Wildcard	EQU	10	; ^J
.FIND	PROC	Near
; SI -> Start of Search	DX  -> # characters in Searchbuffer

	dec	SI
.FNew:  xor	BX, BX  ; last try unsuccessful, try one character further
	mov	DI, Offset String1
	inc	SI
.FMay:  cmp	SI, DS:BCB.FEnd  ; all characters so far match
	jae	.FErr
	mov	AH, CS:[DI+BX]
	cmp	AH, Wildcard
	je	.F1Mat
	mov	AL, DS:[SI+BX]
	call	.CAPS
	cmp	AL, AH
	jne	.FNew
.F1Mat: inc	BX		; one character matches
	cmp	BX, DX
	jb	.FMay

.FFound:mov	AH, 0
	ret
.FErr:  mov	AH, 0FFh
	sub	SI, SI
	ret

.Find	ENDP

;...........................................................................
; DI holds where the message shall go

.GetMsg	PROC	NEAR
	xor	BX, BX			; 0 characters received
	mov	CS:Exitcharacter, DL

.TextLoop:
	mov	AX, Cursor		; set the cursor
	mov	ES:[SI+BX], AX


.Text0:	call	.InCh
	jz	.Text0

	cmp	AL, CS:Exitcharacter	; if we have an end character
	je	.TextEnd
	cmp	AL, 21			; if we wish to retry = C-U
	je	.TextRedo
	cmp	AL, 7			; if we wish to quit = C-G
	je	.TextQuit
	cmp	AL, 8			; if we wish to backspace
	je	.TextDel

.TextChar:				; if we just wish to add a char
	cmp	BX, StringLength
	jae	FailLength

	mov	CS:[BX+DI], AL

	mov	AH, lowintensity	; put it to screen
	mov	ES:[BX+SI], AX

	inc	BX			; next character.
	inc	SI			; advance the screen by one extra.

	jmp	.TextLoop
FailLength:
	call	Sound
	jmp	.TextLoop
;...........................................................................
.TextRedo:	
	cmp	BX, 0				; are there 0 chars ?
	je	.TextLoop
	mov	AX, ' '+lowintensity*256	; no, then clear from scr
	mov	ES:[BX+SI], AX
	dec	BX				; one less char to clear
	dec	SI				; but adjust for scr *2
	jmp	.TextRedo

;...........................................................................
.TextQuit:
	call	.CLRMsg
	xor	BX, BX
	mov	SI, Offset AbortedReplace
	mov	CX, 18
	jmp	.Error0

;...........................................................................
.TextEnd:
	mov	CX, BX
	ret
;...........................................................................

.Textdel:
	cmp	BX, 0				; if there are 0 chars...
	je	.TextDelErr
	mov	AX, ' '+lowintensity*256	; clear the cursor
	mov	ES:[BX+SI], AX
	dec	SI				; adjust to point to
	dec	BX				; previous character
	jmp	.TextLoop

.TextDelErr:
	call	Sound
	jmp	.Text0				; do nothing
.GetMsg	ENDP



;---------------------------------------------------------------------------
	PROGRAM	ENDS
END
```
{% endraw %}

## HELP.ASM

{% raw %}
```
PUBLIC  FHelp

EXTRN	LastLabel:Near
EXTRN	.Screen:Near, .Error0:Near, .InCH:Near, Sound:near, .Msg:Near
EXTRN	Separatorline:Near
EXTRN	.CLRMsg:Near
EXTRN	Switchmenu:Near

;---------------------------------------------------------------------------
	; This module executes the HELP interpreter. It reads in the file
	; MAX.HLP, and executes the user-typed commands. It only uses
	; standard DOS and BIOS calls for Keyboard, Diskette and Screen Access

Title Help Facility

program segment	 para	public	'code'
	assume  cs:program, ds:program, es:program, ss:program

;---------------------------------------------------------------------------
	INCLUDE		FDEF.DEF

	readonly	equ	0	; MSDOS call numbers
	fileopen	equ	3dh
	fileread	equ	3fh
	fileclose	equ	3eh
	msdos		equ	21h

	backspace	equ	8	; options other than  numbers
	exit1		equ	1Bh	; quit via ESC, SPACE or CTL-G
	exit2		equ	' '
	exit3		equ	7

	cursor	macro	x, y		; SCREEN macro: moves the cursor
		mov	dh, x		; to location x, y
		mov	dl, y
		mov	ah, 2
		mov	bh, 0
		int	10h
	endm

	cls	macro			; SCREEN
		mov	cx, 0		; clears the screen
		mov	dx, 184fh
		mov	bh, 7
		mov	ax, 600h
		int 10h
	endm

numberofoptions	db	0
optionaddresses	dw	8 dup (0)
helpindex	dw	0
helpfilehandle	dw	0
helpsaveds	dw	0
Strange		db	'*** File Disappeared ***'

Returnstackptr	dw	Offset Returnstack
ReturnStack	dw	20 dup (2)

;***************************************************************************
fhelp	proc	near

	cursor	0, 0

	mov	ax, screensegment
	mov	es, ax

	mov	cs:helpsaveds, ds
	call	helpinit		; this will open the file

	call	.help			; while this will do all the help

	call	helpexit		; close the file
	mov	ds, cs:helpsaveds
	ret


fhelp	endP

;***************************************************************************
HFile	db	ordinary_help, 00	; first search on connected
HHFile	db	default_help , 0	; default location if not found

HelpInit	PROC	Near

	push	CS			; initialize the segment
	pop	DS			; operations to take place in CS

	call	HFOpen
	ret

;...........................................................................
HFOpen	PROC	Near
	mov	DX, Offset HFile	; now open the file
	mov	AL, Readonly
	mov	AH, FileOpen
	int	MSDOS
	jnc	HI1
		cmp	AX, 2		; error
		je	Filenotfound
		jmp	DOSERROR
Filenotfound:	mov	DX, Offset HHFile ; try again with default drive
		mov	AL, ReadOnly
		mov	AH, FileOpen
		int	MSDOS
		jnc	HI1
		jmp	DOSERROR

HI1:	mov	CS:HelpFileHandle, AX	; save the filehandle
	ret

DOSconfused	db	'*** Can not open MAX.HLP ***'
DOSError:
	mov	DS, CS:HelpSaveDS
	mov	SI, Offset DOSConfused
	mov	CX, 28
	jmp	.Error0

HFOpen	ENDP

HelpInit	ENDP
;***************************************************************************
.HELP	PROC	Near

	mov	BX, CS:HelpFileHandle	; filehandle
	mov	DX, CS:Helpindex

	call	HSeek			; load it from
	call	HLoad			; our disk

	call	MemSeek			; look for the first 00 00
	cls
	call	HHeader			; get the nodename
	Cursor	3, 0
	call	HScreen			; print the help screen
	call	HOptions		; output the options

ComWait:call	.InCH			; wait for a character to be pressed
	jz	ComWait

	cmp	AL, Exit1
	je	.HelpExit
	cmp	AL, Exit2
	je	.HelpExit
	cmp	AL, Exit3
	je	.HelpExit
	cmp	AL, Backspace
	je	Stackret

	sub	AL, '1'
	cmp	AL, CS:NumberofOptions
	jb	CW1
	call	Sound
	jmp	Comwait

CW1:	xor	AH, AH
	add	AL, AL
	mov	BX, AX
	mov	AX, CS:Optionaddresses[BX]

	mov	DI, CS:ReturnStackPtr	; push Nodename
	push	AX
	mov	AX, CS:Helpindex
	mov	CS:[DI], AX
	pop	AX
	add	DI, 2
	mov	CS:ReturnStackPtr, DI

	mov	CS:Helpindex, AX
	jmp	.Help
.HelpExit:
	mov	ax, 7*256+0		; reinitialize last line
	call	Switchmenu
	call	.CLRMsg			; clear msg area
	jmp	Separatorline		; and rebuild separatorline

Stackret:
	mov	DI, CS:ReturnStackPtr
	sub	DI, 2
	mov	CS:ReturnStackPtr, DI		; pop Nodename

	cmp	DI, Offset ReturnStack		; underflow
	jb	.HelpExit

	mov	AX, CS:[DI]
	mov	CS:Helpindex, AX
	jmp	.Help
	
;...........................................................................
HSeek	PROC	Near
	sub	CX, CX
	mov	AL, 0
	mov	AH, 42h
	int	MSDOS
	ret
HSeek	ENDP

;...........................................................................
HLoad	PROC	Near
	mov	DX, Offset LastLabel	; make it easy
	mov	CX, 2150		; can find it within 2000 bytes
	mov	AH, 3Fh			; and load it
	int	MSDOS
	ret
HLoad	ENDP

.Help	ENDP
;---------------------------------------------------------------------------

Memseek	PROC	Near
	mov	AL, NUL
	mov	SI, (Offset LastLabel)-1
	mov	CX, 2150

MSLoop:	inc	SI
	cmp	Byte Ptr CS:[SI], Newpage
	loopne	MSLoop
	inc	SI				; step over the ^L
	ret

Memseek	ENDP
;---------------------------------------------------------------------------
HHeader	PROC	Near
	cmp	Byte Ptr CS:[SI], NUL
	jnz	HH1
	mov	SI, Offset Strange
	mov	CX, 24
	call	.Msg
	call	Sound
	jmp	HelpExit
HH1:	mov	DI, 2*(160+25)

HHL:	mov	AL, CS:[SI]		; take a character from nodename
	cmp	AL, NUL
	je	EndOfName
	inc	SI
	mov	AH, modelinecolor	; and put it to the screen
	mov	ES:[DI], AX
	add	DI, 2
	jmp	HHL
EndofName:
	ret
HHeader	ENDP
;---------------------------------------------------------------------------
HScreen	PROC	Near
	mov	DX, SI			; output the node
	mov	AH, 9
	int	MSDOS

HS1:	mov	DL, CS:[SI]		; now search for the end of the text
	inc	SI
	cmp	DL, '$'
	jne	HS1
	ret
HScreen	ENDP
;---------------------------------------------------------------------------
HOptions	PROC	NEAR
	cmp	Byte Ptr DS:[SI], NUL
	je	NoOptions

	mov	DI, 23*160		; put it to screen
	cursor	24, 0

	mov	BX, Offset OptionAddresses
	mov	DX, 0

Nextoption:
	inc	DX			; BX incremented in addresspreserve
	call	AddressPreserve
	call	ChoicePrint
	call	OptPrint
	cmp	Byte Ptr DS:[SI], NUL	; a double NUL ends everything
	jne	Nextoption
	mov	CS:NumberofOptions, DL
	ret
Nooptions:
	mov	CS:NumberofOptions, 0
	ret

;...........................................................................
AddressPreserve	PROC	Near

	push	CX
	mov	AL, CS:[SI]		; calculate first 8 bit
	inc	SI
	call	Get16
	mov	CH, AL

	mov	AL, CS:[SI]
	inc	SI
	call	Get8
	add	CH, AL

	mov	AL, CS:[SI]
	inc	SI
	call	Get16
	mov	CL, AL

	mov	AL, CS:[SI]
	inc	SI
	call	Get8
	add	CL, AL

	mov	CS:[BX], CX
	add	BX, 2
	pop	CX
	ret

Get8	PROC	Near		; convert an ASCII to the less significant
	cmp	AL, 'A'		; 4 bits of the AL register
	jae	Get8Ch
	sub	AL, '0'		; '0' -> 0
	ret
Get8Ch:	sub	AL, 'A'-10	; 'A' -> A
	ret
Get8	ENDP

Get16	PROC	Near
	call	Get8		; put the number as a lower 8 bit
	shl	AL, 1		; and put it to the higher one
	shl	AL, 1
	shl	AL, 1
	shl	AL, 1
	ret
Get16	ENDP
AddressPreserve	ENDP	

ChoicePrint	PROC	Near
	mov	Word Ptr ES:[DI], 20
	add	DI, 2
	mov	Word Ptr ES:[DI], 'F'+modelinecolor*256
	add	DI, 2
	mov	DH, modelinecolor
	add	DL, '0'
	mov	Word Ptr ES:[DI], DX	; the number of the function
	sub	DL, '0'
	add	DI, 2
	mov	Word Ptr ES:[DI], '='+modelinecolor*256
	add	DI, 2
	ret
ChoicePrint	ENDP

OptPrint	PROC	NEAR
	mov	AL, CS:[SI]
	inc	SI
	cmp	AL, 0
	je	EndOption
	mov	AH, nocolor
	mov	ES:[DI], AX
	add	DI, 2
	jmp	OptPrint
EndOption:
	ret

OptPrint	ENDP

HOptions	ENDP

HelpExit	PROC	Near
	mov	BX, CS:HelpFileHandle
	mov	AH, FileClose
	int	MSDOS
	mov	CS:HelpIndex, 0
	mov	DI, 23*160
	mov	AX, nocolor*256+' '
	mov	CX, 79
	rep	stosw
	mov	CS:ReturnStackPtr, Offset ReturnStack	; to reenter for DEL
	ret
HelpExit	ENDP

	PROGRAM	ENDS
END


```
{% endraw %}

## LAST.ASM

{% raw %}
```
Public LastLabel

EXTRN	.Error0:Near
;---------------------------------------------------------------------------
PROGRAM SEGMENT Para    PUBLIC  'Code'
	Assume	CS:Program, DS:Program

LastLabel:	mov	CX, 10
		jmp	.Error0
PROGRAM ENDS
	END
```
{% endraw %}

## MAIN.ASM

{% raw %}
```
PUBLIC	.SCREEN
PUBLIC  .InCh, .OutCh, .OutStr, .Piss, .?Col, CRUBOUT
PUBLIC  .Error0, .Error1, Sound
PUBLIC  $History, $KBufPtr, $KBufStart, $KBufEnd, .Makespace, MainScreenDraw
PUBLIC	MainCommand

EXTRN	FSCREEN:NEAR, FPARSE:NEAR, FMODELINE:NEAR
EXTRN	CCENTER:NEAR, .MSG:NEAR
EXTRN	ESCAPE_CHARACTER:NEAR, EXTENDED_CHARACTER:NEAR
EXTRN	CTRL_X_SEQUENCE:NEAR, CTRL_CHARACTER:NEAR, FVINIT:NEAR
EXTRN	CDELK:NEAR, $REPEAT:WORD, .CLRMsg:Near, $NoUpdate:Word
EXTRN	CBACK:NEAR, WindowStart:Word, WindowEnd:Word, GetColumn:Near
EXTRN	LastLineUpdate:NEAR, LASTLASTLine:WORD, .InvMsg:Near
EXTRN	SwitchMenu:Near

EXTRN	MACPtr:Word, MacCtr:Byte, MacBack:Byte, MacArg:Word
EXTRN	MacroDefinition:Byte, MacroInvocation:Byte, Store:Byte

EXTRN	LastLabel:Near

EXTRN	$StackInit:WORD, Alloc:NEAR

;---------------------------------------------------------------------------
	;	MAX
	;
	;	This is the main routine calling all other routines. Some
	;	remarks at the end of this file

PROGRAM SEGMENT Para	PUBLIC  'Code'
	Org 100h

;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
%Out	Definitions

	INCLUDE		FDEF.DEF

if	mono
	noflicker = false
endif

	Autotype	equ	70	; 70 characters maximum can be typed
					; before they are all actually
					; inserted in buffer ( and not only
					; quickly to screen )

	MS_FN	MACRO	Fun
		mov	AH, Fun
		int	21h
	ENDM

	Prt	MACRO	text
		push	DX
		push	AX
		push	DS
		mov	AX, CS
		mov	DS, AX
		mov	DX, Offset text
		MS_FN	9
		pop	DS
		pop	AX
		pop	DX
	ENDM


	case	MACRO	Index, Table	;; does a near jump via an Indextable
		push	BX		;; to an 8bit Register
		push	AX
		mov	BL, Index
		sub	BH, BH
		add	BX, BX
		call	CS:[BX]. Table
		pop	AX
		pop	BX
	ENDM







;***************************************************************************
Main	PROC	Far
	ASSUME  CS:PROGRAM, DS:PROGRAM, ES:PROGRAM, SS:PROGRAM

	;**************
	jmp	MAX
	;**************

;***************************************************************************
; Data Section

Welcome	db	'		MAX   [Version 1.01], '
	db	CR, LF
	db	'		(C) 1984, Ivo Welch. All Rights Reserved.'
	db	CR, LF
	db	CR, LF, LF, LF
	db  'This software is protected by U.S. Copyright Law (Title 17 U.S. code).'
	db	CR, LF
	db  'Unauthorized reproduction and/or sales may result in imprisonment of up'
	db	CR, LF
	db  'to one year and fines of up to Dollar 10,000 (17 USC 506).'
	db	CR, LF, LF
	db  'Copyright Infringers may be subject to civil liability.'
	db	CR, LF, LF, '$'

	Copyright	db	'                                                                 [MAX, Copyright (C) Ivo Welch, 1984]'

BNoFit		db	' INSUFFICIENT MEMORY [NO BUFFER SPACE]$'
Helpcode	db	'00'

MEMsg		db	'*** Macro Invocation inside Definition ***'
MEMsg2		db	'*** Macro Overflow ***'
MacCancel	db	'*** User Abort ***'

$History	db	11 DUP (7)
$KBufptr	dw	Offset $KBufStart
$KBufStart	db	70 DUP ( '$')
$KBufEnd	db	'()'

Commandtable	dw	Offset Character
		dw	Offset Ctrl_Character
		dw	Offset Ctrl_X_Sequence
		dw	Offset Escape_Character
		dw	Offset Extended_Character



;***************************************************************************

MAX:					; initialize the SCREEN
	mov	CX, 0			; clear the screen via BIOS
	mov	dx, 184fh
	mov	bh, 7
	mov	AX, 600h
	int 10h

	mov	AH, 1			; set the cursor to block via BIOS
	mov	CH, 0
	mov	CL, 0Fh
	int	10h

	mov	AH, 2			; Cursor home
	sub	DX, DX
	mov	bh, 0
	int	10h

	mov	CX, Offset LastLabel+110h	; and so with this



	Prt	Welcome			; say Hi via DOS

	cld
	call	Alloc			; allocate buffer space
	call	FVINIT			; visit default files
					; afterwards, ES=DS=CS:$Buffer1

	mov	AH, 1			; set the cursor to block
	mov	CH, 0
	mov	CL, 0Fh
	int	10h

	mov	SI, Offset CopyRight	; display a second copyright msg
	mov	CX, 101
	call	.Msg

	mov	AX, 7*256+0		; and initialize the menu at the
	nop				; last line
	call	Switchmenu

MainScreenDraw:
		call	.Screen		; display the first screen

MainWait:
	call	FModeline		; always update modelines in spare t
	call	FParse			; chack for newly typed character
	or	AH, AH
	jz	MainWait		; none, so reupdate

MainCommand:
	dec	AH			; determine CTL-, ESC-, ESC-X or
	case	AH, CommandTable	; other such character, and call

	cmp	CS:$Repeat, 0		; and do it until the arg is 0
	jz	MainScreenDraw
	dec	CS:$Repeat
	jz	MainScreenDraw

	mov	AX, Word Ptr CS:$Repeat+2	; but reload the command
	mov	DL, Byte Ptr CS:$Repeat+4	; that was pressed
	jmp	MainCommand

Main	ENDP



;***************************************************************************
	; Subroutines

	; Character [(AL=Character) -> (*)]

Character	PROC	Near
	mov	DS:BCB.Dirty, TRUE	; buffer is modified

	cmp	AL, 127			; first check whether this is delete
	je	CRubout			; which is more like a control char.

	cmp	CS:$Repeat, 0		; if there is an argument to a char,
	jnz	CharacterArg		; call	Autowrap to put up n chars.


Charac1:call	.OutCH			; wait for more quick inserts
	mov	CX, AutoType

Charac2:call	FParse			; wait for input
	or	AH, AH
	jnz	FastTyped		; loop until you get a char or
	loop	Charac2			; until it is unlikely that he types
					; another one quickly

	call	.Piss			; finally output it
	call	.?Col			; and update the current column
	ret

Fasttyped:
	cmp	AH, 1			; if the character is not a normal
	jne	CharacterExit		; character, or if it is DEL, then
	cmp	AL, 127			; clean out the fastype buffer and
	je	CharacterExit		; execute the proper function
	 jmp	Character		; actually autowrap

CharacterExit:
	push	AX
	push	DX
	call	.Piss
	pop	DX
	pop	AX
	pop	BP		; do not return normal, since we already got
	pop	BX		; a real command, and do not simply piss and
	pop	BX		; return to main loop
	jmp	MainCommand

CharacterArg:
	mov	CX, CS:$Repeat		; make space for all to be inserted
	call	.MakeSpace

	cld				; and store a string into memory
	mov	DI, DS:BCB.FCursor
	mov	CX, CS:$Repeat
	mov	AL, Byte Ptr CS:$Repeat+4
	push	DS
	pop	ES
	rep	stosb
	mov	DS:BCB.FCursor, DI	; and readjust for the new cursor
	mov	CS:$Repeat, 0
	ret

CHaracter	ENDP

;***************************************************************************
	; %OUT CRubout [(BCB.FCursor) -> (Buffer)]
	; calls::	.Piss, CDELK, REPEATS
	; rubs out one character

CRubout PROC	NEAR

	mov	DS:BCB.Dirty, TRUE	; buffer is modified

	call	.Piss			; get rid of old stuff

	mov	SI, DS:BCB.FCursor
	cmp	SI, 100h
	je	CRuboutErr
	dec	SI
	mov	CX, 1
	cmp	Byte Ptr DS:[SI], LF
	jne	CRubout1
	dec	SI
	inc	CX
CRubout1:
	mov	DS:BCB.FCursor, SI
	call	CDELK
	cmp	CS:$Repeat, 0
	jne	CRuboutAgain
	ret
CRuboutAgain:
	dec	CS:$Repeat
	jmp	CRubout

CRuboutErrT	db	'*** File Start ***'
CRuboutErr:
	mov	SI, Offset CRuboutErrT
	mov	CX, 18
	jmp	.Error0
CRubout ENDP

;---------------------------------------------------------------------------
	; This routine calls the routine to update the screen, which
	; is called after each function is executed. It updates the
	; screen, checks whether the cursor is still inside the boundary
	; (if not, it reupdates the screen after centering around the cursor),
	; and withdraws.
	; For other PCs, this should probably not be changed, since everything
	; is in terms of symbolics screenstart and screenend etc.

	; .Screen [(BCB.ScrStart,BCB.Fcursor, BCB.ScrEnd) ->
	; %OUT	  (BCB.ScrStart,BCB.Fcursor, BCB.ScrEnd)]
	; calls FScreen, CCenter

.Screen PROC	Near

	mov	DX, CS:WindowEnd	; FScreen always requires start and
	mov	DI, CS:WindowStart	; end address of screen region, and
	mov	SI, DS:BCB.ScrStart	; the SI start of the buffer which
	call	FScreen			; shall be the first character in
					; this window

	mov	AX, DS:BCB.FCursor
	cmp	AX, DS:BCB.ScrStart	; if the cursor is above the scrstart
	jb	.Screen1
	cmp	AX, DS:BCB.ScrEnd	; or below ( which we only know after
	jae	.Screen1		; FSCREEN returns us the last char
					; that fit on screen ), reupdate
	ret

.Screen1:
	call	CCenter			; center anew

	mov	DX, CS:WindowEnd	; and reupdate screen
	mov	DI, CS:WindowStart
	mov	SI, DS:BCB.ScrStart
	call	FScreen
	ret

.Screen ENDP

;---------------------------------------------------------------------------
	; .?Col returns the column of the cursor position
	; %OUT .?Col [(BCB.FCursor) -> (BCB.FCurCol)]

.?Col  PROC	Near

	push	ES
	mov	BX, DS:BCB.FCursor
	call	GetColumn
	mov	DS:BCB.FCurCol, CX
	pop	ES
	ret

.?Col	ENDP

; <------------------------ .InCH ------------------------>

.InCH	PROC	Near
	cmp	CS:MacroInvocation, TRUE
	je	MacroChar
	call	GetChar
	jnz	.Inch0
	ret

.InCh0:	pushf
	cmp	CS:Macrodefinition, TRUE
	je	MacroDef
	popf
	ret

;...........................................................................
; we do not wait for keyboard input, but just play back our macro recording
MacroChar:
	cmp	CS:Macctr, 0			; exit on 0 characters left
	je	EndMacInv
	cmp	CS:Macrodefinition, TRUE	; error if we nest macros
	je	MacError
	mov	SI, CS:MacPtr			; take a character from the
	mov	AL, CS:[SI]			; buffer.
	mov	DL, AL				; for historic reasons
	inc	SI
	mov	CS:Macptr, SI
	dec	CS:MacCtr			; and remember the taking
	ret					; return a character

EndMacInv:
	call	GetChar				; first see whether there is
	jz	EMI2				; a ^G
	cmp	AL, 7
	jne	EMI2
		mov	SI, Offset MacCancel	; yes, so quit
		mov	CX, 18
		jmp	.Error0
EMI2:	cmp	CS:MacArg, 0			; now check whether we have
	je	EndMI				; to do the macro repeatedly
	dec	CS:MacArg			; yes, so remember we did
	mov	AL, CS:MacBack			; it once, and redo it
	mov	CS:MacCtr, AL
	mov	CS:MACptr, Offset Store
	mov	CS:MacroInvocation, TRUE
	jmp	MacroChar

EndMI:	mov	CS:MacroInvocation, FALSE	; reset the invocation
	cmp	CS:MacroInvocation, FALSE	; this will set the zero flag
	ret

MacError:
	mov	SI, Offset MEMsg
	mov	CX, 41
	jmp	.Error0
;...........................................................................
; this routine records everything that we are doing

MacroDef:
	mov	DI, CS:MacPtr
	mov	CS:[DI], AL
	inc	DI
	mov	CS:MACptr, DI
	inc	CS:MACctr
	inc	CS:MACBack
	cmp	CS:MacCtr, MacMaximum
	jae	MErr
	popf				; restore "something there"
	ret
MErr:	mov	SI, Offset MEMsg2
	mov	CX, 22
	jmp	.Error0



;...........................................................................
Getchar	PROC	NEAR
	mov	DL, 0FFh
	MS_FN	6
	jnz	.InHistory
	ret
.InHistory:
	pushf
	push	BX
	push	AX
	mov	BX, Offset $History

	mov	AX, CS:[BX+8]
	mov	CS:[BX+9], AX
	mov	AX, CS:[BX+6]
	mov	CS:[BX+7], AX
	mov	AX, CS:[BX+4]
	mov	CS:[BX+5], AX
	mov	AX, CS:[BX+2]
	mov	CS:[BX+3], AX
	mov	AX, CS:[BX]
	mov	CS:[BX+1], AX
	pop	AX
	mov	CS:[BX], AL
	pop	BX
	popf
	ret

GetChar	ENDP

.InCH	ENDP
;...........................................................................

;---------------------------------------------------------------------------
	; This routine outputs a character quickly to the screen. However, if
	; there are already too many quickly typed characters overflowing the
	; quickbuffer, it calls the routine that inserts all the quickly typed
	; characters into the real buffer.

.OutCH  PROC	Near

	push	BX
	mov	BX, CS:$KBufPtr			; always note the new char
	mov	CS:[BX], AL			; at the end of all typed
	inc	BX				; but not inserted characters
	mov	CS:$KBufPtr, BX

	cmp	CS:$KBufPtr, Offset $KBufEnd	; are there too many temporary
	jb	.OutCh0				; characters ? No
	pop	BX				; Yes, so insert all temporary
	jmp	.Piss				; typed characters into the
						; real buffer


;...........................................................................
	; SCREEN:
	;	Here are some routines that put a character at the
	;	location where the screencursor is.
	;
	; OK, we now have a recently typed character. This character sits
	; in the temporary "quick" or "fasttyped" buffer (KBUF), and DL.
	; There is not enough time to move around the possible 64K
	; that can be in the user's file to insert this one character,
	; so we just leave it in the buffer for a while, and put it to
	; the screen ( which is lots faster ). When the user stops
	; typing quickly, i.e. when we have time, .Piss will then take the
	; temporary character and insert it really into the edited file.

	; So, lets see how we put it to the screen quickly:

.OutCh0:mov	AX, Screensegment		; DL holds the character
	mov	ES, AX

	mov	BX, DS:BCB.ScrCursor		; ScrCursor holds the cursor
						; position on the screen

	mov	AH, nocolor			; The new quick char should be
	mov	AL, DL				; colorless



	; To make it look nicer, we try to guess where the actual line
	; ends, i.e. how it would look like if we had really inserted it.

.OutCh1:xchg	AX, ES:[BX]			; move all chars up to CR left
	add	BX, 2				; to make space. This makes it
	cmp	BX, 160*Textlastline-2		; look as if we really inser-
	ja	.OutCh2				; ted it 99% of the time

	cmp	AL, CR				; if we have a CR, we know
	je	.OutCh2				; the line is probably over
	cmp	AL, 1Ah				; analogous
	je	.OutCh2
	cmp	AL, LF
	je	.OutCH2
	cmp	AL, 7
	je	.OutCh2

	cmp	AX, lowintensity*256+'<'	; stop the game at the phy-
	je	.OutCH2				; sical lineend

	cmp	AX, lowintensity*256+' '
	je	.OutCH2

	cmp	AL, 9				; TABs are a problem. It looks
	je	.OutCh2				; best  to just stop insert

	cmp	AX, lowintensity*256+'!'	; This is a nice special case.
	jne	.OutCh1				; it looks good to leave the

if noflicker
		push	dx
		push	ax
		mov	dx, 3dah
	Wait:	in	al, dx
		test	al, 8
		jz	Wait
		pop	ax
		pop	dx
endif
	xchg	ES:[BX-2], AX			; '!' wraparound where it is
	jmp	.OutCh1				; and exchange for the follow
						; ing character

.OUTCH2:
	add	DS:BCB.ScrCursor, 2		; note that the cursor must
	mov	AH, 3				; be advanced now for another
	mov	BH, 0				; quick insert if necessary
	int	10h
	add	DL, 1
	mov	AH, 2
	int	10h

	pop	BX
	ret

.OutCH  ENDP

;---------------------------------------------------------------------------
	; Piss is responsible for inserting all quickly tyoed characters
	; that are held in the KBUF into the file ( which is the "real
	; insert" ), and to finally reupdate the screen. After this
	; routine is called, we are sure we have one big, correct, nice
	; buffer holding all characters. "The hectic is over."
	;
	; .Piss [ (CS:$KBufptr=Typebufferend, *[CS:$KBufStart]=Typebuffer)
	; %OUT	-> (CS:$KBufptr, *[CS:$KBufStart], Buffer) ]
	; calls::	 .outstr, .screen

.Piss	PROC	Near

	cmp	CS:$KBufptr, Offset $KBufStart	; output characters only if
	je	.PissNo				; there are any temp ones

	push	ES
	push	SI
	push	CX
	mov	AX, CS
	mov	ES, AX
	mov	SI, Offset $KBufStart
	mov	CX, CS:$KBufPtr
	sub	CX, Offset $KBufStart

	call	.OutStr			; output all characters

	pop	CX
	pop	SI
	pop	ES

	mov	CS:$KBufPtr, Offset $KBufStart ; clear the temporary Kbuffer

	call	.Screen			; and update it to a correct screen
	ret

.PissNo:ret			; there is nothing in $KBuf

.Piss	ENDP

;---------------------------------------------------------------------------
	; This routine transfers bytes from ES:DI into a normal DS buffer
	; that usually points to a buffer the user is editing.
	; %OUT .OutStr [ (*ES:SI=InString, CX=Length) -> (Buffer) ]

.OutSTR PROC	Near

	push	ES
	call	.MakeSpace
	pop	AX

	cld				; part 2 -> transfer the instring
					; into the real buffer
	push	DS
	push	DS
	pop	ES

	mov	DI, DS:BCB.FCursor
	mov	DS, AX
	rep	movsb			; actually insert
	pop	DS

	mov	DS:BCB.FCursor, DI	; and readjust for the new cursor
	ret
;. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

OFBUFMSG	db	'*** NO ROOM IN BUFFER LEFT ***'
OFBUF:  sub	DS:BCB.FEnd, CX
	pop	CX
	pop	SI
	pop	ES
	cld
	mov	SI, Offset OFBUFMSG
	mov	CX, 30
	jmp	.Error0
.OutSTR  ENDP

;---------------------------------------------------------------------------
	; This routine makes space in the DS buffer
	; %OUT	MakeSpace ( CX=#bytes )

.MakeSpace	PROC	Near
	mov	DS:BCB.Dirty, TRUE

	std				; make space in DS Buffer
	push	ES
	push	SI
	push	CX
	mov	AX, DS
	mov	ES, AX

	mov	SI, DS:BCB.FEnd		; check whether we would overflow
	add	DS:BCB.FEnd, CX		; the 64KB RAM Buffer
	jc	OFBUF
	cmp	DS:BCB.FEnd, 0FFD0h
	jae	OFBUF
	mov	DI, SI
	add	DI, CX

	mov	CX, SI			; set up word (instead of Byte) move
	sub	CX, DS:BCB.FCursor
	inc	CX
	mov	AX, CX
	test	AX, 1			; isolate one bit
	  jz	.MakeSpace0
	  inc	SI
	  inc	DI
	  inc	CX
.MakeSpace0:
	clc
	shr	CX, 1			; CX:=CX/2+1
	inc	CX
	rep	movsw			; actually insert the space now

	pop	CX
	pop	SI
	pop	ES
	ret

.MakeSpace	ENDP




;---------------------------------------------------------------------------
	; Damn: User Error. Clear out any macro commands in progress,
	; reset the stack pointer, and print the passed error message

.Error0 PROC	Near

	mov	SP, CS:$StackInit
	mov	CS:$Repeat, 0
	mov	CS:MacArg, 0
	mov	CS:Macrodefinition, FALSE
	mov	CS:Macroinvocation, FALSE
	call	.InvMsg
	call	Sound
	jmp	MainScreendraw

.Error0 ENDP

;---------------------------------------------------------------------------
	; this is a non-fatal error ( hardly called )
	; %Out .Error1 [(*SI=Msg, CX=Length) -> (*CS:$Repeat)]

.Error1 PROC	Near

	call	.Msg
	call	Sound
	ret

.Error1  ENDP

;---------------------------------------------------------------------------
	; I hate the dumb long beep of the PC !!! /ivo

timer	EQU	40h		; Use to issue short beep.
port_b	equ	61h
Sound	PROC	NEAR
	mov al,10110110B	; Gen a short beep (long one losses data.)
	out timer+3,al		; Code snarfed from Technical Reference.
	mov ax,533H
	out timer+2,al
	mov al,ah
	out timer+2,al
	in al,port_b
	mov ah,al
	or al,03
	out port_b,al
	mov cx, 32000
snd0:	loop snd0
	mov al,ah
	out port_b,al
	ret
Sound	ENDP

;---------------------------------------------------------------------------
Comment $

Some remarks:

MAX always updates the screen after a function is executed. The screen
update function's speed is crucial, and presently apparently excellent.

There is one exception, the case when a user types a character. Since a
user can type faster than the 8088 can insert in its buffer ( which  can
be a file of up to 64K ), something must be done to let the user think the
computer has already digested his last character. I do it as follows: I
store the character in KBuf, and perform a "fake" insert on the screen,
i.e. I insert it on the screen, guessing where the user's line ends from
screen information only. This is very fast, and makes the user thinks the
insert was performed fine. As soon as he stops typing, or when the buffer
that holds these quickly faked characters overflows, I call .Piss which
will insert the quickly typed characters into the buffer, and everything
is fine. It works great !!

So, SCREEN updates are only in the FSCREEN routine, which updates the
entire screen, and the quick insert, which is somewhere up in this module.
There are also some further screen commands in the following areas, which
have to be modified for the color screen:

-	the Modeline
-	the Message Area
-	the Lastline
-	the Buffer/Window commands which draw a separating line
	between windows on the screen

I have tried to mark this with the keyword SCREEN, so fgrep and you will
get the locations to change.
$


IF2
	%OUT [Pass 1 Completed]
ENDIF

	Program ENDS
End Main
```
{% endraw %}

## MODELINE.ASM

{% raw %}
```
PUBLIC  FModeline

EXTRN   $Wait:Word, .?Col:Near, .CLRMsg:Near, ActiveWindow:Byte
EXTRN	ActiveBuffer:Byte, Macrodefinition:Byte

;---------------------------------------------------------------------------
TITLE Modeline Updater

	; This routine builds the modeline to the screen. It is very ugly,
	; and should be rewritten, but it works. There are many screenpokes
	; in this routine, but fairly obvious and easy to change. [SCREEN]



Program SEGMENT PARA    PUBLIC  'code'
        ASSUME  CS:Program, DS:Program, ES:Program, SS:Program


	INCLUDE FDEF.DEF

MS_FN	MACRO	Fun
	mov	AH, Fun
	int	21h
	ENDM

stoschar	MACRO
	call	stoscharacter
	ENDM
	
; takes a number in AL [00-99] and outputs its ASCII representation


Msg1	db	'  [TEXT - '
n1	equ	10
SMsg1	db	'  [WRAP - '
sn1	equ	10
Msg2	db	':  '
n2	equ	3
Msg3	db	']  '
n3	equ	3
Msg4	db	'S='
n4	equ	2
Msg5	db	'K  COL '
n5	equ	7
Msg6	db	'   --'
n6	equ	5
Msg7	db	'%--'
n7	equ	3

Msg11	db	'DEF -'
n11	equ	5

Months  db      'JanFebMarAprMayJunJulAugSepOctNovDec'

Newtime	dw	0
Nt	db	0
Oldtime	db	0

EntryStackptr	dw	0
;---------------------------------------------------------------------------
FModeline       PROC    Near

	cld

	MS_FN   2Ch			; an update is necessary every second
	mov	CS:Newtime, CX
	mov	CS:Nt, DH
	cmp	DH, CS:Oldtime		; if the old seconds are the same as
	jne	Update			; the new seconds, no update is nece.
	ret


Update:	dec     CS:$Wait		; if n secs are over clear modeline
	jnz     MWrite
	call    .ClrMsg


MWrite:	mov	CS:EntryStackptr, SP
	mov	AX, Screensegment		; print to the screen segment
	mov	ES, AX
	mov	DI, ModelineStart
;----------
	call	.?Textmode
;----------
	call	.?inMacro
;----------
					; put the buffer name to screen
	mov	AL, 'B'
	stoschar

	mov	AL, CS:ActiveBuffer
	add	AL, '1'
	stoschar

	mov	AL, '-'
	stoschar

	mov	AL, 'W'
	stoschar

	mov	AL, CS:ActiveWindow
	add	AL, '1'
	stoschar

;---------
	mov	SI, Offset Msg2		; put the ':  '
	mov	CX, n2
	call	Modelinetext
;----------
	mov	SI, Offset BCB.File	; now put the filename
	call	ASCIIZText
;----------
	mov	SI, Offset Msg3		; put up some messages
	mov	CX, n3
	call	ModelineText
;--------------------

	MS_FN   2Ah			; now put up the date

	mov     BL, DH			; month is in DH
	add     BL, DH
	add     BL, DH			; BX:=3*months
	xor     BH, BH

	push	dx
	mov	AL, CS:[BX+Offset Months-3]	; and tranlate from table
	stoschar

	mov	AL, CS:[BX+Offset Months-2]
	stoschar				; *E
	mov	AL, CS:[BX+Offset Months-1]
	stoschar				; *E

	mov	AL, ' '
	stoschar
	pop	DX

	mov	AL, DL
	call	Hex8Asc

	mov	AL, ' '
	stoschar
	stoschar

;---------------------
; change Modeline time

	mov	AL, Byte Ptr CS:Newtime+1
	call	Hex8Asc				; hours

	mov	AL, ':'
	stoschar

	mov	AL, Byte Ptr CS:Newtime
	call	Hex8Asc				; minutes

	mov	AL, ':'
	stoschar

	mov	AL, CS:Nt
	mov	CS:Oldtime, AL
	call	Hex8Asc				; seconds

;--------------------
						; Length of File
	mov	AL, ' '
	stoschar
	stoschar
	mov	SI, Offset Msg4
	mov	CX, n4
	call	ModelineText

	mov	AL, ' '
	stoschar

        mov     CX, DS:BCB.FEnd
        sub     CX, 100h
        shr     CH, 1
        shr     CH, 1           		; V : 0..63

	mov	AL, CH
	call	Hex8Asc


;-------------------
	mov	SI, Offset Msg5			; Print the cursor column now
	mov	CX, n5
	call	ModelineText

	push    DI				; find the cursor's column
	call    .?Col
	pop     DI

	mov     AX, DS:BCB.FCurCol		; should have been calculated
	cmp	AX, 999
	jbe	PMCorr
	xor	AX, AX


PMCorr: mov     CL, 100d                ; 1) divide by 100 ( assumes <999 )
	div     CL                      ; divide 0000NNNNh by 10000d
	push	AX
	add     AL, 30h                 ; adjust to Ascii representation
        stoschar
	pop	AX

	mov	AL, AH
        aam                             ; divide by 100 -> DIV in AH, MOD in AL
        xchg    AL, AH
	push	AX
        add     AL, 30h
        stoschar
	pop	AX
        mov     AL, AH
        add     AL, 30h
        stoschar

;-------------------
	mov	SI, Offset Msg6		; change Percent in File
	mov	CX, 6
	call	ModeLineText		; "--"

        mov     AX, DS:BCB.FCursor      ; DS:BCB.FCursor
        sub     AX, 100h
        mov     CX, 100                 ; Multiply by 100 for percent
        mul     CX
        mov     CX, DS:BCB.FEnd
        sub     CX, 100h                ; FileLength
        cmp     CX, 0
        je      Zerodiv
        div     CX
	mov	Word Ptr ES:[DI-2], ' '+Modelinecolor*256
	mov	AH, modelinecolor
	cmp	AL, 100
	je	PTop
	; pass AL
	call	Hex8Asc			; AL:=(Cursor*100)/Length
	jmp	Clearrest

PTop:	mov	AL, '1'			; AL = 100%
	stoschar
	mov	AL, '0'
	stoschar
	mov	AL, '0'
	stoschar
	jmp	Clearrest

ZeroDiv:mov	AL, '-'			; AL = 0 %
	stoschar

ClearRest:
	mov	SI, Offset Msg7
	mov	CX, n7
	call	Modelinetext
	mov	AX, ' '
ClearRest1:				; this will clean the rest
	stoschar			; of our modeline
	jmp	ClearRest1

;***************************************************************************
.?InMacro	PROC	NEAR
	cmp	CS:Macrodefinition, TRUE
	je	.?In1
	ret
.?In1:	mov	SI, Offset Msg11
	mov	CX, n11
	jmp	Modelinetext

.?InMacro	ENDP

FModeline       ENDP

;---------------------------------------------------------------------------
Hex8Asc	PROC	NEAR

        xor     AH, AH
                                        ; number 0..99

					; now the number is in the range 0..99
					; now we can use the AAM instruction !
	aam				; divide by 100-> DIV in AH, MOD in AL
	xchg    AH, AL
	add     AL, '0'

	push	AX
	stoschar		; *E
	pop	AX

	mov     AL, AH
	add     AL, '0'
	stoschar
	ret

Hex8Asc	ENDP
;---------------------
ModeLineText	PROC	NEAR
	mov	AL, CS:[SI]
	inc	SI
	stoschar
	loop	ModelineText
	ret
ModeLineText	ENDP

ASCIIZText	PROC	NEAR
	mov	AL, DS:[SI]
	inc	SI
	cmp	AL, 0
	je	ASCIIZEnd
	stoschar
	jmp	ASCIIZText
ASCIIZEnd:
	ret

ASCIIZText	ENDP
;--------------------
.?textMode	PROC	NEAR
	test	DS:BCB.EDMode, Wrapmode
	jnz	Putwrap

	mov	SI, Offset Msg1		; put '[TEXT - B' to scr
.?T1:	cmp	DS:BCB.Dirty, TRUE
	jne	DSpace
	mov	Byte Ptr CS:[SI+1], '*'
	jmp	DM
DSpace:	mov	Byte Ptr CS:[SI+1], ' '
DM:	mov	CX, n1			; and add a space at the end
	mov	AH, modelinecolor
	jmp	ModeLineText

PutWrap:mov	SI, Offset SMsg1
	jmp	.?T1

.?TextMode	ENDP

;***************************************************************************
Stoscharacter	PROC	NEAR
	cmp	DI, ModeLineEnd
	jae	Exit
	push	ax
	pop	ax
	mov	AH, modelinecolor
	if color			; even though this should be noflicker
	push	AX			; here we can sacrifice enough time
	push	DX			; to update flickerfree
	mov	dx, 3dah
Wait:	in	al, dx
	test	al, 8
	jz	Wait
	pop	DX
	pop	AX
endif
	stosw
	ret

Exit:	mov	SP, CS:EntryStackptr
	ret
Stoscharacter	ENDP
;***************************************************************************
Comment $ The following turns out to turn off the screen for too long
enablescreen	proc	near
	mov	dx, 3D8h
	mov	al, 00000101b
	out	dx, al
	ret
enablescreen	endp

disablescreen	proc	near
	mov	dx, 3dah		; wait until we can disable the screen
Wait1:	in	al, dx
	test	al, 8
	jz	Wait1
	mov	dx, 3D8h		; and disable it
	mov	al, 00001101b
	out	dx, al
	ret
disablescreen	endp
$
        PROGRAM ENDS
END


```
{% endraw %}

## MORESCRE.ASM

{% raw %}
```
PUBLIC	NextScreen, SCrollUp, PreviousScreen, ScrollDown

EXTRN	NUMWinsSCR:WORD, GETCOLUMN:NEAR, .Error0:NEAR, FSCREEN:NEAR
EXTRN	WindowStart:Word, WindowEnd:Word
;---------------------------------------------------------------------------
	Page ,132
NAME	FSCRADVANCE

TITLE Global Commands to advance screen

Program SEGMENT PARA	PUBLIC  'code'
	ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

INCLUDE FDEF.DEF

;---------------------------------------------------------------------------
ScreenEndMessage	db	'*** File End ***'
ScreenStartMessage	db	'*** File Start ***'
DesiredLines		dw	19
OldScrStart		dw	0
;---------------------------------------------------------------------------
ScrollUp	PROC	NEAR

	mov	BX, DS:BCB.FCursor
	cmp	BX, DS:BCB.FEnd
	jae	SUErr

	mov	BX, DS:BCB.ScrStart	; get the current screenstart

	call	Advancephysicalline

	mov	DS:BCB.ScrStart, BX
	cmp	BX, DS:BCB.FCursor
	jb	SUEnd
	mov	DS:BCB.FCursor, BX

SUEnd:	cmp	BX, DS:BCB.FEnd
	ja	SUErr
	ret

SUErr:	mov	SI, Offset ScreenEndMessage ; if we would pass the end, error
	mov	CX, 16
	jmp	.Error0

ScrollUp	ENDP
;---------------------------------------------------------------------------
%OUT	NEXTSCREEN ();

NextScreen	PROC	NEAR

	mov	BX, DS:BCB.ScrStart	; get the current screenstart
	xor	BP, BP			; zero lines advanced

	cmp	CS:NumWinsScr, 0	; find out how many lines forward
	je	Onewindow1
Twowindow:
	mov	CS:DesiredLines, HalfWindow-2
	jmp	CNLoop2
OneWindow1:
	mov	CS:Desiredlines, Fullwindow-2


CNLoop2:call	Advancephysicalline	; advance this many lines
	inc	BP
	cmp	BP, CS:DesiredLines
	ja	CNEnd
	cmp	BX, DS:BCB.FEnd
	jb	CNLoop2
	mov	SI, Offset ScreenEndMessage ; if we would pass the end, error
	mov	CX, 16
	jmp	.Error0

CNEnd:	mov	DS:BCB.ScrStart, BX	; found next screen start, so announce
	mov	DS:BCB.FCursor, BX
	ret

Nextscreen	ENDP
;---------------------------------------------------------------------------
;---------------------------------------------------------------------------
;...........................................................................
AdvancePhysicalLine	PROC	NEAR
	xor	DX, DX
APL0:	cmp	Byte Ptr DS:[BX], TAB
	jne	APL1
						; adjust for a TAB
	push	CX			; DX:= DX+(8- [(DX-1) mod 8])
	push	DX
	dec	DX
	and	DX, 111b
	mov	CX, 8
	sub	CX, DX
	pop	DX
	add	DX, CX
	pop	CX
	dec	DX			; will be incremented right again
	jmp	APL3

APL1:	cmp	Byte Ptr DS:[BX], ' '
	jae	APL2
	inc	DX				; adjust for a ^Character

APL2:	cmp	Word Ptr DS:[BX], CRLF
	jne	APL3
	add	BX, 2
	ret					; we have found it at CR

APL3:	inc	DX
	inc	BX
	cmp	DX, 79
	jb	APL0

	ret					; we have found it at wrap

AdvancePhysicalLine	ENDP
;---------------------------------------------------------------------------
ScrollDown	PROC	NEAR

	mov	BX, DS:BCB.ScrStart	; get the current screenstart
	cmp	BX, 100h
	jbe	SDErr

	mov	CS:OldScrStart, BX
	dec	BX
SDAgain:call	Retreatphysicalline
	cmp	Word Ptr DS:[BX+1], CRLF
	jne	SD1
	cmp	Byte Ptr DS:[BX], LF
	jne	SD1
	inc	BX			; bug we are on >LF< CR LF
SD1:	call	FindLineStart
	cmp	BX, CS:OldScrStart
	je	SDAgain

	mov	DS:BCB.ScrStart, BX

	mov     DX, CS:WindowEnd
	mov     DI, CS:WindowStart
	mov     SI, DS:BCB.ScrStart
	call	FScreen				; to find out the new end

	mov	BX, DS:BCB.ScrEnd
	cmp	BX, DS:BCB.FCursor
	ja	SDEnd
	dec	BX
	cmp	Byte Ptr DS:[BX], LF
	jne	SD2
	dec	BX
SD2:	mov	DS:BCB.FCursor, BX

SDEnd:	ret



SDErr:	mov	SI, Offset ScreenStartMessage	; if we would pass the
	mov	CX, 18				; start, error
	jmp	.Error0

ScrollDown	ENDP

;---------------------------------------------------------------------------
; This only approximates the right place by assessing a TAB to be always
; 6 characters

PreviousScreen	PROC	NEAR

	mov	BX, DS:BCB.ScrStart	; get the current screenstart
	xor	BP, BP			; zero lines retreated

	cmp	CS:NumWinsScr, 0	; find out how many lines forward
	je	P1Window
P2window:
	mov	CS:DesiredLines, HalfWindow-2
	jmp	PLoop2
P1Window:
	mov	CS:Desiredlines, Fullwindow-2


PLoop2:	call	Retreatphysicalline	; retreat this many lines
	inc	BP
	cmp	BP, CS:DesiredLines
	ja	PEnd
	cmp	BX, 100h
	jae	PLoop2

	mov	SI, Offset ScreenStartMessage	; if we would pass the start,
	mov	CX, 18				; error
	jmp	.Error0

PEnd:	call	FindLineStart
	mov	DS:BCB.ScrStart, BX	; found next screen start, so announce
	mov	DS:BCB.FCursor, BX
	ret

PreviousScreen	ENDP
;---------------------------------------------------------------------------
RetreatPhysicalLine	PROC	NEAR

	xor	DX, DX

RPL0:	cmp	Byte Ptr DS:[BX], TAB
	jne	RPL1
	add	DX, 5			; we assume a TAB to be about 6 chars
	jmp	RPL3

RPL1:	cmp	Byte Ptr DS:[BX], ' '
	jae	RPL2
	inc	DX				; adjust for a ^Character

RPL2:	cmp	Word Ptr DS:[BX], CRLF
	jne	RPL3
	dec	BX
	ret					; we have found it at CR

RPL3:	dec	BX
	inc	DX
	cmp	DX, 79
	jb	RPL0

	ret					; we have found it at wrap

RetreatPhysicalLine	ENDP
;---------------------------------------------------------------------------
; most of this code is copied from ccenter
;
FindLineStart	PROC	NEAR

	call	GetColumn		; BX holds cursor
	call	Findcolumn1		; returns in DX what the real
					; column should be

FLLoop:	call	GetColumn		; this will go back until
	cmp	CX, DX			; it hits the real start
	jbe	AtLineStart
	dec	BX
	jmp	FLLoop

AtLinestart:
	mov	DS:BCB.ScrStart, BX
	cmp	CX, DX
	jb	HitTabLine
	ret

HitTabLine:	inc	BX
	ret

FindColumn1	PROC	NEAR
; CX holds a column - I want to know the column number of the first character
; on this line.
	mov	DX, 1

FAgain:	add	DX, 79
	cmp	DX, CX
	jbe	FAgain
	sub	DX, 79		; return the real start
	ret
FindColumn1	ENDP


FindLineStart	ENDP

;***************************************************************************
;---------------------------------------------------------------------------
; IN:	CX	column we want to get to.
;	BX	points to any character on this line
; OUT:	BX	pointer to character which comes closest, but is not greater
;		than CX
;	DX	actual column of BX

MOVEtoCOLUMN	PROC	NEAR

	call	GoToLineStart		; finds the start of the line of {BX}

	mov	DX, 1

MTC0:	cmp	DX, CX			; we are ready when we either hit the
	jae	MTCFound1		; column we want, or when we

	mov	AX, DS:[BX]		; hit the CRLF
	cmp	AX, CRLF
	je	MTCFound2

	cmp	AH, TAB			; if we have hit a TAB, we need to ad
	jne	MTC1			; just more spaces

	push	CX			; DX:= DX+(8- [(DX-1) mod 8])
	push	DX
	dec	DX
	and	DX, 111b
	mov	CX, 8
	sub	CX, DX
	pop	DX
	add	DX, CX
	pop	CX
	dec	DX			; will be incremented right again
	jmp	MTC2

MTC1:	cmp	AL, ' '			; if we hit a control character
	jae	MTC2			; we need an extra forward

	inc	DX

MTC2:	inc	DX			; and forward, and try again
	jmp	MTC0

MTCFound1:				; we have reached a column greater
	cmp	DX, CX			; or equal what we want
	je	MTCFoundIdeal
	dec	BX			; a TAB or ^Character is hiding the
					; column we want
	push	CX			; so we pass the one before
	call	GetColumn		; whose column is
	mov	DX, CX			; and of course not pass back in CX
	pop	CX
MTCFoundIdeal:
	ret

MTCFound2:				; we have hit a CRLF before our col
	ret				; which will return correct DX / BX

MoveTOcolumn	ENDP
;---------------------------------------------------------------------------
; This will reset BX to the start of the line on which it is.
;
GoToLineStart	PROC	NEAR
	cmp	Word Ptr DS:[BX-2], CRLF
	je	GTLS1
	cmp	BX, 100h
	jbe	GTLS1
	dec	BX
	jmp	GoToLineStart
GTLS1:	ret
GoToLineStart	ENDP

PROGRAM	ENDS
	end

```
{% endraw %}

## PARSE.ASM

{% raw %}
```
PUBLIC  FParse, $Repeat, FParse0, LastLineUpdate, NoModeline, LastLastLine
PUBLIC	Switchmenu
EXTRN   .InCH:Near, .Msg:Near, .Error0:Near, .CLRMsg:Near

;---------------------------------------------------------------------------
TITLE Command Parser

Program SEGMENT PARA    PUBLIC  'code'
	ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

	INCLUDE	FDEF.DEF

COMMENT *

IN:  ?
OUT:
	AL
	0	=>	no character available
	1	=>	character [20..FF]
	2	=>	ctrl character passed in DL [0..1Fh]
	3	=>	C-X, following charcter in DL
	4	=>	M- , second character in DL
	5	=>	M-X, third character in DL
*

;----------------------- Symbols -----------------------
;----------======== VARIABLES =========---------

WorkMsg		db	'[Time]'
NumMsg		db	'*** Not Number ***'
ArgErr		db	'*** Argument Error ***'
ArgOFMsg	db	'*** Argument Too Big ***'
EscMsg		db	'ESC- '
XMsg		db	'ESC-X '
C_UMsg		db	'CTL-U '
C_XMsg		db	'CTL-X '
Temp		db	'0'
NoModeLine	db	InitLastLine
LastNodeName	dw	Offset Root
LastLastLine	dw	Offset Text0Line

$RepeatType STRUC   
	Arg	dw	?
	AAX	dw	?
	ADL	db	?
$RepeatType ENDS

$Repeat $RepeatType	<0,?,?>

;----------------------- Program ------------------------
%OUT FParse () : Argument, AX, DL;

FParse  PROC    Near

	mov	CS:$Repeat.Arg, 0	; argument default is 0
	call    .InCH		   ; get a character from keyboard
	jnz	FParse0		 ; is there a character ?
		xor	AX, AX	  ; no => return 0-0
		ret

; --- Character ?
Level2:
FParse0:cmp	AL, ' '		 ; check if ctl- character
	jb	FParse1		 ; this is a normal character
	mov	DL, AL		  ; pass back in 0- DL, AL
	mov	AH, 1
	ret




; --- CTRL-?
FParse1:cmp	AL, 18h		 ; check if it is a CTL-X
	je	C_X
	cmp	AL, ESC			; check if it is an ESC
	je	ESCAPE
	cmp	AL, 15h			; check if it is a CTL-U
	jne	FParse2

	jmp	c_u

FParse2:
	cmp	AL, NUL
	jne	FP21
	jmp	RemapNUL		; for the stupid IBM PC definition
FP21:	mov	DL, AL			; we have a "normal" ctl-char
	mov	AH, 2			; pass back in 2- DL, AL
	ret




; --- CTRL-X ?

C_X:    call    .CLRMsg			; put a CTL-X Msg to screen
	mov	SI, Offset C_XMsg
	mov	CX, 6
	call    .Msg

C_X1:   call    .InCH			; wait to get a character
	jz	C_X1

	cmp	AL, CTL_G		; abort on C-G
	jne	C_X2
		call	.ClrMsg
		xor	AX, AX
		xor	DL, DL
		ret

C_X2:   push    AX			; clear screen, and pass back 3- DL,AL
	call    .CLRMsg
	pop	AX
	mov	AH, 3
	mov	DL, AL
	ret



; --- ESC ?
ESCAPE: call    .CLRMsg			; put ESC- to screen
	mov	SI, Offset EscMsg
	mov	CX, 5
	call    .Msg

ESCAPE1:call    .InCH			; wait until character <> ESC
	jz	ESCAPE1
	cmp	AL, ESC
	jz	ESCAPE1

	cmp	AL, CTL_G		; command cancelled with c-g ?
	jne	ESCAPE2

	call    .CLRMsg			; clear the screen
	xor	DL, DL
	xor	AX, AX
	ret

ESCAPE2:cmp	AL, 'X'			; is this esc-x ?
	je	Extended
	cmp	AL, 'x'
	je	Extended

	mov	DL, AL			; no, so check whether it is a number

	cmp	DL, '0'			; if it is not, jump to escape3
	jb	ESCAPE3
	cmp	DL, '9'
	ja	ESCAPE3

	 cmp	CS:$Repeat.Arg, 0	; if our argument not 0, we are in
	 jne	ESCArgErr		; recursive call = not allowed

ESCnumId:call    $GetArg		; we are not recursive, so get
					; the argument into $Arg, and one
					; argument into AL
		call    Level2		; call itself recursively to get
					; a second function. Arg is disabled.
		cmp	AX, 0FFFFh	; check whether the return signals
		je	ESCArgDiscErr	; an error through Arg ( recursive )
		cmp	CS:$Repeat.Arg, 0 ; check whether our Argument is 0
		je	ESCArgDiscErr	; which is also a 0

		cmp	AL, CTL_G	; check whether we have a CTL-G
		je	ESCArgDiscErr	; which would imply an error, too
		mov	CS:$Repeat.AAX, AX ; save our other values (for what?)
		mov	CS:$Repeat.ADL, DL

		call    .CLRMsg		; clear the screen
		mov	SI, Offset WorkMsg ; and tell us that we need time
		mov	CX, 6		; to complete a task
		call    .Msg
		mov	AX, CS:$Repeat.AAX ; return the values of AX, DL
		mov	DL, CS:$Repeat.ADL
		mov	AL, CS:$Repeat.ADL
		ret

	ESCArgDiscErr:
		mov	SI, Offset ArgErr ; display an error and return to
		mov	CX, 22		; the main calling routine
		call    .Error0
		xor	AX, AX
		ret

	ESCArgErr:
		mov	SI, Offset ArgErr ; display an error, and return from
		mov	CX, 22		; recursive call.
		call    .Msg
		call    .Error0
		mov	AX, 0FFFFh
		ret

ESCAPE3:push    DX			; this is just a normal ESC-?
	call    .CLRMsg			; so clear the screen and return the
	pop	DX			; character in 4- AL, DL
	mov	AL, DL
	mov	AH, 4
	ret

Extended:
	call    .CLRMsg		 	; this is an esc-x ?, so put an ESC-X
	mov	SI, Offset XMsg		; message to the screen
	mov	CX, 6
	call    .Msg

Extended1:
	call    .InCH			; get a character
	jz	Extended1
	cmp	AL, 7			; abort check
	jne	Extended2		; cancelled
	call	.CLRMsg
	xor	DL, DL
	sub	AX, AX
	ret
Extended2:
	push    AX			; pass back 5 - AL,DL
	call    .CLRMsg
	pop	AX
	mov	DL, AL
	mov	AH, 5
	ret

;-------------------------------------------------------------------------
C_U:    call    .CLRMsg			; use a CTL-U Argument
	mov	CX, 6			; first put a CTL-U to the screen
	mov	SI, Offset C_UMsg
	call    .Msg

c_u0:   call    .Inch			; get another character
	jz	c_u0

	cmp	AL, '0'			; if it is not a number, then error
	jb	c_uErr
	cmp	AL, '9'
	ja	c_uErr

	mov	DL, AL			; load DL with the first number
	cmp	CS:$Repeat.Arg, 0	; check whether we are in a recursive
	jne	c_u1			; call, and error if so

	jmp	ESCnumId		; otherwise, let esc-arg take over
c_u1:   jmp	ESCArgErr		; we had a recursive mistake

c_uErr: mov	SI, Offset NumMsg	; we had a CTL-U other than number
	mov	CX, 18			; which is an error
	call    .Error0
	sub	AX, AX			; and return nothing
	sub	DL, DL
	ret

FParse  ENDP

;-------------------------------------------------------------------------
%OUT $GetArg (DL,AL= First Number ) : CS:RepeatArg=Total Number

$Getarg PROC    Near
	mov	AX, CS:$Repeat.Arg
					; multiply by 10
	cmp	AX, 6000
	ja	ArgOF		   ; Argument Overflow
	add	AX, AX		  ; multiply old argument by 10
	mov	CS:$Repeat.Arg, AX
	add	AX, AX
	add	AX, AX
	add	CS:$Repeat.Arg, AX	; add new number
	xor	AH, AH
	mov	AL, DL
	sub	AL, '0'		 ; ASCII -> Word
	add	CS:$Repeat.Arg, AX	; and add new number to it

	add	AL, '0'		 ; and display it on screen, too
	mov	Byte Ptr CS:Temp, AL
	mov	SI, Offset Temp
	mov	CX, 1
	call    .Msg

$GAL:   call    .Inch		   ; get a number / command-start
	jz	$GAL

	cmp	AL, '0'		 ; return if we have our first non
	jb	$GAEx		   ; numerical argument
	cmp	AL, '9'
	ja	$GAEx
	mov	DL, AL		  ; input was number -> do it again
	jmp	$GetArg		 ; multiply by 10 etc.

$GaEx:  ret				; command was input

;-------------------------------------------------------------------------
%OUT ArgOF
ArgOF:  mov	SI, Offset ArgOFMsg
	mov	CX, 24
	call    .Msg
	call    .Error0
	mov	CS:$Repeat.Arg, 0
	pop	AX		; discard jump back "call $GetArg"
	xor	AX, AX
	ret

$GetArg ENDP

;---------------------------------------------------------------------------
; RemapNUL:
;
;	FN: remaps the NUL x character, since the stupid PC can't deal with
;	    it. Also defines the function keys
;	IN: -
;	OUT:Artificial Combination of AL/DL - AH
;
RemapNUL	PROC	NEAR
	call	.InCH			; there definitely is another one
	mov	BL, AL
	sub	BH, BH
	add	BX, BX
	mov	AX, CS:NULTable[BX]
	cmp	AH, MenuEntry/256
	je	SwitchMenu
	mov	DL, AL
	ret
RemapNUL	ENDP

;---------------------------------------------------------------------------
; Switchmenu:
;
;	FN:	switches to a new menu
;
;	IN:	AL: new menu number
;	OUT:	Updated Table
;		Updated Modeline
;
SwitchMenu	PROC	NEAR

	mov	AH, 64		; we want 60 bytes for table and 4 for textptr
	mul	AH		; -> AX holds entry to table
	mov	SI, AX
	add	SI, Offset Newtable
	mov	DI, Offset FN1
	mov	CX, 10

UpdateLoop1:
	mov	AX, CS:[SI]
	add	SI, 2
	mov	CS:[DI], AX
	add	DI, 2
	loop	UpdateLoop1

	mov	CX, 20		; dump PC has function keys not in contiguous
	mov	DI, Offset FN11	; area, so I have to reinitialize and continue
UpdateLoop2:
	mov	AX, CS:[SI]
	add	SI, 2
	mov	CS:[DI], AX
	add	DI, 2
	loop	UpdateLoop2
	
	mov	AX, CS:[SI+2]
	mov	CS:LastNodename, AX
	mov	SI, CS:[SI]		; this is the new text pointer
	call	LastLineUpdate
	sub	AX, AX
	ret

SwitchMenu	ENDP

;---------------------------------------------------------------------------
	number	db	'0'
LastLineUpdate	PROC	NEAR

	mov	CS:LastLastLine, SI
	push	ES
	mov	AX, ScreenSegment
	mov	ES, AX
	mov	DI, Offset LastLineStart+320

	cmp	CS:NoModeLine, TRUE
	je	LLEndupdate

	mov	AL, '1'
	mov	AH, lowintensity
	stosw
	mov	cs:number, AL

LL0:	mov	AL, CS:[SI]
	inc	SI
	cmp	AL, '$'
	je	LLEndUpdate
	cmp	AL, NUL
	jne	LL1

	mov	AL, ' '			; put up space between key descriptors
	mov	AH, nocolor
	stosw

	inc	cs:number
	mov	AL, cs:number
	mov	AH, lowintensity

	jmp	LL2
LL1:	mov	AH, Inverse
LL2:	stosw
	jmp	LL0
LLEndUpdate:
	mov	AX, ' '+nocolor*256
LLEUP1:	cmp	DI, Offset LastLineStart+320+158-20
	jae	LLEndEnd
	stosw
	jmp	LLEUP1
LLEndEnd:
	call	NodeNameUpdate
	pop	ES
	ret
LastLineUpdate	ENDP

;---------------------------------------------------------------------------
NodeNameUpdate	PROC	NEAR
	mov	SI, CS:LastNodename
	mov	CX, 11

NNL:	mov	AL, CS:[SI]
	inc	SI
	mov	AH, nocolor
	stosw
	cmp	DI, Offset LastLineStart+320+158
	ja	NNLR
	loop	NNL
nnlr:	ret
NodeNameUpdate	ENDP

T2	equ	2*256		; CTL-
T3	equ	3*256		; CTL-X -
T4	equ	4*256		; ESC-
T5	equ	5*256		; ESC-X -

T7	equ	7*256
MenuEntry	equ	T7

NulTable dw	0	; 0
dw	0		; 1
dw	0		; 2
dw	T2		; 3 ^@
dw	0		; 4
dw	0		; 5
dw	0		; 6
dw	0		; 7
dw	0		; 8
dw	0		; 9
dw	0		; 10
dw	0		; 11
dw	0		; 12
dw	0		; 13
dw	0		; 14
dw	T2+TAB		; 15 = Shift TAB
dw	0		; 16
dw	0		; 17
dw	0		; 18
dw	0		; 19
dw	0		; 20
dw	0		; 21
dw	0		; 22
dw	0		; 23
dw	0		; 24
dw	0		; 25
dw	0		; 26
dw	0		; 27
dw	0		; 28
dw	0		; 29
dw	0		; 30
dw	0		; 31
dw	0		; 32
dw	0		; 33
dw	0		; 34
dw	0		; 35
dw	0		; 36
dw	0		; 37
dw	0		; 38
dw	0		; 39
dw	0		; 40
dw	0		; 41
dw	0		; 42
dw	0		; 43
dw	T4+'Z'		; 44 = ALT-Z
dw	0		; 45
dw	0		; 46
dw	0		; 47
dw	0		; 48
dw	0		; 49
dw	0		; 50
dw	0		; 51
dw	0		; 52
dw	0		; 53
dw	0		; 54
dw	0		; 55
dw	0		; 56
dw	0		; 57
dw	0		; 
FN1 dw	T7+1		; 
dw	T7+2		; 60
dw	T7+3		; 
dw	T7+4		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 70
dw	T4+'<'		; 71 = Home
dw	T2+16		; 72 = Previous = Arrow
dw	T4+'V'		; 73 = PageUp
dw	0		; 
dw	T2+2		; 75 = Arrow <-
dw	0		; 
dw	T2+6		; 77 = Arrow ->
dw	0		; 
dw	T4+'>'		; 79 = End
dw	T2+14		; 80 = Next = Arrow
dw	T2+22		; 81 = PageDown
dw	0		; 
dw	0		; 
FN11 dw	T7+1		; 84 = F1
dw	T7+2		; 
dw	T7+3		; 
dw	T7+4		; 
dw	0		; 
dw	0		; 
dw	0		; 90
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 100
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 110
dw	0		; 
dw	0		; 
dw	0		; 
dw	T2+1Fh		; 114 = PrtSc = HELP
dw	T4+'B'		; 115 = CTRL- <- = Word Backward
dw	T4+'F'		; 116 = CTRL- -> = Word Forward
dw	0		; 
dw	T2+26		; 118 = CTRL-PGUP = ScrollUp
dw	0		; 
dw	0		; 120
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 130
dw	0		; 
dw	T4+'Z'		; 132 = CTRL - PageDown
dw	0		; 
dw	0		; 
dw	0		; 

;---------------------------------------------------------------------------
NewTable dw	Menuentry+1		; MAIN manu
dw	Menuentry+2
dw	Menuentry+3
dw	Menuentry+4
dw	5 dup (0)
dw	T5+'M'
dw	20 dup (0)
	dw	Offset Text0Line
	dw	Offset Root

dw	Menuentry+0			; EDIT Menu
dw	Menuentry+5			;	char
dw	Menuentry+6			;	word
dw	Menuentry+7			;	para
dw	Menuentry+8			;	global
dw	Menuentry+9			;	region
dw	24 dup (0)
	dw	Offset Text1Line
	dw	Offset Ch1

dw	Menuentry+0			; SEARCH menu
dw	T2+19				; ^S
dw	T2+18				; ^R
dw	T5+'S'
dw	T5+'Q'
dw	25 dup (0)
	dw	Offset Text2Line
	dw	Offset Ch2

dw	Menuentry+0			; FILE menu
dw	T3+19				; ^X ^S
dw	T3+23				; ^X ^W
dw	T3+22				; ^X ^V
dw	T3+'B'
dw	T3+'O'
dw	24 dup (0)
	dw	Offset Text3Line
	dw	Offset Ch3

dw	Menuentry+0			; Others
dw	T2+17
dw	T2+15
dw	T4+'Q'
dw	T3+26
dw	25 dup (0)
	dw	Offset Text4Line
	dw	Offset Ch4

dw	Menuentry+1			; EDIT-CHAR
dw	T2+6
dw	T2+2
dw	T2+4
dw	T2+8
dw	T2+20
dw	4 dup (0)
dw	Menuentry+1
dw	T2+14
dw	T2+16
dw	T2+11
dw	T2+7
dw	T2+7
dw	14 dup (0)
	dw	Offset Text5Line
	dw	Offset Ch5

dw	Menuentry+1			; word /sentence
dw	T4+'F'
dw	T4+'B'
dw	T4+'D'
dw	T4+8
dw	T4+'T'
dw	24 dup (0)				; word <> sentence
	dw	Offset Text5Line		; word is similar to char
	dw	Offset Ch6

dw	Menuentry+1
dw	29 dup (0)
	dw	Offset Text5Line		; paragraph is similar to char
	dw	Offset Ch7

dw	Menuentry+1				; so is screen file
dw	T2+22
dw	T3+'V'
dw	7 dup (0)
dw	Menuentry+1
dw	T4+'<'
dw	T4+'>'
dw	17 dup (0)
	dw	Offset Text5Line
	dw	Offset Ch8

dw	Menuentry+1				; REGION
dw	T2+0
dw	T3+24
dw	T2+23
dw	26 dup (0)
	dw	Offset Text9Line
	dw	Offset Ch9

dw	30 dup (0)
dw	Offset Text10Line
	dw	Offset Ch10
Text0Line	db	'EDIT  ', NUL
		db	'SEARCH', NUL
		db	'FILE  ', NUL
		db	'OTHERS', NUL
		db	'     ', NUL
		db	'     ', NUL
		db	'     ', NUL
		db	'     ', NUL
		db	'     ', NUL
		db	'MODELN', STR
Text1Line	db	' QUIT  ', NUL
		db	'CHAR/LN', NUL
		db	'WRD/SNT', NUL
		db	'PAR/PAG', NUL
		db	'SCR/FIL', NUL
		db	'REGION ', STR
Text2Line	db	'  QUIT  ', NUL
		db	'->search', NUL
		db	'<-search', NUL
		db	'replace ', NUL
		db	'?replace?', STR
Text3Line	db	' QUIT ', NUL
		db	' save ', NUL
		db	'write ', NUL
		db	'visit ', NUL
		db	'buffer', NUL
		db	'window', STR
Text4Line	db	' QUIT ', NUL
		db	'lit-ins', NUL
		db	'open-ln', NUL
		db	' fill ', NUL
		db	' ***QUIT TO DOS*** ', STR
Text5Line	db	' QUIT ', NUL
		db	'advance', NUL
		db	'retreat', NUL
		db	'->erase', NUL
		db	'<-erase', NUL
		db	' xchg  ', STR
Text9Line	db	'  QUIT  ', NUL
		db	'set mark', NUL
		db	'mark<>cur', NUL
		db	'!kill reg!', STR
Text10Line	db	'MAIN$'

Root	db	'===TOP===  '
Ch1	db	'/EDIT      '
Ch2	db	'/SEARCH    '
Ch3	db	'/FILE      '
Ch4	db	'/OTHER     '
Ch5	db	'/ED/CHR-LIN'
Ch6	db	'/ED/WRD-SNT'
Ch7	db	'/ED/PAR-PAG'
Ch8	db	'/ED/SCR-GLO'
CH9	db	'/ED/REGION '
CH10	db	' ILLEGAL   '

	PROGRAM ENDS
END
```
{% endraw %}

## SCREEN.ASM

{% raw %}
```
; Note:
; Strangely  enough,  on  some  machines the cursor still appears in the
; middle  of  the line on program exit. Darned IBM BIOS.  I really don't
; know  who  wrote  this  piece  of  s...  In  any  case,  this is a bug
; apparently  peculiar to some machines, which you have to fix yourself.
; grep for int 10h in *.ASM.

PUBLIC  FSCREEN

EXTRN	WindowStartline:Word
	
;---------------------------------------------------------------------------
Title Screen-builder

	; This updates a screen. It can build it from a given buffer
	; position in a window ( given by Buffer Start and Buffer End ).
	; NOTE: The speed of this function is absolutely crucial for
	; satisfactory results.




Program SEGMENT Para	PUBLIC  'code'
	ASSUME  CS:PROGRAM, DS:PROGRAM, ES:PROGRAM, SS:PROGRAM

Comment $

	Screen-start	ES:DI   Passed  DI
	Screen-end		Passed  DX
	File-start	DS:SI   Passed  SI

	File-cursor	DS:VAR  Global
	Marker-array	DS:VAR  Global
	Region-end	DS:VAR  Global

	File-end	DS:VAR  Returned

	AX	[Accu]
	BX	Real row
	CX	~
	 CH	Colorbyte
	 CL	[Column]	( can be gotten through BCB )
	DX	Screen_end	( passed )

	SI	DS: Sourceindex to Buffer	( passed-could be gotten from BCB )
	DI	ES: Index to Screen	( passed )

	BP	[End of File]
$

;------------------------Screen Macroes-----------------------------------
Include FDef.Def

; if mono or flicker ( not noflicker )
	stoschar	MACRO
		stosw
		ENDM

if noflicker
	stoschar	MACRO
		call	colorout
	ENDM
endif


Reg_end_char	EQU	'<'	
Wraparoundchar  EQU	'!'
maxcolumn	EQU	79d

Initialize_Variables	MACRO
		mov	AX, Screensegment
		mov	ES, AX
		mov	BP, DS:BCB.Fend ; load BX with the end of file ptr
		inc	BP		; for the cursor...
		xor	BX, BX
		xor	CL, CL
		xor	CH, CH		; holds line number
		cld
	ENDM


Set_Cursor	MACRO
			mov	DS:BCB.ScrCursor, DI
			push	SI
			push	DI
			push	AX
			push	BX
			push	DX
			push	CX
			push	BP

			mov	AH, 2		; set cursor position
			mov	BH, 0
			mov	DX, CX
			xchg	DH, DL
			add	DX, CS:WindowStartLine
			xchg	DH, DL
			int	10h		; request new cursor

			pop	BP
			pop	CX
			pop	DX
			pop	BX
			pop	AX
			pop	DI
			pop	SI
	ENDM

;*****************************START***************************************
; This routine handles everything after the end of the file is encountered.
; Since there is nothing that can happen afterwards, this is just a faster
; special handle of the normal procedure

Special_EOF	PROC	NEAR

		mov	AL, EOF_Char	; this is a small dot
		mov	AH, LowIntensity
		mov	SI, 0FFFFh	; signals we won't reach last char on
					; screen


SE1:		cmp	DI, DX		; have we reached the window's end ?
		jb	SE2
		jmp	Exit_routine	; yes, so quit

SE2:		stoschar			; no, so output the EOF character
		jmp	SE1

Special_EOF	ENDP
;***************************************************************************
Exit_routine:   dec	SI
		mov	DS:BCB.Scrend, SI	; SI-1 is the last character
						; on the scr
		mov	ES:[Modelinestart], ModeLinecolor*256+' '
						; small bug-fix
		ret



;***************************************************************************
FScreen PROC NEAR

		Initialize_Variables

Start:		cmp	DI, DX			; did we reach the screenend ?
		jae	Exit_routine

EOF_Q:		cmp	SI, BP			; did we reach the fileend ?
		jae	Special_EOF		; [special exception handling]

Get_char:	mov	AL, DS:[SI]		; get a character from the
		mov	AH, nocolor		; file

		cmp	CL, Byte Ptr maxcolumn	; are we at last screencolumn?
		jb	Get_Char1

			call	Wrap		; then postpone this char and
						; put up the wraparound char

Get_Char1:	cmp	SI, DS:BCB.Fcursor	; is this the cursor position?
		jne	no_cursor0

			Set_Cursor		; yes, so set it

no_cursor0:	cmp	AL, 32			; is this a ^* character
		jae	Get_Char2

			call	ControlChar	; handle the special character

Get_Char2:	stoschar				; normal character -> put it
		inc	BX			; to screen.
		inc	CL
		inc	SI

		jmp	Start


;---------------------------------------------------------------------------
Wrap:		cmp	AL, LF			; if we are at a LF, this is
		je	NoWrap			; not a wrap, but an EOLN
		inc	CH			; after real output now:
		xor	CL, CL			; col / row

		push	AX			; remember the real character
		mov	AX, Wraparoundchar	; output the wraparoundchar
		mov	AH, LowIntensity
		stoschar
		pop	AX

NoWrap:		ret				; and continue logical line

FScreen ENDP
;---------------------------------------------------------------------------
	; This handles all characters in the file that are smaller than
	; a SPACE ( i.e. controlcharacters ).
ControlChar	PROC	NEAR
if tab8spaces
	cmp	AL, 9				; TAB is 8 spaces
	je	ControlChar1
endif
	cmp	AL, LF				; LF means don't advance BX
	je	ControlLFret
	cmp	AL, CR				; CR means don't put a ^M
	je	ControlCRret
	cmp	AL, 1Ah				; EOF means special character
	je	ControlEOFret

	cmp	CL, Byte Ptr MaxColumn		; other control character
	jb	CC111				; means two chars w/ ^*
		call	Wrap			; if necessary

CC111:	push	AX				; put up the ^
	mov	AX, lowintensity*256+'^'
	stoschar
	pop	AX
	add	AL, '@'				; adjust to ASCII
	inc	CL
	cmp	CL, Byte Ptr maxcolumn		; are we at last column ?
	jae	Wrap				; if necessary

	ret

;---------------------------------------------------------------------------
	; this handles the TAB

ControlChar1:
	push	AX
	push	DX

	mov	DX, BX
	mov	DH, DL
	and	DH, 7
	mov	DL, 8
	sub	DL, DH

if color	; in color, we have to place the cursor on a visible
		; character
	mov	AX, ' '+nocolor*256		; and output n tabs
endif
if mono
	mov	ax, '	'+nodisplay*256
endif

CCC1:	dec	DL
	jz	CCCOut
	stoschar
	inc	BX
	inc	CL
if color
	mov	ax, '	'+nodisplay*256
endif
	cmp	CL, Maxcolumn
	jb	CCC1
	call	Wrap
	jmp	CCC1

CCCOut:	pop	DX
	pop	AX
	mov	AL, ' '
	ret

;---------------------------------------------------------------------------
	; This handles the rest of the line after a LF
ControlLFret:
	mov	AH, nodisplay

CLF0:	cmp	CL, Maxcolumn
	jae	CLF1
	inc	CL
	stoschar
	jmp	CLF0

CLF1:	mov	AX, '<'+lowintensity*256
	stoschar
	pop	AX				; get rid of returnaddress
	xor	CL, CL				; we start anew at another ln
	xor	BX, BX
	inc	CH
	inc	SI
	jmp	Start

	ret

;---------------------------------------------------------------------------
	; This simply displays no character at a CR or EOF
ControlCRret:
ControlEOFret:
	mov	AH, nodisplay
if color					; put cursor on display
	mov	ax, ' '+256*nocolor
endif
	ret


ControlCHAR	ENDP

if noflicker
colorout	proc	near
		push	dx
		mov	dx, 3dah
		push	ax
	Wait:	in	al, dx
		test	al, 8
		jz	Wait
		pop	ax
		stosw
		pop	dx
		ret
colorout	endp
endif

PROGRAM ENDS
	END
```
{% endraw %}

## SEARCH.ASM

{% raw %}
```
PUBLIC  ISearch, RSearch

EXTRN	CCenter:Near, FModeline:Near, FScreen:Near, .Msg:Near, .CLRMsg:Near
EXTRN	.CAPS:Near, .InCH:Near, .Screen:Near, Sound:Near, $Repeat:word
EXTRN	Macrodefinition:Byte, MacroInvocation:Byte, MACArg:Word, .Error0:Near
EXTRN	MainScreenDraw:Near, Maincommand:NEAR, FParse0:NEAR, $Repeat:Word
;---------------------------------------------------------------------------

	Page ,132
NAME FSearch

TITLE Search Command

IF2
	%OUT *Pass 2*
ENDIF

Program SEGMENT PARA	PUBLIC  'code'
	ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

INCLUDE FDEF.DEF

$Fail		db	'FAILING '
$Header	 db	'I-SEARCH: '
$SString	db	10 dup ('SEARCH')
$Failed	 db	0
$LastLength	db	0

;----------------------------------------------------------------------
ISearch PROC	NEAR

	mov	BP, DS:BCB.FCursor
	xor	DX, DX
	mov	AX, ScreenSegment
	mov	ES, AX
	mov	CS:$Header, 'I'
	call	.CLRMsg
	mov	SI, Offset $Header
	mov	CX, 10
	call	.Msg

ISearchLoop:
	jmp	GetString
GSR:	cmp	CS:$Failed, 0
	jne	ISFail
	mov	CS:$LastLength, 0 ; chance for ^S over
ISearch1:
	mov	CS:$Header, 'I'
	mov	SI, DS:BCB.FCursor
	sub	SI, DX
	call	.Find
	or	AH, AH
	jnz	ISFail0


ISOK:	add	SI, DX
	mov	DS:BCB.FCursor, SI
	call	.SScreen
	call	.CLRMsg
	mov	SI, Offset $Header
	mov	CX, 10
	add	CX, DX
	call	.Msg
	mov	CS:$Failed, 0
	jmp	ISearchLoop

ISFail0:dec	DS:BCB.FCursor
ISFail: mov	CS:$Failed, 0FFh
	push	DX
	call	Sound
	call	.CancelMacro
	call	.CLRMsg
	pop	DX
	mov	SI, Offset $Fail
	mov	CX, 18
	add	CX, DX
	call	.Msg

	jmp	ISearchLoop



; <ESC>, <DEL>, <REV>, <ISE>
Getstring:
	push	DX
GetString0:
	call	.InCH
	jz	GetString0
	pop	DX

	cmp	AL, 8	; ^H
	je	ISMinus
	cmp	AL, 18  ; ^R
	je	ISR
	cmp	AL, 19  ; ^S
	je	ISI
	cmp	AL, LF	; ^J
	je	GetString1
	cmp	AL, TAB	; ^I
	je	GetString1
	cmp	AL, 17	; ^Q
	je	QuoteOne
	cmp	AL, ' '
	jb	ISExit
GetString1:
	call	.CAPS
	mov	BX, DX
	mov	CS:[BX+Offset $SString], AL
	inc	DX
	jmp	GSR

ISMinus:cmp	DX, 0
	je	ISExit
	dec	DX
	dec	DS:BCB.FCursor
	mov	CS:$Failed, 0
	jmp	GSR

ISI:	cmp	DX, 0
	je	.SSSS
	inc	DS:BCB.FCursor
	jmp	GSR
.SSSS:  mov	DL, CS:$LastLength
	xor	DH, DH
	jmp	GSR


ISR:	cmp	DX, 0
	je	RSearch
	jmp	RSearch1

ISExit: mov	CS:$LastLength, DL
	mov	CS:$Failed, 0
	mov	DS:BCB.FCursor, BP
	push	AX
	call	.CLRMsg
	pop	AX

	pop	BP			; kill return address
	pop	BX
	pop	BX			; adjust stack ptr to return from case

	mov	CS:$Repeat, 0
	call	FParse0
	or	AH, AH
	jnz	GotRealcommand

	jmp	MainScreenDraw

GotRealcommand:
	jmp	Maincommand

QuoteOne:
	push	DX			; do avoid all further checking
Q1:	call	.InCH
	jz	Q1
	pop	DX
	jmp	GetString1

ISearch ENDP

;---------------------------------------------------------------------------
RSearch PROC	NEAR

	xor	DX, DX
	mov	BP, DS:BCB.FCursor
	mov	CS:$Header, 'R'
	mov	AX, ScreenSegment
	mov	ES, AX
	call	.CLRMsg
	mov	SI, Offset $Header
	mov	CX, 10
	call	.Msg

RSearchLoop:
	jmp	GetStringR
GSRR:	cmp	CS:$Failed, 0
	jne	RSFail
	mov	CS:$LastLength, 0 ; chance for ^R over
RSearch1:
	mov	CS:$Header, 'R'
	mov	SI, DS:BCB.FCursor
	call	.Bind
	or	AH, AH
	jnz	RSFail


RSOK:	mov	DS:BCB.FCursor, SI
	call	.SScreen
	call	.CLRMsg
	mov	SI, Offset $Header
	mov	CX, 10
	add	CX, DX
	call	.Msg
	mov	CS:$Failed, 0
	jmp	RSearchLoop

RSFail: mov	CS:$Failed, 0FFh
	push	DX
	call	Sound
	call	.CancelMacro
	call	.CLRMsg
	pop	DX
	mov	SI, Offset $Fail
	mov	CX, 18
	add	CX, DX
	call	.Msg

	jmp	RSearchLoop



; <ESC>, <DEL>, <REV>, <ISE>
GetstringR:
	push	DX
GetStringR0:
	call	.InCH
	jz	GetStringR0
	pop	DX

	cmp	AL, 8	; ^H
	je	RSMinus
	cmp	AL, 19  ; ^S
	je	RSI
	cmp	AL, 18  ; ^R
	je	RSR
	cmp	AL, LF	; ^J
	je	GetStringR1
	cmp	AL, TAB	; ^I
	je	GetStringR1
	cmp	AL, 17	; ^Q
	je	QuoteOne1
	cmp	AL, ' '
	jae	GetStringR1
	jmp	ISExit
GetStringR1:
	call	.CAPS
	mov	BX, DX
	mov	CS:[BX+Offset $SString], AL
	inc	DX
	jmp	GSRR

QuoteOne1:
	push	DX			; do avoid all further checking
Q11:	call	.InCH
	jz	Q11
	pop	DX
	jmp	GetStringR1

RSMinus:cmp	DX, 0
	jne	RSM1
	jmp	ISExit
RSM1:	dec	DX
	inc	DS:BCB.FCursor
	mov	CS:$Failed, 0
	jmp	GSRR

RSR:	cmp	DX, 0
	je	.SSSS1
	dec	DS:BCB.FCursor
	jmp	GSRR
.SSSS1: mov	DL, CS:$LastLength
	xor	DH, DH
	jmp	GSRR


RSI:	cmp	DX, 0
;	je	ISearch
;	jne	ISearch1
	je	RSI1
	jmp	ISearch1
RSI1:	jmp	ISearch

RSearch ENDP

;---------------------------------------------------------------------------
.SScreen	PROC	Near

	push	DX
	call	.Screen
	call	FModeline
	pop	DX
	mov	BP, DS:BCB.FCursor
	ret

.SScreen	ENDP

;---------------------------------------------------------------------------
Wildcard	EQU	10	; ^J
.FIND	PROC	Near
; SI -> Start of Search	DX  -> # characters in Searchbuffer

	dec	SI
.FNew:  xor	BX, BX  ; last try unsuccessful, try one character further
	mov	DI, Offset $SString
	inc	SI
.FMay:  cmp	SI, DS:BCB.FEnd  ; all characters so far match
	jae	.FErr
	mov	AH, CS:[DI+BX]
	cmp	AH, Wildcard
	je	.F1Mat
	mov	AL, DS:[SI+BX]
	call	.CAPS
	cmp	AL, AH
	jne	.FNew
.F1Mat: inc	BX		; one character matches
	cmp	BX, DX
	jb	.FMay

.FFound:mov	AH, 0
	ret
.FErr:  mov	AH, 0FFh
	ret
.Find	ENDP

;....................
.BIND	PROC	Near
; SI -> Start of Search	DX  -> # characters in Searchbuffer

	inc	SI
.BNew:  xor	BX, BX  ; last try unsuccessful, try one character further
	mov	DI, Offset $SString
	dec	SI
.BMay:  cmp	SI, 100h  ; all characters so far match
	jb	.BErr
	mov	AH, CS:[DI+BX]
	cmp	AH, Wildcard
	je	.B1Mat
	mov	AL, DS:[SI+BX]
	call	.CAPS
	cmp	AL, AH
	jne	.BNew
.B1Mat: inc	BX		; one character matches
	cmp	BX, DX
	jb	.BMay

.BFound:mov	AH, 0
	ret
.BErr:  mov	AH, 0FFh
	ret
.Bind	ENDP

.CancelMacro	PROC	NEAR
	cmp	CS:MacroInvocation, TRUE
	je	.CYes
	cmp	CS:MacroDefinition, TRUE
	je	.CYes
	cmp	CS:MacArg, 0
	jne	.CYes
	cmp	CS:$Repeat, 0
	jne	.CYes
	ret

MacCancel	db	'*** Cancelled Macro ***'
.CYes:	mov	CS:$LastLength, DL
	mov	CS:$Failed, 0
	mov	DS:BCB.FCursor, BP
	call	.CLRMsg

	mov	SI, Offset MacCancel
	mov	CX, 23
	jmp	.Error0
.CancelMacro	ENDP
PROGRAM ENDS
	END
```
{% endraw %}

## WINDOWS.ASM

{% raw %}
```
PUBLIC	SwitchWindow, ToggleNumWindows, SelectBuffer, BufToggle, InitWIndows

PUBLIC	WindowStart, WindowEnd, WindowStartLine		; for pure screens
PUBLIC	NumWinsScr,					; for fns like C-V
PUBLIC	ActiveBuffer, ActiveWindow			; for modeline
PUBLIC	Separatorline
PUBLIC	CBuffer1

EXTRN	$Buffer1:Word, $Buffer2:Word, $BufferNumber:Word
EXTRN	.Error0:Near, .Msg:Near, .Screen:Near, Sound:NEAR, .InCH:Near
EXTRN	.CLRMsg:NEAR
;---------------------------------------------------------------------------
	Page ,132
NAME Windows

TITLE Windows and Buffers

INCLUDE        FDEF.DEF


;---------------------------------------------------------------------------
Program        SEGMENT PARA    PUBLIC  'code'
       ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

;...........................................................................

ActiveBuffer	dw	0	; buffer = [0,1...9]		; PUBLIC

Windowstart	dw	Line0		; [0 , 11*160]		; PUBLIC
Windowend	dw     TextLastLine*160	; [9*160 , 19*160]	; PUBLIC

WindowStartLine	dw	0	; used to position cursor	; PUBLIC
NumWinsScr	dw	0	; used to calculate C-V etc	; PUBLIC



ActiveWindow	db	0	; window = [0,1]	; PUBLIC

CBuffer1	dw	0
CBuffer2	dw	0
PBuffer1	dw	0
PBuffer2	dw	0
CBSeg1		dw	0	; just for easier access
CBSeg2		dw	0
PBSeg1		dw	0
PBSeg2		dw	0

OneBufMsg	db	'*** Only One Buffer ***'
UserAbortMsg	db	'*** User Abort ***'
ChooseBuffer	db	'Choose new Buffer: '
WelcomeMsg	db	'Available Buffers:', 0
BuffernumberMsg	db	'1)  ', 0
ByeMsg		db	'----------------------------------------', 0

CURSOR	MACRO	X, Y
	mov	AH, 2
	mov	BH, 0
	mov	DX, X*256+Y
	int	BIOS
ENDM

;---------------------------------------------------------------------------
InitWindows	PROC	NEAR

	mov	CS:ActiveWindow, Win1
	mov	CS:ActiveBuffer, 0

	mov	CS:CBuffer1, 0
	mov	CS:CBuffer2, 1
	mov	CS:PBuffer1, 1
	mov	CS:PBuffer2, 0

	mov	AX, CS:$Buffer1			; init windows
	mov	DS, AX
	mov	CS:CBSeg1, AX
	mov	CS:PBSeg2, AX

	mov	AX, CS:$Buffer2

	mov	CS:CBSeg2, AX
	mov	CS:PBSeg1, AX
	ret
InitWindows	ENDP
;---------------------------------------------------------------------------
; ToggleNumWindows
;
;	FN:	toggles the number of windows on the screen, leaves the
;		cursor in the active window.
;
;	OUT:	NumWinsScr:	New Value
;		WindowStart:	New Value
;		WindowEnd:	New Value
;		WindowStartLine:New Value

ToggleNumWindows	PROC	NEAR

	xor	CS:NumWinsScr, Toggle
	cmp	CS:NumWinsScr, OneWindow
	je	To1Window

To2Windows:
	call	SwitchWindow			; this will split up one
	call	.Screen				; display it
	call	SwitchWindow
	call	SeparatorLine
	ret

To1Window:
	mov	CS:WindowStart, Line0
	mov	CS:WindowStartLine, 0
	mov	CS:WindowEnd, Line0+FullScreen
	ret

ToggleNumWindows	ENDP

;---------------------------------------------------------------------------
; SwitchWindow:
;
;	FN:	switches to the other buffer, if both windows edit an
;		identical buffer, we need to arrange a few special things.
;
;	OUT:	ActiveWindow:	New Value
;		DS:		new Buffer Segment
;		Aux*:		to reflect concurrent editing
;
SwitchWindow	PROC	NEAR

	xor	CS:ActiveWindow, Toggle

	mov	AX, CS:CBuffer1
	cmp	AX, CS:CBuffer2
	jne	DifferentBuffers

;. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
IdenticalBuffers:			; if W1[Buffer]=W2[Buffer]
	mov	AX, DS:BCB.AuxScrStart	; xchg Screen Starts
	xchg	AX, DS:BCB.ScrStart
	mov	DS:BCB.AuxScrStart, AX

	mov	AX, DS:BCB.AuxCursor	; and xchg Cursors
	xchg	AX, DS:BCB.FCursor
	mov	DS:BCB.AuxCursor, AX

	mov	AX, DS:BCB.FCursor		; if we have edited the Window
	cmp	AX, DS:BCB.FEnd			; such that the cursor would
	ja	ResetCursor 			; be further than the end of
						; file...

	mov	BX, AX				; if we are on a LF, move back
	cmp	Byte Ptr DS:[BX], LF		; to the CR
	jne	SwitchScreen
	dec	DS:BCB.FCursor
	jmp	SwitchScreen			; and update screen

ResetCursor:
	mov	AX, DS:BCB.FEnd
	mov	DS:BCB.FCursor, AX
	jmp	SwitchScreen


;. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
DifferentBuffers:

	cmp	CS:ActiveWindow, Win1		; which window is active ?
	je	Switchto1

Switchto2:
	mov	DS, CS:CBSeg2
	mov	AX, CS:CBuffer2
	mov	CS:ActiveBuffer, AX
	jmp	SwitchScreen

Switchto1:
	mov	DS, CS:CBSeg1
	mov	AX, CS:CBuffer1
	mov	CS:ActiveBuffer, AX
	jmp	SwitchScreen

;...........................................................................
SwitchScreen:
	cmp	CS:NumWinsScr, OneWindow	; if we presently have only
	jne	SS2				; one Window,

SS1:	mov	CS:WindowStart, Line0		; there is just one window
	mov	CS:WindowStartLine, 0		; displayed
	mov	CS:WindowEnd, Line0+FullScreen
	ret

SS2:	mov	CS:WindowStart, Line0		; there are two windows displ.
	mov	CS:WindowStartLine, 0

	cmp	CS:ActiveWindow, Win2		; find out the start of the
	jne	SS2C				; Window ( either l0 or l10 )
	mov	CS:WindowStart, Line10		; bottom window
	mov	CS:WindowStartLine, 10

SS2C:	mov	AX, CS:WindowStart		; top window
	add	AX, HalfScreen
	mov	CS:WindowEnd, AX
	ret

SwitchWindow	ENDP

;---------------------------------------------------------------------------
; SelectBuffer:
;
;	FN:	switches the active buffer in window n to be the previous
;		buffer, and assigns a new one
;
;		Note that at exit time I always draw a Separatorline: if
;		there should be none, the screen update will erase it
;		quickly!
;
SelectBuffer	PROC	NEAR

	call	TellBuffers

	call	.CLRMsg
	mov	SI, Offset ChooseBuffer
	mov	CX, 19
	call	.Msg

Wait:	call	.Inch
	jz	Wait

	cmp	AL, CTL_G
	je	UserAbort

	cmp	AL, CR
	je	Userequal

	sub	AL, '1'
	sub	AH, AH

	cmp	AX, CS:$BufferNumber
	jb	Foundnewbuffer
	call	Sound
	jmp	Wait
UserAbort:
	call	Separatorline			; without check for double !
	mov	SI, Offset USERABORTMSG
	mov	CX, 18
	jmp	.Error0
Userequal:
	call	Separatorline			; without check for double !
	ret

FoundNewBuffer:
	mov	CX, AX				; this will be the new number
	cmp	CX, CS:ActiveBuffer
	jne	FNB1
	call	Separatorline			; without check for double !
	jmp	.CLRMsg

FNB1:	add	AX, AX
	add	AX, Offset $Buffer1		; this will be the new segment
	mov	BX, AX				; to convince the assembler
	mov	DX, CS:[BX]

	cmp	CS:ActiveWindow, Win1		; and it goes into window n
	je	WithWindow1

WithWindow2:
	push	cx
	call	Separatorline
	pop	cx
	mov	AX, CS:CBuffer2
	mov	CS:PBuffer2, AX

	mov	AX, CS:CBSeg2
	mov	CS:PBSeg2, AX

	mov	CS:CBuffer2, CX
	mov	CS:ActiveBuffer, CX
	mov	CS:CBSeg2, DX
	mov	DS, DX
	jmp	.CLRMsg

WithWindow1:
	push	cx
	call	Separatorline
	pop	cx
	mov	AX, CS:CBuffer1
	mov	CS:PBuffer1, AX

	mov	AX, CS:CBSeg1
	mov	CS:PBSeg1, AX

	mov	CS:CBuffer1, CX
	mov	CS:ActiveBuffer, CX

	mov	CS:CBSeg1, DX
	mov	DS, DX
	jmp	.CLRMsg
SelectBuffer	ENDP

;---------------------------------------------------------------------------
;---------------------------------------------------------------------------
; simply exchanges the previous and the current buffer
;
BufToggle	PROC	Near

	cmp	CS:$Buffernumber, 1
	jbe	BTError

	mov	AL, CS:ActiveWindow		; now check which Window
	cmp	AL, Win1			; we are currently in
	je	UpdateWin1

UpdateWin2:
	mov	AX, CS:CBSeg2			; exchange the buffer segment
	xchg	AX, CS:PBSeg2
	mov	CS:CBSeg2, AX
	mov	DS, AX

	mov	AX, CS:CBuffer2			; exchange the buffer name
	xchg	AX, CS:PBuffer2
	mov	CS:CBuffer2, AX
	mov	CS:ActiveBuffer, AX
	ret


UpdateWin1:
	mov	AX, CS:CBSeg1			; exchange the buffer segment
	xchg	AX, CS:PBSeg1
	mov	CS:CBSeg1, AX
	mov	DS, AX

	mov	AX, CS:CBuffer1			; exchange the buffer name
	xchg	AX, CS:PBuffer1
	mov	CS:CBuffer1, AX
	mov	CS:ActiveBuffer, AX
	ret

BTError:
	mov	CX, 23
	mov	SI, Offset OneBufMsg
	jmp	.Error0

BufToggle	ENDP
;---------------------------------------------------------------------------
SeparatorLine	PROC	NEAR
	mov	AX, ScreenSegment
	mov	ES, AX
	mov	DI, HalfScreen+2
	mov	AX, Modelinecolor*256+'-'
	mov	CX, 80
	rep	stosw
	ret
SeparatorLine	ENDP
;---------------------------------------------------------------------------
TellBuffers	PROC	NEAR

	mov	CS:StartofPrint, 0
	mov	CS:StartofPrintColumn, 0
	call	SwitchNormal

	push	DS

	mov	SI, Offset WelcomeMsg
	call	PRINTCS
	call	PRINTCR
	sub	DX, DX
	call	PRINTCR
	CURSOR	20, 19

	mov	BX, 0
	mov	CX, CS:$Buffernumber

TBLoop:	mov	DS, CS:[BX+Offset $Buffer1]
	shr	BX, 1
	mov	AX, BX
	add	BX, BX
	add	BX, 2
	push	AX
	cmp	AX, CS:ActiveBuffer
	je	SWI
	call	SwitchNormal
	jmp	TBL1
SWI:	call	SwitchInverse

TBL1:	pop	AX
	add	AL, '1'
	mov	CS:BuffernumberMsg, AL
	mov	SI, Offset BuffernumberMsg
	call	PRINTCS

	mov	AL, DS:BCB.Dirty
	cmp	AL, TRUE
	je	PNS
	mov	SI, Offset Saved
	jmp	TBL2
PNS:	mov	SI, Offset NotSaved
TBL2:	call	PrintCS

	mov	SI, Offset BCB.FIle
	call	PrintDS
	call	PrintCR
	loop	TBLoop
	pop	DS

	call	SwitchNormal
	mov	SI, Offset ByeMsg
	call	PRINTCS
	call	PRINTCR
	ret
TellBuffers	ENDP

;---------------------------------------------------------------------------
StartofPrint		dw	0
StartofPrintColumn	dw	0
PrintColor		db	0
Saved			db	' [Saved]::     ', 0
NotSaved		db	'*[Changed]::   ', 0

; IN:	SI -> ASCIZstring
;	CS:StartofPrint, 0
;	CS:PrintColumn, 0
PrintCS	PROC	NEAR

	push	AX
	push	DI
	push	SI
	push	DX
	push	CX

	mov	AX, ScreenSegment
	mov	ES, AX

	mov	DI, CS:StartofPrint
	mov	DX, CS:StartofPrintColumn

PLCS:	lods	Byte Ptr CS:[SI]
	cmp	AL, 0
	je	PrCS1
	mov	AH, CS:PrintColor
	stosw
	inc	DX
	jmp	PLCS

PrCS1:	mov	AL, ' '
	mov	AH, CS:Printcolor
	stosw
	stosw
	add	DX, 2
	mov	CS:StartOfPrint, DI
	mov	CS:StartOfPrintCOlumn, DX
	pop	CX
	pop	DX
	pop	SI
	pop	DI
	pop	AX
	ret

PrintCS	ENDP
;---------------------------------------------------------------------------

PrintDS	PROC	NEAR

	push	AX
	push	DI
	push	SI
	push	DX
	push	CX

	mov	AX, ScreenSegment
	mov	ES, AX

	mov	DI, CS:StartofPrint
	mov	DX, CS:StartofPrintColumn

PLDS:	lods	Byte Ptr DS:[SI]
	cmp	AL, 0
	je	PrDS1
	mov	AH, CS:PrintColor
	stosw
	inc	DX
	jmp	PLDS

PrDS1:	mov	AX, ' '+nocolor*256
	stosw
	stosw
	add	DX, 2
	mov	CS:StartOfPrint, DI
	mov	CS:StartOfPrintCOlumn, DX
	pop	CX
	pop	DX
	pop	SI
	pop	DI
	pop	AX
	ret

PrintDS	ENDP
;---------------------------------------------------------------------------
PRINTCR	PROC	NEAR

	mov	AX, ScreenSegment
	mov	ES, AX

	mov	AX, ' '+nocolor*256

	mov	DI, CS:StartofPrint
	mov	DX, CS:StartofPrintColumn

PRCRL:	stosw
	inc	DX
	cmp	DX, 80
	jne	PRCRL

	mov	CS:StartofPrintColumn, 0
	mov	CS:StartofPrint, DI
	ret
PRINTCR	ENDP
;---------------------------------------------------------------------------
SwitchInverse	PROC	NEAR
	mov	CS:PrintColor, Inverse
	ret
SwitchInverse	ENDP
SwitchNormal	PROC	NEAR
	mov	CS:Printcolor, Nocolor
	ret
SwitchNormal	ENDP



;---------------------------------------------------------------------------
	PROGRAM	ENDS
END
```
{% endraw %}

## MODELINE.ASM

{% raw %}
```
PUBLIC  FModeline

EXTRN   $Wait:Word, .?Col:Near, .CLRMsg:Near, ActiveWindow:Byte
EXTRN	ActiveBuffer:Byte, Macrodefinition:Byte

;---------------------------------------------------------------------------
TITLE Modeline Updater

	; This routine builds the modeline to the screen. It is very ugly,
	; and should be rewritten, but it works. There are many screenpokes
	; in this routine, but fairly obvious and easy to change. [SCREEN]



Program SEGMENT PARA    PUBLIC  'code'
        ASSUME  CS:Program, DS:Program, ES:Program, SS:Program


	INCLUDE FDEF.DEF

MS_FN	MACRO	Fun
	mov	AH, Fun
	int	21h
	ENDM

stoschar	MACRO
	call	stoscharacter
	ENDM
	
; takes a number in AL [00-99] and outputs its ASCII representation


Msg1	db	'  [TEXT - '
n1	equ	10
SMsg1	db	'  [WRAP - '
sn1	equ	10
Msg2	db	':  '
n2	equ	3
Msg3	db	']  '
n3	equ	3
Msg4	db	'S='
n4	equ	2
Msg5	db	'K  COL '
n5	equ	7
Msg6	db	'   --'
n6	equ	5
Msg7	db	'%--'
n7	equ	3

Msg11	db	'DEF -'
n11	equ	5

Months  db      'JanFebMarAprMayJunJulAugSepOctNovDec'

Newtime	dw	0
Nt	db	0
Oldtime	db	0

EntryStackptr	dw	0
;---------------------------------------------------------------------------
FModeline       PROC    Near

	cld

	MS_FN   2Ch			; an update is necessary every second
	mov	CS:Newtime, CX
	mov	CS:Nt, DH
	cmp	DH, CS:Oldtime		; if the old seconds are the same as
	jne	Update			; the new seconds, no update is nece.
	ret


Update:	dec     CS:$Wait		; if n secs are over clear modeline
	jnz     MWrite
	call    .ClrMsg


MWrite:	mov	CS:EntryStackptr, SP
	mov	AX, Screensegment		; print to the screen segment
	mov	ES, AX
	mov	DI, ModelineStart
;----------
	call	.?Textmode
;----------
	call	.?inMacro
;----------
					; put the buffer name to screen
	mov	AL, 'B'
	stoschar

	mov	AL, CS:ActiveBuffer
	add	AL, '1'
	stoschar

	mov	AL, '-'
	stoschar

	mov	AL, 'W'
	stoschar

	mov	AL, CS:ActiveWindow
	add	AL, '1'
	stoschar

;---------
	mov	SI, Offset Msg2		; put the ':  '
	mov	CX, n2
	call	Modelinetext
;----------
	mov	SI, Offset BCB.File	; now put the filename
	call	ASCIIZText
;----------
	mov	SI, Offset Msg3		; put up some messages
	mov	CX, n3
	call	ModelineText
;--------------------

	MS_FN   2Ah			; now put up the date

	mov     BL, DH			; month is in DH
	add     BL, DH
	add     BL, DH			; BX:=3*months
	xor     BH, BH

	push	dx
	mov	AL, CS:[BX+Offset Months-3]	; and tranlate from table
	stoschar

	mov	AL, CS:[BX+Offset Months-2]
	stoschar				; *E
	mov	AL, CS:[BX+Offset Months-1]
	stoschar				; *E

	mov	AL, ' '
	stoschar
	pop	DX

	mov	AL, DL
	call	Hex8Asc

	mov	AL, ' '
	stoschar
	stoschar

;---------------------
; change Modeline time

	mov	AL, Byte Ptr CS:Newtime+1
	call	Hex8Asc				; hours

	mov	AL, ':'
	stoschar

	mov	AL, Byte Ptr CS:Newtime
	call	Hex8Asc				; minutes

	mov	AL, ':'
	stoschar

	mov	AL, CS:Nt
	mov	CS:Oldtime, AL
	call	Hex8Asc				; seconds

;--------------------
						; Length of File
	mov	AL, ' '
	stoschar
	stoschar
	mov	SI, Offset Msg4
	mov	CX, n4
	call	ModelineText

	mov	AL, ' '
	stoschar

        mov     CX, DS:BCB.FEnd
        sub     CX, 100h
        shr     CH, 1
        shr     CH, 1           		; V : 0..63

	mov	AL, CH
	call	Hex8Asc


;-------------------
	mov	SI, Offset Msg5			; Print the cursor column now
	mov	CX, n5
	call	ModelineText

	push    DI				; find the cursor's column
	call    .?Col
	pop     DI

	mov     AX, DS:BCB.FCurCol		; should have been calculated
	cmp	AX, 999
	jbe	PMCorr
	xor	AX, AX


PMCorr: mov     CL, 100d                ; 1) divide by 100 ( assumes <999 )
	div     CL                      ; divide 0000NNNNh by 10000d
	push	AX
	add     AL, 30h                 ; adjust to Ascii representation
        stoschar
	pop	AX

	mov	AL, AH
        aam                             ; divide by 100 -> DIV in AH, MOD in AL
        xchg    AL, AH
	push	AX
        add     AL, 30h
        stoschar
	pop	AX
        mov     AL, AH
        add     AL, 30h
        stoschar

;-------------------
	mov	SI, Offset Msg6		; change Percent in File
	mov	CX, 6
	call	ModeLineText		; "--"

        mov     AX, DS:BCB.FCursor      ; DS:BCB.FCursor
        sub     AX, 100h
        mov     CX, 100                 ; Multiply by 100 for percent
        mul     CX
        mov     CX, DS:BCB.FEnd
        sub     CX, 100h                ; FileLength
        cmp     CX, 0
        je      Zerodiv
        div     CX
	mov	Word Ptr ES:[DI-2], ' '+Modelinecolor*256
	mov	AH, modelinecolor
	cmp	AL, 100
	je	PTop
	; pass AL
	call	Hex8Asc			; AL:=(Cursor*100)/Length
	jmp	Clearrest

PTop:	mov	AL, '1'			; AL = 100%
	stoschar
	mov	AL, '0'
	stoschar
	mov	AL, '0'
	stoschar
	jmp	Clearrest

ZeroDiv:mov	AL, '-'			; AL = 0 %
	stoschar

ClearRest:
	mov	SI, Offset Msg7
	mov	CX, n7
	call	Modelinetext
	mov	AX, ' '
ClearRest1:				; this will clean the rest
	stoschar			; of our modeline
	jmp	ClearRest1

;***************************************************************************
.?InMacro	PROC	NEAR
	cmp	CS:Macrodefinition, TRUE
	je	.?In1
	ret
.?In1:	mov	SI, Offset Msg11
	mov	CX, n11
	jmp	Modelinetext

.?InMacro	ENDP

FModeline       ENDP

;---------------------------------------------------------------------------
Hex8Asc	PROC	NEAR

        xor     AH, AH
                                        ; number 0..99

					; now the number is in the range 0..99
					; now we can use the AAM instruction !
	aam				; divide by 100-> DIV in AH, MOD in AL
	xchg    AH, AL
	add     AL, '0'

	push	AX
	stoschar		; *E
	pop	AX

	mov     AL, AH
	add     AL, '0'
	stoschar
	ret

Hex8Asc	ENDP
;---------------------
ModeLineText	PROC	NEAR
	mov	AL, CS:[SI]
	inc	SI
	stoschar
	loop	ModelineText
	ret
ModeLineText	ENDP

ASCIIZText	PROC	NEAR
	mov	AL, DS:[SI]
	inc	SI
	cmp	AL, 0
	je	ASCIIZEnd
	stoschar
	jmp	ASCIIZText
ASCIIZEnd:
	ret

ASCIIZText	ENDP
;--------------------
.?textMode	PROC	NEAR
	test	DS:BCB.EDMode, Wrapmode
	jnz	Putwrap

	mov	SI, Offset Msg1		; put '[TEXT - B' to scr
.?T1:	cmp	DS:BCB.Dirty, TRUE
	jne	DSpace
	mov	Byte Ptr CS:[SI+1], '*'
	jmp	DM
DSpace:	mov	Byte Ptr CS:[SI+1], ' '
DM:	mov	CX, n1			; and add a space at the end
	mov	AH, modelinecolor
	jmp	ModeLineText

PutWrap:mov	SI, Offset SMsg1
	jmp	.?T1

.?TextMode	ENDP

;***************************************************************************
Stoscharacter	PROC	NEAR
	cmp	DI, ModeLineEnd
	jae	Exit
	push	ax
	pop	ax
	mov	AH, modelinecolor
	if color			; even though this should be noflicker
	push	AX			; here we can sacrifice enough time
	push	DX			; to update flickerfree
	mov	dx, 3dah
Wait:	in	al, dx
	test	al, 8
	jz	Wait
	pop	DX
	pop	AX
endif
	stosw
	ret

Exit:	mov	SP, CS:EntryStackptr
	ret
Stoscharacter	ENDP
;***************************************************************************
Comment $ The following turns out to turn off the screen for too long
enablescreen	proc	near
	mov	dx, 3D8h
	mov	al, 00000101b
	out	dx, al
	ret
enablescreen	endp

disablescreen	proc	near
	mov	dx, 3dah		; wait until we can disable the screen
Wait1:	in	al, dx
	test	al, 8
	jz	Wait1
	mov	dx, 3D8h		; and disable it
	mov	al, 00001101b
	out	dx, al
	ret
disablescreen	endp
$
        PROGRAM ENDS
END


```
{% endraw %}

## MORESCRE.ASM

{% raw %}
```
PUBLIC	NextScreen, SCrollUp, PreviousScreen, ScrollDown

EXTRN	NUMWinsSCR:WORD, GETCOLUMN:NEAR, .Error0:NEAR, FSCREEN:NEAR
EXTRN	WindowStart:Word, WindowEnd:Word
;---------------------------------------------------------------------------
	Page ,132
NAME	FSCRADVANCE

TITLE Global Commands to advance screen

Program SEGMENT PARA	PUBLIC  'code'
	ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

INCLUDE FDEF.DEF

;---------------------------------------------------------------------------
ScreenEndMessage	db	'*** File End ***'
ScreenStartMessage	db	'*** File Start ***'
DesiredLines		dw	19
OldScrStart		dw	0
;---------------------------------------------------------------------------
ScrollUp	PROC	NEAR

	mov	BX, DS:BCB.FCursor
	cmp	BX, DS:BCB.FEnd
	jae	SUErr

	mov	BX, DS:BCB.ScrStart	; get the current screenstart

	call	Advancephysicalline

	mov	DS:BCB.ScrStart, BX
	cmp	BX, DS:BCB.FCursor
	jb	SUEnd
	mov	DS:BCB.FCursor, BX

SUEnd:	cmp	BX, DS:BCB.FEnd
	ja	SUErr
	ret

SUErr:	mov	SI, Offset ScreenEndMessage ; if we would pass the end, error
	mov	CX, 16
	jmp	.Error0

ScrollUp	ENDP
;---------------------------------------------------------------------------
%OUT	NEXTSCREEN ();

NextScreen	PROC	NEAR

	mov	BX, DS:BCB.ScrStart	; get the current screenstart
	xor	BP, BP			; zero lines advanced

	cmp	CS:NumWinsScr, 0	; find out how many lines forward
	je	Onewindow1
Twowindow:
	mov	CS:DesiredLines, HalfWindow-2
	jmp	CNLoop2
OneWindow1:
	mov	CS:Desiredlines, Fullwindow-2


CNLoop2:call	Advancephysicalline	; advance this many lines
	inc	BP
	cmp	BP, CS:DesiredLines
	ja	CNEnd
	cmp	BX, DS:BCB.FEnd
	jb	CNLoop2
	mov	SI, Offset ScreenEndMessage ; if we would pass the end, error
	mov	CX, 16
	jmp	.Error0

CNEnd:	mov	DS:BCB.ScrStart, BX	; found next screen start, so announce
	mov	DS:BCB.FCursor, BX
	ret

Nextscreen	ENDP
;---------------------------------------------------------------------------
;---------------------------------------------------------------------------
;...........................................................................
AdvancePhysicalLine	PROC	NEAR
	xor	DX, DX
APL0:	cmp	Byte Ptr DS:[BX], TAB
	jne	APL1
						; adjust for a TAB
	push	CX			; DX:= DX+(8- [(DX-1) mod 8])
	push	DX
	dec	DX
	and	DX, 111b
	mov	CX, 8
	sub	CX, DX
	pop	DX
	add	DX, CX
	pop	CX
	dec	DX			; will be incremented right again
	jmp	APL3

APL1:	cmp	Byte Ptr DS:[BX], ' '
	jae	APL2
	inc	DX				; adjust for a ^Character

APL2:	cmp	Word Ptr DS:[BX], CRLF
	jne	APL3
	add	BX, 2
	ret					; we have found it at CR

APL3:	inc	DX
	inc	BX
	cmp	DX, 79
	jb	APL0

	ret					; we have found it at wrap

AdvancePhysicalLine	ENDP
;---------------------------------------------------------------------------
ScrollDown	PROC	NEAR

	mov	BX, DS:BCB.ScrStart	; get the current screenstart
	cmp	BX, 100h
	jbe	SDErr

	mov	CS:OldScrStart, BX
	dec	BX
SDAgain:call	Retreatphysicalline
	cmp	Word Ptr DS:[BX+1], CRLF
	jne	SD1
	cmp	Byte Ptr DS:[BX], LF
	jne	SD1
	inc	BX			; bug we are on >LF< CR LF
SD1:	call	FindLineStart
	cmp	BX, CS:OldScrStart
	je	SDAgain

	mov	DS:BCB.ScrStart, BX

	mov     DX, CS:WindowEnd
	mov     DI, CS:WindowStart
	mov     SI, DS:BCB.ScrStart
	call	FScreen				; to find out the new end

	mov	BX, DS:BCB.ScrEnd
	cmp	BX, DS:BCB.FCursor
	ja	SDEnd
	dec	BX
	cmp	Byte Ptr DS:[BX], LF
	jne	SD2
	dec	BX
SD2:	mov	DS:BCB.FCursor, BX

SDEnd:	ret



SDErr:	mov	SI, Offset ScreenStartMessage	; if we would pass the
	mov	CX, 18				; start, error
	jmp	.Error0

ScrollDown	ENDP

;---------------------------------------------------------------------------
; This only approximates the right place by assessing a TAB to be always
; 6 characters

PreviousScreen	PROC	NEAR

	mov	BX, DS:BCB.ScrStart	; get the current screenstart
	xor	BP, BP			; zero lines retreated

	cmp	CS:NumWinsScr, 0	; find out how many lines forward
	je	P1Window
P2window:
	mov	CS:DesiredLines, HalfWindow-2
	jmp	PLoop2
P1Window:
	mov	CS:Desiredlines, Fullwindow-2


PLoop2:	call	Retreatphysicalline	; retreat this many lines
	inc	BP
	cmp	BP, CS:DesiredLines
	ja	PEnd
	cmp	BX, 100h
	jae	PLoop2

	mov	SI, Offset ScreenStartMessage	; if we would pass the start,
	mov	CX, 18				; error
	jmp	.Error0

PEnd:	call	FindLineStart
	mov	DS:BCB.ScrStart, BX	; found next screen start, so announce
	mov	DS:BCB.FCursor, BX
	ret

PreviousScreen	ENDP
;---------------------------------------------------------------------------
RetreatPhysicalLine	PROC	NEAR

	xor	DX, DX

RPL0:	cmp	Byte Ptr DS:[BX], TAB
	jne	RPL1
	add	DX, 5			; we assume a TAB to be about 6 chars
	jmp	RPL3

RPL1:	cmp	Byte Ptr DS:[BX], ' '
	jae	RPL2
	inc	DX				; adjust for a ^Character

RPL2:	cmp	Word Ptr DS:[BX], CRLF
	jne	RPL3
	dec	BX
	ret					; we have found it at CR

RPL3:	dec	BX
	inc	DX
	cmp	DX, 79
	jb	RPL0

	ret					; we have found it at wrap

RetreatPhysicalLine	ENDP
;---------------------------------------------------------------------------
; most of this code is copied from ccenter
;
FindLineStart	PROC	NEAR

	call	GetColumn		; BX holds cursor
	call	Findcolumn1		; returns in DX what the real
					; column should be

FLLoop:	call	GetColumn		; this will go back until
	cmp	CX, DX			; it hits the real start
	jbe	AtLineStart
	dec	BX
	jmp	FLLoop

AtLinestart:
	mov	DS:BCB.ScrStart, BX
	cmp	CX, DX
	jb	HitTabLine
	ret

HitTabLine:	inc	BX
	ret

FindColumn1	PROC	NEAR
; CX holds a column - I want to know the column number of the first character
; on this line.
	mov	DX, 1

FAgain:	add	DX, 79
	cmp	DX, CX
	jbe	FAgain
	sub	DX, 79		; return the real start
	ret
FindColumn1	ENDP


FindLineStart	ENDP

;***************************************************************************
;---------------------------------------------------------------------------
; IN:	CX	column we want to get to.
;	BX	points to any character on this line
; OUT:	BX	pointer to character which comes closest, but is not greater
;		than CX
;	DX	actual column of BX

MOVEtoCOLUMN	PROC	NEAR

	call	GoToLineStart		; finds the start of the line of {BX}

	mov	DX, 1

MTC0:	cmp	DX, CX			; we are ready when we either hit the
	jae	MTCFound1		; column we want, or when we

	mov	AX, DS:[BX]		; hit the CRLF
	cmp	AX, CRLF
	je	MTCFound2

	cmp	AH, TAB			; if we have hit a TAB, we need to ad
	jne	MTC1			; just more spaces

	push	CX			; DX:= DX+(8- [(DX-1) mod 8])
	push	DX
	dec	DX
	and	DX, 111b
	mov	CX, 8
	sub	CX, DX
	pop	DX
	add	DX, CX
	pop	CX
	dec	DX			; will be incremented right again
	jmp	MTC2

MTC1:	cmp	AL, ' '			; if we hit a control character
	jae	MTC2			; we need an extra forward

	inc	DX

MTC2:	inc	DX			; and forward, and try again
	jmp	MTC0

MTCFound1:				; we have reached a column greater
	cmp	DX, CX			; or equal what we want
	je	MTCFoundIdeal
	dec	BX			; a TAB or ^Character is hiding the
					; column we want
	push	CX			; so we pass the one before
	call	GetColumn		; whose column is
	mov	DX, CX			; and of course not pass back in CX
	pop	CX
MTCFoundIdeal:
	ret

MTCFound2:				; we have hit a CRLF before our col
	ret				; which will return correct DX / BX

MoveTOcolumn	ENDP
;---------------------------------------------------------------------------
; This will reset BX to the start of the line on which it is.
;
GoToLineStart	PROC	NEAR
	cmp	Word Ptr DS:[BX-2], CRLF
	je	GTLS1
	cmp	BX, 100h
	jbe	GTLS1
	dec	BX
	jmp	GoToLineStart
GTLS1:	ret
GoToLineStart	ENDP

PROGRAM	ENDS
	end

```
{% endraw %}

## NOTES563.TXT

{% raw %}
```
Program name:         MAX
 
Author name:          Ivo Welch & Jens Christensen
Address:              5020 South Lake Shore Drive Appt 3505
                      Chicago, Illinois 60615
 
Suggested Donation:  $20.00
 
Program Description:  MAX is a freeware editor that has some of the best
                      features of EMACS (an editor) and SCRIBE (a text
                      formatter). It would be of interest to programmers
                      to enter programs and other people working with a
                      great deal of text.
 
                      It is extremely fast and there are many editing
                      features by character, word, line and region of
                      the text. The function keys are used extensively
                      for commands and this makes it both easy to learn
                      and quick to use.
 
                      MAX is written in 8086 assembler and the source
                      code is provided. The maximum buffer size is 64K
                      and the buffers cannot be changed in number or
                      size during a session.
 
                      Some of the future enhancements planned are:
                      1. Auto wrap around mode
                      2. Paragraph justification
                      3. Intelligent tabbing
                      4. Dynamic buffers
 
```
{% endraw %}

## PARSE.ASM

{% raw %}
```
PUBLIC  FParse, $Repeat, FParse0, LastLineUpdate, NoModeline, LastLastLine
PUBLIC	Switchmenu
EXTRN   .InCH:Near, .Msg:Near, .Error0:Near, .CLRMsg:Near

;---------------------------------------------------------------------------
TITLE Command Parser

Program SEGMENT PARA    PUBLIC  'code'
	ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

	INCLUDE	FDEF.DEF

COMMENT *

IN:  ?
OUT:
	AL
	0	=>	no character available
	1	=>	character [20..FF]
	2	=>	ctrl character passed in DL [0..1Fh]
	3	=>	C-X, following charcter in DL
	4	=>	M- , second character in DL
	5	=>	M-X, third character in DL
*

;----------------------- Symbols -----------------------
;----------======== VARIABLES =========---------

WorkMsg		db	'[Time]'
NumMsg		db	'*** Not Number ***'
ArgErr		db	'*** Argument Error ***'
ArgOFMsg	db	'*** Argument Too Big ***'
EscMsg		db	'ESC- '
XMsg		db	'ESC-X '
C_UMsg		db	'CTL-U '
C_XMsg		db	'CTL-X '
Temp		db	'0'
NoModeLine	db	InitLastLine
LastNodeName	dw	Offset Root
LastLastLine	dw	Offset Text0Line

$RepeatType STRUC   
	Arg	dw	?
	AAX	dw	?
	ADL	db	?
$RepeatType ENDS

$Repeat $RepeatType	<0,?,?>

;----------------------- Program ------------------------
%OUT FParse () : Argument, AX, DL;

FParse  PROC    Near

	mov	CS:$Repeat.Arg, 0	; argument default is 0
	call    .InCH		   ; get a character from keyboard
	jnz	FParse0		 ; is there a character ?
		xor	AX, AX	  ; no => return 0-0
		ret

; --- Character ?
Level2:
FParse0:cmp	AL, ' '		 ; check if ctl- character
	jb	FParse1		 ; this is a normal character
	mov	DL, AL		  ; pass back in 0- DL, AL
	mov	AH, 1
	ret




; --- CTRL-?
FParse1:cmp	AL, 18h		 ; check if it is a CTL-X
	je	C_X
	cmp	AL, ESC			; check if it is an ESC
	je	ESCAPE
	cmp	AL, 15h			; check if it is a CTL-U
	jne	FParse2

	jmp	c_u

FParse2:
	cmp	AL, NUL
	jne	FP21
	jmp	RemapNUL		; for the stupid IBM PC definition
FP21:	mov	DL, AL			; we have a "normal" ctl-char
	mov	AH, 2			; pass back in 2- DL, AL
	ret




; --- CTRL-X ?

C_X:    call    .CLRMsg			; put a CTL-X Msg to screen
	mov	SI, Offset C_XMsg
	mov	CX, 6
	call    .Msg

C_X1:   call    .InCH			; wait to get a character
	jz	C_X1

	cmp	AL, CTL_G		; abort on C-G
	jne	C_X2
		call	.ClrMsg
		xor	AX, AX
		xor	DL, DL
		ret

C_X2:   push    AX			; clear screen, and pass back 3- DL,AL
	call    .CLRMsg
	pop	AX
	mov	AH, 3
	mov	DL, AL
	ret



; --- ESC ?
ESCAPE: call    .CLRMsg			; put ESC- to screen
	mov	SI, Offset EscMsg
	mov	CX, 5
	call    .Msg

ESCAPE1:call    .InCH			; wait until character <> ESC
	jz	ESCAPE1
	cmp	AL, ESC
	jz	ESCAPE1

	cmp	AL, CTL_G		; command cancelled with c-g ?
	jne	ESCAPE2

	call    .CLRMsg			; clear the screen
	xor	DL, DL
	xor	AX, AX
	ret

ESCAPE2:cmp	AL, 'X'			; is this esc-x ?
	je	Extended
	cmp	AL, 'x'
	je	Extended

	mov	DL, AL			; no, so check whether it is a number

	cmp	DL, '0'			; if it is not, jump to escape3
	jb	ESCAPE3
	cmp	DL, '9'
	ja	ESCAPE3

	 cmp	CS:$Repeat.Arg, 0	; if our argument not 0, we are in
	 jne	ESCArgErr		; recursive call = not allowed

ESCnumId:call    $GetArg		; we are not recursive, so get
					; the argument into $Arg, and one
					; argument into AL
		call    Level2		; call itself recursively to get
					; a second function. Arg is disabled.
		cmp	AX, 0FFFFh	; check whether the return signals
		je	ESCArgDiscErr	; an error through Arg ( recursive )
		cmp	CS:$Repeat.Arg, 0 ; check whether our Argument is 0
		je	ESCArgDiscErr	; which is also a 0

		cmp	AL, CTL_G	; check whether we have a CTL-G
		je	ESCArgDiscErr	; which would imply an error, too
		mov	CS:$Repeat.AAX, AX ; save our other values (for what?)
		mov	CS:$Repeat.ADL, DL

		call    .CLRMsg		; clear the screen
		mov	SI, Offset WorkMsg ; and tell us that we need time
		mov	CX, 6		; to complete a task
		call    .Msg
		mov	AX, CS:$Repeat.AAX ; return the values of AX, DL
		mov	DL, CS:$Repeat.ADL
		mov	AL, CS:$Repeat.ADL
		ret

	ESCArgDiscErr:
		mov	SI, Offset ArgErr ; display an error and return to
		mov	CX, 22		; the main calling routine
		call    .Error0
		xor	AX, AX
		ret

	ESCArgErr:
		mov	SI, Offset ArgErr ; display an error, and return from
		mov	CX, 22		; recursive call.
		call    .Msg
		call    .Error0
		mov	AX, 0FFFFh
		ret

ESCAPE3:push    DX			; this is just a normal ESC-?
	call    .CLRMsg			; so clear the screen and return the
	pop	DX			; character in 4- AL, DL
	mov	AL, DL
	mov	AH, 4
	ret

Extended:
	call    .CLRMsg		 	; this is an esc-x ?, so put an ESC-X
	mov	SI, Offset XMsg		; message to the screen
	mov	CX, 6
	call    .Msg

Extended1:
	call    .InCH			; get a character
	jz	Extended1
	cmp	AL, 7			; abort check
	jne	Extended2		; cancelled
	call	.CLRMsg
	xor	DL, DL
	sub	AX, AX
	ret
Extended2:
	push    AX			; pass back 5 - AL,DL
	call    .CLRMsg
	pop	AX
	mov	DL, AL
	mov	AH, 5
	ret

;-------------------------------------------------------------------------
C_U:    call    .CLRMsg			; use a CTL-U Argument
	mov	CX, 6			; first put a CTL-U to the screen
	mov	SI, Offset C_UMsg
	call    .Msg

c_u0:   call    .Inch			; get another character
	jz	c_u0

	cmp	AL, '0'			; if it is not a number, then error
	jb	c_uErr
	cmp	AL, '9'
	ja	c_uErr

	mov	DL, AL			; load DL with the first number
	cmp	CS:$Repeat.Arg, 0	; check whether we are in a recursive
	jne	c_u1			; call, and error if so

	jmp	ESCnumId		; otherwise, let esc-arg take over
c_u1:   jmp	ESCArgErr		; we had a recursive mistake

c_uErr: mov	SI, Offset NumMsg	; we had a CTL-U other than number
	mov	CX, 18			; which is an error
	call    .Error0
	sub	AX, AX			; and return nothing
	sub	DL, DL
	ret

FParse  ENDP

;-------------------------------------------------------------------------
%OUT $GetArg (DL,AL= First Number ) : CS:RepeatArg=Total Number

$Getarg PROC    Near
	mov	AX, CS:$Repeat.Arg
					; multiply by 10
	cmp	AX, 6000
	ja	ArgOF		   ; Argument Overflow
	add	AX, AX		  ; multiply old argument by 10
	mov	CS:$Repeat.Arg, AX
	add	AX, AX
	add	AX, AX
	add	CS:$Repeat.Arg, AX	; add new number
	xor	AH, AH
	mov	AL, DL
	sub	AL, '0'		 ; ASCII -> Word
	add	CS:$Repeat.Arg, AX	; and add new number to it

	add	AL, '0'		 ; and display it on screen, too
	mov	Byte Ptr CS:Temp, AL
	mov	SI, Offset Temp
	mov	CX, 1
	call    .Msg

$GAL:   call    .Inch		   ; get a number / command-start
	jz	$GAL

	cmp	AL, '0'		 ; return if we have our first non
	jb	$GAEx		   ; numerical argument
	cmp	AL, '9'
	ja	$GAEx
	mov	DL, AL		  ; input was number -> do it again
	jmp	$GetArg		 ; multiply by 10 etc.

$GaEx:  ret				; command was input

;-------------------------------------------------------------------------
%OUT ArgOF
ArgOF:  mov	SI, Offset ArgOFMsg
	mov	CX, 24
	call    .Msg
	call    .Error0
	mov	CS:$Repeat.Arg, 0
	pop	AX		; discard jump back "call $GetArg"
	xor	AX, AX
	ret

$GetArg ENDP

;---------------------------------------------------------------------------
; RemapNUL:
;
;	FN: remaps the NUL x character, since the stupid PC can't deal with
;	    it. Also defines the function keys
;	IN: -
;	OUT:Artificial Combination of AL/DL - AH
;
RemapNUL	PROC	NEAR
	call	.InCH			; there definitely is another one
	mov	BL, AL
	sub	BH, BH
	add	BX, BX
	mov	AX, CS:NULTable[BX]
	cmp	AH, MenuEntry/256
	je	SwitchMenu
	mov	DL, AL
	ret
RemapNUL	ENDP

;---------------------------------------------------------------------------
; Switchmenu:
;
;	FN:	switches to a new menu
;
;	IN:	AL: new menu number
;	OUT:	Updated Table
;		Updated Modeline
;
SwitchMenu	PROC	NEAR

	mov	AH, 64		; we want 60 bytes for table and 4 for textptr
	mul	AH		; -> AX holds entry to table
	mov	SI, AX
	add	SI, Offset Newtable
	mov	DI, Offset FN1
	mov	CX, 10

UpdateLoop1:
	mov	AX, CS:[SI]
	add	SI, 2
	mov	CS:[DI], AX
	add	DI, 2
	loop	UpdateLoop1

	mov	CX, 20		; dump PC has function keys not in contiguous
	mov	DI, Offset FN11	; area, so I have to reinitialize and continue
UpdateLoop2:
	mov	AX, CS:[SI]
	add	SI, 2
	mov	CS:[DI], AX
	add	DI, 2
	loop	UpdateLoop2
	
	mov	AX, CS:[SI+2]
	mov	CS:LastNodename, AX
	mov	SI, CS:[SI]		; this is the new text pointer
	call	LastLineUpdate
	sub	AX, AX
	ret

SwitchMenu	ENDP

;---------------------------------------------------------------------------
	number	db	'0'
LastLineUpdate	PROC	NEAR

	mov	CS:LastLastLine, SI
	push	ES
	mov	AX, ScreenSegment
	mov	ES, AX
	mov	DI, Offset LastLineStart+320

	cmp	CS:NoModeLine, TRUE
	je	LLEndupdate

	mov	AL, '1'
	mov	AH, lowintensity
	stosw
	mov	cs:number, AL

LL0:	mov	AL, CS:[SI]
	inc	SI
	cmp	AL, '$'
	je	LLEndUpdate
	cmp	AL, NUL
	jne	LL1

	mov	AL, ' '			; put up space between key descriptors
	mov	AH, nocolor
	stosw

	inc	cs:number
	mov	AL, cs:number
	mov	AH, lowintensity

	jmp	LL2
LL1:	mov	AH, Inverse
LL2:	stosw
	jmp	LL0
LLEndUpdate:
	mov	AX, ' '+nocolor*256
LLEUP1:	cmp	DI, Offset LastLineStart+320+158-20
	jae	LLEndEnd
	stosw
	jmp	LLEUP1
LLEndEnd:
	call	NodeNameUpdate
	pop	ES
	ret
LastLineUpdate	ENDP

;---------------------------------------------------------------------------
NodeNameUpdate	PROC	NEAR
	mov	SI, CS:LastNodename
	mov	CX, 11

NNL:	mov	AL, CS:[SI]
	inc	SI
	mov	AH, nocolor
	stosw
	cmp	DI, Offset LastLineStart+320+158
	ja	NNLR
	loop	NNL
nnlr:	ret
NodeNameUpdate	ENDP

T2	equ	2*256		; CTL-
T3	equ	3*256		; CTL-X -
T4	equ	4*256		; ESC-
T5	equ	5*256		; ESC-X -

T7	equ	7*256
MenuEntry	equ	T7

NulTable dw	0	; 0
dw	0		; 1
dw	0		; 2
dw	T2		; 3 ^@
dw	0		; 4
dw	0		; 5
dw	0		; 6
dw	0		; 7
dw	0		; 8
dw	0		; 9
dw	0		; 10
dw	0		; 11
dw	0		; 12
dw	0		; 13
dw	0		; 14
dw	T2+TAB		; 15 = Shift TAB
dw	0		; 16
dw	0		; 17
dw	0		; 18
dw	0		; 19
dw	0		; 20
dw	0		; 21
dw	0		; 22
dw	0		; 23
dw	0		; 24
dw	0		; 25
dw	0		; 26
dw	0		; 27
dw	0		; 28
dw	0		; 29
dw	0		; 30
dw	0		; 31
dw	0		; 32
dw	0		; 33
dw	0		; 34
dw	0		; 35
dw	0		; 36
dw	0		; 37
dw	0		; 38
dw	0		; 39
dw	0		; 40
dw	0		; 41
dw	0		; 42
dw	0		; 43
dw	T4+'Z'		; 44 = ALT-Z
dw	0		; 45
dw	0		; 46
dw	0		; 47
dw	0		; 48
dw	0		; 49
dw	0		; 50
dw	0		; 51
dw	0		; 52
dw	0		; 53
dw	0		; 54
dw	0		; 55
dw	0		; 56
dw	0		; 57
dw	0		; 
FN1 dw	T7+1		; 
dw	T7+2		; 60
dw	T7+3		; 
dw	T7+4		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 70
dw	T4+'<'		; 71 = Home
dw	T2+16		; 72 = Previous = Arrow
dw	T4+'V'		; 73 = PageUp
dw	0		; 
dw	T2+2		; 75 = Arrow <-
dw	0		; 
dw	T2+6		; 77 = Arrow ->
dw	0		; 
dw	T4+'>'		; 79 = End
dw	T2+14		; 80 = Next = Arrow
dw	T2+22		; 81 = PageDown
dw	0		; 
dw	0		; 
FN11 dw	T7+1		; 84 = F1
dw	T7+2		; 
dw	T7+3		; 
dw	T7+4		; 
dw	0		; 
dw	0		; 
dw	0		; 90
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 100
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 110
dw	0		; 
dw	0		; 
dw	0		; 
dw	T2+1Fh		; 114 = PrtSc = HELP
dw	T4+'B'		; 115 = CTRL- <- = Word Backward
dw	T4+'F'		; 116 = CTRL- -> = Word Forward
dw	0		; 
dw	T2+26		; 118 = CTRL-PGUP = ScrollUp
dw	0		; 
dw	0		; 120
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 
dw	0		; 130
dw	0		; 
dw	T4+'Z'		; 132 = CTRL - PageDown
dw	0		; 
dw	0		; 
dw	0		; 

;---------------------------------------------------------------------------
NewTable dw	Menuentry+1		; MAIN manu
dw	Menuentry+2
dw	Menuentry+3
dw	Menuentry+4
dw	5 dup (0)
dw	T5+'M'
dw	20 dup (0)
	dw	Offset Text0Line
	dw	Offset Root

dw	Menuentry+0			; EDIT Menu
dw	Menuentry+5			;	char
dw	Menuentry+6			;	word
dw	Menuentry+7			;	para
dw	Menuentry+8			;	global
dw	Menuentry+9			;	region
dw	24 dup (0)
	dw	Offset Text1Line
	dw	Offset Ch1

dw	Menuentry+0			; SEARCH menu
dw	T2+19				; ^S
dw	T2+18				; ^R
dw	T5+'S'
dw	T5+'Q'
dw	25 dup (0)
	dw	Offset Text2Line
	dw	Offset Ch2

dw	Menuentry+0			; FILE menu
dw	T3+19				; ^X ^S
dw	T3+23				; ^X ^W
dw	T3+22				; ^X ^V
dw	T3+'B'
dw	T3+'O'
dw	24 dup (0)
	dw	Offset Text3Line
	dw	Offset Ch3

dw	Menuentry+0			; Others
dw	T2+17
dw	T2+15
dw	T4+'Q'
dw	T3+26
dw	25 dup (0)
	dw	Offset Text4Line
	dw	Offset Ch4

dw	Menuentry+1			; EDIT-CHAR
dw	T2+6
dw	T2+2
dw	T2+4
dw	T2+8
dw	T2+20
dw	4 dup (0)
dw	Menuentry+1
dw	T2+14
dw	T2+16
dw	T2+11
dw	T2+7
dw	T2+7
dw	14 dup (0)
	dw	Offset Text5Line
	dw	Offset Ch5

dw	Menuentry+1			; word /sentence
dw	T4+'F'
dw	T4+'B'
dw	T4+'D'
dw	T4+8
dw	T4+'T'
dw	24 dup (0)				; word <> sentence
	dw	Offset Text5Line		; word is similar to char
	dw	Offset Ch6

dw	Menuentry+1
dw	29 dup (0)
	dw	Offset Text5Line		; paragraph is similar to char
	dw	Offset Ch7

dw	Menuentry+1				; so is screen file
dw	T2+22
dw	T3+'V'
dw	7 dup (0)
dw	Menuentry+1
dw	T4+'<'
dw	T4+'>'
dw	17 dup (0)
	dw	Offset Text5Line
	dw	Offset Ch8

dw	Menuentry+1				; REGION
dw	T2+0
dw	T3+24
dw	T2+23
dw	26 dup (0)
	dw	Offset Text9Line
	dw	Offset Ch9

dw	30 dup (0)
dw	Offset Text10Line
	dw	Offset Ch10
Text0Line	db	'EDIT  ', NUL
		db	'SEARCH', NUL
		db	'FILE  ', NUL
		db	'OTHERS', NUL
		db	'     ', NUL
		db	'     ', NUL
		db	'     ', NUL
		db	'     ', NUL
		db	'     ', NUL
		db	'MODELN', STR
Text1Line	db	' QUIT  ', NUL
		db	'CHAR/LN', NUL
		db	'WRD/SNT', NUL
		db	'PAR/PAG', NUL
		db	'SCR/FIL', NUL
		db	'REGION ', STR
Text2Line	db	'  QUIT  ', NUL
		db	'->search', NUL
		db	'<-search', NUL
		db	'replace ', NUL
		db	'?replace?', STR
Text3Line	db	' QUIT ', NUL
		db	' save ', NUL
		db	'write ', NUL
		db	'visit ', NUL
		db	'buffer', NUL
		db	'window', STR
Text4Line	db	' QUIT ', NUL
		db	'lit-ins', NUL
		db	'open-ln', NUL
		db	' fill ', NUL
		db	' ***QUIT TO DOS*** ', STR
Text5Line	db	' QUIT ', NUL
		db	'advance', NUL
		db	'retreat', NUL
		db	'->erase', NUL
		db	'<-erase', NUL
		db	' xchg  ', STR
Text9Line	db	'  QUIT  ', NUL
		db	'set mark', NUL
		db	'mark<>cur', NUL
		db	'!kill reg!', STR
Text10Line	db	'MAIN$'

Root	db	'===TOP===  '
Ch1	db	'/EDIT      '
Ch2	db	'/SEARCH    '
Ch3	db	'/FILE      '
Ch4	db	'/OTHER     '
Ch5	db	'/ED/CHR-LIN'
Ch6	db	'/ED/WRD-SNT'
Ch7	db	'/ED/PAR-PAG'
Ch8	db	'/ED/SCR-GLO'
CH9	db	'/ED/REGION '
CH10	db	' ILLEGAL   '

	PROGRAM ENDS
END
```
{% endraw %}

## SCREEN.ASM

{% raw %}
```
; Note:
; Strangely  enough,  on  some  machines the cursor still appears in the
; middle  of  the line on program exit. Darned IBM BIOS.  I really don't
; know  who  wrote  this  piece  of  s...  In  any  case,  this is a bug
; apparently  peculiar to some machines, which you have to fix yourself.
; grep for int 10h in *.ASM.

PUBLIC  FSCREEN

EXTRN	WindowStartline:Word
	
;---------------------------------------------------------------------------
Title Screen-builder

	; This updates a screen. It can build it from a given buffer
	; position in a window ( given by Buffer Start and Buffer End ).
	; NOTE: The speed of this function is absolutely crucial for
	; satisfactory results.




Program SEGMENT Para	PUBLIC  'code'
	ASSUME  CS:PROGRAM, DS:PROGRAM, ES:PROGRAM, SS:PROGRAM

Comment $

	Screen-start	ES:DI   Passed  DI
	Screen-end		Passed  DX
	File-start	DS:SI   Passed  SI

	File-cursor	DS:VAR  Global
	Marker-array	DS:VAR  Global
	Region-end	DS:VAR  Global

	File-end	DS:VAR  Returned

	AX	[Accu]
	BX	Real row
	CX	~
	 CH	Colorbyte
	 CL	[Column]	( can be gotten through BCB )
	DX	Screen_end	( passed )

	SI	DS: Sourceindex to Buffer	( passed-could be gotten from BCB )
	DI	ES: Index to Screen	( passed )

	BP	[End of File]
$

;------------------------Screen Macroes-----------------------------------
Include FDef.Def

; if mono or flicker ( not noflicker )
	stoschar	MACRO
		stosw
		ENDM

if noflicker
	stoschar	MACRO
		call	colorout
	ENDM
endif


Reg_end_char	EQU	'<'	
Wraparoundchar  EQU	'!'
maxcolumn	EQU	79d

Initialize_Variables	MACRO
		mov	AX, Screensegment
		mov	ES, AX
		mov	BP, DS:BCB.Fend ; load BX with the end of file ptr
		inc	BP		; for the cursor...
		xor	BX, BX
		xor	CL, CL
		xor	CH, CH		; holds line number
		cld
	ENDM


Set_Cursor	MACRO
			mov	DS:BCB.ScrCursor, DI
			push	SI
			push	DI
			push	AX
			push	BX
			push	DX
			push	CX
			push	BP

			mov	AH, 2		; set cursor position
			mov	BH, 0
			mov	DX, CX
			xchg	DH, DL
			add	DX, CS:WindowStartLine
			xchg	DH, DL
			int	10h		; request new cursor

			pop	BP
			pop	CX
			pop	DX
			pop	BX
			pop	AX
			pop	DI
			pop	SI
	ENDM

;*****************************START***************************************
; This routine handles everything after the end of the file is encountered.
; Since there is nothing that can happen afterwards, this is just a faster
; special handle of the normal procedure

Special_EOF	PROC	NEAR

		mov	AL, EOF_Char	; this is a small dot
		mov	AH, LowIntensity
		mov	SI, 0FFFFh	; signals we won't reach last char on
					; screen


SE1:		cmp	DI, DX		; have we reached the window's end ?
		jb	SE2
		jmp	Exit_routine	; yes, so quit

SE2:		stoschar			; no, so output the EOF character
		jmp	SE1

Special_EOF	ENDP
;***************************************************************************
Exit_routine:   dec	SI
		mov	DS:BCB.Scrend, SI	; SI-1 is the last character
						; on the scr
		mov	ES:[Modelinestart], ModeLinecolor*256+' '
						; small bug-fix
		ret



;***************************************************************************
FScreen PROC NEAR

		Initialize_Variables

Start:		cmp	DI, DX			; did we reach the screenend ?
		jae	Exit_routine

EOF_Q:		cmp	SI, BP			; did we reach the fileend ?
		jae	Special_EOF		; [special exception handling]

Get_char:	mov	AL, DS:[SI]		; get a character from the
		mov	AH, nocolor		; file

		cmp	CL, Byte Ptr maxcolumn	; are we at last screencolumn?
		jb	Get_Char1

			call	Wrap		; then postpone this char and
						; put up the wraparound char

Get_Char1:	cmp	SI, DS:BCB.Fcursor	; is this the cursor position?
		jne	no_cursor0

			Set_Cursor		; yes, so set it

no_cursor0:	cmp	AL, 32			; is this a ^* character
		jae	Get_Char2

			call	ControlChar	; handle the special character

Get_Char2:	stoschar				; normal character -> put it
		inc	BX			; to screen.
		inc	CL
		inc	SI

		jmp	Start


;---------------------------------------------------------------------------
Wrap:		cmp	AL, LF			; if we are at a LF, this is
		je	NoWrap			; not a wrap, but an EOLN
		inc	CH			; after real output now:
		xor	CL, CL			; col / row

		push	AX			; remember the real character
		mov	AX, Wraparoundchar	; output the wraparoundchar
		mov	AH, LowIntensity
		stoschar
		pop	AX

NoWrap:		ret				; and continue logical line

FScreen ENDP
;---------------------------------------------------------------------------
	; This handles all characters in the file that are smaller than
	; a SPACE ( i.e. controlcharacters ).
ControlChar	PROC	NEAR
if tab8spaces
	cmp	AL, 9				; TAB is 8 spaces
	je	ControlChar1
endif
	cmp	AL, LF				; LF means don't advance BX
	je	ControlLFret
	cmp	AL, CR				; CR means don't put a ^M
	je	ControlCRret
	cmp	AL, 1Ah				; EOF means special character
	je	ControlEOFret

	cmp	CL, Byte Ptr MaxColumn		; other control character
	jb	CC111				; means two chars w/ ^*
		call	Wrap			; if necessary

CC111:	push	AX				; put up the ^
	mov	AX, lowintensity*256+'^'
	stoschar
	pop	AX
	add	AL, '@'				; adjust to ASCII
	inc	CL
	cmp	CL, Byte Ptr maxcolumn		; are we at last column ?
	jae	Wrap				; if necessary

	ret

;---------------------------------------------------------------------------
	; this handles the TAB

ControlChar1:
	push	AX
	push	DX

	mov	DX, BX
	mov	DH, DL
	and	DH, 7
	mov	DL, 8
	sub	DL, DH

if color	; in color, we have to place the cursor on a visible
		; character
	mov	AX, ' '+nocolor*256		; and output n tabs
endif
if mono
	mov	ax, '	'+nodisplay*256
endif

CCC1:	dec	DL
	jz	CCCOut
	stoschar
	inc	BX
	inc	CL
if color
	mov	ax, '	'+nodisplay*256
endif
	cmp	CL, Maxcolumn
	jb	CCC1
	call	Wrap
	jmp	CCC1

CCCOut:	pop	DX
	pop	AX
	mov	AL, ' '
	ret

;---------------------------------------------------------------------------
	; This handles the rest of the line after a LF
ControlLFret:
	mov	AH, nodisplay

CLF0:	cmp	CL, Maxcolumn
	jae	CLF1
	inc	CL
	stoschar
	jmp	CLF0

CLF1:	mov	AX, '<'+lowintensity*256
	stoschar
	pop	AX				; get rid of returnaddress
	xor	CL, CL				; we start anew at another ln
	xor	BX, BX
	inc	CH
	inc	SI
	jmp	Start

	ret

;---------------------------------------------------------------------------
	; This simply displays no character at a CR or EOF
ControlCRret:
ControlEOFret:
	mov	AH, nodisplay
if color					; put cursor on display
	mov	ax, ' '+256*nocolor
endif
	ret


ControlCHAR	ENDP

if noflicker
colorout	proc	near
		push	dx
		mov	dx, 3dah
		push	ax
	Wait:	in	al, dx
		test	al, 8
		jz	Wait
		pop	ax
		stosw
		pop	dx
		ret
colorout	endp
endif

PROGRAM ENDS
	END
```
{% endraw %}

## SEARCH.ASM

{% raw %}
```
PUBLIC  ISearch, RSearch

EXTRN	CCenter:Near, FModeline:Near, FScreen:Near, .Msg:Near, .CLRMsg:Near
EXTRN	.CAPS:Near, .InCH:Near, .Screen:Near, Sound:Near, $Repeat:word
EXTRN	Macrodefinition:Byte, MacroInvocation:Byte, MACArg:Word, .Error0:Near
EXTRN	MainScreenDraw:Near, Maincommand:NEAR, FParse0:NEAR, $Repeat:Word
;---------------------------------------------------------------------------

	Page ,132
NAME FSearch

TITLE Search Command

IF2
	%OUT *Pass 2*
ENDIF

Program SEGMENT PARA	PUBLIC  'code'
	ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

INCLUDE FDEF.DEF

$Fail		db	'FAILING '
$Header	 db	'I-SEARCH: '
$SString	db	10 dup ('SEARCH')
$Failed	 db	0
$LastLength	db	0

;----------------------------------------------------------------------
ISearch PROC	NEAR

	mov	BP, DS:BCB.FCursor
	xor	DX, DX
	mov	AX, ScreenSegment
	mov	ES, AX
	mov	CS:$Header, 'I'
	call	.CLRMsg
	mov	SI, Offset $Header
	mov	CX, 10
	call	.Msg

ISearchLoop:
	jmp	GetString
GSR:	cmp	CS:$Failed, 0
	jne	ISFail
	mov	CS:$LastLength, 0 ; chance for ^S over
ISearch1:
	mov	CS:$Header, 'I'
	mov	SI, DS:BCB.FCursor
	sub	SI, DX
	call	.Find
	or	AH, AH
	jnz	ISFail0


ISOK:	add	SI, DX
	mov	DS:BCB.FCursor, SI
	call	.SScreen
	call	.CLRMsg
	mov	SI, Offset $Header
	mov	CX, 10
	add	CX, DX
	call	.Msg
	mov	CS:$Failed, 0
	jmp	ISearchLoop

ISFail0:dec	DS:BCB.FCursor
ISFail: mov	CS:$Failed, 0FFh
	push	DX
	call	Sound
	call	.CancelMacro
	call	.CLRMsg
	pop	DX
	mov	SI, Offset $Fail
	mov	CX, 18
	add	CX, DX
	call	.Msg

	jmp	ISearchLoop



; <ESC>, <DEL>, <REV>, <ISE>
Getstring:
	push	DX
GetString0:
	call	.InCH
	jz	GetString0
	pop	DX

	cmp	AL, 8	; ^H
	je	ISMinus
	cmp	AL, 18  ; ^R
	je	ISR
	cmp	AL, 19  ; ^S
	je	ISI
	cmp	AL, LF	; ^J
	je	GetString1
	cmp	AL, TAB	; ^I
	je	GetString1
	cmp	AL, 17	; ^Q
	je	QuoteOne
	cmp	AL, ' '
	jb	ISExit
GetString1:
	call	.CAPS
	mov	BX, DX
	mov	CS:[BX+Offset $SString], AL
	inc	DX
	jmp	GSR

ISMinus:cmp	DX, 0
	je	ISExit
	dec	DX
	dec	DS:BCB.FCursor
	mov	CS:$Failed, 0
	jmp	GSR

ISI:	cmp	DX, 0
	je	.SSSS
	inc	DS:BCB.FCursor
	jmp	GSR
.SSSS:  mov	DL, CS:$LastLength
	xor	DH, DH
	jmp	GSR


ISR:	cmp	DX, 0
	je	RSearch
	jmp	RSearch1

ISExit: mov	CS:$LastLength, DL
	mov	CS:$Failed, 0
	mov	DS:BCB.FCursor, BP
	push	AX
	call	.CLRMsg
	pop	AX

	pop	BP			; kill return address
	pop	BX
	pop	BX			; adjust stack ptr to return from case

	mov	CS:$Repeat, 0
	call	FParse0
	or	AH, AH
	jnz	GotRealcommand

	jmp	MainScreenDraw

GotRealcommand:
	jmp	Maincommand

QuoteOne:
	push	DX			; do avoid all further checking
Q1:	call	.InCH
	jz	Q1
	pop	DX
	jmp	GetString1

ISearch ENDP

;---------------------------------------------------------------------------
RSearch PROC	NEAR

	xor	DX, DX
	mov	BP, DS:BCB.FCursor
	mov	CS:$Header, 'R'
	mov	AX, ScreenSegment
	mov	ES, AX
	call	.CLRMsg
	mov	SI, Offset $Header
	mov	CX, 10
	call	.Msg

RSearchLoop:
	jmp	GetStringR
GSRR:	cmp	CS:$Failed, 0
	jne	RSFail
	mov	CS:$LastLength, 0 ; chance for ^R over
RSearch1:
	mov	CS:$Header, 'R'
	mov	SI, DS:BCB.FCursor
	call	.Bind
	or	AH, AH
	jnz	RSFail


RSOK:	mov	DS:BCB.FCursor, SI
	call	.SScreen
	call	.CLRMsg
	mov	SI, Offset $Header
	mov	CX, 10
	add	CX, DX
	call	.Msg
	mov	CS:$Failed, 0
	jmp	RSearchLoop

RSFail: mov	CS:$Failed, 0FFh
	push	DX
	call	Sound
	call	.CancelMacro
	call	.CLRMsg
	pop	DX
	mov	SI, Offset $Fail
	mov	CX, 18
	add	CX, DX
	call	.Msg

	jmp	RSearchLoop



; <ESC>, <DEL>, <REV>, <ISE>
GetstringR:
	push	DX
GetStringR0:
	call	.InCH
	jz	GetStringR0
	pop	DX

	cmp	AL, 8	; ^H
	je	RSMinus
	cmp	AL, 19  ; ^S
	je	RSI
	cmp	AL, 18  ; ^R
	je	RSR
	cmp	AL, LF	; ^J
	je	GetStringR1
	cmp	AL, TAB	; ^I
	je	GetStringR1
	cmp	AL, 17	; ^Q
	je	QuoteOne1
	cmp	AL, ' '
	jae	GetStringR1
	jmp	ISExit
GetStringR1:
	call	.CAPS
	mov	BX, DX
	mov	CS:[BX+Offset $SString], AL
	inc	DX
	jmp	GSRR

QuoteOne1:
	push	DX			; do avoid all further checking
Q11:	call	.InCH
	jz	Q11
	pop	DX
	jmp	GetStringR1

RSMinus:cmp	DX, 0
	jne	RSM1
	jmp	ISExit
RSM1:	dec	DX
	inc	DS:BCB.FCursor
	mov	CS:$Failed, 0
	jmp	GSRR

RSR:	cmp	DX, 0
	je	.SSSS1
	dec	DS:BCB.FCursor
	jmp	GSRR
.SSSS1: mov	DL, CS:$LastLength
	xor	DH, DH
	jmp	GSRR


RSI:	cmp	DX, 0
;	je	ISearch
;	jne	ISearch1
	je	RSI1
	jmp	ISearch1
RSI1:	jmp	ISearch

RSearch ENDP

;---------------------------------------------------------------------------
.SScreen	PROC	Near

	push	DX
	call	.Screen
	call	FModeline
	pop	DX
	mov	BP, DS:BCB.FCursor
	ret

.SScreen	ENDP

;---------------------------------------------------------------------------
Wildcard	EQU	10	; ^J
.FIND	PROC	Near
; SI -> Start of Search	DX  -> # characters in Searchbuffer

	dec	SI
.FNew:  xor	BX, BX  ; last try unsuccessful, try one character further
	mov	DI, Offset $SString
	inc	SI
.FMay:  cmp	SI, DS:BCB.FEnd  ; all characters so far match
	jae	.FErr
	mov	AH, CS:[DI+BX]
	cmp	AH, Wildcard
	je	.F1Mat
	mov	AL, DS:[SI+BX]
	call	.CAPS
	cmp	AL, AH
	jne	.FNew
.F1Mat: inc	BX		; one character matches
	cmp	BX, DX
	jb	.FMay

.FFound:mov	AH, 0
	ret
.FErr:  mov	AH, 0FFh
	ret
.Find	ENDP

;....................
.BIND	PROC	Near
; SI -> Start of Search	DX  -> # characters in Searchbuffer

	inc	SI
.BNew:  xor	BX, BX  ; last try unsuccessful, try one character further
	mov	DI, Offset $SString
	dec	SI
.BMay:  cmp	SI, 100h  ; all characters so far match
	jb	.BErr
	mov	AH, CS:[DI+BX]
	cmp	AH, Wildcard
	je	.B1Mat
	mov	AL, DS:[SI+BX]
	call	.CAPS
	cmp	AL, AH
	jne	.BNew
.B1Mat: inc	BX		; one character matches
	cmp	BX, DX
	jb	.BMay

.BFound:mov	AH, 0
	ret
.BErr:  mov	AH, 0FFh
	ret
.Bind	ENDP

.CancelMacro	PROC	NEAR
	cmp	CS:MacroInvocation, TRUE
	je	.CYes
	cmp	CS:MacroDefinition, TRUE
	je	.CYes
	cmp	CS:MacArg, 0
	jne	.CYes
	cmp	CS:$Repeat, 0
	jne	.CYes
	ret

MacCancel	db	'*** Cancelled Macro ***'
.CYes:	mov	CS:$LastLength, DL
	mov	CS:$Failed, 0
	mov	DS:BCB.FCursor, BP
	call	.CLRMsg

	mov	SI, Offset MacCancel
	mov	CX, 23
	jmp	.Error0
.CancelMacro	ENDP
PROGRAM ENDS
	END
```
{% endraw %}

## TUTORIAL.TXT

{% raw %}
```



                               -PAGE 1-                       TUTORIAL-I V0.2
Topics:   Notation | CTL-V

This  is  an interactive tutorial which will teach you how to use this editor.
Please read carefully through each page, and then follow the instructions.

There  are  two  different  kind of commands which you can give to the editor,
namely  "control-commands"  and  "escape sequences." You can perform the first
by  holding  down  the  CONTROL  ( ALT ) key and pressing another key simulta-
neously.  You  can  specify  the  second  by pressing the ESCAPE key once, and
then,  afterwards,  another  key.   We  will  use  the  following abbreviation
convention.  CTL-x  means holding down CONTROL and pressing key x, ESC-x means
pressing ESCAPE and then key x.

The  purpose  of an editor is to edit a document ( file ). You will always see
a  screenful  of information. Now you are looking at page ( screen ) 1 of this
tutorial.  For  your  convenience, the header above specifies the page you are
on.   The  command  to  advance  to the next screen is CTL-V ( for vertical ).
Hold down the CONTROL key and press v or V, and page 2 will appear.

*End of Page 1*
                               -PAGE 2-                       TUTORIAL-I V0.2
Topics:   Paging | ESC-V


Now  you  have learned how to go to following pages. But note that one line of
the  last page is still on top of the screen. This is to allow for your easier
recognition and more continuity between consecutive pages.


The  next command to remember is the command to go back one page ( screen- ful
)  in  your  document.  This will enable you to view a file page by page, just
like  you can go through a real document, and page back. The command is ESC-V.
To  go back to the previous screen ( the one you saw the when you started this
tutorial,  and whose last line is the line you see on top of this page ) press
ESCAPE  once.   Now  you  should  see  below  the  modeline  an inverse "ESC-"
message.  This  means  the  editor  has  recognized  that you wish to input an
escape  sequence,  and  is  waiting for its completion. When you press V , you
will  see  the  last  page.  After  you have done this do a CTL-V to come back
here, and another one to go to page 3.

                               -PAGE 3-                       TUTORIAL-I V0.2
Topics:  Cursor | Modeline

The  most  important  idea  about the use of the editor which you will have to
understand  is  the  cursor.   The cursor is just like a pen which you use for
editing  a  document  by  hand.  Most  things  you  do  (  like  crossing  out
characters, writing etc. ) takes place on the character below the pen.

The  cursor  is  like  an electronic pen which you can move through your file.
Most  things  you  do,  like  writing,  takes  place where your cursor is. The
cursor  is  always  located  at  the  character  which is displayed in inverse
color, in this case it is in line 1, column 1 of this page. Look at it.

The  modeline  is the top line. It informs you about the name of the file that
you  are  editing ( in this case TUTORIAL.TXT ), its size, date, time and some
more  things.  Important  now  is  that  the  number after COL tells you which
column  the  cursor is in on its line, and the number after it ( e.g. -- 10%--
)  tells you at which percentage in tems of the size of the file the cursor is
on.  0 % is the beginning, 100% the end of the file.
. , . , . , . , . , . , . , . , . , . , . , . , . , . , . , . , . , . , . , 
                               -PAGE 4-                       TUTORIAL-I V0.2
Topics:  Character Insertion | Wraparound

To  insert  text, simply type characters. These characters are inserted at the
cursor  position.  The  cursor  moves one right and all characters right of it
are  shifted right, so as to make space for your new character. This is called
"insert"  mode.  Although  it  may  require  some  adaptation,  you  will find
"insert"  mode  more  economical and more error-proof than the typewriter-like
overstrike mode.

What  happens if I want more than 80 characters on a line ? Well, in this case
the  editor  will  change  the  < at the end of the line to !, open a new line
below,  and  continue the line on the newly opened line. It will treat the two
physical  lines  as one logical lines. For instance when you insert characters
on  the  start  of  a  line,  characters on such an extension-line are shifted
right  just  like  the  characters on the first line, and the character on the
end  of  the  first line becomes the first character on the continuation line.
This  is  called  wraparound. Now just type your name, and watch the described
action.
                               -PAGE 5-                       TUTORIAL-I V0.2
Topics:  Cursor Movement | CTL-B | CTL-F | CTL-A | CTL-E

Your  name has disappeared - of course, we are on another page. Please type it
again.

Of  course  you  will also wish to insert text anywhere on this line, not only
on  the  cursor  position ( the start of the line ). For this you will want to
move your cursor freely on this line.

CTL-B  moves the cursor B-ackwards, CTL-F F-orwards. Make sure not to move out
of  this  line. You do not know other commands yet to get back to this paging.
This  is  not  tragic,  but will distort the nice "screen-ful" organization of
this tutorial.

CTL-A  moves  the  cursor directly to the start of the line, CTL-E to the E-nd
of  the  line.  Now  move  the cursor a little around, and insert some text at
various points ( e.g. insert your middle name ).


                               -PAGE 6-                       TUTORIAL-I V0.2
Topics:  Cursor Movement | CTL-N | CTL-P


The  command to move down one line, to the N-ext line is CTL-N, the command to
move up one line, to the P-revious line is CTL-P.


Again,  try  to stay on this screen, because otherwise MAX would try to center
the  screen  for you. The cursor would be in the middle of the screen, but you
would loose the nice tutorial paging,


Below  is  an  incomplete sentence. Move down to the correct line, then to the
place where you wish to insert text, and insert it.

        It is a lot easier to fight mythan to fight computers,
        but it is a lot hrdr to ignore my thn my.


                               -PAGE 7-                       TUTORIAL-I V0.2
Topics:   Cursor Movement : Summary

You should remember the following commands by now:


CTL-V   go to the next page
ESC-V   go to the last page


CTL-A   go to the start of the line
CTL-E   go to the   end of the line


CTL-F   advance one character              |             CTL-P
CTL-B   retreat one character              |     CTL-B           CTL-F
CTL-P   go to the previous line ( up )     |             CTL-N
CTL-N   go to the     next line ( down )   |


                               -PAGE 8-                       TUTORIAL-I V0.2
Topics:  Character Deletion

There  are two commands to delete one character: CTL-D and the DEL key.  CTL-D
deletes  the  character  at the cursor position, and DEL deletes the character
one  before  the cursor position. The first is more often used.  The second is
handy  when  you insert a lot of text and want to correct the typo(s) you just
made, and are to lazy to move back and then delete.

These  commands  also work with the end of lines. They delete the lineend, and
thereby attach the second logical line to the first logical line.

Below  is  a  line  with some obvious errors. Use the cursor commands that you
already  know  to  move  the cursor there, delete the mistakes, and insert the
correct words.

        In the bginnning, God createdfsh



                               -PAGE 9-                       TUTORIAL-I V0.2
Topics:  Centering | CTL-L

Do  you  remember  the warnings not to leave the page with other commands than
CTL-V  and  ESC-V  ?  This  is  because  as  soon as you move your cursor to a
character  not  on the screen, MAX will update the screen such that the cursor
is  in  the  center  of  the  screen. This allows you to easily work through a
document  while  seeing the cursor without page commands.  Only in the case of
the  tutorial,  this  feature  would  throw you out of my special page by page
organization.  Pages  do  not  really  exist - I had to count lines to see how
many lines I wished on a page.

CTL-L  will  center  your cursor whereever you are in the file and rebuild the
screen.  Try  it  when  you  have  read through this page ( also try CTL-P and
other  commands  at  the start of a page ). Then go down line by line, and try
CTL-L  each line. You will see that the entire page shifts up one line ( since
you  center  now  in another place. Do this until you see in the last line the
same thing you see now, and then go to the next page.

*Last Line of Page 9*
                              -PAGE 10-                       TUTORIAL-I V0.2
Topics:  Editing a File | CTL-X CTL-V

Now  you  know all the necessary action to manipulate a file. But where do you
get the file from ? There are two ways:

Firstly,  you  can specify when you start MAX that you want to edit a specific
file. For example, if you type to the DOS prompt:
       A>MAX TUTORIAL.TXT    (the general Format is: >MAX filename.ext)
MAX  will  read  the command line, discover that you wish to edit a file named
TUTORIAL.TXT,  and  this  is  exactly what you are doing right now.  Secondly,
when  you  are  already  inside  MAX,  you  can wish to edit another file. The
command  is  CTL-X  CTL-V, which stands for "extended command - Visit a file."
MAX  will  ask you for its name ( use CTL-G if you changed your mind and don't
want  to  visit  another  file  )  and confirmation to throw away what you are
editing at the moment (for your protection against mistakes)

If  you  want  to  create a new file instead of editing an existing file, just
specify a filename of a nonexisting file, and MAX will create it for you.

                              -PAGE 11-                       TUTORIAL-I V0.2
Topics:  Saving and Writing | CTL-X CTL-S | CTL-X CTL-W | CTL-X CTL-Z

Now  you can edit a file of your choice and manipulate it in any way you like.
But  you  still  don't know how to save your work to the disk, so as to use it
for other things like printing, processing etc.

CTL-X  CTL-S  will  save  your work as the filename which you see specified in
the  first  line  (  presently it is A:TUTORIAL.TXT ). However, if you wish to
write  your  work  to  a  file with a different name ( and thereby keeping the
original  version  of this file under the old name on disk ), you will have to
use  the  command  CTL-X  CTL-W. Just like when you visit a file, MAX will ask
you for the new name under which to save your work.

! ATTENTION: DO NOT SAVE YOUR FILE NOW - YOU WOULD SAVE ALSO ALL
!            THE CHANGES YOU MADE DURING YOUR LEARNING SESSION !




                              -PAGE 12-                       TUTORIAL-I V0.2
Topics:  Documentation

Now  you  know  enough  to create and manipulate files in any way you like to.
Of  course, there are more powerful commands, too, but the commands which this
file  tought you, allow you to start using and familiarizing yourself with the
MAX.  There  are  more  powerful  commands, but they are extras, nice ones but
only  extras.

What  other  documentation  can  you  get  ?  As  you  may remember, MAX is an
EMACS-lookalike   editor.    Worst   case   EMACS  information  or  any  other
EMACS-look-  alike  editors  (  like  Perfect-Writer  or  MINCE  )  have  more
information.   CTL-H  ( or the help key on your keyboard ) will put you into a
help  mode,  which will remind you of all the available commands. Try it, then
come  back with ESC. Of course, there is always the written documentation: the
handbook,  the  reference  guide and the keyboard layout description which you
can   consult.    New  information  may  be  available  from  newsletters  and
magazines,  or private individuals distributing information. [If you decide to
create  new  documenta-  tion,  please  contact  the  author  who will make it
available to all users, which in the end will benefit all buyers.]

                              -PAGE 13-                       TUTORIAL-I V0.2
Topics:  More Advanced Commands

If  you  are  familiar  with all these commands, and you have exercised enough
with  them,  you can start using the more powerful commands. There is a second
tutorial available for these commands.

To give you an idea what you can do, here are some points: 
        - move by word, or globally
        - search for text
        - search and replace text by other text (*)
        - switch buffers
        - use windows (*)
        - give arguments to functions
        - insert Control-Characters
        - kill and yank back lines, words or regions
        - format paragraphs (*)
        - define and invoke macro commands (*)
        - and many more things...

                              -PAGE 14-                       TUTORIAL-I V0.2
Topics:  Exiting from MAX | CTL-X CTL-Z

I  guess the best thing I can do for you now is to ask you to practice all the
commands  which  you have learned in this tutorial. Create some nonsense files
and  play with the commands you know. It should take you no more than two days
of  intensive  practicing to know MAX command sequences by heart.  Don't worry
if it takes you longer, though. Es ist noch kein Meister vom Himmel gefallen.

Probably  you are tempted now to use all the arrow and function keys that your
keyboard  offers  :  They  are defined, and do the same things for you without
you  having  to  remember the long sequences. But it will be to your advantage
to  know  exactly  what  you are doing. So don't use the fancy keys right from
the beginning.

Now  I  can  finally tell you how to exit MAX. The command is CTL-X CTL-Z.  It
will  zap  you  right out of the editor, back to the DOS, after you confirm as
MAX asks you with CTL-Y.

                                GOOD LUCK
...and thank you for your choice,

Ivo Welch
---------------------------------------------------------------------------
MAX
Version 1.02, (C) Ivo Welch, 1984

MAX Tutorial
Version 0.2a, (C) Ivo Welch, 1984

---------------------------------------------------------------------------
Other companies mentioned in this document:

EMACS           is a trademark of MIT ??
Perfect Writer  is a trademark of Perfect Software
MINCE           is a trademark of Mark of the Unicorn

```
{% endraw %}

## WINDOWS.ASM

{% raw %}
```
PUBLIC	SwitchWindow, ToggleNumWindows, SelectBuffer, BufToggle, InitWIndows

PUBLIC	WindowStart, WindowEnd, WindowStartLine		; for pure screens
PUBLIC	NumWinsScr,					; for fns like C-V
PUBLIC	ActiveBuffer, ActiveWindow			; for modeline
PUBLIC	Separatorline
PUBLIC	CBuffer1

EXTRN	$Buffer1:Word, $Buffer2:Word, $BufferNumber:Word
EXTRN	.Error0:Near, .Msg:Near, .Screen:Near, Sound:NEAR, .InCH:Near
EXTRN	.CLRMsg:NEAR
;---------------------------------------------------------------------------
	Page ,132
NAME Windows

TITLE Windows and Buffers

INCLUDE        FDEF.DEF


;---------------------------------------------------------------------------
Program        SEGMENT PARA    PUBLIC  'code'
       ASSUME  CS:Program, DS:Program, ES:Program, SS:Program

;...........................................................................

ActiveBuffer	dw	0	; buffer = [0,1...9]		; PUBLIC

Windowstart	dw	Line0		; [0 , 11*160]		; PUBLIC
Windowend	dw     TextLastLine*160	; [9*160 , 19*160]	; PUBLIC

WindowStartLine	dw	0	; used to position cursor	; PUBLIC
NumWinsScr	dw	0	; used to calculate C-V etc	; PUBLIC



ActiveWindow	db	0	; window = [0,1]	; PUBLIC

CBuffer1	dw	0
CBuffer2	dw	0
PBuffer1	dw	0
PBuffer2	dw	0
CBSeg1		dw	0	; just for easier access
CBSeg2		dw	0
PBSeg1		dw	0
PBSeg2		dw	0

OneBufMsg	db	'*** Only One Buffer ***'
UserAbortMsg	db	'*** User Abort ***'
ChooseBuffer	db	'Choose new Buffer: '
WelcomeMsg	db	'Available Buffers:', 0
BuffernumberMsg	db	'1)  ', 0
ByeMsg		db	'----------------------------------------', 0

CURSOR	MACRO	X, Y
	mov	AH, 2
	mov	BH, 0
	mov	DX, X*256+Y
	int	BIOS
ENDM

;---------------------------------------------------------------------------
InitWindows	PROC	NEAR

	mov	CS:ActiveWindow, Win1
	mov	CS:ActiveBuffer, 0

	mov	CS:CBuffer1, 0
	mov	CS:CBuffer2, 1
	mov	CS:PBuffer1, 1
	mov	CS:PBuffer2, 0

	mov	AX, CS:$Buffer1			; init windows
	mov	DS, AX
	mov	CS:CBSeg1, AX
	mov	CS:PBSeg2, AX

	mov	AX, CS:$Buffer2

	mov	CS:CBSeg2, AX
	mov	CS:PBSeg1, AX
	ret
InitWindows	ENDP
;---------------------------------------------------------------------------
; ToggleNumWindows
;
;	FN:	toggles the number of windows on the screen, leaves the
;		cursor in the active window.
;
;	OUT:	NumWinsScr:	New Value
;		WindowStart:	New Value
;		WindowEnd:	New Value
;		WindowStartLine:New Value

ToggleNumWindows	PROC	NEAR

	xor	CS:NumWinsScr, Toggle
	cmp	CS:NumWinsScr, OneWindow
	je	To1Window

To2Windows:
	call	SwitchWindow			; this will split up one
	call	.Screen				; display it
	call	SwitchWindow
	call	SeparatorLine
	ret

To1Window:
	mov	CS:WindowStart, Line0
	mov	CS:WindowStartLine, 0
	mov	CS:WindowEnd, Line0+FullScreen
	ret

ToggleNumWindows	ENDP

;---------------------------------------------------------------------------
; SwitchWindow:
;
;	FN:	switches to the other buffer, if both windows edit an
;		identical buffer, we need to arrange a few special things.
;
;	OUT:	ActiveWindow:	New Value
;		DS:		new Buffer Segment
;		Aux*:		to reflect concurrent editing
;
SwitchWindow	PROC	NEAR

	xor	CS:ActiveWindow, Toggle

	mov	AX, CS:CBuffer1
	cmp	AX, CS:CBuffer2
	jne	DifferentBuffers

;. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
IdenticalBuffers:			; if W1[Buffer]=W2[Buffer]
	mov	AX, DS:BCB.AuxScrStart	; xchg Screen Starts
	xchg	AX, DS:BCB.ScrStart
	mov	DS:BCB.AuxScrStart, AX

	mov	AX, DS:BCB.AuxCursor	; and xchg Cursors
	xchg	AX, DS:BCB.FCursor
	mov	DS:BCB.AuxCursor, AX

	mov	AX, DS:BCB.FCursor		; if we have edited the Window
	cmp	AX, DS:BCB.FEnd			; such that the cursor would
	ja	ResetCursor 			; be further than the end of
						; file...

	mov	BX, AX				; if we are on a LF, move back
	cmp	Byte Ptr DS:[BX], LF		; to the CR
	jne	SwitchScreen
	dec	DS:BCB.FCursor
	jmp	SwitchScreen			; and update screen

ResetCursor:
	mov	AX, DS:BCB.FEnd
	mov	DS:BCB.FCursor, AX
	jmp	SwitchScreen


;. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
DifferentBuffers:

	cmp	CS:ActiveWindow, Win1		; which window is active ?
	je	Switchto1

Switchto2:
	mov	DS, CS:CBSeg2
	mov	AX, CS:CBuffer2
	mov	CS:ActiveBuffer, AX
	jmp	SwitchScreen

Switchto1:
	mov	DS, CS:CBSeg1
	mov	AX, CS:CBuffer1
	mov	CS:ActiveBuffer, AX
	jmp	SwitchScreen

;...........................................................................
SwitchScreen:
	cmp	CS:NumWinsScr, OneWindow	; if we presently have only
	jne	SS2				; one Window,

SS1:	mov	CS:WindowStart, Line0		; there is just one window
	mov	CS:WindowStartLine, 0		; displayed
	mov	CS:WindowEnd, Line0+FullScreen
	ret

SS2:	mov	CS:WindowStart, Line0		; there are two windows displ.
	mov	CS:WindowStartLine, 0

	cmp	CS:ActiveWindow, Win2		; find out the start of the
	jne	SS2C				; Window ( either l0 or l10 )
	mov	CS:WindowStart, Line10		; bottom window
	mov	CS:WindowStartLine, 10

SS2C:	mov	AX, CS:WindowStart		; top window
	add	AX, HalfScreen
	mov	CS:WindowEnd, AX
	ret

SwitchWindow	ENDP

;---------------------------------------------------------------------------
; SelectBuffer:
;
;	FN:	switches the active buffer in window n to be the previous
;		buffer, and assigns a new one
;
;		Note that at exit time I always draw a Separatorline: if
;		there should be none, the screen update will erase it
;		quickly!
;
SelectBuffer	PROC	NEAR

	call	TellBuffers

	call	.CLRMsg
	mov	SI, Offset ChooseBuffer
	mov	CX, 19
	call	.Msg

Wait:	call	.Inch
	jz	Wait

	cmp	AL, CTL_G
	je	UserAbort

	cmp	AL, CR
	je	Userequal

	sub	AL, '1'
	sub	AH, AH

	cmp	AX, CS:$BufferNumber
	jb	Foundnewbuffer
	call	Sound
	jmp	Wait
UserAbort:
	call	Separatorline			; without check for double !
	mov	SI, Offset USERABORTMSG
	mov	CX, 18
	jmp	.Error0
Userequal:
	call	Separatorline			; without check for double !
	ret

FoundNewBuffer:
	mov	CX, AX				; this will be the new number
	cmp	CX, CS:ActiveBuffer
	jne	FNB1
	call	Separatorline			; without check for double !
	jmp	.CLRMsg

FNB1:	add	AX, AX
	add	AX, Offset $Buffer1		; this will be the new segment
	mov	BX, AX				; to convince the assembler
	mov	DX, CS:[BX]

	cmp	CS:ActiveWindow, Win1		; and it goes into window n
	je	WithWindow1

WithWindow2:
	push	cx
	call	Separatorline
	pop	cx
	mov	AX, CS:CBuffer2
	mov	CS:PBuffer2, AX

	mov	AX, CS:CBSeg2
	mov	CS:PBSeg2, AX

	mov	CS:CBuffer2, CX
	mov	CS:ActiveBuffer, CX
	mov	CS:CBSeg2, DX
	mov	DS, DX
	jmp	.CLRMsg

WithWindow1:
	push	cx
	call	Separatorline
	pop	cx
	mov	AX, CS:CBuffer1
	mov	CS:PBuffer1, AX

	mov	AX, CS:CBSeg1
	mov	CS:PBSeg1, AX

	mov	CS:CBuffer1, CX
	mov	CS:ActiveBuffer, CX

	mov	CS:CBSeg1, DX
	mov	DS, DX
	jmp	.CLRMsg
SelectBuffer	ENDP

;---------------------------------------------------------------------------
;---------------------------------------------------------------------------
; simply exchanges the previous and the current buffer
;
BufToggle	PROC	Near

	cmp	CS:$Buffernumber, 1
	jbe	BTError

	mov	AL, CS:ActiveWindow		; now check which Window
	cmp	AL, Win1			; we are currently in
	je	UpdateWin1

UpdateWin2:
	mov	AX, CS:CBSeg2			; exchange the buffer segment
	xchg	AX, CS:PBSeg2
	mov	CS:CBSeg2, AX
	mov	DS, AX

	mov	AX, CS:CBuffer2			; exchange the buffer name
	xchg	AX, CS:PBuffer2
	mov	CS:CBuffer2, AX
	mov	CS:ActiveBuffer, AX
	ret


UpdateWin1:
	mov	AX, CS:CBSeg1			; exchange the buffer segment
	xchg	AX, CS:PBSeg1
	mov	CS:CBSeg1, AX
	mov	DS, AX

	mov	AX, CS:CBuffer1			; exchange the buffer name
	xchg	AX, CS:PBuffer1
	mov	CS:CBuffer1, AX
	mov	CS:ActiveBuffer, AX
	ret

BTError:
	mov	CX, 23
	mov	SI, Offset OneBufMsg
	jmp	.Error0

BufToggle	ENDP
;---------------------------------------------------------------------------
SeparatorLine	PROC	NEAR
	mov	AX, ScreenSegment
	mov	ES, AX
	mov	DI, HalfScreen+2
	mov	AX, Modelinecolor*256+'-'
	mov	CX, 80
	rep	stosw
	ret
SeparatorLine	ENDP
;---------------------------------------------------------------------------
TellBuffers	PROC	NEAR

	mov	CS:StartofPrint, 0
	mov	CS:StartofPrintColumn, 0
	call	SwitchNormal

	push	DS

	mov	SI, Offset WelcomeMsg
	call	PRINTCS
	call	PRINTCR
	sub	DX, DX
	call	PRINTCR
	CURSOR	20, 19

	mov	BX, 0
	mov	CX, CS:$Buffernumber

TBLoop:	mov	DS, CS:[BX+Offset $Buffer1]
	shr	BX, 1
	mov	AX, BX
	add	BX, BX
	add	BX, 2
	push	AX
	cmp	AX, CS:ActiveBuffer
	je	SWI
	call	SwitchNormal
	jmp	TBL1
SWI:	call	SwitchInverse

TBL1:	pop	AX
	add	AL, '1'
	mov	CS:BuffernumberMsg, AL
	mov	SI, Offset BuffernumberMsg
	call	PRINTCS

	mov	AL, DS:BCB.Dirty
	cmp	AL, TRUE
	je	PNS
	mov	SI, Offset Saved
	jmp	TBL2
PNS:	mov	SI, Offset NotSaved
TBL2:	call	PrintCS

	mov	SI, Offset BCB.FIle
	call	PrintDS
	call	PrintCR
	loop	TBLoop
	pop	DS

	call	SwitchNormal
	mov	SI, Offset ByeMsg
	call	PRINTCS
	call	PRINTCR
	ret
TellBuffers	ENDP

;---------------------------------------------------------------------------
StartofPrint		dw	0
StartofPrintColumn	dw	0
PrintColor		db	0
Saved			db	' [Saved]::     ', 0
NotSaved		db	'*[Changed]::   ', 0

; IN:	SI -> ASCIZstring
;	CS:StartofPrint, 0
;	CS:PrintColumn, 0
PrintCS	PROC	NEAR

	push	AX
	push	DI
	push	SI
	push	DX
	push	CX

	mov	AX, ScreenSegment
	mov	ES, AX

	mov	DI, CS:StartofPrint
	mov	DX, CS:StartofPrintColumn

PLCS:	lods	Byte Ptr CS:[SI]
	cmp	AL, 0
	je	PrCS1
	mov	AH, CS:PrintColor
	stosw
	inc	DX
	jmp	PLCS

PrCS1:	mov	AL, ' '
	mov	AH, CS:Printcolor
	stosw
	stosw
	add	DX, 2
	mov	CS:StartOfPrint, DI
	mov	CS:StartOfPrintCOlumn, DX
	pop	CX
	pop	DX
	pop	SI
	pop	DI
	pop	AX
	ret

PrintCS	ENDP
;---------------------------------------------------------------------------

PrintDS	PROC	NEAR

	push	AX
	push	DI
	push	SI
	push	DX
	push	CX

	mov	AX, ScreenSegment
	mov	ES, AX

	mov	DI, CS:StartofPrint
	mov	DX, CS:StartofPrintColumn

PLDS:	lods	Byte Ptr DS:[SI]
	cmp	AL, 0
	je	PrDS1
	mov	AH, CS:PrintColor
	stosw
	inc	DX
	jmp	PLDS

PrDS1:	mov	AX, ' '+nocolor*256
	stosw
	stosw
	add	DX, 2
	mov	CS:StartOfPrint, DI
	mov	CS:StartOfPrintCOlumn, DX
	pop	CX
	pop	DX
	pop	SI
	pop	DI
	pop	AX
	ret

PrintDS	ENDP
;---------------------------------------------------------------------------
PRINTCR	PROC	NEAR

	mov	AX, ScreenSegment
	mov	ES, AX

	mov	AX, ' '+nocolor*256

	mov	DI, CS:StartofPrint
	mov	DX, CS:StartofPrintColumn

PRCRL:	stosw
	inc	DX
	cmp	DX, 80
	jne	PRCRL

	mov	CS:StartofPrintColumn, 0
	mov	CS:StartofPrint, DI
	ret
PRINTCR	ENDP
;---------------------------------------------------------------------------
SwitchInverse	PROC	NEAR
	mov	CS:PrintColor, Inverse
	ret
SwitchInverse	ENDP
SwitchNormal	PROC	NEAR
	mov	CS:Printcolor, Nocolor
	ret
SwitchNormal	ENDP



;---------------------------------------------------------------------------
	PROGRAM	ENDS
END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0563

     Volume in drive A has no label
     Directory of A:\

    ABSTRACT           617  12-27-86   6:51p
    AUTOEXEC BAT       217   3-02-87   3:34p
    FILES563 TXT      2391   3-02-87   4:00p
    GO       BAT        11   3-02-87   4:13p
    NOTES563 TXT      1415   6-12-86  10:15a
    START              409  12-27-86   6:56p
    WELCOME           6488  12-27-86   6:50p
    MAX          <DIR>    
            8 file(s)      11548 bytes

     Directory of A:\MAX

    .            <DIR>    
    ..           <DIR>    
    COLOR    BIN     15318   4-07-85  10:55a
    MONO     BIN     15302   4-22-86   4:27p
    DOC          <DIR>    
    SOURCE       <DIR>    
            6 file(s)      30620 bytes

     Directory of A:\MAX\DOC

    .            <DIR>    
    ..           <DIR>    
    CONTRACT          3208   6-15-86   1:57p
    FIXES              170  12-27-86   9:25a
    MAX      HLP     15497  12-27-86   9:18a
    TUTORIAL TXT     14778  12-27-86   9:14a
            6 file(s)      33653 bytes

     Directory of A:\MAX\SOURCE

    .            <DIR>    
    ..           <DIR>    
    ALLOCATE ASM      5889   2-17-85   9:47a
    COLOR    DEF      3364  12-27-86   9:50a
    CTRLC    ASM     21965   3-20-85   5:24p
    CTRLXC   ASM     10651   4-07-85  10:29a
    DOSFILES ASM     14734   4-06-85  11:26p
    ESCC     ASM     12329   2-08-85   2:10p
    ESCXC    ASM      9865   3-27-85   4:12a
    HELP     ASM      7586  12-27-86   9:50a
    LAST     ASM       250   2-08-85   2:10p
    MAIN     ASM     19592   4-07-85  10:29a
    MAKEFILE          1078   4-22-86   4:26p
    MODELINE ASM      7421   3-26-85  10:18a
    MONO     DEF      3366  12-27-86   9:52a
    MORESCRE ASM      7622   2-08-85   2:10p
    PARSE    ASM     14405   4-06-85   8:41p
    SCREEN   ASM      6760  12-27-86   8:57a
    SEARCH   ASM      6177   2-08-85   2:39p
    WINDOWS  ASM     10978   4-06-85   8:23p
           20 file(s)     164032 bytes

    Total files listed:
           40 file(s)     239853 bytes
                           59392 bytes free
