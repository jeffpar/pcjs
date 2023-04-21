---
layout: page
title: "PC-SIG Diskette Library (Disk #779)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0779/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0779"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROMENU AND PATCH AND OTHER UTILITIES"

    A memory-resident printer-control menu for Epson and compatible
    printers.
    
    PMENU3 gives you control codes, such as condensed, double strike, or
    underline, on command.  Once loaded, you can access PMENU3 while running
    your program and enter codes one at a time, or combinations of codes
    such as ``bold and italics''.
    
    Smarter than your average printing program, PMENU3 does not display or
    send conflicting codes to the printer, and can also be removed from
    memory.
    
    PATCH lets you view and modify disk files in memory or peruse and change
    the computer's memory as if it were a disk file.
    
    Display the contents of a file in memory, 256 bytes at a time.  Move
    around in the file, modify its contents, cancel modifications and search
    for specified strings.  Move immediately to the beginning or end of a
    file or jump to a portion of the file that is a certain offset, in
    bytes, from the beginning of the file.
    
    The file contents are displayed in both ASCII and hexadecimal.  You can
    do searches and modifications in either format.  Both formats of the
    file are viewed at the same time, with the hexadecimal on the left and
    the ASCII on the right.
    
    "Welcome Home" for the new baby, the traveller or the convalescent,
    "Sale Today" to boost your daily cash-flow, or "Hi Mom" from the
    football game. You can have them all and more with PC-BANNER.
    
    Here is a simple, menu-driven banner program that lets you change the
    style of print from light to dark. And it uses the IBM graphics
    character sets for high-quality banners.
    
    Here are a pair of protective utilities.
    
    SCRNOFF3 blanks your screen after three minutes of keyboard inactivity.
    This avoids etching your monitor.  Pressing any key brings the screen
    back into view.
    
    KYLOCK blanks your screen and locks the keyboard from others.  When the
    keyboard is locked, not even a Ctrl-Alt-Del routine reboots the
    computer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES779.TXT

{% raw %}
```
Disk No:  779
Program Title: PROMENU, PATCH & Other Utilities
PC-SIG version: 1.6

PMENU3 is a memory-resident printer-control menu for Epson and
compatible printers.  It allows access to control codes such as
condensed, double strike, or underline on command.  By simply typing
PMENU332 at the DOS prompt, the program is loaded into memory, and you
are back at DOS.  Then load your other program as usual.  To pop up
PMENU3 while running your program, hit Alt-Tab.  You can enter codes one
at a time, or combinations of codes such as bold and italics.

What sets PMENU3 apart is that it has built-in "intelligence."  Unlike
generic programs, PMENU3 does not display or send codes to the printer
that do not work together.  PMENU3 is also unloadable from memory by
pressing Function-10 twice.

PMENU3 was developed under Turbo Pascal version 4.0 and DOS 3.1, but it
runs on DOS 2.0--3.3.  PMENU3 is compatible with most software for the
IBM PC, but this version expects the display to be in text mode.  Many
users have reported using it on various compatibles.

PATCH lets you view and modify disk files in memory.  The program
displays the contents of a file, 256 bytes at a time, and allows you to
move around in the file, modify its contents, cancel modifications, and
search through the file for specified strings.  You can immediately move
to the beginning or end of a file, or jump to a portion of the file that
is a certain offset, in bytes, from the beginning of the file.  The
contents of the file are displayed in both ASCII and hexadecimal, and
searches and modifications can be made in either format.  The
hexadecimal and ASCII formats of the file are viewed at the same time,
with the hexadecimal format on the left and the ASCII format on the
right.

PATCH asks for a file name if none is specified on the DOS command line,
then attempts to open the specified file.  The file name "memory" is
special to PATCH.  Entering this name allows you to peruse and change
the computer's memory as if it were a disk file.

PC-BANNER is a simple, easy-to-use banner program.  It is menu-driven,
letting you change the style of print from light to dark.  This program
makes use of the IBM graphics character sets which create high-quality
banners.  SCRNOFF3 is designed to blank your screen after three minutes
of keyboard inactivity.  Depressing any key brings the screen back into
view.

KYLOCK blanks your screen and locks the keyboard from others.  When the
keyboard is locked, not even a ctrl-alt-del routine will reboot the
computer.

Please note, SCRNOFF3 and KYLOCK are meant to be run together, not as
separate programs.

Usage:  Utilities.

Special Requirements:  A printer for PMENU3 and PC-BANNER.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00 for PMENU, $20.00 for PATCH, $2.00 for
PC-BANNER, and $1.50 SCRNOFF3.

File Descriptions:

PMENU332 EXE  Epson version main program.
PROMNU32 EXE  Proprinter version main menu.
PMENU332 DOC  Documentation file for PMENU330.
PROMNU32 DOC  Documentation file for PROMNU30.
PMENU332 TXT  Text file on start up procedure.
PROMNU32 TXT  Text file on start up procedure.
PATCH    COM  Main program.
PATCH    DOC  Documentation.
READ     ME   Text file.
READ     NOW  Note on PATCH, version 1.5.
PCBANV3A EXE  Main Program.
README   BAN  Information about PC-BANNER, version 3.
SCRNKY   DOC  Documentation.
SCRNOFF3 ASM  Source code for SCRNOFF3.COM.
SCRNOFF3 COM  Program that blanks screen after 3 minutes of inactivity.
KYLOCK   ASM  Source code for KYLOCK.COM.
KYLOCK   COM  Program that blanks the screen and locks the keyboard.
NEWLIFE  AD   An advertisement.
NEWLIFE  REG  Registration form.
NEWLIFE  TXT  Info file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## KYLOCK.ASM

{% raw %}
```
;
                 page 66,132
;
;KYLOCK.ASM for the IBM PC/XT & PCJR - 1987 by Ocean
;
;This is part 2 of a 2 part utilities set consisting of -----------------------
;SCRNOFF3.ASM & KYLOCK.ASM. -----------------------THEY MUST BE USED TOGETHER!
;                                                       -----------------------
;
kb_data             equ 60h                     ;keyboard data port
kb_ctrl             equ 61h                     ;keyboard control port
k_key               equ 37                      ;scan code of k key
o_key               equ 24                      ;scan code of o key
del_key             equ 83                      ;scan code of Del key
ins_key             equ 82                      ;scan code of Ins key
alt_key             equ 8                       ;shift code for Alt key
ctrl_key            equ 4                       ;shift code for Ctrl key
eoi                 equ 20h                     ;end-of-interrupt signal
int_ctrl_port       equ 20h                     ;8259 interrupt controller port
;
code             segment para public 'code'
                 assume cs:code
                 org 0
seg_org             equ $
;
bios_data        segment at 40h                 ;bios data area
                 org 063h
addr_6845        dw ?                           ;define location that holds
                                                ;word address of active display
                 org 065h
crt_mode_set     db ?                           ;define location that holds
                                                ;byte loaded into pc active
                                                ;display port or pcjr's vga
bios_data        ends
;
                 org 0100h
begin:           jmp initialize                 ;goto initialization routine
;
adapter          db 0                           ;0 = EGA, 1 = CGA or MDA, and
                                                ;2 = PCJR
pcjr_mode        db ?                           ;current setting of PCJR video
pc_mode          db ?                           ;current setting of 6845 mode
                                                ;control register of the pc
kylock_status    db 0                           ;interrupt routine status flag
char_count       dw ?                           ;length of password
hotky_val        db 00h,44h,2fh,2eh,2dh         ;hotkey make scan code table -
                 db 20h,1eh,16h,11h             ;filler,F10,v,c,x,d,a,u, and w
msr_address      dw ?                           ;address of mode select register
pcjr_signature   db 0fdh                        ;PCJR BIOS signature
ibm_signature    db 'IBM'                       ;EGA BIOS signature
errmsg           db 13,10,'KYLOCK ALREADY LOADED!',13,10,'$'
;
old_int_9h       label dword                    ;holding area for INT 9h vector
int_9h_ptr       dw 2 dup (?)
old_int_16h      label dword                    ;holding area for INT 16h vector
int_16h_ptr      dw 2 dup (?)
old_int_5h       label dword                    ;holding area, INT 5h vector
int_5h_ptr       dw 2 dup (?)
;
;------------------------------------------------------------------------------
;All calls to INT 5 will henceforth be routed thru here.  On the PCJR, the
;Print Screen Function is processed by INT 48h (This interrupt translates the
;PCJR 62 key keyboard scan codes to be compatible with the 83 key keyboard of
;the PC and then INT 9 occurs.) which activates INT 5 before INT 9 is called.
;To insure that a copy of the screen cannot be printed out on the PCJR while
;the keyboard is supposedly locked, therefore, requires that the bios print
;screen service be intercepted and nulled while KYLOCK is active.
;------------------------------------------------------------------------------
;
new_int_5h       proc near
                 test kylock_status,01          ;kylock routine active?
                 jnz print_not                  ;yes, block PRTSCR function
                 jmp old_int_5h                 ;no, goto normal INT 5h handler
print_not:       iret                           ;exit, nulling INT 5h
new_int_5h       endp
;
;------------------------------------------------------------------------------
;All calls to INT 16h will henceforth be routed thru here.  If ah = 255 on
;entry, bh is set to 255 to signal the caller that this routine was indeed
;invoked.
;------------------------------------------------------------------------------
new_int_16h      proc near
                 cmp ah,255                     ;ah = 255?
                 jne newint1                    ;no, then jump
                 mov bh,ah                      ;yes, set bh to 255 and exit
                 iret
newint1:         jmp old_int_16h                ;goto normal 16h handler
new_int_16h      endp
;
;------------------------------------------------------------------------------
;Execution comes here every time an interrupt 9 is generated from the keyboard.
;------------------------------------------------------------------------------
;
kylock           proc near
                 sti                            ;restore interrupts
                 push ax                        ;save registers
                 push bx
                 push cx
                 push dx
                 push si
                 push di
                 push ds
                 push es
                 in al,kb_data                  ;read keypress (or break)
                 cmp kylock_status,0            ;kylock routine active?
                 je kylock0                     ;no, then check for Alt-O/Alt-K
;
;The kylock routine is already in progress.  Check for a press of one of the
;POPUP DESKSET "hot-keys" and block it out if it just occured.  (This routine
; may be omitted if this program is not used with POPUP DESKSET.)
;
                 and al,7fh                     ;strip the break bit
                 mov dl,al                      ;load keypress make scan code
                 mov cx,8                       ;number of hotkeys to check
                 lea bx,hotky_val               ;address of table of hotkeys
next1:           mov ax,cx                      ;sequential pointer to hotkey
                 xlat hotky_val                 ;load value of hotkey to al
                 cmp dl,al                      ;keypress match this "hotkey"?
                 jne loop                       ;no, how about next one?
                 mov ah,2                       ;yes, get shift status
                 int 16h                        ;
                 cmp al,alt_key                 ;alt pressed?
                 jne exit1                      ;no, goto old int 9 routine
                 call kb_reset                  ;alt-"hotkey" pressed; reset kb
                 jmp unlck1                     ;exit
loop:            loop next1                     ;get next value from table
                 mov al,dl                      ;no match - continue
;
;The kylock routine is already in progress.  Check for a press of Ctrl-Alt-Del
;or Ctrl-Alt-Ins (On the PCJR, this combination invokes diagnostic routines
;from which a Ctrl-Alt-Del can reset the machine.) and block it out if it just
;occurred.
;
                 cmp al,ins_key                 ;was Ins Key pressed?
                 je sh_stat                     ;get shift status
                 cmp al,del_key                 ;was the Del key pressed?
                 jne exit1                      ;no, goto old INT 9 routine
sh_stat:         mov ah,2                       ;Int 16h - get shift status
                 int 16h                        ;get status of shift keys
                 and al,alt_key+ctrl_key        ;ctrl-alt pressed?
                 cmp al,alt_key+ctrl_key
                 jne exit1                      ;no, goto old int 9 routine
                 call kb_reset                  ;ctrl-alt-del press - reset kb
                 jmp unlck1                     ;exit
;                
;The kylock routine is not already active.  If Alt-O was pressed, toggle timer
;on/off, then block it out.
;
kylock0:         cmp al,o_key                   ;o key pressed?
                 jne strp_brk                   ;no, jump
                 mov ah,2                       ;yes, get shift status
                 int 16h
                 test al,alt_key                ;Alt pressed when o key press?
                 jnz toggle                     ;Alt-o key press --- toggle
                 jmp strp_brk                   ;Alt-o key not pressed --- jump
;
;Int 16h is called here with ah set to 158.  Int 16h is a chained interrupt
;hooked into by SCRNOFF3.  When it is SCRNOFF3's turn in the chain, it tests
;the value of the register AH.  If it has been set to 158, then it toggles its
;timer on/off.
;
toggle:          mov ah,158                     ;Place 158 into AH
                 int 16h                        ;Call INT with AH set to 158
                 call kb_reset                  ;reset kybrd, throw away alt-o
                 jmp unlck1                     ;exit, skip normal kybrd route
strp_brk:        and al,7fh                     ;strip the break bit
;
;The kylock routine is not already active.  See if Alt-K was pressed.
;
                 cmp al,k_key                   ;is it the k key?
                 jne exit                       ;no, goto old int 9 routine
                 mov ah,2                       ;int 16h - get shift status
                 int 16h
                 test al,alt_key                ;is the alt key pressed?
                 jne kylock2                    ;yes, goto kylock routine
;
;Exit routine restores registers and, if screen is blanked, enables the video
;& resets count before exiting thru normal keyboard interrupt handler.
;
exit:            pop es                         ;pop registers off stack
                 pop ds
                 pop di
                 pop si
                 pop dx
                 pop cx
                 pop bx
                 pop ax
;
;Call user interrupt 4dh (created by scrnoff3.com) to unblank screen if the
;timer within scrnoff3.com is 0.
;
                 int 4dh                        ;user interrupt 4dh
                 jmp old_int_9h                 ;exit to normal interrupt
                                                ;handler
;
;Exit1 routine restores registers before exiting thru normal keyboard interrupt
;handler and bypasses video enable and count reset routines since kylock is in
;progress.
;
exit1:           pop es                         ;pop registers off stack
                 pop ds
                 pop di
                 pop si
                 pop dx
                 pop cx
                 pop bx
                 pop ax
                 jmp old_int_9h                 ;exit to normal interrupt
                                                ;handler
;
;Trigger keys are pressed.  Reset the keyboard, send an EOI signal to the 8259,
;and execute our kylock routine.
;
kylock2:         call kb_reset                  ;reset keyboard and issue EOI
                 mov kylock_status,1            ;set status byte
                 push cs                        ;set ds and es to the code
                                                ;segment
                 pop ds
                 push cs
                 pop es
                 assume ds:code
;
;Begin kylock routine by disabling video and getting a password from the user.
;
                 call video_disable             ;disable video display
                 xor di,di                      ;point DI to start of PSP
                 call get_password              ;get the password
                 or cx,cx                       ;any characters input?
                 je unlock                      ;no, exit this interrupt
                 cmp al,27                      ;was input terminated with ESC
                 je unlock                      ;yes, then exit
                 mov char_count,cx              ;save length of password
;
;The password is now entered and the keyboard 'locked', awaiting input of a 
;matching password.  Accept input from the keyboard but continue to loop until
;the password is correctly re-entered.
;
kylock3:         mov di,80h                     ;point DI to upper storage
                 call get_password              ;get password
                 cmp cx,char_count              ;same number of characters?
                 jne kylock3                    ;no, then paswords don't match
                 cmp al,27                      ;was input ended with ESC key?
                 je kylock3                     ;yes, start input loop over
                 xor si,si                      ;point SI to first password
                 mov di,80h                     ;point DI to second password
                 cld                            ;clear DF for string operations
                 repe cmpsw                     ;compare the two passwords
                 jne kylock3                    ;not equal, continue looping
;
;Exit kylock routine by clearing the status flag, enabling the video display,
;and executing an IRET instruction.
;
unlock:          mov kylock_status,0            ;reset status byte
                 push ax                        ;save ax & dx
                 push dx
                 call video_enable              ;re-enable video display
                 pop dx                         ;restore dx & ax
                 pop ax
unlck1:          pop es                         ;restore register values
                 pop ds
                 pop di
                 pop si
                 pop dx
                 pop cx
                 pop bx
                 pop ax
                 iret                           ;exit kylock routine
kylock           endp
;
;------------------------------------------------------------------------------
;VIDEO ENABLE and VIDEO DISABLE enable and disable the VIDEO output to the
;screen of the PCJR
;------------------------------------------------------------------------------
;
video_disable    proc near                      ;disable the video display
                 cmp adapter,0                  ;is video adapter an EGA?
                 je ega_disable                 ;yes, then jump
                 test adapter,2                 ;is computer a PCJR?
                 jnz jr_disable                 ;yes, then jump
;
;Disable video of PC with CGA or MDA adapter.
;
                 push ds                        ;save ds
                 mov ax,bios_data               ;set es to bios data area
                 mov ds,ax
                 assume ds:bios_data
                 mov al,crt_mode_set            ;get current value (dynamic) of
                                                ;6845 mode control register
                 mov pc_mode,al                 ;save it
                 mov ax,addr_6845               ;get active display address
                 add ax,4                       ;add 4 to get MSR address
                 mov msr_address,ax             ;save address
                 mov al,0ah                     ;out 6845 index register...
                 mov dx,03b4h                   ;points to 6845 data reg. 10
                 out dx,al
                 mov al,2bh                     ;value to turn off cursor
                 mov dx,03b5h                   ;6845 data registers port
                 out dx,al                      ;disable cursor
                 mov dx,msr_address             ;6845 mode control register
                 mov al,pc_mode                 ;get current value of 6845 mode
                 and al,37h                     ;strip enable bit
                 out dx,al                      ;disable video display
                 pop ds                         ;restore ds
                 ret
;
;Disable video of PC with an EGA card.
;
ega_disable:     xor al,al                      ;zero al (clear bit 5)
                 call set_ega                   ;disable EGA
                 ret
;
;Disable video of PCJR.
;
jr_disable:      push ds                        ;save ds register
                 mov ax,bios_data               ;set es to bios data area
                 mov ds,ax                      ;                              
                 assume ds:bios_data            ;                              
                 mov al,crt_mode_set            ;get current value (dynamic) of
                                                ;PCJR VGA mode control register
                 mov pcjr_mode,al               ;store current value, VGA mode
                 mov dx,03dah                   ;PCJR VGA I/O port
                 in  al,dx                      ;addr/data f/f to proper state
                 mov al,02h                     ;VGA border color register
                 out dx,al                      ;set VGA to border color cont.
                 mov al,00h                     ;color black
                 out dx,al                      ;set border color black
                 mov al,00                      ;VGA mode control 1 register
                 out dx,al                      ;set VGA to mode control 1
                 mov al,pcjr_mode               ;get current value of VGA mode
                 and al,0f7h                    ;toggle enable/disable bit
                 out dx,al                      ;disable video display
                 pop ds                         ;restore ds register
                 ret
video_disable    endp
;
video_enable     proc near                      ;enable the video display
                 cmp adapter,0                  ;is video adapter an EGA?
                 je ega_enable                  ;yes,then jump
                 test adapter,2                 ;is the computer a PCJR?
                 jnz jr_enable                  ;yes, then jump
;
;Enable video of PC with CGA or MDA adapter card.
;
                 mov al,0ah                     ;out to 6845 index register...
                 mov dx,03b4h                   ;points to 6845 data reg. 10
                 out dx,al
                 mov al,0bh                     ;value to turn cursor on
                 mov dx,03b5h                   ;6845 data registers port
                 out dx,al                      ;enable cursor
                 mov dx,msr_address             ;6845 mode control register
                 mov al,pc_mode                 ;get stored value 6845 mode
                 out dx,al                      ;enable pc display
                 ret
;
;Enable video of PC with an EGA adapter card.
;
ega_enable:      mov al,20h                     ;set bit 5 of al
                 call set_ega                   ;enable EGA video
                 ret
;
;Enable video of PCJR.
;
jr_enable:       mov dx,03dah                   ;set PCJR VGA address
                 in al,dx                       ;addr/data f/f to proper state
                 mov al,00h                     ;VGA mode control 1 register
                 out dx,al                      ;set VGA to mode control 1
                 mov al,pcjr_mode               ;get stored value VGA mode
                 out dx,al                      ;enable PCJR video display ...
                                                ;border remains black
                 ret
video_enable     endp
;
;-----------------------------------------------------------------------------
;SET_EGA is called by VIDEO_ENABLE and VIDEO_DISABLE routines to selectively
;set or clear bit 5 of the EGA Attribute Address Register.
;Entry:  AL - value to OUT to Attribute Address Register
;-----------------------------------------------------------------------------
;
set_ega          proc near
                 push ax                        ;save AL
                 mov dx,3bah                    ;reset monochrome flip-flop...
                 in al,dx                       ;for write to Address Register
                 mov dx,3dah                    ;reset color flip-flop
                 in al,dx
                 mov dx,3c0h                    ;set DX to Attr Addr Register
                 pop ax                         ;retrieve entry value of AL
                 out dx,al                      ;write value to register
                 ret
set_ega          endp
;
;------------------------------------------------------------------------------
;KB RESET subroutine resets the keyboard and issues an EOI to the 8259 PIC.
;------------------------------------------------------------------------------
;
kb_reset         proc near
                 test adapter,2                 ;Is this computer a PCJR?
                 jnz jr_kbd                     ;yes,then jump
;
;Reset standard PC keyboard.
;
std_kbd:         in al,kb_ctrl                  ;get current control port value
                 mov ah,al                      ;save it
                 or al,80h                      ;set the keyboard clear bit
                 out kb_ctrl,al                 ;send reset value to port
                 mov al,ah                      ;get the original value
                 out kb_ctrl,al                 ;enable the keyboard
                 jmp kbd1                       ;jump to disable interrupts
                                                ;and send EOI signal to 8259
;
;Reset PCJR keyboard.
;
jr_kbd:          in al,0a0h                     ;yes, then read NMI mask
                                                ;register to clear PCJR
                                                ;keyboard NMI latch
kbd1:            cli                            ;disable interrupts
                 mov al,eoi                     ;get eoi value
                 out int_ctrl_port,al           ;send eoi signal to the 8259
                 sti                            ;enable interrupts
                 ret                            ;return to caller
kb_reset         endp
;
;------------------------------------------------------------------------------
;GET PASSWORD subroutine reads up to 50 characters entered from the keyboard
;and stores them in the designated buffer.  Backspace key is active as an
;editing key.
;Entry:  ES:DI - buffer address        | EXIT:  CX - character count
;------------------------------------------------------------------------------
;
get_password     proc near
                 cld                            ;clear DF for string operations
                 xor cx,cx                      ;zero CX - initial char count
getpas1:         mov ah,0                       ;INT 16h funct. - get keypress
                 int 16h                        ;get character from keyboard
                 cmp al,13                      ;ENTER key?
                 je done                        ;yes, then exit
                 cmp al,27                      ;ESC key?
                 je done                        ;yes, then exit
                 cmp al,8                       ;BACKSPACE key?
                 je backspace                   ;yes,goto backspace routine
                 cmp cx,40h                     ;is the buffer full?
                 je buffer_full                 ;yes, then don't accept entry
                 inc cx                         ;char entered - increment count
                 stosw                          ;deposit character in buffer
                 jmp getpas1                    ;return for more input
backspace:       or cx,cx                       ;any characters to delete?
                 je getpas1                     ;no,then goto input loop
                 sub di,2                       ;decrement buffer pointer
                 dec cx                         ;decrement character count
                 jmp getpas1                    ;return to input loop
buffer_full:     mov ah,14                      ;INT 10h function - Write TTY
                 mov al,7                       ;ASCII code for beep
                 int 10h                        ;sound the beep
                 jmp getpas1                    ;and return for more input
done:            ret                            ;return to calling routine
get_password     endp
;
;------------------------------------------------------------------------------
;INITIALIZE routine checks to see if KYLOCK has already been loaded.  If so,
;execution aborts with an error message.  If it hasn't, then the value of 
;ADAPTER is set according to the type of display adapter present in the system
;and the vectors in low memory pointing to the INT 9h and 16h routines are set
;to point to our own newly installed code.
;------------------------------------------------------------------------------
;
initialize       proc near
;
;See if KYLOCK has been previously loaded by calling INT 16h with AH set to
;255 and BH set to 0.  If BH comes back unchanged, then KYLOCK is NOT
;currently resident in memory; if BH = 255, then KYLOCK has been loaded.
;
                 mov ah,255                     ;set AH and BH
                 xor bh,bh
                 int 16h                        ;call interrupt routine
                 or bh,bh                       ;is BH = 0?
                 je init1                       ;yes, then continue
                 lea dx,errmsg                  ;no, print error message & exit
                 mov ah,09h
                 int 21h
                 ret
;
;Check the computer's ID to see if its a PC or PCJR.
;
init1:           mov ax,0f000h                  ;es to BIOS segment holding
                 mov es,ax                      ;computer ID value
                 mov al,byte ptr es:[0fffeh]    ;offset address and load to al
                 sub al,0fch                    ;
                 or al,al                       ;al = 0?
                 jz pc                          ;AT, try the pc routine...
                 dec al                         ;al = 1?
                 jz pcjr                        ;yes, then computer is a PCJR
                 dec al                         ;al = 2?
                 jz pc                          ;XT, try the pc routine...
                 dec al                         ;al = 3?
                 jz pc                          ;PC
                 jnz pc                         ;unidentified computer, try PC
                 ret
;
;The computer is a PCJR.
;
pcjr:            mov adapter,2                  ;set adapter to PCJR
                 jmp init2                      ;jump to install program
;
;The computer is a PC.  Check for the presence of an Enhanced Graphics Adapter
;by looking for an 'IBM'signature in the EGA Bios area.
;
pc:              mov ax,0c000h                  ;set ES to EGA BIOS segment
                 mov es,ax
                 mov di,1eh                     ;starting address of signature
                 lea si,ibm_signature           ;point si to 'IBM' text
                 mov cx,3                       ;three characters to check
                 cld                            ;clear df
                 repe cmpsb                     ;compare the three bytes
                 je init2                       ;signature found - EGA present
;
;The computer is a PC, but the display adapter is not an EGA.  It must be
;either a CGA or an MDA.
;
                 mov adapter,1                  ;set ADAPTER for CGA or MDA
;
;Save the current interrupt 16h vector and replace it with our own.
;
init2:           mov ah,35h                     ;DOS function - get vector
                 mov al,16h                     ;interrupt 16h
                 int 21h                        ;get the vector
                 mov int_16h_ptr,bx             ;save offset of vector
                 mov int_16h_ptr[2],es          ;save segment of vector
                 mov ah,25h                     ;DOS function - set vector
                 mov al,16h                     ;interrupt 16h
                 lea dx,new_int_16h             ;pointer to new routine
                 int 21h                        ;set vector
;
;Now save the old interrupt 9 vector, replace it with the new one, and exit.
;
                 mov ah,35h                     ;DOS function - get vector
                 mov al,9h                      ;interrupt 9
                 int 21h                        ;get vector
                 mov int_9h_ptr,bx              ;save offset
                 mov int_9h_ptr[2],es           ;save segment
                 mov ah,25h                     ;DOS function - set vector
                 mov al,9h                      ;interrupt 9
                 lea dx,kylock                  ;point to our freeze routine
                 int 21h                        ;set vector
;
;Save the current interrupt 5h vector and replace it with a new routine.
;
                 mov ah,35h                     ;DOS function - get vector
                 mov al,5h                      ;interrupt 5h
                 int 21h                        ;get the vector
                 mov int_5h_ptr,bx              ;save offset of vector
                 mov int_5h_ptr[2],es           ;save segment of vector
                 mov ah,25h                     ;DOS function - set vector
                 mov al,5h                      ;interrupt 5h
                 lea dx,new_int_5h              ;pointer to new routine
                 int 21h                        ;set vector
                 mov dx,(offset initialize - seg_org + 15) shr 4     ;...
                                                ;prepare DX for exit
                 mov ah,31h                     ;terminate-but-stay-resident
                 int 21h                        ;dos function call
initialize       endp
;
code             ends
                 end begin
                            
```
{% endraw %}

## NEWLIFE.TXT

{% raw %}
```

                           NEWLIFE Software Programs
                             written by Bob Nance

The latest versions of all of these programs are available on the NEWLIFE
CHRISTIAN BBS @ 601-627-5582, 300-9600 Baud (Courier HST) Bob Nance, SYSOP.
(24 Hours)

                               SYSOP Utilities:

BBFILE and REGGIE - Bulletin Board registration programs - REGGIE runs on-
  line; BBFILE is the companion database application that produces labels,
  reports, and mailmerge files.  Has ability to read in 4 questions from
  external text file, and produce nice reports from the answers for use as
  bulletins.  Note: REGGIE runs on-line as a door under DOORWAY, by Marshall
  Dudley, available at Data World BBS (615)966-3574... this allows it to
  be run under any BBS system that can support doors.
BBNEWS - Bulletin Board NEWS file maker - builds NEWS files by reading
  configuration files which contain a list of files the NEWS is to be composed
  of.  Multiple "quotes" type files are supported and can be anywhere in the
  resulting NEWS files, along with full text files, such as disclaimers,
  notices, download/upload reports, etc.
BBMAST - Bulletin Board MASTER file list maker - simply reads a number of text
  files (such as BBS directories) and outputs them to one master list of files
  totals file sizes in each directory and gives grand total at the end
DTPDIR - DOS Dir output file to PCBoard Directory conversion program
LABQUO - LABBS quotes file conversion program - supports multiple quotes files
  that are converted to LABBS format
LCALLS - LABBS "Last Calls" Callers Log reader
LTPDIR - LABBS to PCBoard File Directory conversion program
PTLDIR - PCBoard to LABBS File Directory conversion program
PCBpop - Memory resident Utility program for the PCBoard SYSOP - Users file
  maintenance (name, sec code, conferences, address, password, delete,
  undelete, user comments, and sysop comments) PLUS reads Callers file
  backwards, reads Messages files, and 20 other text files assignable to
  function/Alt-function keys.
RBBpop - Memory resident Utility program similar to PCBpop for the RBBS SYSOP
PCB LABELS - Labels program with direct import into the Labels database from 
  the PCBoard Users file - also has program and version fields for software 
  authors 

User comments about PCBpop:

  "**GREAT**"
  "Thanks for writing PCBpop... use it all the time!"
  "Man, you have outdone yourself with the new version!"


                      Memory Resident Printer Utilities:

PMENU3 - Memory resident printer control menu for the EPSON - nice design,
  has nice BabyFace mode, lots of other codes, and built-in intelligence
  Was probably the first program of this type... released in August of 85.
  Can be unloaded from memory.
PROMENU - Memory resident printer control menu for the IBM Proprinter -
  similar to PMENU3, can be unloaded from memory.

User comments about PMENU3:

  "I do not know how to thank you enough for creating PMENU3."
  "Thanks to shareware and people like you putting programs into the concept,
people like us who do not want to be programmers reap the benefits and make
computing more livable."
  "Just thought you would like to know that I think the program is just GREAT!
  "I'm impressed with your program.  I started writing one myself but didn't
know how to make it memory resident.  Now I've found yours."
  "I really like your PMENU3.  I use it a lot."
  "Great, Great, GREAT idea and program!!!"


                                   Database:

MAILME - Fast Mailing Labels Database Application - has mailmerge and export-
  ability to save settings in a "setup" file for rerunning later.  (e.g.
  Labels for Filecode AA, Mailmerge File for Filecode ZZ, etc.) - for handling
  mailing lists
STIKME - Custom Labels - allows you to print 6-line labels and control
  whether each line is Normal, Wide, Condensed, or Babyface.  Automatically
  centers each line as printed if desired.  Great for Return address labels,
  or any special purpose, such as diskette labeling, "DO NOT XRAY" labels,
  etc., etc.  Also has the ability to produce a series of labels which have
  a serial number (such as for software).
BBFILE - see above description.
PCB LABELS - see above description.


                                Miscellaneous:

MRHELP - Memory resident help file reader for use with any program that
  doesn't have help files... 20 different text files can be assigned to F1-F10
  and Alt F1 - Alt F10.
VERSE - Displays a different verse of scripture each day from a text file of
  scripture verses (included)

                                    Games:

CTA-1 - Christian Text Adventure #1 - This is a text adventure written to run
under the Generic Adventure Game System (GAGS).  The adventurer, in this case,
finds himself in a Biblical allegory, as a Crusader doing battle against the
forces of evil (such as the Wolf of Unbelief), with the weapons of spiritual
warfare (the sword of the spirit, the shield of faith, etc.).

User comments about CTA-1:

     "We all love it very much."
     "Thank you very much for giving us a pastime that is worthwhile."
     "I wish I had a shotgun to blow that computer up."
     "I think this game was invented by the Russians to fry our brains."
     "I'm running your game on-line, the users are asking me for hints."
     "I liked the symbolism in your game."

```
{% endraw %}

## PATCH.DOC

{% raw %}
```




















                                   P A T C H

                File and memory patching utility for the IBM PC

               Copyright (C) 1987, Imaginative Software Concepts












































     1.0 Introduction

        PATCH allows viewing and modification of disk files and memory. The 
        program displays the contents of a file, 256 bytes at a time, and 
        allows you to move around in the file, modify its contents, cancel 
        modifications, and search through the file for specified strings. The 
        contents of the file are displayed in both ASCII and hexadecimal, and 
        searches and modifications may be made in either format. 

     2.0 A Word From Our Sponsor

        Imaginative Software Concepts distributes all its products as user-
        supported software. You may freely copy and distribute unmodified 
        versions of PATCH, as long as no fee is charged for such copying or 
        distribution. Users' Groups may charge a small fee, not to exceed $10, 
        to recoup their own costs.

     3.0 Getting Started

        To run PATCH, type "PATCH", optionally followed by a file name, at the 
        DOS command prompt. The program displays a brief registration message, 
        asks for a file name if none was specified on the DOS command line, 
        then attempts to open the specified file. If PATCH cannot find the 
        file, the program informs you and asks for a new name. You may leave 
        the program by pressing the enter key without entering a file name. 
        The file name "memory" is special to PATCH; entering this name will 
        allow you to peruse and change the computer's memory as if it were a 
        disk file. (If you need to run PATCH on a file named "memory", enter 
        "memory." as the file's name.) 





























     4.0 The Display

        After PATCH opens a file, the program displays the first 256 bytes of 
        the file in the following format. Labels in the display are highlighted
        to make reading easier. The numbers in parentheses are not part of the 
        display, but refer to the descriptions below. 






     File:anyfile.com Offset:0 (1)
    (2)  0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F
     0  E9 7D 0A 00 00 00 00 00 00 00 00 00 00 00 00 00  .}..............
     1  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
     2  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
     3  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
     4  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
     5  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
     6  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................ (3)
     7  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
     8  BA 26 08 3D 02 00 74 18 3D 05 00 74 13 BA A8 07  .&.=..t.=..t....
     9  3D 08 00 74 0B BA 9E 07 3D 0B 00 74 03 BA 91 07  =..t....=..t....
     A  0E 1F E8 14 04 EB 13 8C C9 8E D1 BC 80 01 CD 21  ...............!
     B  72 CE B4 4D CD 21 2E A3 75 08 E9 CE 00 FB 8C C8  r..M.!..u.......
     C  8E D8 B4 0D CD 21 F7 06 3C 08 FF FF 74 03 E9 A6  .....!..<...t...
     D  02 33 ED C6 06 80 08 00 C6 06 80 09 00 83 3E 7C  .3............>|
     E  08 00 74 06 C7 06 7C 08 FF FF 80 3E 74 08 00 75  ..t...|....>t..u
     F  03 E9 DC 00 F9 CB BA F8 07 0E 1F E8 BB 03 80 3E  ...............>

F1:file top F2:file end F3:find F4:find next F5:jump F6:hex/ascii F10:exit (4)
HOME,END,ARROWS:move cursor PG UP,PG DN:move buffer INS,DEL:restore buffer,byte





        (1) The top line of the display identifies the file and shows the 
        offset, in bytes, of the first byte in the current buffer. This offset 
        is a hexadecimal number. 

        (2) Hexadecimal labels give the relative offset of each byte in the 
        buffer display. The bytes are numbered first by row, then by column; 
        for example, the leftmost byte in the bottom row of the display is 
        byte F0 (240 decimal). This number may be added to the offset 
        displayed on the first line to obtain the offset from the beginning of 
        the file of any byte in the current buffer. 

        (3) The contents of the current buffer are shown in hexadecimal and 
        ASCII. Any hexadecimal values which do not correspond to printable 
        characters are displayed in the ASCII section as periods. 

        Note: if the file is less than 256 bytes long, PATCH pads the display 
        with null characters (hex 00).

        (4) Two help lines briefly describe the commands available. 









     5.0 Function Keys

        5.1 Move to beginning of file - F1

            Pressing the F1 key saves any changes to the current buffer, 
            displays the first buffer in the file, and moves the cursor to the 
            first byte of the buffer display. If the current buffer is the 
            first one in the file, pressing this key has no effect. 

        5.2 Move to end of file - F2

            Pressing the F2 key saves any changes to the current buffer, 
            displays the last buffer in the file, and moves the cursor to the 
            first byte of the buffer display. If the current buffer is the 
            last one in the file, pressing this key has no effect. 

        5.3 Search - F3

            When you press the F3 key, PATCH asks you for a string to locate. 
            You may cancel the search request by pressing the enter key 
            without entering a search string. If the cursor presently appears 
            in the hexadecimal section of the buffer display (see 5.6), you 
            may enter up to ten hexadecimal digits; if the cursor appears in 
            the ASCII section, you may enter up to thirty ASCII characters. 
            Searching begins at the byte immediately following the cursor. If 
            the search string is not wholly contained within the current 
            buffer, the program saves any changes and searches the remainder 
            of the file. If PATCH cannot locate the string, the program 
            informs you and returns the cursor to its previous position; 
            otherwise, the program displays the buffer in which the string was 
            found and places the cursor at the first byte of the string. 

        5.4 Search for next occurrence - F4

            Pressing the F4 key causes the program to search the file for the 
            next occurrence of the search string you last entered. Searching 
            begins at the byte immediately following the cursor. If the string 
            is not wholly contained within the current buffer, the program 
            saves any changes and searches the remainder of the file. If PATCH 
            cannot locate the string, the program informs you and returns the 
            cursor to its previous position; otherwise, the program displays 
            the buffer in which the string was found and places the cursor at 
            the first byte of the string. Note that changing the section in 
            which the cursor appears (see 5.6) does not change the search 
            string; if you entered "ABC" as the search string while in the 
            ASCII section, switched to the hexadecimal section, then pressed 
            F4, PATCH will search for the hexadecimal equivalent to "ABC",
            that is, "414243". 

        5.5 Jump to offset in file - F5

            When you press the F5 key, PATCH asks you for an offset. You may 
            cancel the jump command by pressing the enter key without entering 
            an offset, or may enter up to ten hexadecimal digits, representing 
            an offset, in bytes, from the beginning of the file. The program 
            moves the cursor to this position. If the new position is not in 
            the current buffer, PATCH saves any changes and displays the new 
            buffer. If the offset indicates a position past the end of the 
            file, the cursor is placed at the last byte of the last buffer of 
            the file. 







        5.6 Switch between hex and ASCII sections of the display - F6

            Pressing the F6 key switches from the hexadecimal to the ASCII 
            section of the buffer display and vice versa. Switching sections 
            affects which characters may be entered when specifying a search 
            string (see 5.3) or changing the contents of the file (see 6.0). 

        5.7 Exit - F10

            Pressing the F10 key saves any changes to the current buffer and  
            terminates the program. 

        5.8 Move to first byte of display - HOME

            Pressing the HOME key moves the cursor to the first byte of the 
            buffer display, located in the top left corner.

        5.9 Move to previous line of display - up arrow

            Pressing the up arrow key moves the cursor to the previous line of 
            the buffer display (i.e., back 16 bytes). If the cursor is already 
            in the first line of the display, pressing this key has no effect. 

        5.10 Move to previous buffer - PG UP

            Pressing the PG UP key saves any changes to the current buffer, 
            displays the previous buffer, and moves the cursor to the first 
            byte of the buffer display. If the current buffer is the first one 
            in the file, pressing this key has no effect. 

        5.11 Move to previous byte of display - left arrow

            Pressing the left arrow key moves the cursor to the previous byte 
            of the buffer display. If the cursor is already at the first byte 
            of the display, pressing this key has no effect. 

        5.12 Move to next byte of display - right arrow

            Pressing the right arrow key moves the cursor to the next byte of 
            the buffer display. If the cursor is already at the last byte of 
            the display, pressing this key has no effect. 

        5.13 Move to last byte of display - END

            Pressing the END key moves the cursor to the last byte of the 
            buffer display, located in the bottom right corner.

        5.14 Move to next line of display - down arrow

            Pressing the down arrow key moves the cursor to the next line in 
            the buffer display (i.e., forward 16 bytes). If the cursor is 
            already in the last line of the display, pressing this key has no 
            effect. 

        5.15 Move to next buffer - PG DN

            Pressing the PG DN key saves any changes to the current buffer, 
            displays the next buffer, and moves the cursor to the first byte 
            of the buffer display. If the current buffer is the last one in 






            the file, pressing this key has no effect. 

        5.16 Restore entire buffer to previous contents - INS

            Pressing the INS key cancels any changes made to the current 
            buffer. This only affects changes made since the present buffer 
            was last displayed; once the program moves to another buffer,
            changes become permanent and cannot be canceled. 

        5.17 Restore current byte to previous contents - DEL

            Pressing the DEL cancels any changes made to the current byte of 
            the buffer display and moves the cursor to the next byte of the 
            display. This only affects changes made since the present buffer 
            was last displayed; once the program moves to another buffer, 
            changes become permanent and cannot be canceled. 


















































     6.0 Changing the File

        The contents of the buffer display, beginning at the current cursor 
        position, may be changed by typing new values. If the cursor is in the 
        ASCII section of the display, the new values may be any ASCII 
        characters; in the hexadecimal section, PATCH will accept only pairs 
        of hexadecimal digits. The program highlights bytes which have been 
        changed. Changes may be canceled by using either INS or DEL (see 5.16 
        and 5.17) to restore the entire buffer display or a single byte to its 
        original value. Changes become permanent as soon as the program moves 
        to a different buffer; commands which may cause this are: move to 
        beginning of file (F1); move to end of file (F2); search (F3); search 
        for next occurrence (F4); jump to offset in file (F5); move to 
        previous buffer (PG UP); and move to next buffer (PG DN). The program 
        also saves changes to the current buffer before exiting (F10). 

        Note: Since PATCH writes changed sections in 128-byte chunks, the 
        program may cause a file to become slightly (up to 127 bytes) larger 
        if you modify the last buffer in the file. For the same reason, 
        changes made to the last 128 bytes of the display buffer are discarded 
        when the file is less than 129 bytes long. 
```
{% endraw %}

## PMENU332.DOC

{% raw %}
```
                                    PMENU3 
                  The Intelligent Epson Printer Control Menu
                      Version 3.2 released March 21, 1988
    Copyright (C) 1985,1986,1987,1988 NEWLIFE Software, All Rights Reserved
                             Written by Bob Nance


The latest release of this and other NEWLIFE Software programs is available to 
registered users 24 hours a day at NEWLIFE Christian BBS, 601-627-5582, 300-
9600 Courier HST.  

               ----------- Changes with version 3.2 -----------

1.  Now unloadable.  Hit F10 twice.

2.  Now checks to see if it is already resident and aborts if it is.  Of 
course, YOU wouldn't try to load it twice would you? 

3.  Now checks to make sure that SideKick is not already loaded.  You can load 
PMENU3 before loading SideKick, but not after.

4.  Now uses the ALT-TAB hotkey instead of ALT-RETURN to allow use with Word 
Perfect, which has an ALT-RETURN command.  Notify me if this new hotkey 
conflicts with anything, and I'll go to a three key combination hot-key, such 
as ALT-LEFT SHIFT-P, or something about that ridiculous. 

5.  Now has EGA support.  It should properly pop-up over a 43 line EGA screen.  
(Older versions would only save and restore a 25 line screen).  I don't have 
an EGA, so let me know if this doesn't work. 

6.  Now an .EXE file instead of a .COM file.  This is because it was converted 
to Turbo Pascal 4.0 with this release.  

 ---------- Extremely long and boring description of the Program ------------

PMENU3 is a memory resident Printer Control Menu for Epson and 100% compatible 
printers and the IBM PC.  It allows you to send control codes to your printer 
such as condensed, double strike, or underline WHEN YOU NEED TO.  By simply 
typing PMENU332 at the DOS prompt, the program will be loaded into memory, and 
you will be returned to DOS.  Then load your other program as usual.  To pop 
up PMENU3 while running your program, hit Alt Tab.  You can enter codes one at 
a time, or combinations of codes such as bold and italics.  PMENU3 version 3.2 
is different from other memory resident printer setup programs because it will 
ONLY send and display those codes that work together.  Unlike generic or user-
definable printer setup programs, it does not lie to you, saying it sent codes 
to the printer that will not work together.  

The program was developed under Turbo Pascal Version 4.0 and DOS 3.1, but it
runs on DOS 2.0 - 3.1.  PMENU3 will be compatible with most software for the
IBM PC, but this version expects the display to be in text mode.  It works
with all the other memory resident programs I had access to.  Many users have
reported using it on various IBM PC compatibles under MS-DOS.

Note: Some of the older Epson printers do not support all codes that this 
program does such as Near Letter Quality.  In fact, I use a Thinkjet so don't 
feel bad, mine doesn't support them either.  Here are the actual codes I use. 


    Command in Menu:                    Codes sent to printer:     

    Reset to Normal:                    #27#64
    BabyFace:                           #27#65#6#27#83#1#15
    Bold (Enhanced):                    #27#69
    Condensed (15 c.p.i.):              #15
    Double Strike:                      #27#71
    Elite:                              #27#77
    Form Feed:                          #12
    Italics:                            #27#52
    Line Feed:                          #10
    Left Margin Indent (10 spaces):     #27#108#10
    Near Letter Quality:                #27#120#1
    Draft Quality:                      #27#120#48                 
    Pica:                               #27#80
    Skip Page Break (15 spaces):        #27#78#15
    UnderLine:                          #27#45
    Wide:                               #27#87#1
    Disable Buzzer:                     #27#56
    Superscript:                        #27#83#0
    Subscript:                          #27#83#1
    1/6" Line Spacing:                  #27#50
    7/72" Line Spacing:                 #27#49
    1/8" Line Spacing:                  #27#48

   .........................................................................

NOTE TO PROPRINTER USERS! - Do not use PMENU3 with the Proprinter, since some 
of the Epson codes in PMENU3 are not supported by the Proprinter, such as the 
one for Reset to normal.  I have created a special program for you, PROMENU, 
and will be happy to send it to you.  It is very similar to PMENU3 in design, 
except that the codes section had to be totally rewritten because of different 
codes for certain functions and different incompatibilities between the codes. 
.......................................................................... 

                      ----------- Disclaimer ------------

PMENU3 is licensed to you, at no charge, subject to the following:   This 
program is supplied as-is and the author disclaims all warranties, expressed 
or implied, including, without limitation, the warranties of merchantablilty 
and the warranties of fitness for any purpose.  You may copy it and distribute 
it provided all modules, documentation, and readme files are included.  You 
may make no charge for copying the program beyond the cost of a diskette.  

                    ---------- How to thank me -----------

PMENU3 is the result of many hours of work, and this release, in particular, 
required a significant investment in my time and money. 

1.  NEW USERS: Send $15 to me at the address below: 
    PREVIOUSLY registered users, send $5 to me at the address below:

Bob Nance, NEWLIFE Software, P. O. Box 837, Clarksdale, MS  38614   

Registered users will receive notices of future updates to the program, and 
privileged access to the NEWLIFE Christian BBS.  It has not only the latest 
versions of PMENU3 and other NEWLIFE Software, such as STIKME, CTA-1, and 
PCBPOP, but also over 25 megabytes of the latest versions of some of the best 
Shareware available.  And if you have a US Robotics Courier HST modem, you can 
transfer files at 950 c.p.s. or better, depending on file transfer protocols 
your software supports.  

2.  Share PMENU3 with as many people as you can!

                       --------- Who I thank ----------

The Lord Jesus Christ for the NEWLIFE He has given me, and for the skills and 
patience necessary to write a program like this.

The SYSOPs and librarians who provide space for this program.

The users who have registered and made suggestions for improvements to PMENU3.


```
{% endraw %}

## PMENU332.TXT

{% raw %}
```
Description of PMENU3, Version 3.2, the intelligent memory resident printer 
control menu for EPSON or 100% compatible printers, released March 21, 1988.

At right is the current PMENU3 Version 3.2 Menu. +=======[ PMENU3 3.2 ]======+
There are some good changes with this release.   |  [R]  Reset to Normal     |
PMENU3 is unloadable!  Hit F10 twice.  It now    |  [A]  Babyface            |
checks to see if it is already loaded, and will  |  [B]  Bold                |
not load again.  With this release, it was       |  [C]  Condensed           |
compiled under Turbo Pascal 4.0, so it is now    |  [D]  Double Strike       |
an .EXE file instead of a .COM file. PMENU3 uses |  [E]  Elite               |
36K of memory and is compatible with other       |  [F]  Form Feed           |
resident programs.  It operates under PC-DOS     |  [I]  Italics             |
2.1 or MS-DOS equivalent (or higher) on the IBM  |  [L]  Line Feed           |
PC, XT, AT, or compatible.                       |  [M]  Left Margin Indent  |
                                                 |  [N]  NLQ  [X]  Draft     |
PMENU3 was originally released in August of      |  [P]  Pica                |
1985 and has been revised numerous times based   |  [S]  Skip Page Break     |
on requests from registered users.   A similar   |  [U]  Underline           |
program, PROMENU, was developed for the IBM      |  [W]  Wide                |
Proprinter and released in March of 1987.        |  [Z]  Disable Buzzer      |
                                                 |  [F1] Superscript         |
The author, Bob Nance, develops programs in      |  [F2] Subscript           |
Pascal and dBASE for the IBM PC for NEWLIFE      |  [F6] 1/6" Line spacing   |
Software.  For more information:                 |  [F7] 7/72" Line spacing  |
            Bob Nance                            |  [F8] 1/8" Line spacing   |
            NEWLIFE Software                     |                           |
            P. O. Box 837                        |  Command, [F10], or ESC   |
            Clarksdale,  MS  38614               +===========================+

New users may "test drive" PMENU3 for a month.  If, after that time, you are
not using it, please delete it.  If you are using it, send $15 to the program 
author above.   Support and improvements to PMENU3 are not possible unless 
users register by sending in the registration fee.   Registered users may 
obtain updates from the NEWLIFE Christian BBS @ 601-627-5582, a 24 hour 
Bulletin Board system. 

```
{% endraw %}

## PROMNU32.DOC

{% raw %}
```
                                    PROMENU 
                The Intelligent Proprinter Printer Control Menu
                      Version 3.2 released March 21, 1988
                    (C) Copyright 1987,1988 NEWLIFE Software
                             Written by Bob Nance


The latest release of this and other NEWLIFE Software programs is available to 
registered users 24 hours a day at NEWLIFE Christian BBS, 601-627-5582, 300-
9600 Courier HST.  

               ----------- Changes with version 3.2 -----------

1.  Now unloadable.  Hit F10 twice.

2.  Now checks to see if it is already resident and aborts if it is.  Of 
course, YOU wouldn't try to load it twice would you? 

3.  Now checks to make sure that SideKick is not already loaded.  You can load 
PROMENU before loading SideKick, but not after.

4.  Now uses the ALT-TAB hotkey instead of ALT-RETURN to allow use with Word 
Perfect, which has an ALT-RETURN command.  Notify me if this new hotkey 
conflicts with anything, and I'll go to a three key combination hot-key, such 
as ALT-LEFT SHIFT-P, or something about that ridiculous. 

5.  Now has EGA support.  It should properly pop-up over a 43 line EGA screen.  
(Older versions would only save and restore a 25 line screen).  I don't have 
an EGA, so let me know if this doesn't work. 

6.  Now an .EXE file instead of a .COM file.  This is because it was converted 
to Turbo Pascal 4.0 with this release.  

------------- Extremely long and boring description of PROMENU ---------------

PROMENU is a memory resident Printer Control Menu for the IBM proprinter and
compatible printers and the IBM PC.  It allows access to control codes such as
condensed, double strike, or underline WHEN YOU NEED THEM.  By simply typing
PROMNU32 at the DOS prompt, the program will be loaded into memory, and you
will be returned to DOS.  Then load your other program as usual.  To pop up
PROMENU while running your program, hit Alt-Tab.  You can enter codes one
at a time, or combinations of codes such as near letter quality and skip page
break.  Each code sent to the printer is highlighted and will still be high-
lighted the next time you pop-up PROMENU so you can remember how your printer
is set.  PROMENU is an "intelligent" printer control menu, unlike those that
are "user-definable".  It does not lie to you, telling you that it has sent
codes to the printer which will not work together.  Therefore only those codes 
which are actually sent are highlighted. 

Some codes are "dominant" while other codes are "recessive".  For example, Bold 
is dominant over Condensed.  If bold has been sent, you cannot send condensed.  
If Condensed has been sent first and then you send Bold, condensed will be 
turned off and bold will be highlighted and bold will be in effect.  In some 
cases, the last code sent is the one that is in effect.  For example, in the 
case of vertical line spacing, you can only have one option selected at a time. 
Therefore, selecting 8 lines per inch turns off 7/72 lines per inch and 6 lines 
per inch.  In some cases, you will have to [R]eset to normal if you have 
selected a "dominant" code and you now want to sent one that is "recessive", 
such as in the case of selecting bold, and then wanting to select condensed.

Check the following chart for questions on compatabilities between
codes:

If you send:                          you will get:
condensed, bold                       bold
condensed, twelve c.p.i.              twelve c.p.i.
condensed, near letter quality        condensed
superscript, subscript                last mode selected
6 l.p.i., 8 l.p.i., 7/72 l.p.i.       last mode selected

You can send anything else together, with the following exception.

Babyface is a combination of 6/72 lines per inch, subscript, and condensed, so
keep that in mind when sending other codes with Babyface.  For example, if
you send Babyface and then twelve c.p.i., twelve c.p.i. will override the
condensed code and you will get 6/72 lines per inch, subscript, and twelve
c.p.i.  Since bold also overrides condensed, if you send Bold after
Babyface, you will get 6/72 lines per inch(vertical), subscript, and bold.
It will NOT be condensed, since bold turns off condensed.

The program was developed under Turbo Pascal Version 4.0 and DOS 3.1, but it
runs on DOS 2.0 - 3.1.  PROMENU will be compatible with most software for the
IBM PC, but this version expects the display to be in text mode.  It works
with all the other memory resident programs I had access to.  Many users have
reported using it on various compatibles under MS-DOS.

.....

    Command in Menu:                    Codes sent to printer:

    Reset to Normal:
       cancel wide :                    #27#87#0
       cancel bold :                    #27#70
       cancel double strike:            #27#72
       cancel NLQ (select normal):      #27#73#0
       select 6 vertical lines per in.: #27#65#12#27#50
       cancel skip perforation:         #27#79
       cancel subscript or superscript: #27#84
       cancel underscore:               #27#45#0
       cancel condensed & sel. normal:  #18
    BabyFace:                           #27#65#6#27#50#27#83#1#15
    Bold (Enhanced):                    #27#69
    Condensed (15 c.p.i.):              #15
    Double Strike:                      #27#71
    Form Feed:                          #12
    Line Feed:                          #10
    Near Letter Quality:                #27#73#2
    Skip Page Break (15 spaces):        #27#78#15
    UnderLine:                          #27#45#1
    Wide:                               #27#87#1
    Superscript:                        #27#83#0
    Subscript:                          #27#83#1
    1/6" Line Spacing:                  #27#65#12#27#50
    7/72" Line Spacing:                 #27#49
    1/8" Line Spacing:                  #27#48

.........................................................................

NOTE TO EPSON USERS! - Some of the codes in PROMENU will not work for Epson
printers.  I have created a special program for you... PMENU3.  The current
version is PMENU332.ARC, which contains the program PMENU3 version 3.2. 
.......................................................................... 


                      ----------- Disclaimer ------------

PROMENU is licensed to you, at no charge, subject to the following:   This 
program is supplied as-is and the author disclaims all warranties, expressed or 
implied, including, without limitation, the warranties of merchantablilty and 
the warranties of fitness for any purpose.  You may copy it and distribute it 
provided all modules, documentation, and readme files are included.  You may 
make no charge for copying the program beyond the cost of a diskette.  

                    ---------- How to thank me -----------

PROMENU is the result of many hours of work, and this release, in particular, 
required a significant investment in my time and money. 

1.  NEW USERS: Send $15 to me at the address below: 
    PREVIOUSLY registered users, send $5 to me at the address below: 

Bob Nance, NEWLIFE Software, P. O. Box 837, Clarksdale, MS  38614   

Registered users will receive notices of future updates to the program, and 
privileged access to the NEWLIFE Christian BBS.  It has not only the latest 
versions of PROMENU and other NEWLIFE Software, such as STIKME, CTA-1, and 
PCBPOP, but also over 25 megabytes of the latest versions of some of the best 
Shareware available.  And if you have a US Robotics Courier HST modem, you can 
transfer files at 950 c.p.s. or better, depending on file transfer protocols 
your software supports.  

2.  Share PROMENU with as many people as you can! 

                       --------- Who I thank ----------

The Lord Jesus Christ for the NEWLIFE He has given me, and for the skills and 
patience necessary to write a program like this. 

The SYSOPs and librarians who provide space for this program. 

The users who have registered and made suggestions for improvements to
PROMENU.

```
{% endraw %}

## PROMNU32.TXT

{% raw %}
```
Description of PROMENU, Version 3.2, the intelligent memory resident printer
control menu for PROPRINTER or compatible printers, released March 21, 1988.

At right is the current PROMENU Version 3.2 Menu:+======[ PROMENU 3.2 ]======+
There are some good changes with this release.   |  [R]  Reset to Normal     |
PROMENU is unloadable!  Hit F10 twice.  It now   |  [A]  Babyface            |
checks to see if it is already loaded, and will  |  [B]  Bold                |
not load again.  With this release, it was       |  [C]  Condensed           |
compiled under Turbo Pascal 4.0, so it is now    |  [D]  Double Strike       |
an .EXE file instead of a .COM file. PROMENU uses|  [F]  Form Feed           |
36K of memory and is compatible with other       |  [L]  Line Feed           |
resident programs.  It operates under PC-DOS     |  [N]  Near Ltr Quality    |
2.1 or MS-DOS equivalent (or higher) on the IBM  |  [S]  Skip Page Break     |
PC, XT, AT, or compatible.                       |  [T]  Twelve c.p.i.       |
                                                 |  [U]  Underline           |
PROMENU is a rewrite of PMENU3, which was        |  [W]  Wide                |
written for EPSON printers and released          |  [F1] Superscript         |
in August of 1985.                               |  [F2] Subscript           |
                                                 |  [F6] 1/6" Line spacing   |
The author, Bob Nance, develops programs in      |  [F7] 7/72" Line spacing  |
Pascal and dBASE for the IBM PC for NEWLIFE      |  [F8] 1/8" Line spacing   |
Software.  For more information:                 |                           |
            Bob Nance                            |  Command, [F10], or ESC   |
            NEWLIFE Software                     +===========================+
            P. O. Box 837
            Clarksdale,  MS  38614
New users may "test drive" PROMENU for a month.  If, after that time, you are
not using it, please delete it.  If you are using it, send $15 to the program 
author above.   Support and improvements to PROMENU are not possible unless
users register by sending in the registration fee.   Registered users may 
obtain updates from the NEWLIFE Christian BBS @ 601-627-5582, a 24 hour 
Bulletin Board system. 
```
{% endraw %}

## SCRNKY.DOC

{% raw %}
```
SCRNKY.DOC for the IBM PC/XT & PCJR - 1987 by Ocean


               KEYBOARD LOCK WITH AUTO 3 MINUTE SCREEN BLANKER


These utilities, SCRNOFF3.ASM & KYLOCK.ASM, comprise a 2 part utilities set.
Each must be assembled, linked and converted from exe to executable com files
separately.  The com files are provided on this disk for the convenience of
those without an assembler.  These utilities were developed to work with POPUP
DESKSET (TM) and work together to automatically blank the screen after 3
minutes of keyboard inactivity.  Pressing any key unblanks the screen and
pressing ALT-O toggles the auto screen blanker on & off.  In addition, the
operator has the option of using a "hotkey" (ALT-K) to freeze the keyboard &
blank the screen whenever desired.  After the "hotkey" is used to activate the
second part of this set, the operator must then enter a password.  The keyboard
remains locked and the screen blanked until the password is reentered.  The
password may be changed each time the operator invokes the utility to freeze
the keyboard.  Once a password is chosen, of course, it must be reentered
exactly as entered to unlock the keyboard and unblank the screen.  All keys and
their combinations enterable from the keyboard may be used not to exceed 64.
The routine may be aborted before the password is entered by pressing the
escape key.  Since the ctrl-alt-del warm start function is disabled by trapping
that key combination, once entered, nothing but a power off/on cold start will
unlock the keyboard for anyone without the password.  The password is not
displayed on the screen.  The backspace key may be used as an editing key on
entering and reentering the password.  Pressing enter/return enters the
password.  Reentering the password to unlock the keyboard and unblank the
screen may be attempted repeatedly simply by pressing the enter/return key and
starting over.  In addition, the "hotkeys" used to invoke the various modules
of POPUP DESKSET(TM) have been trapped and may not be included in a password.
These are:  ALT-W, ALT-U,ALT-A, ALT-D, ALT-X, ALT-V, ALT-C, & ALT-F10.  When
used with POPUP DESKSET(TM), SCRNOFF3.COM should be loaded after pop alarm &
pop date.  Then, load KYLOCK.COM just before pop any. When used with other
"terminate but stay resident" programs, experiment with the order of loading.
If not used with POPUP DESKSET(TM) or any other "TSR", simply load both, one
after the other.


COMMAND SUMMARY:
                  ALT-O --------- TOGGLES AUTO 3 MINUTE SCREEN BLANKER ON/OFF.

                  ALT-K --------- INVOKES MAIN PROGRAM WHICH IMMEDIATELY BLANKS                                  
                                  THE SCREEN AND ALLOWS THE USER TO ENTER A
                                  PASSWORD THAT LOCKS THE KEYBOARD UNTIL
                                  REENTERED.

                  BACKSPACE ----- EDIT PASSWORD ENTRY.
                
                  ESC   --------- ABORT!  (After ALT-K & prior to hitting
                                   enter/return.)

                  ENTER --------- ENTERS PASSWORD.  ALSO ABORTS IF NO KEYS HAVE
                                  BEEN PRESSED TO ENTER A PASSWORD.


 ***********************  ---      WARNING!     ---    ***********************

When the screen is blanked by this program, it is still possible to read the
screen, due to its persistence, with the naked eye or photographic film.
Darken your room or office and you can see this for yourself.  To increase
security, overlay a resident calendar ,help menu/table, or some other type of
routine that you have in memory before invoking this keyboard lock routine.

 ******************************************************************************
  

REFERENCE:  PC Magazine, Volume 5 #16 page 302; "EGA SCREEN BLANKER"
                                              ; by Charles Petzold
            PC magazine, Volume 5 #22 page 285; "FREEZE OUT FILE FILCHERS"
                                              ; by Jeff Prosise

BIBLIOGRAPHY:  "INTRODUCING PC-DOS and MS-DOS (A GUIDE FOR BEGINNING and
                ADVANCED USERS)"
               by Thomas Sheldon
               "COMPUTE'S BEGINNER'S GUIDE to MACHINE LANGUAGE on the IBM PC &
               PCJR"
               by Christopher D. Metcalf and Marc B. Sugiyama
               "COMPUTE'S MAPPING the IBM PC and PCJR"
               by Russ Davies
               "IBM PCJR ASSEMBLER LANGUAGE"
               by David C. Willen
               "MS-DOS DEVELOPER'S GUIDE"
               by John Angermeyer & Kevin Jaeger
               "MACRO-86 ASSEMBLY LANGUAGE PROGRAMMING"
               by Lawrence P. Larsen (Heath/Zenith Educational Systems)


Use these utilities at your own risk!

If you find this utilities set useful, send $1.50 payment to:


                       Ocean
                       357 Richmond Ave.
                       San Jose, CA 95128-2337


THANK YOU!


```
{% endraw %}

## SCRNOFF3.ASM

{% raw %}
```
;
                 page 66,132
;
;SCRNOFF3.ASM for the IBM PC/XT & PCJR - 1987 by Ocean
;
;This is part 1 of a 2 part utilities set consisting of -----------------------
;SCRNOFF3.ASM & KYLOCK.ASM.  --------------------- THEY MUST BE USED TOGETHER!
;                                                       -----------------------
;
eoi                 equ 20h                     ;end-of-interrupt signal
int_ctrl_port       equ 20h                     ;8259 interrupt controller port
;
code             segment para public 'code'
                 assume cs:code
                 org 0
seg_org             equ $
;
bios_data        segment at 40h                 ;bios data area
                 org 063h
addr_6845        dw ?                           ;define location that holds
                                                ;word address of active display
                 org 065h
crt_mode_set     db ?                           ;define location that holds
                                                ;byte loaded into pc active
                                                ;display port or pcjr's vga
bios_data        ends
;
                 org 0100h
begin:           jmp initialize                 ;goto initialization routine
;
adapter          db 0                           ;0 = EGA, 1 = CGA or MDA, and
                                                ;2 = PCJR
pcjr_mode        db ?                           ;current setting of PCJR video
pc_mode          db ?                           ;current setting of 6845 mode
                                                ;control register of the pc
count            dw 0cc8h                       ;initial 3 min. to blank screen
timer_stat       db 01h                         ;initialize timer - on
msr_address      dw ?                           ;address of mode select register
pcjr_signature   db 0fdh                        ;PCJR BIOS signature
ibm_signature    db 'IBM'                       ;EGA BIOS signature
errmsg           db 13,10,'SCRNOFF3 ALREADY LOADED!',13,10,'$'
;
old_int_1ch      label dword                    ;holding area for INT 8h vector
int_1ch_ptr       dw 2 dup (?)
old_int_16h      label dword                    ;holding area for INT 16h vector
int_16h_ptr      dw 2 dup (?)
;
;------------------------------------------------------------------------------
;All calls to INT 16h will henceforth be routed thru here.  If ah = 255 on
;entry, bh is set to 255 to signal the caller that this routine was indeed
;invoked.
;------------------------------------------------------------------------------
new_int_16h      proc near
                 cmp ah,127                     ;ah = 127?
                 jne switch                     ;no, then jump
                 mov bh,ah                      ;yes, set bh to 255 and exit
                 iret
switch:          cmp ah,158                     ;INT called by ALT O keypress?
                 jne newint1                    ;no, then jump
                 add timer_stat,01h             ;yes, toggle timer on/off
                 iret
newint1:         jmp old_int_16h                ;goto normal 16h handler
new_int_16h      endp
;
;------------------------------------------------------------------------------
;User timer INT 1Ch is now routed through here.
;------------------------------------------------------------------------------
;
countdown3       proc near
                 test timer_stat,01h            ;timer activated?
                 jz do_nothing                  ;no, exit
                 cmp count,00                   ;yes, check if count has zeroed
                 jz do_nothing                  ;already zero, exit
                 dec count                      ;active & not zero, tick & ...
                 jnz do_nothing                 ;not zero, exit ... else ...
;
;Time has run out, call the video_disable routine to blank the screen only.
;The rest of the program is still ready to lock the keyboard with a password if
;desired.
;
                 push ax                        ;save ax register
                 push dx                        ;save dx register
                 cli                            ;disable all interrupts
                 call video_disable             ;time is up - disable the video
                 mov al,eoi                     ;get eoi value
                 out int_ctrl_port,al           ;send eoi signal to the 8259
                 pop dx                         ;restore dx register
                 pop ax                         ;restore ax register
                 sti
do_nothing:      jmp old_int_1ch                ;iret thru old_int_1Ch
countdown3       endp
;
;------------------------------------------------------------------------------
;This routine is user vector interrupt 4dh!
;------------------------------------------------------------------------------
unblank          proc near
                 cmp count,00                   ;if timer is not 0 the screen
                                                ;is still visible - jump to
                 jnz reset_count                ;reset count to 3 min., since
                                                ;a keypress has occured
                 push ax                        ;save ax register
                 push dx                        ;save dx register
                 call video_enable              ;timer was 0 when a keypress
                                                ;occured, so make the screen
                                                ;visible
                 pop dx                         ;restore dx register
                 pop ax                         ;restore ax register
reset_count:     mov count,0cc8h                ;reset timer to 3 min. then 
                                                ;return to caller (KYLOCK.COM)
                 iret
unblank          endp

;
;------------------------------------------------------------------------------
;VIDEO ENABLE and VIDEO DISABLE enable and disable the VIDEO output to the
;screen of the PCJR
;------------------------------------------------------------------------------
;
video_disable    proc near                      ;disable the video display
                 cmp adapter,0                  ;is video adapter an EGA?
                 je ega_disable                 ;yes, then jump
                 test adapter,2                 ;is computer a PCJR?
                 jnz jr_disable                 ;yes, then jump
;
;Disable video of PC with CGA or MDA adapter.
;
                 push ds                        ;save ds
                 mov ax,bios_data               ;set es to bios data area
                 mov ds,ax
                 assume ds:bios_data
                 mov al,crt_mode_set            ;get current value (dynamic) of
                                                ;6845 mode control register
                 mov pc_mode,al                 ;save it
                 mov ax,addr_6845               ;get active display address
                 add ax,4                       ;add 4 to get MSR address
                 mov msr_address,ax             ;save address
                 mov al,0ah                     ;out 6845 index register...
                 mov dx,03b4h                   ;points to 6845 data reg. 10
                 out dx,al
                 mov al,2bh                     ;value to turn off cursor
                 mov dx,03b5h                   ;6845 data registers port
                 out dx,al                      ;disable cursor
                 mov dx,msr_address             ;6845 mode control register
                 mov al,pc_mode                 ;get current value of 6845 mode
                 and al,37h                     ;strip enable bit
                 out dx,al                      ;disable video display
                 pop ds                         ;restore ds
                 ret
;
;disable video of PC with an EGA card.
;
ega_disable:     xor al,al                      ;zero al (clear bit 5)
                 call set_ega                   ;disable EGA
                 ret
;
;Disable video of PCJR.
;
jr_disable:      push ds                        ;save ds register
                 mov ax,bios_data               ;set es to bios data area
                 mov ds,ax                      ;                              
                 assume ds:bios_data            ;                              
                 mov al,crt_mode_set            ;get current value (dynamic) of
                                                ;PCJR VGA mode control register
                 mov pcjr_mode,al               ;store current value, VGA mode
                 mov dx,03dah                   ;PCJR VGA I/O port 
                 in  al,dx                      ;addr/data f/f to proper state
                 mov al,02h                     ;VGA border color register
                 out dx,al                      ;set VGA to border color cont.
                 mov al,00h                     ;color black
                 out dx,al                      ;set border color black
                 mov al,00                      ;VGA mode control 1 register
                 out dx,al                      ;set VGA to mode control 1
                 mov al,pcjr_mode               ;get current value of VGA mode
                 and al,0f7h                    ;strip enable bit
                 out dx,al                      ;disable video display
                 pop ds                         ;restore ds register
                 ret
video_disable    endp
;
video_enable     proc near                      ;enable the video display
                 cmp adapter,0                  ;is video adapter an EGA?
                 je ega_enable                  ;yes,then jump
                 test adapter,2                 ;is the computer a PCJR?
                 jnz jr_enable                  ;yes, then jump
;
;Enable video of PC with CGA or MDA adapter card.
;
                 mov al,0ah                     ;out 6845 index register...
                 mov dx,03b4h                   ;points to 6845 data reg. 10
                 out dx,al
                 mov al,0bh                     ;value to turn cursor on
                 mov dx,03b5h                   ;6845 data registers port
                 out dx,al                      ;enable cursor
                 mov dx,msr_address             ;6845 mode control register
                 mov al,pc_mode                 ;get stored value 6845 mode
                 out dx,al                      ;enable pc display
                 ret
;
;Enable video of PC with an EGA adapter card.
;
ega_enable:      mov al,20h                     ;set bit 5 of al
                 call set_ega                   ;enable EGA video
                 ret
;
;Enable video of PCJR.
;
jr_enable:       mov dx,03dah                   ;set PCJR VGA address
                 in al,dx                       ;addr/data f/f to proper state
                 mov al,00h                     ;VGA mode control 1 register
                 out dx,al                      ;set VGA to mode control 1
                 mov al,pcjr_mode               ;get stored value VGA mode
                 out dx,al                      ;enable PCJR video display ...
                                                ;border remains black
                 ret
video_enable     endp
;
;-----------------------------------------------------------------------------
;SET_EGA is called by VIDEO_ENABLE and VIDEO_DISABLE routines to selectively
;set or clear bit 5 of the EGA Attribute Address Register.
;Entry:  AL - value to OUT to Attribute Address Register
;-----------------------------------------------------------------------------
;
set_ega          proc near
                 push ax                        ;save AL
                 mov dx,3bah                    ;reset monochrome flip-flop...
                 in al,dx                       ;for write to Address Register
                 mov dx,3dah                    ;reset color flip-flop
                 in al,dx
                 mov dx,3c0h                    ;set DX to Attr Addr Register
                 pop ax                         ;retrieve entry value of AL
                 out dx,al                      ;write value to register
                 ret
set_ega          endp
;
;------------------------------------------------------------------------------
;INITIALIZE routine checks if SCRNOFF3 has already been loaded.  If it has,
;execution aborts with an error message.  If it hasn't, then the value of 
;ADAPTER is set according to the type of display adapter present in the system
;and the vectors in low memory pointing to the INT 9h and 16h routines are set
;to point to our own newly installed code.
;------------------------------------------------------------------------------
;
initialize       proc near
;
;See if SCRNOFF3 has been previously loaded by calling INT 16h with AH set to
;254 and BH set to 0.  If BH comes back unchanged, then SCRNOFF3 is NOT
;currently resident in memory; if BH = 255, then SCRNOFF3 has been loaded.
;
                 mov ah,127                     ;set AH and BH
                 xor bh,bh
                 int 16h                        ;call interrupt routine
                 or bh,bh                       ;is BH = 0?
                 je init1                       ;yes, then continue
                 lea dx,errmsg                  ;no, print error message & exit
                 mov ah,09h
                 int 21h
                 ret
;
;Check the computer's ID to see if its a PC or PCJR.
;
init1:           mov ax,0f000h                  ;es to BIOS segment holding
                 mov es,ax                      ;computer ID value
                 mov al,byte ptr es:[0fffeh]    ;offset address and load to al
                 sub al,0fch                    ;
                 or al,al                       ;al = 0?
                 jz pc                          ;AT, try the pc routine...
                 dec al                         ;al = 1?
                 jz pcjr                        ;yes, then computer is a PCJR
                 dec al                         ;al = 2?
                 jz pc                          ;XT, try the PC routine...
                 dec al                         ;al = 3?
                 jz pc                          ;PC
                 jnz pc                         ;unidentified computer, try PC
                 ret
;
;The computer is a PCJR.
;
pcjr:            mov adapter,2                  ;set adapter to PCJR
                 jmp init2                      ;jump to install program
;
;The computer is a PC.  Check for the presence of an Enhanced Graphics Adapter
;by looking for an 'IBM'signature in the EGA Bios area.
;
pc:              mov ax,0c000h                  ;set ES to EGA BIOS segment
                 mov es,ax
                 mov di,1eh                     ;starting address of signature
                 lea si,ibm_signature           ;point si to 'IBM' text
                 mov cx,3                       ;three characters to check
                 cld                            ;clear df
                 repe cmpsb                     ;compare the three bytes
                 je init2                       ;signature found - EGA present
;
;The computer is a PC, but the display adapter is not an EGA.  It must be
;either a CGA or an MDA.
;
                 mov adapter,1                  ;set ADAPTER for CGA or MDA
;
;Save the current interrupt 1Ch vector and replace it with a new routine.
;
init2:           mov ah,35h                     ;DOS function - get vector
                 mov al,1ch                     ;interrupt 1ch
                 int 21h                        ;get the vector
                 mov int_1ch_ptr,bx             ;save offset of vector
                 mov int_1ch_ptr[2],es          ;save segment of vector
                 mov ah,25h                     ;DOS function - set vector
                 mov al,1ch                     ;interrupt 1ch
                 lea dx,countdown3              ;point - countdown3 routine
                 int 21h                        ;set vector
;                                               
;Save the current interrupt 16h vector and replace it with a new routine.
;
                 mov ah,35h                     ;DOS function - get vector
                 mov al,16h                     ;interrupt 16h
                 int 21h                        ;get the vector
                 mov int_16h_ptr,bx             ;save offset of vector
                 mov int_16h_ptr[2],es          ;save segment of vector
                 mov ah,25h                     ;DOS function - set vector
                 mov al,16h                     ;interrupt 16h
                 lea dx,new_int_16h             ;pointer to new routine
                 int 21h                        ;set vector
;
;Set user vector interrupt 4dh to unblank routine.
;
                 mov ah,25h                     ;DOS function - set vector
                 mov al,4dh                     ;interrupt 4dh
                 lea dx,unblank                 ;point to unblank routine
                 int 21h                        ;set vector
                 mov dx,(offset initialize - seg_org + 15) shr 4     ;...
                                                ;prepare DX for exit
                 mov ah,31h                     ;terminate-but-stay-resident
                 int 21h                        ;dos function call
initialize       endp
;
code             ends
                 end begin
                            
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0779

     Volume in drive A has no label
     Directory of A:\

    FILES779 TXT      3898   3-17-89   3:36p
    GO       BAT        64  11-24-87   3:27p
    GO       TXT      1156   3-16-89   4:10p
    GO1      TXT      1387  11-24-87   3:37p
    KYLOCK   ASM     30401   6-16-87   3:14p
    KYLOCK   COM       742   6-16-87   3:14p
    NEWLIFE  AD       1103   2-03-88   7:02a
    NEWLIFE  REG      3564  10-22-87  11:46p
    NEWLIFE  TXT      5496   4-23-88   1:42p
    PATCH    COM     20059   2-20-89   7:15p
    PATCH    DOC     13581   2-20-89   7:07p
    PCBANV3A EXE     74973   4-25-88   6:31p
    PMENU332 DOC      6662   3-21-88   4:11p
    PMENU332 EXE     25296   3-21-88   4:12p
    PMENU332 TXT      2572   3-21-88   4:18p
    PROMNU32 DOC      8191   3-21-88   4:12p
    PROMNU32 EXE     24816   3-21-88   4:13p
    PROMNU32 TXT      2312   3-21-88   4:18p
    READ     ME       1223   2-20-89   7:09p
    README   BAN       234   4-25-88   6:49p
    README   NOW       604  10-27-87   3:34p
    SCRNKY   DOC      5033   6-16-87   3:14p
    SCRNOFF3 ASM     18087   6-16-87   3:14p
    SCRNOFF3 COM       473   6-16-87   3:14p
           24 file(s)     251927 bytes
                           57344 bytes free
