---
layout: page
title: "PC-SIG Diskette Library (Disk #512)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0512/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0512"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROGRAMS FROM THE COMPLETE TURBO PASCAL"

    This disk contains the example programs, subprograms, and data files
    from Jeff Duntemann's book, The Complete Turbo Pascal, ISBN: 0-673-
    18111-1.  The disk is meant to augment Duntemann's book by illustrating
    Pascal programming. Source and compiled versions of most
    routines are included, so you can run the routines, and review
    the code to see how they work.
    
    System Requirements:  64K, one disk drive and monochrome display, Turbo
    Pascal.
    
    How to Start:  Enter TYPE READ.ME and press <ENTER> for a note from the
    author.  For instructions on PAS listings, refer to your Pascal manual.
    
    File Descriptions:
    
    ???      ASM  Assembly language programs
    ???      SCR  PASCAL source funtion procedures
    ???      PAS  PASCAL source code for programs
    ISMONO   COM  Part of CRTTEST.BAT
    CRTTEST  BAT  Tests monitor for mono, graphics, and color
    CTP2E    ARC  Archived backup of all programs
    BOXSTUFF SRC  Turbo Pascal source function/procedure
    BEEP     SRC  Turbo Pascal source function/procedure
    CURSON   SRC  Turbo Pascal source function/procedure
    CURSOFF  SRC  Turbo Pascal source function/procedure
    CASE     PAS  Turbo Pascal source program
    BOXTEST  PAS  Turbo Pascal source program
    FRCECASE SRC  Turbo Pascal source function/procedure
    FLIPFLD  SRC  Turbo Pascal source function/procedure
    FATPAD   PAS  Turbo Pascal source program
    FACTRIAL SRC  Turbo Pascal source function/procedure
    SNAPSHOT PIC  Support routine or data file for example program
    VARDUMP  SRC  Turbo Pascal source function/procedure
    SORTTEST PAS  Turbo Pascal source program
    YES      SRC  Turbo Pascal source function/procedure
    WRITEHEX SRC  Turbo Pascal source function/procedure
    WRITEAT  SRC  Turbo Pascal source function/procedure
    WHICH    PAS  Turbo Pascal source program
    SHOWNAME PAS  Turbo Pascal source program
    GETSTRIN SRC  Turbo Pascal source function/procedure
    FRIENDS  NAP  Support routine or data file for example program
    FRIENDS  KEY  Support routine or data file for example program
    MAKE     BAT  Batch file for SCRNBLT.ASM program
    KSEARCH  SRC  Turbo Pascal source function/procedure
    ITERM    PAS  Turbo Pascal source program
    HEXDUMP  PAS  Turbo Pascal source program
    SHELSORT SRC  Turbo Pascal source function/procedure
    SCRNBLT  COM  Compiled, executable Turbo Pascal program
    SCRNBLT  ASM  Assembler source code program
    SCREEN   PAS  Turbo Pascal source program
    RVRSNAME SRC  Turbo Pascal source function/procedure
    QUIKSORT SRC  Turbo Pascal source function/procedure
    ROLLEM   PAS  Turbo Pascal source program
    RANDOMS  KEY  Support routine or data file for example program
    PULL     SRC  Turbo Pascal source function/procedure
    POWER    SRC  Turbo Pascal source function/procedure
    PARSTAIL SRC  Turbo Pascal source function/procedure
    MONOTEST SRC  Turbo Pascal source function/procedure
    OVLTEST  PAS  Turbo Pascal source program
    OVLTEST  001  Overlay file for example program
    OVLTEST  000  Overlay file for example program
    MOUSE    SRC  Turbo Pascal source function/procedure
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## PLOT.ASM

{% raw %}
```
;====================================================================
;
;    P L O T  -  Assembly language point plot for Turbo Pascal
;
;====================================================================
;
;    by Jeff Duntemann     6-Feb-86
;
; PLOT is a high-speed replacement for Turbo Pascal's rather slow
; point-plotting routine of the same name.  This PLOT takes the same
; parameters as Turbo's own PLOT but CAN ONLY BE USED IN HIGH
; RESOLUTION GRAPHICS MODE.  It won't crash you in medium res but it
; won't plot colors correctly either.
;
; This .ASM file is intended to be assembled with Microsoft's MASM,
; and was developed under MASM V4.0.  Nothing fancy is going on here
; so presumably it will assemble correctly using earlier versions of
; MASM.  Once assembled, link it, EXE2BIN it, and then include it
; into your Turbo Pascal programs by calling it as External:
;
;    PROCEDURE Plot(X,Y,Color : Integer); External('PLOT.COM');
;
; In COMPLETE TURBO PASCAL, there are also instructions for turning
; the PLOT.COM file into an INLINE statement so that you no longer
; need to have PLOT.COM on your source code disk as a separate file.
;
; This is by no means the fastest possible point plot routine for
; the IBM PC.  Certainly you patient clock-cycle pinchers could
; squeeze a little more performance out of it.  Do try, and let me
; know how well you do!
;
; FROM:    COMPLETE TURBO PASCAL by Jeff Duntemann
;          Scott, Foresman & Co.  1986   ISBN 0-673-18600-1
;
;

BUFBASE   EQU     0B800H               ; BASE OF VIDEO RAM

CODE      SEGMENT PUBLIC
          ASSUME  CS:CODE
          PUBLIC  PLOT
;
;
;  EQUATES FOR ARGUMENTS TO PLOT
;
COLOR     EQU     4[BP]                ; OFFSET OF COLOR PARM
Y         EQU     6[BP]                ; OFFSET OF Y COORDINATE
X         EQU     8[BP]                ; OFFSET OF X COORDINATE

PLOT      PROC    NEAR
          PUSH    BP
          MOV     BP,SP
          PUSH    DS

;
;  FIRST WE CALCULATE THE Y OFFSET INTO THE VIDEO BUFFER
;
BEGIN:    MOV     AX,Y                 ; PUT Y IN AX REGISTER
          MOV     AH,AL                ;  AND LOW BYTE IN AH TOO
          AND     AX,01FEH             ; MASK AX WITH $01FE
          MOV     CL,3                 ; MULTIPLY AX BY 8 VIA SHIFT
          SHL     AX,CL
          MOV     BX,AX                ; COPY NEW VALUE INTO BX
          AND     BH,7                 ; ZERO OUT HIGH 5 BITS OF BH
          MOV     CL,2                 ; BY NOW AX HAS BEEN MULTIPLIED
          SHL     AX,CL                ;   BY 32...
          ADD     BX,AX                ; ADD AX TO BX; BX NOW CONTAINS
                                       ;   Y VALUE MUTIPLIED BY 40

;
;  NOW WE CALCULATE THE X OFFSET INTO THE VIDEO BUFFER
;
          MOV     AX,X                 ; PUT X IN AX REGISTER
          MOV     CX,AX                ;   AND IN THE CX REGISTER
          SHR     AX,1                 ; WE CAN'T USE CL TO SHIFT HERE
          SHR     AX,1                 ;   SO WE SHIFT BY 1 THREE TIMES
          SHR     AX,1                 ;   TO DIVIDE AX BY 8
                                       ;   WHICH IS THE X OFFSET
          ADD     BX,AX                ; ADD X AND Y OFFSETS INTO BUFFER

;
;  HERE WE FETCH THE VIDEO BUFFER BYTE AND MODIFY THE DESIRED PIXEL
;
          AND     CX,7                 ; LOW 3 BITS OF CX CONTAIN BIT #
                                       ;   OF DESIRED PIXEL
          MOV     AL,080H              ; STORE SINGLE BIT INTO AL BIT 7
          SHR     AL,CL                ; SHIFT BIT DOWN BY PIXEL NUMBER
          MOV     DX,BUFBASE           ; SET DS TO SEGMENT OF VIDEO BUFFER
          MOV     DS,DX
          MOV     CL,[DS:BX]           ; BRING BYTE IN FROM BUFFER
          MOV     DX,COLOR             ; PUT COLOR PARM INTO DX
          CMP     DL,0                 ; IS COLOR=0?
          JE      PRESET

PSET:     OR      CL,AL                ; OR IN THE NEW PIXEL
          MOV     [DS:BX],CL           ; AND PUT IT BACK IN THE BUFFER
          JMP     BYE

PRESET:   XOR     AL,0FFH              ; INVERT THE PIXEL MASK
          AND     CL,AL                ; AND THE MASK AGAINST THE BYTE
          MOV     [DS:BX],CL           ; AND PUT IT BACK IN THE BUFFER
;
;  DONE...CLEAN UP THE STACK AND LEAVE
;
BYE:      POP     DS                   ; RESTORE DS
          MOV     SP,BP                ; CLEAN UP STACK AND LEAVE
          POP     BP                   ; RESTORE BP

          RET     6                    ; TRASH 6 BYTES FOR PARMS

PLOT      ENDP
CODE      ENDS
          END

```
{% endraw %}

## SCRNBLT.ASM

{% raw %}
```
;===========================================================================
;
;    S C R N B L T  -  Graphics Screen Block Transfer for Turbo Pascal
;
;===========================================================================
;
;     by Larry Stone      21-Jul-84
;
; SCRNBLT is written to be called from Turbo Pascal V2.0 using the
; EXTERNAL procedure convention.  It will copy the contents of the
; video graphics display buffer (either low or high resolution) to
; a designated memory location on a virtual "pad" of set dimensions.
;
; To use SCRNBLT, the following lines must be included in your Turbo
; Pascal program.  The type "padtype" demonstrates how a PAD data type
; may be declared. When the PAD type is declared, the dimensions of
; the array must be as shown here.  It should also be specified ABSOLUTE
; with the initial offset 0, so that all of a 64K segment is available
; to it.
;
;  PROCEDURE SCRNBLT( MOVDIR, PADX, PADY : INTEGER; VAR PAD : PADARRAY );
;    EXTERN 'SCRNBLT';
;
;  TYPE
;    padtype = ARRAY [0..159, 0..399] OF BYTE;
;  VAR
;    pad : padtype ABSOLUTE $BA00 : $0000;    (* sample declaration *)
;
;  SCRNBLT(0, x, y, pad);   (* sample call; saves screen on pad(x,y) *)
;
; The parameters PADX and PAXY are specified as absolute coordinates
; on the pad, exactly as screen coordinates would be specified.  The
; X-coordinates correspond to the bits on the pad, not the bytes.
;
; The first parameter, "MOVDIR", determines the direction of the transfer.
; If 0 is specified, the contents of the screen are transferred to the
; designated area of the pad; if a nonzero number is specified,
; the designated area of the pad is transferred to the screen buffer.
;
; SCRNBLT transfers the contents of the screen as a rectangular block,
; 80 bytes wide by 200 bytes high, to a rectangular area of the pad
; at the designated x,y coordinates.  The pad area is not organized
; exactly like the display buffer; odd and even lines are interleaved
; in a more straightforward fashion to allow the offset of an x,y location
; in the pad to be calculated as  (y * padwidth) + x.
;
; To use SCRNBLT with a Turbo Program:
;-------------------------------------
; 1. Assemble this file with MASM.  "A> MASM SCRNBLT;"
; 2. Link it into a .EXE file.      "A> LINK SCRNBLT;"
; 3. Use EXE2BIN to make a .COM file. "A> EXE2BIN SCRNBLT.EXE SCRNBLT.COM"
; 4. Declare as shown in your Turbo Pascal program.
; 5. Ignore any minor diagnostic messages that may be generated when
;    this file is assembled and linked.  EXE2BIN is supplied with the
;    supplemental programs for PC-DOS; see the DOS manual.
;

;
; EQUATES TO DEFINE GRAPHICS CONSTANTS
;
PADWD   EQU     160                     ; WIDTH OF VIRTUAL PAD, BYTES
SCRNWD  EQU     80                      ; WIDTH OF REAL SCREEN
SCRNWD2 EQU     40                      ; HALF OF SCREEN WIDTH
HALFSC  EQU     100                     ; LINES FOR HALF OF SCREEN
EVENSC  EQU     0B800H                  ; ADDRESS OF EVEN HALF OF SCREEN
ODDSC   EQU     02000H                  ; OFFSET OF ODD HALF OF SCREEN

CODE    SEGMENT PUBLIC
        ASSUME  CS:CODE
        PUBLIC  SCRNBLT
;
; EQUATES FOR ARGUMENTS TO SCRNBLT
;
PADOFS  EQU     4[BP]                   ; OFFSET OF PAD ORIGIN
PADSEG  EQU     6[BP]                   ; SEGMENT OF PAD
PADY    EQU     8[BP]                   ; Y-COORD IN PAD
PADX    EQU     10[BP]                  ; X-COORD IN PAD
MOVDIR  EQU     12[BP]                  ; MOVE DIRECTION (0 = TO SCREEN)

SCRNBLT PROC    NEAR
        PUSH    BP
        MOV     BP,SP                   ; CALLING CONVENTION
        PUSH    DS                      ; SAVE DS
;
; COMPUTE THE ADDRESS OF THE ORIGIN OF THE PAD AREA DESIGNATED BY
; PADX, PADY.  LOC = PAD_OFFSET + (PADY * PADWD) + (PADX / 8)
;
        MOV     AX,PADY                 ; PREPARE PADY * PADX
        MOV     BX,PADWD
        MUL     BX                      ; AX = PADY * PADX (DX TRASHED)
        MOV     BX,PADX                 ; ADD IN X COMPONENT:
        MOV     CL,3                    ; (PREPARE TO SHIFT BY 3)
        SHR     BX,CL                   ;  DIV BY 8 SO WE MOVE BY BYTE
        ADD     AX,BX                   ;  ADD IT IN.
        ADD     AX,PADOFS
        CMP     WORD PTR MOVDIR,0       ; IS MOVDIR 0?
        JE      BACKWRD                 ; IF SO, DO BACKWARDS MOVE.
;----------------------------------------------------
; MOVE "FORWARD" : FROM PAD TO REAL SCREEN
;----------------------------------------------------
;  MOVE THE EVEN LINES OF THE SCREEN. THE LOOP IS CONTROLLED BY
;  THE HALFSC VALUE IN DX; A REP MOVSW IS USED TO MOVE THE SCREEN
;  LINES A WORD AT A TIME (PROBABLY NO MORE EFFICIENT ON AN 8088..)
;
        CLD                             ; BE SURE DIR. FLAG IS 0
        MOV     BX,PADSEG               ; SOURCE IS PAD, SO SET DS TO
        MOV     DS,BX                   ;  PAD SEGMENT
        MOV     SI,AX                   ;  AND DI TO OFFSET IN PAD
        MOV     BX,EVENSC               ; DEST IS SCREEN, SET ES TO SCREEN
        MOV     ES,BX                   ;  SEGMENT.
        MOV     DI,0                    ;  AND INDEX OF 0
;
; LOOP TO COPY EVEN LINES
;
        MOV     CX,HALFSC               ; PREPARE LOOP COUNTER
EVEN:   MOV     DX,CX                   ; RECORD LOOP COUNTER
        MOV     CX,SCRNWD2              ; SET UP COUNTER
        REP     MOVSW                   ; DO THE MOVE
        ADD     SI,PADWD+PADWD-SCRNWD   ; MOVE SI TO NEXT SCREEN LINE
        MOV     CX,DX
        LOOP    EVEN
;
; NOW SET UP FOR ODD LINES AND COPY THOSE
;
        MOV     DI,ODDSC                ; SET DI TO ODD SCREEN OFFSET
        MOV     SI,AX
        ADD     SI,PADWD                ; SET SI TO FIRST ODD LINE
;
; COPY ODD LINES
;
        MOV     CX,HALFSC               ; LOAD COUNTER
ODD:    MOV     DX,CX                   ; SAVE COUNTER
        MOV     CX,SCRNWD2              ; SET UP LINE COUNTER
        REP     MOVSW
        ADD     SI,PADWD+PADWD-SCRNWD   ; MOVE SI TO NEXT SCREEN LINE
        MOV     CX,DX                   ; GET LOOP COUNTER
        LOOP    ODD
        JMP     BYE                     ; LEAVE
;----------------------------------------------------
; MOVE "BACKWARD" : FROM REAL SCREEN TO PAD
;----------------------------------------------------
;  THIS IS ALMOST EXACTLY LIKE THE CODE ABOVE THAT MOVES
;  FROM THE VIRTUAL SCREEN TO THE DISPLAY BUFFER
;
BACKWRD:
        CLD                             ; BE SURE DIR. FLAG IS 0
        MOV     BX,PADSEG               ; DEST IS PAD, SO SET ES TO
        MOV     ES,BX                   ;  PAD SEGMENT
        MOV     DI,AX                   ; SET UP SOURCE INDEX
        MOV     BX,EVENSC               ; SET DS TO SCREEN SEGMENT
        MOV     DS,BX                   ;  FOR EVEN LINES OF SCREEN
        MOV     SI,0                    ;  AND SOURCE INDEX
;
; LOOP TO COPY EVEN LINES
;
        MOV     CX,HALFSC               ; PREPARE LOOP COUNTER
BEVEN:  MOV     DX,CX                   ; RECORD LOOP COUNTER
        MOV     CX,SCRNWD2              ; SET UP COUNTER
        REP     MOVSW                   ; DO THE MOVE
        ADD     DI,PADWD+PADWD-SCRNWD   ; MOVE SI TO NEXT SCREEN LINE
        MOV     CX,DX
        LOOP    BEVEN
;
; NOW SET UP FOR ODD LINES AND COPY THOSE
;
        MOV     SI,ODDSC                ; SET DI TO ODD SCREEN OFFSET
        MOV     DI,AX
        ADD     DI,PADWD                ; SET SI TO FIRST ODD LINE
;
; COPY ODD LINES
;
        MOV     CX,HALFSC               ; LOAD COUNTER
BODD:   MOV     DX,CX                   ; SAVE COUNTER
        MOV     CX,SCRNWD2              ; SET UP LINE COUNTER
        REP     MOVSW
        ADD     DI,PADWD+PADWD-SCRNWD   ; MOVE SI TO NEXT SCREEN LINE
        MOV     CX,DX                   ; GET LOOP COUNTER
        LOOP    BODD
;
; DONE.. CLEAN UP THE STACK AND LEAVE
;
BYE:    POP     DS                      ; RESTORE DS
        MOV     SP,BP
        POP     BP                      ; CONVENTIONAL RETURN
        RET     10                      ; TRASH 10 BYTES FOR PARMS

SCRNBLT ENDP
CODE    ENDS
        END
```
{% endraw %}

## FILES512.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  512  PROGRAMS FROM "The Complete Turbo Pascal"              v1.1
---------------------------------------------------------------------------
This disk contains the example programs, subprograms, and data files from
Jeff Duntemann's book, The Complete Turbo Pascal, ISBN: 0-673-18111-1.
 
AVERAGE  PAS  Turbo Pascal source function/procedure
BEEP     SRC  Turbo Pascal source function/procedure
BINARY   PAS  Turbo Pascal source function/procedure
BOMBER   PAS  Turbo Pascal source function/procedure
BOXSTUFF SRC  Turbo Pascal source function/procedure
BOXTEST  PAS  Turbo Pascal source function/procedure
BUILDER  SRC  Turbo Pascal source function/procedure
CAPSLOCK SRC  Turbo Pascal source function/procedure
CASE     PAS  Turbo Pascal source function/procedure
CLEARBIT SRC  Turbo Pascal source function/procedure
CLREGION SRC  Turbo Pascal source function/procedure
CMPFOR87 SRC  Turbo Pascal source function/procedure
CRTTEST  BAT  Batch file to test your kind of monitor
CTP2E    ARC  Archived back-up of all the files on this disk
CURSOFF  SRC  Turbo Pascal source function/procedure
CURSON   SRC  Turbo Pascal source function/procedure
EVALUATR PAS  Turbo Pascal source function/procedure
FACTRIAL SRC  Turbo Pascal source function/procedure
FATPAD   PAS  Turbo Pascal source function/procedure
FLIPFLD  SRC  Turbo Pascal source function/procedure
FRCECASE SRC  Turbo Pascal source function/procedure
FREEBYTE SRC  Turbo Pascal source function/procedure
FRIENDS  KEY  Support routine or data file for example program
FRIENDS  NAP  Support routine or data file for example program
GBOX     SRC  Turbo Pascal source function/procedure
GENERIC  PAS  Turbo Pascal source function/procedure
GETEXT   SRC  Turbo Pascal source function/procedure
GETSTRIN SRC  Turbo Pascal source function/procedure
GFILE    PAS  Turbo Pascal source function/procedure
GRAFREC  DEF  Support routine or data file for example program
HATCHER  PAS  Turbo Pascal source function/procedure
HEXDUMP  PAS  Turbo Pascal source function/procedure
ISMONO   COM  Compiled, executable Turbo Pascal program
ISMONO   PAS  Turbo Pascal source function/procedure
ITERM    PAS  Turbo Pascal source function/procedure
KEYSTAT  SRC  Turbo Pascal source function/procedure
KEYSTAT2 SRC  Turbo Pascal source function/procedure
KEYSTAT3 SRC  Turbo Pascal source function/procedure
KSEARCH  SRC  Turbo Pascal source function/procedure
LISTDISP SRC  Turbo Pascal source function/procedure
LISTMAN  PAS  Turbo Pascal source function/procedure
MAKE     BAT  Support batch file for example program
MONOTEST SRC  Turbo Pascal source function/procedure
MOUSE    SRC  Turbo Pascal source function/procedure
OVLTEST  001  Overlay file for example program
OVLTEST  000  Overlay file for example program
OVLTEST  PAS  Turbo Pascal source function/procedure
PATTERNS PAS  Turbo Pascal source function/procedure
PLOT     ASM  Assembler source code program
PLOTTEST PAS  Turbo Pascal source function/procedure
POWER    SRC  Turbo Pascal source function/procedure
PULL     SRC  Turbo Pascal source function/procedure
QUIKSORT SRC  Turbo Pascal source function/procedure
RANDOMS  KEY  Support routine or data file for example program
REALMAX  SRC  Turbo Pascal source function/procedure
REALMEM  SRC  Turbo Pascal source function/procedure
ROLLEM   PAS  Turbo Pascal source function/procedure
ROOTER1  PAS  Turbo Pascal source function/procedure
ROOTER2  PAS  Turbo Pascal source function/procedure
RVRSNAME SRC  Turbo Pascal source function/procedure
SCREEN   PAS  Turbo Pascal source function/procedure
SCRNBLT  ASM  Assembler source code program
SCRNBLT  COM  Compiled, executable Turbo Pascal program
SETBIT   SRC  Turbo Pascal source function/procedure
SETSTUFF SRC  Turbo Pascal source function/procedure
SHELSORT SRC  Turbo Pascal source function/procedure
SHOWDIR  PAS  Turbo Pascal source function/procedure
SHOWNAME PAS  Turbo Pascal source function/procedure
SNAPSHOT PIC  Support routine or data file for example program
SORTTEST PAS  Turbo Pascal source function/procedure
SPIRO    PAS  Turbo Pascal source function/procedure
TRAPPER  PAS  Turbo Pascal source function/procedure
UHUH     SRC  Turbo Pascal source function/procedure
VARDUMP  SRC  Turbo Pascal source function/procedure
WHICH    PAS  Turbo Pascal source function/procedure
WORDSTAT PAS  Turbo Pascal source function/procedure
WRITEAT  SRC  Turbo Pascal source function/procedure
WRITEHEX SRC  Turbo Pascal source function/procedure
WRITEHI  SRC  Turbo Pascal source function/procedure
YES      SRC  Turbo Pascal source function/procedure
 
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## NOTES512.TXT

{% raw %}
```
Program name:       Programs From "The Complete Turbo Pascal"
 
Author name:        Jeff Duntemann
Address:            805 Seaword Road
                    Towson, MD 21204
Telephone Number:   (301) 583-2302
 
Suggested Donation: Jeff recommends buying his book, ISBN: 0-673-18111-1 if
                    you like the programs on the disk.
 
Program Description:
 
The programs, subprograms and data files on the disk are from "The Complete
Turbo Pascal", a Turbo Pascal tutorial and reference.  Jeff's book will be
needed to fully utilize this disk.  Anyone who has Jeff's book can benefit
from this disk.

Most of the programs are useful without Jeff's book, particularly the 
subprograms.  Be forewarned, however, that the documentation on the disk is
sparse.  This disk is basically designed to augment Jeff's book.

System requirements aren't given in the documentation.  A review of the
source code indicates that any IBM PC (or compatible) configuration that
will run Turbo Pascal can be used.  Some of the programs, however, will not 
run as they require a color graphics card, graphics monitor and a mouse.  



```
{% endraw %}

## PLOT.ASM

{% raw %}
```
;====================================================================
;
;    P L O T  -  Assembly language point plot for Turbo Pascal
;
;====================================================================
;
;    by Jeff Duntemann     6-Feb-86
;
; PLOT is a high-speed replacement for Turbo Pascal's rather slow
; point-plotting routine of the same name.  This PLOT takes the same
; parameters as Turbo's own PLOT but CAN ONLY BE USED IN HIGH
; RESOLUTION GRAPHICS MODE.  It won't crash you in medium res but it
; won't plot colors correctly either.
;
; This .ASM file is intended to be assembled with Microsoft's MASM,
; and was developed under MASM V4.0.  Nothing fancy is going on here
; so presumably it will assemble correctly using earlier versions of
; MASM.  Once assembled, link it, EXE2BIN it, and then include it
; into your Turbo Pascal programs by calling it as External:
;
;    PROCEDURE Plot(X,Y,Color : Integer); External('PLOT.COM');
;
; In COMPLETE TURBO PASCAL, there are also instructions for turning
; the PLOT.COM file into an INLINE statement so that you no longer
; need to have PLOT.COM on your source code disk as a separate file.
;
; This is by no means the fastest possible point plot routine for
; the IBM PC.  Certainly you patient clock-cycle pinchers could
; squeeze a little more performance out of it.  Do try, and let me
; know how well you do!
;
; FROM:    COMPLETE TURBO PASCAL by Jeff Duntemann
;          Scott, Foresman & Co.  1986   ISBN 0-673-18600-1
;
;

BUFBASE   EQU     0B800H               ; BASE OF VIDEO RAM

CODE      SEGMENT PUBLIC
          ASSUME  CS:CODE
          PUBLIC  PLOT
;
;
;  EQUATES FOR ARGUMENTS TO PLOT
;
COLOR     EQU     4[BP]                ; OFFSET OF COLOR PARM
Y         EQU     6[BP]                ; OFFSET OF Y COORDINATE
X         EQU     8[BP]                ; OFFSET OF X COORDINATE

PLOT      PROC    NEAR
          PUSH    BP
          MOV     BP,SP
          PUSH    DS

;
;  FIRST WE CALCULATE THE Y OFFSET INTO THE VIDEO BUFFER
;
BEGIN:    MOV     AX,Y                 ; PUT Y IN AX REGISTER
          MOV     AH,AL                ;  AND LOW BYTE IN AH TOO
          AND     AX,01FEH             ; MASK AX WITH $01FE
          MOV     CL,3                 ; MULTIPLY AX BY 8 VIA SHIFT
          SHL     AX,CL
          MOV     BX,AX                ; COPY NEW VALUE INTO BX
          AND     BH,7                 ; ZERO OUT HIGH 5 BITS OF BH
          MOV     CL,2                 ; BY NOW AX HAS BEEN MULTIPLIED
          SHL     AX,CL                ;   BY 32...
          ADD     BX,AX                ; ADD AX TO BX; BX NOW CONTAINS
                                       ;   Y VALUE MUTIPLIED BY 40

;
;  NOW WE CALCULATE THE X OFFSET INTO THE VIDEO BUFFER
;
          MOV     AX,X                 ; PUT X IN AX REGISTER
          MOV     CX,AX                ;   AND IN THE CX REGISTER
          SHR     AX,1                 ; WE CAN'T USE CL TO SHIFT HERE
          SHR     AX,1                 ;   SO WE SHIFT BY 1 THREE TIMES
          SHR     AX,1                 ;   TO DIVIDE AX BY 8
                                       ;   WHICH IS THE X OFFSET
          ADD     BX,AX                ; ADD X AND Y OFFSETS INTO BUFFER

;
;  HERE WE FETCH THE VIDEO BUFFER BYTE AND MODIFY THE DESIRED PIXEL
;
          AND     CX,7                 ; LOW 3 BITS OF CX CONTAIN BIT #
                                       ;   OF DESIRED PIXEL
          MOV     AL,080H              ; STORE SINGLE BIT INTO AL BIT 7
          SHR     AL,CL                ; SHIFT BIT DOWN BY PIXEL NUMBER
          MOV     DX,BUFBASE           ; SET DS TO SEGMENT OF VIDEO BUFFER
          MOV     DS,DX
          MOV     CL,[DS:BX]           ; BRING BYTE IN FROM BUFFER
          MOV     DX,COLOR             ; PUT COLOR PARM INTO DX
          CMP     DL,0                 ; IS COLOR=0?
          JE      PRESET

PSET:     OR      CL,AL                ; OR IN THE NEW PIXEL
          MOV     [DS:BX],CL           ; AND PUT IT BACK IN THE BUFFER
          JMP     BYE

PRESET:   XOR     AL,0FFH              ; INVERT THE PIXEL MASK
          AND     CL,AL                ; AND THE MASK AGAINST THE BYTE
          MOV     [DS:BX],CL           ; AND PUT IT BACK IN THE BUFFER
;
;  DONE...CLEAN UP THE STACK AND LEAVE
;
BYE:      POP     DS                   ; RESTORE DS
          MOV     SP,BP                ; CLEAN UP STACK AND LEAVE
          POP     BP                   ; RESTORE BP

          RET     6                    ; TRASH 6 BYTES FOR PARMS

PLOT      ENDP
CODE      ENDS
          END

```
{% endraw %}

## SCRNBLT.ASM

{% raw %}
```
;===========================================================================
;
;    S C R N B L T  -  Graphics Screen Block Transfer for Turbo Pascal
;
;===========================================================================
;
;     by Larry Stone      21-Jul-84
;
; SCRNBLT is written to be called from Turbo Pascal V2.0 using the
; EXTERNAL procedure convention.  It will copy the contents of the
; video graphics display buffer (either low or high resolution) to
; a designated memory location on a virtual "pad" of set dimensions.
;
; To use SCRNBLT, the following lines must be included in your Turbo
; Pascal program.  The type "padtype" demonstrates how a PAD data type
; may be declared. When the PAD type is declared, the dimensions of
; the array must be as shown here.  It should also be specified ABSOLUTE
; with the initial offset 0, so that all of a 64K segment is available
; to it.
;
;  PROCEDURE SCRNBLT( MOVDIR, PADX, PADY : INTEGER; VAR PAD : PADARRAY );
;    EXTERN 'SCRNBLT';
;
;  TYPE
;    padtype = ARRAY [0..159, 0..399] OF BYTE;
;  VAR
;    pad : padtype ABSOLUTE $BA00 : $0000;    (* sample declaration *)
;
;  SCRNBLT(0, x, y, pad);   (* sample call; saves screen on pad(x,y) *)
;
; The parameters PADX and PAXY are specified as absolute coordinates
; on the pad, exactly as screen coordinates would be specified.  The
; X-coordinates correspond to the bits on the pad, not the bytes.
;
; The first parameter, "MOVDIR", determines the direction of the transfer.
; If 0 is specified, the contents of the screen are transferred to the
; designated area of the pad; if a nonzero number is specified,
; the designated area of the pad is transferred to the screen buffer.
;
; SCRNBLT transfers the contents of the screen as a rectangular block,
; 80 bytes wide by 200 bytes high, to a rectangular area of the pad
; at the designated x,y coordinates.  The pad area is not organized
; exactly like the display buffer; odd and even lines are interleaved
; in a more straightforward fashion to allow the offset of an x,y location
; in the pad to be calculated as  (y * padwidth) + x.
;
; To use SCRNBLT with a Turbo Program:
;-------------------------------------
; 1. Assemble this file with MASM.  "A> MASM SCRNBLT;"
; 2. Link it into a .EXE file.      "A> LINK SCRNBLT;"
; 3. Use EXE2BIN to make a .COM file. "A> EXE2BIN SCRNBLT.EXE SCRNBLT.COM"
; 4. Declare as shown in your Turbo Pascal program.
; 5. Ignore any minor diagnostic messages that may be generated when
;    this file is assembled and linked.  EXE2BIN is supplied with the
;    supplemental programs for PC-DOS; see the DOS manual.
;

;
; EQUATES TO DEFINE GRAPHICS CONSTANTS
;
PADWD   EQU     160                     ; WIDTH OF VIRTUAL PAD, BYTES
SCRNWD  EQU     80                      ; WIDTH OF REAL SCREEN
SCRNWD2 EQU     40                      ; HALF OF SCREEN WIDTH
HALFSC  EQU     100                     ; LINES FOR HALF OF SCREEN
EVENSC  EQU     0B800H                  ; ADDRESS OF EVEN HALF OF SCREEN
ODDSC   EQU     02000H                  ; OFFSET OF ODD HALF OF SCREEN

CODE    SEGMENT PUBLIC
        ASSUME  CS:CODE
        PUBLIC  SCRNBLT
;
; EQUATES FOR ARGUMENTS TO SCRNBLT
;
PADOFS  EQU     4[BP]                   ; OFFSET OF PAD ORIGIN
PADSEG  EQU     6[BP]                   ; SEGMENT OF PAD
PADY    EQU     8[BP]                   ; Y-COORD IN PAD
PADX    EQU     10[BP]                  ; X-COORD IN PAD
MOVDIR  EQU     12[BP]                  ; MOVE DIRECTION (0 = TO SCREEN)

SCRNBLT PROC    NEAR
        PUSH    BP
        MOV     BP,SP                   ; CALLING CONVENTION
        PUSH    DS                      ; SAVE DS
;
; COMPUTE THE ADDRESS OF THE ORIGIN OF THE PAD AREA DESIGNATED BY
; PADX, PADY.  LOC = PAD_OFFSET + (PADY * PADWD) + (PADX / 8)
;
        MOV     AX,PADY                 ; PREPARE PADY * PADX
        MOV     BX,PADWD
        MUL     BX                      ; AX = PADY * PADX (DX TRASHED)
        MOV     BX,PADX                 ; ADD IN X COMPONENT:
        MOV     CL,3                    ; (PREPARE TO SHIFT BY 3)
        SHR     BX,CL                   ;  DIV BY 8 SO WE MOVE BY BYTE
        ADD     AX,BX                   ;  ADD IT IN.
        ADD     AX,PADOFS
        CMP     WORD PTR MOVDIR,0       ; IS MOVDIR 0?
        JE      BACKWRD                 ; IF SO, DO BACKWARDS MOVE.
;----------------------------------------------------
; MOVE "FORWARD" : FROM PAD TO REAL SCREEN
;----------------------------------------------------
;  MOVE THE EVEN LINES OF THE SCREEN. THE LOOP IS CONTROLLED BY
;  THE HALFSC VALUE IN DX; A REP MOVSW IS USED TO MOVE THE SCREEN
;  LINES A WORD AT A TIME (PROBABLY NO MORE EFFICIENT ON AN 8088..)
;
        CLD                             ; BE SURE DIR. FLAG IS 0
        MOV     BX,PADSEG               ; SOURCE IS PAD, SO SET DS TO
        MOV     DS,BX                   ;  PAD SEGMENT
        MOV     SI,AX                   ;  AND DI TO OFFSET IN PAD
        MOV     BX,EVENSC               ; DEST IS SCREEN, SET ES TO SCREEN
        MOV     ES,BX                   ;  SEGMENT.
        MOV     DI,0                    ;  AND INDEX OF 0
;
; LOOP TO COPY EVEN LINES
;
        MOV     CX,HALFSC               ; PREPARE LOOP COUNTER
EVEN:   MOV     DX,CX                   ; RECORD LOOP COUNTER
        MOV     CX,SCRNWD2              ; SET UP COUNTER
        REP     MOVSW                   ; DO THE MOVE
        ADD     SI,PADWD+PADWD-SCRNWD   ; MOVE SI TO NEXT SCREEN LINE
        MOV     CX,DX
        LOOP    EVEN
;
; NOW SET UP FOR ODD LINES AND COPY THOSE
;
        MOV     DI,ODDSC                ; SET DI TO ODD SCREEN OFFSET
        MOV     SI,AX
        ADD     SI,PADWD                ; SET SI TO FIRST ODD LINE
;
; COPY ODD LINES
;
        MOV     CX,HALFSC               ; LOAD COUNTER
ODD:    MOV     DX,CX                   ; SAVE COUNTER
        MOV     CX,SCRNWD2              ; SET UP LINE COUNTER
        REP     MOVSW
        ADD     SI,PADWD+PADWD-SCRNWD   ; MOVE SI TO NEXT SCREEN LINE
        MOV     CX,DX                   ; GET LOOP COUNTER
        LOOP    ODD
        JMP     BYE                     ; LEAVE
;----------------------------------------------------
; MOVE "BACKWARD" : FROM REAL SCREEN TO PAD
;----------------------------------------------------
;  THIS IS ALMOST EXACTLY LIKE THE CODE ABOVE THAT MOVES
;  FROM THE VIRTUAL SCREEN TO THE DISPLAY BUFFER
;
BACKWRD:
        CLD                             ; BE SURE DIR. FLAG IS 0
        MOV     BX,PADSEG               ; DEST IS PAD, SO SET ES TO
        MOV     ES,BX                   ;  PAD SEGMENT
        MOV     DI,AX                   ; SET UP SOURCE INDEX
        MOV     BX,EVENSC               ; SET DS TO SCREEN SEGMENT
        MOV     DS,BX                   ;  FOR EVEN LINES OF SCREEN
        MOV     SI,0                    ;  AND SOURCE INDEX
;
; LOOP TO COPY EVEN LINES
;
        MOV     CX,HALFSC               ; PREPARE LOOP COUNTER
BEVEN:  MOV     DX,CX                   ; RECORD LOOP COUNTER
        MOV     CX,SCRNWD2              ; SET UP COUNTER
        REP     MOVSW                   ; DO THE MOVE
        ADD     DI,PADWD+PADWD-SCRNWD   ; MOVE SI TO NEXT SCREEN LINE
        MOV     CX,DX
        LOOP    BEVEN
;
; NOW SET UP FOR ODD LINES AND COPY THOSE
;
        MOV     SI,ODDSC                ; SET DI TO ODD SCREEN OFFSET
        MOV     DI,AX
        ADD     DI,PADWD                ; SET SI TO FIRST ODD LINE
;
; COPY ODD LINES
;
        MOV     CX,HALFSC               ; LOAD COUNTER
BODD:   MOV     DX,CX                   ; SAVE COUNTER
        MOV     CX,SCRNWD2              ; SET UP LINE COUNTER
        REP     MOVSW
        ADD     DI,PADWD+PADWD-SCRNWD   ; MOVE SI TO NEXT SCREEN LINE
        MOV     CX,DX                   ; GET LOOP COUNTER
        LOOP    BODD
;
; DONE.. CLEAN UP THE STACK AND LEAVE
;
BYE:    POP     DS                      ; RESTORE DS
        MOV     SP,BP
        POP     BP                      ; CONVENTIONAL RETURN
        RET     10                      ; TRASH 10 BYTES FOR PARMS

SCRNBLT ENDP
CODE    ENDS
        END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0512

     Volume in drive A has no label
     Directory of A:\

    AVERAGE  PAS      1589   5-10-86   1:21p
    BEEP     SRC       360   5-05-86   6:23p
    BINARY   PAS      1317   5-05-86   8:27p
    BOMBER   PAS      7107   5-06-86   6:33p
    BOXSTUFF SRC      1724   5-05-86   6:26p
    BOXTEST  PAS      3116   5-06-86   6:30p
    BUILDER  SRC      1472   5-10-86   2:56p
    CAPSLOCK SRC       339   5-11-86   8:56a
    CASE     PAS      3834   5-06-86   6:32p
    CLEARBIT SRC       375   5-10-86   3:04p
    CLREGION SRC       302   5-06-86   6:38p
    CMPFOR87 SRC       344   5-10-86   3:00p
    CRTTEST  BAT       166   2-17-86   2:22p
    CTP2E    ARC    121958   7-20-86   9:53a
    CURSOFF  SRC       520   5-06-86   6:34p
    CURSON   SRC       513   5-05-86   6:38p
    EVALUATR PAS      1299   5-10-86  12:38p
    FACTRIAL SRC       344   5-05-86   6:30p
    FATPAD   PAS     11762   5-05-86   6:18p
    FILES512 TXT      4835   1-29-87  11:06a
    FLIPFLD  SRC      1885   5-06-86   6:36p
    FRCECASE SRC       660   5-06-86   6:30p
    FREEBYTE SRC      1034   5-06-86   6:27p
    FRIENDS  KEY       264   3-03-85   2:06p
    FRIENDS  NAP       832   3-03-85   2:06p
    GBOX     SRC       531   5-06-86   6:28p
    GENERIC  PAS      1568   1-10-86   9:26p
    GETEXT   SRC       410   5-10-86  12:25p
    GETSTRIN SRC      4150   5-06-86   6:35p
    GFILE    PAS      2154   5-05-86   6:17p
    GRAFREC  DEF       311   2-01-86   3:10p
    HATCHER  PAS      1758   5-05-86   6:28p
    HEXDUMP  PAS      5218   5-06-86   6:31p
    ISMONO   COM     11530   2-17-86   2:02p
    ISMONO   PAS      1179   5-05-86   6:25p
    ITERM    PAS     11130   5-06-86   6:28p
    KEYSTAT  SRC       693   5-06-86   6:31p
    KEYSTAT2 SRC       687   5-05-86   6:23p
    KEYSTAT3 SRC       331   5-05-86   6:25p
    KSEARCH  SRC      1624   5-06-86   6:35p
    LISTDISP SRC       555   5-10-86   3:05p
    LISTMAN  PAS      9536   5-05-86   8:25p
    MAKE     BAT        95   8-19-84   5:25p
    MONOTEST SRC       500   5-06-86   6:32p
    MOUSE    SRC       511   5-06-86   6:34p
    NOTES512 TXT      1152   4-29-86   1:41p
    OVLTEST  000       512   2-17-86   5:46p
    OVLTEST  001       512   2-17-86   5:46p
    OVLTEST  PAS      2002   5-05-86   8:24p
    PATTERNS PAS      1757   5-05-86   6:19p
    PLOT     ASM      4674   5-05-86   6:22p
    PLOTTEST PAS      3908   6-19-86   7:49p
    POWER    SRC       284   5-05-86   6:29p
    PULL     SRC       426   5-06-86   6:37p
    QUIKSORT SRC      1336   5-06-86   6:37p
    RANDOMS  KEY      8250   5-05-86   8:23p
    REALMAX  SRC       388   5-10-86   3:01p
    REALMEM  SRC       387   5-10-86   3:06p
    ROLLEM   PAS      4306   5-05-86   6:22p
    ROOTER1  PAS       256   1-18-86   4:58p
    ROOTER2  PAS       512   1-18-86   4:58p
    RVRSNAME SRC       436   5-10-86   3:11p
    SCREEN   PAS      4858   5-05-86   6:27p
    SCRNBLT  ASM      8265   7-20-86   9:52a
    SCRNBLT  COM       162   7-20-86   9:53a
    SETBIT   SRC       365   5-10-86   3:03p
    SETSTUFF SRC      1061   5-05-86   6:24p
    SHELSORT SRC      1043   5-06-86   6:37p
    SHOWDIR  PAS      1096   5-10-86   1:20p
    SHOWNAME PAS      3292   5-06-86   6:33p
    SNAPSHOT PIC     16384   1-01-80   2:02a
    SORTTEST PAS      4899   5-05-86   8:23p
    SPIRO    PAS      4772   5-11-86   8:39a
    TRAPPER  PAS      2190   5-06-86   6:29p
    UHUH     SRC       345   5-05-86   6:30p
    VARDUMP  SRC      1528   5-05-86   6:30p
    WHICH    PAS      1121   5-05-86   8:26p
    WORDSTAT PAS      5716   5-06-86   6:29p
    WRITEAT  SRC       539   5-06-86   6:36p
    WRITEHEX SRC       422   5-06-86   6:35p
    WRITEHI  SRC       460   5-10-86   3:13p
    YES      SRC       307   5-06-86   6:28p
           82 file(s)     312345 bytes
                            1024 bytes free
