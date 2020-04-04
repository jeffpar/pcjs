---
layout: page
heading: The MS-DOS Encyclopedia
title: "The MS-DOS Encyclopedia: Section V: System Calls"
permalink: /documents/books/programming/mspl13/msdos/encyclopedia/section5/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/section5/
---

### Section V: System Calls

{% raw %}

```none
Introduction


    All versions of MS-DOS include operating-system services that provide
    the programmer with hardware-independent tools for handling such tasks
    as file management, device input and output, memory allocation, and
    getting and setting system-management information such as the date and
    time. The majority of these services, collectively called the MS-DOS
    system calls, are invoked through Interrupt 21H. A few others are
    called using Interrupts 20H through 27H and 2FH. This section includes
    descriptions of these system-management services, with details
    relevant to all releases of MS-DOS through version 3.2.

    Use of the Interrupt 21H system calls, rather than hardware-specific
    routines, helps ensure that a program will run on any computer running
    an appropriate version of MS-DOS. Likewise, because new releases of
    MS-DOS attempt to maintain compatibility with earlier versions, use of
    the calls increases the likelihood that a program will remain usable
    for more than a single major or minor release of the operating system.

    The MS-DOS Interrupt 21H system calls are invoked as follows:

    AH                      = function number
    AL                      = subfunction code (if required)
    Other registers         = additional function-specific information
    Execute Interrupt 21H


Version Differences

    With MS-DOS versions 2.0 and later, considerable overlap occurs in the
    way in which many system services, such as file and character device
    I/O, can be carried out. This overlap is a result of the manner in
    which MS-DOS has developed since it was first released.

    The earliest version of MS-DOS, 1.0, included a relatively small set
    of Interrupt 21H system calls designed primarily for CP/M
    compatibility. These calls, numbered 00H through 2DH, relied on the
    use of file control blocks (FCBs) in an application's memory space for
    information on open files. See PROGRAMMING IN THE MS-DOS ENVIRONMENT:
    PROGRAMMING FOR MS-DOS: File and Record Management; Appendix G: File
    Control Block (FCB) Structure. The FCB-based system calls in MS-DOS do
    not support hierarchical file structures, nor do they support
    redirection of input and output. As a result, many of these system
    calls have been superseded in later releases of MS-DOS. The CP/M-style
    calls are no longer recommended and should not be used unless program
    compatibility with versions 1.x is required.

    Beginning with version 2.0, MS-DOS introduced the concept of handles--
    16-bit numbers returned by the operating system after a successful
    open or create call. The handles can subsequently be used by an
    application program to reference an open file or device, eliminating
    redundancy and unnecessary overhead. These handles are also used
    internally by MS-DOS to keep track of open files and devices. The
    operating system keeps all such handle-related information in its own
    memory space. Handles offer full support for the hierarchical file
    system introduced in version 2.0 of MS-DOS and thus allow the
    programmer to access any file stored in any directory or subdirectory
    on a block device. Because of the increased flexibility offered by the
    handle-related system function calls, these services are recommended
    over the earlier FCB-based calls, which perform similar tasks but for
    the current directory only. See PROGRAMMING IN THE MS-DOS
    ENVIRONMENT: PROGRAMMING FOR MS-DOS: File and Record Management.

    Another advantage of using the system calls introduced in versions 2.0
    and later is that these calls set the carry flag when an operational
    error occurs and return an error code in AX that indicates the nature
    of the error; the error can then be investigated further by calling
    Function 59H (Get Extended Error Information). The earlier system
    calls (00H through 2DH) generally simply return 0FFH (255) in AL to
    indicate an error or 00H to indicate that the call was completed
    successfully.


Format of Entries

    Entries in this section are arranged in hexadecimal order, with
    decimal equivalents in parentheses. Each entry is organized as
    follows:

    ■  Hexadecimal interrupt and/or function number (decimal equivalent in
        parentheses)

    ■  Interrupt or function name (similar to, but not always the same as,
        the name used in MS-DOS documentation)

    ■  Version dependencies

    ■  Interrupt or function purpose

    ■  Register contents needed to call

    ■  Register contents on return

    ■  Notes for programmers

    ■  Related functions

    ■  Program example

    The format of these entries is designed to give programmers ready
    reference to specific information, such as register contents, as well
    as more detailed notes on the use and application of each system call.
    For further information on the use of the system calls, see
    PROGRAMMING IN THE MS-DOS ENVIRONMENT.

    The assembly-language examples in this section use the Cmacros
    capability introduced with the Windows Software Development Kit.
    Cmacros, a set of assembly-language macros defined in the file
    CMACROS.INC, are useful because they provide a simplified interface to
    the function and segment conventions of high-level languages such as
    Microsoft C and Microsoft Pascal.

    Advantages to using Cmacros for assembly-language programming include
    transparent support for memory models and symbolic names for function
    arguments and local variables. Cmacros exist for code and data segment
    declarations (sBegin and sEnd), storage allocation (staticX, globalX,
    externX, and labelX), function declarations (cProc, parmX, localX,
    cBegin and cEnd), function calls (cCall, Save, and Arg), special
    definitions (DefX, RegPtr, and FarPtr), and error control (errnz and
    errn$). Of these, only sBegin, sEnd, cProc, parmX, localX, cBegin, and
    cEnd are used in the examples in this section.

    Two additional macros that support functions not found in CMACROS.INC
    are loadCP and loadDP. These macros, included in the file
    CMACROSX.INC listed below, allow pointers previously declared with
    staticX, globalX, parmX, DefX and localX to be loaded into registers
    without regard to the memory model in use--loadCP and loadDP
    generate code to load either the offset portion or the full
    segment:offset of the address, depending on the memory model.

;       CMACROSX.INC
;
;       This file includes supplemental macros for two macros included
;       in CMACROS.INC: parmCP and parmDP. When these macros are used,
;       CMACROS.INC allocates either 1 or 2 words to the variables
;       associated with these macros, depending on the memory model in
;       use. However, parmCP and parmDP provide no support for automatically
;       adjusting for different memory models--additional program code
;       needs to be written to compensate for this. The loadCP and loadDP
;       macros included in this file can be used to provide additional
;       flexibility for overcoming this limit.

;       For example, "parmDP pointer" will make space (1 word in small
;       and middle models and 2 words in compact, large, and huge models)
;       for the data pointer named "pointer". The statement
;       "loadDP ds,bx,pointer" can then be used to dynamically place the
;       value of "pointer" into DS:BX, depending on the memory model.
;       In small-model programs, this macro would generate the instruction
;       "mov dx,pointer" (it is assumed that DS already has the right
;       segment value); in large-model programs, this macro would generate
;       the statements "mov ds,SEG_pointer" and "mov dx,OFF_pointer".

checkDS macro        segmt
        diffcount = 0
        irp d,<ds,DS,Ds,dS>                  ; Allow for all spellings
            ifdif <segmt>,<d>                 ; of "ds".
                diffcount = diffcount+1
            endif
        endm
        if diffcount EQ 4
            it_is_DS = 0
        else
            it_is_DS = 1
        endif
        endm

checkES macro        segmt
        diffcount = 0
        irp d,<es,ES,Es,eS>                  ; Allow for all spellings
            ifdif <segmt>,<d>                 ; of "es".
                diffcount = diffcount+1
            endif
        endm
        if diffcount EQ 4
            it_is_ES = 0
        else
            it_is_ES = 1
        endif
        endm

loadDP  macro        segmt,offst,dptr
        checkDS segmt
        if sizeD                             ; <-- Large data model
            if it_is_DS
                lds  offst,dptr
            else
                checkES segmt
                if it_is_ES
                    les  offst,dptr
                else
                    mov  offst,OFF_&dptr
                    mov  segmt,SEG_&dptr
                endif
            endif
        else
            mov  offst,dptr                   ; <-- Small data model
            if it_is_DS EQ 0
                push ds                        ; If "segmt" is not DS,
                pop  segmt                     ; move ds to segmt.
            endif
        endif
        endm

loadCP  macro        segmt,offst,cptr
        if sizeC                             ; <-- Large code model
            checkDS segmt
            if it_is_DS
                lds offst,cptr
            else
                checkES
                if it_is_ES
                    les  offst,cptr
                else
                    mov  segmt,SEG_&cptr
                    mov  offst,OFF_&cptr
                endif
            endif
        else
            push cs                           ; <-- Small code model
            pop  segmt
            mov  offst,cptr
        endif
        endm

The following example program demonstrates the use of Cmacros in an
assembly-language program:

memS    =       0                ;Small memory model
?PLM    =       0                ;C calling conventions
?WIN    =       0                ;Disable Windows support

include cmacros.inc
include cmacrosx.inc

sBegin  CODE                     ;Start of code segment
assumes CS,CODE                  ;Required by MASM

        ;Microsoft C function syntax:
        ;
        ;     int addnums(firstnum, secondnum)
        ;         int firstnum, secondnum;
        ;
        ;Returns firstnum + secondnum

cProc   addnums,PUBLIC           ;Start of addnums functions
parmW   firstnum                 ;Declare parameters
parmW   secondnum
cBegin
        mov     ax,firstnum
        add     ax,secondnum
cEnd
sEnd    CODE
        end

A simple C program to call this function would be

main()
{
        printf("The sum is %d",addnums(12,33));
}


Contents by Functional Group

    Although distinguishing between FCB-based and handle-based system
    calls provides a broad and very generalized means of categorizing
    these services, the more common and useful approach is to group the
    calls by the type of task they perform. The following list groups the
    Interrupt 21H system calls and Interrupts 20H, 22H through 27H, and
    2FH by type of service.

╓┌───────────────────────┌───────────────────────────────────────────────────╖
    Function           Purpose
    ──────────────────────────────────────────────────────────────────
    Character Input
    01H                Character Input with Echo
    03H                Auxiliary Input
    06H                Direct Console I/O
    07H                Unfiltered Character Input Without Echo
    08H                Character Input Without Echo
    0AH                Buffered Keyboard Input
    0BH                Check Keyboard Status
    0CH                Flush Buffer, Read Keyboard

    ──────────────────────────────────────────────────────────────────
    Character Output
    02H                Character Output
    04H                Auxiliary Output
    05H                Print Character
    06H                Direct Console I/O
    09H                Display String

    ──────────────────────────────────────────────────────────────────
    Disk Management
    0DH                Disk Reset
    0EH                Select Disk
    19H                Get Current Disk
    1BH                Get Default Drive Data
    1CH                Get Drive Data
    2EH                Set/Reset Verify Flag
    36H                Get Disk Free Space
    54H                Get Verify Flag

    ──────────────────────────────────────────────────────────────────
    File Management
    0FH                Open File with FCB
    10H                Close File with FCB
    11H                Find First File
    12H                Find Next File
    13H                Delete File
    16H                Create File with FCB
    17H                Rename File
    1AH                Set DTA Address
    23H                Get File Size
    2FH                Get DTA Address
    3CH                Create File with Handle
    3DH                Open File with Handle
    3EH                Close File
    41H                Delete File
    43H                Get/Set File Attributes
    45H                Duplicate File Handle
    46H                Force Duplicate File Handle
    4EH                Find First File
    4FH                Find Next File
    56H                Rename File
    57H                Get/Set Date/Time of File
    5AH                Create Temporary File
    5BH                Create New File
    5CH                Lock/Unlock File Region

    ──────────────────────────────────────────────────────────────────
    Information Management
    14H                Sequential Read
    15H                Sequential Write
    21H                Random Read
    22H                Random Write
    24H                Set Relative Record
    27H                Random Block Read
    28H                Random Block Write
    3FH                Read File or Device
    40H                Write File or Device
    42H                Move File Pointer
    Interrupt 25H      Absolute Disk Read
    Interrupt 26H      Absolute Disk Write

    ──────────────────────────────────────────────────────────────────
    Directory Management
    39H                Create Directory
    3AH                Remove Directory
    3BH                Change Current Directory
    47H                Get Current Directory

    ──────────────────────────────────────────────────────────────────
    Process Management
    00H                Terminate Process
    31H                Terminate and Stay Resident
    4BH                Load and Execute Program (EXEC)
    4CH                Terminate Process with Return Code
    4DH                Get Return Code of Child Process
    59H                Get Extended Error Information
    Interrupt 20H      Terminate Program
    Interrupt 27H      Terminate and Stay Resident

    ──────────────────────────────────────────────────────────────────
    Memory Management
    48H                Allocate Memory Block
    49H                Free Memory Block
    4AH                Resize Memory Block
    58H                Get/Set Allocation Strategy

    ──────────────────────────────────────────────────────────────────
    Miscellaneous System Management
    25H                Set Interrupt Vector
    26H                Create New Program Segment Prefix
    29H                Parse Filename
    2AH                Get Date
    2BH                Set Date
    2CH                Get Time
    2DH                Set Time
    30H                Get MS-DOS Version Number
    33H                Get/Set Control-C Check Flag
    34H                Return Address of InDOS Flag
    35H                Get Interrupt Vector
    38H                Get/Set Current Country
    44H                IOCTL
    5EH                Network Machine Name/Printer Setup
    5FH                Get/Make Assign List Entry
    62H                Get Program Segment Prefix Address
    63H                Get Lead Byte Table (version 2.25 only)
    Interrupt 22H      Terminate Routine Address
    Interrupt 23H      Control-C Handler Address
    Interrupt 24H      Critical Error Handler Address
    Interrupt 2FH      Multiplex Interrupt




System Call Listings



Interrupt 20H (32)
Terminate Program
1.0 and later


    Interrupt 20H is one of several methods that a program can use to
    perform a final exit. It informs the operating system that the program
    is completely finished and that the memory the program occupied can be
    released.

To Call

    CS   = segment address of program segment prefix (PSP)

Returns

    Nothing

Programmer's Notes

    ■  In response to an Interrupt 20H call, MS-DOS takes the following
        actions:

        -  Restores the termination handler vector (Interrupt 22H) from
        PSP:000AH.

        -  Restores the Control-C vector (Interrupt 23H) from PSP:000EH.

        -  With MS-DOS versions 2.0 and later, restores the critical error
        handler vector (Interrupt 24H) from PSP:0012H.

        -  Flushes the file buffers.

        -  Transfers to the termination handler address.

        The termination handler releases all memory blocks allocated to the
        program, including its environment block and any dynamically
        allocated blocks that were not previously explicitly released;
        closes any files opened with handles that were not previously
        closed; and returns control to the parent process (usually
        COMMAND.COM).

    ■  If the program is returning to COMMAND.COM, control transfers first
        to COMMAND.COM's resident portion, which reloads COMMAND.COM's
        transient portion (if necessary) and passes control to it. If a
        batch file is in progress, the next line of the batch file is then
        fetched and interpreted; otherwise, a prompt is issued for the next
        user command.

    ■  Any files that have been written by the program using FCBs should
        be closed before using Interrupt 20H; otherwise, data may be lost.

    ■  For those programmers who have been with MS-DOS since its earliest
        incarnations, Interrupt 20H is the traditional way to exit from an
        application program. However, under versions 2.0 and later, the
        preferred methods of termination are Interrupt 21H Function 31H
        (Terminate and Stay Resident) and Interrupt 21H Function 4CH
        (Terminate Process with Return Code).

Example

        ;************************************************************;
        ;                                                            ;
        ;                     Perform a final exit.                  ;
        ;                                                            ;
        ;************************************************************;
                int     20H     ; Transfer to MS-DOS.



Interrupt 21H (33) Function 00H (0)
Terminate Process
1.0 and later


    Function 00H flushes all file buffers to disk, terminates the current
    process, and releases the memory used by the process.

To Call

    AH   = 00H
    CS   = segment of program's program segment prefix (PSP)

Returns

    Nothing

Programmer's Notes

    ■  The following interrupt vectors are restored from the PSP of the
        terminated program:

╓┌─────────────────────┌─────────────────────────────────────────────────────╖
        PSP Offset    Vector for Interrupt
        ──────────────────────────────────────────────────────────────────
        0AH           Interrupt 22H (terminate routine)
        0EH           Interrupt 23H (Control-C handler)
        12H           Interrupt 24H (critical error handler)
                    (versions 2.0 and later.)

    ■  All file buffers are written to disk and all handles are closed.
        Control is then transferred to Interrupt 22H (Terminate Routine
        Address).

    ■  Any file that has changed in length and was opened with an FCB
        should be closed before Function 00H is called. If such a file is
        not closed, its length, date, and time are not recorded correctly
        in the directory.

    ■  With versions 3.x of MS-DOS, restoring the default memory-
        allocation strategy used by MS-DOS is advisable if that strategy
        has been changed with Function 58H (Get/Set Allocation Strategy).
        Any global flags, such as the break and verify flags, that affect
        system behavior and that have been changed by the process should
        also be restored to their original values.

    ■  Function 00H performs exactly the same processing as Interrupt 20H
        (Terminate Program).

    ■  Function 00H is obsolete with MS-DOS versions 2.0 and later.
        Function 31H (Terminate and Stay Resident) and Function 4CH
        (Terminate Process with Return Code) are preferred; both enable the
        terminating process to pass a return code to the calling process
        and do not require that CS contain the PSP address.

Related Functions

    31H (Terminate and Stay Resident)
    4CH (Terminate Process with Return Code)

Example

    None



Interrupt 21H (33) Function 01H (1)
Character Input with Echo
1.0 and later


    Function 01H waits for a character from standard input, echoes it to
    standard output, and returns the character in the AL register.

To Call

    AH   = 01H

Returns

    AL   = 8-bit character code

Programmer's Notes

    ■  With versions 1.x of MS-DOS, Function 01H reads input from the
        keyboard. With versions 2.0 and later, Function 01H reads a
        character from standard input, which defaults to the keyboard but
        can be redirected to another device or to a file. Whether or not
        input has been redirected, the character is echoed to standard
        output.

    ■  Function 01H waits for input if a character is not available. A
        wait can be avoided by calling Function 0BH (Check Keyboard
        Status), which checks whether a character is available from
        standard input, and then calling Function 01H if a character is
        ready.

    ■  On IBM PCs and compatibles, extended characters, such as those
        produced by the Alt-O and F8 keys, are returned as 2 bytes. The
        first byte, 00H, signals an extended character; the second byte
        completes the key code. To read these characters, Function 01H must
        be called twice.

        With MS-DOS versions 2.0 and later, if standard input has been
        redirected, the value 00H can also represent a null character from
        a file and, in that case, might not represent valid data. A program
        can use Function 44H (IOCTL) Subfunction 00H (Get Device Data) to
        determine whether standard input has been redirected.

    ■  The carriage-return character (0DH) echoes a carriage return but
        not a linefeed. Likewise, the linefeed character (0AH) does not
        echo a carriage return.

    ■  With MS-DOS versions 2.0 and later, Function 01H cannot detect an
        end-of-file condition if input has been redirected.

    ■  Interrupt 23H (Control-C Handler Address) is called if Control-C
        (03H) is the input character and (with versions 2.0 and later)
        input is not redirected.

    ■  With MS-DOS versions 2.0 and later, if standard input has been
        redirected to come from a file, Break must be enabled for Interrupt
        23H to be called if Control-C (03H) is the input character.

    ■  Alternative character input functions are 06H (Direct Console I/O),
        07H (Unfiltered Character Input Without Echo), and 08H (Character
        Input Without Echo). The four functions are related as follows:

╓┌─────────────────────┌─────────────────┌────────────┌──────────────────────╖
                    Waits             Echoes to    Acts on
        Function      for Input         Std Output   Control-C
        ──────────────────────────────────────────────────────────────────
        01H           yes               yes          yes
        06H           no                no           no
        07H           yes               no           no
        08H           yes               no           yes

        Depending on whether Control-C needs to be filtered, Function 06H,
        07H, or 08H can be used to handle character display separately from
        character input.

    ■  With MS-DOS versions 2.0 and later, Function 3FH (Read File or
        Device) should be used in preference to Function 01H.

Related Functions

    06H (Direct Console I/O)
    07H (Unfiltered Character Input Without Echo)
    08H (Character Input Without Echo)
    0AH (Buffered Keyboard Input)
    0CH (Flush Buffer, Read Keyboard)
    3FH (Read File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;           Function 01H: Character Input with Echo          ;
        ;                                                            ;
        ;           int read_kbd_echo()                              ;
        ;                                                            ;
        ;           Returns a character from standard input          ;
        ;           after sending it to standard output.             ;
        ;                                                            ;
        ;************************************************************;

cProc   read_kbd_echo,PUBLIC
cBegin
        mov     ah,01h          ; Set function code.
        int     21h             ; Wait for character.
        mov     ah,0            ; Character is in AL, so clear high
                                ; byte.
cEnd



Interrupt 21H (33) Function 02H (2)
Character Output
1.0 and later


    Function 02H sends a character to standard output.

To Call

    AH   = 02H
    DL   = 8-bit code for character to be output

Returns

    Nothing

Programmer's Notes

    ■  With versions 1.x of MS-DOS, Function 02H sends a character to the
        active display. With MS-DOS versions 2.0 and later, Function 02H
        sends the character to standard output. By default, the output is
        sent to the active display, but it can be redirected to another
        device or to a file.

    ■  With all versions of MS-DOS, displaying a backspace (08H) moves the
        cursor back one position but does not erase the character at the
        new position.

    ■  If a Control-C is detected after the character is sent, Interrupt
        23H (Control-C Handler Address) is called.

    ■  With MS-DOS versions 2.0 and later, Function 40H (Write File or
        Device) should be used in preference to Function 02H.

Related Functions

    06H (Direct Console I/O)
    09H (Display String)
    40H (Write File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;                Function 02H: Character Output              ;
        ;                                                            ;
        ;                int disp_ch(c)                              ;
        ;                    char c;                                 ;
        ;                                                            ;
        ;                Returns 0.                                  ;
        ;                                                            ;
        ;************************************************************;


cProc   disp_ch,PUBLIC
parmB   c
cBegin
        mov     dl,c            ; Get character into DL.
        mov     ah,02h          ; Set function code.
        int     21h             ; Send character.
        xor     ax,ax           ; Return 0.
cEnd



Interrupt 21H (33) Function 03H (3)
Auxiliary Input
1.0 and later


    Function 03H waits for a character from the standard auxiliary device
    and returns the character in the AL register.

To Call

    AH   = 03H

Returns

    AL   = 8-bit character code

Programmer's Notes

    ■  With versions 1.x of MS-DOS, Function 03H reads a character from
        the first serial port. With versions 2.0 and later, Function 03H
        reads from the standard auxiliary device (AUX), which defaults to
        COM1.

    ■  Function 03H waits for input until a character is available from
        the standard auxiliary device.

    ■  Function 03H is not interrupt driven and does not buffer characters
        received from the standard auxiliary device. As a result, it may
        not be fast enough for some telecommunications applications and
        data may be lost.

    ■  A program cannot perform error detection using Function 03H. On IBM
        PCs and compatibles, error detection is available through the ROM
        BIOS Interrupt 14H. Another option is to drive the communications
        controller directly.

    ■  Function 03H does not ensure that auxiliary input is connected and
        working, nor does it perform any error checking or set up the
        auxiliary input device. On IBM PCs and compatibles, the standard
        auxiliary device, normally COM1, is set to 2400 baud, no parity, 1
        stop bit, and 8 databits at startup. These parameters can be
        changed with the MS-DOS MODE command.

    ■  Some auxiliary input devices do not support 8-bit data
        transmission. This transmission parameter is a characteristic of
        the device and the communication parameters to which it is set; it
        is independent of Function 03H.

    ■  If a Control-C is detected at the console, Interrupt 23H
        (Control-C Handler Address) is called.

    ■  With MS-DOS versions 2.0 and later, Function 3FH (Read File or
        Device), which handles strings as well as single characters, should
        be used in preference to Function 03H.

Related Functions

    04H (Auxiliary Output)
    3FH (Read File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;           Function 03H: Auxiliary Input                    ;
        ;                                                            ;
        ;           int aux_in()                                     ;
        ;                                                            ;
        ;           Returns next character from AUX device.          ;
        ;                                                            ;
        ;************************************************************;

cProc   aux_in,PUBLIC
cBegin
        mov     ah,03h          ; Set function code.
        int     21h             ; Wait for character from AUX.
        mov     ah,0            ; Character is in AL
                                ; so clear high byte.
cEnd



Interrupt 21H (33) Function 04H (4)
Auxiliary Output
1.0 and later


    Function 04H sends a character to the standard auxiliary device.

To Call

    AH   = 04H
    DL   = 8-bit code for character to be output

Returns

    Nothing

Programmer's Notes

    ■  With versions 1.x of MS-DOS, Function 04H sends a character to the
        first serial port. With versions 2.0 and later, Function 04H sends
        the character to the standard auxiliary device (AUX), which
        defaults to COM1.

    ■  Function 04H does not ensure that auxiliary output is connected and
        working, nor does it perform any error checking or set up the
        auxiliary output device. On IBM PCs and compatibles, the standard
        auxiliary device, normally COM1, is set to 2400 baud, no parity, 1
        stop bit, and 8 databits at startup. These parameters can be
        changed with the MS-DOS MODE command.

    ■  Function 04H does not return the status of auxiliary output, nor
        does it return an error code if the auxiliary output device is not
        ready for data. If the device is busy, Function 04H waits until it
        is available.

    ■  Interrupt 23H (Control-C Handler Address) is called if a Control-C
        is detected at the console.

    ■  With MS-DOS versions 2.0 and later, Function 40H (Write File or
        Device), which manages strings as well as single characters, should
        be used in preference to Function 04H.

Related Functions

    03H (Auxiliary Input)
    40H (Write File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;                Function 04H: Auxiliary Output              ;
        ;                                                            ;
        ;                int aux_out(c)                              ;
        ;                    char c;                                 ;
        ;                                                            ;
        ;                Returns 0.                                  ;
        ;                                                            ;
        ;************************************************************;

cProc   aux_out,PUBLIC
parmB   c
cBegin
        mov     dl,c            ; Get character into DL.
        mov     ah,04h          ; Set function code.
        int     21h             ; Write character to AUX.
        xor     ax,ax           ; Return 0.
cEnd



Interrupt 21H (33) Function 05H (5)
Print Character
1.0 and later


    Function 05H sends a character to the standard printer.

To Call

    AH   = 05H
    DL   = 8-bit code for character to be output

Returns

    Nothing

Programmer's Notes

    ■  With versions 1.x of MS-DOS, Function 05H sends a character to the
        first parallel port (LPT1). With versions 2.0 and later, Function
        05H sends the character to the standard printer (PRN), which
        defaults to LPT1 unless LPT1 has been reassigned with the MS-DOS
        MODE command. If redirection is in effect, calls to this function
        send output to the device currently assigned to LPT1.

    ■  Function 05H does not return the status of the standard printer,
        nor does it return an error code if the standard printer is not
        ready for characters. If the printer is busy or off line, Function
        05H waits until it is available. MS-DOS does, however, perform
        error checking during the print operation and send any error
        messages to the standard error device (normally the display).

    ■  If a Control-C is detected at the console, Interrupt 23H (Control-C
        Handler Address) is called.

    ■  With MS-DOS versions 2.0 and later, Function 40H (Write File or
        Device) should be used in preference to Function 05H.

Related Function

    40H (Write File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;                Function 05H: Print Character               ;
        ;                                                            ;
        ;                int print_ch(c)                             ;
        ;                    char c;                                 ;
        ;                                                            ;
        ;                Returns 0.                                  ;
        ;                                                            ;
        ;************************************************************;

cProc   print_ch,PUBLIC
parmB   c
cBegin
        mov     dl,c            ; Get character into DL.
        mov     ah,05h          ; Set function code.
        int     21h             ; Write character to standard printer.
        xor     ax,ax           ; Return 0.
cEnd



Interrupt 21H (33) Function 06H (6)
Direct Console I/O
1.0 and later


    Function 06H reads a character from standard input or writes a
    character to standard output.

To Call

    AH   = 06H

    For character input:

    DL   = FFH

    For character output:

    DL   = 00-FEH (8-bit character code)

Returns

    If DL was 0FFH on call and a character was ready:

    Zero flag is clear.

    AL   = 8-bit character code

    If DL was 0FFH on call and no character was ready:

    Zero flag is set.

Programmer's Notes

    ■  With MS-DOS versions 1.x, Function 06H reads a character from the
        keyboard or sends a character to the display. With versions 2.0 and
        later, input and output can be redirected; Function 06H reads from
        the device currently assigned to standard input or sends to the
        device currently assigned to standard output.

    ■  Function 06H allows all possible characters and control codes with
        values between 00H and 0FEH to be read or written with standard
        input and output and with no filtering by the operating system. The
        rubout character (0FFH, 255 decimal), however, cannot be output
        with Function 06H; Function 02H (Character Output) should be used
        instead.

    ■  On IBM PCs and compatibles, extended characters, such as those
        produced by the Alt-O and F8 keys, are returned as 2 bytes. The
        first byte, 00H, signals an extended character; the second byte
        completes the key code. To read these characters, Function 06H must
        be called twice.

        With MS-DOS versions 2.0 and later, if standard input has been
        redirected, the value 00H can also represent a null character from
        a file and, in that case, might not represent valid data. A program
        can use Function 44H (IOCTL) Subfunction 00H (Get Device Data) to
        determine whether standard input has been redirected.

    ■  If Function 06H is an input request and a Control-C is read, the
        character is returned as any other character would be. Interrupt
        23H (Control-C Handler Address) is not called.

    ■  With MS-DOS versions 2.0 and later, Function 3FH (Read File or
        Device) and Function 40H (Write File or Device) should be used in
        preference to Function 06H.

Related Functions

    01H (Character Input with Echo)
    02H (Character Output)
    07H (Unfiltered Character Input Without Echo)
    08H (Character Input Without Echo)
    09H (Display String)
    0AH (Buffered Keyboard Input)
    0CH (Flush Buffer, Read Keyboard)
    3FH (Read File or Device)
    40H (Write File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;          Function 06H: Direct Console I/O                  ;
        ;                                                            ;
        ;          int con_io(c)                                     ;
        ;              char c;                                       ;
        ;                                                            ;
        ;          Returns meaningless data if c is not 0FFH,        ;
        ;          otherwise returns next character from             ;
        ;          standard input.                                   ;
        ;                                                            ;
        ;************************************************************;

cProc   con_io,PUBLIC
parmB   c
cBegin
        mov     dl,c            ; Get character into DL.
        mov     ah,06h          ; Set function code.
        int     21h             ; This function does NOT wait in
                                ; input case (c = 0FFH)!
        mov     ah,0            ; Return the contents of AL.
cEnd



Interrupt 21H (33) Function 07H (7)
Unfiltered Character Input Without Echo
1.0 and later


    Function 07H waits for a character from standard input. It does not
    echo the character to standard output, and it ignores Control-C
    characters.

To Call

    AH   = 07H

Returns

    AL   = 8-bit character code

Programmer's Notes

    ■  With versions 1.x of MS-DOS, Function 07H reads input from the
        keyboard. With versions 2.0 and later, Function 07H reads a
        character from standard input. Standard input defaults to the
        keyboard but can be redirected to another device or to a file.

    ■  Function 07H waits for input if a character is not available. A
        wait can be avoided by calling Function 0BH (Check Keyboard
        Status), which checks whether a character is available from
        standard input, and then calling Function 07H if a character is
        ready.

    ■  On IBM PCs and compatibles, extended characters, such as those
        produced by the Alt-O and F8 keys, are returned as 2 bytes. The
        first byte, 00H, signals an extended character; the second byte
        completes the key code. To read these characters, Function 07H must
        be called twice.

        With MS-DOS versions 2.0 and later, if standard input has been
        redirected, the value 00H can also represent a null character from
        a file and, in that case, might not represent valid data. A program
        can use Function 44H (IOCTL) Subfunction 00H (Get Device Data) to
        determine whether standard input has been redirected.

    ■  Interrupt 23H (Control-C Handler Address) is not called if a
        Control-C is read. Function 07H simply passes the character back
        through the AL register. If Control-C checking is required,
        Function 08H (Character Input Without Echo) should be used
        instead.

    ■  With MS-DOS versions 2.0 and later, Function 3FH (Read File or
        Device) should be used in preference to Function 07H.

Related Functions

    01H (Character Input with Echo)
    06H (Direct Console I/O)
    08H (Character Input Without Echo)
    0AH (Buffered Keyboard Input)
    0CH (Flush Buffer, Read Keyboard)
    3FH (Read File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;         Function 07H: Unfiltered Character Input           ;
        ;                       Without Echo                         ;
        ;                                                            ;
        ;         int con_in()                                       ;
        ;                                                            ;
        ;         Returns next character from standard input.        ;
        ;                                                            ;
        ;************************************************************;

cProc   con_in,PUBLIC
cBegin
        mov     ah,07h          ; Set function code.
        int     21h             ; Wait for character, no echo.
        mov     ah,0            ; Clear high byte.
cEnd



Interrupt 21H (33) Function 08H (8)
Character Input Without Echo
1.0 and later


    Function 08H waits for a character from standard input. The character
    is not echoed to standard output.

To Call

    AH   = 08H

Returns

    AL   = 8-bit character code

Programmer's Notes

    ■  With versions 1.x of MS-DOS, Function 08H reads input from the
        keyboard. With versions 2.0 and later, Function 08H reads a
        character from standard input. Standard input defaults to the
        keyboard but can be redirected to another device or to a file.

    ■  Function 08H waits for input if a character is not available. A
        wait can be avoided by calling Function 0BH (Check Keyboard
        Status), which checks whether a character is available, and then
        calling Function 08H if a character is ready.

    ■  On IBM PCs and compatibles, extended characters, such as those
        produced by the Alt-O and F8 keys, are returned as 2 bytes. The
        first byte, 00H, signals an extended character; the second byte
        completes the key code. To read these characters, Function 08H must
        be called twice.

        With MS-DOS versions 2.0 and later, if standard input has been
        redirected, the value 00H can also represent a null character from
        a file and, in that case, might not represent valid data. A process
        can use Function 44H (IOCTL) Subfunction 00H (Get Device Data) to
        determine whether standard input has been redirected.

    ■  If a Control-C is read and (with versions 2.0 and later) input has
        not been redirected, Interrupt 23H (Control-C Handler Address) is
        called. To read the Control-C character as data, Function 07H
        (Unfiltered Character Input Without Echo) should be used.

    ■  Interrupt 23H (Control-C Handler Address) is called if Control-C is
        the input character, Break is enabled, and (with versions 2.0 and
        later) standard input has been redirected to come from a file.

    ■  With MS-DOS versions 2.0 and later, if standard input has been
        redirected to come from a file, Break must be enabled for Interrupt
        23H to be called if Control-C (03H) is the input character.

    ■  With MS-DOS versions 2.0 and later, Function 3FH (Read File or
        Device) should be used in preference to Function 08H.

Related Functions

    01H (Character Input with Echo)
    06H (Direct Console I/O)
    07H (Unfiltered Character Input Without Echo)
    0AH (Buffered Keyboard Input)
    0CH (Flush Buffer, Read Keyboard)
    3FH (Read File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;    Function 08H:  Unfiltered Character Input Without Echo  ;
        ;                                                            ;
        ;    int read_kbd()                                          ;
        ;                                                            ;
        ;    Returns next character from standard input.             ;
        ;                                                            ;
        ;************************************************************;

cProc   read_kbd,PUBLIC
cBegin
        mov     ah,08h          ; Set function code.
        int     21h             ; Wait for character, no echo.
        mov     ah,0            ; Clear high byte.
cEnd



Interrupt 21H (33) Function 09H (9)
Display String
1.0 and later


    Function 09H sends a string of characters to standard output. The
    string must end with the dollar-sign character ($). All characters up
    to, but not including, the $ are displayed.

To Call

    AH      = 09H
    DS:DX   = segment:offset of string to display

Returns

    Nothing

Programmer's Notes

    ■  With MS-DOS versions 1.x, Function 09H sends the string to the
        display. With versions 2.0 and later, the string is written to
        standard output. By default, standard output is sent to the
        display, but it can be redirected to another device or to a
        file.

    ■  The string can include any valid ASCII characters, including
        control codes. Sending a dollar sign with this function, however,
        is not possible.

    ■  Depending on the device currently serving as standard output,
        characters other than the normally displayable ASCII characters
        (20H to 7FH) may or may not be displayed. On IBM PCs and most
        compatibles, extensions to the displayable ASCII character set
        (character codes 80H to FFH) appear as foreign or graphics
        characters.

    ■  Display begins at the current cursor position on standard output.
        After the string is completely displayed, the cursor position is
        updated to the location immediately following the string.

        On IBM PCs and compatibles, if the end of a line is reached before
        the string is completely displayed, a carriage return and linefeed
        are issued and the next character is displayed in the first
        position of the following line. If the cursor reaches the bottom
        right corner of the display before the complete string has been
        sent, the display is scrolled up one line.

    ■  Control characters are often included in the string to be sent. The
        following sample fragment of code contains carriage returns and
        linefeeds:

        msg     db      'Resident part of TSR.COM installed'
                db      0dh, 0ah
                db      'Copyright (c) 19xx Foo Software, Inc.'
                db      0dh, 0ah, 0ah, 0ah
                db      '$'

    ■  If a Control-C is detected, Interrupt 23H (Control-C Handler
        Address) is called.

    ■  With MS-DOS versions 2.0 and later, Function 40H (Write File or
        Device) should be used in preference to Function 09H.

Related Functions

    02H (Character Output)
    06H (Direct Console I/O)
    40H (Write File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;                 Function 09H: Display String               ;
        ;                                                            ;
        ;                 int disp_str(pstr)                         ;
        ;                     char *pstr;                            ;
        ;                                                            ;
        ;                 Returns 0.                                 ;
        ;                                                            ;
        ;************************************************************;

cProc   disp_str,PUBLIC,<ds,di>
parmDP  pstr
cBegin
        loadDP  ds,dx,pstr      ; DS:DX = pointer to string.
        mov     ax,0900h        ; Prepare to write dollar-terminated
                                ; string to standard output, but
                                ; first replace the 0 at the end of
                                ; the string with '$'.
        push    ds              ; Set ES equal to DS.
        pop     es              ; (MS-C does not require ES to be
                                ; saved.)
        mov     di,dx           ; ES:DI points at string.
        mov     cx,0ffffh       ; Allow string to be 64KB long.
        repne   scasb           ; Look for 0 at end of string.
        dec     di              ; Scasb search always goes 1 byte too
                                ; far.
        mov     byte ptr [di],'$' ; Replace 0 with dollar sign.
        int     21h             ; Have MS-DOS print string.
        mov     [di],al         ; Restore 0 terminator.
        xor     ax,ax           ; Return 0.
cEnd



Interrupt 21H (33) Function 0AH (10)
Buffered Keyboard Input
1.0 and later


    Function 0AH collects characters from standard input and places them
    in a user-specified memory buffer. Input is accepted until either a
    carriage return (0DH) is encountered or the buffer is filled to one
    character less than its capacity. The characters are echoed to
    standard output.

To Call

    AH      = 0AH
    DS:DX   = segment:offset of input buffer

Returns

    Nothing

Programmer's Notes

    ■  With MS-DOS versions 1.x, Function 0AH reads a string from the
        keyboard. With versions 2.0 and later, calls to this function read
        a string from standard input, which defaults to the keyboard but
        can be redirected to another device or to a file. The MS-DOS
        editing keys are active during input with this function.

    ■  The buffer pointed to by DS:DX must have the following
        format:

╓┌────────────────┌──────────────────────────────────────────────────────────╖
        Byte     Contents
        ──────────────────────────────────────────────────────────────────
        0        Maximum number of characters to read (1-255); this
                value must be set by the process before Function 0AH
                is called.

        1        Count of characters read (does not include the carriage
                return); this value is set by Function 0AH before
                returning to the process.

        2-(n+2)  Actual string of characters read, including the carriage
                return; n = number of bytes read.

    ■  The first byte of the buffer must contain the maximum number of
        characters the program will accept, including the carriage return
        at the end. Because the last byte must be a carriage return, the
        maximum number of bytes this function will actually read is 254.
        The carriage return is not included in the character count returned
        by MS-DOS in the second byte of the buffer.

    ■  If the buffer fills to 1 byte less than its capacity, succeeding
        characters are ignored and a beep is sounded for each keypress
        until a carriage return is received.

    ■  If a Control-C is detected and (with versions 2.0 and later) input
        has not been redirected, Interrupt 23H (Control-C Handler Address)
        is called.

    ■  With versions 2.0 and later, if standard input has been redirected
        to come from a file, Break must be enabled for Interrupt 23H
        (Control-C Handler Address) to be called when Control-C is the
        input character.

    ■  With MS-DOS versions 2.0 and later, if input is redirected, an end-
        of-file condition goes undetected by Function 0AH.

Related Functions

    01H (Character Input with Echo)
    06H (Direct Console I/O)
    07H (Unfiltered Character Input Without Echo)
    08H (Character Input Without Echo)
    0CH (Flush Buffer, Read Keyboard)
    3FH (Read File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;        Function 0AH: Buffered Keyboard Input               ;
        ;                                                            ;
        ;        int read_str(pbuf,len)                              ;
        ;            char *pbuf;                                     ;
        ;            int len;                                        ;
        ;                                                            ;
        ;        Returns number of bytes read into buffer.           ;
        ;                                                            ;
        ;        Note: pbuf must be at least len+3 bytes long.       ;
        ;                                                            ;
        ;************************************************************;

cProc   read_str,PUBLIC,<ds,di>
parmDP  pbuf
parmB   len
cBegin
        loadDP  ds,dx,pbuf      ; DS:DX = pointer to buffer.
        mov     al,len          ; AL = len.
        inc     al              ; Add 1 to allow for CR in buf.
        mov     di,dx
        mov     [di],al         ; Store max length into buffer.
        mov     ah,0ah          ; Set function code.
        int     21h             ; Ask MS-DOS to read string.
        mov     al,[di+1]       ; Return number of characters read.
        mov     ah,0
        mov     bx,ax
        mov     [bx+di+2],ah    ; Store 0 at end of buffer.
cEnd



Interrupt 21H (33) Function 0BH (11)
Check Keyboard Status
1.0 and later


    Function 0BH returns a value in AL that indicates whether a character
    is available from standard input.

To Call

    AH   = 0BH

Returns

    AL   = 00H       no character available
        = FFH       one or more characters available

Programmer's Notes

    ■  With MS-DOS versions 1.x, Function 0BH checks the type-ahead buffer
        for a character. With versions 2.0 and later, if input has been
        redirected, Function 0BH checks standard input for a character. If
        input has not been redirected, the function checks the type-ahead
        buffer.

    ■  Function 0BH does not indicate how many characters are available;
        it merely indicates whether at least one character is available.

    ■  If the available character is Control-C, Interrupt 23H (Control-C
        Handler Address) is called.

    ■  Function 0BH does not remove characters from standard input. Thus,
        if a character is present, repeated calls return 0FFH in AL until
        all characters in the buffer are read, either with one of the
        character-input functions (01H, 06H, 07H, 08H, or 0AH) or with
        Function 3FH (Read File or Device) using the handle for standard
        input (0).

Related Functions

    06H (Direct Console I/O)
    44H Subfunction 06H (IOCTL: Check Input Status)

Example

        ;************************************************************;
        ;                                                            ;
        ;             Function 0BH: Check Keyboard Status            ;
        ;                                                            ;
        ;             int key_ready()                                ;
        ;                                                            ;
        ;             Returns 1 if key is ready, 0 if not.           ;
        ;                                                            ;
    ;************************************************************;

cProc   key_ready,PUBLIC
cBegin
        mov     ah,0bh          ; Set function code.
        int     21h             ; Ask MS-DOS if key is available.
        and     ax,0001h        ; Keep least significant bit only.
cEnd



Interrupt 21H (33) Function 0CH (12)
Flush Buffer, Read Keyboard
1.0 and later


    Function 0CH clears the standard-input buffer and then performs one of
    the other keyboard input functions (01H, 06H, 07H, 08H, 0AH).

To Call

    AH      = 0CH
    AL      = input function number to execute

    If AL is 06H:

    DL      = FFH

    If AL is 0AH:

    DS:DX   = segment:offset of buffer to receive input

Returns

    If AL was 01H, 06H, 07H, or 08H on call:

    AL      = 8-bit ASCII character from standard input

    If AL was 0AH on call:

    Nothing

Programmer's Notes

    ■  With versions 1.x of MS-DOS, Function 0CH empties the type-ahead
        buffer before executing the input function specified in AL. With
        versions 2.0 and later, if input has been redirected to a file,
        Function 0CH does nothing before carrying out the input function
        specified in AL; if input was not redirected, the type-ahead buffer
        is flushed.

    ■  A function number other than 01H, 06H, 07H, 08H, or 0AH in AL
        simply flushes the standard-input buffer and returns control to the
        calling program.

    ■  If AL contains 0AH, DS:DX must point to the buffer in which MS-DOS
        is to place the string read from the keyboard.

    ■  Because the buffer is flushed before the input function is carried
        out, any Control-C characters pending in the buffer are discarded.
        If subsequent input is a Control-C, however, Interrupt 23H
        (Control-C Handler Address) is called.

    ■  This function exists to defeat the type-ahead feature if necessary--
        for example, to obtain input at a critical prompt the user may not
        have anticipated.

Related Functions

    01H (Character Input with Echo)
    06H (Direct Console I/O)
    07H (Unfiltered Character Input Without Echo)
    08H (Character Input Without Echo)
    0AH (Buffered Keyboard Input)
    3FH (Read File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;          Function 0CH: Flush Buffer, Read Keyboard         ;
        ;                                                            ;
        ;          int flush_kbd()                                   ;
        ;                                                            ;
        ;          Returns 0.                                        ;
        ;                                                            ;
        ;************************************************************;

cProc   flush_kbd,PUBLIC
cBegin
        mov     ax,0c00h        ; Just flush type-ahead buffer.
        int     21h             ; Call MS-DOS.
        xor     ax,ax           ; Return 0.
cEnd



Interrupt 21H (33) Function 0DH (13)
Disk Reset
1.0 and later


    Function 0DH writes to disk all internal MS-DOS file buffers in memory
    that have been modified since the last write. All buffers are then
    marked as "free."

To Call

    AH   = 0DH

Returns

    Nothing

Programmer's Notes

    ■  Function 0DH ensures that the information stored on disk matches
        changes made by write requests to file buffers in memory.

    ■  Function 0DH does not update the disk directory. The application
        must issue Function 10H (Close File with FCB) or Function 3EH
        (Close File) to update directory information correctly.

    ■  Function 0DH should be part of Control-C interrupt-handling
        routines so that the system is left in a known state when an
        application is terminated.

    ■  Disk Reset calls can be issued after particularly important disk
        write calls, such as transactions in an accounting application.
        Repeated use of this function, however, degrades system performance
        by defeating the MS-DOS buffering scheme.

Related Functions

    10H (Close File with FCB)
    3EH (Close File)

Example

        ;************************************************************;
        ;                                                            ;
        ;                   Function 0DH: Disk Reset                 ;
        ;                                                            ;
        ;                   int reset_disk()                         ;
        ;                                                            ;
        ;                   Returns 0.                               ;
        ;                                                            ;
        ;************************************************************;

cProc   reset_disk,PUBLIC
cBegin
        mov     ah,0dh          ; Set function code.
        int     21h             ; Ask MS-DOS to write all dirty file
                                ; buffers to the disk.
        xor     ax,ax           ; Return 0.
cEnd



Interrupt 21H (33) Function 0EH (14)
Select Disk
1.0 and later


    Function 0EH sets the default disk drive to the drive specified in the
    DL register. The default is the disk drive MS-DOS chooses for file
    access when a filename is specified without a drive designator. A
    successful call to this function returns the number of logical (not
    physical) drives in the system.

To Call

    AH   = 0EH
    DL   = drive number (0 = drive A, 1 = drive B, 2 = drive C, and
            so on)

Returns

    AL   = number of logical drives in the system

Programmer's Notes

    ■  The value used as a drive number is the ASCII value of the
        uppercase drive letter minus the ASCII value of the uppercase
        letter A (41H); thus, 0 = drive A, 1 = drive B, and so on.

    ■  A logical drive is defined as any block-oriented device; this
        category includes floppy-disk drives, RAMdisks, tape devices, fixed
        disks (which can be partitioned into more than one logical drive),
        and network drives.

    ■  The maximum numbers of drive designators available for each MS-DOS
        version are as follows:

╓┌─────────────────────────┌─────────────────────────┌───────────────────────╖
        MS-DOS Version    Number of Designators     Values
        ──────────────────────────────────────────────────────────────────
        1.x               16                        0 through 0FH
        2.x               63                        0 through 3FH
        3.x               26                        0 through 19H

        Drive letters should be limited to A through P (0 through 0FH) to
        ensure that an application runs on all versions of MS-DOS.

    ■  With versions of MS-DOS earlier than 3.0 running on IBM PCs and
        compatibles with one floppy-disk drive, Function 0EH returns 02H as
        the drive count, because the single physical drive is equivalent to
        the two logical drives A and B. MS-DOS versions 3.0 and later
        return a minimum value of 05H in AL.

    ■  On IBM PCs and compatibles, the number of physical floppy-disk
        drives in a system can be obtained from the ROM BIOS with Interrupt
        11H (Equipment Determination).

Related Function

    19H (Get Current Disk)

Example

        ;************************************************************;
        ;                                                            ;
        ;     Function 0EH: Select Disk                              ;
        ;                                                            ;
        ;     int select_drive(drive_ltr)                            ;
        ;         char drive_ltr;                                    ;
        ;                                                            ;
        ;     Returns number of logical drives present in system.    ;
        ;                                                            ;
        ;************************************************************;

cProc   select_drive,PUBLIC
parmB   drive_ltr
cBegin
        mov     dl,drive_ltr    ; Get new drive letter.
        and     dl,not 20h      ; Make sure letter is uppercase.
        sub     dl,'A'          ; Convert drive letter to number,
                                ; 'A' = 0, 'B' = 1, etc.
        mov     ah,0eh          ; Set function code.
        int     21h             ; Ask MS-DOS to set default drive.
        cbw                     ; Clear high byte of return value.
cEnd



Interrupt 21H (33) Function 0FH (15)
Open File with FCB
1.0 and later


    Function 0FH opens the file named in the file control block (FCB)
    pointed to by DS:DX.

To Call

    AH      = 0FH
    DS:DX   = segment:offset of an unopened FCB

Returns

    If function is successful:

    AL      = 00H

    If function is not successful:

    AL      = FFH

Programmer's Notes

    ■  MS-DOS provides several types of file services: FCB file services,
        which are relatively compatible with the CP/M methods of file
        handling; extended FCB file services, which take advantage of both
        CP/M compatibility and MS-DOS extensions; and handle, or "stream-
        oriented," file services, which are more compatible with UNIX/XENIX
        and support pathnames (MS-DOS versions 2.0 and later).

    ■  Function 0FH does not support pathnames and so is capable of
        opening files only in the current directory of the specified
        drive.

    ■  Function 0FH does not create a new file if the specified file does
        not already exist. Function 16H (Create File with FCB) is used to
        create new files with FCBs.

    ■  Function 0FH must use an unopened FCB--that is, one in which all
        but the drive-designator, filename, and extension fields are zero.
        If the call is successful, the function fills in the file size and
        date fields from the file's directory entry. In MS-DOS versions 2.0
        and later, the function also fills in the time field.

    ■  If the file is opened on the default drive (the drive number in the
        FCB is set to 0), MS-DOS fills in the actual drive code. Thus, at
        some later point in processing, the default drive can be changed
        and MS-DOS will still have the drive number in the FCB for use in
        accessing the file. It will therefore continue to use the correct
        drive.

    ■  If Function 0FH is successful, MS-DOS sets the current-block field
        to 0; that is, the file pointer is at the beginning of the file. It
        also sets the record size to 128 bytes (the system default).

    ■  If a record size other than 128 is needed, the record size field of
        the FCB should be changed after the file is successfully opened and
        before attempting any I/O.

    ■  In a network running under MS-DOS version 3.1 or later, files are
        opened by Function 0FH with the share code set to compatibility
        mode and the access code set to read/write.

    ■  If Function 0FH returns an error code (0FFH) in the AL register,
        the attempt to open the file was not successful. Possible causes
        for the failure are

        - File was not found.

        - File has the hidden or system attribute and a properly formatted
        extended FCB was not used.

        - Filename was improperly specified in the FCB.

        - SHARE is loaded and the file is already open by another process
        in a mode other than compatibility mode.

    ■  With MS-DOS versions 3.0 and later, Function 59H (Get Extended
        Error Information) can be used to determine why the attempt to open
        the file failed.

    ■  MS-DOS passes the first two command-tail parameters into default
        FCBs located at offsets 5CH and 6CH in the program segment prefix
        (PSP). Many applications designed to run as .COM files take
        advantage of one or both of these default FCBs.

    ■  With MS-DOS versions 2.0 and later, Function 3DH (Open File with
        Handle) should be used in preference to Function 0FH.

Related Functions

    10H (Close File with FCB)
    16H (Create File with FCB)
    3CH (Create File with Handle)
    3DH (Open File with Handle)
    3EH (Close File)
    59H (Get Extended Error Information)
    5AH (Create Temporary File)
    5BH (Create New File)

Example

        ;************************************************************;
        ;                                                            ;
        ;        Function 0FH: Open File, FCB-based                  ;
        ;                                                            ;
        ;        int FCB_open(uXFCB,recsize)                         ;
        ;            char *uXFCB;                                    ;
        ;            int recsize;                                    ;
        ;                                                            ;
        ;        Returns 0 if file opened OK, otherwise returns -1.  ;
        ;                                                            ;
        ;        Note: uXFCB must have the drive and filename        ;
        ;        fields (bytes 07H through 12H) and the extension    ;
        ;        flag (byte 00H) set before the call to FCB_open     ;
        ;        (see Function 29H).                                 ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_open,PUBLIC,ds
parmDP  puXFCB
parmW   recsize
cBegin
        loadDP  ds,dx,puXFCB    ; Pointer to unopened extended FCB.
        mov     ah,0fh          ; Ask MS-DOS to open an existing file.
        int     21h
        add     dx,7            ; Advance pointer to start of regular
                                ; FCB.
        mov     bx,dx           ; BX = FCB pointer.
        mov     dx,recsize      ; Get record size parameter.
        mov     [bx+0eh],dx     ; Store record size in FCB.
        xor     dx,dx
        mov     [bx+20h],dl     ; Set current-record
        mov     [bx+21h],dx     ; and relative-record
        mov     [bx+23h],dx     ; fields to 0.
        cbw                     ; Set return value to 0 or -1.
cEnd



Interrupt 21H (33) Function 10H (16)
Close File with FCB
1.0 and later


    Function 10H flushes file-related information to disk, closes the file
    named in the file control block (FCB) pointed to by DS:DX, and updates
    the file's directory entry.

To Call

    AH      = 10H
    DS:DX   = segment:offset of previously opened FCB

Returns

    If function is successful:

    AL      = 00H

    If function is not successful:

    AL      = FFH

Programmer's Notes

    ■  A successful call to Function 10H flushes to disk all MS-DOS
        internal buffers associated with the file and updates the directory
        entry and file allocation table (FAT). The function thus ensures
        that correct information is contained in the copy of the file on
        disk.

    ■  Because MS-DOS versions 1.x and 2.x do not always detect a disk
        change, an error can occur if the user changes disks between the
        time the file is opened and the time it is closed. In the worst
        case, the FAT and the directory of the newly inserted disk may be
        damaged.

    ■  With MS-DOS versions 2.0 and later, Function 3EH (Close File)
        should be used in preference to Function 10H.

Related Functions

    0FH (Open File with FCB)
    3EH (Close File)

Example

        ;************************************************************;
        ;                                                            ;
        ;           Function 10H: Close file, FCB-based              ;
        ;                                                            ;
        ;           int FCB_close(oXFCB)                             ;
        ;               char *oXFCB;                                 ;
        ;                                                            ;
        ;           Returns 0 if file closed OK, otherwise           ;
        ;           returns -1.                                      ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_close,PUBLIC,ds
parmDP  poXFCB
cBegin
        loadDP  ds,dx,poXFCB    ; Pointer to opened extended FCB.
        mov     ah,10h          ; Ask MS-DOS to close file.
        int     21h
        cbw                     ; Set return value to 0 or -1.
cEnd



Interrupt 21H (33) Function 11H (17)
Find First File
1.0 and later


    Function 11H searches the current directory for the first file that
    matches a specified name and extension.

To Call

    AH      = 11H
    DS:DX   = segment:offset of unopened file control block (FCB)

Returns

    If function is successful:

    AL      = 00H

    Disk transfer area (DTA) contains unopened FCB of same type (normal or
    extended) as search FCB.

    If function is not successful:

    AL      = FFH

Programmer's Notes

    ■  If necessary, Function 1AH (Set DTA Address) should be used before
        Function 11H is called, to set the location of the DTA in which the
        results of the search will be placed.

    ■  With MS-DOS versions 1.0 and later, the wildcard character ? is
        allowed in the filename. With MS-DOS versions 3.0 and later, both
        wildcard characters (? and *) are allowed in filenames. Pathnames
        are not supported.

    ■  With MS-DOS versions 2.0 and later, the attribute field of an
        extended FCB can be used to search for files with the hidden,
        system, subdirectory, or volume-label attributes. In such a search,
        specifying either the normal (00H) or volume-label (08H) attribute
        restricts MS-DOS to files with the given attribute. Specifying any
        combination of the hidden (02H), system (04H), and subdirectory
        (10H) attributes, however, causes MS-DOS to search both for normal
        files and for those that match the specified attributes.

    ■  For a normal FCB, Function 11H places the drive number in the first
        byte of the DTA and fills the succeeding 32 bytes with the
        directory entry.

        For an extended FCB, Function 11H fills in the first 7 bytes of the
        DTA as follows: the first byte contains 0FFH, indicating an
        extended FCB; the second through sixth bytes contain 00H, as
        required by MS-DOS; the seventh byte contains the value of the
        attribute byte in the search FCB. The next 33 bytes contain the
        drive number and directory information, as for a normal FCB.

    ■  As with other FCB functions, the number 0 can be used to indicate
        the default drive. MS-DOS fills in the actual drive number and
        continues to use that drive for calls to Function 12H (Find Next
        File) that use the same FCB, regardless of any subsequent selection
        of a different default drive.

    ■  The FCB with the initial file specifications must remain unmodified
        if Function 12H is used to continue the search.

    ■  Error reporting in Function 11H is incomplete. An error return
        (0FFH in the AL register) does not always mean that the file does
        not exist. Other possibilities include

        - Filename in the FCB was improperly specified.

        - If an extended FCB was used, no files match the attributes
        given.

        With MS-DOS versions 3.0 and later, Function 59H (Get Extended
        Error Information) can be used to obtain additional information
        about the error.

    ■  With MS-DOS versions 2.0 and later, Functions 4EH (Find First File)
        and 4FH (Find Next File) should be used in preference to Functions
        11H and 12H.

Related Functions

    12H (Find Next File)
    1AH (Set DTA Address)
    4EH (Find First File)
    4FH (Find Next File)

Example

        ;************************************************************;
        ;                                                            ;
        ;       Function 11H: Find First File, FCB-based             ;
        ;                                                            ;
        ;       int FCB_first(puXFCB,attrib)                         ;
        ;           char *puXFCB;                                    ;
        ;           char  attrib;                                    ;
        ;                                                            ;
        ;       Returns 0 if match found, otherwise returns -1.      ;
        ;                                                            ;
        ;       Note: The FCB must have the drive and                ;
        ;       filename fields (bytes 07H through 12H) and          ;
        ;       the extension flag (byte 00H) set before             ;
        ;       the call to FCB_first (see Function 29H).            ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_first,PUBLIC,ds
parmDP  puXFCB
parmB   attrib
cBegin
        loadDP  ds,dx,puXFCB    ; Pointer to unopened extended FCB.
        mov     bx,dx           ; BX points at FCB, too.
        mov     al,attrib       ; Get search attribute.
        mov     [bx+6],al       ; Put attribute into extended FCB
                                ; area.
        mov     byte ptr [bx],0ffh ; Set flag for extended FCB.
        mov     ah,11h          ; Ask MS-DOS to find 1st matching
                                ; file in current directory.
        int     21h             ; If match found, directory entry can
                                ; be found at DTA address.
        cbw                     ; Set return value to 0 or -1.
cEnd



Interrupt 21H (33) Function 12H (18)
Find Next File
1.0 and later


    Function 12H searches the current directory for the next file that
    matches a specified filename and extension. The function assumes a
    previous successful call to Function 11H (Find First File) with the
    same file control block (FCB).

To Call

    AH      = 12H
    DS:DX   = segment:offset of search FCB

Returns

    If function is successful:

    AL      = 00H

    Disk transfer area (DTA) contains unopened FCB of same type (normal or
    extended) as search FCB.

    If function is not successful:

    AL      = FFH

Programmer's Notes

    ■  Function 12H assumes that a successful call to Function 11H (Find
        First File) has been completed with the same FCB. The FCB specifies
        the search pattern. This function also assumes that the wildcard
        character ? appears at least once in the filename or extension
        specified.

    ■  An error (indicated by 0FFH returned in register AL) does not
        necessarily mean that a file matching the file specification does
        not exist in the current directory. MS-DOS relies on certain
        information that appears in the search FCB initialized by Function
        11H, so it is important not to alter that FCB either between calls
        to Functions 11H and 12H or between subsequent calls to Function
        12H.

    ■  If drive code 0 (the default drive) was used in the call to
        Function 11H, MS-DOS has already filled in the actual drive number
        for the current directory. MS-DOS continues to use that drive for
        all calls to Function 12H that use the same FCB, regardless of the
        default drive in effect at the time of the call.

    ■  With MS-DOS versions 2.0 and later, Functions 4EH (Find First File)
        and 4FH (Find Next File) should be used in preference to Functions
        11H and 12H.

Related Functions

    11H (Find First File)
    1AH (Set DTA Address)
    4EH (Find First File)
    4FH (Find Next File)

Example

        ;************************************************************;
        ;                                                            ;
        ;       Function 12H: Find Next File, FCB-based              ;
        ;                                                            ;
        ;       int FCB_next(puXFCB)                                 ;
        ;           char *puXFCB;                                    ;
        ;                                                            ;
        ;       Returns 0 if match found, otherwise returns -1.      ;
        ;                                                            ;
        ;       Note: The FCB must have the drive and                ;
        ;       filename fields (bytes 07H through 12H) and          ;
        ;       the extension flag (byte 00H) set before             ;
        ;       the call to FCB_next (see Function 29H).             ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_next,PUBLIC,ds
parmDP  puXFCB
cBegin
        loadDP  ds,dx,puXFCB    ; Pointer to unopened extended FCB.
        mov     ah,12h          ; Ask MS-DOS to find next matching
                                ; file in current directory.
        int     21h             ; If match found, directory entry can
                                ; be found at DTA address.
        cbw                     ; Set return value to 0 or -1.
cEnd



Interrupt 21H (33) Function 13H (19)
Delete File
1.0 and later


    Function 13H deletes all files matching a specified name and extension
    from the current directory.

To Call

    AH      = 13H
    DS:DX   = segment:offset of an unopened file control block (FCB)

Returns

    If function is successful:

    AL      = 00H

    If function is not successful:

    AL      = FFH

Programmer's Notes

    ■  The wildcard character ? can be used to match any character or
        sequence of characters in specifying the filename and extension.

    ■  Open files must not be deleted.

    ■  Function 13H does not support pathnames.

    ■  An error (indicated by 0FFH returned in register AL) does not
        necessarily mean that the filename specified does not exist in the
        current directory. Other possible causes for an error include

        - Filename in the FCB is improperly specified.

        - File is a read-only, hidden, or system file and an extended FCB
        with the appropriate attribute byte was not used.

        - Program attempted to delete a volume label and the label does not
        exist or a properly formatted extended FCB was not used.

        - In networking environments, file is locked or access rights are
        insufficient for deletion.

    ■  MS-DOS removes file allocation table (FAT) mapping for the file or
        files deleted by this function and flushes the FAT to disk to
        ensure that the disk contains a correct table. The first character
        of the filename in the directory entry is replaced by the value
        0E5H, indicating a deleted file.

    ■  Because the function does not physically erase data, use of
        Function 13H alone is not sufficient in security-critical
        applications that strictly prohibit viewing the data.

    ■  On networks running under MS-DOS versions 3.1 and later, the user
        must have Create access rights to the directory containing the file
        to be deleted.

    ■  Because Function 13H deletes all files matching a given file
        specification, a conservative approach is to use a combination of
        Functions 11H (Find First File) and 12H (Find Next File) to build a
        list of files matching the file specification and then obtain
        confirmation from the user before deleting the files in the list.

    ■  With MS-DOS versions 2.0 and later, Function 41H (Delete File)
        should be used in preference to Function 13H.

Related Function

    41H (Delete File)

Example

        ;************************************************************;
        ;                                                            ;
        ;       Function 13H: Delete File(s), FCB-based              ;
        ;                                                            ;
        ;       int FCB_delete(uXFCB)                                ;
        ;           char *uXFCB;                                     ;
        ;                                                            ;
        ;       Returns 0 if file(s) were deleted OK, otherwise       ;
        ;       returns -1.                                          ;
        ;                                                            ;
        ;       Note: uXFCB must have the drive and                  ;
        ;       filename fields (bytes 07H through 12H) and          ;
        ;       the extension flag (byte 00H) set before             ;
        ;       the call to FCB_delete (see Function 29H).           ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_delete,PUBLIC,ds
parmDP  puXFCB
cBegin
        loadDP  ds,dx,puXFCB    ; Pointer to unopened extended FCB.
        mov     ah,13h          ; Ask MS-DOS to delete file(s).
        int     21h
        cbw                     ; Return value of 0 or -1.
cEnd



Interrupt 21H (33) Function 14H (20)
Sequential Read
1.0 and later


    Function 14H reads the next sequential block of data from a file and
    places the data in the current disk transfer area (DTA).

To Call

    AH      = 14H
    DS:DX   = segment:offset of a previously opened file control
            block (FCB)

Returns

    AL      = 00H       read successful
            = 01H       end of file encountered; no data in record
            = 02H       DTA too small (segment wrap error); read
                        canceled
            = 03H       end of file; partial record read

    If AL = 00H or 03H:

    DTA contains data read from file.

Programmer's Notes

    ■  If necessary, Function 1AH (Set DTA Address) should be used to set
        the base address of the DTA before Function 14H is called. The
        default DTA is 128 bytes and is located at offset 80H of the
        program segment prefix (PSP). If record sizes larger than 128 bytes
        will be used, the program must change the DTA address to point to a
        buffer of adequate size.

    ■  The read process begins at the current position in the file. When
        the read is complete, Function 14H increments the current-block and
        current-record fields of the FCB.

    ■  The size of the record loaded into the DTA is specified in the
        record size field of the FCB. The default is 128 bytes, set by
        Function 0FH (Open File with FCB) or Function 16H (Create File with
        FCB). If the record size is not 128 bytes, the application must set
        the record size correctly before issuing any reads.

    ■  Function 0FH does not fill in the current-record field of the FCB
        when opening a file, so this field must be explicitly set (usually
        to zero) before the first call to Function 14H. The record pointer,
        which includes the current-block and current-record fields of the
        FCB, is incremented when Function 14H is successfully
        completed.

    ■  Function 14H deals with fixed-length records only. Buffering logic
        must be added to an application if variable-length records are to
        be manipulated.

    ■  The block of data to be read can be chosen by changing the current-
        block and current-record fields of the FCB.

    ■  Partial records read at the end of a file are padded with zeros to
        the requested record length.

    ■  On networks running under MS-DOS version 3.1 or later, the user
        must have Read access rights to the directory containing the file
        to be read.

    ■  With MS-DOS versions 2.0 and later, Function 3FH (Read File or
        Device) should be used in preference to Function 14H.

Related Functions

    15H (Sequential Write)
    1AH (Set DTA Address)
    21H (Random Read)
    27H (Random Block Read)
    3FH (Read File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;           Function 14H: Sequential Read, FCB-based         ;
        ;                                                            ;
        ;           int FCB_sread(oXFCB)                             ;
        ;               char *oXFCB;                                 ;
        ;                                                            ;
        ;           Returns 0 if record read OK, otherwise           ;
        ;           returns error code 1, 2, or 3.                   ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_sread,PUBLIC,ds
parmDP  poXFCB
cBegin
        loadDP  ds,dx,poXFCB    ; Pointer to opened extended FCB.
        mov     ah,14h          ; Ask MS-DOS to read next record,
                                ; placing it at DTA.
        int     21h
        cbw                     ; Clear high byte for return value.
cEnd



Interrupt 21H (33) Function 15H (21)
Sequential Write
1.0 and later


    Function 15H writes the next sequential block of data from the disk
    transfer area (DTA) to a specified file.

To Call

    AH      = 15H
    DS:DX   = segment:offset of a previously opened file control block
            (FCB)

    DTA contains data to write.

Returns

    AL      = 00H       block written successfully
            = 01H       disk full; write canceled
            = 02H       DTA too small (segment wrap error); write
                        canceled

Programmer's Notes

    ■  If necessary, the calling process should set the DTA address with
        Function 1AH (Set DTA Address) to point to the data to be written
        before issuing a call to Function 15H. The default address of the
        DTA is offset 80H in the program segment prefix (PSP).

    ■  The FCB must already have been filled in by a call to Function 0FH
        (Open File with FCB) before Function 15H is called.

    ■  The location of the block to be written is given by the current-
        block and current-record fields of the FCB. If the write is
        successful, Function 15H increments the current-block and current-
        record fields.

    ■  The size of the record written by Function 15H is determined by the
        value in the record size field of the FCB. The default value is
        128, set by Function 0FH (Open File with FCB) or Function 16H
        (Create File with FCB). A process must set the record size in the
        FCB correctly before issuing any writes.

    ■  Function 15H deals with fixed-length records only. Buffering logic
        must be added to an application if variable-length records are to
        be manipulated.

    ■  Function 15H performs a logical, but not necessarily physical,
        write operation. If less than one sector is being written, MS-DOS
        moves the record from the DTA to an appropriate MS-DOS internal
        buffer. When a full sector of data has been buffered, MS-DOS
        flushes the buffer to disk.  Function 0DH (Disk Reset) or Function
        10H (Close File with FCB) can be used to flush data to disk before
        a full sector is buffered.

    ■  On networks running under MS-DOS versions 3.1 and later, the user
        must have Write access to the directory containing the file to be
        written to.

    ■  With MS-DOS versions 2.0 and later, Function 40H (Write File or
        Device) should be used in preference to Function 15H.

Related Functions

    14H (Sequential Read)
    1AH (Set DTA Address)
    22H (Random Write)
    28H (Random Block Write)
    40H (Write File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;          Function 15H: Sequential Write, FCB-based         ;
        ;                                                            ;
        ;          int FCB_swrite(oXFCB)                             ;
        ;              char *oXFCB;                                  ;
        ;                                                            ;
        ;          Returns 0 if record read OK, otherwise            ;
        ;          returns error code 1 or 2.                        ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_swrite,PUBLIC,ds
parmDP  poXFCB
cBegin
        loadDP  ds,dx,poXFCB    ; Pointer to opened extended FCB.
        mov     ah,15h          ; Ask MS-DOS to write next record
                                ; from DTA to disk file.
        int     21h
        cbw                     ; Clear high byte for return value.
cEnd



Interrupt 21H (33) Function 16H (22)
Create File with FCB
1.0 and later


    Function 16H creates a directory entry in the current directory for a
    specified file and opens the file for use. If the file already exists,
    it is opened and truncated to zero length.

To Call

    AH      = 16H
    DS:DX   = segment:offset of an unopened file control block (FCB)

Returns

    If function is successful:

    AL      = 00H

    If function is not successful:

    AL      = FFH

Programmer's Notes

    ■  Before creating a new directory entry for the specified file,
        Function 16H searches the current directory for a matching
        filename. If a match is found, the existing file is opened, but its
        length is set to 0. In effect, this action erases an existing file
        and replaces it with a new, empty file of the same name.

        If a matching filename is not found and the directory has room for
        a new entry, the file is created and opened, and its length is set
        to 0.

    ■  An extended file control block (FCB) can be used to create a file
        with a special attribute, such as hidden. Before the Create File
        call is issued, the attribute byte must be set appropriately.

    ■  A value of 0FFH returned in the AL register can indicate one of
        several errors:

        - Filename was improperly specified in the FCB.

        - File with the same name exists but is a read-only, hidden,
        system, or (in MS-DOS versions 3.x and networks) locked
        file.

        - Disk is full.

        - Current working directory is the root directory, and it is
        full.

        - User does not have the appropriate access rights to create a file
        in this directory (in MS-DOS versions 3.x and networks).

        With MS-DOS versions 3.0 and later, Function 59H (Get Extended
        Error Information) can be used to obtain additional information
        about an error.

    ■  Upon successful completion of Function 16H, MS-DOS has

        - Created and opened the file specified in the FCB.

        - Filled in the date and time fields of the FCB with the current
        date and time.

        - Set file size to zero.

        All other changes made to the FCB are similar to those made by
        Function 0FH (Open File with FCB).

    ■  Pathnames and wildcard characters (? and *) are not supported by
        Function 16H.

    ■  With MS-DOS versions 2.0 and later, Function 16H has been
        superseded by Functions 3CH (Create File with Handle), 5AH (Create
        Temporary File), and 5BH (Create New File).

Related Functions

    0FH (Open File with FCB)
    3CH (Create File with Handle)
    3DH (Open File with Handle)
    5AH (Create Temporary File)
    5BH (Create New File)

Example

        ;************************************************************;
        ;                                                            ;
        ;         Function 16H: Create File, FCB-based               ;
        ;                                                            ;
        ;         int FCB_create(uXFCB,recsize)                      ;
        ;             char *uXFCB;                                   ;
        ;             int recsize;                                   ;
        ;                                                            ;
        ;         Returns 0 if file created OK, otherwise            ;
        ;         returns -1.                                        ;
        ;                                                            ;
        ;         Note: uXFCB must have the drive and filename       ;
        ;         fields (bytes 07H through 12H) and the             ;
        ;         extension flag (byte 00H) set before the           ;
        ;         call to FCB_create (see Function 29H).             ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_create,PUBLIC,ds
parmDP  puXFCB
parmW   recsize
cBegin
        loadDP  ds,dx,puXFCB    ; Pointer to unopened extended FCB.
        mov     ah,16h          ; Ask MS-DOS to create file.
        int     21h
        add     dx,7            ; Advance pointer to start of regular
                                ; FCB.
        mov     bx,dx           ; BX = FCB pointer.
        mov     dx,recsize      ; Get record size parameter.
        mov     [bx+0eh],dx     ; Store record size in FCB.
        xor     dx,dx
        mov     [bx+20h],dl     ; Set current-record
        mov     [bx+21h],dx     ; and relative-record
        mov     [bx+23h],dx     ; fields to 0.
        cbw                     ; Set return value to 0 or -1.
cEnd



Interrupt 21H (33) Function 17H (23)
Rename File
1.0 and later


    Function 17H renames one or more files in the current directory.

To Call

    AH      = 17H
    DS:DX   = segment:offset of modified file control block (FCB)
            in the following nonstandard format:

╓┌─────────────────────────────┌─────────────────────────────────────────────╖
            Byte(s)        Contents
            ───────────────────────────────────────────────────────────
            00H            Drive number
            01-08H         Old filename (padded with blanks, if
                            necessary)
            09-0BH         Old file extension (padded with blanks, if
                            necessary)
            0CH-10H        Zeroed out
            11H-18H        New filename (padded with blanks, if
                            necessary)
            19H-1BH        New file extension (padded with blanks, if
                            necessary)
            11CH-24H       Zeroed out

Returns

    If function is successful:

    AL      = 00H

    If function is not successful:

    AL      = FFH

Programmer's Notes

    ■  The wildcard character ? can be used in specifying both the old and
        the new filenames, but its meaning differs in each case. A wildcard
        character in the old filename matches any single character or
        sequence of characters in the directory entry. A wildcard character
        in the new filename, however, indicates that the corresponding
        character or characters in the original filename are not to change.

    ■  With MS-DOS versions 2.0 and later, Function 17H views subdirectory
        entries as files. These subdirectory entries can be renamed using
        this function and an extended FCB with the appropriate attribute
        byte.

    ■  A value of 0FFH returned in the AL register can indicate one of
        several errors:

        - Old filename is improperly specified in the FCB.

        - File with the new filename already exists in the current
        directory.

        - Old file is a read-only file.

        - With MS-DOS versions 3.1 and later in a networking environment,
        the user has insufficient access rights to the directory.

        With MS-DOS versions 3.0 and later, Function 59H (Get Extended
        Error Information) can be used to obtain additional information
        about the cause of an error.

    ■  With MS-DOS versions 2.0 and later, Function 56H (Rename File)
        should be used in preference to Function 17H.

Related Function

    56H (Rename File)

Example

        ;************************************************************;
        ;                                                            ;
        ;         Function 17H: Rename File(s), FCB-based            ;
        ;                                                            ;
        ;         int FCB_rename(uXFCBold,uXFCBnew)                  ;
        ;             char *uXFCBold,*uXFCBnew;                      ;
        ;                                                            ;
        ;         Returns 0 if file(s) renamed OK, otherwise         ;
        ;         returns -1.                                        ;
        ;                                                            ;
        ;         Note: Both uXFCB's must have the drive and         ;
        ;         filename fields (bytes 07H through 12H) and        ;
        ;         the extension flag (byte 00H) set before           ;
        ;         the call to FCB_rename (see Function 29H).         ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_rename,PUBLIC,<ds,si,di>
parmDP  puXFCBold
parmDP  puXFCBnew
cBegin
        loadDP  es,di,puXFCBold ; ES:DI = Pointer to uXFCBold.
        mov     dx,di           ; Save offset in DX.
        add     di,7            ; Advance pointer to start of regular
                                ; FCBold.
        loadDP  ds,si,puXFCBnew ; DS:SI = Pointer to uXFCBnew.
        add     si,8            ; Advance pointer to filename field
                                ; FCBnew.
                                ; Copy name from FCBnew into FCBold
                                ; at offset 11H:
        add     di,11h          ; DI points 11H bytes into old FCB.
        mov     cx,0bh          ; Copy 0BH bytes, moving new
        rep     movsb           ; name into old FCB.
        push    es              ; Set DS to segment of FCBold.
        pop     ds
        mov     ah,17h          ; Ask MS-DOS to rename old
        int     21h             ; file(s) to new name(s).
        cbw                     ; Set return flag to 0 or -1.
cEnd



Interrupt 21H (33) Function 19H (25)
Get Current Disk
1.0 and later


    Function 19H returns the code for the current disk drive.

To Call

    AH   = 19H

Returns

    AL   = drive code (0 = drive A, 1 = drive B, 2 = drive C, and
            so on)

Programmer's Note

    ■  The drive code returned by Function 19H is zero-based, meaning that
        drive A = 0, drive B = 1, and so on. This value is unlike the drive
        code used in file control blocks (FCBs) and in some other MS-DOS
        functions, such as 1CH (Get Drive Data) and 36H (Get Disk Free
        Space), in which 0 indicates the default rather than the current
        drive.

Related Function

    0EH (Select Disk)

Example

        ;************************************************************;
        ;                                                            ;
        ;           Function 19H: Get Current Disk                   ;
        ;                                                            ;
        ;           int cur_drive()                                  ;
        ;                                                            ;
        ;           Returns letter of current "logged" disk.         ;
        ;                                                            ;
        ;************************************************************;

cProc   cur_drive,PUBLIC
cBegin
        mov     ah,19h          ; Set function code.
        int     21h             ; Get number of logged disk.
        add     al,'A'          ; Convert number to letter.
        cbw                     ; Clear the high byte of return value.
cEnd



Interrupt 21H (33) Function 1AH (26)
Set DTA Address
1.0 and later


    Function 1AH specifies the location of the disk transfer area (DTA) to
    be used for file control block (FCB) disk I/O operations.

To Call

    AH      = 1AH
    DS:DX   = segment:offset of DTA

Returns

    Nothing

Programmer's Notes

    ■  If an application does not specify a disk transfer area, MS-DOS
        uses a default buffer at offset 80H in the program segment prefix
        (PSP).

    ■  The DTA specified must be large enough to accommodate the amount of
        data to be transferred in a single block. The default record size
        for FCB file operations is 128 bytes; this value can be changed
        after a file is successfully opened or created by altering the
        record size field in the FCB. If the DTA is too small for the
        record size used by the program, other code or data may be damaged.

    ■  The location of the DTA must be far enough from the top of the
        segment that contains it to avoid errors caused by segment wrap
        (data wrapping from the end of the segment to the beginning), which
        will cause the disk transfer to be terminated. Thus, for example,
        if records of 128 bytes are to be read, the highest location
        acceptable for the DTA is DS:FF80H.

    ■  The DTA is used by all FCB-based read and write functions. In
        addition, any application using the following functions must also
        set up a DTA for use as a scratch area in directory searches:

        - 11H (Find First File)

        - 12H (Find Next File)

        - 4EH (Find First File)

        - 4FH (Find Next File)

Related Function

    2FH (Get DTA Address)

Example

        ;************************************************************;
        ;                                                            ;
        ;                Function 1AH: Set DTA Address               ;
        ;                                                            ;
        ;                int set_DTA(pDTAbuffer)                     ;
        ;                    char far *pDTAbuffer;                   ;
        ;                                                            ;
        ;                Returns 0.                                  ;
        ;                                                            ;
        ;************************************************************;

cProc   set_DTA,PUBLIC,ds
parmD   pDTAbuffer
cBegin
        lds     dx,pDTAbuffer   ; DS:DX = pointer to buffer.
        mov     ah,1ah          ; Set function code.
        int     21h             ; Ask MS-DOS to change DTA address.
        xor     ax,ax           ; Return 0.
cEnd



Interrupt 21H (33) Function 1BH (27)
Get Default Drive Data
1.0 and later


    Function 1BH returns information about the disk in the default
    drive.

To Call

    AH      = 1BH

Returns

    If function is successful:

    AL      = number of sectors per cluster (allocation unit)
    CX      = number of bytes per sector
    DX      = number of clusters
    DS:BX   = segment:offset of the file allocation table (FAT)
            identification byte

    If function is not successful:

    AL      = FFH

Programmer's Notes

    ■  If Function 1BH returns 0FFH in the AL register, the current drive
        was invalid or a disk error occurred. The most likely causes of the
        latter are

        - Drive door was open.

        - Disk was not ready.

        - Medium was bad.

        - Disk was unformatted.

        If any of these situations arises, MS-DOS issues Interrupt 24H
        (critical error). If Interrupt 24H has not been revectored to a
        critical error handler controlled by the program and the user
        responds Ignore to the MS-DOS Abort, Retry, Ignore? message, the
        error code 0FFH is returned to the program. An application should
        check the AL register for a value of 0FFH before assuming it has
        information on the default drive.

    ■  Possible values of the FAT ID byte (for IBM-compatible media) are
        the following:

╓┌────────────────┌──────────────────────────────────────────────────────────╖
        Value    Medium
        ──────────────────────────────────────────────────────────────────
        0FFH     Double-sided, 8 sectors/track, 40 tracks/side
        0FEH     Single-sided, 8 sectors/track, 40 tracks/side
        0FDH     Double-sided, 9 sectors/track, 40 tracks/side
        0FCH     Single-sided, 9 sectors/track, 40 tracks/side
        0F9H     Double-sided, 15 sectors/track, 40 tracks/side
                or double-sided, 9 sectors/track, 80 tracks/side
        0F8H     Fixed disk
        0F0H     Others

    ■  With MS-DOS versions 1.x, Function 1BH returns a pointer in DS:BX
        for the actual memory image of the FAT. In MS-DOS versions 2.0 and
        later, the function returns a pointer in DS:BX for a copy of the
        FAT identification byte; the contents of memory beyond the
        identification byte are not necessarily the FAT memory image. If
        access to the FAT is necessary, Interrupt 25H (Absolute Disk Read)
        can be used to read it into memory.

    ■  The FAT ID byte is not enough to identify a drive completely in MS-
        DOS versions 2.0 and later. In these versions of MS-DOS, Function
        36H (Get Disk Free Space) should be used in preference to Function
        1BH to avoid the ambiguity caused by the FAT identification
        byte.

    ■  With MS-DOS versions 3.2 and later, additional drive information
        can be obtained by the BIOS parameter block (BPB) obtained with
        Function 44H (IOCTL) Subfunction 0DH (Generic I/O Control for
        Block Devices) minor code 60H (Get Device Parameters).

    ■  With MS-DOS versions 2.0 and later, Function 1CH (Get Drive Data)
        provides the same types of information as Function 1BH, but for a
        disk in a drive other than the default drive.

Related Functions

    1CH (Get Drive Data)
    36H (Get Disk Free Space)
    44H (IOCTL)

Example

    See SYSTEM CALLS: Interrupt 21H: Function 1CH.



Interrupt 21H (33) Function 1CH (28)
Get Drive Data
2.0 and later


    Function 1CH returns information about the disk in a specified
    drive.

To Call

    AH   = 1CH
    DL   = drive code (0 = default drive, 1 = drive A, 2 = drive B,
            3 = drive C, and so on)

Returns

    If function is successful:

    AL      = number of sectors per cluster (allocation unit)
    CX      = number of bytes per sector
    DX      = number of clusters
    DS:BX   = segment:offset of the file allocation table (FAT)
            identification byte

    If function is not successful:

    AL      = FFH

Programmer's Notes

    ■  Function 1CH is not available with MS-DOS versions 1.x.

    ■  If the function returns 0FFH in the AL register, the drive code was
        invalid or a disk error occurred. The most likely causes of the
        latter are:

        - Drive door was open.

        - Disk was not ready.

        - Medium was bad.

        - Disk was unformatted.

        If any of these situations arises, MS-DOS issues Interrupt 24H
        (critical error). If Interrupt 24H has not been revectored to a
        critical error handler controlled by the program and the user
        responds Ignore to the MS-DOS Abort, Retry, Ignore? message, the
        error code 0FFH is returned to the program. An application should
        check the AL register for a value of 0FFH before assuming it has
        information on the specified drive.

    ■  Possible values of the FAT ID byte (for IBM-compatible media) are
        the following:

╓┌────────────────┌──────────────────────────────────────────────────────────╖
        Value    Medium
        ──────────────────────────────────────────────────────────────────
        0FFH     Double-sided, 8 sectors/track, 40 tracks/side
        0FEH     Single-sided, 8 sectors/track, 40 tracks/side
        0FDH     Double-sided, 9 sectors/track, 40 tracks/side
        0FCH     Single-sided, 9 sectors/track, 40 tracks/side
        0F9H     Double-sided, 15 sectors/track, 40 tracks/side or double-
                sided, 9 sectors/track, 80 tracks/side
        0F8H     Fixed disk
        0F0H     Others

    ■  The contents of memory beyond the identification byte pointed to by
        DS:BX are not necessarily the FAT memory image. If access to the
        FAT is necessary, Interrupt 25H (Absolute Disk Read) can be used to
        read it into memory.

    ■  The FAT ID byte is not enough to identify a drive completely. To
        avoid the ambiguity caused by the FAT identification byte, Function
        36H (Get Disk Free Space) should be used in preference to Function
        1CH.

    ■  With MS-DOS versions 3.2 and later, additional drive information
        can be obtained by inspecting the BIOS parameter block (BPB)
        obtained with Function 44H (IOCTL) Subfunction 0DH (Generic I/O
        Control for Block Devices) minor code 60H (Get Device
        Parameters).

Related Functions

    1BH (Get Default Drive Data)
    36H (Get Disk Free Space)
    44H (IOCTL)

Example

        ;************************************************************;
        ;                                                            ;
        ;   Function 1CH: Get Drive Data                             ;
        ;                                                            ;
        ;   Get information about the disk in the specified          ;
        ;   drive.  Set drive_ltr to binary 0 for default drive info.;
        ;                                                            ;
        ;   int get_drive_data(drive_ltr,                            ;
        ;          pbytes_per_sector,                                ;
        ;          psectors_per_cluster,                             ;
        ;          pclusters_per_drive)                              ;
        ;        int  drive_ltr;                                     ;
        ;        int *pbytes_per_sector;                             ;
        ;        int *psectors_per_cluster;                          ;
        ;        int *pclusters_per_drive;                           ;
        ;                                                            ;
        ;   Returns -1 for invalid drive, otherwise returns          ;
        ;   the disk's type (from the 1st byte of the FAT).          ;
        ;                                                            ;
        ;************************************************************;

cProc   get_drive_data,PUBLIC,<ds,si>
parmB   drive_ltr
parmDP  pbytes_per_sector
parmDP  psectors_per_cluster
parmDP  pclusters_per_drive
cBegin
        mov     si,ds           ; Save DS in SI to use later.
        mov     dl,drive_ltr    ; Get drive letter.
        or      dl,dl           ; Leave 0 alone.
        jz      gdd
        and     dl,not 20h      ; Convert letter to uppercase.
        sub     dl,'A'-1        ; Convert to drive number: 'A' = 1,
                                ; 'B' = 2, etc.
gdd:
        mov     ah,1ch          ; Set function code.
        int     21h             ; Ask MS-DOS for data.
        cbw                     ; Extend AL into AH.
        cmp     al,0ffh         ; Bad drive letter?
        je      gddx            ; If so, exit with error code -1.
        mov     bl,[bx]         ; Get FAT ID byte from DS:BX.
        mov     ds,si           ; Get back original DS.
        loadDP  ds,si,pbytes_per_sector
        mov     [si],cx         ; Return bytes per sector.
        loadDP  ds,si,psectors_per_cluster
        mov     ah,0
        mov     [si],ax         ; Return sectors per cluster.
        loadDP  ds,si,pclusters_per_drive
        mov     [si],dx         ; Return clusters per drive.
        mov     al,bl           ; Return FAT ID byte.
gddx:
cEnd



Interrupt 21H (33) Function 21H (33)
Random Read
1.0 and later


    Function 21H reads a selected record from disk into memory.

To Call

    AH      = 21H
    DS:DX   = segment:offset of previously opened file control block (FCB)

Returns

    AL      = 00H  record read successfully
            = 01H  end of file; no record read
            = 02H  DTA too small (segment wrap error); read canceled
            = 03H  end of file; partial record transferred

    If AL = 00H or 03H:

    DTA contains data read from file.

Programmer's Notes

    ■  Function 21H reads the record into the current disk transfer area
        (DTA). Unless the 128-byte default DTA (at offset 80H in the
        program segment prefix) is adequate, Function 1AH (Set DTA Address)
        should be used to set the DTA address before Function 21H is
        called. The program must ensure that the buffer pointed to by the
        DTA address is large enough to hold the records to be
        transferred.

    ■  The relative-record field in the FCB must be set to the record
        number to be read. Numbering begins with record 00H; thus, the
        value 06H in the relative-record field would indicate the seventh
        record, not the sixth.

    ■  Function 21H sets the current-block and current-record fields to
        match the relative-record field before transferring the data to the
        DTA.

    ■  Unlike Function 27H (Random Block Read), Function 21H does not
        increment the current-block, current-record, or relative-record
        fields.

    ■  The record length read is determined by the record size field of
        the FCB.

    ■  If a partial record is read and the end of file is encountered, the
        remainder of the record is filled out to the requested length with
        zero bytes.

    ■  On networks running under MS-DOS version 3.1 or later, the user
        must have Read access rights to the directory containing the file
        to be read.

    ■  With MS-DOS versions 2.0 and later, Function 3FH (Read File or
        Device) should be used in preference to Function 21H.

Related Functions

    14H (Sequential Read)
    1AH (Set DTA Address)
    22H (Random Write)
    24H (Set Relative Record)
    27H (Random Block Read)
    3FH (Read File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;          Function 21H: Random File Read, FCB-based         ;
        ;                                                            ;
        ;          int FCB_rread(oXFCB,recnum)                       ;
        ;              char *oXFCB;                                  ;
        ;              long recnum;                                  ;
        ;                                                            ;
        ;          Returns 0 if record read OK, otherwise            ;
        ;          returns error code 1, 2, or 3.                    ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_rread,PUBLIC,ds
parmDP  poXFCB
parmD   recnum
cBegin
        loadDP  ds,dx,poXFCB    ; Pointer to opened extended FCB.
        mov     bx,dx           ; BX points at FCB, too.
        mov     ax,word ptr (recnum)    ; Get low 16 bits of record
        mov     [bx+28h],ax             ; number and store in FCB.
        mov     ax,word ptr (recnum+2)  ; Get high 16 bits of record
        mov     [bx+2ah],ax             ; number and store in FCB.
        mov     ah,21h          ; Ask MS-DOS to read recnum'th
                                ; record, placing it at DTA.
        int     21h
        cbw                     ; Clear high byte of return value.
cEnd



Interrupt 21H (33) Function 22H (34)
Random Write
1.0 and later


    Function 22H writes data from the current disk transfer area (DTA) to
    a specified record location in a file.

To Call

    AH      = 22H
    DS:DX   = segment:offset of previously opened file control block (FCB)

    DTA contains data to write.

Returns

    AL      = 00H  record written successfully
            = 01H  disk full
            = 02H  DTA too small (segment wrap error); write canceled

Programmer's Notes

    ■  Before calling Function 22H, the program must set the disk transfer
        area (DTA) address appropriately with a call to Function 1AH (Set
        DTA Address), if necessary, and place the data to be written in the
        DTA.

    ■  The relative-record field in the FCB must be set to the record
        number that is to be written. Numbering begins with record 00H;
        thus, the value 06H in the relative-record field would indicate the
        seventh record, not the sixth.

    ■  Function 22H sets the current-block and current-record fields to
        match the relative-record field before writing the data from the
        DTA.

    ■  Unlike Function 28H (Random Block Write), Function 22H does not
        increment the current-block, current-record, or relative-record
        fields.

    ■  The record size field determines the record length written by the
        function.

    ■  If a record is written beyond the current end of file, the data
        between the old end of file and the beginning of the new record is
        uninitialized.

    ■  The file that is written to cannot have the read-only attribute.

    ■  Information is written logically, but not always physically, to
        disk at the time Function 22H is called. The contents of the DTA
        are written immediately to disk only if they constitute a sector's
        worth of information. If less than a sector is written, it is
        transferred from the DTA to an MS-DOS buffer and is not physically
        written to disk until one of the following occurs:

        - A full sector of information is ready.

        - The file is closed.

        - Function 0DH (Disk Reset) is issued.

    ■  On networks running under MS-DOS version 3.1 or later, the user
        must have Write access rights to the directory containing the file
        to be written to.

    ■  With MS-DOS versions 2.0 and later, Function 40H (Write File or
        Device) should be used in preference to Function 22H.

Related Functions

    15H (Sequential Write)
    1AH (Set DTA Address)
    21H (Random Read)
    24H (Set Relative Record)
    28H (Random Block Write)
    40H (Write File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;          Function 22H: Random File Write, FCB-based        ;
        ;                                                            ;
        ;          int FCB_rwrite(oXFCB,recnum)                      ;
        ;              char *oXFCB;                                  ;
        ;              long recnum;                                  ;
        ;                                                            ;
        ;          Returns 0 if record read OK, otherwise            ;
        ;          returns error code 1 or 2.                        ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_rwrite,PUBLIC,ds
parmDP  poXFCB
parmD   recnum
cBegin
        loadDP  ds,dx,poXFCB    ; Pointer to opened extended FCB.
        mov     bx,dx           ; BX points at FCB, too.
        mov     ax,word ptr (recnum)    ; Get low 16 bits of record
        mov     [bx+28h],ax             ; number and store in FCB.
        mov     ax,word ptr (recnum+2)  ; Get high 16 bits of record
        mov     [bx+2ah],ax             ; number and store in FCB.
        mov     ah,22h          ; Ask MS-DOS to write DTA to
        int     21h             ; recnum'th record of file.
        cbw                     ; Clear high byte for return value.
cEnd



Interrupt 21H (33) Function 23H (35)
Get File Size
1.0 and later


    Function 23H searches the current directory for a specified file and
    returns the size of the file in records.

To Call

    AH      = 23H
    DS:DX   = segment:offset of unopened file control block (FCB) with
            record size field set appropriately

Returns

    If function is successful:

    AL      = 00H

    FCB relative-record field contains number of records, rounded upward
    if necessary.

    If function is not successful:

    AL      = FFH

Programmer's Notes

    ■  The record size field in the FCB can be set to 1 to find the number
        of bytes in the file.

    ■  The number of records is the file size divided by the record size.
        If there is a remainder, the record count is rounded upward. The
        result stored in the relative-record field may, therefore, contain
        a value that is 1 larger than the number of complete records in the
        file.

    ■  Because record numbers are zero based and this function returns the
        number of records in a file in the relative-record field of the
        FCB, Function 23H can be used to position the file pointer to the
        end of file.

    ■  With MS-DOS versions 2.0 and later, Function 42H (Move File
        Pointer) should be used in preference to Function 23H.

Related Function

    42H (Move File Pointer)

Example

        ;************************************************************;
        ;                                                            ;
        ;      Function 23H: Get File Size, FCB-based                ;
        ;                                                            ;
        ;      long FCB_nrecs(uXFCB,recsize)                         ;
        ;           char *uXFCB;                                     ;
        ;           int recsize;                                     ;
        ;                                                            ;
        ;      Returns a long -1 if file not found, otherwise        ;
        ;      returns the number of records of size recsize.        ;
        ;                                                            ;
        ;      Note: uXFCB must have the drive and                   ;
        ;      filename fields (bytes 07H through 12H) and           ;
        ;      the extension flag (byte 00H) set before              ;
        ;      the call to FCB_nrecs (see Function 29H).             ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_nrecs,PUBLIC,ds
parmDP  puXFCB
parmW   recsize
cBegin
        loadDP  ds,dx,puXFCB    ; Pointer to unopened extended FCB.
        mov     bx,dx           ; Copy FCB pointer into BX.
        mov     ax,recsize      ; Get record size
        mov     [bx+15h],ax     ; and store it in FCB.
        mov     ah,23h          ; Ask MS-DOS for file size (in
                                ; records).
        int     21h
        cbw                     ; If AL = 0FFH, set AX to -1.
        cwd                     ; Extend to long.
        or      dx,dx           ; Is DX negative?
        js      nr_exit         ; If so, exit with error flag.
        mov     [bx+2bh],al     ; Only low 24 bits of the relative-
                                ; record field are used, so clear the
                                ; top 8 bits.
        mov     ax,[bx+28h]     ; Return file length in DX:AX.
        mov     dx,[bx+2ah]
nr_exit:
cEnd



Interrupt 21H (33) Function 24H (36)
Set Relative Record
1.0 and later


    Function 24H sets the relative-record field of a file control block
    (FCB) to match the file position indicated by the current-block and
    current-record fields of the same FCB.

To Call

    AH      = 24H
    DS:DX   = segment:offset of previously opened FCB

Returns

    AL      = 00H

    Relative-record field is modified in FCB.

Programmer's Notes

    ■  The AL register is always set to 00H by Function 24H. Thus, any
        preexisting information in the AL register is lost.

    ■  Before Function 24H is called, the program must open the FCB with
        Function 0FH (Open File with FCB) or with Function 16H (Create File
        with FCB).

    ■  The entire relative-record field (4 bytes) of the FCB must be
        initialized to zeros before calling Function 24H. If this is not
        done, any value in the high-order byte of the high-order word
        remaining from previous reads or writes might not be overwritten
        and the resulting relative-record number will be invalid.

    ■  Function 24H is normally used in changing from sequential to random
        I/O. Sequential I/O, performed by Functions 14H (Sequential Read)
        and 15H (Sequential Write), sets the current-block and current-
        record fields of the FCB. Random I/O uses the relative-record
        field, which is set by Function 24H to match the current file
        position as recorded in the current-block and current-record
        fields.

        After the file pointer is set, any of the following functions can
        be used to access data at the record pointed to by the relative-
        record field:

        - 21H (Random Read)

        - 22H (Random Write)

        - 27H (Random Block Read)

        - 28H (Random Block Write)

    ■  With MS-DOS versions 2.0 and later, Function 42H (Move File
        Pointer) should be used in preference to Function 24H.

Related Function

    42H (Move File Pointer)

Example

        ;************************************************************;
        ;                                                            ;
        ;              Function 24H: Set Relative Record             ;
        ;                                                            ;
        ;              int FCB_set_rrec(oXFCB)                       ;
        ;                  char *oXFCB;                              ;
        ;                                                            ;
        ;              Returns 0.                                    ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_set_rrec,PUBLIC,ds
parmDP  poXFCB
cBegin
        loadDP  ds,dx,poXFCB    ; Pointer to opened extended FCB.
        mov     bx,dx           ; BX points at FCB, too.
        mov     byte ptr [bx+2bh],0 ; Zero high byte of high word of
                                    ; relative-record field.
        mov     ah,24h          ; Ask MS-DOS to set relative record
                                ; to current record.
        int     21h
        xor     ax,ax           ; Return 0.
cEnd



Interrupt 21H (33) Function 25H (37)
Set Interrupt Vector
1.0 and later


    Function 25H sets an address in the interrupt vector table to point to
    a specified interrupt handler.

To Call

    AH      = 25H
    AL      = interrupt number
    DS:DX   = segment:offset of interrupt handler

Returns

    Nothing

Programmer's Notes

    ■  When Function 25H is called, the 4-byte address in DS:DX is placed
        in the correct position in the interrupt vector table.

    ■  Function 25H is the recommended method for initializing or changing
        an interrupt vector. A vector in the interrupt vector table should
        never be changed directly.

    ■  Before Function 25H is used to change an interrupt vector, the
        address of the current interrupt handler should be read with
        Function 35H (Get Interrupt Vector) and then saved for restoration
        before the program terminates.

Related Function

    35H (Get Interrupt Vector)

Example

        ;************************************************************;
        ;                                                            ;
        ;              Function 25H: Set Interrupt Vector            ;
        ;                                                            ;
        ;              typedef void (far *FCP)();                    ;
        ;              int set_vector(intnum,vector)                 ;
        ;                  int intnum;                               ;
        ;                  FCP vector;                               ;
        ;                                                            ;
        ;              Returns 0.                                    ;
        ;                                                            ;
        ;************************************************************;

cProc   set_vector,PUBLIC,ds
parmB   intnum
parmD   vector
cBegin
        lds     dx,vector       ; Get vector segment:offset into
                                ; DS:DX.
        mov     al,intnum       ; Get interrupt number into AL.
        mov     ah,25h          ; Select "set vector" function.
        int     21h             ; Ask MS-DOS to change vector.
        xor     ax,ax           ; Return 0.
cEnd



Interrupt 21H (33) Function 26H (38)
Create New Program Segment Prefix
1.0 and later


    Function 26H creates a new program segment prefix (PSP) at a specified
    segment address.

To Call

    AH   = 26H
    DX   = segment address of the PSP to create

Returns

    Nothing

Programmer's Notes

    ■  Function 26H copies the current PSP to the address indicated by DX.
        Note that DX contains a segment address, not an absolute
        address.

    ■  After the copy is made, the memory size information located at
        offset 06H in the new PSP is adjusted to match the amount of memory
        available to the new PSP. In addition, the current contents of the
        interrupt vectors for Interrupt 22H (Terminate Routine Address),
        Interrupt 23H (Control-C Handler Address), and Interrupt 24H
        (Critical Error Handler Address) are saved starting at offset 0AH
        of the new PSP.

    ■  A .COM file can be loaded into memory immediately after the new PSP
        and execution can begin at that location. A .EXE file cannot be
        loaded and executed in this manner.

    ■  With MS-DOS versions 2.0 and later, Function 4BH (Load and Execute
        Program) should be used in preference to Function 26H. Function 4BH
        can be used to load .COM files, .EXE files, or overlays.

Related Function

    4BH (Load and Execute Program)

Example

        ;************************************************************;
        ;                                                            ;
        ;       Function 26H: Create New Program Segment Prefix      ;
        ;                                                            ;
        ;       int create_psp(pspseg)                               ;
        ;           int  pspseg;                                     ;
        ;                                                            ;
        ;       Returns 0.                                           ;
        ;                                                            ;
        ;************************************************************;


cProc   create_psp,PUBLIC
parmW   pspseg
cBegin
        mov     dx,pspseg       ; Get segment address of new PSP.
        mov     ah,26h          ; Set function code.
        int     21h             ; Ask MS-DOS to create new PSP.
        xor     ax,ax           ; Return 0.
cEnd



Interrupt 21H (33) Function 27H (39)
Random Block Read
1.0 and later


    Function 27H reads one or more records into memory, placing the
    records in the current disk transfer area (DTA).

To Call

    AH      = 27H
    CX      = number of records to read
    DS:DX   = segment:offset of previously opened file control block (FCB)

Returns

    AL      = 00H  read successful
            = 01H  end of file; no record read
            = 02H  DTA too small (segment wrap error); no record read
            = 03H  end of file; partial record read

    If AL is 00H or 03H:

    CX      = number of records read

    DTA contains data read from file.

Programmer's Notes

    ■  The DTA address should be set with Function 1AH (Set DTA Address)
        before Function 27H is called. If the DTA address has not been set,
        MS-DOS uses a default 128-byte DTA at offset 80H in the program
        segment prefix (PSP).

    ■  Function 27H reads the number of records specified in CX
        sequentially, starting at the file location indicated by the
        relative-record and record size fields in the FCB. If CX = 0, no
        records are read.

    ■  The record length used by Function 27H is the value in the record
        size field of the FCB. Unless a new value is placed in this field
        after a file is opened or created, MS-DOS uses a default record
        length of 128 bytes.

    ■  Function 27H is similar to Function 21H (Random Read); however,
        Function 27H can read more than one record at a time and updates
        the relative-record field of the FCB after each call. Successive
        calls to this function thus read sequential groups of records from
        a file, whereas successive calls to Function 21H repeatedly read
        the same record.

    ■  Possible alternative causes for end-of-file (01H) errors include:

        - Disk removed from drive since file was opened.

        - Previous open failed.

        With MS-DOS versions 3.0 and later, more detailed information on
        the error can be obtained by calling Function 59H (Get Extended
        Error Information).

    ■  On networks running under MS-DOS version 3.1 or later, the user
        must have Read access rights to the directory containing the file
        to be read.

    ■  With MS-DOS versions 2.0 and later, Function 3FH (Read File or
        Device) should be used in preference to Function 27H.

Related Functions

    14H (Sequential Read)
    1AH (Set DTA Address)
    21H (Random Read)
    24H (Set Relative Record)
    28H (Random Block Write)
    3FH (Read File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;      Function 27H: Random File Block Read, FCB-based       ;
        ;                                                            ;
        ;      int FCB_rblock(oXFCB,nrequest,nactual,start)          ;
        ;          char *oXFCB;                                      ;
        ;          int   nrequest;                                   ;
        ;          int  *nactual;                                    ;
        ;          long  start;                                      ;
        ;                                                            ;
        ;      Returns read status 0, 1, 2, or 3 and sets            ;
        ;      nactual to number of records actually read.           ;
        ;                                                            ;
        ;      If start is -1, the relative-record field is          ;
        ;      not changed, causing the block to be read starting    ;
        ;      at the current record.                                ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_rblock,PUBLIC,<ds,di>
parmDP  poXFCB
parmW   nrequest
parmDP  pnactual
parmD   start
cBegin
        loadDP  ds,dx,poXFCB    ; Pointer to opened extended FCB.
        mov     di,dx           ; DI points at FCB, too.
        mov     ax,word ptr (start) ; Get long value of start.
        mov     bx,word ptr (start+2)
        mov     cx,ax           ; Is start = -1?
        and     cx,bx
        inc     cx
        jcxz    rb_skip         ; If so, don't change relative-record
                                ; field.
        mov     [di+28h],ax     ; Otherwise, seek to start record.
        mov     [di+2ah],bx
rb_skip:
        mov     cx,nrequest     ; CX = number of records to read.
        mov     ah,27h          ; Get MS-DOS to read CX records,
        int     21h             ; placing them at DTA.
        loadDP  ds,bx,pnactual  ; DS:BX = address of nactual.
        mov     [bx],cx         ; Return number of records read.
        cbw                     ; Clear high byte.
cEnd



Interrupt 21H (33) Function 28H (40)
Random Block Write
1.0 and later


    Function 28H writes one or more records from the current disk transfer
    area (DTA) to a file.

To Call

    AH      = 28H
    CX      = number of records to write
    DS:DX   = segment:offset of previously opened file control block (FCB)

    DTA contains data to write.

Returns

    AL      = 00H  write successful
            = 01H  disk full
            = 02H  DTA too small (segment wrap error); write canceled

    If AL is 00H or 01H:

    CX      = number of records written

Programmer's Notes

    ■  Data to be written must be placed in the DTA before Function 28H is
        called. Unless the DTA address has been set with Function 1AH (Set
        DTA Address), MS-DOS uses a default 128-byte DTA at offset 80H in
        the program segment prefix (PSP).

    ■  Function 28H writes the number of records indicated in CX,
        beginning at the location specified in the relative-record field of
        the file control block (FCB). If Function 28H is called with CX =
        0, the file is truncated or extended to the size indicated by the
        record-size and relative-record fields of the FCB.

    ■  The record length used by Function 28H is the value in the record
        size field of the FCB. Unless a new value is assigned after a file
        is opened or created, MS-DOS uses a default record length of 128
        bytes.

    ■  Function 28H is similar to Function 22H (Random Write); however,
        Function 28H can write more than one record at a time and updates
        the relative-record field of the FCB after each call. Successive
        calls to this function thus write sequential groups of records to a
        file, whereas successive calls to Function 22H repeatedly write the
        same record.

    ■  Possible alternative causes for disk full (01H) errors include:

        - Disk removed from drive since file was opened.

        - Previous open failed.

        In MS-DOS versions 3.0 and later, more detailed information on the
        error can be obtained by calling Function 59H (Get Extended Error
        Information).

    ■  Information is written logically, but not always physically, to
        disk at the time Function 28H is called. The contents of the DTA
        are written immediately to disk only if they constitute a full
        sector of information. If less than a sector is written, it is
        transferred from the DTA to an MS-DOS buffer and is not physically
        written to disk until one of the following occurs:

        - A full sector of information is ready.

        - The file is closed.

        - Function 0DH (Disk Reset) is issued.

    ■  On networks running under MS-DOS version 3.1 or later, the user
        must have Write access rights to the directory containing the file
        to be written to.

    ■  With MS-DOS versions 2.0 and later, Function 40H (Write File or
        Device) should be used in preference to Function 28H.

Related Functions

    15H (Sequential Write)
    1AH (Set DTA Address)
    22H (Random Write)
    24H (Set Relative Record)
    27H (Random Block Read)
    40H (Write File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;       Function 28H: Random File Block Write, FCB-based     ;
        ;                                                            ;
        ;       int FCB_wblock(oXFCB,nrequest,nactual,start)         ;
        ;           char *oXFCB;                                     ;
        ;           int   nrequest;                                  ;
        ;           int  *nactual;                                   ;
        ;           long  start;                                     ;
        ;                                                            ;
        ;       Returns write status of 0, 1, or 2 and sets          ;
        ;       nactual to number of records actually written.       ;
        ;                                                            ;
        ;       If start is -1, the relative-record field is         ;
        ;       not changed, causing the block to be written         ;
        ;       starting at the current record.                      ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_wblock,PUBLIC,<ds,di>
parmDP  poXFCB
parmW   nrequest
parmDP  pnactual
parmD   start
cBegin
        loadDP  ds,dx,poXFCB    ; Pointer to opened extended FCB.
        mov     di,dx           ; DI points at FCB, too.
        mov     ax,word ptr (start) ; Get long value of start.
        mov     bx,word ptr (start+2)
        mov     cx,ax           ; Is start = -1?
        and     cx,bx
        inc     cx
        jcxz    wb_skip         ; If so, don't change relative-record
                                ; field.
        mov     [di+28h],ax     ; Otherwise, seek to start record.
        mov     [di+2ah],bx
wb_skip:
        mov     cx,nrequest     ; CX = number of records to write.
        mov     ah,28h          ; Get MS-DOS to write CX records
        int     21h             ; from DTA to file.
        loadDP  ds,bx,pnactual  ; DS:BX = address of nactual.
        mov     ds:[bx],cx      ; Return number of records written.
        cbw                     ; Clear high byte.
cEnd



Interrupt 21H (33) Function 29H (41)
Parse Filename
1.0 and later


    Function 29H examines a string for a valid filename in the form
    drive:filename.ext. If the string represents a valid filename,
    the function creates an unopened file control block (FCB) for it.

To Call

    AH      = 29H
    AL      = code to control parsing, as follows (bits 0-3 only):

╓┌──────────────┌──────┌─────────────────────────────────────────────────────╖
        Bit    Value  Meaning
        ──────────────────────────────────────────────────────────────────
        0      0      Stop parsing if file separator is found.

            1      Ignore leading separators (parse off white space).

        1      0      Set drive number field in FCB to 0 (current drive) if
                    string does not include a drive identifier.

            1      Set drive as specified in the string; leave unaltered
                    if string does not include a drive identifier.

        2      0      Set filename field in the FCB to blanks (20H) if
                    string does not include a filename.

            1      Leave filename field unaltered if string does not
                    include a filename.

        3      0      Set extension field in FCB to blanks (20H) if string
                    does not include a filename extension.

            1      Leave extension field unaltered if string does not
                    include a filename extension.

    DS:SI   = segment:offset of string to parse
    ES:DI   = segment:offset of buffer for unopened FCB

Returns

    AL      = 00H  string does not contain wildcard characters
            = 01H  string contains wildcard characters
            = FFH  drive specifier invalid
    DS:SI   = segment:offset of first byte following the parsed string
    ES:DI   = segment:offset of unopened FCB

Programmer's Notes

    ■  Bits 0 through 3 of the byte in the AL register control the way the
        text string is parsed; bits 4 through 7 are not used and must be 0.

    ■  After MS-DOS parses the string, DS:SI points to the first byte
        following the parsed string. If DS:SI points to an earlier byte,
        MS-DOS did not parse the entire string.

    ■  If Function 29H encounters the MS-DOS wildcard character * (match
        all remaining characters) in a filename or extension, the remaining
        bytes in the corresponding FCB field are set to the wildcard
        character ? (match one character). For example, the string DOS*.D*
        would be converted to DOS????? in the filename field and D?? in the
        extension field of the FCB.

    ■  With MS-DOS versions 1.x, the following characters are filename
        separators:

        : . ; , = + space tab / " [ ]

        With MS-DOS versions 2.0 and later, the following characters are
        filename separators:

        : . ; , = + space tab

    ■  The following characters are filename terminators:

        / " [ ] < > |
        All filename separators
        Any control character

    ■  If the string does not contain a valid filename, ES:DI+1 points to
        an ASCII blank character (20H).

    ■  Function 29H cannot parse pathnames.

Related Functions

    None

Example

        ;************************************************************;
        ;                                                            ;
        ;            Function 29H: Parse Filename into FCB           ;
        ;                                                            ;
        ;            int FCB_parse(uXFCB,name,ctrl)                  ;
        ;                char *uXFCB;                                ;
        ;                char *name;                                 ;
        ;                int ctrl;                                   ;
        ;                                                            ;
        ;            Returns -1 if error,                            ;
        ;                     0 if no wildcards found,               ;
        ;                     1 if wildcards found.                  ;
        ;                                                            ;
        ;************************************************************;

cProc   FCB_parse,PUBLIC,<ds,si,di>
parmDP  puXFCB
parmDP  pname
parmB   ctrl
cBegin
        loadDP  es,di,puXFCB    ; Pointer to unopened extended FCB.
        push    di              ; Save DI.
        xor     ax,ax           ; Fill all 22 (decimal) words of the
                                ; extended FCB with zeros.
        cld                     ; Make sure direction flag says UP.
        mov     cx,22d
        rep     stosw
        pop     di              ; Recover DI.
        mov     byte ptr [di],0ffh ; Set flag byte to mark this as an
                                ; extended FCB.
        add     di,7            ; Advance pointer to start of regular
                                ; FCB.
        loadDP  ds,si,pname     ; Get pointer to filename into DS:SI.
        mov     al,ctrl         ; Get parse control byte.
        mov     ah,29h          ; Parse filename, please.
        int     21h
        cbw                     ; Set return parameter.
cEnd



Interrupt 21H (33) Function 2AH (42)
Get Date
1.0 and later


    Function 2AH returns the current system date--year, month, day, and
    day of the week--in binary form.

To Call

    AH   = 2AH

Returns

    AL   = day of the week (0 = Sunday, 1 = Monday, 2 = Tuesday, and so
            on; MS-DOS versions 1.10 and later)
    CX   = year (1980 through 2099)
    DH   = month (1 through 12)
    DL   = day (1 through 31)

Programmer's Note

    ■  Years outside the range 1980-2099 cannot be returned by Function
        2AH.

Related Functions

    2BH (Set Date)
    2CH (Get Time)
    2DH (Set Time)

Example

        ;************************************************************;
        ;                                                            ;
        ;            Function 2AH: Get Date                          ;
        ;                                                            ;
        ;            long get_date(pdow,pmonth,pday,pyear)           ;
        ;                 char *pdow,*pmonth,*pday;                  ;
        ;                 int *pyear;                                ;
        ;                                                            ;
        ;            Returns the date packed into a long:            ;
        ;                 low byte  = day of month                   ;
        ;                 next byte = month                          ;
        ;                 next word = year.                          ;
        ;                                                            ;
        ;************************************************************;

cProc   get_date,PUBLIC,ds
parmDP  pdow
parmDP  pmonth
parmDP  pday
parmDP  pyear
cBegin
        mov     ah,2ah          ; Set function code.
        int     21h             ; Get date info from MS-DOS.
        loadDP  ds,bx,pdow      ; DS:BX = pointer to dow.
        mov     [bx],al         ; Return dow.
        loadDP  ds,bx,pmonth    ; DS:BX = pointer to month.
        mov     [bx],dh         ; Return month.
        loadDP  ds,bx,pday      ; DS:BX = pointer to day.
        mov     [bx],dl         ; Return day.
        loadDP  ds,bx,pyear     ; DS:BX = pointer to year.
        mov     [bx],cx         ; Return year.
        mov     ax,dx           ; Pack day, month, ...
        mov     dx,cx           ; ... and year into return value.
cEnd



Interrupt 21H (33) Function 2BH (43)
Set Date
1.0 and later


    Function 2BH accepts binary values for the year, month, and day of the
    month and stores them in the system's date counter as the number of
    days since January 1, 1980.

To Call

    AH   = 2BH
    CX   = year (1980 through 2099)
    DH   = month (1 through 12)
    DL   = day (1 through 31)

Returns

    AL   = 00H       system date updated
        = FFH       invalid date specified

Programmer's Note

    ■  The year must be a 16-bit value in the range 1980 through 2099.
        Values outside this range are not accepted. In addition, supplying
        only the last two digits of the year causes an error.

Related Functions

    2AH (Get Date)
    2CH (Get Time)
    2DH (Set Time)

Example

        ;************************************************************;
        ;                                                            ;
        ;             Function 2BH: Set Date                         ;
        ;                                                            ;
        ;             int set_date(month,day,year)                   ;
        ;                 char month,day;                            ;
        ;                 int year;                                  ;
        ;                                                            ;
        ;             Returns 0 if date was OK, -1 if not.           ;
        ;                                                            ;
        ;************************************************************;

cProc   set_date,PUBLIC
parmB   month
parmB   day
parmW   year
cBegin
        mov     dh,month        ; Get new month.
        mov     dl,day          ; Get new day.
        mov     cx,year         ; Get new year.
        mov     ah,2bh          ; Set function code.
        int     21h             ; Ask MS-DOS to change date.
        cbw                     ; Return 0 or -1.
cEnd



Interrupt 21H (33) Function 2CH (44)
Get Time
1.0 and later


    Function 2CH reports the current system time--hours (based on a 24-
    hour clock), minutes, seconds, and hundredths of a second--in binary
    form.

To Call

    AH   = 2CH

Returns

    CH   = hours (0 through 23)
    CL   = minutes (0 through 59)
    DH   = seconds (0 through 59)
    DL   = hundredths of second (0 through 99)

Programmer's Note

    ■  The accuracy of the time returned by Function 2CH depends on the
        accuracy of the system's timekeeping hardware. On systems unable to
        resolve time to the hundredth of a second, the DL register may
        contain either 00H or an approximate value calculated by an MS-DOS
        algorithm.

Related Functions

    2AH (Get Date)
    2BH (Set Date)
    2DH (Set Time)

Example

        ;************************************************************;
        ;                                                            ;
        ;             Function 2CH: Get Time                         ;
        ;                                                            ;
        ;             long get_time(phour,pmin,psec,phund)           ;
        ;                  char *phour,*pmin,*psec,*phund;           ;
        ;                                                            ;
        ;             Returns the time packed into a long:           ;
        ;                  low byte  = hundredths                    ;
        ;                  next byte = seconds                       ;
        ;                  next byte = minutes                       ;
        ;                  next byte = hours.                        ;
        ;                                                            ;
        ;************************************************************;

cProc   get_time,PUBLIC,ds
parmDP  phour
parmDP  pmin
parmDP  psec
parmDP  phund
cBegin
        mov     ah,2ch          ; Set function code.
        int     21h             ; Get time from MS-DOS.
        loadDP  ds,bx,phour     ; DS:BX = pointer to hour.
        mov     [bx],ch         ; Return hour.
        loadDP  ds,bx,pmin      ; DS:BX = pointer to min.
        mov     [bx],cl         ; Return min.
        loadDP  ds,bx,psec      ; DS:BX = pointer to sec.
        mov     [bx],dh         ; Return sec.
        loadDP  ds,bx,phund     ; DS:BX = pointer to hund.
        mov     [bx],dl         ; Return hund.
        mov     ax,dx           ; Pack seconds, hundredths, ...
        mov     dx,cx           ; ... minutes, and hour into
                                ; return value.
cEnd



Interrupt 21H (33) Function 2DH (45)
Set Time
1.0 and later


    Function 2DH accepts binary values for the hour (based on a 24-hour
    clock), minute, second, and hundredths of a second and stores them in
    the operating system's time counter.

To Call

    AH   = 2DH
    CH   = hours (0 through 23)
    CL   = minutes (0 through 59)
    DH   = seconds (0 through 59)
    DL   = hundredths of second (0 through 99)

Returns

    AL   = 00H       time successfully updated
        = FFH       invalid time specified

Programmer's Note

    ■  On systems that are unable to resolve the time to the hundredth of
        a second, the DL register should be set to 00H before Function 2DH
        is called.

Related Functions

    2AH (Get Date)
    2BH (Set Date)
    2CH (Get Time)

Example

        ;************************************************************;
        ;                                                            ;
        ;             Function 2DH: Set Time                         ;
        ;                                                            ;
        ;             int set_time(hour,min,sec,hund)                ;
        ;                 char hour,min,sec,hund;                    ;
        ;                                                            ;
        ;             Returns 0 if time was OK, -1 if not.           ;
        ;                                                            ;
        ;************************************************************;

cProc   set_time,PUBLIC
parmB   hour
parmB   min
parmB   sec
parmB   hund
cBegin
        mov     ch,hour         ; Get new hour.
        mov     cl,min          ; Get new minutes.
        mov     dh,sec          ; Get new seconds.
        mov     dl,hund         ; Get new hundredths.
        mov     ah,2dh          ; Set function code.
        int     21h             ; Ask MS-DOS to change time.
        cbw                     ; Return 0 or -1.
cEnd



Interrupt 21H (33) Function 2EH (46)
Set/Reset Verify Flag
1.0 and later


    Function 2EH turns the internal MS-DOS verify flag on or off, thus
    determining whether MS-DOS verifies disk write operations.

To Call

    AH   = 2EH
    AL   = 00H       turn verify off
        = 01H       turn verify on
    DL   = 00H (MS-DOS versions 1.x and 2.x only)

Returns

    Nothing

Programmer's Notes

    ■  If the verify flag is on, MS-DOS requests any block-device driver
        to verify each sector written. If the driver does not support read-
        after-write verification, the verify flag has no effect.

    ■  Function 54H (Get Verify Flag) can be used to check the current
        setting of the verify flag.

    ■  Verifying data slows disk access during write operations. Because
        disk errors are rare, the default setting of the verify flag is
        off.

    ■  Verification can be controlled at the user level with the MS-DOS
        VERIFY command.

Related Function

    54H (Get Verify Flag)

Example

        ;************************************************************;
        ;                                                            ;
        ;             Function 2EH: Set/Reset Verify Flag            ;
        ;                                                            ;
        ;             int set_verify(newvflag)                       ;
        ;                 char newvflag;                             ;
        ;                                                            ;
        ;             Returns 0.                                     ;
        ;                                                            ;
        ;************************************************************;

cProc   set_verify,PUBLIC
parmB   newvflag
cBegin
        mov     al,newvflag     ; Get new value of verify flag.
        mov     ah,2eh          ; Set function code.
        int     21h             ; Ask MS-DOS to store flag.
        xor     ax,ax           ; Return 0.
cEnd



Interrupt 21H (33) Function 2FH (47)
Get DTA Address
2.0 and later


    Function 2FH returns the current disk transfer area (DTA)
    address.

To Call

    AH      = 2FH

Returns

    ES:BX   = segment:offset of current DTA address

Programmer's Notes

    ■  Function 2FH returns the base address of the current DTA. MS-DOS
        has no way of knowing the size of the buffer at that address; the
        program must ensure that the buffer pointed to by the DTA address
        is large enough to hold any records transferred to it.

    ■  The current DTA address can be set with Function 1AH (Set DTA
        Address). If the DTA address is not set, MS-DOS uses a default
        buffer of 128 bytes located at offset 80H in the program segment
        prefix (PSP).

Related Function

    1AH (Set DTA Address)

Example

        ;************************************************************;
        ;                                                            ;
        ;           Function 2FH: Get DTA Address                    ;
        ;                                                            ;
        ;           char far *get_DTA()                              ;
        ;                                                            ;
        ;           Returns a far pointer to the DTA buffer.         ;
        ;                                                            ;
        ;************************************************************;

cProc   get_DTA,PUBLIC
cBegin
        mov     ah,2fh          ; Set function code.
        int     21h             ; Ask MS-DOS for current DTA address.
        mov     ax,bx           ; Return offset in AX.
        mov     dx,es           ; Return segment in DX.
cEnd



Interrupt 21H (33) Function 30H (48)
Get MS-DOS Version Number
2.0 and later


    Function 30H returns the major and minor version numbers for MS-DOS
    versions 2.0 and later.

To Call

    AH      = 30H
    AL      = 00H

Returns

    AL      = major version number (for example, 3 for MS-DOS version 3.x)
    AH      = minor version number (for example, 0AH for MS-DOS version
            x.10)
    BH      = original equipment manufacturer's (OEM's) serial number (OEM
            dependent--usually 00H for PC-DOS, 0FFH or other values for
            MS-DOS)
    BL:CX   = 24-bit user serial number (optional; OEM dependent)

Programmer's Notes

    ■  With MS-DOS versions 1.x, Function 30H returns 00H in the AL
        register; the value returned in AH is variable and not
        representative of the actual 1.x minor version number.

    ■  Function 30H supplies the MS-DOS version number to an application
        program that might require features of the operating system that
        are not available in all versions. If an application attempts to
        use such features with the wrong version of MS-DOS, the results are
        unpredictable.

        Applications requiring MS-DOS version 2.0 or later should use
        Function 30H to check for versions 1.x. Because versions 1.x do not
        contain predefined handles for displaying error messages, Function
        02H (Character Output) or Function 09H (Display String) must be
        used with those versions. Similarly, applications running under
        versions 1.x cannot terminate through a call to Function 4CH
        (Terminate Process with Return Code).

Related Functions

    None

Example

        ;************************************************************;
        ;                                                            ;
        ;           Function 30H: Get MS-DOS Version Number          ;
        ;                                                            ;
        ;           int DOS_version()                                ;
        ;                                                            ;
        ;           Returns number of MS-DOS version, with           ;
        ;              major version in high byte,                   ;
        ;              minor version in low byte.                    ;
        ;                                                            ;
        ;************************************************************;

cProc   DOS_version,PUBLIC
cBegin
        mov     ax,3000H        ; Set function code and clear AL.
        int     21h             ; Ask MS-DOS for version number.
        xchg    al,ah           ; Swap major and minor numbers.
cEnd



Interrupt 21H (33) Function 31H (49)
Terminate and Stay Resident
2.0 and later


    Function 31H terminates a program and returns control to the parent
    process (usually COMMAND.COM) but keeps the terminated program
    resident in memory.

To Call

    AH   = 31H
    AL   = return code
    DX   = number of paragraphs of memory to be reserved for current
            process

Returns

    Nothing

Programmer's Notes

    ■  The following interrupt vectors are restored from the program
        segment prefix (PSP) of the terminated program:

╓┌─────────────────────┌─────────────────────────────────────────────────────╖
        PSP Offset    Vector for Interrupt
        ──────────────────────────────────────────────────────────────────
        0AH           Interrupt 22H (terminate routine)
        0EH           Interrupt 23H (Control-C handler)
        12H           Interrupt 24H (critical error handler)
                    (versions 2.0 and later.)

    ■  The minimum amount of memory a process can reserve is 6 paragraphs
        (60H bytes), which constitutes the initial portion of the process's
        PSP (including the reserved areas).

    ■  The amount of memory required by the program is not necessarily the
        same as the size of the file that holds the program on disk.
        The program must allow for its PSP and stack in the amount of
        memory reserved; on the other hand,the memory occupied by code and
        data used only during program initialization frequently can be
        discarded as a side effect of the Function 31H call.

        Before Function 31H is called, memory allocated to the terminating
        process's environment block should be released  by loading ES with
        the segment value at offset 2CH in the PSP (the segment address of
        the environment) and calling Function 49H (Free Memory Block).

    ■  The terminating process should return a completion code in the AL
        register. If the program terminates normally, the return code
        should be 00H. A return code of 01H or greater usually indicates
        that termination was caused by an error encountered by the process.

        The parent process can retrieve the return code with Function 4DH
        (Get Return Code of Child Process). If control returns to
        COMMAND.COM, the return code can be tested with an ERRORLEVEL
        statement in a batch file.

    ■  After terminating the current process, MS-DOS attempts to set the
        program's memory allocation to the amount specified in DX.

    ■  Function 31H is most often used for memory-resident utilities and
        subroutine libraries that can be accessed using interrupts.

    ■  This function is preferable to Interrupt 27H (Terminate and Stay
        Resident) because it allows programs that are larger than 64 KB to
        remain resident, allows the terminating program to pass a return
        code to the parent process, and does not require that the CS
        register contain the PSP address.

Related Functions

    48H (Allocate Memory Block)
    49H (Free Memory Block)
    4AH (Resize Memory Block)
    4BH (Load and Execute Program)
    4CH (Terminate Process with Return Code)
    4DH (Get Return Code of Child Process)

Example

        ;************************************************************;
        ;                                                            ;
        ;          Function 31H: Terminate and Stay Resident         ;
        ;                                                            ;
        ;          void keep_process(exit_code,nparas)               ;
        ;               int exit_code,nparas;                        ;
        ;                                                            ;
        ;          Does NOT return!                                  ;
        ;                                                            ;
        ;************************************************************;

cProc   keep_process,PUBLIC
parmB   exit_code
parmW   nparas
cBegin
        mov     al,exit_code    ; Get return code.
        mov     dx,nparas       ; Set DX to number of paragraphs the
                                ; program wants to keep.
        mov     ah,31h          ; Set function code.
        int     21h             ; Ask MS-DOS to keep process.
cEnd



Interrupt 21H (33) Function 33H (51)
Get/Set Control-C Check Flag

2.0 and later


    Function 33H gets or sets the status of the Control-C check flag.

To Call

    AH   = 33H
    AL   = 00H       get current Control-C check flag
        = 01H       set Control-C check flag to value in DL

    If AL is 01H:

    DL   = 00H       set Control-C check flag to off
        = 01H       set Control-C check flag to on

Returns

    AL   = 00H       flag set successfully
        = FFH       code in AL on call not 00H or 01H

    If AL was 00H on call:

    DL   = 00H       Control-C check flag off
        = 01H       Control-C check flag on

Programmer's Notes

    ■  If the Control-C check flag is off, MS-DOS checks for a Control-C
        entered at the keyboard only during servicing of the character I/O
        functions, 01H through 0CH. If the Control-C check flag is on, MS-
        DOS also checks for user entry of a Control-C during servicing of
        other functions, such as file and record operations.

    ■  The state of the Control-C check flag affects all programs. If a
        program needs to change the state of Control-C checking, it should
        save the original flag and restore it before terminating.

Related Functions

    None

Example

        ;************************************************************;
        ;                                                            ;
        ;          Function 33H: Get/Set Control-C Check Flag        ;
        ;                                                            ;
        ;          int controlC(func,state)                          ;
        ;              int func,state;                               ;
        ;                                                            ;
        ;          Returns current state of Control-C flag.          ;
        ;                                                            ;
        ;************************************************************;

cProc   controlC,PUBLIC
parmB   func
parmB   state
cBegin
        mov     al,func         ; Get set/reset function.
        mov     dl,state        ; Get new value if present.
        mov     ah,33h          ; MS-DOS ^C check function.
        int     21h             ; Call MS-DOS.
        mov     al,dl           ; Return current state.
        cbw                     ; Clear high byte of return value.
cEnd



Interrupt 21H (33) Function 34H (52)
Return Address of InDOS Flag
2.0 and later


    Function 34H returns the address of the InDOS flag, which reflects the
    current state of Interrupt 21H function processing.

    Note: Microsoft cannot guarantee that the information in
    this entry will be valid for future versions of MS-DOS.

To Call

    AH      = 34H

Returns

    ES:BX   = segment:offset of InDOS flag

Programmer's Notes

    ■  The InDOS flag is a byte within the MS-DOS kernel. The value in
        InDOS is incremented when MS-DOS begins execution of an Interrupt
        21H function and decremented when MS-DOS's processing of that
        function is completed. Thus, the value of InDOS is zero only when
        no Interrupt 21H processing is occurring.

    ■  The InDOS flag is one of the elements used in terminate-and-stay-
        resident (TSR) programs to determine when the TSR can be executed
        safely.

Related Functions

    None

Example

        ;************************************************************;
        ;                                                            ;
        ;       Function 34H: Get Return Address of InDOS Flag       ;
        ;                                                            ;
        ;       char far *inDOS_ptr()                                ;
        ;                                                            ;
        ;       Returns a far pointer to the MS-DOS inDOS flag.      ;
        ;                                                            ;
        ;***********************************************************;

cProc   inDOS_ptr,PUBLIC
cBegin
        mov     ah,34h          ; InDOS flag function.
        int     21h             ; Call MS-DOS.
        mov     ax,bx           ; Return offset in AX.
        mov     dx,es           ; Return segment in DX.
cEnd



Interrupt 21H (33) Function 35H (53)
Get Interrupt Vector
2.0 and later


    Function 35H returns the address stored in the interrupt vector table
    for the handler associated with the specified interrupt.

To Call

    AH      = 35H
    AL      = interrupt number

Returns

    ES:BX   = segment:offset of handler for interrupt specified in AL

Programmer's Note

    ■  Interrupt vectors should always be read with Function 35H and set
        with Function 25H (Set Interrupt Vector). Programs should never
        attempt to read or change interrupt vectors directly in
        memory.

Related Function

    25H (Set Interrupt Vector)

Example

        ;************************************************************;
        ;                                                            ;
        ;           Function 35H: Get Interrupt Vector               ;
        ;                                                            ;
        ;           typedef void (far *FCP)();                       ;
        ;           FCP get_vector(intnum)                           ;
        ;               int intnum;                                  ;
        ;                                                            ;
        ;           Returns a far code pointer that is the           ;
        ;           segment:offset of the interrupt vector.          ;
        ;                                                            ;
        ;************************************************************;

cProc   get_vector,PUBLIC
parmB   intnum
cBegin
        mov     al,intnum       ; Get interrupt number into AL.
        mov     ah,35h          ; Select "get vector" function.
        int     21h             ; Call MS-DOS.
        mov     ax,bx           ; Return vector offset.
        mov     dx,es           ; Return vector segment.
cEnd



Interrupt 21H (33) Function 36H (54)
Get Disk Free Space
2.0 and later


    Function 36H returns disk-storage information for the specified drive.

To Call

    AH   = 36H
    DL   = drive specification (0 = default drive, 1 = drive A,
            2 = drive B, and so on)

Returns

    If function is successful:

    AX   = number of sectors per cluster
    BX   = number of clusters available
    CX   = number of bytes per sector
    DX   = number of clusters on drive

    If function is not successful:

    AX   = FFFFH     invalid drive number in DL

Programmer's Notes

    ■  The AX register should be checked for a value of FFFFH (error)
        before information returned by this function is used.

    ■  The number of bytes of free storage remaining on the disk can be
        calculated by multiplying available clusters times sectors per
        cluster times bytes per sector (BX * AX * CX).

    ■  Function 36H regards "lost" clusters (clusters that are allocated
        in the file allocation table [FAT] but do not belong to a file) as
        being in use and subtracts them from the amount of available
        storage, exactly as if they were allocated to a file.

    ■  With MS-DOS versions 2.0 and later, Function 36H should be used in
        preference to the FCB Functions 1BH (Get Default Drive Data) and
        1CH (Get Drive Data).

Related Functions

    1BH (Get Default Drive Data)
    1CH (Get Drive Data)

Example

        ;************************************************************;
        ;                                                            ;
        ;             Function 36H: Get Disk Free Space              ;
        ;                                                            ;
        ;             long free_space(drive_ltr)                     ;
        ;                 char drive_ltr;                            ;
        ;                                                            ;
        ;             Returns the number of bytes free as            ;
        ;             a long integer.                                ;
        ;                                                            ;
        ;************************************************************;

cProc   free_space,PUBLIC
parmB   drive_ltr
cBegin
        mov     dl,drive_ltr    ; Get drive letter.
        or      dl,dl           ; Leave 0 alone.
        jz      fsp
        and     dl,not 20h      ; Convert letter to uppercase.
        sub     dl,'A'-1        ; Convert to drive number: 'A' = 1,
                                ; 'B' = 2, etc.
fsp:
        mov     ah,36h          ; Set function code.
        int     21h             ; Ask MS-DOS to get disk information.
        mul     cx              ; Bytes/sector * sectors/cluster
        mul     bx              ; * free clusters.
cEnd



Interrupt 21H (33) Function 38H (56)
Get/Set Current Country: Get Current Country
2.0 and later


    Function 38H includes two subfunctions that either get or set country
    data, depending on the value in the DX register when the function is
    called.

    With MS-DOS versions 2.0 and later, if DX contains any value other
    than FFFFH, the Get Current Country subfunction is invoked.
    Information on date, currency, and other country-specific formats is
    then returned in a buffer specified by the calling program. The
    country code is usually the same as the country's international
    telephone prefix.

To Call

    AH      = 38H

    With MS-DOS versions 2.x:

    AL      = 00H     current country
    DS:DX   = segment:offset of 32-byte buffer

    With MS-DOS versions 3.x:

    AL      = 00H     current country
            = 01-FEH  country code between 1 and 254
            = FFH     country code of 255 or greater, specified in BX
    BX      = country code if AL = FFH
    DS:DX   = segment:offset of 34-byte buffer

Returns

    If function is successful:

    Carry flag is clear.

    BX      = country code (MS-DOS version 3.x only)
    DS:DX   = segment:offset of buffer containing country information

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 02H     invalid country code

Programmer's Notes

    ■  With MS-DOS versions 2.x, the Get Current Country subfunction
        returns the following information for the current country in the
        32-byte country-data buffer (ASCIIZ format is an ASCII character
        string ending in a zero byte):

╓┌──────────────┌─────────┌──────────────────────────────────────────────────╖
        Offset Type      Description
        ──────────────────────────────────────────────────────────────────
        00H    Word      Date format:
                                0 = United States (m/d/y)
                                1 = Europe (d/m/y)
                                2 = Japan (y/m/d)
        02H    ASCIIZ    Currency symbol
        04H    ASCIIZ    Character used as thousands separator
        06H    ASCIIZ    Character used as decimal separator
        08H    24 bytes  Reserved

    ■  With MS-DOS versions 3.x, the Get Current Country subfunction
        returns the following information for the specified country in the
        34-byte country-data buffer:

╓┌──────────────┌─────────┌──────────────────────────────────────────────────╖
        Offset Type      Description
        ──────────────────────────────────────────────────────────────────
        00H    Word      Date format:
                            0 = United States (m/d/y)
                            1 = Europe (d/m/y)
                            2 = Japan (y/m/d)
        02H    ASCIIZ    Currency symbol (5 bytes, as opposed to 2
                        in versions 2.x of MS-DOS)
        07H    ASCIIZ    Character used as thousands separator
        09H    ASCIIZ    Character used as decimal separator
        0BH    ASCIIZ    Character used as date separator
        0DH    ASCIIZ    Character used as time separator
        0FH    Byte      Position of currency symbol; possible
                        values are:
                                00H   Currency symbol precedes value
                                    with no space
                                01H   Currency symbol follows value
                                    with no space
                                02H   Currency symbol precedes value
                                    with one space
                                03H   Currency symbol follows value
                                    with one space
        10H    Byte      Number of decimal places in currency
        11H    Byte      Time format (00H = 12-hour clock;
                        01H = 24-hour clock)
        12H    Dword     Case-mapping call address (See Programmer's
                        Notes below.)
        16H    ASCIIZ    Character used as separator in data lists
        18H    10 bytes  Reserved

    ■  The case-mapping call address (MS-DOS versions 3.x only) is the
        segment:offset of a FAR procedure that performs country-specific,
        lowercase-to-uppercase mapping on ASCII characters in the range 80H
        through 0FFH. The character to be mapped must be placed in the AL
        register before the call is made. If the character has an uppercase
        value, that value is returned in AL. If the character has no such
        value, AL is unchanged.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Function

    38H (Set Current Country subfunction)

Example

        ;************************************************************;
        ;                                                            ;
        ;         Function 38H: Get/Set Current Country Data         ;
        ;                                                            ;
        ;         int country_info(country,pbuffer)                  ;
        ;             char country,*pbuffer;                         ;
        ;                                                            ;
        ;         Returns -1 if the "country" code is invalid.       ;
        ;                                                            ;
        ;************************************************************;

cProc   country_info,PUBLIC,ds
parmB   country
parmDP  pbuffer
cBegin
        mov     al,country      ; Get country code.
        loadDP  ds,dx,pbuffer   ; Get buffer pointer (or -1).
        mov     ah,38h          ; Set function code.
        int     21h             ; Ask MS-DOS to get country
                                ; information.
        jnb     cc_ok           ; Branch if country code OK.
        mov     ax,-1           ; Else return -1.
cc_ok:
cEnd



Interrupt 21H (33) Function 38H (56)
Get/Set Current Country: Set Current Country
3.0 and later


    Function 38H includes two subfunctions that either get or set country
    data, depending on the value in the DX register when the function is
    called.

    With MS-DOS versions 3.0 and later, the Set Current Country
    subfunction is invoked if Function 38H is called with DX = FFFFH (-1).
    This subfunction selects the country for which subsequent calls to Get
    Current Country will return information. The country code used with
    this function is usually the same as the country's international
    telephone prefix.

To Call

    AH   = 38H
    AL   = country code    for a code less than 255
        = FFH             for country code of 255 or greater, specified
                            in BX
    BX   = country code if AL = FFH
    DX   = FFFFH (-1)

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 02H              invalid country code

Programmer's Notes

    ■  MS-DOS normally uses the country code associated with the current
        KEYBxx keyboard driver file, if any. Otherwise, the default country
        code is OEM dependent.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Function

    38H (Get Current Country subfunction)

Example

    See Function 38H Subfunction Get Current Country for example.



Interrupt 21H (33) Function 39H (57)
Create Directory
2.0 and later


    Function 39H creates a subdirectory using the specified path.

To Call

    AH      = 39H
    DS:DX   = segment:offset of ASCIIZ path

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 03H      path not found
            = 05H      access denied

Programmer's Notes

    ■  The path must be a null-terminated ASCII string (ASCIIZ).

    ■  MS-DOS places the current directory (.) and parent directory (..)
        entries in all new directories.

    ■  Function 39H returns error code 05H (access denied) in the
        following cases:

        - File or directory with the same name already exists in the
        specified path.

        - Parent directory is the root directory and the root directory is
        full.

        - Path specifies a device.

        - Program is running on a network under MS-DOS version 3.1 or later
        and the user does not have Create access to the parent
        directory.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    3AH (Remove Directory)
    3BH (Change Current Directory)
    47H (Get Current Directory)

Example

        ;************************************************************;
        ;                                                            ;
        ;              Function 39H: Create Directory                ;
        ;                                                            ;
        ;              int make_dir(pdirpath)                        ;
        ;                  char *pdirpath;                           ;
        ;                                                            ;
        ;              Returns 0 if directory created OK,            ;
        ;              otherwise returns error code.                 ;
        ;                                                            ;
        ;************************************************************;

cProc   make_dir,PUBLIC,ds
parmDP  pdirpath
cBegin
        loadDP  ds,dx,pdirpath  ; Get pointer to pathname.
        mov     ah,39h          ; Set function code.
        int     21h             ; Ask MS-DOS to make new subdirectory.
        jb      md_err          ; Branch on error.
        xor     ax,ax           ; Else return 0.
md_err:
cEnd



Interrupt 21H (33) Function 3AH (58)
Remove Directory
2.0 and later

    Function 3AH removes (deletes) the specified subdirectory.

To Call

    AH      = 3AH
    DS:DX   = segment:offset of ASCIIZ path

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 03H      path not found
            = 05H      access denied
            = 10H      current directory was specified

Programmer's Notes

    ■  The path must be a null-terminated ASCII string (ASCIIZ).

    ■  Function 3AH returns error code 05H (access denied) in the
        following cases:

        - Directory is not empty.

        - Root directory was specified.

        - Current directory was specified.

        - Path does not specify a valid directory.

        - Directory is malformed (. and .. not first two entries).

        - User has insufficient access rights on a network running under
        MS-DOS version 3.1 or later.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    39H (Create Directory)
    3BH (Change Current Directory)
    47H (Get Current Directory)

Example

        ;************************************************************;
        ;                                                            ;
        ;             Function 3AH: Remove Directory                 ;
        ;                                                            ;
        ;             int remove_dir(pdirpath)                       ;
        ;                 char *pdirpath;                            ;
        ;                                                            ;
        ;             Returns 0 if directory was removed,            ;
        ;             otherwise returns error code.                  ;
        ;                                                            ;
        ;************************************************************;

cProc   remove_dir,PUBLIC,ds
parmDP  pdirpath
cBegin
        loadDP  ds,dx,pdirpath  ; Get pointer to pathname.
        mov     ah,3ah          ; Set function code.
        int     21h             ; Ask MS-DOS to delete subdirectory.
        jb      rd_err          ; Branch on error.
        xor     ax,ax           ; Else return 0.
rd_err:
cEnd



Interrupt 21H (33) Function 3BH (59)
Change Current Directory
2.0 and later


    Function 3BH changes the current directory to the specified path.

To Call

    AH      = 3BH
    DS:DX   = segment:offset of ASCIIZ path

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 03H      path not found

Programmer's Notes

    ■  The path must be a null-terminated ASCII string (ASCIIZ).

    ■  Before a call to Function 3BH, Function 47H (Get Current Directory)
        can be used to determine the current directory so that the original
        directory can be restored later (for example, on termination of the
        program).

    ■  Function 3BH can be used with programs that rely on either FCB-
        based or handle-based calls. It is the only method of changing the
        current directory that is supported by MS-DOS.

    ■  The path string is limited to a total of 64 characters, including
        separators.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    39H (Create Directory)
    3AH (Remove Directory)
    47H (Get Current Directory)

Example

        ;************************************************************;
        ;                                                            ;
        ;            Function 3BH: Change Current Directory          ;
        ;                                                            ;
        ;            int change_dir(pdirpath)                        ;
        ;                char *pdirpath;                             ;
        ;                                                            ;
        ;            Returns 0 if directory was changed,             ;
        ;            otherwise returns error code.                   ;
        ;                                                            ;
        ;************************************************************;

cProc   change_dir,PUBLIC,ds
parmDP  pdirpath
cBegin
        loadDP  ds,dx,pdirpath  ; Get pointer to pathname.
        mov     ah,3bh          ; Ask MS-DOS to move to
        int     21h             ; different directory.
        jb      cd_err          ; Branch on error.
        xor     ax,ax           ; Else return 0.
cd_err:
cEnd



Interrupt 21H (33) Function 3CH (60)
Create File with Handle
2.0 and later


    Function 3CH creates a file, assigns it the attributes specified, and
    returns a 16-bit handle for the file. If the named file already
    exists, Function 3CH opens it and truncates it to zero length.

To Call

    AH      = 3CH
    CX      = attribute
    DS:DX   = segment:offset of ASCIIZ pathname

Returns

    If function is successful:

    Carry flag is clear.

    AX      = handle number

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 03H      path not found
            = 04H      too many open files
            = 05H      access denied

Programmer's Notes

    ■  Function 3CH is preferable to Function 16H (Create File with FCB)
        for creating a file because it supports full pathnames. Function
        16H should be used only if compatibility with versions 1.x of MS-
        DOS is required.

    ■  The pathname must be a null-terminated ASCII string (ASCIIZ).

    ■  Bits 0 through 2 of the 2-byte file attribute in CX determine
        whether the file is normal, read-only, hidden, or system. The
        attribute codes are

        - 00H = normal file

        - 01H = read-only file

        - 02H = hidden file

        - 04H = system file

        Bits 3 through 5 are associated with volume labels, subdirectories,
        and archive files. The volume and subdirectory bits are invalid for
        Function 3CH and must be set to 0. Bits 6 through 15 should be set
        to 0 to ensure future compatibility.

        Values can be combined to set several file attributes. For example,
        if Function 3CH is called with CX = 0003H, the file created is a
        read-only hidden file.

    ■  Because Function 3CH truncates an existing file to zero length, any
        information previously in the file is lost. Alternative functions
        that protect against such loss include the following:

        - Function 3DH (Open File with Handle) or Function 4EH (Find First
        File), which can be used to check for the previous existence of
        the file before Function 3CH is called

        - Function 5AH (Create Temporary File), which creates a file in the
        specified subdirectory and gives it a unique name assigned by MS-
        DOS

        - Function 5BH (Create New File), which is similar to Function 3CH
        but fails if it finds a file that matches the specified
        pathname

    ■  After creating a file, Function 3CH sets the position of the file
        pointer to 0. Thus, the next read or write operation takes place at
        the beginning of the file.

    ■  Function 3CH returns error code 04H (too many open files) if no
        handle is currently available. With MS-DOS versions 3.2 and
        earlier, a single process can have no more than 20 files open at
        one time, 5 of which are normally assigned to the standard devices.

        Error code 05H (access denied) is returned if the file is to be
        created in the root directory and the root is full or if a read-
        only file with the same name already exists in the specified
        subdirectory.

    ■  On networks running under MS-DOS version 3.1 or later, the user
        must have Create access to the directory containing the file
        specified.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    16H (Create File with FCB)
    43H (Get/Set File Attributes)
    5AH (Create Temporary File)
    5BH (Create New File)

Example

        ;************************************************************;
        ;                                                            ;
        ;            Function 3CH: Create File with Handle           ;
        ;                                                            ;
        ;            int create(pfilepath,attr)                      ;
        ;               char *pfilepath;                             ;
        ;            int attr;                                       ;
        ;                                                            ;
        ;            Returns -1 if file was not created,             ;
        ;            otherwise returns file handle.                  ;
        ;                                                            ;
        ;************************************************************;


cProc   create,PUBLIC,ds
parmDP  pfilepath
parmW   attr
cBegin
        loadDP  ds,dx,pfilepath ; Get pointer to pathname.
        mov     cx,attr         ; Get new file's attribute.
        mov     ah,3ch          ; Ask MS-DOS to make a new file.
        int     21h
        jnb     cr_ok           ; Branch if MS-DOS returned handle.
        mov     ax,-1           ; Else return -1.
cr_ok:
cEnd



Interrupt 21H (33) Function 3DH (61)
Open File with Handle
2.0 and later


    Function 3DH opens the specified file and returns a 16-bit handle
    number for subsequent access to the file.

To Call

    AH      = 3DH

    With versions 2.x of MS-DOS:

    AL      = file-access code:

            ───────────────────────────────────────────────────────
            Bits           Value          Meaning
            ───────────────────────────────────────────────────────
            3-7            00000          Reserved
            0-2            000            Read-only access
                            001            Write-only access
                            010            Read/write access

    DS:DX   = segment:offset of ASCIIZ pathname

    With versions 3.x of MS-DOS:

    AL      = file-access, file-sharing, and inheritance codes:

            ───────────────────────────────────────────────────────
            Bits                 Value       Meaning
            ───────────────────────────────────────────────────────
            7(inherit bit)         0         Child process inherits
                                                file
                                    1         Child process does not
                                                inherit file
            4-6 (sharing mode;   000         Compatibility mode
            file access granted  001         Deny read/write access
            to other processes)  010         Deny write access
                                    011         Deny read access
                                    100         Deny none
            3                      0         Reserved
            0-2 (access code;    000         Read-only access
            file usage)          001         Write-only access
                                    010         Read/write access

    DS:DX   = segment:offset of ASCIIZ pathname

Returns

    If function is successful:

    Carry flag is clear.

    AX      = handle number

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 02H      file not found
            = 03H      path not found
            = 04H      too many open files
            = 05H      access denied
            = 0CH      invalid access code

Programmer's Notes

    ■  Function 3DH is preferable to Function 0FH (Open File with FCB)
        because it allows the use of pathnames. Function 0FH should be used
        only if compatibility with versions 1.x of MS-DOS is required.

    ■  Function 3DH opens any file matching the pathname in DS:DX,
        including hidden and system files.

    ■  The pathname must be a null-terminated ASCII string (ASCIIZ).

    ■  Function 3DH returns error code 04H (too many open files) if no
        handle is currently available. With MS-DOS versions 3.2 and
        earlier, a single process can have no more than 20 files open at
        one time, 5 of which are normally assigned to the standard devices.

        Function 3DH returns error code 05H (access denied) if the pathname
        specifies a directory or volume label or if read/write access was
        requested for a read-only file.

        Function 3DH returns error code 0CH (invalid access code) if bits
        0-2 in AL contain any value other than 000, 001, or 010.

    ■  With MS-DOS versions 2.x, only bits 0-2 of the byte in AL are
        meaningful; they should contain the type of access allowed for the
        file. Bits 3-7 should always be zero.

        With MS-DOS versions 3.0 and later, networking capabilities require
        bits 4-7, as well as 0-2, to be set. (Bit 3 is reserved and should
        be 0.)

        Bit 7, the inherit bit, should be set to indicate whether child
        processes created by the current process with Function 4BH (Load
        and Execute Program) either can (0) or cannot (1) inherit the file.
        When a process inherits a file, it also inherits the access and
        sharing modes.

        Bits 4-6 are called the "sharing code"; they indicate the type of
        access other users on the network can have to the file. The five
        sharing modes and the conditions under which they pertain are as
        follows:

        - mode 000 (compatibility). Allows other programs running on the
        same machine unlimited access to the file. Programs running on
        other machines cannot access the file across the network unless
        it has the read-only attribute. An attempt to open the file in
        compatibility mode fails if the file has already been opened with
        any other sharing mode.

        - 001 (deny read and write access). Provides exclusive access to
        the file. Any subsequent attempts by others (including the
        current process) to open the file fail. This mode fails if the
        file has already been opened in compatibility mode or for read or
        write access, even by the current process.

        - 010 (deny write access). Allows other processes to open the file
        for read-only access. This mode fails if the file has already
        been opened in compatibility mode or for write access by any
        other process.

        - 011 (deny read access). Allows other processes to open the file
        for write-only access. This mode fails if the file has already
        been opened in compatibility mode or for read access by any other
        process.

        - 100 (deny none). Similar to compatibility mode, but does not
        allow other processes to open the file in compatibility mode.
        This mode fails if the file has already been opened in
        compatibility mode by any other process.

    ■  When the file is opened, the position of the file pointer is set to
        0. Function 42H (Move File Pointer) can be used to change its
        position.

    ■  With MS-DOS versions 3.0 and later, if this function fails because
        of a file-sharing error, the operating system issues an Interrupt
        24H (Critical Error Handler Address) with error code 02H (drive not
        ready). Function 59H (Get Extended Error Information) must be used
        to find the extended error code specifying the type of sharing
        violation that occurred.

Related Functions

    0FH (Open File with FCB)
    3EH (Close File)
    3FH (Read File or Device)
    40H (Write File or Device)
    42H (Move File Pointer)
    43H (Get/Set File Attributes)
    57H (Get/Set Date/Time of File)

Example

        ;************************************************************;
        ;                                                            ;
        ;             Function 3DH: Open File with Handle            ;
        ;                                                            ;
        ;             int open(pfilepath,mode)                       ;
        ;                 char *pfilepath; int mode;                 ;
        ;                                                            ;
        ;             Modes:                                         ;
        ;                     0: Read                                ;
        ;                     1: Write                               ;
        ;                     2: Read/Write                          ;
        ;                                                            ;
        ;             Returns -1 if file was not opened,             ;
        ;             otherwise returns file handle.                 ;
        ;                                                            ;
        ;************************************************************;

cProc   open,PUBLIC,ds
parmDP  pfilepath
parmB   mode
cBegin
        loadDP  ds,dx,pfilepath ; Get pointer to pathname.
        mov     al,mode         ; Get read/write mode.
        mov     ah,3dh          ; Request MS-DOS to open the
        int     21h             ; existing file.
        jnb     op_ok           ; Branch if MS-DOS returned handle.
        mov     ax,-1           ; Else return -1.
op_ok:
cEnd



Interrupt 21H (33) Function 3EH (62)
Close File
2.0 and later


    Function 3EH closes the file referenced by the specified handle.

To Call

    AH   = 3EH
    BX   = handle number

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 06H      invalid handle number

Programmer's Notes

    ■  The handle in BX must be one that was returned by a successful call
        to one of the following functions:

        - 3CH (Create File with Handle)

        - 3DH (Open File with Handle)

        - 5AH (Create Temporary File)

        - 5BH (Create New File)

    ■  If the file has been modified, truncated, or extended, Function 3EH
        updates the current date, time, and file size in the directory
        entry.

    ■  All internal MS-DOS buffers for the file, including directory and
        file allocation table (FAT) buffers, are flushed to disk.

    ■  With MS-DOS versions 3.0 and later, a program must remove all file
        locks in effect before it closes a file. The result of closing a
        file with active locks is unpredictable.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    10H (Close File with FCB)
    3CH (Create File with Handle)
    3DH (Open File with Handle)
    5AH (Create Temporary File)
    5BH (Create New File)

Example

        ;************************************************************;
        ;                                                            ;
        ;              Function 3EH: Close File                      ;
        ;                                                            ;
        ;              int close(handle)                             ;
        ;                  int handle;                               ;
        ;                                                            ;
        ;              Returns -1 if file was not closed,            ;
        ;              otherwise returns 0.                          ;
        ;                                                            ;
        ;************************************************************;

cProc   close,PUBLIC
parmW   handle
cBegin
        mov     bx,handle       ; Get handle.
        mov     ah,3eh          ; Set function codes.
        int     21h             ; Ask MS-DOS to close handle.
        mov     al,0
        jnb     cl_ok           ; Branch if no error.
        mov     al,-1           ; Else return -1.
cl_ok:
        cbw                     ; Extend result.
cEnd



Interrupt 21H (33) Function 3FH (63)
Read File or Device
2.0 and later


    Function 3FH reads from the file or device referenced by a handle.

To Call

    AH      = 3FH
    BX      = handle number
    CX      = number of bytes to read
    DS:DX   = segment:offset of data buffer

Returns

    If function is successful:

    Carry flag is clear.

    AX      = number of bytes read from file
    DS:DX   = segment:offset of data read from file

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 05H  access denied
            = 06H  invalid handle

Programmer's Notes

    ■  Data is read from the file beginning at the current location of the
        file pointer. After a successful read, the file pointer is updated
        to point to the byte following the last byte read.

    ■  If Function 3FH returns 00H in the AX register, the function
        attempted to read when the file pointer was at the end of the file.
        If AX is less than CX, a partial record at the end of the file was
        read.

    ■  Function 3FH can be used with all handles, including standard input
        (normally the keyboard). When reading from standard input, this
        function normally reads characters only to the first carriage-
        return character. Thus, the number of bytes read in AX will not
        necessarily match the length requested in CX.

    ■  On networks running under MS-DOS version 3.1 or later, the user
        must have Read access to the directory and file containing the
        information to be read.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    40H (Write File or Device)
    42H (Move File Pointer)
    59H (Get Extended Error Information)

Example

        ;************************************************************;
        ;                                                            ;
        ;           Function 3FH: Read File or Device                ;
        ;                                                            ;
        ;           int read(handle,pbuffer,nbytes)                  ;
        ;               int handle,nbytes;                           ;
        ;               char *pbuffer;                               ;
        ;                                                            ;
        ;           Returns -1 if there was a read error,            ;
        ;           otherwise returns number of bytes read.          ;
        ;                                                            ;
        ;************************************************************;

cProc   read,PUBLIC,ds
parmW   handle
parmDP  pbuffer
parmW   nbytes
cBegin
        mov     bx,handle       ; Get handle.
        loadDP  ds,dx,pbuffer   ; Get pointer to buffer.
        mov     cx,nbytes       ; Get number of bytes to read.
        mov     ah,3fh          ; Set function code.
        int     21h             ; Ask MS-DOS to read CX bytes.
        jnb     rd_ok           ; Branch if read worked.
        mov     ax,-1           ; Else return -1.
rd_ok:
cEnd



Interrupt 21H (33) Function 40H (64)
Write File or Device
2.0 and later


    Function 40H writes the specified number of bytes to a file or device
    referenced by a handle.

To Call

    AH      = 40H
    BX      = handle
    CX      = number of bytes to write
    DS:DX   = segment:offset of data buffer

Returns

    If function is successful:

    Carry flag is clear.

    AX      = number of bytes written to file or device

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 05H      access denied
            = 06H      invalid handle

Programmer's Notes

    ■  Data is written to the file or device beginning at the current
        location of the file pointer. After writing the specified data,
        Function 40H updates the position of the file pointer and returns
        the actual number of bytes written in AX.

    ■  Function 40H returns error code 05H (access denied) if the file was
        opened as read-only with Function 3CH (Create File with Handle),
        3DH (Open File with Handle), 5AH (Create Temporary File), or 5BH
        (Create New File). On networks running under MS-DOS version 3.1 or
        later, access is also denied if the file or record has been locked
        by another process.

    ■  The handle number in BX must be one of the predefined device
        handles (0 through 4) or a handle obtained through a previous call
        to open or create a file (such as Function 3CH, 3DH, 5AH, or 5BH).

    ■  If CX = 0, the file is truncated or extended to the current file
        pointer location. Clusters are allocated or released in the file
        allocation table (FAT) as required to fulfill the request.

    ■  If the handle parameter for Function 40H refers to a disk file and
        the number of bytes written (returned in AX) is less than the
        number requested in CX, the destination disk is full. The carry
        flag is not set in this situation.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    3FH (Read File or Device)
    42H (Move File Pointer)

Example

        ;************************************************************;
        ;                                                            ;
        ;          Function 40H: Write File or Device                ;
        ;                                                            ;
        ;          int write(handle,pbuffer,nbytes)                  ;
        ;              int handle,nbytes;                            ;
        ;              char *pbuffer;                                ;
        ;                                                            ;
        ;          Returns -1 if there was a write error,            ;
        ;          otherwise returns number of bytes written.        ;
        ;                                                            ;
        ;************************************************************;

cProc   write,PUBLIC,ds
parmW   handle
parmDP  pbuffer
parmW   nbytes
cBegin
        mov     bx,handle       ; Get handle.
        loadDP  ds,dx,pbuffer   ; Get pointer to buffer.
        mov     cx,nbytes       ; Get number of bytes to write.
        mov     ah,40h          ; Set function code.
        int     21h             ; Ask MS-DOS to write CX bytes.
        jnb     wr_ok           ; Branch if write successful.
        mov     ax,-1           ; Else return -1.
wr_ok:
cEnd



Interrupt 21H (33) Function 41H (65)
Delete File
2.0 and later


    Function 41H deletes the directory entry of the specified file.

To Call

    AH      = 41H
    DS:DX   = segment:offset of ASCIIZ pathname

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX         = error code:
                = 02H    file not found
                = 03H    path not found
                = 05H    access denied

Programmer's Notes

    ■  The pathname must be a null-terminated ASCII string (ASCIIZ).
        Unlike Function 13H (Delete File), Function 41H does not allow
        wildcard characters in the pathname.

    ■  Because Function 41H supports the use of full pathnames, it is
        preferable to Function 13H.

    ■  Function 41H returns error code 05H (access denied) and fails if
        the file has either a directory or volume attribute or if it is a
        read-only file.

        A directory can be deleted (if it is empty) with Function 3AH
        (Remove Directory). A read-only file can be deleted if its
        attribute is changed to normal with Function 43H (Get/Set File
        Attributes) before Function 41H is called.

    ■  On networks running under MS-DOS version 3.1 or later, the user
        must have Create access to the directory containing the file to be
        deleted.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    3AH (Remove Directory)
    43H (Get/Set File Attributes)

Example

        ;************************************************************;
        ;                                                            ;
        ;                Function 41H: Delete File                   ;
        ;                                                            ;
        ;                int delete(pfilepath)                       ;
        ;                    char *pfilepath;                        ;
        ;                                                            ;
        ;                Returns 0 if file deleted,                  ;
        ;                otherwise returns error code.               ;
        ;                                                            ;
        ;************************************************************;

cProc   delete,PUBLIC,ds
parmDP  pfilepath
cBegin
        loadDP  ds,dx,pfilepath ; Get pointer to pathname.
        mov     ah,41h          ; Set function code.
        int     21h             ; Ask MS-DOS to delete file.
        jb      dl_err          ; Branch if MS-DOS could not delete
                                ; file.
        xor     ax,ax           ; Else return 0.
dl_err:
cEnd



Interrupt 21H (33) Function 42H (66)
Move File Pointer
2.0 and later


    Function 42H sets the position of the file pointer (for the next
    read/write operation) for the file associated with the specified
    handle.

To Call

    AH      = 42H
    AL      = method code:
            = 00H       byte offset from beginning of file
            = 01H       byte offset from current location of file pointer
            = 02H       byte offset from end of file
    BX      = handle number
    CX:DX   = offset value to move pointer:
            = CX        most significant half of a doubleword value
            = DX        least significant half of a doubleword value

Returns

    If function is successful:

    Carry flag is clear.

    DX:AX   = new file pointer position (absolute byte offset from
            beginning of file)

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H      invalid function (AL not 00H, 01H, or 02H)
            = 06H      invalid handle

Programmer's Notes

    ■  The value in CX:DX is an offset specifying how far the file pointer
        is to be moved. With method code 00H, the value in CX:DX is always
        interpreted as a positive 32-bit integer, meaning the file pointer
        is always set relative to the beginning of the file.

        With method codes 01H and 02H, the value in CX:DX can be either a
        positive or negative 32-bit integer. Thus, method 1 can move the
        file pointer either forward or backward from its current position;
        method 2 can move the file pointer either forward or backward from
        the end of the file.

    ■  Specifying method code 00H with an offset of 0 positions the file
        pointer at the beginning of the file. Similarly, specifying method
        code 02H with an offset of 0 conveniently positions the file
        pointer at the end of the file. With method code 02H offset 0, the
        size of the file can also be determined by examining the pointer
        position returned by the function.

    ■  Depending on the offset specified in CX:DX, methods 1 and 2 may
        move the file pointer to a position before the start of the file.
        Function 42H does not return an error code if this happens, but
        later attempts to read from or write to the file will produce
        unexpected errors.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    3FH (Read File or Device)
    40H (Write File or Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;           Function 42H: Move File Pointer                  ;
        ;                                                            ;
        ;           long seek(handle,distance,mode)                  ;
        ;                int handle,mode;                            ;
        ;                long distance;                              ;
        ;                                                            ;
        ;           Modes:                                           ;
        ;                   0: from beginning of file                ;
        ;                   1: from the current position             ;
        ;                   2: from the end of the file              ;
        ;                                                            ;
        ;           Returns -1 if there was a seek error,            ;
        ;           otherwise returns long pointer position.         ;
        ;                                                            ;
        ;************************************************************;

cProc   seek,PUBLIC
parmW   handle
parmD   distance
parmB   mode
cBegin
        mov     bx,handle       ; Get handle.
        les     dx,distance     ; Get distance into ES:DX.
        mov     cx,es           ; Put high word of distance into CX.
        mov     al,mode         ; Get move method code.
        mov     ah,42h          ; Set function code.
        int     21h             ; Ask MS-DOS to move file pointer.
        jnb     sk_ok           ; Branch if seek successful.
        mov     ax,-1           ; Else return -1.
        cwd
sk_ok:
cEnd



Interrupt 21H (33) Function 43H (67)
Get/Set File Attributes
2.0 and later


    Function 43H gets or sets the attributes of the specified file.

To Call

    AH      = 43H

    To get file attributes:

    AL      = 00H
    DS:DX   = segment:offset of ASCIIZ pathname

    To set file attributes:

    AL      = 01H
    CX      = attributes to set:

╓┌──────────────────────────┌────────────────────────────────────────────────╖
            Bit         Attribute
            ──────────────────────────────────────────────────────────
            0           Read-only file
            1           Hidden file
            2           System file
            5           Archive

    DS:DX   = segment:offset of ASCIIZ pathname

Returns

    If function is successful:

    Carry flag is clear.

    CX      = attribute

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H    invalid function (AL not 00H or 01H)
            = 02H    file not found
            = 03H    path not found
            = 05H    access denied

Programmer's Notes

    ■  The pathname must be a null-terminated ASCII string (ASCIIZ).

    ■  Function 43H cannot be used to set or change either a volume-label
        or directory attribute (bits 3 and 4 of the attribute byte). With
        MS-DOS versions 3.x, Function 43H can be used to make a directory
        hidden or read-only.

    ■  On networks running under MS-DOS version 3.1 or later, the user
        must have Create access to the directory containing the file in
        order to change the read-only, hidden, or system attribute. The
        archive bit, however, can be changed regardless of access rights.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    None

Example

        ;************************************************************;
        ;                                                            ;
        ;            Function 43H: Get/Set File Attributes           ;
        ;                                                            ;
        ;            int file_attr(pfilepath,func,attr)              ;
        ;                char *pfilepath;                            ;
        ;                int func,attr;                              ;
        ;                                                            ;
        ;            Returns -1 for all errors,                      ;
        ;            otherwise returns file attribute.               ;
        ;                                                            ;
        ;************************************************************;

cProc   file_attr,PUBLIC,ds
parmDP  pfilepath
parmB   func
parmW   attr
cBegin
        loadDP  ds,dx,pfilepath ; Get pointer to pathname.
        mov     al,func         ; Get/set flag into AL.
        mov     cx,attr         ; Get new attr (if present).
        mov     ah,43h          ; Set code function.
        int     21h             ; Call MS-DOS.
        jnb     fa_ok           ; Branch if no error.
        mov     cx,-1           ; Else return -1.
fa_ok:
        mov     ax,cx           ; Return this value.

cEnd



Interrupt 21H (33) Function 44H (68)
IOCTL
2.0 and later


    Function 44H is a collection of subfunctions that provide a process a
    direct path of communication with a device driver. As such, this
    function is the most flexible means of gaining access to the full
    capabilities of an installed device.

    An IOCTL subfunction is called with 44H in AH and the value for the
    subfunction in AL. If a subfunction has minor functions, those values
    are specified in CL. Otherwise, the BX, CX, and DX registers are used
    for such information as handles, drive identifiers, buffer addresses,
    and so on.

    The subfunctions and the versions of MS-DOS with which they are
    available are

╓┌─────────────────────┌──────────────────────────────────────┌──────────────╖
                                                            MS-DOS
    Subfunction      Name                                   Version
    ─────────────────────────────────────────────────────────────────────
    00H              Get Device Data                        2.0 and later
    01H              Set Device Data                        2.0 and later
    02H              Receive Control Data from
                    Character Device                       2.0 and later
    03H              Send Control Data to Character
                    Device                                 2.0 and later
    04H              Receive Control Data from Block
                    Device                                 2.0 and later
    05H              Send Control Data to Block Device      2.0 and later
    06H              Check Input Status                     2.0 and later
    07H              Check Output Status                    2.0 and later
    08H              Check If Block Device Is Removable     3.0 and later
    09H              Check If Block Device Is Remote        3.1 and later
    0AH              Check If Handle Is Remote              3.1 and later
    0BH              Change Sharing Retry Count             3.1 and later
    0CH              Generic I/O Control for Handles        3.2
                    Minor Code 45H: Set Iteration Count
                    Minor Code 65H: Get Iteration Count
    0DH              Generic I/O Control for Block Devices  3.2
                    Minor Code 40H: Set Device Parameters
                    Minor Code 60H: Get Device Parameters
                    Minor Code 41H: Write Track on
                                    Logical Drive
                    Minor Code 61H: Read Track on
                                    Logical Drive
                    Minor Code 42H: Format and Verify
                                    Track on Logical
                                    Drive
                    Minor Code 62H: Verify Track on
                                    Logical Drive;
    0EH              Get Logical Drive Map                  3.2
    0FH              Set Logical Drive Map                  3.2

    These subfunctions are documented, either individually or in
    related pairs, in the entries that follow.



Interrupt 21H (33) Function 44H (68) Subfunction 00H
IOCTL: Get Device Data
2.0 and later


    Function 44H Subfunction 00H gets information about a character device
    or file referenced by a handle.

To Call

    AH   = 44H
    AL   = 00H
    BX   = handle number

Returns

    If function is successful:

    Carry flag is clear.

    DX contains information on file or device:

╓┌───────────────┌─────────┌─────────────────────────────────────────────────╖
Bit             Value     Meaning
──────────────────────────────────────────────────────────────────────────
For a file (bit 7 = 0):

8-15            0         Reserved.
7               0         Handle refers to a file.
6               0         File has been written.
0-5                       Drive number (0 = A, 1 = B, 2 = C, and so on).

For a device (bit 7 = 1):

15              0         Reserved.
14              1         Processes control strings transferred by IOCTL
                        Subfunctions 02H (Receive Control Data from
                        Character Device) and 03H (Send Control Data to
                        Character Device), set by MS-DOS.
8-13            0         Reserved.
7               1         Handle refers to a device.
6               0         End of file on input.
5               0         Checks for control characters (cooked mode).
                1         Does not check for control characters (raw mode).
4               0         Reserved.
3               1         Clock device.
2               1         Null device.
1               1         Standard output device.
0               1         Standard input device.

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 01H    invalid IOCTL subfunction
        = 05H    access denied
        = 06H    invalid handle

Programmer's Notes

    ■  Bits 8-15 of DX correspond to the upper 8 bits of the device-driver
        attribute word.

    ■  The handle in BX must reference an open device or file.

    ■  Bit 5 of the device data word for character-device handles defines
        whether that handle is in raw mode or cooked mode. In cooked
        mode, MS-DOS checks for Control-C, Control-P, Control-S, and
        Control-Z characters and transfers control to the Control-C
        exception handler (whose address is saved in the vector for
        Interrupt 23H) when a Control-C is detected. In raw mode, MS-DOS
        does not check for such characters when I/O is performed to the
        handle; however, it will still check for a Control-C entered at the
        keyboard on other function calls unless such checking has been
        turned off with Function 33H, the BREAK=OFF directive in
        CONFIG.SYS, or a BREAK OFF command at the MS-DOS prompt.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    33H (Get/Set Control-C Check Flag)
    3CH (Create File with Handle)
    3DH (Open File with Handle)

Example

        ;************************************************************;
        ;                                                            ;
        ;        Function 44H, Subfunctions 00H,01H:                 ;
        ;                      Get/Set IOCTL Device Data             ;
        ;                                                            ;
        ;        int ioctl_char_flags(setflag,handle,newflags)       ;
        ;            int setflag;                                    ;
        ;            int handle;                                     ;
        ;            int newflags;                                   ;
        ;                                                            ;
        ;        Set setflag = 0 to get flags, 1 to set flags.       ;
        ;                                                            ;
        ;        Returns -1 for error, else returns flags.           ;
        ;                                                            ;
        ;************************************************************;

cProc   ioctl_char_flags,PUBLIC
parmB   setflag
parmW   handle
parmW   newflags
cBegin
        mov     al,setflag      ; Get setflag.
        and     al,1            ; Save only lsb.
        mov     bx,handle       ; Get handle to character device.
        mov     dx,newflags     ; Get new flags (they are used only
                                ; by "set" option).
        mov     ah,44h          ; Set function code.
        int     21h             ; Call MS-DOS.
        mov     ax,dx           ; Assume success - prepare to return
                                ; flags.
        jnc     iocfx           ; Branch if no error.
        mov     ax,-1           ; Else return error flag.
iocfx:
cEnd



Interrupt 21H (33) Function 44H (68) Subfunction 01H
IOCTL: Set Device Data
2.0 and later


    Function 44H Subfunction 01H, the complement of IOCTL Subfunction 00H,
    sets information about a character device--but not a file--referenced
    by a handle.

To Call

    AH   = 44H
    AL   = 01H
    BX   = handle number
    DX   = device data word:

            ──────────────────────────────────────────────────────────────
            Bit       Value      Meaning
            ──────────────────────────────────────────────────────────────
            8-15      0          Reserved.
            7         1          Handle refers to a device.
            6         0          End of file on input.
            5         0          Check for control characters
                                (cooked mode).
                    1          Do not check for control characters
                                (raw mode).
            4         0          Reserved.
            3         1          Clock device.
            2         1          Null device.
            1         1          Standard output device.
            0         1          Standard input device.

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 01H    invalid IOCTL subfunction
        = 05H    access denied
        = 06H    invalid handle

Programmer's Notes

    ■  The handle in BX must reference an open device.

    ■  DH must be 00H. If it is not, the carry flag is set and error code
        01H (invalid function) is returned.

    ■  Bit 5 of the device data word for character-device handles selects
        raw mode or cooked mode for the handle. In cooked mode, MS-DOS
        checks for Control-C, Control-P, Control-S, and Control-Z
        characters and transfers control to the Control-C exception handler
        (whose address is saved in the vector for Interrupt 23H) when a
        Control-C is detected. In raw mode, MS-DOS does not check for such
        characters when I/O is performed to the handle; however, it will
        still check for a Control-C entered at the keyboard on other
        function calls unless such checking has been turned off with
        Function 33H, the BREAK=OFF directive in CONFIG.SYS, or a BREAK OFF
        command at the MS-DOS prompt.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    33H (Get/Set Control-C Check Flag)
    3CH (Create File with Handle)
    3DH (Open File with Handle)

Example

    See SYSTEM CALLS: INTERRUPT 21H: Function 44H Subfunction 00H.



Interrupt 21H (33) Function 44H (68) Subfunctions 02H and 03H
IOCTL: Receive Control Data from Character Device;
Send Control Data to Character Device
2.0 and later


    Function 44H Subfunctions 02H and 03H respectively receive and send
    control strings from and to a character-oriented device driver.

To Call

    AH      = 44H
    AL      = 02H     receive control
            = 03H     send control strings
    BX      = handle number
    CX      = number of bytes to transfer
    DS:DX   = segment:offset of data buffer

Returns

    If function is successful:

    Carry flag is clear.

    AX      = number of bytes transferred

    If AL was 02H on call:

    Buffer at DS:DX contains data read from device driver.

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H    invalid function
            = 05H    access denied
            = 06H    invalid handle
            = 0DH    invalid data (bad control string)

Programmer's Notes

    ■  Subfunctions 02H and 03H provide a means of transferring control
        information of any type or length between an application program
        and a character-device driver. They do not necessarily result in
        any input to or output from the physical device itself.

    ■  Subfunction 02H can be used to read control information about such
        features as device status, availability, and current output
        location. Subfunction 03H is often used to configure the driver or
        device for subsequent I/O; for example, it may be used to set the
        baud rate, word length, and parity for a serial communications
        adapter or to initialize a printer for a specific font, page
        length, and so on. The format of the control data passed by these
        subfunctions is driver specific and does not follow any standard.

    ■  Character-device drivers are not required to support IOCTL
        Subfunctions 02H and 03H. Therefore, Subfunction 00H (Get Device
        Data) should be called before either Subfunction 02H or 03H to
        determine whether a device can process control strings. If bit 14
        of the device data word returned by Subfunction 00H is set, the
        device driver supports IOCTL Subfunctions 02H and 03H.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    44H Subfunction 00H (Get Device Data)
    44H Subfunction 04H (Receive Control Data from Block Device)
    44H Subfunction 05H (Send Control Data to Block Device)

Example

        ;************************************************************;
        ;                                                            ;
        ;     Function 44H, Subfunctions 02H,03H:                    ;
        ;                   IOCTL Character Device Control           ;
        ;                                                            ;
        ;     int ioctl_char_ctrl(recvflag,handle,pbuffer,nbytes)    ;
        ;         int   recvflag;                                    ;
        ;         int   handle;                                      ;
        ;         char *pbuffer;                                     ;
        ;         int   nbytes;                                      ;
        ;                                                            ;
        ;     Set recvflag = 0 to receive info, 1 to send.           ;
        ;                                                            ;
        ;     Returns -1 for error, otherwise returns number of      ;
        ;     bytes sent or received.                                ;
        ;                                                            ;
        ;************************************************************;

cProc   ioctl_char_ctrl,PUBLIC,<ds>
parmB   recvflag
parmW   handle
parmDP  pbuffer
parmW   nbytes
cBegin
        mov     al,recvflag     ; Get recvflag.
        and     al,1            ; Keep only lsb.
        add     al,2            ; AL = 02H for receive, 03H for send.
        mov     bx,handle       ; Get character-device handle.
        mov     cx,nbytes       ; Get number of bytes to receive/send.
        loadDP  ds,dx,pbuffer   ; Get pointer to buffer.
        mov     ah,44h          ; Set function code.
        int     21h             ; Call MS-DOS.
        jnc     iccx            ; Branch if no error.
        mov     ax,-1           ; Return -1 for all errors.
iccx:
cEnd



Interrupt 21H (33) Function 44H (68) Subfunctions 04H and 05H
IOCTL: Receive Control Data from Block Device;
Send Control Data to Block Device
2.0 and later


    Function 44H Subfunctions 04H and 05H respectively receive and send
    control strings from and to a block-oriented device driver.

To Call

    AH      = 44H
    AL      = 04H    receive block-device data
            = 05H    send block-device data
    BL      = drive number (0 = default drive, 1 = drive A,
            2 = drive B, and so on)
    CX      = number of bytes to transfer
    DS:DX   = segment:offset of data buffer

Returns

    If function is successful:

    Carry flag is clear.

    AX      = number of bytes transferred

    If AL was 04H on call:

    Buffer at DS:DX contains control data read from device driver.

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H      invalid function
            = 05H      access denied
            = 06H      invalid handle
            = 0DH      invalid data (bad control string)

Programmer's Notes

    ■  Subfunctions 04H and 05H provide a means of transferring control
        information of any type or length between an application program
        and a block-device driver. They do not necessarily result in any
        input to or output from the physical device itself.

    ■  Control strings can be used to request driver operations that are
        not file oriented, such as tape rewind or disk eject (if hardware
        supported). The contents of such control strings are specific to
        individual device drivers and do not follow any standard format.

    ■  Subfunction 04H can be used to obtain a code from the driver
        indicating device availability or status. Block devices that might
        use this subfunction include magnetic tape or tape cassette, CD
        ROM, and Small Computer Standard Interface (SCSI) devices.

    ■  Block-device drivers are not required to support IOCTL Subfunctions
        04H and 05H. If the driver does not support these subfunctions,
        error code 01H (Invalid Function) is returned.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    44H Subfunction 00H (Get Device Data)
    44H Subfunction 02H (Receive Control Data from Character Device)
    44H Subfunction 03H (Send Control Data to Character Device)

Example

        ;*************************************************************;
        ;                                                             ;
        ;   Function 44H, Subfunctions 04H,05H:                       ;
        ;                 IOCTL Block Device Control                  ;
        ;                                                             ;
        ;   int ioctl_block_ctrl(recvflag,drive_ltr,pbuffer,nbytes)   ;
        ;       int   recvflag;                                       ;
        ;       int   drive_ltr;                                      ;
        ;       char *pbuffer;                                        ;
        ;       int   nbytes;                                         ;
        ;                                                             ;
        ;   Set recvflag = 0 to receive info, 1 to send.              ;
        ;                                                             ;
        ;   Returns -1 for error, otherwise returns number of         ;
        ;   bytes sent or received.                                   ;
        ;                                                             ;
        ;*************************************************************;

cProc   ioctl_block_ctrl,PUBLIC,<ds>
parmB   recvflag
parmB   drive_ltr
parmDP  pbuffer
parmW   nbytes
cBegin
        mov     al,recvflag     ; Get recvflag.
        and     al,1            ; Keep only lsb.
        add     al,4            ; AL = 04H for receive, 05H for send.
        mov     bl,drive_ltr    ; Get drive letter.
        or      bl,bl           ; Leave 0 alone.
        jz      ibc
        and     bl,not 20h      ; Convert letter to uppercase.
        sub     bl,'A'-1        ; Convert to drive number: 'A' = 1,
                                ; 'B' = 2, etc.
ibc:
        mov     cx,nbytes       ; Get number of bytes to receive/send.
        loadDP  ds,dx,pbuffer   ; Get pointer to buffer.
        mov     ah,44h          ; Set function code.
        int     21h             ; Call MS-DOS.
        jnc     ibcx            ; Branch if no error.
        mov     ax,-1           ; Return -1 for all errors.
ibcx:
cEnd



Interrupt 21H (33) Function 44H (68) Subfunctions 06H and 07H
IOCTL: Check Input Status; Check Output Status
2.0 and later


    Function 44H Subfunctions 06H and 07H respectively determine whether a
    device or file associated with a handle is ready for input or output.

To Call

    AH   = 44H
    AL   = 06H    get input status
        = 07H    get output status
    BX   = handle number

Returns

    If function is successful:

    Carry flag is clear.

    AL   = input or output status:
        = 00H    not ready
        = FFH    ready

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 01H      invalid function
        = 05H      access denied
        = 06H      invalid handle
        = 0DH      invalid data (bad control string)

Programmer's Notes

    ■  The status returned in AL has the following meanings:

╓┌────────────────────┌───────────────┌───────────────────┌──────────────────╖
        Status       Device          Input File          Output File
        ──────────────────────────────────────────────────────────────────
        00H          Not ready       Pointer at EOF      Ready
        0FFH         Ready           Ready               Ready

    ■  Output files always return a ready condition, even if the disk is
        full or no disk is in the drive.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    None

Example

        ;*************************************************************;
        ;                                                             ;
        ;   Function 44H, Subfunctions 06H,07H:                       ;
        ;                 IOCTL Input/Output Status                   ;
        ;                                                             ;
        ;   int ioctl_char_status(outputflag,handle)                  ;
        ;       int outputflag;                                       ;
        ;       int handle;                                           ;
        ;                                                             ;
        ;   Set outputflag = 0 for input status, 1 for output status. ;
        ;                                                             ;
        ;   Returns -1 for all errors, 0 for not ready,               ;
        ;   and 1 for ready.                                          ;
        ;                                                             ;
        ;*************************************************************;

cProc   ioctl_char_status,PUBLIC
parmB   outputflag
parmW   handle
cBegin
        mov     al,outputflag   ; Get outputflag.
        and     al,1            ; Keep only lsb.
        add     al,6            ; AL = 06H for input status, 07H for output
                                ; status.
        mov     bx,handle       ; Get handle.
        mov     ah,44h          ; Set function code.
        int     21h             ; Call MS-DOS.
        jnc     isnoerr         ; Branch if no error.
        mov     ax,-1           ; Return error code.
        jmp     short isx
isnoerr:
        and     ax,1            ; Keep only lsb for return value.
isx:
cEnd



Interrupt 21H (33) Function 44H (68) Subfunction 08H
IOCTL: Check If Block Device Is Removable
3.0 and later


    Function 44H Subfunction 08H checks whether the specified block device
    contains a removable storage medium, such as a floppy disk.

To Call

    AH   = 44H
    AL   = 08H
    BL   = drive number (0 = default drive, 1 = drive A,
            2 = drive B, and so on)

Returns

    If function is successful:

    Carry flag is clear.

    AX   = 00H    storage medium removable
        = 01H    storage medium not removable

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 01H    invalid function
        = 0FH    invalid drive

Programmer's Notes

    ■  This subfunction exists to allow an application to check for a
        removable disk so that the user can be prompted to change disks if
        a required file is not found.

    ■  When the carry flag is set, error code 01H normally means that MS-
        DOS did not recognize the function call. However, this error can
        also mean that the device driver does not support Subfunction 08H.
        In this case, MS-DOS assumes that the storage medium is not
        removable.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    None

Example

        ;************************************************************;
        ;                                                            ;
        ;      Function 44H, Subfunction 08H:                        ;
        ;                    IOCTL Removable Block Device Query      ;
        ;                                                            ;
        ;      int ioctl_block_fixed(drive_ltr)                      ;
        ;          int drive_ltr;                                    ;
        ;                                                            ;
        ;      Returns -1 for all errors, 1 if disk is fixed (not    ;
        ;      removable), 0 if disk is not fixed.                   ;
        ;                                                            ;
        ;************************************************************;

cProc   ioctl_block_fixed,PUBLIC
parmB   drive_ltr
cBegin
        mov     bl,drive_ltr    ; Get drive letter.
        or      bl,bl           ; Leave 0 alone.
        jz      ibch
        and     bl,not 20h      ; Convert letter to uppercase.
        sub     bl,'A'-1        ; Convert to drive number: 'A' = 1,
                                ; 'B' = 2, etc.
ibch:
        mov     ax,4408h        ; Set function code, Subfunction 08H.
        int     21h             ; Call MS-DOS.
        jnc     ibchx           ; Branch if no error, AX = 0 or 1.
        cmp     ax,1            ; Treat error code of 1 as "disk is
                                ; fixed."
        je      ibchx
        mov     ax,-1           ; Return -1 for other errors.
ibchx:
cEnd



Interrupt 21H (33) Function 44H (68) Subfunction 09H
IOCTL: Check If Block Device Is Remote
3.1 and later


    Function 44H Subfunction 09H checks whether the specified block device
    is local (attached to the computer running the program) or remote
    (redirected to a network server).

To Call

    AH   = 44H
    AL   = 09H
    BL   = drive number (0 = default drive, 1 = drive A,
            2 = drive B, and so on)

Returns

    If function is successful:

    Carry flag is clear.

    DX   = device attribute word:
        = bit 12 = 1    drive is remote
        = bit 12 = 0    drive is local

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 01H    invalid function
        = 0FH    invalid drive

Programmer's Notes

    ■  This subfunction should be avoided. Application programs should not
        distinguish between files on local and remote devices.

    ■  When the carry flag is set, error code 01H can mean either that the
        function number is invalid or that the network has not been
        started.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    None

Example

        ;************************************************************;
        ;                                                            ;
        ;        Function 44H, Subfunction 09H:                      ;
        ;                      IOCTL Remote Block Device Query       ;
        ;                                                            ;
        ;        int ioctl_block_redir(drive_ltr)                    ;
        ;            int drive_ltr;                                  ;
        ;                                                            ;
        ;        Returns -1 for all errors, 1 if disk is remote      ;
        ;        (redirected), 0 if disk is local.                   ;
        ;                                                            ;
        ;************************************************************;

cProc   ioctl_block_redir,PUBLIC
parmB   drive_ltr
cBegin
        mov     bl,drive_ltr    ; Get drive letter.
        or      bl,bl           ; Leave 0 alone.
        jz      ibr
        and     bl,not 20h      ; Convert letter to uppercase.
        sub     bl,'A'-1        ; Convert to drive number: 'A' = 1,
                                ; 'B' = 2, etc.
ibr:
        mov     ax,4409h        ; Set function code, Subfunction 09H.
        int     21h             ; Call MS-DOS.
        mov     ax,-1           ; Assume error.
        jc      ibrx            ; Branch if error, returning -1.
        inc     ax              ; Set AX = 0.
        test    dh,10h          ; Is bit 12 set?
        jz      ibrx            ; If not, disk is local: Return 0.
        inc     ax              ; Return 1 for remote disk.
ibrx:
cEnd



Interrupt 21H (33) Function 44H (68) Subfunction 0AH
IOCTL: Check If Handle Is Remote
3.1 and later


    Function 44H Subfunction 0AH checks whether the handle in BX refers to
    a file or device that is local (on the computer running the program)
    or remote (redirected to a network server).

To Call

    AH   = 44H
    AL   = 0AH
    BX   = handle

Returns

    If function is successful:

    Carry flag is clear.

    DX   = attribute word for file or device:
        = bit 15 = 1    remote
        = bit 15 = 0    local

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 01H    invalid function
        = 06H    invalid handle

Programmer's Notes

    ■  Application programs should not distinguish between files on local
        and remote devices.

    ■  When the carry flag is set, error code 01H can mean either that the
        function number is invalid or that the network has not been
        started.

Related Functions

    None

Example

        ;************************************************************;
        ;                                                            ;
        ;    Function 44H, Subfunction 0AH:                          ;
        ;                  IOCTL Remote Handle Query                 ;
        ;                                                            ;
        ;    int ioctl_char_redir(handle)                            ;
        ;        int handle;                                         ;
        ;                                                            ;
        ;    Returns -1 for all errors, 1 if device/file is remote   ;
        ;    (redirected), 0 if it is local.                         ;
        ;                                                            ;
        ;************************************************************;

cProc   ioctl_char_redir,PUBLIC
parmW   handle
cBegin
        mov     bx,handle       ; Get handle.
        mov     ax,440ah        ; Set function code, Subfunction 0AH.
        int     21h             ; Call MS-DOS.
        mov     ax,-1           ; Assume error.
        jc      icrx            ; Branch on error, returning -1.
        inc     ax              ; Set AX = 0.
        test    dh,80h          ; Is bit 15 set?
        jz      icrx            ; If not, device/file is local:
                                ; Return 0.
        inc     ax              ; Return 1 for remote.
icrx:
cEnd



Interrupt 21H (33) Function 44H (68) Subfunction 0BH
IOCTL: Change Sharing Retry Count
3.1 and later


    Function 44H Subfunction 0BH sets the number of times MS-DOS retries a
    disk operation after a failure caused by a file-sharing violation
    before it returns an error to the requesting process.

To Call

    AH   = 44H
    AL   = 0BH
    CX   = pause between retries
    DX   = number of retries

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 01H      invalid function

Programmer's Notes

    ■  The pause between retries is a machine-dependent value determined
        by the CPU and CPU clock speed. MS-DOS performs a delay loop that
        consists of 65,536 machine instructions for each iteration
        specified by the value in CX. The actual code is as follows:

        xor    cx,cx
        loop   $

        The default number of retries is 3, with a pause of one loop
        between retries--equivalent to calling this subfunction with
        DX = 3 and CX = 1.

    ■  When the carry flag is set, error code 01H indicates either that
        the function code is invalid or that file sharing (SHARE.EXE) is
        not loaded.

    ■  Subfunction 0BH can be used to tune the system if file-contention
        problems are likely to arise with shared files but are expected to
        last only a short while.

    ■  If file contention is expected and if some applications will lock
        regions of the file for an appreciable period of time, the user may
        need to be informed. The best procedure is to set an initial small
        number of retries with a short pause period. After notifying the
        user, the application can wait a reasonable amount of time for file
        access by adjusting the retry or pause-period values.

        If a process uses this subfunction, it should restore the original
        default values for the pause and number of retries before
        terminating, to avoid unwanted effects on the behavior of
        subsequent processes.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    None

Example

        ;************************************************************;
        ;                                                            ;
        ;     Function 44H, Subfunction 0BH:                         ;
        ;                   IOCTL Change Sharing Retry Count         ;
        ;                                                            ;
        ;     int ioctl_set_retry(num_retries,wait_time)             ;
        ;         int num_retries;                                   ;
        ;         int wait_time;                                     ;
        ;                                                            ;
        ;     Returns 0 for success, otherwise returns error code.   ;
        ;                                                            ;
        ;************************************************************;

cProc   ioctl_set_retry,PUBLIC,<ds,si>
parmW   num_retries
parmW   wait_time
cBegin
        mov     dx,num_retries  ; Get parameters.
        mov     cx,wait_time
        mov     ax,440bh        ; Set function code, Subfunction 0BH.
        int     21h             ; Call MS-DOS.
        jc      isrx            ; Branch on error.
        xor     ax,ax
isrx:
cEnd



Interrupt 21H (33) Function 44H (68) Subfunction 0CH
IOCTL: Generic I/O Control for Handles
3.2


    Function 44H Subfunction 0CH sets or gets the output iteration count
    for character-oriented devices. See also APPENDIX A: MS-DOS
    VERSION 3.3.

To Call

    AH      = 44H
    AL      = 0CH
    BX      = handle
    CH      = category code:
            = 05H    printer
    CL      = function (minor) code:
            = 45H    set iteration count
            = 65H    get iteration count
    DS:DX   = segment:offset of 2-byte buffer receiving or containing
            iteration-count word

Returns

    If function is successful:

    Carry flag is clear.

    If CL was 65H on call:

    DS:DX     = segment:offset of iteration-count word

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H      invalid function
            = 06H      invalid handle

Programmer's Notes

    ■  The iteration count controls the number of times the device driver
        tries to send output to the printer before assuming that the device
        is busy.

    ■  With MS-DOS version 3.2, only category code 05H (printer) is
        supported by this subfunction.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    None

Example

        ;************************************************************;
        ;                                                            ;
        ;   Function 44H, Subfunction 0CH:                           ;
        ;                 Generic IOCTL for Handles                  ;
        ;                                                            ;
        ;   int ioctl_char_generic(handle,category,function,pbuffer) ;
        ;       int   handle;                                        ;
        ;       int   category;                                      ;
        ;       int   function;                                      ;
        ;       int  *pbuffer;                                       ;
        ;                                                            ;
        ;   Returns 0 for success, otherwise returns error code.     ;
        ;                                                            ;
        ;************************************************************;

cProc   ioctl_char_generic,PUBLIC,<ds>
parmW   handle
parmB   category
parmB   function
parmDP  pbuffer
cBegin
        mov     bx,handle       ; Get device handle.
        mov     ch,category     ; Get category
        mov     cl,function     ; and function.
        loadDP  ds,dx,pbuffer   ; Get pointer to data buffer.
        mov     ax,440ch        ; Set function code, Subfunction 0CH.
        int     21h             ; Call MS-DOS.
        jc      icgx            ; Branch on error.
        xor     ax,ax
icgx:
cEnd



Interrupt 21H (33) Function 44H (68) Subfunction 0DH
IOCTL: Generic I/O Control for Block Devices
3.2


    Function 44H Subfunction 0DH includes six input/output tasks, or minor
    functions, related to block-oriented devices. The tasks perform the
    following operations: set or get device parameters; write, read,
    format and verify, or verify tracks on a logical drive.

    This entry covers general information on Subfunction 0DH. Details on
    each minor code are presented in subsequent entries.

To Call

    AH      = 44H
    AL      = 0DH
    BL      = drive number (0 = default drive, 1 = drive A,
            2 = drive B, and so on)
    CH      = category code:
            = 08H    disk drive
    CL      = function (minor) code:
            = 40H    set parameters for block device
            = 41H    write track on logical drive
            = 42H    format and verify track on logical drive
            = 60H    get parameters for block device
            = 61H    read track on logical drive
            = 62H    verify track on logical drive
    DS:DX   = segment:offset of parameter block

Returns

    If function is successful:

    Carry flag is clear.

    If CL was 60H or 61H on call:

    DS:DX    = segment:offset of parameter block

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H  invalid function
            = 02H  invalid drive

Programmer's Notes

    ■  Set Device Parameters (minor code 40H) must be used before an
        attempt to write, read, format, or verify a track on a logical
        drive. In general, the following sequence applies to any of these
        operations:

        1. Get the current parameters (minor code 60H). Examine and save
        them.

        2. Set the new parameters (minor code 40H).

        3. Perform the task.

        4. Retrieve the original parameters and restore them
        (minor code 40H).

    ■  With version 3.2 of MS-DOS, only category code 08H is supported by
        this subfunction.

    ■  Parameter blocks in the data buffer vary with the task being
        performed.

Related Functions

    None

Example

        ;************************************************************;
        ;                                                            ;
        ;    Function 44H, Subfunction 0DH:                          ;
        ;                  Generic IOCTL for Block Devices           ;
        ;                                                            ;
        ;    int ioctl_block_generic(drv_ltr,category,func,pbuffer)  ;
        ;        int   drv_ltr;                                      ;
        ;        int   category;                                     ;
        ;        int   func;                                         ;
        ;        char *pbuffer;                                      ;
        ;                                                            ;
        ;    Returns 0 for success, otherwise returns error code.    ;
        ;                                                            ;
        ;************************************************************;

cProc   ioctl_block_generic,PUBLIC,<ds>
parmB   drv_ltr
parmB   category
parmB   func
parmDP  pbuffer
cBegin
        mov     bl,drv_ltr      ; Get drive letter.
        or      bl,bl           ; Leave 0 alone.
        jz      ibg
        and     bl,not 20h      ; Convert letter to uppercase.
        sub     bl,'A'-1        ; Convert to drive number: 'A' = 1,
                                ; 'B' = 2, etc.
ibg:
        mov     ch,category     ; Get category
        mov     cl,func         ; and function.
        loadDP  ds,dx,pbuffer   ; Get pointer to data buffer.
        mov     ax,440dh        ; Set function code, Subfunction 0DH.
        int     21h             ; Call MS-DOS.
        jc      ibgx            ; Branch on error.
        xor     ax,ax
ibgx:
cEnd



Interrupt 21H (33) Function 44H (68) Subfunction 0DH Minor Code 40H
IOCTL: Generic I/O Control for Block Devices: Set Device Parameters


    Function 44H Subfunction 0DH minor code 40H sets device parameters in
    the parameter block pointed to by DS:DX.

To Call

    AH      = 44H
    AL      = 0DH
    BL      = drive number (0 = default drive, 1 = drive A,
            2 = drive B, and so on)
    CH      = category code:
            = 08H    disk drive
    CL      = 40H
    DS:DX   = segment:offset of parameter block

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H      invalid function
            = 02H      invalid drive

Programmer's Notes

    ■  The parameter block is formatted as follows:

        ──────────────────────────────────────────────────────────────────
        Special-functions field: offset 00H, length 1 byte
        ──────────────────────────────────────────────────────────────────
        Bit      Value       Meaning
        ──────────────────────────────────────────────────────────────────
        0        0           Device BIOS parameter block (BPB) field
                            contains a new default BPB.
                1           Use current BPB.
        1        0           Use all fields in parameter block.
                1           Use track layout field only.
        2        0           Sectors in track may be different sizes. (This
                            setting should not be used.)
                1           Sectors in track are all same size; sector
                            numbers range from 1 to the total number of
                            sectors in the track. (This setting should
                            always be used.)
        3-7      0           Reserved.

        ──────────────────────────────────────────────────────────────────
        Device type field: offset 01H, length 1 byte
        ──────────────────────────────────────────────────────────────────
        Value    Meaning
        ──────────────────────────────────────────────────────────────────
        00H      320/360 KB 5.25-inch disk
        01H      1.2 MB 5.25-inch disk
        02H      720 KB 3.5-inch disk
        03H      Single-density 8-inch disk
        04H      Double-density 8-inch disk
        05H      Fixed disk
        06H      Tape drive
        07H      Other type of block device

        ──────────────────────────────────────────────────────────────────
        Device attributes field: offset 02H, length 1 word
        ──────────────────────────────────────────────────────────────────
        Bit      Value       Meaning
        ──────────────────────────────────────────────────────────────────
        0        0           Removable storage medium
                1           Nonremovable storage medium
        1        0           Door lock not supported
                1           Door lock supported
        2-15     0           Reserved

        ──────────────────────────────────────────────────────────────────
        Number of cylinders field: offset 04H, length 1 word
        ──────────────────────────────────────────────────────────────────
        Meaning: Maximum number of cylinders supported; set by
                device driver

        ──────────────────────────────────────────────────────────────────
        Media type field: offset 06H, length 1 byte
        ──────────────────────────────────────────────────────────────────
        Value            Meaning
        ──────────────────────────────────────────────────────────────────
        00H (default)    1.2 MB 5.25-inch disk
        01H              320/360 KB 5.25-inch disk

        ──────────────────────────────────────────────────────────────────
        Device BPB field: offset 07H, length 31 bytes.
        ──────────────────────────────────────────────────────────────────
        Meaning: See Programmer's Note below.
        ──────────────────────────────────────────────────────────────────
        If bit 0 = 0 in special-functions field, this field contains the
        new default BPB for the device.

        If bit 0 = 1 in special-functions field, BPB in this field is
        returned by the device driver in response to subsequent Build BPB
        requests.

        ──────────────────────────────────────────────────────────────────
        Track layout field: offset 26H, variable-length table
        ──────────────────────────────────────────────────────────────────
        Length        Meaning
        ──────────────────────────────────────────────────────────────────
        Word          Number of sectors in track
        Word          Number of first sector in track
        Word          Size of first sector in track
                    .
                    .
                    .
        Word          Number of last sector in track
        Word          Size of last sector in track

    ■  The device BPB field is a 31-byte data structure. Information
        contained in the device BPB field describes the current disk and
        disk control areas. The device BPB field is formatted as follows:

╓┌─────────────────────┌─────────────────────────────────────────────────────╖
        Byte          Meaning
        ──────────────────────────────────────────────────────────────────
        00-01H        Number of bytes per sector
        02H           Number of sectors per allocation unit
        03-04H        Number of sectors reserved, beginning at sector 0
        05H           Number of file allocation tables (FATs)
        06-07H        Maximum number of root-directory entries
        08-09H        Total number of sectors
        0AH           Media descriptor
        0B-0CH        Number of sectors per FAT
        0D-0EH        Number of sectors per track
        0F-10H        Number of heads
        11-14H        Number of hidden sectors
        15-1FH        Reserved

    ■  When Set Device Parameters (minor code 40H) is used, the number of
        cylinders should not be reset--some or all of the volume may become
        inaccessible.

    ■  Subfunction 0DH minor code 60H performs the complementary action,
        Get Device Parameters.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    None

Example

    None



Interrupt 21H (33) Function 44H (68) Subfunction 0DH Minor Code 60H
IOCTL: Generic I/O Control for Block Devices: Get Device Parameters


    Function 44H Subfunction 0DH minor code 60H gets device parameters in
    the parameter block pointed to by DS:DX.

To Call

    AH      = 44H
    AL      = 0DH
    BL      = drive number (0 = default drive, 1 = drive A,
            2 = drive B, and so on)
    CH      = category code:
            = 08H    disk drive
    CL      = 60H
    DS:DX   = segment:offset of parameter block

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H      invalid function
            = 02H      invalid drive

Programmer's Notes

    ■  The parameter block is formatted as follows:

        ──────────────────────────────────────────────────────────────────
        Special-functions field: offset 00H, length 1 byte
        ──────────────────────────────────────────────────────────────────
        Bit         Value       Meaning
        ──────────────────────────────────────────────────────────────────
        0           0           Returns default BIOS parameter block (BPB)
                                for the device.
                    1           Returns BPB that the Build BPB device
                                driver call would return.
        1-7         0           Reserved (must be zero).

        ──────────────────────────────────────────────────────────────────
        Device type field: offset 01H, length 1 byte
        ──────────────────────────────────────────────────────────────────
        Value       Meaning
        ──────────────────────────────────────────────────────────────────
        00          320/360 KB 5.25-inch disk
        01          1.2 MB 5.25-inch disk
        02          720 KB 3.5-inch disk
        03          Single-density 8-inch disk
        04          Double-density 8-inch disk
        05          Fixed disk
        06          Tape drive
        07          Other type of block device

        ──────────────────────────────────────────────────────────────────
        Device attributes field: offset 02H, length 1 word
        ──────────────────────────────────────────────────────────────────
        Bit         Value       Meaning
        ──────────────────────────────────────────────────────────────────
        0           0           Removable storage medium
                    1           Nonremovable storage medium
        1           0           Door lock not supported
                    1           Door lock supported
        2-15        0           Reserved

        ──────────────────────────────────────────────────────────────────
        Number of cylinders field: offset 04H, length 1 word
        ──────────────────────────────────────────────────────────────────
        Meaning: Maximum number of cylinders supported; set by device
                driver

        ──────────────────────────────────────────────────────────────────
        Media type field: offset 06H, length 1 byte
        ──────────────────────────────────────────────────────────────────

        Value               Meaning
        ──────────────────────────────────────────────────────────────────
        00H (default)       1.2 MB 5.25-inch disk
        01H                 320/360 KB 5.25-inch disk

        ──────────────────────────────────────────────────────────────────
        Device BPB field: offset 07H, length 31 bytes
        ──────────────────────────────────────────────────────────────────
        Meaning: See Programmer's Note below.
        ──────────────────────────────────────────────────────────────────
        If bit 0 = 0 in special-functions field, this field contains the
        new default BPB for the device.

        If bit 0 = 1 in special-functions field, BPB in this field is
        returned by the device driver in response to subsequent Build BPB
        requests.

        ──────────────────────────────────────────────────────────────────
        Track layout field: offset 26H
        ──────────────────────────────────────────────────────────────────
        Unused
        ──────────────────────────────────────────────────────────────────

    ■  The device BPB field is a 31-byte data structure. Information
        contained in the device BPB field describes the current disk and
        disk control areas. The device BPB field is formatted as follows:

╓┌─────────────────────┌─────────────────────────────────────────────────────╖
        Byte          Meaning
        ──────────────────────────────────────────────────────────────────
        00-01H        Number of bytes per sector
        02H           Number of sectors per allocation unit
        03-04H        Number of sectors reserved, beginning at sector 0
        05H           Number of file allocation tables (FATs)
        06-07H        Maximum number of root-directory entries
        08-09H        Total number of sectors
        0AH           Media descriptor
        0B-0CH        Number of sectors per FAT
        0D-0EH        Number of sectors per track
        0F-10H        Number of heads
        11-14H        Number of hidden sectors
        15-1FH        Reserved


    ■  Subfunction 0DH minor code 40H performs the complementary action,
        Set Device Parameters.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    None

Example

    None



Interrupt 21H (33) Function 44H (68) Subfunction 0DH Minor Codes 41H and 61H
IOCTL: Generic I/O Control for Block Devices: Write Track on Logical Drive;
Read Track on Logical Drive


    Function 44H Subfunction 0DH minor code 41H writes a track on the
    logical drive specified in BL and minor code 61H reads a track on the
    logical drive specified in BL, using information in the parameter
    block pointed to by DS:DX.

To Call

    AH      = 44H
    AL      = 0DH
    BL      = drive number (0 = default drive, 1 = drive A, 2 = drive B,
            and so on)
    CH      = category code:
            = 08H    disk drive
    CL      = function (minor) code:
            = 41H    write a track
            = 61H    read a track
    DS:DX   = segment:offset of parameter block

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX        = error code:
            = 01H     invalid function
            = 02H     invalid drive

Programmer's Notes

    ■  The parameter block is formatted as follows:

╓┌────────────────┌────────┌─────────────────────────────────────────────────╖
        Offset   Size     Meaning
        ──────────────────────────────────────────────────────────────────
        00H      Byte     Special-functions field; must be 0.

        01H      Word     Head field; contains number of disk head used for
                        read/write.

        03H      Word     Cylinder field; contains number of disk cylinder
                        used for read/write.

        05H      Word     First-sector field; contains number of first
                        sector to read or write (first sector on track
                        = sector 0).

        07H      Word     Number-of-sectors field; contains number of
                        sectors to transfer.

        09H      Dword    Transfer address field; contains address of
                        buffer to use for data transfer.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    None

Example

    None



Interrupt 21H (33) Function 44H (68) Subfunction 0DH Minor Codes 42H and 62H
IOCTL: Generic I/O Control for Block Devices: Format and Verify Track on
Logical Drive; Verify Track on Logical Drive


    Function 44H Subfunction 0DH minor code 42H formats and verifies a
    track on the specified logical drive and minor code 62H verifies a
    track on the specified logical drive, using information in the
    parameter block pointed to by DS:DX.

To Call

    AH      = 44H
    AL      = 0DH
    BL      = drive number (0 = default drive, 1 = drive A, 2 = drive B,
            and so on)
    CH      = category code:
            = 08H    disk drive
    CL      = function (minor) code:
            = 42H    format and verify
            = 62H    verify
    DS:DX   = segment:offset of parameter block

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H      invalid function
            = 02H      invalid drive

Programmer's Notes

    ■  The parameter block is formatted as follows:

╓┌────────────────┌────────┌─────────────────────────────────────────────────╖
        Offset   Size     Meaning
        ──────────────────────────────────────────────────────────────────
        00H      Byte     Special-functions field; must be 0.

        01H      Word     Head field; contains number of disk head used for
                        format/verify.

        03H      Word     Cylinder field; contains number of cylinder used
                        for format/verify.

    ■  This driver subfunction allows the writing of generic formatting
        programs that are minimally hardware dependent.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    None

Example

    None



Interrupt 21H (33) Function 44H (68) Subfunctions 0EH and 0FH
IOCTL: Get Logical Drive Map; Set Logical Drive Map
3.2


    Function 44H Subfunction 0EH allows a process to determine whether
    more than one logical drive is assigned to a block device. Subfunction
    0FH sets the next logical drive number that will be used to reference
    a block device.

To Call

    AH   = 44H
    AL   = 0EH    get logical drive map
        = 0FH    set logical drive map
    BL   = drive number (0 = default drive, 1 = drive A, 2 = drive B,
            and so on)

Returns

    If function is successful:

    Carry flag is clear.

    AL   = mapping code:
        = 00H      only one letter assigned to the block device
        = 01-1AH   logical drive letter (A through Z) mapped to block
                    device

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 01H      invalid function
        = 0FH      invalid drive

Programmer's Notes

    ■  If a drive has not been assigned a logical mapping with Function
        44H Subfunction 0FH, the logical and physical drive references are
        the same. (The default is that logical drive A and physical drive A
        both refer to physical drive A.)

    ■  If this function is used to map logical drives to physical drives,
        the result is similar to MS-DOS's treatment of a single physical
        drive as both A and B on a system with one floppy-disk drive. With
        MS-DOS version 3.2, however, the installable device driver
        DRIVER.SYS extends this type of physical/logical referencing to
        other drives. Therefore, processes can prompt for disks themselves,
        instead of using the prompt provided by MS-DOS.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    None

Example

        ;*************************************************************;
        ;                                                             ;
        ;       Function 44H, Subfunctions 0EH, 0FH:                  ;
        ;                     IOCTL Get/Set Logical Drive Map         ;
        ;                                                             ;
        ;       int ioctl_drive_owner(setflag, drv_ltr)               ;
        ;           int setflag;                                      ;
        ;           int drv_ltr;                                      ;
        ;                                                             ;
        ;       Set setflag = 1 to change drive's map, 0 to get       ;
        ;       current map.                                          ;
        ;                                                             ;
        ;       Returns -1 for all errors, otherwise returns          ;
        ;       the block device's current logical drive letter.      ;
        ;                                                             ;
        ;*************************************************************;

cProc   ioctl_drive_owner,PUBLIC
parmB   setflag
parmB   drv_ltr
cBegin
        mov     al,setflag      ; Load setflag.
        and     al,1            ; Keep only lsb.
        add     al,0eh          ; AL = 0EH for get, 0FH for set.
        mov     bl,drv_ltr      ; Get drive letter.
        or      bl,bl           ; Leave 0 alone.
        jz      ido
        and     bl,not 20h      ; Convert letter to uppercase.
        sub     bl,'A'-1        ; Convert to drive number: 'A' = 1,
                                ; 'B' = 2, etc.
ido:
        mov     bh,0
        mov     ah,44h          ; Set function code.
        int     21h             ; Call MS-DOS.
        mov     ah,0            ; Clear high byte.
        jnc     idox            ; Branch if no error.
        mov     ax,-1-'A'       ; Return -1 for errors.
idox:
        add     ax,'A'          ; Return drive letter.
cEnd



Interrupt 21H (33) Function 45H (69)
Duplicate File Handle
2.0 and later


    Function 45H obtains an additional handle for a currently open file or
    device.

To Call

    AH   = 45H
    BX   = handle for open file or device

Returns

    If function is successful:

    Carry flag is clear.

    AX   = new handle number

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 04H      too many open files
        = 06H      invalid handle

Programmer's Notes

    ■  The file pointer for the new handle is set to the same position as
        the pointer for the original handle. Any subsequent changes to the
        file are reflected in both handles. Thus, using either handle for a
        read or write operation moves the file pointer associated with
        both.

    ■  Function 45H is often used to duplicate the handle assigned to
        standard input (0) or standard output (1) before a call to Function
        46H (Force Duplicate File Handle). The handle forced by Function
        46H can then be used for redirected input or output from or to a
        file or device.

    ■  Another use for Function 45H is to keep a file open while its
        directory entry is being updated to reflect a change in length. If
        a new handle is obtained with Function 45H and then closed with
        Function 3EH (Close File), the directory and FAT entries for the
        file are updated. At the same time, because the original handle
        remains open, the file need not be reopened for additional read or
        write operations.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Function

    46H (Force Duplicate File Handle)

Example

        ;************************************************************;
        ;                                                            ;
        ;             Function 45H: Duplicate File Handle            ;
        ;                                                            ;
        ;             int dup_handle(handle)                         ;
        ;                 int handle;                                ;
        ;                                                            ;
        ;             Returns -1 for errors,                         ;
        ;             otherwise returns new handle.                  ;
        ;                                                            ;
        ;************************************************************;

cProc   dup_handle,PUBLIC
parmW   handle
cBegin
        mov     bx,handle       ; Get handle to copy.
        mov     ah,45h          ; Set function code.
        int     21h             ; Ask MS-DOS to duplicate handle.
        jnb     dup_ok          ; Branch if copy was successful.
        mov     ax,-1           ; Else return -1.
dup_ok:
cEnd



Interrupt 21H (33) Function 46H (70)
Force Duplicate File Handle
2.0 and later


    Function 46H forces the open handle specified in CX to track the same
    file or device specified by the handle in BX.

To Call

    AH   = 46H
    BX   = open handle to be duplicated
    CX   = open handle to be forced

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 04H      too many open files
        = 06H      invalid handle

Programmer's Notes

    ■  The handle in BX must refer either to an open file or to any of the
        five standard handles reserved by MS-DOS: standard input, standard
        output, standard error, standard auxiliary, or standard printer.

    ■  If the handle in CX refers to an open file, the file is closed.

    ■  The file pointer for the duplicate handle is set to the same
        position as the pointer for the original handle. Changing the
        position of either file pointer moves the pointer associated with
        the other handle as well.

    ■  When used with Function 45H (Duplicate File Handle), Function 46H
        can be used to redirect input and output as follows:

        1. Duplicate the handle from which input or output will be
        redirected with Function 45H (Duplicate File Handle). Save
        the duplicated handle for later reference (Step 3).

        2. Call Function 46H, with the handle to be redirected from in
        the CX register and the handle to be redirected to in the BX
        register.

        3. To restore I/O redirection to its original state, call
        Function 46H again, with the redirected file handle from
        Step 2 in the CX register and the duplicated file handle from
        Step 1 in the BX register.

    This procedure is normally used to redirect a standard device, but it
    can redirect any device referenced by handles.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Function

    45H (Duplicate File Handle)

Example

        ;************************************************************;
        ;                                                            ;
        ;          Function 46H: Force Duplicate File Handle         ;
        ;                                                            ;
        ;          int dup_handle2(existhandle,newhandle)            ;
        ;              int existhandle,newhandle;                    ;
        ;                                                            ;
        ;          Returns -1 for errors,                            ;
        ;          otherwise returns newhandle unchanged.            ;
        ;                                                            ;
        ;************************************************************;

cProc   dup_handle2,PUBLIC
parmW   existhandle
parmW   newhandle
cBegin
        mov     bx,existhandle  ; Get handle of existing file.
        mov     cx,newhandle    ; Get handle to copy into.
        mov     ah,46h          ; Close handle CX and then
        int     21h             ; duplicate BX's handle into CX.
        mov     ax,newhandle    ; Prepare return value.
        jnb     dup2_ok         ; Branch if close/copy was successful.
        mov     ax,-1           ; Else return -1.
dup2_ok:
cEnd



Interrupt 21H (33) Function 47H (71)
Get Current Directory
2.0 and later


    Function 47H returns the path, excluding the drive and leading
    backslash, of the current directory for the specified drive.

To Call

    AH      = 47H
    DL      = drive number (0 = default drive, 1 = drive A,
            2 = drive B, and so on)
    DS:SI   = segment:offset of 64-byte buffer

Returns

    If function is successful:

    Carry flag is clear.

    Buffer is filled in with ASCIIZ pathname.

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 0FH      invalid drive

Programmer's Notes

    ■  The string representing the pathname is returned as a null-
        terminated ASCII string (ASCIIZ).

    ■  This function does not return an error if the buffer is too small
        or is incorrectly identified. MS-DOS pathnames can be as long as 64
        characters; if the buffer is less than 64 bytes, MS-DOS can
        overwrite sections of memory outside the buffer.

    ■  The path returned by Function 47H starts at the root directory and
        fully specifies the path to the current directory but does not
        include a drive code or a leading backslash (\) character.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Function

    3BH (Change Current Directory)

Example

        ;************************************************************;
        ;                                                            ;
        ;            Function 47H: Get Current Directory             ;
        ;                                                            ;
        ;            int get_dir(drive_ltr,pbuffer)                  ;
        ;                int drive_ltr;                              ;
        ;                char *pbuffer;                              ;
        ;                                                            ;
        ;            Returns -1 for bad drive,                       ;
        ;            otherwise returns pointer to pbuffer.           ;
        ;                                                            ;
        ;************************************************************;

cProc   get_dir,PUBLIC,<ds,si>
parmB   drive_ltr
parmDP  pbuffer
cBegin
        loadDP  ds,si,pbuffer   ; Get pointer to buffer.
        mov     dl,drive_ltr    ; Get drive number.
        or      dl,dl           ; Leave 0 alone.
        jz      gdir
        and     dl,not 20h      ; Convert letter to uppercase
        sub     dl,'A'-1        ; Convert to drive number: 'A' = 1,
                                ; 'B' = 2, etc.
gdir:
        mov     ah,47h          ; Set function code.
        int     21h             ; Call MS-DOS.
        mov     ax,si           ; Return pointer to buffer ...
        jnb     gd_ok
        mov     ax,-1           ; ... unless an error occurred.
gd_ok:
cEnd



Interrupt 21H (33) Function 48H (72)
Allocate Memory Block
2.0 and later


    Function 48H allocates a block of memory, in paragraphs (1 paragraph
    = 16 bytes), to the requesting process.

To Call

    AH   = 48H
    BX   = number of paragraphs to allocate

Returns

    If function is successful:

    Carry flag is clear.

    AX   = segment address of base of allocated block

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 07H      memory control blocks damaged
        = 08H      insufficient memory to allocate as requested
    BX   = size of largest available block (paragraphs)

Programmer's Notes

    ■  If the allocation succeeds, the address returned in AX is the
        segment of the base of the block. This address would be copied to a
        segment register (usually DS or ES) to access the memory within the
        block.

    ■  If the amount of memory requested is greater than the amount in any
        available contiguous block of memory, the number of paragraphs in
        the largest available memory block is returned in the BX register.

    ■  The default memory-management strategy in MS-DOS is to choose the
        first contiguous block of memory that fits the request, no matter
        how good the fit. With MS-DOS versions 3.0 and later, however, the
        memory-management strategy can be altered with Function 58H
        (Get/Set Allocation Strategy).

    ■  If a process actively allocates and frees blocks of memory, the
        transient program area (TPA) can become fragmented--that is, small
        blocks of memory can be orphaned because the memory-management
        strategy seeks contiguous blocks of memory.

    ■  If a process writes to memory outside the limits of the allocated
        block, it can destroy control structures for other memory blocks.
        This could result in failure of subsequent memory-management
        functions, and it will cause MS-DOS to print an error message and
        halt when the process terminates.

    ■  Initially, the MS-DOS loader allocates all available memory to .COM
        programs. Function 4AH (Resize Memory Block) can free memory for
        dynamic reallocation by a process or by its children.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    49H (Free Memory Block)
    4AH (Resize Memory Block)
    58H (Get/Set Allocation Strategy)

Example

        ;************************************************************;
        ;                                                            ;
        ;         Function 48H: Allocate Memory Block                ;
        ;                                                            ;
        ;         int get_block(nparas,pblocksegp,pmaxparas)         ;
        ;             int nparas,*pblockseg,*pmaxparas;              ;
        ;                                                            ;
        ;         Returns 0 if nparas are allocated OK and           ;
        ;         pblockseg has segment address of block,            ;
        ;         otherwise returns error code with pmaxparas        ;
        ;         set to maximum block size available.               ;
        ;                                                            ;
        ;************************************************************;

cProc   get_block,PUBLIC,ds
parmW   nparas
parmDP  pblockseg
parmDP  pmaxparas
cBegin
        mov     bx,nparas       ; Get size request.
        mov     ah,48h          ; Set function code.
        int     21h             ; Ask MS-DOS for memory.
        mov     cx,bx           ; Save BX.
        loadDP  ds,bx,pmaxparas
        mov     [bx],cx         ; Return result, assuming failure.
        jb      gb_err          ; Exit if error, leaving error code
                                ; in AX.
        loadDP  ds,bx,pblockseg
        mov     [bx],ax         ; No error, so store address of block.
        xor     ax,ax           ; Return 0.
gb_err:
cEnd



Interrupt 21H (33) Function 49H (73)
Free Memory Block
2.0 and later


    Function 49H releases a block of memory previously allocated with
    Function 48H (Allocate Memory Block).

To Call

    AH   = 49H
    ES   = segment address of memory block to release

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 07H    memory control blocks damaged
        = 09H    incorrect memory segment specified

Programmer's Notes

    ■  The memory segment pointed to by ES:0000H must have been allocated
        by Function 48H (Allocate Memory Block).

    ■  If a program has inadvertently damaged any of the system's memory
        control blocks by writing outside an allocated block, an attempt to
        free allocated memory results in error code 07H (memory control
        blocks damaged).

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    48H (Allocate Memory Block)
    4AH (Resize Memory Block)
    58H (Get/Set Allocation Strategy)

Example

        ;************************************************************;
        ;                                                            ;
        ;               Function 49H: Free Memory Block              ;
        ;                                                            ;
        ;               int free_block(blockseg)                     ;
        ;                   int blockseg;                            ;
        ;                                                            ;
        ;               Returns 0 if block freed OK,                 ;
        ;               otherwise returns error code.                ;
        ;                                                            ;
        ;************************************************************;

cProc   free_block,PUBLIC
parmW   blockseg
cBegin
        mov     es,blockseg     ; Get block address.
        mov     ah,49h          ; Set function code.
        int     21h             ; Ask MS-DOS to free memory.
        jb      fb_err          ; Branch on error.
        xor     ax,ax           ; Return 0 if successful.
fb_err:
cEnd



Interrupt 21H (33) Function 4AH (74)
Resize Memory Block
2.0 and later


    Function 4AH adjusts the size of a previously allocated block of
    memory.

To Call

    AH   = 4AH
    BX   = new size of memory block, in paragraphs
    ES   = segment address of previously allocated memory block

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 07H      memory control blocks damaged
        = 08H      insufficient memory to allocate as requested
        = 09H      incorrect memory segment specified
    BX   = maximum number of paragraphs available (if an increase was
            requested)

Programmer's Notes

    ■  Function 4AH can be used to change the size of a memory block
        previously allocated with Function 48H (Allocate Memory Block) or
        to modify the amount of memory originally allocated to a process by
        MS-DOS.

    ■  If a process is denied an increase in the amount of memory it has
        been allocated, MS-DOS places the size of the largest contiguous
        block available in the BX register. The process can then notify the
        user of the problem and exit, or it can continue to operate in a
        reduced memory environment.

    ■  Because the MS-DOS loader allocates all available memory to .COM
        programs, such a program should use Function 4AH immediately (with
        the segment address of its program segment prefix, or PSP) to
        release any memory that is not needed. This is mandatory if the
        .COM program will either allocate memory dynamically or use
        Function 4BH (Load and Execute Program) to load a child process or
        overlay.

        In addition, if Function 4AH is used to adjust the amount of memory
        allocated to a .COM program, the stack pointer must be adjusted so
        that it is within the limits of the program's revised memory
        allocation.

    ■  If this function is used to shrink an allocated block, any memory
        above the new limit is not owned by the process and should never be
        used. If this function is used to expand an allocated block, the
        contents of memory above the old boundary are unpredictable and the
        memory should be initialized before use.

    ■  Although it is not possible to predict how much memory-resident
        software and how many installable device drivers will be used on a
        computer system, Function 4AH can reliably determine the amount of
        memory available to an application.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    48H (Allocate Memory Block)
    49H (Free Memory Block)
    58H (Get/Set Allocation Strategy)

Example

        ;************************************************************;
        ;                                                            ;
        ;         Function 4AH: Resize Memory Block                  ;
        ;                                                            ;
        ;         int modify_block(nparas,blockseg,pmaxparas)        ;
        ;             int nparas,blockseg,*pmaxparas;                ;
        ;                                                            ;
        ;         Returns 0 if modification was a success,           ;
        ;         otherwise returns error code with pmaxparas        ;
        ;         set to max number of paragraphs available.         ;
        ;                                                            ;
        ;************************************************************;

cProc   modify_block,PUBLIC,ds
parmW   nparas
parmW   blockseg
parmDP  pmaxparas
cBegin
        mov     es,blockseg     ; Get block address.
        mov     bx,nparas       ; Get nparas.
        mov     ah,4ah          ; Set function code.
        int     21h             ; Ask MS-DOS to change block size.
        mov     cx,bx           ; Save BX.
        loadDP  ds,bx,pmaxparas
        mov     [bx],cx         ; Set pmaxparas, assuming failure.
        jb      mb_exit         ; Branch if size change error.
        xor     ax,ax           ; Return 0 if successful.
mb_exit:
cEnd



Interrupt 21H (33) Function 4BH (75)
Load and Execute Program (EXEC)
2.0 and later


    Function 4BH, often called EXEC, loads a program file into memory and,
    optionally, executes the program. This function can also be used to
    load a program overlay.

To Call

    AH      = 4BH
    AL      = 00H    load and execute program
            = 03H    load overlay
    DS:DX   = segment:offset of ASCIIZ pathname for an executable
            program file
    ES:BX   = segment:offset of parameter block

Returns

    If function is successful:

    Carry flag is clear.

    With MS-DOS versions 2.x, all registers except CS and IP can be
    destroyed; with MS-DOS versions 3.x, registers are preserved.

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H    invalid function (AL did not contain 00H or 03H)
            = 02H    file not found
            = 03H    path not found
            = 05H    access denied
            = 08H    insufficient memory
            = 0AH    bad environment
            = 0BH    bad format (AL = 00H only)

Programmer's Notes

    ■  The pathname must be a null-terminated ASCII string (ASCIIZ).

    ■  The handles for any files opened by the parent process before the
        call to Function 4BH are inherited by the child process, unless the
        parent specified otherwise in calling Function 3DH (Open File with
        Handle).

        All standard devices also remain open and available to the child
        process. Thus, the parent process can control the files used by the
        child process and control redirection for the child process.

    ■  If AL = 00H, the parameter block is 14 bytes long and formatted in
        four parts, as follows:

╓┌──────────────┌────────────┌───────────────────────────────────────────────╖
        Offset Length       Meaning
        ──────────────────────────────────────────────────────────────────
        00H    Word         Segment address of environment to be passed;
                            00H indicates child program inherits
                            environment of the current process.

        02H    Dword        Segment:offset address of command tail for the
                            new program segment prefix (PSP). Command tail
                            must be 128 bytes or fewer and formatted as a
                            count byte followed by an ASCII string and
                            terminated by a carriage return, as follows:

                            db     7,'a:mydoc',0Dh

                            The carriage return is not included in the
                            count; the command tail is placed at offset
                            80H in the new process's PSP.

        06H    Dword        Segment:offset address of an FCB to be copied
                            to the default FCB position at offset 5CH in
                            the new process's PSP.

        0AH    Dword        Segment:offset address of an FCB to be copied
                            to the default FCB position at offset 6CH in
                            the new process's PSP.

        If AL = 03H, the parameter block is 4 bytes long and formatted in
        two parts, as follows:

╓┌──────────────┌─────────┌──────────────────────────────────────────────────╖
        Offset Length    Meaning
        ──────────────────────────────────────────────────────────────────
        00H    Word      Segment address where the overlay is to be loaded.

        02H    Word      Relocation factor to be applied to the code image
                        (.EXE files only); not needed if the file is a
                        .COM program or is data.

    ■  The first 2 bytes of the parameter block for Function 4BH
        Subfunction 00H contain either the segment address for an
        environment block to be passed to the new process or zero. If the
        value is zero, the child process inherits an exact copy of the
        parent process's environment.

        The environment block must be aligned on a paragraph boundary (a
        multiple of 16 bytes). It can be as large as 32 KB, and it consists
        of a block of ASCIIZ strings, each in the following form:

        parameter=value

        For example:

        db     'VERIFY=ON',0

        The final string in the environment block is followed by a second
        zero byte. With MS-DOS versions 3.0 and later, the second zero is
        followed by a word containing a count and an ASCIIZ string
        containing the drive and pathname of the program file.

        The environment passed to the child process allows the parent
        process to send it messages regarding the system state or control
        parameters. The pathname included with MS-DOS versions 3.0 and
        later enables the child process to determine where it was loaded
        from.

    ■  If AL = 00H, MS-DOS creates a PSP for the new process and sets the
        terminate and Control-C addresses to the instruction in the parent
        process that follows the call to Function 4BH. If AL = 03H, no PSP
        is created.

    ■  Before AL = 00H is used to load and execute a process, the system
        must contain enough free memory to accommodate the new process.
        Function 4AH (Resize Memory Block) should be used, if necessary, to
        reduce the amount of memory allocated to the parent process. If the
        parent is a .COM program, allocated memory must be reduced, because
        a .COM program is given ownership of all available memory when it
        is executed.

        If Function 4BH is called with AL = 03H, free memory is not a
        factor, because MS-DOS assumes the new process is being loaded into
        the calling process's own address space.

    ■  If Function 4BH is called with AL = 00H, the child process remains
        in control until it executes an exit request, such as Function 4CH
        (Terminate Process with Return Code), or until Control-C or
        Control-Break is received or a critical error occurs and the user
        responds Abort to the Abort, Retry, Ignore? message.

    ■  With MS-DOS versions 2.x, SS and SP must be saved in the current
        code segment before Function 4BH is invoked with AL = 00H. When the
        parent process regains control, all registers other than CS:IP and
        the stack will most likely have been changed by loading and
        executing the child process.

    ■  Function 4BH with AL = 03H is useful for loading program overlays
        or for loading data to be used by the parent process (if that data
        requires relocation).

    ■  If the child process that is executed attempts to remain resident
        through either Interrupt 27H or Interrupt 21H Function 31H
        (Terminate and Stay Resident), system memory becomes permanently
        fragmented and subsequent processes can fail because of lack of
        memory.

    ■  The EXEC function (with AL = 00H) is commonly used to load a new
        copy of COMMAND.COM and then execute an MS-DOS command from within
        another program.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    31H (Terminate and Stay Resident)
    4CH (Terminate Process with Return Code)
    4DH (Get Return Code of Child Process)

Examples

        ;************************************************************;
        ;                                                            ;
        ;          Function 4BH: Load and Execute Program            ;
        ;                                                            ;
        ;          int execute(pprogname,pcmdtail)                   ;
        ;              char *pprogname,*pcmdtail;                    ;
        ;                                                            ;
        ;          Returns 0 if program loaded, ran, and             ;
        ;          terminated successfully, otherwise returns        ;
        ;          error code.                                       ;
        ;                                                            ;
        ;************************************************************;

sBegin  data
$cmdlen =     126
$cmd    db    $cmdlen+2 dup (?) ; Make space for command line, plus
                                ; 2 extra bytes for length and
                                ; carriage return.

$fcb    db      0               ; Make dummy FCB.
        db      'dummy   fcb'
        db      0,0,0,0

                                ; Here's the EXEC parameter block:
$epb    dw      0               ; 0 means inherit environment.
        dw      dataOFFSET $cmd ; Pointer to cmd line.
        dw      seg dgroup
        dw      dataOFFSET $fcb ; Pointer to FCB #1.
        dw      seg dgroup
        dw      dataOFFSET $fcb ; Pointer to FCB #2.
        dw      seg dgroup
sEnd    data
sBegin  code

$sp     dw      ?               ; Allocate space in code seg
$ss     dw      ?               ; for saving SS and SP.

Assumes ES,dgroup

cProc   execute,PUBLIC,<ds,si,di>
parmDP  pprogname
parmDP  pcmdtail
cBegin
        mov     cx,$cmdlen      ; Allow command line this long.
        loadDP  ds,si,pcmdtail  ; DS:SI = pointer to cmdtail string.

        mov     ax,seg dgroup:$cmd    ; Set ES = data segment.
        mov     es,ax
        mov     di,dataOFFSET $cmd+1  ; ES:DI = pointer to 2nd byte of
                                    ; our command-line buffer.
copycmd:
        lodsb                   ; Get next character.
        or      al,al           ; Found end of command tail?
        jz      endcopy         ; Exit loop if so.
        stosb                   ; Copy to command buffer.
        loop    copycmd
endcopy:
        mov     al,13
        stosb                   ; Store carriage return at
                                ; end of command.
        neg     cl
        add     cl,$cmdlen      ; CL = length of command tail.
        mov     es:$cmd,cl      ; Store length in command-tail buffer.

        loadDP  ds,dx,pprogname ; DS:DX = pointer to program name.
        mov     bx,dataOFFSET $epb ; ES:BX = pointer to parameter
                                ; block.

        mov     cs:$ss,ss       ; Save current stack SS:SP (because
        mov     cs:$sp,sp       ; EXEC function destroys stack).
        mov     ax,4b00h        ; Set function code.
        int     21h             ; Ask MS-DOS to load and execute
                                ; program.
        cli                     ; Disable interrupts.
        mov     ss,cs:$ss       ; Restore stack.
        mov     sp,cs:$sp
        sti                     ; Enable interrupts.
        jb      ex_err          ; Branch on error.
        xor     ax,ax           ; Return 0 if no error.
ex_err:
cEnd
sEnd    code



        ;************************************************************;
        ;                                                            ;
        ;   Function 4BH: Load an Overlay Program                    ;
        ;                                                            ;
        ;   int load_overlay(pfilename,loadseg)                      ;
        ;       char *pfilename;                                     ;
        ;       int  loadseg;                                        ;
        ;                                                            ;
        ;   Returns 0 if program has been loaded OK,                 ;
        ;   otherwise returns error code.                            ;
        ;                                                            ;
        ;   To call an overlay function after it has been            ;
        ;   loaded by load_overlay(), you can use                    ;
        ;   a far indirect call:                                     ;
        ;                                                            ;
        ;   1. FTYPE (far *ovlptr)();                                ;
        ;   2. *((unsigned *)&ovlptr + 1) = loadseg;                 ;
        ;   3. *((unsigned *)&ovlptr) = offset;                      ;
        ;   4. (*ovlptr)(arg1,arg2,arg3,...);                        ;
        ;                                                            ;
        ;   Line 1 declares a far pointer to a                       ;
        ;   function with return type FTYPE.                         ;
        ;                                                            ;
        ;   Line 2 stores loadseg into the segment                   ;
        ;   portion (high word) of the far pointer.                  ;
        ;                                                            ;
        ;   Line 3 stores offset into the offset                     ;
        ;   portion (low word) of the far pointer.                   ;
        ;                                                            ;
        ;   Line 4 does a far call to offset                         ;
        ;   bytes into the segment loadseg                           ;
        ;   passing the arguments listed.                            ;
        ;                                                            ;
        ;   To return correctly, the overlay  must end with a far    ;
        ;   return instruction.  If the overlay is                   ;
        ;   written in Microsoft C, this can be done by              ;
        ;   declaring the overlay function with the                  ;
        ;   keyword "far".                                           ;
        ;                                                            ;
        ;************************************************************;

sBegin  data
                                ; The overlay parameter block:
$lob    dw      ?               ; space for load segment;
        dw      ?               ; space for fixup segment.
sEnd    data

sBegin  code

cProc   load_overlay,PUBLIC,<ds,si,di>
parmDP  pfilename
parmW   loadseg
cBegin
        loadDP  ds,dx,pfilename ; DS:DX = pointer to program name.
        mov     ax,seg dgroup:$lob ; Set ES = data segment.
        mov     es,ax
        mov     bx,dataOFFSET $lob ; ES:BX = pointer to parameter
                                ; block.
        mov     ax,loadseg      ; Get load segment parameter.
        mov     es:[bx],ax      ; Set both the load and fixup
        mov     es:[bx+2],ax    ; segments to that segment.

        mov     cs:$ss,ss       ; Save current stack SS:SP (because
        mov     cs:$sp,sp       ; EXEC function destroys stack).
        mov     ax,4b03h        ; Set function code.
        int     21h             ; Ask MS-DOS to load the overlay.
        cli                     ; Disable interrupts.

        mov     ss,cs:$ss       ; Restore stack.
        mov     sp,cs:$sp
        sti                     ; Enable interrupts.
        jb      lo_err          ; Branch on error.
        xor     ax,ax           ; Return 0 if no error.
lo_err:
cEnd
sEnd    code



Interrupt 21H (33) Function 4CH (76)
Terminate Process with Return Code
2.0 and later


    Function 4CH terminates the current process with a return code and
    returns control to the calling (parent) process.

To Call

    AH   = 4CH
    AL   = return code

Returns

    Nothing

Programmer's Notes

    ■  When a process is terminated with Function 4CH, MS-DOS restores the
        termination-handler (Interrupt 22H), Control-C handler (Interrupt
        23H), and critical error handler (Interrupt 24H) addresses from the
        program segment prefix, or PSP (offsets 0AH, 0EH, and 12H). MS-DOS
        also flushes the file buffers to disk, updates the disk directory,
        closes all files with open handles belonging to the terminated
        process, and then transfers control to the termination-handler
        address.

    ■  On termination with Function 4CH, all memory owned by the process
        is freed.

    ■  Function 4CH is the recommended method for terminating all
        processes--particularly sizable .EXE files--that do not stay
        resident. This function should be used in preference to the other
        termination methods (Interrupt 20H, Interrupt 21H Function 00H,
        near RET for .COM files, or a jump to PSP:0000H). Memory-resident
        programs should be terminated with Function 31H (Terminate and Stay
        Resident).

    ■  A return code of 00H is customarily used to indicate that the
        process executed successfully; a nonzero return code is used to
        indicate that the process terminated because of an error or lack of
        resources--for example, the file could not be opened, the process
        could not be allocated sufficient memory, and so on.

    ■  If the terminated process was invoked by a command line or batch
        file, ckntrol returns to COMMAND.COM and the transient portion of
        the command interpreter is reloaded, if necessary. If a batch file
        was in progress, execution continues with the next line of the file
        and the return code can be tested with an IF ERRORLEVEL statement.
        Otherwise, the command prompt is issued.

        If the terminated process was loaded by a process other than
        COMMAND.COM, the parent process can retrieve the child's return
        code with Function 4DH (Get Return Code of Child Process).

    ■  In a networking environment running under MS-DOS version 3.1 or
        later, all file locks should be removed by the process before it
        calls Function 4CH to terminate.

Related Functions

    00H (Terminate Process)
    31H (Terminate and Stay Resident)
    4DH (Get Return Code of Child Process)

Example

        ;************************************************************;
        ;                                                            ;
        ;       Function 4CH: Terminate Process with Return Code     ;
        ;                                                            ;
        ;       int terminate(returncode)                            ;
        ;           int returncode;                                  ;
        ;                                                            ;
        ;       Does NOT return at all!                              ;
        ;                                                            ;
        ;************************************************************;

cProc   terminate,PUBLIC
parmB   returncode
cBegin
        mov     al,returncode   ; Set return code.
        mov     ah,4ch          ; Set function code.
        int     21h             ; Call MS-DOS to terminate process.
cEnd



Interrupt 21H (33) Function 4DH (77)
Get Return Code of Child Process
2.0 and later


    Function 4DH retrieves the return code of a child process that was
    invoked with Function 4BH (Load and Execute Program) and terminated
    with either Function 31H (Terminate and Stay Resident) or Function 4CH
    (Terminate Process with Return Code).

To Call

    AH   = 4DH

Returns

    AH   = termination method:
        = 00H    normal termination (Interrupt 20H, or Interrupt 21H
                Function 00H or Function 4CH)
        = 01H    terminated by entry of Control-C
        = 02H    terminated by critical error handler (for example, user
                responded Abort to Abort, Retry, Ignore? prompt)
        = 03H    terminated and stayed resident (Interrupt 27H or
                Interrupt 21H Function 31H)
    AL   = return code passed by child process

    If terminated with Interrupt 20H, Interrupt 21H Function 00H, or
    Interrupt 27H:

    AL   = 00H

Programmer's Notes

    ■  Function 4DH can be used only once to retrieve the return code of a
        terminated process. Subsequent calls do not yield meaningful
        results.

    ■  Function 4DH does not set the carry flag to indicate an error. If
        no previous child process exists, the information returned in AH
        and AL is undefined.

Related Functions

    31H (Terminate and Stay Resident)
    4CH (Terminate Process with Return Code)

Example

        ;************************************************************;
        ;                                                            ;
        ;        Function 4DH: Get Return Code of Child Process      ;
        ;                                                            ;
        ;        int child_ret_code()                                ;
        ;                                                            ;
        ;        Returns the return code of the last                 ;
        ;        child process.                                      ;
        ;                                                            ;
        ;************************************************************;

cProc   child_ret_code,PUBLIC
cBegin
        mov     ah,4dh          ; Set function code.
        int     21h             ; Ask MS-DOS to return code.
        cbw                     ; Convert AL to a word.
cEnd



Interrupt 21H (33) Function 4EH (78)
Find First File
2.0 and later


    Function 4EH searches the specified directory for the first matching
    entry.

To Call

    AH      = 4EH
    CX      = attribute word
    DS:DX   = segment:offset of ASCIIZ pathname

Returns

    If function is successful:

    Carry flag is clear.

    Current disk transfer area (DTA) contains the following information
    about the file:

╓┌────────────────┌───────────────┌──────────────────────────────────────────╖
    Offset      Length (bytes)  Value
    ──────────────────────────────────────────────────────────────────────
    00H         21              Reserved for use by MS-DOS in subsequent
                                call to Function 4FH (Find Next File)

    15H         1               File attribute

    16H         2               Time of last write

    18H         2               Date of last write

    1AH         2               Low word of file size

    1CH         2               High word of file size

    1EH         13              Filename and extension in ASCIIZ form with
                                blanks removed and period inserted between
                                filename and extension

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 02H    file not found
            = 03H    path not found
            = 12H    no more files; no match found

Programmer's Notes

    ■  The pathname must be a null-terminated ASCII string (ASCIIZ).

    ■  The filename and extension portions of the pathname can contain the
        MS-DOS wildcards ? (match any character) and * (match all remaining
        characters).

    ■  The DTA should be set with Function 1AH (Set DTA Address) before
        Function 4EH is called. If no DTA address is set, MS-DOS uses a
        default 128-byte buffer at offset 80H in the program segment prefix
        (PSP).

    ■  The attribute word in CX controls the search as follows:

        - If the attribute word is 00H, only normal files are included in
        the search.

        - If the attribute word has any combination of bits 1, 2, and 4
        (hidden, system, and subdirectory bits) set, the search includes
        normal files as well as files with any of the attributes
        specified.

        - If the attribute word has bit 3 set (volume-label bit), only a
        matching volume label is returned.

        - Bits 0 and 5 (read-only and archive bits) are ignored by
        Function 4EH.

    ■  If Function 4FH (Find Next File) is used in conjunction with
        Function 4EH, the DTA must be preserved, because the first 21 bytes
        contain information needed by Function 4FH.

    ■  The time at which the file was last written is returned as a binary
        value in a word formatted as follows:


╓┌──────────────┌────────────────────────────────────────────────────────────╖
        Bits   Meaning
        ──────────────────────────────────────────────────────────────────
        0-4    Number of seconds divided by 2
        5-10   Minutes (0 through 59)
        11-15  Hours, based on a 24-hour clock (0 through 23)

    ■  The date on which the file was last written is returned as a binary
        value in a word formatted as follows:

╓┌──────────────┌────────────────────────────────────────────────────────────╖
        Bits   Meaning
        ──────────────────────────────────────────────────────────────────
        0-4    Day of the month
        5-8    Month (1 = January, 2 = February, 3 = March, and so on)
        9-15   Number of the year minus 1980

    ■  Function 4EH is preferred to Function 11H (Find First File) because
        it fully supports pathnames.

    ■  Function 59H (Get Extended Error Information ) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    11H (Find First File)
    12H (Find Next File)
    1AH (Set DTA Address)
    4FH (Find Next File)

Example

        ;************************************************************;
        ;                                                            ;
        ;               Function 4EH: Find First File                ;
        ;                                                            ;
        ;               int find_first(ppathname,attr)               ;
        ;                   char *ppathname;                         ;
        ;                   int  attr;                               ;
        ;                                                            ;
        ;               Returns 0 if a match was found,              ;
        ;               otherwise returns error code.                ;
        ;                                                            ;
        ;************************************************************;

cProc   find_first,PUBLIC,ds
parmDP  ppathname
parmW   attr
cBegin
        loadDP  ds,dx,ppathname ; Get pointer to pathname.
        mov     cx,attr         ; Get search attributes.
        mov     ah,4eh          ; Set function code.
        int     21h             ; Ask MS-DOS to look for a match.
        jb      ff_err          ; Branch on error.
        xor     ax,ax           ; Return 0 if no error.
ff_err:
cEnd



Interrupt 21H (33) Function 4FH (79)
Find Next File
2.0 and later


    Function 4FH continues a search initiated by a previously successful
    call to Function 4EH (Find First File). The search is based on the
    pathname and attributes specified in the call to Function 4EH and uses
    information left in the current disk transfer area (DTA) by the call
    to Function 4EH or by a preceding call to Function 4FH.

To Call

    AH   = 4FH

    DTA contains information from prior search with Function 4EH or
    Function 4FH.

Returns

    If function is successful:

    Carry flag is clear.

    DTA is filled in as for a call to Function 4EH:

╓┌───────────────┌─────────────────┌─────────────────────────────────────────╖
    Offset     Length (bytes)    Value
    ─────────────────────────────────────────────────────────────────────
    00H        21                Reserved for use by MS-DOS in subsequent
                                call to Function 4FH
    15H         1                File attribute
    16H         2                Time of last write
    18H         2                Date of last write
    1AH         2                Low word of file size
    1CH         2                High word of file size
    1EH        13                Filename and extension in ASCIIZ form
                                with blanks removed and period inserted
                                between filename and extension

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 12H    no more files, no match found, or no previous call
                to Function 4EH

Programmer's Notes

    ■  If multiple calls to Function 4FH are used to find more than one
        matching file, the DTA setting (Function 1AH) and contents must be
        preserved because they provide information needed for continuing
        the search.

    ■  The time at which the file was last written is returned as a binary
        value in a word formatted as follows:

╓┌──────────────┌────────────────────────────────────────────────────────────╖
        Bits   Meaning
        ──────────────────────────────────────────────────────────────────
        0-4    Number of seconds divided by 2
        5-10   Minutes (0 through 59)
        11-15  Hours, based on a 24-hour clock (0 through 23)

    ■  The date on which the file was last written is returned as a binary
        value in a word formatted as follows:

╓┌──────────────┌────────────────────────────────────────────────────────────╖
        Bits   Meaning
        ──────────────────────────────────────────────────────────────────
        0-4    Day of the month
        5-8    Month (1 = January, 2 = February, 3 = March, and so on)
        9-15   Number of the year minus 1980

    ■  Function 4FH is preferred to Function 12H (Find Next File) because
        it fully supports pathnames.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    11H (Find First File)
    12H (Find Next File)
    1AH (Set DTA Address)
    4EH (Find First File)

Example

        ;************************************************************;
        ;                                                            ;
        ;               Function 4FH: Find Next File                 ;
        ;                                                            ;
        ;               int find_next()                              ;
        ;                                                            ;
        ;               Returns 0 if a match was found,              ;
        ;               otherwise returns error code.                ;
        ;                                                            ;
        ;************************************************************;

cProc   find_next,PUBLIC
cBegin
        mov     ah,4fh          ; Set function code.
        int     21h             ; Ask MS-DOS to look for the next
                                ; matching file.
        jb      fn_err          ; Branch on error.
        xor     ax,ax           ; Return 0 if no error.
fn_err:
cEnd



Interrupt 21H (33) Function 54H (84)
Get Verify Flag
2.0 and later


    Function 54H returns the current value of the MS-DOS verify flag.

To Call

    AH   = 54H

Returns

    AL   = verify flag:
        = 00H    verify off; no read after write operation
        = 01H    verify on; read after write operation

Programmer's Notes

    ■  The default state of the verify flag is 00H (off).

    ■  The state of the verify flag can be changed either through a call
        to Function 2EH (Set/Reset Verify Flag) or by the user with the
        VERIFY ON and VERIFY OFF commands.

Related Function

    Function 2EH (Set/Reset Verify Flag)

Example

        ;************************************************************;
        ;                                                            ;
        ;            Function 54H: Get Verify Flag                   ;
        ;                                                            ;
        ;            int get_verify()                                ;
        ;                                                            ;
        ;            Returns current value of verify flag.           ;
        ;                                                            ;
        ;************************************************************;

cProc   get_verify,PUBLIC
cBegin
        mov     ah,54h          ; Set function code.
        int     21h             ; Read flag from MS-DOS.
        cbw                     ; Clear high byte of return value.

cEnd



Interrupt 21H (33) Function 56H (86)
Rename File
2.0 and later


    Function 56H renames a file and/or moves it to a new location in the
    hierarchical directory structure.

To Call

    AH      = 56H
    DS:DX   = segment:offset of existing ASCIIZ pathname for file
    ES:DI   = segment:offset of new ASCIIZ pathname for file

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 02H    file not found
            = 03H    path not found
            = 05H    access denied
            = 11H    not the same device

Programmer's Notes

    ■  The pathnames must be null-terminated ASCII strings (ASCIIZ).

    ■  The directory paths specified in DS:DX and ES:DI need not be
        identical. Thus, specifying different directory paths effectively
        moves a file from one directory to another.

    ■  Function 56H cannot be used to move a file to a different drive.
        Both the existing pathname and the new one must either contain the
        same drive identifier or default to the same drive.

    ■  If Function 56H returns error code 05H, the cause can be any of the
        following:

        - The new pathname would move the file to the root directory, but
        the root directory is full.

        - A file with the new pathname already exists.

        - The user is on a network and has insufficient access to either
        the existing file or the new subdirectory.

    ■  Unlike Function 17H (Rename File), Function 56H does not support
        the use of MS-DOS wildcard characters (? and *).

    ■  Function 56H should not be used to rename open files. An open file
        should be closed with Function 10H (Close File with FCB) or 3EH
        (Close File) before Function 56H is called to rename it.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Function

    17H (Rename File)

Example

        ;************************************************************;
        ;                                                            ;
        ;                Function 56H: Rename File                   ;
        ;                                                            ;
        ;                int rename(poldpath,pnewpath)               ;
        ;                    char *poldpath,*pnewpath;               ;
        ;                                                            ;
        ;                Returns 0 if file moved OK,                 ;
        ;                otherwise returns error code.               ;
        ;                                                            ;
        ;************************************************************;

cProc   rename,PUBLIC,<ds,di>
parmDP  poldpath
parmDP  pnewpath
cBegin
        loadDP  es,di,pnewpath  ; ES:DI = pointer to newpath.
        loadDP  ds,dx,poldpath  ; DS:DX = pointer to oldpath.
        mov     ah,56h          ; Set function code.
        int     21h             ; Ask MS-DOS to rename file.
        jb      rn_err          ; Branch on error.
        xor     ax,ax           ; Return 0 if no error.
rn_err:
cEnd



Interrupt 21H (33) Function 57H (87)
Get/Set Date/Time of File
2.0 and later


    Function 57H retrieves or sets the date and time of a file's directory
    entry.

To Call

    AH   = 57H
    AL   = 00H    get date and time
        = 01H    set date and time
    BX   = handle number

    If AL = 01H:

    CX   = time; binary value formatted as follows:

╓┌──────────────────────┌────────────────────────────────────────────────────╖
            Bits       Meaning
            ──────────────────────────────────────────────────────────────
            0-4        Number of seconds divided by 2
            5-10       Minutes (0 through 59)
            11-15      Hours, based on a 24-hour clock (0 through 23)

    DX   = date; binary value formatted as follows:

╓┌──────────────────────┌────────────────────────────────────────────────────╖
            Bits       Meaning
            ──────────────────────────────────────────────────────────────
            0-4        Day of the month (1 through 31)
            5-8        Month (1 = January, 2 = February, 3 = March,
                    and so on)
            9-15       Year minus 1980

Returns

    If function is successful:

    Carry flag is clear.

    If AL was 00H on call:

    CX   = time file was last modified; format as described above
    DX   = date file was last modified; format as described above

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 01H    invalid function (AL not 00H or 01H)
        = 06H    invalid handle

Programmer's Notes

    ■  Before the date and time in a file's directory entry can be
        retrieved or changed with Function 57H, a handle must be obtained
        by opening or creating the file using one of the following
        functions:

        - 3CH (Create File with Handle)

        - 3DH (Open File with Handle)

        - 5AH (Create Temporary File)

        - 5BH (Create New File)

    ■  Use of Function 57H to retrieve the date and time of a file is
        preferable to examining the fields of an open FCB directly.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    2AH (Get Date)
    2BH (Set Date)
    2CH (Get Time)
    2DH (Set Time)

Example

        ;************************************************************;
        ;                                                            ;
        ;      Function 57H: Get/Set Date/Time of File               ;
        ;                                                            ;
        ;      long file_date_time(handle,func,packdate,packtime)    ;
        ;           int handle,func,packdate,packtime;               ;
        ;                                                            ;
        ;      Returns a long -1 for all errors, otherwise packs     ;
        ;      date and time into a long integer,                    ;
        ;      date in high word, time in low word.                  ;
        ;                                                            ;
        ;************************************************************;

cProc   file_date_time,PUBLIC
parmW   handle
parmB   func
parmW   packdate
parmW   packtime
cBegin
        mov     bx,handle       ; Get handle.
        mov     al,func         ; Get function: 0 = read, 1 = write.
        mov     dx,packdate     ; Get date (if present).
        mov     cx,packtime     ; Get time (if present).
        mov     ah,57h          ; Set function code.
        int     21h             ; Call MS-DOS.

        mov     ax,cx           ; Set DX:AX = date/time, assuming no
                                ; error.
        jnb     dt_ok           ; Branch if no error.
        mov     ax,-1           ; Return -1 for errors.
        cwd                     ; Extend the -1 into DX.
dt_ok:
cEnd



Interrupt 21H (33) Function 58H (88)
Get/Set Allocation Strategy
3.0 and later


    Function 58H retrieves or sets the method MS-DOS uses to allocate
    memory blocks for a process that issues a memory-allocation request.

To Call

    AH   = 58H
    AL   = 00H    get allocation strategy
        = 01H    set allocation strategy

    If AL = 01H:

    BX   = allocation strategy:
        = 00H    use first (lowest available) block that fits
        = 01H    use block that fits best
        = 02H    use last (highest available) block that fits

Returns

    If function is successful:

    Carry flag is clear.

    If AL was 00H on call:

    AX   = allocation-strategy code:
        = 00H    first fit
        = 01H    best fit
        = 02H    last fit

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 01H    invalid function (AL not 00H or 01H)

Programmer's Notes

    ■  Allocation strategies determine how MS-DOS finds and allocates a
        block of memory to an application that issues a memory-allocation
        request with either Function 48H (Allocate Memory Block) or
        Function 4AH (Resize Memory Block).

        The three strategies are carried out as follows:

        - First fit (the default): MS-DOS works upward from the lowest
        available block and allocates the first block it encounters that
        is large enough to satisfy the request for memory. This strategy
        is followed consistently, even if the block allocated is much
        larger than required.

        - Best fit: MS-DOS searches all available memory blocks and then
        allocates the smallest block that satisfies the request,
        regardless of its location in the empty-block chain. This
        strategy maximizes the use of dynamically allocated memory at a
        slight cost in speed of allocation.

        - Last fit (the reverse of first fit): MS-DOS works downward from
        the highest available block and allocates the first block it
        encounters that is large enough to satisfy the request for
        memory. This strategy is followed consistently, even if the block
        allocated is much larger than required.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    48H (Allocate Memory Block)
    4AH (Resize Memory Block)

Example

        ;************************************************************;
        ;                                                            ;
        ;          Function 58H: Get/Set Allocation Strategy         ;
        ;                                                            ;
        ;          int alloc_strategy(func,strategy)                 ;
        ;              int func,strategy;                            ;
        ;                                                            ;
        ;          Strategies:                                       ;
        ;                  0: First fit                              ;
        ;                  1: Best fit                               ;
        ;                  2: Last fit                               ;
        ;                                                            ;
        ;          Returns -1 for all errors, otherwise              ;
        ;          returns the current strategy.                     ;
        ;                                                            ;
        ;************************************************************;

cProc   alloc_strategy,PUBLIC
parmB   func
parmW   strategy
cBegin
        mov     al,func         ; AL = get/set selector.
        mov     bx,strategy     ; BX = new strategy (for AL = 01H).
        mov     ah,58h          ; Set function code.
        int     21h             ; Call MS-DOS.
        jnb     no_err          ; Branch if no error.
        mov     ax,-1           ; Return -1 for all errors.
no_err:
cEnd



Interrupt 21H (33) Function 59H (89)
Get Extended Error Information
3.0 and later


    Function 59H returns extended error information, including a suggested
    response, for the function call immediately preceding it.

To Call

    AH   = 59H
    BX   = 00H

Returns

    AX   = extended error code:
        = 00H    no error encountered
        = 01H    invalid function number
        = 02H    file not found
        = 03H    path not found
        = 04H    too many files open; no handles available
        = 05H    access denied
        = 06H    invalid handle
        = 07H    memory control blocks destroyed
        = 08H    insufficient memory
        = 09H    invalid memory-block address
        = 0AH    invalid environment
        = 0BH    invalid format
        = 0CH    invalid access code
        = 0DH    invalid data
        = 0EH    reserved
        = 0FH    invalid disk drive
        = 10H    attempt to remove current directory
        = 11H    device not the same
        = 12H    no more files
        = 13H    write-protected disk
        = 14H    unknown unit
        = 15H    drive not ready
        = 16H    invalid command
        = 17H    data error based on cyclic redundancy check (CRC)
        = 18H    length of request structure invalid
        = 19H    seek error
        = 1AH    non-MS-DOS disk
        = 1BH    sector not found
        = 1CH    printer out of paper
        = 1DH    write fault
        = 1EH    read fault
        = 1FH    general failure
        = 20H    sharing violation
        = 21H    lock violation
        = 22H    invalid disk change
        = 23H    FCB unavailable
        = 24H    sharing buffer exceeded
        = 25-31H reserved
        = 32H    unsupported network request
        = 33H    remote machine not listening
        = 34H    duplicate name on network
        = 35H    network name not found
        = 36H    network busy
        = 37H    device no longer exists on network
        = 38H    net BIOS command limit exceeded
        = 39H    error in network adapter hardware
        = 3AH    incorrect response from network
        = 3BH    unexpected network error
        = 3CH    remote adapt incompatible
        = 3DH    print queue full
        = 3EH    queue not full
        = 3FH    not enough room for print file
        = 40H    network name deleted
        = 41H    access denied
        = 42H    incorrect network device type
        = 43H    network name not found
        = 44H    network name limit exceeded
        = 45H    net BIOS session limit exceeded
        = 46H    temporary pause
        = 47H    network request not accepted
        = 48H    print or disk redirection paused
        = 49-4FH reserved
        = 50H    file already exists
        = 51H    reserved
        = 52H    cannot make directory
        = 53H    failure on Interrupt 24H (critical error)
        = 54H    out of structures
        = 55H    already assigned
        = 56H    invalid password
        = 57H    invalid parameter
        = 58H    net write fault
    BH   = error class
        = 01H    out of resource (such as storage)
        = 02H    temporary situation, expected to end; not an error
        = 03H    authorization problem
        = 04H    internal error in system software
        = 05H    hardware failure
        = 06H    system-software failure, such as missing or
                incorrect configuration files; not the fault of the
                active process
        = 07H    application-program error
        = 08H    file or item not found
        = 09H    file or item of invalid format or type or otherwise
                unsuitable
        = 0AH    file or item interlocked
        = 0BH    drive contains wrong disk, disk has bad spot, or other
                problem with storage medium
        = 0CH    already exists
        = 0DH    unknown
    BL   = suggested action:
        = 01H    perform a reasonable number of retries before
                prompting user to choose Abort or Ignore in response
                to error message
        = 02H    perform a reasonable number of retries, with pauses
                between, before prompting user to choose Abort or
                Ignore in response to error message
        = 03H    prompt user to enter corrected information, such as
                drive letter or filename
        = 04H    clean up and exit application
        = 05H    exit immediately without cleanup
        = 06H    ignore; informational error
        = 07H    prompt user to remove cause of error (for example,
                change disks) and then retry
    CH   = location of error:
        = 01H    unknown
        = 02H    block device
        = 03H    network
        = 04H    serial device
        = 05H    memory related

Programmer's Notes

    ■  The extended error codes returned by Function 59H correspond to the
        error values returned in AX by functions in MS-DOS versions 2.0 and
        later that set the carry flag on error. Versions 2.x of MS-DOS,
        however, provide a smaller set of error codes (01H through 12H)
        than do later versions.

        Thus, although Function 59H itself is not available in versions of
        MS-DOS earlier than 3.0, the matching of error codes to earlier
        versions helps ensure downward compatibility. Function 59H was also
        designed to be open-ended so that additional error codes could be
        incorporated as needed. As a result, processes should remain
        flexible in their use of this function and should not rely on a
        fixed set of code numbers for error detection.

    ■  Function 59H is useful in the following situations:

        - When MS-DOS encounters a hardware-related error condition and
        shifts control to an Interrupt 24H handler that has been created
        by the programmer

        - When a handle-related function sets the carry flag to indicate an
        error or when an FCB-related function indicates an error by
        returning 0FFH in the AL register

    ■  If a function call results in an error, Function 59H returns
        meaningful information only if it is the next call to MS-DOS. An
        intervening call to another MS-DOS function, whether explicit or
        indirect, causes the error value for the unsuccessful function to
        be lost.

    ■  Unlike most MS-DOS functions, Function 59H alters some registers
        that are not used to return results: CL, DX, SI, DI, ES, and DS.
        These registers must be preserved before a call to Function 59H if
        their contents are needed later.

Related Functions

    None

Example

        ;************************************************************;
        ;                                                            ;
        ;         Function 59H: Get Extended Error Information       ;
        ;                                                            ;
        ;         int extended_error(err,class,action,locus)         ;
        ;             int *err;                                      ;
        ;             char *class,*action,*locus;                    ;
        ;                                                            ;
        ;         Return value is same as err.                       ;
        ;                                                            ;
        ;************************************************************;

cProc   extended_error,PUBLIC,<ds,si,di>
parmDP  perr
parmDP  pclass
parmDP  paction
parmDP  plocus
cBegin
        push    ds              ; Save DS.
        xor     bx,bx
        mov     ah,59h          ; Set function code.
        int     21h             ; Request error info from MS-DOS.
        pop     ds              ; Restore DS.
        loadDP  ds,si,perr      ; Get pointer to err.
        mov     [si],ax         ; Store err.
        loadDP  ds,si,pclass    ; Get pointer to class.
        mov     [si],bh         ; Store class.
        loadDP  ds,si,paction   ; Get pointer to action.
        mov     [si],bl         ; Store action.
        loadDP  ds,si,plocus    ; Get pointer to locus.
        mov     [si],ch         ; Store locus.
cEnd



Interrupt 21H (33) Function 5AH (90)
Create Temporary File
3.0 and later


    Function 5AH uses the system clock to create a unique filename,
    appends the filename to the specified path, opens the temporary file,
    and returns a file handle that can be used for subsequent file
    operations.

To Call

    AH      = 5AH
    CX      = file attribute:
            = 00H    normal file
            = 01H    read-only file
            = 02H    hidden file
            = 04H    system file
    DS:DX   = segment:offset of ASCIIZ path, ending with a backslash
            character (\) and followed by 13 bytes of memory (to
            receive the generated filename)

Returns

    If function is successful:

    Carry flag is clear.

    AX      = handle
    DS:DX   = segment:offset of full pathname for temporary file

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 03H    path not found
            = 04H    too many open files; no handle available
            = 05H    access denied

Programmer's Notes

    ■  Only the drive and path to use for the new file should be specified
        in the buffer pointed to by DS:DX. The function appends an eight-
        character filename that is generated from the system time.

    ■  Function 5AH is valuable in such situations as print spooling on a
        network, where temporary files are created by many users.

    ■  The input string representing the path for the temporary file must
        be a null-terminated ASCII string (ASCIIZ).

    ■  In networking environments running under MS-DOS version 3.1 or
        later, MS-DOS opens the temporary file in compatibility mode.

    ■  MS-DOS does not delete temporary files; applications must do this
        for themselves.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    16H (Create File with FCB)
    3CH (Create File with Handle)
    5BH (Create New File)

Example

        ;************************************************************;
        ;                                                            ;
        ;             Function 5AH: Create Temporary File            ;
        ;                                                            ;
        ;             int create_temp(ppathname,attr)                ;
        ;                 char *ppathname;                           ;
        ;                 int attr;                                  ;
        ;                                                            ;
        ;             Returns -1 if file was not created,            ;
        ;             otherwise returns file handle.                 ;
        ;                                                            ;
        ;************************************************************;

cProc   create_temp,PUBLIC,ds
parmDP  ppathname
parmW   attr
cBegin
        loadDP  ds,dx,ppathname ; Get pointer to pathname.
        mov     cx,attr         ; Set function code.
        mov     ah,5ah          ; Ask MS-DOS to make a new file with
                                ; a unique name.
        int     21h             ; Ask MS-DOS to make a tmp file.
        jnb     ct_ok           ; Branch if MS-DOS returned handle.
        mov     ax,-1           ; Else return -1.
ct_ok:
cEnd



Interrupt 21H (33) Function 5BH (91)
Create New File
3.0 and later


    Function 5BH creates a new file with the specified pathname. This
    function operates like Function 3CH (Create File with Handle) but
    fails if the pathname references a file that already exists.

To Call

    AH      = 5BH
    CX      = file attribute:
            = 00H    normal file
            = 01H    read-only file
            = 02H    hidden file
            = 04H    system file
    DS:DX   = segment:offset of ASCIIZ pathname

Returns

    If function is successful:

    Carry flag is clear.

    AX      = handle

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 03H      path not found
            = 04H      too many open files; no handle available
            = 05H      access denied
            = 50H      file already exists

Programmer's Notes

    ■  The pathname must be a null-terminated ASCII string (ASCIIZ).

    ■  In networking environments running under MS-DOS version 3.1 or
        later, the file is opened in compatibility mode. Function 5BH
        fails, however, if the user does not have Create access to the
        directory that is to contain the file.

    ■  Function 5BH can be used to implement semaphores in the form of
        files across a local area network or in a multitasking environment.
        If the function succeeds, the semaphore has been acquired. To
        release the semaphore, the application simply deletes the
        file.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    16H (Create File with FCB)
    3CH (Create File with Handle)
    5AH (Create Temporary File)

Example

        ;************************************************************;
        ;                                                            ;
        ;          Function 5BH: Create New File                     ;
        ;                                                            ;
        ;          int create_new(ppathname,attr)                    ;
        ;              char *ppathname;                              ;
        ;              int attr;                                     ;
        ;                                                            ;
        ;          Returns -2 if file already exists,                ;
        ;                  -1 for all other errors,                  ;
        ;                  otherwise returns file handle.            ;
        ;                                                            ;
        ;************************************************************;

cProc   create_new,PUBLIC,ds
parmDP  ppathname
parmW   attr
cBegin
        loadDP  ds,dx,ppathname ; Get pointer to pathname.
        mov     cx,attr         ; Get new file's attribute.
        mov     ah,5bh          ; Set function code.
        int     21h             ; Ask MS-DOS to make a new file.
        jnb     cn_ok           ; Branch if MS-DOS returned handle.
        mov     bx,-2
        cmp     al,80           ; Did file already exist?
        jz      ae_err          ; Branch if so.
        inc     bx              ; Change -2 to -1.
ae_err:
        mov     ax,bx           ; Return error code.
cn_ok:
cEnd



Interrupt 21H (33) Function 5CH (92)
Lock/Unlock File Region
3.0 and later


    Function 5CH enables a process running in a networking or multitasking
    environment to lock or unlock a range of bytes in an open file.

To Call

    AH      = 5CH
    AL      = 00H    lock region
            = 01H    unlock region
    BX      = handle
    CX:DX   = 4-byte integer specifying beginning of region to be
            locked or unlocked (offset in bytes from beginning of file)
    SI:DI   = 4-byte integer specifying length of region (measured in
            bytes)

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H    invalid function (AL not 00H or 01H or file sharing
                    not loaded)
            = 06H    invalid handle
            = 21H    lock violation
            = 24H    sharing buffer exceeded

Programmer's Notes

    ■  A process that either closes a file containing a locked region or
        terminates with the file open leaves the file in an undefined
        state. Under either condition, MS-DOS might handle the file
        erratically. If the process can be terminated by Interrupt 23H
        (Control-C) or 24H (critical error), these interrupts should be
        trapped so that any locked regions in files can be unlocked before
        the process terminates.

    ■  Locking a portion of a file with Function 5CH denies all other
        processes both read and write access to the specified region of the
        file. This restriction also applies when open file handles are
        passed to a child process with Function 4BH (Load and Execute
        Program). Duplicate file handles created with Function 45H
        (Duplicate File Handle) and 46H (Force Duplicate File Handle),
        however, are allowed access to locked regions of a file within the
        current process.

    ■  Locking a region that goes beyond the end of a file does not cause
        an error.

    ■  Function 5CH is useful primarily in ensuring that competing
        programs or processes do not interfere while a record is being
        updated. Locking at the file level is provided by the sharing
        parameter in Function 3DH (Open File with Handle).

    ■  Function 5CH can also be used to check the lock status of a file.
        If an attempt to lock a needed portion of a file fails and error
        code 21H is returned in the AX register, the region is already
        locked by another process.

    ■  Any region locked with a call to Function 5CH must also be
        unlocked, and the same 4-byte integer values must be used for each
        operation. Two adjacent regions of a file cannot be locked
        separately and then be unlocked with a single unlock call. If the
        region to unlock does not correspond exactly to a locked region,
        Function 5CH returns error code 21H.

    ■  The length of time needed to hold locks can be minimized with the
        transaction-oriented programming model. This concept requires
        defining and performing an update in a uniform manner: Assert lock,
        read data, change data, remove lock.

    ■  If file sharing is not loaded, an application receives a 01H
        (function number invalid) error status when it attempts to lock a
        file. An immediate call to Function 59H returns the error locus as
        an unknown or a serial device.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    45H (Duplicate File Handle)
    46H (Force Duplicate File Handle)
    4BH (Load and Execute Program) [EXEC]

Example

        ;************************************************************;
        ;                                                            ;
        ;            Function 5CH: Lock/Unlock File Region           ;
        ;                                                            ;
        ;            int locks(handle,onoff,start,length)            ;
        ;                int handle,onoff;                           ;
        ;                long start,length;                          ;
        ;                                                            ;
        ;            Returns 0 if operation was successful,          ;
        ;            otherwise returns error code.                   ;
        ;                                                            ;
        ;************************************************************;

cProc   locks,PUBLIC,<si,di>
parmW   handle
parmB   onoff
parmD   start
parmD   length

cBegin
        mov     al,onoff        ; Get lock/unlock flag.
        mov     bx,handle       ; Get file handle.
        les     dx,start        ; Get low word of start.
        mov     cx,es           ; Get high word of start.
        les     di,length       ; Get low word of length.
        mov     si,es           ; Get high word of length.
        mov     ah,5ch          ; Set function code.
        int     21h             ; Make lock/unlock request.
        jb      lk_err          ; Branch on error.
        xor     ax,ax           ; Return 0 if no error.
lk_err:
cEnd



Interrupt 21H (33) Function 5EH (94) Subfunction 00H
Network Machine Name/Printer Setup: Get Machine Name
3.1 and later


    If Microsoft Networks is running, Function 5EH Subfunction 00H
    retrieves the network name of the local computer.

To Call

    AH      = 5EH
    AL      = 00H
    DS:DX   = segment:offset of 16-byte buffer

Returns

    If function is successful:

    Carry flag is clear.

    CH      = validity of machine name:
            = 00H      invalid
            = nonzero  valid
    CL      = NETBIOS number assigned to machine name
    DS:DX   = segment:offset of ASCIIZ machine name

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H      invalid function; Microsoft Networks not running

Programmer's Notes

    ■  The NETBIOS number in CL and the name at DS:DX are valid only if
        the value returned in CH is nonzero.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Function

    5FH (Get/Make Assign List Entry)

Example

    None



Interrupt 21H (33) Function 5EH (94) Subfunctions 02H and 03H
Network Machine Name/Printer Setup: Set Printer Setup; Get Printer Setup
3.1 and later


    Function 5EH Subfunctions 02H and 03H respectively set and get the
    setup string that MS-DOS adds to the beginning of a file sent to a
    network printer.

To Call

    AH      = 5EH
    AL      = 02H    set printer setup string
            = 03H    get printer setup string
    BX      = assign-list index number (obtained with Function 5FH
            Subfunction 02H)

    If AL = 02H:

    CX      = length of setup string in bytes (64 bytes maximum)
    DS:SI   = segment:offset of ASCII setup string

    If AL = 03H:

    ES:DI   = segment:offset of 64-byte buffer to receive string

Returns

    If function is successful:

    Carry flag is clear.

    If AL was 03H on call:

    CX      = length of printer setup string in bytes
    ES:DI   = segment:offset of ASCII printer setup string

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H      invalid subfunction

Programmer's Notes

    ■  Function 5EH Subfunctions 02H and 03H enable multiple users on a
        network to configure a shared printer as required. The assign-list
        number is an index to a table that identifies the printer as a
        device on the network. A process can determine the assign-list
        number for the printer by using Function 5FH Subfunction 02H (Get
        Assign-List Entry).

    ■  Error code 01H in the AX register may indicate either that
        Microsoft Networks is not running or that an invalid subfunction
        was selected.

    ■  Function 59H (Get Extended Error Information)
        provides further information on any error--in particular, the code,
        class, recommended corrective action, and locus of the error.

Related Function

    5FH (Get/Make Assign-List Entry)

Example

        ;************************************************************;
        ;                                                            ;
        ;       Function 5EH Subfunction 02H:                        ;
        ;                     Set Printer Setup                      ;
        ;                                                            ;
        ;       int printer_setup(index,pstring,len)                 ;
        ;           int   index;                                     ;
        ;           char *pstring;                                   ;
        ;           int   len;                                       ;
        ;                                                            ;
        ;       Returns 0, otherwise returns -1 for all errors.      ;
        ;                                                            ;
        ;************************************************************;

cProc   printer_setup,PUBLIC,<ds,si>
parmW   index
parmDP  pstring
parmW   len
cBegin
        mov     bx,index        ; BX = index of a net printer.
        loadDP  ds,si,pstring   ; DS:SI = pointer to string.
        mov     cx,len          ; CX = length of string.
        mov     ax,5e02h        ; Set function code.
        int     21h             ; Set printer prefix string.
        mov     al,0            ; Assume no error.
        jnb     ps_ok           ; Branch if no error,
        mov     al,-1           ; Else return -1.
ps_ok:
        cbw
cEnd



Interrupt 21H (33) Function 5FH (95) Subfunction 02H
Get/Make Assign-List Entry: Get Assign-List Entry
3.1 and later


    Function 5FH Subfunction 02H obtains the local and remote (network)
    names of a device. To find the names, MS-DOS uses the device's user-
    assigned index number (set with Function 5FH Subfunction 03H) to
    search a table of redirected devices on the network. Microsoft
    Networks must be running with file sharing loaded for this subfunction
    to operate successfully.

To Call

    AH      = 5FH
    AL      = 02H
    BX      = assign-list index number
    DS:SI   = segment:offset of 16-byte buffer for local (device) name
    ES:DI   = segment:offset of 128-byte buffer to receive remote
            (network) name

Returns

    If function is successful:

    Carry flag is clear.

    BH      = device status:
            = 00H    valid device
            = 01H    invalid device
    BL      = device type:
            = 03H    printer
            = 04H    drive
    CX      = user data
    DS:SI   = segment:offset of ASCIIZ string representing local
            device name
    ES:DI   = segment:offset of ASCIIZ string representing network
            name

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H    invalid function or Microsoft Networks not running
            = 12H    no more files

Programmer's Notes

    ■  All strings returned by this subfunction are null-terminated ASCII
        strings (ASCIIZ).

    ■  A successful call to this subfunction destroys the contents of the
        DX and BP registers.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Function

    5EH Subfunction 00H (Get Machine Name)

Example

        ;************************************************************;
        ;                                                            ;
        ;    Function 5FH Subfunction 02H:                           ;
        ;                  Get Assign-List Entry                     ;
        ;                                                            ;
        ;    int get_alist_entry(index,                              ;
        ;           plocalname,premotename,                          ;
        ;           puservalue,ptype)                                ;
        ;        int  index;                                         ;
        ;        char *plocalname;                                   ;
        ;        char *premotename;                                  ;
        ;        int  *puservalue;                                   ;
        ;        int  *ptype;                                        ;
        ;                                                            ;
        ;    Returns 0 if the requested assign-list entry is found,  ;
        ;    otherwise returns error code.                           ;
        ;                                                            ;
        ;************************************************************;

cProc   get_alist_entry,PUBLIC,<ds,si,di>
parmW   index
parmDP  plocalname
parmDP  premotename
parmDP  puservalue
parmDP  ptype
cBegin
        mov     bx,index        ; Get list index.
        loadDP  ds,si,plocalname  ; DS:SI = pointer to local name
                                ; buffer.
        loadDP  es,di,premotename ; ES:DI = pointer to remote name
                                ; buffer.
        mov     ax,5f02h        ; Set function code.
        int     21h             ; Get assign-list entry.
        jb      ga_err          ; Exit on error.
        xor     ax,ax           ; Else return 0.
        loadDP  ds,si,puservalue ; Get address of uservalue.
        mov     [si],cx         ; Store user value.
        loadDP  ds,si,ptype     ; Get address of type.
        mov     bh,0
        mov     [si],bx         ; Store device type to type.
ga_err:
cEnd



Interrupt 21H (33) Function 5FH (95) Subfunction 03H
Get/Make Assign-List Entry: Make Assign-List Entry
3.1 and later


    Function 5FH Subfunction 03H redirects a local printer or disk drive
    to a network device and establishes an assign-list index number for
    the redirected device. Microsoft Networks must be running with file
    sharing loaded for this subfunction to operate successfully.

To Call

    AH      = 5FH
    AL      = 03H
    BL      = device type:
            = 03H    printer
            = 04H    drive
    CX      = user data
    DS:SI   = segment:offset of 16-byte ASCIIZ local device name
    ES:DI   = segment:offset of 128-byte ASCIIZ remote (network)
            device name and password in the form

            machine name\pathname,null,password,null

            For example:

            string  db      '\\mymach\wp',0,'blibbet',0

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 01H    invalid function or Microsoft Networks not running
        = 03H    path not found
        = 05H    access denied
        = 08H    insufficient memory
        = 0FH    redirection paused on server
        = 12H    no more files

Programmer's Notes

    ■  The strings used by this subfunction must be null-terminated ASCII
        strings (ASCIIZ). The ASCIIZ string pointed to by ES:DI (the
        destination, or remote, device) cannot be more than 128 bytes
        including the password, which can be a maximum of 8 characters. If
        the password is omitted, the pathname must be followed by 2 null
        bytes.

    ■  If BL = 03H, the string pointed to by DS:SI must be one of the
        following printer names: PRN, LPT1, LPT2, or LPT3. If the call is
        successful, output is redirected to a network print spooler, which
        must be named in the destination string. For printer redirection,
        MS-NET intercepts Interrupt 17H (BIOS Printer I/O). When
        redirection for a printer is canceled, all printing is sent to the
        first local printer (LPT1).

        If BL = 04H, the string pointed to by DS:SI can be a drive letter
        followed by a colon, such as E:, or it can be a null string. If the
        string represents a valid drive, a successful call redirects drive
        requests to the network directory named in the destination string.
        If DS:SI points to a null string, MS-DOS attempts to provide access
        to the network directory named in the destination string without
        redirecting any device.

    ■  Only printer and disk devices are supported in MS-DOS versions 3.1
        and later. COM1 and COM2 are not supported for network redirection,
        nor are the standard output or standard error devices
        supported.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Function

    5EH Subfunction 00H (Get Machine Name)

Example

        ;************************************************************;
        ;                                                            ;
        ;    Function 5FH Subfunction 03H:                           ;
        ;                  Make Assign-List Entry                    ;
        ;    int add_alist_entry(psrcname,pdestname,uservalue,type)  ;
        ;        char *psrcname,*pdestname;                          ;
        ;        int  uservalue,type;                                ;
        ;                                                            ;
        ;    Returns 0 if new assign-list entry is made, otherwise   ;
        ;    returns error code.                                     ;
        ;                                                            ;
        ;************************************************************;

cProc   add_alist_entry,PUBLIC,<ds,si,di>
parmDP  psrcname
parmDP  pdestname
parmW   uservalue
parmW   type
cBegin
        mov     bx,type         ; Get device type.
        mov     cx,uservalue    ; Get uservalue.
        loadDP  ds,si,psrcname  ; DS:SI = pointer to source name.
        loadDP  es,di,pdestname ; ES:DI = pointer to destination name.
        mov     ax,5f03h        ; Set function code.
        int     21h             ; Make assign-list entry.
        jb      aa_err          ; Exit if there was some error.
        xor     ax,ax           ; Else return 0.
aa_err:
cEnd



Interrupt 21H (33) Function 5FH (95) Subfunction 04H
Get/Make Assign-List Entry: Cancel Assign-List Entry
3.1 and later


    Function 5FH Subfunction 04H cancels the redirection of a local device
    to a network device previously established with Function 5FH
    Subfunction 03H (Make Assign-List Entry). Microsoft Networks must be
    running with file sharing loaded for this subfunction to operate
    successfully.

To Call

    AH      = 5FH
    AL      = 04H
    DS:SI   = segment:offset of ASCIIZ device name or path

Returns

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX   = error code:
        = 01H      invalid function or Microsoft Networks not running
        = 03H      path not found
        = 05H      access denied
        = 08H      insufficient memory
        = 0FH      redirection paused on server
        = 12H      no more files

Programmer's Notes

    ■  The string pointed to by DS:SI must be a null-terminated ASCII
        string (ASCIIZ). This string can be any one of the following:

        -  The letter, followed by a colon, of a redirected local drive.
        This function restores the drive letter to its original,
        physical meaning.

        -  The name of a redirected printer: PRN, LPT1, LPT2, LPT3, or its
        machine-specific equivalent. This function restores the printer
        name to its original, physical meaning at the local workstation.

        -  A string, beginning with two backslashes (\\) followed by
        the name of a network directory. This function terminates the
        connection between the local workstation and the directory
        specified in the string.

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Function

        5EH Subfunction 00H (Get Machine Name)

Example

        ;************************************************************;
        ;                                                            ;
        ;    Function 5FH Subfunction 04H:                           ;
        ;                  Cancel Assign-List Entry                  ;
        ;                                                            ;
        ;    int cancel_alist_entry(psrcname)                        ;
        ;        char *psrcname;                                     ;
        ;                                                            ;
        ;    Returns 0 if assignment is canceled, otherwise returns  ;
        ;    error code.                                             ;
        ;                                                            ;
        ;************************************************************;

cProc   cancel_alist_entry,PUBLIC,<ds,si>
parmDP  psrcname
cBegin
        loadDP  ds,si,psrcname  ; DS:SI = pointer to source name.
        mov     ax,5f04h        ; Set function code.
        int     21h             ; Cancel assign-list entry.
        jb      ca_err          ; Exit on error.
        xor     ax,ax           ; Else return 0.
ca_err:
cEnd



Interrupt 21H (33) Function 62H (98)
Get Program Segment Prefix Address
3.0 and later


    Function 62H gets the segment address of the program segment prefix
    (PSP) for the current process.

To Call

    AH   = 62H

Returns

    BX   = segment address of PSP for current process

Programmer's Notes

    ■  The PSP is constructed by MS-DOS at the base of the memory
        allocated for a .COM or .EXE program being loaded into memory by
        the EXEC function, 4BH (Load and Execute Program). The PSP is 100H
        bytes and contains information useful to an executing program,
        including

        - The command tail

        - Default file control blocks (FCBs)

        - A pointer to the program's environment block

        - Previous addresses for MS-DOS Control-C, critical error, and
        terminate handlers

    ■  Function 59H (Get Extended Error Information) provides further
        information on any error--in particular, the code, class,
        recommended corrective action, and locus of the error.

Related Functions

    None

Example

        ;************************************************************;
        ;                                                            ;
        ;       Function 62H: Get Program Segment Prefix Address     ;
        ;                                                            ;
        ;       int get_psp()                                        ;
        ;                                                            ;
        ;       Returns PSP segment.                                 ;
        ;                                                            ;
        ;************************************************************;

cProc   get_psp,PUBLIC
cBegin
        mov     ah,62h          ; Set function code.
        int     21h             ; Get PSP address.
        mov     ax,bx           ; Return it in AX.
cEnd



Interrupt 21H (33) Function 63H (99)
Get Lead Byte Table
2.25


    Function 63H, available only in MS-DOS version 2.25, includes three
    subfunctions that support 2-byte-per-character alphabets such as Kanji
    and Hangeul (Japanese and Korean characters sets). Subfunction 00H
    obtains the address of the legal lead byte ranges for the character
    sets; Subfunctions 01H and 02H set or obtain the value of the interim
    console flag, which determines whether interim characters are returned
    by certain console system calls.

To Call

    AH      = 63H
    AL      = 00H    get lead byte table address
            = 01H    set or clear interim console flag
            = 02H    get interim console flag

    If AL = 01H:

    DL      = interim console flag:
            = 00H    clear
            = 01H    set

Returns

    If function is successful:

    Carry flag is clear.

    If AL was 00H on call:

    DS:SI   = segment:offset of lead byte table

    If AL was 02H on call:

    DL      = value of interim console flag

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H      invalid function

Programmer's Notes

    ■  Function 63H does not necessarily preserve any registers other than
        SS:SP, so register values should be saved before a call to this
        function. To avoid saving registers repeatedly, a process can
        either copy the table or save the pointer to the table for later
        use.

    ■  The lead byte table contains pairs of bytes that represent the
        inclusive boundary values for the lead bytes of the specified
        alphabet. Because of the way bytes are ordered by the 8086
        microprocessor family, the values must be read as byte values, not
        as word values.

    ■  If the interim console flag is set (DL = 01H) by a program through
        a call to Function 63H, the following functions return interim
        character information on request:

        - 07H (Character Input Without Echo)

        - 08H (Unfiltered Character Input Without Echo)

        - 0BH (Check Keyboard Status)

        - 0CH (Flush Buffer, Read Keyboard), if Function 07H or 08H is
        requested in AL

Related Functions

    None

Example

        ;************************************************************;
        ;                                                            ;
        ;   Function 63H: Get Lead Byte Table                        ;
        ;                                                            ;
        ;   char far *get_lead_byte_table()                          ;
        ;                                                            ;
        ;   Returns far pointer to table of lead bytes for multibyte ;
        ;   characters.  Will work only in MS-DOS 2.25!              ;
        ;                                                            ;
        ;************************************************************;

cProc   get_lead_byte_table,PUBLIC,<ds,si>
cBegin
        mov     ax,6300h        ; Set function code.
        int     21h             ; Get lead byte table.
        mov     dx,ds           ; Return far pointer in DX:AX.
        mov     ax,si
cEnd



Interrupt 22H (34)
Terminate Routine Address
1.0 and later


    The machine interrupt vector for Interrupt 22H (memory locations
    0000:0088H through 0000:008BH) contains the address of the routine
    that receives control when the currently executing program terminates
    by means of Interrupt 20H, Interrupt 27H, or Interrupt 21H Function
    00H, 31H, or 4CH.

To Call

    This interrupt should never be issued directly.

Returns

    Nothing

Programmer's Note

    ■  The address in this vector is copied into offsets 0AH through 0DH
        of the program segment prefix (PSP) when a program is loaded but
        before it begins executing. The address is restored from the PSP
        (in case it was modified by the application) as part of MS-DOS's
        termination handling.

Example

    None



Interrupt 23H (35)
Control-C Handler Address
1.0 and later


    The machine interrupt vector for Interrupt 23H (memory locations
    0000:008CH through 0000:008FH) contains the address of the routine
    that receives control when a Control-C (also Control-Break on IBM PC
    compatibles) is detected during any character I/O function and, if the
    Break flag is on, during most other MS-DOS function calls.

To Call

    This interrupt should never be issued directly.

Returns

    Nothing

Programmer's Notes

    ■  The address in this vector is copied into offsets 0EH through 11H
        of the program segment prefix (PSP) when a program is loaded but
        before it begins executing. The address is restored from the PSP
        (in case it was modified by the application) as part of MS-DOS's
        termination handling.

    ■  The initialization code for an application can use Interrupt 21H
        Function 25H (Set Interrupt Vector) to reset the Interrupt 23H
        vector to point to its own routine for Control-C handling. By
        installing its own Control-C handler, the program can avoid being
        terminated as a result of keyboard entry of a Control-C or Control-
        Break.

    ■  When a Control-C is detected and the program's Interrupt 23H
        handler receives control, MS-DOS sets all registers to the original
        values they had when the function call that is being interrupted
        was made. The program's interrupt handler can then do any of the
        following:

        -  Set a local flag for later inspection by the application (or
        take any other appropriate action) and then perform a return
        from interrupt (IRET) to return control to MS-DOS. (All
        registers must be preserved.) The MS-DOS function in progress is
        then restarted and proceeds to completion, and control finally
        returns to the application in the normal manner.

        -  Take appropriate action and then perform a far return (RET FAR)
        to give control back to MS-DOS. MS-DOS uses the state of the
        carry flag to determine what action to take: If the carry flag
        is set, the application is terminated; if the carry flag is
        clear, the application continues in the normal manner.

        -  Retain control by transferring to an error-handling routine
        within the application and then resume execution or take other
        appropriate action, never performing a RET FAR or IRET to end
        the interrupt-handling sequence. This option causes no harm to
        the system.

    ■  Any MS-DOS function call can be used within the body of an
        Interrupt 23H handler.

Example

    None



Interrupt 24H (36)
Critical Error Handler Address
1.0 and later


    The machine interrupt vector for Interrupt 24H (memory locations
    0000:0090H through 0000:0093H) contains the address of the routine
    that receives control when a critical error (usually a hardware error)
    is detected.

To Call

    This interrupt should never be issued directly.

Returns

    Nothing

Programmer's Notes

    ■  The address of this vector is copied into offsets 12H through 15H
        of the program segment prefix (PSP) when a program is loaded but
        before it begins executing. The address is restored from the PSP
        (in case it was modified by the application) as part of MS-DOS's
        termination handling.

    ■  On entry to the critical error interrupt handler, bit 7 of register
        AH is clear (0) if the error was a disk I/O error; otherwise, it is
        set (1). BP:SI contains the address of a device-header control
        block from which additional information can be obtained. Interrupts
        are disabled. MS-DOS sets up the registers for a retry operation
        and one of the following error codes is in the lower byte of the DI
        register (the upper byte is undefined):

╓┌────────────────┌──────────────────────────────────────────────────────────╖
        Code     Meaning
        ──────────────────────────────────────────────────────────────────
        00H      Write-protect error
        01H      Unknown unit
        02H      Drive not ready
        03H      Unknown command
        04H      Data error (bad CRC)
        05H      Bad request structure length
        06H      Seek error
        07H      Unknown media type
        08H      Sector not found
        09H      Printer out of paper
        0AH      Write fault
        0BH      Read fault
        0CH      General failure
        0FH      Invalid disk change

        These are the same error codes returned by the device drivers in
        the request header.

    ■  On a disk error, MS-DOS retries the operation three times before
        transferring to the Interrupt 24H handler.

    ■  On entry to the Interrupt 24H handler, the stack is set up as
        follows:


┌───────────────────────┐
│                       │▒
│         Flags         │▒
├───────────────────────┤▒
│                       │▒ Flags and CS:IP pushed on stack
│          CS           │▒  by original Interrupt 21H call
├───────────────────────┤▒
│                       │▒
│          IP           │▒
├───────────────────────┤─ SP on entry to Interrupt 21H handler
│                       │▒
│          ES           │▒
├───────────────────────┤▒
│                       │▒
│          DS           │▒
├───────────────────────┤▒
│                       │▒
│          BP           │▒
├───────────────────────┤▒
│                       │▒
│          DI           │▒
├───────────────────────┤▒
│                       │▒ Registers at point of
│          SI           │▒  original Interrupt 21H call
├───────────────────────┤▒
│                       │▒
│          DX           │▒
├───────────────────────┤▒
│                       │▒
│          CX           │▒
├───────────────────────┤▒
│                       │▒
│          BX           │▒
├───────────────────────┤▒
│                       │▒
│          AX           │▒
├───────────────────────┤
│                       │▒
│         Flags         │▒
├───────────────────────┤▒
│                       │▒ Return address from
│          CS           │▒  Interrupt 24H handler
├───────────────────────┤▒
│                       │▒
│          IP           │▒
└───────────────────────┘─  SP on entry to Interrupt 24H handler


    ■  Interrupt 24H handlers must preserve the SS, SP, DS, ES, BX, CX,
        and DX registers. Only Interrupt 21H Functions 01H through 0CH,
        30H, and 59H can be used by an Interrupt 24H handler; other calls
        will destroy the MS-DOS stack and its ability to retry or ignore an
        error.

    ■  Before issuing a RETURN FROM INTERRUPT (IRET), the Interrupt 24H
        handler should place an action code in AL that will be interpreted
        by MS-DOS as follows:

╓┌────────────────┌──────────────────────────────────────────────────────────╖
        Code     Meaning
        ──────────────────────────────────────────────────────────────────
        00H      Ignore error.
        01H      Retry operation.
        02H      Terminate program through Interrupt 23H.
        03H      Fail system call in progress (versions 3.1 and later).

    ■  If an Interrupt 24H routine returns to the user program rather than
        to MS-DOS, it must restore the user program's registers, removing
        all but the last three words from the stack, and issue an IRET.
        Control returns to the instruction immediately following the
        Interrupt 21H function call that resulted in an error. This leaves
        MS-DOS in an unstable state until a call is made to an Interrupt
        21H function higher than 0CH.

Example

    None



Interrupt 25H (37)
Absolute Disk Read
1.0 and later


    Interrupt 25H provides direct linkage to the MS-DOS BIOS module to
    read data from a logical disk sector into a specified memory location.

To Call

    AL      = drive number (0 = drive A, 1 = drive B, and so on)
    CX      = number of sectors to read
    DX      = starting relative (logical) sector number
    DS:BX   = segment:offset of disk transfer area (DTA)

Returns

    If operation is successful:

    Carry flag is clear.

    If operation is not successful:

    Carry flag is set.

    AX      = error code

Programmer's Notes

    ■  Interrupt 25H might destroy all registers except the segment
        registers.

    ■  When Interrupt 25H returns, the CPU flags originally pushed onto
        the stack by the INT 25H instruction are still on the stack. The
        stack must be cleared by a POPF or ADD SP,2 instruction to prevent
        uncontrolled stack growth and to make accessible any other values
        that were pushed onto the stack before the call to Interrupt 25H.

    ■  Logical sector numbers are zero based and are obtained by numbering
        each disk sector sequentially from track 0, head 0, sector 1 and
        continuing until the last sector on the disk is counted. The head
        number is incremented before the track number. Because of
        interleaving, logically adjacent sectors might not be physically
        adjacent for some types of disks.

    ■  The lower byte of the error code (AL) is the same error code that
        is returned in the lower byte of DI when an Interrupt 24H is
        issued. The upper byte (AH) contains one of the following codes:

╓┌────────────────┌──────────────────────────────────────────────────────────╖
        Code     Meaning
        ──────────────────────────────────────────────────────────────────
        80H      Device failed to respond
        40H      Seek operation failure
        20H      Controller failure
        10H      Data error (bad CRC)
        08H      Direct memory access (DMA) failure
        04H      Requested sector not found
        03H      Write-protect fault
        02H      Bad address mark
        01H      Bad command

    ■  Warning: Interrupt 25H bypasses the MS-DOS file system. This
        function must be used with caution to avoid damaging the disk
        structure.

Example

        ;****************************************************************;
        ;                                                                ;
        ;      Interrupt 25H: Absolute Disk Read                         ;
        ;                                                                ;
        ;      Read logical sector 1 of drive A into the memory area     ;
        ;      named buff. (On most MS-DOS floppy disks, this sector     ;
        ;      contains the beginning of the file allocation table.)     ;
        ;                                                                ;
        ;****************************************************************;

        mov     al,0            ; Drive A.
        mov     cx,1            ; Number of sectors.
        mov     dx,1            ; Beginning sector number.
        mov     bx,seg buff     ; Address of buffer.
        mov     ds,bx
        mov     bx,offset buff
        int     25h             ; Request disk read.
        jc      error           ; Jump if read failed.
        add     sp, 2           ; Clear stack.
        .
        .
        .
error:                          ; Error routine goes here.
        .
        .
        .
buff    db      512 dup (?)



Interrupt 26H (38)
Absolute Disk Write
1.0 and later


    Interrupt 26H provides direct linkage to the MS-DOS BIOS module to
    write data from a specified memory buffer to a logical disk sector.

To Call

    AL      = drive number (0 = drive A, 1 = drive B, and so on)
    CX      = number of sectors to write
    DX      = starting relative (logical) sector number
    DS:BX   = segment:offset of disk transfer area (DTA)

Returns

    If operation is successful:

    Carry flag is clear.

    If operation is not successful:

    Carry flag is set.

    AX      = error code

Programmer's Notes

    ■  When Interrupt 26H returns, the CPU flags originally pushed onto
        the stack by the INT 26H instruction are still on the stack. The
        stack must be cleared by a POPF or ADD SP,2 instruction to prevent
        uncontrolled stack growth and to make accessible any other values
        that were pushed on the stack before the call to Interrupt 26H.

    ■  Logical sector numbers are zero based and are obtained by numbering
        each disk sector sequentially from track 0, head 0, sector 1 and
        continuing until the last sector on the disk is counted. The head
        number is incremented before the track number. Because of
        interleaving, logically adjacent sectors might not be physically
        adjacent for some types of disks.

    ■  The lower byte of the error code (AL) is the same error code that
        is returned in the lower byte of DI when an Interrupt 24H is
        issued. The upper byte (AH) contains one of the following codes:

╓┌────────────────┌──────────────────────────────────────────────────────────╖
        Code     Meaning
        ──────────────────────────────────────────────────────────────────
        80H      Device failed to respond
        40H      Seek operation failure
        20H      Controller failure
        10H      Data error (bad CRC)
        08H      Direct memory access (DMA) failure
        04H      Requested sector not found
        03H      Write-protect fault
        02H      Bad address mark
        01H      Bad command

    ■  Warning: Interrupt 26H bypasses the MS-DOS file system. This
        function must be used with caution to avoid damaging the disk
        structure.

Example

        ;****************************************************************;
        ;                                                                ;
        ;       Interrupt 26H: Absolute Disk Write                       ;
        ;                                                                ;
        ;       Write the contents of the memory area named buff         ;
        ;       into logical sector 3 of drive C.                        ;
        ;                                                                ;
        ;       WARNING: Verbatim use of this code could damage          ;
        ;       the file structure of the fixed disk. It is meant        ;
        ;       only as a general guide. There is, unfortunately,        ;
        ;       no way to give a really safe example of this interrupt.  ;
        ;                                                                ;
        ;****************************************************************;

        mov     al,2            ; Drive C.
        mov     cx,1            ; Number of sectors.
        mov     dx,3            ; Beginning sector number.
        mov     bx,seg buff     ; Address of buffer.
        mov     ds,bx
        mov     bx,offset buff
        int     26h             ; Request disk write.
        jc      error           ; Jump if write failed.
        add     sp,2            ; Clear stack.
        .
        .
        .
error:                          ; Error routine goes here.
        .
        .
        .
buff    db      512 dup (?)     ; Data to be written to disk.



Interrupt 27H (39)
Terminate and Stay Resident
1.0 and later


    Interrupt 27H terminates execution of the currently executing program
    but reserves part or all of its memory so that it will not be overlaid
    by the next transient program to be loaded.

To Call

    DX   = offset of last byte plus 1 (relative to the program segment
            prefix, or PSP) of program to be protected
    CS   = segment address of PSP

Returns

    Nothing

Programmer's Notes

    ■  In response to an Interrupt 27H call, MS-DOS takes the following
        actions:

        -  Restores the termination vector (Interrupt 22H) from PSP:000AH.

        -  Restores the Control-C vector (Interrupt 23H) from PSP:000EH.

        -  With MS-DOS versions 2.0 and later, restores the critical error
        handler vector (Interrupt 24H) from PSP:0012H.

        -  Transfers to the termination handler address.

    ■  If the program is returning to COMMAND.COM rather than to another
        program, control transfers first to COMMAND.COM's resident portion,
        which reloads COMMAND.COM's transient portion (if necessary) and
        passes it control. If a batch file is in progress, the next line of
        the file is then fetched and interpreted; otherwise, a prompt is
        issued for the next user command.

    ■  This interrupt is typically used to allow user-written drivers or
        interrupt handlers to be loaded as ordinary .COM or .EXE programs
        and then remain resident. Subsequent entrance to the code is by
        means of a hardware or software interrupt.

    ■  The maximum amount of memory that can be reserved with this
        interrupt is 64 KB. Therefore, Interrupt 27H should be used only
        for applications that must run under MS-DOS versions 1.x.

        With versions 2.0 and later, the preferred method to terminate and
        stay resident is to use Interrupt 21H Function 31H, which allows
        the program to reserve more than 64 KB of memory and does not
        require CS to contain the PSP address.

    ■  Interrupt 27H should not be called by .EXE programs that are loaded
        into the high end of memory (that is, linked with the /HIGH
        switch), because this would reserve the memory that is ordinarily
        used by the transient portion of COMMAND.COM. If COMMAND.COM cannot
        be reloaded, the system will fail.

    ■  Because execution of Interrupt 27H results in the restoration of
        the terminate routine (Interrupt 22H), Control-C (Interrupt 23H),
        and critical error (Interrupt 24H) vectors, it cannot be used to
        permanently install a user-written critical error handler.

    ■  Interrupt 27H does not work correctly when DX contains values in
        the range FFF1H through FFFFH. In this case, MS-DOS discards the
        high bit of the contents of DX, resulting in 32 KB less resident
        memory than was actually requested by the program.

Example

        ;****************************************************************;
        ;                                                                ;
        ;       Interrupt 27H: Terminate and Stay Resident               ;
        ;                                                                ;
        ;       Exit and stay resident, reserving enough memory          ;
        ;       to protect the program's code and data.                  ;
        ;                                                                ;
        ;****************************************************************;

Start:   .
        .
        .
        mov     dx,offset pgm_end  ; DX = bytes to reserve.
        int     27h                ; Terminate, stay resident.
        .
        .
        .
pgm_end  equ     $
        end     start



Interrupt 2FH (47)
Multiplex Interrupt
2.0 and later


    Interrupt 2FH with AH = 01H submits a file to the print spooler,
    removes a file from the print spooler's queue of pending files, or
    obtains the status of the printer. Other values for AH are used by
    various MS-DOS extensions, such as APPEND.

To Call

    AH      = 01H    print spooler call
    AL      = 00H    get installed status
            = 01H    submit file to be printed
            = 02H    remove file from print queue
            = 03H    cancel all files in queue
            = 04H    hold print jobs for status read
            = 05H    end hold for status read

    If AL is 01H:

    DS:DX   = segment:offset of packet address

    If AL is 02H:

    DS:DX   = segment:offset of ASCIIZ file specification

Returns

    If operation is successful:

    Carry flag is clear.

    If AL was 00H on call:

    AL      = status:
            = 00H    not installed, OK to install
            = 01H    not installed, not OK to install
            = FFH    installed

    If AL was 04H on call:

    DX      = error count
    DS:SI   = segment:offset of print queue

    If operation is not successful:

    Carry flag is set.

    AX      = error code:
            = 01       function invalid
            = 02       file not found
            = 03       path not found
            = 04       too many open files
            = 05       access denied
            = 08       queue full
            = 09       spooler busy
            = 0C       name too long
            = 0F       drive invalid

Programmer's Notes

    ■  For Subfunction 01H, the packet consists of 5 bytes. The first byte
        contains the level (must be zero), the next 4 bytes contain the
        doubleword address (segment and offset) of an ASCIIZ file
        specification. (The filename cannot contain wildcard characters.)
        If the file exists, it is added to the end of the print queue.

    ■  For Subfunction 02H, wildcard characters (* and ?) are allowed in
        the file specification, making it possible to delete multiple files
        from the print queue with one call.

    ■  For Subfunction 04H, the address returned for the print queue
        points to a series of filename entries. Each entry in the queue is
        64 bytes and contains an ASCIIZ file specification. The first file
        specification in the queue is the one currently being printed. The
        last slot in the queue has a null (zero) in the first byte.

Example

    None
```

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
