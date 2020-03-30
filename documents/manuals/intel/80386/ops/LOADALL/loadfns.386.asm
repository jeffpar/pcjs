;-----------------------------------------------------------------------------
;
; LOADFNS.386
;
;       Copyright (c) 1991, 1995-Present  Robert Collins
;
;       You have my permission to copy and distribute this software for
;       non-commercial purposes.  Any commercial use of this software or
;       source code is allowed, so long as the appropriate copyright
;       attributions (to me) are intact, *AND* my email address is properly
;       displayed.
;
;       Basically, give me credit, where credit is due, and show my email
;       address.
;
;-----------------------------------------------------------------------------
;
;       Robert R. Collins               email:  rcollins@x86.org
;
;-----------------------------------------------------------------------------


;-----------------------------------------------------------------------------
  INT01:        ; Int1 trap routine
;-----------------------------------------------------------------------------
; Interprets breakpoint type, and sets a flag
;-----------------------------------------------------------------------------
        inc     dx
        push    bp
        mov     bp,sp
        mov     buffer2[bx],cx
        add     bx,2
        push    eax
        push    ebx
        push    ecx
        mov     eax,dr6
        mov     ecx,eax
        mov     ebx,dr7
        shr     ebx,10h                 ; get length encodings
        test    ah,20h                  ; debug register access attempt?
        jnz     @DR_Attempt             ; yep
        shr     al,1                    ; DR0?
        jc      @DR0
        shr     al,1                    ; DR1?
        jc      @DR1
        shr     al,1                    ; DR2?
        jc      @DR2
@DR3:   or      si,8
        and     cl,not 8
        test    bh,30h                  ; code, or data?
        jz      @Fault
        jmp     short @Trap
@DR2:   or      si,4
        and     cl,not 4
        test    bh,03h                  ; code, or data?
        jz      @Fault
        jmp     short @Trap
@DR1:   or      si,2
        and     cl,not 2
        test    bl,30h                  ; code, or data?
        jz      @Fault
        jmp     short @Trap
@DR0:   or      si,1
        and     cl,not 1
        test    bl,03h                  ; code, or data?
        jz      @Fault
        jmp     short @Trap
@Fault: add     word ptr [bp][2],1
        mov     dr6,ecx
@Trap:  pop     ecx
        pop     ebx
        pop     eax
        pop     bp
        iret

@Dr_Attempt:
        push    bp
        add     word ptr [bp][2],3
        pop     bp
        iret




;-----------------------------------------------------------------------------
  Save_state    proc    near    ; Save the machine state before LOADALL
;-----------------------------------------------------------------------------
        push    eax
        push    ds
        mov     si,0
        mov     di,offset Machine_State.GS_Desc
        mov     ax,5000h                ; GS descriptor
        mov     ds,ax
        mov     ebx,05050505h
        movsd
        mov     dword ptr [si-4],ebx

        sub     ax,1000h                ; FS descriptor
        sub     ebx,01010101h
        mov     si,0
        add     di,8
        mov     ds,ax
        movsd
        mov     dword ptr [si-4],ebx
        sub     ax,2000h                ; DS descriptor
        sub     ebx,02020202h
        mov     si,0
        add     di,8
        mov     ds,ax
        movsd
        mov     dword ptr [si-4],ebx
        add     ax,4000h                ; SS descriptor
        add     ebx,04040404h
        mov     si,0
        add     di,8
        mov     ds,ax
        movsd
        mov     dword ptr [si-4],ebx
        sub     ax,3000h                ; ES descriptor
        sub     ebx,03030303h
        mov     si,0
        add     di,14h
        mov     ds,ax
        movsd
        mov     dword ptr [si-4],ebx
        pop     ds

        mov     eax,cr0
        mov     Machine_State._CR0,eax
        pushfd
        pop     eax
        mov     Machine_State._Eflags,eax
        pop     eax
        mov     Machine_State._EDI,edi
        mov     Machine_State._ESI,esi
        mov     Machine_State._EBP,ebp
        mov     Machine_State._EBX,ebx
        mov     Machine_State._EDX,edx
        mov     Machine_State._ECX,ecx
        mov     Machine_State._EAX,eax
        mov     ax,gs
        movzx   eax,ax
        mov     Machine_State._GS,eax
        mov     ax,fs
        mov     Machine_State._FS,eax
        mov     ax,ds
        mov     Machine_State._DS,eax
        mov     ax,es
        mov     Machine_State._ES,eax
        ret
Save_state      endp


;-----------------------------------------------------------------------------
  Restore_state proc    near    ; Restore the machine state after LOADALL
;-----------------------------------------------------------------------------
        mov     ax,_data
        mov     ds,ax
        mov     ax,5000h                ; GS
        mov     es,ax
        mov     si,offset Machine_State.GS_Desc
        mov     di,0
        movsd
        sub     ax,1000h                ; FS
        add     si,8
        mov     di,0
        mov     es,ax
        movsd
        sub     ax,2000h                ; DS
        add     si,8
        mov     di,0
        mov     es,ax
        movsd
        add     ax,4000h                ; SS
        add     si,8
        mov     di,0
        mov     es,ax
        movsd
        sub     ax,3000h                ; ES
        add     si,14h
        mov     di,0
        mov     es,ax
        movsd
        mov     eax,Machine_State._ES
        mov     es,ax
        mov     eax,Machine_State._DS
        mov     ds,ax
        mov     eax,Machine_State._FS
        mov     fs,ax
        mov     eax,Machine_State._GS
        mov     gs,ax
        mov     eax,Machine_State._Eflags
        push    eax
        popfd
        mov     eax,Machine_State._CR0
        mov     cr0,eax
        mov     eax,Machine_State._EAX
        mov     ecx,Machine_State._ECX
        mov     edx,Machine_State._EDX
        mov     ebx,Machine_State._EBX
        mov     ebp,Machine_State._EBP
        mov     esi,Machine_State._ESI
        mov     edi,Machine_State._EDI
        ret
Restore_State   endp
