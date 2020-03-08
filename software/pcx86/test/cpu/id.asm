bits 16
cpu 8086

CPU_86 equ 0
CPU_NEC equ 1
CPU_186 equ 2
CPU_286 equ 3
CPU_386 equ 4

section code start=0 vstart=0x100

start:
    mov dx, .tcpu
    call print
    call getcpu
    cbw
    push ax
    xchg si, ax
    shl si, 1
    mov dx, [si+.tt]
    call print
    pop ax
    cmp al, CPU_286
    jnb .getmsw
    int 0x20
    cpu 286
.getmsw:
    push ax
    mov dx, .tmsw
    call print
    smsw ax
    call hex2
    mov dx, .tibase
    call print
    sub sp, 6
    mov bp, sp
    sidt [bp]
    pop cx
    pop dx
    pop ax
    call hex2
    xchg ax, dx
    call hex2
    mov dx, .tilimit
    call print
    xchg ax, cx
    call hex2
    pop ax
    cmp al, CPU_386
    jnb .getcr
    int 0x20
    cpu 386
.getcr:
    push ax
    mov dx, .tcr0
    call print
    mov eax, cr0
    push eax
    call hex3
    mov dx, .tccr0
    call print
    xor eax, eax
    mov cr0, eax
    jmp $+2 ; just in case...
    mov eax, cr0
    pop ecx
    mov cr0, ecx
    jmp $+2
    call hex3
    
    pop ax
    
    int 0x20
    cpu 8086
    
section data follows=code vfollows=code

.tcpu:      db "CPU: $"
.tt:        dw .t86,.tnec,.t186,.t286,.t386
.t86:       db "8088/8086$"
.tnec:      db "V20/V30$"
.t186:      db "188/186$"
.t286:      db "286$"
.t386:      db "386+$"
.tmsw:      db 13,10,"MSW: 0x$"
.tibase:    db 13,10,"IDTR: base 0x$"
.tilimit:   db " limit 0x$"
.tcr0:      db 13,10,"CR0: 0x$"
.tccr0:     db 13,10,"Cleared CR0: 0x$"

section code

print:
    mov ah, 0x09
    int 0x21
    ret

getcpu:
    sub sp, 6
    push sp
    pop bp
    cmp sp, bp
    je ._286
    mov ax, -1
    mov cl, 0x21
    shr ax, cl
    or al, al
    mov al, CPU_186
    jnz .done
    mov ax, 0x101
    aad 0x10
    cmp al, 0x11
    mov al, CPU_NEC
    jne .done
    mov al, CPU_86
.done:
    add sp, 6
    ret
._286:
    cpu 286
    sidt [bp]
    pop ax
    pop ax
    pop ax
    or ah, ah
    mov al, CPU_286
    jnz .done2
    mov al, CPU_386
.done2:
    ret
    cpu 8086

hex2:
    cpu 286
    pusha
    mov bx, ax
    mov cx, 4
.hexloop:
    rol bx, 4
    mov ax, bx
    and al, 0x0f
    cmp al, 0x0a
    sbb al, 0x69
    das
    xchg ax, dx
    mov ah, 0x02
    int 0x21
    loop .hexloop
    popa
    ret
    cpu 8086
    
hex3:
    cpu 386
    rol eax, 16
    call hex2
    rol eax, 16
    jmp hex2
    cpu 8086