---
layout: page
title: "PC-SIG Diskette Library (Disk #3049)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3049/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3049"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library. It has over 3000 different, and complete applications
for your every need.  Every shareware program we have is on one disc;
over 700 megabytes (unzipped) of software you can have immediate access
to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

#             #             #
PC-SIG UPDATES PC-SIG LIBRARY ON CD-ROM

For Immediate Release


PC-SIG LIBRARY ON CD-ROM UPDATED TO INCLUDE A NEW USER INTERFACE AND MORE
THAN 800 MB OF PROGRAMS June 21, 1992, SUNNYVALE, CALIF. - PC-SIG, Inc.
today announced availability of The Eleventh Edition of the PC-SIG Library
on CD-ROM.  The PC-SIG Library on CD-ROM contains over 800 megabytes of
shareware and includes more than 300 new programs, 550 updated programs,
and the addition of 75 megabytes of Windows 3.x shareware.  The
user-interface has been completely re-engineered to take advantage of the
HyperWriter! hypermedia and multimedia authoring system from NTERGAID, Inc.

The implementation of HyperWriter! provides significant performance and
ease of use enhancements.  Programs can access and download much faster
than with previous editions.  Programs have been reorganized and indexed
for better referencing.  Users just c lick with a mouse, or point with the
cursor, on a program name to see a complete description of the program.
Downloading or copying a program is handled automatically by HyperWriter!
Addition of a preview option is especially important for anyone who uses
images, icons, or fonts.  "You can preview the whole library of images to
find the right one," according to Bruce Kent, product development manager.
"This CD finally makes it possi ble to conserve your disk space and paper,
yet still have all the information you need to make an informed decision,"
said Kent.

All new and updated programs have been reviewed and tested by PC-SIG. Every
program goes through extensive virus checking using the most recent version
of VIRUSCAN from McAfee Associates, and other anti-virus software.
According to Kent, "In the ten ye ars we've distributed shareware, we have
never had a confirmed report of a virus on any of our distributed programs
or CD-ROMs."

The PC-SIG Library on CD-ROM, Eleventh Edition has a list price of $179.

Upgrades from previous editions are available for $99.

Users of PC-SIG's Essential Home & Business Collection CD-ROM can upgrade
for $120.

PC-SIG CD-ROMs are distributed worldwide through a network of distributors
and resellers. Based in Sunnyvale, Calif., PC-SIG, Inc. markets and
supports one of the world's largest collections of shareware for IBM PCs
and compatible systems.  PC-SIG also publishes Shareware Magazine, which is
devoted solely to shareware.  The magazine is availa ble by subscription
and on newsstands nationwide.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 640K memory, DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions, and a hard drive. Microsoft compatible
mouse supported and VGA highly recommended.

To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## FILE3049.TXT

{% raw %}
```
Disk No: 3049                                                           
Disk Title: NNANSI.COM                                                  
PC-SIG Version: 1.0                                                     
                                                                        
Program Title: NNANSI.COM                                               
Author Version: 1/92                                                    
Author Registration: $10.00                                             
Special Requirements: EGA or VGA.                                       
                                                                        
NNANSI.COM is a new version of the well regarded upgrade to the DOS     
ANSI.SYS program, NANSI.SYS.  ANSI.SYS is used by DOS to control the    
appearance of characters on your screen. It lets you change the         
character that a key displays, assign a command to a key, and change    
text color or background color of your screen.  NNANSI does all these   
things faster and includes a number of additional features like         
intrinsic 43/50 line support, additional text mode escape sequences, and
the support of higher resolutions in both text and graphic modes.       
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## HOWTO.DOC

{% raw %}
```
		     How To Write to the Display


		       A quick NNANSI tutorial


The purpose of this tutorial is to illustrate the various ways
programs can write to the display. There are several parts to this
puzzle: 

	DISPLAY MEMORY -- memory mapped video, can be accessed
	directly by applications, but there are drawbacks.

	VIDEO BIOS -- "Low level" access to write characters,
	position the cursor, change display modes.

	DOS INT 21H SERVICES -- Access display in a device
	independent manner. The display (and keyboard) are device
	"CON". Devices can be accessed in "Cooked" mode, in which the
	keyboard is monitored for ^C and other control characters and
	certain character translations may occur, or in "Raw", or
	binary, mode, which does no translation and is potentially
	much faster. In Cooked mode when the output device is the
	display, single characters are written using calls to INT
	29H. In Raw mode, or for other devices, DOS calls the driver,
	which is a cumbersome process, but allows writing of multiple
	characters.

	INT 29H HANDLER -- writes a single character to the display.
	By default (no ANSI driver) it is a simple call to the video
	BIOS.

	CON DRIVER -- The console device. Called by DOS and in turn
	calls the video BIOS to write characters.

	ANSI DRIVER -- A replacement for the default CON driver which
	provides interpretation of ANSI control codes. 	Also
	overrides the "INT 29H" handler to interpret ANSI codes. The
	driver typically calls the VIDEO BIOS for all functions, but
	fast drivers like NNANSI do most of the low level operations
	internally.


NNANSI has additional features which will be discussed throughout
this tutorial.


*************Writing Direct to Display***********************

Most program originally used DOS calls to write to the display. But
poor performance of DOS and the ANSI.SYS driver led many programmers
to bypass the operating system and write directly to the display. The
standardization of displays hastened the change, and made
"PC-Compatible" the important issue rather than just "MS-DOS
operating system".

Programs that use this technique typically (but not always) use the
video BIOS for moving the cursor and clearing the display.

This is potentially the fastest technique, and is employed by high
level languages which provide a fast console output. There are
several problems with direct output, however.

The video BIOS maintains information about the display in low memory.
This information includes the number of rows and columns, as well as
the display memory start address. Many programs using direct display
writing ignore the row and column information. This typically means
only the top of the display is utilized (typically 43/50 line modes)
or the display is garbled (typically 132 column modes).

Most programs ignore the display start address. This can cause
problems in two ways. Some applications use "display pages". When
display pages are in use, the display memory gets divided into
several screens that can be switched back and forth by a single BIOS
command. Programs that ignore the start address always write to page
0, possibly clobering the display. 

NNANSI modifies the start address to implement FAST scrolling. It
attempts to accomodate direct to display programs by reseting the
offset when a program calls the BIOS to either clear the screen or
get the display mode. Programs that do neither of these, or write to
the display after the display has scrolled, will not work with NNANSI
in FAST mode.

There is another problem with writing the display directly -- you
cannot redirect output to a file, or more important, to a serial port
for remote operation. The program is locked into the display and is
not portable to other computers or even other PC operating systems.




************Using the Video BIOS*******************


Again, standardization of the video BIOS made it possible to write
programs using BIOS calls to write to the display. Because of the
cumbersome interface, few programs actually use BIOS calls to write
to the display. But in the absence of an ANSI driver, BIOS calls are
necessary to read or position the cursor or clear the display in
programs that otherwise use the DOS INT 21H interface.

The BIOS provides a "TTY Write" function which allows writing
character strings, but does not allow controling the color, and does
not expand tab characters. NNANSI has an option to do ANSI processing
of this BIOS call which will allow setting the color and expanding
tabs. To set the colors using BIOS calls is a messy process because
the only call that writes the character attribute information does
not advance the cursor!

One advantage of using the Video BIOS for writing is that the BIOS
always know how to handle the various display modes the video adapter
is capable of handling. It will always correctly write in 132 column
or 50 line modes, for example.




**********DOS INT 21H Services**********************


DOS provides numerious functions for accessing the display (and
keyboard) without much difference in functionality. Most of the
functions are for compatibility with the archaic CP/M operating
system. 

We will only consider the "handle" interface, which allows treating
the console (keyboard and display) as a file. You can open, read,
write, and close the console "file". All programs start execution
with three appropriate handles. Handle 0 (corresponding to the C
language stdin) and Handle 1 (corresponding to the C language stdout)
are the console unless redirected on the command line with the "<" or
">" operators. Handle 2 (corresponding to the C language stderr) is
always (well, almost always) the console. Unless redirection is in
effect, any of the three handles can be used interchangably.

Normally, the console device is in "cooked" mode. In cooked mode, tab
characters are expanded, and the keyboard is checked with each
character written for control-C, control-S, and control-P keystrokes.
On input, these keystrokes are not readable, nor is control-Z which
forces the end of file condition.

Programs using cooked mode DOS INT 21H services to write to the
display are very portable, but slow. In fact this is the slowest way
to write to the display. In addition, without an ANSI driver loaded,
there is no way to enquire or set the cursor position, change colors
or other display attributes, or clear the display.


*********ANSI Drivers********************************

To make using DOS INT 21H services more palatable, an ANSI driver can
be loaded. With an ANSI driver the program gains the following
abilities: 

1. Change display mode (some drivers allow extended modes)
2. Clear screen (some drivers allow line clearing, and
	inserting/deleting characters and lines)
3. Set cursor position
4. Get cursor position -- cumbersome to use, and not available with some
	drivers such as ANSI.COM and NNANSI as limited function TSR
5. Change character attributes


When an ANSI driver is used, the program is portable to any system
that supports ANSI display codes, including DEC VT-100 and later
terminals, and most programs can be run remotely out the COM port
using the CTTY command.


*********Using INT 29H*******************************

This interrupt will always write the character in register AL to the
display. The DOS INT 21H services use this interrupt to write
characters when the console is in Cooked mode. Since the keyboard
check is bypassed, INT 29H is a significantly faster way to write to
the display. When an ANSI driver is loaded, ANSI processing will
occur, but tabs will not be expanded unless NNANSI or some other
extended ANSI driver is used.


*********Using RAW Mode******************************


All the previous techniques only write a single character at a time.
A major speed advantage can be gained by using DOS INT21H services
with the console in Raw mode, and by buffering up the characters to
write. In this manner, the ANSI driver gets all the characters to
write at once and overhead is vastly reduced. The NANSI driver, and
its derivatives, such as NNANSI, are particularly enhanced this way,
and will often outperform high level language's "console" drivers.

Using raw mode will also prevent DOS from intercepting typed control
characters during printing, which is often an advantage. Note however
that tab expansion will not occur with standard ANSI drivers. The
application needs to expand tabs unless it can be assured the system
is using an enhanced ANSI driver, such as NNANSI.
```
{% endraw %}

## NNANSI.ASM

{% raw %}
```
%title	"NNANSI Terminal Driver Version 1/92"
%pagesize	60, 132
%noconds
JUMPS	; clarify branches -- TASM V2.0 recommended
;--- nnansi.asm ----------------------------------------------------------
; New, New ANSI terminal driver.
; Optimized for speed in the case of multi-character write requests.
; Original NANSI terminal driver (C) 1986 Daniel Kegel
; Modifications by Tom Almy without restrictions.

; May be distributed for educational and personal use only

; See file NNANSI.DOC for licensing information.

; Daniel Kegel, Bellevue, Washington & Pasadena, California
; Revision history:
; 5  july 85: brought up non-ANSI portion except forgot backspace
; 6  july 85: split off ANSI stuff into other files, added backspace
; 11 july 85: fixed horrible bug in getchar; changed dosfns to subroutines
; 12 july 85: fixed some scrolling bugs, began adding compaq flag
; 9  aug 85:  added cursor position reporting
; 10 aug 85:  added output character translation
; 11 aug 85:  added keyboard redefinition, some EGA 80x43 support
; 19 Aug 85:  Fixed horrible bug in insert/delete line.
; 26 Aug 85:  Fixed simple limit-to-one-too-few-lines bug in ins/del line;
;  anyway, it inserts 24 lines when on line 2 now.  Whether it's fixed...
; 4 Sept 85:  Fixed bug created on 26 Aug 85; when limiting ins/del line
;  count, we are clearing, not scrolling; fixed BIOS call to reflect this.
; 10 sept 85: Tandy 2000 support via compaq flag (finding refresh buffer)
; 30 Jan 86:  removed Tandy 2000 stuff, added graphics mode support
; 12 feb 86:  added int 29h handler, added PUSHA/POPA, added direct beep,
;	      direct cursor positioning, takeover of BIOS write_tty,
;	      noticed & squashed 2 related bugs in tab expansion
; 30 Jan 86:  Added EGA cursor patch
; 31 Jan 86:  Disabled insert/delete char in graphics modes
;	      Implemented keyboard redefinition reset
;  1 Feb 86:  added video_mode and max_x test after mode set
; 13 feb 86:  Squashed them again, harder
; 24 feb 86:  There is a bug in the timing code used by the BEEP routine.
;	      If the addition of the beep period to the
;	      BIOS low timer word results in an overflow, the beep will be
;	      supressed. Also made code compatible eith earlier versions
;	      of assembler.

; Tom Almy, Tualatin, Oregon (toma@sail.labs.tek.com) modified the NANSI 
;  version ; 2.2 code for use in EGA/VGA environments only:
; 8 Jan 89:   Additional compilation options
;             Scrolling via reprogramming display start (*MUCH* faster)
;	      INT29 updates display directly if not control character.
;	      Various cleanups
; Nov 89:     Some bug fixes, customization for various cards enhanced
;             display modes, better handling of graphic cursor, graphic
;             characters in 16 color modes are drawn by NNANSI rather
;             than BIOS (much faster).
; Sept 90:    Color backgrounds and XOR mode (as BLINK) in 16 color graphic
;	      modes. VGA has 43 or 50 line modes (instead of producing 50
;	      (when 43 selected). FAST mode can be toggled via escape 
;	      sequences. Lots of code clean up. Some old options incorporated
;	      (extra ANSI sequences) or deleted (output conversion).
;             The fast graphic draw routine has been speeded up, since it
;	      was slower than some BIOSes (!). The BIOS TTY call has been
;             redirected to the INT29 routine which has some efficiency
;	      speedups; this also saved code space.
; May 1991:   Restored CGA and MDA support. MDA is optional. Added 
;	      DOS 4.x compatibility. Added 40x43 and 40x50 text mode support.
;	      Added VESA support. Fixed bug allowing either = or ? or nothing
;	      in all set mode commands. Added enable/disable for bios 
;	      write_tty takeover. Added drivers for new cards and changed
;	      some defaults. Merged source code into one file.
; 	      Card id printout idea by Arend van den Brug.
; Sept 1991:  Now installable as TSR (which can be removed) or device driver
;	      with the same binary! Installation code now uses proper
;	      system calls to set interrupt vectors
;             Added Desqview compatability
;             Removed changing modes without clearing screen -- it seems
;	       to cause later crashing with some programs, particularly
;	       Zortech ZWB and Doorway.
;	****Credit and thanks to Ralf Brown and is interrupt list, without
;           which most of the recent changes would have been impossible****


page
TRUE	equ	1
FALSE	equ	0

	INCLUDE CONFIG.INC
page
; Option dependent definitions
if VGA
if EGA
card_id macro
	db	'Generic EGA/VGA'
endm
else
card_id macro
	db	'Generic VGA'
endm
endif
else
if EGA
card_id macro
	db	'Generic EGA'
endm
else
card_id macro
	db	'Generic NANSI Clone'
endm
endif
endif

IF key_redef
buf_size	equ	init_buf_size	; size of parameter/redef buffer
ELSE
buf_size	equ	20		; size of parameter/redef buffer 
ENDIF


IF	cheap_pc
	.8086
ELSE
	.286c
ENDIF

page
	INCLUDE DRIVERS.INC
page
; Some Useful Macros

IF	cheap_pc
push_all	macro
	push	ax
	push	bx
	push	cx
	push	dx
	push	bp
	push	si
	push	di
	endm
ELSE
push_all	macro
	pusha
	endm
ENDIF

IF	cheap_pc
pop_all macro
	pop	di
	pop	si
	pop	bp
	pop	dx
	pop	cx
	pop	bx
	pop	ax
	endm
ELSE
pop_all macro
	popa
	endm
ENDIF

call_video macro
			; call original video interrupt by
			; faking a SWI
	pushf		; push flags
	call	dword ptr old_vid_bios
endm

draw_gcursor macro		; draw graphic cursor
if quick_char
	mov	ax, 8f16h
	call	quick_graph
else
	mov	ax, 0916h		; draw cursor at location
	mov	bx, 8fh
	mov	cx, 1
	call_video
endif
endm
	page

keybuf	struc				; Used in getchar
len	dw	?
adr	dw	?
keybuf	ends


ABS40	segment at 40h
	org	1ah
buffer_head	dw	?	; Used in 'flush input buffer' dos call.
buffer_tail	dw	?

	org	49h
crt_mode	db	?
crt_cols	dw	?
crt_len		dw	?
crt_start	dw	?
cursor_posn	dw	8 dup (?)
cursor_mode	dw	?
active_page	db	?
addr_6845	dw	?
crt_mode_set	db	?	; = 7 only if monochrome display adaptor
crt_palette	db	?
	org	6ch
timer_low	dw	?	; low word of time-of-day counter (18.2 hz)
	org	84h
ega_rows	db	?	; #rows-1 on display
ega_points	dw	?	; bytes per character

ABS40	ends

	page

CODE	segment word public 'CODE'
assume	cs:CODE, ds:CODE

	; Device Driver Header

	org	0
start:
if TSR
nextdev	label	dword
	jmp	realstart
	db	0
else
nextdev dd	-1			; next device
endif
if dos4
	dw	08053h			; attributes
else
	dw	8013h			; attributes
endif
	dw	strategy		; request header pointer entry
	dw	interrupt		; request entry point
	db	'CON'			; device name (8 char)
	db	5 dup (20h)		;  ... and 5 blanks)

	; Identification- in case somebody TYPEs the assembled driver
	db	27,'[2J'
IDLOC:	db	"NNANSI.SYS 1/92 for "
	card_id
	ife	cheap_pc
	db	"(80286)"
	else
	db	"(80x86)"
	endif
	db	13, 10
	db	'by Tom Almy based on code (C) 1986 Daniel Kegel.'
	db	13, 10, 26

	even
;----- variable area --------------------
	org	$-34		; overlay id string with uninitialized data
if key_redef
	org	$-2
endif
if MONO
	org	$-2
endif
if TSR
	org	$-14
endif
req_ptr label	dword
req_off dw	?
req_seg dw	?
f_cptr_seg	dw	?	; part of fastout write buffer pointer
cur_parm_ptr	dw	?	; last byte of parm area now used
saved_coords	dw	?	; holds XY after a SCP escape sequence
temp_val	dw	?	; just a temporary
param_buffer	dw	?	; address of first byte free for new params
param_end	dw	?	; address of end of free area
if key_redef
redef_end	dw	?	; address of end of redefinition area
endif
if TSR
old_brk		dd	?	; original break handler
old_int29	dd	?	; original int29 handler
savecon		dd	?	; original console driver
parsize		dw	?	; size of TSR in segments
endif
if MONO
our_6845	dw	?
endif
no_c_flag	db	?	; there is no graphic cursor on the screen.
max_y		db	?	; lines-1
max_cur_x	label	word	; used to get both max & cur at once
max_x		db	?	; line width (79 for 80x25 modes)
cur_coords	label	word
cur_x		db	?	; cursor position (0 = left edge)
cur_y		db	?	;		  (0 = top edge)
video_mode	db	?	; ROM BIOS video mode (2=BW, 3=color, etc)
string_term	db	?	; either escape or double quote
int_29_buf	db	?	; character buffer for int 29 calls
fnkeybuf	db	?	; holds second byte of fn key codes
eat_key		db	?	; Eaten key (bug fix)
cpr_buf		db	8 dup (?), '['
cpr_esc		db	1bh	; descending buffer for cpr function

	even	; this should be redundant, if I did it right

; following four keybufs hold information about input
; Storage order determines priority- since the characters making up a function
; key code must never be separated (say, by a Control-Break), they have the
; highest priority, and so on.	Keyboard keys (except ctrl-break) have the
; lowest priority.

fnkey	keybuf	<0, fnkeybuf>	; fn key string (0 followed by scan code)
cprseq	keybuf	<0>		; CPR string (ESC [ y;x R)
brkkey	keybuf	<0, brkkeybuf>	; ^C
if key_redef
xlatseq keybuf	<0>		; keyboard reassignment string
endif

escvector	dw	0	; state vector of ESCape sequencor
if DESQVIEW
disppage	dw	0b800h	; address of display page
dvactive	db	0	; is desqview active?
endif
brkkeybuf	db	3	; control C
wrap_flag	db	1	; 0 = no wrap past line end
cur_attrib	db	7	; current char attributes
gmode_flag	db	0	; true if in graphics mode
				; <0 for mono card
gcursor		db	initgc	; true if graphic cursor enabled
fmode		db	initfast	; in fast mode?
bmode		db	initbiosw	; ANSI write_tty BIOS command?
atr_flag	db	0	; 80h - blink, 8 - bright
				; 4 - invisible 2 - reverse 1 underline
color_flag	db	7h	; fg and bg colors

if TSR
fulldvr		db	1	; Full driver installation
endif
port_6845	equ	3d4h
page
;------ xy_to_regs --------------------------------------------
; on entry: x in cur_x, y in cur_y
; on exit:  dx = chars left on line, di = address
; Alters ax, bx.
xy_to_regs	proc	near
	; Find number of chars 'till end of line, keep in DX
	mov	ax, max_cur_x
	mov	bx, ax			; save max_x & cur_x for next block
	xor	ah, ah			; ax = max_x
	xchg	dx, ax
	mov	al, bh
	xor	ah, ah			; ax = cur_x
	sub	dx, ax
	inc	dx			; dx is # of chars till EOL
	; Calculate DI = current address in text buffer
	mov	al, bl			; al = max_x
	inc	al
	mul	cur_y
	add	al, bh			; al += cur_x
	adc	ah, 0			; AX is # of chars into buffer
	add	ax, ax
	xchg	di, ax			; DI is now offset of cursor.

	push	ds
	mov	ax, ABS40
	mov	ds, ax
	assume	ds:ABS40
	add	di, crt_start		; crt offset
					; the offset could be non-zero because
					; of video pages or fast scrolling.
	pop	ds
	assume	ds:nothing
	ret
xy_to_regs	endp

page
;------- dos_fn_tab -------------
; This table is used in "interrupt" to call the routine that handles
; the requested function.

if dos4
max_cmd equ	24
dos_fn_tab:
	dw	dosfn0, nopcmd, nopcmd, badcmd, dosfn4, dosfn5, dosfn6
	dw	dosfn7, dosfn8, dosfn8, nopcmd, nopcmd
	dw	badcmd, badcmd, badcmd, nopcmd, badcmd ; 12-16 
	dw	badcmd, badcmd	; 17-18 unassigned
	dw	dosfn19
	dw	badcmd, badcmd, badcmd	; 20-22 unassigned
	dw	nopcmd, nopcmd
else
max_cmd equ	12
dos_fn_tab:
	dw	dosfn0, nopcmd, nopcmd, badcmd, dosfn4, dosfn5, dosfn6
	dw	dosfn7, dosfn8, dosfn8, nopcmd, nopcmd
endif
;------- strategy ----------------------------------------------------
; DOS calls strategy with a request which is to be executed later.
; Strategy just saves the request.

strategy	proc	far
	mov	cs:req_off,BX
	mov	cs:req_seg,ES
	ret
strategy	endp

;------ interrupt -----------------------------------------------------
; This is where the request handed us during "strategy" is
; actually carried out.
; Calls one of 12 subroutines depending on the function requested.
; Each subroutine returns with exit status in AX.

interrupt	proc	far

	sti
	push_all			; preserve caller's registers
	push	ds
	push	es
	

	; Read requested function information into registers
	lds	bx,cs:req_ptr
	xor	ah,ah			; clear upper part of ax
	mov	al,ds:[BX+02h]		; al = function code
;
; The next instruction blows up MASM 1.0 but who cares!!
;
	les	si,[BX+0Eh]		; ES:SI = input/output buffer addr
	mov	cx,[BX+12h]		; cx = input/output byte count

	cmp	al, max_cmd
	ja	unk_command		; too big, exit with error code

	xchg	bx, ax
	shl	bx, 1			; form index to table of words
	mov	ax, cs
	mov	ds, ax
	call	word ptr dos_fn_tab[bx]
int_done:
	lds	bx,cs:req_ptr		; report status
	or	ax, 100h		; (always set done bit upon exit)
	mov	[bx+03],ax

	pop	ES			; restore caller's registers
	pop	DS
	pop_all
	ret				; return to DOS.

unk_command:
	call	badcmd
	jmp	int_done

interrupt	endp
	page
;----- BIOS break handler -----------------------------------------
; Called by BIOS when Control-Break is hit (vector was set up in Init).
; Simply notes that a break was hit.  Flag is checked during input calls.

break_handler	proc
	mov	cs:brkkey.len, 1
	iret
break_handler	endp

	page

;------ badcmd -------------------------------------------------------
; Invalid function request by DOS.
badcmd	proc	near
	mov	ax, 813h		; return "Error: invalid cmd"
	ret
badcmd	endp


;------ nopcmd -------------------------------------------------------
; Unimplemented or dummy function request by DOS.
nopcmd	proc	near
	xor	ax, ax			; No error, not busy.
	ret
nopcmd	endp
	page
;------- dos function #4 ----------------------------------------
; Reads CX characters from the keyboard, places them in buffer at
; ES:SI.
dosfn4	proc	near
	jcxz	dos4done
	mov	di, si
dos4lp: push	cx
	call	getchar
	pop	cx
	stosb
	loop	dos4lp
dos4done:
	xor	ax, ax			; No error, not busy.
	ret
dosfn4	endp
	page
;-------- dos function #5: non-destructive input, no wait ------
; One-character lookahead into the keyboard buffer.
; If no characters in buffer, return BUSY; otherwise, get value of first
; character of buffer, stuff into request header, return DONE.
dosfn5	proc	near
	call	peekchar
	jz	dos5_busy

	lds	bx,req_ptr
	mov	[bx+0Dh], al
	xor	ax, ax			; No error, not busy.
	jmp	short dos5_exit
dos5_busy:
	MOV	ax, 200h		; No error, busy.
dos5_exit:
	ret

dosfn5	endp
	page
;-------- dos function #6: input status --------------------------
; Returns "busy" if no characters waiting to be read.
dosfn6	proc	near
	call	peekchar
	mov	ax, 200h		; No error, busy.
	jz	dos6_exit
	xor	ax, ax			; No error, not busy.
dos6_exit:
	ret
dosfn6	endp
	page
;-------- dos function #7: flush input buffer --------------------
; Clears the IBM keyboard input buffer.	 Since it is a circular
; queue, we can do this without knowing the beginning and end
; of the buffer; all we need to do is set the tail of the queue
; equal to the head (as if we had read the entire queue contents).
; Also resets all the device driver's stuffahead buffers.
dosfn7	proc	near
	xor	ax, ax
	mov	fnkey.len, ax		; Reset the stuffahead buffers.
	mov	cprseq.len, ax
	mov	brkkey.len, ax
if key_redef
	mov	xlatseq.len, ax
endif

	mov	ax, ABS40
	mov	es, ax
	mov	ax, es:buffer_head	; clear queue by making the tail
	mov	es:buffer_tail, ax	; equal to the head

	xor	ax, ax			; no error, not busy.
	ret
dosfn7	endp
	page
IF dos4
;------- dos function #19: Generic IOCTL
; DOS4 way of setting display size using MODE command.
; We will do more than necessary.
;
dosfn19	proc	near
	les	bx, req_ptr	; get request block
	mov	ax, es:[BX+13]	; get function code
	cmp	ax, 5f03h	; is it set information?
	jz	setinfo
	cmp	ax, 7f03h	; is it get information?
	jz	getinfo
	mov	ax, 8003h	; return bad command
	ret
getinfo: 
	les	bx, es:[bx+19]	; data packet to set
	push	ds
	mov	ax, ABS40	; address ABS40 area
	mov	ds, ax
	assume ds:ABS40
	mov	word ptr es:[bx+0], 0	; level and reserved fields
	mov	word ptr es:[bx+2], 14	; length field
	mov	word ptr es:[bx+4], 0	; flags
	mov	al, crt_mode
	call	set_gmode
	mov	ax, 1
	cmp	cs:gmode_flag, 0	; see if graphics mode
	jz	fn19txt
	inc	ax
if MONO
	cmp	cs:gmode_flag, -7	; check for mono mode
	jne	fn19txt
	dec	ax
	mov	word ptr es:[bx+8], 0	; monochrome
	jmp	short fn19mono
endif
fn19txt:
	mov	word ptr es:[bx+8], 4	; say 16 colors
fn19mono:
	mov	word ptr es:[bx+6], ax	; store mode
	mov	ax, crt_cols
	mov	word ptr es:[bx+0eh], ax	; character columns
	mov	dx, 8			; all characters are 8 pixels wide
	mul	dx
	mov	word ptr es:[bx+0ah], ax	; pixel columns
	xor	ax, ax
	mov	al, ega_rows
	inc	ax
	mov	word ptr es:[bx+10h], ax	; character rows
	mov	dx, ega_points
	mul	dx
	mov	word ptr es:[bx+0ch], ax	; pixel rows
	pop	ds
	assume ds:CODE
	xor	ax, ax
	ret
fn19fail:
	mov	ax, 8003h	; unknown mode, failure
	ret
setinfo: 
	les	bx, es:[bx+19]	; data packet to read
;	mov	dx, 80h		; monochrome, don't clear screen
	xor	dx, dx		; monochrome
	cmp	word ptr es:[bx+8], 0	; set to monochrome?
	je	setismono
	inc	dx
setismono:
	mov	ax, es:[bx+0eh]	; character columns
	cmp	ax, 40		; 40 columns?
	je	fn1940col
	cmp	ax, 80
	jne	fn19fail
	add	dx, 2		; mode 2 or 3
fn1940col:
	mov	ax, es:[bx+10h]	; character rows
	cmp	ax, 25
	je	fn1925lin
IF VGA
	cmp	ax, 50
	je	fn1950lin
ENDIF
	cmp	ax, 43
	jne	fn19fail

IF VGA
	mov	ax, 1201h	; 350 lines
	jmp	short ln50join
fn1950lin:
	mov	ax, 1202h	; 400 lines
ln50join:
	push	dx
	mov	bl, 30h		; set scan lines
	int 	10h
	pop	ax		; the mode
ELSE
	mov	ax, dx
ENDIF
	int	10h		; set video mode

	mov	ax, 1112h	; set 8x8 font
	mov	bl, 0
	int 	10h

	mov	ax, 1200h	; load new printscreen
	mov	bl, 20h
	int 	10h
IF EGA	; set the EGA cursor
	mov	dx, port_6845	; '6845' command reg
	mov	ax, 070ah	; start on line 7
	out	dx, ax
	mov	al, 0bh		; end on line 7
	out	dx, ax
ENDIF
	jmp     short clrs

fn1925lin:
IF VGA
	push	dx
	mov	ax, 1202h	; select 400 scan lines
	mov	bl,30h		; this call ignored on EGA
	int	10h
	pop	ax
ELSE
	mov	ax, dx
ENDIF
	int	10h		; set video mode

clrs:	push	ds		; address abs40 area
	mov	ax, ABS40
	mov	ds, ax
	ASSUME	ds:ABS40
	mov	ax, 600h		; clear display area
	xor	cx, cx			; upper left corner
	mov	dx, crt_cols
	dec	dl			; right column
	mov	dh, ega_rows		; lower row
	mov	bh, cs:cur_attrib	; character attribute
	int	10h
	pop	ds
	ASSUME	ds:CODE
	xor	ax, ax			; return success
	ret

dosfn19	endp
ENDIF
	page
if dos4
;--- new_mpx ------------------------------------------------
; This routine acknoledges that an ansi driver is installed.
;

new_mpx	proc
	cmp	ax, 1a00h	; is this for us?
	jz	ackansi		;  
	db	0eah		; if not, jump (far) to old_mpx
old_mpx dd	0	
ackansi:
	mov	al, 0ffh	; say we are installed
	iret
new_mpx endp
endif
	page
;--- new_vid_bios -------------------------------------------
; new_vid_bios takes the set cursor, get display mode, change mode, and
; get mode calls.

; If bios_write_tty defined, new_vid_bios replaces the write_tty call.
; This gives BIOS ANSI capability.
; However, it takes away the escape character.
; If this is not desired, just tell init to not take over the vector.
; 
; All other calls get sent to the old video bios.

new_vid_bios	proc
	STI
IF bios_write_tty
	cmp	ah, 0Eh
	je	nvb_write_tty
ENDIF
	cmp	Ah, 02h 	; set cursor position command?
	je	nvb_setcursor
	cmp	Ah,0		; change mode command?
	je	nvb_smode
	cmp	cs:fmode,0	; slow mode?
	je	new_vid_pass	; then pass it on
	cmp	Ah, 0Fh 	; get display mode command?
	je	nvb_display
	cmp	Ah, 06h		; clear screen command?
	je	nvb_scroll
	cmp	Ah, 07h		; alternative cls command?
	je	nvb_scroll
IF VESA	
	cmp	AX, 4f02h	; set extended display mode?
	je	nvb_smode
	cmp	AX, 4f03h	; get extended display mode?
	je	nvb_display
ENDIF
	jmp	new_vid_pass	; everything else

IF bios_write_tty
; WRITE TTY SUBCOMMAND
nvb_write_tty:
	cmp	cs:bmode, 0	; don't write with our driver?
	jz	new_vid_pass
	push	cx		; save register
	mov	cl, cs:cur_attrib
	; If in graphics mode, BL is new color
	cmp	cs:gmode_flag, 0
	jle	nvb_wt_text
	mov	cs:cur_attrib, bl	; ja?
nvb_wt_text:
	int	29h
	mov	cs:cur_attrib, cl
	pop	cx
	iret
ENDIF

; GET DISPLAY MODE SUBCOMMAND
nvb_display:
	cmp	cs:gmode_flag,0	; Graphic mode? Mono?
	jnz	new_vid_pass
	push	ds
	push	ax
	mov	ax, ABS40
	mov	ds, ax
	assume	ds:ABS40
	cmp	crt_start,0	; At start of mem?
	jz	nvb_pass
if BAD_ERASE
nvb_clean:
	call	move_back
else
	call	move_back
nvb_clean:
endif
nvb_pass:
	pop	ax		; restore registers
	pop	ds
	assume	ds:nothing
new_vid_pass:
	db	0eah		; jump (far) to old video bios routine
old_vid_bios	dd	?	; pointer to old video bios routine

; SCROLL DISPLAY SUBCOMMAND
nvb_scroll:
	push	ds
	push	ax
	mov	ax, ABS40
	mov	ds, ax
	assume	ds:ABS40
	mov	cs:no_c_flag, 1	; if graphic, don't draw cursor afterwards
	cmp	cs:gmode_flag,0	; graphic mode?
	jnz	nvb_pass
	cmp	crt_start,0	; not at start of mem
	jz	nvb_pass
	pop	ax		; restore ax
	push	ax
	cmp	al, 0		; scroll, not erase
	jnz	nvb_clean
	or	cx, cx		; not entire screen?
	jnz	nvb_clean
	cmp	dl, byte ptr crt_cols	; same question, max columns
	jb	nvb_clean		; >size is full screen, though
	cmp	dh, ega_rows		; same question, max rows
	jbe	nvb_clean		; >size is full screen, though
	xor	ax,ax		; erase is easier since we don't move screen
	mov	crt_start,0	; reset offsets
	push	dx
	mov	dx,port_6845
	mov	al,0ch
	out	dx,ax
	inc	al
	out	dx,ax
	pop	dx
	jmp	nvb_pass

; SET CURSOR SUBCOMMAND
nvb_setcursor:
	cmp	cs:gmode_flag,0	; Alpha mode?, Mono mode?
	jle	new_vid_pass
	cmp	cs:no_c_flag, 0	; inhibited cursor?
	jnz	new_vid_pass	; then keep inhibited
	cmp	cs:gcursor, 0	; no cursor?
	jz	new_vid_pass	; then don't want one now!
	push_all
	draw_gcursor
	pop_all
	call_video			; original int 10h
	push_all
	draw_gcursor			; redraw the cursor
	pop_all
	iret				; return from interrupt

; SET DISPLAY MODE SUBCOMMAND
nvb_smode:
	call_video
	push	ds
	push	ax
	mov	ax, ABS40
	mov	ds, ax
	assume	ds:ABS40
	mov	al, crt_mode	; get mode and check for being graphic
	call	set_gmode
	mov	cs:no_c_flag, al ; if graphic, then no cursor is on screen.
	pop	ax
	pop	ds
	assume	ds:nothing
	iret
new_vid_bios	endp

	page
;------ int_29 ----------------------------------------------
; Int 29 handles DOS quick-access putchar.
; Last device loaded with attribute bit 4 set gets accessed for
; single-character writes via int 29h instead of via interrupt.
; Must preserve all registers.
; Installed as int 29h by dosfn0 (init).

int_29	proc	near
	sti
	push	ds
	push	es
	push_all
if fast29
	cmp	al, 20h			; control char?
	jb	slow_way
	cmp	cs:escvector, 0		; middle of an escape sequence?
	jnz	slow_way
	mov	dx, ABS40
	mov	ds, dx			; set addressability
	assume	ds:ABS40
	mov	cx, word ptr crt_mode	; mode in cl, columns in ch
	push	ax
	mov	al, cl
	call	set_gmode		; check for graphics mode
	pop	ax
	cmp	cs:gmode_flag, 0	; slow if graphics
	jg	slow_way
;	cmp	cl, 3			; graphics mode?
;	ja	slow_way
	xor	bx, bx			; get cursor position
	mov	bl, active_page
	add	bx, bx
	mov	dx, cursor_posn[bx]		; dh has y, dl has x
	inc	dl			; point to next location
	cmp	dl, ch			; at edge?
	jnb	slow_way
					; we can go with it!
	mov	cursor_posn[bx], dx	; update pointer
	xchg	ax, bx
	mov	al, dh
	mul	ch			; ax has line offset
	add	al, dl
	adc	ah, 0			; total offset
	mov	cx, bx
	mov	bx, ax			; cl has character, bx offset

if DESQVIEW
	cmp	dvactive, 0		; Desqview running?
	jz	dv_not_on			; if not, update cursor directly
	push	bx			; if  so, update via BIOS call
	xor	bx, bx
	mov	ah, 2
	call_video
	pop	bx
	jmp	dv_was_on
dv_not_on:
endif

	mov	ax, crt_start
	shr	ax, 1
	add	bx, ax			; corrected cursor offset, either
					; because of fast scroll or
					; page<>0

if MONO
	mov	dx, addr_6845		; update cursor location
else
	mov	dx, port_6845		; update cursor location
endif
	mov	al,0eh		; more effective to write two bytes at a time
	mov	ah,bh
	out	dx,ax
	inc	al
	mov	ah,bl
	out	dx,ax

dv_was_on:
	mov	al, cl			; get back character

	dec	bx
	add	bx, bx			; byte offset
if DESQVIEW
	mov	dx, disppage
else
	mov	dx, 0b800h		; address screen
endif
if MONO
	cmp	crt_mode, 7
	jne	int29_not_mono
	mov	dh, 0b0h
int29_not_mono:
endif
	mov	ds, dx
	assume	ds:nothing
	mov	ah, cs:cur_attrib
	mov	ds:[bx], ax		; write character
	jmp	short int_fin
endif
slow_way:
	mov	cx, 1
	mov	bx, cs
	mov	es, bx
	mov	si, offset int_29_buf
	mov	byte ptr es:[si], al
	call	dosfn8
int_fin:
	pop_all
	pop	es
	pop	ds
	iret
int_29	endp

	page
;------ dosfn8 -------------------------------------------------------
; Handles writes to the device (with or without verify).
; Called with
;  CX	 = number of bytes to write
;  ES:SI = transfer buffer
;  DS	 = CS, so we can access local variables.  NOT ANY MORE

dosfn8	proc	near

	mov	cs:f_cptr_seg, es	; save segment of char ptr

	; Read the BIOS buffer address/cursor position variables.
	mov	ax, ABS40
	mov	ds, ax
	assume	ds:ABS40

	; Find current video mode and screen size.
	mov	ax,word ptr crt_mode	; al = crt mode; ah = # of columns
	mov	cs:video_mode, al
	dec	ah			; ah = max column
	mov	cs:max_x, ah

	; Save graphics mode flag
	call	set_gmode

	mov	al, ega_rows		; number of display rows
	mov	cs:max_y, al		; set maxy value

	; Find current cursor coordinates.

	mov	al, active_page
	cbw
	add	ax, ax
	xchg	bx, ax
	mov	ax, cursor_posn[bx]
	mov	cs:cur_coords, ax

if MONO
	mov	ax, addr_6845		; get the right 6845
	mov	cs:our_6845, ax
endif

	; Find video buffer segment address; adjust it
	; so the offset is zero; return in AX.

if DESQVIEW
	mov	ax, cs:disppage
else
	mov	ax, 0B800H		; this gets corrected in xy_to_regs
					; if we are not screen 0
endif
if MONO
	cmp	crt_mode, 7
	jne	not_mono_mode
	mov	ah, 0b0h
not_mono_mode:
endif
	push	cs
	pop	ds
	assume	ds:CODE
	mov	es, ax
	call	xy_to_regs		; Set DX, DI according to cur_coords.

	; | If in graphics mode, clear old pseudocursor

	cmp	gmode_flag, 0
	jle	d8_no_cp
	cmp	no_c_flag, 0	; cursor not previously drawn?
	mov	no_c_flag, 0	; (reset flag, will be drawn from now on)
	jnz	d8_no_cp	; not drawn -- don't clear
	cmp	gcursor, 0	; don't clear if cursor is off, either
	jz	d8_no_cp
	push	cx
	push	dx
	push	di
	draw_gcursor
	pop	di
	pop	dx
	pop	cx

d8_no_cp:

	mov	ah, cur_attrib
	mov	ds, f_cptr_seg		; get segment of char ptr
	assume	ds:nothing
	cld				; make sure we'll increment

	; The Inner Loop: 12+4+4+11+14+2+19= 66 cycles/loop
	; on 8088; at 4.77 MHz, that gives 16.1 microseconds/loop.
	; At that speed, it takes 32 milliseconds to fill a screen.

	; Get a character, put it on the screen, repeat 'til end of line
	; or no more characters.
	jcxz	f_loopdone		; if count = 0, we're already done.
	cmp	cs:escvector, 0		; If in middle of an escape sequence,
	jz	f_tloop
	jmp	f_in_escape		; jump to escape sequence handler.

f_tloop:; | If in graphics mode, jump to alternate loop
	; | What a massive kludge!  A better approach would have been
	; | to collect characters for a "write n chars" routine
	; | which would handle both text and graphics modes.
	cmp	cs:gmode_flag,0
	jle	f_t_cloop
	jmp	f_g_cloop

	even				; tiny performance boost
f_t_cloop:
	LODSB				; get char! (al = ds:[si++])
	cmp	al, 28			; is it a control char?
	jb	f_control		;  maybe...
f_t_nctl:
	STOSW				; Put Char! (es:[di++] = ax)
	dec	dx			; count down to end of line
	loopnz	f_t_cloop		; and go back for more.
	jnz	f_loopdone		; finished execution
f_t_at_eol:
	jmp	f_at_eol		; at end of line, maybe do a crlf.


f_looploop:
f_ansi_exit:				; in case we switched into
	loopnz	f_tloop			; a graphics mode
	jz	f_t_at_eol
;	jmp	f_loopdone

f_loopdone:

	;--------- All done with write request -----------
	; DI is cursor address, cursor position in cur_y, dl

	assume	ds:ABS40
	mov	ax, ABS40
	mov	ds, ax

	; Set cursor position in low memory.

	mov	al, active_page
	cbw
	add	ax, ax
	xchg	bx, ax
	mov	al, max_x
	inc	al
	sub	al, dl
	mov	ah, cur_y
	mov	cursor_posn[bx],ax

	cmp	gmode_flag,0
	jg	pseudocursor		; In graphics mode, there is
					; a pseudo cursor to draw.

if DESQVIEW
	cmp	dvactive,0		; Desqview running?
	jz	dv_off
	mov	dx, ax			; call bios to set position
	xor	bx, bx
	mov	ah, 2
	call_video
	xor	ax, ax			; finished
	ret
dv_off:
endif
	; Write directly to 6845 cursor address register.
	mov	bx, di
	shr	bx, 1			; convert word index to byte index

if MONO
	mov	dx, our_6845	; either mono or color card
else
	mov	dx, port_6845	; color card
endif
	mov	al,0eh		; more effective to write two bytes at a time
	mov	ah,bh
	out	dx,ax
	inc	al
	mov	ah,bl
	out	dx,ax


	; Return to DOS.
	xor	ax, ax			; No error, not busy.
	ret

pseudocursor:
	cmp	gcursor, 0	; graphics cursor off?
	jz	nopseudo
	mov	no_c_flag,0	; there is a cursor now!
	draw_gcursor
nopseudo:
	xor	ax, ax
	ret

	;---- handle control characters ----
	; Note: cur_x is not kept updated in memory, but can be
	; computed from max_x and dx.
	; Cur_y is kept updated in memory.
f_escapex:				; far jump
	jmp	f_escape

f_control:
	cmp	al, 27			; Is it an escape?
	jz	f_escapex
	cmp	al, 13			; carriage return?
	jz	f_cr
	cmp	al, 10			; line feed?
	jz	f_lf
	cmp	al, 8			; backspace?
	jz	f_bs
	cmp	al, 9			; tab?
	jz	f_tab
	cmp	al, 7			; bell
	jz	f_bell
	jmp	f_nctl			; then it is not a control char.

f_bell: ;----- Handle bell ----------------------
	; Use BIOS to do the beep.  DX is not changed, as bell is nonprinting.
	call	beep
	or	al, al			; clear z
	jmp	f_looploop		; Let main loop decrement cx.

f_bs:	;----- Handle backspace -----------------
	; Moves cursor back one space without erasing.	No wraparound.
	cmp	dl, cs:max_x		; wrap around to previous line?
	ja	fbs_wrap		; yep; disallow it.
	dec	di			; back up one char & attrib,
	dec	di
	inc	dx			; and note one more char left on line.
fbs_wrap:
	jmp	f_looploop

f_cr:	;----- Handle carriage return -----------
	; di -= cur_x<<1;		set di= address of start of line
	; dx=max_x+1;			set bx= chars left in line
	mov	al, cs:max_x
	inc	al
	sub	al, dl			; Get cur_x into ax.
	mov	ah, 0
	sub	di, ax
	sub	di, ax
	mov	dl, cs:max_x		; Full line ahead of us.
	inc	dx
	mov	ah, cs:cur_attrib	; restore current attribute
	or	al, 1			; clear z
	jmp	f_looploop		; and let main loop decrement cx

f_at_eol:
	;----- Handle overrunning right end of screen -------
	; cx++;				compensate for double loop
	; if (!wrap_flag) { dx++; di-=2; }
	; else do_crlf;
	inc	cx
	test	cs:wrap_flag, 1
	jnz	feol_wrap
		dec	di
		dec	di
		inc	dx
		jmp	f_looploop
feol_wrap:
	; dx=max_x+1;			set bx= chars left in line
	; di -= 2*(max_x+1);
	; do_lf
	mov	dl, cs:max_x
	inc	dx
	sub	di, dx
	sub	di, dx
	; fall thru to line feed routine

f_lf:	;----- Handle line feed -----------------
	; if (cur_y >= max_y) scroll;		scroll screen up if needed
	; else { cur_y++; di += max_x<<1;	else increment Y

	mov	al, cs:max_y
	cmp	cs:cur_y, al
	jb	flf_noscroll
		call	scroll_up		; preserves bx,cx,dx,si,di
		jmp	short flf_done
flf_noscroll:
	inc	cs:cur_y
	mov	al, cs:max_x
	mov	ah, 0
	inc	ax
	add	ax, ax
	add	di, ax
flf_done:
	mov	ah, cs:cur_attrib		; restore current attribute
	or	al, 1			; clear z
	jmp	f_looploop		; and let main loop decrement cx

f_tab:	;----- Handle tab expansion -------------
	; Get cur_x into al.
	mov	al, cs:max_x
	inc	al
	sub	al, dl
	; Calculate number of spaces to output.
	push	cx			; save cx
	mov	ch, 0
	mov	cl, al			; get zero based x coordinate
	and	cl, 7
	neg	cl
	add	cl, 8			; 0 -> 8, 1 -> 8, ... 7 -> 1
	sub	dx, cx			; update chars-to-eol, maybe set z
	pushf				; || save Z for main loop
	; ah is still current attribute.  Move CX spaces to the screen.
	mov	al, ' '
	cmp	cs:gmode_flag,0
	jg	f_tab_putc

	REP	STOSW
	popf				; || restore Z flag for main loop test
	pop	cx			; restore cx
	jmp	f_looploop		; Let main loop decrement cx.

;--------------- graphics mode support -----------------------

;---- Alternate main loop for graphics mode ----
f_g_cloop:
	LODSB				; get char! (al = ds:[si++])
	cmp	al, 28			; is it a control char?
	jb	f_g_control		;  maybe...
f_g_nctl:
	call	putchar
	dec	dx			; count down to end of line
	loopnz	f_g_cloop		; and go back for more.
	jz	f_at_eol		; at end of line; maybe do a crlf.
	jmp	f_loopdone

f_g_control:	jmp	f_control

; Tabs in graphic mode
f_tab_putc:	; graphics mode- call putc to put the char
	add	dx, cx			; move back to start of tab
f_tp_lp:
	call	putchar
	dec	dx			; go to next cursor position
	loop	f_tp_lp
	popf				; Z set if wrapped around EOL
	pop	cx
	jmp	f_looploop

;---- Where to go when a character turns out not to be special
f_nctl:
f_not_ansi:
	cmp	cs:gmode_flag,0
	jg	f_g_nctl
	jmp	f_t_nctl		; text mode

page
;---- putchar ------------------------------------------------
; Writes char AL, attribute AH to screen at (max_x+1-dl), cur_y.
; On entry, registers set up as per xy_to_regs.
; Preserves all registers.
putchar proc	near
	push	dx
	push	cx
	push	bx
	push	ax
	; 1. Set cursor position.
	mov	al, cs:max_x
	inc	al
	sub	al, dl
	mov	cs:cur_x, al
	mov	dx, cs:cur_coords	; get X & Y into DX
	push	ds
	mov	ax, 40h
	mov	ds, ax
	assume	ds:ABS40
	mov	cursor_posn,dx
	pop	ds
	assume	ds:nothing
	xor	bx, bx			; choose dpy page 0
	mov	ah, 2			; chose "Set Cursor Position"
	call_video
	; 2. Write char & attribute.
IF quick_char
	pop	ax
	push	ax			; character and attribute
	call	quick_graph
ELSE
	mov	cx, 1
	pop	ax			; get char in AL
	push	ax
	mov	bl, ah			; attribute in BL
	mov	bh, 0
	mov	ah, 9
	call_video
ENDIF
	pop	ax
	pop	bx
	pop	cx
	pop	dx
	ret
putchar endp
page
IF quick_char
quick_graph	proc	near
; this code has been reworked for much greater speed.

; ah= mode, al= char, ax,bx,cx,dx destroyed
	gmode_test yesQuick

	mov	bl,ah
	xor	bh,bh
	mov	cx, 1
	mov	ah, 9
	call_video		; do it the old way
	ret

yesQuick:
	push	ds
	mov	bx, 40h
	mov	ds, bx
	assume	ds:ABS40		; address abs segment
	push	es
	push	bp
	push	si
	push	di			; save some registers
	push	ax			; save char and mode
	
	mov	ax, crt_cols
	mov	cx, ega_points		; pixel rows in character
	mov	bp, ax			; save number of columns=#bytes
	mul	byte ptr (cursor_posn+1)
	mul	cx			; (ignore upper product in DX)
	add	al, byte ptr (cursor_posn)	; y*#cols*#rows + x
	adc	ah, 0			; take care of carry
	mov	si, ax			; save address in si
	xor	ax, ax
	mov	es, ax			; absolute zero
	les	di, es: dword ptr (43h * 4)	; contents of vector 43h
	pop	ax
	push	ax			; get char and mode
	mul	cl			; offset to character in table
	add	di,ax			; di has character bit pattern start
	mov	ax, 0a000h		; address of display segment
	mov	ds, ax
	assume	ds:nothing

; to recap: cx=#rows, bp=#columns, ds:si=display address, es:di=character addr
	mov	dx, 3ceh
	mov	ax, 0a05h
	out	dx,ax			; set write mode 2, read mode 1

	mov	ax, 7			; set color dontcare register to zero
	out	dx,ax

	pop	bx			; character mode in bh
IF gbackground
	mov	bl,bh			; extract background color
IF cheap_pc
	shr	bl,1
	shr	bl,1
	shr	bl,1
	shr	bl,1
ELSE
	shr	bl,4
ENDIF
	or	bh, bh
	jns	overMode
	mov	ax, 1803h		; exor mode
	out	dx,ax

	and	bx, 0f07h		; xor=blink bit
ELSE
	or	bh, bh
	jns	overMode
	mov	ax, 1803h		; exor mode
	out	dx,ax

	and	bx, 7f00h		; mask off xor bit
ENDIF
	mov	al, 8			; bit mask register
	out	dx, al
	inc	dx
chLoop:
	mov	al, es:[di]		; get pixel pattern
	out	dx, al
	and	[si],bh			; update foreground
	not	al
	out	dx, al		     	; and background
	and	[si],bl
	inc	di
	add	si, bp			; go to next character byte and line
	loop	chLoop
	
joinret:
	dec	dx
	mov	ax, 0ff08h		; bit mask
	out	dx, ax
	mov	ax, 5			; mode register
	out	dx, ax
	mov	al, 3			; (ah is zero)
	out	dx, ax
	mov	ax, 0f07h
	out	dx, ax

	pop	di
	pop	si
	pop	bp
	pop	es
	pop	ds
	ret

overMode:
IF gbackground
	and	bx, 0f07h		; xor=blink bit
ELSE
	and	bx, 7f00h		; mask off xor bit
ENDIF
	mov	al, 8			; bit mask register
	out	dx, al
	inc	dx
	; we need to load the internal buffer with a solid
	; background. By writing a solid background and then
	; reading it back, we can do the job.
	mov	al, 0ffh		; force set background
	out	dx, al
	mov	[si], bl
	mov	al, [si]		; read reset pattern
chLoop2:
	mov	al, es:[di]		; get pixel pattern
	out	dx, al
	mov	[si],bh			; update foreground
	inc	di
	add	si, bp			; go to next character byte and line
	loop	chLoop2
	jmp	joinret

quick_graph endp
ENDIF


;--------------- end of graphics mode support --------------------

dosfn8	endp
page
;--- get_blank_attrib ------------------------------------------------
; Determine new attribute and character for a new blank region.
; Use current attribute, just disallow blink and underline.
; Returns result in AH, preserves all other registers.
get_blank_attrib	proc	near
IF gbackground
	cmp	cs:gmode_flag,0
	jle	get_attrib		; if alpha mode
	gmode_test get_attribg		; or good graphic mode, get attrib
	xor	ah,ah
	ret
get_attribg:
	mov	ah, cs:cur_attrib	; must do different technique
IF cheap_pc
	shr	ah,1			; color must be shifted into position
	shr	ah,1
	shr	ah,1
	shr	ah,1
ELSE
	shr	ah,4
ENDIF
	and	ah,07
	ret
get_attrib:
	mov	ah, cs:cur_attrib	; the attribute
;	and	ah, 7fh			;  but disallowing blink
IF MONO
	cmp	cs:video_mode, 7	; monochrome?
	jne	gb_aok
	cmp	ah, 7			; underline?
	jnz	gb_aok
	mov	ah, 7
gb_aok:
ENDIF
	ret
ELSE
	mov	ah, 0			; 0 is background if graphics mode
	cmp	cs:gmode_flag,0
	jg	gb_aok

	mov	ah, cs:cur_attrib
;	and	ah, 7fh			; disallow blink
IF MONO
	cmp	cs:video_mode, 7	; monochrome?
	jne	gb_aok
	cmp	ah, 7			; underline?
	jnz	gb_aok
	mov	ah, 7
ENDIF
gb_aok: ret
ENDIF
get_blank_attrib	endp

page
;---- scroll_up ---------------------------------------------------
; Scroll screen up- preserves ax, bx, cx, dx, si, di, ds, es.
; Moves screen up 1 line, fills the last line with blanks.
; Attribute of blanks is the current attribute sans blink and underline.

scroll_up	proc	near
	push_all

	cmp	cs:gmode_flag,0
	jz	scroll_char
if MONO
	jl	mono_scroll
endif
	jmp	scroll_graphic
scroll_char:
	push	es
	push	ds			; save all!
	mov	ax, ABS40		; address low mem via ds
	mov	ds, ax
if DESQVIEW
	mov	ax, cs:disppage
else
	mov	ax, 0b800h		; address display via es
endif
	mov	es, ax
	assume	ds:ABS40
	cmp	cs:fmode,0		; see if in fast mode
	jz	slow_scroll_up
	xor	ax,ax			; calc addresses
	mov	al, cs:max_x
	inc	ax
	mov	cx, ax			; save (word) count for fill
	mov	bx, ax			; and save byte count
	shl	bx, 1			; byte count
	mov	cs:temp_val, bx
	mul	cs:max_y		; address offset of last line (words)
	shl	ax, 1			; address offset in bytes
	mov	di, ax
	
	mov	ax, crt_start		; start of display
	add	ax, bx			; add line size in bytes
	add	di, ax			; di is now address of new last line
	cmp	di, 7fffh - 264		; is there room here?
	ja	no_room_here

	mov	crt_start, ax
	shr	ax, 1			; make into word offset
	mov	bx, ax			; and put into 6845
	mov	dx, port_6845
	mov	al, 0ch
	out	dx, ax
	inc	al
	mov	ah, bl
	out	dx, ax
	
	mov	ah, cs:cur_attrib
;	and	ah, 7fh			; disallow blink
	mov	al, 20h			; blank
	rep stosw			; clear line

	assume	ds:nothing
	pop	ds
	pop	es
	pop_all
	
	add	di, cs:temp_val
	ret

no_room_here:
	pop	ds			; restore registers
	pop	es
	pop_all
	call	move_back		; go to buffer start
	sub	di, cs:temp_val
	jmp	scroll_up		; try again

if MONO
mono_scroll:
	push	es
	push	ds			; save all!
	mov	ax, ABS40		; address low mem via ds
	mov	ds, ax
	mov	ax, 0b000h		; address display via es
	mov	es, ax
endif
slow_scroll_up:
	assume	ds:ABS40
	mov	di, crt_start		; offset of display (because of
					;   different page)
	mov	ds, ax			; ds is now display
	assume	ds:nothing
	xor	ax,ax			; calc addresses
	mov	al, cs:max_x
	inc	ax
	mov	bx, ax			; save (word) count
	shl	ax, 1			; byte count
	mov	si, ax			; start address is second line
	add	si, di			; adjust start address by any offset
	mov	ax, bx
	mul	cs:max_y		; number of words to move
	mov	cx, ax
	rep movsw			; move them!
	mov	cx, bx			; words to clear
      	mov	ah, cs:cur_attrib
;	and	ah, 7fh			; disallow blink
	mov	al, 20h			; blank
	rep stosw			; clear line
	pop	ds
	pop	es
	pop_all
	ret

scroll_graphic:
	
	gmode_test scrOurself
	mov	bh, 0
	mov	al, 1			; AL is number of lines to scroll.
	mov	ah, 6			; BIOS: scroll up
	xor	cx, cx
	mov	dl, cs:max_x		; lower-rite-x
	mov	dh, cs:max_y		; lower-rite-y (zero based)
	call_video			; call BIOS to scroll a rectangle.

scrret:
	pop_all
	ret

scrOurself:	; try scrolling screen ourself!
	push	es
	push	ds

	mov	dx, 3ceh		; set write mode 1
	mov	ax, 105h
	out	dx, ax

	mov	ax, 40h			; address abs40 segment
	mov	ds, ax
	assume	ds:ABS40
	mov	ax, crt_cols		; calculate length of line in bytes
	mul	byte ptr ega_points
	mov	si, ax			; source of move
	xor	dx,dx
	mov	dl, ega_rows
	mul	dx			; number of bytes to move
	mov	cx, ax
	mov	ax, si			; save bytes in line for later

	mov	bx, 0a000h		; address display
	mov	ds, bx
	mov	es, bx

	xor	di, di			; destination of move
	rep movsb			; scroll
	
	mov	cx, ax			; bytes in line = bytes to clear

	mov	dx, 3ceh
	mov	ax, 05h			; return to write mode 0
	out	dx, ax

IF gbackground
	mov	ah, cs:cur_attrib
IF cheap_pc
	shr	ah,1
	shr	ah,1
	shr	ah,1
	shr	ah,1
ELSE
	shr	ah,4
ENDIF
	and	ah,07			; background color
	mov	al,0
	out	dx,ax			; set color to write

	mov	ax,0f01h		; set mask
	out	dx,ax

	rep	stosb			; clear the line

	mov	ax,0001			; reset mask
	out	dx,ax
ELSE
	xor	ax, ax
	rep stosb			; clear the line
ENDIF

	pop	ds			; restore registers and return
	pop	es
	jmp	scrret

scroll_up	endp
page
;-----move_back --------------------------------------------
; This routine moves the display to offset zero.
; alters:
; cs:temp_val = original crt_start value
; crt_start = 0
; controller reset properly
move_back proc near
	push	ds
	push	es
	push_all
	mov	ax, ABS40
	mov	ds, ax

	assume	ds:ABS40
	mov	al, ega_rows
	inc	al
	mul	byte ptr crt_cols	; words to move
	mov	cx, ax
	mov	si, crt_start
	mov	cs:temp_val, si		; save this value
	xor	di, di
	mov	crt_start, di
	mov	bx, cursor_posn		; y in bh, x in bl
	mov	al, byte ptr crt_cols
	mul	bh
	add	al, bl
	adc	ah, 0
	xchg	bx, ax			; save cursor position in bx
	
if DESQVIEW
	mov	ax, cs:disppage
else
	mov	ax, 0B800h
endif
	mov	es, ax
	mov	ds, ax

	mov	dx, cx
	add	dx, cx			; see if overlapping
	cmp	dx, si
	ja	slow_move
join_move:
	cld
	rep movsw			; move data
	
	mov	dx, port_6845
	mov	al, 0ch			; reset offset
	xor	ah,ah
	out	dx, ax
	inc	al
	out	dx, ax
	inc	al
	mov	ah, bh
	out	dx, ax
	inc	al
	mov	ah, bl
	out	dx, ax
;	sti
	assume	ds:nothing
	pop_all
	pop	es
	pop	ds
	ret

slow_move:	; we gotta move to another spot first
	push	cx		; save length
	dec	dx		; length-2
	dec	dx
	add	si, dx		; point to end
	mov	di, 7FFEh	; safe location -- as safe as we can get
	std
	rep movsw		; move from far end in case of overlap
				; (may happen on large displays)
	mov	dx, port_6845
	mov	si, di		; source becomes destination
	inc	si		; take care of last decrement
	inc	si
	mov	cx, si
	shr	cx, 1		; word offset to start of new area
	mov	al, 0Ch		; display at this new location
	mov	ah, ch
	out	dx, ax
	inc	al
	mov	ah, cl
	out	dx, ax
	pop	cx		; reset all registers
	xor	di, di		; destination is zero
	jmp	join_move	; NOW move to destination
	
move_back	endp
page
if key_redef
;---- lookup -----------------------------------------------
; Called by getchar, peekchar, and key to see if a given key has
; been redefined.
; Sets AH to zero if AL is not zero (i.e. if AX is not a function key).
; Returns with Z cleared if no redefinition; otherwise,
; Z is set, SI points to redefinition string, CX is its length.
; Preseves AL, all but CX and SI.
; Redefinition table organization:
;  Strings are stored in reversed order, first char last.
;  The word following the string is the character to be replaced;
;  the next word is the length of the string sans header.
; param_end points to the last byte used by the parameter buffer;
; redef_end points to the last word used by the redef table.

lookup	proc	near
	mov	si, redef_end		; Start at end of table, move down.
	or	al, al
	jz	lu_lp
	mov	ah, 0			; clear extraneous scan code
lu_lp:	cmp	si, param_end
	jbe	lu_notfound		; If below redef table, exit.
	mov	cx, [si]
	cmp	ax, [si-2]		; are you my mommy?
	jz	lu_gotit
	sub	si, 4
	sub	si, cx			; point to next header
	jmp	lu_lp
lu_notfound:
	or	si, si			; clear Z
	jmp	short lu_exit
lu_gotit:
	sub	si, 2
	sub	si, cx			; point to lowest char in memory
	cmp	al, al			; set Z
lu_exit:
	ret
lookup	endp
endif
page
;---- searchbuf --------------------------------------------
; Called by getchar and peekchar to see if any characters are
; waiting to be gotten from sources other than BIOS.
; Returns with Z set if no chars found, BX=keybuf & SI=keybuf.len otherwise.
searchbuf	proc	near
	; Search the stuffahead buffers.
if key_redef
	mov	cx, 4			; number of buffers to check for chars
else
	mov	cx, 3
endif
	mov	bx, offset fnkey - 4
sbloop: add	bx, 4			; point to next buffer record
	mov	si, [bx].len
	or	si, si			; empty?
	loopz	sbloop			; if so, loop.
	ret
searchbuf	endp
page
;---- getchar -----------------------------------------------
; Returns AL = next char.
; Trashes AX, BX, CX, BP, SI.
getchar proc	near
gc_searchbuf:
	; See if any chars are waiting in stuffahead buffers.
	call	searchbuf
	jz	gc_trykbd		; No chars?  Try the keyboard.
	; A nonempty buffer was found.
	dec	[bx].len
	dec	si
	mov	bp, [bx].adr		; get pointer to string
	mov	al, byte ptr ds:[bp][si]; get the char
	; Recognize function key sequences, move them to highest priority
	; queue.
	sub	si, 1			; set carry if si=0
	jc	gc_nofnkey		; no chars left -> nothing to protect.
	cmp	bx, offset fnkey
	jz	gc_nofnkey		; already highest priority -> done.
	or	al, al
	jnz	gc_nofnkey		; nonzero first byte -> not fnkey.
	; Found a function key; move it to highest priority queue.
	dec	[bx].len
	mov	ah, byte ptr ds:[bp][si]; gec	  [bx].len
	mov	ah, byte ptr ds:[bp][si]; get the second byte of fn key code
gc_fnkey:
	mov	fnkey.len, 1
	mov	fnkeybuf, ah		; save it.
gc_nofnkey:
	; Valid char in AL.  Return with it.
	jmp	short gcdone

gc_trykbd:
	; Actually get a character from the keyboard.
	mov	ah, 0
	int	16h			; BIOS returns with char in AX
	; If it's Ctrl-break, it has already been taken care of.
	or	ax, ax
	jz	gc_trykbd

if key_redef
	; Look in the reassignment table to see if it needs translation.
	call	lookup			; Z=found; CX=length; SI=ptr
	jnz	gc_noredef
	; Okay; set up the reassignment, and run thru the translation code.
	mov	xlatseq.len, cx
	mov	xlatseq.adr, si
	jmp	gc_searchbuf
endif
gc_noredef:
	; Is it a function key?
	cmp	al, 0
	jz	gc_fnkey		; yep- special treatment.
gcdone: ret	; with character in AL.

getchar endp
page
;---- peekchar -----------------------------------------------
; Returns Z if no character ready, AL=char otherwise.
; Trashes AX, BX, CX, BP, SI.
peekchar	proc	near
	call	searchbuf
	jz	pc_trykbd		; No chars?  Try the keyboard.
	; A nonempty buffer was found.
	dec	si
	mov	bp, [bx].adr		; get pointer to string
	mov	al, byte ptr ds:[bp][si]; get the char
	; Valid char from buffer in AL.	 Return with it.
	jmp	short pcdone
pc_trykbd:
	; Actually peek at the keyboard.
	mov	ah, 1
	int	16h			; BIOS returns with char in AX
	jz	pcexit
	; If it's control-break, it's already been taken care of.
	or	ax, ax
	jnz	pc_notbrk
	mov	ah, 0
	int	16h			; so get rid of it!
	jmp	short pc_trykbd
pc_notbrk:
if key_redef
	; Look in the reassignment table to see if it needs translation.
	call	lookup			; Z=found; CX=length; SI=ptr
	jnz	pcdone			; Nope; just return the char.
	; Okay; get the first code to be returned.
	add	si, cx
	mov	al, [si-1]
endif
pcdone: or	ah, 1			; NZ; char ready!
pcexit: ret	; with character in AL, Z true if no char waiting.
peekchar	endp
page
;----- set_gmode ------------------------------------------------
; Set gmode_flag based on mode byte in register al
set_gmode proc  near
if MONO
	cmp	al, 7			; mono?
	je	gmode_mono
	gmode_code
	ret
gmode_mono:
	neg	al
	mov	cs:gmode_flag, al	; set gmode_flag to neg value
	ret
else
	gmode_code			; a macro in nnansi_d.asm
	ret
endif
set_gmode	endp


;---- beep ------------------------------------------------------
; Beep speaker; period given by beep_div, duration by beep_len.
; Preserves all registers.

beep_div	equ	1300		; fairly close to IBM beep
beep_len	equ	3		; 3/18 sec- shorter than IBM

beep	proc	near
	push_all

	mov	al, 10110110b		; select 8253
	mov	dx, 43h			; control port address
	out	dx, al
	dec	dx			; timer 2 address
	mov	ax, beep_div
	jmp	$+2
	out	dx, al			; low byte of divisor
	xchg	ah, al
	jmp	$+2
	out	dx, al			; high byte of divisor
	mov	dx, 61h
	jmp	$+2
	in	al, dx			; get current value of control bits
	push	ax
	or	al, 3
	jmp	$+2
	out	dx, al			; turn speaker on

	; Wait for desired duration by monitoring time-of-day 18 Hz clock
	push	es
	mov	ax, ABS40
	mov	es, ax
	assume	es:ABS40
	mov	bx, timer_low
	mov	cx, -1
beeplp: mov	ax, timer_low
	sub	ax, bx
	cmp	ax, 	beep_len
	jg	beepover
	loop	beeplp
beepover:
	pop	es
	assume	es:CODE

	; Turn off speaker
	pop	ax
	and	al, not 3		; turn speaker off
	out	dx, al
	pop_all
	ret
beep	endp

	page
; A state machine implementation of the mechanics of ANSI terminal control
; string parsing.
;
; Entered with a jump to f_escape when driver finds an escape, or
; to f_in_escape when the last string written to this device ended in the
; middle of an escape sequence.
;
; Exits by jumping to f_ANSI_exit when an escape sequence ends, or
; to f_not_ANSI when a bad escape sequence is found, or (after saving state)
; to f_loopdone when the write ends in the middle of an escape sequence.
;
; Parameters are stored as bytes in param_buffer.  If a parameter is
; omitted, it is stored as zero.  Each character in a keyboard reassignment
; command counts as one parameter.
;
; When a complete escape sequence has been parsed, the address of the
; ANSI routine to call is found in ansi_fn_table.
;
; Register usage during parsing:
;  DS:SI points to the incoming string.
;  CX holds the length remaining in the incoming string.
;  ES:DI points to the current location on the memory-mapped screen.
;  DX is number of characters remaining on the current screen line.
;  BX points to the current paramter byte being assembled from the incoming
;  string.  (Stored in cur_parm_ptr between device driver calls, if needed.)
;
; The registers are set as follows before calling the ANSI subroutine:
;  AX = max(1, value of first parameter)
;  CX = number of paramters
;  SI = offset of second parameter from CS
;  DS = CS
;  ES:DI points to the current location on the memory-mapped screen.
;  DX is number of characters remaining on the current screen line.
; The subroutine is free to trash AX, BX, CX, SI, and DS.
; It must preserve ES, and can alter DX and DI if it wants to move the
; cursor.
;
;------------------------------------------------------------------------

	assume	cs:code, ds:code

;----- next_is -------------------------------------------------------
; Next_is is used to advance to the next state.	 If there are characters
; left in the input string, we jump immediately to the new state;
; otherwise, we shut down the recognizer, and wait for the next call
; to the device driver.
next_is macro	statename
	loop	statename
	mov	ax, offset statename
	jmp	sleep
	endm

;----- sleep --------------------------------------------------------
; Remember bx and next state, then jump to device driver exit routine.
; Device driver will re-enter at f_in_escape upon next invocation
; because escvector is nonzero; parsing will then be resumed.
sleep:	mov	cs:cur_parm_ptr, bx
	mov	cs:escvector, ax
	jmp	f_loopdone

;----- f_in_escape ---------------------------------------------------
; Main loop noticed that escvector was not zero.
; Recall value of BX saved when sleep was jumped to, and jump into parser.
f_in_escape:
	mov	bx, cs:cur_parm_ptr
	jmp	word ptr cs:escvector

fbr_syntax_error_gate:		; jumped to from inside f_bracket
	jmp	syntax_error

;----- f_escape ------------------------------------------------------
; We found an escape.  Next character should be a left bracket.
f_escape:
	next_is f_bracket

;----- f_bracket -----------------------------------------------------
; Last char was an escape.  This one should be a [; if not, print it.
; Next char should begin a parameter string.
f_bracket:
	lodsb
	cmp	al, '['
	jnz	fbr_syntax_error_gate
	; Set up for getting a parameter string.
	mov	bx, cs:param_buffer
	mov	byte ptr cs:[bx], 0
	mov	cs:eat_key, 0		; no eaten key
	next_is f_get_args

;----- f_get_args ---------------------------------------------------
; Last char was a [.  If the current char is a '=' or a '?', eat it.
; In any case, proceed to f_get_param.
; This is only here to strip off the strange chars that follow [ in
; the SET/RESET MODE escape sequence.
f_get_args:
	lodsb
	cmp	al, '='
	jz	fga_ignore
	cmp	al, '?'
	jz	fga_ignore
		dec	si		; let f_get_param fetch al again
		jmp	short f_get_param
fga_ignore:
	mov	cs:eat_key, al		; save eaten key (BUG FIX!)
	next_is f_get_param

;----- f_get_param ---------------------------------------------------
; Last char was one of the four characters "]?=;".
; We are getting the first digit of a parameter, a quoted string,
; a ;, or a command.
f_get_param:
	lodsb
	cmp	al, '0'
	jb	fgp_may_quote
	cmp	al, '9'
	ja	fgp_may_quote
		; It's the first digit.	 Initialize current parameter with it.
		sub	al, '0'
		mov	byte ptr cs:[bx], al
		next_is f_in_param
fgp_may_quote:
	cmp	al, '"'
	jz	fgp_isquote
	cmp	al, "'"
	jnz	fgp_semi_or_cmd		; jump to code shared with f_in_param
fgp_isquote:
	mov	cs:string_term, al	; save it for end of string
	next_is f_get_string		; and read string into param_buffer

;----- f_get_string -------------------------------------
; Last character was a quote or a string element.
; Get characters until ending quote found.
f_get_string:
	lodsb
	cmp	al, cs:string_term
	jz	fgs_init_next_param
	mov	byte ptr cs:[bx], al
	cmp	bx, cs:param_end
	adc	bx, 0			; if bx<param_end bx++;
	next_is f_get_string
; Ending quote was found.
fgs_init_next_param:
	mov	byte ptr cs:[bx], 0	; initialize new parameter
	; | Eat following semicolon, if any.
	next_is f_eat_semi

;----- f_eat_semi -------------------------------------
; Last character was an ending quote.
; If this char is a semi, eat it; else unget it.
; Next state is always f_get_param.
f_eat_semi:
	lodsb
	cmp	al, ';'
	jz	fes_eaten
		inc	cx
		dec	si
fes_eaten:
	next_is f_get_param

;----- syntax_error ---------------------------------------
; A character was rejected by the state machine.  Exit to
; main loop, and print offending character.  Let main loop
; decrement CX (length of input string).
syntax_error:
	mov	cs:escvector, 0
	mov	ah, cs:cur_attrib
	jmp	f_not_ANSI	; exit, print offending char

;------ f_in_param -------------------------------------
; Last character was a digit.
; Looking for more digits, a semicolon, or a command character.
f_in_param:
	lodsb
	cmp	al, '0'
	jb	fgp_semi_or_cmd
	cmp	al, '9'
	ja	fgp_semi_or_cmd
		; It's another digit.  Add into current parameter.
		sub	al, '0'
		xchg	byte ptr cs:[bx], al
		push	dx
		mov	dl, 10
		mul	dl
		pop	dx
		add	byte ptr cs:[bx], al
		next_is f_in_param
	; Code common to states get_param and in_param.
	; Accepts a semicolon or a command letter.
fgp_semi_or_cmd:
	cmp	al, ';'
	jnz	fgp_not_semi
		cmp	bx, cs:param_end	; prepare for next param-
		adc	bx, 0			; if bp<param_end bp++;
		; Set new param to zero, enter state f_get_param.
		jmp	fgs_init_next_param	; spaghetti code attack!
fgp_not_semi:
	; It must be a command letter.
	cmp	al, '@'
	jb	syntax_error
	cmp	al, 'z'
	ja	syntax_error
	cmp	al, 'Z'
	jbe	fgp_is_cmd
	cmp	al, 'a'
	jb	syntax_error
		; It's a lower-case command letter.
		; Remove hole between Z and a to save space in table.
		sub	al, 'a'-'['
fgp_is_cmd:
	; It's a command letter.  Save registers, convert letter
	; into address of routine, set up new register usage, call routine.
	push	si			; These three registers hold info
	push	cx			; having to do with the input string,
	push	ds			; which has no interest at all to the
					; control routine.

	push	cs
	pop	ds			; ds is now cs

	cbw
	add	ax, ax			; table offset

	mov	cx, bx
	mov	si, param_buffer	; si is now pointer to parameters
	sub	cx, si			;
	inc	cx
					; cx is now # of parameters

	xchg	ax, bx			; save pointer to routine in bx

	; Calculate cur_x from DX.
	mov	al, max_x
	inc	ax
	sub	al, dl
	mov	cur_x, al

	; Get first parameter into AX; if defaulted, set it to 1.
	xor	ax, ax
	lodsb
	cmp	al, 1
	adc	al, ah		; if ax=0, then ax=1
	; Finally, call the command subroutine.
	call	word ptr (ansi_fn_table-2*'@') [bx]

	pop	ds
	pop	cx
	pop	si

	mov	ah, cs:cur_attrib	; Prepare for STOSW.
	mov	cs:escvector, 0		; No longer parsing escape sequence.
	; Set flags for reentry at loopnz
	or	dx, dx			; "Any columns left on line?"
	; Re-enter at bottom of main loop.
	jmp	f_ANSI_exit

	page
; The ANSI control subroutines.

; Each routine is called with the following register usage:
;  AX = max(1, value of first parameter)
;  Z flag is set if first parameter is zero.
;  CX = number of paramters
;  SI = offset of second parameter from CS
;  DS = CS
;  ES:DI points to the current location on the memory-mapped screen.
;  DX is number of characters remaining on the current screen line.
; The control routine is free to trash AX, BX, CX, SI, and DS.
; It must preserve ES, and can alter DX and DI if it wants to move the
; cursor.

;----------------------------------------------------------------

	assume	cs:code, ds:code

;----- byteout ---------------------------------------------------
; Converts al to a decimal ASCII string (in 0..99),
; stores it at ES:DI++.	 Returns DI pointing at byte after last digit.
; Destroys DL.

byteout proc	near
	cmp	al, 100		; check for >99 case -- TAA mod
	jb	goodbyteout
	push	ax
	mov	al, '1'		; assume value <200!
	stosb
	pop	ax
	sub	ax, 100
goodbyteout:
	aam
	add	ax, 3030h
	xchg	ah, al
	stosb
	xchg	ah, al
	stosb
	ret
byteout endp

;----- ansi_fn_table -----------------------------------
; Table of offsets of terminal control subroutines in order of
; the character that invokes them, @..Z, a..z.	Exactly 53 entries.
; All the subroutines are defined below in this module.
ansi_fn_table	label	word
	dw	ic,  cup, cdn, cfw, cbk		; @, A, B, C, D
	dw	nul, nul, nul, hvp, nul		; E, F, G, H, I
	dw	eid, eil, il,  d_l, nul		; J, K, L, M, N
	dw	nul, dc,  nul, nul, nul		; O, P, Q, R, S
	dw	nul, nul, nul, nul, nul		; T, U, V, W, X
	dw	nul, nul			; Y, Z
	dw	nul, nul, nul, nul, nul		; a, b, c, d, e
	dw	hvp, nul, sm,  nul, nul		; f, g, h, i, j
	dw	nul, rm,  sgr, dsr, nul		; k, l, m, n, o
if key_redef
	dw	key, nul, nul, scp, nul		; p, q, r, s, t
else
	dw	nul, nul, nul, scp, nul		; p, q, r, s, t
endif
	dw	rcp, nul, nul, nul, nul		; u, v, w, x, y
	dw	nul				; z

ansi_functions	proc	near		; set return type to NEAR


;----- Cursor Motion -----------------------------------------------

;-- cursor to y,x
hvp:	dec	ax		; Convert Y to zero-based coordinates.
	mov	cur_y, al
	; Get second parameter, if it is there, and set X with it.
	xor	ax, ax
	cmp	cx, 2		; was there a second parameter?
	jb	hvp_xok
	lodsb			; yes.
	or	al, al
	jz	hvp_xok
	dec	ax		; convert to zero-based coordinates.
hvp_xok:mov	cur_x, al

	; Clip to maximum coordinates.
hvp_set:
	mov	ax, cur_coords		; al = x, ah = y
	cmp	al, max_x
	jbe	hvp_sxok
	mov	al, max_x
	mov	cur_x, al
hvp_sxok:
	cmp	ah, max_y
	jbe	hvp_syok
	mov	al, max_y
	mov	cur_y, al
hvp_syok:
	; Set values of DX and DI accordingly.
	call	xy_to_regs
	ret

;-- cursor forward --
cfw:	add	cur_x, al
	jmp	hvp_set

;-- cursor back -----
cbk:	sub	cur_x, al
	jae	hvp_set
	mov	cur_x, 0
	jmp	hvp_set

;-- cursor down -----
cdn:	add	cur_y, al
	jmp	hvp_set

;-- cursor up -------
cup:	sub	cur_y, al
	jae	hvp_set
	mov	cur_y, 0
	jmp	hvp_set

;-- save cursor position --------------------------------------
scp:	mov	ax, cur_coords
	mov	saved_coords, ax
	ret

;-- restore cursor position -----------------------------------
rcp:	mov	ax, saved_coords
	mov	cur_coords, ax
	jmp	hvp_set		; Clip in case we have switched video modes.

;-- set graphics rendition ------------------------------------
; Modifies the color in which new characters are written.


sgr:	dec	si		; get back pointer to first parameter
	or	cx, cx		; Did he give any parameters?
	jnz	sgr_loop
	mov	byte ptr [si], 0	; no parameters, so fake
	inc	cx			; one with the default value.
	; For each parameter
sgr_loop:
	lodsb				; al = next parameter
	; Search color table
	push	cx

	cmp	al, 0			; not reset?
	jnz	sgr_continue
	mov	color_flag, 7		; finish up normally
sgr_continue:
	mov	cx, colors
	mov	bx, offset color_table-3
sgr_search:
	add	bx, 3
	cmp	al, byte ptr [bx]
	loopnz	sgr_search	; until match found or done
	jnz	sgr_loopx

	; If parameter named a known color, set the current
	; color variable.
	cmp	al, 30
	jge	sgr_color
	mov	ax, [bx+1]
	and	atr_flag, al
	or	atr_flag, ah
	jmp	short sgr_loopx
sgr_color:
	mov	ax, [bx+1]
	and	color_flag, al
	or	color_flag, ah
sgr_loopx:
	pop	cx
	loop	sgr_loop		; until no more parameters.

	mov	al, color_flag
	mov	ah, atr_flag
	test	ah, 4			; invisible
	jz	sgr_notinv
	mov	ah, al			; then fade to background
if cheap_pc
	ror	al,1			; swap nibbles
	ror	al,1
	ror	al,1
	ror	al,1
else
	ror	al,4
endif
	and	ax, 7007h
	or	al, ah
	jmp	short sgr_done
sgr_notinv:
	test	ah, 2			; reverse?
	jz	sgr_notrev
if cheap_pc
	ror	al,1			; swap nibbles
	ror	al,1
	ror	al,1
	ror	al,1
else
	ror	al,4
endif
sgr_notrev:
	test	ah, 1			; underline?
	jz	sgr_notund
	cmp	gmode_flag, 0		; monochrome display?
	jl	sgr_mono_und
	and	al, 0f0h
	or	al, 1			; blue chars on color display
	jmp	short sgr_notund
	
sgr_mono_und:
	cmp	al, 7			; can only underline if white on black
	jne	sgr_notund
	mov	al, 1
sgr_notund:
	and	ah, 88h			; get bold and blink attributes
	or	al, ah			; and  merge them in
sgr_done:
	mov	cur_attrib, al		; save the new attribute
;	ret	

;----- nul ---------------------------------------------
; No-action ansi sequence; called when unknown command given.
nul:	ret


;-- erase in line ----------------------------------------
; Uses BIOS to scroll away a one-line rectangle
eil:	push	dx
	mov	cx, cur_coords
	mov	dh, ch
	jmp	short scrollem

;-- erase in display -------------------------------------
; Uses BIOS to scroll away all of display
eid:	
	or	cx,cx		; no args?
	jz	eid_toend	;  then erase to end
	cmp	byte ptr -1[si], 0
	je	eid_toend	; first parms=0 -- erase to end
	cmp	al, 1		; erase to beginning?
	je	eid_tostart
	cmp	al, 2
	jne	eid_ignore	; param must be two
	mov	cur_coords, 0
	call	xy_to_regs
	cmp	cs:fmode,0	; see if running in fast mode
	je	eid_slow
	xor	di, di	; offset will be zero after clearing
eid_slow:
	push	dx
	xor	cx, cx
	mov	dh, max_y
scrollem:
	call	get_blank_attrib
	mov	bh, ah
	mov	dl, max_x
eid_process:
	mov	ax, 600h
	int	10h		; use int 10 so screen repositions itself
;	call_video		  rather than "call_video"
eid_done:
	pop	dx
eid_ignore:
	ret

eid_toend:	; erase following lines then go back and erase in line
	push	dx
	call	get_blank_attrib
	mov	bh,ah
	mov	ax, 600h
	mov	dh, max_y
	mov	dl, max_x
	mov	ch, cur_y
	inc	ch
	cmp	ch, dh			; don't erase if no following
	ja	eid_nopost
	xor	cl,cl
if BAD_ERASE
	int 	10h
else
	call_video
endif
eid_nopost:
	mov	cx, cur_coords
	mov	dh, ch
	jmp	short scrollem


eid_tostart:	; erase preceeding lines then go back and erase in line
	push	dx
	call	get_blank_attrib
	mov	bh,ah
	mov	dh, cur_y
	dec	dh
	js	eid_nopre		; don't erase if no preceeding
	mov	ax,600h
	xor	cx,cx
	mov	dl, max_x
if BAD_ERASE
	int	10h
else
	call_video
endif
eid_nopre:
	mov	dx, cur_coords
	dec	dl
	js	eid_done
	mov	ch, dh
	xor	cl, cl
	jmp	eid_process
	
;-- device status report --------------------------------
; Stuffs an escape, a left bracket, current Y, semicolon, current X,
; a capital R, and a carriage return into input stream.
; The coordinates are 1 to 3 decimal digits each.

dsr:	push	di
	push	dx
	push	es
	mov	ax, cs
	mov	es, ax
	std			; Store string in reversed order for fun
	mov	di, offset cpr_esc - 2
	mov	al, cur_y
	inc	al		; convert to one-based coords
	call	byteout		; row
	mov	al, ';'		; ;
	stosb
	mov	al, cur_x
	inc	al		; convert to one-based coords
	call	byteout		; column
	mov	al, 'R'		; R ANSI function 'Cursor Position Report'
	stosb
	mov	al, 13
	mov	word ptr cprseq.adr, di ; save pointer to last char in string
	stosb				; send a carriage return, too
	mov	ax, offset cpr_esc
	sub	ax, di			; ax is # of characters in string
	mov	word ptr cprseq.len, ax ; pass info to the getchar routine
	cld
	pop	es
	pop	dx
	pop	di
	ret
if key_redef
;-- keyboard reassignment -------------------------------
; Key reassignment buffer is between param_end and redef_end+2, exclusive.
; When it shrinks or grows, param_end is moved.
; Format of an entry is as follows:
;   highest address -> length:word (may be 0)
;		       key to replace:word     (either hi or low byte is zero)
;			   .
;			   .	new key value, "length" bytes long
;			   .
;   lowest address  -> next entry, or free space.
; If no arguments are given, keyboard is reset to default condition.
; Otherwise, first parameter (or first two, if first is zero) defines
; the key whose value is to be changed, and the following parameters
; define the key's new, possibly zero-length, value.

key:
	; Is this a reset?
	or	cx, cx
	jz	key_init
	; Get the first (or first two) parameters
	cld
	dec	si	; point to first param
	dec	cx	; Assume it's a fn key, get two params
	dec	cx
	lodsw
	or	al, al	; Is it a function key?
	jz	key_fnkey
		; It's not a function key- put second param back
		inc	cx
		dec	si
key_fnkey:
	; Key to redefine now in AX.  If it's already redefined,
	; lookup will set Z, point SI to redef string, set CX to its length.
	push	di
	push	es
	push	cx
	push	si

	std			; moving up, must move from top down
	push	ds
	pop	es		; string move must have ES=DS
	call	lookup		; rets Z if redefined...
	jnz	key_newkey
	; It's already defined.	 Erase its old definition- i.e., move
	; region param_end+1..SI-1 upwards CX+4 bytes, add CX+4 to param_end.
	add	cx, 4
	mov	bp, param_end	; save old value in bp...
	add	param_end, cx
	dec	si		; start at (SI-1)
	mov	di, si
	add	di, cx		; move to (start + CX+4)
	mov	cx, si
	sub	cx, bp		; length of region old_param_end+1..start
	rep	movsb
key_newkey:
	; Key not redefined.  See if there's enough room to redefine it.
	pop	si		; get back pointer to redef string
	pop	cx		; get back number of bytes in redef string
	mov	di, param_end	; hi byte of new redef record, hi byte of len
	sub	di, 4		; hi byte of new data field
	mov	bx, di
	sub	bx, cx		; hi byte of remaining buffer space
	sub	bx, 16		; better be at least 16 bytes room
	cmp	bx, param_buffer
	jb	key_popem	; nope- forget it.
	; Nothing in the way now!
	mov	[di+3], cx	; save length field
	mov	[di+1], ax	; save name field
	jcxz	key_nullstring
key_saveloop:			; save data field
	movsb
	add	si, 2		; input string ascending, output descending
	loop	key_saveloop
key_nullstring:
	mov	param_end, di	; save adr of new hi byte of free area
key_popem:
	pop	es
	pop	di

key_exit:
	cld
	ret

key_init:
	; Build the default redefinition table:
	;	control-printscreen -> control-P
	push	es
	push	ds
	pop	es
	std
	mov	di, redef_end
	mov	ax, 1
	stosw
	mov	ax, 7200h	; control-printscreen
	stosw
	mov	al, 16		; control P
	stosb
	mov	param_end, di	; save new bottom of redef table
	pop	es
	jmp	key_exit
endif


;---- Delete/Insert Lines -------------------------------
; AL is number of lines to delete/insert.
; Preserves DX, DI; does not move cursor.

d_l:	; Delete lines.
	mov	ah, 6			; BIOS: scroll up
	jmp	short il_open

il:	; Insert lines.
	mov	ah, 7			; BIOS: scroll down

il_open:
	; Whether inserting or deleting, limit him to (max_y - cur_y) lines;
	; if above that, we're just clearing; set AL=0 so BIOS doesn't burp.
	mov	bh, max_y
	sub	bh, cur_y
	cmp	al, bh
	jbe	il_ok			; DRK 9/4...
		mov	al, 0		; he tried to move too far
il_ok:
	push	ax
	call	get_blank_attrib
	mov	bh, ah			; color to use on new blank areas
	pop	ax			; AL is number of lines to scroll.

	mov	cl, 0			; upper-left-x of data to scroll
	mov	ch, cur_y		; upper-left-y of data to scroll
	push	dx
	mov	dl, max_x		; lower-rite-x
	mov	dh, max_y		; lower-rite-y (zero based)
if BAD_ERASE
	int	10h
else
	call_video			; call BIOS to scroll a rectangle.
endif
	pop	dx
	ret				; done.

;-- Insert / Delete Characters ----------------------------
; AL is number of characters to insert or delete.
; Preserves DX, DI; does not move cursor.

ic:	mov	ch, 1			; 1 => swap dest & source below
	jmp	short dc_ch

dc:	mov	ch, 0

dc_ch:
	cmp	cs:gmode_flag,0
	jg	dc_ret			; | if in graphics mode, ignore.


	; AL = number of chars to ins or del (guarenteed nonzero).
	; Limit him to # of chars left on line.
	cmp	al, dl
	jbe	dc_cok
		mov	al, dl
dc_cok:
	push	di			; DI is current address of cursor
	xchg	ax, cx			; CX gets # of chars to ins/del
	mov	bp, cx			; BP gets # of columns to clear.

	; Set up source = destination + cx*2, count = dx - cx
	mov	ch, 0			; make it a word
	mov	si, di
	add	si, cx
	add	si, cx
	neg	cl
	add	cl, dl
	mov	ch, 0			; CX = # of words to transfer
	cld				; REP increments si & di

	; If this is an insert, then flip transfer around in both ways.
	test	ah, 1
	jz	dc_noswap
		xchg	di, si		; source <-> dest
		std			; up <-> down
		mov	ax, cx		; make move over same range
		dec	ax
		add	ax, ax		; AX=dist from 1st to last byte.
		add	di, ax		; Start transfer at high end of block
		add	si, ax		;  instead of low end.
dc_noswap:
	; Move those characters.
	push	es
	pop	ds
	rep	movsw
	mov	cx, bp
	; Figure out what color to make the new blanks.
	call	get_blank_attrib
	mov	al, ' '
	; Blank out vacated region.
	rep	stosw

	; All done.
	cld				; restore normal REP state and
	pop	di			;  cursor address.
dc_ret: ret


;---- set / reset mode ---------------------------------------
; Sets graphics/text mode; also sets/resets "no wrap at eol" mode.
; also set/reset graphic cursor mode
rm:	mov	cl, 0		; reset
	jmp	short sm_rs

sm:	mov	cl, 0ffh	; set
sm_rs:
	; Is it "wrap at eol" ?
	cmp	al, 7
	jnz	sm_notwrap
	mov	wrap_flag, cl	; true = wrap at EOL
	ret
sm_notwrap:
; We will make this smarter by requiring the correct lead character,
; except for wrap at eol, which has been badly documented in the MSDOS
; manuals.
	cmp	eat_key, '='	; set mode -- display mode
	jz	sm_notbios
	cmp	eat_key, '?'	; set mode of togglable attribute?
	jnz	sm_done
	; Is it set/reset graphic cursor mode?
	cmp	al,99
	jnz	sm_notgcursor
	mov	gcursor, cl
	ret
sm_notgcursor:
	; Is it set/reset fast mode?
	cmp	al,98
	jnz	sm_notspeedy
if DESQVIEW
	cmp	dvactive, 0	; desqview active?
	jne	sm_done		; then do nothing
endif
	mov	fmode, cl
	cmp	cl,0		; mode now fast?
	jnz	sm_done
	call	move_back
sm_done:	ret
sm_notspeedy:
	; Is it set/reset bios write?
	cmp	al,97
	jnz	sm_done
if bios_write_tty
		mov	bmode, cl
endif
		ret
sm_notbios:
	; we can now do 43 lines on a VGA display, if desired, as well as 50.
	; of course an EGA display will only do 43.
IF MONO
	cmp	video_mode, 7		; mono mode?
	je	sm_done
ENDIF	
IF VGA
	cmp	al, 43
	je	is43or50
	cmp	al, 50
	jne	sm_video		; set to whatever it happens to be
is43or50:
	dec	al
	cmp	al, max_y
	je	sm_done			; no change in # lines
	cmp	video_mode, 3		; display mode > 3?
	ja	sm_done
	cmp	al, 49			; 50 line mode?
	mov	ax, 1201H		; set 350 lines on EGA
	jne	sm_is43
	mov	ax, 1202h		; select 400 scan lines
sm_is43:
	mov	bl,30h			; this call ignored on EGA
	call_video
		
ELSE
	cmp	al, 43
	jne	sm_video		; set to whatever it happens to be

	cmp	max_y, 42		; no change in # lines?
	je	sm_done
	cmp	video_mode, 3		; must be currently mode <= 3
	ja	sm_done
ENDIF
	mov	ah,0
	mov	al, video_mode		; select the video mode.
	call_video
		
	mov	ax,1112h		; Load 8x8 font
	mov	bl,0			; (instead of 8x14 or 8x16)
	call_video

	mov	ax, 1200h		; Load new printscreen
	mov	bl, 20h
	call_video

IF EGA	; set the EGA cursor
	mov	dx, port_6845		; '6845' command reg
	mov	ax, 070ah		; start on line 7
	out	dx, ax
	mov	al, 0bh			; end on line 7
	out	dx, ax
ENDIF
	jmp	short sm_home


sm_video:
	; It must be a video mode.  Call BIOS.
	; Save graphics mode flag
IF VGA
	cmp	al, 3		; On VGA, modes 0-3, set 400 scan lines
	ja	no_scan_change
	push	ax
	mov	ax, 1202h		; select 400 scan lines
	mov	bl,30h			; this call ignored on EGA
	call_video
	pop	ax
no_scan_change:
ENDIF	
IF VESA
	cmp	al, 80h		; not a vesa mode?
	jb	normal_mode
	xor	bx, bx
	mov	bl, al
	add	bx, 8080h	; set msb and put mode in range
	mov	ax, 4f02h
	int	10h		; can't use call_video, because often
				; VESA compatibility driver is used and
				; loaded after us.
	jmp	short sm_home
normal_mode:	
ENDIF	
	mov	ah, 0		; "set video mode"
;	or	al, 80h		;  but don't erase screen, since colors wrong.
	call_video
sm_home:
	; Read the BIOS buffer address/cursor position variables.
	mov	ax, ABS40
	push	ds
	mov	ds, ax
	assume	ds:ABS40

	; Find current video mode and screen size.
	mov	ax,word ptr crt_mode	; al = crt mode; ah = # of columns
	mov	cl, ega_rows		; cl = max row
	pop	ds
	assume	ds:code
	call	set_gmode		; set gmode based on video mode
	mov	video_mode, al
	dec	ah			; ah = max column
	mov	max_x, ah
	mov	max_y, cl

	; Since cursor may end up in illegal position, it's best to
	; just go home after switching video modes.
	mov	cur_coords, 0
	call	xy_to_regs

	jmp	eid_slow		; then clear the screen

ansi_functions	endp	; end dummy procedure block



;-------- Color table -----------------------------------------
; Used in "set graphics rendition"

colors	equ	28			; number of colors in table

color_table:
; The first set attributes rather than colors
	db	0, 000h,00h		; all attribs off; normal.
	db	1, 0ffh,08h		; bold
	db	2, 0f7h,00h		; dim (not bold)
	db	4, 0ffh,01h		; underline
	db	5, 0ffh,80h		; blink
	db	7, 0ffh,02h		; reverse
	db	8, 0ffh,04h		; invisible
	
	db	22,0f7h,00h		; un-bold, un-dim
	db	24,0feh,00h		; un-underline
	db	25,07fh,00h		; un-blink
	db	27,0fdh,00h		; unreverse
	db	28,0fbh,00h		; un-invisible

; These set the colors
	db	30,0f8h,00h		; black foreground
	db	31,0f8h,04h		; red
	db	32,0f8h,02h		; green
	db	33,0f8h,06h		; yellow
	db	34,0f8h,01h		; blue
	db	35,0f8h,05h		; magenta
	db	36,0f8h,03h		; cyan
	db	37,0f8h,07h		; white

	db	40,08fh,00h		; black background
	db	41,08fh,40h		; red
	db	42,08fh,20h		; green
	db	43,08fh,60h		; yellow
	db	44,08fh,10h		; blue
	db	45,08fh,50h		; magenta
	db	46,08fh,30h		; cyan
	db	47,08fh,70h		; white

	page
;-------- dos function # 0 : init driver ---------------------
; Initializes device driver interrupts and buffers, then
; passes ending address of the device driver to DOS.
; Since this code is only used once, the buffer can be set up on top
; of it to save RAM. Placed at end so that any excess can be deleted
; after running

dosfn0	proc	near
	assume	cs:code, ds:code
if TSR
	mov	word ptr nextdev, -1	; fix up next device pointer
	mov	word ptr nextdev+2, -1
joindosfn0:
endif
	mov	byte ptr cs:IDLOC+10, '*' ; make us look different

; The following check for MDA/CGA courtesy of Arend van den Brug
					; initialise ega_rows to normal value
					; to enable MDA/CGA support
	mov	ax, ABS40
	mov	ds, ax
	assume	ds:ABS40
	mov	al, ega_rows
	or	al, al			; not already filled in ?
	jnz	set_kb
	mov	ega_rows, 24		; then set it to the normal 25 lines

set_kb:
if 0
	; this is old, ugly code that DOS manuals say would be necessary
	; but I've found not to be the case. But if I'm wrong, and the system
	; hangs during boot, then here is the ugly alternative.

	; Install BIOS keyboard break handler.
	xor	ax, ax
	mov	ds, ax
	assume	ds:NOTHING
	mov	bx, 1bh * 4
if TSR
	cmp	cs:fulldvr, 0
	je	nosetbrk
	mov	ax, [bx]
	mov	word ptr cs:old_brk, ax
	mov	ax, [bx+2]
	mov	word ptr cs:old_brk[2], ax
endif
	mov	word ptr [BX],offset break_handler
	mov	[BX+02], cs
nosetbrk:

	; Install INT 29 quick putchar.
	mov	bx, 029h * 4
if TSR
	mov	ax, [bx]			; save in case of unload
	mov	word ptr cs:old_int29, ax
	mov	ax, [bx+2]
	mov	word ptr cs:old_int29[2], ax
endif
	mov	word ptr [bx], offset int_29
	mov	[bx+2], cs
IF dos4
	; Install INT 2Fh multiplex interrupt, saving old vector.
	mov	bx, 02fh * 4
	mov	ax, [bx]
	mov	word ptr cs:old_mpx, ax
	mov	ax, [bx+2]
	mov	word ptr cs:old_mpx[2], ax
	mov	word ptr [bx], offset new_mpx
	mov	word ptr [bx+2],  cs
ENDIF
	
	; Install INT 10h video bios replacement, saving old vector.
	mov	bx, 10h * 4
	mov	ax, [bx]
	mov	word ptr cs:old_vid_bios, ax
	mov	ax, [bx+2]
	mov	word ptr cs:old_vid_bios[2], ax
	mov	word ptr [bx], offset new_vid_bios
	mov	word ptr [bx+2], cs

	push	cs
	pop	ds
else
	; use INT 21 function 35 and 25 to read and set interrupt handlers.
	; Technically this doesn't work for device driver initialization.
	; but practice shows otherwise.

	; Install BIOS keyboard break handler.
	push	cs			
	pop	ds			; get addressability
	assume	ds:code
if TSR
	cmp	fulldvr, 0		; partial driver?
	je	nosetbrk
	mov	ax, 351bh		; save old handler first
	int	21h
	mov	word ptr old_brk, bx
	mov	word ptr old_brk+2, es
endif
	mov	ax, 251bh
	mov	dx,offset break_handler
	int	21h
nosetbrk:

	; Install INT 29 quick putchar.
if TSR
	mov	ax, 3529h		; save old handler first
	int	21h
	mov	word ptr old_int29, bx
	mov	word ptr old_int29+2, es
endif
	mov	ax, 2529h
	mov	dx,offset int_29
	int	21h
IF dos4
	; Install INT 2Fh multiplex interrupt, saving old vector.
	mov	ax, 352fh
	int	21h
	mov	word ptr old_mpx, bx
	mov	word ptr old_mpx+2, es
	mov	ax, 252fh
	mov	dx,offset new_mpx
	int	21h
ENDIF
	
	; Install INT 10h video bios replacement, saving old vector.
	mov	ax, 3510h
	int	21h
	mov	word ptr old_vid_bios, bx
	mov	word ptr old_vid_bios+2, es
	mov	ax, 2510h
	mov	dx,offset new_vid_bios
	int	21h

endif
	push	cs
	pop	es			; es=cs so we can use stosb

	cld				; make sure stosb increments di

	; Calculate addresses of start and end of parameter/redef buffer.
	; The buffer occupies the same area of memory as this code!
	; ANSI parameters are accumulated at the lower end, and
	; keyboard redefinitions are stored at the upper end; the variable
	; param_end is the last byte used by params (changes as redefs added);
	; redef_end is the last word used by redefinitions.
	mov	di, offset dosfn0
	mov	param_buffer, di
	add	di, buf_size
	mov	param_end, di	; addr of last byte in free area
	inc	di

	; Announce our presence
	mov	ax,cs
	mov	bx,offset Ident1
	call hexcnv

	mov	si, offset welcome
msg_loop:
	lodsb	
	cmp	al,0
	je	msg_done
	int	29h
	jmp	msg_loop

msg_done:

IF key_redef
	; Build the default redefinition table:
	;	control-printscreen -> control-P
	; (Must be careful not to write over ourselves here!)
	mov	al, 16		; control P
	stosb
	mov	ax, 7200h	; control-printscreen
	stosw
	mov	ax, 1		; length field
	mov	redef_end, di	; address of last used word in table
	stosw
endif

	; Return ending address of this device driver.
	; Status is in AX.
	lds	si, req_ptr
	mov	word ptr [si+0Eh], di
	mov	[si+10h], cs

	xor	ax, ax
	; Return exit status in ax.
	ret

welcome:
	db	27,'[33;1m'
	db	"NNANSI.SYS for "
	card_id
	if	cheap_pc
	db	" (XT class processor)"
	else
	db	" (AT class processor)"
	endif
	db	13, 10
	db	'By Tom Almy, version 1/92'
	db	13,10,10
	db	'Based on NANSI.SYS V2.2'
	db	13,10
	db	'Copyright 1986, Daniel Kegel.'
	db	13,10
	db	'License NANSI.SYS by sending $10.00(US) to Daniel Kegel,'
	db	13,10
	db	'535 E. Mendocino St, Altadena, CA 91001, USA.'
	db	13, 10, 13, 10
	db	'NNANSI driver loaded at '
Ident1	db	'XXXX:0000'
	db	13, 10, 27, '[0m'
if DESQVIEW
dvset	db	0
	db	13, 10, 27, '[36mDESQVIEW DETECTED!'
	db	13, 10, 27, '[0m'
endif
	db	0
dosfn0	endp

hexcnv	proc	near
; AX= value
; BX= pointer to destination string
; AX, BX destroyed, all other registers intact.
	push	cx
	push	dx
	mov	cx, 4
hexcnv_loop:
if cheap_pc
	rol	ax, 1
	rol	ax, 1
	rol	ax, 1
	rol	ax, 1
else
	rol	ax, 4
endif
	mov	dl, al
	and	dl, 0fh
	add	dl, '0'
	cmp	dl, '9'
	jbe	hexcnv_isdigit
	add	dl, 'A'-'9'-1
hexcnv_isdigit:
	mov	[bx], dl
	inc	bx
	loop	hexcnv_loop
	pop	dx
	pop	cx
	ret

hexcnv	endp

if TSR
realstart	proc	near
; Startup code when run as a COM file rather than a device driver
	assume	cs:code, ds:nothing
	mov	ax, cs		; correct CS  value
	add	ax, 10h
	push	ax
	mov	ax, offset cs:jumploc
	push	ax
	retf
jumploc:
	mov	byte ptr cs:IDLOC+10, '*' ; make us look different
	mov	bx, 81h		; check the command line for argument
argloop:
	mov	al, ds:[bx]	; get a character
	inc	bx
	cmp	al, 0dh		; carriage return means "install"
	je	install
	cmp	al, 'd'		; d or D is full installation
	je	finstall
	cmp	al, 'D'
	je	finstall
	cmp	al, 'U'		; U or u is uninstall
	je	uninstall
	cmp	al, 'u'
	je	uninstall
	cmp	al, ' '		; blanks ok
	je	argloop
	mov	dx, offset cs:oopsmsg	; quit with help message
	push	cs		; print message
	pop	ds
abortdeath:
	mov	ah, 09h
	int	21h
	mov	ax, 4c01h	; terminate with error return code 1
	int	21h

uninstall:
; The uninstall process is somewhat different than what I've seen in 
; other TSRs. It ok's an uninstall based on the TSR being directly
; below in memory the current program. Other programs check for
; the interrupt vectors being correct. Both techniques are generally
; reliable, and both can be fooled.


	push	word ptr ds:2ch	; Environment pointer, saved in PSP
	call	findus		; find a clone of ourself
	pop	cx		; get back envp
	mov	ax, es
	or	ax, ax
	jnz	foundus
	mov	dx, offset cs:nocpymsg
	jmp	abortdeath
foundus:
	add	ax, word ptr es:parsize	; get original paragraph size
	inc	ax		; memory block header is another paragraph
	mov	bx, cs		; and compare with this cs
	cmp	ax, bx
	jz	goodloc
				; When unloading from a batch file using
				; COMMAND.COM, or with 4DOS.COM if the
				; environment has been enlarged,
				; our environment copy will be in the way,
				; so compensate and compare again
	add	cx, 10h		; compensate for PSP size
	cmp	ax, cx
	jz	goodloc
	mov	dx, offset cs:badlocmsg
	jmp	abortdeath
goodloc:
	mov	al, 27		; clear the screen
	int	29h
	mov	al, '['
	int	29h
	mov	al, '2'
	int	29h
	mov	al, 'J'
	int	29h
	mov	ax, 2529h	; restore int29 handler
	lds	dx, es:old_int29	; from original image's saved copy
	int	21h

if dos4
	mov	ax, 252fh	; restore mpx handler
	lds	dx, es:old_mpx
	int	21h
endif
	mov	ax, 2510h	; restore video bios handler
	lds	dx, es:old_vid_bios
	int	21h

	cmp	es:fulldvr, 0	; full driver installation?
	jz	nounlink	; no -- skip following

	mov	ax, 251bh	; restore keyboard break handler
	lds	dx, es:old_brk
	int	21h

	push	es		; unlink us from device driver list
	pop	ds
	assume	ds:code		; actually code of other copy!
	mov	ah, 52h		; get "list of lists" into es:bx
	int	21h
	mov	ax, word ptr savecon
	mov	word ptr es:0ch[bx], ax	; direct pointer to CON driver
	mov	ax, word ptr savecon+2
	mov	word ptr es:0eh[bx], ax
	push	bx
	mov	ah, 30h		; get DOS version
	int	21h
	pop	bx
	add	bx, 17h		; offset of 17h to NULL in DOS 2.x
	cmp	al, 2
	je	got_nullp
	add	bx, 28h-17h	; offset of 28h in DOS 3.0
	cmp	ax, 3
	je	got_nullp
	add	bx, 22h-28h	; offset of 22h in DOS 3.1 and later
got_nullp:
	; We are making the assumption that no other drivers have
	; been linked in. This should be reasonable since I know of no
	; other drivers that link themselves in as a TSR, and if one did
	; it would have to have been loaded "high" after NNANSI was loaded
	; "low", a very unlikely situation.

	mov	ax, word ptr nextdev
	mov	word ptr es:[bx], ax	; restore pointer to next in chain
	mov	ax, word ptr nextdev+2
	mov	word ptr es:2[bx], ax
	push	ds
	pop	es

nounlink:
	mov	byte ptr es:IDLOC+10, ' '	; unmark old image
				; If old image is not unmarked, it can 
				; appear as a ghost, preventing nnansi
				; from being reloaded.
	mov	ax, es		; point at old psp
	sub	ax, 10h		
	mov	es, ax
	mov	ah, 49h		; release old memory block
	int	21h
	push	cs
	pop	ds
	mov	dx, offset cs:failedmsg
	jc	abortdeath
	mov	dx, offset cs:successmsg
	mov	ah, 9
	int	21h
	mov	ax, 4c00h	; finished!
	int	21h

install:
	mov	cs:fulldvr, 0	; driver is partial
finstall:
	push	word ptr ds:2ch	; Environment pointer, saved in PSP
	call	findus		; find a clone our ourself
	assume	ds:code
	mov	ax, es
	or	ax, ax		; already loaded?
	jnz	abortinst	; then abort
	mov	ax, 3529h	; check int29 vector
	int	21h
	cmp	word ptr es:10, "OC"	; see if hooked to an ANSI driver
	jne	noansidvr
	cmp	byte ptr es:12, 'N'
	je	yesansidvr
noansidvr:
if DESQVIEW
	mov	ax, 0b800h	; check for Desqview being present
	mov	es, ax
	xor	di, di
	mov	cx, "DE"
	mov	dx, "SQ"
	mov	ax, 2b01h
	int	21h
	cmp	al, 0ffh
	je	no_desqview	; not loaded
	mov	dvactive, bh	; say we are running Desqview
	mov	dvset, 13	; change message
	mov	fmode, 0	; disable fast mode -- would be a disaster!
	mov	ah, 0feh	; get display page
	int	10h
	mov	disppage, es	; es is display page to use
no_desqview:
endif
	cmp	fulldvr, 0	; partial driver?
	je	nolink
	mov	ah, 52h		; get "list of lists"
	int	21h
	mov	ax, word ptr es:0ch[bx] 	; save existing CON driver
	mov	word ptr savecon, ax
	mov	ax, word ptr es:0eh[bx]
	mov	word ptr savecon+2, ax
	mov	word ptr es:0ch[bx], 0	; new con driver header
	mov	word ptr es:0eh[bx], cs
	push	bx
	mov	ah, 30h		; get DOS version
	int	21h
	pop	bx
	add	bx, 17h		; offset of 17h to NULL in DOS 2.x
	cmp	al, 2
	je	got_null
	add	bx, 28h-17h	; offset of 28h in DOS 3.0
	cmp	ax, 3
	je	got_null
	add	bx, 22h-28h	; offset of 22h in DOS 3.1 and later
got_null:
	mov	ax, word ptr es:[bx]	; our driver points to what NULL was
	mov	word ptr nextdev, ax
	mov	ax, word ptr es:2[bx]	; next driver
	mov	word ptr nextdev+2, ax
	mov	word ptr es:[bx], 0	; point NULL to us
	mov	word ptr es:2[bx], cs
nolink:
	call	joindosfn0	; original initialization
	pop	es		; get back Environment pointer
	mov	ah, 49h
	int	21h		; and free it since we don't need it

	mov	bx, 4		; close handles 0-4
closeloop:
	mov	ah, 3eh
	int	21h
	dec	bx
	jns	closeloop	; loop while >= 0

	mov	dx, di	; offset to end of resident code
	add	dx, 15+256	; page align plus size of PSP
	shr	dx, 1	; shift right to get # pages
	shr	dx, 1
	shr	dx, 1
	shr	dx, 1
	mov	cs:parsize, dx	; save this size
	mov	ax, 3100h	; Terminate and stay resident
	int	21h
abortinst:
	mov	dx, offset cs:abortmsg
	jmp	abortdeath
yesansidvr:
	mov	dx, offset cs:dvrmsg
	jmp	abortdeath
oopsmsg db "NNANSI -- no arguments mean 'install',"
	db 13,10,"          'D' means install as full driver,"
	db 13,10,"          'U' means 'uninstall'$"
abortmsg db "NNANSI -- already loaded. 'NNANSI U' to uninstall$"
dvrmsg	db "NNANSI -- another ANSI driver is already loaded$"
nocpymsg db "NNANSI -- NNANSI not loaded$"
badlocmsg db "NNANSI -- cannot unload -- not last loaded TSR$"
failedmsg db "NNANSI -- cannot unload -- memory error$"
successmsg db "NNANSI -- unloaded!$"
realstart	endp


findus	proc	near
	assume  cs:code,ds:code
	push	cs		; make us addressable
	pop	ds
	mov	dx, 0		; set es to 0 for search
fulup:	
	mov	es, dx
	mov	cx, 6		; compare for 12 bytes, 6 words
	mov	si, offset cs:IDLOC
	mov	di, si
	repe cmpsw
	jz	fulfound	; found if result equal
fulnext:
	inc	dx		; try next segment
	cmp	dx, 0fff0h	; reached end?
	jne	fulup		; no--try again
	xor	ax, ax		; return 0 in es
	mov	es, ax
	ret
fulfound:			; check for seeing ourself
	mov	ax, cs
	cmp	ax, dx
	je	fulnext		; yep--increment and try again
	ret			; return with segment in es
findus	endp
endif
code	ends
	end	start

```
{% endraw %}

## NNANSI.DOC

{% raw %}
```
	   NNANSI.COM-- Enhanced MS-DOS ANSI Console Driver
			 For EGA/VGA Displays

Note: MS-DOS and Windows are trademarks of Microsoft Corporation.
PC/XT, PC/AT, and PS/2 are trademarks of IBM Corporation.
4DOS is a trademark of J.P. Software.
MKS Toolkit is a trademark of Mortice Kern Systems Inc.
PROCOMM is a trademark of Datastorm Technologies, Inc.
Typing Tutor IV is a trademark of Kriya Systems, Inc.
Desqview and QEMM are trademarks of Quarterdeck.
386MAX is a trademark of Qualitas.

Manufacturers' names are the trademarks of their respective manufacturers.
That should take care of everyone.

Documentation for version 1/92.

This version of NNANSI contains the following improvements
over NNANSI version 5/91.

1. Can either be used as a device driver in the config.sys file
   or can be loaded from the command line as a TSR, either as a full 
   driver or a limited function driver. When loaded from the command
   line, it can be uninstalled.

2. NNANSI is now DESQVIEW aware when loaded as a limited function driver.

3. Additional EGA/VGA graphics adapters supported.

4. Bug when used with DOORWAY or Zortech ZWB has been fixed.

5. Some code improvements.


*********INTRODUCTION

NNANSI.COM (version 1/92) is an improved version of NANSI.SYS
(version 2.2), by Daniel Kegel, which is in turn such an improvement
over ANSI.SYS that *no one* should be without one of these.

If you are using ANSI.SYS, be aware that either of these drivers
will offer greatly improved performance and functionality over
your current driver. Current users of NANSI.SYS with EGA or VGA
displays (and other enhanced ANSI.SYS drivers) will notice still
greater performance and functionality in NNANSI.SYS.

Even if you don't use an ANSI.SYS driver, you will achieve major 
performance benefits. (Note that there will be no performance
benefits for programs that write directly to the display).


A short list of improvements of NANSI.SYS (version 3.0) over
ANSI.SYS: 

1. Intrinsic 43 or 50 line support (MS-DOS 4.0 now has this).

2. Some additional text mode escape sequences: Insert Lines,
        Delete Lines, Insert Characters, Delete Characters.

3. Greater to *much* greater performance.

4. Supports higher resolutions, both text and graphic modes.

5. Graphic mode cursor


A short list of improvements of NNANSI.COM (version 1/92) over
NANSI.SYS:

1. Additional escape sequences: erase to start/end of display,
        insert/delete lines in graphic modes, added Set Graphic
        Rendition codes (and properly working reverse video,
	underline, and invisible modes).

2. Graphic cursor support is better, and can be disabled.

3. Intrinsic support for both 43 and 50 line modes on a VGA. The
	prompt command can be used to maintain 43 or 50 line display
	modes. 40 column support for 43 and 50 line modes.

4. Faster text mode performance; *much* faster scrolling
        (when in "fast mode").

5. Much faster performance in 640x350 to 800x600 16 color
        graphic modes. Every ANSI control sequence (except
        insert/delete characters and blink) work in these modes
        as well.

6. Readily configured for enhanced graphic and text modes of
        various display cards. Support for several popular cards
        are provided.

7. Blink in 16 color graphics modes (up to 800x600) will exclusive-OR
	characters.

8. Support for MS-DOS V4.0 and later MODE commands, and properly
	clears the display in enhanced modes using command.com's CLS.


9. Driver can be loaded as TSR from the command line.

10. Desqview aware.

On the other hand, NANSI is smaller, and works with MDA as distributed.



**********************LICENSE REQUIREMENTS

Daniel Kegel is the author of NANSI.SYS, of which this is a
derived work. I, Tom Almy, think enough of his efforts and
programming skills that I used NANSI.SYS as a base for
NNANSI.COM (version 2.2 came with sources and free distribution
for personal or educational use, but prohibits commercial use).
I have an agreement with Mr.  Kegel to license NNANSI.COM in
accordance with his newest NANSI.SYS license arrangement:

"If you use this program for education or at home, you are
encouraged to send a US$10 donation to the author.  If you use
it for business purposes, you are required to purchase a
right-to-use license by sending US$10 to the author."

Send contributions/user fees to:

        Daniel Kegel
        535 E. Mendocino St
        Altadena, CA  91001

You can also reach him at his internet address:

dank@blacks.jpl.nasa.gov


Everyone wins with this arrangement!

* Commercial users can now legally use NNANSI.COM

* Personal users can show their gratitude.

* Daniel Kegel can make a little money for his efforts.

* I won't feel guilty for "ripping off" his work.


I place no restrictions on my modifications to NANSI.SYS. I
neither request nor will I accept any contributions for my work
on this program. I made these modifications as part of an effort
to understand the workings of DOS device drivers and the EGA/VGA
display. 

On the other hand, I do like to hear from users, satisfied or
(even) not satisfied. 

>>>>Please, if you have problems, check the PROBLEMS section of this
document before contacting me. Greater than 90% of the problem
reports I receive are answered in this section.<<<<

My address is:

        toma@sail.labs.tek.com        (Internet)

or

        Tom Almy
        17830 SW Shasta Trail
        Tualatin, OR 97062

if you must use the postal service. Enclose a stamped, self-
addressed envelope if you desire a reply.



*********DISTRIBUTED FILES

The distribution has the following files:

        nnansi.com      - Driver, with compilation options set as shown
                        - in the file CONFIG.INC
        nnansi.doc      - this file
	howto.doc	- explaination about the different ways to
			  write to the display
        gcon.bat        - turns graphic cursor on
        gcoff.bat       - turns graphic cursor off
        fast.bat        - turns fast mode on
        slow.bat        - turns fast mode off
	biosw.bat	- turns ANSI bios write_tty on
	nobiosw.bat	- turns ANSI bios write_tty off
	25.bat		- set 80x25 text mode
	43.bat		- set 80x43 text mode
	50.bat		- set 80x50 text mode (VGA only)
	run.bat		- load NNANSI TSR as full function driver
	norun.bat	- unload NNANSI TSR when loaded as full
			  function driver

	dtest.exe	- Performance testing program for ANSI drivers
	stat.com	- Print out information about display status

        makefile        - for Don Kneller's NDMAKE
        nnansi.asm      - The source file
	config.inc	- Configuration selections (part of source)
	drivers.inc	- Display specific macros (part of source)



*********INSTALLATION

NOTE: If you have an MDA (Monochrome or Hercules display adapter)
you will need to reassemble NNANSI first. You will probably want
to reassemble to configure for your specific display card (if it is
an "Enhanced" card), will not be using Desqview, are using a DOS
prior to version 4.0, or otherwise want other defaults.

NNANSI installs just like ANSI.SYS (or NANSI.SYS), it is a device
driver that you specify in your CONFIG.SYS file:

        DEVICE=NNANSI.COM

If you are using code pages, place this command before the 
DEVICE=DISPLAY.SYS command, otherwise code pages will not work.

You can also load NNANSI as a TSR (Terminate and Stay Resident)
program instead. To do this, add the following lines to your
AUTOEXEC.BAT file:

	NNANSI D
	CTTY CON

If you wish to load the driver as a TSR in Desqview or Windows, 
see the section on "NNANSI as a TSR". You cannot use the D option,
and the CTTY command is not needed but the driver will have limited
features.

If NNANSI is the last TSR loaded, it can then be removed. See the
section "NNANSI as a TSR" for the special technique necessary to
remove NNANSI.

For optimum performance, run fast.bat and biosw.bat, but if
applications have trouble with either of these, you will have to
revert back to slower operating modes (read section "FAST MODE").

While the supplied compiled driver is suitable for most
installations, you can get better results by customizing the driver
for your display card. To do this you will need an assembler, such as
Borland Turbo Assembler, a text editor, and (optionally) Don
Kneller's NDMAKE program. I understand that Borland's MAKE will also
work.

Some people have asked why I don't have command line options for
the driver or a separate configuring program but require the user to
use an assembler. The reasons:

1. These make the driver larger and possibly slower than it needs to be.
   If you insist on a full-featured display driver try FANSI-CONSOLE.
2. I feel that users who are sophisticated enough to be able to utilize
   NNANSI either have an assembler or have access to one. This is not
   a program for novices.  
3. I'm lazy. I'm not interested. I've got other things to do (which pay).

All options are specified in the file CONFIG.INC. Edit that
file and make changes as appropriate. These descriptions assume
the initial default settings:

VGA     (TRUE)
        If you have an EGA display, set this to FALSE. You might
        also want to set this to FALSE if you have a VGA and are
        used to the ESC [=43h sequence supplying 50 line mode.

EGA     (TRUE)
        If you have a VGA, set this to FALSE.

TSR	(set on tasm command line)
	If TRUE, compiles TSR/DRIVER COM file version, otherwise compiles 
	DRIVER only, SYS file version.

DESQVIEW (TRUE)
	If TRUE, and TSR is TRUE, compiles DESQVIEW awareness code.
	If you don't intend to use DESQVIEW you should set this to
	FALSE.

VESA	(FALSE)
	Set TRUE if you have a VESA compatible display card BIOS.
	You will also need to have a particular display specified
	for best results. VESA has been successfully tested with
	a Diamond Speedstar card (TSENG4000 set TRUE) and using
	Diamond's VESA BIOS extension. Best results should be
	obtainable for systems having a built-in VESA BIOS (do any
	exist???).

VEGA, PARADISE, STBVGA...  (all FALSE)
        Set only one of these TRUE to match your enhanced
        EGA/VGA display card. If you have a card not on the list
        and experience problems with either blotches in enhanced
        text mode or poor performance (unsettable background
        colors is a clue) in graphics modes CONTACT THE AUTHOR.

BAD_ERASE
	Set to true if erase to end of line and erase to start/end of
        screen erase the wrong portion of the display

MONO	(FALSE)
	Must be TRUE if you have a Monochrome Display Adapter (MDA)
	or Hercules card either as your sole display or in addition
	to a color display controller. If you don't, leave this FALSE
	as it both hurts performance and enlarges the driver. You cannot
	use an MDA with Desqview and NNANSI at the same time.

cheap_pc (TRUE)
    	Set to FALSE for "PC/AT" and "PS/2" class machines which
	have 80186 or greater processors.

key_redef (FALSE)
        Set to TRUE if you use key redefinition. There are
        Trojan Horse programs that take advantage of this
        feature, and most people don't use it anyway, so the
        default is FALSE.

init_buffer_size (256)
        Enlarge if you use key redefinition and don't have
        enough room.

quick_char (TRUE)
        Faster graphics display in 16 color modes, at cost of
	much extra code since this involves added display
	routines. Must be TRUE if gbackground is also TRUE.

fast29  (TRUE)
        Makes int29 display calls (used by DOS) 15% faster at a
        cost of about 100 bytes.

bios_write_tty (TRUE)
        The write tty BIOS call is taken over. It will now
        perform faster and understand ANSI escape sequences. This
	latter feature can be a mixed blessing. This feature can be
	disabled at runtime if it is assembled in.

gbackground (TRUE)
        Enables setting of non-black background color in 16 color
	graphic modes (640x350 to 800x600 resolutions). If set to
	TRUE, quick_char must also be set to TRUE. If this feature is
	not desired, it is possible (depending on the system) to get
	greater performance by defining both gbackground and
	quick_char FALSE. This will also save quite a bit of
	code. Experiment and see for yourself.

dos4 (TRUE)
        Under MS/PC DOS version 4.0 (and 5.0) allows command.com and
	mode.com to recognize NNANSI as an ANSI driver. If you are
	using older DOS versions, you can define this to be FALSE.

initgc  (FALSE)
        Graphic mode cursor is initially off. You can turn it on/off
	with a control sequence.

initfast (FALSE)
        Fast scroll mode is initially off. This also means that
        multiple page support is initially on. You can turn it on/off
	with a control sequence, and there are other work-arounds as
	well.

initbiosw (FALSE)
	ANSI bios write_tty is initially off. You can turn it on/off
	with a control sequence.


You can then either use the supplied makefile to generate a new
nnansi.sys/nnansi.com or assemble manually as shown (Borland tools
illustrated): 

tasm /m5 /DTSR=0 nnansi          (Use /m5 for version 2.0 or later)
tlink nnansi,nnansi.sys/m/t	 (generates nnansi.sys for config.sys)

tasm /m5 /DTSR=1 nnansi
tlink nnansi,nnansi.bin/m/t	(generates nnansi.com for config.sys
rename nnansi.bin nnansi.com     or TSR use)

The .sys driver offers no advantages other than it takes less memory
while loading (this might be a consideration with some high memory
management programs). For this reason, a .sys version is no longer
distributed.

NOTE FOR MICROSOFT MASM USERS:

With the Microsoft assembler, you will need to make some changes to
the source to avoid the branch out of range errors, and you will need
to use the exe2bin program to convert the linker generated exe file
into a binary image file, which you then have to rename to
NNANSI.SYS or NNANSI.COM.

To correct the branch out of range, you will need to replace the conditional
branch with an conditional branch of the opposite sense around an
unconditional branch to the same destination. Example:

	jne	foo	; original statement, now "out of range"

becomes:

	je	new_label
	jmp	foo
new_label:



**************NNANSI AS A TSR**

NNANSI can now be loaded as a TSR in two modes, limited and full. If
you intend to use NNANSI as a TSR, such as in a Desqview window, or
for temporary use, please read this section carefully.


To load NNANSI in full driver mode, execute the following two commands
(or execute run.bat):

nnansi d
ctty con

This will load the driver such as it runs identically to NNANSI loaded
as a driver in CONFIG.SYS. This means that not only does it take control
of several interrupt vectors, the driver is also linked into the DOS
driver chain. The CTTY command is necessary to force command.com to 
"reopen" its console interface to use the NNANSI driver.

This method must not be used within a multitasking environment such
as Microsoft Windows or Desqview, because the relinking of the driver
chain corrupts system integrity. However it may be used to load
NNANSI before running Windows. In the Desqview case, a batch file can
be used to unload NNANSI, run Desqview, and then reload NNANSI when
finished.

Within each DOS window in Windows or Desqview, the limited version of the
NNANSI TSR can be loaded (described below). The copy of NNANSI should
be unloaded before closing the DOS window.

NNANSI in full driver mode can be unloaded using the following procedure
providing it is the last TSR loaded, you are not "shelled out" of a program,
are running the same instance of COMMAND.COM, and did not load NNANSI
"high" using QEMM, 386/MAX, or DOS 5.0. From a batch file, execute:

@echo off
nnansi u
ctty con

The ctty command must be executed immediately after the NNANSI command,
otherwise the system may "crash". The batch file norun.bat is provided
to unload NNANSI.

Note that full driver mode NANNSI must be uninstalled using NNANSI, and
not with a TSR management program. Such programs are incapable of
unchaining NNANSI from the device driver list.

--------------------

NNANSI also has a limited TSR mode. In this mode the driver is not
linked into the DOS driver chain. To load NNANSI in limited mode execute:

nnansi

In limited mode the device status report will not function, nor will 
keyboard key reassignment. Also the performance improvement for RAW mode
(which gives NNANSI its greatest performance) will not be available.

You can unload NNANSI which has been loaded in limited mode by executing:

nnansi u


The limited TSR mode driver can be used in a Microsoft Windows or Desqview
window without problems. You can also uninstall the limited mode driver
with a TSR management program.



**************HOW MUCH PERFORMANCE IMPROVEMENT IS THERE?

I have performed considerable testing on an EVEREX 25Mhz 80386
machine with a Video 7 (Headland) Fastwrite VGA display controller
(and its BIOS), under both DOS 3.3 and 4.0. Your results will
probably vary, and BIOS performance without NNANSI will also improve
if the EGA/VGA BIOS is copied to RAM as supported by some vendors and
also possible with QEMM or 386/MAX on 80386 based systems.

Performance is proportional to roughly independent factors, writing
speed and scrolling speed. Writing speed is the rate at which
characters can be drawn on the display without the display scrolling.
Scrolling speed is the rate at which the display can scroll (no
new characters are drawn). Writing speed tends to be independent of
display mode (except graphic modes are slower), while scrolling speed
tends to be proportional to the number of character positions on the
display (except for NNANSI fast mode, which is independent of screen
size). 

When using ANSI.SYS rather than no driver at all, there is roughly a
2.3x degradation in performance for writing. Scrolling performance
improves 44% when DOS 4.0 ANSI driver is used, but remains unchanged
with the DOS 3.3 driver.

Compared to no driver, NANSI.SYS (3.0) is 3x to 3.5x faster for
writing, and is roughly 45x faster when writing using DOS in RAW
mode. It is roughly 2x faster scrolling.

Compared to the no driver or other ANSI drivers, NNANSI is 4x faster
in BIOS TTY write calls. 

Compared to NANSI.SYS it is 2x faster in INT29 calls, 73% faster in
DOS write calls, but there is no speedup in RAW mode. When fast mode
is used, scrolling is 15x to 25x faster.

This means that text mode programs that take advantage of RAW
mode and buffering can display 100 times faster with NNANSI (and
without scrolling, NANSI) over ANSI.SYS. It works out to about
420,000 characters per second with my fast machine.

NNANSI also has speedups for 16 color graphic modes with resolutions
between 640x350 and 800x600. With the graphic cursor turned on, the
TTY BIOS call is about 10% slower than the standard BIOS call (which
doesn't display a cursor), but other output calls are 2.5x to 3.5x
faster than that of NANSI.SYS. Turning the graphics cursor off
roughly doubles the writing speed of all modes but RAW.



**************FAST MODE  **READ THIS!!**

To get maximum speed, NNANSI has what I call Fast Mode. In text
mode, there is more display memory than there are character on
the display. Normally, the BIOS supports display "pages" that you
can switch among. Changing the display page changes the region
of the display memory that is sent to the display. Fast Mode
uses the same technique (changing the starting location of the
viewable memory region) to scroll the display upwards. 

Programs that make use of multiple display pages and scroll the
display require that fast mode be turned off. Many debugging programs
use two pages to maintain separate debugging and application
displays. Some of the programs will still work in fast mode if they
have a "swap screens" option ("-ds" for Borland Turbo Debugger, for
instance).

A number of programs that directly access the display don't work if
starting address has changed. These programs may not work properly in
fast mode (or for that matter in display pages other than the first).
NNANSI tries its best to work with these programs by resetting the
display start location if any program does the "get display mode" or
"scroll/clear display" BIOS calls. These calls are typically done by
potentially offending applications when they start. As long as the
display never scrolls under NNANSI control everything will work fine.
A typical problem occurs in programs that have DOS or "shell escape"
commands. If the DOS sub-shell (invocation of COMMAND.COM) causes the
display to scroll, then upon exiting the sub-shell the display will
be ruined. The solution to this problem (other than not using fast
mode) is to clear the screen just before exiting the sub-shell.

Please note that Windows 3.0 in Enhanced Mode has problems with DOS
applications running in a window using NNANSI's fast mode. You will
need to run Windows with NNANSI in slow mode.

Some offending programs can be "fixed" by invoking them from a
batch file (or alias if you use MKS Toolkit, 4DOS, ANARKEY...)
which first clears the screen. Or you can use a batch file which
turns off fast mode, then turn fast mode back on again after
program execution. Example:

echo ^[[=98l
offendingpgm %1 %2 %3 %4 %5
echo ^[[=98h

Where "^[" is the escape (code 27) character.

Batch programs have been provided to enable (fast.bat) and disable
(slow.bat) fast mode.


NNANSI can also speed up programs that use BIOS calls for writing
characters. NNANSI adds the ANSI features to such calls, which can
cause problems with some applications. This feature is turned off by
default, but can be enabled via an ANSI sequence or by executing the
supplied batch file biosw.bat. The feature can be disabled with
nobiosw.bat.


******************WRITING PROGRAMS FOR BEST PERFORMANCE


To get best performance in programs you write, you must put the
display in RAW mode, and buffer output.

In assembler, you can set raw mode with the following sequence
(adapt this for other languages):

        mov     ax,4400h        ; get device status
        mov     bx, 1           ; of device 1 (standard output)
        int     21h
        xor     dh, dh          ; clear upper byte
        mov     saved_state, dx ; save it for later
        mov     ax, 4401h       ; set new status
        or      dl, 20h         ; with raw bit set
        int     21h

Reset raw mode before terminating the application:

        mov     ax, 4401h       ; set status to original values
        mov     bx, 1
        mov     dx, saved_state
        int     21h

There is a fixed amount of overhead (and it is high) for each
DOS call. Therefore you should buffer up write requests into a
single call. With the C language, you can use the setvbuf() call
to set a large buffer size.

Even if you don't follow this advice, you will get a major
performance improvement over ANSI.SYS (or no device driver at
all). 

Programs using RAW mode and buffering easily beat the
performance of the supposedly high speed console drivers
supplied in Turbo C and Microsoft C. And by using ANSI control
sequences your programs can be made portable to other systems!


*****************TYPICAL PROBLEMS


ALSO READ THE SECTION "FAST MODE"


SYSTEM CRASHES UPON BOOTING, OR DISPLAY BADLY CORRUPTED EVEN IN
STANDARD 80x25 TEXT MODE.

You have assembled NNANSI with cheap_pc set to FALSE on an 8088 based
system, or you are trying to use NNANSI on an MDA or Hercules
Graphics equipped system without reassembling with MONO equal TRUE.


ON A VGA, SETTING 43 LINE MODE GIVES 43 LINES, WHEN IT GAVE 50
WITH AN OLDER VERSION OF NNANSI.SYS OR WITH NANSI.SYS

This is correct. There is now a new setting for 50 line mode. If
you require that 43 line mode give 50 lines, recompile the
system with VGA set to FALSE.


I USED AN EARLIER VERSION OF NNANSI, AND NOW I FIND THAT NNANSI IS
MUCH SLOWER THAN BEFORE

The defaults have changed. You now have to run FAST and BIOSW for
fastest operation.


I USED AN EARLIER VERSION OF NNANSI, AND NOW FIND MY DISPLAY 
INEXPLICABLY CHANGING MODES

The commands for graphic cursor, fast mode, and line wrap are 
more restrictive. Use the new batch files for fast, slow, gcon, and
gcoff, and change any code of your own appropriately.


ON A VGA, SETTING 50 LINE MODE CAUSES VERY STRANGE BEHAVIOR

Two possibilities. Your display adapter is really an EGA, or you
have compiled NNANSI with VGA set to FALSE. In the latter
case, you can get 50 line mode by setting 43 line mode, while in
the former case you can't get 50 line mode at all.


ON A VGA, AFTER LEAVING 43/50 LINE MODE THE CURSOR IS IN THE
MIDDLE OF THE CHARACTER BLOCK

Recompile the driver with EGA set to FALSE.


ON AN EGA, THE CURSOR DISAPPEARS IN 43 LINE MODE WHEN RUNNING
SOME APPLICATIONS

There is nothing you can do, as this is caused by an error in
the design of the EGA BIOS.


IN 43/50 LINE MODE, THE DOS CLS COMMAND ONLY CLEARS THE FIRST 25
LINES OF THE DISPLAY (DOS 4.0)

Reassemble with "dos4 EQU TRUE", as it is in the distribution NNANSI
driver.


DISPLAY SHOWS UGLY BLOCKS AT THE START AND END OF EACH LINE OR
PERFORMANCE SLOWS GREATLY IN EXTENDED (GREATER THAN 80X25) TEXT MODES 

Your display controller sets the display mode byte in the BIOS to
some value other than "3". You can either set the byte (at location
40:49h) back to 3 after setting the display mode, or configure NNANSI
to know about these special modes. This problem is typical for most
cards, it seems. There may already be a proper configuration for your
display in CONFIG.INC. 


DISPLAY IS NOTICEABLY SLOWER WRITING OR CANNOT SWITCH BACKGROUND
COLORS IN EXTENDED (GREATER THAN 640x480, OR 640x350 EGA)
GRAPHIC MODES

In 256 color modes or 1024x768 modes, the background color cannot be
changed. In other modes, you will need to configure NNANSI for your
display card.  Look for a proper configuration in CONFIG.INC.


DISPLAY GOES BLANK WHEN STARTING AN APPLICATION. DISPLAY SHIFTED
PARTLY OFF SCREEN WHEN STARTING AN APPLICATION. DISPLAY
DISAPPEARS DURING EXECUTION OF A APPLICATION.

First try clearing the screen before execution. If that doesn't
work, leave fast mode (see preceding section on FAST MODE).


FUNNY BLOTCHES OCCASIONALLY APPEAR AT VARIOUS POINTS IN A
GRAPHIC APPLICATION

This is the graphics cursor. You can disable it either by
reconfiguring the driver, or by sending the control sequence to
disable the graphics cursor. A batch file, GCOFF.BAT, has been 
provided for this purpose.


TEXT DISPLAY IS MESSED UP, POSSIBLY CHANGING COLORS IN UNUSUAL
PLACES. 

This has been observed with programs using the BIOS for writing
to the display, and not expecting the ANSI translation (or the
conversion of the TAB character into spaces instead of a special
graphic). Execute NOBIOSW.BAT to turn the ANSI translation off
for these programs.  PROCOMM and Typing Tutor IV have this problem.


CANNOT SET VESA STANDARD EXTENDED DISPLAY MODES

You must compile the driver with VESA defined as TRUE, and then
must request a mode 128 less than that really desired.



*****************NNANSI COMMAND SEQUENCES

Command sequences start with the escape character (code 27,
referred to in this section as ESC). NNANSI buffers up the
sequence until it has a command to execute. If the sequence is
not a valid command, the entire sequence is passed to the display.

All command sequences have the following format:

   ESC [ param1; param2; ...; paramN cmdchar

where
       ESC     is the escape character
       [       is the left bracket character.
       param   are ascii decimal numbers or quoted strings.
       cmdchar is the command character

No spaces are allowed within the command.

Unless otherwise specified, an argment "0" is interpreted to be "1".
Omitted parameters default to "1", with the exception of the ED
(erase in display) command and the SGR command where the default is
zero. For example, both ESC[1;1H and ESC[H send the cursor to the
home position (1,1), which is the upper left. The ESC[m command will
reset the normal character attributes.

Quoted strings may use either single or double quote characters
as delimiters. Each character inside the quoted string is
converted to a numeric parameter. Quoted strings are only useful
for the questionable Keyboard Key Reassignment command.



                   CURSOR POSITIONING COMMANDS

NAME    DESCRIPTION             COMMAND
CUP     cursor position         ESC[y;xH
HVP     cursor position         ESC[y;xf

        Either of these set the cursor position. CUP should be
        used since HVP has other connotations not implemented in
        NNANSI (or ANSI.SYS). The origin (in the upper left
        corner) is x=1, y=1.

CUU     cursor up               ESC[nA
CUD     cursor down             ESC[nB
        n = # of lines to move. You cannot move beyond the edge
        of the display.

CUF     cursor forward          ESC[nC
CUB     cursor backward         ESC[nD
        n = # of columns to move. You cannot move beyond the
        edge of the display.

DSR     Device Status Report    ESC[6n
        Find out cursor position. The driver responds with a
        cursor position report (CPR) of the form "ESC[y;xR"
        followed by a carriage return, as if typed at the
        keyboard. 

SCP     Save Cursor Position    ESC[s
RCP     Restore Cursor Position ESC[u
        Cannot be nested.




                        EDITING COMMANDS

NAME    DESCRIPTION             COMMAND
ED      Erase in Display        ESC[nJ
        n=0 or missing: Erase to end of screen (not in ANSI.SYS)
        n=1: erase to start of screen (not in ANSI.SYS)
        n=2: erase entire screen, and home cursor
        Note: there is a bug in ANSI.SYS that performs function
        2 regardless of the value of n. This bug is not repeated
        in NNANSI because of the extra functionality provided.
	Everybody's "ANSI.SYS" homes the cursor, which the standard
	does not call for, and NNANSI keeps up that tradition.

EL      Erase in Line           ESC[K
        Erases from cursor to end of line

IL      Insert Lines            ESC[nL 
        Inserts n blank lines at the line containing the cursor.
        While the cursor line moves down, the cursor position is
        unchanged. Not in ANSI.SYS. 

DL      Delete Lines            ESC[nM  
        Deletes n lines, starting at the line containing the
        cursor. The cursor is not moved. Not in ANSI.SYS
        
ICH     Insert Characters       ESC[n@  
        Inserts n blank characters at cursor position. The
        cursor does not move. Not in ANSI.SYS. Does not work in
        graphic modes.

DCH     Delete Characters       ESC[nP  
        Deletes n characters at the cursor. The cursor does not
        move. Not in ANSI.SYS. Does not work in graphic modes.




                  SET GRAPHIC RENDITION COMMAND

NAME    DESCRIPTION             COMMAND
SGR     Set Graphics Rendition  ESC[n;n;...nm

The Set Graphics Rendition command is used to select foreground
and background colors or attributes.  When you use multiple
parameters, they are executed in sequence, and the effects are
cumulative.  You can set all colors and attributes in any text
mode.  In 16 color graphic modes between 640x350 and 800x600
pixels you can set all colors and attributes except for blink.
"Blink" becomes exclusive-OR character mode (very useful!).  You
can set foreground colors, blink, and bold, only, in other 16 color
modes.  Setting colors does not work correctly for other color
modes -- make sure display is in the normal white on black mode
before changing to these modes.

When a Monochrome Display Adapter (MDA) is used, foreground and
background colors other than black and white should not be set. The
MDA also ignores the underscore and bold attributes while in reverse
video.


Code          Value
0               All attributes off (normal white on black)
1               Bold
2               Dim (not Bold)
4               Underscore (emulated via blue foreground in CGA/EGA/VGA)
5               Blink (or EXOR -- see above)
7               Reverse Video (improved implementation over ANSI)
8               Invisible (improved operation -- foreground color
		forced to background color, other attributes suppressed)
22              Cancel Bold
24              Cancel Underline (white foreground)
25              Cancel Blink
27              Cancel Reverse video
28		Cancel Invisible
30-37           foreground black/red/green/yellow/blue/magenta/cyan/white
40-47           background black/red/green/yellow/blue/magenta/cyan/white

Codes 2, 22, 24, 25, 27, and 28 are not in ANSI.SYS.



                    SET DISPLAY MODE COMMAND

NAME    DESCRIPTION             COMMAND
SM      Set Mode                ESC[=nh
RM      Reset Mode              ESC[=nl

The set and reset mode commands are identical in this context.

The BIOS supports many video modes. The code given for the AL
register to the BIOS set mode command is used as the parameter to
this set mode command. That means that extended modes that are
settable in this manner can use this command. As an example, with the
Diamond Speedstar, the command ESC[=34h will set 132 column by 44 row
mode. Display cards that use other techniques to change display mode
are left as an exercise to the user, but if you can get the card into
an extended mode, NNANSI can used it (possibly with a configuration
change, though).

VESA Display Cards: To set VESA modes, select a mode 128 less than the
desired mode number. For instance, for 132x43 text mode, select mode
138 (rather than 266). 

Monochrome Display Adapter (MDA): These commands are ignored when the
MDA is in use.

In the graphic modes, the cursor can be simulated with a blob
(the character produced with character code 22).

Mode Code       Value
    0,1         text 40x25 16 color
    2,3         text 80x25 16 color
    4,5         graphics 320x200 4 color
    6           graphics 640x200 Black & White
    7		cursor wrap (see SET DISPLAY ATTRIBUTES, below)
    13          graphics 320x200 16 color, VGA only
    14          graphics 640x200 16 color, VGA only
    16          graphics 640x350 16 color, VGA only
    17          graphics 640x480 Black & White, VGA only
    18          graphics 640x480 16 color, VGA only
    19          graphics 300x200 256 color, VGA only
    43          43 line mode for modes 0-3 (Not in ANSI.SYS)
    50          50 line mode for modes 0-3 (VGA only, not in
                ANSI.SYS)
    n           When not in above list, sets mode n. (Not in
                ANSI.SYS) 


The modes marked as VGA only are not supported by ANSI.SYS
that comes with version 3.3 MS-DOS or earlier.

The 43 line and 50 line support reprograms the display to use smaller
characters. You must be in mode 3 (80x25) or 1 (40x25) for this
command to work. Set any other mode to leave 43/50 line mode.

Unlike earlier versions of NNANSI, and NANSI.SYS, setting 43 line
mode on a VGA will give 43 (not 50) lines. You must use the explicit
50 line mode command to get 50 lines on a VGA. If you would rather
have compatibility with these other, earlier drivers, recompile the
driver with VGA set to FALSE.

You can have 43 line mode automatically selected at the DOS
prompt by issuing this command:

	prompt $e[=43h$p$g

Under MS/PC DOS Version 4.0 (or later?), the number of lines can
also be set using the MODE command. For instance, to set 43 line mode
under DOS 4.0, issue the command:

	mode con lines=43


Note that in older versions of NNANSI, and NANSI.SYS, the use of
the = character in the command was optional, and a ? could be used
instead. That is not true for this version.


                     SET DISPLAY ATTRIBUTES

NAME    DESCRIPTION             COMMAND
SM      Set Mode                ESC[?nh
RM      Reset Mode              ESC[?nl

Valid attributes that can be set and reset:

7       Cursor Wrap     When false, cursor sticks at end of
                        line, rather than wrapping

97	ANSI Bios	When true, calls of the bios write_tty
                        function will be processed by NNANSI,
			allowing processing of ANSI escape sequences.
			When false, processing will not occur. Some
			programs will not work properly if set to true.

98      Fast Scroll     When true (fast mode) the starting
                        display location is changed for fast
                        scrolling, which can cause problems for
                        some programs. When false, the starting
                        location does not change and the
                        multi-page support is enabled.

99      Graphic cursor  When true the cursor is displayed in
                        graphic modes. Some programs produce ghost
			cursors when set to true.

Batch files are supplied to change attributes 97, 98, and 99.

Note that the Fast Scroll attribute does not apply to the Monochrome
Display Adapter (MDA). Also note that in older versions of
NNANSI, and NANSI.SYS, the use of the ? character in the command
was optional, and an = could be used instead. That is not true for
this version. Because some Microsoft documentation claims that the
= character can be used for Cursor Wrap, NNANSI still supports that
bug.



                  KEYBOARD REASSIGNMENT COMMAND

This command is absent by default. You must recompile to enable
this command. Use of this feature is not recommended.
        
NAME    DESCRIPTION             COMMAND
IBMKKR  Keyboard Key Reassign   ESC[param;param;...;param p

If no parameters are given, all keys are reset. This is not true
for ANSI.SYS.

The first parameter is the key to reassign. IBM function keys
take the first two parameters, where the first parameter is 0.
The remaining parameters are the keystrokes to substitute. F11
and F12 are not supported. Normally a string is used rather than
numeric arguments.

******************************THE END****************************
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.25 for 5.25" or $3.75 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $12.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine )
(also The Encyclopedia of Shareware, and 5 free disks )

The Encyclopedia of Shareware special price at         $14.95  ______

The Essential Home & Business Collection for           $59.00  ______

*** PC-SIG Library on CD-ROM 11th Edition  ***         $159.00 ______
              NEW LOWER PRICE!

Upgrade to the 11th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $85.00  ______

Upgrade from ANY other shareware CD-ROM just           $99.00  ______

                                                    Subtotal   ______

If you want 3-1/2 inch disks please add .25 cents per disk     ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2316





                                *****




              TO PRINT THIS ORDER FORM, PRESS ANY KEY AND
              THEN "Quit" ONCE TO RETURN TO THE MAIN MENU.
                     SELECT "Print Reply Form."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3049

     Volume in drive A has no label
     Directory of A:\

    NNANS192 ZIP     67648   2-04-92  10:37a
    FILE3049 TXT      1777   6-26-92   5:23p
    CDROM    TXT      3972   6-24-92   1:25p
    SHAREMAG TXT      1837   1-21-92   6:11a
    PCSIG    TXT      2335   1-21-92   6:09a
    GO       EXE     26022   1-10-92  12:14p
    GO-FORM  DAT      3109   6-29-92   3:26p
    GO-STRT  DAT       535   6-26-92  12:12a
    PKUNZIP  EXE     23528   3-15-90   1:10a
    SIGORDER TXT      3332   6-25-92   2:28p
           10 file(s)     134095 bytes
                           23552 bytes free
