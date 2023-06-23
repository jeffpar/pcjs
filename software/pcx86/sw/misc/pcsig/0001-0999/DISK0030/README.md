---
layout: page
title: "PC-SIG Diskette Library (Disk #30)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0030/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0030"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PASCAL I/O"

    The Pascal programs on this disk show how to do disk I/O with Pascal.
    PASCAL I/O is logical well written and documented code.  At the heart
    of PASCAL I/O is INTRPT.OBJ which in conjunction with IOSTUFF.OBJ and
    IOSTUFF.INC demonstrate IBM I/O routines in Pascal.  Also included is
    DISKREAD which displays the disk contents using IBM BIOS.
    
    System Requirements:  An IBM PASCAL compiler.
    
    How to Start:  To read documentation enter: TYPE IOSTUFF.DOC.  To run a
    .PAS program, load Pascal, compile and run.
    
    File Descriptions:
    
    INTRPT   ASM  Source for INTRPT.OBJ
    IOSTUFF  DOC  Describes files below
    DISKREAD OBJ  Object for DISKREAD.EXE
    DISKREAD EXE  Displays disk contents by sector
    INTRPT   OBJ  Object to be linked to your Pascal program object
    DISKREAD PAS  Source for DISKREAD.OBJ
    IOSTUFF  OBJ  Object to be linked to your Pascal program object
    IOSTUFF  INC  Source to be INCLUDED with your Pascal program source
    IOSTUFF  PAS  Source for IOSTUFF object
    PRIME    PAS  Source for DEMO
    SAMPLE   PAS  Source for DEMO
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #30, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  IOSTUFF .DOC         CRC = 3D 2E

--> FILE:  IOSTUFF .OBJ         CRC = 90 F2

--> FILE:  IOSTUFF .PAS         CRC = D5 A7

--> FILE:  IOSTUFF .INC         CRC = 2F 08

--> FILE:  DISKREAD.EXE         CRC = E9 44

--> FILE:  DISKREAD.OBJ         CRC = 33 0A

--> FILE:  DISKREAD.PAS         CRC = 2F 81

--> FILE:  PRIME   .PAS         CRC = 0C 1A

--> FILE:  INTRPT  .OBJ         CRC = 34 B3

--> FILE:  SAMPLE  .PAS         CRC = B4 95

--> FILE:  INTRPT  .ASM         CRC = F8 38

 ---------------------> SUM OF CRCS = 0C 38

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## INTRPT.ASM

{% raw %}
```
NAME	INTRPT
;**********************************************************************
;*							      *
;*	INTERRUPT HANDLER FOR USE WITH IBM PERSONAL COMPUTER PASCAL   *
;*	PROGRAMS TO ALLOW DIRECT CALLING OF DOS INTERRUPT FUNCTIONS   *
;*	FROM WITHIN A PASCAL PROGRAM.				      *
;*								      *
;**********************************************************************
;
;
FRAME	  STRUC 			;Define structure (DSECT)
SAVEBP	  DW	?			;Caller's BP
SAVERET   DD	?			;Four byte return address
					;pushed by PASCAL
DXREG	  DW	?			;Address of word with DX value
CXREG	DW	?			;Address of word with CX value
BXREG	  DW	?			;Address of word with BX value
AXREG	  DW	?			;Address of word with AX value
NUMBER	  DW	?			;Interrupt to be performed
FRAME	  ENDS
;
CSEG	  SEGMENT	'CODE'
DGROUP	  GROUP 	DATA,STACK,CONST,HEAP,MEMORY
	  ASSUME	CS:CSEG,DS:DGROUP,ES:DGROUP,SS:DGROUP
INTRPT	  PROC		FAR
	  PUBLIC	INTRPT
	  PUSH		BP
	  MOV		BP,SP			;Point SP at FRAME structure
	  MOV		AL,BYTE PTR [BP].NUMBER ;Move the interrupt number
						;into the right place
	  MOV		CS:INTERUPT+1,AL
	  MOV		SI,[BP].AXREG		;Set up regs for interrupt
	  MOV		AX,[SI]
	  MOV		SI,[BP].BXREG
	  MOV		BX,[SI]
	  MOV		SI,[BP].CXREG
	  MOV		CX,[SI]
	  MOV		SI,[BP].DXREG
	  MOV		DX,[SI]
	  PUSH		BP
INTERUPT  EQU		THIS BYTE		;Perform the interrupt
	  INT		16
	  POP		BP
	  MOV		SI,[BP].AXREG		;Save the registers in
						;VAR parameters, so that
						;Pascal can access them
	  MOV		[SI],AX
	  MOV		SI,[BP].BXREG
	  MOV		[SI],BX
	  MOV		SI,[BP].CXREG
	  MOV		[SI],CX
	  MOV		SI,[BP].DXREG
	  MOV		[SI],DX
	  POP		BP
	  RET		10
INTRPT	  ENDP
CSEG	  ENDS
	  END
```
{% endraw %}

## IOSTUFF.DOC

{% raw %}
```

		    IBM PASCAL UTILITY I/O SUBROUTINES
		    ----------------------------------
			     by Brian Irvine

      This is a short description of the Pascal routines provided in the
   Unit IOSTUFF.PAS and its accompanying files IOSTUFF.INC and INTRPT.ASM.
   These files together, when assembled, compiled and linked with a host
   program written in Pascal, provide a set of utility procedures for screen
   manipulation which are not available as built-in procedures or functions
   in the IBM Pascal compiler.	They also provide low-level access to the
   diskettes installed by allowing the programmer to read any sector into
   memory for examination.

      The pivotal mechanism in all this is the small assembly language
   routine INTRPT.ASM.	This routine allows the programmer to access all the
   machine language code in the PC's ROM BIOS.  These functions and their
   access mechanisms are detailed in the Technical Reference Manual,
   Appendix A.

      There are no built-in screen and cursor manipulation functions in the
   IBM Pascal compiler.  The programmer is obliged to write his own routines
   to service the display in the way he wishes.  However, there are many
   functions already available in the ROM, the only question is how to
   access them.  This is where INTRPT.ASM comes into play.  INTRPT.ASM is an
   interfacing routine which accepts five parameters passed to it in a stack
   frame by a calling Pascal procedure or function.  These variables are the
   number of the interrupt to be generated, and values to place in the four
   8088 registers AX, BX, CX and DX.  The variables passed to INTRPT are
   word length and can therefore be used to pass two byte values for use in
   the high and low bytes of the registers.  INTRPT then places the values
   passed into their proper locations and executes an interrupt.  This
   passes control to the desired routine which then does its thing.  When
   the ROM routine is done, it returns control to INTRPT, which places the
   returned values in the AX, BX, CX and DX registers back in the stack
   frame to be returned to Pascal.  INTRPT then passes control back to the
   Pascal calling routine and we are back in our application program.

      The file IOSTUFF.INC is the include file which must be included in
   your Pascal source file before any of the routines or variables are used.
   This file contains a list of all the procedure names, variable names and
   variable type definitions.  It also contains all the Procedure calls and
   the variables passed to and from them.

      The file IOSTUFF.PAS is the source code for all the procedures which
   access the INTRPT procedure.  It is the Implementation of the Unit
   IOSTUFF.  This file is not to be included in your source program, but
   rather the compiled version IOSTUFF.OBJ must be linked in with the object
   code from the application program and with the object code INTRPT.OBJ.
   This is done with a Linker command of the form:

		LINK MYPROG IOSTUFF INTRPT;

   This will cause the IBM Link facility to generate an EXE file with all
   the proper code in the right place, etc.  For further information on
   using Units in Pascal, see the compiler manual, pages 13-11 to 13-17.

      All the routines in the IOSTUFF Unit are fairly well documented and
   most of them are simple routines.  The parameters used and the functions
   or procedures performed are self-explanatory.  There is not much checking
   for valid data performed in the procedures themselves.  This is left up
   to the programmer to control as he wishes.  There are also many functions
   in the ROM which are not implemented in this Unit.  If you come up with
   some terrific new application, let me know.	I think this system could be
   used effectively to create some good graphics routines for Pascal, since
   it lets you get to the bit level on the screen.  Also, the access to the
   printer port through ROM has not been implemented nor has the access to
   the COM port.  These are things which I would like to do in the future.
   All I need is about 2 months off work with pay.

      The program DISKREAD is a demonstration of some of the procedures in
   IOSTUFF, especially the ability to read any sector on the disk.  It also
   demonstrates setting the cursor size and positioning the cursor on the
   screen.  The program is not complete by any means, and the functions it
   performs are not very complicated.  There are three commands not shown on
   the bottom line, they are:

      F1 - Input new Drive/Side/Track/Sector
      F2 - Toggle the radix for Drive/Side/Track/Sector from decimal to hex
	   and back
      T  - Fills the sector buffer with a test pattern of all characters in
	   the PC's character generator ROM.

   Since this program prints ALL codes in the ROM, you may not be able to
   do a PrtSc since it may send your printer into the Thulies.	Now there's
   a good application for writing a procedure using this method!

      Brian Irvine
      3379 St Marys Place
      Santa Clara, CA 95051
      (408) 984-8692
      2/24/83

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0030

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT      1075  11-09-84   8:51a
    CRCK4    COM      1536  10-21-82   7:54p
    DISKREAD EXE     37632   2-24-83   9:31a
    DISKREAD OBJ      7154   2-24-83   9:31a
    DISKREAD PAS      7507   2-24-83   9:28a
    INTRPT   ASM      1685  11-25-82   8:45p
    INTRPT   OBJ       234  11-25-82   8:45p
    IOSTUFF  DOC      5203   2-24-83   5:41p
    IOSTUFF  INC      5142   2-24-83   9:56a
    IOSTUFF  OBJ      7105   2-24-83   9:59a
    IOSTUFF  PAS      7340   2-24-83   9:56a
    PRIME    PAS       723   1-22-83   2:37p
    SAMPLE   PAS      4822  11-20-82   9:12a
           13 file(s)      87158 bytes
                           69632 bytes free
