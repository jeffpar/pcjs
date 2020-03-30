;-----------------------------------------------------------------------------
;
; MACROS.286
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


;---------------------------------------------------------------
; Macro definitions
;---------------------------------------------------------------
FARJMP  MACRO   destination,selector    ; dynamic JMP FAR SEG:OFF
        db      0eah                    ;; jmp instruction
        dw      offset destination      ;; offset word
        dw      selector                ;; segment selector word
        endm


IO_DELAY        MACRO
        out     0edh,ax
        endm

LOADALL         MACRO
        mov     cx,ABS0
        mov     es,cx
        mov     cx,(size Loadall_struc) / 2
        mov     si,offset Loadall_tbl
        mov     di,800h
        rep     movsw
        db      0fh,05
        ENDM

PRINT_STRING    MACRO   MSG_NAME
        mov     ah,9
        mov     dx,offset MSG_NAME
        int     21h
        ENDM
