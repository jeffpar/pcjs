---
layout: page
title: "PC-SIG Diskette Library (Disk #875)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0875/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0875"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "QREF, VXREF, AND CLOCK"

    A memory-resident utility that displays a list of all the DOS commands
    available and a detailed description of them.
    
    Scroll through a display of all the MS/PC-DOS commands. The DOS
    prompt will always be displayed at the top. You can limit the list by
    typing in a letter -- only the commands that begin with that letter
    will be displayed. Pressing another letter will limit the list to
    commands that begin with those two letters. Get a brief summary of the
    command or a detailed description.
    
    BASIC programmers -- VREF (Variables Cross-Reference) is a programming
    utility which will show all lines where a specific variable is located
    in a BASIC program.
    
    VXREF works with all BASIC programs written in GW/PC BASIC or BASICA and
    saved in an ASCII format.  It can distinguish between variables and
    arrays of the same name and will ignore type declarations and system
    variables.  Each occurrence of a variable in a line is mentioned once.
    The list may be printed on a printer or saved to a disk file.
    
    CLOCK displays a full analog clock face on the screen of your computer,
    including second hand, in real time taken from DOS.  A menu-based help
    function is available to allow sizing and positioning of the clock on
    the screen, but the default is full screen size.  The C source code for
    the program is included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CSYSINT.ASM

{% raw %}
```
PAGE   54,130
; CSYSINT  - Lattice "C" interface to the world
;
; This program was adapted from PSYSINT, a program listed
; and described by Will Fastie in SOFTALK Magazine, which
; provided access to system calls from IBM Pascal programs.
; It in turn was taken from George Eberhart's version for the
; Computer Inovations C86 Compiler, with permission.
;
; Modified by T. Cox to match the Microsoft C Compiler
; assembly language interface call conventions, and renamed
; to CSYSINT.
;
; C calling sequence:
;
;     flags = csysint(interrupt,&sreg,&rreg);
;
; Where sreg and rreg are structures of four words each representing
; the 8088 registers AX, BX, CX, and DX.  "regsetT is a structure
; defining these as all the half-register names (e.g.,AL,AH).
;
; interrupt is the number of the system interrupt desired.
;
; The return value is a 16-bit unsigned integer. It contains
; the machine status register.
;
; This C function calling sequence passes the interrupt code as a value
; and the two register sets as pointers to their respective structures.
;
; The incoming stack looks like this in memory locations "mem".  Note
; that the call is a NEAR call (page 1-36 of the Microsoft C manual),
; so only the return address (and not the segment address) is pushed.
;
;   High				      <-- Caller's BP
;	     mem + 06:	 interrupt code value
;	     mem + 04:	 SREG address
;	     mem + 02:	 RREG address
;	     mem + 00:	 caller's saved BP
;   Low 				      <-- BP, SP
;
PGROUP	GROUP  PROG
PARAMS	STRUC
OLD_BP	DW     ?		   ; Caller's BP Save
RETN	DW     ?		   ; Return address from call
ARG1	DW     ?		   ; First arguement
ARG2	DW     ?		   ; Second arguement
ARG3	DW     ?		   ; Third arguement
PARAMS	ENDS
;
PROG	SEGMENT BYTE PUBLIC 'PROG'
	ASSUME CS:PGROUP
	PUBLIC CSYSINT
;
CSYSINT PROC   NEAR
	PUSH   BP		   ; save caller's frame pointer
	MOV    BP,SP		   ; set up our frame pointer
;
	CALL   DUMMY		   ; trick - push the IP
DUMMY:
	POP    AX		   ; get it
	SUB    AX,OFFSET DUMMY	   ; calculate the address of the INT
	ADD    AX,OFFSET PINT
	MOV    DI,AX		   ; move it to the index register
	MOV    AX,[BP].ARG1	   ; get the desired interrupt number
	MOV    CS:[DI+1],AL	   ; put it in the INT instruction
	CALL   REGSIN		   ; get the registers from SREG
	PUSH   BP		   ; we'll need our own BP later
PINT:	INT    00H		   ; perform the requested interrupt
	POP    BP		   ; get our BP back
	PUSHF			   ; hang onto the flags for the return
	CALL   REGSOUT		   ; put the registers into RREG
	POP    AX		   ; flags are the return value
	POP    BP		   ; restore the caller's frame pointer
	RET			   ; return to caller
CSYSINT ENDP
;
; ---------------------------------
; Subroutines to move the registers in and out
;
NRREGS	EQU    4		   ; this version supports only four regs
;
REGSIN	PROC   NEAR		   ; -- Move Registers In
	MOV    BX,[BP].ARG2	   ; get address of register set SREG
	MOV    CX,NRREGS	   ; ...and how many registers to move
INLOOP:
	PUSH   WORD PTR [BX]	   ; push one
	INC    BX		   ; point to the next one
	INC    BX
	LOOP   INLOOP		   ; ..do it some more
	POP    DX		   ; now pop them into their proper places
	POP    CX
	POP    BX
	POP    AX
	RET			   ; all done
REGSIN	ENDP
;
REGSOUT PROC   NEAR		   ;--Move Registers Out
	PUSH   DX		   ; push all the registers in reverse order
	PUSH   CX
	PUSH   BX
	PUSH   AX
	MOV    BX,[BP].ARG3	   ; get the address of RREG
	MOV    CX,NRREGS	   ; ...and how many registers to move
LOOPOUT:
	POP    WORD PTR [BX]	   ; recover the register
	INC    BX		   ; point to the next
	INC    BX
	LOOP   LOOPOUT		   ; do it again
	RET
REGSOUT ENDP
;
PROG	ENDS
	END
```
{% endraw %}

## DIR.DOC

{% raw %}
```


       53 File(s)    463360 bytes free
 Directory of  D:\
 Volume in drive D has no label
0D2B2A06            0  10-11-87   1:43p
0D2B2A0C            0  10-11-87   1:43p
AUTOEXEC BAT        8  12-22-86  10:17p
CLKASM   BAT     1408   1-03-87   8:00p
CLKCLR   C       1280  12-22-86   8:46p
CLKCLR   OBJ      443   1-03-87   3:46p
CLKDLY   C        896  12-22-86   9:16p
CLKDLY   OBJ      114  12-22-86   9:23p
CLKFAC   C       6784  12-22-86   8:50p
CLKFAC   OBJ     1266   1-03-87   3:47p
CLKGBL   H       4864   1-03-87  11:47p
CLKHN2   H      16000   1-03-87  11:38p
CLKHND   H       8448  12-06-86   3:52p
CLKHRH   C       1536  12-22-86   8:52p
CLKHRH   OBJ      433   1-03-87   3:47p
CLKIMGH  C       5376   1-03-87  11:33p
CLKIMGH  OBJ     6699   1-03-87  11:44p
CLKIZN   C       1024   1-03-87   3:39p
CLKIZN   OBJ      213   1-03-87   3:46p
CLKKYB   C       4480   1-03-87  11:41p
CLKKYB   OBJ     1833   1-03-87  11:12p
CLKLINK  BAT      128  12-09-86  10:18p
CLKLKMD  LNK      256   1-03-87   8:01p
CLKMNH   C       1408  12-22-86   9:09p
CLKMNH   OBJ      346   1-03-87   3:49p
CLKPNT   C       4480   1-03-87   3:36p
CLKPNT   OBJ     1566   1-03-87   3:50p
CLKPRINT BAT      640   1-03-87   8:00p
CLKSCH   C       1408  12-22-86   9:09p
CLKSCH   OBJ      318   1-03-87   3:49p
CLKSIZ   C       1664   1-03-87  11:39p
CLKSIZ   OBJ      601   1-03-87  11:43p
CLKTIM   C       1664   1-03-87   3:38p
CLKTIM   OBJ      584   1-03-87   3:47p
CLOCK    BAK     4224   1-04-87  12:00a
CLOCK    C       1664   1-03-87   7:59p
CLOCK    DOC     1280  10-11-87   1:41p
CLOCK    EXE    24016   1-03-87  11:48p
CLOCK    MAP      351   1-03-87  11:48p
CLOCK    OBJ     4830   1-03-87  11:48p
COMMAND  COM    23210   3-07-85   1:43p
CSYSINT  ASM     3728   7-29-84   4:07p
CSYSINT  CRF      356  12-20-86  11:38p
CSYSINT  LST     6853  12-20-86  11:38p
CSYSINT  OBJ      178  12-20-86  11:38p
DIR      DOC        0  10-11-87   1:43p
HANDSGEN BAS      697  12-20-86   8:11p
HANDSGEN TAB    12055  12-20-86   8:11p
LINKMODS LNK      128  11-30-86  10:08p
READ     ME        61  10-11-87   1:43p
TEMP     BAT      128   1-03-87  11:42p
TEMP     TMP     2065  10-11-87   1:14p
TEMPLATE C        640   9-06-86   5:57p
```
{% endraw %}

## FILES875.TXT

{% raw %}
```
Disk No  875
Program Title: Q-REF, VXREF version 1.3, Clock
PC-SIG version 1.1

    Q-REF is a memory-resident utility that displays a description of the
DOS commands available to you. It includes all MS/PC-DOS commands for
version 2.10, and the version available on registration includes DOS 3.20
commands and additional help utilities. Once Q-REF is installed, you can
press the keys ALT and LEFT SHIFT together to get a display of all the DOS
commands, which you can scroll through. The DOS prompt is always displayed
at the top. You can limit the list by typing in a letter, and then only the
commands that begin with that letter are displayed. Pressing another letter
limits the list to commands that begin with those two letters. You can
either get a brief summary of the command, or you can get a detailed
description by choosing the command from the list. You get a detailed
description by scrolling through the list and pressing enter after the
command you want to review. Q-REF requires DOS 2.0 or higher, and the
program QREF.DOS must be located somewhere on the root directory of drives
A to D.

    VXREF (Variables Cross-Reference) is a utility that shows all lines
where a variable is in a BASIC program. VXREF works with all BASIC programs
written in GW/PC BASIC or BASICA and saved in an ASCII format. VXREF
distinguishs between variables and arrays of the same name, and ignores
type declarations and system variables as legal variables. Each occurrence
of a variable in a line is mentioned once. The list of variables can be
printed on a printer or saved to a disk file.

    CLOCK displays a full clock face on the screen, including second hand,
in real time. The time is taken from DOS upon execution. A menu-based help
function is available to allow sizing and positioning the clock on the
screen, but the default is full-screen size. The source code for the
program is included on this disk.

Usage: DOS Helper / BASIC Utility / Timekeeper

System Requirements: 128K memory, one disk drive and a CGA card for CLOCK.

How to Start: Type: QREF (press enter) to start QREF. Type: VX (press
enter) to start VXREF. Type: CLOCK (press enter) to start CLOCK.

Suggested Registration: $49.00 for QREF, $5.00 for VREF.

File Descriptions:

-------- ---  QREF
QREF     DOS  File containing DOS command descriptions.
READ     ME   Documentation.
QREF     COM  Main program.
-------- ---  VX
VX       EXE  Main program.
VX       DOC  Documentation.
-------- ---  CLOCK
AUTOEXEC BAT  Batch file for starting program.
???????? C    Source code files (14 files).
???????? H    Source code files (2 files).
CLKLINK  BAT  Batch file to compile and link files.
README   DOC  File descriptions.
CLOCK    MAP  Map file produced by LINK.
HANDSGEN BAS  BASIC program to generate hand definition table.
???????? OBJ  Source code files (13 files).
CLOCK    EXE  Main program.
HANDSGEN TAB  Hand definition table generated by HANDSGEN.BAS.
CLKPRINT BAT  Batch file to print out all the "C" program source.
CSYSINT  ASM  Assembly source file.
CSYSINT  LST  Assembly source file.
CLKASM   BAT  Batch file to build all programs.
CLKLKMD  LNK  Links batchfiles.
DIR      DOC  Disk directory.
CLOCK    DOC  Program documentation.
HANDSGEN TAB  Data file used by HANDSGEN.BAS.
CLOCK    MAP  Data file used by CLOCK.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## HANDSGEN.BAS

{% raw %}
```bas
100 REM ******************************************************* HANDSGEN.BAS
101 REM * GENERATES TABLES FOR CLOCK HANDS
110 REM ********************************************************************
200 DEFINT A-Q, S-Z
500 OPEN "E:HANDSGEN.TAB" FOR OUTPUT AS #1
1000 FOR HAND = 0 TO 7
1100 RANGLE = (360/60) * HAND * (3.141593/180)
1150 PRINT #1,TAB(16);"/*--- hand entry #";HAND;" ---*/"
1200 RMULTI = TAN (RANGLE)
1250 POSITION = 0
1300 FOR I = 0 TO 100
1400 POSITION = POSITION + 12
1500 RCOL = 160 + (I * RMULTI)
1700 IROW = 100 - I
1800 ICOL = RCOL
1900 PRINT #1, TAB(POSITION);
2000 PRINT #1, USING "###_,";IROW;ICOL;
2012 PRINT #1, "1,";
2020 IF POSITION < 60 GOTO 2090
2024 PRINT #1," "
2030 POSITION = 0
2090 REM
2900 NEXT I
3100 NEXT HAND
8900 CLOSE #1
9000 END
9999 SAVE "E:HANDSGEN.BAS"
```
{% endraw %}

## VX.DOC

{% raw %}
```


******  V X R E F **** Variables Cross Reference 

..the utility to show all lines where a variable is 
used; for all BASIC programs written in GW/PC Basic 
or BASICA and saved with A-Option ( i.e. as ASCII 
File); can be run on all IBM PCs and clones of low 
compatibility with DOS 2.0 or higher.

Features

VXREF is was compiled by MS Quickbasic (V 2.02), thus 
it is a fast, easy to use utility. It needs a simple 
BASIC source (in ASCII) as input, the neat list is 
created directly on printer or as a print file. 

VXREF is migthier than other programs of that kind, 
the reason why the author made up to it. It avoids 
common errors by this way:
- lines are n o t renumbered, whereas labels are 
   discarded 
- distinction between variables and arrays of same 
   name is made, e.g. A <> A(..)
- type declarations and system variables are ignored
   as legal variables (that means DEFINT A-I,X or 
   ERR, TIME$, EOF do n o t set up A,I,X or 
   ERR,TIME$,EOF in the output list) 
- each occurance of a variable inside a line is men- 
  tionned o n c e and does not blow up references


How to use 

VXREF is evoced by typing "VX", what will start the 
compiled program VXREF . Before it make sure  

- that the BASIC programm to be analysed is on disk as 
  ASCII file
- there is enough work space on standard disk drive 
  for the needed work file ( <= source in length)
- the printer is ready or in case you want a print 
  file theres enough space on disk

After starting you are prompted for the source file's 
name; you can type drive, path etc as far as your DOS 
allows that. This name is used with extension .PRN to 
create a wanted print file. Thats all to pay atten- 
tion for... 

At last one warning - dont break the running VXREF 
(with CNTRL BREAK), it leaves open files on disk !


Files on this disk

VX.EXE          executable file of VXREF
READ.ME         this instructions


********** VXREF is free software, you may copy or 
pass it as long as this remark, the instructions and 
the EXE File VX is completely transmitted. No fees or 
retail costs may be charged except pure distribution 
expenses ********************************************

If you are satisfied and VXREF had been of good use 
for you  send 5 US$ or equivalent in europeen curren- 
cy (no checks) to 
                      W. Kremer
                      Hoffnungsthaler Str 40
                      D - 5064 Roesrath
                      Fed Rep of Germany

As value you will get the latest release, the full 
basic souce code (!), more detailed instructions 
(e.g. how to enlarge VXREF for more commands), an 
example file to see how VXREF works and the autor's
helpline on request. 
 
Copyright by W. Kremer, D-5064 Roesrath
             Release V 1.1 - Sept 3rd 1987
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0875

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT         8  12-22-86  10:17p
    CLKASM   BAT      1408   1-03-87   8:00p
    CLKCLR   C        1280  12-22-86   8:46p
    CLKCLR   OBJ       443   1-03-87   3:46p
    CLKDLY   C         896  12-22-86   9:16p
    CLKFAC   C        6784  12-22-86   8:50p
    CLKFAC   OBJ      1266   1-03-87   3:47p
    CLKGBL   H        4864   1-03-87  11:47p
    CLKHN2   H       16000   1-03-87  11:38p
    CLKHRH   C        1664  10-25-87  12:22p
    CLKHRH   OBJ       460  10-25-87  12:23p
    CLKIMGH  C        5376   1-03-87  11:33p
    CLKIMGH  OBJ      6699   1-03-87  11:44p
    CLKIZN   C        1024   1-03-87   3:39p
    CLKIZN   OBJ       213   1-03-87   3:46p
    CLKKYB   C        4480   1-03-87  11:41p
    CLKKYB   OBJ      1833   1-03-87  11:12p
    CLKLINK  BAT       128  12-09-86  10:18p
    CLKLKMD  LNK       256   1-03-87   8:01p
    CLKMNH   C        1408  12-22-86   9:09p
    CLKMNH   OBJ       346   1-03-87   3:49p
    CLKPNT   C        4480   1-03-87   3:36p
    CLKPNT   OBJ      1566   1-03-87   3:50p
    CLKPRINT BAT       640   1-03-87   8:00p
    CLKSCH   C        1408  12-22-86   9:09p
    CLKSCH   OBJ       318   1-03-87   3:49p
    CLKSIZ   C        1664   1-03-87  11:39p
    CLKSIZ   OBJ       601   1-03-87  11:43p
    CLKTIM   C        1664   1-03-87   3:38p
    CLKTIM   OBJ       584   1-03-87   3:47p
    CLOCK    C        1664   1-03-87   7:59p
    CLOCK    DOC      4224   1-04-87  12:00a
    CLOCK    EXE     24034  10-25-87  12:23p
    CLOCK    MAP       351  10-25-87  12:23p
    CLOCK    OBJ      4830   1-03-87  11:48p
    CSYSINT  ASM      3728   7-29-84   4:07p
    CSYSINT  LST      6853  12-20-86  11:38p
    CSYSINT  OBJ       178  12-20-86  11:38p
    DIR      DOC      2270  10-11-87   1:43p
    FILES875 TXT      3489   5-12-88   3:50p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1233  11-30-87   3:12p
    HANDSGEN BAS       697  12-20-86   8:11p
    HANDSGEN TAB     12055  12-20-86   8:11p
    QREF     COM     29066   2-04-89  12:38p
    QREF     DOS     57656  11-17-86   1:25p
    READ     ME       2854   3-31-88   3:48p
    TEMPLATE C         768   2-11-87   6:23p
    VX       DOC      2854   9-06-87   4:02p
    VX       EXE     46781   3-31-88   3:33p
    _______  ___         4  11-30-87   3:27p
    ________ ___         4  11-30-87   3:25p
           52 file(s)     275392 bytes
                           18432 bytes free
