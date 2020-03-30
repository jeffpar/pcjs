;-----------------------------------------------------------------------------
;
; LOADFNS.286
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
; Equates & local variables
;---------------------------------------------------------------
; I/O Ports
;---------------------------------------------------------------
        Mstrmsk         equ     021h    ; 8259 master mask addr
        KBC_CTL         equ     060h    ; 8042 control port
        KBC_STAT        equ     064h    ; 8042 status port
        Cmos_index      equ     070h    ; CMOS address port
        Cmos_data       equ     071h    ; CMOS data port
        Slv_msk         equ     0a1h    ; 8259 slave mask addr

;---------------------------------------------------------------
; CMOS RAM
;---------------------------------------------------------------
        Shut_down       equ     00fh    ; CMOS index for shutdwn
        Type5           equ     5       ; Shutdown type-5

;---------------------------------------------------------------
; Keyboard Controller
;---------------------------------------------------------------
        inpt_buf_full   equ     2       ; Input buffer full
        Shutdown_CMD    equ     0feh    ; Shutdown CMD for KBC
        enable_bit20    equ     0dfh    ; enable A20 command
        disable_bit20   equ     0ddh    ; disable A20 command


;---------------------------------------------------------------;
  RESET_CPU:; Resets the CPU by sending a shutdown command to
;             the keyboard controller.
;---------------------------------------------------------------
; Input:   None
; Output:  None
; Register(s) modified:  Doesn't matter, the CPU is reset
;---------------------------------------------------------------
        mov     al,Shutdown_CMD ; get shutdown command
        out     KBC_STAT,al     ; send command to shutdown CPU
        cli                     ; disable interrupts so that
                                ;  an INT can't come through
                                ;  before the CPU resets
        hlt                     ;


;---------------------------------------------------------------;
; SETPM_RET_ADDR:  Save the real-mode return address @ 40:67
;                  from protected mode.
;---------------------------------------------------------------
; Input:   CS:AX = Return address from PM.
;          DS    = Better darn well have a PM segment selector!
;                  (Or else Kablooie!)
; Output:  None
; Register(s) modified:  None
;---------------------------------------------------------------
  Setpm_ret_addr        proc    near
;---------------------------------------------------------------
        push    dx              ; save it
        push    ds
        mov     dx,ABS0         ;
        mov     ds,dx
ASSUME  DS:ABS0
        mov     DS:PM_Ret_off,ax
        mov     DS:PM_Ret_seg,cs
ASSUME  DS:_DATA
        pop     ds
        pop     dx
        ret
Setpm_ret_addr  endp


;---------------------------------------------------------------
; Get_INT_status:  Saves the master and slave mask register
;                  contents from the 8259 interrupt controller.
;---------------------------------------------------------------
; Input:   DS      = _DATA SEGMENT
; Output:  i8259_1 = Status of master device
;          i8259_2 = Status of slave device
; Register(s) modified:  None
;---------------------------------------------------------------
  Get_int_status        proc    near
;---------------------------------------------------------------
        push    ax
        in      al,mstrmsk      ; get master PIC mask
        mov     i8259_1,al
        IO_Delay                ; I/O delay
        in      al,slv_msk      ; get slave PIC mask
        mov     i8259_2,al
        pop     ax
        ret                     ; exit
Get_int_status  endp


;---------------------------------------------------------------;
; Set_INT_status:  Restores the interrupt status of the 8259A
;                  programmable interrupt controller (PIC).
;---------------------------------------------------------------
; Input:   i8259_1 = Status of master device
;          i8259_2 = Status of slave device
;          DS      = _DATA SEGMENT
; Output:  None
; Register(s) modified:  None
;---------------------------------------------------------------
  Set_int_status        proc    near
;---------------------------------------------------------------
        pushf                   ; save interrupt flag
        cli                     ; we REALLY don't want an int
                                ;  to come through while we are
        push    ax              ;  reprogramming the PIC masks
        mov     al,i8259_1
        out     mstrmsk,al      ; restore master PIC mask
        IO_Delay                ; I/O delay
        mov     al,i8259_2
        out     slv_msk,al      ; restore slave PIC mask
        pop     ax
        popf                    ; restore interrupt flag
        ret                     ; exit
Set_int_status  endp


;---------------------------------------------------------------
; SET_SHUTDOWN_TYPE:  Set the processor shutdown type-5 in CMOS.
;---------------------------------------------------------------
; Input:   None
; Output:  None
; Register(s) modified:  None
;---------------------------------------------------------------
  Set_shutdown_type     proc    near
;---------------------------------------------------------------
        pushf                   ; save interrupt status
        cli                     ; disable ints so somebody else
                                ;  doesn't do this right now
        push    ax
        mov     al,shut_down    ; Set shutdown byte
        out     cmos_index,al   ; to shut down x05.
        IO_Delay                ; I/O delay
        mov     al,Type5        ;
        out     cmos_data,al    ; CMOS data port
        pop     ax
        popf
        ret
set_shutdown_type       endp


;---------------------------------------------------------------
; Enable_gate20:  Turn on A20, and check for errors.
;---------------------------------------------------------------
; Input:   None
; Output:  CY=ERROR
; Register(s) modified:  None
;---------------------------------------------------------------
  Enable_gate20 proc    near
;---------------------------------------------------------------
        push    ax
        mov     ah,enable_bit20         ; gate address bit 20 on
        Call    Gate_A20
        or      al,al                   ; command accepted?
        jz      A20_OK                  ; go if yes
        stc                             ; set error flag
A20_OK: pop     ax
        ret                             ; exit
Enable_gate20   endp


;---------------------------------------------------------------
; SHUT_A20:  Disable A20 from CPU address BUS.
;---------------------------------------------------------------
; Input:   None
; Output:  CY=ERROR
; Register(s) modified:  None
;---------------------------------------------------------------
  Shut_a20      proc    near
;---------------------------------------------------------------
        push    ax
        mov     ah,disable_bit20        ; gate address bit 20 on
        Call    Gate_A20
        or      al,al                   ; was command accepted?
        jz      A20_Shut                ; go if yes
        stc                             ; set error flag

A20_Shut:
        pop     ax
        ret                             ; exit
Shut_a20        endp


;---------------------------------------------------------------
; GATE_A20:  This routine controls a signal which gates address
;            line 20 (A20).  The gate A20 signal is an output of
;            of the 8042 slave processor (keyboard controller).
;            A20 should be gated on before entering protected
;            mode, to allow addressing of the entire 16M address
;            space of the 80286, or 4G address space of the
;            80386 & 80486.  It should be gated off after
;            entering real mode -- from protected mode.
;---------------------------------------------------------------
; Input:   AH = DD ==> A20 gated off (A20 always 0)
;          AH = DF ==> A20 gated on  (CPU controls A20)
; Output:  AL = 0  ==> Operation successful
;          AL = 2  ==> Operation failed, 8042 can't accept cmd
; Register(s) modified:  AX
;---------------------------------------------------------------
  Gate_a20      proc    near
;---------------------------------------------------------------
        pushf                   ; save interrupt status
        cli                     ; disable ints while using 8042
        Call    Empty_8042      ; insure 8042 input buffer empty
        jnz     A20_Fail        ; ret: 8042 unable to accept cmd
        IO_Delay                ; I/O Delay
        mov     al,0D1h         ; 8042 cmd to write output port
        out     KBC_STAT,al     ; output cmd to 8042
        Call    Empty_8042      ; wait for 8042 to accept cmd
        jnz     A20_Fail        ; ret: 8042 unable to accept cmd
        mov     al,ah           ; 8042 port data
        out     KBC_CTL,al      ; output port data to 8042
        Call    Empty_8042      ; wait for 8042 to port data
        push    cx              ; save it
        mov     cx,14h          ;
@DLY:   IO_Delay                ; Wait for KBC to execute the
        loop    @DLY            ;  command.  (about 25uS)
        pop     cx              ; restore it

A20_Fail:
        popf                    ; restore flags
        ret
Gate_a20        endp


;---------------------------------------------------------------
; EMPTY_8042:  This routine waits for the 8042 buffer to empty.
;---------------------------------------------------------------
; Input:   None
; Output:  AL = 0, 8042 input buffer empty:     ZF
;          AL = 2, Time out; 8042 buffer full:  NZ
; Register(s) modified:  AX
;---------------------------------------------------------------
  Empty_8042    proc    near
;---------------------------------------------------------------
        push    cx              ; save CX
        xor     cx,cx           ; CX=0:  timeout value

Try_KBC:
        IO_Delay                ;
        in      al,KBC_STAT     ; read 8042 status port
        and     al,inpt_buf_full; input buffer full flag (D1)
        loopnz  Try_KBC         ; loop until input buffer empty
                                ;   or timeout
        pop     cx              ; restore CX
        ret
Empty_8042      endp


;---------------------------------------------------------------
; CALC_PM_ADDRESS:  Calculate 32-bit protected mode address.
;                   Used for building descriptor tables.
;---------------------------------------------------------------
; Input:   ES:SI = Real mode address
; Output:  DX:AX = 32-bit linear address
; Register(s) modified:  AX, DX
;---------------------------------------------------------------
  Calc_pm_address       proc    near
;---------------------------------------------------------------
        mov     ax,es           ; point to control block
        xor     dh,dh           ; clear upper register
        mov     dl,ah           ; build high byte of 32-bit addr
        shr     dl,4            ; use only high nibble from (AX)
        shl     ax,4            ; strip high nibble from segment
        add     ax,si           ; add GDT offset for low word
        adc     dx,0            ; adj high byte if CY from low
        ret                     ; back to calling program
calc_pm_address endp


;---------------------------------------------------------------
  Save_state    proc    near    ; Save the machine state before
;                               ; LOADALL
;---------------------------------------------------------------
        push    ax
        push    ds
        mov     si,0
        mov     di,offset Machine_State.ES_Desc
        mov     ax,3000h                ; ES descriptor
        mov     ds,ax
        mov     bx,0303h
        movsw
        mov     word ptr [si-2],bx

        add     ax,1000h                ; SS descriptor
        add     bx,0101h
        mov     si,0
        add     di,0ah
        mov     ds,ax
        movsw
        mov     word ptr [si-2],bx
        sub     ax,2000h                ; DS descriptor
        sub     bx,0202h
        mov     si,0
        add     di,4
        mov     ds,ax
        movsw
        mov     word ptr [si-2],bx
        pop     ds

        smsw    ax
        mov     Machine_State._Msw,ax
        pushf
        pop     ax
        mov     Machine_State._Flags,ax
        pop     ax
        mov     Machine_State._DI,di
        mov     Machine_State._SI,si
        mov     Machine_State._BP,bp
        mov     Machine_State._BX,bx
        mov     Machine_State._DX,dx
        mov     Machine_State._CX,cx
        mov     Machine_State._AX,ax
        mov     ax,ds
        mov     Machine_State._DS,ax
        mov     ax,es
        mov     Machine_State._ES,ax
        ret
Save_state      endp


;---------------------------------------------------------------
  Restore_state proc    near    ; Restore the machine state
;                               ; after LOADALL
;---------------------------------------------------------------
        mov     ax,_data
        mov     ds,ax
        mov     ax,3000h                ; ES
        mov     es,ax
        mov     si,offset Machine_State.DS_Desc
        mov     di,0
        movsw
        add     ax,1000h                ; SS
        add     si,0ah
        mov     di,0
        mov     es,ax
        movsw
        sub     ax,2000h                ; DS
        add     si,4
        mov     di,0
        mov     es,ax
        movsw
        mov     ax,Machine_State._ES
        mov     es,ax
        mov     ax,Machine_State._DS
        mov     ds,ax
        mov     ax,Machine_State._Flags
        push    ax
        popf
        mov     ax,Machine_State._Msw
        lmsw    ax
        mov     ax,Machine_State._AX
        mov     cx,Machine_State._CX
        mov     dx,Machine_State._DX
        mov     bx,Machine_State._BX
        mov     bp,Machine_State._BP
        mov     si,Machine_State._SI
        mov     di,Machine_State._DI
        ret
Restore_State   endp
