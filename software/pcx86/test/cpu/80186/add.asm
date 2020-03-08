;00: ff ff 00 00 fe ff ff ff 02 00 03 00 00 80 ff 7f
;10: ad b2 f5 93 45 f2 00 ff fe 03 80 7f 03 80 7f 80
;20: 00 a6 2c ff ff 01 00 ff ff ff ff 02 00 04 00 00
;30: 80 ff 7f f9 fb 61 bf 46 7f 01 ff ff 04 80 7f 04
;40: 80 7f 80 00 b9 8d 00 00 00 80 13 74 80 00 b6 XX
;50: XX XX XX XX XX XX XX XX XX XX XX XX 83 00 57 00
;60: 93 08 03 00 97 08 57 00 87 00 03 08 92 08 02 00
;70: 97 00 13 00 03 00 83 00 86 00 07 08 96 08 02 00
;80: 97 00 13 00 03 08 03 08 92 08 06 00 93 00 57 00
;90: 82 00 86 00 83 00 07 08 96 08 06 00 93 00 57 00

use16
start:

mov sp,160

; add word tests
mov ax,0ffffh
mov bx,00001h
add bx,ax		; word[1] add reg16, reg16
mov word[0],ax
mov word[2],bx
pushf

mov dx,0ffffh
mov word[4],0ffffh
add word[4],dx		; (2) add reg16, mem16
mov word[6],dx
pushf

mov cx,00001h
mov word[8],00002h
add cx,word[8]		; (3) add mem16, reg16
mov word[10],cx
pushf

mov ax,00001h
add ax,07fffh		; word[4] add imm16, ac16
mov word[12],ax
pushf

mov bp,08000h
db 083h,0c5h,0ffh ; (5) addw imm8, reg16
mov word[14],bp
pushf

mov si,0c783h
add si,0eb2ah		; word[6] add imm16, reg16
mov word[16],si
pushf

mov word[18],08960h
add word[18],00a95h		; (7) add imm16, mem16
pushf

mov word[20],0f1e1h
dw 00683h, 00014h ; (8) addw imm8, mem16
db 064h
pushf

; add byte tests
mov byte[22],001h
add byte[22],0ffh		; (9) add imm8, mem8
pushf

mov dh,0ffh
add dh,0ffh		; byte[10] add imm8, reg8
mov word[23],dx
pushf

mov al,001h
add al,002h		; byte[11] add imm8, acum8
mov word[25],ax
pushf

mov byte[27],07fh
mov ch,001h
add ch,byte[27]		; (12) add mem8, reg8
mov word[28],cx
pushf

mov bl,080h
mov byte[30],0ffh
add byte[30],bl		; (13) add reg8, mem8
mov word[31],bx
pushf

mov al,0a6h
mov ah,086h
add ah,al		; byte[14] add reg8, reg8
mov word[33],ax
pushf

; adc word tests
mov ax,0ffffh
mov bx,00001h
adc bx,ax		; word[15] adc reg16, reg16
mov word[35],ax
mov word[37],bx
pushf

mov dx,0ffffh
mov word[39],0ffffh
adc word[39],dx		; (16) adc reg16, mem16
mov word[41],dx
pushf

mov cx,00001h
mov word[43],00002h
adc cx,word[43]		; (17) adc mem16, reg16
mov word[45],cx
pushf

mov ax,00001h
adc ax,07fffh		; word[18] adc imm16, ac16
mov word[47],ax
pushf

mov bp,08000h
db 083h,0d5h,0ffh ; (19) adcw imm8, reg16
mov word[49],bp
pushf

mov si,077d3h
adc si,08425h		; word[20] adc imm16, reg16
mov word[51],si
pushf

mov word[53],0eba0h
adc word[53],0d3c1h		; (21) adc imm16, mem16
pushf

mov word[55],07f50h
dw 01683h, 00037h
db 0f5h
pushf

; adc byte tests
mov byte[57],001h
adc byte[57],0ffh
pushf

mov dh,0ffh
adc dh,0ffh
mov word[58],dx
pushf

mov al,001h
adc al,002h
mov word[60],ax
pushf

mov byte[62],07fh
mov ch,001h
adc ch,byte[62]
mov word[63],cx
pushf

mov bl,080h
mov byte[65],0ffh
adc byte[65],bl
mov word[66],bx
pushf

mov al,0b9h
mov ah,0d3h
adc ah,al
mov word[68],ax
pushf

; inc word tests
mov di,0ffffh
inc di
mov word[70],di
pushf

mov bp,07fffh
db 0ffh, 0c5h
mov word[72],bp
pushf

mov word[74],07412h
inc word[74]
pushf

; inc byte tests
mov dl,07fh
inc dl
mov word[76],dx
pushf

mov byte[77],0ffh
inc byte[77]
pushf

mov byte[78],0b5h
inc byte[78]
pushf
hlt

rb 65520-$
jmp start
rb 65535-$
db 0ffh
