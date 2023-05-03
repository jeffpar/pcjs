---
layout: page
title: "PC-SIG Diskette Library (Disk #885)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0885/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0885"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MISC. UTILITIES FOR PROGRAMMERS"

    A collection of handy utilities for programmers and computer users in
    general.  Check out the list -- there's something here for almost
    everyone.
    
    ENVED2 -- Configure the DOS environment.  Make changes more conveniently
    than using the manual SET command.
    
    PASTILS -- There are 52 various utility routines for the Pascal
    language in this source code written in Pascal.  Some of these routines:
    return the various coordinates of an active window; turn on/off reverse
    video; produce a single click from the PC speaker; calculate a loan
    payment amount; get time/date from system; get password; convert strings
    to lower/upper case; has an auxiliary device driver and serial port
    input/output; save/restore a current/previous screen; and more.
    
    87DTEC -- This utility comes with two versions of source codes to be
    compiled.  One is coded in the C language and the other in Assembler.
    Once compiled and linked, 87DTEC gives you the features, video features,
    and CPU type of your machine.  It can also determine your machine's
    compatability, illustrate timing delays, test for the presence of the
    ANSI.SYS file and the presence of a math co-processor (8087 or 80287).
    
    TC-HELP -- This program is a reference guide to the library function of
    Turbo C version 1.0.  TCHELP searches the reference guide (a file named
    TC.DAT) for the specified function, and displays the information about
    it to the console.
    
    TC10PAT -- This program reads a text from a .DIF file and applies the
    patch to the program file.  The .DIF file is relatively free-format.
    
    TPC -- TPC reads a Turbo Pascal source file and converts it into the
    corresponding C source code.  It does about 90% of the work required to
    do the translation (a macro header is included).
    
    UCTURBO2 -- This is a library that contains over 200 functions written
    in C and Assembler.  There is a wide selection of graphics functions,
    general purpose functions and functions to control the graphics dot
    matrix and a daisy wheel printer.
    
    C-WINDOW -- A special windowing-cursor control-string, character
    display and border drawing included.  Everything happens at top speed
    because C-WINDOW was written in C, converted to Assembler, and
    hand-optimized.  The C-WINDOWING TOOLBOX (C-WINDOW) programs on this
    disk perform the same function for the programming language C (Lattice C
    or Microsoft C version 3 or 4).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## PERPROPC.ASM

{% raw %}
```

        title   LISTING 3  ;DETERMINING CPU TYPE

; Cputest.asm is the Lattice C-callable assembly language routine that determines
; the machine's processor type.

; Copyright (c) 1986 Dan Jacobs and Joel Rosenblum 

        name    cputest  ;determine CPU type

        include dos.mac         ; Lattice C memory model configuration macro
                                ; In this case it is a copy of dm8086.mac
        
; processor type equates
CPU_88    equ 01H       ; Intel 8088 - 8086
CPU_186   equ 02H       ; Intel 80188 - 80186
CPU_286   equ 04H       ; Intel 80286
CPU_V20   equ 08H       ; NEC V20 - V30

        PSEG

comment\**********************************************************************

NAME
        cputest

SYNOPSIS

        unsigned int cputest (features)
        unsigned int features;          see definition of machine type

DESCRIPTION

        returns features with the proper active CPU type or'ed in

*****************************************************************************\

                public  cputest
cputest         proc    near

                push    BP              ; save the frame pointer (if called from C)
                mov     BP, SP

                ; next, save the passed existing features 

                mov     AX, 4[BP]
                push    AX

        ; check for  8088 or 8086  by using the  SHR instruction  since the 
        ; 8088 and 8086 do not mask cl with 07H before executing the shift. 

                mov     CL, 20H         
                mov     AX, 1
                shr     AX, CL
                test    AX, AX          ; if after the shift AX is the same  
                                        ; as before, it's a 8088 - 8086 or V20 - V30
                jnz     check_80186     ; else, continue checking other Intel CPUs

        ; check for V20 or V30 by detecting if PUSHA is a valid instruction 
        ; on the NEC CPUs

                mov     BX, SP          ; save SP
                pusha
                cmp     BX, SP          ; if SP has not been decremented, then 
                je      is_88           ; it's an 8088 - 8086
                popa                    ; else, we restore registers
                mov     AX, CPU_V20
                jmp     return

is_88:          mov     AX, CPU_88
                jmp     return

check_80186:

        ; check for the 80188 or 80186 by detecting if SP is updated
        ; before or after it is pushed.
        
                push    SP
                pop     BX
                cmp     BX, SP
                je      is_286          ; if updated after, it's a 80286

                mov     AX, CPU_186     ; else, it's a 80186 or 80188
                jmp     short return            

is_286:         mov     AX, CPU_286

return:         pop     BX              ; recall saved features 
                or      AX, BX          ; and or cputype into other features bits
                pop     BP
                ret

cputest         endp

                ENDPS
                end

-------------------------------------------------------------------------------

        title   LISTING 4  ;DETECTING MATH CO-PROCESSOR

; testndp.asm is the Lattice C-callable assembly language routine that
; determines the presence of an 8087 or 80287 math  co-processer chip.

; assembeled using Microsoft MASM v4.0

; Copyright (c) 1986 Dan Jacobs and Joel Rosenblum 

; portions copyrighted by MicroWay, Inc. 

        name    test_ndp

        include dos.mac         ; Lattice C memory model configuration macro
                                ; In this case it is a copy of dm8086.mac

; We have to code the instructions for the NDP as dbs as the assembler
; generates an unwanted WAIT instruction

FINIT_MAC       MACRO
                db      0DBH, 0E3H
                ENDM

FSTCW_MAC       MACRO   address
                db      0D9H, 03EH
                dw      offset DGROUP:address
                ENDM



; bit mask for coprocessor in FEATURES
NDP             equ     0010H   ; a coprocessor is present

        DSEG
ndp_word        dw      0       ; a storage location for the ndp to use for test
        ENDDS

        PSEG
 
comment\**********************************************************************

NAME
          testndp

SYNOPSIS
          Check to see if a  8087 or 80287  numeric data processor is
          present in the machine.  Here, we present two methods which
          you may select based  upon how you set  CHOOSE in the  code:
          First,  IBM's  recommended  procedure  which does an  int 11 
          (equipment determination)  BIOS call.  The problem with this
          method is that it only  works on IBMs and  100% compatibles.
          Note that in the PC and XT the returned value is  determined 
          by reading the  switch setting.    Unfortunately, all of the
          early "guide to operations" manuals  informed you to set the 
          switch  the  coprocessor the wrong way, rendering it usless.
          Second,   MicroWay's  recommended  procedure  checks for the 
          coprocessor directly.  We believe that this method should be 
          used since it is more universal.  We leave the choice to you
          depending how you set the equ for CHOOSE  below:

            1 to use int 11
          or
            0 for direct check

SYNOPSIS
          unsigned int test_ndp (features);
          unsigned features;              see definition of machine type

RETURN VALUE
          the passed features variable with the NDP bit or'ed in

*****************************************************************************\

CHOOSE  equ     0       ; 0 = direct ndp check, 1 = IBM int 11 bios call

                public  test_ndp

test_ndp        proc    near

        assume  ds:DGROUP

        push    bp              ; save the frame pointer (if called from C)
        mov     bp, sp

        ; next, save the passed existing features
        mov     ax, 4[bp]
        push    ax
        
if CHOOSE ; use bios int check
        int     11H                     ; equipment determination call
        and     ax, 2                   ; coprocessor present
        jz      no_ndp
else ; use direct ndp check ala MicroWay
        FINIT_MAC                       ; initilize the coprocessor
        mov     ndp_word, 0
        FSTCW_MAC <ndp_word>            ; fstcw ndp_word
                                        ; move control word to ndp_word
        mov     cx, 064H                ; count for wait loop
l1:     push    dx
        pop     dx
        loop    l1
        and     ndp_word, 03BFH         ; mask to bits we want
        cmp     ndp_word, 03BFH         ; all the correct bits set
        jne     no_ndp

        mov     ndp_word, 0             
        FSTCW_MAC <ndp_word>            ; fstcw ndp_word
                                        ; move control word to ndp_word
        mov     cx, 064H                ; count for wait loop
l2:     push    dx
        pop     dx
        loop    l2
        and     ndp_word, 1F3FH         ; mask to bits we want
        cmp     ndp_word, 033FH         ; all the correct bits set
        jne     no_ndp

endif
        mov     bx, NDP                 ; mask to turn on coprocessor bit
        jmp     short ndp_exit

no_ndp: mov     bx, 0                   ; nothing to mask in

ndp_exit:
        pop     ax                      ; get saved passed features
        or      ax, bx                  ; and or in bit for ndp 

        pop     bp                      ; restore frame pointer to return to C caller

        ret

test_ndp        endp

        ENDPS
        end

_______________________________________________________________________________

	title	Listing 5a  ;Calculating Timing Loops

; Cal.asm is an assembly language routine that provides a standard
; delay independent of clock speed.   It may be  called  from  a C
; routine in your software as illustrated in listing 5b.

; Note: The PC's timer interrupt is assumed set to the standard ~18.2Hz

; Copyright (c) 1986 Howie Marshall, Applied Reasoning Corp. 

pgroup	group	prog
dgroup	group	data

bios_data	segment	at 40H
		org	06cH
low_time	dw	?
bios_data	ends

data		segment	public 'data'
		extrn	us500:word, ms2:word
dummy		dw	0		; a dummy to compare against
data		ends

prog	segment	byte public 'prog'
;
; delaycal - calibrate the delay loop
;
; temp = delaycal(delay_time) from C.  Returns delay_count
;
	assume	cs:pgroup
	public	delaycal
delaycal proc	near
	assume	ds:dgroup
	push	bp
	push	ds
	mov	bp,sp
	mov	ax,bios_data
	mov	ds,ax
	assume	ds:bios_data
;
; wait for the timer to tick over
;
	mov	di,low_time
timwait:
	cmp	di,low_time
	je	timwait
;
	xor	ax,ax
	xor	dx,dx
	add	di,6		; wait for 5 more ticks
;*************************************************************
timloop:
	add	ax,1
	adc	dx,0
	cmp	di,low_time	; have 5 ticks occurred yet?
	ja	timloop		; no, continue looping
;*************************************************************
;
;  5 ticks @ 18.2 ticks/sec => 270272 microseconds in 5 ticks
;
;  270272 = 16 * 16892
;
	mov	bx,16
	div	bx		; cut down to single word
	mov	bx,6[bp]	; get desired delay time
	mul	bx
	mov	bx,16892
	div	bx		; finish divide-by-270272
	or	ax,ax
	jnz	timok
	inc	ax		; do at least one loop
timok:
	mov	sp,bp
	pop	ds
	assume	ds:dgroup
	pop	bp
	ret
delaycal endp
;
;  DELAY SUBROUTINES:
;
;  This routine delays for 500 microseconds.
;
	public	del500u
del500u	proc	near
	assume	ds:dgroup
	mov	ax,us500
	neg	ax
;
;  This loop contains the same instructions as the calibration loop
;  in delaycal above, but in a different order.  The first two are
;  do not actually affect the loop, other than taking the same number
;  of cycles as the corresponding portion of the loop in delaycal.
;
;  Note that both loops consist of:
;	ADD, ADC, CMP, Jcond
;
;*************************************************************
loop1:
	adc	dx,0		; kill some time
	cmp	dx,dummy	; and some more
	add	ax,1		; increment our count
	jnz	loop1		; no, continue looping
;*************************************************************
	ret
del500u	endp
;
;  This is essentially the same as del500u, except that a different
;  count value is used to delay for 2 milliseconds.
;
	public	del2m
del2m	proc	near
	assume	ds:dgroup
	mov	ax,ms2
	neg	ax
;*************************************************************
loop2:
	adc	dx,0		; kill some time
	cmp	dx,dummy	; and some more
	add	ax,1		; increment our count
	jnz	loop2		; no, continue looping
;*************************************************************
	ret
del2m	endp
prog	ends
	end

-------------------------------------------------------------------------------

	title	LISTING 6  ;DETECTING VIDEO TYPE

; Video.asm is the Lattice C-callable assembly language routine that determines
; the presence of video screen adapter cards and displays in an  IBM compatible
; system.
; *NOTE* The timing loops have only been validated on 6 Mhz. AT

; Copyright (c) 1986 Dan Jacobs and Joel Rosenblum 

; portions copyrighted by Hercules Corp. and International Business Machines Corp. 

; For a more complete test of the EGA adapter card see IBM Seminar Proceedings 
; Vol. 2, No. 11-1

	name	video_test      ;determine video adapter card

	include	dos.mac		; Lattice C memory model configuration macro
				; In this case it is a copy of dm8086.mac

; *NOTE* all the below equates must be the same as list1.c

; video mode equates   
CGA		equ	01H	; IBM Color graphics adapter (CGA)
MONO		equ	02H	; IBM Monochrome card
HERCULES	equ	04H	; Hercules monochrome graphics card
PGA		equ	08H	; Professional graphics controller (PGA)
EGA_MONO	equ	10H	; IBM Enhanced graphics adapter (EGA) w/monochrome display
EGA_COLOR	equ	20H	; EGA w/color display
EGA_HIGH	equ	40H	; EGA w/high resolution color display
UNKNOWN		equ	80H	; Unknown board type

; machine type equates
IBMCOMPAT	equ	0100H
IBMPC		equ	0200H
IBMPCAT		equ	0400H
IBM_CONVERT	equ	0800H

; global equates
VIDEO_IO	equ	10H	; BIOS video i/o interrupt number
GET_MODE	equ	0FH	; video i/o get mode function

	DSEG

video_type	db	?	; place to accumulate the video type
t_features	dw	?	; machine discriptor passed to function

	ENDDS

	PSEG
 
comment\**********************************************************************

NAME
	Video_test - checks to see which video adapter and display are used

SYNOPSIS
	unsigned int Video_test (features);
	unsigned features;			see definition of machine type

RETURN VALUE
	type of video board used
		01H = Color graphics adapter
		02H = Monochrome card
		04H = Hercules card
		08H = Professional graphics adapter
		10H = EGA w/monocrome display
		20H = EGA w/color display
		40H = EGA w/high resolution color display
		80H = Unknown video card

*****************************************************************************\

		public	video_test

video_test	proc	near

	push	bp		; save the frame pointer (if called from C)
	mov	bp, sp

	; next, save the passed existing features
	mov	ax, 4[bp]
	mov	t_features, ax
	
check_ega:
	; Unfortunately this method of checking the EGA requires the use of
	; BIOS routines.  Therefore, it can only be used on compatible 
	; machines. We first, however, determine if we can make the BIOS call.

	; We use FEATURES to check if the BIOS int 10
	; is available for use.
		  
	test	t_features, IBMCOMPAT + IBMPC + IBMPCAT
	jz	ega_done		; can only do this test on compatible

	mov	ax, 1200H		; video alternate select
	mov	bl, 10H			; return EGA info
	mov	bh, 0FFH		; invalid data for test
	mov	cl, 0FH			; reserved switch setting
	int	VIDEO_IO		; returns with bh = color or mono mode
					; 	       bl = memory value
					; 	       ch = feature bits
					; 	       cl = switch setting			
		
	cmp	cl, 0CH			; test switch setting
	jge	ega_done		; above max setting
	cmp	bh, 01H			; test range 0 - 1
	jg	ega_done		; above range
	cmp	bl, 03H			; check memory value for 0 - 3 range
	jg	ega_done		; above range

	; if it gets here, there is a EGA card present
	; now test for the attached monitor

	and	cl, 0EH			; trim the switch to the bits we need
	cmp	cl, 1010B		; monochrome monitor attached ?
	je	is_m
	cmp	cl, 0100B		; secondary mono setting ?
	jne	color			; nope check color display
is_m:	or	video_type, EGA_MONO	; set EGA card with monochrome display
	jmp	short ega_done
color:	cmp	cl, 1000B		; primary color display	?
	je	is_c
	cmp	cl, 1110B		; secondary color ?
	jne	enh_d			; check for high resolution display
is_c:	or	video_type, EGA_COLOR	; EGA card with color display
	jmp	short ega_done
enh_d:	cmp	cl, 1100B		; primary high resolution display ?
	je	is_enh
	cmp	cl, 0110B		; secondary high resolution display ?
	jne	ega_done
is_enh:	or	video_type, EGA_HIGH	; EGA card with high resolution color display

ega_done:

	; check for Hercules card is present by checking the status port
	; at 3BAH for the vertical retrace bit.
	; **NOTE** you can also tell the mode the card is in and set the card
	; mode.  For more information, contact Hercules technical support. 

	mov	dx,3BAH			; address of status port
	in	al,dx
	and	al,80h			; vertical retrace bit
	mov	ah,al			; Save bit 7 for test

	mov	cx,8000h		; count for delay loop
examine:
	in	al,dx			; Take another reading
	and	al,80h			; Isolate bit 7
	cmp	al,ah
	jne	is_hercules		; If bit 7 changes then it
	loop	examine			; is a Hercules Graphics Card

	jmp	check_color		; After this long, it must be
					; something else.
is_hercules:
	or	video_type, HERCULES
	jmp	short check_pga		; don't check for mono or color
					; board if Hercules present
					
check_color:
	test	video_type, EGA_COLOR + EGA_HIGH
	jnz	check_mono		; can't have a color card with
					; EGA in color mode

	; next check for a Color Graphics Adapter by the checking for the
	; presence of the cursor register at 0x3D4
	mov	dx, 03D4H
	call	cursor_reg		; carry flag set if not there
	jc	check_mono
	or	video_type, CGA		; there is a color graphics adapter

check_mono:
	test	video_type, EGA_MONO	; can't have mono card in machine
	jnz	check_pga		; with EGA in mono

	; first check for a monochrome board by checking for the
	; presence of the cursor register at 0x3B4
	mov	dx, 03B4H
	call	cursor_reg		; carry flag set if not there
	jc	check_pga
	or 	video_type, MONO	; there is a monochrome adapter card
	
check_pga:
	; now test for a Professional Graphics Adapter by checking the cursor
	; status register which is memory mapped to address C600:03DB

	push	es
	mov	ax, 0C600H		; load segment
	mov	es, ax
	mov	di, 03DBH		; load offset
	mov	ah, es:[di]		; save the original value
	mov	byte ptr es:[di], 5AH	; test value
	mov	al, byte ptr es:[di]	; read it back
	mov	byte ptr es:[di], ah	; restore original
        cmp	al, 5AH
	pop	es			; clear stack
	jne	check_done		; no PGA adapter
	or	video_type, PGA		; yes, it's there

check_done:
	cmp	video_type, 0		; When all else fails...
	jne	exit			; can't recognize any card
	mov	video_type, UNKNOWN

exit:	xor	ax, ax			; clear ah
	mov	al, video_type

	pop	bp	      		; restore frame pointer	to return to C caller

	ret

video_test	endp


comment\**********************************************************************

NAME
	cursor_reg

SYNOPSIS
	checks to see if there is a cursor register at the
	address passed in dx	

RETURN VALUE
	carry clear - if cursor register present
	carry set   - no cursor register here

*****************************************************************************\
cursor_reg	proc	near

	mov	al, 0FH		; set the index to the cursor register	
 	out	dx, al
	inc	dx		; increment to data register
	in	al, dx		; get the original value
	xchg	al, ah		; save it for later
	mov	al, 5AH		; test value
	out	dx, al		; set cursor control register
        jmp     $+2             ; waste some time
        jmp     $+2
        jmp     $+2
	in	al, dx
	cmp	al, 5AH		; same as written ?
	xchg	al, ah		; restore saved value
	out	dx, al
	je	yup		; it was the control register
	stc			; no cursor return code
	ret
yup:	clc			; is there return code
	ret

cursor_reg	endp

	ENDPS
	end

```
{% endraw %}

## C_WINDOW.DOC

{% raw %}
```


  
            


       
       
    
      



       
                                                     
                                                    

                             C Windowing Toolbox
                             -------------------

                                     for
                    IBM Personal Computers and Compatibles
                                 Version 1.2













        




















      IBM, IBM PC are trademarks of International Business Machines Corp.
      Microsoft is a trademark of Microsoft Corp.
      Lattice is a trademark of Lattice Corp.








                                                      C Windowing Toolbox
   ----------------------------------------------------------------------


    INTRODUCTION
            
        C Windowing Toolbox is a collection of functions that give 
        windowing capability to the C programmer using an IBM PC or true 
        compatible. The windowing functions are written entirely in 
        Microsoft C and were compiled using the small model for both code 
        and data. It is distributed in .OBJ format, ready to be linked to 
        your Microsoft and Lattice C programs. The source code of the C 
        Windowing Toolbox, compatible with both the Microsoft (Lattice) C 
        version 2.xx compiler and the Microsoft C version 3/4 compiler is 
        available for $15. See the end of this documentation for details.  

        The C Windowing Toolbox files are:
        
             C_WINLAT.OBJ       - The compiled windowing code linkable to
                                  programs compiled by the Microsoft 
                                  version 2/Lattice C compiler

             C_WINMSC.OBJ       - The compiled windowing code linkable to
                                  programs compiled by the Microsoft
                                  version 3 or 4 C compiler
        
             C_WINDOW.DOC       - The documentation
        
             C_WDEF.H           - Include file for your C code
        
             C_WDEMO.C          - Source of windowing demonstration 
                                  program
        
             C_WDEMO.EXE        - Windowing demonstration program

        To use the Windowing functions in your Microsoft/Lattice C 
        program: 
        
         (1) Include the file C_WDEF.H in your C source file.  
             C_WDEF.H defines the windowing functions and associated 
             constants and variables.

         (2) Compile your C source using the small code and data model.  

         (3) Link the windowing code to your program: 
        
             Microsoft C version 2/Lattice -

               LINK CS + yourprog + C_WINLAT, yourprog.EXE,, MCS.LIB

             Microsoft C version 3/4 -

               LINK yourprog + C_WINMSC; 

        To allow other C compilers to compile the windowing source code, 
        standard C syntax is used where-ever possible. There are only 
        three non-standard C functions used: INT86(), PEEK() and POKE().  
        The Microsoft version 2/Lattice C compiler has these functions in 


                                                                        1





                                                      C Windowing Toolbox
   ----------------------------------------------------------------------


        its library. The Microsoft C version 3/4 compiler doesn't support 
        PEEK() and POKE() so suitable versions, written in C, are 
        included in the C_WINDOW.C source file. Microsoft C version 
        2/Lattice compatible versions of the three above functions 
        written in assembler, plus a full explanation, are also on the 
        source code disk. If your compiler doesn't include INT86() PEEK() 
        or POKE(), you can modify either the C or assembler sources 
        mentioned above to suit your compiler. Also, if you don't have an 
        IBM PC or compatible, and you are familiar with reading and 
        writing to the video RAM of your computer, you can adapt the 
        windowing code for use on your PC.  
        
        C_WDEMO.C is the C source of a sample windowing program. It has 
        been compiled as C_WDEMO.EXE and is part of the windowing package.  


    SCREEN CONCEPTS

        An array of bytes, called the window buffer, is used to store 
        each defined window, plus the section of the screen that each 
        window overlays.  The window buffer size has been defined in the 
        windowing code to be 10000 bytes.  This is a compromise value.  
        Larger allows more active window definitions, smaller means a 
        smaller program.  When a window is defined, storage is allocated 
        in the window buffer.  The standard IBM PC screen, in 80 column 
        alphanumeric mode, uses 4000 bytes (80 x 25 x 2) of video RAM.  
        Each character on the screen has a trailing attribute byte that 
        indicates if the character is bright or dark, blinking, red, 
        blue, etc.  10000 bytes is enough to create a window the size of 
        the screen (4000 bytes to save old screen, 4000 for window), plus 
        another little window. Or several medium sized windows.  

        C Windowing Toolbox allows deallocation of window storage so you 
        can have as many windows as you like by deallocating and 
        redefining them as needed. The only restriction is that only as 
        many windows as can be defined in the window buffer can be 
        visible at any one time.  

        The main reason why the window buffer's size is explicitly 
        defined in the code, rather than using dynamic memory allocation 
        is that if the program can load on a particular computer with x 
        amount of memory, then it will run on that computer. The program 
        is self-contained.  


    OVERVIEW OF THE WINDOWING FUNCTIONS
            
        YOU MUST ALWAYS CALL W_INIT() BEFORE USING ANY WINDOWING
        FUNCTIONS. Do NOT neglect to do this, as several important data 
        pointers are initialized.  

        There are two kinds of functions available: those that are 
        specific to the windowing environment, and those that are comple-
        mentary. The functions specific to windowing are preceded by "W_".  


                                                                        2





                                                      C Windowing Toolbox
   ----------------------------------------------------------------------


        
        The four major windowing functions are:
        
                (1) Defining a window with W_DEF().
                (2) Opening a window with W_OPEN().
                (3) Closing the most recently opened window with W_CLOSE(). 
                (4) Deallocating window(s) and releasing window buffer 
                    space with W_KILL().  
        
        The flag "err_exit" controls the action taken when a windowing 
        error occurs. "err_exit" is declared as EXTERNal CHAR in 
        C_WDEF.H. If you set "err_exit" to TRUE (default), the program 
        will return to the operating system after an error message window 
        is displayed.  The name of the windowing function and what is 
        wrong with what you are asking the function to do will be 
        indicated in the error message window.  

        If you set "err_exit" FALSE, for all windowing functions that 
        return a status code (1 == OK, 0 == error), be sure to check that 
        no error has occurred. If a windowing function returns an error 
        code, do not ignore it.  Terminate the program and check your 
        code for the cause of the error. Often the problem is as simple 
        as mixing the X and Y coordinates up, or not specifying enough 
        arguments when a function is called.  

        A window's width and height is specified when it is defined.  When 
        it is opened, it can be located at any location on the screen, as 
        long as it doesn't stray outside of the screen's boundaries. If 
        you have specified a border for a window, the writable area of 
        the window is reduced to fit inside the border. THE UPPER LEFT 
        CORNER OF THE WRITABLE AREA OF A WINDOW IS AT HORIZONTAL (X) 
        COORDINATE 0 AND VERTICAL (Y) COORDINATE 0. IF NO WINDOWS ARE 
        OPEN, WINDOWING COMMANDS ARE RELATIVE TO THE STANDARD 80 x 25 
        SCREEN.  

        No more than one version of a defined window can be open at any 
        one time, irregardless of screen placement. This is because each 
        window's storage contains information about the section of screen 
        it overlaid and opening a second version of the same window would 
        overwrite that information.  

        W_WRITE() is the windowing screen writing function. It does not 
        attempt to interpret and act on any characters, including carriage 
        returns and line feeds. The only action taken is to wrap-around on 
        the active window if the cursor is at the right side of the window 
        and to scroll up if the bottom of the window is reached. Any extra 
        text handling will have to be added by you. The advantage is that 
        you can write any character to a window with W_WRITE().  

        W_GETSTR() is the windowing screen string input function. You can 
        specify the maximum length of an input string so that no borders 
        are over-written. Character editing capabilities are included.  
        The standard C function SSCANF() can be used to perform formatted 
        input conversion on the string read by W_GETSTR().  


                                                                        3





                                                      C Windowing Toolbox
   ----------------------------------------------------------------------


        
        Any standard C input/output functions that involve outputting 
        carriage returns or line feeds to the screen MUST be avoided when 
        a window is open. The standard C input/output functions know 
        nothing about the windowing environment and can easily write 
        across a window's border. Functions like PRINTF() can be used 
        with care, providing the user (1) first positions the cursor in a 
        window with W_GOTOXY() (2) never sends a carriage return or line 
        feed to the screen and (3) avoids writing across a window's 
        border.  

        All function calls must include all parameters, even if they are 
        only dummy place-holders. For example, if a window has been 
        defined without a border, the window opening function W_OPEN() 
        must include all 8 parameters, even though the border 
        specifications are ignored.  

        The windowing code automatically selects 80 column alphanumeric 
        mode whether you have a monochrome or graphics screen. The 
        windowing functions W_FGCOLOR() and W_BGCOLOR() set character 
        display attributes. Attribute definitions, controlling character 
        color, intensity, etc, are contained in C_WDEF.H. To select 
        standard white-on-black for either a monochrome or color screen, 
        specify 0 (black) as the character background attribute and 7 
        (white) as the foreground attribute. The foreground and 
        background bit masks defined in C_WDEF.H correspond to the the 
        actual bit values in a character attribute byte.  

        The integer variable "b_usage" is always set to the maximum 
        amount of windowing buffer space used so far. You can use it to 
        determine the smallest windowing buffer that will work with your 
        program.
        























                                                                        4





                                                      C Windowing Toolbox
   ----------------------------------------------------------------------


    FUNCTIONS CONTAINED IN C WINDOWING TOOLBOX
        
      W_INIT - Initialize windowing 

        Usage: 

          w_init(); 

        W_INIT() sets up pointers to the window buffer, detects the type 
        of monitor (color or monochrome), selects 80 column alphanumeric 
        mode, sets the display page to zero, and sets up initial window 
        dimensions to 80 x 25. It also initializes the text foreground 
        color to white and the text background color to black. If your 
        computer is not an IBM PC or compatible, W_INIT will detect this 
        and abort the program.  

        YOU MUST CALL W_INIT() BEFORE CALLING ANY OTHER windowing
        FUNCTIONS. Failure to do this can cause random sections of memory 
        to be overwritten.  


      W_DEF - Define a window 

        Usage: 
    
          wnum = w_def (wid, hgt, border);
            int  wnum;  /* 0 if error, window access number otherwise */
            int  wid;  /* Width of window, including optional border  */
            int  hgt;  /* Height of window, including optional border */
            char border;  /* TRUE (1) if border, FALSE (0) if no border */
        
        Example:
        
            if ((w1 = w_def(x1, y1, TRUE)) == 0)
                    /* w_def error handler here */
            /* otherwise continue */

        Define a window and reserve storage for it in the window buffer.  
        A window must be defined before it is opened.  

        The width and height parameters include the window border, if a 
        border is specified. If the window has a border, then the 
        writable area of the window is reduced to fit inside the border.  
        For example, a bordered window that has a width of 30 and a height 
        of 10 has writable coordinates of 0..27 in the horizontal (X) 
        direction and 0..7 in the vertical (Y) direction. If the window 
        didn't have a border, the X and Y ranges would be 0..29 and 0..9 
        respectively.  

        You cannot define a window larger than the standard screen. Also, 
        the window must not be smaller than three columns by three rows 
        if a border is specified and one row by one column if no border 
        is specified. In other words, at least one writable character 
        position must be on the window.  


                                                                        5





                                                      C Windowing Toolbox
   ----------------------------------------------------------------------



        Be sure to check the return code for 0, the error condition.  
        Errors occur if the window is too small, too big, or if there is 
        not enough room for the window in the window buffer.  


      W_OPEN - Open a pre-defined window

        Usage:

          status = w_open (wnum, x, y, clear, wbgc, bdr_type, bfgc, bbgc);
            int  status;  /* 1 if success, 0 if error */
            int  wnum;  /* Value returned by a previous W_DEF() */
            int  x;  /* Horizontal coordinate of upper left corner */
            int  y;  /* Vertical coordinate of upper left corner */
            char clear;  /* TRUE means pre-clear window, FALSE means
                            retain previous contents */
            char wbgc; /* Window background color */
            char bdr_type;  /* Border type (if specified by W_DEF()) */
            char bfgc; /* Border foreground color */
            char bbgc; /* Border background color */
        
        Open a window that has been previously defined by a call to 
        W_DEF(). If a window is being opened for the first time, then the 
        contents of the window are initialized to spaces. If the window 
        is being opened after having been previously open, the previous 
        contents of the window will be re-displayed, unless "clear" is 
        set to TRUE. The include file C_WDEF.H defines the six border 
        types.

        "x" and "y" are absolute locations on the standard 80 x 25 screen 
        and specify the location of the upper left corner of the window 
        to be opened.  

        "wbgc" is the background color for the window. Any spaces in the 
        window will take on the background color attribute. Non-blank 
        areas are not affected. Set this to 0 (black) for a monochrome 
        screen.  

        "bfgc" is the foreground color and "bbgc" is the background color 
        of the border.  

        The include file C_WDEF.H defines the colors available. If you 
        have a color graphics adapter, you can set the background and 
        foreground of the border to the same color to produce an extra 
        thick border.  

        Be sure to check the return code for 0, the error condition.  
        Errors occur if wnum is to small or big, if the window is already 
        open, or if the window won't fit on the screen at the absolute 
        X,Y location specified.  





                                                                        6





                                                      C Windowing Toolbox
   ----------------------------------------------------------------------


      W_CLOSE - Close a window 

        Usage: 

          w_close(); 

        Close the most recently opened window and restore the previously 
        overwritten section of screen.  

        If you attempt to close the standard screen, W_CLOSE() will 
        simply return, so extra W_CLOSE() calls are ignored.  

        There is no error return code.  


      W_KILL - Deallocate window(s)

        Usage:

          status = w_kill (wnum);
            int  status;  /* 1 if success, 0 if error */
            int  wnum;  /* Number of window to kill */
    
        Deallocate window, and all subsequently defined windows. For 
        example:
        
                if ((w1 = w_def(x1, y1, FALSE)) == 0)
                        /* Error handler here */
                if ((w2 = w_def(x2, y2, TRUE)) == 0)
                        /* Error handler here */
                if ((w3 = w_def(x3, y3, TRUE)) == 0)
                        /* Error handler here */
                /* De-allocate w2. Also de-allocate w3, because */
                /* it was defined after w2, but not w1, because */
                /* it was defined before w2 */
                if ((status = w_kill(w2)) == 0)
                        /* w_kill error handler here */

        When W_KILL() is called, all of the open windows on the screen 
        are automatically closed. This is done because the deallocated 
        window(s) may be partially or fully under a window that is not 
        being deallocated.  

        Be sure to check the return code for 0, the error condition.  
        Errors occur if wnum is too small or too big or if no window is 
        associated with wnum.  
      









                                                                        7





                                                      C Windowing Toolbox
   ----------------------------------------------------------------------


      W_SCROLL - Scroll contents of window

        Usage:

          w_scroll (dir, num);
            int  dir;  /* Direction of scroll; 0 == up, 1 == down */
            int  num;  /* Number of lines to scroll */

        The current window is scrolled in "dir" direction for "num" 
        lines.


      W_WRITE - Write a string to a window

        Usage:

          w_write (s);
            char  *s;  /* Pointer to string */


        Display NULL terminated string in current window at location set 
        by W_GOTOXY(). If the right hand side of the window is reached, 
        the cursor will wrap-around to the next line. If the cursor 
        reaches the bottom of the current window, the contents of the 
        window will scroll up 1 line. The cursor will locate at the 
        character position immediately beyond the last character in the 
        string.  

        No control characters are recognized, so any character can be 
        displayed. W_FGCOLOR() and W_BGCOLOR() set the background and 
        foreground attributes of the displayed character(s). See 
        C_WDEF.H for the pre-defined display attribute values.  
                

      W_GETSTR - Read string

        Usage:

          w_getstr (s, maxc);
            char *s;  /* Pointer to input buffer */
            int  maxc;  /* Max char count */

        Read a string from the keyboard. Always position the cursor with 
        W_GOTOXY() before calling W_GETSTR(). "maxc" is the maximum 
        number of characters allowed. The cursor will not move beyond the 
        limit specified by "maxc". For example, if "maxc" == 10, then 
        only 10 characters can be entered. This is useful for avoiding 
        over-writing a window's borders.  

        You can edit the input string:

                (1) Pressing <RETURN> as the first keystroke leaves the
                    input buffer unaltered.
                (2) If the first keystroke is a printable character, the


                                                                        8





                                                      C Windowing Toolbox
   ----------------------------------------------------------------------


                    rest of the input buffer will be cleared.
                (3) The back-space key deletes one character to the left
                    of the cursor.
                (4) The DEL key deletes the character above the cursor.
                (5) The left and right arrow keys move the cursor along 
                    the input buffer string.
                (6) The END key moves the cursor to the end of the 
                    string.
                (7) The HOME key moves the cursor to the beginning of
                    the string.
                (8) Pressing <RETURN> ends the editing.

        The input buffer must be at least 1 byte longer than "maxc", to 
        make room for the trailing '\0', which is always appended.  

        W_FGCOLOR() and W_BGCOLOR() set the background and foreground 
        attributes of the displayed character(s). See C_WDEF.H for the 
        pre-defined display attribute values.  
        
                
      W_DSP1 - Display 1 character

        Usage:

          status = w_dsp1 (x, y, ch);
            int  status;  /* 1 if success, 0 if error */
            int  x;  /* X position */
            int  y;  /* Y position */
            char ch;  /* character */

        Display a single character at an X, Y location relative to the 
        currently open window. The cursor will locate directly over the 
        displayed character.

        If no windows are open, the X and Y coordinates correspond to 
        absolute locations on the standard 80 x 25 screen. The upper left 
        coordinate is (0, 0).  

        W_FGCOLOR() and W_BGCOLOR() set the background and foreground 
        attributes of the displayed character. See C_WDEF.H for the 
        pre-defined display attribute values.  
        
        Be sure to check the return code for 0, the error condition. An 
        error occurs if the X,Y position is outside of the currently 
        active window.  
                

      W_FGCOLOR - Set text foreground color

        Usage:

          i = w_fgcolor(color);
            int  i; /* 1 if success, 0 if error */
            int color; /* foreground color bit mask */


                                                                        9





                                                      C Windowing Toolbox
   ----------------------------------------------------------------------



        Set the text foreground color for text displayed by W_WRITE(), 
        W_DSP1(), W_GETSTR() and BORDER(). The value of color can be one 
        of the values defined in C_WDEF.H for foreground colors. Note 
        that the foreground color is an exact attribute byte bit mask.  
        
        Be sure to check the return code for 0, the error condition. An 
        error occurs if "color" is less than 0 or greater than 255.
                

      W_BGCOLOR - Set text background color

        Usage:

          i = w_bgcolor(color);
            int  i; /* 1 if success, 0 if error */
            int color; /* background color bit mask */

        Set the text background color for text displayed by W_WRITE(), 
        W_DSP1(), W_GETSTR() and BORDER(). The value of color can be one 
        of the values defined in C_WDEF.H for background colors. Note 
        that the background color value is an exact attribute byte bit 
        mask.  
        
        Be sure to check the return code for 0, the error condition. An 
        error occurs if the color value is less than 0 or greater than 
        255.
        

      W_GETCY - Get vertical (Y) position of cursor

        Usage:

          i = w_getcy();
            int  i;  /* Y position */
        
        This function returns the current Y position of the cursor, 
        relative to the upper left corner (0, 0) of the writable part of 
        the current window. If no windows are open, the Y position is 
        relative to the upper left corner of the standard screen.  


      W_GETCX - Get horizontal (X) position of cursor

        Usage:

          i = w_getcx();
            int  i;  /* X position */
        
        This function returns the current X position of the cursor, 
        relative to the upper left corner (0, 0) of the writable part of 
        the current window. If no windows are open, the X position is 
        relative to the upper left corner of the standard screen.  



                                                                       10





                                                      C Windowing Toolbox
   ----------------------------------------------------------------------



      W_GOTOXY - Move cursor

        Usage:

          status = w_gotoxy (x, y);
            int  status;  /* 1 if success, 0 if error */
            int  x;  /* Horizontal position */
            int  y;  /* Vertical position */

        Go to specified X, Y location on the writable part of the 
        current window. If you specified a border when you defined and 
        opened the window, the writable part of the window is reduced to 
        fit inside the border. For example, if you specified a window 
        that was 10 x 10, and it had a border, then the horizontal (X) 
        and vertical (Y) coordinates for W_GOTOXY() can vary between 
        0..7.  
        
        If there are no windows open, the coordinates refer to the 
        standard 80 x 25 screen.  
        
        Be sure to check the return code for 0, the error condition. An 
        error occurs if the X,Y position is outside of the currently 
        active window.  


      W_WRITEXY - Write a string to a window at X, Y

        Usage:

          w_write (x, y, s);
            int   x,y; /* Location */
            char  *s;  /* Pointer to string */


        This function combines W_GOTOXY () and W_WRITE ().  Display NULL 
        terminated string in current window at location (X,Y).  If the 
        right hand side of the window is reached, the cursor will wrap-
        around to the next line. If the cursor reaches the bottom of the 
        current window, the contents of the window will scroll up 1 line. 
        The cursor will locate at the character position immediately 
        beyond the last character in the string.  

        No control characters are recognized, so any character can be 
        displayed. W_FGCOLOR() and W_BGCOLOR() set the background and 
        foreground attributes of the displayed character(s). See 
        C_WDEF.H for the pre-defined display attribute values.  









                                                                       11





                                                      C Windowing Toolbox
   ----------------------------------------------------------------------


    COMPLEMENTARY FUNCTIONS

      The following functions are not part of the windowing environment.  
      They are included because they provide useful windowing support.  


      BORDER - Draw border on screen

        Usage:

          status = border (x, y, wid, hgt, type);
            int  status;  /* 1 if success, 0 if error */
            int  x;  /* Upper left horizontal position */
            int  y;  /* Upper left vertical position */
            int  wid;  /* Width of border */
            int  hgt;  /* Height of border */
            char type;  /* Type of border */

        Draw a border around an area of the screen. X and Y are absolute 
        coordinates, relative to the standard 80 x 25 screen. The upper 
        leftmost coordinate of the standard screen is (0, 0) and the lower 
        right coordinate of the standard screen is (79, 24).

        There are six types of borders:
                (a) type = 0;  /* Border outline is spaces */
                (b) type = 1;  /* Single line border,
                                  Horizontal and vertical */
                (c) type = 2;  /* Double line border,
                                  Horizontal and vertical */
                (d) type = 3;  /* Double horizontal lines,
                                  Single vertical lines */
                (e) type = 4;  /* Single horizontal lines,
                                  Double vertical lines */
                (f) type = 5;  /* Solid block horizontal and vertical */

        The include file C_WDEF.H defines the border types listed above.  
        
        W_FGCOLOR() and W_BGCOLOR() set the background and foreground 
        attributes of the displayed character(s). See C_WDEF.H for the 
        pre-defined display attribute values.  
        
        Be sure to check the return code for 0, the error condition. An 
        error occurs if the border type is not one of the types specified 
        or if the border will not fit on the standard 80 x 25 screen.


      KEYIN - Read a keyboard character

        Usage:

          c = keyin();
            char  c;  /* Character returned */




                                                                       12





                                                      C Windowing Toolbox
   ----------------------------------------------------------------------


        Read the next character entered at the keyboard. The character is 
        not echoed to the screen. C_WDEF.H declares a variable "extend" 
        as EXTERNal CHAR. If the character location "extend" is set to 
        TRUE (1) when KEYIN() returns, then the value returned by KEYIN() 
        is the extended character code. Otherwise, the character is a 
        regular ASCII character. For example: 

                c = keyin();
                if (extend)
                        /* process function keys, etc */
                else
                        /* standard character */


      BEEP - Sound speaker

        Usage:

        beep(count);
          int  count;  /* Duration */

        Beep the speaker. A value of 500 for "count" gives a short chirp. 
        "count" is an integer value, so it must not exceed 32,767.

































                                                                       13





                                                      C Windowing Toolbox
   ----------------------------------------------------------------------


    GETTING THE C SOURCE

        You can get the C Windowing Toolbox source code for $15 from:

             Christopher McVicar
             124 Wellington Heights
             Avon, Connecticut  06001

        The above price includes North American shipping. Add $3 for 
        overseas air mail shipping. I will include a receipt with every 
        order so businesses can keep their records straight. The source 
        will be on a DOS 2.1 formatted single sided 5 1/4" floppy 
        diskette.  
 
        Also on the diskette are:
                (1) A text file explaining what the Lattice C functions 
                    PEEK(), POKE(), and INT86() do.  
                (2) Assembler sources for PEEK(), POKE(), and INT86().  
                (3) Assembler source and .OBJ files for an alternate 
                    screen display function that checks the horizontal 
                    retrace signal of the video display so that no "snow" 
                    appears when writing to the screen.
                (4) A text file indexer program with C source.
                (5) An ImagePrint demonstration. ImagePrint is a print
                    quality enhancing program that my company sells. It
                    runs on Epson (tm) compatible printers.

    DISCLAIMER

        Users of C Windowing Toolbox do so at their own risk. No 
        representations as to the program's suitability for any purpose 
        are made. Users of C Windowing Toolbox are entirely responsible 
        for loss or damage of any kind caused by C Windowing Toolbox.  


    RESTRICTIONS

        Non-commercial users of C Windowing Toolbox may use C Windowing 
        Toolbox without any restrictions.  

        Commercial users of C Windowing Toolbox, i.e. individuals or 
        companies using or planning to use C Windowing Toolbox as part of 
        a saleable product, must contact me, Christopher McVicar, and get 
        written permission to include part or all of C Windowing Toolbox 
        in their product.











                                                                       14



```
{% endraw %}

## $ENVED.BAS

{% raw %}
```bas
10 F$="\$ENVED.DAT": REM Must agree with .DAT file name in ENVED.BAT
20 B$="\$ENVED$.BAT": REM Must agree with .BAT file name in ENVED.BAT
30 OPEN "I",1,F$
40 OPEN "O",2,B$
50 I=0
60 I=I+1: X$=ENVIRON$(I): IF X$="" THEN GOTO 140
70 IF LEFT$(X$,7)="PROMPT=" THEN PRINT# 2, "PROMPT": GOTO 60
80 IF LEFT$(X$,5)="PATH=" THEN GOTO 60
90 IF LEFT$(X$,8)="COMSPEC=" THEN GOTO 60
100 J=2
110 IF MID$(X$,J,1) <> "=" THEN J=J+1: GOTO 110
120 PRINT#2, "SET "+LEFT$(X$,J)
130 GOTO 60
140 INPUT#1, X$
150 IF LEFT$(X$,5)<>"PATH=" AND LEFT$(X$,7)<>"PROMPT=" THEN PRINT#2, "SET ";
160 PRINT#2, X$
170 IF NOT EOF(1) THEN GOTO 140
180 CLOSE 1
190 CLOSE 2
200 SYSTEM
```
{% endraw %}

## FILES885.TXT

{% raw %}
```
Disk No  885
Program Title: MISCELLANEOUS UTILITIES for PROGRAMERS.
PC-SIG version 1
 
    This disk contains miscellaneous utilities in different archived files.
Here is a list of the files and their descriptions:
 
    ENVED2: This helps you edit the DOS environment. You can make changes
for testing or other reasons in a more convenient way than manually using
the SET command.
 
    PASTILS: There are 52 various utility routines for the PASCAL language
in this source code written in PASCAL. Some of these routines are: returns
the left x-coordinates of active window, returns the upper y- coordinates
of active window, returns the right x-coordinates of active window, returns
the lower y-coordinates of active window, turns on/off reverse video,
produces a single click from the PC speaker, calculates a loan payment
amount, gets time/date from system, gets password, convert strings to
lower/upper case, has an auxiliary device driver, serial port input/output,
saves/restores a current/previous screen, and more.
 
    87DTEC: This utility is given with two source codes to be compiled. One
is coded in the C language and the other in Assembler. Once compiled and
linked together, the program gives you the features, video features, and
CPU type of your machine. It can also determine your machine compatability,
illustrate the timing delays, test for the presence of the ANSI.SYS file
and the presence of a math co-processor (8087 or 80287).
 
    TC-HELP: This program is a reference guide to the library function of
TURBO C version 1.0. TCHELP searches the reference guide (a file named
TC.DAT) for the specified function, and displays the information about it
to the console.
 
    TC10PAT: This program reads a text from a '.DIF' file and applies the
patch to the program file. The '.DIF' file is relatively free format.
 
    TPC: TPC reads a TURBO PASCAL source file and converts it into the
corresponding C source code. It does about 90% of the work required to do
the translation, (a macro header is included).
 
    UCTURBO2: This is a library that contains over 200 functions written in
C and Assembler. There is a wide variety of graphics functions along with
general purpose functions and functions to control the graphics dot matrix
and a daisy wheel printer.
 
    C-WINDOW is a special windowing-cursor control, with string, character
display and border drawing included. Everything happens at top speed
because B-WINDOW was written in C, converted to Assembler, and
hand-optimized. The C WINDOWING TOOLBOX (C-WINDOW) programs on this disk
perform the same function for the programming language C (Lattice C or
Microsoft C version 3 or 4).
 
Usage: Programing Utilities
 
System Requirements: 128K memory and two disk drives.
 
How to start: Type: GO (press enter).
 
File Descriptions:
 
87DTEC   ARC  System informations.
ENVED2   ARC  Edit DOS environment utility.
PASTILS  ARC  52 different routines for the PASCAL language.
TC-HELP  ARC  Reference guide to the TURBO C library functions.
TC10PAT  ARC  Patch a '.DIF' file into a program file.
TPC      ARC  A PASCAL to C conversion program.
UCTURBO2 ARC  Over 200 functions written in C and assembler.
PKXARC   COM  Unarchiving utility.
-------- ---  C WINDOWING TOOLBOX Version 1.2
C_WREAD  ME   C_WINDOW updates & notes.
C_WINDOW DOC  Documentation for C_WINDOW.
C_WINLAT OBJ  Windowing for C. Link to your Lattice C programs.
C_WINMSC OBJ  Windowing for C. Link to your Microsoft C programs.
C_WDEF   H    Include file. Defines C_WINDOW functions, variables.
C_WDEMO  C    Windowing demo source code.
C_WDEMO  EXE  Windowing demo program.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║   <<<<  Disk No 885 MISCELLANEOUS UTILITIES for the C PROGRAMER  >>>>   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ The files on this disk are archived and must be expanded before they    ║
║ can be used.                                                            ║
║                                                                         ║
║ If you're using a two floppy system, insert a blank formatted disk in   ║
║ your B drive, and enter:                                                ║
║                                                                         ║
║          A:PKXARC A:filename                                            ║
║                                                                         ║
║ Insert the name of the file you wish to unarchive where <filename> is   ║
║ written. The unarchived files will be put on your B drive.              ║
║                                                                         ║
║ If you're using a Hard disk, copy PKXARC.COM and the file you wish to   ║
║ unarchive into a subdirectory on your hard drive and enter:             ║
║                                                                         ║
║          PKXARC filename                                                ║
║                                                                         ║
║ Insert the name of the file you wish to unarchive where <filename> is   ║
║ written. The unarchived files will be put on your C drive.              ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PATCH.DOC

{% raw %}
```
PATCH.COM

Syntax: patch [-u] dif_file prog_file [out_file]

PATCH.COM reads the text from dif_file and applies the patch to prog_file.
The diff file is relatively free format. Any number of spaces or tabs can
appear between two values, and any number of spaces, tabs, and blank lines
can appear between lines.  The file consists of zero or more pairs of lines
in the following format:

   offset: newbyte [newbyte ...]
           oldbyte [oldbyte ...]

All values are represented in the file using hexidecimal digits.  The value
of offset can range from 0 to 7FFFFFFF hex.  The values of new and old bytes
can range from 0 to FF hex.

Comments can be inserted in the file by starting a new line with
a semicolon (;).

----------------------------------- Example --------------------------------
; Example patch file
    6:  88
        85
 1DEE:  74 1A 52 7F FF 77 00
        73 00 1A 52 7F ff 77
; notice the free format
03636: 053 08  5B     19 71 8  5B    19

00 00   00 00 00 00  00 0
----------------------------------------------------------------------------

As you can see from the first two pairs, the diff file is more readable when
formatted nicely.  But, you can be pretty flexible as shown in the third
pair of lines.  Note: The first line of each pair contains the new byte values
while the second line contains the old byte values.

When applying a patch, PATCH.COM makes a first pass to check that all bytes
in the file which will be changed, currently match the old values which are
defined in dif_file.  If they don't, an error message is printed and the
patch is not applied.  If they do match, all the corresponding bytes are
changed to their new values.  If any error occurs during this second step,
it is most likely an out of disk space error.  During the update, a backup
copy of your original file (.BAK) is kept.  This means you need twice as
much disk space if your input and output files are on the same disk drive.
In case of an error, the temporary file is usually deleted and the .BAK file
is renamed back to the original name.  If something else goes wrong, like a
power outage, you should still have your original file on the disk with a
.BAK extension.

After the patch is completed:
  If the output file is the same as the input file, the .BAK file is deleted.
  If the output file is different than the input file, the .BAK file is
  renamed back to its original name.

The -u option cause PATCH.COM to undo the patch defined in dif_file.  In this
case, it checks that all the bytes to be modified match the new byte values
on the first line of each pair.  It then changes the corresponding bytes to
the old byte values defined on the second line of each pair.

The last parameter (out_file) is optional.  If defined, the patched version
of the original file will be saved under the name specified by out_file, and
the original file will be left intact.  If it is not specified, the patched
version of the file will have the same name as the original version of the
file, and the original version of the file will be lost.

Note:  Because PATCH.COM checks the old values of each byte to be patched,
two or more patches which affect the same byte must be applied in order.
Also, because of the fixed offsets defined in dif_file, the same dif_file will
probably not be usable with multiple versions of the program file being
patched.

```
{% endraw %}

## TPC.DOC

{% raw %}
```

TPC - Translate Pascal to C.
(C) Copyright 1986 by Samuel H. Smith; All rights reserved.

Please refer all inquiries to:
    S.H.Smith
    5119 N 11 Ave 332
    Phoenix, AZ 85013

You may copy and distribute this program freely, provided that:
    1)   No fee is charged for such copying and distribution, and
    2)   It is distributed ONLY in its original, unmodified state.

If you like this program, and find it of use, then your contribution 
will be appreciated.  If you are using this product in a commercial 
environment, then the contribution is not voluntary. 


Usage:  TPC d:path\filename[.ext] [>outfile]
 
  d:   drive and path are optional
  ext  defaults to .PAS

Example:
        TPC program.pas >program.c


This program will read a turbo pascal source file and convert it into 
the corresponding C source code.   It does about 90% of the work 
required to do the translation. 


The following language constructs are translated:
------------------------------------------------

   Comments are translated from either {...} or (*...*) into /*...*/.

   Begin and End are translated into { and }.

   Const declarations are translated from
      ID = VALUE
   into
      static ID = VALUE.

   Simple Var declarations are translated from
      ID TYPE
   into 
      TYPE ID.

   The following simple types are translated
      from  BOOLEAN    to   char,
            INTEGER    to   int,
            REAL       to   double.

   Record types are translated from 
      ID = record MEMBER-LIST end
   into
      typedef struct { MEMBER-LIST } ID.

   Enumeration types are translated from 
      ID = (...)
   into
      typedef enum {...} ID.

   Array types are translated from 
      ID = array [RANGE] of TYPE
   into
      typedef TYPE ID[RANGE].

   Pointer types are translated from
      ID = ^DEFINED-TYPE
   into
      DEFINED-TYPE *ID.

   String types are translated from
      ID = string[N]
   into 
      typedef char ID[N].

   File types are translated from
      ID = text[N]
      ID = text
   into
      FILE *ID
      int ID.

   For statements are translated from
      for VAR := FIRST to LAST do STATEMENT
      for VAR := FIRST downto LAST do statement
   into
      for (VAR = FIRST; VAR <= LAST; VAR++) STATEMENT
      for (VAR = FIRST; VAR >= LAST; VAR--) STATEMENT

   While statements are translated from
      while COND do STATEMENT
   into
      while (COND) statement.

   Repeat statements are translated from
      repeat STATEMENTS until COND
   into
      do { STATEMENTS } while(!COND).

   If statements are translated from
      if COND then STATEMENT else STATEMENT
   into
      if (COND) STATEMENT; else STATEMENT.

   Case statements are translated from
      case VALUE of
         V:    STATEMENT;
         V,U:  STATEMENT;
         else  STATEMENT
      end
   into
      switch (VALUE) {
         case V:  STATEMENT; break;
         case V:  
         case U:  STATEMENT; break;
         default: STATEMENT; 
      }.

   The IN operator is translated from
      VAL in [A,B,C]
    into 
      inset(VAL, setof(A,B,C,-1)).

   The ParamCount and ParamStr functions are translated from
      paramcount
      paramstr(n)
   into 
      arcv
      argv[n].

   Dummy parameter lists are added to function and procedure calls, 
   where they are required in C but not in Pascal. 

   The following expression operators are translated
      from  DIV  to   /,     MOD  to   %,
            AND  to  &&,     OR   to  ||,
            XOR  to   ~,     <>   to  !=,
            NOT  to  ! ,     SHR  to  >>,
            SHL  to  <<,     =    to  ==,
            :=   to   =.

   The '^' symbol is translated
      from  VAR^          to  *VAR,
            VAR^.MEMBER   to  VAR->MEMBER.

   Exit statements are translated 
      from  exit    to  return.

   The New operator is translated from
      new(VAR)
   into 
      VAR = malloc(sizeof(*VAR)).

   The special value, nil, is translated into NULL.

   Procedure/function formal parameter lists are translated into a 
      separate procedure declaration and parameter variable 
      declarations, as required by C, e.g.
   from
      function NAME(V1: TYPE1; V2: TYPE2): TYPE3
   into
      TYPE3 NAME(V1,V2)
      TYPE1 V1;
      TYPE2 V2;

   Procedures are translated into functions with 'void' return types.

   The special character literal syntax, ^C or #nn, is translated into 
   '\ooo', where ooo is the octal notation for the ascii code. 

   Hex constants $hhhh are translated into 0xhhhh.

   Write and WriteLn are translated from:
      write(VAR,VAR:n,VAR:n:m)
      writeln(FILE,VAR,VAR,VAR)
   into
      printf("%d%nd%n.md",VAR,VAR,VAR)
      fprintf(FILE,"%d%d%d\n",VAR,VAR,VAR).

   Read and ReadLn are translated from:
      read(VAR,VAR,VAR)
      readln(FILE,VAR,VAR,VAR)
   into
      scanf("%d%nd%d",&VAR,&VAR,&VAR)
      fscanf(FILE,"%d%d%d\n",&VAR,&VAR,&VAR).

   String assignments are translated from:
      VAR := "string"
      VAR := VAR1 + "string"
   into
      strcpy(VAR, "string")
      strcpy(VAR, concat(VAR1, "string")).

   String comparisons are translated from:
      VAR == "string"
      VAR < "string"
      "string" >= VAR
   into
      (strcmp(VAR,"string") == 0)
      (strcmp(VAR,"string") < 0)
      (strcmp("string",VAR) >= 0).

   Function value assignments are translated from:
      FUN_NAME := expr
   into
      return expr.

   Compiler directives are translated
      from  {$B+/-}   to  #pragma standard_io(ON/OFF),
            {$C+/-}       #pragma control_c_check(ON/OFF),
            {$D+/-}       #pragma device_check(ON/OFF),
            {$Fn}         #pragma max_files(n),
            {$Gn}         #pragma input_file_buffer(n),
            {$I name}     #include "name",
            {$I+/-}       #pragma io_error_check(ON/OFF),
            {$K+/-}       #pragma stack_check(ON/OFF),
            {$Pn}         #pragma output_file_buffer(n),
            {$R+/-}       #pragma range_check(ON/OFF),
            {$U+/-}       #pragma user_interrupt(ON/OFF),
            {$V+/-}       #pragma param_type_check(ON/OFF).




Some language features that are not translated:  
-----------------------------------------------

   Nested procedures or function cannot be coded in C.

   VAR parameters must be manually recoded.

   File access procedures need to be coded (reset, assign, close, etc.).

   Ranges in the form VAL..VAL are not translated in case statements.

   Forward pointer type declarations are translated, but will not 
   compile in C.  They must be manually recoded. 

   Variant record types should be translated into unions, but aren't.

   Bitwise AND and OR operators are always translated into the logical 
   operators && and ||. 

   C operator precidence differs from that of Pascal, and the 
   differences are not translated. 

   The With statement is not translated.

   The MEM[] and PORT[] arrays are not translated.  These should be 
   turned int function calls. 

   Absolute variables are not (and probably cannot be) translated.



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0885

     Volume in drive A has no label
     Directory of A:\

    C_WDEF   H        2635   1-04-86   4:53p
    C_WINMSC OBJ      7285   1-13-87   9:26p
    C_WINLAT OBJ     10443   1-13-87   9:20p
    C_WDEMO  EXE     15446   1-13-87   1:35p
    C_WINDOW DOC     34821   1-16-87  11:09a
    C_WDEMO  C        6306   1-16-87  11:20a
    C_WREAD  ME       1339   1-16-87  10:46a
    PKXARC   COM     12242   4-27-87
    87DTEC   ARC     18560   7-03-87  10:53p
    PASTILS  ARC     23552   7-05-87   9:47a
    TC10PAT  ARC     13312   7-05-87   9:48a
    TC-HELP  ARC     45056   7-13-87  10:45p
    UCTURBO2 ARC     94208   7-13-87  10:37p
    ENVED2   ARC     10240   7-27-87  10:50p
    TPC      ARC     33024   7-27-87  10:39p
    GO       BAT        38  12-03-87  11:08a
    GO       TXT      1695  12-03-87  11:10a
    FILES885 TXT      3805  12-07-87   8:42a
           18 file(s)     334007 bytes
                           19456 bytes free
