---
layout: page
title: "PC-SIG Diskette Library (Disk #3052)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3052/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3052"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE3052.TXT

{% raw %}
```
Disk No: 3052                                                           
Disk Title: ReSizeable RAMDisk                                          
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: ReSizeable RAMDisk                                       
Author Version: 1.30                                                    
Author Registration: None.                                              
Special Requirements: No special requirements to use; Borland C++ or TAS
                                                                        
RSDISK, the RESIZABLE RAMDISK is the chain letter of C programming.     
While it is a working RAM disk program, it was developed with the       
idea that other programmers would take the current version and improve  
it! It currently supports extended memory; 32-bit sector addressing     
(32MB RAM disks are possible); configurable sector and cluster size;    
multiple FATs and root directory entry counts; write protection; and    
predefined DOS disk-like formats. The author hopes that someone will    
add EMS support, bank-switch memory support, low memory support, and    
the ability to resize without memory loss. RSDISK comes with both       
assembly and C source code.                                             
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  PC-SIG Disk #3052 RESIZEABLE RAMDISK  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To print the installation instructions, type:                           ║
║                                     COPY SRDISK.DOC PRN  (press Enter)  ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1992, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SRDISK.ASM

{% raw %}
```
;
;       ReSizeable RAMDisk device driver for XMS memory
;
;       Copyright (c) 1992 Marko Kohtala
;
;       Some documentation and license available in accompanying file
;       SRDISK.DOC. If not, contact author by sending E-mail from
;
;               Internet, Bitnet etc. to 'Marko.Kohtala@hut.fi'
;               CompuServe to '>INTERNET:Marko.Kohtala@hut.fi'
;
;       or by calling Airline QBBS, 24H, HST, V.32, V.42, MNP,
;       +358-0-8725380, and leaving mail to me, Marko Kohtala.
;
;       In general, this is FREEWARE.
;
;       To compile with TASM: tasm /m2 srdisk.asm
;                             tlink /t srdisk.obj,srdisk.sys
;
; History:
; 1.00  Initial release
; 1.10  Added into IOCTL_msg media_change byte, that must be changed to
;       -1 by srdisk if media changed. Changed header version to SRD 1.10.
; 1.20  Fixed name of program by adding the missing 'Re' to 'Sizeable'.
;       Upgraded IOCTL_msg_s to version 1.20 by adding byte to tell usable
;       memory types.
;       Updated to work with DOS versions 2.x-5.x - not tested.
; 1.30
;       Major redesign of the reformatting system. Ioctl is no longer used.
;       New data structures of version V_FORMAT 0 (beta format).
;       Support for multiplex interrupt.
;       Support for chaining of drivers for different memory to same disk.
;       Support for DOS 4+ 32-bit sector addresses.
;       [Allow forcing drive to some drive letter (even replace DOS drives).]
;       Int 19 hooking is optional by defining HOOKINT19 to 0.
;       Added if ... endif around all memory specific code to ease
;        later adding of other memory support code.
;       Fixed parameter reading to abort on every ctrl-character other
;        than tab. DOS 5 could end line with LF if no parameters and CR if
;        there were parameters. Now even NUL can end the line.

SRD_VERSION     equ "1.30"      ; FOUR LETTER VERSION STRING

; General capabilities in conf.c_flags

C_APPENDED      equ 1   ; Capable of having appended drivers
C_MULTIPLE      equ 2   ; Capable of driving many disks
C_32BITSEC      equ 4   ; Capable of handling over 32-bit sector addresses
C_UNKNOWN       equ 0xF8

; What this driver can actually do
; Currently compiled for only C_32BITSEC, since no drivers for
; any other memory available and thus C_APPENDED is useless

;CAPABLE         equ C_APPENDED or C_32BITSEC
CAPABLE         equ C_32BITSEC

; Boolean
TRUE    EQU 1
FALSE   EQU 0


; What memory this driver supports

XMS_MEMORY      equ     TRUE

; Some important internal settings
MULTIPLEXAH     equ     72h             ; Multiplex int 2F AH parameter
V_FORMAT        equ     0               ; config_s format version used here

HOOKINT19       equ     FALSE           ; Hook int 19 if TRUE

DEBUGGING       equ     FALSE
DEBUGINIT       equ     FALSE

; Derived definitions

DR_ATTRIBUTES = 0800h                   ; Removable media

if CAPABLE and C_32BITSEC
DR_ATTRIBUTES = DR_ATTRIBUTES or 2      ; 32-bit addr
endif

if XMS_MEMORY
.286c
MEMSTR  equ 'XMS '      ; Define 4 char memory type string
else
  %out Memory defined by MEMORY not supported
  .err
endif

if DEBUGGING
debug   macro char,num
        push ax
        push dx
        mov dx,num
        mov al,char
        call debug_c
        pop dx
        pop ax
        endm
else
debug   macro char
        endm
endif ;DEBUGGING

d_seg           segment para public
                assume ds:d_seg, cs:d_seg

                org     0
; The following is to be considered as both a device driver header and
; as a starting point for the configuration table. This driver will be
; identified by its segment address and this structure must be at offset
; 0.

                ; Device driver header
drhdr_next      dd      -1              ; Pointer to next device (now last)
drhdr_attr      dw      DR_ATTRIBUTES
drhdr_strategy  dw      offset strategy ; Offset to strategy function
drhdr_commands  dw      offset commands ; Offset to commands function
drhdr_units     db      1               ; Number of units

; The rest has four functions to be considered
;  1) usable as device driver name if this driver is changed
;     into character device on init.
;  2) usable as a label to be returned in media check call
;  3) identifies this device driver as SRDISK driver by always having
;     the letters SRD at offset dr_ID
;  4) identifies the memory used by the 4 char string at offset dr_memory

dr_volume       label byte
dr_ID           db      'SRD'           ; SRDISK identification (3 char)
dr_memory       db      MEMSTR          ; Memory type identifier (4 char)
dr_version      db      SRD_VERSION     ; Device driver version (4 char)
                db      0               ; null to end volume label
dr_v_format     db      V_FORMAT        ; Configuration format version
dr_conf         dw      offset conf     ; Pointer to drive configuration


;**************************************************************************
;
;               I/O ROUTINE TO THE RAM DISK
;
; This routine will read a group of sectors inside this part of
; the ram disk. If starting sector is not on this part of the disk,
; return without error with 0 sectors transferred. If not all sectors
; are on this part of the disk, transfer as many as can and report the
; number of sectors transferred.
;
; On entry
;   bh - 0 then read, else write
;   cx - number of sectors
;   dx:ax - starting sector
;   es:di - transfer buffer
;
; Preserve
;   es, ds
;   si, di
;
; Return
;   - carry clear if no fatal error, transferred sector count in ax
;       (if starting sector not in this part of disk, return ax = 0)
;   - carry set and ax = 0 on fatal error
;
;**************************************************************************

if XMS_MEMORY
disk_IO         proc far
                push ds
                push di
                push si

                push cs                         ; Make ds point to our data
                pop ds

                mov IO_startl,ax
                mov IO_starth,dx
                debug 'a',ax
                debug 'd',dx
                debug 'c',cx

                cmp     ax,conf.c_sectorsl      ; Starting sector on disk?
                sbb     dx,conf.c_sectorsh
                jb disk_IO4                     ; Yes

                debug 'O',ax
                xor ax,ax                       ; No, 0 sectors transferred
                clc                             ;  No fatal error
                jmp disk_IOx                    ;  Exit

disk_IO4:       mov dx,IO_starth
                add     ax,cx                   ; Count ending sector
                adc     dx,0
                cmp dx,conf.c_sectorsh          ; Ending sector on disk?
                jb disk_IO1                     ; Jump if is
                jne disk_IO5
                sub     ax,conf.c_sectorsl
                jbe     disk_IO1                ; Jump if is
disk_IO5:
                sub cx,ax                       ; Count how many we CAN transfer
                debug 'T',cx
disk_IO1:
                mov IO_sectors,cx               ; Report # of transferred
                mov     ax,cx                   ; Count number of bytes to move
                mul     conf.c_BPB_bps
                mov     si,offset XMS_cblk
                mov     [si].XMS_sizel,ax       ; Number of bytes to move
                mov     [si].XMS_sizeh,dx

                mov ax,IO_starth                ; Count starting byte
                mul conf.c_BPB_bps
                mov cx,ax
                mov ax,IO_startl
                mul conf.c_BPB_bps
                add dx,cx                       ; dx:ax is starting byte
  
                or      bh,bh                   ; Input/output?
                mov     bx,XMS_handle
                jnz     disk_IO2                ; Jump if write
                                                ; -- Read
                mov     [si].XMS_shandle,bx     ; Source in XMS
                mov     [si].XMS_soffl,ax
                mov     [si].XMS_soffh,dx
                mov     [si].XMS_dhandle,0      ; Destination in main memory
                mov     [si].XMS_doffl,di
                mov     [si].XMS_doffh,es
                jmp     disk_IO3
disk_IO2:                                       ; -- Write
                mov     [si].XMS_shandle,0      ; Destination in main memory
                mov     [si].XMS_soffl,di
                mov     [si].XMS_soffh,es
                mov     [si].XMS_dhandle,bx     ; Source in XMS
                mov     [si].XMS_doffl,ax
                mov     [si].XMS_doffh,dx
disk_IO3:
                mov     ah,0Bh                  ; Move XMS block
                call    dword ptr XMS_entry
                shr     ax,1
                cmc                             ; Carry set if err
                mov     ax,IO_sectors           ; Return # of sectors xferred
                jnc disk_IOx
                  xor ax,ax
disk_IOx:       pop si                          ; Restore original si,di,ds
                pop di                          ;  es was not changed
                pop ds
ret_far:        ret
disk_IO         endp

  
;**************************************************************************
;
;               EXTERNAL MEMORY ALLOCATION ROUTINE
;
; Allocate requested amount of memory. If memory is available in chunks,
; the amount can be rounded up. If not enough memory available, allocate
; as much as possible or just report the amount that was previously
; allocated. It is expected that at least as much memory can be allocated
; as there previously was. Reallocation should not destroy memory
; contents - it is essential to be able to resize a disk without loosing
; the contents (a feature under development).
;
; On entry
;   DWORD [sp+4] - Kbytes to allocate
;
; Preserve
;   es, ds
;   si, di
;
; Return dx:ax = Kbytes allocated
;
;**************************************************************************

malloc          proc C far
                arg kbytes:dword
                assume ds:nothing
                test word ptr kbytes+2,-1       ; Over 0FFFFh K is impossible
                jnz malloc_fail
                mov bx,word ptr kbytes          ; New disk size
                mov dx,word ptr XMS_handle      ; Handle to the memory
                mov ah,0Fh                      ; Reallocate
                call XMS_entry
                xor dx,dx                       ; Zero the high word of return
                or ax,ax
                jnz malloc_ok

malloc_fail:    mov ax,word ptr conf.c_size     ; Fail, return current
                ret

malloc_ok:      mov ax,word ptr kbytes          ; Ok, return requested
                ret

                assume ds:d_seg
malloc          endp


;**************************************************************************
;
;                       Warm Boot of Machine
;
; Release used XMS memory on warm boot.
;
; I guess this may be important if some virtual machine (VM) in some
; multitasking system has installed this driver and the VM is ended.
; Without this the other VMs would loose the space reserved for RAM disk
; in this VM.
;**************************************************************************
  
if HOOKINT19

int_19_entry    proc far
                assume ds:nothing
                pusha   ; If XMS used, it must be 286 or above
                mov     dx,XMS_handle
                cmp     dx,-1
                je      int19_1                 ; Jump if no XMS handle
		mov	ah,0Ah
                call    XMS_entry               ; Free XMS memory
int19_1:
                xor     ax,ax
		mov	ds,ax
                mov     ax,old_int19_off
		cli				; Disable interrupts
                mov     ds:[19h*4],ax           ; for the time to write
                mov     ax,old_int19_seg        ; old interrupt vector back
                mov     ds:[19h*4+2],ax
                popa                            ; Enable interrupts
                jmp     old_int19
                assume ds:d_seg
int_19_entry    endp

endif

;**************************************************************************
;
;                       Local data
;
; This data (as some from the Configuration tables too) is used by the
; two above routines that are needed resident in any case.
;
;**************************************************************************

XMS_block       struc
XMS_sizel       dw ?
XMS_sizeh       dw ?
XMS_shandle     dw ?
XMS_soffl       dw ?
XMS_soffh       dw ?
XMS_dhandle     dw ?
XMS_doffl       dw ?
XMS_doffh       dw ?
XMS_block       ends

XMS_cblk        XMS_block <>            ; XMS move command data structure
XMS_entry       dd      ?               ; XMS driver entry point
XMS_handle      dw      -1              ; XMS handle to disk memory

IO_sectors      dw      ?               ; Temp storage for # of sec xferred
IO_startl       dw      ?               ; Temp storage for starting sector
IO_starth       dw      ?               ; Temp storage for starting sector

else ; if XMS_MEMORY
  %out Memory defined by MEMORY not supported
  .err
endif

if HOOKINT19
old_int19       label dword             ; Address of old INT 19
old_int19_off   dw      -1
old_int19_seg   dw      -1
endif

;**************************************************************************
;
;                       Debugging code
;
; This code prints out a character and a word in hex. This code can be
; used using "debug char,word" macro in the code to give some output of
; the actions device driver is doing.
;
; A color display is assumed with 80 characters on a row and 25 rows.
;
;**************************************************************************

if DEBUGGING
                assume ds:nothing

debug_c         proc near
                push es
                push di

                mov ah,d_attr           ; Load color attribute
                mov di,0B800h           ; Load screen segment (assumes color)
                mov es,di
                mov di,d_loc            ; Load line
                cmp di,26*160           ; Below screen?
                jb debug_c1
                  mov di,2*160          ; Yes, move to third line (for scroll off)
                  mov d_loc,di
                  add ah,10h            ; Change color
                  cmp ah,70h
                  jb debug_c2
                    sub ah,60h
debug_c2:         mov d_attr,ah
debug_c1:
                add di,d_col            ; Advance to right column
                mov es:[di],ax          ; Print error letter

                call debug_x            ; Print high byte
                mov dh,dl
                call debug_x            ; Print low byte

                add d_loc,160           ; Next line

                pop di
                pop es
                ret
debug_c         endp

debug_x         proc near               ; Print a byte in hex
                mov al,dh
                shr al,1
                shr al,1
                shr al,1
                shr al,1
                call debug_x1
                mov al,dh
debug_x1:       and al,0Fh              ; Print a hex digit
                cmp al,10
                jae debug_x2
                  add al,'0'
                  jmp debug_x3
debug_x2:       add al,'A'-10
debug_x3:
                inc di
                inc di
                mov es:[di],ax
                ret
debug_x         endp

d_loc   dw 2*160
d_col   dw 150
d_attr  db 40h

                assume ds:d_seg

endif ; DEBUGGING


;**************************************************************************
;
;                       Configuration tables
;
; This structure holds all the formatting data used by the formatter.
; The formatter is passed a pointer to this data and it modifies it
; directly. For this arrangement to work THE BELOW TABLE MAY NOT BE
; MODIFIED WITHOUT PROPER CHANGES IN SRDISK.C. The table contains
; version number which is to be changed when a change is made to this
; structure.
;
; Only the first fields up to label addition_eor is resident and used in
; in every case. The rest is used only in the main driver in a chain of
; RAM disk drivers.
;
; !!! The formatter will use any initial values in this structure as
; default values i.e. set all needed values here !!!
;**************************************************************************

READ_ACCESS     equ     1       ; Bit masks for the RW_access
WRITE_ACCESS    equ     2

config_s struc
c_drive         db      ?               ; Drive letter
c_flags         db      CAPABLE         ; Misc capability flags
c_disk_IO       dd      disk_IO         ; disk_IO entry
c_malloc        dw      malloc          ; malloc entry offset (in DS/CS)
c_next          dw      0               ; Segment of next driver in chain
c_maxK          dd      0FFFFh          ; Maximum allowed size
c_size          dd      0               ; Current allocated size in Kbytes
c_sectorsl      dw      0               ; Sectors in this driver (low word)
c_sectorsh      dw      0               ; Sectors in this driver (high word)

c_BPB_bps       dw      128             ; Sector size
c_BPB_spc       db      4               ; Cluster size 4*128 = 512
c_BPB_reserved  dw      1               ; The boot sector is reserved
c_BPB_FATs      db      1               ; One FAT copy
c_BPB_dir       dw      64              ; 64 entries in root directory
c_BPB_sectors   dw      0               ; BPB number of sectors on disk
c_BPB_media     db      0FAh            ; Media is RAM DISK
c_BPB_FATsectors dw     ?               ; Sectors per one FAT
c_BPB_spt       dw      -1              ; Sectors per track (imaginary)
c_BPB_heads     dw      1               ; Number of heads (imaginary)
c_BPB_hiddenl   dw      0               ; # of hidden sectors (low word) (imag)
c_BPB_hiddenh   dw      0               ; # of hidden sectors (high word)
c_BPB_tsectorsl dw      0               ; 32-bit # of sectors (low word)
c_BPB_tsectorsh dw      0               ; 32-bit # of sectors (high word)

c_tsize         dd      0               ; Total size in Kbytes (all drivers)

c_RW_access     db      00b             ; B0 = read, B1 = write (disabled now)
c_media_change  db      1               ; -1 if media changed, 1 if not
c_open_files    dw      0               ; Files currently open on drive
c_next_drive    dw      0               ; Segment of next SRDISK drive
config_s ends

conf            config_s <>

appended_eor    equ conf.c_BPB_spc      ; End of resident for appended driver


;**************************************************************************
;
;               Other internal and resident data
;
; The order of this data is not significant as it will not be used outside
;
;**************************************************************************

BPB             equ     byte ptr conf.c_BPB_bps
pBPB            dw      offset BPB      ; Pointer to BPB (for cmd_init)

old_multiplex   dd      ?               ; Multiplex hook

if CAPABLE and C_APPENDED
xaddr_off       dw      ?               ; Temp data for cmd_io
xaddr_seg       dw      ?
xsecl           dw      ?
xsech           dw      ?
endif

req_ptr         dd      ?               ; Request structure pointer

                ; Pointers to commands
command_tbl     dw      cmd_init             ;  0 Init
                dw      cmd_media            ;  1 Media
                dw      cmd_BPB              ;  2 Build BPB
                dw      cmd_unknown          ;  3 IOCTL input
                dw      cmd_input            ;  4 Input
                dw      cmd_unknown          ;  5 nondest input (char)
                dw      cmd_unknown          ;  6 input status (char)
                dw      cmd_unknown          ;  7 input flush (char)
                dw      cmd_output           ;  8 Output
                dw      cmd_output           ;  9 Output with verify
                dw      cmd_unknown          ; 10 output status (char)
                dw      cmd_unknown          ; 11 output flush (char)
                dw      cmd_unknown          ; 12 IOCTL output
                dw      cmd_open             ; 13 Open device
                dw      cmd_close            ; 14 Close device
                dw      cmd_removable        ; 15 Removable media check

HIGH_CMD        EQU ($-offset command_tbl)/2
  
;**************************************************************************
;
;                       Set request header address
;
; Called by DOS to set the request structure pointer
;
;**************************************************************************
  
strategy        proc far
                mov     word ptr cs:req_ptr,bx
                mov     word ptr cs:req_ptr+2,es
                ret
strategy	endp
  
  
;**************************************************************************
;
;                       Commands
;
; Called by DOS. Requested action defined in structure pointed by req_ptr.
;
;**************************************************************************
  
commands        proc far
                assume ds:nothing
		push	ax
                push    bx
		push	cx
		push	dx
                push    si
		push	di
		push	ds
		push	es
                cld
                lds     si,cs:req_ptr
                ; We trust Microsoft that the unit is right at [req_ptr]+1
                mov     cx,[si+12h]             ; Sectors/Cmd line/BPB pointer
                mov     dx,[si+14h]             ; Start sector/Device number
                mov     bl,[si+2]               ; Command
                cmp     bl,HIGH_CMD             ; Is command supported?
                ja      cmd_unknown             ; Jump if not
                xor     bh,bh                   ; Count index to command_tbl
                shl     bx,1
                les     di,dword ptr [si+0Eh]   ; ES:DI = transfer address
		push	cs
                pop     ds                      ; DS to local data segment
                assume ds:d_seg
                jmp     word ptr [command_tbl+bx] ; Do command
cmd_unknown:
                assume ds:nothing
                mov     al,3
                jmp     cmd_error
cmd_IOerr:
                lds     bx,req_ptr
                mov     word ptr [bx+12h],0     ; Sector count zero
cmd_error:
                mov     ah,81h                  ; ERROR and DONE
                jmp     cmd_ret

cmd_removable:  ; Enough to return DONE without BUSY flag set
cmd_ok:
                mov     ah,1                    ; DONE
cmd_ret:
                lds     bx,req_ptr
                mov     [bx+3],ax               ; save status
		pop	es
		pop	ds
		pop	di
                pop     si
		pop	dx
		pop	cx
                pop     bx
		pop	ax
		retf				; Return far
                assume ds:d_seg
commands	endp

;**************************************************************************
;
;               Media Check command
;
;**************************************************************************

cmd_media       proc near
                les     bx,req_ptr

                mov     ax,100h                 ; DONE status
                mov     dh,conf.c_media_change  ; Read the change return

                test    conf.c_RW_access,READ_ACCESS
                jnz     cmd_media1
                mov     ax,8102h                ; "Device not ready" status
                mov     dh,-1                   ; "Changed"
cmd_media1:
                mov     es:[bx+0Eh],dh
                mov     word ptr es:[bx+0Fh],offset dr_volume
                mov     es:[bx+11h],cs
                jmp     cmd_ret
cmd_media       endp


;**************************************************************************
;
;               Build BPB command
;
;**************************************************************************

cmd_BPB         proc near
                les     bx,req_ptr
                mov     word ptr es:[bx+12h],offset BPB
                mov     es:[bx+14h],cs
                mov     conf.c_open_files,0  ; Reset open files to 0
                mov     conf.c_media_change,1 ; Media not changed
                test    conf.c_RW_access,READ_ACCESS
                jz      cmd_BPB1
                jmp     cmd_ok
cmd_BPB1:
                mov     al,2                    ; "Device not ready"
                jmp     cmd_error
cmd_BPB         endp


;**************************************************************************
;
;               Device Open command
;
;**************************************************************************

cmd_open        proc near
                inc     conf.c_open_files
                jmp     cmd_ok
cmd_open        endp


;**************************************************************************
;
;               Device Close command
;
;**************************************************************************

cmd_close       proc near
                cmp     conf.c_open_files,0
                jz      cmd_close1
                dec     conf.c_open_files
cmd_close1:
                jmp     cmd_ok
cmd_close       endp


;**************************************************************************
;
;               INPUT command
;
;**************************************************************************

cmd_input       proc near
                test    conf.c_RW_access,READ_ACCESS
                jz      cmd_input1
                xor     bh,bh
                jmp     cmd_io
cmd_input1:
                mov     al,2                    ; "Device not ready"
                jmp     cmd_IOerr
cmd_input       endp


;**************************************************************************
;
;               OUTPUT command
;
;**************************************************************************

cmd_output      proc near
                mov     al,0                    ; "Write protect violation"
                mov     bh,1
                test    conf.c_RW_access,WRITE_ACCESS
                jnz cmd_io
                  jmp cmd_output2
cmd_io:
                ; BH    - read/write
                ; CX    - sectors
                ; ES:DI - transfer address
                ; DS    = CS

                mov ax,cx                       ; Count number of bytes to move
                mul conf.c_BPB_bps
                jc cmd_output4                  ; Is it too much? (dx != 0)

                ; check transfer address and count that they do not
                ; exceed segment limit
                add ax,di                       ; (dx = 0 after the mul)
                jnc cmd_output5
cmd_output4:
                mov ax,di                       ; How many bytes CAN we move?
                xor ax,-1
                xor dx,dx                       ; How many sectors?
                div conf.c_BPB_bps
                mov cx,ax
cmd_output5:
                push es
                les si,req_ptr
                mov word ptr es:[si+12h],dx     ; Xferred 0 sectors so far
                cmp byte ptr es:[si],1Ah        ; Do we use 32-bit sec. address?
                jbe cmd_output3
                  debug '3',0
                  mov ax,es:[si+1Ah]            ; Load 32-bit sec. address
                  mov dx,es:[si+1Ch]
                  jmp cmd_output8
cmd_output3:
                mov ax,es:[si+14h]              ; Load 16-bit sec. address
                xor dx,dx
cmd_output8:
                pop es

if CAPABLE and C_APPENDED

                mov si,offset conf
                mov xaddr_off,di
                mov xaddr_seg,es
                mov xsecl,ax
                mov xsech,dx
                ; BH    - read/write
                ; CX    - sectors
                ; DS:SI - conf of current driver (main here)

cmd_output7:
                push bx
                push cx
                call [si].c_disk_IO
                pop cx
                pop bx

                les di,cs:req_ptr               ; Increment number of sectors
                add word ptr es:[di+12h],ax     ;  actually transferred

                jc cmd_output1                  ; I/O error

                sub cx,ax                       ; All transferred?
                jbe cmd_output6                 ;  yes, so exit

                debug 'N',ax
                push ax
                mul [si].c_BPB_bps              ; Increment transfer offset
                add cs:xaddr_off,ax             ;  which can not exceed 0FFFFh
                pop ax

                xor dx,dx
                add ax,cs:xsecl                 ; Count new starting sector
                adc dx,cs:xsech
                sub ax,conf.c_sectorsl          ; Subtract passed sectors
                sbb dx,conf.c_sectorsh
                mov cs:xsecl,ax                 ; And store the result
                mov cs:xsech,dx

                mov es,cs:xaddr_seg             ; Load these ready for disk_IO
                mov di,cs:xaddr_off
                mov ds,[si].c_next              ; Find next driver
                mov si,dr_conf
                or si,si
                jnz cmd_output7
                ; there is no next driver - sectors not found!
                debug 'E',cx

else ;if CAPABLE and C_APPENDED

                push cx
                call disk_IO
                pop cx
                les si,cs:req_ptr               ; Return number of sectors
                mov word ptr es:[si+12h],ax     ;  actually transferred
                jc cmd_output1                  ; I/O error
                cmp ax,cx
                je cmd_output6
endif

cmd_output1:
                debug 'S',ax
                mov     al,8                    ; "Sector not found"
cmd_output2:
                jmp     cmd_IOerr
cmd_output6:
                jmp     cmd_ok
cmd_output      endp
  

;**************************************************************************
;
;               MULTIPLEX server
;
;**************************************************************************

multiplex       proc far
                cmp ax,MULTIPLEXAH * 100h
                jne mplex_old
                mov al,-1               ; Tell we are installed
                push cs                 ; Tell our segment
                pop es
                iret
mplex_old:
                jmp cs:old_multiplex
multiplex       endp


;**************************************************************************
;**************************************************************************
;**************************************************************************
;**************************************************************************
;
;               INITIALIZATION TIME CODE
;
; This code and data is removed from the memory after driver is
; initialized.
;**************************************************************************

end_of_resident label byte      ; MARKS THE END OF RESIDENT PORTION OF DRIVER

def_drive       db 'C'                  ; Default drive, where to install

main_config     dd      ?               ; Pointer to main configuration table

FLAG_1ST        EQU 1                   ; First SRDISK driver
FLAG_FORCEDRIVE EQU 2                   ; Force drive letter (in s_drive)
FLAG_APPEND     EQU 4                   ; Append to other SRDISK driver
FLAG_APPENDED   EQU 8                   ; Appended to other SRDISK driver
flags           db 0

;**************************************************************************
;
;                       prints macro
;
; This macro is used by initialization routines to display text.
; dx must point to the '$' terminated text about to be displayed.
;**************************************************************************
  
prints        macro
		mov	ah,9
                int     21h
              endm
  
if DEBUGINIT
print_x         proc near               ; Print a dword in hex
print_lx:       push ax
                mov ax,dx
                call print_sx
                mov ah,2
                mov dl,':'
                int 21h
                pop ax
print_sx:                               ; Print a word in hex
                push ax
                mov al,ah
                call print_cx
                pop ax
print_cx:                               ; Print a byte in hex
                push ax
                shr al,1
                shr al,1
                shr al,1
                shr al,1
                call print_x1
                pop ax
print_x1:       and al,0Fh              ; Print a hex digit
                cmp al,10
                jae print_x2
                  add al,'0'
                  jmp print_x3
print_x2:       add al,'A'-10
print_x3:       mov ah,2
                push dx
                mov dl,al
                int 21h
                pop dx
                ret
print_x         endp

idebugc  macro chr
        push ax
        mov al,chr
        call print_cx
        pop ax
endm

idebugs  macro wrd
        push ax
        mov ax,wrd
        call print_sx
        pop ax
endm

idebugl  macro high,low
        push ax
        push dx
        mov ax,low
        mov dx,high
        call print_lx
        mov ah,2
        mov dl,' '
        int 21h
        pop ax
        pop dx
endm

else

idebugc  macro chr
endm

idebugs  macro wrd
endm

idebugl  macro high,low
endm

endif

  
;**************************************************************************
;
;                       INIT command
;
; Init command does the following:
;  - displays sign-on message
;  - checks DOS version. This driver is built in a way that requires
;    at least dos version 2.00. I'm not sure whether even that is enough.
;  - determine which drive we are by default
;  - read command line
;    - abort on syntax errors
;  - initialize memory to 0K disk
;  - initialize multiplex interrupt
;  - do hooks to other SRDISK drivers (specified in command line)
;  - hook INT 19 bootstrap interrupt
;  - fills in the request header
;**************************************************************************
  
cmd_init        proc near
                mov     dx,offset s_sign_on     ; "ReSizeable RAMdisk ver..."
                prints

                mov     ah,30h
                int     21h                     ; Get DOS version number

		xchg	ah,al
                idebugs ax
                cmp     ax,200h
                jb      cmd_init1
		cmp	ax,600h
                jb      cmd_init2
cmd_init1:
                mov     dx,offset errs_eDOS
                jmp     cmd_init_err
cmd_init2:
                cmp ax,400h
                jae cmd_init4

                and conf.c_flags,NOT C_32BITSEC
cmd_init4:
                les     si,req_ptr
                idebugl es,si
                idebugc <byte ptr es:[si]>
                idebugc <byte ptr es:[si+2]>
                idebugs <word ptr es:[si+16h]>
                cmp     byte ptr es:[si],16h    ; Device number supported?
                mov al,'$'                      ; Unknown drive
                jbe     cmd_init8               ; No, make a guess

                mov     al,es:[si+16h]          ; Get drive number
                add al,'A'
cmd_init8:
                mov s_drive,al
                mov def_drive,al
                jmp cmd_init5

cmd_init5:      call init_read_cmdline
                jc cmd_init_err

                call    init_memory
                jc      cmd_init_err

                call init_mplex
                jc cmd_init_err

                call init_hooks
                jc cmd_init_err

if HOOKINT19
                call    set_int19
endif
                mov     word ptr conf.c_disk_IO+2,cs

                mov al,s_drive
                mov conf.c_drive,al

                test flags,FLAG_APPENDED
                jz cmd_init7
                  mov s_appdrive,al     ; Report append
                  mov dx,offset s_appended
                  prints

                  mov bx,offset ret_far ; Strategy and commands short
                  mov drhdr_strategy,bx
                  mov drhdr_commands,bx
                  mov drhdr_attr,8000h  ; Plain character device
                  mov drhdr_units,'$'   ; Name for this driver '$RDISK'

                  lds bx,req_ptr
                  mov byte ptr [bx+0Dh],1       ; One drive
                  mov [bx+0Eh],offset appended_eor ; Ending address
                  jmp cmd_init3

cmd_init_err:
                prints
cmd_init_abort:
                call deinit                     ; Remove hooks
                xor     ax,ax
                lds bx,req_ptr
                mov     byte ptr [bx+0Dh],al    ; Zero the number of drives
                mov     [bx+0Eh],ax             ; Ending address
                jmp     cmd_init3

cmd_init7:      ; Not appended to previously installed SRDISK driver
                mov al,s_drive
                cmp al,'$'                      ; Is the drive number known?
                jne cmd_init9
                  mov word ptr s_drive,2020h    ; Don't tell drive
cmd_init9:
                push ax                         ; Save al for forcing
                mov dx,offset s_installed       ; Report install
                prints
                pop ax

                lds     bx,req_ptr
                mov     byte ptr [bx+0Dh],1     ; Save number of drives

                cmp byte ptr [bx],16h
                jbe cmd_init6
;                 mov al,s_drive                ; Force drive number
                  cmp al,'$'                    ; Is the number known?
                  je cmd_init6
                  sub al,'A'
                  mov [bx+16h],al
cmd_init6:
                mov     word ptr [bx+0Eh],offset end_of_resident
cmd_init3:
                mov     [bx+10h],cs
                mov     word ptr [bx+12h],offset pBPB
                mov     [bx+14h],cs
                jmp     cmd_ok

cmd_init        endp
  
;**************************************************************************
;
;               READ COMMAND LINE
;
; Return carry set if error
;**************************************************************************

init_read_cmdline proc near
                push ds

                les bx,req_ptr
                lds si,es:[bx+12h]              ; Pointer to cmd line
                assume ds:nothing

irc1:           lodsb                           ; Skip over the driver name
                cmp al,9 ;tab
                je irc2
                cmp al,' '
                je irc2
                ja irc1
                jmp irc_eol
irc2:
irc_narg:       call irc_skip_space

                cmp al,' '                      ; Every ctrl character ends
                jb irc_eol

                cmp al,'/'
                jz irc_switch

                and al,11011111b                ; Make lowercase to uppercase
                cmp al,'A'
                jb irc_syntax
                cmp al,'Z'
                ja irc_syntax

                cmp byte ptr [si],':'
                jne irc3
                inc si                          ; Skip ':'
irc3:           
                mov byte ptr s_drive,al
                test flags,FLAG_FORCEDRIVE
                jnz irc_syntax
                or flags,FLAG_FORCEDRIVE
                jmp irc_narg

irc_syntax:     mov dx,offset errs_syntax
                stc
                pop ds
                ret

irc_switch:     lodsb
                and al,11011111b                ; Make lowercase to uppercase
                cmp al,'A'
                jne irc_syntax

                or flags,FLAG_APPEND
                jmp irc_narg

irc_eol:        clc
                pop ds
                ret
init_read_cmdline endp

irc_skip_space  proc near
ircs1:          lodsb
                cmp al,' '
                je ircs1
                cmp al,9 ;tab
                je ircs1
                ret
irc_skip_space  endp

                assume ds:d_seg

  
;**************************************************************************
;
;                       Memory initialization
;
; Returns
;   carry set if error
;**************************************************************************
  
if XMS_MEMORY
; Get XMS driver API address and allocates 0K to get a memory handle
; for RAM disk

init_memory     proc near
                push    es
                mov     ax,4300h
                int     2Fh                     ; Get XMS installed status
                cmp     al,80h
                jne     init_XMS1               ; Jump if not installed
                mov     ax,4310h
                int     2Fh                     ; Get XMS entry point
                jnc     init_XMS2               ; Jump if no error
init_XMS1:
                mov     dx,offset errs_noXMS    ; "No extended mem driver"
                jmp     init_XMS4
init_XMS2:
                mov     word ptr XMS_entry,bx
                mov     word ptr XMS_entry+2,es
                xor     dx,dx                   ; Allocate 0K to get a handle
                mov     ah,9
                call    XMS_entry
                or      ax,ax
                jz      init_XMS3               ; Zero for failure
                mov     XMS_handle,dx
                clc
                jmp     init_XMS_ret
init_XMS3:
                mov     dx,offset errs_ealloc   ; "Error in ext mem alloc"
init_XMS4:
                stc
init_XMS_ret:
                pop     es
                ret
init_memory     endp

else
  %out Memory defined by MEMORY not supported
  .err
endif


;**************************************************************************
;
;               Multiplex service initialization
;
; Queries multiplex interrupt to find out if SRDISK device drivers are
; already installed. If not  install the multiplex server.
;
; Return carry set if error.
;**************************************************************************

init_mplex      proc near
                push ds
                push es
                mov ax,MULTIPLEXAH * 100h
                xor bx,bx
                xor cx,cx
                xor dx,dx
                int 2Fh         ; ES segmet of main SRDISK driver

                cmp al,-1       ; Is something installed?
                je im_installed
                cmp al,0        ; Is it OK to install?
                je im_install

im_used:        ; Garbled return
                mov dx,offset errs_ml_used
im_err:         stc
                jmp imx

im_installed:   cmp word ptr es:dr_ID,'RS'      ; Is it SRDISK structure?
                jne im_used                     ; No, multiplex used elsewhere
                cmp byte ptr es:dr_ID+2,'D'
                jne im_used                     ; No, multiplex used elsewhere
                mov dx,offset errs_ml_version
                cmp byte ptr es:dr_v_format,V_FORMAT ; Proper version?
                jne im_err              ; No
                ; OK
                mov di,es:dr_conf
                mov word ptr main_config,di
                mov word ptr main_config+2,es
                jmp im_end

im_install:     mov word ptr main_config,offset conf
                mov word ptr main_config+2,ds
                or flags,FLAG_1ST

                mov ax,352Fh
                int 21h
                mov word ptr old_multiplex,bx
                mov word ptr old_multiplex+2,es

                mov dx,offset multiplex
                mov ax,252Fh
                int 21h

im_end:         clc
imx:            pop es
                pop ds
                ret
init_mplex      endp


;**************************************************************************
;
;               INIT HOOKS to previous SRDISK drivers
;
; Append this driver into the list of installed SRDISK drivers
; Return carry set if error
;**************************************************************************

init_hooks      proc near
                test flags,FLAG_1ST     ; If we are the first driver
                jnz ihxok               ;  no hooks are to be done

                les di,main_config      ; es:di point to a drive config
                mov al,s_drive          ; al is the drive to search
                cmp al,'$'              ; Is drive letter unknown?
                je ih_nodrive           ; Yes, do not check drive letter

                test flags,FLAG_APPEND          ; If we append
                jz ih_find_drive
                test flags,FLAG_FORCEDRIVE      ; but not specify drive
                jnz ih_find_drive
ih_nodrive:       mov al,-1                     ; make sure drive not found
ih_find_drive:
ih1:            cmp es:[di].c_drive,al          ; Is it the same drive?
                je ih_append
ih2:            test word ptr es:[di].c_next_drive,-1 ; Is there next drive
                jz ih_newdrive                  ; No (valid segment is nonzero)
                mov es,es:[di].c_next_drive     ; Yes, find the next drive
                mov di,es:dr_conf
                jmp ih1

ih_append_new:  ; Append this driver into previously installed drive
                mov al,es:[di].c_drive          ; Find the drive letter
                mov s_drive,al
                mov conf.c_drive,al

ih_append:      ; Append this driver into specified drive
                test es:[di].c_flags,C_APPENDED ; Append allowed?
                jz ih_appendfail                ; No, fail

                test word ptr es:[di].c_next,-1 ; Is there next driver
                jz ih_a1                        ; No, append here
                mov es,es:[di].c_next           ; Yes, find the next drive
                mov di,es:dr_conf
                jmp ih_append

ih_appendfail:  mov al,def_drive
                mov s_drive,al
                mov dx,offset errs_noappend
                stc
                ret

ih_a1:          mov es:[di].c_next,ds
                or flags,FLAG_APPENDED  ; Remember to free extra memory
if DEBUGGING
                mov ax,es:d_col         ; Debug data little left from
                sub ax,16               ;  main data
                mov d_col,ax
endif ;DEBUGGING
                jmp ihxok

ih_newdrive:    test flags,FLAG_APPEND
                jnz ih_append_new
                ; This driver must be placed at the tail of list of
                ; SRDISK drivers
                mov es:[di].c_next_drive,ds

ihxok:          clc
ihx:
                ret
init_hooks      endp


;**************************************************************************
;
;                       INT 19 hooking
;
; INT 19 is the bootstrap loader interrupt, which is invoked when user
; presses Ctrl-Alt-Del. We must hook it in order to release the
; extended memory allocated for RAM disk.
;**************************************************************************
  
if HOOKINT19

set_int19       proc near
		push	ax
		push	dx
		push	bx
		push	es

                mov     ax,3519h
                int     21h                     ; Get old int 19 handler
                mov     old_int19_off,bx
                mov     old_int19_seg,es
                mov     dx,offset int_19_entry
		mov	ax,2519h
                int     21h                     ; Set new int 19 handler

		pop	es
		pop	bx
		pop	dx
		pop	ax
		retn
set_int19       endp
  
endif

;**************************************************************************
;
;               Deinitialization in case of aborted install
;
;**************************************************************************

deinit          proc near
if HOOKINT19
                mov ax,old_int19_seg
                or ax,old_int19_off
                jz di_noint19

                push ds
                mov dx,old_int19_off
                mov ds,old_int19_seg
                mov ax,2519h
                int 21h                         ; Set old int 19 handler
                pop ds
di_noint19:
endif

if XMS_MEMORY
                cmp XMS_handle,-1
                je di_nomem

                mov dx,XMS_handle
                mov ah,0Ah
                call XMS_entry                  ; Free XMS memory
else
  %out Memory defined by MEMORY not supported
  .err
endif

di_nomem:
                mov ax,word ptr old_multiplex
                or ax,word ptr old_multiplex+2
                jz no_mplex

                push ds
                mov dx,word ptr old_multiplex
                mov ds,word ptr old_multiplex+2
                mov ax,252Fh
                int 21h                         ; Set old multiplex handler
                pop ds
no_mplex:

                ret
deinit          endp


;**************************************************************************
;
;                       Initialization strings
;
;**************************************************************************

errs_noXMS      db      'RAMDisk: Extended Memory Manager not present.'
                db      0Dh, 0Ah, '$'

errs_ealloc     db      'RAMDisk: Error in extended memory allocation.'
                db      0Dh, 0Ah, '$'

errs_eDOS       db      'RAMDisk: Incorrect DOS version.'
                db      0Dh, 0Ah, '$'

errs_ml_used    db      'RAMDisk: Multiplex interrupt already in use.'
                db      0Dh, 0Ah, '$'

errs_ml_version db      'RAMDisk: Driver of different version already '
                db      'installed.'
                db      0Dh, 0Ah, '$'

errs_noappend   db      'RAMDisk: Can not append to previously installed driver.'
                db      0Dh, 0Ah, '$'

errs_syntax     db      'RAMDisk: Syntax error', 0Dh, 0Ah, 0Dh, 0Ah
                db      'Syntax: RDISK.SYS [d:] [/A]', 0Dh, 0Ah, 0Dh, 0Ah
                db      ' d:', 9, 'Drive into which to force this driver. '
                db      'If another ', 0Dh, 0Ah
                db      9, 'SRDISK driver already is installed into '
                db      'the same drive', 0Dh, 0Ah
                db      9, 'this driver will be appended to the drive.'
                db      0Dh, 0Ah
                db      ' /A', 9, 'Append this driver to previous SRDISK '
                db      'driver.'
                db      0Dh, 0Ah, '$'

s_sign_on       db      0Dh, 0Ah, 'ReSizeable RAMDisk '
if XMS_MEMORY
                db      '(XMS)'
else
  %out Memory defined by MEMORY not supported
  .err
endif
                db      ' version ', SRD_VERSION, '. '
                db      'Copyright (c) 1992 Marko Kohtala.'
                db      0Dh, 0Ah, '$'

s_installed     db      'Installed RAMDrive '
s_drive         db      'C:', 0Dh, 0Ah, '$'
  
s_appended      db      'Appended to RAMDrive '
s_appdrive      db      'C:', 0Dh, 0Ah, '$'



;**************************************************************************
;
;                       A note for binary debuggers
;
;**************************************************************************

db "Copyright (c) 1992 Marko Kohtala. "
db "Contact from Internet, Bitnet etc. to 'Marko.Kohtala@hut.fi', "
db "CompuServe to '>INTERNET:Marko.Kohtala@hut.fi'"

d_seg           ends
                end
```
{% endraw %}

## SRDISK.DOC

{% raw %}
```

                    ReSizeable RAMDisk version 1.30
                          for XMS memory only

                    Copyright (c) 1992 Marko Kohtala

                                Freeware


SRDISK is offered to you "AS IS" without any warranty. I do not require
any money for you using it, so I can not pay you any if you loose some
for using it. It is impossible for me to say this program will work on
every computer and DOS version you try to run in on - so don't rely on
it.

Previous versions of this software were in public domain. You may use
them freely for what ever purpose you want.

This version is NOT public domain. It's freeware; I grant you right to
run, copy and distribute this software as long as it is unmodified,
includes all the original files and you do not take any kind of payment
for distributing it.

If you want to use my code in your programs or modify it, contact me,
you'll have a change to get my permission, and make it legal.



CONTENTS

  1. Publishing purpose, features included and recognised missing
  2. Files in this release
  3. Usage
  3.1. Basic installation
  3.2. Driver
  3.3. SRDISK program
  4. Technical data for further development
  5. Troubleshooting
  6. Last words



    1. PUBLISHING PURPOSE, FEATURES INCLUDED AND RECOGNISED MISSING

This RAM disk driver is published in the hope we will get a really good
RAM disk that is free. I do not intend to make it all out myself but
rather hope there is out there someone who is willing to participate in
my work.

This RAM disk currently supports the following features:

  * XMS (Extended memory on 286 and up with HIMEM or other XMS driver)
    support - no other memory drivers - yet
NEW Device drivers may be chained to form larger disks using many
    different kind memories.
  * Resizeable/removable - destructive
NEW Supports 32-bit sector addressing introduced in DOS 4. Thus over 32M
    RAM disks are possible. (Up to 63M disks tested.)
  * Configurable
      - sector size
      - cluster size
      - root directory entry count
      - number of FATs
  * Predefined DOS disk like formats
  * Write protection
  * Compatible with DOS versions from 2.00 to 5.x
    (tested only with DOS 5.0 and 3.30)
  * Stores last format time in volume label
NEW Can optionally set environment variables SRDISKn (n=1,2,...) to
    the installed SRDISK drive letters.

What I would like to see added:

  * Resizing of the disk without loosing disk contents
  * EMS support
  * UMB support
  * Bank-Switch memory support ("The Last Byte" by Key Software)
  * Low memory support



                        2. FILES IN THIS RELEASE

The following material is distributed in this release:

        SRDISK.DOC      this document
        SRDISK.C        disk formatter source code for Turbo C++ 1.0
        SRDISK.ASM      device driver source code for XMS
        SRDISK.SYS      compiled device driver
        SRDISK.EXE      compiled formatter program for the RAM disk
        FILE_ID.DIZ     short description of packet for BBS operators



                                3. USAGE

The SRDISK is basicly split in to two parts:

        1) a device driver to add the virtual drive into DOS and
        2) a program to control the device driver

The following explains the installation and how to use both of these
parts.


                        3.1. BASIC INSTALLATION

The basic installation can be done following the below steps:

1. Copy SRDISK.SYS into you root directory.
2. Copy SRDISK.EXE into some directory in your PATH
3. Add into your CONFIG.SYS line

        DEVICE=SRDISK.SYS

4. Add into your AUTOEXEC.BAT after the PATH command line

        SRDISK <size>

The <size> defines the disk size in Kbytes.


                              3.2. DRIVER

The driver can accept two parameters:

        DEVICE=SRDISK.SYS [d:] [/A]

The [] around the parameter mean it is optional; you must not type the
brackets.

Both of the options are usually useless. They are ment for chaining
drivers to same virtual disk. Some use for them may be found, if drivers
for other memories are made. The RDISK.SYS in this release does not
support the chaining - it may be recompiled to support it though by
modifying equate CAPABLE in SRDISK.ASM.

The 'd:' is meant to force the RDISK.SYS into the specified drive. If
the specified drive is driven by another SRDISK device, this driver will
be appended into the other SRDISK device. If it is not driven by another
SRDISK device, the SRDISK will try to force DOS to give it the drive
letter. Though my DOS manual states this should be possible, I was not
able to make it work (with DOS 5.0), so the driver will later think it
is a different drive than DOS thinks it is.

/A switch is another, more preferable way to append the driver into a
previously installed driver. With it you need not worry about the drive
letter DOS has given to the previous driver. The appending means that
the devices will be chained into the same drive; different parts of the
virtual disk can then use different drivers and different kinds of
memory. All drivers may not allow other drivers to be appended to them.


If you see error messages, you may have forgotten to install the XMS
driver (eg. HIMEM.SYS) prior to the RDISK.SYS, or you have improper DOS
version or something. Try to fix the problem. If you fail... sorry.

Merely installing the driver gives you no RAM disk. It is as though you
had installed a floppy driver without putting a disk in the drive. For
that you need the SRDISK.EXE program.


                          3.3. SRDISK PROGRAM

The disk can be enabled by, for example, using command "SRDISK 1024"
which will make first SRDISK a 1024K disk. It can be disabled by making
it of size 0: "SRDISK 0".

You should include the command to enable the RAM disk into your
AUTOEXEC.BAT file.

The SRDISK is self documented. You'll get the documentation by typing at
the DOS prompt "SRDISK /?" and hitting enter.



                4. TECHNICAL DATA FOR FURTHER DEVELOPMENT

The job is split between the device driver and the SRDISK program this
way:

Device driver does:

  * What ever a RAM disk driver is expected by the DOS to do.

  * Support multiplex interrupt server at AH=72h. Any program may
    receive this way a pointer into a data structure that contains the
    following data:
      - BIOS parameter block for the drive.
      - Disk size in K-bytes.
      - Read/write access flags (read flag is actually enabled flag).
      - Media byte.
      - Flag to tell if the media has changed (set by SRDISK).
      - Number of open files on drive.
      - Pointer to the sector read/write function in the driver.
      - Pointer to the memory allocation routine in the driver.
      - Some information about what kind of memory can be used for the
        disk.
      - Pointers into next driver in the driver chain and into next
        virtual SRDISK drive.

SRDISK.EXE does:

  * Modify the drivers internal structures and call it's memory
    allocation routine to change the size of allocated memory.

  * Format the new disk i.e. write the boot sector, FAT(s) and root
    directory according to the format sent to driver.

  * Carries the responsibitity that the drivers structures and the disk
    is OK.

I've done it this way because I did not want to bother myself adding the
SRDISK.EXE functions to the driver too. Some program was anyway needed
to control the driver.

The sources are somewhat documented. Also the used structures can be
found there - naturally.

Keep in mind, if you take advantage of this code, that the structures
are likely to change. Version 1.30 has still beta version of the
internal structures.

Also remember that there is a copyright on code. You'll though have good
chanse of getting license to develop a new driver using the SRDISK.ASM
as a base for your driver. Just contact me and tell me about it.



                           5. TROUBLESHOOTING

Causes of grief

1. RAM disks loose their contents when power is turned off! Do not store
anything valuable there.

2. There is no XMS memory without a proper device driver. HIMEM.SYS or
QEMM will do.

3. Not all HIMEM.SYS support memory above 16M limit. HIMEM.SYS that came
with MS-Windows 3.0 is reported be ok.



                             6. LAST WORDS

I HOPE you will send any modified versions, new drivers, better
documentation, bug reports, suggestions and your love (preferably
female) to me. If I can, I'll then add them to the next release of
SRDISK.

I'd like the modifications to sources as patches to some version the
number of which you should tell.

I'll make a list of every people contributing material to this product
and ship it with further releases. If modesty is one of your virtues, I
can leave you out of the list.

If you do not contribute anything into this driver and I get the drive
to not loose it's contents when size is changed, I'll probably change
into shareware. If I spend my time making this thing, I'll need the
money (as a student, I need it anyway :) ). I do not mind getting money
already at the below address; ALL support is appreciated.

You can contact me by sending E-mail from

        Internet, Bitnet etc. to 'Marko.Kohtala@hut.fi'
        CompuServe to '>INTERNET:Marko.Kohtala@hut.fi'

or by traditional mail to

        Marko Kohtala
        PL 115
        SF-01451 Vantaa
        FINLAND

or by calling Airline QBBS, 24H, HST, V.32, V.42, MNP, +358-0-8725380
and leaving mail to me, Marko Kohtala.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3052

     Volume in drive A has no label
     Directory of A:\

    FILE_ID  DIZ       290   1-18-92   1:30a
    SRDISK   ASM     52451   1-18-92   1:30a
    SRDISK   C       38839   1-18-92   1:30a
    SRDISK   DOC      9774   1-18-92   1:30a
    SRDISK   EXE     26596   1-18-92   1:30a
    SRDISK   SYS      2174   1-18-92   1:30a
    FILE3052 TXT      1851   6-30-92   4:39p
    GO       TXT       770   6-30-92   4:46p
    GO       BAT        31   6-04-92   2:25a
            9 file(s)     132776 bytes
                           25088 bytes free
