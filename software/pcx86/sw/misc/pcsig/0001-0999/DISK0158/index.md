---
layout: page
title: "PC-SIG Diskette Library (Disk #158)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0158/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0158"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "IBM USERS GROUP #3"

    File Descriptions:
    
    ???????  NL   Data file (21 files).
    ADDRESS  SCR  Data file.
    AUTOEXEC BAT  Batch file to automatically start the program.
    ???????  PIC  Data picture file (10 files).
    DESCRIBE      Description about program.
    EXPNDTAB ASM  Assembly program to expand tabs.
    ???????? PRO  Data file (4 files).
    MASTHEAD      Information file.
    NEWS     EXE  Main program.
    PCUGNEWS TOC  Information file.
    TESTTAB  PAS  Pascal program to expand tabs.
    WEBER    SCR  Article from the author.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #158, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  ADDRESS .NL          CRC = 93 C9

--> FILE:  ADDRESS .SCR         CRC = ED 59

--> FILE:  AUTOEXEC.BAT         CRC = 00 00

--> FILE:  BECKLEY .NL          CRC = C1 2F

--> FILE:  BYSNC   .NL          CRC = F1 5C

--> FILE:  CHIMENE .NL          CRC = AB 69

--> FILE:  CONSIGLO.NL          CRC = 86 EB

--> FILE:  CUMMING .NL          CRC = 78 55

--> FILE:  CURUGS  .PIC         CRC = 80 14

--> FILE:  DESCRIBE.            CRC = 60 A8

--> FILE:  DW1     .NL          CRC = B3 54

--> FILE:  DW2     .NL          CRC = 4D 1D

--> FILE:  DWLEGAL .NL          CRC = CE 36

--> FILE:  EDITOR  .PIC         CRC = 05 E5

--> FILE:  EDTORIAL.NL          CRC = A7 FC

--> FILE:  EXPNDTAB.ASM         CRC = 27 E2

--> FILE:  FONH    .PIC         CRC = 6B A1

--> FILE:  FONS    .PIC         CRC = 83 35

--> FILE:  GERTRUDE.NL          CRC = 8F FE

--> FILE:  HARRINGT.NL          CRC = EF 32

--> FILE:  IBMCMPCT.PRO         CRC = F8 31

--> FILE:  IBMCOLOR.PRO         CRC = 8A 48

--> FILE:  IBMGRAPH.PRO         CRC = E1 01

--> FILE:  IBMMATRX.PRO         CRC = 00 C9

--> FILE:  MASTHEAD.            CRC = F7 7C

--> FILE:  MINASI  .NL          CRC = D2 0E

--> FILE:  NEWS    .EXE         CRC = B4 CE

--> FILE:  NEWSLOGO.PIC         CRC = B4 A6

--> FILE:  NPANN   .PIC         CRC = CD 1E

--> FILE:  PCUGNEWS.TOC         CRC = BE 49

--> FILE:  PCWRITE .NL          CRC = 19 5A

--> FILE:  PELTO   .NL          CRC = E5 21

--> FILE:  PINTE   .NL          CRC = 98 1D

--> FILE:  SCHIEVE .NL          CRC = 96 F8

--> FILE:  TANDT   .PIC         CRC = 89 87

--> FILE:  TESTTAB .PAS         CRC = 61 84

--> FILE:  UGASK   .PIC         CRC = 82 27

--> FILE:  UGOS    .PIC         CRC = A7 1C

--> FILE:  VANDR   .PIC         CRC = 1D B1

--> FILE:  WEBER   .NL          CRC = 22 DD

--> FILE:  WEBER   .SCR         CRC = 06 CD

--> FILE:  WESTENDP.NL          CRC = 17 DA

--> FILE:  WHITE   .NL          CRC = 48 B9

--> FILE:  WOLPERT .NL          CRC = D3 FF

--> FILE:  XXX     .            CRC = E0 09

 ---------------------> SUM OF CRCS = 91 FE

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## EXPNDTAB.ASM

{% raw %}
```
page 75,132
codeseg segment para 'code'
	assume cs:codeseg,ds:codeseg,es:codeseg
;=======================================================================
;= EXPAND_TABS							       =
;= -----------							       =
;= Function: Expand tab characters into blanks (TABLINE-->NOTABLINE    =
;=								       =
;= Call: EXPAND_TABS(var TABLINE,NOTABLINE:lstring);		       =
;=	     where  TABLINE   = input line (may have tabs in it).      =
;=		    NOTABLINE = final line			       =
;=								       =
;= Calling parameter offsets (frame contents):			       =
;=		+00,02,04 caller's BP, IP, CS registers                =
;=		+06 address of lstring NOTABLINE		       =
;=		+08 max length of lstring NOTABLINE		       =
;=		+10 address of lstring TABLINE			       =
;=		+12 max length of lstring TABLINE		       =
;=======================================================================
EXPAND_TABS  proc far
	 public EXPAND_TABS	;use from Pascal
	 push	bp		;save callers frame pointer
	 mov	bp,sp		;set frame pointer
	 mov	si,[bp+6]	;SI=A(NOTABLINE)
	 mov	byte ptr [si],0 ;default length of NOTABLINE = 0
	 mov	bx,[bp+10]	;address of TABLINE in caller's DS seg
	 sub	cx,cx		;CX = 0
	 mov	cl,[bx] 	;CX = current TABLINE length
	 inc	bx		;skip TABLINE[0] = lstring length
	 push	es		;save caller's extra seg reg.
	 jcxz	exrtrn		;don't process if nothing in string
				;------ Set ES to DS for 'Scan ------
	 mov	ax,ds		;ES & DS are used by scan(SCAB & SCAW)
	 mov	es,ax		;instructions and must get data that is
				;defined in the caller's DS area.
	 push	cx		;save length of TABLINE
				;------ Are there any tab char? ------
	 mov	di,bx		;DI= offset fo 1st element of TABLINE
	 cld			;clear DF, causing incr thru TABLINE
	 mov	al,09H		;Compare char 9 = TAB
REPNE	 scasb			;scan TABLINE for AX char - repeat CX
	 pop	cx		;CX= length of TABLINE
	 je	yestabs 	;JMP=> tabs found
				;------ Is line all blank? ------
	 mov	di,bx		;DI= offset of 1st element of TABLINE
	 mov	al,20H		;Compare char = blank
REPE	 scasb			;scan TABLINE for non blnk, CX times
	 je	exrtrn		;return if all blank (leave length=0)
	 mov	si,[bp+10]	;------Move TABLINE to NOTABLINE------
	 mov	di,[bp+6]	;A(NOTABLINE)
	 sub	cx,cx		;
	 mov	cl,[si] 	;length of TABLINE
	 inc	cx		;include byte 0 in move
REP	 movsb			;TABLINE -> NOTABLINE
	 jmp	short exrtrn	;exit
				;------ Process tab character ------
yestabs: sub	dx,dx		;DX=last col of TABLINE processed
	 dec	bx		;BX= A(TABLINE[0])
	 mov	di,bx		;DI= A(TABLINE[0])
				;      === GET_BYTE ===
tabloop: inc	dx		;incr TABLINE pointer
	 mov	bx,dx		;get updated pointer
	 mov	al,[bx][di]	;get nxt byte = A(TABLINE)+pointer
				;      =================
	 cmp	al,09H		;is this a tab char?
	 je	tabfound	;jmp if tab
	 call	PUT_BYTE	;put AL to NOTABLINE
	 jmp	short tabend	;
tabfound:sub	ax,ax		;
	 mov	al,[si] 	;AX= col position of nxt char
	 push	cx		;save counter
	 mov	cx,8		;COLUMN/8
	 div	cl		;AX/CL --> AL=Quotient	 AH=Remainder
	 sub	cl,ah		;CX= 8-(COLmod 8) = # blanks to insert
	 mov	al,20H		;blank char
tabblnk: call	PUT_BYTE	;put it into NOTABLINE
	 loop	short tabblnk	;repeat for all blanks to fill in
	 pop	cx		;get length left in NOTABLINE
tabend:  loop	short tabloop	;do all NOTABLINE char
				;---- Return to calling program ----
exrtrn:  pop	es		;restore caller's ES
	 pop	bp		;restore caller's frame pointer
	 ret	8
				;------------ DATA--------------
COL_IN	 db	0		;current col in NOTABLINE
				;(1st chr is length of expanded string)
EXPAND_TABS endp		;
				;========= PUT_BYTE =========
PUT_BYTE proc	near		;Move AL to nxt byte of NOTABLINE
	 inc	byte ptr [si]	;incr NOTABLINE[0] = lstring length
	 sub	bx,bx		;
	 mov	bl,byte ptr [si];pointer to nxt byte
	 add	bx,si		;A(NOTABLINE)+next byte
	 mov	[bx],al 	;save byte
	 ret			;return to calling point
PUT_BYTE endp			;===================================
codeseg  ends			;end segment
	 end			;end assembly
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0158

     Volume in drive A has no label
     Directory of A:\

    ADDRESS  NL      11264   3-16-84  12:53a
    ADDRESS  SCR     10958   3-16-84  12:48a
    AUTOEXEC BAT        66   5-01-84   4:38p
    BECKLEY  NL       4096   3-16-84  12:59a
    BYSNC    NL       4096   3-16-84   2:50a
    CHIMENE  NL       3072   3-16-84   2:44a
    CONSIGLO NL       4096   3-16-84   2:48a
    CRC      TXT      2674  11-14-84  11:39a
    CRCK4    COM      1536  10-21-82   7:54p
    CUMMING  NL       3072   3-16-84   2:53a
    CURUGS   PIC      2868   2-22-84  12:30a
    DESCRIBE           690   5-01-84   4:38p
    DW1      NL       6144   3-16-84  12:56a
    DW2      NL       7168   3-16-84  12:57a
    DWLEGAL  NL       4096   3-16-84   2:49a
    EDITOR   PIC      3091   2-22-84  12:24a
    EDTORIAL NL       2048   3-16-84   7:57a
    EXPNDTAB ASM      3986   5-02-84   9:48a
    FONH     PIC       896   3-13-84  12:05a
    FONS     PIC      2680   2-22-84  12:29a
    GERTRUDE NL       2048   3-16-84  12:41a
    HARRINGT NL       2048   3-16-84   2:54a
    IBMCMPCT PRO       496   4-19-84   3:57p
    IBMCOLOR PRO       563   4-19-84   9:27a
    IBMGRAPH PRO       570   4-19-84   1:39p
    IBMMATRX PRO       519   4-19-84   9:51a
    MASTHEAD          1457   3-16-84   1:03a
    MINASI   NL       4096   3-16-84   2:56a
    NEWS     EXE     78080   5-01-84   2:59p
    NEWSLOGO PIC     16512   2-16-84   9:57a
    NPANN    PIC      4533   3-01-84   9:10a
    PCUGNEWS TOC      1480   3-16-84  12:50a
    PCWRITE  NL       6144   3-16-84  12:54a
    PELTO    NL       3072   3-16-84  12:44a
    PINTE    NL       5120   3-16-84  12:50a
    SCHIEVE  NL       6144   3-16-84  12:52a
    TANDT    PIC      2198   2-22-84  12:28a
    TESTTAB  PAS      1004   5-02-84   9:15a
    UGASK    PIC      2362   2-22-84  12:29a
    UGOS     PIC      3038   2-22-84  12:28a
    VANDR    PIC      3491   2-22-84  12:28a
    WEBER    NL       4096   3-16-84  12:58a
    WEBER    SCR      3537   3-16-84  12:16a
    WESTENDP NL       4096   3-16-84  12:46a
    WHITE    NL      19456   3-16-84   1:03a
    WOLPERT  NL       7168   3-16-84   1:01a
    XXX               1280   5-20-84   3:55p
           47 file(s)     263205 bytes
                           46080 bytes free
