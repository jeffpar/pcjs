---
layout: page
title: "PC-SIG Diskette Library (Disk #36)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0036/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0036"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PASCAL COLLECTION #1"

    The diverse selection of programs on this disk are primarily intended
    for intermediate to advanced programmers who want to clarify aspects of
    PASCAL programming left unclear by the programming manual.
    
    Again it offers the programmer the opportunity to explore the how-to's
    of specific functions or, on the other hand, offers specific functions
    that can be adapted to a current project. It includes routines like
    GETDIR.PAS, a PASCAL directory program.  TOOLS.PAS is full of BASIC
    keyword subroutines, ie:, INKEY, LOCATE and ESCAPE.  This collection
    even includes SIDEWAYS for custom printing on an Epson MX-80 printer.
    
    How to Start:  Type GO to start
    
    File Descriptions:
    
    SCREEN   PAS  Short program to assess specific memory addresses.
    PASCL    BAT  Batch file to compile and link.
    SCREENC  PAS  Color/graphics version of screen.pas.
    PASC     BAT  Batch file to compile only.
    C-LST    BAT  Batch file to compile/list (no prompts).
    C        BAT  Batch file to compile only (no prompts).
    CL       BAT  Batch file to compile/link (no prompts).
    CL-LST   BAT  Batch file to compile/list/link (no prompts).
    MATH     DOC  Documentation file for the math subroutine library.
    BUILD    EXE  Executable file of build.pas.
    BUILD    PAS  Index building program by Peter Norton Corp 1983.
    FLUSH    BAT  Batch file cleans up PASCAL compilation and test residue.
    PRINTER  PAS  Utility to print multiple files.
    MATH     INT  PASCAL interface for the math subroutine library.
    *        P    Part of PRINTER.PAS (3 files).
    VIDEO    ASM  PASCAL callable routine to perform bios video interrupts.
    VIDEO    OBJ  Object module of video.
    PASCLG   BAT  Batch file to compile, link, and go.
    GETSEC   OBJ  Object module of getsec.
    MATH     OBJ  PASCAL v2.0 object module of the math subroutine library.
    GETSEC   ASM  Assembly language utility used by getdir.
    XREF     PAS  Cross-reference utility.
    GETDIR   OBJ  Object module of getdir.
    COPYFILE PAS  Program to show how files are defined, read and copied.
    MATHTEST PAS  PASCAL driver program shows how to use the subroutine.
    MATHV1   OBJ  PASCAL v1.0 object module of the math subroutine library.
    MERGE    PAS  Index merging program.
    OKIDATA  PAS  Sets mode of operation on Okidata Microline 92 printer.
    PART?    PAS  Part of PRETTY.PAS (3 files).
    PRETTY   PAS  Utility for listing PASCAL programs in pretty format.
    UNSQ     PAS  Unsqueezes files compressed by huffman encoding.
    DUMPFILE PAS  Produces hexadecimal and ASCII dump of a disk file.
    GETDIR   PAS  Program to read disk directory.
    TOOLS    PAS  MS and IBM PASCAL screen and I/O tools.
    SIDEWAYS PAS  Prints a file sideways on the Epson mx-80 printer.
    CONTENTS TXT  Description of files on this disk.
    IBMPAS   DOC  Notes/info/patchs for IBM PASCAL.
    CLEAN    BAT  Cleans up residue from compile.
    MERGE    EXE  Executable version of MERGE.PAS.
    TABSET1  PAS  Sets tabs on Epson mx-100 printer.
    TIMM     PAS  Illustrates concept of PASCAL unit  (main program).
    TABSET2  PAS  Simular to tabset1 but treats printer as binary file.
    TIMI     PAS  Illustrates concept of PASCAL unit  (interface)
    TIMU     PAS  Illustrates concept of PASCAL unit  (unit).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CONTENTS.TXT

{% raw %}
```
|
| NOTE: Changes to this file made by the librarian are marked with a
| "|" character in the first column.
|                     ----------------
|
This disk provides a number of sample Pascal programs.  Some are very
simple; others are more complex.  Most are quite short, while a few are
are fairly long.  All will compile on a 128K machine with two regular
(160K) disk drives.

These programs were put together to help the programmer get started
with IBM Pascal.  Many aspects of the language are hard to figure out
from the reference manual; having some sample programs that do work
is frequently very helpful.  These programs were assembled, therefore,
mainly as illustrations of how various things can be done in IBM Pascal.
Most are intended more as "helpful hints" than as products.

In rough order of increasing complexity the programs provided are:

COPYFILE  -  A fairly basic Pascal program that shows how
             text files are defined, read, and copied.

DUMPFILE -  A more complex Pascal program, which will produce a combined
            hexadecimal and ASCII dump of a disk file.

TABSET1 - A very basic Pascal program which shows how the printer can
          is accessed, and which sets tabs on an Epson MX-100.

TABSET2 - Another version of the same, which treats the printer as a
          binary file rather than a text file.

TIMM, -  A group of files, which illustrate the concept of a Pascal unit.
TIMU,    File TIMU is the unit itself; file TIMI is the interface; and
| TIMI   file TIMM is a main program which uses the unit.  The unit
         itself illustrates use of the DOSXQQ function to call on DOS
         services.

|        Note: TIMI is an include file and should not be compiled.
|              Linking string:    LINK  TIMM+TIMU;

SCREEN - A short program to illustrate how the ADS type can be used
         to get at specific addresses, in this case the memory block
         associated with the monochrome display screen.

| SCREENC - A modified version of SCREEN that works on Color/Graphic
|           board equipped computers.
|

PRINTER - A useful utility which can be used to print a whole series
          of files. (This program also uses (INCLUDEs) PARSE.P,
          INDEX.P, and DSNAME.P).  A good example of a fairly long
          Pascal program.

|         Note: This program does not work!

XREF -  Another useful utility - a cross-reference generator. Also
        a longish Pascal program.

|         Note: This program does not work!

UNSQ - A program for unsqueezing files, compressed by techniques such as
       Huffman encoding.  Illustrates some fairly complex data structures.

PRETTY - A Pascal pretty-printer.  Useful utility for listing Pascal
         programs. Fairly long (Includes PARTA, PARTB, and PARTC) and
         fairly complex.

|        Note: This program provides automatic indention of PASCAL
|              programs. However, it also automatically converts all
|              lower case characters to upper case (Except those in
|              literals). It also converts all comment constructs to
|              the construct (* , *) .
|

GETDIR - A brief Pascal program that uses an assembly language routine
         (GETSEC), provided in both source and object, to show how one
         can access a disk directory through Pascal and Assembler.

VIDEO - A short assembler subroutine which can be called by Pascal
        (as in the foregoing example) if you need to perform BIOS
        video interrupts from Pascal.

|       Note: The Object for this file is provided (V1.00) for those
|             who do not have access to an IBM Assembler.


PASCLG, - A set of command files that help the whole process of compiling,
PASCL     linking, and executing Pascal programs.  For use, these procedures
PASC      should be copied on each of the three Pascal disks (PAS1, PAS2,
          and PASCAL library); your work disk should be in drive B, which
          also should be the default volume.  A Pascal compilation,
          linking, and test of program TESTX.PAS can then be requested
          with the command "a:pasclg testx".

|         Note: Four different extensions of these programs are
|               provided for your use. (C, CL, C-LST, CL-LST)

FLUSH -  A short command file useful for cleaning up the residue of
         a Pascal compilation and test (.OBJ, .LST, .MAP, .EXE etc. files)
         A call to "flush xyz" will scratch all XYZ.--- files except for
         XYZ.PAS

|        Note: A different version of this batch file called CLEAN.BAT
|              will delete "Only" .OBJ's, .LST's, .SYM's, & .BIN's.
|              This allows you to clean up the disk after compiling or
|              crashing a compile without deleting the EXE as FLUSH
|              would.

That's it for now.   If you find these programs and examples useful,
the Pascal SIG will try to put together another batch. We hope that next
time we'll include some of your contributions and suggestions!!!

                                    Good Luck !

                                    Pascal Special Interest Group
                                    Capital PC Users' Group


========================================================================
                   L I B R A R I A N   N O T E
========================================================================

 If you encounter problems with any PASCAL LANGUAGE Disk please
 let me know!

                        Chuck Thornton
                  Pascal Language Librarian
                     467 - 1651 (evenings)

                       P.O. Box 55085
                      Houston, Tx 77255
```
{% endraw %}

## GETSEC.ASM

{% raw %}
```
PAGE 50,132
TITLE GETSEC5   -PASCAL FUNCTION TO GET DISK SECTORS
;GETSEC --  Pascal Function to get sectors from disk using DOS's INT 25H.
;			Interfaces to IBM PC Pascal v1.00 Compiler (Microsoft).
;			see DOS Manual, page D-25; and Tech Ref Manual, page A-32.
;***********  (c) Copyright 1982 by Walter H. Rauser   5-16-82   ***********
;{sample of Pascal declarations to use GETSEC}
;function GETSEC(drive  :integer;	{A is 0, B is 1, C is 2, D is 3}
;				 first  :integer;	{first sector # in 0-origin}
;				 numof  :integer; 	{number of sectors to get}
;			 var buffer :dirtype;	{buffer to hold all fetched sectors}
;			 var errorc :integer	{DOS error code}
;					   ):boolean; EXTERN;
;{sample of buffer type for directory sectors, DOS 1.10}
;type dirtype = array[1..112] of record		{112 for DS Drives, 64 for SS}
;					name	[0]:string(8);
;					ext		[8]:string(3);
;					attr   [11]:byte;
;					resvd  [12]:array[1..10] of byte;
;					time   [22]:word;
;					date   [24]:word;
;				 cluster1  [26]:word;
;				 sizelow   [28]:word;
;				 sizehigh  [30]:word;
;				end;	
; frame contents for call from Pascal
; offset len  variable     attributes
; [BP]+14  2  drive			int value parameter
; [BP]+12  2  firstsector 	int value parameter
; [BP]+10  2  numofsectors 	int value param
; [BP]+ 8  2  buffer  			var param
; [BP]+ 6  2  errorcode 	int var param 
; [BP]+ 4  2  CS: 		return address long call
; [BP]+ 2  2  offset  	return address
; [BP]+ 0  2  old frame pointer storage
;
;
MYSEG	SEGMENT	PARA	PUBLIC	'CODE'
		ASSUME CS:MYSEG
		PUBLIC GETSEC
;
GETSEC 	PROC	FAR
		PUSH	BP				;save old frame pointer
		MOV		BP,SP			;set new frame pointer
		MOV		AX,[BP].14		;put drive num into AL
		XOR		AH,AH
		MOV		CX,[BP].10		;num of sectors to fetch
		MOV		DX,[BP]+12		;logical record # of first sec, 0-orgin
		PUSH	DS				;restore before ret
		PUSH	SS				;buffer is in stack segment
		POP		DS				;DS: of buffer (transfer address)
;
		MOV		BX,[BP]+8		;offset of buffer
		INT		25H				;absolute disk read, DOS function.
		JC		ERROR			;error if carry flag set
		MOV		AL,01H			; okay, set AL to return GETSEC=true 
		JMP		DONE
;
ERROR:	MOV		BP,[BP].6		;adr of errorc
		MOV  	[BP],AX			;dos error code
		MOV		AL,00H			; error, set AL to return GETSEC=false
;
DONE:	XOR		AH,AH
		POPF					;int 25H left Flags on stack
		POP		DS				;restore DS
		POP		BP				;restore frame pointer
		RET		10				;clear parameters from stack
GETSEC	ENDP
MYSEG	ENDS
		END 
```
{% endraw %}

## IBMPAS.DOC

{% raw %}
```
   1: Screen Control From Pascal              10-01-1982 USER UPDATES
A recurring question is: how does a Pascal program determine the
position of the cursor on the screen?

With the way DOS Pascal is implemented on the IBM Personal Computer, you
cannot perform many BIOS functions directly.  A program must be written
in assembler language and linked with the Pascal program in order to
perform the desired BIOS functions.  Actually, the Assembler program
uses the BIOS video interrupt (Hex 10) to control the screen.  If you
desire to follow this approach, it is strongly recommended that you
read the Technical Reference Manual beginning on page A-43, where the
listing for the BIOS video interrupt begins and where register contents
for each available function are documented.

Following are two sample programs that were tested on an IBM Personal
Computer Monochrome Display.  They should be assembled, compiled, and
then linked together.

The Assembler program depicts the structure of the variable list passed
to it from Pascal and represents one approach toward assembler coding.

In the Pascal program, notice that, at those points where the Pascal
statement ReadLn is user to pause for input,  the cursor is positioned
in the reverse video area of the screen.  This is a function of the
ReadLn statement which places the cursor at the beginning of the next
line, then waits for input.

Finally, notice that the assembler INTRPT routine can be used to drive
any BIOS interrupt.

(The programs are available for downloading from the <F>iles section of
this bulletin board.)
The next message is:
   2: Correcting False OUT OF MEMORY Errors   06-01-1983 USER UPDATES
<R>ead, <N>ext, or <Q>uit? R
The following procedure is necessary to fix false "OUT OF MEMORY"
errors that occur while the user is compiling Pascal programs on the IBM
PC or IBM PC XT with large memories.

If you are updating your Pascal Compiler for the first time, you'll need
to make copies of your original compiler diskette before debugging.  You
can make these copies by using the DISKCOPY program on the DOS diskette
and following the "Copy instructions" below.  Follow the "Copy
instructions" for every compiler diskette that has not been updated.
(If you have previously updated all of your Pascal diskettes, proceed to
the "DEBUG instructions".)

COPY instructions
- Insert the DOS diskette in drive A and a blank formatted diskette in
drive B. Type:
                DISKCOPY A: B:
- Remove the DOS diskette from drive A and insert the original Pascal
Compiler diskette in drive A. Press any key to begin the DISKCOPY.  When
DISKCOPY is completed the program will prompt:
                COPY ANOTHER (Y/N)?
- Enter your desired response. In drive B you now have an exact copy of
the original Pascal Compiler diskette.  Remove this copied diskette
from drive B and label it with one of the following appropriate labels:
                UPDATED MASTER PAS1 DISKETTE
                UPDATED MASTER PAS2 DISKETTE
                UPDATED MASTER LIBRARY DISKETTE

  Any future updates should be made to these diskettes.

Debug Instructions
-  Insert the DOS diskette in drive A and the Updated Master PAS1
diskette in drive B. Type:
                DEBUG
                LDS:100 1 A 1
                DDS:12A L1
-  The program will display the following:
                XXXX:012A 7E
   (xxxx is a four-digit hexadecimal address.)
-  If this is not displayed, restart the update procedure and return to
DOS by typing
                Q
-  To continue the update, type:
                EDS:12A 76
                WDS:100 1 A 1
-  Remove the Updated Master PAS1 diskette from drive B and insert the
Updated Master PAS2 diskette in drive B. Type:
                LDS:100 1 F 1
                DDS:12A L1
-  The program will display the following:
                XXXX:012A 7E
   (xxxx is a four-digit hexadecimal address.)
-  If this is not displayed, restart the update procedure and return to
DOS by typing
                Q
-  To continue the update, type:
                EDS:12A 76
                WDS:100 1 F 1
-  Remove the Updated Master PAS2 diskette from drive B and insert the
Updated Master Library diskette in drive B. Type:
                LDS:100 1 9 1
                DDS:1BA L1
-  The program will display the following:
                XXXX:01BA 7E
   (xxxx is a four-digit hexadecimal address.)
-  If this is not displayed, restart the update procedure and return to
DOS by typing

-  To continue the update, type:
                EDS:1BA 76
                WDS:100 1 9 1
                Q
  You are now back in DOS.  Any future recreations of your working
compiler diskettes should be made from the Updated Master Compiler
diskettes with the DISKCOPY program.  Be sure to make a backup of your
updates diskettes for future use.
The next message is:
   3: Pascal Compiler Version 2.0             04-05-1984 USER GROUP SUPPORT
<R>ead, <N>ext, or <Q>uit? R
PERSONAL COMPUTER PASCAL COMPILER VERSION 2.0 (6024128)

The Personal Computer Pascal Version 2.0 supports all of the facilities
of the International Standards Organization working draft #6, with the
exception of conforming array parameters, which are instead provided by
the "super array" type.  Many additional features are also supported.

This software product provides you with a system development environment
for the creation and execution of Pascal programs.  The structured
programming facilities and extensive data structures in Pascal make it a
very useful language for large applications programs.

HIGHLIGHTS

o   IBM 8087 Math Co-processor Support
o   Ability to build applications that will run either with or
    without an IBM 8087 Math Co-processor present
o   Double Precision Arithmetic
o   4-Byte Integer Arithmetic
o   Single Level Overlays
o   Ability to use available memory up to 640KB at runtime
o   Path support at runtime when using DOS 2.00 or later
o   Library manager for creating user written libraries
o   64KB Data Structures
o   ISO Standard plus IBM Pascal extensions
o   Super Array Type
o   Separate compilation of modules and units
o   Varying length strings
o   System programming features
o   Object modules may be linked with subroutines written in
    Personal Computer FORTRAN Version 2.0 or Macro Assembler
o   Various additional improvements from Version 1.0
    o   Improved code generation
    o   Smaller library requirements
    o   More efficient use of memory at compile time

RELATIONSHIP TO PRIOR VERSION

The following enhancements are part of Version 2.0 relative to
Version 1.0.

o   Support for IBM 8087 Math Co-processor
o   Improved arithmetic capabilities
    o   32 bit arithmetic
    o   Improved transcendental function support
    o   Double precision real numbers
o   Support for DOS 2.00 file names
o   Support for a long heap (allows 640KB program segment
    crossing)
o   Addition of Library Manager and Large Linker

Also, the publication has been substantially improved.  The
Pascal Version 2.0 compiler does not run with DOS 1.1.  The
Version 2.0 Runtime will operate with DOS 1.1 if no DOS 2.0
functions (paths) are used.

PREREQUISITES

The Personal Computer DOS 2.00 or later is needed to provide the
necessary software to prepare, compile and run a Pascal program.
A minimum of 160KB and two single sided diskette drives or one
single sided diskette drive and one fixed disk are required.  A
printer and an 80 column display are recommended.  An IBM 8087
Math Co-processor is supported but not required.
The next message is:
   4: Pascal Compiler Version 2.0 Trade-Up    04-05-1984 USER GROUP SUPPORT
<R>ead, <N>ext, or <Q>uit? R
PASCAL COMPILER VERSION 2.0 TRADE-UP (6361142)

Current users of Pascal Version 1.0 will be offered a trade-up to
Version 2.0.  The trade-up includes the same package as the
Version 2 product (manuals and diskettes).  The trade-up will be
offered concurrently with the announcement of Version 2.0.

The procedure is the same as that used for the Multiplan 1.0 to
1.1 upgrade.  These procedures are as follows:

1.  The offer to upgrade Pascal 1.0 to 2.0 is being extended to
    Pascal 1.0 licensees.
2.  Sales locations will be provided a packet containing a store
    display and order forms to be used by the licensee or dealer.
3.  The order form contains information pertinent to obtaining
    the upgrade product.
4.  The order form may be completed by the licensee or the
    dealer.
5.  Payment for the upgrade product is to be by check or money
    order made out to the IBM Corporation.  Applicable state and
    local taxes are to be paid by the licensee.
6.  Dealers requiring the Pascal upgrade product to be delivered
    to their store location must forward proof-of-purchase (front
    cover of Pascal manual), the order form (signed) and payment
    to IBM Corporation, P.O. Box 3160, Wallingford, CT, 06494.
7.  Payment made by the dealer is tax exempt, provided applicable
    taxes have been collected from the licensee and reported to
    state and local governments as appropriate.  Dealers are
    requested to include on the order form their tax exemption
    number.
8.  The fulfillment house will mail to the addressee the Pascal
    2.0 upgrade product.
9.  The upgrade is available beginning March 31, 1984 and expires
    September 30, 1984.
The next message is:
   5: Organizing Pascal Diskettes             04-05-1984 DAVE CORTESI
<R>ead, <N>ext, or <Q>uit? R
(This message was re-printed from the April issue of EXCHANGE)

        Dave Cortesi, Silicon Valley Computer Society

While I have been using IBM Pascal for a month now, others just starting
might be interested in a method I use to organize diskettes for easy
compiling.

I've always split diskettes into two categories:  "project" and "work".
A project diskette is a repository for files and only that; it has no
commands and no system files.  Project diskettes are normally loaded
into the B drive.  For Pascal work, a project diskette contains only
Pascal source and object files and maybe some test data (the EXE files
are too big, usually; they go on disks where they will be used).  Pascal
programs get a .PAS extension; modules are .MOD, interfaces are .INF;
and implementations are .IMP.  You might have several project diskettes,
each with files related to one "project".

You probably would have only one Pascal "work" diskette.  A work
diskette contains the system files, plus command files that you use in
your work:  Mode, Chkdsk, Edlin, etc.  It also contains the batch files
you use (there is lots of opportunity to use .BAT files when working in
IBM Pascal).  The Pascal work diskette has to contain one file from the
compiler distribution:  PASKEY.  And finally, the work diskette gets all
scratch files and the working copies of all source programs while they
are being worked on.  A work diskette is never backed up; the policy is
that there is nothing on it that can't be recreated or retrieved from
somewhere else.

The third diskette in the system is the compiler disk.  The following
files just fit on one double-sided diskette:

  PAS1.EXE   PAS2.EXE   PASCAL.LIB   LINK.EXE

This diskette can have a write-protect sticker on it.  Here's how it
works.  The work diskette stays in the A drive all the time.  Insert the
relevant project diskette in the B drive and copy the program to be
modified from B to A.  Edit it on A.  Put the compiler diskette in the B
drive and run a batch file like this one:

  B:PAS1 %1,,CON
  PAUSE hit enter if "No Errors Found" else Break
  B:PAS2
  PAUSE hit enter if "No Errors Found" else Break
  B:LINK %1,,NUL,B:PASCAL

When the new program works, put the project diskette back in B and copy
the final version of the source and object (but not EXE) from A to B.
If you have only single-sided drives, you will have to use three
compiler disks; your .BAT file can prompt you when to change them.
Frankly, I don't see how users of single-sided drives can compile at
all; the temporary files (PASIBF.*) are terribly big.  At the very
least, you will have to erase every possible file from the work diskette
before starting the compile; a batch file can help can help there, too.
The next message is:
   6: Review of Pascal Compiler Ver. 2.00     08-27-1984 CARRINGTON DIXON
<R>ead, <N>ext, or <Q>uit? R
        (This article was re-printed from the July issue of Exchange)

                              Carrington Dixon
                                North Texas
                      IBM Personal Computer User Group

My upgrade of the IBM Pascal Compiler arrived a few days ago.  Most, if not
all, of the bugs in Version 1.00 have been fixed and a number of
significant new capabilities have been added.

The first thing one notices is that the documentation has nearly doubled!
Where the original version required only one binder to hold its four
hundred odd pages, the new version requires two binders:  "Pascal Compiler
Fundamentals" and "Pascal Compiler Language Reference".  Each is the size
of the original document.  The latter supplies an alphabetically arranged
discussion of all the reserved words, functions and metacommands for IBM
Pascal.  The former supplies a topical discussion of many features, much as
the original did, and gives instructions for executing the compiler, linker
and the library manager.

New with this version is support for the 8087 chip, double precision
arithmetic and long integers (32 bit).  Programs now can address up to
640KB of memory via the long heap management routines.  Single level code
overlays are supported as are DOS 2.x pathnames (both at compile time and
at runtime).  Data structures now can be as large as 64KB.  The internal
floating point format has been changed for reasons of 8087 compatibility.

Because of the many different options that may be required, Pascal no
longer comes with a ready-to-use object library.  IBM supplies a SETUP
procedure that makes installing Pascal relatively painless.  There are two
choices of DOS interface routines:  DOS 1.1 and DOS 2.0.  The former will
produce files that can run under DOS 1.1 or DOS 2.x but will not support
pathnames under 2.x.  The latter supports pathnames but will not run under
DOS 1.1 at all.

There are three choices of math routines:  8087ONLY, REGMATH, and EMULATOR.
As the names imply, the first choice will produce files that require the
8087 chip for execution; the second will produce results in a precision
that is comparable to the old Pascal; and EMULATOR is for the undecided.
These math routines will use the 8087, if available, and will produce the
largest EXE files of the three choices and run slower than the REGMATH
routines on machines without an 8087 chip (the higher precision costs).
Note that this configuration is made once at installation time and need not
be repeated every time the linker is run.  All of this is made possible by
the Library Manager, a program that has been available from Microsoft for
nearly a year but is making its first appearance in an official IBM
version.  This utility can create object libraries and update existing
ones.  Object modules can be added, deleted or replaced on existing
libraries.  A cross-reference listing of a library can be generated, and an
object module can be extracted from the library and placed into its own
.OBJ file.  This capability is extremely welcome as it was awkward to build
a program from a number of separately compiled modules without it.

A new version of the linker program, 2.20, is included on the library
diskette.  This version supports single level overlays and program sizes of
up to 1 megabyte.  There is no new linker directive to support overlays.
Instead object modules to be placed in overlay are pre-processed with the
MKOVL.COM program.  The overlay loader PLOADER.OBJ is then included before
the main program in the LINK command line.  Each overlay is brought in
explicitly by calls to the LOADER function from the main program.  The
Reference Manual has a rather lengthy example of this for those who may
need the capability.  This feature works only for programs that run under
DOS 2.x; it will not work under DOS 1.1.

Several bugs and short-comings of the original Pascal Compiler have been
fixed in this release.  The bug where the sine function returned incorrect
values for negative angles has been fixed.  It is no longer necessary to
run CHKDSK to recover disk space after the compiler has terminated because
of some error in the source code.  The compiler and linker now set
ERRORLEVEL so that batch files can check for compile errors.  (You can even
set ERRORLEVEL from your Pascal program, if you happen to stumble across
the documentation on how to do it, hint:  see page 4-7).  The default for
the DEBUG compiler metacommand has been changed from ON to OFF.

I have not had a chance to recompile any major programs, yet.  I dug out my
old sine test program (which demonstrated the old SIN error) and ran it
through both compilers.  I used the REGMATH library and set DEBUG to OFF in
the source file to produce something like apples-to-apples comparisons.
This program does little more than print out the values for SIN and COS for
every 0.5 radian between -10 and 10 radians.  The results are:

                 Version 1.00  Version 2.00
                 __________________________

          Compile time     40 sec        44 sec
          Link time   1 min 4 sec  1 min 24 sec
          OBJ size      938 bytes     994 bytes
          EXE size    32384 bytes   31046 bytes
          Run time         22 sec         7 sec

This is more a measure of the speed of the new math routines than of the
generated code.  Still, this kind of speed up is very impressive.

The BYTE 'Sieve of Eratsthenes' test from the January 1983 issue gives a
slightly different picture of the two compilers:

                Version 1.0    Version 2.0
                __________________________

          Compile time     40 sec        44 sec
          Link  time       50 sec        51 sec
          OBJ size      816 bytes     867 bytes
          EXE size    32512 bytes   26966 bytes
          Run time         17 sec        16 sec

All these times are from the Norton TIMEMARK utility and thus include the
load time from a floppy disk.  The difference in the link and run times are
within the variation that one might expect from one run to another; that
is, no measurable speed difference.  The significant improvement here is in
the EXE file size.

The new documentation for Pascal is not only larger, it is better; IBM has
added a number of examples.  There is even an explanation of how to use the
DOSXQQ function; that was left as an exercise to the user last time.  There
are still a few oversights and omissions (like the setting of ERRORLEVEL
mentioned above) but your chances of finding the information you want and
of understanding it once you have found it are very much improved.

Although the compiler can produce code that will execute on any supported
configuration of PC, the compiler itself will only run under DOS 2.x, and
it requires at least 192KB of memory.  The manual suggests that object
modules created by the version 1.00 compiler should not be linked with
those created by the new compiler.  They include the FILKQQ and FILUQQ
modules.  The INC module has been replaced by FINK.INT and FINU.INT; so,
modules that included them will have to be changed before they will
compile.  The internal representation of floating point numbers has
changed; so, binary data files that contain floating point numbers cannot
be passed between programs compiled under the different versions.
Documentation on the Unit U function calls and the detailed FCB are no
longer included as IBM recommends that these interfaces not be used.

The list price for the new compiler is $350.  For a limited time, owners of
version 1.00 can order the upgrade from IBM for $100; your Authorized
Dealer has the forms for that right now.

[Editor's note:  A complete product announcement of the new Pascal version
2.0 appeared in the April issue of Exchange.]
The next message is:
   7: Why Pascal?                             11-05-1984 MIKE SCHNAPP
<R>ead, <N>ext, or <Q>uit? R
      (This message has been re-printed from the September Exchange)
                               Mike Schnapp
                     San Francisco IBM PC Users Group

If you are thinking  of making the effort to learn  a programming language,
you should  consider studying Pascal.   First-time students  of programming
who master this powerful language often  have a relatively easy time learn-
ing other languages. Some of the reasons for this are:


1.  Pascal is  self-documenting, which  may be  its most  important aspect.
    Programs written in it can be very  clear and concise. They are made up
    of English-like  sentences that  can be arranged  so you  can virtually
    read a finished program as if it were a novel or a cook book.

2.  Pascal  is an  unambiguous, structured  computer  language that  allows
    instructions  to   be  grouped   into  orderly   "sections"  that   are
    "self-explanatory," in  contrast to  an unstructured  language such  as
    BASIC.  The programs cane un-decipherable block with line numbers of up
    to  six digits  on  one side.   However, writing  a  program in  Pascal
    doesn't in any way guarantee that it will be readable, but it is easier
    to make it so.

3.  Pascal  can be  modularized  and it  allows  you  to build  definitions
    (called PROCEDUREs  and FUNCTIONs)  which can  be used  in other  defi-
    nitions.  These  customized  "modules"  can  be  used  again  in  later
    programs.

In my opinion, Pascal may be  the most influential contribution to program-
ming made in the  past 25 years and is not only  a programming language but
is also a statement of programming style.  Thus, one major aspect of Pascal
is its impact upon the way programs are conceived and composed. Pascal con-
tains  the very  best  of  several well  known  languages,  such as  BASIC,
FORTRAN, and COBOL.
The next message is:
   8: Parameter Transmission in Pascal        11-05-1984 BRUCE MILLER
<R>ead, <N>ext, or <Q>uit? R
        (This message was re-printed from the September Exchange)

                              Bruce W. Miller
                          Trumbull PC User Group

INTRODUCTION TO PARAMETERS:  A parameter is a variable that is used to pass
information between  different sections of  a program.  The  different sec-
tions or "subprograms" of a program  are called procedures and functions in
Pascal. They are similar to BASIC  subroutines and function definitions. In
some versions of BASIC, information can only be passed by means of "global"
variables, ones which may be used by any section of the program.

Since global variables can be altered by  any section of the program, there
is the  possibility that a  variable's value  could change by  mistake. For
instance, two sections of the program could use the same name for different
variables,  which  might  cause  unwanted  and  unpredictable  interactions
between the two sections. The use of  global variables also makes it diffi-
cult to write  independent modules. In modular  programming, each procedure
or function should have  only one path for data to enter,  and one path for
data to leave.

Parameters  help  control   the  flow  of  information  into   and  out  of
subprograms. Variables defined within the  subprogram are termed "local" in
that their value is  defined and changed only within the  subprogram. It is
more difficult for data to become scrambled  or altered by mistake by other
sections of  the program. Because parameters  standardize the way  in which
data enters and leaves a subprogram, it  is possible to reuse standard pro-
gram modules over and over in different programs.

An identifier  used when  a subprogram is  called is  known as  an "actual"
parameter. An identifier  used when a subprogram  is defined is known  as a
"formal" parameter.

Pascal parameters can be input-only; data can flow in to the subprogram but
cannot leave. Here is an example of a procedure declaration with a "pass by
value" parameter declaration; the type "real"  refers to the formal parame-
ter "num":

  procedure display(num:real);
  begin
    writeln('Your # is ',num);
  end;

When the procedure  "display" is called, the value of  the actual parameter
(variable or arithmetic expression) is passed to the formal parameter "num"
for use inside the procedure. For example:

  display(10.0/5.0);

The value  of the  expression is  2.0. Parameter  "num" will  take on  this
value.

Incidentally, the parameter "num"'s value can be changed locally inside the
procedure  without  affecting   any  variables  named  "num"   outside  the
procedure. For this reason "num" is called a "local variable".

Pascal parameters can be "input/output"; data can  flow in to or out of the
subprogram. Here is an  example of a procedure declaration with  a "pass by
reference" parameter  declaration (designated  by "var").  The type  "real"
refers to the formal parameter "doubleme".

  procedure twice(var doubleme:real);
   begin
     doubleme := 2.0 * doubleme;
   end;

When  the procedure  "twice"  is called,  the  formal parameter  "doubleme"
stands for the  actual parameter. Any modifications to  "doubleme" are made
to the formal parameter used when the procedure was called.

For example:

  radius := 3.0
  twice(radius);

The value of the actual parameter "radius" (3.0) is doubled when the formal
parameter  "doubleme" is  doubled.  This is  because  the formal  parameter
"doubleme" refers to the same place in  memory as the actual parameter "ra-
dius". When  passing by reference,  remember that  both the actual  and the
formal parameters must be variables.

Strings,  reals, characters,  integers, arrays,  records  and user  defined
types can all be passed as parameters. In some versions of Pascal even pro-
cedures and functions can be passed as parameters.

Parameters control the way  data flows in and out of  a subprogram allowing
it  to remain  a self-contained  module.   Modular programs  are easier  to
implement, debug and maintain than non-structured programs.
That's all the messages there are.
[INFO] Press <H>elp <I>ndex <R>ead <S>end <D>elete <C>hange or <Q>uit -->C
[INFO] Enter name of topic: (? for list; Q to quit) C
[INFO] Press <H>elp <I>ndex <R>ead <S>end <D>elete <C>hange or <Q>uit -->R
Please enter message number or date to BEGIN reading
(ENTER for all messages since last logged on, 1 to see all, or Q to quit)
>1
   1: Oh say can you 'C'                      12-05-1984 GLENN HUFF
    (This message was re-printed from the November issue of Exchange)

                             E. Glenn Huff
                     Raleigh Personal Computer Club

Historically, C  evolved at Bell  Laboratories from its  predecessor, B,
which evolved from yet an earlier language.  C is a language designed by
people who  write code, as opposed  to people who design  languages.  On
first look, it is obviously not a language intended for the casual user,
and certainly not  for the novice.  It  is not a language  that believes
you should be protected from yourself.

C  is a  very  terse, powerful  and  generally  fast language,  oriented
towards systems and utility programming  work.  C programs usually waste
very few characters in implementing a function.  A classic example is -

   strcopy(src,dest)     /* copy string src to string dest */

   char *src,*dest;      /* the parameters are pointers to characters */

   while (*dest++=*src++)   /* byte by byte copy until null delimiter */

This example  illustrates many  aspects in just  a few  lines.  It  is a
small code  fragment or  function, which  performs one  job.  Generally,
when the base C language lacks a capability, the capability can be added
by creating a library routine.  This keeps the language clean.

The parameter definition illustrates an  aspect of the language referred
to as typed pointers.  The prefix  asterisk indicates that the following
variable is  a pointer  to the  object of  type "character".   C handles
pointers very efficiently.

The "while"  clause illustrates  a powerful,  and sometimes  unsettling,
aspect of  the language, that of  side effects.  Whereas  languages like
PASCAL abhor the  notion of side effects, C features  them.  In essence,
the while clause  steps the pointers through the  source and destination
character strings, assigning the source  value to the destination value.
Since the string terminator is null (a byte of all zero bits), the value
of the expression is  non-zero as long as there are  additional bytes to
copy.  Since the value of the expression is determined prior to it being
tested, the terminating null  is also copied.  One last note  is the use
of  the  "++"  operator,  which  indicates  increment  after  using  the
variable.

The null statement,  which is the target of the  "while", is extraneous;
there's simply nothing  left to do since all the  function was performed
as a  consequence of  the test in  the while clause.   Some of  you will
appreciate this terseness as a thing of beauty and a joy forever.

So much  for a  description of the  terse and powerful  nature of  C.  I
think you see why C will never replace BASIC for the novice.

"But how would I ever get a C program to run?"  you might ask.  Frankly,
it is sometimes a bit of a  challenge, what with all those powerful side
effects.  Historically, I've used a  "self-built" trace, using I/O calls
to display  variable values at critical  points of the  program.  That's
crude, but it beats DEBUG at the  generated code level.  What it doesn't
even approach, though, is a source level debug tool, which can show var-
iables by  name and step  through the program a  SOURCE line at  a time,
optionally skipping the code in lower level functions at our whim.

With the  source level  DEBUG tool, instead  of wondering  what happened
when your latest marvel didn't run the  first time, you can step through
it one  source statement at  a time.  You  can examine the  variables by
name, arrays and  structures by name and subscript,  and try expressions
to see their result.

That's the type of tool that makes it easier to see C.  Not only does it
make programming  much more productive, it  is also a  valuable learning
aid.

Being  able  to see  the  variables  and  arrays/structures by  name  is
helpful.  If  you use C  and can get a  source level debugger  with your
compiler, by all means take a look at it.  You will be greatly rewarded.
That's all the messages there are.
[INFO] Press <H>elp <I>ndex <R>ead <S>end <D>elete <C>hange or <Q>uit -->Q























```
{% endraw %}

## MATH.DOC

{% raw %}
```
                  MATH EXTENDED PRECISION SUBROUTINES                                                                                                                                                                                                          



              Copyright 1984 Three Ring Publishing Company
                             P.O.  BOX 2633
                            Dublin, Ca 94568



These  routines were developed under the concept of CHEAPWARE;  that is,
a donation would be appreciated if you find them useful but only a  very
small one of $2.


                                SOAPBOX

The  large  discrepancy  between my source code price and my object code
price (see the fee schedule below) is similar to the difference  in  the
price of a single copy of a paperback book and the price of an exclusive
copyright for the same book.  Popular software off the shelf in a  store
ought  to  sell  for  $5  to $25, just as most books sell in that range;
while special purpose software (e.g.  compilers) will command  a  higher
price, just as do special purpose books (e.g.  legal references).


                          PRODUCT DESCRIPTION

This package contains a set of subroutines and a  demonstration  program
that  perform  64  bit  integer arithmetic for users of IBM PASCAL.  The
subroutines are supplied only in object module format, with  the  source
orderable  for  an  appropriate  fee.   Since version 1.0 and 2.0 object
modules are not compatible, both have been supplied.  Should you  desire
a  precision  other  than  64 bits (2**63 - 1) that can be ordered for a
small fee.  While any precision the compiler and  run  time  environment
can  support  is  theoretically  possible,  for  all practical purposes,
operations on numbers as large as 256 bits would probably take  an  hour
or more.


                              FEE SCHEDULE

Object Module Suggested Contribution ........................ $     2.00
Special Order Precision .....................................      25.00
Source Code License (single copy) ...........................   2,000.00
Source Code Sole Ownership ..................................  10,000.00










       Author:  Bill Ferreira, P.O. Box 2633, Dublin, CA 94568

                                  1







                  MATH EXTENDED PRECISION SUBROUTINES                                                                                                                                                                                                          

                            DISK OF CONTENTS                                                                                                                                                                                                                   




FILE NAME      DESCRIPTION
-----------    ---------------------------------------------------------

MATH.DOC       This documentation file for the MATH subroutine library.

MATH.INT       PASCAL interface for the MATH subroutine library.

MATH.OBJ       PASCAL v2.0 object module of MATH subroutine library.

MATHV1.OBJ     PASCAL v1.0 object module of MATH subroutine library.

MATHTEST.EXE   PASCAL v2.0 executable version of the combined MATH
               subroutine library and MATHTEST driver program.

MATHTEST.PAS   PASCAL driver program that demonstrates how to use the
               subroutine library.

------------------------------------------------------------------------




                    PRINTING THIS DOCUMENTATION FILE


This  file  may  be  printed  unmodified  on  printers  that support the
standard ASCII character set.


If  this  disk is in drive B, then just use the DOS copy command to copy
this file to the printer.

                       Ex:  A>copy b:math.doc prn
















       Author:  Bill Ferreira, P.O. Box 2633, Dublin, CA 94568

                                  2







                  MATH EXTENDED PRECISION SUBROUTINES                                                                                                                                                                                                          

                                OVERVIEW                                                                                                                                                                                                                       


The math extended precision subroutine library is comprised of a package
of  procedures  and functions to allow you to do basic math to a greater
degree of precision than supported by the IBM  PASCAL  compiler.   These
routines  are  written in IBM PASCAL and support 64 bit arithmetic (app.
+/- 9,223,000,000,000,000,000).  They support all 18 digit integers  and
most 19 digit integers.


The  algorithm  chosen is the one used at the lowest level of a computer
circuit.  The advantage of using this technique, is that  the  algorithm
is   already  proven,  and  the  only  exposure  for  error  is  in  the
implementation.  But since hardware is being simulated in software,  the
performance leaves something to be desired.


This  set of subroutines is also an example of the concept of "package",
so widely praised in the new ADA programming language.   It  is  obvious
that  the  implementers of the IBM PASCAL compiler are very cognizant of
the latest software engineering techniques, and have implemented one  of
the  most  important in their compiler.  In the `TO USE' section of this
document, you will see how they have implemented this feature.


There are seven routines for performing math operations.

     x_add   -  add two extended precision numbers
     x_comp  -  compare two extended precision numbers
     x_ctox  -  convert from character to extended precision
     x_div   -  divide two extended precision numbers
     x_mult  -  multiply two extended precision numbers
     x_sub   -  subtract two extended precision numbers
     x_xtoc  -  convert from extended precision to character


Three new types are supplied.

     xint        -  is the extended precision internal type.  It is used
                    for all calculations.
     xchar       -  is the character string that is the source or target
                    for the conversion procedures.
     xcomp_type  -  is the result of the extended precision compare.

One constant is also defined.

     xprecision  -  determines the precision of the subroutine package.






       Author:  Bill Ferreira, P.O. Box 2633, Dublin, CA 94568

                                  3







                  MATH EXTENDED PRECISION SUBROUTINES                                                                                                                                                                                                          

                          -----  TO USE  -----                                                                                                                                                                                                                 



The best example of how to use the package is to  see  the  sample  test
program  (MATHTEST.PAS).   However,  the following instructions separate
out the  pieces  for  those  of  you  not  familiar  with  IBM  PASCAL's
`interface' and `implementation'.


MATH.INT - interface

This  file contains the standard definition of all the components of the
subroutine package.  You include this  in  your  program  by  using  the
$include metacommand.

Example:  {$include:  'A:MATH.INT'}
          program YOUR_PROGRAM (input, output);
          uses MATH;


This  same  file  was `included' in the subroutine package, so it is not
possible to get out of sync without trying.


You should notice, the interface contains a statement called  a  `unit'.
This statement has a label of `math'.  By saying that your program `uses
math', you make all of the components listed  on  the  `unit'  statement
available to your program.  You now have access to all the components in
this package you might find useful, and to none of the  components  that
would   allow   you  to  damage  the  package,  either  accidentally  or
deliberately.  As you can readily see, this concept is a significant aid
for the production of reliable programs.


You  may  now  reference  all  the  components of the unit as if you had
written them as part of  your  program.   The  following  is  a  trivial
program  (that  has  not  been compiled or tested, so it may have syntax
errors), which  illustrates  the  enclosed  MATH  `interface'  and  MATH
subroutine package.














       Author:  Bill Ferreira, P.O. Box 2633, Dublin, CA 94568

                                  4







                  MATH EXTENDED PRECISION SUBROUTINES                                                                                                                                                                                                          

                      -----  SAMPLE PROGRAM  -----                                                                                                                                                                                                             


     "A program to add two numbers read from the terminal"


{$include: 'A:MATH.INT'}

program ADD (input, output);

uses MATH;

var  a,b,c:           XCHAR;
     xa,xb,xc:        XINT;
     overflow:        boolean;

begin

     readln (input, a);
     readln (input, b);

     X_XTOC (a, xa, overflow);

     if overflow = true  then begin
        writeln ('value a - out of range');
        return
        end;

     X_XTOC (b, xb, overflow);

     if overflow = true  then begin
        writeln ('value b - out of range');
        return
        end;

     X_ADD (xa, xb, xc, overflow);

     if overflow = true  then begin
        writeln ('sum of a + b out of range');
        return
        end;

     X_XTOC (xc, c);

     writeln (a, ' + ', b, ' = ', c);

end.







       Author:  Bill Ferreira, P.O. Box 2633, Dublin, CA 94568

                                  5







```
{% endraw %}

## VIDEO.ASM

{% raw %}
```
;  COPYRIGHT 1982 BY WALTER H RAUSER
       PAGE 50,80
TITLE VIDEO2  -- PASCAL PROCEDURE FOR VIDEO IO
;
;PROCEDURE VIDEO( AX2DX:ARRAY[1..4] OF WORD); EXTERN;

;
;FRAME STRUCTURE
;OFFSET   LEN    VARIABLE DEF
;                see Tech Ref Manual, page A-43 for definitions
;[BP]+ 6   2     AX_DX  - VarP to 8 byte array/record; 
;                (low)  AL,AH,BL,BH,CL,CH,DL,DH (high memory)
;      4   2     SEGMENT FOR RETURN ADDRESS
;      2   2     OFFSET  FOR RETURN ADDRESS
;[BP]+ 0   2     OLD FRAME POINTER
;
;
WHR1   SEGMENT  PARA  PUBLIC  'CODE'
       ASSUME   CS:WHR1    ;DS:DGROUP,SS:DGROUP
       PUBLIC   VIDEO
;
VIDEO  PROC FAR
       PUSH BP          ;old frame pointer
       MOV BP,SP        ;new frame pointer
       MOV SI,[BP].6    ;addr of reg array
       MOV AX,[SI].0    ;load AX
       MOV BX,[SI].2    ;load BX
       MOV CX,[SI].4    ;load CX
       MOV DX,[SI].6    ;load DX
;
       INT 10H          ;VIDEO_IO in BIOS, A-43
;                       ;flags not on stack
;
       MOV SI,[BP].6    ;addr of reg array
       MOV [SI].0,AX    ;return AX
       MOV [SI].2,BX    ;return BX
       MOV [SI].4,CX    ;return CX
       MOV [SI].6,DX    ;return DX
;
       POP BP           ;restore frame pointer
       RET 2            ;pop parameters
VIDEO  ENDP
WHR1   ENDS
       END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0036

     Volume in drive A has no label
     Directory of A:\

    TABSET1  PAS      2560   1-07-83  10:03a
    TABSET2  PAS      2944   1-07-83   9:55a
    TIMM     PAS      1152   1-01-80   6:14p
    TIMI     PAS       512   1-01-80   6:05p
    TIMU     PAS      1792  11-20-82   9:36a
    SCREEN   PAS      1152   1-07-83  11:23a
    PRINTER  PAS     10410   2-28-82
    PARSE    P        1531   2-28-82
    INDEX    P         279   2-28-82
    DSNAME   P         681   2-28-82
    XREF     PAS     22043   2-05-82
    COPYFILE PAS       458   8-25-82
    DUMPFILE PAS      1710   8-28-82
    UNSQ     PAS      4603  10-23-82  10:02a
    PRETTY   PAS       384   1-07-83  12:35p
    PARTA    PAS     11275   3-08-84  11:05p
    PARTB    PAS     11534   3-08-84  11:06p
    PARTC    PAS      8542   3-08-84  11:07p
    GETDIR   PAS      2304   8-26-82
    GETDIR   OBJ      2337   8-26-82
    GETSEC   ASM      2560   8-26-82
    GETSEC   OBJ       111   8-25-82
    TOOLS    PAS     12288   1-09-85   2:22a
    VIDEO    ASM      1351   6-20-82
    PASCLG   BAT       256   6-12-82   4:25p
    PASCL    BAT       256   6-12-82   4:25p
    PASC     BAT       256   6-12-82   4:25p
    FLUSH    BAT       128   9-25-82   9:30a
    BUILD    PAS      4224   3-08-83   2:00p
    --------             2   8-05-84   7:28a
    MATH     DOC     10522   7-06-84   1:13p
    MATH     INT      1777   7-05-84  12:02p
    MATH     OBJ      5958   7-05-84   2:40p
    MATHV1   OBJ      6913   7-05-84   2:20p
    MATHTEST PAS      5662   7-05-84   1:56p
    OKIDATA  PAS      7086   7-01-84  12:45p
    CL-LST   BAT        33   2-23-85   8:05a
    CL       BAT        31   2-23-85   9:54a
    C        BAT        21   2-23-85   9:55a
    VIDEO    OBJ       100   2-23-85   2:28p
    C-LST    BAT        23   2-23-85   8:57a
    SCREENC  PAS      1113   2-23-85   9:41a
    BUILD    EXE     29646   2-23-85   8:59p
    MERGE    EXE     30446   2-24-85  10:57a
    CLEAN    BAT        55   2-23-85  12:22p
    CONTENTS TXT      5782   2-23-85   4:19p
    MERGE    PAS      4096   3-08-83   2:00p
    IBMPAS   DOC     31414   1-07-85   5:24p
    SIDEWAYS PAS      3571   8-28-84  12:39p
           49 file(s)     253884 bytes
                           38912 bytes free
