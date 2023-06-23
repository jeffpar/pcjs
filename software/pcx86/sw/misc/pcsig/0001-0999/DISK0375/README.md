---
layout: page
title: "PC-SIG Diskette Library (Disk #375)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0375/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0375"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO PASCAL SET #7"

    Collection of programs and utilities useful for both the Pascal
    Programmer and the casual Pascal user.  Routines include floating point
    accuracy testing, sorted directory printing, file dumping in hex and
    ASCII, file allocation table information, and a routine to read the
    internal clock.
    
    System Requirements:  Turbo Pascal
    
    How to Start: To read DOC files simply enter TYPE filename.ext and
    press <ENTER>.  For instructions on PAS listings, refer to your Pascal
    language manual.
    
    File Descriptions:
    
    BENCHMRK PAS  Program to test the accuracy of floating point functions.
    PASCAPS  PAS  Converts identifiers in a source code file to upper case
    MEMDISP  PAS  Displays the contents of memory onto the IBM PC screen
    MEM      INC  Part of TEST.PAS
    LINE     INV  Used by FRACTAL.PAS
    INFO     BAT  Information on producing book indexes
    INDEX    BAT  Formats an book index from your data
    HEXDUMP  PAS  Dump the specified file in hex and ascii
    HEAPTEST PAS  This program demonstrates a bug in Turbo's version 2
    HAL-PC   DOC  Information on HAL-PC library disk
    GETSEC   OBJ  Assembled version of GETSEC.ASM
    GETSEC   ASM  Assembly source code for direct disk access
    GETFREE  INC  Part of PRINTDIR.PAS, READFAT.PAS
    GETDIR   PAS  Get the directory by using DOS function calls
    GETDATE  INC  Part of PRINT2.PAS, PRINTDIR.PAS, READFAT.PAS
    FREE     INC  Part of TEST.PAS
    FRACTAL  PAS  Produces fractal images on the hi-res graphics screen
    FLOAT    PAS  Test range of floating point numbers
    FASTPRNT INV  Used by FRACTAL.PAS
    EQUIP    INC  Performs Bios interrupt hex 11 the equipment check
    ENTER    BAT  Enter index entries for book indexing
    DUMPHEX  INC  Part of READFAT.PAS
    DTA      INC  Part of PRINT2.PAS
    DOWN     PAS  Looks like some kind of BASIC to Pascal file conversi on?
    DOT      PAS  Program to test the speed of Bios interupt to perform
    DECBIN   INC  Part of TESTDB.PAS
    DATE     INC  Part of TEST.PAS
    COVER    DOC  Documentation for COVER.COM
    COVER    COM  Utility to print a sorted directory for a disk cover
    COMBINE  BAT  Sort/Merge book index file
    CLS      INV  Used by FRACTAL.PAS
    CHECKPSP INC  Part of PRINT2.PAS
    BIOSREAD INC  Part of PRINTDIR.PAS, READFAT.PAS
    TURBO-UT PAS  Utilities to handle data input, validation of data
    POINTERS PAS  Demo on how to use pointers & dynamic memory (Heap Space)
    POINT    INV  Used by FRACTAL.PAS
    TSIN     PAS  Test range of sin function
    TIMESTMP PAS  Reads the internal clock returning a string of the form
    PRINTDIR PAS  Print a sorted directory listing
    PRINT2   PAS  Program to print an ASCII file in a nice way
    TIME     INC  Part of TEST.PAS
    TESTDB   PAS  Test of utility funtions
    TEST     PAS  Test of utility funtions
    STRPRNT  PAS  Program for testing of Dos 2.0 print string function
    START    BAT  Begins book indexing
    READFAT  PAS  Read the File Allocation Table information
    SIDEWYTR PAS  Print the `infile' sideways on an EPSON MX-80 Printer
    READPSP1 INC  Read Program Segment Prefix information
    UT-MOD?? INC  Part of TURBO-UT.PAS (6 files)
    TSTSOUND COM  Part of TURBO-UT.PAS
    TURBO-UT DOC  Documentation for TURBO-UT.PAS
    TURBO-UT DEM  Demo file for TURBO-UT.PAS
    TURBO-UT COM  Compiled version of TURBO-UT.PAS
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COVER.DOC

{% raw %}
```

       COVER is a utility to print a sorted directory listing in such a
    format as to allow the listing to be cut and inserted into the sleeve
    with the diskette.	It was written by Dan Daetwyler of Arkansas and
    first published (and placed in the public domain) in the January 1984
    issue of "Dr.  Dobb's Journal".  Anyone interested in the details is
    referred to that issue.

       To run, insert diskette with the program in the default drive and
    type COVER.  The program will prompt you for the ID of the drive that
    contains the diskette to be listed.  Type the appropriate letter
    (either case) ONLY -- no colon or RETURN.  The program will then ask
    for a title to appear on the listing.  The title may be up to
    forty-four characters; if you do not want a title, simple press ENTER.
    This process continues until ESC is entered at the drive ID prompt.
    The program prints two envelope covers per page; if exited via ESC, it
    will advance the paper to Top-of-Form and restore the printer to its
    power up defaults.

       The program issues Epson printer control codes for selecting
    compressed print, 1/8 inch line spacing, and 44 lines to the logical
    'page'.  Those with IBM/Epson printers should be able to use COVER as
    is.  Those with a printer that uses different control codes with have
    to 'patch' the program (using DEBUG or some other such program).  The
    sequence to initialize the printer begins at location 13C; the Epson
    sequence is six bytes long (1B 30 1B 43 2C 0F) but it is padded with
    zeros so that there is room for eleven codes altogether.  The string
    MUST terminate with a zero for the DOS call to work correctly.  The
    printer restore sequence is two bytes long (1B 40) and begins at
    location 148; again, it is padded with five extra zeros for patching
    room.  If this is insufficient for setting up your printer, you might
    try zeroing these sequences out and setting up your printer outside the
    COVER program.

       NOTE:  Cover issues ONLY the DOS call interupt.	This should insure
    that it can run on any MS-DOS machine not just the IBM compatibles.  It
    has been successfully run on a TI Professional Computer with no
    modification whatsoever.


```
{% endraw %}

## FILES375.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 375   Turbo Pascal Utilities                            V1 DS
------------------------------------------------------------------------
Collection of programs and utilities useful for both the user and Pascal
programmers.
 
BENCHMRK PAS  Program to test the accuracy of floating point functions.
BIOSREAD INC  Part of PRINTDIR.PAS, READFAT.PAS
CHECKPSP INC  Part of PRINT2.PAS
CLS      INV  Used by FRACTAL.PAS
COMBINE  BAT  Sort/Merge book index file.
COVER    COM  Utility to print a sorted directory so that it may be cut
               and inserted into the diskette sleeve.
COVER    DOC  Documentation for COVER.COM
DATE     INC  Part of TEST.PAS
DECBIN   INC  Part of TESTDB.PAS
DOT      PAS  Program to test the speed of Bios interupt to perform
               character I/O
DOWN     PAS  Looks like some kind of BASIC to Pascal file conversion?
DTA      INC  Part of PRINT2.PAS
DUMPHEX  INC  Part of READFAT.PAS
ENTER    BAT  Enter index entries for book indexing.
EQUIP    INC  Performs Bios interrupt hex 11 the equipment check.
FASTPRNT INV  Used by FRACTAL.PAS.
FLOAT    PAS  Test range of floating point numbers.
FRACTAL  PAS  Produces fractal images on the hi-res graphics screen.
FREE     INC  Part of TEST.PAS
GETDATE  INC  Part of PRINT2.PAS, PRINTDIR.PAS, READFAT.PAS
GETDIR   PAS  Get the directory by using DOS function calls.
GETFREE  INC  Part of PRINTDIR.PAS, READFAT.PAS
GETSEC   ASM  Assembly source code for direct disk access.
GETSEC   OBJ  Assembled version of GETSEC.ASM.
HAL-PC   DOC  Information on HAL-PC library disk.
HEAPTEST PAS  This program demonstrates a bug in Turbo's version 2.
HEXDUMP  PAS  Dump the specified file in hex and ascii.
INDEX    BAT  Formats an book index from your data.
INFO     BAT  Information on producing book indexes.
LINE     INV  Used by FRACTAL.PAS.
MEM      INC  Part of TEST.PAS
MEMDISP  PAS  Displays the contents of memory onto the IBM PC's screen.
PASCAPS  PAS  Converts identifiers in a source code file to upper case.
POINT    INV  Used by FRACTAL.PAS.
POINTERS PAS  Demo on how to use pointers and dynamic memory (Heap Space)
PRINT2   PAS  Program to print an ASCII file in a nice way on the printer.
PRINTDIR PAS  Print a sorted directory listing.
READFAT  PAS  Read the File Allocation Table information.
READPSP1 INC  Read Program Segment Prefix information.
SIDEWYTR PAS  Print the `infile' sideways on an EPSON MX-80 Printer.
START    BAT  Begins book indexing.
STRPRNT  PAS  Program for testing of Dos 2.0 print string function.
TEST     PAS  Test of utility funtions.
TESTDB   PAS  Test of utility funtions.
TIME     INC  Part of TEST.PAS
TIMESTMP PAS  Reads the internal clock returning a string of the form
               "July 5, 1984 9:30am"
TSIN     PAS  Test range of sin function.
TURBO-UT PAS  Utilities to handle data input, validation of data, full
               screen editing, and the other chores of everyday use.
TURBO-UT COM  Compiled version of TURBO-UT.PAS
TURBO-UT DEM  Demo file for TURBO-UT.PAS
TURBO-UT DOC  Documentation for TURBO-UT.PAS
TSTSOUND COM  Part of TURBO-UT.PAS
UT-MOD00 INC  Part of TURBO-UT.PAS
UT-MOD01 INC  Part of TURBO-UT.PAS
UT-MOD02 INC  Part of TURBO-UT.PAS
UT-MOD03 INC  Part of TURBO-UT.PAS
UT-MOD04 INC  Part of TURBO-UT.PAS
UT-MOD90 INC  Part of TURBO-UT.PAS
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## GETSEC.ASM

{% raw %}
```
PAGE 50,132
TITLE GETSEC5   -PASCAL FUNCTION TO GET DISK SECTORS
;GETSEC --  Pascal Function to get sectors from disk using DOS's INT 25H.
;                       Interfaces to IBM PC Pascal v1.00 Compiler (Microsoft).
;                       see DOS Manual, page D-25; and Tech Ref Manual, page A-32.
;***********  (c) Copyright 1982 by Walter H. Rauser   5-16-82   ***********
;{sample of Pascal declarations to use GETSEC}
;function GETSEC(drive  :integer;       {A is 0, B is 1, C is 2, D is 3}
;                                first  :integer;       {first sector # in 0-origin}
;                                numof  :integer;       {number of sectors to get}
;                        var buffer :dirtype;   {buffer to hold all fetched sectors}
;                        var errorc :integer    {DOS error code}
;                                          ):boolean; EXTERN;
;{sample of buffer type for directory sectors, DOS 1.10}
;type dirtype = array[1..112] of record         {112 for DS Drives, 64 for SS}
;                                       name    [0]:string(8);
;                                       ext             [8]:string(3);
;                                       attr   [11]:byte;
;                                       resvd  [12]:array[1..10] of byte;
;                                       time   [22]:word;
;                                       date   [24]:word;
;                                cluster1  [26]:word;
;                                sizelow   [28]:word;
;                                sizehigh  [30]:word;
;                               end;
; frame contents for call from Pascal
; offset len  variable     attributes
; [BP]+14  2  drive                     int value parameter
; [BP]+12  2  firstsector       int value parameter
; [BP]+10  2  numofsectors      int value param
; [BP]+ 8  2  buffer                    var param
; [BP]+ 6  2  errorcode         int var param
; [BP]+ 4  2  CS:               return address long call
; [BP]+ 2  2  offset    return address
; [BP]+ 0  2  old frame pointer storage
;
;
MYSEG   SEGMENT PARA    PUBLIC  'CODE'
                ASSUME CS:MYSEG
                PUBLIC GETSEC
;
GETSEC  PROC    FAR
                PUSH    BP                              ;save old frame pointer
                MOV             BP,SP                   ;set new frame pointer
                MOV             AX,[BP].14              ;put drive num into AL
                XOR             AH,AH
                MOV             CX,[BP].10              ;num of sectors to fetch
                MOV             DX,[BP]+12              ;logical record # of first sec, 0-orgin
                PUSH    DS                              ;restore before ret
                PUSH    SS                              ;buffer is in stack segment
                POP             DS                              ;DS: of buffer (transfer address)
;
                MOV             BX,[BP]+8               ;offset of buffer
                INT             25H                             ;absolute disk read, DOS function.
                JC              ERROR                   ;error if carry flag set
                MOV             AL,01H                  ; okay, set AL to return GETSEC=true
                JMP             DONE
;
ERROR:  MOV             BP,[BP].6               ;adr of errorc
                MOV     [BP],AX                 ;dos error code
                MOV             AL,00H                  ; error, set AL to return GETSEC=false
;
DONE:   XOR             AH,AH
                POPF                                    ;int 25H left Flags on stack
                POP             DS                              ;restore DS
                POP             BP                              ;restore frame pointer
                RET             10                              ;clear parameters from stack
GETSEC  ENDP
MYSEG   ENDS
                END
```
{% endraw %}

## HAL-PC.DOC

{% raw %}
```

                     H A L - P C   L I B R A R Y
                     ---------------------------
                           FEB 23, 1985


              PASCAL LIBRARY DISK UPDATE INFORMATION



========================================================================
                       T U R B O U T L

                  (Formally: TURBO Utilities)
========================================================================


 The HAL-PC Library Disk "TURBO Utilities" has been slightly modified.
 All changes to the disk are available from disk "PASUPD #1".


 All the Pascal programs on this disk have compiled successfully with
 TURBO PASCAL V2.00 on an AT&T 6300.

 The following files have been deleted:

    1) BUILD.PAS     - IBM Pascal and already on IBMPAS#1
    2) GOMOKU*.*     - Does not work in IBM or TURBO Land!
    3) INPUT.PAS     - IBM Pascal and does not Work
    4) MERGE.PAS     - IBM Pascal, works and has been
                       transfered to IBMPAS#1
    5) Q*SORT.PAS    - Compiled, but did not seem to work?
    6) SIDEWAYS.PAS  - IBM Pascal, works and has been
                       transfered to IBMPAS#1
    7) SORT.PAS      - IBM Pascal and does not work
    8) TERM.*        - Assembly/TURBO and does not work
    9) XREF.PAS      - IBM Pascal and does not work
   10) COVER.DOC     - Available with COVER.COM on DOS &
                       File Utilities Disk from HAL-PC Library

 The following files have been added:

    1) POINTER.PAS   - A Demo on how to use pointers and
                       dynamic memory (Heap Space)
    2) HAL-PC.DOC    - This Document


========================================================================
                   L I B R A R I A N   N O T E
========================================================================

 If you encounter problems with any PASCAL LANGUAGE Disk please
 let me know!

                        Chuck Thornton
                  Pascal Language Librarian
                     467 - 1651 (evenings)

                       P.O. Box 55085
                      Houston, Tx 77255
```
{% endraw %}

## TURBO-UT.DOC

{% raw %}
```















                              User-Supported Software


                                   TURBO-UT.PAS

                               A Programmer's Utility


                                        by
                                 Donald R. Ramsey
                                   Larry Romero

                               727 Bunker Hill #70
                              Houston, Texas  77024

                                   Version 1.0





                                 Table of Contents


          Introduction .....................................  1
          System Requirements ..............................  1
          Files Required on Disk ...........................  1

          Documentation Form ...............................  2

          Procedures
             Msg ...........................................  2
             Center ........................................  2
             InvVideo ......................................  2
             Color .........................................  2
             Box ...........................................  2

             Option ........................................  3
             StripSpaces ...................................  3
             ClrWnd ........................................  3
             SaveScreen ....................................  3
             FlashScreen ...................................  3
             Beep ..........................................  3
             Say_Cap_Num ...................................  3

             Set_Cap_Num ...................................  4
             Ck_Edit_Key ...................................  4
             Get_Template ..................................  4

             Input .........................................  5

             Prompt ........................................  6
             Say_Prompt ....................................  6
             Get_Default ...................................  6
             Do_Validation .................................  6

             Input_Handler .................................  7

             Hmenu .........................................  9
             MainMenu ......................................  9

          Functions
             Fmt_Real ......................................  10
             UpcaseStr .....................................  10
             ConstStr ......................................  10

          User-Supported Concept ...........................  11

          Future Enhancements & Update Policy ..............  12

          Appendix

          Invoice Form






                                   TURBO-UT.PAS
                              A Programmer's Utility

      INTRODUCTION:

           When I started to write programs using Turbo Pascal, I realized
      the potential of this language. However, as I quickly decided, I
      needed a set of utilities to handle the requirements of data input,
      validation of data, full screen editing, and the other chores of
      everyday use. This utility is designed to handle many of these
      functions.

           As I am new to the Pascal language, the utilities may not be
      written in the best form, but they do work. You may use these
      procedures as a guide to develop your own routines or, of course,
      they may be used as they are. Please let me know if the routines
      work well for you or if they need to be changed.

           Probably the best way to learn to use the subroutines is to
      to read the explanations given in this document, then study the
      SHELL.DEM program provided on the disk.

		The Appendix provides a quick reference to all the procedures
	and functions. It is a list of the routines with a description of
	the calling parameters.

		I hope this program makes Your programming easier.
		
		                                          Don & Larry


	SYSTEM REQUIREMENTS:

		IBM-PC or true compatible
		64K RAM
		1 Disk Drive
		Turbo Pascal 2.0

	FILES REQUIRED ON DISK:

		Turbo-ut.dem
		Turbo-ut.pas
		Turbo-ut.doc
		Ut-Mod00.inc
		Ut-Mod01.inc
		Ut-Mod02.inc
		Ut-Mod03.inc
		Ut-Mod04.inc
		Tstsound.com


                                                             Page 2


	DOCUMENTATION FORM:

	  The procedures will be given in the following form:

	  Procedure name(Variable 1,    { type var: description of var }
	                  .                          .
	                  .                          .
	                 Variable n)    { type var: description of var }
	    Description of routine and calling method.
	    Discussion if necessary.
	    What is returned to the main program.


	PROCEDURES:

	Msg( String       { str: string to be displayed  }
	     Col,Row)     { int: Column & row for display}
	   Description: Display a message at the specified column
	  	and row of the video.



	Center( String,        { str: string to be displayed  }
	        Col,Row,       { int: Col & row to center on  }
	        Line length)   { int: length of line to center on }
	   Description: clear the line to center on from the col,row
		to the line-length, then Center the string on this line.



	InvVideo( String )    { str: String to display in inverse video }
	   Description: display a string in inverse video and return
		to the calling routine with the background set to black
		and the text white.



	Color(BackGnd,     { int: the desired background color }
	      Txt )        { int: the color for the text       }
	   Description: color the video as desired.



	Box( X1,Y1,  { int: upper left col & row for frame }
	     X2,Y2,  { int: lower right col & row          }
	     divider){ int: the row position for a dividing line}
	   Description: draw a box that has an optional line as a
		divider. If you do not wish to have the extra line 
		divide the box, just set Z = Y1.


                                                             Page 3


	Option;
	   Description: allow the user to press a key and return
		that character as an upper character to the calling
		routine.
	   Returned : Ch ( upper case )



	StripSpaces( String,   { str: string to strip spaces from end }
	             NewStr )  { str: variable to return }
	  Description: Strip spaces from the end of a string.
	  Returned   : NewStr is a variable parameter that is returned to
	               to the calling routine.



	ClrWnd( X1,Y1,  { int: upper left of area to clear }
	        X2,Y2)  { int: lower right of area to clear }
	   Description: this is an alternate method to that of 
		defining a window and doing a CLRSCR for that window.
		The advantage of this method is that the original
		window is left intact and operations can be performed
		without keeping track of the original window. The
		disadvantage is that it is a little slower than CLRSCR.



	SaveScreen
	  Description: save a video display in memory for a quick
		flash back when necessary. 



	FlashScreen
	  Description: this routine will re-display the screen saved
		by the SaveScreen procedure.



	Beep( Tone,    { int: the tone to sound (Ex: 350 ) }
	      Duration){ int: the time to delay (Ex: 500 ) }
	  Description: turns on a tone for the desired duration 
		then terminates the sound. You may test the sounds
		by running TSTSOUND.COM.



	Say_cap_num
	  Description: display on the 25th line of the screen
		the current status of the CAP, NUM, Ins keys.


                                                            Page 4


	Set_cap_num( Caps,    { ch: set to 'C' for caps }
	             Num,     { ch: set to 'N' for nums }
	             Ins)     { ch: set to 'I' for insert }
	  Description: set the keypad as desired by the programmer.
		Ex: Set_cap_num('C','N','I')
		      will set the cap lock, the num lock, and turn
		      insert on.
		Ex: Set_cap_num(' ','N',' ')
		      will set only the num lock.



	Ck_edit_key( Ch )   { ch: variable returned }
	  Description: A routine to determine if an edit key (Home, End,
		arrow key, etc.) or a function key was pressed.
	  Discussion : IBM returns a two byte string for any edit
		or function key that is pressed. In order to test for this
		2 byte string you must read the keyboard twice, testing
		the second byte for the edit or function key value. So,
		you must read the KBD for a character and if a key is
		pressed, call the routine (the procedure does the second
		READ(kbd,ch)). At present, only the edit keys and the
		10 function keys are checked. However, you could easily
		expand the procedure to check the shift states, etc.
		Example call:
		  READ(kbd,ch);
		  if keypressed Ck_edit_key(Ch);

	  Returned   : the procedure will modify the variable
		Ch if one of the edit or function keys was pressed or
		leave Ch as it was in the first READ(kbd,ch) if no edit or
		function key was pressed. You should look at the routine
		to determine what Ch will return if it has been modified
		(I always have to look, but, I know the function keys
		 will return ^a for <F1>,...,^i for <F9>,^j for <F10>).



	Get_template( template_num  { int: the number of the template  }
	              template )    { str: variable returned to caller }
	  Description: get the required template for use in the
		Input procedure.



                                                            Page 5


	Input( type,    { ch: 'A' for alphanumerics
	                      'N' for numbers
	                      'F' for formatted entries }
	       default, { str: the default string that will be displayed
	                       in the input field }
	       col,row, { int: the position for the input }
	       length,  { int: the field length for the input or
	                       the template number if a formatted entry }
	       uppercase { boo: true for uppercase letters
	                        false otherwise }
	       F1        { boo: variable returned true if the <F1> key
	                        was pressed for the entry }
	       F10 )     { boo: variable returned true if the <F10> key
	                        was pressed for the entry }
	  Description: This is the main procedure for getting input from
		a user. The numeric keypad, the Ins key, and the CAP lock
		keys are set as desired by the programmer and these keys
		are constantly monitored to see if their status has been
		changed by the user. The key status is displayed on the
		25th line of the screen in inverse video. As presently 
		configured, the status of these three keys can be changed
		at any time by the user.
			The routine allows the user to use the keyboard as he
		would normally expect. The arrow keys function when the
		NUM lock is not set, the Home and End keys respond to send
		the cusor to the start or end of the input line, and the 
		Ins key state will allow a letter to be inserted in the input
		string if it is set to ON.
	  Returned   : the entry of the user is return to the calling
		procedure in the global variable ANSWER.



                                                            Page 6


	Prompt( string1,   { str: string to be displayed on line 22 }
	        string2 )  { str: string to be displayed on line 23 }
	  Description: clear line 22 and 23 of the video then display
		string1 and string2 there.



	Say_prompt( prompt_num )  { int: the prompt to display }
	  Description: specify string1 and string2 to be dispalyed
		in the Prompt procedure. This is used primarily by the
		Input_handler.



	Get_default( Default_num,  { int: the default for an input }
	             Default )     { str: the variable returned    }
	  Description: provide the defaults to display in the input field
		for the Input_handler.


	Do_validation( Valid_num,  { int: the number of the
	                                  validation routine }
	               Valid )     { boo: variable returned false if
	                                  invalid entry }
	  Description: provide a routine to validate any entries that
		were made from the Input_handler. If the entry is
		invalid on return from this procedure, the Input_handler
		will require the user to re-enter the data.
	  Returned   : the boolean variable VALID is returned.



                                                            Page 7


	Input_handler( string, { str: 5 character string (Ex: 'N0108')
	                               1st ch:   N  for new entries
	                                         C  for changes
	                                         D  for re-display
	                               nums 1-2: first element number of
	                                         P[] array to use
	                               nums 3-4: last element of the
	                                         P[] array to use }
	               Escape ) { boo: variable returned true if <F1> was
	                               pressed at the first entry }
	  Description: this handler provides for full screen editing of
		user inputs, provides a means for changing entries, and
		redisplays a record.
	  Discussion : the programmer must provide the P[] array,
		specifying each input that is required. The form for
		P[] is
			P[1] := '2505A02501T010102'
			  .
			  .
			P[n]  where n is limited to 35 (35 entries per page)
		Each element of P[] is defined below:

			element No.   Description
			   1-2        the column for input
			   3-4        the row for input
			   5          type input- A  for alphanumerics
			                          N  for numbers
			                          F  for foramtted entries
			                          $  for dollar entries
			   6-9        the length of the input field or
			                  the template number if a formatted
			                  entry.
			   10-11      array element of Filvar[] array.
			                  Filvar[] is the global variable
			                  that is returned to the calling
			                  routine.
			   12         set to T if you wish the Caps lock set
			   13-14      the default number ( see Get_default )
			   15-16      the prompt number ( see Say_prompt )
			   17-18      the validation No.( see Do_validation )

                                                            continued...

                     ( Example on next page )

                                                            Page 8


			The programmer must also provide for defaults, prompts,
		and validation. The placement of these procedures is provided
		in the utility.

			Example: the following procedure will call the handler:

			  procedure Get_inputs;
			    procedure Get_variables;
			     begin
			       P[1] := '2505N00801F010201';
			       P[2] := '2607A02502T020203';
			     end;
			   begin
			     Get_variables;
			     Input_handler('N0102');
			   end;

			This example will provide input for two variables. On
		return from the handler, FILVAR[1] will contain the input
		from the parameters specified in P[1] and FILVAR[2] will
		contain the input from P[2].
			Changes can be made to Filvar[1..n] by calling the
		handler in the change mode. For example, if there were 7
		variables in the Filvar array, the call
		Input_handler('C0207') would allow changes to Filvar[2] thru
		Filvar[7] ( note that Filvar[1] was skipped by this call ).
			The handler may also be called in the Display mode.
		It will then display all variables execpt the numbers. The
		numbers may be displayed formatted using the FMT_REAL function.
	  Returned   : global variables Filvar[1..n]  ( max n = 35 )
	               variable ESCAPE will return true if
	                 <F1> was pressed at the 1st field of input.


                                                            Page 9

	Hmenu( Col,row,   { int: the column & row for the menu }
	       title,     { str: title for the menu, displayed one
	                         line above the col,row position }
	       Ch )       { Ch : variable returned to the calling
                          calling routine. This was the
                          choice the user pressed       }
	  Description: provide a lotus type menu. The programmer provides
		the menu choices and prompts in the P[] array.
		The following form will call the procedure:

		  procedure Lotus_Menu;
		   var Exit: boolean;
		   begin
			Exit := false;
			Title := 'File Maintenance';
			P[1]  := 'Add   .Add an account to the file';
			P[2]  := 'List  .List a file';
			P[3]  := 'Menu  .Return to the Main Menu';
			P[4]  := ' ';
			REPEAT 
			  Hmenu(1,2,title);
			  Case Ch of
			    A : begin end;
			    L : begin end;
			    M : Exit := true;
			  end; { case }
			UNTIL Exit = true;
		   end;
		Note that all menu items must begin with a different letter
		and each item is followed by a period.
	  Returned: The global variable Ch will be returned as the choice
		selected by the user.



	MainMenu
	  Description: provide a skeleton for a main menu. The procedure
		will draw a box around the menu items and verify the choice
		of the user. All that is required of the programmer, is the
		menu selections and a list of OKchoices ( Okchoices is a list
		of all the choices that may be selected by the user )


                                                            Page 10


	FUNCTIONS

	Fmt_Real(number,    { real: number to format }
	         lenght,    { int:  the total length of the digits, commas,
	                            and the decimals }
	         decimals)  { int:  the number of decimal places }
	  Description: a function to format a real number with a commas
		and the decimals as desired.
		Example: Fmt_Real( 1010.258,7,2) would return 1,010.26


	UpcaseStr(S)   { str: string to convert to upper case }
	   Description: to convert any string to upper case characters.
		This function may be useful when using the Turbo Toolbox for
		converting an index string to all upper case letters.


	 ConstStr( Character,   { the cahracter to fill the string with }
	           Number)      { the number of characters in the string }
	  Description: fill a string with the character of the programmers
		choice. This would be useful for drawing a line of characters on
		the screen.
		Example: gotoXY(1,4); write(ConstStr('=',80));
		  This example would draw a line of equal signs at line 4 of
		  the video.





                                                            Page 11


	
	=================== User-Supported Software ===================

	
		If you have received this program from another
		 user and find it of value, your contribution
		   will be appreciated ( $25.00 suggested ).


	                  ______________________

	                     Donald R. Ramsey
	                    727 Bunker Hill #70
	                   Houston, Texas  77024
	
	                  _______________________


		Regardless of whether you make a contribution, you are
	encouraged to copy and distribute this program.

	===============================================================




	The user-supported concept:

		Anyone may request a copy of a user-supported program by
	sending a blank, formatted disk to the program author together
	with an addressed, postage-paid return mailer. A copy of the
	program, with documentation, will be sent by return mail on
	user's disk.

		The program carries a notice suggesting a contribution for
	the software. Making a contribution is voluntary on the part of
	the user.

	Regardless of whether a contribution is made, the user is
	is encouraged to copy the program for trial use by others
	on a private, non-commercial basis. Payment for use is
	discretionary on the part or each subsequent user.



                                                            Page 12



	FUTURE ENHANCEMENTS AND UPDATE POLICY:

		This program is distributed under the user-supported
	concept and, as such, will only be improved if you, the user,
	make suggestions as to improvements and enhancements that you
	would like to see. LET ME HEAR FROM YOU.

		Provided the Users do support this program, this will
	apply. Any time there are revisions or up-dates to the program
	I will notify all Registered Owners. They may then obtain a
	copy of the new disk for a $10.00 fee. This fee is to cover the
	cost of the disk as well as mailing. If you are not a Registered
	owner then you will have to get the update from a friend.

		I might also mention that since I have spent a great
	amount of time writing the program, I hope to benefit from
	the contributions of the Users. If you do not contribute
	to a Useful user-supported program, the supply of improving
	public domain programs will start to diminish. Help make
	this experiment a success and send a donation.

		If this program is useful to the users and is of benefit
	to me, I will add other procedures and functions that will
	extend the program and it's usefulness. If I don't hear from
	you, I won't be encouraged to make any improvements or extensions.




                                 APPENDIX


   PROCEDURES:

	Msg( String       { str: string to be displayed  }
	     Col,Row)     { int: Column & row for display}

	Center( String,        { str: string to be displayed  }
	        Col,Row,       { int: Col & row to center on  }
	        Line length)   { int: length of line to center on }

	InvVideo( String )    { str: String to display in inverse video }

	Color(BackGnd,     { int: the desired background color }
	      Txt )        { int: the color for the text       }

	Box( X1,Y1,  { int: upper left col & row for frame }
	     X2,Y2,  { int: lower right col & row          }
	     divider){ int: the row position for a dividing line }

	Option;

	StripSpaces( String,   { str: string to strip spaces from end }
	             NewStr )  { str: variable to return }

	ClrWnd( X1,Y1,  { int: upper left of area to clear }
	        X2,Y2)  { int: lower right of area to clear }

	SaveScreen;

	FlashScreen;

	Beep( Tone,    { int: the tone to sound (Ex: 350 ) }
	      Duration){ int: the time to delay (Ex: 500 ) }

	Say_Cap_num;

	Set_cap_num( Caps,    { ch: set to 'C' for caps }
	             Num,     { ch: set to 'N' for nums }
	             Ins)     { ch: set to 'I' for insert }

	Ck_edit_key( Ch )   { ch: variable returned }

	Get_template( template_num  { int: the number of the template  }
	              template )    { str: variable returned to caller }




	Input( type,      { ch: 'A' for alphanumerics
	                      'N' for numbers
	                      'F' for formatted entries }
	       default,   { str: the default string that will be displayed
	                       in the input field }
	       col,row,   { int: the position for the input }
	       length,    { int: the field length for the input or
	                       the template number if a formatted entry }
	       uppercase, { boo: true for uppercase letters
	                        false otherwise }
	       F1,        { boo: variable returned true if the <F1> key
	                         was pressed for the entry }
	       F10 )      { boo: variable returned true if the <F10> key
	                         was pressed for the entry }

	Prompt( string1,   { str: string to be displayed on line 22 }
	        string2 )  { str: string to be displayed on line 23 }

	Say_prompt( prompt_num )  { int: the prompt to display }

	Get_default( Default_num, { int: the default for an input }
	             Default )    { str: variable returned        }

	Do_validation( Valid_num, { int: the number of the validation routine }
	               Valid )    { boo: variable returned false if
	                                 invalid entry }

	Input_handler( string  { str: 5 character string (Ex: 'N0108')
	                               1st ch:   N  for new entries
	                                         C  for changes
	                                         D  for re-display
	                               nums 1-2: first element number of
	                                         P[] array to use
	                               nums 3-4: last element of the
	                                         P[] array to use }
	               Escape )  { boo: variable returned true if <F1> was
	                                pressed at the first field }

	Hmenu( Col,row,   { int: the column & row for the menu }
	       title,     { str: title for the menu, displayed one
	                         line above the col,row position }
        Ch )       { ch : variable character that is returned
                          to calling routine. The user's choice }

	MainMenu;






   FUNCTIONS:

	Fmt_Real(number,    { real: number to format }
	         lenght,    { int:  the total length of the digits
	                            and the decimals }


	UpcaseStr(S)   { str: string to convert to upper case }


	ConstStr( Character,   { the cahracter to fill the string with }
	          Number)      { the number of characters in the string }







	                           INVOICE
	                         ===========




	Purchased From:
	
	   Donald R. Ramsey
	   727 Bunker Hill #70
	   Houston, Texas  77024


	==================================================================
	Item       | Description                 | Qty | Price ea |  TOTAL
	==================================================================

	TURBO-UT.  | A programmer's utility      |     |          |
	        PAS|   for the IBM-PC            |     |  $25.00  |
	           |                             |     |          |
	           |                             |     |          |
	           |                             |     |          |	
	           |                             |     |          |
	COPIES     | Copies of above software to |     |  $15.00  |
	           |   to be used at other       |     |          |
	           |   locations.                |     |          |
	           |                             |     |          |
	           |                             |     |          |
	           |                             |     |          |
	           |                             |     |          |
	           |                             |     |          |
	           |                             |     |          |
	==================================================================
	                                         	
	                               TOTAL DUE:

	==================================================================





	Retain this copy for your records.


        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
        Disks in the Public Libray are updated monthly.  Check with us
        for the latest versions of all programs.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0375

     Volume in drive A has no label
     Directory of A:\

    TURBO-UT DOC     27836   9-11-84   7:19p
    TURBO-UT DEM     10378   9-11-84   3:44p
    HEAPTEST PAS      1830   8-21-84   7:44p
    TIMESTMP PAS      2476   8-21-84  10:57p
    MEM      INC       331   7-13-84   6:25p
    BENCHMRK PAS       967   8-27-84  12:18p
    CLS      INV        17   5-11-84   8:46a
    TURBO-UT PAS      4101   9-11-84   3:48p
    DECBIN   INC       653   7-13-84   6:26p
    TSIN     PAS       340   7-04-84  12:53p
    FLOAT    PAS       389   7-04-84  12:54p
    DOT      PAS       712   7-04-84   9:07p
    TIME     INC       450   7-13-84   6:26p
    FREE     INC       817   7-13-84   6:26p
    DATE     INC       459   7-13-84   6:26p
    STRPRNT  PAS       819   7-04-84   9:13p
    EQUIP    INC       808   7-13-84   6:27p
    GETFREE  INC      1266   7-13-84   6:28p
    BIOSREAD INC      1443   7-13-84   6:28p
    DUMPHEX  INC       254   7-13-84   6:28p
    READPSP1 INC       323   7-13-84   6:29p
    GETDATE  INC      1997   7-13-84   6:29p
    CHECKPSP INC       721   7-13-84   6:29p
    DTA      INC      2102   7-13-84   6:30p
    UT-MOD90 INC      1379   9-11-84   3:39p
    GETDIR   PAS      2198   7-13-84   6:33p
    PRINT2   PAS      8081   7-10-84   6:15p
    READFAT  PAS      1323   7-13-84   6:32p
    UT-MOD00 INC       725   9-11-84   4:01p
    UT-MOD04 INC      2568   8-30-84   2:38p
    UT-MOD02 INC      8768   8-30-84   2:54p
    UT-MOD01 INC      4147   8-30-84   2:32p
    UT-MOD03 INC      4748   9-11-84   4:06p
    HAL-PC   DOC      2147   1-01-84  12:55a
    POINTERS PAS       547   2-11-85   9:02p
    INFO     BAT      5760   3-08-83   2:00p
    START    BAT       128   3-08-83   2:00p
    ENTER    BAT       128   3-08-83   2:00p
    COMBINE  BAT       128   3-08-83   2:00p
    INDEX    BAT       128   3-08-83   2:00p
    HEXDUMP  PAS      2347   7-17-84  11:20p
    TSTSOUND COM     10367   7-05-84   1:57p
    PASCAPS  PAS      6136   7-13-84   6:24p
    MEMDISP  PAS      3265   7-13-84   5:39p
    GETSEC   ASM      4002   5-09-84   5:34p
    TEST     PAS       139  10-02-84   3:43a
    DOWN     PAS       994   9-07-84  12:27p
    COVER    DOC      2322   4-18-84  10:27p
    FASTPRNT INV       364   9-09-84   5:46p
    TURBO-UT COM     25784   9-11-84   3:46p
    POINT    INV       263   9-06-84   2:56p
    LINE     INV       510   9-06-84   2:59p
    SIDEWYTR PAS      5607   8-28-84   6:57p
    FRACTAL  PAS      2298   9-11-84   8:23p
    GETSEC   OBJ       111   8-25-82
    TESTDB   PAS       216  10-02-84   3:43a
    PRINTDIR PAS     20237  10-02-84   3:47a
    COVER    COM      1152   3-01-84   7:04a
    FILES375 TXT      3538   7-08-85   2:37p
           59 file(s)     194044 bytes
                           93184 bytes free
