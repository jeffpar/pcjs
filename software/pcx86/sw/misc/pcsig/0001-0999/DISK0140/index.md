---
layout: page
title: "PC-SIG Diskette Library (Disk #140)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0140/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0140"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 7"

    This disk has several file maintanence programs.  LU, GDEL, GCOPY,
    SQ-USQ, and EJLUTIL's all concern themselves with mass file storage
    and handling.  FREE works like CPM's STAT, by locating free room on
    the disk.  The 8087 files are routines to easily incorporate the Intel
    8087 math chip into high level languages.
    
    How to Start: From DOS prompt enter TYPE EJLUTIL.DOC for information
    about EJLUTIL. then enter LU EJLUTIL to unsqueeze EJLUTIL.  GDEL,
    GCOPY, LU, and SQ-USQ all have .DOC files to explain them.  Enter TYPE
    GDEL.DOC for example.
    
    File Descriptions:
    
    READ     ME   Listing of included files
    EJLUTIL  LBR  A library of useful utilities.  Unpack with LU.EXE
    EJLUTIL  DOC  Documentation for the utility library
    FLCHART  WKS  1-2-3 worksheet macros for drawing flowcharts
    FREE     COM  Reports free space on hard or floppy disk
    GCOPY    EXE  Choose multiple files to copy from full-screen menu
    GDEL     EXE  Choose multiple files to delete from full-screen menu
    GCOPY    DOC  Documentation for GCOPY.EXE
    GDEL     DOC  Documentation for GDEL.EXE
    INTOOLS  PAS  Set of interactive keyboard I/O procedures and functions
    LU       DOC  Documentation for LU.EXE
    LU       EXE  The latest and best library maintainer
    M8087    MAC  Macros for issuing 8087 instructions
    P87_INT       Pascal interface to PAS87.ASM routines
    PAS87    ASM  Assembler subroutines for using 8087 from Pascal
    USQLC10  COM  The latest file unsqueeze utility
    SQPC161  EXE  The latest file squeeze utility
    X2COLOR  COM  Copies the monochrome screen to the color display
    SQ-USQ   DOC  Documentation for SQPC161.EXE and USQLC10.COM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #140, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  FLCHART .WKS         CRC = EB 26

--> FILE:  X2COLOR .COM         CRC = BA 09

--> FILE:  P87_INT .            CRC = FF 80

--> FILE:  PAS87   .ASM         CRC = BD 99

--> FILE:  M8087   .MAC         CRC = D2 87

--> FILE:  FREE    .COM         CRC = A0 97

--> FILE:  GDEL    .DOC         CRC = FC 5E

--> FILE:  LU      .DOC         CRC = 92 F2

--> FILE:  LU      .EXE         CRC = 38 EC

--> FILE:  SQ-USQ  .DOC         CRC = E4 5A

--> FILE:  SQPC161 .EXE         CRC = 95 D1

--> FILE:  GDEL    .EXE         CRC = 3C 0D

--> FILE:  EJLUTIL .DOC         CRC = 2C D8

--> FILE:  EJLUTIL .LBR         CRC = 91 78

--> FILE:  GCOPY   .DOC         CRC = E4 97

--> FILE:  GCOPY   .EXE         CRC = 7B CE

--> FILE:  INTOOLS .PAS         CRC = 2C A1

--> FILE:  USQLC10 .COM         CRC = 72 20

--> FILE:  READ    .ME          CRC = BA 8E

 ---------------------> SUM OF CRCS = CB DE

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## PAS87.ASM

{% raw %}
```
PAGE 64,132
TITLE LISTING 1 - PAS87 PASCAL SUPPORT FOR 8087
;
;	************	BYTE MAGAZINE 	***************
;			SEPTEMBER 1983

MEMOP	MACRO	P1,P2
	PUSH	BP
	MOV	BP,SP
	MOV	BP,[BP+6]
	P1 P2 [BP]
	POP	BP
	RET	2
ENDM

PASSTACK MACRO R1,R2,R3
	LOCAL FLAG
	PUSH	BP
	MOV	BP,SP
	MOV	BX,OFFSET FLAG+2
	MOV	AL,CS:[BX]
	AND	AL,0F8H
	OR	AL,[BP+6]
	MOV	CS:[BX],AL
	JMP	FLAG
FLAG:
	R1 R2 R3
	POP 	BP
	RET	2
ENDM

PAGE

PAS87 	MACRO P1,P2,P3
	IFB <P2>
		PUBLIC F_&P1
		F_&P1 PROC FAR
		P1
		RET
		F_&P1 ENDP
	ELSE
		IFIDN <P2>,<SHORT>
			PUBLIC FSHORT_&P1
			FSHORT_&P1 PROC FAR
			MEMOP P1 P2
			FSHORT_&P1 ENDP
		ELSE
			IFIDN <P2>,<LONG>
				PUBLIC FLONG_&P1
				FLONG_&P1 PROC FAR
				MEMOP P1 P2
				FLONG_&P1 ENDP
			ELSE
				IFIDN <P2>,<TEMP>
				    PUBLIC FTEMP_&P1
				    FTEMP_&P1 PROC FAR
				    MEMOP P1 P2
				    FTEMP_&P1 ENDP
				ELSE
				    IFIDN <P2>,<WORD>
					PUBLIC FWORD_&P1
					FWORD_&P1 PROC FAR
					MEMOP P1 P2
					FWORD_&P1 ENDP
				    ELSE	
					IFIDN <P2>,<ST>
					   PUBLIC FST_&P1
					   FST_&P1 PROC FAR
 					   PASSTACK P1 P2 P3
					   FST_&P1 ENDP
				        ELSE
					   IFIDN <P2>,<SPECIAL>
						PUBLIC FSPEC_&P1
						FSPEC_&P1 PROC FAR			
						MEMOP P1
					   	FSPEC_&P1 ENDP
					ELSE
					   PUBLIC FSTI_&P1
					   FSTI_&P1 PROC FAR
					   PASSTACK P1 P2 P3
					   FSTI_&P1 ENDP
					ENDIF
				    ENDIF
				ENDIF
			   ENDIF
		      ENDIF		
		ENDIF
	ENDIF
ENDM

IF1
	INCLUDE A:M8087.MAC
ENDIF

ASSUME CS:CODE, DS:CODE
CODE  SEGMENT

PAS87	FABS
PAS87	FADD
PAS87	FADD	ST,ST(i)
PAS87	FADD	ST(i),ST
PAS87	FADD	SHORT
PAS87	FADD	LONG
PAS87	FADDP
PAS87	FADDP	ST(i),ST
PAS87	FBLD	SPECIAL
PAS87	FBSTP	SPECIAL
PAS87	FCHS
PAS87	FCLEX
PAS87	FCOM
PAS87	FCOM	ST(i)
PAS87	FCOM	SHORT
PAS87	FCOM	LONG
PAS87	FCOMP
PAS87	FCOMP	ST(i)
PAS87	FCOMP	SHORT
PAS87	FCOMP	LONG
PAS87	FCOMPP
PAS87	FDECSTP
PAS87	FDISI
PAS87	FDIV
PAS87	FDIV	ST(i),ST
PAS87	FDIV	SHORT
PAS87	FDIV	LONG
PAS87	FDIVP	ST(i),ST
PAS87	FDIVR
PAS87	FDIVR	ST,ST(i)
PAS87	FDIVR	ST(i),ST
PAS87	FDIVR	SHORT
PAS87	FDIVR	LONG
PAS87	FDIVRP	ST(i),ST
PAS87	FENI
PAS87	FFREE	ST(i)	
PAS87	FIADD	WORD
PAS87	FIADD	SHORT
PAS87	FICOM	WORD
PAS87	FICOM	SHORT
PAS87	FICOMP	WORD
PAS87	FICOMP	SHORT
PAS87	FIDIV	WORD
PAS87	FIDIV	SHORT
PAS87	FIDIVR	WORD
PAS87	FIDIVR	SHORT	
PAS87	FILD	WORD
PAS87	FILD	SHORT
PAS87	FILD	LONG
PAS87	FIMUL	WORD
PAS87	FIMUL	SHORT
PAS87	FINCSTP
PAS87	FINIT
PAS87	FIST	WORD
PAS87	FIST	SHORT
PAS87	FISTP	WORD
PAS87	FISTP	SHORT
PAS87	FISTP	LONG
PAS87	FISUB	WORD
PAS87	FISUB	SHORT
PAS87	FISUBR	WORD
PAS87	FISUBR	SHORT
PAS87	FLD	ST(i)
PAS87	FLD	SHORT	
PAS87	FLD	LONG
PAS87	FLD	TEMP
PAS87	FLDCW	SPECIAL
PAS87	FLDENV	SPECIAL	
PAS87	FLDLG2
PAS87	FLDLN2	
PAS87	FLDL2E
PAS87	FLDL2T
PAS87	FLDPI
PAS87	FLDZ
PAS87	FLD1
PAS87	FMUL
PAS87	FMUL	ST(i),ST
PAS87	FMUL	ST,ST(i)
PAS87	FMUL	SHORT
PAS87	FMUL	LONG
PAS87	FMULP	ST(i),ST
PAS87	FNCLEX
PAS87	FNDISI
PAS87	FNENI
PAS87	FNINIT
PAS87	FNOP
PAS87	FNSAVE	SPECIAL
PAS87	FNSTCW	SPECIAL
PAS87	FNSTENV	SPECIAL
PAS87	FNSTSW	SPECIAL
PAS87	FPATAN
PAS87	FPREM
PAS87	FPTAN
PAS87	FRNDINT
PAS87	FRSTOR	SPECIAL
PAS87	FSAVE	SPECIAL
PAS87	FSCALE
PAS87	FSQRT
PAS87	FST	ST(i)
PAS87	FST	SHORT
PAS87	FST	LONG
PAS87	FSTCW	SPECIAL
PAS87	FSTENV	SPECIAL
PAS87	FSTP	ST(i)
PAS87	FSTP	SHORT
PAS87	FSTP	LONG
PAS87	FSTP	TEMP
PAS87	FSTSW	SPECIAL
PAS87	FSUB	
PAS87	FSUB	ST,ST(i)
PAS87	FSUB	ST(i),ST
PAS87	FSUB	SHORT
PAS87	FSUB	LONG
PAS87	FSUBP	ST(i),ST
PAS87	FSUBR
PAS87	FSUBR	ST(i),ST
PAS87	FSUBR	ST,ST(i)
PAS87	FSUBR	SHORT
PAS87	FSUBR	LONG
PAS87	FSUBRP	ST(I),ST
PAS87	FTST
PAS87	FWAIT
PAS87	FXAM
PAS87	FXCH
PAS87	FXCH	ST(i)
PAS87	FXTRACT
PAS87	FYL2X
PAS87	FYL2XP1
PAS87	F2XM1

PAGE

;PROCEDURE C_IBM_8087(VAR X : REAL);

PUBLIC C_IBM_8087

C_IBM_8087	PROC	FAR
	PUSH	BP
	MOV	BP,SP
	MOV	BP,[BP+6]
	MOV	AX,[BP+2]
	CMP	AX,0
	JNE	CONTIBM
	CMP	WORD PTR [BP],0
	JE	EXITIBM
CONTIBM:
	DEC	AH
	DEC	AH
	RCL	AL,1
	RCR	AH,1
	RCR	AL,1
	MOV	[BP+2],AX
EXITIBM:
	POP	BP
	RET	2
C_IBM_8087	ENDP

;PROCEDURE C_8087_IBM(VAR X : REAL);

PUBLIC C_8087_IBM

C_8087_IBM	PROC	FAR
	PUSH	BP
	MOV	BP,SP
	MOV	BP,[BP+6]
	MOV	AX,[BP+2]
	CMP	AX,0
	JNE	CONT8087
	CMP	WORD PTR [BP],0
	JE	EXIT8087
CONT8087:
	RCL	AL,1
	RCL	AH,1
	RCR	AL,1
	INC	AH
	INC	AH
	MOV	[BP+2],AX
EXIT8087:
	POP	BP
	RET	2
C_8087_IBM	ENDP

;FUNCTION CHK87 : INTEGER

PUBLIC CHK87

CHK87	PROC	FAR
	PUSH	AX
	PUSH	BP
	MOV	BP,SP
	FSTSW	[BP+2]
	POP	BP
	POP	AX
	SAHF
	JB	A_LESS_OR_UNORDERED
	JNE	A_GREATER
A_EQUAL:
	MOV	AL,0
	JMP	SHORT EXIT_CHK
A_GREATER:
	MOV	AL,1
	JMP	SHORT	EXIT_CHK
A_LESS_OR_UNORDERED:
	JNE	A_LESS
A_B_UNORDERED:
	MOV	AL,3
	JMP	SHORT EXIT_CHK
A_LESS:
	MOV	AL,2
EXIT_CHK:
	MOV	AH,0
	RET
CHK87	ENDP

;FUNCTION EXAM87 : INTEGER

PUBLIC	EXAM87
EXAM87	PROC	FAR
	FXAM
	PUSH	AX
	PUSH	BP
	MOV	BP,SP
	FSTSW	[BP+2]
	POP	BP
	POP	AX
	MOV	AL,AH
	AND	AX,4007H
	SHR	AH,1
	SHR	AH,1
	SHR	AH,1
	OR	AL,AH
	MOV	AH,0
	RET
EXAM87	ENDP
PAGE	

;FUNCTION GETST : INTEGER

PUBLIC GETST

GETST	PROC	FAR
	PUSH	AX
	PUSH	BP
	MOV	BP,SP
	FSTSW	[BP+2]
	POP	BP
	POP	AX
	MOV	AL,AH
	AND	AX,0038H
	SHR	AL,1
	SHR	AL,1
	SHR	AL,1
	RET
GETST	ENDP

;FUNCTION STATUS : INTEGER

PUBLIC STATUS

STATUS 	PROC 	FAR
	PUSH	AX
	PUSH	BP
	MOV	BP,SP
	FSTSW	[BP+2]
	POP	BP
	POP	AX
	MOV	AH,0
	RET
STATUS	ENDP

CODE	ENDS
END
```
{% endraw %}

## SQ-USQ.DOC

{% raw %}
```
SQUEEZE/UNSQUEEZE   File compression routines.		 March 15, 1984
						      (SQPC161, USQLC10)

The squeeze/unsqueeze programs were originally deveolped for CP/M by
Richard Greenlaw.  The squeeze program runs a data or program file through
a rather complicated compression routine to produce a new file which is
usually considerably smaller but can be used by the unsqueeze program to
reproduce the original file, exactly.  The compression routines uses the
Huffman algorithm which represents frequently occurring characters with
fewer bits.  It is not necessary to know the internal details to use
these programs.

Files found on bulletin boards and user libraries are often squeezed to
conserve file space and reduce transmission time.  The exact percentage
of compression depends on the data in the file, with documentation files
ususally squeezing best.

Initial translations of the program to the IBM PC were slow, and did not
work in all cases.  The current versions (SQPC161.EXE and USQLC10.COM)
were translated as closely as possible from the CP/M versions, and work
in all cases identically to the CP/M versions.	USQLC10 includes an
error checking function, and will usually detect a file which was squeezed
incorrectly by an older version of sq.com.

As a result of returning to the CP/M versions, some of the PC specific
amenities (such as redirecting output to con:) were removed -- accuracy
first!	A future version will put them back.

I suggest that you rename the files to SQ and USQ on your working copy, the
version suffix is just so you'll recognize the new versions as they appear.
The documentation always refers to them as SQ and USQ.


					Alan Losoff
					Milwaukee, Wisconsin





SQUEEZE/UNSQUEEZE     Squeezing Files				  page 2
(SQPC161.EXE)						  March 15, 1984


The squeeze program squeezes a file and produces a new output file with
the 2nd letter of the file extension changed to "Q".  For example

	SQ  THING.BAS

creates a new file called THING.BQS.  The original filename is preserved as
part of the squeezed file, as is all the information needed to recreate it.
The ouput is to the default drive (in the DOS > prompt).

The output filename may not be varied, but an output drive may be specified.
Thus
	SQ  B:	 THING.BAS

creates THING.BQS on drive B.  It reads the input from the default drive if
no drive is specified on the file itself.  If THING.BQS already exists, it
is overwritten.

Several filenames/drives may be specified on one command line.	They
are processed in order.  Thus

	SQ  THING.BAS  WHAT.ASM  B:  WHO.DOC  A:  B:WHICH.ASM

squeezes THING.BAS and WHAT.ASM from the default drive to THING.BQS and
WHAT.AQM on the same drive, then squeezes WHO.DOC from the default drive
to WHO.DQC on drive b, and finally squeezes WHICH.ASM from drive b to
WHICH.AQM on the default drive.


If no parameters are given on the command line, SQ prompts for filenames
(or drives) one at a time from the keyboard.  This allows you to enter
filenames and drives after removing the disk containing SQ.  Also, using
MSDOS redirection, you can enter filenames via a file or pipeline.

Restrictions:
    The current version will only funtion with MSDOS 2.0 or higher, but
paths are not supported.





SQUEEZE/UNSQUEEZE     Unqueezing Files				  page 3
(USQLC10.COM)						  March 15, 1984


The purpose of this program is to unsqueeze files created by SQ.COM,
restoring them to their original condition.  This is a fast C version
compiled with Lattice C.  It runs over 5 times as fast as the Pascal
version on most IBM boards.  It also has error checking to detect files
which were improperly squeezed by an old version of SQ.

You may specify as many input files on a command line as fit, the output
filename is reconstructed from the squeezed data.  Output is to the
default drive and path, but the drive may be changed by including a
drive specification with no filename.  Path cannot be altered.

For example (assuming you have renamed it to USQ.COM)

    USQ  PROG1.CQM  B:PROG2.CQM  B:  PROG3.DQC

will unsqueeze prog1 and prog2 (from drive b:) to the default drive and
prog3 to drive b:.  The new files will have the original name, most
likely prog1.com, prog2.com and prog3.doc in this case.  If you already
have a file by that name, it will be overwritten.

Two error messages are possible, UNEXPECTED EOF or CRC ERROR.  In either
case some error has crept in due to copying or transmission, or
the file was not properly squeezed in the first place. The resulting file
is most likely unusable.  WARNING -- older versions of USQ do not check
CRC, and may appear to unsqueeze a file correctly even if not.

Make sure you have enough disk space to handle the output file which could
be over twice the size of the input file.  It is best to target your output
to a blank diskette (or a temporary directory), since the output file name
will be the name of the file originally squeezed, and may not be the name
you expect.  (I clobbered a good file once, when I unsqueezed a program
named BOB.DQC and the output file was MANUAL.DOC).  Future versions will
give you the option of changing the ouput name.

Restrictions:
     This program should work in version 1.1 or higher of MSDOS or PCDOS.
It does not handle pathnames.



of returning to the CP/M versions, some of the PC specific
amenities (such as redirecting output to con:) were
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0140

     Volume in drive A has no label
     Directory of A:\

    FLCHART  WKS      8192   3-25-84   2:17a
    X2COLOR  COM       128   3-25-84   2:15a
    P87_INT           5760   3-25-84   2:13a
    PAS87    ASM      5120   3-25-84   2:11a
    M8087    MAC      7296   3-25-84   2:10a
    FREE     COM      1024   3-25-84   2:08a
    GDEL     DOC      1024   3-25-84   1:59a
    LU       DOC      6144   3-25-84   1:50a
    LU       EXE     22528   3-25-84   1:48a
    SQ-USQ   DOC      5504   3-25-84   1:43a
    SQPC161  EXE     21376   3-25-84   1:42a
    GDEL     EXE     13312   3-25-84   1:35a
    EJLUTIL  DOC      7040   3-25-84   1:08a
    EJLUTIL  LBR      5504   3-25-84   1:06a
    GCOPY    DOC      1024   3-25-84   1:05a
    GCOPY    EXE     14336   3-25-84   1:00a
    INTOOLS  PAS      3968   3-25-84  12:57a
    USQLC10  COM     12288   2-05-84   1:12a
    READ     ME       1169   4-02-84   5:31p
    CRC      TXT      1452  11-13-84   2:32p
    CRCK4    COM      1536  10-21-82   7:54p
           21 file(s)     145725 bytes
                           12288 bytes free
