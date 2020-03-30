        .386p
;-----------------------------------------------------------------------------
;
; CPU_TYPE.ASM
;
;       Copyright (c) 1991, 1995-Present  Robert Collins
;
;       You have my permission to copy and distribute this software for
;       non-commercial purposes.  Any commercial use of this software or
;       source code is allowed, so long as the appropriate copyright
;       attributions (to me) are intact, *AND* my email address is properly
;       displayed.
;
;       Basically, give me credit, where credit is due, and show my email
;       address.
;
;-----------------------------------------------------------------------------
;
;       Robert R. Collins               email:  rcollins@x86.org
;
;-----------------------------------------------------------------------------


;---------------------------------------------------------------;
; CPU_Type determines the CPU type in the system.               ;
;---------------------------------------------------------------;
; Written by:                                                   ;
;   Robert Collins                                              ;
;---------------------------------------------------------------;
; Input:   None                                                 ;
; Output:  AX = CPU type                                        ;
;           0 = 8086/8088                                       ;
;           1 = 80186/80188                                     ;
;           2 = 80286                                           ;
;           3 = 80386                                           ;
;           4 = 80486                                           ;
;        FFFF = Unknown CPU type                                ;
; Register(s) modified:  AX, BX, CX, EDX                        ;
;---------------------------------------------------------------;
; Macro definitions                                             ;
;---------------------------------------------------------------;
; 80486 instruction macro -- because MASM 5.1 doesn't support   ;
; the 80486!                                                    ;
;---------------------------------------------------------------;
XADD    macro                                                   ;
        db      0fh,0C0h,0D2h   ; 80486 instruction macro       ;
ENDM                                                            ;
                                                                ;
                                                                ;
;---------------------------------------------------------------;
  CPU_Type      proc    near                                    ;
;---------------------------------------------------------------;
; Determine the CPU type by testing for differences in the CPU  ;
; in the system.                                                ;
;---------------------------------------------------------------;
; To determine if we are a 8086/8088, or 80186/80188, test the
; value of SP after it is placed on the stack.  The algorithm
; for "PUSH SP" differs from 8086/80186 to 80286+.  The
; algorithm difference is as follows:
;
; 8086/80186            80286+
; {                     {
;   SP    = SP - 2        TEMP  = SP
;   SS:SP = SP            SP    = SP - 2
; }                       SS:SP = TEMP
;                       }
;
; Thus for the 8086/80186, the value of SP that gets pushed on
; the stack is the value after SP is decremented.  Hence, the
; value on the stack does not reflect the value of SP before the
; "PUSH" instruction.  Therefore, all we have to do to
; categorize the CPU as 8086/8088 or 80186/80188 is to "PUSH SP"
; and compare the value on the stack image to the value in SP.
;---------------------------------------------------------------
        xor     ax,ax           ; clear CPU type return register
        push    sp              ; save SP on stack to look at
        pop     bx              ; get SP saved on stack
        cmp     bx,sp           ; if 8086/8088 these values will
                                ;  differ
        jz      short @Not_8086 ; nope, must be other CPU type

;---------------------------------------------------------------
; If this test passes, then we need some other means to differ-
; entiate between 8088/8088 and 80186/80188.  This method I will
; use comes from "80186/188, 80C186/C188 Hardware Reference
; Manual" from Intel, PN# 270788, page A-2:  "When a word write
; is performed at offset FFFFh in a segment, the 8086 will write
; one byte at offset FFFFh, and the other at offset 0, while an
; 80186 family processor will write one byte at offset FFFFh,
; and the other at offset 10000h (one byte beyond the end of the
;  segment).
;---------------------------------------------------------------
; Before we can blast a value out to FFFFh, we must save
; anything there, so we don't crash anybody else's data.
;---------------------------------------------------------------
        push    es
        mov     bx,ds           ; get original DS
        inc     bx
        mov     es,bx
        mov     bl,ds:[0]               ; get byte @ 0
        mov     bh,es:[0fff0h]          ; get byte @ 10000h
        mov     ds:[0ffffh],0aaaah      ; write signature at
                                        ;  test location
        cmp     byte ptr ds:[0],0aah    ; 8086?
        mov     ds:[0],bl               ; restore original value
        mov     es:[0fff0h],bh
        pop     es
        je      short CPU_8086_Exit
        inc     ax
        jmp     short CPU_8086_Exit

;---------------------------------------------------------------
; When we get here, we know that we aren't a 8086/80186.  And
; since all subsequent processors will trap invalid opcodes via
; INT6, we will determine which CPU we are by trapping an
; invalid opcode.
;   We are an 80486 if:  XADD   DX,DX   executes correctly
;             80386 if:  MOV    EDX,CR0 executes correctly
;             80286 if:  SMSW   DX      executes correctly
;---------------------------------------------------------------
; Setup INT6 handler
;---------------------------------------------------------------
@Not_8086:
        enter   4,0             ; create stack frame
        mov     word ptr INT6,offset INT6_handler
        mov     INT6+2,cs
        call    set_INT6_vector ; set pointer for INT6 handler
        mov     ax,4            ; initialize CPU flag=4 (80486)
        xor     cx,cx           ; initialize semaphore

;---------------------------------------------------------------
; Now, try and determine which CPU we are by executing invalid
; opcodes.  The instructions I chose to invoke invalid opcodes,
; are themselves rather benign.  In each case, the chosen
; instruction modifies the DX register, and nothing else.  No
; system parameters are changed, e.g. protected mode, or other
; CPU dependant features.
;---------------------------------------------------------------
; The 80486 instruction 'XADD' xchanges the registers, then adds
; them.  The exact syntax for a '486 compiler would be:
; XADD DX,DX.
;---------------------------------------------------------------
        XADD   ;DX,DX           ; 80486
        jcxz    CPU_exit
        dec     ax              ; set 80386 semaphore
        inc     cx              ; CX=0

;---------------------------------------------------------------
; For a description on the effects of the following instructions,
; look in the Intel Programmers Reference Manual's for the 80186,
; 80286, or 80386.
;---------------------------------------------------------------
        mov     edx,cr0         ; 80386
        jcxz    CPU_exit
        dec     ax              ; set 80286 semaphore
        inc     cx              ; CX=0

        smsw    dx              ; 80286
        jcxz    CPU_exit
        sub     ax,3            ; set UNKNOWN_CPU semaphore

CPU_exit:
        call    set_INT6_vector
        leave

CPU_8086_exit:
        ret


;---------------------------------------------------------------
; Set the INT6 vector by exchanging it with the one currently on
; the stack.
;---------------------------------------------------------------
set_INT6_vector:
        push    ds
        push    ABS0            ; save interrupt vector segment
        pop     ds              ; make DS=INT vector segment

ASSUME  DS:ABS0
        mov     dx,word ptr ds:INT_6    ; get offset of INT6
        xchg    INT6,dx                 ; set new INT6 offset
        mov     word ptr ds:INT_6,dx
        mov     dx,word ptr ds:INT_6[2] ; get segment of INT6
        xchg    INT6+2,dx               ; set new INT6 segment
        mov     word ptr ds:INT_6[2],dx
        pop     ds                      ; restore register
        ret                             ; split
ASSUME  DS:_TEXT


;---------------------------------------------------------------
; INT6 handler sets a semaphore (CX=FFFF) and adjusts the return
; address to point past the invalid opcode.
; [BP]
;---------------------------------------------------------------
INT6_handler:
        enter   0,0             ; create new stack frame
        dec     cx              ; make CX=FFFF
        add     word ptr ss:[bp][2],3   ; point past invalid
                                        ;  opcode
        leave
        iret
CPU_Type        endp
