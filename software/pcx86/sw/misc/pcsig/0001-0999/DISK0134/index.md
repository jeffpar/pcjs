---
layout: page
title: "PC-SIG Diskette Library (Disk #134)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0134/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0134"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "LISP"

    File Descriptions:
    
    8087     ASM  Assembler macros for 8087 instructions
    AUTODEX  EXE  Fantastic fullscreen directory/file manipulator
    CC       C    C source program checker, catches mismatched parens
    DOSINTS  TXT  Tells all about secret dos interrupt functions!
    DOS_ERR  TXT  Information on DOS i/o redirection bugs
    FIND     PAT  Patch to dos find command, makes it a better filter
    LOAD     COM  Load com files bigger than 64k: load <filename>
    LOAD     ASM  Source for above
    MENUMAKR BAS  Interactively create menus callable from basic
    PIL      LSP  Micro-prolog interpreter written in xlisp
    PTURTLE  LSP  Programmable logo turtle written in xlisp
    STEEPDES APL  Steepest descent equation solution in apl
    TURTLE   LSP  Interactive logo turtle programmed in xlisp
    XLISP    DOC  Documentation for xlisp interpreter
    XLISP    EXE  A lisp interpreter with object-oriented extensions
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

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
END OF TRANSFER - PRESS ENTER TO RETURN TO MENU
```
{% endraw %}

## DOSINTS.TXT

{% raw %}
```
     The following is a summary of some undocumented DOS 2.0 functions
which can be invoked through interrupt 21H. The information provided
herein have inaccuracies, so use it at our own risk! It is correct to
the best of my knowledge. See the section in your DOS 2.0 manual entitled
"Invoking DOS Functions" for further information. The function number
provided below for each operation is to be placed in the AH register as
described in the DOS manual. All numbers shown are in hex.

FUNCTION		DESCRIPTION

   37		This interrupt is used to change incompatible
		configuration parameters to allow for switch
		indicators and whether hardware devices are
		available at every level of the tree directory.

		Usage:	MOV	AH, 37
			MOV	AL, func		; function code
			MOV	DL, data
			INT	21H
		; read function data is returned in DL

		Function code for AL:
		0 - Return the DOS switch character in DL.
		    Many systems might return "-".
		1 - Make the character in DL the switch character.
		2 - Read the device availability byte into DL. A
		    0 means devices that devices must be accessed
		    in file I/O calls by /DEV/device. A non-zero
		    value means that devices are accessible at
		    every level of the directory tree (e.g., PRN
		    is the printer and not a file PRN).
		3 - Set the device availability byte to the
		    contents of DL.

		Possible errors returned in AL:
		FF - Illegal function code specified in AL.


   1F (?)	Retrieve the pointer to the default drive parameter block.

		Usage:	MOV	AH, 1F
			INT	21H
		; address of drive parameter block is returned in DS:BX


   32 (?)	Retrieve the pointer to the drive parameter block
		for the drive number in DL, where 0 = default drive,
		1 = drive A:, 2 = drive B:, etc.).

		Usage:	MOV 	AH, 32h
			MOV	DL, drivenum
			INT	21H
		; address of drive parameter block is returned in DS:BX
		; AL contains FF if the drive # in DL is invalid.

   F8 (?)	Set OEM handler for INT 21H calls from F9 through FF
		to DS:DX. To reset these calls, pass DS and DX with FFFF.
		DOS is set up to allow ONE handler for all 7 of these
		calls. Any call to these handlers will result in the
		carry bit being set and AX will contain 1 if they are
		not initialized. The handling routine is passed all
		registers just as the user set them. The OEM handler
		routine should be exited through an IRET.

		Usage:	LDS	DX, handler_addr
			MOV	AH, F8h
			INT	21H


   4B		Load and possibly execute a program (EXEC). This call
		is PARTIALLY documented in the IBM DOS 2.0 manual, but
		several function call values (for register AL) are
		omitted. They are:

			1 - Create the program segment prefix and
			    load the program, but do not begin
			    execution. The CS:IP and SS:SP of the
			    program are placed in the area provided
			    by the user.

				+-------------------------------+
				| Word segment addr of environ.	|
				+-------------------------------+
				| Dword ptr to cmd line at 80h	|
				+-------------------------------+
				| Dword ptr to default FCB to	|
				| be passed at 5Ch.		|
				+-------------------------------+
				| Dword ptr to default FCD to	|
				| be passed at 6Ch.		|
				+-------------------------------+
				| Dword value of SS:SP returned	|
				+-------------------------------+
				| Dword value of CS:IP returned	|
				+-------------------------------+

			2 - This function still remains a mystery.


   4E		Find first matching file (FIND FIRST). This function
		is PARTIALLY documented in the IBM DOS 2.0 manual.
		The description of what is returned in the DTA where
		the first 21 bytes are "reserved for DOS use on
		subsequent find next calls" contain the following
		in this order:

			1 byte	- attribute byte of search
			1 byte	- drive used in search
			11 bytes- The search name used
			2 bytes - Word value of last entry
			4 bytes - Dword pointer to this DTA
			2 bytes - Word directory start
			-----------------------------------
			{ The documented bytes follow here
			  such as attribute found, file's
			  time, date, size, and name found. }


   50		Define the current DTA (?) - this is all I know...

   51		Retrieve current DTA (?)

   52		Retrieve "IN_VARS" (?)

   53		Define something about a DTA (?)

   55		Duplicate a DTA (?)


     If anyone discovers ANYTHING useful and/or incorrect about this
information, then PLEASE contact this bulletin board and leave a 
message for everyone. Let's figure out this DOS 2.00 (and 2.10)!
     This document was made available through:

	TECHNET BBS	(617) 791-1957

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

## LOAD.ASM

{% raw %}
```
        name     load
        page     55,128
        title   'LOAD -- load .COM file for MS-DOS 2.0' 
;
;
; LOAD -- load .COM file bigger than 64K
; Requires MS-DOS 2.0
; Version 1.1   Dec 83 RGD
; Version 1     March 1983 RJW

; copyright (c) 1983
; Laboratory Microsystems
; 4147 Beethoven Street
; Los Angeles, CA  90066
;
cr      equ     0dh     ;ASCII carriage return
lf      equ     0ah     ;ASCII line feed

cseg    segment byte

        org     100h

        assume  cs:cseg,ds:cseg

load    proc    far             ; sets up far return ...

        push    es              ; save segment of PSP
        mov     dx,offset mes2  ; startup message
        mov     ah,9
        int     21h
        xor     dx,dx           ; zero DX
        mov     ah,25h          ; set terminate address ...
        mov     al,22h          ; ... for new program segment
        int     21h

        mov     dx,offset endofs ; offset to end of this loader
        mov     cl,4            ; no of bits to shift
        shr     dx,cl           ; convert byte addr to paragraph
        inc     dx              ; offset of 1st available segment
        mov     ax,cs           ; current segment to AX
        add     dx,ax           ; actual value of 1st available segment
        mov     useg,dx         ; save it for later ...
        mov     es,dx           ; ... and for subsequent move
        mov     ah,26h          ; call to DOS
        int     21h             ; create new program segment

        mov     si,6ch          ; 2nd param FCB in current segment
        mov     di,5ch          ; 1st param FCB in new segment
        mov     cx,0ch          ; byte count for move
        repz movsb              ; copy the filename

        mov     ax,cs           ; copy current code seg ...
        mov     ds,ax           ; ... to DS
        mov     dx,5ch          ; DS:DX points to FCB of .COM file
        mov     bx,dx           ; make FCB addressible
        mov     byte ptr  9 [bx],'C' ; force COM extension 
        mov     byte ptr 10 [bx],'O' 
        mov     byte ptr 11 [bx],'M' 
        mov     ah,0fh          ; open the .COM file
        int     21h
        or      al,al           ; test return code
        jnz     load8           ; exit if non-zero
        mov     word ptr 33 [bx],0000 ; zero the random 
        mov     word ptr 35 [bx],0000 ; record field in the FCB
        pop     es              ; get loader's PSP segment
        mov     bx,useg         ; let SS:SP = default buffer of
        mov     ss,bx           ; new PSP
        mov     sp,100h         
        push    es              ; save loader's PSP again
        add     bx,10h          ; BX = segment of current DTA
        mov     ds,bx           ; set up DS:DX to point to the DTA
        xor     dx,dx
        mov     ah,1ah          ; set up DOS call and do it
        int     21h

load5:  mov     cx,100h         ; number of records of length 80h
        mov     ax,cs           ; copy current CS to DS
        mov     ds,ax
        mov     dx,5ch          ; DS:DH points to FCB of .COM file
        mov     ah,27h          ; do random block read
        int     21h
        test    al,1            ; end of file?
        jnz     load9           ; yes, so exit
        add     bx,800h         ; increment location of DTA
        mov     ds,bx           ; copy to DS
        xor     dx,dx           ; DS:DX now points to next DTA
        mov     ah,1ah          ; set up DOS call to set DTA
        int     21h
        jmp     load5           ; do it again

load8:  mov     dx,offset mes1  ; "file not found"
        mov     ah,9            ; write to terminal
        int     21h
        int     20h             ; exit to DOS

load9:  mov     ax,useg         ; set up registers for new segment
        mov     ds,ax
        pop     es              ; pass loader's PSP segment to overlay
        push    ax              ; push new CS onto stack
        mov     ax,100h
        push    ax              ; push offset onto stack
        ret                     ; FAR return causes CS:IP to be set
load    endp

mes1    db      cr,lf,
        db      '.COM file not found'
        db      cr,lf,'$'
mes2    db      cr,lf
        db      'Multi-Segment Loader version 1.1 for MS-DOS 2.0'
        db      cr,lf
        db      'Copyright (c) 1983 Laboratory Microsystems Inc.'
        db      cr,lf,'$'

useg    dw      0

endofs  equ     $

cseg    ends                    ; end of code segment

        end     load 
```
{% endraw %}

## MENUMAKR.BAS

{% raw %}
```bas
100 ' File name is "MENUMAKR"   9-26-82
110 '
120 ' General purpose menu program.  Just alter the menu title line, and insert
130 '   your menu entries.  MENUMAKR will do the rest.  Up to 64 menu entries
140 '   may be displayed (screen space willing) in 1-4 variable width columns.
150 '
160 ' NOTICE:  Developed by Ken Mackenzie, Box 111 Greendale, Wisconsin  53129.
170 '   This program may be freely reproduced for any lawful purpose.
180 '   As a courtesy to the author, please retain this notice on all copies.
190 '
200 ' Change the following statement to change the menu title:
210     TITLE$="your menu title goes here"
220 '
230 ' Each menu entry is a data statement consisting of a pair of character
240 '   strings enclosed in quotes.
250 '   The first string of each pair names a program to be run, if chosen.
260 '   The second string of each pair is its displayable descriptive text.
270 ' Place data statements for menu entries between the starred lines.
280 '*************************
290 DATA "FRSTPROG", "First program's descriptive text"
300 DATA "PROGRAM2", "Second program's descriptive text"
310 DATA "  etc. ", "   and so forth   "
900 '*************************
901 DATA "END"     ,"end"
902 '
903 ' Menu program begins here
904 '
905 LINENUM=5:    ' # of bytes occupied by each entry number prompt
906 MAXENTRIES=65:' # of possible menu entries
907 MAXCOL=4:     ' # of possible columns of entries
908 MAXROW=18:   ' # of possible rows of entries
909 MINGAP=1:    ' smallest # of spaces between columns
910 DIM N$(MAXENTRIES):' table of program names
911 DIM T$(MAXENTRIES):' table of program text descriptions
912 DIM BEG(MAXCOL):   ' beginning screen position for each column
913 DIM WID(MAXCOL):   ' width of text for each column
914 '
915 ' Display menu title block
916 '
917 DEF SEG: POKE 106,0: KEY OFF: SCREEN 0,0: COLOR 7,0,0: CLS
918 PRINT CHR$(201) STRING$(77,205) CHR$(187)
919 PRINT CHR$(186) TAB(41-LEN(TITLE$)/2) TITLE$ TAB(79) CHR$(186)
920 PRINT CHR$(200) STRING$(77,205) CHR$(188)
921 PRINT
922 '
923 ' Store menu data.
924 '
925 FOR E = 1 TO MAXENTRIES
926   READ N$(E),T$(E)
927   IF N$(E)="END" THEN 930
928 NEXT E
929 '
930 ' Calculate screen format
931 '
932 ENTRIES=E-1
933 '    Determine # of columns as ceil(entries/maxrow)
934 COL=INT((ENTRIES+MAXROW-1)/MAXROW)
935 '    Determine # of rows as ceil(entries/col)
936 ROW=INT((ENTRIES+COL-1)/COL)
937 '    Determine width of each row & save as wid(col)
938 FOR C=1 TO COL
939   WID(C)=0
940   FOR R=1 TO ROW
941     INDEX=R+MAXROW*(C-1)
942     L=LEN(T$(INDEX))
943     IF L>WID(C) THEN WID(C)=L
944   NEXT R
945 NEXT C
946 '    Determine gap size as max(3,(screenwidth-datawidth)/(col+1))
947 DATASIZ=0
948 FOR C=1 TO COL: DATASIZ=DATASIZ+WID(C)+LINENUM: NEXT C:' datawidth
949 IF DATASIZ+GAP*(COL+1)>80 THEN PRINT "Menu is too big for the screen.":STOP
950 GAP=INT((80-DATASIZ)/(COL+1))
951 IF GAP<MINGAP THEN GAP=MINGAP
952 '    Determine column starting locations
953 NEXTCOL=81-GAP
954 FOR C=COL TO 1 STEP -1
955   BEG(C)=NEXTCOL-WID(C)-LINENUM
956   NEXTCOL=BEG(C)-GAP
957 NEXT C
958 '    Determine row starting line
959 BEGLINE=5+INT((MAXROW-ROW)/2)
960 '
961 ' Display selections
962 '
963 FOR INDEX=1 TO ENTRIES
964   C=INT((INDEX-1)/ROW)+1
965   R=INDEX-ROW*(C-1)
966   LOCATE BEGLINE+R-1,BEG(C),0
967   PRINT USING "##";INDEX;
968   PRINT " - ";T$(INDEX)
969 NEXT INDEX
970 '
971 ' Input selection
972 '
973 LOCATE 24,1: PRINT; "What selection number would you like ?    ";
974 NUM=0
975 FOR X=0 TO 1
976   LOCATE 24,40+X,1
977   A$=INKEY$: IF A$="" THEN 977
978   IF ASC(A$)=13 THEN 983 ELSE PRINT A$;:' Test for enter key
979   A=INT(VAL(A$))
980   NUM=10*NUM+A
981   IF 10*NUM>ENTRIES THEN 983
982 NEXT X
983 IF NUM>0 AND NUM<=ENTRIES THEN CLS: CHAIN N$(NUM):' Transfer to choice
984 '
985 ' Error response
986 '
987 BEEP: LOCATE 24,45: PRINT  "Pardon me?";
988 FOR P=1 TO 999: NEXT P: LOCATE 24,42: PRINT SPC(19): GOTO 973
989 END
999 END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0134

     Volume in drive A has no label
     Directory of A:\

    8087     ASM      8125   2-05-84   2:01a
    AUTODEX  EXE     32000   2-20-84   3:36a
    CC       C        3544   2-20-84   2:02a
    DOSINTS  TXT      5940   2-05-84   3:15a
    DOS_ERR  TXT      3456   2-05-84   2:35a
    FIND     PAT      1024   2-20-84  12:49a
    LOAD     ASM      4637   2-05-84   2:02a
    LOAD     COM       291   2-20-84   4:40a
    MENUMAKR BAS      3796   2-05-84   2:14a
    PIL      LSP      4608   2-20-84   1:16a
    PTURTLE  LSP      4096   2-20-84   1:15a
    READ     ME       1138   2-20-84   4:46a
    STEEPDES APL      9856  12-25-83   4:03a
    TURTLE   LSP      3584   2-20-84   1:14a
    XLISP    DOC     27049   2-20-84   1:52a
    XLISP    EXE     43776   2-20-84   1:25a
           16 file(s)     156920 bytes
                             512 bytes free
