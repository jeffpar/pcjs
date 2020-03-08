;00: 00 00 00 24 c0 30 ff 57 6e ff 39 39 ed 89 80 4a
;10: a8 a8 f6 35 00 4f 19 b4 2d e9 XX XX XX XX XX XX
;20: 18 42 00 24 51 44 08 02 40 00 40 08 f7 fd e8 7a
;30: e3 45 7d bb e7 f8 e3 f7 0c cb 3a 12 b7 ed cb a0
;40: 5a 03 01 a2 e1 db 49 65 37 4d c4 5c 4d 49 37 e1
;50: 5a 40 a5 XX XX XX XX XX XX XX XX XX XX XX XX XX
;60: XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX
;70: XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX
;80: XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX
;90: XX XX XX XX XX XX XX XX 93 02 93 02 93 02 93 02
;a0: 82 00 82 00 46 00 02 00 06 00 06 00 06 00 06 00
;b0: 06 00 06 00 02 00 06 00 82 00 82 00 02 00 86 00
;c0: 06 00 06 00 02 00 82 00 86 00 06 00 06 00 86 00
;d0: 02 00 82 00 82 00 86 00 82 00 86 00 82 00 86 00
;e0: 02 00 02 00 06 00 82 00 46 00 02 00 02 00 06 00
;f0: 46 00 02 00 06 00 02 00 02 00 46 00 06 00 06 00

use16
start:

; Some random stuff to start with
mov ax,07659h
mov bx,04bb8h
mov cx,03c84h
mov word[0],01b76h
mov word[2],0240bh

mov sp,256

; Word AND
and bx,ax
pushf
mov word[32],bx
and cx,word[2]
pushf
mov word[34],cx
and word[0],cx
pushf
and ax,04571h
pushf
mov word[36],ax
and bx,027e9h
pushf
mov word[38],bx
and word[2],03549h
pushf

; Byte AND
and ah,al
pushf
mov byte[40],ah
and cl,byte[1]
pushf
mov byte[41],cl
and byte[3],ch
pushf
and al,046h
pushf
mov byte[42],al
and bl,02dh
pushf
mov byte[43],bl
and byte[2],0c6h
pushf

mov ax,005e3h
mov bx,0f877h
mov cx,04ae8h
mov dx,03b69h
mov word[4],030c0h
mov word[6],05775h
mov word[8],0fe66h

; Word OR
or bx,ax
pushf
mov word[44],bx
or cx,word[4]
pushf
mov word[46],cx
or word[6],ax
pushf
or ax,041c3h
pushf
mov word[48],ax
or dx,0b05dh
pushf
mov word[50],dx
or word[8],08d4ch
pushf

; Byte OR
or ah,al
pushf
mov byte[52],ah
or cl,byte[5]
pushf
mov byte[53],cl
or byte[6],ch
pushf
or al,043h
pushf
mov byte[54],al
or bl,057h
pushf
mov byte[55],bl
or byte[7],054h
pushf

mov ax,0d0b4h
mov bx,01bb8h
mov cx,02b03h
mov dx,0c3e6h
mov word[10],03939h
mov word[12],0864bh
mov word[14],08587h

; Word XOR
xor bx,ax
pushf
mov word[56],bx
xor cx,word[10]
pushf
mov word[58],cx
xor word[12],ax
pushf
xor ax,03d03h
pushf
mov word[60],ax
xor dx,0632dh
pushf
mov word[62],dx
xor word[14],0cf07h
pushf

; Byte XOR
xor ah,al
pushf
mov byte[64],ah
xor cl,byte[11]
pushf
mov byte[65],cl
xor byte[12],ch
pushf
xor al,0b6h
pushf
mov byte[66],al
xor bl,0aeh
pushf
mov byte[67],bl
xor byte[13],0dfh
pushf

mov ax,04d37h
mov bx,0dbe1h
mov cx,06549h
mov dx,05cc4h
mov word[16],0a8a8h
mov word[18],035f6h
mov word[20],04f00h

; Word TEST
test bx,ax
pushf
mov word[68],bx
test cx,word[16]
pushf
mov word[70],cx
test word[18],ax
pushf
test ax,0dc6fh
pushf
mov word[72],ax
test dx,03046h
pushf
mov word[74],dx
test word[20],096e4h
pushf

; Byte TEST
test ah,al
pushf
mov byte[76],ah
test cl,byte[15]
pushf
mov byte[77],cl
test byte[16],ch
pushf
test al,0c0h
pushf
mov byte[78],al
test bl,0e0h
pushf
mov byte[79],bl
test byte[17],0bbh
pushf

mov dx,0bfa5h
mov word[22],04be6h
mov word[24],0e9d2h

mov ax,012b1h
push ax
popf

; Word NOT
not dx            ; (49)
pushf
mov word[80],dx
not word[22]           ; (50)
pushf

; Byte NOT
not dl            ; (51)
pushf
mov byte[82],dl
not byte[24]           ; (52)
pushf

hlt


rb 65520-$
jmp start
rb 65535-$
db 0ffh
