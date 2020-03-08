;This code tests all kind of different jumps and movs that exist on the 8086.
;The program ends at address 0xf400C and the result is the number 0x4001 written in address 0. 
; mov: 1 (word), 2 (word), 3 (off, base+index+off), 4, 5 (off), 
;      7 (byte,word), 8 (byte off), 9 (word base), 10 (byte,word), 
;      11 (word off, byte base+index), 12 (imm,special)
; jmp: 1, 2, 3 (reg), 3 (mem base+index+off), 4, 5 (mem base+index+off)

use16
start:
jmp b                   ; (2)  jmp
hlt

rb 14-$
b:
mov bx,0f000h       ; (10) mov word
mov ds,bx           ; (4)  mov
mov ax,word[0fff2h]      ; (2)  mov word
jmp ax                ; (3)  jmp reg
hlt

rb 1290h-$
jmp 0e342h:0ebe0h   ; (4)  jmp
hlt

rb 2000h-$
mov bx,1000h       ; (10) mov word
mov ds,bx           ; (4)  mov

mov ah,0fbh         ; (10) mov byte
mov al,0e1h         ; (10) mov byte
mov word [2501h],ax      ; (1)  mov word

mov word [2600h],1001h  ; (11) mov word
mov ss,word [2600h]      ; (3)  mov

mov [2601h],ss      ; (5)  mov
mov dl,byte [2601h]      ; (8)  mov byte
mov dh,0         ; (10) mov byte
mov di,dx           ; (7)  mov word

mov bp,2506h       ; (10) mov word

jmp near[bp+di-22]       ; (3)  jmp mem
hlt                     ; m[0x12501] = 0xffe1

rb 3001h-$
mov dx,0f100h
mov ax,2536h
out dx,ax
db 0c7h,0c0h        ; (12) movw $0x4001, %ax
dw 4001h           ; [not in a default codification]
mov bx,2501h
mov [bx],ax         ; (9)  mov word
mov di,2
mov byte [bx+di],0   ; (11) mov byte
mov ch,4
mov cl,ch           ; (7)  mov byte
mov ch,0
mov si,cx
mov byte [bx+si-1],0f0h
mov si,3
jmp far[bp+si-24]      ; (5)  jmp mem
hlt

rb 4001h-$
mov ax,word [bx+si-3]
mov dx,0
mov ds,dx
mov word [0],ax
hlt

rb 65520-$
jmp start               ; (1)  jmp
dw 1290h

rb 65534-$
dw 0ffffh

