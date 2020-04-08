.model tiny
.code

ExecBlk Struc
        Psp     dw      ?
        Cmdline dw      ?
        CmdSeg  dw      ?
        FCB1    dw      ?
        FCB1seg dw      ?
        FCB2    dw      ?
        FCB2seg dw      ?
ExecBlk ends

        org     100h

main    proc
        lea     bx,pspblk
        mov     sp,bx
        call    resize

        mov     execb.psp,0             ; copy our environment
        mov     execb.cmdline,80h       ; pass command line as is
        mov     execb.FCB1,5ch
        mov     execb.FCB2,6ch
        mov     execb.cmdseg,cs
        mov     execb.FCB1seg,cs
        mov     execb.FCB2seg,cs
        lea     dx,execf
        push    ds
        pop     es
        lea     bx,execb
        mov     ax,4b00h
        int     21h
merr:
        mov     ax,4c00h
        int     21h
main    endp

resize  proc
        add     bx,15
        mov     cl,4
        shr     bx,cl
        mov     ax,cs
        add     bx,ax
        mov     ah,4ah
        int     21h
        jc      merr
        ret
resize  endp


execf   db      "123.EXE",0             ; ASCIIZ pathname of file to be
execd
execb   ExecBlk <>
_stack  dw      1000h dup(?)

pspblk  label   byte

        end     main
