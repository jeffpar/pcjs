---
layout: page
title: "PC-SIG Diskette Library (Disk #142)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0142/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0142"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROGRAMERS UTILITIES #6"

    A disk for advanced and advancing programmers!  This disk holds quite
    a varied list of utilities.  It contains Logo programs, BASIC code,
    Lisp in Pascal, Assembly code, C code, and graphics code.  BASSUB
    calls DOS 2.x functions from BASIC programs.  KVUTIL provides a screen
    management function for DOS. AFT8087 and TRAN both support math
    functions in ASM and C respectively.  LDIR and LTYPE add screen
    display and printing of files squeezed by LAR. The other files fill
    out the disk and are "icing on the disk".
    
    System Requirements: Some programs require BASIC; C compiler and
    assembler software also.
    
    How to Start: Consult the .DOC and README files for directions and
    documentation.  To run the BASIC programs, consult the directions in
    GETTING STARTED for your configuration.  To run a program with the
    suffix .COM or .EXE, just type its name, i.e., for LTYPE.EXE, type
    LTYPE <ENTER>.
    
    File Descriptions:
    
    READ     ME   Listing of included files
    BASSUB   BAS  Call DOS 2.0 functions from BASIC
    AFT8087  MAC  Assembly macros and interface for Fortran access to 8087
    BASSUB   OBJ  Part of BASSUB.BAS
    BIOS     MAC  Assembly macros for accessing all BIOS functions
    CLINK    COM  Program to load text fonts for graphics display
    CLINK    ASM  Source for CLINK.COM
    GRDRAW   LF   Logo program for interactive graphics drawing
    DOS      MAC  Assembly macros for accessing all DOS 2.0 functions
    KVUTIL   DOC  Documentation for KVUTIL.COM
    KVSET    COM  Part of KVUTIL.COM
    KVUTIL   COM  Display control functions (Auto screen blank, scroll lock)
    HP       C    HP-style RPN calculator in c  (Requires TRAN.C -see below)
    PCUTIL   DOC  Documentation for PCUTIL.DOC
    PCUTIL   COM  Several screen and keyboard utility functions
    LISP     PAS  A simple LISP interpreter in Pascal
    LTYPE    C    Source for LTYPE.EXE
    LTYPE    EXE  Type a library file without extracting it - very useful
    LDIR     C    Source for LDIR.EXE
    LDIR     DOC  Documentation for LDIR.EXE
    LDIR     EXE  List the table of contents of library files made by LAR
    XENIX    ASM  Xenix-like subroutines for accessing DOS 2.0 functions
    VUE      EXE  View file in hex and ASCII
    UTILITES MAC  A set of utility macros and subroutines for IBM Assembler
    TRAN     C    Transcendental functions in c
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BASSUB.BAS

{% raw %}
```bas
100 ' *****************************************************
110 ' ***         TEST PROGRAM FOR BASSUB.OBJ           ***
120 ' *****************************************************
130 '
140 ' IMPORTANT :
150 '
160 '     The sub-directory name must end with a null
170 ' character or CHR$(0).
180 '
200 ' AVAILABLE FUNCTIONS :
210 '
220 '     RETREG  : returns segment register values
230 '                   CS%, DS%, ES%, SS%
240 '                   will contain values of the registers
250 '
300 '     MKDIR   : Make sub-directory DIR$
310 '                   ER% = -1 (True) if there is an error
320 '
400 '     CHDIR   : Change sub-directory DIR$
410 '                   ER% = -1 (True) if there is an error
420 '
500 '     RMDIR   : Remove sub-directory DIR$
510 '                   ER% = -1 (True) if there is an error
520 '
600 ' LINKING :
610 '
620 '     When linking the library and the compiled program
630 ' remember to specify BASSUB.OBJ. If not specified, the
640 ' above functions will not be available.
650 '
700 ' EXAMPLE PROGRAM :
710 '
720 '     The following is an example program :
730 '
740 '           [ 1 ] It will print the values of the
750 '                 segment registers.
760 '           [ 2 ] It will create sud-dir "\TEST"
770 '           [ 3 ] It will change to sub-dir "\TEST"
780 '           [ 4 ] It will then change to "\"
790 '           [ 5 ] Finally, it will remove "\TEST"
800 '
900 ' HAVE FUN !
910 '
920 '     For more information refer to the DOS 2.00 manual,
930 ' the BASIC manual, and the BASIC Compiler Manual.
940 '
950 ' PROGRAM WRITTEN BY :
960 '
970 '     SWEE BOON LIM
980 '     1231 4th STREET, SW, WASHINGTON, DC 20024
990 '     TEL : 646-0903, 646-0904
995 '     Please call if you discover any problems
997 ' with the subroutines. Thank you.
999 '
1000 CS% = 0
1010 DS% = 0
1020 ES% = 0
1030 SS% = 0
1100 CALL RETREG (CS%,DS%,ES%,SS%)
1110 PRINT "CS : ";HEX$(CS%)
1120 PRINT "DS : ";HEX$(DS%)
1130 PRINT "ES : ";HEX$(ES%)
1140 PRINT "SS : ";HEX$(SS%)
1200 NUL$ = CHR$(0)
1210 DIR$ = "C:\TEST"+NUL$
1230 CALL MKDIR (DIR$,ER%) : PRINT "MAKE SUB-DIR : "; : GOSUB 2000
1240 CALL CHDIR (DIR$,ER%) : PRINT "CHANGE SUB-DIR : "; : GOSUB 2000
1250 D$ = "C:\"+NUL$
1260 CALL CHDIR (D$,ER%) : PRINT "GOTO ROOT DIR : "; : GOSUB 2000
1280 CALL RMDIR (DIR$,ER%) : PRINT "REMOVE SUB-DIR : "; : GOSUB 2000
1997 PRINT
1998 PRINT "Press any key to continue.";
1999 K$ = INKEY$ : IF K$ = "" THEN 1999 ELSE END
2000 IF ER% THEN PRINT "FAILURE" ELSE PRINT "SUCCESSFUL"
2010 RETURN
```
{% endraw %}

## CLINK.ASM

{% raw %}
```
         name      clink
         page      55,132
         title     'CLINK - Load and Link Graphics Characters'
         assume    cs:cseg
;
; CLINK - Load and Link Graphics Character Table
;
; Original by Ray Duncan, published in DDJ #74
; Revised by Patrick Banchy, 1249 Park Ave. #5C, NYC
;
; The IBM PC allows the user to define the meanings of the
; characters in the range 80H-FFH in the graphics modes.
;
; This program when first called will allocate the 1 KB of
; memory needed for the table.  Subsequent calls will load
; the table specified in the invocation into memory.
;
fcb      equ       05ch      ;default file control block
;
eom      equ       '$'       ;literal ending of string
cr       equ       13        ;ASCII carriage return
lf       equ       10        ;ASCII line feed
;
cseg     segment   para public 'CODE'
         org       100h

clink:                       ;entry from PC-DOS
         xor       ax,ax     ;see if table has been
         mov       ds,ax     ;previously allocated
         mov       bx,07ch   ;offset of vector
                             ;pick up address of
                             ;table in DS:DX
         lds       dx,dword ptr [bx]
         mov       ax,ds
         or        ax,dx     ;have we been here before?
         jnz       not_1st   ;yes,so read the table
                             ;no,set up table
         mov       ax,cs     ;address (restore proper
         mov       ds,ax     ;contents of DS first)
         xor       dx,dx
         mov       ah,37     ;using DOS Set Interrupt
         mov       al,1fh    ;call
         int       21h
                             ;tell the operator whats up
         mov       dx,offset nxt_job
         mov       ah,9
         int       21h
                             ;save 1 kbytes for the
         mov       dx,400h   ;table, terminate but
         int       27h       ;stay resident.

not_1st:                     ;read in graphics table
         mov       ah,26     ;first set DTA address
         int       21h
         mov       ax,cs     ;restore DS
         mov       ds,ax
         mov       dx,offset fcb
         mov       ah,15     ;try and open file
         int       21h
         or        al,al     ;does it exist?
         jz        file_ok   ;yes,proceed
                             ;no,warn operator
         mov       dx,offset Boo_boo
         mov       ah,9
         int       21h
         mov       ah,0      ;return to PC-DOS
         int       21h

file_ok:                     ;file exists,read table
         mov       bx,offset fcb
                             ;set record size = 1024
         mov       word ptr 14 [bx],400h
                             ;set current rec=zero
         mov       byte ptr 32 [bx],0
         mov       dx,offset fcb
         mov       ah,20     ;sequential read
         int       21h
         mov       dx,offset loaded
         mov       ah,9      ;tell operator load
         int       21h       ;was successful
         mov       ah,0      ;and return to PC-DOS
         int       21h

;
; messages for console
;
Boo_boo  db        cr,lf,'No such file',cr,lf,eom
Loaded   db        cr,lf,'Character table loaded',cr,lf,eom
Nxt_job  db        cr,lf,'Memory and Link for table initialized,'
         db        cr,lf,'Rerun to load the table',cr,lf,lf,eom

cseg     ends

         end       clink
```
{% endraw %}

## LDIR.DOC

{% raw %}
```
3-1-84

This is a hack of the latest (Oct 83) version of ldir..
This version is intended to run under MS-dos, and has
most of the changes neccessary to pull it away from non
standard BDS-C.

It has been set up for Lattice.c and will compile with
standard ctype.h and stdio.h files.

	Pete Mack
	Simi Valley Ca.
```
{% endraw %}

## XENIX.ASM

{% raw %}
```
title MSDOS 2.00 Function Library for Lattice C
;
;........................................
;.					.
;.	DOS 2.00 Functions for		.
;.	       Lattice			.
;.					.
;.	T. Jennings 23 June 83		.
;.	  created 13 Sept 82		.
;.					.
;........................................
;
;MSDOS 2.00 support for Lattice. These will NOT
;work for version 1.xx of DOS. All support full
;paths. The function names are the same as the
;standard library names with "_x" prepended, to
;accomodate my file system nameing heirarchy.
;
;NOTE: You cannot mix these calls with the 
;Lattice library calls: i.e. open with _xopen()
;and write with open(). You must use ALL or
;NONE.
;
;These functions all use the DOS buffers. 
;
;Detailed info is given in the title block for
;each function. A quick description follows.
;
;handle= _xopen(pathname,access);
;int handle,access;
;char *pathname;
;
;	Open a file. handle returns either 
;the DOS handle, or -1 if error (file not 
;found). Access is: 0 == read only, 1 == write
;only, 2 == read/write.
;
;handle= _xcreate(pathname,access);
;
;	Create a new file, delete any existing
;copy. Access is not used: use 0. Returns the
;handle or -1 if error.
;
;v= _xread(handle,buffer,count);
;v= _xwrite(handle,buffer,count);
;int v,handle,count;
;char *buffer;
;
;	File read or write to an opened or
;created file. reads or writes 'count' bytes
;to the file 'handle', to or from 'buffer'.
;Returns the number of bytes processed: equal
;to 'count' if sucessful.
;
;error= _xclose(handle)
;int error;
;
;	Close an open file. Returns -1 if 
;error. Any buffers are flushed at this point.
;
;_xdelete(pathname);
;
;	Remove the file from the file
;system.
;
;fsize= _fsize(pathname);
;long fsize;
;
;	Returns the size of the file in bytes.
;Returns 0 if no file. Do NOT call inbetween
;calls to _xfind().
;
;found= _xfind(pathname,filename,&fsize,attrib,flag);
;int found,flag,attrib;
;char *pathname,filename[14];
;long fsize;
;
;Search for the specified pathname. flag should
;be 0 for the first call, non-zero for all
;subsequent calls. _xfind() returns true if a
;match was found, and the found file is 
;returned in filename[], in ASCIZ format.
;Attrib is the DOS attributes to match; I
;will not describe that mess here. _xfind()
;returns the size of the file in fsize. (Don't
;forget to pass the address of fsize.)
; For example:
;
;int i;
;char filename[14];
;long fsize;
;
;	i= 0;
;	while (_xfind("\\bin\\*.*",filename,&fsize,0,i)) {
;		printf("File: %14s Size: %lu\n",filename,fsize);
;		++i;
;	}
;	printf("%u matching files.\n",i);
;
;Prints the names of all matching disk files. 
;Any other calls (except_fsize()) can be made
;in between calls to _xfind().
;
dgroup group data
pgroup group prog

prog segment byte public 'prog'

public	_xopen,_xcreate,_xclose
public	_xread,_xwrite
public	_xfind
public	_fsize
public 	_xdelete
assume cs:pgroup,ds:dgroup
;;
;;	handle= _xcreate(name,access)
;;	handle= _xopen(name,access)
;;
;;	int handle;		-1 if error,
;;	int access;		0=r, 1=w, 2=r/w
;;	char *name;		null terminated
;;
;;Open and create functions. The name is a null
;;terminated string. The access byte is passed
;;directly to DOS. All errors are translated to
;;a -1 return value.
;;
_xopen proc near
	mov	ah,61
	jmp	short opncrt
_xcreate proc near
	mov	ah,60

opncrt:	push	bp
	mov	bp,sp
	mov	dx,[bp+4]	;pathname,
	mov	al,[bp+6]	;access,
	xor	bx,bx
	xor	cx,cx
	int	21h		;do it,
	jnc	opncrt1
	mov	ax,-1		;error!
opncrt1:pop	bp
	ret

_xcreate endp
_xopen endp
;;
;;xclose(handle)
;;int handle;
;;
;;Close a handle opened by XOPEN or XCREATE.
;;Returns -1 if close error.
;;
_xclose proc near
	mov	ah,62
	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;handle,
	int	21h
	pop	bp
	ret

_xclose endp
page
;;
;;	count= xread(handle,buffer,size)
;;	count= xwrite(handle,buffer,size)
;;
;;	int count;	bytes actually r/w
;;	int handle;
;;	char *buffer;
;;	int size;	byte count,
;;
;;	Read or write (size) bytes from the
;;file (handle). The return value is the number 
;;of bytes actually processed.
;;
;;	No text translation is done. All
;;bytes are processed as read or written. No
;;check is done (or is possible) on the buffer
;;size.
;;
_xread proc near
	mov	ah,63
	jmp	short rdwrt
_xwrite proc near
	mov	ah,64

rdwrt:	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;handle,
	mov	cx,[bp+8]	;count,
	mov	dx,[bp+6]	;buffer,
	int	21h
	pop	bp
	ret

_xwrite endp
_xread endp
page
;;
;;	ret= xfind(path,name,size,attrib,first)
;;	int ret;		0 if no match
;;	char *path;
;;	char *name;		dest name,
;;	long *size;		ptr to file siz
;;	int attrib;		attributes
;;	int first;		0 if 1st time,
;;
;;Find the Nth occurence of pathname. Returns
;;0 when no match. Only the filename portion
;;can contain wildcards. The returned filename
;;does not contain the path portion of the 
;;input string.
;;	Not recursive. Do not call _FSIZE
;;inbetween _XFIND calls.
;;
xfpath	equ	4	;path pointer,
xfname	equ	6	;retnd name,
xfsize	equ	8	;file size ptr,
xfaccess equ	10	;access,
xfflag	equ	12	;first time flag,

_xfind proc near
	push	bp
	mov	bp,sp
	mov	ah,26		;set DMA addr
	mov	dx,offset dgroup:xfbuf
	int	21h		;to buffer,
	test word ptr [bp+xfflag],-1
	mov	ah,78		;do right call,
	jz	xf1
	mov	ah,79		;0 == 1st time,
xf1:	mov	dx,[bp+xfpath]	;path name,
	mov	cx,[bp+xfaccess];access,
	int	21h
	mov	ax,0		;ret if no
	jc	xfr		;match,
;
;Copy the file size in.
;
	mov	bx,[bp+xfsize]	;size ptr,
	mov	ax,fsize
	mov	[bx],ax
	mov	ax,fsize+2
	mov	[bx+2],ax

	mov	di,[bp+xfname]	;dest string,
	mov	si,offset dgroup:fname
	mov	cx,12
	cld
;
;Fix a "slight" XENIX bug: Delete trailing 
;spaces, else it fails OPENs.
;
xf2:	lodsb			;get a byte,
	cmp	al,0		;if null
	je	xf3
	cmp	al,' '		;or space,
	je	xf3		;stop,
	stosb
	loop	xf2		;max 11 chars	
xf3:	mov byte ptr [di],0	;terminate,
	mov	ax,1		;good return.
xfr:	pop	bp
	ret
_xfind endp
page
;;
;;	fsize= _fsize(filename)
;;	long fsize;
;;	char *filename;
;;
;;Return the size of a file, in bytes. Returns
;;0 if file not found. Filename can contain
;;a path.
;;
;;Cannot be called in between any _XFIND calls.
;;
_fsize proc near
	push	bp
	mov	bp,sp
	mov	ah,26		;set DMA addr
	mov	dx,offset dgroup:xfbuf
	int	21h		;to buffer,
	mov	ah,78		;search 1st,
xs1:	mov	dx,[bp+4]	;path name,
	mov	cx,0
	int	21h
	mov	ax,0		;ret if no
	mov	bx,0		;match,
	jc	xsr

	mov	bx,fsize
	mov	ax,fsize+2
xsr:	pop	bp
	ret
_fsize endp
page
;
;error= _xdelete(path);
;int error;
;char *path;
;
_xdelete proc near
	push	bp
	mov	bp,sp
	mov	dx,[bp+4]
	mov	ah,41h
	int	21h
	mov	ax,0
	sbb	ax,0
	pop	bp
	ret
_xdelete endp

prog ends
page
data segment word public 'data'
;
;Structure for the FindFirst and FindNext
;function XFIND. NOT REENTRANT.
;
xfbuf	db	(?)	;search attrib
	db	(?)	;drive,
	db 11 dup (?)	;name,
	dw	(?)	;last ent
	dd	(?)	;DPB,
	dw	(?)	;dir start

	db	(?)	;attrib found,
	dw	(?)	;time?
	dw	(?)	;date?
fsize	dw	(?)	;size low
	dw	(?)	;size hi,
fname	db 13 dup (?)	;packed name,

data ends	

	end
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0142

     Volume in drive A has no label
     Directory of A:\

    AFT8087  MAC      3456   4-09-84   1:45a
    BASSUB   BAS      2816   4-09-84   1:45a
    BASSUB   OBJ       384   4-09-84   1:45a
    BIOS     MAC      9088   4-09-84   1:40a
    CLINK    ASM      3471   4-09-84   1:43a
    CLINK    COM       212   4-09-84   9:56a
    CRCK4    COM      1536  10-21-82   7:54p
    DOS      MAC     11904   4-09-84   1:40a
    GRDRAW   LF       4864   4-09-84   1:41a
    HP       C        1536   4-09-84   1:47a
    KVSET    COM      4096   4-09-84   1:42a
    KVUTIL   COM       896   4-09-84   1:41a
    KVUTIL   DOC      3584   4-09-84   1:42a
    LDIR     C       10240   4-09-84   2:30a
    LDIR     DOC       384   4-09-84   2:30a
    LDIR     EXE     14080   4-09-84   2:30a
    LISP     PAS     25600   4-09-84   1:43a
    LTYPE    C        3200   4-09-84   2:30a
    LTYPE    EXE     12800   4-09-84  12:41a
    PCUTIL   COM      3584   4-09-84   1:41a
    PCUTIL   DOC      5632   4-09-84   1:41a
    READ     ME       1450   4-09-84  10:24a
    TRAN     C        1024   4-09-84   1:47a
    UTILITES MAC     12160   4-09-84   1:40a
    VUE      EXE     11776   4-09-84   1:41a
    XENIX    ASM      7296   4-09-84   1:40a
           26 file(s)     157069 bytes
                               0 bytes free
