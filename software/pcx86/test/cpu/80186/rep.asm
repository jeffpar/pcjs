;00: XX XX XX XX 34 12
use16
start:

; Trivial cases. With cx 0, nothing is executed
rep movsb
repz movsb
repnz movsb
rep cmpsb
repz cmpsb
repnz cmpsb
rep scasb
repz scasb
repnz scasb
rep lodsb
repz lodsb
repnz lodsb
rep stosb
repz stosb
repnz stosb


mov bx,040h
push bx
popf

; Now we have the zero flag set, nothing is executed because of cx

rep movsb
repnz movsb
repz cmpsb
repnz cmpsb
repz scasb
repnz scasb
rep lodsb
repnz lodsb
rep stosb
repnz stosb

mov ax,di
mov ah,10h
jmp ax            ; jump to 0xf1000
hlt 

rb 0102h-$
jmp rep_stos_z

rb 0607h-$
jmp rep_lods_nz

rb 0809h-$
jmp rep_movs_nz

rb 00ffch-$
jmp cont_n5
rb 00ffeh-$
jmp cont_n10
; Prefixes do not affect normal instructions
rb 01000h-$
mov cx,0
db 0f3h
push cx
jmp sp

cont_n10:
mov cx,0110ah
db 0f3h
push cx
jmp sp

cont_n5:
jmp cx

rb 0110ah-$
mov cx,5

mov dx,0
push dx
popf
db 0f2h
pop  cx

mov ax,cx
mov ah,20h
jmp ax            ; jump to 0xf200a

rb 0122ch-$
jmp repz_cmps_nz

rb 0122fh-$
jmp repz_scas

; rep movs ZF=1
rb 0200ah-$
push bx
popf
mov cx,2
mov si,03000h
mov ax,0f000h
mov ds,ax
mov ax,01000h
mov es,ax
mov di,0

rep movsb

mov ds,ax
mov ax,word[0]
mov bp,di
mov word[bp+si],ax
jcxz comp_disi
hlt
comp_disi:
jmp word[3004h]

rb 03000h-$
db 009h,008h,007h,006h,05h,04h,03h,02h,01h,0ah,0bh,0ch,0dh

; rep movs ZF=0
rep_movs_nz:
mov ax,0f000h
mov ds,ax
mov cx,1
mov ax,0
push ax
popf

rep movsw

mov ax,1000h
mov ds,ax
mov ax,word[2]
mov bp,di
mov word[bp+si],ax
jcxz movs_nz
hlt
movs_nz:
jmp word[3008h]

; rep lods ZF=0
rep_lods_nz:
mov ax,0f000h
mov ds,ax
mov cx,3
rep lodsb

jmp ax
hlt
rep_lods_z:
; rep lods ZF=1
mov bx,40h
push bx
popf
mov ax,0f000h
mov ds,ax
mov cx,1
rep lodsw
jmp ax

; rep stos ZF=1
rep_stos_z:
mov cx,2
mov ax,4000h
rep stosw
mov ax,1000h
mov ds,ax
jmp word[6]
hlt

rb 04000h-$
; rep stos ZF=0
mov bx,0
push bx
popf
mov cx,4
rep stosw
jcxz repz_cmps_z
hlt

; repz cmps ZF=1, but ZF=0 before cx=0
repz_cmps_z:
mov bx,40h
push bx
popf
mov cx,1234h
mov si,3000h
mov di,0
mov ax,0f000h
mov ds,ax
repz cmpsb

jmp cx

; repz scas ZF=1, but ZF=0 before cx=0
repz_scas:
mov bx,40h
push bx
popf
mov ax,0040h
repz scasw
jmp cx

; repz cmps scas ZF=0, they do only one iteration
repz_cmps_nz:
mov ax,0607h
mov cx,5004h
repz cmpsw
repz scasw
mov bx,40h
push bx
popf
mov si,3000h
mov di,0
; repnz cmps scas ZF=1, they do only one iteration
repnz cmpsw
repnz scasw
jmp cx
hlt

rb 05000h-$
; repnz movs ZF=1 all iterations
repnz_movs:
mov cx,2
repnz movsb
jcxz repnz_lods
hlt

; repnz lods ZF=1 all iterations
repnz_lods:
mov cx,2
repnz lodsb
jcxz repnz_stos
hlt

; repnz stos ZF=1 all iterations
repnz_stos:
mov cx,2
repnz stosb
jcxz repnz_cmps
hlt

; repnz cmps ZF=0, but ZF=1 before cx=0
repnz_cmps:
mov bx,0
push bx
popf
mov cx,06023h
std
mov di,6
mov si,3006h
repnz cmpsw

; repnz scas ZF=0, but ZF=1 before cx=0
mov ax,01000h
mov bx,0
push bx
popf
cld
repnz scasw
jmp cx
hlt

rb 0601bh-$
mov dx,0
mov ds,dx
mov word[4],01234h
hlt

rb 0f003h-$
jmp rep_lods_z

rb 65520-$
mov sp,01000h
mov ss,sp
jmp start

rb 65535-$
db 0ffh
