---
layout: post
title: Somebody Put a SPELL On Me
date: 2018-05-27 10:00:00
permalink: /blog/2018/05/27/
preview: /blog/images/microsoft-spell-30.jpg
machines:
  - id: ibm5160
    type: pcx86
    debugger: true
    uncompiled: true
    commands: bp &060E:0005 "dh;h"
    config: /configs/pcx86/machine/ibm/5160/ega/640kb/debugger/machine.xml
    autoMount:
      A:
        name: PC DOS 2.00 (Disk 1)
      B:
        name: MS Word 3.00 (Disk 2)
    autoType: $date\r$time\rB:\rSPELL\r
---

Last week, I was sifting through some old email, looking for any interesting references to `HIMEM` and `A20`,
and I almost overlooked this short note I had written 30+ years ago:

    From jeffpar Tue Dec  1 10:26:36 1987
    To: scottsc
    Cc: jeffpar
    Subject: Re: A20.COM
    Date: Tue Dec 01 10:32:43 1987
    
    When Nancy and company were doing automated (ie, sgrab) testing of the
    OS/2 3xbox, keystrokes were getting dropped and duplicated.  The problem
    stems from OS/2's constant mode-switching (from real-mode to protected-mode
    and back), and the constant disabling and re-enabling of the A20 line.
    Since OS/2 has to talk to the keyboard controller to do that, it was inter-
    fering with data coming into the keyboard controller occasionally.  (I still
    don't know why this never happens with IBM keyboards;  non-IBM keyboards
    and sgrab are the only culprits).
    
    A20.COM just patches the OS/2 kernel so that it stops fiddling with the
    keyboard controller to change A20 state, and then enables A20.  Since the
    currently loaded image of OS/2 won't be changing A20 anymore, A20 should
    remain permanently enabled.  This will cause some compatibility problems
    for apps that rely on the 1meg wrap, which includes apps that use the old
    "call 5" interface to make DOS calls, but the only one I've run across so far
    is Word's SPELL utility.
    
    | >From scottsc Tue Dec  1 10:09:03 1987
    | To: jeffpar
    | Subject: A20.com
    | Date: Tue Dec  1 10:07:07 1987
    | 
    | 
    | Thanks. Just for curiousity's sake, what is it that A20.com is supposed to
    | do? Nancys made it sound like it activated some interrupt or another, but she
    | didn't really know. Other people have told me it has to do with timing.
    | What's the real reason for running this program?
 
I barely noticed the last sentence:

    This will cause some compatibility problems for apps that rely on the 1meg wrap,
    which includes apps that use the old "call 5" interface to make DOS calls, but
    the only one I've run across so far is Word's SPELL utility.

Recently, a handful of people, like Michal over at the
[OS/2 Museum](http://www.os2museum.com/wp/a-word-on-the-call-5-spell/), and myself, had been looking
for examples of old software that used the CP/M-style "CALL 5" interface to DOS, instead of (or in addition to)
the "INT 21h" interface.

Here was a prime example, [SPELL.COM](#break-the-spell), that I had found 30 years ago and completely forgotten
about.

And what about that `A20` program, you ask?  I found a copy of that, too.  The `PRO386` was probably the cheap
80386-based PC clone I had bought in 1987, which had a few issues running OS/2.  Hence this utility, which apparently
I later adapted to help resolve an issue with OS/2 compatibility testing.

{% raw %}

            title   a20.asm
    
    ;       A20.ASM
    ;       By Jeff Parsons 8/2/87
    ;
    ;       Purpose is to patch standard ROM (actually the copy
    ;       in the PRO386's shadow RAM) to NOT issue commands to the
    ;       keyboard controller that change the A20 address-line state.
    ;
    ;       Will also check for OS/2 running (real-mode version >= 10)
    ;       and search for, and disable through additional patching, the
    ;       operating system routines that change the A20 state.
    
    
    cseg    segment public byte 'CODE'
    
            org     100h
    
            assume  cs:cseg,ds:cseg,es:nothing,ss:cseg
    
    main    proc    far
            mov     ah,30h              ;get-version DOS function
            int     21h
            sub     di,di               ;zero if no OS/2 patch to do
            cmp     al,10               ;OS/2 running?
            jb      m1                  ;no
            mov     si,offset pattern1  ;yes
            mov     ax,90h
            mov     es,ax               ;good segment to start looking in
            mov     cx,offset size1     ;length of pattern1
            cld
            call    search              ;look for it and leave address in (DI)
    m1:     CLI
            push    es
            mov     ax,0F000h
            mov     es,ax               ;check for CLI (FAh) at location 4392h
            mov     dx,offset alreadymsg
            cmp     byte ptr es:[4392h],0C3h
            je      m6                  ;ROM already patched
            call    empty8042           ;otherwise, enable A20 now
            mov     al,0D1h
            out     64h,al              ;issue "write output port" command
            call    empty8042
            mov     al,0DFh             ;output port value that enables A20
            out     60h,al
            call    empty8042
            sub     bl,bl               ;(BL) = 0 if extended patch required
            mov     dx,offset badrommsg
            cmp     byte ptr es:[00A1h],0Ah
            je      m4                  ;likely 8Mhz AT ROM
            cmp     byte ptr es:[00F4h],073h
            je      m4                  ;specially modified 6Mhz AT ROM
            cmp     word ptr es:[0FFEAh],4F43h
            je      m4                  ;a Compaq ROM
            cmp     word ptr es:[01A6h],0E9FAh
            jne     m6                  ;not mine, unknown ROM
            inc     bl                  ;(BL) = 1 since nominal patch required
            mov     al,3Fh              ;fetch reserved byte from CMOS
            out     70h,al
            jmp     $+2
            in      al,71h              ;got it
            and     al,not 1            ;clear ROM/RAM bit
            mov     dx,270h
            out     dx,al               ;make ROM visible
            jmp     $+2                 ;then write 1st byte of routine with RET
            mov     byte ptr es:[4392h],0C3h
            or      al,1                ;set ROM/RAM bit
            out     dx,al               ;and make RAM visible again
    m4:     mov     dx,offset finishedmsg
            or      di,di               ;any OS/2 patch to make?
            jnz     m7                  ;yes
    m6:     jmp     exit
    m7:     pop     es
            cmp     byte ptr es:[di-50h],0B0h
            jne     m7a                 ;resort to grosser patch
            mov     byte ptr es:[di-4Fh],1
            jmp     short m7b           ;more elegant patch, to DisableA20
    m7a:    mov     si,offset patch1
            mov     cx,offset sizepatch1
            rep     movsb               ;apply the A20COMMON patch (easy part!)
    m7b:    or      bl,bl               ;full-blown patch required?
            jne     toexit              ;no
            mov     si,offset pattern2  ;now look for code in REALMODE
            mov     cx,offset size2
            mov     dx,offset badpatchmsg
            call    search              ;look for it and leave address in (DI)
            jc      toexit              ;wasn't found
            sub     cx,cx
    m8:     cmp     byte ptr es:[di+13h],0BBh
            je      m9
            sub     di,3
            add     cl,3
            cmp     cl,3
            jbe     m8
    toexit: jmp     short exit          ;*** SANITY CHECKS ***
    m9:     cmp     byte ptr es:[di+48h],0CCh
            jne     exit
            cmp     byte ptr es:[di+61h],00Fh
            jne     exit
            add     di,cx
            mov     ax,es:[di-5]        ;yank DOSCODE value out
            mov     bx,es:[di-2]        ;yank CSOFFSET RESET value out
            mov     dx,es:[di+4]        ;yank DOSGROUP value out
            mov     si,offset patch2
            sub     di,7
            push    cx
            mov     cx,offset sizepatch2
            rep     movsb               ;patch #2 complete
            mov     es:[di-4],ax        ;plug DOSCODE value into patch
            add     di,13               ;skip to next section
            pop     cx
            sub     di,cx
            mov     ax,es:[di+23]       ;yank SAVEAREAPTR value out
            mov     si,offset patch3
            mov     cx,offset sizepatch3
            rep     movsb
            mov     byte ptr es:[di+7],0Ah
            mov     es:[di-22],ax       ;plug SAVEAREAPTR value into patch
            mov     es:[di-27],bx       ;plug CSOFFSET RESET value into patch
            add     di,25               ;skip to final section
            mov     ax,es:[di+1]        ;yank SAVEAREA value out
            mov     bx,es:[di+13]       ;yank INT_MASK value out
            mov     si,offset patch4
            mov     cx,offset sizepatch4
            rep     movsb
            mov     es:[di-16],ax
            mov     es:[di-8],bx
            mov     es:[di-21],dx
            mov     dx,offset completemsg
    exit:   STI
            mov     ah,9                ;print-string DOS function
            int     21h
            int     20h                 ;terminate program
    main    endp
    
    search  proc    near
    s1:     mov     ax,di               ;see if we've exhausted the segment
            add     ax,cx
            jc      s8                  ;this compare will wrap, so exhausted
            push    cx
            push    si
            push    di
            repe    cmpsb
            pop     di
            pop     si
            pop     cx
            je      s9                  ;exit if match found
            inc     di                  ;else try from next byte in segment
            jmp     s1
    s8:     mov     di,0                ;return zero if not found (preserve carry)
    s9:     ret
    search  endp
    
    empty8042   proc    near
            sub     cx,cx
    e1:     in      al,64h              ;wait for 8042 input buffer to empty
            test    al,02h              ;empty yet? (bit 1 must be zero)
            loopnz  e1
            jnz     e9                  ;if still not empty, drop out of program
            ret
    e9:     mov     dx,offset bad8042msg
            jmp     exit
    empty8042   endp
    
    
    pattern1        db      0B4h,0DDh,00Ah,0C0h,074h,002h,0B4h,0DFh
    size1           equ     $-pattern1
    patch1          db      028h,0C0h,0C3h
    sizepatch1      equ     $-patch1
    pattern2        db      060h,06Ah,000h,068h
    size2           equ     $-pattern2
    patch2          db      0B8h,040h,000h,08Eh,0D8h,0C7h,006h,069h,000h
                    db      0FFh,0FFh,090h,090h
    sizepatch2      equ     $-patch2
    patch3          db      0C7h,006h,067h,000h,0FFh,0FFh,02Eh,0C4h,03Eh,0FFh,0FFh
                    db      026h,089h,025h,026h,089h,045h,002h,090h,090h,090h,090h
                    db      090h,090h,090h,090h,090h,090h,090h,090h,090h
    sizepatch3      equ     $-patch3
    patch4          db      0B8h,0FFh,0FFh,08Eh,0D8h,0BEh,0FFh,0FFh,08Bh,024h,08Eh
                    db      054h,002h,0A0h,0FFh,0FFh,0E6h,021h,090h,090h,090h,090h
    sizepatch4      equ     $-patch4
    
    alreadymsg      db      'Patch already in place',13,10,'$'
    badrommsg       db      'ROM cannot support patch',13,10,'$'
    badpatchmsg     db      'WARNING: OS/2 patch failed',13,10,'$'
    bad8042msg      db      '8042 time-out error',13,10,'$'
    completemsg     db      'OS/2 Patched',13,10
    finishedmsg     db      'Patching complete',13,10,'$'
    
    cseg    ends
    
            end     main

{% endraw %}

### Break The SPELL

So, for your debugging pleasure, I've set up an IBM PC (Model 5160)
to demonstrate Microsoft's `SPELL.COM` use of "CALL 5".  It's configured as follows:

    id: ibm5160
    type: pcx86
    debugger: true
    uncompiled: true
    commands: bp &060E:0005 "dh;h"
    config: /devices/pcx86/machine/5160/ega/640kb/debugger/machine.xml
    autoMount:
      A:
        name: PC DOS 2.00 (Disk 1)
      B:
        name: MS Word 3.00 (Disk 2)
    autoType: $date\r$time\rB:\rSPELL\r

This establishes a breakpoint on the "CALL 5" entry point inside the application's Program Segment Prefix (PSP);
the breakpoint dumps the previous 10 instructions and then halts.  The "uncompiled" version of PCx86 is being used
so that [BackTrack]({{ site.github.pages }}/machines/pcx86/#backtrack-support)&trade; information is available to the PCjs Debugger.
You can use the command `BC *` to clear all predefined breakpoints and allow the program to run normally.

To start the machine, click "Run" or use the Debugger's `G` command.

{% include machine.html id="ibm5160" %}

And if all this seems like much ado about nothing, well, then put your feet up for a few and enjoy Nina Simone's
"[I Put a Spell on You](https://en.wikipedia.org/wiki/I_Put_a_Spell_on_You)", which hit #23 on the
U.S. Billboard R&B chart in 1965.  That way, your time here won't be *completely* wasted.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ua2k52n_Bvw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
