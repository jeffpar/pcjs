use16
start:
mov sp,208

; Exception 0 handler
mov word[0],01000h
mov word[2],0f000h

mov bp,208

; div word tests
; easy test
mov dx,00h
mov ax,014h
mov bx,05h

mov word[bp],02h
div bx
add bp,02h

mov word[128],ax
mov word[130],bx
mov word[4],dx
pushf


mov dx,0a320h
mov ax,0c3dah
mov word[6],0ffffh

mov word[bp],04h
div word[6]
add bp,02h

mov word[8],ax
mov word[10],dx
pushf


mov dx,0ffffh
mov ax,0ffffh
mov cx,01h

mov word[bp],02h
div cx
add bp,02h

mov word[12],ax
mov word[14],cx
mov word[16],dx
pushf


mov dx,0ffffh
mov ax,0ffffh
mov word[18],0ffffh

mov word[bp],04h
div word[18]
add bp,02h

mov word[20],ax
mov word[22],dx
pushf


mov dx,0fbb4h
mov ax,0c3dah
mov cx,0ae8eh

mov word[bp],02h
div cx
add bp,02h

mov word[24],ax
mov word[26],cx
mov word[28],dx
pushf


mov dx,025c9h
mov ax,0f110h

mov word[bp],02h
div ax
add bp,02h

mov word[30],ax
mov word[32],dx
pushf


; div byte tests
; easy test
mov ax,014h
mov bx,05h

mov word[bp],02h
div bl
add bp,02h

mov word[34],ax
mov word[36],bx
mov word[38],dx
pushf

mov dx,0a320h
mov ax,0c3dah
mov word[40],0ffh

mov word[bp],04h
div byte[40]
add bp,02h

mov word[42],ax
mov word[44],dx
pushf

mov ax,0ffffh
mov dh,01h

mov word[bp],02h
div dh
add bp,02h

mov word[46],ax
mov word[48],dx
pushf

mov ax,0ffffh
mov word[50],0ffffh

mov word[bp],04h
div byte[51]
add bp,02h

mov word[52],ax
mov word[54],dx
pushf

mov ax,0008ah
mov cx,0ae8eh

mov word[bp],02h
div cl
add bp,02h

mov word[56],ax
mov word[58],cx
pushf

mov dx,00669h
mov ax,089f3h

mov word[bp],02h
div al
add bp,02h

mov word[60],ax
mov word[62],dx
pushf

; idiv word tests
; easy test
mov dx,00h
mov ax,014h
mov bx,0fah

mov word[bp],02h
idiv bx
add bp,02h

mov word[64],ax
mov word[66],bx
mov word[68],dx
pushf


mov dx,0a320h
mov ax,0c3dah
mov word[70],0ffffh

mov word[bp],04h
idiv word[70]
add bp,02h

mov word[72],ax
mov word[74],dx
pushf


mov dx,0ffffh
mov ax,0ffffh
mov cx,01h

mov word[bp],02h
idiv cx
add bp,02h

mov word[76],ax
mov word[78],cx
mov word[80],dx
pushf


mov dx,0ffffh
mov ax,0ffffh
mov word[82],0ffffh

mov word[bp],04h
idiv word[82]
add bp,02h

mov word[84],ax
mov word[86],dx
pushf


mov dx,0fbb4h
mov ax,0c3dah
mov cx,0ae8eh

mov word[bp],02h
idiv cx
add bp,02h

mov word[88],ax
mov word[90],cx
mov word[92],dx
pushf


mov dx,025c9h
mov ax,0f110h

mov word[bp],02h
idiv ax
add bp,02h

mov word[94],ax
mov word[96],dx
pushf

; idiv byte tests
; easy test
mov ax,014h
mov bx,05h

mov word[bp],02h
idiv bl
add bp,02h

mov word[98],ax
mov word[100],bx
mov word[102],dx
pushf


mov dx,0a320h
mov ax,0c3dah
mov word[104],0ffh

mov word[bp],04h
idiv byte[104]
add bp,02h

mov word[106],ax
mov word[108],dx
pushf


mov ax,0ffffh
mov dh,01h

mov word[bp],02h
idiv dh
add bp,02h

mov word[110],ax
mov word[112],dx
pushf


mov ax,0ffffh
mov word[114],0ffffh

mov word[bp],04h
idiv byte[115]
add bp,02h

mov word[116],ax
mov word[118],dx
pushf


mov ax,0008ah
mov cx,0ae8eh

mov word[bp],02h
idiv cl
add bp,02h

mov word[120],ax
mov word[122],cx
pushf


mov dx,00669h
mov ax,089f3h

mov word[bp],02h
idiv al
add bp,02h

mov word[124],ax
mov word[126],dx
pushf


; AAM tests
mov ax,0ffffh

mov word[bp],02h
aam 0
add bp,02h
mov word[132],ax
pushf

mov word[bp],02h
aam 1
add bp,02h
mov word[134],ax
pushf

mov ax,0ffffh
mov word[bp],02h
aam
add bp,02h
mov word[136],ax
pushf

mov ax,0ff00h
mov word[bp],02h
aam 0
add bp,02h
mov word[138],ax
pushf

mov word[bp],02h
aam 1
add bp,02h
mov word[140],ax
pushf

mov ax,03ffbh
mov word[bp],02h
aam
add bp,02h
mov word[142],ax
pushf

hlt

; Exception handler (int 0)
rb 01000h-$
push ax
push di
mov ax,word[bp]
mov si,sp
add si,4
mov si,word[si]
mov word[bp],si
add si,ax
mov di,sp
add di,4
mov word[di],si
pop di
pop ax
iret

rb 65520-$
jmp start
rb 65535-$
db 0ffh
