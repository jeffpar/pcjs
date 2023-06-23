---
layout: page
title: "PC-SIG Diskette Library (Disk #373)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0373/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0373"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 17"

    This collection is oriented towards general system maintenance with
    programs for applying self-styled, useful filename extensions and other
    enhancements to the DOS batch file capabilities.  There is also an
    assortment of general purpose utilities.  You can improve the security
    of your system by preventing `break-out' of a boot or file operation.
    The SCR121F package provides full screen design and edit capabilities,
    and interfaces to DOS, DBase, MS Cobol, and Clipper.  And just for fun,
    the BANNER program lets you design and print large messages.
    
    System Requirements: Some programs require BASIC
    
    How to Start: To run a COM or BAT program simply type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.  To read DOC
    files simply enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:  SCR1 $24.00
    
    File Descriptions:
    
    WAIT     COM  Pauses a batch file for 3 seconds to allow interruption
    BRK      COM  Causes a termination with error code return
    BANNR1   BAT  Batch file to run BANNER1.COM
    BANNER1  DOC  Documentation for BANNER1.COM
    BANNER1  COM  Prints block letters on the display/printer with options.
    WAITTIME COM  Used in batch files to wait for a certain time to pass
    WAIT     DOC  Documentation for WAIT.COM
    WAITTIME DOC  Documentation for WAITTIME.COM
    TUNE     DOC  Documentation for TUNE.COM
    TUNE     COM  Used in batch files to produce an audible signal of
    SIZER    DOC  Documentation for SIZER.COM
    SETERROR DOC  Documentation for SETERROR.COM
    SIZER    COM  Tests the size of a file and sets an errorlevel based
    SIZER    BAS  BASIC version of SIZER
    SIZER    ASM  Assembly version of SIZER
    SIGNAL   COM  Produces a signal and waits for a keystroke
    SETERROR COM  Accepts one command line argument and sets the DOS
    QUERY    EXE  Batch file 'Y/N' prompt routine
    SCR21F   ARC  Screen editor and display utilities (Archived format)
    REMDOT   EXE  Displays keyboard buffer strings
    QUERY    ASM  Assembly source code for QUERY.EXE
    PRTSC    DOC  Documentation for PRTSC.COM
    PRTSC    COM  Starts/stops the printer during batch file processing
    PAUSE2   DOC  Documentation for PAUSE2.COM
    PAUSE2   COM  Improved version of DOS's PAUSE command
    NORESET  BAS  Disables the <Ctrl><Alt><Del> keyboard reset sequence
    CHECKING DOC  Documentation for CHECKING.COM
    CHECKING COM  Allows conditional termination of batch files
    FLIP     COM  Control special key states from the DOS command line
    DSIZE    DOC  Documentation for DSIZE.COM
    DSIZE    COM  Determine the format of a diskette from in a batch file
    CR       COM  Useful for putting 64K, one disk drive and monochrome
    NORESET  ASM  Disables the <Ctrl><Alt><Del> keyboard reset sequence
    NOBRKCOM BAS  Patches COMMAND.COM to prevent breaking of AUTOEXEC.BAT
    INPUT    COM  Get input from console
    INP-TEST BAT  Sample batch file
    INP      BAT  Sample batch file
    GETDIGIT DOC  Documentation for GETDIGIT.COM
    GETDIGIT COM  Accepts a prompt from the command line and a one digit
    FLIP     DOC  Documentation for FLIP.COM
    SCREDIT  COM  Screen editor
    SETERROR ASM  Source code for SETERROR.COM
    SCRHELP? SCR  Help screens for SCREDIT.COM
    SCR      TXT  Documentation for SCREDIT.COM
    SCR???   ???  Programming language interfaces for SCREDIT.COM
    SCRBATCH COM  Display files created by SCREDIT.COM
    CR       DOC  Documentation of CR.COM
    ANSIPCH  EXE  Part of Re-View
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BANNER1.DOC

{% raw %}
```
        Programs and documentation (C) 1983 Userview Corporation.

BANNER

        This program prints block letters on the display or printer
with several options.

INVOKING THE PROGRAM: From DOS command level, type BANNER <text>/<options>.
The /<options> are optional.  If no options are specified, the <text>
is sent to the printer in block letters composed of asterisks.  The options,
which may be combined in any fashion, affect BANNER's behavior as follows:

        /D      Send the output to the display instead of the printer.
        /F      Formfeed (form feed to printer or clear video display)
        /H      Print the characters double Height.
        /I      Print the characters in Italics.
        /S      Compose each block letters with the Same character (i.e.
                a lower case 'q' is made up of many lower case 'q's, etc.)
        /Ux     Use char 'x' instead of an asterisk to form the letters.
                Note this option cannot be combined with /S.
        /X      Clear other parameter settings
        /W      Print the characters double Width.

Typing "banner" without any text will not do anything.

BANNER messages over 10 characters long will not look nice on the video
display.  BANNER messages over 10 characters long which are sent to
the printer will be printed in a compacted format so as to fit on the
paper.

BANNER messages may be split up with the form separator (|) character.
For example, one might use "banner alpha/d|beta/d" to put "alpha" on
the first line and "beta" on the next.

SPECIAL NOTE: BANNER is configured for use with an Okidata 84P printer.
The program is easily patched to support other printers.  The string
of characters at 103H is sent to put the printer into compact mode,
and the string at 10BH puts it back to normal.  There is space for
up to 7 characters of mode-setting; the string must terminate with
a zero.

The author suspects that the following settings will work with an IBM
(a/k/a Epson) printer:

        ecs:103 0F 1B 30 00
        ecs:10B 12 1B 32 00

but he isn't sure.

```
{% endraw %}

## CHECKING.DOC

{% raw %}
```

************************************************************************
		Documentation for the New Utilities
************************************************************************

This file documents some of the New Utilities developed under a Userview
Corporation grant for use under IBM PC-DOS.  These utilities may be
distributed freely, but Userview retains all rights to the programs and
supporting documentation.

	Programs and documentation (C) 1983 Userview Corporation.


III. CHECKING

	This program allows conditional termination of batch files
depending on the result of the previous program.

INVOKING THE PROGRAM: Include the command "checking" after a command
in a batch file.  If the previous program was successful, CHECKING
prints an appropriate message and allows the batch file to continue.
If there was an error in the previous program, CHECKING also prints
a message and allows the user to terminate the batch job.

CHECKING will properly check the results of MASM, and may
work with other programs.  Experiment before doing something critical
with CHECKING.


```
{% endraw %}

## CR.DOC

{% raw %}
```
 CR.COM - pushes <return> into keyboard buffer via faked <ret> sequence

 Useful for putting default responses to programs run in .BAT file
 processing. This version will work on any version of DOS (1.1 and 2.0)
 as it pokes the fake <ret> code into the ROM BIOS keyboard buffer area.

 Idea from program CTRLPRTS.COM by Daniel M. O'Brien - 12 August 1983

         Changes by Michael L. McLellan - 3 February 1985

 Example: to load the dos 2.0 print spooler print.com in a .BAT file
    without operator intervention:

 " .BAT file up to cr.com"
  cr            'put <ret> in keyboard input buffer
  print /p      'Load print spooler with default device of [PRN:]
 "Rest of .BAT file"

 NOTE 1: !!!!!!
 One problem, however, is that any keystrokes stored in the keyboard
 buffer are discarded.

 NOTE 2: Any other key can be put in the buffer along with a CR by the 
      following: replace the 13 with 256*key+13 where key is the
      ASCII value of the key wanted( 0 <= key <= 255 ).  The extended 
      ASCII key values can be put in the buffer, but without a CR as in
      this program.

NOTE 3: This is assembled and linked with the Microsoft Macro Assembler 
     and linker and changed to a .COM file by exe2bin.
```
{% endraw %}

## DSIZE.DOC

{% raw %}
```





    DSIZE
    Command


    --------------------------------------------
    Purpose: Allows determining the format
             of a diskette from within a batch
             file.

    Format:  DSIZE [d:]

    Type:    Internal    External
                           ***

    Remarks: The diskette in the specified drive
             is examined, and ERRORLEVEL is set
             as follows:

             0 = unrecognized format
             1 = 160K
             2 = 180K
             3 = 320K
             4 = 360K

             The result is also given as a
             console message.

             DSIZE requires DOS 2.0, and will
             print an error message and abort
             under earlier versions.

    Author:  David Whitman























```
{% endraw %}

## FILES373.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 373   Batch Utilities                                   V1
------------------------------------------------------------------------
Useful extensions to the DOS batch file capabilities.
 
BANNER1  COM  Prints block letters on the display/printer with options.
BANNER1  DOC  Documentation for BANNER1.COM
BANNR1   BAT  Batch file to run BANNER1.COM
BRK      COM  Causes a termination with error code return.
CHECKING COM  Allows conditional termination of batch files depending
               on the result of the previous program.
CHECKING DOC  Documentation for CHECKING.COM.
CR       COM  Useful for putting default responses in batch files.
DSIZE    COM  Determine the format of a diskette from within a batch file.
DSIZE    DOC  Documentation for DSIZE.COM.
FLIP     COM  Control special key states from the DOS command line.
FLIP     DOC  Documentation for FLIP.COM
GETDIGIT COM  Accepts a prompt from the command line and a one digit
               response to that prompt.
GETDIGIT DOC  Documentation for GETDIGIT.COM.
INP      BAT  Sample batch file.
INP-TEST BAT  Sample batch file.
INPUT    COM  Get input from console.
NOBRKCOM BAS  Patches "COMMAND.COM" to prevent breaking of AUTOEXEC.BAT.
NORESET  ASM  Disables the <Ctrl><Alt><Del> keyboard reset sequence.
NORESET  BAS  Disables the <Ctrl><Alt><Del> keyboard reset sequence.
PAUSE2   COM  Improved version of DOS's PAUSE command.
PAUSE2   DOC  Documentation for PAUSE2.COM.
PRTSC    COM  Starts/stops the printer during batch file processing.
PRTSC    DOC  Documentation for PRTSC.COM
QUERY    ASM  Assembly source code for QUERY.EXE
QUERY    EXE  Batch file 'Y/N' prompt routine.
REMDOT   EXE  Displays keyboard buffer strings.
SCR1     DOC  Documentation for SCRBATCH.COM and SCREDIT.COM
SCRBATCH COM  Display files created by SCREDIT.COM
SCREDIT  COM  Screen editor.
SCRHELPA SCR  Help screens for SCREDIT.COM
SCRHELPB SCR  Help screens for SCREDIT.COM
SCRHELPC SCR  Help screens for SCREDIT.COM
SCRHELPD SCR  Help screens for SCREDIT.COM
SCRHELPE SCR  Help screens for SCREDIT.COM
SETERROR ASM  Source code for SETERROR.COM
SETERROR COM  Accepts one command line argument and sets the DOS
               ERRORLEVEL to that argument.
SETERROR DOC  Documentation for SETERROR.COM.
SIGNAL   COM  Produces a signal and waits for a keystroke.
SIZER    ASM  Assembly version of SIZER
SIZER    BAS  BASIC version of SIZER
SIZER    COM  Tests the size of a file and sets an errorlevel based
               on it's findings.
SIZER    DOC  Documentation for SIZER.COm
TUNE     COM  Used in batch files to produce an audible signal of
               process completion.
TUNE     DOC  Documentation for TUNE.COM.
WAIT     COM  Pauses a batch file for 3 seconds to allow interruption.
WAIT     DOC  Documentation for WAIT.COM
WAITTIME COM  Used in batch files to wait for a certain time to pass.
WAITTIME DOC  Documentation for WAITTIME.COM.
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## FLIP.DOC

{% raw %}
```


 This program makes the DOS 1.1 command FLIP ---

 Copyright (c) 1982 Thomas J. Foth

 Permission granted to copy and distribute this source with inclusion of
 this notice but not for profit

 Author makes no warrenty, expressed or implied, as to the correct nature
 and operation of this software.

 Command syntax:

 FLIP |NUM  |     |ON |  - Flip numeric pad on or off
      |CAP  |     |OFF|  - Flip caps lock on or off

 or


 FLIP |MONO |            - Flip to monochrome adapter
      |COLOR|     |40|   - Flip to color adapter in either 40 or
                  |80|     80 column mode



apter
    
```
{% endraw %}

## GETDIGIT.DOC

{% raw %}
```


       This program accepts a prompt from the command line and accepts
       a one digit response to that prompt.  On exit, the DOS ERRORLEVEL
       is set to the digit.  Non-numeric keys are ignored and <Ctrl><Break>
       will not exit.

       This program requires DOS 2.0.

       Usage:
	     GETDIGIT prompt
       where "prompt" is the message to displayed to the user.

       Example batch file usage:
	  echo off
	  :menu
	  cls
	  echo ---IBM PC Menu--
	  echo 1 - Run Wordstar
	  echo 2 - Run Dbase II
	  echo 3 - Exit to  DOS
	  GETDIGIT Please enter an option number:
	  if errorlevel 4 goto menu
	  if errorlevel 3 goto end
	  if errorlevel 2 goto dbase
	  if errorlevel 1 goto wordstar
	  :if we get here nothing matched -- try again
	  goto menu
	  :wordstar
	  cls
	  echo We would run WORDSTAR here.
	  pause
	  goto menu
	  :dbase
	  cls
	  echo We would run DBASE here.
	  pause
	  goto menu
	  :end
	  cls
	  echo on

       Copyright (C) 1983  Tony Alan Rhea
       This program may be copied and distributed for personal use
       but not for profit provided this notice is included.  Author makes
       no warranty, expressed or implied, as to the correct nature and
       operation of this software.


       You may make and distribute as many copies of this program as you wish
       for your PERSONAL use only ( NOT for business purposes, please! ).
       Feel free to modify, mutilate, or adulterate this program.  If you come
       up with an bug or improvement, please let me know by writing me at this
       address:
	       Tony A. Rhea
	       1030 Ivy Lane
	       Cary, NC  27511
       If you do modify it, please give me credit in the program.  This helps
       to preserve my ego and increase my fame (but, unfortunately, NOT my
       financial status).  Also, I would appreciate a copy of the modified
       version, preferably on disk (I'll be happy to return your diskette).

       If you like this program ( or HATE it ), please let me know.  Drop me
       a line at the address given above.

       This program has been submitted for publication in PC-WORLD magazine.


	 Revision history:
	    rev 1.0  10/26/83			      { original release }


```
{% endraw %}

## NOBRKCOM.BAS

{% raw %}
```bas
10 REM NOBRKCOM.BAS BY JOHN F. RATTI 13 JULY, 1983
20 REM THIS PROGRAM PATCHES "COMMAND.COM" TO PREVENT BREAKING OF AUTOEXEC.BAT
30 OPEN "COMMAND.COM" AS #1 LEN=1
40 FIELD #1, 1 AS A$
50 LSET A$=CHR$(&H4C):PUT #1,&H5D8
60 LSET A$=CHR$(&H1B):PUT #1,&H5DB
70 CLOSE
```
{% endraw %}

## NORESET.ASM

{% raw %}
```

        page 64,132
        title NORESET - disables <Ctrl><Alt><Del> reset sequence
        subttl from Personal Computer Age Vol 2.4 pp 17-21
        ;
        ;
comment *

        Documentation for NORESET:
        --------------------------

        This program disables the <Ctrl><Alt><Del> keyboard reset
        sequence. Once this program is installed, the only way to
        reboot the system is to turn the power off and then back
        on.

        This program is adapted from Personal Computer Age
        magazine Volume 2.4, pp 17-21.  The original version
        referenced absolute addresses in ROM, which limits
        portability to other machines or even to an XT.
        This version overcomes these restrictions, but adds
        the requirement that DOS 2.0 or greater be used.
        This program will not work with DOS 1.0 or 1.1.
        By necessity, one reference to an absolute memory
        address is made -- to KB_FLAG at 0040:0017h.  If your
        machine uses a different address, change the one line
        noted below to suit your machine.

        This program need be run only once. Although running it
        multiple times will cause no real harm, it could slow
        things down a bit.  In the interest of simplicity, no
        attempt is made to determine whether or not the "filter"
        is already installed -- it blindly installs itself as
        many times as you tell it to.  It is suggested that you
        execute this program from your AUTOEXEC.BAT file.

        Every time a key is pressed or released, the resident
        portion of this program checks to see if the <Ctrl> and
        <Alt> keys are both depressed.  If they are, it tells BIOS
        that they are not.  In effect, it "filters out" this
        key sequence.  This means that any program that
        requires you to make a keyboard entry like
                <Ctrl><Alt><anything else>
        will no longer function because the system will be fooled
        into thinking that the <Ctrl> and <Alt> keys are not
        depressed.

        There is one known analomy [that's a nice way of saying "bug"]
        in this program.  Consider the case where the user depresses
        both the <Ctrl> and the <Alt> keys and then releases the
        <Ctrl> key, leaving only the <Alt> key depressed.  Normally,
        the ALT_SHIFT bit in KB_FLAG would be on.  With this program
        installed, it will be off.  This means that the user must
        release the <Alt> key and depress it AGAIN before it will
        be recognized by the system.  A similar situation occurs
        for releasing the <Alt> key while leaving the <Ctrl> key
        depressed.  This analomy can be corrected with a bit of
        creative programming but is not dealt with here in the
        interest of simplicity.

        Feel free to modify, mutilate, or adulterate this program.
        If you come up with an bug or improvement, please let me
        know by writing me at this address:
                Tony A. Rhea
                1030 Ivy Lane
                Cary, NC  27511

        *
        subttl Equates
        page
        ;
        ;
        ;  Equates
        ;
        ;
cr      equ     0dh             ;ASCII carriage return
lf      equ     0ah             ;ASCII line feed
dollar  equ     '$'             ;ASCII dollar sign - string terminator
alt_shift equ   08h             ;bit of kb_flag that means <Alt>  key pressed
ctl_shift equ   04h             ;bit of kb_flag that means <Ctrl> key pressed
alloff  equ     0ffh-alt_shift-ctl_shift ;kb_flag with <Ctrl> and <Alt> bits off
        subttl Segment declarations
        page
        ;
        ;
        ; Segment declarations
        ;
        ;
biosseg segment at 40h
        org     $+17h           ;KB_FLAG is at 0040:0017 for the PC
kb_flag label   byte            ;*** change as appropriate for your machine ***
biosseg ends
        ;
        ;
cseg    segment para public 'code'
        assume  cs:cseg, ds:cseg, ss:nothing, es:cseg
        org     100h            ;for .COM file
entry   label   far
        jmp     short start     ;jump to install routine
oldoff  dw      ?               ;offset  of old INT 9h handler
oldseg  dw      ?               ;segment of old INT 9h handler
        subttl Int 9h resident filter routine
        page
        ;
        ;
        ; Int 9h resident <Ctrl><Alt> filter
        ;
        ;
filter  proc    far             ;
        push    ax              ;save regs
        push    ds              ;
        mov     ax,0040h        ;point to BIOS data area
        mov     ds,ax           ;with our DS reg
        assume  ds:biosseg
        test    kb_flag,ctl_shift ;is <Ctrl> bit on?
        jz      done            ;if not, nothing to do
        test    kb_flag,alt_shift ;else <Ctrl> bit is on -- is <Alt>?
        jz      done            ;if not, nothing to do
        and     kb_flag,alloff  ;else turn off <Ctrl><Alt> bits
done    label   near
        pop     ds              ;restore regs
        pop     ax              ;
        jmp     dword ptr cs:oldoff ;and jump to old INT 9h handler
filter  endp
last    equ     $+1             ;first byte available for next program
        ;
        ;
        ; Messages
        ;
        ;
errmsg  db      'NORESET: Incorrect DOS version.', cr, lf, dollar
okmsg   db      'NORESET: <Ctrl><Alt><Del> reset disabled.', cr, lf, dollar
        subttl Installation routine
        page
        ;
        ;
        ; Installation routine
        ;
        ;
install proc    far
start   label   near
        assume  ds:cseg
        mov     ah,30h          ;set code = get DOS version number
        int     21h             ;on to DOS
        cmp     al,0            ;is it pre-DOS 2.0?
        jne     dosok           ;if not, continue
        lea     dx,errmsg       ;else tell user
        mov     ah,9h           ;set code = print string
        int     21h             ;we gotta have DOS 2.x
        int     20h             ;and die gracefully
dosok   label   near
        mov     ax,3509h        ;get seg:off of old
        int     21h             ;INT 9h handler into ES:BX
        mov     oldseg,es       ;and store
        mov     oldoff,bx       ;for later use
        mov     dx,offset filter ;point to our INT 9h filter routine
        mov     ax,2509h        ;set vector for INT 9h
        int     21h             ;on to DOS
        lea     dx,okmsg        ;tell user that we're here
        mov     ah,9h           ;set code = print string
        int     21h             ;on to DOS
        lea     dx,last         ;point after last of resident code
        int     27h             ;terminate and stay resident
install endp
;
;
cseg    ends
        end     entry
```
{% endraw %}

## NORESET.BAS

{% raw %}
```bas
  1 CLS:PRINT "THIS basic PROGRAM WAS AUTOMATICALLY CREATED BY CONVERT.BAS"
  2 PRINT"Copyright 1982 ,Rich Schinnell Rockville,MD. Not for Sale."
  3 PRINT "This program will automatically generate you a .COM program named NORESET.COM":PRINT 
  4 ON ERROR GOTO 5000
  6 INPUT "PLACE the disk to write the file TO in Default Drive (A: Usually) HIT <ENTER> "; SCHINNELL$
  9 PRINT:PRINT " Now reading the data statements, wait!"
 10 RESTORE:READ T:FOR I = 1 TO T:READ N:X#=X#+N:NEXT I
 20 READ TOT# :IF TOT#<>X# THEN 5000
 22 CLS:LOCATE 12,5:PRINT "Now writing file NAMED NORESET.COM standby please  ASCII COUNT IS ";TOT#
 30 RESTORE
 40 OPEN "R", #1,"NORESET.COM",1 
 50 FIELD #1, 1 AS N$
 60 READ N
 70 FOR I = 1 TO N
 80 READ N:LSET N$=CHR$(N):
 92 PUT #1 :NEXT I:CLOSE
 94 PRINT "NORESET.COM CREATED * *":GOTO 5010
 99 DATA  170
1000 DATA 235,115,0,0,0,0,80,30,184,64,0,142
1011 DATA 216,246,6,23,0,4,116,12,246,6,23,0,8
1012 DATA 116,5,128,38,23,0,243,31,88,46,255,46,2
1013 DATA 1,78,79,82,69,83,69,84,58,32,73,110,99
1014 DATA 111,114,114,101,99,116,32,68,79,83,32,118,101
1015 DATA 114,115,105,111,110,46,13,10,36,78,79,82,69
1016 DATA 83,69,84,58,32,60,67,116,114,108,62,60,65
1017 DATA 108,116,62,60,68,101,108,62,32,114,101,115,101
1018 DATA 116,32,100,105,115,97,98,108,101,100,46,13,10
1019 DATA 36,180,48,205,33,60,0,117,10,141,22,39,1
1020 DATA 180,9,205,33,205,32,184,9,53,205,33,140,6
1021 DATA 4,1,137,30,2,1,186,6,1,184,9,37,205
1022 DATA 33,141,22,73,1,180,9,205,33,141,22,40,1
1023 DATA 205,39
1024 DATA  13131
5000 PRINT "* * ERROR VERIFY DATA * * * "
5010 CLOSE:END
```
{% endraw %}

## PRTSC.DOC

{% raw %}
```

 CTRLPRTS.COM - toggles printer on/off via faked Ctrl-PrtSc sequence

 Useful for starting and stopping the printer during .BAT file
 processing. This version will work on any version of DOS (1.1 and 2.0)
 as it pokes the fake Ctrl-PrtSc code into the ROM BIOS keyboard buffer
 area.

 One problem, however, is that any keystrokes stored in the keyboard
 buffer are discarded.

 Daniel M. O'Brien - 12 August 1983



owever, is that any keystrokes stored in the keyboard
 buffer are discarde
```
{% endraw %}

## QUERY.ASM

{% raw %}
```
;
; QUERY - BATch file 'Y/N' prompt routine.
; Written byKevin Cogan.
; Copyright October, 1983
;
COMMENT &       This program, which can be called from a BATch file,
                prompts the user for yes or no (Y OR N) response
                and then returns an ERRORLEVEL of 1 to the BATch file
                for a reply of 'y' or 'Y' and a 0 for a reply of 'n'
                or 'N'. The only acceptable responses to the prompt
                are 'y', 'Y', 'n', or 'N'. an 80 column display is
                assumed.
                    The 'question' displayed from the BATch file
                can be via a REM statement or an ECHO statement, but
                the 'question' should end with a '?'. the '(Y or N)'
                prompt will then start 2 spaces beyond the '?'. if
                a '?' is not used, then the '(Y or N)' prompt will
                be placed on the next line following the 'question',
                in the third column. A typical application of this
                program is as follows: ZAP.BAT
                       
              ECH OFF
              DIR %1
              ECHO The above file(s) have been targeted for
              ECHO destruction. Is this acceptable?
              QUERY
              IF ERRORLEVEL 1 DEL %1
              IF NOT ERRORLEVEL 1 ECHO * Destruction aborted * &
;
; Set up stack segment.
;
       SSEG     SEGMENT STACK
                DB      16 DUP ('STACK   ')
       SSEG     ENDS
;
; Set up data segment which contains prompt.
;
       DSEG     SEGMENT 'DATA'
       PRMPT    DB      ' (Y or N)'     ; Prompt message
                
                DB      '$'             ; String terminator
       DSEG     ENDS
;
; Start of the routine.
;
       CSEG     SEGMENT 'CODE'
       START    PROC    FAR
                ASSUME CS:CSEG;DS:DSEG;SS:SSEG;ES:NOTHING
;
                MOV     AX,DSEG         ; Get location of data segment
                MOV     DS,AX           ;Load data segment into DS
;
; The first task is to find where the cursor is, since the 'question'
; requiring the prompt will be on the line above the current cursor
; location.
                MOV     BH,0            ; Set page number to 0
                MOV     AH,3            ; AH=3: Request cursor position
                INT     10H             ; Call BIOS for cursor position
;
; The cursor position is in DX (DH=row, DL=column). We now can
; begin searching the previous line, which contains the question,
; for a '?' which is the question terminator.
;
                SUB     DH,1            ; Decrement row index by 1
                MOV     CX,80           ; Load counter for '?' search
                MOV     DL,CL           ; Load column index
;
; Beginning of the '?' search loop. Search will begin in the last
; column of the display (79), and continue towards column 0 until
; search is successful. If no '?' is found, the prompt message
; will be placed on the line following the 'question'.
;
       LOOK     LABEL   NEAR
                SUB     DL,1            ; Decrement the column index
                MOV     AH,2            ; AH=2: Move cursor to (DH,DL)
                INT     10H             ; BIOS request to locate cursor
                MOV     AH,8            ; AH=8: Get value of character
                INT     10H             ; BIOS request for character
                CMP     AL,63           ; Is character a '?'
                JZ      FIND            ; Goto FIND when '?' is found
                LOOP    LOOK            ; Else continue looking
;
; If '?' search is unsuccessful, then the row index is incremented
; by 1 so that the prompt will appear on the next line.
;
                ADD     DH,1            ; Increment row index by 1
       FIND     LABEL   NEAR
                ADD     DL,1            ; Increment column index by 1
;
; If '?' search is unsuccessful, then the row index is incremented
; by 1 so that the prompt will appear on the next line.
;
; Prompt message is displayed and reply is read from the keyboard.
;
       PLACE    LABEL   NEAR
                MOV     AH,2            ; AH=2: Move cursor to (DH,DL)
                INT     10H             ; BIOS request to locate cursor
                PUSH    DX              ; Save cursor location
                MOV     DX,OFFSET PRMPT ; Load data location into DX
                MOV     AH,9            ; AH-9: Output data
                INT     21H             ;DOS service request
                POP     DX              ; Retrieve cursor location
                MOV     AH,1            ; AH-1: Wait for keyboard input
                INT     21H             ; DOS service request
;
; Check input for affirmative, negative, or illegeal value.
;
              
                CMP     AL,89           ; Is input 'Y'?
                JZ      YES             ; Then goto YES routine.
                CMP     AL,121          ; Is input 'y'?
                JZ      YES             ; Then goto YES routine.
                CMP     AL,78           ; Is input 'N'?
                JZ      NO              ; Then goto NO routine.
                CMP     AL,110          ; Is input 'n'?
                JZ      NO              ; Then goto NO routine.
                JMP     PLACE           ; Bad input: Reissue prompt
;
; Affirmative response routine. ERRORLEVEL flag is set to 1 via AL.
;
       YES      LABEL   NEAR
                MOV     AL,1            ; Set ERRORLEVEL to value of 1
                JMP     DONE            ; Goto wrap-up routine
;
; Negative response routine.  ERRORLEVEL flag is set to 0 via AL.
;
       NO       LABEL   NEAR
                MOV     AL,0            ; Set ERRORLEVEL value
;
; Wrap-up routine
;
       DONE     LABEL   NEAR
                PUSH    AX              ; Save ERRORLEVEL value
                MOV     DL,10           ; Set DL value for LINEFEED
                MOV     AH,2            ; AH=2: Output character in DL
                INT     21H             ; DOS service request
                MOV     DL,13           ; Set DL value for CR
                MOV     AH,2            ; AH=2: Output character in DL
                INT     21H             ; DOS service request
                POP     AX              ; Retrieve ERRORLEVEL value
                MOV     AH,4CH          ; AH=4CH: Terminate code
                INT     21H             ; DOS service request
       START    ENDP
       CSEG     ENDS
                END
```
{% endraw %}

## SCR.TXT

{% raw %}
```














                                                     tm    
                          T I Y L I   S O F T W A R E

                              is proud to present

                  +----------------------------------------+
                  |         The Screen Image Editor        |
                  |                                        |
                  |            and Batch Utility           |
                  |                                        |
                  |                   by                   |
                  |         Frank M. Ramaekers Jr.         |
                  +----------------------------------------+
            (c) Copyright 1984-86 "Try-It-You'll-Like-It" Software
































(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software








12/20/86          Screen Image Editor and Batch Utility V2.1f           Page i

Table of Contents:

0.0  The User-supported Concept . . . . . . . . . . . . . . . . . . . . . .  1

1.0  Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  1
     1.1  Overview  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  1
     1.2  The Screen Image Editor . . . . . . . . . . . . . . . . . . . . .  1
     1.3  The Batch Utility . . . . . . . . . . . . . . . . . . . . . . . .  2
     1.4  Minimum Requirements  . . . . . . . . . . . . . . . . . . . . . .  2

2.0  Instructions . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  2
     2.1  The Screen Image Editor . . . . . . . . . . . . . . . . . . . . .  2
          2.1.1  Function Key Assignments . . . . . . . . . . . . . . . . .  2
          2.1.2  Alternate Function Key Assignments . . . . . . . . . . . .  3
          2.1.3  Shift Function Key Assignment  . . . . . . . . . . . . . .  3
          2.1.4  Control Key Assignments  . . . . . . . . . . . . . . . . .  4
          2.1.5  Special Key Assignments  . . . . . . . . . . . . . . . . .  4
          2.1.6  Alternate Key Assignments  . . . . . . . . . . . . . . . .  5
          2.1.7  Graphic Keyboard Layout  . . . . . . . . . . . . . . . . .  5
          2.1.8  Line 25 Information  . . . . . . . . . . . . . . . . . . .  5
          2.1.9  Color Chart  . . . . . . . . . . . . . . . . . . . . . . .  5
     2.2  The Batch Utility . . . . . . . . . . . . . . . . . . . . . . . .  6
          2.2.1  Command Format . . . . . . . . . . . . . . . . . . . . . .  6
          2.2.2  Examples . . . . . . . . . . . . . . . . . . . . . . . . .  7
          2.2.3  A Batch File Example . . . . . . . . . . . . . . . . . . .  8
     2.3  The Conversion Utility  . . . . . . . . . . . . . . . . . . . . .  9
     2.4  The Programming Languages Interfaces  . . . . . . . . . . . . . . 10
          2.4.1  The Clipper Interface (SCRCLIPR.OBJ) . . . . . . . . . . . 10
          2.4.2  The COBOL Interface (SCRCOB.OBJ) . . . . . . . . . . . . . 10
          2.4.3  The dBASE III+ Interface (SCRDBASE.BIN)  . . . . . . . . . 10
          2.4.4  The QuickBASIC Interface (SCRQBAS.OBJ) . . . . . . . . . . 10

3.0  Registration Form  . . . . . . . . . . . . . . . . . . . . . . . . . . 11






















(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 1


0.0     The User-supported Concept
----------------------------------

     This product is distributed on a basis that the product will sell itself.  
This reduces advertising, distribution, and copy-protection costs.  This means 
that you can copy and share this program with others,  on the conditions  that 
the  program  is  not distributed in modified form and that no  fee  or  other 
consideration  is  charged.   The  only thing I ask is that if you  find  this 
product  of  value,  please send a donation ($24 suggested) to  the  following 
address:

        Frank M. Ramaekers Jr.
        4614 Arapahoe Tr.
        Austin, Texas  78745

     Your contribution entitles you to the following:

          1)   The latest version of this system.  Which will be mailed to you  
               upon receipt of your donation.
          2)   When  a new version is available,  you will be  notified.   You 
               will then have the option of sending your original (with return 
               postage) for this new version.
          3)   You will also be notified of future products.
          4)   Responses to questions, complaints or problems that you send in.


1.0  Introduction
--------------------

1.1  Overview
-------------
     The  Screen  Image processing system was created to  assist  in  creating 
menus  and  help  screens.   Current DOS batch commands (e.g.  ECHO  and  REM) 
provide only line-by-line creation of a screen image that was extremely  slow.  
Also,  these  batch  files were very tedious to edit,  especially  if  graphic 
characters  were used.   In addition,  neither command provides for  attribute 
selection.  Plus, DOS makes no provisions for keyboard input to facilitate the 
selection  process.  The SCREDIT.COM program provides a method of  retrieving, 
editing  and  saving  screen  images  that  can  be  used  in  a  batch  file.  
SCRBATCH.COM  was created to display the screen image and optionally accept  a 
response  from the keyboard and set the ERRORLEVEL (so it can be tested  using 
the IF batch subcommand).

1.2  The Screen Image Editor
----------------------------
     The  Screen Image Editor is a utility by which users can maintain  screen 
images.   Screen images can be loaded,  edited, and saved.  Most of the common 
graphic characters are easily accessable through the keyboard and are arranged 
in a conevient layout.   All the major editing functions are incorporated into 
this editor. In addition, the editor allows full utilization of all attributes 
in  either  black & white or color.   Also,  an interactive help  facility  is 
provided.  This facility provides information on all key assignments.





(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 2


1.3  The Screen Image Batch Utility
-----------------------------------
     The Batch Utility provides a means of displaying screen images created by 
the  editor.   This utility also includes a means of accepting input (via  the 
keyboard)  and  setting the ERRORLEVEL.   In turn,  a batch file can test  the 
ERRORLEVEL (with the IF batch subcommand) and process the request accordingly.

1.4  Minimum Requirements
-------------------------
     1)   An IBM PC (tm) or compatible.
     2)   PC or MS DOS 2.0 or higher.
     3)   A Minimum of 64k of memory
     4)   One monitor card & monitor (color or monochrome).
     5)   At least one single-sided diskette drive.
     6)   The following programs:   SCREDIT.COM  SCRBATCH.COM SCRHELPA.COM
          SCRHELPB.COM SCRHELPC.COM SCRHELPD.COM SCRHELPE.COM SCRCONV.COM
          SCRCLIPR.OBJ SCRCOB.OBJ   SCRDBASE.BIN SCRQBAS.OBJ  SCR.TXT


2.0  Instructions
-----------------

2.1  Screen Image Editor
------------------------
     To  invoke the screen image editor,  insert the  program  diskette,  then 
enter SCREDIT then press enter.  There are no operands nor options.

A>SCREDIT

2.1.1  Function Key Assignments
-------------------------------
     F1  - Toggle  between  Text(standard)/Graphics  keyboard  layouts.   When 
           initialized  SCREDIT  will  have  the  standard  keyboard   layout.  
           Pressing  the  F1 key will toggle to the graphics  keyboard  layout 
           (hexadecimal characters 80 - FF).

     F2  - Toggle foreground blink attribute.  This will toggle the foreground 
           blink attribute bit.

     F3  - Swap  background/foreground attributes.   This will logically  swap 
           the  background/foreground attributes.   Blink and highlight cannot 
           be swapped and are retained.  Therefore, the background (foreground 
           after  swap)  attribute  will  reflect  the  blink  and   highlight 
           settings.

     F4  - Toggle   bright  foreground  attribute.    This  will  toggle   the 
           foreground bright attribute bit.

     F5  - Increase foreground attribute value.  This will logically increment 
           the  current  value  of the foreground attribute  (black  [0]  will 
           become blue [1], blue [1] will become green [2], ... white [F] will 
           become black [0]).





(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 3


2.1.1  Function Key Assignments (cont.)
---------------------------------------
     F6  - Decrease foreground attribute value.  This will logically decrement 
           the current value of the foreground attribute (blue [1] will become 
           black  [0],  green  [2] will become blue [1],  ...  black [0]  will 
           become white [F]).
     F7  - Increase background attribute value.  This will logically increment 
           the  current  value  of the background attribute  (black  [0]  will 
           become blue [1], blue [1] will become green [2], ... white [7] will 
           become black [0]).

     F8  - Decrease background attribute value.  This will logically decrement 
           the current value of the background attribute (blue [1] will become 
           black  [0],  green [2] will become blue [1],  ...  black  [0]  will 
           become white [7]).

     F9  - Load screen image (or block) from disk.

     F10 - Save screen image to disk.

2.1.2  Alternate Function Key Assignments
-----------------------------------------
     Alt-F1  - Help information which includes all key assignments. 

     Alt-F5  - Clear screen using the current attribute setting.

     Alt-F7  - Change all occurances of the attribute at the  current  cursor 
               location with the current attribute setting.

     Alt-F9  - Exit temporarily to DOS.  (Use the EXIT command to return.)

     Alt-F10 - Return to DOS.

2.1.3  Shift Function Key Assignments
-----------------------------------------
     Shift-F1  - Mark block at cursor position.

     Shift-F2  - Unmark block.

     Shift-F3  - Move the currently marked block.
                 (The  area  vacated  is filled with spaces using  the  current 
                 attribute.)

     Shift-F4  - Copy the currently marked block.

     Shift-F5  - Fill the currently marked block with a specified character.
                 (The  fill character entered is effected by the keyboard  mode 
                 currently set.)

     Shift-F10 - Save the currently marked block to disk.







(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 4


2.1.4  Control Key Assignments
------------------------------
     ^2 - Set/Clear tab settings. 
          (use cursor/tab-key to position, T to set/clear)
     ^A - Move cursor to beginning of previous word.
     ^D - Move cursor forward one character.
     ^E - Move cursor up one line.
     ^F - Move cursor to beginning of next word.
     ^G - Delete character at cursor position.
     ^H - Delete character before cursor position.
     ^I - Tab forward.
     ^J - Left justify line.
     ^K - Center line.
     ^L - Right justify line.
     ^M - Move cursor to beginning of next line.
     ^N - Move remainder of line to next line.
     ^Q - Delete previous word.
     ^S - Move cursor backward one column.
     ^T - Delete next word.
     ^V - Toggle to/from insert mode.
     ^X - Move cursor down one line.
     ^Y - Delete line.

(Note:   Functions ^G,  ^H, ^N, ^Q, ^T and ^Y fill using the current attribute 
and a space for the character.)

2.1.5  Special Key Assignments
------------------------------
     ->      - Move cursor right one column.
     <-      - Move cursor left one column.
     ^       - Move cursor up one row.
     v       - Move cursor down one row.
     <-->    - Tab key.
     BkSp    - Delete character before cursor.
     Home    - Move cursor to first character on line.
     End     - Move cursor to last character on line.
     Pg Up   - Move cursor to row 1, column 1.
     Pg Dn   - Move cursor to row 24, column 80.
     Ins     - Toggle to/from insert mode.
     Del     - Delete character above cursor.
     ^->     - Move cursor to next word.
     ^<-     - Move cursor to previous word.
     ^Home   - Erase to beginning of line.
     ^End    - Erase to end of line.
     ^Pg Up  - Erase to beginning of screen.
     ^Pg Dn  - Erase to end of screen.
     Sh <--> - Backward tab (Sh is the shift key).

(Note:   All  erase functions fill using the current attribute and a space for 
the character.)







(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 5


2.1.6  Alternate Key Assignments
--------------------------------
     Please see page 4 of the help facility (Alt-F1) for this information.

2.1.7  Graphic Keyboard Layout
------------------------------
     Please see page 3 of the help facility (Alt-F1) for this information.

2.1.8  Line 25 Information
--------------------------
     Please see page 5 of the help facility (Alt-F1) for this information.

2.1.9  Color Chart
------------------
     The  attribute  byte  of the screen image has the  following  format  (in 
binary):  XYYY  ZZZZ.   Where  X is the forground blink toggle.   YYY  is  the 
background color and ZZZZ is the foreground color.

-------------------------------------------
| Hex. | Binary | Background | Foreground |
-------+--------+------------+------------+
|  0   |  0000  |  Black     | Black      |
|  1   |  0001  |  Blue      | Blue       |
|  2   |  0010  |  Green     | Green      |
|  3   |  0011  |  Cyan      | Cyan       |
|  4   |  0100  |  Red       | Red        |
|  5   |  0101  |  Magenta   | Magenta    |
|  6   |  0110  |  Yellow    | Brown      |
|  7   |  0111  |  White     | Light Grey |
|  8   |  1000  | * Black    | Dark Grey  |
|  9   |  1001  | * Blue     | Light Blue |
|  A   |  1010  | * Green    | Lt. Green  |
|  B   |  1011  | * Cyan     | Light Cyan |
|  C   |  1100  | * Red      | Light Red  |
|  D   |  1101  | * Magenta  | Lt. Magenta|
|  E   |  1110  | * Yellow   | Yellow     |
|  F   |  1111  | * White    | White      |
-------------------------------------------

* These attributes cause the character to blink

















(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 6


2.2  The Batch Utility
----------------------

2.2.1  Command Format
---------------------
A>SCRBATCH [d:] [path\] [filename] [.SCR | .ext]  
               [/a | /c | /n | /pnnn | /q | /sxxxxxxx]
               [/i  @xxxxxxxxxxxxxxxxxxxxxxxxxxxxx@]  [/o##]  [/v | /x##]

               d:      - Drive of screen image.
               path\   - Path to screen image.
               filename- Filename of screen image.
               .ext    - Extension of screen image (.SCR assumed).
               /a      - Ask   (return   ERRORLEVEL=ASCII   of   key   struck, 
                         translated to upper case).
               /b      - Beep the IBM internal speaker.
               /c      - Ask Character (return ERRORLEVEL=0 if 'A' key struck,  
                         1 of 'B' key struck ...  25 if 'Z' key  struck.   The 
                         character is translated to upper-case).
               /f      - Ask Function key (return ERRORLEVEL=0 if F1 key is
                         struck, 2 if F2 is struck ... 10 if shift-F1 is
                         struck ... 20 if CTRL-F1 is struck ... 30 if ALT-F1 is
                         struck).
               /i      - Line 25 input prompt (first non-blank character after 
                         the 'i' will be the delimiter for the string).
               /n      - Ask Numeric (return ERRORLEVEL=0 if '0' key struck, 1 
                         if '1' key struck ... 9 if '9' key struck).
               /o##    - Override  attribute on line 25 (## is valid hex code, 
                         default  attribute is what DOS uses when  writing  to 
                         the screen).
               /pnnn   - Wait for nnn seconds or until a key is pressed if nnn 
                         is equal to zero or omitted.
               /sxxxxx - Selection   list.    xxxxxx  specifies  a  validation                          
                         selection  list  of ASCII  characters.   The  special                          
                         character ~ designates any character.  The ERRORLEVEL                          
                         will  be set based on the relative position  in  this                          
                         list.   Matching  to this list is not case-sensitive. 
                         (for example if /sabcde~ was specified, the ERRORLEVEL
                         will be set to 1 if 'A' is struck, 2 if 'B' is struck 
                         ...  5  if  'E' is struck and 6 if any other  key  is                          
                         struck.)  (NOTE:  The selection list is terminated by 
                         either a space or a '/'.)
               /q      - Query  (return ERRORLEVEL=0 if 'y' or 'Y' key  struck 
                         or ERRORLEVEL=1 if 'n' or 'N' key struck.)
               /v      - Pop-over  Screen  Image  (the  old  screen  image  is 
                         retained and restored after execution).
               /x##    - Clear screen before displaying Screen Image (if ## is 
                         specified it will be used as the attribute as in /o).


        Notes:
                a)  The  complete  file  name  (drive,   path,   filename  and                      
                    extension),  if  specified,  must be the first  parameter.  
                    Options are position independent.



(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 7


        Notes (continued):
                b)  If  more  than one of the following options  is  specified,
                    the first one issued from this list will take presidence:
                    /p /q /a /n /c /f /s.
                c)  SCRBATCH.COM must be on each diskette that utilizes it.
                d)  Both /v and /x cannot be specified at the same time.


2.2.2  Examples
---------------
A>SCRBATCH C:\SCR\SCRHELPA /P /I'Press any key to continue'/o87
     This  will  display the screen SCRHELPA.SCR in sub-directory SCR and  wait 
     for  a  key  to  be pressed.   On line 25 the prompt  'Press  any  key  to 
     continue' will be centered and blinking (87h attribute).

A>SCRBATCH C:SCRHELPA.XXX /Q /I [Please respond by pressing the 'y' or 'n' key[
     This  will display the screen image SCRHELPA.XXX and set the ERRORLEVEL to 
     0  if a 'y' or 'Y' and to 1 if 'n' or 'N' key was struck.   In addition  a 
     prompt is displayed centered on line 25.

A>SCRBATCH C:HELP01 /A
     This will display the screen image HELP01.   The ERRORLEVEL will be set to 
     the ASCII value of the key that was struck.

A>SCRBATCH HELP01A /i'Select 0 through 9 from list above.'/n/o8f
     This  will display the screen image HELP01A.SCR.   The ERRORLEVEL will  be 
     set to the value 0 - 9 corresponding to keys '0' - '9'.   Also,  a  prompt 
     message will appear centered on line 25 with a blink & bright attribute.

A>SCRBATCH CHKDSK /sABCD~ /i'Select a the drive you desire (A-D)'
     This  will display the screen image CHKDSK.SCR.   The ERRORLEVEL will  be 
     set to the value 1 - 4 corresponding to the keys 'A' - 'D'.  If any other 
     key is pressed the ERRORLEVEL will be set to 5. 
























(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 8


2.2.3  A Batch File Example
---------------------------
 1)  SCRBATCH \HELP\LOGO /P3
 2)  :BEGIN
 3)  SCRBATCH \HELP\MENU/I'Select 0 through 9 from list above.'/8f/s0123456789~
 4)  :DOIT
 5)  IF ERRORLEVEL 11 GOTO ERROR
 6)  CLS
 7)  IF ERRORLEVEL 10 GOTO EXIT
 8)  IF ERRORLEVEL 9 GOTO TREE
 9)  IF ERRORLEVEL 8 GOTO CHKDSK
10)  IF ERRORLEVEL 7 GOTO DIR
11)  IF ERRORLEVEL 6 GOTO BASICA
12)  IF ERRORLEVEL 5 GOTO BASIC
13)  IF ERRORLEVEL 4 GOTO COMM
14)  IF ERRORLEVEL 3 GOTO DBASE
15)  IF ERRORLEVEL 2 GOTO LOTUS
16)  IF ERRORLEVEL 1 GOTO WS 
17)  :ERROR
18)  SCRBATCH \HELP\ERROR /p3/v/b
19)  SCRBATCH /s0123456789~
20)  :WS
21)  CD \WS
22)  WS
23)  GOTO BEGIN
24)  :LOTUS
25)  CD \LOTUS
26)  LOTUS
27)  GOTO BEGIN
28)  :DBASE
29)  CD \DBASE3
30)  ECHO Insert the DBASE III system diskette into drive A: (left drive).
31)  ECHO  
32)  PAUSE
33)  DBASE
34)  GOTO BEGIN
35)  :COMM
36)  CD \COMM
37)  PROCOMM
38)  GOTO BEGIN
39)  :BASIC
40)  CD \BASIC
41)  BASIC
42)  GOTO BEGIN
43)  :BASICA
44)  CD \BASIC
45)  BASICA
46)  GOTO BEGIN
46)  :DIR
47)  DIR|MORE
48)  PAUSE
49)  GOTO BEGIN
50)  :CHKDSK
51)  CHKDSK
52)  PAUSE


(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 9


2.2.3  A Batch File Example (cont.)
-----------------------------------

53)  GOTO BEGIN
54)  :TREE
55)  TREE/F|MORE
56)  PAUSE
57)  GOTO BEGIN
58)  :EXIT
59)  CD \

     Statement 1 displays the screen image LOGO.SCR in sub-directory \HELP for 
3  seconds.   The  next statement (2) is a label that will be  used  later  to 
redisplay the menu screen.  Statement 3 displayes the screen image MENU.SCR in 
sub-directory \HELP until a key is struck.   In turn,  the ERRORLEVEL will  be 
set  according  to the selection list provided.   If a zero  is  pressed,  the 
ERRORLEVEL will be set to 1, pressing a the '1' key will set the ERRORLEVEL to 
2 ...  any other key will set the ERRORLEVEL to 11.  The next statement (4) is 
a  label  that  will be used later on.   In the next  statement  (5),  invalid 
responses are filtered out.  The purpose of statement 6 is to clear the screen 
before  the  program is executed.   The next statement (7) checks if  the  key 
struck was '9',  if so a branch is made to the label :EXIT,  which  terminates 
the batch file.   (Notice that the highest value of ERRORLEVEL is filtered off 
first.   This  is  because the 'IF ERRORLEVEL' batch subcommand operates on  a 
greater than or equal to premise.)  Skipping down to statement 16,  if the '0' 
key  is  struck the ERRORLEVEL is set to 1 and a branch is made to  the  label 
:WS.
     In statement 20 has the label :WS.   The next statement (21) changes  the 
current  directory  to \WS.   Statement 22 actually executes  WordStar.   When 
WordStar  is  terminated  statement  23 is executed  which  branches  back  to 
redisplay the menu.
     If an invalid response was entered on the menu,  statement 5 branches  to 
the label :ERROR at statement 17.   In statement 18,  a beep sound is made and 
an error message is 'popped-over' the menu for an interval of 3 seconds. After 
the  three  seconds  has expired the screens returns to it's  original  state.  
Then  in  the next statement (19),  no screen is loaded,   but a  response  is 
expected  from the user as in the the menu ('0' - '9').   After the  user  has 
made a selection statement 20 returns to the filtering process (:DOIT).
     This  batch  file  makes no attempt to reset  the  directory  after  each 
program is executed.  For this reason each change directory statement (CD) and 
references  to screen files begins with a '\'.   Then upon exit from the batch 
file the current directory is reset to the root. 


2.3  The Conversion Utility
---------------------------
     This  utility program will convert a screen image file (.SCR) to either a 
BASIC BLOAD file or a standard ASCII file.   Also available is conversion to a 
screen image file from either a BASIC BLOAD file or a standard ASCII file.  
     To invoke the Conversion Utility enter SCRCONV and press enter.

A>SCRCONV





(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 10


2.4  The Programming Language Interfaces
----------------------------------------
     The  programming language interfaces provide for 3  different  functions.  
The  first  is to load a saved screen image from disk onto  the  screen.   The 
second is to save a screen image into memory.  Lastly there is an interface to 
restore  a previously saved image from memory back to the screen.   With these 
three  interfaces  a  programmer can give the illusion  of  pop-over  windows.
To  accomplish this,  the original screen is saved.   Then another screen  (or 
portion  of  a screen) is loaded.   Then the original screen can  be  restored 
without repainting the image in the programming language.

                  *
2.4.1  The Clipper Interface
----------------------------
To load a screen from disk:      CALL SCRDBASE WITH "LOAD d:\path\filename.ext"
To save a screen to memory:      CALL SCRDBASE WITH "PUSH"
To restore a screen from memory: CALL SCRDBASE WITH "POP"

             *
2.4.2  The MS COBOL Interface
-----------------------------
To load a screen from disk:      CALL "SCRLOAD" USING filename, return-code.
To save a screen to memory:      CALL "SCRPUSH".
To restore a screen from memory: CALL "SCRPOP".

(Note:  return codes 1-255 are DOS errors and 257 means that filename is not a 
screen  image file.   Also,  the data-name filename must be terminated with  a 
space.)

                     *
2.4.3  The dBASE III+ Interface
-------------------------------
To load then Interface module:   LOAD SCRDBASE.
To load a screen from disk:      CALL SCRDBASE WITH "LOAD d:\path\filename.ext"
To save a screen to memory:      CALL SCRDBASE WITH "PUSH"
To restore a screen from memory: CALL SCRDBASE WITH "POP"

             *
2.4.4  The MS QuickBASIC Interface
----------------------------------
To load a screen from disk:      CALL SCRLOAD(filename$,retcode%)
To save a screen to memory:      CALL SCRPUSH
To restore a screen from memory: CALL POP

(Note:  return codes 1-255 are DOS errors,  256 means that the screen is in an 
improper mode and 257 means that filename$ is not a screen image file.)





* Clipper is a registered trademark of Nantucket.
  MS is a registered trademark of Microsoft Coporation.
  dBASE III+ is a registered trademark of Aston-Tate.



(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 11


-------------------------------------------------------------------------------

                     Screen Image Editor Registration Form                v2.1f
    


Name: _______________________________________________      Date:____/____/____
       (Last)            (First)     (Middle Initial)           (MM   DD   YY)


Address: ____________________________________________


City: _______________________  State: _______________  Zip Code: _____________


Amount Enclosed: ___________________
                                        +-------------------------------------
                                        |********** DO NOT MARK HERE *********
Send to:  Frank M. Ramaekers Jr.        |
          4614 Arapahoe Tr.             | Serial No.___________________
          Austin, Texas  78745          |
                                        | Version No.__________________
                                        |
                                        | Date issued:_________________
-------------------------------------------------------------------------------































(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





```
{% endraw %}

## SCR.TXT

{% raw %}
```














                                                     tm    
                          T I Y L I   S O F T W A R E

                              is proud to present

                  +----------------------------------------+
                  |         The Screen Image Editor        |
                  |                                        |
                  |            and Batch Utility           |
                  |                                        |
                  |                   by                   |
                  |         Frank M. Ramaekers Jr.         |
                  +----------------------------------------+
            (c) Copyright 1984-86 "Try-It-You'll-Like-It" Software
































(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software








12/20/86          Screen Image Editor and Batch Utility V2.1f           Page i

Table of Contents:

0.0  The User-supported Concept . . . . . . . . . . . . . . . . . . . . . .  1

1.0  Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  1
     1.1  Overview  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  1
     1.2  The Screen Image Editor . . . . . . . . . . . . . . . . . . . . .  1
     1.3  The Batch Utility . . . . . . . . . . . . . . . . . . . . . . . .  2
     1.4  Minimum Requirements  . . . . . . . . . . . . . . . . . . . . . .  2

2.0  Instructions . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  2
     2.1  The Screen Image Editor . . . . . . . . . . . . . . . . . . . . .  2
          2.1.1  Function Key Assignments . . . . . . . . . . . . . . . . .  2
          2.1.2  Alternate Function Key Assignments . . . . . . . . . . . .  3
          2.1.3  Shift Function Key Assignment  . . . . . . . . . . . . . .  3
          2.1.4  Control Key Assignments  . . . . . . . . . . . . . . . . .  4
          2.1.5  Special Key Assignments  . . . . . . . . . . . . . . . . .  4
          2.1.6  Alternate Key Assignments  . . . . . . . . . . . . . . . .  5
          2.1.7  Graphic Keyboard Layout  . . . . . . . . . . . . . . . . .  5
          2.1.8  Line 25 Information  . . . . . . . . . . . . . . . . . . .  5
          2.1.9  Color Chart  . . . . . . . . . . . . . . . . . . . . . . .  5
     2.2  The Batch Utility . . . . . . . . . . . . . . . . . . . . . . . .  6
          2.2.1  Command Format . . . . . . . . . . . . . . . . . . . . . .  6
          2.2.2  Examples . . . . . . . . . . . . . . . . . . . . . . . . .  7
          2.2.3  A Batch File Example . . . . . . . . . . . . . . . . . . .  8
     2.3  The Conversion Utility  . . . . . . . . . . . . . . . . . . . . .  9
     2.4  The Programming Languages Interfaces  . . . . . . . . . . . . . . 10
          2.4.1  The Clipper Interface (SCRCLIPR.OBJ) . . . . . . . . . . . 10
          2.4.2  The COBOL Interface (SCRCOB.OBJ) . . . . . . . . . . . . . 10
          2.4.3  The dBASE III+ Interface (SCRDBASE.BIN)  . . . . . . . . . 10
          2.4.4  The QuickBASIC Interface (SCRQBAS.OBJ) . . . . . . . . . . 10

3.0  Registration Form  . . . . . . . . . . . . . . . . . . . . . . . . . . 11






















(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 1


0.0     The User-supported Concept
----------------------------------

     This product is distributed on a basis that the product will sell itself.  
This reduces advertising, distribution, and copy-protection costs.  This means 
that you can copy and share this program with others,  on the conditions  that 
the  program  is  not distributed in modified form and that no  fee  or  other 
consideration  is  charged.   The  only thing I ask is that if you  find  this 
product  of  value,  please send a donation ($24 suggested) to  the  following 
address:

        Frank M. Ramaekers Jr.
        4614 Arapahoe Tr.
        Austin, Texas  78745

     Your contribution entitles you to the following:

          1)   The latest version of this system.  Which will be mailed to you  
               upon receipt of your donation.
          2)   When  a new version is available,  you will be  notified.   You 
               will then have the option of sending your original (with return 
               postage) for this new version.
          3)   You will also be notified of future products.
          4)   Responses to questions, complaints or problems that you send in.


1.0  Introduction
--------------------

1.1  Overview
-------------
     The  Screen  Image processing system was created to  assist  in  creating 
menus  and  help  screens.   Current DOS batch commands (e.g.  ECHO  and  REM) 
provide only line-by-line creation of a screen image that was extremely  slow.  
Also,  these  batch  files were very tedious to edit,  especially  if  graphic 
characters  were used.   In addition,  neither command provides for  attribute 
selection.  Plus, DOS makes no provisions for keyboard input to facilitate the 
selection  process.  The SCREDIT.COM program provides a method of  retrieving, 
editing  and  saving  screen  images  that  can  be  used  in  a  batch  file.  
SCRBATCH.COM  was created to display the screen image and optionally accept  a 
response  from the keyboard and set the ERRORLEVEL (so it can be tested  using 
the IF batch subcommand).

1.2  The Screen Image Editor
----------------------------
     The  Screen Image Editor is a utility by which users can maintain  screen 
images.   Screen images can be loaded,  edited, and saved.  Most of the common 
graphic characters are easily accessable through the keyboard and are arranged 
in a conevient layout.   All the major editing functions are incorporated into 
this editor. In addition, the editor allows full utilization of all attributes 
in  either  black & white or color.   Also,  an interactive help  facility  is 
provided.  This facility provides information on all key assignments.





(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 2


1.3  The Screen Image Batch Utility
-----------------------------------
     The Batch Utility provides a means of displaying screen images created by 
the  editor.   This utility also includes a means of accepting input (via  the 
keyboard)  and  setting the ERRORLEVEL.   In turn,  a batch file can test  the 
ERRORLEVEL (with the IF batch subcommand) and process the request accordingly.

1.4  Minimum Requirements
-------------------------
     1)   An IBM PC (tm) or compatible.
     2)   PC or MS DOS 2.0 or higher.
     3)   A Minimum of 64k of memory
     4)   One monitor card & monitor (color or monochrome).
     5)   At least one single-sided diskette drive.
     6)   The following programs:   SCREDIT.COM  SCRBATCH.COM SCRHELPA.COM
          SCRHELPB.COM SCRHELPC.COM SCRHELPD.COM SCRHELPE.COM SCRCONV.COM
          SCRCLIPR.OBJ SCRCOB.OBJ   SCRDBASE.BIN SCRQBAS.OBJ  SCR.TXT


2.0  Instructions
-----------------

2.1  Screen Image Editor
------------------------
     To  invoke the screen image editor,  insert the  program  diskette,  then 
enter SCREDIT then press enter.  There are no operands nor options.

A>SCREDIT

2.1.1  Function Key Assignments
-------------------------------
     F1  - Toggle  between  Text(standard)/Graphics  keyboard  layouts.   When 
           initialized  SCREDIT  will  have  the  standard  keyboard   layout.  
           Pressing  the  F1 key will toggle to the graphics  keyboard  layout 
           (hexadecimal characters 80 - FF).

     F2  - Toggle foreground blink attribute.  This will toggle the foreground 
           blink attribute bit.

     F3  - Swap  background/foreground attributes.   This will logically  swap 
           the  background/foreground attributes.   Blink and highlight cannot 
           be swapped and are retained.  Therefore, the background (foreground 
           after  swap)  attribute  will  reflect  the  blink  and   highlight 
           settings.

     F4  - Toggle   bright  foreground  attribute.    This  will  toggle   the 
           foreground bright attribute bit.

     F5  - Increase foreground attribute value.  This will logically increment 
           the  current  value  of the foreground attribute  (black  [0]  will 
           become blue [1], blue [1] will become green [2], ... white [F] will 
           become black [0]).





(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 3


2.1.1  Function Key Assignments (cont.)
---------------------------------------
     F6  - Decrease foreground attribute value.  This will logically decrement 
           the current value of the foreground attribute (blue [1] will become 
           black  [0],  green  [2] will become blue [1],  ...  black [0]  will 
           become white [F]).
     F7  - Increase background attribute value.  This will logically increment 
           the  current  value  of the background attribute  (black  [0]  will 
           become blue [1], blue [1] will become green [2], ... white [7] will 
           become black [0]).

     F8  - Decrease background attribute value.  This will logically decrement 
           the current value of the background attribute (blue [1] will become 
           black  [0],  green [2] will become blue [1],  ...  black  [0]  will 
           become white [7]).

     F9  - Load screen image (or block) from disk.

     F10 - Save screen image to disk.

2.1.2  Alternate Function Key Assignments
-----------------------------------------
     Alt-F1  - Help information which includes all key assignments. 

     Alt-F5  - Clear screen using the current attribute setting.

     Alt-F7  - Change all occurances of the attribute at the  current  cursor 
               location with the current attribute setting.

     Alt-F9  - Exit temporarily to DOS.  (Use the EXIT command to return.)

     Alt-F10 - Return to DOS.

2.1.3  Shift Function Key Assignments
-----------------------------------------
     Shift-F1  - Mark block at cursor position.

     Shift-F2  - Unmark block.

     Shift-F3  - Move the currently marked block.
                 (The  area  vacated  is filled with spaces using  the  current 
                 attribute.)

     Shift-F4  - Copy the currently marked block.

     Shift-F5  - Fill the currently marked block with a specified character.
                 (The  fill character entered is effected by the keyboard  mode 
                 currently set.)

     Shift-F10 - Save the currently marked block to disk.







(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 4


2.1.4  Control Key Assignments
------------------------------
     ^2 - Set/Clear tab settings. 
          (use cursor/tab-key to position, T to set/clear)
     ^A - Move cursor to beginning of previous word.
     ^D - Move cursor forward one character.
     ^E - Move cursor up one line.
     ^F - Move cursor to beginning of next word.
     ^G - Delete character at cursor position.
     ^H - Delete character before cursor position.
     ^I - Tab forward.
     ^J - Left justify line.
     ^K - Center line.
     ^L - Right justify line.
     ^M - Move cursor to beginning of next line.
     ^N - Move remainder of line to next line.
     ^Q - Delete previous word.
     ^S - Move cursor backward one column.
     ^T - Delete next word.
     ^V - Toggle to/from insert mode.
     ^X - Move cursor down one line.
     ^Y - Delete line.

(Note:   Functions ^G,  ^H, ^N, ^Q, ^T and ^Y fill using the current attribute 
and a space for the character.)

2.1.5  Special Key Assignments
------------------------------
     ->      - Move cursor right one column.
     <-      - Move cursor left one column.
     ^       - Move cursor up one row.
     v       - Move cursor down one row.
     <-->    - Tab key.
     BkSp    - Delete character before cursor.
     Home    - Move cursor to first character on line.
     End     - Move cursor to last character on line.
     Pg Up   - Move cursor to row 1, column 1.
     Pg Dn   - Move cursor to row 24, column 80.
     Ins     - Toggle to/from insert mode.
     Del     - Delete character above cursor.
     ^->     - Move cursor to next word.
     ^<-     - Move cursor to previous word.
     ^Home   - Erase to beginning of line.
     ^End    - Erase to end of line.
     ^Pg Up  - Erase to beginning of screen.
     ^Pg Dn  - Erase to end of screen.
     Sh <--> - Backward tab (Sh is the shift key).

(Note:   All  erase functions fill using the current attribute and a space for 
the character.)







(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 5


2.1.6  Alternate Key Assignments
--------------------------------
     Please see page 4 of the help facility (Alt-F1) for this information.

2.1.7  Graphic Keyboard Layout
------------------------------
     Please see page 3 of the help facility (Alt-F1) for this information.

2.1.8  Line 25 Information
--------------------------
     Please see page 5 of the help facility (Alt-F1) for this information.

2.1.9  Color Chart
------------------
     The  attribute  byte  of the screen image has the  following  format  (in 
binary):  XYYY  ZZZZ.   Where  X is the forground blink toggle.   YYY  is  the 
background color and ZZZZ is the foreground color.

-------------------------------------------
| Hex. | Binary | Background | Foreground |
-------+--------+------------+------------+
|  0   |  0000  |  Black     | Black      |
|  1   |  0001  |  Blue      | Blue       |
|  2   |  0010  |  Green     | Green      |
|  3   |  0011  |  Cyan      | Cyan       |
|  4   |  0100  |  Red       | Red        |
|  5   |  0101  |  Magenta   | Magenta    |
|  6   |  0110  |  Yellow    | Brown      |
|  7   |  0111  |  White     | Light Grey |
|  8   |  1000  | * Black    | Dark Grey  |
|  9   |  1001  | * Blue     | Light Blue |
|  A   |  1010  | * Green    | Lt. Green  |
|  B   |  1011  | * Cyan     | Light Cyan |
|  C   |  1100  | * Red      | Light Red  |
|  D   |  1101  | * Magenta  | Lt. Magenta|
|  E   |  1110  | * Yellow   | Yellow     |
|  F   |  1111  | * White    | White      |
-------------------------------------------

* These attributes cause the character to blink

















(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 6


2.2  The Batch Utility
----------------------

2.2.1  Command Format
---------------------
A>SCRBATCH [d:] [path\] [filename] [.SCR | .ext]  
               [/a | /c | /n | /pnnn | /q | /sxxxxxxx]
               [/i  @xxxxxxxxxxxxxxxxxxxxxxxxxxxxx@]  [/o##]  [/v | /x##]

               d:      - Drive of screen image.
               path\   - Path to screen image.
               filename- Filename of screen image.
               .ext    - Extension of screen image (.SCR assumed).
               /a      - Ask   (return   ERRORLEVEL=ASCII   of   key   struck, 
                         translated to upper case).
               /b      - Beep the IBM internal speaker.
               /c      - Ask Character (return ERRORLEVEL=0 if 'A' key struck,  
                         1 of 'B' key struck ...  25 if 'Z' key  struck.   The 
                         character is translated to upper-case).
               /f      - Ask Function key (return ERRORLEVEL=0 if F1 key is
                         struck, 2 if F2 is struck ... 10 if shift-F1 is
                         struck ... 20 if CTRL-F1 is struck ... 30 if ALT-F1 is
                         struck).
               /i      - Line 25 input prompt (first non-blank character after 
                         the 'i' will be the delimiter for the string).
               /n      - Ask Numeric (return ERRORLEVEL=0 if '0' key struck, 1 
                         if '1' key struck ... 9 if '9' key struck).
               /o##    - Override  attribute on line 25 (## is valid hex code, 
                         default  attribute is what DOS uses when  writing  to 
                         the screen).
               /pnnn   - Wait for nnn seconds or until a key is pressed if nnn 
                         is equal to zero or omitted.
               /sxxxxx - Selection   list.    xxxxxx  specifies  a  validation                          
                         selection  list  of ASCII  characters.   The  special                          
                         character ~ designates any character.  The ERRORLEVEL                          
                         will  be set based on the relative position  in  this                          
                         list.   Matching  to this list is not case-sensitive. 
                         (for example if /sabcde~ was specified, the ERRORLEVEL
                         will be set to 1 if 'A' is struck, 2 if 'B' is struck 
                         ...  5  if  'E' is struck and 6 if any other  key  is                          
                         struck.)  (NOTE:  The selection list is terminated by 
                         either a space or a '/'.)
               /q      - Query  (return ERRORLEVEL=0 if 'y' or 'Y' key  struck 
                         or ERRORLEVEL=1 if 'n' or 'N' key struck.)
               /v      - Pop-over  Screen  Image  (the  old  screen  image  is 
                         retained and restored after execution).
               /x##    - Clear screen before displaying Screen Image (if ## is 
                         specified it will be used as the attribute as in /o).


        Notes:
                a)  The  complete  file  name  (drive,   path,   filename  and                      
                    extension),  if  specified,  must be the first  parameter.  
                    Options are position independent.



(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 7


        Notes (continued):
                b)  If  more  than one of the following options  is  specified,
                    the first one issued from this list will take presidence:
                    /p /q /a /n /c /f /s.
                c)  SCRBATCH.COM must be on each diskette that utilizes it.
                d)  Both /v and /x cannot be specified at the same time.


2.2.2  Examples
---------------
A>SCRBATCH C:\SCR\SCRHELPA /P /I'Press any key to continue'/o87
     This  will  display the screen SCRHELPA.SCR in sub-directory SCR and  wait 
     for  a  key  to  be pressed.   On line 25 the prompt  'Press  any  key  to 
     continue' will be centered and blinking (87h attribute).

A>SCRBATCH C:SCRHELPA.XXX /Q /I [Please respond by pressing the 'y' or 'n' key[
     This  will display the screen image SCRHELPA.XXX and set the ERRORLEVEL to 
     0  if a 'y' or 'Y' and to 1 if 'n' or 'N' key was struck.   In addition  a 
     prompt is displayed centered on line 25.

A>SCRBATCH C:HELP01 /A
     This will display the screen image HELP01.   The ERRORLEVEL will be set to 
     the ASCII value of the key that was struck.

A>SCRBATCH HELP01A /i'Select 0 through 9 from list above.'/n/o8f
     This  will display the screen image HELP01A.SCR.   The ERRORLEVEL will  be 
     set to the value 0 - 9 corresponding to keys '0' - '9'.   Also,  a  prompt 
     message will appear centered on line 25 with a blink & bright attribute.

A>SCRBATCH CHKDSK /sABCD~ /i'Select a the drive you desire (A-D)'
     This  will display the screen image CHKDSK.SCR.   The ERRORLEVEL will  be 
     set to the value 1 - 4 corresponding to the keys 'A' - 'D'.  If any other 
     key is pressed the ERRORLEVEL will be set to 5. 
























(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 8


2.2.3  A Batch File Example
---------------------------
 1)  SCRBATCH \HELP\LOGO /P3
 2)  :BEGIN
 3)  SCRBATCH \HELP\MENU/I'Select 0 through 9 from list above.'/8f/s0123456789~
 4)  :DOIT
 5)  IF ERRORLEVEL 11 GOTO ERROR
 6)  CLS
 7)  IF ERRORLEVEL 10 GOTO EXIT
 8)  IF ERRORLEVEL 9 GOTO TREE
 9)  IF ERRORLEVEL 8 GOTO CHKDSK
10)  IF ERRORLEVEL 7 GOTO DIR
11)  IF ERRORLEVEL 6 GOTO BASICA
12)  IF ERRORLEVEL 5 GOTO BASIC
13)  IF ERRORLEVEL 4 GOTO COMM
14)  IF ERRORLEVEL 3 GOTO DBASE
15)  IF ERRORLEVEL 2 GOTO LOTUS
16)  IF ERRORLEVEL 1 GOTO WS 
17)  :ERROR
18)  SCRBATCH \HELP\ERROR /p3/v/b
19)  SCRBATCH /s0123456789~
20)  :WS
21)  CD \WS
22)  WS
23)  GOTO BEGIN
24)  :LOTUS
25)  CD \LOTUS
26)  LOTUS
27)  GOTO BEGIN
28)  :DBASE
29)  CD \DBASE3
30)  ECHO Insert the DBASE III system diskette into drive A: (left drive).
31)  ECHO  
32)  PAUSE
33)  DBASE
34)  GOTO BEGIN
35)  :COMM
36)  CD \COMM
37)  PROCOMM
38)  GOTO BEGIN
39)  :BASIC
40)  CD \BASIC
41)  BASIC
42)  GOTO BEGIN
43)  :BASICA
44)  CD \BASIC
45)  BASICA
46)  GOTO BEGIN
46)  :DIR
47)  DIR|MORE
48)  PAUSE
49)  GOTO BEGIN
50)  :CHKDSK
51)  CHKDSK
52)  PAUSE


(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 9


2.2.3  A Batch File Example (cont.)
-----------------------------------

53)  GOTO BEGIN
54)  :TREE
55)  TREE/F|MORE
56)  PAUSE
57)  GOTO BEGIN
58)  :EXIT
59)  CD \

     Statement 1 displays the screen image LOGO.SCR in sub-directory \HELP for 
3  seconds.   The  next statement (2) is a label that will be  used  later  to 
redisplay the menu screen.  Statement 3 displayes the screen image MENU.SCR in 
sub-directory \HELP until a key is struck.   In turn,  the ERRORLEVEL will  be 
set  according  to the selection list provided.   If a zero  is  pressed,  the 
ERRORLEVEL will be set to 1, pressing a the '1' key will set the ERRORLEVEL to 
2 ...  any other key will set the ERRORLEVEL to 11.  The next statement (4) is 
a  label  that  will be used later on.   In the next  statement  (5),  invalid 
responses are filtered out.  The purpose of statement 6 is to clear the screen 
before  the  program is executed.   The next statement (7) checks if  the  key 
struck was '9',  if so a branch is made to the label :EXIT,  which  terminates 
the batch file.   (Notice that the highest value of ERRORLEVEL is filtered off 
first.   This  is  because the 'IF ERRORLEVEL' batch subcommand operates on  a 
greater than or equal to premise.)  Skipping down to statement 16,  if the '0' 
key  is  struck the ERRORLEVEL is set to 1 and a branch is made to  the  label 
:WS.
     In statement 20 has the label :WS.   The next statement (21) changes  the 
current  directory  to \WS.   Statement 22 actually executes  WordStar.   When 
WordStar  is  terminated  statement  23 is executed  which  branches  back  to 
redisplay the menu.
     If an invalid response was entered on the menu,  statement 5 branches  to 
the label :ERROR at statement 17.   In statement 18,  a beep sound is made and 
an error message is 'popped-over' the menu for an interval of 3 seconds. After 
the  three  seconds  has expired the screens returns to it's  original  state.  
Then  in  the next statement (19),  no screen is loaded,   but a  response  is 
expected  from the user as in the the menu ('0' - '9').   After the  user  has 
made a selection statement 20 returns to the filtering process (:DOIT).
     This  batch  file  makes no attempt to reset  the  directory  after  each 
program is executed.  For this reason each change directory statement (CD) and 
references  to screen files begins with a '\'.   Then upon exit from the batch 
file the current directory is reset to the root. 


2.3  The Conversion Utility
---------------------------
     This  utility program will convert a screen image file (.SCR) to either a 
BASIC BLOAD file or a standard ASCII file.   Also available is conversion to a 
screen image file from either a BASIC BLOAD file or a standard ASCII file.  
     To invoke the Conversion Utility enter SCRCONV and press enter.

A>SCRCONV





(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 10


2.4  The Programming Language Interfaces
----------------------------------------
     The  programming language interfaces provide for 3  different  functions.  
The  first  is to load a saved screen image from disk onto  the  screen.   The 
second is to save a screen image into memory.  Lastly there is an interface to 
restore  a previously saved image from memory back to the screen.   With these 
three  interfaces  a  programmer can give the illusion  of  pop-over  windows.
To  accomplish this,  the original screen is saved.   Then another screen  (or 
portion  of  a screen) is loaded.   Then the original screen can  be  restored 
without repainting the image in the programming language.

                  *
2.4.1  The Clipper Interface
----------------------------
To load a screen from disk:      CALL SCRDBASE WITH "LOAD d:\path\filename.ext"
To save a screen to memory:      CALL SCRDBASE WITH "PUSH"
To restore a screen from memory: CALL SCRDBASE WITH "POP"

             *
2.4.2  The MS COBOL Interface
-----------------------------
To load a screen from disk:      CALL "SCRLOAD" USING filename, return-code.
To save a screen to memory:      CALL "SCRPUSH".
To restore a screen from memory: CALL "SCRPOP".

(Note:  return codes 1-255 are DOS errors and 257 means that filename is not a 
screen  image file.   Also,  the data-name filename must be terminated with  a 
space.)

                     *
2.4.3  The dBASE III+ Interface
-------------------------------
To load then Interface module:   LOAD SCRDBASE.
To load a screen from disk:      CALL SCRDBASE WITH "LOAD d:\path\filename.ext"
To save a screen to memory:      CALL SCRDBASE WITH "PUSH"
To restore a screen from memory: CALL SCRDBASE WITH "POP"

             *
2.4.4  The MS QuickBASIC Interface
----------------------------------
To load a screen from disk:      CALL SCRLOAD(filename$,retcode%)
To save a screen to memory:      CALL SCRPUSH
To restore a screen from memory: CALL POP

(Note:  return codes 1-255 are DOS errors,  256 means that the screen is in an 
improper mode and 257 means that filename$ is not a screen image file.)





* Clipper is a registered trademark of Nantucket.
  MS is a registered trademark of Microsoft Coporation.
  dBASE III+ is a registered trademark of Aston-Tate.



(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





12/20/86         Screen Image Editor and Batch Utility V2.1f           Page 11


-------------------------------------------------------------------------------

                     Screen Image Editor Registration Form                v2.1f
    


Name: _______________________________________________      Date:____/____/____
       (Last)            (First)     (Middle Initial)           (MM   DD   YY)


Address: ____________________________________________


City: _______________________  State: _______________  Zip Code: _____________


Amount Enclosed: ___________________
                                        +-------------------------------------
                                        |********** DO NOT MARK HERE *********
Send to:  Frank M. Ramaekers Jr.        |
          4614 Arapahoe Tr.             | Serial No.___________________
          Austin, Texas  78745          |
                                        | Version No.__________________
                                        |
                                        | Date issued:_________________
-------------------------------------------------------------------------------































(c) Copyright 1984-86 Frank M. Ramaekers Jr.          User-supported Software





```
{% endraw %}

## SETERROR.ASM

{% raw %}
```


       page    64,132
       title   SETERROR-sets the ERRORLEVEL for DOS batch file processing
       subttl  by Tony Alan Rhea 10/24/83
;
;
comment *

       This program accepts one command line argument and sets the
       DOS ERRORLEVEL to that argument.  Currently, this program has
       a limit of 9 for the errorlevel, but apparently DOS has a a
       much higher limit (FFh -- the code is returned in a half-reg).
       An invalid or missing argument gives an error message and an
       errorlevel 0.  This program requires DOS 2.0.

       Usage:
             SETERROR n
       where n is between 0 and 9.


       Copyright (C) 1983  Tony Alan Rhea
       This program may be copied and distributed for personal use
       but not for profit provided this notice is included.  Author makes
       no warranty, expressed or implied, as to the correct nature and
       operation of this software.

       You may make and distribute as many copies of this program as you wish
       for your PERSONAL use only ( NOT for business purposes, please! ).
       Feel free to modify, mutilate, or adulterate this program.  If you come
       up with an bug or improvement, please let me know by writing me at this
       address:
               Tony A. Rhea
               1030 Ivy Lane
               Cary, NC  27511
       If you do modify it, please give me credit in the program.  This helps
       to preserve my ego and increase my fame (but, unfortunately, NOT my
       financial status).  Also, I would appreciate a copy of the modified
       version, preferably on disk (I'll be happy to return your diskette).

       If you like this program ( or HATE it ), please let me know.  Drop me
       a line at the address given above.

       This program has been submitted for publication in PC-WORLD magazine.


         Revision history:
            rev 1.0  10/24/83                         { original release }

       *
;
;
; Equates
;
;
space  equ     ' '
zero   equ     '0'
nine   equ     '9'
cr     equ     0dh
lf     equ     0ah
dollar equ     '$'
       page
;
;
; Program entry point
;
;
cseg   segment para 'code'
       assume  cs:cseg, ds:cseg, ss:nothing, es:cseg
       org     100h            ;for .COM file
entry  proc    near
       mov     ah,30h          ;set function code -- get DOS version number
       int     21h             ;and request DOS service
       cmp     al,0            ;is it pre-DOS 2.0?
       jne     entry10         ;if not, continue
       jmp     dosexit         ;else tell user & quit
;
;
; At this point we have DOS 2.0 or better.  Check the length of
; the command line parameter.  The number of characters on the command
; line is at PSP+80h and the parms themselves start at PSP+81h.
;
;
entry10 label  near
       mov     si,80h          ;set up address of parm length in PSP
       mov     cl,[si]         ;and get length into CX
       cmp     cl,2            ;look for two chars (space+digit)
       je      entry20         ;if not, continue
       jmp     errorexit       ;else bad parms -- exit
;
;
; At this point, we have two characters - make sure the
; first one is a space and the second is a digit.
;
;
entry20 label  near
       inc     si              ;get address of parm in PSP
       mov     bl,[si]         ;and get the first char in BL
       cmp     bl,space        ;is it a space?
       je      entry30         ;if so, continue
       jmp     errorexit       ;else bad parm -- exit
entry30 label  near
       inc     si              ;point to next (second) parm char
       mov     bl,[si]         ;and get second char into BL
       cmp     bl,zero         ;is it greater than or equal to a zero?
       jae     entry40         ;if so, continue
       jmp     errorexit       ;else not digit -- exit
entry40 label  near
       cmp     bl,nine         ;is it less than or equal to a nine?
       jbe     entry50         ;if so, continue
       jmp     errorexit       ;else not digit -- exit
       page
;
;
; At this point we have a valid digit as a parameter in BL.
; Convert the digit to binary and exit, setting the DOS ERRORLEVEL.
;
;
entry50 label  near
       sub     bl,zero         ;convert '0' to 0, '1' to 1, etc...
       mov     al,bl           ;and put requested errorlevel in AL
       mov     ah,4ch          ;set DOS function code -- terminate with errorlevel
       int     21h             ;and request DOS service (requested errorlevel returned)
;
;
; If we get here we don't have DOS 2.0.  Tell user about it and terminate via
; function 0 (which works for all DOS versions).
;
;
dosexit label near
       lea     dx,errmsg1      ;point DX to DOS error msg
       mov     ah,9            ;set function code -- print string
       int     21h             ;and request DOS service
       xor     ax,ax           ;set function code to zero -- program terminate
       int     21h             ;and request DOS service (no errorlevel returned)
;
;
; If we get here the user entered an invalid command line parameter.  Show him
; the syntax and exit, returning errorlevel 0.
;
;
errorexit label near
       lea     dx,errmsg2      ;point DX to syntax error msg
       mov     ah,9            ;set function code -- print string
       int     21h             ;and request DOS service
       mov     ax,4c00h        ;set DOS function code -- terminate with errorlevel
       int     21h             ;and request DOS service (errorlevel 0 returned)
entry  endp
       page
;
;
; Error messages
;
;
errmsg1 db     'SETERROR requires DOS 2.0 or greater.', cr, lf, dollar
errmsg2 equ    $
        db     'SETERROR -- sets the DOS ERRORLEVEL for batch file processing', cr, lf
        db     'Usage:', cr, lf
        db     '      SETERROR n', cr,lf
        db     'where n is between 0 and 9.', cr, lf, dollar
copyright db   'SETERROR -- Copyright (C) 1983 Tony Alan Rhea'
;
;
cseg   ends
       end     entry
 
Press <ENTER> 

Directory # 11 --  Time left 33 minute(s) 
Enter File #, <L>ist, <Q>uit or <C>hg Dir. SAM : 


        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
        Disks in the Public Libray are updated monthly.  Check with us
        for the latest versions of all programs.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.
```
{% endraw %}

## SETERROR.DOC

{% raw %}
```

       This program accepts one command line argument and sets the
       DOS ERRORLEVEL to that argument.  Currently, this program has
       a limit of 9 for the errorlevel, but apparently DOS has a a
       much higher limit (FFh -- the code is returned in a half-reg).
       An invalid or missing argument gives an error message and an
       errorlevel 0.  This program requires DOS 2.0.

       Usage:
             SETERROR n
       where n is between 0 and 9.


       Copyright (C) 1983  Tony Alan Rhea
       This program may be copied and distributed for personal use
       but not for profit provided this notice is included.  Author makes
       no warranty, expressed or implied, as to the correct nature and
       operation of this software.

       You may make and distribute as many copies of this program as you wish
       for your PERSONAL use only ( NOT for business purposes, please! ).
       Feel free to modify, mutilate, or adulterate this program.  If you come
       up with an bug or improvement, please let me know by writing me at this
       address:
               Tony A. Rhea
               1030 Ivy Lane
               Cary, NC  27511
       If you do modify it, please give me credit in the program.  This helps
       to preserve my ego and increase my fame (but, unfortunately, NOT my
       financial status).  Also, I would appreciate a copy of the modified
       version, preferably on disk (I'll be happy to return your diskette).

       If you like this program ( or HATE it ), please let me know.  Drop me
       a line at the address given above.

       This program has been submitted for publication in PC-WORLD magazine.


         Revision history:
            rev 1.0  10/24/83                         { original release }
 Press <ENTER>       Revision history:
            rev 1.0  10/24/83                 
```
{% endraw %}

## SIZER.ASM

{% raw %}
```

       page    64,132
       title   SIZER - test the size of a file for PASCAL batch files
       subttl  by Tony Alan Rhea 11/14/83
;
;
comment *

       This program tests the size of a file and sets an errorlevel
       based on it's findings.  Currently, it is set up for the file
       ERRLOG and expects it to be 115 bytes long.  If it does not find
       the file or it is not 115 bytes big, an errorlevel 1 is returned
       (the file is assumed to be in the current working directory).
       Otherwise, errorlevel 0 is returned.  This program requires DOS
       2.0.

       This program is currently set up for the PASCAL compiler.  If PAS1
       goes OK, the following output is generated:

         IBM Personal Computer Pascal Compiler
         Version 1.00 (C)Copyright IBM Corp 1981
          Pass One    No Errors Detected.

       which is exactly 115 bytes big when redirected to a disk file.  To use
       this program with the other compilers/assemblers, follow these steps.
          1. Run the compiler/assembler on a known good program and redirect
             the output to the disk file ERRLOG.
          2. Do a "DIR ERRLOG" and look at the size of the file.
          3. Put the file size in the EQUATE section below in SIZELO (SIZEHI
             should always be zero unless your compiler generates more than
             64k of messages!).
          4. If you like, change the FILENAME DB statement near the end of
             this program to a filename of your liking.
          5. Assemble and link as follows:
                MASM SIZER,,;
                LINK SIZER;                   (Ignore "NO STACK" message)
                EXE2BIN SIZER.EXE SIZER.COM
          6. Have fun!

       One note for you PASCAL fans: PAS2 does not like to have his output
       redirected -- it hangs the system.  I haven't investigated it so I
       don't know the reason why.  If someone figures out why, please pass
       it along.

       Usage:
             echo off
             cls
             echo Compiling %1 .....
             pas1 %1,,; > errlog
             SIZER
             if errorlevel 1 goto error
             echo PAS1 ok.  Starting PAS2....
             pas2
             goto end
             :error
             edit %1.pas
             :end
             echo on

       Copyright (C) 1983  Tony Alan Rhea
       This program may be copied and distributed for personal use
       but not for profit provided this notice is included.  Author makes
       no warranty, expressed or implied, as to the correct nature and
       operation of this software.


       You may make and distribute as many copies of this program as you wish
       for your PERSONAL use only ( NOT for business purposes, please! ).
       Feel free to modify, mutilate, or adulterate this program.  If you come
       up with an bug or improvement, please let me know by writing me at this
       address:
               Tony A. Rhea
               1030 Ivy Lane
               Cary, NC  27511
       If you do modify it, please give me credit in the program.  This helps
       to preserve my ego and increase my fame (but, unfortunately, NOT my
       financial status).  Also, I would appreciate a copy of the modified
       version, preferably on disk (I'll be happy to return your diskette).

       If you like this program ( or HATE it ), please let me know.  Drop me
       a line at the address given above.

       This program has been submitted for publication in PC-WORLD magazine.


         Revision history:
            rev 1.0  11/14/83                         { original release }


       *
;
;
; Equates
;
;
one    equ     '1'
zero   equ     '0'
cr     equ     0dh
lf     equ     0ah
dollar equ     '$'
sizelo equ    115d             ;expected file size in bytes -- low portion
sizehi equ    0                ;expected file size in bytes -- hi  portion
       page
;
;
; Program entry point
;
;
cseg   segment para 'code'
       assume  cs:cseg, ds:cseg, ss:nothing, es:cseg
       org     100h            ;for .COM file
entry  proc    near
       mov     ah,30h          ;set function code -- get DOS version number
       int     21h             ;and request DOS service
       cmp     al,0            ;is it pre-DOS 2.0?
       jne     entry10         ;if not, continue
       jmp     dosexit         ;else tell user & quit
;
;
; At this point we have DOS 2.0 or better.  Try to open the file.
;
;
entry10 label  near
       push    cs              ;save CS and
       pop     ds              ;get into DS for addressability
       lea     dx,filename     ;point DS:DX to filename
       mov     ax,3d00h        ;function = open file for read-only
       int     21h             ;request DOS service
       jnc     entry20         ;if no carry flag, continue
       jmp     fileerror10     ;else cannot open file -- error ID in AX
;
;
; At this point we have opened the file.  Now let's get it's size.
; The file handle is in AX.
;
;
entry20 label  near
       mov     bx,ax           ;put file handle in BX
       mov     ax,4202h        ;function code -- LSEEK to EOF
       xor     cx,cx           ;set CX and
       xor     dx,dx           ;DX to zero -- no offset desired
       int     21h             ;request DOS service
       jnc     entry30         ;if no carry flag then continue
       jmp     fileerror10     ;else access error -- ID in AX, handle in BX
;
;
; Now the read/write pointer is at the end-of-file.  DX:AX contains the
; new location of the pointer (DX contains the most significant part).
;
;
entry30 label  near
       cmp     dx,sizehi       ;is high portion of file size same?
       je      entry40         ;if so, continue
       jmp     sizediff        ;else file is a different size
entry40 label  near
       cmp     ax,sizelo       ;is low portion of file size same?
       je      entry50         ;if so, continue
       jmp     sizediff        ;else file is a different size
       page
;
;
; At this point we have determined that the file exists and is the desired
; size.  Set errorlevel 0 and exit, closing the file.
;
;
entry50 label  near
       mov     ah,3eh          ;set function code = close file -- handle in BX
       int     21h             ;request DOS service
       jnc     entry60         ;if no carry flag, continue
       jmp     fileerror       ;else error closing file
entry60 label  near
       mov     ax,4c00h        ;set DOS function -- terminate with errorlevel 0
       int     21h             ;and request DOS service -- end of program
;
;
; If we get here we don't have DOS 2.0.  Tell user about it and terminate via
; function 0 (which works for all DOS versions).
;
;
dosexit label near
       lea     dx,errmsg1      ;point DX to DOS error msg
       mov     ah,9            ;set function code -- print string
       int     21h             ;and request DOS service
       xor     ax,ax           ;set function code to zero -- program terminate
       int     21h             ;and request DOS service (no errorlevel returned)
;
;
; If we get here we encountered a file error after we successfully opened the
; file.  We must close it in order to release the handle for other programs to
; use.
;
;
fileerror label near
       push    ax              ;save the error code for a moment
       mov     ah,3eh          ;set function code = close file -- handle in BX
       int     21h             ;request DOS service
       pop     ax              ;get error code back -- ignore errors in closing file
;
;
; If we get here we encountered a file error of some sort.  Display the error.
; The error code is in AX.
;
;
fileerror10 label near
       push    ax              ;save error code for a moment
       lea     dx,errmsg2      ;point DX to syntax error msg
       mov     ah,9            ;set function code -- print string
       int     21h             ;and request DOS service
       pop     dx              ;get error code into DX
       cmp     dl,9            ;is it greater than nine?
       jle     fileerror20     ;if so, then only a one digit error code
       push    dx              ;else save a copy of error code
       mov     dl,one          ;and put a '1' in DL -- tens digit
       mov     ah,02           ;set function code -- display char in DL
       int     21h             ;and request DOS service
       pop     dx              ;restore old error code and
       sub     dl,10d          ;subtract ten -- tens digit now displayed
fileerror20 label near
       add     dl,zero         ;convert from binary to ASCII code
       mov     ah,02           ;set function code -- display char in DL
       int     21h             ;and request DOS service
       mov     dl,cr           ;send
       mov     ah,02           ;    a
       int     21h             ;    carriage return
       mov     dl,lf           ;and a
       mov     ah,02           ;    line feed
       int     21h             ;to the console to keep things pretty
sizediff label near
       mov     ax,4c01h        ;set DOS function -- terminate with errorlevel 1
       int     21h             ;and request DOS service -- end of program
entry  endp
       page
;
;
; Messages/other stuff
;
;
filename db    'ERRLOG', 0                     ;filename to look for
errmsg1 db     'SIZER requires DOS 2.0 or greater.', cr, lf, dollar
errmsg2 db     'File access error -- status: ', dollar
copyright db   'SIZER -- Copyright (C) 1983 Tony Alan Rhea'
;
;
cseg   ends
       end     entry
```
{% endraw %}

## SIZER.BAS

{% raw %}
```bas
  1 CLS:PRINT "THIS basic PROGRAM WAS AUTOMATICALLY CREATED BY CONVERT.BAS"
  2 PRINT"Copyright 1982 ,Rich Schinnell Rockville,MD. Not for Sale."
  3 PRINT "This program will automatically generate you a .COM program named sizer.com":PRINT 
  4 ON ERROR GOTO 5000
  6 INPUT "PLACE the disk to write the file TO in Default Drive (A: Usually) HIT <ENTER> "; SCHINNELL$
  9 PRINT:PRINT " Now reading the data statements, wait!"
 10 RESTORE:READ T:FOR I = 1 TO T:READ N:X#=X#+N:NEXT I
 20 READ TOT# :IF TOT#<>X# THEN 5000
 22 CLS:LOCATE 12,5:PRINT "Now writing file NAMED sizer.com standby please  ASCII COUNT IS ";TOT#
 30 RESTORE
 40 OPEN "R", #1,"sizer.com",1 
 50 FIELD #1, 1 AS N$
 60 READ N
 70 FOR I = 1 TO N
 80 READ N:LSET N$=CHR$(N):
 92 PUT #1 :NEXT I:CLOSE
 94 PRINT "sizer.com CREATED * *":GOTO 5010
 99 DATA  257
1000 DATA 180,48,205,33,60,0,117,3,235,63,144,14
1011 DATA 31,141,22,141,1,184,0,61,205,33,115,3,235
1012 DATA 65,144,139,216,184,2,66,51,201,51,210,205,33
1013 DATA 115,3,235,49,144,131,250,0,116,3,235,86,144
1014 DATA 61,115,0,116,3,235,78,144,180,62,205,33,115
1015 DATA 3,235,18,144,184,0,76,205,33,141,22,148,1
1016 DATA 180,9,205,33,51,192,205,33,80,180,62,205,33
1017 DATA 88,80,141,22,185,1,180,9,205,33,90,128,250
1018 DATA 9,126,11,82,178,49,180,2,205,33,90,128,234
1019 DATA 10,128,194,48,180,2,205,33,178,13,180,2,205
1020 DATA 33,178,10,180,2,205,33,184,1,76,205,33,69
1021 DATA 82,82,76,79,71,0,83,73,90,69,82,32,114
1022 DATA 101,113,117,105,114,101,115,32,68,79,83,32,50
1023 DATA 46,48,32,111,114,32,103,114,101,97,116,101,114
1024 DATA 46,13,10,36,70,105,108,101,32,97,99,99,101
1025 DATA 115,115,32,101,114,114,111,114,32,45,45,32,115
1026 DATA 116,97,116,117,115,58,32,36,83,73,90,69,82
1027 DATA 32,45,45,32,67,111,112,121,114,105,103,104,116
1028 DATA 32,40,67,41,32,49,57,56,51,32,84,111,110
1029 DATA 121,32,65,108,97,110,32,82,104,101,97
1030 DATA  23779
5000 PRINT "* * ERROR VERIFY DATA * * * "
5010 CLOSE:END
```
{% endraw %}

## SIZER.DOC

{% raw %}
```


This program tests the size of a file and sets an errorlevel
based on it's findings.  Currently, it is set up for the file
ERRLOG and expects it to be 115 bytes long.  If it does not find
the file or it is not 115 bytes big, an errorlevel 1 is returned
(the file is assumed to be in the current working directory).
Otherwise, errorlevel 0 is returned.  This program requires DOS
2.0.

This program is currently set up for the PASCAL compiler.  If PAS1
goes OK, the following output is generated:

  IBM Personal Computer Pascal Compiler
  Version 1.00 (C)Copyright IBM Corp 1981
   Pass One    No Errors Detected.

which is exactly 115 bytes big when redirected to a disk file.

The output of IBM Basic Compiler is 211 bytes.
The output of MS Pascal Compiler is  98 bytes.

To use this program with the other compilers/assemblers, follow these
steps.

   1. Run the compiler/assembler on a known good program and redirect
      the output to the disk file ERRLOG.
   2. Do a "DIR ERRLOG" and look at the size of the file.
   3. Put the file size in the EQUATE section below in SIZELO (SIZEHI
      should always be zero unless your compiler generates more than
      64k of messages!).
   4. If you like, change the FILENAME DB statement near the end of
      this program to a filename of your liking.
   5. Assemble and link as follows:
	 MASM SIZER,,;
	 LINK SIZER;		       (Ignore "NO STACK" message)
	 EXE2BIN SIZER.EXE SIZER.COM
   6. Have fun!

One note for you PASCAL fans: PAS2 does not like to have his output
redirected -- it hangs the system.  I haven't investigated it so I
don't know the reason why.  If someone figures out why, please pass
it along.

Usage:
      echo off
      cls
      echo Compiling %1 .....
      pas1 %1,,; > errlog
      SIZER
      if errorlevel 1 goto error
      echo PAS1 ok.  Starting PAS2....
      pas2
      goto end
      :error
      edit %1.pas
      :end
      echo on

Copyright (C) 1983  Tony Alan Rhea
This program may be copied and distributed for personal use
but not for profit provided this notice is included.  Author makes
no warranty, expressed or implied, as to the correct nature and
operation of this software.


You may make and distribute as many copies of this program as you wish
for your PERSONAL use only ( NOT for business purposes, please! ).
Feel free to modify, mutilate, or adulterate this program.  If you come
up with an bug or improvement, please let me know by writing me at this
address:
	Tony A. Rhea
	1030 Ivy Lane
	Cary, NC  27511
If you do modify it, please give me credit in the program.  This helps
to preserve my ego and increase my fame (but, unfortunately, NOT my
financial status).  Also, I would appreciate a copy of the modified
version, preferably on disk (I'll be happy to return your diskette).

If you like this program ( or HATE it ), please let me know.  Drop me
a line at the address given above.

This program has been submitted for publication in PC-WORLD magazine.


  Revision history:
     rev 1.0  11/14/83			       { original release }
 

```
{% endraw %}

## WAIT.DOC

{% raw %}
```

PUTS A 3-SECOND PAUSE INTO THE EXECUTION OF A BATCH FILE TO ALLOW INTERRUPTION.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0373

     Volume in drive A has no label
     Directory of A:\

    READ_ME  1ST       719   1-15-87   4:48p
    SCREDIT  COM      8611   1-15-87   4:42p
    SCRHELPA SCR      3872   1-15-87   4:23p
    SCRHELPB SCR      3872   1-15-87   4:24p
    SCRHELPC SCR      3872   1-15-87   4:24p
    SCRHELPD SCR      3872   1-15-87   4:24p
    SCRHELPE SCR      3872   1-15-87   4:24p
    SCRHELPF SCR      3872   1-15-87   4:25p
    DSIZE    COM       384   1-19-85  11:41a
    DSIZE    DOC       806   9-25-83   9:05p
    INP      BAT      1280   1-01-80   3:10a
    INP-TEST BAT      1536   1-01-80   3:09a
    INPUT    COM       256   1-01-80   3:09a
    WAITTIME COM       384  12-07-84   5:04p
    WAITTIME DOC       896  12-07-84   5:04p
    BANNER1  COM       931   1-29-83   8:28p
    BANNER1  DOC      2114   9-17-83   9:44a
    FLIP     COM       384  12-14-83   7:54a
    BANNR1   BAT        22   1-07-85   7:05p
    FLIP     DOC       640  12-14-83   7:55a
    PRTSC    COM       512  12-14-83   7:53a
    PRTSC    DOC       512  12-14-83   7:53a
    REMDOT   EXE      4887  11-24-84  12:29p
    BRK      COM       128   1-12-85   8:01a
    CHECKING COM       118   1-17-83   4:51p
    CHECKING DOC      1152  11-30-83  10:30a
    GETDIGIT COM       173  12-13-83   8:37a
    GETDIGIT DOC      2280  12-13-83   8:56a
    QUERY    ASM      6615   2-22-84   9:39p
    QUERY    EXE       768   2-22-84   9:43p
    SETERROR ASM      6744   4-26-84   7:46p
    SETERROR COM       292   4-26-84  12:37p
    SETERROR DOC      1920   4-26-84   8:15a
    SIZER    ASM      9856  12-13-83   7:51a
    SIZER    BAS      2048  12-13-83   7:48a
    SIZER    COM       257  12-13-83   8:45a
    SIZER    DOC      3136  12-15-83   1:26p
    SIGNAL   COM       256  12-28-84   7:01p
    NORESET  ASM      7040  10-12-84   4:15p
    NORESET  BAS      1664  10-12-84   4:15p
    WAIT     COM       128   1-01-80  12:24a
    WAIT     DOC        85   2-19-84   2:06p
    NOBRKCOM BAS       512   8-11-83   7:20a
    TUNE     COM       512   6-10-84  12:27a
    TUNE     DOC      1536   6-10-84  12:28a
    CR       COM       128   2-16-85   1:41a
    CR       DOC      1280   2-24-85   1:03p
    PAUSE2   COM       384  11-04-84   5:40p
    PAUSE2   DOC      5120  11-04-84   5:39p
    FILES373 TXT      3142   7-08-85   2:36p
    SCRBATCH COM      2060  12-12-86   9:27p
    SCR      TXT     29184   1-15-87   4:19p
    SCRCONV  COM      2681   6-26-86   9:44p
    SCRCOB   OBJ       744   7-01-86   2:44p
    SCRCLIPR OBJ       663   9-01-86   7:29p
    SCRDBASE BIN      8183   9-01-86   7:30p
    SCRQBAS  OBJ       749   6-28-86  11:13p
    SCR21F   ARC     35814   1-15-87   4:48p
           58 file(s)     185458 bytes
                          107520 bytes free
