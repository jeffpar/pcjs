---
layout: page
title: "PC-SIG Diskette Library (Disk #2798)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2798/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2798"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## BB-01.ASM

{% raw %}
```
          EXTRN   _fg_getmode:far  ; Fastgraph's GETMODE routine
          EXTRN   _fg_reset:far    ; Fastgraph's RESET routine
          EXTRN   _fg_setmode:far  ; Fastgraph's SETMODE routine
          EXTRN   _fg_version:far  ; Fastgraph's VERSION routine

stackseg  SEGMENT stack         ; suppress the linker's
stackseg  ENDS                  ; "no stack segment" error message

_DATA     SEGMENT word public 'DATA'

major     dw      ?             ; major version number
minor     dw      ?             ; minor version number
old_mode  dw      ?             ; original video mode

_DATA     ENDS

dgroup    GROUP   _DATA
          ASSUME  cs:main_TEXT,ds:dgroup

main_TEXT SEGMENT byte public 'CODE'

start:    mov     ax,_DATA      ; load segment location
          mov     ds,ax         ; into DS register

          call    _fg_getmode   ; AX = current video mode
          mov     old_mode,ax   ; save it

          mov     ax,4          ; use video mode 4
          push    ax            ; pass argument to SETMODE
          call    _fg_setmode   ; establish CGA four-color mode
          add     sp,2          ; remove SETMODE argument

          push    old_mode      ; pass argument to SETMODE
          call    _fg_setmode   ; restore original video mode
          add     sp,2          ; remove SETMODE argument

          call    _fg_reset     ; restore screen attributes

          lea     ax,minor      ; get address of minor variable
          push    ax            ; pass argument #2 to VERSION
          lea     ax,major      ; get address of major variable
          push    ax            ; pass argument #1 to VERSION
          call    _fg_version   ; get the Fastgraph version number
          add     sp,4          ; remove VERSION arguments

          mov     ah,76         ; function 76: terminate process
          xor     al,al         ; errorlevel 0
          int     21h           ; exit to DOS

main_TEXT ENDS
          END     start
```
{% endraw %}

## CC-01.ASM

{% raw %}
```
;****************************************************************************
;
; int1C -- A medium model template to define an interrupt handler for INT 1C
;          (if flag=1) or to replace the original INT 1C handler (if flag=0).
;
; Prototype:  void int1C(int flag);
;
;****************************************************************************

           EXTRN   _status1:word ; C global variable for button 1 status
           EXTRN   _status2:word ; C global variable for button 2 status
           EXTRN   _fg_button:far ; Fastgraph routine

int1C_TEXT SEGMENT byte public 'CODE'
           ASSUME  cs:int1C_TEXT

int1C_CS   dw      ?             ; holds original INT 1C segment address
int1C_IP   dw      ?             ; holds original INT 1C offset
orig_DS    dw      ?             ; holds original data segment

_int1C     PROC    far
           PUBLIC  _int1C

           push    bp            ; save caller's BP register
           mov     bp,sp         ; make BP point to argument list
           push    si            ; save caller's SI register
           push    di            ; save caller's DI register

           mov     dx,[bp+6]     ; get the flag parameter
           or      dx,dx         ; replace the old interrupt handler?
           jz      replace       ; yes, branch to that processing

; define a new handler for INT 1C

define:    mov     ax,ds         ; put current data segment in AX
           mov     cs:orig_DS,ax ; save it in the control information area

           mov     al,1Ch        ; interrupt vector to save
           mov     ah,53         ; function 53: get interrupt vector
           int     21h           ; get the interrupt vector
           mov     cs:int1C_CS,es; save the segment
           mov     cs:int1C_IP,bx; save the offset

           push    ds            ; save our DS register
           mov     dx,offset handler ; get offset of interrupt handler
           mov     ax,seg handler; get segment of interrupt handler
           mov     ds,ax         ; put it in DS
           mov     al,1Ch        ; interrupt vector to change
           mov     ah,37         ; function 37: set interrupt vector
           int     21h           ; change the INT 1C vector to our handler
           pop     ds            ; restore our DS register

           jmp     short return  ; return to the caller

; replace the original handler for INT 1C

replace:   push    ds            ; save our DS register
           mov     dx,cs:int1C_IP; put original INT 1C offset in DX
           mov     ds,cs:int1C_CS; put original INT 1C segment in DS
           mov     ah,37         ; function 37: set interrupt vector
           mov     al,1Ch        ; interrupt vector 1C
           int     21h           ; restore original INT 1C vector
           pop     ds            ; restore our DS register

return:    xor     ax,ax         ; in case int1C was called as a function
           pop     di            ; restore our DI register
           pop     si            ; restore our SI register
           pop     bp            ; restore our BP register
           ret

_int1C     ENDP


handler    PROC    far           ; interrupt handler that replaces INT 1C

           cli                   ; disable interrupts while handler is active
           push    ax            ; save registers that may be altered
           push    bx
           push    cx
           push    dx
           push    di
           push    si
           push    ds
           push    es

           mov     ds,cs:orig_DS ; retrieve the original data segment

           mov     ax,1          ; use joystick 1
           push    ax            ; pass joystick number to button routine
           call    _fg_button    ; AX = button status for joystick 1
           add     sp,2          ; remove the argument
           or      _status1,ax   ; update the status variable for joystick 1

           mov     ax,2          ; use joystick 2
           push    ax            ; pass joystick number to button routine
           call    _fg_button    ; AX = button status for joystick 2
           add     sp,2          ; remove the argument
           or      _status2,ax   ; update the status variable for joystick 2

           pop     es            ; restore altered registers
           pop     ds
           pop     si
           pop     di
           pop     dx
           pop     cx
           pop     bx
           pop     ax
           iret                  ; return from the interrupt routine

handler    ENDP

int1C_TEXT ENDS
           END
```
{% endraw %}

## FILE2798.TXT

{% raw %}
```
Disk No: 2798
Disk Title: Fastgraph/Light #2 (2797 & 2799 also)
PC-SIG Version: S1.0

Program Title: Fastgraph/Light
Author Version: 1.04
Author Registration: $49.00
Special Requirements: 640K RAM, and a Compiler.

Fastgraph/Light 1.04 is a powerful programmer's graphics library.  The
zipped format is appropriate for BBS distribution.  Please note that
your customers only need a set of disks in one specific format, that is,
it is not necessary to send somebody both the zipped and unzipped
formats.  For the unzipped formats, the Fastgraph/Light installation
program asks for the disks by the names printed on the labels.  For this
reason, please include the exact disk names on any labels you affix to
the disks yo distribute.


PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## USER1.TXT

{% raw %}
```








Fastgraph (tm)

User's Guide




































                                                            Copyright (c) 1991
                                                           All Rights Reserved



                                                           Ted Gruber Software
                                                                  PO Box 13408
                                                          Las Vegas, NV  89112

                                                                (702) 735-1980
Copyright (c) 1991 by Ted Gruber Software.

All rights reserved.  This publication and its associated software are sold
without warranties, either expressed or implied, regarding their
merchantability or fitness for any particular application or purpose.  The
information in this publication is subject to change without notice and does
not represent a commitment on the part of Ted Gruber Software.  In no event
shall Ted Gruber Software be liable for any loss of profit or any other
commercial damage, including but not limited to special, incidental,
consequential, or other damages resulting from the use of or the inability to
use this product, even if Ted Gruber Software has been notified of the
possibility of such damages.


First Printing, June 1991

Fastgraph version 2.00
Fastgraph/Light version 1.00




DFI is a registered trademark of Diamond Flower Electric Instrument Co., Inc.

Fastgraph and Fastgraph/Light are trademarks of Ted Gruber Software.

Hercules is a trademark of Hercules Computer Technology.

IBM, IBM PC, IBM PC/XT, IBM PC/AT, PS/2, PCjr, and PC-DOS are registered
trademarks of International Business Machines, Inc.

Logitech is a trademark of LOGITECH, Inc.

Microsoft, Microsoft Mouse, and MS-DOS are registered trademarks of Microsoft
Corporation.

QuickBASIC and QuickC are trademarks of Microsoft Corporation.

Tandy is a registered trademark of Tandy Corporation.

Turbo C is a registered trademark of Borland International, Inc.


All other brand and product names mentioned in this publication are
trademarks or registered trademarks of their respective holders.

                      T a b l e   o f   C o n t e n t s


Chapter 1

Introduction  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    1
     What is Fastgraph? . . . . . . . . . . . . . . . . . . . . . . . . .    2
     Fastgraph/Light  . . . . . . . . . . . . . . . . . . . . . . . . . .    2
     Prerequisite Knowledge . . . . . . . . . . . . . . . . . . . . . . .    2
     Supported Compilers  . . . . . . . . . . . . . . . . . . . . . . . .    3
     Installing Fastgraph . . . . . . . . . . . . . . . . . . . . . . . .    3
     Fastgraph Naming Conventions . . . . . . . . . . . . . . . . . . . .    4
     Compilation and Linking  . . . . . . . . . . . . . . . . . . . . . .    5
          Microsoft C . . . . . . . . . . . . . . . . . . . . . . . . . .    5
          Microsoft QuickC  . . . . . . . . . . . . . . . . . . . . . . .    6
          Turbo C . . . . . . . . . . . . . . . . . . . . . . . . . . . .    8
          Microsoft QuickBASIC  . . . . . . . . . . . . . . . . . . . . .    9
          Microsoft FORTRAN . . . . . . . . . . . . . . . . . . . . . . .   11
     Fastgraph/Light Video Driver . . . . . . . . . . . . . . . . . . . .   12

Chapter 2

PC and PS/2 Video Modes . . . . . . . . . . . . . . . . . . . . . . . . .   15
     Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   16
     Text Modes . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   17
     Graphics Modes . . . . . . . . . . . . . . . . . . . . . . . . . . .   19

Chapter 3

Initializing the Video Environment  . . . . . . . . . . . . . . . . . . .   27
     Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   28
     Establishing a Text Mode . . . . . . . . . . . . . . . . . . . . . .   28
     Establishing a Graphics Mode . . . . . . . . . . . . . . . . . . . .   31
     Summary of Video Initialization Routines . . . . . . . . . . . . . .   34

Chapter 4

Coordinate Systems  . . . . . . . . . . . . . . . . . . . . . . . . . . .   37
     Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   38
     Character Space  . . . . . . . . . . . . . . . . . . . . . . . . . .   38
     Screen Space . . . . . . . . . . . . . . . . . . . . . . . . . . . .   39
     World Space  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   40
     Conversion Routines  . . . . . . . . . . . . . . . . . . . . . . . .   41
     Summary of Coordinate Routines . . . . . . . . . . . . . . . . . . .   42

Chapter 5

The Use of Color  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   43
     Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   44
     Text Modes . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   44
          Color Modes . . . . . . . . . . . . . . . . . . . . . . . . . .   44
          Monochrome Mode . . . . . . . . . . . . . . . . . . . . . . . .   45
     Graphics Modes . . . . . . . . . . . . . . . . . . . . . . . . . . .   46
          CGA Color Modes . . . . . . . . . . . . . . . . . . . . . . . .   47
          CGA Two-Color Mode  . . . . . . . . . . . . . . . . . . . . . .   48
          Tandy and PCjr Modes  . . . . . . . . . . . . . . . . . . . . .   49

          Hercules Mode . . . . . . . . . . . . . . . . . . . . . . . . .   50
          Hercules Low-Resolution Mode  . . . . . . . . . . . . . . . . .   51
          EGA 200-Line Modes  . . . . . . . . . . . . . . . . . . . . . .   52
          EGA Monochrome Mode . . . . . . . . . . . . . . . . . . . . . .   54
          EGA Enhanced Mode . . . . . . . . . . . . . . . . . . . . . . .   55
          VGA and MCGA Two-Color Mode . . . . . . . . . . . . . . . . . .   57
          VGA 16-Color Mode . . . . . . . . . . . . . . . . . . . . . . .   59
          VGA and MCGA 256-Color Modes  . . . . . . . . . . . . . . . . .   60
     Defining All Palette Registers . . . . . . . . . . . . . . . . . . .   62
     Virtual Colors . . . . . . . . . . . . . . . . . . . . . . . . . . .   63
     A Multiple-Mode Example  . . . . . . . . . . . . . . . . . . . . . .   65
     Summary of Color-Related Routines  . . . . . . . . . . . . . . . . .   67

Chapter 6

Graphics Fundamentals . . . . . . . . . . . . . . . . . . . . . . . . . .   69
     Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   70
     Clearing the Screen  . . . . . . . . . . . . . . . . . . . . . . . .   70
     Clipping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   70
     Points . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   70
     The Graphics Cursor  . . . . . . . . . . . . . . . . . . . . . . . .   73
     Solid Lines  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   74
     Dashed Lines . . . . . . . . . . . . . . . . . . . . . . . . . . . .   76
     Polygons, Circles, and Ellipses  . . . . . . . . . . . . . . . . . .   77
     Solid Rectangles . . . . . . . . . . . . . . . . . . . . . . . . . .   80
     Dithered Rectangles  . . . . . . . . . . . . . . . . . . . . . . . .   81
     Region Fill  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   88
     Summary of Fundamental Graphics Routines . . . . . . . . . . . . . .   89

Chapter 7

Character Display Routines  . . . . . . . . . . . . . . . . . . . . . . .   93
     Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   94
     Character Space  . . . . . . . . . . . . . . . . . . . . . . . . . .   94
     Hardware Characters  . . . . . . . . . . . . . . . . . . . . . . . .   95
     Conversion Routines  . . . . . . . . . . . . . . . . . . . . . . . .  100
     Software Characters  . . . . . . . . . . . . . . . . . . . . . . . .  101
     Bit-Mapped Characters  . . . . . . . . . . . . . . . . . . . . . . .  107
     Summary of Character Display Routines  . . . . . . . . . . . . . . .  107

Chapter 8

Video Page Management . . . . . . . . . . . . . . . . . . . . . . . . . .  109
     Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  110
     Physical Pages and Virtual Pages . . . . . . . . . . . . . . . . . .  110
     Pages With Special Meanings  . . . . . . . . . . . . . . . . . . . .  111
     Some Simple Examples . . . . . . . . . . . . . . . . . . . . . . . .  111
     Text Cursors . . . . . . . . . . . . . . . . . . . . . . . . . . . .  118
     Obtaining Video Page Information . . . . . . . . . . . . . . . . . .  119
     Considerations for Virtual Pages . . . . . . . . . . . . . . . . . .  120
     Summary of Video Page Management Routines  . . . . . . . . . . . . .  120

Chapter 9

Images and Image Management . . . . . . . . . . . . . . . . . . . . . . .  121
     Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  122
     Mode-Independent Bit-Mapped Images . . . . . . . . . . . . . . . . .  122
     Mode-Specific Bit-Mapped Images  . . . . . . . . . . . . . . . . . .  126

          Regular Images  . . . . . . . . . . . . . . . . . . . . . . . .  127
          Clipped Images  . . . . . . . . . . . . . . . . . . . . . . . .  134
          Reversed Images . . . . . . . . . . . . . . . . . . . . . . . .  135
          Reversed Clipped Images . . . . . . . . . . . . . . . . . . . .  135
          Some Examples . . . . . . . . . . . . . . . . . . . . . . . . .  135
     Pixel Run Maps . . . . . . . . . . . . . . . . . . . . . . . . . . .  138
     Display Patterns . . . . . . . . . . . . . . . . . . . . . . . . . .  144
     Masking Maps . . . . . . . . . . . . . . . . . . . . . . . . . . . .  150
     Retrieving Images  . . . . . . . . . . . . . . . . . . . . . . . . .  153
     Byte Boundaries  . . . . . . . . . . . . . . . . . . . . . . . . . .  158
     Image Transfer Routines  . . . . . . . . . . . . . . . . . . . . . .  159
     Summary of Image Display Routines  . . . . . . . . . . . . . . . . .  167

Chapter 10

Animation Techniques  . . . . . . . . . . . . . . . . . . . . . . . . . .  169
     Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  170
     Simple Animation . . . . . . . . . . . . . . . . . . . . . . . . . .  170
     XOR Animation  . . . . . . . . . . . . . . . . . . . . . . . . . . .  172
     Static Frame Animation . . . . . . . . . . . . . . . . . . . . . . .  173
     Dynamic Frame Animation  . . . . . . . . . . . . . . . . . . . . . .  176
     Page Flipping  . . . . . . . . . . . . . . . . . . . . . . . . . . .  178
     Summary of Animation Techniques  . . . . . . . . . . . . . . . . . .  179

Chapter 11

Special Effects . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  181
     Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  182
     Screen Dissolving  . . . . . . . . . . . . . . . . . . . . . . . . .  182
     Scrolling  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  183
     Changing the Screen Origin . . . . . . . . . . . . . . . . . . . . .  187
     Summary of Special Effects Routines  . . . . . . . . . . . . . . . .  188

Chapter 12

Input Device Support  . . . . . . . . . . . . . . . . . . . . . . . . . .  191
     Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  192
     Keyboard Support . . . . . . . . . . . . . . . . . . . . . . . . . .  192
          Reading Keystrokes  . . . . . . . . . . . . . . . . . . . . . .  194
          Testing and Setting Key States  . . . . . . . . . . . . . . . .  196
     Mouse Support  . . . . . . . . . . . . . . . . . . . . . . . . . . .  197
          Initializing the Mouse  . . . . . . . . . . . . . . . . . . . .  197
          Controlling the Mouse Cursor  . . . . . . . . . . . . . . . . .  198
          Reporting the Mouse Status  . . . . . . . . . . . . . . . . . .  200
          Defining the Mouse Cursor . . . . . . . . . . . . . . . . . . .  202
     Joystick Support . . . . . . . . . . . . . . . . . . . . . . . . . .  210
          Initializing Joysticks  . . . . . . . . . . . . . . . . . . . .  210
          Reporting Joystick Status . . . . . . . . . . . . . . . . . . .  211
          Keyboard Emulation  . . . . . . . . . . . . . . . . . . . . . .  213
          Special Joystick Considerations . . . . . . . . . . . . . . . .  214
     Summary of Input Routines  . . . . . . . . . . . . . . . . . . . . .  214

Chapter 13

Sound Effects . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  217
     Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  218
     Sound Sources  . . . . . . . . . . . . . . . . . . . . . . . . . . .  218
     Synchronous Sound  . . . . . . . . . . . . . . . . . . . . . . . . .  218

     Asynchronous Sound . . . . . . . . . . . . . . . . . . . . . . . . .  223
     Summary of Sound Routines  . . . . . . . . . . . . . . . . . . . . .  228

Chapter 14

Program Timing  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  229
     Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  230
     Real-Time Routines . . . . . . . . . . . . . . . . . . . . . . . . .  230
     Routines Dependent on the System Speed . . . . . . . . . . . . . . .  231
     Summary of Timing Routines . . . . . . . . . . . . . . . . . . . . .  233

Chapter 15

Miscellaneous Routines  . . . . . . . . . . . . . . . . . . . . . . . . .  235
     Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  236
     Determining Available Memory . . . . . . . . . . . . . . . . . . . .  236
     Choosing the Video Memory Update Function  . . . . . . . . . . . . .  237
     Summary of Miscellaneous Routines  . . . . . . . . . . . . . . . . .  238

Appendix A

Fastgraph Utilities . . . . . . . . . . . . . . . . . . . . . . . . . . .  239
     Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  240
     SNAPSHOT Utility . . . . . . . . . . . . . . . . . . . . . . . . . .  240
     CLIP Utility . . . . . . . . . . . . . . . . . . . . . . . . . . . .  241
     CONVERT Utility  . . . . . . . . . . . . . . . . . . . . . . . . . .  243

Appendix B

Using Fastgraph from Assembly Language  . . . . . . . . . . . . . . . . .  245

Appendix C

Interrupts and Fastgraph  . . . . . . . . . . . . . . . . . . . . . . . .  249
     Interrupts Used by Fastgraph . . . . . . . . . . . . . . . . . . . .  250
     Extending the Time-of-Day Interrupt  . . . . . . . . . . . . . . . .  250

Appendix D

Contents of the Compiler-Specific Libraries . . . . . . . . . . . . . . .  253



Chapter 1

Introduction
2   Fastgraph User's Guide


What is Fastgraph?

     Fastgraph is a library of more than 150 highly-optimized routines that
are callable from high-level and assembly language programs running under the
MS-DOS or PC-DOS operating systems.  This collection of routines provides a
programmer with proven, powerful tools to take command of the PC and PS/2
video environment.  In addition to its video support, Fastgraph also contains
routines to perform keyboard, mouse, and joystick control, as well as music
and sound capabilities.  Fastgraph is an ideal development tool for
entertainment and educational software, presentation graphics products,
scientific and engineering applications, CAD/CAM, animation, or just about
any application that requires robust graphics.

     As its name implies, the most notable feature of Fastgraph is its speed.
Virtually all of Fastgraph is written in 8086 assembly language, and each
routine has been optimized by hand to provide maximum performance.

     Fastgraph supports all of the standard text and graphics video modes
used by the IBM PC (PC, PC/XT, and PC/AT) and PS/2 families and compatible
systems.  In addition, Fastgraph provides support for a commonly used video
mode for the Tandy 1000 series computers and the PCjr.  Even though the
graphics mode of the Hercules Graphics Card is not an IBM standard, its
popularity has made it a de facto standard, and for this reason Fastgraph
also supports it.  A complete discussion of all of Fastgraph's supported
video modes appears in the next chapter.


Fastgraph/Light

     Fastgraph/Light is a subset of Fastgraph.  It includes all of
Fastgraph's features except the redefinable world space coordinate system and
the routines pertaining to software characters.  Programs created using
Fastgraph/Light are 100% source code compatible with Fastgraph.

     The most important difference between Fastgraph/Light and Fastgraph is
the method of running a program created with the two products.  With
Fastgraph, any of its routines used in your program are linked directly into
the resulting .EXE file.  With Fastgraph/Light, however, this is not the
case.  Instead, the Fastgraph/Light routines provide an interface to an
external driver, called the Fastgraph/Light Video Driver, which must be
loaded separately before running programs that call any Fastgraph/Light
routines.  A further discussion of this driver begins on page 12.

     In this document, and in the accompanying Fastgraph Reference Manual,
references to Fastgraph also apply to Fastgraph/Light unless stated
otherwise.


Prerequisite Knowledge

     Fastgraph is a programming tool, which means programmers are its
intended audience.  For this reason, the Fastgraph User's Guide and the
accompanying Fastgraph Reference Manual assume you have a knowledge of
programming.  Virtually all of the examples in these two references are
written in the C programming language, so a knowledge of C would be
especially helpful.  However, the examples intentionally avoid using any of
                                                  Chapter 1:  Introduction   3

C's features that might not be readily apparent to a programmer unfamiliar
with C.  Additionally, a knowledge of converting numbers between binary,
decimal, and hexadecimal is assumed.


Supported Compilers

     You can use Fastgraph with any compilers or assemblers that use the same
calling and naming conventions as the small, medium, or large memory models
of the supported compilers.  Mixed language programming is allowed to the
extent it is supported by the language translators and linker being used.
The following compilers are supported at this time:

       Microsoft C (version 5.0 or later)
       Microsoft QuickC (version 1.01 or later)
       Borland's Turbo C (version 2.0 or later)
       Microsoft QuickBASIC (version 4.0 or later)
       Microsoft FORTRAN (version 4.0 or later)

The listed version numbers are the compiler versions under which Fastgraph
was developed and tested.  Fastgraph may or may not work with earlier
versions of these compilers.  The use of Fastgraph from assembly language
programs is addressed in Appendix B.


Installing Fastgraph

     This section explains how to use the INSTALL program to load Fastgraph
(or Fastgraph/Light) and its related files on a hard disk.  The installation
program lets you select the compilers and memory models you wish to use with
Fastgraph.  It also gives you the opportunity to load many example Fastgraph
programs specific to the compilers you choose.

     Before you start the installation, you should use the DOS commands COPY
or DISKCOPY to make working copies of the distribution disks (refer to your
DOS reference manual if you are not familiar with these commands).  Once you
have created the working copies, store the original disks in a safe place. 
Install Fastgraph from the working copies you just created.

     For simplicity, we'll assume you are installing Fastgraph from the
diskette drive A: to the hard drive C:, but you can of course use any
available drives.  The Fastgraph distribution disk labeled "Installation and
Utilities" contains Fastgraph's INSTALL program.  Place this disk in the A:
drive, make A: your current drive, and enter the command INSTALL, as shown
below.


                                  C> A:
                                  A> INSTALL


From this point, just follow the directions on each screen.  At any time, you
can press the Esc key to abort the installation.
4   Fastgraph User's Guide

     You can install support for additional compilers or memory models at any
time.  If you choose to do this, you should use the command INSTALL /L to
avoid copying the files common to all compilers and memory models.


Fastgraph Naming Conventions

     The names of all Fastgraph routines begin with the three characters
"fg_".  This prefix helps identify Fastgraph routines within a program, and
it also reduces the possibility of name conflicts that might otherwise occur
between Fastgraph and other third party libraries.

     Because QuickBASIC does not permit underscores in identifiers, the
QuickBASIC versions of Fastgraph routines begin with the two characters "FG".
For example, the fg_version routine is named FGversion in the QuickBASIC
libraries.  All subsequent references to Fastgraph routines in this manual
and the accompanying Fastgraph Reference Manual will use the fg_ naming
convention instead of the QuickBASIC names.
                                                  Chapter 1:  Introduction   5


Compilation and Linking

     To build an executable (.EXE) file for a program that uses Fastgraph
routines, first compile or assemble the program using the small, medium, or
large memory model.  This step produces an object (.OBJ) file, which is then
linked with Fastgraph and any other object libraries to produce an executable
file.  The following sections show the simplest compilation and linking
procedures for each of the supported compilers.

     Example 1-1 is a C program that uses the Fastgraph routine fg_version to
display the version number for your copy of Fastgraph (QuickBASIC and FORTRAN
versions of this program are presented in the sections that discuss those
compilers).  If you loaded the example programs when you installed Fastgraph,
the file \FG\EXAMPLES\01-01.C contains the source code for this program.  You
can use example 1-1 to test the compilation and linking process for the
memory models and compilers you'll be using with Fastgraph.

                                 Example 1-1.

      #include <stdio.h>
      #include <fastgraf.h>

      main()
      {
         int major;
         int minor;

         fg_version(&major,&minor);
         printf("This is version %d.%2.2d of Fastgraph.\n",major,minor);
      }


The file FASTGRAF.H contains the C function prototypes for each Fastgraph
routine.  It should reside in the directory where the compiler normally
searches for other .H files.  For the Microsoft C or QuickC compilers,
FASTGRAF.H can instead reside in any of the directories specified by the
INCLUDE environment variable.


Microsoft C

     Microsoft C programs are compiled and linked by entering a CL command at
the DOS command prompt.  The format of the CL command for compiling a program
and linking it with Fastgraph is


        CL <model> <filename> /link <fg_library> [<fg_extended>] [/E]


where:

     <model>        specifies the compiler memory model you'll be using.
                    It must be either /AS (for the small model), /AM
                    (for the medium model), or /AL (for the large
                    model).
6   Fastgraph User's Guide

     <filename>     is the name of the file containing your program.  It
                    may include a path specification.

     <fg_library>   is the name of a standard Fastgraph/Light or
                    Fastgraph library.  For Fastgraph/Light, the library
                    name is FGLS (for the small model), FGLM (for the
                    medium model), or FGLL (for the large model).  For
                    Fastgraph, the library name is FGS (for the small
                    model), FGM (for the medium model), or FGL (for the
                    large model).

     <fg_extended>  is the name of an optional compiler-specific
                    extended Fastgraph library.  You need to specify an
                    extended library name only if your program calls any
                    of the Fastgraph routines listed in Appendix D.  The
                    extended library name is FGMSCS (for the small
                    model), FGMSCM (for the medium model), or FGMSCL
                    (for the large model).  Fastgraph/Light does not use
                    extended libraries.

The /E linker option is not required but will produce a smaller .EXE file if
specified.

     For example, to compile the program 01-01.C under the medium memory
model and then link it with Fastgraph, you could use the following CL
command:


                      CL /AM 01-01.C /link FGM FGMSCM /E


Although we specified the extended library name FGMSCM on the command line,
we didn't need to in this example because the program doesn't call any of the
compiler-specific Fastgraph routines listed in Appendix D.  If you were using
Fastgraph/Light instead of Fastgraph, the CL command would be:


                         CL /AM 01-01.C /link FGLM /E


For more information about memory models or other compilation and linking
options, please refer to the Microsoft C Optimizing Compiler User's Guide,
published by Microsoft Corporation.


Microsoft QuickC

     Microsoft QuickC allows you to compile and link a program directly from
the DOS command line, or from within its programming environment.  To use
Fastgraph from QuickC's programming environment, just specify the quick
library name FGQC when starting QuickC, as shown below.


                                  QC /lFGQC


If you are using Fastgraph/Light, use the library name FGLQC instead of FGQC.
                                                  Chapter 1:  Introduction   7


     You can also compile and link a QuickC program from the DOS command line
using the QCL command.  The format of the QCL command for compiling a program
and linking it with Fastgraph is


        QCL <model> <filename> /link <fg_library> [<fg_extended>] [/E]


where:

     <model>        specifies the compiler memory model you'll be using.
                    It must be either /AS (for the small model), /AM
                    (for the medium model), or /AL (for the large
                    model).

     <filename>     is the name of the file containing your program.  It
                    may include a path specification.

     <fg_library>   is the name of a standard Fastgraph/Light or
                    Fastgraph library.  For Fastgraph/Light, the library
                    name is FGLS (for the small model), FGLM (for the
                    medium model), or FGLL (for the large model).  For
                    Fastgraph, the library name is FGS (for the small
                    model), FGM (for the medium model), or FGL (for the
                    large model).

     <fg_extended>  is the name of an optional compiler-specific
                    extended Fastgraph library.  You need to specify an
                    extended library name only if your program calls any
                    of the Fastgraph routines listed in Appendix D.  The
                    extended library name is FGMSCS (for the small
                    model), FGMSCM (for the medium model), or FGMSCL
                    (for the large model).  Fastgraph/Light does not use
                    extended libraries.

The /E linker option is not required but will produce a smaller .EXE file if
specified.

     For example, to compile the program 01-01.C under the medium memory
model and then link it with Fastgraph, you could use the following QCL
command:


                     QCL /AM 01-01.C /link FGM FGMSCM /E


Although we specified the extended library name FGMSCM on the command line,
we didn't need to in this example because the program doesn't call any of the
compiler-specific Fastgraph routines listed in Appendix D.  If you were using
Fastgraph/Light instead of Fastgraph, the QCL command would be:


                        QCL /AM 01-01.C /link FGLM /E

8   Fastgraph User's Guide

For more information about memory models or other compilation and linking
options, please refer to the Microsoft QuickC Compiler Programmer's Guide,
published by Microsoft Corporation.


Turbo C

     Turbo C allows you to compile and link a program directly from the DOS
command line, or from within its integrated development environment.  To use
Fastgraph from Turbo C's integrated development environment, you must make
sure the compiler options match one of Fastgraph's available memory models
(small, medium, or large), and then create a project file that links with the
corresponding Fastgraph libraries (as listed below).

     You can also compile and link a Turbo C program from the DOS command
line using the TCC command.  The format of the TCC command for compiling a
program and linking it with Fastgraph is


             TCC <model> <filename> <fg_library> [<fg_extended>]


where:

     <model>        specifies the compiler memory model you'll be using.
                    It must be either -ms (for the small model), -mm
                    (for the medium model), or -ml (for the large
                    model).

     <filename>     is the name of the file containing your program.  It
                    may include a path specification.

     <fg_library>   is the name of a standard Fastgraph/Light or
                    Fastgraph library.  For Fastgraph/Light, the library
                    name is FGLS.LIB (for the small model), FGLM.LIB
                    (for the medium model), or FGLL.LIB (for the large
                    model).  For Fastgraph, the library name is FGS.LIB
                    (for the small model), FGM.LIB (for the medium
                    model), or FGL.LIB (for the large model).

     <fg_extended>  is the name of an optional compiler-specific
                    extended Fastgraph library.  You need to specify an
                    extended library name only if your program calls any
                    of the Fastgraph routines listed in Appendix D.  The
                    extended library name is FGTCS.LIB (for the small
                    model), FGTCM.LIB (for the medium model), or
                    FGTCL.LIB (for the large model).  Fastgraph/Light
                    does not use extended libraries.

     For example, to compile the program 01-01.C under the medium memory
model and then link it with Fastgraph, you could use the following TCC
command:


                      TCC -mm 01-01.C FGM.LIB FGTCM.LIB

                                                  Chapter 1:  Introduction   9

Although we specified the extended library name FGTCM.LIB on the command
line, we didn't need to in this example because the program doesn't call any
of the compiler-specific Fastgraph routines listed in Appendix D.  If you
were using Fastgraph/Light instead of Fastgraph, the TCC command would be:


                           TCC -mm 01-01.C FGLM.LIB


For more information about memory models or other compilation and linking
options, please refer to the Turbo C User's Guide and the Turbo C Reference
Guide, both published by Borland International.


Microsoft QuickBASIC

     Example 1-2 is a QuickBASIC program that uses the Fastgraph routine
FGversion to display the version number for your copy of Fastgraph.  If you
loaded the example programs when you installed Fastgraph, the file
\FG\EXAMPLES\01-02.BAS contains the source code for this program.  You can
use example 1-2 to test the QuickBASIC compilation and linking process for
Fastgraph.

                                 Example 1-2.

          REM $INCLUDE: 'fastgraf.bi'

          DEFINT A-Z

          FGversion Major, Minor
          Version! = Major + Minor*0.01

          PRINT USING "This is version #.## of Fastgraph."; Version!

          END


You must include the DECLARE commands in the file FASTGRAF.BI at the
beginning of each QuickBASIC module.  This file should reside in the
directory where the compiler normally searches for other .BI files, or in any
of the directories specified by the INCLUDE environment variable.  The
DECLARE commands in this file automatically provide the calling convention
and naming convention for each Fastgraph routine.  In addition, they relieve
the QuickBASIC programmer of distinguishing arguments passed by value from
those passed by reference.

     Microsoft QuickBASIC allows you to compile and link a program directly
from the DOS command line, or from within its programming environment.  To
use Fastgraph from QuickBASIC's programming environment, just specify the
quick library name FGQB when starting QuickBASIC, as shown below.


                                  QB /lFGQB


If you are using Fastgraph/Light, use the library name FGLQB instead of FGQB.
10   Fastgraph User's Guide

     You can also compile and link a QuickBASIC program from the DOS command
line using the BC and LINK commands.  The format of these commands for
compiling a program and linking it with Fastgraph is


                  BC <filename>;
                  LINK [/E] <object_file>,,NUL,<fg_library>


where:

     <filename>     is the name of the file containing your program.  It
                    may include a path specification.

     <object_file>  is the name of the object file produced by the BC
                    command.  By default, this will be the same as
                    <filename>, but with an extension of .OBJ rather
                    than .BAS.

     <fg_library>   is the name of the standard Fastgraph/Light or
                    Fastgraph library.  For Fastgraph/Light, the library
                    name is FGLQB.  For Fastgraph, the library name is
                    FGQB.  QuickBASIC does not use extended Fastgraph
                    libraries.

The /E linker option is not required but will produce a smaller .EXE file if
specified.

     For example, to compile the program 01-02.BAS and then link it with
Fastgraph, you could use the following commands:


                         BC 01-02.BAS;
                         LINK /E 01-02.OBJ,,NUL,FGQB


If you were using Fastgraph/Light instead of Fastgraph, the commands would
be:


                         BC 01-02.BAS;
                         LINK /E 01-02.OBJ,,NUL,FGLQB


For more information about other compilation and linking options, please
refer to the Microsoft QuickBASIC: Programming in BASIC manual, published by
Microsoft Corporation.

     All of the remaining example programs in the Fastgraph User's Guide are
written in the C programming language.  However, when you install Fastgraph
for Microsoft QuickBASIC, the installation procedure copies QuickBASIC
versions of the example programs to the \FG\EXAMPLES directory.
                                                 Chapter 1:  Introduction   11


Microsoft FORTRAN

     Example 1-3 is a FORTRAN program that uses the Fastgraph routine
fg_version to display the version number for your copy of Fastgraph.  If you
loaded the example programs when you installed Fastgraph, the file
\FG\EXAMPLES\01-03.FOR contains the source code for this program.  You can
use example 1-3 to test the FORTRAN compilation and linking process for the
memory models you'll be using with Fastgraph.

                                 Example 1-3.

     $INCLUDE: '\FG\INTRFACE.FOR'

           PROGRAM MAIN

           INTEGER*2 MAJOR
           INTEGER*2 MINOR

           CALL FG_VERSION (MAJOR, MINOR)

           WRITE (6,10) MAJOR, MINOR
     10    FORMAT (' This is version ', I1, '.', I2.2, ' of Fastgraph.')

           STOP ' '
           END


You must include the INTERFACE statements in the file INTRFACE.FOR at the
beginning of your program (this file should reside in the \FG directory).
The INTERFACE statements in this file automatically provide the calling
convention and naming convention for each Fastgraph routine.  In addition,
they relieve the FORTRAN programmer of distinguishing arguments passed by
value from those passed by reference.

     Microsoft FORTRAN programs are compiled and linked by entering an FL
command at the DOS command prompt.  The format of the FL command for
compiling a program and linking it with Fastgraph is



 FL /FPi /4I2 /4Nt <model> <filename> /link <fg_library> [<fg_extended>] [/E]



where:

     <model>        specifies the compiler memory model you'll be using.
                    It must be either /AM (for the medium model) or /AL
                    (for the large model).  Microsoft FORTRAN does not
                    support the small model.

     <filename>     is the name of the file containing your program.  It
                    may include a path specification.
12   Fastgraph User's Guide

     <fg_library>   is the name of a standard Fastgraph/Light or
                    Fastgraph library.  For Fastgraph/Light, the library
                    name is FGLM (for the medium model) or FGLL (for the
                    large model).  For Fastgraph, the library name is
                    FGM (for the medium model) or FGL (for the large
                    model).

     <fg_extended>  is the name of an optional compiler-specific
                    extended Fastgraph library.  You need to specify an
                    extended library name only if your program calls any
                    of the Fastgraph routines listed in Appendix D.  The
                    extended library name is FGMSFM (for the medium
                    model) or FGMSFL (for the large model).
                    Fastgraph/Light does not use extended libraries.

The /E linker option is not required but will produce a smaller .EXE file if
specified.

     For example, to compile the program 01-03.FOR under the medium memory
model and then link it with Fastgraph, you could use the following FL
command:


             FL /FPi /4I2 /4Nt /AM 01-03.FOR /link FGM FGMSFM /E


Although we specified the extended library name FGMSFM on the command line,
we didn't need to in this example because the program doesn't call any of the
compiler-specific Fastgraph routines listed in Appendix D.  If you were using
Fastgraph/Light instead of Fastgraph, the FL command would be:


                FL /FPi /4I2 /4Nt /AM 01-03.FOR /link FGLM /E


For more information about memory models or other compilation and linking
options, please refer to the Microsoft FORTRAN Optimizing Compiler User's
Guide, published by Microsoft Corporation.

     All of the remaining example programs in the Fastgraph User's Guide are
written in the C programming language.  However, when you install Fastgraph
for the Microsoft FORTRAN compiler, the installation procedure copies FORTRAN
versions of the example programs to the \FG\EXAMPLES directory.


Fastgraph/Light Video Driver

     As mentioned earlier, running any program created with Fastgraph/Light
requires an external program called the Fastgraph/Light Video Driver.  The
video driver is a terminate and stay resident program (TSR) that provides an
interface between your program and Fastgraph.  Once loaded, the video driver
uses about 60,000 bytes of conventional memory.

     To load the video driver, enter the command FGDRIVER at the DOS command
prompt (assuming FGDRIVER.EXE is in the current directory, or the \FG
directory is in your DOS path specification).  The driver will display a
message indicating whether or not it was loaded successfully.  After you load
                                                 Chapter 1:  Introduction   13

the driver, just run a program created with Fastgraph/Light as would run any
other program.  If you try running a program that uses Fastgraph/Light
without first loading the video driver, the message "Fastgraph/Light video
driver not installed" will appear.

     You don't need to load the driver before running each program, just once
per system boot (in fact, the driver will display an "already loaded" message
if you try to load it more than once).  If you want to unload the video
driver, just enter FGDRIVER /U at the DOS command prompt.  The unload
operation will work completely only if the video driver was the last TSR
loaded.  If it wasn't the last TSR, the driver will still unload, but the
memory it uses will not be released back to DOS.
14   Fastgraph User's Guide


Chapter 2

PC and PS/2 Video Modes
16   Fastgraph User's Guide


Overview

     In the PC and PS/2 worlds, the method by which information appears on
the computer's display screen is determined by the video mode currently in
effect.  The video modes have different resolutions, different character or
pixel attributes, different video memory structures, and other inherent
hardware differences.  However, you do not need an in-depth knowledge of
these video internals, because Fastgraph handles the necessary details.

     The PC and PS/2 video modes may be separated into two major classes:
text modes and graphics modes.  In text modes, the display screen is divided
into character cells.  There are 25 rows and either 40 or 80 columns of
cells, and in each cell we can store any of the 256 characters in the IBM PC
character set.  Each character has an associated attribute that determines
such things as its foreground color, its background color, and whether or not
the character blinks.  In graphics modes, the display screen is divided into
picture elements, or pixels.  Depending on the video mode, the number of
pixel rows ranges between 200 and 480, while the number of columns ranges
between 320 and 720.  Each pixel has an associated value that determines the
color of the pixel.  The number of character cells or pixels available is
called the resolution of the screen.

     The display adapter (graphics card) and the video display (monitor)
connected to it determine the video modes available on a given system.  The
following table summarizes the characteristics of the PC and PS/2 video modes
that Fastgraph supports.

 Mode                       No. of     Supported          Supported
Number  Type    Resolution  Colors     Adapters           Displays

   0    Text    40 x 25     16/8       CGA,EGA,VGA,MCGA   RGB,ECD,VGA
   1    Text    40 x 25     16/8       CGA,EGA,VGA,MCGA   RGB,ECD,VGA
   2    Text    80 x 25     16/8       CGA,EGA,VGA,MCGA   RGB,ECD,VGA
   3    Text    80 x 25     16/8       CGA,EGA,VGA,MCGA   RGB,ECD,VGA
   4  Graphics  320 x 200   4          CGA,EGA,VGA,MCGA   RGB,ECD,VGA
   5  Graphics  320 x 200   4          CGA,EGA,VGA,MCGA   RGB,ECD,VGA
   6  Graphics  640 x 200   2/16       CGA,EGA,VGA,MCGA   RGB,ECD,VGA
   7    Text    80 x 25     b/w        MDA,HGC,EGA,VGA    Monochrome,ECD,VGA
   9  Graphics  320 x 200   16         Tandy 1000,PCjr    RGB
  11  Graphics  720 x 348   b/w        HGC                Monochrome
  12  Graphics  320 x 200   b/w        HGC                Monochrome
  13  Graphics  320 x 200   16         EGA,VGA            RGB,ECD,VGA
  14  Graphics  640 x 200   16         EGA,VGA            RGB,ECD,VGA
  15  Graphics  640 x 350   b/w        EGA,VGA            Monochrome,VGA
  16  Graphics  640 x 350   16/64      EGA,VGA            ECD,VGA
  17  Graphics  640 x 480   2/256K     VGA,MCGA           VGA
  18  Graphics  640 x 480   16/256K    VGA                VGA
  19  Graphics  320 x 200   256/256K   VGA,MCGA           VGA
  20  Graphics  320 x 200   256/256K   VGA                VGA
  21  Graphics  320 x 400   256/256K   VGA                VGA

     Some notes about the format and abbreviations used in this table are in
order.  A single value in the "number of colors" column refers to the number
of colors available in that video mode.  In text modes, a pair of numbers
such as 16/8 means each displayed character can have one of 16 foreground
                                      Chapter 2:  PC and PS/2 Video Modes   17

colors and one of 8 background colors.  In graphics modes, a pair of numbers
such as 16/64 means 16 colors can be displayed simultaneously from a
collection, or palette, of 64.  The "b/w" listed in the monochrome modes
stands for "black and white".  Characters or pixels in these video modes do
not really have associated colors but instead have display attributes such as
blinking or different intensities.

     The meanings of the abbreviations in the "supported adapters" and
"supported displays" columns are:

     CGA       Color Graphics Adapter
     ECD       Enhanced Color Display
     EGA       Enhanced Graphics Adapter
     HGC       Hercules Graphics Card
     MCGA      Multi-Color Graphics Array
     MDA       Monochrome Display Adapter
     RGB       Red-Green-Blue Color Display
     VGA       Video Graphics Array

The use of the term "VGA" in the "supported display" column refers to any
analog display, such as a VGA or Multisync monitor.

     The IBM PS/2 family does not have an adapter and display combination per
se.  Instead, the video hardware used in these systems is called the video
subsystem.  The Model 25 and Model 30 have an MCGA-based video subsystem,
while other models have a VGA-based video subsystem.

     This rest of this chapter will provide an overview of the most important
features and restrictions of each video mode.  The first section will discuss
the text modes, while the following section will discuss the graphics modes.


Text Modes

     There are five text video modes in the IBM PC and PS/2 family.  Four of
these modes (0, 1, 2, and 3) are designed for color displays, while the
remaining mode (7) is designed for monochrome displays.  All of the text
modes were introduced with the original IBM PC.

     In text modes, the screen is divided into character cells.  There are
two bytes of video memory associated with each character cell -- one byte for
the character's ASCII value, and another for the character's display
attribute.  The amount of video memory required to store one screen of
information (called a video page) is thus

                    number_of_columns x number_of_rows x 2

All text modes use 25 rows, so for the 40-column modes (0 and 1) the size of
a video page is 2,000 bytes, and for the 80-column modes (2, 3, and 7) the
size of a video page is 4,000 bytes.

     Mode               No. of   Supported          Supported
    Number  Resolution  Colors   Adapters           Displays

       0    40 x 25     16/8     CGA,EGA,VGA,MCGA   RGB,ECD,VGA
       1    40 x 25     16/8     CGA,EGA,VGA,MCGA   RGB,ECD,VGA

18   Fastgraph User's Guide

       2    80 x 25     16/8     CGA,EGA,VGA,MCGA   RGB,ECD,VGA
       3    80 x 25     16/8     CGA,EGA,VGA,MCGA   RGB,ECD,VGA
       7    80 x 25     b/w      MDA,HGC,EGA,VGA    Monochrome,ECD,VGA


     The remainder of this section will describe the text video modes in more
detail.

Mode 0

     Mode 0 is a 40-column by 25-row color text mode.  It is often referred
to as a colorless mode since it was designed to be used with composite or
television monitors (as opposed to RGB monitors).  When used with these types
of monitors, the available 16 "colors" appear as distinct shades of gray.
When used with an RGB monitor, mode 0 is identical in all respects to mode 1.
There are eight pages of video memory available in mode 0; each occupies
2,000 bytes.

     The use of composite or television monitors as PC video displays has
virtually disappeared today.  As a result, mode 0 is used infrequently.

Mode 1

     Mode 1 is a 40-column by 25-row color text mode.  It is supported across
all video adapter and color display combinations in the PC and PS/2 families.
Characters displayed in mode 1 have an associated display attribute that
defines the character's foreground color, its background color, and whether
or not it blinks.  Sixteen foreground colors and eight background colors are
available.  There are eight pages of video memory available in mode 1; each
occupies 2,000 bytes.

Mode 2

     Mode 2 is an 80-column by 25-row color text mode.  Like mode 0, it is
often referred to as a colorless mode since it was designed to be used with
composite or television monitors (as opposed to RGB monitors).  When used
with these types of monitors, the available 16 "colors" appear as distinct
shades of gray.  When used with an RGB monitor, mode 2 is identical in all
respects to mode 3.  There are four pages of video memory available in mode
2; each occupies 4,000 bytes.

     The use of composite or television monitors as PC video displays has
virtually disappeared today.  As a result, mode 2 is used infrequently.

Mode 3

     Mode 3 is an 80-column by 25-row color text mode.  It is the default
video mode for systems that use any type of color display.  This mode is
supported across all video adapter and color display combinations in the PC
and PS/2 families.  Characters displayed in mode 3 have an associated display
attribute that defines the character's foreground color, its background
color, and whether or not it blinks.  Sixteen foreground colors and eight
background colors are available.  There are four pages of video memory
available in mode 3; each occupies 4,000 bytes.
                                      Chapter 2:  PC and PS/2 Video Modes   19

Mode 7

     Mode 7 is the 80-column by 25-row monochrome text mode.  It is the
default video mode for systems that use a monochrome display.  To use this
mode, you must have a Monochrome Display Adapter (MDA), Hercules Graphics
Card (HGC), or an Enhanced Graphics Adapter (EGA) connected to a monochrome
display.  Most VGA display adapters also provide an emulation mode that
allows you to use mode 7 with analog displays.  Characters displayed in mode
7 have an associated display attribute that defines whether the character is
invisible, normal, bold, underlined, reversed, blinking, or a combination of
these.  There is a single 4,000-byte page of video memory available in mode
7, but Fastgraph allows you to allocate random-access memory (RAM) to provide
up to 15 virtual video pages in this mode.


Graphics Modes

     There are 13 standard graphics video modes available in the IBM PC and
PS/2 family.  Fastgraph provides support for 11 of the 13 modes (modes 8 and
10, which are specific to the PCjr and Tandy 1000 systems, are not
supported).  In addition to these 13 modes, Fastgraph supports two video
modes for the Hercules Graphics Card (modes 11 and 12), and two added VGA
modes (modes 20 and 21).

     Modes 4, 5, and 6 are designed to be used with the Color Graphics
Adapter (CGA) and for this reason are called the native CGA modes.  They were
the only graphics modes available with the original IBM PC.  Newer graphics
adapters (EGA, VGA, and MCGA) can emulate the CGA, which means that the CGA
graphics modes are available on any PC or PS/2 system equipped with a color
display.


     Mode               No. of   Supported          Supported
    Number  Resolution  Colors   Adapters           Displays

       4    320 x 200   4        CGA,EGA,VGA,MCGA   RGB,ECD,VGA
       5    320 x 200   4        CGA,EGA,VGA,MCGA   RGB,ECD,VGA
       6    640 x 200   2/16     CGA,EGA,VGA,MCGA   RGB,ECD,VGA


     Modes 8, 9, and 10 are only available on the PCjr and Tandy 1000 series
computers (these systems also support modes 4, 5, and 6).  Modes 8 and 10 are
not widely used, and for this reason Fastgraph does not support them.


     Mode               No. of   Supported         Supported
    Number  Resolution  Colors   Adapters          Displays

       8    160 x 200   16       Tandy 1000,PCjr   RGB
       9    320 x 200   16       Tandy 1000,PCjr   RGB
      10    640 x 200   4        Tandy 1000,PCjr   RGB

     Modes 11 and 12 are used with the Hercules Graphics Card (HGC) and a
monochrome display.  As such, they are not true IBM video modes, but because
of the popularity of the HGC, Fastgraph provides support for this adapter.

20   Fastgraph User's Guide

IBM has not defined video modes with numbers 11 and 12.  Should they choose
to do so in the future, Fastgraph's Hercules video mode numbers would likely
change.


     Mode               No. of   Supported   Supported
    Number  Resolution  Colors   Adapters    Displays

      11    720 x 348   b/w      HGC         Monochrome
      12    320 x 200   b/w      HGC         Monochrome



     Modes 13 through 16 were introduced with the Enhanced Graphics Adapter
(EGA) and for this reason are called the native EGA modes.  The VGA also
provides support for these modes, but the MCGA does not.  The original IBM
EGA only contained 64K bytes of video memory, but memory could be added in
64K increments to fully populate the adapter with 256K bytes of video memory.
As other manufacturers developed EGA cards, they generally included 256K
bytes of video memory as a standard feature.


     Mode               No. of   Supported   Supported
    Number  Resolution  Colors   Adapters    Displays

      13    320 x 200   16       EGA,VGA     RGB,ECD,VGA
      14    640 x 200   16       EGA,VGA     RGB,ECD,VGA
      15    640 x 350   b/w      EGA,VGA     Monochrome,VGA
      16    640 x 350   16/64    EGA,VGA     ECD,VGA

     Modes 17, 18, and 19 were introduced with the MCGA and VGA video
subsystems of the IBM PS/2 computers.  Since the introduction of the PS/2,
other manufacturers have developed VGA cards that can be used with the PC
family.  The VGA supports all three of these modes, but the MCGA does not
support mode 18.

     Mode 20 is a special VGA version of mode 19, while mode 21 uses scan
doubling to acheive a 400-line VGA display.  These are not true IBM video
modes, and should IBM define video modes 20 or 21 in the future, Fastgraph's
numbers for these video modes would likely change.



     Mode               No. of     Supported   Supported
    Number  Resolution  Colors     Adapters    Displays

      17    640 x 480   2/256K     VGA,MCGA    VGA
      18    640 x 480   16/256K    VGA         VGA
      19    320 x 200   256/256K   VGA,MCGA    VGA
      20    320 x 200   256/256K   VGA         VGA
      21    320 x 400   256/256K   VGA         VGA

                                      Chapter 2:  PC and PS/2 Video Modes   21

     The remainder of this section will describe the graphics video modes in
more detail.

Mode 4

     Mode 4 is a CGA graphics mode with a resolution of 320 horizontal pixels
by 200 vertical pixels.  Each pixel can assume one of four colors (the
available colors are determined by which one of six palettes has been
selected), so each pixel requires two bits of video memory.  This means that
each byte of video memory represents four pixels.  Hence, the amount of video
memory required to store one full screen of information is

          320 rows x 200 columns
          ---------------------- = 16,000 bytes
             4 pixels per byte

which is the amount of video memory on a true CGA.  This means that only a
single video page is available in mode 4, but Fastgraph allows you to
allocate random-access memory (RAM) to provide up to 15 virtual video pages
in this mode.

Mode 5

     Mode 5 is the colorless analog of mode 4.  It was designed to be used
with composite or television monitors (as opposed to RGB monitors).  When
used with these types of monitors, the four colors appear as distinct shades
of gray.  When used with an RGB monitor, mode 5 is essentially identical to
mode 4.

     The use of composite or television monitors as PC video displays has
virtually disappeared today.  As a result, mode 5 is used infrequently.

Mode 6

     Mode 6 is a CGA graphics mode with a resolution of 640 horizontal pixels
by 200 vertical pixels.  Each pixel can assume two states -- on or off.  The
color in which the "on" pixels appear can be selected from a palette of 16
available colors.  Each pixel thus requires one bit of video memory, which
means that each byte of video memory represents eight pixels.  Hence, the
amount of video memory required to store one full screen of information is

          640 rows x 200 columns
          ---------------------- = 16,000 bytes
             8 pixels per byte

which is the amount of video memory on a true CGA.  This means that only a
single video page is available in mode 6, but Fastgraph allows you to
allocate random-access memory (RAM) to provide up to 15 virtual video pages
in this mode.

Mode 9

     Mode 9 is a Tandy 1000 and PCjr graphics mode with a resolution of 320
horizontal pixels by 200 vertical pixels.  Each pixel can assume one of 16
colors, so each pixel requires four bits of video memory.  This means that
each byte of video memory represents two pixels.  Hence, the amount of video
memory required to store one full screen of information is
22   Fastgraph User's Guide


          320 rows x 200 columns
          ---------------------- = 32,000 bytes
             2 pixels per byte

The Tandy 1000 and PCjr use standard random-access memory (RAM) as video
memory.  When you select mode 9, the ROM BIOS allocates 32,000 bytes of RAM
which is then treated as a single page of video memory.  Fastgraph allows you
to allocate additional RAM to provide up to 15 virtual video pages in this
mode.

Mode 11

     Mode 11 is a true Hercules graphics mode with a resolution of 720
horizontal pixels by 348 vertical pixels.  Each pixel can assume two states
-- on or off.  Each pixel thus requires one bit of video memory, which means
that each byte of video memory represents eight pixels.  Hence, the amount of
video memory required to store one full screen of information is

          720 rows x 348 columns
          ---------------------- = 31,320 bytes
             8 pixels per byte

which is just less than half the 64K bytes of video memory on a Hercules
Graphics Card.  In other words, two video pages are available in mode 11.
Fastgraph allows you to allocate random-access memory (RAM) to provide up to
14 virtual video pages in this mode.

Mode 12

     Mode 12 is a software-simulated Hercules graphics mode with an effective
resolution of 320 horizontal pixels by 200 vertical pixels.  Its purpose is
to provide a resolution that is available with all of the other display
adapters.  As in mode 11, two video pages are available, but Fastgraph allows
you to allocate random-access memory (RAM) to provide up to 14 virtual video
pages in this mode.

     This mode converts all coordinates from the 320 by 200 space (called
virtual coordinates) into the 720 by 348 coordinate system (called physical
coordinates).  It does this by using two physical pixels for each virtual
pixel and scan doubling the odd-numbered virtual rows.  Finally, offsets are
added to the resulting physical coordinates to center the image area on the
display.  This creates an image area bounded horizontally by the physical
coordinates 40 and 679 and vertically by the physical coordinates 24 and 323.

Mode 13

     Mode 13 is an EGA color graphics mode with a resolution of 320
horizontal pixels by 200 vertical pixels.  Each pixel can assume one of 16
colors, so each pixel requires four bits of video memory.  This means that
each byte of video memory represents two pixels.  Hence, the amount of video
memory required to store one full screen of information is

          320 rows x 200 columns
          ---------------------- = 32,000 bytes
             2 pixels per byte
                                      Chapter 2:  PC and PS/2 Video Modes   23

which is 1/8 the 256K bytes of video memory on a fully-populated EGA.  In
other words, eight video pages are available in mode 13.

Mode 14

     Mode 14 is an EGA color graphics mode with a resolution of 640
horizontal pixels by 200 vertical pixels.  Each pixel can assume one of 16
colors, so each pixel requires four bits of video memory.  This means that
each byte of video memory represents two pixels.  Hence, the amount of video
memory required to store one full screen of information is

          640 rows x 200 columns
          ---------------------- = 64,000 bytes
             2 pixels per byte

which is 1/4 the 256K bytes of video memory on a fully-populated EGA.  In
other words, four video pages are available in mode 14.

Mode 15

     Mode 15 is an EGA monochrome graphics mode with a resolution of 640
horizontal pixels by 350 vertical pixels.  Each pixel can assume one of 4
display attributes, so each pixel requires two bits of video memory.  This
means that each byte of video memory represents four pixels.  Hence, the
amount of video memory required to store one full screen of information is

          640 rows x 350 columns
          ---------------------- = 56,000 bytes
             4 pixels per byte

which is less than 1/4 the 256K bytes of video memory on a fully-populated
EGA.  However, mode 15 disables two of the EGA's four bit planes, which
effectively reduces the EGA's video memory to a maximum of 128K bytes.  In
other words, two video pages are available in mode 15.

Mode 16

     Mode 16 is an EGA color graphics mode with a resolution of 640
horizontal pixels by 350 vertical pixels.  Each pixel can assume one of 16
colors (the 16 colors can be selected from a palette of 64 colors), so each
pixel requires four bits of video memory.  This means that each byte of video
memory represents two pixels.  Hence, the amount of video memory required to
store one full screen of information is

          640 rows x 350 columns
          ---------------------- = 112,000 bytes
             2 pixels per byte

which is less than 1/2 the 256K bytes of video memory on a fully-populated
EGA.  In other words, two video pages are available in mode 16.

Mode 17

     Mode 17 is a VGA and MCGA graphics mode with a resolution of 640
horizontal pixels by 480 vertical pixels.  Each pixel can assume two states
-- on or off.  The color in which the "on" and "off" pixels appear can be
selected from a palette of 262,144 available colors.  Each pixel thus
24   Fastgraph User's Guide

requires one bit of video memory, which means that each byte of video memory
represents eight pixels.  Hence, the amount of video memory required to store
one full screen of information is

          640 rows x 480 columns
          ---------------------- = 38,400 bytes
             8 pixels per byte

which is 60% of the 64K bytes of video memory on a true MCGA.  This means
that only a single video page is available in mode 17.

Mode 18

     Mode 18 is a native VGA color graphics mode with a resolution of 640
horizontal pixels by 480 vertical pixels.  Each pixel can assume one of 16
colors (the 16 colors can be selected from a palette of 262,144 colors), so
each pixel requires four bits of video memory.  This means that each byte of
video memory represents two pixels.  Hence, the amount of video memory
required to store one full screen of information is

          640 rows x 480 columns
          ---------------------- = 153,600 bytes
             2 pixels per byte

which is 60% of the 256K bytes of video memory on a standard VGA.  This means
that only a single video page is available in mode 18.

Mode 19

     Mode 19 is a VGA and MCGA color graphics mode with a resolution of 320
horizontal pixels by 200 vertical pixels.  Each pixel can assume one of 256
colors (the 256 colors can be selected from a palette of 262,144 colors), so
each pixel requires eight bits of video memory.  This means that each byte of
video memory represents one pixel.  Hence, the amount of video memory
required to store one full screen of information is

          320 rows x 200 columns
          ---------------------- = 64,000 bytes
             1 pixel per byte

which is the amount of video memory on a true MCGA.  This means that only a
single video page is available in mode 19, but Fastgraph allows you to
allocate random-access memory (RAM) to provide up to 15 virtual video pages
in this mode.

Mode 20

     Mode 20 is a VGA color graphics mode with a resolution of 320 horizontal
pixels by 200 vertical pixels.  Each pixel can assume one of 256 colors (the
256 colors can be selected from a palette of 262,144 colors), so each pixel
requires eight bits of video memory.  This means that each byte of video
memory represents one pixel.  Hence, the amount of video memory required to
store one full screen of information is

          320 rows x 200 columns
          ---------------------- = 64,000 bytes
             1 pixel per byte
                                      Chapter 2:  PC and PS/2 Video Modes   25


which is 1/4 the 256K bytes of video memory on a standard VGA.  In other
words, four video pages are available in mode 20.

Mode 21

     Mode 21 is a VGA color graphics mode with a resolution of 320 horizontal
pixels by 400 vertical pixels.  Each pixel can assume one of 256 colors (the
256 colors can be selected from a palette of 262,144 colors), so each pixel
requires eight bits of video memory.  This means that each byte of video
memory represents one pixel.  Hence, the amount of video memory required to
store one full screen of information is

          320 rows x 400 columns
          ---------------------- = 128,000 bytes
             1 pixel per byte

which is 1/2 the 256K bytes of video memory on a standard VGA.  In other
words, two video pages are available in mode 21.
26   Fastgraph User's Guide


Chapter 3

Initializing the Video Environment
28   Fastgraph User's Guide


Overview

     Before Fastgraph can perform any text or graphics video operations, you
must select a video mode in which your program will run.  An important part
of this selection depends on whether your program will run in a text mode, a
graphics mode, or both.  This chapter discusses the necessary video
initialization for each case.


Establishing a Text Mode

     When you write a program that only uses text modes, you must determine
if the program will run on monochrome systems, color systems, or both.  In
general, there is no reason to exclude one type of system, because the
additional programming required to support both is rather trivial.

     The Fastgraph routine fg_setmode establishes a video mode and
initializes all of Fastgraph's internal parameters for that mode.  This
routine has a single integer argument whose value is a video mode number
between 0 and 21.  Its value can also be -1, which tells Fastgraph to use the
current video mode.  Specifying an fg_setmode argument of -1 is often useful
in programs that only use text video modes.

     When you establish a text video mode, the ROM BIOS text cursor is made
visible, and this is often undesirable.  The Fastgraph routine fg_cursor
controls the visibility of the text cursor.  The fg_cursor routine has a
single integer argument that specifies the cursor visibility.  If its value
is 0, the cursor is made invisible; if its value is 1, the cursor is made
visible.

     At this point, an example may help to clarify things.  The following
program shows how to initialize Fastgraph for the 80-column color text mode
(mode 3) and turn off the text mode cursor.  It uses two Fastgraph routines
that we have not yet discussed, fg_setcolor and fg_text.  These routines will
be discussed in later sections of this document.  For now, it should suffice
to know the call to fg_setcolor makes subsequent text appear in bright white,
and the call to fg_text displays the characters passed to it.

                                 Example 3-1.

                       main()
                       {
                          fg_setmode(3);
                          fg_cursor(0);

                          fg_setcolor(15);
                          fg_text("Hello, world.",13);
                       }


     If you run example 3-1, notice the text displayed by the program appears
in the upper left corner of the screen.  On the line below this, the DOS
prompt appears, waiting for your next DOS command.  Furthermore, if your
system uses the ANSI.SYS driver to set screen attributes (such as with
Norton's SA program), you should also notice only the DOS prompt appears in
                           Chapter 3:  Initializing the Video Environment   29

the colors defined by the screen attributes -- the rest of the screen is
blank.

     A more graceful return to DOS is needed.  In example 3-2, we'll use the
Fastgraph routine fg_reset.  This routine erases the screen, and if the
ANSI.SYS driver is loaded, fg_reset also restores any previously set screen
attributes.  We've also included a call to the Fastgraph routine fg_waitkey
to wait for a keystroke before exiting.  If we didn't do this, we would never
see the program's output.

                                 Example 3-2.

                       main()
                       {

                          fg_setmode(3);
                          fg_cursor(0);

                          fg_setcolor(15);
                          fg_text("Hello, world.",13);

                          fg_waitkey();
                          fg_reset();
                       }


     Since examples 3-1 and 3-2 specifically used video mode 3, they would
not work on a monochrome system.  Ideally we would like to use fg_setmode(3)
for color systems and fg_setmode(7) for monochrome systems.  To do this, we
need a way to determine whether the program is being run on a color system or
on a monochrome system.  The next example illustrates an easy way to
accomplish this.

     Example 3-3 uses the Fastgraph routine fg_testmode to determine if the
user's system will support the video mode number specified as its first
argument (the second argument is the number of video pages required, which
will be 1 for all of the examples in this section).  The fg_testmode routine
returns a value of 1 (as its function value) if the requested video mode can
be used, and it returns 0 if not.  The program first sees if an 80-column
color text mode is available (mode 3), and if so, it selects that mode.  If
the color mode is not available, it checks if the monochrome text mode is
available (mode 7), and if so, it chooses the monochrome mode.  If neither
mode is available, then the program assumes the user's system has a 40-column
display, issues a message indicating the program requires an 80-column
display, and then exits.

                                 Example 3-3.

                   main()
                   {
                      int old_mode;

                      old_mode = fg_getmode();

                      if (fg_testmode(3,1))
                         fg_setmode(3);

30   Fastgraph User's Guide

                      else if (fg_testmode(7,1))
                         fg_setmode(7);
                      else {
                         printf("This program requires\n");
                         printf("an 80-column display.\n");
                         exit();
                         }

                      fg_cursor(0);

                      fg_setcolor(15);
                      fg_text("Hello, world.",13);

                      fg_waitkey();

                      fg_setmode(old_mode);
                      fg_reset();
                   }


     Example 3-3 also illustrates another useful procedure.  It is
recommended, especially in graphics modes, to restore the original video mode
and screen attributes before a program returns to DOS.  We've already seen
how the fg_reset routine restores the screen attributes, but how do we
restore the original video mode?  The Fastgraph routine fg_getmode returns
the current video mode as its function value.  If we call fg_getmode before
calling fg_setmode, we can use the return value from fg_getmode and again
call fg_setmode before the program exits.

     You can also use another Fastgraph routine, fg_bestmode, to determine if
a video mode with a specific resolution is available on the user's system.
The fg_bestmode routine requires three integer arguments:  a horizontal
resolution, a vertical resolution, and the number of video pages required.
As its function value, fg_bestmode returns the video mode number that offers
the most capabilities for the resolution and number of pages requested.  It
returns a value of -1 if no available video mode offers the requested
criteria.

     For example, if we require an 80 by 25 text mode, we can use the
function call fg_bestmode(80,25,1) to pick the "best" video mode available
that offers this capability.  In text modes, the term best means to give
preference to a color text mode over a monochrome text mode.  Example 3-4
performs the same function as example 3-3, but it uses fg_bestmode rather
than fg_testmode.

                                 Example 3-4.

                   main()
                   {
                      int old_mode;
                      int new_mode;

                      old_mode = fg_getmode();
                      new_mode = fg_bestmode(80,25,1);

                      if (new_mode < 0) {

                           Chapter 3:  Initializing the Video Environment   31

                         printf("This program requires\n");
                         printf("an 80-column display.\n");
                         exit();
                         }

                      fg_setmode(new_mode);
                      fg_cursor(0);

                      fg_setcolor(15);
                      fg_text("Hello, world.",13);

                      fg_waitkey();

                      fg_setmode(old_mode);
                      fg_reset();
                   }



Establishing a Graphics Mode

     The steps for establishing a graphics mode are similar to establishing a
text mode.  However, there are more restrictions since some systems may not
support all of the graphics video modes.  For example, a program could not
run in mode 13 on a CGA system, nor could a program run in mode 9 on anything
except a Tandy 1000 or PCjr system.

     Example 3-5 shows the recommended techniques for writing an EGA-specific
program.  The program in this example uses mode 16, the 640 x 350 EGA mode
that requires an Enhanced Color Display (ECD).  It uses the Fastgraph routine
fg_egacheck to determine if an EGA and ECD are present.  The fg_egacheck
routine returns a value of 0 if an EGA is not found, or if there is an EGA
but no ECD.  If an EGA and ECD are found, it returns a positive integer
indicating the number of 64K-byte increments of video memory on the EGA.
Since mode 16 requires 112,000 bytes of video memory for a single video page,
there must be at least 128K bytes of video memory on the EGA to run this
program.  Hence we must verify that fg_egacheck returns a value of at least
2.

                                 Example 3-5.

    main()
    {
       int mode;

       if (fg_egacheck() < 2) {
          printf("This program requires an Enhanced Graphics Adapter\n");
          printf("(EGA) and an Enhanced Color Display (ECD).\n");
          exit();
          }

       mode = fg_getmode();
       fg_setmode(16);

       fg_setcolor(15);
       fg_text("Hello, world.",13);

32   Fastgraph User's Guide

       fg_waitkey();

       fg_setmode(mode);
       fg_reset();
    }



     For graphics programs, it may suffice to write a program to run in a
specific video mode, but it is often more desirable to write a program that
will run in any of several video modes.  This is especially true for
commercial products, since they should run on as many different video
configurations as possible.

     Fastgraph includes a routine named fg_automode that determines the
graphics video mode that offers the most functionality for the user's video
hardware configuration.  For example, the Tandy 1000 series computers support
all three CGA modes (4, 5, and 6) and the 320 by 200 16-color Tandy 1000 mode
(9).  Of these modes, mode 9 offers the most features from a graphics
standpoint, so fg_automode will return a value of 9 when run on a Tandy 1000
computer.  The following table summarizes the video mode numbers returned by
fg_automode for given adapter-display combinations.


                                         display
                       adapter   mono   RGB   ECD   VGA

                          MDA       7     0     7     7
                          HGC      11     0     0    11
                          CGA       0     4     0     0
                          EGA      15    13    16     0
                          VGA      17    17    17    18
                         MCGA      17    17    17    19
                        Tandy       7     9     0     0
                         PCjr       7     9     0     0


     Example 3-6 shows how to use fg_automode to determine the "best"
graphics mode for the user's video hardware.  In graphics modes, the term
best means the highest resolution, followed by the number of available
colors.  The program displays a message that includes the selected video mode
number.

                                 Example 3-6.

                    main()
                    {
                       int old_mode;
                       int new_mode;
                       char string[4];

                       old_mode = fg_getmode();
                       new_mode = fg_automode();
                       fg_setmode(new_mode);

                       fg_setcolor(15);

                           Chapter 3:  Initializing the Video Environment   33

                       fg_text("I'm running in mode ",20);
                       sprintf(string,"%d.",new_mode);
                       fg_text(string,3);

                       fg_waitkey();

                       fg_setmode(old_mode);
                       fg_reset();
                    }


     For simple programs such as example 3-6, different screen resolutions
may not be an issue.  However, in more complex graphics programs it is often
desirable to write a program for a fixed screen resolution.  A common
practice is to develop graphics programs to run in modes 4 (for CGA), 9
(Tandy 1000 or PCjr), 12 (Hercules), 13 (EGA or VGA), and 19 (MCGA).  The
reason for selecting these five modes is they all use the same 320 by 200
resolution and will run on any IBM PC or PS/2 with graphics capabilities.

     Example 3-7 performs the same function as example 3-6, but it uses the
fg_bestmode routine instead of fg_automode to restrict the program to 320 by
200 graphics modes.  For this resolution, the fg_bestmode routine will first
check the availability of mode 19, followed by modes 13, 9, 4, and 12.  If
fg_bestmode determines no 320 by 200 graphics mode is available (indicated by
a return value of -1), the program prints an informational message and exits.
Otherwise it selects the video mode fg_bestmode proposes and continues.

                                 Example 3-7.

     main()
     {
        int old_mode;
        int new_mode;
        char string[4];

        old_mode = fg_getmode();
        new_mode = fg_bestmode(320,200,1);

        if (new_mode < 0) {
           printf("This program requires a 320 by 200 graphics mode.\n");
           exit();
           }

        fg_setmode(new_mode);

        fg_setcolor(15);
        fg_text("I'm running in mode ",20);
        sprintf(string,"%d.",new_mode);
        fg_text(string,3);

        fg_waitkey();

        fg_setmode(old_mode);
        fg_reset();
     }

34   Fastgraph User's Guide


     If your program will not support all PC and PS/2 video modes with the
same resolution (for example, it will run in some but not all of the 320 by
200 graphics modes), you may want to consider using the fg_testmode routine
instead of fg_bestmode to check for available video modes.  You may also want
to use fg_testmode to change the video mode precedence used by fg_bestmode.
For example, mode 13 (EGA) is faster than mode 19 (MCGA), so you may want to
consider giving EGA precedence over MCGA, especially if your program does not
use more than 16 colors.

     Example 3-8 is similar to example 3-7, but it will only run in the 320
by 200 EGA, MCGA, and CGA graphics modes (video modes 13, 19, and 4
respectively).  The program uses fg_testmode to select its video mode.  Note
the order of calls to fg_testmode gives EGA precedence over MCGA, and MCGA
precedence over CGA.

                                 Example 3-8.

        main()
        {
           int old_mode;
           char string[4];

           old_mode = fg_getmode();

           if (fg_testmode(13,1))
              fg_setmode(13);
           else if (fg_testmode(19,1))
              fg_setmode(19);
           else if (fg_testmode(4,1))
              fg_setmode(4);
           else {
              printf("This program requires an EGA, MCGA, or CGA.\n");
              exit();
              }

           fg_setcolor(15);
           fg_text("I'm running in mode ",20);
           sprintf(string,"%d.",getmode());
           fg_text(string,3);

           fg_waitkey();

           fg_setmode(old_mode);
           fg_reset();
        }



Summary of Video Initialization Routines

     This section summarizes the functional descriptions of the Fastgraph
routines presented in this chapter.  More detailed information about these
routines, including their arguments and return values, may be found in the
Fastgraph Reference Manual.
                           Chapter 3:  Initializing the Video Environment   35

     FG_AUTOMODE determines the graphics video mode that offers the most
features for the user's display and adapter configuration.  The value it
returns helps determine a suitable value to pass to the fg_setmode routine.

     FG_BESTMODE is similar to fg_automode, but it excludes video modes that
do not offer the specified resolution and video page requirements.

     FG_CURSOR makes the text mode cursor visible or invisible.  This routine
has no effect when used in a graphics mode.

     FG_EGACHECK returns information about the active EGA or VGA adapter and
display.  It is useful in checking if the adapter has enough memory to run an
EGA-specific program.

     FG_GETMODE returns the current video mode.  It is typically one of the
first Fastgraph routines called in a program.  The value returned by
fg_getmode can be retained to restore the original video mode when a program
transfers control back to DOS.

     FG_RESET is generally the last Fastgraph routine called in a program.
It only functions in text video modes.  When the ANSI.SYS driver is not
loaded, fg_reset merely erases the screen.  When ANSI.SYS is loaded, fg_reset
also restores any previously set screen attributes.

     FG_SETMODE establishes a video mode and initializes Fastgraph's internal
parameters for that video mode.  It must be called before any Fastgraph
routine that performs video output.  A program can call fg_setmode as many
times as needed to switch between different video modes.

     FG_TESTMODE determines whether or not a specified video mode (with a
given number of video pages) is available on the user's system.
36   Fastgraph User's Guide


Chapter 4

Coordinate Systems
38   Fastgraph User's Guide


Overview

     Fastgraph uses three coordinate systems to perform text and graphics
output.  These coordinate systems are character space, screen space, and
world space.  The world space coordinate system is not available with
Fastgraph/Light.


Character Space

     The coordinate system used for displaying characters is called character
space.  Fastgraph uses character space for displaying characters in both text
and graphics video modes.  It can be thought of as a grid of rows and
columns, with each cell in the grid holding one character.  Each cell is
identified by its unique (row,column) integer coordinates.  The rows and
columns are numbered starting at zero; the origin is always the upper left
corner of the screen.  For example, in the 80-column by 25-row text modes (2,
3, and 7), the (row,column) coordinates of the screen corners are shown in
the following diagram.


                            (0,0)           (0,79)



                            (24,0)         (24,79)


The number of rows and columns depends on the video mode, as shown in the
following table.  For graphics modes, the table also includes the width and
height in pixels of a character cell.

                      Mode  No. of  No. of Char. Char.
                     Number Columns Rows   Width Height

                        0     40      25
                        1     40      25
                        2     80      25
                        3     80      25
                        4     40      25     8     8
                        5     40      25     8     8
                        6     80      25     8     8
                        7     80      25
                        9     40      25     8     8
                       11     80      25     9     14
                       12     40      25     8     8
                       13     40      25     8     8
                       14     80      25     8     8
                       15     80      25     8     14
                       16     80      25     8     14
                       17     80      30     8     16
                       18     80      30     8     16
                       19     40      25     8     8
                       20     40      25     8     8
                       21     40      50     8     8

                                           Chapter 4:  Coordinate Systems   39


     Fastgraph includes two routines, fg_getmaxx and fg_getmaxy, that
respectively return the maximum column and row numbers in text modes.
Example 4-1 demonstrates these two routines in a text mode.  The program uses
fg_getmaxx and fg_getmaxy to obtain the maximum column and row numbers in
mode 3.  It then displays these values (79 and 24).

                                 Example 4-1.

                    main()
                    {
                       int max_col;
                       int max_row;
                       int mode;

                       mode = fg_getmode();
                       fg_setmode(3);

                       max_col = fg_getmaxx();
                       max_row = fg_getmaxy();

                       fg_setmode(mode);
                       fg_reset();

                       printf("Last col = %d\n",max_col);
                       printf("Last row = %d\n",max_row);
                    }



Screen Space

     Screen space is one of two available coordinate systems in graphics
modes.  It uses the physical device coordinates.  Screen space can be thought
of as a grid of rows and columns, with each unit in the grid holding one
pixel.  Each pixel is identified by its unique (x,y) integer coordinates.
The rows and columns are numbered starting at zero; the origin is always the
upper left corner of the screen.  For example, in the 320 by 200 graphics
modes, the (x,y) coordinates of the screen corners are shown in the following
diagram.


                            (0,0)          (319,0)



                            (0,199)      (319,199)


     The Fastgraph routines fg_getmaxx and fg_getmaxy return the maximum x
and y screen coordinates when used in graphics modes, as shown in example
4-2.  The program uses fg_getmaxx and fg_getmaxy to obtain the maximum x and
y coordinates in the standard CGA four-color graphics mode (mode 4).  It then
displays these values (319 and 199).

                                 Example 4-2.

40   Fastgraph User's Guide
                      main()
                      {
                         int maxx;
                         int maxy;
                         int mode;

                         mode = fg_getmode();
                         fg_setmode(4);

                         maxx = fg_getmaxx();
                         maxy = fg_getmaxy();

                         fg_setmode(mode);
                         fg_reset();

                         printf("(%d,%d)\n",maxx,maxy);
                      }



World Space

     World space is the other available coordinate system in graphics modes.
It utilizes user-defined floating point coordinates.  Fastgraph translates
world space coordinates into physical device coordinates (screen space), and
because of this it is somewhat slower than using screen space.  World space
can be thought of as a standard cartesian plane extending from the lower left
corner of the screen.

     Any program that uses world space coordinates must first initialize
Fastgraph's internal world space parameters.  The Fastgraph routine fg_initw
is provided for this purpose.  The fg_initw routine has no arguments and must
be called before any other routine that uses world space coordinates.

     The next step in using world space is to use the Fastgraph routine
fg_setworld to define the world space coordinates of the screen edges.  The
fg_setworld routine has four floating-point arguments -- the minimum x
coordinate (left edge), the maximum x coordinate (right edge), the minimum y
coordinate (bottom edge), and the maximum y coordinate (top edge).  For
example, if you define the world space coordinates with the statement

                       fg_setworld(-10.0,10.0,0.0,2.5);

the (x,y) coordinates of the screen corners would be defined as shown in the
following diagram.


                            (-10.0,2.5) (10.0,2.5)



                            (-10.0,0.0) (10.0,0.0)


Fastgraph includes a routine fg_getworld that returns the world space
extremes as defined in the most recent call to fg_setworld.
                                           Chapter 4:  Coordinate Systems   41

     Example 4-3 uses fg_setworld and fg_getworld to illustrate an
interesting application of world space.  This program calls another routine
named redraw (not shown) that erases the screen and draws a certain image
using world space coordinates.  The program draws the image, waits for a
keystroke, reduces the world space by a factor of two in each direction, and
then draws the image again.  This produces a zoom effect in which the image
appears twice as large as it was originally.

                                 Example 4-3.

              main()
              {
                 int new_mode, old_mode;
                 double xmin, xmax, ymin, ymax;

                 old_mode = fg_getmode();
                 new_mode = fg_automode();

                 if (new_mode == 0) {
                    printf("This program requires graphics.\n");
                    exit();
                    }

                 fg_setmode(new_mode);
                 fg_initw();

                 fg_setworld(0.0,40.0,0.0,30.0);
                 redraw();
                 fg_waitkey();

                 fg_getworld(&xmin,&xmax,&ymin,&ymax);
                 fg_setworld(0.0,xmax*0.5,0.0,ymax*0.5);
                 redraw();
                 fg_waitkey();

                 fg_setmode(old_mode);
                 fg_reset();
              }



Conversion Routines

     It is often necessary to convert coordinates between character space,
screen space, and world space.  Fastgraph includes eight conversion routines,
four for x coordinates and four for y coordinates, to perform such
conversions.  All of these routines return the translated coordinate as the
function value.

     The fg_xalpha and fg_yalpha routines convert screen space coordinates to
character space.  The fg_xalpha routine converts a screen space x coordinate
to the character space column that contains the coordinate.  Similarly, the
fg_yalpha routine converts a screen space y coordinate to the character space
row that contains the coordinate.

     The fg_xconvert and fg_yconvert routines convert character space
coordinates to screen space.  The fg_xconvert routine converts a character
42   Fastgraph User's Guide

space column to the screen space coordinate of its leftmost pixel.
Similarly, the fg_yconvert routine converts a character space row to the
screen space coordinate of its top (lowest-numbered) pixel.

     The fg_xscreen and fg_yscreen routines convert world space coordinates
to screen space.  The fg_xscreen routine translates x coordinates, while the
fg_yscreen routine translates y coordinates.  Conversely, the fg_xworld and
fg_yworld routines convert screen space coordinates to world space.  The
fg_xworld routine translates x coordinates, while the fg_yworld routine
translates y coordinates.


Summary of Coordinate Routines

     This section summarizes the functional descriptions of the Fastgraph
routines presented in this chapter.  More detailed information about these
routines, including their arguments and return values, may be found in the
Fastgraph Reference Manual.

     FG_GETMAXX returns the maximum x coordinate in screen space when used in
a graphics mode.  It returns the maximum column number in character space
when used in a text mode.

     FG_GETMAXY returns the maximum y coordinate in screen space when used in
a graphics mode.  It returns the maximum row number in character space when
used in a text mode.

     FG_GETWORLD returns the current world space limits, as defined in the
most recent call to fg_setworld.

     FG_INITW initializes Fastgraph's internal parameters for world space.
This routine must be called once, before any other routine that uses world
coordinates.

     FG_SETWORLD defines the world space coordinates that correspond to the
physical edges of the screen.

     FG_XALPHA and FG_YALPHA convert screen space coordinates to character
space.

     FG_XCONVERT and FG_YCONVERT convert character space coordinates to
screen space.

     FG_XSCREEN and FG_YSCREEN convert world space coordinates to screen
space.

     FG_XWORLD and FG_YWORLD convert screen space coordinates to world space.


Chapter 5

The Use of Color
44   Fastgraph User's Guide


Overview

     The use of color is an important part of any text or graphics
application.  This chapter explains color as it applies to text and graphics
modes.  It also describes palettes and video DAC registers for the graphics
video modes that offer this functionality.  Finally, an explanation of
Fastgraph's virtual colors is provided.


Text Modes

     The term color is not really correct in text modes because each
character cell has an associated attribute that controls the character's
appearance in that cell.  The meaning of the attribute differs for color and
monochrome text modes.


Color Modes

     In color text modes (modes 0, 1, 2, and 3), the attribute determines a
character's foreground color (the color of the character itself), its
background color (the color of that part of the character cell not covered by
the character), and whether or not it blinks.  Sixteen foreground colors
(numbered 0 to 15) are available, but only eight background colors (numbered
0 to 7) are available.  The colors assigned to these values are listed in the
following table.


                    number  color     number  color

                       0    black        8    gray
                       1    blue         9    light blue
                       2    green       10    light green
                       3    cyan        11    light cyan
                       4    red         12    light red
                       5    magenta     13    light magenta
                       6    brown       14    yellow
                       7    white       15    bright white



At first it may seem the numbers have been arbitrarily assigned to the
colors.  Upon further inspection, however, it becomes apparent this is not
the case.  Each of the color numbers is a four bit quantity of the form IRGB,
with I representing the intensity, R the red component, G the green
component, and B the blue component.  If the corresponding bit is 1, it means
the intensity or color component is set.  For example, normal red would be
represented by the IRGB bit pattern 0100, which is 4 decimal, the color
number for red.

     The fg_setattr routine defines the current text attribute.  Once
fg_setattr is called, Fastgraph displays all subsequent text using that
attribute.  The first argument of fg_setattr defines the foreground color,
                                             Chapter 5:  The Use of Color   45

which must be an integer between 0 and 15.  Its second argument defines the
background color, which must be between 0 and 7.  Its third argument
determines if the foreground color blinks (1 means it blinks, 0 means it does
not).  For example, the statement

                             fg_setattr(14,1,0);

specifies subsequent text will be displayed with a yellow foreground (14) on
a blue background (1) and will not blink (0).

     Another Fastgraph routine, fg_setcolor, can also be used to define text
attributes.  The fg_setcolor routine packs the three values passed to
fg_setattr into a single argument, as shown below.


                             bits  attribute

                             0-3   foreground color
                             4-6   background color
                              7    blinking


For example, calling fg_setcolor with an argument of 30 (1E hex) is
equivalent to calling fg_setattr with arguments of 14, 1, and 0.

     The Fastgraph routine fg_getcolor returns the current text attribute, as
defined in the most recent call to fg_setattr or fg_setcolor.  The
fg_getcolor routine has no arguments and returns the attribute as its
function value.  The returned value is encoded using the same scheme for
passing a text attribute to the fg_setcolor routine.


Monochrome Mode

     In the monochrome text mode (mode 7), colors are obviously not
available.  The attribute instead determines whether a character is
invisible, normal, bold, reversed, or certain combinations of these.  The
following table shows the values assigned to the available display
characteristics.


                     foreground  background  characteristic

                          0           0      invisible
                          0           7      reversed
                          1           0      underlined
                          7           0      normal
                          9           0      underlined bold
                         15           0      bold

Additionally, you can turn blinking on or off for each of these combinations.
Any combination of foreground and background values not listed in the above
table produces a normal display characteristic.
46   Fastgraph User's Guide


     As in the color modes, the Fastgraph routines fg_setattr and fg_setcolor
define the current text attribute.  For example, the statement

                              fg_setattr(0,7,1);

specifies subsequent text will be displayed in reverse video (0,7) and will
blink (1).  The same attribute could be defined by calling fg_setcolor with
an argument of 240 (F0 hex).  The fg_getcolor routine is also available and
works as it does in the color text modes.


Graphics Modes

     In graphics modes, each pixel has an associated color value that
determines the color in which the pixel is displayed.  The number of
available colors depends on the video mode.  Some of the graphics modes also
have palette registers or video DAC registers to provide additional color
capabilities.  The example programs presented in this section show the use of
color in specific graphics video modes.

     The following subsections will discuss the use of color in each of the
graphics video modes.  In these discussions, there will be several references
to a group of colors called the standard color set.  This is a set of 16
colors common to many of the graphics video modes (and also to the color text
modes).  The colors in the standard color set are listed in the following
table.


                    number  color     number  color

                       0    black        8    gray
                       1    blue         9    light blue
                       2    green       10    light green
                       3    cyan        11    light cyan
                       4    red         12    light red
                       5    magenta     13    light magenta
                       6    brown       14    yellow
                       7    white       15    bright white



     At this point it is important to understand the difference between the
terms color number and color value.  Color number refers to the number that
defines a color in the standard color set (for example, green is color number
2).  Color value refers to the actual value of a pixel in video memory, which
ultimately determines the color in which that pixel is displayed.  The color
value is sometimes just called the color.

     In each of the graphics modes, video memory is zeroed when the
fg_setmode routine is called.  This means all pixels are initially set to
color value 0, which by default is black.  For this reason, color value 0 is
often called the background color in graphics video modes.
                                             Chapter 5:  The Use of Color   47

     The Fastgraph routine fg_setcolor defines the color in which subsequent
graphics operations are performed.  This color is called the current color.
Depending on the video mode, the current color can reference a color value
(in CGA and Hercules graphics modes), a palette register (in Tandy, EGA, and
VGA graphics modes), or a video DAC register (in 256-color modes).  The
fg_setcolor routine takes a single integer argument that specifies the color.
When fg_setmode is called, it sets the current color to 0.  The Fastgraph
routine fg_getcolor returns the current color, as defined in the most recent
call to fg_setcolor.  The fg_getcolor routine has no arguments and returns
the current color as its function value.


CGA Color Modes

     The CGA color modes (modes 4 and 5) have six sets of available colors,
called palettes, numbered 0 to 5.  Each palette consists of four colors,
numbered 0 to 3.  In each palette, the background color (color value 0) can
be selected from the standard color set, but the other 3 colors are fixed.
The following table shows the fixed colors assigned to each palette.


                     palette 0       palette 1       palette 2

           color 1   light green     light cyan      light cyan
           color 2   light red       light magenta   light red
           color 3   yellow          bright white    bright white

                     palette 3       palette 4       palette 5

           color 1   green           cyan            cyan
           color 2   red             magenta         red
           color 3   brown           white           white


Palette 1, with a black background, is the default palette when you select
mode 4.  Palette 2, with a black background, is the default palette when you
select mode 5.

     The CGA color modes have a border area called the overscan between the
addressable pixel space and the physical edges of the screen.  The overscan
area is always displayed in the background color, regardless of which CGA
palette is used.

     In CGA color modes, the fg_setcolor routine defines the current color by
referencing one of the four color values.  The fg_palette routine selects one
of the six palettes and defines the background color for that palette.  The
first argument of the fg_palette routine is an integer between 0 and 5 that
specifies the palette number.  The second argument is an integer between 0
and 15 that defines the background color, using the color numbers in the
standard color set.

     Example 5-1 demonstrates the use of the fg_palette and fg_setcolor
routines in mode 4.  After establishing the video mode, the program selects
palette 0 and makes the background color blue (color number 1).  It then
makes color 3 in palette 0 (yellow) the current color and displays the word
"Hello".  Finally, it restores the original video mode and screen attributes
before returning to DOS.
48   Fastgraph User's Guide


                                 Example 5-1.

                           main()
                           {
                              int mode;

                              mode = fg_getmode();
                              fg_setmode(4);

                              fg_palette(0,1);
                              fg_setcolor(3);
                              fg_text("Hello",5);
                              fg_waitkey();

                              fg_setmode(mode);
                              fg_reset();
                           }


CGA Two-Color Mode

     The CGA two-color mode (mode 6) has a fixed background color (color
value 0) and a user-definable foreground color (color value 1).  The
background color is always black.  The foreground color is bright white by
default, but it can be changed to any of the colors in the standard color
set.  It should be mentioned that changing the foreground color works on true
CGA adapters, but there are very few EGA and VGA adapters that correctly
implement changing the foreground color in their mode 6 emulation.

     In mode 6, the fg_setcolor routine defines the current color by
referencing one of the two color values.  The fg_palette routine defines the
actual foreground color (that is, the color of pixels whose color value is
1).  To be consistent with the other graphics modes, the fg_palette routine
has two arguments, but the first one is not used.  The second argument is an
integer between 0 and 15 that defines the foreground color, using the color
numbers in the standard color set.

     Example 5-2 demonstrates the use of the fg_palette and fg_setcolor
routines in mode 6.  After establishing the video mode, the program makes the
foreground color yellow (color number 14).  It then makes color 1 the current
color and displays the word "Hello".  Finally, it restores the original video
mode and screen attributes before returning to DOS.

                                 Example 5-2.

                           main()
                           {
                              int mode;

                              mode = fg_getmode();
                              fg_setmode(6);

                              fg_palette(0,14);
                              fg_setcolor(1);
                              fg_text("Hello",5);

                                             Chapter 5:  The Use of Color   49

                              fg_waitkey();

                              fg_setmode(mode);
                              fg_reset();
                           }



Tandy and PCjr Modes

     The supported Tandy 1000 or PCjr graphics mode (mode 9) has 16 color
values, numbered 0 to 15.  Each color value references one of 16 user-
definable palette registers, often simply called palettes, also numbered 0 to
15.  The values assigned to the palette registers determine the colors in
which pixels are displayed.  For example, if you assign palette register 2
the value for red, then pixels whose color value is 2 will be red.

     Each palette can assume one of the 16 colors in the standard color set.
By default, the values assigned to the 16 palettes correspond to the
identically numbered colors in the standard color set.  In other words,
palette 0 is assigned the value for black, palette 1 is assigned the value
for blue, and so forth.

     In mode 9, the fg_setcolor routine defines the current color by
referencing one of the 16 palette registers.  The fg_palette routine defines
the actual color assigned to a specific palette register.  The first argument
of the fg_palette routine is an integer between 0 and 15 that specifies the
palette number.  The second argument is an integer between 0 and 15 that
defines the palette value (the color assigned to the palette), using the
color numbers in the standard color set.

     You can also use the Fastgraph routine fg_setrgb to define the color
assigned to a specific palette register.  Whereas the fg_palette routine does
this using a color number from the standard color set, fg_setrgb defines a
palette register using red, green, and blue color components plus an
intensity component.  The first argument of the fg_setrgb routine is an
integer between 0 and 15 that specifies the palette register number.  The
remaining three arguments are each integers between -1 and 1 that
respectively specify the red, green, and blue color components for that
palette register.  The meanings of the color components are:

     -1 = color bit and intensity bit are set
      0 = color bit is reset
      1 = color bit is set

Since there is only one intensity bit in mode 9 color values, specifying -1
for any of the RGB color components produces an intense color.  For example,
the color light cyan is color number 11 in the standard color set, and it is
produced by combining green and blue and setting the intensity bit.  This
means any of these four statements


                            fg_palette(1,11);
                            fg_setrgb(1,0,-1,1);
                            fg_setrgb(1,0,1,-1);
                            fg_setrgb(1,0,-1,-1);

50   Fastgraph User's Guide


could be used to define palette register 1 as light cyan in mode 9.

     Example 5-3 demonstrates the use of the fg_palette and fg_setcolor
routines in mode 9.  After establishing the video mode, the program defines
palette 0 to be blue (1) and palette 1 to be yellow (14).  Note that defining
palette 0 changes the background color.  It then makes color 1 the current
color and displays the word "Hello".  After waiting for a keystroke, the
program changes the color of "Hello" by changing palette 1 to bright white
(15).  Finally, it restores the original video mode and screen attributes
before returning to DOS.

                                 Example 5-3.

                           main()
                           {
                              int mode;

                              mode = fg_getmode();
                              fg_setmode(9);

                              fg_palette(0,1);
                              fg_palette(1,14);

                              fg_setcolor(1);
                              fg_text("Hello",5);
                              fg_waitkey();

                              fg_palette(1,15);
                              fg_waitkey();

                              fg_setmode(mode);
                              fg_reset();
                           }


Hercules Mode

     The Hercules graphics mode (mode 11) has a fixed background color (color
value 0) and a fixed foreground color (color value 1).  The background color
is always black, and the foreground color is dependent on the monochrome
display being used (typically, it is green, amber, or white).

     The fg_setcolor routine defines the current color value by referencing
one of the two color values.  The fg_palette routine has no effect in mode
11.

     Example 5-4 demonstrates the use of the fg_setcolor routine in mode 11.
After establishing the video mode, the program makes color 1 the current
color and displays the word "Hello".  It then restores the original video
mode and screen attributes before returning to DOS.

                                 Example 5-4.

                           main()
                           {

                                             Chapter 5:  The Use of Color   51

                              int mode;

                              mode = fg_getmode();
                              fg_setmode(11);

                              fg_setcolor(1);
                              fg_text("Hello",5);
                              fg_waitkey();

                              fg_setmode(mode);
                              fg_reset();
                           }



Hercules Low-Resolution Mode

     The Hercules low-resolution graphics mode (mode 12) has four color
values, numbered 0 to 3.  The background color is always black, colors 1 and
2 are half intensity, and color 3 is full intensity.  Colors 1 and 2 both
produce normal intensity colors, but they do so with different pixel patterns
-- color 1 turns on the odd-numbered physical pixels, while color 2 turns on
the even-numbered physical pixels.  The appearance of colors 1 to 3 is
dependent on the monochrome display being used (typically, it is green,
amber, or white).

     The fg_setcolor routine defines the current color value by referencing
one of the four color values.  The fg_palette routine has no effect in mode
12.

     Example 5-5 demonstrates the use of the fg_setcolor routine in mode 12.
After establishing the video mode, the program makes color 3 the current
color and displays the word "Hello".  It then restores the original video
mode and screen attributes before returning to DOS.

                                 Example 5-5.

                           main()
                           {
                              int mode;

                              mode = fg_getmode();
                              fg_setmode(12);

                              fg_setcolor(3);
                              fg_text("Hello",5);
                              fg_waitkey();

                              fg_setmode(mode);
                              fg_reset();
                           }

52   Fastgraph User's Guide


EGA 200-Line Modes

     The 200-line EGA graphics modes (modes 13 and 14) have 16 color values,
numbered 0 to 15.  Each color value references one of 16 user-definable
palette registers, often simply called palettes, also numbered 0 to 15.  The
values assigned to the palette registers determine the colors in which pixels
are displayed.  For example, if you assign palette register 2 the value for
red, then pixels whose color value is 2 will be red.

     Each palette can assume one of the 16 colors in the standard color set.
By default, the values assigned to the 16 palettes correspond to the
identically numbered colors in the standard color set.  In other words,
palette 0 is assigned the value for black, palette 1 is assigned the value
for blue, and so forth.

     In modes 13 and 14, the fg_setcolor routine defines the current color by
referencing one of 16 available palette registers.  The fg_palette routine
defines the actual color assigned to a specific palette register.  The first
argument of the fg_palette routine is an integer between 0 and 15 that
specifies the palette number.  The second argument is an integer that defines
the palette value (the color assigned to the palette).  Although the actual
colors are taken from the standard color set, the binary structure of a
palette value is different from the IRGB format used in the standard color
set.  In modes 13 and 14, the binary structure of a palette value is IxRGB;
bit 3 is ignored.  The mode 13 and mode 14 palette values that correspond to
the standard color set are thus:


                    value  color      value  color

                      0    black       16    gray
                      1    blue        17    light blue
                      2    green       18    light green
                      3    cyan        19    light cyan
                      4    red         20    light red
                      5    magenta     21    light magenta
                      6    brown       22    yellow
                      7    white       23    bright white



     You can also use the Fastgraph routine fg_setrgb to define the color
assigned to a specific palette register.  Whereas the fg_palette routine does
this using a color number from the standard color set, fg_setrgb defines a
palette register using red, green, and blue color components, plus an
intensity component.  The first argument of the fg_setrgb routine is an
integer between 0 and 15 that specifies the palette register number.  The
remaining three arguments are each integers between -1 and 1 that
respectively specify the red, green, and blue color components for that
palette register.  The meanings of the color components are:
                                             Chapter 5:  The Use of Color   53

     -1 = color bit and intensity bit are set
      0 = color bit is reset
      1 = color bit is set

Since there is only one intensity bit in mode 13 and 14 color values,
specifying -1 for any of the RGB color components produces an intense color.
For example, the color light cyan is represented by the color value 19, and
it is produced by combining green and blue and setting the intensity bit.
This means any of these four statements

                            fg_palette(1,19);
                            fg_setrgb(1,0,-1,1);
                            fg_setrgb(1,0,1,-1);
                            fg_setrgb(1,0,-1,-1);

could be used to define palette register 1 as light cyan in modes 13 and 14.

     The Fastgraph routine fg_setcolor defines the color value (that is, the
palette number) in which subsequent graphics operations are performed.  The
fg_setcolor routine takes a single integer argument that specifies this
color.  When fg_setmode is called, it sets the color value to 0.  The
Fastgraph routine fg_getcolor returns the current color value, as defined in
the most recent call to fg_setcolor.  The fg_getcolor routine has no
arguments and returns the current color as the function value.

     Example 5-6 demonstrates the use of the fg_palette and fg_setcolor
routines in mode 13.  After establishing the video mode, the program defines
palette 0 to be blue (1) and palette 1 to be yellow (22).  Note that defining
palette 0 changes the background color.  It then makes color 1 the current
color and displays the word "Hello".  After waiting for a keystroke, the
program changes the color of "Hello" by changing palette 1 to bright white
(23).  Finally, it restores the original video mode and screen attributes
before returning to DOS.

                                 Example 5-6.

                           main()
                           {
                              int mode;

                              mode = fg_getmode();
                              fg_setmode(13);

                              fg_palette(0,1);
                              fg_palette(1,22);

                              fg_setcolor(1);
                              fg_text("Hello",5);
                              fg_waitkey();

                              fg_palette(1,23);
                              fg_waitkey();

                              fg_setmode(mode);
                              fg_reset();
                           }

54   Fastgraph User's Guide

EGA Monochrome Mode

     The EGA monochrome graphics mode (mode 15) assigns display attributes to
its four color values, numbered 0 to 3.  Each color value references one of
four user-definable palette registers, often simply called palettes, numbered
0, 1, 4, and 5.  This numbering scheme might seem rather strange at first,
but it results from the disabling of two of the four video memory bit planes
in mode 15.  The values assigned to the palette registers determine the pixel
display attribute.  For example, if you assign palette register 1 the value
for bold, then pixels whose value is 1 will be bold.

     In mode 15, the fg_setcolor routine defines the current color (actually,
a display attribute) by referencing one of the four palette registers.  The
fg_palette routine defines the actual display attribute assigned to a
specific palette register.  The first argument of the fg_palette routine is
an integer that specifies the palette number.  The second argument is an
integer that defines the palette value (the display attribute assigned to the
palette).  For each palette register, the following table shows the default
palette value and its associated display attribute.


                          palette  palette   display
                          number    value   attribute

                             0        0     invisible
                             1        8     normal
                             4       24     bold
                             5       24     bold


     Example 5-7 demonstrates the use of the fg_palette and fg_setcolor
routines in mode 15.  After establishing the video mode, the program makes
color 4 (actually, palette 4, which is bold by default) the current color and
displays the word "Hello".  After waiting for a keystroke, the program
changes the display attribute of "Hello" by changing palette 4 to normal
intensity (palette value 8).  Finally, it restores the original video mode
and screen attributes before returning to DOS.

                                 Example 5-7.

                           main()
                           {
                              int mode;

                              mode = fg_getmode();
                              fg_setmode(15);

                              fg_setcolor(4);
                              fg_text("Hello",5);
                              fg_waitkey();

                              fg_palette(4,8);

                                             Chapter 5:  The Use of Color   55

                              fg_waitkey();

                              fg_setmode(mode);
                              fg_reset();
                           }



EGA Enhanced Mode

     The EGA enhanced graphics mode (mode 16) has 16 color values, numbered 0
to 15.  Each color value references one of 16 user-definable palette
registers, often simply called palettes, also numbered 0 to 15.  The values
assigned to the palette registers determine the colors in which pixels are
displayed.  For example, if you assign palette register 2 the value for red,
then pixels whose color value is 2 will be red.

     Each palette can assume one of 64 available colors.  By default, the
values assigned to the 16 palettes correspond to the identically numbered
colors in the standard color set.  In other words, palette 0 is assigned the
value for black, palette 1 is assigned the value for blue, and so forth.
There are a few EGA-compatible adapters that do not properly assign the
default colors to the 16 palette registers, so it is a good practice to do
this explicitly in mode 16.

     In mode 16, the fg_setcolor routine defines the current color value by
referencing one of the 16 palette registers.  The fg_palette routine defines
the actual color assigned to a specific palette register.  The first argument
of the fg_palette routine is an integer between 0 and 15 that specifies the
palette number.  The second argument is an integer that defines the palette
value (the color assigned to the palette).  The binary structure of a palette
value is different from the IRGB format used in the standard color set.  In
mode 16, the binary structure of a palette value is a 6-bit quantity of the
form rgbRGB, where the lower case letters represent the low intensity (1/3
intensity) color components, and the upper case letters represent the normal
intensity (2/3 intensity) color components.  The mode 16 palette values that
correspond to the standard color set are:


                    value  color      value  color

                      0    black        56   gray
                      1    blue         57   light blue
                      2    green        58   light green
                      3    cyan         59   light cyan
                      4    red          60   light red
                      5    magenta      61   light magenta
                     20    brown        62   yellow
                      7    white        63   bright white



     The normal intensity components in mode 16 produce the same normal
intensity colors as in other 16-color graphics modes.  Similarly, combining
56   Fastgraph User's Guide

the low and normal intensities in mode 16 produces the high intensity colors
of the other modes.  The only exception to this is for the default brown,
which is formed from the bit pattern 010100 (20 decimal).  This value
produces a more true brown than the value 6 decimal, which is really an olive
green.

     The palette values used in mode 16 are 6-bit quantities, which means
there are 64 different colors available in mode 16.  This group of 64 colors
consists of the 16 colors in the standard color set plus 48 additional colors
that are not available in any of the other EGA modes.  However, because the
EGA palette registers hold 4-bit quantities, only 16 of these colors can be
displayed at the same time.  In other words, the EGA enhanced mode provides
the capability of displaying 16 simultaneous colors from a group of 64.

     You can also use the Fastgraph routine fg_setrgb to define the color
assigned to a specific palette register.  Whereas the fg_palette routine does
this using a value between 0 and 63, fg_setrgb defines a palette register
using red, green, and blue color components.  The first argument of the
fg_setrgb routine is an integer between 0 and 15 that specifies the palette
register number.  The remaining three arguments are each integers between 0
and 3 that respectively specify the intensities in thirds of the red, green,
and blue color components for that palette register.  For example, the color
cyan is represented by the value 3 in the above table, and it is produced by
combining normal intensity (2/3 intensity) green and blue.  This means either
of the statements

                             fg_palette(1,3);
                             fg_setrgb(1,0,2,2);

could be used to define palette register 1 as cyan.

     Example 5-8 demonstrates the use of the fg_palette and fg_setcolor
routines in mode 16.  It uses the Fastgraph routine fg_rect (discussed in the
next chapter) to draw rectangles of a specified size.  After establishing the
video mode, the program uses a for loop to draw 16 equal-size rectangles, one
in each of the 16 color values.  In the same loop, the program uses the
fg_palette routine to change each palette to black.  The while loop that
follows performs four iterations.  The first iteration changes palette 0 to
0, palette 1 to 1, and so forth.  Hence, the 16 rectangles appear in the
palette values 0 to 15.  The rectangles remain in these colors until is key
is pressed to begin the next iteration.  The second iteration changes palette
0 to 16, palette 1 to 17, and so forth.  This makes the 16 rectangles appear
in the palette values 16 to 31.  Iterations three and four are similar, so
the overall effect of the program is to display all 64 colors, 16 at a time.
Finally, the program restores the original video mode and screen attributes
before returning to DOS.

                                 Example 5-8.

                #define COLORS 16
                #define WIDTH  40

                main()
                {
                   int base;

                                             Chapter 5:  The Use of Color   57

                   int color;
                   int minx, maxx;
                   int mode;

                   mode = fg_getmode();
                   fg_setmode(16);

                   base = 0;
                   minx = 0;
                   maxx = WIDTH - 1;

                   for (color = 0; color < COLORS; color++) {
                      fg_palette(color,0);
                      fg_setcolor(color);
                      fg_rect(minx,maxx,0,349);
                      minx = maxx + 1;
                      maxx = maxx + WIDTH;
                      }

                   while (base < COLORS*4) {
                      for (color = 0; color < COLORS; color++)
                         fg_palette(color,base+color);
                      base += COLORS;
                      fg_waitkey();
                      }

                   fg_setmode(mode);
                   fg_reset();
                }



VGA and MCGA Two-Color Mode

     The VGA and MCGA high-resolution two-color mode (mode 17) has a
background color (color value 0) and a foreground color (color value 1).
Each color value references one of two user-definable palette registers,
often simply called palettes, also numbered 0 and 1.  Each palette register
in turn references one of 16 user-definable 18-bit video DAC registers,
numbered 0 to 15.  The values assigned to the palette registers and video DAC
registers determine the colors in which pixels are displayed.  For example,
if palette register 1 contains the value 3, and video DAC register 3 contains
the color value for red, then pixels whose color value is 1 (that is, the
foreground pixels) will be red.

     By default, palette register 0 references video DAC register 0, and
palette register 1 references video DAC register 1.  In addition, video DAC
register 0 initially contains the color value for black, while the other 15
video DAC registers (1 through 15) contain the color value for bright white.
This means background pixels (color value 0) are black by default, while
foreground pixels (color value 1) are bright white.

     The 18-bit video DAC values consist of three 6-bit red, green, and blue
color components.  Hence, each color component is an integer between 0 and
63; increasing values produce more intense colors.  The default color
components for DAC register 0 are red=0, blue=0, and green=0, which produces
black.  The default values for the other DAC registers are red=63, blue=63,
58   Fastgraph User's Guide

and green=63, which produces bright white.  Because the video DAC registers
are 18 bits long, each DAC can specify one of 262,144 (218) colors.  However,
because the palette registers hold 1-bit quantities, only two of these colors
can be displayed at the same time.  In other words, mode 17 provides the
capability of displaying two simultaneous colors from a group of 262,144.

     In mode 17, the fg_setcolor routine defines the current color by
referencing one of the two palette registers.  The fg_palette routine defines
the value of a palette register by referencing one of the 16 video DAC
registers.  That is, the fg_palette routine specifies the video DAC register
that a palette register references.  The first argument of the fg_palette
routine is either 0 or 1 and specifies the palette number.  The second
argument is an integer between 0 and 15 that specifies the video DAC register
for that palette.

     The Fastgraph routine fg_setrgb defines the value of a video DAC
register in mode 17.  The first argument of the fg_setrgb routine is an
integer between 0 and 15 that specifies the DAC register number.  The
remaining three arguments are each integers between 0 and 63 that
respectively specify the red, green, and blue color components for that DAC
register.

     Example 5-9 demonstrates the use of the fg_palette, fg_setrgb, and
fg_setcolor routines in mode 17.  After establishing the video mode, the
program defines DAC register 0 to be blue (red=0, green=0, blue=42) and DAC
register 1 to be yellow (red=63, green=63, blue=21).  Note that defining DAC
register 0 changes the background color because palette 0 references DAC
register 0.  The program then makes color 1 the current color (palette 1
still references DAC register 1) and displays the word "Hello" in yellow.
After waiting for a keystroke, the program changes the color of "Hello" by
making palette 1 reference DAC register 15 (which still contains its default
value, bright white).  Finally, it restores the original video mode and
screen attributes before returning to DOS.

                                 Example 5-9.

                          main()
                          {
                             int mode;

                             mode = fg_getmode();
                             fg_setmode(17);

                             fg_setrgb(0,0,0,42);
                             fg_setrgb(1,63,63,21);

                             fg_setcolor(1);
                             fg_text("Hello",5);
                             fg_waitkey();

                             fg_palette(1,15);
                             fg_waitkey();

                             fg_setmode(mode);
                             fg_reset();
                          }

                                             Chapter 5:  The Use of Color   59


VGA 16-Color Mode

     The VGA high-resolution two-color mode (mode 18) has 16 color values,
numbered 0 to 15.  Each color value references one of 16 user-definable
palette registers, often simply called palettes, also numbered 0 to 15.  Each
palette register in turn references one of 16 user-definable 18-bit video DAC
registers, likewise numbered 0 to 15.  The values assigned to the palette
registers and video DAC registers determine the colors in which pixels are
displayed.  For example, if palette register 1 contains the value 3, and
video DAC register 3 contains the color value for red, then pixels whose
color value is 1 will be red.

     By default, each of the 16 palette registers references the video DAC
register of the same number.  In addition, the 16 video DAC registers
respectively contain the color values for the 16 colors in the standard color
set.

     The 18-bit video DAC values consist of three 6-bit red, green, and blue
color components.  Hence, each color component is an integer between 0 and
63; increasing values produce more intense colors.  The default RGB color
components for the 16 video DAC registers are:


             DAC  R  G  B  color      DAC  R  G  B  color

              0   0   0 0  black       8   21 21 21 gray
              1   0   0 42 blue        9   21 21 63 light blue
              2   0  42 0  green      10   21 63 21 light green
              3   0  42 42 cyan       11   21 63 63 light cyan
              4   42  0 0  red        12   63 21 21 light red
              5   42  0 42 magenta    13   63 21 63 light magenta
              6   42 21 0  brown      14   63 63 21 yellow
              7   42 42 42 white      15   63 63 63 bright white



Because the video DAC registers are 18 bits long, each DAC can specify one of
262,144 (218) colors.  However, because the palette registers hold 4-bit
quantities, only 16 of these colors can be displayed at the same time.  In
other words, mode 18 provides the capability of displaying 16 simultaneous
colors from a group of 262,144.

     In mode 18, the fg_setcolor, fg_palette, and fg_setrgb routines function
exactly as in mode 17 with one exception:  there are 16 palette registers
instead of just two.  Example 5-9 on page 58 demonstrates the use of these
routines in mode 17, but it would also work in mode 18 if that video mode
number were specified in the call to fg_setmode.
60   Fastgraph User's Guide


VGA and MCGA 256-Color Modes

     The VGA and MCGA 256-color modes (modes 19, 20, and 21) have 256 color
values, numbered 0 to 255.  Each color value directly references one of 256
user-definable 18-bit video DAC registers, also numbered 0 to 255.  The
values assigned to the video DAC registers determine the colors in which
pixels are displayed.  For example, if video DAC register 3 contains the
color value for red, then pixels whose color value is 3 will be red.

     By default, the first 16 video DAC registers (0 to 15) contain the color
values for the standard color set.  The next 16 DAC registers (16 to 31)
contain the color values for a gray scale of gradually increasing intensity.
The next 216 DAC registers (32 to 247) contain three groups of 72 colors
each, with the first group (32 to 103) at high intensity, the second group
(104 to 175) at moderate intensity, and the third group (176 to 247) at low
intensity.  Each group consists of three ranges of decreasing saturation
(increasing whiteness), with each range varying in hue from blue to red to
green.  Finally, the last 8 DAC registers (248 to 255) alternate between
black and bright white.  This information is summarized in the following
table.


            DACs       default color values

            0 to 15    standard color set
            16 to 31   gray scale of gradually increasing intensity
            32 to 55   high saturation, high intensity colors
            56 to 79   moderate saturation, high intensity colors
            80 to 103  low saturation, high intensity colors
            104 to 127 high saturation, moderate intensity colors
            128 to 151 moderate saturation, moderate intensity colors
            152 to 175 low saturation, moderate intensity colors
            176 to 199 high saturation, low intensity colors
            200 to 223 moderate saturation, low intensity colors
            224 to 247 low saturation, low intensity colors
            248 to 255 alternate between black and bright white


     The 18-bit video DAC values consist of three 6-bit red, green, and blue
color components.  Hence, each color component is an integer between 0 and
63; increasing values produce more intense colors.  Because the video DAC
registers are 18 bits long, each DAC can specify one of 262,144 (218) colors.
However, because the color values are 8-bit quantities, only 256 of these
colors can be displayed at the same time.  In other words, modes 19, 20, and
21 provide the capability of displaying 256 simultaneous colors from a group
of 262,144.
                                             Chapter 5:  The Use of Color   61


     In the VGA and MCGA 256-color video modes, the fg_setcolor routine
defines the current color by referencing on of the 256 video DAC registers.
The fg_setrgb routine defines the actual color of a video DAC register.  The
first argument of the fg_setrgb routine is an integer between 0 and 15 that
specifies the DAC register number.  The remaining three arguments are each
integers between 0 and 63 that respectively specify the red, green, and blue
color components for that DAC register.  Another Fastgraph routine,
fg_getrgb, returns the color components for a specified DAC register.  Its
arguments are the same as for fg_setrgb, except the last three arguments (the
return values) are passed by reference rather than by value.

     You can also the Fastgraph routine fg_palette to define the value of a
video DAC register in modes 19, 20, and 21.  The first argument of the
fg_palette routine is an integer between 0 and 255 that specifies the DAC
register number.  The second argument is an integer between 0 and 63 that
specifies the color value for that video DAC register, using the same 64
values as in the EGA enhanced mode (mode 16).

     Example 5-10 demonstrates the use of the fg_setcolor routine in mode 19.
The program uses the Fastgraph routine fg_rect to draw vertical lines.  After
establishing the video mode, the program uses a for loop to draw 256 vertical
lines, one in each of the 256 colors (using the default DAC values).
Finally, the program restores the original video mode and screen attributes
before returning to DOS.

                                Example 5-10.

               #define COLORS 256

               main()
               {
                  int base;
                  int color;
                  int mode;
                  int x;

                  mode = fg_getmode();
                  fg_setmode(19);

                  x = 32;

                  for (color = 0; color < COLORS; color++) {
                     fg_setcolor(color);
                     fg_rect(x,x,0,199);
                     x++;
                     }
                  fg_waitkey();

                  fg_setmode(mode);
                  fg_reset();
               }

62   Fastgraph User's Guide
                                Example 5-11.

                   main()
                   {
                      int old_mode;
                      int red, green, blue;

                      old_mode = fg_getmode();
                      fg_setmode(19);

                      fg_setcolor(103);
                      fg_text("Hello",5);
                      fg_waitfor(18);

                      fg_getrgb(103,&red,&green,&blue);

                      while (red+green+blue > 0) {
                          if (red > 0) red--;
                          if (green > 0) green--;
                          if (blue > 0) blue--;
                          fg_setrgb(103,red,green,blue);
                          fg_waitfor(1);
                          }

                      fg_setmode(old_mode);
                      fg_reset();
                   }

     Example 5-11 shows an interesting effect available in VGA and MCGA
modes.  The program uses the Fastgraph routine fg_waitfor (discussed in
chapter 14) to delay the program's execution.  After establishing the video
mode, the program displays the word "Hello" in color 103, which by default is
a pastel blue.  It then uses the Fastgraph routine fg_getrgb to retrieve the
color components for this color.  The while loop gradually decreases the
color components until all three components are zero, which makes the word
"Hello" smoothly fade to black.  Finally, the program restores the original
video mode and screen attributes before returning to DOS.

     You could extend the program in example 5-11 to fade many colors
simultaneously.  This is an attractive way of turning an image into a blank
screen.  Note that example 5-11 would also work in video modes 17 and 18 as
long as you just use the first 16 video DAC registers.


Defining All Palette Registers

     Fastgraph includes a routine fg_palettes that defines all 16 palette
registers in modes 9, 13, 14, 16, and 18.  You can also use the fg_palettes
routine to define the first 16 video DAC registers in modes 19, 20, and 21.
It has no effect in other video modes.

     Using fg_palettes is considerably faster than calling the fg_palette
routine 16 times.  The argument to the fg_palettes routine is a 16-element
integer array that contains the color values assigned respectively to palette
registers (or video DAC registers) 0 to 15.  Example 5-12 demonstrates how to
zero the palette registers (that is, change them all to black) in mode 13.

                                             Chapter 5:  The Use of Color   63
                                Example 5-12.

              int zeroes[] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};

              main()
              {
                 int mode;

                 mode = fg_getmode();
                 fg_setmode(13);

                 fg_palettes(zeroes);

                 fg_setmode(mode);
                 fg_reset();
              }


Of course, as example 5-12 is written, it appears to do nothing more than
blank the screen.  Its purpose is just to show an example of the fg_palettes
routine.


Virtual Colors

     By this time it should be apparent the use of color is rather specific
to each graphics video mode.  One of the most obvious differences is the
number of available colors in each mode; it ranges from 2 to 256.  By
available colors, we mean the number of colors that can be displayed
simultaneously.

     To simplify programming in graphics modes, Fastgraph provides 256
virtual colors.  The virtual colors are used in the graphics video modes
having fewer than 256 available colors.  Virtual colors allow you to use 256
color indices in all graphics modes, even if a particular mode does not have
256 available colors.

     When you establish a video mode with the fg_setmode routine, Fastgraph
initializes all of the virtual color indices.  It does this by replicating
the video mode's color values through the 256 virtual color indices.  For
example, the CGA color modes (4 and 5) have four color values, numbered 0
through 3.  In these modes, the fg_setmode routine initializes color indices
0, 4, 8, ... , 252 to 0; color indices 1, 5, 9, ... , 253 to 1; color indices
2, 6, 10, ... , 254 to 2; and color indices 3, 7, 11, ... , 255 to 3.
Similarly, in 16-color graphics modes the color indices 0, 16, 32, ... , 240
are set to 0, and so forth.  An analysis of the color value sequences reveals
an often useful feature:  by default, virtual color 0 is black and virtual
color 15 is white or bright white in all graphics video modes.

     It is thus possible to write a multiple-mode program using the same
color indices for each graphics mode.  For example, a program that contains
the statement fg_setcolor(5) would produce subsequent graphics in color 5
(magenta by default) when running in a 16-color graphics mode.  It would
produce subsequent graphics in color 1 (light cyan by default) when running
in a CGA color mode.  This is because 1 is the default value assigned to
virtual color index 5 in the CGA color modes.
64   Fastgraph User's Guide

     The fg_setmode routine establishes default values for the 256 virtual
color indices, but it might be desirable to assign other available colors to
them.  Going back to the discussion in the previous paragraph, color number 2
is light magenta in the default CGA mode 4 palette.  It might make more sense
if the color value 2 were assigned to virtual color index 5, as this would
make the graphics drawn in color 5 the same color in mode 4 as in other color
modes.  The Fastgraph routine fg_defcolor is provided for this purpose.

     The fg_defcolor routine assigns a color value to a virtual color index.
It has two arguments:  the first specifies the virtual color index (between 0
and 255), and the second specifies the color value (between 0 and the number
of available colors in the current video mode).  For example, the statement

                              fg_defcolor(5,2);

would assign the color value 2 to the color index 5.  Another Fastgraph
routine, fg_getindex, returns the current value assigned to a specified color
index.  After executing the above call to fg_defcolor, the statement

                           color = fg_getindex(5);

would store the value 2 (the current value of color index 5) in the integer
variable color.

     It is important to understand the difference between virtual colors and
palette registers.  Modifying the value of a palette register changes the
color of all pixels already drawn using that palette.  Modifying a virtual
color index does not do this; it only specifies any graphics drawn in that
color from this point on will appear in the new color.

     Example 5-13 demonstrates the use of virtual colors in mode 4.  After
establishing the video mode, the program uses the fg_defcolor routine to
define virtual color indices 0 and 255 to be 1, which by default is light
cyan in mode 4.  It then draws characters using color indices 0, 1, and 255,
and in each case the characters appear in light cyan.  Finally, the program
restores the original video mode and screen attributes before returning to
DOS.

                                Example 5-13.

                           main()
                           {
                              int mode;

                              mode = fg_getmode();
                              fg_setmode(4);
                              fg_defcolor(0,1);
                              fg_defcolor(255,1);

                              fg_setcolor(0);
                              fg_text("0",1);
                              fg_setcolor(1);
                              fg_text(" 1",2);
                              fg_setcolor(255);
                              fg_text(" 255",4);
                              fg_waitkey();

                                             Chapter 5:  The Use of Color   65


                              fg_setmode(mode);
                              fg_reset();
                           }


A Multiple-Mode Example

     Even though the color capabilities differ considerably between the
supported video modes, Fastgraph makes it easy to write a program that runs
in many video modes.  This section will present an example of such a program.

     Example 5-14 illustrates a program that will run in any of Fastgraph's
supported video modes.  The program first asks for the video mode number,
checks if the mode number is valid, and then checks if the requested mode is
available on the user's system.  After doing this, the program establishes
the video mode and performs its mode-specific code.  It then displays a brief
message that includes the video mode number in which the program is running.
This information remains on the screen until a key is pressed, at which time
the program restores the original video mode and screen attributes before
returning to DOS.

                                Example 5-14.

       main()
       {
          int mode, old_mode;
          char string[5];

       /* Ask for the video mode number */
          printf("Which video mode? ");
          scanf("%d",&mode);

       /* Make sure the entered value is valid */
          if (mode < 0 || mode > 21) {
             printf("%d is not a valid video mode number.\n",mode);
             exit();
             }

       /* Make sure the requested video mode is available */
          if (fg_testmode(mode,1) == 0) {
             printf("Mode %d is not available on this system.\n",mode);
             exit();
             }

       /* Establish the video mode */
          old_mode = fg_getmode();
          fg_setmode(mode);

       /* Perform mode-specific initializations */
          if (mode <= 3 || mode == 7)   /* text modes */
             fg_cursor(0);

          else if (mode == 4 || mode == 5) { /* CGA color modes */
             fg_palette(0,0);
             fg_defcolor(14,3);

66   Fastgraph User's Guide

             }

          else if (mode == 6) {         /* CGA two-color mode */
             fg_palette(0,14);
             fg_defcolor(14,1);
             }

          else if (mode == 11)          /* Hercules mode */
             fg_defcolor(14,1);

          else if (mode == 12)          /* Hercules low-res mode */
             fg_defcolor(14,3);

          else if (mode == 17) {        /* VGA two-color mode */
             fg_palette(1,14);
             fg_setrgb(14,63,63,21);
             fg_defcolor(14,1);
             }

       /* Display a message that includes the video mode number */
          fg_setcolor(14);
          fg_text("I'm running in mode ",20);
          sprintf(string,"%d. ",mode);
          fg_text(string,3);

       /* Wait for a keystroke */
          fg_waitkey();

       /* Restore the original video mode and screen attributes */
          fg_setmode(old_mode);
          fg_reset();
       }


     Example 5-14 displays its message in yellow for those video modes that
offer color.  In monochrome video modes, it displays the message in normal
intensity.  The program uses virtual color 14, which by default is yellow in
many video modes; the mode-specific code in example 5-14 makes color 14
yellow in other video modes.  In text video modes (modes 0 to 3 and 7), the
program uses the fg_cursor routine to make the cursor invisible.  In CGA
color modes (modes 4 and 5), the program uses the fg_palette routine to
select a CGA palette that contains yellow as color 3 and then uses
fg_defcolor to assign color 3 to virtual color 14.  In CGA two-color mode
(mode 6), the program uses the fg_palette routine to make color 1 yellow and
then uses fg_defcolor to assign color 1 to virtual color 14.  In the Hercules
modes (modes 11 and 12), the program uses the fg_defcolor routine to assign
the value for normal intensity pixels to color 14.  In VGA two-color mode
(mode 17), the program uses the fg_palette routine to assign video DAC
register 14 to palette register 1.  It then defines video DAC register 14 to
be yellow with the fg_setrgb routine and finally uses fg_defcolor to assign
color 1 (that is, palette register 1) to virtual color 14.  In all of the
other video modes, color 14 is yellow by default.
                                             Chapter 5:  The Use of Color   67


Summary of Color-Related Routines

     This section summarizes the functional descriptions of the Fastgraph
routines presented in this chapter.  More detailed information about these
routines, including their arguments and return values, may be found in the
Fastgraph Reference Manual.

     FG_DEFCOLOR assigns a color value to a virtual color index.  This
routine is only meaningful in the graphics video modes that have fewer than
256 available colors.

     FG_GETCOLOR returns the current text attribute (in text modes) or color
index (in graphics modes), as specified in the most recent call to fg_setattr
or fg_setcolor.

     FG_GETINDEX returns the color value assigned to a specified virtual
color index.  In text modes and in graphics modes that have 256 available
colors, this routine returns the value passed to it.

     FG_GETRGB returns the red, green, and blue color components for a
specified video DAC register.  This routine is only meaningful in VGA and
MCGA graphics modes.

     FG_PALETTE has different functions depending on the current graphics
video mode.  For the CGA four-color modes, it establishes the current palette
(of six available) and defines the background color for that palette.  In the
CGA two-color mode, it defines the foreground color.  For the Tandy/PCjr,
EGA, and VGA graphics modes, it defines the value of a single palette
register.  For the 256-color MCGA and VGA graphics modes, it defines the
value of a single video DAC register.  The fg_palette routine has no effect
in text modes or Hercules graphics modes.

     FG_PALETTES defines all 16 palette registers (in Tandy/PCjr, EGA, and
VGA graphics modes), or the first 16 video DAC registers (in 256-color MCGA
and VGA graphics modes).  The fg_palettes routine has no effect in text
modes, CGA graphics modes, or Hercules graphics modes.

     FG_SETATTR establishes the current text attribute in text video modes.
This routine has no effect in graphics modes.

     FG_SETCOLOR establishes the current color index (which may be a virtual
color index in graphics modes).  In text modes, the fg_setcolor routine
provides an alternate method of establishing the current text attribute.

     FG_SETRGB defines the value of a single palette register (in Tandy/PCjr
and EGA graphics modes) or video DAC register (in VGA and MCGA modes) by
specifying its red, green, and blue color components.  The fg_setrgb routine
has no effect in text modes, CGA graphics modes, or Hercules graphics modes.
68   Fastgraph User's Guide


Chapter 6

Graphics Fundamentals
70   Fastgraph User's Guide


Overview

     This chapter describes Fastgraph's fundamental graphics routines,
sometimes called graphics primitives.  These routines perform such functions
as clearing the screen, drawing points, drawing solid and dashed lines,
drawing closed shapes (polygons, circles, and ellipses), drawing rectangles
(solid and dithered), and filling arbitrary regions.  Most of these routines
have no effect in text video modes, but there are a few exceptions, and they
will be noted in the descriptions of those routines.


Clearing the Screen

     The Fastgraph routine fg_erase clears the entire screen in any video
mode.  In text modes, fg_erase clears the screen by storing a space character
(ASCII 32) with a gray foreground attribute in each character cell.  In
graphics modes, fg_erase clears the screen by setting each pixel to zero.
This of course causes each pixel to be displayed its background color.  The
fg_erase routine has no arguments.


Clipping

     The suppression of graphics outside a pre-defined area is called
clipping.  Many of Fastgraph's graphics-oriented routines provide clipping,
either automatically or through a special version of the routine.

     Fastgraph includes two routines, fg_setclip and fg_setclipw, to define a
rectangular clipping region.  The fg_setclip routine defines the clipping
region in screen space, while the fg_setclipw routine performs the same
function in world space.  Each routine takes four arguments:  the minimum x,
the maximum x, the minimum y, and the maximum y coordinate of the clipping
region.  The arguments are integer quantities for fg_setclip and floating
point quantities for fg_setclipw.  For example, the statement

                           fg_setclip(0,159,0,99);

would define the upper left quadrant of the screen as the clipping region in
a 320 by 200 graphics mode.

     An implicit clipping region equal to the entire screen is defined as
part of the fg_setmode routine's initializations.  Clipping is not supported
for text modes.


Points

     The Fastgraph routine fg_point provides the most fundamental graphics
operation -- setting a pixel to a specified color.  The fg_point routine has
two integer arguments.  The first specifies the pixel's x coordinate, and the
second its y coordinate.  The pixel is drawn using the current color value,
as specified in the most recent call to fg_setcolor.  There is also a world
space version of this routine, fg_pointw, that uses floating point arguments.

     Another Fastgraph routine is available for reading a pixel's color
value.  The fg_getpixel routine has two integer arguments that specify the
                                        Chapter 6:  Graphics Fundamentals   71

(x,y) coordinates for the pixel of interest.  There is no world space version
of the fg_getpixel routine, but you can obtain a pixel's color value in world
space by applying the fg_xscreen and fg_yscreen functions to the world space
coordinates and passing the resulting values to fg_getpixel.

     Example 6-1 uses the fg_point routine to draw 100 random points in
random colors.  It also uses the fg_getpixel routine to insure no two points
are adjacent.  The program establishes a graphics video mode with the
fg_automode and fg_setmode routines.  Next, it determines the maximum color
value for the selected video mode; note if we used virtual colors (color
indices above the maximum color value), some of the colors would be the
background color and would thus produce invisible points.  The main part of
the program is a while loop that first generates a random pair of (x,y)
screen coordinates.  It then calls the fg_getpixel routine to check the
pixels at (x,y) and the eight adjacent positions.  If none of these pixels
are set, the program generates a random color value and draws a point in that
color.  After doing this 100 times, the program waits for a keystroke,
restores the original video mode and screen attributes, and then returns to
DOS.

                              Example 6-1.

main()
{
   int area;
   int color, old_color;
   int left;
   int max_color, max_x, max_y;
   int new_mode, old_mode;
   int x, y;

   old_mode = fg_getmode();
   new_mode = fg_automode();
   fg_setmode(new_mode);

   if (new_mode == 4)
      max_color = 3;
   else if (new_mode == 11 || new_mode == 17)
      max_color = 1;

72   Fastgraph User's Guide

   else if (new_mode == 19)
      max_color = 255;
   else
      max_color = 15;

   left = 100;
   max_x = fg_getmaxx() - 1;
   max_y = fg_getmaxy() - 1;

   while (left > 0) {

      x = random(1,max_x);
      y = random(1,max_y);

      area = fg_getpixel(x-1,y-1) + fg_getpixel(x,y-1) + fg_getpixel(x+1,y-1)
           + fg_getpixel(x-1,y)   + fg_getpixel(x,y)   + fg_getpixel(x+1,y)
           + fg_getpixel(x-1,y+1) + fg_getpixel(x,y+1) + fg_getpixel(x+1,y+1);

      if (area == 0) {
         color = random(1,max_color);
         fg_setcolor(color);
         fg_point(x,y);
         left--;
         }

      }

   fg_waitkey();

   fg_setmode(old_mode);
   fg_reset();
}

random(min,max)
int min, max;
{
   return((rand() % (max - min + 1)) + min);
}

                                        Chapter 6:  Graphics Fundamentals   73

The Graphics Cursor

     Many of Fastgraph's graphics routines depend on the position of the
graphics cursor as a reference point.  For example, Fastgraph includes
routines to draw lines from the graphics cursor position to a specified
position, and the image display routines discussed in chapter 9 display or
retrieve an image relative to the graphics cursor position.  The graphics
cursor is not a cursor in the true sense; it is simply a pair of (x,y)
coordinates with a special meaning.  The fg_setmode routine sets the graphics
cursor position to the screen space coordinates (0,0), and the fg_initw
routine sets it to the world space coordinates (0.0,0.0).

     Fastgraph includes four routines for changing the graphics cursor
position.  The fg_move routine sets it to an absolute screen space position,
while the fg_movew routine sets it to an absolute world space position.  The
fg_moverel routine sets the graphics cursor position to a screen space
position relative to its current position.  The fg_moverw routine does the
same in world space.

     Each of these routines has two arguments that specify the (x,y)
coordinates of the new position.  For the screen space routines, the
arguments are integer quantities.  For the world space routines, the
arguments are floating point quantities.

     You can obtain the screen space coordinates of the graphics cursor
position with the fg_getxpos and fg_getypos routines.  These routines have no
arguments and respectively return the x and y coordinates of the graphics
cursor position as the function value.  To obtain the world space coordinates
of the graphics cursor position, you can apply the fg_xworld and fg_yworld
functions to the return values of fg_getxpos and fg_getypos.
74   Fastgraph User's Guide


Solid Lines

     Fastgraph includes four routines for drawing solid lines.  All four
routines draw lines in the current color value (as determined by the most
recent call to fg_setcolor) and observe the clipping limits.  The fg_draw
routine draws a line from the current graphics cursor position to an absolute
screen space position, while the fg_draww routine draws a line to an absolute
world space position.  The fg_drawrel routine draws a line from the current
graphics cursor position to a screen space position relative to it.  The
fg_drawrw routine does the same in world space.

     Each of these routines has two arguments that specify the (x,y)
coordinates of the destination position.  For the screen space routines, the
arguments are integer quantities.  For the world space routines, the
arguments are floating point quantities.  In either case the destination
position becomes the new graphics cursor position.  This makes it possible to
draw connected lines without calling a graphics cursor movement routine
between successive calls to a line drawing routine.

     Examples 6-2 and 6-3 each draw a pair of crossed lines that divide the
screen into quadrants.  Example 6-2 does this using the fg_move and fg_draw
routines, while example 6-3 uses the fg_moverel and fg_drawrel routines.
Both examples draw the lines in bright white, the default for color 15 in all
graphics video modes.

              Example 6-2.                          Example 6-3.

     main()                                main()
     {                                     {
        int max_x, max_y;                     int max_x, max_y;
        int mid_x, mid_y;                     int mid_x, mid_y;
        int new_mode, old_mode;               int new_mode, old_mode;

        old_mode = fg_getmode();              old_mode = fg_getmode();
        new_mode = fg_automode();             new_mode = fg_automode();
        fg_setmode(new_mode);                 fg_setmode(new_mode);

        max_x = fg_getmaxx();                 max_x = fg_getmaxx();
        max_y = fg_getmaxy();                 max_y = fg_getmaxy();
        mid_x = max_x / 2;                    mid_x = max_x / 2;
        mid_y = max_y / 2;                    mid_y = max_y / 2;

        fg_setcolor(15);                      fg_setcolor(15);
        fg_move(mid_x,0);                     fg_move(mid_x,0);
        fg_draw(mid_x,max_y);                 fg_drawrel(0,max_y);
        fg_move(0,mid_y);                     fg_moverel(-mid_x,-mid_y);
        fg_draw(max_x,mid_y);                 fg_drawrel(max_x,0);

        fg_waitkey();                         fg_waitkey();

        fg_setmode(old_mode);                 fg_setmode(old_mode);
        fg_reset();                           fg_reset();
     }                                     }

                                        Chapter 6:  Graphics Fundamentals   75

     Examples 6-4 and 6-5 are variations of example 6-2.  Example 6-4 uses
world space rather than screen space to draw the crossed lines.  Example 6-5
is identical to example 6-2 except it defines a clipping area to restrict
drawing to the upper left quadrant of the screen.  The clipping suppresses
the right half of the horizontal line and the lower half of the vertical
line.

             Example 6-4.                            Example 6-5.

main()                                      main()
{                                           {
   int new_mode, old_mode;                    int max_x, max_y;
                                              int mid_x, mid_y;
   old_mode = fg_getmode();                   int new_mode, old_mode;
   new_mode = fg_automode();
   fg_setmode(new_mode);                      old_mode = fg_getmode();
   fg_initw();                                new_mode = fg_automode();
   fg_setworld(-10.0,10.0,-10.0,10.0);        fg_setmode(new_mode);

   fg_setcolor(15);                           max_x = fg_getmaxx();
   fg_movew(0.0,10.0);                        max_y = fg_getmaxy();
   fg_draww(0.0,-10.0);                       mid_x = max_x / 2;
   fg_movew(-10.0,0.0);                       mid_y = max_y / 2;
   fg_draww(10.0,0.0);
                                              fg_setclip(0,mid_x,0,mid_y);
   fg_waitkey();
                                              fg_setcolor(15);
   fg_setmode(old_mode);                      fg_move(mid_x,0);
   fg_reset();                                fg_draw(mid_x,max_y);
}                                             fg_move(0,mid_y);
                                              fg_draw(max_x,mid_y);

                                              fg_waitkey();

                                              fg_setmode(old_mode);
                                              fg_reset();
                                           }

76   Fastgraph User's Guide

Dashed Lines

     Fastgraph includes four routines for drawing dashed lines.  All four
routines draw lines in the current color value (as determined by the most
recent call to fg_setcolor) and observe the clipping limits.  The fg_dash
routine draws a dashed line from the current graphics cursor position to an
absolute screen space position, while the fg_dashw routine draws a dashed
line to an absolute world space position.  The fg_dashrel routine draws a
dashed line from the current graphics cursor position to a screen space
position relative to it.  The fg_dashrw routine does the same in world space.

     Each of these routines has three arguments.  The first two specify the
(x,y) coordinates of the destination position.  For the screen space
routines, these arguments are integer quantities.  For the world space
routines, these arguments are floating point quantities.  The third argument
is a 16-bit pattern that defines the appearance of the dashed line.  Bits
that are set in the pattern produce the visible part of the line, while bits
that are reset produce the invisible part.  This pattern is repeated as
necessary to draw the entire line.  For example, the pattern value 3333 hex
would produce a dashed line with the first two pixels off, the next two on,
the next two off, and so forth.  Similarly, the pattern value FFFF hex would
produce a solid line.

     The destination position passed to any of the dashed line routines
becomes the new graphics cursor position.  This makes it possible to draw
connected dashed lines without calling a graphics cursor movement routine
between successive calls to a line drawing routine.

     Example 6-6 draws a pair of crossed dashed lines that divide the screen
into quadrants.  It does this using the fg_move and fg_dash routines and
draws the lines in bright white, the default for color 15 in all graphics
video modes.  The dash pattern for each line is 3333 hex, which alternates
two pixels off and on.

                                 Example 6-6.

                       main()
                       {
                          int max_x, max_y;
                          int mid_x, mid_y;
                          int new_mode, old_mode;

                          old_mode = fg_getmode();

                                        Chapter 6:  Graphics Fundamentals   77

                          new_mode = fg_automode();
                          fg_setmode(new_mode);

                          max_x = fg_getmaxx();
                          max_y = fg_getmaxy();
                          mid_x = max_x / 2;
                          mid_y = max_y / 2;

                          fg_setcolor(15);
                          fg_move(mid_x,0);
                          fg_dash(mid_x,max_y,0x3333);
                          fg_move(0,mid_y);
                          fg_dash(max_x,mid_y,0x3333);

                          fg_waitkey();

                          fg_setmode(old_mode);
                          fg_reset();
                       }



Polygons, Circles, and Ellipses

     Fastgraph includes routines for drawing three types of closed shapes:
polygons, circles, and ellipses.  Both screen space and world space versions
of these routines are available.  All of the routines for drawing closed
shapes observe the clipping limits.

     The fg_polygon routine draws an unfilled polygon in screen space.
Fg_polygon requires an array of integer x coordinates as its first argument,
and an array of integer y coordinates as its second argument.  Each (x,y)
coordinate pair from the two arrays is treated as a polygon vertex.  In other
words, the x coordinate of the first polygon vertex is the first element of
the x coordinate array, and the y coordinate of the first vertex is the first
element of the y coordinate array.  Similarly, the second elements of each
array define the second vertex, and so forth.  The third argument for
fg_polygon is an integer quantity that specifies the number of elements in
the two coordinate arrays.

     Another routine, fg_polygonw, draws an unfilled polygon in world space.
The fg_polygonw routine is identical to the fg_polygon routine, except its x
and y coordinate arrays must contain floating point values instead of
integers.

     The drawing of the polygon begins at the graphics cursor position.  The
routine then draws a solid line in the current color to the first vertex,
then to the second vertex, and continues in this manner up to the last
vertex.  If necessary, fg_polygon and fg_polygonw draw a line connecting the
last vertex and the original graphics cursor position.  This last operation
closes the polygon and effectively leaves the graphics cursor position
unchanged.

     Example 6-7 illustrates the use of the fg_polygon routine in the EGA
monochrome or enhanced modes (mode 15 and 16).  The program exits if neither
of these video modes are available.
78   Fastgraph User's Guide

                                 Example 6-7.

             #define VERTICES 10

             int x[] = {200,300,400,400,300,240,160,160,200,200};
             int y[] = {100, 80,100,220,320,320,240,200,160,160};

             main()
             {
                int old_mode;

                old_mode = fg_getmode();

                if (fg_testmode(16,1))
                   fg_setmode(16);
                else if (fg_testmode(15,1))
                   fg_setmode(15);
                else {
                   printf("This program requires a 640 x 350 ");
                   printf("EGA graphics mode.\n");
                   exit();
                   }

                fg_setcolor(1);
                fg_polygon(x,y,VERTICES);
                fg_waitkey();

                fg_setmode(old_mode);
                fg_reset();
             }


     The fg_circle routine draws an unfilled circle in screen space, centered
at the graphics cursor position, using the current color.  The routine's only
argument specifies the circle's radius in horizontal screen space units.
Another routine, fg_circlew, draws an unfilled circle where the radius is
measured in horizontal world space units.  Both routines leave the graphics
cursor position unchanged.

     The fg_ellipse routine draws an unfilled ellipse in screen space,
centered at the graphics cursor position, using the current color.  The
routine requires two arguments that respectively specify the length of its
horizontal and vertical semi-axes.  In other words, the first argument is the
absolute distance from the center of the ellipse to its horizontal extremity,
and the second argument is the absolute distance from the center of the
ellipse to its vertical extremity.  Another routine, fg_ellipsew, draws an
unfilled ellipse in world space.  Both routines leave the graphics cursor
position unchanged.

     Example 6-8 illustrates the use of the fg_circlew and fg_ellipsew
routines.  The program first uses the fg_automode routine to propose a
graphics video mode and then uses the fg_setmode routine to select that video
mode.  It then makes color 15 the current color, which by default is bright
white in all color graphics modes and "on" in the monochrome graphics modes.
Next, it establishes a 200-unit by 200-unit world space coordinate system.
The program then uses fg_ellipsew to draw an ellipse and fg_circlew to draw a
circle, both centered at the middle of the screen (which is the origin of our
                                        Chapter 6:  Graphics Fundamentals   79

world space coordinate system).  The circle has a radius of 1/16 the width of
the screen (12.5 horizontal world space units), and the ellipse is
horizontally inscribed within the circle.

     Example 6-9 illustrates the use of the fg_circle and fg_ellipse
routines.  It is functionally identical to the program of example 6-8, but it
uses screen space rather than world space coordinates to draw the circle and
ellipse.  Note the arguments to the fg_circle and fg_ellipse routines are
dependent on the maximum x and y coordinates of the selected video mode.  If
we didn't compute these arguments in this manner, the actual size of the
circle and ellipse would be proportional to the pixel resolution of the video
mode.  No such dependency exists when using world space, but we pay a price
for this feature in slightly slower execution speed.

               Example 6-8.                            Example 6-9.

main()                                       main()
{                                            {
   int old_mode;                                int mid_x, mid_y;
                                                int old_mode;
   old_mode = fg_getmode();                     int x,y;
   fg_setmode(fg_automode());
   fg_setcolor(15);                             old_mode = fg_getmode();
                                                fg_setmode(fg_automode());
   fg_initw();                                  fg_setcolor(15);
   fg_setworld(-100.0,100.0,-100.0,100.0);
                                                mid_x = fg_getmaxx() / 2;
   fg_movew(0.0,0.0);                           mid_y = fg_getmaxy() / 2;
   fg_ellipsew(12.5,12.5);                      x = mid_x / 8;
   fg_circlew(12.5);                            y = mid_y / 8;

   fg_waitkey();                                fg_move(mid_x,mid_y);
                                                fg_ellipse(x,y);
   fg_setmode(old_mode);                        fg_circle(x);
   fg_reset();
}                                               fg_waitkey();
                                                fg_setmode(old_mode);
                                                fg_reset();
                                             }

80   Fastgraph User's Guide

Solid Rectangles

     Fastgraph includes four routines for drawing solid rectangles, two for
screen space and two for world space, with and without clipping.  None of
these routines affect the graphics cursor position.

     The fg_rect routine draws a solid rectangle in screen space, without
regard to the clipping limits, using the current color.  Fg_rect requires
four integer arguments that respectively define the minimum x, maximum x,
minimum y, and maximum y screen space coordinates of the rectangle.  The
minimum coordinates must be less than or equal to the maximum coordinates, or
else the results are unpredictable.  The fg_clprect routine is identical in
all respects to the fg_rect routine, except it observes the clipping limits.

     The world space versions of the solid rectangle drawing routines are
fg_rectw and fg_clprectw.  Like fg_rect and fg_clprect, they require four
arguments that define the extremes of the rectangle, but the arguments are
floating point world space coordinates.

     You can also use the fg_rect routine in text modes.  When used in a text
mode, fg_rect expects its four arguments to be expressed in character space
(that is, rows and columns) rather than screen space.  This means the four
arguments respectively specify the minimum column, maximum column, minimum
row, and maximum row of the rectangle.  Fastgraph constructs the rectangle by
storing the solid block character (ASCII decimal value 219) in each character
cell comprising the rectangle.  The rectangle is drawn using the current
character attribute, but because the solid block character occupies the
entire character cell, the background component of the attribute is
essentially meaningless.

     Example 6-10 demonstrates the use of the fg_rect routine by drawing 200
random-size rectangles in random colors.  The program first uses the
fg_automode routine to propose a graphics video mode and then uses the
fg_setmode routine to select that video mode.  Next, it determines the
horizontal and vertical screen resolution for the selected video mode, using
the fg_getmaxx and fg_getmaxy routines.  The main part of the program is a
for loop that generates a random rectangle in each iteration.  Inside the
loop, the C library function rand is used to randomly generate the extremes
of the rectangle.  If necessary, the program then exchanges the coordinates
to make the minimum coordinates less than or equal to the maximum
coordinates.  Finally, it again uses rand to generate a random color number
between 0 and 15, and then draws the rectangle in that color.  After drawing
                                        Chapter 6:  Graphics Fundamentals   81

all 200 rectangles, the program restores the original video mode and screen
attributes before returning to DOS.

                                Example 6-10.

            #define RECTANGLES 200
            #define SWAP(a,b,temp) { temp = a; a = b; b = temp; }

            main()
            {
               int i;
               int minx, maxx, miny, maxy;
               int old_mode;
               int temp;
               int xres, yres;

               old_mode = fg_getmode();
               fg_setmode(fg_automode());

               xres = fg_getmaxx() + 1;
               yres = fg_getmaxy() + 1;

               for (i = 0; i < RECTANGLES; i++) {
                  minx = rand() % xres;
                  maxx = rand() % xres;
                  miny = rand() % yres;
                  maxy = rand() % yres;
                  if (minx > maxx)
                     SWAP(minx,maxx,temp);
                  if (miny > maxy)
                     SWAP(miny,maxy,temp);
                  fg_setcolor(rand()%16);
                  fg_rect(minx,maxx,miny,maxy);
                  }

               fg_setmode(old_mode);
               fg_reset();
            }



Dithered Rectangles

     The process of alternating different color pixels across a region of the
display area is called dithering.  This technique is especially useful in the
graphics modes with few colors, such as CGA and Hercules modes, because you
can simulate additional colors through effective uses of dithering.
Fastgraph includes two routines for drawing dithered rectangles, one for
screen space and one for world space.  Neither routine observes the clipping
limits, nor do they affect the graphics cursor position.

     The fg_drect routine draws a dithered rectangle in screen space.  Like
the fg_rect routine, fg_drect requires four integer arguments that
respectively define the minimum x, maximum x, minimum y, and maximum y screen
space coordinates of the rectangle.  The minimum coordinates must be less
than or equal to the maximum coordinates, or else the results are
unpredictable.  However, fg_drect also requires a fifth argument that defines
82   Fastgraph User's Guide

the dithering matrix, which in turn determines the pixel pattern used to
build the dithered rectangle.  The size and format of the dithering matrix
are dependent on the video mode.

     The world space version of the dithered rectangle drawing routine is
fg_drectw.  Like fg_drect, it requires four arguments that define the
extremes of the rectangle, and a fifth argument that defines the dithering
matrix.

     As mentioned earlier, the size and format of the dithering matrix are
dependent on the video mode.  The dithering matrix is a four byte array in
all video modes except the 256 color graphics modes (modes 19, 20, and 21),
where it is an eight byte array.  This array contains a pixel pattern that
fg_drect or fg_drectw replicates across the rectangle's area.  The structure
of the dithering matrix closely mimics the structure of video memory in each
graphics mode.

     The remainder of this section will present some simple mode-specific
examples to illustrate the structure of the dithering matrix in the different
graphics modes.  Suppose we would like to produce a "checkerboard" of light
blue and bright white pixels.  That is, in a given row of a rectangle,
consecutive pixels will alternate between these two colors.  Additionally,
the pattern for adjacent rows will be shifted such that there will always be
a bright white pixel above and below a light blue pixel, and vice versa.
Hence this pixel pattern would look something like

                                   B W B W
                                   W B W B
                                   B W B W
                                   W B W B

where each B represents a light blue pixel, and each W represents a bright
white pixel.  The following examples describe the dithering matrix that could
be used to produce such a pixel pattern in each graphics mode.

CGA Four-Color Graphics Modes

     The CGA four-color graphics modes (modes 4 and 5) use a four-byte
dithering matrix that Fastgraph treats as a four-row by one-column array.
Since each pixel in modes 4 and 5 requires two bits of video memory, each
byte of the dithering matrix holds four pixels.  Thus the pixel
representation of the dithering matrix would appear as shown below on the
left; its translation to numeric values appears on the right.


                   [3]   B W B W       [3]   01 11 01 11

                   [2]   W B W B       [2]   11 01 11 01

                   [1]   B W B W       [1]   01 11 01 11

                   [0]   W B W B       [0]   11 01 11 01


Because modes 4 and 5 do not offer a light blue color, we've used light cyan
(color value 1 in palette 1) to approximate light blue.  The B pixels thus
translate to color value 1, or 01 binary.  Bright white is available as color
                                        Chapter 6:  Graphics Fundamentals   83

value 3 in palette 1, so the W pixels translate to color value 3, or 11
binary.  The hexadecimal equivalent of the binary value 11011101 (for array
elements [0] and [2]) is DD, and the hexadecimal equivalent of the binary
value 01110111 (for array elements [1] and [3]) is 77.  As shown in example
6-11, these are precisely the values assigned to the elements of the
dithering matrix.

     Example 6-11 uses mode 4 to display a 50-pixel by 50-pixel dithered
rectangle in the upper left corner of the screen.  The dithering matrix
represents the blue and white checkerboard pattern discussed in the preceding
paragraph.

                                Example 6-11.

                       main()
                       {
                          char matrix[4];
                          int old_mode;

                          old_mode = fg_getmode();
                          fg_setmode(4);

                          matrix[0] = matrix[2] = 0xDD;
                          matrix[1] = matrix[3] = 0x77;
                          fg_drect(0,49,0,49,matrix);

                          fg_waitkey();

                          fg_setmode(old_mode);
                          fg_reset();
                       }


CGA Two-Color Graphics Mode

     The CGA two-color graphics mode (mode 6) uses a four-byte dithering
matrix that Fastgraph treats as a four-row by one-column array, as in the
other four-color CGA modes.  However, each pixel in mode 6 only requires one
bit of video memory, so each byte of the dithering matrix holds eight pixels.
Thus the pixel representation of the dithering matrix would appear as shown
below on the left; its translation to numeric values appears on the right.


             [3]   B W B W B W B W       [3]   0 1 0 1 0 1 0 1

             [2]   W B W B W B W B       [2]   1 0 1 0 1 0 1 0

             [1]   B W B W B W B W       [1]   0 1 0 1 0 1 0 1

             [0]   W B W B W B W B       [0]   1 0 1 0 1 0 1 0


Mode 6 obviously does not offer a light blue color, so we've used black
(color value 0) in its place.  The B pixels thus translate to color value 0.
Bright white is available as color value 1, so the W pixels translate to
color value 1.  The hexadecimal equivalent of the binary value 10101010 (for
array elements [0] and [2]) is AA, and the hexadecimal equivalent of the
84   Fastgraph User's Guide

binary value 01010101 (for array elements [1] and [3]) is 55.  Thus, to make
example 6-11 run in mode 6, we only need to change the fg_setmode argument
from 4 to 6 and change the dithering matrix values as shown below.


                        matrix[0] = matrix[2] = 0xAA;
                        matrix[1] = matrix[3] = 0x55;


Tandy/PCjr 16-Color Graphics Mode

     The Tandy/PCjr 16-color graphics mode (mode 9) also uses a four-byte
dithering matrix that Fastgraph treats as a four-row by one-column array.
Each pixel in mode 9 requires four bits of video memory, so each byte of the
dithering matrix only holds two pixels.  Thus the pixel representation of the
dithering matrix would appear as shown below on the left; its translation to
numeric values appears on the right.


                      [3]   B W       [3]   1001 1111

                      [2]   W B       [2]   1111 1001

                      [1]   B W       [1]   1001 1111

                      [0]   W B       [0]   1111 1001


The B pixels translate to color value 9 (light blue), or 1001 binary, and the
W pixels translate to color value 15 (bright white), or 1111 binary.  The
hexadecimal equivalent of the binary value 11111001 (for array elements [0]
and [2]) is F9, and the hexadecimal equivalent of the binary value 10011111
(for array elements [1] and [3]) is 9F.  Thus, to make example 6-11 run in
mode 9, we only need to change the fg_setmode argument from 4 to 9 and change
the dithering matrix values as shown below.


                        matrix[0] = matrix[2] = 0xF9;
                        matrix[1] = matrix[3] = 0x9F;


Hercules Graphics Mode

     The size and format of the dithering matrix in the Hercules graphics
mode (mode 11) is identical to that of the CGA two-color mode (mode 6).
Please refer to page 83 for a discussion of mode 6 dithering.

Hercules Low-Resolution Graphics Mode

     The size and format of the dithering matrix in the Hercules low-
resolution graphics mode (mode 12) is identical to that of the CGA four-color
modes (modes 4 and 5).  As far as our checkerboard example goes, we'll use
black (color value 0) in place of light blue, and bold (color value 3)
instead of bright white.  Thus the B pixels translate to 00 binary, while the
W pixels translate to 11 binary.  The hexadecimal equivalent of the binary
value 11001100 (for array elements [0] and [2]) is CC, and the hexadecimal
equivalent of the binary value 00110011 (for array elements [1] and [3]) is
                                        Chapter 6:  Graphics Fundamentals   85

33.  Thus, to make example 6-11 run in mode 12, we only need to change the
fg_setmode argument from 4 to 12 and change the dithering matrix values as
shown below.


                        matrix[0] = matrix[2] = 0xCC;
                        matrix[1] = matrix[3] = 0x33;


EGA and VGA Graphics Modes

     The native EGA and VGA graphics modes (modes 13 through 18) use a four-
byte dithering matrix that Fastgraph treats as a four-row by one-column
array.  Unlike the other graphics modes, which allow you to store pixels of
several colors in the dithering matrix, the EGA and VGA modes treat the
dithering matrix as a bit map for a specific color.  Since each color in the
dither pattern must be stored in a separate bit map (that is, in a separate
dithering matrix), it is necessary to call fg_drect once for each color.
Furthermore, you must use the fg_setcolor routine before each call to
fg_drect to define the color used with the dithering matrix.

     In all of the EGA and VGA graphics modes, each byte of the dithering
matrix is a bit map that represents eight pixels.  Using our familiar
checkerboard example, the pixel representation of the dithering matrix would
appear as shown below.


                           [3]   B W B W B W B W

                           [2]   W B W B W B W B

                           [1]   B W B W B W B W

                           [0]   W B W B W B W B


Translating this pattern to numeric values is simple.  Just construct one
dithering matrix for each color in the pattern (there are two colors in this
example), where pixels of the current color translate to 1, and other pixels
translate to 0.  Following our example, the translation for the B pixels
appears below on the left, while the translation for the W pixels appears on
the right.


             [3]   1 0 1 0 1 0 1 0       [3]   0 1 0 1 0 1 0 1

             [2]   0 1 0 1 0 1 0 1       [2]   1 0 1 0 1 0 1 0

             [1]   1 0 1 0 1 0 1 0       [1]   0 1 0 1 0 1 0 1

             [0]   0 1 0 1 0 1 0 1       [0]   1 0 1 0 1 0 1 0


The hexadecimal equivalent of the binary value 01010101 is 55, and the
hexadecimal equivalent of the binary value 10101010 is AA.  As shown in
example 6-12, these are precisely the values assigned to the elements of the
dithering matrices.
86   Fastgraph User's Guide


     Example 6-12 uses mode 13 to display our light blue and bright white
checkerboard pattern.  Note it is necessary to call fg_drect twice -- once
for the light blue pixels (color value 9), and again for the bright white
pixels (color value 15).  Note also how fg_setcolor is used before each call
to fg_drect to define the color of the pixels fg_drect will display.

                                Example 6-12.

                       main()
                       {
                          char matrix[4];
                          int old_mode;

                          old_mode = fg_getmode();
                          fg_setmode(13);

                          matrix[0] = matrix[2] = 0x55;
                          matrix[1] = matrix[3] = 0xAA;
                          fg_setcolor(9);
                          fg_drect(0,49,0,49,matrix);

                          matrix[0] = matrix[2] = 0xAA;
                          matrix[1] = matrix[3] = 0x55;
                          fg_setcolor(15);
                          fg_drect(0,49,0,49,matrix);

                          fg_waitkey();

                          fg_setmode(old_mode);
                          fg_reset();
                       }


MCGA and VGA 256-Color Graphics Modes

     The MCGA and VGA 256-color graphics modes (modes 19, 20, and 21) use an
eight-byte dithering matrix that Fastgraph treats as a four-row by two-column
array.  Each pixel in modes 19, 20, and 21 requires eight bits of video
memory, so each byte of the dithering matrix only holds a single pixel.  We
therefore need the two column dithering matrix to produce any type of dither
pattern.  The pixel representation of the dithering matrix would appear as
shown below on the left; its translation to numeric values appears on the
right.


                    [6]   B   W   [7]     [6]    9   15   [7]

                    [4]   W   B   [5]     [4]   15    9   [5]

                    [2]   B   W   [3]     [2]    9   15   [3]

                    [0]   W   B   [1]     [0]   15    9   [1]

                                        Chapter 6:  Graphics Fundamentals   87

The B pixels translate to color value 9 (light blue), and the W pixels
translate to color value 15 (bright white).  Example 6-13 uses mode 19 to
draw our light blue and bright white checkerboard pattern.

                                Example 6-13.

            main()
            {
               char matrix[8];
               int old_mode;

               old_mode = fg_getmode();
               fg_setmode(19);

               matrix[0] = matrix[3] = matrix[4] = matrix[7] = 15;
               matrix[1] = matrix[2] = matrix[5] = matrix[6] =  9;
               fg_drect(0,49,0,49,matrix);

               fg_waitkey();

               fg_setmode(old_mode);
               fg_reset();
            }


Closing Remarks

     There are two other important items pertaining to the fg_drect and
fg_drectw routines.  These items apply regardless of which graphics video
mode is being used.

     First, the dithering matrix may not contain virtual color values.  That
is, the pixel color values stored in the dithering matrix must be between 0
and the maximum color value for the current video mode.  If any color value
is redefined using the fg_defcolor routine, Fastgraph always ignores the
redefinition and instead uses the actual color value.  Note this does not
apply to palette registers or video DAC registers, because in these cases we
are redefining the color associated with a color value and not the color
value itself.

     Second, Fastgraph aligns the dithering matrix to specific pixel rows.
Fastgraph draws the dithered rectangle starting with the pixel row specified
by the rectangle's lower limit (the maximum y coordinate for fg_drect, or the
minimum y coordinate for fg_drectw) and proceeds upward until reaching the
rectangle's upper limit.  In all cases the dithering matrix used by fg_drect
and fg_drectw contains four rows.  If we let r represent the pixel row
corresponding to the rectangle's lower limit, then the first row used in the
dithering matrix is r modulo 4 (assuming the dithering matrix rows are
numbered 0 to 3).  This alignment enables you to use the same dithering
matrix in multiple calls to fg_drect and fg_drectw for building an object of
adjacent dithered rectangles (for example, an L-shaped area) and still have
the dither pattern match where the rectangles intersect.
88   Fastgraph User's Guide


Region Fill

     Fastgraph includes routines for filling arbitrary regions.  The fg_paint
routine fills a region with the current color value by specifying a screen
space point in the region's interior.  The fg_paintw routine likewise fills a
region, but it requires the interior point to be expressed in world space.
Neither routine changes the graphics cursor position.

     Each of these routines has two arguments that specify the (x,y)
coordinates of the interior point.  For the fg_paint routine, the arguments
are integer quantities.  For the fg_paintw routine, they are floating point
quantities.

     The region being filled must be a closed polygon whose boundary color is
different from that of the specified interior point.  The region may contain
holes (interior areas that will not be filled).  Fastgraph fills the region
by changing every interior pixel whose color is the same as the specified
interior point, to the current color.  If the interior point is already the
current color, the region fill routines do nothing.  It is important to note
the screen edges are not considered polygon boundaries, and filling an open
polygon will cause the fg_paint and fg_paintw routines to behave
unpredictably.

     Example 6-14 illustrates a simple use of the fg_paint routine in a 320
by 200 graphics mode.  The program uses fg_bestmode to select an available
video mode (if no 320 by 200 graphics mode is available, the program exits).
After establishing the selected video mode, the program uses the fg_move and
fg_drawrel routines to draw a hollow rectangle in color 10 and a hollow
diamond in color 9.  The diamond is drawn in the middle of the rectangle,
thus making it a hole with respect to the rectangle.  The program leaves
these shapes on the screen until a key is pressed.  At that time, it calls
the fg_paint routine to fill that part of the rectangle outside the diamond
with color 10.  After waiting for another keystroke, the program again uses
fg_paint to fill the interior of the diamond with color 15.  Finally, the
program waits for another keystroke, restores the original video mode and
screen attributes, and returns to DOS.

                                Example 6-14.

             main()
             {
                int old_mode, new_mode;

                new_mode = fg_bestmode(320,200,1);
                if (new_mode < 0) {
                   printf("This program requires a 320 x 200 ");
                   printf("graphics mode.\n");
                   exit();
                   }

                old_mode = fg_getmode();
                fg_setmode(new_mode);

                fg_setcolor(10);
                fg_move(100,50);

                                        Chapter 6:  Graphics Fundamentals   89

                fg_drawrel(120,0);
                fg_drawrel(0,100);
                fg_drawrel(-120,0);
                fg_drawrel(0,-100);

                fg_setcolor(9);
                fg_move(160,80);
                fg_drawrel(30,20);
                fg_drawrel(-30,20);
                fg_drawrel(-30,-20);
                fg_drawrel(30,-20);
                fg_waitkey();

                fg_setcolor(10);
                fg_paint(160,70);
                fg_waitkey();

                fg_setcolor(15);
                fg_paint(160,100);
                fg_waitkey();

                fg_setmode(old_mode);
                fg_reset();
             }


Summary of Fundamental Graphics Routines

     This section summarizes the functional descriptions of the Fastgraph
routines presented in this chapter.  More detailed information about these
routines, including their arguments and return values, may be found in the
Fastgraph Reference Manual.

     FG_CIRCLE draws an unfilled circle in screen space.  The circle is
centered at the graphics cursor position.

     FG_CIRCLEW draws an unfilled circle in world space.  The circle is
centered at the graphics cursor position.

     FG_CLPRECT draws a solid (filled) rectangle in screen space, with
respect to the clipping region.

     FG_CLPRECTW draws a solid (filled) rectangle in world space, with
respect to the clipping region.

     FG_DASH draws a dashed line from the graphics cursor position to an
absolute screen space position.  It also makes the destination position the
new graphics cursor position.

     FG_DASHREL draws a dashed line from the graphics cursor position to a
screen space position relative to it.  It also makes the destination position
the new graphics cursor position.

     FG_DASHRW draws a dashed line from the graphics cursor position to a
world space position relative to it.  It also makes the destination position
the new graphics cursor position.
90   Fastgraph User's Guide

     FG_DASHW draws a dashed line from the graphics cursor position to an
absolute world space position.  It also makes the destination position the
new graphics cursor position.

     FG_DRAW draws a solid line from the graphics cursor position to an
absolute screen space position.  It also makes the destination position the
new graphics cursor position.

     FG_DRAWREL draws a solid line from the graphics cursor position to a
screen space position relative to it.  It also makes the destination position
the new graphics cursor position.

     FG_DRAWRW draws a solid line from the graphics cursor position to a
world space position relative to it.  It also makes the destination position
the new graphics cursor position.

     FG_DRAWW draws a solid line from the graphics cursor position to an
absolute world space position.  It also makes the destination position the
new graphics cursor position.

     FG_DRECT draws a dithered rectangle in screen space, without regard to
the clipping region.  The rectangle's dither pattern is defined through a
dithering matrix whose format is dependent on the video mode being used.

     FG_DRECTW draws a dithered rectangle in world space, without regard to
the clipping region.  The rectangle's dither pattern is defined through a
dithering matrix whose format is dependent on the video mode being used.

     FG_ELLIPSE draws an unfilled ellipse in screen space.  The ellipse is
centered at the graphics cursor position, and its size is determined by the
specified lengths of the semi-axes.

     FG_ELLIPSEW draws an unfilled ellipse in world space.  The ellipse is
centered at the graphics cursor position, and its size is determined by the
specified lengths of the semi-axes.

     FG_ERASE clears the screen in either text or graphics modes.

     FG_GETPIXEL returns the color value of a specified pixel.

     FG_GETXPOS returns the screen space x coordinate of the graphics cursor
position.

     FG_GETYPOS returns the screen space y coordinate of the graphics cursor
position.

     FG_MOVE establishes the graphics cursor position at an absolute screen
space point.

     FG_MOVEREL establishes the graphics cursor position at a screen space
point relative to the current position.

     FG_MOVERW establishes the graphics cursor position at a world space
point relative to the current position.

     FG_MOVEW establishes the graphics cursor position at an absolute world
space point.
                                        Chapter 6:  Graphics Fundamentals   91


     FG_PAINT fills an arbitrary closed region with the current color value.
The region is defined by specifying a screen space point within its interior.

     FG_PAINTW fills an arbitrary closed region with the current color value.
The region is defined by specifying a world space point within its interior.

     FG_POINT draws a point (that is, displays a pixel) in screen space.

     FG_POINTW draws a point in world space.

     FG_POLYGON draws an unfilled polygon in screen space, using two
coordinate arrays to define the polygon vertices.  The drawing of the polygon
begins at the graphics cursor position, through the vertices defined by the
coordinate arrays, and finally back to the original cursor position if
necessary.

     FG_POLYGONW draws an unfilled polygon in world space.  It is identical
to the fg_polygon routine, except the coordinate arrays contain world space
values.

     FG_RECT draws a solid (filled) rectangle in screen space or character
space, without regard to the clipping region.

     FG_RECTW draws a solid (filled) rectangle in world space, without regard
to the clipping region.

     FG_SETCLIP defines the clipping region in screen space.  The clipping
region is a rectangular area outside of which graphics are suppressed.

     FG_SETCLIPW defines the clipping region in world space.
92   Fastgraph User's Guide


Chapter 7

Character Display Routines
94   Fastgraph User's Guide


Overview

     An important part of any program is the capability to display text or
other characters on the screen.  Fastgraph supports two character sets:  the
hardware or BIOS character set available with each video mode, and
Fastgraph's own software character set for graphics video modes.
Fastgraph/Light does not support the software character set.

     We'll begin this chapter with a review of character space, and then
discuss the specifics about hardware and software characters.  At the end of
the chapter, we'll briefly explain how to implement bit-mapped characters
into a program.  To simplify things, the example programs presented in this
chapter are mode-specific examples, and no testing is done to check if the
video mode is available on the user's system.


Character Space

     The coordinate system used for displaying hardware characters is called
character space.  It is the only coordinate system available in text video
modes, but it is a supplementary coordinate system you can use with either
screen space or world space in graphics video modes.  Character space can be
thought of as a grid of rows and columns, with each cell in the grid holding
one character.  Each cell is identified by its unique (row,column) integer
coordinates.  The rows and columns are numbered starting at zero; the origin
is always the upper left corner of the screen.  For example, in the 80-column
by 25-row video modes, the (row,column) coordinates of the screen corners are
shown in the following diagram.


                            (0,0)           (0,79)



                            (24,0)         (24,79)


The number of rows and columns depends on the video mode, as shown in the
following table.  For graphics modes, the table also includes the width and
height in pixels of a character cell.
                                   Chapter 7:  Character Display Routines   95

                     Mode  No. of  No. of Char. Char.
                    Number Columns Rows   Width Height

                       0     40      25
                       1     40      25
                       2     80      25
                       3     80      25
                       4     40      25     8     8
                       5     40      25     8     8
                       6     80      25     8     8
                       7     80      25
                       9     40      25     8     8
                      11     80      25     9     14
                      12     40      25     8     8
                      13     40      25     8     8
                      14     80      25     8     8
                      15     80      25     8     14
                      16     80      25     8     14
                      17     80      30     8     16
                      18     80      30     8     16
                      19     40      25     8     8
                      20     40      25     8     8
                      21     40      50     8     8



Hardware Characters

     Hardware characters are available in all of Fastgraph's supported video
modes.  As explained in chapter 5, text mode characters have a display
attribute that defines their foreground color, their background color, and
whether or not they blink.  Graphics mode characters appear in a single
color, as determined by the current color index.  Chapter 5 also explained
how Fastgraph's fg_setattr and fg_setcolor routines define the attribute or
color index in which subsequent hardware characters appear.

     It is obviously important to define the color or attribute for hardware
characters, but it is equally important to define their location on the
screen.  Fastgraph draws hardware characters at the position defined by the
text cursor.  Like the graphics cursor, the text cursor is not a cursor in
the true sense, but is simply a pair of character space (row,column)
coordinates with a special meaning.  The fg_setmode routine sets the text
cursor position to the character space coordinates (0,0), which of course is
the upper left corner of the screen.1

     The Fastgraph routine fg_locate changes the text cursor position.  It
has two integer arguments that specify the (row,column) character space
coordinates of the new position.  The row values must be between 0 and 24,
except in the 30-row VGA graphics modes (modes 17 and 18) where they must be
between 0 and 29.  The column values must be between 0 and 39 for 40-column
video modes, or between 0 and 79 for 80-column modes.
____________________

1 In reality there are 16 text cursors, one for each video page.  The setmode
  routine initializes each text cursor position to (0,0).  The next chapter
  describes this in more detail.

96   Fastgraph User's Guide

     The fg_text routine is Fastgraph's fundamental character display
routine.  It displays a string of hardware characters, starting at the text
cursor position, using the current color attribute (for text modes) or color
index (for graphics modes).  If the string reaches the last column in a row,
fg_text will wrap the string to the first column of the next row.
Additionally, fg_text leaves the cursor one column to the right of the last
character displayed (or the first column of the next row if the last
character appears at the end of a row).  This feature makes it possible for
successive calls to fg_text to display adjacent strings.  The first argument
for the fg_text routine is a character string of arbitrary length, and the
second argument is an integer value that specifies the number of characters
to display from that string.

     Example 7-1 illustrates the use of the fg_locate and fg_text routines in
the 80 by 25 color text mode (mode 3).  After establishing the video mode and
making the BIOS cursor invisible, the program displays four strings with
different attributes.  The attributes are selected using the fg_setattr
routine, and the strings are displayed by the fg_text routine.  The first
string appears in yellow (attributes 14,0,0) in the upper left corner of the
screen; the fg_locate routine is not necessary because (0,0) is the default
text cursor position established by fg_setmode.  The second string appears in
light green (10,0,0) one space to the right of the first string.  Its
position relies on the fact fg_text sets the new text cursor position one
space to the right of the last character displayed (following the "w" of
"yellow" in this case).  The leading space in " green" leaves a space between
the first and second strings.  Similarly, the third string appears in
blinking light red (12,0,1) one space to the right of the second string.

     The program then uses the fg_locate routine to move the text cursor to
the lower left corner of the screen and displays the "Press any key" string.
This string is displayed with a light red foreground against a gray
background (12,7,0).  The extra spaces surrounding the string extend the
background color one character position to the left and right and make the
string more visually appealing.  Finally, once you press any key, the program
restores the original video mode and screen attributes before returning to
DOS.

                                 Example 7-1.

                      main()
                      {
                         int old_mode;

                         old_mode = fg_getmode();
                         fg_setmode(3);
                         fg_cursor(0);

                         fg_setattr(14,0,0);
                         fg_text("yellow",6);

                         fg_setattr(10,0,0);
                         fg_text(" green",6);

                         fg_setattr(12,0,1);
                         fg_text(" blinking",9);

                                   Chapter 7:  Character Display Routines   97

                         fg_setattr(12,7,0);
                         fg_locate(24,0);
                         fg_text(" Press any key. ",16);
                         fg_waitkey();

                         fg_setmode(old_mode);
                         fg_reset();
                      }


     The fg_where routine retrieves the text cursor position in its two
integer arguments.  This routine is not used as frequently as the fg_locate
and fg_text routines because more often than not your program will know the
text cursor position implicitly, or you'll know in advance the locations at
which text will be displayed.  The fg_where routine takes two integer
arguments passed as pointers (that is, by reference), and these two arguments
respectively receive the text cursor's current row and column position.

     Example 7-2 produces the same results as example 7-1, but it does so a
bit differently.  It uses its own routine, put_string, to display a string at
a specified row and column.  The put_string routine simply calls fg_locate to
establish the text cursor position and then calls fg_text to display the
string.  Note the use of the C library function strlen to determine the
string length passed to the fg_text routine.  Example 7-2 also uses the
fg_where routine to retrieve the new text cursor positions, which are then
passed to the put_string routine.

                                 Example 7-2.

                   main()
                   {
                      int old_mode;
                      int row, column;

                      old_mode = fg_getmode();
                      fg_setmode(3);
                      fg_cursor(0);

                      fg_setattr(14,0,0);
                      put_string("yellow",0,0);

                      fg_setattr(10,0,0);
                      fg_where(&row,&column);
                      put_string("green",row,column+1);

                      fg_setattr(12,0,1);
                      fg_where(&row,&column);
                      put_string("blinking",row,column+1);

                      fg_setattr(12,7,0);
                      put_string(" Press any key. ",24,0);
                      fg_waitkey();

                      fg_setmode(old_mode);
                      fg_reset();
                   }

98   Fastgraph User's Guide
                   put_string(string,row,column)
                   char *string;
                   int row, column;
                   {
                      fg_locate(row,column);
                      fg_text(string,strlen(string));
                      return(0);
                   }


     Sometimes you may wish to change the display attribute of existing text,
such as when creating a shadow around the edges of a pop-up window.  The
Fastgraph routine fg_chgattr performs this function.  It applies the current
text display attribute (as defined in the most recent call to fg_setattr or
fg_setcolor) to a given number of characters, starting at the text cursor
position.  It leaves the text cursor one column to the right of the last
character changed (or the first column of the next row if the last character
is at the end of a row).  The fg_chgattr routine's argument specifies the
number of characters to change.  This routine has no effect in graphics video
modes.

     The Fastgraph routine fg_chgtext performs somewhat the opposite function
of fg_chgattr.  It displays new text but uses the display attributes already
assigned to the character cells where the text will appear.  The fg_chgtext
routine takes the same two arguments as the fg_text routine, displays the
characters starting at the text cursor position, and leaves the cursor one
column to the right of the last character displayed.  Like fg_chgattr,
fg_chgtext has no effect in graphics video modes.

     Example 7-3 illustrates the fg_chgattr and fg_chgtext routines.  It runs
in the 80-column color text mode (mode 3), but if we change the fg_setmode
argument it would also run in the monochrome text mode (mode 7).  The program
first displays the word "hello" in the upper left corner of the screen, using
a gray foreground and black background attribute.  After waiting for a
keystroke, the program calls fg_chgattr to make the word "hello" appear in
reverse video (that is, a black foreground and gray background attribute).
After a second keystroke, the program uses fg_chgtext to change the "h" of
"hello" to upper case.  Following this, the program returns to DOS.

                                 Example 7-3.

                         main()
                         {
                            int old_mode;

                            old_mode = fg_getmode();
                            fg_setmode(3);
                            fg_cursor(0);

                            fg_setattr(7,0,0);
                            fg_text("hello",5);
                            fg_waitkey();

                            fg_locate(0,0);
                            fg_setattr(0,7,0);
                            fg_chgattr(5);
                            fg_waitkey();

                                   Chapter 7:  Character Display Routines   99

                            fg_locate(0,0);
                            fg_chgtext("H",1);
                            fg_waitkey();

                            fg_setmode(old_mode);
                            fg_reset();
                         }


     Displaying hardware characters in graphics video modes is quite
different than doing so in text modes, although we use the same Fastgraph
routines in both cases.  Example 7-4 is similar to example 7-1, but it runs
in the EGA enhanced graphics mode (mode 16) instead of a text mode.  In
graphics modes, the fg_cursor routine has no effect, so we have omitted it
from the program.  Furthermore, characters cannot be displayed with a
blinking attribute, so we have likewise omitted the blinking characters (we
could simulate blinking by repetitively displaying and erasing them, but that
is beyond the scope of this example).  Because graphics mode characters only
have a foreground color, we had to simulate the gray background of the "Press
any key" string by first drawing a rectangle where that string appears.  The
differences between examples 7-4 and 7-1 hold for any graphics video mode,
not just mode 16.

                                 Example 7-4.

                      main()
                      {
                         int old_mode;

                         old_mode = fg_getmode();
                         fg_setmode(16);

                         fg_setcolor(14);
                         fg_text("yellow",6);

                         fg_setcolor(10);
                         fg_text(" green",6);

                         fg_setcolor(7);
                         fg_rect(0,127,336,349);
                         fg_setcolor(12);
                         fg_locate(24,0);
                         fg_text(" Press any key. ",16);
                         fg_waitkey();

                         fg_setmode(old_mode);
                         fg_reset();
                      }


     Example 7-5 demonstrates a side effect that occurs when displaying
characters in graphics modes.  This example uses the MCGA graphics mode (mode
19) and displays two character strings at the same location.  If we were to
do this in a text mode, the first string would disappear once we displayed
the second string.  In graphics modes, however, the portions of the first
string not covered by characters from the second string are still visible.
The reason for this may not be apparent at first, but remember when we
100   Fastgraph User's Guide

display characters in graphics modes, we aren't really displaying characters
but merely a pixel representation of the characters.  Fastgraph has no way to
distinguish such pixels from any other pixels.

                                 Example 7-5.

                         main()
                         {
                            int old_mode;

                            old_mode = fg_getmode();
                            fg_setmode(19);

                            fg_setcolor(14);
                            fg_text("yellow",6);
                            fg_locate(0,0);
                            fg_setcolor(10);
                            fg_text(" green",6);
                            fg_waitkey();

                            fg_setmode(old_mode);
                            fg_reset();
                         }


     To avoid this problem, the recommended procedure for displaying
characters in graphics modes is to first erase the area where the text will
appear.  The easiest way to do this is to use the fg_rect routine to draw a
rectangle in the background color.  In example 7-5, we could do this by
inserting the statements

                              fg_setcolor(0);
                              fg_rect(0,47,0,7);

immediately before the call to fg_locate.  The parameters passed to the
fg_rect routine represent the 48 by 8 pixel region that corresponds to the
first six character cells of row 0 in the 320 by 200 graphics modes.


Conversion Routines

     We have already mentioned Fastgraph includes routines for converting
coordinates between character space and screen space (see page 41).  In this
section, we will review these routines and then present an example that uses
some of them.

     The fg_xalpha and fg_yalpha routines convert screen space coordinates to
character space.  The fg_xalpha routine converts a screen space x coordinate
to the character space column that contains the coordinate.  Similarly, the
fg_yalpha routine converts a screen space y coordinate to the character space
row that contains the coordinate.

     The fg_xconvert and fg_yconvert routines convert character space
coordinates to screen space.  The fg_xconvert routine converts a character
space column to the screen space coordinate of its leftmost pixel.

                                  Chapter 7:  Character Display Routines   101

Similarly, the fg_yconvert routine converts a character space row to the
screen space coordinate of its top (lowest-numbered) pixel.

     On page 99, example 7-4 demonstrated how to display characters in a
graphics mode.  Because characters do not have a background color in graphics
modes, example 7-4 used the fg_rect routine to simulate a background color by
drawing a gray rectangle before displaying the text.  It was necessary to
determine the screen coordinates of the character cells so we could pass the
correct parameters to fg_rect.  By using the fg_xconvert and fg_yconvert
routines, we can let Fastgraph calculate the required screen coordinates.
This method has the additional benefit of working in any graphics mode,
whereas the coordinates passed to fg_rect in example 7-4 would only work
properly in a 640 by 350 graphics mode.  Example 7-6 shows how we could
extend example 7-4 to use the fg_xconvert and fg_yconvert routines.

                                 Example 7-6.

                      main()
                      {
                         int old_mode;
                         int minx, maxx, miny, maxy;

                         fg_old_mode = fg_getmode();
                         fg_setmode(16);

                         fg_setcolor(14);
                         fg_text("yellow",6);

                         fg_setcolor(10);
                         fg_text(" green",6);

                         fg_setcolor(7);
                         minx = fg_xconvert(0);
                         maxx = fg_xconvert(16) - 1;
                         miny = fg_yconvert(24);
                         maxy = fg_yconvert(25) - 1;
                         fg_rect(minx,maxx,miny,maxy);
                         fg_setcolor(12);
                         fg_locate(24,0);
                         fg_text(" Press any key. ",16);
                         fg_waitkey();

                         fg_setmode(old_mode);
                         fg_reset();
                      }



Software Characters

     Software characters, also called stroke characters or vector characters
in other literature, are only are available in graphics video modes.  Unlike
the fixed-size hardware characters, you can display software characters in
any size, at any angle, and at any position.  In addition, software
characters are proportionally spaced.  However, software characters take
considerably longer to draw than do hardware characters.
102   Fastgraph User's Guide

     Fastgraph includes two software character fonts, called the primary font
and the alternate font.  The primary font contains upper and lower case
letters, numbers, punctuation, and most of the other printable ASCII
characters.  The alternate font contains upper and lower case Greek letters
and other mathematical and scientific symbols.

     The Fastgraph routine fg_swchar displays a string of software characters
in the current color index (as defined by the most recent call to
fg_setcolor).  The string may contain any characters from the primary font,
the alternate font, or both.  You can display the characters left justified,
centered, or right justified relative to the graphics cursor position.  Just
as the fg_text routine updates the text cursor position, fg_swchar sets the
graphics cursor position just to the right of the last character drawn.  The
characters are clipped according to the current clipping region.  In addition
to the characters, the string passed to fg_swchar may also contain operators
for switching fonts, underlining, subscripting, or superscripting characters.
Because fg_swchar internally uses world space coordinates, you must call the
fg_initw routine at some point in your program before the first call to
fg_swchar.  You must also establish a world space coordinate system with the
fg_setworld routine.

     The fg_swchar routine has three arguments.  The first argument is the
character string to display.  The second argument is an integer value that
specifies the number of characters in the string, including any characters
used as special operators.  The third argument is an integer value that
determines the position of the string relative to the graphics cursor
position.  If this value is negative, the lower left corner of the first
character will be at the graphics cursor position.  If it is positive, the
lower right corner of the last character will be at the graphics cursor
position.  If it is zero, the string will be horizontally centered at the
graphics cursor position.

     The size of software characters is determined by the values passed to
the fg_setsize, fg_setsizew, and fg_setratio routines.  The fg_setsize
routine has a single integer argument that defines the height of software
characters in screen space units, while the fg_setsizew routine has a single
floating point argument that defines the height in world space units.  If
neither of these routines is called, Fastgraph will use its default character
height of one world space unit.  The fg_setratio routine has a single
floating point argument that defines the aspect ratio for software
characters.  The aspect ratio is the ratio of character width to character
height.  For example, an aspect ratio of 2.0 means characters are twice as
wide as they are high.  If the fg_setratio routine is not called, Fastgraph
uses its default aspect ratio of 1.

     Example 7-7 displays both of the software character fonts.  The program
uses the enhanced EGA graphics mode (mode 16), but it could run in any
graphics mode by changing the fg_setmode argument.  After establishing the
video mode, the program calls the fg_initw routine to initialize Fastgraph's
world space parameters; this is required since the software character drawing
routines internally use world space coordinates.  The next statement is a
call to fg_setworld that establishes a world space coordinate system with
0.01 world space units per pixel.  Following this is a call to fg_setsizew
that defines the character height as 0.21 world space units, or 21 pixels.
Note we could have instead used the fg_setsize routine here with an integer
argument of 21.
                                  Chapter 7:  Character Display Routines   103

     The next part of the program draws the characters in the primary font on
the upper half of the screen.  After doing this, the program draws the
alternate font characters on the lower half.  In each case it does this with
the fg_swchar routine.  By default, the string passed to fg_swchar will
produce characters from the primary font.  However, you can insert a back
slash character (\) in the string to toggle between the two fonts.  Don't
forget the C language applies a special meaning to the back slash character
within strings, so you must use two consecutive back slashes to insert a
single back slash in the string.

                                 Example 7-7.

            main()
            {
               int old_mode;

               old_mode = fg_getmode();
               fg_setmode(16);
               fg_initw();
               fg_setworld(0.0,6.39,0.0,3.49);
               fg_setsizew(0.21);

               fg_setcolor(15);
               fg_locate(0,26);
               fg_text("Software characters - font 1",28);

               fg_setcolor(10);
               fg_movew(0.0,3.1);
               fg_swchar("ABCDEFGHIJKLMNOPQRSTUVWXYZ",26,-1);
               fg_movew(0.0,2.8);
               fg_swchar("abcdefghijklmnopqrstuvwxyz",26,-1);
               fg_movew(0.0,2.5);
               fg_swchar("0123456789",10,-1);
               fg_movew(0.0,2.2);
               fg_swchar("!\"#$%&'()*+,-./:;<=>?[]^`{|}~",29,-1);

               fg_setcolor(15);
               fg_locate(12,26);
               fg_text("Software characters - font 2",28);

               fg_setcolor(10);
               fg_movew(0.0,1.4);
               fg_swchar("\\ABCDEFGHIJKLMNOPRSTUWXYZ",25,-1);
               fg_movew(0.0,1.1);
               fg_swchar("\\abcdefghijklmnoprstuwxyz",25,-1);
               fg_movew(0.0,0.4);
               fg_swchar("\\012345678#$%&()*+/<=>?[]{}",27,-1);

               fg_waitkey();

               fg_setmode(old_mode);
               fg_reset();
            }


     Example 7-7 displays all characters in each font.  If you compare the
primary font strings with the alternate font strings, you'll see the
104   Fastgraph User's Guide

alternate font contains fewer characters.  For example, the letters Q and V
(either upper or lower case) have no corresponding character in the alternate
font.  You might have also noticed the primary font does not support the full
printable ASCII character set.  Any character in a string passed to the
fg_swchar routine that does not have a corresponding character in the current
font will display a blank character.

     In addition to the font selection operator (the back slash character),
fg_swchar recognizes three other operators.  The superscript operator is a
back slash followed by a caret (\^).  It causes the next character to appear
as a superscript.  Similarly, the subscript operator is a back slash followed
by a lower case v (\v); it causes the next character to appear as a
subscript.  The size of superscripted and subscripted characters is one half
the height of the other characters.  The underline operator is the underscore
character (_).  It causes all subsequent characters in the string to be
underlined until another underscore character is found, or until the end of
the string.  When using these operators, be sure to include them as part of
the string length count passed to fg_swchar.

     Example 7-8 illustrates the use of the font selection, superscript,
subscript, and underline operators with the fg_swchar routine.  Again,
because the back slash character has a special meaning to the C programming
language, we must use two consecutive back slashes to represent a single back
slash within the string.  The program displays four strings:

                              cos²o + sin²o = 1
                                     H2O
                                     U232
                           One word is underlined.

The theta symbol (o) in the first string is produced by displaying the
character "h" in the alternate font.  Note another font selection operator
(\) appears immediately after the "h" to revert to the primary font.  The
first string also includes superscript operators (\^) to display the
exponents in the equation.  The second string includes a single subscripted
character, while the third string shows how to display three consecutive
subscripted characters.  Finally, the fourth string illustrates how to
underline characters.

     Note example 7-8 also uses the fg_setratio routine.  The first three
strings are drawn with an aspect ratio of 2, making them twice as wide as
they are high.  The fourth string is drawn with an aspect ratio of 1
(Fastgraph's default aspect ratio for software characters), so the character
height is the same as the character width.  Also, the strings are centered
instead of left justified as in the previous example.

                                 Example 7-8.

            main()
            {
               int old_mode;

               old_mode = fg_getmode();
               fg_setmode(16);
               fg_setcolor(10);
               fg_initw();

                                  Chapter 7:  Character Display Routines   105

               fg_setworld(0.0,6.39,0.0,3.49);
               fg_setratio(2.0);
               fg_setsizew(0.21);

               fg_movew(3.2,3.0);
               fg_swchar("cos\\^2\\h\\ + sin\\^2\\h\\ = 1",25,0);

               fg_movew(3.2,2.0);
               fg_swchar("H\\v2O   U\\v2\\v3\\v2",18,0);

               fg_movew(3.2,1.0);
               fg_setratio(1.0);
               fg_swchar("One _word_ is underlined.",25,0);

               fg_waitkey();

               fg_setmode(old_mode);
               fg_reset();
            }

     The fg_setangle routine defines the angle or orientation at which
software characters are displayed.  Its only argument is a floating point
value that specifies the angle, measured in degrees counterclockwise from the
positive x axis.  If a program draws software characters before calling
fg_setangle, Fastgraph will use its default angle of zero degrees (that is,
the characters will be oriented horizontally).

     In most programs, the alternate font is not needed.  However, if you use
the fg_swchar routine, Fastgraph will include the definitions of these
characters in your program's data segment.  To prevent wasting this space,
Fastgraph includes the fg_swtext routine.  The fg_swtext routine is identical
in all respects to the fg_swchar routine, except it does not include the
alternate font.  Since the font selection operator does not apply when using
fg_swtext, the routine simply ignores it.  You should only use fg_swtext if
do not use fg_swchar.  If you use both routines, your program will still work
correctly, but its data segment will contain a duplicate copy of the primary
font definitions.

     Example 7-9 demonstrates the use of the fg_setangle and fg_swtext
routines.  The program draws a series of strings of the form "nnn degrees",
where nnn is a multiple of 15, radiating from the screen center.  Each string
appears at the specified angle.  For example, the string "15 degrees" is
drawn at an angle of 15 degrees.

                                 Example 7-9.

               main()
               {
                  char string[24];
                  int angle;
                  int old_mode;

                  old_mode = fg_getmode();
                  fg_setmode(16);
                  fg_setcolor(10);
                  fg_initw();

106   Fastgraph User's Guide

                  fg_setworld(0.0,6.39,0.0,3.49);
                  fg_setsizew(0.21);

                  for (angle = 0; angle < 360; angle += 15) {
                     fg_movew(3.2,1.75);
                     fg_setangle((double)angle);
                     sprintf(string,"     %3d degrees",angle);
                     fg_swtext(string,16,-1);
                     }

                  fg_waitkey();

                  fg_setmode(old_mode);
                  fg_reset();
               }

     The final routine pertaining to software characters is fg_swlength,
which returns the length of a specified string of software characters in
world space units.  The length is returned as the routine's floating point
function value.  The fg_swlength routine has two arguments -- a string of
software characters, and an integer value specifying the number of characters
in the string.  As with fg_swchar and fg_swtext, the count includes any of
the special operator characters.

     Example 7-10 demonstrates a typical use of the fg_swlength routine.  The
program displays the string "hello there." in light green against a gray
background in the middle of the screen.  As in our previous software
character examples, the program uses mode 16 and first performs the necessary
initializations to use software characters.  Following this, the program uses
the fg_swlength routine to compute the length in world space units of the
string.  Note we have added blank characters to each end of the string passed
to fg_swlength; this increases the length of the actual string and will
effectively give the gray rectangle an extended border on its left and right
sides.  The string length returned by fg_swlength is multiplied by 0.5,
giving the distance from the middle of the screen to either side of the
rectangle.  The program then uses this value to compute the minimum and
maximum x coordinates passed to fg_rectw.  After drawing the gray rectangle,
the program uses fg_swtext to draw the string of software characters in the
middle of the screen.  It then waits for a keystroke before restoring the
original video mode and screen attributes and returning to DOS.

                                Example 7-10.

              main()
              {
                 int old_mode;
                 double half;
                 double fg_swlength();

                 old_mode = fg_getmode();
                 fg_setmode(16);
                 fg_initw();
                 fg_setworld(0.0,6.39,0.0,3.49);
                 fg_setsizew(0.21);

                 fg_setcolor(7);

                                  Chapter 7:  Character Display Routines   107

                 half = fg_swlength(" Hello there. ",14) * 0.5;
                 fg_rectw(3.2-half,3.2+half,1.6,1.9);

                 fg_setcolor(10);
                 fg_movew(3.2,1.65);
                 fg_swtext("Hello there.",12,0);

                 fg_waitkey();

                 fg_setmode(old_mode);
                 fg_reset();
              }


Bit-Mapped Characters

     Bit-mapped characters combine the properties of hardware and software
characters.  They are a fixed size, as hardware characters are, but they can
be positioned anywhere instead of just in character cells.  Because they are
not scalable, they do not require floating point arithmetic, and therefore
they are much faster to display than software characters.

     Fastgraph makes no special provision for bit-mapped characters because
it treats them as if they were any other bit-mapped image.  For example, to
use a five-pixel by five-pixel bit-mapped font, you can construct characters
as shown below and then store these representations in an image array.

                          *       * * * *       * * * *
                        *   *     *       *   *
                      * * * * *   * * * *     *
                      *       *   *       *   *
                      *       *   * * * *       * * * *

The image display routines fg_drawmap and fg_drwimage, discussed in chapter
9, could then be used to display specific characters from the image array.


Summary of Character Display Routines

     This section summarizes the functional descriptions of the Fastgraph
routines presented in this chapter.  More detailed information about these
routines, including their arguments and return values, may be found in the
Fastgraph Reference Manual.

     FG_CHGATTR applies the current text display attribute to a given number
of characters, starting at the text cursor position.  This routine leaves the
text cursor one column to the right of the last character changed (or the
first column of the next row if the last character is at the end of a row).
It has no effect in graphics video modes.

     FG_CHGTEXT displays a string of hardware characters, starting at the
text cursor position, using the existing text display attributes.  This
routine leaves the text cursor one column to the right of the last character
displayed (or the first column of the next row if the last character is at
the end of a row).  It has no effect in graphics video modes.

108   Fastgraph User's Guide

     FG_LOCATE changes the text cursor position for the active video page.'

     FG_SETANGLE defines the angle or orientation at which software
characters are displayed.  The angle is measured in degrees counterclockwise
from the positive x axis.

     FG_SETATTR establishes the current text display attribute in text video
modes.  This routine has no effect in graphics video modes.

     FG_SETCOLOR establishes the current color index (which may be a virtual
color index in graphics modes).  In text modes, the fg_setcolor routine
provides an alternate method of establishing the current text display
attribute.

     FG_SETRATIO defines the aspect ratio for software characters.  The
aspect ratio is the ratio of character width to character height.

     FG_SETSIZE defines the height of software characters in screen space
units.

     FG_SETSIZEW defines the height of software characters in world space
units.

     FG_SWCHAR displays a string of software characters using the current
color index.  The string may be left justified, centered, or right justified
relative to the graphics cursor position.  The string passed to fg_swchar may
contain special operators that allow switching between fonts, underlining,
superscripting, or subscripting.  This routine has no effect in text video
modes.

     FG_SWLENGTH returns the length in world space units of a string of
software characters.

     FG_SWTEXT is a scaled down version of the fg_swchar routine.  It does
not include the alternate font character definitions and thus requires less
memory than fg_swchar.

     FG_TEXT displays a string of hardware characters, starting at the text
cursor position, using the current color attribute (for text modes) or color
index (for graphics modes).  This routine leaves the text cursor one column
to the right of the last character displayed (or the first column of the next
row if the last character is at the end of a row).

     FG_WHERE retrieves the row and column numbers of the text cursor
position.

     FG_XALPHA and FG_YALPHA convert screen space coordinates to character
space.

     FG_XCONVERT and FG_YCONVERT convert character space coordinates to
screen space.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2798

     Volume in drive A has no label
     Directory of A:\

    EXAMPLES C       67352   6-19-91   5:17p
    BB-01    ASM      2018   5-07-91   5:36p
    CC-01    ASM      4678   5-07-91   6:00p
    CORAL    PPR     14151   3-12-91   2:29p
    CORAL    SPR     18868   3-12-91   2:40p
    USER1    TXT    248451   7-04-91   3:18p
    GO       BAT        38   7-23-91   2:37a
    GO       TXT       848   8-03-91  12:23a
    FILE2798 TXT       858   8-03-91  12:27a
            9 file(s)     357262 bytes
                            2048 bytes free
