.386p
;-----------------------------------------------------------------------------
;
; AAM.ASM
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
        AAMI    MACRO   VALUE
                db      0d4h,VALUE
        ENDM


;-----------------------------------------------------------------------------
  TEST_AAM      proc    near    ; Test AAM IMMED08 instruction functionality.
;-----------------------------------------------------------------------------
; Input:   None
; Output:  BX = Bit mask of results (3FF if all tests passed)
;               [b15..b10] = Unused
;               [b9] = 1, Carry Flag test passed
;               [b8] = 1, Overflow Flag test passed
;               [b7] = 1, Auxiliary carry Flag test passed
;               [b6] = 1, INT0 exception passed
;               [b5] = 1, ZF flag test passed
;               [b4] = 1, NZ flag test passed
;               [b3] = 1, NS flag test passed
;               [b2] = 1, SF flag test passed
;               [b1] = 1, PE flag test passed
;               [b0] = 1, PO flag test passed
; Register(s) modified:  AX, BX, CX, SI
;-----------------------------------------------------------------------------
        xor     bx,bx                   ; clear result flags
        xor     cx,cx

;-----------------------------------------------------------------------------
; Test EVEN and ODD parity by generating results in the low byte that
; contain even and odd parity respectively.
;-----------------------------------------------------------------------------
        mov     al,0fbh                 ; 251/252 leave remainder=251, whose
                                        ;  parity=ODD.
        AAMI    0FCh                    ; generate odd parity
        jpe     @F                      ; oops odd parity not set
        or      bl,1                    ; set even parity flag
@@:     AAMI    0F1h                    ; 251/241 leaves remainder=10, whose
                                        ;  parity=EVEN
        jpo     @F                      ; oops even parity
        or      bl,2                    ; set odd parity flag

;-----------------------------------------------------------------------------
; Test Sign flag by generating results in the low byte whose bit7=1.  This
; is easily done by putting 80h in AL, and dividing by a number larger than
; 80h.  The remainder will always be 80h, and therefore the sign flag is set.
;-----------------------------------------------------------------------------
@@:     mov     al,080h                 ; 128/255 leaves remainder=128, whose
        AAMI    0ffh                    ;  Sign flag=1 (bit7=1)
        jns     @F                      ; oops no SF!
        or      bl,4                    ; set SF flag
@@:     AAMI    80h                     ; 128/128 leaves remainder=0, whose
        js      @F                      ;  sign flag=0 (bit7=0)
        or      bl,8                    ; set NS flag

;-----------------------------------------------------------------------------
; Test ZERO flag by generating results in the low byte as ZERO, and NON-ZERO.
;-----------------------------------------------------------------------------
@@:     mov     al,0f0h                 ; 240/127 leaves remainder=113, which
        AAMI    7Fh                     ;  is obviously not 0.
        jz      @F                      ; oops, ZF!
        or      bl,10h                  ; set NF flag
@@:     AAMI    113d                    ; 113/113 leaves remainder=0, which is
        jnz     @F                      ;  obviously 0!
        or      bl,20h                  ; set ZF flag


;-----------------------------------------------------------------------------
; Test that AAM 0 (divide by 0) will generate the appropriate CPU exception
; (exception 0).  This can be tested by setting up a simple INT0 handler, and
; try to divide by 0.  If the execption occured, then success.
;-----------------------------------------------------------------------------
@@:     enter   4,0                     ; create stack frame
        mov     word ptr INT0,offset INT0_handler
        mov     INT0[2],cs              ; save current CS to restore later
        call    set_INT0_vector         ; set pointer to our INT6 handler
        AAMI    0                       ; generate INT0 exception
        jcxz    @F                      ; if CX=0, then an error occurred
        or      bl,40h                  ; set success flag
@@:     call    set_INT0_vector         ; restore original INT0 vector
        leave                           ; restore stack frame

;-----------------------------------------------------------------------------
; Test unaffected flags will cycle through every possible combination of
; AAM, and test that none of the "unaffected" flags are changed.  For
; brevity of source code, I'm going to do one of the biggest no-no's in
; programming...I'm going to write self modifying code.
;-----------------------------------------------------------------------------
; First test the Auxiliary carry Flag (AF).  If AF gets set, then the test
; fails.
;-----------------------------------------------------------------------------
        mov     si,offset @AF[1]        ; get address of operand to AAM
        mov     cx,1                    ; start with AAM 01
@@:     mov     al,ch
        mov     cs:[si],cl              ; modify op code
        jmp     short @AF               ; go
@AF:    AAMI    00                      ; starting sequence
        lahf                            ; get flags register
        test    ah,10h                  ; auxiliary flag set?
        jnz     short @F                ; yes
        add     ch,1                    ; try next dividend
        adc     cl,0                    ; try next divisor
        jnc     @B                      ; continue
        or      bl,80h                  ; set success flag

;-----------------------------------------------------------------------------
; Second, test the Overflow Flag (OF).  If OF gets set, then the test fails.
;-----------------------------------------------------------------------------
@@:     mov     si,offset @OF[1]        ; get address of operand to AAM
        mov     cx,1                    ; start with AAM 01
@@:     mov     al,ch
        mov     cs:[si],cl              ; modify op code
        jmp     short @OF               ; go
@OF:    AAMI    00                      ; starting sequence
        jo      short @F                ; test failed
        add     ch,1                    ; try next dividend
        adc     cl,0                    ; try next divisor
        jnc     @B                      ; continue
        or      bh,01h                  ; set success flag

;-----------------------------------------------------------------------------
; Finally, test the Carry Flag (CF).  If CF gets set, then the test fails.
;-----------------------------------------------------------------------------
@@:     mov     si,offset @CF[1]        ; get address of operand to AAM
        mov     cx,1                    ; start with AAM 01
@@:     mov     al,ch
        mov     cs:[si],cl              ; modify op code
        jmp     short @CF               ; go
@CF:    AAMI    00                      ; starting sequence
        jc      short @F                ; test failed
        add     ch,1                    ; try next dividend
        adc     cl,0                    ; try next divisor
        jnc     @B                      ; continue
        or      bh,02h                  ; set success flag
@@:     ret                             ; split
Test_AAM        endp


;-----------------------------------------------------------------------------
; Set the INT6 vector by exchanging it with the one currently on the stack.
;-----------------------------------------------------------------------------
set_INT0_vector:
        push    ds
        push    ABS0                    ; save interrupt vector segment
        pop     ds                      ; make DS=INT vector segment

ASSUME  DS:ABS0
        mov     dx,Orig_INT0;           ; get offset if INT0 handler
        xchg    INT0,dx                 ; set new INT0 offset
        mov     Orig_INT0,dx
        mov     dx,Orig_INT0[2]         ; get segment of INT0 handler
        xchg    INT0[2],dx              ; set new INT0 segment
        mov     Orig_INT0[2],dx
        pop     ds                      ; restore segment register
        ret                             ; split
ASSUME  DS:NOTHING




;-----------------------------------------------------------------------------
; INT0 handler sets a semaphore (CX=FFFF) and adjusts the return address to
; point past the invalid opcode.
;-----------------------------------------------------------------------------
INT0_handler:
        enter   0,0                     ; create new stack frame
        dec     cx                      ; make CX=FFFF
        add     word ptr ss:[bp][2],2   ; point past invalid opcode
        leave
        iret

end


