---
layout: page
title: "PC-SIG Diskette Library (Disk #1807)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1807/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1807"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BOOK MEMO DISPLAY"

    BOOK MEMO DISPLAY takes any ASCII text file and turns it into a computer
    book.  Access any chapter, and any page in that chapter from the
    computer index.  No more scrolling through long documents to find the
    section you want.
    
    You provide the text file, this program converts it into a new file that
    is divided by chapters and pages.  It also creates an index display that
    lists these chapters.  When the index is displayed you can directly
    access any chapter with a single keystroke.  You can display successive
    pages within a chapter with another keystroke.  Move forward or backward
    through the pages, or go back to the index to change chapters.
    
    To make your own "book" you will need a wordprocessor that makes
    ASCII files (most do).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BOOK.ASM

{% raw %}
```
data           segment     public 
fhandle        dw      ? 
ndx            dw      ? 
pg             dw      ? 
ddh            dw      ? 
ddl            dw      ? 
data           ends 
main           proc    near 
               call    curpos          ;clear screen 
               call    init            ;check dos, print title
               call    rdfn            ;read file name 
               call    openit          ;open file   
               call    ptbuf           ;get chapter index 
               call    curpos          ;set cursor position 
               call    menu            ;index options 
               endp    
rdfn           proc    near            ;read file name 
               cld                     ;positive increment 
               mov     si, 081h        ;initial offset F.N. 
rdl1:          lodsb                   ;get character 
               cmp     al, 0dh         ;is it CR ? 
               je      rdlo            ;if yes print msg. 
               mov     di, 0162h 
               mov     cx, 05h 
               repne   scasb 
               cmp     al, 020h        ;count blank spaces 
               je      rdl1 
               mov     dx,si           ;true offset F.N. 
               dec     dx 
rdl2:          lodsb                   ;get character 
               cmp     al, 0dh         ;is it CR ? 
               je      rdl3            ;done if yes 
               jne     rdl2            ;get another if no 
rdl3:          mov     b[si-1], 00h 
               jmp     rdl4 
rdlo:          mov     ah, 09h         ;print msg 
               mov     dx, offset rdlmsg 
               int     21h 
               int     20h 
rdl4:          ret 
               endp 
rdlmsg:        db      'Syntax:    BOOK [file_path]FILE_NAME ',0dh,0ah,'$' 
curpos         proc    near 
               push    dx              ; 
               mov     ax, 0200h       ;position cursor 
               mov     bx, 0000h       ; 
               mov     dx, 0000h       ; 
               int     10h             ; 
               mov     cx,0000h        ;blank screen 
               mov     dx, 184fh       ; 
               mov     bh, 07h         ; 
               mov     ax, 0600h       ; 
               int     10h             ; 
               pop     dx              ; 
               ret 
               endp 
init           proc    near            ;initialization routine    
               mov     ah, 30h         ;what dos are we under?    
               int     21H    
               cmp     al,2            ;dos 2.0 or over?    
               jae     a1              ;yes, skip    
               mov     ah, 09h         ;no, bitch    
               mov     dx, offset baddos   
               int     21H    
               int     20h             ;and exit    
a1:            call    curpos          ;blank and position 
               mov     ah, 09h         ;send title message    
               mov     dx, offset title_msg1   
               int     21H 
               call    tdelay          ;time delay 
               ret 
baddos:        db      0dh,0ah,'This program requires DOS 2.0!',0dh,0ah,0dh,0ah,'$'
title_msg1:    db      0dh,0ah,'Book    version 1.0  Copyright (c) 1989 ',0dh,0ah,
               db      0dh,0ah,'If you find this program useful or interesting, please  ' 
               db      0dh,0ah,'send a minimum contribution of Seven Dollars to: ',0dh,0ah, 
               db      0dh,0ah,'Robert Wallingford, 2338 N. McVicker Ave., Chicago, IL 60639',0dh,0ah,
               db      0dh,0ah,'For more information, exit and type BOOK HOW2DOIT.FIL <ENTER>',0dh,0ah,0dh,0ah,'$' 
               endp   
tdelay         proc    near            ;time delay 
               mov     cx, 0a0h        ;time delay 
td1:           push    cx 
               mov     ah, 0h 
               int     1ah 
td2:           push    dx 
               mov     ah, 0h 
               int     1ah 
               pop     bx 
               cmp     bx, dx 
               je      td2 
               pop     cx 
               loop    td1 
               ret 
               endp 
openit         proc    near            ;Open file   
               mov     ax, 3d00h   
               int     21h    
               jc      fail_end   
               mov     fhandle, ax     ;save fhandle 
               jmp     open_end   
fail_end:      mov     ah, 09h         ;fail exit 
               mov     dx, offset fnfmsg 
               int     21h 
               int     20h 
open_end:      ret    
fnfmsg:        db      'File not found   $' 
               endp    
closeit        proc    near            ;close file   
               mov     ax, 3e00h   
               mov     bx, fhandle 
               int     21h    
               jc      ffail_end   
               jmp     close_end  
ffail_end:     int     20h             ;fail exit 
close_end:     ret  
               endp    
fpoint         proc    near            ;set file pointer 
               mov     ax, 4200h       ;using data from 
               mov     bx, fhandle     ;first part of file 
               mov     cx, ddh 
               mov     dx, ddl 
               int     21h 
               jc      err 
               ret 
err:           int     20h             ;fail exit 
               endp 
ptbuf          proc    near            ;move file pointer 
               mov     ddh, 0000h      ;information from 
               mov     ddl, 0000h      ;file to buffer 
               call    fpoint 
               mov     ah, 3fh 
               mov     cx, 0006h 
               mov     dx, offset(1ef0h) 
               int     21h             ;get index length 
               mov     bp, 1ef0h 
               mov     bx, [bp] 
               mov     ndx, bx         ;store index length 
               mov     dx, [bp+2] 
               mov     cx, [bp+4] 
               cmp     dl, 'B' 
               jne     stop            ;is this file 
               cmp     dh, 'O'         ;a 'BOOK' file? 
               jne     stop            ;if not, exit 
               cmp     cl, 'O' 
               jne     stop 
               cmp     ch, 'K' 
               je      ok 
stop:          mov     ah, 09h         ;print password msg 
               mov     dx, offset pswd 
               int     21h 
               int     20h             ;and exit 
ok:            mov     ddl, 0000h 
               mov     ddh, 0000h 
               call    fpoint          ;zero pointer again 
               mov     ah, 3fh 
               mov     cx, ndx         ;pointer buffer length 
               mov     dx, offset(1ef0h) ;and location 
               int     21h             ;fill index buffer 
               ret 
pswd:          db      'This is not a BOOK file.  ',0dh,0ah,'$' 
               endp 
cbu            proc    near            ;count display and 
               mov     bx, 1fffh       ;back up pointer 
cbu1:          add     bx, 0001h 
               mov     al, [bx] 
               cmp     bx, 27cfh 
               jz      cbu3 
               cmp     al, '$' 
               jz      cbu2            ;out loop if '$' 
               jmp     cbu1            ;loop back 
cbu2:          mov     ax, bx 
               add     ax, 0003h       ;for $ CR LF combination 
               mov     bx, 2800h 
               add     bx, pg 
               add     bx, pg          ;address page size 
               sub     ax, 2000h 
               mov     [bx], ax        ;store page size 
               sub     ax, [27ddh] 
               mov     dx, ax          ;desired displacement 
               mov     cx, 0ffffh 
               mov     bx, fhandle 
               mov     ax, 4201h 
               int     21h 
               ret 
cbu3:          mov     bx, 2800h 
               add     bx, pg 
               add     bx, pg 
               mov     ax, 07d2h       ;store page size 
               mov     [bx], ax 
               ret 
               endp 
menu           proc    near            ;get menu 
mu0:           mov     bp, 1ef6h       ;menu address 
               push    bx 
               mov     bx, [bp] 
               mov     pg, bx 
               mov     bx, [bp+2] 
               mov     ddh, bx 
               mov     bx, [bp+4] 
               mov     ddl, bx 
               pop     bx 
               call    fpoint          ;from pointers 
               mov     ah, 3fh         ;read menu 
               mov     bx, fhandle 
               mov     cx, 07d2h       ;menu length 
               mov     dx, offset(2000h) ;to buffer 
               int     21h 
               or      ax, ax          ;stop if empty 
               jz      stp 
               jc      stp 
               jmp     goo 
stp:           ret                     ;empty exit 
goo:           call    curpos          ;cls & set cursor 
               mov     ah, 09h         ;display 
               int     21h 
               mov     pg, 0000h 
               call    cbu 
mu1:           mov     ax, 0000h       ;wait for character 
               int     16h 
               or      al, al 
               jz      mu1             ;extended code? 
               cmp     al, 'e'         ;exit on e 
               jz      donemp 
               cmp     al, 'E'         ;exit on E 
               jz      donemp 
               cmp     al, '0' 
               jb      mu1             ;return if <'0' 
               cmp     al, '9' 
               jbe     muu             ;go if digit 
               cmp     al, 'A' 
               jb      mu1             ;return if <'A' 
               sub     al, 07h 
               cmp     al, 'S' 
               jbe     muu             ;go if capital letter 
               add     al, 07h 
               cmp     al, 'a' 
               jb      mu1             ;return if <'a' 
               sub     al, 27h 
               cmp     al, 'S' 
               ja      mu1             ;return if >'z' 
muu:           sub     al, '0'         ;use key to set pointer 
               push    ax 
               push    bx 
               add     al, 02h 
               mov     bl, al          ;copy index to bl 
               mov     ah, 00h 
               mov     bh, 00h 
               add     ax, bx 
               add     ax, bx 
               add     ax, ax          ;6 * index 
               add     ax, 1ef0h       ;1ef0h + 6 * index 
               mov     bp, ax 
               mov     bx, [bp] 
               mov     pg, bx          ;number of pages this ch. 
               mov     bx, [bp+2] 
               mov     ddh, bx         ;high pointer index this ch. 
               mov     bx, [bp+4] 
               mov     ddl, bx         ;low pointer index this ch. 
               pop     bx 
               pop     ax 
               call    fpoint          ;set pointers for chapter 
               call    curpos          ;cls & set cursor 
               call    doit            ;display chapter 
               jmp     mu0 
donemp:        call    closeit         ;ready for good exit 
               int     20h             ;exit 
               ret 
               endp 
doit           proc    near            ;display chapter 
               mov     bx, 27dah 
               mov     cx, pg 
               mov     [bx], cx 
do1:           cmp     pg, 0000h       ;more pages in chapter? 
               jz      out1 
               mov     ah, 3fh         ;read next page 
               mov     bx, fhandle 
               mov     cx, 07d2h       ;set buffer's size  
               mov     dx, offset(2000h) ;buffer location   
               int     21H   
               or      ax, ax          ;set ZF to 1 if ax=0 
               jz      out1            ;quit if page is empty 
               jc      out1 
               mov     [27ddh], ax     ;bytes read 
               jmp     out2 
do11:          jmp     do1 
out1:          ret 
out2:          call    curpos          ;cls & set cursor 
               mov     ah, 09h         ;display page 
               int     21h  
               call    cbu 
               sub     pg, 0001h 
do2:           mov     ax, 0000h 
               int     16h             ;wait 
               cmp     al, 00h 
               jnz     nxc             ;extended code 
               cmp     ah, 51h         ;PgDn 
               jz      do1 
               cmp     ah, 49h         ;PgUp 
               jz      pgup 
               jmp     do2 
pgup:          mov     ax, pg 
               add     ax, 0002h 
               mov     bx, 27dah 
               cmp     [bx], ax        ;don't go back before 
               jl      do2             ;beginning of chapter 
               add     pg, 0002h 
               mov     ax, 4201h       ;set file pointer 
               mov     bx, fhandle     ;back two pages 
               mov     bp, 2800h 
               add     bp, pg 
               add     bp, pg 
               mov     cx, [bp] 
               sub     bp, 0002h 
               add     cx, [bp] 
               mov     dx, 0000h 
               sub     dx, cx 
               mov     cx, 0ffffh 
               int     21h 
               jmp     do1 
nxc:           sub     al, 20h         ;for space bar 
               jz      do11 
               sub     al, 25h         ;or for E 
               jz      done 
               sub     al, 20h         ;or for e 
               jz      done 
               jmp     do2 
done:          ret 
               endp    
               end   
```
{% endraw %}

## DISPLAY.ASM

{% raw %}
```
main           proc    near 
               jmp     disp1 
buffer:        dw      165    dup    (?) 
disp1:         mov     b[0009h],60h     ;multiplier
               mov     b[0002h],00h     ;panel counter
               call    vid              ;mono,CGA,EGA?
               call    clrs             ;clear screen
               call    init             ;initial check
               call    rdfn             ;read filename
               call    openit           ;open it
               call    ptbuf            ;check password
               call    doit             ;main routine
               call    closeit          ;close file
               int     20h              ;exit
               endp
doit           proc    near
sub2:          inc     b[0002h]         ;step counter
               call    fillbuf          ;fill buffer
               call    clrs             ;clear screen
               mov     bx,107h          ;buffer address
               mov     w[0006h],bx      ;store it
               mov     ax,000bh         ;top row
               mov     w[0004h],ax      ;store it 
               mov     cx,0005h         ;number of rows
sub3:          push    cx               ;save it
               call    sub1             ;display row
               add     w[0006h],+19h    ;row length
               inc     w[0004h]         ;step row counter
               pop     cx               ;get it back
               loop    sub3             ;complete block
               call    td               ;time delay
               mov     ah, b[0008h]     ;check for
               cmp     b[0002h], ah     ;out condition
               jz      sub4             ;yes, out
               jmp     sub2             ;no, do again
sub4:          call    clrs             ;clear screen
               ret
               endp
sub1           proc    near
               mov     si,[0006h]
               mov     cx,0019h         ;chars. per row
               mov     ax,w[0004h]      ;row counter
               mov     bx,0040h         ;base port
               mov     es,bx
               mul     es:w[004ah]
               mov     di,001ah
               add     di,ax
               shl     di,1
               mov     es:dx,[0063h]
               mov     ax,w[0215h]      ;mono video port
               mov     es,ax
               mov     bl,b[0212h]      ;attribute byte
               mov     dx,w[0213h]      ;mono retrace port
               cld
sub5:          in      al,dx            ;anti snow
               test    al,01            ;anti snow
               jnz     sub5             ;anti snow
               cli                      ;no interupts
sub6:          in      al,dx            ;anti snow
               test    al,01            ;anti snow
               jz      sub6             ;anti snow
               movsb
               mov     al,bl            ;moves row to
               stosb                    ;video buffer
               sti                      ;set interupt flag
               loop    sub5             ;loop back for row
               ret
               endp
vid            proc    near             ;get video state 
               mov     ah,0fh           ; 
               int     10h 
               sub     ah,019h          ;sub. 25 from line count 
               shl     ah,1h            ;mult. by 2, lose high bit 
               mov     b[0211h],ah      ;store count 
               mov     b[0212h],al      ;store mode 
               cmp     al,7h            ;is it hga text? 
               Jz      m7 
               cmp     al,3h            ;is it cga? 
               Jz      m3 
               cmp     al,2h            ;is it cga? 
               Jz      m2 
m7:            mov     w[213h],03bah    ;hga retrace port 
               mov     w[215h],0b000h   ;hga video segment 
               jmp     mm 
m3:            nop 
m2:            mov     w[213h],03dah    ;cga retrace port 
               mov     w[215h],0b800h   ;cga video segment 
mm:            ret 
clrs           proc    near
               mov     ax,0719h         ;clear screen
               mov     bh,07h           ;white on black
               mov     cx,0000h         ;upper left
               mov     dx,194fh         ;lower right
               int     10h
               ret
               endp
td             proc    near
               push    ax
               mov     ax,12h
               mul     b[0009h]
               mov     cx,ax
               pop     ax
d1:            push    cx
               mov     ah,00h
               int     1ah
d2:            push    dx
               mov     ah,0
               int     1ah
               mov     ax,0b00h
               int     21h
               cmp     al,0ffh
               je      outt
               pop     bx
               cmp     bx,dx
               je      d2
               pop     cx
               loop    d1
               ret
outt:          pop     cx
               mov     ax,0c00h
               mov     dx,0109h
               int     21h
               pop     ax
               ret
               endp
init           proc    near            ;initialization routine   
               mov     ah, 30h         ;what dos are we under?   
               int     21H   
               cmp     al,2            ;dos 2.0 or over?   
               jae     a1              ;yes, skip   
               mov     ah, 09h         ;no, bitch   
               mov     dx, offset baddos  
               int     21H   
               int     20h             ;and exit   
a1:            call    curpos          ;blank and position
               ret
baddos:        db      0dh,0ah,'This program requires DOS 2.0!'
               db      0dh,0ah,0dh,0ah,'$'
               endp
pcrm           proc    near
               mov     ah, 09h         ;send title message   
               mov     dx, offset tmsg  
               int     21H   
               ret
tmsg:  db   0dh,0ah,'Display  version 1.0  Copyright (c) 1989 ',0dh,0ah
    db  'If you find this program useful or interesting, please',0dh,0ah
    db  'send a minimum contribution of Seven Dollars to:',0dh,0ah,0dh,0ah
    db  'Robert Wallingford, 2338 N. McVicker Ave., Chicago, IL 60639'
    db  0dh,0ah,0dh,0ah,'$'
               endp  
rdfn           proc    near            ;read file name
               cld                     ;positive increment
               mov     si, 081h        ;initial offset F.N.
rdl1:          lodsb                   ;get character
               cmp     al, 0dh         ;is it CR ?
               je      rdlo            ;if yes print msg.
               mov     di, 0162h
               mov     cx, 05h
               repne   scasb
               cmp     al, 020h        ;count blank spaces
               je      rdl1
               mov     dx,si           ;true offset F.N.
               dec     dx
rdl2:          lodsb                   ;get c !racter
               cmp     al, 0dh         ;is it CR ?
               je      rdl3            ;done if yes
               jne     rdl2            ;get another if no
rdl3:          mov     b[si-1], 00h
               jmp     rdl4
rdlo:          mov     ah, 09h         ;print msg
               mov     dx, offset rdlmsg
               int     21h
               call    pcrm
               int     20h
rdl4:          ret
               endp
rdlmsg:        db      'Syntax:    DISPLAY [file_path]FILE_NAME ',0dh,0ah,'$'
curpos         proc    near
               push    dx              ;
               mov     ax, 0200h       ;position cursor
               mov     bx, 0000h       ;
               mov     dx, 0000h       ;
               int     10h             ;
               xor     cx, cx          ;blank screen
               mov     dx, 194fh       ;
               mov     bh, 07h         ;
               mov     ax, 0619h       ;
               int     10h             ;
               pop     dx              ;
               ret
               endp
openit         proc    near            ;Open file  
               mov     ax, 3d00h  
               int     21h   
               jc      fail_end  
               mov     w[102h], ax     ;save fhandle
               jmp     open_end  
fail_end:      mov     ah, 09h         ;fail exit
               mov     dx, offset fnfmsg
               int     21h
               int     20h
open_end:      ret   
fnfmsg:        db      0dh,0ah,'File not found.   ',0dh,0ah,'$'
               endp   
closeit        proc    near            ;close file  
               mov     ax, 3e00h  
               mov     bx, w[102h]
               int     21h   
               jc      ffail_end  
               jmp     close_end 
ffail_end:     int     20h             ;fail exit
close_end:     ret 
               endp   
ptbuf          proc    near            ;move file pointer
               mov     ah, 3fh
               mov     bx, w[0102h]
               mov     cx, 0005h
               mov     dx, 107h
               int     21h             ;get number of panels
               mov     bh, b[0107h]
               mov     b[0008h], bh
               mov     bp, 107h
               mov     bh, 00h
               mov     bl, [bp]
               mov     dx, [bp+1]
               mov     cx, [bp+3]
               cmp     dl, 'D'
               jne     stop            ;is this file
               cmp     dh, 'I'         ;a 'DISPLAY' file?
               jne     stop            ;if not, exit
               cmp     cl, 'S'
               jne     stop
               cmp     ch, 'P'
               je      ok
stop:          mov     ah, 09h         ;print password msg
               mov     dx, offset pswd
               int     21h
               int     20h             ;and exit
ok:            ret
pswd:          db      'This is not a DISPLAY file.',0dh,0ah,'$'
               endp
fillbuf        proc    near
               mov     ah, 3fh         ;get time byte
               mov     bx, w[102h]     ;file handle
               mov     cx, 01h         ;one byte
               mov     dx, 0009h       ;storeage address
               int     21h
               mov     ah, 3fh         ;get attribute byte
               mov     bx, w[102h]     ;file handle
               mov     cx, 01h         ;one byte
               mov     dx, 0212h       ;storeage address
               int     21h
               mov     ah, 3fh
               mov     cx, 7dh         ;pointer buffer length
               mov     dx, 0107h       ;and location
               int     21h             ;fill index buffer   
               ret
               endp
```
{% endraw %}

## DISPLAY.DOC

{% raw %}
```
                      DISPLAY DOCUMENTATION 
 
 
     This is a system for generating and displaying dynamic 
messages. 
     This set contains three programs named,  MAKDISP1.COM,  
MAKDISP2.COM  and  DISPLAY.COM,  with several short supporting 
and/or sample files. They will assists the non-programming user 
in the preparation and presentation of dynamic  ASCII  displays.
These displays consist of up to 99 sequential panels consisting
of five rows of twenty five characters. You can use any of the 
standard characters in either upper or lower case through the 
normal keyboard. You can also use any character from the extended
ASCII set up to [255] by holding down the ALT key and entering 
the number of the desired character through the keypad on the 
right of the keyboard, then releasing the ALT key. 
     The programs also permit you to select from a limited number
of foreground and background attributes, including blinking 
foreground. You can also specify the display time in seconds for
each panel of the display. As an added convenience to the viewer
of the display, the timer subroutine has a built in feature that
causes the  display to advance to the next panel whenever the 
viewer presses any key without regard to the remaining time.    
To create a display with the program, copy  MAKDISP1.COM,  
MAKDISP2.COM  and  DISPLAY.COM  into any  root, directory, or 
subdirectory. This directory should not contain a file named  
DISPLAY.FIL  or any file named  DISP.Nxx  where the  x  
represents any decimal digit. Then enter that directory (if you 
are not already in it) and type  MAKDISP1  followed by pressing 
the ENTER key.  MAKDISP1 will clear the screen and display a 
brief message and a highlighted, bordered, rectangle near the 
center of the screen. 
     The normal cursor will be in the upper left corner of this 
rectangle waiting for your first character. Type in anything you
want displayed in this panel, (including the extended ASCII 
characters using the ALT key).  DO NOT PRESS ENTER AT THE END OF
THE LINE. At the end of the line the cursor will automatically 
advance one line and move to the left of the rectangle. On the 
last line it will not advance but it will perform an automatic 
wrap-around and write over on this last line. 
     MAKDISP1.COM  also supports the up arrow, down arrow, left 
arrow, and right arrow keys as long as they do not leave the 
highlighted box. It also supports a modified form of backspace, 
moving the cursor back one space and overwriting that position 
with a blank space. It even includes necessary line and position
modification at the left boarder, but it will not exit the 
highlighted area. 
     When you are satisfied with the composition of this panel, 
press the ENTER key and  MAKDISP1.COM  will put the panel into a
small file named  DISP.Nxx  where xx is the panel number. It will
then tell you which panel number you have just completed and ask
you if you want another panel. If you press  Y  it will repeat 
the process for the next panel and if you press  N  it will
return you to the  DOS  prompt.  MAKDISP1.COM  will also exit 
with a polite message and return you to  DOS  if it finds a file
named  DISP.Nxx  because it will assume that it is from a 
previous run and that you do not want to overwrite it. 
     Your next step is to type  MAKDISP2  and press the  ENTER  
key.  MAKDISP2.COM  begins by creating the file named DISPLAY.FIL
and entering a four digit password beginning with the second 
byte. This is to prevent  DISPLAY.COM  from putting garbage on 
the screen if you accidentally follow  DISPLAY  with the name of
a real existing file that you did not intend to display. With 
this feature a large commercial user could issue individualized 
display systems that could peacefully coexist in the same 
environment. The first byte is a counter telling how many panels
are combined in this file. 
     After the password,  MAKDISP2.COM,  in a numerical sequence,
puts the contents of each  DISP.Nxx  file, with an appropriate 
header block, into the file named DISPLAY.FIL. The header block 
in the Shareware version of this system consists of two bytes. 
The first byte is the number of seconds for this panel to be 
displayed. The second byte defines the attributes for the 
display including foreground, background, intensity and blinking.
     In the commercial version this header can be six bytes long,
with one byte defining the horizontal panel size, a second byte 
defining the vertical panel size, and two bytes defining the 
screen location of the upper left corner of the panel. Colors 
also increase the number of options in the menu for the attribute
byte. 
     MAKDISP2.COM  asks you how many seconds you want to display
this panel and you enter one or two digits from the keyboard as 
your answer. If your first digit is not 0 and you want a display
time of less than ten seconds you can press ENTER and the program
will accept the single digit. If you press a second digit, you 
don't need to press ENTER . The program goes on without it. The 
program ignores other keys. 
     The program asks you to choose a color attribute by pressing
a key from a menu of possibilities. It ignores all other keys 
except ENTER. If you press ENTER, the program assumes an 
attribute of normal white foreground on a black background. 
Similarly, in response to the blink attribute question, if you 
press ENTER the program assumes that you don't want the display 
to blink. It ignores all other keys except  Y  or  N  (either 
uppercase or lowercase). 
     When  MAKDISP2.COM  has processed all of the sequentially 
numbered  DISP.Nxx  files it will close  DISPLAY.FIL  and return
you to the DOS prompt. To review it type  DISPLAY DISPLAY.FIL  
and press ENTER . 
     If you are satisfied with the result rename  DISPLAY.FIL  to
something appropriate like  BOB,  JUDY,  LOVE,  XMAS,  BIRTHDAY, 
or any other  FILENAME  (with or without an extension). Then, if
you want it to be really easy, make a one line  .BAT  file with 
the  COPY CON  command that says  DISPLAY FILENAME ^Z  . 
     For example if you have created a display for Christmas and
used the  REN DISPLAY.FIL XMAS.D25 <ENTER> command to rename  
DISPLAY.FIL  to  XMAS.D25  then you can make  XMAS.BAT like this:
COPY CON XMAS.BAT <ENTER> DISPLAY XMAS.D25 ^Z <ENTER> . 
(NOTE: the  ^Z  is the  END-OF-FILE  character and you can make 
it by holding down the  CTRL  key and pressing  Z  or by pressing
F6 ) 
     Now you can put   DISPLAY.COM,  XMAS.D25,  and  XMAS.BAT  on
a formatted disk and send it to a friend with the instructions to
put the disk in drive  A: and, assuming the computer has already
been booted up, type  A:\XMAS <ENTER> . Your friend will see your
personally prepared dynamic Christmas greeting!

Legal Terms and Conditions                                       
     This package is provided to you under the following
     conditions:

     1. You may copy this entire package, and give it to
     anyone who accepts these terms. The copies you
     distribute must be complete and unmodified.  You do
     not have to be registered to distribute this package.

     2. You may execute the programs in this package, in
     order to evaluate them. If you decide that both of
     these packages are of use to you, you must become a
     registered user by sending $14. (or $7. for either
     package, specifying either BOOK or DISPLAY and the
     version number) to:

              Robert Wallingford, P.E.
              2338 N. McVicker Avenue
              Chicago, IL  60639-2216

     Registered users may order update-diskettes (5.25
     inch, double density) for $7 US, plus enough to
     cover extra postage if you are overseas. Once you
     register for these packages, you are entitled to a
     life-time of updates of the package for which you
     are registered, at $7 each, as long is I am in
     business and willing to cash your $7 checks.
     Illinois residents add sales tax.

     3. Commercial versions of both packages are available
     to users who wish to distribute more than ten copies
     of individual programs with custom files for other
     than personal communication. These commercial copies
     can include additional features. Contact me for
     special terms.

     4. You may not sell this package to anyone.  If you
     distribute this package on a diskette, any fees you
     collect must be specified as materials/handling  ,
     and may not exceed $10 for the diskette.

     5. You are completely responsible for determining the
     fitness or usability of these packages. I will not be
     liable for any damages, of any kind, arising from any
     failure of any programs in these packages to perform
     as expected.

     6. You must be a registered user to sell any programs
     or files that you have written using these packages,
     or to distribute more than ten copies of such custom
     files. If you do sell or distribute such programs or
     files, you must insure that your registered name
     (company or individual) will always be distributed
     with the program, so I can verify your registration.
     Any individual or company found to be violating these
     terms will liable for triple registration fees for
     every distributed copy (plus legal and court costs).

                    Robert Wallingford, P.E.
                    2338 N. McVicker Avenue
                    Chicago,  IL  60639-2216

                    Phone  1 (312) 889-1115

```
{% endraw %}

## FILE1807.TXT

{% raw %}
```
Disk No: 1807                                                           
Disk Title: Book Memo Display                                           
PC-SIG Version: S1                                                      
                                                                        
Program Title: Book Memo Display                                        
Author Version: 1.0                                                     
Author Registration: $7.00                                              
Special Requirements: None.                                             
                                                                        
BOOK MEMO DISPLAY takes any ASCII text file and turns it into a computer
book.  Access any chapter, and any page in that chapter from the        
computer index.  No more scrolling through long documents to find the   
section you want.                                                       
                                                                        
You provide the text file, this program converts it into a new file that
is divided by chapters and pages.  It also creates an index display that
lists these chapters.  When the index is displayed you can directly     
access any chapter with a single keystroke.  You can display successive 
pages within a chapter with another keystroke.  Move forward or backward
through the pages, or go back to the index to change chapters.          
                                                                        
To make your own ``book'' you will need a word processor that makes     
ASCII files (most do) and MAKEBOOK.COM (part of this program) to combine
the individual page files and insert the control characters.            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## SHOWMEMO.ASM

{% raw %}
```
main           proc    near 
               jmp     memo1 
buffer:        dw      300    dup    (?) 
memo1:         mov     b[0009h],60h     ;multiplier
               mov     b[0002h],00h     ;panel counter
               call    vid              ;mono,CGA,EGA?
               call    clrs             ;clear screen
               call    init             ;initial check
               call    rdfn             ;read filename
               call    openit           ;open it
               call    ptbuf            ;check password
               call    doit             ;main routine
               call    closeit          ;close file
               int     20h              ;exit
               endp
doit           proc    near
sub2:          inc     b[0002h]         ;step counter
               call    fillbuf          ;fill buffer
               call    clrs             ;clear screen
               mov     bx,107h          ;buffer address
               mov     w[0006h],bx      ;store it
               mov     ax,000bh         ;top row
               mov     w[0004h],ax      ;store it 
               mov     cx,000Ah         ;number of rows
sub3:          push    cx               ;save it
               call    sub1             ;display row
               add     w[0006h],+19h    ;row length
               inc     w[0004h]         ;step row counter
               pop     cx               ;get it back
               loop    sub3             ;complete block
               call    td               ;time delay
               mov     ah, b[0008h]     ;check for
               cmp     b[0002h], ah     ;out condition
               jz      sub4             ;yes, out
               jmp     sub2             ;no, do again
sub4:          call    clrs             ;clear screen
               ret
               endp
sub1           proc    near
               mov     si,[0006h]
               mov     cx,0019h         ;chars. per row
               mov     ax,w[0004h]      ;row counter
               mov     bx,0040h         ;base port
               mov     es,bx
               mul     es:w[004ah]
               mov     di,001ah
               add     di,ax
               shl     di,1
               mov     es:dx,[0063h]
               mov     ax,w[0215h]      ;mono video port
               mov     es,ax
               mov     bl,b[0212h]      ;attribute byte
               mov     dx,w[0213h]      ;mono retrace port
               cld
sub5:          in      al,dx            ;anti snow
               test    al,01            ;anti snow
               jnz     sub5             ;anti snow
               cli                      ;no interupts
sub6:          in      al,dx            ;anti snow
               test    al,01            ;anti snow
               jz      sub6             ;anti snow
               movsb
               mov     al,bl            ;moves row to
               stosb                    ;video buffer
               sti                      ;set interupt flag
               loop    sub5             ;loop back for row
               ret
               endp
vid            proc    near             ;get video state 
               mov     ah,0fh           ; 
               int     10h 
               sub     ah,019h          ;sub. 25 from line count 
               shl     ah,1h            ;mult. by 2, lose high bit 
               mov     b[0211h],ah      ;store count 
               mov     b[0212h],al      ;store mode 
               cmp     al,7h            ;is it hga text? 
               Jz      m7 
               cmp     al,3h            ;is it cga? 
               Jz      m3 
               cmp     al,2h            ;is it cga? 
               Jz      m2 
m7:            mov     w[213h],03bah    ;hga retrace port 
               mov     w[215h],0b000h   ;hga video segment 
               jmp     mm 
m3:            nop 
m2:            mov     w[213h],03dah    ;cga retrace port 
               mov     w[215h],0b800h   ;cga video segment 
mm:            ret 
clrs           proc    near
               mov     ax,0719h         ;clear screen
               mov     bh,07h           ;white on black
               mov     cx,0000h         ;upper left
               mov     dx,194fh         ;lower right
               int     10h
               ret
               endp
td             proc    near
               push    ax
               mov     ax,12h
               mul     b[0009h]
               mov     cx,ax
               pop     ax
d1:            push    cx
               mov     ah,00h
               int     1ah
d2:            push    dx
               mov     ah,0
               int     1ah
               mov     ax,0b00h
               int     21h
               cmp     al,0ffh
               je      outt
               pop     bx
               cmp     bx,dx
               je      d2
               pop     cx
               loop    d1
               ret
outt:          pop     cx
               mov     ax,0c00h
               mov     dx,0109h
               int     21h
               pop     ax
               ret
               endp
init           proc    near            ;initialization routine   
               mov     ah, 30h         ;what dos are we under?   
               int     21H   
               cmp     al,2            ;dos 2.0 or over?   
               jae     a1              ;yes, skip   
               mov     ah, 09h         ;no, bitch   
               mov     dx, offset baddos  
               int     21H   
               int     20h             ;and exit   
a1:            call    curpos          ;blank and position
               ret
baddos:        db      0dh,0ah,'This program requires DOS 2.0!'
               db      0dh,0ah,0dh,0ah,'$'
               endp
pcrm           proc    near
               mov     ah, 09h         ;send title message   
               mov     dx, offset tmsg  
               int     21H   
               ret
tmsg:  db   0dh,0ah,'MEMO  version 1.0  Copyright (c) 1989 ',0dh,0ah
    db  'If you find this program useful or interesting, please',0dh,0ah
    db  'send a minimum contribution of Seven Dollars to:',0dh,0ah,0dh,0ah
    db  'Robert Wallingford, 2338 N. McVicker Ave., Chicago, IL 60639'
    db  0dh,0ah,0dh,0ah,'$'
               endp  
rdfn           proc    near            ;read file name
               cld                     ;positive increment
               mov     si, 081h        ;initial offset F.N.
rdl1:          lodsb                   ;get character
               cmp     al, 0dh         ;is it CR ?
               je      rdlo            ;if yes print msg.
               mov     di, 0162h
               mov     cx, 05h
               repne   scasb
               cmp     al, 020h        ;count blank spaces
               je      rdl1
               mov     dx,si           ;true offset F.N.
               dec     dx
rdl2:          lodsb                   ;get c !racter
               cmp     al, 0dh         ;is it CR ?
               je      rdl3            ;done if yes
               jne     rdl2            ;get another if no
rdl3:          mov     b[si-1], 00h
               jmp     rdl4
rdlo:          mov     ah, 09h         ;print msg
               mov     dx, offset rdlmsg
               int     21h
               call    pcrm
               int     20h
rdl4:          ret
               endp
rdlmsg:        db      'Syntax:    SHOWMEMO [file_path]FILE_NAME ',0dh,0ah,'$'
curpos         proc    near
               push    dx              ;
               mov     ax, 0200h       ;position cursor
               mov     bx, 0000h       ;
               mov     dx, 0000h       ;
               int     10h             ;
               xor     cx, cx          ;blank screen
               mov     dx, 194fh       ;
               mov     bh, 07h         ;
               mov     ax, 0619h       ;
               int     10h             ;
               pop     dx              ;
               ret
               endp
openit         proc    near            ;Open file  
               mov     ax, 3d00h  
               int     21h   
               jc      fail_end  
               mov     w[102h], ax     ;save fhandle
               jmp     open_end  
fail_end:      mov     ah, 09h         ;fail exit
               mov     dx, offset fnfmsg
               int     21h
               int     20h
open_end:      ret   
fnfmsg:        db      0dh,0ah,'File not found.   ',0dh,0ah,'$'
               endp   
closeit        proc    near            ;close file  
               mov     ax, 3e00h  
               mov     bx, w[102h]
               int     21h   
               jc      ffail_end  
               jmp     close_end 
ffail_end:     int     20h             ;fail exit
close_end:     ret 
               endp   
ptbuf          proc    near            ;move file pointer
               mov     ah, 3fh
               mov     bx, w[0102h]
               mov     cx, 0005h
               mov     dx, 107h
               int     21h             ;get number of panels
               mov     bh, b[0107h]
               mov     b[0008h], bh
               mov     bp, 107h
               mov     bh, 00h
               mov     bl, [bp]
               mov     dx, [bp+1]
               mov     cx, [bp+3]
               cmp     dl, 'M'
               jne     stop            ;is this file
               cmp     dh, 'E'         ;a 'MEMO' file?
               jne     stop            ;if not, exit
               cmp     cl, 'M'
               jne     stop
               cmp     ch, 'O'
               je      ok
stop:          mov     ah, 09h         ;print password msg
               mov     dx, offset pswd
               int     21h
               int     20h             ;and exit
ok:            ret
pswd:          db      'This is not a MEMO file.',0dh,0ah,'$'
               endp
fillbuf        proc    near
               mov     ah, 3fh         ;get time byte
               mov     bx, w[102h]     ;file handle
               mov     cx, 01h         ;one byte
               mov     dx, 0009h       ;storeage address
               int     21h
               mov     ah, 3fh         ;get attribute byte
               mov     bx, w[102h]     ;file handle
               mov     cx, 01h         ;one byte
               mov     dx, 0212h       ;storeage address
               int     21h
               mov     ah, 3fh
               mov     cx, 0FAh         ;pointer buffer length
               mov     dx, 0107h       ;and location
               int     21h             ;fill index buffer   
               ret
               endp
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1807

     Volume in drive A has no label
     Directory of A:\

    BOOKSAFE ARC     53758   7-13-89   5:49p
    DISPLAY  ARC     21867   7-19-89   7:58p
    FILE1807 TXT      2221  12-20-89   4:21p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   1-01-80   8:00a
    MEMOSAFE ARC     15899   7-19-89   7:09p
    PKXARC   COM     12242   4-27-87
    UNARC    BAT       407   7-12-89   6:53a
            8 file(s)     107126 bytes
                           51200 bytes free
