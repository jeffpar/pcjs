;1.  clc
;2. cld
;3. cli
;4. cmc
;5. hlt
;6. nop
;7. stc
;8. std
;9. sti
;Memory contents at the end should be:
;00000h: d6 08 03 06


use16
org 0
start:
mov ax,1000h
mov ss,ax
mov sp,1000h

mov cx,0feffh
push cx
popf

clc                ; (1)
cld                ; (2)
cli                ; (3)

nop                ; (6)

pushf
pop ax          ; ax = 08d6h

mov dx,1
push dx
popf

cmc                ; (4)
stc                ; (7)
std                ; (8)
sti                ; (9)

pushf
pop   bx          ; bx = 0603h

mov cx,0
mov ds,cx
mov word [0],ax
mov word [2],bx

hlt                ;(5)

rb 65520-$
jmp start

rb 65535-$
db  0ffh
