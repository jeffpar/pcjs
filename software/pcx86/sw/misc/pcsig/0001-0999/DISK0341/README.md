---
layout: page
title: "PC-SIG Diskette Library (Disk #341)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0341/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0341"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "C UTILITIES NO 6"

    This disk contains a collection of programs and subroutines in 'C',
    which can serve as time savers for those who don't wish to have to
    write everything themselves.  Ii is also useful as a learning tool for
    the novice, since you can inspect the source code and see how others
    do it.  Many of the routines/programs perform elemental functions
    similar to those found on many "seasoned" UNIX or XENIX systems.
    
    System Requirements: `C' compiler.
    
    How to Start:   To read TXT files simply enter TYPE filename.ext and
    press <ENTER>.  For instructions on ASM or 'C' listings, refer to your
    Assembler or 'C' language manuals.
    
    File Descriptions:
    
    CC       ASM  C shell for Lattice C and DOS 2.00
    ADDLF    C    Program to add linefeeds to text if found absent
    CRC      C    Cyclic Redundancy Check functions
    CONIO    C    Source for console I/O routines
    DOS_ERR  TXT  Documentation on DOS 2.00 redirection of I/O bug
    FRAME    C    Function to draw a frame on the screen
    DUMP2    C    Program to print parts of large files in dump format
    IOS1_20  ASM  Level 1 I/O routines for DOS 2.00 and Lattice C
    INKEY    C    Input from keyboard function
    GETSEG_C ASM  Function returning current register values
    FUNKEY   C    Program to build function key reassignment files
    _MAIN    C    New version of "_main" for DOS 2.00 and Lattice C
    XC       C    C concordance utility
    TYPECONV C    Demo of type conversions in C
    TOWERS   C    "Towers of Hanoi" game written in C
    TINKEY   C    Program to test "inkey" function
    TIMEMARK TXT  Timestamping functions and benchmarks tests
    SYSINT   ASM  General interrupt call function
    STRING   C    Source for standard string functions (a la K&R book)
    SNAP     OBJ  Object code for the above
    SNAP     C    Dump memory area in hex/character format
    RENAME   C    Functional equivalent of a DOS "rename" in C
    PRINT    C    Program to print ASCII file with heading on each page
    MEMCLEAN DOC  Documentation for the above
    MEMCLEAN C    Program to "clean" memory above 640K
    M8087    MAC  Assembler macros for 8087 coprocessor support
    LIFE     C    "Game of Life" written in C
    LEJ_LIB  C    Example functions from Kernighan & Ritchie book on C
    ISCHECK  C    Program to verify Microsoft's "isxxxxxx" routines
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CC.ASM

{% raw %}
```
PAGE 64,132
TITLE C -- DOS 2.0 version for Lattice 'C'  07/12/83
; name		XCMAIN -- initiate execution of C program
;
; description	This is the main module for a C program on the
;		MS-DOS implementation.	It initializes the segment
;		registers, sets up the stack, and calls the C main
;		function _main with a pointer to the remainder of
;		the command line.
;
;		Also defined in this module is the exit entry point
;		XCEXIT.
;
;			Ted Reuss     c/o South Texas Software, Inc.
;		  Home: 713/961-3926	  4544 Post Oak Place, Suite 176
;		  Offi: 713/877-8205	  Houston, Tx 77027
;
pgroup	group	base,prog
dgroup	group	data,stack
;
; The following segment serves only to force "pgroup" lower in
; memory.  It also contains the Lattice C revision number.
;
base	segment 'prog'
	db	"Lattice C 1.04"
base	ends
;
; The data segment defines locations which contain the offsets
; of the base and top of the stack.
;
data	segment byte public 'data'
	public	_top, _base
_top	dw	0
_base	dw	0
data	ends
;
; The stack segment is included to prevent the warning from the
; linker, and also to define the base (lowest address) of the stack.
;
stack	segment stack 'data'
sbase	dw	128 dup (?)
stack	ends
;
; The main program must set up the initial segment registers
; and the stack pointer, and free memory via function call(4A).
; The command line bytes from the program segment prefix are
; moved onto the stack, and a pointer to them supplied to the
; C main module _main (which calls main).
;
prog	segment byte public 'prog'
	public	XCMAIN, XCEXIT
	extrn	_main:near
	assume	cs:pgroup, ds:dgroup, ss:dgroup
XCMAIN	proc	far
	cli			;disable interrupts
	mov	ax,dgroup
	mov	ds,ax		;initialize ds and ss
	mov	ss,ax
	mov	bx,es:2 	;total memory size (paragraphs)
	sub	bx,ax
	test	bx,0f000h
	jnz	m1		;branch if more than 64K bytes
	mov	cl,4
	shl	bx,cl		;highest available byte
	jmp	short m2
m1:	mov	bx,0fff0h
m2:	mov	sp,bx		;set stack pointer
	sti			;enable interrupts
	mov	_top,bx 	;save top of stack
	mov	ax,offset dgroup:sbase
	mov	_base,ax	;store ptr to bottom of stack
	push	es		;push ptr to pgm segment prefix
	xor	ax,ax
	push	ax		;instr ptr for far return
	mov	bp,sp		;save in bp
	mov	si,80h		;ptr to command line bytes
	mov	cl,es:[si]	;get number of bytes
	inc	si
	xor	ch,ch		;clear high byte
	mov	bx,cx
	add	bx,4		;3 bytes additional, 1 for rounding
	and	bx,0fffeh	;force even number of bytes
	sub	sp,bx		;allocate space on stack
	mov	di,sp
	mov	byte ptr [di],'c'       ;store dummy program name
	inc	di
	jcxz	m4		;skip if no bytes to move
	mov	byte ptr [di],' '
	inc	di
m3:	mov	al,es:[si]	;move bytes to stack
	mov	[di],al
	inc	si
	inc	di
	loop	m3
m4:	xor	ax,ax
	mov	[di],al 	;store null byte
	mov	bx,ds		;set up es:bx with
	mov	ax,es		; the # paragraphs
	sub	bx,ax		; required and tell
	add	bx,1000h	; DOS.
	mov	ah,4ah		;DOS SETBLOCK
	int	21h
	mov	ax,ds
	mov	es,ax		;es, ds, and ss are all equal
	mov	ax,sp
	push	ax		;ptr to command line
	call	_main		;call C main
	xor	al,al
	jmp	short XCE10	;exit to DOS
XCMAIN	endp
;
; name		XCEXIT -- terminate execution of C program
;
; description	This function terminates execution of the current
;		program by returning to MS-DOS.  The error code
;		argument is passed to MS-DOS via function call(4C)
;
XCEXIT	proc	near
	mov	bp,sp
	mov	ax,[bp+2]	;get error code
XCE10:	mov	ah,4ch		;DOS exit
	int	21h
here:	jmp	short here	;should never get here
XCEXIT	endp
prog	ends
	end	XCMAIN
```
{% endraw %}

## DOS_ERR.TXT

{% raw %}
```
	    DOS 2.0 HAS PROBLEMS WITH REDIRECTION OF I/O

     There  are  problems  in  DOS  2.0 with the redirection of I/O and
 piping for programs that use the original  DOS  1.1  INT  21  function
 calls	for  input.   This  problem  is  readily apparent to users of C
 language packages such as Computer  Innovation  C-86,	Lattice  C,  or
 Microsoft  C  (you'd  think  they  would  get it right!).  One problem
 is that all output to the screen is redirected,  even	keyboard  echo.
 Correct  operation  would  redirect  all program output for the screen
 (stdout) to the specified >file, but the echo of keyboard input  would
 still	be  sent  to  the  screen.  Instead, both the keyboard echo and
 the program output are sent to the redirected	>file.	 Thus,	if  you
 run  programs	such as the CAT.C (K&R,page 154) example that Microsoft
 distributes with their C; or COPYIO.C (K&R,page 15)  with  the  output
 redirected to a file, you will get the following results:

      1.   Under  DOS  1.1, keyboard input is echoed to the screen
      as you type and each line  appears  in  the  >file  once	as
      expected.

      2.   Under  DOS  2.0,  keyboard  input  is not echoed to the
      screen, but each line appears in the >file twice!

     This situation is handled correctly in DOS  2.0  if  the  new  INT
 21  function call 3F is used.	This can be demonstrated by redirecting
 output for the DOS 2.0 function MORE - it works as desired.

     The redirecting of input to these programs doesn't  work  properly
 either.   If  the  file  has  not been edited with debug to end with a
 control-Z, the program will hang up at the end  of  the  <input  file.
 You  must reboot the system to continue!  Also, if you pipe the output
 of the first program into a second  program,  the  final  output  will
 contain  each	line  four times, doubled spaced after the second line!
 These problems do not occur for programs that	use  the  new  DOS  2.0
 calls for I/O, such as SORT and MORE.

     The  question  now  is  how  do  you fixup C programs to run under
 DOS 2.0 and not redirect keyboard echo to the stdout file?  The easiest
 way for C compilers that include their  own  redirection  code  is  to
 change their redirection symbols from <, >, and >> to something else. Then
 DOS  2.0  won't  do  the redirection, so the C code will be able to do
 it correctly.	With the Microsoft C compiler, this is easily accomplished
 by modifying three lines of code in _MAIN.C.	A  good  choice  is  to
 modify  _MAIN.C  so  that  it	redirects  on the symbols {, }, and }}.
 The only restriction is that these symbols then  should  not  be  used
 in  filenames.   With these changes, the user can choose to let either
 DOS  <, >, >>	or C  {, },  }}   do  the  redirecting.   The  modified
 version  of  _MAIN.C  is compiled to obtain a new _MAIN.OBJ, which can
 either be put into the library MC.LIB to replace  the	original  _MAIN
 by  using  the  LIB.EXE  utility,  i.e.     LIB   MC.LIB  -_MAIN+_MAIN
 or it can be kept separate.  If kept  separate,  remember  to	include
 it  in  the  list  of	.OBJ  files  specified	in  the LINK call, i.e.
 LINK c _main myprogram.

     The three lines to change in Microsoft C's  _MAIN are:
	  case '{':
	  case '}':
	  if (*line == '}')

     Kludgy, yes, but it works better than before!!	 WHR	9-26-83
```
{% endraw %}

## FILES.TXT

{% raw %}
```
Utilities/16  (programs + subroutines in C Language)
 
README  .105   YOU ARE READING IT
ADDLF   .C     Program to add linefeeds to text if found absent
CC      .ASM   C shell for Lattice C and DOS 2.00
CONIO   .C     Source for console I/O routines
CRC     .C     Cyclic Redundancy Check functions
DOS_ERR .TXT   Documentation on DOS 2.00 redirection of I/O bug
DUMP2   .C     Program to print parts of large files in dump format
FRAME   .C     Function to draw a frame on the screen
FUNKEY  .C     Program to build function key reassignment files
GETSEG_C.ASM   Function returning current register values
INKEY   .C     Input from keyboard function
IOS1_20 .ASM   Level 1 I/O routines for DOS 2.00 and Lattice C
ISCHECK .C     Program to verify Microsoft's "isxxxxxx" routines
LEJ_LIB .C     Example functions from Kernighan & Ritchie book on C
LIFE    .C     "Game of Life" written in C
M8087   .MAC   Assembler macros for 8087 coprocessor support
MEMCLEAN.C     Program to "clean" memory above 640K
MEMCLEAN.DOC   ^Documentation for the above
PRINT   .C     Program to print ASCII file with heading on each page
RENAME  .C     Functional equivalent of a DOS "rename" in C
SNAP    .C     Dump memory area in hex/character format
SNAP    .OBJ   ^Object code for the above
STRING  .C     Source for standard string functions (a la K&R book)
SYSINT  .ASM   General interrupt call function
TIMEMARK.TXT   Timestamping functions and benchmarks tests
TINKEY  .C     Program to test "inkey" function
TOWERS  .C     "Towers of Hanoi" game written in C
TYPECONV.C     Demo of type conversions in C
XC      .C     C concordance utility
_MAIN   .C     New version of "_main" for DOS 2.00 and Lattice C
 
 
 
```
{% endraw %}

## FILES341.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 341                     'C' Programs                    v1   DS
------------------------------------------------------------------------
Collection of programs and subroutines in 'C' Language.
 
ADDLF    C    Program to add linefeeds to text if found absent
CC       ASM  C shell for Lattice C and DOS 2.00
CONIO    C    Source for console I/O routines
CRC      C    Cyclic Redundancy Check functions
DOS_ERR  TXT  Documentation on DOS 2.00 redirection of I/O bug
DUMP2    C    Program to print parts of large files in dump format
FRAME    C    Function to draw a frame on the screen
FUNKEY   C    Program to build function key reassignment files
GETSEG_C ASM  Function returning current register values
INKEY    C    Input from keyboard function
IOS1_20  ASM  Level 1 I/O routines for DOS 2.00 and Lattice C
ISCHECK  C    Program to verify Microsoft's "isxxxxxx" routines
LEJ_LIB  C    Example functions from Kernighan & Ritchie book on C
LIFE     C    "Game of Life" written in C
M8087    MAC  Assembler macros for 8087 coprocessor support
MEMCLEAN C    Program to "clean" memory above 640K
MEMCLEAN DOC  ^Documentation for the above
PRINT    C    Program to print ASCII file with heading on each page
RENAME   C    Functional equivalent of a DOS "rename" in C
SNAP     C    Dump memory area in hex/character format
SNAP     OBJ  ^Object code for the above
STRING   C    Source for standard string functions (a la K&R book)
SYSINT   ASM  General interrupt call function
TIMEMARK TXT  Timestamping functions and benchmarks tests
TINKEY   C    Program to test "inkey" function
TOWERS   C    "Towers of Hanoi" game written in C
TYPECONV C    Demo of type conversions in C
XC       C    C concordance utility
_MAIN    C    New version of "_main" for DOS 2.00 and Lattice C
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## IOS1_20.ASM

{% raw %}
```
title	Level 1 I/O Functions for Lattice 'c' Version 1.04
page	64,132
name	IOS1_20 ;DOS function calls 3DH, 3EH, 3FH, 40H, AND 42H.
comment |
   These functions take advantage of DOS 2.0 and will directly
replace the original level 1 I/O except that 'text mode' is
not supported.	DOS error numbers are saved at ERRNO and may be
checked by including: "extern short errno;" in your source files.
Note that the pmode parameter in creat is forced to zero, due to
a problem with Lattice's freopen which passes a 1A4H to creat.

			Ted Reuss     c/o South Texas Software, Inc.
		  Home: 713/961-3926	  4544 Post Oak Place, Suite 176
		  Offi: 713/877-8205	  Houston, Tx 77027
	|
	public	CREAT, OPEN, CLOSE, READ, WRITE, LSEEK
dgroup	group	data
data	segment word public 'data'
	assume	ds:dgroup

	public	ERRNO
ERRNO	dw	0	; DOS error number (DOS Manual page D-14)
data	ends

pgroup	group	prog
prog	segment byte public 'prog'
	assume	cs:pgroup

	subttl	CREAT -- create a new file
	page
;
; NAME
;	creat -- create a new file
;
; SYNOPSIS
;
;	file = creat(name, pmode);
;	int file;	file number or error code
;	char *name;	file name (valid drive\path\filespec)
;	int pmode;	access privilege mode bits, DOS attribute
;			NOTE: forced to zero in current version.
;
; DESCRIPTION
;
;	Creates a new file with the specified name and prepares is
;	for access via the level 1 I/O functions.  The file name
;	may consist of a valid drive and path name.  All I/O is
;	done via DOS calls 3fh (READ) and 40h (WRITE).	If the file
;	already exists, it's contents are discarded.  The current file
;	position and the end of file are both zero. (indicating an
;	empty file) if the function is successful. ERRNO is set to
;	the error number returned by DOS in the event of an error.
;
; RETURNS
;	file = file number to access file, if successful
;	     = -1 if error  (ERRNO get DOS error number)
;

	public	CREAT
CREAT	proc	near
	push	bp
	mov	bp,sp
	mov	dx,[bp+4]	;get ptr to drive\path\filespec
	xor	cx,cx
	mov	ah,3CH		;DOS create function
	int	21H
	jnc	cre10
	mov	dgroup:errno,ax
	mov	ax,-1
cre10:	mov	sp,bp
	pop	bp
	ret
CREAT	endp

	subttl	OPEN -- open a file
	page
;
; NAME
;	open -- open a file
;
; SYNOPSIS
;
;	file = open(name, rwmode);
;	int file;	file number or error code
;	char *name;	file name (valid drive\path\filespec)
;	int rwmode;	read/write mode, where 0=read, 1=write,
;			2=read/write
;
; DESCRIPTION
;
;	Opens a file for access using the level 1 I/O functions.
;	The file name may contain a valid drive and path name.	All
;	I/O is done via DOS functions 3fh (READ) and 40h (WRITE).
;	The mode word determines the type of I/O which will be
;	performed on the file.	The low order bits specify whether
;	read or write operations (or both) are to be allowed.
;	In the event of an error the error code passed by DOS is
;	saved at ERRNO.
;
; RETURNS
;
;	file = file number to access file, if successful
;	     = -1 if error  (ERRNO get DOS error number)
;

	public	OPEN
OPEN	proc	near
	push	bp
	mov	bp,sp
	mov	dx,[bp+4]	;get ptr to drive\path\filespec
	mov	ax,[bp+6]	;get mode
	mov	ah,3DH		;DOS open function
	int	21H
	jnc	opn10
	mov	dgroup:errno,ax
	mov	ax,-1
opn10:	mov	sp,bp
	pop	bp
	ret
OPEN	endp

	subttl	CLOSE -- close a file
	page
;
; NAME
;
;	close -- close a file
;
; SYNOPSIS
;
;	status = close(file);
;	int status;	status code: 0 if successful
;	int file;	file number for file
;
; DESCRIPTION
;
;	Close a file and frees the file number for use in accessing
;	another file.  Any buffers allocated when the file was
;	opened are released.
;
; RETURNS
;
;	status = 0 if successful
;	       = -1 if error  (ERRNO get DOS error number)
;

	public	CLOSE
CLOSE	proc	near
	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;get file handle
	mov	ah,3EH		;DOS close function
	int	21H
	jc     clo10
	xor	ax,ax
	jmp	short clo20
clo10:	mov	dgroup:errno,ax
	mov	ax,-1
clo20:	mov	sp,bp
	pop	bp
	ret
CLOSE	endp

	subttl	READ -- read data from file
	page
;
; NAME
;
;	read -- read data from file
;
; SYNOPSIS
;
;	status = read(file, buffer, length);
;	int status;	status code or actual length
;	int file;	file number for file
;	char *buffer;	input buffer
;	int length;	number of bytes requested
;
; DESCRIPTION
;
;	Reads the next set of bytes from a file.  The return count
;	is always equal to the number of bytes placed in the buffer
;	and will never exceed the "length" parameter, except in the
;	case of an error, where -1 is returned.  The file position
;	is advanced accordingly.
;
; RETURNS
;
;	status = 0 if end of file
;	       = -1 if error  (ERRNO get DOS error number)
;	       = number of bytes actually read, otherwise
;

	public	READ
READ	proc	near
	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;get file handle
	mov	dx,[bp+6]	;get buffer address
	mov	cx,[bp+8]	;get byte count
	mov	ah,3FH		;DOS read function
	int	21H
	jnc	red10
	mov	dgroup:errno,ax
	mov	ax,-1
red10:	mov	sp,bp
	pop	bp
	ret
READ	endp

	subttl	WRITE -- write data to file
	page
;
; NAME
;
;	write -- write data to file
;
; SYNOPSIS
;
;	status = write(file, buffer, length);
;	int status;	status code or actual length
;	int file;	file number for file
;	char *buffer;	output buffer
;	int length;	number of bytes in buffer
;
; DESCRIPTION
;
;	Writes the next set of bytes to a file.  The return count is
;	equal to the number of bytes written, unless an error
;	occurred.  The file position is advanced accordingly.
;
; RETURNS
;
;	status = -1 if error  (ERRNO get DOS error number)
;	       = number of bytes actually written otherwise
;

	public	WRITE
WRITE	proc	near
	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;get file handle
	mov	dx,[bp+6]	;get buffer address
	mov	cx,[bp+8]	;get byte count
	mov	ah,40H		;DOS write function
	int	21H
	jnc	wrt10
	mov	dgroup:errno,ax
	mov	ax,-1
wrt10:	mov	sp,bp
	pop	bp
	ret
WRITE	endp

	subttl	LSEEK -- seek to specified file position
	page
;
; NAME
;
;	lseek -- seek to specified file position
;
; SYNOPSIS
;
;	pos = lseek(file, offset, mode);
;	long pos;	returned file position or error code
;	int file;	file number for file
;	long offset;	desired position
;	int mode;	offset mode relative to:
;			0 = beginning of file	    BOFM
;			1 = current file position   CURM
;			2 = end of file 	    EOFM
;
; DESCRIPTION
;
;	Changes the current file position to a new position in the
;	file.  The offset is specified as a long int and is added to
;	the current position (mode 1) or to the logical end of file
;	(mode 2).  Use DOS function 42h (LSEEK).
;
; RETURNS
;
;	pos = -1L if error occurred (ERRNO get DOS error number)
;	= new file position if successful
;

	public	LSEEK
LSEEK	proc	near
	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;get file handle
	mov	dx,[bp+6]	;get low word of pos
	mov	cx,[bp+8]	;get high word of pos
	mov	ax,[bp+10]	;get seek mode
	mov	ah,42H		;DOS lseek function
	int	21H
	jnc	lsk10
	mov	dgroup:errno,ax
	mov	ax,-1
	mov	dx,ax
lsk10:	mov	bx,ax
	mov	ax,dx
	mov	sp,bp
	pop	bp
	ret
LSEEK	endp

prog	ends
	end
```
{% endraw %}

## MEMCLEAN.DOC

{% raw %}
```

              MEMORY CLEAN FOR THE IBM PERSONAL COMPUTER

                             Version 1.00
                             May 3, 1983

                         Robert J. Beilstein
                        413 Wells Avenue, West
                    North Syracuse, New York 13212


One of the unfortunate "features" of the IBM Personal Computer is
that, while the 8088 processor will address 1024K of memory, the BIOS
(and, thus, DOS) will only recognize the first 640K (on "regular"
PC's, without the expansion box and ROM, 544K) of memory.

While there are a number of programs around which are able to ignore
the memory size passed from DOS, and make use of the additional
memory, there is still a fairly serious problem that needs to be
addressed.

When the machine is powered up, the contents of memory are
unpredictable.  In particular, there is probably only a 50%
probability that any given memory location has the proper parity.

The ROM BIOS "initial reliability tests" write to both planar and I/O
RAM during initialization.  This not only sets proper parity in the
memory locations (this happens automatically when the locations are
written into), it also tests the memory for proper operation (though,
curiously, it never attempts to write an odd-parity value).

Unfortunately, this setting and testing of memory only occurs in the
first 640K (544K) of memory.  Thus, any additional memory in the
system is left in an uninitialized state.

If a program attempts to reference a location in this uninitialized
memory before first writing to it (extremely poor programming
practice, it is true), then there is a 50% chance that the result will
be a "PARITY CHECK 2".

This seems like an awfully stiff penalty to pay for a program bug, as
it requires one to power down the machine in order to clear it.

MEMCLEAN is a program which will write an initial value (with good
parity) into all of the memory locations which IBM misses.

When called without additional parameters, the program will clear the
high memory from X'C0000' through X'EFFFF' (768K to 960K).

If a parameter of "544K" is specified, locations X'88000' through
X'9FFFF' (544K to 640K) will be cleared.  This is for compatibility
with older (non XT) PC's.

If "SEGA" is specified, then locations X'A0000' through X'AFFFF' are
included.  This area is defined to be "reserved" by IBM, but is (for
now) available for use.

Specifying "NOHIGH" will inhibit writing into the high memory area
(X'C0000' through X'EFFFF').

Note that writing into nonexistent memory locations causes no problems
(other than using up some time).  So there is no problem if there is
memory only up to (say) 576K.

The following examples illustrate the use of MEMCLEAN:

1.  A PC/XT with memory in the high area, but not in the "reserved"
area:

A>memclean


2.  A "regular" PC with 704K of contiguous memory (i.e. up through
X'AFFFF'):

A>memclean sega 544k nohigh

3.  A "regular" PC with every available memory location populated:

A>memclean 544k sega

4.  A PC/XT with 704K of contiguous memory:

A>memclean sega nohigh


Permission is given to use and copy this program and documentation
freely, as long as no charge is made for its distribution or use, and
as long as the notices and copyright statements in the program and
documentation are left intact.  For complete details of the terms and
conditions, please see the source code.

All other rights are reserved.  Program and documentation Copyright
(C) Robert J. Beilstein, 1983.


```
{% endraw %}

## SYSINT.ASM

{% raw %}
```
page 66,132
;+
;       .title sysint
; index  system interrupt call function   sysint()
;
; Usage
;       int flags;
;
;       flags = sysint(inum,&inreg,&outreg);
;
; in
;       int     inum;           ; interrupt number to execute
;       int     inreg[4];       ; input registers ax,bx,cx,dx
;
; out
;       int     outreg[4];      ; registers returned ax,bx,cx,dx
;       sysint                  ; flag register returned
;
; Description
;       This is a system interface call to allow system intrinsic functions
;      to be called from C. Parameters are passed via the register values
;      stored in inreg for input to the system call and returned in the
;      outreg struct. The default values for the segment registers are the
;      same as C routines.
;
; status
;       ax register is returned as status
;
; bugs
;       low level internal routine must be modified to be ported.
;
; Updates
;
;       date            vers    who     description
;       15-aug-83       0001    EJK     Added documemtation
;       13-sep-83       0002    CMC     Added flag register return
;-
pgroup  group   prog
prog    segment byte    public 'prog'
        assume  cs:pgroup
        public  sysint

sysint  proc    near
        push bp         ;save bp
        mov bp,sp       ;sp->bp
        mov ax,[bp]+4   ;get int#
        mov cs:itm+1,al ;set int#
        mov si,[bp]+6   ;in struc
        mov ax,[si]     ;set ax
        mov bx,[si]+2   ;set bx
        mov cx,[si]+4   ;set cx
        mov dx,[si]+6   ;set dx
        push bp         ;save bp2
itm     equ  this byte  ; 'this byte' is a keyword.
        int 16          ;interrupt
        pop bp          ;restore bp2
        mov si,[bp]+8   ;out struc
        mov [si],ax     ;ret ax
        mov [si]+2,bx   ;ret bx
        mov [si]+4,cx   ;ret cx
        mov [si]+6,dx   ;ret dx
        pop bp          ;restore bp
	pushf           ;save return flag register on stack
        pop ax          ;restore flag register in ax
        ret             ;return
sysint  endp
prog    ends
        end
```
{% endraw %}

## TIMEMARK.TXT

{% raw %}
```
/*****************************************************************************/

This file contains (4) source code files which are to be extracted and
made into individual files.  Their names are "gtest.c", "gtime.c", "times.c",
and "sysint.asm".  Using the Personal Editor, use Alt-B to mark the begin-
ning and end of a file.  Then hit escape and enter for example "edit gtest.c"
or "edit c:gtest.c"  Since this is a new file no text will appear until you
hit escape to return to the text entry mode and hit Alt-Z.  The marked
portion will now load.	Hit enter and put "save" on the command line.  Now
do a "quit".  You will now return to the main file.  Now do an Alt-U to remove
the marked area.  Repeat the marking, naming and saving out for each of the
files.	Next use your Lattice-C compiler to obtain a ".obj" file for the
".c" source files and the Macro Assembler to obtain a ".obj" file for the
".asm" source.  Finally, enter "Link c+gtest+gtime+times+sysint".  I called
the final executable file "Timemark".  We thank Ed Keating who is the C-Sig
co-ordinator for the Northern Illinois IBM-PC User's Group" for the writing
of these routines.  I made this single file put-together for the convenience
of only having to download one file from this BBS.
						     ^^^ Dick Stone ^^^

/*****************************************************************************/
/*
 * .title gtest.c---Timestamp program for testing Lattice C
 */
#include <stdio.h>
main(argc,argv)
int argc;
char *argv[];
{
	looptest(); /* perform simple loop test */
	addints();  /* add integers test */
	fptest();   /* floating point test */
	strings();  /* string concatenation */
	tables();   /* table lookup test */

	printf("End benchmarks\n");
}
/*
 * this is a routine to print the timestamped differences to standard output
 */
printimes(t1,t2)
int t1[8],t2[8];	/* timestamp buffers */
{
	long d,tdiff(); /* for time difference calculations */
	char tsbuf[20]; /* used to format time info */
	char *ftime();	/* formats a timestamp into a buffer */

	printf("Time started was %s\n",ftime(t1,tsbuf));
	printf("Time ended   was %s\n",ftime(t2,tsbuf));
	d = tdiff(t1,t2);
	printf("The difference in times in Milliseconds is %ld\n",d);

} /* end of printimes*/
looptest()	/* basic loop test */
{
	int i,t1[8],t2[8];	  /* timestamp buffers */

	gtime(t1);	/* get time one. */
	for(i =0; i < 10000; i++);
	gtime(t2);
	printf("\nSimple loop test\n");
	printimes(t1,t2);
}
addints()	/* add integers test */
{

	int i,t1[8],t2[8];	  /* timestamp buffers */
	printf("\nAdding integers loop to 32767\n");
	gtime(t1);
	i = 0;
	while(i < 32767) i++;
	gtime(t2);
	printimes(t1,t2);
}
fptest()	/* floating point test */
{
	int i,t1[8],t2[8];	  /* timestamp buffers */
	double	a,b,c;

	printf("\nFloating point benchmark\n");
	gtime(t1);
	a = 0; b = 1234.56; c = 78.9;
	for(i = 0; i < 10000; i++) {
	 a=b*c;
	 a=b/c;
	}
	gtime(t2);
	printimes(t1,t2);
}
strings()
{
	int i,t1[8],t2[8];	  /* timestamp buffers */
	char *pa,*pb,*pc;
	static char sa[] = "This is a string";
	static char sb[] = "This is a longer string with lots of words in it";
	char sc[100];

	printf("\nString concatenation benchmark\n");
	gtime(t1);
	for(i = 0; i < 10000; i++) {
	 pc = &sc[0];
	 pa = &sa[0];
	 pb = &sb[0];
	 while(*pc++ = *pa++); /* copy up to first null */
	 pc--;	 /* back up over trailing null */
	 while(*pc++ = *pb++);	 /* add in the second string */
	}
	gtime(t2);
	printimes(t1,t2);
}
tables()	/* table lookup tests */
{
	int i,j,t1[8],t2[8];	    /* timestamp buffers */
	static int data[25] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
		11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23, 24, 25 };
	int array[25];

	printf("\nTable lookup\n");
	gtime(t1);
	for(i = 0; i < 1000; i++)
	 for(j = 0; j < 25; j++) array[j] = data[j];
	gtime(t2);
	printimes(t1,t2);
}      /*  End of gtest.c  */
/*****************************************************************************/
/*
;
;      .title gtime.c
;
; Index gtime -- get system time into raw 8 word format
;
; Usage
;	gtime(buffer);
;
; In
;	int  buffer[8]; 	; 8 word buffer for timestamp
;
; Out
;	int  buffer[8]; 	; 8 word buffer will contain timestamp
;
; Description
;	This routine will get the system time and date and return it
;	in the 8 word buffer provided.
;	The buffer contains year (1980-2099), month 1-12, day 1-32
;	hour(0 - 23) minute (0-59) second (0-59) , milliseconds (0 - 999)
;	and the timer resolution in milliseconds.( On pc = 055)
;
; status
;	returns pointer to start of timerstruct.
;
; bugs
;	Uses Sysint to talk to Pcdos
;
; Updates
;	 date		vers	who	Description
;	 27-aug-83	0001	EJK	Initial coding
;
;-
*/
#include <stdio.h>
struct dosstruct {
       char al,ah;
       char bl,bh;
       char cl,ch;
       char dl,dh;
       };
struct dosregs {
	int ax,bx,cx,dx;
	};	/* used for casting */
struct timerbuf {
	int year,month,day,hour,minute,second,millisec,timres;
	};
#define TIMEFUNCTION 0x2c	 /* time subfunction */
#define DATEFUNCTION 0x2a	/* date subfunction */
#define DOSINT 0x21		/* dos interrupt code */
#define TIMRES 055		/* milliseconds resolution */

struct timerbuf *gtime(timbuf)
struct timerbuf *timbuf;
{
	struct dosstruct dosiobuf;
	struct dosstruct *in = &dosiobuf;
	struct dosstruct *out= &dosiobuf;
/* first, get the date. with system function 2a to dos */
	in->ah = DATEFUNCTION;
	sysint(DOSINT,in,out); /* do it! */
	timbuf->year = ((struct dosregs *)out)->cx;	/* cast for 16bit */
	timbuf->month = out->dh;
	timbuf->day = out->dl;
/* now, the time */
	in->ah = TIMEFUNCTION;
	sysint(DOSINT,in,out);
	timbuf->hour = out->ch;
	timbuf->minute = out->cl;
	timbuf->second = out->dh;
	timbuf->millisec = out->dl * 10;	/* make into milliseconds */
	timbuf->timres = TIMRES;
	return(timbuf); /* return pointer to his struct */
}   /* end of gtime */
/*****************************************************************************/
/* .title   times.c
 * tdiff -- return the time difference between a start time and an end time
 * long tdiff(start,end )
 * where: start and end are 8 word timestamp buffers
 */
long tdiff(t1,t2)
int t1[8],t2[8];	/* timestamp buffers */
{
	long d; /* work variable */
	d = t2[3] - t1[3];
	d = d*60 + t2[4] - t1[4];
	d = d*60 + t2[5] - t1[5];
	d = d*1000 + t2[6] - t1[6];
	return(d);
}
/*
 * ftime -- formats a timestamp into a buffer in the form
 * hh:mm:ss.msc 	( null terminated )
 * returns a pointer to the start of the buffer
 */
char *ftime(t1,buf)
int t1[];	/* timestamp */
char *buf;	/* buffer */
{
       sprintf(buf,"%2.2d:%2.2d:%2.2d.%3.3d\0",t1[3],t1[4],t1[5],t1[6]);
       return(buf);	/* return pointer to start */
}      /* end of times.c */
/*****************************************************************************/
; page 66,132
;+
;	.title sysint.asm
; index  system interrupt call function   sysint()
;
; Usage
;	sysint(inum,&inreg,&outreg);
;
; in
;	int	inum;		; interrupt number to execute
;	int	inreg[4];	; input registers ax,bx,cx,dx
;
; out
;	int	outreg[4];	; registers returned ax,bx,cx,dx
;
; Description
;	This is a system interface call to allow system intrinsic functions
;      to be called from C. Parameters are passed via the register values
;      stored in inreg for input to the system call and returned in the
;      outreg struct. The default values for the segment registers are the
;      same as C routines.
;
; status
;	ax register is returned as status
;
; bugs
;	low level internal routine must be modified to be ported.
;
; Updates
;
;	date		vers	who	description
;	15-aug-83	0001	EJK	Added documemtation
;-
pgroup	group	prog
prog	segment byte	public 'prog'
	assume	cs:pgroup
	public	sysint

sysint	proc	near
	push bp 	;save bp
	mov bp,sp	;sp->bp
	mov ax,[bp]+4	;get int#
	mov cs:itm+1,al ;set int#
	mov si,[bp]+6	;in struc
	mov ax,[si]	;set ax
	mov bx,[si]+2	;set bx
	mov cx,[si]+4	;set cx
	mov dx,[si]+6	;set dx
	push bp 	;save bp2
itm	equ  this byte	; 'this byte' is a keyword.
	int 16		;interrupt
	pop bp		;restore bp2
	mov si,[bp]+8	;out struc
	mov [si],ax	;ret ax
	mov [si]+2,bx	;ret bx
	mov [si]+4,cx	;ret cx
	mov [si]+6,dx	;ret dx
	pop bp		;restore bp
	ret		;return
sysint	endp
prog	ends
	end
/*****************************************************************************/
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0341

     Volume in drive A has no label
     Directory of A:\

    ADDLF    C         640  10-27-83   8:47p
    CC       ASM      3584  10-30-83  11:13p
    CONIO    C        4096  10-30-83  11:07p
    CRC      C        6144  10-29-83  11:33a
    DOS_ERR  TXT      3456  10-30-83  11:10p
    DUMP2    C        5248  10-27-83   8:50p
    FILES    TXT      1736   4-29-85   1:50p
    FILES341 TXT      2048   5-23-85   2:06p
    FRAME    C        1920  10-27-83   8:51p
    FUNKEY   C        3712  10-27-83   8:47p
    GETSEG_C ASM      2944  11-22-83  11:07p
    INKEY    C        2560   9-25-83  12:28a
    IOS1_20  ASM      7680  10-27-83   8:35p
    ISCHECK  C        1536  10-27-83   8:48p
    LEJ_LIB  C        7808  10-27-83   8:53p
    LIFE     C        5504  10-27-83   8:54p
    M8087    MAC     29056  11-23-83  10:01p
    MEMCLEAN C        5632  10-30-83  11:06p
    MEMCLEAN DOC      3591   9-11-84   9:43p
    PRINT    C        3072  10-30-83  11:04p
    RENAME   C         512  10-27-83   8:59p
    SNAP     C        2432  12-19-83   3:26p
    SNAP     OBJ      1667  12-21-83   8:25a
    STRING   C        1792  10-27-83   9:00p
    SYSINT   ASM      2560   9-25-83  12:24a
    TIMEMARK TXT      8704   9-18-83  11:45p
    TINKEY   C        1024   9-25-83  12:29a
    TOWERS   C        3456  10-27-83   9:01p
    TYPECONV C        1536  10-27-83   9:02p
    XC       C       26496  10-27-83   8:46p
    _MAIN    C        1536  10-29-83  11:34a
           31 file(s)     153682 bytes
                            2560 bytes free
