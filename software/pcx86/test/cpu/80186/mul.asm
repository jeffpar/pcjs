use16
start:

mov sp,192

; mul word
mov bx,00003h
mov ax,00007h
mov dx,0ffffh
mul bx

mov word[0],ax
mov word[2],dx
pushf

mov dx,0a320h
mov ax,0ffffh
mul dx
mov word[4],ax
mov word[6],dx
pushf

mov ax,0ffffh
mov word[8],01h
mul word[8]
mov word[10],ax
mov word[12],dx
pushf

mov ax,0ffffh
mov word[14],0ffffh
mul word[14]
mov word[16],ax
mov word[18],dx
pushf

mov ax,046dbh
mov bp,00000h
mul bp
mov word[20],bp
mov word[22],ax
mov word[24],dx
pushf

mov ax,046dbh
mov si,0eeebh
mul si
mov word[26],si
mov word[28],ax
mov word[30],dx
pushf

; mul byte
mov bl,014h
mov ax,0ff07h
mov dx,0ffffh
mul bl

mov word[32],ax
mov word[34],dx
pushf

mov ch,024h
mov ax,000ffh
mul ch
mov word[36],ax
mov word[38],dx
pushf

mov ax,0ffh
mov byte[40],01h
mul byte[40]
mov word[41],ax
mov word[43],dx
pushf

mov ax,0ffffh
mov byte[45],0ffh
mul byte[45]
mov word[46],ax
mov word[46],dx
pushf

mov ax,0c5h
mov dx,000h
mul dl
mov word[48],dx
mov word[50],ax
pushf

mov al,0b5h
mov dh,0f9h
mul dh
mov word[52],si
mov word[54],ax
mov word[56],dx
pushf

; imul word
mov bx,00003h
mov ax,00007h
mov dx,0ffffh
imul bx

mov word[60],ax
mov word[62],dx
pushf

mov dx,0a320h
mov ax,0ffffh
imul dx
mov word[64],ax
mov word[66],dx
pushf

mov ax,0ffffh
mov word[68],01h
imul word[68]
mov word[70],ax
mov word[72],dx
pushf

mov ax,0ffffh
mov word[74],0ffffh
imul word[74]
mov word[76],ax
mov word[78],dx
pushf

mov ax,046dbh
mov bp,00000h
imul bp
mov word[80],bp
mov word[82],ax
mov word[84],dx
pushf

mov ax,046dbh
mov si,0eeebh
imul si
mov word[86],si
mov word[88],ax
mov word[90],dx
pushf

; imul byte
mov bl,014h
mov ax,0ff07h
mov dx,0ffffh
imul bl

mov word[92],ax
mov word[94],dx
pushf

mov ch,024h
mov ax,000ffh
imul ch
mov word[96],ax
mov word[98],dx
pushf

mov ax,0ffh
mov byte[100],01h
imul byte[100]
mov word[101],ax
mov word[103],dx
pushf

mov ax,0ffffh
mov byte[105],0ffh
imul byte[105]
mov word[106],ax
mov word[106],dx
pushf

mov ax,0c5h
mov dx,000h
imul dl
mov word[108],dx
mov word[110],ax
pushf

mov al,0b5h
mov dh,0f9h
imul dh
mov word[112],si
mov word[114],ax
mov word[116],dx
pushf

; aad tests
mov ax,0ff00h
aad
mov word[118],ax
pushf

mov ax,0ffffh
aad 012h
mov word[120],ax
pushf

mov ax,000ffh
aad 0ffh
mov word[122],ax
pushf

mov ax,0532dh
aad 039h
mov word[124],ax
pushf

hlt

rb 65520-$
jmp start

rb 65535-$
db 0ffh
