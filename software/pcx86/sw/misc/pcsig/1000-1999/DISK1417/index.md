---
layout: page
title: "PC-SIG Diskette Library (Disk #1417)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1417/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1417"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HACK KEYS (REQUIRES NORTON GUIDES)"

    The keyboard mapper HACKKEYS and its accompanying database are helpful
    tools for the Hack (PC-SIG disk #452) game enthusiast.
    
    Hack is a complicated Dungeons and Dragons game with many rules,
    weapons, and monsters to memorize.  The Hack database is a Norton Guides
    on-line reference for all the complicated details of the game and even
    has some helpful hints.  This saves endless paper shuffling when you
    encounter an obscure monster or potion.  It should be noted that Norton
    Guides, a database that lets you create your own help files, is
    required for the database.
    
    Hack requires keyboard input to move from dungeon to dungeon at the
    different levels.  Unfortunately since HACK was developed on UNIX,
    obscure keys like h,j, or k are used to move around the screen.  Most PC
    users find these keys awkward to use.  HACKKEYS is a RAM-resident
    program that alleviates this problem and lets you use the arrow keys.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1417.TXT

{% raw %}
```
Disk No: 1471
Program Title: HACKKEYS
PC-SIG version: 1

The keyboard mapper HACKKEYS and its accompanying database are helpful
tools for the HACK (PC SIG disk #452) game enthusiast.

HACK is a complicated dungeons and dragons game with many rules,
weapons, and monsters to memorize.  The HACK database is a Norton Guides
on-line reference for all the complicated details of the game and even
has some helpful hints.  This will save endless paper shuffling when one
encounters an obscure monster or potion.  It should be noted that Norton
Guides, a database that allows you to create your own help files, is
required for the database.

HACK requires keyboard input to move from dungeon to dungeon at the
different levels.  Unfortunately since HACK was developed on UNIX
obscure keys like h,j, or k are used to move around the screen.  Most PC
users will find these keys awkward to use.  HACKKEYS is a RAM resident
program that alleviates this problem and allows the arrow keys to be
used.

Usage:  Game utility.

Special Requirements:  Norton Guides for HACK database.

How to Start:  Type GO (press enter).

Suggested Registration:  None.

File Descriptions:


GUIDE    <DIR> Subdirectory.
HACKKEYS <DIR> Subdirectory.
CONTENTS       Documentation.
HACKKEYS COM   Keyboard mapper.
HACK     NG    Norton Guides Database.

PC-SIG
1030D E. Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## HACKKEYS.ASM

{% raw %}
```
		NAME	HACKKEYS
		TITLE	HACK Key Mapper
; 
; HACKKEYS : Translate keys for use by HACK program
;
; Written 5/88 by Chris Shearer Cooper
;
; This is a relatively simple assembly language program, and I have
;    (hopefully) made it as simple as possible to alter to your own
;    choosing.
;
; Type HACKKEYS once to install, again to remove.
;
; HACKKEYS will only perform key mapping when the keypress is requested
;    by a program that is run AFTER HACKKEYS is loaded.  I did this because
;    I like to load Norton Guides first, then HACKKEYS, then Hack, so that
;    when I'm in the game the arrow keys do HACK stuff but when I invoke
;    Norton Guides (since it was loaded BEFORE HACKKEYS), the arrow keys
;    function like normal arrow keys.
;
; Theory of operation :
;    When a program wants to wait for the user to press a key, it requests
;    a key from MS-DOS by performing an interrupt 16, function 0 (if that sounds
;    like gibberish, don't worry).  When you run HACKKEYS, it loads itself into
;    memory and intercepts any keypress requests.  When it gets a keypress
;    request, HACKKEYS calls the MS-DOS keypress request routine which waits
;    for you to press a key.  Then, MS-DOS returns to HACKKEYS what key the
;    user pressed.  HACKKEYS looks at the key that MS-DOS returned and decides
;    if it needs to be mapped to a different key (that is, lie to the program
;    that asked for the key).  
;
; In other words, normal keypress requests go like this :
;
; +-----------+ Keypress request +----------+
; |           | ---------------> |          |
; |  Program  |                  |  MS-DOS  |
; |           |   Key pressed    |          |
; |           | <--------------- |          |
; +-----------+                  +----------+
;
; But with HACKKEYS installed, a keypress request does this :
;
; +-----------+ Keypress request +------------+ Keypress request +----------+ 
; |           | ---------------> |  HACKKEYS  | ---------------> |          |
; |  Program  |                  |            |                  |  MS-DOS  |
; |           |   Key pressed    |  translate |   Key pressed    |          |
; |           | <--------------- | <--------- | <--------------- |          |
; +-----------+                  +------------+                  +----------+
;
; HACKKEYS can easily be altered to perform this same function for other
;    programs.  There is no reason that this keypress mapping would
;    confuse programs.  However, some programs poll the keyboard themselves
;    so HACKKEYS cannot affect them.
;
; To create a new COM file :
;    1. Using the MAKE file
;
;          MAKE HACKKEYS
;
;    2. By hand
;
;          MASM HACKKEYS;
;          LINK HACKKEYS;
;          EXE2BIN HACKKEYS.EXE HACKKEYS.COM
;
; I am using Microsoft Macro Assembler 5.0
;

; Some assembly language stuff

CODE		SEGMENT	para public 'CODE'
		ORG	0100h
		ASSUME	CS:CODE,DS:NOTHING,ES:NOTHING,SS:NOTHING

HACKKEYS	PROC	NEAR
FIRST:		JMP	START
HACKKEYS	ENDP

; ************************************************************************* 
;
; This translate table exists so that you can add or remove any key mappings
; you wish.  Right now, the numeric keypad is mapped so you can type the
; arrow in the direction you wish to go instead of the ykuhlbjn letter.
; In addition, pressing an arrow key while pressing SHIFT is the same as
; pressing the capital move letter (YKUHLBJN) which makes you move far.
;
; First value on line is key the user actually presses, the second is the
; key you want it to appear to the program that the user pressed.
;
; You can add or delete as many key mappings as you wish.  When you 
;    re-assemble the program, the translate table size is automatically
;    calculated.
;

;**********************************************************************
; HACKKEYS is a simple example of a TSR - a Terminate and Stay Resident
;    program.  If you notice, when you type most commands the disk whirs
;    for a moment before the program starts.  This is because the program
;    you want is not in memory (where the computer can execute the program)
;    but stored on disk.  When you type the command name, MS-DOS finds the
;    program on the disk, copies it into memory, and executes it.  When
;    the program is done, the program is removed from memory to make room
;    for the next program you wish to run.
;
; Some programs, like HACKKEYS, need to stay in memory even though you
;    load a new program (if HACKKEYS wasn't in memory when HACK was running
;    it couldn't perform key mapping).  For this reason, HACKKEYS needs
;    to Terminate (done for now until someone asks for a key) and Stay
;    Resident (don't remove me from memory).

;**********************************************************************
;
; Following are the names of the keys.  You must use the name defined here
;    if you alter the translate table.
;
; If there is a key you wish mapped (either from or to) that is not named
;    below, you can add an EQU line for it.  Each EQU line defines a name
;    for a single key.  As you can see, in column one is the name (for
;    example, L_HOME), two tabs over (tabs are ignored, just to make the
;    file look pretty) is the word EQU which means that you are defining
;    a name, and then another tab is the mysterious 6-character code.  
;    Further on is a semicolon and then some English words for us humans.
;    Anything to the right of a semicolon in a .ASM file is a comment.
;
; The 6-character code always starts with a '0' and ends with an 'h'.  This
;    is so the assembler knows you are working in hexadecimal (base 16).
;    The first two characters (after the '0') are the hexadecimal ASCII
;    code of the key you are naming, the next two are the hexadecimal
;    key scan code.  You should be able to find both of these values in your
;    BASIC manual, if nowhere else.
;

;
; Technical note : all key codes have ASCII code in LSB, scan code in MSB.
;

; Unshifted numeric pad codes
L_HOME		EQU	04700h		; Home
L_UP		EQU	04800h		; Up arrow
L_PGUP		EQU	04900h		; PgUp
L_LEFT		EQU	04B00h		; Left arrow
L_RIGHT		EQU	04D00h		; Right arrow
L_END		EQU	04F00h		; End
L_DOWN		EQU	05000h		; Down arrow
L_PGDN		EQU	05100h		; PgDn

; Unshifted F-keys
L_F1		EQU	03B00h		; F1
L_F2		EQU	03C00h		; F2
L_F3		EQU	03D00h		; F3
L_F4		EQU	03E00h		; F4
L_F5		EQU	03F00h		; F5
L_F6		EQU	04000h		; F6
L_F7		EQU	04100h		; F7
L_F8		EQU	04200h		; F8
L_F9		EQU	04300h		; F9
L_F10		EQU	04400h		; F10

; Shifted numeric pad codes
S_HOME		EQU	04737h		; SHIFT Home
S_UP		EQU	04838h		; SHIFT Up arrow
S_PGUP		EQU	04939h		; SHIFT PgUp
S_LEFT		EQU	04B34h		; SHIFT Left arrow
S_CENTER	EQU	04C35h		; SHIFT 5 (center of keypad)
S_RIGHT		EQU	04D36h		; SHIFT Right arrow
S_END		EQU	04F31h		; SHIFT End
S_DOWN		EQU	05032h		; SHIFT Down arrow
S_PGDN		EQU	05133h		; SHIFT PgDn

; Lowercase letters
L_A		EQU	01E61h		; a
L_B		EQU	03062h		; b
L_C		EQU	02E63h		; c
L_D		EQU	02064h
L_E		EQU	01265h
L_F		EQU	02166h
L_G		EQU	02267h
L_H		EQU	02368h
L_I		EQU	01769h
L_J		EQU	0246Ah
L_K		EQU	0256Bh
L_L		EQU	02C6Ch
L_M		EQU	0326Dh
L_N		EQU	0316Eh
L_O		EQU	0186Fh
L_P		EQU	01970h
L_Q		EQU	01071h
L_R		EQU	01372h
L_S		EQU	01F73h
L_T		EQU	01474h
L_U		EQU	01675h
L_V		EQU	02F76h
L_W		EQU	01177h
L_X		EQU	02D78h
L_Y		EQU	01579h
L_Z		EQU	02C7Ah		; z

; Uppercase letters
S_A		EQU	01E41h		; A
S_B		EQU	03042h		; B
S_C		EQU	02E43h		; C
S_D		EQU	02044h
S_E		EQU	01245h
S_F		EQU	02146h
S_G		EQU	02247h
S_H		EQU	02348h
S_I		EQU	01749h
S_J		EQU	0244Ah
S_K		EQU	0254Bh
S_L		EQU	02C4Ch
S_M		EQU	0324Dh
S_N		EQU	0314Eh
S_O		EQU	0184Fh
S_P		EQU	01950h
S_Q		EQU	01051h
S_R		EQU	01352h
S_S		EQU	01F53h
S_T		EQU	01454h
S_U		EQU	01655h
S_V		EQU	02F56h
S_W		EQU	01157h
S_X		EQU	02D58h
S_Y		EQU	01559h
S_Z		EQU	02C5Ah		; Z

; Other keys
L_PERIOD	EQU	0342Eh		; .

;**********************************************************************
;
; Here is the actual translate table.  Each line declares one mapping.  The
;    first value on the line is the name of the key the user pressed, the
;    second value is the name of the key you want it mapped to.
;
; DW is assembly language for "Define Word" - it just means that you are
;    creating a data table.
;
XLATE		DW	L_HOME, L_Y		; Home -> y
		DW	L_UP, L_K		;     -> k
		DW	L_PGUP, L_U		; PgUp -> u
		DW	L_LEFT, L_H		;     -> h
		DW	L_RIGHT, L_L		;     -> l
		DW	L_END, L_B		; End  -> b
		DW	L_DOWN, L_J		; Down -> j
		DW	L_PGDN, L_N		; PgDn -> n

		DW	S_HOME, S_Y		; Home -> Y
		DW	S_UP, S_K		;     -> K
		DW	S_PGUP, S_U		; PgUp -> U
		DW	S_LEFT, S_H		;     -> H
		DW	S_CENTER, L_PERIOD	;      -> .
		DW	S_RIGHT, S_L		;     -> L
		DW	S_END, S_B		; End  -> B
		DW	S_DOWN, S_J		; Down -> J
		DW	S_PGDN, S_N		; PgDn -> N

XLEN		EQU	($ - XLATE) / 4

ENVIRON		EQU	002Ch		; Location of environment segment

PSIZE		EQU	1 + (HACK_END - HACKKEYS + 0100h) / 16

I16VEC		EQU	0058h
I21VEC		EQU	0084h

I16STO		DD	0			; Storage for 16 vector
I21STO		DD	0			; Storage for 21 vector

CR		EQU	0Dh
LF		EQU	0Ah
BEEP		EQU	07h

;
; Define some strings (Define Bytes) to let the user know what is
;    going on
;
LOADED		DB	cr,lf,'HACKKEYS loaded',cr,lf,'$'
REMOVED		DB	cr,lf,'HACKKEYS removed',cr,lf,'$'
NOERR		DB	cr,lf,'HACKKEYS cannot be removed : interrupt'
		DB	' vector changed',cr,lf,beep,'$'

;
; Here is the code that actually intercepts the program's keypress request.
;
INT16		PROC	FAR
;
; Interrupt 16 handler
;

		CMP	AX, 0AABDh		; Is it "Check for HACKKEYS"?
		JNE	NOCHECK

		MOV	AX, 1234h		; Return flag
		IRET

NOCHECK:	CMP	AX, 0AABFh		; Is it "Remove thyself"?
		JE	REMOVEME

		CMP	AH, 00			; Unless fcn 0, ignore it
		JE	IS00

TSR:		JMP	CS:I16STO		; Jump to real handler

IS00:		PUSH	BP
		PUSH	AX
		PUSH	BX

		MOV	BP, SP
		MOV	BX, SS:[BP+8]		; Read caller's CS off stack
		MOV	AX, CS

		CMP	AX, BX			; Are we before or after?

		POP	BX
		POP	AX
		POP	BP

		JA	TSR			; Jump if called from TSR

		PUSHF
		CALL	CS:I16STO		; Call interrupt 16 handler

		PUSH	BX
		PUSH	CX
		PUSH	SI
		PUSH	DS

		MOV	BX, AX

		MOV	AX, CS			; DS <- CS
		MOV	DS, AX

		MOV	CX, XLEN		; Get xlate table address
		MOV	SI, OFFSET CS:XLATE

		CLD

XLOOP:		LODSW				; AX <- DS:[SI++]
		CMP	AX, BX
		JE	GOTIT			; Jump if key is in table
		ADD	SI, 2			; Go to next table entry
		LOOP	XLOOP

		MOV	AX, BX			; Return unmapped key to caller

IOUT:		POP	DS
		POP	SI
		POP	CX
		POP	BX

		IRET

GOTIT:		MOV	AX, DS:[SI]		; Map key code
		JMP	IOUT

;
; REMOVEME : Remove HACKKEYS from memory
;
REMOVEME:	PUSH	DS
		PUSH	ES
		PUSH	DX
		PUSH	AX

		XOR	AX, AX			; DS <- 0000
		MOV	DS, AX

		MOV	AX, DS:I16VEC		; Can we remove?
		CMP	AX, OFFSET INT16
		JNE	NOREM

		MOV	AX, DS:I16VEC+2
		MOV	DX, CS
		CMP	AX, DX
		JNE	NOREM

		CLI				; Disable interrupts

		MOV	AX, WORD PTR CS:I16STO	; Restore old 16 vector
		MOV	DS:I16VEC, AX
		MOV	AX, WORD PTR CS:I16STO+2
		MOV	DS:I16VEC+2, AX

		STI				; Re-enable interrupts

		MOV	AX,DS:I21VEC		; Save present 21 vector
		MOV	WORD PTR I21STO,AX
		MOV	AX,DS:I21VEC+2
		MOV	WORD PTR I21STO+2,AX

		MOV	AX, CS
		MOV	DS, AX			; Restore DS

		MOV	AX, DS:ENVIRON		; Get environment segment

		MOV	ES, AX			; Free environment segment
		MOV	AH, 49h
		INT	21h

		MOV	DX, OFFSET REMOVED	; Tell user all is well
		MOV	AH, 09h
		INT	21h

		POP	AX			; Restore registers now :
		POP	DX			; values unimportant on
		POP	ES			; return
		POP	DS

		MOV	AX, CS			; Try to deallocate memory
		MOV	ES, AX
		MOV	AH, 49h

		JMP	CS:I21STO		; Jump to interrupt 21 handler

NOREM:		MOV	AX, CS			; Can't remove HACKKEYS
		MOV	DS, AX			; Restore DS

		MOV	DX, OFFSET NOERR	; Tell user oopsie
		MOV	AH, 09h
		INT	21h

		POP	AX
		POP	DX
		POP	ES
		POP	DS

		IRET

INT16		ENDP

START		PROC	NEAR
;
; Startup code
;
		MOV	AX, 0AABDh		; Check for HACKKEYS
		INT	16h

		CMP	AX, 1234h
		JNE	NOTIN

;
; Already loaded : remove it
;
GET_OUT:	MOV	AX, 0AABFh		; Tell HACKKEYS to remove
		INT	16h			; itself

		MOV	AX,4C00h
		INT	21h			; Return to DOS, status 0

;
; HACKKEYS is not in memory : load it
;
NOTIN:		XOR	AX,AX			; DS <- 0000
		MOV	DS,AX

		CLI				; Disable interrupts

		MOV	AX,DS:I16VEC		; Store "old" 16 vector
		MOV	WORD PTR I16STO,AX
		MOV	AX,DS:I16VEC+2
		MOV	WORD PTR I16STO+2,AX

		MOV	DS:I16VEC,OFFSET INT16	; Install our handler
		MOV	DS:I16VEC+2,CS

		STI				; Re-enable interrupts

		MOV	AX, CS			; DS <- CS
		MOV	DS, AX

		MOV	DX, OFFSET DS:LOADED	; Tell user all is well
		MOV	AH, 09h
		INT	21h

		MOV	AX, 03100h		; Terminate, return 0
		MOV	DX, PSIZE		; Give # of paragraphs to save
HACK_END:	INT	21h			; Terminate, stay resident

START		ENDP

CODE		ENDS

		END	FIRST

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1417

     Volume in drive A has no label
     Directory of A:\

    CONTENTS          3404   9-01-88   9:57p
    FILE1417 TXT      1466   6-01-89  10:33a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   6-01-89  10:38a
    HACK     NG      85645   5-19-88   7:34p
    HACKKEYS COM       440   7-16-88  11:16a
    MANUAL   BAT       150   3-08-89  11:32a
    PAGE     COM       325   1-06-87   4:21p
    VIEW     BAT        40   6-01-89  10:41a
    ACTION   DAT      1331   5-16-88   7:21p
    ACTION   NGO       989   5-16-88   7:34p
    ARMOR    DAT       846   5-17-88   9:38p
    ARMOR    NGO       841   5-17-88   9:44p
    BACKGROU DAT      1102   5-17-88   8:01p
    BACKGROU NGO      1103   5-17-88   8:07p
    BEGIN    DAT     11495   5-19-88   7:32p
    BEGIN    NGO     10888   5-19-88   7:32p
    CHARACTE DAT      6486   5-17-88   9:29p
    CHARACTE NGO      6402   5-17-88   9:44p
    CHEATING DAT      2251   5-19-88   6:58p
    CHEATING NGO      2203   5-19-88   7:31p
    COMBAT   DAT       357   5-10-88   8:46p
    COMBAT   NGO       268   5-10-88   8:54p
    COMMANDS DAT       211   5-17-88   8:12p
    COMMANDS NGO       291   5-17-88   8:13p
    CONFIGUR DAT      2124   5-17-88   8:03p
    CONFIGUR NGO      1633   5-17-88   8:07p
    DISPLAY  DAT       822   5-17-88   9:34p
    DISPLAY  NGO       406   5-17-88   9:44p
    HACK              1192   5-21-88   8:44p
    HACK     MNU       864   5-19-88   7:00p
    HINTS    DAT      6275   5-19-88   7:27p
    HINTS    NGO      6159   5-19-88   7:31p
    INQUIRY  DAT      1187   5-10-88   8:47p
    INQUIRY  NGO       863   5-10-88   8:54p
    ITEMS    DAT       186   5-17-88   9:36p
    ITEMS    NGO       251   5-17-88   9:43p
    MAGIC    DAT       268   5-11-88   9:22p
    MAGIC    NGO       187   5-11-88   9:23p
    MONSTER  DAT     31815   5-19-88   8:05p
    MONSTER  NGO     20521   5-16-88   7:34p
    MOTION   DAT      2028   5-14-88  10:42a
    MOTION   NGO      1672   5-14-88  10:42a
    OPTIONS  DAT       839   5-17-88   8:06p
    OPTIONS  NGO       758   5-17-88   8:07p
    OTHER    DAT       960   5-10-88   9:06p
    OTHER    NGO       686   5-10-88   9:12p
    PITCH    DAT       894   5-17-88   8:09p
    PITCH    NGO       818   5-17-88   8:12p
    POTIONS  DAT      3693   5-17-88   9:16p
    POTIONS  NGO      3558   5-17-88   9:43p
    REQUIRE  DAT      1794   5-17-88   8:02p
    REQUIRE  NGO      1491   5-17-88   8:07p
    RINGS    DAT      2098   5-17-88   9:32p
    RINGS    NGO      2286   5-17-88   9:44p
    SAMPLE   DAT      1747   5-17-88   8:05p
    SAMPLE   NGO      1351   5-17-88   8:07p
    SCROLLS  DAT      4240   5-17-88   9:08p
    SCROLLS  NGO      4134   5-17-88   9:43p
    SHOPS    DAT      3595   5-19-88   7:33p
    SHOPS    NGO      3597   5-19-88   7:34p
    STATUS   DAT      3874   5-17-88   9:43p
    STATUS   NGO      3936   5-17-88   9:44p
    USING    DAT      3632   5-19-88   7:23p
    USING    NGO      3609   5-19-88   7:31p
    WANDS    DAT      2440   5-17-88   9:21p
    WANDS    NGO      2528   5-17-88   9:44p
    WELCOME  DAT      1999   5-16-88   7:34p
    WELCOME  NGO      1954   5-16-88   7:34p
    HACKKEYS           243   8-21-88   6:55p
    HACKKEYS ASM     13028   7-16-88  11:15a
    HACKKEYS OBJ       617   7-16-88  11:15a
           72 file(s)     293964 bytes
                           27648 bytes free
