---
layout: page
title: "PC-SIG Diskette Library (Disk #216)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0216/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0216"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "C UTILITIES NO 2"

    This hard working, time-saving set of utilities and functions for the C
    programmer includes many screen-handling routines to draw boxes, clear
    lines, move the cursor, etc.  Some DOS interfaces let you access DOS
    time (to hundredths), convert date formats, interface with BIOS, and
    more.  If you'd like some help with your own programming projects, or
    only want to investigate how others have done the job, be sure to check
    out this one!
    File Descriptions:
    
    README   DOC  Notes about programs on this disk.
    READS    C    Reads string from stdin.
    WEEKDAY  C    Gives the day of week a given Gregorian date.
    SCRATT   C    Toggles screen attributes (ie BOLD, blink, reverse video).
    SCRINIT  C    Initializes screen and keyboard arrays.
    JTOJ     C    Returns Julian day from date in form (yddd).
    DOSDATE  ASM  Returns DOS month, day, year as integers.
    JTOG     C    Function to convert Julian date to Gregorian date.
    ELINE    C    Function to erase line of screen.
    CHOSIT   C    Displays menu, prompt for a response and validate.
    SCONTROL H    Header file used by screen and keyboard control library.
    FRAME    C    Function to draw box given two corners.
    CURSOR   C    Function to move cursor to a specific r,c position.
    GTOJ     C    Converts Gregorian date to Julian date.
    CVTDATE  C    Unpacks Gregorian date (1/1/84) to (01/01/84).
    GETLINE  C    Read record from file to string.
    CURDOWN  C    Function to move curser down y relative lines.
    GETDATE  C    Gets date in string form MM/DD/YY.
    GETTIME  C    Gets time in form HH:MM:SS  (24 hour clock).
    DOSTIME  ASM  Gives DOS time in hours, minutes, seconds, 1/100 seconds.
    ESCREEN  C    Function to erase line from screen.
    CURUP    C    Mover cursor up y lines.
    PAUSE    C    Pauses a program for period of time.
    CURBACK  C    Move cursor back x columns.
    CURFOR   C    Move cursor forward x columns.
    BIOSIO   ASM  Assembly routines which interface directly with BIOS.
    READC    C    Function to read string from stdin.
    WRITES   C    Function to write string to stdout.
    WRITEC   C    Function to write character to screen using DOS function.
    COMM     MNU  Menu for communications program.
    MENCON   C    Function to open menu file and display it on screen.
    ???      BAT  Batch files to emulate UNIX commands (9 files).
    IBMTTY   C    Terminal emulation program with file upload & download.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BIOSIO.ASM

{% raw %}
```
;                         *** biosio.asm ***
;
; IBM-PC microsoft "C" under PC-DOS v2.00
;
; MICROSOFT "C" callable 8088 assembly routines that interface directly
; with the basic I/O system (BIOS).
;
; NOTE -- The IBM Technical Reference Manual contains a listing of the
;         BIOS and more complete descriptions of each interrupt.
;
; Written by L. Cuthbertson, April 1984
;
;**********************************************************************
;
PGROUP	GROUP	PROG
PROG	SEGMENT	BYTE PUBLIC 'PROG'

	PUBLIC	KEYRD,KEYHIT,KEYSHIF

	PUBLIC	BIOSINI,BIOSSET,BIOSPOS
	PUBLIC	BIOSUP,BIOSDWN,BIOSRCA,BIOSWCA,BIOSWC
	PUBLIC	BIOSWD,BIOSTTY,BIOSCUR

	PUBLIC	COMINI,COMOUT,COMIN,COMSTAT

	PUBLIC	INP,OUTP

	ASSUME	CS:PGROUP
;
;**********************************************************************
;
;                        *** KEYBOARD I/O ***
;
; NOTE - Keyboard interrupt description starts on page A-23 of Tech
;        Ref Manual.
;
;**********************************************************************
;
; Read a keyboard entry - wait for entry if one not ready.
;
; synopsis	c = keyrd();
;
;		int c;		high order bits contain scan code
;				low order bits contain character
;
; NOTE - Scan codes are described on page 2-17 of the Technical
;        Reference Manual.
;
KEYRD	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	AH,0		; READ NEXT CHARACTER ENTERED
	INT	16H		; BIOS KEYBOARD I/O INTERRUPT
	POP	BP
	RET
KEYRD	ENDP
;
; Check to see if there is a character in the keyboard buffer.
;
; synopsis	iret = keyhit();
;
;		int iret;	= 0 if no character availible
;				= 1 character is availible
;
KEYHIT	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	AH,1		; CHECK KEYBOARD BUFFER FUNCTION
	INT	16H		; BIOS KEYBOARD I/O INTERRUPT
	MOV	AX,0		; ASSUME THAT NO CHARACTER READY
	JZ	K1
	MOV	AX,1		; CHARACTER READY
K1:
	POP	BP
	RET
KEYHIT	ENDP
;
; Check to see what the shift key status is.
;
; synopsis	iret = keyshif();
;
;		int iret;       shift key status
;
;			0x80 = insert state is active
;			0x40 = cap lock state has been toggled
;			0x20 = num lock state has been toggled
;			0x10 = scroll lock state has been toggled
;			0x08 = alternate shift key depressed
;			0x04 = control shift key depressed
;			0x02 = left shift key depressed
;			0x01 = right shift key depressed
;
; NOTE - from page A-2 and A-3 of Tech Ref Manual
;
KEYSHIF	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	AH,2		; CHECK SHIFT STATUS FUNCTION
	INT	16H		; BIOS KEYBOARD I/O INTERRRUPT
	POP	BP
	RET
KEYSHIF	ENDP
;
; *********************************************************************
;
;			*** VIDEO I/O ***
;
; NOTE - the video I/O interrupt description starts on page A-43 of the
;        Tech Ref Manual.
;
; *********************************************************************
;
; Initialize screen I/O using the BIOS set mode call
;
; synopsis	biosini(stype);
;
;		int stype;	screen type
;
;			0 = 40x25 BW (power on default)
;			1 = 40x25 Color
;			2 = 80x25 BW
;			3 = 80x25 Color
;			graphics mode
;			4 = 320x200 Color
;			5 = 320x200 BW
;			6 = 640x200 BW
;			internal use only
;			7 = 80x25 BW card
;
BIOSINI	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	AL,[BP+4]	; SCREEN TYPE IN AL
	MOV	AH,0		; SET MODE FUNCTION
	INT	10H		; BIOS VIDEO I/O INTERRUPT
	POP	BP
	RET
BIOSINI	ENDP
;
; Set the current cursor position.
;
; synopsis	biosset(irow,icol);
;
;		*** no value returned ***
;		int irow;	0 to 24
;		int icol;	0 to 79
;
BIOSSET	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	DH,[BP+4]	; ROW
	MOV	DL,[BP+6]	; COLUMN
	MOV	BH,0		; CURRENT PAGE NUMBER
	MOV	AH,2		; CURSOR POSITION SET FUNTION NUMBER
	INT	10H		; VIDEO I/O INTERRUPT
	POP	BP
	RET
BIOSSET	ENDP
;
; Return the current cursor postion.
;
; synopsis	iret = biospos();
;
;		int iret;	high order bits contain row
;				low order bits contain column
;
BIOSPOS	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	BH,0		; CURRENT PAGE NUMBER
	MOV	AH,3		; CURSOR POSITION FUNCTION NUMBER
	INT	10H		; VIDEO I/O INTERRUPT
	MOV	AH,DH		; MOVE INT RETURN INTO FUNCTION RETURN
	MOV	AL,DL		; DITTO
	POP	BP
	RET
BIOSPOS	ENDP
;
; Scroll the screen up within a defined window.
;
; synopsis	biosup(numlines,trow,tlcol,brow,brcol,fchar);
;
;		int numlines;	number of lines to scroll up
;		int trow;	top row of window
;		int tlcol;	top left column of window
;		int brow;	bottom row of window
;		int brcol;	bottom right column of window
;		int fchar;	fill character of opened line
;
; note: numlines = 0 blanks entire window.  Upper left corner of full
;	screen is 0,0 while the bottom right corner of full screen is
;	24,79.
;
BIOSUP	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	AL,[BP+4]	; NUMBER OF LINES TO SCROLL
	MOV	CH,[BP+6]	; TOP ROW OF WINDOW
	MOV	CL,[BP+8]	; TOP LEFT COLUMN OF WINDOW
	MOV	DH,[BP+10]	; BOTTOM ROW OF WINDOW
	MOV	DL,[BP+12]	; BOTTOM RIGHT COLUMN OF WINDOW
	MOV	BH,[BP+14]	; FILL CHARACTER
	MOV	AH,6		; SCROLL UP FUNCTION NUMBER
	INT	10H		; VIDEO I/O INTERRUPT
	POP	BP
	RET
BIOSUP	ENDP
;
; Scroll the screen down within a defined window.
;
; synopsis	biosdwn(numlines,trow,tlcol,brow,brcol,fchar);
;
;		int numlines;	number of lines to scroll down
;		int trow;	top row of window
;		int tlcol;	top left column of window
;		int brow;	bottom row of window
;		int brcol;	bottom right column of window
;		int fchar;	fill character of opened line
;
; note: numlines = 0 blanks entire window.  Upper left corner of full
;	screen is 0,0 while the bottom right corner of full screen is
;	24,79.
;
BIOSDWN	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	AL,[BP+4]	; NUMBER OF LINES TO SCROLL
	MOV	CH,[BP+6]	; TOP ROW OF WINDOW
	MOV	CL,[BP+8]	; TOP LEFT COLUMN OF WINDOW
	MOV	DH,[BP+10]	; BOTTOM ROW OF WINDOW
	MOV	DL,[BP+12]	; BOTTOM RIGHT COLUMN OF WINDOW
	MOV	BH,[BP+14]	; FILL CHARACTER
	MOV	AH,7		; SCROLL DOWN FUNCTION NUMBER
	INT	10H		; VIDEO I/O INTERRUPT
	POP	BP
	RET
BIOSDWN	ENDP
;
; Read the contents of a given screen cell.
;
; synopsis	iret=biosrca();
;
;		int iret;	high order bits contain attributes
;				low order bits contain character
;
; NOTE - Attributes are defined on page 13-9 of the DOS v2.0 manual
;
BIOSRCA	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	BH,0		; ACTIVE DISPLAY PAGE
	MOV	AH,8		; READ CHARACTER + ATTRIBUTES FUNCTION
	INT	10H		; VIDEO I/O INTERRUPT
	POP	BP
	RET
BIOSRCA	ENDP
;
; Write a character to the screen - with attributes.
;
; synopsis	bioswca(char,count,att);
;
;		*** no value returned ***
;		int char;	character to output
;		int count;	number of times to output character
;		int att;	character attribute
;
; NOTE - Attributes are defined on page 13-9 of the DOS v2.0 manual
;
BIOSWCA	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	AL,[BP+4]	; CHARACTER
	MOV	CX,[BP+6]	; NUMBER OF CHARACTERS TO WRITE
	MOV	BL,[BP+8]	; CHARACTER ATTRIBUTE
	MOV	BH,0		; ACTIVE DISPLAY PAGE
	MOV	AH,9		; WRITE CHARACTER/w ATTRIBUTES FUNCTION
	INT	10H		; VIDEO I/O INTERRUPT
	POP	BP
	RET
BIOSWCA	ENDP
;
; Write a character to the screen - no attributes.
;
; synopsis	bioswc(char,count);
;
;		*** no value returned ***
;		int char;	character to output
;		int count;	number of times to output character
;
BIOSWC	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	AL,[BP+4]	; CHARACTER
	MOV	CX,[BP+6]	; NUMBER OF CHARACTERS TO WRITE
	MOV	BL,0;		; CHARACTER ATTRIBUTE - NULL
	MOV	BH,0		; ACTIVE DISPLAY PAGE
	MOV	AH,10		; WRITE CHARACTER ONLY FUNCTION NUMBER
	INT	10H		; VIDEO I/O INTERRUPT
	POP	BP
	RET
BIOSWC	ENDP
;
; Write a dot in graphics mode.
;
; synopsis	bioswd(irow,icol);
;
;		*** no value returned ***
;		int irow;
;		int icol;
;
BIOSWD	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	DX,[BP+4]	; ROW
	MOV	CX,[BP+6]	; COLUMN
	MOV	AL,1		; GREEN COLOR
	MOV	AH,12		; WRITE A DOT FUNCTION NUMBER
	INT	10H		; VIDEO I/O INTERRUPT
	POP	BP
	RET
BIOSWD	ENDP
;
; Write a character to the screen using the BIOS ascii teletype call.
; The teletype call will send cr/lf if column 79 is written to (0-79).
; It will scroll the screen up if row 24 (0-24) column 79 is written to.
; It will also beep the bell if ^g is received and provide a destructive
; backspace.
;
; synopsis	biostty(c);
;
;		char c;		character to write.
;
BIOSTTY	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	AL,[BP+4]	; CHARACTER TO WRITE INTO AL
	MOV	AH,14		; TTY FUNCTION
	MOV	BH,0		; DISPLAY PAGE
	INT	10H		; BIOS VIDEO I/O INTERRUPT
	POP	BP
	RET
BIOSTTY	ENDP
;
; Return the current video state of the screen.
;
; synopsis	iret = bioscur();
;
;		int iret;	low bits are the mode currently set
;				(see biosini for description)
;				high bits are the number of columns on screen
;
BIOSCUR	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	AH,15		; CURRENT VIDEO STATE FUNCTION
	INT	10H		; BIOS VIDEO I/O INTERRUPT
	POP	BP
	RET
BIOSCUR	ENDP
;
; *******************************************************************
;
;			*** communications port ***
;
; NOTE - the communications port I/O is described starting on page A-20
;        of the Tech Ref Manual.
;
; *******************************************************************
;
; Initialize the communications port.
;
; synopsis	iret = comini(port,params);
;
;		int iret;	return status (see comstat)
;		int port;	communications port to initialize (0,1)
;		int params;	bit pattern for initialization -
;
;	7	6	5	4	3	2	1	0
;       ------BAUD RATE ---     --PARITY--   STOP BIT   --WORD LENGTH--
;
;	000 - 110		X0 - NONE	0 - 1	10 - 7 BITS
;	001 - 150		01 - ODD	1 - 2	11 - 8 BITS
;	010 - 300		11 - EVEN
;	011 - 600
;	100 - 1200
;	101 - 2400
;	110 - 4800
;	111 - 9600
;
COMINI	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	DX,[BP+4]	; COMM PORT TO INITIALIZE
	MOV	AL,[BP+6]	; PARAMETERS
	MOV	AH,0		; INITIALIZATION FUNCTION
	INT	14H		; COMM PORT I/O INTERRUPT
	POP	BP
	RET
COMINI	ENDP
;
; Write a character to the communications port.
;
; synopsis	iret = comout(port,c);
;
;		int iret;	error return ( >127 if error occured)
;				- see AH under modem control
;		int port;	communications port to write (0 or 1)
;		int c;		character to write.
;
COMOUT	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	DX,[BP+4]	; COMM PORT TO WRITE
	MOV	AL,[BP+6]	; CHARACTER TO WRITE
	MOV	AH,1		; WRITE CHARACTER FUNCTION
	INT	14H		; COMM PORT I/O INTERRUPT
	POP	BP
	RET
COMOUT	ENDP
;
; Read a character from the communications port.  Waits for character if
; one is not ready.  See \comm\ibmtty.c for example of polling comm port
; for character without wait.
;
; synopsis	c = comin(port);
;
;		int c;		character read from comm port,
;				> 127 if error or no character ready.
;				- see AH under modem control
;		int port;	communications port to read (0 or 1)
;
COMIN	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	DX,[BP+4]	; COMM PORT TO READ
	MOV	AH,2		; READ CHARACTER FUNCTION
	INT	14H		; COMM PORT I/O INTERRUPT
	POP	BP
	RET
COMIN	ENDP
;
; Check the line and modem status
;
; synopsis	iret = comstat(port);
;
;		int iret;	; line and modem status
;		AH - high order bits contain line control status
;		bit 7 = time out
;		bit 6 = trans shift register empty
;		bit 5 = trans holding register empty
;		bit 4 = break detect
;		bit 3 = framing error
;		bit 2 = parity error
;		bit 1 = overrun error
;		bit 0 = data ready
;
;		AL - low order bits contain modem status
;		bit 7 = received line signal detect
;		bit 6 = ring indicator
;		bit 5 = data set ready
;		bit 4 = clear to send
;		bit 3 = delta receive line signal detect
;		bit 2 = trailing edge ring detector
;		bit 1 = delta data set ready
;		bit 0 = delta clear to send
;
; Note - from page A-21 of Tech Ref Manual
;
;		int port;	; communications port to check
;
COMSTAT	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	DX,[BP+4]	; COMM PORT TO CHECK
	MOV	AH,3		; STATUS FUNCTION
	INT	14H		; COMM PORT I/O INTERRUPT
	POP	BP
	RET
COMSTAT	ENDP
;
;**********************************************************************
;
;			*** io.asm ***
;
; IBM-PC 8088 assembly for interface with microsoft "C" under PC-DOS
;
; "C" callable subroutines that provide absolute pointer addressing.
; Pointers within a IBM-PC microsoft "C" program are relative to the
; start of the programs data segment.  These subroutines provide a
; mechanism to address absolute memory locations.
;
; Supplied by microsoft - commented by L. Cuthbertson, April 1984
;
;**********************************************************************
;
; Read an absolute memory location.
;
; synopsis	c = readabs(loc);
;
;		int c;		contents of memory location
;		int loc;	absolute memory location in hex
;
INP	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	DX,[BP+4]	;GET LOCATION ADDRESS
	IN	AL,DX		;READ LOCATION
	XOR	AH,AH		;CLEAR HIGH BYTE
	POP	BP
	RET
INP	ENDP
;
; Write an absolute memory location.
;
; synopsis	writeabs(loc,c);
;
;		int loc;	absolute memory location in hex
;		int c;		integer to write to memory location
;
OUTP	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	DX,[BP+4]	;GET LOCATION ADDRESS
	MOV	AX,[BP+6]	;GET ADDRESS OF INTEGER TO WRITE
	OUT	DX,AL		;WRITE TO MEMORY LOCATION
	POP	BP
	RET
OUTP	ENDP
;
;**********************************************************************
;
PROG	ENDS
	END
;

```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #216, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  WEEKDAY .C           CRC = EC 17

--> FILE:  READS   .C           CRC = 24 C4

--> FILE:  SCONTROL.H           CRC = 8A 9E

--> FILE:  CHOSIT  .C           CRC = 8B E9

--> FILE:  ELINE   .C           CRC = 0B 89

--> FILE:  JTOG    .C           CRC = 8E D1

--> FILE:  DOSDATE .ASM         CRC = D4 1D

--> FILE:  JTOJ    .C           CRC = 34 6E

--> FILE:  SCRINIT .C           CRC = C9 69

--> FILE:  SCRATT  .C           CRC = 6E 19

--> FILE:  FRAME   .C           CRC = 55 01

--> FILE:  CURSOR  .C           CRC = CF 9B

--> FILE:  CURDOWN .C           CRC = 34 EA

--> FILE:  GETLINE .C           CRC = A3 53

--> FILE:  CVTDATE .C           CRC = 92 61

--> FILE:  GTOJ    .C           CRC = A2 9E

--> FILE:  CURFOR  .C           CRC = 11 6A

--> FILE:  CURBACK .C           CRC = B4 25

--> FILE:  PAUSE   .C           CRC = A6 62

--> FILE:  CURUP   .C           CRC = 0E C6

--> FILE:  ESCREEN .C           CRC = 78 9D

--> FILE:  DOSTIME .ASM         CRC = B8 A3

--> FILE:  README  .DOC         CRC = 16 F9

--> FILE:  GETTIME .C           CRC = 46 8B

--> FILE:  GETDATE .C           CRC = 3F 58

--> FILE:  BIOSIO  .ASM         CRC = 0A 35

--> FILE:  READC   .C           CRC = A5 58

--> FILE:  WRITES  .C           CRC = 76 E5

--> FILE:  WRITEC  .C           CRC = D7 F6

--> FILE:  MENCON  .C           CRC = 72 FC

--> FILE:  COMM    .MNU         CRC = EB 9D

--> FILE:  IBMTTY  .C           CRC = 17 86

--> FILE:  VI      .BAT         CRC = 00 00

--> FILE:  LS      .BAT         CRC = 00 00

--> FILE:  RM      .BAT         CRC = 00 00

--> FILE:  CL      .BAT         CRC = 00 00

--> FILE:  CAT     .BAT         CRC = 00 00

--> FILE:  MV      .BAT         CRC = 00 00

--> FILE:  LD      .BAT         CRC = 00 00

--> FILE:  L       .BAT         CRC = 00 00

--> FILE:  CC      .BAT         CRC = 78 FA

--> FILE:  CRC     .TXT         CRC = C7 C9

--> FILE:  CRCK4   .COM         CRC = BD 22

 ---------------------> SUM OF CRCS = EE E0

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## DOSDATE.ASM

{% raw %}
```
;                         *** dosdate.asm ***
;
; IBM-PC microsoft "C" under PC-DOS
;
; Microsoft "C" callable 8088 assembly routine that uses a DOS function
; call to obtain and return the month, day, and year as integers.
;
; synopsis	dosdate(&imo,&iday,&iyr);
;
;		*** no function value returned ***
;		int imo;	1-12
;		int iday;	1-31
;		int iyr;	1980-2099
;
; Written by L. Cuthbertson, May 1984
;
;**********************************************************************
;
PGROUP	GROUP	PROG
PROG	SEGMENT	BYTE PUBLIC 'PROG'
	PUBLIC	DOSDATE
	ASSUME	CS:PGROUP
;
; ********************************************************************
;
DOSDATE	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	AH,2AH		; DOS GET DATE FUNCTION NUMBER
	INT	21H		; DOS FUNCTION CALL INTERRUPT
	MOV	AL,DH		; MOVE MONTH INTO AX
	XOR	AH,AH		; CLEAR HIGH BYTE
	MOV	DI,[BP+4]	; ADDRESS OF MONTH VARIABLE
	MOV	[DI],AX		; MOVE MONTH INTO MONTH VARIABLE
	MOV	BL,DL		; MOVE DAY INTO BX
	XOR	BH,BH		; CLEAR HIGH BYTE
	MOV	DI,[BP+6]	; ADDRESS OF DAY VARIABLE
	MOV	[DI],BX		; MOVE DAY INTO DAY VARIABLE
	MOV	DI,[BP+8]	; ADDRESS OF YEAR VARIABLE
	MOV	[DI],CX		; MOVE YEAR INTO YEAR VARIABLE
	POP	BP
	RET
DOSDATE	ENDP
;
PROG	ENDS
	END
```
{% endraw %}

## DOSTIME.ASM

{% raw %}
```
;                         *** dostime.asm ***
;
; IBM-PC microsoft "C" under PC-DOS
;
; Microsoft "C" callable 8088 assembly routine that uses a DOS function
; call to obtain and return the hours, minutes, seconds, and hundreths
; of a second as integers.
;
; synopsis	dostime(&hour,&min,&sec,&ths);
;
;		*** no function value returned ***
;		int hour;	0-23  military time
;		int min;	0-59
;		int sec;	0-59
;		int ths;	0-99
;
;
; Written by L. Cuthbertson, May 1984
;
;**********************************************************************
;
PGROUP	GROUP	PROG
PROG	SEGMENT	BYTE PUBLIC 'PROG'
	PUBLIC	DOSTIME
	ASSUME	CS:PGROUP
;
; ********************************************************************
;
DOSTIME	PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	AH,2CH		; DOS GET TIME FUNCTION NUMBER
	INT	21H		; DOS FUNCTION CALL INTERRUPT
	MOV	AL,CH		; MOVE HOURS INTO AX
	XOR	AH,AH		; CLEAR HIGH BYTE
	MOV	DI,[BP+4]	; ADDRESS OF HOURS VARIABLE
	MOV	[DI],AX		; MOVE HOURS INTO HOURS VARIABLE
	MOV	BL,CL		; MOVE MINUTES INTO BX
	XOR	BH,BH		; CLEAR HIGH BYTE
	MOV	DI,[BP+6]	; ADDRESS OF MINUTES VARIABLE
	MOV	[DI],BX		; MOVE MINUTES INTO MINUTES VARIABLE
	MOV	CL,DH		; MOVE SECONDS INTO CX
	XOR	CH,CH		; CLEAR HIGH BYTE
	MOV	DI,[BP+8]	; ADDRESS OF SECONDS VARIABLE
	MOV	[DI],CX		; MOVE SECONDS INTO SECONDS VARIABLE
	XOR	DH,DH		; CLEAR HIGH BYTE
	MOV	DI,[BP+10]	; ADDRESS OF THS VARIABLE
	MOV	[DI],DX		; MOVE 1/100THS INTO THS VARIABLE
	POP	BP
	RET
DOSTIME	ENDP
;
PROG	ENDS
	END
```
{% endraw %}

## README.DOC

{% raw %}
```

								6/25/84


  This floppy contains a set of utility routines, batch files, and
programs that I wrote while learning about the IBM-PC and the "C"
programming lanquage.  Since this was a learning experience for me I
will not guarantee that they are efficient or bug free though I have
tried very hard to make them that way.	I would be most interested in
any additions or improvements that anyone might make to these routines.

  Also note that these routines were written in the following environ-
ment:

		IBM-PC		256K		Monochrome screen
		Epson MX-100 parallel printer
		2 Serial ports
		2 DS/SD floppy disk drives

  Some of these routines have been ported to the IBM-PC aztec "C" under
Concurrent CP/M and to a VAX 11/780 under VMS with minimal modifications.
Obviously the DOS functions and 8088 assembler routines didn't port well
but the "C" code needed almost no changes.


				LEIGH CUTHBERTSON
				1868 S. PERRY WAY
				DENVER, CO
						80219

notes about some of the files on this disk -

*.C and *.ASM files

This are utility subroutines written in MICROSOFT "C".  These
utilities include a menu system, cursor and screen control (using DOS
or direct to BIOS), julian and gregorian date/time routines, and "C"
callable assembler routines that issue BIOS interrupts.  NOTE - the
DOS cursor and screen control utilities require DEVICE=ANSI.SYS
command line be in the CONFIG.SYS file.  The BIOS cursor and screen
controls do not require this.


communications program (IBMTTY.C)

This program is a terminal emulation/communications program written in
MICROSOFT "C".  It is usable but not recommended for use becouse of
user unfriendlyness and a high error rate.  Its main reason for
inclusion is as an example of use of the various utility subroutines
in the \util subdirectory.  It also provides an example of direct
control of the IBM serial communications board.


Batch files (*.BAT)

These batch files emulate some of the most common UNIX commands on
the IBM-PC.  The compiler and linker batch files are set up for the
MICROSOFT "C" compiler and linker.  To use these batch files it is
recommended to set up a PATH command in AUTOEXEC.BAT to include this
subdirectory and the compiler subdirectory in the search path.
ex. (A> PATH a:\;a:\unix;a:\compiler).

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0216

     Volume in drive A has no label
     Directory of A:\

    BIOSIO   ASM     13287   6-25-84  11:33a
    CAT      BAT        74   1-27-84   1:30p
    CC       BAT       156   1-31-84  11:14a
    CHOSIT   C        1854   5-11-84   2:50p
    CL       BAT         6   1-27-84   8:42a
    COMM     MNU       533   5-17-84   9:41a
    CRC      TXT      2580  11-15-84   9:52a
    CRCK4    COM      1536  10-21-82   7:54p
    CURBACK  C        1425   4-05-84  11:37a
    CURDOWN  C        1425   4-05-84  11:44a
    CURFOR   C        1424   4-05-84  11:35a
    CURSOR   C        1572   4-05-84  11:32a
    CURUP    C        1423   4-05-84  11:41a
    CVTDATE  C        2238   4-05-84  11:08a
    DOSDATE  ASM      1232   5-16-84   1:50p
    DOSTIME  ASM      1516   5-16-84   2:27p
    ELINE    C        1764   4-05-84  11:51a
    ESCREEN  C        1767   4-05-84  11:48a
    FRAME    C        2363   5-11-84   2:15p
    GETDATE  C        1514   5-17-84   9:28a
    GETLINE  C        1384   1-01-80   1:39a
    GETTIME  C        1539   5-17-84   9:29a
    GTOJ     C        2037   4-05-84  11:11a
    IBMTTY   C       16064   6-25-84  12:47p
    JTOG     C        2603   1-01-80   1:45a
    JTOJ     C        1813   4-05-84  11:12a
    L        BAT        19  12-02-83  11:25a
    LD       BAT        72   1-27-84   3:22p
    LS       BAT        83   1-31-84  11:30a
    MENCON   C        7494   1-01-80   1:03a
    MV       BAT        15   1-01-80  12:08a
    PAUSE    C        1660   5-17-84  10:30a
    READC    C         785   6-25-84  12:01p
    README   DOC      2338   7-15-84  10:25a
    READS    C        1978   1-01-80   1:29a
    RM       BAT        72   1-30-84   1:33p
    SCONTROL H        1930   5-04-84   1:31p
    SCRATT   C        2520   5-04-84   1:51p
    SCRINIT  C         934   5-04-84   1:21p
    VI       BAT        11   1-26-84   2:00p
    WEEKDAY  C        1850   4-05-84  11:15a
    WRITEC   C         818   6-25-84  12:03p
    WRITES   C         944   6-25-84  12:02p
           43 file(s)      88652 bytes
                           60416 bytes free
