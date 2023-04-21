---
layout: page
title: "PC-SIG Diskette Library (Disk #135)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0135/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0135"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROGRAMERS UTILITIES #3"

    This disk contains many utility programs to facilitate modeming in
    special situations.  For instance, included here is LAR, a program to
    manipulate CP/M LU format libraries.  The primary use of LAR is to
    combine several files together for upload/download to a personal
    computer.  There are also utilities for patches and ways to get around
    different problems with a BASIC Compiler.
    
    How to Start: Read the files suffixed .DOC or .TXT for directions and
    documentation.  To run any file suffixed .EXE or .COM, just type its
    name, i.e. for X.COM, type X and press <ENTER>.
    
    File Descriptions:
    
    APLCHIP  DOC  Where to get an APL character generator chip for IBM APL
    BASRUN   PAT  Fixes for BASRUN.LIB  (See BASCOM.TXT)
    BASLIB   PAT  Fixes for BASCOM.LIB
    BASCOM   TXT  Instructions for program to fix all BASIC Compiler bugs!
    BASCOM   PAT  Fixes for BASCOM.COM  (See BASCOM.TXT)
    DOSFTE   PAS  Part of DOSFUN.PAS
    DOSFUN   INC  Part of DOSFUN.PAS
    DOSFUN   PAS  Procedures for extended DOS file access from Pascal
    DRIVER   ASM  Interrupt driven comm I/O driver for Lattice c
    FILKQQ   INC  Part of DOSFUN.PAS
    DRIVER   OBJ  Linkable module for above
    IBMPCTIP DOC  Tips on using PCDOS
    FILUQQ   INC  Part of DOSFUN.PAS
    LAR      EXE  Program to combine files into libraries to save space
    LAR      DOC  Documentation for file library program
    PRTSCRN  ASM  Replacement print screen driver, filters ctrl chars
    PATCHER  BAS  Program to apply patches to IBM BASIC  (See BASCOM.TXT)
    PAD      WKS  123 desktop-type worksheet, lots of useful functions
    SCAV2XX  ASM  Program to make diskette with bad sectors useable
    PRTSCRN  COM  Executable version of above
    SYSCOM   INC  Assembly language includes for DOS functions
    SCAV2XX  COM  Executable version of above
    READ     ME   Listing of included files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## APLCHIP.DOC

{% raw %}
```
 Hello APL enthusiasts

 There is a new product available which will allow you to display all
standard APL characters on your IBM Monochrome Monitor.

 The product is a replacement chip for the current character set generator.
Installation is quick and easy.  Some ASCII characters (non-standard codes,
the ones over 127) have been changed to display the APL characters.  Thus,
you can use APL on your IBM Monochrom Monitor.

 Please note that this only works with IBM APL, not STSC's APL*PLUS.

 The price is $39.95 (Calif. residents add 6% sales tax), plus $2.00 for
shipping and handling.  You may order it from:
    Computronix
    1638 Fairgreen Drive
    Fullerton, CA  92633

 It is part number 72041.  Computronix's phone number is: (714) 773-1879.

 Enjoy!!!


Drive
    Fullerton, CA  92633

 It is part number 72041.  Computronix's phone number is: (714) 773
```
{% endraw %}

## BASCOM.TXT

{% raw %}
```

There has been numerous patches of the IBM Basic Compiler V 1.00 available
from bulletin boards but I was never able make them to work when patched
at the same time.
On Dec.8, 1983 I received official letter from IBM including 25 pages of
patches and ways to get around different problems with BASIC Compiler.
These patches include all earlier known patches (fixed) and some more.

Since there is no way I would even attempt to type those on disk I have
patched my compiler with all given patches and extensively tested those out
by compiling several large and complicated programs and so far everything
works fine.

I have created three patch files which include all patches.
You will need the following files to be able to apply all patches:

BASCOM	 TXT	 1462				This file

BASCOM	 PAT	  470				for BASCOM.COM
BASRUN	 PAT	 1648				for BASRUN.EXE
BASLIB	 PAT	  996				for BASCOM.LIB

BASCOM	 COM	41600	5-07-82  12:00p 	Original
BASRUN	 EXE	31744	5-07-82  12:00p 	   unpatched
BASCOM	 LIB   103936	5-07-82  12:00p 	      files

PATCHER  BAS	 2244				Patcher program


The copies of those 25 pages are also available to SYSOP's when you send
me self addressed envelope (9" x 12") with $1.10 stamps on it.  I am
afraid to offer those to everybody since I might end up purchasing a Xerox
machine for myself if I get too many inquiries.

	Kauko J. Laurinolli
	671 Lost Creek Circle
	Stone Mountain, GA 30088

Dec. 28, 1983

** NOTE ** I observed different .PAT file sizes than what is indicated above.
I applied the patches anyway and the resulting files (BASCOM.COM ...) WERE
the indicated  "patched" size - and a test compile did work.
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #135, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  BASCOM  .PAT         CRC = C1 66

--> FILE:  BASCOM  .TXT         CRC = 24 1A

--> FILE:  BASLIB  .PAT         CRC = 9C AD

--> FILE:  BASRUN  .PAT         CRC = 36 59

--> FILE:  DOSFTE  .PAS         CRC = 34 84

--> FILE:  DOSFUN  .INC         CRC = D2 2F

--> FILE:  DOSFUN  .PAS         CRC = 42 C2

--> FILE:  FILKQQ  .INC         CRC = 55 F7

--> FILE:  FILUQQ  .INC         CRC = E9 F6

--> FILE:  LAR     .DOC         CRC = 37 D1

--> FILE:  LAR     .EXE         CRC = 5F D5

--> FILE:  APLCHIP .DOC         CRC = 12 40

--> FILE:  PAD     .WKS         CRC = 06 72

--> FILE:  PATCHER .BAS         CRC = 3F 59

--> FILE:  SYSCOM  .INC         CRC = AF 84

--> FILE:  DRIVER  .ASM         CRC = 18 1B

--> FILE:  IBMPCTIP.DOC         CRC = 20 E4

--> FILE:  SCAV2XX .COM         CRC = 57 7E

--> FILE:  SCAV2XX .ASM         CRC = 49 36

--> FILE:  DRIVER  .OBJ         CRC = 33 F9

--> FILE:  READ    .ME          CRC = 17 A7

--> FILE:  PRTSCRN .ASM         CRC = B4 08

--> FILE:  PRTSCRN .COM         CRC = 45 75

 ---------------------> SUM OF CRCS = FF ED

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## DRIVER.ASM

{% raw %}
```
title IBM PC Communications I/O Routines -- Curt Klinsing
pgroup  group   prog
prog segment byte public 'prog'
;
;A set  of Lattice C callable functions to support
;interrupt driven character I/O on the  IBM PC. Input
;is buffered, output is polled.
;
public  init_comm       ;initialize the comm port,
public  uninit_comm     ;remove initialization,
public  set_xoff                ;enable/disable XON/XOFF,
public  get_xoff                ;read XON/XOFF state,
public  rcvd_xoff       ;returns true if XOFF rcvd,
public  sent_xoff       ;true if XOFF sent,
public  inp_cnt         ;returns count of rcv chars,
public  inp_char                ;get one char from buffer,
public  inp_flush       ;flush input buffer,
public  outp_char       ;output a character,
;
;A better description can be found in the comment
;block  in each function.
;
        assume  cs:pgroup

;
FALSE   EQU     0
TRUE    EQU     NOT FALSE
;
BASE    EQU     03F8H   ;BASE FOR SERIAL BOARD
;
LCR     equ     BASE+3  ; Line control register
IER     equ     BASE+1  ; Interrup Enable Register
MCR     EQU     BASE+4  ;modem control register
EnblDRdy equ    01H     ; enable 'data-ready' interrupt bit
IntCtlr  EQU    21H     ;OCW 1 FOR 8259 CONTROLLER
EnblIRQ4 EQU    0EFH    ;Enable COMMUNICATIONS (IRQ4)
DATAPORT EQU    BASE    ;transmit/receive data port
MaskIRQ4 EQU    10H     ;BIT TO DISABLE COMM INTERRUPT (IRQ4)

MDMSTA  EQU     BASE+5  ;line status register
MDMMSR  EQU     BASE+6  ;modem status register
MDMBAD  EQU     BASE    ;lsb baud resgister
MDMBD1  EQU     BASE+1  ;msb baud rate register
MDMCD   EQU     80H     ;mask for carrier dectect
SETBAU  EQU     80H     ;code for Divisor Latch Access Bit
MDMTBE  EQU     20H     ;8250 tbe flag
MDMBRK  EQU     40H     ;command code for 8250 break
LINMOD  EQU     03H     ;line mode=8 bit, no parity
MDMMOD  EQU     0BH     ;modem mode = DTR and RTS HIGH
STOP2   EQU     04H     ;BIT FOR TWO STOP BITS IF BAUD<300
RS8259  EQU     20H     ;OCW 3 FOR 8259
RSTINT  EQU     64H     ;SPECIFIC EOI FOR COMM INTERRUPT 
XOFF    EQU     13H     ;XOFF character
XON     EQU     11H     ;XON character
;
;       MISCELLANEOUS EQUATES
;
CR      EQU     13
LF      EQU     10
DosCall EQU     33      ;INTERRUPT NUMBER FOR DOS CALL  
CNSTAT  EQU     11      ;FUNCTION NUMBER FOR CONSOLE STATUS
CNIN    EQU     1       ;FUNCTION NUMBER FOR CONSOLE INPUT
BUFSIZ  EQU     512     ;Max NUMBER OF CHARS
SetIntVect  EQU 25H     ;SET INTERRUPT VECTOR FUNCTION NUMBER

;
;       DUMP BUFFER, COUNT AND POINTER.  
;
CIRC_BUF DB     BUFSIZ DUP(?)   ;ALLOW 512 MaxIMUM BUFFERED CHARACTERS
BUF_TOP EQU     $ - 1           ;KEEP TRACK OF THE TOP OF THE BUFFER
CIRC_TOP DW     BUF_TOP         ;
;
CIRC_IN DW      OFFSET CIRC_BUF ;POINTER TO LAST CHAR. PLACED IN BUFFER
CIRC_CUR DW     OFFSET CIRC_BUF ;POINTER TO NEXT CHAR. TO BE RETRIEVED FROM
                                ; BUFFER
CIRC_CT DW      0               ;COUNT OF CHARACTERS USED IN BUFFER
SNT_XOFF DB     FALSE           ;FLAG TO CHECK IF AN XOFF HAS BEEN SEND
GOT_XOFF  DB    FALSE           ;FLAG TO CHECK IF AN XOFF HAS BEEN RECEIVED
SEE_XOFF  DB    FALSE           ;FLAT TO SEE IF WE ARE INTERESTED IN XON/XOFF
;
;
;
;set_xoff(flag)         Enable (flag != 0) or disable
;int flag;              (flag == 0) XON/ XOFF protocol
;                       for the character input stream.
;If enabled, an XOFF will be sent when  the buffer
;reaches 3/4 full. NOTE: an XON will not be sent auto-
;matically. Your program must do it when it sees
;the rcvd_xoff() flag,  and ready for more chars.
;
set_xoff proc near
        push    bp
        PUSH    DS              ;SAVE DATA SEGMENT
        mov     bx,[bp+6]       
        push    cs
        pop     ds              ; move code seg addr to data seg reg.
        cmp     bx,0
        jnz     to_on
        mov     see_xoff,FALSE
        jmp     done1
to_on:  mov     see_xoff,TRUE
done1:  pop     ds
        pop     bp
        ret
set_xoff endp
;
;flag=  get_xoff()      Returns the current setting
;                       of the XON/ XOFF flag set
;by set_xoff(), above.
;
get_xoff proc near
        push    bp
        push    ds              ; save data reg
        push    cs
        pop     ds              ; move code seg addr to data seg reg.
        xor     ax,ax
        mov     al,see_xoff
        pop     ds
        pop     bp
        ret
get_xoff endp
;
;flag=  sent_xoff();    Returns true if an XOFF
;                       character was sent, indicating
;the receive buffer is  3/4 full.
;
sent_xoff proc  near
        push    bp
        push    ds              ; save data reg
        push    cs
        pop     ds              ; move code seg addr to data seg reg.
        xor     ax,ax
        mov     al,snt_xoff
        pop     ds
        pop     bp
        ret
sent_xoff endp
;
;rcvd_xoff()            Returns true if an XOFF was
;                       received; will return false as
;soon as an XON is received. Does not effect data output,
;only indicates the above. (Obviously useless for binary
;data.)
;
rcvd_xoff proc  near
        push    bp
        push    ds              ; save data reg
        push    cs
        pop     ds              ; move code seg addr to data seg reg.
        xor     ax,ax
        mov     al,got_xoff
        pop     ds              ; restore data reg
        pop     bp
        ret
rcvd_xoff endp
;
;count= inp_cnt()       Returns the number of characters
;                       available in the input buffer.
;

inp_cnt proc near       
        push    bp
        push    ds              ; save data segment
        push    cs
        pop     ds              ; move code seg addr to data seg reg
        mov     ax,circ_ct
        pop     ds
        pop     bp
        ret
inp_cnt endp
;
;inp_flush()    Flush the input buffer.
;
inp_flush proc  near    
        push    bp
        push    ds              ; save data reg
        push    cs
        pop     ds              ; move code seg addr to data seg reg.
        mov     bx,offset circ_buf
        mov     circ_in,bx      
        mov     circ_cur,bx
        xor     ax,ax
        mov     circ_ct,ax
        pop     ds
        pop     bp
        ret
inp_flush endp

; --------- Init -----------------------------------
; Program initialization:
;   --  Set up vector for RS232 interrupt (0CH)
;   --  Enbl IRQ4
;   --  Enbl RS232 interrupt on data ready
;
; ---------------------------------------------------

init_comm proc  near
        push    bp
        cli

;  ---- Set up  INT x'0C' for IRQ4

        push    ds
        push    cs
        pop     ds              ;cs to ds
        mov     dx,offset IntHdlr ;relative adddres of interrupt handler
        mov     al,0cH          ;interrupt number for comm.
        mov     ah,SetIntVect   ;function number for setting int vector
        int     DosCall         ;set interrupt in 8086 table
        pop     ds              ;restore DS

;  ---- Enbl IRQ4 on 8259 interrupt controller

        cli

        in      al,IntCtlr      ; get current masks 
        and     al,EnblIRQ4     ; Reset IRQ4 mask
        out     IntCtlr,al      ; And restore to IMR

;  ---   Enbl 8250 data ready interrupt

        mov     dx,LCR          ; DX ==> LCR
        in      al,dx           ; Reset DLAB for IER access
        and     al,7FH
        out     dx,al
        mov     dx,IER          ; Interrupt Enbl Register
        mov     al,EnblDRdy     ; Enable 'data-ready' interrupt
        out     dx,al

;  ---   Enbl OUT2 on 8250

        mov     dx,MCR          ; modem control register        
        mov     al,08H          ; Enable OUT2
        out     dx,al

        sti

        pop     bp
        ret
init_comm endp
;
;uninit_comm()          Removes the interrupt structure
;                       installed by init_comm(). Must be
;done before passing control to the DOS, else chars received
;will be stored into the next program loaded!
;
uninit_comm proc near
        push    bp
; ---   Disable IRQ4 on 8259

        cli
        in      al,IntCtlr      ;GET OCW1 FROM 8259
        or      al,MaskIRQ4     ;DISABLE COMMUNICATIONS INTERRUPT
        out     IntCtlr,al

; ---   Disable 8250 data ready interrupt
        
        mov     dx,LCR          ; DX ==> LCR
        in      al,dx           ; Reset DLAB for IER access
        and     al,7FH
        out     dx,al
        mov     dx,IER          ; Interrupt Enbl Register
        mov     al,0            ; Disable all 8250 interrupts
        out     dx,al

;  ---   Disable OUT2 on 8250

        mov     dx,MCR          ; modem control register        
        mov     al,0            ; Disable OUT2
        out     dx,al

        sti
                pop     bp
        ret
uninit_comm endp
;
;char inp_char()        Return a character from the input
;                       buffer. Assumes you have called
;inp_cnt() to see if theres any characters to get.
;
inp_char proc near      
        push    bp
        push    ds              ; save data reg
        push    cs
        pop     ds              ; move code seg addr to data seg reg.
        mov     bx,circ_cur
        xor     ax,ax
        mov     al,[bx]         ;get next char from circ_buf
        DEC     circ_ct         ;decrement circ_buf COUNT
        CMP     bx,circ_top     ;ARE WE AT THE TOP OF THE circ_buf?
        JZ      reset_cur       ;JUMP IF SO
        INC     bx              ;ELSE, BUMP PTR
        JMP SHORT upd_cur
reset_cur:
        mov     bx,OFFSET circ_buf      ;RESET circ_in TO BOTTOM OF BUF.
upd_cur:
        mov     circ_cur,bx             ;SAVE NEW PTR
        xor     cx,cx
        mov     cl,see_xoff     ;check if interested in xon/xoff
        cmp     cl,TRUE
        jnz     clnup2          ;not interested, so goto return
        cmp     snt_xoff,TRUE   ;have we sent an xoff?
        jnz     clnup2          ;no, so return
        cmp     circ_ct,80h     ;yes, so see in buf is now emptying
        jg      clnup2          ;not empty enuf to send xon, jump to ret
        mov     snt_xoff,FALSE
        mov     cl,XON
        push    ax              ; save char
        call    comout
        pop     ax
clnup2: pop     DS              ;GET BACK ENTERING DS
        pop     bp
        ret
inp_char endp
;
;outp_char(c)           Output the character to the
;char c;                serial port. This is not buffered
;                       or interrupt driven.
;
outp_char proc  near
        push    bp
        mov     bp,sp
        mov     cl,[bp+4]
        sti
        call    comout
        pop     bp
        ret
outp_char endp
;
;Local  subroutine: output CL to the port.
;
comout: mov     dx,MDMSTA       
        in      al,dx           ; get 8250 status
        and     al,MDMTBE       ; check for transmitter ready
        jz      comout          ; jump if not to wait
        mov     al,cl           ; get char to al
        mov     dx,DATAPORT     
        out     dx,al           ; output char to 8251
        ret
;
;       RECEIVE INTERRUPT HANDLER (CHANGED TO PLACE CHARACTERS IN A
;        CIRCULAR circ_buf AND TO SEND AN XOFF IF THE circ_buf IS MORE THAN
;        3/4 FULL - S.G.)
;
IntHdlr:
        CLI
        push    cx
        push    dx
        push    bx
        push    ax
        push    ds
        mov     ax,cs           ;get cur code segment
        mov     ds,ax           ; and set it as data segment
        mov     bx,circ_in      ;GET circ_buf IN PTR
        mov     DX,DATAPORT     ;GET DATA PORT NUMBER
        IN      AL,DX           ;GET RECEIVED CHARACTER
;       push    ax
;       push    dx   
;       xor     ax,ax
;       xor     dx,dx
;       mov     dl,al
;       mov     ah,2
;       int     DosCall
;       pop     dx
;       pop     ax
        xor     cx,cx
        mov     cl,see_xoff     ;check if interested in xon/xoff
        cmp     cl,TRUE
        jnz     ck_full         ;not interested goto ck if buf full
        mov     cl,al           ;put char in cl for testing
        and     cl,7fh          ;turn off any parity bits 
        cmp     cl,XOFF         ;see if we got an xoff
        jnz     ck_xon
        mov     got_Xoff,TRUE   ; code for handling xon/xoff from remote
        jmp     clnup
ck_xon: cmp     cl,XON
        jnz     reg_ch
        mov     got_Xoff,FALSE
        jmp     clnup
;
;Normal character; not  XON/XOFF, or XON/XOFF disabled.
;
reg_ch: test    snt_Xoff,TRUE   ;SEE IF sentXoff IS SET
        jnz     ck_full         ;IF SO, DON'T SEND ANOTHER XOFF
        CMP     circ_ct,(BUFSIZ * 3)/4  ;ALLOW BUF TO BECOME 3/4 FULL BEFORE
                                        ; SENDING XOFF
        jb      savch           ;IF IT'S OK, CONTINUE
        push    ax              ;SAVE CHARACTER
        mov     CL,XOFF         ;GET XOFF CHARACTER
        mov     snt_Xoff,TRUE  ;RESET sentXoff
        call    comout          ; AND SEND IT
        pop     ax              ;RETRIEVE CHARACTER
        JMP SHORT savch         ;IF WE'RE HERE, THE circ_buf HAS BUFSIZ-80H
                                ;  CHARACTERS
ck_full:
        CMP     circ_ct,BUFSIZ  ;SEE IF circ_buf ALREADY FULL
        JZ      clnup           ; JUMP IF SO, DO NOT PLACE CHARACTER IN BFR
savch:                          
        mov     [bx],AL         ;SAVE NEW CHARACTER IN circ_buf
        inc     circ_ct         ;BUMP circ_buf COUNT
        CMP     bx,circ_top     ;ARE WE AT THE TOP OF THE circ_buf?
        JZ      reset_in        ;JUMP IF SO
        inc     bx              ;ELSE, BUMP PTR
        JMP SHORT into_buf
reset_in:
        mov     bx,OFFSET circ_buf      ;RESET circ_in TO BOTTOM OF BUF.
into_buf:
        mov     circ_in,bx              ;SAVE NEW PTR
clnup:
        mov     AL,RSTINT
        OUT     RS8259,AL       ;ISSUE SPECIFIC EOI FOR 8259
        pop     ds              ;GET BACK ENTERING DS
        pop     ax
        pop     bx
        pop     dx
        pop     cx
        sti
        iret
;
prog    ends

end
```
{% endraw %}

## LAR.DOC

{% raw %}
```
Lar - LU format library file maintainer
by Stephen C. Hemminger
linus!sch or sch @Mitre-Bedford MA
Lattice version T. Jennings 1 Dec 83

Bugs fixed 12 Jan 84:
No longer puts drive letters in the index
R command now works. (I think)
Revision date in signon
No more occasional garbage in files with Update
        Missing function GETSTRING added to source file

DESCRIPTION
Lar  is a program to manipulate CP/M LU format libraries. 
The  original CP/M library program LU is the product of  Gary  P. 
Novosielski.  The  primary use of lar is to combine several files 
together for upload/download to a personal computer. 

Usage: lar key library [files] ...

Key functions are:
u - Update, add files to library(also creates new libraries)
t - Table of contents
e - Extract files from library
p - Print files in library
d - Delete files in library
r - Reorganize library

EXAMPLES:
lar t foo.lbrlist all files in FOO.LBR
lar e foo.lbr 1.c 2.cextract files 1.c, 2.c from FOO.LBR
lar p foo.lbr 1.cdisplay 1.c from FOO.LBR
lar u foo.lbr 1.c 2.c 3.c add or replace files in FOO.LBR

When creating a new library, you will be prompted for the 
maximum number of entries it can contain. Assuming NEW.LBR doen't 
exist ... 

lar u new.lbrcreate an empty library
lar u new.lbr a.c,b.c,d.ccreate NEW.LBR, add files.

The Reorganize option causes <lbrfile>.tmp to be created, 
and the contents of the old library to be copied into it. 

PECULIARITIES:

When  accessing  filenames without  extentions,  such  as 
"FOO", enter them as "FOO." The dot is necessary.


This  program  is public  domain  software,  no  warranty 
intended or implied.

 them as "FOO." The dot is necessary.


This  program  is public  domain  software,  no  warranty 
inte
```
{% endraw %}

## PATCHER.BAS

{% raw %}
```bas
10 'PATCHER - file patching program - PROGRAMMERS JOURNAL Vol 1, No 6, Pg. 21
20 'Copyright 1983 - Data Base Decisions, Atlanta, GA
30 'This program is used to patch other programs or files. It requires
40 'a data file containing the patches. The first three items in the
50 'patch file are the name of the file to be patched, a check sum, and
60 'comments. For each byte to be patched, there is one record containing
70 'the offset of the byte to be patched, the old value of the byte,
80 'and the new (patch) value.
90 'Patches are generated using program  GENPATCH.BAS
100 'Note: If the offset is greater than 32,767, BASIC 2.00 must be used.
110 CLS
120 DEFINT A-Z
130 CLEAR
140 ON ERROR GOTO 500
145 ON ERROR GOTO 0
150 CLOSE
160 PRINT : INPUT "Name of file containing patches";PAT$
165 PRINT :PRINT "Path (drive and/or subdirectory) to file to be patched"
166 INPUT "(Hit <enter> if on same drive and same directory)";PATH$
168 IF PATH$=CHR$(13) THEN PATH$=""
169 IF INSTR(PATH$,"\")<>0 AND RIGHT$(PATH$,1)<>"\" THEN PATH$=PATH$+"\"
170 IF PAT$="" THEN  END
180 OPEN "i",#1,PAT$
190 INPUT #1,FIL$,CKSUM!,COMMENT$
195 FIL$=PATH$+FIL$
200 OPEN "i",#2,FIL$    'is it there
210 PRINT "Patching: " FIL$
220 PRINT "Comments: " COMMENT$
230 CLOSE 2
240 OPEN "r",#2,FIL$,1  'reopen as random file
250 FIELD 2,1 AS R$
260 FILE.LEN = LOF(2)
270 IF EOF(1) THEN 450
280 INPUT# 1,BYTE!,OLDVAL,NEWVAL	'get patch
290 NEWSUM!=(NEWSUM!+BYTE!+OLDVAL!+NEWVAL!)
300 PRINT BYTE!,OLDVAL,NEWVAL, "Checksum " NEWSUM!
310 IF NEWSUM! > 32767 THEN NEWSUM!=NEWSUM!-32767: GOTO 310
320 IF BYTE! > FILE.LEN THEN PRINT "Byte " BYTE! " is beyond end of file": GOTO 400
330 GET 2,BYTE!
340 R=ASC(R$)
350 IF R <> OLDVAL THEN PRINT "Old value for byte " BYTE! " is " R " not " OLDVAL: GOTO 400
360 LSET R$=CHR$(NEWVAL)
370 PUT 2,BYTE!
380 APPLIED=APPLIED+1
390 GOTO 270
400 REM *** invalid condition ***
410 BEEP:INPUT "Continue (y/n)";ANS$
420 IF ANS$="Y" OR ANS$="y" THEN 390
430 IF ANS$="N" OR ANS$="n" THEN 450
440 GOTO 400
450 REM *** wrap it up ***
460 IF CKSUM!=NEWSUM! THEN PRINT "Checksums match" ELSE PRINT "Checksums do not match -- input value is"CKSUM! " and calculated value is "NEWSUM!: BEEP
470 PRINT "Patches applied: " APPLIED
480 CLOSE
490 END
500 REM *** error handler ***
510 UNABLE$="Unable to "
520 IF ERL=180 OR ERL=280 THEN PRINT UNABLE$ "read " PAT$
530 IF ERL=200 OR ERL=240 OR ERL=330 THEN PRINT UNABLE$ "read " FIL$
540 IF ERL=370 THEN PRINT UNABLE$ "write " FIL$
550 RESUME 120
```
{% endraw %}

## PRTSCRN.ASM

{% raw %}
```
        page 60,132
        title PRTSCRN -- Print the Screen via Interrupt 5 (Shift-PrtScrn)
;******************************************************************************
;
;                               I N T   5
;
;     This is a modification of IBM's Interrupt 5 logic.  It does the same
;     print screen, but if the character to be printed is in the range
;     x'00' to x'19' or x'80' to x'99', then a blank is passed instead.
;
;     As with IBM's Interrupt 5 logic, the cursor position is saved 
;     and restored upon completion.  The routine runs with
;     interrupts enabled.  If a subsequent 'Print Screen' key is depressed
;     during the time this routine is printing it will be ignored.
;
;     Address 50:0 contains the Print Screen status:
;
;        50:0     = 0      Either Print Screen has not been called or upon
;                          return from a call this indicates a successful
;                          operation.
;                 = 1      Print Screen is in progress.
;                 = 255    Error encountered during printing.
;
;	Author	Robert S. Russell
;		Bootstrap Creations
;		1902 Pomar Way
;		Walnut Creek, California 94598
;
;*******************************************************************************

;------------------------------
;      print status byte
;------------------------------
scrnstat        segment at 0h
        dd      5 dup(?)                ; skip int 0-4
int5of  dw      1 dup(?)                ; int vector for int 5 (offset)
int5cs  dw      1 dup(?)                ; int vector for int 5 (code seg)
        org     500h
status_byte     db      1 dup(?)        ; 1 = print in progress
                                        ; 0 = print not in progress
                                        ; 255 = error during print
scrnstat        ends
        page
code    segment public  'code'
        assume  cs:code,ds:scrnstat,ss:code
        org     100h
prtscrn:
	jmp	set_vector		; put initialization code at bottom
					; so it can be freed after use.

print_screen    proc    near
        sti                             ; enable interrupts
        push    ds                      ; save regs used
        push    ax
        push    bx
        push    cx                      ; will be used for cursor limits
        push    dx                      ; will hold current cursor position
        mov     ax,scrnstat             ; a..data segment
        mov     ds,ax                   ; set data segment
        cmp     status_byte,1           ; is print already in progress?
        jz      exit                    ; yes, let's get out of here
        mov     status_byte,1           ; indicate print now in progress
        mov     ah,15                   ; get the current screen mode
        int     10h                     ;       [al] = mode
                                        ;       [ah] = # of cols/line
                                        ;       [bh] = visual page
;-------------------------------------------------------------------------------
;       at this point the columns/line are in ax and the page, if
;       color, is in bh.  al contains the current video mode
;-------------------------------------------------------------------------------
        mov     cl,ah                   ; will use cx register to
        mov     ch,25                   ;  control row and columns.
        call    crlf                    ; send a cr/lf sequence
        push    cx                      ; save screen bounds
        mov     ah,3                    ; get cursor position
        int     10h                     ; and save it
        pop     cx                      ; recall screen bounds
        push    dx                      ; recall [bh] = visual page
        xor     dx,dx                   ; will set cursor position to [0,0]
;-------------------------------------------------------------------------------
;       the loop from printloop up to loop_end is the loop to read each cursor
;       position from the screen and print the character there.
;-------------------------------------------------------------------------------
printloop:
        mov     ah,2                    ; indicate new cursor position
        int     10h                     ; set cursor position 
        mov     ah,8                    ; indicate read the character there
        int     10h                     ; character now in [al]
        cmp     al,20h                  ; is char "unprintable"?
        jb      blankit                 ; yes, so blank it out
        cmp     al,9fh                  ; printable with hi order bit set?
        ja      printit                 ; yes, so print it
        cmp     al,80h                  ; printable with hi order bit cleared?
        jb      printit                 ; yes, so print it
blankit:
        mov     al,20h                  ; change char to blank
printit:
        push    dx                      ; save cursor position
        xor     dx,dx                   ; use printer 1
        xor     ah,ah                   ; request print the char in [al]
        int     17h                     ; print the char
        pop     dx                      ; restore cursor position
        test    ah,25h                  ; check for printer error
        jnz     print_err               ; quit if error detected
        inc     dl                      ; move to next column
        cmp     cl,dl                   ; is this the end of the line?
        jne     printloop               ; no, so proceed.
        xor     dl,dl                   ; return to col 0 (new line)
        mov     ah,dl                   ; [ah] = 0
        push    dx                      ; save new cursor position
        call    crlf                    ; do cr/lf
        pop     dx                      ; restore cursor position
        inc     dh                      ; skip to next line
        cmp     ch,dh                   ; done?
        jnz     printloop               ; no, continue
loop_end:
        pop     dx                      ; get cursor position
        mov     ah,2                    ; specify cursor set request
        int     10h                     ; restore beginning cursor position
        mov     status_byte,0           ; indicate print screen not in progress
        jmp     short exit              ; and get out of here
print_err:
        pop     dx                      ; get cursor position
        mov     ah,2                    ; request cursor position set
        int     10h                     ; restore cursor position
err20:
        mov     status_byte,0ffh        ; indicate error
exit:
        pop     dx                      ; restore all the regs
        pop     cx
        pop     bx
        pop     ax
        pop     ds
        iret
print_screen    endp

;***** carriage return, line feed subroutine ***********************************

crlf    proc    near
        xor     dx,dx                   ; select printer 0
        xor     ah,ah                   ; send initial cr/lf to printer
        mov     al,10                   ; = lf
        int     17h                     ; print the line feed
        xor     ah,ah                   ; clear ah
        mov     al,13                   ; = cr
        int     17h                     ; print the carriage return
        ret
crlf    endp
end_print_screen:                       ;end of resident routine
set_vector:
        push    ds
        xor     ax,ax
        push    ax
        mov     ax,scrnstat             ; set ds to point to int vector table
        mov     ds,ax                   ;
        cli                             ; disable interrupts so that interrupt
                                        ; address doesn't get garbled
        lea     ax,print_screen         ; address of print_screen routine
        mov     int5of,ax               ; store it in int 5 vector
        mov     int5cs,cs               ; and save paragraph address
        lea     dx,end_print_screen     ; end of resident interrupt routine
        sti                             ; allow interrupt
        pop     ax
        pop     ds
        int     27h                     ; terminate but stay resident
code    ends
        end     prtscrn
```
{% endraw %}

## SCAV2XX.ASM

{% raw %}
```
title scavenge Copyright (c) T. Jennings 1983
;
;****************************************
;*					*
;*		SCAVENGE		*
;*					*
;*	Mark bad blocks on MSDOS 	*
;*	as allocated in the FAT.	*
;*					*
;*	T. Jennings 5 June 82		*
;*	  created 15 Sept. 82		*
;*					*
;****************************************
;
;Reads all sectors in logical MSDOS blocks
;and marks the file allocation tables such
;that the blocks are permanently allocated
;where CHKDSK will not deallocate them.
;
;
;This version works on any 2.xx MSDOS or
;PCDOS, on any media type, fixed or removable.
;One (major) limitation: it will not map out
;blocks that are already allocated to a file;
;it will say "block used", but won't tell you
;which file it is in.
;
;If SCAVENGE finds any bad blocks, it will ask
;you whether or not you want the disk updated.
;You can safely run it just to see if the disk 
;is OK.
;
;MASM, LINK, then EXE2BIN this to make a COM
;file. It will not run as an EXE file. NOTE:
;LINK will give you a 'Warning: no STACK 
;segment' error: ignore it.
;
cr	equ	0dh
lf	equ	0ah
page
cgroup group code
code segment byte public 'code'
assume cs:cgroup,ds:cgroup,ss:cgroup
;
;MSDOS page 0 stuff.
;
	org	5ch
tfcb label byte

	org	80h
tbuff label byte

	org	100h
scavenge:
	jmp	start
;
;Disk parameters:
;
blkcnt	dw	(?)	;blocks this disk
blksize	dw	(?)	;sectors per block
secsize	dw	(?)	;phys. sector size
badcnt	dw	(?)	;# bad blocks found
newbad	dw	(?)	;new bad ones
block	dw	(?)	;current block
sector	dw	(?)	;sector to read
disk	db	(?)	;selected disk
curdsk	db	(?)	;current disk.
fatsec	dw	(?)	;1st FAT sector,
fatcnt	dw	(?)	;FAT sec count.

	dw 128 dup (?)
stack	dw	(?)	;what else
page
;
;Say who we are, describe the disk we are
;about to fix, ask to continue or abort.
;
start:	mov	ax,cs
	mov	ds,ax
	mov	ss,ax
	mov	sp,offset stack

	mov	dx,offset signon
	call	pstr
	call	setup		;get disk stuff
	jnc	st1
		call	pstr
		int	32	;error.

st1:	call	liststat	;describe dsk
	mov	dx,offset contstr
	call	pstr		;type any key..
	call	ina
;
;Find all the bad blocks, if any, display them,
;ask if we should update the FAT. If so, write
;it out.
;
	mov	dx,offset crlf
	call	pstr
	call	findbad		;map bad,
	call	listbad		;list them,
	cmp	newbad,0	;if new bad
	je	st2		;blocks...

	mov	dx,offset updstr ;ask if we
	call	pstr		;should update
	call	ina
	and	al,5fh
	cmp	al,'Y'
	jne	st2
	mov	al,disk		;write out the
	mov	dx,fatsec	;FAT,
	mov	cx,fatcnt
	mov	bx,offset fatbuf
	int	26h
	pop	ax		;pop flags

st2:	mov	al,curdsk	;reselect the
	call	seldsk		;original disk
	int	32

signon	db	cr,lf,'DOS version 2 Bad Sector Mapper'
	db	cr,lf,'  T. Jennings 5 June 83'
	db	'$'
contstr	db	cr,lf,'Type ^C to abort, any '
	db	'other key to continue: $'
updstr	db	cr,lf,lf,' Want the disk updated? [y,n] :$'
crlf	db	cr,lf,'$'
page
;
;Get the data on the specified disk. Return 
;carry if no drive specified. Returns ES:DI
;pointing to the FAT for the selected drive.
;
setup:	call	initdsk		;reset dsk sys,
	call	getdsk		;get current,
	mov	curdsk,al	;save it,
	mov	al,tfcb		;make sure a
	cmp	al,0		;new one spec'd
	stc			;quit if none,
	mov	dx,offset strstr
	jz	gd1
	dec	al		;make 0-N,
	mov	disk,al
	call	seldsk		;select,

	push	ds		;save local DS,
	mov	ah,1bh
	int	33
	pop	ds
	mov	blkcnt,dx	;save # blocks,
	mov	secsize,cx	;sector size,
	mov	ah,0
	mov	blksize,ax	;secs/block.

	push	ds		;now get the
	mov	dl,disk
	inc	dl		;drive 1=A, b=2
	mov	ah,50		;FAT,
	int	33		;get the DPB,
	mov	cx,[bx+15]	;CX= sec count,
	mov	ch,0
	mov	dx,[bx+6]	;DX= 1st sec,
	pop	ds
	mov	fatcnt,cx	;save both,
	mov	fatsec,dx

	mov	al,disk		;AL= drive #,
	mov	bx,offset fatbuf ;DS:BX= buffer
	int	25h		;read the FAT,
	pop	ax		;pop flags
	mov	dx,offset bscstr
gd1:	ret
strstr	db	cr,lf,'Must specify a disk drive.$'
bscstr	db	cr,lf,'Bad FAT sector: disk not useable.$'

page
;
;Read the entire disk looking for bad blocks.
;When one is found, go mark it as an allocated
;bad block.
;
findbad:
	mov	block,0		;1st block,
	mov	badcnt,0	;none yet,

fb1:	mov	dx,offset blkstr ;type 'block '
	call	pstr
	mov	bx,block	;block number,
	call	outdec
	call	readblk		;read a block,
	jnc	fb3		;if bad, 
	inc	badcnt		;count it,
	mov	dx,offset badstr
	call	pstr		;type 'bad'
	call	mapout		;mark bad,
	mov	dx,offset cntstr ;error if cant
	jc	fb2
	add	newbad,cx	;count it,
	mov	dx,offset alrstr
	jcxz	fb2		;already markd
	mov	dx,offset mrkstr
fb2:	call	pstr
fb3:	inc	block		;next block,
	dec	blkcnt		;another...
	jnz	fb1		;keep looking.
	ret


blkstr	db	cr,'Block $'
badstr	db	' bad,$'
alrstr	db	' already marked.',cr,lf,'$'
mrkstr	db	' mapped out.',lf,'$'
cntstr	db	' already used! I dont know'
	db	' which file.',lf,'$'
page
;
;Mark the current block as bad in the FAT.
;Multiply the block number by 1.5 to find the
;block number, (actually *3, /2) and if not
;used, mark it bad. If used, report which file
;it's in. If it's already mapped as bad, 
;return CX =0, else return CX=1.
;
mapout:
	mov	bx,block	;block,
	shl	bx,1		;times 2,
	add	bx,block	;times 3,
	shr	bx,1		;divide by 2,
	mov	ax,fatbuf[bx]	;get word,
;
;If carry is set, we want the high 12 bits in
;the word in AX, else the low 12 bits. Set CH
;as the shift count, DX as the mask.
;
	mov	ch,0		;assume low,
	mov	dx,0fffh
	jnc	mo1
	mov	ch,4		;else high 12,
	mov	dx,0fff0h
mo1:	and	ax,dx		;mask it,
	mov	cl,ch
	shr	ax,cl		;shift it,
;
;AX is the block number; if it's anything
;but 000 or ff7, return with carry set, 
;indicating that its already used.
;
	cmp	ax,0ff7h	;if ff7,
	je	mo2		;already marked
	cmp	ax,0		;if allocated,
	je	mo3
	stc			;error!
mo2:	mov	cx,0		;none mapped,
	ret
;
;Bad unused block. Mark as bad in the FAT.
;
mo3:	mov	ax,0ff7h	;marker,
	mov	cl,ch
	shl	ax,cl		;shift it,
	or	fatbuf[bx],ax	;mark it.
	mov	cx,1		;1 mapped,
	ret
page
;
;Read one block, return carry set if read
;error. Leave the useless data in the buffer
;following the end of this program.
;
readblk:
	mov	ax,block	;find start
	mov	cx,blksize	;sector,
	mul	cx		;CX= count,
	mov	dx,ax		;DX= sector,
	mov	al,disk
	mov	bx,offset blkbuf ;our buffer,
	int	25h		;read sectors,
	pop	dx		;pop flags,
	ret
page
;
;List the general info on the disk, like
;sector sizes, etc.
;
liststat:
	mov	dx,offset st1str
	call	pstr
	mov	al,disk
	add	al,'A'
	call	outa
	mov	dx,offset st2str
	call	pstr
	mov	bx,blkcnt
	call	outdec
	mov	dx,offset st3str
	call	pstr
	ret

;Disk A:, total of 12345 data blocks.

st1str	db cr,lf,'Disk $'
st2str	db ':, total of $'
st3str	db ' data blocks.$'
;
;List out the bad things about this disk.
;
listbad:
	mov	dx,offset bd1str
	call	pstr
	mov	bx,badcnt
	call	outdec
	mov	dx,offset bd2str
	call	pstr
	mov	bx,newbad
	call	outdec
	mov	dx,offset bd3str
	call	pstr
	ret

;Total of 12345 bad blocks, found 12234 more this pass.
bd1str	db cr,'Total of $'		;note no linefeed.
bd2str	db ' bad blocks, found $'
bd3str	db ' more this pass.$'
page
;
;Generally useful system calls.
;
pstr:	mov	ah,9
	int	33
	ret
;
;Type BX in decimal, suppressing leading
;zeros.
;
outdec:	mov	cl,0	;0 suppress flag,
	mov	dx,10000
	call	rsdiv
	mov	dx,1000
	call	rsdiv
	mov	dx,100
	call	rsdiv
	mov	dx,10
	call	rsdiv
	mov	ch,bl
	jmp	odf

rsdiv:	mov	ch,-1	;iteration -1,
rs1:	inc	ch	;count,
	sub	bx,dx	;subtract,
	jnc	rs1	;til underflow,
	add	bx,dx	;adjust back,
	cmp	ch,0	;if non-zero,
	jne	odf	;type it,
	test	cl,1	;dont type 0's
	jnz	odf	;if leading,
	ret

odf:	push	dx
	mov	dl,ch
	add	dl,'0'	;ASCII,
	mov	ah,2
	int	33
	pop	dx
	mov	cl,1	;no suppress,
	ret
page
;
;More system calls.
;
seldsk:	mov	dl,al		;select disk,
	mov	ah,0eh
	int	33
	ret

getdsk:	mov	ah,19h
	int	33
	ret

initdsk:mov	ah,0dh
	int	33
	ret

ina:	mov	ah,0ch		;char in with
	mov	al,1		;flush.
	int	33
	ret

outa:	mov	dl,al
	mov	ah,2
	int	33
	ret

blkbuf	db 16384 dup (?)	;cluster buffer

fatbuf label word		;FAT buffer.

code ends

	end	scavenge
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0135

     Volume in drive A has no label
     Directory of A:\

    APLCHIP  DOC       896   2-20-84   1:31a
    BASCOM   PAT       512   2-05-84   3:02a
    BASCOM   TXT      1792   2-05-84   3:02a
    BASLIB   PAT      1024   2-05-84   3:02a
    BASRUN   PAT      1664   2-05-84   3:02a
    CRC      TXT      1640  11-13-84  11:52a
    CRCK4    COM      1536  10-21-82   7:54p
    DOSFTE   PAS      2944   2-05-84   2:18a
    DOSFUN   INC      2176   2-05-84   2:18a
    DOSFUN   PAS      6400   2-05-84   2:18a
    DRIVER   ASM     14480   2-05-84   2:03a
    DRIVER   OBJ       952   2-22-84  12:35a
    FILKQQ   INC      5376   2-05-84   2:18a
    FILUQQ   INC      1536   2-05-84   2:18a
    IBMPCTIP DOC      4736   2-20-84  12:51a
    LAR      DOC      1792   2-03-84   3:01a
    LAR      EXE     26752   1-08-84   2:10a
    PAD      WKS     29312   2-05-84   1:24a
    PATCHER  BAS      2595   2-20-84   2:30a
    PRTSCRN  ASM      8448   2-05-84   2:45a
    PRTSCRN  COM       175   2-22-84  12:40a
    READ     ME       1445   2-22-84  12:57a
    SCAV2XX  ASM      8192  12-25-83   4:45a
    SCAV2XX  COM     17557   2-22-84  12:30a
    SYSCOM   INC      2048   2-05-84   2:33a
           25 file(s)     145980 bytes
                            8704 bytes free
