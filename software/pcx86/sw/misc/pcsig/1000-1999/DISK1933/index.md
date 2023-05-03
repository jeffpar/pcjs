---
layout: page
title: "PC-SIG Diskette Library (Disk #1933)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1933/
preview: https://pcsigdisks.pcjs.org/pcx86/sw/misc/pcsig/1000-1999/DISK1933/DISK1933.jpg
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1933"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "OVL312"

    OVL is a powerful overlay manager system for use with Microsoft LINK.
    Overlays are portions of program code which are loaded from disk into
    memory on an "as-needed" basis.  Overlays allow a very large program to
    use a relatively small amount of memory.
    
    LINK.EXE, Microsoft's Overlay Linker, included with MS-DOS and Microsoft
    languages, versions 3.x, 5.x, and some 2.x versions, allow creation of
    overlaid programs.  However, LINK only inserts software interrupts and
    some overlay information in the program for an overlay manager to use.
    LINK doesn't provide the actual code that loads the proper overlay from
    disk and passes control to it.  That's a job for an overlay manager, and
    that's where the OVL overlay managers come in.
    
    OVL "manages" overlays.  OVL loads overlays from disk at the appropriate
    time and jumps program execution to the overlay code.  OVL managers have
    been tested with MASM 4.0 and 5.0; Turbo C 1.0, 1.5 and 2.0; QuickBASIC
    4.0 and 4.5; Microsoft's BASCOM 6.0; and Clipper (PRONK.EXE, an included
    support utility, must be used with Clipper programs).  Other languages
    that compile to standard Microsoft Overlay LINKable object modules may
    also work with OVL.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1933.TXT

{% raw %}
```
Disk No: 1933                                                           
Disk Title: OLV312                                                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: OLV312                                                   
Author Version: 3.12                                                    
Author Registration: $80.00                                             
Special Requirements: Other programming software and MicroSoft Link.    
                                                                        
OVL is a powerful overlay manager system for use with Microsoft LINK.   
Overlays are portions of program code which are loaded from disk into   
memory on an ``as-needed'' basis.  Overlays allow a very large program  
to use a relatively small amount of memory.                             
                                                                        
LINK.EXE, Microsoft's Overlay Linker, included with MS-DOS and Microsoft
languages, versions 3.x, 5.x, and some 2.x versions, allow creation of  
overlaid programs.  However, LINK only inserts software interrupts and  
some overlay information in the program for an overlay manager to use.  
LINK doesn't provide the actual code that loads the proper overlay from 
disk and passes control to it.  That's a job for an overlay manager, and
that's where the OVL overlay managers come in.                          
                                                                        
OVL "manages" overlays.  OVL loads overlays from disk at the appropriate
time and jumps program execution to the overlay code.  OVL managers been
tested with MASM 4.0 and 5.0; Turbo C 1.0, 1.5 and 2.0; QuickBASIC 4.0  
and 4.5; Microsoft's BASCOM 6.0; and Clipper (PRONK.EXE, an included    
support utility, must be used with Clipper programs).  Other languages  
that compile to standard Microsoft Overlay LINKable object modules MAY  
also work with OVL.                                                     
                                                                        
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
║                   <<<<  Disk #1933  OVL312  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Use PKXARC to extract files onto your hard drive.                       ║
║                                                                         ║
║ To print documentation, type: COPY OVL.DOC PRN                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## BNEST1.BAS

{% raw %}
```bas
sub nest1(i) static
	print:print"in nest1";i;
	for j=0 to 1
		call nest2(j)
	next j
end sub
```
{% endraw %}

## BNEST2.BAS

{% raw %}
```bas
sub nest2(i) static
	print:print"in nest2";i;
	for j=0 to 1
		call nest3(j)
	next j
end sub
```
{% endraw %}

## BNEST3.BAS

{% raw %}
```bas
sub nest3(i) static
	print:print"in nest3";i;
	for j=0 to 1
		call nest4(j)
	next j
end sub
```
{% endraw %}

## BNEST4.BAS

{% raw %}
```bas
common shared b

sub nest4(i) static
	print:print"in nest4";i;
	print:print "Value of b variable is "b;
	b=b+1
end sub
```
{% endraw %}

## DOGGEREL.TXT

{% raw %}
```
***************************************************************************
*                                                                         *
*                     Ringo is a moronic dog,                             *
*                     has the braincase of a frog.                        *
*                     He's so stupid that you see,                        *
*                     has the IQ of a flea.                               *
*                                                                         *
***************************************************************************
```
{% endraw %}

## MASMTEST.ASM

{% raw %}
```
;DOSSEG
.MODEL	large
.STACK	100h

PUBLIC ov1message,ov2message,ov3message,mainproc

EXTRN ov1:PROC,ov2:PROC,ov3:PROC

.CODE

start:
	mov	ax,dgroup
	mov	ds,ax
	mov	dx,offset message
	mov	ah,9
	int	21h
	call	ov1
	call	ov2
	call	ov3
	mov	ax,4c00h
	int		21h

mainproc	PROC
	mov	dx,offset mainmessage
	mov	ah,9
	int	21h
	ret
mainproc	ENDP

.DATA
	message db 13,10,"Hello from Masmtest.",13,10,'$'
	ov1message db 13,10,"Hello from Overlay 1.",13,10,'$'
	ov2message db 13,10,"Hello from Overlay 2.",13,10,'$'
	ov3message db 13,10,"Hello from Overlay 3.",13,10,'$'
	mainmessage db 13,10,"Hello from Mainproc.",13,10,'$'

	END		start
```
{% endraw %}

## MULTA.ASM

{% raw %}
```
.MODEL	large

.DATA

EXTRN messa:FAR

.CODE

PUBLIC	multa

multa	PROC
	call	far ptr temp
	ret
	db	20000 dup (?)
multa	ENDP

temp	proc
	jmp	far ptr temp2
	db	20000 dup (?)
temp2:
	mov	ax,SEG messa
	mov	ds,ax
	mov	dx,offset messa
	mov	ah,9
	int	21h
	ret
temp	endp

	END
```
{% endraw %}

## MULTB.ASM

{% raw %}
```
.MODEL	large

.DATA

EXTRN messb:FAR

.CODE

PUBLIC	multb

multb	PROC
	call	far ptr temp
	ret
	db	20000 dup (?)
multb	ENDP

temp	proc
	jmp	far ptr temp2
	db	20000 dup (?)
temp2:
	mov	ax,dgroup
	mov	ds,ax
	mov	dx,offset messb
	mov	ah,9
	int	21h
	ret
temp	endp

	END
```
{% endraw %}

## MULTC.ASM

{% raw %}
```
.MODEL	large

.DATA

EXTRN messc:FAR

.CODE

PUBLIC	multc

multc	PROC
	call	far ptr temp
	ret
	db	20000 dup (?)
multc	ENDP

temp	proc
	jmp	far ptr temp2
	db	20000 dup (?)
temp2:
	mov	ax,_data
	mov	ds,ax
	mov	dx,offset messc
	mov	ah,9
	int	21h
	ret
temp	endp

	END
```
{% endraw %}

## MULTD.ASM

{% raw %}
```
.MODEL	large

.DATA

EXTRN messd:FAR

.CODE

PUBLIC	multd

multd	PROC
	call	far ptr temp
	ret
	db	20000 dup (?)
multd	ENDP

temp	proc
	jmp	far ptr temp2
	db	20000 dup (?)
temp2:
	mov	ax,dgroup
	mov	ds,ax
	mov	dx,offset messd
	mov	ah,9
	int	21h
	ret
temp	endp

	END
```
{% endraw %}

## MULTEST.ASM

{% raw %}
```
DOSSEG
.MODEL	large
.STACK	100h

PUBLIC messa,messb,messc,messd

EXTRN multa:PROC,multb:PROC,multc:PROC,multd:PROC

.CODE
start:
	mov	ax,dgroup
	mov	ds,ax
	mov	dx,offset message
	mov	ah,9
	int	21h
	mov	ah,1		; keyboard input with echo
	int	21h
	and	al,0dfh		; upshift lowercase chars
	cmp	al,65		; 'A' keypress
	jne	nota
	call	multa
	jmp	short start
nota:
	cmp	al,66		; 'B' keypress
	jne	notb
	call	multb
	jmp	short start
notb:
	cmp	al,67		; 'C' keypress
	jne	notc
	call	multc
	jmp	short start
notc:
	cmp	al,68		; 'D' keypress
	jne	notd
	call	multd
	jmp	short start
notd:
	cmp	al,81		; 'Q'
	jne	start		; invalid keypress, reloop
	mov	ax,4c00h	; terminate with errorlevel 0
	int		21h

.DATA
	message db 13,10,"Press A,B,C,D or Q to quit: ",'$'
	messa db 13,10,13,10,"Now in process A",13,10,'$'
	messb db 13,10,13,10,"Now in process B",13,10,'$'
	messc db 13,10,13,10,"Now in process C",13,10,'$'
	messd db 13,10,13,10,"Now in process D",13,10,'$'

	END		start
```
{% endraw %}

## OV1.ASM

{% raw %}
```
.MODEL	large

.DATA

EXTRN ov1message:FAR,mainproc:FAR

.CODE

PUBLIC	ov1

ov1	PROC
	mov	dx,offset ov1message
	mov	ah,9
	int	21h
	call	mainproc
	ret
ov1	ENDP
	
	END
```
{% endraw %}

## OV2.ASM

{% raw %}
```
.MODEL	large

.DATA

EXTRN ov2message:FAR

.CODE

PUBLIC	ov2

ov2	PROC
	mov	dx,offset ov2message
	mov	ah,9
	int	21h
	ret
ov2	ENDP
	
	END
```
{% endraw %}

## OV3.ASM

{% raw %}
```
.MODEL	large

.DATA

EXTRN ov3message:FAR

.CODE

PUBLIC	ov3

ov3	PROC
	mov	dx,offset ov3message
	mov	ah,9
	int	21h
	ret
ov3	ENDP
	
	END
```
{% endraw %}

## OVL.DOC

{% raw %}
```





                         ======================
                         OVL 3.12 DOCUMENTATION
                         ======================



     LICENSE AND WARRANTY
     --------------------

     OVL copyright 1988, 1989 by Michael E. Devore.  All rights
     reserved.

     The copyright holder licenses you to use, copy, and distribute
     OVL files for yourself and others subject to the following four
     restrictions:


     1.  The OVL package must be copied and distributed only in its
         original, unmodified form.  This includes the documentation,
         executable, source, object, and all example files.

     2.  No fee or other compensation can be charged for copying or
         distributing the program files.  The only exceptions are
         user groups and incorporated public domain or shareware
         software distributors who may charge a handling fee for its
         distribution NOT TO EXCEED $8.00 PER COPY.  ONLY ONE COPY
         PER COMPUTER DISK IS ALLOWED FOR SUCH DISTRIBUTION.

     3.  OVL files may NOT be distributed in combination with any
         other products, software or hardware, without the express
         written permission of Michael E. Devore.

     4.  OVL files are for your personal use only and may NOT be used
         for commercial applications.  See the PROVL program
         description in this documentation file if you need to use a
         version of the OVL overlay manager package commercially or
         need a custom version of OVL.


     There is no warranty of any kind with OVL and the copyright
     holder is not liable for any damages of any kind whatsoever,
     directly or indirectly, that may occur due to use of, or
     inability to use, this software.  By using or distributing OVL
     you agree to these terms.  If you do not agree to these terms,
     you may not use or distribute OVL.

     It is the copyright holder's intention to fix any errors in OVL
     and to allow both its noncommercial use and distribution free of
     charge.  The copyright holder, however, is NOT LEGALLY OBLIGATED
     TO DO SO.

     This documentation copyright 1988,1989 by Michael E. Devore.
     All rights reserved.



     OVL files                                        page 1 of 2



     OVL FILES
     ---------

     Included in the OVL package should be the following files:

     OVL.DOC        (OVL documentation file)
     LINKOVL.OBJ    (standard OVL overlay manager)
     OVLSTONE.OBJ   (modifiable OVL overlay manager)

     MAPOVL.EXE     (Overlay mapping utility, executable)
     MAPOVL.C       (Turbo C source code for the MAPOVL program)

     SCULPT.EXE     (Utility needed to use the OVLSTONE overlay
                     manager, executable)
     SCULPT.C       (Turbo C source code for the SCULPT program)

     SPLIT.EXE      (Separate overlay files utility, executable)
     SPLIT.C        (Turbo C source code for the SPLIT program)

     PRONK.EXE      (Utility to allow use of Clipper or indirect
                     calls to overlays with OVL)

     MASMTEST.ASM   (MASM compatible assembly language example files)
     MASMTEST.OBJ
     OV1.ASM
     OV1.OBJ
     OV2.ASM
     OV2.OBJ
     OV3.ASM
     OV3.OBJ

     COW.C          (C example files)
     FARM.C
     HORSE.C
     PIG.C
     PIGLET.C
     SHEEP.C

     QBNEST.BAS     (QuickBASIC 4.x and BASCOM 6.x example files)
     BNEST1.BAS
     BNEST2.BAS
     BNEST3.BAS
     BNEST4.BAS

     PRTEST.ASM     (MASM compatible assembly language example files
     PRTEST.OBJ      for PRONK demonstration)
     PTEST2.ASM
     PTEST2.OBJ
     PTEST3.ASM
     PTEST3.OBJ



     OVL files                                        page 2 of 2



     MULTEST.ASM    (MASM source code to multiple overlay area
     MULTA.ASM       demonstration program)
     MULTB.ASM
     MULTC.ASM
     MULTD.ASM

     MULTEST.EXE    (Demonstration program to show use of multiple
                     overlay areas)

     DOGGEREL.TXT   (Alternate loading message example for SCULPT)



     What is OVL?                                     page 1 of 2



     What is OVL?
     ------------

     OVL is a powerful overlay manager system for use with Microsoft
     LINK.  So what is an overlay manager and what good is it?  To
     answer that question we first need a little background on what
     overlays are and why they are useful.

     Overlays are portions of program code which are loaded from disk
     into memory on an as-needed basis.

     Use of overlays allows an extremely large (potentially equal to
     hard disk capacity) program to run in a much smaller amount of
     memory.  Code from the program's .EXE file is brought in from
     disk (overlaid) only when the program needs it.  Since all
     overlays share the same memory space, the memory requirements
     can be much less than the total code size of the program.  Also,
     there is no longer a need for the messy chaining, spawning, or
     exec'ing to another program that some languages require.

     There is a tradeoff for these advantages.  The tradeoff is the
     time and code overhead necessary to read overlays in from disk.
     If you make the decision to use overlays with your program, any
     timing critical code should not be divided between overlays.
     For most applications, though, the relatively small amount of
     time it takes to read in an overlay from disk is not important
     if transfers to overlays are not overdone or poorly timed.
     Constant shuttling between overlays is an exercise guaranteed to
     give disappointing results.  A little bit of thought will go a
     long way towards efficient overlay operation.

     LINK.EXE, Microsoft's Overlay Linker, included with MS-DOS and
     Microsoft languages, versions 3.x, 5.x, and some 2.x versions,
     allow creation of overlaid programs.  However, LINK only inserts
     software interrupts and some overlay information in the program
     for an overlay manager to use.  LINK doesn't provide the actual
     code that loads the proper overlay from disk and passes control
     to it.  That's a job for an overlay manager, and that's where
     the OVL overlay managers come in.

     OVL "manages" overlays.  OVL loads overlays from disk at the
     appropriate time and jumps program execution to the overlay
     code.

     Beginning with version 2.2, OVL supports use of multiple overlay
     areas.  To see detailed examples of how to use this option and
     why it is useful, read the section entitled 'USING MULTIPLE
     OVERLAY AREAS (Advanced Operation)'.



     What is OVL?                                     page 2 of 2



     Version 3.0 of OVL introduced a linkable version of OVL called
     LINKOVL.OBJ in addition to the OVL.EXE standalone version.
     Several options were added with version 3.0, including support
     for a overlay log file for debugging purposes, support of
     separate overlay files, and a couple of other options.  Examples
     and a description of these options are covered in the 'COMMAND
     LINE OPTION //x (Advanced Operation)' and 'OTHER COMMAND LINE
     OPTIONS (Advanced Operation) sections.

     Version 3.12 of OVL eliminates the obsolete stand-alone version
     of OVL previously available as OVL.EXE.  In OVL.EXE's place
     version 3.12 adds another linkable overlay manager, called
     OVLSTONE.OBJ, that eliminates the use of runtime switches and
     adds some unique enhancements of its own.

     If you are or become completely overwhelmed at the size or
     complexity of OVL, be sure to read the 'TOO LARGE!  DOESN'T WORK
     WITH MY DEBUGGER!  TOO COMPLICATED!  PROVL TOO EXPENSIVE!'
     section for an alternative to the OVL overlay managers.



     System requirements                              page 1 of 1



     SYSTEM REQUIREMENTS
     -------------------


     The OVL package requires an IBM PC or PS/2 microcomputer or
     close compatible with MS-DOS or PC-DOS operating system version
     2.1 or later.  A copy of Microsoft's Overlay Linker version 3.06
     or later, or a version of Microsoft's Object Linker version 3.00
     or later, or a version of Microsoft's Segment-Executable Linker
     version 5.x, is needed to link together the object modules of
     the overlaid program.

     In their standard configurations LINKOVL.OBJ and OVLSTONE.OBJ
     require 14K (kilobytes) RAM, in addition to the memory
     requirements of the overlaid program.  Use of multiple overlay
     areas or increasing the relocation table buffer size with OVL's
     /ZB option will increase memory requirements above the standard
     configurations.  The /ZBn option can also be used to reduce the
     default memory requirement by 1K.



     OVL specifications and requirements          page 1 of 2



     OVL SPECIFICATIONS AND REQUIREMENTS
     -----------------------------------

     NOTE:  Throughout this documentation, when both the LINKOVL and
     OVLSTONE overlay managers operate identically they will be
     generically referred to as OVL.

     *  LINKOVL.OBJ and OVLSTONE.OBJ have been tested with MASM 4.0
        and 5.0; Turbo C 1.0, 1.5 and 2.0; QuickBASIC 4.0 and 4.5;
        Microsoft's BASCOM 6.0; and Clipper (PRONK.EXE, an included
        support utility, must be used with Clipper programs).  Other
        languages that compile to standard Microsoft Overlay LINKable
        object modules MAY also work with OVL.

     *  Use of OVL with QuickBASIC 4.x and BASCOM 6.0 requires
        compiling the program with the /O option of BC.EXE.

     *  The object files created by versions of QuickBASIC earlier
        than 4.0 abort with an error if a link is attempted with
        overlays.  Therefore, OVL will NOT work with versions of
        QuickBASIC earlier than 4.0.  This is a limitation of the
        earlier versions of QuickBASIC and not an error or
        shortcoming in OVL.

     *  The Microsoft LINK object module preprocessor utility
        PRONK.EXE must be used if indirect calls to overlay code are
        required.  Otherwise, calls to a function or procedure FROM
        the root code TO overlay code, or from one overlay to another
        (INTERoverlay calls) MUST be direct, that is, not indirectly
        through a pointer.  This restriction is necessary because
        Microsoft LINK can only set up an interrupt invoking the
        overlay manager for direct calls to program code.  For
        assembly language programs this means that interoverlay calls
        to procedures must be coded as CALL ADDR, not CALL MEM/REG.
        For 'C', interoverlay function calls should be directly
        called, not called through a pointer to a function.  Calls
        within an overlay (INTRAoverlay calls), within the root code,
        or FROM an overlay TO the root can be made indirectly.
        QuickBASIC and BASCOM programs should not be affected by this
        restriction unless non-BASIC modules which use indirect calls
        to overlays are also linked in.  Clipper programmers must use
        PRONK whenever they use the LINKOVL.OBJ overlay manager.

     *  Microsoft LINK requires the presence of at least one overlay
        when linking LINKOVL.OBJ or OVLSTONE.OBJ with a program's
        object modules.  An attempt to link either overlay manager
        with a program that doesn't have at least one overlay will
        cause LINK to abort with several "Unresolved external"
        errors.

     *  OVL has a limit of twelve overlays in a program.  More than
        twelve overlays will cause OVL to abort with a "Too many
        overlays." error upon startup.  PROVL, the enhanced version
        of OVL, has a limit of 63 overlays -- LINK's current maximum.



     LINKOVL specifications and requirements          page 2 of 2



     *  OVL supports calls from one overlay to another (nesting).
        Overlays can be nested up to four levels.  An attempt to nest
        deeper than four overlays will cause OVL to abort with an
        "Overlays nested deeper than 4 levels." error.  PROVL
        supports a nesting depth of 32 levels.

     *  OVL requires use of the Microsoft LINK default overlay
        interrupt 63 (3fh).  Do not use the /OVERLAYINTERRUPT or /O
        option of LINK to change the overlay manager interrupt.
        PROVL supports changing the default overlay manager interrupt
        via the /O option of LINK.

     *  OVL will work with the /EXEPACK or /E option of LINK, if the
        program containing overlays is suitable for using the
        /EXEPACK option.  OVL will work with files packed using
        Microsoft's EXEPACK.EXE utility as well.

     *  OVL supports two overlay areas: the overlay area allocated by
        Microsoft LINK during the linking process and optionally one
        other overlay area.  If two overlay areas are used, memory
        allocation for the second overlay area is made in normal DOS
        memory.  As a result, the amount of memory available to the
        loaded program decreases.  This decrease, that is, the amount
        used by the second overlay area, is equal to the largest
        overlay file that will load into that overlay area rounded up
        to the next 512-byte block.  PROVL supports up to nine
        overlay areas.

     *  After your program has been linked with OVL, do NOT change
        the program's name.  OVL attempts to load overlays from the
        executable file name assigned during the linking process.  If
        the file name has been changed, OVL will abort with a "File
        not found." error when it tries to load an overlay.  To
        change the name of your program, you must relink the program
        using the new name for your executable file in the link
        syntax.

     *  LINKOVL uses the PATH environment variable when searching for
        the overlaid program or file.  If LINKOVL attempts to load an
        overlay and the program containing that overlay is neither in
        the current directory nor in a directory in the PATH
        variable, LINKOVL will abort with a "File not found." error.
 
     *  OVLSTONE uses the environment variable specified by the
        SCULPT.EXE utility when searching for the overlaid program or
        file.  If OVLSTONE attempts to load an overlay and the
        program containing that overlay is neither in the current
        directory nor in a directory listed in the SCULPT specified
        environment variable, OVLSTONE will abort with a "File not
        found." error.

     *  Both OVL overlay managers use a maximum of 24 bytes of the
        overlaid program's stack during their operation.



     Using LINKOVL.OBJ                                page 1 of 5



     USING LINKOVL.OBJ (Basic Operation)
     -----------------------------------

     To demonstrate how to use LINK to set up overlays with
     LINKOVL.OBJ three sample program modules have been included in
     the OVL package.  One set is written using MASM 5.0, another
     using Turbo C, and the third using QuickBASIC 4.x.

     As stated in the Microsoft LINK documentation, you MUST
     compile using a large code model for for your programs to work
     correctly with overlays.  For MASM 5.0, this means you must
     compile using .MODEL MEDIUM (far-code, near-data), .MODEL LARGE
     (far-code, far-data), or .MODEL HUGE (far-code, far-data).  If
     you are using an earlier version of MASM you need to make sure
     that PUBLIC procedures in overlays are declared FAR if they
     called by the root code or another overlay.  For Turbo C
     versions 1.x and 2.0, compile your files using the medium,
     large, or huge model.  QuickBASIC and BASCOM users must compile
     their program with BC.EXE using the /O option.  Microsoft's
     runtime program for BASIC, BRUNxx.EXE, will not work with the
     OVL package.  Clipper programmers should carefully read the
     'USING PRONK.EXE' section before using OVL on their programs.

     The first example will use the assembly language .ASM files
     MASMTEST, OV1, OV2, and OV3, written using Microsoft's MASM 5.0.
     Although the .MODEL LARGE is used for these example files,
     .MODEL MEDIUM and .MODEL HUGE should work in exactly the same
     fashion for overlaying purposes.  Since MASM requires no
     additional support .OBJ files, you can test the overlay managers
     with the MASM .OBJ files even if you do not have access to an
     assembler such as MASM.

     Link together the MASM .OBJ files, enclosing in parentheses the
     modules you want to be overlays.  Make sure that you use at
     create at least one overlay or the overlay managers will not
     work with the file you create.  If you link the object files
     together like this:

          link linkovl+masmtest+(ov1+ov2)+(ov3),masmtest;

     a standard .EXE file called MASMTEST.EXE will be created.
     MASMTEST.EXE will include the root .EXE file MASMTEST comprised
     of the code of the MASMTEST (and LINKOVL if it is used) object
     module and will also include two overlay files appended to the
     root .EXE file.  One overlay file will contain the code of the
     OV1 and OV2 modules, the other will contain the code of the OV3
     module.

     Typing MASMTEST at the command line causes the program to begin
     execution.  As program code is needed from an overlay, that
     overlay is loaded from disk, if necessary, and program execution
     continues.



     Using LINKOVL.OBJ                                page 2 of 5



     The amount of memory required to load the example file
     MASMTEST.EXE, or any file created by LINK using overlays, is
     equal to the size of the root file PLUS the size of the largest
     overlay file PLUS any program overhead and dynamic memory
     allocations made by the program plus OVL's overhead.  This
     brings up an important point.  There is no advantage to only
     using one overlay in a program since memory must be allocated
     for it during program execution anyway.  There is only the
     disadvantage of the overlay overhead.  In other words, while the
     link commands:

          link linkovl+masmtest+(ov1)+ov2+ov3,masmtest;

          link linkovl+masmtest+ov1+(ov2+ov3),masmtest;

          link linkovl+masmtest+(ov1+ov2+ov3),masmtest;

     are all valid, there is no useful purpose served by linking
     overlays in this fashion.  Use two or more overlay files in the
     link command.

     An example of linking with two overlays is:

          link linkovl+masmtest+(ov1)+(ov2)+ov3,masmtest;

     Here there will be two overlay files containing the code of,
     respectively, OV1 and OV2 and a root file containing the
     MASMTEST, OV3, and LINKOVL code.

     An example of linking with three overlay files is:

          link /exepack linkovl+masmtest+(ov1)+(ov2)+(ov3),masmtest;

     Three overlay files contain the code of OV1, OV2, and OV3.  The
     root file contains the MASMTEST and LINKOVL code.  The /EXEPACK
     or /E option of Microsoft's Overlay Linker shown in this example
     may successfully be used with those programs suitable for the
     option.

     Another example of linking with two overlays is:

          link linkovl+masmtest+(ov1+ov3)+(ov2),masmtest;

     Two overlay files contain the code of OV1 and OV3, and OV2.  The
     root file contains the MASMTEST and LINKOVL code.

     The only overlay combination not allowed by OVL is one where the
     the initial entry code object module(s) -- in this case the
     MASMTEST.OBJ and LINKOVL.OBJ modules -- are linked as an
     overlay.  Such startup code must be loaded in memory during the
     beginning of the program's execution.



     Using LINKOVL.OBJ                                page 3 of 5



     LINKOVL.OBJ users with large root .EXE files, especially Clipper
     programmers, should explore using EXEPACKed files.  Using the
     /EXEPACK option of Microsoft LINK will almost always result in a
     significantly smaller .EXE file with large files than if it is
     not used.  Remember that the EXEPACKed files will not reduce the
     memory requirements of a program.

     The second set of files are examples using Turbo C.  To use them
     you need to have a C compiler compatible with the Turbo C source
     files COW.C, FARM.C, HORSE.C, PIG.C, PIGLET.C, and SHEEP.C.  No
     .OBJ files are included due to the many different versions of C
     compilers available; object modules for C are usually compiler
     version specific.  Compile the source files with your own
     compiler.

     OVL is put a little more to the test here because the code is
     larger, parameters are passed to the overlays, a value is
     returned from a function, and a command line argument can be
     passed.  Further, in one module, PIG.C, overlays can be nested
     if the 'piglet' function that is called from it is located in a
     different overlay file.

     To create FARM.EXE with an overlay file containing the code of
     HORSE and PIGLET and an overlay file containing the code of
     COW, PIG, and SHEEP and a root containing the code of
     FARM and the start up code of C0M, you would link like this,
     assuming that the code has been compiled using the medium model:

          link linkovl+c0m+farm+(horse+piglet)+(cow+pig+sheep),farm,
          nul,emu+mathm+cm;

     After you link the program try running it by typing FARM and
     FARM MACDONALD to see the command line parameter in use.  All of
     the modules can be put in an overlay except for LINKOVL, C0M,
     and FARM which contain startup code.  Remember, you must use
     Microsoft's LINK when linking this or any other Turbo C program
     for use with OVL.  The copy of TLINK included with Turbo C does
     not support overlays.

     The final set of examples are QuickBASIC 4.x files.  Since
     QuickBASIC programs need a QuickBASIC library to link correctly,
     you must own or have access to QuickBASIC 4.x to try these
     example files.  Compile the source files with your BC.EXE
     program.  Almost all Basic module code commands are allowed in
     overlays.  The only known exception to allowed commands in an
     overlaid Basic module is any form of CHAINing, either from or to
     the module.  Other than that, only the standard rules for use of
     separate Basic modules apply.



     Using LINKOVL.OBJ                                page 4 of 5



     These QuickBASIC source files demonstrate how to use COMMON to
     share variables between more than one module if one module is in
     an overlay.  If you have many variables in your COMMONs, you may
     want to consider using $INCLUDE files to declare the variables.
     This will eliminate the need to retype variables in all the
     source modules if you make a change, and reduces the chance of
     erroneous entry.

     To really stretch OVL to its limits, link each of the BNEST
     modules in a separate overlay, like this:

     link linkovl+qbnest+(bnest1)+(bnest2)+(bnest3)+(bnest4),qbnest;

     This forces OVL to nest overlays to its four level maximum.

     To use your own QuickBASIC 4.x programs with overlays you should
     compile the files using BC.EXE.  Overlays will not work with the
     runtime file BRUNxx.EXE so the /O option must be used to compile
     QuickBASIC 4.x programs.

     Feel free to try any permutation of overlays allowed by these
     examples.  OVL should work with any of them as long as you stay
     within the restrictions already outlined.  It is especially
     important to remember not to put the initial entry code in an
     overlay.  The start up code must be in memory when the program
     is first loaded, i.e. in the root code.

     You may have noticed that these example files are all small
     enough to fit into memory without overlays.  You may even be
     asking yourself how you really know that OVL is bringing the
     overlays in as needed instead of sneaking everything in at once?

     First, you can try running a file linked with overlays without
     LINKOVL.OBJ.  If you do this your computer will probably lock up
     and need to be turned off or reset before it can be used again.
     This is because your program is using interrupt 63 which OVL
     hasn't initialized to point to code that manages the overlays.
     Your program tries to transfer control to whatever random
     address happens to be at the memory location that corresponds to
     the address at interrupt 63, leading to unpredictable results.

     The second test you can do is transfer the overlaid program to a
     floppy and disable any disk caching.  Now run the program.  You
     should see the floppy disk drive light come on during execution
     of the example program as overlays are loaded from disk.  For
     maximum effect you may want to link the example program using as
     many overlays as possible.



     Using LINKOVL.OBJ                                page 5 of 5



     It is important to understand how the use of overlays can affect
     a program's performance.  Time critical code should not be
     divided between two overlays.  Depending upon the speed of the
     disk drive used and the size of the overlay file, the time to
     load each overlay from disk can reach several seconds.
     Extremely time critical code should also not be divided between
     the root code and an overlay.  The execution time overhead of
     the overlay manager code can range from several microseconds up
     to a few milliseconds depending upon the computer used to
     run the overlaid program.

     There is NO time penalty involved in calling routines FROM a
     loaded overlay TO the root code or from one code module to
     another WITHIN the same overlay file.  There IS a time penalty
     in calling routines FROM the root code TO an overlay file.  This
     time penalty will range from several microseconds with an
     already loaded overlay file on a fast computer to several
     seconds with an overlay file that needs to be loaded on a
     computer with a slow disk drive.



     Using OVLSTONE.OBJ                               page 1 of 2



     USING OVLSTONE.OBJ and SCULPT.EXE
     ---------------------------------

     The OVLSTONE overlay manager works in a very similar fashion to
     the LINKOVL overlay manager (see the 'USING LINKOVL.OBJ'
     section).  However, OVLSTONE allows a programmer more -- and the
     user less -- control over the behavior of the overlay manager
     than LINKOVL does.

     To use OVLSTONE, you must first run the SCULPT.EXE utility.  The
     SCULPT utility builds a data file called $$ODATA.OBJ that needs
     to be linked in with OVLSTONE.OBJ when linking the overlaid
     program.

     SCULPT will display three fields that you can edit.  The first
     field is the Overlay File Path Environment String, with a
     default value of PATH=.  If you wish the OVLSTONE overlay
     manager to search directories for overlay files or programs in a
     different environment variable than PATH, change this field.

     For example, if you wish OVLSTONE to search a environment
     variable called OVERLAY for the overlay directories, enter
     OVERLAY= in this field.  If you do not wish OVLSTONE to search
     any environment variable for overlay directories, fill the field
     with blanks.

     The second field is the Sign-on Banner Text.  This is the text
     that the OVLSTONE overlay manager will display while it
     initially loads the overlaid program in addition to OVL'S
     copyright message.  The default text is "Loading....".  If you
     wish no text to be displayed during the overlaid program's
     startup, enter a blank field.

     Pressing the F9 key while in the Sign-on Banner Text field will
     toggle the field input to an ASCII file specification to use for
     the sign-on text.  The default file name is SIGN-ON.TXT.  If you
     wish to use a different file name, change the field to the file
     containing the text you wish to be displayed during the overlaid
     program's startup.  SCULPT will use up to the first 4096
     characters in a file as the sign-on text.  This text file is not
     used during the overlaid program's startup, its text is loaded
     by SCULPT and stored in the $$ODATA.OBJ file.  If SCULPT cannot
     find the ASCII file, it will give an error message.

     For example, enter DOGGEREL.TXT in the field as an ASCII file
     specification, replacing the default entry of SIGN-ON.TXT.  Link
     PROSTONE.OBJ and $$ODATA.OBJ in with your overlaid program.
     While PROSTONE loads your program you will see OVL's copyright
     message and a short verse about a pet who fully deserves the
     abusive comments.



     Using OVLSTONE.OBJ                               page 2 of 2



     The third field is the Command Line Switch(es) field.  Entries
     in this field correspond to the runtime command line switches or
     options used by the LINKOVL overlay manager.  OVLSTONE does not
     use or recognize runtime command line options.  It uses the
     entry or entries given in the SCULPT Command Line Switch(es)
     field.  The default command line option is /ZDOVERLAY.LOG.

     After you have completed entering the information in SCULPT,
     either press F10 to exit and save the changes made, or press the
     Escape key to exit without saving the changes.  If the F10 key
     is pressed, SCULPT will create a file called $$ODATA.OBJ
     containing the data you entered.  To use OVLSTONE, you must link
     in $$ODATA.OBJ.  If you do not link in $$ODATA.OBJ with
     OVLSTONE.OBJ, LINK will generate several unresolved externals
     errors and the OVLSTONE overlay manager will not work properly.

     The source to SCULPT.EXE is included in the OVL system as
     SCULPT.C.  SCULPT was written using version 2.0 of Borland's
     Turbo C using object module record information in the MS-DOS
     Encyclopedia.



     OVL multiple overlay areas                       page 1 of 4



     MULTIPLE OVERLAY AREAS (Advanced Operation)
     -------------------------------------------

     OVL supports two overlay areas.  This allows you to have two
     overlay files in memory at the same time, and for these overlay
     files to be swapped in and out without the other being affected.
     Why is this important?  Suppose you have two sections of
     initialization code in your program that operate independently
     of each other.  With only one overlay area, in order to reclaim
     the dead space after initialization is completed, you have to
     put both sections in one overlay file.  Even after one section
     is complete the other may still be in use, so each section must
     take up memory until both are finished.  With two overlay areas,
     you could overlay one section as soon as it is complete,
     allowing your program to run under smaller memory requirements.

     Such an example only scratches the surface of how two overlay
     areas can be used.  Another example is using separate overlay
     areas for code that runs two different peripherals.  For
     instance, one overlay area could be overlaid with a
     user-selected printer driver, and the other with a particular
     video driver.  Other examples will probably come to mind once
     you start thinking of ways to apply the idea.

     Information about which overlay file loads in which overlay area
     is passed via the command line.  There are two switches or
     options allowed, /A (or /a) and /B (or /b).  Do not intermix
     these switches with command line switches or options used by an
     overlaid program when using the LINKOVL overlay manager.

     If you are using the LINKOVL overlay manager, both LINKOVL's and
     the program's command line switches come AFTER the program name,
     with LINKOVL's switches coming first.  To differentiate between
     LINKOVL.OBJ and a program's command line switches you should use
     OVL's //x option described in the 'COMMAND LINE OPTION //X'
     section.

     The OVLSTONE.OBJ overlay manager does not use or recognize
     runtime command line switches.  All command line switches should
     be typed in the SCULPT.EXE utility.

     Each switch should be followed by one or more numbers separated
     by a comma, or range of numbers separated by a dash.  These
     numbers correspond to an overlay file.  Overlay files are
     numbered starting at 1 in the order that they were linked.  The
     /A and /B switches do not represent a particular overlay area,
     but rather differentiate which overlay files are loaded in one
     or the other overlay areas.  The specific overlay area used to
     load an overlay file is transparent to the enduser of the
     program.



     OVL multiple overlay areas                       page 2 of 4



     All files in the switch containing the largest overlay file will
     load in the standard overlay area designated by Microsoft LINK
     during the linking process.  All files listed in the other
     switch load in the second overlay area.  Such switches may be
     either explicitly or implicitly given.  Switches are explicit if
     they are listed in the actual command line, e.g. /A1.  They are
     implicit if an explicit switch does not list all of the overlay
     files; the remaining overlay files are assigned to the unlisted
     (implicit) switch by default.

     To demonstrate, if you linked the .OBJ files of the example
     QBNEST files in this manner (OVLSTONE.OBJ users should replace the
     'linkovl' object module with 'ovlstone+$$odata'):

          link linkovl+qbnest+(bnest1)+(bnest2)+(bnest4+bnest3),
          qbnest;

     you would have three overlay files.  Code for BNEST1 would be in
     overlay file number 1, BNEST2 would be overlay file number 2,
     and code for BNEST3 and BNEST4 would be in overlay file number
     3.  To run this program via OVL with the code from BNEST1,
     BNEST3, and BNEST4 in one overlay area and BNEST2 in the other,
     you would type:

          QBNEST /A1,3 /B2

     when using LINKOVL or

          QBNEST

     and specify a command line of /A1,3 /B2 in the SCULPT utility
     when using OVLSTONE.

     In this example, overlay files 1 and 3 load in the standard
     overlay area, since overlay file 3 is the largest, and overlay
     file 2 loads in the second overlay area.  Because the overlay
     switches do not correspond to an actual overlay area, the
     following command line would give exactly the same results, if
     you are using LINKOVL.OBJ as the overlay manager:

          QBNEST /B1,3 /A2

     OVLSTONE users would specify a command line of /B1,3 /A2 in
     sculpt. 

     NOTE:  Further examples in this documentation will assume use of
     the LINKOVL.OBJ overlay manager unless otherwise noted.  If you
     are using the OVLSTONE.OBJ overlay manager, substitute the shown
     command line options with the identical SCULPT.EXE Command Line
     Switch entries and in link examples replace LINKOVL with
     OVLSTONE+$$ODATA.



     OVL multiple overlay areas                       page 3 of 4



     Since any overlay files not listed with a switch are assigned to
     the switch not used, this command line would work identically to
     the previous two examples with LINKOVL.OBJ:

          QBNEST /A1,3

     The /B2 is implied by this command line.  This is why, if you
     use both the /A and /B switch of OVL, you MUST list all overlay
     files in the switches.  Otherwise, when OVL attempts to assign
     the overlay files not listed to an unused overlay area it finds
     both overlay areas used and returns an invalid overlay switch
     value error.  Using the same example:

          QBNEST /A1 /B2

     results in an invalid overlay switch value error because overlay
     file 3 is not listed and there are no unused overlay areas to
     assign it to.

     If all of the overlay files are listed with one switch, the
     advanced option second overlay area is effectively defeated.  In
     other words, if you put all of your overlay files in one overlay
     area there isn't any reason to have the second overlay area.
     While this may sound trite, it is relatively easy to overlook if
     you are depending upon an implicit switch.  For instance, the
     command line:

          QBNEST /A1-3

     is identical to:

          QBNEST

     and the second overlay area is not used.  Remember that ranges
     can be represented by a dash, so that /A1-3 is the same as
     /A1,2,3 (and /A1,2-3 or /A1-2,3 as well).

     Included with the OVL files is an program called MULTEST.EXE,
     created from the MASM source files MULTEST.ASM, MULTA.ASM,
     MULTB.ASM, MULTC.ASM, and MULTD.ASM.  The MULTEST.EXE program
     provides a graphic demonstration of the power of two overlay
     areas.  MULTEST.EXE has been padded with 160,000 extra bytes to
     increase load time to simulate operation under large file
     conditions.  The size of the resultant file also shows the
     overlay managers' ability to handle overlay files greater than
     64K.  MULTEST.EXE was created with two overlay files using the
     LINK command:

          link linkovl+multest+(multa+multb)+(multc+multd),multest;

     To best demonstrate the program, transfer a copy of MULTEST.EXE
     to a floppy disk and disable any disk caching.



     OVL multiple overlay areas                       page 4 of 4



     First try basic OVL operation, that is, type MULTEST.  After the
     program loads and displays the prompt, when you press the 'A',
     'B', 'C', or 'D' keys the floppy disk drive light will come on
     as overlays are loaded.  For example, if you first press the 'A'
     key, overlay file 1 will load from disk into memory.  At that
     point neither an 'A' or 'B' keypress will required a disk access
     because the overlay containing the code for process 'A' and 'B'
     is in memory.  If you press 'C' or 'D', the disk drive will be
     accessed again to load in overlay file 2.  Then either 'C' or
     'D' can be pressed without accessing the drive, but an 'A' or
     'B' keypress will reload overlay file 1.

     In short, under this arrangement 'C' and 'D' keypresses will
     swap out the overlay file containing the code for processes 'A'
     and 'B', and 'A' and 'B' keypresses will swap out the overlay
     file containing the code for the 'C' and 'D' processes.

     Now try typing MULTEST /A1.  This will cause overlay file 1 to
     load in one overlay area when its code is needed and overlay
     file 2 to load in the other.  The disk drive will be accessed
     the first time you press 'A' or 'B' and the first time you press
     'C' or 'D', but once both overlay files are loaded there will be
     no more disk accesses -- no matter which of the four keys you
     press and no matter what the order.

     A nice feature of multiple overlay areas and other command line
     options with LINKOVL is that their use is optionally under the
     control of the enduser.  The enduser may dynamically configure
     the program to best fit the memory and speed requirements of a
     specific environment without the need to relink the program, or
     access the object files.  In fact, when using multiple overlay
     areas -- unlike when using one overlay area -- assigning only
     one overlay to a particular overlay area can be advantageous.
     Endusers with large amounts of free memory will probably wish to
     use two overlay areas to keep as much code in memory as
     possible.  Those with less free memory may only be able to use
     one overlay area, paying for the lower memory requirement with
     more frequent disk accesses.  The identical version of a program
     can be used in both cases.  Only the command line arguments
     passed to it at runtime will differ.

     OVLSTONE, on the other hand, is better for those who know what
     overlay manager options they want their endusers to have and who
     do not need the flexibility of runtime configuration.  When
     using OVLSTONE, endusers do not have responsibility of supplying
     the proper command line options.  Of course, use of the OVLSTONE
     overlay manager is also required if a loading message or overlay
     directory environment variable different from PATH is needed.



     Command line option //x                          page 1 of 2



     COMMAND LINE OPTION //x (Advanced Operation)
     --------------------------------------------

     Programs that use the LINKOVL.OBJ overlay manager and command
     line options that begin with a '/' need a way to distinguish
     between the LINKOVL options and the program options.  This is
     handled by OVL's //x option, where 'x' can be any printable
     character except for the DOS special characters for input and
     output redirection and command piping, i.e. <, >, and |.

     The //x option changes the character recognized by OVL as the
     beginning of an option to a different character.  OVL stops
     scanning for options as soon as it encounters a character which
     is not one of its options, passing the remaining command line
     to the overlaid program.

     For example, if you had a program named RUNME.EXE that was
     linked with LINKOVL.OBJ and you needed to pass the command line
     options or switches /DEBUG and /X to the program and the command
     line options /A3 and /B1-2 to LINKOVL, you would use this command:

          RUNME /A3 /B1-2 //$ /DEBUG /X

     The //$ part of the command line directs LINKOVL to look for the
     '$' character for any further command line options.  When
     LINKOVL encounters the next '/' character, it stops looking for
     options and passes the remaining command line, /DEBUG /X, to the
     overlaid program.  The '$' character can be replaced in this
     example by any other character that would serve the purpose of
     forcing LINKOVL to stop scanning when it reaches a program
     option.

     Even if you only need to pass command line options beginning
     with a '/' to a program and not LINKOVL, you must still use the
     //x option.  Otherwise, LINKOVL has no way of determining that a
     particular option is not meant for its interpretation.  If you
     have a program that needs the command line option /BELL, but you
     wish to pass no options to LINKOVL, you would use this command:

          RUNME //x /BELL

     Again, the 'x' character can be replaced by other characters if
     it is necessary or desireable.



     Command line option //x                          page 2 of 2



     The //x option can be used more than once on a particular
     command line, changing the character OVL scans for as a
     beginning to an option each time it is encountered.  For
     example, if you wish to pass the command line options
     /ZDLOGFILE, /A1,2 and /ZS to OVL and the command line options
     /NON, /QS, and /LO to an overlaid program called RUNME, you
     could do it in this fashion:

          RUNME //* *ZDLOGFILE **& &A1,2 &&+ +ZS ++/ //# /NON /QS /LO

     Of course this is more complicated than necessary.  A more
     mundane approach would be:

          RUNME /ZDLOGFILE /A1,2 /ZS //# /NON /QS /LO

     the //# switch or option forcing OVL to stop scanning with the
     next '/' character.
 
     Although the OVLSTONE.OBJ overlay manager supports the //x
     option for consistency, there is no need to use it.



     Other command line options                       page 1 of 2



     OTHER COMMAND LINE OPTIONS (Advanced Operation)
     -----------------------------------------------

     There are three other command line options that the OVL overlay
     managers can use.  The three options are /ZD<filename>, /ZBn,
     and /ZS.  Following is a description of each.


     (1)  The /ZD<filename> option allows a user to specify a debug
     file that will timestamp and log the loading, access, or swap of
     each overlay.

     For example, to log overlays for a program called MYPROG.EXE
     with two overlay areas into a file called MYPROG.LOG, you could
     type MYPROG /A1 /B2-4 /ZDMYPROG.LOG at the DOS prompt.  A
     typical debugging log file for such a situation might look like
     this:

          09:15:06  Overlay 01  Loaded
          09:15:35  Overlay 02  Loaded
          09:16:07  Overlay 03  Swapped out Overlay 02
          09:17:12  Overlay 04  Swapped out Overlay 03
          09:20:14  Overlay 03  Swapped out Overlay 04
          09:24:00  Overlay 02  Swapped out Overlay 03
          09:33:53  Overlay 01  Accessed
          09:39:32  Overlay 02  Accessed
          09:54:17  Overlay 04  Swapped out Overlay 02
          09:55:40  Overlay 04  Accessed

     The timestamp comes first, then the overlay number being
     manipulated and the number of the overlay being swapped out, if
     any.   An overlay may either LOAD into an empty overlay area and
     be accessed, SWAP out another overlay in the overlay area it
     loads into and be accessed, or simply be ACCESSED, having been
     loaded during a previous call to the overlay.

     Devices such as LPT1 or CON are valid filenames for a log file.
     Preexisting log files will be appended to, rather than
     overwritten.

     There is no space between /ZD and the filename when using
     this option.



     Other command line options                       page 2 of 2



     (2)  The /ZBn option shrinks or increases the size of the buffer
     OVL allocates for reading the relocation table items in an .EXE
     file header.

     If the buffer allocation is too small, overlays will take
     somewhat longer to load because OVL will need to access the disk
     more than once to read in all of a relocation table.  If the
     buffer is too large, memory is wasted.  The 'n' following /ZB is
     the number of kilobytes allocated to the buffer and can be any
     number from 3 to 8.  The default buffer size is 4K (/ZB4).  This
     is a good compromise value and probably should not be changed
     unless you understand what the relocation table in a
     .EXE file is.  Overlay files with a very large relocation table
     may load somewhat faster if the buffer size is set to its
     maximum size of 8K, i.e. /ZB8.  Or, you can reduce the overlay
     managers' memory requirements by using a table size of 3K
     (/ZB3).  PROVL expands the allowed 'n' from 1 to 32.

     If you wish to use the /ZB option, the MAPOVL.EXE utility
     described in the 'Using MAPOVL.EXE' section may be helpful in
     selecting an appropriate buffer size for your application.

     Do NOT insert a space between /ZB and the number when specifying
     this option.


     (3)  The /ZS option directs OVL to recognize and load overlays
     from separate files.

     You must use the SPLIT.EXE utility to generate individual
     overlay files from an overlaid program created by Microsoft
     LINK.  See the 'USING THE SPLIT.EXE UTILITY' section in this
     manual for more information on separate overlay files and the
     SPLIT utility.

     NOTE:  All command line options are case insensitive.



     Using SPLIT.EXE                                  page 1 of 1



     USING SPLIT.EXE -- A Utility to Allow Separate Overlay Files
     ------------------------------------------------------------

     SPLIT.EXE is a utility that splits off the overlay .EXE files
     normally appended to the root .EXE file by Microsoft LINK.
     These overlay files have the same name as the root .EXE file
     with an extension of '001', '002', and so on up to the number of
     overlay files in the program.  You must use the /ZS option of
     OVL if you split separate overlay files off of the main .EXE
     file.  Otherwise OVL will abort with a "Bad EXE file signature."
     error when it searches for an overlay at the end of the root
     .EXE file.

     To use the SPLIT utility, type SPLIT and press return.  SPLIT
     prompts you for name of the file to split, then splits up the
     files, and terminates with a message showing how many overlay
     files were created.  You may bypass the filename question by
     typing SPLIT <program name>, e.g. SPLIT MYPROG, if MYPROG.EXE is
     the overlaid program to split up.  Accidentally running SPLIT on
     an already split up .EXE file is harmless, SPLIT will find no
     overlay files to split off and simply terminate.

     Separate overlay files are most useful when you need to avoid
     one large program .EXE file, e.g. due to available storage space
     on floppy disk.  In addition, since OVL automatically searches
     the entire PATH environment string for an overlay file if it
     doesn't find the file in the current directory, it is also
     possible to run overlays off of a different disk drive when the
     /ZS option is used.

     Because of the small increase in development time involved in
     running SPLIT, it is recommended that you not bother with
     splitting your program into separate overlay files until it is
     ready for enduser operation.

     The source to SPLIT.EXE has been included in the OVL package for
     your study or amusement.  The source file is SPLIT.C.  SPLIT was
     written using version 2.0 of Borland's Turbo C.



     Using MAPOVL.EXE                                 page 1 of 2



     USING MAPOVL.EXE
     ----------------

     The utility MAPOVL serves two purposes.  It reports on the
     actual code size of overlay files without their .EXE header to
     allow you to see what the memory requirements for particular
     overlay file and overlay area configurations are.  MAPOVL also
     displays the number of relocation table items in each overlay
     file so that you can choose the best /ZBn option for your
     particular situation.

     To use the MAPOVL utility, type MAPOVL and press return.
     MAPOVL prompts you for the name of the overlaid file to
     report on.  As with SPLIT.EXE, you may bypass the filename
     question by typing MAPOVL <program name>.  Do not use
     MAPOVL on a program which has already been had SPLIT.EXE
     run on it.  MAPOVL searches for overlay files at the end of
     the root .EXE file.

     Following is sample output from MAPOVL for a file called
     TEST.EXE with three overlays:


     Report on file test.exe
     =======================

     DATE:  5/09/1989
     TIME:  23:22:40

     Root file:  File size  87552 (15600 hex) bytes
         Relocation table    19 (13 hex) items,     76 (4c hex) bytes
         Unaffected by /ZBn option

     Overlay file  1:  File size  40448 (9e00 hex) bytes
         Relocation table  5803 (16ab hex) items,  23212 (5aac hex) bytes
         /ZBn option requires 'n' of 5 for no table reload

     Overlay file  2:  File size  80384 (13a00 hex) bytes
         Relocation table     6 (6 hex) items,     24 (18 hex) bytes
         /ZBn option requires 'n' of 1 for no table reload

     Overlay file  3:  File size  40448 (9e00 hex) bytes
         Relocation table 10003 (2713 hex) items,  40012 (9c4c hex) bytes
         /ZBn option requires 'n' of 40 for no table reload

     Overlay file 2 always loads into the standard overlay area.

     Report complete: 3 overlay files


     After printing the report header and the date and time of the
     MAPOVL run, MAPOVL reports on the root file.  This provides no
     information about overlays, but it is handy for comparison of
     root to overlay file size.



     Using MAPOVL.EXE                                 page 2 of 2



     Following the root file report, MAPOVL displays information
     about each overlay file that it finds.  First it reports on
     the true file size of the overlay file rounded up to the
     next 512 byte page.  This is the amount of memory that an
     overlay file will take up when loaded into an overlay area.
     Each overlay area will be large enough to accommodate the
     largest overlay file that loads there.

     After the file size information, MAPOVL displays the number
     of relocation table items and the byte size of the
     relocation table.  The byte size will always be four times
     the count of items.  MAPOVL uses this information to
     calculate the minimum /ZBn size that OVL needs to avoid
     having to reload the relocation table, slowing down the
     speed at which an overlay loads from disk.  /ZBn sizes are not
     cumulative, that is, if one file requires an 'n' of 5 for no
     table reload and another requires an 'n' of 6, /ZB6 will avoid a
     reload for either file.  If you have the memory to spare, you
     should use the /ZBn listed for best program performance.  If the
     recommended /ZBn is higher or lower than the allowed range, use
     the highest or lowest value allowed.

     Unless an overlay file is very large or has an extraordinary
     number of relocation table items, you will generally find that
     the default /ZB4 is sufficient to avoid a table reload for most
     situations.  Even if a reload is necessary, the extra delay is
     usually less than a second and often not noticeable to the
     program operator.

     The largest overlay always loads into the standard overlay
     area allocated by LINK.  MAPOVL shows which overlay loads
     into the standard overlay area.  This standard overlay area
     is a part of the root file size.  No additional memory
     allocations are needed for this overlay area, so the worst case
     memory allocation for the second overlay area will never be more
     than the size of the second largest overlay file, and then only
     if it loads in a different overlay area from the largest overlay
     file.

     The source to MAPOVL.EXE has also been included in the OVL
     package for those interested.  The source file is MAPOVL.C.
     MAPOVL was written using version 2.0 of Borland's Turbo C.



     Using PRONK.EXE                                  page 1 of 3



     USING PRONK.EXE
     ---------------

     PRONK is an object module preprocessor for Microsoft's Overlay
     Linker that allows LINK to properly set up indirect calls to
     overlay files.  Clipper programmers MUST use PRONK.EXE in
     conjunction with OVL and any overlaid program.  It is unknown
     whether PRONK.EXE works other overlay managers, such as the one
     that comes with Microsoft C.

     This 2.x version of PRONK greatly enhances the functionality of
     PRONK 1.x versions by removing the need to save and restore
     object modules modified by PRONK.

     PRONK directly reads and writes to object modules, creating
     an object module called $$MD.OBJ that is linked in with the
     other object modules in the link command.  Pass the same
     command line to PRONK that you normally pass to Microsoft
     LINK.  After PRONK has altered and created the necessary
     object modules, it automatically invokes LINK with the same
     command line passed to it except for '+$$md' added to the
     object file list.  The '+$$md' will be inserted as the
     second file in the object file list.

     The example PRTEST.ASM, PTEST2.ASM, and PTEST3.ASM source files
     show a variety of indirect calls to procedures.  If there were
     no indirect calls to procedures and you wanted to put PTEST2.OBJ
     and PTEST3.OBJ in an overlay, you could link in this fashion:

          link linkovl+prtest+(ptest2)+(ptest3),prtest;

     However since the object modules in this example contain
     indirect calls to overlay procedures, linking in this manner
     with Microsoft's Overlay Linker will not work.  Running PRTEST
     after linking like this will cause improper behavior when an
     indirect call to an overlay is made, and possibly lock up the
     computer.

     PRONK may be used in such cases to allow proper program
     operation.  This command line should be used for the previous
     example:

          pronk linkovl+prtest+(ptest2)+(ptest3),prtest;

     While PRONK is running it displays the names of the object
     modules that it has modified.  Not all object modules may need
     to be modified by PRONK, often it is necessary to modify only
     one or two.  After PRONK has finished, it automatically loads
     and runs LINK, displaying the command line it passes to LINK.
     The command line in this example is:

          link linkovl+$$md+prtest+(ptest2)+(ptest3),prtest;



     Using PRONK.EXE                                  page 2 of 3



     The PRTEST.EXE program created by PRONK should overlay
     correctly.  Notice that PRONK has created and added the file
     $$MD to the object file list passed to LINK.  This object file
     contains direct calls to publicly defined overlay procedures or
     functions, allowing LINK to properly set up the overlay manager
     interrupt.  Any preexisting object file called $$MD.OBJ in your
     current directory will be overwritten.

     PRONK also works correctly with response files or options in the
     LINK command line.  The following command is valid syntax for
     PRONK assuming that the PRRSP.LNK file exists and is in the
     current directory:

          pronk /exepack /nod linkovl+@prrsp.lnk;

     Note that if you use a response file that contains more than the
     object file list, this is, a map file, program name, or library
     list, you MUST place at least one object module outside of the
     response file.  PRONK always tries to place $$md.obj second in
     the object file list and such an arrangement will not work
     correctly if the first entry in the list is a response file
     which completes the object file list.

     PRONK correctly handles output file redirection for Microsoft
     LINK, although PRONK's copyright message, object modules
     modified message, and the command line passed to MS LINK will
     appear first in the redirected file.  PRONK will return an
     errorlevel of 1 to a batch file if it aborts with an error.

     PRONK reads each object file into memory and then rewrites it if
     any changes are necessary.  If PRONK is interrupted in the
     middle of its operation due to power failure or other
     circumstance, the possibility exists that an object module PRONK
     was writing to has been corrupted.  PRONK attempts to warn you
     of circumstances when object modules may have been corrupted,
     but such warning should not be depended upon as a surety.  If
     PRONK abnormally aborts, check the object modules modified list
     to see what files were modified and recompile or restore from
     backup those that were modified.  IF YOU HAVE ANY IRREPLACEABLE
     OBJECT MODULES, MAKE SURE THAT YOU HAVE ONE OR MORE BACKUP
     COPIES OF THOSE MODULES BESIDES THE COPY PRONK IS WORKING WITH.

     Unlike earlier versions of PRONK you can safely rerun PRONK with
     the same program object modules that have been modified on a
     previous PRONK pass.  PRONK will automatically recognize object
     modules that it has previously modified and make any necessary
     adjustments without operator intervention.  There is no need to
     save and restore the original object module as there there was
     with versions 1.x of PRONK.

     Because of this enhancement, modified object modules may
     slightly increase in size.  This size increase will not be
     reflected in the .EXE file created from the object modules.  It
     will remain the same size as before.



     Using PRONK.EXE                                  page 3 of 3



     You need not rerun PRONK if you change an object module
     unmodified by PRONK in a previous pass UNLESS the object module
     has been changed to call a procedure indirectly (always indirect
     with Clipper) in an overlay object module.  Be sure to link in
     the last created version of $$MD.OBJ, however.

     Be aware that PRONK changes code labels in modified object
     modules.  If PRONK or LINK aborts with an error, you may see
     error messages containing code labels or procedure names that
     were not used in the overlaid program's source code.  Avoid
     using the global labels or names '___AAA' through '___BMI' in
     your program.  Only the leading three underscores and letters
     are used by the changed labels.  Three underscore characters
     before numbers and other legal name characters can be safely
     used in a program's source code.

     The code overhead when using PRONK amounts to 6 bytes per public
     name in the overlay modules, with a maximum capability of
     handling 1023 public names.  At worst, this will add 6138 bytes
     to your root code size.

     The source code to PRONK is available for a fee.  PRONK was
     written in Turbo C, version 2.0.  To order the source code, send
     $23.00 to the address in the PROVL section immediately
     following.  The ordering instructions for the PROVL package and
     PRONK's source code are the same.  The PROVL commercial overlay
     manager package does not include the PRONK source code and the
     $5.00 discount can only be applied once, even if both are
     ordered.



     PROVL -- An enhanced version of OVL              page 1 of 2



     PROVL -- An Enhanced Version of OVL
     -----------------------------------

     If you wish to sell a program that uses OVL to operate, or if
     you just want a more powerful version of OVL, an enhanced
     version of OVL called PROVL can be purchased for $80.  You may
     reduce this amount by five dollars (to $75.00) if you send me
     the name and location of the bulletin board, software
     distributor, or place where you received your copy of OVL.  If
     someone else gave you the copy of OVL, ask him or her where they
     got it from.  The reason for the $5.00 discount is that this
     information is valuable to me in determining distribution
     strategies.

     PROVL adds the following enhancements to OVL:

          1.  PROVL supports up to nine overlay areas.

          2.  PROVL allows up to the Microsoft Overlay Linker maximum
              of 63 overlays.

          3.  The depth that overlays can nest to is increased to 32
              levels with PROVL.
 
          4.  PROVL works with any overlay interrupt specified by the
              /O option of LINK.

          5.  PROVL expands the allowed buffer size of the /ZBn
              option to 1K through 32K.  For some overlay files this
              can reduce the overlay manager's overhead by up to 2K
              with no side effects.  Others may load faster with the
              higher range /ZBn numbers.

     PROVL also dispenses with the runtime copyright notice.  This
     removal of the runtime copyright notice does not suggest, and
     should not be taken to suggest, that PROVL is not copyrighted.
     A potentially distracting message is simply not displayed.

     A bound manual is provided with PROVL for your convenience.

     No royalties are charged for use of PROVL.  This means that you
     need only purchase a single version of PROVL for use with your
     program no matter how many copies of your program you
     distribute.  Purchase of PROVL entitles the purchaser to
     telephone support.  I reserve the right to require that all
     calls be at the purchaser's expense.



     PROVL -- An enhanced version of OVL              page 2 of 2



     For those with particular needs, customized or special versions
     of PROVL are available.  One version allows a user to link in
     his or her own custom error-handler if a DOS error occurs inside
     of the overlay manager.  There is no extra charge for a
     customized change to the standard version of PROVL IF the change
     is deemed to have potential use for other PROVL users and is not
     too major.  Very specialized or large changes will cost more
     than the standard PROVL version.  Please contact me if you
     require a special version of PROVL.

     PROVL's source code is NOT available.  If you need or would like
     the source code to an overlay manager, please read the
     LOVR/PLOVR section immediately following this section.

     Purchase of PROVL is MANDATORY if you wish to use a version of
     OVL for distribution with a commercial or potentially commercial
     application -- including programs distributed as shareware.
     PROVL is the only version of the overlay manager permitted for
     use with such applications and programs.  OVL's copyright
     license does not legally permit its commercial use.  Please
     abide by these reasonable terms.  Thank you.

     To purchase PROVL, send $80.00 in US dollars -- $75.00 if you
     include a description of where you heard of PROVL -- by check or
     money order with your shipping address to:

         Michael E. Devore
         Devore Software & Consulting
         403 West Charles
         Champaign, IL  61820

     Please state your preference for either 360K 5 1/4 or 720K 3 1/2
     inch diskettes.  Overseas orders please include an additional $8
     for shipping.  Federal Express overnight orders please enclose
     an additional $11 for shipping (remember that you cannot use a
     P.O. Box with Federal Express).  Other orders will be shipped
     first class mail with no additional shipping charge.

     All information contained herein, including the cost of PROVL,
     is subject to change without notice.

     PROVL copyright 1988, 1989 by Michael E. Devore



     Too large!  Too complicated!                     page 1 of 1



     TOO LARGE!  DOESN'T WORK WITH MY DEBUGGER!
     TOO COMPLICATED!  PROVL TOO EXPENSIVE!
     ------------------------------------------

     There exists a cousin program to OVL, called LOVR, current
     version 1.14b.  LOVR is strictly a linkable overlay manager with
     no command line options, e.g. it supports neither multiple
     overlay areas nor separate overlay files.  As a consequence,
     LOVR takes up less memory than OVL, approximately 9K.

     LOVR uses less complicated techniques than the overlay managers
     in the OVL package.  For example, it simply integrates into the
     program's code without reloading the overlaid program as the OVL
     overlay managers do.  More technically speaking, LINKOVL and
     OVLSTONE use the DOS EXEC function and LOVR does not.  Such an
     approach may work better with the particular debugger you use on
     your programs.

     Since LOVR supports no extra options, it is most useful for
     those with more modest overlay manager needs who do not require
     the extra power of OVL.

     If you wish a copy of LOVR and you have been unsuccessful in
     obtaining a copy, you may send $6.00 to cover shipping and
     handling for the latest version to the shipping address in the
     PROVL section.  No $5.00 discount applies.

     LOVR also has an enhanced commercial version, called PLOVR.
     PLOVR adds similar non-command line option enhancements to LOVR
     that PROVL does to OVL.  A small manual is provided with PLOVR
     as well.  Additionally, the PLOVR package includes a smaller
     copy of PLOVR.OBJ called SPLOVR.OBJ, which takes up 5K of
     program space in the root code, instead of 9K.  The trade-off
     for the decrease in space is an occasional increase in time to
     load an overlay from disk in some circumstances, but SPLOVR can
     be useful for those running close to the memory space limit even
     with overlays.  PLOVR costs $50, less a $5 discount if you
     include a description of where you heard of PLOVR (i.e. where
     you got this OVL package) when you order.  The ordering
     instructions for the PLOVR package and the PROVL package are the
     same and can be found in the PROVL section immediately
     preceding.

     PLOVR's source code is available for additional cost with a
     signed license agreement.  The 8088 assembly language source
     code is fully documented with comments.  Please contact me for
     details.  PROVL's source code is NOT available.



     Trouble-shooting                                 page 1 of 3



     TROUBLE-SHOOTING
     ----------------

     Check to make sure that you have compiled your program properly.
     Turbo C and MASM users must compile their source files using a
     large or far code memory model.  OVL will not work under a small
     or near code memory model.

     Use a recent version of LINK when linking overlays for OVL.  OVL
     was tested with LINK versions 3.05, 3.06, 3.60, 3.61, 3.64, and
     3.69 and 5.01.20.  Some 2.x versions of LINK may not work
     properly.  TLINK, PLINK, or other proprietary linkers will not
     work with OVL; you must use Microsoft's linker.  In addition, if
     you experience problems, try linking with a different version of
     LINK.EXE -- at least one version has errors that causes improper
     operation when programs are linked with overlays.

     Check your link syntax, making sure that neither LINKOVL.OBJ or
     OVLSTONE.OBJ nor the initial entry or main program module is in
     an overlay, and that you are not exceeding twelve overlay files
     or nesting overlays deeper than four levels.

     Link LINKOVL.OBJ or OVLSTONE.OBJ in as the first object module
     of Microsoft LINK's object file list.  Otherwise, memory
     requirements for the overlay manager will increase, possibly
     enough to exceed available memory.

     If you use the OVLSTONE.OBJ overlay manager, remember to link in
     the $$ODATA.OBJ file created by SCULPT.  Unlike the overlay
     managers, the $$ODATA.OBJ file is not position dependent in the
     LINK object file list.

     Carefully read the SPECIFICATIONS AND REQUIREMENTS sections to
     make sure that you are using the OVL programs in accordance with
     their operating requirements.  One possible mistake for those
     using OVL with 'C' or assembly language is to indirectly call a
     function or procedure in one overlay from another or from the
     root to an overlay without using PRONK on the object modules.
     Clipper users must always use PRONK, since all of Clipper's
     calls to overlay procedures are made indirectly.  Microsoft LINK
     requires direct calls to overlay procedures for it to correctly
     set up the overlay manager interrupts.

     Clipper users should not use macros in an overlay that calls
     procedures in an unloaded overlay since macros bypass the
     overlay manager.  Macros may call procedures in the root, the
     same overlay, or another overlay if the other overlay is also
     loaded in memory (this requires using multiple overlay areas).



     Trouble-shooting                                 page 2 of 3



     Use of OVL's advanced options and support utilities brings with
     it more possibilities of operator error.  If you are using
     multiple overlay areas, it is important to understand that all
     overlay files not listed in an OVL command line switch are
     assigned to a different overlay area from the files listed in
     the switch.  Check that your switches and switch values match
     the rules outlined in the 'USING MULTIPLE OVERLAY AREAS' section
     of this manual.

     LINKOVL.OBJ users who wish to pass command line options to an
     overlaid program via the '/' character must use the '//x' option
     of OVL to avoid confusing LINKOVL into an attempt to take the
     overlaid program's command line options as its own.  All command
     line options for an overlaid program must come AFTER LINKOVL's
     own command line options.

     Since OVL will search all directories in the PATH or
     SCULPT-defined environment variable when attempting to find a
     program containing an overlay file, it is important not to have
     another file with the same name as the overlay file in a
     directory earlier in the PATH variable, if the overlaid file is
     not in the current directory.

     If you use the utility SPLIT.EXE, remember to use the /ZS option
     of OVL.  Do not use the /ZS option if the most recent version of
     the overlaid program has not been run through SPLIT.  Old
     versions of separate overlay files will cause problems with a
     non-split program that inadvertently has the /ZS switch in the
     command line.

     If you are sure that you are compiling and linking properly and
     operating OVL within its specifications and requirements, but
     you still experience problems, make sure that the error is not
     in your program.  If memory size allows, compile your program
     without overlays and test it.  If the size of your program is
     too large for all of it to fit in memory, try to compile only
     the code that is giving you problems and see if it works
     correctly without overlays.

     If your program still fails after you have eliminated all
     suspects except for OVL, please contact me so I can fix the
     problem as soon as possible.  However, I will need to know the
     circumstances.  What error message, if any, does OVL display?
     What version and options of OVL were used?  What version and
     options of LINK were used?  What hardware and software
     configuration was your machine running under when the error
     occurred?  What language was the program written in?  If I deem
     it necessary to locate the error, I may request a copy of the
     program that causes OVL to operate incorrectly.  This copy will
     be held in the strictest confidence and either returned or
     destroyed after I am through testing.  You, of course, will have
     the option of refusing the request, although this will probably
     mean a delayed, or no, fix for the problem.



     Trouble-shooting                                 page 3 of 3



     If an error is in OVL and you are the first person to find the
     error, I will send you a free corrected version as soon as it is
     available.  The corrected version will either be sent by e-mail
     if possible, or regular USPS mail if not.  If you are not the
     first person to find the error and do not wish to wait for the
     corrected version to reach general distribution channels, you
     may send $6.00 to cover shipping and handling for the latest
     version to the address below.

     If you subscribe to either the CompuServe Information Service or
     the GEnie Information Service, you can send me electronic mail
     at the appropriate e-mail address below.  Barring vacation or
     unusual circumstances, I check in to the CIS and GEnie services
     at least once a week -- usually more frequently.  Your e-mail
     will be acknowledged as soon as I receive it.

     If you do not subscribe to either CompuServe or GEnie you should
     contact me through USPS mail at the address given at the end of
     this section.

     The realities of life and need for income being what they are,
     my billable work and support of my commercial software has
     priority over fixes to and questions concerning OVL or LOVR.  If
     I have a full work schedule, a fix or question may take more
     time to respond to than either you or I would prefer.  This is
     unfortunate, but unavoidable.

     MAILING ADDRESS:
          Michael E. Devore
          Devore Software & Consulting
          403 West Charles
          Champaign, IL  61820

     E-MAIL ADDRESSES:
          CompuServe      71540,62
          GEnie           MDEVORE
          (BIX sign-on has been cancelled, do not use)



     Overlay Technical Documentation                  page 1 of 2



     OVERLAY TECHNICAL DOCUMENTATION
     -------------------------------

     It is not necessary to read or understand this part of the OVL
     documentation to use OVL.  This technical documentation is
     included for those who wish to know more information about how
     overlay calls are set up by Microsoft LINK.

     When you link a program with overlays, LINK sets up direct calls
     to code in the overlays in a special way.  All of these calls
     are replaced with an interrupt.  By LINK default the interrupt
     is 63 decimal or 3f hexadecimal, although the interrupt can be
     changed using the /O or /OVERLAYINTERRUPT LINK option.  This
     option is not supported by OVL, although PROVL does support it.

     Immediately following the interrupt inserted by LINK are three
     bytes of data.  The first byte is used by the overlay manager as
     an offset into an table found in the root .EXE code (usually
     located at the end of the root) that determines which overlay
     should be loaded into memory.  The second two bytes give the
     value that the Instruction Pointer (IP) should have when a jump
     to the overlay code is executed.  When the overlay manager is
     called by the interrupt, it needs to adjust the return address
     to point past these three bytes.

     The remaining information that the overlay manager needs can
     usually be found at the end of the root .EXE file.  Note that an
     overlaid .EXE program has overlay .EXE files appended to the
     root .EXE file.  Also, at least one non-default option of MS
     LINK, the /EXEPACK option places additional information at the
     end of the root .EXE file.

     Each overlay file has its own header that follows the standard
     format of normal .EXE file headers, including items in a
     relocation table that need to have fixups performed on them.

     The overlay information in the root file corresponds to data in
     the OVERLAY_DATA segment created by MS LINK.  All of the data
     has a MS LINK internal variable name, although these names are
     documented nowhere by Microsoft to the best of my knowledge.
     The names are prefixed with a '$$' and can be seen if you look
     at a binary dump of LINK.EXE.  The information that the root
     .EXE has is as follows:


          1 word containing the count of all segments in overlay
          files plus one.

          1 word containing the total .EXE files in the main .EXE
          file.  This will equal the number of overlay files plus one
          for the root.

          1 zero word.  This word is fixed up to the program load
          segment when the program is loaded into memory.



     Overlay Technical Documentation                  page 2 of 2



          A table with entries for each overlay that, when added to
          the root program load segment, provide the value the Code
          Segment (CS) should have when a jump to the overlay code is
          executed.  MS LINK fixes up the values in this table as
          well.  If using LINK's internal '$$' variables during
          runtime, the need to add in the root program load segment
          value is negated.

          1 zero word.

          A table that uses the first byte following the interrupt in
          the calling code for an offset.  The entries in the table
          determine which overlay has the necessary code and should
          be loaded in memory, if it isn't loaded already.

          Variable number of zero bytes.

          The name of the main .EXE file that normally has all of the
          overlay files appended to it.  This will not be true if you
          have used the SPLIT.EXE program to create separate overlay
          files.

          Variable number of zero bytes.  These bytes have a
          corresponding MS LINK internal variable name, but their
          use, if any, is unknown to me.

          The number of the interrupt LINK inserts in the program
          code that is vectored to the overlay manager code.


     This information has remained stable for Microsoft LINK
     versions 3.05 through 3.69.  It may change for future versions
     of Microsoft LINK.

     The information presented here is solely for your interest and
     entertainment.  Michael E. Devore makes no claims or guarantees
     of the accuracy of this information.  Use of this information is
     strictly at your own risk.



     Comments and Miscellany                          page 1 of 2



     COMMENTS and MISCELLANY
     -----------------------

     OVL is shareware.  No, that does not mean I am going to request
     or require you to send money if you use it longer than a
     reasonable trying out period.  What it means is that OVL is a
     zero dollar registration, copyrighted program with some use
     restrictions, most notably that it is only for noncommercial
     use.  If you use, or plan to use, OVL in one or more programs
     over a period of a month or more, then you should register it.
     To register, all I ask is that you send me your home address and
     the name and location of the bulletin board, software
     distributor, or place where you received your copy of OVL.  If
     someone else gave you the copy of OVL, ask him or her where they
     got it from.  You may send this information to me via US mail or
     electronic mail.

     I will not put your address on some mailing list or deluge you
     with advertisements.  The reason I ask for this information is
     that it is very valuable to me.  Knowing where OVL is being
     distributed, what distribution sites are most successful, and
     the address spread of those who frequent the distribution sites
     is extremely helpful.

     If you feel that you must reward me monetarily or you do not
     wish to divulge where you got your copy of OVL for whatever
     reason, then send me a letter with your return address and a
     quarter (25 cents) inside as an alternate method to register
     OVL.  This will help cover the postage cost of those who send
     letters asking for help without sending a self-addressed stamped
     envelope and the overhead cost of receiving and answering e-mail
     queries.  Individually these costs are small, but they can (and
     do) mount rapidly.

     OVL should be powerful enough for most casual or part-time
     programmers needing a solution to the problem of a program that
     has gotten too large to fit in available memory.  OVL is also
     for professional programmers who have the same problem with a
     personal application.  Those who need a more powerful solution
     or who wish to use this type of overlay manager for a commercial
     application should be able to afford the enhanced PROVL version.
     Such an approach is in keeping with my philosophy of allowing
     those chronically short on cash to still have the benefits of
     some programming tools.  I have great sympathy for persons with
     little money, having been in that position myself on more than
     one occasion.  This philosophy should not be interpreted as
     support for piracy, nonpayment of shareware fees, or other
     unethical acts.  Nor should it be interpreted as precluding my
     releasing other shareware with a fee-based registration in the
     future.  I just think it is pleasant that not all programs have
     a price tag attached.  OVL is one of many programs in this
     category.  Look around, despite what cynics (and purveyors of
     high-priced software) may say, programs do not have to be
     expensive to be good.



     Comments and Miscellany                          page 2 of 2



     OVL is written entirely in 8088, also known as 8086, assembly
     language.  I feel that this is necessary to achieve acceptable
     speed and size overhead, especially with older computers, while
     maintaining maximum compatibility.  While some optimizations to
     OVL's code can undoubtably be made, I am skeptical that a
     significant decrease in code size is possible while retaining
     all of its functionality.

     If you have an idea for an improvement to OVL, a comment or
     question about OVL, or even a complaint about OVL, please send
     it to either my USPS mailing address or one of the e-mail
     addresses below.  I am receptive to new ideas and constructive
     criticism.  Your comments DO make a difference.  Several
     enhancements to OVL have come about due to user requests so
     don't be shy about dropping me a postcard or sending
     e-mail.  I am also interested in what applications or other
     languages you use OVL with.

     OVL began as a grass-roots solution to the problem of a low-cost
     overlay manager.  I hope to maintain that attitude and never
     acquire the arrogant traits exhibited by some software
     developers and corporations.  With your help, I plan to keep OVL
     a viable, useful, low- or no-cost alternative to overpriced
     software.

          Michael E. Devore       
          Devore Software & Consulting
          403 West Charles 
          Champaign, IL  61820

          CompuServe   71540,62
          GEnie        MDEVORE
          (BIX sign-on has been cancelled, do not use)


                   _______
              ____|__     |               (tm)
           --|       |    |-------------------
             |   ____|__  |  Association of
             |  |       |_|  Shareware
             |__|   o   |    Professionals
           -----|   |   |---------------------
                |___|___|    MEMBER


     This program is produced by a member of the Association of
     Shareware Professionals (ASP).  ASP wants to make sure that the
     shareware principle works for you. If you are unable to resolve
     a shareware-related problem with an ASP member by contacting the
     member directly, ASP may be able to help. The ASP Ombudsman can
     help you resolve a dispute or problem with an ASP member, but
     does not provide technical support for members' products. Please
     write to the ASP Ombudsman at P.O. Box 5786, Bellevue, WA 98006
     or send a Compuserve message via easyplex to ASP Ombudsman
     70007,3536.



```
{% endraw %}

## PRTEST.ASM

{% raw %}
```
DOSSEG
.MODEL	large
.STACK	100h

PUBLIC p2message,p3message

EXTRN p2:PROC,p3:PROC

.CODE
start:
	mov	ax,dgroup
	mov	ds,ax
	mov	dx,offset message
	mov	ah,9
	int	21h

	mov	ax,offset p3
	mov	word ptr jmp_address,ax
	mov	ax,seg p3
	mov	word ptr jmp_address+2,ax
	call	dword ptr [jmp_address]

	mov	ax,offset p2
	mov	word ptr jmp_address,ax
	mov	ax,seg p2
	mov	word ptr jmp_address+2,ax
	mov	bx,offset jmp_address
	sub	bx,2
	mov	si,1
	call	dword ptr [bx+si+1]

	mov	ax,offset p3
	mov	word ptr jmp_address,ax
	mov	ax,seg p3
	mov	word ptr jmp_address+2,ax
	mov	bx,offset jmp_address
	sub	bx,257
	mov	si,1
	call	dword ptr [bx+si+256]

	mov	ax,offset p2
	mov	word ptr jmp_address,ax
	mov	ax,seg p2
	mov	word ptr jmp_address+2,ax
	mov	bx,offset jmp_address
	sub	bx,2
	mov	di,1
	call	dword ptr [bx+di+1]

	mov	ax,offset p3
	mov	word ptr jmp_address,ax
	mov	ax,seg p3
	mov	word ptr jmp_address+2,ax
	mov	bx,offset jmp_address
	sub	bx,257
	mov	di,1
	call	dword ptr [bx+di+256]

	mov	ax,offset p2
	mov	word ptr jmp_address,ax
	mov	ax,seg p2
	mov	word ptr jmp_address+2,ax
	mov	bx,offset jmp_address
	sub	bx,2
	call	dword ptr [bx+2]

	mov	ax,offset p3
	mov	word ptr jmp_address,ax
	mov	ax,seg p3
	mov	word ptr jmp_address+2,ax
	mov	bx,offset jmp_address
	sub	bx,257
	call	dword ptr [bx+257]

	mov	ax,offset p2
	mov	word ptr jmp_address,ax
	mov	ax,seg p2
	mov	word ptr jmp_address+2,ax
	mov	si,offset jmp_address
	sub	si,2
	call	dword ptr [si+2]

	mov	ax,offset p3
	mov	word ptr jmp_address,ax
	mov	ax,seg p3
	mov	word ptr jmp_address+2,ax
	mov	si,offset jmp_address
	sub	si,257
	call	dword ptr [si+257]

	mov	ax,offset p2
	mov	word ptr jmp_address,ax
	mov	ax,seg p2
	mov	word ptr jmp_address+2,ax
	mov	di,offset jmp_address
	sub	di,2
	call	dword ptr [di+2]

	mov	ax,offset p3
	mov	word ptr jmp_address,ax
	mov	ax,seg p3
	mov	word ptr jmp_address+2,ax
	mov	di,offset jmp_address
	sub	di,257
	call	dword ptr [di+257]

	mov	ax,offset p2
	mov	word ptr jmp_address,ax
	mov	ax,seg p2
	mov	word ptr jmp_address+2,ax
	mov	bx,offset jmp_address
	sub	bx,2
	mov	si,2
	call	dword ptr [bx+si]

	mov	ax,offset p3
	mov	word ptr jmp_address,ax
	mov	ax,seg p3
	mov	word ptr jmp_address+2,ax
	mov	bx,offset jmp_address
	call	dword ptr [bx]

	mov	ax,offset p2
	mov	word ptr jmp_address,ax
	mov	ax,seg p2
	mov	word ptr jmp_address+2,ax
	mov	bx,offset jmp_address
	sub	bx,2
	mov	di,2
	call	dword ptr [bx+di]

	mov	ax,offset p3
	mov	word ptr jmp_address,ax
	mov	ax,seg p3
	mov	word ptr jmp_address+2,ax
	mov	si,offset jmp_address
	call	dword ptr [si]

	mov	ax,offset p2
	mov	word ptr jmp_address,ax
	mov	ax,seg p2
	mov	word ptr jmp_address+2,ax
	mov	di,offset jmp_address
	call	dword ptr [di]

	mov	ax,4c00h
	int	21h

.DATA
	message db 13,10,"Hello from PRTEST.",13,10,'$'
	p2message db 13,10,"Hello from PTEST2.",13,10,'$'
	p3message db 13,10,"Hello from PTEST3.",13,10,'$'
jmp_address	dd	0

	END		start
```
{% endraw %}

## PTEST2.ASM

{% raw %}
```
.MODEL	large

.DATA

EXTRN p2message:FAR

.CODE

PUBLIC	p2

p2	PROC
	mov	dx,offset p2message
	mov	ah,9
	int	21h
	ret
p2	ENDP

	END
```
{% endraw %}

## PTEST3.ASM

{% raw %}
```
.MODEL	large

.DATA

EXTRN p3message:FAR

.CODE

PUBLIC	p3

p3	PROC
	mov	dx,offset p3message
	mov	ah,9
	int	21h
	ret
p3	ENDP

	END
```
{% endraw %}

## QBNEST.BAS

{% raw %}
```bas
common shared b

print:print "in main";

b=1

for i=0 to 1
	print:print "Value of b variable is "b;
	call nest1(i)
next
print:print fre(""),fre(0),fre(-1),fre(-2)
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1933

     Volume in drive A is OVL
     Directory of A:\

    OVL312   ARC    127888   5-10-89  12:43a
    FILE1933 TXT      2591  12-28-89   3:08p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   1:05a
            4 file(s)     131057 bytes
                          229376 bytes free

![PC-SIG Library Disk #1933]({{ site.software.pcsigdisks.server }}/pcx86/sw/misc/pcsig/1000-1999/DISK1933/DISK1933.jpg)
