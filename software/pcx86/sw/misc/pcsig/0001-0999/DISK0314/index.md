---
layout: page
title: "PC-SIG Diskette Library (Disk #314)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0314/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0314"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "C UTILITIES NO 4"

    This disk has an excellent Unix-type Grep function (string find)
    regardless of what C compiler you use.  Also here is XENIX which
    is a very nice set of disk I/O routines that support all the DOS
    features, and UNLUMP to help build larger C programs.
    
    System Requirements: C compiler and Assembler are optional.
    
    How to Start: To read DOC files, enter TYPE filename.ext and
    press <ENTER>.  To run an EXE program, just type its name and
    press <ENTER>.  For instructions on ASM or C listings, refer to
    your Assembler or C language manuals.
    
    File Descriptions:
    
    CC       C    C program that does the same thing as C86SAMPL.BAT !
    CASYNC   ASM  C interface to serial port. Includes XON/XOFF, buffered
    C86SAMPL BAT  Batch file to run C86 compiler
    C86MOD   DOC  How to make C86 programs return status to DOS 2.0
    GETSEG-C ASM  Gets vaule for all the segment registors
    CSYSINT  ASM  Interface between Lattice C and the 8088 interrupts
    CRC      C    Does CRC error checking on blocks of data
    CPRGRMS2 DOC  Short descption of the files on this disk
    CPRGRMS1 DOC  Short descption of the files on this disk
    CPRGRMS1 BAT  Copies all the files on this diskette to another disk
    CLS      C    C program to clear screen
    CC       EXE  CC.C ready to run
    LOCATE   C    C routine to position cursor on screen
    LEJ_LIB  C    Routines to count words etc, ASCII HEX conversion etc.
    KERMITPC HLP  lets pc emmulate a TTY termial. Documentation on KERMIT
    KERMITPC C    Reliable file transfer over unreliable I/O channels
    IOS1-20  ASM  DOS disk I/O functions for Lattice C
    GREP     DOC  GREP manual
    GREP     C86  GREP for C86
    GREP     C    GREP for Lattice C
    LUMP     C    Lump a group of files together
    MEMCLEAN C    Zeros memory to avoid parity checks
    MEMCLEAN DOC  Documentation on MEMCLEAN
    MOVMEML  ASM  C callable function to move memory
    RANDOM   ASM  Random number generator for C
    NAMES    C    Shows how to Access disk from C
    SETPRTR  C    Setup the parameters for EPSON printers
    RANDOM   C    Test for RANDOM.ASM
    XENIX    OBJ  XENIX ready to link. Lattice C
    XENIX    ASM  Source code for OPEN READ WRITE Supports full path names
    XC       EXE  XC ready to run
    XC       DOC  Documtation for XC
    XC       C    Cross reference utility for C programs
    USQ      C86  Unsqueeze a text file
    SQ       C86  Squeeze a text file into less space
    SWITCH1  C    Change display mode
    SWITCH   C86  Change display type
    UNLUMP   C    Seperate lumped files
    TYPESQ   C86  Type a squeezed file
    TPRINT   DOC  Documentation for TPRINT
    TPRINT   C    Prints files with page numbers headers ect.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## C86MOD.DOC

{% raw %}
```
Author:
-------
   Michael Evans   (312) 329-6302 days.

Summary:
--------
      The following patch to any EXE type file created by the C86 linker (cl)
   will allow the return code from function MAIN to be passed to DOS 2.0.
   Once applied, the ERRORLEVEL batch facility in DOS 2.0 may be used
   to evaluate the returned value from a C86 program.  One handy implementation
   is patching the EXE files provided with the C86 system so that a batch file
   can test for successful completion of the various C86 programs.

       Restrictions: a. DOS 2.0 only allows for an 8 bit return code, thus the
                        16 bit result from C86 will be folded via OR to 8 bits.
                     b. Once patch is applied, modules are not downward
                        compatible from DOS 2.0.

              Notes: a. ALL values mentioned below are HEXADECIMAL.
                     b. When looking at a word in storage, remember that it
                        is stored LEAST significant byte first.
                     c. ALWAYS assume SIGNED quantities unless otherwise noted.
                     d. This patch was tested on software supplied as
                        version 1.33D from CI.
                     e. NEVER alter the original CI release diskettes.
                     f. Abort the procedure if any verifications do not match,
                        the patch will only work if installed exactly as shown.

Procedure:
----------

   1. Copy filename with EXE extension to one with a ZAP extension.

   2. Load the filename.ZAP file under DEBUG.

   3. Locate the program entry point as follows:
      a. At offset 108 in the file is a word containing the header size
         in paragraphs, multiply this value by 10.
      b. Perform an addition of the words at file offsets 114 and
         116.
      c. The entry point of the program is 100 + (step 3.a) + (step 3.b).

   4. The byte at location (step 3.c) must be an E9, if not, recheck the
      preceding steps.

   5. The file offset to $MAIN is: 3 + (step 3.c) + the contents of the word
      at file offset ((step 3.c) + 1).

   6. Locate the following string within 8 bytes of (step 5) + 58:
      8A 1E nn nn 0A DB 74 35 78 04  (nn means don't care).

   7. Considering the file offset of the string in step 6 as BASE, make the
      following modifications:
      a. Move 2 bytes from BASE + 2 to BASE + 4.
      b. Change bytes starting at BASE to: 0A C4 D0 26
      c. Change bytes starting at BASE + 6 to: 72 06 74 31
      d. Verify at BASE + D: 2F, change to: 2D
      e. Verify at BASE + 35: 76 05 8B 6E 00 EB D3 58,
                   change to: 8B 6E 00 77 D5 58 B4 4C
      f. Verify at BASE + 3E: 20, change to: 21

   8. Update filename.ZAP with W subcommand of DEBUG, then exit via Q.

   9. Rename filename.ZAP to filename.EXE.

```
{% endraw %}

## CASYNC.ASM

{% raw %}
```
title IBM PC Communications I/O Routines -- Curt Klinsing
pgroup group prog
prog segment byte public 'prog'
;
;A set of Lattice C callable functions to support
;interrupt driven character I/O on the IBM PC. Input
;is buffered, output is polled.
;
public init_comm ;initialize the comm port,
public uninit_comm ;remove initialization,
public set_xoff  ;enable/disable XON/XOFF,
public get_xoff  ;read XON/XOFF state,
public rcvd_xoff ;returns true if XOFF rcvd,
public sent_xoff ;true if XOFF sent,
public inp_cnt  ;returns count of rcv chars,
public inp_char  ;get one char from buffer,
public inp_flush ;flush input buffer,
public outp_char ;output a character,
;
;A better description can be found in the comment
;block in each function.
;
 assume cs:pgroup
 
;
FALSE EQU 0
TRUE EQU NOT FALSE
;
BASE EQU 03F8H ;BASE FOR SERIAL BOARD
;
LCR equ BASE+3 ; Line control register
IER equ BASE+1 ; Interrup Enable Register
MCR EQU BASE+4 ;modem control register
EnblDRdy equ 01H ; enable 'data-ready' interrupt bit
IntCtlr  EQU 21H ;OCW 1 FOR 8259 CONTROLLER
EnblIRQ4 EQU 0EFH ;Enable COMMUNICATIONS (IRQ4)
DATAPORT EQU BASE ;transmit/receive data port
MaskIRQ4 EQU 10H ;BIT TO DISABLE COMM INTERRUPT (IRQ4)
 
MDMSTA EQU BASE+5 ;line status register
MDMMSR EQU BASE+6 ;modem status register
MDMBAD EQU BASE ;lsb baud resgister
MDMBD1 EQU BASE+1 ;msb baud rate register
MDMCD EQU 80H ;mask for carrier dectect
SETBAU EQU 80H ;code for Divisor Latch Access Bit
MDMTBE EQU 20H ;8250 tbe flag
MDMBRK EQU 40H ;command code for 8250 break
LINMOD EQU 03H ;line mode=8 bit, no parity
MDMMOD EQU 0BH ;modem mode = DTR and RTS HIGH
STOP2 EQU 04H ;BIT FOR TWO STOP BITS IF BAUD<300
RS8259 EQU 20H ;OCW 3 FOR 8259
RSTINT EQU 64H ;SPECIFIC EOI FOR COMM INTERRUPT
XOFF EQU 13H ;XOFF character
XON EQU 11H ;XON character
;
; MISCELLANEOUS EQUATES
;
CR EQU 13
LF EQU 10
DosCall EQU 33 ;INTERRUPT NUMBER FOR DOS CALL
CNSTAT EQU 11 ;FUNCTION NUMBER FOR CONSOLE STATUS
CNIN EQU 1 ;FUNCTION NUMBER FOR CONSOLE INPUT
BUFSIZ EQU 512 ;Max NUMBER OF CHARS
SetIntVect  EQU 25H ;SET INTERRUPT VECTOR FUNCTION NUMBER
 
;
; DUMP BUFFER, COUNT AND POINTER.
;
CIRC_BUF DB BUFSIZ DUP(?) ;ALLOW 512 MaxIMUM BUFFERED CHARACTERS
BUF_TOP EQU $ - 1  ;KEEP TRACK OF THE TOP OF THE BUFFER
CIRC_TOP DW BUF_TOP  ;
;
CIRC_IN DW OFFSET CIRC_BUF ;POINTER TO LAST CHAR. PLACED IN BUFFER
CIRC_CUR DW OFFSET CIRC_BUF ;POINTER TO NEXT CHAR. TO BE RETRIEVED FROM
    ; BUFFER
CIRC_CT DW 0  ;COUNT OF CHARACTERS USED IN BUFFER
SNT_XOFF DB FALSE  ;FLAG TO CHECK IF AN XOFF HAS BEEN SEND
GOT_XOFF  DB FALSE  ;FLAG TO CHECK IF AN XOFF HAS BEEN RECEIVED
SEE_XOFF  DB FALSE  ;FLAT TO SEE IF WE ARE INTERESTED IN XON/XOFF
;
;
;
;set_xoff(flag)  Enable (flag != 0) or disable
;int flag;  (flag == 0) XON/ XOFF protocol
;   for the character input stream.
;If enabled, an XOFF will be sent when the buffer
;reaches 3/4 full. NOTE: an XON will not be sent auto-
;matically. Your program must do it when it sees
;the rcvd_xoff() flag, and ready for more chars.
;
set_xoff proc near
 push bp
 PUSH DS  ;SAVE DATA SEGMENT
 mov bx,[bp+6]
 push cs
 pop ds  ; move code seg addr to data seg reg.
 cmp bx,0
 jnz to_on
 mov see_xoff,FALSE
 jmp done1
to_on: mov see_xoff,TRUE
done1: pop ds
 pop bp
 ret
set_xoff endp
;
;flag= get_xoff() Returns the current setting
;   of the XON/ XOFF flag set
;by set_xoff(), above.
;
get_xoff proc near
 push bp
 push ds  ; save data reg
 push cs
 pop ds  ; move code seg addr to data seg reg.
 xor ax,ax
 mov al,see_xoff
 pop ds
 pop bp
 ret
get_xoff endp
;
;flag= sent_xoff(); Returns true if an XOFF
;   character was sent, indicating
;the receive buffer is 3/4 full.
;
sent_xoff proc near
 push bp
 push ds  ; save data reg
 push cs
 pop ds  ; move code seg addr to data seg reg.
 xor ax,ax
 mov al,snt_xoff
 pop ds
 pop bp
 ret
sent_xoff endp
;
;rcvd_xoff()  Returns true if an XOFF was
;   received; will return false as
;soon as an XON is received. Does not effect data output,
;only indicates the above. (Obviously useless for binary
;data.)
;
rcvd_xoff proc near
 push bp
 push ds  ; save data reg
 push cs
 pop ds  ; move code seg addr to data seg reg.
 xor ax,ax
 mov al,got_xoff
 pop ds  ; restore data reg
 pop bp
 ret
rcvd_xoff endp
;
;count= inp_cnt() Returns the number of characters
;   available in the input buffer.
;
 
inp_cnt proc near
 push bp
 push ds  ; save data segment
 push cs
 pop ds  ; move code seg addr to data seg reg
 mov ax,circ_ct
 pop ds
 pop bp
 ret
inp_cnt endp
;
;inp_flush() Flush the input buffer.
;
inp_flush proc near
 push bp
 push ds  ; save data reg
 push cs
 pop ds  ; move code seg addr to data seg reg.
 mov bx,offset circ_buf
 mov circ_in,bx
 mov circ_cur,bx
 xor ax,ax
 mov circ_ct,ax
 pop ds
 pop bp
 ret
inp_flush endp
 
; --------- Init -----------------------------------
; Program initialization:
;   -- Set up vector for RS232 interrupt (0CH)
;   -- Enbl IRQ4
;   -- Enbl RS232 interrupt on data ready
;
; ---------------------------------------------------
 
init_comm proc near
 push bp
 cli
 
;  ---- Set up INT x'0C' for IRQ4
 
 push ds
 push cs
 pop ds  ;cs to ds
 mov dx,offset IntHdlr ;relative adddres of interrupt handler
 mov al,0cH  ;interrupt number for comm.
 mov ah,SetIntVect ;function number for setting int vector
 int DosCall  ;set interrupt in 8086 table
 pop ds  ;restore DS
 
;  ---- Enbl IRQ4 on 8259 interrupt controller
 
 cli
 
 in al,IntCtlr ; get current masks
 and al,EnblIRQ4 ; Reset IRQ4 mask
 out IntCtlr,al ; And restore to IMR
 
;  ---  Enbl 8250 data ready interrupt
 
 mov dx,LCR  ; DX ==> LCR
 in al,dx  ; Reset DLAB for IER access
 and al,7FH
 out dx,al
 mov dx,IER  ; Interrupt Enbl Register
 mov al,EnblDRdy ; Enable 'data-ready' interrupt
 out dx,al
 
;  ---  Enbl OUT2 on 8250
 
 mov dx,MCR  ; modem control register
 mov al,08H  ; Enable OUT2
 out dx,al
 
 sti
 
 pop bp
 ret
init_comm endp
;
;uninit_comm()  Removes the interrupt structure
;   installed by init_comm(). Must be
;done before passing control to the DOS, else chars received
;will be stored into the next program loaded!
;
uninit_comm proc near
 push bp
; --- Disable IRQ4 on 8259
 
 cli
 in al,IntCtlr ;GET OCW1 FROM 8259
 or al,MaskIRQ4 ;DISABLE COMMUNICATIONS INTERRUPT
 out IntCtlr,al
 
; --- Disable 8250 data ready interrupt
 
 mov dx,LCR  ; DX ==> LCR
 in al,dx  ; Reset DLAB for IER access
 and al,7FH
 out dx,al
 mov dx,IER  ; Interrupt Enbl Register
 mov al,0  ; Disable all 8250 interrupts
 out dx,al
 
;  ---  Disable OUT2 on 8250
 
 mov dx,MCR  ; modem control register
 mov al,0  ; Disable OUT2
 out dx,al
 
 sti
  pop bp
 ret
uninit_comm endp
;
;char inp_char() Return a character from the input
;   buffer. Assumes you have called
;inp_cnt() to see if theres any characters to get.
;
inp_char proc near
 push bp
 push ds  ; save data reg
 push cs
 pop ds  ; move code seg addr to data seg reg.
 mov bx,circ_cur
 xor ax,ax
 mov al,[bx]  ;get next char from circ_buf
 DEC circ_ct  ;decrement circ_buf COUNT
 CMP bx,circ_top ;ARE WE AT THE TOP OF THE circ_buf?
 JZ reset_cur ;JUMP IF SO
 INC bx  ;ELSE, BUMP PTR
 JMP SHORT upd_cur
reset_cur:
 mov bx,OFFSET circ_buf ;RESET circ_in TO BOTTOM OF BUF.
upd_cur:
 mov circ_cur,bx  ;SAVE NEW PTR
 xor cx,cx
 mov cl,see_xoff ;check if interested in xon/xoff
 cmp cl,TRUE
 jnz clnup2  ;not interested, so goto return
 cmp snt_xoff,TRUE ;have we sent an xoff?
 jnz clnup2  ;no, so return
 cmp circ_ct,80h ;yes, so see in buf is now emptying
 jg clnup2  ;not empty enuf to send xon, jump to ret
 mov snt_xoff,FALSE
 mov cl,XON
 push ax  ; save char
 call comout
 pop ax
clnup2: pop DS  ;GET BACK ENTERING DS
 pop bp
 ret
inp_char endp
;
;outp_char(c)  Output the character to the
;char c;  serial port. This is not buffered
;   or interrupt driven.
;
outp_char proc near
 push bp
 mov bp,sp
 mov cl,[bp+4]
 sti
 call comout
 pop bp
 ret
outp_char endp
;
;Local subroutine: output CL to the port.
;
comout: mov dx,MDMSTA
 in al,dx  ; get 8250 status
 and al,MDMTBE ; check for transmitter ready
 jz comout  ; jump if not to wait
 mov al,cl  ; get char to al
 mov dx,DATAPORT
 out dx,al  ; output char to 8251
 ret
;
; RECEIVE INTERRUPT HANDLER (CHANGED TO PLACE CHARACTERS IN A
;  CIRCULAR circ_buf AND TO SEND AN XOFF IF THE circ_buf IS MORE THAN
;  3/4 FULL - S.G.)
;
IntHdlr:
 CLI
 push cx
 push dx
 push bx
 push ax
 push ds
 mov ax,cs  ;get cur code segment
 mov ds,ax  ; and set it as data segment
 mov bx,circ_in ;GET circ_buf IN PTR
 mov DX,DATAPORT ;GET DATA PORT NUMBER
 IN AL,DX  ;GET RECEIVED CHARACTER
; push ax
; push dx
; xor ax,ax
; xor dx,dx
; mov dl,al
; mov ah,2
; int DosCall
; pop dx
; pop ax
 xor cx,cx
 mov cl,see_xoff ;check if interested in xon/xoff
 cmp cl,TRUE
 jnz ck_full  ;not interested goto ck if buf full
 mov cl,al  ;put char in cl for testing
 and cl,7fh  ;turn off any parity bits
 cmp cl,XOFF  ;see if we got an xoff
 jnz ck_xon
 mov got_Xoff,TRUE ; code for handling xon/xoff from remote
 jmp clnup
ck_xon: cmp cl,XON
 jnz reg_ch
 mov got_Xoff,FALSE
 jmp clnup
;
;Normal character; not XON/XOFF, or XON/XOFF disabled.
;
reg_ch: test snt_Xoff,TRUE ;SEE IF sentXoff IS SET
 jnz ck_full  ;IF SO, DON'T SEND ANOTHER XOFF
 CMP circ_ct,(BUFSIZ * 3)/4 ;ALLOW BUF TO BECOME 3/4 FULL BEFORE
     ; SENDING XOFF
 jb savch  ;IF IT'S OK, CONTINUE
 push ax  ;SAVE CHARACTER
 mov CL,XOFF  ;GET XOFF CHARACTER
 mov snt_Xoff,TRUE  ;RESET sentXoff
 call comout  ; AND SEND IT
 pop ax  ;RETRIEVE CHARACTER
 JMP SHORT savch  ;IF WE'RE HERE, THE circ_buf HAS BUFSIZ-80H
    ;  CHARACTERS
ck_full:
 CMP circ_ct,BUFSIZ ;SEE IF circ_buf ALREADY FULL
 JZ clnup  ; JUMP IF SO, DO NOT PLACE CHARACTER IN BFR
savch:
 mov [bx],AL  ;SAVE NEW CHARACTER IN circ_buf
 inc circ_ct  ;BUMP circ_buf COUNT
 CMP bx,circ_top ;ARE WE AT THE TOP OF THE circ_buf?
 JZ reset_in ;JUMP IF SO
 inc bx  ;ELSE, BUMP PTR
 JMP SHORT into_buf
reset_in:
 mov bx,OFFSET circ_buf ;RESET circ_in TO BOTTOM OF BUF.
into_buf:
 mov circ_in,bx  ;SAVE NEW PTR
clnup:
 mov AL,RSTINT
 OUT RS8259,AL ;ISSUE SPECIFIC EOI FOR 8259
 pop ds  ;GET BACK ENTERING DS
 pop ax
 pop bx
 pop dx
 pop cx
 sti
 iret
;
prog ends
 
end
 
*** COPIED 01/25/84 04:31:17 BY KSC ***
```
{% endraw %}

## CPRGRMS1.DOC

{% raw %}
```
CPRGRMS1 - C PROGRAMS - 10/01/83 - FROM CLUB88 DISKETTE

FILE NAME  TYPE  DESCRIPTION

CPRGRMS1   DOC   This file
CASYNC     AQM   C callable functions to support interrupt I/O
GETSEG-C   ASM   Get current segment values
GREP       EXE   Searches a file for a given pattern
GREP       CQ     Source for GREP (Lattice)
GREP       CQ6    Source for GREP (CI-86)
GREP       DOC    Documentation for GREP
IOS1-20    AQM   Level 1 I/O Functions for Lattice C Ver. 1.04
LEJ_LIB    CQ    Larry Jordan's test of C functions
MEMCLEAN   EXE   Set memory based on actual available
MEMCLEAN   CQ     Source for MEMCLEAN
MEMCLEAN   DQC    Documentation for MEMCLEAN
NAMES      CQ    Sample C name and address data base
RANDOM     C     Example for use of random number function
RANDOM     AQM   Random number function for Lattice C
SETPRTR    EXE   Setup MX-80 printer from Menu Screen
SETPRTR    CQ     Caprock Systems Small-c:pc source for SETPRTR.EXE
SWITCH1    C     Selects active display
TPRINT     EXE   Prints one 'C' function per page, etc.
TPRINT     CQ     Source for TPRINT
TPRINT     DOC    Documentation for TPRINT
XC         EXE   Cross reference C programs
XC         CQ     Source for XC (Lattice or CI-86)
XC         DOC    Documentation for XC

```
{% endraw %}

## CPRGRMS2.DOC

{% raw %}
```
CPRGRMS2 - C PROGRAMS - 10/01/83 - FROM CLUB88 DISKETTE

FILE NAME  TYPE  DESCRIPTION

CPRGRMS2   DOC   This file
C86SAMPL   BAT   BAT file for C86 compilation
C86MOD     DQC   How to modify C86 to use DOS 2.0 return codes
CC         EXE   C Source paren, bracket and comment checker
CC         CQ     Source for CC.C
CLS        C     Clear the screen from Lattice C (uses CSYSINT)
CRC        CQ    Cyclic Redundancy Check (CRC) functions
CSYSINT    AQM   Function to call any interrupt from Lattice C.
KERMITPC   EXE   Terminal program in C
KERMITPC   CQ     Source for KERMITPC
KERMITPC   HLP    Help for KERMITPC
LOCATE     CQ    LOCATE function for Lattice C (uses CSYSINT)
LUMP       C     Lump together a group of files.
MOVMEML    ASM   Two functions for Lattice C to access all memory
SQ         EXE   Squeeze size of a program
SQ         CQ6    Source for SQ
SWITCH     C86   Switch display monitors
TYPESQ     EXE   Type a squeezed ASCII program
TYPESQ     CQ6    Source for TYPESQ
UNLUMP     C     Break apart files lumped together by LUMP
USQ        EXE   Unsqueeze a squeezed program
USQ        CQ6    Source for USQ
XENIX      AQM   DOS 2.00 file support for Lattice C compiler
XENIX      OBJ    Linkable object

```
{% endraw %}

## CSYSINT.ASM

{% raw %}
```
PAGE   54,130
; CSYSINT  - Lattice "C" interface to the world
;
; This program was adapted from PSYSINT, a program listed
; and described by Will Fastie in SOFTALK Magazine, which
; provided access to system calls from IBM Pascal programs.
; It in turn was taken from George Eberhart's version for the
; Computer Inovations C86 Compiler, with permission.
;
; Modified by T. Cox to match the Microsoft C Compiler
; assembly language interface call conventions, and renamed
; to CSYSINT.
;
; C calling sequence:
;
;     flags = csysint(interrupt,&sreg,&rreg);
;
; Where sreg and rreg are structures of four words each representing
; the 8088 registers AX, BX, CX, and DX.  "regsetT is a structure
; defining these as all the half-register names (e.g.,AL,AH).
;
; interrupt is the number of the system interrupt desired.
;
; The return value is a 16-bit unsigned integer. It contains
; the machine status register.
;
; This C function calling sequence passes the interrupt code as a value
; and the two register sets as pointers to their respective structures.
;
; The incoming stack looks like this in memory locations "mem".  Note
; that the call is a NEAR call (page 1-36 of the Microsoft C manual),
; so only the return address (and not the segment address) is pushed.
;
;   High				      <-- Caller's BP
;	     mem + 06:	 interrupt code value
;	     mem + 04:	 SREG address
;	     mem + 02:	 RREG address
;	     mem + 00:	 caller's saved BP
;   Low 				      <-- BP, SP
;
PGROUP	GROUP  PROG
PARAMS	STRUC
OLD_BP	DW     ?		   ; Caller's BP Save
RETN	DW     ?		   ; Return address from call
ARG1	DW     ?		   ; First arguement
ARG2	DW     ?		   ; Second arguement
ARG3	DW     ?		   ; Third arguement
PARAMS	ENDS
;
PROG	SEGMENT BYTE PUBLIC 'PROG'
	ASSUME CS:PGROUP
	PUBLIC CSYSINT
;
CSYSINT PROC   NEAR
	PUSH   BP		   ; save caller's frame pointer
	MOV    BP,SP		   ; set up our frame pointer
;
	CALL   DUMMY		   ; trick - push the IP
DUMMY:
	POP    AX		   ; get it
	SUB    AX,OFFSET DUMMY	   ; calculate the address of the INT
	ADD    AX,OFFSET PINT
	MOV    DI,AX		   ; move it to the index register
	MOV    AX,[BP].ARG1	   ; get the desired interrupt number
	MOV    CS:[DI+1],AL	   ; put it in the INT instruction
	CALL   REGSIN		   ; get the registers from SREG
	PUSH   BP		   ; we'll need our own BP later
PINT:	INT    00H		   ; perform the requested interrupt
	POP    BP		   ; get our BP back
	PUSHF			   ; hang onto the flags for the return
	CALL   REGSOUT		   ; put the registers into RREG
	POP    AX		   ; flags are the return value
	POP    BP		   ; restore the caller's frame pointer
	RET			   ; return to caller
CSYSINT ENDP
;
; ---------------------------------
; Subroutines to move the registers in and out
;
NRREGS	EQU    4		   ; this version supports only four regs
;
REGSIN	PROC   NEAR		   ; -- Move Registers In
	MOV    BX,[BP].ARG2	   ; get address of register set SREG
	MOV    CX,NRREGS	   ; ...and how many registers to move
INLOOP:
	PUSH   WORD PTR [BX]	   ; push one
	INC    BX		   ; point to the next one
	INC    BX
	LOOP   INLOOP		   ; ..do it some more
	POP    DX		   ; now pop them into their proper places
	POP    CX
	POP    BX
	POP    AX
	RET			   ; all done
REGSIN	ENDP
;
REGSOUT PROC   NEAR		   ;--Move Registers Out
	PUSH   DX		   ; push all the registers in reverse order
	PUSH   CX
	PUSH   BX
	PUSH   AX
	MOV    BX,[BP].ARG3	   ; get the address of RREG
	MOV    CX,NRREGS	   ; ...and how many registers to move
LOOPOUT:
	POP    WORD PTR [BX]	   ; recover the register
	INC    BX		   ; point to the next
	INC    BX
	LOOP   LOOPOUT		   ; do it again
	RET
REGSOUT ENDP
;
PROG	ENDS
	END
```
{% endraw %}

## FILES314.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 314  C Source #1                                        v1   DS
------------------------------------------------------------------------
 
Everyone needs a grep function.  If you dont have one here is a good one
for yoy regardless of whice C compiler you use.  Also includes XENIX
whice is a very nice set of disk I/O routines that support all the DOS
features and UNLUMP to help build larger C programs.
 
C86MOD   DOC  How to make c86 programs return status to DOS 2.0 bat files
C86SAMPL BAT  Batch file to run c86 compiler
CASYNC   ASM  C interface to serial port.Includes XON XOFF buffered input
CC       C    C program that does the same thing as C86SAMPL.BAT !
CC       EXE  CC.C ready to run
CLS      C    C program to clear screen
CPRGRMS1 BAT  Copies all the files on this diskette to another disk
CPRGRMS1 DOC  Short descption of the files on this disk
CPRGRMS2 DOC          "               "
CRC      C    Does CRC error checking on blocks of data
CSYSINT  ASM  Nice interface between Lattic C and all the 8088 interupts
GETSEG-C ASM  Gets vaule for all the segment registors
GREP     C    GREP for Lattice C
GREP     C86  GREP for C86
GREP     DOC  GREP manual
IOS1-20  ASM  DOS disk I/O for Lattice C CREAT,OPEN,CLOSE,READ,WRIT,LSEEK
KERMITPC C    Reliable file transfer over unreliable I/O channels also
KERMITPC HLP  lets pc emmulate a TTY termial. Documentation on KERMIT
LEJ_LIB  C    Routines to count words ect, ASCII hex conversion ect.
LOCATE   C    C routine to position cursor on screen
LUMP     C    Lump a group of files together
MEMCLEAN C    Zeros memory to avoid parity checks
MEMCLEAN DOC  Documentation on MEMCLEAN
MOVMEML  ASM  C callable function to move memory
NAMES    C    Shows how to Access disk from C
RANDOM   ASM  Random number generator for C
RANDOM   C    Test for RANDOM.ASM
SETPRTR  C    Setup the parameters for EPSON printers
SQ       C86  Squeeze a text file into less space
SWITCH   C86  Change display type
SWITCH1  C    Change display mode
TPRINT   C    Prints files with page numbers headers ect.
TPRINT   DOC  Documentation for TPRINT
TYPESQ   C86  Type a squeezed file
UNLUMP   C    Seperate lumped files
USQ      C86  Unsqueeze a text file
XC       C    Cross reference utility for C programs
XC       DOC  Documtation for XC
XC       EXE  XC ready to run
XENIX    ASM  Source code for OPEN READ WRITE ect. supports full path names
XENIX    OBJ  XENIX ready to link. Lattic C
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## GREP.DOC

{% raw %}
```
                  GREP  --  File Scan Utility
                  ===========================


Converted to IBM PC CI-C86 C Compiler June 1983 by David N. Smith

Originally distributed by DECUS.

Neither Digital Equipment Corporation, DECUS, nor the authors assume any
responsibility for the use or reliability of this document or the described
software.

Copyright (C) 1980, DECUS

General permission to copy or modify, but not for profit, is hereby granted,
provided that the above copyright notice is included and reference made to
the fact that reproduction privileges were granted by DECUS.


Using GREP
----------

grep searches a file for a given pattern.  Execute by:

   grep [flags] regular_expression file_list


Flags are single characters preceeded by '-':

   -c      Only a count of matching lines is printed
   -f      Print file name for matching lines switch, see below
   -n      Each line is preceeded by its line number
   -v      Only print non-matching lines

The file_list is a list of files.

The file name is normally printed if there is a file given.
The -f flag reverses this action (print name no file, not if
more).



Regular Expressions
-------------------

The regular_expression defines the pattern to search for.  Upper- and
lower-case are always ignored.  Blank lines never match.  The expression
should be quoted to prevent file-name translation.

x      An ordinary character (not mentioned below) matches that character.

'\'    The backslash quotes any character.  "\$" matches a dollar-sign.

'^'    A circumflex at the beginning of an expression matches the
       beginning of a line.

'$'    A dollar-sign at the end of an expression matches the end of a line.

'.'    A period matches any character except "new-line".

':a'   A colon matches a class of characters described by the following
':d'     character.  ":a" matches any alphabetic, ":d" matches digits,
':n'     ":n" matches alphanumerics, ": " matches spaces, tabs, and
': '     other control characters, such as new-line.

'*'    An expression followed by an asterisk matches zero or more
       occurrances of that expression: "fo*" matches "f", "fo"
       "foo", etc.

'+'    An expression followed by a plus sign matches one or more
       occurrances of that expression: "fo+" matches "fo", etc.

'-'    An expression followed by a minus sign optionally matches
       the expression.

'[]'   A string enclosed in square brackets matches any character in
       that string, but no others.  If the first character in the
       string is a circumflex, the expression matches any character
       except "new-line" and the characters in the string.  For
       example, "[xyz]" matches "xx" and "zyx", while "[^xyz]"
       matches "abc" but not "axb".  A range of characters may be
       specified by two characters separated by "-".  Note that,
       [a-z] matches alphabetics, while [z-a] never matches.

The concatenation of regular expressions is a regular expression.

```
{% endraw %}

## IOS1-20.ASM

{% raw %}
```
title	Level 1 I/O Functions for Lattice 'c' Version 1.04
page	64,132
name	IOS1_20 ;DOS function calls 3DH, 3EH, 3FH, 40H, AND 42H.
comment |
   These functions take advantage of DOS 2.0 and will directly
replace the original level 1 I/O except that 'text mode' is
not supported.	DOS error numbers are saved at ERRNO and may be
checked by including: "extern short errno;" in your source files.
Note that the pmode parameter in creat is forced to zero, due to
a problem with Lattice's freopen which passes a 1A4H to creat.

	     Ted Reuss	   c/o South Texas Software, Inc.
	Home: 713/961-3926	4544 Post Oak Place, Suite 176
	Offi: 713/877-8205	Houston, Tx 77027
	|
	public	CREAT, OPEN, CLOSE, READ, WRITE, LSEEK
dgroup	group	data
data	segment word public 'data'
	assume	ds:dgroup

	public	ERRNO
ERRNO	dw	0	; DOS error number (DOS Manual page D-14)
data	ends

pgroup	group	prog
prog	segment byte public 'prog'
	assume	cs:pgroup

	subttl	CREAT -- create a new file
	page
;
; NAME
;	creat -- create a new file
;
; SYNOPSIS
;
;	file = creat(name, pmode);
;	int file;	file number or error code
;	char *name;	file name (valid drive\path\filespec)
;	int pmode;	access privilege mode bits, DOS attribute
;			NOTE: forced to zero in current version.
;
; DESCRIPTION
;
;	Creates a new file with the specified name and prepares is
;	for access via the level 1 I/O functions.  The file name
;	may consist of a valid drive and path name.  All I/O is
;	done via DOS calls 3fh (READ) and 40h (WRITE).	If the file
;	already exists, it's contents are discarded.  The current file
;	position and the end of file are both zero. (indicating an
;	empty file) if the function is successful. ERRNO is set to
;	the error number returned by DOS in the event of an error.
;
; RETURNS
;	file = file number to access file, if successful
;	     = -1 if error  (ERRNO get DOS error number)
;

	public	CREAT
CREAT	proc	near
	push	bp
	mov	bp,sp
	mov	dx,[bp+4]	;get ptr to drive\path\filespec
	xor	cx,cx
	mov	ah,3CH		;DOS create function
	int	21H
	jnc	cre10
	mov	dgroup:errno,ax
	mov	ax,-1
cre10:	mov	sp,bp
	pop	bp
	ret
CREAT	endp

	subttl	OPEN -- open a file
	page
;
; NAME
;	open -- open a file
;
; SYNOPSIS
;
;	file = open(name, rwmode);
;	int file;	file number or error code
;	char *name;	file name (valid drive\path\filespec)
;	int rwmode;	read/write mode, where 0=read, 1=write,
;			2=read/write
;
; DESCRIPTION
;
;	Opens a file for access using the level 1 I/O functions.
;	The file name may contain a valid drive and path name.	All
;	I/O is done via DOS functions 3fh (READ) and 40h (WRITE).
;	The mode word determines the type of I/O which will be
;	performed on the file.	The low order bits specify whether
;	read or write operations (or both) are to be allowed.
;	In the event of an error the error code passed by DOS is
;	saved at ERRNO.
;
; RETURNS
;
;	file = file number to access file, if successful
;	     = -1 if error  (ERRNO get DOS error number)
;

	public	OPEN
OPEN	proc	near
	push	bp
	mov	bp,sp
	mov	dx,[bp+4]	;get ptr to drive\path\filespec
	mov	ax,[bp+6]	;get mode
	mov	ah,3DH		;DOS open function
	int	21H
	jnc	opn10
	mov	dgroup:errno,ax
	mov	ax,-1
opn10:	mov	sp,bp
	pop	bp
	ret
OPEN	endp

	subttl	CLOSE -- close a file
	page
;
; NAME
;
;	close -- close a file
;
; SYNOPSIS
;
;	status = close(file);
;	int status;	status code: 0 if successful
;	int file;	file number for file
;
; DESCRIPTION
;
;	Close a file and frees the file number for use in accessing
;	another file.  Any buffers allocated when the file was
;	opened are released.
;
; RETURNS
;
;	status = 0 if successful
;	       = -1 if error  (ERRNO get DOS error number)
;

	public	CLOSE
CLOSE	proc	near
	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;get file handle
	mov	ah,3EH		;DOS close function
	int	21H
	jc     clo10
	xor	ax,ax
	jmp	short clo20
clo10:	mov	dgroup:errno,ax
	mov	ax,-1
clo20:	mov	sp,bp
	pop	bp
	ret
CLOSE	endp

	subttl	READ -- read data from file
	page
;
; NAME
;
;	read -- read data from file
;
; SYNOPSIS
;
;	status = read(file, buffer, length);
;	int status;	status code or actual length
;	int file;	file number for file
;	char *buffer;	input buffer
;	int length;	number of bytes requested
;
; DESCRIPTION
;
;	Reads next set of bytes from a file.  The return count
;	is always equal to the number of bytes placed in the buffer
;	and will never exceed the "length" parameter, except in the
;	case of an error, where -1 is returned.  The file position
;	is advanced accordingly.
;
; RETURNS
;
;	status = 0 if end of file
;	       = -1 if error  (ERRNO get DOS error number)
;	       = else number of bytes actually read
;

	public	READ
READ	proc	near
	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;get file handle
	mov	dx,[bp+6]	;get buffer address
	mov	cx,[bp+8]	;get byte count
	mov	ah,3FH		;DOS read function
	int	21H
	jnc	red10
	mov	dgroup:errno,ax
	mov	ax,-1
red10:	mov	sp,bp
	pop	bp
	ret
READ	endp

	subttl	WRITE -- write data to file
	page
;
; NAME
;
;	write -- write data to file
;
; SYNOPSIS
;
;	status = write(file, buffer, length);
;	int status;	status code or actual length
;	int file;	file number for file
;	char *buffer;	output buffer
;	int length;	number of bytes in buffer
;
; DESCRIPTION
;
;	Writes next set of bytes to a file.  The return count is
;	equal to the number of bytes written, unless an error
;	occurred.  The file position is advanced accordingly.
;
; RETURNS
;
;	status = -1 if error  (ERRNO get DOS error number)
;	       = else number of bytes actually written
;

	public	WRITE
WRITE	proc	near
	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;get file handle
	mov	dx,[bp+6]	;get buffer address
	mov	cx,[bp+8]	;get byte count
	mov	ah,40H		;DOS write function
	int	21H
	jnc	wrt10
	mov	dgroup:errno,ax
	mov	ax,-1
wrt10:	mov	sp,bp
	pop	bp
	ret
WRITE	endp

	subttl	LSEEK -- seek to specified file position
	page
;
; NAME
;
;	lseek -- seek to specified file position
;
; SYNOPSIS
;
;	pos = lseek(file, offset, mode);
;	long pos;	returned file position or error code
;	int file;	file number for file
;	long offset;	desired position
;	int mode;	offset mode relative to:
;			0 = beginning of file	    BOFM
;			1 = current file position   CURM
;			2 = end of file 	    EOFM
;
; DESCRIPTION
;
;	Changes the current file position to a new position in the
;	file.  The offset is specified as a long int and is added to
;	the current position (mode 1) or to the logical end of file
;	(mode 2).  Use DOS function 42h (LSEEK).
;
; RETURNS
;
;	pos = -1L if error occurred (ERRNO get DOS error number)
;	= new file position if successful
;

	public	LSEEK
LSEEK	proc	near
	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;get file handle
	mov	dx,[bp+6]	;get low word of pos
	mov	cx,[bp+8]	;get high word of pos
	mov	ax,[bp+10]	;get seek mode
	mov	ah,42H		;DOS lseek function
	int	21H
	jnc	lsk10
	mov	dgroup:errno,ax
	mov	ax,-1
	mov	dx,ax
lsk10:	mov	bx,ax
	mov	ax,dx
	mov	sp,bp
	pop	bp
	ret
LSEEK	endp

prog	ends
	end
```
{% endraw %}

## MOVMEML.ASM

{% raw %}
```
	TITLE 'MOVMEML Move memory long'
	COMMENT /*
*  Name:
*	movmeml
*
*  Synopsis:
*
*	movmeml(ss,s,ds,d,n);
*	unsigned ss;		source segment
*	char *s;		source memory block (offset)
*	unsigned ds;		destination segment
*	char *d;		destination memory block (offset)
*	unsigned n;		number of bytes to transfer.
*
*  Description
*	Moves memory from one location to another.  The function
*	calls executes the same code as movmem,but sets the segment regesters
*	ES and DS to the source segment and the destination segment.
*
*  Cautions
*	Care must be taken in where the data is moved..
*/
PGROUP	GROUP	PROG
MOVMEMA STRUC
OLD_BP	DW	?	;CALLER'S BP SAVE
RETN	DW	?	;RETURN ADDRESS
FROMS	DW	?	;FROM SEGMENT
FROMO	DW	?	;FROM OFFSET
TOARGS	DW	?	;TO SEGMENT
TOARGO	DW	?	;TO OFFSET
LEN	DW	?	;LENGTH TO MOVE (UNSIGNED)
MOVMEMA ENDS
PROG	SEGMENT BYTE PUBLIC 'PROG'
	PUBLIC	MOVMEML,RETDSEG
	EXTRN	MOVMEM:NEAR
	ASSUME	CS:PGROUP
SAVEDS	DW	?
SAVEES	DW	?
MOVMEML PROC	NEAR
	PUSH	BP
	MOV	BP,SP
	MOV	CX,[BP].LEN
	MOV	SI,[BP].FROMO
	MOV	DI,[BP].TOARGO
;
	PUSH	DS
	PUSH	ES
	MOV	AX,SS:[BP].TOARGS
	MOV	ES,AX
	MOV	AX,SS:[BP].FROMS
	MOV	DS,AX
;
	 CMP	   SI,DI
	 JB	   X1
	 CLD
	 JMP	   X2
X1:	 STD
	 ADD	   SI,CX
	 ADD	   DI,CX
	 DEC	   SI
	 DEC	   DI
X2:  REP MOVSB
	POP	ES
	POP	DS
	POP	BP
	RET
MOVMEML ENDP
	COMMENT /*
*  Name:
*	retdseg
*
*  Synopsis:
*
*	n = retdseg();
*	unsigned n;		contains the current data segment address
*
*  Description:
*	Returns the curren data segment (DS) address.
*/
RETDSEG PROC	NEAR
	MOV	AX,DS
	RET
RETDSEG ENDP
PROG	ENDS
	END
```
{% endraw %}

## RANDOM.ASM

{% raw %}
```
PAGE   54,130
; RANDOM   - Random number generator for C programs
;
; This routine returns 16-bit unsigned pseudo-random numbers
; of uniform distribution.  The numbers are computed according
; to the Linear Congruential method as described in Knuth's
; "Seminumerical Algorithms",  using  the formula (ax) mod (w+1)
; as described on pp 11-12.
;
; No parameters are passed to this routine; the return is unsigned.
;
; The seed for each call is preserved form the previous call.
; The routine is "self seeding"; if the seed is found to contain
; zeros a DOS Get Time (x'2C') call is used to obtain the time, and
; the seconds and 100ths of seconds are used as the seed for
; subsiquent calls.
;
; However, for applications which require duplicatable series of terms
; (such as when testing), the seed, XRAND, is defined as an EXTERN
; and may be initialized by the calling program (via assignment)
; prior to calling RANDOM.
;
; The initial values for the multiplier and constant are borrowed
; from "A Guide to PL/M Programming for Microcomputer Applications",
; by Daniel D. McCracken (Addison-Wesley, 1978).
;
PGROUP	GROUP  PROG
PARAMS	STRUC
OLD_BP	DW     ?		   ; Caller's BP Save
RETN	DW     ?		   ; Return address from call
PARAMS	ENDS
;
DGROUP	GROUP  DATA
DATA	SEGMENT WORD PUBLIC 'DATA'
	ASSUME DS:DGROUP
	PUBLIC XRAND
XRAND	DW     0		   ; "X" in formula - next/last term
MULTIP	DW     2053		   ; multiplier
MODULUS DW     65535		   ; constant
DATA	ENDS
PROG	SEGMENT BYTE PUBLIC 'PROG'
	ASSUME CS:PGROUP
	PUBLIC RANDOM
;
RANDOM	PROC   NEAR
	PUSH   BP		   ; save caller's frame pointer
	MOV    BP,SP		   ; set up our frame pointer
	MOV    AX,XRAND 	   ; move last random number to
	CMP    AX,0		   ; is it uninitialized?
	JNE    GETNXT		   ; ..no, skip this stuff
	MOV    AH,2CH
	INT    21H		   ; .. get time from DOS
	MOV    AX,DX		   ; initialize w/ seconds, 100ths
GETNXT: NEG    AX		   ; negate the register
	MUL    MULTIP		   ; 32-bit multipl goes in DX,AX
	MOV    XRAND,AX 	   ; save low order word for seed
	SUB    DX,XRAND 	   ; subtract low word from high
	JS     EXIT		   ; if negative, skip next steps
	INC    AX
	INC    AX		   ; increment term by 2
	ADD    AX,MODULUS	   ; add the increment
EXIT:	POP    BP		   ; restore the caller's frame pointer
	RET			   ; return to caller
RANDOM	ENDP
;
PROG	ENDS
	END
```
{% endraw %}

## XC.DOC

{% raw %}
```
                XC  -  A 'C' Concordance (Crossref) Utility
                ===========================================



Version 1.0   January, 1982

Copyright (c) 1982 by Philip N. Hisley

        Philip N. Hisley
        548H Jamestown Court
        Edgewood, Maryland 21040
        (301) 679-4606

Released for non-commercial distribution only


Converted to IBM/PC CI/C86 by David N. Smith, May/June 1983

        David N. Smith
        44 Ole Musket Lane
        Danbury, CT 06810
        (203) 748-5934

Changes Copyright (c) 1983 by David N. Smith

PC Enhancements include:

     1)  Nested #INCLUDE statements
     2)  Single spaced cross-reference list
     3)  Removal of tabbing on output device
         (Since many printers don't support it)
     4)  #INCLUDE statements with both "xx" and <xx>
         syntax and with a full fileid in the quotes.



Abstract:

'XC' is a cross-reference utility for 'C' programs.
Its has the ability to handle nested include files
to a depth of 8 levels and properly processes nested
comments as supported by BDS C. Option flags support
the following features:

- Routing of list output to disk
- Cross-referencing of reserved words
- Processing of nested include files
- Generation of listing only

Usage: xc <filename> <flag(s)>

Flags: -i            = Enable file inclusion
       -l            = Generate listing only
       -r            = Cross-ref reserved words
       -o <filename> = Write output to named file



```
{% endraw %}

## XENIX.ASM

{% raw %}
```
title MSDOS 2.00 Function Library for Lattice C
;
;........................................
;.					.
;.	DOS 2.00 Functions for		.
;.	       Lattice			.
;.					.
;.	T. Jennings 23 June 83		.
;.	  created 13 Sept 82		.
;.					.
;........................................
;
;MSDOS 2.00 support for Lattice. These will NOT
;work for version 1.xx of DOS. All support full
;paths. The function names are the same as the
;standard library names with "_x" prepended, to
;accomodate my file system nameing heirarchy.
;
;NOTE: You cannot mix these calls with the 
;Lattice library calls: i.e. open with _xopen()
;and write with open(). You must use ALL or
;NONE.
;
;These functions all use the DOS buffers. 
;
;Detailed info is given in the title block for
;each function. A quick description follows.
;
;handle= _xopen(pathname,access);
;int handle,access;
;char *pathname;
;
;	Open a file. handle returns either 
;the DOS handle, or -1 if error (file not 
;found). Access is: 0 == read only, 1 == write
;only, 2 == read/write.
;
;handle= _xcreate(pathname,access);
;
;	Create a new file, delete any existing
;copy. Access is not used: use 0. Returns the
;handle or -1 if error.
;
;v= _xread(handle,buffer,count);
;v= _xwrite(handle,buffer,count);
;int v,handle,count;
;char *buffer;
;
;	File read or write to an opened or
;created file. reads or writes 'count' bytes
;to the file 'handle', to or from 'buffer'.
;Returns the number of bytes processed: equal
;to 'count' if sucessful.
;
;error= _xclose(handle)
;int error;
;
;	Close an open file. Returns -1 if 
;error. Any buffers are flushed at this point.
;
;_xdelete(pathname);
;
;	Remove the file from the file
;system.
;
;fsize= _fsize(pathname);
;long fsize;
;
;	Returns the size of the file in bytes.
;Returns 0 if no file. Do NOT call inbetween
;calls to _xfind().
;
;found= _xfind(pathname,filename,&fsize,attrib,flag);
;int found,flag,attrib;
;char *pathname,filename[14];
;long fsize;
;
;Search for the specified pathname. flag should
;be 0 for the first call, non-zero for all
;subsequent calls. _xfind() returns true if a
;match was found, and the found file is 
;returned in filename[], in ASCIZ format.
;Attrib is the DOS attributes to match; I
;will not describe that mess here. _xfind()
;returns the size of the file in fsize. (Don't
;forget to pass the address of fsize.)
; For example:
;
;int i;
;char filename[14];
;long fsize;
;
;	i= 0;
;	while (_xfind("\\bin\\*.*",filename,&fsize,0,i)) {
;		printf("File: %14s Size: %lu\n",filename,fsize);
;		++i;
;	}
;	printf("%u matching files.\n",i);
;
;Prints the names of all matching disk files. 
;Any other calls (except_fsize()) can be made
;in between calls to _xfind().
;
dgroup group data
pgroup group prog

prog segment byte public 'prog'

public	_xopen,_xcreate,_xclose
public	_xread,_xwrite
public	_xfind
public	_fsize
public 	_xdelete
assume cs:pgroup,ds:dgroup
;;
;;	handle= _xcreate(name,access)
;;	handle= _xopen(name,access)
;;
;;	int handle;		-1 if error,
;;	int access;		0=r, 1=w, 2=r/w
;;	char *name;		null terminated
;;
;;Open and create functions. The name is a null
;;terminated string. The access byte is passed
;;directly to DOS. All errors are translated to
;;a -1 return value.
;;
_xopen proc near
	mov	ah,61
	jmp	short opncrt
_xcreate proc near
	mov	ah,60

opncrt:	push	bp
	mov	bp,sp
	mov	dx,[bp+4]	;pathname,
	mov	al,[bp+6]	;access,
	xor	bx,bx
	xor	cx,cx
	int	21h		;do it,
	jnc	opncrt1
	mov	ax,-1		;error!
opncrt1:pop	bp
	ret

_xcreate endp
_xopen endp
;;
;;xclose(handle)
;;int handle;
;;
;;Close a handle opened by XOPEN or XCREATE.
;;Returns -1 if close error.
;;
_xclose proc near
	mov	ah,62
	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;handle,
	int	21h
	pop	bp
	ret

_xclose endp
page
;;
;;	count= xread(handle,buffer,size)
;;	count= xwrite(handle,buffer,size)
;;
;;	int count;	bytes actually r/w
;;	int handle;
;;	char *buffer;
;;	int size;	byte count,
;;
;;	Read or write (size) bytes from the
;;file (handle). The return value is the number 
;;of bytes actually processed.
;;
;;	No text translation is done. All
;;bytes are processed as read or written. No
;;check is done (or is possible) on the buffer
;;size.
;;
_xread proc near
	mov	ah,63
	jmp	short rdwrt
_xwrite proc near
	mov	ah,64

rdwrt:	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;handle,
	mov	cx,[bp+8]	;count,
	mov	dx,[bp+6]	;buffer,
	int	21h
	pop	bp
	ret

_xwrite endp
_xread endp
page
;;
;;	ret= xfind(path,name,size,attrib,first)
;;	int ret;		0 if no match
;;	char *path;
;;	char *name;		dest name,
;;	long *size;		ptr to file siz
;;	int attrib;		attributes
;;	int first;		0 if 1st time,
;;
;;Find the Nth occurence of pathname. Returns
;;0 when no match. Only the filename portion
;;can contain wildcards. The returned filename
;;does not contain the path portion of the 
;;input string.
;;	Not recursive. Do not call _FSIZE
;;inbetween _XFIND calls.
;;
xfpath	equ	4	;path pointer,
xfname	equ	6	;retnd name,
xfsize	equ	8	;file size ptr,
xfaccess equ	10	;access,
xfflag	equ	12	;first time flag,

_xfind proc near
	push	bp
	mov	bp,sp
	mov	ah,26		;set DMA addr
	mov	dx,offset dgroup:xfbuf
	int	21h		;to buffer,
	test word ptr [bp+xfflag],-1
	mov	ah,78		;do right call,
	jz	xf1
	mov	ah,79		;0 == 1st time,
xf1:	mov	dx,[bp+xfpath]	;path name,
	mov	cx,[bp+xfaccess];access,
	int	21h
	mov	ax,0		;ret if no
	jc	xfr		;match,
;
;Copy the file size in.
;
	mov	bx,[bp+xfsize]	;size ptr,
	mov	ax,fsize
	mov	[bx],ax
	mov	ax,fsize+2
	mov	[bx+2],ax

	mov	di,[bp+xfname]	;dest string,
	mov	si,offset dgroup:fname
	mov	cx,12
	cld
;
;Fix a "slight" XENIX bug: Delete trailing 
;spaces, else it fails OPENs.
;
xf2:	lodsb			;get a byte,
	cmp	al,0		;if null
	je	xf3
	cmp	al,' '		;or space,
	je	xf3		;stop,
	stosb
	loop	xf2		;max 11 chars	
xf3:	mov byte ptr [di],0	;terminate,
	mov	ax,1		;good return.
xfr:	pop	bp
	ret
_xfind endp
page
;;
;;	fsize= _fsize(filename)
;;	long fsize;
;;	char *filename;
;;
;;Return the size of a file, in bytes. Returns
;;0 if file not found. Filename can contain
;;a path.
;;
;;Cannot be called in between any _XFIND calls.
;;
_fsize proc near
	push	bp
	mov	bp,sp
	mov	ah,26		;set DMA addr
	mov	dx,offset dgroup:xfbuf
	int	21h		;to buffer,
	mov	ah,78		;search 1st,
xs1:	mov	dx,[bp+4]	;path name,
	mov	cx,0
	int	21h
	mov	ax,0		;ret if no
	mov	bx,0		;match,
	jc	xsr

	mov	bx,fsize
	mov	ax,fsize+2
xsr:	pop	bp
	ret
_fsize endp
page
;
;error= _xdelete(path);
;int error;
;char *path;
;
_xdelete proc near
	push	bp
	mov	bp,sp
	mov	dx,[bp+4]
	mov	ah,41h
	int	21h
	mov	ax,0
	sbb	ax,0
	pop	bp
	ret
_xdelete endp

prog ends
page
data segment word public 'data'
;
;Structure for the FindFirst and FindNext
;function XFIND. NOT REENTRANT.
;
xfbuf	db	(?)	;search attrib
	db	(?)	;drive,
	db 11 dup (?)	;name,
	dw	(?)	;last ent
	dd	(?)	;DPB,
	dw	(?)	;dir start

	db	(?)	;attrib found,
	dw	(?)	;time?
	dw	(?)	;date?
fsize	dw	(?)	;size low
	dw	(?)	;size hi,
fname	db 13 dup (?)	;packed name,

data ends	

	end
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0314

     Volume in drive A has no label
     Directory of A:\

    C86MOD   DOC      2904   7-29-84   4:00p
    CSYSINT  ASM      3728   7-29-84   4:07p
    C86SAMPL BAT       825   7-28-83   8:13p
    MEMCLEAN C        4662   7-29-84   4:08p
    CASYNC   ASM     10544   7-29-84   4:00p
    CC       C        6305  12-27-84   7:13a
    MEMCLEAN DOC      3712   7-29-84   4:08p
    CC       EXE     11904   3-08-84   7:28a
    CLS      C        1857  12-18-83  12:19a
    CPRGRMS1 BAT       486   4-20-84  11:23p
    CPRGRMS1 DOC      1279   4-20-84  11:24p
    NAMES    C        5120   7-29-84   4:08p
    CPRGRMS2 DOC      1255   4-20-84  11:23p
    CRC      C        5089   7-29-84   4:00p
    RANDOM   ASM      2392   7-29-84   4:08p
    LEJ_LIB  C        6009   7-29-84   4:14p
    GETSEG-C ASM      2047  12-29-83   4:16p
    GREP     C       14695   7-29-84   4:00p
    GREP     C86     14737   7-29-84   4:00p
    SETPRTR  C        5374   7-29-84   4:08p
    SQ       C86     21534   7-29-84   4:09p
    GREP     DOC      3071  12-18-83  12:04a
    TPRINT   C        3584   7-29-84   4:09p
    IOS1-20  ASM      7161   7-29-84   4:00p
    KERMITPC C       31290   7-29-84   4:01p
    TYPESQ   C86      5803   7-29-84   4:09p
    KERMITPC HLP      4864   9-13-83   6:09p
    XC       C       21836   7-29-84   4:14p
    LOCATE   C        2178   7-29-84   4:01p
    USQ      C86      6172   7-29-84   4:09p
    LUMP     C        1099  12-30-83   1:33p
    MOVMEML  ASM      1618  12-14-83   9:29p
    RANDOM   C         296  12-14-83   9:29p
    SWITCH   C86       988  12-18-83  12:21a
    SWITCH1  C        2874  12-29-83   4:06p
    TPRINT   DOC      1664  12-20-83  12:22p
    UNLUMP   C        1437  12-30-83   1:25p
    XC       DOC      1531   8-08-83   9:13p
    XC       EXE     19072   1-01-84  12:13p
    XENIX    OBJ       640  12-20-83  12:07p
    XENIX    ASM      7296   7-29-84   4:09p
    FILES314 TXT      2688   5-23-85   1:14p
           42 file(s)     253620 bytes
                           49152 bytes free
