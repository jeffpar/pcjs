---
layout: page
title: "PC-SIG Diskette Library (Disk #184)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0184/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0184"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 9"

    Among this disk's collection are programs that allow you to copy
    "protected" disks, generate a listing of directories, alter file
    attributes, clean your disk drives, purge files, fix DOS 1.1 bugs, and
    other miscellaneous utilities.  The remainder is a group of early
    devices for removing copy protection schemes from your software.
    
    NOTE: CAREFULLY EXAMINE THE UNPROTECT FILES TO BE SURE THAT YOUR
    VERSION IS HERE.
    
    Special Requirements:  Some programs require color and others
    require BASIC.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:
    
    File Descriptions:
    
    (READ    ME)  Part of COVER.COM.
    123STAR  UNP  How to unprotect LOTUS 123.
    ALTER    COM  Alter file attributes.
    ALTER    DOC  Documentation.
    BASIC    UNP  How to unprotect BASIC compiler.
    CHMOD    BAS  Change file attributes.
    CHMOD    DOC  Documentation.
    CLEAN2   COM  Update to disk drive cleaning utility.
    CLEAN2   DOC  Documentation.
    CO???    ASM  Source code for COVER.COM modules (7 files)..
    CO???    OBJ  Object modules for COVER.COM (7 files).
    COFIX    BAT  Batch file..
    COLINK        Part of COVER.COM.
    COPY40   COM  Copy utility that breaks some protected items.
    COPY40   DOC  Documentation.
    COPYALL  COM  Copy utility that breaks some protected items.
    COVER    ASM  Part of COVER.COM.
    COVER    COM  Create listing of a directory to put into disk envelope.
    COVER    DOC  Part of COVER.COM (13K).
    COVER    TXT  Documentation for COVER.COM.
    COVERPRO ASM  Source for COVERPRO.COM.
    COVERPRO COM  C.Itoh Prowriter version of COVER.COM.
    CV       COM  Changes disk labels  (DOS 1.1, 2.0, 2.1).
    CV       DOC  Documentation.
    DCOPY    COM  Copies some protected items.
    DFORMAT  COM  Format utility  (Buggy).
    DOSBUG   DOC  Fix DOS 1.1 bugs.
    EASYWR11 UNP  How to unprotect EASYWRITER.
    FLTSIM   UNP  How to unprotect FLIGHT SIMULATOR.
    LOTUS1A  UNP  How to unprotect LOTUS 123 1A.
    MEMSHIFT UNP  How to unprotect MEMORY SHIFT.
    MINIPRT  DOC  Prints directory in small shape for disk envelopes.
    MS2      UNP  How to unprotect MEMORY SHIFT.
    NEW123   UNP  How to unprotect LOTUS 123.
    PFSFILE  UNP  How to unprotect PFS File.
    PURGE    COM  Deletes selected files.
    PURGE    DOC  Documentation.
    RAMDSK16 COM  160KB RAM disk.
    RAMDSK18 COM  180KB RAM disk.
    RAMDSK32 COM  320KB RAM disk.
    RAMDSK36 COM  360KB RAM disk.
    RM18     ASM  Assembler source for RAM disks.
    SPEEDUP2 DOC  DOS 2.0 disk drive speed up utility.
    VISICALC UNP  How to unprotect VISICALC.
    WORD     UNP  How to unprotect WORD.
    WORDNEW  UNP  How to unprotect WORD.
    ZORK3    UNP  How to unprotect ZORK.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ALTER.DOC

{% raw %}
```
						   ALTER
						   Command

	    
    
    Purpose:    This command allows the user to change 
		file attributes. 
	    
    Format:	ALTER [d:][path]filename[/V][/N|/R/H/S/A|/B]
	    
    Type:	Internal	External
				  ***
	    
    Remarks:    This command can be used to mark files as 
		hidden, readonly, system or normal and to set
		or reset the archive bit. It is also possible
		to make subdirectory entries hidden. Hidden
		files/directories will not be displayed by 
		the TREE or DIR commands. The XDIR command 
		will display all files regardless of the files
		attributes; however, it will not display hidden
		directories. 
	    
    Example:    ALTER c:\top\urgent.dat/v/r/h

		This command line displays the current version
		number and alters file C:\TOP\URGENT.DAT to be
		READ_ONLY and HIDDEN. Read only files cannot be
	        changed or deleted.

		ALTER \top\secret/h
	    
		This command line alters the directory 
		\top\secret as a HIDDEN directory. This 
		directory can only be accessed by those who 
		know the path.
	    
		ALTER \top\secret\letter.007/v
	    
		This command line displays the current 
		attribute settings for the file and prompts
		the user for new attributes for the file.
	    

		
	    
	    
				    10-26a
						   ALTER
						   Command
	    
	    A sample display for this interactive mde
	    is shown:
	        
	    C>ALTER \top\secret
	    
	    ALTER Version X.XX (C)Copyright T A Davis, 1983
	    
	    Attributes are (DRHB) for file \TOP\SECRET
	     
	    Enter new attributes (RHSNBA) or ENTER ? NA_
	    
	    Attributes are (DA) for file \TOP\SECRET
	    
	    The identifiers used to display the files 
	    attributes  are listed below:
	    
			R - READ_ONLY
			H - HIDDEN
			S - SYSTEM
			A - ARCHIVE SET
			D - SUB_DIRECTORY
			B - ARCHIVE NOT SET
	    
	    You may specify N for NORMAL as a parameter 
	    or as a response to the prompt. This identifier 
	    is not listed as an attribute for the file, 
	    but is offered as an easy means to remove all 
	    attributes.
			    
	    Consult your DOS 2.00 manual, page C-4 for more 
	    information on file attributes. 
			    
	    NOTES:
	    
		The attributes of a BASE directory cannot 
		be altered. You MUST specify at least 4 
		characters for the path\filename. 
		
	    	There is no way to display hidden 
		sub-directories. Care should be taken to ensure 
		that any directory once	hidden, can be found.

	    

						    10-26b
ub-directories. Care should be taken to ensure 
		that any directory once	hidden, can be found.

	    

						    
```
{% endraw %}

## CHMOD.BAS

{% raw %}
```bas
10 CLS:PRINT"This basic program was created by CONVERT.BAS":KEY OFF:DEFINT A-Z:FALSE=0:TRUE=NOT FALSE
20 PRINT"Copyright 1983 ,Rich Schinnell Rockville,MD. Not for Sale."
30 PRINT "This program will create  you a program named CHMOD.COM":PRINT
40 ON ERROR GOTO 5000
50 INPUT "PLACE the disk to write the file TO in Drive A: Press <ENTER> "; CAPITAL$
90 CLS:LOCATE 12,5:PRINT "Now writing file named CHMOD.COM standby please  "
100 RESTORE
110 OPEN "R", #1,"CHMOD.COM",1
120 FIELD #1, 1 AS N$
130 READ N:LL=(N/28)+1
140 FOR I = 1 TO N
150 READ X$,CHECK:FOR C=1 TO LEN(X$) STEP 2:CC$="&H"+MID$(X$,C,2):IF CHECK=9999 THEN 170
155 LSET N$=CHR$(VAL(CC$)):PUT #1:CHECK=CHECK-VAL(CC$):NEXT C:IF CHECK<>0 THEN 5000
160 LOCATE 14,5:PRINT TIME$;" Reading data line #";(1000+I);" lines left=";LL-I;:NEXT I:CLOSE
170 LOCATE 16,5:PRINT "CHMOD.COM CREATED * *":GOTO 5010
1000 DATA  258
1001 DATA FC33ED8A0E800032EDB020BF8100F3AE83F90074658D55FFF2AE7557,3750
1002 DATA C645FF00F3AE8D5DFF880E8000803E8000007C298A073C20741CB910,2771
1003 DATA 00BF8301F2AE750D81EF8401B90400D3E503EFEB05BA9301EB2B43FE,3414
1004 DATA 0E8000EBD0B801438BCDCD21730F3D02007505BAC201EB03BAD401EB,2987
1005 DATA 0CEB05BAAC01EB05EB07BAAC01B409CD21CD20303132333435363738,2584
1006 DATA 3941424344444707496C6C6567616C20484558206368617261637465,2287
1007 DATA 720A0D2407546F6F2066657720706172616D65746572730A0D240746,2084
1008 DATA 696C65206E6F7420666F756E640A0D24074163636573732064656E69,2363
1009 DATA 6564202D2070726F6261626C7920696C6C6567616C20617474726962,2609
1010 DATA 7574650A0D24,393
1011 DATA 000000,9999
5000 PRINT "* * ERROR VERIFY FOLLOWING DATA * * * "
5005 PRINT X$;",";CHECK
5010 KEY ON:CLOSE:END
```
{% endraw %}

## CHMOD.DOC

{% raw %}
```
The CHMOD command allows the user to change the attribute bytes
associated with a file on the disk. The ones that you can change are:

	n - normal file (what most of them are)
	r - READ-ONLY (list on the directory, but can not be deleted
	    unless change it back to NORMAL)
	h - HIDDEN (won't list on a DIR command - you must remember
	    that it is there and change it back to NORMAL to
	    manipulate it)
	a - set the ARCHIVE bit

The format of the command is

	chmod filename attribute

Example

	chmod command.com r	; Prevent the command file from being
				  deleted

	chmod command.com na	; reset back to NORMAL and set the
				  ARCHIVE bit

	chmod private.txt h	; HIDE my file so no one can see it

```
{% endraw %}

## COENDP.ASM

{% raw %}
```
	TITLE	COENDP	- Diskette Contents List - Work	Area Definition
	SUBTTL	Version	1.1 - July 1984
	PAGE	81,132
;
CODE	SEGMENT	BYTE PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	PUBLIC	SRCE,PNTR
;
PNTR	DW	0			;Pointer list
SRCE	EQU	PNTR+456		;Start of entry	stack
;
CODE	ENDS
;
	END
```
{% endraw %}

## COFREE.ASM

{% raw %}
```
	TITLE	COFREE	- Diskette Contents List - Get Free Space
	SUBTTL	Version	1.1 - July 1984
	PAGE	81,132
;
CODE	SEGMENT	BYTE PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	EXTRN	VERS:BYTE,FREE:BYTE
X10000	DW	10000			;Conversion constants
X1000	DW	1000,100,10
;
	PUBLIC	GETFRE
GETFRE	PROC	NEAR
	TEST	VERS,-1
	JZ	VERS1
	XOR	DL,DL			;Set for default drive
	MOV	AH,36H
	INT	21H			;v2.0 -	get free space
	MUL	BX
	MUL	CX			;AX,DX contains	bytes free
	JMP	VCOM			;Enter common code
VERS1:	PUSH	DS
	MOV	AH,1BH
	INT	21H			;v1.x -	get FAT
	XOR	AH,AH
	XCHG	CX,DX			;CX has	number of units
	MUL	DX			;Bytes/allocation unit
	PUSH	AX			;Save
	XOR	AX,AX
	MOV	SI,2			;First FAT entry
FAT2:	MOV	DI,SI
	SHR	DI,1
	ADD	DI,SI			;Compute 1 1/2 bytes
	MOV	DI,WORD	PTR [BX+DI]	;Load FAT entry
	TEST	SI,1			;See if	odd or even
	JZ	FAT3
	SHR	DI,1
	SHR	DI,1
	SHR	DI,1			;Adjust	for 12 bits
	SHR	DI,1
FAT3:	AND	DI,0FFFH		;Three nibbles
	JNZ	FAT4			;In use, so don't count
	INC	AX
FAT4:	INC	SI			;Step to next entry
	LOOP	FAT2			;Loop through FAT
	POP	CX			;Restore bytes/allocation unit
	MUL	CX			;Compute total free bytes
	POP	DS			;Restore program seg reg
VCOM:	MOV	DI,OFFSET FREE		;Point to output area
	CALL	CONVRT			;Convert size to ASCII
	RET
GETFRE	ENDP
;
	PUBLIC	CONVRT
CONVRT	PROC	NEAR			;Converts 6 digits, zero surpressed
	PUSH	DI			;Save pointer for later	use
	DIV	X10000			;Result	range 0-999
	AAM
	CMP	AH,9
	JBE	SMALL			;Normal	sized file
	PUSH	AX			;Over 990K
	MOV	AL,AH
	AAM
	OR	AX,'00'
	XCHG	AH,AL
	STOSW				;Save high two digits
	POP	AX
	OR	AL,'0'
	STOSB				;Save next digit
	JMP	SHORT COMM		;  and rejoin common code
SMALL:	MOV	BYTE PTR [DI],'0'
	INC	DI
	OR	AX,'00'			;Make ASCII
	XCHG	AH,AL
	STOSW				;Place in image
COMM:	MOV	CX,3			;Convert last four digits
	MOV	SI,OFFSET X1000
DIVLP:	MOV	AX,DX			;Remainder becomes dividend
	XOR	DX,DX
	DIV	WORD PTR [SI]		;Power of 10 divide
	OR	AL,'0'			;Result	range 0-9
	STOSB
	ADD	SI,2
	LOOP	DIVLP
	OR	DL,'0'			;Last digit in remainder
	MOV	AL,DL
	STOSB
	MOV	CX,5			;Now zero surpress 5 digits
	POP	DI
	MOV	AL,' '
SUPLP:	CMP	BYTE PTR [DI],'0'
	JNZ	DNECVT			;Conversion complete
	STOSB				;Replace leading zero with blank
	LOOP	SUPLP
DNECVT:	RET
CONVRT	ENDP
;
CODE	ENDS
;
	END
```
{% endraw %}

## COPRNT.ASM

{% raw %}
```
	TITLE	COPRNT	- Diskette Contents List - Print Cover Sheet
	SUBTTL	Version	1.1 - June 1984
	PAGE	81,132
;
CODE	SEGMENT	BYTE PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	EXTRN	PNTR:WORD,STKCNT:WORD,TITLX:BYTE,RESTR:BYTE
;
	EXTRN	CONVRT:NEAR
;
	PUBLIC	PSX
PSX	DB	0			;Pass counter
DBUF	DB	8 DUP (0)		;Work buffer for file size
DBLK	DB	'  ',0			;Double	blank between columns
LFTB	DB	'|  ',0			;Left border
RGTB	DB	'  |'			;Right border (includes	CRLF)
CRLF	DB	13,10,0
DRCT	DB	'  <DIR>',0
BCNT	DB	0			;Body line counter
;
	PUBLIC	PRINT
PRINT	PROC	NEAR
	INC	PSX			;Count numbers of prints
	MOV	BCNT,33			;Set body line counter
	MOV	AX,STKCNT		;Load entry count
	MOV	DH,4			;Divide	by number of columns
	DIV	DH
	OR	AH,AH
	JZ	SETCNT			;Evenly	divisable
	INC	AL			;Ragged	edge
	CBW
SETCNT:	PUSH	AX			;Entries per column count
	CMP	AX,33
	JBE	NORM			;See if	too big	for standard
	TEST	PSX,1			;See if	a page restore needed
	JNZ	NORES
	CALL	DORES			;Do it
NORES:	MOV	PSX,0
NORM:	CALL	DOBRDR			;Do upper border
	CALL	DOBLNE			;  and a blank line
	CALL	DOLFTM			;Do left margin
	MOV	DX,OFFSET TITLX
	CALL	DOPRT			;Output	the title line
	CALL	DORGTM			;Do right margin
	CALL	DOBLNE			;  and another blank line
	POP	CX
	JCXZ	EMPTY
	MOV	BP,CX
	SHL	BP,1			;BP contains offset/column in ptr list
	MOV	SI,OFFSET PNTR		;Point to start	of ptr list
OTLP:	CALL	DOLFTM			;Do a left margin
	MOV	DL,4			;Set inner loop	count to columns
	XOR	BX,BX			;Clear column offset reg
INLP:	CALL	PRTENT			;Print stack entry
	ADD	BX,BP			;Step to next column entry
	DEC	DL
	JNZ	INLP			;End of	inner loop
	CALL	DORGTM			;Do a right margin
	ADD	SI,2			;Step to next ptr
	DEC	BCNT			;Decrement body	line count
	LOOP	OTLP			;End of	outer loop
EMPTY:	MOV	CL,BCNT			;Load remaining	body lines
	CMP	CL,0
	JL	NOFILL			;Over full
	XOR	CH,CH
	JCXZ	NOFILL			;All used
FILL:	CALL	DOBLNE			;Fill out body lines
	LOOP	FILL
NOFILL:	CALL	DOBRDR			;Do bottom border
DORES:	MOV	DX,OFFSET RESTR
	CALL	DOPRT			;Restore page
	RET
PRINT	ENDP
;
	PUBLIC	DOPRT
DOPRT	PROC	NEAR			;This subroutine simply	prints
	PUSH	DX			;the string pointed to by the
	PUSH	SI			;DX reg	on entry.  The string
	MOV	SI,DX			;is terminated by a nul	byte.
	MOV	AH,5
DPLP:	MOV	DL,BYTE	PTR [SI]
	OR	DL,DL
	JZ	PRTEND
	INT	21H
	INC	SI
	JMP	DPLP
PRTEND:	POP	SI
	POP	DX
	RET
DOPRT	ENDP
;
PRTENT	PROC	NEAR			;Print one stack entry
	PUSH	CX
	PUSH	DX
	MOV	CX,12
	MOV	DI,WORD	PTR [SI+BX]	;DI points to stack entry
	OR	DI,DI			;If entry is zero, blank space
	JZ	BLNK1
	MOV	AH,5
PELP:	MOV	DL,BYTE	PTR [DI]	;Print to the end of the
	OR	DL,DL			;  name/type entry
	JZ	BLNK2			;  blanking remainder of 12
	INT	21H			;  character field
	INC	DI
	LOOP	PELP
BACK:	INC	DI
	MOV	AX,WORD	PTR [DI]	;Load file size
	MOV	DX,WORD	PTR [DI+2]
	INC	DX
	JNZ	NODIR
	MOV	DX,OFFSET DRCT
	CALL	DOPRT
	JMP	SHORT GONE
NODIR:	DEC	DX
	PUSH	SI
	MOV	DI,OFFSET DBUF
	CALL	CONVRT			;Convert size to ASCII decimal
	POP	SI
	MOV	DX,OFFSET DBUF
	CALL	DOPRT			;Print size
GONE:	POP	DX
	PUSH	DX			;Reload	entry value
	DEC	DL
	JZ	PUNT			;If last column	don't space over
	MOV	DX,OFFSET DBLK
	CALL	DOPRT			;Two blanks between columns
PUNT:	POP	DX
	POP	CX
	RET
BLNK1:	MOV	CX,19			;No entry, so blank entire column
	CALL	CLER
	JMP	GONE
BLNK2:	CALL	CLER			;Blanks	remainder of name/type field
	JMP	BACK
PRTENT	ENDP
;
DOBLNE	PROC	NEAR
	PUSH	CX
	CALL	DOLFTM			;Output	a bordered blank line
	MOV	CX,82
	CALL	CLER
	CALL	DORGTM
	POP	CX
	RET
DOBLNE	ENDP
;
DOBRDR	PROC	NEAR
	MOV	CX,88
	MOV	DL,'-'
	CALL	DLFIL			;Output	a top or bottom	border
	MOV	DX,OFFSET CRLF
	CALL	DOPRT
	RET
DOBRDR	ENDP
;
DOLFTM	PROC	NEAR			;Outputs "|  "
	PUSH	DX
	MOV	DX,OFFSET LFTB
	CALL	DOPRT
	POP	DX
	RET
DOLFTM	ENDP
;
DORGTM	PROC	NEAR			;Outputs "  |CRLF"
	PUSH	DX
	MOV	DX,OFFSET RGTB
	CALL	DOPRT
	POP	DX
	RET
DORGTM	ENDP
;
CLER	PROC	NEAR			;Outputs CX blanks to the printer.
	MOV	DL,' '
DLFIL:	MOV	AH,5			;Outputs DL character CX times
CLRLP:	INT	21H
	LOOP	CLRLP
	RET
CLER	ENDP
;
CODE	ENDS
;
	END
```
{% endraw %}

## COPY40.DOC

{% raw %}
```
This is a copy utility that will back up many protected diskettes.
I have patched it so it will copy 41 tracks instead of the usual
40, which picks up a few additional popular copy protection schemes.
Have fun,   W.B.
l copy 41 tracks instead of the u
```
{% endraw %}

## COSCAN.ASM

{% raw %}
```
	TITLE	COSCAN	- Diskette Contents List - Scan	Directory
	SUBTTL	Version	1.1 - July 1984
	PAGE	81,132
;
CODE	SEGMENT	BYTE PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	EXTRN	PNTR:WORD,SRCE:BYTE
;
FCBE	DB	-1			;Extended FCB
	DB	5 DUP (?)
	DB	10H			;Search	for directory entries
NORM	DB	0,'???????????'		;Dummy FCB for "find/next"
	DB	24 DUP (?)
;
	PUBLIC	SCAN
SCAN	PROC	NEAR
	MOV	DI,OFFSET PNTR
	XOR	AX,AX
	MOV	CX,228
	REP	STOSW			;Clear pointer table
	MOV	BX,OFFSET PNTR		;BX points to start of pointer list
	MOV	DI,OFFSET SRCE		;DI points to start of entry stack
	XOR	CX,CX
	MOV	NORM,CL			;Set to	default	drive
	MOV	DX,OFFSET FCBE
	MOV	AH,11H
	INT	21H			;Get first search entry
	JMP	SHORT INNER
LOOP:	MOV	DX,OFFSET FCBE
	MOV	AH,12H
	INT	21H			;Get next entry
INNER:	OR	AL,AL
	JNZ	DONE
	CALL	SAVE			;Stack entry
	INC	CX			;Count entry
	JMP	LOOP
DONE:	RET				;Returns count in CX
SCAN	ENDP
;
SAVE	PROC	NEAR
	PUSH	CX
	MOV	WORD PTR [BX],DI	;Save pointer to start of entry
	ADD	BX,2			;  and step pointer table reg
	MOV	SI,88H			;Point to DTA -	file name
	MOV	CX,8
SVLP:	MOV	AL,BYTE	PTR [SI]
	CMP	AL,' '
	JZ	NMDNE			;End of	name
	MOV	BYTE PTR [DI],AL
	INC	SI
	INC	DI
	LOOP	SVLP
NMDNE:	TEST	BYTE PTR DS:[93H],10H
	JNZ	DIRECT
	MOV	SI,90H			;Point to DTA type field
	CMP	BYTE PTR [SI],' '
	JZ	ALLDNE			;No file type
	MOV	BYTE PTR [DI],'.'
	INC	DI
	MOV	CX,3
	REP	MOVSB			;Move type field to stack
ALLDNE:	MOV	BYTE PTR [DI],0		;Mark end of string
	INC	DI
	MOV	SI,0A4H			;Point to size of file
	MOV	CX,4
	REP	MOVSB			;  and save in stack
SAVOUT:	POP	CX
	RET
DIRECT:	XOR	AL,AL
	STOSB
	DEC	AL
	MOV	CX,4
	REP	STOSB
	JMP	SAVOUT
SAVE	ENDP
;
CODE	ENDS
;
	END
```
{% endraw %}

## COSORT.ASM

{% raw %}
```
	TITLE	COSORT	- Diskette Contents List - Sort	Entry Stack
	SUBTTL	Version	1.1 - July 1984
	PAGE	81,132
;
CODE	SEGMENT	BYTE PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	EXTRN	PNTR:WORD,SRCE:BYTE
	PUBLIC	STKCNT
STKCNT	DW	0			;Count of entries in stack
;
	PUBLIC	SORT
SORT	PROC	NEAR
	MOV	STKCNT,CX		;Save entry count
	JCXZ	DONE
	DEC	CX
	JCXZ	DONE
	MOV	SI,OFFSET PNTR		;Point to first	stack entry pntr
OUTER:	MOV	DI,SI
	ADD	DI,2			;Set to	"next" pntr
	MOV	DX,CX
INNER:	CALL	COMPAR			;Compare stack entries
	JBE	LEAVE			;Ascending sequence, so	no change
	MOV	AX,WORD	PTR [SI]
	XCHG	AX,WORD	PTR [DI]
	MOV	WORD PTR [SI],AX	;Exchange pointers
LEAVE:	ADD	DI,2
	DEC	DL
	JNZ	INNER			;Bubble	through	inner loop
	ADD	SI,2
	LOOP	OUTER			;Bubble	through	outer loop
DONE:	RET
SORT	ENDP
;
COMPAR	PROC	NEAR			;This compare always forces short
	PUSH	SI			;strings low, since strings are
	PUSH	DI			;terminated with nuls.
	PUSH	CX
	MOV	CX,12			;Max compare
	MOV	SI,WORD	PTR [SI]	;Point to entry
	MOV	DI,WORD	PTR [DI]	;Point to other	entry
	REP	CMPSB			;Compare strings
	POP	CX
	POP	DI
	POP	SI
	RET
COMPAR	ENDP
;
CODE	ENDS
;
	END
```
{% endraw %}

## COTITL.ASM

{% raw %}
```
	TITLE	COTITL	- Diskette Contents List - Get Title
	SUBTTL	Version	1.1 - July 1984
	PAGE	81,132
;
CODE	SEGMENT	BYTE PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	EXTRN	VERS:BYTE
;
	PUBLIC	TITLX,FREE
LSRCH	DB	'*.*',0
LB3	DB	'Label:'
TPRMT	DB	13,10,'Enter Title: $'
TBUF	DB	37,0			;Input buffer for user title
	DB	37 DUP (?)
TITLX	DB	39 DUP (' ')		;Title line
LB1	DB	7 DUP (' ')
LB2	DB	13 DUP (' ')		;Label field
	DB	'Free: '
FREE	DB	9 DUP (' ')		;Formatted free	space in title line
MONTH	DB	'  /'			;Date fields in	title line
DAY	DB	'  /'
YEAR	DB	'  ',0			;End of	title
;
	PUBLIC	GETTTL
GETTTL	PROC	NEAR
	MOV	DI,OFFSET TITLX
	MOV	CX,59
	MOV	AL,' '
	REP	STOSB			;Clear title line
	MOV	DX,OFFSET TPRMT
	MOV	AH,9
	INT	21H			;Prompt	for title
	MOV	DX,OFFSET TBUF
	MOV	AH,0AH
	INT	21H			;Get user title
	MOV	CL,TBUF+1		;Load length
	XOR	CH,CH
	MOV	SI,OFFSET TBUF+2
	MOV	DI,OFFSET TITLX
	REP	MOVSB			;Move user title to title line
	MOV	AH,2AH
	INT	21H			;Get date
	SUB	CX,1900			;Convert to two	digit year
	MOV	DI,OFFSET YEAR
	MOV	AL,CL
	CALL	DECMAL			;Fill in month/day/year
	MOV	DI,OFFSET MONTH
	MOV	AL,DH			;  for title line
	CALL	DECMAL
	MOV	DI,OFFSET DAY
	MOV	AL,DL
	CALL	DECMAL
	CMP	VERS,3			;See if	Version	3 or later
	JB	TDNE			;No, so	skip label
	MOV	DX,OFFSET LSRCH		;Check directory for label
	MOV	AH,4EH
	MOV	CX,8
	INT	21H
	JC	TDNE			;No label
	MOV	SI,OFFSET LB3		;Move in "Label:"
	MOV	DI,OFFSET LB1
	MOV	CX,6
	REP	MOVSB
	MOV	SI,9EH			;Move in diskette label
	MOV	DI,OFFSET LB2
	MOV	CX,11
LBLP:	LODSB
	OR	AL,AL
	JZ	TDNE			;Label terminates with null
	CMP	AL,'.'
	JE	LBLP			;DOS insists on	punctuation
	STOSB
	LOOP	LBLP
TDNE:	RET
GETTTL	ENDP
;
DECMAL	PROC	NEAR			;Converts AL to	two decimal
	AAM				;  digits and stores at	SI
	OR	AX,'00'
	XCHG	AL,AH
	STOSW				;Save in image
	RET
DECMAL	ENDP
;
CODE	ENDS
;
	END
```
{% endraw %}

## COVER.ASM

{% raw %}
```
	TITLE	COVER	- Diskette Contents List - Main	Module
	SUBTTL	Version	1.1 - July 1984
	PAGE	81,132
;
;	****************************************************************
;	*  D. W. Daetwyler - Route 5, Box 518A - Springdale, AR	72764  *
;	****************************************************************
;
CODE	SEGMENT	PARA PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	EXTRN	DOPRT:NEAR
;
	ORG	100H
BEGIN:	JMP	START
;
	PUBLIC	VERS,RESTR
;
SETPRT	DB	27,'0',27,'C',44,15,0,0,0,0,0,0	;Set 1/8" 132 character
RESPRT	DB	27,64,0,0,0,0,0,0,0,0,0,0 ;Restore to power up status
RESTR	DB	12,0,0,0,0,0		;Do a form feed
VERS	DB	0			;DOS Version flag
DDRV	DB	0			;Default drive at entry
NDRV	DB	0			;Number	of drives in system
LOGO	DB	'D',0FDH,' Cover$'
PRMT	DB	13,10,'Enter drive to list (Esc to quit): $'
ERMSG1	DB	13,10,'Invalid drive$'
;
	EXTRN	GETTTL:NEAR,GETFRE:NEAR,SCAN:NEAR
	EXTRN	SORT:NEAR,PRINT:NEAR
	EXTRN	PSX:BYTE
;
START	PROC	NEAR
	MOV	DX,OFFSET LOGO
	MOV	AH,9
	INT	21H
	MOV	DX,OFFSET SETPRT
	CALL	DOPRT			;Set printer
	MOV	AH,30H
	INT	21H			;Check DOS Version
	OR	AL,AL
	JZ	NOTTWO			;V1.x
NOTTWO:	MOV	VERS,AL			;Save DOS flag
	MOV	AH,19H
	INT	21H			;Get default drive
	MOV	DDRV,AL			;  and save
	MOV	DL,AL
	MOV	AH,0EH
	INT	21H			;Get number of drives
	MOV	NDRV,AL			;  and save
;
;	Start of main loop
;
MLOOP:	MOV	DX,OFFSET PRMT		;Prompt	for drive
	MOV	AH,9
	INT	21H
	MOV	AH,1
	INT	21H			;Get user response
	CMP	AL,1BH			;Check for exit
	JE	QUIT			;He's done, so get off
	OR	AL,' '			;Force lower case
	SUB	AL,'a'-1		;Compute drive number
	JNC	DRVOK			;May be	valid drive
ERR1:	MOV	DX,OFFSET ERMSG1	;Invalid drive message
	MOV	AH,9
	INT	21H			;Error message out
	JMP	MLOOP
DRVOK:	CMP	AL,NDRV			;Check for installed drive
	JA	ERR1			;Drive not installed
	DEC	AL
	MOV	DL,AL
	MOV	AH,0EH
	INT	21H			;Make selected drive default
	CALL	GETTTL			;Get title
	CALL	GETFRE			;Get free space
	CALL	SCAN			;Load directory	entries
	CALL	SORT			;Sequence directory entries
	CALL	PRINT			;Produce listing
	JMP	MLOOP
;
QUIT:	MOV	DL,DDRV			;Load entry default drive
	MOV	AH,0EH
	INT	21H			;Restore default
	TEST	PSX,1
	JZ	NOREST
	MOV	DX,OFFSET RESTR
	CALL	DOPRT			;Restore page
NOREST:	MOV	DX,OFFSET RESPRT
	CALL	DOPRT			;Reset printer
	INT	20H			;  and exit
START	ENDP
;
CODE	ENDS
;
	END	BEGIN
```
{% endraw %}

## COVER.DOC

{% raw %}
```



                   SORTED DISKETTE DIRECTORY LISTING - IBM PC

             Just what you always needed!   Yet another redundant, dupli-
        cative,  and space occupying utility...  Hopefully,  this fills a 
        nitch left open in the array of PC-DOS utilities.  This one sorts 
        and formats the directory data and prints it so its "just  right" 
        to  fit inside the diskette envelope.   You have to provide  your 
        own paper cutter... the utility does the rest.  

             The program runs under PC-DOS Versions 1.x or 2.0,  and will 
        operate  on any normal configuration.   It does expect the IBM or 
        Epson MX80 printer (or equivalent), but should be easily modified 
        to apply to any printer that offers "condensed" print and 8 lines 
        per inch line spacing.   It is written in Assembler,  but uses no 
        macros,  so either ASM or MASM can be used to assemble the source 
        code.  LINK and EXE2BIN are required.

             It has two known limitations.   It ignores hidden files, and 
        if  you're  a Version 2.0 user and have  implemented  the  "tree" 
        directory  paths  with mulitple directories on  a  diskette,  the 
        subordinate  directories will also be ignored.   Since the "path" 
        logic  seems primarily aimed at fixed disk,  and this utility  is 
        directed towards diskettes,  these limitations should not  effect 
        most  users.   Someday I'll get rich,  and get a fixed disk,  but 
        till then....

             The utility resulted from a scenario in which I found myself 
        a frequent player.   I hope I'm alone in the world, but I suspect 
        I'm not.   The scenario goes like this...  Phone rings.  Voice on 
        the line says, "Say Dan, you know that program that puts a double 
        whammy  on the singlefritz when you've juiced  the  slobert?   My 
        only copy got clobbered, so would you check and see if you've got 
        a  backup?"  Well,  I've got something in excess of 200 diskettes 
        neatly filed in boxes,  labeled correctly, etc.  The only problem 
        is that a label which says "Miscelaneous Junk Utilities" may have 
        meant  something when I wrote it,  but it sure doesn't mean  much 
        now.   Next step is to break in to what ever is currently running 
        on the PC, and start sticking in diskettes to do a DIR to check.

             Actually  this  kind of event led to my writing a  "Catalog" 
        facility (which does everything but cook) for the PC,  but  after 
        some  months  of use,  I found that the part of  this  relatively 
        large  and  complex package that I really used,  was this  simple 
        print utility.   So I "extracted" that portion of the big  system 
        to  pass on to the rest of the world.   I'm placing this code  in 
        "Public Domain", so use it as you will.

             The  program  is  called "COVER" and is  composed  of  seven 
        separately  assembled modules:  COVER,  COTITL,  COFREE,  COSCAN, 
        COSORT, COPRNT, and COENDP.  The listings are commented, but I'll 
        include a few words on each of the modules.   

             COVER  is  the main control module,  and contains the  major 
        loop.   Its first action is to preset the printer to 8 lines  per 
        inch,  condensed  print,  and  a  44 line page.   If you  have  a 


                                        1





        Diskette Directory Listing


        "different"  printer,  you may need to change the control  stream 
        defined at SETPRT.   The final zero in the control stream is  not 
        sent to the printer, but marks the end of string for DOPRT.

             Next, COVER checks for the DOS Version.  The return from the 
        30H  call  (which is valid on release 1.x),  is the  release  and 
        version numbers under V2.0 of DOS.   On prior releases it returns 
        a  zero.   This  code  simply sets a switch that will  be  tested 
        later.   The  "default" drive is then determined and  saved,  and 
        finally, the number of drives on the configuration is determined.

             COVER  then  prompts  for the drive  letter  for  the  drive 
        containing the diskette to be listed.  The single character input 
        is first checked for an "Escape" (all done, so get off), and then 
        the  drive character is verified for a "legal" drive  designator.  
        The prompt starts the main loop,  which ends after all processing 
        is  done for one diskette.   COVER then calls GETTTL (Get Title), 
        GETFRE  (Determine  free  space  on  diskette),  SCAN  (Load  all 
        directory  entries into an internal stack),  SORT  (Sequence  the 
        stacked entries), and PRINT (which formats and prints the stacked 
        entries).   Each  of the called routines will be mentioned in the 
        following paragraphs.

             When  the Escape character is sensed,  COVER forces  a  page 
        restore  to  complete the current listing,  resets the  "default" 
        drive  to its value on entry,  conditionally forces out one  more 
        "page"  to restore the paper to the true top of forms,  and  then 
        resets the printer to "power up" status.   The control string for 
        the  latter  is at RESPRT so the "different"  printer  users  may 
        modify that string if required.  

             GETTTL  is a primitive module which solicits a "title"  from 
        the  user.   Forty characters are allowed,  and the standard  DOS 
        function is used to get this string.  Nul titles are permissable.  
        The DOS function is also used to get the system date.   DECMAL is 
        a  local  subroutine  that coverts the content of the AL  to  two 
        decimal digits in the AH and AL and then stores them in the  area 
        defined by the DI register.  

             GETFRE  computes the "free" space available on the  diskette 
        and  places  the ASCII decimal result in the  title  line.   This 
        program  is the reason COVER checked for the DOS  Version.   V2.0 
        provides  a  "nice"  function  that  will  give  the  free  space 
        directly,  but  does not allow you to gain addressability to  the 
        File Allocation Table (FAT).  V1.x did not have this feature, but 
        did provide addressability to the FAT.  Since this program was to 
        be used in both environments,  this code has two paths.  The code 
        following  the version test is for V2.0.   Code starting  at  the 
        label  VERS1  is that process necessary to determine  free  space 
        under the older versions of DOS.   VCOM marks the point where the 
        two paths re-join.  If you're only running V2.0, you can decrease 
        the size of the utility by removing the code from the instruction 
        "JMP VCOM" to the instruction before that labeled VCOM.  Finally, 
        CONVRT  is a public subroutine that converts the AX/DX content to 
        a max of a six digit number,  leading zero surpressed, and places 


                                        2





        Diskette Directory Listing


        the result at the area pointed to by the DI register.  

             SCAN  does  the normal DOS function calls to "find"  an  all 
        "wild  card" file name.   This process repeats until  the  entire 
        directory has been scanned.   The result is placed in a stack and 
        a  pointer to the start of the entry is placed in a pointer list.  
        The format of the stack entries is the file-name.typ followed  by 
        a  zero  byte,  and then the four byte file size field  from  the 
        directory.  Since the data transfer area (DTA) has not been reset 
        this  module  finds  it input in the default DTA at  80H  in  the 
        program prefix.  

             SORT  is a simple "bubble" sort of the stacked entries,  but 
        is  driven from the pointer list.   Yes,  I know a shell sort  is 
        faster,  but  for a max of 112 entries,  an old fashioned  bubble 
        uses less memory!  

             PRINT  simply  uses the sorted pointers to  form  the  final 
        output.   The  title  line has already been formed by  the  prior 
        modules.   The  local subroutine PRTENT uses CONVRT to format the 
        file  sizes.   Four  columns  will "fit" within  the  print  size 
        required,  so PRINT initially computes column length.   An inner 
        and  an outer loop controls the print process.   The  inner  loop 
        prints  one entry each execution,  and is executed four times per 
        line.   The  outer  loop  is cycled once per entry  in  a  single 
        column.  

             The  source  module COENDP includes no  code.   This  module 
        simply  provides  addressability to the memory above the  program 
        code.   V2.0  provides this function in a much "cleaner"  manner, 
        but  since  this  utility  is to  run  on  either  Version,  this 
        subterfuge is necessary.

             That's  a  very  quick "walk  through"  for  the  code,  but 
        together  with the source comments,  it should provide  sufficent 
        information for any extensions or modifications you may choose to 
        make.   Key the source in,  and assemble the seven modules.   The 
        Link  control stream is also included in the listings.   Be  very 
        sure that the module COENDP occurs last in the control stream, as 
        shown  in  the listing.   Otherwise you'll be stacking  directory 
        entries over some of the code.  

             For those of you who are not familiar with "COM" files,  ALL 
        segment  registers are preset by the operating system to the same 
        value,  so  although  you see no code for setting the DS  and  ES 
        segment registers,  they contain the same value as the CS and  SS 
        at  program initiation so change is not required.   The stack  is 
        automatically  allocated  at the "top" of the segment  (64K)  the 
        program  is  loaded to,  so no stack establishment  is  required.  
        Finally,  the  established stack is initialized so that a  "NEAR" 
        return  at  end of program will return you to DOS  correctly,  so 
        long as the CS register has not been changed.   This program uses 
        the 20H termination call, but could do a simple near RET with the 
        same result.



                                        3





        Diskette Directory Listing


             Link  will provide console messages saying that there is  no 
        stack segment (that's right), and that there is one error (that's 
        false).   This  response is normal when you're preparing a  "COM" 
        file.   If you get more errors or other indications, you'd better 
        re-check your work.

             Now  you're  ready  to  run EXE2BIN,  and  then  rename  the 
        resultant  file (COVER.BIN) to COVER.COM.   That's all it  takes.  
        The utility will prompt with a console message asking which drive 
        contains the diskette to be listed, so enter the single character 
        drive designator appropriate (A-G).   No colon or carriage return 
        will be required.  The program will then prompt for the title you 
        wish  to appear on the top line of the list.   A forty  character 
        field is provided.   If you do not want the title, simply hit the 
        "Enter" key, and the top line of the listing will be blank except 
        for the date.   When the first listing is complete,  the  utility 
        will loop back and ask for another drive.  This iterative process 
        will  continue until you repond with an "Escape" key to the drive 
        request prompt.  Exit is then made to the DOS.  

             Note  that although the utility prints two  envelope  covers 
        per page, forms will be advanced to the "top of form" position in 
        effect  when the utility was started.   The printer will also  be 
        restored to "power up" status.   If you use Control-Break to exit 
        the  utility,  this will not be true,  so you'll have to manually 
        re-aline and reset your printer.  

             There's not that much code in this utility,  but as  always, 
        if you don't want to "poke" this in yourself, send me a diskette, 
        with mailer and postage, and I'll copy my source and return it to 
        you,  or  if you prefer,  send me a check for $7.50 and I'll send 
        you a new diskette (single surface - 8 sector).   You can contact 
        me at the address or phone given below:

                  Dan Daetwyler
                  Route 5, Box 518A
                  Springdale, Arkansas 72764
                  501-756-0212



















                                        4






```
{% endraw %}

## COVERPRO.ASM

{% raw %}
```
        TITLE   COVER   - Diskette Contents List - Main Module
        SUBTTL  Version 1.0 - June 1983
        PAGE    81,132
;
;                             ********************
;                             *    DD Systems    *
;                             ********************
;
CODE    SEGMENT PARA PUBLIC 'CODE'
        ASSUME  CS:CODE,DS:CODE
;
        EXTRN   RESTR:BYTE
        EXTRN   DOPRT:NEAR
;
        ORG     100H
BEGIN:  JMP     START
;
        PUBLIC  VERS
;
VERS    DB      0                       ;DOS Version flag
DDRV    DB      0                       ;Default drive at entry
NDRV    DB      0                       ;Number of drives in system
PRMT    DB      13,10,'Enter drive to list (Esc to quit): $'
ERMSG1  DB      13,10,'Invalid drive$'
SETPRT  DB  27,'B',27,'Q',29,'AA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'
 DB   '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AA',30,0 ;Set 1/8" 132 character
RESPRT  DB      27,'A',29,30,27,'E',0          ;Restore to power up status
;
        EXTRN   GETTTL:NEAR,GETFRE:NEAR,SCAN:NEAR
        EXTRN   SORT:NEAR,PRINT:NEAR
        EXTRN   PSX:BYTE
;
START   PROC    NEAR
        MOV     DX,OFFSET SETPRT
        CALL    DOPRT                   ;Set printer
        MOV     AH,30H
        INT     21H                     ;Check DOS Version
        OR      AL,AL
        JZ      NOTTWO                  ;V1.x
        DEC     AL                      ;V2.0
NOTTWO: MOV     VERS,AL                 ;Save DOS flag
        MOV     AH,19H
        INT     21H                     ;Get default drive
        MOV     DDRV,AL                 ;  and save
        MOV     DL,AL
        MOV     AH,0EH
        INT     21H                     ;Get number of drives
        MOV     NDRV,AL                 ;  and save
;
;       Start of main loop
;
MLOOP:  MOV     DX,OFFSET PRMT          ;Prompt for drive
        MOV     AH,9
        INT     21H
        MOV     AH,1
        INT     21H                     ;Get user response
        CMP     AL,1BH                  ;Check for exit
        JE      QUIT                    ;He's done, so get off
        OR      AL,' '                  ;Force lower case
        SUB     AL,'a'-1                ;Compute drive number
        JNC     DRVOK                   ;May be valid drive
ERR1:   MOV     DX,OFFSET ERMSG1        ;Invalid drive message
        MOV     AH,9
        INT     21H                     ;Error message out
        JMP     MLOOP
DRVOK:  CMP     AL,NDRV                 ;Check for installed drive
        JA      ERR1                    ;Drive not installed
        DEC     AL
        MOV     DL,AL
        MOV     AH,0EH
        INT     21H                     ;Make selected drive default
        CALL    GETTTL                  ;Get title
        CALL    GETFRE                  ;Get free space
        CALL    SCAN                    ;Load directory entries
        CALL    SORT                    ;Sequence directory entries
        CALL    PRINT                   ;Produce listing
        JMP     MLOOP
;
QUIT:   MOV     DL,12
        MOV     AH,2
        INT     21H                     ;Force page restore
        MOV     DL,DDRV                 ;Load entry default drive
        MOV     AH,0EH
        INT     21H                     ;Restore default
        TEST    PSX,1
        JZ      NOREST
        MOV     DX,OFFSET RESTR
        CALL    DOPRT                   ;Restore page
NOREST: MOV     DX,OFFSET RESPRT
        CALL    DOPRT                   ;Reset printer
        INT     20H                     ;  and exit
START   ENDP
;
CODE    ENDS
;
        END     BEGIN
```
{% endraw %}

## CV.DOC

{% raw %}
```

Syntax:   CV [d:]volname
			(no blanks between [d:] and
			 first character of volname;
			 volname itself may contain blanks)

	Changes directory of drive specified to root; if a volume
entry exists, it is renamed 'volname'; otherwise a volume entry
with that name is created in the root directory.  Works with 
1.1 formatted disks too.
	Note: If a volume name entry has been created with debug,
and contains characters not allowed by DOS in filenames, such as
those with ASCII codes >126 or lower case letters, CV will be unable
to rename it.  Also, since DOS will parse any periods in volname as
extension separators, they are not recommended.

TGR

to rename it.  Also, since DOS will parse any periods in volname as
extension separators, th
```
{% endraw %}

## FILES184.TXT

{% raw %}
```
Disk No:  184
Program Title: Dos Utilities no 9
PC-SIG version: 1.3

Among this disk's collection are programs that allow you to copy
"protected" disks, generate a listing of directories, alter file
attributes, clean your disk drives, purge files, fix DOS 1.1 bugs, and
other miscellaneous utilities.  The remainder is a group of early
devices for removing copy protection schemes from your software.

NOTE: CAREFULLY EXAMINE THE UNPROTECT FILES TO BE SURE THAT YOUR VERSION
IS HERE.

Usage:  Copy Protect/Unprotect.

Special Requirements:  Some programs require color and others
require BASIC.

How to Start:  Type GO (press enter).

Suggested Registration:

File Descriptions:

(READ    ME)  Part of COVER.COM.
123STAR  UNP  How to unprotect LOTUS 123.
ALTER    COM  Alter file attributes.
ALTER    DOC  Documentation.
BASIC    UNP  How to unprotect BASIC compiler.
CHMOD    BAS  Change file attributes.
CHMOD    DOC  Documentation.
CLEAN2   COM  Update to disk drive cleaning utility.
CLEAN2   DOC  Documentation.
CO???    ASM  Source code for COVER.COM modules (7 files)..
CO???    OBJ  Object modules for COVER.COM (7 files).
COFIX    BAT  Batch file..
COLINK        Part of COVER.COM.
COPY40   COM  Copy utility that breaks some protected items.
COPY40   DOC  Documentation.
COPYALL  COM  Copy utility that breaks some protected items.
COVER    ASM  Part of COVER.COM.
COVER    COM  Create listing of a directory to put into disk envelope.
COVER    DOC  Part of COVER.COM (13K).
COVER    TXT  Documentation for COVER.COM.
COVERPRO ASM  Source for COVERPRO.COM.
COVERPRO COM  C.Itoh Prowriter version of COVER.COM.
CV       COM  Changes disk labels  (DOS 1.1, 2.0, 2.1).
CV       DOC  Documentation.
DCOPY    COM  Copies some protected items.
DFORMAT  COM  Format utility  (Buggy).
DOSBUG   DOC  Fix DOS 1.1 bugs.
EASYWR11 UNP  How to unprotect EASYWRITER.
FLTSIM   UNP  How to unprotect FLIGHT SIMULATOR.
LOTUS1A  UNP  How to unprotect LOTUS 123 1A.
MEMSHIFT UNP  How to unprotect MEMORY SHIFT.
MINIPRT  DOC  Prints directory in small shape for disk envelopes.
MS2      UNP  How to unprotect MEMORY SHIFT.
NEW123   UNP  How to unprotect LOTUS 123.
PFSFILE  UNP  How to unprotect PFS File.
PURGE    COM  Deletes selected files.
PURGE    DOC  Documentation.
RAMDSK16 COM  160KB RAM disk.
RAMDSK18 COM  180KB RAM disk.
RAMDSK32 COM  320KB RAM disk.
RAMDSK36 COM  360KB RAM disk.
RM18     ASM  Assembler source for RAM disks.
SPEEDUP2 DOC  DOS 2.0 disk drive speed up utility.
VISICALC UNP  How to unprotect VISICALC.
WORD     UNP  How to unprotect WORD.
WORDNEW  UNP  How to unprotect WORD.
ZORK3    UNP  How to unprotect ZORK.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1985,86,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## RM18.ASM

{% raw %}
```
PAGE 58,132
TITLE RAMDSK18.ASM  180K RAM DISK

;****************************************************************************
;                            VIRTUAL.ASM
;          AN INSTALLABLE DEVICE DRIVER FOR AN IN STORAGE DISKETTE
;                    (virtual) WITH AN 180K CAPACITY
;***************************************************************************
CSEG            SEGMENT PARA PUBLIC 'CODE'
;
;                       MACROS
;
STATUS          MACRO   STATE,ERR,RC
                IFIDN   <STATE>,<DONE>
                  OR    ES:WORD PTR SRH_STA_FLD[BX],0100H
                ENDIF
                IFIDN   <STATE>,<BUSY>
                  OR    ES:WORD PTR SRH_STA_FLD[BX],0200H
                ENDIF
                IFIDN   <ERR>,<ERROR>
                  OR    ES:WORD PTR SRH_STA_FLD[BX],1000H
                ENDIF
                IFNB    <RC>
                  OR    ES:WORD PTR SRH_STA_FLD[BX],RC
                ENDIF
                ENDM
;
;                       EQUATES
;
; This first group of equates allow changing parameters to define other size 
; disks than the 180K defined here.
SCTRS_ALLOC	EQU	1		;Sectors per allocation unit;see DOS
					;2.0 manual C-2
DIR_ENTRIES	EQU	64		;No.of Directory entries,Same as above
TOT_SECTORS	EQU	360             ;Total No. of Sectors,same as above
MED_DESCRPT	EQU	0FCH		;Media descriptor,14-22 of DOS manual
ADD_PARAS	EQU	2D00H		;paragraphs to add,depends on size
NO_OF_FATS	EQU	2		;No. of File Alloc.Tables.see C-2
NO_FAT_SCTRS	EQU	2		;No. of sectors occupied by FAT,C-2
;
;                     READ/WRITE
;
SRH             EQU     0               ;Static request header start
SRH_LEN         EQU     13              ;   "     "       "    length
SRH_LEN_FLD     EQU     SRH             ;   "     "       "      "    field
SRH_UCD_FLD     EQU     SRH+1           ;   "     "       "    Unit code
SRH_CCD_FLD     EQU     SRH+2           ;   "     "       "   command code fld
SRH_STA_FLD     EQU     SRH+3           ;   "     "       "   status field
SRH_RES_FLD     EQU     SRH+5           ;   "     "       "reserved area field
;
MD              EQU     SRH+SRH_LEN     ;Media description byte
MD_LEN          EQU     1               ;   "      "        "   length
DTA             EQU     MD+MD_LEN       ;disk transfer address
DTA_LEN         EQU     4               ;dta length
COUNT           EQU     DTA+DTA_LEN     ;byte/sector count
COUNT_LEN       EQU     2               ;  "    "      "   length
SSN             EQU     COUNT+COUNT_LEN ;starting sector number
SSN_LEN         EQU     2               ;   "       "      "    length
;
;                    MEDIA CHECK
;
RET_BYTE        EQU     MD+MD_LEN       ;byte returned from driver
;

;               BUILD B(ios)P(arameter)B(lock)
;
BPBA_PTR        EQU     DTA+DTA_LEN     ;Pointer to BPB
BPBA_PTR_LEN    EQU     4               ;   "    "   "  length
;
;               INIT
;
UNITS           EQU     SRH+SRH_LEN
UNITS_LEN       EQU     1
BR_ADDR_0       EQU     UNITS+UNITS_LEN
BR_ADDR_1       EQU     BR_ADDR_0+2
BR_ADDR_LEN     EQU     4
BPB_PTR_OFF     EQU     BR_ADDR_0+BR_ADDR_LEN
BPB_PTR_SEG     EQU     BPB_PTR_OFF+2
;
;
VDSK            PROC    FAR             ;Start Virtual disk procedure
                ASSUME  CS:CSEG,ES:CSEG,DS:CSEG
BEGIN:
START           EQU     $
;               SPECIAL DEVICE HEADER
NEXT_DEV        DD      -1              ;Pointer to next device
ATTRIBUTE       DW      2000H           ;Block device(non-IBM format)
STRATEGY        DW      DEV_STRATEGY    ;pointer to DeviceStrategy
INTERRUPT       DW      DEV_INT         ;pointer to device interrupt handler
DEV_NAME        DB      1               ;Number of block devices
                DB      7 DUP(?)        ;7 Bytes of filler
;
;
RH_OFF          DW      ?               ;Request Header offset
RH_SEG          DW      ?               ;Request Header segment
;
;               BIOS PARAMETER BLOCK
;
BPB             EQU     $               ;Current location counter
                DW      512             ;Sector size
                DB      SCTRS_ALLOC     ;Sectors/allocation unit
                DW      1               ;Number of reserved sectors
                DB      NO_OF_FATS      ;Number of FATS
                DW      DIR_ENTRIES     ;Number of directory entries
                DW      TOT_SECTORS     ;Total number of sectors
                DB      MED_DESCRPT     ;Media descriptor
                DW      NO_FAT_SCTRS    ;No.sectors occupied by FAT
;
BPB_PTR         DW      BPB             ;BPB pointer array(1 entry)
;               CURRENT VIRTUAL DISK INFORMATION
TOTAL           DW      ?               ;Total sectors to transfer
VERIFY          DB      0               ;Verify  1=Yes, 0 = No
START_SEC       DW      0               ;Starting sector number
VDISK_PTR       DW      0               ;Starting segment of virtual disk
USER_DTA        DD      ?               ;Ptr to callers disk transfer address
BOOT_REC        EQU     $               ;Dummy DOS boot record
                DB      3 DUP(0)        ;3 Byte jump>boot code(not bootable)
;
                DB      'IBM  2.0'      ;Vendor ID(2-spaces betweenM&2crucial)
                DW      512             ;Number of bytes in sector
                DB      SCTRS_ALLOC     ;1 sector per allocation unit
                DW      1               ;1 reserved sector
                DB      NO_OF_FATS      ;2 fats
                DW      DIR_ENTRIES     ;Number of directory entries
                DW      TOT_SECTORS     ;360 total sectors in image
                DB      MED_DESCRPT     ;Tells DOS it is 1-side 9 sector disk
                DW      NO_FAT_SCTRS               ;Number of sectors in FAT
;
;               FUNCTION TABLE
;
FUNTAB          LABEL   BYTE
                DW      INIT            ;initialization
                DW      MEDIA_CHECK     ;Media check ( block only)
                DW      BUILD_BPB       ;Build BPB
                DW      IOCTL_IN        ;IOCTL input
                DW      INPUT           ;Input(read)
                DW      NO_INPUT        ;non/dest.input,no wait(chr only)
                DW      IN_STAT         ;Input status
                DW      IN_FLUSH        ;Input flush
                DW      OUTPUT          ;Output(write)
                DW      OUT_VERIFY      ;Output(write)with verify
                DW      OUT_STAT        ;Output status
                DW      OUT_FLUSH       ;Output flush
                DW      IOCTL_OUT       ;IOCTL output
;
;               LOCAL PROCEDURES
;
IN_SAVE         PROC    NEAR
        MOV     AX,ES:WORD PTR DTA[BX]  ;Save callers DTA
        MOV     CS:USER_DTA,AX
        MOV     AX,ES:WORD PTR DTA+2[BX]
        MOV     CS:USER_DTA+2,AX
        MOV     AX,ES:WORD PTR COUNT[BX];get number of sectors to read
        XOR     AH,AH
        MOV     CS:TOTAL,AX             ;move number of sectors to total
        RET
IN_SAVE ENDP
;
CALC_ADDR       PROC    NEAR
        MOV     AX,CS:START_SEC         ;Get starting sector number
        MOV     CX,20H                  ;move 512 to cx segment style
        MUL     CX                      ;multiply to get actual sector
        MOV     DX,CS:VDISK_PTR         ;get segment of virtual disk
        ADD     DX,AX                   ;add that segment to initial segment
        MOV     DS,DX                   ;save that as actual segment
        XOR     SI,SI                   ;its on paragraph boundary
        MOV     AX,CS:TOTAL             ;total number of sectors to read
        MOV     CX,512                  ;bytes per sector
        MUL     CX                      ;multiply to get copy length
        OR      AX,AX                   ;check for greater than 64k
        JNZ     MOVE_IT
        MOV     AX,0FFFFH               ;move in for 64k
MOVE_IT:
        XCHG    CX,AX                   ;move length to cx
        RET
CALC_ADDR       ENDP
;
SECTOR_READ     PROC    NEAR
        CALL    CALC_ADDR               ;calculate starting"sector"
        MOV     ES,CS:USER_DTA+2        ;set destination)ES:DI)to point
        MOV     DI,CS:USER_DTA          ;   to callers dta
;
;               CHECK FOR DTA WRAP IN CASE WE CAME THROUGH VIA VERIFY
;
        MOV     AX,DI                   ;get offset of dta
        ADD     AX,CX                   ;add copy length to it
        JNC     READ_COPY               ;carry flag=0,no wrap
        MOV     AX,0FFFFH               ;maximum length
        SUB     AX,DI                   ;subtract dta offset from max
        MOV     CX,AX                   ;issue that as copy length to not wrap
READ_COPY:
REP     MOVSB                           ;do the "read"
                RET
SECTOR_READ     ENDP
;
SECTOR_WRITE    PROC    NEAR
        CALL    CALC_ADDR               ;Calculate starting sector
        PUSH    DS
        POP     ES                      ;Establish addressability
        MOV     DI,SI                   ;ES:DI point to disk
        MOV     DS,CS:USER_DTA+2        ;DS:DI point to callers dta
        MOV     SI,CS:USER_DTA
;
;               CHECK FOR DTA WRAP
;
        MOV     AX,SI                   ;Move dta offset to ax
        ADD     AX,CX                   ;add copy length to offset
        JNC     WRITE_COPY              ;carry flag=0,no segment wrap
        MOV     AX,0FFFFH               ;move in max copy length
        SUB     AX,SI                   ;subtract dta offset from max
        MOV     CX,AX                   ;use as new copy length to avoid wrap
WRITE_COPY:
REP     MOVSB                   ;do the write
        RET
SECTOR_WRITE    ENDP
;
;               DEVICE STRATEGY
;
DEV_STRATEGY:
        MOV     CS:RH_SEG,ES            ;save segment of request header ptr
        MOV     CS:RH_OFF,BX            ;save offset of    "       "     "
        RET
;
;               DEVICE INTERRUPT HANDLER
;
DEV_INT:
;               PRESERVE MACHINE STATE ON ENTRY
        CLD
        PUSH    DS
        PUSH    ES
        PUSH    AX
        PUSH    BX
        PUSH    CX
        PUSH    DX
        PUSH    DI
        PUSH    SI
;
;       DO THE BRANCH ACCORDING TO THE FUNCTION PASSED
;
        MOV     AL,ES:[BX]+2            ;Get function byte
        ROL     AL,1                    ;Get offset into table
        LEA     DI,FUNTAB               ;get address funtab
        XOR     AH,AH
        ADD     DI,AX
        JMP     WORD PTR[DI]
;
;               INIT
;
INIT:
        PUSH    CS
        POP     DX                      ;current cs to dx
        LEA     AX,CS:VDISK             ;get address of virtual disk
        MOV     CL,4
        ROR     AX,CL                   ;divide by 16(paragraph form)
        ADD     DX,AX                   ;add to current cs value
        MOV     CS:VDISK_PTR,DX         ;save as start segment of virtual disk
        MOV     AX,ADD_PARAS            ;add 2D00H paragraphs to starting
        ADD     DX,AX                   ;   segment of virtual disk
        MOV     ES:WORD PTR BR_ADDR_0[BX],0
        MOV     ES:BR_ADDR_1[BX],DX     ;make that the break address
        MOV     ES:BYTE PTR UNITS[BX],1 ;number of diskette units
        LEA     DX,BPB_PTR              ;get address of bpb pointer array
        MOV     ES:BPB_PTR_OFF[BX],DX   ;save offset in data packet
        MOV     ES:BPB_PTR_SEG[BX],CS   ;save segment in data packet
        MOV     ES,CS:VDISK_PTR         ;get starting address of virtual disk
        XOR     DI,DI                   ;zero out di(boot record)
        LEA     SI,BOOT_REC             ;address of boot record
        MOV     CX,24
REP     MOVSB                           ;copy 24 bytes of boot record
        MOV     CS:WORD PTR START_SEC,1
        MOV     CS:WORD PTR TOTAL,2
        CALL    CALC_ADDR               ;calculate address of logical secor 1
        PUSH    DS
        POP     ES
        MOV     DI,SI                   ;move that address to ES:DI
        XOR     AL,AL                   
REP     STOSB                           ;zero out FAT area
        MOV     DS:BYTE PTR [SI],0FCH   ;set first FAT entry
        MOV     DS:BYTE PTR 1[SI],0FFH
        MOV     DS:BYTE PTR 2[SI],0FFH
        PUSH    DS                      ;save pointer to FAt on stack
        PUSH    SI
        MOV     CS:WORD PTR START_SEC,3
        MOV     CS:WORD PTR TOTAL,2
        CALL    CALC_ADDR               ;calculate address logical sector 3
        PUSH    DS
        POP     ES
        MOV     DI,SI                   ;move that address to ES:DI
        POP     SI
        POP     DS                      ;restore address to first FAT
REP     MOVSB                           ;copy first FAT to second FAT
        MOV     CS:WORD PTR START_SEC,5
        MOV     CS:WORD PTR TOTAL,4
        CALL    CALC_ADDR               ;calc.address ofL.S.5(start of dir)
        XOR     AL,AL
        PUSH    DS
        POP     ES                      ;set up ES:DI to point to it
        XOR     DI,DI   
REP     STOSB                           ;zero out directory
        MOV     ES,CS:RH_SEG            ;restore ES:BX to request header
        MOV     BX,CS:RH_OFF
        STATUS  DONE,NOERROR,0          ;set status word(done,noerror,0)Macro
        JMP     EXIT
;
;                       MEDIA CHECK
MEDIA_CHECK:                            ;Media check(block only)
;
;               SET MEDIA NOT CHANGED
        MOV     ES:BYTE PTR RET_BYTE[BX],1 ;store in return byte
        STATUS  DONE,NOERROR,0          ;turn on done bit(macro)
        JMP     EXIT
;
;               BUILD BIOS PARAMETER BLOCK
;
BUILD_BPB:
        PUSH    ES                      ;save srh segment
        PUSH    BX                      ;save rh_offset
        MOV     CS:WORD PTR START_SEC,0
        MOV     CS:WORD PTR TOTAL,1
        CALL    CALC_ADDR               ;calculate address of first sector
        PUSH    CS
        POP     ES
        LEA     DI,BPB                  ;address of BIOS paramter block
        ADD     SI,11                   ;add 11 to si
        MOV     CX,13                   ;length of bpb
REP     MOVSB
        POP     BX                      ;restore offset of srh
        POP     ES                      ;restore segment of srh
        LEA     DX,BPB                  ;get BPB array pointer
        MOV     ES:BPBA_PTR[BX],DX      ;save pointer to BPB table
        MOV     ES:BPBA_PTR+2[BX],CS
        MOV     ES:DTA[BX],DX           ;offset of sector buffer
        MOV     ES:DTA+2[BX],CS
        STATUS  DONE,NOERROR,0          ;macro call
        JMP     EXIT
;
;               FOLLOWING ENTRIES ARE NOT SUPPORTED BY THIS DEVICE
;
IOCTL_IN:
IOCTL_OUT:
NO_INPUT:
IN_STAT:
IN_FLUSH:
OUT_STAT: 
OUT_FLUSH:
;
;               DISK READ
;
INPUT:
        CALL    IN_SAVE                 ;call initial save routine
        MOV     AX,ES:WORD PTR SSN[BX]  ;get starting sector number
        MOV     CS:START_SEC,AX         ;save starting sector number
        MOV     AX,ES:WORD PTR COUNT[BX]
        MOV     CS:TOTAL,AX             ;save total sectors to transfer
        CALL    SECTOR_READ             ;readin that many sectors
        MOV     BX,CS:RH_OFF            ;restore ES:BX as request hdr ptr
        MOV     ES,CS:RH_SEG
        STATUS  DONE,NOERROR,0
        JMP     EXIT
;
;               DISK WRITE
;
OUTPUT:                                 ;output(write)
        CALL    IN_SAVE
        MOV     AX,ES:WORD PTR SSN[BX]  ;get starting sector number
        MOV     CS:START_SEC,AX         ;set  "        "       "
        MOV     AX,ES:WORD PTR COUNT[BX]
        MOV     CS:TOTAL,AX             ;save total sectors to write
        CALL    SECTOR_WRITE            ;write out those sectors
        MOV     BX,CS:RH_OFF            ;restore ES:BX as request hdr ptr
        MOV     ES,CS:RH_SEG
        CMP     CS:BYTE PTR VERIFY,0    ;write verify set
        JZ      NO_VERIFY               ;no, no write verify
        MOV     CS:BYTE PTR VERIFY,0    ;reset verify indicator
        JMP     INPUT
NO_VERIFY:
        STATUS  DONE,NOERROR,0          ;set done,noerror in statusword
        JMP     EXIT
OUT_VERIFY:                             ;output(write)with verify
        MOV     CS:BYTE PTR VERIFY,1    ;set the verify flag
        JMP     OUTPUT                  ;branch to output routine
;
;               COMMON EXIT
EXIT:
;
        POP     SI                      ;restore all registers
        POP     DI
        POP     DX
        POP     CX
        POP     BX
        POP     AX
        POP     ES
        POP     DS
        RET
E_O_P:
;    MACRO TO ALIGN VIRTUAL DISK ON A PARAGRAPH BOUNDARY
        IF      ($-START) MOD 16
        ORG     ($-START)+16-(($-START)MOD 16)
        ENDIF
VDISK   EQU     $
VDSK    ENDP
CSEG    ENDS
        END     BEGIN
;
;  THE END



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0184

     Volume in drive A has no label
     Directory of A:\

    (READ    ME)      1525   2-13-85  11:46a
    123STAR  UNP      1024   1-01-80   1:00a
    ALTER    COM      1024  12-26-83  12:51a
    ALTER    DOC      2688  12-26-83  12:50a
    BASIC    UNP       896   1-01-80  12:17a
    CHMOD    BAS      1698   1-01-84   2:13a
    CHMOD    DOC       768   1-01-84   1:27a
    CLEAN2   COM       640  12-17-83   1:40a
    CLEAN2   DOC      2944  12-17-83   1:42a
    COENDP   ASM       289  11-01-84   9:35a
    COENDP   OBJ        73  11-01-84   9:38a
    COFIX    BAT        74   6-14-83   1:30p
    COFREE   ASM      2300  11-01-84  10:42a
    COFREE   OBJ       292  11-01-84  10:42a
    COLINK              68   6-15-83  11:56p
    COPRNT   ASM      4110  11-01-84  12:09p
    COPRNT   OBJ       765  11-01-84  12:03p
    COPY40   COM      3584   4-22-84  11:59a
    COPY40   DOC       256   4-29-84   5:19p
    COPYALL  COM      3584  12-03-83   3:24p
    COSCAN   ASM      1718  11-01-84  12:25p
    COSCAN   OBJ       267  11-01-84  12:26p
    COSORT   ASM      1157   8-21-84  11:49a
    COSORT   OBJ       171   8-21-84  11:52a
    COTITL   ASM      1900  11-01-84  10:22a
    COTITL   OBJ       473  11-01-84  10:22a
    COVER    ASM      2367  11-01-84  12:42p
    COVER    COM      1228  11-01-84  12:42p
    COVER    DOC     13312   6-16-83  10:23a
    COVER    OBJ       482  11-01-84  12:42p
    CV       COM       256  12-04-83   5:20a
    CV       DOC       768  12-04-83   5:21a
    DCOPY    COM      3199   2-09-82   5:38p
    DFORMAT  COM      2688   2-09-82   5:40p
    DOSBUG   DOC      2048  12-09-83   2:53a
    EASYWR11 UNP      4480   1-01-80  12:19a
    FLTSIM   UNP      1024   1-01-80  12:20a
    LOTUS1A  UNP       256   1-01-80  12:20a
    MEMSHIFT UNP       512   1-01-80  12:21a
    MINIPRT  DOC      2048  12-09-83   2:37a
    MS2      UNP      1024   1-01-80  12:57a
    NEW123   UNP      1152   1-01-80  12:22a
    PFSFILE  UNP      1408   1-01-80  12:23a
    PURGE    COM      1152   1-01-84   4:46a
    PURGE    DOC      3712   1-01-84  12:17a
    RAMDSK16 COM       672   5-29-83  11:13p
    RAMDSK18 COM       672   5-12-83   2:52p
    RAMDSK32 COM       672   5-29-83  11:00p
    RAMDSK36 COM       672   5-12-83   6:37p
    RM18     ASM     17152   8-05-83   8:28p
    SPEEDUP2 DOC      2816  12-04-83   5:22a
    VISICALC UNP      2432   1-01-80  12:24a
    WORD     UNP      2304   1-01-80  12:59a
    WORDNEW  UNP      2688   1-01-80  12:58a
    ZORK3    UNP       768   1-01-80  12:25a
    COVERPRO ASM      3692   1-13-84   1:24p
    COVERPRO COM      1170   1-13-84   1:26p
    GO       BAT        38   1-11-89   1:55p
    FILES184 TXT      2824   1-27-89   8:51a
    COVER    TXT     18560   2-13-85  12:26p
    GO       TXT      1079   1-25-89  12:10p
           61 file(s)     135615 bytes
                            9728 bytes free
