.386p
;-----------------------------------------------------------------------------
;
; AAD.ASM   Copyright (c) 1991, 1995-Present,  Robert Collins
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


.model small
.code
.286


;-----------------------------------------------------------------------------
; Interrupt vector segment
;-----------------------------------------------------------------------------
ABS0    segment at 0
        org 0*4
        Orig_INT0       label   word
ABS0    ends


;-----------------------------------------------------------------------------
; Local stack frame variable(s)
;-----------------------------------------------------------------------------
        INT0    equ     [bp-4]


;-----------------------------------------------------------------------------
; Instruction macro definition
;-----------------------------------------------------------------------------
        AADI    MACRO   VALUE
                db      0d5h,VALUE
        ENDM


;-----------------------------------------------------------------------------
  TEST_AAD      proc    near    ; Test AAD IMMED08 instruction functionality.
;-----------------------------------------------------------------------------
; AAD:
;  {
;    AL = AH*IMMED08 + AL
;    AH = 0
;    CF = AL[b7] Overflow?
;    OF = AL[b7] set, but not overflow? or AL[b7] overflow, but not set?
;    AF = AL[b3] overflow, or AL[b3] borrow?
;    SF = AL[b7]=1?
;    ZF = AL==0?
;    PF = Even/Odd parity
;  }
; Input:   None
; Output:  BX = Bit mask of results (3FFF if all tests passed)
;               [b13] = 1, NS flag test passed
;               [b12] = 1, SF flag test passed
;               [b11] = 1, NZ flag test passed
;               [b10] = 1, ZF flag test passed
;               [b09] = 1, PO flag test passed
;               [b08] = 1, PE flag test passed
;               [b07] = 1, AF (test 2) flag test passed
;               [b06] = 1, AF (test 1) flag test passed
;               [b05] = 1, NA flag test passed
;               [b04] = 1, OF (test 2) flag test passed
;               [b03] = 1, NO flag test passed
;               [b02] = 1, OF (test 1) flag test passed
;               [b01] = 1, CY flag test passed
;               [b00] = 1, NC flag test passed
; Register(s) modified:  AX, BX, CX
;-----------------------------------------------------------------------------
        xor     bx,bx                   ; clear result flags
        xor     cx,cx

;-----------------------------------------------------------------------------
; Test Carry Flag set.  According to Intel, CF is undefined after AAD, but
; should be set according to the results.  Since this is an arithmatic
; operation, CF should be set according to the results.  Let's find out!
;-----------------------------------------------------------------------------
        mov     ax,3300h                ; set AH=51, AL=0 and perform 51*5.
        AADI    5                       ; result should not produce a CF
        jc      @F                      ; oops
        or      bl,1                    ; set NC passed
@@:     mov     ax,3301h                ; set AH=51, AL=1 and perform
        AADI    5                       ;  (55*5)+1 should set CF
        jnc     @F                      ; oops, didn't work
        or      bl,2                    ; set CF passed

;-----------------------------------------------------------------------------
; Test Overflow Flag set.  There are two ways the OF can be set:
;  1) If AL[b7] is set, but doesn't overflow into CF;
;  2) If AL[b7] overflows, but doesn't get set.
;-----------------------------------------------------------------------------
;  1) If AL[b7] is set, but doesn't overflow into CF;
;-----------------------------------------------------------------------------
        mov     ax,2a02h                ; perform (42*3)+2 = 128, should set
        AADI    3                       ;  OF.
        jno     @F                      ; oops, didn't work
        or      bl,4                    ; set OF passed
@@:     mov     ax,8080h                ; perform (128*2)+128, should not set
        AADI    2                       ;  OF because it sets CF, & AL[b7]
        jo      @F                      ; oops, didn't work
        or      bl,8                    ; set NO passed

;-----------------------------------------------------------------------------
;  2) If AL[b7] overflows, but doesn't get set.
;-----------------------------------------------------------------------------
@@:     mov     ax,8080h                ; perform (128*2)+128, should not set
        AADI    1                       ;  OF because it sets CF, & AL[b7]
        jno     @F                      ; oops, didn't work
        or      bl,10h

;-----------------------------------------------------------------------------
; Test Auxiliary carry Flag (AF) set.  AF is set in two ways:
;  1) If there is a carry out of bit3;
;  2) If there is a borrow out of bit3.
;-----------------------------------------------------------------------------
@@:     mov     ax,2200h                ; perform (34*5)+0, should not set
        AADI    5                       ;  AM because no carry from bit3
        lahf                            ; get flags
        test    ah,10h                  ; AF set?
        jnz     @F                      ; yes, must have been a mistake
        or      bl,20h                  ; set NA flag passed

;-----------------------------------------------------------------------------
;  1) If there is a carry out of bit3;
;-----------------------------------------------------------------------------
@@:     mov     ax,2208h                ; perform (34*5)+8, should set AF
        AADI    5                       ;  because a bit3 will carry
        lahf                            ; get flags
        test    ah,10h                  ; AF set?
        jz      @F                      ; nope, oops
        or      bl,40h                  ; set AF flag passed

;-----------------------------------------------------------------------------
;  2) If there is a borrow out of bit3.
;       (This may not be an accurate test of borrowing out of bit 3, because
;        this test adds a -8 to the result of the multplication.  In other
;        words, the addition algorithm is still used, not the subtraction
;        algorithm -- if they are even different in the first place.)
;-----------------------------------------------------------------------------
@@:     mov     ax,22f8h                ; perform (34*5)-8, should set AF
        AADI    5                       ;  because a bit3 will borrow
        lahf                            ; get flags
        test    ah,10h                  ; AF set?
        jz      @F                      ; nope, oops
        or      bl,80h                  ; set AF flag passed

;-----------------------------------------------------------------------------
; Test EVEN and ODD parity by generating results in the low byte that
; contain even and odd parity respectively.
;-----------------------------------------------------------------------------
@@:     mov     ax,0a00h                ; 10*17+0 which is EVEN parity
        AADI    11h
        jpo     @F                      ; didn't generate even parity
        or      bh,1                    ; set even parity flag passed
@@:     mov     ax,0a01h                ; 10*17+1 which is ODD parity
        AADI    11h
        jpe     @F                      ; didn't generate odd parity
        or      bh,2                    ; set odd parity flag passed

;-----------------------------------------------------------------------------
; Test ZERO FLAG by generating results that produce a zero, and non-zero.
;-----------------------------------------------------------------------------
@@:     mov     ax,0880h                ; 8*16+128 will generate a zero result
        AADI    10h                     ;  This should force ZF=1
        jnz     @F                      ; didn't work as expected
        or      bh,4
@@:     mov     ax,0881h                ; 8*16+129 will be non-zero
        AADI    10h                     ;  This should force ZF=0,
        jz      @F                      ; didn't work as expected
        or      bh,8

;-----------------------------------------------------------------------------
; Test Sign Flag by generating results whose highest bit is on.
; I'll try and do this in a manner that doesn't set OF.
;-----------------------------------------------------------------------------
        mov     ax,80c0h                ; (128*128)+192 will generate SF
        AADI    80h                     ;  without generating OF.
        jns     @F                      ; oops
        or      bh,10h                  ; set SF flag passed
@@:     mov     ax,8040h                ;
        AADI    80h
        js      @F
        or      bh,20h
@@:     ret
Test_AAD        endp

end


