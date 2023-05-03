---
layout: page
title: "PC-SIG Diskette Library (Disk #2861)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2861/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2861"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## EXAMP1.ASM

{% raw %}
```
; EXAMP1.ASM: routine which acts similar to INSTR: takes main string (of any
; length) and match string (length = 1 character), and returns (as an
; integer) the position (1..length) of the first occurrence of the match
; string in the main string.  If the match string doesn't exist in the main
; string, the routine returns zero.

; Usage: $LINK "EXAMP1.OBJ"
;        DECLARE FUNCTION MyInstr%(STRING, STRING)
;        position% = MyInstr%(main$, match$)

extrn get$loc: far

code segment byte public
assume cs:code

MyInstr		proc	far
		public	MyInstr

		push	bp
		mov	bp, sp
		push	di		  ; preserve di for PowerBASIC

		les	di, [bp][06]	  ; es:di points to match$ handle
		push	word ptr es:[di]  ; push handle on stack for get$loc
		call	get$loc		  ; dx:ax = match$, cx = length
		mov	bx, cx		  ; save length in bx for now
		mov	di, ax
		mov	es, dx		  ; es:di points to match$ contents
		mov	al, es:[di]	  ; al = 1st character of match$
		push	ax		  ; save on stack for now

		les	di, [bp][0Ah]	  ; es:di points to main$ handle
		push	word ptr es:[di]  ; push handle on stack for get$loc
		call	get$loc		  ; dx:ax = main$, cx = length
		mov	di, ax
		mov	es, dx		  ; es:di points to main$ contents
		pop	ax		  ; al = match$ character
		jcxz	MyZero		  ; return zero if main$ length = 0
		or	bx, bx		  ; check if match$ length = 0
		jz	MyOne		  ; return one if match$ null
		mov	bx, di		  ; save start offset of main$ in bx

		cld			  ; clear dir flag for forward scan
		repne	scasb		  ; scan cx bytes for match with al
		jnz	MyZero		  ; return zero if no match
		sub	di, bx		  ; di = match+1 - start = position
					  ; (1..len) of match$ in main$
		mov	ax, di		  ; put it in ax for return to PB
		jmp	short MyFound
MyOne:
		mov	ax, 1		  ; ax = 1 if match$ null
		jmp	short MyFound
MyZero:
		xor	ax, ax		  ; ax = zero (returns zero to PB)
MyFound:
		pop	di		  ; restore di and bp
		pop	bp		  ; okay to leave dir flag clear
		retf	8		  ; far return, remove 8 bytes

MyInstr		endp

code ends
end
```
{% endraw %}

## EXAMP1.BAS

{% raw %}
```bas
$LINK "EXAMP1.OBJ"
DECLARE FUNCTION MyInstr%(STRING, STRING)

cls
line input "Enter main string: ";main$
line input "Enter 1-character string to search for: ";match$
position% = MyInstr%(main$, match$)
if position% = 0 then
  print "'";left$(match$,1);"' not found in '";main$;"'"
else
  print "'";left$(match$,1);"' found in '";main$;"' at position";position%
end if
```
{% endraw %}

## EXAMP2.ASM

{% raw %}
```
; EXAMP2.ASM: This routine takes two main strings and an error string as
; parameters.  It concatenates the two main strings into a new result string
; which is then returned to PowerBASIC.  If the new string cannot be created
; (because there is not enough string space left or because the resulting
; string would be longer than the maximum string size), the error string is
; returned instead.

; Usage: $LINK "EXAMP2.OBJ"
;        DECLARE FUNCTION MyCat$(STRING, STRING, STRING)
;        myerror$ = "You blew it!"
;        cat$ = MyCat$(string1$, string2$, myerror$)

extrn get$loc: far
extrn get$alloc: far

code segment byte public
assume cs:code

MyCat		proc	far
		public	MyCat

		push	bp
		mov	bp, sp
		push	si		  ; preserve si, di, ds for PB
		push	di
		push	ds

		les	di, [bp][0Ah]	  ; es:di points to string2$ handle
		push	word ptr es:[di]  ; push handle on stack for get$loc
		call	get$loc		  ; dx:ax = string2$, cx = length
		mov	bx, cx		  ; save length in bx for now
		push	cx		  ; save length for now on stack too
		push	ax		  ; save address of contents for now
		push	dx

		les	di, [bp][0Eh]	  ; es:di points to string1$ handle
		push	word ptr es:[di]  ; push handle on stack for get$loc
		call	get$loc		  ; dx:ax = string1$, cx = length
		push	cx		  ; save length for now
		push	ax		  ; save address of contents for now
		push	dx

		add	cx, bx		  ; cx = length of both strings
		cmp	cx, 32750	  ; make sure it's not > max $ size
		ja	MyCatError	  ; return error string if it is

		push	cx		  ; request cx bytes from get$alloc
		call	get$alloc	  ; ax = handle # or 0 if error
		or	ax, ax		  ; see if ax = 0
		jz	MyCatError	  ; yes, go return error$ to PB
		mov	bx, ax		  ; save handle in bx for later

		push	ax		  ; new handle on stack for get$loc
		call	get$loc		  ; dx:ax = new$, cx = length
		mov	di, ax
		mov	es, dx		  ; es:di points to start of new$

		pop	ds
		pop	si
		pop	cx		  ; ds:si = string1$, cx = length
		cld			  ; clear dir flag for forward copy
		rep	movsb		  ; copy string1$ to new$

		pop	ds
		pop	si
		pop	cx		  ; ds:si = string2$, cx = length
		rep	movsb		  ; append string2$ to new$

		mov	ax, bx		  ; return new$ handle to PB in ax
MyCatDone:
		pop	ds		  ; restore ds, di, si, bp
		pop	di
		pop	si
		pop	bp		  ; okay to leave dir flag clear
		retf	12		  ; far return, remove 12 bytes

MyCatError:				  ; here if not able to create new
		add	sp, 6*2		  ; string -- clean the 6 extra
		les	di, [bp][06]	  ; words off the stack (cx, ax, dx,
		mov	ax, es:[di]	  ; cx, ax, dx), get the handle of
		jmp	MyCatDone	  ; the error string off the stack
					  ; and return it in ax
MyCat		endp

code ends
end
```
{% endraw %}

## EXAMP2.BAS

{% raw %}
```bas
$LINK "EXAMP2.OBJ"
DECLARE FUNCTION MyCat$(STRING, STRING, STRING)

cls
line input "Enter string 1: ";string1$
line input "Enter string 2: ";string2$
line input "Enter string to return if error: ";anerror$
print "Combined string: ";MyCat$(string1$, string2$, anerror$)
```
{% endraw %}

## EXAMP3.ASM

{% raw %}
```
; EXAMP3.ASM: This routine takes a string and converts any lowercase letters
; in it to uppercase.  It modifies the string passed to it -- it does not
; return a new string.

; Usage: $LINK "EXAMP3.OBJ"
;        DECLARE SUB UpperCase(STRING)
;        CALL UpperCase(astring$)

extrn get$loc: far

code segment byte public
assume cs:code

UpperCase	proc	far
		public	UpperCase

		push	bp
		mov	bp, sp
		push	si		  ; preserve si, di, ds for PB
		push	di
		push	ds

		les	di, [bp][06]	  ; es:di points to astring$ handle
		push	word ptr es:[di]  ; push handle on stack for get$loc
		call	get$loc		  ; dx:ax = astring$, cx = length
		jcxz	UpperDone	  ; done if string length = 0
		mov	ds, dx
		mov	si, ax		  ; ds:si = astring$
GetLetter:
		mov	al, [si]	  ; get character from string in al
		cmp	al, 'a'
		jb	NextLetter	  ; skip to next if not 'a'..'z'
		cmp	al, 'z'
		ja	NextLetter
		sub	byte ptr [si], 'a'-'A'	; force 'a'..'z' to uppercase
NextLetter:
		inc	si		  ; move to next character
		loop	GetLetter	  ; until length (cx) = 0
UpperDone:
		pop	ds		  ; restore ds, di, si, bp
		pop	di
		pop	si
		pop	bp
		retf	4		  ; far return, remove 4 bytes

UpperCase	endp

code ends
end
```
{% endraw %}

## EXAMP3.BAS

{% raw %}
```bas
$LINK "EXAMP3.OBJ"
DECLARE SUB UpperCase(STRING)

cls
line input "Enter string: ";astring$
call UpperCase(astring$)
print "Uppercase: ";astring$

```
{% endraw %}

## EXAMP4.ASM

{% raw %}
```
; EXAMP4.ASM: This routine multiplies 2 double-precision floating-point
; numbers passed to it and returns a double-precision result (it uses
; PB's float emulator to perform the arithmetic).

; Usage: $LINK "EXAMP4.OBJ"
;        DECLARE FUNCTION DoubleMult#(DOUBLE, DOUBLE)
;        result# = DoubleMult#(num1#, num2#)

code segment byte public
assume cs:code

		emul			  ; instructs TASM to generate
					  ; emulator calls for floating-
					  ; point instructions
DoubleMult	proc	far
		public	DoubleMult

		push	bp
		mov	bp, sp
		push	di		  ; preserve di for PB

		les	di, [bp][0Ah]	  ; es:di points to num1
		fld	qword ptr es:[di]
		les	di, [bp][06]	  ; es:di points to num2
		fmul	qword ptr es:[di]

		pop	di		  ; restore di, bp
		pop	bp
		retf	8		  ; far return, remove 8 bytes

DoubleMult	endp

code ends
end
```
{% endraw %}

## EXAMP4.BAS

{% raw %}
```bas
$LINK "EXAMP4.OBJ"
DECLARE FUNCTION DoubleMult#(DOUBLE, DOUBLE)

cls
input "Enter a double-precision floating-point number: ",num1#
input "Enter another double-precision floating-point number: ",num2#
print num1#;"*";num2#;"=";DoubleMult#(num1#, num2#)

```
{% endraw %}

## EXAMP5.ASM

{% raw %}
```
; EXAMP5.ASM: This routine locates the largest element in an integer array
; and returns its relative index, given the start element and the number of
; consecutive elements to search.

; Usage: $LINK "EXAMP5.OBJ"
;        DECLARE FUNCTION Largest%(INTEGER, INTEGER)
;	 DIM TheArray%(1:100)
;	 'next line searches 20 elements starting at element 5
;        bigindex% = Largest%(TheArray%(5), 20)  'returns 0..19
;	 bigvalue% = TheArray%(bigindex%+5)      'now use index to get value

code segment byte public
assume cs:code

Largest		proc	far
		public	Largest

		push	bp
		mov	bp, sp
		push	di		  ; preserve di for PowerBASIC

		les	di, [bp][06]	  ; es:di points to # of elements
		mov	cx, es:[di]	  ; cx = # of elements
		les	di, [bp][0Ah]	  ; es:di = array start address
		push	di		  ; save array start offset

		mov	bx, es:[di]	  ; bx holds current largest value
		mov	dx, di		  ; dx holds its offset
GetInteger:
		mov	ax, es:[di]	  ; get next value
		cmp	ax, bx		  ; compare against current largest
		jbe	Smaller		  ; go get next if < current largest
		mov	bx, ax		  ; > current largest so make it new
		mov	dx, di		  ; current largest & record offset
Smaller:
		inc	di		  ; advance pointer to next integer
		inc	di		  ; (2 bytes per integer)
		loop	GetInteger	  ; get next until # of elements done

		pop	di		  ; get array start offset
		sub	dx, di		  ; dx = ofst (0..(#-1)*2) of largest
		shr	dx, 1		  ; divide by 2 giving 0..#-1
		mov	ax, dx		  ; put in ax for return to PB

		pop	di		  ; restore di and bp
		pop	bp
		retf	8		  ; far return, remove 8 bytes

Largest		endp

code ends
end
```
{% endraw %}

## EXAMP5.BAS

{% raw %}
```bas
$LINK "EXAMP5.OBJ"
DECLARE FUNCTION Largest%(INTEGER, INTEGER)

dim TheArray%(1:20)	'array of 1..20 of 20 elements
for x% = 1 to 20	'fill array from DATA statements
  read TheArray%(x%)
next x%
data 5,23,9,650,72,1234,18,623,584,344,24,992,441,536,4,868,2336,624,20,1

'next line searches 8 elements starting at element 5 for largest value
bigindex% = Largest%(TheArray%(5), 8)  'should return relative index 1
bigvalue% = TheArray%(bigindex%+5)     'now use index to get value (1234)

cls
print "Of the given array, the largest value is";bigvalue%
print "This value is stored at relative index";bigindex%
print "which is actually absolute index";bigindex%+5
```
{% endraw %}

## EXAMP6.ASM

{% raw %}
```
; EXAMP6.ASM: This routine adds the contents of two integer variables in the
; calling PB program, named MyVar1% and MyVar2%, storing the result in
; another integer variable named MyResult%.  These three variables must be
; PUBLIC in the calling program.  This routine only returns correct results
; for values in the legal integer range (-32768..+32767) -- overflows are
; not trapped, just ignored.

; Usage: $LINK "EXAMP6.OBJ"
;        DECLARE SUB AddThem()
;	 PUBLIC MyVar1%, MyVar2%, MyResult%
;        CALL AddThem

extrn MyVar1: word
extrn MyVar2: word
extrn MyResult: word

code segment byte public
assume cs:code

AddThem		proc	far		  ; Note: no check for overflow
		public	AddThem		  ; is performed after the addition

		mov	ax, MyVar1	  ; get MyVar1 integer
		add	ax, MyVar2	  ; add MyVar2 integer to it
		mov	MyResult, ax	  ; store in MyResult
		retf			  ; far return

AddThem		endp

code ends
end
```
{% endraw %}

## EXAMP6.BAS

{% raw %}
```bas
$LINK "EXAMP6.OBJ"
DECLARE SUB AddThem()
PUBLIC MyVar1%, MyVar2%, MyResult%

input "Enter integer value: ",MyVar1%
input "Enter another integer value: ",MyVar2%
call AddThem
print MyVar1%;"+";MyVar2%;"=";MyResult%
```
{% endraw %}

## FILE2861.TXT

{% raw %}
```
Disk No: 2861                                                           
Disk Title: PowerBASIC Library 8 of 8                                   
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: PowerBASIC BBS Library                                   
Author Version: 10/91                                                   
Author Registration: None.                                              
Special Requirements: PowerBASIC compiler.                              
                                                                        
If you are a PowerBASIC user, check out this free set of programs and   
routines.  They may just save you programming time, giving you examples 
of code that can be incorporated into your application.                 
                                                                        
Disk #2631, PowerBASIC BBS Library #1:                                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```

 ╔═════════════════════════════════════════════════════════════════════════╗
 ║              <<<<  #2861 POWERBASIC BBS LIBRARY #8  >>>>                ║
 ╠═════════════════════════════════════════════════════════════════════════╣
 ║                                                                         ║
 ║  To print documentation, type:  COPY LIBRARY.DOC PRN  (press Enter)     ║
 ║                                                                         ║
 ║  To unzip the files, type:  PKUNZIP [filename.ZIP)  (press Enter)       ║
 ║                                                                         ║
 ║                                                                         ║
 ║                                       (c) Copyright 1991, PC-SIG Inc.   ║
 ╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INCLUDE.DOC

{% raw %}
```
Power Basic Include Files
Written & Used by Key Systems

Introduction

    These include files were written and are used by me (Rusty Key)
in the programs that I write for my clients.  While some of them are
specific in their tasks and functions, I've tried to make them as
generic as possible.  I have tried to use mostly ANSI standard BASIC
code so that the routines can be used in all BASIC and BASIC compilers.
However, there are some things that Power Basic does easier and faster
so these use the non-ANSI codes.  At the end of this documentation,
I will note the non-ANSI code and an ANSI or QB alternative.

    I have release this code to the public with the intention of
helping those who are trying to learn BASIC and a way for more
experienced programmers to have access to a library of functions for
Power Basic.  When it comes to compensation for these libraries, the
following rule applies.....

    If you use them in a product that makes you money or you use
    them in a coporate enviroment....then I expect to get some
    compensation for my work.  $10 or more would make me happy.

It comes down to this....if my code makes it easier for you to make
money or if it make is easier for a corporation to handle it's business
affairs...I should be compensated.

    However, if it's just for you and your household's benefits, then
by all means use them with no feelings of guilt and I wish you the best
of luck.


General Information

    Each of these include files have certain things in common.  The
naming convention used, the calling procedure, the inline documentation
and other various items which are explained below.

    Nameing Convention
        Each INClude file has an extention of INC.  The file name
        itself is divided into two parts.  The first part will consist
        of 2 to 3 letters stating the INClude type.  INClude files
        are either FuNctions, SUBroutines (invoked by CALLs), or regular
        routines (invoked by GOSUBs).  The remaining part of the filename
        is what I hoped to be an abreviation that gives you an idea of
        what the INClude file does.

             EXAMPLE:
                FNgetyn.INC - FuNction that GET's a Y or N in responce
                            to a yes/no question.
                SUBvaldt.INC - SUBroutine to validate a date
                DIMpopup.INC - DIMension statements for pop up windows
                inpt.INC - Input routine (GOSUB inpt)

        IF you notice, I capitilize the first part and lower case the
        second.  This is part of my internal syntax that I use and
        explain later.  This naming convention allows me to know what
        type of call I must make and the type of return I will receive.

    Inline Documentation
        Each INClude file will have a short set of documentation with
        in the code it self.  These REMarks are there to give you a
        quick help while your in the process of coding.  These inline
        docs should be the most up to date and will include an example
        of the process to invoke that specific code.

    Internal Syntax
        Every programmer has their quirks, and I'm full of them.  I am
        going to try to explain mine below and give some valid reason
        for them.

            Variable/BASIC code Names:  When writing a set of code, I
            found it easier to read and debug code that has a destinct
            difference between the variable / label names and the
            actual BASIC code itself.  The way I destinguish these are
            to capatilize the BASIC code and use lower case for
            variables and labels.

            EXAMPLE:  IF finam$="TEST.FIL" THEN reedit:ELSE finam$="A.FIL"

            Variable Naming:  I hate, I mean hate, long variable names!
            I always will try to come up with the shortest name that makes
            sense.  It cuts down on source code size, individual line size,
            and finger ache.  Also, I donot use the DEF function to define
            variables to be one type or another.  I use the ANSI standard
            set of characters to follow the variable name.

                EXAMPLES:
                    todte& - Long Integer - Today's Date
                    yn$ - String - Y or N
                    flip% - Integer - flip flag (1 or 0)
                    amt# - Long Real - amount field

            One other note, if possible I'll always use integer types
            as they are shorter and the math process is faster than
            with real numbers.

        Calling Procedures
            The calling procedures for each routine will vary but there
            are some similarities.  All FuNctions will have only one
            parameter to pass and will be able to handle everything that
            it does with just the one parameter.  SUBroutines will pass
            several and their parameters are explained in this document
            as well as in the inline code docs.  I have on other type
            that I have in my include library.  This type is for routines
            that I GOSUB to.  These routines generally use lots of
            variables and other dependencies and I found it easier and
            less headache to not make SUBs or FNs out of them.  These
            routines are destinquished by the fact there is not the SUB
            or FN indicator on the front.

            INClude files are defined in the $INCLUDE statement.  I will
            generally place them at the bottom of my code.  This
            keeps all that stuff out of the way and out of site.  But it
            doesn't matter where they go in Power Basic.  Unlike QB
            you donot have to define your FuNctions or SUBroutines at
            the top of your program.  A $INCLUDE is all you need to
            make them available for your program.

        Dependent INCludes
            Some procedures will require other INClude files to be
            in your code.  For example, the Pop Up Windows SUBroutine
            uses a table so 5 windows can be opened.  Since DIM
            statements can only be executed once, there is a DIMpopup
            INClude file that should be placed at the top of your
            code so it is not executed twice.  Also, some routines
            will use other routines (the whole purpose of these
            routines is not to duplicate code) and these dependent
            files will be noted in this documentation and the inline
            code of the routine itself.  These INClude files donot
            have $INCLUDE statements in them.  This is for two reasons,
            one to avoid duplicate code, and two so that if you decide
            not to use and specific routine, you don't delete the
            $INCLUDE that may be needed elsewhere.

PROGRAM EXAMPLE

    I have encluded a sample test program that will demonstrate hopefully
    all the routines shown here.  This programs are called
              KEYDEMO.BAS ---- Regular demo
              KEYCREAT.BAS --- BTrieve Create File Program
              KEYDEMO1.BAS --- Demo With BTrieve

    In order to test the BTrieve routines you must have made BTrieve
    memory resident with the following command:
           BTRIEVE /F:30 /P:1536 /M:48

    You also will need to run KEYCREAT.EXE first to create the test
    file that the KEYDEMO1.EXE program will write to.  You can see
    how the error codes work the fasted by executing KEYDEMO1 with
    out BTrieve loaded.

ROUTINE DOCUMENTATION

FNgetyn.INC

   Brief:  Used to get a Y or N key press after a Yes or No question.

   Prerequisites:  Code should display the query with out a line return.

       EXAMPLE:  PRINT "Do you want to continue";

   Usage:  yn$=FNgetyn$(" ")

   Display:  Will print a space folowed by - (Y/N):  _

       EXAMPLE:   Do you want to continue (Y/N):  _

   Return:  The function will return a variable contianing an uppercase
       Y or N.  Key pressed must be a Y or N, any case.  Choice will be
       printed at appropriate location after (Y/N):  Y.


FNanykey.INC

   Brief:  Very simple INKEY$ function.  Get's single character input
       of any type.  Uses Power BASIC's INSTAT function.

   Prerequisites:  None

   Usage:  ak$=FNanykey$(" ")

   Display:  None

   Return:  Actual value of pressed key is returned.  No other action
       is preformed.


FNjulan.INC

    Brief:  Calculates julian date from date given.

    Prerequisites:  Date variable must be in YYYYMMDD format.
        EXAMPLE:  dte&=19900405

    Usage:  jd&=FNjulan&(dte&)

    Display:  None

    Return:  Julian date is returned in YYYYJUL format.


FNmontyp.INC

    Brief:  Determines monitor type to be either Mono or Color.

    Prerequisites:  None

    Usage:  mt%=FNmontyp%(0)

    Display:  None

    Return:  Variable returned is 0 for mono or 1 for color.


FNoutpt.INC

    Brief:  Determines from user input, output direction for print
        routines is created.  This is a neat trick I use to have only
        only set of output statements but allows output to any of the
        three standard devices.  By opening and outputting to file #8
        we can set file #8 to be the printer, screen of an actual file.
        Only problem lies in usage of the width statement.  Can't use
        it on sequential disk files.

    Prerequisites:  File #8 cannot be used.  LOCATE command used for
        start of user prompt.  prnt$ variable must be set to the
        device of printer output.

        EXAMPLE:  prnt$="LPT1:"
                  LOCATE 2,10

    Usage:  SPF$=FNoutpt$(" ")

    Display:  Output to S)creen, P)rinter, or F)ile? (S/P/F):  _

        If File is selected user is prompted on next line for
        name of file to output to.  No validation is performed
        on the file name.

    Return:  Vairable returned contains an uppercase S, P or F.  File
        number 8 is opened for Output to the desired device.  Printer
        device opened is designated by prnt$ variable.

    Note:  The prnt$ variable is used so a configuration file can be
        used and multiple printers devices can be attached and used.
        make sure you either plug the correct device name or prompt
        the user for the printer port to send output to first.

FNpaswrd.INC

    Brief:  Uses INKEY$ function to get a password and displays dots
        instead of the letters being typed.  Uses Power Basic's INSTAT.

    Prerequisites:  Display prompt for password without line feed.

        EXAMPLE:  PRINT "Enter Password:  ";

    Usage:  pwrd$=FNpaswrd$(" ")

    Display:  As key is pressed, a period is displayed until ENTER is
        pressed.

    Return:  Variable returned is entered password.


SUBdrpop.INC

    Brief:  Draws a boxed window at the specified location saving
        the contents of the overwritten area.  Used to "Pop Up" a
        window on the current screen display or get info and then
        return the screen to previous state.

    Prerequisites:  DIMpopup.INC must be executed first.  Upper
        left corner position set, length and width set, window
        number set.

        EXAMPLE:  $INCLUDE "DIMpopup.INC"
                  lx%=10                'left corner line number
                  ly%=20                'left corner Column number
                  vwid%=10              'verticle distance
                  hwid%=25              'horizontal distance
                  m%=1                  'window number (m%=menu number)

    Usage:  CALL SUBdrpop

    Display:  Box is drawn starting at lx%,ly% and being vwid%,hwid%
        in size.  Area with in box is cleared and saved.

    Return:  No variables are returned just an open window to be used.


SUBclpop.INC

    Brief:  Clears windows previously created with SUBdrpop.INC.  This
        will erase by menu number, if you have to keep track of which
        window you want erased and in what order!

    Prerequisites.  Window must be drawn first, of course.  Window,
        menu, number must be given.

        EXAMPE:  m%=1

    Display:  As the appropriate window is erased the underlying
        screen data is restored.

    Return:  No varaible is returned execpt the previous screen data.


SUBpuldn.INC

    Brief:  Good routine to be used in conjuction with the pop-up
        windows.  Makes pull-down menu or highlight menu selection.

        EXAMPLE:  Use SUBdrpop to draw a window 6 line long. Then
            print 4 menu selections with-in window.  Call SUBpuldn
            to make a highlight bar that will move to each selection.

    Prerequisites:  This one requires a lot...the simplest is to
        print menu selections on screen, then use this to point and
        shoot.  You also need to load an array with a letter that
        can be pressed to make the highlight bar jump to the correct
        line.  Also a variable is used for the passing of the color
        to highlight with.  DIMpuldn.INC must be executed first as
        it contains the array needed for character selection.
        It's also a good idea to turn off the cursor when making the
        call and back on when you need it.

        EXAMPLE:  LOCATE 5,10:PRINT "Customer Data":lch$(1)="C"
                  LOCATE 6,10:PRINT "Reporting":lch$(2)="R"
                  LOCATE 7,10:PRINT "Graphs":lch$(3)="G"
                  LOCATE 8,10:PRINT "Exit System":lch$(4)="E"
                  sx%=5                    'Top line
                  sy%=10                   'left hand column
                  ls%=13                   'longest selection
                  ex%=8                    'last line
                  selm%=1                  'previous selection
                  hfc%=14                  'highlight foreground colors
                  LOCATE ,,0               'hide cursor

    Usage:        CALL SUBpuldn            'highlight selection
                  LOCATE ,,1               'show cursor
                  ON rx% GOSUB cdata, rept, graf, fini

    Display:  Will highlight the menu selections and activate the
        cursor keys to move it.  Up, Down, PGUP, PGDN, Home, and End
        keys are all active.  At end of selection, line will still
        be highlighted.

    Return:  The variable rx% will be returned with the selection
        number. ie, the top selection is number 1.


SUBurchc.INC

    Brief:  This is a holdover from the old days of numbered menus.
        Print a numbered menu on screen, LOCATE the prompt position
        on screen, calling this routine will print message for user,
        validate input and return a good selection.

    Prerequisites:  Like the SUBpuldn.INC this one requires a lot
        also.  Print the menu first, set the lowest and highest valid
        choice.

        EXAMPLE:  LOCATE 10,10:PRINT "1   Add Customer"
                  LOCATE 11,10:PRINT "2   Delete Customer"
                  LOCATE 12,10:PRINT "3   Edit Customer"
                  LOCATE 13,10:PRINT "4   Report Menu"
                  LOCATE 14,10:PRINT "0   Exit to System"
                  lc%=0:hc%=4                    'set low/high choices
                  LOCATE 16,14

    USAGE:  CALL SUBurchc
            ON yc% GOSUB fini, addc, delc, edtc, rptc

    DISPLAY:  At the last print position will display:
                 Your Choice? (#/*):  _
              After selection number pressed will be displayed.

    RETURN:  yc$ will contain the string of the number pressed
             yc% will contain the value of the number pressed


SUBperr.INC

    Brief:  Simple error trap for basic printer errors.  Pops up
        window wil "Printer error..." message, any key press will
        clear window and try print operation again.  Uses SUBdrpop
        and SUBclpop routines.

    Prerequisites:  Subroutine called by use of ON ERROR command.

    Usage:  Code
              :
            ON ERROR GOTO perr     'turns on printer error trap
            LPRINT....             'print commands
              :
            ON ERROR GOTO 0        'turns off error trapping

    Display: At locate 20,15 window will appear with error message
        in it.  Any key will erase the window.

    Return:  No variables returned.


SUBvaldt.INC

    Brief:  Validates a date variable to contain a good valid date.
        Will take three types of input:  mm-dd-yyyy, mm/dd/yyyy,
        and mmddyyyy.  If good date, date is returned as both
        yyyymmdd and julian in yyyyjjj as well as the day of the
        week.

    Prequisites:  The date variable and type of date must be set
        up.  The valid types are:  1)mm/dd/yyyy, 2)mm-dd-yyyy, and
        3)mmddyyyy.

        Example:  td%=1:dt$="03/04/1989"

        Usage:  CALL valdt                   'check date
                IF bd%=0 THEN PRINT rd&      'Have good date

        Display:  Display is not changed.

        Returned:  If date is invalid bd% (bad date) will contain a 1.
            If date is good..bd% will contain a 0...
                rd& will contain flipped date - yyyymmdd
                jd& will contain julian date - yyyyjjj
                day% will contain day of week (1-Monday...7-Sunday)

SUBvalti.INC

    Brief:  Validate a time variable to contain a good valid time.
        Time variable can be in 4 actual formats , HH:MM - regular,
        HH-MM - regular, HH:MM - military, and HH-MM - military.

    Prequisites:  The time variable and format type must be set up.
       The type is designated as tt% and is either 1 or 2 for regular
       time in HH:MM and HH-MM respectively.  To designate military,
       add 3 to tt%. ie:  tt%=4 (HH:MM - military)

       Example:  tt%=1:tm$="09:25"

    Usage:  CALL SUBvalti                      'validate time
            IF bt%=0 THEN PRINT rt$            'good time

    Display:  No change to the display is made.

    Returned:  If the time is invalid, bt% will be set to 1.
        If the time is valid,  bt% will be set to 0
          rt% will contain the time in HHMM regular format.
               (military time is not returned in rt%)

inpt.INC

    Brief:  This is my catch all input routine.  This routine is
        invoke as a better way to get specific input from the user.
        As each key is entered it is validated for the correct type
        and converted to upper case if desired.  Also will restrict
        input to a specific length.  This routine works will well
        with the Data Entry Screen routine, but can be used as a
        stand alone.  INSert, DELete, Backspace, ESCape, and cursor
        control are all active.

    Prerequisites:  The lenght, location and data type must be set
        up before GOSUBing this routine.

            iln%   - Line number to begin
            icn%   - Column number to begin
            ilen%  - Max Lenght of input
            ityp%  - type of input allowed

        Example:  LOCATE 10,10:Print "Enter name:  ";
                  iln%=10:icn%=22:ilen%=25:ityp%=1

        The type can be set as one of the following:
             1  - Alphanumeric (no case conversion)
             2  - Alphanumeric (Upper case conversion)
             3  - Numeric (right justified)
             4  - Numeric (2 decimel conversion)
            *10 - Page up/down active - used for changing the same
                       field in multiple records. (multiply ityp% by 10)

    Usage:  GOSUB inpt                 'get data
            IF irtn%=2 THEN RETURN     'ESC pressed

    Display:  As data is entered it will naturally appear on the
        screen.  If INSert is press cursor is changed to denote
        status of INSert or overwrite.

    Returned:  irt$ will contain data entered.  irtn% will return
        the last key type pressed which is one of the following:
             1  - ENTER
             2  - ESC
             3  - Down Arrow
             4  - Up Arrow
             5  - Left arrow (at start of field)
             6  - Right arrow (at end of data, or last character)
             7  - Tab
             8  - Shift Tab
             10 - F10
             11 - Page Up (if active)
             12 - Page Down (if active)


SUBdes.INC

    Brief:  'des' stands for Data Entry Screen.  This is a way to set
        up, very easily, screens for entering data, customer data
        information for example.  This routine works with the inpt.INC
        routine.  Allows setup of multiple input areas and the allows
        the users to move around them, making all changes desired, and
        then when satisfied with the data, pressing F10 will exit the
        routine and return control back to your code.

           NOTE:  To call this routine you must GOSUB des1.
                               Make sure the one is here/

    Prequisites:  A lot is required here.  You must draw out the screen
        that your users will be entering data in.  (Hint:  Put the
        statement "PRESS F10 WHEN COMPLETE OR ESC TO ABORT" somewhere
        on the screen.)  The file DIMdes.INC must be executed before
        as the data entry areas will uses the arrays set up in it.

        For each field you will need to create a line of code to place
        the appropriate information into the DES arrays to control the
        screen input.  The best way to explain is by example....

        This section builds the screen...
            $INCLUDE DIMdes.INC
            LOCATE 2,10:PRINT "Name:  "
            LOCATE 3,10:PRINT "Phone:  (   )   -"
            LOCATE 4,10:PRINT "Type:  "
            LOCATE 6,5:PRINT "Press F10 when complete or ESC to abort"

        This section loads the DES arrays
            RESTORE cusdta                            'reset DATA
	          maxdes% = 5                               'Number of fields
	          FOR dx% = 1 TO maxdes%                    'fill DES arrays
		          READ des%(dx%, 1), des%(dx%, 2), des%(dx%, 3), des%(dx%, 4),_
               des%(dx%, 5), des%(dx%, 6)
	          NEXT dx%

        This line has the data entry start at the first field...
	          desx% = 1

        This set of code has the data and the call for DES
            cusdta:
              DATA 2,16,25,3,5,2                      'Name
              DATA 3,18,3,3,1,5                       'area code
              DATA 3,22,3,3,1,5                       'phone prefix
              DATA 3,26,4,3,1,5                       'phone
	            DATA 4,16,5,2,2,1                       'type
 	            GOSUB des1                              'go DES
	            IF desr% = 2 THEN LOCATE ,,0:RETURN     'ESC pressed

        In each array "record" the following elements control the input
        routine to process the data entry screen.  The standard flow, ie.
        data entered then ENTER pressed, will be executed by stepping
        through the table.  If the up or down arrow is pressed then the
        element pointed to by the up/down arrow element will be
        executed.

            Element #1 - Line Position
                    #2 - Column Position
                    #3 - Length of Field
                    #4 - Type of Entry (1-Alpha 2-Upper 3-Numbers)
                      Next set is next field direction
                    #5 - Up arrow goes to this elelment
                    #6 - Down arrow goes to this element

    Display:  This routine will not change display other than showing
        the data as it is entered.

    Returned:  Each entry will be returned in an array call des$.
        The elements of this array will correspond with the way the
        data was set up in the array description.

        Example:  nam$=des$(1)
                  fon$=des$(2)+des$(3)+des$(4)
                  ftyp$=des$(5)


SUBbtrv.INC

    Brief: This SUBprocedure provides the interface between Spectra
        Publishing's PowerBASIC 2.x compiler and Novell's BTRIEVE file
        system on PCDOS/MSDOS machines.

    Prerequisites:  btpos$ must be set at 128 bytes and each file must
        have a seperate position variable.  The rest of the variables
        must be set according to the BTrieve manual.

    Usage:  CALL btrv(btop%, btstat%, btpos$, btfil$, btdlen%,_
                   btkeyb$, btkeyn%)

    Display:  No change is made to the display.

    Returned:  The variables affect are outlined in the BTrieve manual.

    Notes:  I've changed the variables used by the standard release of
        BTrieve to ones that made more sense to me and conserved some
        code room.  The following is a description of these fields:

          btop% is the BTRIEVE operation code for the desired function.
          btstat% is a BTRIEVE status code returned after the desired
             function is attempted.
          btpos$ is a 128-byte data area containing file control block
             (FCB) and position information which must not be changed by
             your program.
          btfil$ is a data buffer used to specify special information
             such as file specifications, key characteristics, etc.  Its
             structure will be defined by your program with a FIELD
             statement.
          btlen% is the length of the data buffer, DATABUFFER$.
          btkeyb$ is the key buffer.
          btkeyn% is the key number to be processed.

        Important note: The BTRV routine resets the currently-active
        PowerBASIC data segment to the default data segment (by executing
        a DEF SEG statement with no argument).  If you set a different
        segment with DEF SEG in your main program and then call BTRV, you
        will need to execute your DEF SEG statement again (after the
        call), if you wish to continue using your segment as PowerBASIC's
        data segment; otherwise, the default data segment will be active
        when BTRV returns to your main program.


btcs.INC

    Brief:  This is a GOSUB'ed routine that checks the contents of
        btstat% to be used after a BTRV CALL.  This routine will allow
        those errors of minor/warning nature but throw up an error
        window on the severe ones.

    Prerequisites:  A CALL needs to be made to BTrieve before the status
        of that call can be checked.

    USAGE:  GOSUB btcs

    Display:  If error is servere enough a window will pop up and show
        the operation, status, and key number of the call with the
        error.

    Return:  No variable is returned.

```
{% endraw %}

## KEYCREAT.BAS

{% raw %}
```bas
'Create BTRIEVE file for KEY DEMO

                        '******Master File*******
OPEN "NUL" AS #1 LEN = 185
FIELD #1, 185 AS btfil$
FIELD #1, 2 AS recl$, 2 AS pgsz$, 2 AS nkey$, 4 AS nused$, 2 AS fflag$,_
          2 AS rsvr$, 2 AS pral$, 2 AS k1pos$, 2 AS k1len$, 2 AS k1flag$,_
          4 AS n2used$, 1 AS k1typ$, 5 AS k1res$, 2 AS k2pos$, 2 AS k2len$,_
          2 AS k2flag$, 4 AS n3used$, 1 AS k2typ$, 5 AS k2res$,_
          137 AS filr$

LSET recl$=MKI$(48)               'record length = 48
LSET pgsz$=MKI$(1536)             'page size = 1536
LSET nkey$=MKI$(1)                'number of keys = 1
LSET nused$=MKI$(0)               'reserved
LSET fflag$=MKI$(0)               'file flags - normal
LSET rsvr$=MKI$(0)                'reserved
LSET pral$=MKI$(0)                'preallocate = no
LSET k1pos$=MKI$(1)               'start position key 1 = 1
LSET k1len$=MKI$(30)              'length of key 1 = 10
LSET k1flag$=MKI$(2)              'key 1 type - modifiable
LSET n2used$=MKI$(0)              'reserved
LSET k1typ$=MKI$(0)               'key 1 data type - string
LSET k1res$=MKI$(0)               'reserved

btop%=14                          'op code - create
btstat%=0                         'init stat to 0
btpos$=SPACE$(128)                'init position indicator
btdlen%=185                       'data buffer length
btkeyb$="CUSTOMER.MAS"            'key buffer = file name
btkeyn%=-1                        'abort if file exist
                                  'call btrieve
CALL btrv(btop%, btstat%, btpos$, btfil$, btdlen%, btkeyb$, btkeyn%)

GOSUB btcs                        'perform error routine
IF btstat%=59 THEN
  PRINT "CUSTOMER.MAS File already exist....operation aborted."
  ELSE
    PRINT "CUSTOMER.MAS file has been successfully created.
END IF
CLOSE
END

$INCLUDE "SUBbtrv.INC"
$INCLUDE "btcs.INC"
```
{% endraw %}

## KEYDEMO.BAS

{% raw %}
```bas
'  KEYDEMO - DEMO of Include files by Rusty KEY
'    Compiled using Power Basic 2.1
'    Written By Rusty Key / Key Systems

$INCLUDE "DIMpopup.INC"                          'pop up arrays
$INCLUDE "DIMpuldn.INC"                          'pull down arrays
$INCLUDE "DIMdes.INC"                            'data entry arrays

   '********Initialization**********
CLS
numf$="####,###,###.##"                          'display number format
GOTO begin

title:
  COLOR 2,0                                      'correct colors
	CLS                                            'clear
	COLOR 10, 0                                    'set high
	LOCATE 2, 35: PRINT "Key Systems"
	COLOR 2, 0                                     'set low
	LOCATE 3, 32: PRINT "Include File Demo"
	PRINT
	RETURN

  '***********Main system Loop - Menu ***********
begin:
	GOSUB title
	LOCATE 4, 37: PRINT "Main Menu"
	lx% = 9: ly% = 28: vwid% = 8:hwid% = 25:m%=1   'setup window
	CALL drpop: COLOR 10, 0                        'open window
	LOCATE 10, 30: PRINT "V";                      'show menu
	COLOR 2, 0: PRINT "alidate Date": lch$(1) = "V": COLOR 10, 0
	LOCATE 11, 30: PRINT "T";
	COLOR 2, 0: PRINT "ime ValiDate": lch$(2) = "T": COLOR 10, 0
	LOCATE 12, 30: PRINT "P";
	COLOR 2, 0: PRINT "assword Demo": lch$(3) = "P": COLOR 10, 0
	LOCATE 13, 30: PRINT "D";
	COLOR 2, 0: PRINT "ata Entry Screen": lch$(4) = "D":COLOR 10, 0
	LOCATE 14, 30:PRINT "R";
  COLOR 2, 0: PRINT "eport Routines": lch$(5) = "R": COLOR 10, 0
	LOCATE 15, 30: PRINT "E";
	COLOR 2, 0: PRINT "xit to DOS": lch$(6) = "E"
	selm% = 0

makesel:
		sx% = 10: sy%= 29:ls%=23:ex%=15:hfc%=14      'setup pull down
		CALL puldn
		px% = rx% - 9: selm% = 1                     'set px% to choice
		IF px% = 6 THEN GOSUB fini: GOTO makesel     'exit to DOS?
		ON px% GOSUB vdte, vtim, pwr, btt, rept      'do choice
    LOCATE ,,0                                   'turn off cursor
    IF px%<4 THEN makesel                        'select again
		GOTO begin                                   'redraw menu

							'***** DATE VALIDATE *****
vdte:
		LOCATE 17,10: Print "Enter Date as mm/dd/yyyy:  ";
		iln%=17:icn%=37:ityp%=1:ilen%=10             'set up for input
		GOSUB inpt                                   'get date
    IF irtn%=2 THEN clrarea                      'ESC pressed
    td%=1:dt$=irt$                               'set up date
    CALL valdt                                   'validate date
    IF bd%=1 THEN BEEP:GOTO vdte                 'bad date?
    LOCATE 18,10:PRINT "Very good...Date is entered Correctly!"
    DELAY .5
    GOTO clrarea

							'***** TIME VALIDATE *****
vtim:
		LOCATE 17,10: Print "Enter Time as HH:MM:          (Military)"
		iln%=17:icn%=31:ityp%=1:ilen%=5              'set up for input
		GOSUB inpt                                   'get date
    IF irtn%=2 THEN clrarea                      'ESC pressed
    tt%=1:tm$=irt$                               'set up time
    CALL valti                                   'validate time
    IF bt%=1 THEN BEEP:GOTO vtim                 'bad date?
    LOCATE 18,10:PRINT "Very good...Time is entered Correctly!"
    DELAY .5
    GOTO clrarea

							'***** PASSWORD ENTRY *****
pwr:
		LOCATE 17,10: Print "Enter Your Password:  ";
    px%=17:py%=32                                'set up password area
    pwrd$=FNpaswrd$(" ")                         'get password
    LOCATE 18,10: PRINT "Your Password is:  ";pwrd$
    DELAY .5
    GOTO clrarea

              '***** Common Clear *****
clrarea:
	LOCATE 17, 10                                  'locate at display area
	PRINT SPACE$(50);                              'now clear it
  LOCATE 18,10
  PRINT SPACE$(50);
  RETURN

              '***** DES Example *****
btt:
	GOSUB title                                    'display customer data
	LOCATE 5, 9: PRINT "Your Name:  "; comp$
	LOCATE 7, 14: PRINT "Daytime Phone:  ("; LEFT$(cfon$, 3);
  LOCATE 7, 34: PRINT ")"; MID$(cfon$, 4, 3);
  LOCATE 7, 38: PRINT "-"; RIGHT$(cfon$, 4)
  LOCATE 9, 25: PRINT "Reference Number:  ";
	LOCATE 11, 30: PRINT "Press F10 to Accept Data"
	LOCATE 12, 36: PRINT "ESC to Abort"
	RESTORE cfgdta                                 'reset DATA
	maxdes% = 5                                    'set up DES
	FOR dx% = 1 TO maxdes%
		READ des%(dx%, 1), des%(dx%, 2), des%(dx%, 3), des%(dx%, 4), des%(dx%, 5), des%(dx%, 6)
	NEXT dx%

cfgdta:
	DATA 5,21,30,1,12,2                            'your Name
	DATA 7,31,3,3,8,12                             'Area Code
	DATA 7,35,3,3,8,12                             'Prefix
	DATA 7,39,4,3,8,12                             'Phone
  DATA 9,44,8,3,9,1                              'refen number

  desx% = 1
	GOSUB des1                                     'go DES
	IF desr% = 2 THEN RETURN                       'ESC pressed
	chgcfg% = 1                                    'flip changed
	nam$ = des$(1)                                 'pull name
  fon$ = des$(2)+des$(3)+des$(4)                 'pull phone
  refn$=des$(5)                                  'pull reference
  refn%=VAL(refn$)                               'convert ref.
  DELAY .25
	RETURN                                         'we done!

              '***** Report Area *****
rept:
  GOSUB title
	LOCATE 5, 27: PRINT "Report Options Menu"      'draw menu
	PRINT : PRINT TAB(22); "Press         Description"
	PRINT : PRINT TAB(24); "1           Display Date as Julian"
  PRINT : PRINT TAB(24); "2           Print the test file"
	PRINT : PRINT TAB(24); "0           Return to Main Menu"

here:
	LOCATE 15, 28: lc% = 0: hc% = 2                'setup your choice
	CALL urchc
  IF yc% = 0 THEN RETURN                         'return?
	ON yc% GOSUB juld, prtfil, juld                'do choice
	LOCATE , , 0                                   'turn off cursor
	IF yc% = 1 THEN                                'need to clear?
    LOCATE 15,48:PRINT " "                         'no-Clear choice
    GOTO here                                      'get next choice
    ELSE
      GOTO rept                                      'yes-redisplay
  END IF

juld:
  lx%=7:ly%=30:vwid%=4:hwid%=25:m%=1             'set up window
  CALL drpop                                     'draw window
  LOCATE 8,32:PRINT "Regular:  ";DATE$           'display date
  dte&=VAL(RIGHT$(DATE$,4)+LEFT$(DATE$,2)+MID$(DATE$,4,2))
  LOCATE 9,32:PRINT "Julian:  ";FNjulan&(dte&)   'display julian
  ak$=FNanykey$(" ")                             'wait for key
  CALL clpop                                     'close window
  RETURN                                         'go back

prtfil:
  LOCATE 20,20:prnt$="LPT1:"                     'set print device
  spf$=FNoutpt$(" ")                             'select output
  OPEN "I",#1,"KEYDEMO.BAS"                      'get file to print
  ON ERROR GOTO perr                             'enable error trap
  WHILE NOT EOF(1)                               'loop through file
    LINE INPUT#1, a$                               'read a line
    PRINT #8, a$                                   'output a line
  WEND
  PRINT "File has been printed!"
  CLOSE #1                                       'close input file
  CLOSE #8                                       'close output file
  DELAY .5
  RETURN                                         'go back

fini:
		LOCATE 23, 35: PRINT "EXIT?";
		yn$ = FNgetyn$(" ")
		IF yn$ = "N" THEN LOCATE 23, 35: PRINT "               "; : RETURN
		CLS : LOCATE 11, 25
		PRINT "Another fine product from...."
		LOCATE 14, 31
		COLOR 10, 0
		PRINT "KEY SYSTEMS"
		COLOR 2, 0
		PRINT
		END

$INCLUDE "SUBdes.INC"                            'date entry screen
$INCLUDE "inpt.INC"                              'input routine
$INCLUDE "SUBdrpop.INC"                          'draw window
$INCLUDE "SUBclpop.INC"                          'clear window
$INCLUDE "SUBpuldn.INC"                          'pull down routine
$INCLUDE "FNanykey.INC"                          'get any key press
$INCLUDE "FNgetyn.INC"                           'get Yes or No
$INCLUDE "FNoutpt.INC"                           'get output type
$INCLUDE "FNpaswrd.INC"                          'get password
$INCLUDE "FNjulan.INC"                           'Julian Convert.
$INCLUDE "SUBurchc.INC"                          'numbered menu
$INCLUDE "SUBvaldt.INC"                          'date validation
$INCLUDE "SUBvalti.INC"                          'time validation
$INCLUDE "SUBperr.INC"                           'printer error
```
{% endraw %}

## KEYDEMO1.BAS

{% raw %}
```bas
'  KEYDEMO - DEMO of Include files by Rusty KEY
'    Compiled using Power Basic 2.1
'    Written By Rusty Key / Key Systems

$INCLUDE "DIMpopup.INC"                          'pop up arrays
$INCLUDE "DIMpuldn.INC"                          'pull down arrays
$INCLUDE "DIMdes.INC"                            'data entry arrays

   '********Initialization**********
CLS
numf$="####,###,###.##"                          'display number format
btpos$=SPACE$(128)                               'init position for BT
maspos$=btpos$                                   'init pos for master
btkeyb$=SPACE$(50)                               'init key buffer

  '*** This is the simplest BTrieve call to validate that
  '  BTrieve is actually loaded and resident.
btop%=26                                         'version request
CALL btrv(btop%, btstat%, btpos$, btfil$, btdlen%, btkeyb$, btkeyn%)
GOSUB btcs                                       'perform error routine
GOTO begin

title:
  COLOR 6,0                                      'correct colors
	CLS                                            'clear
	COLOR 10, 0                                    'set high
	LOCATE 2, 35: PRINT "Key Systems"
	COLOR 2, 0                                     'set low
	LOCATE 3, 32: PRINT "Include File Demo"
	PRINT
	RETURN

  '***********Main system Loop - Menu ***********
begin:
	GOSUB title
	LOCATE 4, 37: PRINT "Main Menu"
	lx% = 9: ly% = 28: vwid% = 8:hwid% = 25:m%=1   'setup window
	CALL drpop: COLOR 10, 0                        'open window
	LOCATE 10, 30: PRINT "D";                      'show menu
	COLOR 2, 0: PRINT "ate Validate": lch$(1) = "D": COLOR 10, 0
	LOCATE 11, 30: PRINT "T";
	COLOR 2, 0: PRINT "ime ValiDate": lch$(2) = "T": COLOR 10, 0
	LOCATE 12, 30: PRINT "P";
	COLOR 2, 0: PRINT "assword Demo": lch$(3) = "P": COLOR 10, 0
	LOCATE 13, 30: PRINT "B";
	COLOR 2, 0: PRINT "Trieve Test": lch$(4) = "B":COLOR 10, 0
	LOCATE 14, 30:PRINT "R";
  COLOR 2, 0: PRINT "eport Routines": lch$(5) = "R": COLOR 10, 0
	LOCATE 15, 30: PRINT "E";
	COLOR 2, 0: PRINT "xit to DOS": lch$(6) = "E"
	selm% = 0

makesel:
		sx% = 10: sy%= 29:ls%=23:ex%=15:hfc%=14      'setup pull down
		CALL puldn
		px% = rx% - 9: selm% = 1                     'set px% to choice
		IF px% = 6 THEN GOSUB fini: GOTO makesel     'exit to DOS?
		ON px% GOSUB vdte, vtim, pwr, btt, rept      'do choice
    LOCATE ,,0                                   'turn off cursor
    IF px%<4 THEN makesel                        'select again
		GOTO begin                                   'redraw menu

							'***** DATE VALIDATE *****
vdte:
		LOCATE 17,10: Print "Enter Date as mm/dd/yyyy:  ";
		iln%=17:icn%=37:ityp%=1:ilen%=10             'set up for input
		GOSUB inpt                                   'get date
    IF irtn%=2 THEN clrarea                      'ESC pressed
    td%=1:dt$=irt$                               'set up date
    CALL valdt                                   'validate date
    IF bd%=1 THEN BEEP:GOTO vdte                 'bad date?
    LOCATE 18,10:PRINT "Very good...Date is entered Correctly!"
    DELAY .5
    GOTO clrarea

							'***** TIME VALIDATE *****
vtim:
		LOCATE 17,10: Print "Enter Time as HH:MM:          (Military)"
		iln%=17:icn%=31:ityp%=1:ilen%=5              'set up for input
		GOSUB inpt                                   'get date
    IF irtn%=2 THEN clrarea                      'ESC pressed
    tt%=1:tm$=irt$                               'set up time
    CALL valti                                   'validate time
    IF bt%=1 THEN BEEP:GOTO vtim                 'bad date?
    LOCATE 18,10:PRINT "Very good...Time is entered Correctly!"
    DELAY .5
    GOTO clrarea

							'***** PASSWORD ENTRY *****
pwr:
		LOCATE 17,10: Print "Enter Your Password:  ";
    px%=17:py%=32                                'set up password area
    pwrd$=FNpaswrd$(" ")                         'get password
    LOCATE 18,10: PRINT "Your Password is:  ";pwrd$
    DELAY .5
    GOTO clrarea

              '***** Common Clear *****
clrarea:
	LOCATE 17, 10                                  'locate at display area
	PRINT SPACE$(50);                              'now clear it
  LOCATE 18,10
  PRINT SPACE$(50);
  RETURN

              '***** Btrieve & DES Example *****
btt:
	GOSUB title                                    'display customer data
	LOCATE 5, 9: PRINT "Your Name:  "; comp$
	LOCATE 7, 14: PRINT "Daytime Phone:  ("; LEFT$(cfon$, 3);
  LOCATE 7, 34: PRINT ")"; MID$(cfon$, 4, 3);
  LOCATE 7, 38: PRINT "-"; RIGHT$(cfon$, 4)
  LOCATE 9, 25: PRINT "Reference Number:  ";
	LOCATE 11, 30: PRINT "Press F10 to Accept Data"
	LOCATE 12, 36: PRINT "ESC to Abort"
	RESTORE cfgdta                                 'reset DATA
	maxdes% = 5                                    'set up DES
	FOR dx% = 1 TO maxdes%
		READ des%(dx%, 1), des%(dx%, 2), des%(dx%, 3), des%(dx%, 4), des%(dx%, 5), des%(dx%, 6)
	NEXT dx%

cfgdta:
	DATA 5,21,30,1,12,2                            'your Name
	DATA 7,31,3,3,8,12                             'Area Code
	DATA 7,35,3,3,8,12                             'Prefix
	DATA 7,39,4,3,8,12                             'Phone
  DATA 9,44,8,3,9,1                              'refen number

  desx% = 1
	GOSUB des1                                     'go DES
	IF desr% = 2 THEN RETURN                       'ESC pressed
	chgcfg% = 1                                    'flip changed
	nam$ = des$(1)                                 'pull name
  fon$ = des$(2)+des$(3)+des$(4)                 'pull phone
  refn$=des$(5)                                  'pull reference
  refn%=VAL(refn$)                               'convert ref.
  OPEN "NUL" AS #1 LEN = 185                     'open BASIC file
  FIELD #1, 48 AS btfil1$                        'define btrieve record
  FIELD #1, 30 AS rn$, 10 AS rp$, 8 AS rr$       'define BASIC record

  btop%=0                                        'op code - OPEN
  btstat%=0                                      'init stat to 0
  btdlen%=185                                    'set data buffer length
  btkeyb$="CUSTOMER.MAS"+SPACE$(42)              'key buffer
  btpos$=maspos$
                 'call btrieve
  CALL btrv(btop%, btstat%, btpos$, btfil1$, btdlen%, btkeyb$, btkeyn%)

  GOSUB btcs                                     'perform error routine
  maspos$=btpos$                                 'save position
  LSET rn$=nam$                                  'move data to recrds
  LSET rp$=fon$                                  '   same
  RSET rr$=refn$                                 '   ditto
  btop%=2                                        'set to insert
  btkeyb$=SPACE$(30)                             'define key area
  btstat%=0                                      'reset status
  btdlen%=48                                     'set data buffer length
  btkeyn%=0                                      'set key number
  btpos$=maspos$                                 'move position indicator
  CALL btrv(btop%, btstat%, btpos$, btfil1$, btdlen%, btkeyb$, btkeyn%)
  GOSUB btcs                                     'perform error routine
     '  You may want to put in error checking for
     '  low status message...ie. duplicate keys, ect.

  maspos$=btpos$                                 'save position
  btop%=1                                        'set to close
  btpos$=maspos$                                 'move position
  CALL btrv(btop%, btstat%, btpos$, btfil1$, btdlen%, btkeyb$, btkeyn%)
  GOSUB btcs                                     'check status
  CLOSE #1                                       'close BASIC file
	RETURN                                         'we done!

              '***** Report Area *****
rept:
  GOSUB title
	LOCATE 5, 27: PRINT "Report Options Menu"      'draw menu
	PRINT : PRINT TAB(22); "Press         Description"
	PRINT : PRINT TAB(24); "1           Display Date as Julian"
  PRINT : PRINT TAB(24); "2           Print the test file"
	PRINT : PRINT TAB(24); "0           Return to Main Menu"

here:
	LOCATE 15, 28: lc% = 0: hc% = 2                'setup your choice
	CALL urchc
  IF yc% = 0 THEN RETURN                         'return?
	ON yc% GOSUB juld, prtfil, juld                'do choice
	LOCATE , , 0                                   'turn off cursor
	IF yc% = 1 THEN                                'need to clear?
    LOCATE 15,48:PRINT " "                         'no-Clear choice
    GOTO here                                      'get next choice
    ELSE
      GOTO rept                                      'yes-redisplay
  END IF

juld:
  lx%=7:ly%=30:vwid%=4:hwid%=25:m%=1             'set up window
  CALL drpop                                     'draw window
  LOCATE 8,32:PRINT "Regular:  ";DATE$           'display date
  dte&=VAL(RIGHT$(DATE$,4)+LEFT$(DATE$,2)+MID$(DATE$,4,2))
  LOCATE 9,32:PRINT "Julian:  ";FNjulan&(dte&)   'display julian
  ak$=FNanykey$(" ")                             'wait for key
  CALL clpop                                     'close window
  RETURN                                         'go back

prtfil:
  LOCATE 20,20:prnt$="LPT1:"                     'set print device
  spf$=FNoutpt$(" ")                             'select output
  OPEN "I",#1,"KEYDEMO.BAS"                      'get file to print
  ON ERROR GOTO perr                             'enable error trap
  WHILE NOT EOF(1)                               'loop through file
    LINE INPUT#1, a$                               'read a line
    PRINT #8, a$                                   'output a line
  WEND
  PRINT "File has been printed!"
  CLOSE #1                                       'close input file
  CLOSE #8                                       'close output file
  DELAY .5
  RETURN                                         'go back

fini:
		LOCATE 23, 35: PRINT "EXIT?";
		yn$ = FNgetyn$(" ")
		IF yn$ = "N" THEN LOCATE 23, 35: PRINT "               "; : RETURN
		CLS : LOCATE 11, 25
		PRINT "Another fine product from...."
		LOCATE 14, 31
		COLOR 10, 0
		PRINT "KEY SYSTEMS"
		COLOR 2, 0
		PRINT
		END

$INCLUDE "SUBdes.INC"                            'date entry screen
$INCLUDE "inpt.INC"                              'input routine
$INCLUDE "SUBdrpop.INC"                          'draw window
$INCLUDE "SUBclpop.INC"                          'clear window
$INCLUDE "SUBpuldn.INC"                          'pull down routine
$INCLUDE "FNanykey.INC"                          'get any key press
$INCLUDE "FNgetyn.INC"                           'get Yes or No
$INCLUDE "FNoutpt.INC"                           'get output type
$INCLUDE "FNpaswrd.INC"                          'get password
$INCLUDE "FNjulan.INC"                           'Julian Convert.
$INCLUDE "SUBurchc.INC"                          'numbered menu
$INCLUDE "SUBbtrv.INC"                           'BTRIEVE call
$INCLUDE "btcs.INC"                              'BTRIEVE status check
$INCLUDE "SUBvaldt.INC"                          'date validation
$INCLUDE "SUBvalti.INC"                          'time validation
$INCLUDE "SUBperr.INC"                           'printer error
```
{% endraw %}

## QB-TO-TB.ASM

{% raw %}
```

; Here you will find the original code used for an assembly
; language routine used for MicroSoft QuickBasic.  Below, we
; have written the code the performs the same function for
; the TURBO BASIC procedure GETBLANK (found elsewhere in the
; file QB-TO-TB.BAS).  We have provided both versions of this
; code so that users who are porting their QuickBasic programs
; over to TURBO BASIC may see the differences in the two methods
; side by side, and quickly see what must be altered.
;


;                    This is the assembly routine for QuickBasic:

;FRAME     STRUC
;          DW        ?
;          DD        ?
;LAST_CHAR DW        ?
;STRING    DW        ?
;FRAME     ENDS
;
;CGROUP    GROUP     FINDBL
;FINDBL    SEGMENT   PARA PUBLIC 'CODE'
;          ASSUME    CS:CGROUP
;
;START     PROC      FAR
;          PUBLIC    TRAILINGBLANKS
;TRAILINGBLANKS:
;          NOP
;          PUSH      BP
;          MOV       BP,SP
;          MOV       SI,[BP+STRING]
;          MOV       CH,0
;          MOV       CX,DS:[SI]
;          MOV       SI,DS:[SI+2]
;          ADD       SI,CX
;          DEC       SI
;
;LOOP_1:   MOV       AL,DS:[SI]
;          CMP       AL,020H
;          JNE       NOT_A_BLANK
;          DEC       SI
;          DEC       CX
;          JNZ       LOOP_1
;
;NOT_A_BLANK:
;          MOV       SI,[BP+LAST_CHAR]
;          MOV       DS:[SI],CX
;          POP       BP
;          RET       4
;
;START     ENDP
;FINDBL    ENDS
;          END


;   Here is the routine that performs the same function for
;   TURBO BASIC.  Please note that you should read Appendix C
;   of the Turbo Basic Reference Manual to understand what we
;   are really doing here.


program segment    ; begin program segment
  assume cs:program

  push  bp         ; save bp
  mov   bp, sp
  push  es         ; save es because we'll use it for pointer manipulation
  push  ds         ; ditto

  les   di, [bp + 6h]    ; load pointer to string descriptor into es:di
  mov   dx, ds:[0]   ; get the beginning of the string segment from ds:[0]
  push  dx
  pop   ds           ; make ds point to string segment
  mov   si, es:[di + 2] ; get offset into string segment from es:[di + 2]

  mov   cx,es:[di] ;load the length of the string into cx
  and   cx, 7fffh  ;mask off the high bit of the length byte
  add   si, cx     ;add the length to the beginning address
  dec   si         ;subtract one from the length to adjust it


LOOP_1:
  mov   al,ds:[si]   ;move the string character into al
  cmp   al,020h      ;compare it to a blank
  jne   NOT_A_BLANK  ;if equal to a blank, jump out of loop
  dec   si           ;decrement the string index
  dec   cx           ;decrement the count of the length
  jnz   loop_1       ;skip out of the loop if the position is zero
;
NOT_A_BLANK:
  lds   di, [bp+0ah] ;get the address of the integer to return
                     ;the result in
  mov   ds:[di], cx  ;move the result into the integer
  pop   ds           ;pop and restore all the registers
  pop   es
  pop   bp

program ends         ; end program segment

end
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2861

     Volume in drive A has no label
     Directory of A:\

    PB-FMT   EXE     85616   8-21-91  10:52a
    ASSEMBLY ZIP      8704   5-15-91   7:30a
    KEYINCL2 ZIP    147456  11-05-90   4:32a
    QB2TB    ZIP      3456   7-26-91   4:32p
    TBC2PB   ZIP      4297   8-14-91   7:41a
    FILE2861 TXT      1481  10-23-91   3:12p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT       860  10-23-91   3:09p
            8 file(s)     251908 bytes
                           66560 bytes free
