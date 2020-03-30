;-----------------------------------------------------------------------------
;
; MACROS.386
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


;-----------------------------------------------------------------------------
; Macro definitions
;-----------------------------------------------------------------------------
    Init_descriptor    macro   segment,offset,desc_name
        push    ax
        push    dx
        push    si
        push    es
        mov     ax,&segment             ;; get segment name
        mov     es,ax                   ;;   to form 24 bit address
        mov     si,&offset              ;;
        mov     ax,es                   ; point to control block
        xor     dh,dh                   ; clear upper register
        mov     dl,ah                   ; build high byte of 32-bit address
        shr     dl,4                    ; use only high nibble from (AX)
        shl     ax,4                    ; strip high nibble from segment
        add     ax,si                   ; add the GDT offset to develop low word
        adc     dx,0                    ; adjust high byte if carry from low
        mov     &desc_name.Base_A15_A00,ax      ;; low word of address
        mov     &desc_name.Base_A23_A16,dl      ;; high byte of address
        mov     &desc_name.Base_A31_A24,dh      ;; high byte of linear address
        pop     es
        pop     si
        pop     dx
        pop     ax
    endm


FARJMP  MACRO   destination,selector    ; dynamic JMP FAR SEG:OFF
        db      0eah                    ;; jmp instruction
        dw      offset destination      ;; offset word
        dw      selector                ;; segment selector word
        endm


LONGJMP MACRO   destination,selector    ; dynamic JMP FAR SEG:OFF
        db      0eah                    ;; jmp instruction
        dd      offset destination      ;; offset word
        dw      selector                ;; segment selector word
        endm


IO_DELAY        MACRO
        out     0edh,ax
        endm

LOADALL         MACRO
        db      0fh,07h
        ENDM


PRINT_STRING    MACRO   MSG_NAME
        mov     ah,9
        mov     dx,offset MSG_NAME
        int     21h
        ENDM
