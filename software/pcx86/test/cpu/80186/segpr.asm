;00: 00 11 00 f0 00 11 00 f0 1c 00 45 23 78 00 5f 00
;10: 07 00 00 00 00 12 01 ff ff 80 02 00 XX XX XX XX
;20: XX XX XX XX XX XX 97 00 79 00 65 00 00 f0 02 00

use16
start:
mov bx,0f100h
mov es,bx

mov bx,word[es:0]
mov ax,word[es:2]
mov word[2],ax
mov sp,2
db 26h
push bx

les dx, [es:0]
mov word[4],dx
mov dx,es
mov word[6],dx

mov di,5
lea si,word[cs:bp+di+23]
mov word[8],si

mov bx,5
mov ax,5
mov word[10],2345h
mov dx,0f100h
mov es,dx
db 26h
xlatb
mov word[12],ax

; inc with segment
mov ax,1
mov ss,ax
mov word[16],6
inc word[ss:0]

; div with interrupt
mov sp,32
mov word[18],0
db 036h
db 0f3h
div word[2]
sub sp,6

mov word[20],1200h
mov bx,5
mov si,3
; repz prefix (do not affect)
db 0f3h
call word [ss:bx+si-4]

hlt

rb 1000h-$
dw 1100h
dw 0f000h

rb 100ah-$
dw 5678h

rb 1100h-$
mov si,sp
mov si,word[ss:si]
mov word[14],si
add si,6
mov di,sp
mov word[ss:di],si
iret

rb 1200h-$
mov cx,0f120h
mov es,cx
mov si,0200h
mov di,0e01h

db 26h
cmpsb
pushf

mov ax,1
mov es,ax
mov di,6
mov si,1400h
mov cx,6
; Two prefixes
db 0f3h
db 2Eh
movsb
hlt

rb 1400h-$
db 001h,0ffh,0ffh,080h
dw 00002h
db 0c2h

rb 2001h-$
db 002h,0ffh,001h,001h
dw 08001h

rb 65520-$
jmp start
rb 65535-$
db 0ffh
