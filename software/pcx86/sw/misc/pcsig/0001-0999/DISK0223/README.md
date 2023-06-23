---
layout: page
title: "PC-SIG Diskette Library (Disk #223)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0223/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0223"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ASSEMBLY AND PASCAL"

    This disk contains a variety of Assembly language routines for screen
    clearing and cursor size alteration.  There is a small database
    management system written in Pascal which is linkable to LOCATE.ASM for
    cursor positioning, a text-file preview utility, a routine using
    ANSI.SYS to reset the keyboard, and others.  If you want to use these
    in your programs, or just see how others do their tricks, be sure to
    check out these.
    
    System Requirements: Two disk drives, an Assembler and a Pascal
    compiler.
    
    How to Start:  To run the files with the C and PAS extentions, refer to
    your Assembler and Pascal manuals. To read DOC files, just enter TYPE
    filename.DOC and press <ENTER>.
    
    File Descriptions:
    
    INFO     BAT  Batch file to list file information on screen
    FILE     PAS  Pascal Program to manage a small data base type program
    LOCATE   ASM  Procedure to set cursor position from Pascal
    RESPOND  DOC  Documentation for RESPOND
    RESPOND  ASM  Produces beep
    REPLY    EXE  Produces beep
    REPLY    COM  Produces beep
    REPLY    ASM  Source code for REPLY
    READCHAR OBJ  Object file
    READCHAR DOC  Documentation for READCHAR
    READCHAR ASM  Procedure to read a specified number of characters
    PREVIEW  PAS  Pascal source code for PREVIEW
    PREVIEW  EXE  A Pascal utility to preview a text file prior to printing
    MSBFILE  EXE  Executable image of file
    LOCATE   DOC  Documentation for LOCATE
    MORE     COM  Filter to one screen at a time
    MODULE   PAS  Module to be linked with FILE.PAS
    MODULE   OBJ  Object file
    LOCATE   OBJ  Object file
    RESPOND  OBJ  Object file
    SETANSI  ASM  Source code for SETANSI
    SETP     EXE  Program to setup Epson printer to skip perforations
    SETP     ASM  Source code for SETP
    SETANSI  EXE  Executable file version of SETANSI
    SETANSI  COM  A procedure to communicate with ANSI.SYS to reset keys
    SETP     OBJ  Object file
    BEEP     ASM  Program to make "beep" on speaker
    BEEP     DOC  Documentation for BEEP
    CANCEL   ASM  Source for CANCEL
    CLS      ASM  Program to clear screen
    CANCEL   EXE  Program to cancel the setting that SETP causes
    CLS      OBJ  Object file
    CLS      DOC  Documentation for CLS
    CONTRACT ASM  Procedure to restore the cursor to its system size
    CONTENTS DOC  Description of file on this disk
    EXPAND   DOC  Documentation for EXPAND
    EXPAND   ASM  Procedure to expand curser to solid blinking rectangle
    CONTRACT OBJ  Object file
    CONTRACT DOC  Documentation for CONTRACT
    EXPAND   OBJ  Object file
    PREVIEW  ASM  Assembly language version of PREVIEW.EXE
    PREVIEW  COM  Additional version of PREVIEW.EXE
    SETP     COM  Program to setup Epson printer to skip perforations
    ADDENDA  TXT  Notes on program improvements
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADDENDA.TXT

{% raw %}
```
                               Addenda Information:

Additions/Fixups:

Preview utility:  Now works before you get old.  Written in .ASM,
accurate page count, no wildcards permitted though, buffered, fast,
replace the old version.

SETP:  Release 2.  .COM format, faster loading, one line status line,
	   fixes minor irritation in old version.  Outputs status line on
	   print device when finished, as well as on display.

Rest of disk is same, recommend deletion of MSBEDIT from libr.  Source
code lost during hard disk failure, as well as the rest of the sources
for this stuff.  It was supposed to be a replacement for edlin, but it
was full of bugs, and slow, and L A R G E.  Worth reading for style and
data structures for educational purposes, not a very good program for
actual editing though.

Sorry guys, this one was too big for the time I have available to work
on it.

Steve.
```
{% endraw %}

## BEEP.ASM

{% raw %}
```
                TITLE SNDCLR : CALLER (SOUND.ASM)
                PAGE,132
                NAME MAIN_AEM
                ;
                ;HERE IS THE CODE FOR THE CALLING PROGRAM
                ;
                CSEG    SEGMENT PARA    PUBLIC  'CODE'
                BEEP  PROC    FAR
                        ASSUME  CS:CSEG
                ;FIXUP THE STACK TO RETURN TO DOS OR DEBUG
                ;
                begin:
		push    ds
		sub     ax,ax
		push    ax
		mov     ax,cseg         ;get the return program return segment
		mov     ds,ax
                        MOV     BX,25
                        MOV     DI,1000         ;the clock interval divisor
                        MOV     AL,0B6H         ;WRITE TIMER MODE REGISTER
                        OUT     43H,AL          ;LOAD THE PORT
                        MOV     DX,14H
                        MOV     AX,4F38H        ;1331000/FREQUENCY PULSE
                        DIV     DI
                        OUT     42H,AL          ;WRITE TIMER LOW BYTE
                        MOV     AL,AH
                        OUT     42H,AL
                        IN      AL,61H          ;GET CURRENT PORT B SETTING
                        MOV     AH,AL           ;AND MOVE IT TO AH
                        OR      AL,3            ;SWITCH SPEAKER ON
                        OUT     61H,AL
                WAIT:   MOV     CX,2801         ;WAIT 10 MILLISECONDS
                SPK_ON: LOOP    SPK_ON
                        DEC     BX              ;SPEAKER ON TIME EXPIRED?
                        JNZ     WAIT            ;IF NOT KEEP SPEAKER ON
                        MOV     AL,AH
                        OUT     61H,AL          ;PORT VALUE RECOVERED..CONTINUE
                        RET
	  beep	endp
                CSEG    ENDS
                        END     begin
```
{% endraw %}

## BEEP.DOC

{% raw %}
```
BEEP:
	Procedure to produce a 1000hz beep, for .1 seconds.  The standard
	BIOS error beep.  It requires no parms.
	Pascal declaration used:   Procedure beep; external;
```
{% endraw %}

## CANCEL.ASM

{% raw %}
```
NAME     CANCEL_MAIN
PAGE     75,132
TITLE    CANCEL.ASM -- PROCEDURE TO CANCEL PRN SETTINGS
;
; NO STACK SEGMENT
;
;
DISPLAY  MACRO     MESSAGE             ;DISPLAY A MESSAGE TO STD OUTPUT
         MOV       AH,09
         MOV       DX,OFFSET MESSAGE
         INT       21H                 ;DOS SERVICE FOR DISPLAY
         ENDM
;
WORKAREA SEGMENT PARA PUBLIC 'DATA'
MSG      DB        'SYSTEM:  Intervention required on LPT1$',10,13
INFO     DB        10,13,'LPT1:  Cancelled$',10,13
ROWCOL   DW        ?                   ;SAVE ROW AND COLUMN OF CURSOR
CMDLINE  DB        24,27,'2',27,'8',27,'<',27,'O',7,10
WORKAREA ENDS
;
;
CANCEL_CODE SEGMENT PARA PUBLIC 'CODE'
         PUBLIC    START
START    PROC      FAR
         ASSUME    CS:CANCEL_CODE,DS:WORKAREA
         PUSH      DS
         SUB       AX,AX
         PUSH      AX                  ;RETURN CODES ON STACK
         CLI                           ;DISABLE INTERRUPTS
         MOV       AX,WORKAREA         ;GET THE DATA SEGMENT
         MOV       DS,AX               ;AND MOVE IN INTO REGISTER
         STI
         CALL      B10TST              ;TEST PRN STATS
         CALL      C10PRT              ;PRINT THE COMMAND LINE
         RET
START    ENDP
;
B10TST   PROC      NEAR                ;LOCAL PROCS ARE NEAR BY
         MOV       AH,03               ;SET OLD CURSOR POSITION
         MOV       BH,00
         INT       10H                 ;READ CURSOR PSN
         MOV       ROWCOL,DX        ;SAVE IT
B20:
         MOV       AH,02
         MOV       DX,00               ;TEST PRINTER STATUS HERE
         INT       17H
         TEST      AH,00101001B        ;SEE IF READY OR NOT
         JZ        B30                 ;NO MESSAGE AND RESCAN
         CALL      E10MSG              ;NOTIFY OPERATOR TO FIX PRN
         JMP       B20
B30:
         RET       ;FINISHED, EXIT
B10TST   ENDP
;
C10PRT   PROC      NEAR
         LEA       SI,CMDLINE       ;GET ADDR OF COMMAND LINE
         MOV       CX,11               ;NUMBER OF BYTES IN COMMAND
         CALL      D10OUT              ;PRINT THE COMMAND TO PRINT CTRLR
         RET
C10PRT   ENDP
;
D10OUT   PROC      NEAR
         MOV       DX,0000
D20:
         MOV       AH,00
         MOV       AL,[SI]
         INT       17H
         INC       SI
         LOOP      D20
         DISPLAY   INFO
         RET
D10OUT   ENDP
;
E10MSG   PROC      NEAR
         MOV       AH,02               ;REQUEST DISPLAY SERVICE
         MOV       BH,00               ;SET CURSOR TO OLD PLACE
         MOV       DX,ROWCOL           ;MOVE SETTING INTO DX REG
         INT       10H                 ;BIOS FOR SERVICE
         LEA       DX,MSG              ;GET THE ADDR
         MOV       AH,09H              ;SELECT FUNCTION = DISPLAY ON MONITOR
         INT       21H
         RET
E10MSG   ENDP
;
CANCEL_CODE ENDS
         END       START
```
{% endraw %}

## CLS.ASM

{% raw %}
```
         PAGE,132
         TITLE CLS.ASM -- SYS$SCRATCH
         NAME  CLS_CODE
CLS_CODE SEGMENT 'CODE'
         PUBLIC CLS
CLS      PROC      FAR
         PUSH      BP             ;SAVE THE RETURN POINTER
         MOV       CX,0           ;UPPER LEFT COORD (0,0)
         MOV       DX,2479H       ;LOWER RIGHT COORD
         MOV       BH,7           ;NORMAL ATTRIBUTE
         MOV       AX,600H        ;ENTIRE DISPLAY
         INT       10H            ;CALL INTO BIOS
         POP       BP             ;RESTORE THE BASE POINTER
         RET       FAR            ;FAR RETURN, NO PARMS
CLS      ENDP
CLS_CODE ENDS
         END
```
{% endraw %}

## CLS.DOC

{% raw %}
```
CLS:   
	Requires no parms.  Clears screen, cursor left at bottom of display
	Declaration used:   Procedure cls; external;
```
{% endraw %}

## CONTENTS.DOC

{% raw %}
```
11-AUG-1984 -

The following files are the assembly source program fragments.
NOTE:  .OBJECT files are supplied for those without assemblers.


READCHAR ASM:  Procedure to read a specified number of chars and
               return them to a specified variable, it also takes
               the maximum numbers to read, this is useful for use
               during input screens, it prevents the user from going
               over the field width and ruining the remainder of the
               line for later fields.  Used in MSBFILE (FILE.PAS).

LOCATE   ASM:  Procedure to set cursor position from Pascal;
               Declare Procedure LOCATE (ROW,COL : integer);extern;

SETANSI  ASM:  From the DOS technical reference manual; A procedure
               to communicate with ANSI.SYS for resetting keys.
               This produces a nice .COM file, with an interesting
               and informative way of using the LABEL pseudo-op.

RESPOND  ASM:  A short beep (same as REPLY) for link with Pascal
               Programs, this procedure produces a nice response sound
               when the program performs some action.

EXPAND   ASM:  Procedure for use from Pascal to expand the cursor to a
               solid blinking rectangle filling the entire scan line
               block, nice for enlarging the cursor for screen input.
               Run PREVIEW to see an example.

CONTRACT ASM:  Procedure to restore the cursor to its system size.
               Declare both EXPAND and CONTRACT with:
               PROCEDURE EXPAND;EXTERN;   <NO PARMS>
               PROCEDURE CONTRACT;EXTERN;  <NO PARMS>

SETP     ASM:  Assembler program to set the IBM /  EPSON graphics
               for 11 inch paper, 66 Printed lines per page, and
               do not ignore skip perforation.  After 66 lines, the
               paper will eject to TOF and printing resumes.

CANCEL   ASM:  Assembler program to cancel the settings that SETP
               causes.  The printer will respond as if it were powered
               off and then reset.  Ignore paper perforation is
               enabled.  And no default line skips are set, page set
               at 11 inches.

FILE     PAS:  Pascal Program to manage a small data base type program
               listing Name, address, phone, date of birth and related
               information.  It uses full screen input, and a well
               written dynamically allocated linked list structure to
               manage the file.  The file is only actually modified
               when the F option (file) is used, or you answer Y to the
               A option (Abort) and the file is saved, or temporary
               modifications will not be recorded.

MODULE   PAS:  The module to be linked with FILE.PAS -- It contains
               supplementary code routines.

MSBFILE  EXE:  The executable image of FILE.  There is no limit to the
               number of files it can manage, however the NEW procedure
               may fail if your system does not have sufficient memory.
               Also, with very large files operation is noticably slow.
               Keep your data files reasonable.

PREVIEW  PAS:  A Pascal utility to Preview a text file prior to its
               printing.  It informs as to the number of chars, lines,
               pages, and words the file has in it.  It assumes that
               66 lines per page are used, change the global constant
               to alter this.   You MUST be patient when using this
               program on a very large text file because it must read
               each char in the file to keep the counts correct.  It
               accounts for page overflow on the page count.  Blanks
               are counted in the char count because they are printed.
               No error will occur if used on a .HEX, .COM, .EXE or
               .OBJ or similar file, but the counts will not be correct
               but these files should not be routed to the printer
               anyway.

PREVIEW  EXE:  The executable image of PREVIEW.PAS


For additional information - read the .DOC files named the same as the
source program for the assembler files, it documents how to use them.

Programs from:    Stephen Leoce
                  201 Delaware Avenue
                  Kingston, New York  12401


```
{% endraw %}

## CONTRACT.ASM

{% raw %}
```
;
PAGE,132
NAME CONTRACT_CODE
TITLE CONTRACT.ASM -- VOL ID = MSB-SCRATCH
;
;PROCEDURE TO SHRINK CURSOR TO NORMAL SIZE
;
CONTRACT_CODE SEGMENT PARA PUBLIC 'CODE'
              PUBLIC    CONTRACT
CONTRACT      PROC      FAR
              ASSUME    CS:CONTRACT_CODE
              PUSH      BP
              MOV       BP,SP
              MOV       AH,01
              MOV       CH,11        ;RESET CURSOR SIZE TO 11/12
              MOV       CL,12        ;END SCAN LINE AT 12
              INT       10H          ;BIOS FOR CURSOR MANAGE SERVICE
              POP       BP
              RET
CONTRACT      ENDP
CONTRACT_CODE ENDS
              END                    ;ASSEMBLY
```
{% endraw %}

## CONTRACT.DOC

{% raw %}
```
CONTRACT:
	Requires NO parms.  Callable from Pascal with:
	CONTRACT;  This procedure causes the cursor to
	be reset to the normal system cursor.
	The starting scan line is set to 11, and the 
	ending scan line is set to 12.
 
	Link with Pascal routine for contraction of cursor  (reset)
	Define:   PROCEDURE CONTRACT; EXTERN;
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #223, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  BEEP    .ASM         CRC = F4 96

--> FILE:  BEEP    .DOC         CRC = 6C BD

--> FILE:  CANCEL  .ASM         CRC = A9 9B

--> FILE:  CANCEL  .EXE         CRC = 06 CA

--> FILE:  CLS     .ASM         CRC = B3 40

--> FILE:  CLS     .DOC         CRC = 00 00

--> FILE:  CLS     .OBJ         CRC = 00 00

--> FILE:  CONTENTS.DOC         CRC = A7 3E

--> FILE:  CONTRACT.ASM         CRC = 20 44

--> FILE:  CONTRACT.DOC         CRC = 39 E2

--> FILE:  CONTRACT.OBJ         CRC = 00 00

--> FILE:  EXPAND  .ASM         CRC = 2C F5

--> FILE:  EXPAND  .DOC         CRC = 73 32

--> FILE:  EXPAND  .OBJ         CRC = 00 00

--> FILE:  FILE    .PAS         CRC = 44 2E

--> FILE:  INFO    .BAT         CRC = 29 82

--> FILE:  LOCATE  .ASM         CRC = 24 81

--> FILE:  LOCATE  .DOC         CRC = BE 47

--> FILE:  LOCATE  .OBJ         CRC = 00 00

--> FILE:  MODULE  .OBJ         CRC = ED A8

--> FILE:  MODULE  .PAS         CRC = C3 5F

--> FILE:  MORE    .COM         CRC = 83 C0

--> FILE:  MSBFILE .EXE         CRC = 00 BE

--> FILE:  PREVIEW .EXE         CRC = 54 0C

--> FILE:  PREVIEW .PAS         CRC = 4E 19

--> FILE:  READCHAR.ASM         CRC = 5E 3F

--> FILE:  READCHAR.DOC         CRC = 6C EF

--> FILE:  READCHAR.OBJ         CRC = 25 B1

--> FILE:  REPLY   .ASM         CRC = 6B C2

--> FILE:  REPLY   .COM         CRC = 00 00

--> FILE:  REPLY   .EXE         CRC = DC B8

--> FILE:  RESPOND .ASM         CRC = 42 7A

--> FILE:  RESPOND .DOC         CRC = DE 01

--> FILE:  RESPOND .OBJ         CRC = 18 A2

--> FILE:  SETANSI .ASM         CRC = 06 2F

--> FILE:  SETANSI .COM         CRC = 0A 61

--> FILE:  SETANSI .EXE         CRC = 6F 58

--> FILE:  SETP    .ASM         CRC = DC 37

--> FILE:  SETP    .EXE         CRC = 30 3B

--> FILE:  SETP    .OBJ         CRC = CD 7E

 ---------------------> SUM OF CRCS = 5A F3

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## EXPAND.ASM

{% raw %}
```
;
TITLE EXPAND.ASM  -  VOL ID = MSB-SCRATCH
NAME EXPAND_CODE
PAGE,132
;
EXPAND_CODE   SEGMENT   PARA PUBLIC 'CODE'
              PUBLIC    EXPAND
EXPAND        PROC      FAR          ;FAR PASCAL CALL
              ASSUME    CS:EXPAND_CODE
              PUSH      BP
              MOV       BP,SP        ;GET THE STACK
              MOV       AH,01        ;REQUEST SET CURSOR SIZE FUNCTION
              MOV       CH,00        ;START SCAN LINE
              MOV       CL,12        ;END SCAN LINE
              INT       10H          ;CALL BIOS SERVICE FOR CURSOR MANAGER
              POP       BP
              RET
EXPAND        ENDP
EXPAND_CODE   ENDS
              END                    ;ASSEMBLY
```
{% endraw %}

## EXPAND.DOC

{% raw %}
```
EXPAND:
	Requires NO parms.  Callable from Pascal with:
	EXPAND;    This procedure causes the cursor to 
	become a solid blinking rectangle.  
	The starting scan line is set to 00, and the 
	ending scan line is set to 12.
 
	Link with Pascal routine for expansion of cursor.
	Define:   PROCEDURE EXPAND; EXTERN;
```
{% endraw %}

## FILES223.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No 223   Assembly/Pascal Utilities                              v1.1
---------------------------------------------------------------------------
BEEP     ASM  Program to make "beep" on speaker
BEEP     DOC  Documentation for BEEP
CANCEL   ASM  Source for CANCEL
CANCEL   EXE  Program to cancel the setting that SETP causes
CLS      ASM  Program to clear screen
CLS      DOC  Documentation for CLS
CLS      OBJ  Object file
CONTENTS DOC  Description of file on this disk
CONTRACT ASM  Procedure to restore the cursor to its system size
CONTRACT DOC  Documentation for CONTRACT
CONTRACT OBJ  Object file
EXPAND   ASM  Procedure to expand curser to solid blinking rectangle
EXPAND   DOC  Documentation for EXPAND
EXPAND   OBJ  Object file
FILE     PAS  Pascal Program to manage a small data base type program
INFO     BAT  Batch file to list file information on screen
LOCATE   ASM  Procedure to set curser position from Pascal
LOCATE   DOC  Documentation for LOCATE
LOCATE   OBJ  Object file
MODULE   OBJ  Object file
MODULE   PAS  Module to be linked with FILE.PAS
MORE     COM  Filter to one screen at a time
MSBFILE  EXE  Executable image of file
PREVIEW  EXE  A Pascal utility to preview a text file prior to printing
PREVIEW  PAS  Pascal source code for PREVIEW
READCHAR ASM  Procedure to read a specified number of characters
READCHAR DOC  Documentation for READCHAR
READCHAR OBJ  Object file
REPLY    ASM  Source code for REPLY
REPLY    COM  Produces beep
REPLY    EXE  Produces beep
RESPOND  ASM  Produces beep
RESPOND  DOC  Documentation for RESPOND
RESPOND  OBJ  Object file
SETANSI  ASM  Source code for SETANSI
SETANSI  COM  A procedure to communicate with ANSI.SYS to reset keys
SETANSI  EXE  Executable file version of SETANSI
SETP     ASM  Source code for SETP
SETP     EXE  Program to setup Epson printer to skip perforations
SETP     OBJ  Object file
```
{% endraw %}

## LOCATE.ASM

{% raw %}
```
         PAGE,132
         TITLE LOCATE.ASM
         NAME LOCATE_CODE
LOCATE_CODE  SEGMENT 'CODE'
         PUBLIC    LOCATE
LOCATE   PROC      FAR
         PUSH      BP             ;SAVE THE BASE POINTER TO RETURN
         MOV       BP,SP          ;GET THE STACK ADDRESS
         MOV       BH,0           ;SCREEN # TO USE
         MOV       DH,[BP]+8      ;GET THE ROW
         MOV       DL,[BP]+6      ;GET THE COL
         MOV       AH,2           ;SELECT BIOS CALL
         INT       10H            ;CALL INTO BIOS
         POP       BP             ;RESTORE BASE POINTER
         RET       4              ;CLEAR THE STACK
LOCATE   ENDP
LOCATE_CODE ENDS
         END
```
{% endraw %}

## LOCATE.DOC

{% raw %}
```
LOCATE:
	Requires 2 parms.  Locates cursor at specified coordinate on display.
	Declaration used:  Procedure locate (row, column : integer); external;
	Nothing passed back to caller.
```
{% endraw %}

## PREVIEW.ASM

{% raw %}
```
TITLE PARSE.ASM - WORD COUNT PROCEDURE
NAME PARSE
PAGE 77,132
;
; RETURNS CHAR COUNT, WORD AND SENTENCE COUNT
; COUNT OF ASCII FILES COMPILED INTO READING LEVEL INDEX
;
CSECT    SEGMENT PARA PUBLIC 'CODE'
         ASSUME    CS:CSECT,DS:CSECT,SS:NOTHING,ES:NOTHING
         ORG       100H
ENTRY:   JMP       START
;
; SKIP SMALL DATA SEGMENT]
;
CHAR_COUNT DW      0
CHAR_CT_CARRY DW   0
LINE_COUNT    DW   0
LINE_CT_CARRY DW   0
DISPLAY_FLAG  DB   0
fsize 	     dw	0	;total bytes...
fsize_cy      dw	0	;carry?
started	db	0	;<> 0 when data read...
;
maxpage	equ	66	;lines per page for defaults
alpha_string  db   ' printable characters',13,10,'$'
file_size     db	' bytes in file',13,10,'$'
word_string   db   ' words',13,10,'$'
line_string   db   ' lines',13,10,'$'
page_string   db   ' pages @ 66 Ln/Pg',13,10,'$'
carry_64k     db   '65536+$'
;
source   db        13,10,'CP file unreachable,RC=255',13,10,'$'
eofmsg   db        'EOF reached.',13,10,'$'
nodata	db	'Warning: File is empty',13,10,'$'
ENDMSG   DB        13,10,'COMMAND COMPLETE',13,10,'$'
errmsg   db        13,10,'CP File read failure',13,10
         DB        'COMMAND PROCESSING ABEND,RC=2',13,10,'$'
begmsg   db        'Execution begins ...',13,10,'$'
;
;
; BEFORE THE FILE CAN BE PARSED, THE COMMAND LINE HAS TO BE
; PARSED.  THEN THE FILE WILL BE OPENED AND READ TO MAIN STORAGE
;
START:
         MOV       DI,80H              ;POINT TO PARMS
         MOV       BL,[DI]             ;THE NUMBER OF CHARS
         XOR       BH,BH               ;ZERO TOP HALF
         MOV       BYTE PTR DS:[BX+DI+1],0
NEXT_BYTE:
         INC       DI                  ;POINT TO NEXT BYTE
         CMP       BYTE PTR DS:[DI],32 ;A SPACE DELIMITER?
         JZ        NEXT_BYTE           ;YES - SKIP DELIMITERS
         MOV       DX,DI
         MOV       AX,3D00H            ;OPEN THE FILE...
         INT       21H                 ;VIA CP
         JC        EXIT                ;ERRORS DURING OPEN
         PUSH      AX                  ;SAVE FILE HANDLE
         MOV       DX,OFFSET BEGMSG
         CALL      DISPLAY_TEXT        ;WRITE THE START MSG...
         POP       AX                  ;RECOVER...
         PUSH      AX                  ;IF OK, RECOVER THE FILEHANDLE
READ:    POP       BX                  ;INTO THE RIGHT REGISTER
         PUSH      BX
         MOV       DX,OFFSET BUFFER    ;POINT TO DTA
         MOV       CX,64000            ;~64K BYTES IN BUFFER ZONE
         MOV       AH,3FH              ;READ FROM FILE
         INT       21H                 ;WITH CP
         JC        CLOSE_FILE          ;IF FAILURE, STOP WITH CP
         CMP       AX,0                ;EOF REACHED?
         JNZ       PARSE               ;IF NOT, PARSE NEXT BATCH
GO_DISPLAY:
         MOV       DX,OFFSET EOFMSG    ;END REACHED
         CALL      DISPLAY_TEXT        ;WRITE THE MESSAGE
         CMP       FSIZE,1             ;ONLY THE EOF MARK?
         JA        DATA                ;NO - WRITE THE SUMMARY
         MOV       DX,OFFSET NODATA
         CALL      DISPLAY_TEXT
         JMP       CLOSE_FILE
DATA:
         CALL      DISPLAY             ;WRITE THE SUMMARY WITH CP
CLOSE_FILE:
         JNC       OK                  ;JUST CONTINUE
         MOV       DX,OFFSET ERRMSG    ;FILE READ ERROR
         CALL      DISPLAY_TEXT        ;WRITE AND STOP
OK:
         POP       BX                  ;FIXUP STACK
         MOV       AH,3EH              ;AND CLOSE FILE
         INT       21H                 ;CALL CP
         JC        NOT_OK
         MOV       DX,OFFSET ENDMSG
         CALL      DISPLAY_TEXT        ;END MESSAGE
         CLC                           ;CLEAR CARRY AFTER MESSAGE...
NOT_OK:  INT       20H                 ;CP KILLS PROCESS...
EXIT:
         JNC       OK2                 ;
         MOV       DX,OFFSET SOURCE
         CALL      DISPLAY_TEXT
OK2:                                   ;MESSAGE IS WRITTEN...
         INT       20H                 ;CP TERMINATION
;
; EACH BYTE OF THE FILE WILL BE EXAMINED AND THE APPROPRIATE COUNTER
; WILL BE INCREMENTED (WORD, SENTENCE TOO) LONG WORDS WILL BE COUNTED
; WHEN 8 CHARS OR MORE
;
PARSE:   MOV       CX,AX               ;SET COUNTER TO BYTES READ
         MOV       SI,OFFSET BUFFER
         CLD
GET_CHAR:
         ADD       FSIZE,1             ;
         ADC       FSIZE_CY,0
         LODSB
         AND       AL,7FH              ;STRIP WS HI - BIT IF THERE
         CMP       AL,32               ;PRINTABLE?
         JB        DELIMITER           ;IF YES, NOT PRINTABLE...
         ADD       CHAR_COUNT,1        ;ADD 1 TO CHAR COUNT
         ADC       CHAR_CT_CARRY,0     ;AND ONE EXTRY IN CASE OVERFLOW
         JMP       NOCR                ;CAN'T BE...
DELIMITER:
         CMP       AL,0DH              ;A CR ?
         JNE       NOCR
         ADD       LINE_COUNT,1
         ADC       LINE_CT_CARRY,0
NOCR:
         LOOP      GET_CHAR            ;AND CONTINUE...
         JMP       READ                ;NEXT BLOCK WHEN LOOP EXPIRED
;
;
; SUBROUTINE AREA BEGINS
;
DISPLAY: MOV       DL,10               ;LINEFEED FIRST
         MOV       AH,02               ;JUST TO MAKE OUTPUT PRETTY
         INT       21H                 ;CP WRITES OUTPUT
         CMP       CHAR_CT_CARRY,0     ;DID CHAR COUNT OVERFLOW?
         JZ        NO_CARRY            ;NO JUST CONTINUE
         MOV       DX,OFFSET CARRY_64K
         MOV       AH,9                ;AT LEAST THAT MANY + MORE...
         INT       21H                 ;
NO_CARRY:MOV       BX,CHAR_COUNT       ;SAME WITH LOW HALF
         CALL      NUMBERS
         MOV       DX,OFFSET ALPHA_STRING
         CALL      DISPLAY_TEXT
         CMP       FSIZE_CY,0
         JZ        NOFCY               ;NO FILE CARRY
         MOV       DX,OFFSET CARRY_64K
         MOV       AH,09H
         INT       21H                 ;WRITE THE MESSAGE
NOFCY:   MOV       BX,FSIZE            ;THE COMPLETE SIZE
         CALL      NUMBERS             ;WRITE THE TOTAL SIZE...
         MOV       DX,OFFSET FILE_SIZE
         CALL      DISPLAY_TEXT        ;WRITE IT WITH CHARACTERS
         CMP       LINE_CT_CARRY,0
         JZ        NOCRY               ;NO CR CARRY VALUE USED
         MOV       DX,OFFSET CARRY_64K
         MOV       AH,09
         INT       21H
NOCRY:
         MOV       BX,LINE_COUNT
         CALL      NUMBERS
         MOV       DX,OFFSET LINE_STRING
         CALL      DISPLAY_TEXT
         CALL      PGCALC
         CALL      NUMBERS             ;BX ALREADY SET
         MOV       DX,OFFSET PAGE_STRING
         CALL      DISPLAY_TEXT        ;WRITE IT.
         RET                           ;FINSHED AT LAST...
;
;
NUMBERS: MOV       CX,10000            ;GET 10KS.
         CALL      DIVIDE              ;
         MOV       CX,1000             ;1KS
         CALL      DIVIDE
TENTHS:  MOV       CX,100              ;100S
         CALL      DIVIDE
         MOV       CX,10
         CALL      DIVIDE
         MOV       CX,1
         CALL      DIVIDE
         MOV       DISPLAY_FLAG,0
         RET                           ;BACK TO CALLER...
;
;
DIVIDE:  MOV       AX,BX
         XOR       DX,DX
         DIV       CX
         MOV       BX,DX
         MOV       DL,AL
         CMP       AL,0
         JZ        FLAG
         OR        DISPLAY_FLAG,AL
FLAG:    CMP       DISPLAY_FLAG,0
         JNZ       DISP_NUMBER
         MOV       DL,-10H             ;PAD WITH BLANKS.
DISP_NUMBER:
         ADD       DL,30H              ;ASCII WEIGHT
         MOV       AH,2H               ;DISPLAY VIA CP
         INT       21H
         RET                           ;CP RETURNS
;
;
DISPLAY_TEXT:
         MOV       AH,09H              ;WRITE A MSG WITH CP
         INT       21H
         RET                           ;BACK TO CALLER
;
;
;
PGCALC:
         MOV       AX,LINE_COUNT
         XOR       DX,DX
         MOV       BX,MAXPAGE
         DIV       BX
         CMP       AX,0
         JNE       NOINCR              ;IF NEEDED
         INC       AX
NOINCR:  MOV       BX,AX               ;BX IS SET
         CMP       DX,0                ;WAS IT EVEN DIVISION?
         JE        NOFIX               ;YES - BLOW OUT
         INC       BX                  ;OTHERWISE, HANDLE THE REMAINDER
         CMP       AX,66               ;BUT NOT IF < 66 TO START ...
         JA        NOFIX               ;OK AS IS...
         DEC       BX                  ;RESTORE TO 1
NOFIX:
         RET                           ;ALL SET...
;
BUFFER:                                ;MARK BUFFER ZONE...
CSECT    ENDS
         END       ENTRY               ;COMPLETED.
```
{% endraw %}

## READCHAR.ASM

{% raw %}
```
page,132
name keyboard_code
title keyboard.asm   --  Procedure to mask input to read
;
;
;
;
keyboard_code segment   para public 'code'
              assume    cs:keyboard_code
              public    keyboard            ;pass name to linker
keyboard      proc      far                 ;pascal calls are far
              push      bp                  ;save the base pointer
              cli                           ;stop interuppts
lock          mov       bp,sp               ;get the stack offset
lock          mov       bx,[bp]+10          ;get addr of string
lock          mov       dx,[bp]+8           ;get addr of length
lock          mov       si,[bp]+6           ;get number to read max
              mov       cx,si               ;save the limit for input
              mov       di,00               ;start at char number 1
              sti                           ;start interrupts
get_key:
              mov       ah,0                ;call bios for read service
              int       16h                 ;call bios
              cmp       al,0dh              ;see if this is the cr char
              je        quit                ;exit if so else continue
              mov       [bx][di],al         ;get char into parm area
              inc       di
              mov       ah,14               ;load for bios service
              int       10h                 ;bios service to display and move cursor
loop          get_key                       ;loop until di=cx=30 or find a cr (0dh)
quit:                                       ;found the end of line
              mov       bx,dx               ;get address back of length  param
              mov       [bx],di             ;move number of reads to count
              pop       bp                  ;restore the frame pointer
              ret       6                   ;cleanup stack
keyboard      endp
keyboard_code ends
              end                           ;end assembly
```
{% endraw %}

## READCHAR.DOC

{% raw %}
```
READCHAR:

  This procedure is similar to KEYBOARD.  However, this procedure
  will display the character received from the keyboard to the
  current display device.  It requires three parms.

  1.  The string variable to receive the string of characters.
  2.  The variable type  integer to receive the total count of
      characters typed.
  3.  The number of characters to stop reading at.  In this way
         you can limit the field with of the read.  Nice for
         formatted input screens.  It is a positive integer.  It
         should not exceed the declaration of the string otherwise it
         will continue to read past the end of the string into
         adjacent memory space.    There is no error checking.

  Pascal declarations:
  Procedure keyboard (VAR stringname : stringtype;
         VAR length : integer;
         CONST width : integer); external;


```
{% endraw %}

## REPLY.ASM

{% raw %}
```
                TITLE SNDCLR : CALLER (SOUND.ASM)
                PAGE,132
                NAME MAIN_AEM
                ;
                ;HERE IS THE CODE FOR THE CALLING PROGRAM
                ;
                CSEG    SEGMENT PARA    PUBLIC  'CODE'
                BEEP  PROC    FAR
                        ASSUME  CS:CSEG
                ;FIXUP THE STACK TO RETURN TO DOS OR DEBUG
                ;
                begin:
		push    ds
		sub     ax,ax
		push    ax
		mov     ax,cseg         ;get the return program return segment
		mov     ds,ax
                        MOV     BX,05       ;duration in hundredths of seconds
                        MOV     DI,3580         ;frequency to sound
                        MOV     AL,0B6H         ;WRITE TIMER MODE REGISTER
                        OUT     43H,AL          ;LOAD THE PORT
                        MOV     DX,14H
                        MOV     AX,4F38H        ;1331000/FREQUENCY PULSE
                        DIV     DI
                        OUT     42H,AL          ;WRITE TIMER LOW BYTE
                        MOV     AL,AH
                        OUT     42H,AL
                        IN      AL,61H          ;GET CURRENT PORT B SETTING
                        MOV     AH,AL           ;AND MOVE IT TO AH
                        OR      AL,3            ;SWITCH SPEAKER ON
                        OUT     61H,AL
                WAIT:   MOV     CX,2801         ;WAIT 10 MILLISECONDS
                SPK_ON: LOOP    SPK_ON
                        DEC     BX              ;SPEAKER ON TIME EXPIRED?
                        JNZ     WAIT            ;IF NOT KEEP SPEAKER ON
                        MOV     AL,AH
                        OUT     61H,AL          ;PORT VALUE RECOVERED..CONTINUE
                        RET
	  beep	endp
                CSEG    ENDS
                        END     begin
```
{% endraw %}

## RESPOND.ASM

{% raw %}
```
PAGE,132
TITLE RESPONSE.ASM  --  PROGRAM FOR BEEP REPSONSE AFTER <ENTER>
NAME  RESPONSE_CODE
;
;
;  PROGRAM REQUIRES NO PARMS:  GENERATES A 3590 HZ BEEP, FOR 1 CLOCK
;  ON CYCLE.  THEN PERFORMS A FAR RETURN TO PASCAL OR CALLER.
;
;
RESPONSE_CODE SEGMENT PARA PUBLIC 'CODE'
              ASSUME    CS:RESPONSE_CODE
              PUBLIC    BEEP
BEEP          PROC      FAR                 ;ALL LINKED ROUTINES ARE FAR
              PUSH      BP                  ;SAVE THE BASE POINTER
              MOV       BP,SP               ;GET THE CURRENT STACK POINTER
              MOV       BX,05               ;DURATION IN HUNDREDTHS OF SECONDS
              MOV       DI,3590             ;FREQUENCY IN HZ
              MOV       AL,0B6H             ;WRITE TIMER MODE REGISTER
              OUT       43H,AL              ;LOAD THE TIMER PORT (43HEX)
              MOV       DX,14H              ;
              MOV       AX,4F38H            ;13310000/FREQUENCY TIMER DIVISOR
              DIV       DI                  ;SEE IF TIMER READY
              OUT       42H,AL              ;TIME UP, TURN OFF SPEAKER
              MOV       AL,AH               ;GET THE HIGH BYTES AND WRITE THE QUITE TIME
              OUT       42H,AL              ;WRITE THE HIGH BYTE
              IN        AL,61H              ;GET CURRENT PORT B SETTING
              MOV       AH,AL               ;AND MOVE IT TO AH
              OR        AL,03               ;TURN LAST 2 BITS ON - SET SPKR ON
              OUT       61H,AL              ;
WAIT:
              MOV       CX,2801             ;KILL 10 MILLISECS
SPKR_ON:
              LOOP      SPKR_ON             ;SEE IF TIME EXPIRED?
              DEC       BX                  ;IF NOT, KEEP SPEAKER ON
              JNZ       WAIT                ;CONTINUE THE SOUND
              MOV       AL,AH               ;PORT VALUE RECOVER
              OUT       61H,AL              ;RESTORED TO OLD SETTING (OFF)
              POP       BP                  ;GET OLD BASE POSITION
              RET       FAR                 ;FAR RETURN TO PASCAL
BEEP          ENDP
RESPONSE_CODE ENDS
              END       
```
{% endraw %}

## RESPOND.DOC

{% raw %}
```
RESPOND:     5-30-84

Procedure to produce a 3950 hz tone, for 1 clock cycle used as a notify
blip to indicate that some action was taken by the system at the users
request.  After a request is satisfied, then this tone is supplied.
Otherwise use tone 'beep':  write (chr(7)).

There are NO parms required with this procedure.
Declare as:    Procedure beep;external;

To use:   beep;

END.

```
{% endraw %}

## SETANSI.ASM

{% raw %}
```
TITLE SETANSI.ASM - SET FUNCTION KEYS FOR ANSI.SYS DRIVER
NAME SET_CODE
PAGE 75,132
;
SETUP    MACRO CMDLENGTH,COMMAND
         MOV       CX,CMDLENGTH
         MOV       DX,OFFSET COMMAND
         MOV       AH,40H              ;FUNCTION='WRITE TO DEVICE'
         CALL      DOSVECTOR           ;CALL TO DOS (FAR)
         ENDM
;
SET_CODE SEGMENT PARA PUBLIC 'CODE'
         ASSUME    CS:SET_CODE,DS:SET_CODE
;
         ORG       50H                 ;INT 21H - FAR RETURN
DOS      LABEL     FAR                 ;DOS RETURN
         ORG       100H                ;
ENTPT:   JMP       SHORT START         ;START THE PROCESSOR
STRING1  DB        27,'[0;68;"DIR/P B:";13p'
STRSIZ1  EQU       $-STRING1
STRING2  DB        27,'[0;67;"DIR/P A:";13p'
STRSIZ2  EQU       $-STRING2
STRING3  DB        27,'[0;66;"A:FIX B:";13p'
STRSIZ3  EQU       $-STRING3
STRING4  DB        27,'[0;65;"CD";13p'
STRSIZ4  EQU       $-STRING4
STRING5	DB	27,'[0;25;"A:PRINT";p'
STRSIZ5	EQU	$-STRING5
STRING6	DB	27,'[0;84;"A:CLOCK";13p'
STRSIZ6	EQU	$-STRING6
;
HANDLE   EQU       1                   ;PREDEFINED FILE HANDLE FOR OUTPUT
;
DOSVECTOR LABEL    DWORD
DOSOFF   DW        DOS
DOSSEG   DW        0                   ;SEGMENT (TO BE FILLED)
;
START    PROC      NEAR                ;
         MOV       AX,CS               ;FIND WHERE THIS CODE IS
         MOV       DOSSEG,AX           ;SET VECTOR WHEN FOUND
         MOV       BX,HANDLE           ;SET THE FILE HANDLE FOR DRIVER SET
         SETUP     STRSIZ1,STRING1
         SETUP     STRSIZ2,STRING2
         SETUP     STRSIZ3,STRING3
         SETUP     STRSIZ4,STRING4
	SETUP	STRSIZ5,STRING5
	SETUP	STRSIZ6,STRING6
         RET                           ;RETURN TO DISK OPER SYSTEM
START    ENDP
SET_CODE ENDS
         END       ENTPT
```
{% endraw %}

## SETP.ASM

{% raw %}
```
NAME SETP_MAIN
PAGE 75,132
TITLE SETP.ASM -- PROCEDURE TO SET PAGE LINES AND PERFORATION SKIP
;
;
;        NO STACK SEGMENT
;
DISPLAY  MACRO     MESSAGE
         MOV       AH,09               ;REQUEST DISPLAY
         MOV       DX,OFFSET MESSAGE   ;GET MESSAGE
         INT       21H                 ;DOS SERVICE TO PRINT
         ENDM
;
CODE     SEGMENT   PARA PUBLIC 'CODE'
         ASSUME    CS:CODE,DS:CODE,ES:CODE,SS:CODE
;
         PUBLIC    ASCII,DATE,TIME,ENTRY,SETP
         ORG       100H                ;SETUP FOR .COM FORMAT
ENTRY:   JMP       START
;
;        SKIP OVER DATA SEGMENT
;
SUBTTL   DATA AREA - SKIPPED
;
         DB        'Time_:##:##'       ;TIME STAMP
         DB        'Date_:--------'    ;DATE STAMP
         DB        'S LEOCE'           ;MARKER
;
MONTAB   DB        'JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC'
;
MSG      DB        'SYSTEM:  Intervention required on LPT1 $'
INFO1    DB        10,13,'LPT1:  Page length set for 11 inches$'
INFO2    DB        10,13,'LPT1:  Perforation skip set to 09 lines$'
INFO3    DB        10,13,'LPT1:  Line printer ready',10,13,'$'
ROWCOL   DW        ?                   ;ROW AND COLUMN FOR CURSOR
CMDLINE  DB        24,27,'9',27,'C',00,11,27,'N',09,27,'2'
         DB        13,'LPT1: SET PAGE LEN=11; LPI=6',09
         DB        'WAITING FOR WORK - ',
;
;
DAY      DB        2 DUP ('0')         ;PAD WITH ZEROS WHEN < 10
         DB        ' '                 ;SEPARATOR
MONTH    DB        3 DUP (0)           ;THE MONTH
         DB        ' '
YEAR     DB        4 DUP (0)           ;THE YEAR  - NULL FOR HERE
         DB        2 DUP (20H)         ;2 SPACES FOR SEPARATION
HOUR     DW        '00'
         DB        ':'
MINS     DW        '00'
         DB        ':'
SECS     DW        '00'
         DB        07,13,27,'<',10
MSGLEN   EQU       $-CMDLINE
;
SUBTTL SETP - PRINTER INIT UTILITY
;
START:                                 ;FAR AWAY FROM DOS 2.10
SETP     PROC      NEAR                ;A PUBLIC PROC FOR OS USE
         STI                           ;RESTART INTERRUPTS
         CALL      B10TST              ;SEE IF PRINTER IS READY
         CALL      DATE                ;GET DATE OF INIT
         CALL      TIME                ;TIME OF INITIALIZATION
         CALL      C10PRT              ;CALL PRINT ROUTINE
         RET
SETP     ENDP      ;END OF UTILITY DRIVER
                                       ;END OF MAIN CODE
;
SUBTTL PRINTER TEST ROUTINE
;
B10TST   PROC      NEAR                ;LOCAL PROCS ARE NEAR BY
         MOV       AH,03               ;FETCH CURSOR POSITION AND SAVE IT
         MOV       BH,00
         INT       10H                 ;BIOS FOR CURSOR SERVICE
         MOV       ROWCOL,DX           ;SAVE THE RETURNED VALUE
B20:
         MOV       AH,02               ;TEST PRINTER STATUS
         MOV       DX,00               ;
         INT       17H                 ;BIOS SERVICE TO TEST DEVICE
         TEST      AH,00101001B        ;SEE IF PRINTER READY ELSE MESSAGE
         JZ        B30                 ;NO - MESSAGE AND EXIT
         CALL      E10MSG              ;PROVIDE MESSAGE
         JMP       B20
B30:
         RET
B10TST   ENDP
;
C10PRT   PROC      NEAR                ;PROCEDURE TO PRINT
         LEA       SI,CMDLINE          ;GET THE PRINTER COMMANDS
         MOV       CX,MSGLEN           ;NUMBER OF BYTES TO PRINT
         CALL      D10OUT              ;DISPLAY THE LINE
         RET
C10PRT   ENDP
;
D10OUT   PROC      NEAR                ;PRINT MESSAGE
         MOV       DX,0000             ;PRINTER #0
D20:
         MOV       AH,00               ;REQUEST PRINT
         MOV       AL,[SI]             ;GET CHAR FROM LINE
         INT       17H                 ;BIOS TO PRINT SERVICE
         INC       SI
         LOOP      D20
         DISPLAY   INFO1
         DISPLAY   INFO2
         DISPLAY   INFO3
         RET
D10OUT   ENDP
;
E10MSG   PROC      NEAR                ;DISPLAY A MESSAGE
         MOV       AH,02               ;REQUEST SET CURSOR FUNCTION
         MOV       BH,00               ;
         MOV       DX,ROWCOL           ;OLD POSITION SAVED
         INT       10H                 ;BIOS FOR DISPLAY SERVICE
         LEA       DX,MSG              ;GET ERROR MESSAGE
         MOV       AH,09H
         INT       21H
         RET
E10MSG   ENDP
;
COMMENT  * THIS PROCEDURE WRITES THE DOS TIME WITHOUT PROMPTING FOR THE
           NEW TIME LIKE THE DOS TIME COMMAND DOES.  SOMETIMES YOU JUST
-          NEED TO SEE THE TIME, SAY IN A BATCH PROCEDURE WITHOUT ACTUALLY
           RESETTING IT.  DOS MAKES THIS UNCOMFORTABLE
         *
;
SUBTTL TIME CONVERSION UTILITY
;
TIME     PROC      NEAR
         PUBLIC    TIME                ;
         MOV       AH,02CH             ;REQUEST DOS FETCH TIME
         INT       21H                 ;
         MOV       AL,CH               ;HOURS - 0..23 IN AL
         CALL      CONVT               ;CONVERT
         MOV       HOUR,'00'           ;BLANK FOR NOW
         ADD       HOUR,AX             ;ASCII ADD
         MOV       AL,CL               ;DO SAME FOR MINUTES
         CALL      CONVT
         MOV       MINS,'00'
         ADD       MINS,AX
         MOV       AL,DH               ;SECONDS
         CALL      CONVT
         MOV       SECS,'00'           ;ASCII ZEROES
         ADD       SECS,AX
         RET
TIME     ENDP
;
;
SUBTTL - DATE CONVERSION UTILITY
DATE     PROC      NEAR                ;DATE PROCEDURE
         PUBLIC    DATE                ;MAKE PUBLIC FOR LINKER
;
         MOV       AH,2AH              ;GET DATE FROM DOS
         INT       21H                 ;RETURN IN CX,DX
         PUSH      CX                  ;SAVE THE CURRENT CONTENTS
         PUSH      DX                  ;SAVE THE WHOLE DATE NOW
         MOV       DI,OFFSET DAY+1     ;THE DAY OF THE MONTH
         SUB       DH,DH               ;ZERO THE HIGH PART OF DX
         MOV       AX,DX               ;THE DAY NUMBER
         SUB       DX,DX               ;ZERO THE DX REGISTER
         CALL      ASCII
         POP       AX                  ;GET THE OLD VALUE BACK FROM STK
         MOV       DI,OFFSET MONTH     ;THE MONTH NUMBER
         MOV       SI,OFFSET MONTAB    ;MONTH TABLE
         SUB       AL,AL               ;GET RID OF DAYS...
         XCHG      AH,AL               ;SWAP POSITIONS FOR CORRECT ADD LEN
         MOV       CX,0003             ;SETUP ADDR IS SI+3*MONTH-3 BYTES
         MUL       CL
         SUB       AX,3
         ADD       SI,AX               ;ADD OFFSET AND MOVE 3 BYTES
         CLD                           ;CLEAR DIRECTION TO FWD
REP      MOVSB                         ;MOVE STRING BYTES
         MOV       DI,OFFSET YEAR+3
         POP       AX
         SUB       DX,DX
         CALL      ASCII
         RET                           ;BACK TO CALLER
DATE     ENDP
;
SUBTTL   ASCII CONVERSION ROUTINE
;
ASCII    PROC      NEAR                ;CONVERT
         MOV       BX,0AH              ;DIVISOR
         MOV       CL,30H              ;CONVERSION FACTOR FOR ASCII
RPT1:
         XOR       DX,DX
         DIV       BX                  ;CLEAR DX
         OR        DL,CL
         MOV       [DI],DL
         DEC       DI                  ;GET NEXT CHAR
         CMP       AX,0                ;DONE YET?
         JNZ       RPT1                ;NO - MORE
         RET                           ;YES - QUIT
ASCII    ENDP
;
CONVT    PROC      NEAR
         PUBLIC    CONVT               ;CONVERT THE TIME SEGMENTS
         PUSH      CX
         XOR       AH,AH               ;
         MOV       CL,10               ;DIVISOR FOR ASCII ADJUST
         DIV       CL
         POP       CX                  ;RESTORE OLD VALUES
         RET                           ;DONE
CONVT    ENDP
;
CODE     ENDS
         END       ENTRY
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0223

     Volume in drive A has no label
     Directory of A:\

    ADDENDA  TXT       914   1-13-87   7:28p
    BEEP     ASM      1869   5-23-84   7:15p
    BEEP     DOC       172   5-23-84   7:24p
    CANCEL   ASM      2926   8-08-84   8:49p
    CANCEL   EXE       683   8-08-84   8:50p
    CLS      ASM       644   5-23-84  12:57a
    CLS      DOC       126   5-23-84   1:15p
    CLS      OBJ        85   5-16-84   9:19a
    CONTENTS DOC      4424   8-11-84   7:44p
    CONTRACT ASM       695   7-21-84   6:49p
    CONTRACT DOC       335   7-21-84   7:29p
    CONTRACT OBJ        95   7-21-84   6:57p
    CRC      TXT      2439  11-16-84   6:44a
    CRCK4    COM      1536  10-21-82   7:54p
    EXPAND   ASM       721   7-21-84   6:46p
    EXPAND   DOC       321   7-21-84   7:27p
    EXPAND   OBJ        89   7-21-84   6:50p
    FILE     PAS     19239   7-21-84   7:38p
    FILES223 TXT      1991   1-04-80   8:48a
    INFO     BAT       434   8-11-84   7:35p
    LOCATE   ASM       688   5-23-84  12:57a
    LOCATE   DOC       187   5-23-84   1:16p
    LOCATE   OBJ        95   5-16-84   9:18a
    MODULE   OBJ     11569   7-21-84   1:54p
    MODULE   PAS      8768   6-09-84   9:03p
    MORE     COM       384   8-11-84   8:28p
    MSBFILE  EXE     51840   7-21-84   7:17p
    PREVIEW  ASM      8751   1-13-87   7:15p
    PREVIEW  COM       649   1-02-87   6:03p
    PREVIEW  EXE     29696   7-20-84   8:42p
    PREVIEW  PAS      3102   7-21-84   2:19p
    READCHAR ASM      1994   6-01-84   1:04p
    READCHAR DOC       901   8-11-84   7:03p
    READCHAR OBJ       130   6-01-84   1:06p
    REPLY    ASM      1902   5-29-84  10:40p
    REPLY    COM        54   5-29-84  11:18p
    REPLY    EXE       640   5-29-84  10:40p
    RESPOND  ASM      2170   5-30-84   1:50p
    RESPOND  DOC       404   5-30-84   2:09p
    RESPOND  OBJ       129   5-30-84   1:50p
    SETANSI  ASM      1818   8-10-84   8:48p
    SETANSI  COM       203   8-10-84   8:50p
    SETANSI  EXE       971   8-10-84   8:49p
    SETP     ASM      7938   1-13-87   7:16p
    SETP     COM       549   3-11-86   2:03p
    SETP     EXE       789   8-06-84   6:03p
    SETP     OBJ       435   8-04-84   4:33p
           47 file(s)     176494 bytes
                          121856 bytes free
