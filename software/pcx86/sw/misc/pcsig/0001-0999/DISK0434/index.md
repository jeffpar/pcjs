---
layout: page
title: "PC-SIG Diskette Library (Disk #434)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0434/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0434"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "KERMIT ASM MODULES 2 OF 2 (ALSO 433)"

    KERMIT is a communications system that allows different types of
    computers to exchange information.  The files on this disk are used by
    smaller computers so that they may communicate with an IBM
    minicomputer or mainframe computer.
    
    System Requirements:  128K, one disk drive, and monochrome display
    
    How to Start:  To view the documentation for Disks No. 433 and 434,
    place Disk No. 433 in your disk drive and enter TYPE MSXSYS.DOC.  To
    run any program file, type its name and press <ENTER>.
    
    File Descriptions:
    The First Disk Contains:
    MSHP150  EXE  Hewlett-Packard 150
    MSGENER  EXE  Generic MS-DOS KERMIT.
    MSMKBOO  C    Four-for-Three encoder, DEC-20 specific.
    MSBOOT   FOR  Used on mainframe when downloading KERMIT.
    MSRBBOO  BAS  Used on Rainbow to download KERMIT from mainframe.
    MSRBBOO  HLP  Info on MSRBBOO.BAS.
    MSPCBOOT BAS  Used on PC to download KERMIT from mainframe.
    MSPCTRAN EXE  Compiled version of MSPCTRAN.BAS.
    MSPCTRAN BAS  Converts MSKERMIT.BOO to an executable file.
    MSRBEMAC INI  EMACS function key setup for Kermit-MS/Rainbow.
    MSXSYS   DOC  Description of system dependent modules.
    MSXRB    ASM  DEC Rainbow 100, 100+ module.
    MSXHP150 ASM  Hewlett-Packard 150 module.
    MSXGEN   ASM  Generic MS-DOS KERMIT module.
    MSRB100  EXE  DEC Rainbow 100, 100+
    
    The Second Disk Contains:
    MSAPC    HLP  Documentation for NEC APC Kermit
    MSAPC    EXE  NEC APC
    MSXTIPRO BWR  Documentation for TI Professional Kermit
    MSXAPC   ASM  NEC APC module
    MSXTEK   ASM  TI Pro Tektronix emulation module
    MSXTIPRO ASM  TI Pro module
    MSTIPRO  EXE  TI Professional
    MSYZ100  ASM  Zenith Z-100 Y-module
    MSXTIPRO BAT  TI Pro assembly/link script
    MSWANG   EXE  Wang PC
    MSXZ100  ASM  Zenith Z-100 X-module
    MSZ100   EXE  Zenith Z-100
    MSZ100   HLP  Documentation for Heath/Zenith Z-100 Kermit
    MSXWNG   ASM  Wang PC module
    MSWANG   EXE  Wang APC
    MSAPC    EXE  NEC APC
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES434.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 434   KERMIT-MS Compatibles, ASM modules II             v1 DS2
-----------------------------------------------------------------------
The KERMIT program is a communications system that allows two different
types of computers to pass information to each other. The files on this
disk are used by non IBM computers so that they may communicate with
an IBM or perhaps a mainframe computer. This disk is in the IBM
MS-DOS format.
 
MSRB100  EXE  DEC Rainbow 100, 100+
MSAPC    HLP  Documentation for NEC APC Kermit
MSAPC    EXE  NEC APC
MSXAPC   ASM  NEC APC module
MSXTIPRO BWR  Documentation for TI Professional Kermit
MSTIPRO  EXE  TI Professional
MSXTIPRO ASM  TI Pro module
MSXTEK   ASM  TI Pro Tektronix emulation module
MSXTIPRO BAT  TI Pro assembly/link script
MSWANG   EXE  Wang PC
MSXWNG   ASM  Wang PC module
MSZ100   HLP  Documentation for Heath/Zenith Z-100 Kermit
MSZ100   EXE  Zenith Z-100
MSXZ100  ASM  Zenith Z-100 X-module
MSYZ100  ASM  Zenith Z-100 Y-module
```
{% endraw %}

## MSXAPC.ASM

{% raw %}
```
; ************ START MSXAPC.ASM ***********************************

; Kermit system dependent module for NEC Advanced Personal Computer (APC)
; Ron Blanford, University of Washington, August 1984

; Modified to get key scan codes directly from fifo buffer in IO.SYS
; This version works with MS-DOS Versions 2.00 (000) and 2.11 (001); it 
; should work with future MS-DOS revisions so long as NECIS maintains
; the configuration table in IO.SYS -  the thing most apt to fail is the 
; key autorepeat because kbrepflg is furthest from a hook in config table.
; If this happens the equate for offset of kbrepflg will need adjusting. 
; Ian Gibbons, University of Hawaii, 10/26/84

; Fixed incorrect timer command port assignment so that program will run
;   under MS-DOS 2.00 as well as 2.11.
; Added autodetermination of color/mono using crttype byte in IO.SYS; this
;   works only under DOS 2.11 (and future above ?)
; IG 10/28/84
; Added direct CRT I/O handling through BIOS in order to increase speed and
;  flexibility of help menus. It gives only an imitation window but it works
;  fairly well.
; IG 10/31/84
; Added simplified mode line data to the [Connecting to host...]" line which
;  has been moved here from MSTERM in order to have more system dependent 
;  control.
; IG 11/4/84
; Make unredefined break/stop key act as a scroll/noscroll key in telnet by
;  sending alternately a ^S and a ^Q.
; IG 11/5/84
; By now code for this MSXAPC module could well be divided into separate
;  transmission and terminal modules, but I don't want to spend more time
;  on it. It's not as readable as it might be, but so far as I know
;  everything works.IG 11/6/84
 
	public	serini, serrst, clrbuf, outchr, coms, vts, dodel,
	public	ctlu, cmblnk, locate, lclini, lclrst, prtchr, dobaud,
	public	discon, clearl, dodisk, getbaud, beep,
	public	count, xofsnt, puthlp, putmod, clrmod, poscur
	public	sendbr, term, machnam, setktab, setkhlp, showkey
	include msdefs.h

false	equ	0
true	equ	1

BIOS	EQU	0DCH		; NEC-APC BIOS interrupt call
fifoclr equ	6		; clears keyboard fifo buffer
crtcmd	equ	7		; Direct CRT I/O command call

; port assignments for 8251 serial controllers

;		Standard interface

mndata	equ	30H		; Data port (read/write)
mnst1a	equ	32H		; Status port (when read)
mncmda	equ	32H		; Command port (when written)
mnst2a	equ	34H		; Alternate status port (when read)
mnmska	equ	34H		; Mask port (when written)
mntdca	equ	36H		; Transmit disable port (write only)

;		Optional (H14) interface

mndatb	equ	31H		; Data port (read/write)
mnst1b	equ	33H		; Status port (when read)
mncmdb	equ	33H		; Command port (when written)
mnst2b	equ	35H		; Alternate status port (when read)
mnmskb	equ	35H		; Mask port (when written)
mntdcb	equ	37H		; Transmit disable port (write only)

; Status bits from mnst1

txrdy	equ	01H		; Bit for output ready.
rxrdy	equ	02H		; Bit for input ready.

; Command values for mncmd

ccmd	equ	37H		; RTS & DTR high, RX & TX enabled, reset ERR
cbrk	equ	08H		; break enabled
cmode	equ	40H		; enable mode reset
mmode	equ	4EH		; 16x rate, 8 data, no parity, 1 stop

; Mask values for mnmsk

txmsk	equ	01H		; disables transmit ready interrupt
rxmsk	equ	02H		; disables receive ready interrupt
tbemsk	equ	04H		; disables transmit buffer empty interrupt


; port assignments for 8253 timers

;		Standard interface

tmdata	equ	2BH		; data port
tmcmda	equ	2FH		; command port  (Was 27H Ian 10/27/84) 

;		Optional (H14) interface

tmdatb	equ	61H		; data port
tmcmdb	equ	67H		; command port

; values for tmcmd which select timer channel and mode

tmsela	equ	76H		; Channel 1, mode 3 (standard port)
tmselb	equ	36H		; Channel 0, mode 3 (optional port)

; Timer information for current port selection

tmrinfo	struc
tmdat	dw	0		; data port
tmcmd	dw	0		; command port
tmsel	db	0		; byte which selects channel and mode
tmrinfo	ends


; port assignments for 8259 interrupt controllers

;		Standard interface

intcmda	equ	20H		; Command port (master controller)
intmska	equ	22H		; Mask port
ictmsk	equ	08H		; Timer interrupt mask (to master)
icsmska	equ	02H		; Standard serial interrupt mask (to master)
icsvcta equ	11H		; Interrupt vector for standard interface

;		Optional (H14) interface

; The interrupt request vector for the optional (H14) serial interface is
; jumper-selectable to any of vectors IR2, IR5, IR8, or IR12.  NEC recommends
; that IR8 be used, so that has been selected as the default here.  To use
; any of the other vectors, set the following conditionals appropriately.
; Only one of the following should be true:

IR2	equ	false		; interrupt vector 2
IR5	equ	false		; interrupt vector 5
IR8	equ	true		; interrupt vector 8
IR12	equ	false		; interrupt vector 12

	IF IR2
intcmdb equ	20H		; Command port (master controller)
intmskb equ	22H		; Mask port
icsmskb equ	04H		; Interrupt mask
icsvctb equ	12H		; Interrupt table index
	ENDIF

	IF IR5
intcmdb equ	20H		; Command port (master controller)
intmskb equ	22H		; Mask port
icsmskb equ	20H		; Interrupt mask
icsvctb equ	15H		; Interrupt table index
	ENDIF

	IF IR8
intcmdb equ	28H		; Command port (slave controller)
intmskb equ	2AH		; Mask port
icsmskb equ	02H		; Interrupt mask
icsvctb equ	19H		; Interrupt table index
	ENDIF

	IF IR12
intcmdb equ	28H		; Command port (slave controller)
intmskb equ	2AH		; Mask port
icsmskb equ	20H		; Interrupt mask
icsvctb equ	1DH		; Interrupt table index
	ENDIF

crtinfo struc		; Structure for color/mono formatting info
nrmseq	db	esc,'[0m$'	; Default
invseq	db	esc,'[7m$000'	; Inverse (extra space for color)
bldseq	db	esc,'[17m$'	; Bold video
nrmcrt	dw	8080H		; Normal data for direct crt i/o
bldcrt	dw	9090H		; Inverse data for direct crt i/o	

crtinfo ends


icEOI	equ	20H		; generic end of interrupt for intcmd
kbfifosiz equ	64		; size of fifo buffer in IO.SYS


; miscellaneous constants

ctrlP	equ	10H		; ^P.
ctrl_q	equ	11H		; ^Q
ctrl_s	equ	13H		; ^S
printkey equ	00FFH		; Scan code of unshifted PRINT key.
brkstp	equ	0096H		; Scan code of unshifted break/stop key.
mntrgh	equ	bufsiz*3/4	; High XON/XOFF trigger = 3/4 of buffer full.

; external variables used:
; drives - # of disk drives on system
; flags - global flags as per flginfo structure defined in pcdefs
; trans - global transmission parameters, trinfo struct defined in pcdefs
; portval - pointer to current portinfo structure (currently either port1
;    or port2)
; port1, port2 - portinfo structures for the corresponding ports

; global variables defined in this module:
; xofsnt, xofrcv - tell whether we saw or sent an xoff.

datas 	segment	public 'datas'
	extrn	drives:byte,flags:byte, trans:byte
	extrn	portval:word, port1:byte, port2:byte

machnam	db	'NEC APC$'
nyimsg	db	cr,lf,'Not implemented$'
badbd	db	cr,lf,'Unimplemented baud rate$'
bdkscn	db	cr,lf,'Unable to install key translate table'
	db	cr,lf,'Possibly incompatible MS-DOS version',cr,lf
	db	cr,lf,'(MS-KERMIT can be used without keyboard translation'
	db	' feature)',cr,lf,'$'
nokbtr	db	cr,lf,'No key translation table is installed$'
prtmsg	db	cr,lf,'You cannot redefine the PRINT key$'
escmsg	db	cr,lf,'You cannot redefine the current CTRL-ESCAPE key$'
hngcfm	db	cr,lf,'Please confirm DISCONNECT command. (Y/N)  $'
dismsg	db	cr,lf,'Disconnecting for 3 seconds',cr,lf,'$'
rcnmsg	db	cr,lf,'Reconnected',cr,lf,'$'
cnmsg	db	cr,lf,'Connecting to host at '
cnmsgb	db	'     '
	db	' baud on port '
cnmsgp	db	' ',cr,lf,'(Type $'
cnmsg1	db	' C  to return to PC)',cr,lf,lf,lf,'$'
crlf	db	cr,lf,'$'
delstr  db      BS,' ',BS,'$'	; Delete string.
clrlin  db      cr,'$'		; Clear line (just the cr part).
ceolseq	db	esc,'[K$'	; Clear to end of line
cpseq	db	esc,'=rc'	; rc replaced by row and column before display
clrseq	db	01EH,01AH,'$'	; Home cursor and clear screen
lstpos	dw	0		; column position for printer echoing

; Storage for color and mono formatting strings

nrmcol	db	esc,'[0m$'
invcol	db	esc,'[3;21m$'	; Yellow with green overline
bldcol	db	esc,'[21m$'	; Yellow
ncrtcol	dw	8080H		; Green
bcrtcol dw	0A0A0H		; Yellow  

;nrmmon	db	esc,'[0m$'
;invmon	db	esc,'[7m$000'	; Inverse video
;bldmon	db	esc,'[17m$'	; Bold video
;ncrtmon	dw	8080H		; Normal green
;bcrtmon dw	9090H		; Inverse video	

formdat	crtinfo <>
formdtl	db	$-formdat

nocur	db	esc,'[>5h$'	; Disable cursor
recur	db	esc,'[>5l$'	; Reenable cursor
storcur	db	esc,'[s$'	; Store cursor position
rstcur	db	esc,'[u$'	; Restore cursor position
upcur	db	esc,'[A$'	; Move cursor up one line
savcur	dw	0 		; storage for cursor position
msglns	db	0		; No of lines in help message
rnoc	dw	0		; Raw NOC for screen write

; Data area for direct CRT I/O

EVEN				; Force alignment to word boundary
dispadr db	2000 dup (0)	; Storage for string data
attradr db	2000 dup (0)	; Storage for attribute data 

; Command block for direct CRT I/O

cmd	db	0		; CRT command number
la	db	0		; Line address   (0-24 binary)
ca	db	0		; Column address (0-79 binary)
noc	dw	0		; Number of chars (0-2000 binary)
dispptr dw	dispadr		; Pointer to string data block
dispseg	dw	datas		;
attrptr dw	attradr		; Pointer to attribute data block
attrseg dw	datas

ourarg	termarg	<>
modem	mdminfo	<mndata,mnst1a,mncmda,0,0,0,0>
timer	tmrinfo	<tmdata,tmcmda,tmsela>

ourflgs	db	0		; Flags for telnet options
fprint	equ	80H		;   echo screen output to printer
movcur	equ	40H		;   cursor moved - needs resetting
kbtrflg	equ	20H		;   local flag showing if kb trans.is enabled
autorepflg equ	10H		;   is this an autorepeat cycle 
inited	equ	8H		;   are we initiating first call to term
tlnxof	equ	4H		;   have we sent a ^S in telnet with brk/stp
savscn	dw	0		; save last key-in for auto repeat if needed
escscan dw	0		; scan code for current ctrl-escape key

oldsera	dw	?		; old serial handler for standard port
oldsega	dw	?		; segment of above
oldmska	db	?		; old interrupt controller mask
portina	db	0		; Has comm port been initialized.

oldserb	dw	?		; old serial handler for optional port
oldsegb	dw	?		; segment of same.
oldmskb	db	?		; old interrupt controller mask
portinb	db	0		; Has comm port been initialized.

dosseg	dw	40H		; Segment  to read IO.SYS
zero	dw	0		; Use to load segment regs for low core

; Space for addresses in IO.SYS to be calculated at run time in 'lclini'

configptr equ	3H		; Offset of pointer to base of config table
configbas dw	0		; base address of config table in IO.SYS
fifobas dw	0		; equ	0A62H for DOS 2.11

; offsets from configbas
statlnptr equ	0CH
kbinptr   equ	2CH		; kbin addr = base of fifodata area (fifobas)
crtptr    equ	48H

; offsets from fifobas
kbin	equ	0			; fifobas
kbout	equ	1			; fifobas + 1
kbfifo	equ	2			; fifobas + 2
kbrepflg equ	0D9H			; fifobas + 0D9H

xofsnt	db	0		; Say if we sent an XOFF.
xofrcv	db	0		; Say if we received an XOFF.

; variables for serial interrupt handler
source	db	bufsiz DUP (?)	; Buffer for data from port.
srcpnt	dw	0		; Pointer in buffer (DI).
count	dw	0		; Number of chars in int buffer.
savesi	dw	0		; Save SI register here.
	dw	80 DUP (?)	; local stack for interrupt processing
mnstk	dw	?
mnsp	dw	?		; remote stack info
mnsseg	dw	?

shkbuf	db	300 dup (?)	; room to display key definition
shkmsg	db	'  Scan code: '
shkmln	equ	$-shkmsg
shkms1	db	cr,lf,'  Definition: '
shkm1ln	equ	$-shkms1

setktab	db	24
	mkeyw	'BACKSPACE',9CH
	mkeyw	'F1',80H
	mkeyw	'F2',81H
	mkeyw	'F3',82H
	mkeyw	'F4',83H
	mkeyw	'F5',84H
	mkeyw	'F6',85H
	mkeyw	'F7',86H
	mkeyw	'F8',87H
	mkeyw	'F9',88H
	mkeyw	'F10',89H
	mkeyw	'F11',8AH
	mkeyw	'F12',8BH
	mkeyw	'F13',8CH
	mkeyw	'F14',8DH
	mkeyw	'F15',8EH
	mkeyw	'F16',8FH
	mkeyw	'F17',90H
	mkeyw	'F18',91H
	mkeyw	'F19',92H
	mkeyw	'F20',93H
	mkeyw	'F21',94H
	mkeyw	'F22',95H
	mkeyw	'SCAN',-1

setkhlp	db	cr,lf,'Either keyname:  Backspace, F1, ...,F22',cr,lf
	db	      '  or   "SCAN" followed by scan code'
	db	' (given by SHOW KEY)',cr,lf,'$'

comptab	db	7
	mkeyw	'1',1
	mkeyw	'2',0
	mkeyw	'COM1',1
	mkeyw	'COM2',0
	mkeyw	'H14',0
	mkeyw	'OPTIONAL',0
	mkeyw	'STANDARD',1

bddat	label	word
	dw	0D30H		; 45.5 baud
	dw	0C00H		; 50 baud
	dw	0800H		; 75 baud
	dw	0574H		; 110 baud
	dw	0476H		; 134.5 baud
	dw	0400H		; 150 baud
	dw	0200H		; 300 baud
	dw	0100H		; 600 baud
	dw	0080H		; 1200 baud
	dw	0055H		; 1800 baud
	dw	004DH		; 2000 baud
	dw	0040H		; 2400 baud
	dw	0020H		; 4800 baud
	dw	0010H		; 9600 baud
	dw	0008H		; 19200 baud
	dw	0004H		; 38400 baud (not tested - may not work)

; some static data for mode line

unkbaud	db	' Unk '			; must be 5 chars...
baudn	db	' 45.5'			;		[g4 start]
	db	'  50 '
	db	'  75 '
	db	' 110 '
	db	' 135 '
	db	' 150 '
	db	' 300 '
	db	' 600 '
	db	' 1200'
	db	' 1800'
	db	' 2000'
	db	' 2400'
	db	' 4800'
	db	' 9600'
	db	'19200'		;		[g4 end]
baudnsiz  equ	15		; # of baud rates known (tbl size / 5)

datas	ends


code	segment	public
	extrn	comnd:near, dopar:near, escprt:near
	assume	cs:code,ds:datas

; local initialization routine, called by Kermit initialization.

LCLINI	PROC	NEAR
	cld
	mov flags.vtflg,0	; turn off heath emulation
	push es
	mov es,dosseg
	mov bx,configptr
	mov bx,es:[bx]		; Get offset of configuration table in IO.SYS
	mov configbas,bx	; store it
	mov cl,fifoclr		; Clear fifobuffer in case user has been 
	int bios		;  typing while program was loading
	mov bx,es:[bx].kbinptr	; Should be address of kbin
	mov cl,es:[bx]		; Confirm we're in right location	
	cmp cl,byte ptr es:1[bx] ; by showing kbin = kbout
	jne lclin1		; Fails for DOS 2.00 (no kbinptr)
	mov fifobas,bx		; Kbin is base of fifo area
	or ourflgs,kbtrflg	; Show we have a key tranlate table
	jmp short lclin2	; Localization finished
lclin1: mov bx,configbas	; DOS 2.00 does have pointer to status line
	mov bx,es:[bx].statlnptr ; Address of 'MS-DOS' in status line
	sub bx,6BH			; Work back to where kbin should be
	mov cl,es:[bx]			; Confirm we're in right location
	cmp cl,byte ptr es:1[bx] 	;  by showing kbin = kbout
	jnz lclin3		; Nothing else to try - report failure
	mov fifobas,bx		; We've made it!
	or  ourflgs,kbtrflg	; Show we have a key tranlate table
	xor ax,ax		; Set zero flag for mono format default
	jmp short lcli20
lclin2:	mov bx,configbas
	mov bx,es:[bx].crtptr		; Get address of crttype byte
	mov al,es:[bx]			; get the crttype byte
	test al,1			; Is it a color crt?
lcli20:	mov dx,ds			; DOS 2.00 has no crt data and 
	mov es,dx			;   and defaults to mono
	mov cl,formdtl			; Length of crt format block
	mov di,offset formdat		; Where we want data
	jnz lcli21			; No, it's color
	jmp short lclin4
lcli21: mov si,offset nrmcol		; Source of color data
	rep movsb			; Move data to working location
	jmp short lclin4
lclin3:	mov dx,offset bdkscn
	call tmsg
	and ourflgs,not kbtrflg		; Show no translate table enabled
lclin4:	mov dx,offset formdat.nrmseq	; set to our normal background color
	call tmsg
	pop es
	ret
LCLINI	ENDP

; Local reset routine, called upon exit from Kermit

LCLRST	PROC	NEAR
	ret
LCLRST	ENDP

; this is called by Kermit initialization.  It checks the
; number of disks on the system, sets the drives variable
; appropriately.  The only problem is that a value of two
; is returned for single drive systems to be consistent
; with the idea of the system having logical drives A and
; B.  Returns normally.

DODISK	PROC	NEAR
	mov ah,gcurdsk		; current disk value to AL.
	int dos
	mov dl,al		; put current disk in DL.
	mov ah,seldsk		; select current disk.
	int dos			; get number of drives in AL.
	mov drives,al
	ret
DODISK	ENDP

; show the definition of a key.  The terminal argument block (which contains
; the address and length of the definition tables) is passed in ax.
; Returns a string to print in AX, length of same in CX.
; Returns normally.

; In this version, the complete untranslated key scan codes are obtained
; from the fifo buffer in IO.SYS. The fifo buffer pointers are then updated
; to show that the key has been read. Certain key scan codes which are
; intercepted in the kb interrupt routine give a blank or functional response
; to SHOW KEY  (eg FNC + CTRL + BREAK-STOP, PRINT, and CTRL + 0...9 )
; and these cannot be translated.

SHOWKEY	PROC	NEAR
	push es
	test ourflgs,kbtrflg
	jnz showk0
	push ax			; Keep stack balanced
	mov bx,ax
	and [bx].flgs,not havtt ; reset flag
	mov dx,offset nokbtr	; Inform no table installed and return
	jmp short shoerr

showk0:	push ax			; save the terminal argument block
	mov al,trans.escchr	; calculate scan code for ctrl-escape key
	add al,40H		; uncontrolify escape char
	mov ah,2		; control byte
	mov escscan,ax		; save it
showk1:	call inscan		; get key-in scan code from IO.SYS
	 jmp short showk1	; Nothing there yet - keep trying
	 nop
	call inckbo		; increment kbout pointer
	cmp al,printkey		; Is it the print key (any version) ?
	jnz show11
	mov dx,offset prtmsg	; If so complain
	jmp short shoerr
show11: cmp al,byte ptr escscan	; Is it current ctrl-escape key ?
	jnz show12
	test ah,02		; With ctrl + anything
	jz show12
	mov dx,offset escmsg	; Then complain
	jmp short shoerr
show12:	cld
	mov cx,ds
	mov es,cx
	push ax			; save scan code
	mov di,offset shkbuf	; move 'Scan code' message to buffer
	mov si,offset shkmsg
	mov cx,shkmln
	rep movsb
	call nout		; add scan code to buffer
	mov si,offset shkms1	; move 'Definition' message to buffer
	mov cx,shkm1ln
	rep movsb
	pop ax			; retrieve scan code
	pop bx			; and terminal argument block
	mov cx,[bx].klen	; length of translation table
	jcxz showk3		; no table, key not defined
	push di
	mov di,[bx].ktab	; get table address
	repne scasw		; look for scan code
	mov si,di
	pop di
	jne showk3		; not defined
	sub si,[bx].ktab	; compute entry offset in table
	sub si,2
	add si,[bx].krpl	; index to replacement
	mov si,[si]		; get its address
	mov cl,[si]		; get its length
	mov ch,0
	inc si
	rep movsb		; transfer replacement to display buffer
showk3:	mov ax,offset shkbuf	; return address of buffer in ax
	mov cx,di		; and length in cx
	sub cx,ax
	pop es
	ret
shoerr: call tmsg
	mov cx,0		; 
	pop ax			; get rid of junk
	pop es
	ret
SHOWKEY	ENDP

; copy numeric value from AX to ASCII buffer indicated by DI.  DI is updated.

NOUT	PROC	NEAR
	mov dx,0		; zero high word
	mov bx,10		; divide
	div bx
	push dx			; save remainder digit
	or ax,ax		; anything left?
	jz nout1		; no, start output phase
	call nout
nout1:	pop ax			; retrieve a digit
	add al,'0'		; make it ASCII
	stosb			; put it in buffer
	ret
NOUT	ENDP

; skip returns if no character available at port,
; otherwise returns with char in al, # of chars in buffer in dx.

PRTCHR  PROC    NEAR
	call chkxon		; see if we have to xon the host.
	cmp count,0
	jnz prtch2
	jmp rskp		; No data - check console.
prtch2:	pushf			; save current interrupt value
	cli			; disable interrupts while manipulating pointers
	mov si,savesi
	lodsb			; get a byte
	cmp si,offset source + bufsiz	; bigger than buffer?
	jb prtch1		; no, keep going
	mov si,offset source	; yes, wrap around
prtch1:	dec count
	mov savesi,si
	mov dx,count		; return # of chars in buffer
	popf			; restore original interrupt flag
	ret
PRTCHR  ENDP

; local routine to see if we have to transmit an xon

CHKXON	PROC	NEAR
	push bx
	mov bx,portval
	cmp [bx].floflg,0	; doing flow control?
	je chkxo1		; no, skip all this
	cmp xofsnt,false	; have we sent an xoff?
	je chkxo1		; no, forget it
	cmp count,mntrgh	; below trigger?
	jae chkxo1		; no, forget it
	mov ax,[bx].flowc	; ah gets xon
	call outchr		; send it
	 nop			;  ignore failure
	 nop
	 nop
	mov xofsnt,false	; remember we've sent an xon.
chkxo1:	pop bx			; restore register
	ret			; and return
CHKXON	ENDP

; Put the char in AH to the serial port.  This assumes the
; port has been initialized.  Should honor xon/xoff.  Skip returns on
; success, returns normally if the character cannot be written.

OUTCHR	PROC	NEAR
	mov bp,portval
	cmp ds:[bp].floflg,0	; Are we doing flow control.
	je outch2		; No, just continue.
	sub cx,cx		; clear counter
outch1:	cmp xofrcv,true		; Are we being held?
	jne outch2		; No - it's OK to go on.
	loop outch1		; held, try for a while
	mov xofrcv,false	; timed out, force it off and fall thru.
outch2:	push dx			; Save register.
	sub cx,cx
	mov al,ah		; Parity routine works on AL.
	call dopar		; Set parity appropriately.
	mov ah,al		; Don't overwrite character with status.
	mov dx,modem.mdstat	; port status register
outch3:	in al,dx
	test al,txrdy		; Transmitter ready?
	jnz outch4		; Yes
	loop outch3
	 jmp outch5		; Timeout
outch4:	mov al,ah		; Now send it out
	mov dx,modem.mddat
	out dx,al
	pop dx
	jmp rskp
outch5:	pop dx
	ret
OUTCHR	ENDP

; Send a break out the current serial port.  Returns normally.

SENDBR	PROC	NEAR
	mov dx,modem.mdcom	; send to command port
	mov al,cbrk+ccmd	; add break to normal command
	out dx,al
	sub cx,cx		; wait a while
sndbr1:	loop sndbr1
	mov al,ccmd		; restore normal command
	out dx,al
	ret			; and return.
SENDBR	ENDP

DISCON	PROC	NEAR
	mov dx,offset hngcfm
	call besure		; Get confimation of command
	 jmp short discn1
	 nop
	mov dx,offset dismsg	; Say what we're doing
	call tmsg
	mov al,CCMD
	xor al,2		; Reset bit to drop DTR.
	mov dx,modem.mdcom
	out dx,al
	mov bx,05H		; Set outer counter  5 X --> 3sec.
pause2:	xor cx,cx
pause3:	push bx			; Waste time for 600ms.
	pop bx
	loop pause3		; Loop on inner loop.
	dec bx
	jnz pause2		; Loop on outer loop.
	or al,2			; Set bit to enable DTR again.
	out dx,al
	mov dx,offset rcnmsg
	call tmsg
discn1:	ret
DISCON	ENDP

BESURE	PROC	NEAR		; Receives addr of prompt in DX.
	call tmsg
	mov ah,conin
	int dos
	and al,137Q		; Convert to upper case if necessary. 
	cmp al,'Y'
	jz besur1		; We must return rskp for a 'Y'/'y'
	mov dx,offset crlf	; For any other character input send a cr/lf.
	call tmsg
	ret			; And return.
besur1:	jmp rskp
BESURE	ENDP


; Clear the input buffer. This throws away all the characters in the
; serial interrupt buffer.  This is particularly important when
; talking to servers, since NAKs can accumulate in the buffer.
; Returns normally.

CLRBUF	PROC	NEAR
	pushf			; save current interrupt value
	cli			; disable interrupts
	mov ax,offset source	; reset pointers to beginning of buffer
	mov srcpnt,ax
	mov savesi,ax
	mov count,0
	popf			; restore original interrupt value
	ret
CLRBUF	ENDP

; Set the baud rate for the current port, based on the value in the
; portinfo structure.  On entry, previous value of baud rate is saved in AX.
; Returns normally.

DOBAUD	PROC	NEAR
	mov bp,portval
	mov bx,ds:[bp].baud	;make sure new value is valid
	shl bx,1
	add bx,offset bddat
	cmp word ptr [bx],0FFH
	jne dobd0
	mov ds:[bp].baud,ax	;replace bad rate with previous value
	mov dx,offset badbd
	jmp tmsg
dobd0:	mov dx,timer.tmcmd	;timer command port
	mov al,timer.tmsel	;select proper channel and mode
	out dx,al
	mov ax,[bx]		;get timer initializer for this rate
	mov dx,timer.tmdat	;timer data port
	out dx,al		;output low byte
	mov al,ah
	out dx,al		;output high byte
	ret
DOBAUD	ENDP

; Get the current baud rate from the serial card and set it
; in the portinfo structure for the current port.  Returns normally.
; This is used during initialization.

GETBAUD	PROC	NEAR
	mov bx,portval		; no way to determine baud rate on APC
	mov [bx].baud,B1200	;  so set default baud rate to 1200
	ret
GETBAUD	ENDP

; Set the mode for the current port.  This is part of the serial
; initialization routine.

DOMODE	PROC	NEAR
	mov dx,modem.mdcom	;send 3 zeros to command port to reset chip
	mov al,0
	out dx,al
	mov al,0
	out dx,al
	mov al,0
	out dx,al
	mov al,cmode		;enable mode setting
	out dx,al
	mov cx,100		;allow chip time to reset
mode1:	loop mode1
	mov al,mmode		;mode: 16x rate, 8 data, no parity, 1 stop
	out dx,al
	mov cx,100
mode2:	loop mode2
	mov al,ccmd		;RTS & DTR high, RX & TX enabled, reset errors
	out dx,al
	ret
DOMODE	ENDP

; Reassure user about connection to the host.  Tell him what escape
; sequence to use to return and the communications port and baud
; rate being used.   [19b]

DOMSG	PROC	NEAR
	mov	bx,offset ourarg	; get argument block
	mov	al,[bx].baudb		; get baud bits
	mov	si,offset unkbaud	; Assume unknown baud.
	cmp	al,baudnsiz		; too big?
	jnb	dmsg12			; yes, use default
	mov	cl,2			; each is 5 bytes long
	shl	al,cl			; 4 X
	add	al,[bx].baudb		; make 4+1 = 5
	mov	ah,0
	add	ax,offset baudn
	mov	si,ax
dmsg12:	mov	cx,5			; length of baud space
	mov	di,offset cnmsgb
	rep	movsb			; copy in baud rate
	mov	al,'1'
	cmp	ourarg.prt,1		; One means port 1
	je	dmsg15			; yes, keep going
	mov	al,'2'			; Zero means port 2
dmsg15:	mov	cnmsgp,al		; fill in port number
	mov dx,offset cnmsg
	call tmsg
	call escprt			; in MSSET
	mov dx,offset cnmsg1
	call tmsg
	ret
DOMSG	ENDP

; set the current port.

COMS	PROC	NEAR
	mov dx,offset comptab	;get port selection
	mov bx,0
	mov ah,cmkey
	call comnd
	 jmp r
	push bx
	mov ah,cmcfm		;get a confirmation
	call comnd
	 jmp comx
	 nop
	pop bx
	mov flags.comflg,bl	;save port selection
	cmp flags.comflg,1
	jne coms2
	mov ax,offset port1	;set to run on port 1
	mov portval,ax
	call resetb		;reset port 2, if in use
	call inita		;set up port 1
	ret
coms2:	mov ax,offset port2	;set to run on port 2
	mov portval,ax
	call reseta		;reset port 1, if in use
	call initb		;set up port 2
	ret
comx:	pop bx
	ret
COMS	ENDP

; initialization for using serial port.  This routine performs
; any initialization necessary for using the serial port, including
; setting up interrupt routines, setting buffer pointers, etc.
; Doing this twice in a row should be harmless (this version checks
; a flag and returns if initialization has already been done).
; SERRST below should restore any interrupt vectors that this changes.
; Returns normally.

SERINI	PROC	NEAR
	cmp flags.comflg,1
	jne seri2
	call resetb
	call inita
	ret
seri2:	call reseta
	call initb
	ret
SERINI	ENDP

; Reset the serial port.  This is the opposite of serini.  Calling
; this twice without intervening calls to serini should be harmless.
; Returns normally.

SERRST	PROC	NEAR
	call reseta		;reset port 1
	call resetb		;reset port 2
	mov dx,offset recur	; Reenable cursor display
	call tmsg
	and ourflgs,not inited	; Reset init flag for term usage
	ret
SERRST	ENDP

; Local routine to initialize the standard serial port

INITA	PROC	NEAR
	cmp portina,1		; Did we initialize port already? [21c]
	je inita0		; Yes, so just leave. [21c]
	push es
	cli			; Disable interrupts
	mov ax,offset port1
	mov portval,ax
	xor ax,ax		; Address low memory
	mov es,ax
	mov ax,es:[4*icsvcta]	; save standard port interrupt vector
	mov oldsera,ax
	mov ax,es:[4*icsvcta+2]
	mov oldsega,ax
	mov ax,offset serint	; point to our routine
	mov es:[4*icsvcta],ax	; point at our serial routine
	mov es:[4*icsvcta+2],cs	; our segment
	mov dx,intmska		; set up standard port...
	in al,dx
	mov oldmska,al		; save old master controller mask

;	NEC recommends that the timer interrupt be disabled during interrupt-
;	driven serial I/O, but this disables the clock display and keyboard
;	repeat.  I have not had any problems leaving it enabled, so I will
;	leave it alone here.  If problems develop, uncomment the following
;	line to disable timer interrupts. -- RonB

;	or al,ictmsk		; disable timer interrupt
	and al,not icsmska	; enable serial interrupt at master controller
	out dx,al
	mov dx,mnmska		; enable serial interrupt at port
	mov al,txmsk+tbemsk	; disable tx and tbe interrupts (enable rx)
	out dx,al
	mov dx,mntdca		; enable operation of serial port
	mov al,0
	out dx,al
	mov modem.mddat,mndata
	mov modem.mdstat,mnst1a
	mov modem.mdcom,mncmda
	mov timer.tmdat,tmdata
	mov timer.tmcmd,tmcmda
	mov timer.tmsel,tmsela
	call domode
	call dobaud
	mov portina,1		; Remember port has been initialized.
	call clrbuf		; Clear input buffer.
	sti			; Allow interrupts
	pop es
inita0:	ret
INITA	ENDP

; Local routine to initialize the optional (H14) serial port

INITB	PROC	NEAR
	cmp portinb,1		; Did we initialize port already? [21c]
	je initb0		; Yes, so just leave. [21c]
	push es
	cli			; Disable interrupts
	mov ax,offset port2
	mov portval,ax
	xor ax,ax		; Address low memory
	mov es,ax
	mov ax,es:[4*icsvctb]	; save optional port interrupt vector
	mov oldserb,ax
	mov ax,es:[4*icsvctb+2]
	mov oldsegb,ax
	mov ax,offset serint	; point to our routine
	mov es:[4*icsvctb],ax	; point at our serial routine
	mov es:[4*icsvctb+2],cs	; our segment
	mov dx,intmskb		; set up optional port...
	in al,dx
	mov oldmskb,al		; save old master or slave controller mask
	and al,not icsmskb	; enable serial interrupt at controller
	out dx,al
	mov dx,mnmskb		; enable serial interrupt at port
	mov al,txmsk+tbemsk	; disable tx and tbe interrupts (enable rx)
	out dx,al
	mov dx,mntdcb		; enable operation of serial port
	mov al,0
	out dx,al
	mov modem.mdstat,mnst1b
	mov modem.mddat,mndatb
	mov modem.mdcom,mncmdb
	mov timer.tmdat,tmdatb
	mov timer.tmcmd,tmcmdb
	mov timer.tmsel,tmselb
	call domode
	call dobaud
	mov portinb,1		; Remember port has been initialized.
	call clrbuf		; Clear input buffer.
	sti			; Allow interrupts
	pop es
initb0:	ret
INITB	ENDP

; Reset standard serial port

RESETA	PROC	NEAR
	cmp portina,0		; Did we reset port already?
	je rsta0		; Yes, so just leave.
	push es
	cli			; Disable interrupts
	xor ax,ax		; Address low memory
	mov es,ax
	mov ax,oldsera		; Restore interrupt vector
	mov es:[4*icsvcta],ax
	mov ax,oldsega
	mov es:[4*icsvcta+2],ax
	mov dx,intmska		; restore old master controller mask
	mov al,oldmska
	out dx,al
	mov dx,mnmska		; disable serial interrupts at port
	mov al,txmsk+rxmsk+tbemsk
	out dx,al
	mov portina,0		; Remember port has been reset
	sti			; Allow interrupts
	pop es
rsta0:	ret
RESETA	ENDP

; Reset optional (H14) serial port

RESETB	PROC	NEAR
	cmp portinb,0		; Did we reset port already?
	je rstb0		; Yes, so just leave.
	push es
	cli			; Disable interrupts
	xor ax,ax		; Address low memory
	mov es,ax
	mov ax,oldserb		; Restore interrupt vector
	mov es:[4*icsvctb],ax
	mov ax,oldsegb
	mov es:[4*icsvctb+2],ax
	mov dx,intmskb		; restore old slave controller mask
	mov al,oldmskb
	out dx,al
	mov dx,mnmskb		; disable serial interrupts at port
	mov al,txmsk+rxmsk+tbemsk
	out dx,al
	mov portinb,0		; Remember port has been reset
	sti			; Allow interrupts
	pop es
rstb0:	ret
RESETB	ENDP


; serial port interrupt routine.  This is not accessible outside this
; module, handles serial port receiver interrupts.

SERINT	PROC  NEAR
	push ds			; save these on remote stack
	push ax
	mov ax,seg datas	; get our own data segment
	mov ds,ax
	mov mnsp,sp		; save remote stack information
	mov mnsseg,ss
	mov sp,offset mnstk	; switch to local stack
	mov ss,ax
	push es			; and save remaining registers
	push bp
	push di
	push si
	push dx
	push cx
	push bx
	mov es,ax
	call mnproc		; process the interrupt
	mov al,icEOI
	cmp flags.comflg,1	; If using standard port
	je intr1
	mov dx,intcmdb		;    or H14 vectored to master
	cmp dx,intcmda
	je intr1		;    only signal End of Interrupt to master,
	out dx,al		; otherwise signal to both slave and master.
intr1:	mov dx,intcmda
	out dx,al
	pop bx			; restore registers from stack
	pop cx
	pop dx
	pop si
	pop di
	pop bp
	pop es
	mov ax,mnsseg		; switch back to remote stack
	mov ss,ax
	mov ax,mnsp
	mov sp,ax
	pop ax
	pop ds
	iret

; handler for serial input

mnproc:	cld
	mov di,srcpnt		; get buffer pointer
	mov dx,modem.mdstat	; is data available?
	in al,dx
	test al,rxrdy
	jz mnpro7
	mov dx,modem.mddat	; read data
	in al,dx
	or al,al
	jz mnpro7		; Ignore nulls.
	cmp al,7FH		; Ignore rubouts, too.
	jz mnpro7
	mov ah,al
	and ah,7fH		; only consider low-order 7 bits for flow ctl.
	mov bp,portval
	cmp ds:[bp].floflg,0	; Doing flow control?
	je mnpro4		; Nope.
	mov bx,ds:[bp].flowc	; Flow control char (BH = XON, BL = XOFF).
	cmp ah,bl		; Is it an XOFF?
	jne mnpro3		; Nope, go on.
	mov xofrcv,true		; Set the flag.
	jmp short mnpro7
mnpro3:	cmp ah,bh		; Get an XON?
	jne mnpro4		; No, go on.
	mov xofrcv,false	; Clear our flag.
	jmp mnpro7
mnpro4:	stosb
	cmp di,offset source + bufsiz
	jb mnpro5		; not past end...
	mov di,offset source	; wrap buffer around
mnpro5:	mov srcpnt,di		; update ptr
	inc count
	cmp ds:[bp].floflg,0	; Doing flow control?
	je mnpro7		; No, just leave.
	cmp xofsnt,true		; Have we sent an XOFF?
	je mnpro7		; Yes.
	cmp count,mntrgh	; Past the high trigger point?
	jbe mnpro7		; No, we're within our limit.
	mov ah,bl		; Get the XOFF.
	call outchr		; Send it.
	 nop			;   ignore failure.
	 nop
	 nop
	mov xofsnt,true		; Remember we sent it.
mnpro7:	ret

SERINT	ENDP

; Dumb terminal emulator.  Anyone wishing to enhance it is encouraged
; to do so.

TERM	PROC	NEAR
	push es
	test ourflgs,inited	; Have we been here before
	jnz  term01		; if so, skip this stuff
	or  ourflgs,inited	; show we've been here
	test ourflgs,kbtrflg
	jnz term0
	mov bx,ax
	and [bx].flgs,not havtt ; If no table then reset flag
term0:	mov si,ax		; save argument block locally
	mov di,offset ourarg
	mov ax,ds
	mov es,ax
	mov cx,size termarg
	rep movsb
	mov al,trans.escchr	; Calculate scan code for cntrl-escape char
	add al,40H		; Uncontollify escape char
	mov ah,02H		; Control byte for escape scan code
	mov escscan,ax		; save it
	call domsg		; tell user how we're connecting.
term01: test ourflgs,movcur	 ; Do we need to reset cursor position	
	jz term1
	mov dx,offset cmd
	mov cx,savcur
	mov word ptr la,cx
	mov noc,0
	mov cmd,1		; Bios  move cursor call
	mov cl,crtcmd
	int bios
	and ourflgs, not movcur
term1:	call prtchr		; Serial port input processor
	 jmp short term2	;  ...have a char
	 nop
	jmp term4		; no char, continue
term2:	and al,7FH		; only use ASCII in terminal mode
	push ax
	mov dl,al
	mov ah,conout
	int dos			; display char
	pop ax
	test ourarg.flgs,capt	; are we capturing output?
	jz term3
	push ax
	call ourarg.captr
	pop ax
term3:	test ourflgs,fprint	; are we echoing to printer?
	jz term4
	call lstchr

term4:	test ourflgs,kbtrflg
	jz term50
	call inscan
	 jmp  short term1
	 nop
	cmp al,printkey		; All shifts of print key do special duty.
	jne term41
	cmp ah,0
	jne term40		; but toggle printer only if unshifted print
	xor ourflgs,fprint	; go toggle printer 
term40:	call inckbo		; increment kbout pointer
	jmp term1
term41:	cmp al,byte ptr escscan ; Is it current escape key
	jne  term42
	test ah,02		;  with ctrl + anything ?
	jz  term42
	call inckbo
	mov cx,100		; Delay for memory stability
trm420:	loop trm420
	jmp short termx		; it's ctrl-escape key so just return	
term42:	call trnout		; Returns rskp if char not sent.
	 jmp short term1	; Translation found and already sent.
	 nop			; no translation so move char via DCONIO
	cmp ax,brkstp		; is it unredefined/unshifted break/stop key
	jnz term50		; if not, just continue
	mov ax,ctrl_s		; get a ^S ready
	test ourflgs,tlnxof	; have we already sent a ^S ?
	jz term43		; no, we can just set flag and send the ^S
	mov ax,ctrl_q		; yes, so now we need a ^Q
term43: xor ourflgs,tlnxof	; change the flag in either case
	call sndhst		; send our  ^S/ ^Q - IO.SYS 2.11 won't do it 
	mov ah,dconio		; do a dummy read to clear IO.SYS flush flag
	mov dl,0FFH
	int dos
	jmp term1		; and go back for more
term50:	mov ah,dconio		; Keyboard input processor
	mov dl,0FFH
	int dos			; check console
	jnz term51
	jmp term1		; no char, continue .Too far for rel jmp.
term51:	cmp al,ourarg.escc	; is it the escape char?
	je termx		; allows use of unredef left arrow key to esc
	call sndhst		; no translation, just send it out
	jmp term1		; and go back for more
termx:	pop es
	ret


; do appropriate translations on input key, and transmit
; if translation entry found it sends char(s) to sndhst and returns normally 
; if no translation entry is found, returns rskp with unsent scan code in ax
;  so that CONIN in IO.SYS can do its translation if neessary.
 
trnout:	test ourflgs,kbtrflg	; is there a translation table?
	jz trnou3
	mov cx,ourarg.klen	; get table length and origin
	mov di,ourarg.ktab
	push es
	mov bx,ds
	mov es,bx
	jcxz trnou3		; Needed for case of table zero length
	repne scasw		; look for key
	jne trnou3		; if not found, return rskp
	sub di,ourarg.ktab	; reset to offset of replacement
	sub di,2
	add di,ourarg.krpl
	mov si,[di]
	mov cl,[si]		; get length of replacement
	mov ch,0
	jcxz trnou3		; if length is zero, send nothing
	inc si
trnou1:	lodsb			; get replacement character
	push si
	push cx
	call sndhst		; send it to port
	pop cx
	pop si
	loop trnou1		; continue until translation complete
trnou2:	call inckbo		; increment kbout pointer
	pop es
	ret			; return after translating and sending
trnou3:	pop es
	jmp rskp		; plain characters return rskp

; get key-in scan code from fifo buffer in IO.SYS
; if gets a key-in, skip returns with scan code in ax
; returns normally if no key-in

inscan:	push es
	mov es,dosseg		; Address IO.SYS segment with es
	and ourflgs,not autorepflg	; Reset auto repeat flag
	mov bx,fifobas 		; Offset of fifobas in IO.SYS (from LCLINI)
insca1:	mov al,es:[bx].kbout	; Get value of kbin pointer
	cmp al,es:[bx].kbin	; Compare value of kbout pointer
	jz  insca2		; If equal, no key-in yet so exit
	sub ah,ah
	add bx,ax		; Calculate address pointed to (-2)
	mov ax,es:2[bx]		; Get scan code pointed to by kbout.
	xchg ah,al		; Get control byte -> ah, data byte -> al.
	mov savscn,ax		; Save scan data in case key repeat needed.
	pop es
	jmp rskp
insca2: mov bx,fifobas
	cmp byte ptr es:[bx].kbrepflg,0	 ; Is it time to repeat last key-in
	jz inscax		 	; Nope so exit
	mov ax,savscn			; Get last key-in
	or ourflgs,autorepflg		; Show we are on auto repeat cycle
	pop es				; And make it look like new
	jmp rskp
inscax:	pop es
	ret

; increments kbout pointer (with reset to zero) and returns normally
;   (on auto repeat cycles resets kbrepflg and returns )
 
inckbo:	push es
	mov es,dosseg
	mov bx,fifobas
	test ourflgs,autorepflg	; new key-in or autorepeat
	jnz inckb2
	mov cl,0		; Update kbout pointer to fifo 
	cli
	cmp byte ptr es:[bx].kbout,kbfifosiz-2		; End of fifo buff ?
	je  inckb1		; Yes, so start back at beginning
	mov cl,es:[bx].kbout	; No, just update our place
	add cl,2
inckb1:	mov es:[bx].kbout,cl	; Write back new pointer value
	sti
	jmp short inckbx
inckb2: mov byte ptr es:[bx].kbrepflg,0	; Reset autorepeat flag in IO.SYS
inckbx:	pop es
	ret

; send character in AL to port, with possible local echo

sndhst:	push ax
	mov ah,al
	call outchr		; send char to port
	 nop			;  ...don't care if it fails
	 nop
	 nop
	pop ax
	test ourarg.flgs,lclecho ; doing local echo?
	jz sndhs2
	mov dl,al
	mov ah,conout
	int dos			;  if so, display char
sndhs2:	ret

; send character to printer.  The only special case is the tab, which must
; be expanded to spaces because MS-DOS doesn't.

lstchr:	cmp al,tab
	jne lstch2
	mov ax,lstpos		; current column position
	mov cx,8		; # of spaces = 8 - (column % 8)
	div cl
	sub cl,ah
	add lstpos,cx		; update the column position
	mov al,' '
lstch1:	call lstch4		; print all the spaces
	loop lstch1
	ret
lstch2:	cmp al,cr		; CR returns column count to zero
	jne lstch3
	mov lstpos,0
lstch3:	cmp al,' '		; only printable characters are counted
	jb lstch4
	cmp al,del
	je lstch4
	inc lstpos
lstch4: mov dl,al		; print the character in any case
	mov ah,lstout
	int dos
	ret

TERM	ENDP

; Set heath emulation on/off.

VTS	PROC	NEAR
	mov dx,offset nyimsg
	jmp tmsg
VTS	ENDP

; Position the cursor according to contents of DX:
; DH contains row, DL contains column.  Returns normally.

POSCUR	PROC	NEAR
	push si
	cmp dh,25		; out of range just assumes high value
	jb poscu1
	mov dh,24
poscu1:	cmp dl,80
	jb poscu2
	mov dl,79
poscu2:	add dx,2020H		; add offset for ADM cursor addressing
	mov cpseq+2,dh
	mov cpseq+3,dl
	mov si,offset cpseq	; print sequence (ESC=rc)
	mov cx,4
posc1:	lodsb
	mov dl,al
	mov ah,conout
	int dos
	loop posc1
	pop si
	ret
POSCUR	ENDP

; Locate; homes cursor position and disables its display. Returns normally.

LOCATE  PROC	NEAR
	mov dx,offset nocur	; Disable cursor
	call tmsg
	mov dx,0		; Go to top left corner of screen.
	jmp poscur
LOCATE  ENDP

; Delete a character from the terminal.  This works by printing
; backspaces and spaces.  Returns normally.

DODEL	PROC	NEAR
	cmp al,del		; Del character needs extra backspace
	jne dodel1
	mov dl,bs
	mov ah,conout
	int dos
dodel1:	mov dx,offset delstr	; Erase weird character.
	jmp tmsg
DODEL	ENDP

; Move the cursor to the left margin, then clear to end of line.
; Returns normally.

CTLU	PROC	NEAR
	mov dx,offset clrlin	; this just goes to left margin...
	call tmsg
	jmp clearl		; now clear line
CTLU	ENDP

; Clear to the end of the current line.  Returns normally.

CLEARL	PROC	NEAR
	mov dx,offset ceolseq	; clear sequence
	jmp tmsg
CLEARL	ENDP

; This routine blanks the screen and homes the cursor.  Returns normally.

CMBLNK	PROC	NEAR
	mov dx,offset clrseq	; clear screen and home cursor sequence
	jmp tmsg
CMBLNK  ENDP

; write a line in inverse video at the bottom of the screen...
; the line is passed in dx, terminated by a $.  Returns normally.

PUTMOD	PROC	NEAR
	push dx			; preserve message
	mov dx,24*100H		; line 24
	call poscur
	mov dx,offset formdat.invseq	; put into inverse video
	call tmsg
	pop dx			; print the message
	call tmsg
	mov dx,offset formdat.nrmseq	; normal video
	jmp tmsg		; Jump to return
PUTMOD	ENDP

; clear the mode line written by putmod.  Returns normally.

CLRMOD	PROC	NEAR
	mov dx,24*100H
	call poscur
	mov dx,offset ceolseq
	jmp tmsg
CLRMOD	ENDP

; Put a help message in a box at the top of the screen. 
; This one uses inverse video (or yellow if color)
; Pass the message in ax, terminated by a null.  Returns normally.

PUTHLP	PROC	NEAR
	cld
	mov dx,ax		; Prepare to pass message to 'getnoc'
	call getnoc		; 
	mov rnoc,cx		; This is unformatted NOC in message
	mov  cx,5		; Calculate formatted area needed (in words)
	rol  bx,cl		; BX is no of lf's.
	mov  NOC,bx
	mov cx,2
	ror bx,cl
	add NOC,bx		; This is Lines X 40
	add NOC,80		; Current line + one more
	mov cx,NOC
	mov si,dx		; Source of message  given us
	mov di,attrptr		; Pointer to screen attrib area
	mov ax,formdat.bldcrt	; Need bold attribute
	rep stosw		; Cover attribute area needed
	mov ax,formdat.nrmcrt	; Rest of screen needs normal color
	mov cx,1000		; Whole screen
	sub cx,NOC		; Attribute area left to cover
	rep stosw		; Do it
	mov cx,1000		; Fill screen data area with null bytes
	mov di,dispptr		; Pointer to screen data area
	xor ax,ax		; This is source of null bytes
	rep stosw		; Prepare clean screen data area
	mov cx,rnoc		; No of unformatted data bytes 
	mov di,dispptr		; Destination is screen data area
pthlp0:	push di			; Save start of current line
pthlp1:	lodsb			; Load data bytes 1-by-1
	cmp al,cr		; Is this one an eol?
	jz pthlp2		; Yep - handle cr/lf's ourselves
	stosb			; No - move character
	loop  pthlp1		; And go back for next
	jmp short pthlp3	; Finished moving chars, so exit.
pthlp2: dec cx			; Account for cr and lf
 	dec cx
	inc si			; Skip the lf
	pop di			; Get start of current line.
	add di,80		; Adjust pointer to next line
	jmp short pthlp0	; And go back for more
pthlp3:	pop di
	mov noc,2000		; We are going to write over whole screen
	test ourflgs,movcur	; Save cursor only if not previously saved
	jnz pthlp4
	mov cmd,2		; Get cursor position before writing
	mov dx,offset cmd
	mov cl,crtcmd
	int bios		; Get cursor call
	mov cx,word ptr la
	mov savcur,cx		; Store cursor position
pthlp4:	mov la,24		; Prepare to roll down 24 lines
	mov ca,0
	mov cmd,3		; Screen roll down command
	mov dx,offset cmd
	mov cl,crtcmd
	int bios		; Do it!
	mov la,0		; Begin our msg on top line of screen
	mov cmd,1		; String write command
	int bios		; Write it.
	mov cx,1000		; Delay for video memory stability
pthlp5:	loop pthlp5
	mov dx,offset upcur
	call tmsg
	mov dx,offset upcur	; Put cursor up onto clean screen
	call tmsg
	or  ourflgs,movcur	; Tell that we've moved the cursor
	ret
PUTHLP	ENDP

; Receives message pointer in DX, terminating character in CL
; Returns with message ptr in DX, NOC in CX, and number of lf's in BX.

GETNOC	PROC	NEAR
	cld
	mov di,dx
	mov al,cl			; Move terminator to AL
	mov cx,2000			; Longest acceptible message.
	repnz scasb			; Look for terminator
	jz gtnoc1
	xor cx,cx
	ret				; Error return
gtnoc1: sub di,dx			; Calculate NOC
	mov cx,di			; Move it to counter
	dec cx				; Discount terminator
	push cx				; Save NOC
	mov di,dx
	mov al,lf
	xor bx,bx
gtnoc2:	repnz scasb			; Now count lf's
	jcxz gtnoc3			; If the counter ran out
	inc bx
	jmp short gtnoc2
gtnoc3:	pop cx				; Recover NOC
	ret
GETNOC	ENDP



; Produce a short beep.  Returns normally.

BEEP	PROC	NEAR
	mov dl,bell
	mov ah,conout
	int dos
	ret
BEEP	ENDP

; Prints $-terminated message in dx, for local use only

TMSG	PROC	NEAR
	mov ah,prstr
	int dos
	ret
TMSG	ENDP

; Jumping to this location is like retskp.  It assumes the instruction
;   after the call is a jmp addr.

RSKP    PROC    NEAR
	pop bp
	add bp,3
	push bp
        ret
RSKP    ENDP

; Jumping here is the same as a ret.

R       PROC    NEAR
        ret
R       ENDP

code	ends
	end

; END OF MSXAPC.ASM
```
{% endraw %}

## MSXTIPRO.ASM

{% raw %}
```
PAGE    60,132  ;60 lines, 132 columns
TITLE   MSXTIPRO - Texas Instruments "Professional" code for KERMIT
REVLVL  EQU 3   ;Revision level for this module, 29-Nov-84

;************  REVISION HISTORY for MSXTIPRO.ASM  **********************
;
; REVLVL=1  29-Oct-84  First version to be able to transfer files
; REVLVL=2  14-Nov-84  Fixed bugs in version 1
; REVLVL=3  27-Nov-84  Added Tektronix-4010 emulation in CONNECT mode
;
;       -- CHANGES --
;
; MSXTIPRO has been tested with the Sync/Async Comm Card at all speeds from
; 110 to 9600 baud using SET PORT 1 thru SET PORT 4, and a 300-baud
; internal modem in port 3.
;
; To use the internal modem, SET PORT 3, SET BAUD 300, CONNECT.
; With external phone, type "O" to go into manual original mode.
; Or type "T1(617)467-7437X" to use the built-in dialer.  Capital T
; means to use touch-tones, capital X marks the end of the number.
;
; Terminal emulation works fine at 1200 baud, reasonably OK at 2400 baud
; if you use ".SET TERMINAL TYPE VT100 FILL 3" on TOPS-10.
;
; Can transfer file-packets at 9600 baud (but not 19.2 kbaud).
;
; The VT52 "identify yourself" sequence of ESC,'Z' triggers a response of
; ESC,'[?1;4c' which is a VT100 with graphics (but no STP, no printer).
;
;        -- BUGS --
;
; No known bugs at this time (28-Nov-84).
;
;        -- DEFICIENCIES --
;
; The STATUS command is wrong if you select port 2, 3, or 4.
;**** According to the MSXSYS.DOC, flags.comflg is supposed to be 0
;**** when using port 2.  This makes it difficult to use ports 3 and 4.
        extrn port3:byte, port4:byte            ;********
;**** MSCOMM.ASM must be edited to define PORT3 and PORT4 like PORT1 and 2.
;**** You MUST edit MSCOMM.ASM, and add the following at line 17:
;        port3   prtinfo <0FFFH,0,defpar,1,0,defhand,floxon>
;        port4   prtinfo <0FFFH,0,defpar,1,0,defhand,floxon>
;
; The SET HEATH-19 ON/OFF command needs to be replaced by a new command,
; SET TERMINAL-EMULATION ON/OFF/HEATH-19/VT52/VT100/VT102/ADM3A/TVI910/etc.
; In REVLVL=3, this command changes only the ID sequence for ESC-Z.
;
; ANSI.SYS is a part of the TI-BIOS, but it does not fully emulate a VT100.
;   FIX: Add more features to MSTEKTRM.ASM, rename it to MSVT241.ASM.
;   [I am working on this for version 4.  /Joe]
;
; Looses the 4th character after LF at 2400 baud when scrolling because DOS
; is so slow at outputing characters to the screen.  Looses even more at 9600
; baud.  (Although you can type "KERMIT SERVER" at transfer files at 9600.)
;   FIX: Use interrupt handling instead of polling USART, with XON/XOFF.
;        (Received a listing from Charlie Lindahl, not yet implemented)
;   [Feel free to add this, I will be working on MSVT241.  /Joe]
;
;*************************************************************************

;Credits:
; Joe Smith, Systems Programmer for DECsystem-10, CSM Computing Center
; Dan Smith, Microcomputer Programmer, CSM Computing Center
;   Colorado School of Mines, Golden CO 80401 (303)273-3448,273-3396
; Charlie Lindahl, Rusty Haddock, Steve Krueger, Larry Kroeker of TI
;   Texas Instruments Computer Science Laboratory
;   P.O. Box 226015 - MS 238, Dallas, TX 75266 (214)995-0376

        public  serini, serrst, clrbuf, outchr, coms, vts, dodel,
        public  ctlu, cmblnk, locate, lclini, prtchr, dobaud, clearl,
        public  dodisk, getbaud, beep
        public  count, xofsnt, puthlp, putmod, clrmod, poscur
        public  sendbr, term, machnam, setktab, setkhlp, showkey

        include msdefs.h
SUBTTL Constants used by Zilog Z-8530 Serial Communications Controller

;Taken from page 3-12 of the TI-PRO Technical Reference Manual 2223216-0001

SCC1_INTA EQU   0E0h    ;Port 1 interrupt acknowledge
SCC1_BCMD EQU   0E4h    ;Port 1 channel B command
SCC1_BDAT EQU   0E5h    ;Port 1 channel B data (not used)
SCC1_ACMD EQU   0E6h    ;Port 1 channel A command
SCC1_ADAT EQU   0E7h    ;Port 1 channel A data

SCC2_INTA EQU   0E8h    ;Port 2 interrupt acknowledge
SCC2_BCMD EQU   0ECh    ;Port 2 channel B command
SCC2_BDAT EQU   0EDh    ;Port 2 channel B data (not used)
SCC2_ACMD EQU   0EEh    ;Port 2 channel A command
SCC2_ADAT EQU   0EFh    ;Port 2 channel A data

SCC3_INTA EQU   0F0h    ;Port 3 interrupt acknowledge
SCC3_BCMD EQU   0F4h    ;Port 3 channel B command
SCC3_BDAT EQU   0F5h    ;Port 3 channel B data (not used)
SCC3_ACMD EQU   0F6h    ;Port 3 channel A command
SCC3_ADAT EQU   0F7h    ;Port 3 channel A data

SCC4_INTA EQU   0F8h    ;Port 4 interrupt acknowledge
SCC4_BCMD EQU   0FCh    ;Port 4 channel B command
SCC4_BDAT EQU   0FDh    ;Port 4 channel B data (not used)
SCC4_ACMD EQU   0FEh    ;Port 4 channel A command
SCC4_ADAT EQU   0FFh    ;Port 4 channel A data

;To send the INTACK signal to the Z8530, write anything to SCCx_INTA and then
;immdiately read from SCCx_INTA.  The 8-bit interrupt vector is returned.

;-------------------------------------------------------------------------------

;From ZILOG's Z8030/Z8050 SCC Serial Communications Controller Technical Manual

  ;Bits for WR0 - set by writing to SC1ACMD or SC1BCMD
SW0_SREG  EQU   00001111b       ;Set register pointer (if hi 4 bits all zero)
;;;_CMD1        --XXX---b       ;Command bits 1
  SW0_RESET EQU   010b*8          ;Reset EXT/STATUS (must be done twice)
  SW0_ABORT EQU   011b*8          ;Send ABORT (SDLC mode only)
  SW0_INTEN EQU   100b*8          ;Enable INT on next Rx character
  SW0_TXINT EQU   101b*8          ;Reset TxINT pending
  SW0_ERROR EQU   110b*8          ;Error reset (unlock FIFO)
  SW0_RHIUS EQU   111b*8          ;Reset highest IUS (interrupt under service)
;;;_CMD2        XX------b       ;Command bits 2
  SW0_RRCRC EQU 01b*64            ;Reset Rx CRC checker (SYNC)
  SW0_RTCRC EQU 10b*64            ;Reset Tx CRC generator (SYNC)
  SW0_RTEOM EQU 11b*64            ;Reset Tx underrun/EOM latch (SYNC)

  ;Bits for WR1 - Rx/Tx Interrupt and Data Transfer Mode
SW1_NOINT EQU   00000000b       ;Disable interrupts
SW1_EXINT EQU   00000001b       ;External/Status interrupt enable
SW1_TXINT EQU   00000010b       ;Transmit interrupt enable
SW1_PAREN EQU   00000100b       ;Parity error activates special condition
;;;_CMD         ---XX---b       ;Receive Interrupt Modes
  SW1_NORI  EQU    00b*16         ;Receive Interrupts Disabled
  SW1_I1ST  EQU    01b*16         ;Interrupt on 1st character or special condition
  SW1_IALL  EQU    10b*16         ;Interrupt on all character or special condition
  SW1_ISPC  EQU    11b*16         ;Interrupt on special condition only
SW1_REC   EQU   00100000b       ;Activate receive request (1 for transmit)
SW1_WAIT  EQU   01000000b       ;Activate the DMA request (0 for WAIT request)
SW1_DMAEN EQU   10000000b       ;Enable WAIT/DMA as selected by bits 5 & 6

  ;Bits for WR2 - Interrupt vector
SW2_VECT  EQU   11111111b       ;8-bits of interrupt vector

  ;Bits for WR3 - Receive Parameters and Control
SW3_RXEN  EQU   00000001b       ;Rx Enable (set only after all other parameters)
SW3_NSYNC EQU   00000010b       ;Sync character load inhibit (SYNC only)
SW3_ADDR  EQU   00000100b       ;Address search mode (SDLC only)
SW3_RXCRC EQU   00001000b       ;Enable Rx CRC (SDLC only)
SW3_HUNT  EQU   00010000b       ;Enter hunt mode (SYNC)
SW3_AUTOE EQU   00100000b       ;Autoenable, CTS for Tx, DCD for Rx enable
;;;_BITS        XX------b       ;Receive bits per character
  SW3_5BITS EQU 00b*64            ;5 bits per character
  SW3_6BITS EQU 01b*64            ;6 bits per character
  SW3_7BITS EQU 10b*64            ;7 bits per character
  SW3_8BITS EQU 11b*64            ;8 bits per character

  ;Bits for WR4 - Tx/Rx misc parameters and modes
SW4_PAREN EQU   00000001b       ;Parity enable (transmit and receive both)
SW4_EVENP EQU   00000010b       ;Even Parity (0 for Odd)
;;;_STOPB       ----XX--b         ;Number of stop bits
  SW4_SYNC  EQU     00b*4         ;Synchronous mode enable
  SW4_1STOP EQU     01b*4         ;1 stop bit
  SW4_1HALF EQU     10b*4         ;1.5 stop bits
  SW4_2STOP EQU     11b*4         ;2 stop bits
;;;_SYNCM       --XX----b       ;Sync modes
  SW4_8BIT  EQU   00b*16          ;8-bit sync character
  SW4_16BIT EQU   01b*16          ;16-bit sync character
  SW4_SDLC  EQU   10b*16          ;SDLC mode (pattern 01111110)
  SW4_EXTS  EQU   11b*16          ;External sync mode
;;;_CLOCK       XX------b       ;Clock rate
  SW4_X1    EQU 00b*64            ;Clock rate = data rate
  SW4_X16   EQU 01b*64            ;Clock rate = 16 times the data rate
  SW4_X32   EQU 10b*64            ;Clock rate = 32 times the data rate
  SW4_X64   EQU 11b*64            ;Clock rate = 64 times the data rate

  ;Bits for WR5 - Transmit parameters and control
SW5_TCRC  EQU   00000001b       ;Calculate and transmit CRC (SYNC only)
SW5_RTS   EQU   00000010b       ;Raise RTS (set RCNTL for B)
SW5_CRC16 EQU   00000100b       ;CRC-16 polynomial (0 for SDLC) (SYNC only)
SW5_TXEN  EQU   00001000b       ;Tx Enable (set only after all other parameters)
SW5_BREAK EQU   00010000b       ;Send a BREAK condition
;;;_BITS        -XX-----b       ;Transmit bits per character
  SW5_5BITS EQU  00b*32           ;5 or fewer bits per character
  SW5_6BITS EQU  01b*32           ;6 bits per character
  SW5_7BITS EQU  10b*32           ;7 bits per character
  SW5_8BITS EQU  11b*32           ;8 bits per character
SW5_DTR   EQU   10000000b       ;Raise DTR (set speed indicator for B)

  ;Bits for WR6 - SYNC character 0
SW6_SYNC  EQU   11111111b       ;Sync character

  ;Bits for WR7 - SYNC character 1
SW7_SYNC  EQU   11111111b       ;Sync character

  ;Bits for WR8 - Transmit data
SW8_DATA  EQU   11111111b       ;Same as writing to SCCx_xDAT

  ;Bits for WR9 - Master interrupt control
SW9_VSTAT EQU   00000001b       ;Int vector modified depending on status
SW9_NOVEC EQU   00000010b       ;No vector during interrupt acknowledge
SW9_IEOL  EQU   00000100b       ;Force Interrupt Enable Out low
SW9_MIEN  EQU   00001000b       ;Master Interrupt Enable
SW9_VEC16 EQU   00010000b       ;Int vector multiple of 16 (0 for mult of 2)
;;;_BIT5  EQU   00100000b       ;Unused, must be 0
;;;_RESET       XX------b       ;Reset channel commands
  SW9_CBR   EQU 01b*64            ;Channel A reset
  SW9_CAR   EQU 10b*64            ;Channel B reset
  SW9_RESET EQU 11b*64            ;Force hardware reset

  ;Bits for WR10 - Miscellaneous Transmit/Receive control bits
SWA_6BIT  EQU   00000001b       ;Use only 6 of 8 bits to detect sync character
SWA_LOOP  EQU   00000010b       ;Synchronous loop-back mode
SWA_ABORT EQU   00000100b       ;Sent abort on transmit underrun
SWA_MARK  EQU   00001000b       ;Send mark when idle (0 to send flag)
SWA_GAOP  EQU   00010000b       ;Go active on poll (SYNC only)
;;;_CODE        -XX-----b       ;Data encoding
  SWA_NRZ   EQU  00b*32           ;NRZ (1=1, 0=0) (ASYNC)
  SWA_NRZI  EQU  01b*32           ;NRZI (1=no change, 0=invert)
  SWA_FM1   EQU  10b*32           ;FM1 (1=high frequency, 0=low frequency)
  SWA_FM0   EQU  11b*32           ;FM0 (1=low frequency, 1=high frequency)
SWA_PCRC  EQU   10000000b       ;Preset CRC to all ones (0 for all zeros)

  ;Bits for WR11 - Clock mode control
;;;_TRXC        ------XXb       ;TRxC output control
  SWB_XTALO EQU       00b         ;TRxC output same as XTAL oscillator
  SWB_TRANS EQU       01b         ;TRxC output same as transmitter clock
  SWB_BRGO  EQU       10b         ;TRxC output same as baud rate generator
  SWB_DPLLO EQU       11b         ;TRxC output same as digital phase-locked-loop
SWB_TRXCO EQU   00000100b       ;TRxC pin is an output (0=TRxC is an input)
;;;_TXC         ---XX---b       ;Transmit clock
  SWB_TRTXC EQU    00b*8          ;Transmit clock = RTxC pin
  SWB_TTRXC EQU    01b*8          ;Transmit clock = TRxC pin
  SWB_TBRG  EQU    10b*8          ;Transmit clock = baud rate generator output
  SWB_TDPLL EQU    11b*8          ;Transmit clock = digital phase-locked-loop
;;;_RXC         -XX-----b       ;Receive clock
  SWB_RRTXC EQU  00b*32           ;Receive clock = RTxC pin
  SWB_RTRXC EQU  01b*32           ;Receive clock = TRxC pin
  SWB_RBRG  EQU  10b*32           ;Receive clock = baud rate generator output
  SWB_RDPLL EQU  11b*32           ;Receive clock = digital phase-locked-loop
SWB_XTAL  EQU   10000000b       ;Crystal is connected between RTxC and SYNC pins

  ;Bits for WR12 (low byte of divisor) and WR13 (high byte) in decimal.
SWC_BAUD  EQU   11111111b       ;Low byte
SWD_BAUD  EQU   11111111b       ;High byte

;Taken from page 3-10 of the TI-PRO Technical Reference Manual 2223216-0001
SCC_0045  EQU   1686    ;  45.5 baud
SCC_0050  EQU   1534    ;  50 baud
SCC_0075  EQU   1022    ;  75 baud
SCC_0100  EQU   0696    ; 110 baud (+0.03%)
SCC_0134  EQU   0569    ; 134.5 baud (Selectric)
SCC_0150  EQU   0510    ; 150 baud
SCC_0200  EQU   0382    ; 200 baud
SCC_0300  EQU   0254    ; 300 baud
SCC_0600  EQU   0126    ; 600 baud
SCC_1200  EQU   0062    ;1200 baud
SCC_1800  EQU   0041    ;1800 baud (-0.78%)
SCC_2000  EQU   0036    ;2000 baud (+1.05%)
SCC_2400  EQU   0030    ;2400 baud
SCC_3600  EQU   0019    ;3600 baud (+1.59%)
SCC_4800  EQU   0014    ;4800 baud
SCC_7200  EQU   0009    ;7200 baud (-3.03%)
SCC_9600  EQU   0006    ;9600 baud
SCC_19K2  EQU   0002    ;19.2 kbaud
  ;Divisor = (256*300/BAUD)-2 for 16x async clock with 4.9152 MHz crystal

  ;Bits for WR14 - Miscellaneous control bits
SWE_BRENA EQU   00000001b       ;Baud Rate Generator enable
SWE_PCLK  EQU   00000010b       ;BRG source is PCLK pin (1 for RTxC/XTAL)
SWE_DTREQ EQU   00000100b       ;DTR/REQ pin triggers DMA output cycle
SWE_AECHO EQU   00001000b       ;Auto Echo, TxD connected to RxD
SWE_LLOOP EQU   00010000b       ;Local Loopback on the digital side
;;;_DPLL        XXX-----b       ;Command field
  SWE_NUL  EQU  000b*32           ;Null command
  SWE_SEA  EQU  001b*32           ;DPLL enters search mode
  SWE_RMC  EQU  010b*32           ;Reset Missing Clock in FM mode
  SWE_DPL  EQU  011b*32           ;Disable DPLL
  SWE_SBR  EQU  100b*32           ;Set DPLL source = BRG clock
  SWE_STC  EQU  101b*32           ;Set DPLL source = RTxC clock
  SWE_SFM  EQU  110b*32           ;Set DPLL to FM mode
  SWE_SNR  EQU  111b*32           ;Set DPLL to NRZI mode

  ;Bits for WR15 - External/Status Interrupt Control
SWF_NOINT EQU   00000000b       ;Disable interrupts
;;;_BIT0  EQU   00000001b       ;Not used, must be 0
SWF_ZEROC EQU   00000010b       ;Interrupt when BRG count goes to zero
;;;_BIT2  EQU   00000100b       ;Not used, must be 0
SWF_DCD   EQU   00001000b       ;Interrupt when DCD changes state
SWF_SYNC  EQU   00010000b       ;Interrupt when SYNC changes state
SWF_CTS   EQU   00100000b       ;Interrupt when CTS changes state
SWF_EOM   EQU   01000000b       ;Interrupt when transmit underrun or EOM
SWF_BREAK EQU   10000000b       ;Interrupt when BREAK or ABORT condition

;-------------------------------------------------------------------------------

  ;Bits for RR0 - available by reading SC1ACMD or SC1BCMD
SR0_RBUFA EQU   00000001b       ;Receive buffer has character(s) available
SR0_ZEROC EQU   00000010b       ;Baud Rate Generator count is zero
SR0_TBUFE EQU   00000100b       ;Transmitter buffer empty (double-buffered)
SR0_DCD   EQU   00001000b       ;DCD is on (channel-B DCD connected to DSR)
SR0_SYNC  EQU   00010000b       ;SYNC in on (ACNTL or modem detected hi speed)
SR0_CTS   EQU   00100000b       ;CTS in on (channel-B CTS connected to RING)
SR0_EOM   EQU   01000000b       ;Transmitter underrun or EOM (SYNC only)
SR0_BREAK EQU   10000000b       ;BREAK (async) or ABORT (sync) condition

  ;Bits for RR1 - Special receive conditions
SR1_SENT  EQU   00000001b       ;Last transmit bit has left TxD pin
SR1_RES   EQU   00001110b       ;Residue from I-field (SDLC only)
SR1_PAR   EQU   00010000b       ;Parity error
SR1_OVER  EQU   00100000b       ;Receive overrun (FIFO overflowed)
SR1_FRAME EQU   01000000b       ;CRC or framing error
SR1_EOF   EQU   10000000b       ;End of Frame (SDLC only)

  ;Bits for RR3 - Interrupt Pending
SR3_BEXT  EQU   00000001b       ;Channel B external/status
SR3_BTX   EQU   00000010b       ;Channel B transmitter empty
SR3_BRX   EQU   00000100b       ;Channel B receiver full
SR3_AEXT  EQU   00001000b       ;Channel A external/status
SR3_ATX   EQU   00010000b       ;Channel A transmitter empty
SR3_ARX   EQU   00100000b       ;Channel A receiver full
;;;_BIT6  EQU   01000000b       ;Not used, always zero
;;;_BIT7  EQU   10000000b       ;Not used, always zero

  ;Bits for RR8 - Receive data
SR8_DATA  EQU   SW8_DATA        ;Same as writing to SCCx_xDAT

  ;Bits for RR10 - Miscellaneous status bits
;;;_BIT0  EQU   00000001b       ;Not used, always zero
SRA_LOOP  EQU   00000010b       ;On-loop condition (SDLC only)
;;;_BIT2  EQU   00000100b       ;Not used, always zero
;;;_BIT3  EQU   00001000b       ;Not used, always zero
SRA_SEND  EQU   00010000b       ;SCC is actively on-loop and sending now
;;;_BIT5  EQU   00100000b       ;Not used, always zero
SRA_2MISS EQU   01000000b       ;FM mode, 2 clocks missing
SRA_1MISS EQU   10000000b       ;FM mode, 1 clock missing

  ;Bits for RR12 - Low divisor
SRC_BAUD  EQU   SWC_BAUD        ;Returns current baud rate divisor

  ;Bits for RR13 - High divisor
SRD_BAUD  EQU   SWD_BAUD        ;Returns current baud rate divisor

  ;Bits for RR15 - Interrupt enable bits
;RR15 returns the bits written to WR15
SRF_NOINT EQU   SWF_NOINT       ;Interrupts are disabled
SRF_ZEROC EQU   SWF_ZEROC       ;Interrupt when BRG count is zero
SRF_DCD   EQU   SWF_DCD         ;Interrupt when DCD changes state
SRF_SYNC  EQU   SWF_SYNC        ;Interrupt when SYNC changes state
SRF_CTS   EQU   SWF_CTS         ;Interrupt when CTS changes state
SRF_EOM   EQU   SWF_EOM         ;Interrupt when transmit underrun or EOM

;-------------------------------------------------------------------------------

  ;Output to RS-232 connector  (pin 2 has channel A transmit data)
SCC_RTS   EQU   SW5_RTS  ;Pin 4,  A-WR5 bit 1, Request To Send
SCC_RCNTL EQU   SW5_RTS  ;(RTSB)  B-WR5 bit 1  (internal modem, request control)
SCC_DTR   EQU   SW5_DTR  ;Pin 20, A-WR5 bit 7, Data Terminal Ready
SCC_SPDO  EQU   SW5_DTR  ;Pin 11, B-WR5 bit 7, Speed select out (also Pin 23)
  ;Input from RS-232 connector (pin 3 has channel A receive data)
SCC_DCD   EQU   SR0_DCD  ;Pin 8,  A-RR0 bit 3, Data Carrier Detect
SCC_DSR   EQU   SR0_DCD  ;Pin 6,  B-RR0 bit 3, Data Set Ready, pin 6
SCC_ACNTL EQU   SR0_SYNC ;(SYNCA) A-RR0 bit 4  (internal modem, ack control)
SCC_SPDI  EQU   SR0_SYNC ;Pin 12, B-RR0 bit 4, Speed select in, pin 12
SCC_CTS   EQU   SR0_CTS  ;Pin 5,  A-RR0 bit 5, Clear To Send, pin 5
SCC_RI    EQU   SR0_CTS  ;Pin 22, B-RR0 bit 5, Ring Indicator, pin 22
  ;Taken from page E-1 of the TI-PRO Technical Reference Manual 2223216-0001

;End if TI-Professional Sync/Async Comm Card definitions
SUBTTL Configuration info

;To get the system configuration, execute an INT 4Fh.  The number returned
;in BX is the size of contiguous RAM (in paragraphs).  The bits returned
;in AX are:
SYS_INT   EQU   4Fh     ;INT number
SYS_DSKA  EQU   0001h   ;Diskette A (internal) installed
SYS_DSKB  EQU   0002h   ;Diskette B (internal) installed
SYS_DSKC  EQU   0004h   ;Diskette C (external) installed
SYS_DSKD  EQU   0008h   ;Diskette D (external) installed
SYS_1SID  EQU   0010h   ;E1-E2 jumper (0 indicates drive A is double sided)
SYS_40TK  EQU   0020h   ;E3-E4 jumper (0 indicates drive A has 80 tracks)
SYS_60HZ  EQU   0040h   ;E5-E6 jumper (0 indicates 50 Hz system)
SYS_HARD  EQU   0080h   ;Winchester disk controller installed
SYS_PRT1  EQU   0100h   ;Serial port 1 installed
SYS_PRT2  EQU   0200h   ;Serial port 2 installed
SYS_PRT3  EQU   0400h   ;Serial port 3 installed
SYS_PRT4  EQU   0800h   ;Serial port 4 installed
SYS_GRFA  EQU   1000h   ;Graphics RAM bank A installed
SYS_GRFB  EQU   2000h   ;Graphics RAM bank B installed
SYS_GRFC  EQU   4000h   ;Graphics RAM bank C installed
SYS_RSVD  EQU   8000h   ;Reserved

;Speaker control - Put code in AH and execute INT 48h

SPK_INT   EQU   48h     ;INT number
SPK_BEEP  EQU   0h      ;Sound speaker, AL has number of 25ms ticks (40=1 sec)
SPK_STAT  EQU   1h      ;Get speaker status, Z-flag is set if enabled
SPK_FREQ  EQU   2h      ;Set speaker frequency from CX (1563 = 800 Hz)
SPK_ON    EQU   3h      ;Turn on speaker until SPK_OFF or SKP_BEEP
SPK_OFF   EQU   4h      ;Turn off speaker
SUBTTL  Data segment

; external variables used:
; drives - # of disk drives on system
; flags - global flags as per flginfo structure defined in pcdefs
; trans - global transmission parameters, trinfo struct defined in pcdefs
; portval - pointer to current portinfo structure (currently either port1
;    or port2)
; port1, port2 - portinfo structures for the corresponding ports

; global variables defined in this module:
; xofsnt, xofrcv - tell whether we saw or sent an xoff.

datas   segment public 'datas'
        extrn   drives:byte,flags:byte, trans:byte
        extrn   portval:word, port1:byte, port2:byte

false   equ     0
true    equ     1

machnam db      'TI-PRO (rev ',REVLVL+'0',')$'
badbd   db      cr,lf,'Unimplemented baud rate$'
noimp   db      cr,lf,'Command not implemented.$'
shkmsg  db      'Not implemented.'
shklen  equ     $-shkmsg
setktab db      0
setkhlp db      0
crlf    db      cr,lf,'$'
delstr  db      BS,' ',BS,'$'   ; Delete string.
clrlin  db      cr              ; Must be at clreol-1
clreol  db      esc,'[K$'       ; Clear line.
homeras db      esc,'[H',esc,'[J$' ;Home and erase
posseq  db      esc,'[00;00H$'  ; Escape sequence to position cursor
  rowhi equ posseq+2
  rowlo equ posseq+3
  colhi equ posseq+5            ; Modified by POSCUR routine
  collo equ posseq+6
invvid  db      esc,'[0;7m($'   ; Inverse video
norvid  db      ')',esc,'[0;1m$'; Normal video (WHITE=BOLD, as opposed to GREEN)

  ;For IBM-PC, numbers are 12,20,5,20,199 for coordinates to 613,194
xmult   dw      9               ; Scale TEK to TI by 9/13
xdiv    dw      13              ;  so that 0-1023 converts to 0-708
ymult   dw      5               ; Scale TEK to TI by 5/13
ydiv    dw      13              ;  so that 0-779 converts to 299-0
ybot    dw      299             ; Bottom of screen is Y=299
oldx    dw      0               ; Previous scaled coordinates
oldy    dw      0

palnorm db      0,1,2,3,4,5,6,7 ;Normal colors
pal1pln db      0,7,2,3,4,5,6,1 ;For single-plane machines, 0=Black,1=White
pal3pln db      0,4,2,3,1,5,6,7 ;For three-plane machines,  0=Black,1=Green

sysdata dw      0               ;AX from SYS_INT
syssize dw      0               ;BX from SYS_INT

xofsnt  db      0               ; Say if we sent an XOFF.
xofrcv  db      0               ; Say if we received an XOFF.
count   dw      0               ; Number of chars in int buffer.
portin  db      0               ; Non-zero if port is initialized

porttab db      04h             ; 4 entries
        db      01h,'1$'
        dw      01h
        db      01h,'2$'
        dw      02h             ;*** NOTE: This is 2, not 0 ****
        db      01h,'3$'
        dw      03h
        db      01h,'4$'
        dw      04h

termtab db      11              ;Number of entries
        db      05h,'ADM3A$'
        dw      tty_adm3a
        db      04h,'GIGI$'
        dw      tty_gigi
        db      08h,'HEATH-19$'
        dw      tty_heath
        db      03h,'OFF$'
        dw      tty_dos
        db      02h,'ON$'
        dw      tty_heath       ;Same as HEATH-19
        db      06h,'TI-PRO$'
        dw      tty_tipro
        db      06h,'TVI910$'
        dw      tty_tvi910
        db      05h,'VT100$'
        dw      tty_vt100
        db      05h,'VT102$'
        dw      tty_vt102
        db      05h,'VT125$'
        dw      tty_vt125
        db      04h,'VT52$'
        dw      tty_vt52

tty_heath  dw   ctl_vt52        ;Control table
        db      01h,'HEATH19'   ;Type, name
        db      esc,'/K',0      ;VT52 superset

tty_vt52   dw   ctl_vt52
        db      02h,'VT52   '
        db      esc,'/Z',0      ;ANSI terminal in VT52 mode

tty_tipro  label word
tty_dos    dw   ctl_none        ;Use ANSI.SYS that is build into the BIOS
        db      03h,'TIPRO  '
        db      esc,'[?1;4c',0  ;Like a VT100 with graphics but no STP

tty_gigi   dw   ctl_ansi
        db      04h,'GIGI   '
        db      esc,'[?5c',0

tty_vt100  dw   ctl_ansi
        db      05h,'VT100  '
        db      esc,'[?1;0c',0

tty_vt102  dw   ctl_ansi
        db      06h,'VT102  '
        db      esc,'[?6c',0

tty_vt125  dw   ctl_ansi
        db      07h,'VT125  '
        db      esc,'[?12;7;0;102c',0

tty_adm3a  dw   ctl_adm
        db      08h,'ADM3A  '
        db      esc,']3',0      ; Something I made up

tty_tvi910 dw   ctl_adm
        db      09h,'TVI910 '
        db      esc,']0',0      ; Something I made up

IDSEQ   dw      tty_dos+10      ; Public pointer to string
CTLTAB  dw      ctl_none        ; Public pointer to control table

ctl_vt52 dw     0
ctl_ansi dw     0
ctl_none dw     0
ctl_adm  dw     0

modem   mdminfo <SCC1_ADAT,SCC1_ACMD,SCC1_BCMD>

tmp     db      ?,'$'
temp    dw      0
temp1   dw      ?               ; Temporary storage.
temp2   dw      ?               ; Temporary storage.
rdbuf   db      20 dup(?)       ; Buffer for input.

ourarg  termarg <>
SUBTTL  Data to init Serial Controller

PARMTA  DB 09h                  ;Select WR9
        DB SW9_RESET            ;Reset 8530
        DB 0Bh                  ;Select WR11
        DB SWB_RBRG+SWB_TBRG+0  ;No XTAL, RxC=BRG=TxC, TRxC pin is an input
        DB 0Eh                  ;Select WR14
        DB SWE_PCLK+SWE_BRENA   ;BRG source is PCLK pin, enable BRG
        DB 0Fh                  ;Select WR15
        DB SWF_NOINT            ;Disable external status interrupts
        DB 01h                  ;Select WR1
        DB SW1_NOINT            ;Disable all other interupts
        DB 03h                  ;Select WR3
        DB SW3_8BITS+SW3_RXEN   ;8 bits, enable receiver
        DB 04h                  ;Select WR4
        DB SW4_X16+SW4_1STOP+0  ;x16 clock, 1 stop bit, no parity
        DB 05h                  ;Select WR5
        DB SW5_DTR+SW5_8BITS+SW5_TXEN+SW5_RTS ;Raise DTR+RTS, 8 bits, Tx enable
PARMAS  EQU $-PARMTA
        ;The baud rate is set via GETBAUD and/or DOBAUD

  ;Channel B parameters
PARMTB  DB 0Fh                  ;Select WR15
        DB SWF_NOINT            ;Disable external status interrupts
        DB 01h                  ;Select WR1
        DB SW1_NOINT            ;Disable all other interrupts
        DB 05H                  ;Select WR5
        DB SW5_RTS              ;Raise RTSB (RCNTL) for internal modem
PARMBS  EQU $-PARMTB

BAUDAT  LABEL   WORD    ;Divisors for Z-8530 with 4.9152-MHz oscillator
        DW      0696h   ; 0   45.5 baud
        DW      05FEh   ; 1   50 baud
        DW      03FEh   ; 2   75 baud
        DW      02B8h   ; 3  110 baud (+0.03%)
        DW      0239h   ; 4  134.5 baud (Selectric)
        DW      01FEh   ; 5  150 baud
        DW      00FEh   ; 6  300 baud
        DW      007Eh   ; 7  600 baud
        DW      003Eh   ; 8 1200 baud
        DW      0029h   ; 9 1800 baud (-0.78%)
        DW      0024h   ;10 2000 baud (+1.05%)
        DW      001Eh   ;11 2400 baud
        DW      000Eh   ;12 4800 baud
        DW      0006h   ;13 9600 baud
        DW      0002h   ;14 19.2 kbaud
        DW      0000h   ;15 38.4 kbaud - not supported
BAUDLEN EQU     $-BAUDAT        ;Size of table in bytes
;End of init data

datas   ends
SUBTTL  Serial port routines -- Initialize

code    segment public
        extrn   comnd:near, dopar:near, prserr:near, atoi:near, prompt:near
        extrn   nout:near
        extrn   TERMEMU:near            ;Terminal emulator for TEK and VT100
        public  CLS,TEKDRAW,CROSHAIR    ;Graphics routines
        public  INMODEM,OUTMODEM        ;I/O to communications port
        public  INKEYB,OUTSCRN          ;I/O to console
        public  IDSEQ,CTLTAB            ;Used by TERMEMU routine
        assume  cs:code,ds:datas

;============================================================================
;  Serial-port routines - talks to the Async COMM card.
;============================================================================

; Initialization for using serial port.  Returns normally.
; This is called for by SEND, RECEIVE, and CONNECT commands.

SERINI  PROC    NEAR
        cld                     ; Do increments in string operations
        cmp portin,0            ; Is it initialized already?
        jne serinc              ; Yes, skip all this

        mov si,offset PARMTA    ; Addr of port A parameter table
        mov dx,modem.mdstat     ; Port A command/status addr
        in al,dx                ; Make sure it's pointing to WR0
        mov cx,PARMAS           ; Table size
serina: lods PARMTA             ; Get a byte
        out dx,al               ; Send it to 8530
        loop serina             ; Do all of port A

        mov si,offset PARMTB    ; Addr of port-B parameter table
        mov dx,modem.mdcom      ; Port B command/status addr
        in al,dx                ; Make sure it's pointing to WR0
        mov cx,PARMBS
serinb: lods PARMTB             ; Get a byte
        out dx,al               ; Send it to 8530
        loop serinb

serinc: mov portin,0FFh         ; Flag that port is set up
        ret
SERINI  ENDP


; Reset the serial port.  This is the opposite of SERINI.  Calling
; this twice without intervening calls to SERINI should be harmless.
; Returns normally.

SERRST  PROC    NEAR
        mov portin,00h          ; Port is not set up
        ret                     ; All done.
SERRST  ENDP

; Clear the input buffer. This throws away all the characters in the
; serial interrupt buffer.  This is particularly important when
; talking to servers, since NAKs can accumulate in the buffer.
; Do nothing since we are not interrupt driven.  Returns normally.

CLRBUF  PROC    NEAR
        mov cx,8
        mov dx,modem.mddat      ; Address channel-A data register
clrbf1: in al,dx                ; Clear out anything in the receive FIFO
        loop clrbf1
        mov count,cx            ; Set count to zero
        ret
CLRBUF  ENDP
SUBTTL  Serial port routines -- Output to the port

; Put the char in AH to the serial port.  This assumes the
; port has been initialized.  Should honor xon/xoff.  Skip returns on
; success, returns normally if the character cannot be written.

OUTCHR  PROC    NEAR
        push bx
        push cx
        push dx
        mov bx,portval
        cmp [bx].floflg,0       ; Are we doing flow control.
        je outch2               ; No, just continue.
        xor cx,cx               ; clear counter
outch1: cmp xofrcv,true         ; Are we being held?
        jne outch2              ; No - it's OK to go on.
        loop outch1             ; held, try for a while
        mov xofrcv,false        ; timed out, force it off and fall thru.
outch2: mov al,ah               ; Parity routine works on AL.
        call dopar              ; Set parity appropriately.

        mov ah,al               ; Preserve character for a bit
        xor cx,cx               ; Set loop counter to max
        mov dx,modem.mdstat     ; Port 1 channel A command/status address
outch3: in al,dx                ; Get RR0 contents
        and al,SR0_TBUFE        ; Transmit buffer empty?
        jnz outch4              ; Yes, output char
        loop outch3             ; No, try again
         jmp outch5             ; Loop counter expired, give up
outch4: mov dx,modem.mddat      ; Get port 1 channel A data address
        mov al,ah               ; Get the character
        out dx,al               ; Send it
        pop dx
        pop cx
        pop bx
        jmp RSKP                ; Skip return for OK

outch5: pop dx
        pop cx
        pop bx
        ret                     ; Non-skip return due to timeout
OUTCHR  ENDP
SUBTTL  Serial port routines -- Input from port

; Port read character.  Check the port status.  If no data, skip
; return.  Else, read in a char and return.

PRTCHR  PROC    NEAR
        push bx
        push dx
        call chkxon

        mov dx,modem.mdstat     ; Port 1 channel A command address
prtch1: in al,dx                ; Read RR0 contents
        and al,SR0_RBUFA        ; Any characters in receive FIFO?
        jz prtch4               ; No, exit without waiting
        mov dx,modem.mddat      ; Yes, get port 1 channel A data address
        in al,dx                ; Get the character

        mov bx,portval
        cmp [bx].parflg,PARNON  ; no parity?
        je prtch3               ; then don't strip
        and al,7fh              ; else turn off parity
prtch3: pop dx
        pop bx
        ret

prtch4: pop dx                  ; Here when no character is available
        pop bx
        jmp RSKP                ; no chars...
PRTCHR  ENDP


; Local routine to see if we have to transmit an xon
CHKXON  PROC    NEAR
        push    bx
        mov     bx,portval
        cmp     [bx].floflg,0   ; doing flow control?
        je      chkxo1          ; no, skip all this
        cmp     xofsnt,false    ; have we sent an xoff?
        je      chkxo1          ; no, forget it
        mov     ax,[bx].flowc   ; ah gets xon
        call    outchr          ; send it
        nop
        nop
        nop                     ; in case it skips
        mov     xofsnt,false    ; remember we've sent the xon.
chkxo1: pop     bx              ; restore register
        ret                     ; and return
CHKXON  ENDP
SUBTTL  Serial port routines -- Send a break

; Send a break out the current serial port.  Returns normally.
SENDBR  PROC    NEAR
        push cx
        push dx
        push ax
        xor cx,cx               ; Clear loop counter.
        mov dx,modem.mdstat     ; Address channel-A command port
        mov al,5                ; Point to register 5
        out dx,al
        jmp short $+2
        in  al,dx               ; Get current setting.
        mov ah,al               ; Copy the bits
        mov al,5                ; Point back to register 5
        out dx,al
        mov al,ah               ; Get old bits
        or  al,SW5_BREAK        ; Set send-break bit
        out dx,al               ; Start the break
pause:  loop pause              ; Wait a while.
        mov al,5                ; Point to register 5
        out dx,al
        jmp short $+2
        mov al,ah               ; Clear send-break bit
        out dx,al               ; Stop the break
        pop ax
        pop dx
        pop cx
        ret                     ; And return.
        ret
SENDBR  ENDP
SUBTTL  Serial port routines -- Change baud rate

; Set the baud rate for the current port, based on the value
; in the portinfo structure.  Returns normally.
; Called from SET BAUD command with new index in PORT.BAUD, previous in AX

DOBAUD  PROC    NEAR
        push bx
        mov bx,portval          ;Get pointer
        mov bx,[bx].baud        ;Get new baud-rate index
        shl bx,1                ;Multiply by 2
        cmp BAUDAT[bx],0        ;Test for zero
        jne dobod1              ;Nonzero is OK
        mov bx,portval          ;Error, get back to data structure
        mov [bx].baud,ax        ;Restore previous baud rate number
        mov ah,prstr
        mov dx,offset badbd     ;Bad baud rate
        int dos
        pop bx
        ret

dobod1: mov ax,BAUDAT[bx]       ;Get BRG divisor
        call SETBAUD            ;Send AX to baud-rate-divisor
        pop bx
        ret
DOBAUD  ENDP


;Routine to send AX to the Baud Rate Generator.  Preserves all regs

SETBAUD PROC NEAR
        push dx
        push ax                 ;Save rate
        mov dx,modem.mdstat     ;Address the channel-A command port
        mov al,13               ;Point to register 13
        out dx,al
        jmp short $+2           ;Slight delay to let hardware respond
        mov al,ah               ;High-order part of divisor
        out dx,al
        jmp short $+2
        mov al,12               ;Point to register 12
        out dx,al
        jmp short $+2
        pop ax
        out dx,al               ;Low-order part of divisor
        pop dx
        ret
SETBAUD ENDP


; Get the current baud rate from the serial card and set it
; in the portinfo structure for the current port.  Returns normally.
; This is used during initialization.

GETBAUD PROC    NEAR
        mov dx,modem.mdstat     ;Address channel-A command port
        mov al,13               ;Point to register 13
        out dx,al
        jmp short $+2           ;Small delay
        in  al,dx               ;Read RR13
        mov ah,al               ;Save high-order part
        mov al,12               ;Point to register 12
        out dx,al
        jmp short $+2
        in  al,dx               ;Read RR12
;Baud rate = (300*256)/(AX+2)
        mov bx,0                ;Index value
getbd1: cmp ax,BAUDAT[bx]       ;See if known value
        je  getbd2              ;Found it
        add bx,2                ;Point to next word
        cmp bl,BAUDLEN          ;End of table?
        jl  getbd1              ;No, keep looking
        mov bx,B1200*2          ;Yes, force it to 1200 baud
        mov ax,BAUDAT[bx]
        call SETBAUD

getbd2: mov ax,bx               ;Get the byte index
        shr ax,1                ;Reduce to number from 0 to 15
        mov bx,portval          ;Point to structure
        mov [bx].baud,ax        ;Store where SHOW processor can see it
        ret
GETBAUD ENDP
SUBTTL  Machine-dependent screen update routines

;============================================================================
;  Screen handling routines
;============================================================================


; Delete a character from the terminal.  This works by printing
; backspaces and spaces.  Returns normally.

DODEL   PROC    NEAR
        mov ah,prstr
        mov dx,offset delstr    ; Backspace-space-backspace
        int dos
        ret
DODEL   ENDP


; Move the cursor to the left margin, then clear to end of line.
; Returns normally.

CTLU    PROC    NEAR
        mov ah,prstr
        mov dx,offset clrlin    ;Output CR, then clear to end of line
        int dos
        ret
CTLU    ENDP

; Clear to the end of the current line.  Returns normally.

CLEARL  PROC    NEAR
        mov ah,prstr
        mov dx,offset clreol    ;Erase from cursor position to end of line
        int dos
        ret
CLEARL  ENDP


; This routine blanks the screen.  Returns normally.

CMBLNK  PROC    NEAR
        mov     ah,13h          ;Function 13h of INT 49h clears the screen
        int     49h
        ret
CMBLNK  ENDP


; Produce a short beep.  The PC DOS bell is long enough to cause a loss
; of data at the port.  Returns normally.

BEEP1   PROC    NEAR
        mov ah,SPK_FREQ         ; Set speaker frequency
        mov cx,1000             ; Approx 1.5 kHz
        int SPK_INT
        ret
BEEP1   ENDP

BEEP    PROC    NEAR
        call BEEP1              ; Set the frequency
        mov ah,SPK_BEEP         ; Timed beep function
        mov al,5                ; 5/40 = 1/8 second
        int SPK_INT
        ret
BEEP    ENDP


; Homes the cursor.  Returns normally.

LOCATE  PROC    NEAR
        mov dx,0                ; Go to top left corner of screen.
        jmp poscur
LOCATE  ENDP


; Write a line at the bottom of the screen...
; the line is passed in dx, terminated by a $.  Returns normally.

PUTMOD  PROC    NEAR
        push    dx              ; preserve message
        mov     dx,24*100h      ; now address line 24
        call    poscur
        mov     dx,offset invvid
        mov     ah,prstr
        int     dos             ;Set inverse video
        pop     dx              ; get message back
        mov     ah,prstr
        int     dos             ; write it out
        mov     dx,offset norvid
        mov     ah,prstr
        int     dos             ;Normal video
        ret                     ; and return
PUTMOD  ENDP


; Clear the mode line written by PUTMOD.  Returns normally.

CLRMOD  PROC    NEAR
        mov     dx,1800h
        call    poscur          ; Go to bottom row.
        call    clearl          ; Clear to end of line.
        ret
CLRMOD  ENDP


; Put a help message on the screen.
; Pass the message in ax, terminated by a null.  Returns normally.

PUTHLP  PROC    NEAR
        push    ax              ; preserve this
        mov     ah,prstr
        mov     dx,offset crlf
        int     dos
        pop     si              ; point to string again
puthl3: lodsb                   ; get a byte
        cmp     al,0            ; end of string?
        je      puthl4          ; yes, stop
        mov     dl,al
        mov     ah,dconio
        int     dos             ; else write to screen
        jmp     puthl3          ; and keep going
puthl4: mov     ah,prstr
        mov     dx,offset crlf
        int     dos
        ret
PUTHLP  ENDP


; Position the cursor according to contents of DX:
; DH contains row, DL contains column.  Returns normally.

POSCUR  PROC    NEAR
        mov al,dh               ;Get row
        inc al                  ;Top row is row #1, not zero
        aam                     ;ah gets tens, al gets units
        add ax,'00'             ;Convert to ASCII
        mov rowhi,ah            ;Store in ESCape sequence
        mov rowlo,al
        mov al,dl               ;Get column
        inc al
        aam
        add ax,'00'
        mov colhi,ah
        mov collo,al
        mov ah,prstr
        mov dx,offset posseq    ;Output ESC,'[',row,';',col,'H'
        int     dos
        ret
POSCUR  ENDP
SUBTTL TEKTRONIX-4010 emulation


;**** NOTE: This version of TERM really belongs in MSCOMM.ASM ****
TERM    PROC    NEAR
        mov si,ax               ; this is source
        mov di,offset ourarg    ; place to store arguments
        mov ax,ds
        mov es,ax               ; address destination segment
        mov cx,size termarg
        rep movsb               ; copy into our arg blk
        call TERMINI            ; Set 25th line, graphics bright

; Get a character from the modem, send it to the screen

term1:  call INMODEM            ; Input from modem
          jmp short term2       ; No input available
          nop                   ; 3rd byte
        push ax
        call TERMEMU            ; Call terminal emulation routines
        pop ax
        test ourarg.flgs,capt   ; capturing output?
        jz term2                ; no, forget it
        call ourarg.captr       ; else call the routine

; Get character from the keyboard, send it to the modem port

term2:  call INKEYB             ; Get char from keyboard (with translation)
          jmp short term1       ; No input available
          nop                   ; 3rd byte
        cmp al,ourarg.escc      ; Match our escape character?
        je term3                ; yes, exit
        call OUTMODEM           ; output the character
        test ourarg.flgs,lclecho ; echoing?
        jz term1                ; no, continue loop
        push ax
        call TERMEMU
        pop ax
        and al,7Fh              ; Ignore parity
        cmp al,CR               ; Was the RETURN key pressed?
        jne term1
        mov al,LF               ; Yes, echo a linefeed to the screen
        call TERMEMU
        jmp term1

term3:  call TERMEND            ; Undo line 25 or graphics
        ret
TERM    ENDP
;**** NOTE: This version of TERM really belongs in MSCOMM.ASM ****


;Routine to make graphics more visible.
;For a 1-plane monochrome display, draw bright lines on a black background
;For a 3-plane color display, draw green lines on a black background
;(It is better to use only one color on a color monitor, so as to avoid
;any problems if the convergence is not exact.)
;Line 25 is not given any special treatment.

TERMINI PROC NEAR
        mov si,offset pal3pln   ;New palette if 3 planes
        test sysdata,SYS_GRFC   ;Graphics plane C installed ?
        jnz termin1             ;Yes
        mov si,offset pal1pln   ;No, only single plane graphics
termin1:call palette            ;Set up so that color 1 is more visible
        ret
TERMINI ENDP


;Routine to make graphics dimmer.
;For a 1-plane monochrome display, graphics will be very dim
;For a 3-plane color display, graphics will be blue (text will be white)
;Line 25 is not given any special treatment

TERMEND PROC NEAR
        mov si,offset palnorm   ;Reset to normal palette
        call palette
        ret
TERMEND ENDP


;Routine to input a character from the keyboard with translation.
;Skip return if input was available, character in AL.

INKEYB  PROC NEAR               ;Input from the keyboard
        mov ah,dconio
        mov dl,0ffh
        int dos
        jc  inkey1              ;Carry set if no character available
        and al,7Fh              ;No meta characters (yet)
        je  inkey1              ;*HACK* No char if null
        jmp RSKP                ;Skip return of char is available
inkey1: ret                     ;Error return if no input
INKEYB  ENDP


;Routine to output character in AL to the screen.

OUTSCRN PROC NEAR               ;Output one character to the screen
        mov dl,al
        mov ah,conout
        int dos                 ; go print it
        ret
OUTSCRN ENDP


;Routine to input a character from the modem port.
;Skip return if input was available, character in AL.

INMODEM PROC NEAR               ;Input from the modem
        call PRTCHR
          jmp RSKP              ;Skip return if char is available
        ret
INMODEM ENDP


;Routine to output character in AL to the modem port.

OUTMODEM PROC NEAR              ;Output one character to the modem
        push ax                 ;Preserve character in AL
        mov ah,al
        call OUTCHR             ;Output char in AH
        nop                     ;Ignore non-skip return
        nop
        nop
        pop ax
        ret
OUTMODEM ENDP


;Routine to draw a line on the screen, using TEKTRONIX coordinates.
;X coordinate in AX, 0=left edge of screen, 1023=right edge of screen.
;Y coordinate in BX, 0=bottom of screen, 779=top of screen.
;Visiblity flag in CL, 0=move invisible, 1=draw a line.

;The TI-PRO has (719,299) as the coordinate of the lower-right corner.
;Calculate endpoint X=(9/13)*(HIX*32+LOX), Y=299-(5/13)*(HIY*32+LOY)

;The IBM-PC has (639,199) as the coordinate of the lower-right corner.
;Calculate endpoint X=(12/20)*(HIX*32+LOX), Y=199-(5/20)*(HIY*32+LOY)

TEKDRAW PROC NEAR
        imul xmult              ; Multiply by 9
        idiv xdiv               ; Divide by 13
        push ax                 ; X is now between 0 and 708
        mov ax,bx
        imul ymult              ; Multiply by 5
        idiv ydiv               ; Divide by 13
        mov  bx,ybot            ; Y is now between 0 and 299
        sub  bx,ax              ; Put new Y in right reg
        pop  ax                 ; Put new X in right reg
        mov  si,oldx            ; Previous position
        mov  di,oldy
        mov  dl,cl              ; Draw a line in 1 plane if DL=1
        or   dl,80h             ; Use fast line drawing routine
        call LINE
        mov  oldx,si            ; Update position
        mov  oldy,di
        ret
TEKDRAW ENDP


;Routine to trigger the crosshairs, wait for a key to be struck, and send
;5 byte out the modem port.

CROSHAIR PROC NEAR
        ret
CROSHAIR ENDP
SUBTTL  Screen routines -- Graphics
;Note: All arguments to these 3 routines are passed in the registers.

        public  CLS, PALETTE, LINE
;==============================================================================
; CLS   Subroutine to clear the screen.  Call with 0 in AL to clear both,
;       1 to clear graphics only, 2 to clear text only.
;==============================================================================

CLS     PROC    NEAR            ;0=both, 1=graphics, 2=text
        push    ax
        test    al,1            ;CLS 1 does not clear text
        jnz     cls1
        mov     ah,13h          ;CLS 0 or CLS 2 clears text screen
        int     49h
cls1:   pop     ax
        test    al,2            ;CLS 2 does not clear graphics
        jnz     cls2
        mov     ah,14h          ;CLS 0 or CLS 1 clears graphics screen
        int     49h
cls2:   ret
CLS     ENDP

; Colors 0=Black, 1=Blue, 2=Red, 3=Magenta, 4=Green, 5=Cyan, 6=Yellow, 7=White
planea  equ     0C000h          ;1st graphics plane (blue)
planeb  equ     0C800h          ;2nd graphics plane (red)
planec  equ     0D000h          ;3rd graphics plane (green)
  ; The colors listed above are assuming that the PALETTE is not changed.
latchs  equ     0DF00h          ;Segment number of color latches
latchb  equ     00010h          ;Blue output latch
latchg  equ     00020h          ;Green output latch
latchr  equ     00030h          ;Red output latch
palblue equ     10101010b       ;Default blue latch
palgren equ     11001100b       ;Default green latch
palred  equ     11110000b       ;Default red latch

;==============================================================================
; PALETTE Subroutine to change the color palette (ala BASIC)
;       Call with DS:SI pointing to 8 bytes defining the new colors
;       Preserves all but AX,SI.
;==============================================================================

PALETTE PROC    NEAR
        push bx
        push cx
        mov bx,0                ;Start at 1st byte
        mov ah,0                ;Code for blue latch
        mov cx,0                ;Code for red and green latches

palet1: mov al,CS:PALBITS[bx]   ;Bit to be set
        test byte ptr [bx+si],01h ;Check blue component of this color
        jz palet2
        or  ah,al               ;Set the bit
palet2: test byte ptr [bx+si],02h ;Check red component
        jz palet3
        or  ch,al               ;Set the bit
palet3: test byte ptr [bx+si],04h ;Check the green component
        jz palet4
        or  cl,al
palet4: shl al,1                ;Do next bit
        add bx,1                ;Point to next input data byte
        cmp bl,8                ;Done all 8?
        jl  palet1

        push ds
        mov bx,latchs           ;Address the latch segment
        mov ds,bx
        mov DS:[latchb],ah      ;Set the hardware latches
        mov DS:[latchg],cl
        mov DS:[latchr],ch
        pop ds
        pop cx
        pop bx
        ret
PALBITS db 01h,02h,10h,20h,04h,08h,40h,80h   ;Red & Green bits swapped
PALETTE ENDP

;==============================================================================
; LINE  Subroutine to plot a line with endpoints in BX,CX and SI,DI. The method
;       used is an adaptation of the octantal dynamic differential analyzer(DDA).
;
; Registers at CALL             Registers on return
; -----------------             -------------------
; SI=Start X coord              SI=End X coord (start for next time)
; DI=Start Y coord              DI=End Y coord
; AX=End X coord                AX=garbage
; BX=End Y coord                BX=garbage
; CX=anything                   CX=unchanged (for loop counter)
; DX=Color code, 0-7 or 80-87   DX=unchanged
; BP,SP,CS,DS,ES,SS are all unchanged
;
; I considered returning meaningful data in AX and BX (such as the last bit
; and word address drawn), but that is complicated by the fact that the lines
; are always drawn left to right.
;==============================================================================

LINE    proc    near
        push    ax                      ;End coords in (AX,BX) will be returned
        push    bx                      ; in (SI,DI)
        push    cx                      ;Preserve CX,BP,DS
        push    bp
        push    ds
;       call    clip                    ;Clip line to fit in screen bounds
;       jnz     done                    ;Jump if line is on screen
        cmp     ax,si                   ;Compare X1 to X2
        jl      plusx                   ;Jump if X1 is to left of X2
        xchg    ax,si                   ;Swap points so point 1 is to left
        xchg    bx,di                   ;  This mirrors quadrants 2,3 to 1,4
plusx:  sub     si,ax                   ;Get delta X into SI
        sub     di,bx                   ;Get delta Y into DI

; Left-hand coordinate in (AX,BX), delta movement in (SI,DI)
; Map X1,Y1 in AX,BX to an offset into the video buffer in BX and bit pos in AX

        shl     bx,1                    ;2*Y
        shl     bx,1                    ;4*Y
        mov     bp,bx                   ;Save 4*Y
        shl     bx,1                    ;8*Y
        shl     bx,1                    ;16*Y
        shl     bx,1                    ;32*Y
        add     bp,bx                   ;DX = 36*Y
        shl     bx,1                    ;64*Y
        shl     bx,1                    ;128*Y
        sub     bx,bp                   ;128Y - 36Y = 92*Y
        mov     cl,al                   ;Low 4 bits of X position
        and     cl,0Fh
        shr     ax,1                    ;Divide by 8 bits per byte
        shr     ax,1
        shr     ax,1
        and     ax,0fffeh               ;Truncate down to word boundary
        add     bx,ax
        mov     ax,8000h                ;Start with set bit on left edge
        shr     ax,cl                   ;Shift it over the correct amount

;AX has bit in position, BX has word address, SI has delta-X, DI has delta-Y

        mov     bp,92                   ;Offset from 1 pixel to one below it
        or      di,di                   ;See if delta y is below zero
        jg      quad3                   ;Yes, already on quadrant 3
        neg     di                      ;Get absolute value of delta y
        neg     bp                      ;Move toward top of screen
quad3:  test    dl,1                    ;Want color 1?
        jz      try2                    ;No
        mov     cx,planea               ;Yes, do BLUE
        call    line1
try2:   test    dl,2                    ;Want color 2?
        jz      try3                    ;No
        mov     cx,planeb               ;Yes, do RED
        call    line1
try3:   test    dl,4                    ;Want color with this bit on?
        jz      lindone                 ;No
        mov     cx,planec               ;Yes, do GREEN
        call    line1

lindone:pop     ds
        pop     bp
        pop     cx
        pop     di                      ;Return end points (formerly in AX,BX)
        pop     si                      ; in (SI,DI)
        ret

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

line1:  mov     ds,cx                   ;Segment for video buffer
        push    ax                      ;Starting bit position
        push    bx                      ;Starting address
        push    dx                      ;Color bits (SI and DI not modified)

        cmp     di,si                   ;Compare delta-Y with delta-X
        jg      line1a                  ;Greater than +/- 45 degrees
        call    line2                   ;Flat line, count with delta-X
        jmp     short line1b
line1a: call    line3                   ;Steep line, count with delta-Y

line1b: pop     dx
        pop     bx
        pop     ax
        ret

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; Here when slop is less than +/- 45 degrees

line2:  mov     cx,si                   ;Number of pixels to plot = delta x
        inc     cx                      ;  + 1
        mov     dx,si                   ;Initialize line error to -(deltax)/2
        shr     dx,1                    ;
        neg     dx                      ;

line2a: or      [bx],ax                 ;Turn on pixel pointed to by BX and Al
        ror     ax,1                    ;Increment X direction
        jnc     line2b                  ;
        add     bx,2                    ;
line2b: add     dx,di                   ;Add delta y to line error
        jl      line2c                  ;Jump for next pixel if error < 0
        add     bx,bp                   ;Go up (or down) one pixel
        sub     dx,si                   ;Subtract delta x from line error
line2c: loop    line2a                  ;Set next pixel
        ret

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; Here when slope is greater than +/- 45 degrees

line3:  mov     cx,di                   ;Number of pixels to plot = delta y
        inc     cx                      ;  + 1 (Delta Y was negated above)
        mov     dx,di                   ;Initialize line error to -(deltay)/2
        shr     dx,1                    ;
        neg     dx                      ;

line3a: or      [bx],ax                 ;Turn on pixel pointed to by BX and Al
        add     bx,bp                   ;Move up (or down) 1 pixel
        add     dx,si                   ;Add delta x to line error
        jl      line3c                  ;Jump for next pixel if error < 0
        ror     ax,1                    ;Time to increment X direction
        jnc     line3b                  ;
        add     bx,2                    ;
line3b: sub     dx,di                   ;Subtract delta y from line error
line3c: loop    line3a                  ;Set next pixel
        ret

LINE    endp
SUBTTL  Interface to KERMIT's command parser

;============================================================================
;  General KERMIT or MS-DOS routines.
;============================================================================

; this is called by Kermit initialization.  It checks the
; number of disks on the system, sets the drives variable
; appropriately.  Returns normally.

DODISK  PROC    NEAR
        mov ah,gcurdsk                  ; Current disk value to AL.
        int dos
        mov dl,al                       ; Put current disk in DL.
        mov ah,seldsk                   ; Select current disk.
        int dos                         ; Get number of drives in AL.
        mov drives,al
        ret
DODISK  ENDP


; Initialize variables to values used by the TI PROFESSIONAL version.

LCLINI  PROC    NEAR
        int     SYS_INT         ;Get system configuration info
        mov     sysdata,ax      ;Bit mask of installed devices
        mov     syssize,bx      ;Size of RAM
        call    BEEP1           ;In case BASIC left the speaker messed up
        mov     flags.vtflg,0   ;HEATH-19 emulation is off
        ret
LCLINI  ENDP


; Get a file handle for the communications port.  Use DOS call to get the
; next available handle.  If it fails, ask user what value to use (there
; should be a predefined handle for the port, generally 3).  The open
; will fail if the system uses names other than "COM1" or "COM2".

OPNPRT  PROC    NEAR
        ret
OPNPRT  ENDP



SHOWKEY PROC    NEAR
        mov ax,offset shkmsg
        mov cx,shklen
        ret
SHOWKEY ENDP


; Set heath emulation on/off.  Called from SET TERMINAL-EMULATION command

VTS     PROC    NEAR
        mov dx,offset termtab
        mov bx,0
        mov ah,cmkey
        call comnd              ;Keyword, HEATH-19, VT102, ADM3A, or OFF
          jmp r
        push bx
        mov ah,cmcfm
        call comnd
          jmp short vt0
          nop
        pop bx
        mov ax,0[bx]            ; Get the control table address
        mov CTLTAB,ax
        mov al,2[bx]            ; Get terminal type
        mov flags.vtflg,al
        add bx,2+8              ; Get addr of ID sequence
        mov IDSEQ,bx
        ret

vt0:    pop bx
        ret
VTS     ENDP


notimp: mov ah,prstr
        mov dx,offset noimp
        int dos
        jmp prserr


; Set the current port.  Called from SET PORT command

COMS    PROC    NEAR
        mov dx,offset porttab
        mov bx,0
        mov ah,cmkey
        call comnd
         jmp r
        push bx
        mov ah,cmcfm
        call comnd              ; Get a confirm.
         jmp comx               ;  Didn't get a confirm.
         nop
        call SERRST             ; Reset previous serial port
        pop bx
        mov flags.comflg,bl     ; Set the comm port flag.

;**** According to the MSXSYS.DOC, flags.comflg is supposed to be 0
;**** when using port 2.  This makes it difficult to use ports 3 and 4.

        cmp flags.comflg,1              ;Port 1?
        jne coms2
        mov ax,offset port1
        mov portval,ax
        mov modem.mddat,SCC1_ADAT       ;Data reg
        mov modem.mdstat,SCC1_ACMD      ;Channel A command/status
        mov modem.mdcom,SCC1_BCMD       ;Channel B command/status
        call SERINI
        ret

coms2:  cmp flags.comflg,2              ;Port 2?
        jne coms3
        mov ax,offset port2
        mov portval,ax
        mov modem.mddat,SCC2_ADAT       ;Data reg
        mov modem.mdstat,SCC2_ACMD      ;Channel A command/status
        mov modem.mdcom,SCC2_BCMD       ;Channel B command/status
        call SERINI
        ret

coms3:  cmp flags.comflg,3              ;Port 3?
        jne coms4
        mov ax,offset port3
        mov portval,ax
        mov modem.mddat,SCC3_ADAT       ;Data reg
        mov modem.mdstat,SCC3_ACMD      ;Channel A command/status
        mov modem.mdcom,SCC3_BCMD       ;Channel B command/status
        call SERINI
        ret

coms4:  mov ax,offset port4             ;Port 4
        mov portval,ax
        mov modem.mddat,SCC4_ADAT       ;Data reg
        mov modem.mdstat,SCC4_ACMD      ;Channel A command/status
        mov modem.mdcom,SCC4_BCMD       ;Channel B command/status
        call SERINI
        ret

comx:   pop bx
        ret
COMS    ENDP


; Jumping to this location is like retskp.  It assumes the instruction
;   after the call is a jmp addr.

RSKP    PROC    NEAR
        pop bp
        add bp,3
        push bp
        ret
RSKP    ENDP


; Jumping here is the same as a ret.

R       PROC    NEAR
        ret
R       ENDP

code    ends
        end
```
{% endraw %}

## MSXWNG.ASM

{% raw %}
```
	public  serini, serrst, clrbuf, outchr, coms, vts, dodel, ctlu
        public  cmblnk, locate, lclini, prtchr, dobaud, clearl
        public  dodisk, getbaud, beep, term, puthlp
	public	count, poscur, machnam, sendbr, putmod, clrmod
	public	setktab, setkhlp, xofsnt, showkey
        include msdefs.h

false   equ     0
true	equ	1	

ctrla	equ	1		; Control-A.

auxin	equ	3
auxout	equ	4
auxfil	equ	3		; file number of aux file.
iordy	equ	6		; input ready function
write	equ	40h
wbios	equ	88h
settrp	equ	02h
clrtrp	equ	03h
chrrdy	equ	01h
txrdy	equ	02h

rcvdat	equ	1080h
rcvstat equ	1082h
rcvmod	equ	1084h
rcvcmd	equ	1086h
trdat	equ	1088h
trmod	equ	108ch
wrcmd	equ	108eh

; mode bits
mod1	equ	4dh			; clock rate, 8 bits, 1 stop bit
mod2	equ	30h			; internal clock

; command register bits
txen	equ	01h
dtr	equ	02h
rxen	equ	04h
brk	equ	08h
clrerr	equ	10h
rts	equ	20h


datas   segment public 'datas'
        extrn   drives:byte, flags:byte, trans:byte
	extrn	portval:word, port1:byte, port2:byte

portin	db	0
crlf    db      cr,lf,'$'
machnam	db	'FIELD TEST Wang$'
noimp	db	cr,lf,'Command not implemented.$'
shkmsg	db	'Not implemented.'
shklen	equ	$-shkmsg
xofsnt	db	0		; Say if we sent an XOFF.
xofrcv	db	0		; Say if we received an XOFF.
setktab	db	0
setkhlp	db	0
invseq	db	esc,'[7m$'	; Reverse video on.
nrmseq	db	esc,'[0m$'	; Reverse video off.
ivlseq	db	79 dup (' '),cr,'$' 	; Make a line inverse video
comphlp db      cr,lf,'1 (COM1)   2 (COM2)$'    
delstr  db      BS,' ',BS,'$' 	; Delete string.
clrlin	db	cr,esc,'[K$'
tmp     db      ?,'$'
temp    dw      0
temp1   dw      ?               ; Temporary storage.
temp2   dw      ?               ; Temporary storage.

; Entries for choosing communications port. [19b]
comptab db      04H
        db      01H,'1$'
        dw      01H
        db      01H,'2$'
        dw      00H
        db      04H,'COM1$'
        dw      01H
        db      04H,'COM2$'
        dw      00H

; variables for serial interrupt handler

source  db      bufsiz DUP(?)   ; Buffer for data from port.
bufout  dw      0               ; buffer removal ptr
count   dw      0               ; Number of chars in int buffer.
bufin   dw      0               ; buffer insertion ptr
telflg  db      0               ; Are we acting as a terminal. [16] [17c]
clreol  db      esc,'[0K$'
blank	db	esc,'[H',esc,'[J$'
movcur  db      esc,'['
colno   db      20 dup (?)
ten     db      10
prthnd  dw      0
ourarg  termarg <>
; must parallel baud rate defs in pcdefs.
baudtab db	0ffh		; 45.5 baud (not supported)
	db	0		; 50
	db	1		; 75
	db	2		; 110
	db	3		; 134.5
	db	4		; 150
	db	5		; 300
	db	6		; 600
	db	7		; 1200
	db	8		; 1800
	db	9		; 2000
	db	10		; 2400
	db	12		; 4800
	db	14		; 9600
	db	15		; 19.2k
	db	0ffh		; 38.4k (ha)

nbaud	equ	$-baudtab
qid	dw	?
prtcnt	dw	?
trqid	dw	?
tmqid	dw	?
brflg	db	?
datas   ends

code    segment public
        extrn   comnd:near, dopar:near, prserr:near
        assume  cs:code,ds:datas

DODISK  PROC    NEAR
	mov ah,gcurdsk			; Current disk value to AL.
	int dos
	mov dl,al			; Put current disk in DL.
	mov ah,seldsk			; Select current disk.
	int dos				; Get number of drives in AL.
	mov drives,al
	ret
DODISK  ENDP

; Clear the input buffer before sending a packet. [20e]

CLRBUF  PROC    NEAR
	mov	ah,ioctl
	mov	bx,auxfil
	mov	al,iordy
	int	dos
	cmp	al,0ffh
	jne	clrb1			; not ready, keep going
	mov	ah,auxin
	int	dos
	jmp	clrbuf			; read char and keep going.
clrb1:	mov	count,0
	mov ax,offset source
	mov bufin,ax
        mov bufout,ax
        ret
CLRBUF  ENDP

; Common routine to clear to end-of-line. [19a]

CLEARL  PROC    NEAR
        mov dx,offset clreol
        mov ah,prstr
        int dos
        ret
CLEARL  ENDP

; This routine should set the baud rate for the current port but it
; is actually done in SERINI.
dobaud	proc	near
	ret
dobaud  endp

; Send a break out the current serial port.  Returns normally.
sendbr:	push dx
	push ax
	push cx
	push ds			; preserve data segment
	mov ax,cs
	mov ds,ax		; handler is in code segment
	mov al,settrp
	mov bx,txrdy		; interrupt on transmitter empty
	mov cx,0		; interrupt immediately
	mov dx,offset sendb1	; handler routine
	int wbios
	pop ds
	mov trqid,bx
	push ds
	mov ax,cs
	mov ds,ax
	mov al,settrp
	mov bx,0		; 10 ms timer
	mov cx,21		; after 21 times - approx 200 ms.
	mov dx,offset sendb2	; timer interrupt
	int wbios
	pop ds
	mov tmqid,bx

	mov brflg,1
	mov dx,rcvcmd
	in al,dx		; Read command register.
	or al,brk+txen		; Set send-break bit.
	mov dx,wrcmd		; Write command register.
	out dx,al
pause:	cmp brflg,0
	jne pause		; while non-zero, keep going
	mov al,clrtrp		; clear the trap
	mov bx,trqid
	int wbios
	mov al,clrtrp
	mov bx,tmqid
	int wbios
	pop cx
	pop ax
	pop dx
	ret

sendb1	proc	far
	ret
sendb1	endp

sendb2	proc	far
	push ax
	push ds
	mov ax,seg datas
	mov ds,ax
	mov brflg,0
	mov dx,rcvcmd
	in al,dx
	and al,not (txen + brk)
	mov dx,wrcmd
	out dx,al
	pop ds
	pop ax
	ret
sendb2	endp


; Write a line in inverse video at the bottom of the screen...
; the line is passed in dx, terminated by a $.  Returns normally.
putmod	proc	near
	push	dx		; preserve message
	mov	dx,24 * 100H	; line 24
	call	poscur
	mov	dx,offset invseq ; put into inverse video
	mov	ah,prstr
	int	dos
	pop	dx
	int 	dos
	mov	dx,offset nrmseq ; normal videw
	int	dos
	ret			; and return
putmod	endp

; Clear the mode line written by putmod.  Returns normally.
clrmod	proc	near
	mov	dx,24 * 100H
	call	poscur
	call	clearl
	ret
clrmod	endp

; Put a help message one the screen in reverse video.  Pass
; the message in AX, terminated by a null.  Returns normally.
; The message is put wherever the cursor currently is located.
puthlp	proc	near
	push ax
	mov ah,prstr		; Leave some room before the message.
	mov dx,offset crlf
	int dos
	mov dx,offset invseq	; Put into reverse video.
	int dos
	pop si			; Put message address here.
puth0:	mov ah,prstr
	mov dx,offset ivlseq	; Make line inverse video
	int dos
puth1:	lodsb
	cmp al,0		; Terminated with a null.
	je puth2
	mov dl,al
	mov ah,conout
	int dos	
	cmp al,lf		; Line feed?
	je puth0		; Yes, clear the next line.
	jmp puth1		; Else, just keep on writing.
puth2:	mov dx,offset nrmseq	; Normal video.
	mov ah,prstr
	int dos
	mov dx,offset crlf
	int dos
	ret
puthlp	endp

outchr: push dx                 ; Save register.
	mov al,ah
	call dopar
	mov dl,al
	mov ah,auxout
	int dos
	pop	dx
	jmp rskp


; This routine blanks the screen.

CMBLNK	PROC	NEAR
        mov ah,prstr
        mov dx,offset blank
        int dos
        ret
CMBLNK  ENDP

LOCATE  PROC    NEAR
        mov dx,0                ; Go to top left corner of screen.
        jmp poscur              ; callret...
LOCATE  ENDP

GETBAUD PROC    NEAR
	cld
	mov dx,rcvmod
	in al,dx
	in al,dx		; get second mode word
	and	al,0fh		; isolate baud rate
	mov cx,nbaud
	mov di,offset baudtab
	mov bx,ds
	mov es,bx		; address correct segment
	mov bx,portval
	repne scasb		; look for baud rate
	jne getb1		; mystery baud rate...
	sub di,offset baudtab + 1
	mov [bx].baud,di	; store baud rate in comm area
	ret			; and return
getb1:	mov [bx].baud,-1	; unknown baud rate
        ret
GETBAUD ENDP

; skip returns if no character available at port,
; otherwise returns with char in al, # of chars in buffer in dx.
PRTCHR  PROC    NEAR
prtchx: cmp count,0
	je prtch4		; empty buffer, forget it.
	mov si,bufout
	lodsb
	cmp si,offset source + bufsiz
	jb prtch1
	mov si,offset source
prtch1: mov bufout,si
	dec count
	push bx
	mov bx,portval
        cmp [bx].parflg,PARNON ; no parity?
        je prtch3               ; then don't strip
        and al,7fh              ; else turn off parity
prtch3: mov dx,count		; chars left in buffer
	pop bx
        ret
prtch4: jmp rskp		; no chars...
PRTCHR  ENDP

; Position the cursor according to contents of DX.

POSCUR  PROC    NEAR
        mov     ax,ds
        mov     es,ax                   ; address data segment!!!
        cld
        mov     di,offset colno
        mov     al,dh                   ; row
	inc	al
        call    nout
        mov     al,';'
        stosb
        mov     al,dl                   ; col
	inc	al
        call    nout
        mov     al,'H'
        stosb
        mov     al,'$'
        stosb
        mov     dx,offset movcur
        mov     ah,prstr
        int     dos                     ; print the sequence
        ret
POSCUR  ENDP

NOUT	PROC	NEAR
        cbw                     ; extend to word
        div     byte ptr ten    ; divide by 10
        or      al,al           ; any quotient?
        jz      nout1           ; no, forget this
        push    ax              ; save current result
        call    nout            ; output high order
        pop     ax              ; restore
nout1:  mov     al,ah           ; get digit
        add     al,'0'          ; make printable
        stosb
        ret                     ; put in buffer and return
NOUT    endp

; Perform a delete.

DODEL   PROC    NEAR
        mov ah,prstr
        mov dx,offset delstr    ; Erase weird character.
        int dos                 
        ret
DODEL   ENDP

; Perform a Control-U.

CTLU    PROC    NEAR
        mov ah,prstr
        mov dx,offset clrlin
        int dos
        ret
CTLU    ENDP

COMS    PROC    NEAR
        mov dx,offset comptab
        mov bx,offset comphlp
        mov ah,cmkey
        call comnd
         jmp r
        push bx
        mov ah,cmcfm
        call comnd              ; Get a confirm.
         jmp comx               ;  Didn't get a confirm.
	 nop
	pop bx
        mov flags.comflg,bl     ; Set the comm port flag.
	cmp flags.comflg,1	; Using Com 1?
	jne coms0		; Nope.
	mov ax,offset port1
	mov portval,ax
	ret
coms0:	mov ax,offset port2
	mov portval,ax
        ret
comx:	pop bx
	ret
COMS    ENDP

VTS     PROC    NEAR
	jmp notimp
VTS     ENDP

notimp:	mov ah,prstr
	mov dx,offset noimp
	int dos
	jmp prserr

lclini: mov trans.escchr,ctrla	; Use Control-A as escape char.
	ret

showkey:
	mov ax,offset shkmsg
	mov cx,shklen
	ret


;     Common initialization for using serial port.

SERINI  PROC    NEAR
	cmp portin,0		; already inited?
	jne serin1		; yes, skip it
	mov portin,1		; remember inited
	mov dx,rcvcmd
	in al,dx		; read cmd register to reset mode ptr.
	mov dx,trmod
	mov al,mod1
	out dx,al
	push bx
	mov bx,portval
	mov si,[bx].baud
	pop bx
	mov al,baudtab[si]
	or al,mod2
	out dx,al
	mov dx,wrcmd
	mov al,txen+dtr+rxen+clrerr+rts
	out dx,al		; enable transmit and receive
	call clrbuf		; empty buffer
	mov al,settrp
	mov bx,chrrdy		; interrupt on character ready
	mov cx,0		; interrupt immediately
	mov dx,offset serint	; handler routine
	mov prtcnt,0		; no characters in yet
	push ds
	mov si,cs
	mov ds,si
	int wbios
	pop ds
	or al,al
	jne serin1
	mov qid,bx		; preserve trap identification
serin1: ret			; We're done. [21c]
SERINI  ENDP

SERRST  PROC    NEAR
	cmp portin,0		; already de-inited?
	je serrs1		; yes, skip this
	mov portin,0
	mov al,clrtrp
	mov bx,qid
	int wbios
serrs1:	ret
SERRST  ENDP

; serial interrupt handler
serint	proc	far
	push ds
	push ax
	push dx
	push di
	mov ax,seg datas
	mov ds,ax
	mov di,bufin
	mov dx,rcvdat
	in al,dx
	mov [di],al
	inc di
	cmp di,offset source + bufsiz
	jb sernt1
	mov di,offset source
sernt1: mov bufin,di
	inc count
	pop di
	pop dx
	pop ax
	pop ds
	ret
serint	endp


; Generate a short beep.

BEEP    PROC    NEAR
        mov dl,bell
        mov ah,conout
        int dos 
        ret
BEEP    ENDP 
 
; Jumping to this location is like retskp.  It assumes the instruction
;   after the call is a jmp addr.
 
RSKP    PROC    NEAR
        pop bp
        add bp,3
        push bp
        ret
RSKP    ENDP
 
; Jumping here is the same as a ret.
 
R       PROC    NEAR
        ret
R       ENDP

term    proc    near
        mov si,ax               ; this is source
        mov di,offset ourarg    ; place to store arguments
        mov ax,ds
        mov es,ax               ; address destination segment
        mov cx,size termarg
        rep movsb               ; copy into our arg blk
term1:  call prtchr
        jmp short term2         ; have a char...
        nop
        nop
        jmp short term3         ; no char, go on
term2:	and al,7fh
	push ax
        mov dl,al
	mov ah,dconio
        int dos                 ; write out the character
        pop ax
        test ourarg.flgs,capt   ; capturing output?
        jz term3                ; no, forget it
        call ourarg.captr       ; else call the routine
term3:  mov ah,dconio
        mov dl,0ffh
        int dos
	or al,al
        jz term1                ; no character, go on
        cmp al,ourarg.escc      ; escape char?
        je term4                ; yes, exit
        push ax                 ; save char
        mov ah,al
        call outchr             ; output the character
        nop
        nop
        nop
        pop ax
        test ourarg.flgs,lclecho ; echoing?
        jz term1                ; no, continue loop
        mov dl,al
        mov ah,dconio
        int dos
        jmp term1               ; else echo and keep going
term4:	ret
term    endp
code	ends
        end
```
{% endraw %}

## MSXZ100.ASM

{% raw %}
```

; Kermit system dependent module for Heath/Zenith Z100

; (2.27) Save DI in getbaud.

	public	serini, serrst, clrbuf, outchr, coms, vts, dodel,
	public	ctlu, cmblnk, locate, prtchr, dobaud, clearl,
	public	dodisk, getbaud, beep,
	public	count, xofsnt, puthlp, putmod, clrmod, poscur
	public	sendbr, machnam, setktab, setkhlp, lclini, showkey
	include msdefs.h

false	equ	0
true	equ	1
mntrgh	equ	bufsiz*3/4	; High point = 3/4 of buffer full.

; constants used by serial port handler

BRKBIT	EQU	048H		; Send-break bit. 

MDMCOM1	EQU	00EFH		; Address of modem port command. [19b]

; external variables used:
; drives - # of disk drives on system
; flags - global flags as per flginfo structure defined in pcdefs
; trans - global transmission parameters, trinfo struct defined in pcdefs
; portval - pointer to current portinfo structure (currently either port1
;    or port2)
; port1, port2 - portinfo structures for the corresponding ports

; global variables defined in this module:
; xofsnt, xofrcv - tell whether we saw or sent an xoff.
; setktab - keyword table for redefining keys (should contain a 0 if
;    not implemented)
; setkhlp - help for setktab.

BIOS_SEG SEGMENT AT 40H		; Define segment where BIOS really is
	ORG	6*3
BIOS_AUXOUT LABEL FAR		; AUX output routine
	ORG	26*3
BIOS_AUXFUNC LABEL FAR		; AUX: function
	ORG	27*3
BIOS_CONFUNC LABEL FAR		; CON: function
BIOS_SEG ENDS

; Function codes for BIOS_xxxFUNC
CHR_WRITE	EQU	0	; Write character
CHR_READ	EQU	1	; Read character
CHR_STATUS	EQU	2	; Get status
  CHR_SFGS	EQU	0	; Get status subfunction
  CHR_SFGC	EQU	1	; Get config subfunction
CHR_CONTROL	EQU	3	; Control function
  CHR_CFSU	EQU	0	; Set new configuration parameters
  CHR_CFCI	EQU	1	; Clear input buffer


datas 	segment	public 'datas'
	extrn	drives:byte, flags:byte, trans:byte
	extrn	portval:word, port1:byte, port2:byte

setktab	db	13
	mkeyw	'F0',96h
	mkeyw	'F1',97h
	mkeyw	'F2',98h
	mkeyw	'F3',99h
	mkeyw	'F4',9ah
	mkeyw	'F5',9bh
	mkeyw	'F6',9ch
	mkeyw	'F7',9dh
	mkeyw	'F8',9eh
	mkeyw	'F9',9fh
	mkeyw	'F10',0a0h
	mkeyw	'F11',0a1h
	mkeyw	'SCAN',-1

setkhlp	db	cr,lf,'Keyname: f0, ... f11, "HELP" or "SCAN" follwed by '
	db	'decimal scan code$'
brkval	db	0		; What to send for a break.
brkadr	dw	0		; Where to send it.
badbd	db	cr,lf,'Unimplemented baud rate$'
noimp	db	cr,lf,'Not implemented$'
machnam	db	'Heath-Zenith Z-100$'
crlf	db	cr,lf,'$'
delstr  db	BS,' ',BS,'$' 	; Delete string. [21d]
home	db	ESC,'H$'
eeolstr db	ESC,'K$'	; Erase to end of line
clrstr	db	ESC,'E$'	; Erase entire display
enamod	db	ESC,'x1$'	; Enable 25th line
dismod	db	ESC,'y1$'	; Disable 25th line
enascan	db	ESC,'y?$'	; Enable scan codes
disscan	db	ESC,'x?$'	; Disable scan codes
begrev	db	ESC,'p$'	; Enter reverse video
endrev	db	ESC,'q$'	; Exit reverse video
lin25	db	ESC,'Y8 $'	; Column 1 row 25
savcur	db	ESC,'j$'	; Save current cursor position
precur	db	ESC,'k$'	; Restore cursor to previous position
clrlin  db	cr,'$'		; Clear line (just the cr part).
xofsnt	db	0		; Say if we sent an XOFF.
xofrcv	db	0		; Say if we received an XOFF.
tmp	db	?,'$'
temp1	dw	?		; Temporary storage.

ontab	db	02H		; Two entries.
	db	03H,'OFF$'	; Should be alphabetized. [19a]
	dw	00H
	db	02H,'ON$'
	dw	01H

; this table is indexed by the baud rate definitions given in
; pcdefs.  Unsupported baud rates should contain FF.
bddat	label	word
	dw	0		; 45.5 baud
	dw	1		; 50 baud
	dw	2   		; 75 baud
	dw	3   		; 110 baud
	dw	4   		; 134.5 baud
	dw	5   		; 150 baud
	dw	6   		; 300 baud
	dw	7   		; 600 baud
	dw	8  		; 1200 baud
	dw	9  		; 1800 baud
	dw	10 		; 2000 baud
	dw	11 		; 2400 baud
	dw	12 		; 4800 baud
	dw	13 		; 9600 baud
	dw	14  		; 19200 baud
	dw	15  		; 38400 baud

; storage for port configuration
cfginfo	struc
cfclass	db	0
cfattr	db	0
cfport	dw	0
cfbaud	db	0
cfhshk	db	0
cfbctl	db	0
cfecnt	db	0
cfncnt	db	0
cfnchr	db	0
cfres	db	6 dup(?)
cfsize	db	0
cfginfo	ends

auxconf	cfginfo	<>

; variables for serial interrupt handler

count	dw	0		; Number of chars in int buffer.

ourarg	termarg	<>

shkbuf	db	300 dup (?)	; room for definition
shkmsg	db	'  Scan code: '
shkmln	equ	$-shkmsg
shkms1	db	cr,lf,'  Definition: '
shkm1ln	equ	$-shkms1
datas	ends

code	segment	public
	extrn	comnd:near, dopar:near, defkey:near
	assume	cs:code,ds:datas

; local initialization

lclini	proc	near
	mov	brkval,BRKBIT	; What to send for a break.
	mov	brkadr,MDMCOM1
 	mov	flags.vtflg,0	; Turn off true Heath mode (allows key macros)	 
	ret
lclini	endp

; this is called by Kermit initialization.  It checks the
; number of disks on the system, sets the drives variable
; appropriately.  Returns normally.  

DODISK	PROC	NEAR
	mov	ah,gcurdsk	; Current disk value to AL.
	int	dos
	mov	dl,al		; Put current disk in DL.
	mov	ah,seldsk	; Select current disk.
	int	dos
	mov	drives,al
	ret
DODISK	ENDP

; show the definition of a key.  The terminal argument block (which contains
; the address and length of the definition tables) is passed in ax.
; Returns a string to print in AX, length of same in CX.
; Returns normally.
showkey	proc	near
	push	es
	push	ax		; save the ptr
	mov	bx,ds
	mov	es,bx		; address data segment
	cld
showk1:	mov	ah,prstr
	mov	dx,offset enascan ; enable scan codes
	int	dos
	mov	ah,0ch		; char input with buffer flush
	mov	al,7
	int	dos
;	mov	ah,chr_control
;	mov	al,chr_cfci	; clear input
;	call	bios_confunc
;	mov	ah,chr_read
;	call	bios_confunc	; read a char
	push	ax
	mov	ah,prstr
	mov	dx,offset disscan ; disable scan codes
	int	dos
	pop	ax
;	push	ax		; save the character
;	call	gss		; get shift state
;	pop	bx
	mov	ah,0		; shift state to ah
;	mov	al,bh		; scan code to al
	push	ax		; remember scan code
	mov	di,offset shkbuf
	mov	si,offset shkmsg
	mov	cx,shkmln
	rep	movsb		; copy in initial message
	call	nout		; write out scan code
	mov	si,offset shkms1
	mov	cx,shkm1ln	; second message
	rep	movsb
	pop	ax		; get scan code back
	pop	bx		; and terminal arg block
	mov	cx,[bx].klen	; and length
	jcxz	showk2		; no table, not defined
	push	di		; remember output ptr
	mov	di,[bx].ktab	; get key table
	repne	scasw		; search for a definition for this
	mov	si,di		; remember result ptr
	pop	di		; get output ptr back
	jne	showk2		; not defined, forget it
	sub	si,[bx].ktab	; compute offset from beginning
	sub	si,2		; minus 2 for pre-increment
	add	si,[bx].krpl	; get index into replacement table
	mov	si,[si]		; pick up replacement
	mov	cl,[si]		; get length
	mov	ch,0
	inc	si
	rep	movsb		; copy into buffer
showk2:	mov	ax,offset shkbuf ; this is buffer
	mov	cx,di
	sub	cx,ax		; length
	pop	es
	ret			; and return
showkey	endp

; Clear the input buffer. This throws away all the characters in the
; serial interrupt buffer.  This is particularly important when
; talking to servers, since NAKs can accumulate in the buffer.
; Returns normally.

CLRBUF	PROC	NEAR
	cli
	mov 	ah,chr_control
	mov	al,chr_cfci
	call	bios_auxfunc
	mov 	count,0
	sti
	ret
CLRBUF	ENDP

; Clear to the end of the current line.  Returns normally.

CLEARL	PROC	NEAR
	mov	ah,prstr
	mov	dx,offset eeolstr	; Erase to end of line
	int	dos
	ret
CLEARL	ENDP

; Put the char in AH to the serial port.  This assumes the
; port has been initialized.  Should honor xon/xoff.  Skip returns on
; success, returns normally if the character cannot be written.

outchr:	mov	bp,portval
	cmp	ds:[bp].floflg,0 ; Are we doing flow control.
	je	outch2		; No, just continue.
	xor	cx,cx		; clear counter
outch1:	cmp	xofrcv,true	; Are we being held?
	jne	outch2		; No - it's OK to go on.
	loop	outch1		; held, try for a while
	mov	xofrcv,false	; timed out, force it off and fall thru.
outch2:	push	dx		; Save register.
	mov	al,ah		; Parity routine works on AL.
	call	dopar		; Set parity appropriately.
	call	bios_auxout
	pop	dx
	jmp	rskp

; This routine blanks the screen.  Returns normally.

CMBLNK	PROC	NEAR
	mov	ah,prstr
	mov	dx,offset clrstr
	int	dos
	ret
CMBLNK  ENDP

; Locate: homes the cursor.  Returns normally.

LOCATE  PROC	NEAR
	mov	ah,prstr
	mov	dx,offset home	; Go to top left corner of screen.
	int	dos
LOCATE  ENDP

; write a line in inverse video at the bottom of the screen...
; the line is passed in dx, terminated by a $.  Returns normally.
putmod	proc	near
	push	dx		; preserve message
	mov	ah,prstr
	mov	dx,offset savcur
	int	dos
	mov	dx,offset enamod
	int	dos
	mov	dx,offset lin25
	int	dos
	mov	dx,offset begrev
	int	dos
	pop	dx		; get message back
	int	dos		; write it out
	mov	dx,offset endrev
	int	dos
	mov	dx,offset precur
	int	dos
	ret			; and return
putmod	endp

; clear the mode line written by putmod.  Returns normally.
clrmod	proc	near
	mov	ah,prstr
	mov	dx,offset dismod
	int	dos
	ret
clrmod	endp

BEEP	PROC	NEAR
	mov	dl,07		; ASCII BEL
	mov	ah,dconio	
	int	dos             ; Ring it
	ret
BEEP	ENDP	


; put a help message on the screen.  This one uses reverse video...
; pass the message in ax, terminated by a null.  Returns normally.
puthlp	proc	near
	push	ax		; preserve this
	mov	ah,prstr
	mov	dx,offset crlf
	int	dos
	pop	si		; point to string again
puthl3:	lodsb			; get a byte
	cmp	al,0		; end of string?
	je	puthl4		; yes, stop
	mov	dl,al
	mov	ah,dconio
	int	dos
	jmp	puthl3		; and keep going
puthl4:	mov	ah,prstr
	mov	dx,offset crlf
	int	dos
	ret
puthlp	endp

; Set the baud rate for the current port, based on the value
; in the portinfo structure.  Returns normally.

DOBAUD	PROC	NEAR
	mov	bp,portval
	mov	temp1,ax	; Don't overwrite previous rate. [25]
	mov	ax,ds:[bp].baud	; Check if new rate is valid. [25]
	mov	tmp,2
	mul	tmp		; Get index into baud table.
	mov	bx,offset bddat	; Start of table.
	add	bx,ax
	mov	ax,[bx]		; The data to output to port.
	cmp	ax,0FFH		; Unimplemented baud rate.
	jne	dobd0
	mov	ax,temp1	; Get back orginal value.
	mov	ds:[bp].baud,ax	; Leave baud rate as is.
	mov	ah,prstr
	mov	dx,offset badbd	; Give an error message.
	int	dos
	ret
dobd0:	push	ax		; Save it
	mov	bx,ds		; Set up pointer to config info
	mov	es,bx		;  .  .  .
	mov	bx,offset auxconf ;  .  .  .
	mov	ah,chr_status
	mov	al,chr_sfgc	; get current config info
	call	bios_auxfunc
	pop	ax		; get baud back
	mov	auxconf.cfbaud,al
	mov	ah,chr_control	; Function is control
	mov	al,chr_cfsu	; Subfunction is set new config
	call	bios_auxfunc	; Set the configuration
	ret
DOBAUD	ENDP

; Get the current baud rate from the serial card and set it
; in the portinfo structure for the current port.  Returns normally.
; This is used during initialization.

GETBAUD	PROC	NEAR
	mov	bx,ds
	mov	es,bx
	mov	bx,offset auxconf
	mov	ah,chr_status
	mov	al,chr_sfgc	; Status function get config info
	call	bios_auxfunc
	mov	ch,0
	mov	cl,auxconf.cfbaud
	mov	bp,portval
	mov	ds:[bp].baud,cx
	ret
GETBAUD	ENDP

; skip returns if no character available at port,
; otherwise returns with char in al, # of chars in buffer in dx.
PRTCHR  PROC	NEAR
	call	chkxon		; see if we need to xon
	push	bx
	mov 	ah,chr_status
	mov 	al,chr_sfgs	; Status function get status
	call	bios_auxfunc
	cmp 	bl,0
	jnz 	prtch2
	pop 	bx
	jmp 	rskp     	; No data - check console.
prtch2:	mov	dh,0
	mov	dl,bl		; Place # of chars in dx
	mov	ah,chr_read
	call 	bios_auxfunc
	dec	dl		; Decrement number of chars
	mov	count,dx	; Save count for posterity
	pop	bx
	ret
PRTCHR  ENDP

; local routine to see if we have to transmit an xon
chkxon	proc	near
	push	bx
	mov	bx,portval
	cmp	[bx].floflg,0	; doing flow control?
	je	chkxo1		; no, skip all this
	cmp	xofsnt,false	; have we sent an xoff?
	je	chkxo1		; no, forget it
	cmp	count,mntrgh	; below trigger?
	jae	chkxo1		; no, forget it
	mov	ax,[bx].flowc	; ah gets xon
	call	outchr		; send it
	nop
	nop
	nop			; in case it skips
	mov	xofsnt,false	; remember we've sent the xon.
chkxo1:	pop	bx		; restore register
	ret			; and return
chkxon	endp

; Send a break out the current serial port.  Returns normally.
SENDBR	PROC	NEAR
	push	cx
	push	dx
	push	ax
	xor	cx,cx		; Clear loop counter.
	mov	dx,brkadr	; Port address.  [19b]
	in	al,dx		; Get current setting.
	or	al,brkval	; Set send-break bit(s).
	out	dx,al		; Start the break.
pause:	loop	pause		; Wait a while.
	xor	al,brkval	; Clear send-break bit(s).
	out	dx,al		; Stop the break.
	pop	ax
	pop	dx
	pop	cx
	ret			; And return.
SENDBR	ENDP

; Position the cursor according to contents of DX:
; DH contains row, DL contains column.  Returns normally.

POSCUR	PROC	NEAR
	push	dx
	mov	ah,CONOUT
	mov	dl,ESC
	int	dos
	mov	dl,'Y'
	int	dos
	pop	dx
	push	dx
	mov	dl,dh
	add	dl,' '
	int	dos
	pop	dx
	add	dl,' '
	int	dos
	ret
POSCUR	ENDP

; Delete a character from the terminal.  This works by printing
; backspaces and spaces.  Returns normally.

DODEL	PROC	NEAR
	mov	ah,prstr
	mov	dx,offset delstr ; Erase weird character.
	int	dos			
	ret
DODEL	ENDP

; Move the cursor to the left margin, then clear to end of line.
; Returns normally.

CTLU	PROC	NEAR
	mov	ah,prstr
	mov	dx,offset clrlin
	int	dos
	call	clearl
	ret
CTLU	ENDP

; set the current port.  

COMS	PROC	NEAR
	jmp	notimp
COMS	ENDP

; Set heath emulation on/off.

VTS	PROC	NEAR
	mov	dx,offset ontab
	mov	bx,0
	mov	ah,cmkey
	call	comnd
	 jmp	r
	push	bx
	mov	ah,cmcfm
	call	comnd			; Get a confirm.
	 jmp	vt0			; didn't get a confirm.
	 nop
	pop	bx
	mov	flags.vtflg,bl		; Set the Heath emulation flag
	ret
vt0:	pop	bx
	ret
VTS	ENDP

notimp:	mov	ah,prstr
	mov	dx,offset noimp
	int	dos
	jmp	rskp

; initialization for using serial port.  This routine performs
; any initialization necessary for using the serial port, including
; setting up interrupt routines, setting buffer pointers, etc.
; Doing this twice in a row should be harmless (this version checks
; a flag and returns if initialization has already been done).
; SERRST below should restore any interrupt vectors that this changes.
; Returns normally.

SERINI	PROC	NEAR
	ret			; We're done.
SERINI	ENDP

; Reset the serial port.  This is the opposite of serini.  Calling
; this twice without intervening calls to serini should be harmless.
; Returns normally.

SERRST	PROC	NEAR
	ret			; All done.
SERRST	ENDP


; put the number in ax into the buffer pointed to by di.  Di is updated
nout	proc	near
	mov	dx,0		; high order is always 0.
	mov	bx,10
	div	bx		; divide to get digit
	push	dx		; save remainder digit
	or	ax,ax		; test quotient
	jz	nout1		; zero, no more of number
	call	nout		; else call for rest of number
nout1:	pop	ax		; get digit back
	add	al,'0'		; make printable
	stosb			; drop it off
	ret			; and return
nout	endp


; Jumping to this location is like retskp.  It assumes the instruction
;   after the call is a jmp addr.
 
RSKP	PROC	NEAR
	pop	bp
	add	bp,3
	push	bp
	ret
RSKP	ENDP
 
; Jumping here is the same as a ret.
 
R	PROC	NEAR
	ret
R	ENDP

code	ends 
	end
```
{% endraw %}

## MSYZ100.ASM

{% raw %}
```

; Kermit system dependent module for Heath/Zenith Z100

	public	term
	include msdefs.h


BIOS_SEG SEGMENT AT 40H		; Define segment where BIOS really is
	ORG	4*3
BIOS_PRINT	LABEL FAR       ; Printer output
	ORG	6*3
BIOS_AUXOUT	LABEL FAR	; AUX output routine
	ORG	26*3
BIOS_AUXFUNC	LABEL FAR	; AUX: function
	ORG	27*3
BIOS_CONFUNC	LABEL FAR	; CON: function
BIOS_SEG ENDS

; Function codes for BIOS_xxxFUNC
CHR_WRITE	EQU	0	; Write character
CHR_READ	EQU	1	; Read character
CHR_STATUS	EQU	2	; Get status
  CHR_SFGS	EQU	0	; Get status subfunction
  CHR_SFGC	EQU	1	; Get config subfunction
CHR_CONTROL	EQU	3	; Control function
  CHR_CFSU	EQU	0	; Set new configuration parameters
  CHR_CFCI	EQU	1	; Clear input buffer

; Scan code definitions used for translating back to Heath ESC sequences
entscan	equ	08dh		; enter key scan code
f0scan	equ	096h		; F0 key
f1scan	equ	097h		; F1 key
f2scan	equ	098h		; F2 key
f3scan	equ	099h		; F3 key
f4scan	equ	09ah		; F4 key
f5scan	equ	09bh		; F5 key
f6scan	equ	09ch		; F6 key
f7scan	equ	09dh		; F7 key
f8scan	equ	09eh		; F8 key
f9scan	equ	09fh		; F9 key
f10scn	equ	0a0h		; F10 key
f11scn	equ	0a1h		; F11 key
f12scn	equ	0a2h		; F12 key
homscan	equ	0a9h		; Home key
upscan	equ	0a5h		; Up arrow
dnscan	equ	0a6h		; Down arrow
rtscan	equ	0a7h		; Right arrow
lfscan	equ	0a8h		; Left arrow
kpminus	equ	0adh		; keypad minus
kpdot	equ	0aeh		; keypad period
kp0	equ	0b0h		; keypad 0
kp1	equ	0b1h		; keypad 1
kp2	equ	0b2h		; keypad 2
kp3	equ	0b3h		; keypad 3
kp4	equ	0b4h		; keypad 4
kp5	equ	0b5h		; keypad 5
kp6	equ	0b6h		; keypad 6
kp7	equ	0b7h		; keypad 7
kp8	equ	0b8h		; keypad 8
kp9	equ	0b9h		; keypad 9
sentscn	equ	0cdh		; shifted enter key
sf0scan	equ	0d6h		; shifted F0 key
sf1scan	equ	0d7h		; shifted F1 key
sf2scan	equ	0d8h		; shifted F2 key
sf3scan	equ	0d9h		; shifted F3 key
sf4scan	equ	0dah		; shifted F4 key
sf5scan	equ	0dbh		; shifted F5 key
sf6scan	equ	0dch		; shifted F6 key
sf7scan	equ	0ddh		; shifted F7 key
sf8scan	equ	0deh		; shifted F8 key
sf9scan	equ	0dfh		; shifted F9 key
sf10scn	equ	0e0h		; shifted F10 key
sf11scn	equ	0e1h		; shifted F11 key
sf12scn	equ	0e2h		; shifted F12 key
shomscn	equ	0e9h		; shifted Home key
supscan	equ	0e5h		; shifted Up arrow
sdnscan	equ	0e6h		; shifted Down arrow
srtscan	equ	0e7h		; shifted Right arrow
slfscan	equ	0e8h		; shifted Left arrow
skpmins	equ	0edh		; shifted keypad minus
skpdot	equ	0eeh		; shifted keypad period
skp0	equ	0f0h		; shifted keypad 0
skp1	equ	0f1h		; shifted keypad 1
skp2	equ	0f2h		; shifted keypad 2
skp3	equ	0f3h		; shifted keypad 3
skp4	equ	0f4h		; shifted keypad 4
skp5	equ	0f5h		; shifted keypad 5
skp6	equ	0f6h		; shifted keypad 6
skp7	equ	0f7h		; shifted keypad 7
skp8	equ	0f8h		; shifted keypad 8
skp9	equ	0f9h		; shifted keypad 9

; Miscellaneous scan codes used for functions
prscan	equ	f12scn		; print-screen scan code (F12)...
brkscan	equ	0aah		; Break key


modfrm	struc				; format of mode line
	db	'Esc chr: '
m_echr	db	2 dup (?)
	db	', Speed: '
m_baud	db	4 dup (?)
	db	', Parity: '
m_par	db	4 dup (?)
	db	', Echo: '
m_echo	db	3 dup (?)
	db	', Prn: '
m_prs	db	3 dup (?)
	db	', Type '
m_hlp	db	2 dup (?)
	db	'? for Help$'
modfrm	ends

datas 	segment	public 'datas'
waste	db	100h dup(?)		; assembler problem???

flags1	db	0			; internal flags
prtscr	equ	80h			; print screen pressed flag

; Key translations - F12 is printscreen
ckeys	db	brkscan,prscan,upscan,dnscan,lfscan,rtscan,homscan
	db	entscan,f0scan,f1scan,f2scan,f3scan,f4scan,f5scan,f6scan
	db	f7scan,f8scan,f9scan,f10scn,f11scn,kpminus
	db	kpdot,kp0,kp1,kp2,kp3,kp4,kp5,kp6,kp7,kp8,kp9
	db	supscan,sdnscan,slfscan,srtscan,shomscn
	db	sentscn,sf0scan,sf1scan,sf2scan,sf3scan,sf4scan,sf5scan,sf6scan
	db	sf7scan,sf8scan,sf9scan,sf10scn,sf11scn,skpmins
	db	skpdot,skp0,skp1,skp2,skp3,skp4,skp5,skp6,skp7,skp8,skp9
lckeys	equ	$-ckeys
;ckacts must parallel ckeys above...
ckacts	dw	trnbrk,trnprs,trnupw,trndnw,trnlfw,trnrgw,trnhom,trnkpn
	dw	trnf0,trnf1,trnf2,trnf3,trnf4,trnf5,trnf6,trnf7,trnf8,trnf9
	dw	trnf10,trnf11,trnkpn,trnkpn,trnkpn,trnkpn,trnkpn
	dw	trnkpn,trnkpn,trnkpn,trnkpn,trnkpn,trnkpn,trnkpn
	dw	trnupw,trndnw,trnlfw,trnrgw,trnhom,trnkps
	dw	trnsf0,trnsf1,trnsf2,trnsf3,trnsf4,trnsf5,trnsf6,trnsf7
	dw	trnsf8,trnsf9,trnsf10,trnsf11,trnkps,trnkps
	dw	trnkps,trnskp1,trnskp2,trnskp3,trnskp4,trnskp5,trnskp6
	dw	trnskp7,trnskp8,trnskp9

enascan	db	ESC,'y?$'	; Enable scan codes
disscan	db	ESC,'x?$'	; Disable scan codes
uptrn	db	esc,'A'
dntrn	db	esc,'B'
rgtrn	db	esc,'C'
lftrn	db	esc,'D'
enttrn	db	cr		; enter key translation
homtrn	db	ESC,'H'		; home key translation
dottrn	db	'.'		; keypad . translation
mintrn	db	'-'		; keypad - translation
kp0trn	db	'0'		; keypad 0 translation
kp1trn	db	'1'		; keypad 1 translation
kp2trn	db	'2'		; keypad 2 translation
kp3trn	db	'3'		; keypad 3 translation
kp4trn	db	'4'		; keypad 4 translation
kp5trn	db	'5'		; keypad 5 translation
kp6trn	db	'6'		; keypad 6 translation
kp7trn	db	'7'		; keypad 7 translation
kp8trn	db	'8'		; keypad 8 translation
kp9trn	db	'9'		; keypad 9 translation
senttrn	db	cr		; shifted enter key translation
shomtrn	db	ESC,'H'		; home key translation
sdottrn	db	'.'		; shifted keypad . translation
smintrn	db	'-'		; shifted keypad - translation
skp0trn	db	'0'		; shifted keypad 0 translation
skp1trn	db	ESC,'L'		; shifted keypad 1 translation
skp2trn	db	ESC,'B'		; shifted keypad 2 translation
skp3trn	db	ESC,'M'		; shifted keypad 3 translation
skp4trn	db	ESC,'D'		; shifted keypad 4 translation
skp5trn	db	ESC,'H'		; shifted keypad 5 translation
skp6trn	db	ESC,'C'		; shifted keypad 6 translation
skp7trn	db	ESC,'@'		; shifted keypad 7 translation
skp8trn	db	ESC,'A'		; shifted keypad 8 translation
skp9trn	db	ESC,'N'		; shifted keypad 9 translation
f0trn	db	ESC,'J'		; F0 translation
f1trn	db	ESC,'S'		; F1 translation
f2trn	db	ESC,'T'		; F2 translation
f3trn	db	ESC,'U'		; F3 translation
f4trn	db	ESC,'V'		; F4 translation
f5trn	db	ESC,'W'		; F5 translation
f6trn	db	ESC,'P'		; F6 translation
f7trn	db	ESC,'Q'		; F7 translation
f8trn	db	ESC,'R'		; F8 translation
f9trn	db	ESC,'0I'	; F9 translation
f10trn	db	ESC,'0J'	; F10 translation
f11trn	db	ESC,'0K'	; F11 translation
f12trn	db	ESC,'0L'	; F12 translation
sf0trn	db	ESC,'E'		; shifted F0 translation
sf1trn	db	ESC,'1A'	; shifted F1 translation
sf2trn	db	ESC,'1B'	; shifted F2 translation
sf3trn	db	ESC,'1C'	; shifted F3 translation
sf4trn	db	ESC,'1D'	; shifted F4 translation
sf5trn	db	ESC,'1E'	; shifted F5 translation
sf6trn	db	ESC,'1F'	; shifted F6 translation
sf7trn	db	ESC,'1G'	; shifted F7 translation
sf8trn	db	ESC,'1H'	; shifted F8 translation
sf9trn	db	ESC,'1I'	; shifted F9 translation
sf10trn	db	ESC,'1J'	; shifted F10 translation
sf11trn	db	ESC,'1K'	; shifted F11 translation
sf12trn	db	ESC,'1L'	; shifted F12 translation


ourarg	termarg	<>
modbuf	modfrm	<>			; mode line buffer

; some static data for mode line
unkbaud	db	'Unk '			; must be 4 chars...
baudn	db	'45.5'
	db	'  50'
	db	'  75'
	db	' 110'
	db	' 135'
	db	' 150'
	db	' 300'
	db	' 600'
	db	'1200'
	db	'1800'
	db	'2000'
	db	'2400'
	db	'4800'
	db	'9600'
	db	' 19K'
	db	' 38K'

baudnsiz  equ	16			; # of baud rates known (tbl size / 4)
parnams	db	'Even'
	db	'Mark'
	db	'None'
	db	'Odd '			; must be 4 chars
	db	'Spc '
offmsg	db	'Off'
onmsg	db	'On '
lclmsg	db	'Lcl'
remmsg	db	'Rem'

datas	ends

code	segment	public
	extrn	prtchr:near,outchr:near,putmod:near,clrmod:near,sendbr:near
	assume	cs:code,ds:datas

; This is from the dumb terminal emulator routine in MSXGEN.ASM.
; Had to use bios calls because DOS calls were losing chars.
term	proc	near
	mov 	si,ax		; this is source
	mov 	di,offset ourarg ; place to store arguments
	mov 	ax,ds
	push	es		; save caller's extra segment address
	mov 	es,ax		; address destination segment
	mov 	cx,size termarg
	rep 	movsb		; copy into our arg blk
	and	flags1,not (prtscr)	; print screen mode disabled

	test	ourarg.flgs,emheath ; Are we to use Heath sequences?
	jnz	chkmod		; no, do something else
	mov	ah,prstr
	mov	dx,offset enascan ; enable scan codes
	int	dos 

chkmod:	call 	clrmod		; clear mode line
	test 	ourarg.flgs,modoff ; is mode line disabled?
	jnz	term1		; yes, skip it
	call 	modlin		; turn on mode line

term1:	call 	portchr		; char at port?
	 jnc	term3		; no, keep going
	call	outtty		; print on terminal

term3:	mov 	ah,chr_status
	mov 	al,chr_sfgs	; get number of characters
	call 	bios_confunc	; check console
	cmp 	bl,0
	jz 	term1		; no character, go on
	mov 	ah,chr_read
	call 	bios_confunc	; read it
	cmp 	al,ourarg.escc	; escape char?
	je 	term4		; yes, exit
	push 	ax		; save char
	mov 	ah,al
	call	trnout		; translate if nec., output to port
	pop 	ax
	jmp 	term1		; else echo and keep going

term4:	call	clrmod
	mov	ah,prstr
	mov	dx,offset disscan ; disable scan code generation
	int	dos
	pop	es
	ret

term	endp

; returns with carry on if a character is available

portchr	proc	near
	call	prtchr			; character at port?
	 jmp	short portc1		; yes, go handle
	nop				; skip return is stupid
	clc				; no carry -> no character
	ret
portc1:	and	al,7fh			; we don't worry about parity here
	stc				; have a character
	ret
portchr	endp

; put the character in al to the screen
outtty	proc	near
	mov 	ah,chr_write
	call 	bios_confunc
	test 	ourarg.flgs,capt ; capturing output?
	jz 	outtt1		; no, forget it
	call 	ourarg.captr	; else call the routine

outtt1:	test	flags1,prtscr	; print screen?
	jz	outtt2		; no, try something else
	call	bios_print

outtt2:	ret
outtty	endp

; send the character in al out to the serial port
; handle echoing also...
outprt	proc	near
	test	ourarg.flgs,lclecho	; echoing?
	jz	outpr1			; no, forget it
	push	ax			; save char
	call	outtty			; print it
	pop	ax			; restore
outpr1:	mov	ah,al			; this is where outchr expects it
	call	outchr			; output to the port
	 nop
	 nop
	 nop				; skip returns...
	ret
outprt	endp

modlin	proc	near			; turn on mode line
	mov	al,ourarg.escc
	mov	modbuf.m_echr,' '	; first char is initial space
	mov	modbuf.m_hlp,' '	; goes here too.
	cmp	al,32			; printable?
	jnb	modl1			; yes, keep going
	add	al,40h			; made printable
	mov	modbuf.m_echr,'^'	; note control char
	mov	modbuf.m_hlp,'^'
modl1:	mov	modbuf.m_echr+1,al	; fill in character
	mov	modbuf.m_hlp+1,al
	mov	al,ourarg.baudb		; get baud bits
	mov	si,offset unkbaud	; assume unknown baud
	cmp	al,baudnsiz		; too big?
	jnb	modl2			; yes, use default
	mov	cl,2			; each is 4 bytes long
	shl	al,cl
	mov	ah,0
	add	ax,offset baudn
	mov	si,ax
modl2:	mov	cx,size m_baud		; length of baud space
	mov	di,offset modbuf.m_baud
	rep	movsb			; copy in baud rate
	mov	al,ourarg.parity	; get parity code
	mov	cl,2			; each is 4 bytes long...
	shl	al,cl
	mov	ah,0
	add	ax,offset parnams	; names of parity settings
	mov	si,ax
	mov	cx,4			; each is 4 long
	mov	di,offset modbuf.m_par
	rep	movsb
	mov	si,offset remmsg	; assume remote echoing
	test	ourarg.flgs,lclecho	; echoing?
	jz	modl4			; no, keep going
	mov	si,offset lclmsg
modl4:	mov	cx,3			; size of on/off
	mov	di,offset modbuf.m_echo
	rep	movsb
;	mov	al,'1'
;	cmp	portno,1		; port 1?
;	je	modl5			; yes, keep going
;	mov	al,'2'
;modl5:	mov	modbuf.m_prt,al		; fill in port number
;	mov	cx,size modfrm		; this is size of mode line
;	mov	si,offset modbuf	; mode line image
	mov	si,offset offmsg	; assume printer off
	test	flags1,prtscr		; print screen enabled?
	jz	modl5			; no, keep going
	mov	si,offset onmsg
modl5:	mov	cx,3
	mov	di,offset modbuf.m_prs
	rep	movsb
	mov	dx,offset modbuf
	call	putmod
	ret				; and return
modlin	endp

; translate the scan code in ah according to the translate table
; given in ktrntab/krpltab, output to port.  If no translation,
; use ascii char in al. (should probably include shift state
; somewhere).  Shift state is in bl.
trnout	proc	near
	test	ourarg.flgs,havtt	; translate table given?
	jz	trnou3			; no, just output character
	cmp	ourarg.klen,0		; did they say we have one 
	je	trnou3			; but we really don't?
	push	ax			; save original value
	xor	ah,ah			; Zero top half
	mov	di,ourarg.ktab
	mov	cx,ourarg.klen
	repne	scasw			; look for our key
	pop	ax			; recover character
	jne	trnou3			; not found, forget it
	sub	di,ourarg.ktab
	sub	di,2			; (minus 2 for pre-increment)
	mov	bx,ourarg.krpl
	mov	si,[bx][di]		; and addr of replacement
	mov	cl,[si]			; get first byte (length)
	xor	ch,ch			; clear high-order byte
	inc	si			; point to translation string
trnou2:	lodsb				; get a byte
	push	si
	push	cx			; save important registers
	call	outprt			; send to port
	pop	cx
	pop	si
	loop	trnou2			; send all chars
	ret				; and return
trnou3:	xor	ah,ah			; get scan code
	mov	cx,lckeys		; length of table
	mov	di,offset ckeys		; table address
	repne	scasb
;	mov	al,0			; ascii code was 0...
	jne	trnou4			; not found, keep going
	sub	di,offset ckeys+1	; get table offset
	shl	di,1			; shift for word offset
	jmp	ckacts[di]		; jump to appropriate routine
trnou4:	call	outprt			; just output single char
	ret				; and return

;trnmod:	test	flags,modoff		; mode line already off?
;	jnz	trnm1			; yes, go turn on
;	call	clrmod			; no, clear mode line here
;	or	flags,modoff		; turn on flag
;	ret				; and return
;trnm1:	call	modlin			; turn on mode line
;	and	flags,not modoff	; clear flag
;	ret				; and return

trnbrk:
	call	sendbr
	ret

trnprs:	xor	flags1,prtscr		; flip the flag
	and	ourarg.flgs,not modoff	; turn on mode line
	call	modlin			; write into mode line
	ret				; and return

trn1ch:	mov	cx,1			; length is always 1
	jmp	trnou2

; common entry for arrow keys
trn2ch:	mov	cx,2			; length is always 2
	jmp	trnou2			; go send definition

trn3ch:	mov	cx,3			; length is always 3
	jmp	trnou2

trnupw:	mov	si,offset uptrn
	jmp	trn2ch

trndnw:	mov	si,offset dntrn
	jmp	trn2ch

trnlfw:	mov	si,offset lftrn
	jmp	trn2ch

trnrgw:	mov	si,offset rgtrn
	jmp	trn2ch

trnhom:	mov	si,offset homtrn
	jmp	trn2ch

trnent:	mov	si,offset enttrn
	jmp	trn1ch

trnf0:	mov	si,offset f0trn
	jmp	trn2ch

trnf1:	mov	si,offset f1trn
	jmp	trn2ch

trnf2:	mov	si,offset f2trn
	jmp	trn2ch

trnf3:	mov	si,offset f3trn
	jmp	trn2ch

trnf4:	mov	si,offset f4trn
	jmp	trn2ch

trnf5:	mov	si,offset f5trn
	jmp	trn2ch

trnf6:	mov	si,offset f6trn
	jmp	trn2ch

trnf7:	mov	si,offset f7trn
	jmp	trn2ch

trnf8:	mov	si,offset f8trn
	jmp	trn2ch

trnf9:	mov	si,offset f9trn
	jmp	trn3ch

trnf10:	mov	si,offset f10trn
	jmp	trn3ch

trnf11:	mov	si,offset f11trn
	jmp	trn3ch

trnkpn:	and	al,07fh			; strip high bits
	jmp	trnou4			; now output it

trnkps:	and	al,03fh			; strip high bits (special case)
	jmp	trnou4

trnsf0:	mov	si,offset sf0trn
	jmp	trn2ch

trnsf1:	mov	si,offset sf1trn
	jmp	trn3ch

trnsf2:	mov	si,offset sf2trn
	jmp	trn3ch

trnsf3:	mov	si,offset sf3trn
	jmp	trn3ch

trnsf4:	mov	si,offset sf4trn
	jmp	trn3ch

trnsf5:	mov	si,offset sf5trn
	jmp	trn3ch

trnsf6:	mov	si,offset sf6trn
	jmp	trn3ch

trnsf7:	mov	si,offset sf7trn
	jmp	trn3ch

trnsf8:	mov	si,offset sf8trn
	jmp	trn3ch

trnsf9:	mov	si,offset sf9trn
	jmp	trn3ch

trnsf10: mov	si,offset sf10trn
	jmp	trn3ch

trnsf11: mov	si,offset sf11trn
	jmp	trn3ch

trnskp1: mov	si,offset skp1trn
	jmp	trn2ch

trnskp2: mov	si,offset skp2trn
	jmp	trn2ch

trnskp3: mov	si,offset skp3trn
	jmp	trn2ch

trnskp4: mov	si,offset skp4trn
	jmp	trn2ch

trnskp5: mov	si,offset skp5trn
	jmp	trn2ch

trnskp6: mov	si,offset skp6trn
	jmp	trn2ch

trnskp7: mov	si,offset skp7trn
	jmp	trn2ch

trnskp8: mov	si,offset skp8trn
	jmp	trn2ch

trnskp9: mov	si,offset skp9trn
	jmp	trn2ch

trnout	endp

code	ends 
	end

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0434

     Volume in drive A has no label
     Directory of A:\

    FILES434 TXT      1080  11-05-85   3:08p
    MSAPC    EXE     45544  12-18-84   4:05p
    MSAPC    HLP      2513  12-08-84   1:35a
    MSTIPRO  EXE     37888  12-08-84   1:45p
    MSWANG   EXE     38784  12-08-84   1:47p
    MSXAPC   ASM     46204  12-18-84   3:50p
    MSXTEK   ASM      7104  12-08-84   4:03a
    MSXTIPRO ASM     63304  12-08-84   4:13a
    MSXTIPRO BAT       272  12-08-84   4:13a
    MSXTIPRO BWR      3196  12-08-84   4:14a
    MSXWNG   ASM     13616  12-08-84   4:17a
    MSXZ100  ASM     15145  12-18-84   3:53p
    MSYZ100  ASM     15933  12-08-84   4:30a
    MSZ100   EXE     38376  12-18-84   4:10p
    MSZ100   HLP      2558  12-08-84   4:38a
           15 file(s)     331517 bytes
                           23552 bytes free
