---
layout: page
title: "PC-SIG Diskette Library (Disk #379)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0379/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0379"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "WORDSTAR AIDS"

    An all-star collection of useful WordStar utilities to enhance your
    usage of this valuable word processor.  The collection includes
    keyboard redefinitions, printer patches, color, and editing features.
    Among others: WS2000.DIR gives you a full description of that versions
    keyboard defintions.  Also here is ST -- the SuperTyper program -- an
    improved version of the DOS "TYPE" command.
    
    System Requirements: WordStar
    
    How to Start: Consult the files suffixed .DOC, .KEY and .TXT for
    documentation.  To run a program with the suffix .COM or .EXE, just
    type its name, i.e., for ST.COM, type ST and hit <ENTER>.
    
    File Descriptions:
    
    MODWS1   ASM  Strips underline from WS files
    MODWS1   EXE  "
    ST       DOC  Documenatation for ST.COM
    ST       COM  Supertyper for WordStar
    WS2      KEY  Keyboard redefinition
    WS-PROKY KEY  Function key redefinitions
    WS--3-24 PAT  WS printer patches
    UNWS     EXE  Removes high-order bits from WS
    WSNUM    EXE  Numbers paragraphs in ws files
    WSMX80G  WS   Patches for MX-80G
    WSMOD    COM  Adds color to WS
    WSFXNEC  TXT  Function key redefinitions
    WSFIX3   TXT  Function key redefinitions
    WS3530   WS   Printer patches for NEC3530
    WS2KEY   DOC  Keyboard redefinition
    WS2000   DIR  Keyboard redefinition
    WSPNEC35 BAS  Patches for various printers
    WSUNNUM  EXE  Unnumbers paragraphs in WS files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES379.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 379   WORDSTAR Aids                                     V1 DS
------------------------------------------------------------------------
A WORDSTAR collection of useful utilities to enhance your usage of this
valuable text editor.  The collection includes keyboard redefinitions,
printer patches, color, and editing features.
 
MODWS1   ASM  Strips underline from WS files
MODWS1   EXE                  "
ST       COM  Supertyper for WORDSTAR
ST       DOC  Documentation for ST.COM
UNWS     EXE  Removes high-order bits from WS
WS--3-24 PAT  WS printer patches
WS-PROKY KEY  Function key redefinitions
WS2      KEY  Keyboard redefinition
WS2000   DIR  Keyboard redefinition
WS2KEY   DOC  Keyboard redefinition
WS3530   WS   Printer patches for NEC3530
WSFIX3   TXT  Function key redefinitions
WSFXNEC  TXT  Function key redefinitions
WSMOD    COM  Adds color to WS
WSMX80G  WS   Patches for MX-80G
WSNUM    EXE  Numbers paragraphs in ws files
WSPNEC35 BAS  Patches for various printers
WSUNNUM  EXE  Unnumbers paragraphs in WS files
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## MODWS1.ASM

{% raw %}
```
TITLE MODWS1 - ASSEMBLER PROGRAM TO STRIP UNDERLINING FROM WORDSTAR FILES
SUBTTL DESCRIPTION OF THE STACK SEGMENT
	PAGE
STACK	SEGMENT PARA STACK 'STACK'
	DB	64 DUP('STACK   ')
STACK	ENDS
SUBTTL DESCRIPTION OF THE DATA SEGMENT
	PAGE
WORKAREA SEGMENT PARA PUBLIC 'DATA'
LOGO    DB      '     ***********************************************************************',10,13
	db	'     *        Program is a modification by Herb Stratemeyer of the         *',10,13
	db	'     *                            UN - Wordstar                            *',10,13
	db	'     *       written as an assembler language example by Gene Plantz.      *',10,13
	db	'     *         You are prompted for the input and output file names.       *',10,13
	db	'     *         The modified program removes 13h and 93h, the toggle        *',10,13
	db	'     *          control codes for underlining from Wordstar files.         *',10,13
	db	'     ***********************************************************************',10,10,10,10,13,'$'
donem   db	10,10,13,'     -------->    DONE    <-------------',10,13,'$'
crlf	db	10,13,'$'	;issue carriage return-linefeed after input
fcb1	db	40 dup(0)	;input file  only needs to be 36 (but safe)
fcb2	db	40 dup(0)	;file control block for output
err0	db	7,7,'--->  ERROR Opening INPUT file  <--------',10,13,'$'
err1	db	7,7,'--->  ERROR.. not enough disk space for output <---',10,13,'$'
err2	db	7,7,'--->  ERROR.... bad file name given. <----',10,13,'$'
parms	db	15		;max size of reply
repson  db	?		;size of what they typed
name1	db	20  dup(' ')	;this is where the users reply goes
parms2	db	15		;max size of input
resp2	db	?		;size of what they really typed in
name2 	db	20  dup(' ')	;this is where the reply goes
ask1	db	10,10,13,'     Please Enter the name of the input file:   $'
ask2	db	'     Please Enter the name of the output file:  $'
msg	db	10,13,'     Searching for specified characters  $'
buf	db	20H		;record  buffer (only one byte!)
workarea ends
;
subttl desciption of dos interfaces
cseg	segment para public 'CODE'
start	proc	far
	assume cs:cseg,ds:workarea,ss:stack,es:workarea
	org	100h
	push	ds			;set up starting linkage as per dxample
	sub	ax,ax			;zero this and place on stack
	push	ax			;so that when we do a RET we go to 
	mov	ax,workarea		;location 0;  point to our workarea
	mov	ds,ax			;move the workarea address into DS
	mov	es,ax			;also into ES for the function 29H
	call	cls			;call subroutine to clear the screen
	mov	dh,3 			;set cursor to row 8
	mov	dl,0 			;set cursor to column 0
	mov	bh,0			;use screen number 0
	mov	ah,2			;function 2 to locate cursor
	int	10h			; go do it
	mov	dx,offset logo 		;display the logo where we put cursor
	mov	ah,9			;function 9 is print string
	int	21h			;call dos to do it
;
	mov	dx,offset ask1 		;point to message to display
	mov	ah,9 			;tell DOS what function (print string)
	int	21h			;call DOS
;
	mov	dx,offset parms		;point to console input buffer
	mov	ah,10  			;read console buffer
	int	21h			;do it
;
	mov	si,offset name1		;put address of name1 into SI
        mov 	di,offset fcb1		;put address of file control block DI
	mov	ah,29h			;tell DOS to parse filename
	int	21h			;do it
;
	mov    dx,offset crlf		;do a carriage return-line feed
	mov	ah,9			;after the reply 
	int	21h			;to DOS
;
	mov	al,[di+1] 		;if DI+1 = blank, no file name
	cmp	al,20h			;if blank, error
	jnz     isok
	jmp	error2
;
isok:
	mov	dx,offset ask2  	;ask user for name of new file
	mov	ah,9			;display question
	int	21h			;DOS
;
	mov	dx,offset parms2	;put address of input buffer into DX
	mov	ah,10			;get input from user
	int	21h			;DOS
;
	mov	dx,offset crlf		;another cr,lf
	mov	ah,9
	int	21h
;
	mov 	si,offset name2		;SI = address of field NAME2
	mov	di,offset fcb2		;DI = address of second file control 
	mov	ah,29h			;ask DOS to parse filename
	int	21h			;DOS
;
	mov 	al,[di+1] 		;if DI+1 = blank, error
	cmp	al,20h			;is it blank??
	jne	open1			;no, continue
	jmp	error2			;yes, tell him and leave
;
open1:	mov	dx,offset fcb1   	;point to first fcb
	mov	ah,15			;open the input file
	int 	21h			;call dos to do it 
;
	cmp	al,0			;see if ok
	jz	open2			;yes, continue
	jmp	error0			;no, tell him and leave
;
open2:	mov	dx,offset fcb2		;address of fcb2
	mov	ah,16h			;create output file
	int	21h			;this does open, too
;
	mov	dx,offset buf		;point to record buffer
	mov	ah,1ah			;tell DOS to put disk data there
	int	21h			;DOS
;
	mov  word ptr fcb1+0eh,0001h	;set input  record length to ONE!
	mov  word ptr fcb2+0eh,0001h	;set output record length to ONE!
;
;-----------------------------------------------------------------------------
;
                                        ;added by HPS
	mov	dx,offset msg		;tell the user its working
	mov	ah,9			;display message
	int	21h			;DOS
;
rdbyt:
	mov	dx,offset fcb1		;read from file 1
	mov	ah,14h			;sequential read from disk
	int	21h			;DOS
	cmp	al,0			;see if normal return
	jne	closeall		;end-of-file, wrap it up and leave
;
	mov	al,buf			;get data byte from memory
;
;************** START OF PROCESSING SECTION **********************************
; At this point, the next input BYTE is in the AL register.		     ;
;	a) To throw byte away, just JMP back to 'RDBYT'.		     ;
;	b) To output this byte (or any other byte in the AL register), just  ;
;	   CALL 'WRTBYT' before jumping back to 'RDBYT'.		     ;
;	c) Everything else is automatic !!!				     ;
;*****************************************************************************

;this section was modified to remove underlining - 13h and 93h

	cmp	al,13h			;is it a 13h (Ctrl-Q) ?
	je	rdbyt			;if yes, throw it away and get next  

	cmp	al,93h			;is it a 93h ? - same, high-bit set
	je	rdbyt			;if yes, get next

 	call	wrtbyt			;if its still around, keep it
	jmp	rdbyt			;this ones saved, get the next

;end of modification - rest is original

;************** END OF PROCESSING SECTION ************************************
;
wrtproc	proc	near
wrtbyt:
	mov	buf,al			;put data byte into memory buffer

	mov	dx,offset fcb2		;write to file 2
	mov	ah,15h			;sequential write
	int	21h			;DOS
	cmp	al,1			;was disk full?
	je	error1			;yes
wbex:	ret				;subroutine exit
wrtproc	endp
;
;------------------------------------------------------------------------------
;
closeall:
	mov	dx,offset fcb2		;close output file
	mov	ah,10h		
	int	21h
;
	mov	dx,offset donem		;issue DONE message
	mov	ah,9
	int	21h
	jmp	exit
;
error1:	pop	ax			;clean-up stack, JMPed to here from ...
					; ... middle of a subroutine.
	mov	dx,offset err1		;point to error mess number 1
	jmp	errorm
error2:	mov	dx,offset err2		;err mess 2
	jmp	errorm
error0:	mov	dx,offset err0
errorm:
	mov	ah,9			;print it
	int	21h
	jmp	closeall
exit:	ret
start	endp
;
;
subttl clear screen routine
cls	proc	near
	mov	cx,0
	mov	dx,2479h
	mov	bh,7
	mov	ax,600h
	int	10h
	ret
cls	endp
;
;
cseg	ends
	end	start
```
{% endraw %}

## ST.DOC

{% raw %}
```
ST -- the SuperTyper program -- an improved version of the DOS type command.

This program provides three significant enhancements to the type command:

 1) the display is paged, not scrolled, and thus is much easier to read.

 2) Previously displayed pages are saved and can be accessed by use of the
    PgUp and PgDn keys.

 3) Wordstar's 'funny' characters are converted to normal display characters.
    (as all WordStar users know, 'type'ing a WordStar file creates a strange
     display)

Directions:
Type ST for directions and to be prompted for a filename to be listed.
Type ST <filename> to list a file.
PgUp and PgDn move through the display pages in the file.
The '+' toggles the display of page number in each page.  This display
is convenient for keeping your place in big files -- especially files
that are bigger than memory and only part of the file can be kept in memory.
This display is normally off, it is toggled on when "buffer wrap-around"
occurs.  If it bugs you, hit the '+' key and turn it off.


```
{% endraw %}

## WS2KEY.DOC

{% raw %}
```
WORDSTAR NEWKEY DEFINITIONS   BY MICHAEL DREW          
                              
FOR USE WITH THE WORDSTAR WORD PROCESSING PROGRAM AND NEWKEY. THE FOLLOWING
CHANGES WILL HELP YOU IN YOUR WORDSTAR USE. ALL DOUBLE AND TRIPLE KEYSTROKES
HAVE BEEN REVISED TO REQUIRE ONLY ONE KEY STROKE (NOT COUNTING CTRL AND ALT)
IT WILL TAKE YOU A WHILE TO GET USED TO THE NEW KEYS, BUT ONCE YOU HAVE
YOU WILL FIND YOUR WORDSTAR TYPING TIME WILL BE GREATLY REDUCED!
FEEL FREE TO REVISE THIS ANY WAY YOU WISH FOR YOUR OWN USE, BUT PLEASE DO
NOT REVISE THIS PROGRAM IN THE BBS!
 
KEY    DEFINITION               COMPOSITION

ALT 3  CANCEL COMMAND           ^U
ALT 7  LEFT OF TEXT             ^QS
ALT 8  RIGHT OF TEXT            ^QD
ALT 9  TOP OF SCREEN            ^QE
ALT 10 BOTTOM OF SCREEN         ^QX
^-     O MENU                   ^O
^Q     Q MENU                   ^Q
^W     DELETE LINE RIGHT        ^QY
^E     DELETE WORD RIGHT        ^T
^R     DELETE LINE              ^Y 
^T     P MENU                   ^K
^Y     PAGE UP                  ^R
^U     CURSOR LINE UP           ^E
^I     CURSOR LINE DOWN         ^X
^O     SCREEN SCROLL UP         ^Z
^P     SCREEN SCROLL DOWN       ^W
^A     REFORM PARAGRAPH         ^B
^S     UNDERLINE                ^PS
^F     DELETE CHARACTER         ^G
^G     NON BREAK SPACE          ^PO
^H     CURSOR WORD LEFT         ^A
^J     CURSOR WORD RIGHT        ^F
^K     CURSOR LEFT              ^S
^L     CURSOR RIGHT             ^D
^\     J MENU                   ^J
^Z     K MENU                   ^K
^X     OVER PRINT               ^PH
^C     CENTER TEXT              ^OC
^V     FEED                     ^N
^B     BOLD TEXT                ^PB
^N     PAGE DOWN                ^C
 
NOTE THAT THE ABOVE APPLY TO ALL COMBINATIONS. FOR EXAMPLE, ^A IS NOW USED
TO REFORM A PARAGRAPH INSTEAD OF ^B. IN ORDER TO DO MASS REFORM (^QQ^B)
YOU WILL USE INSTEAD ^QQ^A.

```
{% endraw %}

## WSFIX3.TXT

{% raw %}
```

Judy Epstein, COMPTICS, 3303 Dato Ave., Highland Park, Ill., 60035
April 4, 1983

To use debug to make the same patches to WordStar as INSTALL.BAS+WSPATCH3.BAS
DOS in A:    WS diskette in B:	[V.3.24]

DEBUG B:WS.COM
  [just enter the numbers and letters from the left column]
F 077F L4 03 1B 53 00			^PQ  SUPERSCRIPT
F 0784 L4 03 1B 53 01			^PW  SUBSCRIPT
F 0789 L2 01 1B 			^PE  ESCAPE
F 078E L5 04 1B 48 1B 54		^PR  OFF EACH SCRIPT
F 076B L4 03 1B 57 01			^PA  DOUBLE WIDTH ON
F 0770 L4 03 1B 57 00			^PN  DOUBLE WIDTH OFF
F 0793 L2 01 0F 			^PY  CONDENSED ON
F 0798 L2 01 12 			^PY  CONDENSED OFF
F 079D L3 02 1B 40			     INITIALIZE PRINTER [PSINIT]
F 07AE L3 02 1B 40			     FINALIZE PRINTER	[PSFINI]
F 0775 L4 03 1B 2D 01			^PT  UNDERLINE ON  [continuous]
F 077A L4 03 1B 2D 00			^PT  UNDERLINE OFF
F 0670 L5 04 0B 53 11 50		F1   [^KS ^QP]
F 0679 L6 05 11 52 11 51 02		F2   [^QR ^QQ ^B]
F 0682 L4 03 0F 4C 1B			F3   [^OL <ESC>]
F 068B L4 03 0F 52 1B			F4   [^OR <ESC>]
F 0694 L3 02 10 54			F5   [^PT]
F 069D L6 05 0B 44 50 12 1B		F6   [^KD P ^R <ESC>]
F 06A6 L3 02 0B 42			F7   [^KB]
F 06AF L3 02 0B 4B			F8   [^KK]
F 06B8 L3 02 11 52			F9   [^QR]
F 06C1 L3 02 11 43			F10  [^QC]

To change default values :		[space bar to keep]

E 02CF				  DEL1-short [screen display time delay]
  01.				    put in 00 for shorter
E 02D0				  DEL2-med short
  04.				    put in 00 for shorter
E 02D1				  DEL3-med long
  08.				    put in 00 or 04 for shorter
E 02D2				  DEL4-long
  10.				    put in 00,04 or 08 for shorter
E 02D3				  DEL5-Full screen refresh
  09.				    put in 00,04,08 for shorter
E 02DB				  DISK RESET
  00.				    put FF to prohibit disk reset
E 02DC				  DRIVE FOR COMMAND FILES if not on logged
  01.				    put 1,2,3,4 for A,B,C,D.   WS looks here
E 02DD				  SCROLL SIZE
  14.				    amount of screen scroll.
E 0360				  HELP LEVEL 3
  03.				    put in 00,01, or 02
E 0361				  HELP LEVEL MESSAGE
  FF.				    put in 00 to produce initial message

E 0362				  INSERT ON
  FF.				    put in 00 for OFF
E 0363				  DIRECTORY DISPLAY ON
  FF.				    put in 00 for OFF
E 037F				  INITIAL LEFT MARGIN col. number -1
  00.				    put in 00 to INITRM -3
E 0380				  INITIAL RIGHT MARGIN col. number -1
  40.				    put in 2 to screen width -4
E 0385				  WORD WRAP
  FF.				    put in 00 for OFF
E 0386				  JUSTIFICATION
  FF.				    put in 00 for ragged right
E 0387				  VARIABLE TABS
  FF.				    put in 00 for OFF
E 0388				  SOFT HYPHEN
  00.				    put in FF for ON
E 0389				  HYPHEN HELP
  FF.				    put in 00 for OFF
E 038A				  PRINT CONTROL DISPLAY
  FF.				    put in 00 for OFF
E 038B				  RULER DISPLAY
  FF.				    put in 00 for OFF
E 038C				  PAGE BREAK DISPLAY
  FF.				    put in 00 for OFF
E 038D				  PAGE BREAK SUPPRESS
  FF.				    put in 00 for OFF
E 038E				  LINE SPACING
  01.				    put in 2 to 9
E 038F				  COLUMN MOVE MODE
  00.				    put in FF for ON
E 0392				  DOCUMENT MODE
  00.				    put in FF for non-document
E 0393				  DECIMAL POINT CHARACTER
  2E.				    normally "." put in 2C for ","
E 0395				  DOT COMMAND CHARACTER
  2E.				    normally "." Put in 25 for "%"
E 0396				  NON BREAK SPACE CHARACTER
  0F.				    normally ^O.  Put in 26 for "&"
E 039A				  HYPHEN CRITERION
  04.				    # columns short of right margin that
				    hyphen help activitated
E 03B3				  SOFT CR.  Line does not end paragraph. CR
  20.				    at end of line can be moved by ^B.
				    Normally " ".  Put 5C for "\"
E 03B4				  HARD CR.  End of line is paragraph end.
  3C.				    Normally "<".  Put in 20 for " ".
E 3D3				  PAGE NUMBERING ON
  00.				    put in FF for OFF
E 0747				  BOLDFACE STRIKES
  02.				    put 3,4,5 for darker
E 0748				  DOUBLE STRIKE
  02.				    put 3,4,5 for darker
E 07C1				  STRIKEOUT CHARACTER IS "-"
  2D.				    put in 2F for "/"
E 07C2				  UNDERSCORE CHARACTER
  5F.				    normally "_".
W, then Q

		     When using WordStar, you can now use

  F1	  SUPER SAVER,CONT    [SAVE FILE, MOVE CURSOR TO PREVIOUS POSITION]
  F2	  SUPER REFORMER      [CURSOR TO BEGINNING, REFORM EACH PARAGRAPH]
  F3	  LEFT MARGIN	      [SET  LEFT MARGIN AT CURSOR POSITION]
  F4	  RIGHT MARGIN	      [SET RIGHT MARGIN AT CURSOR POSITION]
  F5	  UNDERLINE TOGGLE    [CONTINUOUS UNDERLINE]
  F6	  SUPER PRINT	      [SAVE FILE, CALL UP PRINT WITH DEFAULTS]
  F7	  MARK BLOCK BEGINNING
  F8	  MARK BLOCK ENDING
  F9	  BEGINNING OF FILE
  F10	  END OF FILE

 ^PQ  SUPERSCRIPTS ON	  ^PW  SUBSCRIPTS ON	    ^PR SHUT OFF
 ^PA  DOUBLE WIDTH ON	  ^PN  DOUBLE WIDTH OFF
 ^PY  CONDENSED ON	  ^PY  CONDENSED OFF
 ^PT  UNDERLINE ON	  ^PT  UNDERLINE OFF
 ^PE4 ITALICS ON	  ^PE5 ITALICS OFF
 ^PEE EMPHASIZED ON	  ^PEF EMPHASIZED OFF
 ^PEG DOUBLE STRIKE ON	  ^PEH DOUBLE STRIKE OFF
 ^PE8 IGNORE PAPER OUT	  ^PE9 ENABLE PAPER OUT
 ^PE< UNIDIRECTIONAL ONE LINE
 ^PE0 LINE SPACING 1/8"   ^PE1 7/72"                ^PE2 1/6"[DEFAULT]


  To work properly,  the controls should be nested in proper order.   Also,
WS  does  not  count  ^PE  as a place  in  line,  but  it  does  count	the
4,5,E,F,G,H,8,9 ,<,0,1,2.   Since these are printer controls,  they are not
printed.   Thus  the  line  is missing these characters and is	too  short.
Therefore,  whenever one of these characters is used, insert an extra space
for each one used if using right justification.
  And  remember  to  CHECK this if the paragraph  is  REFORMED.   The  last
printing  character should be at the right margin column number.   If  not,
insert extra spaces in the line.
  F1  will  save  the file and resume at the  cursor  position	before	the
command (instead of placing it at the beginning of the file).
  Before using F2, make sure the margins and line spacing are set properly.
This  will  remove spaces that you put in for ^PEx,  so remember to  do  it
again,	or  be	sure to do it after this command.   If you do not  want  to
reform the whole file, then do not use F2.
  Before  using F6,  be sure the paper is properly positioned.	 Be careful
when using this command.   If there was a previous file printed,  then that
is  the name that will be restored,  and not necessarily the filename  that
was just saved.  (This is the way WordStar works)  If no previous file	was
printed, then the file saved will be selected.

```
{% endraw %}

## WSFXNEC.TXT

{% raw %}
```

Judy Epstein, COMPTICS, 3303 Dato Ave., Highland Park, Ill., 60035
May   1, 1983

To use debug to make the same patches to WordStar as INSTALL.BAS+WSPNEC35.BAS
DOS in A:    WS diskette in B:	[V.3.24]

DEBUG B:WS.COM
  [just enter the numbers and letters from the left column]
F 077F L5 04 0F 00 00 00		^PQ  SHIFT IN - STANDARD CHARS
F 0784 L5 04 0E 00 00 00		^PW  SHIFT OUT - OTHER CHARS
F 0789 L5 04 1B 00 00 00		^PE  ESCAPE
F 078E L5 04 00 00 00 00		^PR  not used now
F 076B L5 04 1B 48 00 00		^PA  ENTER 12 CPI,PROPORTIONAL
F 0770 L5 04 1B 49 00 00		^PN  EXIT TO SETTING OF DIP SW
F 079D L9 10 1B 34 1B 4B 1B 4F 1B 40	     INITIALIZE PRINTER [PSINIT]
F 07A6 L8 1B 37 1B 3D 1B 28 0D 0D
F 07AE L9 10 1B 34 1B 4B 1B 4F 1B 40	     FINALIZE PRINTER	[PSFINI]
F 07B7 L8 1B 37 1B 3D 1B 28 0D 0D
F 0670 L5 04 0B 53 11 50		F1   [^KS ^QP]
F 0679 L6 05 11 52 11 51 02		F2   [^QR ^QQ ^B]
F 0682 L4 03 0F 4C 1B			F3   [^OL <ESC>]
F 068B L4 03 0F 52 1B			F4   [^OR <ESC>]
F 0694 L3 02 10 53			F5   [^PS]
F 069D L6 05 0B 44 50 12 1B		F6   [^KD P ^R <ESC>]
F 06A6 L3 02 0B 42			F7   [^KB]
F 06AF L3 02 0B 4B			F8   [^KK]
F 06B8 L3 02 11 52			F9   [^QR]
F 06C1 L3 02 11 43			F10  [^QC]

To change default values :		[space bar to keep]

E 02CF				  DEL1-short [screen display time delay]
  01.				    put in 00 for shorter
E 02D0				  DEL2-med short
  04.				    put in 00 for shorter
E 02D1				  DEL3-med long
  08.				    put in 00 or 04 for shorter
E 02D2				  DEL4-long
  10.				    put in 00,04 or 08 for shorter
E 02D3				  DEL5-Full screen refresh
  09.				    put in 00,04,08 for shorter
E 02DB				  DISK RESET
  00.				    put FF to prohibit disk reset
E 02DC				  DRIVE FOR COMMAND FILES if not on logged
  01.				    put 1,2,3,4 for A,B,C,D.   WS looks here
E 02DD				  SCROLL SIZE
  14.				    amount of screen scroll.
E 0360				  HELP LEVEL 3
  03.				    put in 00,01, or 02
E 0361				  HELP LEVEL MESSAGE
  FF.				    put in 00 to produce initial message
E 0362				  INSERT ON
  FF.				    put in 00 for OFF

E 0363				  DIRECTORY DISPLAY ON
  FF.				    put in 00 for OFF
E 037F				  INITIAL LEFT MARGIN col. number -1
  00.				    put in 00 to INITRM -3
E 0380				  INITIAL RIGHT MARGIN col. number -1
  40.				    put in 2 to screen width -4
E 0385				  WORD WRAP
  FF.				    put in 00 for OFF
E 0386				  JUSTIFICATION
  FF.				    put in 00 for ragged right
E 0387				  VARIABLE TABS
  FF.				    put in 00 for OFF
E 0388				  SOFT HYPHEN
  00.				    put in FF for ON
E 0389				  HYPHEN HELP
  FF.				    put in 00 for OFF
E 038A				  PRINT CONTROL DISPLAY
  FF.				    put in 00 for OFF
E 038B				  RULER DISPLAY
  FF.				    put in 00 for OFF
E 038C				  PAGE BREAK DISPLAY
  FF.				    put in 00 for OFF
E 038D				  PAGE BREAK SUPPRESS
  FF.				    put in 00 for OFF
E 038E				  LINE SPACING
  01.				    put in 2 to 9
E 038F				  COLUMN MOVE MODE
  00.				    put in FF for ON
E 0392				  DOCUMENT MODE
  00.				    put in FF for non-document
E 0393				  DECIMAL POINT CHARACTER
  2E.				    normally "." put in 2C for ","
E 0395				  DOT COMMAND CHARACTER
  2E.				    normally "." Put in 25 for "%"
E 0396				  NON BREAK SPACE CHARACTER
  0F.				    normally ^O.  Put in 26 for "&"
E 039A				  HYPHEN CRITERION
  04.				    # columns short of right margin that
				    hyphen help activitated
E 03B3				  SOFT CR.  Line does not end paragraph. CR
  20.				    at end of line can be moved by ^B.
				    Normally " ".  Put 5C for "\"
E 03B4				  HARD CR.  End of line is paragraph end.
  3C.				    Normally "<".  Put in 20 for " ".
E 3D3				  PAGE NUMBERING ON
  00.				    put in FF for OFF
E 0747				  BOLDFACE STRIKES
  02.				    put 3,4,5 for darker
E 0748				  DOUBLE STRIKE
  02.				    put 3,4,5 for darker
E 07C1				  STRIKEOUT CHARACTER IS "-"
  2D.				    put in 2F for "/"
E 07C2				  UNDERSCORE CHARACTER
  5F.				    normally "_".
W, then Q

		     When using WordStar, you can now use

  F1	  SUPER SAVER,CONT    [SAVE FILE, MOVE CURSOR TO PREVIOUS POSITION]
  F2	  SUPER REFORMER      [CURSOR TO BEGINNING, REFORM EACH PARAGRAPH]
  F3	  LEFT MARGIN	      [SET  LEFT MARGIN AT CURSOR POSITION]
  F4	  RIGHT MARGIN	      [SET RIGHT MARGIN AT CURSOR POSITION]
  F5	  UNDERLINE TOGGLE    [ UNDERLINE]
  F6	  SUPER PRINT	      [SAVE FILE, CALL UP PRINT WITH DEFAULTS]
  F7	  MARK BLOCK BEGINNING
  F8	  MARK BLOCK ENDING
  F9	  BEGINNING OF FILE
  F10	  END OF FILE

 ^PQ  STANDARD CHARACTERS ^PW  SHIFTED CHARACTERS
 ^PA  12 CPI PROPORTIONAL ^PN  BACK TO SETTING OF DIP SWITCH
 ^PY  RIBBON COLOR TOGGLE
 ^PE  + DESIRED CODES AS PER MANUAL
 ^PR not used now

  To work properly,  the controls should be nested in proper order.   Also,
WS  does  not  count  ^PE  as a place  in  line,  but  it  does  count	the
 characters afterward.	    Since these are printer controls,  they are not
printed.   Thus  the  line  is missing these characters and is	too  short.
Therefore,  whenever one of these characters is used, insert an extra space
for each one used if using right justification.
  And  remember  to  CHECK this if the paragraph  is  REFORMED.   The  last
printing  character should be at the right margin column number.   If  not,
insert extra spaces in the line.
  F1  will  save  the file and resume at the  cursor  position	before	the
command (instead of placing it at the beginning of the file).
  Before using F2, make sure the margins and line spacing are set properly.
This  will  remove spaces that you put in for ^PEx,  so remember to  do  it
again,	or  be	sure to do it after this command.   If you do not  want  to
reform the whole file, then do not use F2.
  Before  using F6,  be sure the paper is properly positioned.	 Be careful
when using this command.   If there was a previous file printed,  then that
is  the name that will be restored,  and not necessarily the filename  that
was just saved.  (This is the way WordStar works)  If no previous file	was
printed, then the file saved will be selected.

```
{% endraw %}

## WSPNEC35.BAS

{% raw %}
```bas
10 'SAVE"a:wspnec35",A       PINSTALL
11 ' This program installs various printers for WordStar 3.02
12 ' MicroPro International Corporation, May 24, 1982
13 ' Revised for WordStar 3.2 - June 16, 1982
14 ' Revised for WordStar 3.21 - August 12,1982 -ewg
15 ' Revised for WordStar 3.24 - November 5,1982 -ewg
16 ' Revised for NEC 3550 Printer - December 1, 1982 - cws
17   '----------------------------------------------------------------------------------------------------------------------------
18 ' Revised on  4- 4-83 for function key settings and miscellaneous locations
19 ' Revised on  5- 1-83 for NEC 3530 printer.
20 ' By Judy Epstein,COMPTICS,3303 Dato Ave.,Highland Park, Ill.60035
21   '----------------------------------------------------------------------------------------------------------------------------
22 '    F1      ^KS ^QP         Super saver--Save and resume.  Cursor to position before this command
23 '    F2      ^QR ^QQ^B       Super reform--Cursor to beginning of file.  Reform every paragraph.
24 '                            Make sure margins and line spacing set properly.
25 '                            This removes spaces you should have put in for ^PEx, so remember to do it again (or now)
26 '    F3      ^OL <esc>       Left  margin set at cursor column.
27 '    F4      ^OR <esc>       Right margin set at cursor column.
28 '    F5      ^PS             Underline toggle
29 '    F6      ^KD P ^R <esc>  Super print--Saves file.  Then selects P to print a file with all defaults as given.
30 '                            Be sure paper is properly positioned before pressing F6.  Be careful when using this command.
31 '                            If a previous file was printed, then that is the name that will be restored with ^R, not this one.
32 '                            If no previous file was printed, then the file that was just saved will be selected with ^R.
33 '    F7      ^KB             Mark block beginning
34 '    F8      ^KK             Mark block end
35 '    F9      ^QR             Cursor to beginning of file
36 '    F10     ^QC             Cursor to end of file
37 ' ------------------------------------------------------------------------
38 ' These patches are of the form:  Address of key,# bytes,1  and then for each of # bytes,     the consecutive address,byte,1
39 ' At most, # bytes = 6  .  The values are in hex.
40 '
47   '----------------------------------------------------------------------------------------------------------------------------
48 '         characters:        ^PQ standard             ^PW remaining shifted characters
49 '         spacing:           ^PA 12 cpi proportional  ^PN turns off, back to dip switch setting
50 '         ribbon:            ^PY toggle between red and black
51 '
52 '   use ^PE for escape, followed by desired uppercase codes to printer as described in manual
53 '   ^PR not used yet
54 '
55 '
56 ' USE NEC 55xx OPTION WHEN ASKED
57 '
58 '
59   '----------------------------------------------------------------------------------------------------------------------------
1070 RESTORE 1405
1230 '
1231 '----------------------------------------------------------------------------------------------------------------------------
1240 ' Unconditional patch data.  These bytes will be patched no matter what
1250 ' printer is selected.
1260 '
1261 ' address,byte,# of bytes
1270 DATA &H7CD,&H90,2
1280 DATA &H7DD,&H90,8
1290 DATA &H2D4,&HFF,1
1300 DATA &H2D6,&HFF,1
1310 DATA &h81b,&h90,2
1320 DATA &h82d,&h90,5
1330 DATA &h83a,&h90,47
1331 'USR1   standard characters  ************************************  ^PQ **
1332 DATA &H077F,4,1,  &H0780,&H0F,1,  &H0781,  00,1,  &H0782,  00,1,  &H0783,  00,1
1336 'USR2    shifted characters  ************************************  ^PW **
1337 DATA &H0784,4,1,  &H0785,&H0E,1,  &H0786,  00,1,  &H0787,  00,1,  &H0788,  00,1
1341 'USR3  escape ***************************************************  ^PE **
1342 DATA &H0789,4,1,  &H078A,&H1B,1,  &H078B,  00,1,  &H078C,  00,1,  &H078D,  00,1
1344 'USR4  NOT USED  ************************************************  ^PR **
1345 DATA &H078E,4,1,  &H078F,&H00,1,  &H0790,  00,1,  &H0791,  00,1,  &H0792,  00,1
1350 'PALT  alternate pitch 12 cpi proportional **********************  ^PA **
1351 DATA &H076B,4,1,  &H076C,&H1B,1,  &H076D,&H48,1,  &H076E,  00,1,  &H076F,  00,1
1355 'PSTD return to setting of spacing dip switch *******************  ^PN **
1356 DATA &H0770,4,1,  &H0771,&H1B,1,  &H0772,&H49,1,  &H0773,  00,1,  &H0774,  00,1
1370 'SOCHR strike out character.  Is 2d for "-".  Put in 2f for "/" *********
1371 DATA &h07c1,&h2d,1
1372 'DEL4 Time delay   Put in 08 or 04 for shorter [was &h10] ***************
1373 DATA &H02d2,&h04,1
1374 ' Function key patches  *************************************************
1375 DATA &h0670,&h04,1,        &h0671,&h0b,1, &h0672,&h53,1, &h0673,&h11,1, &H0674,&h50,1
1376 DATA &h0679,&h05,1,        &h067a,&h11,1, &h067b,&h52,1, &h067c,&h11,1, &h067d,&h51,1, &h067e,&h02,1
1377 DATA &h0682,&h03,1,        &h0683,&h0f,1, &h0684,&h4c,1, &h0685,&h1b,1
1378 DATA &h068b,&h03,1,        &h068c,&h0f,1, &h068d,&h52,1, &h068e,&h1b,1
1379 DATA &h0694,&h02,1,        &h0695,&h10,1, &h0696,&h53,1
1380 DATA &h069d,&h05,1,        &h069e,&h0b,1, &h069f,&h44,1, &h06a0,&h50,1, &h06a1,&h12,1, &h06a2,&h1b,1
1381 DATA &h06a6,&h02,1,        &h06a7,&h0b,1, &h06a8,&h42,1
1382 DATA &h06af,&h02,1,        &h06b0,&h0b,1, &h06b1,&h4b,1
1383 DATA &h06b8,&h02,1,        &h06b9,&h11,1, &h06ba,&h52,1
1384 DATA &h06c1,&h02,1,        &h06c2,&h11,1, &h06c3,&h43,1
1385 ' ITHELP initial help level.  Can be 0,1,2,or 3 *************************
1386 DATA &h0360,&h00,1
1387 ' Hyphen help. ff for on ,00 for off ************************************
1388 DATA &h0389,&h00,1
1389 ' room here for more patches to line 1398 *******************************
1390 ' This line must be used or else a comment left here *****************
1398 DATA 0,0,0
1399 ' --------------------------------------------------------------------
1400 ' PRINTER NAME DATE AREA
1401 '
1405 DATA "NEC 3550 Spinwriter"
1410 DATA "IBM Parallel Printer"
1411 DATA "NEC 5510/5520 Spinwriter"
1412 DATA "Qume Sprint 5 Printer"
1413 DATA "C. Itoh Starwriter"
3169 'PSINIT
3170 DATA &H10, &H1B,&H34,  &H1B,&H4B,  &H1B,&H4F,  &H1B,&H40,  &H1B,&H37,  &H1B,&H3D,  &H1B,&H28, &H0D,&H0D
3179 'PSFINI
3180 DATA &H10, &H1B,&H34,  &H1B,&H4B,  &H1B,&H4F,  &H1B,&H40,  &H1B,&H37,  &H1B,&H3D,  &H1B,&H28, &H0D,&H0D
5110 RESTORE 5450       'this was restore 7460 in install.bas, a mistake!
10000 '****************************************************************************************************************************
10001 '****************************************************************************************************************************
10005 ' Oct. 5, 1982
10010 'from manual, there are two user areas that can be modified.
10020 'in ws.com , user area 1 from line 1 to 861+
10030 '                        locations 0100 to 035EEFF
10035 ' these are for user subroutines
10040 'INISUB  02A4
10050 'UNISUB  O2A7
10060 'MORPAT  02E0
10070 'PBGMEN  035C
10080 'PRINT (:F4:USER1.LST) NOOJ XREF  PAGEWIDTH (132)
10090 '
10100 'in ws.com , user area 4 from line 1 to 722+
10110 'these are where the user printer funcitons come in
10120 '
10130 'USR1    077F     DB  # of bytes
10140 '        0780     DB  byte1,byte2,byte3,byte4
10150 'USR2    0784     DB  # of bytes
10160 '                 DB  BYTE1,BYTE2,BYTE3,BYTE4
10170 'USR3    0789     DB  # of bytes
10180 '                 DB  byte1,byte2,byte3,byte4
10190 'USR4    078E     DB  # of bytes
10200 '                 DB  byte1,byte2,byte3,byte4
10210 ' examples
10220 '                 DB '='
10230 '                 DB 9        ;THIS IS DECIMAL
10240 '                 DB 0AH      ;THIS IS HEX
10250 '                 DB 177Q     ;THIS IS OCTAL , OR 177O
10260 '                 DB 13       ;THIS IS CARRIAGE RETURN
10270 'How to use the codes I have selected for WS
10271 '----------------------------------------------------------------------------------------------------------------------------
10600 '----------------------------------------------------------------------------------------------------------------------------
10610 ' When using ^PE and then another character,     make sure to insert spaces in text
10620 ' WS doesn't count ^P,^E as places in line, but does count the other characters.  Since they don't print, the line gets smaller.
10630 ' If right justifying text, insert spaces for each one used.
10635 'Also be sure to use capital letters so the proper code is sent!
10640 'When combining many options, be sure to nest them in the proper order.  If not, they are not always shut off properly.
10700 '----------------------------------------------------------------------------------------------------------------------------
10710 '     OTHER USEFUL LOCATIONS
10720 ' 0746     POSMTH  FF              printer overstrike method, =  FF if overprint by CR without LF
10730 '                                  = 0 if overprint by BS and/or CR, = 1 for daisy wheel
10760 ' 0747     BLDSTR  DB 2            # strikes for boldface. Set 3,4,5 for darker
10770 ' 0748     DBLSTR  DB 2            # strikes for double strike
10790 ' 07c1     SOCHR   DB '-'          character for strikeout
10800 ' 07c2     ULCHR   DB '_'          underscore character
10810 ' 02d8     NMOFUS  DB 1,1          # users on system
10840 ' 02dc     DEFDSK  DB 1            #  of default drive. 1=A,2=B,3=C,4=D  This drive searched if programs not on logged drive.
10850 ' 02cf     DEL1    DB 1            Screen display time delay - short
10851 ' 02d0     DEL2    DB 4                                      - med short
10852 ' 02d1     DEL3    DB 8                                      - med long
10853 ' 02d2     DEL4    DB 16           [&h10]                    - long
10854 ' 02d3     DEL5    DB 9            Full screen refresh
10860 ' 0360     ITHELP  DB 3            Initial help level. Change to 0,1,2 for help level at boot-up  ^JH3
10870 ' 0361     NITHLF  DB ffH          Initial help message.  Change to 0 for message if level is 1 or 2
10880 ' 0362     ITTOGF  DB ffH          Insert. Change to 0 for off  ^V
10890 ' 0363     ITDSDR  DB ffH          Directory display.  Change to 0 for off  ^KF, F
10900 ' 037f     ITITLM  DB 0            Initial left margin column number - 1.  Valid values are 0 to INITRM -3  ^OL1
10910 ' 0380     ITITRM  DB 40H          Initial right margin column number - 1.  Valid values are 2 to screen width - 4  ^OR65
10920 ' 0385           DB ffH          Word wrap.      0 for off.          ^OW
10921 ' 0386           DB ffH          Justify.        0 for ragged right  ^OJ
10922 ' 0387           DB ffH          Variable tabs.  0 for off.          ^OV
10923 ' 0388           DB 0            Soft hyphen.    ff for on.          ^OE
10924 ' 0389           DB ffH          Hyphen help.    0 for off.          ^OH
10925 ' 038a           DB ffH          Print control display. 0 for off.   ^OD
10926 ' 038b           DB ffH          Ruler display.  0 for off.          ^OT
10927 ' 038c           DB ffH          Page break display. 0 for off.      ^OP
10928 ' 038d           DB ffH          Page break suppress.  0 for off.    ^OP
10929 ' 038e           DB 01H          Single spacing.  Change to 2,3,..9  ^OS
10930 ' 038f           DB 00H          Column mode.    ff for on.          ^KN
10931 ' 0392           DB 00H          Document mode.  ff for non-document   N
10932 ' 0393           DB 2eH          Decimanl point  character.  Usually "."
10933 ' 0395           DB 2eH          Character that begins dot commands.  Usually "."
10934 ' 0396           DB 0fH          Non-break space character.  Usually ^O
10935 ' 039a           DB 04H          Hyphen criterion.  # columns short of right margin for hyphen help active
10940 ' 03b3           DB 20H          Soft Cr.  Line does not end paragraph.  CR at end can be moved by ^B.
10941 '                                Usually " ".  Change to "\" [5cH]
10950 ' 03b4           DB 3cH          Hard Cr.  End of line is paragraph termination.  Usually "<" Can change to " " [20H]
10951 '                                Then can use ^B to reform program source files, where each line ends in CR
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0379

     Volume in drive A has no label
     Directory of A:\

    WS--3-24 PAT     39713   6-29-83   7:44p
    WS-PROKY KEY     26752   8-05-83   8:35a
    WSMOD    COM      9344   6-11-83  12:26a
    WS2      KEY      1024   1-01-80   2:00a
    WS2KEY   DOC      2048   6-16-84   8:55p
    MODWS1   ASM      7040   1-15-84  10:57p
    MODWS1   EXE      2688   1-15-84  10:58p
    UNWS     EXE      2816  11-28-82   8:48a
    WSFIX3   TXT      6407   6-30-83   8:43a
    WSMX80G  WS       4992   8-03-82
    WS3530   WS       3840   8-02-82
    WSFXNEC  TXT      6102   6-30-83   8:14a
    WSPNEC35 BAS     12800   6-24-83   8:17a
    WS2000   DIR      5888  11-05-84  12:44p
    WSNUM    EXE     35200   9-14-84  10:46p
    WSUNNUM  EXE     33024   9-14-84  10:46p
    ST       DOC      1048   1-10-84  10:41a
    FILES379 TXT      1241   2-24-86  12:48p
    ST       COM     14336   1-09-84   8:44a
           19 file(s)     216303 bytes
                           98304 bytes free
