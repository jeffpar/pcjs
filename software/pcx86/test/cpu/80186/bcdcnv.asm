use16
start:

mov bx,1
mov cx,0
mov sp,144

; aaa
mov ax,0000ah
aaa                ; (1) adjusted
mov word[0],ax
pushf

mov ax,0fff9h
aaa                ; (2) adjusted by AF
mov word[2],ax
pushf

push bx
popf
mov ax,0fff9h
aaa                ; (3) not adjusted
mov word[4],ax
pushf

mov ax,05d50h
aaa                ; (4) aaa random
mov word[6],ax
pushf

mov ax,04726h
aaa                ; (5) aaa random
mov word[8],ax
pushf

; aas
mov ax,0000ah
aas                ; (6) adjusted
mov word[10],ax
pushf

mov ax,0fff9h
aas                ; (7) adjusted by AF
mov word[12],ax
pushf

push bx
popf
mov ax,0fff9h
aas                ; (8) not adjusted
mov word[14],ax
pushf

mov ax,0dcc0h
aas                ; (9) aas random
mov word[16],ax
pushf

mov ax,05ffbh
aas                ; (10) aas random
mov word[18],ax
pushf

; daa
mov ax,000ach
daa                ; (11) daa, adj 1st & 3rd cond
mov word[20],ax
pushf

mov ax,0fff9h
daa
mov word[22],ax		; (12) daa, adj 2nd & 3rd cond
pushf

push bx
popf               ; carry set
mov ax,0fff8h
daa                ; (13) daa, adj 4th cond
mov word[24],ax
pushf

push cx
popf               ; zero flags
mov ax,0ff8bh
daa                ; (14) daa, adj 1st cond
mov word[26],ax
pushf

push cx
popf
mov ax,00082h
daa                ; (15) daa, not adjusted
mov word[28],ax
pushf

mov ax,0cd3ch
daa                ; (16) daa, random
mov word[30],ax
pushf

mov ax,03f00h
daa                ; (17) daa, random
mov word[32],ax
pushf

; das
mov ax,000ach
das                ; (18) das, adj 1st & 3rd cond
mov word[34],ax
pushf

mov ax,0fff9h
das
mov word[36],ax		; (19) das, adj 2nd & 3rd cond
pushf

push bx
popf               ; carry set
mov ax,0fff8h
das                ; (20) das, adj 4th cond
mov word[38],ax
pushf

push cx
popf               ; zero flags
mov ax,0ff8bh
das                ; (21) das, adj 1st cond
mov word[40],ax
pushf

push cx
popf
mov ax,00082h
das                ; (22) das, not adjusted
mov word[42],ax
pushf

mov ax,0059ah
das                ; (23) das, random
mov word[44],ax
pushf

mov ax,054f6h
das                ; (24) das, random
mov word[46],ax
pushf

; cbw
mov ax,0ff7fh
cbw                ; (25) cbw, positive
mov word[48],ax
mov word[50],dx
pushf

mov ax,00080h
cbw                ; (26) cbw, negative
mov word[52],ax
mov word[54],dx
pushf

mov ax,0f1edh
cbw                ; (27) cbw, random
mov word[56],ax
mov word[58],dx
pushf

; cwd
mov ax,08000h
cwd                ; (28) cwd, negative
mov word[60],ax
mov word[62],dx
pushf

mov ax,07fffh
cwd                ; (29) cwd, positive
mov word[64],ax
mov word[66],dx
pushf

mov ax,043f1h
cwd                ; (30) cwd, random
mov word[68],ax
mov word[70],dx
pushf

hlt

rb 65520-$
jmp start

rb 65535-$
db 0ffh
