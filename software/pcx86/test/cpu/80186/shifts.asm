;00: 70 a6 e0 31 c0 66 80 64 5d 0f 02 74 d4 e5 ff 6e
;10: 55 5d 03 34 26 1d 00 8d XX XX XX XX XX XX XX XX
;20: 8a dd a8 b1 00 00 00 a8 93 84 80 95 b9 fd b9 df
;30: ff ff fd fe 88 33 ff 93 d0 3d e8 54 00 00 4e 05
;40: 28 0b 00 04 46 00 46 00 07 00 02 00 06 00 07 00
;50: 46 00 06 08 06 08 03 00 87 00 86 00 82 00 06 00
;60: 03 00 83 00 87 00 03 00 03 00 82 00 83 00 83 00
;70: 06 00 86 08 83 00 87 00 46 00 82 08 82 08 82 08


use16
start:

; sal/shl word operations
mov ax,06ec5h
mov bx,0b1a8h
mov word[0],05338h
mov word[2],031feh

mov sp,128

sal  ax,1        ; (1)
pushf
mov word[32],ax

shl word[0],1       ; (2)
pushf

mov cx,0100h
shl bx,cl
pushf
mov word[34],bx

mov cx,0ffffh
mov dx,bx
sal dx,cl
pushf
mov word[36],dx

mov cl,08h
sal bx,cl
pushf
mov word[38],bx

mov cl,04h
sal byte[2],cl
pushf

; sal/shl byte operations
mov dx,0956fh
mov ax,04293h
mov word[4],033c0h
mov word[6],064ffh

shl  ah,1        ; (5)
pushf
mov word[40],ax

sal byte[5],1        ; (6)
pushf

mov cl,07h
shl dl,cl
pushf
mov word[42],dx

sal byte[6],cl
pushf

; sar word operations
mov ax,0fb72h
mov bx,0dfb9h
mov word[8],01ebbh
mov word[10],0742fh

sar  ax,1        ; (9)
pushf
mov word[44],ax

sar word[8],1        ; (10)
pushf

mov cx,0100h
sar bx,cl
pushf
mov word[46],bx

mov cx,0ffffh
mov dx,bx
sar dx,cl
pushf
mov word[48],dx

mov cl,05h
sar bx,cl
pushf
mov word[50],bx

mov cl,04h
sar byte[10],cl
pushf

; sar byte operations
mov dx,093b8h
mov ax,06688h
mov word[12],0cad4h
mov word[14],06ec9h

sar  ah,1        ; (13)
pushf
mov word[52],ax

sar byte[13],1       ; (14)
pushf

mov cl,07h
sar dl,cl
pushf
mov word[54],dx

sar byte[14],cl
pushf

; shr word operations
mov ax,07ba1h
mov bx,054e8h
mov word[16],0baaah
mov word[18],03431h

shr  ax,1        ; (17)
pushf
mov word[56],ax

shr word[16],1       ; (18)
pushf

mov cx,0100h
shr bx,cl
pushf
mov word[58],bx

mov cx,0ffffh
mov dx,bx
shr dx,cl
pushf
mov word[60],dx

mov cl,04h
shr bx,cl
pushf
mov word[62],bx

mov cl,04h
shr byte[18],cl
pushf

; shr byte operations
mov dx,00410h
mov ax,01628h
mov word[20],03b26h
mov word[22],08d0dh

shr  ah,1        ; (21)
pushf
mov word[64],ax

shr byte[21],1       ; (22)
pushf

mov cl,07h
shr dl,cl
pushf
mov word[66],dx

shr byte[22],cl
pushf

hlt

rb 65520-$
jmp start
rb 65535-$
db 0ffh
