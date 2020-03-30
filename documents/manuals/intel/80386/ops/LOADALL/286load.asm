        Page    60,132
;-----------------------------------------------------------------------------
;                          BEGIN LISTING 1
;-----------------------------------------------------------------------------
;
; 286LOAD.ASM
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
;
;       This program demonstrates various aspects of CPU
;       behavior that become apparent when using LOADALL.
;
;       Test 1:  Checks that LOADALL loads all the general-
;                purpose registers; loads the segment registers
;                with values that are inconsistant to their
;                respective descriptor cache registers.
;
;       Test 2:  Access extended memory in real mode.
;
;       Test 3:  Tests that the Present bit in a descriptor
;                table can be loaded using LOADALL without
;                generating exception 11.  But when the segment
;                is accessed, exception 13 is generated.
;                NOTE:  This test should be done in protected
;                mode, but can be done in real mode.  1) In real
;                mode, no error code is pushed on the stack
;                (possibly due to a bug in the CPU).  2) Also
;                in real mode, when this program is emulated on
;                a '386, the '386 fails to set the Present bit
;                when any subsequent segment in loaded.  This
;                latter condition is clearly a bug in the '386.
;
;       This program was written for Microsoft MASM 5.1, and
;       MS DOS 3.3.  This program contains compiler directives
;       and branching techniques that might not be available
;       on previous versions of the Macro Assembler, nor in
;       competitive products.  If this program is executed on
;       any version of DOS prior to 3.3, it will most certainaly
;       cause the system to crash.  No attempt is made in this
;       program to be compatible with previous versions of DOS,
;       but compatibility can be done, and is left as an
;       exercise to the reader.
;
;---------------------------------------------------------------

;---------------------------------------------------------------
; Compiler directives
;---------------------------------------------------------------
        Title   LOADALL_286
        .radix  16
        .8086


;---------------------------------------------------------------
; Interrupt vector segment
;---------------------------------------------------------------
ABS0    segment at 0
        org 06h*4                       ; INT 06h vector
        INT_6           dd      ?

        org       0467h                 ; PM Return address
        PM_Ret_off      dw      ?       ;  Offset
        PM_Ret_seg      dw      ?       ;  Segment

        org     800h                    ; LOADALL table loc'n.
        Loadall_Locn    label   word

ABS0    ends


;---------------------------------------------------------------
; Structure definitions
;---------------------------------------------------------------
Desc_cache      STRUC           ;; Hidden descriptor cache
        A15_A00 dw      ?       ;;  format.
        A23_A16 db      ?
        _Type   db      ?
        _Limit  dw      ?
Desc_cache      ENDS


Loadall_struc   STRUC           ;; LOADALL memory image format
                        dw      3 dup (0)
        _Msw            dw      0
                        dw      7 dup (0)
        _Tr             dw      0
        _Flags          dw      2
        _Ip             dw      0
        _Ldt            dw      0
        _Ds             dw      2222h
        _Ss             dw      4444h
        _Cs             dw      1111h
        _Es             dw      3333h
        _Di             dw      6666h
        _Si             dw      7777h
        _Bp             dw      5555h
        _Sp             dw      8888h
        _Bx             dw      2222h
        _Dx             dw      4444h
        _Cx             dw      3333h
        _Ax             dw      1111h
        ES_Desc         db      00,00,03,93h,0ffh,0ffh
        CS_Desc         db      00,00,00,9bh,0ffh,0ffh
        SS_Desc         db      00,00,04,93h,0ffh,0ffh
        DS_Desc         db      00,00,02,93h,0ffh,0ffh
        Gdt_Desc        db      00,00,00,00h,000h,000h
        Ldt_Desc        db      00,00,06,82h,088h,000h
        Idt_Desc        db      00,00,00,00h,0ffh,003h
        TSS_Desc        db      00,00,05,89h,000h,008h
Loadall_Struc   ENDS


Descriptor  STRUC
    Seg_limit       dw      ?   ; Segment limit
    Base_A15_A00    dw      ?   ; A00..A15 of base address
    Base_A23_A16    db      ?   ; A16..A23 of base address
    Access_rights   db      ?   ; Segment access rights
    Limit_A19_A16   db      ?   ; Granularity, Op-size,
                                ;  Limit A16..A19
    Base_A31_A24    db      ?   ; A24..A31 of base address
Descriptor  ENDS


INT_Desc    STRUC
    IGate_Offset    dw      ?   ; Offset of handler
    CSEG_Sel        dw      ?   ; Code segment selector
                    db      0
                    db      86h ; 286 interrupt gate=16bit
                                ;  CS:IP, FLAGS
    Resvd           dw      0   ; Reserved=0
INT_Desc    ENDS


;---------------------------------------------------------------
; Macro definitions in MACROS.286:
;  MFARJMP:             Far JUMP since MASM doesn't assemble it.
;  IO_DELAY:            Put your favorite I/O delay macro here.
;  LOADALL:             Copy the LOADALL memory image down to
;                       0:800 and execute a '286 LOADALL.
;  PRINT_STRING:        Given a variable name, use the DOS
;                       print string command to send it to the
;                       screen.
;---------------------------------------------------------------
        Include         MACROS.286


        _DATA    SEGMENT PARA PUBLIC 'DATA'
;---------------------------------------------------------------
; Equates & local variables
;---------------------------------------------------------------
; Protected mode access rights
;---------------------------------------------------------------
        CS_access       equ     10011011b
        DS_access       equ     10010011b

;---------------------------------------------------------------
; Text equates
;---------------------------------------------------------------
        CRLF            equ     <0dh,0ah>
        CRLF$           equ     <CRLF,'$'>
        INT6            equ     [bp-4]

;---------------------------------------------------------------
; Conditional compilation.  Set USE_386=1 if you plan to execute
; this program on a '386 using EMULOAD.
;---------------------------------------------------------------
        USE_386         equ     0


;---------------------------------------------------------------
; Loadall table(s)
;---------------------------------------------------------------
        Loadall_tbl     Loadall_struc <>
        Machine_State   Loadall_struc <>

;---------------------------------------------------------------
; Global Descriptor Table
;---------------------------------------------------------------
        GDT_286 Descriptor      <Gdt2_len-1,,,DS_access>
        CSEG2   Descriptor      <0ffffh,,,CS_access>    ; CS
        DSEG2   Descriptor      <0ffffh,,,DS_access>    ; DS
        Gdt2_len      equ       $-Gdt_286

;---------------------------------------------------------------
; Interrupt Descriptor Table
;---------------------------------------------------------------
IDT_286 INT_Desc        <Offset INT13,CSEG2-GDT_286>    ; INT00
        INT_Desc        <Offset INT13,CSEG2-GDT_286>    ; INT01
        INT_Desc        <Offset INT13,CSEG2-GDT_286>    ; INT02
        INT_Desc        <Offset INT13,CSEG2-GDT_286>    ; INT03
        INT_Desc        <Offset INT13,CSEG2-GDT_286>    ; INT04
        INT_Desc        <Offset INT13,CSEG2-GDT_286>    ; INT05
        INT_Desc        <Offset INT13,CSEG2-GDT_286>    ; INT06
        INT_Desc        <Offset INT13,CSEG2-GDT_286>    ; INT07
        INT_Desc        <Offset INT13,CSEG2-GDT_286>    ; INT08
        INT_Desc        <Offset INT13,CSEG2-GDT_286>    ; INT09
        INT_Desc        <Offset INT13,CSEG2-GDT_286>    ; INT0a
        INT_Desc        <Offset INT13,CSEG2-GDT_286>    ; INT0b
        INT_Desc        <Offset INT13,CSEG2-GDT_286>    ; INT0c
        INT_Desc        <Offset INT13,CSEG2-GDT_286>    ; INT0d
IDT2_Len        equ     $-IDT_286

;---------------------------------------------------------------
; Misc. local variables
;---------------------------------------------------------------
Mem_buffer      db      400h dup (0)
Results         dw      0
i8259_1         db      ?       ; Status for master device
i8259_2         db      ?       ; Status of slave device


;---------------------------------------------------------------
; String Messages
;---------------------------------------------------------------
Passed  db      "    PASSED.",CRLF$
Failed  db      "--> FAILED <--",CRLF$
Not_286 db      "Not 80286 class computer.",CRLF$
Rmvd    db      "LOADALL removed from 80286 mask.",CRLF$
RFail   db      "Registers weren't loaded correctly."
LF      db       CRLF$

;---------------------------------------------------------------
; I'm doing this wierd string definition technique to limit the
; page width to 64 characters.
;---------------------------------------------------------------
Test_1  label   word
db      "Test 1:  Testing 286 LOADALL instruction:         ",24

Test_2  label   word
db      "Test 2:  Testing extended memory in real mode:    ",24

Test_3  label word
db      "Test 3:  Testing Present BIT in descriptor:       ",24

_DATA    ends


        _TEXT   SEGMENT PARA PUBLIC 'CODE'
        ASSUME  CS:_TEXT, DS:_DATA, ES:_DATA, SS:STACK
        .286p
;---------------------------------------------------------------
; A little CS-relative data for the stack pointer.  This is
; to avoid using other kludge techniques, caused by using
; LOADALL, that make using the data segment undesirable.
;---------------------------------------------------------------
        Stack_ptr       dw      0
                        dw      0

;---------------------------------------------------------------
  LOADALL_286   proc    far
;---------------------------------------------------------------
        PUSH    DS                      ; Setup the stack to
        XOR     AX,AX                   ;  return to DOS
        PUSH    AX

        MOV     AX,_Data
        MOV     DS,AX
        MOV     ES,AX

;---------------------------------------------------------------
; Check CPU type, and set up a minimal invalid opcode handler
; in case LOADALL has been removed from the CPU mask.
;---------------------------------------------------------------
      IFE       USE_386
        Call    CPU_Type                ; 286, 386?
        cmp     ax,2                    ; 286?
        je      short @F                ; yep
        Print_String    LF
        Print_String    Not_286
        retf                            ; go split

@@:     enter   4,0                     ; create stack frame
        mov     word ptr INT6,offset INT6_handler
        mov     INT6[2],cs
        call    set_INT6_vector         ; set our INT6 handler
      ENDIF

        cli
        Call    Save_State              ; Save the current CPU
        Print_String    LF              ;  state
        Print_String    Test_1


;---------------------------------------------------------------
;
; TEST1:  Real mode
;         Test general purpose registers
;         Test Segment registers
;         Test Descriptor cache base address
;
;  (1) Setup LOADALL structures, and pointers
;  (2) Execute LOADALL
;  (3) Verify results of the test
;
;---------------------------------------------------------------
        mov     ax,cs                   ; Prepare 24-bit
        mov     es,ax                   ;  physical address that
        mov     si,0                    ;  is put in the LOADALL
        call    Calc_pm_address         ;  descriptor cache
        mov     Loadall_tbl.CS_Desc.A15_A00,ax  ; entry.
        mov     Loadall_tbl.CS_Desc.A23_A16,dl
        smsw    ax
        mov     Loadall_tbl._Msw,ax
        mov     Loadall_tbl._Ip,offset Verify_State
        mov     word ptr cs:stack_ptr,sp        ; save SS:SP
        mov     word ptr cs:stack_ptr[2],ss
        LOADALL                         ; If LOADALL is removed
        nop                             ;  from the CPU mask,
        Print_String    failed          ;  then fall through
        Print_String    Rmvd            ;  to here.

Loadall_RET:
        call    Restore_state

      IFE       USE_386
        call    set_INT6_vector         ; set our INT6 handler
        leave
      ENDIF

        retf

;---------------------------------------------------------------
  Verify_State:                 ; Verify that LOADALL worked
;---------------------------------------------------------------
; This is where we land for the first test of '286 LOADALL.
; The purpose of this test is to verify that all the general
; purpose registers get loaded correctly.  Specifically, we are
; testing to verify that all segment registers contain values
; that don't correspond to the memory addresses they appear to
; be pointing to.  In other words, we are checking that the
; that the segment registers have one value, while their
; associated hidden descriptor cache registers have different
; values.
;---------------------------------------------------------------
        cmp     ax,1111h                ; Test AX
        jne     @F
        cmp     bx,2222h                ; Test BX
        jne     @F
        cmp     cx,3333h                ; Test CX
        jne     @F
        cmp     dx,4444h                ; Test DX
        jne     @F
        cmp     bp,5555h                ; Test BP
        jne     @F
        cmp     di,6666h                ; Test DI
        jne     @F
        cmp     si,7777h                ; Test SI
        jne     @F
        cmp     sp,8888h                ; Test SP
        jne     short @F
        mov     ax,cs                   ; Test CS
        cmp     ax,1111h
        jne     short @F
        mov     ax,ds                   ; Test DS
        cmp     ax,2222h
        jne     short @F
        mov     ax,es                   ; Test ES
        cmp     ax,3333h
        jne     short @F
        mov     ax,ss                   ; Test SS
        cmp     ax,4444h
        jne     short @F
        cmp     word ptr ds:[0],0202h   ; Test DS Desc Cache
        jne     short @F
        cmp     word ptr es:[0],0303h   ; Test ES Desc Cache
        jne     short @F
        cmp     word ptr ss:[0],0404h   ; Test SS Desc Cache
        jne     short @F
        mov     ax,_Data
        mov     ds,ax
        mov     es,ax

        mov     ax,cs:stack_ptr[2]
        mov     ss,ax
        mov     sp,cs:stack_ptr
        FARJMP  <@Test1_Pass>,<seg _Text>

;---------------------------------------------------------------
; Loadall failed the REGISTERs test.
;---------------------------------------------------------------
@@:     mov     ax,_Data
        mov     ds,ax
        mov     es,ax
        mov     ax,cs:stack_ptr[2]
        mov     ss,ax
        mov     sp,cs:stack_ptr
        FARJMP  <@F>,<seg _Text>

@@:     Print_String    failed
        Print_String    RFail
        jmp     loadall_ret

;---------------------------------------------------------------
; LOADALL passed
;---------------------------------------------------------------
@Test1_Pass:
        Print_String    passed

;---------------------------------------------------------------
;
; TEST2:  Access extended memory while in real mode.
;
;  (1) Enable A20
;  (2) Save contents of extended memory
;  (3) Write data pattern in extended memory
;  (4) Set IP & ES descriptor cache pointing to extended memory
;  (5) LOADALL
;  (6) Verify results
;  (7) Restore original data in extended memory
;
;----------------------------------------------------------------
        Print_String    Test_2
        Call    Enable_Gate20           ; Enable extended memory
        mov     bx,0ffffh               ; Point to extended mem.
        mov     ds,bx                   ;  as FFFF:0010
        mov     si,10h
        mov     di,offset Mem_buffer
        mov     cx,400h / 2             ; 1k data block to test
        rep     movsw                   ; save extended memory
        mov     ax,5aa5h                ; test pattern
        mov     es,bx                   ; point to extended mem.
        mov     cx,400h / 2
        mov     di,10h
        rep     stosw                   ; store pattern in mem.
        mov     ax,_data
        mov     ds,ax
        mov     Loadall_tbl._AX,5aa5h
        mov     Loadall_tbl._CX,400h / 2
        mov     Loadall_tbl._DI,0h
        mov     Loadall_tbl._SP,sp      ; save SP
        mov     Loadall_tbl._IP,offset @F
        mov     Loadall_tbl.ES_Desc.A15_A00,00
        mov     Loadall_tbl.ES_Desc.A23_A16,10
        LOADALL

@@:     repz    scasw                   ; data match?
        lahf                            ; get flags
        mov     bx,_Data
        mov     ds,bx
        mov     cx,0ffffh
        mov     es,cx
        mov     cx,400h / 2
        mov     si,offset Mem_buffer
        mov     di,10h
        rep     movsw                   ; restore data
        mov     es,bx
        mov     cx,cs:stack_ptr[2]
        mov     ss,cx
        FARJMP  <@F>,<seg _Text>
@@:     sahf                            ; restore flags
        jz      @Test2_Pass
        PRINT_STRING    failed
        jmp     Loadall_RET

@Test2_Pass:
        PRINT_STRING    passed

;---------------------------------------------------------------
;
; TEST3:  Test that the Present bit gets loaded w/out exception,
;         but when a segment is accessed INT13 get generated.
;
;         If LOADALL works even remotely like we think it does,
;         then this test will work in REAL MODE!  And as this
;         test was originally programmed, it did!  However, I
;         was doing my testing by emulating '286 LOADALL with
;         '386 LOADALL, where I could use an ICE for debug
;         purposes.  The code worked on a '286, but failed on a
;         '386!  I found that the '386 fails to clear the
;         Present bit in the descriptor cache register when a
;         segment register is loaded in real mode.  This is
;         obviously a bug in the '386.  Since the CPU is in a
;         state that can never be duplicated under any program
;         control, except by using LOADALL (Present=0), the bug
;         will never be manifested in any production code.  As a
;         result, I reprogramed this example to use protected
;         mode so it would work on both the '286 and '386.
;
;  (1) Prepare GDT & IDT descriptor cache registers and
;      descriptor tables, & segment selectors
;  (2) Set protected mode bit, clear Present bit, set IP
;  (3) Save the 8259 masks, set the PM return address, and set
;      CMOS shutdown=5
;  (4) LOADALL
;  (5) Generate the exception
;  (6) Reset ES to a valid segment selector & save results of
;      test.
;  (7) Reset the CPU, restore 8259 masks, inhibit A20 from the
;      CPU bus, restore segment registers to real mode values.
;  (8) Verify the results
;
;---------------------------------------------------------------
; Test Present bit:  verify that P=0 in a descriptor cache
; register will, even in REAL MODE, will generate an exception
; 13 when trying to access memory
;---------------------------------------------------------------
Test3:  Print_String    Test_3
        mov     ax,_Data
        mov     es,ax
        mov     si,0
        call    Calc_pm_address
        mov     DSEG2.Base_A15_A00,ax
        mov     DSEG2.Base_A23_A16,dl
        add     ax,offset GDT_286
        adc     dl,0
        mov     Loadall_tbl.GDT_Desc.A15_A00,ax
        mov     Loadall_tbl.GDT_Desc.A23_A16,dl
        mov     Loadall_tbl.GDT_Desc._Limit,GDT2_Len-1
        mov     si,offset IDT_286
        call    Calc_pm_address
        mov     Loadall_tbl.IDT_Desc.A15_A00,ax
        mov     Loadall_tbl.IDT_Desc.A23_A16,dl
        mov     Loadall_tbl.IDT_Desc._Limit,IDT2_Len-1
        mov     ax,_TEXT
        mov     es,ax
        mov     si,0
        call    Calc_pm_address
        mov     CSEG2.Base_A15_A00,ax
        mov     CSEG2.Base_A23_A16,dl
        mov     Loadall_tbl._CS,CSEG2-GDT_286

        or      Loadall_tbl._MSW,1
        and     Loadall_tbl.ES_Desc._Type,7fh   ; Clear P bit
        mov     Loadall_tbl._IP,offset @PM_286  ; Set IP

        Call    Get_INT_Status          ; save PIC masks
        mov     ax,offset @RM_286       ; save real mode return
        Call    SetPM_RET_addr          ;  address
        Call    Set_shutdown_type       ; set shutdown in CMOS

        LOADALL

@PM_286:mov     al,es:[di][2]

        mov     ax,DSEG2-GDT_286
        mov     es,ax
        mov     ES:Results,di
        jmp     RESET_CPU

@RM_286:mov     ax,cs:stack_ptr[2]
        mov     ss,ax
        mov     sp,cs:stack_ptr
        mov     ax,_Data
        mov     ds,ax
        mov     es,ax
        call    Set_INT_Status
        call    Shut_A20

        mov     di,Results              ; If an exception 13 was
        test    di,1                    ;  generated, then the
        jnz     @F                      ;  low bit of DI is set


        Print_String    failed          ; Test failed
        jmp     Loadall_RET

@@:     Print_String    passed          ; Test passed
        jmp     Loadall_RET
LOADALL_286     endp


;---------------------------------------------------------------
; Minimal exception 13 handler that points past a 4-byte opcode,
; and sets the lowest bit in DI before returning.
;---------------------------------------------------------------
        INT13   label   word
        push    bp
        mov     bp,sp
        add     word ptr [bp][4],4
        or      di,1
        pop     bp
        add     sp,2
        iret


;---------------------------------------------------------------
; Include all the protected mode functions:
;  RESET_CPU:          Reset the CPU back to real mode
;  SETPM_RET_ADDR:     Put the PM return address @ 40:67
;  GET_INT_STATUS:     Save the 8259 (PIC) masks.
;  SET_INT_STATUS:     Restore the 8259 (PIC) masks.
;  SET_SHUTDOWN_TYPE:  Set CMOS shutdown type 5
;  ENABLE_GATE20:      Enable A20 to CPU bus
;  SHUT_A20:           Disable A20 from the CPU bus
;  CALC_PM_ADDRESS:    Calculate a 24-bit physical address
;  SAVE_STATE:         Save machine state before LOADALL
;  RESTORE_STATE:      Restore machine state after LOADALL
;---------------------------------------------------------------
        Include LOADFNS.286


      IFE       USE_386
;---------------------------------------------------------------
; Include the CPU_TYPE procedure & LOADALL test
;---------------------------------------------------------------
        Include CPU_TYPE.ASM
      ENDIF

_text   ends


        stack   segment para stack 'stack'
        db      400h dup (0)
        stack   ends

        end     LOADALL_286

;---------------------------------------------------------------
;                           END LISTING 1
;---------------------------------------------------------------
