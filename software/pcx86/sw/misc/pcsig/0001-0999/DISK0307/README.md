---
layout: page
title: "PC-SIG Diskette Library (Disk #307)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0307/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0307"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "ASSEMBLY UTILITIES NO 1"

    The programs on this disk are utilities for hackers or experienced
    programmers.  They do many different things and most are aimed at
    system operations and DOS commands.  Routines include on-screen
    calculator, and a disk drive alignment program.
    
    System Requirements: Optional 8087 co-processor
    
    How to Start: To read DOC or TXT files, enter TYPE filename.ext and
    press <ENTER>.  To run an EXE or COM program, just type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.
    
    File Descriptions:
    
    87ERROR  COM  Handles error calls from optional 8087 math co-processor
    87ERROR  ASM  Assembly source for 87ERROR
    87ERROR  DOC  Documentation for 87ERROR
    ALIGN    BAS  Head alignment program
    87ERROR  OBJ  Part of 87ERROR
    AST-TEST COM  Memory test program
    ASCII    COM  Displays ASCII table on screen
    ANSIKEYS DOC  Documentation for ANSI&2K
    ANSI&2K  SYS  Expands function key buffer by 2k
    SYSTAT   COM  Displays name and comments of each disk drive in system
    SYSTAT   DOC  Documentation for SYSTAT
    TEE      COM  Allows you to see what is being piped in piping commands
    UNDOBKUP BAS  Same as UNDO
    UNDO     BAS  Allows fixed disk users to read backup diskettes
    TESTDRV  BAS  Performs read/write test on drives
    TEE      DOC  Documentation for TEE
    CALC     EXE  On screen calculator
    BDNCHM   TXT  A fast and dirty function accuracy test
    CLEARRO  COM  Clears read only attribute from files
    CIPHER   BAS  A simple encoding and decoding security system
    CORELOOK COM  Takes snapshot of memory core
    CLEARRO  DOC  Docs for CLEARRO
    DEBUG    TXT  A small tutorial about the DEBUG command in DOS
    CURSOR   DOC  Documentation for CURSOR
    CURSOR   COM  Sets maximum size of cursor
    CPMDOSXR DOC  Displays equivelent commands in DOS and CP/M
    DEFRAG   BAS  Unifies a file that is fragmented by repeated use
    DEFRAG   DOC  Documentation for DEFRAG
    DOS-BUG  4E   Reports on bug in DOS 2.1 function calls
    ENVINUSE COM  Sizes environment buffer
    DOS2A    TXT  Information about DOS 2.0 interrupts
    MEMORY   DOC  Docs to explain MEMORY
    MEMORY   COM  Allows dynamic memory switch change
    LOOKMEM  COM  Another memory look program
    KEYS          Optional key assignment list
    ENVXPAND SYS  Expands environment buffer by 1k
    ENVIRO   PAT  Patches COMMAND.COM for larger environement area
    ENVXPAND DOC  Documentation for ENVXPAND
    ENVIRON  DOC  Explains some of the SET command options
    SETVAR   DOC  Documentation for SETVAR
    SETVAR   COM  Allows variables and variations to the set command
    SETRO    DOC  Documentation for SETRO
    SETRO    COM  Sets read only parameter to on
    SETKEY   EXE  Allows user redefinition of keyboard
    SETKEY   DOC  Documentation for SETKEY
    REBOOT   EXE  Software system reboot
    REBOOT   DOC  Brief apologetic note explaining lack of documentation
    QUIKUPQD COM  Part of QUIKUP
    QUIKUP   DOC  Documentation for QUIKUP
    QUIKUP   COM  Faster bootup by use of software memory switches
    PARINT   COM  Parity intercept
    NULLKEYS      Optional key assignment list
    MORERAM  DOC  Docs for MORERAM
    MORERAM  COM  Allows PC to use more RAM then switch sets suggest
    MORERAM  ASM  Assembler source for MORERAM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 87ERROR.ASM

{% raw %}
```
ROM	SEGMENT AT 0F000H		;ROM NMI AT 0F000H:0E2C3H
	ORG	0E2C3H
ROMADR	LABEL	FAR
ROM	ENDS
CODE	SEGMENT	PARA
	ASSUME	CS:CODE,DS:CODE
	ORG	100H		;NEEDED FOR A .COM FILE
START	PROC	FAR
	JMP	DONE		;INSTALL PROGRAM AND RETURN TO DOS
XFER	DW	?		;8087 - 8088 XFER AREA
DISPLAY	DW	0B000H		;START OF DISPLAY SEGMENT
ERROR:	PUSH	AX		;SAVE REGISTERS USED ON USERS STACK
	PUSH	BX
	PUSH	DS
	PUSH	ES
	MOV	AX,CS		;POINT DS AT CS
	MOV	DS,AX
	MOV	ES,DISPLAY	;POINT ES AT START OF DISPLAY MEMORY
	DB	0DBH,0E1H	;DISABLE 8087 INTERRUPT WITH ERROR PENDING
	ESC	2FH,XFER	;CHECK 8087 FOR ERRORS
	DB	9BH,0DBH,0E2H	;CLEAR 8087 EXCEPTION FLAGS
	DB	9BH,0DBH,0E0H	;ENABLE 8087 INTERRUPTS AGAIN
	MOV	BL,BYTE PTR XFER	;GET LOW BYTE WITH EXCEPTION FLAGS
	MOV	AH,70H		;REVERSE VIDEO ATTRIBUTE FOR CHARACTER
	RCR	BL,1D		;GET NEXT ERROR FLAG
	JNC	D		;JUMP IF NO INVALID OPERATION
	MOV	AL,'I'
	MOV	ES:[2*79D],AX	;WRITE ERROR FLAG TO SCREEN
D:	RCR	BL,1D		;GET NEXT ERROR FLAG
	JNC	Z		;JUMP IF NO DENORMALIZED OPERAND
	MOV	AL,'D'
	MOV	ES:[2*78D],AX	;WRITE ERROR FLAG TO SCREEN
Z:	RCR	BL,1D		;GET NEXT ERROR FLAG
	JNC	O		;JUMP IF NO DIVIDE BY ZERO
	MOV	AL,'Z'
	MOV	ES:[2*77D],AX	;WRITE ERROR FLAG TO SCREEN
O:	RCR	BL,1D		;GET NEXT ERROR FLAG
	JNC	U		;JUMP IF NO OVERFLOW
	MOV	AL,'O'
	MOV	ES:[2*76D],AX	;WRITE ERROR FLAG TO SCREEN
U:	RCR	BL,1D		;GET NEXT ERROR FLAG
	JNC	P		;JUMP IF NO UNDERFLOW
	MOV	AL,'U'
	MOV	ES:[2*75D],AX	;WRITE ERROR FLAG TO SCREEN
P:	RCR	BL,1D		;GET NEXT ERROR FLAG
	JNC	EXIT		;JUMP IF NO PRECISION ERROR
	MOV	AL,'P'
	MOV	ES:[2D*154D],AX	;WRITE ERROR FLAG TO SCREEN
EXIT:	POP	ES		;RESTORE REGISTERS USED
	POP	DS
	POP	BX
	POP	AX
	JMP	FAR PTR ROMADR	;JUMP TO NMI IN ROM TO FINISH UP
DONE:	MOV	DX,OFFSET ERROR	;OFFSET OF ERROR CODE
	MOV	AH,25H
	MOV	AL,2H		;NMI
	INT	21H		;MOVE INTERRUPT VECTOR INTO TABLE
	MOV	DX,OFFSET DONE
	INT	27H		;TERMINATE BUT STAY RESIDENT
START	ENDP
CODE	ENDS
	END	START
```
{% endraw %}

## 87ERROR.DOC

{% raw %}
```
	The program 87ERROR.COM is a simple 8087 error interrupt handler for
 the IBM Personal Computer. To install the error handler just run 87ERROR.COM
 from DOS (ver. 1.1, 2.XX). When an error interrupt is generated by the 8087
 a letter in reverse video will appear in the upper right hand corner of the
 monochrome display. The letter will indicate the general type of error which
 caused the 8087 to generate an interrupt as below in the table:

	D --------- Denormalized operand
	Z --------- Divide by zero
	O --------- Overflow
	U --------- Underflow
	P --------- Precision error

	The interrupt pin on the 8087 is connected with the parity checking
 logic on the mother board. Because of this fact the program needs to jump to
 the ROM BIOS just in case the NMI (Non Maskable Interrupt) was generated by a
 parity error and not by the 8087. The address of the jump at the end of the
 interrupt handler "JMP FAR PTR ROMADR" may need to be changed depending on
 what version of the IBM ROM BIOS you have.

	The correct address can be found at 0H:8H to 0H:0BH for the jump to the
 IBM ROM BIOS. The first two memory locations contain the offset and the next
 two memory locations contain the segment address. Change the address on the
 line "ROM	SEGMENT AT 0F000H" to the segment address just found. Then
 change the address on the line "	ORG	0E2C3H" to the offset address
 just found. You can now generate a new 87ERROR.COM file from the new
 87ERROR.ASM source file.

						Leland C. Scott
						18140 Locherbie
						Birmingham, Michigan 48009
						(313) 642-9783

```
{% endraw %}

## ALIGN.BAS

{% raw %}
```bas
5 ON KEY (13) GOSUB 250
6 ON KEY (12) GOSUB 280
7 ON KEY (14) GOSUB 400
8 KEY (14) ON
10 PRINT"I.B.M.DISK DRIVE ALIGNMENT PROGRAM"
16 INPUT "PRESS ENTER TO CONTINUE",A$
20 DOR=&H3F2:SR=&H3F4:FD=&H3F5
30 OUT DOR,32
40 OUT DOR,37
50 OUT FD,3
60 OUT FD,&HCF
70 OUT FD,7:REM RECALIBRATE HEAD
80 OUT FD,1
90 FOR I=1 TO 500:NEXT I
100 PRINT "HEAD HAS NOW RECALIBRATED TO TRACK ZERO"
105 CLS
110 TRK=0
120 PRINT "HEAD IS NOW AT TRACK ";TRK
130 PRINT "PRESS RIGHT ARROW TO STEP IN, PRESS LEFT ARROW TO STEP OUT "
131 PRINT "OR PRESS DOWN ARROW TO RECALIBRATE"
140 KEY (13) ON
150 KEY (12) ON
160 OUT DOR,37
170 LOCATE 1,1
180 GOTO 120
190 END
250 TRK=TRK+1
255 IF TRK>39 THEN BEEP:TRK=39
260 GOSUB 300
265 RETURN
280 TRK=TRK-1
285 IF TRK<0 THEN BEEP:TRK=0
290 GOSUB 300
295 RETURN
300 KEY (13) OFF:KEY (12) OFF
301 OUT DOR,37
305 OUT FD,15
310 OUT FD,1
320 OUT FD,TRK
330 FOR I=1 TO 50:NEXT I
340 RETURN
400 OUT FD,7
410 OUT FD,1
415 TRK=0
420 FOR I=1 TO 500:NEXT I
430 RETURN
```
{% endraw %}

## ANSIKEYS.DOC

{% raw %}
```

	      ANSI&2K.SYS and Function Key Assignments

			    Bob Ketcham

About ANSI.SYS

     One of the more powerful features of DOS 2.0 is the Extended Screen and
Keyboard Control provided by the ANSI.SYS device driver.  Using ANSI.SYS you
can reassign the meaning of any key on the keyboard.


A Bigger ANSI.SYS

     The power of ANSI.SYS is limited by the size of the buffer used to store
keyboard reassignments.  The original buffer size is approximately 200 bytes.
ANSI&2K.SYS is a revised version of ANSI.SYS.  The keyboard reassignment
buffer has been enlarged by 2K (2048 BYTES).


Installing ANSI&2K.SYS: The CONFIG.SYS File

     As stated above, ANSI&2K.SYS is an installable device driver.
Installation of a device driver requires the use of a file called CONFIG.SYS.
The CONFIG.SYS file's function is similar to that of the AUTOEXEC.BAT file.
Like AUTOEXEC.BAT, the system looks for the CONFIG.SYS file on the disk with
which the system is booted (started).  In a manner similar to the way the
system looks for and runs programs listed in the AUTOEXEC.BAT file, the
system looks for and loads device drivers listed in the CONFIG.SYS file.  A
sample CONFIG.SYS file is provided with ANSI&2K.SYS.  It should be copied
(along with ANSI&2K.SYS) to the disk you use to start your system.  When the
machine is reset, ANSI&2K.SYS will be loaded as a device driver.  Note if the
file CONFIG.SYS is not found with this documentation, use an editor to create
a file called CONFIG.SYS containing the line "DEVICE = ANSI&2K.SYS"


Keyboard Reassignment Using The TYPE Command

     The documentation for this feature of DOS 2.0 is found in Chapter 13 of
the DOS manual.  It states "The control sequences defined below are valid
only when issued through DOS function calls 1, 2, 6, and 9, ...".  Simple,
any novice knows what a DOS function call is.  Well, its simpler than that.
Any file which is displayed on the screen using the TYPE command is passed
through one of the required function calls.  A sample file, KEYS is provided
along with this documentation file.  After ANSI&2K.SYS is installed, the DOS
command TYPE KEYS will assign a set of frequently used DOS commands to the
forty combinations of function keys F1-F10, Shift, Ctrl, and Alt.


Assigning and Displaying Function Key Assignments with KEYS

     The file KEYS consists of two primary sections.  The first section
contains the escape control sequences which are used by ANSI&2K.SYS to do the
keyboard reassignments.  When the TYPE command is used to display the file,
this section will be invisible. (The screen will clear and the flicker of the
cursor may be seen, but nothing more.)

     The second section displays the key assignment information to the user.
Note that while cryptic commands may be assigned to the function keys, an
english language translation may be displayed here.


Modifying KEYS - Your Own Custom Keyboard

     An editor is required to modify KEYS.  Three which can be used are
EDLIN, FRED, or VEdit.	Each has its advantages and disadvantages in this
application.

     EDLIN is the DOS line editor provided with your copy of DOS.  That is
its advantage.	If you use it, you will know its disadvantages.

     FRED is the FRee EDitor distributed using the Freeware concept.  In
addition to the advantage of being free, it is friendly, easy to use, and
fast.  It shares two disadvantages with EDLIN; it cannot be used to place the
escape character (BASIC CHR$(27)) in a file, and it always places a carriage
return and line feed at the end of the file.  (KEYS will scroll the top line
off the screen if there is a CR-LF at its end.)  Note: although the Escape
character cannot be inserted into a file with EDLIN or FRED; if it is already
there (as it is in KEYS), the editors's copy functions may be used to move
and duplicate it.

     VEdit is a powerful commercial editor, which can insert the Escape
character into text.  It will allow you to leave the CR-LF sequence off the
end of the last line if desired.  Additionally it is smaller than FRED, so it
is convenient to place on most disks.  However,  many of its command syntaxes
are cryptic.  I would not recommend it to the novice.


What's in KEYS - the ESCape Control Sequences

     KEYS contains ESCape control sequences similar to the examples on page
13-11 of the DOS manual.  Sequences are provided for the forty combinations
of function keys F1-F10, Shift, Ctrl, and Alt.

     Each sequence begins with the escape character.  In the DOS manual this
is shown as "ESC".  Other representaions are:
		- BASIC - CHR$(27)
		- FRED - an arrow pointing left
		- VEdit - ^[ (one character)
		- Hexidecimal - 1B
		- Decimal - 27
		- Keyboard - Esc.

     Following the ESCape character is the left square bracket ([).  Each
control sequence for keyboard reassignment ends with a lower case p.  Between
[ and p are characters which identify the key to be reassigned and the
reassignment to be made.  For example the F1 key is assigned the string "Dir
/p" followed by a carriage return.  The control sequence to do this is:

		ESC[0;59;"Dir /p";13p

where:		represents:

0;59;		the F1 key.  It sends the system two characters when struck;
		A NUL (0) followed by decimal 59.

"Dir /p";       obviously the string "Dir /p".

13		carriage return (decimal 13)

Notice the use of the semicolon as a delimiter.


Getting Back to Normal - NULLKEYS

    Another file of keyboard reassignment control sequences is provided.  The
command TYPE NULLKEYS will return the forty function combinations to their
normal state.


Suggested Use

     When used with a set of batch files, KEYS, ANSI&2K.SYS, and CONFIG.SYS
can provide an excellent Main Menu on a hard disk system.


Additional References:

DOS 2.0 Manual, Chapter 13

PC, Volume 2 Number 1, June 1983, page 423

Softalk, August 1983, page 6

PC, Volume 2 Number 6, November 1983, page 559



```
{% endraw %}

## BDNCHM.TXT

{% raw %}
```
R
FLOATING-POINT BENCHMARK  
 
The following is a program to test the accuracy of floating 
point functions (from Sept. DR DOBBS):  
     10 A=1                
     20 FOR I%=1 TO 2499  
     30   A=TAN(ATN(EXP(LOG(SQR(A*A))))) + 1 
     40 NEXT   
     50 PRINT A  
     60 STOP 
 
The correct printout is A=2500 exactly.                                         
 
IBM-PC BASIC 1.0 fails miserably, giving A=2179.8 (only 1 sig-                  
nificant figure of accuracy!).  In contrast, an APPLE II or                     
Commodore 64 gives 2500 to at least 7 figures. Using the 8087 
with a polyFORTH version of the benchmark, I obtained 2500 to
13 figures in 5.0 seconds. (NOTE: See March,84 D. DOBBS for
the results aginst many systems.)


Press ENTER to continue: 
```
{% endraw %}

## CIPHER.BAS

{% raw %}
```bas
100 DEFINT A-Z
110 INPUT "INPUT  FILENAME? ",INFILE$
120 INPUT "OUTPUT FILENAME? ",OUTFILE$
130 INPUT "ENTER E=ENCRYPT,D=DECRYPT: ",S$
140 S=1:IF S$="D" OR S$="d" THEN S=-1
150 INPUT "ENTER YOUR KEY: ",KY$
160 OPEN INFILE$ FOR INPUT AS #1
170 OPEN OUTFILE$ FOR OUTPUT AS #2
180 KIX=0
190 IF EOF(1) THEN 280
200 C=ASC(INPUT$(1,#1))
210 IF C<&H20 OR C>&H7A THEN 260
220 KIX=KIX+1:IF KIX>LEN(KY$) THEN KIX=1
230 C$=MID$(KY$,KIX,1):C=C+S*ASC(C$)
240 IF C<&H20 THEN C=C+&H5B
250 IF C>&H7A THEN C=C-&H5B
260 PRINT #2,CHR$(C);
270 GOTO 190
280 CLOSE #1
290 CLOSE #2
300 SYSTEM
```
{% endraw %}

## CLEARRO.DOC

{% raw %}
```
                              ClearRO

        The following is produced by entering ClearRO > ClearRO.DOC --

            [ClearRO version 1.00]
            ClearRO clears the Read-Only file attribute.
            It reverses the action of the SetRO utility.
            Wild-cards and pathnames may be used.
            The user is prompted at each file.

            Syntax:
              ClearRO [Path]FileSpec [OptionList]

            OptionList:
             /Terse -Terse Suppress version message
             /Yes   -Yes   Automatic "Yes" response

            Public Domain 1984 by Lewis Haupt
            P.O.Box 25363, Houston, Tx  77265

        PC DOS version 2.00 or greater is required.
        Options may be preceded by "/" or by " -".

        Examples --

            -- Using full directory specifications.
            C> ClearRO C:\DIRA\*.*
            [ClearRO Version 1.00]
            Press Y to clear, N to skip, ESC to stop.

                    Unprotect ABCD.DOC? Yes
                    Unprotect EDGHI.DOC? No
                    Unprotect JKL.DOC? Yes
                    Unprotect MNOP.DOC? Stop

            -- Current disk and directory.
            C> ClearRO *.*
            [ClearRO Version 1.00]
            Press Y to clear, N to skip, ESC to stop.

                    Unprotect ABCD.DOC? Yes
                    Unprotect EDGHI.DOC? No
                    Unprotect JKL.DOC? Yes
                    Unprotect MNOP.DOC? Stop


        Unprotect EDG
```
{% endraw %}

## CPMDOSXR.DOC

{% raw %}
```

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
CPMDOSXR.DOC   09/12/83   T. MCCORMICK	 DOS TO CPM XREF OF FILE FUNCTION
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

   The following is a cross reference of IBM PC DOS commands to their
"equivalent" (more or less) CP/M counterparts.	  This file should be
useful to users familiar with CP/M and CP/M public domain files. Some
of the files referenced ARE NOT public domain, however.
   IBM PC DOS VERSION 2.O (not 1.0 or 1.1) is being referenced, and it
contains many commands and features not available under, or compatable
with, older versions.
   CP/M version 2.xx is being referenced, and I am aware that many of
the public domain and dealer supplied utilities have varying names for
similar programs.  I have made no attempt to present a comprehensive
listing of CP/M filenames for similar functions. The CP/M novice will
have to seek help from experienced CP/M users for that information.
   In some cases, there is no equivalent feature or command, so I have
left a blank to indicate this (or for others to fill in!).

   PC DOS	 CP/M 80
  filename	filename      comment.....................................
------------  ------------  --------------------------------------------
ADDLF	.BAS  FILTER  .COM  ADDS LINE FEEDS TO CARRIAGE RETUN ORPHANS
ASSIGN	      no equiv	    DOS-LEVEL DETOUR FROM ONE DEVICE TO ANOTHER
ASTCLOCK      various	    AST COMBO BOARD DATE/TIME FETCH INTO DOS
AUTOEXEC.BAT  various	    ASCII FILE OF COMMANDS DONE AT COLD BOOT
BACKUP	.COM  ARCHIVE .COM  COPIES (OPTIONALLY) ONLY IF FILE CHANGED
fn	.BAT  fn      .SUB  DOS BATCH FACILITY IS RESIDENT, EXTENSIVE
various       BYE     .COM  DOS VERSIONS (ie HOSTCOMM) ARE PROPRIETARY
BACKUP	.COM		    FROM FIXED DISK TO 1 OR MORE FLOPPIES
			    WORKS WITH "RESTORE" UTILITY. SEE RESTORE.
BACKUP5 .COM		    COPIES SOME "COPY PROTECTED" DISKETTES
BACKUP6 .COM		    COPIES SOME "COPY PROTECTED" DISKETTES
BASRUN	.COM  BRUN    .COM  COMPILED BASIC RUN-TIME MODULE
BREAK=ON		    FORCE DOS TO TEST MORE FREQ.   SEE CONFIG.SYS
BUFFERS=10		    ANY NUMBER FROM 1-99: DEFLT=2. SEE CONFIG.SYS
CAPSLOCK		    FORCE KEYBOARD TO CAPS LOCK ON
CAPTURE .COM  MICROSHELL    REDIRECT OUTPUT FROM PRINTER TO DISK FILE
CATDISK .COM  CAT1 CAT2     BOTH CREATE/MAINTAIN MASTER.CAT
CATLBL	.COM  SAVE 0 B:-XX  PLACES .LBL VOLUME LABELS ON DISKETTES
CATQ	.COM  CAT	    CATQ IS ONE-UP ALPHA
	      CAT-XREF.COM  ONE FILENAME AND MANY VOLUME SERIAL NUMBERS
	      CBBS    .COM  NO KNOWN PC EQUIV AS AN ASSEMBLY LANG SYSTEM
	      CDIR    .COM  COMPARES DIRECTORIES, HIGHLIGHTS DIFFERENCES
CHDIR	      SECTION .COM  CHANGE DIRECTORY (DOS VER 2.0)
CHKDSK	.COM  STAT etc	    CHECKS INTEGRITY, REPORTS SPACE USED/REMAINING
			    ON A PARTICULAR DRIVE/DISKETTE, AND CAN DO SOME
			    FILE RECOVERY WHEN CORRUPT STRINGS ARE FOUND.

CLS	      various	    CLEAR SCREEN
COMMAND .COM  CCP equiv     COMMAND IS LARGER, MORE EXTENSIVE THAN CCP,
			    ...IT IS MORE LIKE MICROSHELL.
			    NOTE: UNLESS COMMAND.COM IS PATCHED, DOS WILL
				  RETURN TO A: TO RE-READ COMMAND.COM IF
				  TRANSIENT PORTION OF COMMAND OVERLAYED
				  BY LAST PROGRAM EXECUTED. VARIOUS
				  PATCHES ARE AVAILABLE TO COMMAND.COM
				  BUT THEY ARE NOT "INTERCHANGEABLE"
				  WITHOUT A COLD BOOT.
COMP	      COMPARE	    COMPARE TWO FILES
CONFIG	.SYS  hot patches   ASCII FILE OF DEVICE DRIVER NAMES, ETC AT BOOT
			    ..this will make CP/M BIOS modifiers drool.
COPY	.COM  PIP     .COM  COPY source.ft destin.ft
	      FILECOPY.COM  SINGLE FILE COPY USING ONE DRIVE
	      MFT     .COM  SELECTED MULTI-FILES USING SINGLE DRIVE
CTRL-BREAK    CONTROL-C     HALT PROGRAM IN PROCESS (USUALLY!) ELSE ON PC
			    COLD BOOT WITH CTRL-ALT-BREAK, ELSE POWER OFF
CTTY AUX      STAT    .COM  CHANGES STD CONSOLE TO AUXILIARY ONE (bye?)
DATE			    BRINGS DISPLAY AND PROMPT. SEE TIME.
DEBUG	.COM  DDT     .COM  VERY SIMILAR SYNTAX (BY DESIGN)
DEL	      ERA	    DEL B:*.BAS.  SEE ALSO DOS VDEL.COM
DIR|SORT/+10		    1-UP DIRECTORY BY FILETYPE. SEE LF.COM.
DIR|SORT/+22  WHATSNEW.COM  1-UP DIRECTORY BY DATE AND TIME.
DISKCOMP.COM  various	    COMPARES TWO DISKETTES FOR EXACTNESS
DISKCOPY.COM  ONECOPY .COM  ENTIRE DISK COPY USING ONE DRIVE
DOSKEY20.BAS		    MENU-DRIVEN UTIL TO CREATE .KEY FILE
			    WHICH CAN BE "TYPE"'D AFTER ANSI.SYS
			    DEVICE INCLUDED IN CONFIG.SYS THUS
			    CONFIGURING PROGRAM FUNCTION KEYS AS
			    DESIRED INCLUDING ENDING "RETURN".
various       DUMP    .COM  
ECHO OFF		    BATCH SUBCOMMAND TOGGLE TO PREVENT
			    COMMAND DISPLAYS DURING BATCH EXEC.
EDLIN	.COM  ED      .COM  EDLIN SIMILAR TO ED; A LINE EDITOR
ERASE afn.ft  ERA afn.ft    SAME AS DEL. SEE DEL and VDEL
EXE2BIN .COM		    PART OF DOS 2.0; CONVERTS .EXE FILES
			    (WHICH HAVE NO SEGMENT FIXUP) TO A 
			    FORM COMPATABLE WITH .COM FILES (WHICH
			    ARE MEMORY IMAGE FILES).
			    SEE PAGE 10-12 FF OF DOS 2.0 MANUAL
FC2	.COM  SWEEP   .COM  (C) DOS 2.0 FILE COMMAND UTILITY FROM IBM
FC2	.COM  WASH    .COM  (C) DOS 2.0 FILE COMMAND UTILITY FROM IBM
FDISK	.COM		    FORMAT FIXED (IBM HARD DISK)
	      FILEFIND.COM  SEARCH EVERYWHERE FOR FILENAME(S)
FIND			    FILTER OF DOS 2.0; NO WILDCARDS
FIND	.COM  FIND    .COM  DOS 2.0
FORMAT	.COM  FORMAT  .COM  CP/M EQUIV MAY ALSO BE KNOWN AS INIT, COPY.

GRAPHICS.COM		    PART OF DOS 2.0 TO ENABLE "MX80" TO
			    DISPLAY GRAPHICS FROM CRT DISPLAYS.
KSTACK	.EXE  XSUB    .COM  PRE-ENTER LIST OF PREDICTABLE RESPONSES
LF	.COM		    6 UP ALPHA FILENAMES SORTED BY FILETYPE
LINK	.COM  LOAD    .COM  SYSTEM LINKER FOR ASM, BASCOM, ETC.
various       LOOK    .COM  SEARCH MEMORY FOR HEX CHAR(S)
MAGIC	.COM  DUU     .COM  DISK PHYSICAL EXAM AND CHANGE AT SECTOR LEVEL
MD			    MAKE DIRECTORY ABBREVIATION FOR MKDIR
MKDIR	      none	    MAKE DIRECTORY (DOS VER 2.0) (MD IS ABBREV)
MODE	.COM		    SEVERAL CP/M PROGRAMS TO SET BAUDRATE, ETC.
MODE COM1:9600,N,8,1,P	    SET COMM PORT 1 9600 BAUD,NO PARITY,8 DATA, 1
MODE LPT1:=COM2:	    ASSIGN SERIAL LINE PRINTER TO 2ND SERIAL PORT
MODEM	.COM  MODEM3  .COM  SINGLE FILE BUT ANY BAUD; WARD C TAILORED IT
	      MODEM7XX.COM  DOS HAS NO MULTI FILE XFER VERSION ...YET
MORE	.COM  READ2   .COM  DISPLAY 24 LINES AND PAUSE
Norton utils  FLAGS   .COM  SET CUSTOM FILE DIRECTORY ATTRIBUTES
Norton utils  UNERA   .COM  UN-ERASE A FILE...SOMETIMES
NUL:			    DUMMY DEVICE FOR TESTING PURPOSES
PATH	      ZCPR partial  PATH C:\DIR1;\DIR2	 searches those dirs
PAUSE			    BATCH FACILITY SUBCOMMAND REQUIRING KEY
			    STRIKING TO PROCEED (IE DISK CHANGE, ETC.)
PCSORT	.COM  various	    PCSORT fn.ft,1,12. PART OF PC-FILE $35.
PC-TALK .COM  SMARTMODEM    300/1200 $35 .BAS XMODEM (SINGLE FILE) COMPAT
|pipes	      I/O-CAP .COM  DOS 2.0 HAS POWERFUL REDIRECTED I/O
|pipes	      MICROSHELL    (c) PROGRAM UNDER CP/M TO REDIRECT I/O
PRINT	.COM  MLIST+DSPOOL  QUEUE AND BACKGROUND PRINT 1 TO 10 FILES.
PROMPT	      patches	    ALTER SYSTEM PROMPT WITH SINGLE COMMAND
			    ..can include date, time, cur dir, drive, etc
RBBS	.BAS  RBBS    .BAS  PUBLIC DOMAIN DERIVED FROM CP/M MBASIC VERSION
RD			    REMOVE DIRECTORY IF ALL FILES DELETED FROM IT;
			    RD IS ABBREV FOR RMDIR. SEE MKDIR AND MD ALSO
RECOVER fn		    PART OF DOS 2.0  RECOVERS INDIVIDUAL FILE
RECOVER B:    UNERA B:*.*   PART OF DOS 2.0  ASSUMES DIR CORRUPT (p6-126)
RENAME	      REN	    RENAME B:OLD.* NEW.* (NOTE WILDCARDS)
RESTORE 		    RESTORES ONE OR MORE FILES DISKETTE TO HARD
			    SEE "BACKUP" FOR MOVING FILES OTHER DIRECTION
RMDIR			    REMOVE DIRECTORY (SEE "RD" ABBREVIATION)

SD	.COM  SD      .COM  DOS VER IS 2 UP; SHOWS DATE/TIME, NOT K USED 
SET			    TO INSERT STRINGS INTO THE COMMAND PROCESSOR'S
			    ENVIRONMENT THUS REDUCING KEYING OR NEAR-SAME
			    COMMANDS IN BAT FILES, ETC.
			    NOTE: GREATEST USE IS TO POINT DOS TOWARD A
			    DISK OTHER THAN A: TO RELOAD COMMAND.COM. 
			    THIS IS READILY DONE IN CONFIG.SYS
SHELL=FN.FT		    SPECIFY REPLACEMENT FOR COMMAND.COM ("ccp")
			    ...SEE CONFIG.SYS (SECT 9 OF DOS 2.0 MANUAL)
SORT			    DOS 2.0 RESIDENT FILTER
SORT	      .COM files    INTEGRAL DOS 2.0 FILTER
SPOOL	.COM  UNSPOOL .COM  DISK TO PRINT
	      SQ      .COM  SQUEEZE UTILITY
	      STAT    .COM  VARIOUS DOS PROGRAMS ie CHKDSK HIDEFILE MODE
STDIN/OUT     XSUB    .COM  PRE-ENTER LIST OF PREDICTABLE INPUT INCL BASIC
SUPERC	.COM		    SUPER FILE COMPARE: SPACES, ETC.
SUPERDRV C:/U=128	    SET UP RAM DISK AFTER RESERVING 128 K USER AREA
SUPERSPL LPT1:=COM2:/RATE=9600,N,8,1/U=128/M=32   32 K PRINT BUFFER IN R
SYS	.COM  SYSGEN  .COM  FUNCTIONS DIFFER SIGNIFICANTLY
			    IBMBIO.COM and IBMDOS.COM HIDDEN FILES ARE
			    MOVED TO SACRED AREA OF FORMATTED DISKETTE
			    SIMILAR TO CP/M "BOOT TRACKS".
			    THESE TWO, PLUS COMMAND.COM, NEEDED TO BOOT
	      MOVCPM  .COM  NO DOS EQUIVALENT
TIME			    BRINGS DISPLAY AND PROMPT. SEE DATE
TREE	.COM		    DISPLAY ALL DIR/SUB-DIR RELATIONSHIPS (FILES)
USQ	.COM  USQ     .COM  UNSQUEEZE UTILITY COMPATABLE WITH CP/M USQ
VERIFY ON		    TOGGLES THIS SYSTEM CALL UNTIL RESET
			    DEFAULT IS OFF. CAN USE IN CONFIG.SYS
			    OR AT SYSTEM PROMPT TO FORCE VERIFICATION
			    OF DISK READS/WRITES
VOL	      various	    DISPLAY VOLUME IDENTIFICATION
  OR AT SYSTEM PROMPT TO FORCE VERIFICATION
			    OF DISK READS/WRITES
VOL	      various	    DISP
```
{% endraw %}

## CURSOR.DOC

{% raw %}
```
                              Cursor

        The following is produced by entering Cursor > Cursor.doc --

            [Cursor version 1.00]
            This program sets the size of the cursor.

            Syntax:  Cursor <start> <stop>

            Mono limits -- 0 (top) to 13 (bottom)
            C/g  limits -- 0 (top) to 7  (bottom)

            Normal mono -- Cursor 11 12
            Normal c/g  -- Cursor 6  7

            Various programs reset the cursor size
            to normal. Others inhibit it altogether.

            Public Domain 1984 by Lewis Haupt
            P.O.Box 25363, Houston, Tx  77265

        Example --
            Cursor 4 9
ublic Domain 1984 by Lewis Haupt
            P.O.Box 25363, Houston, Tx  77265

```
{% endraw %}

## DEFRAG.BAS

{% raw %}
```bas
1000 ' Birk Binnard receives EMAIL at COMPUSERVE #72356,556
1010 '                                RBBS at (213) 410-0714
1020 ' ++++DEFRAG V 1.0 ++++          RBBS at (213) 973-2374
1030 '                                RBBS at (213) 973-4497
1040 DEFINT A-Z:DIM N1$(128),COPY(128,2)
1050 KEY OFF:CLOSE:CLS:BLANKS$=STRING$(60," "):RESTART=0:L$=STRING$(20,205)
1060 ON KEY(1) GOSUB 1200'pick file
1070 ON KEY(2) GOSUB 1400'restart
1080 ON KEY(3) GOSUB 1270'copy files
1090 ON KEY(7) GOSUB 1420'delete files
1100 ON KEY(9) GOSUB 1520'DOS command
1110 ON KEY (10) GOSUB 1380'end
1120 ON KEY (11) GOSUB 1580'up
1130 ON KEY (12) GOSUB 1600'left
1140 ON KEY (13) GOSUB 1620'right
1150 ON KEY (14) GOSUB 1640'down
1160 FOR I=1 TO 10:KEY I,"":NEXT
1170 KEY 1,"PICK":KEY 2,"RESTRT":KEY 3,"COPY":KEY 7,"DELETE":KEY 9,"COMAND"
1180 KEY 10,"END":GOTO 1670
1190 '
1200 NOW=NOW+1:IF INDEX>=0 AND NOW<=NFIL THEN 1210 ELSE 1220'pick file
1210 IF COPY(INDEX,2)<0 THEN 1230
1220 NOW=NOW-1:BEEP:RETURN 2090
1230 COPY(NOW,1)=INDEX:COPY(INDEX,2)=NOW:SCOL=POS(0)-2
1240 LOCATE ROW,SCOL:COLOR 12:PRINT USING "###";NOW;:COLOR 7:COL=SCOL
1250 LOCATE ROW,COL:RETURN 2090
1260 '
1270 LOCATE MAXROW+4,1:PRINT"You have selected ";NOW;"of";NFIL;"files."
1280 LOCATE MAXROW+6,1:PRINT "Do you want to do the Copy operation? (y/n) -->";
1290 X$=INPUT$(1):PRINT X$:IF INSTR("Yy",X$)>0 THEN 1310
1300 LOCATE MAXROW+3,1:PRINT BLANKS$:LOCATE MAXROW+5,1:PRINT BLANKS$:GOTO 1360
1310 KEY OFF:GOSUB 2260:FOR I=1 TO NOW
1320    LOCATE 3,10
1330    PRINT"Copying file "+N1$(COPY(I,1))+" from "+SD$+" to "+TD$+"      "
1340    CMD$="copy "+SD$+N1$(COPY(I,1))+" "+TD$:GOSUB 2210
1350 NEXT
1360 N=0:ROW=MINROW:COL=1:RETURN 2010
1370 '
1380 RETURN 2130'end program
1390 '
1400 CLS:RESTART=-1:CLOSE:KILL DIRFIL$:RETURN 1740'restart
1410 '
1420 LOCATE MAXROW+4,1:PRINT "You have selected";NOW;"files to DELETE."
1430 LOCATE MAXROW+6,1:PRINT"Do you want to do the Delete operation (y/n)?-->";
1440 X$=INPUT$(1):PRINT X$:IF INSTR("Yy",X$)>0 THEN 1460
1450 LOCATE MAXROW+3,1:PRINT BLANKS$:LOCATE MAXROW+5,1:PRINT BLANKS$:GOTO 1500
1460 KEY OFF:GOSUB 2260:FOR I=1 TO NOW'delete files
1470    LOCATE 3,10:PRINT"Deleting file "+N1$(COPY(I,1))+" from "+SD$+"      "
1480    KILL SD$+N1$(COPY(I,1))
1490 NEXT
1500 CLOSE:KILL DIRFIL$:RETURN 1880
1510 '
1520 GOSUB 2260:LOCATE 3,10'DOS command
1530 INPUT "Enter DOS command -->",CMD$
1540 CLS:KEY OFF:GOSUB 2210:COLOR 12
1550 LOCATE 25,1,1,0,13:PRINT"Press any key to continue -->";:X$=INPUT$(1)
1560 COLOR 7:GOSUB 2260:CLOSE:KILL DIRFIL$:RETURN 1880
1570 '
1580 ROW=ROW-1:IF ROW<MINROW THEN ROW=MAXROW
1590 RETURN 2090
1600 COL=COL-16:IF COL<1 THEN COL=65
1610 RETURN 2090
1620 COL=COL+16:IF COL>80 THEN COL=1
1630 RETURN 2090
1640 ROW=ROW+1:IF ROW>MAXROW THEN ROW=MINROW
1650 RETURN 2090
1660 '
1670 KEY(1) ON:KEY(2) ON:KEY(3) ON:KEY(7) ON:FOR I=9 TO 14:KEY(I) ON:NEXT
1680 GOSUB 2260:MINROW=4
1690 LOCATE 4,10:PRINT"Enter work (RAM) Drive letter (no colon)-->";:LOCATE ,,1
1700 RD$="a:":D$=INPUT$(1):PRINT D$;:D=ASC(D$):IF D=13 THEN 1740
1710 IF D<97 THEN D=D+32
1720 IF D<97 OR D>100 THEN BEEP: GOTO 1690
1730 RD$=D$+":"'   RAM disk
1740 LOCATE 6,10:PRINT"Enter Source Drive letter (no colon)-->";:LOCATE ,,1
1750 D$=INPUT$(1):PRINT D$;:D=ASC(D$):IF D<97 THEN D=D+3
1760 IF D<97 OR D>100 THEN BEEP: GOTO 1740
1770 SD$=D$+":"'   source drive
1780 LOCATE 8,10:PRINT"Enter Target Drive letter (no colon)-->";:LOCATE ,,1
1790 D$=INPUT$(1):PRINT D$;:D=ASC(D$):IF D<97 THEN D=D+32
1800 IF D<97 OR D>100 THEN BEEP: GOTO 1780
1810 TD$=D$+":"'   target drive
1820 IF RESTART OR RD$="a:" THEN 1880
1830 PRINT:PRINT:PRINT TAB(10);
1840 PRINT"Copying COMMAND.COM and SORT.EXE to work (RAM) disk."
1850 CMD$="copy a:command.com "+RD$:GOSUB 2210
1860 ENVIRON "COMSPEC="+RD$+"\COMMAND.COM"'  use command.com on ram disk
1870 CMD$="copy a:sort.exe "+RD$:GOSUB 2210
1880 DIRFIL$=RD$+"dir.dat":NOW=0
1890 FOR I=1 TO 128:COPY(I,1)=-1:COPY(I,2)=-1:NEXT
1900 PRINT:PRINT TAB(10);
1910 PRINT"Reading and sorting directory entries for disk in drive "+SD$
1920 CMD$="dir "+SD$+"|"+RD$+"sort|"+RD$+"sort/+10>"+DIRFIL$:GOSUB 2210
1930 OPEN DIRFIL$ FOR INPUT AS #1
1940 PRINT:FOR I=1 TO 4:INPUT#1,A$:NEXT:NFIL=0' discard header lines
1950 IF EOF(1) THEN 1990 ELSE INPUT#1,A$:NFIL=NFIL+1:MID$(A$,9)="."
1960 N=INSTR(9,A$," "):IF N=10 THEN MID$(A$,9)=" "
1970 N=INSTR(1,A$," "):IF N>8 THEN 1980 ELSE A$=LEFT$(A$,N-1)+MID$(A$,9,4)
1980 N1$(NFIL)=LEFT$(A$,12):GOTO 1950
1990 NFIL=NFIL-2:N=0:COL=1:ROW=MINROW:IF NFIL>0 THEN 2010
2000 CLS:PRINT"The disk in drive "+SD$+" has no standard files.":GOTO 2100
2010 GOSUB 2260:PRINT "The files on drive "+SD$+" are:"
2020 N=N+1:LOCATE ROW,COL
2030 COLOR 12:IF COPY(N,2)<0 THEN PRINT "   "; ELSE PRINT USING"###";COPY(N,2);
2040 COLOR 7:PRINT CHR$(27)+N1$(N);
2050 COL=COL+16:IF COL>80 THEN ROW=ROW+1:COL=1
2060 IF N<NFIL THEN 2020 ELSE IF COL=1 THEN ROW=ROW-1
2070 MAXROW=ROW:ROW=MINROW:COL=1
2080 PRINT:PRINT:PRINT"There are";NFIL;"files on the disk in drive ";SD$;
2090 INDEX=(ROW-MINROW)*5+(COL+15)/16:IF INDEX>NFIL THEN INDEX=-1
2100 KEY ON:LOCATE ROW,COL+2,1,0,13
2110 GOTO 2110'loop waiting for fkey interrupt
2120 '
2130 CLOSE #1:KILL DIRFIL$:IF RD$="a:" THEN 2190
2140 KILL RD$+"sort.exe":KILL RD$+"command.com"
2150 ENVIRON "COMSPEC=A:\COMMAND.COM"'  use command.com on drive a
2160 KEY OFF:KEY 1,"LIST ":KEY 2,"RUN"+CHR$(13):KEY 3,"LOAD"+CHR$(34)
2170 KEY 4,"SAVE"+CHR$(34):KEY 5,"FILES":KEY 6,"SYSTEM":KEY 7,"EDIT "
2180 KEY 8,"CLS"+CHR$(13):KEY 9,"KEY ":KEY 10,"RENUM "
2190 GOSUB 2260:LOCATE 3,1,1,11,12:PRINT"DEFRAG ended.":KEY ON:PRINT:END
2200 '
2210 T1=PEEK(&H30):T2=PEEK(&H31)'execute shell for cmd$
2220 SHELL CMD$
2230 POKE &H30,T1:POKE &H31,T2
2240 RETURN
2250 '
2260 CLS:COLOR 14:PRINT TAB(10);L$;" D E F R A G ";L$:COLOR 7:RETURN
```
{% endraw %}

## DEFRAG.DOC

{% raw %}
```
			 === D E F R A G ===



SYSTEM REQUIREMENTS

DEFRAG requires BASICA and PC-DOS 2.0.	It may work on other IBM-PC lookalikes,
but other hardware/software combinations have not been tested.

OVERVIEW

DEFRAG was written to facilitate de-fragmenting PC-DOS diskettes.  If you are
continuously modifying the files on a diskette it does not take long for the
files on the diskette to become `fragmented', i. e., the files will consist of
several groups of non-contiguous tracks and/or sectors.  This `fragmentation'
of allocated space causes two problems: (1) Existing files take much longer to
load because of excessive disk drive head movement across multiple tracks, and
(2) New files get allocated in non-contiguous blocks because of `fragmented'
free space on the diskette.  Thus, the fragmentation problem tends to become
self propogating.

The DOS Manual recommends using COPY *.* to copy all the files on a fragmented
diskette to a new one.	Doing this will `collect' all the non-contiguous parts
of each file into one single block on the target (new) diskette.  However,
COPY *.* copies the files in the order they appear in the source diskette
directory -- and this may not be the order you want them in.  For instance,
it is best to have frequently used files first on the diskette so they can be
close to the diskette directory.  This way disk arm movement is minimized when
these frequently used files are accessed.

DEFRAG overcomes this problem by providing the following capabilities:
	1. Full screen display of all files in the directory sorted
	   alphabetically.
	2. The ability to select, via the cursor control keys, any
	   or all of the files on the diskette in any order.
	3. Automatic invocation of the DOS COPY utility to copy the
	   files in the order selected.
In addition, DEFRAG allows:
	4. The ability to delete selected files.
	5. The ability to invoke any DOS command without leaving
	   the program.

METHOD OF OPERATION

DEFRAG uses the SHELL command to read directories, sort their contents, copy
files, and invoke DOS commands.  It uses Function Key interrupt processing
to read the various Function Keys and Cursor Control Keys.  These are all
BASICA/DOS 2.0 capabilities.

When DEFRAG starts it requests input of three disk drive identifiers:
	Work (RAM) drive: this is where DEFRAG will place the sorted
			  directory contents.  If you have RAM drive
			  DEFRAG will copy COMMAND.COM and SORT.EXE
			  there; this greatly speeds up execution.
	Source drive: this is the drive containing the diskette that
		      DEFRAG is to copy from.  Nothing is written by
		      DEFRAG to this diskette.	Files selected for


Peninsula Software - 28510 Blythewood Drive - Rancho Palos Verdes CA - 90274



			 === D E F R A G ===


		      deletion are deleted from the source disk, not
		      the target disk.	Deletion normally takes place
		      after copying.
	Target drive: this is the drive containing the diskette DEFRAG
		      is to copy to; i. e., files will be copied from
		      the source disk to the target disk.

The Function Keys are used as follows:

F1: select a file for copy or delete
F2: restart DEFRAG allowing new source/target disk specifications
F3: copy all selected files from source disk to target disk
F7: delete all selected files from source disk
F9: allow input of any DOS command, then perform it
F10: end DEFRAG and return to BASIC (not DOS)
Arrow (cursor control) keys: move cursor around display of files to allow
			     individual files to be selected by F1

RESTRICTIONS/LIMITATIONS

1. DEFRAG does not handle sub-directories.
2. DEFRAG assumes SORT.EXE and COMMAND.COM are on Drive a:
3. If you respond other than a: to the location of the work (RAM) drive,
   DEFRAG copies SORT.EXE and COMMAND.COM there and then patches DOS to
   use those files instead of the ones on drive a:.  This occurs only if
   the work (RAM) drive is specified as being different from drive a:.
   Note that DEFRAG will reset DOS to use COMMAND.COM on drive a: when
   it ends, and it will delete all files it created from the work (RAM)
   drive.  DEFRAG must be allowed to end normally, i. e., by F10, if this
   `cleanup' is to occur.
4. F9 allows you to invoke any DOS command.  This can be dangerous.  You
   cannot execute BASIC however, since only one copy of BASIC (actually
   BASICA) can be functioning at one time.  Remember that any DOS command
   you invoke will end up returning to DEFRAG, not to DOS, so don't do
   things like deleting DEFRAG's work or PIPE files.
5. DEFRAG resets all 10 function keys when it ends.  These specifications
   can be easily changed if you prefer different assignments.

COMMENTS/SUGGESTIONS

Please direct comments and/or suggestions to the author via the U. S. Mail
or to the Compuserve user ID #72356,556.














Peninsula Software - 28510 Blythewood Drive - Rancho Palos Verdes CA - 90274

```
{% endraw %}

## DOS2A.TXT

{% raw %}
```
Here's some more information on DOS 2.0 interrupts:

    The DOS critical section flag may be interrogated from
    within an interrupt handler before requesting DOS
    services:

	  MOV AH,34h
	  INT 21h

    returns in ES:BX the address of a byte indicating (when
    set) that DOS is in an uninterruptible state, and no DOS
    calls should be made.



To access DOS' PRINT capabilities:

	  MOV AH,func
	  INT 2Fh

     where:

	  AH = 0    adds the file specified by DS:DX to the
		    print queue.  DS:DX must point to valid
		    opened FCB.

	  AH = 1    cancels the file indicated by DS:DX.
		    DS:DX must point to an FCB, opened or
		    unopened.  The drive byte must not be 0.
		    Wildcards are restricted: ? is okay, *
		    isn't.

	  AH > 1    do nothing.

     Return with registers set as follows:

		    DS,SI,DI,CX preserved, all others destroyed.
		    AH = number of files currently in queue.
		    AL = for AH=0, return 1 if queue was
			 full.	For all other cases, return 0.
		    ES:BX = pointer to list of 10 FCBs in
			 queue, 38 bytes/FCB.  If the first
			 byte of an FCB is -1, that FCB is
			 unused.

		    ES:DX = pointer to currently printing
			 FCB.  If the queue is empty, DX = -1.


```
{% endraw %}

## ENVXPAND.DOC

{% raw %}
```

                 ENVXPAND: Expand your ENVIRONMENT to 1K


        DOS 2.0 and later releases give you and your programs the means to
communicate through ENVIRONMENT strings, but no way to expand the rather
cramped space originally allotted for the purpose.  Since PATH, COMSPEC and
any prompt you may set all go there, you quickly run out.

        ENVXPAND provides a way of expanding your environment to 1024
bytes, which should give you plenty of space for most uses.  The original
DOS strings take up less than an eighth of this space.

        Thus you have plenty of space for a long path statement -- or for
a complicated prompt string (see the ANSI.SYS writeup for possibilities)
-- or to make use of the new environment functions of BASIC 3.0.

        As a side benefit, ENVXPAND gives you a large keyboard buffer, too.

        To use ENVXPAND, just follow these two easy steps:

        Step 1: Add the following line to your CONFIG.SYS file:

                        DEVICE=ENVXPAND.SYS

        This line should be the first one in your CONFIG.SYS file, ahead
of any other installed devices or programs.

        Step 2: Rename your AUTOEXEC.BAT file on that disk or diskette to
AUTOEXEK.BAT.

        Next time you boot from that disk or diskette, the system will
expand your ENVIRONMENT string space to 1K.  It does this by adding
place-holder strings PH0 through PH9 to your ENVIRONMENT through the SET
command and then removing them.  (You cannot do this from a BAT file and
it is tedious to do it from the keyboard every time you boot.)  Finally,
ENVXPAND runs your AUTOEXEK.BAT file just as DOS runs your AUTOEXEC.BAT file
under normal circumstances.

        That's all there is to it.  There are no co-residence problems because
no new programs or interrupt handlers have been added to your system, only
environment and keyboard buffer space.

        Also included is the program ENVINUSE.COM.  It will tell you how much
of your ENVIRONMENT space is in use, including the null (00) delimiters of
the strings.  You will find that you can fill up the environment with up
to 1,024 bytes (that's hex 400) after booting with ENVXPAND.

        If you are an individual computer user and find this program useful,
feel free to copy it for friends or upload it for free downloading on
bulletin boards.  Those wishing to distribute my copyrighted program in
connection with or for use with their own products should contact me
at the address below.

        If you find this copyrighted program useful, please help me repay
my company for the time I spent conceiving and developing it through a
guilt-free contribution ($2-$5 suggested for a single machine) to:

                SAUL EHRMANN
                1310 College Avenue, #1275
                Boulder, Colorado, 80302

        I'm trying to sell my company on using the "shareware" concept for
providing such programs to the public, since they cannot be economically
sold through the normal software distribution channels.  Please help me make
my case by contributing if you find ENVXPAND useful.  I'd also like to
hear of any problems or comments, whether or not you choose to contribute.

```
{% endraw %}

## FILES307.TXT

{% raw %}
```
----------------------------------------------------------------------------
Disk No 307   Assembly Utilities                                     v1.1
----------------------------------------------------------------------------
The programs on this disk are utilities for the hacker or experienced
programmer.  They do many different things and most are aimed at
system operations and DOS commands.
 
87ERROR  ASM  Assembly source for 87ERROR
87ERROR  COM  Handles error calls from optional 8087 math co-processor
87ERROR  DOC  Documentation for 87ERROR
87ERROR  OBJ  Part of 87ERROR
ALIGN    BAS  Head alignment program
ANSI&2K  SYS  Expands function key buffer by 2k
ANSIKEYS DOC  Documentation for ANSI&2K
ASCII    COM  Displays ASCII table on screen
AST-TEST COM  Memory test program
BDNCHM   TXT  A fast and dirty function accuracy test
CALC     EXE  On screen calculator
CIPHER   BAS  A simple encoding and decoding security system
CLEARRO  COM  Clears read only attribute from files
CLEARRO  DOC  Docs for CLEARRO
CORELOOK COM  Takes snapshot of memory core
CPMDOSXR DOC  Displays equivelent commands in DOS and CP/M
CURSOR   COM  Sets maximum size of cursor
CURSOR   DOC  Documentation for CURSOR
DEBUG    TXT  A small tutorial about the DEBUG command in DOS
DEFRAG   BAS  Unifies a file that is fragmented by repeated use
DEFRAG   DOC  Documentation for DEFRAG
DOS-BUG  4E   Reports on bug in DOS 2.1 function calls
DOS2A    TXT  Information about DOS 2.0 interrupts
ENVINUSE COM  Sizes environment buffer
ENVIRO   PAT  Patches COMMAND.COM for larger environement area
ENVIRON  DOC  Explains some of the SET command options
ENVXPAND DOC  Documentation for ENVXPAND
ENVXPAND SYS  Expands environment buffer by 1k
KEYS          Optional key assignment list
LOOKMEM  COM  Another memory look program
MEMORY   COM  Allows dynamic memory switch change
MEMORY   DOC  Docs to explain MEMORY
MORERAM  ASM  Assembler source for MORERAM
MORERAM  COM  Allows PC to use more RAM then switch sets suggest
MORERAM  DOC  Docs for MORERAM
NULLKEYS      Optional key assignment list
PARINT   COM  Parrity error intercept
QUIKUP   COM  Faster bootup by use of software memory switches
QUIKUP   DOC  Documentation for QUIKUP
QUIKUPQD COM  Part of QUIKUP
REBOOT   DOC  Brief apologetic note explaining lack of documentation
REBOOT   EXE  Software system reboot
SETKEY   DOC  Documentation for SETKEY
SETKEY   EXE  Allows user redefinition of keyboard
SETRO    COM  Sets read only parameter to on
SETRO    DOC  Documentation for SETRO
SETVAR   COM  Allows variables and variations to the set command
SETVAR   DOC  Documentation for SETVAR
SYSTAT   COM  Displays name and comments of each disk drive in system
SYSTAT   DOC  Documentation for SYSTAT
TEE      COM  Allows you to see what is being piped in piping commands
TEE      DOC  Documentation for TEE
TESTDRV  BAS  Performs read/write test on drives
UNDO     BAS  Allows fixed disk users to read backup diskettes
UNDOBKUP BAS  Same as UNDO
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## MEMORY.DOC

{% raw %}
```
			MEMORY DOCUMENTATION
			====================

VERSION 1.01   8 NOV 1982    (C)  MICROLIFE, INC.  (301) 799-5509


Memory is a utility to allow dynamic setting/resetting of the amount

of memory used by DOS.	The major advantage is that the system switches

can be set to anything your heart desires, with the knowledge that you

should not have to open up the PC to set switches while using MEMORY.

For example, some games (like ZORK and Adventure) seem to require a

maximum of 320K, the switches can be set for the 128K and then MEMORY

can be run to set DOS for larger amounts or smaller amounts of memory

as required.  MEMORY can be used in batch files or simply run from the

system prompt to set DOS memory size from 64K (lowest switch setting)

up to 640K.  More specific parameter information is as follows:

MEMORY		Restores DOS memory size to what it was prior to
		running MEMORY.  Follow the example below:

		Step 1	MEMORY 3	Sets DOS to 192K
		Step 2	MEMORY 5	Sets DOS to 320K
		Step 3	MEMORY		Restores DOS to 192K

MEMORY 0	Forces DOS read the value of the switches on the
		motherboard.

MEMORY N	(Where N can be a decimal number from 1 to 10).  Installs
		N times 64K of memory to DOS.  That is, assuming N was 7,
		7 * 64K = 448K.  A very important note here is that the
		DOS can now be set to beyond the value of the switches
		(544K Maximum) to 640K !!


An example of MEMORY used in an Autoexec file:

Commands		Description of each command
.............................................................................

PWRUPCLK		Sets the System time equal to the Quadboard time
MEMORY 9		Sets DOS memory size to 9 * 64K =  576K !!!
RAMDISK 10/A		Creates a Ramdisk of size 10 * 32K = 320K
COPY *.* D:		Copies all of Drive A: to Drive B:
D:			Logs onto Drive D:
CHKDSK			Checks the Disk Parameters

............................................................................






Special Notes:

1. MEMORY resets the system when run, except in the cases of bad para-
   meters entered or when the same command is run more than once.
2. MEMORY will only install up to the available RAM present*I^ the system.
   For example, you have 320K in the system, a command like MEMORY 6 would
   result in an error and no change from the present memory size.
3. The QD Ramdisk software provided with the Quadboard reads the memory
   size from the switches on the motherboard, not what DOS thinks it has.
   By doing so, the maximum size of memory under the Ramdisk (reading
   the switches) is 544K bytes.


```
{% endraw %}

## MORERAM.ASM

{% raw %}
```
title	moreram 12-16-83	[12-16-83]
;-------------------------------------------------------------------------------
; MORERAM.COM - by Daniel M. O'Brien (v 1.0) 21 Dec 1983
;
;	      - freely adapted from a PC-WORLD User-to-User column program
;		of the same name (object disassembled using ASMGEN) and from
;		a program shown in a DR. DOBBS Journal article
;		(Socha's 16 bit Toolkit) called MEMSIZE.
;
; This program has two (or three) purposes.
;
;	1) Allow a PC to use more memory than is allowed via the motherboard
;	memory switches (544 K bytes for the 64K motherboard and 640 K bytes
;	for the newer 256K motherboard). And because of 1)...
;
;	2) Allow faster power-up sequence by setting the motherboard memory
;	switch settings to 64 K bytes installed.
;
;	And as long as we are in the neighborhood...
;
;	3) Patch the ROM BIOS data area to indicate that this PC has four
;	floppy diskettes installed (instead of the normal two). This is for
;	ram disk emulation programs that require the motherboard equipment
;	options switch to be set to include the number of ram disks.
;	This is most notably required by the AST RESEARCH ramdisk program
;	called SUPERDRV. This code is commented out. To use it you must
;	uncomment out the code and reassemble. Search for the string:
;
;			;stub***
;
; Using MORERAM.
;
;	First, copy MORERAM.COM to your boot device (floppy or fixed).
;	Next, create or edit your AUTOEXEC.BAT file found on your
;	boot device to include MORERAM as the **FIRST** program that
;	will be executed. This is important as results are not guaranteed
;	if MORERAM is not the first command executed at boot time.
;	Next, open the covers of your PC and set the memory switches
;	to indicate that your PC only has 64K.
;
;	Now try rebooting your PC using the Alt-Ctrl-Del sequence.
;
;	MORERAM will first display a hello banner and the amount of
;	memory DOS thinks your PC has (should be 64K). Next, MORERAM
;	will pause a second or two while it determines how much memory
;	your PC really has. (It also clears this memory in the process
;	to eliminate PARITY 2 errors later).
;	Once the physical memory limit is determined, MORERAM will display
;	that amount and then automatically re-boot. (Don't get excited,
;	this won't loop indefinitely, because...) The next time MORERAM
;	is again executed from your AUTOEXEC.BAT it will find that the amount
;	of memory DOS thinks you have will be the same as that installed, and
;	a reboot will be avoided!
;
; I use this program on my PC that has 576K (64K + 512K) worth of memory.
; Also, I have successfully tested it with 704K (64K + 512K + 128K) of memory,
; but this requires placing memory into the semi-forbidden zone (segment A000)
; designated by IBM as "reserved". But that's ok, as long as you don't install
; memory beyond this into the B000 segment where monochrome and graphics display
; memory live!
;
; Questions or comments should be left for me (DAN OBRIEN) on Gene Plantz'
; BBS in Chicago, IL (312-882-4227). I will attempt to fix bugs that may
; crop up, but I make no guarantees. You use this at your own risk (just like
; I do!). If you break something valuable, it's your own fault.
;
;-------------------------------------------------------------------------------


lf	equ	0ah
cr	equ	0dh
;
;initial values :	cs:ip	0000:0100
;			ss:sp	0000:ffff

s0000	segment
	assume ds:s0000, ss:s0000 ,cs:s0000 ,es:s0000
	org	$+0100h

start:	jmp	begin

hello	db	"MORE RAM than switches (v 1.0) "
	db	"by Daniel M. O'Brien (21 Dec 1983)",cr,lf,'$'
inmem	db	" Current memory is $"
kbytes	db	" K bytes. $"
findmem db	cr,lf," Physical memory is $"
analyze db	" Analyzing & Clearing...$"
reboot	db	" Re-Booting...",cr,lf,'$'
done	db	cr,lf," Memory size is set correctly.",cr,lf,'$'

begin:
	mov	dx,offset hello 	; say hello
	mov	ah,9
	int	21h

	mov	dx,offset inmem 	; how much memory?
	mov	ah,9
	int	21h

	mov	ax,ds:2 	; get top segment number from program prefix

	push	ds		; save ds for later

	push	ax		; save top segment number for later
	mov	cl,6		; convert to K bytes
	shr	ax,cl
	call	decout		; and display

	mov	dx,offset kbytes	; display "K bytes"
	mov	ah,9
	int	21h

	mov	dx,offset analyze	; display analyzing message
	mov	ah,9
	int	21h

	xor	ax,ax		; stop parity errors while we poke around
	out	0a0h,al

	pop	ax		; recover top segment number

loop:	mov	bx,0		; look into this 16 byte "segment"
;	cmp	ax,0a000h	; is ax = beginning of "reserved" addrs?
				; stop at display memory instead!
	cmp	ax,0b000h	; is ax = beginning of "reserved" addrs?
	je	ramend		; yes, so end of ram
	mov	ds,ax		; no, so use this as segment
	mov	[bx],ax 	; write contents of ax to ds:bx...
	mov	cx,[bx] 	;... and read it back to cx
	cmp	ax,cx		; does data read = data written?
	jne	ramend		; if it not, then ran out of ram!

	mov	cx,8		;    else - reset this 16 byte area
	mov	es,ax
	xor	ax,ax		;      reset means 0000h
	xor	di,di
	rep	stosw		;    to prevent parity errors when used

	mov	ax,ds		; copy ds to ax...
	inc	ax		;... increment it...
	jmp	loop		;... and loop

ramend:
	mov	bx,ax		; found real end of ram - save it

	mov	al,80h		; enable parity errors for the future
	out	0a0h,al

	mov	ax,bx		; convert segments to K bytes
	mov	cl,6
	shr	ax,cl

	mov	bx,40h		; point to bios data area
	mov	ds,bx
	mov	bx,13h		; and to memory size word in particular

	cmp	[bx],ax 	; same size?
	je	exit		; yes-then we must have done this before

	mov	[bx],ax 	; else - update and
	push	ax

; remove comments to patch equipment flag to indicate 4 floppies attached.
; especially useful for AST RESEARCH's SUPERDRV.

;stub** mov	bx,10h		; point to equipment flag
;stub** mov	ax,[bx] 	; get equipment flag
;stub** or	ax,00c0h	; set installed floppy count to 4
;stub** mov	[bx],ax 	; and restore to proper spot

	pop	ax		; get ds back but save ax on stack
	pop	ds
	push	ax

	mov	dx,offset findmem	; tell how much memory we found
	mov	ah,9
	int	21h

	pop	ax		; get K byte count
	call	decout

	mov	dx,offset kbytes
	mov	ah,9
	int	21h

	mov	dx,offset reboot	; tell them about reboot
	mov	ah,9
	int	21h

	int	19h		; re-boot

exit:
	pop	ds
	mov	dx,offset done
	mov	ah,9
	int	21h

	int	20h		; exit to dos


; quick and probably dirty - display decimal in ax routine

decout:
	push	ax
	push	bx
	push	cx
	push	dx

	xor	cx,cx		;counter of digits
	mov	bx,10		;divide by 10 for conversion

decimal$loop:
	xor	dx,dx		;clear for divide
	div	bx		;get remainder and quotient
	add	dx,'00'         ;make remainder ascii
	push	dx		;save it
	inc	cx		;and count it
	or	ax,ax		;out of digits?
	jnz	decimal$loop	;no-loop on the decimal

decimal$out:
	pop	dx		;get digit
	mov	ah,2		;print digit
	int	21h
	loop	decimal$out	;and loop

	pop	dx
	pop	cx
	pop	bx
	pop	ax
	ret

s0000	ends

	end	start
```
{% endraw %}

## MORERAM.DOC

{% raw %}
```

title	moreram 12-16-83	[12-16-83]
;-------------------------------------------------------------------------------
; MORERAM.COM - by Daniel M. O'Brien (v 1.0) 21 Dec 1983
;
;	      - freely adapted from a PC-WORLD User-to-User column program
;		of the same name (object disassembled using ASMGEN) and from
;		a program shown in a DR. DOBBS Journal article
;		(Socha's 16 bit Toolkit) called MEMSIZE.
;
; This program has two (or three) purposes.
;
;	1) Allow a PC to use more memory than is allowed via the motherboard
;	memory switches (544 K bytes for the 64K motherboard and 640 K bytes
;	for the newer 256K motherboard). And because of 1)...
;
;	2) Allow faster power-up sequence by setting the motherboard memory
;	switch settings to 64 K bytes installed.
;
;	And as long as we are in the neighborhood...
;
;	3) Patch the ROM BIOS data area to indicate that this PC has four
;	floppy diskettes installed (instead of the normal two). This is for
;	ram disk emulation programs that require the motherboard equipment
;	options switch to be set to include the number of ram disks.
;	This is most notably required by the AST RESEARCH ramdisk program
;	called SUPERDRV. This code is commented out. To use it you must
;	uncomment out the code and reassemble. Search for the string:
;
;			;stub***
;
; Using MORERAM.
;
;	First, copy MORERAM.COM to your boot device (floppy or fixed).
;	Next, create or edit your AUTOEXEC.BAT file found on your
;	boot device to include MORERAM as the **FIRST** program that
;	will be executed. This is important as results are not guaranteed
;	if MORERAM is not the first command executed at boot time.
;	Next, open the covers of your PC and set the memory switches
;	to indicate that your PC only has 64K.
;
;	Now try rebooting your PC using the Alt-Ctrl-Del sequence.
;
;	MORERAM will first display a hello banner and the amount of
;	memory DOS thinks your PC has (should be 64K). Next, MORERAM
;	will pause a second or two while it determines how much memory
;	your PC really has. (It also clears this memory in the process
;	to eliminate PARITY 2 errors later).
;	Once the physical memory limit is determined, MORERAM will display
;	that amount and then automatically re-boot. (Don't get excited,
;	this won't loop indefinitely, because...) The next time MORERAM
;	is again executed from your AUTOEXEC.BAT it will find that the amount
;	of memory DOS thinks you have will be the same as that installed, and
;	a reboot will be avoided!
;
; I use this program on my PC that has 576K (64K + 512K) worth of memory.
; Also, I have successfully tested it with 704K (64K + 512K + 128K) of memory,
; but this requires placing memory into the semi-forbidden zone (segment A000)
; designated by IBM as "reserved". But that's ok, as long as you don't install
; memory beyond this into the B000 segment where monochrome and graphics display
; memory live!
;
; Questions or comments should be left for me (DAN OBRIEN) on Gene Plantz'
; BBS in Chicago, IL (312-882-4227). I will attempt to fix bugs that may
; crop up, but I make no guarantees. You use this at your own risk (just like
; I do!). If you break something valuable, it's your own fault.
;
;-------------------------------------------------------------------------------
END OF TRANSFER - PRESS ENTER TO RETURN TO MENU
--------------------------------------------------------------------------
END O
```
{% endraw %}

## QUIKUP.DOC

{% raw %}
```
                          QUIcK power UP routines

        Programs and documentation copyright 1983 by Herb Shear.

QUIKUP.COM is a short assembly language routine which meets the following
objectives:

    1.  Permit utilization a RAM in excess of the 544KB limit imposed by
        the system board switches.

    2.  Permit fast power ups by allowing the system board switches to be
        set to a low value.

    3.  Be compatible with AUTOEXEC.BAT for no hands booting.

    4.  No untested or potential parity error bytes.

To enjoy its features, employ the following steps:

    1.  Copy QUIKUP.COM to your DOS SYSTEM (boot) disk.

    2.  Make QUIKUP the first entry in the AUTOEXEC.BAT file.

    3.  Set the system board switches for a total memory of 64KB.  You
        may later have to increase this in order to run a certain class
        of software that deserves no further mention.

    4.  Power up.


QUIKUPQD.COM is basically identical, with a slight modification so that it
will work in cooperation with Quadram's QM.EXE, QDXT.EXE and QMXT.EXE RAM
Drive programs (which just happen to be on this very same SVCS Club Disk
No. 43).  [EDITOR'S NOTE:  Not so on this SFpcUG Disk #106, however.]  Note
that these three ramdrives do not check for a Quadram board (mighty nice of
them).  Further note that the `XT' only implies DOS 2.0's 9 sector tracks,
and should not be construed as a restriction to XT hardware.

    In the second step above make QUIKUPQD the first AUTOEXEC.BAT file
    entry followed by the desired ramdrive.  QUICKUPQD and Q* n/A will
    work together to resolve the endless reboot dilemma.

```
{% endraw %}

## REBOOT.DOC

{% raw %}
```
We do not have complete doc. for REBOOT.  It can be used to reboot the system
with software.  See SETMEM.BAT.
If anyone has more info.  Please get it into the HAL-PC library.

```
{% endraw %}

## SETKEY.DOC

{% raw %}
```

Documentation for SETKEY.EXE

SETKEY Version 2.00 (C)Copyright T A Davis, 1983

SETKEY is a program that lets the user redefine the keyboard. To use
this program, you must have DEVICE=ANSI.SYS in your configuration file
(CONFIG.SYS - ANSI.SYS is included on the DOS 2.00 system disk.) Both
ANSI.SYS and CONFIG.SYS must be present on the default drive when the
system is booted.

Use of setkey.

To use SETKEY, just type SETKEY |<filename> (the <filename> is optional.)
If <filename> is not specified, or if SETKEY cannot locate <filename>, it
will ask you for a filename to use. This file must be present in the
current directory of the specified drive.

If the file does not currently exist, SETKEY will ask if it should be
created. Reply 'Y' to create <filename>. If the file does exist,
SETKEY will use <filename> to redefine the keyboard. 

If the file did not exist, SETKEY will ask you to press the key to 
redefine. Then it will ask for the text to assign to the key. To end
this key definition process, enter ^Z (F6 or CTRL-Z) at the prompt for
'KEY ' You may include carriage returns in the text to assign to the key
by pressing [RETURN] and the program will display (C/R) and go on to
the next key. If you do not desire to include a carriage return in the
key definition, press ^Z (F6 or CTRL-Z) to indicate the end of the text for
the key.

After the key definition process is complete, the program will ask whether
you desire to re-define these keys now. Press Y to do so.

After you have created the a definition file, you may enter SETKEY <filename>
at any time to define the keyboard to the definitions contained in the file.

Further notes.

There is a limit of 128 characters that may be assigned to keys. SETKEY
will not allow the creation of a file containing more than 128 characters.
Instead, if you enter more than 128 characters, SETKEY will create a file
containing the definitions for all keys prior to the key definition which
exceeded 128 bytes.

You must end each line of text you enter as a definition with either a 
space or a carriage return.

You may create as many definitions as you wish and re-define the keys 
as often as you wish. If you get unexpected results, re-boot your system.

Unfortunately, DOS provides no way other than re-booting to un-re-define
the keyboard.

65399 '** DONE - PRESS ENTER TO RETURN TO MENU **
S provides no 
```
{% endraw %}

## SETRO.DOC

{% raw %}
```
                              SetRO

        The following is produced by entering SetRO > SetRO.DOC --

            [SetRO version 1.00]
            The SetRO utility Sets files as Read-Only.
            It reverses the action of the ClearRO.
            Wild-cards and pathnames may be used.
            The user is prompted at each file.

            Syntax:
              SetRO [Path]FileSpec [OptionList]

            OptionList:
             /Terse -Terse Suppress version message
             /Yes   -Yes   Automatic "Yes" response

            Public Domain 1984 by Lewis Haupt
            P.O.Box 25363, Houston, Tx  77265

        PC DOS version 2.00 or greater is required.
        Options may be preceded by "/" or by " -".

        Examples --

            -- Using full directory specifications.
            C> SetRO C:\DIRA\*.*
            [SetRO Version 1.00]
            Press Y to set, N to skip, ESC to stop.

                    Protect ABCD.DOC? Yes
                    Protect EDGHI.DOC? No
                    Protect JKL.DOC? Yes
                    Protect MNOP.DOC? Stop

            -- Current disk and directory.
            C> SetRO *.*
            [SetRO Version 1.00]
            Press Y to set, N to skip, ESC to stop.

                    Protect erase ABCD.DOC? Yes
                    Protect EDGHI.DOC? No
                    Protect JKL.DOC? Yes
                    Protect MNOP.DOC? Stop


              Protect EDGHI.DOC? No
                    Prot
```
{% endraw %}

## SETVAR.DOC

{% raw %}
```


     SETVAR -- Copyright (C) 1984 by Darryl E. Rubin

     This program reads the standard input and assigns that value
to the environment variable named on the command line.

o   If the named variable does not exist, it is created.

o   If it does exist, it is deleted and recreated with the 
    new value

o   The variable is not entered into the environment if
    there isn't enough room for it and its value.

Example:  echo test| setvar VAR   ; same as SET VAR=test

On return to command.com, SETVAR sets the errorlevel equal
to the length of the string assigned to the variable
( 0 if the variable could not be created or assigned ).  In
the above example, SETVAR returns an errorlevel of 4.

Note that SETVAR does not fold its command line argument
to upper case, so be careful!  Saying SETVAR test creates
a different variable than "SETVAR TEST".  The former
creates a variable "test" that cannot be accessed via the
DOS "SET" command ( SET folds its arguments to upper case ).

This can be particularly useful in batch files for multiple
responses and tests.  i.e. this helps batch become a true
language.

The program was downloaded from the COMPUTER LANGUAGE 
bulletin board in California.(MLM)
```
{% endraw %}

## TEE.DOC

{% raw %}
```
TEE
 
Copies STDIN to both STDOUT and STDERR.  TEE is useful in a DOS 2.x
(or later) pipeline for viewing output while sending it along to the
next stage in the pipe.

```
{% endraw %}

## TESTDRV.BAS

{% raw %}
```bas
10  'DISK DRIVE TEST
20  'JOE McDERMOTT - DECEMBER 1982
25  'NORTH JERSEY IBM PC CLUB
30  '
40  'THE PROGRAM CREATES A SERIES OF SEQUENTIAL FILES
50  'IT WRITES DATA TO THEM AND READS IT BACK FOR VERIFICATION
60  'FINALLY THE TEST FILES ARE ERASED/
70  'THE FILES ARE OF THE FORM "XXX.TST" WHERE "XXX" ARE THREE LETTERS
80  'CHOSEN AT RANDOM, E.G. "EBG.TST","CXU.TST"
90  '
100  NUMFILES=40        'NUMBER OF FILES THAT WILL BE CREATED
110  DIM FS$(NUMFILES)  'ARRAY FOR STORING FILESPECS
120  FTYPE$=".TST"      'FILE EXTENSION USED IN THE TEST
130  INPUT"DRIVE TO BE TESTED ";DD$
140  DD$=DD$+":"
150  '
160  INPUT"*** INSERT DISK AND PRESS `ENTER' ***",Z$
170  '
180  '   ---------- CREATE FILES ----------
190  FOR I=1 TO NUMFILES
200    FILENAME$ = CHR$(RND*26+64)+CHR$(RND*26+64)+CHR$(RND*26+64)
205    FS$(I)=DD$+FILENAME$+FTYPE$
210    PRINT"CREATING: ";FS$(I);" #";I
220    OPEN "O",1,FS$(I)           'CREATE DIRECTORY ENTRY
230    PRINT#1,STRING$(255,"*")    'WRITE DATA TO FILE
240    PRINT#1,STRING$(255,"*")
250    PRINT#1,STRING$(255,"*")
260    CLOSE 1
270  NEXT I
280  '   ---------- READ BACK FILES -----------
290  FOR I=1 TO NUMFILES
300    PRINT"READING: ";FS$(I);" #";I
310    OPEN "I",1,FS$(I)
320    INPUT#1,L$:PRINT LEFT$(L$,75)
330    INPUT#1,L$:PRINT LEFT$(L$,75)
335    INPUT#1,L$:PRINT LEFT$(L$,75)
340    CLOSE 1
350  NEXT I
360  '   ---------- ERASE FILES ----------
370  FOR I=1 TO NUMFILES
380    PRINT"ERASING: ";FS$(I)
390    KILL FS$(I)
400  NEXT I
410  END  'OF PROGRAM
```
{% endraw %}

## UNDO.BAS

{% raw %}
```bas
10 KEY OFF
20 CLS
30 COLOR 0,7
40 LOCATE 5,33
50 PRINT " UNDO-128.BAS "
60 LOCATE 7,31
70 PRINT " By Rich Schinnell "
80 LOCATE 8,26,1
90 PRINT " Rockville, MD (301) 949-8848 "
100 COLOR 7,0
110 PRINT
120 PRINT
130 PRINT "A program for IBM  DOS 2.0/2.1 Fixed Disk owners , ie XT's and"
140 PRINT "expansion chassis's who use the IBM DOS 2.0 BACKUP.COM utility and"
150 PRINT "want to access files from their backup disks without Restore."
160 PRINT "All files are restored up to the next 128 Byte boundry."
170 PRINT "This cause absolutely no problems as DOS always reserves"
180 PRINT "space in blocks of 512 for SS disks and 1024 for DS disks."
190 PRINT "Press <ENTER> to quit... Now Enter  SINGLE Letter Drive  for"
200 DEFINT A-Z
210 FALSE% = 0
220 TRUE% = NOT FALSE%
230 ON ERROR GOTO 1310
240 ZZZ! = 1
250 PRINT:LOCATE ,,1
260 PRINT"Backup disk Location ";
270 DR$=INKEY$:IF LEN(DR$)<1 THEN 270
280 IF ASC(DR$) = 13 THEN 1290
290 DR$ = DR$ + ":"
300 OPEN DR$+"BACKUPID.@@@" FOR INPUT AS #1
310 CLOSE #1
320 FILES DR$ + "*.*"
330 PRINT
340 PRINT
350 INPUT "File name to Recover (no Drive Designation) ";INFILE$
360 IF LEN(INFILE$) < 1 THEN 1290
370 CLOSE #1
380 OPEN DR$+INFILE$ FOR INPUT AS #1
390 CLOSE 1
400 CLOSE #1
410 OPEN DR$+"BACKUPID.@@@" AS #1 LEN=128
420 FIELD #1,128 AS G$
430 GET #1
440 CLOSE #1
450 N$ = STR$( ASC( MID$(G$,3,1))) + STR$( ASC( MID$(G$,2,1)))
460 N=VAL(N$)
470 DTE$=STR$(ASC(MID$(G$,7,1)))+"-"+STR$(ASC(MID$(G$,6,1)))+"-"
480 DTE$=DTE$+STR$(ASC(MID$(G$,4,1))+1792)
490 PRINT "This is your backup disk #"; N;" Dated ";DTE$
500 CLOSE #1
510 OPEN DR$+INFILE$ AS #1 LEN=128
520 C$ = ""
530 D$ = ""
540 FIELD #1,128 AS A$
550 A# = LOF(1)
560 PRINT "Input file has";A# - 128;" Bytes in it"
570 GET #1
580 C$ = A$
590 FOR I% = 1 TO 128
600   IF ASC( MID$(C$,I%,1)) < 33 THEN 620
610   D$ = D$ + MID$(C$,I%,1)
620 NEXT I%
630 IF ASC(MID$(C$,2,1)) = 1 THEN 660
640 PRINT "This is Part 2 of";D$;" You must start with the first part"
650 BEEP:GOTO 330
660 IF ASC(MID$(C$,1,1)) =255 THEN ONLY.ONE%=-1:GOTO 690
670 PRINT:COLOR 23,0:PRINT "File on two Disks ,Insert backup disk #";
680 PRINT N+1;" When Instructed" : COLOR 7,0 : BEEP
690 PRINT
700 PRINT CHR$(34); MID$(D$,1,40); CHR$(34);" Was the file name when backed up"
710 INPUT "What do you want to name the output file ";OUTFILE$
720 IF LEN(OUTFILE$) < 1 THEN 330
730 OPEN OUTFILE$ FOR INPUT AS #2
740 CLOSE 2
750 PRINT "File ";OUTFILE$;" already exists, <O>verwrite ";
760 INPUT ": ";WELL$
770 IF WELL$ = "O" OR WELL$ = "o" THEN 780  ELSE 710
780 CLOSE #2
790 OPEN OUTFILE$ FOR OUTPUT AS #2
800 CLOSE #2
810 OPEN OUTFILE$ AS #2 LEN=128
820 FIELD #2,128 AS B$
830 COLOR 23,0
840 PRINT "Working ....";
850 COLOR 7,0
860 FOR I! = 2 TO INT((A#-128)/128)+2
870   GET #1,I!
880   LSET B$ = A$
890   PUT #2,ZZZ!
900   ZZZ! = ZZZ! + 1
910   PRINT CHR$(15);
920 NEXT I!
930 IF ONLY.ONE% THEN 1260
940 PRINT
950 PRINT "Insert Backup Disk #";N +1;" in drive ";DR$;
960 PRINT " and press <ENTER> or <Q>uit ":BEEP
970 R$ = INKEY$
980 IF R$ = "" THEN 970
990 IF R$ = "Q" OR R$ = "q" THEN CLOSE  : KEY ON  : END
1000 CLOSE #1
1010 OPEN DR$+"BACKUPID.@@@" AS #1 LEN=128
1020 FIELD #1,128 AS G$
1030 GET #1
1040 CLOSE #1
1050 N1$ = STR$( ASC( MID$(G$,3,1))) + STR$( ASC( MID$(G$,2,1)))
1060 N1=VAL(N1$)
1070 IF N1 = N + 1 THEN 1090
1080 PRINT "WRONG DISK, TRY AGAIN You put in disk #"; N1 : GOTO 930
1090 CLOSE #1
1100 OPEN DR$+INFILE$ FOR INPUT AS #1
1110 CLOSE 1
1120 OPEN DR$+INFILE$ AS #1 LEN=128
1130 FIELD #1,128 AS A$
1140 C$ = ""
1150 D$ = ""
1160 A# = LOF(1)
1170 PRINT "Input file has";A# - 128;" Bytes in it"
1180   GET #1
1190   C$ = A$
1200 FOR I% = 1 TO 128
1210   IF ASC( MID$(C$,I%,1)) < 33 THEN 1230
1220   D$ = D$ + MID$(C$,I%,1)
1230 NEXT I%
1240 ONLY.ONE% = - 1
1250 GOTO 860
1260 CLOSE
1270 PRINT
1280 PRINT "File ";OUTFILE$;" created  Size="; STR$((ZZZ!-1)*128);" Bytes
1290 KEY ON
1300 END
1310 IF ERL=300 THEN DR$="":PRINT " Not a Valid Backup Disk":BEEP:RESUME 250
1320 IF ERL=380 THEN PRINT DR$;INFILE$;" NOT FOUND ":CLOSE #1:RESUME 250
1330 IF ERL=730 THEN RESUME 780
1340 IF ERL=890 THEN PRINT "disk is Probably full, check the disk":RESUME 1290
1350 IF ERL=1100 THEN PRINT "Not found " : RESUME 940
1360 PRINT "Error"; ERR ;" has occured in line #"; ERL
1370 RESUME 1290
```
{% endraw %}

## UNDOBKUP.BAS

{% raw %}
```bas
10 'UNDOBACK.BAS     UNDO FILES FROM HARD DISK BACKUP COMMAND
20 KEY OFF:CLS:COLOR 0,7
30 LOCATE 5,33:PRINT " UNDOBACK.BAS "
40 LOCATE 7,31:PRINT " By Rich Schinnell ":COLOR 7,0:PRINT:PRINT
50 PRINT "A program for IBM  DOS 2.0/2.1
60 PRINT "Fixed Disk owners, ie XT's and expansion chassis's"
70 PRINT "who use the IBM BACKUP utility on the DOS diskette
80 PRINT "and want to access files from their backup disks without
90 PRINT "doing a recover.  The only exception: is a file which was saved part
100 PRINT "on one disk and part on another.. Sorry about that case ........
110 PRINT "Maybe some sharper programmer can modify this program to check that"
120 PRINT "Press <ENTER> to quit   enter ? for dir  (eg..?B:*.* )"
130 DEFINT A-Z:FALSE=0:TRUE=NOT FALSE:ON ERROR GOTO 330
140 PRINT:PRINT:INPUT "What is input file name ";INFILE$
150 IF LEN(INFILE$)<1 THEN 320
160 IF LEFT$(INFILE$,1)="?" THEN FILES MID$(INFILE$,2):GOTO 140
170 OPEN INFILE$ FOR INPUT AS #1:CLOSE 1
180 INPUT "What is output file name ";OUTFILE$
190 OPEN OUTFILE$ FOR INPUT AS #2:CLOSE 2
200 PRINT "File ";OUTFILE$;" already exists, try another name please":GOTO 180
210 OPEN INFILE$ AS #1 LEN=1
220 FIELD #1,1 AS A$
230 OPEN OUTFILE$ AS #2 LEN=1
240 FIELD #2,1 AS B$
250 A=LOF(1):PRINT "Input file has";A;" Bytes in it"
260 FOR I=1 TO 128:GET #1:NEXT I
270 FOR I=129 TO A
280 GET #1,I:LSET B$=A$
290 PUT #2:IF (I MOD 50)=0 THEN PRINT CHR$(15);
300 NEXT I
310 CLOSE:PRINT:PRINT "File ";OUTFILE$;" Successfully created "
320 KEY ON:END
330 IF ERL=170 THEN PRINT "file not found try again ":RESUME 140
340 IF ERL=190 THEN RESUME 210
350 PRINT "Error";ERR;" has occured in line #";ERL:RESUME 320
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0307

     Volume in drive A has no label
     Directory of A:\

    ANSI&2K  SYS      4096   1-13-84   7:13a
    ANSIKEYS DOC      6039   1-13-84   8:34a
    AST-TEST COM      4608   3-02-84   6:46a
    BDNCHM   TXT       896   6-07-84   5:26p
    CLEARRO  COM      1787   6-18-84   1:26a
    SETVAR   COM       512   1-06-85   9:20a
    SETVAR   DOC      1280   1-06-85   9:21a
    CIPHER   BAS       640  10-26-83   4:18p
    TEE      DOC       173   1-27-85  11:24a
    TEE      COM       281   9-07-83   8:26a
    87ERROR  ASM      1938   5-05-84   8:59p
    DOS2A    TXT      1536   3-07-84   6:38a
    ENVIRON  DOC      2560   3-07-84   6:37a
    DEBUG    TXT     34560  12-23-84  10:34a
    ALIGN    BAS      1024   7-25-83   8:29a
    KEYS              2560   1-13-84   7:17a
    87ERROR  COM       120   5-05-84   9:00p
    87ERROR  DOC      1601   5-05-84   8:49p
    MEMORY   COM      1532   6-23-83  10:33a
    MEMORY   DOC      2599   6-23-83  10:49a
    87ERROR  OBJ       226   5-05-84   9:00p
    CLEARRO  DOC      1536   6-18-84   1:10a
    MORERAM  ASM      7168   1-02-84   1:09a
    MORERAM  COM       512   1-02-84   1:07a
    MORERAM  DOC      3456   1-02-84   1:06a
    NULLKEYS          2560   1-13-84   7:16a
    REBOOT   DOC       179   3-08-83  12:04a
    REBOOT   EXE       640   8-29-82   1:05a
    CURSOR   COM       654   6-18-84   1:27a
    DOS-BUG  4E        426   5-03-84   5:53p
    SETKEY   DOC      2432   7-11-83   7:54a
    SETKEY   EXE     32256   7-13-83   6:48a
    CURSOR   DOC       768   6-18-84   1:09a
    SYSTAT   COM      1536   6-05-83   7:22a
    SYSTAT   DOC      1024   6-05-83   7:21a
    TESTDRV  BAS      2048   7-02-83  10:02a
    SETRO    COM      1771   6-18-84   1:23a
    UNDO     BAS      4608   2-21-84   6:56a
    UNDOBKUP BAS      2048   1-02-84   1:05a
    SETRO    DOC      1536   6-18-84   1:09a
    DEFRAG   BAS      5888   4-29-84   8:39p
    CORELOOK COM      5120   1-01-80   1:35a
    DEFRAG   DOC      5019   4-29-84   8:39p
    ENVIRO   PAT      1340   8-18-84  11:26a
    LOOKMEM  COM      1335   7-26-84   6:20p
    CPMDOSXR DOC      9472   9-12-83   3:29p
    ASCII    COM      6774   9-15-84   8:01p
    CALC     EXE     15698  12-23-84   5:15p
    ENVXPAND SYS      3200  12-28-84  11:14p
    ENVXPAND DOC      3328  12-28-84  11:14p
    ENVINUSE COM       512  12-28-84  11:14p
    PARINT   COM       512  12-28-84   6:17p
    QUIKUP   COM       192   7-10-83   1:28p
    QUIKUP   DOC      1675  10-13-84  12:00p
    QUIKUPQD COM       185   7-10-83   1:56p
    FILES307 TXT      3142   2-02-87   4:13p
           56 file(s)     201118 bytes
                           95232 bytes free
