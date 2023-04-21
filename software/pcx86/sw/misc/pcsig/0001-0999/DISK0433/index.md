---
layout: page
title: "PC-SIG Diskette Library (Disk #433)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0433/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0433"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "KERMIT ASM MODULES 1 OF 2 (ALSO 434)"

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

## FILES433.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 433   KERMIT-MS Compatibles, ASM modules                v1 DS2
-----------------------------------------------------------------------
The KERMIT program is a communications system that allows two different
types of computers to pass information to each other. The files on this
disk are used by non IBM computers so that they may communicate with
an IBM or perhaps a mainframe computer. This disk is in the IBM
MS-DOS format.
 
MSGENER  EXE  Generic MS-DOS KERMIT.
MSHP150  EXE  Hewlett-Packard 150
MSRB100  EXE  DEC Rainbow 100, 100+
MSXGEN   ASM  Generic MS-DOS KERMIT module.
MSXHP150 ASM  Hewlett-Packard 150 module.
MSXRB    ASM  DEC Rainbow 100, 100+ module.
MSXSYS   DOC  Description of system dependent modules.
MSRBEMAC INI  EMACS function key setup for Kermit-MS/Rainbow.
MSPCTRAN BAS  Converts MSKERMIT.BOO to an executable file.
MSPCTRAN EXE  Compiled version of MSPCTRAN.BAS.
MSPCBOOT BAS  Used on PC to download KERMIT from mainframe.
MSRBBOO  HLP  Info on MSRBBOO.BAS.
MSRBBOO  BAS  Used on Rainbow to download KERMIT from mainframe.
MSBOOT   FOR  Used on mainframe when downloading KERMIT.
MSMKBOO  C    Four-for-Three encoder, DEC-20 specific.
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## MSPCBOOT.BAS

{% raw %}
```bas
1    'Run this program on the PC in conjunction with a Fortran program
2    '(MSBOOT.FOR) on the mainframe to download Kermit to the PC.  This
3    'program will run for about thirty minutes, depending on line speed.
4    ' Bill Catchings, June 1984 (Revised Sept 1984)
5    ' Columbia University Center for Computing Activities

10   t$ = time$				' Save the time.
20   defint a-z				' All integer to gain some speed.
30   n$ = chr$(0)
40   z = asc("0")
50   t = asc("~")-z
60   def fnuchr%(a$)=asc(a$)-z
70   open "com1:9600,s,7,1,cs,ds,cd" as #1

100  print#1,"O ,2"			' Char constants "O", " " and ","
110  input#1,f$
120  if len(f$) < 5 then goto 110	' In case the host echos the ACK.
130  input#1,n
135 print f$+" "+str$(n)
140  if n > 20 then goto 900
150  open f$ for output as #2
160  print "Outputting to "+f$
170  goto 300				' Correct version of the file.

200  gosub 1000				' Do turnaround char processing
210  print#1,"NO"			' Tell host data was incorrect.
220  goto 320

300  gosub 1000				' Do turnaround char processing
310  print#1,"OK"			' Say the line was all right.
320  input#1,x$
330  if len(x$) < 5 then goto 320	' In case the host echos ACK/NAK
340  input#1,n
345 print x$+" "+str$(n)
350  if len(x$) <> n then goto 200	' Length doesn't match, NAK it.
360  if x$ = "&&&&&&&&&&" then goto 800	' End of file?
370  y$ = ""				' Set output string to null.
380  goto 500

400  print#2,y$;			' Print the output string.
410  goto 300				' Go get another line.

500  if len(x$) = 0 goto 400		' Done with input string?
510  a = fnuchr%(x$)
520  if a = t then goto 700		' Null repeat character?
530  q$=mid$(x$,2,3)			' Get the quadruplet to decode.
540  x$=mid$(x$,5)
550  b = fnuchr%(q$)
560  q$ = mid$(q$,2)
570  c = fnuchr%(q$)
580  q$ = mid$(q$,2)
590  d = fnuchr%(q$)

600  y$ = y$ + chr$(((a * 4) + (b \ 16)) and 255) ' Decode the quad.
610  y$ = y$ + chr$(((b * 16) + (c \ 4)) and 255)
620  y$ = y$ + chr$(((c * 64) + d) and 255)
630  goto 500				' Get another quad.
	
700  x$ = mid$(x$,2)			' Expand nulls.
710  r = fnuchr%(x$)			' Get the number of nulls.
715 print " Null: ",r
720  x$ = mid$(x$,2)
730   for i=1 to r			' Loop, adding nulls to string.
740   y$ = y$ + n$
750   next
760  print#2,y$;			' Print the nulls.
770  y$ = ""				' Clear the output buffer.
780  goto 500

800  print "Processing complete, elapsed time: "+t$+" to "+time$
810  print "Output in "+f$
820  close #1,#2
830  goto 9999

900  print "?The format of the BOO file is incorrect"
910  goto 820

1000 x$ = input$(1,#1)		' Make this line RETURN for full-duplex
1010 if x$ <> chr$(17) then goto 1000	' Loop for a turn around char.
1020 return

9999 end
```
{% endraw %}

## MSPCTRAN.BAS

{% raw %}
```bas
1    'Use this BASIC program on the PC if you have the printable file 
2    'MSKERMIT.BOO already on the PC to convert it to an executable
3    'file.  This program takes about 30 minutes to run on a PC with
4    'floppy disks.
5    ' Bill Catchings, June 1984
6    ' Columbia University Center for Computing Activities

10   t$ = time$				' Save the time.
20   defint a-z				' Integer to gain some speed.
30   n$ = chr$(0)
40   z = asc("0")
50   t = asc("~")-z
60   def fnuchr%(a$)=asc(a$)-z
70   open "MSKERMIT.BOO" for input as #1

100  input#1,f$				' Is this the right file?
110  if len(f$) > 20 then goto 900
120  open f$ for output as #2
130  print "Outputting to "+f$

200  if eof(1) then goto 800		' Exit nicely on end of file.
210  input#1,x$				' Get a line.
220  y$ = ""				' Clear the output buffer.
230  goto 400

300  print#2,y$;			' Print output buffer to file.
310  goto 200				' Get another line.

400  if len(x$) < 2 goto 300		' Is the input buffer empty?
410  a = fnuchr%(x$)
420  if a = t then goto 700		' Null repeat character?
430  if len(x$) < 3 goto 300		' Is the input buffer empty?
440  q$=mid$(x$,2,3)			' Get the quadruplet to decode.
450  x$=mid$(x$,5)
460  b = fnuchr%(q$)
470  q$ = mid$(q$,2)
480  c = fnuchr%(q$)
490  q$ = mid$(q$,2)
500  d = fnuchr%(q$)

600  y$ = y$ + chr$(((a * 4) + (b \ 16)) and 255) ' Decode the quad.
610  y$ = y$ + chr$(((b * 16) + (c \ 4)) and 255)
620  y$ = y$ + chr$(((c * 64) + d) and 255)
630  goto 400				' Get another quad.

700  x$ = mid$(x$,2)			' Expand the nulls.
710  r = fnuchr%(x$)			' Get the number of nulls.
715 print " Null: ",r
720  x$ = mid$(x$,2)
730   for i=1 to r			' Loop, adding nulls to string.
740   y$ = y$ + n$
750   next
760  print#2,y$;			' Output the nulls to the file.
770  y$ = ""				' Clear the output buffer.
780  goto 400

800  print "Processing complete, elapsed time: "+t$+" to "+time$
810  print "Output in "+f$
820  close #1,#2
830  goto 9999

900  print "?The version of the MSKERMIT.BOO file is incorrect"
910  goto 820

9999 end
```
{% endraw %}

## MSRBBOO.BAS

{% raw %}
```bas
1 DEFINT A-Z:ZRUBOUT$=CHR$(8)+" "+CHR$(8):ZESCAPE$=CHR$(27):'Sreen utility definitions B.E.
2 ZLEADIN$=ZESCAPE$+"[":ZCLEAR$=ZLEADIN$+"J":ZHOME$=ZLEADIN$+"0;0H"
3 ZDOUBLE1$=ZESCAPE$+"#3":ZDOUBLE2$=ZESCAPE$+"#4":WIDTH 255
4 ZBOLD$=ZLEADIN$+"1m":ZBLINK$=ZLEADIN$+"5m":ZSAVE$=ZESCAPE$+"7"
5 ZREVERSE$=ZLEADIN$+"7m":ZOFF$=ZLEADIN$+"0m":ZREST$=ZESCAPE$+"8"
6 ZGRAPHON$=ZESCAPE$+"(0":ZGRAPHOFF$=ZESCAPE$+"(B":ZBACKER$=ZLEADIN$+"0K"
7 ZKEYPAD$=ZESCAPE$+"=":ZBELL$=CHR$(7):ZCLRLIN$=ZLEADIN$+"2K"
8 DEF FNXY$(ZX,ZY)=ZLEADIN$+MID$(STR$(INT(ZX)),2)+";"+MID$(STR$(INT(ZY)),2)+"H":'Cursor Adressing function (ZX=Line[1..24],ZY=Column[1..80])
9 GOTO 25:'This to be modified to GOTO Start of program <===================
10 ZSTRING$="":ZORGL=ZLENGTH:PRINT ZSAVE$+ZREVERSE$+STRING$(ZORGL,95)+ZOFF$+STRING$(ZORGL,8);:'General Input-GOSUB (Input:ZLENGTH, OUTPUT:ZLENGTH,ZSTRING,ZNUMBER,ZRANDOM)
11 ZTEMP$=INKEY$:ZRANDOM=(ZRANDOM MOD 2000)+1:IF LEN(ZTEMP$)=0 THEN 11'Wait for Char
12 IF ASC(ZTEMP$)=127 OR ASC(ZTEMP$)=8 THEN 17 ELSE IF ASC(ZTEMP$)=21 THEN PRINT ZREST$+ZBACKER$;:ZLENGTH=ZORGL:GOTO 10 ELSE PRINT ZTEMP$;'RUBOUT
13 IF ASC(ZTEMP$)=3 THEN GOTO 9999 ELSE IF ZTEMP$ >= "a" THEN ZTEMP$=CHR$(ASC(ZTEMP$)-32)'Uppercase Modify GOTO xx to Control-C intercept <=====================
14 IF ASC(ZTEMP$)=13 THEN PRINT:GOTO 16'RETURN finishes
15 ZSTRING$=ZSTRING$+ZTEMP$:ZLENGTH=ZLENGTH-1:IF ZLENGTH >0 THEN 11
16 ZLENGTH=LEN(ZSTRING$):ZNUMBER=VAL(ZSTRING$): RETURN
17 IF LEN(ZSTRING$)>0 THEN ZLENGTH=ZLENGTH +1:ZSTRING$=LEFT$(ZSTRING$,(LEN(ZSTRING$)-1)):PRINT ZRUBOUT$;:GOTO 11 ELSE PRINT ZBELL$;: GOTO 11'Cleanup after RUBOUT
18 'End of VT100 definitions *****

19	'Use this BASIC program on the CP/M side of the Rainbow (with
20	'Microsoft MBasic-86) to translate the MSRB100.BOO file on
21	'your CP/M disk to binary .EXE format, then from the MS-DOS
22	'side use RDCPM to transfer the result to the MS-DOS file
23	'system.  This program takes about 30 minutes to run on a Rainbow
24	'with floppy disks.
25	'- Bill Catchings, CU; modified for Rainbow by Bernie Eiben, DEC.
26	PRINT ZHOME$+ZCLEAR$;"Rainbow 4for3 Code Expander Version 1"
30	PRINT:PRINT: N$ = CHR$(0)
40	Z = ASC("0")
50	T = ASC("~")-Z
60	DEF FNUCHR%(A$)=ASC(A$)-Z
61	PRINT "FILE-NAME to Expand : ";:ZLENGTH=13:GOSUB 10:'Get Input
70	OPEN "I",1,ZSTRING$
100	INPUT#1,F$			' Is this the right file?
110	IF LEN(F$) > 20 THEN GOTO 900
120	OPEN "O",2,F$			' Ouput-name from file
130	PRINT "Outputting to "+F$
200	IF EOF(1) THEN GOTO 800		' Exit nicely on end of file.
210	INPUT#1,X$			' Get a line.
220	Y$ = ""				' Clear the output buffer.
230	GOTO 400
300	PRINT#2,Y$;			' Print output buffer to file.
310	GOTO 200			' Get another line.
400	IF LEN(X$) < 4 GOTO 300		' Is the input buffer empty?
410	A = FNUCHR%(X$)
420	IF A = T THEN GOTO 700		' Null repeat character?
430	Q$=MID$(X$,2,3)			' Get the quadruplet to decode.
440	X$=MID$(X$,5)
450	B = FNUCHR%(Q$)
460	Q$ = MID$(Q$,2)
470	C = FNUCHR%(Q$)
480	Q$ = MID$(Q$,2)
490	D = FNUCHR%(Q$)
500	Y$ = Y$ + CHR$(((A * 4) + (B \ 16)) AND 255) ' Decode the quad.
510	Y$ = Y$ + CHR$(((B * 16) + (C \ 4)) AND 255)
520	Y$ = Y$ + CHR$(((C * 64) + D) AND 255)
530	GOTO 400			' Get another quad.
700	X$ = MID$(X$,2)			' Expand the nulls.
710	R = FNUCHR%(X$)			' Get the number of nulls.
715	PRINT FNXY$(6,5)+ZCLRLIN$;" Null: ",R
720	X$ = MID$(X$,2)
730	FOR I=1 TO R			' Loop, adding nulls to string.
740	Y$ = Y$ + N$
750	NEXT
760	PRINT#2,Y$;			' Output the nulls to the file.
770	Y$ = ""				' Clear the output buffer.
780	GOTO 400
800	PRINT "Processing complete"
810	PRINT "Output in "+F$
820	CLOSE #1,#2
830	GOTO 9999
900	PRINT "?The FORMAT of the ",ZSTRING$," file is incorrect"
910	GOTO 820
9999	END
```
{% endraw %}

## MSXGEN.ASM

{% raw %}
```
; Generic MS DOS Kermit module

	public	serini, serrst, clrbuf, outchr, coms, vts, dodel,
	public	ctlu, cmblnk, locate, lclini, prtchr, dobaud, clearl,
	public	dodisk, getbaud, beep
	public	count, xofsnt, puthlp, putmod, clrmod, poscur
	public	sendbr, term, machnam, setktab, setkhlp, showkey
	include msdefs.h

false	equ	0
true	equ	1
instat	equ	6
rddev	equ	3fH
open	equ	3dH

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

machnam	db	'Generic MS-DOS 2.0$'
erms20	db	cr,lf,'?Warning: System has no disk drives$' ; [21a]
erms40	db	cr,lf,'?Warning: Unrecognized baud rate$'
erms41	db	cr,lf,'?Warning: Cannot open com port$'
erms50	db	cr,lf,'Error reading from device$'
hnd1	db	cr,lf,'Enter a file handle.  Check your DOS manual if you are '
	db	cr,lf,'not certain what value to supply (generally 3).$'
hnd2	db	cr,lf,'Handle: $'
hnderr	db	cr,lf,'Warning: Handle not known.'
deverr	db	cr,lf,'Any routine using the communications port will'
	db	cr,lf,'probably not work.$'
hndhlp	db	cr,lf,'A four digit file handle $'
dev1	db	cr,lf,'Device: $'
devhlp	db	cr,lf,'Name for your systems auxiliary port $'
badbd	db	cr,lf,'Unimplemented baud rate$'
noimp	db	cr,lf,'Command not implemented.$'
shkmsg	db	'Not implemented.'
shklen	equ	$-shkmsg
setktab	db	0
setkhlp	db	0
crlf    db      cr,lf,'$'
delstr  db      BS,' ',BS,'$' 		; Delete string. [21d]
clrlin  db      cr,'$'			; Clear line (just the cr part).
clreol	db	'^U',cr,lf,'$'		; Clear line.
telflg	db	0		; non-zero if we're a terminal.
xofsnt	db	0		; Say if we sent an XOFF.
xofrcv	db	0		; Say if we received an XOFF.
count	dw	0		; Number of chars in int buffer.
prthnd	dw	0		; Port handle.
prttab	dw	com2,com1
com1	db	'COM1',0
com2	db	'COM2',0
tmp	db	?,'$'
temp	dw	0
temp1   dw      ?               ; Temporary storage.
temp2   dw      ?               ; Temporary storage.
rdbuf	db	20 dup(?)	; Buffer for input.
prtstr	db	20 dup(?)	; Name of auxiliary device. [27d] 

; Entries for choosing communications port. [19b]
comptab	db	6		; Number of options
	mkeyw	'1',01H
	mkeyw	'2',00H
	mkeyw	'COM1',01H
	mkeyw	'COM2',00H
	mkeyw	'DEVICE',02H
	mkeyw	'FILE-HANDLE',03H

ourarg	termarg	<>

datas	ends

code	segment	public
	extrn	comnd:near, dopar:near, prserr:near, atoi:near, prompt:near
	assume	cs:code,ds:datas

; this is called by Kermit initialization.  It checks the
; number of disks on the system, sets the drives variable
; appropriately.  Returns normally.  

DODISK	PROC	NEAR
	mov ah,gcurdsk			; Current disk value to AL.
	int dos
	mov dl,al			; Put current disk in DL.
	mov ah,seldsk			; Select current disk.
	int dos				; Get number of drives in AL.
	mov drives,al
	ret
DODISK	ENDP

; Clear the input buffer. This throws away all the characters in the
; serial interrupt buffer.  This is particularly important when
; talking to servers, since NAKs can accumulate in the buffer.
; Do nothing since we are not interrupt driven.  Returns normally.

CLRBUF	PROC	NEAR
	ret
CLRBUF	ENDP

; Clear to the end of the current line.  Returns normally.

CLEARL	PROC	NEAR
	mov ah,prstr
	mov dx,offset clreol
	int dos
	ret
CLEARL	ENDP

; Put the char in AH to the serial port.  This assumes the
; port has been initialized.  Should honor xon/xoff.  Skip returns on
; success, returns normally if the character cannot be written.

outchr:	mov bp,portval
	cmp ds:[bp].floflg,0	; Are we doing flow control.
	je outch2		; No, just continue.
	xor cx,cx		; clear counter
outch1:	cmp xofrcv,true		; Are we being held?
	jne outch2		; No - it's OK to go on.
	loop outch1		; held, try for a while
	mov xofrcv,false	; timed out, force it off and fall thru.
outch2:	push dx			; Save register.
	mov al,ah		; Parity routine works on AL.
	call dopar		; Set parity appropriately.
	mov dl,al
	mov ah,punout		; Output char in DL to comm port.
	int dos
	pop dx
	jmp rskp

; This routine blanks the screen.  Returns normally.

CMBLNK	PROC	NEAR
	mov ah,prstr
	mov dx,offset crlf	; Can't do anything else.
	int dos
	ret
CMBLNK  ENDP

; Homes the cursor.  Returns normally.

LOCATE  PROC	NEAR
	mov dx,0		; Go to top left corner of screen.
	jmp poscur
LOCATE  ENDP

; Write a line at the bottom of the screen...  
; the line is passed in dx, terminated by a $.  Returns normally.
putmod	proc	near
	push	dx		; preserve message
	mov	dx,1800h	; now address line 24
	call	poscur
	pop	dx		; get message back
	mov	ah,prstr
	int	dos		; write it out
	ret			; and return
putmod	endp

; clear the mode line written by putmod.  Returns normally.
clrmod	proc	near
	mov	dx,1800h
	call	poscur		; Go to bottom row.
	call	clearl		; Clear to end of line.
	ret
clrmod	endp

; Put a help message on the screen.  
; Pass the message in ax, terminated by a null.  Returns normally.
puthlp	proc	near
	push	ax		; preserve this
	mov 	ah,prstr
	mov 	dx,offset crlf
	int 	dos
	pop	si		; point to string again
puthl3:	lodsb			; get a byte
	cmp	al,0		; end of string?
	je	puthl4		; yes, stop
	mov 	dl,al
	mov	ah,dconio
	int	dos		; else write to screen
	jmp	puthl3		; and keep going
puthl4:	mov 	ah,prstr
	mov 	dx,offset crlf
	int 	dos
	ret
puthlp	endp

; Set the baud rate for the current port, based on the value
; in the portinfo structure.  Returns normally.

DOBAUD	PROC	NEAR
	mov ah,prstr
	mov dx,offset noimp	; Say it's not implemented.
	int dos
	mov bx,portval
	mov [bx].baud,0FFFFH	; So it's not a recognized value.
	ret			; Must be set before starting Kermit.
DOBAUD	ENDP

; Get the current baud rate from the serial card and set it
; in the portinfo structure for the current port.  Returns normally.
; This is used during initialization.

GETBAUD	PROC	NEAR
	ret			; Can't do this.
GETBAUD	ENDP

; Use for DOS 2.0 and above.  Check the port status.  If no data, skip
; return.  Else, read in a char and return.
PRTCHR	PROC    NEAR
	push bx
	push cx
	push si
	push bp
	cmp prthnd,0		; Got a handle yet? [27d]
	jne prtch0		; Yup just go on. [27d]
	call opnprt		; Else 'open' the port. [27d]
prtch0:	call chkxon
	mov bx,prthnd
	mov al,instat
	mov ah,ioctl
	int dos
	or al,al
	jz prtch4		; not ready...
	mov bx,prthnd
	mov ah,rddev
	mov cx,1
	mov dx,offset temp
	int dos
	cmp al,5		; Error condition.
	je prt3x
	cmp al,6		; Error condition
	je prt3x
	mov al,byte ptr temp
	mov bp,portval
	cmp ds:[bp].parflg,PARNON	; no parity?
	je prtch3		; then don't strip
	and al,7fh		; else turn off parity
prtch3:	pop bp
	pop si
	pop cx
	pop bx
	ret
prt3x:	mov ah,prstr
	mov dx,offset erms50
	int dos
prtch4:	pop bp
	pop si
	pop cx
	pop bx
	jmp rskp		; no chars...
PRTCHR  ENDP

; Local routine to see if we have to transmit an xon
chkxon	proc	near
	push	bx
	mov	bx,portval
	cmp	[bx].floflg,0	; doing flow control?
	je	chkxo1		; no, skip all this
	cmp	xofsnt,false	; have we sent an xoff?
	je	chkxo1		; no, forget it
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
	ret
SENDBR	ENDP

; Position the cursor according to contents of DX:
; DH contains row, DL contains column.  Returns normally.
POSCUR	PROC	NEAR
	ret
POSCUR	ENDP

; Delete a character from the terminal.  This works by printing
; backspaces and spaces.  Returns normally.

DODEL	PROC	NEAR
	mov ah,prstr
	mov dx,offset delstr	; Erase weird character.
	int dos			
	ret
DODEL	ENDP

; Move the cursor to the left margin, then clear to end of line.
; Returns normally.

CTLU	PROC	NEAR
	mov ah,prstr
	mov dx,offset clrlin
	int dos
	call clearl
	ret
CTLU	ENDP

; Set the current port.  

COMS	PROC	NEAR
        mov dx,offset comptab
        mov bx,0
        mov ah,cmkey
        call comnd
         jmp r
        push bx
        mov ah,cmcfm
        call comnd              ; Get a confirm.
         jmp comx		;  Didn't get a confirm.
	 nop
        pop bx
	cmp bl,2		; Do they want to set device name? [27d]
	je coms2		; Yes go get name. [27d]
	jg coms3		; Else pick up file handle. [27d]
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
coms2:	mov dx,offset dev1	; Let user supply device name.
	call prompt
	mov ah,cmtxt
	mov bx,offset prtstr	; Put name here
	mov dx,offset devhlp
	call comnd
	 jmp coms21		; Did user type ^C.
	 nop
	mov al,0		; Need a null
	mov [bx],al		; To terminate string
	mov dx,offset prtstr	; Point to string
	mov ah,open		; Open port
	mov al,2		; For reading and writing
	int dos
	jnc coms22		; Success
coms21:	mov ah,prstr
	mov dx,offset erms41
	int dos
	mov dx,offset deverr
	int dos
	ret
coms22:	mov prthnd,ax		; Save handle.
	ret
coms3:	mov dx,offset hnd2	; Let user supply file handle.
	call prompt
	mov ah,cmtxt
	mov bx,offset rdbuf	; Where to put input.
	mov dx,offset hndhlp	; In case user wants help.
	call comnd
	 jmp coms31		; No go.
	 nop
	cmp ah,4		; Right amount of data?
	ja coms31		; Too many chars.  
	mov si,offset rdbuf
	call atoi		; Convert to real number
	 jmp coms31		; Keep trying. 
	 nop
	mov prthnd,ax		; Value returned in AX
	ret
coms31:	mov ah,prstr		; Else, issue a warning.
	mov dx,offset hnderr
	int dos
	ret			; Yes, fail.
COMS	ENDP

; Set heath emulation on/off.

VTS	PROC	NEAR
	jmp notimp
VTS	ENDP

notimp:	mov ah,prstr
	mov dx,offset noimp
	int dos
	jmp prserr

; Initialize variables to values used by the generic MS DOS version.

lclini:	mov flags.vtflg,0	; Don't to terminal emulation.
	mov prthnd,0		; No handle yet. [27d]
;	call opnprt		; Get file handle for comm port.
	ret

; Get a file handle for the communications port.  Use DOS call to get the
; next available handle.  If it fails, ask user what value to use (there
; should be a predefined handle for the port, generally 3).  The open
; will fail if the system uses names other than "COM1" or "COM2".
opnprt:	mov al,flags.comflg
	mov ah,0
	mov si,ax
	shl si,1		; double index
	mov dx,prttab[si]
	mov ah,open
	mov al,2
	int dos
	jnc opnpr2
	mov ah,prstr		; It didn't like the string.
	mov dx,offset erms41
	int dos
	mov dx,offset hnd1
	int dos
opnpr0:	mov dx,offset hnd2	; Ask user to supply the handle.
	call prompt
	mov ah,cmtxt
	mov bx,offset rdbuf	; Where to put input.
	mov dx,offset hndhlp	; In case user wants help.
	call comnd
	 jmp opnpr3		; Maybe user typed a ^C.
	 nop
	mov si,offset rdbuf
	call atoi		; Convert to real number
	 jmp opnpr0		; Keep trying. 
	 nop
	mov prthnd,ax		; Value returned in AX
	ret
opnpr2:	mov prthnd,ax		; Call succeeded.
	ret
opnpr3:	cmp flags.cxzflg,'C'	; Did user type a ^C?
	jne opnpr4		; No, don't say anything.
	mov ah,prstr		; Else, issue a warning.
	mov dx,offset hnderr
	int dos
opnpr4:	ret			; Yes, fail.

showkey:
	mov ax,offset shkmsg
	mov cx,shklen
	ret

; Initialization for using serial port.  Returns normally.
SERINI	PROC	NEAR
	cld			; Do increments in string operations
	call clrbuf		; Clear input buffer. 
	ret			; We're done.
SERINI	ENDP

; Reset the serial port.  This is the opposite of serini.  Calling
; this twice without intervening calls to serini should be harmless.
; Returns normally.

SERRST	PROC	NEAR
	ret			; All done.
SERRST	ENDP

; Produce a short beep.  The PC DOS bell is long enough to cause a loss
; of data at the port.  Returns normally.

BEEP	PROC	NEAR
	mov dl,bell
	mov ah,dconio
	int dos
	ret
BEEP	ENDP 
 
; Dumb terminal emulator.  Doesn't work too well above 1200 baud (and
; even at 1200 baud you sometimes lose the first one or two characters
; on a line).  
term	proc	near
	mov si,ax		; this is source
	mov di,offset ourarg	; place to store arguments
	mov ax,ds
	mov es,ax		; address destination segment
	mov cx,size termarg
	rep movsb		; copy into our arg blk
term1:	call prtchr
	jmp short term2		; have a char...
	nop
	nop
	jmp short term3		; no char, go on
term2:	push ax
	and al,7fh		; mask off parity for terminal
	mov dl,al
	mov ah,conout
	int dos			; go print it
	pop ax
	test ourarg.flgs,capt	; capturing output?
	jz term3		; no, forget it
	call ourarg.captr	; else call the routine
term3:	mov ah,dconio
	mov dl,0ffh
	int dos
	jz term1		; no character, go on
	cmp al,ourarg.escc	; escape char?
	je term4		; yes, exit
	push ax			; save char
	mov ah,al
	or ah,80H		; turn on hi bit so DOS doesn't interfere
	call outchr		; output the character
	nop
	nop
	nop
	pop ax
	test ourarg.flgs,lclecho ; echoing?
	jz term1		; no, continue loop
	mov dl,al
	mov ah,dconio
	int dos
	jmp term1		; else echo and keep going
term4:	ret
term	endp

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
```
{% endraw %}

## MSXHP150.ASM

{% raw %}
```
	public	serini, serrst, clrbuf, outchr, coms, vts, dodel, ctlu
	public	cmblnk, locate, prtchr, dobaud, clearl, lclini
	public	dodisk, getbaud, beep, setkhlp, setktab
	public	machnam, xofsnt, count, term, poscur
	public	clrmod, putmod, puthlp, sendbr, showkey
	include msdefs.h

false	equ	0
true	equ	1

wrdev	equ	40H
rddev	equ	3fH
open	equ	3dH
close	equ	3eH
rdchan	equ	2
e_send_break equ 6
e_ioctl	equ	44h		; MSODS io control fct

datas 	segment	public 'datas'
	extrn	drives:byte, flags:byte, trans:byte
	extrn	portval:word, port1:byte, port2:byte
machnam	db	'HP-150$'
erms20	db	cr,lf,'?Warning: System has no disk drives$' ; [21a]
erms40	db	cr,lf,'?Warning: Unrecognized baud rate$'
erms41	db	cr,lf,'?Warning: Cannot open com port$'
noimp	db	cr,lf,'Command not implemented.$'
setktab	db	0
setkhlp	db	0
shkmsg	db	'Not implemented.'
shklen	equ	$-shkmsg
crlf    db      cr,lf,'$'
comphlp	db	cr,lf,'1 (COM1)   2 (COM2)$'		; [19b]
delstr  db      BS,BS,'  ',BS,BS,'$' 	; Delete string. [21d]
clrlin  db      cr,esc,'K$'
xofsnt	db	0		; Say if we sent an XOFF.
xofrcv	db	0		; Say if we received an XOFF.
invseq	db	esc,'&dB$'	; Reverse video.
nrmseq	db	esc,'&d@$'	; Normal mode.
ivlseq	db	80 dup (' '),cr,'$' 	; Make a line inverse video
tmp	db	?,'$'
temp	dw	0
temp1   dw      ?               ; Temporary storage.
temp2   dw      ?               ; Temporary storage.

; Entries for choosing communications port. [19b]

comptab	db	04H
	db	01H,'1$'
	dw	01H
	db	01H,'2$'
	dw	00H
	db	04H,'COM1$'
	dw	01H
 	db	04H,'COM2$'
	dw	00H

; variables for serial interrupt handler

source	db	bufsiz DUP(?)	; Buffer for data from port.
bufout	dw	0		; buffer removal ptr
count	dw	0		; Number of chars in int buffer.
bufin	dw	0		; buffer insertion ptr
telflg	db	0		; Are we acting as a terminal. [16] [17c]
clreol	db	esc,'K$'
prttab	dw	com2,com1
com1	db	'COM1',0
com2	db	'COM2',0
blank	db	esc,'H',esc,'J$'
movcur	db	esc,'&a'
colno	db	20 dup (?)
ten	db	10
prthnd	dw	0
tempbuf dw	10 dup(?)
ourarg	termarg	<>
datas	ends

code	segment	public
	extrn	comnd:near, dopar:near, prserr:near
	assume	cs:code,ds:datas

; See how many disk drives we have.
DODISK	PROC	NEAR
	mov ah,gcurdsk			; Current disk value to AL.
	int dos
	mov dl,al			; Put current disk in DL.
	mov ah,seldsk			; Select current disk.
	int dos				; Get number of drives in AL.
	mov drives,al
	ret
DODISK	ENDP

; Clear the input buffer before sending a packet. [20e]

CLRBUF	PROC	NEAR
	cli
	mov ax,offset source
	mov bufin,ax
	mov bufout,ax
	mov count,0
	sti
clrb1:	call prtchr		; get a character
	 jmp clrb1		; until there aren't any more
	 nop
	ret
CLRBUF	ENDP

; Common routine to clear to end-of-line. [19a]

CLEARL	PROC	NEAR
	mov dx,offset clreol
	mov ah,prstr
	int dos
	ret
CLEARL	ENDP

dobaud	proc	near
	jmp notimp
dobaud	endp

; Send the break signal out data comm.
sendbr:	mov al,e_send_break
	jmp  dc_ioctl

; Set some data comm ioctl option.  AL has function code.
dc_ioctl proc	near
	mov ah,8h
	mov tempbuf,ax
	mov dx,offset tempbuf
	mov ah,e_ioctl
	mov al,3
	mov bx,prthnd
	mov cx,2
	int 21h
	ret
dc_ioctl endp


outchr:	mov bp,portval
	cmp ds:[bp].floflg,0	; Are we doing flow control.
	je outch2		; No, just continue.
	xor cx,cx		; clear counter
outch1:	cmp xofrcv,true		; Are we being held?
	jne outch2		; No - it's OK to go on.
	loop outch1		; held, try for a while
	mov xofrcv,false	; timed out, force it off and fall thru.
outch2:	push dx			; Save register.
	push cx
	push bx
	cmp prthnd,0		; do we have a port handle?
	jne outch3		; yes, go on
	push ax
	call opnprt		; open the port
	pop ax
outch3: mov byte ptr temp,ah	; save character
	mov bx,prthnd
	mov ah,wrdev
	mov cx,1
	mov dx,offset temp
	int dos
	pop bx
	pop cx
	pop dx
	jmp rskp

opnprt:	mov al,flags.comflg
	mov ah,0
	mov si,ax
	shl si,1		; double index
	mov dx,prttab[si]
	mov ah,open
	mov al,2
	int dos
	jnc opnpr1
	mov ah,prstr
	mov dx,offset erms41
	int dos
	ret
opnpr1:	mov prthnd,ax
	ret

; This routine blanks the screen.

CMBLNK	PROC	NEAR		; This is stolen from the IBM example.
	mov ah,prstr
	mov dx,offset blank
	int dos
	ret
CMBLNK  ENDP

LOCATE  PROC	NEAR
	mov dx,0		; Go to top left corner of screen.
	jmp poscur		; callret...
LOCATE  ENDP

GETBAUD	PROC	NEAR
	ret
GETBAUD	ENDP


; skip returns if no character available at port,
; otherwise returns with char in al, # of chars in buffer in dx.
PRTCHR	PROC    NEAR
	push bx
	push cx
	push si
	push bp
	cmp count,0		; no characters?
	jne prtch2		; no, go fill buffer
	cmp prthnd,0		; have a handle yet?
	jne prtch1		; yes, keep going
	call opnprt
prtch1:	mov bx,prthnd
	mov al,rdchan
	mov ah,ioctl
	mov dx,offset source	; buffer to read into
	mov cx,bufsiz		; length of buffer
	int dos
	mov count,ax		; reset count
	or ax,ax
	jz prtch4		; still no chars
	mov bufout,offset source ; this is output ptr
prtch2:	dec count
	mov dx,count		; return count in dx
	mov si,bufout
	lodsb			; get character
	mov bufout,si		; update ptr
	mov bp,portval
	cmp ds:[bp].parflg,PARNON	; no parity?
	je prtch3		; then don't strip
	and al,7fh		; else turn off parity
prtch3:	pop bp
	pop si
	pop cx
	pop bx
	ret
prtch4:	pop bp
	pop si
	pop cx
	pop bx
	jmp rskp		; no chars...
PRTCHR  ENDP

; Position the cursor according to contents of DX.

POSCUR	PROC	NEAR
	mov	ax,ds
	mov	es,ax			; address data segment!!!
	cld
	mov	di,offset colno
	mov	al,dl			; column
	call	nout
	mov	al,'c'
	stosb
	mov	al,dh			; row
	call	nout
	mov	al,'Y'
	stosb
	mov	al,'$'
	stosb
	mov	dx,offset movcur
	mov	ah,prstr
	int	dos			; print the sequence
	ret
POSCUR	ENDP

NOUT	PROC	NEAR
	cbw			; extend to word
	div	byte ptr ten	; divide by 10
	or	al,al		; any quotient?
	jz	nout1		; no, forget this
	push	ax		; save current result
	call	nout		; output high order
	pop	ax		; restore
nout1:	mov	al,ah		; get digit
	add	al,'0'		; make printable
	stosb
	ret			; put in buffer and return
NOUT	endp

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
	pop si			; Put message address here.
puth0:	mov ah,prstr
	mov dx,offset invseq	; Put into reverse video.
	int dos
	mov ah,prstr
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
puth2:	mov dx,offset crlf
	mov ah,prstr
	int dos
	mov dx,offset nrmseq	; Normal video.
	int dos
	ret
puthlp	endp

; Perform a delete.

DODEL	PROC	NEAR
	mov ah,prstr
	mov dx,offset delstr	; Erase weird character.
	int dos			
	ret
DODEL	ENDP

; Perform a Control-U.

CTLU	PROC	NEAR
	mov ah,prstr
	mov dx,offset clrlin
	int dos
	ret
CTLU	ENDP

COMS	PROC	NEAR
        mov dx,offset comptab
        mov bx,offset comphlp
        mov ah,cmkey
        call comnd
         jmp r
        push bx
        mov ah,cmcfm
        call comnd              ; Get a confirm.
         jmp comx		;  Didn't get a confirm.
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
COMS	ENDP

VTS	PROC	NEAR
	jmp notimp
VTS	ENDP

notimp:	mov ah,prstr
	mov dx,offset noimp
	int dos
	jmp prserr

lclini:	ret

showkey:
	mov ax,offset shkmsg
	mov cx,shklen
	ret

;  Common initialization for using serial port.

SERINI	PROC	NEAR
	call opnprt
	call clrbuf		; Clear input buffer. [20e]
	ret			; We're done. [21c]
SERINI	ENDP

SERRST	PROC	NEAR
	mov bx,prthnd
	cmp bx,0		; none there?
	je serrs1		; no, don't try to close.
	mov ah,close
	int dos			; close handle
	mov prthnd,0
serrs1:	ret			; All done. [21c]
SERRST	ENDP

; Generate a short beep.

BEEP	PROC	NEAR
	mov dl,bell
	mov ah,conout
	int dos	
	ret
BEEP	ENDP 
 
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

term	proc	near
	mov si,ax		; this is source
	mov di,offset ourarg	; place to store arguments
	mov ax,ds
	mov es,ax		; address destination segment
	mov cx,size termarg
	rep movsb		; copy into our arg blk
term1:	call prtchr
	jmp short term2		; have a char...
	nop
	nop
	jmp short term3		; no char, go on
term2:	push ax
	mov dl,al
	and dl,7fh		; mask off parity for terminal
	mov ah,dconio
	int dos			; write out the character
	pop ax
	test ourarg.flgs,capt	; capturing output?
	jz term3		; no, forget it
	call ourarg.captr	; else call the routine
term3:	mov ah,dconio
	mov dl,0ffh
	int dos
	jz term1		; no character, go on
	cmp al,ourarg.escc	; escape char?
	je term4		; yes, exit
	push ax			; save char
	mov ah,al
	or ah,80H		; turn on hi bit so DOS doesn't interfere
	call outchr		; output the character
	nop
	nop
	nop
	pop ax
	test ourarg.flgs,lclecho ; echoing?
	jz term1		; no, continue loop
	mov dl,al
	mov ah,dconio
	int dos
	jmp term1		; else echo and keep going
term4:	ret
term	endp
code	ends 
	end
```
{% endraw %}

## MSXRB.ASM

{% raw %}
```
; Kermit system dependent module for Rainbow
; Jeff Damens, July 1984

; edit history
;  install set baud command, JD 11:57pm  Thursday, 29 November 1984
;  fix scrprep so that autowrap works correctly, JD 12:23am, 5 December 1984
;  save attributes as well as screen text, JD 12:26am  6 December 1984
;  Handle 132 column mode correctly, JD 12:26am  Thursday, 6 December 1984
;  pop into vt100 mode when displaying escape sequences, JD, 6 December 1984
;  Made break 275 ms, thanks to Bernie Eiben, JD, 6 December 1984

	public	serini, serrst, clrbuf, outchr, coms, vts, dodel,
	public	ctlu, cmblnk, locate, lclini, prtchr, dobaud, clearl,
	public	dodisk, getbaud, beep,
	public	count, xofsnt, puthlp, putmod, clrmod, poscur
	public	sendbr, term, machnam, setktab, setkhlp, showkey
	include msdefs.h

; rainbow-dependent screen constants

scrseg	equ	0ee00H		; screen segment
latofs	equ	0ef4h		; ptrs to line beginnings, used by firmware
l1ptr	equ	latofs		; ptr to first line
llptr	equ	latofs+23*2	; ptr to last line
csrlin	equ	0f42h		; current cursor line.
curlin	equ	0f43h		; current line flags
wrpend	equ	2		; wrap pending...
attoffs	equ	1000H
rmargin	equ	0f57h		; right margin limit...

; rainbow-dependent firmware locations
nvmseg	equ	0ed00h		; segment containing NVM
xmitbd	equ	0a1h		; address of xmit baud
rcvbd	equ	0a2h		;   "     "  receive baud
autwrp	equ	08dH		; b0 = 1 if auto wrap on (?)
bdprt	equ	06h		; baud rate port
vt52mod	equ	088h		; b0 = 1 if in ansi mode.

; level 1 console definitions

fnkey	equ	100H		; function key flag
shfkey	equ	200H		; shift key
ctlkey	equ	400H		; control key
cplk	equ	800H

prvkey	equ	23H
nxtkey	equ	25H
brkkey	equ	65H
prtkey	equ	3

false	equ	0
true	equ	1
mntrgh	equ	bufsiz*3/4	; High point = 3/4 of buffer full.

mnstata	equ	042H		;Status/command port A
mnstatb	equ	043H		;Status/command port B.
mndata	equ	040H		;Data port.
mndatb	equ	041H
mnctrl	equ	002H		;Control port.
serchn	equ	0A4H		; interrupt to use
serch1	equ	044H		; use this too for older rainbows.

txrdy	EQU	04H		;Bit for output ready.
rxrdy	EQU	01H		;Bit for input ready.

fastcon	equ	29H		; fast console handler
firmwr	equ	18H
kcurfn	equ	8h		; disable cursor
rcurfn	equ	0ah		; enable cursor

swidth	equ	132		; screen width
slen	equ	24		; screen length
npgs	equ	2		; # of pages to remember

stbrk	equ	15		; start sending a break
enbrk	equ	16		; stop sending break.

; external variables used:
; drives - # of disk drives on system
; flags - global flags as per flginfo structure defined in pcdefs
; trans - global transmission parameters, trinfo struct defined in pcdefs
; portval - pointer to current portinfo structure (currently either port1
;    or port2)
; port1, port2 - portinfo structures for the corresponding ports

; global variables defined in this module:
; xofsnt, xofrcv - tell whether we saw or sent an xoff.

; circular buffer ptr
cbuf	struc
pp	dw	?			; place ptr in buffer
bend	dw	?			; end of buffer
orig	dw	?			; buffer origin
lcnt	dw	0			; # of lines in buffer.
cbuf	ends

; answerback structure
ans	struc
anspt	dw	?			; current pointer in answerback
ansct	db	?			; count of chars in answerback
ansseq	dw	?			; pointer to whole answerback
anslen	db	?			; original length
ansrtn	dw	?			; routine to call.
ans	ends

datas 	segment	public 'datas'
	extrn	drives:byte,flags:byte, trans:byte
	extrn	portval:word, port1:byte, port2:byte

setktab	db	22
	mkeyw	'F4',fnkey+5h
	mkeyw	'F5',fnkey+65h
	mkeyw	'F6',fnkey+7h
	mkeyw	'F7',fnkey+9h
	mkeyw	'F8',fnkey+0Bh
	mkeyw	'F9',fnkey+0Dh
	mkeyw	'F10',fnkey+0Fh
	mkeyw	'F11',esc
	mkeyw	'F12',bs
	mkeyw	'F13',lf
	mkeyw	'F14',fnkey+11h
	mkeyw	'F17',fnkey+13h
	mkeyw	'F18',fnkey+15h
	mkeyw	'F19',fnkey+17h
	mkeyw	'F20',fnkey+19h
	mkeyw	'FIND',fnkey+1bh
	mkeyw	'INSERTHERE',fnkey+1dh
	mkeyw	'REMOVE',fnkey+1fh
	mkeyw	'SCAN',-1
	mkeyw	'SELECT',fnkey+21h

ourflgs	db	0		; our flags
fpscr	equ	80H		; flag definitions...

crlf	db	cr,lf
setkhlp	db	' F4 ... F20 or SCAN$'
machnam	db	'Rainbow$'
nyimsg	db	cr,lf,'Not yet implemented$'
badbdmsg db	cr,lf,'?Unsupported baud rate$'
delstr  db      BS,' ',BS,'$' 	; Delete string.
clrlin  db      cr,'$'		; Clear line (just the cr part).
oldser	dw	?		; old serial handler
oldseg	dw	?		; segment of above
old1ser	dw	?		; old serial handler, alternate address
old1seg	dw	?		; segment of same.
portin	db	0		; Has comm port been initialized.
xofsnt	db	0		; Say if we sent an XOFF.
xofrcv	db	0		; Say if we received an XOFF.
iobuf	db	5 dup (?)	; buffer for ioctl

phbuf	db	swidth dup (?)
gopos	db	esc,'['
rowp	db	20 dup (?)
clrseq	db	esc,'[H',esc,'[J$'
ceolseq	db	esc,'[K$'
invseq	db	esc,'[7m$'
nrmseq	db	esc,'[0m$'
ivlatt	db	swidth dup (0fH) ; a line's worth of inverse attribute

; special keys.
spckey	dw	prvkey,nxtkey,brkkey,prtkey,prtkey+ctlkey,prvkey+ctlkey
	dw	nxtkey+ctlkey,brkkey+ctlkey
spclen	equ	($-spckey)/2
; special key handlers.  Must parallel spckey
spchnd	dw	prvscr,nxtscr,sendbr,prtscr,togprt,prvlin,nxtlin,sendbr

; arrow and PF keys
arrkey	db	27H,29H,2bH,2dH,59H,5cH,5fH,62H
arrlen	equ	$-arrkey
; translations for arrow and PF keys, must parallel arrkey
arrtrn	dw	uptrn,dntrn,rgttrn,lfttrn
	dw	pf1trn,pf2trn,pf3trn,pf4trn

; keypad keys
keypad	db	2fh,32h,35h,38h,3bh,3eh,41h,44h,47h,4ah,4dh,50h,53h,56h
keypln	equ	$-keypad
; keytrn and altktrn must parallel keypad
keytrn	db	'0123456789-,.',cr
altktrn	db	'pqrstuvwxymlnM'

keyptr	dw	keytrn		; pointer to correct translation table
akeyflg	db	0		; non-zero if in alt keypad mode.

; arrow and PF key translations
uptrn	db	3,esc,'[A'
dntrn	db	3,esc,'[B'
rgttrn	db	3,esc,'[C'
lfttrn	db	3,esc,'[D'
pf1trn	db	3,esc,'OP'
pf2trn	db	3,esc,'OQ'
pf3trn	db	3,esc,'OR'
pf4trn	db	3,esc,'OS'

ourarg	termarg	<>

; variables for serial interrupt handler
source	db	bufsiz DUP(?)	; Buffer for data from port.
srcpnt	dw	0		; Pointer in buffer (DI).
count	dw	0		; Number of chars in int buffer.
savesi	dw	0		; Save SI register here.	
telflg	db	0		; non-zero if we're a terminal. NRU.
respkt	db	10 dup (?)	; ioctl packet
ivec	dw	tranb		; transmit empty B
	dw	tranb		; status change B
	dw	tranb		; receive b
	dw	tranb		; special receive b
	dw	stxa		; transmit empty a
	dw	sstata		; status change a
	dw	srcva		; receive a
	dw	srcva		; special receive a

; baud rate definitions
; position in table is value programmed into baud rate port, value
; is our baud rate constant

bdtab	db	b0050,b0075,b0110,b01345,b0150,0ffh,b0300,b0600
	db	b1200,b1800,b2000,b2400,0ffh,b4800,b9600,b19200
bdsiz	equ	$-bdtab

; multi-screen stuff

bsize	equ	swidth*2*slen*npgs ; # of bytes needed to store screens
tbuf	db	bsize dup (?)
bbuf	db	bsize dup (?)	; top and bottom buffers
topbuf	cbuf	<tbuf,tbuf+bsize-1,tbuf,0>
botbuf	cbuf	<bbuf,bbuf+bsize-1,bbuf,0>
tlbuf	db	swidth*2 dup (?) ; top line temp buffer
blbuf	db	swidth*2 dup (?) ; bottom line temp buffer
rlbuf	db	swidth*2 dup (?) ; line temp buffer
prbuf	db	swidth dup (?)	; print temp buffer
topdwn	db	esc,'[H',esc,'M$' ; go to top, scroll down
botup	db	esc,'[24;0H',esc,'D$' ; go to bottom, scroll up
curinq	db	esc,'[6n$'	; cursor inquiry
posbuf	db	20 dup (?)	; place to store cursor position
gtobot	db	esc,'[24;0H$'	; go to bottom of screen.
ourscr	db	slen*swidth dup (?)
ourattr	db	slen*swidth dup (?) ; storage for screen and attributes
inited	db	0		; terminal handler not inited yet.
dosmsg	db	'?Must be run in version 2.05 or higher$'
anssq1	db	esc,'[c'
ansln1	equ	$-anssq1
anssq2	db	esc,'Z'
ansln2	equ	$-anssq2
eakseq	db	esc,'='
dakseq	db	esc,'>'
crsseq	db	esc,'c'
ansbk1	ans	<anssq1,ansln1,anssq1,ansln1,sndans> ; two answerbacks
ansbk2	ans	<anssq2,ansln2,anssq2,ansln2,sndans>
ansbk3	ans	<eakseq,2,eakseq,2,enaaky> ; enable alt keypad
ansbk4	ans	<dakseq,2,dakseq,2,deaaky> ; disable alt keypad
ansbk5	ans	<crsseq,2,crsseq,2,sndspc> ; crash sequence (!)
;ansbk6	ans	; Commented out to avoid no-operand error [jc]
ansret	db	esc,'[?6c'
ansrln	equ	$-ansret
shkbuf	db	300 dup (?)	; room for definition
shkmsg	db	'  Scan code: '
shkmln	equ	$-shkmsg
shkms1	db	cr,lf,'  Definition: '
shkm1ln	equ	$-shkms1
datas	ends

code	segment	public
	extrn	comnd:near, dopar:near
	assume	cs:code,ds:datas

; local initialization routine, called by Kermit initialization.

lclini	proc	near
; make sure this is DOS version 2.05 or higher...
	mov	ah,dosver
	int	dos
	xchg	al,ah		; put major version in ah, minor in al
	cmp	ax,205H		; is it 2.05?
	jae	lclin1		; yes, go on
	mov	dx,offset dosmsg
	call	tmsg
	mov	ax,4c00H	; exit(0)
	int	dos
lclin1:	mov	flags.vtflg,0	; turn off heath emulation
	ret
lclini	endp

; this is called by Kermit initialization.  It checks the
; number of disks on the system, sets the drives variable
; appropriately.  The only problem is that a value of two
; is returned for single drive systems to be consistent
; with the idea of the system having logical drives A and
; B.  Returns normally.  

DODISK	PROC	NEAR
	mov ah,gcurdsk			; Current disk value to AL.
	int dos
	mov dl,al			; Put current disk in DL.
	mov ah,seldsk			; Select current disk.
	int dos				; Get number of drives in AL.
	mov drives,al
	ret
DODISK	ENDP

; show the definition of a key.  The terminal argument block (which contains
; the address and length of the definition tables) is passed in ax.
; Returns a string to print in AX, length of same in CX.
; Returns normally.
showkey	proc	near
	push	es
	push	ax		; save the ptr
	cld
showk1:	mov	di,6		; get level one char
	int	firmwr
	cmp	cl,0ffH
	jne	showk1		; wait until char available
	mov	bx,ds
	mov	es,bx		; address data segment
	and	ax,not cplk	; no caps lock
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
	mov ax,offset source
	mov srcpnt,ax
	mov savesi,ax
	mov count,0
	sti
	ret
CLRBUF	ENDP

; Clear to the end of the current line.  Returns normally.

CLEARL	PROC	NEAR
	mov	dx,offset ceolseq	; clear sequence
	jmp	tmsg
CLEARL	ENDP

; Put the char in AH to the serial port.  This assumes the
; port has been initialized.  Should honor xon/xoff.  Skip returns on
; success, returns normally if the character cannot be written.

outchr:	mov bp,portval
	cmp ds:[bp].floflg,0	; Are we doing flow control.
	je outch2		; No, just continue.
	xor cx,cx		; clear counter
outch1:	cmp xofrcv,true		; Are we being held?
	jne outch2		; No - it's OK to go on.
	loop outch1		; held, try for a while
	mov xofrcv,false	; timed out, force it off and fall thru.
outch2:	push dx			; Save register.
	sub cx,cx
	mov al,ah		; Parity routine works on AL.
	call dopar		; Set parity appropriately.
	mov ah,al		; Don't overwrite character with status.
	mov dx,mnstata		; port status register
outch3:	in al,dx
	test al,txrdy		; Transmitter ready?
	jnz outch4		; Yes
	loop outch3
	 jmp outch5		; Timeout
outch4:	mov al,ah		; Now send it out
	mov dx,mndata
	out dx,al
	pop dx
	jmp rskp
outch5:	pop dx
	ret

; This routine blanks the screen.  Returns normally.

CMBLNK	PROC	NEAR
	mov	dx,offset clrseq ; clear screen sequence
	jmp	tmsg
CMBLNK  ENDP

; Locate; homes the cursor.  Returns normally.

LOCATE  PROC	NEAR
	mov dx,0		; Go to top left corner of screen.
	jmp poscur
LOCATE  ENDP

; write a line in inverse video at the bottom of the screen...
; the line is passed in dx, terminated by a $.  Returns normally.
putmod	proc	near
	push	dx		; preserve message
	mov	dx,24 * 100H	; line 24
	call	poscur
	mov	dx,offset invseq ; put into inverse video
	call	tmsg
	pop	dx
	call	tmsg		; print the message
	mov	dx,offset nrmseq ; normal videw
	call	tmsg
	ret			; and return
putmod	endp

; clear the mode line written by putmod.  Returns normally.
clrmod	proc	near
	mov	dx,24 * 100H
	call	poscur
	call	clearl
	ret
clrmod	endp

; Put a help message on the screen.  This one uses reverse video...
; pass the message in ax, terminated by a null.  Returns normally.
puthlp	proc	near
	push	ax
	mov	dx,slen * 100H	; go to bottom line
	call	poscur
	pop	ax
	push	es
	mov	bx,ds
	mov	es,bx		; address data segment
	mov	si,ax		; convenient place for this
	mov	bx,101H		; current line/position
puthl1:	mov	di,offset phbuf	; this is destination
	xor	cx,cx		; # of chars in the line
puthl2:	lodsb			; get a byte
	cmp	al,cr		; carriage return?
	je	puthl2		; yes, ignore it
	cmp	al,lf		; linefeed?
	je	puthl3		; yes, break the loop
	cmp	al,0
	je	puthl3		; ditto for null
	dec	cx		; else count the character
	stosb			; deposit into the buffer
	jmp	puthl2		; and keep going
puthl3:	add	cx,80		; this is desired length of the whole
	mov	al,' '
	rep	stosb		; fill the line
	push	bx
	push	si
	push	es		; firmware likes to eat this one
	mov	ax,0		; send chars and attributes
	mov	cx,80		; this is # of chars to send
	mov	dx,offset ivlatt ; this are attributes to send
	mov	si,offset phbuf	; the actual message
	mov	di,14H		; send direct to screen
	mov	bp,ds		; need data segment as well
	int	firmwr		; go send it
	pop	es
	pop	si
	pop	bx		; restore everything
	inc	bx		; next line
	cmp	byte ptr [si-1],0 ; were we ended by a 0 last time?
	jne	puthl1		; no, keep looping
	pop	es		; else restore this
	ret			; and return
puthlp	endp

; Set the baud rate for the current port, based on the value
; in the portinfo structure.  Returns normally.

DOBAUD	PROC	NEAR
	mov	bx,portval
	mov	ax,[bx].baud	; get desired baud rate
	mov	di,offset bdtab
	mov	cx,bdsiz
	repne	scasb		; hunt for baud rate
	jne	doba1		; not found, forget it
	sub	di,offset bdtab+1	; this is baud rate
	mov	ax,di
	mov	bl,al
	mov	cl,4
	shl	bl,cl		; shift constant into high nibble as well
	or	al,bl
	out	bdprt,al	; write into port
	or	al,0f0h		; turn on high nibble
	push	es
	mov	bx,nvmseg
	mov	es,bx
	mov	es:[xmitbd],al
	mov	es:[rcvbd],al	; set baud in nvm
	pop	es
	ret
doba1:	mov	dx,offset badbdmsg
	call	tmsg
	jmp	getbaud		; reset baud and return
DOBAUD	ENDP

; Get the current baud rate from the serial card and set it
; in the portinfo structure for the current port.  Returns normally.
; This is used during initialization.

GETBAUD	PROC	NEAR
	push	es
	mov	ax,nvmseg
	mov	es,ax
	mov	bl,es:[xmitbd]	; get xmit baud rate
	pop	es
	and	bl,0fh		; only low nibble is used
	mov	bh,0
	mov	al,bdtab[bx]	; get baud rate value
	mov	bx,portval
	mov	ah,0
	mov	[bx].baud,ax	; set value
	ret			; and return
GETBAUD	ENDP


; skip returns if no character available at port,
; otherwise returns with char in al, # of chars in buffer in dx.
PRTCHR  PROC    NEAR
	call chkxon		; see if we have to xon the host.
	cmp count,0
	jnz prtch2
	jmp rskp		; No data - check console.
prtch2:	mov si,savesi
	lodsb			; get a byte
	cmp si,offset source + bufsiz	; bigger than buffer?
	jb prtch1		; no, keep going
	mov si,offset source	; yes, wrap around
prtch1:	dec count
	mov savesi,si 
	mov dx,count		; return # of chars in buffer
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
	mov	xofsnt,false	; remember we've sent an xon.
chkxo1:	pop	bx		; restore register
	ret			; and return
chkxon	endp

; Send a break out the current serial port.  Returns normally.
SENDBR	PROC	NEAR
	push bx
	push cx
	push dx
	push ax
	mov ah,ioctl
	mov al,3		; write to control channel.
	mov bx,3		; aux port handle
	mov dx,offset iobuf
	mov iobuf,stbrk		; start sending a break
	int dos
	mov ax,275		; # of ms to wait
	call rbwait		; hold break for desired interval
	mov ah,ioctl
	mov al,3
	mov bx,3
	mov dx,offset iobuf
	mov iobuf,enbrk		; stop sending the break
	int dos
	pop ax
	pop dx
	pop cx
	pop bx
	ret			; And return.
SENDBR	ENDP

; wait for the # of milliseconds in ax
; thanks to Bernie Eiben for this one.
rbwait	proc	near
	mov	cx,240		; inner loop counter for 1 millisecond
rbwai1:	sub	cx,1		; inner loop takes 20 clock cycles
	jnz	rbwai1
	dec	ax		; outer loop counter
	jnz	rbwait		; wait another millisecond
	ret
rbwait	endp


; Position the cursor according to contents of DX:
; DH contains row, DL contains column.  Returns normally.

POSCUR	PROC	NEAR
	add	dx,101H		; start at 1,1
	push	es
	push	dx
	cld
	mov	ax,ds
	mov	es,ax		; address right segment
	mov	di,offset rowp
	mov	al,dh		; row comes first
	mov	ah,0
	call	nout
	mov	al,';'
	stosb			; separated by a semi
	pop	dx
	mov	al,dl
	mov	ah,0
	call	nout
	mov	al,'H'
	stosb			; end w/H
	mov	byte ptr [di],'$' ; and dollar sign
	mov	dx,offset gopos
	call	tmsg
	pop	es
	ret
POSCUR	ENDP

; Delete a character from the terminal.  This works by printing
; backspaces and spaces.  Returns normally.

DODEL	PROC	NEAR
	mov dx,offset delstr	; Erase weird character.
	jmp tmsg
DODEL	ENDP

; Move the cursor to the left margin, then clear to end of line.
; Returns normally.

CTLU	PROC	NEAR
	mov dx,offset clrlin	; this just goes to left margin...
	call tmsg
	jmp clearl		; now clear line
CTLU	ENDP

; set the current port.

COMS	PROC	NEAR
	mov	dx,offset nyimsg
	jmp	tmsg
COMS	ENDP

; Set heath emulation on/off.

VTS	PROC	NEAR
	mov	dx,offset nyimsg
	jmp	tmsg
VTS	ENDP

; initialization for using serial port.  This routine performs
; any initialization necessary for using the serial port, including
; setting up interrupt routines, setting buffer pointers, etc.
; Doing this twice in a row should be harmless (this version checks
; a flag and returns if initialization has already been done).
; SERRST below should restore any interrupt vectors that this changes.
; Returns normally.

SERINI	PROC	NEAR
	push es
	cmp portin,0		; Did we initialize port already? [21c]
	jne serin0		; Yes, so just leave. [21c]
	cli			; Disable interrupts
	cld			; Do increments in string operations
	xor ax,ax		; Address low memory
	mov es,ax
	mov ax,es:[4*serchn]	; get old serial handler
	mov oldser,ax		; save.
	mov ax,es:[4*serchn+2]	; get segment
	mov oldseg,ax		; save segment as well
	mov ax,es:[4*serch1]	; this is alternate for older rainbows
	mov old1ser,ax
	mov ax,es:[4*serch1+2]
	mov old1seg,ax		; pretty silly, huh?
	mov ax,offset serint	; point to our routine
	mov word ptr es:[4*serchn],ax ; point at our serial routine
	mov word ptr es:[4*serch1],ax ; have to set both of these
	mov es:[4*serchn+2],cs	; our segment
	mov es:[4*serch1+2],cs
	mov al,030h		;[DTR] enable RTS and DTR
	out mnctrl,al		;[DTR]
	mov portin,1		; Remember port has been initialized.
	call clrbuf		; Clear input buffer. 
	sti			; Allow interrupts
serin0:	pop es
	ret			; We're done.
SERINI	ENDP

; this is used to by serini
prtset	proc	near
	lodsb			; get a byte
	or	al,al
	jz	prtse1		; end of table, stop here
	out	dx,al		; else send it out
	jmp	prtset		; and keep looping
prtse1:	ret			; end of routine
prtset	endp

; Reset the serial port.  This is the opposite of serini.  Calling
; this twice without intervening calls to serini should be harmless.
; Returns normally.

SERRST	PROC	NEAR
	push es			; preserve this
	cmp portin,0		; Reset already? 
	je srst1		; Yes, just leave. 
	cli			; Disable interrupts
	xor ax,ax
	mov es,ax		; address segment 0
	mov ax,oldser
	mov es:[4*serchn],ax
	mov ax,oldseg
	mov es:[4*serchn+2],ax
	mov ax,old1ser
	mov es:[4*serch1],ax
	mov ax,old1seg
	mov es:[4*serch1+2],ax	; restore old handlers
	mov portin,0		; Reset flag.
srst1:	pop es
	ret			; All done.
SERRST	ENDP

; serial port interrupt routine.  This is not accessible outside this
; module, handles serial port receiver interrupts.

serint	PROC  NEAR
	push bx
	push dx
	push ax
	push es
	push di
	push ds
	push bp
	push cx
	cld
	mov ax,seg datas
	mov ds,ax		; address data segment
	mov es,ax
	mov di,srcpnt		; Registers for storing data.
	mov dx,mnstatb		; Asynch status port.
	mov al,0		; innocuous value
	out dx,al		; send out to get into a known state...
	mov al,2		; now address register 2
	out dx,al
	in al,dx		; read interrupt cause
	cmp al,7		; in range?
	ja serin7		; no, just dismiss (what about reset error?)
	mov bl,al
	shl bl,1		; double for word index
	mov bh,0
	call ivec[bx]		; call appropriate handler
serin7:	mov dx,mnstata		; reload port address
	mov al,38H
	out dx,al		; tell the port we finished with the interrupt
	pop cx
	pop bp
	pop ds
	pop di
	pop es
	pop ax
	pop dx
	pop bx
intret:	iret

; handler for serial receive, port A
srcva:	mov dx,mnstata
	mov al,0
	out dx,al		; put into known state...
	in al,dx
	test al,rxrdy		; Data available?
	jnz srcva1		; yes, go read it
	jmp srcva7
srcva1:	mov al,30H		; reset any errors
	out dx,al
	mov dx,mndata
	in al,dx		; read the character
	cmp telflg,0		; File transfer or terminal mode?
	jz srcva2
	and al,7FH		; Terminal mode (7 bits only). 
srcva2: or al,al
	jz srcva7		; Ignore nulls.
	cmp al,7FH		; Ignore rubouts, too.
	jz srcva7
	mov ah,al
	and ah,7fH		; only consider low-order 7 bits for flow ctl.
	mov bp,portval
	cmp ds:[bp].floflg,0	; Doing flow control?
	je srcva4		; Nope.
	mov bx,ds:[bp].flowc	; Flow control char (BH = XON, BL = XOFF).
	cmp ah,bl		; Is it an XOFF?
	jne srcva3		; Nope, go on.
	mov xofrcv,true		; Set the flag.
	jmp short srcva7
srcva3:	cmp ah,bh		; Get an XON?
	jne srcva4		; No, go on.
	mov xofrcv,false	; Clear our flag.
	jmp srcva7
srcva4:	stosb
	cmp di,offset source + bufsiz
	jb srcva5		; not past end...
	mov di,offset source	; wrap buffer around
srcva5:	mov srcpnt,di		; update ptr
	inc count
	cmp ds:[bp].floflg,0	; Doing flow control?
	je srcva7		; No, just leave.
	cmp xofsnt,true		; Have we sent an XOFF?
	je srcva7		; Yes.
	cmp count,mntrgh	; Past the high trigger point?
	jbe srcva7		; No, we're within our limit.
	mov ah,bl		; Get the XOFF.
	call outchr		; Send it.
	nop
	nop
	nop			; ignore failure.
	mov xofsnt,true		; Remember we sent it.
srcva7:	ret

; The interrupt is for the 'B' port - transfer control to
; the original handler and hope for the best.
tranb:	pushf			; put flags on stack to simulate interrupt
	call	dword ptr [old1ser] ; call old handler
	ret			; and return

stxa:	mov	dx,mnstata
	mov	al,28H		; reset transmit interrupt
	out	dx,al
	ret

sstata:	mov	dx,mnstata
	mov	al,10H		; reset status interrupt
	out	dx,al
	ret

SERINT	ENDP

; Produce a short beep.  The PC DOS bell is long enough to cause a loss
; of data at the port.  Returns normally.

BEEP	PROC	NEAR
	mov dl,bell
	mov ah,conout
	int dos
	ret
BEEP	ENDP 
 
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


term	proc	near
	mov si,ax		; this is source
	mov di,offset ourarg	; place to store arguments
	mov ax,ds
	mov es,ax		; address destination segment
	mov cx,size termarg
	cld
	rep movsb		; copy into our arg blk
	cmp inited,0		; inited yet?
	jz term1		; no, keep going
	test ourarg.flgs,scrsam	; do they want us to leave it alone?
	jnz term1		; yes, skip redisplay.
	call rstscr		; restore screen
term1:	mov inited,1		; remember inited
term2:	call prtchr
	jmp short term3		; have a char...
	nop
	nop
	jmp short term6		; no char, go on
term3:	and al,7fh		; turn off parity for terminal
	mov bx,offset ansbk1	; check 1st answerback
	call ansbak		; check for answerback
	mov bx,offset ansbk2	; maybe second answerback
	call ansbak		; should probably loop thru a table here...
	mov bx,offset ansbk3
	call ansbak
	mov bx,offset ansbk4
	call ansbak
	mov bx,offset ansbk5
	call ansbak
	push ax
	call scrprep		; need to save top line
	pop ax
	push ax
	int fastcon		; go print it
	pop ax
	test ourarg.flgs,capt	; capturing output?
	jz term5		; no, forget it
	push ax
	call ourarg.captr	; else call the routine
	pop ax
term5:	test ourflgs,fpscr	; print screen toggled on?
	jz term6		; no, keep going
	mov dl,al
	mov ah,lstout		; printer output
	int dos
term6:	mov di,6		; get level 1 character
	push es
	int firmwr
	pop es			; don't let firmware steal registers.
	cmp cl,0ffh		; character available?
	je term7		; no, do something else
	cmp cl,1		; maybe level 2 sequence around
	jne term2		; no, forget it
	mov di,2		; get level 2 character
	push es
	int firmwr
	pop es
	cmp cl,0ffh		; did we really get one?
	jne term2		; no, something strange happening.
	jmp term6		; else skip and keep trying.
term7:	test ax,fnkey		; function-type key?
	jnz term8		; yes, can't be escape character
	cmp al,ourarg.escc	; escape char?
	je term9		; yes, exit
term8:	call trnout		; perform necessary translations, output char
	jmp term2		; and loop around
term9:	call savscr		; save screen
	ret			; and return
term	endp

; enter with current terminal character in al, answerback ptr in bx.
; calls answerback routine if necessary.
; This can be used to make the emulator recognize any sequence.
ansbak	proc	near
	push	ax		; preserve this
	mov	si,[bx].anspt	; get current pointer
	cmp	al,[si]		; is it correct?
	jne	ansba1		; no, reset pointers and go on
	inc	[bx].anspt	; increment pointer
	dec	[bx].ansct	; decrement counter
	jnz	ansba2		; not done, go on
	push	bx
	call	[bx].ansrtn	; send answerback
	pop	bx
ansba1:	mov	ax,[bx].ansseq	; get original sequence
	mov	[bx].anspt,ax
	mov	al,[bx].anslen	; and length
	mov	[bx].ansct,al
ansba2:	pop	ax
	ret
ansbak	endp

; send the answerback message.
sndans	proc	near
	mov	si,offset ansret ; this is what we say
	mov	cx,ansrln	; length of same
sndan1:	lodsb			; get a byte
	mov	ah,al
	push	si
	push	cx
	call	outchr
	nop
	nop
	nop
	pop	cx
	pop	si
	loop	sndan1
	ret
sndans	endp

; enable alternate keypad mode
enaaky	proc	near
	mov	akeyflg,1	; remember alternate mode
	mov	keyptr,offset altktrn ; set correct translate table
	ret
enaaky	endp

; disable alternate keypad mode
deaaky	proc	near
	mov	akeyflg,0
	mov	keyptr,offset keytrn
	ret
deaaky	endp

; send a space so the firmware doesn't see bad escape sequences
sndspc	proc	near
	mov	al,' '
	int	fastcon
	ret
sndspc	endp

; enter with char and flags in ax.  Does any necessary character translations,
; then outputs character
trnout	proc	near
	and ax,not cplk		; forget about caps lock key
	test ourarg.flgs,havtt	; any translate table?
	jz trnou2		; no, just output normally
	mov cx,ourarg.klen
	mov di,ourarg.ktab	; get redefined keys
	repne scasw		; look for this one
	jne trnou2		; not found, try something else
	sub di,ourarg.ktab
	sub di,2		; get index
	add di,ourarg.krpl	; get translation address
	mov si,[di]		; this is translation
	mov cl,[si]
	inc si			; pick up length, increment past it
	mov ch,0
	jcxz trnou6		; no translation, just return
trnou1:	lodsb			; get a char
	push si
	push cx
	call sndhst		; send the character
	pop cx
	pop si
	loop trnou1		; loop thru rest of translation
	ret			; and return
trnou2:	test ax,fnkey		; function key?
	jz trnou5		; no, keep going
	and ax,not fnkey	; turn off function bit.
	mov di,offset spckey	; our special keys
	mov cx,spclen		; length of special key table
	repne scasw		; look for it in our table
	jne trnou3		; not found, maybe arrow key...
	sub di,offset spckey+2	; get index
	call spchnd[di]		; call appropriate handler
	ret			; and return
trnou3:	mov di,offset arrkey	; look for an arrow-type key...
	mov cx,arrlen		; length of arrow key table
	repne scasb		; is it an arrow key?
	jne trnou4		; no, forget it
	sub di,offset arrkey+1	; get index into table
	shl di,1		; double for word index
	mov si,arrtrn[di]	; get translation
	mov cl,[si]
	inc si
	mov ch,0
	jmp trnou1		; go send translation
trnou4:	mov di,offset keypad	; look for a keypad key.
	mov cx,keypln
	repne scasb		; is it in keypad?
	jne trnou6		; no, forget it
	sub di,offset keypad+1
	add di,keyptr		; index into correct translation table
	mov al,[di]		; get translation
	cmp akeyflg,0		; in alternate keypad mode?
	je trnou5		; no, just send the char
	push ax			; else save the character
	mov al,esc
	call sndhst
	mov al,'O'
	call sndhst		; send prefix
	pop ax			; get the character back and fall thru...
trnou5:	call sndhst		; send the character
trnou6:	ret
trnout	endp

; handle the print screen key
prtscr	proc	near
	push	ds		; save data segment
	mov	ax,scrseg
	mov	ds,ax		; address screen segment
	mov	cx,slen		; # of lines on screen
	mov	bx,0		; current line #
prtsc1:	push	cx		; save counter
	push	bx		; and line ptr
	mov	si,ds:[latofs+bx] ; get ptr to line
	mov	cx,swidth	; max # of chars/line
	mov	di,offset prbuf	; print buffer
prtsc2:	lodsb			; get a byte
	or	al,al		; is it a null?
	jne	prtsc3		; no, go on
	mov	al,' '		; yes, replace by space
prtsc3:	stosb			; drop it off
	cmp	al,' '		; is it a space?
	je	prtsc4		; yes, go on
	mov	dx,cx		; else remember count at last non-space
prtsc4:	cmp	al,0ffH		; end of line?
	loopne	prtsc2		; continue if not end
	mov	cx,dx		; count at last non-space, plus 1
	neg	cx
	add	cx,swidth+1	; figure out # of chars to print
	mov	dx,offset prbuf
	push	ds		; save this temporarily
	mov	ax,es
	mov	ds,ax		; address data segment to print
	jcxz	prtsc5		; 0 length, keep going
	mov	bx,4		; standard printer device
	mov	ah,writef2	; write call
	int	dos		; write to the printer
prtsc5:	mov	ah,writef2
	mov	bx,4
	mov	dx,offset crlf
	mov	cx,2
	int	dos		; follow line with a crlf
	pop	ds
	pop	bx
	pop	cx		; restore counters
	add	bx,2		; point to next line
	loop	prtsc1		; and keep going
	pop	ds		; restore registers
	ret			; and return
prtscr	endp

; toggle print flag...
togprt	proc	near
	xor	ourflgs,fpscr	; toggle flag
	ret			; and return
togprt	endp

; Send a character to the host, handle local echo
sndhst	proc	near
	push ax			; save the character
	mov ah,al
	call outchr
	nop
	nop
	nop
	pop ax
	test ourarg.flgs,lclecho ; echoing?
	jz sndhs2		; no, exit
	push ax
	call scrprep
	pop ax
	int fastcon
sndhs2:	ret			; and return
sndhst	endp


; print a message to the screen.  Returns normally.
; also puts the terminal into vt100 mode so our escape sequences work...
tmsg	proc	near
	push	es
	push	bx
	mov	bx,nvmseg
	mov	es,bx		; address firmware
	mov	bl,0f1h		; turn on vt100 mode
	xchg	bl,es:[vt52mod]	; remember old mode
	mov	ah,prstr
	int	dos
	mov	es:[vt52mod],bl	; restore mode
	pop	bx
	pop	es
	ret
tmsg	endp

; save the screen for later
savscr	proc	near
	push	ds
	call	kilcur		; turn off cursor
	mov	ax,scrseg
	mov	ds,ax
	mov	cx,slen		; # of lines to do
	mov	bx,0		; current line #
	mov	di,offset ourscr ; place to save screen
	mov	dx,offset ourattr ; and to save attributes
savsc1:	push	cx		; save current count
	mov	si,ds:[latofs+bx] ; get line ptr
	mov	cx,swidth	; # of chars/line
	rep	movsb		; copy it out
	mov	si,ds:[latofs+bx]
	add	si,attoffs	; this is where attributes start
	xchg	dx,di		; this holds attribute ptr
	mov	cx,swidth	; # of attrs to move
	rep	movsb
	xchg	dx,di
	pop	cx		; restore counter
	add	bx,2		; increment line ptr
	loop	savsc1		; save all lines and attributes
	pop	ds
	call	rstcur		; put cursor back
	call	savpos		; might as well save cursor pos
	ret
savscr	endp

; restore the screen saved by savscr
rstscr	proc	near
	call	cmblnk		; start by clearing screen
	mov	si,offset ourscr ; point to saved screen
	mov	dx,offset ourattr ; and attributes
	mov	cx,slen		; # of lines/screen
	mov	bx,101H		; start at top left corner
rstsc1:	push	bx
	push	cx
	push	si		; save ptrs
	push	dx
	mov	ax,si		; this is source
	call	prlina		; print the line
	pop	dx
	pop	si
	pop	cx
	pop	bx
	add	si,swidth	; point to next line
	add	dx,swidth	; and next attributes
	inc	bx		; address next line
	loop	rstsc1		; keep restore lines
	call	rstpos		; don't forget position
	ret
rstscr	endp

; circular buffer management for screen.
; for these to work correctly, the buffer size MUST be a multiple
; of the screen width.

; put a line into the circular buffer.  Pass the buffer structure
; in bx, the pointer to the line in ax.
putcirc	proc	near
	push	si
	push	di
	push	cx
	push	dx
	mov	di,[bx].pp		; pick up buffer ptr
	add	di,swidth*2		; increment to next avail slot
	cmp	di,[bx].bend		; past end?
	jb	putci1			; no, leave alone
	mov	di,[bx].orig		; else start at beginning
putci1:	mov	[bx].pp,di		; update ptr
	mov	si,ax			; this is source
	mov	cx,swidth*2
	rep	movsb			; copy into buffer
	cmp	[bx].lcnt,npgs*slen	; can we increment it?
	jae	putci2			; no, keep going
	inc	[bx].lcnt		; else count this line
putci2:	pop	dx
	pop	cx
	pop	di
	pop	si			; restore registers
	ret
putcirc	endp

; get a line from the circular buffer, removing it from the buffer.
; returns with carry on if the buffer is empty.
; pass the buffer structure in bx, the buffer to copy the line into
; in ax.
getcirc	proc	near
	push	si
	push	di
	push	cx
	push	dx
	cmp	[bx].lcnt,0		; any lines in buffer?
	jne	getci1			; yes, ok to take one out.
	stc				; else set carry
	jmp	short getcir3		; and return
getci1:	mov	si,[bx].pp		; this is source
	mov	di,ax			; this is dest
	mov	cx,swidth*2		; # of chars to copy
	rep	movsb
	mov	si,[bx].pp		; get ptr again
	sub	si,swidth*2		; move back
	cmp	si,[bx].orig		; compare to origin
	jae	getcir2			; still in range, continue
	mov	si,[bx].bend		; else use end of buffer
	sub	si,swidth*2-1		; minus length of a piece
getcir2:mov	[bx].pp,si		; update ptr
	dec	[bx].lcnt		; decrement # of lines in buffer
	clc				; make sure no carry
getcir3:pop	dx
	pop	cx
	pop	di
	pop	si
	ret
getcirc	endp

; prepares for scrolling by saving the top line in topbuf.
scrprep	proc	near
	push	ds		; preserve data segment
	push	es
	mov	bp,scrseg
	mov	ds,bp		; address screen segment
	cmp	al,cr		; carriage return?
	je	scrpr3		; yes, will never change line
	cmp	al,lf		; outputting a linefeed?
	je	scrpr2		; yes, will change line
	test	byte ptr [ds:curlin],wrpend ; wrap pending?
	jz	scrpr3		; no, forget it
	mov	ax,nvmseg
	mov	es,ax
	test	byte ptr [es:autwrp],1 ; auto-wrap mode?
	jz	scrpr3		; no, forget this
; about to change lines, see if bottom line
scrpr2:	cmp	byte ptr [ds:csrlin],slen ; are we at the bottom?
	je	scrpr4		; yes, have to save line
scrpr3:	pop	es
	pop	ds		; get here if not saving line
	ret
scrpr4:	pop	es
	pop	ds		; restore registers
; alternate entry that doesn't check if we're on the bottom row.
savtop:	call	kilcur		; kill cursor
	push	es
	push	ds
	mov	ax,ds
	mov	es,ax
	mov	ax,scrseg
	mov	ds,ax		; address screen segment
	mov	si,ds:word ptr [l1ptr] ; get ptr to top line
	mov	di,offset tlbuf	; this is where it goes
	mov	cx,swidth	; # of bytes to copy
	rep	movsb		; get the top line
	mov	si,ds:word ptr [l1ptr]
	add	si,attoffs	; add offset of attributes
	mov	cx,swidth
	rep	movsb		; get top line's attributes
	pop	ds
	pop	es		; restore segments
	mov	bx,offset topbuf ; top buffer ptr
	mov	ax,offset tlbuf	; this is where line is now
	call	putcirc		; put into circular buffer
	call	rstcur
	ret			; and return
scrprep	endp

; get the screen's bottom line into the buffer in ax.
getbot	proc	near
	call	kilcur		; kill cursor
	push	es
	push	ds
	push	ax
	mov	ax,ds
	mov	es,ax
	mov	ax,scrseg
	mov	ds,ax
	mov	si,ds:word ptr [llptr] ; get ptr to bottom line
	pop	di		; destination is on stack
	mov	cx,swidth	; # of bytes to copy
	rep	movsb		; get the top line
	mov	si,ds:word ptr [llptr] ; get ptr again
	add	si,attoffs
	mov	cx,swidth
	rep	movsb		; copy attributes as well.
	pop	ds		; restore segments
	pop	es
	call	rstcur		; restore cursor
	ret
getbot	endp

; handle the previous screen button...

prvscr	proc	near
	mov	ax,offset tlbuf
	mov	bx,offset topbuf
	call	getcirc
	jc	prvsc3		; no lines, forget it
	call	savpos		; save cursor position
	mov	ax,offset botbuf ; place to put screen
	mov	bx,slen		; else just use last line on screen
	mov	dx,-1		; move backwards
	call	rolscr		; save current screen
	call	cmblnk		; clear screen
	mov	cx,slen		; # of lines per screenfull
prvsc1:	mov	bl,cl		; this is current line
	mov	bh,1		; this is column
	mov	ax,offset tlbuf ; where to get the line from
	mov	dx,offset tlbuf+swidth	; this is where attributes should be
	push	cx		; save count
	call	prlina		; put the line on the screen
	pop	cx		; restore count
	cmp	cx,1
	jle	prvsc2		; no more to do, don't take more from buffer!
	push	cx
	mov	ax,offset tlbuf
	mov	bx,offset topbuf
	call	getcirc		; get another line
	pop	cx
	jc	prvsc2		; no more, exit loop
	loop	prvsc1		; loop for all lines
prvsc2:	call	rstpos		; restore screen position
prvsc3:	ret			; and return
prvscr	endp

; handle the next screen button...

nxtscr	proc	near
	mov	ax,offset tlbuf
	mov	bx,offset botbuf
	call	getcirc		; get a line from the bottom
	jc	nxtsc3		; no lines, forget it
	call	savpos		; save cursor pos
	mov	ax,offset topbuf ; place to put screen
	mov	bx,1		; start with first line
	mov	dx,1		; move backwards
	call	rolscr		; save current screen
	call	cmblnk		; clear screen
	mov	cx,slen		; # of lines per screenfull
nxtsc1:	mov	bl,slen+1
	sub	bl,cl		; this is current line
	mov	bh,1		; this is column
	mov	ax,offset tlbuf ; where to get the line from
	mov	dx,offset tlbuf+swidth	; this is where attributes are
	push	cx		; save count
	call	prlina		; put the line on the screen
	pop	cx
	cmp	cx,1
	jle	nxtsc2		; no more to do, don't remove from buffer...
	push	cx
	mov	ax,offset tlbuf	; where to put the next line
	mov	bx,offset botbuf
	call	getcirc		; try to get another
	pop	cx
	jc	nxtsc2		; no more, break loop
	loop	nxtsc1		; loop for all lines
nxtsc2:	call	rstpos		; restore cursor position
nxtsc3:	ret			; and return
nxtscr	endp

; save a screen by rolling them into a circular buffer.
; enter with ax/ circular buffer ptr, bx/ first line to get
; dx/ increment

rolscr	proc	near
	shl	dx,1		; double increment for word ptr
	dec	bx		; ptr starts at 0
	shl	bx,1		; convert to word ptr
	mov	cx,slen		; # of lines to save
rolsc1:	push	cx
	push	dx
	push	bx
	push	ax
	push	ds
	call	kilcur		; kill cursor
	mov	ax,scrseg
	mov	ds,ax		; address screen
	mov	si,ds:[latofs+bx] ; get current line
	mov	di,offset rlbuf ; place to put it
	mov	cx,swidth	; # of bytes to move
	rep	movsb		; get the lne
	mov	si,ds:[latofs+bx] ; get current line ptr again
	add	si,attoffs	; where attributes start
	mov	cx,swidth	; # of bytes to move
	rep	movsb		; move attributes as well
	pop	ds		; restore segment
	pop	bx		; this is desired circ buffer ptr
	call	rstcur
	mov	ax,offset rlbuf ; this is where the line is
	call	putcirc		; save in circular buffer
	mov	ax,bx		; put buffer ptr back where it belongs
	pop	bx		; get line pos back
	pop	dx		; and increment
	pop	cx		; don't forget counter
	add	bx,dx		; move to next line
	loop	rolsc1		; loop thru all lines
	ret			; and return
rolscr	endp

; move screen down a line, get one previous line back

prvlin	proc	near		; get the previous line back
	mov	ax,offset tlbuf	; place to put line temporarily
	mov	bx,offset topbuf ; where to get lines from
	call	getcirc		; try to get a line
	jc	prvli1		; no more, just return
	mov	ax,offset blbuf	; place for bottom line
	call	getbot		; fetch bottom line
	mov	ax,offset blbuf
	mov	bx,offset botbuf
	call	putcirc		; save in circular buffer
	call	savpos		; save cursor position
	mov	dx,offset topdwn ; home, then reverse index
	call	tmsg
	mov	ax,offset tlbuf	; point to data
	mov	bx,0101H	; print line at top of screen
	mov	dx,offset tlbuf+swidth
	call	prlina		; print the line
	call	rstpos		; restore cursor position
prvli1:	ret			; and return
prvlin	endp

; move screen up a line, get one bottom line back
nxtlin	proc	near
	mov	ax,offset blbuf	; place to put line temporarily
	mov	bx,offset botbuf ; where to get lines from
	call	getcirc		; try to get a line
	jc	nxtli1		; no more, just return
	call	savtop		; save one line off of top
	call	savpos		; save cursor position
	mov	dx,offset botup ; go to bottom, then scroll up a line
	call	tmsg
	mov	ax,offset blbuf	; point to data
	mov	bx,0100H + slen	; print at bottom line
	mov	dx,offset blbuf+swidth
	call	prlin		; print the line
	call	rstpos		; restore cursor position
nxtli1:	ret			; and return
nxtlin	endp

; save cursor position
savpos	proc	near
	mov	dx,offset curinq ; where is the cursor?
	call	tmsg
	mov	posbuf,esc	; put an escape in the buffer first
	mov	di,offset posbuf+1
savpo1:	mov	ah,8		; read, no echo
	int	dos
	cmp	al,'R'		; end of report?
	je	savpo2		; yes
	stosb			; no, save it
	jmp	savpo1		; and go on
savpo2:	mov	al,'H'		; this ends the sequence when we send it
	stosb
	mov	byte ptr [di],'$' ; need this to print it later
	ret			; and return
savpos	endp

; restore the position saved by savpos
rstpos	proc	near
	mov	dx,offset posbuf
	call	tmsg		; just print this
	ret			; and return
rstpos	endp

; kill cursor so it doesn't get saved along with real data
kilcur	proc	near
	push	es
	push	di
	mov	di,kcurfn
	int	firmwr
	pop	di
	pop	es
	ret
kilcur	endp

; restore the cursor
rstcur	proc	near
	push	es
	push	di
	mov	di,rcurfn
	int	firmwr
	pop	di
	pop	es
	ret
rstcur	endp

; print a ff-terminated line at most swidth long...  Pass the line in ax.
; cursor position should be in bx.
; prlina writes attributes as well, which should be passed in dx.
prlin	proc	near
	mov	bp,2		; print characters only
	jmp	short prli1
prlina:	xor	bp,bp		; 0 means print attributes as well.
prli1:	push	es		; this trashes es!!!
	push	es
	mov	cx,scrseg
	mov	es,cx		; address screen seg for a moment
	mov	cl,es:byte ptr [rmargin] ; get max line length
	mov	ch,0
	pop	es		; address user's segment again
	push	cx		; remember original length
;	mov	cx,swidth
	mov	si,ax		; better place for ptr
	mov	di,ax		; need it here for scan
	mov	al,0ffh		; this marks the end of the line
	repne	scasb		; look for the end
	jne	prli2		; not found
	inc	cx		; account for pre-decrement
prli2:	neg	cx
	pop	ax		; get original length back
	add	cx,ax
;	add	cx,swidth	; figure out length of line
	jcxz	prli3		; 0-length line, skip it.
	mov	ax,bp		; writing characters
	mov	bp,ds		; wants segment here
	mov	di,14H		; fast write to screen
	int	firmwr		; pos is in bx, char ptr in si
prli3:	pop	es		; restore register
	ret			; and return
prlin	endp


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
```
{% endraw %}

## MSXSYS.DOC

{% raw %}
```

               SPECIFICATION FOR KERMIT SYSTEM-DEPENDENT MODULES

                      by Jeff Damens, Columbia University

All the system-independent global data structures used in Kermit-MS are defined
in the file MSDEFS.H.

The routine MSXxxx.ASM contains system-dependent support for system xxx, except
for terminal emulation, which is in MSXxxx.ASM, described below.

The  routines  in the MSX module may change any registers but the stack pointer
and segment registers, unless otherwise noted.  A routine that  returns  via  a
RET  instruction is said to return normally; a routine that skip returns is one
that returns to three bytes past the normal return address.

Global variables that must be defined in the system-dependent module:

XOFSNT          byte.  This should be set to a non-zero value if we  are  doing
                flow  control  and  have  sent  an XOFF character to the remote
                host, zero otherwise.

MACHNAM         byte.  A  $-terminated  string  identifying  the  machine  this
                version of Kermit is for; it is printed when Kermit starts up.

SETKTAB         byte.  A keyword table associating terminal key names to 16-bit
                scan  code  values, used in the set key command.  If the kermit
                version can accept arbitrary decimal values as scan codes,  the
                word "SCAN" should appear in the table with a scan value of -1.
                If  key  redefinition is not implemented, the first byte of the
                table should be a zero.

SETKHLP         byte.  A $-terminated string to be printed when ? is  typed  in
                the  SET KEY command.  This is usually simply a list of the key
                names in  SETKTAB.    SETKHLP  must  be  defined  even  if  key
                redefinition  is not implemented, to satisfy the linker; if key
                redefinition  is  not  implemented,  SETKHLP  will   never   be
                displayed.

COUNT           word.   The number of characters in the serial input buffer, if
                known.  This is how Kermit knows to send an XON if  the  serial
                handler  has  sent an XOFF.  If the number of characters in the
                buffer isn't known, COUNT should be 0.

These are the required entry points for the system dependent  dependent  module
MSXxxx.ASM.

SERINI

Parameters      None.

Returns         Normally, no return value.

Description     Perform  any initialization that must be done before the serial
                port can  be  used,  including  setting  baud  rate,  interrupt
                vectors,  etc.  Parity and baud rate should be set according to
                the values in the PORTINFO structure.   The  external  variable
                PORTVAL  points to the PORTINFO structure for the current port.
                Calling SERINI more than once without an  intervening  call  to
                SERRST should have no effect.


SERRST

Parameters      None.

Returns         Normally, no return value.

Description     Undoes  any  initialization done by SERINI, including resetting
                the serial port, restoring any  interrupt  vectors  changed  by
                SERINI,   etc.     Calling  this  more  than  once  without  an
                intervening call to SERINI should be harmless.


CLRBUF

Parameters      None.

Returns         Normally, no return value.

Description     Remove and discard from the  serial  port's  input  buffer  any
                characters  sent by the remote host that have not yet been read
                by Kermit, and set COUNT to 0.  This  is  used  before  a  file
                transfer  to flush NAK's that accumulate in the buffer when the
                remote host is in server mode.


OUTCHR

Parameters      A character in AH.

Returns         Skip returns if the character  has  been  transmitted;  returns
                normally  if  the character can not be transmitted because of a
                hardware error.

Description     Sends the character in AH out  the  currently  selected  serial
                port.    OUTCHR  can  assume  that SERINI will have been called
                previously. OUTCHR should call the external  routine  DOPAR  to
                set  the parity of the character if the communications hardware
                doesn't automatically set  parity.    Flow  control  should  be
                honored;  the external variable PORTVAL contains a pointer to a
                PORTINFO structure (as  defined  in  MSDEFS.H)  containing  the
                current flow control definitions.


COMS

Parameters      None.

Returns         Normally   if  a  parse  error  is  encountered,  skip  returns
                otherwise.

Description     Called by the SET PORT command.  On  a  machine  with  multiple
                serial  ports,  COMS  should  parse for the name or number of a
                serial port and make that the port used by succeeding calls  to
                SERINI, PRTCHR, OUTCHR, and SERRST.  It should set the external
                variable   PORTVAL  to  point  to  one  of  the  external  port
                structures  PORT1  or  PORT2,  and  set  COMFLG  in  the  FLAGS
                structure to 1 for port one, 0 for port 2.  For implementations
                that  use  only one serial port, COMS should print a message to
                that effect and skip return.


VTS

Parameters      None.

Returns         Normally  if  a  parse  error  is  encountered,  skip   returns
                otherwise.

Description     Parses  for  an  ON  or  OFF,  sets HEATH-19 emulation while in
                terminal emulation appropriately.  The VTFLG field of the FLAGS
                structure should be set non-zero if HEATH-29 emulation  is  on,
                zero  otherwise.  If HEATH-19 emulation is not done, VTS should
                print a message and skip return.


DODEL

Parameters      None.

Returns         Normally, no return value.

Description     Erases the character immediately to the left of the cursor from
                the screen, then backs up the cursor.


CTLU

Parameters      None.

Returns         Normally, no return value.

Description     Move the cursor to the left margin, then clear the line.


CMBLNK

Parameters      None.

Returns         Normally, no return value.

Description     Clears the screen and homes the cursor.


LOCATE

Parameters      None.

Returns         Normally, no return value.

Description     Homes the cursor.


LCLINI

Parameters      None.

Returns         Normally, no return value.

Description     Performs any system-dependent initialization required  by  this
                implementation.


PRTCHR

Parameters      None.

Returns         Normally,  with  the next character from the currently selected
                serial port in AL.  Skip returns if no character is available.

Description     Reads the next character from the current serial port.   PRTCHR
                can assume SERINI has been called previously, and should handle
                flow control correctly.


DOBAUD

Parameters      None.

Returns         Normally, no return value.

Description     Sets  the baud rate for the current port.  The baud rate should
                be obtained from the BAUD  field  of  the  PORTINFO  structure,
                pointed to by the external variable PORTVAL.


CLEARL

Parameters      None.

Returns         Normally, no return value.

Description     Clears from the cursor to the end of the current line.


DODISK

Parameters      None.

Returns         Normally, no return value.

Description     Sets  the external variable DRIVES to the number of disk drives
                attached to the machine.


GETBAUD

Parameters      None.

Returns         Normally, no return value.

Description     Store current baud rate of the currently selected port  in  the
                BAUD  field of the current PORTINFO structure, which is pointed
                to by PORTVAL.  If the baud rate is to default to a  particular
                value,  this  routine  can store that value into the BAUD field
                instead.


BEEP

Parameters      None.

Returns         Normally, no return value.

Description     Rings the terminal bell.


PUTHLP

Parameters      A pointer to a string in AX.

Returns         Normally, no return value.

Description     Writes the null-terminated string given in AX to the  terminal.
                This  is used to display help and status messages.  The IBM and
                Rainbow versions write the string in a reverse video box.


PUTMOD

Parameters      A pointer to a string in AX.

Returns         Normally, no return value.

Description     Writes the null-terminated string given in AX to the last  line
                of the screen, in inverse video if possible.


CLRMOD

Parameters      None.

Returns         Normally, no return value.

Description     Clears the line written by PUTMOD.


POSCUR

Parameters      Row in DH, column in DL.

Returns         Normally, no return value.

Description     Positions  the  cursor to the row and column given in DX.  Rows
                and columns both originate at 0 (not 1!).


SENDBR

Parameters      None.

Returns         Normally, no return value.

Description     Send a break to the current serial port.


SHOWKEY

Parameters      Pointer to a terminal argument block in AX (see TERM below).

Returns         Normally, with a string pointer in AX and  the  length  of  the
                string in CX.

Description     Called  by the SHOW KEY command.  Reads a key from the terminal
                and  returns  a  string   containing   implementation-dependent
                information  about  the  key.  In  the  usual  case, the string
                contains the key's (machine-dependent) scan code, and the key's
                definition (if any) from the  terminal  argument  block.    The
                length  of  the  returned string should be returned in CX.  The
                string may contain any characters; unprintable characters  will
                be  quoted  when  the string is printed.  If the implementation
                does not support key redefinition, SHOWKEY may return a  static
                string saying so.


TERM

Parameters      Pointer to terminal argument block in AX.

Returns         Normally, no return value.

Description     Do  terminal  emulation,  based  on  argument  block  described
                below...



The terminal emulator is  supplied  in  the  file  MSYxxx.ASM.    The  terminal
argument block passed to the terminal emulator has the following fields:

FLGS            Byte containing flags.  Flags are:

                SCRSAM (80H)    If   on,   the   terminal   emulator  shouldn't
                                re-display the screen when entered.

                CAPT (40H)      Capture output.  If on, the routine  passed  in
                                field  CAPTR is called with each character sent
                                to the screen.

                EMHEATH (20H)   Emulate a Heath-19 terminal if on.

                HAVTT (10H)     A key redefinition table is present.

                TRNCTL (08H)    Print control character X  as  ^X  (useful  for
                                debugging).

                MODOFF (04H)    Do not display emulator mode line if on.

                LCLECHO (01H)   Echo  keyboard  characters  on  the  screen  in
                                addition to sending them to the port.

PRT             Port to use for terminal emulation, used  only  in  mode  line.
                This is just a copy of COMFLG in FLAGS.

COLS            Number of columns on screen.

ROWS            Number of rows on screen.

CAPTR           Routine  to  call  to with each character sent to the screen if
                CAPT flag is on.  Characters are passed in AL.

BELLD           Bell divisor (used only on IBM).

KLEN            Number of keys in key redefinition table, if HAVTT flag is on.

KTAB            Address of key redefinition table.  The key redefinition  table
                is a table of KLEN 16-bit scan codes.  Each (machine dependent)
                scan code represents a key that is redefined.

KRPL            Address  of  key  replacement table.  The key replacement table
                parallels the key redefinition table given in KTAB.  Entries in
                the replacement table are  16-bit  pointers  to  redefinitions.
                Each  redefinition  has  a  one-byte  length,  followed  by the
                definition.

ESCC            Escape character (single byte).  When this character  is  typed
                to the emulator, it should return.

BAUDB           byte.    Bits  describing the baud rate so it can be printed on
                the mode line.  This is  a  copy  of  the  BAUD  field  in  the
                PORTINFO  structure.    Currently  used  only  on the IBM.  See
                MSDEFS.H for possible values.

PARITY          byte.  Current parity to print on the mode line.    This  is  a
                copy  of PARFLG in the PORTINFO structure.  Currently used only
                on the IBM.  See MSDEFS.H for possible values.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0433

     Volume in drive A has no label
     Directory of A:\

    FILES433 TXT      1371  11-05-85   3:08p
    MSBOOT   FOR      2152  12-08-84   1:36a
    MSGENER  EXE     36992  12-08-84   1:38p
    MSHP150  EXE     38784  12-08-84   1:40p
    MSMKBOO  C        8402  12-08-84   2:44a
    MSPCBOOT BAS      2733  12-08-84   2:45a
    MSPCTRAN BAS      2097  12-08-84  11:23a
    MSPCTRAN EXE     19274  12-08-84  12:42p
    MSRB100  EXE     73984  12-08-84   1:43p
    MSRBBOO  BAS      3760  12-08-84   2:53a
    MSRBBOO  HLP      1306  12-08-84   2:54a
    MSRBEMAC INI      1911   7-28-84   5:04a
    MSXGEN   ASM     13848  12-08-84   3:48a
    MSXHP150 ASM     10248   7-28-84   5:35a
    MSXRB    ASM     44620  12-08-84  11:07a
    MSXSYS   DOC     13731   7-28-84   5:50a
           16 file(s)     275213 bytes
                           37888 bytes free
