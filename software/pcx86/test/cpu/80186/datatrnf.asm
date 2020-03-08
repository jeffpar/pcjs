;00h: c7 XX c7 a5 78 56 34 12 f1 8c cd ab 2d 8b d3 0c
;10h: f1 8c cd ab ff ff f1 8c f1 8c XX XX XX XX XX XX
;20h: c7 87


use16

start:
mov ah,0edh
sahf                    ; (1)
lahf                    ; (2) Now %ah must have 0xc7
mov byte[0],ah
mov al,ah
;out 0b7h,al         ; (19)
mov ax,0b7h
mov dx,ax
mov ah,0a5h
;in  al,dx           ; (24)
mov al,0c7h
mov word[2],ax
sahf
lahf                ; Now %ax must have 0x87c7
mov word[32],ax

;out dx,ax           ; (22)
mov ax,0f752h
mov bx,ax
;in  ax,dx           ; (26)
mov ax,087c7h
xchg ax,bx       ; (16)
mov ds,ax
lds  si,[bx+781]  ; (3)  %ds=0x5678 and %si=0x1234
mov ax,0
mov bx,ds
mov ds,ax
mov word[4],bx
mov word[6],si
mov ds,bx

mov bx,-1

mov ax,1000h
;out 0b7h,ax         ; (21)

mov ax,5798h
mov ss,ax
mov sp,9
mov cx,0abcdh
push cx                ; (10)
mov cx,08cf1h
mov es,cx
push es                ; (11)
popf                    ; (9)
les  di,[bx+si-46]  ; (5) %di=0x8cf1, %es=%0xabcd
lea  si,[bp+di-452] ; (4) %si=0x8b2d
pushf                   ; (13)
mov ax,0
mov ds,ax
mov word[8],di
mov ax,es
mov word[10],ax
mov word[12],si
;in ax,0b7h         ; (25)
mov ax,1000h
mov ds,ax
pop  word [si+1]             ; (8)
xchg di,[bx+si+2]    ; (15) %di=0x0cd3
push word [bx+si+2]         ; (12)
pop  es                ; (7)  %es=0x8cf1
mov dx,es


mov ax,ds
mov cx,0
mov ds,cx
mov word[14],di
mov word[16],dx
mov ds,ax
pop  dx                ; (6)
push dx
db 08fh,0c1h         ; (6) pop %cx (non-standard)
xchg cx,bx           ; (14) %bx=0xabcd, %cx=0xffff

mov ax,ds
mov dx,0
mov ds,dx
mov word[18],bx
mov word[20],cx
mov ds,ax
mov [bx+di],es
mov bx,0b800h
mov ax,0a0a1h
xlatb                    ; (18) %al=0x8c
xchg ah,al           ; (17)
xlatb                    ; %ax=0x8cf1
mov dx,0
mov ds,dx
mov word[22],ax
mov dx,0b7h
;out dx,al           ; (20)
mov al,0ffh
;in al,0b7h         ; (23) %ax=0x8cf1
mov al,0f1h
mov word[24],ax
hlt

rb 65520-$
jmp start

rb 65524-$
dw 01234h
dw 05678h

rb 65535-$
db 0ffh
