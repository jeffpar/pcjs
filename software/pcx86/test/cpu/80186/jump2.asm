;00: f0 2f

use16
start:
mov bx,0f000h
mov ds,bx
mov ax,01290h

mov cx,5
again:
push cx
loop again              ; (6)

call ax               ; (2)
ret                     ; (9)

rb 01290h-$
ag2:
mov cx,0ffffh
loope ag2               ; (7) branch not taken
mov dx,64
push dx
popf
loope cont              ; (7) branch taken
hlt
cont:
call 0e342h:0ebe0h  ; (4)
jcxz cont               ; (13) branch not taken
mov cx,0
jcxz exit               ; (13) branch taken
hlt
exit:
ret 10                 ; (10)

rb 2000h-$
call word [03000h]          ; (3)
mov dx,0
push dx
popf
hang:
mov cx,1
loopnz hang             ; (8) branch not taken
loopne cont1            ; (8) branch taken
hlt
cont1:
retf                   ; (11)

rb 03000h-$
dw 0fde0h
dw 04000h
dw 0f000h

rb 03200h-$
mov bx,02ff0h
mov si,10h
push dx
call far [bx+si+2]       ; (5)
ret

rb 04000h-$
retf 2                 ; (12)

rb 65520-$
mov sp,1000h
mov ss,sp
call start              ; (1)
mov ds,cx
mov word[0],bx
hlt

rb 65535-$
db 0ffh
