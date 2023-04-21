---
layout: page
title: "PC-SIG Diskette Library (Disk #570)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0570/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0570"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROGRAMERS UTILITIES #11"

    This disk has a useful assortment of PASCAL utilities along with
    the source code for functions such as removing tabs from a file,
    dumping either a HEX or ASCII file and formatting the FX-80.  For
    most programs there are two versions, specific to either DOS 1.X
    and DOS 2.X.
    
    System Requirements:  128K, two disk drives
    
    How to Start:  To run the programs with the .EXE and .BAT extension,
    type in the filename and then press <ENTER>.  To run the programs with
    .PAS extension, refer to your Pascal manual.
    
    Suggested Registration:  $20.00
    
    File Descriptions:
    
    DOSCALL  ASM  Pascal callable procedure to access DOS
    COMMAND  OBJ  Pascal procedure to interpret command line arguments
    DOSCALL  OBJ  Pascal callable procedure to access DOS
    DOSIF    OBJ  Pascal unit to provide access to DOS functions
    FF       ASM  Output a form-feed to printer
    BDUMP    EXE  Dump a file treating it as 8 bit bytes
    DETAB    EXE  Remove tabs from a file. DOS 2.X
    IDUMP    EXE  Dump a file treating it as 16 bit integers. DOS 2.X
    README        Pascal Utilities information file.
    DETAB1   EXE  Remove tabs from a file. DOS 1.X
    IDUMP1   EXE  Dump a file treating it as 16 bit integers. DOS 1.X
    DUMP     EXE  Dump a file in Hex and ASCII. DOS 2.X
    PR       EXE  Print Formatter for FX-80
    FF       EXE  Output a form-feed to printer
    PATH2    0    Used to link for 2.0 pathnames
    DOSIF    INC  Pascal unit to provide access to DOS functions
    GOB      BAT           "
    GOI      BAT           "
    GOPR     BAT           "
    GODE     BAT  Various batch files
    COMMAND  PAS  Pascal procedure to interpret command line arguments
    DUMP     PAS                       "
    BDUMP    PAS                       "
    IDUMP    PAS                       "
    PR       PAS                       "
    GOD      BAT           "
    DETAB    PAS                       "
    DOSIF    PAS  Pascal Source code for utilities
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DOSCALL.ASM

{% raw %}
```

	page	59,132
	TITLE -- PASCAL SUBROUTINE to access DOS functions
;
	 COMMENT *		This subroutine provides access to all(?)
					   DOS functions from Pascal


		procedure DOSCALL(var error:boolean,var A,B,C,D,SI,DI:register);

					ERROR is set true if the cary flag is set upon return from DOS
						This may not indicate an error for all DOS calls; the manual
						(pg D-14) is typically vague on this.
					The caller must set the variables to the values required by DOS
						in the registers for the call; A.H is the DOS function code.
					All variables are returned with the register contents as 
						returned by DOS.

			*
;
;		parameter offsets on the calling stack
DIoff	equ	6
SIoff	equ	8
Doff	equ	10
Coff	equ	12
Boff	equ	14
Aoff	equ	16
eroff	equ   18
;
;
;	SUBROUTINE ENTRY POINT
DOSSEG	SEGMENT	PARA PUBLIC 'CODE'
DGROUP	GROUP	DATA
DOSCALL	PROC	FAR
	ASSUME	CS:DOSSEG,ES:DGROUP,SS:DGROUP,DS:DGROUP
	PUBLIC	DOSCALL
;
	PUSH	BP		;save frame pointer for return
;		put contents of Pascal variables into registers for call to DOS
	mov	bp,sp
	mov 	ax,ds
	mov	es,ax
	mov	di,[bp+Doff]
	mov	dx,[di]
	mov	di,[bp+Coff]
	mov	cx,[di]
	mov	di,[bp+Boff]
	mov	bx,[di]
	mov	di,[bp+Aoff]
	mov	ax,[di]
	mov	di,[bp+SIoff]
	mov	si,[di]
	mov	di,[bp+DIoff]
	mov	di,[di]
;  now do the DOS interupt
	INT	21H
;  now pass all the registers back in the variables
	push	di		;save for a moment
	mov	di,[bp+Aoff]
	mov	[di],ax
	mov	di,[bp+Boff]
	mov	[di],bx
	mov	di,[bp+Coff]
	mov	[di],cx
	mov	di,[bp+Doff]
	mov	[di],dx
	mov	di,[bp+SIoff]
	mov	[di],si
;		now set error flag
	jc    error
	mov	bx,0	;set error = false
	jmp	out
error:
	mov	bx,1	;set error = true
out:
	mov	di,[bp+eroff]
	mov	[di],bx
;		;finally put DI	
	pop	ax		; put DI into AX
	mov	di,[bp+DIoff]
	mov	[di],ax


	POP	BP
	RET	14		;Return to caller
DOSCALL 	ENDP
DOSSEG	ENDS
	END
```
{% endraw %}

## FF.ASM

{% raw %}
```
TITLE  -- ISSUE FORMFEED TO PRINTER  (big deal, huh!)
COMMENT *
		This program issues one formfeed to PRN
	*
;
DATA SEGMENT PARA PUBLIC 'DATA'
DATA ENDS
;	 DESCRIPTION OF THE STACK SEGMENT
STACK	SEGMENT	PARA STACK 'STACK'
	DB	40 DUP('STACK   ')
STACK	ENDS
;
CSEG	SEGMENT	PARA PUBLIC 'CODE'
START	PROC	FAR
	ASSUME CS:CSEG,SS:STACK,DS:DATA,ES:DATA
;
        PUSH    DS              ;Set return segment addr to stack
	SUB	AX,AX		;Clear a reg
	PUSH	AX		;Put zero return addr to stack
	MOV	AX,DATA		;Get location of data segment
	MOV	ES,AX		;Set segreg base of data segment
	MOV	DS,AX
;
	MOV	AH,5		;function code to output to printer
	MOV	DL,0CH		; form feed code
	INT	21H		; DOS interrupt
;
	RET			; EXIT TO DOS
;
START	ENDP
CSEG	ENDS
	END	START
```
{% endraw %}

## FILES570.TXT

{% raw %}
```
-----------------------------------------------------------------------------
Disk No  570  Programmer and Pascal Utilites                       v1  DS2
-----------------------------------------------------------------------------
This disk has a useful assortment of PASCAL utilities along with the
source code for functions such as removing tabs form a file, dumping
either a HEX or ASCII file and formatting the FX-80. For most programs
there are two versions - DOS 1.X and DOS 2.X as well.
 
DOSCALL  ASM   Pascal callable procedure to access DOS
FF       ASM   Output a form-feed to printer
DOSIF    OBJ   Pascal unit to provide access to DOS functions
DOSCALL  OBJ   Pascal callable procedure to access DOS
COMMAND  OBJ   Pascal procedure to interpret command line arguments
DOSIF    INC   Pascal unit to provide access to DOS functions
GODE     BAT   Various batch files
GOPR     BAT                   "
GOI      BAT                   "
GOB      BAT                   "
GOD      BAT                   "
DOSIF    PAS   Pascal Source code for utilities
DETAB    PAS                               "
PR       PAS                               "
IDUMP    PAS                               "
BDUMP    PAS                               "
DUMP     PAS                               "
COMMAND  PAS   Pascal procedure to interpret command line arguments
PATH2    0     Used to link for 2.0 pathnames
FF       EXE   Output a form-feed to printer
PR       EXE   Print Formatter for FX-80
BDUMP    EXE   Dump a file treating it as 8 bit bytes
IDUMP    EXE   Dump a file treating it as 16 bit integers. DOS 2.X
DETAB    EXE   Remove tabs from a file. DOS 2.X
DUMP     EXE   Dump a file in Hex and ASCII. DOS 2.X
IDUMP1   EXE   Dump a file treating it as 16 bit integers. DOS 1.X
DUMP1    EXE   Dump a file in Hex and ASCII. DOS 1.X
DETAB1   EXE   Remove tabs from a file. DOS 1.X
README         Pascal Utilities information file.
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## NOTES570.TXT

{% raw %}
```
Program name:         PASCAL Utilities

Author name:          Ray Turner
Address:              9659 La Esperanza, Fountain Valley, CA 92708

Suggested Donation:   $ 20.00

Program Description:  This disk contains an assortment of PASCAL utilities
                      along with their source code and would be of interest
                      to PASCAL programmers.

                      Some of the programs on this disk include :


                      PR    --  Print Formatter for FX-80
                      DETAB --  Remove tabs from a file
                      FF    --  Output a form-feed to printer
                      DUMP  --  Dump a file in Hex and ASCII
                      IDUMP --  Dump a file treating it as 16 bit integers
                      BDUMP --  Dump a file treating it as 8 bit bytes


                 GetNextArg --  Pascal procedure to interpret command line
                                arguments
                    DOSIF   --  Pascal unit to provide access to DOS
                                functions
                    DOSCALL --  Pascal callable procedure to access DOS

                      Most of these programs come in two versions - one that
                      runs under DOS 1.X and another under DOS 2.X
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0570

     Volume in drive A has no label
     Directory of A:\

    BDUMP    EXE     23903  12-26-83   1:49p
    BDUMP    PAS      1825  12-26-83   1:46p
    COMMAND  OBJ      1032  12-23-83   5:06p
    COMMAND  PAS      3001  12-23-83   5:05p
    DETAB    EXE     24687  12-26-83   2:14p
    DETAB    PAS      9779  12-24-83   1:16p
    DETAB1   EXE     25498  12-26-83   2:15p
    DOSCALL  ASM      1910   8-10-83   7:25p
    DOSCALL  OBJ       182   8-10-83   7:25p
    DOSIF    INC      3155   8-08-83   9:05p
    DOSIF    OBJ      3804   8-08-83   9:08p
    DOSIF    PAS      4583   8-08-83   8:58p
    DUMP     EXE     24047  12-26-83  11:45p
    DUMP     PAS      3163  12-26-83  11:43p
    FF       ASM       775   8-10-83   7:35p
    FF       EXE      1152   8-10-83   7:30p
    FILES570 TXT      2069   6-20-86   1:35p
    GO       BAT       589   6-20-86   1:34p
    GOB      BAT       144  12-26-83   2:12p
    GOD      BAT       138  12-26-83  10:08p
    GODE     BAT       132  12-26-83   2:12p
    GOI      BAT       144  12-26-83   2:12p
    GOPR     BAT       108  12-23-83   5:08p
    IDUMP    EXE     23391  12-26-83   1:54p
    IDUMP    PAS      1785  12-26-83   1:44p
    IDUMP1   EXE     24202  12-26-83   1:54p
    NOTES570 TXT      1298   6-12-86   6:05p
    PATH2    0          21  12-21-83   8:57p
    PR       EXE     36181  12-23-83   5:46p
    PR       PAS     28605   1-03-84   6:59p
    README           30711   1-12-83   5:18p
           31 file(s)     282014 bytes
                           22528 bytes free
