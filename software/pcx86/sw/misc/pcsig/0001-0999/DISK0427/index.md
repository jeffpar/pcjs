---
layout: page
title: "PC-SIG Diskette Library (Disk #427)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0427/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0427"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO PASCAL #9"

    This is a fascinating and useful assortment of TURBO Pascal routines
    and procedures.  There are I/O routines for the joystick, PC Mouse, and
    asynchronous communications.  Several routines provide menu
    capabilities, with stacked windows available.  TURBORUN allows the user
    to issue DOS commands from within his TURBO Pascal program.  The low-
    resolution graphics of PIBLORES is ideal for the color graphics of a
    user's game program.  Timer interrupts, Turtle graphics, "help
    facility" for Pascal, and listings of source code and cross-reference
    on the screen or the printer are just a few of these helpful programs.
    
    System Requirements: 128K, two disk drives, game port, serial
    port, monochrome or color graphics, Turbo Pascal
    
    How to Start:  To read DOC or TXT files, enter TYPE filename.ext and
    press <ENTER>.  To run a COM program, just type its name and press
    <ENTER>.  For instructions on PAS listings, refer to your Pascal
    language manual.
    
    File Descriptions:
    
    MENUX    PAS  Generate & operate a user-defined menu
    JOYSTICK PAS  Joystick control procedure & demo
    SERTST   PAS  Demo/test of SERIAL.PAS
    SERIAL   PAS  Routines for user to access COM1 & COM2
    READWKS  PAS  Print Lotus .WKS Worksheet file data
    READENV  INC  Functions to search DOS environment area
    PLIST    COM  Output Pascal source & cross-ref to printer or screen
    PIBDODOS PAS  Pascal routine to teach TURBORUN.COM
    PIBDODOS DOC  Description of TURBORUN.COM
    MOUSE    PAS  PC Mouse interface procedures
    THELP    DOC  Description of THELP.COM
    THELP    COM  TURBO Pascal resident "help facility"
    TRBOEXT  PAS  Retrieve command line parameters
    TPRO3    PAS  Draw line on screen at 13,000 pixels per second
    TPRO2    PAS  Get record fix from Borland's Turbo Toolbox
    TPRO     PAS  Very fast screen output;  screen handling
    TURBLE   TXT  Description of TURBLE.LBR
    TURBLE   LBR  Turtle graphics in LBR form ... for hard disk
    PIBMENUS PAS  Menu routines, similar to Lotus;  stacked windows
    PIBASYNC PAS  Asynchronous I/O for MS-DOS
    PIBLORES PAS  Low-resolution (160x100x16 colors) graphics
    TIMER    PAS  Timer interrupt routine for IBM PC DOS 2.0
    POWERS   PAS  Computes an integer or real power of a real number
    XREFPAS  PAS  Cross-reference generator
    TURBORUN COM  Allows DOS commands from TURBO Pascal programs
    TURBORUN ASM  Assembler source code for TURBORUN.COM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES427.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 427   TURBO Pascal Routines #                           v1 DS2
-----------------------------------------------------------------------
This is a fascinating and useful assortment of TURBO Pascal routines
and procedures.  There are I/O routines for the joystick, PC Mouse,
and asynchronous communications.  Several routines provide menu
capabilities, with stacked windows available.  TURBORUN allows the
user to issue DOS commands from within his TURBO Pascal program.  The
low-resolution graphics of PIBLORES is ideal for the color graphics
of a user's game program.  Timer interrupts, Turtle graphics, "help
facility" for Pascal, and listings of source code and cross-reference
on the screen or the printer are just a few of these helpful programs.
 
JOYSTICK PAS  Joystick control procedure & demo
MENUX    PAS  Generate & operate a user-defined menu
MOUSE    PAS  PC Mouse interface procedures
PIBDODOS DOC  Description of TURBORUN.COM
PIBDODOS PAS  Pascal routine to teach TURBORUN.COM
PLIST    COM  Output Pascal source & cross-ref to printer or screen
READENV  INC  Functions to search DOS environment area
READWKS  PAS  Print Lotus .WKS Worksheet file data
SERIAL   PAS  Routines for user to access COM1 & COM2
SERTST   PAS  Demo/test of SERIAL.PAS
THELP    COM  TURBO Pascal resident "help facility"
THELP    DOC  Description of THELP.COM
TPRO     PAS  Very fast screen output;  screen handling
TPRO2    PAS  Get record from a file by record number
TPRO3    PAS  Draw line on screen at 13,000 pixels per second
TRBOEXT  PAS  Retrieve command line parameters
TURBLE   LBR  Turtle graphics in LBR form ... for hard disk
TURBLE   TXT  Description of TURBLE.LBR
TURBORUN ASM  Assembler source code for TURBORUN.COM
TURBORUN COM  Allows DOS commands from TURBO Pascal programs
XREFPAS  PAS  Cross-reference generator
POWERS   PAS  Computes an integer or real power of a real number
TIMER    PAS  Timer interrupt routine for IBM PC DOS 2.0
PIBLORES PAS+ Low-resolution (160x100x16 colors) graphics
PIBASYNC PAS  Asynchronous I/O for MS-DOS
PIBMENUS PAS  Menu routines, similar to Lotus;  stacked windows
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## PIBDODOS.DOC

{% raw %}
```
Introduction:
------------

This library contains procedures which allow you to execute DOS
commands and many other programs from within a running Turbo Pascal
program.  The assembler routine TURBORUN.COM performs the
actual execution of the external commands via DOS function 4B.  The
sample Turbo Pascal program PIBDODOS demonstrates how to use TURBORUN.COM
in two different ways:

     (1)  To directly perform a selected command;
     (2)  To start up a secondary command processor so that
          any set of commands can be executed.  Control is
          returned to the Turbo routine PIBDODOS by entering EXIT.

Files:
-----

Libbrary PIBDODOS.LBR contains the following files:

     README.DOC   --- what you are reading now.
     PIBDODOS.PAS --- Turbo Pascal routine showing
                      how to use TURBORUN.COM (see below).
     TURBORUN.COM --- Assembled external routine for invoking
                      DOS commands from Turbo Pascal.
     TURBORUN.ASM --- Assembler source from which
                      TURBORUN.COM was created.


Credits:
-------

The external routine TURBORUN.COM was written by John Cooper and
John Falconer.  The sample routine PIBDODOS was written by Philip R. Burns.
Cooper and Falconer provided a sample routine, but theirs required
that COMMAND.COM be present in the active directory in order to work,
and they did not show how to bring up a secondary command processor.

What PIBDODOS does:
------------------

PIBDODOS first searches the DOS environment string for COMSPEC= to
obtain the current location of COMMAND.COM.  It then prompts for a
command to execute. If a command is entered, then it is passed to DOS
for execution, if possible.  After the command is executed, control returns
to PIBDODOS.  If no command is entered -- i.e., a null line is input --
then PIBDODOS brings up a secondary DOS command processor.  DOS commands
may be entered as desired.  Entering 'EXIT' returns control to
PIBDODOS. PIBDODOS then prompts for another command to execute, and so on,
until 'END' is entered.

Using PIBDODOS:
--------------

You may use the file TURBORUN.COM as provided in the library.  If you
prefer, you may extract the deck TURBORUN.AQM, unsqueeze it, and follow
the directions in that deck's comments to produce TURBORUN.COM.

Unsqueeze PIBDODOS.PQS --> PIBDODOS.PAS.  Invoke Turbo Pascal,
making sure that TURBORUN.COM is in the same directory as PIBDODOS.PAS.
Compile PIBDODOS.PAS to a .COM file, and also set the maximum heap
size (Axxxx in O)ptions) to what the Turbo program will need to
execute.  Any remaining memory will be used for executing external
commands.

You can find out more information by reading the comments in the
source file TURBORUN.ASM.

Glitches:
--------

There are some glitches with the approach used by PIBDODOS/TURBORUN.
DOS may freeze up if there is not enough memory to execute the command,
or if the command clobbers memory that does not belong to it.  In these
cases, a re-boot is required.

Comments:
--------

Send comments, suggestions, etc. to PHILIP BURNS on either of the
following two Chicago BBSs:

       Gene Plantz's BBS (312) 882 4227
       Ron Fox's BBS     (312) 940 6496

If you find a problem in TURBORUN.ASM, you may also want to notify
Cooper and Falconer -- their address is in the comments of TURBORUN.ASM.

Thanks,
Phil Burns
April, 198

```
{% endraw %}

## TURBLE.TXT

{% raw %}
```
Turble is provided on this disk in a library form in order
to keep the files separate from the others so you can organize
your hard disk better.
In order to use turble you should:
  1) md\turble             create a turble subdirectory
  2) cd\turble
  3) copy a:turble.lbr     move in the turble library
  4) lu a turble.lbr       disperse the files in the turble library
```
{% endraw %}

## TURBORUN.ASM

{% raw %}
```

Page 60,132
Title TURBORUN a utility for Turbo Pascal, MS/PC-DOS v2.xx
Name TurboRun

;************************************************************************
;*                                                                      *
;*                            T U R B O R U N                           *
;*                              Version 1.1                             *
;*                                                                      *
;*                 By John Cooper       John Falconer                   *
;*                    (913) 262-8451    (415) 521-7245                  *
;*                    CIS  74775,756    CIS  72435,1617                 *
;*                                                                      *
;************************************************************************

Comment*

Revision History
        Version 1.0 was successfully tested on 12/10/84.
                   By John Cooper
        
        Updated to Version 1.0A on 12/22/84. 
                   By John Falconer  
                                      
            1.  Changed ssmax from a constant to a code-base-relative
                value.  This change allows Turborun to be used with
                different versions of Turbo Pascal.  Although undocumented,
                the four versions of Turbo I tested all store their
                maximum stack segment size as a word located seven bytes
                ahead of the beginning of user code. 
            2.  Added code to determine the length of the command line
                which is passed to the child process.  Moved the child's
                command line starting point to PSP+081H as called for in
                the DOS manual (Ver 2.0 page E-6) and placed the length
                byte for the command line at PSP+080H.  This allows the
                command line passed to the child to be used as a string
                with string[0] containing the valid length.  Note that
                a carriage return is placed at the end of the passed command
                line but that it is not counted in the length.  Note also
                that this change corrupts the CmdLine variable passed
                to Turborun by changing the last character of the file
                name to the length of the child's CmdLine.
            3.  Changed original code so that all characters on the command
                line are passed on to the child.  This is as called for in 
                the DOS manual.  Previously the first terminator (usually
                a space) was skipped over.
            4.  Corrected a few minor documentation errors.

Note:           The EXEC call does not support IO-Redirection on the command
                line.  

        Updated to Version 1.0B January 10, 1985
                   By John Cooper 

            1.  A note concerning the lack of IO-redirection support
                by the MS/PC DOS EXEC function call, the call which is
                at the heart of this program, was ammended, as it has 
                been determined that, at least in the case of MS-DOS 2.11,
                EXEC does provide full IO-redirection, via the command line
                symbols "> < |", if the command processor is envolked ahead 
                of the child.  
  
                <Child> [FCB-1 [FCB-2]] >PIPEOUT <PIPEIN  

                The above will NOT work, however,

[path][drive]COMMAND.COM /C <Child> [FCB-1 [FCB-2]] >PIPEOUT <PIPEIN
                
                should work just fine.


            2.  Changed the way in which the program detects the end
                of the childs name, to include all filename separators,
                as listed on page 1-88 of MS-DOS v2.0 Programmer's 
                Reference, except the back-slash (\) and colon (:).  These
                two were excluded because the program needs to accept a
                full-path name, which could include these symbols.  Pre-
                viously only a space or null was considered a terminator.
                This change was recommended but not implemented in version
                1.0A.

            3.  Added notes on installation concerning the requirement,
                introduced by an enhancement made in 1.0A, that the
                external declaration of this program be the first in the
                Turbo source code.  Also added some warnings and documentation
                notes.

        Updated to Version 1.1 March 17, 1985
                By John Falconer

            1.  A "bug" in the way memory allocation is calculated and 
                set to protect Turbo's SSEG was fixed.  The program is now 
                known to function with such large applications as 1-2-3 and
                Dbase III. 

*
Page
Comment*

                         - - - W A R N I N G - - -
        Although every effort has been made, by the two authors, to
        ensure that this program will perform as specified, there are
        may be programs which will not function correctly when envoked
        from Turbo, via Turborun, but will do just fine if envoked
        from COMMAND.COM.  An excellent example is WordStar(tm).  In
        some, but not all, cases this can be solved by first envoking
        COMMAND.COM and then envoking the child from COMMAND.COM.  
        Assume that there is a program, WORKING.COM, that will not
        work from Turborun but does work from DOS.  The following
        command line might help;

         COMMAND.COM /c WORKING.COM
 
        This of course assume that there is not a shortage of
        memory of some other explainable problem.  The switch, /c,
        is included to force COMMAND.COM to return control to the
        parent after the processing of its, COMMAND.COM's, command line.


Installation Notes:
        The enhancement to provide for a version-independent SSMAX,
        provided by John F., has introduced the additional requirement
        that this external be the first code generating structute in
        the Turbo Pascal source code, i.e. make TurboRun the first 
        procedure, following the Const, Type, and Var blocks, in the
        main program.  Turborun assumes it is the first and can,
        therefore, find the SSMAX word exactly seven bytes prior to
        its own base address.


        Memory Compiles.
                The use of this program in "memory mode" is not recom-
                mended.  Turbo seems to dislike having its memory 
                limited, which is required to run the child.  It may
                work but it is, at best, risky!  The prefered method
                is to do a memory-compile, if possible, then switch to
                Com and limit the Maximum Stack Size and compile again,
                this time producing a COM file.  If compilation to memory
                is not possible, due to lack of memory or the use of 
                Overlays, you MUST implement some sort of patch to
                work around Turbo Pascal 2.0B's known "bug" in its handling
                of externals greater that 128-bytes in length.  The "bug"
                is easy to work around, by either loading the external
                at run-time(recommended) or converting it to an INLINE 
                $Include file.


        Limiting the Stack Segment for Turbo Pascal.
                If the Stack Size is not limited, at compile-time, then
                Turbo Pascal may want to consume all of the system's 
                available RAM.  Of course, that precludes the use of child
                processes because the BLOCK call will fail, due to a lack
                of resources.   It is, therefore, recommended that you limit
                Maximum Stack Size to just enough memory to allow the Pascal
                program to operate, this will leave the balance of your 
                system's resources available for child processes.  


        Terminate But Stay Resident.
                Programs which use "Terminate but stay resident" or 
                "Keep process" to terminate but keep itself in memory should
                not be run from Turborun.  The reason is that will cause
                DOS to attempt to set the allocation block map to prevent
                overlaying of the child.  If the system survives this, it
                still leave DOS in an unpredictable state.  


        Exit codes.
                In order for the parent to correctly detect the reason the
                child terminated the child must pass that infomation back,
                so that the Get Return Code can find it.  Many currently,
                available programs do not provide this and hence the code
                value passed back to RetCode may not reflect the actual
                reason the child was terminated.  An example is COMMAND.COM.

        "BUGS".
                If you encounter difficulties using this program or you find
                "bugs" in it, please contact either author or the latest 
                revisor.


        After this source code is assembled, linked, and converted to 
        a COM file it should be included as an external procedure
        within the Turbo Pascal source file.  The external should be
        of the form shown below.

        Procedure GoForIt(Var RetCode:Integer; Var Cmdline);
                External 'TurboRun.com';

        Cmdline can be either type-CHAR or type-STRING.  If the latter
        is used you should pass CmdLine[1] to skip the length byte.

        Format of CmdLine:
path-name-to-child [<sp> First-FCB [<sp> Second-FCB [<sp> switchs and/or IO redirection]]] #0

        Notice that the Cmdline to followed by a byte of 0, this is binary 0
        not ASCII 0. <-- VERY IMPORTANT! 

        The variable, RetCode, will contain the return code from the
        child process.  RetCode is actually used as two, seperate,
        byte-length variables.  The table below explains how to interpret
        this variable in terms of its high and low bytes.

        High byte
                0 : Normal Termination, No error
                1 : Child was terminated via by CONTROL-C
                2 : Child was aborted because of a DOS Hard Error
                3 : Child used terminate-but-stay-resident
                    (System needs to be rebooted)
                4 : EXEC call failed.
                8 : Memory allocation error, EXEC was not attempted

        In the cases of 0,1,2, and 3 the low byte has the value passed
        back by the child.  Any of these values indicate that the EXEC
        call was successful.  Programs which use terminate-but-stay-
        resident should not be called by the program.

        In the case of 4 the low byte has the reason the EXEC failed.
          2 : The path specified was invalid or not found.
          8 : There was not enough memory for the process to be created.
         11 : The process was an EXE format file and contained information
              that was internally inconsistent.

        In the case of 8 the low byte has the reason the memory allocation
        request failed.
          7 : The arena was trashed because a user program has changed
              memory that does not belong to it. System needs to be Rebooted.
          8 : Insufficient memory.

*       
Page      
Subttl Main Program
;
;------------------- E Q U A T E S --------------------
;
spsave  equ     cs:00fch        ;Storage for SP register
sssave  equ     cs:00feh        ;Storage for SS register
;
;-------------------- M A C R O S ---------------------
;
MsDos   Macro   function
        If function lt 256
        mov     ah,function
        Else
        mov     ax,function
        EndIf
        int     21h
        EndM
;
;
;------------------ M A I N  P R O G R A M -----------------
;
code            segment para public 'CODE'
                assume  cs:code,ds:nothing,es:code,ss:nothing

                org 00h  
run             proc    near
                call    entry   ;Find out where we were loaded
                                ;There is no return from this CALL
separate        db     ';,=+"[]><| ',9,0 ;Filename separators
                                ;Excluding ":" and "\" which cannot appear in
                                ;a filename but can appear in a pathname.
                
child           db      128 dup(?)      ;Path to child (with filename extension) 
fcb1            db      16 dup(?)       ;Optional fcb
fcb2            db      16 dup(?)       ;Optional fcb
parablk         dw      0,12 dup(?)     ;Parameter block (DOS 2.0 Manual p. D-45)
cmdstrt         dw      0               ;Offset to first char in child's CmdLine
ssmax           dw      0               ;Storage for parent's maximum stack size, 
                                        ;in paragraphs

entry:          pop     bx              ;Offset+3
                sub     bx,3            ;Actual offset address of RUN.COM
                pop     dx              ;Turbo(tm) return address 
                pop     si              ;Offset to command string
                pop     cx              ;Segment address of command string
                push    dx              ;Restore turbo's RET address
                mov     dx,si
                push    ds
                push    bp
                pushf

                push    bx              ;Save bx temporarily
                sub     bx,7            ;Point to parent's max stack size
                mov     ax,cs:[bx]      ;Move it to ax
                pop     bx              ;Recover bx
                mov     [ssmax+bx],ax   ;Save the max stack size for SETBLOCK call

                mov     ds,cx           ;Point to command string segment
                push    cs              ;Make ES=CS 
                pop     es
                mov     di,offset child ;Child process path name
                add     di,bx           ;Relocation offset
                cld                     ;Force direction
cmdlp:          lodsb                   ;Get character
                push    di              ;Save DI
                mov     cx,13           ;look for any of 13 filename separators
                mov     di,offset separate
                add     di,bx           ;Relocation offset
                repnz   scasb           ;Look for match
                jz      endstr          ;Exit if a separator is found
                pop     di              ;Otherwise, retrieve DI and continue
                stosb                   ;Store byte
                jmp     cmdlp           ;Try next character
endstr:         pop     di              ;Retrieve DI
                mov     [cmdstrt+bx],si ;Pointer to first char in child's CmdLine
                mov     al,0            ;Put terminating 0 in child path
                stosb
                dec     si              ;Back up one for stosb
                dec     si              ;Back up one for the length byte

;ds:si point to the childs command line

u1:             mov     [parablk+2+bx],si ;Store offset address
                inc     si              ;Start parsing at head of child's CmdLine
                mov     cx,ds
                mov     [parablk+4+bx],cx ;Store segment address
                mov     di,offset fcb1  ;Setup to parse first filename
                add     di,bx           ;Relocation

;di has offset from cs to default FCB passed at 5Ch

                mov     [parablk+6+bx],di
                MsDos   2901h           ;Ignore leading separators
                mov     di,offset fcb2  ;Parse second filename
                add     di,bx           ;Relocation

;di has offset from cs to default FCB passed at 6Ch

                mov     [parablk+10+bx],di
                MsDos   2901h
;
;Place <cr> at end of CmdLine, calculate and store child's CmdLine length
;
u2:             cmp     byte ptr ds:[si],0 ;Look for end of line
                jz      u3
                inc     si
                jmp     u2
u3:             mov     byte ptr ds:[si],13

                mov     ax,[cmdstrt+bx] ;Get pointer to first char in child's CmdLine
                xchg    ax,si           ;Swap it with current pointer
                dec     si              ;We don't include the <cr> in our length
                sub     ax,si           ;Calculate the length
                dec     si              ;Point to the length byte
                mov     byte ptr ds:[si],al ;Store calculated length there

                mov     cx,cs           ;Setup segments in parameter block
                mov     [parablk+8+bx],cx
                mov     [parablk+12+bx],cx
                mov     [parablk+bx],0  ;Pass environment to child, unchanged

;Now the childs parameter block is setup.
;All that remains is to allocate memory and go for it.

                push    bx              ;Save reloc register
                mov     bx,[ssmax+bx]
                push    cx
                mov     cx,ss   
                add     bx,cx
                pop     cx
                sub     bx,cx
                MsDos   4ah             ;Modify memory allocation
                jnc     $+5
                jmp     alocer          ;Allocation error, Exit
                pop     bx              ;Recover reloc register
                push    bx              ;Save a copy on stack
                mov     dx,bx
                add     bx,offset parablk
                mov     [spsave],sp     ;Save SP
                mov     [sssave],ss     ;Save SS
                push    cs              ;Point ds:sx to child
                pop     ds
                add     dx,offset child
                MsDos   4b00h           ;Go for it
                cli                     ;Prevent interuption
                mov     sp,[spsave]     ;Recover SP
                mov     ss,[sssave]     ;Recover SS
                sti
                jnc     $+5
                jmp     runerr          ;Problems, Exit
                pop     bx              ;Get reloc register
                MsDos   4dh             ;Get return code from child
getbac:         popf                    ;Turbo's Flags
                pop     bp              ;Turbo's BP
                pop     ds              ;Turbo's DS
                pop     cx              ;Return address
                pop     di              ;Offset to RC Variable
                pop     es              ;Segment of RC Variable
                mov     es:[di],ax      ;Store return code
                push    cx              ;Restore return address
                ret                     ;Back to Turbo

alocer:         pop     bx              ;Reloc register
                mov     ah,8            ;Indicate Allocation error
                jmp     getbac
runerr:         pop     bx
                mov     ah,4            ;Indicate RUN error
                jmp     getbac
run             endp
code            ends
                end     run
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0427

     Volume in drive A has no label
     Directory of A:\

    FILES427 TXT      2330  11-05-85   2:50p
    JOYSTICK PAS      4096   5-06-85   8:05a
    MENUX    PAS      6400   5-14-85   8:53a
    MOUSE    PAS      2944   5-09-85   8:41a
    PIBASYNC PAS     50304   6-04-85  10:53a
    PIBDODOS DOC      3454   4-15-85   5:56p
    PIBDODOS PAS     11720   4-15-85   5:54p
    PIBLORES PAS     23856   6-01-85   8:39a
    PIBMENUS PAS     51200   3-20-85   9:31a
    PLIST    COM     23638   4-03-85   8:00p
    POWERS   PAS      4224   5-28-85   9:20a
    READENV  INC      9728   4-15-85   8:40a
    READWKS  PAS      6400   5-13-85  10:11a
    SERIAL   PAS      5376   5-17-85  11:20p
    SERTST   PAS      1408   5-17-85  11:20p
    THELP    COM     30720   1-17-85  10:04a
    THELP    DOC       896   1-17-85  10:04a
    TIMER    PAS      5376   5-28-85   9:21a
    TPRO     PAS     19712   4-15-85   8:36a
    TPRO2    PAS      3072   4-15-85   8:37a
    TPRO3    PAS      3712   4-15-85   8:38a
    TRBOEXT  PAS     12544   5-07-85   9:29a
    TURBLE   LBR     34176   5-17-85   8:50a
    TURBLE   TXT       382   5-17-85  11:25p
    TURBORUN ASM     19465   4-15-85   5:54p
    TURBORUN COM       512   4-15-85   5:53p
    XREFPAS  PAS      6656   4-15-85   8:52a
           27 file(s)     344301 bytes
                            3072 bytes free
