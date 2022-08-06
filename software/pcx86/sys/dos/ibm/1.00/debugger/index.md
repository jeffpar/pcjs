---
layout: page
title: IBM PC DOS 1.00 with PCjs Debugger
permalink: /software/pcx86/sys/dos/ibm/1.00/debugger/
redirect_from:
  - /disks/pcx86/dos/ibm/1.00/
  - /disks/pc/dos/ibm/1.00/
machines:
  - id: ibm5150-pcdos100
    type: pcx86
    config: /machines/pcx86/machine/ibm/5150/mda/64kb/debugger/machine.json
    autoType: $date\r
---

{% include machine.html id="ibm5150-pcdos100" %}

### PC DOS 1.00 Boot Sector

The boot sector of the PC DOS 1.00 disk image contains the following bytes:

	00000000  eb 2f 14 00 00 00 60 00  20 37 2d 4d 61 79 2d 38  |./....`. 7-May-8|
	00000010  31 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |1...............|
	00000020  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	00000030  00 fa 8c c8 8e d8 ba 00  00 8e d2 bc 00 7c fb a1  |.............|..|
	00000040  06 7c 8e d8 8e c0 ba 00  00 8b c2 cd 13 72 41 e8  |.|...........rA.|
	00000050  58 00 72 fb 2e 8b 0e 02  7c 51 bb 00 00 33 d2 b9  |X.r.....|Q...3..|
	00000060  08 00 be 01 00 56 b0 01  b4 02 cd 13 72 22 5e 58  |.....V......r"^X|
	00000070  e8 e7 00 2b c6 74 14 fe  c5 b1 01 be 08 00 3b c6  |...+.t........;.|
	00000080  73 04 8b f0 eb 01 96 56  50 eb dd 2e ff 2e 04 7c  |s......VP......||
	00000090  be 44 7d b8 42 7d 50 32  ff ac 24 7f 74 0b 56 b4  |.D}.B}P2..$.t.V.|
	000000a0  0e bb 07 00 cd 10 5e eb  f0 c3 bb 00 00 b9 04 00  |......^.........|
	000000b0  b8 01 02 cd 13 1e 72 34  8c c8 8e d8 bf 00 00 b9  |......r4........|
	000000c0  0b 00 26 80 0d 20 26 80  8d 20 00 20 47 e2 f3 bf  |..&.. &.. . G...|
	000000d0  00 00 be 76 7d b9 0b 00  fc f3 a6 75 0f bf 20 00  |...v}......u.. .|
	000000e0  be 82 7d b9 0b 00 f3 a6  75 02 1f c3 be f9 7c e8  |..}.....u.....|.|
	000000f0  a5 ff b4 00 cd 16 1f f9  c3 0d 0a 4e 6f 6e 2d 53  |...........Non-S|
	00000100  79 73 74 65 6d 20 64 69  73 6b 20 6f 72 20 64 69  |ystem disk or di|
	00000110  73 6b 20 65 72 72 6f f2  0d 0a 52 65 70 6c 61 63  |sk erro...Replac|
	00000120  65 20 61 6e 64 20 73 74  72 69 6b 65 20 61 6e 79  |e and strike any|
	00000130  20 6b 65 79 20 77 68 65  6e 20 72 65 61 64 f9 0d  | key when read..|
	00000140  0a 00 cd 18 0d 0a 44 69  73 6b 20 42 6f 6f 74 20  |......Disk Boot |
	00000150  66 61 69 6c 75 72 e5 0d  0a 00 50 52 8b c6 bf 00  |failur....PR....|
	00000160  02 f7 e7 03 d8 5a 58 c3  52 6f 62 65 72 74 20 4f  |.....ZX.Robert O|
	00000170  27 52 65 61 72 20 69 62  6d 62 69 6f 20 20 63 6f  |'Rear ibmbio  co|
	00000180  6d b0 69 62 6d 64 6f 73  20 20 63 6f 6d b0 c9 00  |m.ibmdos  com...|
	00000190  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001a0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001b0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001c0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001d0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001e0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
	000001f0  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|

A number of people have already delved into the guts of the PC DOS 1.00 boot sector, including:

  - [Reverse-Engineering DOS 1.0 – Part 1: The Boot Sector (May 7, 2009 by Michael Steil)](http://www.pagetable.com/?p=165)
  - [The Boot Sector of IBM® Personal Computer™ DOS Version 1.00 (August 2, 2005 by Daniel B. Sedory)](http://thestarman.pcministry.com/DOS/ibm100/Boot.htm)

Let's start with Michael Steil's well-written reverse-engineered source code (designed for **NASM**, not **ASM** or **MASM**),
because it includes lots of commentary, allowing the boot sector to more or less speak for itself:

```nasm
;-----------------------------------------------------------------------------
; DOS 1.0 Boot Sector (disk image MD5 73c919cecadf002a7124b7e8bfe3b5ba)
;   http://www.pagetable.com/
;-----------------------------------------------------------------------------

                org     0x7C00

                jmp     short start

;-----------------------------------------------------------------------------

os_numsectors   dw 20                   ; how many sectors to read
os_offset       dw 0                    ; segment to load code into
os_segment      dw 0x60                 ; offset to load code into

                db " 7-May-81",0        ; timestamp
                times 31 db 0           ; padding

;-----------------------------------------------------------------------------

start           cli
                mov     ax, cs
                mov     ds, ax          ; DS := CS
                mov     dx, 0
                mov     ss, dx          ; SS := 0000
                mov     sp, 0x7C00      ; stack below code
                sti
                mov     ax, [os_segment]
                mov     ds, ax
                mov     es, ax          ; ES := DS := where to load DOS
                mov     dx, 0
                mov     ax, dx
                int     0x13            ; reset drive 0
                jc      disk_error
again           call    check_sys_files ; check for presence of IBMDOS/IBMBIO
                jc      again           ; not found, try another disk
                mov     cx, [cs:os_numsectors]
                push    cx              ; remaining sectors
                mov     bx, 0
                xor     dx, dx          ; drive 0, head 0
                mov     cx, 8           ; track 0, sector 8
                mov     si, 1           ; read 1 sector in first found
                push    si
                mov     al, 1           ; 1 sector
read_loop       mov     ah, 2
                int     0x13            ; read sector(s)
                jc      disk_error
                pop     si              ; sectors read
                pop     ax              ; remaining sectors
                call    add_si_sectors  ; bx += si*512
                sub     ax, si          ; remaining -= read
                jz      done            ; none left
                inc     ch              ; next track
                mov     cl, 1           ; start at sector 1
                mov     si, 8           ; read up to 8 sectors
                cmp     ax, si          ; how many are left to read?
                jae     at_least_8_left ; at least 8
                mov     si, ax          ; only read remaining amount
                jmp     short skip
at_least_8_left xchg    ax, si          ; read 8 sectors this time
skip            push    si              ; number of remaining sectors
                push    ax              ; number of sectors to read this time
                jmp     read_loop       ; next read
done            jmp     far [cs:os_offset]; jump to IBMBIO.COM

disk_error      mov     si, FAILURE     ; string to print
                mov     ax, rom_basic   ; put return address of "int 18" code
                push    ax              ; onto stack

;-----------------------------------------------------------------------------
; print zero-terminated string pointed to by DS:SI
;-----------------------------------------------------------------------------

print           xor     bh, bh          ; XXX unnecessary
print_loop      lodsb
                and     al, 0x7F        ; clear bit 7 XXX why is it set?
                jz      ret0            ; zero-termination
                push    si
                mov     ah, 0x0E
                mov     bx, 7           ; light grey, text page 0
                int     0x10            ; write character
                pop     si
                jmp     print_loop
ret0            retn

;-----------------------------------------------------------------------------
; test for IBMBIO.COM and IBMDOS.COM in the first two directory entries
;-----------------------------------------------------------------------------

check_sys_files mov     bx, 0           ; read to address 0 in the DOS segment
                mov     cx, 4           ; track 0, sector 4
                mov     ax, 0x0201
                int     0x13            ; read 1 sector
                push    ds
                jc      non_system_disk ; error case
                mov     ax, cs
                mov     ds, ax          ; DS := CS
                mov     di, 0
                mov     cx, 11          ; convert 11 bytes of first two
to_lower        or      byte [es:di], 0x20; directory entries to lowercase
                or      byte [es:di+0x20], 0x20
                nop                     ; XXX original assembler wasted a byte
                inc     di
                loop    to_lower
                mov     di, 0           ; first entry
                mov     si, IBMBIO_COM
                mov     cx, 11
                cld
                rep cmpsb               ; compare first entry with IBMBIO.COM
                jnz     non_system_disk
                mov     di, 0x20        ; second entry
                mov     si, IBMDOS_COM
                mov     cx, 11
                rep cmpsb               ; compare second entry with IBMDOS.COM
                jnz     non_system_disk
                pop     ds
                retn                    ; return with carry clear
non_system_disk mov     si, NON_SYSTEM_DISK
                call    print
                mov     ah, 0
                int     0x16            ; wait for key
                pop     ds
                stc
                retn                    ; return with carry set

;-----------------------------------------------------------------------------

NON_SYSTEM_DISK db 13,10
                db "Non-System disk or disk erro",'r'+0x80
                db 13,10
                db "Replace and strike any key when read",'y'+0x80
                db  13,10,0

;-----------------------------------------------------------------------------

rom_basic       int     0x18            ; ROM BASIC

;-----------------------------------------------------------------------------

FAILURE         db 13,10
                db "Disk Boot failur",'e'+0x80
                db 13,10,0

;-----------------------------------------------------------------------------

add_si_sectors  push    ax              ; bx += si*512
                push    dx
                mov     ax, si
                mov     di, 512
                mul     di
                add     bx, ax
                pop     dx
                pop     ax
                retn

;-----------------------------------------------------------------------------

                db "Robert O'Rear "

IBMBIO_COM      db "ibmbio  com"
                db 0xB0                 ; XXX unused
IBMDOS_COM      db "ibmdos  com"
                db 0xB0, 0xC9           ; XXX unused

;-----------------------------------------------------------------------------

                times 512-($-$$) db 0

;-----------------------------------------------------------------------------
```

Using the PCjs Debugger, we can examine the boot sector in its native environment:

	bp &0000:7C00 hit
	stopped
	AX=0000 BX=7C00 CX=0004 DX=0000 SP=0100 BP=E4B7 SI=0000 DI=0044 
	SS=0030 DS=0040 ES=0000 PS=F296 V0 D0 I1 T0 S1 Z0 A1 P1 C0 
	&0000:7C00 EB2F            JMP      7C31

	>> db 7c00 l200
	&0000:7C00  EB 2F 14 00 00 00 60 00-20 37 2D 00 02 01 01 00  ./....`. 7-.....
	&0000:7C10  02 40 00 40 01 FE 01 00-08 00 01 00 00 00 00 00  .@.@............
	&0000:7C20  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&0000:7C30  00 FA 8C C8 8E D8 BA 00-00 8E D2 BC 00 7C FB A1  .............|..
	&0000:7C40  06 7C 8E D8 8E C0 BA 00-00 8B C2 CD 13 72 41 E8  .|...........rA.
	&0000:7C50  58 00 72 FB 2E 8B 0E 02-7C 51 BB 00 00 33 D2 B9  X.r.....|Q...3..
	&0000:7C60  08 00 BE 01 00 56 B0 01-B4 02 CD 13 72 22 5E 58  .....V......r"^X
	&0000:7C70  E8 E7 00 2B C6 74 14 FE-C5 B1 01 BE 08 00 3B C6  ...+.t........;.
	&0000:7C80  73 04 8B F0 EB 01 96 56-50 EB DD 2E FF 2E 04 7C  s......VP......|
	&0000:7C90  BE 44 7D B8 42 7D 50 32-FF AC 24 7F 74 0B 56 B4  .D}.B}P2..$t.V.
	&0000:7CA0  0E BB 07 00 CD 10 5E EB-F0 C3 BB 00 00 B9 04 00  ......^.........
	&0000:7CB0  B8 01 02 CD 13 1E 72 34-8C C8 8E D8 BF 00 00 B9  ......r4........
	&0000:7CC0  0B 00 26 80 0D 20 26 80-8D 20 00 20 47 E2 F3 BF  ..&.. &.. . G...
	&0000:7CD0  00 00 BE 76 7D B9 0B 00-FC F3 A6 75 0F BF 20 00  ...v}......u.. .
	&0000:7CE0  BE 82 7D B9 0B 00 F3 A6-75 02 1F C3 BE F9 7C E8  ..}.....u.....|.
	&0000:7CF0  A5 FF B4 00 CD 16 1F F9-C3 0D 0A 4E 6F 6E 2D 53  ...........Non-S
	&0000:7D00  79 73 74 65 6D 20 64 69-73 6B 20 6F 72 20 64 69  ystem disk or di
	&0000:7D10  73 6B 20 65 72 72 6F F2-0D 0A 52 65 70 6C 61 63  sk erro...Replac
	&0000:7D20  65 20 61 6E 64 20 73 74-72 69 6B 65 20 61 6E 79  e and strike any
	&0000:7D30  20 6B 65 79 20 77 68 65-6E 20 72 65 61 64 F9 0D   key when read..
	&0000:7D40  0A 00 CD 18 0D 0A 44 69-73 6B 20 42 6F 6F 74 20  ......Disk Boot 
	&0000:7D50  66 61 69 6C 75 72 E5 0D-0A 00 50 52 8B C6 BF 00  failur....PR....
	&0000:7D60  02 F7 E7 03 D8 5A 58 C3-52 6F 62 65 72 74 20 4F  .....ZX.Robert O
	&0000:7D70  27 52 65 61 72 20 69 62-6D 62 69 6F 20 20 63 6F  'Rear ibmbio  co
	&0000:7D80  6D B0 69 62 6D 64 6F 73-20 20 63 6F 6D B0 C9 00  m.ibmdos  com...
	&0000:7D90  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&0000:7DA0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&0000:7DB0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&0000:7DC0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&0000:7DD0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&0000:7DE0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................
	&0000:7DF0  00 00 00 00 00 00 00 00-00 00 00 00 00 00 00 00  ................

NOTE: PCjs adds a BPB to the boot sector, which is why the first 32 bytes of the boot sector
appear slightly different from the original [dump](#pc-dos-100-boot-sector) above.  The addition of
a BPB makes the disk image mountable by modern operating systems and does not otherwise affect the
operation of the boot sector or any of the code below.

First, let's disassemble the code from `start` (0x7C31):

	>> u 7c31
	&0000:7C31 FA              CLI     
	&0000:7C32 8CC8            MOV      AX,CS
	&0000:7C34 8ED8            MOV      DS,AX
	&0000:7C36 BA0000          MOV      DX,0000
	&0000:7C39 8ED2            MOV      SS,DX
	&0000:7C3B BC007C          MOV      SP,7C00
	&0000:7C3E FB              STI     
	&0000:7C3F A1067C          MOV      AX,[7C06]
	&0000:7C42 8ED8            MOV      DS,AX
	&0000:7C44 8EC0            MOV      ES,AX
	&0000:7C46 BA0000          MOV      DX,0000
	&0000:7C49 8BC2            MOV      AX,DX
	&0000:7C4B CD13            INT      13
	&0000:7C4D 7241            JC       7C90
	&0000:7C4F E85800          CALL     7CAA
	&0000:7C52 72FB            JC       7C4F
	&0000:7C54 2E              CS:     
	&0000:7C55 8B0E027C        MOV      CX,[7C02]
	&0000:7C59 51              PUSH     CX
	&0000:7C5A BB0000          MOV      BX,0000
	&0000:7C5D 33D2            XOR      DX,DX
	&0000:7C5F B90800          MOV      CX,0008
	&0000:7C62 BE0100          MOV      SI,0001
	&0000:7C65 56              PUSH     SI
	&0000:7C66 B001            MOV      AL,01
	&0000:7C68 B402            MOV      AH,02
	&0000:7C6A CD13            INT      13
	&0000:7C6C 7222            JC       7C90
	&0000:7C6E 5E              POP      SI
	&0000:7C6F 58              POP      AX
	&0000:7C70 E8E700          CALL     7D5A
	&0000:7C73 2BC6            SUB      AX,SI
	&0000:7C75 7414            JZ       7C8B
	&0000:7C77 FEC5            INC      CH
	&0000:7C79 B101            MOV      CL,01
	&0000:7C7B BE0800          MOV      SI,0008
	&0000:7C7E 3BC6            CMP      AX,SI
	&0000:7C80 7304            JNC      7C86
	&0000:7C82 8BF0            MOV      SI,AX
	&0000:7C84 EB01            JMP      7C87
	&0000:7C86 96              XCHG     AX,SI
	&0000:7C87 56              PUSH     SI
	&0000:7C88 50              PUSH     AX
	&0000:7C89 EBDD            JMP      7C68
	&0000:7C8B 2E              CS:     
	&0000:7C8C FF2E047C        JMP      FAR [7C04]

Next, the code for `disk_error` (0x7C90):

	>> u 7c90
	&0000:7C90 BE447D          MOV      SI,7D44
	&0000:7C93 B8427D          MOV      AX,7D42
	&0000:7C96 50              PUSH     AX
	&0000:7C97 32FF            XOR      BH,BH
	&0000:7C99 AC              LODSB   
	&0000:7C9A 247F            AND      AL,7F
	&0000:7C9C 740B            JZ       7CA9
	&0000:7C9E 56              PUSH     SI
	&0000:7C9F B40E            MOV      AH,0E
	&0000:7CA1 BB0700          MOV      BX,0007
	&0000:7CA4 CD10            INT      10
	&0000:7CA6 5E              POP      SI
	&0000:7CA7 EBF0            JMP      7C99
	&0000:7CA9 C3              RET     

Next, the code for `check_sys_files` (0x7CAA):

	>> u 7caa
	&0000:7CAA BB0000          MOV      BX,0000
	&0000:7CAD B90400          MOV      CX,0004
	&0000:7CB0 B80102          MOV      AX,0201
	&0000:7CB3 CD13            INT      13
	&0000:7CB5 1E              PUSH     DS
	&0000:7CB6 7234            JC       7CEC
	&0000:7CB8 8CC8            MOV      AX,CS
	&0000:7CBA 8ED8            MOV      DS,AX
	&0000:7CBC BF0000          MOV      DI,0000
	&0000:7CBF B90B00          MOV      CX,000B
	&0000:7CC2 26              ES:     
	&0000:7CC3 800D20          OR       [DI],20
	&0000:7CC6 26              ES:     
	&0000:7CC7 808D200020      OR       [DI+0020],20
	&0000:7CCC 47              INC      DI
	&0000:7CCD E2F3            LOOP     7CC2
	&0000:7CCF BF0000          MOV      DI,0000
	&0000:7CD2 BE767D          MOV      SI,7D76
	&0000:7CD5 B90B00          MOV      CX,000B
	&0000:7CD8 FC              CLD     
	&0000:7CD9 F3              REPZ    
	&0000:7CDA A6              CMPSB   
	&0000:7CDB 750F            JNZ      7CEC
	&0000:7CDD BF2000          MOV      DI,0020
	&0000:7CE0 BE827D          MOV      SI,7D82
	&0000:7CE3 B90B00          MOV      CX,000B
	&0000:7CE6 F3              REPZ    
	&0000:7CE7 A6              CMPSB   
	&0000:7CE8 7502            JNZ      7CEC
	&0000:7CEA 1F              POP      DS
	&0000:7CEB C3              RET
	
	&0000:7CEC BEF97C          MOV      SI,7CF9
	&0000:7CEF E8A5FF          CALL     7C97
	&0000:7CF2 B400            MOV      AH,00
	&0000:7CF4 CD16            INT      16
	&0000:7CF6 1F              POP      DS
	&0000:7CF7 F9              STC     
	&0000:7CF8 C3              RET     

Then `NON_SYSTEM_DISK` (0x7CF9):

	>> db 7cf9 l49
	&7CF9  0D 0A 4E 6F 6E 2D 53 79-73 74 65 6D 20 64 69 73  ..Non-System dis
	&7D09  6B 20 6F 72 20 64 69 73-6B 20 65 72 72 6F F2 0D  k or disk erro..
	&7D19  0A 52 65 70 6C 61 63 65-20 61 6E 64 20 73 74 72  .Replace and str
	&7D29  69 6B 65 20 61 6E 79 20-6B 65 79 20 77 68 65 6E  ike any key when
	&7D39  20 72 65 61 64 F9 0D 0A-00 

And `FAILURE` (0x7D44):

	>> db 7d44 l16
	&7D44  0D 0A 44 69 73 6B 20 42-6F 6F 74 20 66 61 69 6C  ..Disk Boot fail
	&7D54  75 72 E5 0D 0A 00 

And finally, `IBMBIO_COM` (0x7D76) and `IBMDOS_COM` (0x7D82):

	>> db 7d68
	&7D68  52 6F 62 65 72 74 20 4F-27 52 65 61 72 20 69 62  Robert O'Rear ib
	&7D78  6D 62 69 6F 20 20 63 6F-6D B0 69 62 6D 64 6F 73  mbio  com.ibmdos
	&7D88  20 20 63 6F 6D B0 C9 00-00 00 00 00 00 00 00 00    com...........

Interestingly, the [COMPAQ MS-DOS 1.10 Boot Sector](/software/pcx86/sys/dos/compaq/1.10/#compaq-ms-dos-110-boot-sector)
is completely different from all PC DOS 1.x boot sectors.  The COMPAQ boot sector supports both 160Kb and 320Kb
formats with less code and without requiring "patches", although that flexibility did require reading the first
FAT sector, which PC DOS 1.x boot sectors did not do.
