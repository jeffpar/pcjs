---
layout: page
title: "PC-SIG Diskette Library (Disk #1491)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1491/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1491"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TESSERACT"

    TESSERACT provides both the tools and the instructions for the
    programmer who desires to try his hand at TSR (terminate and stay
    resident) programming.
    
    TESSERACT comes with extensive and in-depth documentation that is
    insightful and gives the first-time TSR programmer a good knowledge
    base.  Included in this excellent package is a library of routines and
    data structures that will aid in developing RAM-resident programs and a
    set of routines that attempt to standardize TSR-to-TSR communication.
    The library is compatible with Microsoft C, Turbo C, Turbo Pascal, and
    assembler languages.
    
    Interrupts and BIOS bugs have made TSR programming an extremely
    difficult and dark area of programming -- TESSERACT makes the task far
    more manageable, both for the expert as well as the brave novice.  The
    manual alone is worth the price!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1491.TXT

{% raw %}
```
Disk No: 1491
Program Title: TESSERACT version 1.10
PC-SIG version: 1

TESSERACT provides both the tools and the instructions for the
programmer who desires to try his hand at TSR (terminate and stay
resident) programming.

TESSERACT comes with extensive and indepth documentation that is
insightful and gives the first time TSR programmer a good knowledge
base.  Included in this excellent package is a library of routines and
data structures that will aid in developing RAM-resident programs and a
set of routines that attempt to standardize TSR-to-TSR communication.
The library is compatible with Microsoft C, Turbo C, Turbo Pascal, and
Assembler languages.

Interrupts and BIOS bugs have made TSR programming an extremely
difficult and dark area of programming---TESSREACT makes the task far
more manageable, both for the expert as well as the brave novice.  The
manual alone is worth the price!

Synopsis: Discover how to create TSR (teminate and stay resident)
programs.

Usage:  Programming Utility/TSR/Memory Resident.

Special Requirements:  A hard disk.

How to Start:  Type GO (press enter).

Suggested Registration:  $25 for source code. ($10 for newsletter).

Author:  TesSeRact Development Team.

File Descriptions:

TESS-5   ARC  Turbo pascal 5.0 version.
TESS-P   ARC  Turbo Pascal 4.0 Version.
TESS-A   ARC  Assembler version.
TESS-C   ARC  Generic C version.
TESS-D   ARC  Documentation.
ORDER    FRM  Order form.
READ     ME   File explanations.
PKXARC   EXE  Unarhiving utility.

The PC-SIG Library
1030D E. Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 1491 TESSERACT  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Copy the programs on this disk into a sub-directory on your hard drive  ║
║ then unarchive the program.                                             ║
║                                                                         ║
║ If you wanted to unarchive the file called TESS-5.ARC, you would type   ║
║                       PKXARC TESS-5.ARC (press enter)                   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## TESSPARK.ASM

{% raw %}
```
        PAGE 60,132
        TITLE TESSPARK.ASM -- TesSeRact Demo program to park disk drive heads
;----------------------------------------------------------------------------
SUBTTL  TesSeRact Revision Level 1
;-----------------------------------------------------------------------------
;   TesSeRact(tm) -- A Library of Routines for Creating Ram-Resident (TSR)
;                    programs for the IBM PC and compatible Personal
;                    Computers.
;
;The software, documentation and source code are: 
; 
;       Copyright (C) 1986, 1987, 1988 Tesseract Development Team
;       All Rights Reserved 
; 
;       c/o Chip Rabinowitz
;       Innovative Data Concepts
;       2084 Woodlawn Avenue
;       Glenside, PA 19038
;       1-215-884-3373
;
;-----------------------------------------------------------------------------
;   This product supports the TesSeRact Standard for Ram-Resident Program 
;   Communication.  For information about TesSeRact, contact the TesSeRact 
;   Development Team at:
;       Compuserve:    70731,20
;       MCIMAIL:       315-5415
;   This MCIMAIL Account has been provided to the TesSeRact Development
;   Team by Borland International, Inc.  The TesSeRact Development Team
;   is in no way associated with Borland International, Inc.
;-----------------------------------------------------------------------------
;
; BASED on code originally provided by Jim Mischel
;
; ORIGINAL COPYRIGHT NOTICE:
;
;;;; AUTOPARK.ASM - program to automatically park the disk drive heads
;;;; at specified time intervals.
;;;;
;;;; Copyright (c) 1988, Jim Mischel
;;;;
;;;;
;;;; This program has been assembled using MASM 5.0.  Changes may be required for
;;;; use with earlier versions.
;;;;
;;;; To build:
;;;;    MASM AUTOPARK ;
;;;;    LINK AUTOPARK ;
;;;;    EXE2BIN AUTOPARK AUTOPARK.COM

;
; To assemble this TesSeRact version:
;
;       MASM TESSPARK;
;       LINK TESS_ASM+TESS_BP+TESSPARK+TESS_END,TESSPARK;
;       EXE2BIN TESSPARK.EXE TESSPARK.COM
;

.model small

.code

; wait_count is # of timer ticks to wait between the last disk access
; and parking the disk.  Each tick is approximately 1/18.2 seconds.
; 
; Maximum wait count is 65536 ticks (0), which is darn close to 1 hour.
;
wait_count      equ     1092            ;1 minute
;wait_count     equ     192             ;10 seconds (for testing)


speaker_beep    equ     1               ;sound TESSBEEP if set

tick_count      dw      ?

;
; This routine attempts to park the disk.
; Returns with carry set if park was unsuccessful.
;
; I'm not real clear on all the details here.  I disassembled this from a
; park program I've been using.  It will park the heads on all hard disks.
; It's using some undocumented (or not very well documented) features of the
; AT BIOS.  From looking at the code, I'd say it doesn't work on XT's, but
; when run, it seems to work fine.
;
parkit  proc    near
        mov     si,0080h
pk0:    mov     ah,08h
        mov     dx,si                   ;DX is drive ID
        int     13h                     ;get drive parameters
        add     dl,30h
        xor     dh,dh                   ;This is going to tell
        add     dx,4fh                  ;us whether we've got an AT
        mov     di,dx                   ;save drive count
        cmp     di,0080h
        jb      pkdone                  ;< 0080 means it's an XT
        inc     ch                      ;CH is tracks + 1
        jnb     pk1
        add     cl,40h                  ;CL is sectors
pk1:    mov     ax,0c01h                ;seek to cylinder
        mov     dx,si                   ;DX is drive ID
        int     13h                     ;this does the seek
        inc     si                      ;bump drive count
        cmp     si,di
        jbe     pk0                     ;loop until all drives are parked
pkdone:
if speaker_beep
EXTRN TESSBEEP:NEAR

        call    TESSBEEP
endif
        ret
parkit  endp

;
; TesSeRact Entry Points
;
;
PUBLIC  TSRUSERPROC, TSRTIMERPROC, TSRBACKCHECK, TSRMAIN, TSRBACKPROC
PUBLIC  TSRCLEANUP

;
; These are NULL procedures.  We don't service them in this program
;
;
TSRUSERPROC:
TSRMAIN:
        ret

MyParms dw      0                       ;saved location of INT 13 flag 
                                        ;  from TesSeRact data area

do_park db      0                       ;flag set when we want to park

TSRBACKCHECK proc near
        assume cs:_TEXT, ds:_TEXT

        mov     al,do_park              ;do we want to park the disk?
        xor     ah,ah                   ;if non-zero, yes!
        ret
TSRBACKCHECK endp

TSRBACKPROC proc near
        assume cs:_TEXT, ds:_TEXT

        call    near ptr parkit         ;attempt to park it
        mov     do_park,0
        mov     bx,[MyParms]
        mov     word ptr [tick_count],wait_count        ;restart wait
        mov     byte ptr [bx],0

        ret
TSRBACKPROC endp

TSRCLEANUP proc near
        assume cs:_TEXT, ds:_TEXT

        or      ax,ax
        jnz     clean_term

clean_init:
;
;  Please note that the data area returned by this function is also available
;    as the TESS_GLOBALS public symbol.
;
        mov     cx,ParkNum
        mov     bx,4h                   ;in data area
        mov     ax,5453h
        int     2fh

        add     bx,3h                   ;add in offset we want (Was13)

        mov     MyParms,bx              ;since we know segment is our's
                                        ;we don't need to worry about it!

clean_term:                             ;nothing needed to terminate!
clean_out:
        ret

TSRCLEANUP endp


TSRTIMERPROC proc near
        assume cs:_TEXT, ds:_TEXT

        mov     bx,[MyParms]
        cmp     byte ptr [bx],1
        jne     no_park
no_disk:
        mov     [do_park],0
        dec     word ptr [tick_count]
        jnz     no_park

        mov     [do_park],1
clear_it:
        mov     word ptr [tick_count],wait_count        ;restart wait
        mov     byte ptr [bx],0                         ;clear flag
no_park:
        ret

TSRTIMERPROC endp

;
; If AUTOPARK already installed, display error message and exit.
; If not installed, attempt to park the disks and install the resident
; portion.
;
EXTRN TSDOINIT:NEAR
EXTRN TSCHECKRESIDENT:near
EXTRN TSSETSTACK:near

ParkNum         dw 0                    ;our ID number
ParkName        db 'TESSPARK',0         ;our Identification string

public mystack
public topstack

mystack         db 512 dup(0)           ;stack to use

topstack        equ this byte

PUBLIC TESSINITSTART                    ;required entry point

TESSINITSTART:
        assume cs:_TEXT, ds:_TEXT

        mov     dx,offset signon
        mov     ah,09
        int     21h                     ;display the signon message

        mov     si,offset ParkName
        mov     di,offset ParkNum
        call    TSCHECKRESIDENT

        or      ax,ax
        jz      do_install

        mov     dx,offset already_installed     ;we must already be installed
        mov     ah,09
        int     21h                     ;display message
term_it:
        mov     ax,4c01h
        int     21h                     ;and exit with error code

do_install:
        mov     di,offset topstack
        dec     di
        dec     di
        mov     si,di
        call    TSSETSTACK

        call    near ptr parkit         ;attempt to park disk
        jmp     short inst1

inst1:
        mov     word ptr cs:[tick_count],wait_count     ;start wait
;
; display installed message and exit
;
        mov     dx,offset installed
        mov     ah,09
        int     21h

        mov     dx,offset TESSINITSTART
        mov     bx,1060h                ;no pop graphics, timer proc and
                                        ;    background procs only
        xor     ax,ax                   ;no hotkey!
        dec     ax                      ;no hotkey is -1

        call    TSDOINIT
        jmp     term_it                 ;we should never do this!

signon  db      13,10,'TESSPARK.COM Version 1.0, Copyright (c) '
        db      '1988, TesSeRact(tm) Development Team',13,10
        db      'All Rights Reserved',13,10,10
        db      'Based on Original Code provided by Jim Mischel:',13,10
        db      '   AUTOPARK 1.0  Copyright (c) 1988, Jim Mischel',13,10,'$'
installed       label   byte
        db      'TESSPARK installed',13,10,'$'
already_installed       label   byte
        db      'TESSPARK already installed',7,13,10,'$'

_TEXT ends

        END
```
{% endraw %}

## VER110.DOC

{% raw %}
```








                               TesSeRact(TM)


        A Library of Routines for Developing Ram-Resident Programs
                                     
                                    and
                                     
        A Proposed Standard for Ram-Resident Program Communication
                                     
                                     
                   Documentation Update for Version 1.10
                              October 2, 1988
                                     
                                     
              Copyright (c) 1988, TesSeRact Development Team
                            All Rights Reserved
     
     
             _______
        ____|__     |               (TM)
     --|       |    |-------------------
       |   ____|__  |  Association of
       |  |       |_|  Shareware
       |__|   o   |    Professionals
     -----|   |   |---------------------
          |___|___|    MEMBER
     
     


                             Table of Contents


     Chapter 1.  Introduction........................................2
          Order Form.................................................3
     Chapter 2.  New TesSeRact Library Routine.......................4
          TsRestore2F................................................4
     Chapter 3.  New TesSeRact Multiplex Functions...................5
          TSR Utility Routines.......................................5
               Trigger PopUp (Function 22h)..........................5
               Trigger Background (Function 23h).....................6
     Chapter 4.  Changes to TesSeRact................................7













                                    -1-





                         Chapter 1.  Introduction

This file  contains necessary  update information  for Version  1.10 of the
TesSeRact Library.   Two  new Interrupt  2Fh Multiplex  Functions have been
added, and one additional TesSeRact Library routine has also been added.

In addition,  this document  also contains  a listing  of all bugs/problems
repaired since Version 1.00 of the library.

Finally, please note our new address:
  
  TesSeRact Development Team
  1657 The Fairways
  Suite 101
  Jenkintown, PA 19046
  
  Phone: 215-884-3373
  CIS: 70731,20
  MCI: 315-5415
  FAX: 215-886-4225
  
  



































                                    -2-





                                        



            TesSeRact(TM) Products Order And Registration Form


     Registration Number:     ____________________________
     
     Name:          ______________________________________
     
     Address:       ______________________________________
     
                    ______________________________________
     
     City:          ______________________________________
     
     State:         __________________________ Zip: ______
     
     Telephone:     ______________________________________
     
     Item                                      Quantity      Total
     --------------------------------------------------------------
     Registered User Upgrade ($10)_______________________|_________
        (to Version 1.10)
     Upgrade for Registrations after 9/15/88_____________|____0.00_
     TesSeRact Registration ($25 each)___________________|_________
     TesSeRact Source Code License ($25 each)____________|_________
     TesSeRact Trial Disk ($10)__________________________|_________
     Monthly Information NewsLetter______________________|_________
        ($10 per year)
     Product Identification String (Free!!)______________|____0.00_
     Your ID String: ______________ Product Name: ______________
     
     Shipping Charges:     Upgrade Order        Normal Registration
                          U.S.  :  $ 0.00         U.S.  :  $ 0.00
                          Canada:  $ 5.00         Canada:  $10.00
                          Europe:  $10.00         Europe:  $15.00
     Overnight:  $15.00 + Normal Shipping Charge (from above)
     Total Shipping Charges______________________________|_________
     --------------------------------------------------------------
     Total Due:                                          |_________
     
     Preferred Disk Size:  3.5" ____  5.25" ____
     
     Where did you hear about TesSeRact? __________________________
     Primary Language/Compiler: ___________________________________
     
     Mail Completed Form to:
                    TesSeRact Development Team
                    1657 The Fairways
                    Suite 101
                    Jenkintown, PA 19046




                                    -3-





                 Chapter 2.  New TesSeRact Library Routine

TsRestore2F -- Restore Interrupt 2Fh to original state

  This  function   should  be   called  by   any  program   that   calls
     TsCheckResident() and DOES NOT REMAIN RESIDENT.  Call this function
     BEFORE EXITING THE PROGRAM to ensure that the Interrupt 2Fh handler
     is set to its original default value of 00 00, if necessary.  It is
     not  necessary   to  call   this  routine  if  your  program  calls
     TsDoInit(), or  if your program does not call the TsCheckResident()
     library routine.

  Parameters:
     None.

  Returns:
     None.

  C Language Usage:
  
  extern void far TsRestore2F(void);

  Pascal Usage:
  
  procedure TsRestore2F;

  Assembler Usage:
  
  EXTRN    TSRESTORE2F:NEAR
  
     call  TSRESTORE2F
  ;
  ; NOTE:  AX, BX and ES registers destroyed
  ;























                                    -4-





               Chapter 3.  New TesSeRact Multiplex Functions


                           TSR Utility Routines



Trigger PopUp (Function 22h)

  This function  hass been added to permit an application to 'trigger' a
     POPUP procedure.   When this call is completed, the TSR will pop up
     at the  earliest opportunity,  just as  if the  TsrStatus flags had
     been manipulated  directly.   TsrMain() will  be called  (if it  is
     save) as  soon as possible, or a TsrBeep() procedure will be called
     to signal the TSR is unable to popup.

  Parameters:
     TsrIdNum.................Identification Number of TSR to call

  Returns:
     Non-Zero -- Unable to pass pointer -- invalid ID Number
     Zero -- Success

  C Language Usage:
  
  extern unsigned far pascal TsTriggerPop(
     unsigned short TsrIdNum
     );

  Pascal Usage:
  
  function TsTriggerPop(
     TsrIdNum : word
     ) : word;

  Assembler Usage:
  
     mov   ax,5453h
     mov   bx,22h
     mov   cx,TsrIdNum
     int   2fh
  ;
  ;  result returned in AX
  ;













                                    -5-





Trigger Background (Function 23h)

  This function  allows  a  program  to  directly  call  the  background
     procedures if it is safe for the background procedure to be called.
     PLEASE USE  CAUTION WHEN  CALLING THIS  FUNCTION!!  It will allow a
     background procedure  to be  called when  INDOS is  set to  1.  The
     purpose  of   this  function   is  to  allow  network  programs  to
     independently signal an idle status.

  Parameters:
     TsrIdNum.................Identification Number of TSR to call

  Returns:
     Non-Zero -- Unable to pass pointer -- invalid ID Number
     FFFFh -- Not safe to call Background procedure
     Zero -- Success

  C Language Usage:
  
  extern unsigned far pascal TsTriggerBack(
     unsigned short TsrIdNum
     );

  Pascal Usage:
  
  function TsTriggerBack(
     TsrIdNum : word
     ) : word;

  Assembler Usage:
  
     mov   ax,5453h
     mov   bx,23h
     mov   cx,TsrIdNum
     int   2fh
  ;
  ;  result returned in AX
  ;



















                                    -6-





                     Chapter 4.  Changes to TesSeRact

Critical Error Flag pointer now works correctly under OS/2 1.0.

Add check for DOS 4.0.

TsSetAdrTP4 now returns with the correct RET instruction.

TempParms data area reduced to correct size.

INT 21h 'gate' array must fall on EVEN boundary in Turbo Pascal versions.

Check to make sure stacks are set on EVEN boundaries.

Modified TESSDEMO to work better with MSC.

Added Turbo Pascal 5.0 source/unit.

Move EXTRN  for user  procedures outside  simplified CODE statement so they
can be called in large-model programs.

Change code for INT 16h, Fn 0 to get around XTREE bug that checks the FLAGS
register.

Force DOS to use AUXSTACK on INT 21h, Fn 0-12 if popped up from DOS command
line.  'C' programmers can now use getch().

Added TsTriggerPop and TsTriggerBack.

Added internal function _TESSBACKGROUND to check if safe to call background
procedure.

Added TsRestore2F() function; call this internally before releasing TSR!!

Fixed problem with popping up over INT 8






















                                    -7-
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1491

     Volume in drive A has no label
     Directory of A:\

    TESS-5   ARC     37433  10-02-88  12:00p
    TESS-A   ARC     22196  10-02-88  12:00p
    TESS-C   ARC     45664  10-02-88  12:00p
    TESS-D   ARC     73076  10-02-88  12:00p
    TESS-P   ARC     37213  10-02-88  12:00p
    ORDER    FRM      2233  10-02-88  12:00p
    READ     ME        786  10-02-88  12:00p
    PKXARC   COM     12242   3-01-87   1:25a
    FILE1491 TXT      1663   7-31-89  10:11a
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       694   7-31-89  10:20a
           11 file(s)     233238 bytes
                           83968 bytes free
