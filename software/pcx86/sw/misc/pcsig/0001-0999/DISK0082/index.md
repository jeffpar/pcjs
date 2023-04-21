---
layout: page
title: "PC-SIG Diskette Library (Disk #82)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0082/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0082"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "BATCH FILE UTILITIES"

    Batch files are tireless worker files. Once written and tested to insure
    that they are doing what you want them to do, they go on and on doing it
    with no slip-ups, complaints, or fatigue.
    
    The utilities on this disk are designed to as a batch file tutorial and
    also to enhance the batch file capabilities of your DOS operating
    system. Source code is included thoughout, making it possible to read or
    print out any of the files included. A lot of the material here would be
    pertinent to programmmers or advanced users who wanted to soup-up their
    systems with hard-working batch files.
    
    Special Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  None.
    
    File Descriptions:
    
    ??????   ASM  Source code for utilities (6 files).
    ??????   BAT  The rest of the tutorial "chain" (10 files).
    ??????   COM  The batch file utilities (6 files).
    ??????   REM  Text files displayed during the tutorial (9 files).
    ALDIR    BAT  Generates a directory file sorted by filename.
    CATALOG       Full list of files.
    EXDIR    BAT  Generates a directory file sorted by extension.
    FILELIST      Summary list of files on this disk in wildcard format.
    PARSER   INC  Source code "include" files for utilities.
    Q_CMDS   INC  Source code "include" files for utilities.
    QDISPLAY INC  Source code "include" files for utilities.
    QGETKEY  INC  Source code "include" files for utilities.
    RUNME    BAT  The first batch file in the tutorial "chain"
    SIDIR    BAT  Generates a directory file sorted by file size
    TESTERR  BAT  Batch files used to test utilities.
    TESTF    BAT  Batch files used to test utilities.
    TESTQ    BAT  Batch files used to test utilities.
    TESTSET  BAT  Batch files used to test utilities.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES82.TXT

{% raw %}
```
Disk No:   82
Program Title:  Batch File Utilities
PC-SIG version: 1.1

This disk enhances the Batch file capabilities of DOS.  An extensive
demonstration in tutorial form is included; it is remarkably good at
displaying the potential and capabilities of batch files.  Since all
files are readily available to read or print, you can easily adapt some
ideas for use in your own batch files.

Usage:  DOS Utilities.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  None.

File Descriptions:

??????   ASM  Source code for utilities (6 files).
??????   BAT  The rest of the tutorial "chain" (10 files).
??????   COM  The batch file utilities (6 files).
??????   REM  Text files displayed during the tutorial (9 files).
ALDIR    BAT  Generates a directory file sorted by filename.
CATALOG       Full list of files.
EXDIR    BAT  Generates a directory file sorted by extension.
FILELIST      Summary list of files on this disk in wildcard format.
PARSER   INC  Source code "include" files for utilities.
Q_CMDS   INC  Source code "include" files for utilities.
QDISPLAY INC  Source code "include" files for utilities.
QGETKEY  INC  Source code "include" files for utilities.
RUNME    BAT  The first batch file in the tutorial "chain"
SIDIR    BAT  Generates a directory file sorted by file size
TESTERR  BAT  Batch files used to test utilities.
TESTF    BAT  Batch files used to test utilities.
TESTQ    BAT  Batch files used to test utilities.
TESTSET  BAT  Batch files used to test utilities.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1985,86,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## FINDFILE.ASM

{% raw %}
```
               PAGE 60,132
TITLE  FINDFILE.COM  VER.2.0  14-AUG-83  19:15
comment *

                        FINDFILE.COM


        VERSION 2.0     14-AUG-83

        Written by      Warren Craycroft
                        6236 Oakdale Ave.
                        Oakland, CA  94605


        (C)  1983  by Warren Craycroft.  Permission is granted to copy and
        distribute this program, including source code, provided that no
        charge shall be made except for a reasonable charge for the media
        and handling, and that this notice shall remain intact in all copies.


*
comment *
        This program is a utility that can be used with DOS 2.0 to
        find the disk drive number that contains a certain file.

        A common use of FINDFILE is to help a batch file "orient"
        itself by discovering on which drive the Batch File itself is
        running, and on what drives other files (such as useful system
        utilities) can be found.  A lot of this orientation can be done
        without bothering or confusing the user with a lot of questions
        or constraints in locating disks in certain drives.

        A key feature of this search (and where this method of orien-
        tation differs from the use of PATH or IF EXIST ) is that
        searching on the disk drives is done "benignly".  By this we mean
        that FINDFILE doesn't come to a grinding halt if an empty
        disk drive is searched.  Instead, it continues the search on
        the rest of the drives.  This further relieves the user from
        having to locate certain disks on certain drives.  The target
        file may be on the B: or C: drive with the A: drive empty, and
        FINDFILE will find it without the annoying "ignore, abort, retry"
        message.  If the file is not found, then you may gently prod the
        user to place the required disk "in any drive" and try again.

        The syntax of the command line is the following:

                findfile  fname

        where fname is a standard DOS path, filename, and extention.
        If you include a drive specification (like "a:" for example),
        the drive spec will be ignored by FINDFILE.

        FINDFILE benignly searches all disk drives that  are claimed
        to present by the system board switches, in order A:, B:, C:, and
        D:.  If the file is found, the disk number of the first disk on
        which it was found is returned in errorlevel and may be tested
        by a Batch File IF Subcommand.


                If fname found:         errorlev = 0 if fname on A:
                                        errorlev = 1 if fname on B:
                                        errorlev = 2 if fname on C:
                                        errorlev = 3 if fname on D:

                If fname not found:     errorlev = 255

                If fname is missing:    errorlev = 255 , and a CNTRL BREAK
                                                   halts the Batch File

*
;
;               constant equates
;
BEL_CHAR        EQU     07              ;ascii BEL keycode
CR              EQU     0DH             ;ascii carriage return
LF              EQU     0AH             ;ascii line feed
TAB_CHAR        EQU     09              ;ascii tab
BLANK_CHAR      EQU     ' '             ;ascii blank
COLON_CHAR      EQU     ':'             ;ascii colon
NOT_FOUND_CODE  EQU     255             ;errorlev returned for fname not
                                        ;found
DISK_MASK       EQU     00C0H           ;mask for equipment word's disk
                                        ;count field
;
;
;       declare a relocatable segment.  Follow the .COM file requirements
;       of entry point at 100H and making all seg register references relative
;       to CS (no relocatable values MOV'ed into segment registers).
;
;
COM_CODE      SEGMENT
;
                ORG     80H             ;PSP offset 80:  user's command line
PSP_CMD_LINE    LABEL   BYTE            ;define a label for address refs
;
                ORG     100H            ;for COM file
;
;
                ASSUME  CS:COM_CODE,DS:COM_CODE    ;tell assembler value of CS
                ASSUME  ES:COM_CODE                ; DS, and ES
;
;
START           PROC            FAR     ;FAR is meaningless; no RETS
;
                MOV     SI,OFFSET PSP_CMD_LINE  ;offset of user's cmd line
                SUB     CX,CX                   ;clear CX
                MOV     CL,[SI]                 ;byte count of line
                OR      CL,CL                   ;zero?
                JZ      NO_FNAME                ;jump if yes, no fname param
                SUB     BX,BX                   ;else zero index
;
;       find first non-blank or non-tab character of command line
;
STRIP_BLANKS:   INC     SI                      ;point to next char
                MOV     AL,[SI]                 ;get next char from cmd line
                CMP     AL,BLANK_CHAR           ;is it blank?
                JE      LOOP_BLANKS             ;jump if yes, keep looking
                CMP     AL,TAB_CHAR             ;is it a tab?
                JNE     GOT_NON_BLANK           ;jump if not, first non-blank
LOOP_BLANKS:    LOOP    STRIP_BLANKS            ;else keep looking
;
;       fname is missing from command line (all blanks or tabs, or else
;       zero characters on line
;
NO_FNAME:       MOV     DX,OFFSET ERROR_MESSAGE ;adr offset of error message
                MOV     AH,9                    ;DOS fn call, "print string"
                INT     21H                     ;call DOS
                INT     23H                     ;cause a control break, cause
                                                ;this is probably a bug in
                                                ;batch file creation.
                JMP     NO_FILE_EXIT            ;then exit with errorlevel =
                                                ; "NOT_FOUND_CODE"
;
;       found first non-blank/tab character on command line
;       at [SI][BX] .  Check for disk designator " n: " and
;       "strip" it from string by moving up pointer and decreasing
;       remaining bytes count.
;
GOT_NON_BLANK:  CMP     BYTE PTR [SI+1],COLON_CHAR  ;2nd non-blank char ":"?
                JNE     ADD_DRIVE               ;if not, [SI] is start of strng
                INC     SI                      ;else strip off the drive spec
                INC     SI
                DEC     CX                      ;and decr remaining byte count
                JZ      NO_FNAME                ;if string hits zero bytes left,
                DEC     CX
                JZ      NO_FNAME                ;  it's a "no param" error
;
;       SI now points to start of ASCIIZ string that we want to use as
;       the path/file name to search drives for
;
;       Put a byte of zeros at the end of string, and an "A:" in front
;       of string to initialize search.
;
ADD_DRIVE:      MOV     BX,CX                   ;number of bytes remaining
                MOV     BYTE PTR [SI][BX],0     ;points to 1 char past end
                                                ; of string
                MOV     BYTE PTR [SI-2],'A'     ;"A:" in front of string
                MOV     BYTE PTR [SI-1],':'
;
;       Replace the current critical error handler with our own
;
;       First, get the address of the critical error handler assigned
;       by "parent" process (probably system) to this process.  Save its
;       address, so that we can use it if our handler is handed a non-disk
;       error  ( "we don't do non-disk errors ..." )
;
                MOV     AH,35H                  ;DOS fn "get vector"
                MOV     AL,24H                  ;"critical error" vector no.
                INT     21H                     ;call DOS
                MOV     WORD PTR PARENT_HAND,BX ;save offset vector adr
                MOV     WORD PTR PARENT_HAND+2,ES  ;save seg vector adr
;
;       Now, take control of critical error vector by assigning a handler
;       to the vector address.
;
;       DOS will restore the "parent"'s vector when this process returns to
;       DOS.
;
                MOV     DX,OFFSET CRIT_HAND     ;address of handler
                MOV     AL,24H                  ;the vector to be replaced
                MOV     AH,25H                  ;DOS fn call "ret int vector"
                INT     21H                     ;call DOS and replace vector
;
;       Get the number of drives that DOS knows about
;       Dont disturb the current default disk when getting the number
;
                MOV     AH,19H                  ;DOS fn "return current disk"
                INT     21H                     ;current disk returned in AL
                MOV     DL,AL                   ;put current in DL for sel call
                MOV     AH,0EH                  ;DOS fn "sel disk, return number
                INT     21H                     ;get number of drives
                SUB     CH,CH                   ;clear CH
                MOV     CL,AL                   ;number of drives
                INC     CX                      ;is now (1,2,3, or 4)
;
;       Now loop through all drives present, trying to find the file
;       (using fn call 4EH) on each drive.  If successful, return the
;       disk number to caller in errorlevel.
;
;       If not successful, return errorlevel = NOT_FOUND_CODE
;
                MOV     DX,SI                   ;offset adr of drive spec and
                DEC     DX                      ;  filename
                DEC     DX
FIND_FILE:      MOV     AH,4EH                  ;DOS fn "find first file"
                PUSH    CX                      ;save the loop count
                SUB     CX,CX                   ;attribute says search
                                                ;"normal" files only
                PUSH    [SI-2]                  ;save drive letter (DOS call
                                                ;destroys it if file found)
                INT     21H                     ;call DOS
                POP     [SI-2]                  ;restore drive letter
                POP     CX                      ;restore loop count
                JNC     FOUND_FILE              ;if carry not set, then search
                                                ;was successful - jump.
                INC     BYTE PTR [SI-2]         ;increment drive letter char
                LOOP    FIND_FILE               ;and look on next drive
;
;       did not find file.  Return NOT_FOUND_CODE in errorlevel
;
NO_FILE_EXIT:   MOV     AL,NOT_FOUND_CODE       ;file not found on any drive
EXIT:           MOV     AH,4CH                  ;DOS fn call to exit w/ errlev
                INT     21H                     ;call DOS and exit
;
;       found the file.  Retrieve the drive letter used in this last call,
;       map it to disk number (A = 0, B = 1, etc) and return it in errorlevel.
;
FOUND_FILE:     MOV     AL,[SI-2]               ;get the drive letter (upper
                                                ;case ascii code)
                SUB     AL,'A'                  ;map it to 0,1,2,3
                JMP     EXIT                    ;and return it in errorlevel
START           ENDP
page
;
;               CRIT_HAND               Critical Error Handler
;
;       This handler will be called by DOS functions when any critical
;       error (disk or non-disk) occurs during DOS INT 21H calls that
;       are made during execution of this process.
;
;       We only want to ignore disk errors, so we first test if the disk
;       is the cause of error.
;
;       If not a disk error, we jump to the parent's critical error handler
;       (we JMP so that stack looks as if we were never there).
;
;       If it is a disk error, we return an IGNORE code to the calling
;       DOS function.  The effect of all this is that when a DOS function
;       tries to access a disk drive that has a door open, or no disk, or
;       disk is unformatted, or disk is garbled, etc, the DOS function will
;       simply give up and return to the function's caller "empty handed".
;       There will be no "abort, retry, ignore" message from the critical
;       error handler.
;
;       on entry:       Bit 7 of AH = 0 if disk error
;                                   = 1 if not a disk error
;
;       on exit:        If disk error, we set AL = 0, "ignore error"
;
;       registers affected:     AH, AL
;
CRIT_HAND       PROC    FAR                     ;RETS are typed FAR
                TEST    AH,80H                  ;bit 7 on?
                JNZ     NOT_DISK                ;jump if not disk error, we dont
                                                ;treat it
;
;       Treatment of disk errors is easy, just tell system to ignore them
;
                SUB     AL,AL                   ;zero AL, "ignore" code
                IRET                            ;caller used INT so we IRET
;
;       It was not a disk error, so let the "parent" critical error handler
;       treat it by JMPing to its address that we saved.
;
;       We JMP so we dont disturb the stack.  Stack looks like we were
;       never called.
;
NOT_DISK:       JMP     DWORD PTR PARENT_HAND   ;jump to parent crit err hand
;
CRIT_HAND       ENDP
;
;
;       temporary storage of parent's critical handler address
;
PARENT_HAND     DD      1 DUP(?)                ;double word for FAR address
;
;
;
;       error message string
;
ERROR_MESSAGE   DB      CR,LF,'***** No filename was given with '
                DB      'FINDFILE *****',CR,LF,'$'
;
;
COM_CODE        ENDS
                END     START
```
{% endraw %}

## FUNKY.ASM

{% raw %}
```
               PAGE 60,132
TITLE  FUNKY.COM  VER.2.1  7-AUG-83  19:30
comment *

                        FUNKY.COM


        VERSION 2.0     7-AUG-83

        Written by      Warren Craycroft
                        6236 Oakdale Ave.
                        Oakland, CA  94605


        (C)  1983  by Warren Craycroft.  Permission is granted to copy and
        distribute this program, including source code, provided that no
        charge shall be made except for a reasonable charge for the media
        and handling, and that this notice shall remain intact in all copies.


*
comment *
        This program is a utility that can be used with DOS 2.0
        to allow an n-way branch (typically a menu selection) during
        execution of a batch file.  The program does this by
        testing the user's one key response and returning to DOS an
        "errorlevel" code corresponding to the EXTENDED keycode.
        This errorlevel code can then be tested by the
        batch file program using the IF ERRORLEVEL n  statement.

        When FUNKY is run in a batch file, an appropriate menu
        has been displayed for the user via REM or ECHO statements.
        The user answers with any key that generates an EXTENDED keycode.
        Examples of such keys are the following:

                the function keys F1 - F10

                the shifted function keys

                the Alt-function keys

                the cursor control keys

                most Alt-alphanumeric keys

        If a key that does not generate an EXTENDED code is struck, then this
        program tests for the ESC key, and returns one of two codes:

                if the non-extended key is ESC,  errorlevel = 0

                for any other non-extended key,  errorlevel = 255

        No other error-checking is done by FUNKY.  The subsequent Batch
        File IF tests must determine whether the keystroke response is
        within the extended keycode range, or is an ESC key or other
        "regular" key.  Some examples of extended keycodes are as follows:

                F1 ... F10              59 ... 68

                Shifted F1 ... F10      84 ... 93

                Control F1 ... F10      94 ... 103

                Alt     F1 ... F10      104 ... 113



        A complete list of extended codes and the keys that generate them can
        be found in the IBM Tech Reference, Revised 1982, Table 26, P. 3-14

        Remember that the subsequent IF clauses are "greater than or equal
        to"  and  "less than", so the order of the IF tests is important.

                IF ERRORLEVEL N         means   if errorlevel >= n

                IF NOT ERRORLEVEL N     means   if errorlevel < n


                INCLUDE THESE FILES WHEN ASSEMBLING:

                        PARSER.INC
                        QDISPLAY.INC
                        QGETKEY.INC
                        Q_CMDS.INC


*
;
;               constant equates
;
ESC_CHAR        EQU     1BH             ;ascii ESC keycode
BEL_CHAR        EQU     07              ;ascii BEL code
CR              EQU     0DH             ;ascii carriage return
LF              EQU     0AH             ;ascii  line feed
BLANK_CHAR      EQU     20H             ;ascii blank keycode
;
;       declare a relocatable segment.  Follow the .COM file requirements
;       by ORG'ing to 100H and making all segment register references relative
;       to CS (no relocatable values MOV'ed into segment registers).
;
;
COM_CODE      SEGMENT
;
                ORG     80H             ;Program Segment Prefix command line
PSP_CMD_LINE    LABEL   BYTE

                ORG     100H            ;for COM file
;
                ASSUME  CS:COM_CODE,DS:COM_CODE  ;tell assembler values in
                                        ;CS and DS upon entering this code
;
;       parse command line in PSP for commands inside slashes
;
;       leave CX pointing to first character after leading delimiters if no
;       slashes, or first char after second slash
;
START           PROC    FAR             ;FAR is meaningless; no RET's
;
;       address of PSP's unformatted command line into SI
;
                MOV     SI,OFFSET PSP_CMD_LINE
;
INCLUDE         PARSER.INC
INCLUDE         QDISPLAY.INC
INCLUDE         QGETKEY.INC
;
;       AL = user's answering keystroke.  Test it for extended code
;
                OR      AL,AL           ;is the keycode zero?
                JZ      EXTENDED        ;jump if yes, it's an extended code
                                        ;DOS gives extended code on 2nd call
;
;       not an extended keycode.  FUNKY looks for only one "regular" key,
;       the ESC key:
;
;               if the non-extended key is ESC, errorlevel = 0
;
;               for any other non-extended key, errorlevel = 255
;
                MOV     AH,AL           ;non-extended keycode into AH
                SUB     AL,AL           ;return zero in AL if ESC key
                CMP     AH,ESC_CHAR     ;is it ESC?
                JE      EXIT            ;if yes, return zero errorlevel
                DEC     AL              ;else return 255 errorlevel for ...
                JMP     EXIT            ;... any other non-extended key
;
;       an "extended keycode flag" was received on first call to DOS
;       so call again to get the actual extended code
;
EXTENDED:       MOV     AH,8            ;else extended keycode was typed
                INT     21H             ;get extended code with 2nd call
;
;       AL contains the extended keycode.  Examples are
;
;               F1 ... F10              59 ... 68
;
;               Shifted F1 ... F10      84 ... 93
;
;               Alt  F1 ... F10         104 ... 113
;
;       Return this code as the errorlevel
;
;       The batch file that called FUNKY should then branch appropriatly
;       using IF tests.
;
EXIT:           MOV     AH,4CH          ;DOS fn call for exit
                INT     21H             ;(DOS Manual, p. D-49)
START           ENDP
PAGE
INCLUDE         Q_CMDS.INC
PAGE
;
;        variable data area
;
USERS_ATTRIB    DB      1 DUP(?)        ;temp storage of character attrib
;
COM_CODE        ENDS
                END     START
```
{% endraw %}

## QUERY.ASM

{% raw %}
```
               PAGE 60,132
TITLE  QUERY.COM  VER.2.1  7-AUG-83  21:05
comment *

                        QUERY.COM


        VERSION 2.1     6-AUG-83

        Written by      Warren Craycroft
                        6236 Oakdale Ave.
                        Oakland, CA  94605


        (C)  1983  by Warren Craycroft.  Permission is granted to copy and
        distribute this program, including source code, provided that no
        charge shall be made except for a reasonable charge for the media
        and handling, and that this notice shall remain intact in all copies.


*
comment *
        This program is a utility that can be used with DOS 2.0
        to allow a yes/no interaction by the user during
        execution of a batch file.  The program does this by
        testing the user's one key response and returning to DOS an
        "errorlevel" code corresponding to that keycode response.
        This errorlevel code can then be tested by the
        batch file program using the IF ERRORLEVEL n  statement.

        When QUERY is run in a batch file, an appropriate question
        has been posed to the user via a REM or ECHO statement, or
        the QUERY statment itself.  A reverse video box then prompts.
        The user may answer with a single keystroke denoting
        a yes, no , or escape response.  The errorlevel code is set
        as follows:

                errorlevel = 2          if user typed ESC key

                errorlevel = 1          if user typed Y or y

                errorlevel = 0          if user typed N or n

        If any other key is typed, the console is beeped,a message is
        displayed, and this program waits for another keystroke.

        Remember that the subsequent IF clauses are "greater than or equal
        to"  and  "less than", so the order of the IF tests is important.

                IF ERRORLEVEL N         means   if errorlevel >= n

                IF NOT ERRORLEVEL N     means   if errorlevel < n


                INCLUDE THESE FILES WHEN ASSEMBLING:

                        PARSER.INC
                        QDISPLAY.INC
                        QGETKEY.INC
                        Q_CMDS.INC



*
;
;               constant equates
;
ESC_CHAR        EQU     1BH             ;ascii ESC keycode
BEL_CHAR        EQU     07              ;ascii BEL keycode
CR              EQU     0DH             ;ascii carriage return
LF              EQU     0AH             ;ascii line feed
BLANK_CHAR      EQU     20H             ;ascii blank character
;
;       equate the return codes to symbols so that this program can be
;       easily modified to a different choice of returned errorlevel codes.
;
ESC_RET_CODE    EQU     2
Y_RET_CODE      EQU     1
N_RET_CODE      EQU     0
;
;       declare a relocatable segment.  Follow the .COM file requirements
;       of entry point at 100H and making all seg register references relative
;       to CS (no relocatable values MOV'ed into segment registers).
;
;
COM_CODE      SEGMENT
;
                ORG     80H             ;PSP offset 80:  user's command line
PSP_CMD_LINE    LABEL   BYTE            ;define a label for address refs
;
                ORG     100H            ;for COM file
;
;
                ASSUME  CS:COM_CODE,DS:COM_CODE    ;tell assembler value of CS
                                                   ; and DS
;
;       parse command line in PSP for commands inside slashes
;
;       leave CX pointing to first character after leading delimiters if no
;       slashes, or first char after second slash
;
START           PROC            FAR     ;FAR is meaningless; no RETS
;
;       address of PSP's command line into SI
;
                MOV     SI,OFFSET PSP_CMD_LINE
;
INCLUDE         PARSER.INC              ;bring in parser include file
INCLUDE         QDISPLAY.INC            ;bring in cmd line string display
INCLUDE         QGETKEY.INC             ;bring in reverse prompt
;
;       AL = user's answering keystroke.  Test it for extended code
;
                OR      AL,AL           ;is the keycode zero?
                JNZ     TEST_ESC        ;jump if not, test for ESC
                MOV     AH,1            ;else extended code was typed
                INT     21H             ;get rest of code, then declare
                                        ;an error
;
;       keycode was not one of the allowed codes.  BEEP the console,
;       display a message, and wait for another keycode from keyboard
;
ERROR:          MOV     DX,OFFSET ERROR_MESSAGE ;display message string
                MOV     AH,9            ;DOS fun code to display string
                INT     21H             ;beep the console
                JMP     DISPLAY_BOX     ;and wait for another key
;
;       test for ESC key, Y, y, N, n. Then exit (through DOS function 4CH)
;       with appropriate exit code:
;
;               exit code 2            if key was ESC
;
;               exit code 0            if key was N or n
;
;               exit code 1            if key was Y or y
;
TEST_ESC:       MOV     DL,AL           ;move keycode to DL
                MOV     AL,ESC_RET_CODE ;return code for ESC
                MOV     AH,4CH          ;DOS fn call for exit
                                        ;(DOS Manual, p. D-49)
;
                CMP     DL,ESC_CHAR     ;is keycode ESC?
                JNE     TEST_N          ;jump if not, test for N
;
;       Exit the program, returning to DOS via DOS 2.0 function call 4EH.
;       This function call terminates execution of QUERY and sets the DOS
;       "errorlevel" to the value found in AL.
;
EXIT:           INT     21H             ;exit with return code in AL
TEST_N:         MOV     AL,N_RET_CODE   ;return code for N, n into AL
                CMP     DL,'N'          ;is it 'N'?
                JE      EXIT            ;jump if yes
                CMP     DL,'n'          ;is it 'n'?
                JE      EXIT            ;jump if yes and exit
TEST_Y:         MOV     AL,Y_RET_CODE   ;return code for Y, y into AL
                CMP     DL,'Y'          ;is keycode 'Y'?
                JE      EXIT            ;jump if yes and exit
                CMP     DL,'y'          ;else is keycode 'y'?
                JE      EXIT            ;jump if yes and exit
                JMP     ERROR           ;else beep the console and
                                        ;get another keycode
START           ENDP
PAGE
INCLUDE         Q_CMDS.INC              ;bring in slash command tables and code
PAGE
;
;               variable data area of the COM segment
;
USERS_ATTRIB    DB      1 DUP(?)        ;temp storage of character attrib
;
;               constant data area of the COM segment
;
ERROR_MESSAGE   DB      CR,LF,BEL_CHAR
                DB      '        *** Please press one of these keys only:'
                DB      '  Y   N   Esc    $'
COM_CODE        ENDS
                END     START
```
{% endraw %}

## SETDISK.ASM

{% raw %}
```
               PAGE 60,132
TITLE  SETDISK.COM  VER.2.0  14-AUG-83  19:15
comment *

                        SETDISK.COM


        VERSION 2.0     14-AUG-83

        Written by      Warren Craycroft
                        6236 Oakdale Ave.
                        Oakland, CA  94605


        (C)  1983  by Warren Craycroft.  Permission is granted to copy and
        distribute this program, including source code, provided that no
        charge shall be made except for a reasonable charge for the media
        and handling, and that this notice shall remain intact in all copies.


*
comment *
        This program is a utility that can be used with DOS 2.0 to
        find the disk drive number that contains a certain file.

        SETDISK is similar to FINDFILE, with one additional feature.
        When SETDISK finds the file, it sets the DOS default
        drive designator to the drive on which the file was found.

        A common use of SETDISK is to help a batch file "orient"
        itself by discovering on which drive the Batch File itself is
        running, and on what drives other files (such as useful system
        utilities) can be found.  A lot of this orientation can be done
        without bothering or confusing the user with a lot of questions
        or constraints in locating disks in certain drives.

        A key feature of this search (and where this method of orien-
        tation differs from the use of PATH or IF EXIST ) is that
        searching on the disk drives is done "benignly".  By this we mean
        that SETDISK doesn't come to a grinding halt if an empty
        disk drive is searched.  Instead, it continues the search on
        the rest of the drives.  This further relieves the user from
        having to locate certain disks on certain drives.  The target
        file may be on the B: or C: drive with the A: drive empty, and
        SETDISK will find it without the annoying "ignore, abort, retry"
        message.  If the file is not found, then you may gently prod the
        user to place the required disk "in any drive" and try again.

        The syntax of the command line is the following:

                findfile  fname

        where fname is a standard DOS path, filename, and extention.
        If you include a drive specification (like "a:" for example),
        the drive spec will be ignored by SETDISK.

        SETDISK benignly searches all disk drives that  are claimed
        to be present by the system board switches, in order A:, B:, C:, and
        D:.  If the file is found, the disk number of the first disk on
        which it was found is returned in errorlevel and may be tested
        by a Batch File IF Subcommand. SETDISK also changes the DOS default
        drive designator to the disk on which the file was found.


                If fname found:         errorlev = 0 if fname on A:
                                        errorlev = 1 if fname on B:
                                        errorlev = 2 if fname on C:
                                        errorlev = 3 if fname on D:
                                        (in all of above cases, the default
                                         drive designator is changed to the
                                         drive on which fname was found )

                If fname not found:     errorlev = 255

                If fname is missing:    errorlev = 255 , and a CNTRL BREAK
                                                   halts the Batch File

*
;
;               constant equates
;
BEL_CHAR        EQU     07              ;ascii BEL keycode
CR              EQU     0DH             ;ascii carriage return
LF              EQU     0AH             ;ascii line feed
TAB_CHAR        EQU     09              ;ascii tab
BLANK_CHAR      EQU     ' '             ;ascii blank
COLON_CHAR      EQU     ':'             ;ascii colon
NOT_FOUND_CODE  EQU     255             ;errorlev returned for fname not
                                        ;found
DISK_MASK       EQU     00C0H           ;mask for equipment word's disk
                                        ;count field
;
;
;       declare a relocatable segment.  Follow the .COM file requirements
;       of entry point at 100H and making all seg register references relative
;       to CS (no relocatable values MOV'ed into segment registers).
;
;
COM_CODE      SEGMENT
;
                ORG     80H             ;PSP offset 80:  user's command line
PSP_CMD_LINE    LABEL   BYTE            ;define a label for address refs
;
                ORG     100H            ;for COM file
;
;
                ASSUME  CS:COM_CODE,DS:COM_CODE    ;tell assembler value of CS
                ASSUME  ES:COM_CODE                ; DS, and ES
;
;
START           PROC            FAR     ;FAR is meaningless; no RETS
;
                MOV     SI,OFFSET PSP_CMD_LINE  ;offset of user's cmd line
                SUB     CX,CX                   ;clear CX
                MOV     CL,[SI]                 ;byte count of line
                OR      CL,CL                   ;zero?
                JZ      NO_FNAME                ;jump if yes, no fname param
                SUB     BX,BX                   ;else zero index
;
;       find first non-blank or non-tab character of command line
;
STRIP_BLANKS:   INC     SI                      ;point to next char
                MOV     AL,[SI]                 ;get next char from cmd line
                CMP     AL,BLANK_CHAR           ;is it blank?
                JE      LOOP_BLANKS             ;jump if yes, keep looking
                CMP     AL,TAB_CHAR             ;is it a tab?
                JNE     GOT_NON_BLANK           ;jump if not, first non-blank
LOOP_BLANKS:    LOOP    STRIP_BLANKS            ;else keep looking
;
;       fname is missing from command line (all blanks or tabs, or else
;       zero characters on line
;
NO_FNAME:       MOV     DX,OFFSET ERROR_MESSAGE ;adr offset of error message
                MOV     AH,9                    ;DOS fn call, "print string"
                INT     21H                     ;call DOS
                INT     23H                     ;cause a control break, cause
                                                ;this is probably a bug in
                                                ;batch file creation.
                JMP     NO_FILE_EXIT            ;then exit with errorlevel =
                                                ; "NOT_FOUND_CODE"
;
;       found first non-blank/tab character on command line
;       at [SI][BX] .  Check for disk designator " n: " and
;       "strip" it from string by moving up pointer and decreasing
;       remaining bytes count.
;
GOT_NON_BLANK:  CMP     BYTE PTR [SI+1],COLON_CHAR  ;2nd non-blank char ":"?
                JNE     ADD_DRIVE               ;if not, [SI] is start of strng
                INC     SI                      ;else strip off the drive spec
                INC     SI
                DEC     CX                      ;and decr remaining byte count
                JZ      NO_FNAME                ;if string hits zero bytes left,
                DEC     CX
                JZ      NO_FNAME                ;  it's a "no param" error
;
;       SI now points to start of ASCIIZ string that we want to use as
;       the path/file name to search drives for
;
;       Put a byte of zeros at the end of string, and an "A:" in front
;       of string to initialize search.
;
ADD_DRIVE:      MOV     BX,CX                   ;number of bytes remaining
                MOV     BYTE PTR [SI][BX],0     ;points to 1 char past end
                                                ; of string
                MOV     BYTE PTR [SI-2],'A'     ;"A:" in front of string
                MOV     BYTE PTR [SI-1],':'
;
;       Replace the current critical error handler with our own
;
;       First, get the address of the critical error handler assigned
;       by "parent" process (probably system) to this process.  Save its
;       address, so that we can use it if our handler is handed a non-disk
;       error  ( "we don't do non-disk errors ..." )
;
                MOV     AH,35H                  ;DOS fn "get vector"
                MOV     AL,24H                  ;"critical error" vector no.
                INT     21H                     ;call DOS
                MOV     WORD PTR PARENT_HAND,BX ;save offset vector adr
                MOV     WORD PTR PARENT_HAND+2,ES  ;save seg vector adr
;
;       Now, take control of critical error vector by assigning a handler
;       to the vector address.
;
;       DOS will restore the "parent"'s vector when this process returns to
;       DOS.
;
                MOV     DX,OFFSET CRIT_HAND     ;address of handler
                MOV     AL,24H                  ;the vector to be replaced
                MOV     AH,25H                  ;DOS fn call "ret int vector"
                INT     21H                     ;call DOS and replace vector
;
;       Get the number of drives that DOS knows about
;       Dont disturb the current default disk setting when getting number
;       of drives from DOS.
;
                MOV     AH,19H                  ;DOS fn "get current disk"
                INT     21H                     ;current disk retd in AL
                MOV     DL,AL                   ;cur disk in DL for next call
                MOV     AH,0EH                  ;DOS fn "sel disk, return numb"
                INT     21H                     ;number of drives retd in AL
                SUB     CH,CH                   ;clear CH
                MOV     CL,AL                   ;number of drives
                INC     CX                      ;is now (1,2,3, or 4)
;
;       Now loop through all drives present, trying to find the file
;       (using fn call 4EH) on each drive.  If successful, return the
;       disk number to caller in errorlevel.
;
;       If not successful, return errorlevel = NOT_FOUND_CODE
;
                MOV     DX,SI                   ;offset adr of drive spec and
                DEC     DX                      ;  filename
                DEC     DX
FIND_FILE:      MOV     AH,4EH                  ;DOS fn "find first file"
                PUSH    CX                      ;save the loop count
                SUB     CX,CX                   ;attribute says search
                                                ;"normal" files only
                PUSH    [SI-2]                  ;save drive letter (DOS call
                                                ;destroys it if file found)
                INT     21H                     ;call DOS
                POP     [SI-2]                  ;restore drive letter
                POP     CX                      ;restore loop count
                JNC     FOUND_FILE              ;if carry not set, then search
                                                ;was successful - jump.
                INC     BYTE PTR [SI-2]         ;increment drive letter char
                LOOP    FIND_FILE               ;and look on next drive
;
;       did not find file.  Return NOT_FOUND_CODE in errorlevel
;
NO_FILE_EXIT:   MOV     AL,NOT_FOUND_CODE       ;file not found on any drive
EXIT:           MOV     AH,4CH                  ;DOS fn call to exit w/ errlev
                INT     21H                     ;call DOS and exit
;
;       found the file.  Retrieve the drive letter used in this last call,
;       map it to disk number (A = 0, B = 1, etc) and return it in errorlevel.
;
FOUND_FILE:     MOV     AL,[SI-2]               ;get the drive letter (upper
                                                ;case ascii code)
                SUB     AL,'A'                  ;map it to 0,1,2,3
;
;       Set the default drive designator to the drive on which the file
;       was found
;
                PUSH    AX                      ;save AL
                MOV     DL,AL                   ;drive number (0,1,2,...)
                MOV     AH,0EH                  ;DOS fn "select disk"
                INT     21H                     ;call DOS and set default
                POP     AX                      ;restore AL
                JMP     EXIT                    ;and return it in errorlevel
START           ENDP
page
;
;               CRIT_HAND               Critical Error Handler
;
;       This handler will be called by DOS functions when any critical
;       error (disk or non-disk) occurs during DOS INT 21H calls that
;       are made during execution of this process.
;
;       We only want to ignore disk errors, so we first test if the disk
;       is the cause of error.
;
;       If not a disk error, we jump to the parent's critical error handler
;       (we JMP so that stack looks as if we were never there).
;
;       If it is a disk error, we return an IGNORE code to the calling
;       DOS function.  The effect of all this is that when a DOS function
;       tries to access a disk drive that has a door open, or no disk, or
;       disk is unformatted, or disk is garbled, etc, the DOS function will
;       simply give up and return to the function's caller "empty handed".
;       There will be no "abort, retry, ignore" message from the critical
;       error handler.
;
;       on entry:       Bit 7 of AH = 0 if disk error
;                                   = 1 if not a disk error
;
;       on exit:        If disk error, we set AL = 0, "ignore error"
;
;       registers affected:     AH, AL
;
CRIT_HAND       PROC    FAR                     ;RETS are typed FAR
                TEST    AH,80H                  ;bit 7 set?
                JNZ     NOT_DISK                ;jump if yes,not disk error,
                                                ;don't treat it
;
;       Treatment of disk errors is easy, just tell system to ignore them
;
                SUB     AL,AL                   ;zero AL, "ignore" code
                IRET                            ;caller used INT so we IRET
;
;       It was not a disk error, so let the "parent" critical error handler
;       treat it by JMPing to its address that we saved.
;
;       We JMP so we dont disturb the stack.  Stack looks like we were
;       never called.
;
NOT_DISK:       JMP     DWORD PTR PARENT_HAND   ;jump to parent crit err hand
;
CRIT_HAND       ENDP
;
;
;       temporary storage of parent's critical handler address
;
PARENT_HAND     DD      1 DUP(?)                ;double word for FAR address
;
;
;
;       error message string
;
ERROR_MESSAGE   DB      CR,LF,'***** No filename was given with '
                DB      'SETDISK *****',CR,LF,'$'
;
;
COM_CODE        ENDS
                END     START
```
{% endraw %}

## SLASH.ASM

{% raw %}
```
               PAGE 60,132
TITLE  SLASH.COM  VER.2.0  14-AUG-83  15:20
comment *

                        SLASH.COM


        VERSION 2.0     14-AUG-83

        Written by      Warren Craycroft
                        6236 Oakdale Ave.
                        Oakland, CA  94605


        (C)  1983  by Warren Craycroft.  Permission is granted to copy and
        distribute this program, including source code, provided that no
        charge shall be made except for a reasonable charge for the media
        and handling, and that this notice shall remain intact in all copies.


*
comment *
        This program is a utility that can be used with DOS 2.0
        to help format the system console display, especially
        during execution of a batch file.  The program does this by
        parsing the command line entered with SLASH.  The syntax
        of the command line is shown below.  Brackets [] denote optional
        fields of the command line (the brackets themselves should not
        appear in the command line characters):

                SLASH [ / [ cmd1 [ cmd2 ...]] / ] [ <string>

        cmdi are one-letter commands listed below.

        If the first slash is present, then all one-letter commands
        recognized between first and second slash are executed in the
        order inwhich they occure left to right.

        If slashes are not present, the string is displayed with leading
        tabs and blanks removed.

        If slashes are present, all characters after the second slash are
        displayed, including all leading tabs and blanks.

        A carriage return - line feed is sent to the display at the end of
        a NON-null <string>.  If however the <string> is null, or if slashes
        are absent and string is all blanks and tabs, then no CR LF is displayed
               ( i.e. to skip a line, use SLASH/L and not SLASH )


        The one-letter commands include:

                L or l          skip one line

                B or b          sound buzzer

                D or d          print border across screen, double line



                INCLUDE THESE FILES WHEN ASSEMBLING

                        PARSER.INC

                        Q_CMDS.INC


*
;
;               constant equates
;
BEL_CHAR        EQU     07              ;ascii BEL keycode
CR              EQU     0DH             ;ascii carriage return
LF              EQU     0AH             ;ascii line feed
BLANK_CHAR      EQU     20H             ;ascii blank character
;
;       declare a relocatable segment.  Follow the .COM file requirements
;       of entry point at 100H and making all seg register references relative
;       to CS (no relocatable values MOV'ed into segment registers).
;
;
COM_CODE      SEGMENT
;
                ORG     80H             ;PSP offset 80:  user's command line
PSP_CMD_LINE    LABEL   BYTE            ;define a label for address refs
;
                ORG     100H            ;for COM file
;
;
                ASSUME  CS:COM_CODE,DS:COM_CODE    ;tell assembler value of CS
                                                   ; and DS
;
;       parse command line in PSP for commands inside slashes
;
;       leave CX pointing to first character after leading delimiters if no
;       slashes, or first char after second slash
;
START           PROC            FAR     ;FAR is meaningless; no RETS
;
;       address of PSP's command line into SI
;
                MOV     SI,OFFSET PSP_CMD_LINE
;
INCLUDE         PARSER.INC              ;bring in parser include file
;
;       if the string is not null (CX not zero), then display the
;       string and append a CR LF onto the string
;       Use single character DOS function; DOS string display function
;       will not display "$".
;
                MOV     AH,2            ;DOS fn call, 1 char display
                OR      CL,CL           ;is byte count of string zero?
                JE      EXIT            ;no display if yes
DISPLAY_LINE:   MOV     DL,[SI][BX]     ;next char into DL
                INT     21H             ;call DOS to display char
                INC     BX              ;point to next char
                LOOP    DISPLAY_LINE    ;and loop on char count
                CALL    SKIP            ;append CR LF onto end of string

;
;       return to DOS
;
EXIT:           INT     20H             ;return to DOS
START           ENDP
PAGE
INCLUDE         Q_CMDS.INC              ;bring in slash command tables and code
;
COM_CODE        ENDS
                END     START
```
{% endraw %}

## WHAT.ASM

{% raw %}
```
               PAGE 60,132
TITLE  WHAT.COM  VER.2.0  14-AUG-83  19:00
comment *

                        WHAT.COM


        VERSION 2.0     14-AUG-83

        Written by      Warren Craycroft
                        6236 Oakdale Ave.
                        Oakland, CA  94605


        (C)  1983  by Warren Craycroft.  Permission is granted to copy and
        distribute this program, including source code, provided that no
        charge shall be made except for a reasonable charge for the media
        and handling, and that this notice shall remain intact in all copies.


*
comment *
        This program is a utility that can be used with DOS 2.0 to
        obtain equipment configuration information.  This information
        is passed back from WHAT in the form of a returning
        "errorlevel", and may therefore be tested by appropriate
        IF subcommands in subsequent Batch File lines.

        The configuration information is obtained from BIOS from the
        system board switch settings  and from system parameters that
        DOS manages.


        WHAT is called with one parameter naming the equipment
        to be reported.  Only the first letter of the parameter
        need be entered on the WHAT command line.  The parameters
        are as follows:

        D  or   DRIVES          returns the number of valid disk drive letters
                                of floppy drives and fixed disks. This is the
                                parameter that is usually patched by virtual
                                disk enhancement programs.  DOS considers a
                                one physical drive system to have two valid
                                virtual drives, so you will get a 2 with this
                                parameter on such a system.

        F  or  FLOPPIES         returns the number of physical diskette drives
                                that is set on the System Board Switches
                                With a one physical drive system, you will get
                                a 1 with this parameter.

        V  or   VIDEO           returns:        0  no monitor
                                                1  40x25, color adaptor
                                                2  80x25, color adaptor
                                                3  80x25, either color
                                                   adaptor or monochrome
                                                   adaptor

        J  or   JOY adaptor     returns         0  no adaptor present
                                                1  adaptor present
                                                (NOT the number of joy STICKS)

        P  or   PARALLEL ports  returns number of parallel ports: 0,1,2, ...

        S  or   SERIAL ports    returns number of serial ports: 0,1,2, ...

        K  or   K blocks        returns number of 4 K memory blocks set on
                                switches


        R  or  RELEASE          returns the major release number of the
                                DOS you are running (e.g. 2 = DOS 2.0)
                                (returns zero for versions less than 2.0)

        M  or  MINOR            returns the minor release number of the
                                DOS you are running (e.g. 0 = DOS 2.0)
                                (returns zero for versions less than 2.0)

        C  or  CURRENT          returns the current default drive number.
                                (0 = A:, 1 = B:, etc)


        If the command line is empty or if the parameter does not begin with
        one of the above letters, an error message is printed and this
        utility halts execution of a Batch File in progress by executing
        a CONTROL-BREAK.
*
;
;               constant equates
;
BEL_CHAR        EQU     07              ;ascii BEL keycode
CR              EQU     0DH             ;ascii carriage return
LF              EQU     0AH             ;ascii line feed
TAB_CHAR        EQU     09              ;ascii tab
BLANK_CHAR      EQU     ' '             ;ascii blank
;
;
;       declare a relocatable segment.  Follow the .COM file requirements
;       of entry point at 100H and making all seg register references relative
;       to CS (no relocatable values MOV'ed into segment registers).
;
;
COM_CODE      SEGMENT
;
                ORG     80H             ;PSP offset 80:  user's command line
PSP_CMD_LINE    LABEL   BYTE            ;define a label for address refs
;
                ORG     100H            ;for COM file
;
;
                ASSUME  CS:COM_CODE,DS:COM_CODE    ;tell assembler value of CS
                                                   ; and DS
;
;
START           PROC            FAR     ;FAR is meaningless; no RETS
;
                SUB     CX,CX                   ;clear CX
                MOV     CL,PSP_CMD_LINE         ;byte count of line
                OR      CL,CL                   ;zero?
                JZ      BAD_PARAM               ;jump if yes, no param
                SUB     BX,BX                   ;else zero index
;
;       find first non-blank or non-tab character of command line
;
FIND_PARAM:     INC     BX                      ;point to next byte
                CMP     PSP_CMD_LINE[BX], BLANK_CHAR    ;blank char?
                JE      LOOP_FIND               ;keep looking if yes
                CMP     PSP_CMD_LINE[BX], TAB_CHAR      ;tab ?
                JNE     FOUND_PARAM             ;if not, 1st non blank
LOOP_FIND:      LOOP    FIND_PARAM              ;loop on char count
;
;       command line parameter was missing or was not recognized.
;
;       display message and return through CONTROL BREAK handler
;
BAD_PARAM:      MOV     DX,OFFSET ERROR_MESSAGE ;display error message
                MOV     AH,9                    ;"display string" DOS call
                INT     21H                     ;call DOS to display message
                INT     23H                     ;exit through CNTRL BREAK
                MOV     AH,255                  ;error errorlevel
                JMP     EXIT                    ;exit through 4CH fn call
;
;       else a non-blank character was found in command line.
;
;       call INT 11H (because most of following procedures need the
;       BIOS configuration report; only K blocks of memory request needs
;       INT 12H.
;
FOUND_PARAM:    INT     11H                     ;report returned in AX
;
;       now search in PARAMS table for the first letter. When matched,
;       BX pointing to corresponding entries in other tables.  Call
;       the procedure in PROCEDURES[BX], which will may use mask in
;       FIELD_MASK[BX] to get bit field, and shift count in
;       SHIFT_COUNT[BX] to right justify or divide the result of masking.
;
                MOV     DL,PSP_CMD_LINE[BX]     ;get the parameter from line
                MOV     CX,NUMBER_PARAMS        ;get table length for looping
                SUB     BX,BX                   ;zero index
TABLE_LOOKUP:   CMP     DL,PARAMS[BX]           ;param in left byte of table?
                JE      DO_PARAM                ;jump if matched
                CMP     DL,PARAMS[BX+1]         ;else param in right byte?
                JE      DO_PARAM                ;jump if matched
                INC     BX                      ;else next table entry
                INC     BX
                LOOP    TABLE_LOOKUP            ;loop on table length
                JMP     BAD_PARAM               ;param not in table
;
;       param found.  execute the procedure to prepare the errorlevel
;       code from the report from INT 11H or INT 12H (report is in AX)
;
DO_PARAM:       CALL    PROCEDURES[BX]
;
;       AL contains the errorlevel, return to DOS
;
EXIT:           MOV     AH,4CH                  ;"terminate" func call
                INT     21H                     ;return to DOS with errorlev
START           ENDP
;
;*****************************************************************************
;
;       procedures to prepare the errorlevel code for the different requests
;
MASK_SHIFT      PROC    NEAR
                AND     AX,FIELD_MASK[BX]       ;pass desired bit field
                                                ;through mask
                MOV     CX,SHIFT_COUNT[BX]      ;right justify or divide
                ROR     AX,CL
                RET                             ;errorlevel in AL
MASK_SHIFT      ENDP
;
;
FLOPPIES        PROC    NEAR
;
;       returns the number of physcial drives set on switches
;
                PUSH    AX                      ;save report
                ROR     AX,1                    ;shift bit 0 into CY
                POP     AX                      ;restore report
                JC      DISKS_PRESENT           ;bit 0 = 1 means disks present
                SUB     AL,AL                   ;else report zero disks
                RET
DISKS_PRESENT:  CALL    MASK_SHIFT              ;get 0,1,2, or 3 from report
                INC     AL
                RET                             ;return 1,2,3, or 4
FLOPPIES        ENDP
;
;
MEMORY          PROC    NEAR
;
;       use INT 12H to get 1K blocks, then divide by 4 to get number 4K blocks
;
                INT     12H                     ;get memory report
                CALL    MASK_SHIFT              ;divide by 4
                RET                             ;4K blocks in AL
MEMORY          ENDP
;
;
RELEASE         PROC    NEAR
;
;       use DOS fn 30H to get DOS version number.  AL = major,  AH = minor
;
                MOV     AH,30H                  ;DOS fn "get version numbers"
                INT     21H                     ;call DOS to get version
                CALL    MASK_SHIFT              ;mask_shift has the correct
                                                ;params for major or minor
                RET
RELEASE         ENDP
;
;
CURRENT         PROC    NEAR
;
;       Use DOS fn 19H to get the current default drive number
;
                MOV     AH,19H                  ;DOS fn "get current def drive"
                INT     21H                     ;call DOS to get default drive
                CALL    MASK_SHIFT              ;mask_shift has the correct
                                                ;params
                RET
CURRENT         ENDP
;
;
DRIVES          PROC    NEAR
;
;       returns the number of valid drives letters for floppies, fixed, and
;       virtual disks
;
                MOV     AH,19H                  ;DOS fn "return current drive"
                INT     21H                     ;current drive returned in AL
                MOV     DL,AL                   ;put current in DL for next call
                                                ;(so we dont disturb current )
                MOV     AH,0EH                  ;DOS fn "sel disk, return number
                INT     21H                     ;number of drives retd in AL
                RET
DRIVES          ENDP
;*****************************************************************************
;
;               tables for parameter execution
;
;               total number of parameters (table lengths)
;
NUMBER_PARAMS   EQU     10              ;all tables have this many entries
;
;               FIELD_MASK table
;
;       Each equipment request has a mask that passes the bits in the
;       equipment report word that correspond to the request
;
FIELD_MASK      DW      00C0H           ;FLOPPIES       bits 7, 6
                DW      0030H           ;VIDEO          bits 5,4
                DW      1000H           ;JOY            bit 12
                DW      0C000H          ;PARALLEL       bits 15,14
                DW      0E00H           ;SERIAL         bits 11,10,9
                DW      0FFFFH          ;K MEMORY       pass entire number
                DW      00FFH           ;RELEASE(MAJOR) pass AL
                DW      0FF00H          ;MINOR RELEASE  pass AH
                DW      00FFH           ;CURRENT        pass AL
                DW      00FFH           ;DRIVES         pass AL
;
;               SHIFT_COUNT table
;
;       Each different equipment request has a shift count that either
;       right justifies the bit field passed by the mask or else divides
;       the number in AX
;
SHIFT_COUNT     DW      6               ;FLOPPIES
                DW      4               ;VIDEO
                DW      12              ;JOY
                DW      14              ;PARALLELS
                DW      9               ;SERIALS
                DW      2               ;K BLOCKS (divide by 4)
                DW      0               ;RELEASE (MAJOR) NUMBER
                DW      8               ;MINOR RELEASE NUMBER
                DW      0               ;CURRENT DRIVE
                DW      0               ;DRIVES
;
;               PARAMS table
;
;       contains the legal parameter letters.  a match in this table
;       points BX to corresponding entries in other tables
;
PARAMS          DB      'F','f'         ;FLOPPIES
                DB      'V','v'         ;VIDEO
                DB      'J','j'         ;JOY
                DB      'P','p'         ;PARALLEL
                DB      'S','s'         ;SERIAL
                DB      'K','k'         ;K BLOCKS
                DB      'R','r'         ;RELEASE (MAJOR) NUMBER
                DB      'M','m'         ;MINOR RELEASE NUMBER
                DB      'C','c'         ;CURRENT DRIVE
                DB      'D','d'         ;DRIVES
;
;               PROCEDURES table
;
;       Each equipment request is treated by a procedure called through
;       this table.
;
PROCEDURES      DW      FLOPPIES
                DW      MASK_SHIFT
                DW      MASK_SHIFT
                DW      MASK_SHIFT
                DW      MASK_SHIFT
                DW      MEMORY
                DW      RELEASE
                DW      RELEASE
                DW      CURRENT
                DW      DRIVES
;
;
ERROR_MESSAGE   DB      CR,LF,BEL_CHAR
                DB      '****  WHAT cannot recognize parameter ****$'
COM_CODE        ENDS
                END     START
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0082

     Volume in drive A has no label
     Directory of A:\

    ALDIR    BAT       105   8-28-83   2:51p
    CATALOG           1348   8-30-83   7:15p
    EXDIR    BAT       111   8-28-83   2:52p
    EXTCODES REM      1546   8-17-83   7:56p
    FILELIST          1515   8-30-83   7:13p
    FILES82  TXT      1696   1-26-89   3:35p
    FINDFILE ASM     13951   8-28-83   2:13p
    FINDFILE COM       209   8-26-83   9:54p
    FUNKY    ASM      6370   8-28-83   2:17p
    FUNKY    COM       261   8-14-83   1:39p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694  12-01-88   3:29p
    PARSER   INC     10249   8-14-83  12:08p
    QDISPLAY INC      1422   8-14-83  12:33p
    QGETKEY  INC      2972   8-14-83   1:24p
    QUERY    ASM      7084   8-28-83   2:18p
    QUERY    COM       360   8-14-83   1:33p
    Q_CMDS   INC      3154   8-25-83  10:29p
    RUNME    BAT      2333   8-29-83   3:41p
    SETDISK  ASM     14952   8-28-83   2:15p
    SETDISK  COM       216   8-26-83   9:59p
    SIDIR    BAT       114   8-28-83   2:53p
    SLASH    ASM      4653   8-28-83   2:18p
    SLASH    COM       171   8-14-83   4:39p
    TESTERR  BAT       710   8-25-83   6:32p
    TESTF    BAT      1179   8-25-83   6:32p
    TESTFIND BAT       444   8-25-83   6:33p
    TESTQ    BAT       286   8-25-83   6:29p
    TESTSET  BAT       453   8-25-83   6:34p
    WHAT     ASM     14491   8-28-83   2:19p
    WHAT     COM       266   8-21-83  10:03a
    _ELEM    REM      8865   8-28-83   3:50p
    _EPILOG  REM      2701   8-25-83   6:58p
    _FIND    BAT      1109   8-29-83   3:45p
    _FIND    REM      8282   8-29-83   7:10p
    _FUNKY   BAT      1533   8-21-83   1:53p
    _FUNKY   REM      4556   8-25-83   6:49p
    _PERFORM REM      2817   8-25-83   6:51p
    _QUERY   BAT      2197   8-21-83   8:10p
    _QUERY   REM      2916   8-25-83   6:47p
    _RUNME2  BAT       232   8-23-83   9:37a
    _RUNME3  BAT      2697   8-25-83   6:38p
    _SLASH   REM      1048   8-25-83   6:42p
    _WHAT    BAT      1537   8-29-83   3:43p
    _WHAT    REM      5575   8-29-83   3:50p
           45 file(s)     139418 bytes
                            7680 bytes free
