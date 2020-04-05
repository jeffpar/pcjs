---
layout: page
heading: The MS-DOS Encyclopedia
title: "The MS-DOS Encyclopedia: Figures"
permalink: /documents/books/mspl13/msdos/encyclopedia/figures/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/figures/
---

### Figures

{% raw %}

```none
```Figure 2-11.
A simple program to run an application as an MS-DOS shell.


; SHELL.ASM   A simple program to run an application as an
;             MS-DOS shell program. The program name and
;             startup parameters must be adjusted before
;             SHELL is assembled.
;
; Written by William Wong
;
; To create SHELL.COM:
;
;             C>MASM SHELL;
;             C>LINK SHELL;
;             C>EXE2BIN SHELL.EXE SHELL.COM

stderr  equ 2                ; standard error
cr      equ 0dh              ; ASCII carriage return
lf      equ 0ah              ; ASCII linefeed
cseg    segment para public 'CODE'
;
; ----  Set up DS, ES, and SS:SP to run as .COM  ----
;
        assume  cs:cseg
start   proc    far
        mov     ax,cs           ; set up segment registers
        add     ax,10h          ; AX = segment after PSP
        mov     ds,ax
        mov     ss,ax           ; set up stack pointer
        mov     sp,offset stk
        mov     ax,offset shell
        push    cs              ; push original CS
        push    ds              ; push segment of shell
        push    ax              ; push offset of shell
        ret                     ; jump to shell
start   endp
;
; ----  Main program running as .COM  ----
;
; CS, DS, SS = cseg
; Original CS value on top of stack
;
        assume cs:cseg,ds:cseg,ss:cseg
seg_size equ (((offset last) - (offset start)) + 10fh)/16
shell   proc    near
        pop     es              ; ES = segment to shrink
        mov     bx,seg_size     ; BX = new segment size
        mov     ah,4ah          ; AH = modify memory block
        int     21h             ; free excess memory
        mov     cmd_seg,ds      ; setup segments in
        mov     fcb1_seg,ds     ; parameter block for EXEC
        mov     fcb2_seg,ds
        mov     dx,offset main_loop
        mov     ax,2523h        ; AX = set Control-C handler
        int     21h             ; set handler to DS:DX
        mov     dx,offset main_loop
        mov     ax,2524h        ; AX = set critical error handler
        int     21h             ; set handler to DS:DX
                                ; Note: DS is equal to CS
main_loop:
        push    ds              ; save segment registers
        push    es
        mov     cs:stk_seg,ss   ; save stack pointer
        mov     cs:stk_off,sp
        mov     dx,offset pgm_name
        mov     bx,offset par_blk
        mov     ax,4b00h        ; AX = EXEC/run program
        int     21h             ; carry = EXEC failed
        mov     ss,cs:stk_seg   ; restore stack pointer
        mov     sp,cs:stk_off
        pop     es              ; restore segment registers
        pop     ds
        jnc     main_loop       ; loop if program run
        mov     dx,offset load_msg
        mov     cx,load_msg_length
        call    print           ; display error message
        mov     ah,08h          ; AH = read without echo
        int     21h             ; wait for any character
        jmp     main_loop       ; execute forever
shell   endp
;
; ----  Print string  ----
;
; DS:DX = address of string
; CX    = size
;
print   proc    near
        mov     ah,40h          ; AH = write to file
        mov     bx,stderr       ; BX = file handle
        int     21h             ; print string
        ret
print   endp
;
; ----  Message strings  ----
;
load_msg db cr,lf
            db 'Cannot load program.',cr,lf
            db 'Press any key to try again.',cr,lf
load_msg_length equ $-load_msg
;
; ----  Program data area  ----
;
stk_seg  dw     0               ; stack segment pointer
stk_off  dw     0               ; save area during EXEC
pgm_name db     '\NEWSHELL.COM',0 ; any program will do
par_blk  dw     0               ; use current environment
            dw     offset cmd_line ; command-line address
cmd_seg  dw     0               ; fill in at initialization
            dw     offset fcb1     ; default FCB #1
fcb1_seg dw     0               ; fill in at initialization
            dw     offset fcb2     ; default FCB #2
fcb2_seg dw     0               ; fill in at initialization
cmd_line db     0,cr            ; actual command line
fcb1     db     0
            db     11 dup (' ')
            db     25 dup ( 0 )
fcb2     db     0
            db     11 dup (' ')
            db     25 dup ( 0 )
            dw     200 dup ( 0 )   ; program stack area
stk      dw     0
last     equ    $               ; last address used
cseg     ends
            end    start



───────────────────────────────────────────────────────────────────────────


Figure 3-10.
Assembly-language routine to access a 12-bit FAT.


; ---- Obtain the next link number from a 12-bit FAT  -----
;
; Parameters:
;       ax     = current entry number
;       ds:bx  = address of FAT (must be contiguous)
;
; Returns:
;       ax     = next link number
;
; Uses: ax, bx, cx
next12  proc    near
        add     bx,ax           ; ds:bx = partial index
        shr     ax,1            ; ax = offset/2
                                ; carry = no shift needed
        pushf                   ; save carry
        add     bx,ax           ; ds:bx = next cluster number index
        mov     ax,[bx]         ; ax = next cluster number
        popf                    ; carry = no shift needed
        jc      shift           ; skip if using top 12 bits
        and     ax,0fffh        ; ax = lower 12 bits
        ret
shift:  mov     cx,4            ; cx = shift count
        shr     ax,cl           ; ax = top 12 bits in lower 12 bits
        ret
next12  endp



───────────────────────────────────────────────────────────────────────────


Figure 3-11.
Assembly-language routine to access a 16-bit FAT.


; ---- Obtain the next link number from a 16-bit FAT  -----
;
; Parameters:
;       ax     = current entry number
;       ds:bx  = address of FAT (must be contiguous)
;
; Returns:
;       ax    = next link number
;
; Uses: ax, bx, cx
next16  proc    near
        add     ax,ax           ; ax = word offset
        add     bx,ax           ; ds:bx = next link number index
        mov     ax,[bx]         ; ax = next link number
        ret
next16  endp



───────────────────────────────────────────────────────────────────────────


Figure 4-3.
Terminating properly under any MS-DOS version.


TEXT    SEGMENT PARA PUBLIC 'CODE'

        ASSUME  CS:TEXT,DS:NOTHING,ES:NOTHING,SS:NOTHING

TERM_VECTOR     DD      ?

ENTRY_PROC      PROC    FAR

;save pointer to termination vector in PSP

        MOV     WORD PTR CS:TERM_VECTOR+0,0000h ;save offset of Warm Boot
                                                ;vector
        MOV     WORD PTR CS:TERM_VECTOR+2,DS    ;save segment address of
                                                ;PSP
;***** Place main task here *****

;determine which MS-DOS version is active, take jump if 2.0 or later

        MOV     AH,30h          ;load Get MS-DOS Version Number function
                                ;code
        INT     21h             ;call MS-DOS to get version number
        OR      AL,AL           ;see if pre-2.0 MS-DOS
        JNZ     TERM_0200       ;jump if 2.0 or later

;terminate under pre-2.0 MS-DOS

        JMP     CS:TERM_VECTOR  ;jump to Warm Boot vector in PSP

;terminate under MS-DOS 2.0 or later

TERM_0200:
        MOV     AX,4C00h        ;load MS-DOS termination function code
                                ;and return code
        INT     21h             ;call MS-DOS to terminate

ENTRY_PROC      ENDP

TEXT    ENDS

        END     ENTRY_PROC      ;define entry point



───────────────────────────────────────────────────────────────────────────


Figure 4-4.
Using RET to return control to MS-DOS.


TEXT    SEGMENT PARA PUBLIC 'CODE'

        ASSUME  CS:TEXT,DS:NOTHING,ES:NOTHING,SS:NOTHING

ENTRY_PROC      PROC    FAR     ;make proc FAR so RET will be FAR

;Push pointer to termination vector in PSP
        PUSH    DS              ;push PSP's segment address
        XOR     AX,AX           ;ax = 0 = offset of Warm Boot vector in PSP
        PUSH    AX              ;push Warm Boot vector offset

;***** Place main task here *****

;Determine which MS-DOS version is active, take jump if 2.0 or later

        MOV     AH,30h          ;load Get MS-DOS Version Number function
                                ;code
        INT     21h             ;call MS-DOS to get version number
        OR      AL,AL           ;see if pre-2.0 MS-DOS
        JNZ     TERM_0200       ;jump if 2.0 or later

;Terminate under pre-2.0 MS-DOS (this is a FAR proc, so RET will be FAR)
        RET                     ;pop PSP:00H into CS:IP to terminate
;Terminate under MS-DOS 2.0 or later
TERM_0200:
        MOV     AX,4C00h        ;AH = MS-DOS Terminate Process with Return
                                ;Code
                                ;function code, AL = return code of 00H
        INT     21h             ;call MS-DOS to terminate

ENTRY_PROC      ENDP

TEXT    ENDS

        END     ENTRY_PROC      ;declare the program's entry point



───────────────────────────────────────────────────────────────────────────


Figure 4-8.
Structuring a .EXE program: MODULE_A.


;Source Module MODULE_A

;Predeclare all segments to force the linker's segment ordering ***********

_TEXT   SEGMENT BYTE PUBLIC 'CODE'
_TEXT   ENDS

_DATA   SEGMENT WORD PUBLIC 'DATA'
_DATA   ENDS

CONST   SEGMENT WORD PUBLIC 'CONST'
CONST   ENDS

_BSS    SEGMENT WORD PUBLIC 'BSS'
_BSS    ENDS

STACK   SEGMENT PARA STACK 'STACK'
STACK   ENDS

DGROUP  GROUP   _DATA,CONST,_BSS,STACK


;Constant declarations ****************************************************

CONST   SEGMENT WORD PUBLIC 'CONST'

CONST_FIELD_A   DB      'Constant A'    ;declare a MODULE_A constant

CONST   ENDS


;Preinitialized data fields ***********************************************

_DATA   SEGMENT WORD PUBLIC 'DATA'

DATA_FIELD_A    DB      'Data A'        ;declare a MODULE_A preinitialized
                                        ;field

_DATA   ENDS


;Uninitialized data fields ************************************************

_BSS    SEGMENT WORD PUBLIC 'BSS'

BSS_FIELD_A     DB      5 DUP(?)        ;declare a MODULE_A uninitialized
                                        ;field

_BSS    ENDS


;Program text *************************************************************

_TEXT   SEGMENT BYTE PUBLIC 'CODE'

        ASSUME  CS:_TEXT,DS:DGROUP,ES:NOTHING,SS:NOTHING

        EXTRN   PROC_B:NEAR             ;label is in _TEXT segment (NEAR)
        EXTRN   PROC_C:NEAR             ;label is in _TEXT segment (NEAR)

PROC_A  PROC    NEAR

        CALL    PROC_B                  ;call into MODULE_B
        CALL    PROC_C                  ;call into MODULE_C

        MOV     AX,4C00H                ;terminate (MS-DOS 2.0 or
                                        ;later only)
        INT     21H

PROC_A  ENDP

_TEXT   ENDS

;Stack ********************************************************************

STACK   SEGMENT PARA STACK 'STACK'

        DW      128 DUP(?)              ;declare some space to use as stack
STACK_BASE      LABEL   WORD

STACK   ENDS

        END     PROC_A                  ;declare PROC_A as entry point



───────────────────────────────────────────────────────────────────────────


Figure 4-9.
Structuring a .EXE program: MODULE_B.


;Source Module MODULE_B

;Constant declarations ****************************************************

CONST   SEGMENT WORD PUBLIC 'CONST'

CONST_FIELD_B   DB      'Constant B'    ;declare a MODULE_B constant

CONST   ENDS


;Preinitialized data fields ***********************************************

_DATA   SEGMENT WORD PUBLIC 'DATA'

DATA_FIELD_B    DB      'Data B'        ;declare a MODULE_B preinitialized
                                        ;field

_DATA   ENDS


;Uninitialized data fields ************************************************

_BSS    SEGMENT WORD PUBLIC 'BSS'

BSS_FIELD_B     DB      5 DUP(?)        ;declare a MODULE_B uninitialized
                                        ;field

_BSS    ENDS


;Program text *************************************************************

DGROUP  GROUP   _DATA,CONST,_BSS

_TEXT   SEGMENT BYTE PUBLIC 'CODE'

        ASSUME  CS:_TEXT,DS:DGROUP,ES:NOTHING,SS:NOTHING

        PUBLIC  PROC_B                  ;reference in MODULE_A
PROC_B  PROC    NEAR

        RET

PROC_B  ENDP

_TEXT   ENDS

        END



───────────────────────────────────────────────────────────────────────────


Figure 4-10.
Structuring a .EXE program: MODULE_C.


;Source Module MODULE_C

;Constant declarations ****************************************************

CONST   SEGMENT WORD PUBLIC 'CONST'

CONST_FIELD_C   DB      'Constant C'    ;declare a MODULE_C constant

CONST   ENDS


;Preinitialized data fields ***********************************************

_DATA   SEGMENT WORD PUBLIC 'DATA'

DATA_FIELD_C    DB      'Data C'        ;declare a MODULE_C preinitialized
                                        ;field

_DATA   ENDS


;Uninitialized data fields ************************************************

_BSS    SEGMENT WORD PUBLIC 'BSS'

BSS_FIELD_C     DB      5 DUP(?)        ;declare a MODULE_C uninitialized
                                        ;field

_BSS    ENDS


;Program text *************************************************************

DGROUP  GROUP   _DATA,CONST,_BSS

_TEXT   SEGMENT BYTE PUBLIC 'CODE'

        ASSUME  CS:_TEXT,DS:DGROUP,ES:NOTHING,SS:NOTHING

        PUBLIC  PROC_C                  ;referenced in MODULE_A
PROC_C  PROC    NEAR

        RET

PROC_C  ENDP

_TEXT   ENDS

        END



───────────────────────────────────────────────────────────────────────────


Figure 4-15.
.COM program with data at start.


COMSEG  SEGMENT BYTE PUBLIC 'CODE'
        ASSUME  CS:COMSEG,DS:COMSEG,ES:COMSEG,SS:COMSEG
        ORG     0100H

BEGIN:
        JMP     START           ;skip over data fields
;Place your data fields here.

START:
;Place your program text here.
        MOV     AX,4C00H        ;terminate (MS-DOS 2.0 or later only)
        INT     21H
COMSEG  ENDS
        END     BEGIN



───────────────────────────────────────────────────────────────────────────


Figure 4-16.
.COM program with data at end.


CSEG    SEGMENT BYTE PUBLIC 'CODE'      ;establish segment order
CSEG    ENDS
DSEG    SEGMENT BYTE PUBLIC 'DATA'
DSEG    ENDS
COMGRP  GROUP   CSEG,DSEG               ;establish joint address base
DSEG    SEGMENT
;Place your data fields here.
DSEG    ENDS
CSEG    SEGMENT

        ASSUME  CS:COMGRP,DS:COMGRP,ES:COMGRP,SS:COMGRP
        ORG     0100H

BEGIN:
;Place your program text here.  Remember to use
;OFFSET COMGRP:LABEL whenever you use OFFSET.
        MOV     AX,4C00H              ;terminate (MS-DOS 2.0 or later
                                        ;only)
        INT     21H
CSEG    ENDS
        END     BEGIN



───────────────────────────────────────────────────────────────────────────


Figure 6-1.
COMDVR.ASM.


    1 : Title   COMDVR  Driver for IBM COM Ports
    2 : ;       Jim Kyle, 1987
    3 : ;           Based on ideas from many sources......
    4 : ;               including Mike Higgins, CLM March 1985;
    5 : ;               public-domain INTBIOS program from BBS's;
    6 : ;               COMBIOS.COM from CIS Programmers' SIG; and
    7 : ;               ADVANCED MS-DOS by Ray Duncan.
    8 : Subttl  MS-DOS Driver Definitions
    9 :
    10 :         Comment *       This comments out the Dbg macro.....
    11 : Dbg     Macro   Ltr1,Ltr2,Ltr3  ; used only to debug driver...
    12 :         Local   Xxx
    13 :         Push    Es              ; save all regs used
    14 :         Push    Di
    15 :         Push    Ax
    16 :         Les     Di,Cs:Dbgptr    ; get pointer to CRT
    17 :         Mov     Ax,Es:[di]
    18 :         Mov     Al,Ltr1         ; move in letters
    19 :         Stosw
    20 :         Mov     Al,Ltr2
    21 :         Stosw
    22 :         Mov     Al,Ltr3
    23 :         Stosw
    24 :         Cmp     Di,1600         ; top 10 lines only
    25 :         Jb      Xxx
    26 :         Xor     Di,Di
    27 : Xxx:    Mov     Word Ptr Cs:Dbgptr,Di
    28 :         Pop     Ax
    29 :         Pop     Di
    30 :         Pop     Es
    31 :         Endm
    32 :         *                       ; asterisk ends commented-out region
    33 : ;
    34 : ;               Device Type Codes
    35 : DevChr  Equ     8000h   ; this is a character device
    36 : DevBlk  Equ     0000h   ; this is a block (disk) device
    37 : DevIoc  Equ     4000h   ; this device accepts IOCTL requests
    38 : DevNon  Equ     2000h   ; non-IBM disk driver (block only)
    39 : DevOTB  Equ     2000h   ; MS-DOS 3.x out until busy supported (char)
    40 : DevOCR  Equ     0800h   ; MS-DOS 3.x open/close/rm supported
    41 : DevX32  Equ     0040h   ; MS-DOS 3.2 functions supported
    42 : DevSpc  Equ     0010h   ; accepts special interrupt 29H
    43 : DevClk  Equ     0008h   ; this is the CLOCK device
    44 : DevNul  Equ     0004h   ; this is the NUL device
    45 : DevSto  Equ     0002h   ; this is standard output
    46 : DevSti  Equ     0001h   ; this is standard input
    47 : ;
    48 : ;               Error Status BITS
    49 : StsErr  Equ     8000h   ; general error
    50 : StsBsy  Equ     0200h   ; device busy
    51 : StsDne  Equ     0100h   ; request completed
    52 : ;
    53 : ;               Error Reason values for lower-order bits
    54 : ErrWp   Equ     0       ; write protect error
    55 : ErrUu   Equ     1       ; unknown unit
    56 : ErrDnr  Equ     2       ; drive not ready
    57 : ErrUc   Equ     3       ; unknown command
    58 : ErrCrc  Equ     4       ; cyclical redundancy check error
    59 : ErrBsl  Equ     5       ; bad drive request structure length
    60 : ErrSl   Equ     6       ; seek error
    61 : ErrUm   Equ     7       ; unknown media
    62 : ErrSnf  Equ     8       ; sector not found
    63 : ErrPop  Equ     9       ; printer out of paper
    64 : ErrWf   Equ     10      ; write fault
    65 : ErrRf   Equ     11      ; read fault
    66 : ErrGf   Equ     12      ; general failure
    67 : ;
    68 : ;       Structure of an I/O request packet header.
    69 : ;
    70 : Pack    Struc
    71 : Len     Db      ?       ; length of record
    72 : Prtno   Db      ?       ; unit code
    73 : Code    Db      ?       ; command code
    74 : Stat    Dw      ?       ; return status
    75 : Dosq    Dd      ?       ; (unused MS-DOS queue link pointer)
    76 : Devq    Dd      ?       ; (unused driver queue link pointer)
    77 : Media   Db      ?       ; media code on read/write
    78 : Xfer    Dw      ?       ; xfer address offset
    79 : Xseg    Dw      ?       ; xfer address segment
    80 : Count   Dw      ?       ; transfer byte count
    81 : Sector  Dw      ?       ; starting sector value (block only)
    82 : Pack    Ends
    83 :
    84 : Subttl  IBM-PC Hardware Driver Definitions
    85 : page
    86 : ;
    87 : ;               8259 data
    88 : PIC_b   Equ     020h    ; port for EOI
    89 : PIC_e   Equ     021h    ; port for Int enabling
    90 : EOI     Equ     020h    ; EOI control word
    91 : ;
    92 : ;               8250 port offsets
    93 : RxBuf   Equ     0F8h    ; base address
    94 : Baud1   Equ     RxBuf+1 ; baud divisor high byte
    95 : IntEn   Equ     RxBuf+1 ; interrupt enable register
    96 : IntId   Equ     RxBuf+2 ; interrupt identification register
    97 : Lctrl   Equ     RxBuf+3 ; line control register
    98 : Mctrl   Equ     RxBuf+4 ; modem control register
    99 : Lstat   Equ     RxBuf+5 ; line status register
    100 : Mstat   Equ     RxBuf+6 ; modem status register
    101 : ;
    102 : ;               8250 LCR constants
    103 : Dlab    Equ     10000000b ; divisor latch access bit
    104 : SetBrk  Equ     01000000b ; send break control bit
    105 : StkPar  Equ     00100000b ; stick parity control bit
    106 : EvnPar  Equ     00010000b ; even parity bit
    107 : GenPar  Equ     00001000b ; generate parity bit
    108 : Xstop   Equ     00000100b ; extra stop bit
    109 : Wd8     Equ     00000011b ; word length = 8
    110 : Wd7     Equ     00000010b ; word length = 7
    111 : Wd6     Equ     00000001b ; word length = 6
    112 : ;
    113 : ;               8250 LSR constants
    114 : xsre    Equ     01000000b ; xmt SR empty
    115 : xhre    Equ     00100000b ; xmt HR empty
    116 : BrkRcv  Equ     00010000b ; break received
    117 : FrmErr  Equ     00001000b ; framing error
    118 : ParErr  Equ     00000100b ; parity error
    119 : OveRun  Equ     00000010b ; overrun error
    120 : rdta    Equ     00000001b ; received data ready
    121 : AnyErr  Equ     BrkRcv+FrmErr+ParErr+OveRun
    122 : ;
    123 : ;               8250 MCR constants
    124 : LpBk    Equ     00010000b ; UART out loops to in (test)
    125 : Usr2    Equ     00001000b ; Gates 8250 interrupts
    126 : Usr1    Equ     00000100b ; aux user1 output
    127 : SetRTS  Equ     00000010b ; sets RTS output
    128 : SetDTR  Equ     00000001b ; sets DTR output
    129 : ;
    130 : ;               8250 MSR constants
    131 : CDlvl   Equ     10000000b ; carrier detect level
    132 : RIlvl   Equ     01000000b ; ring indicator level
    133 : DSRlvl  Equ     00100000b ; DSR level
    134 : CTSlvl  Equ     00010000b ; CTS level
    135 : CDchg   Equ     00001000b ; Carrier Detect change
    136 : RIchg   Equ     00000100b ; Ring Indicator change
    137 : DSRchg  Equ     00000010b ; DSR change
    138 : CTSchg  Equ     00000001b ; CTS change
    139 : ;
    140 : ;               8250 IER constants
    141 : S_Int   Equ     00001000b ; enable status interrupt
    142 : E_Int   Equ     00000100b ; enable error interrupt
    143 : X_Int   Equ     00000010b ; enable transmit interrupt
    144 : R_Int   Equ     00000001b ; enable receive interrupt
    145 : Allint  Equ     00001111b ; enable all interrupts
    146 :
    147 : Subttl  Definitions for THIS Driver
    148 : page
    149 : ;
    150 : ;               Bit definitions for the output status byte
    151 : ;                      ( this driver only )
    152 : LinIdl  Equ     0ffh    ; if all bits off, xmitter is idle
    153 : LinXof  Equ     1       ; output is suspended by XOFF
    154 : LinDSR  Equ     2       ; output is suspended until DSR comes on
                                ; again
    155 : LinCTS  Equ     4       ; output is suspended until CTS comes on
                                ; again
    156 : ;
    157 : ;               Bit definitions for the input status byte
    158 : ;                       ( this driver only )
    159 : BadInp  Equ     1       ; input line errors have been detected
    160 : LostDt  Equ     2       ; receiver buffer overflowed, data lost
    161 : OffLin  Equ     4       ; device is off line now
    162 : ;
    163 : ;               Bit definitions for the special characteristics
    164 : ;               words  ( this driver only )
    165 : ;               InSpec controls how input from the UART is treated
    166 : ;
    167 : InEpc   Equ     0001h   ; errors translate to codes with parity bit
                                ; on
    168 : ;
    169 : ;               OutSpec controls how output to the UART is treated
    170 : ;
    171 : OutDSR  Equ     0001h   ; DSR is used to throttle output data
    172 : OutCTS  Equ     0002h   ; CTS is used to throttle output data
    173 : OutXon  Equ     0004h   ; XON/XOFF is used to throttle output data
    174 : OutCdf  Equ     0010h   ; carrier detect is off-line signal
    175 : OutDrf  Equ     0020h   ; DSR is off-line signal
    176 : ;
    177 : Unit    Struc           ; each unit has a structure defining its
                                ; state:
    178 : Port    Dw      ?       ; I/O port address
    179 : Vect    Dw      ?       ; interrupt vector offset (NOT interrupt
                                ; number!)
    180 : Isradr  Dw      ?       ; offset to interrupt service routine
    181 : OtStat  Db      Wd8     ; default LCR bit settings during INIT,
    182 :                         ; output status bits after
    183 : InStat  Db      Usr2+SetRTS+SetDTR   ; MCR bit settings during INIT,
    184 :                         ; input status bits after
    185 : InSpec  Dw      InEpc   ; special mode bits for INPUT
    186 : OutSpec Dw      OutXon  ; special mode bits for OUTPUT
    187 : Baud    Dw      96      ; current baud rate divisor value (1200 b)
    188 : Ifirst  Dw      0       ; offset of first character in input buffer
    189 : Iavail  Dw      0       ; offset of next available byte
    190 : Ibuf    Dw      ?       ; pointer to input buffer
    191 : Ofirst  Dw      0       ; offset of first character in output buffer
    192 : Oavail  Dw      0       ; offset of next avail byte in output buffer
    193 : Obuf    Dw      ?       ; pointer to output buffer
    194 : Unit    Ends
    195 :
    196 : ;
    197 : ;       Beginning of driver code and data
    198 : ;
    199 : Driver  Segment
    200 :         Assume  Cs:driver, ds:driver, es:driver
    201 :         Org     0               ; drivers start at 0
    202 :
    203 :         Dw      Async2,-1       ; pointer to next device
    204 :         Dw      DevChr + DevIoc ; character device with IOCTL
    205 :         Dw      Strtegy         ; offset of Strategy routine
    206 :         Dw      Request1        ; offset of interrupt entry point 1
    207 :         Db      'ASY1    '      ; device 1 name
    208 : Async2:
    209 :         Dw      -1,-1           ; pointer to next device: MS-DOS
                                        ; fills in
    210 :         Dw      DevChr + DevIoc ; character device with IOCTL
    211 :         Dw      Strtegy         ; offset of Strategy routine
    212 :         Dw      Request2        ; offset of interrupt entry point 2
    213 :         Db      'ASY2    '      ; device 2 name
    214 :
    215 : ;dbgptr Dd      0b0000000h
    216 : ;
    217 : ;       Following is the storage area for the request packet pointer
    218 : ;
    219 : PackHd  Dd        0
    220 : ;
    221 : ;                 baud rate conversion table
    222 : Asy_baudt Dw           50,2304          ; first value is desired
                                                ; baud rate
    223 :           Dw           75,1536          ; second is divisor register
                                                ; value
    224 :           Dw          110,1047
    225 :           Dw          134, 857
    226 :           Dw          150, 786
    227 :           Dw          300, 384
    228 :           Dw          600, 192
    229 :           Dw         1200,  96
    230 :           Dw         1800,  64
    231 :           Dw         2000,  58
    232 :           Dw         2400,  48
    233 :           Dw         3600,  32
    234 :           Dw         4800,  24
    235 :           Dw         7200,  16
    236 :           Dw         9600,  12
    237 :
    238 : ; table of structures
    239 : ;       ASY1 defaults to the COM1 port, INT 0CH vector, XON,
    240 : ;       no parity, 8 databits, 1 stop bit, and 1200 baud
    241 : Asy_tab1:
    242 :         Unit    <3f8h,30h,asy1isr,,,,,,,,in1buf,,,out1buf>
    243 :
    244 : ;       ASY2 defaults to the COM2 port, INT 0BH vector, XON,
    245 : ;       no parity, 8 databits, 1 stop bit, and 1200 baud
    246 : Asy_tab2:
    247 :         Unit    <2f8h,2ch,asy2isr,,,,,,,,in2buf,,,out2buf>
    248 :
    249 : Bufsiz  Equ     256        ; input buffer size
    250 : Bufmsk  =       Bufsiz-1   ; mask for calculating offsets modulo
                                    ; bufsiz
    251 : In1buf  Db      Bufsiz DUP (?)
    252 : Out1buf Db      Bufsiz DUP (?)
    253 : In2buf  Db      Bufsiz DUP (?)
    254 : Out2buf Db      Bufsiz DUP (?)
    255 : ;
    256 : ;       Following is a table of offsets to all the driver  functions
    257 :
    258 : Asy_funcs:
    259 :         Dw      Init            ;  0 initialize driver
    260 :         Dw      Mchek           ;  1 media check (block only)
    261 :         Dw      BldBPB          ;  2 build BPB (block only)
    262 :         Dw      Ioctlin         ;  3 IOCTL read
    263 :         Dw      Read            ;  4 read
    264 :         Dw      Ndread          ;  5 nondestructive read
    265 :         Dw      Rxstat          ;  6 input status
    266 :         Dw      Inflush         ;  7 flush input buffer
    267 :         Dw      Write           ;  8 write
    268 :         Dw      Write           ;  9 write with verify
    269 :         Dw      Txstat          ; 10 output status
    270 :         Dw      Txflush         ; 11 flush output buffer
    271 :         Dw      Ioctlout        ; 12 IOCTL write
    272 : ; Following are not used in this driver.....
    273 :         Dw      Zexit           ; 13 open (3.x only, not used)
    274 :         Dw      Zexit           ; 14 close (3.x only, not used)
    275 :         Dw      Zexit           ; 15 rem med (3.x only, not used)
    276 :         Dw      Zexit           ; 16 out until bsy (3.x only, not
                                        ; used)
    277 :         Dw      Zexit           ; 17
    278 :         Dw      Zexit           ; 18
    279 :         Dw      Zexit           ; 19 generic IOCTL request (3.2
                                        ; only)
    280 :         Dw      Zexit           ; 20
    281 :         Dw      Zexit           ; 21
    282 :         Dw      Zexit           ; 22
    283 :         Dw      Zexit           ; 23 get logical drive map (3.2
                                        ; only)
    284 :         Dw      Zexit           ; 24 set logical drive map (3.2
                                        ; only)
    285 :
    286 : Subttl  Driver Code
    287 : Page
    288 : ;
    289 : ;       The Strategy routine itself:
    290 : ;
    291 : Strtegy Proc    Far
    292 : ;       dbg     'S','R',' '
    293 :         Mov     Word Ptr CS:PackHd,BX   ; store the offset
    294 :         Mov     Word Ptr CS:PackHd+2,ES ; store the segment
    295 :         Ret
    296 : Strtegy Endp
    297 : ;
    298 : Request1:                       ; async1 has been requested
    299 :         Push    Si              ; save SI
    300 :         Lea     Si,Asy_tab1     ; get the device unit table address
    301 :         Jmp     Short   Gen_request
    302 :
    303 : Request2:                       ; async2 has been requested
    304 :         Push    Si              ; save SI
    305 :         Lea     Si,Asy_tab2     ; get unit table two's address
    306 :
    307 : Gen_request:
    308 : ;       dbg     'R','R',' '
    309 :         Pushf                   ; save all regs
    310 :         Cld
    311 :         Push    Ax
    312 :         Push    Bx
    313 :         Push    Cx
    314 :         Push    Dx
    315 :         Push    Di
    316 :         Push    Bp
    317 :         Push    Ds
    318 :         Push    Es
    319 :         Push    Cs              ; set DS = CS
    320 :         Pop     Ds
    321 :         Les     Bx,PackHd       ; get packet pointer
    322 :         Lea     Di,Asy_funcs    ; point DI to jump table
    323 :         Mov     Al,es:code[bx]  ; command code
    324 :         Cbw
    325 :         Add     Ax,Ax           ; double to word
    326 :         Add     Di,ax
    327 :         Jmp     [di]            ; go do it
    328 : ;
    329 : ;       Exit from driver request
    330 : ;
    331 : ExitP   Proc    Far
    332 : Bsyexit:
    333 :         Mov     Ax,StsBsy
    334 :         Jmp     Short   Exit
    335 :
    336 : Mchek:
    337 : BldBPB:
    338 : Zexit:  Xor     Ax,Ax
    339 : Exit:   Les     Bx,PackHd       ; get packet pointer
    340 :         Or      Ax,StsDne
    341 :         Mov     Es:Stat[Bx],Ax  ; set return status
    342 :         Pop     Es              ; restore registers
    343 :         Pop     Ds
    344 :         Pop     Bp
    345 :         Pop     Di
    346 :         Pop     Dx
    347 :         Pop     Cx
    348 :         Pop     Bx
    349 :         Pop     Ax
    350 :         Popf
    351 :         Pop     Si
    352 :         Ret
    353 : ExitP   Endp
    354 :
    355 : Subttl  Driver Service Routines
    356 : Page
    357 :
    358 : ;       Read data from device
    359 :
    360 : Read:
    361 : ;       dbg     'R','d',' '
    362 :         Mov     Cx,Es:Count[bx] ; get requested nbr
    363 :         Mov     Di,Es:Xfer[bx]  ; get target pointer
    364 :         Mov     Dx,Es:Xseg[bx]
    365 :         Push    Bx              ; save for count fixup
    366 :         Push    Es
    367 :         Mov     Es,Dx
    368 :         Test    InStat[si],BadInp Or LostDt
    369 :         Je      No_lerr         ; no error so far...
    370 :         Add     Sp,4            ; error, flush SP
    371 :         And     InStat[si],Not ( BadInp Or LostDt )
    372 :         Mov     Ax,ErrRf        ; error, report it
    373 :         Jmp     Exit
    374 : No_lerr:
    375 :         Call    Get_in          ; go for one
    376 :         Or      Ah,Ah
    377 :         Jnz     Got_all         ; none to get now
    378 :         Stosb                   ; store it
    379 :         Loop    No_lerr         ; go for more
    380 : Got_all:
    381 :         Pop     Es
    382 :         Pop     Bx
    383 :         Sub     Di,Es:Xfer[bx]  ; calc number stored
    384 :         Mov     Es:Count[bx],Di ; return as count
    385 :         Jmp     Zexit
    386 :
    387 : ;       Nondestructive read from device
    388 :
    389 : Ndread:
    390 :         Mov     Di,ifirst[si]
    391 :         Cmp     Di,iavail[si]
    392 :         Jne     Ndget
    393 :         Jmp     Bsyexit         ; buffer empty
    394 : Ndget:
    395 :         Push    Bx
    396 :         Mov     Bx,ibuf[si]
    397 :         Mov     Al,[bx+di]
    398 :         Pop     Bx
    399 :         Mov     Es:media[bx],al ; return char
    400 :         Jmp     Zexit
    401 :
    402 : ;       Input status request
    403 :
    404 : Rxstat:
    405 :         Mov     Di,ifirst[si]
    406 :         Cmp     Di,iavail[si]
    407 :         Jne     Rxful
    408 :         Jmp     Bsyexit         ; buffer empty
    409 : Rxful:
    410 :         Jmp     Zexit           ; have data
    411 :
    412 : ;       Input flush request
    413 :
    414 : Inflush:
    415 :         Mov     Ax,iavail[si]
    416 :         Mov     Ifirst[si],ax
    417 :         Jmp     Zexit
    418 :
    419 : ;       Output data to device
    420 :
    421 : Write:
    422 : ;       dbg     'W','r',' '
    423 :         Mov     Cx,es:count[bx]
    424 :         Mov     Di,es:xfer[bx]
    425 :         Mov     Ax,es:xseg[bx]
    426 :         Mov     Es,ax
    427 : Wlup:
    428 :         Mov     Al,es:[di]      ; get the byte
    429 :         Inc     Di
    430 : Wwait:
    431 :         Call    Put_out         ; put away
    432 :         Cmp     Ah,0
    433 :         Jne     Wwait           ; wait for room!
    434 :         Call    Start_output    ; get it going
    435 :         Loop    Wlup
    436 :
    437 :         Jmp     Zexit
    438 :
    439 : ;       Output status request
    440 :
    441 : Txstat:
    442 :         Mov     Ax,ofirst[si]
    443 :         Dec     Ax
    444 :         And     Ax,bufmsk
    445 :         Cmp     Ax,oavail[si]
    446 :         Jne     Txroom
    447 :         Jmp     Bsyexit         ; buffer full
    448 : Txroom:
    449 :         Jmp     Zexit           ; room exists
    450 :
    451 : ;       IOCTL read request, return line parameters
    452 :
    453 : Ioctlin:
    454 :         Mov     Cx,es:count[bx]
    455 :         Mov     Di,es:xfer[bx]
    456 :         Mov     Dx,es:xseg[bx]
    457 :         Mov     Es,dx
    458 :         Cmp     Cx,10
    459 :         Je      Doiocin
    460 :         Mov     Ax,errbsl
    461 :         Jmp     Exit
    462 : Doiocin:
    463 :         Mov     Dx,port[si]     ; base port
    464 :         Mov     Dl,Lctrl        ; line status
    465 :         Mov     Cx,4            ; LCR, MCR, LSR, MSR
    466 : Getport:
    467 :         In      Al,dx
    468 :         Stos    Byte Ptr [DI]
    469 :         Inc     Dx
    470 :         Loop    Getport
    471 :
    472 :         Mov     Ax,InSpec[si]   ; spec in flags
    473 :         Stos    Word Ptr [DI]
    474 :         Mov     Ax,OutSpec[si]  ; out flags
    475 :         Stos    Word Ptr [DI]
    476 :         Mov     Ax,baud[si]     ; baud rate
    477 :         Mov     Bx,di
    478 :         Mov     Di,offset Asy_baudt+2
    479 :         Mov     Cx,15
    480 : Baudcin:
    481 :         Cmp     [di],ax
    482 :         Je      Yesinb
    483 :         Add     Di,4
    484 :         Loop    Baudcin
    485 : Yesinb:
    486 :         Mov     Ax,-2[di]
    487 :         Mov     Di,bx
    488 :         Stos    Word Ptr [DI]
    489 :         Jmp     Zexit
    490 :
    491 : ;       Flush output buffer request
    492 :
    493 : Txflush:
    494 :         Mov     Ax,oavail[si]
    495 :         Mov     Ofirst[si],ax
    496 :         Jmp     Zexit
    497 :
    498 : ;       IOCTL request: change line parameters for this driver
    499 :
    500 : Ioctlout:
    501 :         Mov     Cx,es:count[bx]
    502 :         Mov     Di,es:xfer[bx]
    503 :         Mov     Dx,es:xseg[bx]
    504 :         Mov     Es,dx
    505 :         Cmp     Cx,10
    506 :         Je      Doiocout
    507 :         Mov     Ax,errbsl
    508 :         Jmp     Exit
    509 :
    510 : Doiocout:
    511 :         Mov     Dx,port[si]     ; base port
    512 :         Mov     Dl,Lctrl        ; line ctrl
    513 :         Mov     Al,es:[di]
    514 :         Inc     Di
    515 :         Or      Al,Dlab         ; set baud
    516 :         Out     Dx,al
    517 :         Clc
    518 :         Jnc     $+2
    519 :         Inc     Dx              ; mdm ctrl
    520 :         Mov     Al,es:[di]
    521 :         Or      Al,Usr2         ; Int Gate
    522 :         Out     Dx,al
    523 :         Add     Di,3            ; skip LSR,MSR
    524 :         Mov     Ax,es:[di]
    525 :         Add     Di,2
    526 :         Mov     InSpec[si],ax
    527 :         Mov     Ax,es:[di]
    528 :         Add     Di,2
    529 :         Mov     OutSpec[si],ax
    530 :         Mov     Ax,es:[di]      ; set baud
    531 :         Mov     Bx,di
    532 :         Mov     Di,offset Asy_baudt
    533 :         Mov     Cx,15
    534 : Baudcout:
    535 :         Cmp     [di],ax
    536 :         Je      Yesoutb
    537 :         Add     Di,4
    538 :         Loop    Baudcout
    539 :
    540 :         Mov     Dl,Lctrl        ; line ctrl
    541 :         In      Al,dx           ; get LCR data
    542 :         And     Al,not Dlab     ; strip
    543 :         Clc
    544 :         Jnc     $+2
    545 :         Out     Dx,al           ; put back
    546 :         Mov     Ax,ErrUm        ; "unknown media"
    547 :         Jmp     Exit
    548 :
    549 : Yesoutb:
    550 :         Mov     Ax,2[di]        ; get divisor
    551 :         Mov     Baud[si],ax     ; save to report later
    552 :         Mov     Dx,port[si]     ; set divisor
    553 :         Out     Dx,al
    554 :         Clc
    555 :         Jnc     $+2
    556 :         Inc     Dx
    557 :         Mov     Al,ah
    558 :         Out     Dx,al
    559 :         Clc
    560 :         Jnc     $+2
    561 :         Mov     Dl,Lctrl        ; line ctrl
    562 :         In      Al,dx           ; get LCR data
    563 :         And     Al,not Dlab     ; strip
    564 :         Clc
    565 :         Jnc     $+2
    566 :         Out     Dx,al           ; put back
    567 :         Jmp     Zexit
    568 :
    569 : Subttl  Ring Buffer Routines
    570 : Page
    571 :
    572 : Put_out Proc    Near    ; puts AL into output ring buffer
    573 :         Push    Cx
    574 :         Push    Di
    575 :         Pushf
    576 :         Cli
    577 :         Mov     Cx,oavail[si]   ; put ptr
    578 :         Mov     Di,cx
    579 :         Inc     Cx              ; bump
    580 :         And     Cx,bufmsk
    581 :         Cmp     Cx,ofirst[si]   ; overflow?
    582 :         Je      Poerr           ; yes, don't
    583 :         Add     Di,obuf[si]     ; no
    584 :         Mov     [di],al         ; put in buffer
    585 :         Mov     Oavail[si],cx
    586 : ;       dbg     'p','o',' '
    587 :         Mov     Ah,0
    588 :         Jmp     Short   Poret
    589 : Poerr:
    590 :         Mov     Ah,-1
    591 : Poret:
    592 :         Popf
    593 :         Pop     Di
    594 :         Pop     Cx
    595 :         Ret
    596 : Put_out Endp
    597 :
    598 : Get_out Proc    Near    ; gets next character from output ring
                                ; buffer
    599 :         Push    Cx
    600 :         Push    Di
    601 :         Pushf
    602 :         Cli
    603 :         Mov     Di,ofirst[si]   ; get ptr
    604 :         Cmp     Di,oavail[si]   ; put ptr
    605 :         Jne     Ngoerr
    606 :         Mov     Ah,-1           ; empty
    607 :         Jmp     Short   Goret
    608 : Ngoerr:
    609 : ;       dbg     'g','o',' '
    610 :         Mov     Cx,di
    611 :         Add     Di,obuf[si]
    612 :         Mov     Al,[di]         ; get char
    613 :         Mov     Ah,0
    614 :         Inc     Cx              ; bump ptr
    615 :         And     Cx,bufmsk       ; wrap
    616 :         Mov     Ofirst[si],cx
    617 : Goret:
    618 :         Popf
    619 :         Pop     Di
    620 :         Pop     Cx
    621 :         Ret
    622 : Get_out Endp
    623 :
    624 : Put_in  Proc    Near    ; puts the char from AL into input ring
                                ; buffer
    625 :         Push    Cx
    626 :         Push    Di
    627 :         Pushf
    628 :         Cli
    629 :         Mov     Di,iavail[si]
    630 :         Mov     Cx,di
    631 :         Inc     Cx
    632 :         And     Cx,bufmsk
    633 :         Cmp     Cx,ifirst[si]
    634 :         Jne     Npierr
    635 :         Mov     Ah,-1
    636 :         Jmp     Short   Piret
    637 : Npierr:
    638 :         Add     Di,ibuf[si]
    639 :         Mov     [di],al
    640 :         Mov     Iavail[si],cx
    641 : ;       dbg     'p','i',' '
    642 :         Mov     Ah,0
    643 : Piret:
    644 :         Popf
    645 :         Pop     Di
    646 :         Pop     Cx
    647 :         Ret
    648 : Put_in  Endp
    649 :
    650 : Get_in  Proc    Near    ; gets one from input ring buffer into AL
    651 :         Push    Cx
    652 :         Push    Di
    653 :         Pushf
    654 :         Cli
    655 :         Mov     Di,ifirst[si]
    656 :         Cmp     Di,iavail[si]
    657 :         Je      Gierr
    658 :         Mov     Cx,di
    659 :         Add     Di,ibuf[si]
    660 :         Mov     Al,[di]
    661 :         Mov     Ah,0
    662 : ;       dbg     'g','i',' '
    663 :         Inc     Cx
    664 :         And     Cx,bufmsk
    665 :         Mov     Ifirst[si],cx
    666 :         Jmp     Short   Giret
    667 : Gierr:
    668 :         Mov     Ah,-1
    669 : Giret:
    670 :         Popf
    671 :         Pop     Di
    672 :         Pop     Cx
    673 :         Ret
    674 : Get_in  Endp
    675 :
    676 : Subttl  Interrupt Dispatcher Routine
    677 : Page
    678 :
    679 : Asy1isr:
    680 :         Sti
    681 :         Push    Si
    682 :         Lea     Si,asy_tab1
    683 :         Jmp     Short   Int_serve
    684 :
    685 : Asy2isr:
    686 :         Sti
    687 :         Push    Si
    688 :         Lea     Si,asy_tab2
    689 :
    690 : Int_serve:
    691 :         Push    Ax              ; save all regs
    692 :         Push    Bx
    693 :         Push    Cx
    694 :         Push    Dx
    695 :         Push    Di
    696 :         Push    Ds
    697 :         Push    Cs              ; set DS = CS
    698 :         Pop     Ds
    699 : Int_exit:
    700 : ;       dbg     'I','x',' '
    701 :         Mov     Dx,Port[si]     ; base address
    702 :         Mov     Dl,IntId        ; check Int ID
    703 :         In      Al,Dx
    704 :         Cmp     Al,00h          ; dispatch filter
    705 :         Je      Int_modem
    706 :         Jmp     Int_mo_no
    707 : Int_modem:
    708 : ;       dbg     'M','S',' '
    709 :         Mov     Dl,Mstat
    710 :         In      Al,dx           ; read MSR content
    711 :         Test    Al,CDlvl        ; carrier present?
    712 :         Jnz     Msdsr           ; yes, test for DSR
    713 :         Test    OutSpec[si],OutCdf      ; no, is CD off line?
    714 :         Jz      Msdsr
    715 :         Or      InStat[si],OffLin
    716 : Msdsr:
    717 :         Test    Al,DSRlvl       ; DSR present?
    718 :         Jnz     Dsron           ; yes, handle it
    719 :         Test    OutSpec[si],OutDSR      ; no, is DSR throttle?
    720 :         Jz      Dsroff
    721 :         Or      OtStat[si],LinDSR       ; yes, throttle down
    722 : Dsroff:
    723 :         Test    OutSpec[si],OutDrf      ; is DSR off line?
    724 :         Jz      Mscts
    725 :         Or      InStat[si],OffLin       ; yes, set flag
    726 :         Jmp     Short   Mscts
    727 : Dsron:
    728 :         Test    OtStat[si],LinDSR       ; throttled for DSR?
    729 :         Jz      Mscts
    730 :         Xor     OtStat[si],LinDSR       ; yes, clear it out
    731 :         Call    Start_output
    732 : Mscts:
    733 :         Test    Al,CTSlvl       ; CTS present?
    734 :         Jnz     Ctson           ; yes, handle it
    735 :         Test    OutSpec[si],OutCTS      ; no, is CTS throttle?
    736 :         Jz      Int_exit2
    737 :         Or      OtStat[si],LinCTS       ; yes, shut it down
    738 :         Jmp     Short   Int_exit2
    739 : Ctson:
    740 :         Test    OtStat[si],LinCTS       ; throttled for CTS?
    741 :         Jz      Int_exit2
    742 :         Xor     OtStat[si],LinCTS       ; yes, clear it out
    743 :         Jmp     Short   Int_exit1
    744 : Int_mo_no:
    745 :         Cmp     Al,02h
    746 :         Jne     Int_tx_no
    747 : Int_txmit:
    748 : ;       dbg     'T','x',' '
    749 : Int_exit1:
    750 :         Call    Start_output    ; try to send another
    751 : Int_exit2:
    752 :         Jmp     Int_exit
    753 : Int_tx_no:
    754 :         Cmp     Al,04h
    755 :         Jne     Int_rec_no
    756 : Int_receive:
    757 : ;       dbg     'R','x',' '
    758 :         Mov     Dx,port[si]
    759 :         In      Al,dx           ; take char from 8250
    760 :         Test    OutSpec[si],OutXon  ; is XON/XOFF enabled?
    761 :         Jz      Stuff_in        ; no
    762 :         Cmp     Al,'S' And 01FH ; yes, is this XOFF?
    763 :         Jne     Isq             ; no, check for XON
    764 :         Or      OtStat[si],LinXof ; yes, disable output
    765 :         Jmp     Int_exit2       ; don't store this one
    766 : Isq:
    767 :         Cmp     Al,'Q' And 01FH ; is this XON?
    768 :         Jne     Stuff_in        ; no, save it
    769 :         Test    OtStat[si],LinXof ; yes, waiting?
    770 :         Jz      Int_exit2       ; no, ignore it
    771 :         Xor     OtStat[si],LinXof ; yes, clear the XOFF bit
    772 :         Jmp     Int_exit1       ; and try to resume xmit
    773 : Int_rec_no:
    774 :         Cmp     Al,06h
    775 :         Jne     Int_done
    776 : Int_rxstat:
    777 : ;       dbg     'E','R',' '
    778 :         Mov     Dl,Lstat
    779 :         In      Al,dx
    780 :         Test    InSpec[si],InEpc ; return them as codes?
    781 :         Jz      Nocode          ; no, just set error alarm
    782 :         And     Al,AnyErr       ; yes, mask off all but error bits
    783 :         Or      Al,080h
    784 : Stuff_in:
    785 :         Call    Put_in          ; put input char in buffer
    786 :         Cmp     Ah,0            ; did it fit?
    787 :         Je      Int_exit3       ; yes, all OK
    788 :         Or      InStat[si],LostDt  ; no, set DataLost bit
    789 : Int_exit3:
    790 :         Jmp     Int_exit
    791 : Nocode:
    792 :         Or      InStat[si],BadInp
    793 :         Jmp     Int_exit3
    794 : Int_done:
    795 :         Clc
    796 :         Jnc     $+2
    797 :         Mov     Al,EOI          ; all done now
    798 :         Out     PIC_b,Al
    799 :         Pop     Ds              ; restore regs
    800 :         Pop     Di
    801 :         Pop     Dx
    802 :         Pop     Cx
    803 :         Pop     Bx
    804 :         Pop     Ax
    805 :         Pop     Si
    806 :         Iret
    807 :
    808 : Start_output    Proc    Near
    809 :         Test    OtStat[si],LinIdl ; Blocked?
    810 :         Jnz     Dont_start      ; yes, no output
    811 :         Mov     Dx,port[si]     ; no, check UART
    812 :         Mov     Dl,Lstat
    813 :         In      Al,Dx
    814 :         Test    Al,xhre         ; empty?
    815 :         Jz      Dont_start      ; no
    816 :         Call    Get_out         ; yes, anything waiting?
    817 :         Or      Ah,Ah
    818 :         Jnz     Dont_start      ; no
    819 :         Mov     Dl,RxBuf        ; yes, send it out
    820 :         Out     Dx,al
    821 : ;       dbg     's','o',' '
    822 : Dont_start:
    823 :         ret
    824 : Start_output    Endp
    825 :
    826 : Subttl  Initialization Request Routine
    827 : Page
    828 :
    829 : Init:   Lea     Di,$            ; release rest...
    830 :         Mov     Es:Xfer[bx],Di
    831 :         Mov     Es:Xseg[bx],Cs
    832 :
    833 :         Mov     Dx,Port[si]     ; base port
    834 :         Mov     Dl,Lctrl
    835 :         Mov     Al,Dlab         ; enable divisor
    836 :         Out     Dx,Al
    837 :         Clc
    838 :         Jnc     $+2
    839 :         Mov     Dl,RxBuf
    840 :         Mov     Ax,Baud[si]     ; set baud
    841 :         Out     Dx,Al
    842 :         Clc
    843 :         Jnc     $+2
    844 :         Inc     Dx
    845 :         Mov     Al,Ah
    846 :         Out     Dx,Al
    847 :         Clc
    848 :         Jnc     $+2
    849 :
    850 :         Mov     Dl,Lctrl        ; set LCR
    851 :         Mov     Al,OtStat[si]   ; from table
    852 :         Out     Dx,Al
    853 :         Mov     OtStat[si],0    ; clear status
    854 :         Clc
    855 :         Jnc     $+2
    856 :         Mov     Dl,IntEn        ; IER
    857 :         Mov     Al,AllInt       ; enable ints in 8250
    858 :         Out     Dx,Al
    859 :         Clc
    860 :         Jnc     $+2
    861 :         Mov     Dl,Mctrl        ; set MCR
    862 :         Mov     Al,InStat[si]   ; from table
    863 :         Out     Dx,Al
    864 :         Mov     InStat[si],0    ; clear status
    865 :
    866 : ClRgs:  Mov     Dl,Lstat        ; clear LSR
    867 :         In      Al,Dx
    868 :         Mov     Dl,RxBuf        ; clear RX reg
    869 :         In      Al,Dx
    870 :         Mov     Dl,Mstat        ; clear MSR
    871 :         In      Al,Dx
    872 :         Mov     Dl,IntId        ; IID reg
    873 :         In      Al,Dx
    874 :         In      Al,Dx
    875 :         Test    Al,1            ; int pending?
    876 :         Jz      ClRgs           ; yes, repeat
    877 :
    878 :         Cli
    879 :         Xor     Ax,Ax           ; set int vec
    880 :         Mov     Es,Ax
    881 :         Mov     Di,Vect[si]
    882 :         Mov     Ax,IsrAdr[si]   ; from table
    883 :         Stosw
    884 :         Mov     Es:[di],cs
    885 :
    886 :         In      Al,PIC_e        ; get 8259
    887 :         And     Al,0E7h         ; com1/2 mask
    888 :         Clc
    889 :         Jnb     $+2
    890 :         Out     PIC_e,Al
    891 :         Sti
    892 :
    893 :         Mov     Al,EOI          ; now send EOI just in case
    894 :         Out     PIC_b,Al
    895 :
    896 : ;       dbg     'D','I',' '     ; driver installed
    897 :         Jmp     Zexit
    898 :
    899 : Driver  Ends
    900 :         End
→


───────────────────────────────────────────────────────────────────────────


Figure 6-3.
ENGINE.ASM.


    1 :         TITLE   engine
    2 :
    3 : CODE    SEGMENT PUBLIC 'CODE'
    4 :
    5 :         ASSUME  CS:CODE,DS:CODE,ES:CODE,SS:CODE
    6 :
    7 :         ORG     0100h
    8 :
    9 : START:  mov     dx,offset devnm ; open named device (ASY1)
    10 :         mov     ax,3d02h
    11 :         int     21h
    12 :         mov     handle,ax       ; save the handle
    13 :         jc      quit
    14 : alltim: call    getmdm          ; main engine loop
    15 :         call    putcrt
    16 :         call    getkbd
    17 :         call    putmdm
    18 :         jmp     alltim
    19 : quit:   mov     ah,4ch          ; come here to quit
    20 :         int     21h
    21 :
    22 : getmdm  proc                    ; get input from modem
    23 :         mov     cx,256
    24 :         mov     bx,handle
    25 :         mov     dx,offset mbufr
    26 :         mov     ax,3F00h
    27 :         int     21h
    28 :         jc      quit
    29 :         mov     mdlen,ax
    30 :         ret
    31 : getmdm  endp
    32 :
    33 : getkbd  proc                    ; get input from keyboard
    34 :         mov     kblen,0         ; first zero the count
    35 :         mov     ah,11           ; key pressed?
    36 :         int     21h
    37 :         inc     al
    38 :         jnz     nogk            ; no
    39 :         mov     ah,7            ; yes, get it
    40 :         int     21h
    41 :         cmp     al,3            ; was it Ctrl-C?
    42 :         je      quit            ; yes, get out
    43 :         mov     kbufr,al        ; no, save it
    44 :         inc     kblen
    45 :         cmp     al,13           ; was it Enter?
    46 :         jne     nogk            ; no
    47 :         mov     byte ptr kbufr+1,10 ; yes, add LF
    48 :         inc     kblen
    49 : nogk:   ret
    50 : getkbd  endp
    51 :
    52 : putmdm  proc                    ; put output to modem
    53 :         mov     cx,kblen
    54 :         jcxz    nopm
    55 :         mov     bx,handle
    56 :         mov     dx,offset kbufr
    57 :         mov     ax,4000h
    58 :         int     21h
    59 :         jc      quit
    60 : nopm:   ret
    61 : putmdm  endp
    62 :
    63 : putcrt  proc                    ; put output to CRT
    64 :         mov     cx,mdlen
    65 :         jcxz    nopc
    66 :         mov     bx,1
    67 :         mov     dx,offset mbufr
    68 :         mov     ah,40h
    69 :         int     21h
    70 :         jc      quit
    71 : nopc:   ret
    72 : putcrt  endp
    73 :
    74 : devnm   db      'ASY1',0        ; miscellaneous data and buffers
    75 : handle  dw      0
    76 : kblen   dw      0
    77 : mdlen   dw      0
    78 : mbufr   db      256 dup (0)
    79 : kbufr   db      80 dup (0)
    80 :
    81 : CODE    ENDS
    82 :         END     START



───────────────────────────────────────────────────────────────────────────


Figure 6-4.
CDVUTL.C


    1 : /* cdvutl.c - COMDVR Utility
    2 :  *     Jim Kyle - 1987
    3 :  *     for use with COMDVR.SYS Device Driver
    4 :  */
    5 :
    6 : #include <stdio.h>                 /* i/o definitions      */
    7 : #include <conio.h>                 /* special console i/o  */
    8 : #include <stdlib.h>                /* misc definitions     */
    9 : #include <dos.h>                   /* defines intdos()     */
    10 :
    11 : /*       the following define the driver status bits       */
    12 :
    13 : #define HWINT 0x0800           /* MCR, first word, HW Ints gated */
    14 : #define o_DTR 0x0200           /* MCR, first word, output DTR    */
    15 : #define o_RTS 0x0100           /* MCR, first word, output RTS    */
    16 :
    17 : #define m_PG  0x0010           /* LCR, first word, parity ON     */
    18 : #define m_PE  0x0008           /* LCR, first word, parity EVEN   */
    19 : #define m_XS  0x0004           /* LCR, first word, 2 stop bits   */
    20 : #define m_WL  0x0003           /* LCR, first word, wordlen mask  */
    21 :
    22 : #define i_CD  0x8000           /* MSR, 2nd word, Carrier Detect  */
    23 : #define i_RI  0x4000           /* MSR, 2nd word, Ring Indicator  */
    24 : #define i_DSR 0x2000           /* MSR, 2nd word, Data Set Ready  */
    25 : #define i_CTS 0x1000           /* MSR, 2nd word, Clear to Send   */
    26 :
    27 : #define l_SRE 0x0040           /* LSR, 2nd word, Xmtr SR Empty   */
    28 : #define l_HRE 0x0020           /* LSR, 2nd word, Xmtr HR Empty   */
    29 : #define l_BRK 0x0010           /* LSR, 2nd word, Break Received  */
    30 : #define l_ER1 0x0008           /* LSR, 2nd word, FrmErr          */
    31 : #define l_ER2 0x0004           /* LSR, 2nd word, ParErr          */
    32 : #define l_ER3 0x0002           /* LSR, 2nd word, OveRun          */
    33 : #define l_RRF 0x0001           /* LSR, 2nd word, Rcvr DR Full    */
    34 :
    35 : /*           now define CLS string for ANSI.SYS                  */
    36 : #define CLS    "\033[2J"
    37 :
    38 : FILE * dvp;
    39 : union REGS rvs;
    40 : int iobf [ 5 ];
    41 :
    42 : main ()
    43 : { cputs ( "\nCDVUTL - COMDVR Utility Version 1.0 - 1987\n" );
    44 :   disp ();                         /* do dispatch loop           */
    45 : }
    46 :
    47 : disp ()                            /* dispatcher; infinite loop  */
    48 : { int c,
    49 :     u;
    50 :   u = 1;
    51 :   while ( 1 )
    52 :     { cputs ( "\r\n\tCommand (? for help): " );
    53 :       switch ( tolower ( c = getche ()))   /* dispatch           */
    54 :         {
    55 :         case '1' :                 /* select port 1              */
    56 :           fclose ( dvp );
    57 :           dvp = fopen ( "ASY1", "rb+" );
    58 :              u = 1;
    59 :           break;
    60 :
    61 :         case '2' :                 /* select port 2              */
    62 :           fclose ( dvp );
    63 :           dvp = fopen ( "ASY2", "rb+" );
    64 :           u = 2;
    65 :           break;
    66 :
    67 :         case 'b' :                 /* set baud rate              */
    68 :           if ( iobf [ 4 ] == 300 )
    69 :             iobf [ 4 ] = 1200;
    70 :           else
    71 :             if ( iobf [ 4 ] == 1200 )
    72 :               iobf [ 4 ] = 2400;
    73 :           else
    74 :             if ( iobf [ 4 ] == 2400 )
    75 :               iobf [ 4 ] = 9600;
    76 :           else
    77 :             iobf [ 4 ] = 300;
    78 :           iocwr ();
    79 :           break;
    80 :
    81 :         case 'e' :                 /* set parity even            */
    82 :           iobf [ 0 ] = ( m_PG + m_PE );
    83 :           iocwr ();
    84 :           break;
    85 :
    86 :         case 'f' :                 /* toggle flow control        */
    87 :           if ( iobf [ 3 ] == 1 )
    88 :             iobf [ 3 ] = 2;
    89 :           else
    90 :             if ( iobf [ 3 ] == 2 )
    91 :               iobf [ 3 ] = 4;
    92 :           else
    93 :             if ( iobf [ 3 ] == 4 )
    94 :               iobf [ 3 ] = 0;
    95 :           else
    96 :             iobf [ 3 ] = 1;
    97 :           iocwr ();
    98 :           break;
    99 :
100 :         case 'i' :                 /* initialize MCR/LCR to 8N1 : */
101 :           iobf [ 0 ] = ( HWINT + o_DTR + o_RTS + m_WL );
102 :           iocwr ();
103 :           break;
104 :
105 :         case '?' :                 /* this help list             */
106 :           cputs ( CLS );           /* clear the display          */
107 :          center ( "COMMAND LIST \n" );
108 : center ( "1 = select port 1           L = toggle word LENGTH  " );
109 : center ( "2 = select port 2           N = set parity to NONE  " );
110 : center ( "B = set BAUD rate           O = set parity to ODD   " );
111 : center ( "E = set parity to EVEN      R = toggle error REPORTS" );
112 : center ( "F = toggle FLOW control     S = toggle STOP bits    " );
113 : center ( "I = INITIALIZE ints, etc.   Q = QUIT                " );
114 :          continue;
115 :
116 :         case 'l' :                 /* toggle word length         */
117 :           iobf [ 0 ] ^= 1;
118 :           iocwr ();
119 :           break;
120 :
121 :         case 'n' :                 /* set parity off             */
122 :           iobf [ 0 ] &=~ ( m_PG + m_PE );
123 :           iocwr ();
124 :           break;
125 :
126 :         case 'o' :                 /* set parity odd             */
127 :           iobf [ 0 ] |= m_PG;
128 :           iobf [ 0 ] &=~ m_PE;
129 :           iocwr ();
130 :           break;
131 :
132 :         case 'r' :                 /* toggle error reports       */
133 :           iobf [ 2 ] ^= 1;
134 :           iocwr ();
135 :           break;
136 :
137 :         case 's' :                 /* toggle stop bits           */
138 :           iobf [ 0 ] ^= m_XS;
139 :           iocwr ();
140 :           break;
141 :
142 :         case 'q' :
143 :           fclose ( dvp );
144 :           exit ( 0 );              /* break the loop, get out    */
145 :         }
146 :       cputs ( CLS );               /* clear the display          */
147 :       center ( "CURRENT COMDVR STATUS" );
148 :       report ( u, dvp );           /* report current status      */
149 :     }
150 : }
151 :
152 : center ( s ) char * s;             /* centers a string on CRT    */
153 : { int i ;
154 :   for ( i = 80 - strlen ( s ); i > 0; i -= 2 )
155 :     putch ( ' ' );
156 :   cputs ( s );
157 :   cputs ( "\r\n" );
158 : }
159 :
160 : iocwr ()                           /* IOCTL Write to COMDVR      */
161 : { rvs . x . ax = 0x4403;
162 :   rvs . x . bx = fileno ( dvp );
163 :   rvs . x . cx = 10;
164 :   rvs . x . dx = ( int ) iobf;
165 :   intdos ( & rvs, & rvs );
166 : }
167 :
168 : char * onoff ( x ) int x ;
169 : { return ( x ? " ON" : " OFF" );
170 : }
171 :
172 : report ( unit ) int unit ;
173 : { char temp [ 80 ];
174 :   rvs . x . ax = 0x4402;
175 :   rvs . x . bx = fileno ( dvp );
176 :   rvs . x . cx = 10;
177 :   rvs . x . dx = ( int ) iobf;
178 :   intdos ( & rvs, & rvs );         /* use IOCTL Read to get data */
179 :   sprintf ( temp, "\nDevice ASY%d\t%d BPS, %d-c-%c\r\n\n",
180 :            unit, iobf [ 4 ],           /* baud rate              */
181 :            5 + ( iobf [ 0 ] & m_WL ),  /* word length            */
182 :            ( iobf [ 0 ] & m_PG ?
183 :              ( iobf [ 0 ] & m_PE ? 'E' : 'O' ) : 'N' ),
184 :            ( iobf [ 0 ] & m_XS ? '2' : '1' )); /* stop bits      */
185 :   cputs ( temp );
186 :
187 :   cputs ( "Hardware Interrupts are" );
188 :   cputs ( onoff ( iobf [ 0 ] & HWINT ));
189 :   cputs ( ", Data Terminal Rdy" );
190 :   cputs ( onoff ( iobf [ 0 ] & o_DTR ));
191 :   cputs ( ", Rqst To Send" );
192 :   cputs ( onoff ( iobf [ 0 ] & o_RTS ));
193 :   cputs ( ".\r\n" );
194 :
195 :   cputs ( "Carrier Detect" );
196 :   cputs ( onoff ( iobf [ 1 ] & i_CD ));
197 :   cputs ( ", Data Set Rdy" );
198 :   cputs ( onoff ( iobf [ 1 ] & i_DSR ));
199 :   cputs ( ", Clear to Send" );
200 :   cputs ( onoff ( iobf [ 1 ] & i_CTS ));
201 :   cputs ( ", Ring Indicator" );
202 :   cputs ( onoff ( iobf [ 1 ] & i_RI ));
203 :   cputs ( ".\r\n" );
204 :
205 :   cputs ( l_SRE & iobf [ 1 ] ? "Xmtr SR Empty, " : "" );
206 :   cputs ( l_HRE & iobf [ 1 ] ? "Xmtr HR Empty, " : "" );
207 :   cputs ( l_BRK & iobf [ 1 ] ? "Break Received, " : "" );
208 :   cputs ( l_ER1 & iobf [ 1 ] ? "Framing Error, " : "" );
209 :   cputs ( l_ER2 & iobf [ 1 ] ? "Parity Error, " : "" );
210 :   cputs ( l_ER3 & iobf [ 1 ] ? "Overrun Error, " : "" );
211 :   cputs ( l_RRF & iobf [ 1 ] ? "Rcvr DR Full, " : "" );
212 :   cputs ( "\b\b.\r\n" );
213 :
214 :   cputs ( "Reception errors " );
215 :   if ( iobf [ 2 ] == 1 )
216 :     cputs ( "are encoded as graphics in buffer" );
217 :   else
218 :     cputs ( "set failure flag" );
219 :   cputs ( ".\r\n" );
220 :
221 :   cputs ( "Outgoing Flow Control " );
222 :   if ( iobf [ 3 ] & 4 )
223 :     cputs ( "by XON and XOFF" );
224 :   else
225 :     if ( iobf [ 3 ] & 2 )
226 :       cputs ( "by RTS and CTS" );
227 :   else
228 :     if ( iobf [ 3 ] & 1 )
229 :       cputs ( "by DTR and DSR" );
230 :   else
231 :     cputs ( "disabled" );
232 :   cputs ( ".\r\n" );
233 : }
234 :
235 : /*end of cdvutl.c */



───────────────────────────────────────────────────────────────────────────


Figure 6-5.
CH1.ASM


    1 :         TITLE   CH1.ASM
    2 :
    3 : ; CH1.ASM -- support file for CTERM.C terminal emulator
    4 : ;       set up to work with COM2
    5 : ;       for use with Microsoft C and SMALL model only...
    6 :
    7 : _TEXT   segment byte public 'CODE'
    8 : _TEXT   ends
    9 : _DATA   segment byte public 'DATA'
    10 : _DATA   ends
    11 : CONST   segment byte public 'CONST'
    12 : CONST   ends
    13 : _BSS    segment byte public 'BSS'
    14 : _BSS    ends
    15 :
    16 : DGROUP  GROUP   CONST, _BSS, _DATA
    17 :         assume  cs:_TEXT, DS:DGROUP, ES:DGROUP, SS:DGROUP
    18 :
    19 : _TEXT   segment
    20 :
    21 :         public  _i_m,_rdmdm,_Send_Byte,_wrtmdm,_set_mdm,_u_m
    22 :
    23 : bport   EQU     02F8h           ; COM2 base address, use 03F8H
                                        ; for COM1
    24 : getiv   EQU     350Bh           ; COM2 vectors, use 0CH for COM1
    25 : putiv   EQU     250Bh
    26 : imrmsk  EQU     00001000b       ; COM2 mask, use 00000100b for COM1
    27 : oiv_o   DW      0               ; old int vector save space
    28 : oiv_s   DW      0
    29 :
    30 : bf_pp   DW      in_bf           ; put pointer (last used)
    31 : bf_gp   DW      in_bf           ; get pointer (next to use)
    32 : bf_bg   DW      in_bf           ; start of buffer
    33 : bf_fi   DW      b_last          ; end of buffer
    34 :
    35 : in_bf   DB      512 DUP (?)     ; input buffer
    36 :
    37 : b_last  EQU     $               ; address just past buffer end
    38 :
    39 : bd_dv   DW      0417h           ; baud rate divisors (0=110 bps)
    40 :         DW      0300h           ; code 1 =  150 bps
    41 :         DW      0180h           ; code 2 =  300 bps
    42 :         DW      00C0h           ; code 3 =  600 bps
    43 :         DW      0060h           ; code 4 = 1200 bps
    44 :         DW      0030h           ; code 5 = 2400 bps
    45 :         DW      0018h           ; code 6 = 4800 bps
    46 :         DW      000Ch           ; code 7 = 9600 bps
    47 :
    48 : _set_mdm proc   near            ; replaces BIOS 'init' function
    49 :         PUSH    BP
    50 :         MOV     BP,SP           ; establish stackframe pointer
    51 :         PUSH    ES              ; save registers
    52 :         PUSH    DS
    53 :         MOV     AX,CS           ; point them to CODE segment
    54 :         MOV     DS,AX
    55 :         MOV     ES,AX
    56 :         MOV     AH,[BP+4]       ; get parameter passed by C
    57 :         MOV     DX,BPORT+3      ; point to Line Control Reg
    58 :         MOV     AL,80h          ; set DLAB bit (see text)
    59 :         OUT     DX,AL
    60 :         MOV     DL,AH           ; shift param to BAUD field
    61 :         MOV     CL,4
    62 :         ROL     DL,CL
    63 :         AND     DX,00001110b    ; mask out all other bits
    64 :         MOV     DI,OFFSET bd_dv
    65 :         ADD     DI,DX           ; make pointer to true divisor
    66 :         MOV     DX,BPORT+1      ; set to high byte first
    67 :         MOV     AL,[DI+1]
    68 :         OUT     DX,AL           ; put high byte into UART
    69 :         MOV     DX,BPORT        ; then to low byte
    70 :         MOV     AL,[DI]
    71 :         OUT     DX,AL
    72 :         MOV     AL,AH           ; now use rest of parameter
    73 :         AND     AL,00011111b    ; to set Line Control Reg
    74 :         MOV     DX,BPORT+3
    75 :         OUT     DX,AL
    76 :         MOV     DX,BPORT+2      ; Interrupt Enable Register
    77 :         MOV     AL,1            ; Receive type only
    78 :         OUT     DX,AL
    79 :         POP     DS              ; restore saved registers
    80 :         POP     ES
    81 :         MOV     SP,BP
    82 :         POP     BP
    83 :         RET
    84 : _set_mdm endp
    85 :
    86 : _wrtmdm proc    near            ; write char to modem
    87 : _Send_Byte:                     ; name used by main program
    88 :         PUSH    BP
    89 :         MOV     BP,SP           ; set up pointer and save regs
    90 :         PUSH    ES
    91 :         PUSH    DS
    92 :         MOV     AX,CS
    93 :         MOV     DS,AX
    94 :         MOV     ES,AX
    95 :         MOV     DX,BPORT+4      ; establish DTR, RTS, and OUT2
    96 :         MOV     AL,0Bh
    97 :         OUT     DX,AL
    98 :         MOV     DX,BPORT+6      ; check for on line, CTS
    99 :         MOV     BH,30h
    100 :         CALL    w_tmr
    101 :         JNZ     w_out           ; timed out
    102 :         MOV     DX,BPORT+5      ; check for UART ready
    103 :         MOV     BH,20h
    104 :         CALL    w_tmr
    105 :         JNZ     w_out           ; timed out
    106 :         MOV     DX,BPORT        ; send out to UART port
    107 :         MOV     AL,[BP+4]       ; get char passed from C
    108 :         OUT     DX,AL
    109 : w_out:  POP     DS              ; restore saved regs
    110 :         POP     ES
    111 :         MOV     SP,BP
    112 :         POP     BP
    113 :         RET
    114 : _wrtmdm endp
    115 :
    116 : _rdmdm  proc    near            ; reads byte from buffer
    117 :         PUSH    BP
    118 :         MOV     BP,SP           ; set up ptr, save regs
    119 :         PUSH    ES
    120 :         PUSH    DS
    121 :         MOV     AX,CS
    122 :         MOV     DS,AX
    123 :         MOV     ES,AX
    124 :         MOV     AX,0FFFFh       ; set for EOF flag
    125 :         MOV     BX,bf_gp        ; use "get" ptr
    126 :         CMP     BX,bf_pp        ; compare to "put"
    127 :         JZ      nochr           ; same, empty
    128 :         INC     BX              ; else char available
    129 :         CMP     BX,bf_fi        ; at end of bfr?
    130 :         JNZ     noend           ; no
    131 :         MOV     BX,bf_bg        ; yes, set to beg
    132 : noend:  MOV     AL,[BX]         ; get the char
    133 :         MOV     bf_gp,BX        ; update "get" ptr
    134 :         INC     AH              ; zero AH as flag
    135 : nochr:  POP     DS              ; restore regs
    136 :         POP     ES
    137 :         MOV     SP,BP
    138 :         POP     BP
    139 :         RET
    140 : _rdmdm  endp
    141 :
    142 : w_tmr   proc    near
    143 :         MOV     BL,1            ; wait timer, double loop
    144 : w_tm1:  SUB     CX,CX           ; set up inner loop
    145 : w_tm2:  IN      AL,DX           ; check for requested response
    146 :         MOV     AH,AL           ; save what came in
    147 :         AND     AL,BH           ; mask with desired bits
    148 :         CMP     AL,BH           ; then compare
    149 :         JZ      w_tm3           ; got it, return with ZF set
    150 :         LOOP    w_tm2           ; else keep trying
    151 :         DEC     BL              ; until double loop expires
    152 :         JNZ     w_tm1
    153 :         OR      BH,BH           ; timed out, return NZ
    154 : w_tm3:  RET
    155 : w_tmr:  endp
    156 :
    157 : ; hardware interrupt service routine
    158 : rts_m:  CLI
    159 :         PUSH    DS              ; save all regs
    160 :         PUSH    AX
    161 :         PUSH    BX
    162 :         PUSH    CX
    163 :         PUSH    DX
    164 :         PUSH    CS              ; set DS same as CS
    165 :         POP     DS
    166 :         MOV     DX,BPORT        ; grab the char from UART
    167 :         IN      AL,DX
    168 :         MOV     BX,bf_pp        ; use "put" ptr
    169 :         INC     BX              ; step to next slot
    170 :         CMP     BX,bf_fi        ; past end yet?
    171 :         JNZ     nofix           ; no
    172 :         MOV     BX,bf_bg        ; yes, set to begin
    173 : nofix:  MOV     [BX],AL         ; put char in buffer
    174 :         MOV     bf_pp,BX        ; update "put" ptr
    175 :         MOV     AL,20h          ; send EOI to 8259 chip
    176 :         OUT     20h,AL
    177 :         POP     DX              ; restore regs
    178 :         POP     CX
    179 :         POP     BX
    180 :         POP     AX
    181 :         POP     DS
    182 :         IRET
    183 :
    184 : _i_m    proc    near            ; install modem service
    185 :         PUSH    BP
    186 :         MOV     BP,SP           ; save all regs used
    187 :         PUSH    ES
    188 :         PUSH    DS
    189 :         MOV     AX,CS           ; set DS,ES=CS
    190 :         MOV     DS,AX
    191 :         MOV     ES,AX
    192 :         MOV     DX,BPORT+1      ; Interrupt Enable Reg
    193 :         MOV     AL,0Fh          ; enable all ints now
    194 :         OUT     DX,AL
    195 :
    196 : im1:    MOV     DX,BPORT+2      ; clear junk from UART
    197 :         IN      AL,DX           ; read IID reg of UART
    198 :         MOV     AH,AL           ; save what came in
    199 :         TEST    AL,1            ; anything pending?
    200 :         JNZ     im5             ; no, all clear now
    201 :         CMP     AH,0            ; yes, Modem Status?
    202 :         JNZ     im2             ; no
    203 :         MOV     DX,BPORT+6      ; yes, read MSR to clear
    204 :         IN      AL,DX
    205 : im2:    CMP     AH,2            ; Transmit HR empty?
    206 :         JNZ     im3             ; no (no action needed)
    207 : im3:    CMP     AH,4            ; Received Data Ready?
    208 :         JNZ     im4             ; no
    209 :         MOV     DX,BPORT        ; yes, read it to clear
    210 :         IN      AL,DX
    211 : im4:    CMP     AH,6            ; Line Status?
    212 :         JNZ     im1             ; no, check for more
    213 :         MOV     DX,BPORT+5      ; yes, read LSR to clear
    214 :         IN      AL,DX
    215 :         JMP     im1             ; then check for more
    216 :
    217 : im5:    MOV     DX,BPORT+4      ; set up working conditions
    218 :         MOV     AL,0Bh          ; DTR, RTS, OUT2 bits
    219 :         OUT     DX,AL
    220 :         MOV     AL,1            ; enable RCV interrupt only
    221 :         MOV     DX,BPORT+1
    222 :         OUT     DX,AL
    223 :         MOV     AX,GETIV        ; get old int vector
    224 :         INT     21h
    225 :         MOV     oiv_o,BX        ; save for restoring later
    226 :         MOV     oiv_s,ES
    227 :         MOV     DX,OFFSET rts_m ; set in new one
    228 :         MOV     AX,PUTIV
    229 :         INT     21h
    230 :         IN      AL,21h          ; now enable 8259 PIC
    231 :         AND     AL,NOT IMRMSK
    232 :         OUT     21h,AL
    233 :         MOV     AL,20h          ; then send out an EOI
    234 :         OUT     20h,AL
    235 :         POP     DS              ; restore
    236 :         POP     ES
    237 :         MOV     SP,BP
    238 :         POP     BP
    239 :         RET
    240 : _i_m    endp
    241 :
    242 : _u_m    proc    near            ; uninstall modem service
    243 :         PUSH    BP
    244 :         MOV     BP,SP           ; save registers
    245 :         IN      AL,21h          ; disable COM int in 8259
    246 :         OR      AL,IMRMSK
    247 :         OUT     21h,AL
    248 :         PUSH    ES
    249 :         PUSH    DS
    250 :         MOV     AX,CS           ; set same as CS
    251 :         MOV     DS,AX
    252 :         MOV     ES,AX
    253 :         MOV     AL,0            ; disable UART ints
    254 :         MOV     DX,BPORT+1
    255 :         OUT     DX,AL
    256 :         MOV     DX,oiv_o        ; restore original vector
    257 :         MOV     DS,oiv_s
    258 :         MOV     AX,PUTIV
    259 :         INT     21h
    260 :         POP     DS              ; restore registers
    261 :         POP     ES
    262 :         MOV     SP,BP
    263 :         POP     BP
    264 :         RET
    265 : _u_m    endp
    266 :
    267 : _TEXT   ends
    268 :
    269 :         END



───────────────────────────────────────────────────────────────────────────


Figure 6-6.
CH1A.ASM.


    1 :         TITLE   CH1A.ASM
    2 :
    3 : ; CH1A.ASM -- support file for CTERM.C terminal emulator
    4 : ;       this set of routines replaces Ctrl-C/Ctrl-BREAK
    5 : ;       usage: void set_int(), rst_int();
    6 : ;               int broke();    /* boolean if BREAK     */
    7 : ;       for use with Microsoft C and SMALL model only...
    8 :
    9 : _TEXT   segment byte public 'CODE'
    10 : _TEXT   ends
    11 : _DATA   segment byte public 'DATA'
    12 : _DATA   ends
    13 : CONST   segment byte public 'CONST'
    14 : CONST   ends
    15 : _BSS    segment byte public 'BSS'
    16 : _BSS    ends
    17 :
    18 : DGROUP  GROUP   CONST, _BSS, _DATA
    19 :         ASSUME  CS:_TEXT, DS:DGROUP, ES:DGROUP, SS:DGROUP
    20 :
    21 : _DATA   SEGMENT BYTE PUBLIC 'DATA'
    22 :
    23 : OLDINT1B DD     0               ; storage for original INT 1BH
                                        ; vector
    24 :
    25 : _DATA   ENDS
    26 :
    27 : _TEXT   SEGMENT
    28 :
    29 :         PUBLIC  _set_int,_rst_int,_broke
    30 :
    31 : myint1b:
    32 :         mov     word ptr cs:brkflg,1Bh          ; make it nonzero
    33 :         iret
    34 :
    35 : myint23:
    36 :         mov     word ptr cs:brkflg,23h          ; make it nonzero
    37 :         iret
    38 :
    39 : brkflg  dw      0               ; flag that BREAK occurred
    40 :
    41 : _broke  proc    near            ; returns 0 if no break
    42 :         xor     ax,ax           ; prepare to reset flag
    43 :         xchg    ax,cs:brkflg    ; return current flag value
    44 :         ret
    45 : _broke  endp
    46 :
    47 : _set_int proc near
    48 :         mov     ax,351bh        ; get interrupt vector for 1BH
    49 :         int     21h             ; (don't need to save for 23H)
    50 :         mov     word ptr oldint1b,bx     ; save offset in first word
    51 :         mov     word ptr oldint1b+2,es   ; save segment in second
                                                ; word
    52 :
    53 :         push    ds              ; save our data segment
    54 :         mov     ax,cs           ; set DS to CS for now
    55 :         mov     ds,ax
    56 :         lea     dx,myint1b      ; DS:DX points to new routine
    57 :         mov     ax,251bh        ; set interrupt vector
    58 :         int     21h
    59 :         mov     ax,cs           ; set DS to CS for now
    60 :         mov     ds,ax
    61 :         lea     dx,myint23      ; DS:DX points to new routine
    62 :         mov     ax,2523h        ; set interrupt vector
    63 :         int     21h
    64 :         pop     ds              ; restore data segment
    65 :         ret
    66 : _set_int endp
    67 :
    68 : _rst_int proc near
    69 :         push    ds              ; save our data segment
    70 :         lds     dx,oldint1b     ; DS:DX points to original
    71 :         mov     ax,251bh        ; set interrupt vector
    72 :         int     21h
    73 :         pop     ds              ; restore data segment
    74 :         ret
    75 : _rst_int endp
    76 :
    77 : _TEXT   ends
    78 :
    79 :         END



───────────────────────────────────────────────────────────────────────────


Figure 6-7.
CH2.ASM.


    1 :         TITLE   CH2.ASM
    2 :
    3 : ; CH2.ASM -- support file for CTERM.C terminal emulator
    4 : ;       for use with Microsoft C and SMALL model only...
    5 :
    6 : _TEXT   segment byte public 'CODE'
    7 : _TEXT   ends
    8 : _DATA   segment byte public 'DATA'
    9 : _DATA   ends
    10 : CONST   segment byte public 'CONST'
    11 : CONST   ends
    12 : _BSS    segment byte public 'BSS'
    13 : _BSS    ends
    14 :
    15 : DGROUP  GROUP   CONST, _BSS, _DATA
    16 :         assume  CS:_TEXT, DS:DGROUP, ES:DGROUP, SS:DGROUP
    17 :
    18 : _TEXT   segment
    19 :
    20 :         public  __cls,__color,__deol,__i_v,__key,__wrchr,__wrpos
    21 :
    22 : atrib   DB      0               ; attribute
    23 : _colr   DB      0               ; color
    24 : v_bas   DW      0               ; video segment
    25 : v_ulc   DW      0               ; upper left corner cursor
    26 : v_lrc   DW      184Fh           ; lower right corner cursor
    27 : v_col   DW      0               ; current col/row
    28 :
    29 : __key   proc    near            ; get keystroke
    30 :         PUSH    BP
    31 :         MOV     AH,1            ; check status via BIOS
    32 :         INT     16h
    33 :         MOV     AX,0FFFFh
    34 :         JZ      key00           ; none ready, return EOF
    35 :         MOV     AH,0            ; have one, read via BIOS
    36 :         INT     16h
    37 : key00:  POP     BP
    38 :         RET
    39 : __key   endp
    40 :
    41 : __wrchr proc    near
    42 :         PUSH    BP
    43 :         MOV     BP,SP
    44 :         MOV     AL,[BP+4]       ; get char passed by C
    45 :         CMP     AL,' '
    46 :         JNB     prchr           ; printing char, go do it
    47 :         CMP     AL,8
    48 :         JNZ     notbs
    49 :         DEC     BYTE PTR v_col  ; process backspace
    50 :         MOV     AL,byte ptr v_col
    51 :         CMP     AL,byte ptr v_ulc
    52 :         JB      nxt_c           ; step to next column
    53 :         JMP     norml
    54 :
    55 : notbs:  CMP     AL,9
    56 :         JNZ     notht
    57 :         MOV     AL,byte ptr v_col       ; process HTAB
    58 :         ADD     AL,8
    59 :         AND     AL,0F8h
    60 :         MOV     byte ptr v_col,AL
    61 :         CMP     AL,byte ptr v_lrc
    62 :         JA      nxt_c
    63 :         JMP     SHORT   norml
    64 :
    65 : notht:  CMP     AL,0Ah
    66 :         JNZ     notlf
    67 :         MOV     AL,byte ptr v_col+1     ; process linefeed
    68 :         INC     AL
    69 :         CMP     AL,byte ptr v_lrc+1
    70 :         JBE     noht1
    71 :         CALL    scrol
    72 :         MOV     AL,byte ptr v_lrc+1
    73 : noht1:  MOV     byte ptr v_col+1,AL
    74 :         JMP     SHORT   norml
    75 :
    76 : notlf:  CMP     AL,0Ch
    77 :         JNZ     ck_cr
    78 :         CALL    __cls           ; process formfeed
    79 :         JMP     SHORT   ignor
    80 :
    81 : ck_cr:  CMP     AL,0Dh
    82 :         JNZ     ignor           ; ignore all other CTL chars
    83 :         MOV     AL,byte ptr v_ulc       ; process CR
    84 :         MOV     byte ptr v_col,AL
    85 :         JMP     SHORT   norml
    86 :
    87 : prchr:  MOV     AH,_colr        ; process printing char
    88 :         PUSH    AX
    89 :         XOR     AH,AH
    90 :         MOV     AL,byte ptr v_col+1
    91 :         PUSH    AX
    92 :         MOV     AL,byte ptr v_col
    93 :         PUSH    AX
    94 :         CALL    wrtvr
    95 :         MOV     SP,BP
    96 : nxt_c:  INC     BYTE PTR v_col  ; advance to next column
    97 :         MOV     AL,byte ptr v_col
    98 :         CMP     AL,byte ptr v_lrc
    99 :         JLE     norml
    100 :         MOV     AL,0Dh          ; went off end, do CR/LF
    101 :         PUSH    AX
    102 :         CALL    __wrchr
    103 :         POP     AX
    104 :         MOV     AL,0Ah
    105 :         PUSH    AX
    106 :         CALL    __wrchr
    107 :         POP     AX
    108 : norml:  CALL    set_cur
    109 : ignor:  MOV     SP,BP
    110 :         POP     BP
    111 :         RET
    112 : __wrchr endp
    113 :
    114 : __i_v   proc    near            ; establish video base segment
    115 :         PUSH    BP
    116 :         MOV     BP,SP
    117 :         MOV     AX,0B000h       ; mono, B800 for CGA
    118 :         MOV     v_bas,AX        ; could be made automatic
    119 :         MOV     SP,BP
    120 :         POP     BP
    121 :         RET
    122 : __i_v   endp
    123 :
    124 : __wrpos proc    near            ; set cursor position
    125 :         PUSH    BP
    126 :         MOV     BP,SP
    127 :         MOV     DH,[BP+4]       ; row from C program
    128 :         MOV     DL,[BP+6]       ; col from C program
    129 :         MOV     v_col,DX        ; cursor position
    130 :         MOV     BH,atrib        ; attribute
    131 :         MOV     AH,2
    132 :         PUSH    BP
    133 :         INT     10h
    134 :         POP     BP
    135 :         MOV     AX,v_col        ; return cursor position
    136 :         MOV     SP,BP
    137 :         POP     BP
    138 :         RET
    139 : __wrpos endp
    140 :
    141 : set_cur proc    near            ; set cursor to v_col
    142 :         PUSH    BP
    143 :         MOV     BP,SP
    144 :         MOV     DX,v_col        ; use where v_col says
    145 :         MOV     BH,atrib
    146 :         MOV     AH,2
    147 :         PUSH    BP
    148 :         INT     10h
    149 :         POP     BP
    150 :         MOV     AX,v_col
    151 :         MOV     SP,BP
    152 :         POP     BP
    153 :         RET
    154 : set_cur endp
    155 :
    156 : __color proc    near            ; _color(fg, bg)
    157 :         PUSH    BP
    158 :         MOV     BP,SP
    159 :         MOV     AH,[BP+6]       ; background from C
    160 :         MOV     AL,[BP+4]       ; foreground from C
    161 :         MOV     CX,4
    162 :         SHL     AH,CL
    163 :         AND     AL,0Fh
    164 :         OR      AL,AH           ; pack up into 1 byte
    165 :         MOV     _colr,AL        ; store for handler's use
    166 :         XOR     AH,AH
    167 :         MOV     SP,BP
    168 :         POP     BP
    169 :         RET
    170 : __color endp
    171 :
    172 : scrol   proc    near            ; scroll CRT up by one line
    173 :         PUSH    BP
    174 :         MOV     BP,SP
    175 :         MOV     AL,1            ; count of lines to scroll
    176 :         MOV     CX,v_ulc
    177 :         MOV     DX,v_lrc
    178 :         MOV     BH,_colr
    179 :         MOV     AH,6
    180 :         PUSH    BP
    181 :         INT     10h             ; use BIOS
    182 :         POP     BP
    183 :         MOV     SP,BP
    184 :         POP     BP
    185 :         RET
    186 : scrol   endp
    187 :
    188 : __cls   proc    near            ; clear CRT
    189 :         PUSH    BP
    190 :         MOV     BP,SP
    191 :         MOV     AL,0            ; flags CLS to BIOS
    192 :         MOV     CX,v_ulc
    193 :         MOV     v_col,CX        ; set to HOME
    194 :         MOV     DX,v_lrc
    195 :         MOV     BH,_colr
    196 :         MOV     AH,6
    197 :         PUSH    BP
    198 :         INT     10h             ; use BIOS scroll up
    199 :         POP     BP
    200 :         CALL    set_cur         ; cursor to HOME
    201 :         MOV     SP,BP
    202 :         POP     BP
    203 :         RET
    204 : __cls   endp
    205 :
    206 : __deol  proc    near            ; delete to end of line
    207 :         PUSH    BP
    208 :         MOV     BP,SP
    209 :         MOV     AL,' '
    210 :         MOV     AH,_colr        ; set up blanks
    211 :         PUSH    AX
    212 :         MOV     AL,byte ptr v_col+1
    213 :         XOR     AH,AH           ; set up row value
    214 :         PUSH    AX
    215 :         MOV     AL,byte ptr v_col
    216 :
    217 : deol1:  CMP     AL,byte ptr v_lrc
    218 :         JA      deol2           ; at RH edge
    219 :         PUSH    AX              ; current location
    220 :         CALL    wrtvr           ; write a blank
    221 :         POP     AX
    222 :         INC     AL              ; next column
    223 :         JMP     deol1           ; do it again
    224 :
    225 : deol2:  MOV     AX,v_col        ; return cursor position
    226 :         MOV     SP,BP
    227 :         POP     BP
    228 :         RET
    229 : __deol  endp
    230 :
    231 : wrtvr   proc    near            ; write video RAM (col, row,
                                        ; char/atr)
    232 :         PUSH    BP
    233 :         MOV     BP,SP           ; set up arg ptr
    234 :         MOV     DL,[BP+4]       ; column
    235 :         MOV     DH,[BP+6]       ; row
    236 :         MOV     BX,[BP+8]       ; char/atr
    237 :         MOV     AL,80           ; calc offset
    238 :         MUL     DH
    239 :         XOR     DH,DH
    240 :         ADD     AX,DX
    241 :         ADD     AX,AX           ; adjust bytes to words
    242 :         PUSH    ES              ; save seg reg
    243 :         MOV     DI,AX
    244 :         MOV     AX,v_bas        ; set up segment
    245 :         MOV     ES,AX
    246 :         MOV     AX,BX           ; get the data
    247 :         STOSW                   ; put on screen
    248 :         POP     ES              ; restore regs
    249 :         MOV     SP,BP
    250 :         POP     BP
    251 :         RET
    252 : wrtvr   endp
    253 :
    254 : _TEXT   ends
    255 :
    256 :         END



───────────────────────────────────────────────────────────────────────────


Figure 6-8.
CTERM.C.


    1 : /* Terminal Emulator    (cterm.c)
    2 :  *      Jim Kyle, 1987
    3 :  *
    4 :  *      Uses files CH1, CH1A, and CH2 for MASM support...
    5 :  */
    6 :
    7 : #include <stdio.h>
    8 : #include <conio.h>                      /* special console i/o    */
    9 : #include <stdlib.h>                     /* misc definitions       */
    10 : #include <dos.h>                        /* defines intdos()       */
    11 : #include <string.h>
    12 : #define BRK  'C'-'@'                    /* control characters     */
    13 : #define ESC  '['-'@'
    14 : #define XON  'Q'-'@'
    15 : #define XOFF 'S'-'@'
    16 :
    17 : #define True  1
    18 : #define False  0
    19 :
    20 : #define Is_Function_Key(C) ( (C) == ESC )
    21 :
    22 : static char capbfr [ 4096 ];            /* capture buffer         */
    23 : static int wh,
    24 :      ws;
    25 :
    26 : static int I,
    27 :     waitchr = 0,
    28 :     vflag = False,
    29 :     capbp,
    30 :     capbc,
    31 :     Ch,
    32 :     Want_7_Bit = True,
    33 :     ESC_Seq_State = 0;         /* escape sequence state variable   */
    34 :
    35 : int _cx ,
    36 :      _cy,
    37 :      _atr = 0x07,                       /* white on black         */
    38 :      _pag = 0,
    39 :      oldtop = 0,
    40 :      oldbot = 0x184f;
    41 :
    42 : FILE * in_file = NULL;         /* start with keyboard input       */
    43 : FILE * cap_file = NULL;
    44 :
    45 : #include "cterm.h"             /* external declarations, etc.     */
    46 :
    47 : int Wants_To_Abort ()          /* checks for interrupt of script  */
    48 : { return broke ();
    49 : }
    50 : void
    51 :
    52 : main ( argc, argv ) int argc ; /* main routine                    */
    53 :  char * argv [];
    54 : { char * cp,
    55 :      * addext ();
    56 :   if ( argc > 1 )                /* check for script filename     */
    57 :     in_file = fopen ( addext ( argv [ 1 ], ".SCR" ), "r" );
    58 :   if ( argc > 2 )                /* check for capture filename    */
    59 :     cap_file = fopen ( addext ( argv [ 2 ], ".CAP" ), "w" );
    60 :   set_int ();                    /* install CH1 module            */
    61 :   Set_Vid ();                    /* get video setup               */
    62 :   cls ();                        /* clear the screen              */
    63 :   cputs ( "Terminal Emulator" ); /* tell who's working            */
    64 :   cputs ( "\r\n< ESC for local commands >\r\n\n" );
    65 :   Want_7_Bit = True;
    66 :   ESC_Seq_State = 0;
    67 :   Init_Comm ();                  /* set up drivers, etc.          */
    68 :   while ( 1 )                           /* main loop              */
    69 :     { if (( Ch = kb_file ()) > 0 )      /* check local            */
    70 :         { if ( Is_Function_Key ( Ch ))
    71 :             { if ( docmd () < 0 )       /* command                */
    72 :                 break;
    73 :             }
    74 :           else
    75 :             Send_Byte ( Ch & 0x7F );    /* else send it           */
    76 :         }
    77 :       if (( Ch = Read_Modem ()) >= 0 )  /* check remote           */
    78 :         { if ( Want_7_Bit )
    79 :             Ch &= 0x7F;                 /* trim off high bit      */
    80 :           switch ( ESC_Seq_State )      /* state machine          */
    81 :             {
    82 :             case 0 :                    /* no Esc sequence        */
    83 :               switch ( Ch )
    84 :                 {
    85 :                 case ESC  :             /* Esc char received      */
    86 :                   ESC_Seq_State = 1;
    87 :                   break;
    88 :
    89 :                 default :
    90 :                   if ( Ch == waitchr )  /* wait if required       */
    91 :                     waitchr = 0;
    92 :                   if ( Ch == 12 )       /* clear screen on FF     */
    93 :                     cls ();
    94 :                   else
    95 :                     if ( Ch != 127 )    /* ignore rubouts         */
    96 :                       { putchx ( (char) Ch );  /* handle all      */
                                                        /* others          */
    97 :                         put_cap ( (char) Ch );
    98 :                       }
    99 :                 }
    100 :               break;
    101 :
    102 :             case 1 : /* ESC -- process any escape sequences here  */
    103 :               switch ( Ch )
    104 :                 {
    105 :                 case 'A' :              /* VT52 up                */
    106 :                   ;                     /* nothing but stubs here */
    107 :                   ESC_Seq_State = 0;
    108 :                   break;
    109 :
    110 :                 case 'B' :              /* VT52 down              */
    111 :                   ;
    112 :                   ESC_Seq_State = 0;
    113 :                   break;
    114 :
    115 :                 case 'C' :              /* VT52 left              */
    116 :                   ;
    117 :                   ESC_Seq_State = 0;
    118 :                   break;
    119 :
    120 :                 case 'D' :              /* VT52 right             */
    121 :                   ;
    122 :                   ESC_Seq_State = 0;
    123 :                   break;
    124 :
    125 :                 case 'E' :              /* VT52 Erase CRT         */
    126 :                   cls ();               /* actually do this one   */
    127 :                   ESC_Seq_State = 0;
    128 :                   break;
    129 :
    130 :                 case 'H' :              /* VT52 home cursor       */
    131 :                   locate ( 0, 0 );
    132 :                   ESC_Seq_State = 0;
    133 :                   break;
    134 :
    135 :                 case 'j' :              /* VT52 Erase to EOS      */
    136 :                   deos ();
    137 :                   ESC_Seq_State = 0;
    138 :                   break;
    139 :
    140 :                 case '[' :      /* ANSI.SYS - VT100 sequence      */
    141 :                   ESC_Seq_State = 2;
    142 :                   break;
    143 :
    144 :                 default :
    145 :                   putchx ( ESC );       /* pass thru all others   */
    146 :                   putchx ( (char) Ch );
    147 :                   ESC_Seq_State = 0;
    148 :                 }
    149 :               break;
    150 :
    151 :             case 2 :                    /* ANSI 3.64 decoder      */
    152 :               ESC_Seq_State = 0;        /* not implemented        */
    153 :             }
    154 :         }
    155 :       if ( broke ())                    /* check CH1A handlers    */
    156 :         { cputs ( "\r\n***BREAK***\r\n" );
    157 :           break;
    158 :         }
    159 :     }                                   /* end of main loop       */
    160 :   if ( cap_file )                       /* save any capture       */
    161 :     cap_flush ();
    162 :   Term_Comm ();                         /* restore when done      */
    163 :   rst_int ();                           /* restore break handlers */
    164 :   exit ( 0 );                           /* be nice to MS-DOS      */
    165 : }
    166 :
    167 : docmd ()                                /* local command shell    */
    168 : { FILE * getfil ();
    169 :   int wp;
    170 :   wp = True;
    171 :   if ( ! in_file || vflag )
    172 :     cputs ( "\r\n\tCommand: " );        /* ask for command        */
    173 :   else
    174 :     wp = False;
    175 :   Ch = toupper ( kbd_wait ());          /* get response           */
    176 :   if ( wp )
    177 :     putchx ( (char) Ch );
    178 :   switch  ( Ch )                        /* and act on it          */
    179 :     {
    180 :     case 'S' :
    181 :       if ( wp )
    182 :         cputs ( "low speed\r\n" );
    183 :       Set_Baud ( 300 );
    184 :       break;
    185 :
    186 :     case 'D' :
    187 :       if ( wp )
    188 :         cputs ( "elay (1-9 sec): " );
    189 :       Ch = kbd_wait ();
    190 :       if ( wp )
    191 :         putchx ( (char) Ch );
    192 :       Delay ( 1000 * ( Ch - '0' ));
    193 :       if ( wp )
    194 :         putchx ( '\n' );
    195 :       break;
    196 :
    197 :     case 'E' :
    198 :       if ( wp )
    199 :         cputs ( "ven Parity\r\n" );
    200 :       Set_Parity ( 2 );
    201 :       break;
    202 :
    203 :     case 'F' :
    204 :       if ( wp )
    205 :         cputs ( "ast speed\r\n" );
    206 :       Set_Baud ( 1200 );
    207 :       break;
    208 :
    209 :     case 'H' :
    210 :       if ( wp )
    211 :         { cputs ( "\r\n\tVALID COMMANDS:\r\n" );
    212 :           cputs ( "\tD = delay 0-9 seconds.\r\n" );
    213 :           cputs ( "\tE = even parity.\r\n" );
    214 :           cputs ( "\tF = (fast) 1200-baud.\r\n" );
    215 :           cputs ( "\tN = no parity.\r\n" );
    216 :           cputs ( "\tO = odd parity.\r\n" );
    217 :           cputs ( "\tQ = quit, return to DOS.\r\n" );
    218 :           cputs ( "\tR = reset modem.\r\n" );
    219 :           cputs ( "\tS = (slow) 300-baud.\r\n" );
    220 :           cputs ( "\tU = use script file.\r\n" );
    221 :           cputs ( "\tV = verify file input.\r\n" );
    222 :           cputs ( "\tW = wait for char." );
    223 :         }
    224 :       break;
    225 :
    226 :     case 'N' :
    227 :       if ( wp )
    228 :         cputs ( "o Parity\r\n" );
    229 :       Set_Parity ( 1 );
    230 :       break;
    231 :
    232 :     case 'O' :
    233 :       if ( wp )
    234 :         cputs ( "dd Parity\r\n" );
    235 :       Set_Parity ( 3 );
    236 :       break;
    237 :
    238 :     case 'R' :
    239 :       if ( wp )
    240 :         cputs ( "ESET Comm Port\r\n" );
    241 :       Init_Comm ();
    242 :       break;
    243 :
    244 :     case 'Q' :
    245 :       if ( wp )
    246 :         cputs ( " = QUIT Command\r\n" );
    247 :       Ch = ( - 1 );
    248 :       break;
    249 :
    250 :     case 'U' :
    251 :       if ( in_file && ! vflag )
    252 :         putchx ( 'U' );
    253 :       cputs ( "se file: " );
    254 :       getfil ();
    255 :       cputs ( "File " );
    256 :       cputs ( in_file ? "Open\r\n" : "Bad\r\n" );
    257 :       waitchr = 0;
    258 :       break;
    259 :
    260 :     case 'V' :
    261 :       if ( wp )
    262 :         { cputs ( "erify flag toggled " );
    263 :           cputs ( vflag ? "OFF\r\n" : "ON\r\n" );
    264 :         }
    265 :       vflag = vflag ? False : True;
    266 :       break;
    267 :
    268 :     case 'W' :
    269 :       if ( wp )
    270 :         cputs ( "ait for: <" );
    271 :       waitchr = kbd_wait ();
    272 :       if ( waitchr == ' ' )
    273 :         waitchr = 0;
    274 :       if ( wp )
    275 :         { if ( waitchr )
    276 :             putchx ( (char) waitchr );
    277 :           else
    278 :             cputs ( "no wait" );
    279 :           cputs ( ">\r\n" );
    280 :         }
    281 :       break;
    282 :
    283 :     default :
    284 :       if ( wp )
    285 :         { cputs ( "Don't know " );
    286 :           putchx ( (char) Ch );
    287 :           cputs ( "\r\nUse 'H' command for Help.\r\n" );
    288 :         }
    289 :       Ch = '?';
    290 :     }
    291 :   if ( wp )                           /* if window open...        */
    292 :     { cputs ( "\r\n[any key]\r" );
    293 :       while ( Read_Keyboard () == EOF ) /* wait for response      */
    294 :         ;
    295 :     }
    296 :   return Ch ;
    297 : }
    298 :
    299 : kbd_wait ()                           /* wait for input           */
    300 : { int c ;
    301 :   while (( c = kb_file ()) == ( - 1 ))
    302 :     ;
    303 :   return c & 255;
    304 : }
    305 :
    306 : kb_file ()                            /* input from kb or file    */
    307 : { int c ;
    308 :   if ( in_file )                      /* USING SCRIPT             */
    309 :     { c = Wants_To_Abort ();          /* use first as flag        */
    310 :       if ( waitchr && ! c )
    311 :         c = ( - 1 );                  /* then for char            */
    312 :       else
    313 :         if ( c || ( c = getc ( in_file )) == EOF || c == 26 )
    314 :           { fclose ( in_file );
    315 :             cputs ( "\r\nScript File Closed\r\n" );
    316 :             in_file = NULL;
    317 :             waitchr = 0;
    318 :             c = ( - 1 );
    319 :           }
    320 :       else
    321 :         if ( c == '\n' )              /* ignore LFs in file       */
    322 :           c = ( - 1 );
    323 :       if ( c == '\\' )                /* process Esc sequence     */
    324 :         c = esc ();
    325 :       if ( vflag && c != ( - 1 ))     /* verify file char         */
    326 :         { putchx ( '{' );
    327 :           putchx ( (char) c );
    328 :           putchx ( '}' );
    329 :         }
    330 :     }
    331 :   else                                /* USING CONSOLE            */
    332 :     c = Read_Keyboard ();             /* if not using file        */
    333 :   return ( c );
    334 : }
    335 :
    336 : esc ()                                /* script translator        */
    337 : { int c ;
    338 :   c = getc ( in_file );               /* control chars in file    */
    339 :   switch ( toupper ( c ))
    340 :     {
    341 :     case 'E' :
    342 :       c = ESC;
    343 :       break;
    344 :
    345 :     case 'N' :
    346 :       c = '\n';
    347 :       break;
    348 :
    349 :     case 'R' :
    350 :       c = '\r';
    351 :       break;
    352 :
    353 :     case 'T' :
    354 :       c = '\t';
    355 :       break;
    356 :
    357 :     case '^' :
    358 :       c = getc ( in_file ) & 31;
    359 :       break;
    360 :     }
    361 :   return ( c );
    362 : }
    363 :
    364 : FILE * getfil ()
    365 : { char fnm [ 20 ];
    366 :   getnam ( fnm, 15 );                 /* get the name             */
    367 :   if ( ! ( strchr ( fnm, '.' )))
    368 :     strcat ( fnm, ".SCR" );
    369 :   return ( in_file = fopen ( fnm, "r" ));
    370 : }
    371 :
    372 : void getnam ( b, s ) char * b;        /* take input to buffer     */
    373 :  int s ;
    374 : { while ( s -- > 0 )
    375 :     { if (( * b = (char) kbd_wait ()) != '\r' )
    376 :         putchx ( * b ++ );
    377 :       else
    378 :         break ;
    379 :     }
    380 :   putchx ( '\n' );
    381 :   * b = 0;
    382 : }
    383 :
    384 : char * addext ( b,                    /* add default EXTension    */
    385 :      e ) char * b,
    386 :      * e;
    387 : { static char bfr [ 20 ];
    388 :   if ( strchr ( b, '.' ))
    389 :     return ( b );
    390 :   strcpy ( bfr, b );
    391 :   strcat ( bfr, e );
    392 :   return ( bfr );
    393 : }
    394 :
    395 : void put_cap ( c ) char c ;
    396 : { if ( cap_file && c != 13 )          /* strip out CRs            */
    397 :     fputc ( c, cap_file );            /* use MS-DOS buffering     */
    398 : }
    399 :
    400 : void cap_flush ()                     /* end Capture mode         */
    401 : { if ( cap_file )
    402 :     { fclose ( cap_file );
    403 :       cap_file = NULL;
    404 :       cputs ( "\r\nCapture file closed\r\n" );
    405 :     }
    406 : }
    407 :
    408 : /*      TIMER SUPPORT STUFF (IBMPC/MSDOS)       */
    409 : static long timr;                     /* timeout register         */
    410 :
    411 : static union REGS rgv ;
    412 :
    413 : long getmr ()
    414 : { long now ;                          /* msec since midnite       */
    415 :   rgv.x.ax = 0x2c00;
    416 :   intdos ( & rgv, & rgv );
    417 :   now = rgv.h.ch;                     /* hours                    */
    418 :   now *= 60L;                         /* to minutes               */
    419 :   now += rgv.h.cl;                    /* plus min                 */
    420 :   now *= 60L;                         /* to seconds               */
    421 :   now += rgv.h.dh;                    /* plus sec                 */
    422 :   now *= 100L;                        /* to 1/100                 */
    423 :   now += rgv.h.dl;                    /* plus 1/100               */
    424 :   return ( 10L * now );               /* msec value               */
    425 : }
    426 :
    427 : void Delay ( n ) int n ;              /* sleep for n msec         */
    428 : { long wakeup ;
    429 :   wakeup = getmr () + ( long ) n;     /* wakeup time              */
    430 :   while ( getmr () < wakeup )
    431 :     ;                                 /* now sleep                */
    432 : }
    433 :
    434 : void Start_Timer ( n ) int n ;       /* set timeout for n sec     */
    435 : { timr = getmr () + ( long ) n * 1000L;
    436 : }
    437 :
    438 : Timer_Expired ()      /* if timeout return 1 else return 0        */
    439 : { return ( getmr () > timr );
    440 : }
    441 :
    442 : Set_Vid ()
    443 : { _i_v ();                            /* initialize video         */
    444 :   return 0;
    445 : }
    446 :
    447 : void locate ( row, col ) int row ,
    448 :      col;
    449 : { _cy = row % 25;
    450 :   _cx = col % 80;
    451 :   _wrpos ( row, col );                /* use ML from CH2.ASM      */
    452 : }
    453 :
    454 : void deol ()
    455 : { _deol ();                           /* use ML from CH2.ASM      */
    456 : }
    457 :
    458 : void deos ()
    459 : { deol ();
    460 :   if ( _cy < 24 )                     /* if not last, clear       */
    461 :     { rgv.x.ax = 0x0600;
    462 :       rgv.x.bx = ( _atr << 8 );
    463 :       rgv.x.cx = ( _cy + 1 ) << 8;
    464 :       rgv.x.dx = 0x184F;
    465 :       int86 ( 0x10, & rgv, & rgv );
    466 :     }
    467 :   locate ( _cy, _cx );
    468 : }
    469 :
    470 : void cls ()
    471 : { _cls ();                            /* use ML                   */
    472 : }
    473 :
    474 : void cursor ( yn ) int yn ;
    475 : { rgv.x.cx = yn ? 0x0607 : 0x2607;    /* ON/OFF                   */
    476 :   rgv.x.ax = 0x0100;
    477 :   int86 ( 0x10, & rgv, & rgv );
    478 : }
    479 :
    480 : void revvid ( yn ) int yn ;
    481 : { if ( yn )
    482 :     _atr = _color ( 8, 7 );           /* black on white           */
    483 :   else
    484 :     _atr = _color ( 15, 0 );          /* white on black           */
    485 : }
    486 :
    487 : putchx ( c ) char c ;                 /* put char to CRT          */
    488 : { if ( c == '\n' )
    489 :     putch ( '\r' );
    490 :   putch ( c );
    491 :   return c ;
    492 : }
    493 :
    494 : Read_Keyboard ()                  /* get keyboard character       */
    495 :                                      returns -1 if none present   */
    496 : { int c ;
    497 :   if ( kbhit ())                      /* no char at all           */
    498 :     return ( getch ());
    499 :   return ( EOF );
    500 : }
    501 :
    502 : /*      MODEM SUPPORT                 */
    503 : static char mparm,
    504 :      wrk [ 80 ];
    505 :
    506 : void Init_Comm ()             /* initialize comm port stuff       */
    507 : { static int ft = 0;                  /* firstime flag            */
    508 :   if ( ft ++ == 0 )
    509 :     i_m ();
    510 :   Set_Parity ( 1 );                   /* 8,N,1                    */
    511 :   Set_Baud ( 1200 );                  /* 1200 baud                */
    512 : }
    513 :
    514 : #define B1200 0x80                    /* baudrate codes           */
    515 : #define B300 0x40
    516 :
    517 : Set_Baud ( n ) int n ;                /* n is baud rate           */
    518 : { if ( n == 300 )
    519 :     mparm = ( mparm & 0x1F ) + B300;
    520 :   else
    521 :     if ( n == 1200 )
    522 :       mparm = ( mparm & 0x1F ) + B1200;
    523 :   else
    524 :     return 0;                         /* invalid speed            */
    525 :   sprintf ( wrk, "Baud rate = %d\r\n", n );
    526 :   cputs ( wrk );
    527 :   set_mdm ( mparm );
    528 :   return n ;
    529 : }
    530 :
    531 : #define PAREVN 0x18                   /* MCR bits for commands    */
    532 : #define PARODD 0x10
    533 : #define PAROFF 0x00
    534 : #define STOP2 0x40
    535 : #define WORD8 0x03
    536 : #define WORD7 0x02
    537 : #define WORD6 0x01
    538 :
    539 : Set_Parity ( n ) int n ;              /* n is parity code         */
    540 : { static int mmode;
    541 :   if ( n == 1 )
    542 :     mmode = ( WORD8 | PAROFF );        /* off                     */
    543 :   else
    544 :     if ( n == 2 )
    545 :       mmode = ( WORD7 | PAREVN );      /* on and even             */
    546 :   else
    547 :     if ( n == 3 )
    548 :       mmode = ( WORD7 | PARODD );      /* on and odd              */
    549 :   else
    550 :     return 0;                         /* invalid code             */
    551 :   mparm = ( mparm & 0xE0 ) + mmode;
    552 :   sprintf ( wrk, "Parity is %s\r\n", ( n == 1 ? "OFF" :
    553 :                                      ( n == 2 ? "EVEN" : "ODD" )));
    554 :   cputs ( wrk );
    555 :   set_mdm ( mparm );
    556 :   return n ;
    557 : }
    558 :
    559 : Write_Modem ( c ) char c ;            /* return 1 if ok, else 0   */
    560 : { wrtmdm ( c );
    561 :   return ( 1 );                       /* never any error          */
    562 : }
    563 :
    564 : Read_Modem ()
    565 : { return ( rdmdm ());                 /* from int bfr             */
    566 : }
    567 :
    568 : void Term_Comm ()             /* uninstall comm port drivers      */
    569 : { u_m ();
    570 : }
    571 :
    572 : /* end of cterm.c */



───────────────────────────────────────────────────────────────────────────


Figure 6-9.
CTERM.H.


/* CTERM.H - function prototypes for CTERM.C */
int Wants_To_Abort(void);
void main(int ,char * *);
int docmd(void);
int kbd_wait(void);
int kb_file(void);
int esc(void);
FILE *getfil(void);
void getnam(char *,int );
char *addext(char *,char *);
void put_cap(char );
void cap_flush(void);
long getmr(void);
void Delay(int );
void Start_Timer(int );
int Timer_Expired(void);
int Set_Vid(void);
void locate(int ,int );
void deol(void);
void deos(void);
void cls(void);
void cursor(int );
void revvid(int );
int putchx(char );
int Read_Keyboard(void);
void Init_Comm(void);
int Set_Baud(int );
int Set_Parity(int );
int Write_Modem(char );
int Read_Modem(void);
void Term_Comm(void);

/* CH1.ASM functions - modem interfacing */
void i_m(void);
void set_mdm(int);
void wrtmdm(int);
void Send_Byte(int);
int  rdmdm(void);
void u_m(void);

/* CH1A.ASM functions - exception handlers */
void set_int (void);
void rst_int (void);
int broke (void);

/* CH2.ASM functions - video interfacing */
void _i_v(void);
int  _wrpos(int, int);
void _deol(void);
void _cls(void);
int  _color(int, int);



───────────────────────────────────────────────────────────────────────────


Figure 8-6.
Subroutines illustrating Interrupt 21H Functions 4EH and 4FH.


                TITLE   'DIRS.ASM'

;
; Subroutines for DIRDUMP.C
;


ARG1            EQU     [bp + 4]        ; stack frame addressing for C argume
ARG2            EQU     [bp + 6]


_TEXT           SEGMENT byte public 'CODE'
                ASSUME  cs:_TEXT

;-------------------------------------------------------------------------
;
; void SetDTA( DTA );
;         char *DTA;
;
;-------------------------------------------------------------------------

                PUBLIC  _SetDTA
_SetDTA         PROC    near

                push    bp
                mov     bp,sp

                mov     dx,ARG1         ; DS:DX -> DTA
                mov     ah,1Ah          ; AH = INT 21H function number
                int     21h             ; pass DTA to MS-DOS

                pop     bp
                ret

_SetDTA         ENDP

;-------------------------------------------------------------------------
;
; int GetCurrentDir( *path );       /* returns error code */
;         char *path;               /* pointer to buffer to contain path */
;
;-------------------------------------------------------------------------

                PUBLIC  _GetCurrentDir
_GetCurrentDir  PROC    near

                push    bp
                mov     bp,sp
                push    si

                mov     si,ARG1         ; DS:SI -> buffer
                xor     dl,dl           ; DL = 0 (default drive number)
                mov     ah,47h          ; AH = INT 21H function number
                int     21h             ; call MS-DOS; AX = error code
                jc      L01             ; jump if error

                xor     ax,ax           ; no error, return AX = 0

L01:            pop     si
                pop     bp
                ret

_GetCurrentDir  ENDP

;-------------------------------------------------------------------------
;
; int FindFirstFile( path, attribute ); /* returns error code */
;         char *path;
;         int  attribute;
;
;-------------------------------------------------------------------------

                PUBLIC  _FindFirstFile
_FindFirstFile  PROC    near

                push    bp
                mov     bp,sp

                mov     dx,ARG1         ; DS:DX -> path
                mov     cx,ARG2         ; CX = attribute
                mov     ah,4Eh          ; AH = INT 21H function number
                int     21h             ; call MS-DOS; AX = error code
                jc      L02             ; jump if error
                xor     ax,ax           ; no error, return AX = 0

L02:            pop     bp
                ret

_FindFirstFile  ENDP

;-------------------------------------------------------------------------
;
; int FindNextFile();                   /* returns error code */
;
;-------------------------------------------------------------------------

                PUBLIC  _FindNextFile
_FindNextFile   PROC    near

                push    bp
                mov     bp,sp

                mov     ah,4Fh          ; AH = INT 21H function number
                int     21h             ; call MS-DOS; AX = error code
                jc      L03             ; jump if error

                xor     ax,ax           ; if no error, set AX = 0


L03:            pop     bp
                ret

_FindNextFile   ENDP

_TEXT           ENDS


_DATA           SEGMENT word public 'DATA'

CurrentDir      DB      64 dup(?)
DTA             DB      64 dup(?)

_DATA           ENDS

                END



───────────────────────────────────────────────────────────────────────────


Figure 8-7.
The complete DIRDUMP.C program.


/* DIRDUMP.C */

#define AllAttributes   0x3F            /* bits set for all attributes */

main()
{
        static  char CurrentDir[64];
        int     ErrorCode;
        int     FileCount = 0;

        struct
        {
            char    reserved[21];
            char    attrib;
            int     time;
            int     date;
            long    size;
            char    name[13];
        }         DTA;

/* display current directory name */

        ErrorCode = GetCurrentDir( CurrentDir );
        if( ErrorCode )
        {
            printf( "\nError %d:  GetCurrentDir", ErrorCode );
            exit( 1 );
        }

        printf( "\nCurrent directory is \\%s", CurrentDir );


/* display files and attributes */

        SetDTA( &DTA );                 /* pass DTA to MS-DOS */

        ErrorCode = FindFirstFile( "*.*", AllAttributes );

        while( !ErrorCode )
        {
            printf( "\n%12s -- ", DTA.name );
            ShowAttributes( DTA.attrib );
            ++FileCount;

            ErrorCode = FindNextFile( );
        }

/* display file count and exit */

        printf( "\nCurrent directory contains %d files\n", FileCount );
        return( 0 );
}

ShowAttributes( a )
int     a;
{
        int     i;
        int     mask = 1;

        static char *AttribName[] =
        {
            "read-only ",
            "hidden ",
            "system ",
            "volume ",
            "subdirectory ",
            "archive "
        };


        for( i=0; i<6; i++ )          /* test each attribute bit */
        {
            if( a & mask )
            printf( AttribName[i] );  /* display a message if bit is set */
            mask = mask << 1;
        }
}



───────────────────────────────────────────────────────────────────────────


Figure 8-8.
Subroutines for manipulating volume labels.


                TITLE   'VOLS.ASM'

;-------------------------------------------------------------------------
;
; C-callable routines for manipulating MS-DOS volume labels.
; Note: These routines modify the current DTA address.
;
;-------------------------------------------------------------------------

ARG1            EQU     [bp + 4]        ; stack frame addressing

DGROUP          GROUP   _DATA

_TEXT           SEGMENT byte public 'CODE'
                ASSUME  cs:_TEXT,ds:DGROUP

;--------------------------------------------------------------------------
;
; char *GetVolLabel();         /* returns pointer to volume label name */
;
;-------------------------------------------------------------------------

                PUBLIC  _GetVolLabel
_GetVolLabel    PROC    near

                push    bp
                mov     bp,sp
                push    si
                push    di

                call    SetDTA          ; pass DTA address to MS-DOS
                mov     dx,offset DGROUP:ExtendedFCB
                mov     ah,11h          ; AH = INT 21H function number
                int     21h             ; Search for First Entry
                test    al,al
                jnz     L01
                                        ; label found so make a copy
                mov     si,offset DGROUP:DTA + 8
                mov     di,offset DGROUP:VolLabel
                call    CopyName
                mov     ax,offset DGROUP:VolLabel   ; return copy's address
                jmp     short L02

L01:            xor     ax,ax           ; no label, return 0 (null pointer)

L02:            pop     di
                pop     si
                pop     bp
                ret

_GetVolLabel    ENDP

;-------------------------------------------------------------------------
;
; int RenameVolLabel( label );       /* returns error code */
;         char *label;               /* pointer to new volume label name */
;
;-------------------------------------------------------------------------

                PUBLIC  _RenameVolLabel
_RenameVolLabel PROC    near

                push    bp
                mov     bp,sp
                push    si
                push    di
                mov     si,offset DGROUP:VolLabel   ; DS:SI -> old
                                                    ; volume name
                mov     di,offset DGROUP:Name1
                call    CopyName        ; copy old name to FCB

                mov     si,ARG1
                mov     di,offset DGROUP:Name2
                call    CopyName        ; copy new name into FCB

                mov     dx,offset DGROUP:ExtendedFCB    ; DS:DX -> FCB
                mov     ah,17h       ; AH = INT 21H function number
                int     21h          ; rename
                xor     ah,ah        ; AX = 00H (success) or 0FFH (failure)

                pop     di           ; restore registers and return
                pop     si
                pop     bp
                ret

_RenameVolLabel ENDP

;-------------------------------------------------------------------------
;
; int NewVolLabel( label );             /* returns error code */
;         char *label;                  /* pointer to new volume label
;                                       /* name */
;
;-------------------------------------------------------------------------

                PUBLIC  _NewVolLabel
_NewVolLabel    PROC    near

                push    bp
                mov     bp,sp
                push    si
                push    di

                mov     si,ARG1
                mov     di,offset DGROUP:Name1
                call    CopyName        ; copy new name to FCB

                mov     dx,offset DGROUP:ExtendedFCB
                mov     ah,16h          ; AH = INT 21H function number
                int     21h             ; create directory entry
                xor     ah,ah           ; AX = 00H (success) or 0FFH
                                        ; (failure)

                pop     di              ; restore registers and return
                pop     si
                pop     bp
                ret

_NewVolLabel    ENDP

;-------------------------------------------------------------------------
;
; int DeleteVolLabel();                 /* returns error code */
;
;-------------------------------------------------------------------------

                PUBLIC  _DeleteVolLabel
_DeleteVolLabel PROC    near

                push    bp
                mov     bp,sp
                push    si
                push    di

                mov     si,offset DGROUP:VolLabel
                mov     di,offset DGROUP:Name1
                call    CopyName        ; copy current volume name to FCB

                mov     dx,offset DGROUP:ExtendedFCB
                mov     ah,13h          ; AH = INT 21H function number
                int     21h             ; delete directory entry
                xor     ah,ah           ; AX = 00H (success) or 0FFH
                                        ; (failure)

                pop     di              ; restore registers and return
                pop     si
                pop     bp
                ret

_DeleteVolLabel ENDP

;-------------------------------------------------------------------------
;
; miscellaneous subroutines
;
;-------------------------------------------------------------------------

SetDTA          PROC    near

                push    ax              ; preserve registers used
                push    dx

                mov     dx,offset DGROUP:DTA    ; DS:DX -> DTA
                mov     ah,1Ah          ; AH = INT 21H function number
                int     21h             ; set DTA

                pop     dx              ; restore registers and return
                pop     ax
                ret

SetDTA          ENDP

CopyName        PROC    near            ; Caller:  SI -> ASCIIZ source
                                        ;          DI -> destination
                push    ds
                pop     es              ; ES = DGROUP
                mov     cx,11           ; length of name field

L11:            lodsb                   ; copy new name into FCB ..
                test    al,al
                jz      L12             ; .. until null character is
                                        ; reached
                stosb
                loop    L11

L12:            mov     al,' '          ; pad new name with blanks
                rep     stosb
                ret

CopyName        ENDP

_TEXT           ENDS


_DATA           SEGMENT word public 'DATA'

VolLabel        DB      11 dup(0),0

ExtendedFCB     DB      0FFh            ; must be 0FFH for extended FCB
                DB      5 dup(0)        ; (reserved)
                DB      1000b           ; attribute byte (bit 3 = 1)
                DB      0               ; default drive ID
Name1           DB      11 dup('?')     ; global wildcard name
                DB      5 dup(0)        ; (unused)
Name2           DB      11 dup(0)       ; second name (for renaming entry)
                DB      9 dup(0)        ; (unused)

DTA             DB      64 dup(0)

_DATA           ENDS

                END



───────────────────────────────────────────────────────────────────────────


Figure 9-2.
An example of a .COM program releasing excess memory after it
receives control from MS-DOS. Interrupt 21H Function 4AH is called
with the segment address of the program's PSP in register ES and the
number of paragraphs of memory to retain in register BX.


        .
        .
        .
_TEXT   segment para public 'CODE'

        org     100h

        assume  cs:_TEXT,ds:_TEXT,es:_TEXT,ss:_TEXT

main    proc    near            ; entry point from MS-DOS
                                ; CS = DS = ES = SS = PSP

                                ; first move our stack
        mov     sp,offset stk   ; to a safe place...

                                ; now release extra memory...
        mov     bx,offset stk   ; calculate paragraphs to keep
        mov     cl,4            ; (divide offset of end of
        shr     bx,cl           ; program by 16 and round up)
        inc     bx
        mov     ah,4ah          ; Fxn 4AH = resize mem block
        int     21h             ; transfer to MS-DOS
        jc      error           ; jump if resize failed
        .
        .                       ; otherwise go on with work...
        .
main    endp

        .
        .
        .

        dw      64 dup (?)
stk     equ     $               ; base of new stack area

_TEXT   ends

        end     main            ; defines program entry point



───────────────────────────────────────────────────────────────────────────


Figure 9-3.
An example of a .EXE program releasing excess memory after it
receives control from MS-DOS. This particular code sequence depends
on the segment order shown. When a .EXE program is linked from many
different object modules, other techniques may be needed  to determine
the amount of memory occupied by the program  at run time.


_TEXT   segment word public 'CODE'     ; executable code segment

        assume  cs:_TEXT,ds:_DATA,ss:_STACK

main    proc    far             ; entry point from MS-DOS
                                ; CS = _TEXT segment,
                                ; DS = ES = PSP

        mov     ax,_DATA        ; set DS = our data segment
        mov     ds,ax

                                ; give back extra memory...
        mov     ax,es           ; let AX = segment of PSP base
        mov     bx,ss           ; and BX = segment of stack base
        sub     bx,ax           ; reserve seg stack - seg psp
        add     bx,stksize/16   ; plus paragraphs of stack
        inc     bx              ; round up
        mov     ah,4ah          ; Fxn 4AH = resize memory block
        int     21h             ; transfer to MS-DOS
        jc      error           ; jump if resize failed

        .
        .
        .

main    endp

_TEXT   ends

_DATA   segment word public 'DATA'     ; static & variable data

        .
        .
        .

_DATA   ends

STACK   segment para stack 'STACK'

        db      stksize dup (?)

STACK   ends

        end     main                   ; defines program entry point



───────────────────────────────────────────────────────────────────────────


Figure 9-6.
Testing for the presence of the Expanded Memory Manager with the MS-DOS
Open File or Device (Interrupt 21H Function 3DH) and IOCTL (Interrupt 21H
Function 44H) functions.

        .
        .
        .
                                ; attempt to "open" EMM...
        mov     dx,seg emm_name ; DS:DX = address of name
        mov     ds,dx           ; of EMM
        mov     dx,offset emm_name
        mov     ax,3d00h        ; Fxn 3DH, Mode = 00H
                                ; = open, read-only
        int     21h             ; transfer to MS-DOS
        jc      error           ; jump if open failed

                                ; open succeeded, make sure
                                ; it was not a file...
        mov     bx,ax           ; BX = handle from open
        mov     ax,4400h        ; Fxn 44H Subfxn 00H
                                ; = IOCTL Get Device Information
        int     21h             ; transfer to MS-DOS
        jc      error           ; jump if IOCTL call failed
        and     dx,80h          ; Bit 7 = 1 if character device
        jz      error           ; jump if it was a file

                                ; EMM is present, make sure
                                ; it is available...
                                ; (BX still contains handle)
        mov     ax,4407h        ; Fxn 44H Subfxn 07H
                                ; = IOCTL Get Output Status
        int     21h             ; transfer to MS-DOS
        jc      error           ; jump if IOCTL call failed
        or      al,al           ; test device status
        jz      error           ; if AL = 0 EMM is not available

                                ; now close handle ...
                                ; (BX still contains handle)
        mov     ah,3eh          ; Fxn 3EH = Close
        int     21h             ; transfer to MS-DOS
        jc      error           ; jump if close failed
        .
        .
        .

emm_name db     'EMMXXXX0',0    ; guaranteed device name for EMM



───────────────────────────────────────────────────────────────────────────


Figure 9-7.
Testing for the presence of the Expanded Memory Manager by inspecting the
name field in the device driver header.


emm_int equ     67h             ; EMM software interrupt

        .
        .
        .
                                ; first fetch contents of
                                ; EMM interrupt vector...
        mov     al,emm_int      ; AL = EMM int number
        mov     ah,35h          ; Fxn 35H = get vector
        int     21h             ; transfer to MS-DOS
                                ; now ES:BX = handler address

                                ; assume ES:0000 points
                                ; to base of the EMM...
        mov     di,10           ; ES:DI = address of name
                                ; field in device header
        mov     si,seg emm_name ; DS:SI = address of
        mov     ds,si           ; expected EMM driver name
        mov     si,offset emm_name
        mov     cx,8            ; length of name field
        cld
        repz cmpsb              ; compare names...
        jnz     error           ; jump if driver absent
        .
        .
        .


emm_name db     'EMMXXXX0'      ; guaranteed device name for EMM



───────────────────────────────────────────────────────────────────────────


Figure 9-8.
A program skeleton for the use of expanded memory. This code assumes
that the presence of the Expanded Memory Manager has already been ver-
ified with one of the techniques shown in Figures 9-6 and 9-7.


        .
        .
        .
        mov     ah,40h          ; test EMM status
        int     67h
        or      ah,ah
        jnz     error           ; jump if bad status from EMM

        mov     ah,46h          ; check EMM version
        int     67h
        or      ah,ah
        jnz     error           ; jump if couldn't get version
        cmp     al,30h          ; make sure at least ver. 3.0
        jb      error           ; jump if wrong EMM version

        mov     ah,41h          ; get page frame segment
        int     67h
        or      ah,ah
        jnz     error           ; jump if failed to get frame
        mov     page_frame,bx   ; save segment of page frame

        mov     ah,42h          ; get no. of available pages
        int     67h
        or      ah,ah
        jnz     error           ; jump if get pages error
        mov     total_pages,dx  ; save total EMM pages
        mov     avail_pages,bx  ; save available EMM pages
        or      bx,bx
        jz      error           ; abort if no pages available

        mov     ah,43h          ; try to allocate EMM pages
        mov     bx,needed_pages
        int     67h             ; if allocation is successful
        or      ah,ah
        jnz     error           ; jump if allocation failed

        mov     emm_handle,dx   ; save handle for allocated pages

        .
        .                       ; now we are ready for other
        .                       ; processing using EMM pages
        .
                                ; map in EMM memory page...
        mov     bx,log_page     ; BX <- EMM logical page number
        mov     al,phys_page    ; AL <- EMM physical page (0-3)
        mov     dx,emm_handle   ; EMM handle for our pages
        mov     ah,44h          ; Fxn 44H = map EMM page
        int     67h
        or      ah,ah
        jnz     error           ; jump if mapping error

        .
        .
        .
                                ; program ready to terminate,
                                ; give up allocated EMM pages...
        mov     dx,emm_handle   ; handle for our pages
        mov     ah,45h          ; EMM Fxn 45H = release pages
        int     67h
        or      ah,ah
        jnz     error           ; jump if release failed
        .
        .
        .



───────────────────────────────────────────────────────────────────────────


Figure 9-9.
Demonstration of a block move from extended memory to conventional memory
using the ROM BIOS routine. The procedure getblk accepts a source address
in extended memory, a destination address in conventional memory, a length
in bytes, and the segment and offset of a block move descriptor table. The
extended memory address is a linear 32-bit address, of which only the lower
24 bits are significant; the conventional-memory address is a segment and
offset. The getblk routine converts the destination segment and off- set
to a linear address, builds the appropriate fields in the block move
descriptor table, invokes the ROM BIOS routine to perform the transfer,
and returns the status in the AH register.


                                ; block move descriptor table
bmdt    db      8 dup (0)       ; dummy descriptor
        db      8 dup (0)       ; GDT descriptor
        db      8 dup (0)       ; source segment descriptor
        db      8 dup (0)       ; destination segment descriptor
        db      8 dup (0)       ; BIOS CS segment descriptor
        db      8 dup (0)       ; BIOS SS segment descriptor

buff    db      80h dup (0)     ; buffer to receive data

        .
        .
        .
        mov     dx,10h          ; DX:AX = source extended memory
        mov     ax,0            ; address 100000H (1 MB)
        mov     bx,seg buff     ; DS:BX = destination conventional
        mov     ds,bx           ; memory address
        mov     bx,offset buff
        mov     cx,80h          ; CX = length to move (bytes)
        mov     si,seg bmdt     ; ES:SI = block move descriptor table
        mov     es,si
        mov     si,offset bmdt
        call    getblk          ; get block from extended memory
        or      ah,ah           ; test status
        jnz     error           ; jump if block move failed
        .
        .
        .

getblk  proc    near            ; transfer block from extended
                                ; memory to real memory
                                ; call with
                                ; DX:AX = extended memory address
                                ; DS:BX = destination buffer
                                ;    CX = length (bytes)
                                ; ES:SI = block move descriptor table
                                ; returns
                                ;    AH = 0 if transfer OK
        mov     es:[si+10h],cx  ; store length in descriptors
        mov     es:[si+18h],cx
                                ; store access rights bytes
        mov     byte ptr es:[si+15h],93h
        mov     byte ptr es:[si+1dh],93h
                                ; source (extended memory) address
        mov     es:[si+12h],ax
        mov     es:[si+14h],dl
                                ; destination (conv memory) address
        mov     ax,ds           ; segment * 16
        mov     dx,16
        mul     dx
        add     ax,bx           ; + offset -> linear address
        adc     dx,0
        mov     es:[si+1ah],ax
        mov     es:[si+1ch],dl

        shr     cx,1            ; convert length to words
        mov     ah,87h          ; Fxn 87H = block move
        int     15h             ; transfer to ROM BIOS

        ret                     ; back to caller



───────────────────────────────────────────────────────────────────────────


Figure 9-4.
A skeleton example of dynamic memory allocation. The program requests a
32 KB memory block, uses it to copy its working file to a backup file, and
then releases the memory block. Note the use of ASSUME directives to force
the assembler to generate proper segment overrides on references to
variables containing file handles.


        .
        .
        .
        mov     bx,800h         ; 800H paragraphs = 32 KB
        mov     ah,48h          ; Fxn 48H = allocate block
        int     21h             ; transfer to MS-DOS
        jc      error           ; jump if allocation failed
        mov     bufseg,ax       ; save segment of block

                                ; open working file...
        mov     dx,offset file1 ; DS:DX = filename address
        mov     ax,3d00h        ; Fxn 3DH = open, read only
        int     21h             ; transfer to MS-DOS
        jc      error           ; jump if open failed
        mov     handle1,ax      ; save handle for work file
                                ; create backup file...
        mov     dx,offset file2 ; DS:DX = filename address
        mov     cx,0            ; CX = attribute (normal)
        mov     ah,3ch          ; Fxn 3CH = create file
        int     21h             ; transfer to MS-DOS
        jc      error           ; jump if create failed
        mov     handle2,ax      ; save handle for backup file

        push    ds              ; set ES = our data segment
        pop     es
        mov     ds,bufseg       ; set DS:DX = allocated block
        xor     dx,dx

        assume  ds:NOTHING,es:_DATA     ; tell assembler

next:                           ; read working file...
        mov     bx,handle1      ; handle for work file
        mov     cx,8000h        ; try to read 32 KB
        mov     ah,3fh          ; Fxn 3FH = read
        int     21h             ; transfer to MS-DOS
        jc      error           ; jump if read failed
        or      ax,ax           ; was end of file reached?
        jz      done            ; yes, exit this loop

                                ; now write backup file...
        mov     cx,ax           ; set write length = read length
        mov     bx,handle2      ; handle for backup file
        mov     ah,40h          ; Fxn 40H = write
        int     21h             ; transfer to MS-DOS
        jc      error           ; jump if write failed
        cmp     ax,cx           ; was write complete?
        jne     error           ; no, disk must be full
        jmp     next            ; transfer another record

done:   push    es              ; restore DS = data segment
        pop     ds

        assume  ds:_DATA,es:NOTHING     ; tell assembler

                                ; release allocated block...
        mov     es,bufseg       ; segment base of block
        mov     ah,49h          ; Fxn 49H = release block
        int     21h             ; transfer to MS-DOS
        jc      error           ; (should never fail)

                                ; now close backup file...
        mov     bx,handle2      ; handle for backup file
        mov     ah,3eh          ; Fxn 3EH = close
        int     21h             ; transfer to MS-DOS
        jc      error           ; jump if close failed

        .
        .
        .

file1   db      'MYFILE.DAT',0  ; name of working file
file2   db      'MYFILE.BAK',0  ; name of backup file

handle1 dw      ?               ; handle for working file
handle2 dw      ?               ; handle for backup file
bufseg  dw      ?               ; segment of allocated block



───────────────────────────────────────────────────────────────────────────


Figure 10-3.
PARENT.ASM, source code for PARENT.EXE.


            name      parent
            title     'PARENT --- demonstrate EXEC call'
;
; PARENT.EXE --- demonstration of EXEC to run process
;
; Uses MS-DOS EXEC (Int 21H Function 4BH Subfunction 00H)
; to load and execute a child process named CHILD.EXE,
; then displays CHILD's return code.
;
; Ray Duncan, June 1987
;

stdin   equ     0                       ; standard input
stdout  equ     1                       ; standard output
stderr  equ     2                       ; standard error

stksize equ     128                     ; size of stack

cr      equ     0dh                     ; ASCII carriage return
lf      equ     0ah                     ; ASCII linefeed


DGROUP  group   _DATA,_ENVIR,_STACK


_TEXT   segment byte public 'CODE'     ; executable code segment

        assume  cs:_TEXT,ds:_DATA,ss:_STACK


stk_seg dw      ?                       ; original SS contents
stk_ptr dw      ?                       ; original SP contents


main    proc    far                     ; entry point from MS-DOS

        mov     ax,_DATA                ; set DS = our data segment
        mov     ds,ax

                                        ; now give back extra memory
                                        ; so child has somewhere to run...
        mov     ax,es                   ; let AX = segment of PSP base
        mov     bx,ss                   ; and BX = segment of stack base
        sub     bx,ax                   ; reserve seg stack - seg psp
        add     bx,stksize/16           ; plus paragraphs of stack
        mov     ah,4ah                  ; fxn 4AH = modify memory block
        int     21h
        jc      main1
                                        ; display parent message ...
        mov     dx,offset DGROUP:msg1   ; DS:DX = address of message
        mov     cx,msg1_len             ; CX = length of message
        call    pmsg

        push    ds                      ; save parent's data segment
        mov     stk_seg,ss              ; save parent's stack pointer
        mov     stk_ptr,sp

                                        ; now EXEC the child process...
        mov     ax,ds                   ; set ES = DS
        mov     es,ax
        mov     dx,offset DGROUP:cname  ; DS:DX = child pathname
        mov     bx,offset DGROUP:pars   ; ES:BX = parameter block
        mov     ax,4b00h                ; function 4BH subfunction 00H
        int     21h                     ; transfer to MS-DOS

        cli                             ; (for bug in some early 8088s)
        mov     ss,stk_seg              ; restore parent's stack pointer
        mov     sp,stk_ptr
        sti                             ; (for bug in some early 8088s)
        pop     ds                      ; restore DS = our data segment

        jc      main2                   ; jump if EXEC failed

                                        ; otherwise EXEC succeeded,
                                        ; convert and display child's
                                        ; termination and return codes...
        mov     ah,4dh                  ; fxn 4DH = get return code
        int     21h                     ; transfer to MS-DOS
        xchg    al,ah                   ; convert termination code
        mov     bx,offset DGROUP:msg4a
        call    b2hex
        mov     al,ah                   ; get back return code
        mov     bx,offset DGROUP:msg4b  ; and convert it
        call    b2hex
        mov     dx,offset DGROUP:msg4   ; DS:DX = address of message
        mov     cx,msg4_len             ; CX = length of message
        call    pmsg                    ; display it

        mov     ax,4c00h                ; no error, terminate program
        int     21h                     ; with return code = 0

main1:  mov     bx,offset DGROUP:msg2a  ; convert error code
        call    b2hex
        mov     dx,offset DGROUP:msg2   ; display message 'Memory
        mov     cx,msg2_len             ; resize failed...'
        call    pmsg
        jmp     main3

main2:  mov     bx,offset DGROUP:msg3a  ; convert error code
        call    b2hex
        mov     dx,offset DGROUP:msg3   ; display message 'EXEC
        mov     cx,msg3_len             ; call failed...'
        call    pmsg

main3:  mov     ax,4c01h                ; error, terminate program
        int     21h                     ; with return code = 1

main    endp                            ; end of main procedure


b2hex   proc    near                    ; convert byte to hex ASCII
                                        ; call with AL = binary value
                                        ;           BX = addr to store
                                        ;           string
        push    ax
        shr     al,1
        shr     al,1
        shr     al,1
        shr     al,1
        call    ascii                   ; become first ASCII character
        mov     [bx],al                 ; store it
        pop     ax
        and     al,0fh                  ; isolate lower 4 bits, which
        call    ascii                   ; become the second ASCII character
        mov     [bx+1],al               ; store it
        ret
b2hex   endp


ascii   proc    near                    ; convert value 00-0FH in AL
        add     al,'0'                  ; into a "hex ASCII" character
        cmp     al,'9'
        jle     ascii2                  ; jump if in range 00-09H,
        add     al,'A'-'9'-1            ; offset it to range 0A-0FH,

ascii2: ret                             ; return ASCII char. in AL
ascii   endp


pmsg    proc    near                    ; displays message on standard
                                        ; output
                                        ; call with DS:DX = address,
                                        ;              CX = length
        mov     bx,stdout               ; BX = standard output handle
        mov     ah,40h                  ; function 40H = write file/device
        int     21h                     ; transfer to MS-DOS
        ret                             ; back to caller

pmsg    endp

_TEXT   ends


_DATA   segment para public 'DATA'      ; static & variable data segment

cname   db      'CHILD.EXE',0           ; pathname of child process

pars    dw      _ENVIR                  ; segment of environment block
        dd      tail                    ; long address, command tail
        dd      fcb1                    ; long address, default FCB #1
        dd      fcb2                    ; long address, default FCB #2

tail    db      fcb1-tail-2             ; command tail for child
        db      'dummy command tail',cr

fcb1    db      0                       ; copied into default FCB #1 in
        db      11 dup (' ')            ; child's program segment prefix
        db      25 dup (0)

fcb2    db      0                       ; copied into default FCB #2 in
        db      11 dup (' ')            ; child's program segment prefix
        db      25 dup (0)

msg1    db      cr,lf,'Parent executing!',cr,lf
msg1_len equ    $-msg1

msg2    db      cr,lf,'Memory resize failed, error code='
msg2a   db      'xxh.',cr,lf
msg2_len equ    $-msg2

msg3    db      cr,lf,'EXEC call failed, error code='
msg3a   db      'xxh.',cr,lf
msg3_len equ    $-msg3

msg4    db      cr,lf,'Parent regained control!'
        db      cr,lf,'Child termination type='
msg4a   db      'xxh, return code='
msg4b   db      'xxh.',cr,lf
msg4_len equ    $-msg4

_DATA   ends


_ENVIR  segment para public 'DATA'      ; example environment block
                                        ; to be passed to child
        db      'PATH=',0               ; basic PATH, PROMPT,
        db      'PROMPT=$p$_$n$g',0     ; and COMSPEC strings
        db      'COMSPEC=C:\COMMAND.COM',0
        db      0                       ; extra null terminates block

_ENVIR  ends


_STACK  segment para stack 'STACK'

        db      stksize dup (?)

_STACK  ends


        end     main                    ; defines program entry point



───────────────────────────────────────────────────────────────────────────


Figure 10-4.
CHILD.ASM, source code for CHILD.EXE.


            name      child
            title     'CHILD process'
;
; CHILD.EXE --- a simple process loaded by PARENT.EXE
; to demonstrate the MS-DOS EXEC call, Subfunction 00H.
;
; Ray Duncan, June 1987
;

stdin   equ     0                       ; standard input
stdout  equ     1                       ; standard output
stderr  equ     2                       ; standard error

cr      equ     0dh                     ; ASCII carriage return
lf      equ     0ah                     ; ASCII linefeed


DGROUP  group   _DATA,STACK


_TEXT   segment byte public 'CODE'      ; executable code segment

        assume  cs:_TEXT,ds:_DATA,ss:STACK

main    proc    far                     ; entry point from MS-DOS

        mov     ax,_DATA                ; set DS = our data segment
        mov     ds,ax

                                        ; display child message ...

        mov     dx,offset msg           ; DS:DX = address of message
        mov     cx,msg_len              ; CX = length of message
        mov     bx,stdout               ; BX = standard output handle
        mov     ah,40h                  ; AH = fxn 40H, write file/device
        int     21h                     ; transfer to MS-DOS
        jc      main2                   ; jump if any error

        mov     ax,4c00h                ; no error, terminate child
        int     21h                     ; with return code = 0

main2:  mov     ax,4c01h                ; error, terminate child
        int     21h                     ; with return code = 1

main    endp                            ; end of main procedure

_TEXT   ends


_DATA   segment para public 'DATA'     ; static & variable data segment

msg     db      cr,lf,'Child executing!',cr,lf
msg_len equ     $-msg

_DATA   ends


STACK   segment para stack 'STACK'

        dw      64 dup (?)

STACK   ends


        end     main                    ; defines program entry point



───────────────────────────────────────────────────────────────────────────


Figure 10-5.
ROOT.ASM, source code for ROOT.EXE.


            name      root
            title     'ROOT --- demonstrate EXEC overlay'
;
; ROOT.EXE --- demonstration of EXEC for overlays
;
; Uses MS-DOS EXEC (Int 21H Function 4BH Subfunction 03H)
; to load an overlay named OVERLAY.OVL, calls a routine
; within the OVERLAY, then recovers control and terminates.
;
; Ray Duncan, June 1987
;

stdin   equ     0                       ; standard input
stdout  equ     1                       ; standard output
stderr  equ     2                       ; standard error

stksize equ     128                     ; size of stack

cr      equ     0dh                     ; ASCII carriage return
lf      equ     0ah                     ; ASCII linefeed


DGROUP  group   _DATA,_STACK


_TEXT   segment byte public 'CODE'      ; executable code segment

        assume  cs:_TEXT,ds:_DATA,ss:_STACK


stk_seg dw      ?                       ; original SS contents
stk_ptr dw      ?                       ; original SP contents

main    proc    far                     ; entry point from MS-DOS

        mov     ax,_DATA                ; set DS = our data segment
        mov     ds,ax

                                        ; now give back extra memory
        mov     ax,es                   ; AX = segment of PSP base
        mov     bx,ss                   ; BX = segment of stack base
        sub     bx,ax                   ; reserve seg stack - seg psp
        add     bx,stksize/16           ; plus paragraphs of stack
        mov     ah,4ah                  ; fxn 4AH = modify memory block
        int     21h                     ; transfer to MS-DOS
        jc      main1                   ; jump if resize failed

                                        ; display message 'Root
                                        ; segment executing...'
        mov     dx,offset DGROUP:msg1   ; DS:DX = address of message
        mov     cx,msg1_len             ; CX = length of message
        call    pmsg

                                        ; allocate memory for overlay
        mov     bx,1000h                ; get 64 KB (4096 paragraphs)
        mov     ah,48h                  ; fxn 48H, allocate mem block
        int     21h                     ; transfer to MS-DOS
        jc      main2                   ; jump if allocation failed

        mov     pars,ax                 ; set load address for overlay
        mov     pars+2,ax               ; set relocation segment for
                                        ; overlay
        mov     word ptr entry+2,ax     ; set segment of entry point

        push    ds                      ; save root's data segment
        mov     stk_seg,ss              ; save root's stack pointer
        mov     stk_ptr,sp

                                        ; now use EXEC to load overlay
        mov     ax,ds                   ; set ES = DS
        mov     es,ax
        mov     dx,offset DGROUP:oname  ; DS:DX = overlay pathname
        mov     bx,offset DGROUP:pars   ; ES:BX = parameter block
        mov     ax,4b03h                ; function 4BH, subfunction 03H
        int     21h                     ; transfer to MS-DOS

        cli                             ; (for bug in some early 8088s)
        mov     ss,stk_seg              ; restore root's stack pointer
        mov     sp,stk_ptr
        sti                             ; (for bug in some early 8088s)
        pop     ds                      ; restore DS = our data segment

        jc      main3                   ; jump if EXEC failed

                                        ; otherwise EXEC succeeded...

        push    ds                      ; save our data segment
        call    dword ptr entry         ; now call the overlay
        pop     ds                      ; restore our data segment

                                        ; display message that root
                                        ; segment regained control...
        mov     dx,offset DGROUP:msg5   ; DS:DX = address of message
        mov     cx,msg5_len             ; CX = length of message
        call    pmsg                    ; display it

        mov     ax,4c00h                ; no error, terminate program
        int     21h                     ; with return code = 0

main1:  mov     bx,offset DGROUP:msg2a  ; convert error code
        call    b2hex
        mov     dx,offset DGROUP:msg2   ; display message 'Memory
        mov     cx,msg2_len             ; resize failed...'
        call    pmsg
        jmp     main4

main2:  mov     bx,offset DGROUP:msg3a  ; convert error code
        call    b2hex
        mov     dx,offset DGROUP:msg3   ; display message 'Memory
        mov     cx,msg3_len             ; allocation failed...'
        call    pmsg
        jmp     main4

main3:  mov     bx,offset DGROUP:msg4a  ; convert error code
        call    b2hex
        mov     dx,offset DGROUP:msg4   ; display message 'EXEC
        mov     cx,msg4_len             ; call failed...'
        call    pmsg

main4:  mov     ax,4c01h                ; error, terminate program
        int     21h                     ; with return code = 1

main    endp                            ; end of main procedure


b2hex   proc    near                    ; convert byte to hex ASCII
                                        ; call with AL = binary value
                                        ; BX = addr to store string
        push    ax
        shr     al,1
        shr     al,1
        shr     al,1
        shr     al,1
        call    ascii                   ; become first ASCII character
        mov     [bx],al                 ; store it
        pop     ax
        and     al,0fh                  ; isolate lower 4 bits, which
        call    ascii                   ; become the second ASCII character
        mov     [bx+1],al               ; store it
        ret
b2hex   endp


ascii   proc    near                    ; convert value 00-0FH in AL
        add     al,'0'                  ; into a "hex ASCII" character
        cmp     al,'9'
        jle     ascii2                  ; jump if in range 00-09H,
        add     al,'A'-'9'-1            ; offset it to range 0A-0FH,
ascii2: ret                             ; return ASCII char. in AL.
ascii   endp


pmsg    proc    near                    ; displays message on
                                        ; standard output
                                        ; call with DS:DX = address,
                                        ;              CX = length

        mov     bx,stdout               ; BX = standard output handle
        mov     ah,40h                  ; function 40H = write file/device
        int     21h                     ; transfer to MS-DOS
        ret                             ; back to caller

pmsg    endp

_TEXT   ends


_DATA   segment para public 'DATA'      ; static & variable data segment

oname   db      'OVERLAY.OVL',0         ; pathname of overlay file

pars    dw      0                       ; load address (segment) for file
        dw      0                       ; relocation (segment) for file

entry   dd      0                       ; entry point for overlay

msg1    db      cr,lf,'Root segment executing!',cr,lf
msg1_len equ    $-msg1

msg2    db      cr,lf,'Memory resize failed, error code='
msg2a   db      'xxh.',cr,lf
msg2_len equ    $-msg2

msg3    db      cr,lf,'Memory allocation failed, error code='
msg3a   db      'xxh.',cr,lf
msg3_len equ    $-msg3

msg4    db      cr,lf,'EXEC call failed, error code='
msg4a   db      'xxh.',cr,lf
msg4_len equ    $-msg4

msg5    db      cr,lf,'Root segment regained control!',cr,lf
msg5_len equ    $-msg5

_DATA   ends


_STACK  segment para stack 'STACK'

        db      stksize dup (?)

_STACK  ends


        end     main                    ; defines program entry point



───────────────────────────────────────────────────────────────────────────


Figure 10-6.
OVERLAY.ASM, source code for OVERLAY.OVL.


            name      overlay
            title     'OVERLAY segment'
;
; OVERLAY.OVL --- a simple overlay segment
; loaded by ROOT.EXE to demonstrate use of
; the MS-DOS EXEC call Subfunction 03H.
;
; The overlay does not contain a STACK segment
; because it uses the ROOT segment's stack.
;
; Ray Duncan, June 1987
;

stdin   equ     0                       ; standard input
stdout  equ     1                       ; standard output
stderr  equ     2                       ; standard error

cr      equ     0dh                     ; ASCII carriage return
lf      equ     0ah                     ; ASCII linefeed


_TEXT   segment byte public 'CODE'       ; executable code segment

        assume  cs:_TEXT,ds:_DATA
ovlay   proc    far                     ; entry point from root segment

        mov     ax,_DATA                ; set DS = local data segment
        mov     ds,ax
                                        ; display overlay message ...
        mov     dx,offset msg           ; DS:DX = address of message
        mov     cx,msg_len              ; CX = length of message
        mov     bx,stdout               ; BX = standard output handle
        mov     ah,40h                  ; AH = fxn 40H, write file/device
        int     21h                     ; transfer to MS-DOS

        ret                             ; return to root segment

ovlay   endp                            ; end of ovlay procedure

_TEXT   ends


_DATA   segment para public 'DATA'      ; static & variable data segment

msg     db      cr,lf,'Overlay executing!',cr,lf
msg_len equ     $-msg

_DATA   ends

        end



───────────────────────────────────────────────────────────────────────────


Figure 11-3.
HELLO.ASM, a passive TSR.


;
; Name:          hello
;
; Description:   This RAM-resident (terminate-and-stay-resident) utility
;                displays the message "Hello, World" in response to a
;                software interrupt.
;
; Comments:      Assemble and link to create HELLO.EXE.
;
;                Execute HELLO.EXE to make resident.
;
;                Execute  INT 64h  to display the message.
;


TSRInt           EQU     64h
STDOUT           EQU     1

RESIDENT_TEXT    SEGMENT byte public 'CODE'
                    ASSUME  cs:RESIDENT_TEXT,ds:RESIDENT_DATA

TSRAction        PROC    far

                    sti                    ; enable interrupts

                    push    ds             ; preserve registers
                    push    ax
                    push    bx
                    push    cx
                    push    dx

                    mov     dx,seg RESIDENT_DATA
                    mov     ds,dx
                    mov     dx,offset Message      ; DS:DX -> message
                    mov     cx,16                  ; CX = length
                    mov     bx,STDOUT              ; BX = file handle
                    mov     ah,40h                 ; AH = INT 21H function 40H
                                                ; (Write File)
                    int     21h                    ; display the message

                    pop     dx                     ; restore registers and
                                                ; exit
                    pop     cx
                    pop     bx
                    pop     ax
                    pop     ds
                    iret

TSRAction        ENDP

RESIDENT_TEXT    ENDS


RESIDENT_DATA    SEGMENT word public 'DATA'

Message          DB      0Dh,0Ah,'Hello, World',0Dh,0Ah

RESIDENT_DATA    ENDS


TRANSIENT_TEXT   SEGMENT para public 'TCODE'
                    ASSUME  cs:TRANSIENT_TEXT,ss:TRANSIENT_STACK

HelloTSR PROC    far                    ; At entry:     CS:IP -> SnapTSR
                                        ;               SS:SP -> stack
                                        ;               DS,ES -> PSP
; Install this TSR's interrupt handler

                    mov     ax,seg RESIDENT_TEXT
                    mov     ds,ax
                    mov     dx,offset RESIDENT_TEXT:TSRAction
                    mov     al,TSRInt
                    mov     ah,25h
                    int     21h

; Terminate and stay resident

                    mov     dx,cs          ; DX = paragraph address of start
                                        ; of transient portion (end of
                                        ; resident portion)
                    mov     ax,es          ; ES = PSP segment
                    sub     dx,ax          ; DX = size of resident portion
                    mov     ax,3100h       ; AH = INT 21H function number
                                        ; (TSR)
                                        ; AL = 00H (return code)
                    int     21h

HelloTSR         ENDP

TRANSIENT_TEXT   ENDS


TRANSIENT_STACK  SEGMENT word stack 'TSTACK'

                    DB      80h dup(?)

TRANSIENT_STACK  ENDS


                    END     HelloTSR



───────────────────────────────────────────────────────────────────────────


Figure 11-4.
SNAP.ASM, a video snapshot TSR.


;
; Name:         snap
;
; Description:  This RAM-resident (terminate-and-stay-resident) utility
;               produces a video "snapshot" by copying the contents of the
;               video regeneration buffer to a disk file.  It may be used
;               in 80-column alphanumeric video modes on IBM PCs and PS/2s.
;
; Comments:     Assemble and link to create SNAP.EXE.
;
;               Execute SNAP.EXE to make resident.
;
;               Press Alt-Enter to dump current contents of video buffer
;               to a disk file.
;

MultiplexID     EQU     0CAh            ; unique INT 2FH ID value

TSRStackSize    EQU     100h            ; resident stack size in bytes

KB_FLAG         EQU     17h             ; offset of shift-key status flag
                                        ; in ROM BIOS keyboard data area

KBIns           EQU     80h             ; bit masks for KB_FLAG
KBCaps          EQU     40h
KBNum           EQU     20h
KBScroll        EQU     10h
KBAlt           EQU     8
KBCtl           EQU     4
KBLeft          EQU     2
KBRight         EQU     1

SCEnter         EQU     1Ch

CR              EQU     0Dh
LF              EQU     0Ah
TRUE            EQU     -1
FALSE           EQU     0

                PAGE
;--------------------------------------------------------------------------
;
; RAM-resident routines
;
;--------------------------------------------------------------------------

RESIDENT_GROUP  GROUP   RESIDENT_TEXT,RESIDENT_DATA,RESIDENT_STACK
RESIDENT_TEXT   SEGMENT byte public 'CODE'
                ASSUME  cs:RESIDENT_GROUP,ds:RESIDENT_GROUP

;--------------------------------------------------------------------------
; System verification routines
;--------------------------------------------------------------------------

VerifyDOSState  PROC    near            ; Returns:    carry flag set if MS-
                                        ; DOS is busy

                push    ds              ; preserve these registers
                push    bx
                push    ax

                lds     bx,cs:ErrorModeAddr
                mov     ah,[bx]         ; AH = ErrorMode flag

                lds     bx,cs:InDOSAddr
                mov     al,[bx]         ; AL = InDOS flag

                xor     bx,bx           ; BH = 00H, BL = 00H
                cmp     bl,cs:InISR28   ; carry flag set if INT 28H
                                        ; handler is running
                rcl     bl,01h          ; BL = 01H if INT 28H handler is
                                        ; running

                cmp     bx,ax           ; carry flag zero if AH = 00H
                                        ; and AL <= BL

                pop     ax              ; restore registers
                pop     bx
                pop     ds
                ret

VerifyDOSState  ENDP


VerifyIntState  PROC    near            ; Returns:    carry flag set if
                                        ; hardware or ROM BIOS unstable

                push    ax              ; preserve AX

; Verify hardware interrupt status by interrogating Intel 8259A
;  Programmable Interrupt Controller

                mov     ax,00001011b    ; AH = 0
                                        ; AL = 0CW3 for Intel 8259A
                                        ; (RR = 1, RIS = 1)
                out     20h,al          ; request 8259A's in-service
                                        ; register
                jmp     short L10       ; wait a few cycles
L10:            in      al,20h          ; AL = hardware interrupts
                                        ; currently being serviced
                                        ; (bit = 1 if in-service)
                cmp     ah,al
                jc      L11             ; exit if any hardware interrupts
                                        ; still being serviced

; Verify status of ROM BIOS interrupt handlers

                xor     al,al           ; AL = 00H

                cmp     al,cs:InISR5
                jc      L11             ; exit if currently in INT 05H
                                        ; handler

                cmp     al,cs:InISR9
                jc      L11             ; exit if currently in INT 09H
                                        ; handler

                cmp     al,cs:InISR10
                jc      L11             ; exit if currently in INT 10H
                                        ; handler

                cmp     al,cs:InISR13   ; set carry flag if currently in
                                        ; INT 13H handler

L11:            pop     ax              ; restore AX and return
                ret

VerifyIntState  ENDP


VerifyTSRState  PROC    near            ; Returns: carry flag set
                                        ; if TSR inactive

                rol     cs:HotFlag,1    ; carry flag set if (HotFlag =
                                        ; TRUE)
                cmc                     ; carry flag set if (HotFlag =
                                        ; FALSE)
                jc      L20             ; exit if no hot key

                ror     cs:ActiveTSR,1  ; carry flag set if (ActiveTSR =
                                        ; TRUE)
                jc      L20             ; exit if already active

                call    VerifyDOSState
                jc      L20             ; exit if MS-DOS unstable

                call    VerifyIntState  ; set carry flag if hardware or
                                        ; BIOS unstable

L20:            ret

VerifyTSRState  ENDP

                PAGE
;--------------------------------------------------------------------------
; System monitor routines
;--------------------------------------------------------------------------

ISR5            PROC    far             ; INT 05H handler (ROM BIOS print
                                        ; screen)

                inc     cs:InISR5       ; increment status flag
                pushf
                cli
                call    cs:PrevISR5     ; chain to previous INT 05H handler

                dec     cs:InISR5       ; decrement status flag
                iret

ISR5            ENDP


ISR8            PROC    far             ; INT 08H handler (timer tick,
                                        ; IRQ0)

                pushf
                cli
                call    cs:PrevISR8     ; chain to previous handler

                cmp     cs:InISR8,0
                jne     L31             ; exit if already in this handler

                inc     cs:InISR8       ; increment status flag

                sti                     ; interrupts are ok
                call    VerifyTSRState
                jc      L30             ; jump if TSR is inactive

                mov     byte ptr cs:ActiveTSR,TRUE
                call    TSRapp
                mov     byte ptr cs:ActiveTSR,FALSE

L30:            dec     cs:InISR8

L31:            iret

ISR8            ENDP


ISR9            PROC    far             ; INT 09H handler
                                        ; (keyboardinterrupt IRQ1)

                push    ds              ; preserve these registers
                push    ax
                push    bx

                push    cs
                pop     ds              ; DS -> RESIDENT_GROUP

                in      al,60h          ; AL = current scan code

                pushf                   ; simulate an INT
                cli
                call    ds:PrevISR9     ; let previous handler execute
                mov     ah,ds:InISR9    ; if already in this handler ..
                or      ah,ds:HotFlag   ; .. or currently processing hot
                                        ; key ..
                jnz     L43             ; .. jump to exit

                inc     ds:InISR9       ; increment status flag
                sti                     ; now interrupts are ok

; Check scan code sequence

                cmp     ds:HotSeqLen,0
                je      L40             ; jump if no hot sequence to match

                mov     bx,ds:HotIndex
                cmp     al,[bx+HotSequence]     ; test scan code sequence
                jne     L41             ; jump if no match

                inc     bx
                cmp     bx,ds:HotSeqLen
                jb      L42             ; jump if not last scan code to
                                        ; match

; Check shift-key state

L40:            push    ds
                mov     ax,40h
                mov     ds,ax           ; DS -> ROM BIOS data area
                mov     al,ds:[KB_FLAG] ; AH = ROM BIOS shift-key flags
                pop     ds

                and     al,ds:HotKBMask ; AL = flags AND "don't care" mask
                cmp     al,ds:HotKBFlag
                jne     L42             ; jump if shift state does not
                                        ; match

; Set flag when hot key is found

                mov     byte ptr ds:HotFlag,TRUE

L41:            xor     bx,bx           ; reinitialize index

L42:            mov     ds:HotIndex,bx  ; update index into sequence
                dec     ds:InISR9       ; decrement status flag

L43:            pop     bx              ; restore registers and exit
                pop     ax
                pop     ds
                iret

ISR9            ENDP
ISR10           PROC    far             ; INT 10H handler (ROM BIOS video
                                        ; I/O)

                inc     cs:InISR10      ; increment status flag

                pushf
                cli
                call    cs:PrevISR10    ; chain to previous INT 10H handler

                dec     cs:InISR10      ; decrement status flag
                iret

ISR10           ENDP


ISR13           PROC    far             ; INT 13H handler (ROM BIOS fixed
                                        ; disk I/O)

                inc     cs:InISR13      ; increment status flag

                pushf
                cli
                call    cs:PrevISR13    ; chain to previous INT 13H handler

                pushf                   ; preserve returned flags
                dec     cs:InISR13      ; decrement status flag
                popf                    ; restore flags register

                sti                     ; enable interrupts
                ret     2               ; simulate IRET without popping
                                        ; flags

ISR13           ENDP


ISR1B           PROC    far             ; INT 1BH trap (ROM BIOS Ctrl-
                                        ; Break)

                mov     byte ptr cs:Trap1B,TRUE
                iret

ISR1B           ENDP


ISR23           PROC    far             ; INT 23H trap (MS-DOS Ctrl-C)

                mov     byte ptr cs:Trap23,TRUE
                iret

ISR23           ENDP


ISR24           PROC    far             ; INT 24H trap (MS-DOS critical
                                        ; error)

                mov     byte ptr cs:Trap24,TRUE
                xor     al,al           ; AL = 00H (MS-DOS 2.x): ignore the
                                        ; error
                cmp     cs:MajorVersion,2
                je      L50

                mov     al,3            ; AL = 03H (MS-DOS 3.x):
                                        ; fail the MS-DOS call in which
                                        ; the critical error occurred

L50:            iret

ISR24           ENDP


ISR28           PROC    far             ; INT 28H handler
                                        ; (MS-DOS idle interrupt)

                pushf
                cli
                call    cs:PrevISR28    ; chain to previous INT 28H handler

                cmp     cs:InISR28,0
                jne     L61             ; exit if already inside this
                                        ; handler

                inc     cs:InISR28      ; increment status flag

                call    VerifyTSRState
                jc      L60             ; jump if TSR is inactive

                mov     byte ptr cs:ActiveTSR,TRUE
                call    TSRapp
                mov     byte ptr cs:ActiveTSR,FALSE

L60:            dec     cs:InISR28      ; decrement status flag

L61:            iret

ISR28           ENDP


ISR2F           PROC    far             ; INT 2FH handler
                                        ; (MS-DOS multiplex interrupt)
                                        ; Caller:  AH = handler ID
                                        ;          AL = function number
                                        ; Returns for function 0:  AL = 0FFH
                                        ; for all other functions:  nothing

                cmp     ah,MultiplexID
                je      L70             ; jump if this handler is requested

                jmp     cs:PrevISR2F    ; chain to previous INT 2FH handler
L70:            test    al,al
                jnz     MultiplexIRET   ; jump if reserved or undefined
                                        ; function

; Function 0:  get installed state

                mov     al,0FFh         ; AL = 0FFH (this handler is
                                        ; installed)

MultiplexIRET:  iret                    ; return from interrupt

ISR2F           ENDP

                PAGE
;
;
; AuxInt21--sets ErrorMode while executing INT 21H to force use of the
;       AuxStack instead of the IOStack.
;
;

AuxInt21        PROC    near            ; Caller:     registers for INT 21H
                                        ; Returns:    registers from
                                        ;             INT 21H
                push    ds
                push    bx
                lds     bx,ErrorModeAddr
                inc     byte ptr [bx]   ; ErrorMode is now nonzero
                pop     bx
                pop     ds

                int     21h             ; perform MS-DOS function

                push    ds
                push    bx
                lds     bx,ErrorModeAddr
                dec     byte ptr [bx]   ; restore ErrorMode
                pop     bx
                pop     ds
                ret

AuxInt21        ENDP


Int21v          PROC    near            ; perform INT 21H or AuxInt21,
                                        ; depending on MS-DOS version

                cmp     DOSVersion,30Ah
                jb      L80             ; jump if earlier than 3.1

                int     21h             ; versions 3.1 and later
                ret



L80:            call    AuxInt21        ; versions earlier than 3.1
                ret

Int21v          ENDP

                PAGE
;--------------------------------------------------------------------------
; RAM-resident application
;--------------------------------------------------------------------------

TSRapp          PROC    near

; Set up a safe stack

                push    ds              ; save previous DS on previous
                                        ; stack

                push    cs
                pop     ds              ; DS -> RESIDENT_GROUP

                mov     PrevSP,sp       ; save previous SS:SP
                mov     PrevSS,ss

                mov     ss,TSRSS        ; SS:SP -> RESIDENT_STACK
                mov     sp,TSRSP

                push    es              ; preserve remaining registers
                push    ax
                push    bx
                push    cx
                push    dx
                push    si
                push    di
                push    bp

                cld                     ; clear direction flag

; Set break and critical error traps

                mov     cx,NTrap
                mov     si,offset RESIDENT_GROUP:StartTrapList

L90:            lodsb                   ; AL = interrupt number
                                        ; DS:SI -> byte past interrupt
                                        ; number

                mov     byte ptr [si],FALSE     ; zero the trap flag

                push    ax              ; preserve AX
                mov     ah,35h          ; INT 21H function 35H
                                        ; (get interrupt vector)
                int     21h             ; ES:BX = previous interrupt vector
                mov     [si+1],bx       ; save offset and segment ..
                mov     [si+3],es       ;  .. of previous handler
                pop     ax              ; AL = interrupt number
                mov     dx,[si+5]       ; DS:DX -> this TSR's trap
                mov     ah,25h          ; INT 21H function 25H
                int     21h             ; (set interrupt vector)
                add     si,7            ; DS:SI -> next in list

                loop    L90

; Disable MS-DOS break checking during disk I/O

                mov     ax,3300h        ; AH = INT 21H function number
                                        ; AL = 00H (request current break
                                        ; state)
                int     21h             ; DL = current break state
                mov     PrevBreak,dl    ; preserve current state

                xor     dl,dl           ; DL = 00H (disable disk I/O break
                                        ; checking)
                mov     ax,3301h        ; AL = 01H (set break state)
                int     21h

; Preserve previous extended error information

                cmp     DOSVersion,30Ah
                jb      L91             ; jump if MS-DOS version earlier
                                        ; than 3.1

                push    ds              ; preserve DS
                xor     bx,bx           ; BX = 00H (required for function
                                        ; 59H)
                mov     ah,59h          ; INT 21H function 59H
                call    Int21v          ; (get extended error info)

                mov     cs:PrevExtErrDS,ds
                pop     ds
                mov     PrevExtErrAX,ax ; preserve error information
                mov     PrevExtErrBX,bx ; in data structure
                mov     PrevExtErrCX,cx
                mov     PrevExtErrDX,dx
                mov     PrevExtErrSI,si
                mov     PrevExtErrDI,di
                mov     PrevExtErrES,es

; Inform MS-DOS about current PSP

L91:            mov     ah,51h          ; INT 21H function 51H (get PSP
                                        ; address)
                call    Int21v          ; BX = foreground PSP

                mov     PrevPSP,bx      ; preserve previous PSP

                mov     bx,TSRPSP       ; BX = resident PSP
                mov     ah,50h          ; INT 21H function 50H (set PSP
                                        ; address)
                call    Int21v
; Inform MS-DOS about current DTA (not really necessary in this application
; because DTA is not used)

                mov     ah,2Fh          ; INT 21H function 2FH
                int     21h             ; (get DTA address) into ES:BX
                mov     PrevDTAoffs,bx
                mov     PrevDTAseg,es

                push    ds              ; preserve DS
                mov     ds,TSRPSP
                mov     dx,80h          ; DS:DX -> default DTA at PSP:0080H
                mov     ah,1Ah          ; INT 21H function 1AH
                int     21h             ; (set DTA address)
                pop     ds              ; restore DS

; Open a file, write to it, and close it

                mov     ax,0E07h        ; AH = INT 10H function number
                                        ; (Write Teletype)
                                        ; AL = 07H (bell character)
                int     10h             ; emit a beep

                mov     dx,offset RESIDENT_GROUP:SnapFile
                mov     ah,3Ch          ; INT 21H function 3CH (create file
                                        ; handle)
                mov     cx,0            ; file attribute
                int     21h
                jc      L94             ; jump if file not opened

                push    ax              ; push file handle
                mov     ah,0Fh          ; INT 10H function 0FH (get video
                                        ; status)
                int     10h             ; AL = video mode number
                                        ; AH = number of character columns
                pop     bx              ; BX = file handle

                cmp     ah,80
                jne     L93             ; jump if not 80-column mode

                mov     dx,0B800h       ; DX = color video buffer segment
                cmp     al,3
                jbe     L92             ; jump if color alphanumeric mode

                cmp     al,7
                jne     L93             ; jump if not monochrome mode

                mov     dx,0B000h       ; DX = monochrome video buffer
                                        ; segment

L92:            push    ds
                mov     ds,dx
                xor     dx,dx           ; DS:DX -> start of video buffer
                mov     cx,80*25*2      ; CX = number of bytes to write
                mov     ah,40h          ; INT 21H function 40H (write file)
                int     21h
                pop     ds
L93:            mov     ah,3Eh          ; INT 21H function 3EH (close file)
                int     21h

                mov     ax,0E07h        ; emit another beep
                int     10h

; Restore previous DTA

L94:            push    ds              ; preserve DS
                lds     dx,PrevDTA      ; DS:DX -> previous DTA
                mov     ah,1Ah          ; INT 21H function 1AH (set DTA
                                        ; address)
                int     21h
                pop     ds

; Restore previous PSP

                mov     bx,PrevPSP      ; BX = previous PSP
                mov     ah,50h          ; INT 21H function 50H
                call    Int21v          ; (set PSP address)

; Restore previous extended error information

                mov     ax,DOSVersion
                cmp     ax,30Ah
                jb      L95             ; jump if MS-DOS version earlier
                                        ; than 3.1
                cmp     ax,0A00h
                jae     L95             ; jump if MS OS/2-DOS 3.x box

                mov     dx,offset RESIDENT_GROUP:PrevExtErrInfo
                mov     ax,5D0Ah
                int     21h             ; (restore extended error
                                        ; information)

; Restore previous MS-DOS break checking

L95:            mov     dl,PrevBreak    ; DL = previous state
                mov     ax,3301h
                int     21h

; Restore previous break and critical error traps

                mov     cx,NTrap
                mov     si,offset RESIDENT_GROUP:StartTrapList
                push    ds              ; preserve DS

L96:            lods    byte ptr cs:[si] ; AL = interrupt number
                                        ; ES:SI -> byte past interrupt
                                        ; number

                lds     dx,cs:[si+1]    ; DS:DX -> previous handler
                mov     ah,25h          ; INT 21H function 25H
                int     21h             ; (set interrupt vector)
                add     si,7            ; DS:SI -> next in list
                loop    L96
                pop     ds              ; restore DS

; Restore all registers

                pop     bp
                pop     di
                pop     si
                pop     dx
                pop     cx
                pop     bx
                pop     ax
                pop     es

                mov     ss,PrevSS       ; SS:SP -> previous stack
                mov     sp,PrevSP
                pop     ds              ; restore previous DS

; Finally, reset status flag and return

                mov     byte ptr cs:HotFlag,FALSE
                ret

TSRapp          ENDP


RESIDENT_TEXT   ENDS


RESIDENT_DATA   SEGMENT word public 'DATA'

ErrorModeAddr   DD      ?               ; address of MS-DOS ErrorMode flag
InDOSAddr       DD      ?               ; address of MS-DOS InDOS flag

NISR            DW      (EndISRList-StartISRList)/8 ; number of
                                        ; installed ISRs

StartISRList    DB      05h             ; INT number
InISR5          DB      FALSE           ; flag
PrevISR5        DD      ?               ; address of previous handler
                DW      offset RESIDENT_GROUP:ISR5

                DB      08h
InISR8          DB      FALSE
PrevISR8        DD      ?
                DW      offset RESIDENT_GROUP:ISR8

                DB      09h
InISR9          DB      FALSE
PrevISR9        DD      ?
                DW      offset RESIDENT_GROUP:ISR9

                DB      10h
InISR10         DB      FALSE
PrevISR10       DD      ?
                DW      offset RESIDENT_GROUP:ISR10
                DB      13h
InISR13         DB      FALSE
PrevISR13       DD      ?
                DW      offset RESIDENT_GROUP:ISR13

                DB      28h
InISR28         DB      FALSE
PrevISR28       DD      ?
                DW      offset RESIDENT_GROUP:ISR28

                DB      2Fh
InISR2F         DB      FALSE
PrevISR2F       DD      ?
                DW      offset RESIDENT_GROUP:ISR2F

EndISRList      LABEL   BYTE


TSRPSP          DW      ?               ; resident PSP
TSRSP           DW      TSRStackSize    ; resident SS:SP
TSRSS           DW      seg RESIDENT_STACK
PrevPSP         DW      ?               ; previous PSP
PrevSP          DW      ?               ; previous SS:SP
PrevSS          DW      ?

HotIndex        DW      0               ; index of next scan code in
                                        ; sequence
HotSeqLen       DW      EndHotSeq-HotSequence   ; length of hot-key
                                                ; sequence

HotSequence     DB      SCEnter         ; hot sequence of scan codes
EndHotSeq       LABEL   BYTE

HotKBFlag       DB      KBAlt           ; hot value of ROM BIOS KB_FLAG
HotKBMask       DB      (KBIns OR KBCaps OR KBNum OR KBScroll) XOR 0FFh
HotFlag         DB      FALSE

ActiveTSR       DB      FALSE

DOSVersion      LABEL   WORD
                DB      ?               ; minor version number
MajorVersion    DB      ?               ; major version number

; The following data is used by the TSR application:

NTrap           DW      (EndTrapList-StartTrapList)/8   ; number of traps

StartTrapList   DB      1Bh
Trap1B          DB      FALSE
PrevISR1B       DD      ?
                DW      offset RESIDENT_GROUP:ISR1B

                DB      23h
Trap23          DB      FALSE
PrevISR23       DD      ?
                DW      offset RESIDENT_GROUP:ISR23

                DB      24h
Trap24          DB      FALSE
PrevISR24       DD      ?
                DW      offset RESIDENT_GROUP:ISR24

EndTrapList     LABEL   BYTE

PrevBreak       DB      ?               ; previous break-checking flag

PrevDTA         LABEL   DWORD           ; previous DTA address
PrevDTAoffs     DW      ?
PrevDTAseg      DW      ?

PrevExtErrInfo  LABEL   BYTE            ; previous extended error
                                        ; information
PrevExtErrAX    DW      ?
PrevExtErrBX    DW      ?
PrevExtErrCX    DW      ?
PrevExtErrDX    DW      ?
PrevExtErrSI    DW      ?
PrevExtErrDI    DW      ?
PrevExtErrDS    DW      ?
PrevExtErrES    DW      ?
                DW      3 dup(0)

SnapFile        DB      '\snap.img'     ; output filename in root directory

RESIDENT_DATA   ENDS


RESIDENT_STACK  SEGMENT word stack 'STACK'

                DB      TSRStackSize dup(?)

RESIDENT_STACK  ENDS

                PAGE
;--------------------------------------------------------------------------
;
; Transient installation routines
;
;--------------------------------------------------------------------------

TRANSIENT_TEXT  SEGMENT para public 'TCODE'
                ASSUME cs:TRANSIENT_TEXT,ds:RESIDENT_DATA,ss:
                RESIDENT_STACK

InstallSnapTSR  PROC    far             ; At entry:  CS:IP ->
                                        ; InstallSnapTSR
                                        ;            SS:SP -> stack
                                        ;            DS,ES -> PSP


; Save PSP segment

                mov     ax,seg RESIDENT_DATA
                mov     ds,ax           ; DS  -> RESIDENT_DATA

                mov     TSRPSP,es       ; save PSP segment

; Check the MS-DOS version

                call    GetDOSVersion   ; AH = major version number
                                        ; AL = minor version number

; Verify that this TSR is not already installed
;
;       Before executing INT 2FH in MS-DOS versions 2.x, test whether
;       INT 2FH vector is in use. If so, abort if PRINT.COM is using it.
;
;       (Thus, in MS-DOS 2.x, if both this program and PRINT.COM are used,
;       this program should be made resident before PRINT.COM.)

                cmp     ah,2
                ja      L101            ; jump if version 3.0 or later

                mov     ax,352Fh        ; AH = INT 21H function number
                                        ; AL = interrupt number
                int     21h             ; ES:BX = INT 2FH vector

                mov     ax,es
                or      ax,bx           ; jump if current INT 2FH vector ..
                jnz     L100            ; .. is nonzero

                push    ds
                mov     ax,252Fh        ; AH = INT 21H function number
                                        ; AL = interrupt number
                mov     dx,seg RESIDENT_GROUP
                mov     ds,dx
                mov     dx,offset RESIDENT_GROUP:MultiplexIRET

                int     21h             ; point INT 2FH vector to IRET
                pop     ds
                jmp     short L103      ; jump to install this TSR

L100:           mov     ax,0FF00h       ; look for PRINT.COM:
                int     2Fh             ; if resident, AH = print queue
                                        ; length;
                                        ; otherwise, AH is unchanged

                cmp     ah,0FFh         ; if PRINT.COM is not resident ..
                je      L101            ; .. use multiplex interrupt

                mov     al,1
                call    FatalError      ; abort if PRINT.COM already
                                        ; installed
L101:           mov     ah,MultiplexID  ; AH = multiplex interrupt ID value
                xor     al,al           ; AL = 00H
                int     2Fh             ; multiplex interrupt

                test    al,al
                jz      L103            ; jump if ok to install

                cmp     al,0FFh
                jne     L102            ; jump if not already installed

                mov     al,2
                call    FatalError      ; already installed

L102:           mov     al,3
                call    FatalError      ; can't install

; Get addresses of InDOS and ErrorMode flags

L103:           call    GetDOSFlags

; Install this TSR's interrupt handlers

                push    es              ; preserve PSP segment

                mov     cx,NISR
                mov     si,offset StartISRList

L104:           lodsb                   ; AL = interrupt number
                                        ; DS:SI -> byte past interrupt
                                        ; number
                push    ax              ; preserve AX
                mov     ah,35h          ; INT 21H function 35H
                int     21h             ; ES:BX = previous interrupt vector
                mov     [si+1],bx       ; save offset and segment ..
                mov     [si+3],es       ; .. of previous handler

                pop     ax              ; AL = interrupt number
                push    ds              ; preserve DS
                mov     dx,[si+5]
                mov     bx,seg RESIDENT_GROUP
                mov     ds,bx           ; DS:DX -> this TSR's handler
                mov     ah,25h          ; INT 21H function 25H
                int     21h             ; (set interrupt vector)
                pop     ds              ; restore DS
                add     si,7            ; DS:SI -> next in list
                loop    L104

; Free the environment

                pop     es              ; ES = PSP segment
                push    es              ; preserve PSP segment
                mov     es,es:[2Ch]     ; ES = segment of environment
                mov     ah,49h          ; INT 21H function 49H
                int     21h             ; (free memory block)

; Terminate and stay resident

                pop     ax              ; AX = PSP segment
                mov     dx,cs           ; DX = paragraph address of start
                                        ; of transient portion (end of
                                        ; resident portion)
                sub     dx,ax           ; DX = size of resident portion

                mov     ax,3100h        ; AH = INT 21H function number
                                        ; AL = 00H (return code)
                int     21h

InstallSnapTSR  ENDP


GetDOSVersion   PROC    near            ; Caller:   DS = seg RESIDENT_DATA
                                        ;           ES = PSP
                                        ; Returns:  AH = major version
                                        ;           AL = minor version
                ASSUME  ds:RESIDENT_DATA

                mov     ah,30h          ; INT 21H function 30H:
                                        ; (get MS-DOS version)
                int     21h
                cmp     al,2
                jb      L110            ; jump if versions 1.x

                xchg    ah,al           ; AH = major version
                                        ; AL = minor version
                mov     DOSVersion,ax   ; save with major version in
                                        ; high-order byte
                ret

L110:           mov     al,00h
                call    FatalError      ; abort if versions 1.x

GetDOSVersion   ENDP
GetDOSFlags     PROC    near            ; Caller:   DS = seg
                                        ;           RESIDENT_DATA
                                        ; Returns:  InDOSAddr -> InDOS
                                        ;           ErrorModeAddr ->
                                        ;           ErrorMode
                                        ; Destroys: AX,BX,CX,DI
                ASSUME  ds:RESIDENT_DATA

; Get InDOS address from MS-DOS

                push    es

                mov     ah,34h          ; INT 21H function number
                int     21h             ; ES:BX - InDOS
                mov     word ptr InDOSAddr,bx
                mov     word ptr InDOSAddr+2,es

; Determine ErrorMode address

                mov     word ptr ErrorModeAddr+2,es   ; assume ErrorMode
                                                        ; is in the same
                                                        ; segment as InDOS

                mov     ax,DOSVersion
                cmp     ax,30Ah
                jb      L120            ; jump if MS-DOS version earlier
                                        ; than 3.1 ..
                cmp     ax,0A00h
                jae     L120            ; .. or MS OS/2-DOS 3.x box

                dec     bx              ; in MS-DOS 3.1 and later,
                                        ; ErrorMode
                mov     word ptr ErrorModeAddr,bx       ; is just before
                                                        ; InDOS
                jmp     short L125

L120:                                   ; scan MS-DOS segment for ErrorMode

                mov     cx,0FFFFh       ; CX = maximum number of bytes to
                                        ; scan
                xor     di,di           ; ES:DI -> start of MS-DOS segment

L121:           mov     ax,word ptr cs:LF2  ; AX = opcode for INT 28H

L122:           repne   scasb           ; scan for first byte of fragment
                jne     L126            ; jump if not found

                cmp     ah,es:[di]              ; inspect second byte of
                                                ; opcode
                jne     L122                    ; jump if not INT 28H

                mov     ax,word ptr cs:LF1 + 1  ; AX = opcode for CMP
                cmp     ax,es:[di][LF1-LF2]
                jne     L123                    ; jump if opcode not CMP

                mov     ax,es:[di][(LF1-LF2)+2] ; AX = offset of ErrorMode
                jmp     short L124              ; in DOS segment

L123:           mov     ax,word ptr cs:LF3 + 1  ; AX = opcode for TEST
                cmp     ax,es:[di][LF3-LF4]
                jne     L121                    ; jump if opcode not TEST

                mov     ax,es:[di][(LF3-LF4)+2] ; AX = offset of ErrorMode

L124:           mov     word ptr ErrorModeAddr,ax

L125:           pop     es
                ret
; Come here if address of ErrorMode not found

L126:           mov     al,04h
                call    FatalError


; Code fragments for scanning for ErrorMode flag

LFnear          LABEL   near            ; dummy labels for addressing
LFbyte          LABEL   byte
LFword          LABEL   word
                                        ; MS-DOS versions earlier than 3.1
LF1:            cmp     ss:LFbyte,0     ; CMP ErrorMode,0
                jne     LFnear
LF2:            int     28h
                                        ; MS-DOS versions 3.1 and later
LF3:            test    ss:LFbyte,0FFh  ; TEST ErrorMode,0FFH
                jne     LFnear
                push    ss:LFword
LF4:            int     28h

GetDOSFlags     ENDP

FatalError      PROC    near            ; Caller:   AL = message number
                                        ;           ES = PSP
                ASSUME  ds:TRANSIENT_DATA

                push    ax              ; save message number on stack

                mov     bx,seg TRANSIENT_DATA
                mov     ds,bx

; Display the requested message

                mov     bx,offset MessageTable
                xor     ah,ah           ; AX = message number
                shl     ax,1            ; AX = offset into MessageTable
                add     bx,ax           ; DS:BX -> address of message
                mov     dx,[bx]         ; DS:DX -> message
                mov     ah,09h          ; INT 21H function 09H (display
                                        ; string)
                int     21h             ; display error message

                pop     ax              ; AL = message number
                or      al,al
                jz      L130            ; jump if message number is zero
                                        ; (MS-DOS versions 1.x)

; Terminate (MS-DOS 2.x and later)

                mov     ah,4Ch          ; INT 21H function 4CH
                int     21h             ; (terminate process with return
                                        ; code)


; Terminate (MS-DOS 1.x)

L130            PROC    far

                push    es              ; push PSP:0000H
                xor     ax,ax
                push    ax
                ret                     ; far return (jump to PSP:0000H)

L130            ENDP

FatalError      ENDP


TRANSIENT_TEXT  ENDS

                PAGE
;
;
; Transient data segment
;
;

TRANSIENT_DATA  SEGMENT word public 'DATA'

MessageTable    DW   Message0        ; MS-DOS version error
                DW   Message1        ; PRINT.COM found in MS-DOS 2.x
                DW   Message2        ; already installed
                DW   Message3        ; can't install
                DW   Message4        ; can't find flag

Message0        DB   CR,LF,'TSR requires MS-DOS 2.0 or later
                        version',CR,LF,'$'
Message1        DB   CR,LF,'Can''t install TSR:
                        PRINT.COM active',CR,LF,'$'
Message2        DB   CR,LF,'This TSR is already installed',CR,LF,'$'
Message3        DB   CR,LF,'Can''t install this TSR',CR,LF,'$'
Message4        DB   CR,LF,'Unable to locate MS-DOS
                        ErrorMode flag',CR,LF,'$'

TRANSIENT_DATA  ENDS

                END     InstallSnapTSR



───────────────────────────────────────────────────────────────────────────


Figure 12-2.
INT24.ASM, a replacement Interrupt 24H handler.


        name    int24
        title   INT24 Critical Error Handler

;
; INT24.ASM -- Replacement critical error handler
; by Ray Duncan, September 1987
;

cr      equ     0dh             ; ASCII carriage return
lf      equ     0ah             ; ASCII linefeed

DGROUP  group   _DATA

_DATA   segment word public 'DATA'

save24  dd      0               ; previous contents of Int 24H
                                ; critical error handler vector
                                ; prompt message used by
                                ; critical error handler
prompt  db      cr,lf,'Critical Error Occurred: '
        db      'Abort, Retry, Ignore, Fail? $'

keys    db      'aArRiIfF'      ; possible user response keys
keys_len equ    $-keys          ; (both cases of each allowed)

codes   db      2,2,1,1,0,0,3,3 ; codes returned to MS-DOS kernel
                                ; for corresponding response keys

_DATA   ends


_TEXT   segment word public 'CODE'

        assume  cs:_TEXT,ds:DGROUP

        public  get24
get24   proc    near            ; set Int 24H vector to point
                                ; to new critical error handler

        push    ds              ; save segment registers
        push    es

        mov     ax,3524h        ; get address of previous
        int     21h             ; INT 24H handler and save it

        mov     word ptr save24,bx
        mov     word ptr save24+2,es

        push    cs              ; set DS:DX to point to
        pop     ds              ; new INT 24H handler
        mov     dx,offset _TEXT:int24
        mov     ax,2524h        ; then call MS-DOS to
        int     21h             ; set the INT 24H vector

        pop     es              ; restore segment registers
        pop     ds
        ret                     ; and return to caller

get24   endp


        public  res24
res24   proc    near            ; restore original contents
                                ; of Int 24H vector

        push    ds              ; save our data segment
        lds     dx,save24       ; put address of old handler
        mov     ax,2524h        ; back into INT 24H vector
        int     21h

        pop     ds              ; restore data segment
        ret                     ; and return to caller

res24   endp

;
; This is the replacement critical error handler. It
; prompts the user for Abort, Retry, Ignore, or Fail and
; returns the appropriate code to the MS-DOS kernel.
;
int24   proc    far             ; entered from MS-DOS kernel

        push    bx              ; save registers
        push    cx
        push    dx
        push    si
        push    di
        push    bp
        push    ds
        push    es

int24a: mov     ax,DGROUP       ; display prompt for user
        mov     ds,ax           ; using function 09H (print string
        mov     es,ax           ; terminated by $ character)
        mov     dx,offset prompt
        mov     ah,09h
        int     21h

        mov     ah,01h          ; get user's response
        int     21h             ; function 01H = read one character

        mov     di,offset keys  ; look up code for response key
        mov     cx,keys_len
        cld
        repne scasb
        jnz     int24a          ; prompt again if bad response

                                ; set AL = action code for MS-DOS
                                ; according to key that was entered:
                                ; 0 = ignore, 1 = retry, 2 = abort,
                                ; 3 = fail
        mov     al,[di+keys_len-1]

        pop     es              ; restore registers
        pop     ds
        pop     bp
        pop     di
        pop     si
        pop     dx
        pop     cx
        pop     bx
        iret                    ; exit critical error handler

int24   endp

_TEXT   ends

        end



───────────────────────────────────────────────────────────────────────────


Figure 13-5.
The Divide by Zero replacement handler, DIVZERO.ASM. This code is specific
to 80286 and 80386 microprocessors. (See Appendix M: 8086/8088 Software
Compatibility Issues.)


        name    divzero
        title   'DIVZERO - Interrupt 00H Handler'
;
; DIVZERO.ASM: Demonstration Interrupt 00H Handler
;
; To assemble, link, and convert to COM file:
;
;       C>MASM DIVZERO;  <Enter>
;       C>LINK DIVZERO;  <Enter>
;       C>EXE2BIN DIVZERO.EXE DIVZERO.COM  <Enter>
;       C>DEL DIVZERO.EXE  <Enter>
;

cr      equ     0dh             ; ASCII carriage return
lf      equ     0ah             ; ASCII linefeed
eos     equ     '$'             ; end of string marker

_TEXT   segment word public 'CODE'

        assume  cs:_TEXT,ds:_TEXT,es:_TEXT,ss:_TEXT

        org     100h

entry:  jmp     start           ; skip over data area

intmsg  db      'Divide by Zero Occurred!',cr,lf,eos

divmsg  db      'Dividing '     ; message used by demo
par1    db      '0000h'         ; dividend goes here
        db      ' by '
par2    db      '00h'           ; divisor goes here
        db      ' equals '
par3    db      '00h'           ; quotient here
        db      ' remainder '
par4    db      '00h'           ; and remainder here
        db      cr,lf,eos

oldint0 dd      ?               ; save old Int 00H vector

intflag db      0               ; nonzero if divide by
                                ; zero interrupt occurred

oldip   dw      0               ; save old IP value


;
; The routine 'int0' is the actual divide by zero
; interrupt handler.  It gains control whenever a
; divide by zero or overflow occurs.  Its action
; is to set a flag and then increment the instruction
; pointer saved on the stack so that the failing
; divide will not be reexecuted after the IRET.
;
; In this particular case we can call MS-DOS to
; display a message during interrupt handling
; because the application triggers the interrupt
; intentionally. Thus, it is known that MS-DOS or
; other interrupt handlers are not in control
; at the point of interrupt.
;

int0:   pop     cs:oldip        ; capture instruction pointer

        push    ax
        push    bx
        push    cx
        push    dx
        push    di
        push    si
        push    ds
        push    es

        push    cs              ; set DS = CS
        pop     ds

        mov     ah,09h          ; print error message
        mov     dx,offset _TEXT:intmsg
        int     21h

        add     oldip,2         ; bypass instruction causing
                                ; divide by zero error

        mov     intflag,1       ; set divide by 0 flag

        pop     es              ; restore all registers
        pop     ds
        pop     si
        pop     di
        pop     dx
        pop     cx
        pop     bx
        pop     ax

        push    cs:oldip        ; restore instruction pointer

        iret                    ; return from interrupt


;
; The code beginning at 'start' is the application
; program.  It alters the vector for Interrupt 00H to
; point to the new handler, carries out some divide
; operations (including one that will trigger an
; interrupt) for demonstration purposes, restores
; the original contents of the Interrupt 00H vector,
; and then terminates.
;

start:  mov     ax,3500h        ; get current contents
        int     21h             ; of Int 00H vector

                                ; save segment:offset
                                ; of previous Int 00H handler
        mov     word ptr oldint0,bx
        mov     word ptr oldint0+2,es

                                ; install new handler...
        mov     dx,offset int0  ; DS:DX = handler address
        mov     ax,2500h        ; call MS-DOS to set
        int     21h             ; Int 00H vector

                                ; now our handler is active,
                                ; carry out some test divides.

        mov     ax,20h          ; test divide
        mov     bx,1            ; divide by 1
        call    divide

        mov     ax,1234h        ; test divide
        mov     bx,5eh          ; divide by 5EH
        call    divide

        mov     ax,5678h        ; test divide
        mov     bx,7fh          ; divide by 127
        call    divide

        mov     ax,20h          ; test divide
        mov     bx,0            ; divide by 0
        call    divide          ; (triggers interrupt)

                                ; demonstration complete,
                                ; restore old handler

        lds     dx,oldint0      ; DS:DX = handler address
        mov     ax,2500h        ; call MS-DOS to set
        int     21h             ; Int 00H vector

        mov     ax,4c00h        ; final exit to MS-DOS
        int     21h             ; with return code = 0

;
; The routine 'divide' carries out a trial division,
; displaying the arguments and the results.  It is
; called with AX = dividend and BL = divisor.
;

divide  proc    near

        push    ax              ; save arguments
        push    bx

        mov     di,offset par1  ; convert dividend to
        call    wtoa            ; ASCII for display

        mov     ax,bx           ; convert divisor to
        mov     di,offset par2  ; ASCII for display
        call    btoa

        pop     bx              ; restore arguments
        pop     ax

        div     bl              ; perform the division
        cmp     intflag,0       ; divide by zero detected?
        jne     nodiv           ; yes, skip display

        push    ax              ; no, convert quotient to
        mov     di,offset par3  ; ASCII for display
        call    btoa

        pop     ax              ; convert remainder to
        xchg    ah,al           ; ASCII for display
        mov     di,offset par4
        call    btoa

        mov     ah,09h          ; show arguments, results
        mov     dx,offset divmsg
        int     21h

nodiv:  mov     intflag,0       ; clear divide by 0 flag
        ret                     ; and return to caller

divide  endp



wtoa    proc    near            ; convert word to hex ASCII
                                ; call with AX = binary value
                                ;           DI = addr for string
                                ; returns AX, CX, DI destroyed

        push    ax              ; save original value
        mov     al,ah
        call    btoa            ; convert upper byte
        add     di,2            ; increment output address
        pop     ax
        call    btoa            ; convert lower byte
        ret                     ; return to caller

wtoa    endp



btoa    proc    near            ; convert byte to hex ASCII
                                ; call with AL = binary value
                                ;           DI = addr to store string
                                ; returns AX, CX destroyed

        mov     ah,al           ; save lower nibble
        mov     cx,4            ; shift right 4 positions
        shr     al,cl           ; to get upper nibble
        call    ascii           ; convert 4 bits to ASCII
        mov     [di],al         ; store in output string
        mov     al,ah           ; get back lower nibble

        and     al,0fh          ; blank out upper one
        call    ascii           ; convert 4 bits to ASCII
        mov     [di+1],al       ; store in output string
        ret                     ; back to caller

btoa    endp



ascii   proc    near            ; convert AL bits 0-3 to
                                ; ASCII {0...9,A...F}
        add     al,'0'          ; and return digit in AL
        cmp     al,'9'
        jle     ascii2
        add     al,'A'-'9'-1    ; "fudge factor" for A-F
ascii2: ret                     ; return to caller

ascii   endp

_TEXT   ends

        end     entry



───────────────────────────────────────────────────────────────────────────


Figure 14-1.
Assembly-language template for a character-oriented filter
(file PROTOC.ASM).


        name    protoc
        title   'PROTOC.ASM --- template character filter'
;
; PROTOC.ASM: a template for a character-oriented filter.
;
; Ray Duncan, June 1987
;

stdin   equ     0               ; standard input
stdout  equ     1               ; standard output
stderr  equ     2               ; standard error

cr      equ     0dh             ; ASCII carriage return
lf      equ     0ah             ; ASCII linefeed

DGROUP  group   _DATA,STACK     ; 'automatic data group'


_TEXT   segment byte public 'CODE'

        assume  cs:_TEXT,ds:DGROUP,ss:STACK

main    proc    far             ; entry point from MS-DOS

        mov     ax,DGROUP       ; set DS = our data segment
        mov     ds,ax

main1:                          ; read a character from standard input
        mov     dx,offset DGROUP:char   ; address to place character
        mov     cx,1            ; length to read = 1
        mov     bx,stdin        ; handle for standard input
        mov     ah,3fh          ; function 3FH = read from file or device
        int     21h             ; transfer to MS-DOS
        jc      main3           ; error, terminate
        cmp     ax,1            ; any character read?
        jne     main2           ; end of file, terminate program

        call    translt         ; translate character if necessary

                                ; now write character to standard output
        mov     dx,offset DGROUP:char   ; address of character
        mov     cx,1            ; length to write = 1
        mov     bx,stdout       ; handle for standard output
        mov     ah,40h          ; function 40H = write to file or device
        int     21h             ; transfer to MS-DOS
        jc      main3           ; error, terminate
        cmp     ax,1            ; was character written?
        jne     main3           ; disk full, terminate program
        jmp     main1           ; go process another character

main2:  mov     ax,4c00h        ; end of file reached, terminate
        int     21h             ; program with return code = 0

main3:  mov     ax,4c01h        ; error or disk full, terminate
        int     21h             ; program with return code = 1

main    endp                    ; end of main procedure

;
; Perform any necessary translation on character from input,
; stored in 'char'.  Template action: leave character unchanged.
;
translt proc    near

        ret                     ; template action: do nothing

translt endp

_TEXT   ends


_DATA   segment word public 'DATA'

char    db      0               ; temporary storage for input character

_DATA   ends


STACK   segment para stack 'STACK'

        dw      64 dup (?)

STACK   ends


        end     main            ; defines program entry point



───────────────────────────────────────────────────────────────────────────


Figure 14-2.
C template for a character-oriented filter (file PROTOC.C).


/*
        PROTOC.C: a template for a character-oriented filter.

        Ray Duncan, June 1987
*/

#include <stdio.h>

main(argc,argv)
int argc;
char *argv[];
{       char ch;

        while ( (ch=getchar())!=EOF )   /* read a character */
        {       ch=translate(ch);       /* translate it if necessary */
                putchar(ch);            /* write the character */
        }
        exit(0);                        /* terminate at end of file */
}

/*
        Perform any necessary translation on character from
        input file.  Template action just returns same character.
*/

int translate(ch)
char ch;
{       return (ch);
}


───────────────────────────────────────────────────────────────────────────

Figure 14-3.
Assembly-language template for a line-oriented filter (file PROTOL.ASM).


        name    protol
        title   'PROTOL.ASM --- template line filter'
;
; PROTOL.ASM:  a template for a line-oriented filter.
;
; Ray Duncan, June 1987
;

stdin   equ     0               ; standard input
stdout  equ     1               ; standard output
stderr  equ     2               ; standard error

cr      equ     0dh             ; ASCII carriage return
lf      equ     0ah             ; ASCII linefeed


DGROUP  group   _DATA,STACK     ; 'automatic data group'


_TEXT   segment byte public 'CODE'

        assume  cs:_TEXT,ds:DGROUP,es:DGROUP,ss:STACK

main    proc    far             ; entry point from MS-DOS

        mov     ax,DGROUP       ; set DS = ES = our data segment
        mov     ds,ax
        mov     es,ax

main1:                          ; read a line from standard input
        mov     dx,offset DGROUP:input  ; address to place data
        mov     cx,256          ; max length to read = 256
        mov     bx,stdin        ; handle for standard input
        mov     ah,3fh          ; function 3FH = read from file or device
        int     21h             ; transfer to MS-DOS
        jc      main3           ; if error, terminate
        or      ax,ax           ; any characters read?
        jz      main2           ; end of file, terminate program

        call    translt         ; translate line if necessary
        or      ax,ax           ; anything to output after translation?
        jz      main1           ; no, get next line

                                ; now write line to standard output
        mov     dx,offset DGROUP:output ; address of data
        mov     cx,ax           ; length to write
        mov     bx,stdout       ; handle for standard output
        mov     ah,40h          ; function 40H = write to file or device
        int     21h             ; transfer to MS-DOS
        jc      main3           ; if error, terminate

        cmp     ax,cx           ; was entire line written?
        jne     main3           ; disk full, terminate program
        jmp     main1           ; go process another line

main2:  mov     ax,4c00h        ; end of file reached, terminate
        int     21h             ; program with return code = 0

main3:  mov     ax,4c01h        ; error or disk full, terminate
        int     21h             ; program with return code = 1

main    endp                    ; end of main procedure

;
; Perform any necessary translation on line stored in
; 'input' buffer, leaving result in 'output' buffer.
;
; Call with:    AX = length of data in 'input' buffer.
;
; Return:       AX = length to write to standard output.
;
; Action of template routine is just to copy the line.
;
translt proc    near

                                ; just copy line from input to output
        mov     si,offset DGROUP:input
        mov     di,offset DGROUP:output
        mov     cx,ax
        rep movsb
        ret                     ; return length in AX unchanged

translt endp


_TEXT   ends


_DATA   segment word public 'DATA'

input   db      256 dup (?)     ; storage for input line
output  db      256 dup (?)     ; storage for output line

_DATA   ends


STACK   segment para stack 'STACK'

        dw      64 dup (?)

STACK   ends


        end     main            ; defines program entry point



───────────────────────────────────────────────────────────────────────────

Figure 14-4.
C template for a line-oriented filter (file PROTOL.C).


/*
        PROTOL.C: a template for a line-oriented filter.

        Ray Duncan, June 1987.
*/

#include <stdio.h>

static char input[256];                 /* buffer for input line */
static char output[256];                /* buffer for output line */

main(argc,argv)
int argc;
char *argv[];
{       while( gets(input) != NULL ) /* get a line from input stream */
                                        /* perform any necessary translation
                                            and possibly write result */
        {       if (translate()) puts(output);
        }
        exit(0);                      /* terminate at end of file */
}

/*
        Perform any necessary translation on input line, leaving
        the resulting text in output buffer.  Value of function
        is 'true' if output buffer should be written to standard output
        by main routine, 'false' if nothing should be written.
*/

translate()
{       strcpy(output,input);         /* template action is copy input */
        return(1);                    /* line and return true flag */
}


───────────────────────────────────────────────────────────────────────────


Figure 14-5.
Assembly-language source code for the LC filter (file LC.ASM).


        name    lc
        title   'LC.ASM --- lowercase filter'
;
; LC.ASM:       a simple character-oriented filter to translate
;               all uppercase {A-Z} to lowercase {a-z}.
;
; Ray Duncan, June 1987
;

stdin   equ     0               ; standard input
stdout  equ     1               ; standard output
stderr  equ     2               ; standard error

cr      equ     0dh             ; ASCII carriage return
lf      equ     0ah             ; ASCII linefeed


DGROUP  group   _DATA,STACK     ; 'automatic data group'


_TEXT   segment byte public 'CODE'

        assume  cs:_TEXT,ds:DGROUP,ss:STACK

main    proc    far             ; entry point from MS-DOS

        mov     ax,DGROUP       ; set DS = our data segment
        mov     ds,ax

main1:                          ; read a character from standard input
        mov     dx,offset DGROUP:char   ; address to place character
        mov     cx,1            ; length to read = 1
        mov     bx,stdin        ; handle for standard input
        mov     ah,3fh          ; function 3FH = read from file or device
        int     21h             ; transfer to MS-DOS
        jc      main3           ; error, terminate
        cmp     ax,1            ; any character read?
        jne     main2           ; end of file, terminate program

        call    translt         ; translate character if necessary

                                ; now write character to standard output
        mov     dx,offset DGROUP:char   ; address of character
        mov     cx,1            ; length to write = 1
        mov     bx,stdout       ; handle for standard output
        mov     ah,40h          ; function 40H = write to file or device
        int     21h             ; transfer to MS-DOS
        jc      main3           ; error, terminate
        cmp     ax,1            ; was character written?
        jne     main3           ; disk full, terminate program
        jmp     main1           ; go process another character

main2:  mov     ax,4c00h        ; end of file reached, terminate
        int     21h             ; program with return code = 0

main3:  mov     ax,4c01h        ; error or disk full, terminate
        int     21h             ; program with return code = 1

main    endp                    ; end of main procedure

;
; Translate uppercase {A-Z} characters to corresponding
; lowercase characters {a-z}.  Leave other characters unchanged.
;
translt proc    near

        cmp     byte ptr char,'A'
        jb      transx
        cmp     byte ptr char,'Z'
        ja      transx
        add     byte ptr char,'a'-'A'
transx: ret

translt endp


_TEXT   ends


_DATA   segment word public 'DATA'

char    db      0               ; temporary storage for input character

_DATA   ends


STACK   segment para stack 'STACK'

        dw      64 dup (?)

STACK   ends


        end     main            ; defines program entry point



───────────────────────────────────────────────────────────────────────────


Figure 14-6.
C source code for the LC filter (file LC.C).


/*
        LC:     a simple character-oriented filter to translate
                all uppercase {A-Z} to lowercase {a-z} characters.

        Usage:  LC [< source] [> destination]

        Ray Duncan, June 1987

*/

#include <stdio.h>

main(argc,argv)
int argc;
char *argv[];
{       char ch;
                                        /* read a character */
        while ( (ch=getchar() ) != EOF )
        {       ch=translate(ch);       /* perform any necessary
                                            character translation */
                putchar(ch);            /* then write character */
        }
        exit(0);                        /* terminate at end of file */
}

/*
        Translate characters A-Z to lowercase equivalents
*/

int translate(ch)
char ch;
{       if (ch >= 'A' && ch <= 'Z') ch += 'a'-'A';
        return (ch);
}



───────────────────────────────────────────────────────────────────────────


Figure 14-7.
C source code for a new FIND filter (file FIND.C).


/*
        FIND.C          Searches text stream for a string.

        Usage:          FIND "pattern" [< source] [> destination]

        by Ray Duncan, June 1987

*/

#include <stdio.h>

#define TAB     '\x09'                  /* ASCII tab character (^I) */
#define BLANK   '\x20'                  /* ASCII space character */

#define TAB_WIDTH 8                     /* columns per tab stop */

static char input[256];                 /* buffer for line from input */
static char output[256];                /* buffer for line to output */
static char pattern[256];               /* buffer for search pattern */

main(argc,argv)
int argc;
char *argv[];
{       int line=0;                     /* initialize line variable */

        if ( argc < 2 )                 /* was search pattern supplied? */
        {       puts("find: missing pattern.");
                exit(1);                /* abort if not */
        }
        strcpy(pattern,argv[1]);        /* save copy of string to find */
        strupr(pattern);                /* fold it to uppercase */
        while( gets(input) != NULL )    /* read a line from input */
        {       line++;                 /* count lines */
                strcpy(output,input);   /* save copy of input string */
                strupr(input);          /* fold input to uppercase */
                                        /* if line contains pattern */
                if( strstr(input,pattern) )
                                        /* write it to standard output */
                        writeline(line,output);
        }
        exit(0);                        /* terminate at end of file */
}

/*
        WRITELINE: Write line number and text to standard output,
        expanding any tab characters to stops defined by TAB_WIDTH.
*/

writeline(line,p)
int line;
char *p;
{       int i=0;                       /* index to original line text */
        int col=0;                     /* actual output column counter */
        printf("\n%4d: ",line);        /* write line number */
        while( p[i]!=NULL )            /* while end of line not reached */
        {       if(p[i]==TAB)          /* if current char=tab, expand it */
                {       do putchar(BLANK);
                        while((++col % TAB_WIDTH) != 0);
                }
                else                    /* otherwise just send character */
                {       putchar(p[i]);
                        col++;          /* count columns */
                }
                i++;                    /* advance through output line */
        }
}



───────────────────────────────────────────────────────────────────────────


Figure 14-8.
Assembly-language source code demonstrating use of a filter as a child
process. This code redirects the standard input and standard output handles
to files, invokes the EXEC function (Interrupt 21H Function 4BH) to run the
SORT.EXE program, and then restores the original meaning of the standard
input and standard output handles (file EXECSORT.ASM).


        name    execsort
        title   'EXECSORT --- demonstrate EXEC of filter'
        .sall
;
; EXECSORT.ASM --- demonstration of use of EXEC to run the SORT
; filter as a child process, redirecting its input and output.
; This program requires the files SORT.EXE and MYFILE.DAT in
; the current drive and directory.
;
; Ray Duncan, June 1987
;

stdin   equ     0                       ; standard input
stdout  equ     1                       ; standard output
stderr  equ     2                       ; standard error

stksize equ     128                     ; size of stack

cr      equ     0dh                     ; ASCII carriage return
lf      equ     0ah                     ; ASCII linefeed

jerr    macro   target                  ;; Macro to test carry flag
        local   notset                  ;; and jump if flag set.
        jnc     notset                  ;; Uses JMP DISP16 to avoid
        jmp     target                  ;; branch out of range errors
notset:
        endm


DGROUP  group   _DATA,_STACK            ; 'automatic data group'

_TEXT   segment byte public 'CODE'      ; executable code segment

        assume  cs:_TEXT,ds:DGROUP,ss:_STACK


stk_seg dw      ?                       ; original SS contents
stk_ptr dw      ?                       ; original SP contents


main    proc    far                     ; entry point from MS-DOS

        mov     ax,DGROUP               ; set DS = our data segment
        mov     ds,ax

                                        ; now give back extra memory so
                                        ; child SORT has somewhere
                                        ; to run...
        mov     ax,es                   ; let AX = segment of PSP base
        mov     bx,ss                   ; and BX = segment of stack base
        sub     bx,ax                   ; reserve seg stack - seg psp
        add     bx,stksize/16           ; plus paragraphs of stack
        mov     ah,4ah                  ; fxn 4AH = modify memory block
        int     21h                     ; transfer to MS-DOS
        jerr    main1                   ; jump if resize block failed

                                        ; prepare stdin and stdout
                                        ; handles for child SORT process

        mov     bx,stdin                ; dup the handle for stdin
        mov     ah,45h
        int     21h                     ; transfer to MS-DOS
        jerr    main1                   ; jump if dup failed
        mov     oldin,ax                ; save dup'd handle

        mov     dx,offset DGROUP:infile ; now open the input file
        mov     ax,3d00h                ; mode = read-only
        int     21h                     ; transfer to MS-DOS
        jerr    main1                   ; jump if open failed

        mov     bx,ax                   ; force stdin handle to
        mov     cx,stdin                ; track the input file handle
        mov     ah,46h
        int     21h                     ; transfer to MS-DOS
        jerr    main1                   ; jump if force dup failed

        mov     bx,stdout               ; dup the handle for stdout
        mov     ah,45h
        int     21h                     ; transfer to MS-DOS
        jerr    main1                   ; jump if dup failed
        mov     oldout,ax               ; save dup'd handle

        mov     dx,offset dGROUP:outfile ; now create the output file
        mov     cx,0                    ; normal attribute
        mov     ah,3ch
        int     21h                     ; transfer to MS-DOS
        jerr    main1                   ; jump if create failed

        mov     bx,ax                   ; force stdout handle to
        mov     cx,stdout               ; track the output file handle
        mov     ah,46h
        int     21h                     ; transfer to MS-DOS
        jerr    main1                   ; jump if force dup failed

                                        ; now EXEC the child SORT,
                                        ; which will inherit redirected
                                        ; stdin and stdout handles

        push    ds                      ; save EXECSORT's data segment
        mov     stk_seg,ss              ; save EXECSORT's stack pointer
        mov     stk_ptr,sp

        mov     ax,ds                   ; set ES = DS
        mov     es,ax
        mov     dx,offset DGROUP:cname  ; DS:DX = child pathname
        mov     bx,offset DGROUP:pars   ; EX:BX = parameter block
        mov     ax,4b00h                ; function 4BH, subfunction 00H
        int     21h                     ; transfer to MS-DOS

        cli                             ; (for bug in some early 8088s)
        mov     ss,stk_seg              ; restore execsort's stack pointer
        mov     sp,stk_ptr
        sti                             ; (for bug in some early 8088s)
        pop     ds                      ; restore DS = our data segment

        jerr    main1                   ; jump if EXEC failed

        mov     bx,oldin                ; restore original meaning of
        mov     cx,stdin                ; standard input handle for
        mov     ah,46h                  ; this process
        int     21h
        jerr    main1                   ; jump if force dup failed

        mov     bx,oldout               ; restore original meaning
        mov     cx,stdout               ; of standard output handle
        mov     ah,46h                  ; for this process
        int     21h
        jerr    main1                   ; jump if force dup failed

        mov     bx,oldin                ; close dup'd handle of
        mov     ah,3eh                  ; original stdin
        int     21h                     ; transfer to MS-DOS
        jerr    main1                   ; jump if close failed

        mov     bx,oldout               ; close dup'd handle of
        mov     ah,3eh                  ; original stdout
        int     21h                     ; transfer to MS-DOS
        jerr    main1                   ; jump if close failed

                                        ; display success message
        mov     dx,offset DGROUP:msg1   ; address of message
        mov     cx,msg1_len             ; message length
        mov     bx,stdout               ; handle for standard output
        mov     ah,40h                  ; fxn 40H = write file or device
        int     21h                     ; transfer to MS-DOS
        jerr    main1

        mov     ax,4c00h                ; no error, terminate program
        int     21h                     ; with return code = 0

main1:  mov     ax,4c01h                ; error, terminate program
        int     21h                     ; with return code = 1

main    endp                            ; end of main procedure

_TEXT   ends


_DATA   segment para public 'DATA'      ; static & variable data segment

infile  db      'MYFILE.DAT',0          ; input file for SORT filter
outfile db      'MYFILE.SRT',0          ; output file for SORT filter

oldin   dw      ?                       ; dup of old stdin handle
oldout  dw      ?                       ; dup of old stdout handle

cname   db      'SORT.EXE',0            ; pathname of child SORT process

pars    dw      0                       ; segment of environment block
                                        ; (0 = inherit parent's)
        dd      tail                    ; long address, command tail
        dd      -1                      ; long address, default FCB #1
                                        ; (-1 = none supplied)
        dd      -1                      ; long address, default FCB #2
                                        ; (-1 = none supplied)

tail    db      0,cr                    ; empty command tail for child

msg1    db      cr,lf,'SORT was executed as child.',cr,lf
msg1_len equ    $-msg1

_DATA   ends

_STACK  segment para stack 'STACK'

        db      stksize dup (?)

_STACK  ends


        end     main                    ; defines program entry point



───────────────────────────────────────────────────────────────────────────


Figure 15-14.
TEMPLATE.ASM, the source file for the TEMPLATE.SYS driver.


        name    template
        title   'TEMPLATE --- installable driver template'

;
; TEMPLATE.ASM:  A program skeleton for an installable
;                device driver (MS-DOS 2.0 or later)
;
; The driver command-code routines are stubs only and have
; no effect but to return a nonerror "Done" status.
;
; Ray Duncan, July 1987
;

_TEXT   segment byte public 'CODE'

        assume  cs:_TEXT,ds:_TEXT,es:NOTHING

        org     0

MaxCmd  equ     24              ; maximum allowed command code
                                ; 12 for MS-DOS 2.x
                                ; 16 for MS-DOS 3.0-3.1
                                ; 24 for MS-DOS 3.2-3.3

cr      equ     0dh             ; ASCII carriage return
lf      equ     0ah             ; ASCII linefeed
eom     equ     '$'             ; end-of-message signal


Header:                         ; device driver header
        dd      -1              ; link to next device driver
        dw      0c840h          ; device attribute word
        dw      Strat           ; "Strategy" routine entry point
        dw      Intr            ; "Interrupt" routine entry point
        db      'TEMPLATE'      ; logical device name


RHPtr   dd      ?               ; pointer to request header, passed
                                ; by MS-DOS kernel to Strategy routine

Dispatch:                       ; Interrupt routine command-code
                                ; dispatch table
        dw      Init            ;  0 = initialize driver
        dw      MediaChk        ;  1 = media check on block device
        dw      BuildBPB        ;  2 = build BIOS parameter block
        dw      IoctlRd         ;  3 = I/O control read
        dw      Read            ;  4 = read (input) from device
        dw      NdRead          ;  5 = nondestructive read
        dw      InpStat         ;  6 = return current input status
        dw      InpFlush        ;  7 = flush device input buffers
        dw      Write           ;  8 = write (output) to device
        dw      WriteVfy        ;  9 = write with verify
        dw      OutStat         ; 10 = return current output status
        dw      OutFlush        ; 11 = flush output buffers
        dw      IoctlWt         ; 12 = I/O control write
        dw      DevOpen         ; 13 = device open       (MS-DOS 3.0+)
        dw      DevClose        ; 14 = device close      (MS-DOS 3.0+)
        dw      RemMedia        ; 15 = removable media   (MS-DOS 3.0+)
        dw      OutBusy         ; 16 = output until busy (MS-DOS 3.0+)
        dw      Error           ; 17 = not used
        dw      Error           ; 18 = not used
        dw      GenIOCTL        ; 19 = generic IOCTL     (MS-DOS 3.2+)
        dw      Error           ; 20 = not used
        dw      Error           ; 21 = not used
        dw      Error           ; 22 = not used
        dw      GetLogDev       ; 23 = get logical device (MS-DOS 3.2+)
        dw      SetLogDev       ; 24 = set logical device (MS-DOS 3.2+)


Strat   proc    far             ; device driver Strategy routine,
                                ; called by MS-DOS kernel with
                                ; ES:BX = address of request header

                                ; save pointer to request header
        mov     word ptr cs:[RHPtr],bx
        mov     word ptr cs:[RHPtr+2],es

        ret                     ; back to MS-DOS kernel

Strat   endp


Intr    proc   far              ; device driver Interrupt routine,
                                ; called by MS-DOS kernel immediately
                                ; after call to Strategy routine

        push    ax              ; save general registers
        push    bx
        push    cx
        push    dx
        push    ds
        push    es
        push    di
        push    si
        push    bp

        push    cs              ; make local data addressable
        pop     ds              ; by setting DS = CS

        les     di,[RHPtr]      ; let ES:DI = request header

                                ; get BX = command code
        mov     bl,es:[di+2]
        xor     bh,bh
        cmp     bx,MaxCmd       ; make sure it's valid
        jle     Intr1           ; jump, function code is ok
        call    Error           ; set error bit, "Unknown Command" code
        jmp     Intr2

Intr1:  shl     bx,1            ; form index to dispatch table
                                ; and branch to command-code routine
        call    word ptr [bx+Dispatch]

        les     di,[RHPtr]      ; ES:DI = address of request header

Intr2:  or      ax,0100h        ; merge Done bit into status and
        mov     es:[di+3],ax    ; store status into request header

        pop     bp              ; restore general registers
        pop     si
        pop     di
        pop     es
        pop     ds
        pop     dx
        pop     cx
        pop     bx
        pop     ax
        ret                     ; return to MS-DOS kernel


; Command-code routines are called by the Interrupt routine
; via the dispatch table with ES:DI pointing to the request
; header. Each routine should return AX = 00H if function was
; completed successfully or AX = 8000H + error code if
; function failed.


MediaChk proc   near            ; function 1 = Media Check

        xor     ax,ax
        ret

MediaChk endp

BuildBPB proc   near            ; function 2 = Build BPB

        xor     ax,ax
        ret

BuildBPB endp


IoctlRd proc    near            ; function 3 = I/O Control Read

        xor     ax,ax
        ret

IoctlRd endp


Read    proc    near            ; function 4 = Read (Input)

        xor     ax,ax
        ret

Read    endp


NdRead  proc    near            ; function 5 = Nondestructive Read

        xor     ax,ax
        ret

NdRead  endp


InpStat proc    near            ; function 6 = Input Status

        xor     ax,ax
        ret

InpStat endp


InpFlush proc   near            ; function 7 = Flush Input Buffers

        xor     ax,ax
        ret

InpFlush endp

Write   proc    near            ; function 8 = Write (Output)

        xor     ax,ax
        ret

Write   endp


WriteVfy proc   near            ; function 9 = Write with Verify

        xor     ax,ax
        ret

WriteVfy endp


OutStat proc    near            ; function 10 = Output Status

        xor     ax,ax
        ret

OutStat endp


OutFlush proc   near            ; function 11 = Flush Output Buffers

        xor     ax,ax
        ret

OutFlush endp


IoctlWt proc    near            ; function 12 = I/O Control Write

        xor     ax,ax
        ret

IoctlWt endp


DevOpen proc    near            ; function 13 = Device Open

        xor     ax,ax
        ret

DevOpen endp

DevClose proc   near            ; function 14 = Device Close

        xor     ax,ax
        ret

DevClose endp


RemMedia proc   near            ; function 15 = Removable Media

        xor     ax,ax
        ret

RemMedia endp


OutBusy proc    near            ; function 16 = Output Until Busy

        xor     ax,ax
        ret

OutBusy endp


GenIOCTL proc   near            ; function 19 = Generic IOCTL

        xor     ax,ax
        ret

GenIOCTL endp


GetLogDev proc  near            ; function 23 = Get Logical Device

        xor     ax,ax
        ret

GetLogDev endp


SetLogDev proc  near            ; function 24 = Set Logical Device

        xor     ax,ax
        ret

SetLogDev endp


Error   proc    near            ; bad command code in request header

        mov     ax,8003h        ; error bit + "Unknown Command" code
        ret

Error   endp


Init    proc    near            ; function 0 = initialize driver

        push    es              ; save address of request header
        push    di

        mov     ah,9            ; display driver sign-on message
        mov     dx,offset Ident
        int     21h

        pop     di              ; restore request header address
        pop     es

                                ; set address of free memory
                                ; above driver (break address)
        mov     word ptr es:[di+14],offset Init
        mov     word ptr es:[di+16],cs

        xor     ax,ax           ; return status
        ret

Init    endp

Ident   db      cr,lf,lf
        db      'TEMPLATE Example Device Driver'
        db      cr,lf,eom

Intr    endp


_TEXT   ends

        end



───────────────────────────────────────────────────────────────────────────


Figure 15-15.
TINYDISK.ASM, the source file for the TINYDISK.SYS driver.


        name    tinydisk
        title   TINYDISK example block-device driver

; TINYDISK.ASM --- 64 KB RAMdisk
;
; Ray Duncan, July 1987
; Example of a simple installable block-device driver.

_TEXT   segment public 'CODE'

        assume  cs:_TEXT,ds:_TEXT,es:_TEXT

        org     0

MaxCmd  equ     12              ; max driver command code
                                ; (no MS-DOS 3.x functions)

cr      equ     0dh             ; ASCII carriage return
lf      equ     0ah             ; ASCII linefeed
blank   equ     020h            ; ASCII space code
eom     equ     '$'             ; end-of-message signal

Secsize equ     512             ; bytes/sector, IBM-compatible media

                                ; device-driver header
Header  dd      -1              ; link to next driver in chain
        dw      0               ; device attribute word
        dw      Strat           ; "Strategy" routine entry point
        dw      Intr            ; "Interrupt" routine entry point
        db      1               ; number of units, this device
        db      7 dup (0)       ; reserved area (block-device drivers)

RHPtr   dd      ?               ; segment:offset of request header

Secseg  dw      ?               ; segment base of sector storage

Xfrsec  dw      0               ; current sector for transfer
Xfrcnt  dw      0               ; sectors successfully transferred
Xfrreq  dw      0               ; number of sectors requested
Xfraddr dd      0               ; working address for transfer

Array   dw      BPB             ; array of pointers to BPB
                                ; for each supported unit


Bootrec equ     $

        jmp     $               ; phony JMP at start of
        nop                     ; boot sector; this field
                                ; must be 3 bytes

        db      'MS   2.0'      ; OEM identity field

                                ; BIOS Parameter Block (BPB)
BPB     dw      Secsize         ; 00H - bytes per sector
        db      1               ; 02H - sectors per cluster
        dw      1               ; 03H - reserved sectors
        db      1               ; 05H - number of FATs
        dw      32              ; 06H - root directory entries
        dw      128             ; 08H - sectors = 64 KB/secsize
        db      0f8h            ; 0AH - media descriptor
        dw      1               ; 0BH - sectors per FAT

Bootrec_len equ $-Bootrec


Strat   proc    far             ; RAMdisk strategy routine

                                ; save address of request header
        mov     word ptr cs:RHPtr,bx
        mov     word ptr cs:[RHPtr+2],es
        ret                     ; back to MS-DOS kernel

Strat   endp

Intr    proc    far             ; RAMdisk interrupt routine

        push    ax              ; save general registers
        push    bx
        push    cx
        push    dx
        push    ds
        push    es
        push    di
        push    si
        push    bp

        mov     ax,cs           ; make local data addressable
        mov     ds,ax

        les     di,[RHPtr]      ; ES:DI = request header

        mov     bl,es:[di+2]    ; get command code
        xor     bh,bh
        cmp     bx,MaxCmd       ; make sure it's valid
        jle     Intr1           ; jump, function code is ok
        mov     ax,8003h        ; set Error bit and
        jmp     Intr3           ; "Unknown Command" error code

Intr1:  shl     bx,1            ; form index to dispatch table and
                                ; branch to command-code routine
        call    word ptr [bx+Dispatch]
                                ; should return AX = status

        les     di,[RHPtr]      ; restore ES:DI = request header

Intr3:  or      ax,0100h        ; merge Done bit into status and store
        mov     es:[di+3],ax    ; status into request header

Intr4:  pop     bp              ; restore general registers
        pop     si
        pop     di
        pop     es
        pop     ds
        pop     dx
        pop     cx
        pop     bx
        pop     ax
        ret                     ; return to MS-DOS kernel

Intr    endp

Dispatch:                       ; command-code dispatch table
                                ; all command-code routines are
                                ; entered with ES:DI pointing
                                ; to request header and return
                                ; the operation status in AX
        dw      Init            ;  0 = initialize driver
        dw      MediaChk        ;  1 = media check on block device
        dw      BuildBPB        ;  2 = build BIOS parameter block
        dw      Dummy           ;  3 = I/O control read
        dw      Read            ;  4 = read (input) from device
        dw      Dummy           ;  5 = nondestructive read
        dw      Dummy           ;  6 = return current input status
        dw      Dummy           ;  7 = flush device input buffers
        dw      Write           ;  8 = write (output) to device
        dw      Write           ;  9 = write with verify
        dw      Dummy           ; 10 = return current output status
        dw      Dummy           ; 11 = flush output buffers
        dw      Dummy           ; 12 = I/O control write


MediaChk proc  near             ; command code 1 = Media Check

                                ; return "not changed" code
        mov     byte ptr es:[di+0eh],1
        xor     ax,ax           ; and success status
        ret

MediaChk endp


BuildBPB proc  near             ; command code 2 = Build BPB

                                ; put BPB address in request header
        mov     word ptr es:[di+12h],offset BPB
        mov     word ptr es:[di+14h],cs
        xor     ax,ax           ; return success status
        ret

BuildBPB endp


Read    proc    near            ; command code 4 = Read (Input)

        call    Setup           ; set up transfer variables

Read1:  mov     ax,Xfrcnt       ; done with all sectors yet?
        cmp     ax,Xfrreq
        je      Read2           ; jump if transfer completed
        mov     ax,Xfrsec       ; get next sector number
        call    Mapsec          ; and map it
        mov     ax,es
        mov     si,di
        les     di,Xfraddr      ; ES:DI = requester's buffer
        mov     ds,ax           ; DS:SI = RAMdisk address
        mov     cx,Secsize      ; transfer logical sector from
        cld                     ; RAMdisk to requestor
        rep movsb
        push    cs              ; restore local addressing
        pop     ds
        inc     Xfrsec          ; advance sector number
                                ; advance transfer address
        add     word ptr Xfraddr,Secsize
        inc     Xfrcnt          ; count sectors transferred
        jmp     Read1

Read2:                          ; all sectors transferred
        xor     ax,ax           ; return success status
        les     di,RHPtr        ; put actual transfer count
        mov     bx,Xfrcnt       ; into request header
        mov     es:[di+12h],bx
        ret

Read    endp


Write   proc    near            ; command code 8 = Write (Output)
                                ; command code 9 = Write with Verify

        call    Setup           ; set up transfer variables

Write1: mov     ax,Xfrcnt       ; done with all sectors yet?
        cmp     ax,Xfrreq
        je      Write2          ; jump if transfer completed

        mov     ax,Xfrsec       ; get next sector number
        call    Mapsec          ; and map it
        lds     si,Xfraddr
        mov     cx,Secsize      ; transfer logical sector from
        cld                     ; requester to RAMdisk
        rep movsb
        push    cs              ; restore local addressing
        pop     ds
        inc     Xfrsec          ; advance sector number
                                ; advance transfer address
        add     word ptr Xfraddr,Secsize
        inc     Xfrcnt          ; count sectors transferred
        jmp     Write1

Write2:                         ; all sectors transferred
        xor     ax,ax           ; return success status
        les     di,RHPtr        ; put actual transfer count
        mov     bx,Xfrcnt       ; into request header
        mov     es:[di+12h],bx
        ret

Write   endp


Dummy   proc    near            ; called for unsupported functions

        xor     ax,ax           ; return success flag for all
        ret

Dummy   endp


Mapsec  proc    near            ; map sector number to memory address
                                ; call with AX = logical sector no.
                                ; return ES:DI = memory address

        mov     di,Secsize/16   ; paragraphs per sector
        mul     di              ; * logical sector number
        add     ax,Secseg       ; + segment base of sector storage
        mov     es,ax
        xor     di,di           ; now ES:DI points to sector
        ret

Mapsec  endp


Setup   proc    near            ; set up for read or write
                                ; call ES:DI = request header
                                ; extracts address, start, count

        push    es              ; save request header address
        push    di
        mov     ax,es:[di+14h]  ; starting sector number
        mov     Xfrsec,ax
        mov     ax,es:[di+12h]  ; sectors requested
        mov     Xfrreq,ax
        les     di,es:[di+0eh]  ; requester's buffer address
        mov     word ptr Xfraddr,di
        mov     word ptr Xfraddr+2,es
        mov     Xfrcnt,0        ; initialize sectors transferred count
        pop     di              ; restore request header address
        pop     es
        ret

Setup   endp

Init    proc    near            ; command code 0 = Initialize driver
                                ; on entry ES:DI = request header

        mov     ax,cs           ; calculate segment base for sector
        add     ax,Driver_len   ; storage and save it
        mov     Secseg,ax
        add     ax,1000h        ; add 1000H paras (64 KB) and
        mov     es:[di+10h],ax  ; set address of free memory
        mov     word ptr es:[di+0eh],0

        call    Format          ; format the RAMdisk

        call    Signon          ; display driver identification

        les     di,cs:RHPtr     ; restore ES:DI = request header
                                ; set logical units = 1
        mov     byte ptr es:[di+0dh],1
                                ; set address of BPB array
        mov     word ptr es:[di+12h],offset Array
        mov     word ptr es:[di+14h],cs

        xor     ax,ax           ; return success status
        ret

Init    endp


Format  proc    near            ; format the RAMdisk area

        mov     es,Secseg       ; first zero out RAMdisk
        xor     di,di
        mov     cx,8000h        ; 32 K words = 64 KB
        xor     ax,ax
        cld
        rep stosw

        mov     ax,0            ; get address of logical
        call    Mapsec          ; sector zero
        mov     si,offset Bootrec
        mov     cx,Bootrec_len
        rep movsb               ; and copy boot record to it

        mov     ax,word ptr BPB+3
        call    Mapsec          ; get address of 1st FAT sector
        mov     al,byte ptr BPB+0ah
        mov     es:[di],al      ; put media ID byte into it
        mov     word ptr es:[di+1],-1

        mov     ax,word ptr BPB+3
        add     ax,word ptr BPB+0bh
        call    Mapsec          ; get address of 1st directory sector
        mov     si,offset Volname
        mov     cx,Volname_len
        rep movsb               ; copy volume label to it

        ret                     ; done with formatting

Format  endp


Signon  proc    near            ; driver identification message

        les     di,RHPtr        ; let ES:DI = request header
        mov     al,es:[di+22]   ; get drive code from header,
        add     al,'A'          ; convert it to ASCII, and
        mov     drive,al        ; store into sign-on message

        mov     ah,30h          ; get MS-DOS version
        int     21h
        cmp     al,2
        ja      Signon1         ; jump if version 3.0 or later
        mov     Ident1,eom      ; version 2.x, don't print drive

Signon1:                        ; print sign-on message
        mov     ah,09H          ; Function 09H = print string
        mov     dx,offset Ident ; DS:DX = address of message
        int     21h             ; transfer to MS-DOS

        ret                     ; back to caller

Signon  endp


Ident   db      cr,lf,lf        ; driver sign-on message
        db      'TINYDISK 64 KB RAMdisk'
        db      cr,lf
Ident1  db      'RAMdisk will be drive '
Drive   db      'X:'
        db      cr,lf,eom


Volname db      'DOSREF_DISK'   ; volume label for RAMdisk
        db      08h             ; attribute byte
        db      10 dup (0)      ; reserved area
        dw      0               ; time = 00:00
        dw      0f01h           ; date = August 1, 1987
        db      6 dup (0)       ; reserved area

Volname_len equ $-volname

Driver_len dw (($-header)/16)+1 ; driver size in paragraphs

_TEXT   ends

        end



───────────────────────────────────────────────────────────────────────────


Figure 17-11.
The SAMPLE.C source code.


/* SAMPLE.C -- Demonstration Windows Program */

#include <windows.h>
#include "sample.h"

long FAR PASCAL WndProc (HWND, unsigned, WORD, LONG) ;

int PASCAL WinMain (hInstance, hPrevInstance, lpszCmdLine, nCmdShow)
        HANDLE      hInstance, hPrevInstance ;
        LPSTR       lpszCmdLine ;
        int         nCmdShow ;
        {
        WNDCLASS    wndclass ;
        HWND        hWnd ;
        MSG         msg ;
        static char szAppName [] = "Sample" ;

                /*---------------------------*/
                /* Register the Window Class */
                /*---------------------------*/

        if (!hPrevInstance)
            {
            wndclass.style         = CS_HREDRAW  CS_VREDRAW ;
            wndclass.lpfnWndProc   = WndProc ;
            wndclass.cbClsExtra    = 0 ;
            wndclass.cbWndExtra    = 0 ;
            wndclass.hInstance     = hInstance ;
            wndclass.hIcon         = NULL ;
            wndclass.hCursor       = LoadCursor (NULL, IDC_ARROW) ;
            wndclass.hbrBackground = GetStockObject (WHITE_BRUSH) ;
            wndclass.lpszMenuName  = szAppName ;
            wndclass.lpszClassName = szAppName ;

            RegisterClass (&wndclass) ;
            }

                /*----------------------------------*/
                /* Create the window and display it */
                /*----------------------------------*/

        hWnd = CreateWindow (szAppName, "Demonstration Windows Program",
                            WS_OVERLAPPEDWINDOW,
                            (int) CW_USEDEFAULT, 0,
                            (int) CW_USEDEFAULT, 0,
                            NULL, NULL, hInstance, NULL) ;

        ShowWindow (hWnd, nCmdShow) ;
        UpdateWindow (hWnd) ;

                /*----------------------------------------------*/
                /* Stay in message loop until a WM_QUIT message */
                /*----------------------------------------------*/

        while (GetMessage (&msg, NULL, 0, 0))
            {
            TranslateMessage (&msg) ;
            DispatchMessage (&msg) ;
            }
        return msg.wParam ;
        }

long FAR PASCAL WndProc (hWnd, iMessage, wParam, lParam)
        HWND         hWnd ;
        unsigned     iMessage ;
        WORD         wParam ;
        LONG         lParam ;
        {
        PAINTSTRUCT  ps ;
        HFONT        hFont ;
        HMENU        hMenu ;
        static short xClient, yClient, nCurrentFont = IDM_SCRIPT ;
        static BYTE  cFamily [] = { FF_SCRIPT, FF_MODERN, FF_ROMAN } ;
        static char  *szFace [] = { "Script",  "Modern",  "Roman"  } ;

        switch (iMessage)
            {

                    /*---------------------------------------------*/
                    /* WM_COMMAND message: Change checkmarked font */
                    /*---------------------------------------------*/

            case WM_COMMAND:
                hMenu = GetMenu (hWnd) ;
                CheckMenuItem (hMenu, nCurrentFont, MF_UNCHECKED) ;
                nCurrentFont = wParam ;
                CheckMenuItem (hMenu, nCurrentFont, MF_CHECKED) ;
                InvalidateRect (hWnd, NULL, TRUE) ;
                break ;
                    /*--------------------------------------------*/
                    /* WM_SIZE message: Save dimensions of window */
                    /*--------------------------------------------*/

            case WM_SIZE:
                xClient = LOWORD (lParam) ;
                yClient = HIWORD (lParam) ;
                break ;

                    /*-----------------------------------------------*/
                    /* WM_PAINT message: Display "Windows" in Script */
                    /*-----------------------------------------------*/

            case WM_PAINT:
                BeginPaint (hWnd, &ps) ;

                hFont = CreateFont (yClient, xClient / 8,
                                    0, 0, 400, 0, 0, 0, OEM_CHARSET,
                                    OUT_STROKE_PRECIS, OUT_STROKE_PRECIS,
                                    DRAFT_QUALITY, (BYTE) VARIABLE_PITCH
                                    cFamily [nCurrentFont - IDM_SCRIPT],
                                    szFace  [nCurrentFont - IDM_SCRIPT]) ;

                hFont = SelectObject (ps.hdc, hFont) ;
                TextOut (ps.hdc, 0, 0, "Windows", 7) ;

                DeleteObject (SelectObject (ps.hdc, hFont)) ;
                EndPaint (hWnd, &ps) ;
                break ;

                    /*---------------------------------------*/
                    /* WM_DESTROY message: Post Quit message */
                    /*---------------------------------------*/

            case WM_DESTROY:
                PostQuitMessage (0) ;
                break ;

                    /*---------------------------------------*/
                    /* Other messages: Do default processing */
                    /*---------------------------------------*/

            default:
                return DefWindowProc (hWnd, iMessage, wParam, lParam) ;
            }
        return 0L ;
        }



───────────────────────────────────────────────────────────────────────────


Figure 18-1.
A routine to compute exponentials.


'  EXP.BAS -- COMPUTE EXPONENTIAL WITH INFINITE SERIES
'
' **********************************************************************
' *                                                                     *
' *  EXP                                                                *
' *                                                                     *
' *  This routine computes EXP(x) using the following infinite series:  *
' *                                                                     *
' *                       x    x^2   x^3   x^4   x^5                    *
' *         EXP(x) = 1 + --- + --- + --- + --- + --- + ...              *
' *                       1!    2!    3!    4!    5!                    *
' *                                                                     *
' *                                                                     *
' *  The program requests a value for x and a value for the convergence *
' *  criterion, C.  The program will continue evaluating the terms of   *
' *  the series until the difference between two terms is less than C.  *
' *                                                                     *
' *  The result of the calculation and the number of terms required to  *
' *  converge are printed.  The program will repeat until an x of 0 is  *
' *  entered.                                                           *
' *                                                                     *
' **********************************************************************

'
'  Initialize program variables
'
INITIALIZE:
        TERMS = 1
        FACT = 1
        LAST = 1.E35
        DELTA = 1.E34
        EX = 1
'
'  Input user data
'
        INPUT "Enter number:  "; X
        IF X = 0 THEN END
        INPUT "Enter convergence criterion (.0001 for 4 places):  "; C

'
'  Compute exponential until difference of last 2 terms is < C
'
        WHILE ABS(LAST - DELTA) >= C
            LAST = DELTA
            FACT = FACT * TERMS
            DELTA = X^TERMS / FACT
            EX = EX + DELTA
            TERMS = TERMS + 1
        WEND
'
'  Display answer and number of terms required to converge
'
        PRINT EX
        PRINT TERMS; "elements required to converge"
        PRINT

        GOTO INITIALIZE



───────────────────────────────────────────────────────────────────────────


Figure 18-3.
Corrected exponential calculation routine.


'  EXP.BAS -- COMPUTE EXPONENTIAL WITH INFINITE SERIES
'
' **********************************************************************
' *                                                                     *
' *  EXP                                                                *
' *                                                                     *
' *  This routine computes EXP(x) using the following infinite series:  *
' *                                                                     *
' *                       x    x^2   x^3   x^4   x^5                    *
' *         EXP(x) = 1 + --- + --- + --- + --- + --- + ...              *
' *                       1!    2!    3!    4!    5!                    *
' *                                                                     *
' *                                                                     *
' *  The program requests a value for x and a value for the convergence *
' *  criterion, C.  The program will continue evaluating the terms of   *
' *  the series until the amount added with a term is less than C.      *
' *                                                                     *
' *  The result of the calculation and the number of terms required to  *
' *  converge are printed.  The program will repeat until an x of 0 is  *
' *  entered.                                                           *
' *                                                                     *
' **********************************************************************

'
'  Initialize program variables
'
INITIALIZE:
        TERMS = 1
        FACT = 1
        DELTA = 1.E35
        EX = 1
'
'  Input user data
'
        INPUT "Enter number:  "; X
        IF X = 0 THEN END
        INPUT "Enter convergence criterion (.0001 for 4 places):  "; C

'
'  Compute exponential until difference of last 2 terms is < C



        WHILE DELTA > C
            FACT = FACT * TERMS
            DELTA = X^TERMS / FACT
            EX = EX + DELTA
            TERMS = TERMS + 1
        WEND

'
'  Display answer and number of terms required to converge
'
        PRINT EX
        PRINT TERMS; "elements required to converge"
        PRINT

        GOTO INITIALIZE



───────────────────────────────────────────────────────────────────────────


Figure 18-4.
Communications trace utility.


        TITLE   COMMSCOP -- COMMUNICATIONS TRACE UTILITY
; ***********************************************************************
; *                                                                     *
; *  COMMSCOP --                                                        *
; *     THIS PROGRAM MONITORS THE ACTIVITY ON A SPECIFIED COMM PORT     *
; *     AND PLACES A COPY OF ALL COMM ACTIVITY IN A RAM BUFFER. EACH   *
; *     ENTRY IN THE BUFFER IS TAGGED TO INDICATE WHETHER THE BYTE      *
; *     WAS SENT BY OR RECEIVED BY THE SYSTEM.                          *
; *                                                                     *
; *     COMMSCOP IS INSTALLED BY ENTERING                               *
; *                                                                     *
; *                     COMMSCOP                                        *
; *                                                                     *
; *     THIS WILL INSTALL COMMSCOP AND SET UP A 64K BUFFER TO BE USED   *
; *     FOR DATA LOGGING. REMEMBER THAT 2 BYTES ARE REQUIRED FOR       *
; *     EACH COMM BYTE, SO THE BUFFER IS ONLY 32K EVENTS LONG, OR ABOUT *
; *     30 SECONDS OF CONTINUOUS 9600 BAUD DATA. IN THE REAL WORLD,    *
; *     ASYNC DATA IS RARELY CONTINUOUS, SO THE BUFFER WILL PROBABLY    *
; *     HOLD MORE THAN 30 SECONDS WORTH OF DATA.                        *
; *                                                                     *
; *     WHEN INSTALLED, COMMSCOP INTERCEPTS ALL INT 14H CALLS. IF THE  *
; *     PROGRAM HAS BEEN ACTIVATED AND THE INT IS EITHER SEND OR RE-    *
; *     CEIVE DATA, A COPY OF THE DATA BYTE, PROPERLY TAGGED, IS PLACED *
; *     IN THE BUFFER. IN ANY CASE, DATA IS PASSED ON TO THE REAL      *
; *     INT 14H HANDLER.                                                *
; *                                                                     *
; *     COMMSCOP IS INVOKED BY ISSUING AN INT 60H CALL. THE INT HAS    *
; *     THE FOLLOWING CALLING SEQUENCE:                                 *
; *                                                                     *
; *             AH -- COMMAND                                           *
; *                   0 -- STOP TRACING, PLACE STOP MARK IN BUFFER      *
; *                   1 -- FLUSH BUFFER AND START TRACE                 *
; *                   2 -- RESUME TRACE                                 *
; *                   3 -- RETURN COMM BUFFER ADDRESSES                 *
; *             DX -- COMM PORT (ONLY USED WITH AH = 1 or 2)            *
; *                   0 -- COM1                                         *
; *                   1 -- COM2                                         *
; *                                                                     *
; *     THE FOLLOWING DATA IS RETURNED IN RESPONSE TO AH = 3:           *
; *                                                                     *
; *             CX -- BUFFER COUNT IN BYTES                             *
; *             DX -- SEGMENT ADDRESS OF THE START OF THE BUFFER        *
; *             BX -- OFFSET ADDRESS OF THE START OF THE BUFFER         *
; *                                                                     *
; *     THE COMM BUFFER IS FILLED WITH 2-BYTE DATA ENTRIES OF THE       *
; *     FOLLOWING FORM:                                                 *
; *                                                                     *
; *             BYTE 0 -- CONTROL                                       *
; *                  BIT 0 -- ON FOR RECEIVED DATA, OFF FOR TRANS.      *
; *                  BIT 7 -- STOP MARK -- INDICATES COLLECTION WAS     *
; *                              INTERRUPTED AND RESUMED.               *
; *             BYTE 1 -- 8-BIT DATA                                    *
; *                                                                     *
; ***********************************************************************

CSEG    SEGMENT
        ASSUME  CS:CSEG,DS:CSEG
        ORG     100H                    ;TO MAKE A COMM FILE

INITIALIZE:
        JMP     VECTOR_INIT             ;JUMP TO THE INITIALIZATION
                                        ; ROUTINE WHICH, TO SAVE SPACE,
                                        ; IS IN THE COMM BUFFER

;
;  SYSTEM VARIABLES
;
OLD_COMM_INT    DD      ?               ;ADDRESS OF REAL COMM INT
COUNT           DW      0               ;BUFFER COUNT
COMMSCOPE_INT   EQU     60H             ;COMMSCOPE CONTROL INT
STATUS          DB      0               ;PROCESSING STATUS
                                        ; 0 -- OFF
                                        ; 1 -- ON
PORT            DB      0               ;COMM PORT BEING TRACED
BUFPNTR         DW      VECTOR_INIT     ;NEXT BUFFER LOCATION

        SUBTTL  DATA INTERRUPT HANDLER
PAGE
; ***********************************************************************
; *                                                                     *
; *  COMMSCOPE                                                          *
; *     THIS PROCEDURE INTERCEPTS ALL INT 14H CALLS AND LOGS THE DATA   *
; *     IF APPROPRIATE.                                                 *
; *                                                                     *
; ***********************************************************************
COMMSCOPE       PROC    NEAR

        TEST    CS:STATUS,1             ;ARE WE ON?
        JZ      OLD_JUMP                ; NO, SIMPLY JUMP TO OLD HANDLER

        CMP     AH,00H                  ;SKIP SETUP CALLS
        JE      OLD_JUMP                ; .

        CMP     AH,03H                  ;SKIP STATUS REQUESTS
        JAE     OLD_JUMP                ; .

        CMP     AH,02H                  ;IS THIS A READ REQUEST?
        JE      GET_READ                ; YES, GO PROCESS

;
;  DATA WRITE REQUEST -- SAVE IF APPROPRIATE
;
        CMP     DL,CS:PORT              ;IS WRITE FOR PORT BEING TRACED?
        JNE     OLD_JUMP                ; NO, JUST PASS IT THROUGH

        PUSH    DS                      ;SAVE CALLER'S REGISTERS
        PUSH    BX                      ; .
        PUSH    CS                      ;SET UP DS FOR OUR PROGRAM
        POP     DS                      ; .
        MOV     BX,BUFPNTR              ;GET ADDR OF NEXT BUFFER LOC
        MOV     [BX],BYTE PTR 0         ;MARK AS TRANSMITTED BYTE
        MOV     [BX+1],AL               ;SAVE DATA IN BUFFER
        INC     COUNT                   ;INCREMENT BUFFER BYTE COUNT
        INC     COUNT                   ; .
        INC     BX                      ;POINT TO NEXT LOCATION
        INC     BX                      ; .
        MOV     BUFPNTR,BX              ;SAVE NEW POINTER
        JNZ     WRITE_DONE              ;ZERO MEANS BUFFER HAS WRAPPED

        MOV     STATUS,0                ;TURN COLLECTION OFF
WRITE_DONE:
        POP     BX                      ;RESTORE CALLER'S REGISTERS
        POP     DS                      ; .
        JMP     OLD_JUMP                ;PASS REQUEST ON TO BIOS ROUTINE
;
;  PROCESS A READ DATA REQUEST AND WRITE TO BUFFER IF APPROPRIATE
;
GET_READ:
        CMP     DL,CS:PORT              ;IS READ FOR PORT BEING TRACED?
        JNE     OLD_JUMP                ; NO, JUST PASS IT THROUGH

        PUSH    DS                      ;SAVE CALLER'S REGISTERS
        PUSH    BX                      ; .
        PUSH    CS                      ;SET UP DS FOR OUR PROGRAM
        POP     DS                      ; .

        PUSHF                           ;FAKE INT 14H CALL
        CLI                             ; .
        CALL    OLD_COMM_INT            ;PASS REQUEST ON TO BIOS
        TEST    AH,80H                  ;VALID READ?
        JNZ     READ_DONE               ; NO, SKIP BUFFER UPDATE
        MOV     BX,BUFPNTR              ;GET ADDR OF NEXT BUFFER LOC
        MOV     [BX],BYTE PTR 1         ;MARK AS RECEIVED BYTE
        MOV     [BX+1],AL               ;SAVE DATA IN BUFFER
        INC     COUNT                   ;INCREMENT BUFFER BYTE COUNT
        INC     COUNT                   ; .
        INC     BX                      ;POINT TO NEXT LOCATION
        INC     BX                      ; .
        MOV     BUFPNTR,BX              ;SAVE NEW POINTER
        JNZ     READ_DONE               ;ZERO MEANS BUFFER HAS WRAPPED

        MOV     STATUS,0                ;TURN COLLECTION OFF
READ_DONE:
        POP     BX                      ;RESTORE CALLER'S REGISTERS
        POP     DS                      ; .
        IRET

;
;  JUMP TO COMM BIOS ROUTINE
;
OLD_JUMP:
        JMP     CS:OLD_COMM_INT

COMMSCOPE ENDP

        SUBTTL  CONTROL INTERRUPT HANDLER
PAGE
; ***********************************************************************
; *                                                                     *
; *  CONTROL                                                            *
; *     THIS ROUTINE PROCESSES CONTROL REQUESTS.                        *
; *                                                                     *
; ***********************************************************************

CONTROL PROC    NEAR
        CMP     AH,00H                  ;STOP REQUEST?
        JNE     CNTL_START              ; NO, CHECK START
        PUSH    DS                      ;SAVE REGISTERS
        PUSH    BX                      ; .
        PUSH    CS                      ;SET DS FOR OUR ROUTINE
        POP     DS
        MOV     STATUS,0                ;TURN PROCESSING OFF
        MOV     BX,BUFPNTR              ;PLACE STOP MARK IN BUFFER
        MOV     [BX],BYTE PTR 80H       ; .
        MOV     [BX+1],BYTE PTR 0FFH    ; .
        INC     BX                      ;INCREMENT BUFFER POINTER
        INC     BX                      ; .
        MOV     BUFPNTR,BX              ; .
        INC     COUNT                   ;INCREMENT COUNT
        INC     COUNT                   ; .
        POP     BX                      ;RESTORE REGISTERS
        POP     DS                      ; .
        JMP     CONTROL_DONE

CNTL_START:
        CMP     AH,01H                  ;START REQUEST?
        JNE     CNTL_RESUME             ; NO, CHECK RESUME
        MOV     CS:PORT,DL              ;SAVE PORT TO TRACE
        MOV     CS:BUFPNTR,OFFSET VECTOR_INIT ;RESET BUFFER TO START
        MOV     CS:COUNT,0              ;ZERO COUNT
        MOV     CS:STATUS,1             ;START LOGGING
        JMP     CONTROL_DONE

CNTL_RESUME:
        CMP     AH,02H                  ;RESUME REQUEST?
        JNE     CNTL_STATUS             ; NO, CHECK STATUS
        CMP     CS:BUFPNTR,0            ;END OF BUFFER CONDITION?
        JE      CONTROL_DONE            ; YES, DO NOTHING
        MOV     CS:PORT,DL              ;SAVE PORT TO TRACE
        MOV     CS:STATUS,1             ;START LOGGING
        JMP     CONTROL_DONE

CNTL_STATUS:
        CMP     AH,03H                  ;RETURN STATUS REQUEST?
        JNE     CONTROL_DONE            ; NO, ERROR -- DO NOTHING
        MOV     CX,CS:COUNT             ;RETURN COUNT
        PUSH    CS                      ;RETURN SEGMENT ADDR OF BUFFER
        POP     DX                      ; .
        MOV     BX,OFFSET VECTOR_INIT   ;RETURN OFFSET ADDR OF BUFFER

CONTROL_DONE:
        IRET

CONTROL ENDP


        SUBTTL     INITIALIZE INTERRUPT VECTORS
PAGE
; ***********************************************************************
; *                                                                     *
; *  VECTOR_INIT                                                        *
; *     THIS PROCEDURE INITIALIZES THE INTERRUPT VECTORS AND THEN       *
; *     EXITS VIA THE MS-DOS TERMINATE-AND-STAY-RESIDENT FUNCTION.      *
; *     A BUFFER OF 64K IS RETAINED. THE FIRST AVAILABLE BYTE          *
; *     IN THE BUFFER IS THE OFFSET OF VECTOR_INIT.                     *
; *                                                                     *
; ***********************************************************************

        EVEN                            ;ASSURE BUFFER ON EVEN BOUNDARY
VECTOR_INIT     PROC     NEAR
;
;  GET ADDRESS OF COMM VECTOR (INT 14H)
;
        MOV     AH,35H



        MOV     AL,14H
        INT     21H
;
;  SAVE OLD COMM INT ADDRESS
;
        MOV     WORD PTR OLD_COMM_INT,BX
        MOV     AX,ES
        MOV     WORD PTR OLD_COMM_INT[2],AX
;
;  SET UP COMM INT TO POINT TO OUR ROUTINE
;
        MOV     DX,OFFSET COMMSCOPE
        MOV     AH,25H
        MOV     AL,14H
        INT     21H
;
;  INSTALL CONTROL ROUTINE INT
;
        MOV     DX,OFFSET CONTROL
        MOV     AH,25H
        MOV     AL,COMMSCOPE_INT
        INT     21H
;
;  SET LENGTH TO 64K, EXIT AND STAY RESIDENT
;
        MOV     AX,3100H          ;TERM AND STAY RES COMMAND
        MOV     DX,1000H          ;64K RESERVED
        INT     21H               ;DONE
VECTOR_INIT ENDP
CSEG    ENDS
        END     INITIALIZE



───────────────────────────────────────────────────────────────────────────


Figure 18-5.
A serial-trace control routine written in C.


/**********************************************************************
*                                                                      *
*  COMMSCMD                                                            *
*                                                                      *
*  This routine controls the COMMSCOP program that has been in-        *
*  stalled as a resident routine.  The operation performed is de-      *
*  termined by the command line.  The COMMSCMD program is invoked      *
*  as follows:                                                         *
*                                                                      *
*                COMMSCMD [[cmd][ port]]                               *
*                                                                      *
*  where cmd is the command to be executed                             *
*            STOP   -- stop trace                                      *
*            START  -- flush trace buffer and start trace              *
*            RESUME -- resume a stopped trace                          *
*        port is the COMM port to be traced (1=COM1, 2=COM2, etc.)     *
*                                                                      *
*  If cmd is omitted, STOP is assumed.  If port is omitted, 1 is       *
*  assumed.                                                            *
*                                                                      *
**********************************************************************/

#include <stdlib.h>
#include <stdio.h>
#include <dos.h>
#define COMMCMD 0x60

main(argc, argv)
int argc;
char *argv[];
{
    int cmd, port, result;
    static char commands[3] [10] = {"STOPPED", "STARTED", "RESUMED"};
    union REGS inregs, outregs;

    cmd = 0;
    port = 0;

    if (argc > 1)
        {
        if (0 == stricmp(argv[1], "STOP"))
            cmd = 0;
        else if (0 == stricmp(argv[1], "START"))
            cmd = 1;
        else if (0 == stricmp(argv[1], "RESUME"))
            cmd = 2;
        }

    if (argc == 3)
        {
        port = atoi(argv[2]);
        if (port > 0)
            port = port - 1;
        }

    inregs.h.ah = cmd;
    inregs.x.dx = port;
    result = int86(COMMCMD, &inregs, &outregs);


    printf("\nCommunications tracing %s for port COM%1d:\n",
            commands[cmd], port + 1);
}



───────────────────────────────────────────────────────────────────────────


Figure 18-6.
A QuickBASIC version of COMMSCMD.


' **********************************************************************
' *                                                                     *
' *  COMMSCMD                                                           *
' *                                                                     *
' *  This routine controls the COMMSCOP program that has been in-       *
' *  stalled as a resident routine.  The operation performed is de-     *
' *  termined by the command line.  The COMMSCMD program is invoked     *
' *  as follows:                                                        *
' *                                                                     *
' *             COMMSCMD [[cmd][,port]]                                 *
' *                                                                     *
' *  where cmd is the command to be executed                            *
' *             STOP   -- stop trace                                    *
' *             START  -- flush trace buffer and start trace            *
' *             RESUME -- resume a stopped trace                        *
' *        port is the COMM port to be traced (1=COM1 , 2=COM2 , etc.)    *
' *                                                                     *
' *  If cmd is omitted, STOP is assumed.  If port is omitted, 1 is      *
' *  assumed.                                                           *
' *                                                                     *
' **********************************************************************

        '
        '  Establish system constants and variables
        '
        DEFINT A-Z

        DIM INREG(7), OUTREG(7)         'Define register arrays
        RAX = 0                         'Establish values for 8086
        RBX = 1                         '  registers
        RCX = 2                         '  .
        RDX = 3                         '  .
        RBP = 4                         '  .
        RSI = 5                         '  .
        RDI = 6                         '  .
        RFL = 7                         '  .

        DIM TEXT$(2)

        TEXT$(0) = "STOPPED"
        TEXT$(1) = "STARTED"
        TEXT$(2) = "RESUMED"

        '
        '  Process command-line tail
        '
        C$ = COMMAND$                   'Get command-line data

        IF LEN(C$) = 0 THEN             'If no command line specified
            CMD = 0                     'Set CMD to STOP
            PORT = 0                    'Set PORT to COM1
            GOTO SENDCMD
        END IF

        COMMA = INSTR(C$, ", ")         'Extract operands
        IF COMMA = 0 THEN
            CMDTXT$ = C$
            PORT = 0
        ELSE
            CMDTXT$ = LEFT$(C$, COMMA - 1)
            PORT = VAL(MID$(C$, COMMA + 1)) - 1
        END IF

        IF PORT < 0 THEN PORT = 0

        IF CMDTXT$ = "STOP" THEN
            CMD = 0
        ELSEIF CMDTXT$ = "START" THEN
            CMD = 1
        ELSEIF CMDTXT$ = "RESUME" THEN
            CMD = 2
        ELSE
            CMD = 0
        END IF

        '
        '  Send command to COMMSCOP routine
        '
SENDCMD:
        INREG(RAX) = 256 * CMD
        INREG(RDX) = PORT
        CALL INT86(&H60, VARPTR(INREG(0)), VARPTR(OUTREG(0)))
        '
        '  Notify user that action is complete
        '
        PRINT : PRINT
        PRINT "Communications tracing "; TEXT$(CMD);
        IF CMD <> 0 THEN
            PRINT " for port COM"; MID$(STR$(PORT + 1), 2); ":"
        ELSE
            PRINT
        END IF

        END



───────────────────────────────────────────────────────────────────────────


Figure 18-7.
Formatted dump routine for serial-trace buffer.


' **********************************************************************
' *                                                                     *
' *  COMMDUMP                                                           *
' *                                                                     *
' *  This routine dumps the contents of the COMMSCOP trace buffer to    *
' *  the screen in a formatted manner.  Received data is shown in       *
' *  reverse video.  Where possible, the ASCII character for the byte   *
' *  is shown; otherwise a dot is shown.  The value of the byte is      *
' *  displayed in hex below the character.  Points where tracing was    *
' *  stopped are shown by a solid bar.                                  *
' *                                                                     *
' **********************************************************************

        '
        '  Establish system constants and variables
        '
        DEFINT A-Z

        DIM INREG(7), OUTREG(7)         'Define register arrays

        RAX = 0                         'Establish values for 8086
        RBX = 1                         ' registers
        RCX = 2                         '  .
        RDX = 3                         '  .
        RBP = 4                         '  .
        RSI = 5                         '  .
        RDI = 6                         '  .
        RFL = 7                         '  .

        '
        '  Interrogate COMMSCOP to obtain addresses and count of data in
        '  trace buffer
        '
        INREG(RAX) = &H0300             'Request address data and count
        CALL INT86(&H60, VARPTR(INREG(0)), VARPTR(OUTREG(0)))

        NUM = OUTREG(RCX)               'Number of bytes in buffer
        BUFSEG = OUTREG(RDX)            'Buffer segment address
        BUFOFF = OUTREG(RBX)            'Offset of buffer start

        IF NUM = 0 THEN END

        '
        '  Set screen up and display control data
        '
        CLS
        KEY OFF
        LOCATE 25, 1
        PRINT "NUM ="; NUM;"BUFSEG = "; HEX$(BUFSEG); " BUFOFF = ";
        PRINT HEX$(BUFOFF);
        LOCATE 4, 1
        PRINT STRING$(80,"-")
        DEF SEG = BUFSEG

        '
        '  Set up display control variables
        '
        DLINE = 1
        DCOL = 1
        DSHOWN = 0

        '
        '  Fetch and display each character in buffer
        '
        FOR I= BUFOFF TO BUFOFF+NUM-2 STEP 2
            STAT = PEEK(I)
            DAT = PEEK(I + 1)

            IF (STAT AND 1) = 0 THEN
                COLOR 7, 0
            ELSE
                COLOR 0, 7
            END IF

            RLINE = (DLINE-1) * 4 + 1
            IF (STAT AND &H80) = 0 THEN
                LOCATE RLINE, DCOL
                C$ = CHR$(DAT)
                IF DAT < 32 THEN C$ = "."
                PRINT C$;
                H$ = RIGHT$("00" + HEX$(DAT), 2)
                LOCATE RLINE + 1, DCOL
                PRINT LEFT$(H$, 1);
                LOCATE RLINE + 2, DCOL
                PRINT RIGHT$(H$, 1);
            ELSE
                LOCATE RLINE, DCOL
                PRINT CHR$(178);
                LOCATE RLINE + 1, DCOL
                PRINT CHR$(178);
                LOCATE RLINE + 2, DCOL
                PRINT CHR$(178);
            END IF

            DCOL = DCOL + 1
            IF DCOL > 80 THEN
                COLOR 7, 0
                DCOL = 1
                DLINE = DLINE + 1
                SHOWN = SHOWN + 1
                IF SHOWN = 6 THEN
                    LOCATE 25, 50
                    COLOR 0, 7
                    PRINT "ENTER ANY KEY TO CONTINUE:  ";
                    WHILE LEN(INKEY$) = 0
                    WEND
                    COLOR 7, 0
                    LOCATE 25, 50
                    PRINT SPACE$(29);
                    SHOWN = 0
                END IF
                IF DLINE > 6 THEN
                    LOCATE 24, 1
                    PRINT : PRINT : PRINT : PRINT
                    LOCATE 24, 1
                    PRINT STRING$(80, "-");
                    DLINE = 6
                ELSE
                    LOCATE DLINE * 4, 1
                    PRINT STRING$(80, "-");
                END IF
            END IF

        NEXT I

        END



───────────────────────────────────────────────────────────────────────────


Figure 18-9.
Incorrect serial test routine.


        TITLE TESTCOMM -- TEST COMMSCOP ROUTINE
; **********************************************************************
; *                                                                     *
; *  TESTCOMM                                                           *
; *     THIS ROUTINE PROVIDES DATA FOR THE COMMSCOP ROUTINE.  IT READS  *
; *     CHARACTERS FROM THE KEYBOARD AND WRITES THEM TO COM1 USING      *
; *     INT 14H.  DATA IS ALSO READ FROM INT 14H AND DISPLAYED ON THE   *
; *     SCREEN.  THE ROUTINE RETURNS TO MS-DOS WHEN Ctrl-C IS PRESSED   *
; *     ON THE KEYBOARD.                                                *
; *                                                                     *
; **********************************************************************

SSEG    SEGMENT PARA STACK 'STACK'
        DW      128 DUP(?)
SSEG    ENDS

CSEG    SEGMENT
        ASSUME  CS:CSEG,SS:SSEG
BEGIN   PROC    FAR
        PUSH    DS                      ;SET UP FOR RET TO MS-DOS
        XOR     AX,AX                   ; .
        PUSH    AX                      ; .

MAINLOOP:
        MOV     AH,6                    ;USE MS-DOS CALL TO CHECK FOR
        MOV     DL,0FFH                 ; KEYBOARD ACTIVITY
        INT     21                      ; IF NO CHARACTER, JUMP TO
        JZ      TESTCOMM                ; COMM ACTIVITY TEST

        CMP     AL,03                   ;WAS CHARACTER A Ctrl-C?
        JNE     SENDCOMM                ; NO, SEND IT TO SERIAL PORT
        RET                             ; YES, RETURN TO MS-DOS

SENDCOMM:
        MOV     AH,01                   ;USE INT 14H WRITE FUNCTION TO
        MOV     DX,0                    ; SEND DATA TO SERIAL PORT
        INT     14H                     ; .

TESTCOMM:
        MOV     AH,3                    ;GET SERIAL PORT STATUS
        MOV     DX,0                    ; .
        INT     14H                     ; .
        AND     AH,1                    ;ANY DATA WAITING?
        JZ      MAINLOOP                ; NO, GO BACK TO KEYBOARD TEST
        MOV     AH,2                    ;READ SERIAL DATA
        MOV     DX,0                    ; .
        INT     14H                     ; .
        MOV     AH,6                    ;WRITE SERIAL DATA TO SCREEN
        INT     21H                     ; .
        JMP     MAINLOOP                ;CONTINUE
BEGIN   ENDP
CSEG    ENDS
        END     BEGIN



───────────────────────────────────────────────────────────────────────────


Figure 18-10.
Correct serial test routine.


        TITLE TESTCOMM -- TEST COMMSCOP ROUTINE
; **********************************************************************
; *                                                                     *
; *  TESTCOMM                                                           *
; *     THIS ROUTINE PROVIDES DATA FOR THE COMMSCOP ROUTINE.  IT READS  *
; *  CHARACTERS FROM THE KEYBOARD AND WRITES THEM TO COM1 USING         *
; *  INT 14H.  DATA IS ALSO READ FROM INT 14H AND DISPLAYED ON THE      *
; *  SCREEN.  THE ROUTINE RETURNS TO MS-DOS WHEN Ctrl-C IS PRESSED      *
; *  ON THE KEYBOARD.                                                   *
; *                                                                     *
; **********************************************************************

SSEG    SEGMENT PARA STACK 'STACK'
        DW      128 DUP(?)
SSEG    ENDS

CSEG    SEGMENT
        ASSUME  CS:CSEG,SS:SSEG
BEGIN   PROC    FAR
        PUSH    DS                      ;SET UP FOR RET TO MS-DOS
        XOR     AX,AX                   ; .
        PUSH    AX                      ; .

MAINLOOP:
        MOV     AH,6                    ;USE DOS CALL TO CHECK FOR
        MOV     DL,0FFH                 ; KEYBOARD ACTIVITY
        INT     21H                     ; IF NO CHARACTER, JUMP TO
        JZ      TESTCOMM                ; COMM ACTIVITY TEST

        CMP     AL,03                   ;WAS CHARACTER A Ctrl-C?
        JNE     SENDCOMM                ; NO, SEND IT TO SERIAL PORT
        RET                             ; YES, RETURN TO MS-DOS

SENDCOMM:
        MOV     AH,01                   ;USE INT 14H WRITE FUNCTION TO
        MOV     DX,0                    ; SEND DATA TO SERIAL PORT
        INT     14H                     ; .

TESTCOMM:
        MOV     AH,3                    ;GET SERIAL PORT STATUS
        MOV     DX,0                    ; .
        INT     14H                     ; .
        AND     AH,1                    ;ANY DATA WAITING?
        JZ      MAINLOOP                ; NO, GO BACK TO KEYBOARD TEST
        MOV     AH,2                    ;READ SERIAL DATA
        MOV     DX,0                    ; .
        INT     14H                     ; .
        MOV     AH,6                    ;WRITE SERIAL DATA TO SCREEN
        MOV     DL,AL                   ; .
        INT     21H                     ; .
        JMP     MAINLOOP                ;CONTINUE

BEGIN   ENDP
CSEG    ENDS
        END     BEGIN



───────────────────────────────────────────────────────────────────────────


Figure 18-11.
An incorrect version of the serial trace utility.


        TITLE   BADSCOP -- BAD VERSION OF COMMUNICATIONS TRACE UTILITY
; ***********************************************************************
; *                                                                     *
; *  BADSCOP _                                                          *
; *     THIS PROGRAM MONITORS THE ACTIVITY ON A SPECIFIED COMM PORT     *
; *     AND PLACES A COPY OF ALL COMM ACTIVITY IN A RAM BUFFER.  EACH   *
; *     ENTRY IN THE BUFFER IS TAGGED TO INDICATE WHETHER THE BYTE      *
; *     WAS SENT BY OR RECEIVED BY THE SYSTEM.                          *
; *                                                                     *
; *     BADSCOP IS INSTALLED BY ENTERING                                *
; *                                                                     *
; *                     BADSCOP                                         *
; *                                                                     *

; *  THIS WILL INSTALL BADSCOP AND SET UP A 64K BUFFER TO BE USED       *
; *  FOR DATA LOGGING.  REMEMBER THAT 2 BYTES ARE REQUIRED FOR          *
; *  EACH COMM BYTE, SO THE BUFFER IS ONLY 32K EVENTS LONG, OR ABOUT    *
; *  30 SECONDS OF CONTINUOUS 9600 BAUD DATA.  IN THE REAL WORLD,       *
; *  ASYNC DATA IS RARELY CONTINUOUS, SO THE BUFFER WILL PROBABLY       *
; *  HOLD MORE THAN 30 SECONDS WORTH OF DATA.                           *
; *                                                                     *
; *  WHEN INSTALLED, BADSCOP INTERCEPTS ALL INT 14H CALLS.  IF THE      *
; *  PROGRAM HAS BEEN ACTIVATED AND THE INT IS EITHER SEND OR RE-       *
; *  CEIVE DATA, A COPY OF THE DATA BYTE, PROPERLY TAGGED, IS PLACED    *
; *  IN THE BUFFER.  IN ANY CASE, DATA IS PASSED ON TO THE REAL         *
; *  INT 14H HANDLER.                                                   *
; *                                                                     *
; *  BADSCOP IS INVOKED BY ISSUING AN INT 60H CALL.  THE INT HAS        *
; *  THE FOLLOWING CALLING SEQUENCE:                                    *
; *                                                                     *
; *       AH _ COMMAND                                                  *
; *            0 _ STOP TRACING, PLACE STOP MARK IN BUFFER              *
; *            1 _ FLUSH BUFFER AND START TRACE                         *
; *            2 _ RESUME TRACE                                         *
; *            3 _ RETURN COMM BUFFER ADDRESSES                         *
; *       DX _ COMM PORT (ONLY USED WITH AH = 1 or 2)                   *
; *            0 _ COM1                                                 *
; *            1 _ COM2                                                 *
; *                                                                     *
; *  THE FOLLOWING DATA IS RETURNED IN RESPONSE TO AH = 3:              *
; *                                                                     *
; *       CX _ BUFFER COUNT IN BYTES                                    *
; *       DX _ SEGMENT ADDRESS OF THE START OF THE BUFFER               *
; *       BX _ OFFSET ADDRESS OF THE START OF THE BUFFER                *
; *                                                                     *
; *  THE COMM BUFFER IS FILLED WITH 2-BYTE DATA ENTRIES OF THE          *
; *  FOLLOWING FORM:                                                    *
; *                                                                     *
; *       BYTE 0 _ CONTROL                                              *
; *            BIT 0 _ ON FOR RECEIVED DATA, OFF FOR TRANS.             *
; *            BIT 7 _ STOP MARK _ INDICATES COLLECTION WAS             *
; *                  INTERRUPTED AND RESUMED.                           *
; *       BYTE 1 _ 8-BIT DATA                                           *
; *                                                                     *
; **********************************************************************

        PUBLIC  INITIALIZE,CONTROL,VECTOR_INIT,COMMSCOPE
        PUBLIC  OLD_COMM_INT,COUNT,STATUS,PORT,BUFPNTR

CSEG    SEGMENT
        ASSUME  CS:CSEG,DS:CSEG
        ORG     100H                    ;TO MAKE A COM FILE

INITIALIZE:
        JMP     VECTOR_INIT             ;JUMP TO THE INITIALIZATION
                                        ; ROUTINE WHICH, TO SAVE SPACE,
                                        ; IS IN THE COMM BUFFER

;
;  SYSTEM VARIABLES
;
OLD_COMM_INT    DD      ?               ;ADDRESS OF REAL COMM INT
COUNT           DW      0               ;BUFFER COUNT
COMMSCOPE_INT   EQU     60H             ;COMMSCOPE CONTROL INT
STATUS          DB      0               ;PROCESSING STATUS
                                        ; 0 _ OFF
                                        ; 1 _ ON
PORT            DB      0               ;COMM PORT BEING TRACED
BUFPNTR         DW      VECTOR_INIT     ;NEXT BUFFER LOCATION

        SUBTTL  DATA INTERRUPT HANDLER
PAGE
; **********************************************************************
; *                                                                     *
; *  COMMSCOPE                                                          *
; *  THIS PROCEDURE INTERCEPTS ALL INT 14H CALLS AND LOGS THE DATA      *
; *  IF APPROPRIATE.                                                    *
; *                                                                     *
; **********************************************************************
COMMSCOPE       PROC    NEAR

        TEST    CS:STATUS,1             ;ARE WE ON?
        JZ      OLD_JUMP                ; NO, SIMPLY JUMP TO OLD HANDLER

        CMP     AH,00H                  ;SKIP SETUP CALLS
        JE      OLD_JUMP                ; .

        CMP     AH,03H                  ;SKIP STATUS REQUESTS
        JAE     OLD_JUMP                ; .

        CMP     AH,02H                  ;IS THIS A READ REQUEST?
        JE      GET_READ                ; YES, GO PROCESS

;
;  DATA WRITE REQUEST _ SAVE IF APPROPRIATE
;
        CMP     DL,CS:PORT              ;IS WRITE FOR PORT BEING TRACED?
        JNE     OLD_JUMP                ; NO, JUST PASS IT THROUGH

        PUSH    DS                      ;SAVE CALLER'S REGISTERS
        PUSH    BX                      ; .
        PUSH    CS                      ;SET UP DS FOR OUR PROGRAM
        POP     DS                      ; .
        MOV     BX,BUFPNTR              ;GET ADDRESS OF NEXT BUFFER
                                        ; LOCATION
        MOV     [BX],BYTE PTR 0         ;MARK AS TRANSMITTED BYTE
        MOV     [BX+1],AL               ;SAVE DATA IN BUFFER
        INC     COUNT                   ;INCREMENT BUFFER BYTE COUNT
        INC     COUNT                   ; .
        INC     BX                      ;POINT TO NEXT LOCATION
        INC     BX                      ; .
        MOV     BUFPNTR,BX              ;SAVE NEW POINTER
        JNZ     WRITE_DONE              ;ZERO INDICATES BUFFER HAS WRAPPED

        MOV     STATUS,0                ;TURN COLLECTION OFF _ BUFFER FULL
WRITE_DONE:
        POP     BX                      ;RESTORE CALLER'S REGISTERS
        POP     DS                      ; .
        JMP     OLD_JUMP                ;PASS REQUEST ON TO BIOS ROUTINE
;
;  PROCESS A READ DATA REQUEST AND WRITE TO BUFFER IF APPROPRIATE
;
GET_READ:
        CMP     DL,CS:PORT              ;IS READ FOR PORT BEING TRACED?
        JNE     OLD_JUMP                ; NO, JUST PASS IT THROUGH

        PUSH    DS                      ;SAVE CALLER'S REGISTERS
        PUSH    BX                      ; .
        PUSH    CS                      ;SET UP DS FOR OUR PROGRAM
        POP     DS                      ; .

        PUSHF                           ;FAKE INT 14H CALL
        CLI                             ; .
        CALL    OLD_COMM_INT            ;PASS REQUEST ON TO BIOS
        TEST    AH,80H                  ;VALID READ?
        JNZ     READ_DONE               ; NO, SKIP BUFFER UPDATE

        MOV     BX,BUFPNTR              ;GET ADDRESS OF NEXT BUFFER
                                        ; LOCATION
        MOV     [BX],BYTE PTR 1         ;MARK AS RECEIVED BYTE
        MOV     [BX+1],AL               ;SAVE DATA IN BUFFER
        INC     COUNT                   ;INCREMENT BUFFER BYTE COUNT
        INC     COUNT                   ; .
        INC     BX                      ;POINT TO NEXT LOCATION
        INC     BX                      ; .
        MOV     BUFPNTR,BX              ;SAVE NEW POINTER
        JNZ     READ_DONE               ;ZERO INDICATES BUFFER HAS WRAPPED

        MOV     STATUS,0                ;TURN COLLECTION OFF _ BUFFER FULL
READ_DONE:
        POP     BX                      ;RESTORE CALLER'S REGISTERS
        POP     DS                      ; .
        IRET

;
;  JUMP TO COMM BIOS ROUTINE
;
OLD_JUMP:
        JMP     OLD_COMM_INT

COMMSCOPE ENDP
        SUBTTL  CONTROL INTERRUPT HANDLER
PAGE
; **********************************************************************
; *                                                                     *
; *  CONTROL                                                            *
; *     THIS ROUTINE PROCESSES CONTROL REQUESTS.                        *
; *                                                                     *
; **********************************************************************

CONTROL PROC    NEAR
        CMP     AH,00H                  ;STOP REQUEST?
        JNE     CNTL_START              ; NO, CHECK START
        PUSH    DS                      ;SAVE REGISTERS
        PUSH    BX                      ; .
        PUSH    CS                      ;SET DS FOR OUR ROUTINE
        POP     DS
        MOV     STATUS,0                ;TURN PROCESSING OFF
        MOV     BX,BUFPNTR              ;PLACE STOP MARK IN BUFFER
        MOV     [BX],BYTE PTR 80H       ; .
        MOV     [BX+1],BYTE PTR 0FFH    ; .
        INC     COUNT                   ;INCREMENT COUNT
        INC     COUNT                   ; .
        POP     BX                      ;RESTORE REGISTERS
        POP     DS                      ; .
        JMP     CONTROL_DONE

CNTL_START:
        CMP     AH,01H                  ;START REQUEST?
        JNE     CNTL_RESUME             ; NO, CHECK RESUME
        MOV     CS:PORT,DL              ;SAVE PORT TO TRACE
        MOV     CS:BUFPNTR,OFFSET VECTOR_INIT   ;RESET BUFFER TO START
        MOV     CS:COUNT,0              ;ZERO COUNT
        MOV     CS:STATUS,1             ;START LOGGING
        JMP     CONTROL_DONE

CNTL_RESUME:
        CMP     AH,02H                  ;RESUME REQUEST?
        JNE     CNTL_STATUS             ; NO, CHECK STATUS
        CMP     CS:BUFPNTR,0            ;END OF BUFFER CONDITION?
        JE      CONTROL_DONE            ; YES, DO NOTHING
        MOV     CS:PORT,DL              ;SAVE PORT TO TRACE
        MOV     CS:STATUS,1             ;START LOGGING
        JMP     CONTROL_DONE

CNTL_STATUS:
        CMP     AH,03H                  ;RETURN STATUS REQUEST?
        JNE     CONTROL_DONE            ; NO, ERROR _ DO NOTHING
        MOV     CX,CS:COUNT             ;RETURN COUNT
        PUSH    CS                      ;RETURN SEGMENT ADDR OF BUFFER
        POP     DX                      ; .
        MOV     BX,OFFSET VECTOR_INIT   ;RETURN OFFSET ADDR OF BUFFER

CONTROL_DONE:
        IRET

CONTROL ENDP


        SUBTTL  INITIALIZE INTERRUPT VECTORS
PAGE
; **********************************************************************
; *                                                                     *
; *  VECTOR_INIT                                                        *
; *  THIS PROCEDURE INITIALIZES THE INTERRUPT VECTORS AND THEN          *
; *  EXITS VIA THE MS-DOS TERMINATE-AND-STAY-RESIDENT FUNCTION.         *
; *  A BUFFER OF 64K IS RETAINED.  THE FIRST AVAILABLE BYTE             *
; *  IN THE BUFFER IS THE OFFSET OF VECTOR_INIT.                        *
; *                                                                     *
; **********************************************************************

        EVEN                            ;ASSURE BUFFER ON EVEN BOUNDARY
VECTOR_INIT     PROC    NEAR
;
;  GET ADDRESS OF COMM VECTOR (INT 14H)
;
        MOV     AH,35H
        MOV     AL,14H
        INT     21H
;
;  SAVE OLD COMM INT ADDRESS
;
        MOV     WORD PTR OLD_COMM_INT,BX
        MOV     AX,ES
        MOV     WORD PTR OLD_COMM_INT[2],AX
;
;  SET UP COMM INT TO POINT TO OUR ROUTINE
;
        MOV     DX,OFFSET COMMSCOPE
        MOV     AH,25H
        MOV     AL,14H
        INT     21H
;
;  INSTALL CONTROL ROUTINE INT
;
        MOV     DX,OFFSET CONTROL
        MOV     AH,25H
        MOV     AL,COMMSCOPE_INT
        INT     21H
;
;  SET LENGTH TO 64K, EXIT AND STAY RESIDENT
;
        MOV     AX,3100H                ;TERM AND STAY RES COMMAND
        MOV     DX,1000H                ;64K RESERVED
        INT     21H                     ;DONE
VECTOR_INIT ENDP

CSEG    ENDS
        END     INITIALIZE



───────────────────────────────────────────────────────────────────────────


Figure 18-12.
COMMSCMD.COD.


;       Static Name Aliases
;
;       $S142_commands  EQU     commands
        TITLE   commscmd
;       NAME    commscmd.C

        .287
_TEXT   SEGMENT  BYTE PUBLIC 'CODE'
_TEXT   ENDS
_DATA   SEGMENT  WORD PUBLIC 'DATA'
_DATA   ENDS
CONST   SEGMENT  WORD PUBLIC 'CONST'
CONST   ENDS
_BSS    SEGMENT  WORD PUBLIC 'BSS'
_BSS    ENDS
DGROUP  GROUP   CONST,  _BSS,   _DATA
        ASSUME  CS: _TEXT, DS: DGROUP, SS: DGROUP, ES: DGROUP
EXTRN   _int86:NEAR
EXTRN   _printf:NEAR
EXTRN   _stricmp:NEAR
EXTRN   _atoi:NEAR
EXTRN   __chkstk:NEAR
_DATA      SEGMENT

$SG148  DB    'STOP',  00h
$SG151  DB    'START',  00h
$SG154  DB    'RESUME',  00h
$SG157  DB    0ah, 'Communications tracing %s for port COM%1d:',  0ah,  00h
$S142_commands  DB      'STOPPED',  00h
        ORG   $+2
        DB    'STARTED',  00h
        ORG   $+2
        DB    'RESUMED',  00h
        ORG   $+2
_DATA      ENDS
_TEXT      SEGMENT
;***  /*******************************************************************
;|***  *                                                                  *
;|***  *  COMMSCMD                                                        *
;|***  *                                                                  *
;|***  *  This routine controls the COMMSCOP program that has been in-    *
;|***  *  stalled as a resident routine.  The operation performed is de-  *
;|***  *  termined by the command line.  The COMMSCMD program is invoked  *
;|***  *  as follows:                                                     *
;|***  *                                                                  *
;|***  *                COMMSCMD [[cmd][ port]]                           *
;|***  *                                                                  *
;|***  *  where cmd is the command to be executed                         *
;|***  *            STOP   -- stop trace                                  *
;|***  *            START  -- flush trace buffer and start trace          *
;|***  *            RESUME -- resume a stopped trace                      *
;|***  *        port is the COMM port to be traced (1=COM1, 2=COM2, etc.) *
;|***  *                                                                  *
;|***  *  If cmd is omitted, STOP is assumed.  If port is omitted, 1 is   *
;|***  *  assumed.                                                        *
;|***  *                                                                  *
;|***  *******************************************************************/
;|***
;|*** #include <stdlib.h>
;|*** #include <stdio.h>
;|*** #include <dos.h>
;|*** #define COMMSCMD 0x60
;|***
;|*** main(argc, argv)
;|*** int argc;
; Line 29
        PUBLIC _main
_main   PROC NEAR
        *** 000000     55                      push   bp
        *** 000001     8b ec                   mov    bp,sp
        *** 000003     b8 22 00                mov    ax,34
        *** 000006     e8 00 00                call   __chkstk
        *** 000009     57                      push   di
        *** 00000a     56                      push   si
;|*** char *argv[];
;|*** {
; Line 31
;       argc = 4
;       argv = 6
;       cmd = -4
;       port = -6
;       result = -2
;       inregs = -34
;       outregs = -20
;|***     int cmd, port, result;
;|***     static char commands[3] [10] = {"STOPPED", "STARTED", "RESUMED"};
;|***     union REGS inregs, outregs;
;|***
;|***     cmd = 0;
; Line 36
        *** 00000b     c7 46 fc 00 00          mov     WORD PTR [bp-4],0    ;
;|***     port = 0;
; Line 37
        *** 000010     c7 46 fa 00 00          mov     WORD PTR [bp-6],0    ;
;|***
;|***     if (argc > 1)
; Line 39
        *** 000015     83 7e 04 01            cmp     WORD PTR [bp+4],1    ;a
        *** 000019     7f 03                  jg      $JCC25
        *** 00001b     e9 5d 00               jmp     $I145
                                        $JCC25:
;|***      {
; Line 40
;|***      if (0 == stricmp(argv[1], "STOP"))
; Line 41
        *** 00001e     b8 00 00               mov     ax,OFFSET DGROUP:$SG148
        *** 000021     50                     push    ax
        *** 000022     8b 5e 06               mov     bx,[bp+6]            ;a
        *** 000025     ff 77 02               push    WORD PTR [bx+2]
        *** 000028     e8 00 00               call    _stricmp
        *** 00002b     83 c4 04               add     sp,4
        *** 00002e     3d 00 00               cmp     ax,0
        *** 000031     74 03                  je      $JCC49
        *** 000033     e9 08 00               jmp     $I147
                                        $JCC49:
;|***             cmd = 0;
; Line 42
        *** 000036      c7 46 fc 00 00         mov     WORD PTR [bp-4],0   ;c
;***         else if (0 == stricmp(argv[1], "START"))
; Line 43
        *** 00003b     e9 3d 00                jmp     $I149
                                        $I147:
        *** 00003e     b8 05 00                mov     ax,OFFSET DGROUP:$SG15
        *** 000041     50                      push    ax
        *** 000042     8b 5e 06                mov     bx,[bp+6]     ;argv
        *** 000045     ff 77 02                push    WORD PTR [bx+2]
        *** 000048     e8 00 00                call    _stricmp
        *** 00004b     83 c4 04                add     sp,4
        *** 00004e     3d 00 00                mp      ax,0
        *** 000051     74 03                   je      $JCC81
        *** 000053     e9 08 00                jmp     $I150
                                        $JCC81:
;|***            cmd = 1;
; Line 44
        *** 000056     c7 46 fc 01 00          mov     WORD PTR [bp-4],1
;|***         else if (0 == stricmp(argv[1], "RESUME"))
; Line 45
        *** 00005b     e9 1d 00                jmp     $I152
                                        $I150:
        *** 00005e     b8 0b 00                mov     ax,OFFSET DGROUP:$SG15
        *** 000061     50                      push    ax
        *** 000062     8b 5e 06                mov     bx,[bp+6]     ;argv
        *** 000065     ff 77 02                push    WORD PTR [bx+2]
        *** 000068     e8 00 00                call    _stricmp
        *** 00006b     83 c4 04                add     sp,4
        *** 00006e     3d 00 00                cmp     ax,0
        *** 000071     74 03                   je      $JCC113
        *** 000073     e9 05 00                mp     $I153
                                    $JCC113:
;|***            cmd = 2;
; Line 46
        *** 000076     c7 46 fc 02 00          mov     WORD PTR [bp-4],2
;|***         }
; Line 47
                                        $I153:
                                        $I152:
                                        $I149:
;|***
;|***     if (argc == 3)
; Line 49
                                        $I145:
        *** 00007b     83 7e 04 03             cmp     WORD PTR [bp+4],3
        *** 00007f     74 03                   je      $JCC127
        *** 000081     e9 1b 00                jmp     $I155
                                    $JCC127:
;|***         {
; Line 50
;|***         port = atoi(argv[2]);
; Line 51
        *** 000084     8b 5e 06                mov     bx,[bp+6]
        *** 000087     ff 77 04                push    WORD PTR [bx+4]
        *** 00008a     e8 00 00                call    _atoi
        *** 00008d     83 c4 02                add     sp,2
        *** 000090     89 46 fa                mov     [bp-6],ax
;|***         if (port > 0)
; Line 52
        *** 000093     83 7e fa 00             cmp     WORD PTR [bp-6],0
        *** 000097     7f 03                   jg      $JCC151
        *** 000099     e9 03 00                jmp     $I156
                                    $JCC151:
;|***              port = port-1;
; Line 53
        *** 00009c     ff 4e fa                dec     WORD PTR [bp-6]
;|***         }
; Line 54
                                        $I156:
;|***
;|***     inregs.h.ah = cmd;
; Line 56
                                        $I155:
        *** 00009f     8a 46 fc                mov     al,[bp-4]
        *** 0000a2     88 46 df                mov     [bp-33],al
;|***     inregs.x.dx = port;
; Line 57
        *** 0000a5     8b 46 fa                mov     ax,[bp-6]
        *** 0000a8     89 46 e4                mov     [bp-28],ax
;|***     result = int86(COMMCMD, &inregs, &outregs);
; Line 58
        *** 0000ab     8d 46 ec                lea     ax,[bp-20]
        *** 0000ae     50                      push    ax
        *** 0000af     8d 46 de                lea     ax,[bp-34]
        *** 0000b2     50                      push    ax
        *** 0000b3     b8 60 00                mov     ax,96
        *** 0000b6     50                      push    ax
        *** 0000b7     e8 00 00                call    _int86
        *** 0000ba     83 c4 06                add     sp,6
        *** 0000bd     89 46 fe                mov     [bp-2],ax
;|***
;|***
;|***     printf("\nCommunications tracing %s for port COM%1d:\n",
;|***             commands[cmd], port + 1);
; Line 62
        *** 0000c0     8b 46 fa               mov     ax,[bp-6]             ;
        *** 0000c3     40                     inc     ax
        *** 0000c4     50                     push    ax
        *** 0000c5     8b 46 fc               mov     ax,[bp-4]             ;
        *** 0000c8     8b c8                  mov     cx,ax
        *** 0000ca     d1 e0                  shl     ax,1
        *** 0000cc     d1 e0                  shl     ax,1
        *** 0000ce     03 c1                  add     ax,cx
        *** 0000d0     d1 e0                  shl     ax,1
        *** 0000d2     05 40 00               add     ax,OFFSET DGROUP:$S142_
        *** 0000d5     50                     push    ax
        *** 0000d6     b8 12 00               mov     ax,OFFSET DGROUP:$SG157
        *** 0000d9     50                     push    ax
        *** 0000da     e8 00 00               call    _printf
        *** 0000dd     83 c4 06               add     sp,6
;|*** }
; Line 63
                                        $EX138:
        *** 0000e0     5e                     pop     si
        *** 0000e1     5f                     pop     di
        *** 0000e2     8b e5                  mov     sp,bp
        *** 0000e4     5d                     pop     bp
        *** 0000e5     c3                     ret

_main     ENDP
_TEXT     ENDS
END



───────────────────────────────────────────────────────────────────────────


Figure 18-13.
An erroneous C program to convert a string to uppercase.


/************************************************************************
    *                                                                       *
    * UPPERCAS.C                                                            *
    *    This routine converts a fixed string to uppercase and prints it.   *
    *                                                                       *
    ************************************************************************/

#include <ctype.h>
#include <string.h>
#include <stdio.h>

main(argc,argv)

int argc;
char *argv[];

{
char    *cp,c;

        cp = "a string\n";

        /*  Convert *cp to uppercase and write to standard output  */

        while (*cp != '\0')
                {
                c = toupper(*cp++);
                putchar(c);
                }

}



───────────────────────────────────────────────────────────────────────────


Figure 18-14.
The corrected version of UPPERCAS.C.


/************************************************************************
    *                                                                       *
    * UPPERCAS.C                                                            *
    *    This routine converts a fixed string to uppercase and prints it.   *
    *                                                                       *
    ************************************************************************/

#include <ctype.h>
#undef toupper
#undef tolower
#include <string.h>
#include <stdio.h>

main(argc,argv)

int argc;
char *argv[];

{
char    *cp,c;

        cp = "a string\n";

        /*  Convert *cp to uppercase and write to standard output  */

        while (*cp != '\0')
                {
                c = toupper(*cp++);
                putchar(c);
                }

}



───────────────────────────────────────────────────────────────────────────


Figure 18-16.
An erroneous program to display ASCII characters.


/************************************************************************
    *                                                                       *
    *  ASCTBL.C                                                             *
    *   This program generates an ASCII lookup table for all displayable    *
    *   ASCII and extended IBM PC codes, leaving blanks for nondisplayable  *
    *   codes.                                                              *
    *                                                                       *
    ************************************************************************/

#include <ctype.h>
#include <stdio.h>

main()
{
int i, j, k;
        /* Print table title. */
        printf("\n\n\n                ASCII LOOKUP TABLE\n\n");

        /* Print column headers. */
        printf("    ");
        for (i = 0; i < 16; i++)
                printf("%X  ", i);
        fputchar("\n");
        /* Print each line of the table. */
        for ( i = 0, k = 0; i < 16; i++)
                {
                /* Print first hex digit of symbols on this line. */
                printf("%X   ", i);
                /* Print each of the 16 symbols for this line. */
                for (j = 0; j < 16; j++)
                        {
                        /* Filter nonprintable characters. */
                        if ((k >= 7 && k <= 13) $LS$LS (k >= 28 && k <= 31))
                                printf("   ");
                        else
                                printf("%c  ", k);
                        k++;
                        }
                    fputchar("\n");
                    }
}



───────────────────────────────────────────────────────────────────────────


Figure 18-17.
The correct ASCII table generation program.


/************************************************************************
    *                                                                       *
    *  ASCTBL.C                                                             *
    *   This program generates an ASCII lookup table for all displayable    *
    *   ASCII and extended IBM PC codes, leaving blanks for nondisplayable  *
    *   codes.                                                              *
    *                                                                       *
    ************************************************************************/

#define LINT_ARGS
#include <ctype.h>
#include <stdio.h>

main()
{
int i, j, k;
        /* Print table title. */
        printf("\n\n\n                ASCII LOOKUP TABLE\n\n");

        /* Print column headers. */
        printf("    ");
        for (i = 0; i < 16; i++)
                printf("%X  ", i);
        fputchar('\n');

        /* Print each line of the table. */
        for (i = 0, k = 0; i < 16; i++)
                {
                /* Print first hex digit of symbols on this line. */
                printf("%X   ", i);
                /* Print each of the 16 symbols for this line. */
                for (j = 0; j < 16; j++)
                        {
                        /* Filter nonprintable characters. */
                        if ((k >= 7 && k <= 13) || (k >= 28 && k <= 31))
                                printf("   ");
                        else
                                printf("%c  ", k);
                        k++;
                        }
                fputchar('\n');
                }
}



───────────────────────────────────────────────────────────────────────────


Figure 19-2.
A sample "program" containing statements from which the assembler derives
fixup information.


                                        title   fixups


                                FarGroup GROUP  FarSeg1,FarSeg2

0000                           CodeSeg SEGMENT byte public 'CODE'
                                        ASSUME  cs:CodeSeg

0000  9A 0000 ---- R           start:  call    far ptr FarProc

0005                           CodeSeg ENDS


0000                           FarSeg1 SEGMENT byte public     ;part of
                                                                ;FarGroup

0000                           FarSeg1 ENDS


0000                           FarSeg2 SEGMENT byte public
                                        ASSUME  cs:FarGroup

0000                           FarProc PROC    far
0000  CB                               ret                     ;a FAR
                                                                ;return
                                FarProc ENDP

0001                           FarSeg2 ENDS

                                        END



───────────────────────────────────────────────────────────────────────────


Figure 19-3.
The source code for HELLO.ASM.


        NAME    HELLO

_TEXT   SEGMENT byte public 'CODE'

        ASSUME  cs:_TEXT,ds:_DATA

start:                                  ;program entry point
        mov     ax,seg msg
        mov     ds,ax
        mov     dx,offset msg           ;DS:DX -> msg
        mov     ah,09h
        int     21h                     ;perform int 21H function 09H
                                        ;(Output character string)
        mov     ax,4C00h
        int     21h                     ;perform int 21H function 4CH
                                        ;(Terminate with return code)
_TEXT   ENDS


_DATA   SEGMENT word public 'DATA'

msg     DB      'Hello, world',0Dh,0Ah,'$'

_DATA   ENDS


_STACK  SEGMENT stack 'STACK'

        DW      80h dup(?)              ;stack depth = 128 words

_STACK  ENDS

        END     start



───────────────────────────────────────────────────────────────────────────


Figure 19-6.
A sample "program" showing how some common fixups are encoded in FIXUPP
records.


                                    TITLE   fixupps
                            _TEXT   SEGMENT byte public 'CODE'
                                    ASSUME  cs:_TEXT
                                    EXTRN   NearLabel:near
                                    EXTRN   FarLabel:far

0000                       NearProc        PROC    near

0000  E9 0000 E                    jmp     NearLabel       ;relocatable
                                                            ;word offset
0003  EB 00 E                      jmp     short NearLabel ;relocatable
                                                            ;byte offset
0005  EA 0000 ---- R               jmp     far ptr FarProc ;far jump to a
                                                            ;known seg
000A  EA 0000 ---- E               jmp     FarLabel     ;far jump to an
                                                        ;unknown seg

000F  BB 0015 R                    mov     bx,offset LocalLabel ;relocat-
                                                                ;able
                                                                ;offset
0012  B8 ---- R                    mov     ax,seg LocalLabel    ;relocat-
                                                                ;able seg

0015  C3                   LocalLabel:     ret

                            NearProc        ENDP

0016                       _TEXT   ENDS


0000                       FAR_TEXT        SEGMENT byte public 'FAR_CODE'
                                    ASSUME  cs:FAR_TEXT

0000                       FarProc PROC    far

0000  CB                           ret

                            FarProc ENDP

0001                       FAR_TEXT        ENDS

                                    END



───────────────────────────────────────────────────────────────────────────


Figure 20-10.
Segment order for a terminate-and-stay-resident program.


ResidentCodeSeg     SEGMENT    para                (Low Memory)
                    .
                    .(executable code)
                    .
ResidentCodeSeg     ENDS

ResidentDataSeg     SEGMENT    word
                    .
                    .(program data)
                    .
ResidentDataSeg     ENDS

StackSeg            SEGMENT    para
                    .
                    .(stack)
                    .
StackSeg            ENDS                           Resident portion
----------------------------------                 -----------------------
TransientCodeSeg    SEGMENT    para                Transient portion
                    .
                    .(executable code)
                    .
TransientCodeSeg    ENDS

TransientDataSeg    SEGMENT    word
                    .
                    .(program data)
                    .
TransientDataSeg    ENDS                           (High Memory)



Figure L-6.
QuickBASIC binary-to-hexadecimal file conversion utility.


'Binary-to-Hex file conversion utility.
'Requires Microsoft QuickBASIC version 3.0 or later.

DEFINT A-Z                                    ' All variables are integers
                                                ' unless otherwise declared.
CONST FALSE = 0                               ' Value of logical FALSE.
CONST TRUE = NOT FALSE                        ' Value of logical TRUE.

DEF FNHXB$(X) = RIGHT$(HEX$(&H100 + X), 2)    ' Return 2-digit hex value
                                                ' for X.
DEF FNHXW$(X!) = RIGHT$("000" + HEX$(X!), 4)  ' Return 4-digit hex value
                                                ' for X!.
DEF FNMOD(X, Y) = X! - INT(X!/Y) * Y          ' X! MOD Y (the MOD operation
                                                ' is only for integers).
CONST SRCCNL = 1                              ' Source (.BIN) file
                                                ' channel.
CONST TGTCNL = 2                              ' Target (.HEX) file
                                                ' channel.

LINE INPUT "Enter full name of source .BIN file        :  ";SRCFIL$
OPEN SCRCFIL$ FOR INPUT AS SRCCNL             ' Test for source (.BIN)
                                                ' file.
SRCSIZ! = LOF(SRCCNL)                         ' Save file's size.
CLOSE SRCCNL
IF (SRCSIZ! > 65536) THEN                     ' Reject if file exceeds
                                                ' 64 KB.
    PRINT "Cannot convert file larger than 64 KB."
    END
END IF

LINE INPUT "Enter full name of target .HEX file        :  ";TGTFIL$
OPEN TGTFIL$ FOR OUTPUT AS TGTCNL             ' Test target (.HEX)
                                                ' filename.
CLOSE TGTCNL
DO
    LINE INPUT "Enter starting address of .BIN file in HEX :  ";L$
    ADRBGN! = VAL("&H" + L$)                  ' Convert ASCII HEX
                                                ' address value
                                                ' to binary value.
    IF (ADRBGN! < 0) THEN                     ' HEX values 8000-FFFFH
                                                ' convert
        ADRBGN! = 65536 + ADRBGN!                ' to negative values.
    END IF
    ADREND! = ADRBGN! + SRCSIZ! - 1           ' Calculate resulting
                                                ' end address.
    IF (ADREND! > 65535) THEN                 ' Reject if address
                                                ' exceeds FFFFH.
        PRINT "Entered start address causes end address to exceed FFFFH."
    END IF
LOOP UNTIL (ADRFLD! >= 0) AND (ADRFLD! <= 65535) AND (ADREND! <= 65535)

DO
    LINE INPUT "Enter byte count for each record in HEX    :  ";L$
    SRCRLN = VAL("&H" + L$)                   ' Convert ASCII HEX
                                                ' max record length
                                                ' value to binary value.
    IF (SRCRLN < 0) THEN                      ' HEX values 8000-FFFFH
                                                ' convert
        SRCRLN = 65536 + SRCRLN                  ' to negative values.
    END IF
LOOP UNTIL (SRCRLN > 0) AND (SRCRLN < 256)    ' Ask again if not 1-255.

OPEN SRCFIL$ AS SRCCNL LEN = SRCRLN           ' Reopen source for block
                                                ' I/O.
FIELD#SRCCNL,SRCRLN AS SRCBLK$
OPEN TGTFIL$ FOR OUTPUT AS TGTCNL             ' Reopen target for
                                                ' text output.
SRCREC = 0                                    ' Starting source block #
                                                ' minus 1.

FOR ADRFLD! = ADRBGN! TO ADREND! STEP SRCRLN  ' Convert one block per loop.
    SRCREC = SRCREC + 1                       ' Next source block.
    GET SRCCNL,SRCREC                         ' Read the source block.
    IF (ADRFLD! + SRCRLN > ADREND!) THEN      ' If last block less than
        BLK$=LEFT$(SRCBLK$,ADREND!-ADRFLD!+1)    ' full size:  trim it.
    ELSE                                      ' Else:
        BLK$ = SRCBLK$                        ' Use full block.
    END IF

    PRINT#TGTCNL, ":";                        ' Write record mark.

    PRINT#TGTCNL, FNHXB$(LEN(BLK$));          ' Write data field size.
    CHKSUM = LEN(BLK$)                        ' Initialize checksum
                                                ' accumulate
                                                ' with first value.
    PRINT#TGTCNL,FNHXW$(ADRFLD!);             ' Write record's load
                                                ' address.

' The following "AND &HFF" operations limit CHKSUM to a byte value.
    CHKSUM = CHKSUM + INT(ADRFLD!/256) AND &HFF   ' Add hi byte of adrs
                                                    ' to csum.
    CHKSUM = CHKSUM + FNMOD(ADRFLD!,256) AND &HFF ' Add lo byte of adrs
                                                    ' to csum.

    PRINT#TGTCNL,FNHXB$(0);                   ' Write record type.
' Don't bother to add record type byte to checksum since it's 0.
    FOR IDX = 1 TO LEN(BLK$)                  ' Write all bytes.
        PRINT#TGTCNL,FNHXB$(ASC(MID$(BLK$,IDX,1)));      ' Write next byte.
        CHKSUM = CHKSUM + ASC(MID$(BLK$,IDX,1)) AND &HFF ' Incl byte in csum.
    NEXT IDX

    CHKSUM = 0 - CHKSUM AND &HFF              ' Negate checksum then
                                                ' limit
                                                ' to byte value.
    PRINT #TGTCNL,FNHXB$(CHKSUM)              ' End record with checksum.

NEXT ADRFLD!

PRINT#TGTCNL, ":00000001FF"                   ' Write end-of-file record.

CLOSE TGTCNL                                  ' Close target file.
CLOSE SRCCNL                                  ' Close source file.

END
```

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
