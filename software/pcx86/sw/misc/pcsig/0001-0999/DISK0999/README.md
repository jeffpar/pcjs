---
layout: page
title: "PC-SIG Diskette Library (Disk #999)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0999/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0999"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PCJR SURVIVAL KIT"

    The PCjr SURVIVAL KIT is a collection of utilities for the PCjr line of
    computers.
    
    JRTELE is a telecommunications package that rivals the most popular
    communications software out there.  Also included are: a print spooler,
    a patch for QuickBASIC, a RAM disk, a text editor, a mouse controller,
    and various other utilities every PCjr user should have on hand.
    
    Our thanks go out to the METRO PCjr Users Group in Bethesda, Maryland,
    for putting these utilities together.
    File Descriptions:
    
    CACHEJR  BAS  BASIC program.
    COMREST  EXE  Comport program.
    COMSWAP  DOC  Comport program documentation.
    COMSPEC  COM  Comport program.
    INT9JR   COM  QuickBASIC patch.
    INT9JR   ASM  Source code for INT9JR.COM.
    HUSH     DOC  Documentation for HUSH.COM .
    HUSH     COM  Program to quiet error messages.
    HELP     HLP  Help file.
    COMSWAP  EXE  Comport program.
    DOS21    DOC  Documentation for DOS21.
    DOS21         System file.
    JRCONFIG DOC  Documentation for JRCONFIG.
    INT9SYS  SYS  Device driver for QuickBasic Patch.
    INT9SYS  ASM  Source code for INT9SYS.
    INT9JR   DOC  Documentation for INT9JR.
    JRCONFIG NRD  Data file.
    JRCONFIG DSK  System file.
    JRSPOOL  COM  Print spooler.
    JRTELE   COM  Telecommunications program.
    JRSPOOL  DOC  Documentation for JRSPOOL.COM.
    TSCRIPT  PAS  Source code for TSCRIPT.COM.
    TSCRIPT  COM  Text editor.
    SETRAM   EXE  RAM disk program.
    RAM      SYS  Need by SETRAM.EXE.
    PMM      EXE  POOR MAN'S MOUSE main program.
    PMM      DOC  Documentation for the POOR MAN'S MOUSE.
    PCJR-NEW SCR  Data screen file.
    PATCHBAS DOC  Documentation file.
    PATCHBAS BAT  Batch file.
    PATCH    TXT  Brief note from the author of PATCH.
    PATCH    DOC  Documentation for PATCH.COM.
    PATCH    COM  Patch program for the jr.
    KEY      BAS  BASIC program.
    JRTELE   DOC  Documentation for JRTELE.COM.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COMSWAP.DOC

{% raw %}
```
                        COMSWAP & COMREST

These companion utilities cure a problem some communications software has
with the PCjr's serial port. When the PCjr internal modem is installed, it
will be recognized as COM port 1, or COM1 and the serial port as COM2. When
the modem is not installed, the serial port is supposed to become COM1. Only
some software cannot find it. To cure the problem, simply type COMSWAP at
the DOS prompt and run your communications program on COM2. This should
avoid any problems. COMREST restores the vectors to their default condition,
something you should rarely need to do.
```
{% endraw %}

## DOS21.DOC

{% raw %}
```
PATCH FILE DOS21


This patch corrects 5 problems in DOS 2.10

The file patched is IBMDOS.COM
This file should always be in the root directory.


Patch 1 -  Get disk freespace function call will occasionally modify a buffer
	   incorrectly. (IBMDOS.COM)
Patch 2 -  Same patch continued. (IBMDOS.COM)
Patch 3 -  Aborting to INT 24 does not restore vectors from PSP header.
	   Noticeably, after using the EXEC system call if the parent gets an
	   INT 24, an abort response will not go back to the parent. (IBMDOS.COM)
Patch 4 -  Reads from non-console devices in ASCII mode return incorrect counts
	   for a character read. (IBMDOS.COM)
Patch 5 -  Correctly handle Non Maskable keyboard interupts on PCjr. (IBMDOS.COM)
Patch 6 -  Continued (IBMDOS.COM)
Patch 7 -  Continued (IBMDOS.COM)
Patch 8 -  Continued (IBMDOS.COM)
Patch 9 -  Continued (IBMDOS.COM)
Patch 10 -  Continued (IBMDOS.COM)

```
{% endraw %}

## HUSH.DOC

{% raw %}
```
There is an error, (calling programming errors "bugs" tends to suggest
they are cute little annoyances instead of programming blunders)
a blunder in 3.x which causes floppy drives to have a "grinding" sound
each time the drive is accessed.  This problem does not exist in 2.x.

The grinding sound is caused by an incorrect step rate.  The speed at
which the disk head is moved is incorrectly set on booting.  The
solution is to reset the step rate for floppy drives which can be done
easily if you happen to know what to do.  The correct step rate is
already part of DOS 3.x and through the use of the AX register and
Interrupt 13 the correction can be made.  All that is needed is to set
the AX register to zero with the instruction "xor ax,ax" and then call
for "int 13."  This tiny program needs to end with "int 20" to return
your system to DOS.

                       xxxx:0100    xor  ax,ax
                       xxxx:0102    int  13
                       xxxx:0104    int  20

You can create this program with DEBUG or simply use the one that
accompanies this explanation.  Insert this tiny COM file in your
AUTOEXEC.BAT file and your floppies, when using 3.x, will purr
like a kitten.


                                    C. J. Handlogen
                                    9235 Whitehurst
                                    Dallas, TX 75243


P. S.  If you find any errors in this information, please refer to them
       as "bugs."  All other errors are "blunders."  Thanks.




```
{% endraw %}

## INT9JR.ASM

{% raw %}
```
        kbport equ 060H                                 ;keyboard port
CODE    SEGMENT
        ORG     100H
        ASSUME  CS:CODE
ENTRY:  JMP     INIT
old9    label dword                                     ;where to store ...
old9off dw ?                                            ; old 9 stuff
old9seg dw ?
NEW9    PROC    FAR                                     ;new int 9
        in al,kbport
        jmp dword ptr cs:old9
NEW9    ENDP
;
top     label byte                                      ;where to TSR
;
INIT:   mov ax,3509H                                    ;get interrupt 9
        int 21H
        mov cs:old9off,bx                               ;save offset
        mov cs:old9seg,es                               ;save segment
        push cs                                         ;move cs
        pop ds                                          ;to ds
        mov dx,offset new9                              ;offset in dx
        mov ax,2509H                                    ;set int 9
        int 21H
;
        MOV ax,OFFSET top
        mov cl,4
        shr ax,cl
        inc ax
        mov dx,ax
        mov ax,3100H
        INT 21H
        RET
CODE    ENDS
        END     ENTRY

```
{% endraw %}

## INT9JR.DOC

{% raw %}
```
Like most other jr owners, I was dismayed when I got my update copy of 
Microsoft QuickBasic 3.0 and found it typing characters twice while I was 
using the built-in editor.  I had heard that the jr "would not be supported" 
by QB 3.0, but they said the same thing about 2.0, and I use that all the 
time.  So, I went to see what the trouble was.

The big symptom was the character was being entered on both the make and break 
of the keystroke.  Ha, bet I caught you with terminology there!  The "make" of 
a keystroke is simply the key being pressed down, the "break" is when the key 
is released.  The hardware treats these as two different events, telling the 
computer a different thing for the make and break of the same key (the 
difference is that the make scan code's high bit is low, while the break's is 
high).  This to me meant that the break keystroke was losing its high bit 
before it got processed by the INT 9H routine, which translates scan codes 
into characters.  That was also why the shift keys got stuck in the QB3 
editor; the computer never saw the break of the shift key, so it assumed you 
were always holding it down.

Well, fellow jr lovers, it turns out that the fault in this matter is the 
jr's, at least the jr ROM BIOS.  Normal INT 9H on a PC and compatible gets the 
scan code to process from a "port".  When you read this port, it does not 
change what is there (it's a "non-destructive read").  Thus, when INT 9H is 
grabbed, the grabbing procedure can read from the port and know that it 
won't affect anything farther down the INT 9 chain, because they should read 
from the port, too, and get the same value.  It's a valid assumption, and 
MicroSoft assumed it for the QB3 editor's INT 9H grabbing strategy.

But it doesn't hold for the jr.  In order to make the jr INT 9 level 
compatible with the PC, the jr BIOS uses a three-tiered approach.  First, a 
software interrupt translates the infrared signals into a 62-key scan code 
(this happens to be the NMI interrupt, more on that later).  A second software 
interrupt then translates this 62-key code into an IBM 83-key code, and then 
passes it on to the third software interrupt, INT 9H.  This makes the INT 9H 
code very similar between the two machines, plus gives the possibility of 
adding an 83-key keyboard to the jr.  In software, you would just bypass the 
first two interrupts and go to the third.  (If you don't believe me, look at 
the ROM diagnostics with Ctrl-Alt-Ins.  There are *two* keyboard diagnostics, 
one for 62 keys, the other for 83 keys.)

BUT, even though the second level software interrupt does a write to the port, 
the jr INT 9H procedure does NOT do a read from the port.  It assumes the scan 
code will be coming in the AL register.  When INT 9H directly follows the 
second level interrupt, that is the case.  BUT, if something else has grabbed 
INT 9H, it may not put the scan code into the AL register before passing it 
on.  This is probably why the early version of SideKick, an INT 9H grabber, 
didn't work on the jr.  In QB3's case, what was in the AL register before it 
got to the ROM BIOS to be decoded was the scan code with the high bit masked 
off, which explains everything.

The fix is so simple, it's a wonder why Microsoft didn't offer it on the QB 
disk package and tell jr owners "Do this to get it to work."  All you have to 
do is have a TSR program right ahead of BIOS in the INT 9H chain, have it 
read the port and put the value in the AL register, and then pass control to 
BIOS.  When QB3 comes along, it grabs INT 9H from the TSR routine, not BIOS.  
When control eventually gets to BIOS, the TSR routine has put things in the 
right place.

Well, I wrote it!  I call it INT9JR, and I've included the assembly source and 
the .COM file with this ARC.  Just put it before any other INT 9H grabbing 
routine, so it is always followed by BIOS.  This typically means putting the 
line

INT9JR

as close to the beginning of AUTOEXEC.BAT as possible.

For those of you out there who would rather have a device driver that does the 
same thing instead of a TSR, I include INT9SYS.  To use it, put the line

DEVICE=INT9SYS.SYS

in your CONFIG.SYS file.  You should use either INT9JR or INT9SYS, but not 
both (though using both won't hurt).

I've done this, and tried to test it as much as I can.  It hasn't interfered 
with normal operations, SideKick, comm programs, or editors, and it certainly 
makes QB3 work as advertised.  But if anybody finds any problems, let me know.

For my next trick ....  That NMI thing associated with the jr keystrokes is 
the main reason why programs that use the 8087 math chip do not typically work 
on jrs equipped with 8087 daughterboards, like TIAC's (the one I have).  
Normal PCs have the 8087 use the NMI to signal errors in math, like divide-by-
zero.  The program can then grab the NMI to capture such errors without having 
to check for them in software, making the program faster. Normally, nothing 
else uses NMI, so most programs that grab NMI don't make provisions to pass it 
on.  So, on the jr, if a program does that, it grabs the interrupt that 
enables you to type, basically locking the system if the program wants you to 
type something at it.  I developed a routine to fix this problem on 
Microsoft's mainline languages (C, Fortran, Pascal), and called it JR87OEM.ARC 
in the Hardware DL on the CompuServe PC Junior Forum.  For QB87, the 8087 
version of QB3, that fix isn't applicable, so I'm going to have to come up 
with a new one.  Trust me, I know what I'm doing.

                                                John Bongiovanni
                                                CompuServe 70137,2401
                                                PCjr Conference Co-Sysop
                                                Lunacy PC Board BBS
                                                (818) 894-1248

```
{% endraw %}

## INT9SYS.ASM

{% raw %}
```
;       PCjr INT 9, keyboard interrupt, fix device driver
;
; first, the interrupt area
;
kbint           equ     09H
oseg    segment at 0H
        org 4*kbint
i9off           dw      ?
i9seg           dw      ?
oseg    ends
CSEG    SEGMENT PARA PUBLIC 'CODE'
        org 0h
;
XDV             PROC FAR
                ASSUME CS:CSEG,DS:CSEG,ES:CSEG
BEGIN:
START           EQU $
;  Header for DOS Device Drivers
NEXT_DEV        DW  -1         ; fake pointer to next device driver
                dw -1
ATTRIBUTE       DW  08000H     ;character device with IOCTL capability
STRATEGY        DW  XDV_STRAT  ;pointer to function which queues request header
FUNC_CALL       DW  XDV_FUNC   ;pointer to operating functions switch
DEV_NAME        DB  '&JRINT9%' ;8-byte device name field
;
;  Pointer to function request from DOS
RH_OFF          DW  ?    
RH_SEG          DW  ?
;
;  Device Strategy - set pointer to request header from DOS
XDV_STRAT:      MOV  CS:RH_SEG,ES
                MOV  CS:RH_OFF,BX
                RET
;
;  Device Interrupt Handler 
XDV_FUNC:       ;preserve machine state
                PUSHF
                CLD
                PUSH  DS
                PUSH  ES
                PUSH  AX
                PUSH  BX
                PUSH  CX
                PUSH  DX
                PUSH  DI
                PUSH  SI
;      Set DS to CS value
                PUSH  CS
                POP   DS
;      Load ES and BX with RH_SEG and RH_OFF
                LES   BX,DWORD PTR CS:RH_OFF
;      Branch to INIT ONLY
                MOV   AL,ES:[BX+2]      ; get function code byte
                OR    AL,AL             ;INIT?
                JNZ   DONE              ;NO, DO NOTHING
;  Device Initialization
INIT:
                MOV     AL,0            ;zero al
                mov     dx,0a0h         ;NMI port
                OUT     dx,AL           ;disable NMI
                CLI                     ;disable interrupts
                xor     AX,AX           ;zero ax
                MOV     DS,AX           ;point to interrupt area
        assume ds:oseg
                MOV     ax,i9off   ;save old int9
                MOV     cs:old9off,ax
                MOV     ax,i9seg
                MOV     cs:old9seg,ax
                MOV     ax,offset new9  ;set new int9
                MOV     i9off,ax
                MOV     ax,cs
                MOV     i9seg,ax
                sti                     ;enable interrupts
                MOV     AL,080H         ;al=80
                mov     dx,0a0h         ;nmi port
                OUT     dx,AL           ;enable nmi
                MOV     ax,OFFSET LASTWORD      ;end offset of XDV
                MOV  ES:[BX+14],ax      ;dx:0 points to end of buffer
                MOV  ES:[BX+16],cs
;
done:           MOV  WORD PTR ES:[BX+3],0100H ;DONE, NOERROR
;  Restore registers and exit
                POP  SI
                POP  DI
                POP  DX
                POP  CX
                POP  BX
                POP  AX
                POP  ES                  
                POP  DS
                POPF
                RET
;
XDV             ENDP
;
kbport  equ     060H
old9    label dword                                     ;where to store ...
old9off dw ?                                            ; old 9 stuff
old9seg dw ?
NEW9    PROC    FAR                                     ;new int 9
        in al,kbport
        jmp dword ptr cs:old9
NEW9    ENDP
;
LASTWORD        label byte         ;end of XDV - used for TSR
CSEG            ENDS
                END  BEGIN

```
{% endraw %}

## JRCONFIG.DOC

{% raw %}
```




        JRCONFIG Version 2.10

        This  device  driver  will  make the configuration during the boot
        process quick and easy for an  IBM PCjr.  If you  find this program
        useful, please send a contribution of $5 or $10 to

               Larry Newcomb
               9210 Adelaide Dr.
               Bethesda, Md.  20817

        This  contribution  will  encourage  me to continue to enhance this
        program, and to write other programs  for  the  PCjr.  I  have some
        other requests  for enhancement  that are not yet implemented, so I
        expect to have another version out in a few months. If you have any
        suggestions for future enhancements or other utility programs, send
        me a letter and I will consider them.

          New to this version:

        1 I have changed the names of the two versions to clear up  some of
          the confusion  over which  version does  what. Also the defaults
          for all options now work the same for both versions.
               JRCONFIG.DSK - the .DSK signifies a RAM disk and replaces the
                              old .SYS extension
               JRCONFIG.NRD - the  .NRD  signifies  No RAM disk and replaces
                              the old CONFIGJR.SYS
        2 There are some programs that needed to have MODE CO80  run before
          they  would  display  boarder  colors  properly. I believe I have
          fixed the -t3 option so this will no longer be necessary.
        3 -x option to fix the step  rate in  DOS 3.1;  this will  make the
          disk drives run quieter.
        4 -e option to change the number of entries in the directory of the
          RAM disk.
        5 -y option to install  the  jrSynchro  cartridge  if  you  have it
          plugged in.
        6 -p adds  a printer  online check for shift-print screen, and will
          allow selection of lines to print.
        7 -h will force the top of DOS user RAM to a given amount.
        8 The DEBUG session for RAM.SYS has  instructions for  changing the
          number of entries you can have in the RAM disk directory.
        9 The check for the PCjr ROM BIOS has been removed.

        You MUST have at least 256K of memory to use this program.

        To use  this driver put the file JRCONFIG.DSK on a bootable DOS 2.1
        disk. On the same disk put the following line as the FIRST  line of
        your CONFIG.SYS file. Then reboot.

           device=jrconfig.dsk

        This will:
        Install your expansion memory (256K to 640K).
        Install a  91K RAM disk  in your  internal memory (first 128K). This
          RAM disk will take the first available letter after  your physical
          drives (starting  with C:).  If you only have one drive, drive B:



          will still be a phantom drive. By filling up your first 128K, DOS
          will be forced to load your programs into your expansion memory,
          which will cause your programs to run faster.
        Put your screen in 40 column, low intensity, black & white.

        Options:  ( -c -d -e -h -k -l -p -s -t -v -w -x -y )

        -c     will turn on the keyboard click.

        -d     will cause DOS to recognize  extra  floppy  drives,  use -dn
               option, where n is 1 to 4.

        -e     will  set  the  number  of  directory entries allowed on the
               RAM disk. The default is 16 entries. Use -en where:
                    -e1 will allow  32 entries
                    -e2 will allow  64 entries
                    -e3 will allow 128 entries
               Each entry  uses  32  bytes  of  the  RAM  reserved  for the
               RAM disk.

        -h     is not  designed for  the average user. I use it for testing
               programs I want to put outside the DOS user area. -hnnn will
               put nnn  as the  top of  RAM, regardless of how much RAM you
               actually have; ie, -h512 will set the top of RAM to 512K. If
               you  don't  have  that  much  RAM, your system will probably
               crash. You should NOT  use this  option and  -l at  the same
               time.

        -k     will set  Caps-Lock (Note:  If you  have a  keyboard with an
               indicator light for Caps-Lock, the light will not  be turned
               on.)

        -l     will look  for extra  RAM, starting at 640K and will stop at
               736K, and give it to DOS. (Note: 640K is where the ROM stops
               testing RAM and 736K is where video RAM "logically" starts.)
               This option will only perform a  superficial check  for RAM.
               You  will  need  to  use  a RAMtest program to check for bad
               chips above 640K.

        -p     will patch the shift-PrtSc interrupt to check and  make sure
               the printer  is ready  before it  tries to print the screen.
               This will stop the system from locking up if the  printer is
               not  ready.   If  you   want  to   have  a  form  feed  (FF)
               automatically sent to the printer at  the end  of the screen
               print. Use -pn there n is:
                    0 - no Form Feed added (default).
                    1 - the right shift key will add the Form Feed.
                    2 - the left shift key will add the Form Feed.
                    3 - either shift key will add the Form Feed.
               If you  want to  be able  to select which lines are printed,
               use any of the following:
                    4 or 12 - no FF
                    5 or 13 - right shift for FF
                    6 or 14 - left shift for FF
                    7 or 15 - either shift for FF



               With options 4 thru 7 or 12 thru 15:
               You can choose which lines on the screen are to  be printed.
               these lines  are put into a buffer until you have added all
               the lines you want printed. Then the contents  of the buffer
               is printed.  The RAM  for this  buffer is the second page of
               video RAM, therefore, if  you use  the -vn  option, you must
               not use  n less than 6. This also means that you can not use
               this  function  if  you  are  running  a  program  that uses
               graphics, this function is for alpha modes only.
               When you  press shift-PrtSc, the cursor will go the top left
               corner of the screen.
               Use the following numeric keypad keys:
               -    Use the up and down arrows to move the cursor  from one
                    line to another.
               -    Use the  Insert key  to add a line to the buffer. After
                    moving the cursor to the line you want  to print, press
                    the  Insert  key.  When  a line has been selected, that
                    line is changed to high intensity white on  black. This
                    will not  happen on  line 25.  I leave  the bottom line
                    alone because several programs I use have a status line
                    on line  25 that is in reverse video, but you can still
                    print line 25. If you do not want the high intensity on
                    any line, use n = 12 thru 15.
               -    Use the  End key  to print  the contents of the buffer.
                    When printing is complete, the top 24 lines will be put
                    in  low  intensity  white  on black. Again, I leave the
                    bottom line alone. If you  use  n  =  12  thru  15, the
                    intensity will not be changed.
               -    The Delete key will cancel the shift-PrtSc session, and
                    return to where you were before pressing shift-PrtSc.
               -    The Home key will cause the normal shift-PrtSc function
                    to  be  executed.  You  should  use this if you want to
                    print a screen from a graphics program.
               If you  press any  other key,  you will  hear a  beep. It is
               possible to  add a line to the buffer more than once. If the
               buffer becomes full, you will hear a beep when you press the
               Insert key.
               If  you  press  shift-PrtSc  while  you  are  already in the
               selective print screen mode, the second session will  not be
               activated (you  can only have one shift-PrtSc session active
               at a time). However, the shift key you used the  second time
               will overwrite  the one  used for  the original session. You
               can use this feature if you  change your  mind about whether
               or not you want a Form Feed added.

        -s     sets the  size of the RAM disk, use -sn where n is the number
               of K bytes you want the RAM disk to be. The  RAM disk size may
               be a  little larger  than the  value you  put in, because of
               video page boundaries. The default size  is 91K  for DOS 2.1
               and 79K  for DOS  3.1. (10K  is the smallest RAM disk you can
               have, because that is  how much  room is  left on  the video
               page where IBMDOS.COM is loaded with DOS 2.1, and this space
               can not be used for anything else anyway.  With DOS  3.1 you
               get about  15K, because  IBMDOS.COM is  larger and video RAM
               must be moved to  a higher  video page).  There is  no upper



               limit on  the size  of the RAM disk (other than the amount of
               RAM you have in your computer).

        -t     will set the video display mode, use -tn where n is:

          Alpha Modes
          0 for 40 X 25 B/W  (Default)
          1 for 40 X 25 Color
          2 for 80 X 25 B/W
          3 for 80 X 25 Color
          Graphics Modes                  You can get some funny looking
          4 for 320 X 200  4 Color        screens when you boot up in a
          5 for 320 X 200  B/W 4 Shades   graphics mode because DOS expects
          6 for 640 X 200  B/W 2 Shades   to be in Alpha mode.
          7 is not a valid mode
          Extended Graphics Modes
          8 for 160 X 200  16 Color
          9 for 320 X 200  16 Color
         10 for 640 X 200  4  Color

        -v     will reserve video RAM, where n is 4 to 96.  Normally 16K is
               set aside for video RAM, you can either decrease or increase
               this amount with this option. Using -v4  will reserve 4K for
               video, giving you an extra 12K of user RAM, but you must not
               use any graphics modes.  If you  are concerned  about speed,
               you may  not want  to use this option with a value less than
               16. The extra RAM that you get this way will be in the video
               page, and  that will  be in the first 128K. Any other device
               drivers and COMMAND.COM will load into this area. Unless you
               have some large device drivers, the regular DOS programs you
               run will start in this low RAM. Don't be fooled  by the size
               of   the   files   on   the  disk.  JRCONFIG  is  over  half
               initialization code, the resident  portion is  less than 1K.
               Only about  3K of COMMAND.COM will load into low memory, the
               rest is the transient portion that  is  at  the  top  of DOS
               memory. High  values are  used for  reserving RAM to be used
               for high-res graphics (32K) or extra video pages.

        -w     will put a clockwise spinning character in on the top row of
               your screen,  use -wnn where nn is the column you want it to
               appear in.

        -x     will set the proper step motor  rate in  DOS 3.1,  this will
               make the disk quieter. Note: this will not take effect until
               after you see the initialization message.

        -y     will install  the jrSynchro  cartridge if  you have  it in a
               slot.  If  you  are  not  familiar  with  this cartridge. It
               replaces the keyboard and floppy disk interrupts, and allows
               the  keyboard  to  be  used  while  the  disk drive is being
               accessed. It seems to work fine with DOS 2.1, but  there are
               some problems with DOS 3.1.
               It also  will give  you a 47 character buffer (DOS gives you
               15 characters) if you install the buffer in the first 64K of
               RAM. Unfortunately,  this is  very restrictive if you want to



               force your programs into expansion RAM. This is  the primary
               reason  I  install  it  in  JRCONFIG.  I allocate the buffer
               inside JRCONFIG, which is  always in  the first  64K. If you
               want  the   47K  buffer,   you  can   put  JRSYNC47  in  your
               AUTOEXEC.BAT. I have used two versions of the cartridge, 1.2
               and 1.4.

               Use:
                  -y  for version 1.2
                  -y1 for version 1.4 with parity check
                  -y2 for version 1.4 with no parity check

               If you  have another version, try using one of the available
               options anyway. If  you  see  JRSYNC  in  the initialization
               message  that  JRCONFIG  prints,  then  JRCONFIG  found  the
               cartridge.  If   your  computer   locks  up,   you  have  an
               incompatible version.

        Cartridge Basic compatibility:
          Cartridge Basic is written to run in the low RAM of an unexpanded
          PCjr. If you have a copy of JBASIC.COM, you can  run it  to enter
          Cartridge Basic  when using expansion RAM. It is a short program
          that sets up an environment for Cartridge Basic to run in. One of
          the  things  it  does,  is  it  gets information from the RAM disk
          device driver about low memory and the video  page. JRCONFIG will
          give  it   the  information   it  needs  to  set  up  the  proper
          environment. It also checks for a hardware register that is  on a
          MS  Booster.  If  it  can  not find this register, it will abort.
          Below is  a print  out of  a DEBUG  session that  will remove the
          check for  the MS  Booster, and  change the drive that it expects
          the RAM disk to be. If JRCONFIG is drive C:, you can ignore  the 2
          lines that change the drive from C: to D:. If JRCONFIG is E: then
          change the 03 to 05. The fourth to last line changes the name that
          DEBUG uses  to DBASIC.COM, so that DEBUG will write a new file. I
          chose the name DBASIC.COM because this new modified  program will
          work when JRCONFIG is D:. The 6797 at the beginning of most lines
          will probably be a different number for your DEBUG session.

        A>debug jbasic.com                   start debug session
        -u108b                               unassemble code
        6797:108B BA3F02       MOV  DX,023F  hardware address on booster
        6797:108E B091         MOV  AL,91
        6797:1090 EE           OUT  DX,AL
        6797:1091 BA3D02       MOV  DX,023D  hardware address on booster
        6797:1094 B05A         MOV  AL,5A    write a byte to the register
        6797:1096 EE           OUT  DX,AL
        6797:1097 EC           IN   AL,DX    read a byte from the register
        6797:1098 3C5A         CMP  AL,5A    compare read to written byte
        6797:109A 750E         JNZ  10AA     jump if they are different
        6797:109C BA070B       MOV  DX,0B07
        6797:109F BB0300       MOV  BX,0003  drive C:
        6797:10A2 B004         MOV  AL,04    read function
        6797:10A4 B444         MOV  AH,44    I/O control
        6797:10A6 CD21         INT  21       get information from RAM disk
        6797:10A8 7306         JNB  10B0     jump if read is successful



        -e1097
        6797:1097  EC.90             replace read instruction with NOP
        -e10a0                       examine RAM disk drive letter
        6797:10A0  03.04             change from  C: to D:
        -ndbasic.com                 change name of file
        -w                           write new file
        Writing 15AF bytes
        -q                           quit and return to DOS


               JRCONFIG.NRD (formerly  called CONFIGJR.SYS)  is the version
               that will not install a RAM disk. This version will not cause
               problems with hard disk drivers that  insist on  being drive
               C:.  All   the  defaults   are  the  same  as  they  are  in
               JRCONFIG.DSK. If you want  your hard  disk device  driver to
               load into  external memory,  do not  use the -s option. This
               will waste  some of  your internal  RAM, but  your hard disk
               driver will  run faster.  If you  have one of the hard disks
               that have a ROM on the  controller, you  may still experience
               some increase  in speed by sacrificing your internal memory,
               because all  device drivers  and COMMAND.COM  will load into
               external memory.  You should experiment to see if it makes a
               difference for your configuration.  One of  the enhancements
               that someone  has requested is a way to use the low RAM that
               is wasted by  not  using  the  -s  option.  I  will probably
               provide this with the next release.


        EXAMPLE:
               device=jrconfig.dsk -d2 -t3 -c -p6

        will:
          Tell DOS you have two floppy disk drives.
          Boot up in 80 column color mode.
          Turn on the keyboard click.
          Cause  the  shift-PrtSc  key  combination  to first check for the
               printer to be ready, then allow selective print  screen, and
               add a formfeed if the left shift key is used.

        FOR BEGINNERS:
        Here is  a quick and easy way to start using this program. Format a
        new disk using the /s paRAMeter. This makes the new disk a bootable
        disk.  Refer  to  the  DOS  manual  if you have not used the FORMAT
        command. Then copy JRCONFIG.DSK to  the  new  disk.  Then  type the
        following three lines from the DOS prompt:

        copy con config.sys
        device=jrconfig.dsk -t3 -c 
        ^Z

        The first line tells DOS to copy from the keyboard to a file called
        CONFIG.SYS. The second line is what is put  into the  file, you can
        add any  other options to this line you want. The third line is the
        end of file marker, DOS will add this to the file if  you press the
        F6 function key.





        I hope this is as useful to others as it has been to me. If anyone
        has any questions about this device driver, or  if you  think there
        is a  bug, you can write me at the address at the beginning of this
        documentation,  or  you  can  leave  me  a  message  on  Battleship
        Pennsylvania 301-428-3145.  This bulletin  board is associated with
        the METRO PCjr USER GROUP.



        I have included another  program that  I find  useful. I  get very
        annoyed at  the DOS  message to  insert a disk with COMMAND.COM and
        press a key. I  think that  putting COMMAND.COM  on all  my disks a
        poor answer.  I got  this program from a bulletin board, and it has
        made my life much easier.

        COMSPEC.COM  -  If  you   put  the   following  3   lines  in  your
        AUTOEXEC.BAT, you will always have COMMAND.COM on your RAM disk that
        is created with JRCONFIG.DSK.

        1. set comspec=c:\command.com   -  this  line  uses  the  DOS 'set'
                                        command to  tell DOS  where to find
                                        COMMAND.COM;  however,  there  is a
                                        bug in DOS and this doesn't work by
                                        itself.

        2. comspec c:\command.com       - this  line  executes  the program
                                        COMSPEC.COM,  which  causes  DOS to
                                        recognize the 'set' command

        3. copy command.com c:          - this line  copies  COMMAND.COM to
                                        the RAM disk

        NOTE: The  numbers at  the beginning  of the  3 lines  do not go in
        AUTOEXEC.BAT they are only there for  easier reading.If  you have 3
        or 4 floppy drives, then the RAM disk will be D: or E:


        I modified  RAM.SYS to have a spinning character in the upper right
        corner of the screen. It is 2 spaces  to the  right of  the one for
        JRCONFIG.DSK  and  spins  counter  clockwise.  For those of you who
        don't already have it, add the following line to your CONFIG.SYS

          device=RAM.sys

        This will install the  device  driver.  You  then  run  the program
        SETRAM.EXE.

          setRAM d n

        Where d  is the  drive specifier  and n is the number of K bytes to
        use for the RAM disk.  The  RAM disk  will  take  the  next available
        letter;  therefore,  if  you  have  three floppy drives (A: B: C:),
        JRCONFIG.DSK will be drive D:, and RAM.SYS will be E:. You may want



        to  add  this  line  to  your  AUTOEXEC.BAT.  You  can have RAM.SYS
        installed more than once  in CONFIG.SYS,  each occurrence  will take
        the next drive letter.

        You can remove the RAM disk at any time by running

          setRAM d

        This will free up the RAM used by the RAM disk. NOTE: you will loose
        any files that were on it. You can then recreate the RAM disk at any
        time, because the device driver is still installed.

        If you  want to  move the  spinning character  to the left, you can
        change the position using DEBUG.COM. You can also change the number
        of directory  entries. The  following is  what a DEBUG session will
        look like. The hyphens are the DEBUG prompt and are not typed in.

          debug RAM.sys       This starts the program.
          -e284               If you want to move the spinning character.
          XXXX:0284   9E.nn   DEBUG responds  with everything  on this line
                              except the   nn.  This will be the new offset
                              of the spinning character.  Subtract  two from
                              hexadecimal 9E to move one space to the left;
                              ie, nn can be any even number from 0 to 9E.

          -e126               If you want to change the number of directory
                              entries
          XXXX:0126   40.nn   Replace 40  (64 decimal)  with nn, the number
                              of entries  you want.  I suggest  you only use
                              even  multiples  of  10 (16 decimal). 80 (128
                              decimal) is probably as high as you will want
                              to  use.  Every  10 (16 decimal) entries will
                              use 512 bytes of memory. 
          -w                  This will cause the  modified  program  to be
                              written to the disk.
          Writing 01B9 bytes  The message from DEBUG.
          -q                  Ends the debug session.




```
{% endraw %}

## JRSPOOL.DOC

{% raw %}
```

			    PRINT SPOOLER  FOR	JUNIOR


	  This program will install in your ram a print spooler which
	  will allow junior to use part of its memory to collect
	  data and hold it for the printer.  There by releasing the
	  computer (CPU) back to you while it contiues to print !!

	  To set it:  When the A> prompt appears, type JRSPOOL and two
	  numbers (with a space in between). The first number indicates
	  whether your parallel printer is LPT 1: or LPT 2:.  So enter
	  a 1 or 2.  The second number indicates how many 4K blocks of
	  memory you want to set aside for spooling (printing while
	  working).

	  Hint: One page of printed text is nearly equal to one 4K
	  block.

	  Example: If you want to reserve 8K of memory for a spooler
	  for  LPT1:, type:   A>JRSPOOL 1 2  (Press Enter).

```
{% endraw %}

## JRTELE.DOC

{% raw %}
```
      
   
   
   
   
   
   

                         JRTELE.COM
                      
   
   
                  Ueckert Software Systems
                       3573 Dexter Way
                     Marietta, GA  30062
   
   
                        December, 1985
                         Release 1.0
   
   
       (C) Copywrite 1985 by Ueckert Software Systems
                      All rights reserved.
   

     The disk containing the JRTELE.COM program and this
     documentation may be copied and shared with others.
       Printed copies of this documentation may not be
        distributed in any manner without the express 
        written consent of Ueckert Software Systems.  


















    
   
                      TABLE OF CONTENTS
   
   Limited License Granted  .................   1

   Machine Configuration  ...................   2

   Introduction  ............................   3
   
   Getting Started  .........................   5

   Menu  ....................................   7
   
   Dialing Directory  .......................  10
   
   Communication Parameters  ................  13
   
   File Transfers  ..........................  14
   
   Program Defaults  ........................  16
   
   Error Messages  ..........................  17

   Registration Benefits  ...................  18























JRTELE.COM (Rel. 1.0)                                   1


   
   Limited License Granted

        You are free to use and copy the program to share 
   with others.  However, you must follow these rules:
        1.)  The program and the documentation must be 
             distributed together.
        2.)  The program and the documentation must be 
             distributed unchanged in any way.
        3.)  You may not charge for the program or its 
             distribution, other than the cost of the 
             distribution medium (i.e.;  the cost of a 
             disk, connect charges, or similar items)
             without the express written permission of
             Ueckert Software Systems.
        4.)  You may not distribute printed copies of
             this documentation without the express
             written permission of Ueckert Software
             Systems.
   
        This program and documentation are the property 
   of Ueckert Software Systems, which owns and retains 
   all rights to them.  There is no warranty, implied or 
   expressed, about this program's ability to perform in 
   any manner.  Any user of this program does so at that 
   user's own risk, with no recourse to Ueckert Software 
   Systems for its performance or lack thereof.

















                                 Limited Licesnse Granted
JRTELE.COM (Rel. 1.0)                                   2


   
   Machine Configuration
   
        JRTELE.COM will run on 128k PCjr with an external 
   speaker, a color or monochrome 80-column display, an 
   internal IBM or external Hayes-compatible modem (at 
   300 or 1200 bps), and a single disk drive.  It will 
   also support a RAM disk if you have the additional 
   memory.  

        Other configurations (second disk drives, etc.) 
   may or may not work.  This program depends heavily on 
   PCjr specific interrupts and ports.  If it doesn't 
   work on your specific configuration, register and 
   advise the author of the problem.  If it can be fixed 
   without changing the basic purpose of the program, it 
   will be incorporated into a future release.  There are 
   no plans, currently, to make JRTELE.COM work on a PC, 
   XT, AT, or other "compatible".  
   
   IMPORTANT NOTICE
   
        If you are using add-on memory and are changing 
   the location of the screen memory, you must allocate 
   enough memory for two (2) pages of screen memory.  If 
   this is not done, results are unpredictable.  


















                                    Machine Configuration
JRTELE.COM (Rel. 1.0)                                   3


    
   Introduction

        JRTELE.COM is a communications program written 
   specifically for the PCjr.  It makes full use of the 
   Video Gate Adapter, the internal sound chip, and an 
   IBM internal or external Hayes compatible modem, and 
   optionally a printer.  It also supports a capture 
   buffer (to a maximum of 32k).  It is designed to 
   communicate with RBBS, using its color graphics and 
   music, FIDO type, and NOCHANGE bulletin board systems 
   (BBS).  NOCHANGE graphics, music, and NMODEM protocol 
   are not currently supported.  This is the basic 
   purpose of this program and it will not be altered in 
   future releases.  

        JRTELE.COM was written in Turbo Pascal V3.01A 
   with the BCD option.  There are approximately 4000 
   lines of source code in the program.  The source code 
   is available with a limited use license; see the user 
   registration information at the end of the manual.  
   
        The communications routines in JRTELE.COM are 
   based on the program DUMTRM.PAS by Jim McCarthy of 
   Borland International and Andy Botany of Teleware 
   Incorporated.  The disk directory read routine is 
   based on the program QDL.PAS also by Jim McCarthy of 
   Borland International.  Both programs are in the 
   public domain and are available on the Borland 
   International SIG on Compuserve and some BBS's.  
   
        The following limitations are present in this 
   version of JRTELE.COM: 
        1.  Only odd, even, and no parity are supported.
        2.  Only 300 and 1200 bps are supported.
   These limitations do not prevent JRTELE.COM from 
   performing its purpose as stated above.  
   
        If you are using an IBM internal modem, it has 
   had a revision since its first release.  The later 
   revisions (marked "REV J" and later) corrected a 
   problem occuring during transmission of non-text 
   files;  i.e., uploads of programs would not work 

                                             Introduction
JRTELE.COM (Rel. 1.0)                                   4


   properly.  If you own an internal modem with a 
   revision identification lower than "J", you may have 
   problems with XMODEM uploads.  Unfortunately, this is 
   a problem beyond the control of JRTELE.COM or its 
   author.  If possible, upgrade to a revision "J" or 
   higher of the IBM internal modem.  
   
        If you are using a Hayes compatible external 
   modem, it must be truly compatible in the command set 
   and responses.  If it is a Hayes compatible and does 
   not work properly with JRTELE.COM, it's probably not 
   as compatible as you think.  (Paraphased from Borland 
   International.) 































                                             Introduction
JRTELE.COM (Rel. 1.0)                                   5


   
   Getting Started
   
        Be sure and read the important notice in the 
   machine configuration chapter if you have more than 
   128k of memory.  Also make sure the volume on your 
   external speaker is high enough to hear the sounds 
   generated by JRTELE.COM.  
   
        To begin, type (without the quotes) "JRTELE.COM" 
   at the DOS prompt (a:>, where a is the default drive 
   number).  The first time you run JRTELE.COM, it may 
   ask you for information which then becomes defaults 
   for the program and the dialing directory.  The 
   control file is then written for future runs. The 
   directory file is created, using the defaults, for 
   later runs.  The next time you run JRTELE.COM, it will 
   read and use these files.  If you are using an IBM 
   internal modem, the defaults are set to 300 BPS, 8 
   data bits, 1 stop bit, and no parity.  If you are 
   using an external modem, you are asked for its speed.  
   Then the defaults are set using the speed you 
   supplied, 8 data bits, 1 stop bit, and no parity.  
   These are the communications parameters recommended by 
   most BBS's.  Later in the documentation, instructions 
   are given on changing the defaults.  

        If you are using the IBM internal modem, it is 
   not necessary to enter any commands to set the modem's 
   format, dial a number, or do uploads.  JRTELE.COM was 
   written to do that for you.  
        
        A few comments about the notations used in this 
   documentation and the program.  When the phrase "Alt-" 
   proceeds a letter, it means you should hold down the 
   key marked "Alt" key (to the left of the space bar) 
   while pressing the named letter key.  It is not 
   necessary to also press the shift key, even if the 
   indicated letter is capitalized.  For example, Alt-M 
   means:  hold down the "Alt" key while pressing the "M" 
   key.  The phrase "Ctrl-" preceeding a letter means to 
   hold down the "Ctrl" key (to the left of the "A" key) 
   while pressing the named letter key.  Again, it is not 

                                          Getting Started
JRTELE.COM (Rel. 1.0)                                   6


   necessary to press the shift key.  The phrase "Fn-" 
   and number or phrase implies you to press the "Fn" key 
   (top right corner of the keyboard) and the number or 
   phrase key.  Additional information about key 
   combinations can be found in the IBM manual, Guide to 
   Operations, supplied with your PCjr.  
        
        When you see angle brackets around a letter in a 
   word, it means you use that letter to select the 
   action implied by the word.  For example, the word 
   "e<X>it" means you are to press the "X" key to exit 
   from the routine.  Again, it is not necessary to press 
   the shift key with the letter.       

        On occasion, JRTELE.COM will request a name, 
   phone number, or other information from you.  When you 
   provide this information, certain keys can be used to 
   change what you have entered before you press the 
   Enter key.  The backspace key will backspace one 
   character position and put a space there.  The Esc key 
   will backspace over all characters you have entered.  
   The Enter key indicates you are finished entering 
   characters.  

        JRTELE.COM will inform you (visually and audibly) 
   that it is ready.  It will also tell you how large the 
   capture buffer is;  usually, it will have between 12k 
   (on a 128k PCjr) to a maximum of 32k (on PCjr's with 
   extended memory).  When you've read the first screen, 
   you can press any key to continue.  If this is your 
   first time running JRTELE.COM, press Alt-M to display 
   the menu.  












                                          Getting Started
JRTELE.COM (Rel. 1.0)                                   7


    
   Menu

        The menu screen is provided to give you a quick 
   summary of the functions available.  Each of these 
   functions is listed below along with a brief 
   description of that function.  
   
        Pressing any key will take you out of the menu.  
   If it is a function on the menu, that function will be 
   performed.  Most functions perform in this manner.  
   The function window will remain on the screen until 
   you press a key;  the key you press will be sent or 
   the appropriate function will be performed, based on 
   the key.  The exceptions to this are the dialing 
   functions (Alt-D and Alt-Q) and the file transfer 
   functions (Alt-R and Alt-T).  Remember, the shift key 
   is not required for "Ctrl-" and "Alt-" combinations.  
      
   
   Alt-P  Communications Parameters
        Allows you to set the communications parameters.  
        This is used primarily when making a manual 
        (i.e., not in the directory) call.  

   Alt-F  Program Defaults
        Allows you to set the parameters used by the 
        program;  e.g., screen colors.
                          
   Alt-E  Keyboard Echo 
        Allows you to see the characters you enter if the 
        system with which you're communicating (host) 
        doesn't echo (send back) the characters you type.  
        Most systems do echo.  
   
   Alt-C  Clear Screen
        Clears the screen.

   Alt-X  Exit Program
        Allows you to exit the program after answering a
        verification question.



                                                     Menu
JRTELE.COM (Rel. 1.0)                                   8


   Alt-M  Show Menu
        Shows the menu screen.

   Fn-Echo  Echo to Printer 
        Allows every character received and typed to be 
        sent to the printer.  Obviously, you must have a
        printer attached and it must be ready.  Toggling
        the printer on and using 1200 BPS may cause loss
        of characters sent by the host.

   Fn-PrtSc  Print Screen
        Allows you to print the screen, including any 
        window visible.  The normal print screen function 
        is changed while JRTELE.COM is running.  This 
        allows the program to tell the sender to stop 
        sending while the screen prints; this helps 
        prevent the loss of characters from the host.  
        When printing is completed, the sender is told to 
        resume sending.  

   Alt-D  Dialing Directory
        Brings up the dialing directory.  You may add, 
        change, and delete entries;  call an existing 
        entry;  make a manual call;  redial the last 
        call; and, of course, do nothing.  Dialing may be 
        terminated by pressing any key.  A later chapter 
        details this function.

   Alt-Q  Redial Last Number
        Redials, repeatedly, the last number dialed.  
        This can be terminated by pressing any key.
                                       
   Alt-Z  Show Elapsed Time
        Shows the time since the last call was dialed; 
        useful when you're using long distance.
   
   Alt-H  Hangup modem
        Forces the modem on-hook (i.e., it hangs up).
   
   F1 - F10
        Sends the value associated with the pressed 
        function key from the associated directory entry.
        Not effective with manual calls.

                                                     Menu
JRTELE.COM (Rel. 1.0)                                   9


   
   Alt-B  Send Break
        Sends a sustained break signal.  May be required 
        by some systems, but not most BBS's.
   
   Alt-L  Logged Drive
        Shows the current logged drive and allows you to
        change it.
   
   Alt-V  View Disk Directory
        Displays an abbreviated directory and free space 
        on the current logged drive.
   
   Alt-R  Receive File
        Sets the program in file receive mode.  A later
        chapter discusses file transfers.

   Alt-T  Send File
        Sets the program in file send mode.  A following 
        chapter discusses file transfers.  
   
   Alt-Y  Delete File
        Allows you to delete a file.
   
   Alt-O  Open Buffer
        Opens the capture buffer;  that is, starts
        capturing each character sent and received.
        If the buffer was previously open, the capture
        starts without destroying the buffer contents.
   
   Alt-K  Clear Buffer
        Clears the capture buffer.  Once cleared, the 
        data is lost.
   
   Alt-W  Write Buffer
        Writes the contents of the capture buffer to a 
        file you've specified as the log file for the
        current call.  After writing, the buffer is 
        cleared.
   
   Alt-I  Close Buffer
        Closes the capture buffer;  that is, stops 
        capturing data.  No data is lost or written.

                                                     Menu
JRTELE.COM (Rel. 1.0)                                  10


   
   Dialing Directory
   
        The dialing directory is used to store the name, 
   dialing prefix (for example, long distance service 
   phone number and access code) indicator, phone number, 
   communication parameters, echo required, line feed 
   needed, XOn/XOff protocol codes, last connected time 
   and date, log file specification, and function key 
   values.  
   
        In order to maintain a directory as large as 
   JRTELE.COM's directory, frequent access to the 
   directory file must be made.  If you remove the disk 
   containing the directory, you must replace it prior to 
   disconnecting a call or entering the dialing directory 
   function.  The directory file is always closed except 
   when it is being accessed;  that is, the file will be 
   opened, used, and closed as necessary.  
   
        Pressing Alt-D takes you into the dialing 
   directory.  Once there, you can dial a number by 
   entering the number to the left of the name of the BBS 
   you are calling and pressing Enter.  The name and 
   phone number being called will be displayed at the 
   bottom of the window.  If a connection is made, you 
   will be notified visually and audibly.  If no 
   connection is made, a message will be displayed and 
   the program will pause before redisplaying the 
   directory.  
   
        Calls may be placed to numbers not in the dialing 
   directory by entering a M (for manual call) and 
   pressing Enter.  The program will ask you for a prefix 
   code ("!" or "@" as stored in the program defaults and 
   used to access long distance services) and then the 
   phone number.  After they are entered, the program 
   will proceed as if the call had been made from the 
   dialing directory;  however, there are no values 
   associated with the function keys.  
   
        The last dialed number (from the directory or a 
   manual call) may redialed by entering an R and 

                                        Dialing Directory
JRTELE.COM (Rel. 1.0)                                  11


   pressing Enter.  The program acts as if you had exited 
   the dialing directory and pressed Alt-Q.  
   
        Entries may be changed or added by entering a C 
   and pressing Enter.  You will then be asked the number 
   of the entry to be changed;  enter it and press Enter.  
   The current values for that entry will then be shown 
   and you change may them individually.  Enter the 
   letter of the appropriate value and then the new 
   value.  After all changes have been entered, press the 
   "Esc" key.  Remember, the prefix in the dialing 
   directory is a "!" or a "@" which relate to long 
   distance service access prefix definitions in the 
   program defaults, not modem dialing prefixes.  Phone 
   numbers may contain 14 characters;  valid characters 
   are the digits 0 to 9 and other characters supported 
   by your modem.  Consult the documentation supplied 
   with your modem.  Normal usage (that is, without a 
   switchboard) requires only that you enter the phone 
   number of the BBS as you would dial it yourself.  If 
   you use a long-distance service, you should store the 
   phone number and access code for the service in the 
   program defaults and the phone number of the BBS in 
   the directory.  Tone and pulse dialing requirements 
   are also maintained in the program defaults.  
   
        Entries may be deleted by entering a D and 
   pressing Enter.  You will be asked which entry to 
   delete;  enter the number of the entry and press 
   Enter.  The entry will be reset to the initial program 
   defaults.  
   
        To view additional entries, use the Home, End, 
   PgDn, and PgUp keys (lower right corner of the 
   keyboard);  remember these keys require you to press 
   the "Fn" key first.  Home will display the first 15 
   entries in the directory.  PgUp will display the next 
   15 entries.  PgDn will display the previous 15 
   entries.  End will display the last 15 entries in the 
   directory.  
   
        To exit the dialing directory, enter an X and 
   press Enter.  You will be returned to the main screen.  

                                        Dialing Directory
JRTELE.COM (Rel. 1.0)                                  12


   
   Important Notes

        If you captured data during a call and you enter 
   the dialing directory with data in the buffer, the 
   program will ask you what to do with the data in the 
   capture buffer.  You may clear the buffer, write it to 
   a file of your choice, or write it to the log file for 
   the last call made.  If the file you specify exists, 
   the data will be appended to that file.  If you select 
   to write the file, but have not specified a file name, 
   a file name of "DEFAULT.FIL" is used.  
   
        When sending the values corresponding to the 
   function keys (F1 through F10), JRTELE.COM will always 
   add a carriage return.  To prevent this, enter a 
   backslash (\) as the last character of a message.  The 
   function key values are useful for storing your first 
   and last names, your password, and other frequently 
   entered strings associated with that entry in the 
   directory.  For example, F1 could contain your first 
   name, F2 your last name, and F3 your password.  This 
   can save several keystrokes.  
   
           Another good idea (made easier by the function 
   key values) is to use a unique password on every BBS 
   you call.  If a computerized vandal (also called 
   "hacker", "cracker", or "wrecker") manages to break 
   into a BBS and get a list of users and associated 
   passwords, that vandal won't be able to get onto other 
   BBS's with your name and password and then wreak their 
   perverse, infantile havoc while destroying your good 
   name and probably your ability to use the wrecked 
   BBS's.  Unfortunately, it's happened before and will 
   continue.  









                                        Dialing Directory
JRTELE.COM (Rel. 1.0)                                  13


    
   Communication Parameters
   
        These parameters are used to set or reset the 
   communications parameters used for manual calls (the 
   dialing directory maintains the parameters for calls 
   made from the directory).  The most common parameters 
   are listed for easy selection and entry.  If these do 
   not meet your needs, select option 6 to specify the 
   required settings.  If you are using the IBM internal 
   modem, the settings you select are checked for 
   validity.  
   
        Once selected, the parameters are changed for 
   both the serial port and the modem.  The parameters 
   are changed in a manner and sequence appropriate for 
   the modem you are using.  



























                                 Communication Parameters
JRTELE.COM (Rel. 1.0)                                  14


    
   File Transfers
   
        JRTELE.COM supports ASCII (XON/XOFF) and XMODEM 
   protocol transmitting (uploading) and receiving 
   (downloading) of files.  There is a wealth of public 
   domain programs (an astounding number of which run 
   with no problems on the PCjr) available on the BBS's.  
   If at all possible, it is recommended you use the 
   XMODEM protocol to transmit or receive files, even 
   text files.  XMODEM has a 99.5% accuracy rate;  your 
   chance of receiving an error during the transfer is 
   slim.  ASCII transfers do no error checking;  your 
   exposure to error is then dependent on the telephone 
   line, the weather, and any number of other 
   uncontrollable items.  

        To receive a file, enter Alt-R.  To transmit a 
   file, enter Alt-T.  Once in file transfer mode, you 
   will be asked to specify a file transfer method;  
   press the appropriate key.  Then you will be asked for 
   a file specification;  enter a normal file 
   specification (drive:name.ext).  The methods supplied 
   for receiving files are XMODEM and ASCII.  For 
   transmitting files, you may use XMODEM, ASCII, and 
   Paced ASCII.  Paced ASCII is useful if you compose 
   messages offline (not connected to a BBS, using a 
   text/word processor), then enter them into the BBS 
   mail section.  Most BBS's use a colon (:) after a line 
   number for pacing.  Check your BBS carefully before 
   you do this;  there are no real standards of line 
   length or number of lines.  
   
        As an alternative to using Alt-R to download text 
   files, open the capture buffer then tell the host to 
   ASCII download the file.  If the file is larger than 
   the buffer, the buffer capture routine will tell the 
   host to stop sending and tell you the buffer is full.  
   You may then write or clear the buffer.  The clear 
   buffer routine will tell the host to start sending 
   again.  Remember, the write buffer routine also clears 
   the buffer after writing it.  
   

                                           File Transfers
JRTELE.COM (Rel. 1.0)                                  15


        Another note about ASCII downloads:  the data 
   being received is not displayed.  Since some files do 
   not have an end-of-file character, the receive file 
   routine will not know it has received the end of the 
   file.  Watch the number of characters received and the 
   length of the file; that way you will know when to 
   stop the receipt of the file.  

        The program uses the capture buffer to store data 
   during file transfers;  therefore, the capture buffer 
   will be written before sending or receiving a file.  
   Also, the buffer is filled before anything is written 
   to disk, so don't panic if the disk doesn't spin much.  
   It was designed that way.  






























                                           File Transfers
JRTELE.COM (Rel. 1.0)                                  16


    
   Program Defaults
   
        The program's defaults are available for change.  
   These include the text color, background (and border) 
   color, the window text color, window background color, 
   default BPS rate, default stop bits, default data 
   bits, modem type, redial delay, and tone with program 
   messages. (Note that all "BEEP"'s issued by the 
   program cannot be turned off; certain critical 
   messages will always cause a "BEEP".) The access 
   numbers for long distance services are also maintained 
   in the program defaults as prefix codes "!" and "@".  
   
       Pressing Alt-F will get you into the default 
   change routine.  The defaults are listed, then you are 
   able to change them individually.  Just enter the 
   letter of the default to be changed, then the 
   appropriate value.  To indicate you have no more 
   changes, press the Esc key.  You will then be given an 
   opportunity to save the changes for future runs.  
   
        Any changes made to the program defaults will be 
   effective immediately after you exit the default 
   change function, whether the changes were saved or 
   not.  


















                                         Program Defaults
JRTELE.COM (Rel. 1.0)                                  17


   
   Error Messages

        Error messages are displayed at the time of the 
   error.  Usually, JRTELE.COM will display the error 
   message, then continue as if the request causing the 
   error was not issued.  When you are requested to 
   select from a set of values, if you do not choose from 
   the indicated values, JRTELE.COM will just ignore your 
   selection.  
   
        The only coded (non English) error messages you 
   should get are listed below with their cause.  
   
        Error   Meaning and action
         240    Disk full.  Try a different disk.
         241    Directory full.  Try a different disk.
         243    Too many open files.  Add more files to 
                     CONFIG.SYS.
   
        If you consistently get other error messages 
   (identified as Run-time or I/O Errors) and are a 
   registered user, contact Ueckert Software Systems.  





















                                           Error Messages
JRTELE.COM (Rel. 1.0)                                  18


    
   Registration Benefits
   
        If you send a contribution ($20 suggested), you 
   will be registed as a user of this program.  This 
   entitles you to advance notice (about a month) of new 
   releases, and free reasonable telephone support.  You 
   will also have an opportunity to acquire new releases 
   before non-registered users as well as acquire a 
   program to convert the control and directory files, if 
   necessary; both for less than $10 (to cover materials, 
   postage, etc.).  The conversion program will not be 
   distributed to BBS's or CompuServe.  In addition, 
   change and enchancement requests from registered users 
   will receive priority over any others.  This is not an 
   offer to do custom code for you for free, but rather a 
   commitment on the author's part to support as best 
   possible, within the purpose of JRTELE.COM, the 
   registered users.  

        To register, send your contribution along with 
   your name, mailing address, and computer configuration 
   to: 
                
                Ueckert Software Systems
                3573 Dexter Way
                Marietta, GA  30062
   
        An acknowledgement of your contribution, plus 
   current information about the product, will be sent by 
   return mail.  

        In addition to the items mentioned above, users 
   who register will be able to acquire at additional 
   cost, under a limited use license agreement, a copy of 
   the source code for JRTELE.COM and documentation of 
   the source code.  For additional information about 
   acquiring the source code, indicate your desire at any 
   time after you register.  





                                    Registration Benefits
JRTELE.COM (Rel. 1.0)                                  19


    
   Registration Form

   Mail to: Ueckert Software Systems
            3573 Dexter Way
            Marietta, GA  30062
   
   
               Name:_____________________________________
   

            Address:_____________________________________

   
   City, State, Zip:_____________________________________
   

     Equipment Used:_____________________________________

   
                    _____________________________________
   
   
                    _____________________________________
                                                           
   
       Contribution:_____________________________________
                                                             
   Are you interested in receiving information about 
   
   acquiring the source code for JRTELE.COM?   YES   NO

   Any suggestions for enchancements to JRTELE.COM?











                                    Registration Benefits

```
{% endraw %}

## KEY.BAS

{% raw %}
```bas
0 REM: This program is a variation on one in The Fully Powered PC, p. 179.
10 COLOR 0,2,2
1000 KEY 1,CHR$(27)+"LIST "
1010 KEY 2,CHR$(27)+"RUN  "+CHR$(13)
1020 KEY 3,CHR$(27)+"LOAD"+CHR$(34)
1030 KEY 4,CHR$(27)+"SAVE"+CHR$(34)
1040 KEY 5,CHR$(27)+"CONT "+CHR$(13)
1050 KEY 6,","+CHR$(34)+"LPT1:"+CHR$(34)
1060 KEY 7,CHR$(27)+"TRON "+CHR$(13)
1070 KEY 8,CHR$(27)+"TROFF"+CHR$(13)
1080 KEY 9,CHR$(27)+"KEY "
1090 KEY 10,CHR$(27)+"SCREEN 0,0,0"+CHR$(13)
1100 KEY ON
```
{% endraw %}

## PATCH.DOC

{% raw %}
```
DOS PATCH UTILITY Version 1.20



PATCH.COM is a utility intended to make disk based patches to DOS files.  PATCH
patches the files at an absolute offset in the file, or is capable of adding to
the end of the file.  The maximum size the file to be patched can be is 64K

Syntax for the command is as follows:


     PATCH [d:][path]filename.ext [d:][path]

where the first string is the name of the file containing the patches and the
second string is a path pointing to a directory containing the files to be
patched.  For example:

    PATCH C:\PATCHES\DOS20 A:\

would look in the \PATCHES subdirectory for the file DOS20.  This file should
contain the patches.  PATCH would then look for the files to be patched in the
root directory of the A:  drive.

PATCH will default to the current drive and current directory if a path and a
drive letter are not specified.  For example, for a user to install a patch to a
DOS disk, the easiest way to install the patches would be to copy PATCH and the
file containing the patches into the directory containing the files to be
patched.  Then by making this directory the current directory on the current
drive, the patch could be made by simply going PATCH filename.ext.  For example,
using the patch file DOS20 the intall procedure would be:

	       PATCH DOS20

This would patch files in the current directory of the current drive.  By using
the defaults, it becomes much simplier.  As typically the DOS files will be in
the root directory of a diskette, installing the patches should be an easy
process.  Note that PATCH does not work on write protected diskettes.  If a user
wishes to patch DOS files, he should make a non write protected copy and then
patch the copy.


To distribute PATCH, a user should be given a copy of PATCH.COM, the appropriate
patch file, and a list of what files are patched and the problems fixed.



```
{% endraw %}

## PATCH.TXT

{% raw %}
```
u 6227
a 6227
NOP
NOP
NOP

W
Q

```
{% endraw %}

## PATCHBAS.DOC

{% raw %}
```
NOTE: THIS ROUTINE WORKS BEST WITH THE VERSION OF BASICA.COM THAT COMES WITH 
PC-DOS 2.1. UNPREDICTABLE RESULTS MAY OCCUR WHEN IT IS USED WITH LATER 
VERSIONS OF BASICA. THIS SHOULD NOT BE A PROBLEM FOR MOST PCjr USERS SINCE 
MOST HAVE DOS 2.1.


        There was a file called BASICAJR.DOC on the California junior BBS at 
1(213)659-7187 that explained how to use Debug to patch BASICA.COM so that it 
would run on an IBMPCjr without cartridge basic installed.  Usually when you 
try to run any version of basic on a jr., you must have cartridge basic 
installed.  If you don't, you will get a message "Cartridge Required" as 
explained on p. A-7 of jr's Basic manual.  With this patch, you do not need to 
have the basic cartridge inserted; all you need is the patched version of 
BASICA on disk.  

        There are two reasons why running BASICA from disk is a good idea.
        
        First, it lets you use basic even without the special junior cartridge 
version, which you might want to do because you haven't got it or because
you have other special purpose cartridges in both slots and want to run a
quick basic program without rebooting the machine.  

        Second, because of the way cartridge basic checks for whether there is 
enough memory on the machine to run basic, if you have over 256K on your junior 
you may get an "Out of Memory" statement and won't be able to run basic even if 
you know you have 640K.  This is because cartridge basic does an Int 12H to get 
the total amount of memory, but it only reads the "low byte" returned.  This 
means that with more than 256K, it may think that it only has 18962 bytes free, 
not enough.  Disk basic will still run fine in this case.  The solution that 
most makers of hardware like memory expansions or second drives for the junior 
suggest, is to keep a copy of unmodified DOS to run basic with, but that is 
very inconvenient.  It means, for instance, that you can't run a quick basic 
program to set up your printer or keep a log of computer usage when running 123 
or a full-size word processor.  This patched version will work in those 
circumstances.  

        There are two small problems with this patch.  

        First, the original patch disabled the "soft" keys, the function keys 
that show up on line 25 of the basic screen. (See jr's Basic manual, p. 4-158.) 
You would have to type in "RUN" instead of using Fn2.  I have written a short 
basic program that corrects this; if you run it whenever you start disk basic, 
the function keys will work. You might want to modify the function keys after 
you take a look at this program and pp. 4-157 to 4-159 in the junior basic 
manual; you can set up a function key to clear the screen and return to the 
system if you like, or anything else you want.  While you are at it, you can 
change line 0 of the program to use colors you like; I have just added line 0 
because I like those colors on my basic screen. You don't need to do any of 
this if you don't mind the lack of soft keys.  If you do want to use the soft 
keys, to start basic with soft keys enabled type  BASICAJR KEY  then hit return 
key.  

        Second, cartridge basic has several features and commands that disk 
basic doesn't.  If a program was designed specifically for cartridge basic on 
the jr, it may not run under BASICA.  Except for those programs written 
specifically for jr's cartridge basic, disk basic should be o.k..  

        The simplest way to get disk basic is to just rename a copy of 
BASICA.COM something like JRBASIC.COM.  This works fine if you always keep 
your basic cartridge in one of the slots, but if you have two other cartridges 
there and try it, you will get the "Cartridge required" message.  This patched 
version of BASICA must also be renamed; if you just type in BASIC or BASICA, 
you will get thrown into the cartridge version. The automatic patch will rename 
BASICA BASICAJR.COM (for BASICA jr version).  To run disk basic, always 
remember to type in BASICAJR; to run it with working function keys, type in 
BASICAJR KEY.  

        To patch your copy of BASICA.COM, you must have copies of the following 
files on your disk: 
        BASICA.COM (program to be patched)
        DEBUG.COM (program that does the patching)
        PATCHBAS.BAT (program that automates the process)
        PATCH.TXT (file that tells debug what to do to basica)

        At the DOS prompt, type in PATCHJR; everything else should happen 
automatically.  When you see the DOS prompt again, you should have a patched
version of disk basic.                                    

                                                John Wager
                                                844 Carpenter
                                                Oak Park, Il.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0999

     Volume in drive A has no label
     Directory of A:\

    CACHEJR  BAS      4608   7-04-86   1:24a
    COMREST  EXE      1792  10-20-85   3:13p
    COMSPEC  COM       256   4-13-86  10:46p
    COMSWAP  DOC       617   2-27-87  11:47p
    COMSWAP  EXE      1792  10-20-85   3:12p
    DOS21              330   7-19-84  10:35a
    DOS21    DOC       914   7-19-84   9:58a
    HELP     HLP      9088   8-02-85  10:53p
    HUSH     COM         6   5-16-86   1:55p
    HUSH     DOC      1529   5-19-86   9:48a
    INT9JR   ASM      1243   5-21-87   5:34p
    INT9JR   COM        55   5-20-87   8:18p
    INT9JR   DOC      6015   5-21-87   6:42p
    INT9SYS  ASM      3663   5-21-87   5:45p
    INT9SYS  SYS       139   5-21-87   5:46p
    JRCONFIG DOC     24058   4-28-87  11:20p
    JRCONFIG DSK      2741   4-26-87  12:09p
    JRCONFIG NRD      2746   4-27-87   9:40p
    JRSPOOL  COM       768   2-22-86   1:42p
    JRSPOOL  DOC       819   5-26-86   3:12p
    JRTELE   COM     54436  12-06-85   8:12p
    JRTELE   DOC     31573  12-05-85   9:07p
    KEY      BAS       477   1-20-86  10:02p
    PATCH    COM      2090   7-18-84   2:41p
    PATCH    DOC      1921   7-19-84   9:58a
    PATCH    TXT        42   1-19-86  10:18p
    PATCHBAS BAT      2396   1-21-86  12:46a
    PATCHBAS DOC      4872   8-09-87   7:55p
    PCJR-NEW SCR     85293   1-27-87   9:46a
    PMM      DOC      3072   9-17-84   8:37p
    PMM      EXE     21248   9-17-84   8:34p
    RAM      SYS       441   9-22-86   9:12p
    SETRAM   EXE      2048   2-05-85   2:12p
    TSCRIPT  COM     30720   8-02-85  10:53p
    TSCRIPT  PAS     41088   8-02-85  10:53p
    GO       BAT       205  12-14-87   4:02p
           36 file(s)     345101 bytes
                               0 bytes free
