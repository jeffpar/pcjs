---
layout: page
title: "PC-SIG Diskette Library (Disk #196)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0196/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0196"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 11"

    These programs let you speed your file-handling chores greatly. You can
    copy or delete multiple files at a time, compare directory listings to
    find duplicates, and move or rename files easily.  Also, we have
    included an interesting program to allow the user to prepare and show
    computer generated `slides' on your color graphics monitor.
    
    System Requirements:  DOS 2.0 or greater, 80-column display.
    
    How to Start: To run a COM or EXE program simply type its name and
    press <ENTER>.  For instructions on ASM listings, refer to your
    Assembler manual.  To read DOC files simply enter TYPE filename.ext
    and press <ENTER>.
    
    File Descriptions:
    
    README        Listing of included files
    DIRCOMP  COM  Compares two directories and lists files found in both
    EQUIP102 COM  Displays system equipment configuration
    SLIDE    COM  Prepare slides on graphics display
    MV       DOC  Documentation for above
    MV       EXE  Sophisticated file move/rename utility
    EQUIP102 DOC  Documentation for above
    SHOW     EXE  Show prepared slides on graphics display
    SLIDE    ASM  Source for above
    SHOW     ASM  Source for above
    UTIL102  COM  Copy/delete multiple files
    UTIL102  DOC  Documentation for above
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #196, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  EQUIP102.DOC         CRC = AA 26

--> FILE:  EQUIP102.COM         CRC = 72 24

--> FILE:  UTIL102 .DOC         CRC = 03 4F

--> FILE:  UTIL102 .COM         CRC = 1B 2A

--> FILE:  DIRCOMP .COM         CRC = 71 DB

--> FILE:  SLIDE   .ASM         CRC = C0 EA

--> FILE:  SHOW    .ASM         CRC = EA 3A

--> FILE:  SHOW    .EXE         CRC = 6F BD

--> FILE:  SLIDE   .COM         CRC = 1B F5

--> FILE:  MV      .DOC         CRC = A9 4D

--> FILE:  MV      .EXE         CRC = 98 B1

--> FILE:  READ    .ME          CRC = E4 60

 ---------------------> SUM OF CRCS = 09 D2

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## MV.DOC

{% raw %}
```


                Omen Technology Inc

NAME
        mv - move or rename files

SYNOPSIS:

        mv file1 file2

        mv file ... directory

        Mv changes the name of file1 to file2.  Mv attempts to use the
        DOS rename function to change the file name.  If DOS indicates
        the source and destination are on different devices, the file
        is copied and then deleted.  If DOS indicates file2 exists, mv
        attempts to determine whether file1 and file2 are the same file.
        If they appear different, mv deletes file2 and then performs
        the mv function.

        The second command form moves one or more files (wildcards OK)
        to the destination disk and/or directory.


BUGS:
        DOS 2.x Only.

        Wildcards allowed on the file name part only.

        Time, date, and file attributes are not preserved in copy operations.

        Mv checks the identity of file1 and file2 by comparing file length,
        date, time, and attribute.  A better methoud would be to compare
        the device and starting FAT number, but, alas, Microsoft didn't
        understand the Unix(TM) stat call when they made the "Unix style"
        DOS 2.x calls.

        This program may be freely distributed but not sold.


Press ENTER to continue: x style"
        DOS 2.x calls.

        This program may be freely distri
```
{% endraw %}

## SHOW.ASM

{% raw %}
```
	page	 ,132
;*********************************************************
;                                                        *
;           (c) Copyright Jay Kadashaw 1984              *
;                                                        *
;*********************************************************


	title   *** PROGRAM TO SHOW SLIDES ***
stack    segment  para  stack  'stack'
	db      256  dup (0)
stack    ends


;***************************************************************
; This is the data area starting at 400h used by the ROM BIOS  *
;routines.  ADDR_6845 contains the base address, 3x4, of the   *
;current display adapter and CRT_MODE_SET contains the current *
;setting of the display mode -- the 3x8 register.  Here x B    *
;for the monochrome display adapter, and D for the             *
;color-graphics adapter.                                       *
;***************************************************************

rom_bios_data   segment at 40h
         org    10h
;***************************************************************
;                                                              *
;          - - - - - - - - I - - - - - - - - equip_flag        *
;                                ^ ^ -- display type           *               *
;  display type 1 - color card 40x25                           *
;               2 - color card 80x25                           *
;               3 - monochrome display                         *
;                                                              *
;  see p. A-73 of the Ref. Manual for a definition of          *
;  equip_flag                                                  *
;                                                              *
;***************************************************************

;***************************************************************
;                                                              *
;                EQUATES                                       *
;                                                              *
;***************************************************************
port_b	equ	61h	 	;8255 port b addr
timer	equ	40h


equip_flag      dw     ?     ;Used to determine display type
		org    17h
kb_flag		db     ?
alt_shift	equ    08h   ;alternate shift key depressed
ctl_shift       equ    04h   ;control shift key depressed
left_shift      equ    02h   ;left shift key depressed
right_shift     equ    01h   ;right shift key depressed
num_state       equ    20h   ;num lock state has been toggled
scroll_state    equ    10h   ;scroll lock state has been toggled
                org    49h
crt_mode        db     ?     ;current crt mode
crt_cols        dw     ?     ;number of columns on screen
crt_len         dw     ?     ;length of regen in bytes
crt_start       dw     ?     ;starting address in crt buffer
cursor_posn     dw     8 dup(?) ;curson for each of up to 8 pages
cursor_mode     dw     ?     ;Current cursor mode(start, stop line)
active_page     db     ?
addr_6845       dw     ?     ;Base address for active display card
crt_mode_set    db     ?     ;current setting of 3x8 register
crt_palette     db     ?
rom_bios_data  ends


graphics_memory	segment at 0b800h
graphics_word	dw	?
graphics_memory	ends

data     segment para  public  'data'
screen	   db	4000h dup (0)
crt_mode_2         db    0   ;current crt mode
crt_cols_2         dw    0   ;number of columns on screen
crt_len_2          dw    0   ;length of regen in bytes
crt_start_2        dw    0   ;starting address in crt buffer
cursor_posn_2      dw 8 dup (?) ;cursor for each of up to 8 pages
cursor_mode_2      dw    0   ;current cursor mode (start, stop line)
active_page_2      db    0
addr_6845_2        dw    0   ;base address for active display card
mode_reg	   db	 0   ;port address 3d8h
color_select_reg   db	 0   ;port address 3d9h
screen_loc dw	0b800h


Copy_right db   '  (c) Copyright Jay Kadashaw 1984  '

fcb        db   2,'slide   '
           db   '000'
           db   2 dup (0)
recd_size  dw	0
	   db	17 dup (0)
recd_num   dw	0
	dw	0



message1   db	'filename=$'
message2   db	'Invalid file name!  Re-enter'
	   db	'                $'
error1     db   'Unexplained I/O error!!!$'
no_space_msg  db	'Insufficient space for record!$'
no_data_msg   db 'The record contained no data!$'
partial_recd_msg db 'Partial record read!$'
proceed2   db   'Press any key to continue $'
proceed	db	'Proceed (y/n)? $'
re_try     db   'Abort, Retry, Ignore? $'
invalid_parm db 'Invalid parameter!$'
file_not_found db ' cannot be found$'
to_many    db   'Maximum number of files exceeded!!!$'
graphics_required db 'The graphics board is required for this '
		  db 'program!!!$'
file	   db	15,0,15 dup (' ')
	   db	0dh
pri        db   0
ext        db   0
search     db   0
row        db   0
col        db   0
mode       db   'p'
quit       db   'quit'
file_cnt   db   0
the_file   db   0
file_num   db   0
file_save  db   1
max_files  equ  100
file_description equ 15
files      db   max_files*file_description dup (' ')
file_hold  db   0
bx_save    dw   0
graphics   db   1
palette    db   0
color_original db 0
back_ground db   0
pfks   db  '1 Mode   2 Background   3 Palette   4 Replace   5 Save'
	db	'   9 Next    10 Exit$'
table      db   7,8,9,0ffh,4,5,6,0ffh,1,2,3,0
equip_save dw   0
replace	db	's'
cr	      equ   0dh      ;carriage return
lf            equ   0ah      ;line feed
eof           equ   1ah      ;end of file
drive	      equ   fcb
file_name     equ   fcb+01h
file_ext      equ   fcb+09h
record_size   equ   fcb+0eh
data     ends
	page
	subttl  DEFINITION OF MACROS
scroll	 macro
	mov     ah,6        ;scroll to clear screen
	mov     al,0        ;clear screen
	mov     bh,7        ;normal attribute
	mov     cx,0        ;row,column of upper left corner of
;                             scroll
	mov     dh,24       ;row of lower right corner
	mov     dl,79       ;column of lower right corner
	bioscall	     ;invoke bios to scroll window
	endm
;
bioscall macro
	 int   10h	     ;request bios service, id in ah
	endm
;
locate	 macro row,col
;        call BIOS to do LOCATE
         mov   dh,row        ;row
         mov   dl,col        ;column
         mov   bh,0          ;screen number
	 mov   ah,2	     ;function selected = locate
	 bioscall	     ;invoke bios to move the cursor
	endm
;
doscall  macro
	int   21h	     ;request dos service, id in ah
	 endm
;
display  macro text
	mov   dx,offset text ;Point to message to print.
	mov   ah,9	      ;Function selected = console output
	doscall
	endm
;
keyboard macro  response
	 mov	ah,10	      ;Function selected = read keyboard
	 lea	 dx,response
	 doscall
	 endm
;
setdta	 macro	our_dta
	 mov	ah,01ah       ;Function selected = set dta
	 lea	dx,our_dta
	 doscall
	 endm
;
create	 macro	fcb
	 mov	ah,016h       ;Function selected = create fcb
	 lea	dx,fcb
	 doscall
	 endm
;
open  	 macro	fcb
	 mov	ah,0fh        ;Function selected = open fcb
	 lea	dx,fcb
	 doscall
	 endm
;
delete	 macro	fcb
	 mov	ah,013h       ;Function selected = delete file
	 lea	dx,fcb
	 doscall
	 endm
;
srch_dir macro	fcb
	 mov	ah,011h       ;Function selected = search unopened
	 lea	dx,fcb        ; directory
	 doscall
	 endm
;
close	 macro	fcb
	 mov	ah,010h       ;Function selected = close fcb
	 lea	dx,fcb
	 doscall
	 endm
;
rwrite	 macro	fcb
	 mov	ah,022h       ;Function selected = random write
	 lea	dx,fcb
	 doscall
	 endm
;
rread 	 macro	fcb
	 mov	ah,021h       ;Function selected = random read
	 lea	dx,fcb
	 doscall
	 endm
;
seqread	 macro	fcb
	 mov	ah,014h       ;Function selected = sequential read
	 lea	dx,fcb
	 doscall
	 endm
;
default  macro	drive
	 mov	ah,019h       ;read default drive
	 doscall
         inc    al
	 mov	drive,al
	 endm
;
biosread macro
         mov   ah,0
         int   16h
         endm
;
chkbuff  macro   empty
         mov     ah,1              ;check status of keyboard
         int     16h               ;buffer
         jz      empty             ;jmp if empty
         endm
;
biosprnt macro
         mov   ah,14
         mov    bh,0
         int   10h
         endm
;
biosprnt_cnt macro what
         local  next
         mov    si,offset what
next:
         mov    ah,14
         mov    bh,0
         mov    al,byte ptr [si]
         push   cx
         mov    cx,1
         int    10h
         pop    cx
         inc    si
         loop   next
         endm
;
set_mode macro   mode
         mov     ah,0         ;set graphics mode
         mov     al,mode
         int     10h
         endm
;
set_background macro  color
         mov      bh,0              ;set backround
         mov      bl,color
         and      bl,1fh
         mov      ah,11
         int      10h
         endm
;
set_palette macro  color
         mov      bh,1              ;set pallete
         mov      bl,color
         mov      cl,5              ;shift right 5 bits
         shr      bl,cl
         mov      ah,11
         int      10h
         endm
	 page
         subttl      Initialization
code	 segment para public 'code'
start	 proc	far

;      Standard  program prologue except retain DS as ptr to PSP

	assume    cs:code,ss:stack
	push  ds
	mov   ax,0
	push  ax
	mov   ax,data             ;establish addressability
	push   ax
	mov   es,ax               ;to the data segment
      	assume     es:data

;	verify that the graphics board is installed

	mov    bx,graphics_memory
	push   ds
	mov    ds,bx
	assume ds:graphics_memory
	mov	ax,graphics_word	;read word from memory
	inc	ax			;increment word
	mov	graphics_word,ax	;write word to memory
	mov	bx,graphics_word	;re-read word
	cmp	ax,bx			;changed?
	jne	not_graphics		;yes ==> jmp
	dec	ax			;restore original word
	mov	graphics_word,ax
	jmp	is_graphics
not_graphics:
	pop    ds
	pop    ds
	assume	ds:data
	display graphics_required
	ret
is_graphics:
	assume ds:nothing

	mov    bx,rom_bios_data
	mov    ds,bx
	assume ds:rom_bios_data
	mov    ax,equip_flag      ;save equip-flag upon entry
	assume ds:nothing
	pop    ds
	mov    equip_save,ax

         and    ax,30h	;turn off all but display
         cmp    ax,30h	;monochrome
         je     it_is_mono	;yes ==> don't change

;        set mode - 80x25 Color, Alpha

	mov  al,3
	mov  ah,0
	int  10h
it_is_mono:
	pop  ax

;        Move parameter string if any to data segment
;        The only allowable parameter is a file name.

         mov  si,80h         ;length of parameter
         mov  di,offset file+1
         mov  cx,1           ;string length to move
         cld                 ;'forward' direction
         rep  movsb          ; move parm
         cmp  file+1,0       ;Parm?
         je   no_parm        ;no ==> jmp
         mov  cl,file+1
         dec  cl
         mov  file+1,cl
         cmp  file+1,0fh     ;max. length of parm
         ja   bad_parms      ;to long ==> jmp
         sub  cx,cx
         mov  cl,file+1
         mov  si,82h
         mov  di,offset file+2
         cld                 ;'forward' direction
         rep   movsb
         mov   ds,ax
         assume     ds:data
         jmp     get_files
bad_parms:
         call    loc_proc
         display invalid_parm
         ret
get_files: mov  mode,'f'
           call find_files
           cmp   ax,0           ;valid?
           jz    get_files_2    ;yes ==> jmp
           ret                  ;file could not be found
get_files_2:
           mov   row,24
           call  loc_proc
           display proceed2
           biosread
           mov   the_file,0
           jmp   next_one
no_parm: mov   mode,'p'        ;prompt mode
         mov   ds,ax
next_one:
         cmp     mode,'p'          ;prompt mode?
         je      get_name
         inc     the_file          ;file being worked on
         sub     ax,ax
         mov     al,the_file
next_one_2:
         mov     cl,al             ;find file name
         dec     cl
         mov     al,file_description
         mul     cl
         mov     bx,ax             ;bx contains the offset to the
                                   ;count field
         sub     cx,cx
         mov     cl,byte ptr files [bx]      ;get count
         mov     file+1,cl
         inc     bx                ;increment past count
         mov     di,0
get_a_byte:
         mov     al,byte ptr files [bx]
         mov     byte ptr file+2[di],al
         inc     bx
         inc     di
         loop    get_a_byte

;	 clear file_name field in fcb

         clc
	 mov  di,offset file_name
	 mov  ax,ds
	 mov  es,ax
	 mov  al,' '
	 mov  cx,13
	 rep  stosb

         call    valid_file
         jmp     do_read
get_name:
         cmp     mode,'p'
         jne     not_p2
         mov     graphics,1
         mov     palette,0
         mov     back_ground,0
not_p2:
	call	 get_file_name
	cmp	ax,2		;F10 (exit)?
	jne	notF10
	ret
notF10:
	mov     di,offset file_name
	mov     ax,ds
	mov     es,ax
	mov     si,offset quit
	mov     cx,4
	repe    cmpsb
	jne     do_read
	ret
do_read:
	mov     row,24            ;force scroll
	call    dsk_read
	cmp     ax,0              ;Read ok?
	jne     do_read2          ;no ==> jmp
	mov     al,color_select_reg
	mov     color_original,al
	jmp     rest
do_read2:
	cmp     ax,2              ;Ignore error?
	jne     tst_ax_3
	jmp     next_one
tst_ax_3:
         cmp     ax,3
         jne     xxxx
         ret
xxxx:
         call    loc_proc
         display proceed2
	 biosread           	   ;read response from keyboard
rest:	 call	 restore_screen
rest2:   biosread	;wait for user to press a key
         cmp    mode,'p'	;prompt mode?
         jne    not_prompt
         jmp    prompt_mode        ;yes ==> jmp
not_prompt:
         mov    bx,rom_bios_data
         push   ds
         mov    ds,bx
         assume ds:rom_bios_data
         test   kb_flag,num_state  ;num_lock toggled
         pop    ds
         assume ds:data
         jnz    random_search      ;yes ==> jmp
         cmp    ah,47h             ;save position?
         je     save_position
         cmp    ah,4fh	;exchange position
         je     exchange_position
         cmp    ah,48h	;scroll up?
         je     scroll_up	;yes ==> jmp
         cmp    ah,50h	;scroll down?
         je     scroll_down	;yes ==> jmp
         cmp    ah,1h	 ;Esc?
         jne    not_esc
         mov    ax,equip_save
         and    ax,30h	;turn off all but display
         cmp    ax,30h 	;monochrome
         je     is_mono	;yes ==> don't change
	mov  al,3	;set mode - 80x25 Color, Alpha
	mov  ah,0
	int  10h
is_mono: ret
save_position:
         mov    al,the_file
         mov    file_save,al
         jmp    rest2
exchange_position:
	mov    al,file_save
	cmp	al,the_file	;same file?
	je	rest2	 	;yes ==> ignore request
	mov    the_file,al
	jmp    next_one_2
not_esc:
	call	beep
	jmp	rest2		;ignore invalid key stroke
scroll_up:
         cmp     the_file,1        ;first file?
         je      rest2             ;yes ==> jmp
         dec     the_file          ;go towards top
         sub     ax,ax
         mov     al,the_file
         jmp     next_one_2        ;no ==> jmp
scroll_down:
         mov     al,the_file
         cmp     al,file_cnt       ;Is this the last file?
         je      rest2             ;already at end!
         inc     the_file          ;go to next file
         sub     ax,ax
         mov     al,the_file
         jmp     next_one_2
random_search:
         mov     file_num,0
         jmp     random_search_3
bad_value:
	call	beep
random_search_2:
         mov    bx,rom_bios_data
         push   ds
         mov    ds,bx
         assume ds:rom_bios_data
         test   kb_flag,num_state  ;num_lock still toggled
         pop    ds
         assume ds:data
         jz     got_random	;no ==> jmp
         chkbuff random_search_2   ;nothing in buffer, check num_lock
         biosread
random_search_3:

;	after pressing the NumLock key the user may enter
;	the slide number by using either the numeric key pad
;	or the digits on the top row of the keyboard.

	cmp	ah,2h
	jb	chk_num_pad
	cmp	ah,0bh
	ja	chk_num_pad
	cmp	ah,0bh
	jne	search_3_b
	mov	ax,0
	jmp	did_xlat
search_3_b:
	mov	al,ah
	dec	al
	jmp	did_xlat
chk_num_pad:
	cmp     ah,47h            ;numerical value on keypad?
	jb      bad_value         ;no ==> ignore it
	cmp     ah,52h            ;numerical value on keypad?
	ja      bad_value         ;no ==> ignore it
         cmp     ah,4ah
	je	bad_value
	cmp     ah,4eh
	je      bad_value
	sub     ah,47h            ;prepare for translate
	mov     al,ah
	mov     bx,offset table
	xlat    table             ;fetch table value into al
did_xlat:
;
;        The following computes: file_num * 10 + al
;
         sub     ah,ah
         push    ax
         mov     al,0ah            ;prepare for byte mult.
         mul     file_num
         pop     bx
         add     ax,bx
         mov     file_num,al
         jmp     random_search_2
got_random:
         mov     al,file_num
         cmp     al,file_cnt
         ja      to_high
	cmp	file_num,0	;was a value entered?
	jne     file_num_ok	;yes ==> jmp
	call	beep
	mov	al,the_file	;don't move
	jmp	next_one_2	;no ==> jmp
file_num_ok:
         mov     the_file,al
         jmp     next_one_2
to_high:
	call	beep
	jmp     rest2
         page
;*******************************************************************
;                                                                  *
;        F1 is used to set the graphics mode                       *
;                                                                  *
;        F2 is used to set the back ground color                   *
;                                                                  *
;        F3 is used to set the medium resolution palette           *
;                                                                  *
;        F4 is used to replace the editted file                    *
;                                                                  *
;        F5 is used to save the editted file possibly under a      *
;           different name.                                        *
;                                                                  *
;        F9 is used to go to the next slide                        *
;                                                                  *
;        F10 is used exit exit the program                         *
;                                                                  *
;*******************************************************************
prompt_mode:
         cmp    ah,3bh             ;F1?
         jne    not_f1             ;no ==> jmp
         mov    al,color_original
         mov    color_select_reg,al
         mov    palette,0
         cmp    graphics,7
         jb     graphics_ok
;        mov    graphics,0
         mov    graphics,1
graphics_ok:
	cmp	graphics,5	;do not use 320x200 B/W graphics
	jne	graphics_ok_2
	inc	graphics
graphics_ok_2:
	cmp	graphics,2	;do not use 80x25 B/W, Alpha
	jne	graphics_ok_3
	inc	graphics
graphics_ok_3:
         mov    al,graphics
         mov    crt_mode_2,al
         inc    graphics
         jmp    rest
not_f1:
         cmp    ah,3ch             ;F2?
         jne    not_f2             ;no ==> jmp
;
;        set back ground color
;
         cmp    back_ground,32
         jb     do_f2
         mov    back_ground,0
do_f2:
         and    color_select_reg,0e0h
         mov    al,color_select_reg
         or     al,back_ground
         or     color_select_reg,al
         inc    back_ground
         jmp    rest
not_f2:
         cmp    ah,3Dh             ;F3?
         jne    not_f3             ;no ==> jmp
         xor    color_select_reg,20h
	cmp	crt_mode_2,3	;graphics mode?
	ja	do_rest		;yes ==> jmp
	jmp	rest2		;no ==> ignore command
do_rest:
	jmp	rest
not_f3:
         cmp    ah,3Eh             ;F4?
         jne    not_f4             ;no ==> jmp
	mov	replace,'r'
         call   dsk_write
	jmp	rest2
not_f4:
	cmp	ah,3fh		;F5?
	jne	not_f5		;no ==> jmp
         call   get_file_name
	cmp	ax,2		;F10 (exit)?
	je      go_back
try_proceed_again:
         call    loc_proc
         display  proceed
 	 biosread          	   ;read response from keyboard
         mov  ah,14                ;display the character
         int  10h
	 cmp  al,'Y'
         je   do_wrt
         cmp  al,'y'
         je   do_wrt
	 cmp  al,'N'
         je   rest_x
         cmp  al,'n'
         je   rest_x
         call beep
	jmp	try_proceed_again
do_wrt:	mov 	replace,'s'
	call    dsk_write
rest_x:	jmp	rest
not_f5:
	cmp	ah,43h		;F9?
	je	not_p		;yes ==> prompt for next one
	cmp	ah,44h		;F10?
	je	go_back
	jmp	rest2		;invalid char. so ignore it
go_back:
	ret			;end it
         page
not_p:
;
;        set mode - 80x25 Color, Alpha
;
         mov  al,3
         mov  ah,0
         int  10h
;                                   continue
	 jmp     next_one
start    endp
         page
	subttl  find files
find_files proc       near
	default  drive

;	 clear file_name field in fcb

         clc
	 mov  di,offset file_name
	 mov  ax,ds
	 mov  es,ax
	 mov  al,' '
	 mov  cx,13
	 rep  stosb

	call valid_file
	cmp  ax,0	  ;Valid file name?
	jz   files_2	;yes ==> branch
	ret		;return if invalid file name
files_2:

;	determine if file already exists

	setdta  file_hold
         open    fcb
	 cmp	 al,0	     ;open ok?
         jnz     cannot_open_2
	 jmp	 open_ok_2   ;file found ==> jmp
cannot_open_2:
         mov     row,24
         call    loc_proc
         display message1
         sub     cx,cx
         mov     cl,byte ptr file+1
         biosprnt_cnt file+2
         display  file_not_found
         mov      ax,1
         ret
got_err_2:
         call    loc_proc
         display error1
         mov     ax,1              ;indicate error condition
         close   fcb
         ret
open_ok_2:
         mov     file_cnt,1
open_ok_3:
         mov     cl,file_cnt
         dec     cl
         mov     al,file_description
         mul     cl
         mov     bx,ax
         mov     bx_save,bx
         mov     recd_size,0001h
         mov     cl,0              ;initialize count
find_non_blank:
	seqread fcb
	cmp	 al,0	;ok?
	je      chk_blank
	jmp     put_msg_2         ;no
chk_blank:
         cmp     file_hold,' '     ;scan for first non-blank
         je      find_non_blank
	cmp	file_hold,09h	;Tab character?
	je	find_non_blank	;yes ==> jmp
	cmp	file_hold,'*'	;if the first non-blank is an '*'
;				 then treat as a comment
	jne	seq_read_2	;found non-blank
	dec     file_cnt	;decrement number of files
	jmp     seq_read_3	;bypass the rest of the card
seq_read:
	 seqread fcb
	 cmp	 al,0	           ;ok? 				       
         je      seq_read_2        ;yes ==> jmp
         jmp     put_msg_2         ;no ==> jmp
seq_read_2:
         cmp     file_hold,eof     ;end of file?
         je      finish_up
         cmp     file_hold,cr      ;carriage return?
         je      seq_read_4        ;yes ==> jmp
         cmp     file_hold,' '     ;skip everything after 1st
	je	seq_read_3	;trailing blank or tab char.
	cmp	file_hold,09h
	je	seq_read_3	;trailing blank or tab char.
	jmp	store_byte
seq_read_3:
	 seqread fcb
         cmp     file_hold,cr      ;carriage return?
         je      seq_read_4        ;yes ==> jmp
         jmp     seq_read_3        ;no ==> keep reading
seq_read_4:
	 seqread fcb
         cmp     file_hold,lf      ;line feed?
         jne     store_byte
         inc     file_cnt          ;increment number of files
         cmp     file_cnt,max_files
         ja      to_many_files
         jmp     open_ok_3         ;next file if any
to_many_files:
         mov     row,24
         call    loc_proc
         display to_many
         jmp     got_err_2
store_byte:
         inc     cl                ;increment byte count
         mov     al,file_hold
         mov     files+1[bx],al    ;move byte in
         push    bx                ;save bx
         mov     bx,bx_save        ;position of count field
         mov     files[bx],cl      ;move new count in
         pop     bx                ;restore bx
         inc     bx                ;increment position for next byte
         jmp     seq_read          ;read next byte
finish_up:
         dec     file_cnt
         close   fcb
         sub     ax,ax
         ret
put_msg_2:
         push    ax
         call    loc_proc
         pop     ax
         cmp     al,1
         je      no_data_2
         cmp     al,2
         je      no_space3
         cmp     al,3
         je      partial_recd_2
         jmp     got_err_2
no_data_2:
         display no_data_msg
         jmp     got_err_2
no_space3:
         display no_space_msg
         jmp     got_err_2
partial_recd_2:
         display partial_recd_msg
         jmp     got_err_2
find_files endp
         page
	 subttl  restore_screen procedure
restore_screen proc   near
         mov    ax,equip_save
         and    ax,30h                     ;turn off all but display
         cmp    ax,30h                     ;monochrome
         jne    not_mono                   ;no ==> don't change
         push   ds
         mov    bx,rom_bios_data
         mov    ds,bx
         assume ds:rom_bios_data
         and    byte ptr equip_flag,0cfh    ;turn off display bits
         or     byte ptr equip_flag,10h     ;color card 40x25
         pop    ds
         assume ds:data

not_mono:

;	the graphics mode is adjusted to avoid putting out
;	B/W image (neither alpha nor graphics).

	cmp	crt_mode_2,0
	jne	set2
	inc	crt_mode_2
	jmp	do_mode
set2:
	cmp	crt_mode_2,2
	jne	set3
	inc	crt_mode_2
	jmp	do_mode
set3:
	cmp	crt_mode_2,5
	jne	do_mode
	dec	crt_mode_2
do_mode:
         set_mode   crt_mode_2

;        disable video

         mov    ax,rom_bios_data
         push   ds
         mov    ds,ax
         assume ds:rom_bios_data
         mov    dx,addr_6845   ;get base address for display adapter
         add    dx,4           ;IO address for 3x8 register
         mov    al,crt_mode_set ;current setting
         and    al,0f7h         ;turn video off
         out    dx,al
         pop    ds
         assume ds:data

         set_background   color_select_reg

         set_palette      color_select_reg

	 mov	 ax,screen_loc
	 mov	 es,ax	   ;addressability to destination string
	 lea	 si,screen ;load offset of source into si
	 mov	 di,0	   ;load offset of destination
	 mov	 cx,4000h  ; length of move
	 rep	 movsb	   ;move it

;	if this is a text mode the cursor will not be displayed

	cmp	mode,'f'
	jne	no_loc
	cmp	crt_mode_2,3
	ja	no_loc		;not text ==> jmp
	mov	cl,0
	mov	ch,20h
	mov	ah,1
	int	10h
no_loc:

;        enable video

         mov    ax,rom_bios_data
         push   ds
         mov    ds,ax
         assume ds:rom_bios_data
         mov    dx,addr_6845   ;get base address for display adapter
         add    dx,4           ;IO address for 3x8 register
         mov    al,crt_mode_set ;current setting
         or     al,08h          ;turn video on
         out    dx,al
         pop    ds
         assume ds:data
;
         push   ds
         mov    ax,equip_save      ;get original equip_flag
         mov    bx,rom_bios_data
         mov    ds,bx
         assume ds:rom_bios_data
         cmp    equip_flag,ax      ;did we change equip_flag
         jne    changed_equip_flag
         pop    ds
         ret
changed_equip_flag:
         mov    equip_flag,ax
         pop    ds
         assume ds:data
         and    ax,30h
         cmp    ax,30h             ;Monochrome mode?
         je     mono               ;yes ==> jmp
         mov    al,0               ;40x25 Color, Alpha
         jmp    mode_set
mono:
         mov    al,7               ;monochrome mode
mode_set:
         xor    ah,ah
         int    10h                ;request Bios to set display mode

	 ret                       ; return
restore_screen endp
         page
	 subttl   GET_FILE_NAME PROCEDURE
get_file_name proc near
         mov  row,24       ;force scroll
         mov  col,0
loc:     call   loc_proc
	 display message1  ;Call DOS to print message.
	 call get_file
	 cmp  ax,0	     ;Valid file name?
	 je   ax0		;yes ==> jmp
	cmp	ax,2		;F10?
	je	ax0
	jmp	loc
ax0:	ret			;return if valid file name
get_file_name endp
 	page
get_file proc	 near

;	 clear file_name field in fcb

         clc
	 mov  di,offset file_name
	 mov  ax,ds
	 mov  es,ax
	 mov  al,' '
	 mov  cx,13
	 rep  stosb

	 default drive

;	 get filename

         mov  di,0
         mov  cx,15
	mov	col,9
	locate	row,col
once_more:
         biosread
         cmp  ah,44h               ;Scan code for F10?
         jne  not_F10
         mov  ax,2                 ;indicate F10
         ret
not_F10:
	cmp	al,0		;extended code?
	jne	not_extended
	cmp	ah,4dh		;scroll right?
	je	once_more	;yes ==> ignore it
	cmp	ah,4bh		;scroll left
	je	is_back
	jmp	not_extended
is_back:
	cmp	col,10
	jb	once_more
	dec	col
	locate	row,col
	mov	al,' '		;print a blank
	push	cx
	mov	cx,1		;number of characters to write
         mov  ah,10                ;display the character
         int  10h
	dec	di
	mov  file+2[di],al        ;store the code
	pop	cx
	inc	cx
	jmp	once_more
not_extended:
	cmp	ah,0eh		;backspace?
	je	is_back
         cmp  al,0dh               ;Carriage return?
         je   save_cnt             ;if so, finish up
         mov  file+2[di],al        ;store the code
         inc  di
	push	cx
	mov	cx,1		;number of characters to write
         mov  ah,10                ;display the character
         int  10h
	inc	col
	locate	row,col
	pop	cx
         loop once_more
save_cnt:
         mov   cx,di               ;save character count
	mov	file+1,cl
         mov   col,0
	call	valid_file
	 ret
get_file endp
 	page
valid_file proc near

;	 move file to file_name

	sub	cx,cx
	mov	cl,file+1
	 mov  bx,offset file+2
	 cmp  byte ptr [bx]+1,':'
	 jne  no_device
	 cmp  byte ptr [bx],'A'       ;drive must be between A and B
	 jb   invalid_file2
	 cmp  byte ptr [bx],'D'
	 ja   short check_lower    ;maybe lower case?
	 mov  al,[bx]	     ;put in proper format for fcb
	 sub  al,64
	 jmp  drive2	     ;go insert drive no. in fcb
check_lower:  cmp  byte ptr [bx],'a'
	 jb   invalid_file2
	 cmp  byte ptr [bx],'d'
	 ja   invalid_file2
	 mov  al,[bx]	     ;put in proper format for fcb
	 sub  al,96
drive2:  mov  drive,al	     ;insert drive no. in fcb
	 add  bx,2	     ;point past ':'
	 sub  cx,2
no_device:
         mov  pri,0
         mov  ext,0
         mov  search,0       ;looking at primary name

;        check first character of file name

         cmp  byte ptr [bx],'A'
         jb   invalid_file2
         cmp  byte ptr [bx],'Z'
         ja   chka
         jmp  good_chr
chka:    cmp  byte ptr [bx],'a'
         jb   invalid_file2
         cmp  byte ptr [bx],'z'
         ja   invalid_file2
         jmp  good_chr
invalid_file2: jmp invalid_file
good_chr: mov  di,offset file_name
nxt_char: mov  al,[bx]
	 cmp  byte ptr [bx],'.'
	 jne  notdot
         cmp  pri,0          ;Was there a primary?
         je invalid_file     ;no ==> branch
         mov  search,1       ;looking at extension
	 inc  bx
	 dec  cx
         mov  di,offset file_ext
	 jmp  nxt_char
notdot:
	 cmp  byte ptr [bx],cr	      ;carriage return?
	 je   got_em2
         cmp  al,'#'
         jb   invalid_file
         cmp  al,')'
         ja   chk2
         jmp  good_char
chk2:    cmp  al,'0'
         jb   invalid_file
         cmp  al,'9'
         ja   chk3
         jmp  good_char
chk3:    cmp  al,'A'
         jb   invalid_file
         cmp  al,'Z'
         ja   chk4
         jmp  good_char
chk4:    cmp  al,'a'
         jb   invalid_file
         cmp  al,'z'
         ja   chk5
         jmp  good_char
chk5:    cmp  al,'{'
         je   good_char
         cmp  al,'}'
         je   good_char
         jmp  invalid_file
good_char:
	 mov  [di],al
	 inc  bx	     ;get next character
	 inc  di
         cmp  search,0       ;primary?
         jne  not_pri
         inc  pri
         jmp  short loopit
not_pri: inc  ext
loopit:	 loop nxt_char
got_em2: cmp  pri,9      ;check length of primary and
         jb   chk_ext        ;extension
         jmp  short invalid_file
chk_ext: cmp  ext,4
         jae  invalid_file
         mov  ax,0	     ;indicate valid filename found
	 ret
invalid_file:
         call loc_proc
	 display message2  ;Call DOS to print message.
	 mov  ax,1	   ;indicate invalid file
	 ret
valid_file endp
         page
         subttl  SUB-ROUTINE TO READ DISK FILE
dsk_read PROC NEAR
;
;        determine if file already exists
;
         setdta  screen
open_it:
         open    fcb
	 cmp	 al,0	     ;open ok?
         jnz     cannot_open
	 jmp	 open_ok     ;file found ==> jmp
cannot_open:
         cmp     al,0ffh     ;File not found?
         jne     got_err     ;no ==> jmp
         mov     row,24

	mov   ax,equip_save
         and    ax,30h	;turn off all but display
         cmp    ax,30h	;monochrome
         je     it_is_mono_2	;yes ==> don't change

;	set mode - 80x25 Color, Alpha

         mov  al,3
         mov  ah,0
         int  10h
it_is_mono_2:
         call    loc_proc
         display message1
         sub     cx,cx
         mov     cl,byte ptr file+1
         biosprnt_cnt file+2
         mov      dx,offset file_not_found
         push     dx
         jmp      once_again_2
got_err:
         call    loc_proc
         mov     dx,offset error1
once_again:
         push    dx
	mov   ax,equip_save
         and    ax,30h	;turn off all but display
         cmp    ax,30h	;monochrome
         je     once_again_2	;yes ==> don't change

;        set mode - 80x25 Color, Alpha

         mov  al,3
         mov  ah,0
         int  10h
once_again_2:
	close   fcb
	pop     dx
	mov   ah,9	;Function selected = console output
	doscall
once_again_3:
         call    loc_proc
         display re_try
         biosread
	cmp  ah,13h	;re_try?
         je   open_it_2
         jmp  short not_re_try
open_it_2:
         jmp  open_it
not_re_try:
	cmp  ah,17h               ;ignore?
         jne  try_a                ;no ==> jmp
         pop  ax                   ;pop ret address
         jmp  rest2                ;yes ==> wait for instructions
try_a:
	 cmp  ah,1eh               ;abort?
         je   abort
         jmp  once_again_3
ignore:  mov  ax,2
         ret
abort:   mov  ax,3
         ret
open_ok:
         mov  recd_size,401eh
	 rread   fcb
	 cmp	 al,0	   ;ok? 				       
         jne     put_msg   ;no
         close   fcb
         sub     ax,ax
         ret
put_msg:
         push    ax
         call    loc_proc
         pop     ax
         cmp     al,1
         je      no_data
         cmp     al,2
         je      no_space2
         cmp     al,3
         je      partial_recd
         jmp     got_err
no_data:
         mov  dx,offset no_data_msg
         jmp     once_again
no_space2:
         mov     dx,offset no_space_msg
         jmp     once_again
partial_recd:
         mov     dx,offset partial_recd_msg
         jmp     once_again
dsk_read  ENDP
	page
         subttl  SUB-ROUTINE TO CREATE DISK FILE
DSK_WRITE PROC NEAR

;        determine if file already exists
srch:
       	cmp replace,'r'
	je	newfile
         srch_dir fcb
         cmp     al,0ffh           ;branch if new file
         je      newfile
         call    loc_proc
         biosprnt file_exists
	 biosread          		   ;read response from keyboard
         mov  ah,14
         int  10h
	 cmp  al,'Y'
         je   newfile
         cmp  al,'y'
         je   newfile
         ret
newfile: setdta  screen
         create  fcb
	 cmp	 al,0	     ;open ok?
	 jz	 opn_ok
	 biosprnt newdisk
opn_ok:  mov	 recd_size,401eh ;record size
	 mov	 cx,01h ;number of records
	 rwrite  fcb
	 cmp	 al,0	   ;ok? 				       
         jne     close_fcb
	 jmp	 write2
close_fcb:
         close   fcb
         delete  fcb
         call    loc_proc
         biosprnt no_space
         call    loc_proc
         biosprnt re_try
         biosread                  ;read & display response
         mov  ah,14
         int  10h
 	 cmp  al,'Y'               ;retry?
         jne  tryy
         jmp  srch
tryy:
         cmp  al,'y'
         jne  back                 ;no ==> return
back2:   jmp  srch
back:    ret
write2:  close   fcb
         ret
DSK_WRITE ENDP


loc_proc proc
         inc  row
         cmp  row,24
         jb   loc5
         scroll
         cmp    mode,'p'   ;Prompt mode?
         jne    row1       ;no ==> jmp
         locate 24,0
         display pfks
row1:    mov  row,1
loc5:    locate  row,col
         ret
loc_proc endp


beep	proc	near
	push	ax		;preserve all registers
	push	bx
	push	cx
	mov	bl,25
	mov	al,0b6h       	;sel tim 2,lsb,msb,binary
	out	timer+3,al	;write the timer mode reg
	mov	ax,533h		;divisor for 1000hz
	out	timer+2,al	;write timer 2 cnt - lsb
	mov	al,ah
	out	timer+2,al	;write timer 2 cnt - msb
	in	al,port_b	;get current setting of port
	mov	ah,al		;save that setting
	or	al,03		;turn speaker on
	out	port_b,al
wait:   mov	cx,2801		;wait 10 milliseconds
spkr_on:
	loop	spkr_on		;delay before turning off
	dec	bl		;delay cnt expired?
	jnz	wait		;no ==> continue beeping
	mov	al,ah		;recover value of port
	out	port_b,al
	pop	cx		;restore registers
	pop	bx
	pop	ax
	ret
beep	endp
code	 ends
	 end	 start
```
{% endraw %}

## SLIDE.ASM

{% raw %}
```
	 page	 ,132
         title   *** SLIDE SHOW ***
;***************************************************************
;                                                              *
;                         Jay Kadashaw  1984                   *
;                                                              *
;***************************************************************


;***************************************************************
;                                                              *
;               8088 interrupt locations                       *
;                                                              *
;***************************************************************
vectors  segment at  0h
         org     9h*4
keyboard_int_vector   label  dword
         org     10h*4
video_int_vector   label  dword
         org     24h*4
error_int_vector      label  dword
vectors  ends


;***************************************************************
; This is the data area starting at 400h used by the ROM BIOS  *
;routines.  ADDR_6845 contains the base address, 3x4, of the   *
;current display adapter and CRT_MODE_SET contains the current *
;setting of the display mode -- the 3x8 register.  Here x B    *
;for the monochrome display adapter, and D for the             *
;color-graphics adapter.                                       *
;***************************************************************

rom_bios_data   segment at 40h
         org    10h
;***************************************************************
;                                                              *
;          - - - - - - - - I - - - - - - - - equip_flag        *
;                                ^ ^ -- display type           *               *
;  display type 1 - color card 40x25                           *
;               2 - color card 80x25                           *
;               3 - monochrome display                         *
;                                                              *
;  see p. A-73 of the Ref. Manual for a definition of          *
;  equip_flag                                                  *
;                                                              *
;***************************************************************

equip_flag      dw     ?     ;Used to determine display type
                org    17h
kb_flag         db     ?
alt_shift       equ    08h   ;alternate shift key depressed
ctl_shift       equ    04h   ;control shift key depressed
left_shift      equ    02h   ;left shift key depressed
right_shift     equ    01h   ;right shift key depressed
                org    49h
crt_mode        db     ?     ;current crt mode
crt_cols        dw     ?     ;number of columns on screen
crt_len         dw     ?     ;length of regen in bytes
crt_start       dw     ?     ;starting address in crt buffer
cursor_posn     dw     8 dup(?) ;curson for each of up to 8 pages
cursor_mode     dw     ?     ;Current cursor mode(start, stop line)
active_page     db     ?
addr_6845       dw     ?     ;Base address for active display card
crt_mode_set    db     ?     ;current setting of 3x8 register
crt_palette     db     ?
rom_bios_data  ends


graphics_memory	segment at 0b800h
graphics_word	dw	?
graphics_memory	ends

               page
	 subttl  DEFINITION OF MACROS
scroll	 macro
         mov     ah,6        ;scroll to clear screen
         mov     al,0        ;clear screen
         mov     bh,7        ;normal attribute
         mov     cx,0        ;row,column of upper left corner of
;                             scroll
         mov     dh,24       ;row of lower right corner
         mov     dl,79       ;column of lower right corner
	 bioscall	     ;invoke bios to scroll window
	 endm
;
bioscall macro
	 int   10h	     ;request bios service, id in ah
	 endm
;
locate	 macro row,col
;        call BIOS to do LOCATE
         mov   dh,row        ;row
         mov   dl,col        ;column
         mov   bh,0          ;screen number
	 mov   ah,2	     ;function selected = locate
	 bioscall	     ;invoke bios to move the cursor
	 endm
;
doscall  macro
	 int   21h	     ;request dos service, id in ah
	 endm
;
display  macro text
	 mov   dx,offset text ;Point to message to print.
	 mov   ah,9	      ;Function selected = console output
	 doscall
	 endm
;
keyboard macro  response
	 mov	ah,10	      ;Function selected = read keyboard
	 lea	 dx,response
	 doscall
	 endm
;
setdta	 macro	our_dta
	 mov	ah,01ah       ;Function selected = set dta
	 lea	dx,our_dta
	 doscall
	 endm
;
create	 macro	fcb
	 mov	ah,016h       ;Function selected = create fcb
	 lea	dx,fcb
	 doscall
	 endm
;
delete	 macro	fcb
	 mov	ah,013h       ;Function selected = delete file
	 lea	dx,fcb
	 doscall
	 endm
;
srch_dir macro	fcb
	 mov	ah,011h       ;Function selected = search unopened
	 lea	dx,fcb        ; directory
	 doscall
	 endm
;
close	 macro	fcb
	 mov	ah,010h       ;Function selected = close fcb
	 lea	dx,fcb
	 doscall
	 endm
;
rwrite	 macro	fcb
	 mov	ah,022h       ;Function selected = random write
	 lea	dx,fcb
	 doscall
	 endm
;
default  macro	drive
	 mov	ah,019h       ;read default drive
	 doscall
         inc    al
	 mov	drive,al
	 endm
;
biosprnt macro   what
         local   next
         mov     si,offset what
next:
         mov     ah,14
         mov     bh,0
         mov     al,byte ptr [si]
         push    cx
         mov     cx,1
         int     10h
         pop     cx
         inc     si
         cmp     byte ptr [si],'$'
         jne     next
         endm
;
biosread macro
         mov     ah,0
         int     16h
         endm
;
set_background macro  color
         mov      bh,0              ;set backround
         mov      bl,color
         and      bl,1fh
         mov      ah,11
         int      10h
         endm
;
set_palette macro  color
         mov      bh,1              ;set pallete
         mov      bl,color
         mov      cl,5              ;shift right 5 bits
         shr      bl,cl
         mov      ah,11
         int      10h
         endm
;
set_mode macro   mode
         mov     ah,0         ;set graphics mode
         mov     al,mode
         int     10h
         endm
	 page
         SUBTTL  MAIN LINE CODE
code	 segment
         assume    cs:code
         org       80h
parmlen  db        ?
         db        ?
parm1    db        ?
parm2    db        ?
         org       100h
begin:   jmp       init     ;initialize vectors and attach to DOS
;
;
slide      db   0
fcb	   db	2,'slide   '
file_ascii db   '000'
           db   2 dup (0)
recd_size  dw	1
	   db	17 dup (0)
recd_num   dw	0
	   dw	0
;
screen	   db	4000h dup (0)
;**************************************************************
;      a copy of the video display data area                  *
;                                                             *
;      This copy is filled in each time int 10h is called.    *
;**************************************************************
crt_mode_2      db     ?     ;current crt mode
crt_cols_2      dw     ?     ;number of columns on screen
crt_len_2       dw     ?     ;length of regen in bytes
crt_start_2     dw     ?     ;starting address in crt buffer
cursor_posn_2   dw     8 dup(?) ;curson for each of up to 8 pages
cursor_mode_2   dw     ?     ;Current cursor mode(start, stop line)
active_page_2   db     ?
addr_6845_2     dw     ?     ;Base address for active display card
mode_reg	   db  ?     ;current setting of the 3x8 register
;                             port address 3d8
color_select_reg   db	 0   ;current color setting pallete card
;                             port address 3d9h


;**************************************************************
;      a second copy of the video display data area           *
;**************************************************************
video_state     db     ?     ;current crt mode
                dw     ?     ;number of columns on screen
                dw     ?     ;length of regen in bytes
                dw     ?     ;starting address in crt buffer
                dw     8 dup(?) ;curson for each of up to 8 pages
                dw     ?     ;Current cursor mode(start, stop line)
                db     ?
                dw     ?     ;Base address for active display card
           	   db  ?     ;current setting of the 3x8 register
;                             port address 3d8
                   db	 0   ;current color setting pallete card
;                             port address 3d9h
screen_loc dw	0b800h
message1   db	'filename=$'
message2   db	'Invalid file name!  Re-enter$'
no_space   db	'Insufficient space to add file!$'
newdisk    db	'Insert a new disk$'
proceed    db   "Proceed (y/n)? $"
proceed2   db   'Press any key to continue $'
badparms   db   'Invalid parameter(s)!!!$'
file_exists db  'Re-use existing file (y/n)? $'
abort_or_retry db  'Abort, or Retry?$'
err0	db	'Attempt to write on write-protected disk$'
err1	db	'Unknown unit$'
err2	db	'Drive not ready$'
err3	db	'Unknown command$'
err4	db	'Data error (CRC)$'
err5	db	'Bad request structure length$'
err6	db	'Seek error$'
err7	db	'Unknown media type$'
err8	db	'Sector not found$'
err9	db	'Printer out of paper$'
erra 	db	'Write fault$'
errb	db	'Read fault$'
errc	db	'General failure$'
x_err   dw	err0
	dw	err1
	dw	err2
	dw	err3
	dw	err4
	dw	err5
	dw	err6
	dw	err7
	dw	err8
	dw	err9
	dw	erra
	dw	errb
	dw	errc
re_try     db   "Enter 'y' to re-try $"
file	   db	15,0,15 dup (' ')
	   db	0dh
pri        db   0
ext        db   0
search     db   0
row        db   24
col        db   0
flag       db   0
test1      db   02h          ;left shift key depressed
test2      db   01h          ;right shift key depressed
rom_keyboard_int dd          ;address of rom keyboard interrupt
rom_video_int    dd          ;address of rom video interrupt
rom_error_int	dd	;address of rom error interrupt
cr	      equ   0dh      ;carriage return
drive	      equ   fcb
file_name     equ   fcb+01h
file_ext      equ   fcb+09h
current_block equ   fcb+0ch
record_size   equ   fcb+0eh
pfks   db  '1 Mode   2 Background   3 Palette   4 Replace   5 Save'
       db  '  [Esc]=[Exit]$'
replace	db	's'
graphics   db   1
color_original db 0
back_ground db   0
equip_save dw   0
         page
kbint	 proc	near
         assume ds:nothing
         jmp     tst_flgs
kbint2:
         pop     ds
         pop     ax
;        pushf                         ;simulate int 09h
         call    rom_keyboard_int
         iret
;
tst_flgs:
	pushf                         ;save flags
         push    ax
         push    ds
       	 mov     ax,cs                  ;addressability to data
	 mov	 ds,ax                  ;segment
         cmp     slide,1                ;in slide show
         jne     tst_flgs2              ;no, test if we should be
         jmp     short kbint2           ;yes ==> get out
tst_flgs2:
         mov     ax,rom_bios_data
         mov     ds,ax
         assume  ds:rom_bios_data
         mov     al,kb_flag
         push    ax
         mov     ax,cs
         mov     ds,ax
         assume  ds:code
         pop     ax
         and     al,test1               ;left shift depressed
         jz      kbint2                 ;no get out
         mov     ax,rom_bios_data
         mov     ds,ax
         assume  ds:rom_bios_data
         mov     al,kb_flag
         push    ax
         mov     ax,cs
         mov     ds,ax
         assume  ds:code
         pop     ax
         and     al,test2	;right shift depressed
         jz      kbint2 	;no get out
         mov     slide,1	;indicate within slide show code
         sti			;enable interrupts

	push	ds		;save equip_flag upon entry
	mov    bx,rom_bios_data
	mov    ds,bx
	assume ds:rom_bios_data
	mov    ax,equip_flag
	assume  ds:code
	pop    ds
	mov    equip_save,ax

         pushf
         call    rom_keyboard_int
         push    bx
         push    cx
         push    dx
         push    si
         push    di
         push    es

;	The video state at entry to Slide is saved.  note: this
;	may be different than that saved by int 10h, since the
;	extension to int 10h only save the video state if the
;	monochrome monitor is not being used.

	lea	 di,video_state  ;offset of mode register
         call	 save_screen

	mov    al,color_select_reg
	mov    color_original,al
         call	 save_screen_memory

;	change equip_flag if necessary to indicate graphics board

         mov    ax,equip_save
         and    ax,30h                     ;turn off all but display
         cmp    ax,30h                     ;monochrome
         jne    not_mono                   ;no ==> don't change
         push   ds
         mov    bx,rom_bios_data
         mov    ds,bx
         assume ds:rom_bios_data
         and    byte ptr equip_flag,0cfh    ;turn off display bits
         or     byte ptr equip_flag,10h     ;color card 40x25
         pop    ds
         assume ds:code
not_mono:

save_file:

;        set mode - 80x25 Color, Alpha

         push    ax
         mov     al,3
         mov     ah,0
         int     10h
         pop     ax

         mov     row,24            ;force scroll
 	 call	 get_file_name
         cmp     ax,2              ;Esc?
         jnz     not_esc
     	 jmp 	 rest
not_esc:
         call    loc_proc
         biosprnt proceed
 	 biosread          	   ;read response from keyboard
         mov  ah,14                ;display the character
         int  10h
	 cmp  al,'Y'
         je   do_wrt
         cmp  al,'y'
         je   do_wrt
	 cmp  al,'N'
         je   rest
         cmp  al,'n'
         je   rest
         jmp  not_esc
do_wrt:	mov 	replace,'s'
	call    dsk_write
rest:	 call	 restore_screen
	 biosread         	   ;read response from keyboard
	 page
;*******************************************************************
;                                                                  *
;        F1 is used to set the graphics mode                       *
;                                                                  *
;        F2 is used to set the back ground color                   *
;                                                                  *
;        F3 is used to set the medium resolution palette           *
;                                                                  *
;        F4 is used to replace the file (under the same name).     *
;                                                                  *
;        F5 is used to save the file.                              *
;                                                                  *
;*******************************************************************
;
         cmp    ah,3bh             ;F1?
         jne    not_f1             ;no ==> jmp
         mov    al,color_original
         mov    color_select_reg,al
         cmp    graphics,7
         jb     graphics_ok
         mov    graphics,1
;        mov    graphics,0
graphics_ok:
	cmp	graphics,2	;80x25 B/W, Alpha
	jne	graphics_ok_2
	inc	graphics
graphics_ok_2:
	cmp	graphics,5	;320x200 B/W, Graphics
	jne	graphics_ok_3
	inc	graphics
graphics_ok_3:
         mov    al,graphics
         mov    crt_mode_2,al
         inc    graphics
         jmp    rest
not_f1:
         cmp    ah,3ch             ;F2?
         jne    not_f2             ;no ==> jmp
;
;        set back ground color
;
         cmp    back_ground,32
         jb     do_f2
         mov    back_ground,0
do_f2:
         and    color_select_reg,0e0h
         mov    al,color_select_reg
         or     al,back_ground
         or     color_select_reg,al
         inc    back_ground
         jmp    rest
not_f2:
         cmp    ah,3Dh             ;F3?
         jne    not_f3             ;no ==> jmp
         xor    color_select_reg,20h
         jmp    rest
not_f3:
         cmp    ah,3eh             ;F4?
         jne    not_f4             ;no ==> jmp
	mov	replace,'r'
	call	dsk_write
	jmp    rest
not_f4:
         cmp    ah,3fh             ;F5?
         jne    not_f5             ;no ==> jmp
	jmp    save_file
not_f5:
         page
         cmp     crt_mode_2,3      ;a text mode?
         ja      not_text          ;no ==> branch
         mov     al,active_page_2  ;reset active page
         mov     ah,5
         int     10h
;
         mov     dx,cursor_posn_2  ;reset cursor position
         mov     bh,active_page_2  ;set active page
         mov     ah,2
         int     10h
;
         mov     cx,cursor_mode_2  ;set cursor lines
         mov     ah,1
         int     10h
not_text:

;	restore equip_flag

         mov    ax,equip_save
         and    ax,30h                     ;turn off all but display
         cmp    ax,30h                     ;monochrome
         jne    not_mono_2                 ;no ==> don't change
         push   ds
         mov    bx,rom_bios_data
         mov    ds,bx
         assume ds:rom_bios_data
         and    byte ptr equip_flag,0cfh    ;turn off display bits
         or     byte ptr equip_flag,10h     ;color card 40x25
         pop    ds
         assume ds:code
not_mono_2:

;	 restore video display data area

	 mov	 di,0449h
 	 lea	 si,video_state
	 mov	 ax,0	     ;point es to segment 0000h
	 mov	 es,ax
         mov     cx,30
	 rep     movsb

         mov     slide,0           ;screen image created
         pop     es
         pop     di
         pop     si
         pop     dx
         pop     cx
         pop     bx
         pop     ds
         pop     ax
         popf
	 iret
kbint    endp
	 page
	 subttl  save_screen procedure
save_screen proc near
	push	ax
	push	si	;save registers modified by save screen
	push	es
	push	cx

;	 save video display data area

;        offset to DOS's copy of mode register
	 mov	 si,0449h
	 mov	 ax,ds	     ;addressability to destination string
	 mov	 es,ax

;	The destination is established by the calling routine

;	 lea	 di,crt_mode_2   ;offset of mode register
	 push	 ds	     ;save ds
	 mov	 ax,0	     ;point ds to segment 0000h
	 mov	 ds,ax
         mov     cx,30
	 rep     movsb
	 pop	 ds	     ;restore ds

	pop 	cx	;restore registers modified by save screen
	pop 	es
	pop 	si
	pop	ax
	 ret
save_screen endp



save_screen_memory	proc	near
	 mov	 ax,ds
	 mov	 es,ax	   ;addressability to destination string
	 push	 ds	   ;save ds reg.
	 mov	 di,offset screen ;destination offset

; establish addressability to screen memory

	 mov	 ax,screen_loc
	 mov	 ds,ax
;
	 mov	 si,0	   ;source offset
	 mov	 cx,4000h  ; length of move
	 rep	 movsb	   ;move it
	 pop	 ds	   ;restore ds reg.
	ret
save_screen_memory	endp
         page
	 subttl   GET_FILE_NAME PROCEDURE
get_file_name proc near
new_scrn:
         mov  col,0
loc:     call loc_proc
         biosprnt message1

; clear file_name field in fcb

ask_file: clc
	 mov  di,offset file_name
	 mov  ax,ds
	 mov  es,ax
	 mov  al,' '
	 mov  cx,13
	 rep  stosb
	 call get_file
         cmp  ax,1           ;Valid file name?
         jnz  val_2
         jmp  loc
val_2:   cmp  ax,2           ;Esc?
         jnz  val_3
         ret
val_3:
	 cmp  ax,0	     ;Valid file name?
	 jnz  loc            ;no ==> branch
	 ret                 ;return if valid file name
get_file_name endp
         page
	 subttl  GET_FILE PROCEDURE
get_file proc	 near
	 default drive

;	 get filename

         mov  di,0
         mov  cx,15
	mov	col,9
	locate	row,col
once_more:
         biosread
         cmp  ah,1                 ;Scan code for Esc?
         jne  not_esc_2
         mov  ax,2                 ;indicate Esc
         ret
not_esc_2:
	cmp	al,0		;extended code?
	jne	not_extended
	cmp	ah,4dh		;scroll right?
	je	once_more	;yes ==> ignore it
	cmp	ah,4bh		;scroll left
	jne	not_extended
is_back:
	cmp	col,10
	jb	once_more
	dec	col
	locate	row,col
	mov	al,' '		;print a blank
	push	cx
	mov	cx,1		;number of characters to write
         mov  ah,10                ;display the character
         int  10h
	dec	di
	mov  file+2[di],al        ;store the code
	pop	cx
	inc	cx
	jmp	once_more
not_extended:
	cmp	ah,0eh		;backspace?
	je	is_back
         cmp  al,0dh               ;Carriage return?
         je   save_cnt             ;if so, finish up
         mov  file+2[di],al        ;store the code
         inc  di
	push	cx
	mov	cx,1		;number of characters to write
         mov  ah,10                ;display the character
         int  10h
	inc	col
	locate	row,col
	pop	cx
         loop once_more
save_cnt:
         mov   cx,di               ;save character count
         mov   col,0

;	 move file to file_name

	 mov  bx,offset file+2
	 cmp  byte ptr [bx]+1,':'
	 jne  no_device
	 cmp  byte ptr [bx],'A'       ;drive must be between A and B
	 jb   invalid_file2
	 cmp  byte ptr [bx],'D'
	 ja   short check_lower    ;maybe lower case?
	 mov  al,[bx]	     ;put in proper format for fcb
	 sub  al,64
	 jmp  drive2	     ;go insert drive no. in fcb
check_lower:  cmp  byte ptr [bx],'a'
	 jb   invalid_file2
	 cmp  byte ptr [bx],'d'
	 ja   invalid_file2
	 mov  al,[bx]	     ;put in proper format for fcb
	 sub  al,96
drive2:  mov  drive,al	     ;insert drive no. in fcb
	 add  bx,2	     ;point past ':'
	 sub  cx,2
no_device:
         mov  pri,0
         mov  ext,0
         mov  search,0       ;looking at primary name
	mov  di,offset file_name
	mov	al,[bx]

;        check first character of file name

         cmp  al,'A'
         jb   invalid_file2
         cmp  al,'Z'
         ja   chka
         jmp  good_char
chka:    cmp  al,'a'
         jb   invalid_file2
         cmp  al,'z'
         ja   invalid_file2
         jmp  good_char
invalid_file2: jmp invalid_file
nxt_char: mov  al,[bx]
	 cmp  byte ptr [bx],'.'
	 jne  notdot
         cmp  pri,0          ;Was there a primary?
         je invalid_file     ;no ==> branch
         mov  search,1       ;looking at extension
	 inc  bx
	 dec  cx
         mov  di,offset file_ext
	 jmp  nxt_char
notdot:
	 cmp  byte ptr [bx],cr	      ;carriage return?
	 je   got_em2
         cmp  al,'#'
         jb   invalid_file
         cmp  al,')'
         ja   chk2
         jmp  good_char
chk2:    cmp  al,'0'
         jb   invalid_file
         cmp  al,'9'
         ja   chk3
         jmp  good_char
chk3:    cmp  al,'A'
         jb   invalid_file
         cmp  al,'Z'
         ja   chk4
         jmp  good_char
chk4:    cmp  al,'a'
         jb   invalid_file
         cmp  al,'z'
         ja   chk5
         jmp  good_char
chk5:    cmp  al,'{'
         je   good_char
         cmp  al,'}'
         je   good_char
         jmp  invalid_file
good_char:
	 mov  [di],al
	 inc  bx	     ;get next character
	 inc  di
         cmp  search,0       ;primary?
         jne  not_pri
         inc  pri
         jmp  short loopit
not_pri: inc  ext
loopit:	 loop nxt_char
got_em2: cmp  pri,9      ;check length of primary and
         jb   chk_ext        ;extension
         jmp  short invalid_file
chk_ext: cmp  ext,4
         jae  short invalid_file
         mov  ax,0	     ;indicate valid filename found
	 ret
invalid_file:
         call loc_proc
         biosprnt  message2
	 mov  ax,1	   ;indicate invalid file
	 ret
get_file endp
;
         page
         subttl  SUB-ROUTINE TO CREATE DISK FILE
DSK_WRITE PROC NEAR

;        determine if file already exists
srch:
       	cmp replace,'r'
	je	newfile
         srch_dir fcb
         cmp     al,0ffh           ;branch if new file
         je      newfile
ask_again:
         call    loc_proc
         biosprnt file_exists
	 biosread        	   ;read response from keyboard
         mov  ah,14
         int  10h
	 cmp  al,'Y'
         je   newfile
         cmp  al,'y'
         je   newfile
	 cmp  al,'N'
         je   go_back
         cmp  al,'n'
         je   go_back
	jmp	ask_again
go_back:
         ret
newfile: setdta  screen

;	before issueing an rwrite set error interrupt (int 24h)
;       to point to error_handler

;        save original segment and offset addresses for int 24h

         mov     ax,vectors
         mov     es,ax
         assume es:vectors
         mov     ax,error_int_vector
         mov     rom_error_int,ax
         mov     ax,error_int_vector[2]
         mov     rom_error_int[2],ax

;        setup our own error interrupt routine

         mov     error_int_vector,offset error_handler
         mov     error_int_vector[2],cs
         assume  es:nothing
         create  fcb


	push	ax	;save ax - return code from create

;        reset pointer to interrupt 24h

         mov     ax,vectors
         mov     es,ax
         assume es:vectors
         mov     ax,rom_error_int
         mov     error_int_vector,ax
         mov     ax,rom_error_int[2]
         mov     error_int_vector[2],ax
        pop	ax	;restore ax
         assume  es:nothing


	 cmp	 al,0	     ;open ok?
	 jz	 open_ok
	 biosprnt newdisk
open_ok: mov	 recd_size,401eh ;record size
	 mov	 cx,01h ;number of records

	 rwrite  fcb
	 cmp	 al,0	   ;ok? 				       
         jne     close_fcb
	 jmp	 write2
close_fcb:
         close   fcb
         delete  fcb
         call    loc_proc
         biosprnt no_space
         call    loc_proc
         biosprnt re_try
         biosread                  ;read & display response
         mov  ah,14
         int  10h
 	 cmp  al,'Y'               ;retry?
         jne  tryy
         jmp  srch
tryy:
         cmp  al,'y'
         jne  back                 ;no ==> return
back2:   jmp  srch
back:    ret
write2:  close   fcb
         ret
error_handler:
         push    es	;must preserve es
	push	ax
	push	ds
	push	bx
	push	dx
	push	cx
	mov	ax,cs
	mov	ds,ax
         mov     slide,0
  	inc 	row
	locate	row,col
	mov	cl,2
	shl	di,cl
	mov	si,[x_err+di]
next_char:
         mov     ah,14
         mov     bh,0
         mov     al,byte ptr [si]
         push    cx
         mov     cx,1
         int     10h
         pop     cx
         inc     si
         cmp     byte ptr [si],'$'
         jne     next_char
once_again:
  	inc 	row
	locate	row,col
	biosprnt	abort_or_retry
 	 biosread          	   ;read response from keyboard
         mov  ah,14                ;display the character
         int  10h
	 cmp  al,'a'
         je   abort_it
	 cmp  al,'A'
         je   abort_it
	 cmp  al,'r'
         je   retry_it
	 cmp  al,'R'
         je   retry_it
	jmp	once_again
retry_it:
	mov	slide,1	;reset slide
	pop	cx
	pop	dx
	pop	bx
	pop	ds
	pop	ax
	pop	es
	mov	al,1	;retry
	iret
abort_it:

;        reset pointer to interrupt 24h

         mov     ax,vectors
         mov     es,ax
         assume es:vectors
         mov     ax,rom_error_int
         mov     error_int_vector,ax
         mov     ax,rom_error_int[2]
         mov     error_int_vector[2],ax
         assume  es:nothing
	pop	cx
	pop	dx
	pop	bx
	pop	ds
	pop	ax
	pop	es
	mov	al,2	;terminate program
	iret
DSK_WRITE ENDP




loc_proc proc
         inc  row
         cmp  row,24
         jb   loc5
         scroll
         locate 24,0
         biosprnt pfks
         mov  row,1
loc5:    locate  row,col
         ret
loc_proc endp
         page
	 subttl  restore_screen procedure
restore_screen proc   near

         set_mode  crt_mode_2

;        disable video

         mov    ax,rom_bios_data
         push   ds
         mov    ds,ax
         assume ds:rom_bios_data
         mov    dx,addr_6845   ;get base address for display adapter
         add    dx,4           ;IO address for 3x8 register
         mov    al,crt_mode_set ;current setting
         and    al,0f7h         ;turn video off
         out    dx,al
         pop    ds
         assume ds:nothing

         set_background   color_select_reg

         set_palette      color_select_reg

;        move original graphics screen back to graphics memory

	 mov	 ax,screen_loc
	 mov	 es,ax	   ;addressability to destination string
	 lea	 si,screen ;load offset of source into si
	 mov	 di,0	   ;load offset of destination
	 mov	 cx,4000h  ; length of move
	 rep	 movsb	   ;move it

;        enable video

         mov    ax,rom_bios_data
         push   ds
         mov    ds,ax
         assume ds:rom_bios_data
         mov    dx,addr_6845   ;get base address for display adapter
         add    dx,4           ;IO address for 3x8 register
         mov    al,crt_mode_set ;current setting
         or     al,08h          ;turn video on
         out    dx,al
         pop    ds
         assume ds:nothing

	 ret               ; return
restore_screen endp
         page
	subttl	Video I/O Interrupt Routine
video_routine	 proc	near
         assume ds:nothing
	pushf				;simulate int 10h
	call    rom_video_int
	push    ax
	push	bx
	push    ds
	mov     ax,cs                  ;addressability to data
	mov	 ds,ax                  ;segment
	cmp     slide,1                ;in slide show
	jne     not_in_slide
is_mono:
	pop	ds
	pop	bx
	pop	ax
         iret
not_in_slide:

;	only save video information if configured for graphics.

	push	ds
	assume ds:nothing
	mov    bx,rom_bios_data
	mov    ds,bx
	assume ds:rom_bios_data
	mov    ax,equip_flag      ;save equip-flag upon entry
	assume ds:nothing
         and    ax,30h	;turn off all but display
         cmp    ax,30h	;monochrome
	pop	ds
         jne    not_mono_3
	jmp	is_mono
not_mono_3:
	push	di
	lea	 di,crt_mode_2   ;offset of mode register
	call	save_screen
	pop	di
	pop	ds
	pop	bx
	pop	ax
	iret
video_routine	 endp
	page
         subttl  INITIALIZE INTERRUPT VECTORS
init     proc  near
         mov     ax,cs
         mov     ds,ax

	mov	es,ax
      	assume     es:code

;	verify that the graphics board is installed

	mov    bx,graphics_memory
	push   ds
	mov    ds,bx
	assume ds:graphics_memory
	mov	ax,graphics_word	;read word from memory
	inc	ax			;increment word
	mov	graphics_word,ax	;write word to memory
	mov	bx,graphics_word	;re-read word
	cmp	ax,bx			;changed?
	jne	not_graphics		;yes ==> jmp
	dec	ax			;restore original word
	mov	graphics_word,ax
	jmp	is_graphics
not_graphics:
	mov	ax,es
	mov	ds,ax
	display graphics_required
	int	20h
graphics_required db 'The graphics board is required for this '
		  db 'program!!!$'
is_graphics:
	pop	ds
         assume    ds:code
         cmp     parmlen,0         ;Any parms?
         je      install           ;No ==> jmp
         mov     al,parm1          ;check validity of 1st parm
         call    chk_parm
         cmp     al,00h
         je      bad_parm          ;1st parm bad ==> jmp
         mov     test1,al          ;replacement for left shift
         cmp     parmlen,2         ;Is there a second parm?
         je      install           ;No ==> jmp
         mov     al,parm2          ;check if second parm is valid
         call    chk_parm
         cmp     al,00h
         je      bad_parm          ;2nd parm bad ==> jmp
         mov     test2,al          ;replacement for right shift
         jmp     install
bad_parm:
         biosprnt badparms
         int      20h                   ;get out
install:
         assume ds:vectors

;        save original segment and offset addresses for int 09h

         mov     ax,vectors
         mov     ds,ax
         cli				;disable all interrupts

;	save the address of the original int 09h routine

         mov     ax,keyboard_int_vector
         mov     rom_keyboard_int,ax
         mov     ax,keyboard_int_vector[2]
         mov     rom_keyboard_int[2],ax

;        setup our own keyboard interrupt routine

         mov     keyboard_int_vector,offset kbint
         mov     keyboard_int_vector[2],cs

;	save the address of the original int 10h routine

         mov     ax,video_int_vector
         mov     rom_video_int,ax
         mov     ax,video_int_vector[2]
         mov     rom_video_int[2],ax

;        setup our own video I/O interrupt routine

         mov     video_int_vector,offset video_routine
         mov     video_int_vector[2],cs

         sti                            ;enable interrupts
         call    set_cursor_mode        ;set cursor mode to default

;        Terminate but stay resident.
;        dx is set to the last address + 1 to stay resident.

         lea     dx,init
         int     27h
init     endp


chk_parm   proc   near

;          a = <alt>, c = <ctrl>, l = <left shift>, r = <right shift>

           cmp    al,'a'
           je     is_alt
           cmp    al,'A'
           je     is_alt
           cmp    al,'c'
           je     is_cntl
           cmp    al,'C'
           je     is_cntl
           cmp    al,'l'
           je     is_lefts
           cmp    al,'L'
           je     is_lefts
           cmp    al,'r'
           je     is_rights
           cmp    al,'R'
           je     is_rights
           sub    al,al         ;error
           ret
is_alt:    mov    al,alt_shift
           ret
is_cntl:   mov    al,ctl_shift
           ret
is_lefts:  mov    al,left_shift
           ret
is_rights: mov    al,right_shift
           ret
chk_parm   endp



set_cursor_mode  proc  near
         push  ax
         push  cx
         push  ds
         mov   ax,rom_bios_data
         mov   ds,ax
         assume ds:rom_bios_data
         mov    ax,equip_flag      ;determine which adapter is active
         and    al,30h             ;isolate adapter information
         mov    cx,607h            ;set for color/graphics adapter
         cmp    al,30h             ;is monochrome display active
         jne    color_active       ;No, set cursor type
         mov    cx,0b0ch           ;cursor mode for monochrome display
color_active:
         mov    ah,1               ;set-cursor type
         int    10h
         pop    ds
         pop    cx
         pop    ax
         ret
set_cursor_mode endp
code	 ends
	end	 begin
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0196

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT      1123  11-15-84   8:33a
    CRCK4    COM      1536  10-21-82   7:54p
    DIRCOMP  COM      1024   6-13-84  12:48p
    EQUIP102 COM      1792   5-21-84   1:07p
    EQUIP102 DOC      7808   5-21-84   1:09p
    MV       DOC      1408   6-08-84  11:41a
    MV       EXE     14592   6-08-84  11:40a
    READ     ME        674   6-16-84   7:33p
    SHOW     ASM     38912   6-13-84   2:12p
    SHOW     EXE     21744   6-15-84   9:43a
    SLIDE    ASM     34816   6-12-84   5:42p
    SLIDE    COM     19067   6-15-84   9:43a
    UTIL102  COM      4352   5-21-84   1:04p
    UTIL102  DOC      8576   5-21-84   1:06p
           14 file(s)     157424 bytes
                               0 bytes free
