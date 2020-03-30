        Page    60,132
;---------------------------------------------------------------
;                          BEGIN LISTING 2
;---------------------------------------------------------------
;
; 386LOAD.ASM
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
;                (possibly due to a bug in the CPU).  2) Also,
;                when this test is executed in real-mode, the
;                '386 fails to set the Present bit when the
;                segment is subsequently loaded.  This latter
;                condition is clearly a bug in the '386.
;
;       Test 4:  Test 32-bit protected mode.
;
;       Test 5:  Test 32-bit real mode -- a mode that is an
;                illegal mode for the CPU.
;
;       Test 6:  Test that the Granularity bit in the descriptor
;                cache register has no affect on the segment
;                limit field.
;
;       Test 7:  Test execution breakpoints.
;
;       Test 8:  Test data breakpoints.
;
;       This program was written for Microsoft MASM 5.1.
;       This program contains compiler directives and branching
;       techniques that might not be available on previous
;       versions of the Macro Assembler, nor in competitive
;       products.
;
;---------------------------------------------------------------

;---------------------------------------------------------------
; Compiler directives
;---------------------------------------------------------------
        Title   LOADALL_386
        .radix  16
        .8086


;---------------------------------------------------------------
; Interrupt vector segment
;---------------------------------------------------------------
ABS0    segment at 0
        org 6*4
        INT_6           dd      ?
ABS0    ends


;---------------------------------------------------------------
; Structure definitions
;---------------------------------------------------------------
Desc_cache      STRUC
                db      0
        _Type   db      ?
        _CS32   db      0
                db      0
        _Addr   dd      ?
        _Limit  dd      ?
Desc_cache      ENDS


Loadall_struc   STRUC
        _Cr0            dd      0
        _Eflags         dd      2
        _Eip            dd      0
        _Edi            dd      66666666h
        _Esi            dd      77777777h
        _Ebp            dd      55555555h
        _Esp            dd      88888888h
        _Ebx            dd      22222222h
        _Edx            dd      44444444h
        _Ecx            dd      33333333h
        _Eax            dd      11111111h
        _Dr6            dd      0
        _Dr7            dd      0
        _Tr             dd      0
        _Ldt            dd      0
        _Gs             dd      5555h
        _Fs             dd      4444h
        _Ds             dd      2222h
        _Ss             dd      6666h
        _Cs             dd      1111h
        _Es             dd      3333h
        TSS_Desc        dd      00008900h,00070000h,00000800h
        IDT_Desc        dd      00000000h,00000000h,000003ffh
        Gdt_Desc        dd      00000000h,00000000h,00000000h
        Ldt_Desc        dd      00008200h,00090000h,00000088h
        GS_Desc         dd      00009300h,00050000h,0000ffffh
        FS_Desc         dd      00009300h,00040000h,0000ffffh
        DS_Desc         dd      00009300h,00020000h,0000ffffh
        SS_Desc         dd      00009300h,00060000h,0000ffffh
        CS_Desc         dd      00009b00h,00000000h,0000ffffh
        ES_Desc         dd      00009300h,00030000h,00fffffch
Loadall_Struc   ENDS


Descriptor  STRUC
    Seg_limit       dw      ?       ; Segment limit
    Base_A15_A00    dw      ?       ; A00..A15 of base address
    Base_A23_A16    db      ?       ; A16..A23 of base address
    Access_rights   db      ?       ; Segment access rights
    Limit_A19_A16   db      ?       ; Granularity, Op-size,
                                    ;  Limit A16..A19
    Base_A31_A24    db      ?       ; A24..A31 of base address
Descriptor  ENDS


INT_Desc    STRUC
    IGate_Offset    dw      ?       ; Offset of handler
    CSEG_Sel        dw      ?       ; Code segment selector
                    db      0
                    db      86h     ; 286 interrupt gate=16bit
                                    ;  CS:IP, FLAGS
    Resvd           dw      0       ; Reserved=0
INT_Desc    ENDS


;---------------------------------------------------------------
; Macro definitions in MACROS.386:
;  INIT_DESCRIPTOR:     Given a segment, offset, and descriptor
;                       name, calculate the 24-bit physical
;                       address, and store it in the descriptor.
;  FARJMP:              Far JUMP since MASM doesn't assemble it.
;  LONGJMP:             32-bit FAR JUMP similar to above.
;  IO_DELAY:            Put your favorite I/O delay macro here.
;  LOADALL:             Copy the LOADALL memory image down to
;                       0:800 and execute a '286 LOADALL.
;  PRINT_STRING:        Given a variable name, use the DOS
;                       print string command to send it to the
;                       screen.
;---------------------------------------------------------------
        Include         MACROS.386


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
; Loadall table(s)
;---------------------------------------------------------------
        Loadall_tbl     Loadall_struc <>
        Machine_State   Loadall_struc <>

;---------------------------------------------------------------
; Global Descriptor Table
;---------------------------------------------------------------
        GDT_386 Descriptor      <Gdt3_len-1,,,DS_access>
        CSEG3   Descriptor      <0ffffh,0,0,CS_access>
        DSEG3   Descriptor      <0ffffh,0,20h,DS_access>
        Gdt3_len      equ       $-Gdt_386

;---------------------------------------------------------------
; Interrupt Descriptor Table
;---------------------------------------------------------------
IDT_386 INT_Desc        <Offset INT13,CSEG3-GDT_386>    ; INT00
        INT_Desc        <Offset INT01,CSEG3-GDT_386>    ; INT01
        INT_Desc        <Offset INT13,CSEG3-GDT_386>    ; INT02
        INT_Desc        <Offset INT13,CSEG3-GDT_386>    ; INT03
        INT_Desc        <Offset INT13,CSEG3-GDT_386>    ; INT04
        INT_Desc        <Offset INT13,CSEG3-GDT_386>    ; INT05
        INT_Desc        <Offset INT13,CSEG3-GDT_386>    ; INT06
        INT_Desc        <Offset INT13,CSEG3-GDT_386>    ; INT07
        INT_Desc        <Offset INT13,CSEG3-GDT_386>    ; INT08
        INT_Desc        <Offset INT13,CSEG3-GDT_386>    ; INT09
        INT_Desc        <Offset INT13,CSEG3-GDT_386>    ; INT0a
        INT_Desc        <Offset INT13,CSEG3-GDT_386>    ; INT0b
        INT_Desc        <Offset INT13,CSEG3-GDT_386>    ; INT0c
        INT_Desc        <Offset INT13,CSEG3-GDT_386>    ; INT0d
IDT3_Len        equ     $-IDT_386

;---------------------------------------------------------------
; Misc. local variables
;---------------------------------------------------------------
        Mem_buffer      db      400h dup (0)    ; Store 2M mem.
        Buffer          db      40h dup (0)
        Buffer2         dw      10h dup (0)

        RM_IDT3_Ptr     dw      (256d*4)-1      ; Real-mode IDT
                        dd      0               ;  pointer
                        dw      0


;---------------------------------------------------------------
; String Messages
;---------------------------------------------------------------
Passed  db      "    PASSED.",CRLF$
Failed  db      "--> FAILED <--",CRLF$
Not_386 db      "Not 80386 class computer.",CRLF$
Rmvd    db      "LOADALL removed from 80386 mask.",CRLF$
RFail   db      "Registers weren't loaded correctly."
LF      db       CRLF$

;---------------------------------------------------------------
; I'm doing this wierd string definition technique to limit the
; page width to 64 characters.
;---------------------------------------------------------------
Test_1  label   word
db      "Test 1:  Testing 386 LOADALL instruction:         ",24

Test_2  label   word
db      "Test 2:  Testing extended memory in real mode:    ",24

Test_3  label   word
db      "Test 3:  Testing Present BIT in descriptor:       ",24

Test_4  label   word
db      "Test 4:  Testing 32-bit protected mode:           ",24

Test_5  label   word
db      "Test 5:  Testing 32-bit real mode:                ",24

Test_6  label   word
db      "Test 6:  Testing Granularity BIT:                 ",24

Test_7  label   word
db      "Test 7:  Testing Execution breakpoints:           ",24

Test_8  label   word
db      "Test 8:  Testing byte, write, data breakpoints:   ",24

_DATA   ENDS


        _TEXT   SEGMENT PARA PUBLIC 'CODE'
        ASSUME  CS:_TEXT, ds:_DATA, ES:_DATA, SS:STACK
        .386P
;---------------------------------------------------------------
; A little CS-relative data for the stack pointer.  This is
; to avoid using other kludge techniques, caused by using
; LOADALL, that make using the data segment undesirable.
;---------------------------------------------------------------
        Stack_ptr       dd      0
                        dw      0

;---------------------------------------------------------------
  LOADALL_386   proc    far
;---------------------------------------------------------------
        PUSH    DS                      ; Setup the stack to
        XOR     AX,AX                   ;  return to DOS
        PUSH    AX

        MOV     AX,_Data
        MOV     DS,AX
        MOV     ES,AX

;---------------------------------------------------------------
; Check CPU type
;---------------------------------------------------------------
        Call    CPU_Type                ; 386, 486?
        cmp     ax,3                    ; 386?
        je      short @F                ; yep
        Print_String    LF
        Print_String    Not_386
        retf                            ; go split

@@:     enter   4,0                     ; create stack frame
        mov     word ptr INT6,offset INT6_handler
        mov     INT6+2,cs
        call    set_INT6_vector         ; set our INT6 handler
        cli
        Call    Save_State
        Print_String    LF
        Print_String    Test_1
        Init_descriptor <seg Gdt_386>,<offset Gdt_386>,Gdt_386
        Init_descriptor cs,   0,CSEG3

;---------------------------------------------------------------
;
; TEST1:  16-bit Real mode
;         Test general purpose registers
;         Test Segment registers
;         Test Descriptor cache base address
;
;  (1) Setup LOADALL structures, and pointers
;  (2) Execute LOADALL
;  (3) Verify results of the test
;
;---------------------------------------------------------------
        mov     eax,cs                  ; Prepare a 32-bit
        shl     eax,4                   ;  physical address that
                                        ;  is put in the LOADALL
                                        ;  CS descriptor cache.
        mov     Loadall_tbl.CS_Desc._Addr,eax

        mov     eax,cr0                 ; Initialize CR0 in the
        and     eax,0fffffff0h          ;  LOADALL data table
        mov     Loadall_tbl._CR0,eax    ;  DR6, DR7, EIP
        mov     eax,dr6
        mov     ebx,dr7
        mov     Loadall_tbl._DR6,eax
        mov     Loadall_tbl._DR7,ebx
        mov     Loadall_tbl._EIP,offset Verify_State
        mov     dword ptr cs:stack_ptr,esp        ; save SS:ESP
        mov     word ptr cs:stack_ptr[4],ss
        mov     edi,offset loadall_tbl
        LOADALL
        nop                             ; If LOADALL is removed
        Print_String    failed          ;  from the CPU mask,
        Print_String    Rmvd            ;  then fall through
                                        ;  to here.
Loadall_RET:
        call    Restore_state
        call    set_int6_vector
        leave
        retf

;---------------------------------------------------------------
  Verify_State:                 ; Verify that LOADALL worked
;---------------------------------------------------------------
; This is where we land for the first test of '386 LOADALL.
; The purpose of this test is to verify that all the general
; purpose registers get loaded correctly.  Specifically, we are
; testing to verify that all segment registers contain values
; that don't correspond to the memory addresses they appear to
; be pointing to.  In other words, we are checking that the
; that the segment registers have one value, while their
; associated hidden descriptor cache registers have different
; values.
;---------------------------------------------------------------
        cmp     eax,11111111h           ; Test EAX
        jne     @F
        cmp     ebx,22222222h           ; Test EBX
        jne     @F
        cmp     ecx,33333333h           ; Test ECX
        jne     @F
        cmp     edx,44444444h           ; Test EDX
        jne     @F
        cmp     ebp,55555555h           ; Test EBP
        jne     @F
        cmp     edi,66666666h           ; Test EDI
        jne     @F
        cmp     esi,77777777h           ; Test ESI
        jne     @F
        cmp     esp,88888888h           ; Test ESP
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
        mov     ax,fs                   ; Test FS
        cmp     ax,4444h
        jne     short @F
        mov     ax,gs                   ; Test GS
        cmp     ax,5555h
        jne     short @F
        mov     ax,ss                   ; Test SS
        cmp     ax,6666h
        jne     short @F
        cmp     dword ptr ds:[0],02020202h ; Test DS Desc Cache
        jne     short @F
        cmp     dword ptr es:[0],03030303h ; Test ES Desc Cache
        jne     short @F
        cmp     dword ptr fs:[0],04040404h ; Test FS Desc Cache
        jne     short @F
        cmp     dword ptr gs:[0],05050505h ; Test GS Desc Cache
        jne     short @F
        cmp     dword ptr ss:[0],06060606h ; Test SS Desc Cache
        jne     short @F
        mov     ax,_Data                ; Reset segment regs.
        mov     ds,ax
        mov     es,ax
        lss     esp,fword ptr cs:stack_ptr      ; Reset SS:ESP
        FARJMP  <Loadall_test>,<seg _Text>      ; Continue

;---------------------------------------------------------------
; Loadall failed the REGISTERs test.
;---------------------------------------------------------------
@@:     mov     ax,_Data
        mov     ds,ax
        mov     es,ax
        lss     esp,fword ptr cs:stack_ptr
        FARJMP  <@F>,<seg _Text>
@@:     Print_String    failed
        Print_String    RFail
        jmp     loadall_ret

;---------------------------------------------------------------
; LOADALL passed
;---------------------------------------------------------------
Loadall_test:
        Print_String    passed

;---------------------------------------------------------------
;
; TEST2:  Access extended memory while in real mode (@ 2M).
;
;  (1) Fill in LOADALL structure with "reasonable" values
;  (2) Save contents of extended memory
;  (3) Write data pattern in extended memory
;  (4) Set LOADALL registers used by this test
;  (5) LOADALL
;  (6) Verify results
;  (7) Restore original data in extended memory
;
;---------------------------------------------------------------
; In this test, I'll access extended memory while in real mode.
; I'll assume the computer has at least 2M of memory.  By
; assuming 2M, I don't need to enable A20 on the CPU bus, since
; memory @ 2M doesn't assert A20.
;---------------------------------------------------------------
; Fill LOADALL structure with more reasonable values.
;---------------------------------------------------------------
        mov     Loadall_tbl._EAX,0
        mov     Loadall_tbl._EBX,0
        mov     Loadall_tbl._ECX,0
        mov     Loadall_tbl._EDX,0
        mov     Loadall_tbl._EBP,0
        mov     Loadall_tbl._ESP,esp
        mov     Loadall_tbl._CS,cs
        mov     Loadall_tbl._DS,ds
        mov     Loadall_tbl._ES,es
        mov     Loadall_tbl._FS,8000h
        mov     Loadall_tbl._GS,8000h
        mov     Loadall_tbl._SS,ss

;---------------------------------------------------------------
; Load segment descriptor cache registers:
;  DS=ES = _DATA segment
;  FS=GS = 80000h (8000:0)
;  SS    = STACK segment
;---------------------------------------------------------------
        mov     ax,ds
        movzx   eax,ax
        shl     eax,4
        mov     bx,ss
        movzx   ebx,bx
        shl     ebx,4
        mov     Loadall_tbl.DS_Desc._addr,eax
        mov     Loadall_tbl.ES_Desc._addr,eax
        mov     Loadall_tbl.FS_Desc._addr,80000h;
        mov     Loadall_tbl.GS_Desc._addr,80000h
        mov     Loadall_tbl.SS_Desc._addr,ebx

;---------------------------------------------------------------
; Slip into protected mode to save the contents of memory @ 2M,
; and write a test pattern into that memory.
;---------------------------------------------------------------
        Print_String    Test_2
        lgdt    fword ptr Gdt_386       ; Load the GDT
        mov     ebx,cr0                 ; enter protected mode
        or      bl,1
        mov     cr0,ebx
        FARJMP  <@F>,<CSEG3-Gdt_386>

@@:     mov     dx,DSEG3-Gdt_386        ; Get segment selector
        mov     ds,dx                   ;  for DS @ 2M
        mov     cx,400h / 4
        mov     si,0
        mov     di,offset Mem_buffer
        rep     movsd                   ; Save memory
        mov     eax,5aa5aa5ah           ; Test pattern
        mov     cx,400h / 4
        mov     di,0
        mov     es,dx                   ; ES = 2M
        rep     stosd                   ; Store test pattern
        and     bl,not 1                ; exit protected mdoe
        mov     cr0,ebx
        FARJMP  <@F>,<_TEXT>

;---------------------------------------------------------------
; Set LOADALL-image registers used by this test
;---------------------------------------------------------------
@@:     mov     ax,_data
        mov     ds,ax
        mov     es,ax
        mov     Loadall_tbl._EAX,5aa5aa5ah      ; Test pattern
        mov     Loadall_tbl._ECX,400h / 4       ; # of DWORDS
        mov     Loadall_tbl._ESI,offset Mem_buffer
        mov     Loadall_tbl._EDI,0h             ; ES:0
        mov     Loadall_tbl._EIP,offset @F      ; EIP
        mov     Loadall_tbl.ES_Desc._Addr,200000h       ; 2M
        mov     edi,offset loadall_tbl
        LOADALL

;---------------------------------------------------------------
; Check memory for a match of the pattern
;---------------------------------------------------------------
@@:     repz    scasd                   ; data match?
        mov     bx,_Data                ; ES still points to 2M,
        mov     ds,bx                   ;  so I can reset DS and
        mov     cx,400h / 4             ;  restore the original
        mov     di,0                    ;  contents @ 2M without
        rep     movsd                   ;  changing ES.
        mov     es,bx                   ; Set ES to real mode
        lss     esp,fword ptr cs:stack_ptr      ; Restore SS:ESP
        FARJMP  <@F>,<_TEXT>            ; Must jump to R/W CS
@@:     jz      short @Test2_Pass

        PRINT_STRING    failed
        jmp     short @Test3

@Test2_Pass:
        PRINT_STRING    passed

;---------------------------------------------------------------
;
; TEST3:  Test that the Present bit gets loaded w/out exception,
;         but when a segment is accessed INT13 get generated.
;
;  (1) Load GDT & IDT pointers into LOADALL table
;  (2) Set PM bit, CS selector, EIP offset, clear P bit
;  (3) LOADALL
;  (4) Verify Results
;
;-----------------------------------------------------------------------------
@Test3: Print_String    Test_3

;---------------------------------------------------------------
; Initialize the GDT & IDT descriptor cache
;---------------------------------------------------------------
        mov     eax,Loadall_tbl.DS_Desc._Addr
        mov     ebx,eax
        mov     Loadall_tbl.ES_Desc._Addr,eax
        add     eax,offset Gdt_386
        add     ebx,offset Idt_386
        mov     Loadall_tbl.GDT_Desc._Addr,eax
        mov     Loadall_tbl.GDT_Desc._Limit,Gdt3_len-1
        mov     Loadall_tbl.Idt_Desc._Addr,ebx
        mov     Loadall_tbl.Idt_Desc._Limit,Idt3_len-1

        or      Loadall_tbl._CR0,1              ; set PM bit
        mov     Loadall_tbl._ESI,0
        mov     Loadall_tbl._CS,CSEG3-Gdt_386   ; CS selector
        mov     Loadall_tbl._EIP,offset @Test_Present
        and     Loadall_tbl.GS_Desc._Type,7fh   ; clear Present
        mov     edi,offset loadall_tbl          ;  bit in GS
        LOADALL

@Test_Present:
        mov     si,gs:[si][2]           ; choose this because
                                        ;  it's a 4-byte instr.
        Lidt    fword ptr RM_IDT3_Ptr   ; Restore real-mode IDT
        mov     eax,cr0                 ; Exit protected mode.
        and     al,not 1
        mov     cr0,eax
        FARJMP  <@F>,<_TEXT>            ; Return to R/W, real-
                                        ;  mode code segment

@@:     test    si,1                    ; pass test?
        jnz     short @F                ; yep
        Print_String    failed
        jmp     short @Test4

@@:     Print_String    passed

;---------------------------------------------------------------
;
; TEST4:  Test 32-bit Protected Mode operation
;
;  (1) Set LOADALL operand size, PM bits, and EIP offset
;  (2) LOADALL
;  (3) Verify Results
;
;---------------------------------------------------------------
@Test4: Print_String    Test_4

;---------------------------------------------------------------
; Perform 32-bit protected mode test
;---------------------------------------------------------------
        or      Loadall_tbl.CS_Desc._CS32,40h   ; CS32 bit
        mov     Loadall_tbl._EDI,offset Loadall_tbl
        mov     Loadall_tbl._EIP,offset PM32
        LOADALL

;---------------------------------------------------------------
; This test uses a simple technique to determine if we are in
; 32-bit mode or 16-bit mode:
;
; In 16-bit mode, this code will be executed as:
;       mov     si,1234h
;       nop
;       nop
;
; In 32-bit mode, this code will be executed as:
;       mov     esi,90901234h   ; The two NOP's are absorbed
;                               ;  into the 32-bit operand.
;
;---------------------------------------------------------------
;---------------------------------------------------------------
; In 16-bit mode, this code will be executed as:
;       mov     di,1234h
;       nop
;       nop
;
; In 32-bit mode, this code will be executed as:
;       mov     edi,90901234h
;---------------------------------------------------------------
PM32:   mov     si,1234h
        nop
        nop

;---------------------------------------------------------------
; Now, we need to exit 32-bit mode gracefully.  In order to do
; that, we need code that will generate predictable results in
; both 32-bit, and 16-bit mode.  If we are in 32-bit mode, then
; the following compiled code will behave as documented under
; the '32-bit mode' column.  If we failed to enter 32-bit mode,
; then the following compiled code will behave as documented
; under the '16-bit mode' column.  In order to exit gracefully,
; we need to know which mode we are in!  Hence the following
; code to detect it!:
;
; 16-bit mode        32-bit mode
; push    ax         push    eax
; mov     ax,si      mov     eax,esi
; shr     ax,10h     shr     eax,10h ; AX=9090 if in 32-bit
;                                    ; AX=0    if in 16-bit
;
; cmp     al,90h     cmp     al,90h  ; PASS=32-bit, FAIL=16-bit
; pushf              pushf           ; save results for later
; shl     ax,10h     shl     eax,10h ; EAX=90900000 if in 32-bit
; mov     si,ax      mov     esi,eax ; ESI=90900000 if in 32-bit
;                                    ; ESI=66660000 if in 16-bit
; popf               popf            ; restore ZF
; pop     ax         pop     eax
;
; So, the result of this code is to exit 32-bit mode if we got
; there, and to keep going in 16-bit mode if we didn't.
;---------------------------------------------------------------
        push    ax                      ; See the above
        mov     ax,si                   ;  explanation on how
        shr     ax,10h                  ;  this code works
        cmp     al,90h
        pushf
        shl     ax,10h
        mov     si,ax
        popf
        pop     ax
        jne     short @No_PM32bitCS
        or      si,1                    ; set SI if 32-bit mode

;---------------------------------------------------------------
; 32-bit JUMP instruction, to transfer control back to a 16-bit
; segment
;---------------------------------------------------------------
        LONGJMP <@F>,<CSEG3-GDT_386>    ; Construct 32-bit far
                                        ; JMP

@No_PM32bitCS:                          ; FAR JUMP if stuck in
        FARJMP  <@F>,<CSEG3-GDT_386>    ;  16-bit mode.

@@:     Lidt    fword ptr RM_IDT3_Ptr   ; Restore real-mode IDT
        mov     eax,cr0                 ; Exit protected mode.
        and     al,not 1
        mov     cr0,eax
        FARJMP  <@F>,<_TEXT>            ; Jump to real-mode
                                        ;  code segment
@@:     mov     ax,_Data                ; Restore real-mode
        mov     ds,ax                   ;  segment registers
        mov     es,ax
        test    si,1                    ; 32-bit mode passed?
        jnz     short @F                ; yep
        Print_String    failed
        jmp     short @Test5

@@:     Print_String    passed

;---------------------------------------------------------------
;
; TEST5:  Test 32-bit real-mode operation
;
;  (1) Clear operand size, PM bits, and set EIP offset
;  (2) LOADALL
;  (3) Verify Results
;  (4) Get the h&*@! out of 32-bit real-mode
;
;---------------------------------------------------------------
; Test 32-bit real-mode operation.  Make sure we can put the
; processor in an illegal state:  32-bit real-mode.
;---------------------------------------------------------------
@Test5: Print_String    Test_5
        and     Loadall_tbl._CR0,not 1          ; disable PM bit
        and     Loadall_tbl.CS_Desc._Type,not 8 ; make CS R/W
                                                ;  Data segment
        mov     Loadall_tbl._EIP,offset RM32    ; Load EIP
        LOADALL

;---------------------------------------------------------------
; This test uses the exact same technique documented in TEST4.
; See TEST4 for an explanation of these next two code sections.
;---------------------------------------------------------------
RM32:   mov     si,1234h
        nop
        nop

;---------------------------------------------------------------
; See TEST4 for an explanation of this code section.
;---------------------------------------------------------------
        push    ax                      ; See the above
        mov     ax,si                   ;  explanation on how
        shr     ax,10h                  ;  this code works
        cmp     al,90h
        pushf
        shl     ax,10h
        mov     si,ax
        popf
        pop     ax

;---------------------------------------------------------------
; Now getting out of 32-bit real mode is a bit more complicated
; than you may think.  According to Intel, the internal
; descriptor cache registers get re-loaded with default values
; each time the segment is loaded.  But the operand size bit in
; the CS descriptor cache doesn't get cleared in a long jump.
; So, to program around this, I need to either execute LOADALL
; again, or go to protected mode, jump to a 16-bit code segment,
; then go back to real mode.  I think I will do the latter.
;---------------------------------------------------------------
        jne     short @RM32_Fail        ; Do something else
        mov     eax,cr0                 ; Enter protected mode
        or      al,1
        mov     cr0,eax
        LONGJMP <@F>,<CSEG3-GDT_386>    ; To 16-bit CS

@@:     Lidt    fword ptr RM_IDT3_Ptr   ; Reload real-mode IDT
        and     al,not 1                ; Exit protected mode
        mov     cr0,eax
        FARJMP  <@RM32_Pass>,<seg _text>; Back to real-mode CS

@RM32_Fail:
        Print_String    failed
        jmp     short @Test6

@RM32_Pass:
        mov     ax,_Data                ; Reload real-mode
        mov     ds,ax                   ;  segment registers
        mov     es,ax
        Print_String    passed

;---------------------------------------------------------------
;
; TEST6:  Test Granularity bit.  Test that the granularity bit
;         in the descriptor cache has no effect on the limit
;         field of the descriptor cache.  This is a three-part
;         test.  First, by setting G=1 in a segment descriptor
;         cache whose limit=64k should cause an exception.
;         Second, ES_LIMIT=16M-4.  This LIMIT can't ever be
;         generated under program control.  So we simply need
;         to access memory @ 16M-8 to verify this test.  If
;         an exception gets generated, then the test failed.
;         Third, try to access memory @ 16M-4.  If an exception
;         ISN'T generated, then the test failed.
;
;  (1) Set Present, Granularity bits, and EIP offset
;  (2) LOADALL
;  (3) Verify results
;
;---------------------------------------------------------------
; Test Granularity bit:  Test that G=1 has no effect in the
; descriptor cache register.  In the GS descriptor cache, I set
; the limit=64k.  If G=1 has any effect on this field, then the
; following memory access will pass.  We want it to fail, and
; generate an exception-13.
;---------------------------------------------------------------
@Test6: Print_String    Test_6
        or      Loadall_tbl._CR0,1              ; set PM bit
        or      Loadall_tbl.GS_Desc._Type,80h   ; set P=1
        or      Loadall_tbl.GS_Desc._CS32,80h   ; set G=1
        and     Loadall_tbl.CS_Desc._CS32,0bfh  ; clear CS32 bit
        mov     Loadall_tbl._EIP,offset @Test_Gran
        LOADALL

@Test_Gran:
        mov     esi,10000h              ; should generate exc.
        mov     si,gs:[esi]
        shl     si,1                    ; save results
        mov     esi,0fffff8h            ; 16M-8
        mov     si,es:[esi]             ; shouldn't generate exc
        shl     si,1
        mov     esi,0fffffch            ; 16M-4
        mov     si,es:[esi]             ; should generate exc.
        add     esi,4
        Lidt    fword ptr RM_IDT3_Ptr   ; Restore real-mode IDT
        mov     eax,cr0
        and     al,not 1
        mov     cr0,eax
        FARJMP  <@F>,<_TEXT>

@@:     and     si,7
        cmp     si,5                    ; pass test?
        jnz     short @F                ; yep
        Print_String    failed
        jmp     short @Test7

@@:     Print_String    passed

;---------------------------------------------------------------
; The following two expamples show how to use the debug
; registers to generate execution and data break points.  They
; are included in this program because they use LOADALL to set
; DR7.  Forgive the fact that they are poorly documented.
;---------------------------------------------------------------
;
; TEST7:  Test execution breakpoints through debug registers.
;
;  (1) Clear granularity bit, set ES_LIMIT=64k, set EIP offset
;  (2) Set breakpoint qualifiers
;  (3) LOADALL
;  (4) Generate execution breakpoints
;  (5) Verify results
;
;---------------------------------------------------------------
@Test7: Print_String    Test_7
        and     Loadall_tbl.GS_Desc._CS32,7fh   ; set G=0
        mov     Loadall_tbl.ES_Desc._Limit,0ffffh; limit=64k
        mov     Loadall_tbl._EIP,offset Test_DR0

;---------------------------------------------------------------
; Set a series of execution break points in the debug registers.
;---------------------------------------------------------------
        mov     bx,cs
        movzx   ebx,bx
        shl     ebx,4
        lea     eax,[ebx][dword ptr Test_Dr0]
        mov     dr0,eax
        lea     eax,[ebx][dword ptr Test_DR1]
        mov     dr1,eax
        lea     eax,[ebx][dword ptr Test_DR2]
        mov     dr2,eax
        lea     eax,[ebx][dword ptr Test_DR3]
        mov     dr3,eax
        mov     Loadall_tbl._DR7,0aah   ; enable all code
                                        ;  breakpoints
        LOADALL

Test_DR0:
        nop
Test_DR1:
        nop
Test_DR2:
        nop
Test_DR3:
        nop

        Lidt    fword ptr RM_IDT3_Ptr   ; Restore real-mode IDT
        mov     eax,cr0                 ; exit protected mode
        and     al,not 1
        mov     cr0,eax
        FARJMP  <@F>,<seg _text>

@@:     and     si,0fh
        cmp     si,0fh                  ; pass all breakpoints?
        je      short @F                ; yep
        Print_String    failed
        jmp     @Test8

@@:     Print_String    passed

;---------------------------------------------------------------
;
; TEST8:  Test byte-size data write breakpoints
;
;  (1) Set EIP offset
;  (2) Set breakpoint qualifiers
;  (3) LOADALL
;  (4) Generate data breakpoints
;  (5) Verify results
;
;---------------------------------------------------------------
@Test8: Print_String    Test_8
        mov     Loadall_tbl._EAX,55h
        mov     Loadall_tbl._ECX,40h
        mov     Loadall_tbl._EDI,offset Buffer
        mov     Loadall_tbl._EIP,offset @Test_DRBW

        mov     bx,ds
        movzx   ebx,bx
        shl     ebx,4
        lea     eax,[ebx][Dword ptr Buffer][3]
        mov     dr0,eax
        add     eax,10h
        mov     dr1,eax
        add     eax,10h
        mov     dr2,eax
        add     eax,10h
        mov     dr3,eax
        mov     Loadall_Tbl._DR7,111102aah
        LOADALL

@Test_DRBW:
        rep     stosb
        Lidt    fword ptr RM_IDT3_Ptr
        mov     ebx,cr0
        and     bl,not 1
        mov     cr0,ebx
        FARJMP  <@F>,<seg _text>

@@:     and     si,0fh
        cmp     si,0fh                  ; pass all breakpoints?
        je      short @T7P              ; yep
        Print_String    failed
        jmp     @Test9

@T7P:   cmp     dx,4                    ; INT01 4 times?
        jne     @B
        Print_String    passed

@Test9:
        jmp     Loadall_ret


LOADALL_386     endp


;---------------------------------------------------------------
; Minimal exception 13 handler that points past a 4-byte opcode,
; and sets the lowest bit in DI before returning.
;---------------------------------------------------------------
        INT13   label   word
        push    bp
        mov     bp,sp
        add     word ptr [bp][4],4
        or      si,1
        pop     bp
        add     sp,2
        iret


;---------------------------------------------------------------
; Include all the protected mode functions:
;  INT01:              Breakpoint interrupt for debug register
;                       breakpoints.
;  SAVE_STATE:         Save machine state before LOADALL
;  RESTORE_STATE:      Restore machine state after LOADALL
;---------------------------------------------------------------
        Include LOADFNS.386


;---------------------------------------------------------------
; Include the CPU_TYPE procedure & LOADALL test
;---------------------------------------------------------------
        Include CPU_TYPE.ASM

_text   ends


        stack   segment para stack 'stack'
        db      400h dup (0)
        stack   ends

        end     LOADALL_386

;---------------------------------------------------------------
;                           END LISTING 2
;---------------------------------------------------------------
