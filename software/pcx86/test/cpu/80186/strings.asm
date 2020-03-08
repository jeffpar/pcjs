;00: XX XX 34 12

use16
start:
mov cx,0f000h
mov ds,cx
mov es,cx
mov si,01000h
mov di,02001h

cmpsb              ; (1) flags=0x97 (SAPC)
pushf
ret

rb 46h-$
cmpsb              ; (1) flags=0x82 (S)
pushf
ret

rb 082h-$
cmpsb              ; (1) flags=0x812 (OA)
pushf
ret

rb 097h-$
cmpsb              ; (1) flags=0x46 (ZP)
pushf
ret

rb 0812h-$
cmpsw              ; (2)
pushf
ret                ; jump to f000:0883

rb 0883h-$
mov ah,10h
std
lodsb              ; (3)
jmp ax           ; jump to f000:10c2

rb 01000h-$
db 001h,0ffh,0ffh,080h
dw 00002h
db 0c2h

rb 010c2h-$
lodsw              ; (4)
jmp ax

rb 01300h-$
mov word[di],ax
mov es,dx
scasw              ; (8)
jz stor

rb 01350h-$
stor:
mov  al,80h
std
stosb              ; (9)
jmp word [di]

rb 02001h-$
db 002h,0ffh,001h,001h
dw 08001h

rb 08013h-$
mov ax,0d000h
stosw              ; (10)
jmp word [di+2]

rb 080c2h-$
mov ds,cx
movsw              ; (6)
mov ds,dx
jmp word [di+2]

rb 080ffh-$
mov di,2002h
mov es,cx
cld
scasb              ; (7)
lahf
jmp ax

rb 0c200h-$
mov dx,01000h
mov es,dx
mov di,0ffffh
movsb              ; (5) 
mov ds,dx
mov byte[di],0c2h
jmp word[di]

rb 0d000h-$
mov dx,0
mov ds,dx
mov word[2],01234h

hlt

rb 65520-$
jmp start

rb 65535-$
db 0ffh
