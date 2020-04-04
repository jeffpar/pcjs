---
layout: page
heading: The MS-DOS Encyclopedia
title: "The MS-DOS Encyclopedia: Section IV: Programming Utilities"
permalink: /documents/books/programming/mspl13/msdos/encyclopedia/section4/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/section4/
---

### Section IV: Programming Utilities

{% raw %}

```none
INTRODUCTION


    This section of The MS-DOS Encyclopedia describes the Microsoft
    utilities, documentation aids, and debuggers that can be used with the
    Microsoft C, FORTRAN, Pascal, and BASIC compilers and with the
    Microsoft Macro Assembler (MASM). Included are operating instructions
    for MASM, the Macro Assembler; LIB, the Library Manager; LINK, the
    Microsoft Object Linker; the DEBUG, SYMDEB, and CodeView program
    debuggers; MAKE, which automates maintenance of programs; CREF, which
    produces a cross-reference listing of symbols;  and EXE2BIN, EXEMOD,
    and EXEPACK, which modify executable files.

    Entries (except for the program debuggers) are arranged alphabetically
    by the name of the programming utility. The three Microsoft debuggers
    are listed at the end of the section in the following order: DEBUG,
    SYMDEB, CodeView. Individual DEBUG and SYMDEB commands appear
    alphabetically under the headings DEBUG and SYMDEB.

    Each utility entry includes

    ■  Utility name
    ■  Utility purpose
    ■  Prototype command line and summary of options
    ■  Detailed description of utility
    ■  One or more examples of utility use
    ■  Return codes (where applicable)
    ■  Error messages and warnings (where applicable)

    The experienced user can find information with a quick glance at the
    first part of a utility entry; a less experienced user can refer to
    the detailed explanation and examples in a more leisurely fashion. The
    next two pages contain an example of a typical entry from the
    Programming Utilities section, with explanations of each
    component.



EXEPACK

Compress .EXE File


Purpose

    Compresses an executable .EXE program file so that it requires less
    space on the disk. The EXEPACK utility is supplied with the Microsoft
    Macro Assembler (MASM), C Compiler, FORTRAN Compiler, and Pascal
    Compiler. This documentation describes EXEPACK version 4.04.

Syntax

    EXEPACK exe file packed file

    where:

    exe file        is the name of the executable .EXE program file to be
                    compressed.

    packed file     is the name of the compressed program file.

Description

    The EXEPACK utility compresses an executable .EXE program by packing
    sequences of identical bytes and optimizing the relocation table. The
    EXEPACK utility is not compatible with versions of MS-DOS earlier than
    2.0.

    The exe file parameter specifies the name of the program file
    produced by the Microsoft Object Linker (LINK) and must contain the
    extension .EXE. The packed file parameter specifies the name and
    extension of the resulting compressed file. EXEPACK has no default
    extensions.

    The name for packed file must be different from the exe file
    filename. Although it is possible to fool EXEPACK into creating a
    packed file with the same name by specifying a different but
    equivalent pathname for the output file, the resulting packed file
    will probably be damaged. If the packed file is to replace the
    original .EXE file, a different name should be specified for the
    packed file; then the input file should be deleted and the packed file
    renamed with the name of the original file.

    When EXEPACK is used to compress an executable overlay file or a
    program that calls overlays, the packed file should be renamed with
    its original name before use to avoid interruption by the overlay-
    manager prompt.

    The effects of EXEPACK depend on program characteristics. Most
    programs can be processed with EXEPACK to occupy significantly less
    disk space. Programs thus compressed also load for execution more
    quickly. Occasionally programs (particularly small ones) actually
    become larger after processing with EXEPACK; in such cases the file
    produced by EXEPACK should be discarded. Microsoft Windows programs or
    programs to be debugged under DEBUG, SYMDEB, or CodeView should not be
    compressed with EXEPACK.

    Using EXEPACK on a previously linked program is equivalent to
    specifying LINK's /EXEPACK switch while linking that program.

    Note: When using the EXEMOD utility with packed .EXE files created
    with EXEPACK or the /EXEPACK linker switch, use the EXEMOD version
    shipped with LINK or with the EXEPACK utility to ensure
    compatibility.

Return Codes

    0  No error; the EXEPACK operation was successful.
    1  An error was encountered that terminated execution of the EXEPACK
        utility.

Example

    To compress the file BUILD.EXE into a file named BUILDX.EXE,
    type

    C>EXEPACK BUILD.EXE BUILDX.EXE  <Enter>

Messages

    fatal error U1100: out of space on output file
    The destination disk has insufficient space for the output file, or
    the root directory is full.

    fatal error U1101: filename: file not found
    The .EXE file specified in the command line cannot be found.

    fatal error U1102: filename: permission denied
    A file with the same name as the specified output file already exists
    and is read-only.

    fatal error U1103: cannot pack file onto itself
    The file cannot be compressed because the name specified for the
    packed file is the same as the name of the source .EXE file.

    fatal error U1104: usage : exepack <infile> <outfile>
    The command line contained a syntax error, or the output filename was
    not specified.

    fatal error U1105: invalid .EXE file; bad header
    The file is not an executable file or has an invalid file
    header.

    fatal error U1106: cannot change load-high program
    The file cannot be compressed because the minimum allocation value and
    the maximum allocation value are both zero. See also PROGRAMMING
    UTILITIES: EXEMOD.

    fatal error U1107: cannot pack already-packed file
    The file specified has already been packed with EXEPACK.

    fatal error U1108: invalid .EXE file; actual length less than
    reported
    The file size indicated in the .EXE file header does not match the
    size recorded in the disk directory.

    fatal error U1109: out of memory
    The EXEPACK utility did not have enough memory to operate.



CREF
Generate Cross-Reference Listing


Purpose

    Produces a cross-reference listing of all symbols in an assembly
    language program. The CREF utility is supplied with the Microsoft
    Macro Assembler (MASM). This documentation describes CREF version
    4.0.

Syntax

    CREF

    or

    CREF crf_file[;]

    or

    CREF crf_file,ref_file

    where:

    crf_file   is the input file previously produced by MASM (default
                extension = .CRF).

    ref_file   is the output ASCII text file to be created (default
                extension = .REF).

Description

    The CREF utility processes a file produced by MASM and generates an
    ASCII cross-reference listing in a file on disk or directly on a
    character device (such as a printer). The output file contains an
    alphabetic list of the symbols in the assembled program, including the
    line number of each reference to the symbol and the total number of
    symbols in the program. A pound sign (#) follows the line number of
    the reference that defines the symbol.

    The crf_file has the default extension .CRF. It is produced by
    providing MASM with a filename other than NUL in the cross-reference
    position in the command line, by responding to the Cross-reference:
    prompt, or by including the /C switch in the MASM command line or at
    any MASM prompt. An assembly source listing file (.LST) must also be
    requested in the MASM command line or in response to the MASM prompts
    in order to generate a valid .CRF file.

    If a semicolon follows the crf_file parameter in the CREF command,
    the resulting ref_file containing the cross-reference listing is given
    the same drive and pathname as crf_file, with a .REF extension. If the
    optional ref_file parameter is present, it can consist of any
    pathname with an optional extension (default is .REF). The cross-
    reference listing can be sent directly to a character device, rather
    than to a file, by specifying a valid character device name (such as
    PRN) in the ref_file position.

    If the CREF utility is run without any parameters or with some
    parameters missing, the CREF utility prompts the operator for the
    necessary information.

Return Codes

    0     No error; the CREF operation was successful.

    1     An error was encountered that terminated execution of the CREF
        utility.

Examples

    To process the file MENUMGR.CRF (created during assembly of
    MENUMGR.ASM) into the cross-reference file MENUMGR.REF, type

    C>CREF MENUMGR;  <Enter>

    To process the file MENUMGR.CRF and assign the name MENU.REF to the
    resulting cross-reference file, type

    C>CREF MENUMGR,MENU  <Enter>

    To process the file MENUMGR.CRF and send the cross-reference listing
    directly to the printer, type

    C>CREF MENUMGR,PRN  <Enter>

    To run the CREF program in interactive mode, type

    C>CREF  <Enter>

    The following is an example of an interactive CREF session:

C>CREF  <Enter>
Microsoft (R) Cross Reference Utility  Version 4.00
Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985. All rights reserved.

Cross-reference [.CRF]: MENUMGR  <Enter>
Listing [MENUMGR.REF]:  <Enter>

9 Symbols

C>

    The following sequence of commands produces the cross-reference
    listing HELLO.REF from the assembly-language source file
    HELLO.ASM:

    C>MASM HELLO,HELLO,HELLO,HELLO  <Enter>
    C>CREF HELLO;  <Enter>

Contents of the file HELLO.ASM:

            name    hello
            page    55,132
            title   HELLO.ASM - print Hello on terminal
    ;
    ; HELLO.COM utility to demonstrate CREF listing
    ;
    cr      equ     0dh             ;ASCII carriage return
    lf      equ     0ah             ;ASCII linefeed

    cseg    segment para public "CODE"

            org     100h

            assume  cs:cseg,ds:cseg,es:cseg,ss:cseg

    print   proc    near
            mov     dx,offset message
            mov     ah,9            ;print the string "Hello"
            int     21h
            mov     ax,4c00h        ;exit to MS-DOS
            int     21h             ;with "return code" of zero
    print   endp

    message db      cr,lf,'Hello!',cr,lf,'$

    cseg    ends

            end     print

    Contents of the file HELLO.REF:

Microsoft Cross-Reference  Version 4.00          Mon Sep 07 23:31:21  1987
HELLO.ASM - print Hello on terminal

    Symbol Cross-Reference           (# is definition)               Cref-1

CODE . . . . . . . . . . . . . .   10
CR . . . . . . . . . . . . . . .    7     7#     24     25
CSEG . . . . . . . . . . . . . .   10    10#     14     14    14   14  27

LF . . . . . . . . . . . . . . .    8     8#     24     25

MESSAGE. . . . . . . . . . . . .    17   24      24#

PRINT. . . . . . . . . . . . . .    16   16#     29


6 Symbols

Messages

    can't open cross-reference file for reading
    The pathname or drive specified for the input .CRF file is invalid or
    does not exist.

    can't open listing file for writing
    A write error has halted the creation of the .REF listing file. This
    indicates that the disk is full or write-protected, that the specified
    output file is read-only, or that the specified device is not
    available.

    cref has no switches
    A switch was specified in the command line; CREF has no optional
    switches.

    DOS 2.0 or later required
    CREF does not work with versions of MS-DOS earlier than 2.0.

    extra file name ignored
    More than two filenames were specified in the command line. The CREF
    utility generates the cross-reference listing using the first two
    filenames specified.

    line invalid, start again
    No .CRF file was specified in the command line or at the prompt.
    Specify a valid .CRF file at the prompt following this message.

    out of heap space
    Memory is insufficient to process the .CRF file. Remove memory
    resident programs and shells or add more memory.

    premature eof
    The input file specified is damaged or is not a valid .CRFfile.

    read error on stdin
    A Control-Z was received from the keyboard or a redirected file and
    has halted CREF.



EXE2BIN
Convert .EXE File to Binary-Image File


Purpose

    Converts an executable file in the .EXE format to a memory-image file
    in binary format. The EXE2BIN utility is supplied with the MS-DOS
    distribution disks.

Syntax

    EXE2BIN exe_file [bin_file]

    where:

    exe_file        is the .EXE-format file to be converted (default
                    extension = .EXE).

    bin_file        is the name to be given to the converted file
                    (default extension = .BIN).

Description

    The .EXE executable program files produced by the Microsoft Object
    Linker (LINK) contain a special header and a relocation table as well
    as the program code and data. The EXE2BIN utility can be used to
    convert a .EXE file to a .COM executable file, which is an absolute
    memory image of the program to be executed and does not contain a
    special header or relocation table. The EXE2BIN utility can also be
    used to convert .EXE files with an origin of zero (such as installable
    MS-DOS device drivers) to pure memory-image files. Files in memory-
    image format (a common format for device drivers and for programs to
    be placed in ROM for execution) usually have a .BIN or .SYS
    extension.

    To convert a .EXE program to a binary-image file, the following are
    required:

    ■  The program must be a valid .EXE file produced by LINK.

    ■  The program can contain only one segment and cannot contain a
        declared stack segment.

    ■  The program code and data portion of the .EXE file must be less
        than 64 KB.

    To convert a .EXE program to an executable .COM file, the following
    are required:

    ■  The origin of the program must be 0100H, which must also be
        specified as the entry point.

    ■  The program code and data portion of the .EXE file must be less
        than 65227 bytes (64 KB minus 256 bytes used by the program segment
        prefix minus 2 bytes initially placed on the stack).

    ■  The program must not include any FAR references.

    Note: Many compilers cannot create programs that can be converted to
    .COM files. Check the compiler documentation for specific information
    concerning executable .COM files.

    The exe_file parameter in the command line can have any filename and
    can include a drive and path; the default extension is .EXE. The
    optional bin_file parameter can also contain any filename and a drive
    and path; the default extension is .BIN. If no path is specified with
    the bin_file parameter, the output file is given the same drive and
    path as the exe_file. If no bin_file parameter is supplied, the
    output file is given the same name as the exe_file, with the
    extension .BIN.

    If the program in the .EXE file requires segment fixups (that is, if
    the program contains instructions requiring segment relocation, which
    would ordinarily be done by the MS-DOS loader using the .EXE file's
    relocation table), EXE2BIN prompts for a base segment address.  When
    segment fixups are necessary, the resulting program is not relocatable
    and must be loaded at the given location to be executed; the MS-DOS
    loader cannot load the program.

Examples

    To convert the file HELLO.EXE to the file HELLO.BIN, type

    C>EXE2BIN HELLO  <Enter>

    To convert the file CLEAN.EXE, which has an origin of 0100H and meets
    the requirements for an executable .COM file, to the file CLEAN.COM,
    type

    C>EXE2BIN CLEAN.EXE CLEAN.COM  <Enter>

    To convert the file ASYNCH.EXE, produced by assembling and linking the
    device-driver source file ASYNCH.ASM, to the installable device-driver
    file ASYNCH.SYS, type

    C>EXE2BIN ASYNCH.EXE ASYNCH.SYS  <Enter>

Messages

    File cannot be converted
    The program to be converted has one of the following problems: The
    program has an origin of 0100H but a different entry point; the
    program requires segment fixups; the program code and data are larger
    than 64 KB; the program has more than one declared segment; or the
    file is not a valid .EXE-format file.

    File creation error
    EXE2BIN cannot create the output file because a read-only file with
    the same name already exists, because the specified directory is full,
    or because the specified disk is full, write-protected, or
    unreadable.

    File not found
    The file does not exist or the incorrect path was given.

    Fixups needed - base segment (hex):
    The .EXE-format file contains segment references that would ordinarily
    be relocated by the .EXE file loader. Specify the absolute segment
    address at which the converted module will be executed.

    Incorrect DOS version
    The version of EXE2BIN is not compatible with the version of MS-DOS
    that is running.

    Insufficient disk space
    The destination disk has insufficent space to create the memory-image
    output file.

    Insufficient memory
    Not enough memory is available to run EXE2BIN.

    WARNING - Read error in EXE file.
            Amount read less than size in header.
    The file size given in the .EXE header is inconsistent with the actual
    size of the file.



EXEMOD
Modify .EXE File Header


Purpose

    Allows inspection or modification of the fields in a .EXE file header.
    The EXEMOD utility is supplied with the Microsoft Macro Assembler
    (MASM), C Compiler, FORTRAN Compiler, and Pascal Compiler. This
    documentation describes EXEMOD version 4.02.

Syntax

    EXEMOD exe_file [/H]

    or

    EXEMOD exe_file [/STACK n] [/MAX n] [/MIN n]

    where:

    exe_file        is the name of an executable program in .EXE format
                    (the extension .EXE is assumed).

    /H              displays the values in the file's header.

    /STACK n        modifies the size of the program's stack segment to n
                    (hexadecimal) bytes.

    /MAX n          sets the maximum memory allocation for the program to
                    n (hexadecimal) paragraphs.

    /MIN n          sets the minimum memory allocation for the program to
                    n (hexadecimal) paragraphs.

    Note: Switches can be either uppercase or lowercase and can be
    preceded by a dash (-) instead of a forward slash (/).

Description

    Programs that are executable under MS-DOS can be in one of two file
    formats: .COM, which is an absolute image of the file to be executed
    and limits the program size to 65227 bytes (64 KB minus 256 bytes used
    by the program segment prefix minus 2 bytes initially placed on the
    stack); or .EXE, which allows a program of any size to be loaded and
    has a special header containing information about the program's entry
    point, stack size, and memory requirements, plus a relocation
    table.

    The EXEMOD utility can be used to display or modify those fields of a
    .EXE program header that control the size of the stack segment and the
    amount of memory allocated to the program when MS-DOS loads the
    program into the transient program area for execution.

    The /STACKn switch controls the number of bytes in the program's
    STACK segment by setting the initial SP to the hexadecimal value
    specified. The minimum paragraph allocation value is adjusted if
    necessary. The EXEMOD /STACKn switch should be used only with
    programs compiled by Microsoft C version 3.0 or later, Microsoft
    Pascal version 3.3 or later, or Microsoft FORTRAN version 3.0 or
    later. Use of the /STACKn switch with a program developed with
    another compiler can cause the program to fail or cause EXEMOD to
    return an error message.

    The /MAXn switch specifies the maximum number of additional
    paragraphs of memory to allocate for use by the program. The /MINn
    switch specifies the minimum number of paragraphs of memory, in
    addition to the size of the program itself and its stack and data
    segments, that are required for the program to execute. If enough
    memory exists to satisfy the minimum additional paragraphs requested
    but not enough exists to satisfy the maximum, MS-DOS allocates all
    available memory to the program.

    To display the current memory allocation and stack size values from a
    .EXE file's header, the /H switch can be used or the file's name can
    be entered as the only parameter in the command line.

    When EXEMOD is used on a previously packed .EXE file (a file that was
    processed by EXEPACK or linked with the /EXEPACK switch), the values
    set or displayed in the file's header are the values that will apply
    after the file is expanded at load time. EXEMOD displays a message
    advising the user that the file being modified was previously
    packed.

    The EXEMOD switches /MAXn and /STACKn correspond to the Microsoft
    Object Linker's /CPARMAXALLOC:n and /STACK:n switches, respectively.
    See PROGRAMMING UTILITIES: LINK.

Return Codes

    0  No error; EXEMOD operation was successful.
    1  An error was encountered that terminated execution of the EXEMOD
        program.

Examples

    To display the values in the file header of the DUMP.EXE program,
    type

    C>EXEMOD DUMP.EXE  <Enter>

    or

    C>EXEMOD DUMP.EXE /H  <Enter>

    The EXEMOD utility displays the following:

    Microsoft (R) EXE File Header Utility  Version 4.02
    Copyright (C) Microsoft Corp 1985.  All rights reserved.
    DUMP.EXE                           (hex)           (dec)

    .EXE size (bytes)                    580            1408
    Minimum load size (bytes)            383             899
    Overlay number                         0               0
    Initial CS:IP                  0000:0000
    Initial SS:SP                  0034:0040              64
    Minimum allocation (para)              5               5
    Maximum allocation (para)           FFFF           65535
    Header size (para)                    20              32
    Relocation table offset               20              32
    Relocation entries                     1               1

    To change the size of the STACK segment for the DUMP.EXE program to
    400H (1024) bytes, type

    C>EXEMOD DUMP.EXE /STACK 400  <Enter>

    EXEMOD displays the message

    EXEMOD : warning U4051: minimum allocation less than stack; correcting
            minimum

Messages

    error U1050: usage : exemod file [-/h] [-/stack n] [-/max n] [-/min n]
    An error was detected in the EXEMOD command line.

    error U1051: invalid .EXE file : bad header
    The file is not an executable file or has an invalid file header.

    error U1052: invalid .EXE file : actual length less than reported
    The file size indicated in the .EXE file header does not match the
    size recorded in the disk directory.

    error U1053: cannot change load-high program
    The header of the file cannot be modified because the minimum
    allocation value and the maximum allocation value are both zero.

    error U1054: file not .EXE
    The file specified does not have a .EXE extension.

    error U1055: filename : cannot find file
    The .EXE file specified in the command line cannot be found.

    error U1056: filename : permission denied
    The .EXE file specified in the command line is read-only.

    warning U4050: packed file
    The specified file is a packed file; that is, it was previously
    processed with the EXEPACK utility or was linked with the /EXEPACK
    switch. This is an informational message only; EXEMOD still modifies
    the file. The header values displayed are the values that will apply
    after the packed value is expanded at load time.

    warning U4051: minimum allocation less than stack; correcting
    minimum
    The minimum allocation value is not large enough to accommodate the
    stack; the minimum allocation value is adjusted. This is an
    informational message only.

    warning U4052: minimum allocation greater than maximum; correcting
    maximum
    If the minimum allocation value is greater than the maximum allocation
    value, the maximum value is adjusted. This is an informational message
    only.



EXEPACK
Compress .EXE File


Purpose

    Compresses an executable .EXE program file so that it requires less
    space on the disk. The EXEPACK utility is supplied with the Microsoft
    Macro Assembler (MASM), C Compiler, FORTRAN Compiler, and Pascal
    Compiler. This documentation describes EXEPACK version 4.04.

Syntax

    EXEPACK exe_file packed_file

    where:

    exe_file        is the name of the executable .EXE program file to be
                    compressed.
    packed_file     is the name of the compressed program file.

Description

    The EXEPACK utility compresses an executable .EXE program by packing
    sequences of identical bytes and optimizing the relocation table. The
    EXEPACK utility is not compatible with versions of MS-DOS earlier than
    2.0.

    The exe_file parameter specifies the name of the program file
    produced by the Microsoft Object Linker (LINK) and must contain the
    extension .EXE. The packed_file parameter specifies the name and
    extension of the resulting compressed file. EXEPACK has no default
    extensions.

    The name for packed_file must be different from the exe_file
    filename. Although it is possible to fool EXEPACK into creating a
    packed file with the same name by specifying a different but
    equivalent pathname for the output file, the resulting packed file
    will probably be damaged. If the packed file is to replace the
    original .EXE file, a different name should be specified for the
    packed file; then the input file should be deleted and the packed file
    renamed with the name of the original file.

    When EXEPACK is used to compress an executable overlay file or a
    program that calls overlays, the packed file should be renamed with
    its original name before use to avoid interruption by the overlay-
    manager prompt.

    The effects of EXEPACK depend on program characteristics. Most
    programs can be processed with EXEPACK to occupy significantly less
    disk space. Programs thus compressed also load for execution more
    quickly. Occasionally programs (particularly small ones) actually
    become larger after processing with EXEPACK; in such cases the file
    produced by EXEPACK should be discarded. Microsoft Windows programs or
    programs to be debugged under DEBUG, SYMDEB, or CodeView should not be
    compressed with EXEPACK.

    Using EXEPACK on a previously linked program is equivalent to
    specifying LINK's /EXEPACK switch while linking that program.

    Note: When using the EXEMOD utility with packed .EXE files created
    with EXEPACK or the /EXEPACK linker switch, use the EXEMOD version
    shipped with LINK or with the EXEPACK utility to ensure
    compatibility.

Return Codes

    0  No error; the EXEPACK operation was successful.
    1  An error was encountered that terminated execution of the EXEPACK
        utility.

Example

    To compress the file BUILD.EXE into a file named BUILDX.EXE,
    type

    C>EXEPACK BUILD.EXE BUILDX.EXE  <Enter>

Messages

    fatal error U1100: out of space on output file
    The destination disk has insufficient space for the output file, or
    the root directory is full.

    fatal error U1101: filename: file not found
    The .EXE file specified in the command line cannot be found.

    fatal error U1102: filename: permission denied
    A file with the same name as the specified output file already exists
    and is read-only.

    fatal error U1103: cannot pack file onto itself
    The file cannot be compressed because the name specified for the
    packed file is the same as the name of the source .EXE file.

    fatal error U1104: usage : exepack <infile> <outfile>
    The command line contained a syntax error, or the output filename was
    not specified.

    fatal error U1105: invalid .EXE file; bad header
    The file is not an executable file or has an invalid file
    header.

    fatal error U1106: cannot change load-high program
    The file cannot be compressed because the minimum allocation value and
    the maximum allocation value are both zero. See also PROGRAMMING
    UTILITIES: EXEMOD.

    fatal error U1107: cannot pack already-packed file
    The file specified has already been packed with EXEPACK.

    fatal error U1108: invalid .EXE file; actual length less than
    reported
    The file size indicated in the .EXE file header does not match the
    size recorded in the disk directory.

    fatal error U1109: out of memory
    The EXEPACK utility did not have enough memory to operate.

    fatal error U1110: error reading relocation table
    The file cannot be compressed because the relocation table cannot be
    found or is invalid.

    fatal error U1111: file not suitable for packing
    The file could not be packed because the packed load image of the
    specified file was larger than the unpacked load image.

    fatal error U1112: filename: unknown error
    An unknown system error occurred while the specified file was being
    processed.

    warning U4100: omitting debug data from output file
    EXEPACK has stripped all symbolic debug information from the output
    file.



LIB
Library Manager


Purpose

    Creates or modifies an object module library file. The LIB utility is
    supplied with the Microsoft Macro Assembler (MASM), C Compiler,
    FORTRAN Compiler, and Pascal Compiler. This documentation describes
    LIB version 3.06.

Syntax

    LIB

    or

    LIB library_file [/PAGESIZE:n] [operation][,[list_file]
    [,[new_library_file]]] [;]

    or

    LIB @response_file

    where:

    library_file           is the name of the object module library file
                            to be created or modified (default extension
                            = .LIB).

    /PAGESIZE:n            is the page size of the library file and must
                            immediately follow library_file if used; n
                            is a power of 2 between 16 and 32768,
                            inclusive (default = 16). Can be abbreviated
                            /P:n.

    operation              is one or more library manipulations to be
                            performed. Each operation is specified as a
                            code followed by an object module name (case
                            is not significant):

                            +name  Add object module or another library to
                                library.

                            -name  Delete object module from library.

                            -+name Replace object module in library.

                            *name  Copy object module from library to
                                object file.

                            -*name Copy object module to object file and
                                then delete object module from library.

    list_file              is the name of the file or character device to
                            receive the cross-reference listing for the
                            library file (default = NUL device).

    new_library_file       is the name to be assigned to the modified
                            object module library file. (The default name
                            is the same as library_file; if the default is
                            used, the original library_file is renamed
                            with the extension .BAK.)

    response_file          is the name of a text file containing LIB
                            parameters in the same order in which they are
                            supplied if entered interactively. The name of
                            the response file must be preceded by the @
                            symbol.

Description

    The Microsoft Library Manager (LIB) creates and modifies library
    files, checks existing library files for consistency, and prints
    listings of the contents of library files. The LIB utility does not
    work with versions of MS-DOS earlier than 2.0.

    A library file consists of relocatable object modules that are indexed
    by their names and public symbols. The Microsoft Object Linker (LINK)
    uses these files during the creation of an executable (.EXE) program
    to resolve external references to routines and variables contained in
    other object modules.

    The library_file parameter specifies the name of the object module
    library file to be created or modified. This parameter is required; if
    it is not included, LIB prompts for it. The default extension for a
    library file is .LIB.

    The /PAGESIZE:n switch (abbreviated /P:n) sets the page size (in
    bytes) for a new library file or changes the page size of an existing
    library file. The value of n must be a power of 2 between 16 and
    32768, inclusive. The default is 16 for a new library file; for an
    existing library file, the default is the current page size. Because
    the index to a library file is contained in a fixed number of pages,
    setting a larger page size increases the number of index entries (and
    thus the number of object modules) that a library file can contain but
    results in more wasted disk space (an average of half a library page
    per object module).

    The operation parameter specifies one or more relocatable object
    modules to add to, replace in, copy from, move from, or delete from
    library_file. Each operation is represented by a code specifying the
    type of operation, followed by the object module name. When an object
    module is copied or moved from the library file, the drive and
    pathname of the object module are set to the default drive, current
    directory, and specified module name, and the extension of the object
    module defaults to .OBJ. When an object module is added or replaced,
    LIB assumes a default extension of .OBJ.

    The operation +name adds the object module in the file name.OBJ to
    the library file. This operation can also be used to add the contents
    of another entire object module library file to the library file being
    updated, in which case the extension .LIB must be included in name.
    The operation -name deletes the object module name from the library.
    The operation -+name deletes the object module name from the library
    file and replaces it with the contents of the file name.OBJ. The
    operation *name copies the object module name from the library file
    into the file name.OBJ, which LIB creates in the current directory.
    The operation -*name also copies the object module name from the
    library file into a .OBJ file but then deletes the module from the
    library file. (Although name must have exactly the same spelling as
    the name in the library's reference listing, case is not
    significant.)

    Note: LIB does not actually delete object modules from the specified
    library file. Instead, it marks the selected object modules for
    deletion, creates a new library file, and copies only the modules not
    marked for deletion into the new file. Thus, if LIB is terminated for
    any reason, the original file is not lost. Enough space must be
    available on the disk for both the original library file and the
    copy.

    The list_file parameter specifies the file or character device to
    receive a reference listing for the library file. Any valid drive,
    pathname, and extension or any valid character device, such as PRN, is
    permitted (default = NUL). If this parameter is omitted, no listing is
    generated.

    The reference listing consists of two tables. The first table contains
    all the public symbols in the object modules in the library, listed
    alphabetically, with each symbol followed by the name of the object
    module in which it is referenced. The second table contains the names
    of all the object modules, listed alphabetically, with each name
    followed by the offset from the start of the library file, the code
    and data size, and an alphabetic listing of the public symbols in that
    object module.

    The new_library_file parameter specifies the name for the modified
    library file that is created. If this parameter is omitted, LIB gives
    the modified library file the same name as the original library file,
    and the original library file is renamed with a .BAK extension. When a
    new library file is being created, this parameter is not
    necessary.

    When the command line is used to supply LIB with filenames and
    switches, typing a semicolon character (;) after any parameter (except
    library_file) causes LIB to use the default values for the remaining
    parameters. If a semicolon is entered after library_file, LIB simply
    checks the file for consistency and usability. (This is seldom
    necessary, because LIB checks each object module for consistency
    before adding it to the library.)

    If the LIB command is entered without any parameters, LIB prompts the
    user for each parameter needed. If there are too many operations to
    fit on one line, the line can be ended with the ampersand character
    (&), causing LIB to repeat the Operations: prompt. If any response
    except library_file is terminated with a semicolon character, LIB
    uses the default values for the remaining filenames. When the library_
    file parameter is followed by a semicolon or a semicolon is entered at
    the Operations: prompt, LIB takes no action except to verify that the
    contents of the specified file are consistent and usable.

    The response_file parameter allows the automation of complex LIB
    sessions involving many files. A response file contains ASCII text
    that corresponds line for line to the responses that are entered in a
    normal interactive LIB session, in the form

    library_file [/P:n]
    [Y]
    [operations]
    [list_file]
    [new_library_file] [;]

    The response file name must be preceded in the command line by the at
    symbol (@) and can also be preceded by a path and/or drive letter. If
    library_file is a new file, the letter Y  must appear by itself on
    the second line of the response file to approve the creation of a
    library file. The last line of the response file must end with a
    semicolon or a carriage return. (LIB ignores any lines following a
    semicolon.) If all the parameters required by LIB are not present in
    the response file or the response file does not end with a semicolon,
    LIB prompts the user for the missing information.

Return Codes

    0  No error; LIB operation was successful.
    1  An error that terminated execution of the LIB utility was
        encountered.

Examples

    To create a library file named MYLIB.LIB and insert the object files
    VIDEO.OBJ, COMM.OBJ, and DOSINT.OBJ, type

    C>LIB MYLIB +VIDEO +COMM +DOSINT;  <Enter>

    To print a listing of the object modules in the library file
    MYLIB.LIB, type

    C>LIB MYLIB,PRN  <Enter>

    If the LIB command is entered without parameters, the user is prompted
    for the necessary information. For example, if the user wanted to add
    the module VIDEO.OBJ to the library file SLIBC.LIB, produce a
    reference listing in the file SLIBC.LST, and produce a new output
    library file named SLIBC2.LIB, the following dialogue would take
    place:

    C>LIB  <Enter>

    Microsoft (R) Library Manager  Version 3.06
    Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986. All rights reserved

    Library name: SLIBC  <Enter>
    Operations: +VIDEO  <Enter>
    List file: SLIBC.LST  <Enter>
    Output library: SLIBC2  <Enter>

Messages

    filename: cannot access file.
    LIB is unable to access an object module specified in a response file,
    in the command line, or at the Operations: prompt.

    filename: cannot create extract file
    The object module cannot be copied or moved from the library file into
    a separate disk file called filename because the root directory or
    disk is full or because filename already exists and is read-only.

    filename: cannot create listing
    The list file specified in the response file, in the command line, or
    at the List file: prompt cannot be created because the root directory
    or disk is full or because filename already exists and is read-only.

    filename: invalid format (xxxx); file ignored.
    The hexadecimal signature byte or word xxxx of the specified file was
    not one of the following recognized types: Microsoft library, Intel
    library, Microsoft object, or XENIX archive.

    filename: invalid library header.
    The input library file either is not a library file or is damaged.

    filename: invalid library header; file ignored.
    The input library file is in the wrong format.

    modulename: invalid object module near location
    The specified object module has an invalid format near the hexadecimal
    offset indicated.

    modulename: module not in library; ignored
    The object module specified in the response file, in the command line,
    or at the Operations: prompt is not in the specified input library
    file.

    modulename: module redefinition ignored
    An object module was specified to be added to a library file but an
    object module with the same name was already in the library file, or
    the same object module was specified twice in an add operation in the
    command line.

    number: page size too small; ignored
    The size specified with a /P:n switch must be a power of 2 between 16
    and 32768 bytes, inclusive.

    symbol (modulename): symbol redefinition ignored
    The specified symbol was defined in more than one module. Only the
    first definition of a symbol is accepted. All redefinitions are
    ignored.

    cannot create new library
    The root directory is full, or a library file with the same name
    already exists and is read-only.

    cannot open response file
    The specified response file cannot be found or does not exist.

    cannot rename old library
    The old library file cannot be renamed with a .BAK extension because
    such a file already exists and is read-only.

    cannot reopen library
    The old library file could not be reopened after it was renamed with
    the .BAK extension. This error usually indicates damage to the
    operating system or to the disk directory structure.

    comma or new line missing
    A comma or carriage return was expected in the command line but was
    not found.

    Do not change diskette in drive X:
    LIB may have placed important temporary files on the specified disk.
    Do not remove the disk until the LIB operation is complete or these
    files may be lost.

    error writing to cross-reference file
    The disk or root directory is full.

    error writing to new library
    The new library file cannot be created because the disk is full.

    free: not allocated
    This is a serious problem. Note the circumstances of the failure and
    notify Microsoft Corporation.

    insufficient memory
    Not enough memory is available in the transient program area for LIB
    to successfully perform the requested operations.

    internal failure
    This is a serious problem. Note the circumstances of the failure and
    notify Microsoft Corporation.

    Library does not exist. Create?
    The specified library_file does not exist on disk. Respond with Y to
    create the library file; respond with N to terminate the LIB
    utility.

    mark: not allocated
    This is a serious problem. Note the circumstances of the failure and
    notify Microsoft Corporation.

    option unknown
    The command line included a switch other than /P:n.

    output-library specification ignored
    An output library file was specified in addition to a new library
    file. This is only a warning. The output library file specification
    will be disregarded.

    page size too small
    The page size of an input library file was less than 16 bytes,
    indicating a damaged or otherwise invalid .LIB file. See LIB message
    number: page size too small; ignored.

    syntax error
    The command line included an invalid parameter or switch.

    syntax error: illegal file specification
    A command operator (such as *, -, or +) was given without an object
    module name.

    syntax error: illegal input
    The command line included an invalid parameter or switch.

    syntax error: option name missing
    The command line included a forward slash (/) that was not followed by
    P:n.

    syntax error: option value missing
    The /P switch was not followed by the page size value in bytes.

    terminator missing
    Either a control character (such as Control-Z) was specified at the
    Output library: prompt or the response file line that corresponds to
    LIB's Output library: prompt was not terminated by a carriage return
    or semicolon.

    too many symbols
    The maximum number of public symbols allowed in a library file has
    been exceeded. The limit for all object modules (combined) is
    4609.

    unexpected end-of-file on command input
    The response file did not include all the necessary LIB parameters.

    write to extract file failed
    The destination disk has insufficient space for the complete object
    module, or the root directory is full.

    write to library file failed
    The destination disk has insufficient space to create the new library
    file, or the root directory is full.



LINK
Create .EXE File


Purpose

    Combines relocatable object modules into an executable (.EXE) file.
    The Microsoft Object Linker (LINK) is supplied with the Microsoft
    Macro Assembler (MASM), C Compiler, Pascal Compiler, and FORTRAN
    Compiler. This documentation describes LINK version 3.50.

Syntax

    LINK

    or

    LINK obj_file[+obj_file...][,[exe_file]][,[map_file]][,[library
    [+library...]]] [options] [;]

    or

    LINK @response_file

    where:

    obj_file        is the name of a file containing a relocatable object
                    module produced by MASM or by a high-level-language
                    compiler (default extension = .OBJ).

    exe_file        is the name of the executable file to be produced by
                    LINK (default extension = .EXE).

    map_file        is the name of the file or character device to
                    receive a listing of the names, load addresses, and
                    lengths of the segments in exe_file (default = NUL
                    device; default extension = .MAP).

    library         is the name of an object module library to be
                    searched to resolve external references in the
                    object file(s) (default extension = .LIB).

    response_file   is the name of a text file containing LINK parameters
                    in the order in which they are supplied during an
                    interactive LINK session.

    options         specifies one or more of the following switches.
                    Switches can be either uppercase or lowercase.

                    /CP:n       (/CPARMAXALLOC:n) Sets the maximum number
                                of extra memory paragraphs required by
                                exe_file (default = 65535).

                    /DS         (/DSALLOCATE) Loads the data in DGROUP at
                                the high end of the data segment.

                    /DO         (/DOSSEG) Arranges segments according to
                                the Microsoft language segment-ordering
                                convention.

                    /E          (/EXEPACK) Compresses repetitive sequences
                                of bytes and optimizes exe_file's
                                relocation table.

                    /HI         (/HIGH) Causes exe_file to be loaded as
                                high as possible in memory when exe_file
                                is executed.

                    /HE         (/HELP) Lists LINK options on the screen.
                                No other switches or filenames should be
                                used with this switch.

                    /LI         (/LINENUMBERS) Copies line-number
                                information (if available) from obj_file
                                to map_file. If a map file was not
                                specified, this switch creates one.

                    /M          (/MAP) Copies a list of all public symbols
                                declared in obj_file to map_file. If a
                                map file was not specified, this switch
                                creates one.

                    /NOD        (/NODEFAULTLIBRARYSEARCH) Causes LINK to
                                ignore any library names inserted in the
                                object file by the language compiler.

                    /NOG        (/NOGROUPASSOCIATION) Causes LINK to
                                ignore GROUP associations when assigning
                                addresses.

                    /NOI        (/NOIGNORECASE) Causes LINK to be case
                                sensitive when resolving external names.

                    /O:n        (/OVERLAYINTERRUPT:n) Overrides the
                                interrupt number used by the overlay
                                manager (0-255, default = 63, or 3FH).
                                This switch should be used only when
                                linking with a run-time module from a
                                language compiler that supports overlays.

                    /P          (/PAUSE) Causes LINK to pause and prompt
                                the user to change disks before writing
                                the exe_file.

                    /SE:n       (/SEGMENTS:n) Sets the maximum number of
                                segments that can be processed (1-1024,
                                default = 128).

                    /ST:n       (/STACK:n) Sets the size of the exe_file's
                                stack segment to n bytes (1-65535).

Description

    LINK combines relocatable object modules into an executable file in
    the .EXE format. LINK can be used with object files produced by any
    high-level-language compiler or assembler that supports the Microsoft
    object module format. See PROGRAMMING IN THE MS-DOS ENVIRONMENT:
    PROGRAMMING TOOLS: Object Modules; The Microsoft Object Linker.

    The obj_file parameter, which is required, specifies one or more
    files containing relocatable object modules. If multiple object files
    are linked, their names should be separated by a plus operator (+) or
    a space. If an extension is not specified for an object file, LINK
    supplies the extension .OBJ. Some high-level-language compilers
    support partitioning of the executable program into a root segment and
    one or more overlay segments and include a special overlay manager in
    their libraries; when these compilers are used, the object modules
    that compose each overlay segment should be surrounded with
    parentheses in the LINK command line.

    The exe_file parameter specifies the name of the executable file that
    is created by LINK. The default is the same filename as the first
    object file, but with the extension .EXE.

    The map_file parameter designates the file or character device to
    receive LINK's listing of the name, load address, and length of each
    of exe_file's segments. The map file also includes the names and load
    addresses of any groups in the program, the program entry point, and,
    if the /M switch is used, all public symbols and their addresses. If
    the /LI switch is used and if line numbers were inserted into obj_file
    by the compiler, the starting address of each obj_file program line
    is also copied to map_file. The default extension for a map file is
    .MAP. If the /M or /LI switch is used, a map file is created using the
    name of the specified .EXE file even if map_file is not specified. If
    neither the /M nor the /LI switch is used and map_file is not
    specified, no listing is created.

    The library parameter specifies the object module library or
    libraries that will be searched to resolve external references after
    all the object files are processed. The default extension for library
    files is .LIB. Multiple library names should be separated by plus
    operators (+) or spaces. A maximum of 16 search paths can be specified
    in the LINK command line. If a library name is preceded by a drive
    and/or path, LINK searches only the specified location. If no drive or
    path precedes a library name, LINK searches for library files in the
    following order:

    1.  Current drive and directory

    2.  Any other library search paths specified in the command line, in
        the order they were entered

    3.  Directories specified in the LIB= environment variable, if one
        exists

    In the following example, LINK searches only the \ALTLIB directory on
    drive A to find the library MATH.LIB. To find the library COMMON.LIB,
    LINK searches the current directory on the current drive, then the
    current directory on drive B, then directory \LIB on drive D, and
    finally, any directories named in the LIB environment variable.

    C>LINK TEST,,TEST,A:\ALTLIB\MATH.LIB+COMMON+B:+D:\LIB\  <Enter>

    If default libraries are specified within the object files through
    special records inserted by certain high-level-language compilers,
    those libraries will be searched after the libraries named in the
    command line or response file.

    If the LINK command is entered without parameters, LINK prompts the
    user for each filename needed. The default response for each prompt
    (except the obj_file prompt) is displayed in square brackets and can
    be selected by pressing the Enter key. If there are too many obj_file
    or library names to fit on one line, the line can be terminated by
    entering a plus operator (+) and pressing the Enter key; LINK then
    repeats the prompt. If the user ends any response with a semicolon
    character (;), LINK uses the default values for the remaining fields.

    When the command line contains filenames and switches, commas must be
    used to separate the obj_file, exe_file, map_file, and library
    parameters. If a filename is not supplied, a comma must be used to
    mark its place. If the user places a semicolon after any parameter in
    the command line, LINK terminates the command line at the semicolon
    and uses the default values for any remaining parameters.

    The user can automate complex LINK sessions involving multiple files
    by creating a response file. The response_file parameter must be the
    name of an ASCII file that corresponds line for line to the responses
    that are entered in a normal interactive LINK session. The last line
    of the response file must end with a semicolon character (;) or a
    carriage return. If all parameters required by LINK are not present in
    the response file and the response file does not end with a semicolon
    or carriage return, LINK prompts the user for the missing information.

    LINK supports many options that can be invoked by including a switch
    in the command line, as part of the response to a LINK prompt, or in a
    response file. To simplify this description, these switches are
    grouped according to their functions.

    The /E, /HE, /NOD, /NOI, /P, and /SE:n switches affect LINK's general
    operation. The /E switch compresses repetitive sequences of bytes in
    exe_file and optimizes certain parts of the relocation table in
    exe_file's header. The /E switch functions exactly like the
    EXEPACK utility.

    Note: The /E switch does not always save a significant amount of disk
    space and may even increase file size when used with small programs
    that have few load-time relocations or repeated characters. The
    Microsoft Symbolic Debugger (SYMDEB) utility cannot be used with
    packed files.

    The /HE switch displays the available options on the screen. No other
    switches or filenames should be specified if the /HE switch is used.
    The /NOD switch causes LINK to ignore any default libraries that have
    been added to the object modules by the high-level-language compiler
    that produced the modules, thus restricting searches to those
    libraries specified in the command line or response file. The /NOI
    switch causes LINK to be case sensitive when resolving external
    references to symbols between object modules. The /NOI switch is
    typically used with object files created by high-level-language
    compilers that differentiate between uppercase and lowercase
    letters.

    The /P switch causes LINK to pause and prompt the user before writing
    exe_file to disk, thus allowing the user to exchange the disk used
    during the linking operation for another that has more space
    available. The /SE:n switch controls the number of program segments
    processed by LINK. The n must be a decimal, octal, or hexadecimal
    number from 1 through 1024, inclusive (default = 128). Octal numbers
    must have a leading zero; hexadecimal numbers must begin with 0x.

    The /M and /LI switches affect the production and contents of the
    optional map file. The /M switch creates a map file with the same name
    as exe_file or, if exe_file is not specified, with the same name as
    the first object file and the extension .MAP. The resulting map file
    includes a list of all public symbols and their addresses. The /LI
    switch also creates a map file and includes line-number information if
    available in the object file. (MASM and some high-level-language
    compilers do not insert line-number information into object files.)

    The /D, /DO, /NOG, and /O:n switches affect the structure of the code
    in exe_file. Use of the /D switch places the data in DGROUP at the top
    (highest address) of the memory segment pointed to by the DS register,
    rather than at the bottom (the default). The /DO switch arranges the
    program segments according to a convention expected by all Microsoft
    language compilers: All segments with the class name CODE are placed
    first in the executable file; any other segments that do not belong to
    DGROUP are placed immediately after the CODE segments; all segments
    belonging to DGROUP are placed at the end of the file. The /NOG switch
    causes LINK to ignore group associations specified in the object
    modules when assigning addresses to data and code items; that is,
    segments that would ordinarily have been collected into the same
    physical memory segment because of their association within a GROUP
    are decoupled. The /NOG switch provides compatibility with LINK
    versions 2.02 and earlier and with early versions of Microsoft
    language compilers. The /O:n switch controls the interrupt number
    used by the resident overlay manager if the linked program includes
    overlays. The number n can be any decimal, octal, or hexadecimal
    number in the range 0 through 255 (default = 63, or 3FH). Octal
    numbers must have a leading zero; hexadecimal numbers must begin with
    0x.

    Note: MASM and many high-level-language compilers do not include
    overlay managers in their libraries. Users should check their compiler
    documentation to determine if the /O:n switch can be used.

    Warning: Interrupt numbers that conflict with the software interrupts
    used to obtain MS-DOS or ROM BIOS services or with hardware interrupts
    assigned to peripheral device controllers should not be used in the
    /O:n switch.

    The /C:n, /H, and /ST:n switches control the information in exe_
    file's header that affects the behavior of the MS-DOS system loader
    when the file is read from the disk into RAM for execution. The /C:n
    switch sets the maximum number of 16-byte paragraphs of memory to be
    made available to the program when it is loaded into memory, in
    addition to the memory required to hold the program's code, data, and
    stacks; the default is 65535, which causes the program to be allocated
    all available memory. The /H switch causes the program to be loaded as
    high as possible in the transient program area (free memory), rather
    than as low as possible (the default). The /ST:n switch sets the
    stack size (in bytes) to be allocated for the program when it is
    loaded and overrides any stack segment size declarations in the
    original source code. The number n can be any decimal, octal, or
    hexadecimal number from 1 through 65535; however n must be large
    enough to accommodate any initialized data in the stack segment. Octal
    numbers must have a leading zero; hexadecimal numbers must begin with
    0x. If the /ST:n switch is not used, LINK calculates a program's
    stack size, basing the size on the size of any stack segments given in
    the object files. The /C:n and /ST:n values in the exe_file header
    can be altered after linking by using the EXEMOD utility.

    If LINK is unable to hold in RAM all the data it is processing, it
    creates a temporary disk file named VM.TMP (Virtual Memory) in the
    current directory of the default disk drive. If a floppy disk is in
    the default drive, LINK issues a warning message to prevent the user
    from changing disks until the LINK session is completed. After LINK
    finishes processing, it deletes the temporary file.

    Warning: Any file named VM.TMP that is already on the disk will be
    destroyed if LINK creates the temporary disk file.

Return Codes

    0    No errors or unresolved references were encountered during
            creation of exe_file.
    1    A miscellaneous LINK error occurred that was not covered by
            the other return codes.
    16    A data record was too large to process.
    32    No object files were specified in the command line or response
            file.
    33    The map file could not be created.
    66    A COMMON area was declared that is larger than 65535 (one
            segment).
    96    Too many libraries were specified.
    144    An invalid object module (obj_file) was detected.
    145    Too many TYPDEFs were found in the specified object modules.
    146    Too many group, segment, or class names were found in one
            object module.
    147    Too many segments were found in all the object modules
            combined, or too many segments were found in one
            object module.
    148    Too many overlays were specified.
    149    The size of a segment exceeded 65535.
    150    Too many groups or GRPDEFs were found in one object module.
    151    Too many external symbols were found in one object module.
    177    The size of a group exceeded 65535.

Examples

    The simplest use of LINK is to process a single object file to produce
    an executable file, using all the default values. For example, to
    process the file SHELL.OBJ, create an executable file named SHELL.EXE,
    and search only the default libraries, type

    C>LINK SHELL;  <Enter>

    The semicolon after the filename causes LINK to use the default values
    for all other parameters.

    To link three object files named SHELL.OBJ, VIDEO.OBJ, and DOSINT.OBJ
    into an executable file named SHELL.EXE and search the library
    DEVLIB.LIB on drive B before searching any default libraries,
    type

    C>LINK SHELL+VIDEO+DOSINT,,,B:DEVLIB  <Enter>

    If the LINK command is entered without parameters, LINK prompts the
    user for the necessary information. For example, the following
    interactive session links the file MENUMGR.OBJ into the executable
    file MENUMGR.EXE, creates a map file named MENUMGR.MAP, and searches
    the math floating-point emulator library EM.LIB before any default
    libraries:

    C>LINK  <Enter>

    Microsoft (R) 8086 Object Linker  Version 3.05
    Copyright (C) Microsoft Corp 1983,1984,1985.  All rights reserved.

    Object Modules [.OBJ]: MENUMGR  <Enter>
    Run File [MENUMGR.EXE]:  <Enter>
    List File [NUL.MAP]:  MENUMGR  <Enter>
    Libraries [.LIB]:  EM  <Enter>

Messages

    filename is not a valid library
    The file specified as an object module library either is corrupt or is
    not a library in the format created by the Microsoft LIB
    utility.

    About to generate .EXE file
    Change diskette in drive X and press <ENTER>
    The /P switch was used in the command line. LINK is prompting the user
    to change disks before LINK creates the file containing the executable
    program.

    Ambiguous switch error: "option"
    A valid switch was not entered after a forward slash (/) in the
    command line.

    Array element size mismatch
    A FAR communal array was declared with two or more different array-
    element sizes (for example, once as an array of characters and once as
    an array of real numbers). This error occurs only with programs
    produced by the Microsoft C Compiler or other compilers that support
    FAR communal arrays; it does not occur with object files produced by
    MASM.

    Attempt to access data outside segment bounds
    A data record in an object module specified data extending beyond the
    end of a segment. This is a translator error. Note which compiler or
    assembler produced the invalid object module and notify Microsoft
    Corporation.

    Attempt to put segment name in more than one group in file filename
    A segment was declared to be a member of two groups. Correct the
    source code and recreate the object modules.

    Bad value for cparMaxAlloc
    The value specified using the /C:n option is not in the range 1
    through 65535.

    Cannot create temporary file
    The destination disk has insufficient space for the temporary file, or
    the root directory is full.

    Cannot find file filename
    Change diskette and press <ENTER>
    The specified object file cannot be found in the current drive.

    Cannot find library: filename
    Enter new file spec:
    The specified library file cannot be found or does not exist. Enter
    the correct drive letter, check the spelling of the filename and path,
    or make sure that the LIB environment variable has been set up
    properly.

    Cannot nest response files
    A response file was named within a response file. Revise the response
    file to eliminate the nested file.

    Cannot open list file
    The destination disk has insufficient space for the listing, or the
    root directory is full.

    Cannot open response file: filename
    LINK cannot find the specified response file.

    Cannot open run file
    The destination disk has insufficient space for the .EXE file, or the
    root directory is full.

    Cannot open temporary file
    The destination disk has insufficient space for the temporary file, or
    the root directory is full.

    Cannot reopen list file
    The original disk was not replaced when requested. Restart LINK.

    Common area longer than 65536 bytes
    The program has more than 64 KB of communal variables. This error
    occurs only with programs produced by the Microsoft C Compiler or
    other compilers that support communal variables.

    Data record too large
    An LEDATA record (in an object module) contains more than 1024 bytes
    of data. This is a symptom of an error in the compiler used to
    generate the object module. Document the circumstances and contact
    Microsoft Corporation.

    Dup record too large
    An LIDATA record (in an object module) contains more than 512 bytes of
    data. This error may be caused by a complex structure definition or by
    a series of deeply nested DUP operators.

    File not suitable for /EXEPACK, relink without
    The file linked with the /E switch would have been smaller if it had
    not been compressed. Relink without the /E switch.

    Fixup overflow near number in segment name in filename offset number
    A group is larger than 64 KB, the original source file contains an
    intersegment short jump or intersegment short call, the name of a data
    item conflicts with that of a library subroutine, or an EXTRN
    declaration is placed inside the wrong segment.

    Incorrect DOS version, use DOS 2.0 or later
    LINK uses the extended file management calls to provide path support
    and, thus, does not work with versions of MS-DOS earlier than 2.0.

    Insufficient stack space
    Not enough memory is available to run LINK.

    Interrupt number exceeds 255
    The number specified in the /O:n switch is not in the range 0 through
    255.

    Invalid numeric switch specification
    An incorrect value was entered with one of the LINK options.

    Invalid object module
    One of the object modules is invalid. Recompile the source file. If
    the error persists after recompiling, document the circumstances and
    contact Microsoft Corporation.

    NEAR/HUGE conflict
    Conflicting NEAR and HUGE definitions were given for a communal
    variable. This error occurs only with programs produced by the
    Microsoft C Compiler or other compilers that support communal
    variables.

    Nested left parentheses
    An opening (left) parenthesis is needed on the left side of an overlay
    module.

    Nested right parentheses
    A closing (right) parenthesis is needed on the right side of an
    overlay module.

    No object modules specified
    No object file names were specified in the command line or response
    file.

    Object not found
    One of the object files specified in the command line was not
    found.

    Out of space on list file
    The destination disk has insufficient space for the listing.

    Out of space on run file
    The destination disk has insufficient space for the .EXE file.

    Out of space on scratch file
    The disk in the default drive has insufficient space for temporary
    files.

    Overlay manager symbol already defined: name
    A symbol name was defined that conflicts with one of the special
    overlay manager names. Use another symbol name.

    Please replace original diskette
    in drive X and press <ENTER>
    The /P switch was specified in the command line and the disk to
    receive the .EXE file produced by LINK has already been inserted. This
    message indicates that the .EXE file was successfully created and that
    the original disk should again be placed in the drive.

    Relocation table overflow
    More than 32768 long calls, long jumps, or other long pointers were
    found in the program. The program may need to be restructured to
    reduce the number of FAR references. (Pascal and FORTRAN users should
    try turning off the debugging option before restructuring the
    program.)

    Response line too long
    A line in a response file had more than 127 characters.

    Segment limit set too high
    The number specified in the /SE:n switch was not in the range 1
    through 1024.

    Segment limit too high
    Not enough memory is available for LINK to allocate tables to describe
    the number of segments requested (default = 128 or the number
    specified in the /SE:n switch). Use the /SE:n switch to specify a
    smaller number of segments, or alter the system configuration to
    increase the amount of free memory.

    Segment size exceeds 64K
    The program is a small-model program with more than 64 KB of code or
    data, a compact-model program with more than 64 KB of code, or a
    medium-model program with more than 64 KB of data. Selection of a
    different model or alteration of the program code may be required to
    successfully complete the LINK process.

    Stack size exceeds 65536 bytes
    The size specified for the stack in the /ST:n switch was too large,
    or the combined length of multiple declared stack segments exceeded
    64 KB.

    Symbol already defined: "symbol"
    One of the special overlay symbols required for overlay support was
    previously defined.

    Symbol defined more than once: "symbol" in file
    A symbol has been defined more than once in the object module. Remove
    the extra symbol definition.

    Symbol table overflow
    The program has more than 256 KB of symbolic information (publics,
    externals, segments, groups, classes, files, and so on). Eliminate as
    many public symbols as possible, combine modules and/or segments, and
    recreate the object files.

    Terminated by user
    Ctrl-C or Ctrl-Break was pressed, causing the LINK session to be
    terminated prematurely.

    Too many external symbols in one module
    An object module contains more than the limit of 1023 external
    symbols.

    Too many group-, segment-, and class-names in one module
    One of the object modules for the program contains too many group,
    segment, and class names. The source file for the object module may
    need to be divided or restructured.

    Too many groups
    The program defines more than nine groups (including DGROUP). Groups
    must be combined or eliminated.

    Too many GRPDEFs in one module
    LINK encountered more than nine group definitions (GRPDEFs) in a
    single object module. Reduce the number of GRPDEFs or split the object
    module.

    Too many libraries
    More than 16 libraries were specified. Combine libraries or use object
    modules that require fewer libraries.

    Too many overlays
    The program defines more than 63 overlays. Reduce the number of
    overlays.

    Too many segments
    The program has more than the maximum number of segments as specified
    by the default of 128 or with the /SE:n switch. Use the /SE:n switch
    to specify a greater number of segments.

    Too many segments in one module
    An object module has more than 255 segments. Split the module or
    combine segments.

    Too many TYPDEFs
    An object module contains too many TYPDEF records (these records
    describe communal variables). This error occurs only with programs
    produced with the Microsoft C Compiler or other compilers that support
    communal variables.

    Unexpected end-of-file on library
    This message may indicate that the disk containing the library in use
    was removed prematurely.

    Unexpected end-of-file on scratch file
    The disk containing VM.TMP was removed.

    Unmatched left parenthesis
    A syntax error was detected in the specification of an overlay
    structure. Refer to the language compiler manual for instructions on
    specifying overlays to LINK.

    Unmatched right parenthesis
    A syntax error was detected in the specification of an overlay
    structure. Refer to the language compiler manual for instructions on
    specifying overlays to LINK.

    Unrecognized switch error: "option"
    An unrecognized character was entered after a forward slash (/) in the
    command line.

    Unresolved COMDEF; Microsoft internal error
    This is a serious problem. Note the circumstances of the failure and
    contact Microsoft Corporation.

    Unresolved externals: list
    A symbol was declared external (EXTRN) in one object module but was
    not declared PUBLIC in the object module in which it was defined, or a
    necessary library specification was omitted from the command line or
    response file.

    VM.TMP is an illegal file name
    and has been ignored
    VM.TMP was specified as an object file name. If an object file named
    VM.TMP exists, rename it.

    Warning: load-high disables exepack
    The /H and /E switches cannot be used at the same time.

    Warning: no stack segment
    The program contains no segment with the STACK combine type. This
    message can be ignored if there is a specific reason for not defining
    a stack (for example, if the .EXE file will subsequently be converted
    to a .COM file) or for defining one without the STACK combine
    type.

    WARNING: Segment longer than reliable size
    Although code segments can be as long as 65536 bytes, code segments
    longer than 65500 bytes can be unreliable on the Intel 80286
    microprocessor. Reduce all code segments to 65500 bytes or less.

    Warning: too many public symbols
    The /M switch was used to request a sorted listing of public symbols
    in the map file, but there are too many symbols to sort. LINK will
    produce an unsorted listing instead.



MAKE
Maintain Programs


Purpose

    Interprets a text file of commands to compare dates of files and carry
    out other operations on the basis of the comparison. MAKE is
    customarily used to update the executable version of a program after a
    change to one or more of its source files. The MAKE utility is
    supplied with the Microsoft Macro Assembler (MASM), C Compiler, and
    FORTRAN Compiler. This documentation describes MAKE version 4.05.

Syntax

    MAKE [/D] [/I] [/N] [/S] [name=value ...] filename

    where:

    filename         is an ASCII text file that contains MAKE dependency
                    statements, commands, macro definitions, and
                    inference rules.

    name=value       declares a MAKE macro, associating a specific value
                    with the dummy parameter name.

    /D               displays the last modification date of each file as
                    it is scanned.

    /I               causes MAKE to ignore exit codes returned by programs
                    called by filename.

    /N               displays but does not execute the commands in
                    filename.

    /S               selects "silent" mode (commands are not displayed as
                    they are executed).

    Note: Switches can be either uppercase or lowercase and can be
    preceded by a dash (-) instead of a forward slash (/). Versions of
    MAKE earlier than 4.0 have no switches.

Description

    The MAKE utility allows maintenance of complex programs to be
    automated. Its basic operation is to compare the dates of files and to
    carry out, or not carry out, an associated list of commands on the
    basis of the comparison.

    The filename parameter specifies an ASCII text file often referred to
    as a make file. By convention, filename is the same as the name of
    the executable program being maintained, but without an extension. A
    make file can contain the following types of entries:

    ■  Dependency statements
    ■  Commands
    ■  Macro definitions
    ■  Inference rules
    ■  Comments

    The basic form of a make file is a dependency statement followed by
    one or more valid MS-DOS command lines:

    targetfile: dependentfile1 [dependentfile2...]
            command1
            [command2]
            ...

    where targetfile designates the file that may need updating,
    dependentfile is a source file or files on which targetfile depends,
    and command1, command2, and so forth are any valid MS-DOS internal
    commands or external programs. These commands or programs are executed
    only if the date and time stamps of any dependent file are more recent
    than those of the target file or if the target file does not exist.
    Only one target file can be specified. Any number of dependent files
    can be included; each dependent filename must be separated from the
    next by at least one space. If too many dependent files are included
    to fit on a single line, the line can be terminated with a backslash
    character (\) and the list continued on the next line.

    Any number of MS-DOS command lines can follow a dependency statement.
    The last command line should be followed by a blank line to set it off
    from the next MAKE entry. It is recommended that each command line
    include a leading space or tab character for compatibility with future
    versions of MAKE and existing versions of XENIX MAKE.

    A macro definition takes the form

    name=value

    where both name and value are any string. Whenever name is referenced
    in the make file in the form $(name), name is replaced by the string
    value before the statement that contains it is evaluated or executed.
    Macro definitions can be nested, although very complex macro
    definitions can result in the premature termination of the MAKE
    process because of lack of memory. If name is not defined in the file
    but is defined in the system environment block by a previous SET
    command, $(name) is replaced by the string following the equal sign
    (=) in the environment block. If the command line contains a parameter
    of the form name=value, the command line overrides any definition of
    name in the make file or in the environment block. Thus, the
    precedence for macro definitions with the same name is

    1.  Command line
    2.  Make file
    3.  Environment block

    MAKE contains several special macros that make it more convenient to
    form commands:

╓┌────────────────┌──────────────────────────────────────────────────────────╖
    Macro       Action
    ─────────────────────────────────────────────────────────────────────
    $*          Substitutes as the base portion of targetfile (the
                filename without the extension).

    $@          Substitutes as the complete targetfile name.

    $**         Substitutes as the complete dependentfile list.

    An inference rule specifies a series of commands to be carried out for
    a matching dependency statement that is not followed by its own list
    of commands. Inference rules allow a set of commands to be applied to
    more than one targetfile: dependentfile description, eliminating
    repetition of the same set of commands for several descriptions. An
    inference rule takes the form

    .dependentextension.targetextension:
        command1
        [command2]
        ...

    Whenever MAKE finds a dependency statement not followed by any
    commands, the utility first searches the make file for an inference
    rule. If MAKE doesn't find an inference rule in the make file, the
    utility then searches the current drive and directory (or any
    directories specified with the MS-DOS PATH command) for the tools
    initialization file (TOOLS.INI) and searches the [make] section of
    TOOLS.INI for an inference rule that matches the extensions of the
    target file and dependent files in the dependency statement.

    A make file can contain any number of comment lines. If a comment is
    placed where MAKE expects to find a command, the comment must be on a
    separate line and must have the pound character (#) as the first
    character of the line. Elsewhere, a pound character and following
    comment text can be placed either on a line alone or after the last
    dependent file or command listed on a line. Characters appearing on a
    line after the pound character are ignored during execution.

    The /D, /N, and /S switches affect MAKE's output to the display while
    MAKE is executing. The /D switch causes the last modification date of
    each file to be displayed as the file is scanned. The /N switch causes
    the commands in the make file to be expanded and displayed, but not
    executed; this is useful for determining the result of a specific MAKE
    process without first examining the file dates and without recompiling
    or relinking files. The /S switch selects "silent" mode, in which
    commands are not displayed as they are executed.

    The /I switch causes MAKE to ignore error codes returned by the
    compilers, assemblers, linkers, or other programs called by the make
    file. When the /I switch is used, the MAKE process proceeds to
    completion regardless of errors instead of terminating immediately as
    it ordinarily would, but the resulting files may not be
    executable.

Return Codes

    0  No error; the MAKE process was successful.
    1  Processing was terminated because of a fatal error by MAKE or by
        one of the programs called by MAKE.

Example

    Assume that the file SHELL contains the following MAKE dependency
    statements and commands:

    video.obj: video.asm
            masm video;

    shell.obj: shell.c
            msc shell;

    shell.exe: shell.obj video.obj
            link /map shell+video,shell,shell,slibc2

    The SHELL file asserts that the executable program SHELL.EXE is
    composed of the files SHELL.OBJ and VIDEO.OBJ, which are in turn
    compiled or assembled from the source files SHELL.C and VIDEO.ASM. To
    update the file SHELL.EXE if either of the source files for its
    constituent modules has been changed, type

    C>MAKE SHELL  <Enter>

Messages

    fatal error U1001: macro definition larger than 512
    A single macro was defined to have a value string longer than the 512-
    byte maximum. Rewrite the make file to use two or more short lines
    instead of one long line.

    fatal error U1002: infinitely recursive macro
    The macros defined in the make file form a circular chain.

    fatal error U1003: out of memory
    The make file cannot be processed because insufficent memory is
    available in the transient program area. Split the make file into two
    make files or reconfigure the system to increase available memory.

    fatal error U1004: syntax error : macro name missing
    A macro name is missing from the left side of the equal sign (=).

    fatal error U1005: syntax error : colon missing
    A line that should be a dependency statement lacks the colon that
    separates a target file from its dependent files. MAKE expects any
    line that follows a blank line to be a dependency statement.

    fatal error U1006: targetname : macro expansion larger than 512
    A single macro expansion, plus the length of any string to which it
    may be concatenated, is longer than 512 bytes. Rewrite the make file
    to use two or more short lines instead of one long line.

    fatal error U1007: multiple sources
    An inference rule has been defined more than once in the make
    file.

    fatal error U1008: filename : cannot find file
    The specified file does not exist.

    fatal error U1009: command : argument list too long
    A command line in the make file is longer than 128 characters (the
    maximum MS-DOS allows).

    fatal error U1010: filename : permission denied
    The specified file is read-only.

    fatal error U1011: not enough memory
    Memory is insufficient in the transient program area to execute a
    program listed in the make file. Reconfigure the system to increase
    available memory, if necessary.

    fatal error U1012: filename : unknown error
    This is a serious problem. Note the circumstances of the failure and
    notify Microsoft Corporation.

    fatal error U1013: command : error returncode
    One of the programs or commands called by MAKE was not able to execute
    correctly. MAKE terminates and displays the error code from the
    program that failed.

    warning U4000: filename : target does not exist
    The target file does not already exist. The dependency statement is
    evaluated as though the target file exists and has a date earlier than
    that of any of the dependent files.

    warning U4001: dependent filename does not exist;
    target filename not built
    One of the dependent files does not exist or could not be found, so
    MAKE terminated without creating a new target file.

    warning U4013: command : error returncode (ignored)
    One of the programs or commands called by MAKE did not execute
    successfully and has returned the specified return code. Because MAKE
    was run with the /I switch, MAKE ignores the error and continues
    processing the make file.

    warning U4014: usage : make [/n] [/d] [/i] [/s] [name=value ...] file
    An error was detected in the MAKE command line.



MAPSYM
Create Symbol File for SYMDEB


Purpose

    Processes a map file generated by the Microsoft Object Linker (LINK)
    to create a special symbol file for use with SYMDEB, the symbolic
    debugging program. The MAPSYM utility is supplied with the Microsoft
    Macro Assembler (MASM). This documentation describes MAPSYM version
    4.0.

Syntax

    MAPSYM [/L] map_file

    where:

    map_file    is a map file produced by LINK (default extension = .MAP).

    /L          causes information about the symbol file to be
                displayed as it is created.

    Note: The /L switch can be either uppercase or lowercase and can be
    preceded by a dash (-) instead of a forward slash (/).

Description

    LINK combines relocatable object records (produced by MASM or a high-
    level-language compiler) into an executable program, which is stored
    in a specially formatted file with a .EXE extension. LINK can also
    produce an optional map file that contains information about public
    symbols and addresses in the linked program. The map file is an
    ordinary ASCII text file and has a default extension of .MAP.

    To create a map file to use with MAPSYM, the LINK command line should
    include the /MAP switch, which creates the file, and the /LINENUMBERS
    switch, which includes line numbers. See PROGRAMMING UTILITIES:
    LINK.

    The MAPSYM utility processes a map file into a special symbol file
    that can be used by SYMDEB. A drive and pathname can be specified if
    the map file is not in the current directory. If a file extension is
    not specified, .MAP is assumed.

    The symbol file created by MAPSYM is placed in the current directory
    and has the same name as the map file but has the extension .SYM. It
    can contain a maximum of 1024 segments (or as many segments as can fit
    into available memory) and 10,000 symbols per segment. See
    PROGRAMMING UTILITIES: SYMDEB.

    When the /L switch precedes map_file in the command line, MAPSYM
    displays the names of groups defined in the program described by the
    map and symbol files, plus the program's starting address. The /L
    switch does not affect the format of the symbol file that is
    generated.

Return Codes

    0  No error; the MAPSYM process was successful.
    1  Processing was terminated because of a write failure, because the
        map file specified does not exist, or because the symbol file could
        not be created.
    4  Processing was terminated because an unexpected end-of-file mark
        was detected, because too many segments exist in the map file,
        because no public symbols exist in the map file, or because not
        enough memory is available to create the symbol file.

Example

    To convert the file HELLO.MAP, which was produced by assembling and
    linking the file HELLO.ASM, to a symbol file that can be used by
    SYMDEB, type

    C>MAPSYM /L HELLO  <Enter>

    MAPSYM displays the following:

    Microsoft (R) Symbol File Generator  Version 4.00
    Copyright (C) Microsoft Corp 1984, 1985.  All rights reserved.
    Building: HELLO.SYM
    HELLO.MAP
            Program entry point at 0000:0100
    HELLO     0 segment

    The symbol file produced by MAPSYM symbol has the name
    HELLO.SYM.

Messages

    Can't create: <filename>
    The drive specified does not exist, the current disk or directory is
    full, or the output file already exists and is read-only.

    Can't open MAP file: <filename>
    The file named in the command line does not exist.

    DOS 2.0 or later required
    MAPSYM does not work with versions of MS-DOS earlier than 2.0.

    mapsym: out of memory
    System memory is insufficient to process the map file.

    mapsym: segment table (n) exceeded.
    More than 1024 segments have been used in the map file. The number
    displayed is the total number of segments in the map file.

    No public symbols
    Re-link file with the /M switch!
    The map file created by LINK does not include a list of public names.
    The .EXE file must be relinked using the /MAP switch to generate a map
    file that can be used with MAPSYM.

    Unexpected eof reading: <filename>
    The map file contains no symbols, is corrupt, or is otherwise invalid.
    The .EXE file must be relinked and a new map file generated.

    usage: MAPSYM [/l] maplist
    A syntax error was detected in the command line.

    Write fail on: <filename>
    An error occurred during the creation of the output file.



MASM
Microsoft Macro Assembler


Purpose

    Translates an assembly-language source program into a relocatable
    object module. MASM is part of the Microsoft Macro Assembler (MASM)
    retail package. This documentation describes MASM version 4.0.

Syntax

    MASM

    or

    MASM source_file [,[object_file][,[list_file][,[cref_file]]]]
    [options] [;]

    where:

    source_file     is the name of the file containing the assembly-
                    language source code (default extension = .ASM).

    object_file     is the name of the file to receive the assembled
                    object module (default extension = .OBJ).

    list_file       is the name of the file or device to receive the
                    assembly listing (default = NUL). (If destination =
                    file, default extension = .LST.)

    cref_file       is the name of the cross-reference file to receive
                    information for later processing by the CREF utility
                    (default = NUL). (If destination = file, default
                    extension = .CRF.)

    options         is one or more switches from the list below.

                    /A         Writes the program segments in alphabetic
                                order.

                    /Bn        Sets the size of the source-file buffer in
                                kilobytes (1-63, default = 32).

                    /C         Creates a cross-reference (.CRF) file.

                    /D         Adds a first-pass program listing to
                                list_file if a list file was specified
                                (default = second-pass listing only).

                    /Dsymbol   Defines symbol as a null text string.

                    /E         Assembles code for an 8087/80287 emulator.

                    /Ipath     Defines a directory to be searched for
                                include files.

                    /L         Creates a list (.LST) file with line-
                                number information.

                    /ML        Preserves case sensitivity in all symbol
                                names.

                    /MU        Converts all lowercase names to uppercase
                                names.

                    /MX        Preserves lowercase in public and external
                                names only.

                    /N         Suppresses generation of tables of macros,
                                structures, records, groups, segments,
                                and symbols at the end of the list file.

                    /P         Checks for impure code in 80286 protected
                                mode; has no effect unless the .286P
                                directive is included in the source file.

                    /R         Assembles code for an 8087/80287 math
                                coprocessor.

                    /S         Arranges program segments in order of
                                occurrence.

                    /T         Selects terse mode, suppressing all
                                messages generated during assembly except
                                error messages.

                    /V         Selects verbose mode, displaying the
                                number of lines and symbols at the end of
                                assembly.

                    /X         Includes false conditionals in the list
                                file.

                    /Z         Displays source lines with errors during
                                assembly.

    Note: Switches can be either uppercase or lowercase and can be
    preceded by a dash (-) instead of a forward slash (/).

Description

    MASM translates assembly-language source code into relocatable object
    modules. The object modules can then be placed in a library file or
    processed by the Microsoft Object Linker (LINK) to create an
    executable program.

    The source_file parameter is the only required filename. It specifies
    a file containing the assembly-language source code in ASCII text. If
    no extension is specified, MASM uses .ASM. If no source file is
    entered in the command line, MASM prompts for a source file name.

    The object_file parameter specifies the file that will contain the
    assembled relocatable object code. If this parameter is not supplied,
    MASM uses the same filename as source_file but substitutes the
    extension .OBJ.

    The list_file parameter specifies a destination file or device for
    the optional program listing. The listing contains the original source
    code, the assembled machine code, macro definitions and expansions,
    and other useful information, formatted into pages with titles, dates,
    and page numbers. If the destination of the listing is a file, the
    file's default extension is .LST. If the list_file parameter is not
    included in the command line, MASM sends the listing to NUL (that is,
    a listing is not produced).

    The cref_file parameter specifies the name of a cross-reference file
    to receive information to be processed by the CREF utility. If a file
    extension is not specified, MASM uses .CRF. If the cref_file
    parameter is not included in the command line, MASM sends the file to
    NUL (that is, no cross-reference file is generated).

    If the MASM command is entered without parameters, MASM prompts the
    user for each filename. The default response for each prompt (except
    the source file prompt) is displayed in square brackets and can be
    selected by pressing the Enter key.

    After the source file is specified, if MASM encounters a semicolon
    character (;) in the command line or at any prompt, it uses default
    values for the remaining parameters. MASM ignores any parameters
    specified after the semicolon.

    MASM does two passes to translate the assembly-language code in the
    source file into relocatable object code. Any errors detected during
    translation are displayed on standard output and included in the
    program listing (if one is requested). Two types of errors may be
    detected: warning errors and severe errors. If MASM encounters a
    warning error, it still creates the object file, although the
    resulting file may be unusable. If MASM encounters a severe error, it
    does not create the object file. After a file has been successfully
    assembled without errors, the LINK utility can be used to convert the
    resulting object file into an executable program file.

    MASM supports a wide variety of options that can be selected by
    including switches in the command line or by responding to any
    prompt.

    The /A and /S switches determine the order of segments in the
    resulting object module file. The /A switch places the segments into
    the object file in alphabetic order. The /S switch (the default)
    arranges the segments in the same order they occur in the source
    file.

    The /Bn, /Dsymbol, and /Ipath switches have rather general effects on
    the behavior of MASM. The /Bn switch sets the size (in kilobytes) of
    the source file's RAM buffer; the value of n must be between 1 and
    63, inclusive (default = 32). If the RAM buffer is large enough, the
    entire source file can be kept resident in memory, reducing disk
    activity during passes. The /Dsymbol switch defines a null text-
    string symbol from the command line. This symbol can be referenced
    inside the program with the IFDEF directive to control the conditional
    assembly of portions of the program. The /Ipath switch specifies a
    directory that will be searched for files named in assembler INCLUDE
    statements if those statements do not include an explicit directory.
    As many as 10 such search paths can be specified with individual
    /Ipath switches.

    The /E and /R switches affect the generation of code for the
    8087/80287 emulator or 8087/80287 math coprocessor. (Support for the
    80287 is included with MASM versions 3.0 and later.) The /E switch
    generates software interrupts to floating-point-processor emulator
    routines. A subprogram assembled with the /E switch can be linked to
    C, Pascal, and FORTRAN programs and can use the emulator libraries.
    The /R switch produces in-line machine instructions for the math
    coprocessor when floating-point mnemonics are used.

    The /ML, /MU, and /MX switches control MASM's handling of uppercase
    and lowercase names. The /ML switch makes MASM case sensitive; that
    is, it makes MASM differentiate a name in uppercase letters from the
    same name in lowercase letters. (The /ML switch should not be used if
    the source file contains 8087 WAIT instructions and MASM 4.0 is being
    used to translate the file.) The /MU switch (the default) makes MASM
    case insensitive; all lowercase letters are converted to uppercase for
    purposes of assembly. The /MX switch makes MASM case sensitive for
    public and external names only (names defined with PUBLIC or EXTRN
    directives). The /MX switch is often used to process assembly-language
    functions for C programs.

    The /P switch checks for impure code segments that will cause problems
    if the assembled program is run in 80286 protected mode. The switch
    checks by flagging any instruction that will change a memory location
    addressed through the processor's CS register. The /P switch has no
    effect unless the assembly-language source file includes the .286P
    directive.

    The /C, /D, /L, /N,  and /X switches control the contents of the
    program listing and other optional files that are generated as a
    result of assembly. The /C switch causes the creation of a cross-
    reference (.CRF) file and the addition of line numbers to the list
    (.LST) file (if one exists). The /C switch should be included in the
    command line if the cross-reference file will be used later with the
    CREF utility to produce a cross-reference listing. The /D switch
    includes a listing from the first pass as well as a listing from the
    second pass in the list file if a list file was specified (default =
    second-pass listing only). By comparing the two listings, the user can
    isolate an instruction causing a phase error. (A phase error occurs
    when MASM makes assumptions about addresses, values, or data types on
    the first pass that are not valid in the second pass.) The /L switch
    creates a list file with line-number information and gives it the same
    name as the source file, with the extension .LST. The /N switch
    suppresses generation of tables--symbols, segments, groups,
    structures, records, and macros--at the end of a program listing. The
    /X switch includes statements inside false conditional statements in
    the list file, allowing conditionals that do not generate code to be
    displayed. /X has no effect if the .SFCOND or the .LFCOND directive is
    used in the source file; if the .TFCOND directive is used, the effects
    of /X are reversed.

    Note: The effects of /X are also reversed in MASM version 1.2. In
    that version, statements within a false conditional are included in
    the list file by default, and /X will suppress them.

    The /T, /V, and /Z switches affect MASM's display on standard output.
    The /T (terse) switch suppresses messages to standard output, except
    for messages indicating warning errors or severe errors. The /V
    (verbose) switch displays information about the number of source lines
    and symbols at the end of the assembly, in addition to displaying the
    normal error and symbol space information. The /Z switch displays the
    actual source lines producing assembly errors (rather than displaying
    just the error type and line number).

    Note: Versions of MASM earlier than 4.0 always show both the source
    line and the error message.

Return Codes

    0   No errors were found during assembly.
    1   An error was detected in one of the command-line parameters.
    2   The assembly-language source file could not be opened.
    3   The list file could not be created.
    4   The object file could not be created.
    5   The cross-reference file could not be created.
    6   An include file could not be opened.
    7   At least one severe error was detected during assembly. (MASM
        deletes the invalid object file.)
    8   The assembly was terminated because a memory allocation error
        occurred.
    10  An error occurred in defining a symbol (with the /Dsymbol switch)
        from the command line.
    11  Assembly was interrupted by the user's pressing Ctrl-C or Ctrl-
        Break.

Examples

    To assemble the source file CLEAN.ASM in the current drive and
    directory and place the resulting relocatable object module in the
    file CLEAN.OBJ without producing a listing or a cross-reference file,
    type

    C>MASM CLEAN;  <Enter>

    The semicolon after the first parameter causes MASM to use the default
    values for the rest of the parameters.

    To assemble the source file CLEAN.ASM, put the object code in a file
    named CLEAN.OBJ, create a list file named CLEAN.LST, and place
    information for later processing by the CREF utility in the cross-
    reference file CLEAN.CRF, type

    C>MASM CLEAN,CLEAN,CLEAN,CLEAN  <Enter>

    or

    C>MASM CLEAN,,CLEAN,CLEAN  <Enter>

    To use MASM interactively, enter its name without parameters:

    C>MASM  <Enter>

    MASM then prompts for all the necessary information. For example, the
    interactive session on the next page assembles the file HELLO.ASM into
    the file HELLO.OBJ, producing no listing or .CRF file.

    C>MASM  <Enter>
    Microsoft (R) Macro Assembler  Version 4.00
    Copyright (C) Microsoft Corp 1981, 1983, 1984, 1985. All rights reserved

    Source filename: [.ASM]: HELLO  <Enter>
    Object filename: [HELLO.OBJ]:  <Enter>
    Source listing [NUL.LST]:  <Enter>
    Cross-reference [NUL.CRF]:  <Enter>

    51004 Bytes symbol space free

        0 Warning Errors
        0 Severe Errors

Messages

    8087 opcode can't be emulated
    An 8087 opcode or the operands used with it produced an instruction
    the emulator cannot support.

    Already defined locally
    An attempt was made to define a symbol as EXTRN that had already been
    defined locally.

    Already had ELSE clause
    An attempt was made to define an ELSE clause within an existing ELSE
    clause. (ELSE cannot be nested without nesting IF...ENDIF.)

    Already have base register
    More than one base register was specified within an operand.

    Already have index register
    More than one index register was specified within an operand.

    Block nesting error
    A segment, structure, macro, IRC, IRP, REPT, or nested procedure was
    not terminated properly.

    Byte register is illegal
    A byte register was used incorrectly in an instruction.

    Can't override ES segment
    An attempt was made to override the ES segment in an instruction in
    which this override is invalid.

    Can't reach with segment reg
    No ASSUME directive was given to make the variable reachable.

    Can't use EVEN on BYTE segment
    An EVEN directive was used on a segment declared to be a byte
    segment.

    Circular chain of EQU aliases
    An alias EQU ultimately points to itself.

    Constant was expected
    A constant was expected, but an item was received that does not
    evaluate to a constant.

    CS register illegal usage
    The CS register was used incorrectly in one of the instructions.

    Data emitted with no segment
    Code that is not located within a segment attempted to generate
    data.

    Directive illegal in STRUC
    All statements within STRUC blocks must be either comments preceded by
    a semicolon character (;) or one of the define directives (DB, DW, and
    so on).

    Division by 0 or overflow
    An expression was encountered that resulted in either a division by 0
    or a number too large to be represented.

    DUP is too large for linker
    Nesting of DUP operators was such that a record too large for LINK was
    created.

    End of file, no END directive
    No END statement was encountered, or a nesting error occurred.

    Extra characters on line
    Superfluous characters were detected on a line after sufficient
    information to define an instruction was interpreted.

    extra file name ignored
    The command line contained more than four filename parameters.

    Field cannot be overridden
    An attempt was made to give a value to a field that cannot be
    overridden with a STRUC initialization statement.

    Forced error
    An error was forced with the .ERR directive.

    Forced error - expression equals 0
    An error was forced with the .ERRE directive.

    Forced error - expression not equal 0
    An error was forced with the .ERRNZ directive.

    Forced error - pass1
    An error was forced with the .ERR1 directive.

    Forced error - pass2
    An error was forced with the .ERR2 directive.

    Forced error - string blank
    An error was forced with the .ERRB directive.

    Forced error - string not blank
    An error was forced with the .ERRNB directive.

    Forced error - strings different
    An error was forced with the .ERRDIF directive.

    Forced error - strings identical
    An error was forced with the .ERRIDN directive.

    Forced error - symbol defined
    An error was forced with the .ERRDEF directive.

    Forced error - symbol not defined
    An error was forced with the .ERRNDEF directive.

    Forward reference is illegal
    An item was referenced in the operand of an EQU or equal-sign (=)
    directive before it was defined.

    Illegal register value
    A specified register value does not fit into the reg field (that is,
    the value is greater than 7).

    Illegal size for item
    The size of the referenced item is invalid. This error also frequently
    occurs when an attempt is made to assemble source code written for
    assemblers with less strict type-checking than that of the Microsoft
    Macro Assembler (such as early versions of the IBM assembler). The
    problem can usually be solved by overriding the type of the operand
    with the PTR operator.

    Illegal use of external
    A variable that was declared external was used incorrectly.

    Illegal use of register
    An attempt was made to use a register with an instruction in which a
    register cannot be used.

    Illegal value for DUP count
    The DUP count was not a constant that evaluates to a positive integer
    greater than zero.

    Improper operand type
    An operand was used in a way that prevents opcode generation.

    Improper use of segment register
    An attempt was made to use a segment register in an instruction in
    which use of a segment register is not permitted.

    Impure memory reference
    An attempt was made to store data in the code segment when the .286P
    directive and the /P switch were in effect.

    Index displ. must be constant
    An index displacement was used incorrectly or did not evaluate to an
    absolute number or memory address.

    Internal error
    An internal logic error was detected in the assembler. Document the
    circumstances and contact Microsoft Corporation.

    Label can't have seg. override
    A segment override was used incorrectly.

    Left operand must have segment
    The content of the right operand requires that a segment be specified
    in the left operand.

    Line too long expanding symbol
    A symbol defined by an EQU or equal-sign (=) directive is so long that
    expanding it will cause the assembler's internal buffers to overflow.
    This message may indicate a recursive text macro.

    Missing data; zero assumed
    An operand is missing from a statement and MASM assumes its value is
    zero. This is a warning error; the object file is not deleted as it is
    with severe errors.

    More values than defined with
    Too many initial values were given when defining a variable using a
    REC or STRUC type.

    Must be associated with code
    A data-related item was used where a code-related item was
    expected.

    Must be associated with data
    A code-related item was used where a data-related item was
    expected.

    Must be AX or AL
    A register other than AX or AL was specified where only these are
    acceptable.

    Must be in segment block
    An attempt was made to generate code by instructions that were not
    contained within a segment.

    Must be index or base register
    An instruction requires a base or index register, and some other
    register was specified within square brackets ([]).

    Must be record field name
    A record field name was expected, but something else was
    encountered.

    Must be record or fieldname
    A record name or field name was expected, but something else was
    encountered.

    Must be register
    A register was expected as the operand, but something else was
    encountered.

    Must be segment or group
    A segment or group was expected, but something else was
    encountered.

    Must be structure field name
    A structure field name was expected, but something else was
    encountered.

    Must be symbol type
    A BYTE, WORD, DWORD, or similar designation was expected, but
    something else was encountered.

    Must be var, label or constant
    A variable, label, or constant was expected, but something else was
    encountered.

    Must have opcode after prefix
    A REP, REPE, REPNE, REPZ, or REPNZ instruction was not followed by the
    mnemonic for a string operation.

    Near JMP/CALL to different CS
    An attempt was made to do a NEAR jump or call to a location in a code
    segment defined with a different ASSUME:CS.

    No immediate mode
    Immediate data was supplied as an operand for an instruction that
    cannot use immediate data. For example, immediate data cannot be moved
    directly with a MOV instruction to a segment register; it must first
    be moved into a general register and then copied to the segment
    register.

    No or unreachable CS
    An attempt was made to jump to a label that is unreachable.

    Normal type operand expected
    A STRUC, BYTE, WORD, or some other invalid operand was encountered
    when a variable label was expected.

    Not in conditional block
    An ENDIF or ELSE statement was encountered, and no previous
    conditional-assembly directive was active.

    Not proper align/combine type
    The SEGMENT parameters are incorrect. Check the align and combine
    types to be sure they are valid.

    One operand must be const
    The addition operator was used incorrectly.

    Only initialize list legal
    An attempt was made to use a STRUC name without angle brackets (<>).

    Operand combination illegal
    A two-operand instruction was specified and the combination specified
    was invalid.

    Operand must have segment
    A SEG directive was used incorrectly.

    Operand must have size
    An operand was encountered that needed a specified size, but none had
    been provided. Often this error can be remedied by using the PTR
    operator to specify a size type.

    Operand not in IP segment
    An operand cannot be accessed because it is not in the segment last
    assigned to CS with an ASSUME directive.

    Operand types must match
    MASM encountered different kinds or sizes of arguments in a case where
    they must match.

    Operand was expected
    MASM expected an operand, but an operator was encountered.

    Operands must be same or 1 abs
    The subtraction operator was used incorrectly.

    Operator was expected
    MASM expected an operator, but an operand was encountered.

    Out of memory
    System memory is insufficient to complete the assembly. If a listing
    (.LST) or cross-reference (.CRF) file was being generated, retry the
    assembly, generating only an object file. It may also be necessary to
    modify the source program to reduce the load on the symbol table (by
    shortening names or reducing the number of EQU statements or macros,
    for example).

    Override is of wrong type
    An attempt was made to use a data item of incorrect size in a STRUC
    initialization statement.

    Override value is wrong length
    The override value for a structure field is too large to fit in the
    field.

    Override with DUP is illegal
    An attempt was made to use DUP to override in a STRUC initialization
    statement.

    Phase error between passes
    The program has ambiguous instruction directives that caused the
    location of a label in the program to change in value between the
    first and second passes of MASM. A common cause is a forward reference
    to a typed data item in the instructions preceding the label that
    generated the phase error message. Use the /D switch to produce a
    first-pass listing to aid in resolving phase errors between passes.

    Redefinition of symbol
    This message is displayed during first pass upon the second
    declaration of a symbol that has been defined in more than one place.

    Reference to mult defined
    The instruction references a symbol that has been defined more than
    once.

    Register already defined
    An internal error was detected. Note the circumstances of the failure
    and contact Microsoft Corporation.

    Relative jump out of range
    A conditional jump references a label that is out of the allowed range
    of -128 to +127 bytes relative to the current instruction. The problem
    usually can be corrected by reversing the condition of the jump and
    using an unconditional jump (JMP) to the out-of-range label.

    Segment parameters are changed
    The list of parameters encountered for a SEGMENT was not identical to
    the list specified the first time the segment was used.

    Shift count is negative
    A shift expression was generated that resulted in a negative shift
    count.

    Should have been group name
    A group name was expected, but something else was encountered.

    Symbol already different kind
    An attempt was made to redefine an already defined symbol.

    Symbol has no segment
    An attempt was made to use a variable with SEG that has no known
    segment.

    Symbol is already external
    An attempt was made to redefine a symbol as local that has already
    been defined as external.

    Symbol is multi-defined
    This message is displayed during the second pass upon each declaration
    of a symbol that has been defined in more than one place.

    Symbol is reserved word
    An attempt was made to use a reserved MASM word as a symbol.

    Symbol not defined
    A symbol that had not been defined was used.

    Symbol type usage illegal
    A PUBLIC symbol was used incorrectly.

    Syntax error
    The syntax of the statement does not match any recognizable syntax.

    Type illegal in context
    The type specified is of an unacceptable size.

    Unable to open input file filename
    The specified source file cannot be found.

    unknown switch letter
    The command line included an invalid switch.

    Unknown symbol type
    MASM does not recognize the size type specified in a label or external
    declaration. Rewrite with a valid type such as BYTE, WORD, or NEAR.

    Value is out of range
    A value is too large for its expected use.

    Wrong type of register
    A directive or instruction expected one type of register, but another
    type was encountered.



DEBUG
Program Debugger


Purpose

    Allows the controlled execution of a program for debugging purposes or
    the alteration of the binary contents of any file. The DEBUG utility
    is supplied with the MS-DOS distribution disks.

Syntax

    DEBUG

    or

    DEBUG filename [parameter ...]

    where:

    filename         is the name of the file that contains data to be
                    modified or a program to be debugged. If filename
                    includes an extension, it must be specified.

    parameter ...    is one or more filenames or switches required by a
                    program being debugged.

Description

    The DEBUG program allows a file to be loaded, examined, and altered.
    If the file is not a .EXE file or a .HEX file, it may also be written
    back to disk. If the file contains a program, the program can be
    disassembled, modified, traced one instruction at a time, or executed
    at full speed with preset breakpoints. DEBUG can also be used to read
    from and write to input/output (I/O) ports and to read, modify, and
    write absolute disk sectors.

    The command line typically includes the filename parameter, which is
    the name of an executable program (with the extension .COM or .EXE) to
    be loaded into DEBUG's memory buffer. Files with the extension .EXE
    are loaded in a manner compatible with the MS-DOS loader; if
    necessary, the contents of the file are relocated so that the program
    is ready to execute. Files with the extension .HEX are converted to
    binary images and loaded at the internally specified address. All
    other files are assumed to be direct memory images and are read
    directly into memory starting at offset 100H.

    An appropriate program segment prefix (PSP) is synthesized at the head
    of DEBUG's buffer for use by the target program (the program being
    debugged). The PSP includes a command tail at offset 80H and default
    file control blocks (FCBs) at offsets 5CH and 6CH, constructed from
    the optional parameters following filename.

    After DEBUG is loaded and the first file named in the command line is
    also located and loaded, DEBUG displays its special prompt character,
    a hyphen (-), and awaits a command. DEBUG commands consist of a single
    letter, usually followed by one or more parameters. Uppercase and
    lowercase characters are treated the same except when they are
    contained in strings enclosed within single or double quotation marks.
    All commands are executed by pressing the Enter key.

    The DEBUG commands are

╓┌─────────────────┌─────────────────────────────────────────────────────────╖
    Command      Action
    ──────────────────────────────────────────────────────────────────────
    A            Assemble machine instructions (versions 2.0 and later).
    C            Compare memory areas.
    D            Display memory.
    E            Enter data.
    F            Fill memory.
    G            Go execute program.
    H            Perform hexadecimal arithmetic.
    I            Input from port.
    L            Load file or sectors.
    M            Move (copy) data.
    N            Name file or command-tail parameters.
    O            Output to port.
    P            Proceed through loop or subroutine (versions 3.0 and
                later).
    Q            Quit debugger.
    R            Display or modify registers.
    S            Search memory.
    T            Trace program execution.
    U            Disassemble (unassemble) program.
    W            Write file or sectors.

    The parameters for a DEBUG command include addresses, ranges, 8-bit or
    16-bit hexadecimal values, and lists. Multiple parameters can be
    separated by spaces, tabs, or commas, but separators are required
    only between hexadecimal values.

    An address can be a simple offset or a complete address in the form
    segment:offset. The offset is always a hexadecimal number in the range
    00H through FFFFH; the segment can be either a hexadecimal value in
    the same range or a two-character segment register name (CS, DS, ES,
    or SS). If the segment portion of an address is absent, DEBUG uses DS
    unless an A, G, L, T, U, or W command is used, in which case DEBUG
    uses CS.

    A range specifies an area of memory and can be expressed as either two
    addresses or a starting address and a length. A segment can be
    included only in the first element of a range; an error message is
    displayed if a segment is found in the second address. A length is
    represented by the letter L, followed by a hexadecimal value between
    00H and FFFFH that indicates the number of bytes following the
    starting address that the command should operate on.

    Note: Any length that causes an address to exceed 16 bits will
    generate an error.

    A byte, or 8-bit, value is entered as one or two hexadecimal digits,
    whereas a word, or 16-bit, value is entered as one to four hexadecimal
    digits. Leading zeros can be omitted.

    A list is composed of one or more byte values or strings, separated by
    spaces, commas, or tabs. A string is one or more ASCII characters
    enclosed within single or double quotation marks. Case is significant
    within a string. If the same type of quote character that is used to
    delimit the string occurs inside the string itself, the character must
    be doubled inside the string in order to be interpreted correctly. For
    example:

    "This ""string"" is OK."

    When used, a list must be the last parameter in the command
    line.

    DEBUG responds to an invalid command by pointing to the approximate
    location of the error with a caret character (^) and displaying the
    word Error. For example:

    -D CS:0100,CS:0200  <Enter>
                ^ Error

    DEBUG maintains a set of virtual CPU registers for a program being
    debugged. These registers can be examined and modified with DEBUG
    commands. When a program is first loaded for debugging, the virtual
    registers are initialized with the following values:

╓┌──────────────┌─────────────────────────────┌──────────────────────────────╖
    Register  .COM Program                  .EXE Program
    ──────────────────────────────────────────────────────────────────────
    AX        Valid drive error code        Valid drive error code
    BX        Upper half of program size    Upper half of program size
    CX        Lower half of program size    Lower half of program size
    DX        Zero                          Zero
    SI        Zero                          Zero
    DI        Zero                          Zero
    BP        Zero                          Zero
    SP        FFFEH or top of available     Size of stack segment
            memory minus 2
    IP        100H                          Offset of entry point within
                                            target program's code segment
    CS        PSP                           Base of target program's code
                                            segment
    DS        PSP                           PSP
    ES        PSP                           PSP
    SS        PSP                           Base of target program's stack
                                            segment

    Note: DEBUG checks the first three parameters in the command line. If
    the second and third parameters are filenames, DEBUG checks any drive
    specifications with those filenames to verify that they designate
    valid drives. Register AX contains one of the following codes:

╓┌──────────────┌────────────────────────────────────────────────────────────╖
    Code      Meaning
    ──────────────────────────────────────────────────────────────────────
    0000H     The drives specified with the second and third filenames are
            both valid, or only one filename was specified in the
            command line.

    00FFH     The drive specified with the second filename is invalid.

    FF00H     The drive specified with the third filename is invalid.

    FFFFH     The drives specified with the second and third filenames are
            both invalid.

    DEBUG also maintains a set of virtual flags, which may be set or
    cleared. The flags are

╓┌───────────────────────┌───────────────────┌───────────────────────────────╖
    Flag Name          Value If Set (1)    Value If Clear (0)
    ──────────────────────────────────────────────────────────────────────
    Overflow           OV (Overflow)       NV (No Overflow)B
    Direction          DN (Down)           UP (Up)
    Interrupt          EI (Enabled)        DI (Disabled)
    Sign               NG (Minus)          PL (Plus)
    Zero               ZR (Zero)           NZ (Not Zero)
    Aux Carry          AC (Aux Carry)      NA (No Aux Carry)
    Parity             PE (Even)           PO (Odd)
    Carry              CY (Carry)          NC (No Carry)

    Before DEBUG transfers control to the target program, it saves
    the actual CPU registers and then loads them with the current values
    of the virtual registers. Conversely, when control reverts to DEBUG
    from the target program, the returned register contents are stored
    back in the virtual register set for inspection and alteration by the
    user.

Examples

    To load the file SHELL.EXE in the current directory for execution
    under the control of DEBUG, type

    C>DEBUG SHELL.EXE  <Enter>

    To use the DEBUG program to inspect or modify memory or to read,
    modify, and write absolute disk sectors, simply type

    C>DEBUG  <Enter>

Message

    File not found
    The filename supplied as the first parameter in the DEBUG command line
    cannot be found.



DEBUG: A
Assemble Machine Instructions


Purpose

    Allows entry of assembler mnemonics and translates them into
    executable machine code.

Syntax

    A [address]

    where:

    address    is the starting location for the assembled machine code.

Description

    The Assemble Machine Instructions (A) command accepts assembly-
    language statements, rather than hexadecimal values, for the Intel
    8086/8088 microprocessors and the Intel 8087 math coprocessor and then
    assembles each statement into executable machine code.

    The address parameter specifies the location where entry of assembly-
    language mnemonics will begin. If address is omitted, DEBUG uses the
    address following the last instruction generated the last time the A
    command was used. If the A command has not been used, DEBUG uses the
    current value of the target program's CS:IP registers.

    After an A command is entered, DEBUG prompts for each assembly-
    language statement by displaying the address, in the form of a segment
    and an offset, in which the assembled code will be stored. When the
    Enter key is pressed, the assembly-language statement is translated,
    and each byte of the resulting machine instruction is stored
    sequentially in memory (overwriting existing information), beginning
    at the displayed address. The address following the last byte of the
    machine instruction is then displayed so that the user can enter the
    next assembly-language statement. Pressing the Enter key alone in
    response to the address prompt terminates the A command.

    The syntax of assembly-language statements accepted by the DEBUG A
    command differs slightly from that of the usual Microsoft Macro
    Assembler programming statements. The differences can be summarized as
    follows:

    ■  All numbers are assumed to be hexadecimal integers and should be
        entered without a trailing H character.

    ■  Segment overrides must be specified by preceding the entire
        instruction with CS:, DS:, ES:, or SS:.

    ■  File control directives (NAME, PAGE, TITLE, and so forth), macro
        definitions, record structures, and conditional assembly directives
        are not supported by DEBUG.

    ■  Specific hexadecimal values, rather than program labels, must be
        included.

    ■  When the data type (word or byte) is not implicit in the
        instruction, the type must be specified by preceding the operand
        with BYTE PTR (or BY) or WORD PTR (or WO).

    ■  The size of the string in a string operation must be specified by
        adding a B (byte) or W (word) to the string instruction mnemonic
        (for example, LODSB or LODSW).

    ■  The DB and DW instructions accept a parameter of the type list and
        assemble byte and word values directly.

    ■  The WAIT or FWAIT opcodes for 8087 assembler statements are not
        generated by default, so they must be coded explicitly.

    ■  Memory locations are differentiated from immediate operands by
        enclosing memory addresses in square brackets.

    ■  Repeat prefixes, such as REP, REPZ, or REPNZ, can be entered either
        alone on the line preceding the statement they affect or
        immediately preceding the statement on the same line.

    ■  Although the assembler generates the optimal form (SHORT, NEAR, or
        FAR) for jumps or calls, depending on the destination address,
        these designations can be overridden by preceding the operand with
        a NEAR (or NE) or FAR (no abbreviation) prefix.

    ■  The mnemonic for a FAR RETURN is RETF.

    Examples

    To begin assembling code at address CS:0100H, type

    -A 100  <Enter>

    To assemble the instruction sequence

    LODS  WORD PTR [SI]
    XCHG  BX,AX
    JMP   [BX]

    beginning at address CS:0100H, the following dialogue would take
    place:

    -A 100  <Enter>
    1983:0100  LODSW  <Enter>
    1983:0101  XCHG BX,AX  <Enter>
    1983:0103  JMP [BX]  <Enter>
    1983:0105  <Enter>


    To continue assembling at the location following the last instruction
    generated by a previous A command, type

    -A  <Enter>



DEBUG: C
Compare Memory Areas


Purpose

    Compares two areas of memory and reports any differences.

Syntax

    C range address

    where:

    range      is the starting and ending addresses or the starting
                address and length of the first area of memory to be
                compared.

    address    is the starting address of the second area of memory to be
                compared.

Description

    The Compare Memory Areas (C) command compares the contents of two
    areas of memory. The location and contents of any differing bytes are
    displayed in the following format:

    address1  byte1  byte2  address2

    If no differences are found, the DEBUG prompt returns.

    The range parameter specifies the starting and ending addresses or
    the starting address and length in bytes of the first area of memory
    to be compared. The address parameter specifies the beginning address
    of the second area of memory to be compared. If a segment is not
    included in range or address, DEBUG uses DS.

Example

    To compare the 64 bytes beginning at CS:CE00H with the 64 bytes
    beginning at CS:CF0AH, type

    -C CS:CE00 CE3F CS:CF0A  <Enter>

    or

    -C CS:CE00 L40 CS:CF0A  <Enter>

    If any differences are found, DEBUG displays them in the following
    format:

    2124:CE06  00  FF  2124:CF10



DEBUG: D
Display Memory


Purpose

    Displays the contents of an area of memory in hexadecimal and ASCII
    format.

Syntax

    D [range]

    where:

    range      is the starting and ending addresses or the starting
                address and length of the area to be displayed.

Description

    The Display Memory (D), or Dump, command displays the contents of a
    specified range of memory addresses in hexadecimal and ASCII format.

    The range parameter gives the starting and ending addresses or the
    starting address and length in bytes of the memory to be displayed. If
    range does not include a segment, DEBUG uses DS.

    If range is omitted the first time the D command is used, the display
    starts at the target program's CS:IP registers. If range was
    specified in a preceding D command, the memory address following the
    last address displayed by that command is used. If a length is not
    explicitly stated in a D command, 128 bytes are displayed.

    Each line displays a segment and offset, followed by the contents of
    16 bytes of memory represented as hexadecimal values and separated by
    spaces (except the eighth and ninth values, which are separated by a
    dash), followed by the ASCII character equivalents (if any) of the
    same 16 bytes. In the ASCII portion, nonprinting characters are
    displayed as periods.

Examples

    To display the contents of the 128 bytes of memory beginning at
    7F00:0100H, type

    -D 7F00:0100  <Enter>

    The contents of the memory addresses are displayed in the following
    format:

7F00:0100  20 64 65 76 69 63 65 0D-0A 00 60 39 0D 0A 00 7C  device...'9...|
7F00:0110  39 08 20 08 00 81 39 04-1B 5B 32 4A 42 BD 11 44 9. ...9..[2JB=.D
7F00:0120  2E 26 45 AF 11 47 B3 11-48 A5 11 4C B8 11 4E D3 .&E/.G3.H%.L8.NS
7F00:0130  11 50 DF 11 51 AB 11 54-DF 1E 56 37 11 5F 9F 16 .P_.Q+.T_.V7._..
7F00:0140  24 C0 11 00 03 4E 4F 54-C1 07 0A 45 52 52 4F 52 $@...NOTA..ERROR
7F00:0150  4C 45 56 45 4C 85 08 05-45 58 49 53 54 18 08 00 LEVEL...EXIST...
7F00:0160  03 44 49 52 03 91 0C 06-52 45 4E 41 4D 45 01 C0 .DIR....RENAME.@
7F00:0170  0F 03 52 45 4E 01 C0 0F-05 45 52 41 53 45 01 68 ..REN.@..ERASE.h

    To view the next 128 bytes of memory, type

    -D  <Enter>

    In this case, the contents of memory addresses 7F00:0180H through
    7F00:01FFH are displayed.



DEBUG: E
Enter Data


Purpose

    Enters data into memory.

Syntax

    E address [list]

    where:

    address    is the first memory location for data entry.

    list       specifies the data to be entered into successive bytes of
                memory, starting at address.

Description

    The Enter Data (E) command allows data to be entered into successive
    memory locations. The data can be entered in either hexadecimal or
    ASCII format. Data previously stored in the specified locations is
    lost.

    The address parameter specifies the first byte to be modified. If
    address does not include a segment, DEBUG uses DS. The address is
    incremented for each byte of data stored.

    The list parameter is one or more hexadecimal byte values and/or
    strings, separated by spaces, commas, or tab characters. Strings must
    be enclosed within single or double quotation marks, and case is
    significant within a string.

    If list is included in the command line, the changes to memory are
    made unless an error is detected in the command line, in which case an
    error message is displayed and the E command is terminated. If list
    is omitted from the command line, the user is prompted byte by byte
    for data to be entered into memory, starting at address. The current
    contents of a byte are displayed, followed by a period. A new value
    for that byte can be entered as one or two hexadecimal digits (extra
    characters are ignored) or the contents can be left unchanged.
    Pressing the spacebar displays the contents of the next byte. Entering
    a minus sign or hyphen character (-) instead of pressing the spacebar
    displays the contents of the previous byte. A maximum of 8 bytes can
    be entered on each input line; a new line is begun each time an 8-byte
    boundary is crossed. Pressing the Enter key without pressing the
    spacebar or entering any data terminates data entry.

    Text strings can be entered only by using the list parameter; they
    cannot be entered in response to an address prompt.

Examples

    To store the byte values 00H, 0DH, and 0AH in the three bytes
    beginning at DS:1FB3H, type

    -E 1FB3 00 0D 0A  <Enter>

    To store the string MAIN MENU into memory beginning at address
    ES:0C14H, type

    -E ES:C14 "MAIN MENU"  <Enter>



DEBUG: F
Fill Memory


Purpose

    Stores a repetitive data pattern in an area of memory.

Syntax

    F range list

    where:

    range      is the starting and ending addresses or starting address
                and length of the memory to be filled.

    list       is the data to be entered.

Description

    The Fill Memory (F) command fills an area of memory with the data from
    a list. The data can be entered in either hexadecimal or ASCII format.
    Any data previously stored at the specified locations is lost. If an
    error message is displayed, the original values in memory remain
    unchanged.

    The range parameter specifies the starting and ending addresses or
    the starting address and hexadecimal length in bytes of the area of
    memory to be filled. If range does not specify a segment, DEBUG uses
    DS.

    The list parameter specifies one or more hexadecimal byte values
    and/or strings, separated by spaces, commas, or tab characters.
    Strings must be enclosed in single or double quotation marks, and case
    is significant within a string.

    If the area to be filled is larger than the data list, the list is
    repeated as often as necessary to fill the area. If the data list is
    longer than the area of memory to be filled, it is truncated to fit
    into the area.

Examples

    To fill the area of memory from DS:0B10H through DS:0B4FH with the
    value 0E8H, type

    -F B10 B4F E8  <Enter>

    or

    -F B10 L40 E8  <Enter>

    To fill the 16 bytes of memory beginning at address CS:1FA0H by
    replicating the 2-byte sequence 0DH 0AH, type

    -F CS:1FA0 1FAF 0D 0A  <Enter>

    or

    -F CS:1FA0 L10 0D 0A  <Enter>

    To fill the area of memory from ES:0B00H through ES:0BFFH by
    replicating the text string BUFFER, type

    -F ES:B00 BFF "BUFFER"  <Enter>

    or

    -F ES:B00 L100 "BUFFER"  <Enter>



DEBUG: G
Go


Purpose

    Transfers control from DEBUG to the program being debugged.

Syntax

    G [=address] [break0 [... break9]]

    where:

    address                is the location DEBUG begins execution.

    break0...break9        specify from 1 to 10 temporary breakpoints.

Description

    The Go (G) command transfers control from DEBUG to the program being
    debugged. If no breakpoints are set, the program executes until it
    crashes or finishes, in which latter case the message Program
    terminated normally is displayed and control returns to DEBUG. (After
    this message is displayed, the program may need to be reloaded before
    it can be executed again.)

    The address parameter can specify any location in memory. If no
    segment is specified, DEBUG uses the target program's CS register. If
    address is omitted, DEBUG transfers to the current address in the
    target program's CS:IP registers. An equal sign (=) must precede
    address to distinguish it from the breakpoints break0...break9.

    The parameters break0...break9 are addresses that represent from 1 to
    10 temporary breakpoints that can be set as part of the G command. A
    breakpoint is an address at which execution stops. Breakpoints can be
    placed in any order, because execution stops at the first breakpoint
    address encountered, regardless of the position of that breakpoint in
    the list. Each breakpoint address must contain the first byte of an
    8086 opcode. DEBUG installs breakpoints by replacing the first byte of
    the machine instruction at each breakpoint address with an INT 03H
    instruction (opcode 0CCH). If the program encounters a breakpoint,
    execution is suspended and control returns to DEBUG. DEBUG then
    restores the original machine code to the breakpoint addresses;
    displays the contents of the registers, the status of the flags, and
    the instruction pointed to by CS:IP; and displays the DEBUG prompt. If
    the program executes to completion without encountering any of the
    breakpoints or stops for any reason other than because it encountered
    a breakpoint, DEBUG does not replace the INT 03H instructions with the
    original machine code, and the Load File or Sectors (L) command must
    be used to reload the original program.

    The G command requires that the target program's SS:SP registers point
    to a valid stack that has at least 6 bytes of stack space available.
    When the G command is executed, it pushes the target program's flags
    and CS and IP registers onto the stack and then transfers control to
    the target program with an IRET instruction. Thus, if the target
    program's stack is not valid or is too small, the system may
    crash.

Examples

    To begin execution of the program in DEBUG's buffer at location
    CS:110AH and set breakpoints at CS:12FCH and CS:1303H, type

    -G =110A 12FC 1303  <Enter>

    To resume execution of the program after a breakpoint has been
    encountered and control has been returned to DEBUG, type

    -G  <Enter>

Messages

    bp Error
    More than 10 breakpoints were specified in a G command. The command
    must be entered again with 10 or fewer breakpoints.

    Program terminated normally
    No breakpoints were encountered and the target program executed to
    completion. If breakpoints were set, the original program should be
    restored with the L command.



DEBUG: H
Perform Hexadecimal Arithmetic


Purpose

    Displays the sum and difference of two hexadecimal numbers.

Syntax

    H value1 value2

    where:

    value1 and value2     are any two hexadecimal numbers from
                        0 through FFFFH.

Description

    The Perform Hexadecimal Arithmetic (H) command displays the sum and
    the difference of two 16-bit hexadecimal numbers--that is, the result
    of the operations value1+value2 and value1-value2. If value2 is
    greater than value1, the difference of the two values is displayed as
    a two's complement number. This command is convenient for quickly
    calculating addresses and other values during an interactive debugging
    session.

Examples

    To display the sum and the difference of the values 4B03H and 104H,
    type

    -H 4B03 104  <Enter>

    This produces the following display:

    4C07  49FF

    If the addition produces an overflow, the four least significant
    digits are displayed. For example, the command line

    -H FFFF 2  <Enter>

    produces the following display:

    0001 FFFD

    If the second number is bigger than the first, the difference is
    displayed in two's complement form. For example, the command
    line

    -H 1 2  <Enter>

    produces the following display:

    0003 FFFF



DEBUG: I
Input from Port


Purpose

    Reads and displays 1 byte from an input/output (I/O) port.

Syntax

    I port

    where:

    port      is an I/O port address from 0 through FFFFH.

Description

    The Input from Port (I) command reads the specified I/O port address
    and displays the data as a two-digit hexadecimal number.

    Warning: The I command should be used with caution because it
    directly accesses the computer hardware and no error checking is
    performed. Input operations directed to the ports assigned to some
    peripheral device controllers may interfere with the proper operation
    of the system. If no device has been assigned to the specified I/O
    port or if the port is write-only, the value displayed by an I command
    is unreliable.

Example

    To read and display the contents of I/O port 10AH, type

    -I 10A  <Enter>

    An example of the output of this command is

    FF



DEBUG: L
Load File or Sectors


Purpose

    Loads a file or individual sectors from a disk into DEBUG's
    memory.

Syntax

    L [address]

    or

    L address drive start number

    where:

    address    is the memory location for the data to be read from the
                disk.

    drive      is the number of the disk drive to read (0 = drive A, 1 =
                drive B, 2 = drive C, and so on).

    start      is the hexadecimal number of the first logical sector to
                load (0-FFFFH).

    number     is the hexadecimal number of consecutive sectors to load
                (0-FFFFH).

Description

    The Load File or Sectors (L) command loads a file or individual
    sectors from a disk. When the L command is entered without parameters
    or with only an address, the file specified in the DEBUG command line
    or the one in the most recent Name File or Command-Tail Parameters (N)
    command line is loaded from the disk into memory. If no segment is
    specified in address, DEBUG uses CS. If the file's extension is .EXE,
    the file is placed in DEBUG's target program buffer at the load
    address specified in the .EXE file's header. If the file's extension
    is .COM, the file is loaded at offset 100H. (If for some reason an
    address other than 100H is entered for a .EXE or .COM file, an error
    message is displayed; if the address is 100H, the specification is
    ignored.) The length of the file or, in the case of a .EXE file, the
    actual length of the program (the length of the file minus the header)
    is placed in the target program's BX and CX registers, with the most
    significant 16 bits in register BX.

    The L command can also be used to bypass the MS-DOS file system and
    directly access logical sectors on the disk. The memory address
    (address), disk drive number (drive), starting logical sector number
    (start), and number of sectors to load (number) must all be specified
    in the command line.

    Note: The L command should not be used to access logical sectors on
    network drives.

Examples

    To load the file specified in the DEBUG command line or in the most
    recent N command into DEBUG's target program buffer, type

    -L  <Enter>

    To load eight sectors from drive B, starting at logical sector 0, to
    memory location CS:0100H, type

    -L 100 1 0 8  <Enter>

Messages

    Disk error reading drive <FI>X
    The specified drive does not exist or the disk in the specified drive
    is defective.

    File not found
    The file specified in the most recent N command cannot be found.



DEBUG: M
Move (Copy) Data


Purpose

    Copies the contents of one area of memory to another.

Syntax

    M range address

    where:

    range      specifies the starting and ending addresses or the
                starting address and length of the area of memory to be
                copied.

    address    is the first byte in which the copied data will be placed.

Description

    The Move (Copy) Data (M) command copies data from one memory location
    to another without altering the data in the original location. If the
    source and destination areas overlap, the data is copied so that the
    resulting copy is correct; the data in the original location is
    changed where the two areas overlap.

    The range parameter specifies either the starting and ending
    addresses or the starting address and length of the memory to be
    copied. The address parameter is the first byte in which the copy
    will be placed. If range does not contain an explicit segment, DEBUG
    uses DS; if address does not contain a segment, DEBUG uses the
    segment used for range.

Example

    To copy the data in locations DS:0800H through DS:08FFH to locations
    DS:0900H through DS:09FFH, type

    -M 800 8FF 900  <Enter>

    or

    -M 800 L100 900  <Enter>



DEBUG: N
Name File or Command-Tail Parameters


Purpose

    Inserts filenames and/or switches into the simulated program segment
    prefix (PSP).

Syntax

    N parameter [parameter...]

    where:

    parameter       is one or more filenames or switches to be placed in
                    the simulated PSP.

Description

    The Name File or Command-Tail Parameters (N) command is used to enter
    one or more parameters into the simulated PSP that is built at the
    base of the buffer holding the program to be debugged. The N command
    can also be used before the Load File or Sectors (L) and Write File or
    Sectors (W) commands to name the file to be read from or written to a
    disk.

    The count of the characters following the N command is placed at
    DS:0080H in the simulated PSP, and the characters themselves are
    copied into the PSP starting at offset 81H. The string is terminated
    by a carriage return (0DH), which is not included in the count. If the
    first and second parameters follow the naming conventions for MS-DOS
    files, they are parsed into the default file control blocks (FCBs) in
    the simulated PSP at offsets 5CH and 6CH, respectively. (Switches
    specified as parameters are stored in the PSP starting at offset 81H
    along with the rest of the command line but are not included in the
    FCBs.)

    If the N command line contains only one filename, any parameters
    placed in the default FCBs by a previous N command are destroyed. If
    the drive specified with the first filename parameter is invalid, the
    AL register is set to 0FFH. If the drive specified with the second
    filename parameter is invalid, the AH register is set to 0FFH. The
    existence of a file specified with the N command is not verified until
    it is loaded with the L command.

Examples

    Assume that DEBUG was started without specifying the name of a target
    program in the command line. To load the program CLEAN.COM for
    execution under the control of DEBUG, use the N and L commands
    together as follows:

    -N CLEAN.COM  <Enter>
    -L  <Enter>

    Then, to place the parameter MYFILE.DAT in the simulated PSP's command
    tail and parse MYFILE.DAT into the first default FCB, type

    -N MYFILE.DAT  <Enter>

    Finally, to execute the program CLEAN.COM, type

    -G  <Enter>

    The result is the same as if the CLEAN.COM program had been run from
    the MS-DOS command level with the entry

    C>CLEAN MYFILE.DAT  <Enter>

    except that the program is executing under the control of DEBUG and
    within DEBUG's memory buffer.



DEBUG: O
Output to Port


Purpose

    Writes 1 byte to an input/output (I/O) port.

Syntax

    O port byte

    where:

    port       is an I/O port address from 0 through FFFFH.

    byte       is a value from 0 through 0FFH to be written to the I/O
                port.

Description

    The Output to Port (O) command writes 1 byte of data to the specified
    I/O port address. The data value must be in the range 00H through
    0FFH.

    Warning: The O command should be used with caution because it
    directly accesses the computer hardware and no error checking is
    performed. Attempts to write to some port addresses, such as those for
    ports connected to peripheral device controllers, timers, or the
    system's interrupt controller, may cause the system to crash or damage
    data stored on disk.

Example

    To write the value C8H to I/O port 10AH, type

    -O 10A C8  <Enter>



DEBUG: P
Proceed Through Loop or Subroutine


Purpose

    Executes a loop, repeated string instruction, software interrupt, or
    subroutine call to completion.

Syntax

    P [=address] [number]

    where:

    address    is the location of the first instruction to be executed.

    number     is the number of instructions to execute.

Description

    The Proceed Through Loop or Subroutine (P) command transfers control
    from DEBUG to the target program. The program executes without
    interruption until the loop, repeated string instruction, software
    interrupt, or subroutine call at address is completed or until the
    specified number of machine instructions have been executed. Control
    then returns to DEBUG, and the contents of the target program's
    registers and the status of the flags are displayed.

    If the address parameter does not include an explicit segment, DEBUG
    uses the target program's CS register; if address is omitted
    entirely, execution begins at the address specified by the target's
    CS:IP registers. The address parameter must be preceded by an equal
    sign (=) to distinguish it from number.

    If the instruction at address is not a loop, repeated string
    instruction, software interrupt, or subroutine call, the P command
    functions just like the Trace Program Execution (T) command. The
    optional number parameter specifies the number of instructions to be
    executed before control returns to DEBUG. If number is omitted, DEBUG
    executes only one instruction. After each instruction is executed,
    DEBUG displays the contents of the target program's registers, the
    status of the flags, and the next instruction to be executed.

    Warning: The P command cannot be used to trace through ROM.

Example

    Assume that the target program's location CS:143FH contains a CALL
    instruction. To execute the subroutine that is the destination of CALL
    and then return control to DEBUG, type

    -P =143F  <Enter>



DEBUG: Q
Quit


Purpose

    Ends a DEBUG session.

Syntax

    Q

Description

    The Quit (Q) command terminates the DEBUG program and returns control
    to MS-DOS or the command shell that invoked DEBUG. Any changes to a
    program or other file that were not saved on disk with the Write File
    or Sectors (W) command are lost.

Example

    To exit DEBUG, type

    -Q  <Enter>



DEBUG: R
Display or Modify Registers


Purpose

    Displays the contents of one or all registers and the status of the
    CPU flags and allows them to be modified.

Syntax

    R [register]

    where:

    register    is the two-character name of an Intel 8086/8088 register
                from the following list:

                AX BX CX DX SP BP SI DI
                DS ES SS CS IP PC

                or the character F, which specifies the CPU flags.

Description

    The Display or Modify Registers (R) command displays the target
    program's register contents and the status of the CPU flags and allows
    them to be modified.

    If R is entered without a register parameter, the contents of all
    registers and the status of the CPU flags are displayed, followed by a
    disassembly of the machine instruction currently pointed to by the
    target program's CS:IP registers.

    If register is included in the R command line, the contents of the
    specified register are displayed; then DEBUG prompts with a colon
    character (:) for a new value. The value is entered by typing one to
    four hexadecimal digits and then pressing the Enter key. Pressing the
    Enter key without entering any values leaves the register contents
    unchanged.

    Note: The register name PC is not fully supported in some versions of
    DEBUG, so the register name IP should be used instead.

    Specifying the character F instead of a register name causes DEBUG to
    display the status of the program's CPU flags as two-character codes
    from the following list:

╓┌───────────────────────┌───────────────────┌───────────────────────────────╖
    Flag Name          Value If Set (1)    Value If Clear (0)
    ──────────────────────────────────────────────────────────────────────
    Overflow           OV (Overflow)       NV (No Overflow)
    Direction          DN (Down)           UP (Up)
    Interrupt          EI (Enabled)        DI (Disabled)
    Sign               NG (Minus)          PL (Plus)
    Zero               ZR (Zero)           NZ (Not Zero)
    Aux Carry          AC (Aux Carry)      NA (No Aux Carry)
    Parity             PE (Even)           PO (Odd)
    Carry              CY (Carry)          NC (No Carry)

    After displaying the flag values, DEBUG displays a hyphen (-)
    prompt on the same line. Any or all flags can then be altered by
    typing one or more codes (in any order and optionally separated by
    spaces) from the list above and pressing the Enter key. Pressing the
    Enter key without entering any codes leaves the status of the flags
    unchanged.

Examples

    To display the contents of the target program's CPU registers and the
    status of the CPU flags, followed by the disassembled mnemonic for the
    next instruction to be executed (pointed to by CS:IP), type

    -R  <Enter>

    This produces a display in the following format:

    AX=0000  BX=0000  CX=00A1  DX=0000  SP=FFFE  BP=0000 SI=0000  DI=0000
    DS=19A5  ES=19A5  SS=19A5  CS=19A5  IP=0100   NV UP EI PL NZ NA PO NC
    19A5:0100 BF8000       MOV   DI,0080

    To display the value of the target program's BX register, type

    -R BX  <Enter>

    If BX contains 0200H, for example, DEBUG displays that value and then
    issues a prompt in the form of a colon:

    BX 0200
    :

    The contents of BX can then be altered by typing a new value and
    pressing the Enter key or left unchanged by pressing the Enter key
    alone.

    To set the direction and carry flags, first type

    -R F  <Enter>

    DEBUG displays the flag values, followed by a hyphen (-) prompt:

    NV UP EI PL NZ NA PO NC  -

    The direction and carry flags can then be set by entering

    -DN CY  <Enter>

Messages

    bf Error
    Bad flag: An invalid code for a CPU flag was entered.

    br Error
    Bad register: An invalid register name was entered.

    df Error
    Double flag: Two values for the same CPU flag were entered in the same
    command.



DEBUG: S
Search Memory


Purpose

    Searches memory for a pattern of 1 or more bytes.

Syntax

    S range list

    where:

    range      specifies the starting and ending addresses or the
                starting address and length of the area to be searched.

    list       is 1 or more consecutive byte values and/or a string to be
                searched for.

Description

    The Search Memory (S) command searches a designated range of memory
    for a specified list of consecutive byte values and/or a text string.
    The starting address of each set of matching bytes is displayed. The
    contents of the searched area are not altered.

    The range parameter specifies the starting and ending addresses or
    the starting address and length in bytes of the area to be searched.
    If a segment is not included in range, DEBUG uses DS. If a segment is
    specified for the starting address, DEBUG uses the same segment for
    the ending address. If a starting address and length in bytes is
    specified, the starting address plus the length minus 1 cannot exceed
    FFFFH.

    The list parameter specifies one or more consecutive hexadecimal byte
    values and/or a string to be searched for, separated by spaces,
    commas, or tab characters. Strings must be enclosed within single or
    double quotation marks, and case is significant within a string.

Examples

    To search for the string Copyright in the area of memory from
    DS:0000H through DS:1FFFH, type

    -S 0 1FFF 'Copyright'  <Enter>

    or

    -S 0 L2000 "Copyright"  <Enter>

    If matches are found, DEBUG displays the starting address of
    each:

    20A8:0910
    20A8:094F
    20A8:097C

    To search for the byte sequence 3BH 06H in the area of memory from
    CS:0100H through CS:12A0H, type

    -S CS:100 12A0 3B 06  <Enter>

    or

    -S CS:100 L11A1 3B 06  <Enter>



DEBUG: T
Trace Program Execution


Purpose

    Executes one or more instructions, displaying the CPU status after
    each instruction.

Syntax

    T [=address] [number]

    where:

    address    is the location of the first instruction to be executed.

    number     is the number of machine instructions to be executed.

Description

    The Trace Program Execution (T) command executes one or more
    instructions, starting at the specified address, and after each
    instruction displays the contents of the CPU registers, the status of
    the flags, and the instruction pointed to by CS:IP.

    Warning: The T command should not be used to execute any instructions
    that change the contents of the Intel 8259 interrupt mask (ports 20H
    and 21H on the IBM PC and compatibles) or to trace calls made to MS-
    DOS through Interrupt 21H. The Go (G) command should be used
    instead.

    The address parameter points to the first instruction to be executed.
    If address does not include a segment, DEBUG uses the target
    program's CS register; if address is omitted entirely, execution
    begins at the address specified by the target program's CS:IP
    registers. If address is included, it must be preceded by an equal
    sign (=) to distinguish it from number.

    The number parameter specifies the hexadecimal number of instructions
    to be executed before the DEBUG prompt is redisplayed (default = 1).
    Pressing Ctrl-C or Ctrl-Break interrupts execution of a sequence of T
    instructions. Consecutive instructions can then be executed
    individually by entering T commands with no parameters. Pressing Ctrl-
    S suspends execution and pressing any key then resumes the trace.

    Note: The T command can be used to trace through ROM.

Example

    To execute one instruction at location CS:1A00H and then return
    control to DEBUG, displaying the contents of the CPU registers and the
    status of the flags, type

    -T =1A00  <Enter>



DEBUG: U
Disassemble (Unassemble) Program


Purpose

    Disassembles machine instructions into assembly-language mnemonics.

Syntax

    U [range]

    where:

    range      specifies the starting and ending addresses or the
                starting address and length of the machine code to be
                disassembled.

Description

    The Disassemble (Unassemble) Program (U) command translates machine
    instructions into assembly-language mnemonics.

    The range parameter specifies the starting and ending addresses or
    starting address and length in bytes of the machine instructions to be
    disassembled. If range does not specify a segment, DEBUG uses CS.
    Note that if the starting address does not fall on an 8086 instruction
    boundary, the disassembly will be incorrect.

    If range does not include a length or ending address, 32 (20H) bytes
    of memory are disassembled beginning at the specified starting
    address. If range is omitted, 32 bytes of memory are disassembled,
    starting at the address following the last instruction disassembled by
    the previous U command. If a U command has not been used before and
    range is omitted, disassembly begins at the address specified by the
    target program's CS:IP registers.

    Note: The actual number of bytes displayed may vary slightly from the
    amount specified in range or from the default of 32 bytes because the
    length of instructions may vary. Also, the U command does not
    understand instructions specific to the 80186, 80286, and 80386
    microprocessors. It displays such instructions as DBs.

    Successive 32-byte fragments of code can be disassembled by entering
    additional U commands without parameters.

Example

    To disassemble 8 bytes of machine instructions starting at CS:0100H,
    type

    -U 100 107  <Enter>

    or

    -U 100 L8  <Enter>



DEBUG: W
Write File or Sectors


Purpose

    Writes a file or individual sectors to disk.

Syntax

    W [address]

    or

    W address drive start number

    where:

    address    is the first memory location of the data to be written.

    drive      is the number of the destination disk drive (0 = drive A,
                1 = drive B, 2 = drive C, and so on).

    start      is the number of the first logical sector to write
                (0-FFFFH).

    number     is the number of consecutive sectors to be written
                (0-FFFFH).

Description

    The Write File or Sectors (W) command transfers a file or individual
    sectors from memory to the disk.

    When the W command is entered without parameters or with only an
    address, the number of bytes specified by the contents of registers
    BX:CX is written from memory into the file named in the most recently
    used Name File or Command-Tail Parameters (N) command or the first
    file specified in the DEBUG command line if the N command has not been
    used. Files with a .EXE or .HEX extension cannot be written with the
    DEBUG W command.

    Note: If a Trace Program Execution (T), Go (G), or Proceed Through
    Loop or Subroutine (P) command has been used or the contents of the BX
    or CX registers have been changed, the contents of BX:CX must be
    restored before the W command is used.

    When address is not included in the command line, the target
    program's CS:0100H is assumed.

    The W command can also be used to bypass the MS-DOS file system and
    directly access logical sectors on the disk. The memory address
    (address), disk drive number (drive), starting logical sector number
    (start), and number of sectors to be written (number) must all be
    provided in the command line in hexadecimal format. The W command
    should not be used to write sectors on network drives.

    Warning: Extreme caution must be used with the W command. The disk's
    file structure can easily be damaged if the wrong parameters are
    entered.

Example

    Assume that the interactive Assemble Machine Instructions (A) command
    was used to create a program in DEBUG's memory buffer that is 32 (20H)
    bytes long, beginning at offset 0100H. This program can be written to
    the file QUICK.COM by using the DEBUG Name File or Command-Tail
    Parameters (N), Display or Modify Registers (R), and Write File or
    Sectors (W) commands sequentially. First, use the N command to specify
    the name of the file to be written:

    -N QUICK.COM  <Enter>

    Next, use the R command to set registers BX and CX to the length to be
    written. Register BX contains the upper, or most significant half, of
    the length, whereas register CX contains the lower, or least
    significant half. Type

    -R CX  <Enter>

    DEBUG displays the contents of register CX and prompts with a colon
    (:). Enter the length after the prompt:

    :20  <Enter>

    To use the R command again to set register BX to zero, type

    -R BX  <Enter>

    followed by

    :0  <Enter>

    Finally, to create the disk file QUICK.COM and write the program into
    it, type

    -W  <Enter>

    DEBUG responds:

    Writing 0020 bytes

Messages

    EXE and HEX files cannot be written
    Files with a .EXE or .HEX extension cannot be written to disk with the
    W command.

    Writing nnnn bytes
    After a successful write operation, DEBUG displays in hexadecimal
    format the number of bytes written to disk.



SYMDEB
Symbolic Debugger


Purpose

    The Symbolic Debugger (SYMDEB) allows a file to be loaded, examined,
    altered, and written back to disk. If the file contains a program, the
    program can be disassembled, modified, traced one instruction at a
    time, or executed at full speed with breakpoints. SYMDEB can also be
    used to read, modify, and write absolute disk sectors.

    The SYMDEB utility is supplied with the Microsoft Macro Assembler
    (MASM) versions 4.0 and earlier. This documentation describes SYMDEB
    version 4.0.

Syntax

    SYMDEB

    or

    SYMDEB [options] [symfile [symfile...]] [filename [parameter...]]

    where:

    symfile        is the name of a symbol file created with the MAPSYM
                    utility (extension = .SYM).

    filename       is the name of the binary or executable program file
                    to be debugged.

    parameter      is a command-line parameter required by the program
                    being debugged.

    options        is one or more of the following switches. Switches
                    can be either upper-case or lowercase and can be
                    preceded by a dash (-) instead of a forward
                    slash (/).

                    /I           (IBM) specifies that the computer is IBM
                                compatible.

                    /K           enables the interactive breakpoint key
                                (Scroll Lock).

                    /N           enables the use of nonmaskable interrupt
                                break systems on IBM-compatible
                                computers (requires special hardware).

                    /S           enables the Screen Swap (\) command on
                                IBM-compatible computers  (the /I
                                switch is also required).

                    /"commands"  specifies one or more SYMDEB commands,
                                separated by semicolons and enclosed in
                                quotation marks.

Description

    The SYMDEB commands and capabilities are a superset of those in DEBUG.
    SYMDEB is also able to load and interpret special symbol files that
    correlate line numbers, symbols, and memory addresses. With the aid of
    such files, SYMDEB enables the user to specify addresses with labels,
    variable names, and expressions, rather than only with absolute
    hexadecimal addresses. SYMDEB's command repertoire also includes I/O
    redirection commands, floating-point number entry and display
    commands, and source-code display capabilities that are not present in
    DEBUG.

    The SYMDEB command line typically includes the filename parameter,
    which is the name of an executable program (with the extension .COM or
    .EXE) to be loaded into SYMDEB's memory buffer. Files with the
    extension .EXE are loaded in a manner compatible with the MS-DOS
    loader. Files with the extension .HEX are converted to binary images
    and loaded at the internally specified address. All other files are
    assumed to be direct memory images and are read directly into memory
    starting at offset 100H. If SYMDEB is entered by itself, no file
    information is read into memory. An appropriate program segment prefix
    (PSP) is synthesized at the head of SYMDEB's buffer for use by the
    target program; the PSP includes a command tail at offset 80H and
    default file control blocks (FCBs) at offsets 5CH and 6CH, constructed
    from the optional parameters following filename. If necessary,
    contents of the file are relocated so that the file is ready to
    execute.

    The command line can also contain the names of one or more symfiles,
    symbol files that contain symbol and line-number information for the
    object modules that constitute the program being debugged. A symbol
    file is created with the MAPSYM utility from a map file produced by
    the Microsoft Object Linker (LINK). A symbol file always has the
    extension .SYM. See PROGRAMMING UTILITIES: MAPSYM; LINK.

    The four command-line switches /I, /K, /N, and /S provide SYMDEB with
    information about the computer on which the utility is running. The /I
    switch is used when the computer is IBM compatible; this causes SYMDEB
    to take full advantage of special hardware features such as the 8259
    Programmable Interrupt Controller or the memory-mapped video display.
    The /K switch enables the interactive breakpoint key (Scroll Lock),
    which can then be pressed at any time to interrupt a program that is
    being traced under the control of SYMDEB.

    Note: The /K switch is not necessary on an IBM PC/AT, because the Sys
    Req key is always active as an interactive break key.

    The /N switch enables the use of the nonmaskable interrupt as a
    breakpoint signal on IBM-compatible computers; this interrupt is
    triggered by hardware-assisted debugging packages such as Periscope
    and Atron Corporation's Software Probe. The /S switch enables the
    Screen Swap (\) command, which allows the output from the program
    being traced to be maintained and displayed on demand on a virtual
    screen separate from the SYMDEB commands and messages.

    Note: The /I, /N, and /S switches are unnecessary on personal
    computers built by IBM Corporation; SYMDEB automatically enables the
    capabilities provided by those switches when SYMDEB finds the IBM
    copyright notice in the machine's ROM.

    After SYMDEB and any files named in the command line are loaded,
    SYMDEB displays its special prompt character, a hyphen (-), and awaits
    a command. SYMDEB commands consist of one or two letters, usually
    followed by one or more parameters. SYMDEB treats uppercase and
    lowercase characters equivalently except when they are contained in
    strings enclosed within single or double quotation marks. SYMDEB does
    not execute commands until the Enter key is pressed.

    The SYMDEB commands discussed in this section are

╓┌─────────────────┌─────────────────────────────────────────────────────────╖
    Command      Action
──────────────────────────────────────────────────────────────────────
    A            Assemble machine instructions.
    BC           Clear breakpoints.
    BD           Disable breakpoints.
    BE           Enable breakpoints.
    BL           List breakpoints.
    BP           Set breakpoints.
    C            Compare memory areas.
    D            Display memory.
    DA           Display ASCII.
    DB           Display bytes.
    DD           Display doublewords.
    DL           Display long reals.
    DS           Display short reals.
    DT           Display 10-byte reals.
    DW           Display words.
    E            Enter data.
    EA           Enter ASCII string.
    EB           Enter bytes.
    ED           Enter doublewords.
    EL           Enter long reals.
    ES           Enter short reals.
    ET           Enter 10-byte reals.
    EW           Enter words.
    F            Fill memory.
    G            Go execute program.
    H            Perform hexadecimal arithmetic.
    I            Input from port.
    K            Perform stack trace.
    L            Load file or sectors.
    M            Move (copy) data.
    N            Name file or command-tail parameters.
    O            Output to port.
    P            Proceed through loop or subroutine.
    Q            Quit debugger.
    R            Display or modify registers.
    S            Search memory.
    S+           Enable source display mode.
    S-           Disable source display mode.
    S&           Enable source and machine code display mode.
    T            Trace program execution.
    U            Disassemble (unassemble) program.
    V            View source code.
    W            Write file or sectors.
    X            Examine symbol map.
    XO           Open symbol map.
    Z            Set symbol value.
    <            Redirect SYMDEB input.
    >            Redirect SYMDEB output.
    =            Redirect SYMDEB input and output.
    {            Redirect target program input.
    }            Redirect target program output.
    ~            Redirect target program input and output.
    \            Swap screen.
    .            Display source line.
    ?            Help or evaluate expression.
    !            Escape to shell.
    *            Enter comment.

    One or more SYMDEB commands, separated by semicolons and enclosed in
    double quotation marks, can be included in the original SYMDEB command
    line in the form /"commands" (for example, /"r;d;q"). These commands,
    which must precede the filename of the program being debugged, are
    carried out immediately when SYMDEB is loaded. (This is a convenient
    way to invoke SYMDEB and execute a series of batch commands.)

    The parameters for a SYMDEB command include symbols; line numbers;
    addresses; ranges; and 8-bit, 16-bit, 32-bit, or floating-point
    values, expressions, and lists. Multiple parameters can be separated
    by spaces, tabs, or commas.

    A symbol is a name that represents a register, an absolute value, a
    segment address, or a segment offset. A symbol consists of one or more
    characters but always begins with a letter, an underscore (_), a
    question mark (?), an at sign (@), or a dollar sign ($). The names of
    the various 8086/8088/80286 registers and CPU flags are built into
    SYMDEB and can be used at any time. Other symbols can be used only
    when one or more symbol files have been loaded in conjunction with the
    program to be debugged.

    Note: SYMDEB regards symbols whose spellings differ only in case as
    the same symbol. A unique symbol name that does not conflict with
    programming instructions, register names, or hexadecimal numbers
    should always be used.

    In MASM programs, symbols must be declared PUBLIC in the source code
    in order to be accessible during debugging (except for segment and
    group names, which are PUBLIC by default). In programs compiled with
    the current versions of Microsoft C, FORTRAN, and Pascal, all symbols
    are passed through for debugging if the proper compilation switch is
    used; however, familiarity with the compiler's particular naming
    conventions is necessary (for example, the Microsoft C Compiler adds
    an underscore character to the beginning of every symbol).

    A line number is a combination of decimal numbers, filenames, and
    symbols that specifies a unique line of text in a program source file.
    Line numbers always start with a dot character (.) and take one of the
    following forms:

    .[filename:]linenumber
    .+displacement
    .-displacement
    .symbol[+displacement]
    .symbol[-displacement]

    The second and third variations specify a line relative to the current
    line number; the fourth and fifth specify a line number relative to a
    designated symbol. Line numbers can be used only with programs
    developed with compilers that generate line-number information.
    Programs developed with MASM or an incompatible compiler cannot
    generate line numbers.

    An address identifies a unique location in memory. An address can be a
    simple offset or a complete address consisting of two 16-bit values in
    the form segment:offset. Each component can be a valid symbol
    (including CS, DS, ES, or SS, in the case of segments), a 16-bit
    hexadecimal number in the range 0 through FFFFH, or a symbol plus or
    minus a displacement. When the segment portion of an address is
    absent, the segment specified in the previous instance of the same
    command is used; if no segment was previously specified, SYMDEB uses
    DS unless an A, G, L, P, T, U, or W command is used, in which case
    SYMDEB uses CS.

    A range specifies an area of memory or a number of data items and can
    be expressed as either two addresses or a starting address and a
    length. A length is represented by the letter L followed by a
    hexadecimal value in the range 0 through FFFFH. The meaning of the
    length varies with the SYMDEB command used: The length can signify a
    number of bytes, words, doublewords, real numbers, machine
    instructions, or source-code lines. If a command requires a range and
    the ending address is not supplied, SYMDEB usually assumes 128
    bytes.

    A value represents an integral number and is a combination of one or
    more digits. The default base for values is hexadecimal, except in the
    case of floating-point numbers, but other bases can be used by
    appending a radix character (Y for binary, O or Q for octal, T for
    decimal, H for hexadecimal) in either uppercase or lowercase. For
    example, the following values are equivalent:

    0040             0100Q
    0040H            0100O
    0064t            1000000Y

    Doubleword (32-bit) values are entered as two hexadecimal
    integers separated by a colon character (:). Real numbers are always
    entered in decimal radix, with or without a decimal point or exponent.
    Leading zeros can be omitted.

    An expression is a combination of symbols, numeric constants, and
    operators that evaluates to an 8-, 16-, or 32-bit value. An expression
    can be used in place of a simple value in any command. Unary address
    operators use DS as the default segment for addresses. Expressions are
    evaluated in order of operator precedence; operators with equal
    precedence are evaluated from left to right. Parentheses can be used
    to override the normal operator precedence.

    The available unary operators, listed in order of precedence from
    highest to lowest, are

╓┌──────────────┌────────────────────────────────────────────────────────────╖
    Operator  Meaning
    ──────────────────────────────────────────────────────────────────────
    +         Unary plus
    -         Unary minus
    NOT       One's (bitwise) complement
    SEG       Segment address of operand
    OFF       Offset of operand
    BY        Low-order byte from specified address
    WO        Low-order word from specified address
    DW        Doubleword from specified address
    POI       Pointer from specified address (same as DW)
    PORT      Byte input from specified port
    WPORT     Word input from specified port

    The available binary operators, listed in order of precedence from
    highest to lowest, are

╓┌──────────────┌────────────────────────────────────────────────────────────╖
    Operator  Meaning
    ──────────────────────────────────────────────────────────────────────
    *         Multiplication
    /         Integer division
    MOD       Modulus
    :         Segment override
    +         Addition
    -         Subtraction
    AND       Bitwise Boolean AND
    XOR       Bitwise Boolean Exclusive OR
    OR        Bitwise Boolean Inclusive OR

    A list is composed of one or more values, expressions, or strings,
    separated by spaces or commas. A string is one or more ASCII
    characters, enclosed within single or double quotation marks. Case is
    significant within a string. If the same type of quote character that
    is used to delimit the string occurs inside the string, the character
    must be doubled inside the string in order to be interpreted correctly
    (for example,"A ""quoted"" word").

    In a few cases, SYMDEB displays a specific and informative error
    message in response to an invalid command. In general, though, SYMDEB
    responds in a generic fashion, pointing to the approximate location of
    the error with a caret character (^), followed by the word Error. For
    example:

    -D CS:100,CS:80  <Enter>
                    ^ Error

    SYMDEB maintains a set of virtual CPU registers and flags for a
    program being debugged. These registers can be examined and modified
    with SYMDEB commands. When a program is first loaded for debugging,
    the virtual registers are initialized with the following values:

╓┌──────────────┌───────────────────────────┌────────────────────────────────╖
    Register  .COM Program                .EXE Program
    ──────────────────────────────────────────────────────────────────────
    AX        Valid drive code            Valid drive code
    BX        Upper half of program size  Upper half of program size
    CX        Lower half of program size  Lower half of program size
    DX        Zero                        Zero
    SI        Zero                        Zero
    DI        Zero                        Zero
    BP        Zero                        Zero
    SP        FFFEH or top of available   Size of stack segment
            memory minus 2
    IP        100H                        Offset of entry point within
                                        target program's code segment
    CS        PSP                         Base of target program's code
                                        segment
    DS        PSP                         PSP
    ES        PSP                         PSP
    SS        PSP                         Base of target program's stack
                                        segment

    Note: SYMDEB checks the first three parameters in the command line.
    If the second and third parameters are filenames, SYMDEB checks any
    drive specifications with those filenames to verify that they
    designate valid drives. Register AX contains one of the following
    codes:

╓┌──────────────┌────────────────────────────────────────────────────────────╖
    Code      Meaning
    ──────────────────────────────────────────────────────────────────────
    0000H     The drives specified with the second and third filenames are
            both valid, or only one filename was specified in the
            command line.
    00FFH     The drive specified with the second filename is invalid.
    FF00H     The drive specified with the third filename is invalid.
    FFFFH     The drives specified with the second and third filenames are
            both invalid.

    Before SYMDEB transfers control to the target program, it saves the
    actual CPU registers and then loads them with the current values of
    the virtual registers; conversely, when control reverts to SYMDEB from
    the target program, the returned register contents are stored back
    into the virtual register set for inspection and alteration by the
    SYMDEB user.

Examples

    To prepare the program CLEAN.ASM for debugging with SYMDEB, declare
    all vital labels, procedures, and variable names in the source program
    PUBLIC. To assemble the program, type

    C>MASM CLEAN;  <Enter>

    This produces the relocatable object module CLEAN.OBJ. Then, to link
    the object module, type

    C>LINK /MAP CLEAN;  <Enter>

    This results in the executable program file CLEAN.EXE and the map file
    CLEAN.MAP.

    Note: The /MAP switch must be used even if a map file is specified in
    the command line. Finally, to create the symbol information file
    required by SYMDEB, type

    C>MAPSYM CLEAN  <Enter>

    At this point, begin symbolic debugging by typing

    C>SYMDEB CLEAN.SYM CLEAN.EXE  <Enter>

    Any run-time command-line parameters required by the CLEAN program may
    be placed in the SYMDEB command line after the filename CLEAN.EXE.

    To prepare the program SHELL.C for debugging with SYMDEB, first
    compile the program with the switches that disable optimization and
    cause line-number information to be written to the relocatable object
    module:

    C>MSC /Zd /Od SHELL;  <Enter>

    Next, to convert the object module to an executable program and create
    a map file with line-number information, type

    C>LINK /MAP /LI SHELL;  <Enter>

    To create the symbol information file required by SYMDEB for symbolic
    debugging, type

    C>MAPSYM SHELL  <Enter>

    To begin debugging, type

    C>SYMDEB SHELL.SYM SHELL.EXE  <Enter>

    To use the SYMDEB utility to inspect or modify memory or to read,
    modify, and write absolute disk sectors, type

    C>SYMDEB  <Enter>

Message

    File not found
    The filename supplied as the first parameter in the SYMDEB command
    line cannot be found.



SYMDEB: A
Assemble Machine Instructions


Purpose

    Allows entry of assembler mnemonics and translates them into
    executable machine code.

Syntax

    A [address]

    where:

    address   is the starting location for the assembled machine code.

Description

    The Assemble Machine Instructions (A) command accepts assembly-
    language statements, rather than hexadecimal values, for the Intel
    8086/8088, 80186, and 80286 (running in real mode) microprocessors and
    the Intel 8087 and 80287 math coprocessors and assembles each
    statement into executable machine language.

    The address parameter specifies the location where entry of assembly-
    language mnemonics will begin. If address is omitted, SYMDEB uses the
    last address generated by the previous A command; if there was no
    previous A command, SYMDEB uses the current value of the target
    program's CS:IP registers.

    After the user enters an A command, SYMDEB prompts for each assembly-
    language statement by displaying the address (a segment and an offset)
    in which the assembled code will be stored. When the user presses the
    Enter key, SYMDEB translates the assembly-language statement and
    stores each byte of the resulting machine instruction sequentially in
    memory (overwriting any existing information), beginning at the
    displayed address. SYMDEB then displays the address following the last
    byte of the machine instruction to prompt the user to enter the next
    assembled instruction. The user can terminate assembly mode by
    pressing the Enter key in response to the address prompt.

    The assembly-language statements accepted by the SYMDEB A command have
    some slight syntactic differences and restrictions compared with the
    Microsoft Macro Assembler programming statements. These differences
    can be summarized as follows:

    ■  All numbers are assumed to be hexadecimal integers unless otherwise
        specified with a radix character suffix.

    ■  Segment overrides must be specified by preceding the entire
        instruction with CS:, DS:, ES:, or SS:.

    ■  File control directives (NAME, PAGE, TITLE, and so forth), macro
        definitions, record structures, and conditional assembly directives
        are not supported by SYMDEB.

    ■  When the data type (word or byte) is not implicit in the
        instruction, the type must be specified by preceding the operand
        with BYTE PTR (or BY), WORD PTR (or WO), DWORD PTR (or DW), QWORD
        PTR (or QW), or TBYTE PTR (or TB).

    ■  In a string operation, the size of the string must be specified
        with a B (byte) or W (word) added to the string instruction
        mnemonic (for example, LODSB or LODSW).

    ■  The DB and DW instructions accept a parameter of the type list and
        assemble byte and word values directly into memory.

    ■  The WAIT or FWAIT opcodes for 8087/80287 assembler statements are
        not generated by the system and must be coded explicitly. (Note:
        8087/80287 instructions can be assembled if the system is not
        equipped with a math coprocessor, but the system will crash if an
        attempt is made to execute them.)

    ■  Addresses must be enclosed in square brackets to be differentiated
        from immediate operands.

    ■  Repeat prefixes such as REP, REPZ, and REPNZ can be entered either
        alone on a line preceding the statement they affect or on the same
        line immediately preceding the statement.

    ■  The assembler will generate the optimal form (SHORT, NEAR, or FAR)
        for jumps or calls, depending on the destination address, but these
        can be overridden if the operand is preceded with a NEAR (or NE) or
        FAR prefix.

    ■  The mnemonic for a FAR RETURN is RETF.

    Examples

    To begin assembling code at address CS:0100H, type

    -A 100  <Enter>

    To assemble the instruction sequence

    LODS WORD PTR [SI]
    XCHG BX,AX
    JMP [BX]

    beginning at address CS:0100H, the following dialogue would take
    place:

    -A 100  <Enter>
    1983:0100  LODSW  <Enter>
    1983:0101  XCHG BX,AX  <Enter>
    1983:0103  JMP [BX]  <Enter>
    1983:0105  <Enter>

    To continue assembling at the last address generated by a previous A
    command (1983:0105H in the preceding example), type

    -A  <Enter>



SYMDEB: BC
Clear Breakpoints


Purpose

    Permanently removes sticky breakpoints.

Syntax

    BC *

    or

    BC list

    where:

    *          represents all sticky breakpoints.

    list       is one or more integers (sticky breakpoint numbers) in the
                range 0 through 9.

Description

    The Clear Breakpoints (BC) command permanently clears the sticky
    breakpoints previously set with the Set Breakpoints (BP) command. A
    sticky breakpoint remains in memory throughout a SYMDEB session,
    unlike a breakpoint set with the Go (G) command, which remains in
    effect only while the G command executes.

    If an asterisk character (*) follows the BC command, SYMDEB deletes
    all sticky breakpoints. If a list parameter containing one or more
    sticky breakpoint numbers in the range 0 through 9 follows the BC
    command, SYMDEB selectively deletes sticky breakpoints. Each sticky
    breakpoint is assigned a number when the breakpoint is created with
    the BP command. The List Breakpoints (BL) command can be used to
    display all current sticky breakpoint locations and numbers.
    Breakpoint numbers should be separated by spaces.

    Sticky breakpoints can be temporarily disabled with the Disable
    Breakpoints (BD) command and subsequently re-enabled with the  Enable
    Breakpoints (BE) command.

Examples

    To clear sticky breakpoints 0, 4, and 8, type

    -BC 0 4 8  <Enter>

    To clear all sticky breakpoints, type

    -BC *  <Enter>

Messages

    Bad breakpoint number! (0-9)
    A sticky breakpoint number in the command line was not an integer in
    the range 0 through 9.

    Breakpoint list or '*' expected!
    The BC command was entered without parameters.



SYMDEB: BD
Disable Breakpoints


Purpose

    Temporarily disables sticky breakpoints.

Syntax

    BD *

    or

    BD list

    where:

    *           represents all sticky breakpoints.

    list        is one or more integers (sticky breakpoint numbers) in the
                range 0 through 9.

Description

    The Disable Breakpoints (BD) command temporarily disables the sticky
    breakpoints previously set with the Set Breakpoints (BP) command. A
    sticky breakpoint remains in memory throughout a SYMDEB session,
    unlike a breakpoint set with the Go (G) command, which remains in
    effect only while the G command executes.

    If an asterisk character (*) follows the BD command, SYMDEB disables
    all sticky breakpoints. If a list parameter containing one or more
    sticky breakpoint numbers in the range 0 through 9 follows the BD
    command, SYMDEB selectively disables sticky breakpoints. Each sticky
    breakpoint is assigned a number when the breakpoint is created with
    the BP command. The List Breakpoints (BL) command can be used to
    display all current sticky breakpoint locations and numbers.
    Breakpoint numbers should be separated by spaces.

    Sticky breakpoints disabled with the BD command can be re-enabled with
    the Enable Breakpoints (BE) command. The Clear Breakpoints (BC)
    command can be used to permanently delete a sticky breakpoint.

Examples

    To disable sticky breakpoints 0, 4, and 8, type

    -BD 0 4 8  <Enter>

    To disable all sticky breakpoints, type

    -BD *  <Enter>

Messages

    Bad breakpoint number! (0-9)
    A sticky breakpoint number in the command line was not an integer in
    the range 0 through 9.

    Breakpoint list or '*' expected!
    The BD command was entered without parameters.



SYMDEB: BE
Enable Breakpoints


Purpose

    Enables disabled sticky breakpoints.

Syntax

    BE *

    or

    BE list

    where:

    *          represents all sticky breakpoints.

    list       is one or more integers (sticky breakpoint numbers) in the
                range 0 through 9.

Description

    The Enable Breakpoints (BE) command enables the sticky breakpoints
    disabled with the Disable Breakpoints (BD) command. A sticky
    breakpoint remains in memory throughout a SYMDEB session, unlike a
    breakpoint set with the Go (G) command, which remains in effect only
    while the G command executes.

    If an asterisk (*) character follows the BE command, SYMDEB enables
    all sticky breakpoints. If a list parameter containing one or more
    sticky breakpoint numbers in the range 0 through 9 follows the BE
    command, SYMDEB selectively enables sticky breakpoints. Each sticky
    breakpoint is assigned a number when the breakpoint is created with
    the Set Breakpoints (BP) command. The List Breakpoints (BL) command
    can be used to display all current sticky breakpoint locations and
    numbers. Breakpoint numbers should be separated by spaces.

Examples

    To enable sticky breakpoints 0, 4, and 8, type

    -BE 0 4 8  <Enter>

    To enable all sticky breakpoints, type

    -BE *  <Enter>

Messages

    Bad breakpoint number! (0-9)
    A sticky breakpoint number in the command line was not an integer in
    the range 0 through 9.

    Breakpoint list or '*' expected!
    The BE command was entered without parameters.



SYMDEB: BL
List Breakpoints


Purpose

    Displays information about all sticky breakpoints.

Syntax

    BL

Description

    The List Breakpoints (BL) command lists the current status of each
    sticky breakpoint created with the Set Breakpoints (BP) command. A
    sticky breakpoint remains in memory throughout a SYMDEB session,
    unlike a breakpoint set with the Go (G) command, which remains in
    effect only while the G command executes.

    The BL command lists each sticky breakpoint number, its status code,
    its address in the target program, the number of passes remaining, and
    the initial number of passes specified with the BP command (in
    parentheses). If source display mode was selected with the Enable
    Source Display Mode (S+) command, SYMDEB also displays the source-file
    name and the line number that corresponds to each breakpoint location.
    Breakpoint status codes are

    e   Enabled
    d   Disabled
    v   Virtual

    (A virtual breakpoint is a sticky breakpoint set at a symbol contained
    in a .EXE file that has not yet been loaded into SYMDEB.)

Example

    To view the current status of all breakpoints, type

    -BL  <Enter>

    If the BP commands

    -BP0 _TEXT:_main  <Enter>
    -BP1 _TEXT:_printf  <Enter>

    were previously entered, the BL command displays

    0 e 456E:0010 [_TEXT:_main] dump.C:32
    1 e 456E:0612 [_TEXT:_printf]



SYMDEB: BP
Set Breakpoints


Purpose

    Sets sticky breakpoint locations within the program being
    debugged.

Syntax

    BP[n] address [passcount] ["commands"]

    where:

    n             is the sticky breakpoint number (0-9).

    address       is the location of the breakpoint in the target
                program.

    passcount     is the number of times the instruction at address
                should be executed before the breakpoint is taken.

    "commands"    is one or more SYMDEB commands, separated by
                semicolons. The entire list must be enclosed in double
                quotation marks. (Limit = 30 characters.)

Description

    The Set Breakpoints (BP) command sets a sticky breakpoint in the
    program being debugged. A sticky breakpoint remains in memory
    throughout a SYMDEB session, unlike a breakpoint set with the Go (G)
    command, which remains in effect only while the G command executes.
    When the target program reaches the breakpoint, execution of the
    program is suspended and control returns to SYMDEB. SYMDEB displays
    the contents of the registers and flags, followed by a prompt so that
    the user can enter more commands.

    The optional n parameter associates an integer in the range 0 through
    9, called the breakpoint number, with the sticky breakpoint location.
    If n is omitted, the next available breakpoint number is used. No
    space is allowed between BP and n.

    The address parameter must point to the first byte of a machine
    instruction in the program. This parameter may be a symbol, a literal
    address, or a source-code line number. If a segment is not included,
    SYMDEB uses the target program's CS register.

    The optional passcount parameter is the number of times execution
    should pass through the specified location before the break is taken
    and control is returned to SYMDEB. The value of passcount must be a
    hexadecimal number in the range 0 through FFFFH (default = 0).

    The optional "commands" parameter is one or more SYMDEB commands with
    their associated parameters. Each command must be separated from the
    others by a semicolon character (;) and the entire list enclosed in
    double quotation marks ("). A maximum of 30 characters can be
    specified within the quotation marks. The commands are executed
    whenever the break is taken.

Examples

    To set a sticky breakpoint at location next_file in the target
    program and dump the contents of memory locations DS:0000H through
    DS:00FFH when the breakpoint is reached, type

    -BP NEXT_FILE "DB DS:0 L100"  <Enter>

    To associate the breakpoint number 4 with the location CS:4230H in the
    program being debugged and pass the breakpoint 16 (10H) times before
    suspending execution of the program, type

    -BP4 CS:4230 10  <Enter>

Messages

    Bad breakpoint number! (0-9)
    A sticky breakpoint number in the command line was not an integer in
    the range 0 through 9.

    Breakpoint command too long!
    The "commands" parameter exceeded 30 characters.

    Breakpoint error!
    The BP command was entered without an address parameter.

    Breakpoint redefined!
    A new address was assigned to an existing breakpoint number, or an
    attempt was made to create a breakpoint with the same address as an
    existing breakpoint.

    Duplicate breakpoint ignored!
    An attempt was made to change an existing breakpoint to a breakpoint
    already specified in the breakpoint list.

    Too many breakpoints!
    No more sticky breakpoints are available.



SYMDEB: C
Compare Memory Areas


Purpose

    Compares two areas of memory and reports any differences.

Syntax

    C range address

    where:

    range      specifies the starting and ending addresses or the
                starting address and length of the first area of memory
                to be compared.

    address    points to the beginning of the second area of memory to be
                compared.

Description

    The Compare Memory Areas (C) command compares the contents of two
    areas of memory. The location and contents of any differing bytes are
    listed in the following form:

    address1  byte1  byte2  address2

    If no differences are found, the SYMDEB prompt returns.

    The range parameter specifies the first through last addresses or the
    starting address and length in bytes of the first area of memory to be
    compared.

    The address parameter points to the beginning of the second area of
    memory to be compared, which is the same size as range. If a segment
    is not included in either range or address, SYMDEB uses DS.

Example

    To compare the 64 bytes beginning at CS:CE00H with the 64 bytes
    beginning at CS:CF0AH, type

    -C CS:CE00,CE3F CS:CF0A  <Enter>

    or

    -C CS:CE00 L40 CS:CF0A  <Enter>

    If any differences are found, SYMDEB displays them in the following
    format:

    2124:CE06  00  FF  2124:CF10



SYMDEB: D
Display Memory


Purpose

    Displays the contents of an area of memory.

Syntax

    D [range]

    where:

    range      specifies the starting and ending addresses or the
                starting address and length of the area of memory to be
                displayed.

Description

    The Display Memory (D) command displays the contents of a specified
    range of memory addresses in the same format used in the most recent
    Display command (DA, DB, DD, DL, DS, DT, or DW). If no Display command
    has previously been entered, the memory is displayed in hexadecimal
    bytes and their ASCII equivalents (the DB format).

    The range parameter specifies the starting and ending addresses of
    the memory area to be displayed or the starting address followed by
    the length of the area, expressed by an L and the hexadecimal number
    of data items to be displayed. When range does not include a segment,
    SYMDEB uses DS.

    The size in bytes of each item and the default value for the length
    depend on the type of Display command used: the Display Byte (DB),
    Display Doubleword (DD), and Display Word (DW) commands default to a
    length of 128 (80H) bytes; Display ASCII (DA) displays 128 bytes or up
    to a null byte, whichever is smaller; Display Short Reals (DS),
    Display Long Reals (DL), and Display 10-Byte Reals (DT) default to the
    display of one floating-point number.

    If a Display command has not previously been used and range is
    omitted from a D command, the display starts at the address specified
    in the target program's CS:IP registers. If a Display command has
    previously been used and range is omitted from a D command, the
    display starts at the memory address following the last address
    displayed by the most recent Display command.

Examples

    Assume that the only Display commands used during this SYMDEB session
    are D and DB. To display the contents of the 128 bytes of memory
    beginning at offset 100H in the program's DGROUP, type

    -D DGROUP:0100  <Enter>

    SYMDEB displays the contents of the range of memory addresses in the
    following format:

7F00:0100  20 64 65 76 69 63 65 0D-0A 00 60 39 0D 0A 00 7C  device...'9...|
7F00:0110  39 08 20 08 00 81 39 04-1B 5B 32 4A 42 BD 11 44 9....9..[2JB=.D
7F00:0120  2E 26 45 AF 11 47 B3 11-48 A5 11 4C B8 11 4E D3 .&E/.G3.H%.L8.NS
7F00:0130  11 50 DF 11 51 AB 11 54-DF 1E 56 37 11 5F 9F 16 .P_.Q+.T_.V7._..
7F00:0140  24 C0 11 00 03 4E 4F 54-C1 07 0A 45 52 52 4F 52 $@...NOTA..ERROR
7F00:0150  4C 45 56 45 4C 85 08 05-45 58 49 53 54 18 08 00 LEVEL...EXIST...
7F00:0160  03 44 49 52 03 91 0C 06-52 45 4E 41 4D 45 01 C0 .DIR....RENAME.@
7F00:0170  0F 03 52 45 4E 01 C0 0F-05 45 52 41 53 45 01 68 ..REN.@..ERASE.h

    To view the next 128 bytes of memory, type

    -D  <Enter>

    SYMDEB displays the contents of memory addresses 7F00:0180H through
    7F00:01FFH.



SYMDEB: DA
Display ASCII


Purpose

    Displays the contents of memory in ASCII format.

Syntax

    DA [range]

    where:

    range      specifies the starting and ending addresses or the
                starting address and length of the area of memory to be
                displayed.

Description

    The Display ASCII (DA) command displays the contents of a specified
    range of memory addresses in ASCII format.

    The range parameter specifies the starting and ending addresses of
    the memory area to be displayed in ASCII format or the starting
    address followed by the length of the area, expressed by an L and a
    hexadecimal number of bytes. When range does not include a segment,
    SYMDEB uses DS.

    If a Display command has not previously been used and range is
    omitted from a DA command, the display starts at the address specified
    in the target program's CS:IP registers. If a Display command has
    previously been used and range is omitted from a DA command, the
    display starts at the memory address following the last address
    displayed by the most recent Display command.

    When a range is not explicit in a DA command, the display terminates
    after 128 bytes or when a null (zero) byte is encountered. If a range
    is specified, the entire range is displayed, including any null bytes,
    with nonprinting characters displayed as period (.) characters.

    Each line of the display is formatted as a segment and offset,
    followed by the contents of 16 bytes of memory (or less if a null byte
    was encountered) represented as an ASCII string.

    See also PROGRAMMING UTILITIES: SYMDEB:EA.

Examples

    If memory beginning at location 7F00:0100H contains the characters
    This is a test string followed by a null (zero) byte, the
    command

    -DA 7F00:0100  <Enter>

    produces the following display:

    7F00:0100  This is a test string

    To view additional memory in the same format, type

    -D  <Enter>



SYMDEB: DB
Display Bytes


Purpose

    Displays the contents of memory as hexadecimal bytes and their
    equivalent ASCII characters.

Syntax

    DB [range]

    where:

    range      specifies the starting and ending addresses or the
                starting address and length of the area of memory to be
                displayed.

Description

    The Display Bytes (DB) command displays the contents of a specified
    range of memory addresses as hexadecimal bytes and their ASCII
    character equivalents. This is the default format for the Display
    Memory (D) command.

    The range parameter specifies the starting and ending addresses of
    the memory area to be displayed or the starting address followed by
    the length of the area, expressed by an L and a hexadecimal number of
    bytes. When range does not include a segment, SYMDEB uses DS.

    If a Display command has not previously been used and range is
    omitted from a DB command, the display starts at the address specified
    in the target program's CS:IP registers. If a Display command has
    previously been used and range is omitted from a DB command, the
    display starts at the memory address following the last address
    displayed by the most recent Display command. When a range is not
    explicit in a DB command, the display terminates after 128
    bytes.

    Each line of the display is formatted as a segment and offset,
    followed by the contents of 16 bytes of memory represented as
    hexadecimal values separated by spaces (except the eighth and ninth
    values, which are separated by a dash), followed by their ASCII
    character equivalents (if any). In the ASCII section, nonprinting
    characters are displayed as periods.

    See also PROGRAMMING UTILITIES: SYMDEB:EB.

Examples

    To display the contents of the 128 bytes of memory beginning at
    7F00:0100H, type

    -DB 7F00:0100  <Enter>

    The contents of the range of memory addresses are displayed in the
    following format:

7F00:0100  20 64 65 76 69 63 65 0D-0A 00 60 39 0D 0A 00 7C  device...'9...|
7F00:0110  39 08 20 08 00 81 39 04-1B 5B 32 4A 42 BD 11 44 9....9..[2JB=.D
7F00:0120  2E 26 45 AF 11 47 B3 11-48 A5 11 4C B8 11 4E D3 .&E/.G3.H%.L8.NS
7F00:0130  11 50 DF 11 51 AB 11 54-DF 1E 56 37 11 5F 9F 16 .P_.Q+.T_.V7._..
7F00:0140  24 C0 11 00 03 4E 4F 54-C1 07 0A 45 52 52 4F 52 $@...NOTA..ERROR
7F00:0150  4C 45 56 45 4C 85 08 05-45 58 49 53 54 18 08 00 LEVEL...EXIST...
7F00:0160  03 44 49 52 03 91 0C 06-52 45 4E 41 4D 45 01 C0 .DIR....RENAME.@
7F00:0170  0F 03 52 45 4E 01 C0 0F-05 45 52 41 53 45 01 68 ..REN.@..ERASE.h

    To view the next 128 bytes of memory, type

    -D  <Enter>

    SYMDEB displays the contents of memory addresses 7F00:0180H through
    7F00:01FFH.



SYMDEB: DD
Display Doublewords


Purpose

    Displays the contents of memory in hexadecimal doubleword
    format.

Syntax

    DD [range]

    where:

    range      specifies the starting and ending addresses or the
                starting address and length of the area of memory to be
                displayed.

Description

    The Display Doublewords (DD) command displays the contents of a
    specified range of memory addresses 4 bytes at a time, as if they were
    FAR memory pointers (offset followed by segment in reverse byte
    order).

    The range parameter specifies the starting and ending addresses of
    the memory to be displayed or the starting address followed by the
    length of the area, expressed by an L and a hexadecimal number of
    doublewords. When range does not include a segment, SYMDEB uses DS.

    If a Display command has not previously been used and range is
    omitted from a DD command, the display starts at the address specified
    in the target program's CS:IP registers. If a Display command has
    previously been used and range is omitted from a DD command, the
    display starts at the memory address following the last address
    displayed by the most recent Display command. When a range is not
    explicit in a DD command, 32 doublewords (128 bytes) are
    displayed.

    Each line of the display is formatted as a segment and offset,
    followed by the contents of 16 bytes of memory represented as 4 paired
    16-bit segments and offsets. The 4 bytes that make up the segment and
    offset of each doubleword pointer are displayed in reverse order from
    their actual storage in memory.

    See also PROGRAMMING UTILITIES: SYMDEB:ED.

Examples

    To see how DD represents the 4 bytes that make up a doubleword,
    first type

    -DB 100  <ENTER>

    This produces the following output:

3929:0100  CF 0B 9D 0D 33 0E C3 0E-F2 0E 06 0F 39 0F 49 0F 0...3.C.r...9.I.

    Then type

    -DD 100  <Enter>

    This produces the following output:

    3929:0100  0D9D:0BCF 0EC3:0E33 0F06:0EF2 0F49:0F39

    Notice that DD switches the order of the first 2 bytes in a 4-byte set
    and designates them as the offset; then it switches the order of the
    second 2 bytes in the 4-byte set and designates them as the segment
    address.

    To display the contents of the first 128 (80H) bytes of the system
    interrupt vector table, which is based at address 0000:0000H, type

    -DD 0:0  <Enter>

    This produces the following output:

    0000:0000  2075:03D2 0070:01F0 16F3:2C1B 0070:01F0
    0000:0010  0070:01F0 F000:FF54 F000:9805 F000:9805
    0000:0020  0AE3:0395 16F3:2BAD F000:9805 F000:9805
    0000:0030  0972:0B40 F000:9805 F000:EF57 0070:01F0
    0000:0040  0AE3:03D6 F000:F84D F000:F841 0070:0D43
    0000:0050  F000:E739 F000:F859 F000:E82E F000:EFD2
    0000:0060  F000:E76C 0070:0ADD F000:FE6E 1078:3BEC
    0000:0070  F000:FF53 F000:F0E4 0000:0522 F000:0000

    To view the next 128 bytes of memory in the same format, type

    -D  <Enter>

    SYMDEB displays the contents of memory addresses 0000:0080H through
    0000:00FFH.



SYMDEB: DL
Display Long Reals


Purpose

    Displays the contents of memory as long (64-bit) floating-point
    numbers.

Syntax

    DL [range]

    where:

    range      specifies the starting and ending addresses or the
                starting address and length of the area of memory to be
                displayed.

Description

    The Display Long Reals (DL) command displays the contents of a
    specified range of memory addresses 8 bytes at a time, as hexadecimal
    values and their decimal equivalents. The hexadecimal values are
    formatted as 64-bit floating-point numbers. The decimal values have
    the form

    +|-0.decimaldigitsE+|-mantissa

    The sign of the number (+ or -) is followed by a zero, a decimal
    point, and a maximum of 16 decimaldigits; this, in turn, is followed
    by the designator of the mantissa (E) and the mantissa's sign (+ or -)
    and digits.

    The range parameter specifies the starting and ending addresses of
    the memory to be displayed or the starting address followed by the
    length of the area, expressed by an L and a hexadecimal number of 8-
    byte values. When range does not include a segment, SYMDEB uses DS.

    If a Display command has not previously been used and range is
    omitted from a DL command, the display starts at the address specified
    in the target program's CS:IP registers. If a Display command has
    previously been used and range is omitted from a DL command, the
    display starts at the memory address following the last address
    displayed by the most recent Display command. When a range is not
    explicit in a DL command, one 64-bit floating-point number is
    displayed.

    Each line of the display is formatted as a segment and offset,
    followed by the contents of 8 bytes of memory represented as a
    hexadecimal value, followed by its decimal floating-point
    equivalent.

    See also PROGRAMMING UTILITIES: SYMDEB:EL.

Examples

    Assume that the memory beginning at location DS:0100H contains the
    value 6.624 * 10^-27 (Planck's constant, in erg-seconds) as a 64-
    bit floating-point number. The command

    -DL 100  <Enter>

    produces the following output:

    43E8:0100  5F A2 20 73 75 66 80 3A  +0.6624E-26

    To view the next 8 bytes of memory in the same format, type

    -D  <Enter>



SYMDEB: DS
Display Short Reals


Purpose

    Displays the contents of memory as short (32-bit) floating-point
    numbers.

Syntax

    DS [range]

    where:

    range      specifies the starting and ending addresses or the
                starting address and length of the area of memory to be
                displayed.

Description

    The Display Short Reals (DS) command displays the contents of a
    specified range of memory addresses 4 bytes at a time, as hexadecimal
    values and their decimal equivalents. The hexadecimal values are
    formatted as 32-bit floating-point numbers. The decimal values have
    the form

    +|-0.decimaldigitsE+|-mantissa

    The sign of the number (+ or -) is followed by a zero, a decimal
    point, and a maximum of 16 decimaldigits (only the first 7 digits are
    significant); this, in turn, is followed by the designator of the
    mantissa (E) and the mantissa's sign (+ or -) and digits.

    The range parameter specifies the starting and ending addresses of
    the area of memory to be displayed or the starting address followed by
    the length of the area, expressed by an L and a hexadecimal number of
    4-byte values. When range does not include a segment, SYMDEB uses DS.

    If a Display command has not previously been used and range is
    omitted from a DS command, the display starts at the address specified
    in the target program's CS:IP registers. If a Display command has
    previously been used and range is omitted from a DS command, the
    display starts at the memory address following the last address
    displayed by the most recent Display command. When a range is not
    explicit in a DS command, one 32-bit floating-point number is
    displayed.

    Each line of the display is formatted as a segment and offset,
    followed by the contents of 4 bytes of memory represented as a
    hexadecimal value, followed by its decimal floating-point
    equivalent.

    See also PROGRAMMING UTILITIES: SYMDEB:ES.

Examples

    Assume that the memory beginning at location 43E8:0100H contains the
    value 6.02 * 10^+23 (Avogadro's number) as a 32-bit floating-point
    number. The command

    -DS 43E8:100  <Enter>

    produces the following output:

    43E8:0100  F9 F4 FE 66  +0.6020000172718952E+24

    To view the next 4 bytes of memory in the same format, type

    -D  <Enter>



SYMDEB: DT
Display 10-Byte Reals


Purpose

    Displays the contents of memory as 10-byte (80-bit) floating-point
    numbers.

Syntax

    DT [range]

    where:

    range      specifies the starting and ending addresses or the
                starting address and length of the area of memory to be
                displayed.

Description

    The Display 10-Byte Reals (DT) command displays the contents of a
    specified range of memory addresses 10 bytes at a time, as hexadecimal
    values and their decimal equivalents. The hexadecimal values are
    formatted as 80-bit floating-point numbers. (This format is ordinarily
    used by the Intel 8087 math coprocessor only for intermediate results
    during chained floating-point calculations.)  The decimal value has
    the form

    +|-0.decimaldigitsE+|-mantissa

    The sign of the number (+ or -) is followed by a zero, a decimal
    point, and a maximum of 16 decimaldigits; this, in turn, is followed
    by the designator of the mantissa (E) and the mantissa's sign (+ or -)
    and digits.

    The range parameter specifies the starting and ending addresses of
    the area of memory to be displayed or the starting address followed by
    the length of the area, expressed by an L and a hexadecimal number of
    10-byte values. When range does not include a segment, SYMDEB uses
    DS.

    If a Display command has not previously been used and range is
    omitted from a DT command, the display starts at the address specified
    in the target program's CS:IP registers. If a Display command has
    previously been used and range is omitted from a DT command, the
    display starts at the memory address following the last address
    displayed by the most recent Display command. When a range is not
    explicit in a DT command, one 10-byte floating-point number is
    displayed.

    Each line of the display is formatted as a segment and offset,
    followed by the contents of 10 bytes of memory represented as a
    hexadecimal value, followed by its decimal floating-point
    equivalent.

    See also PROGRAMMING UTILITIES: SYMDEB:ET.

Examples

    Assume that the memory beginning at location DS:0100H contains the
    value 2.99 * 10^+10 (the speed of light in centimeters per second)
    as an 80-bit floating-point number. The command

    -DT 100  <Enter>

    produces the following output:

    43E8:0100  00 00 00 00 60 B9 C5 DE 21 40  +0.299E+11

    To view the next 10 bytes of memory in the same format, type

    -D  <Enter>



SYMDEB: DW
Display Words


Purpose

    Displays the contents of memory as 2-byte (16-bit) words.

Syntax

    DW [range]

    where:

    range      specifies the starting and ending addresses or the
                starting address and length of the area of memory to be
                displayed.

Description

    The Display Word (DW) command displays the contents of a specified
    range of memory addresses 2 bytes at a time, as 16-bit hexadecimal
    integers.

    The range parameter specifies the starting and ending addresses of
    the area of memory to be displayed or the starting address followed by
    the length of the area, expressed by an L and a hexadecimal number of
    words of memory to be displayed. When range does not include a
    segment, SYMDEB uses DS.

    If a Display command has not previously been used and range is
    omitted from a DW command, the display starts at the address specified
    in the target program's CS:IP registers. If a Display command has
    previously been used and range is omitted from a DW command, the
    display starts at the memory address following the last address
    displayed by the most recent Display command. When a range is not
    explicit in a DW command, 64 words are displayed.

    Each line of the display is formatted as a segment and offset,
    followed by the contents of 16 bytes of memory represented as eight 4-
    digit hexadecimal numbers. The 2 bytes that make up each word are
    displayed in reverse order from their actual storage in memory. That
    is, the first byte in a 2-byte word is displayed after the second
    byte.

    See also PROGRAMMING UTILITIES: SYMDEB:EW.

Examples

    To display the contents of the 64 words of memory beginning at
    DS:0080H in word format, type

    -DW 80  <Enter>

    This produces the following output:

    1FEE:0080  6977 646E 776F 5C73 696C 0062 494C 3D42
    1FEE:0090  3A63 6D5C 6373 6C5C 6269 633B 5C3A 6977
    1FEE:00A0  646E 776F 5C73 696C 0062 4D54 3D50 3A63
    1FEE:00B0  745C 6D65 0070 4554 504D 633D 5C3A 6574
    1FEE:00C0  706D 4400 4149 3D4C 3A63 645C 6169 006C
    1FEE:00D0  4350 3346 3D32 3A63 665C 726F 6874 705C
    1FEE:00E0  3363 0032 4350 3350 3D32 3A63 665C 726F
    1FEE:00F0  6874 705C 756C 3373 0032 5255 3146 3D30

    To view the next 64 words of memory in the same format, type

    -D  <Enter>

    SYMDEB displays the contents of memory addresses 1FEE:0100H through
    1FEE:017FH.



SYMDEB: E
Enter Data


Purpose

    Enters data into memory.

Syntax

    E address [list]

    where:

    address    is the first memory location for storage.

    list       is the data to be placed into successive bytes of memory,
                starting at address.

Description

    The Enter Data (E) command enters into memory one or more data items,
    using the same format as the most recent Enter command (EA, EB, ED,
    EL, ES, ET, or EW). If no Enter command has previously been used, the
    data can be entered as either hexadecimal values or ASCII strings (the
    EA or EB format). Any data previously stored at the specified
    locations is lost. If SYMDEB displays an error message, no changes are
    made.

    The address parameter specifies the first byte to be modified. If
    address does not include a segment, SYMDEB uses DS. SYMDEB increments
    the address for each byte of data stored.

    The list parameter must meet the requirements of the last Enter
    command used. All SYMDEB Enter commands are described in alphabetic
    order on the following pages. If list is included in the command line,
    the changes are made unless an error is detected in the command line.
    If list is omitted from the command line, the current contents of
    address are displayed, followed by a period (.), and the user is
    prompted for new data. If no value is entered and the Enter key is
    pressed, the original value remains unchanged and the Enter command is
    terminated.

Examples

    The following two examples assume that no previous Enter commands have
    been used or that the most recent Enter command was EA or EB.

    To store the byte values 00H, 0DH, and 0AH into the 3 bytes beginning
    at DS:1FB3H, type

    -E 1FB3 00 0D 0A  <Enter>

    If the command

    -E 2C3 ABC  <Enter>

    is entered and the last Enter command used was EA or EB, the value BCH
    is stored at DS:2C3H, and the leading `A' character on the hexadecimal
    number `ABC' is ignored.



SYMDEB: EA
Enter ASCII String


Purpose

    Enters an ASCII string or hexadecimal byte values into memory.

Syntax

    EA address [list]

    where:

    address    is the first memory location for storage.

    list       is one or more ASCII strings or hexadecimal byte values.

Description

    The Enter ASCII String (EA) command enters data into successive memory
    bytes. The data can be entered as either hexadecimal byte values or
    ASCII strings. Any data previously stored at the specified locations
    is lost. If SYMDEB displays an error message, no changes are made. The
    EA command functions exactly like the Enter Bytes (EB) command.

    The address parameter specifies the first byte to be modified. If
    address does not include a segment, SYMDEB uses DS. SYMDEB increments
    the address for each byte of data stored.

    The list parameter is one or more ASCII strings and/or hexadecimal
    byte values, separated by spaces, commas, or tab characters. Extra or
    trailing characters are ignored. Strings must be enclosed within
    single or double quotation marks, and case is significant within a
    string.

    If list is included in the command line, the changes are made unless
    an error is detected in the command line. If list is omitted from the
    command line, the user is prompted byte by byte for new data, starting
    at address. The current contents of a byte are displayed, followed by
    a period. A new value for that byte can be entered as one or two
    hexadecimal digits (extra characters are ignored), or the contents can
    be left unchanged. To display the next byte, the user presses the
    spacebar. If the user enters a minus sign, or hyphen character (-),
    instead of pressing the spacebar, SYMDEB backs up to the previous
    byte. A maximum of 8 bytes can be entered on each input line; a new
    line is begun each time an 8-byte boundary is crossed. Data entry is
    terminated by pressing the Enter key without pressing the spacebar or
    entering any data.

    Text strings can be used only as part of the list parameter in an EA
    command line; they cannot be entered in response to an address prompt.

Example

    To store the string MAIN MENU into memory beginning at address
    ES:0C14H, type

    -EA ES:C14 "MAIN MENU"  <Enter>



SYMDEB: EB
Enter Bytes


Purpose

    Enters hexadecimal byte values or ASCII strings into memory.

Syntax

    EB address [list]

    where:

    address    is the first memory location for storage.

    list       is one or more hexadecimal byte values or ASCII strings.

Description

    The Enter Bytes (EB) command enters data into successive memory bytes.
    The data can be entered as either hexadecimal byte values or ASCII
    strings. Any data previously stored at the specified locations is
    lost. If SYMDEB displays an error message, no changes are made. The EB
    command functions exactly like the Enter ASCII String (EA) command.

    The address parameter specifies the first byte to be modified. If
    address does not include a segment, SYMDEB uses DS. SYMDEB increments
    the address for each byte of data stored.

    The list parameter is one or more hexadecimal byte values and/or
    ASCII strings, separated by spaces, commas, or tab characters. Extra
    or trailing characters are ignored. Strings must be enclosed within
    single or double quotation marks, and case is significant within a
    string.

    If list is included in the command line, the changes are made unless
    an error is detected in the command line. If list is omitted from the
    command line, the user is prompted byte by byte for new data, starting
    at address. The current contents of a byte are displayed, followed by
    a period. A new value for the byte can be entered as one or two
    hexadecimal digits (extra characters are ignored), or the contents can
    be left unchanged. To display the next byte, the user presses the
    spacebar. If the user enters a minus sign, or hyphen character (-),
    instead of pressing the spacebar, SYMDEB backs up to the previous
    byte. A maximum of 8 bytes can be entered on each input line; a new
    line is begun each time an 8-byte boundary is crossed. Data entry is
    terminated by pressing the Enter key without pressing the spacebar or
    entering any data.

    Text strings can be used only as part of the list parameter in an EB
    command line; they cannot be entered in response to an address prompt.

Examples

    To store the byte values 00H, 0DH, and 0AH into the 3 bytes beginning
    at DS:1FB3H, type

    -EB 1FB3 00 0D 0A  <Enter>

    To store the string MAIN MENU into memory beginning at address
    ES:0C14H, type

    -EB ES:C14 "MAIN MENU"  <Enter>



SYMDEB: ED
Enter Doublewords


Purpose

    Enters hexadecimal doubleword values into memory.

Syntax

    ED address [value]

    where:

    address    is the first memory location for storage.

    value      is a doubleword (32-bit) hexadecimal value.

Description

    The Enter Doublewords (ED) command enters into memory 32-bit
    hexadecimal doubleword values in the form of FAR memory pointers
    (offset followed by segments in reverse byte order). Any data
    previously stored at the specified locations is lost. If SYMDEB
    displays an error message, no changes are made.

    The address parameter specifies the first memory location to be
    modified. If address does not include a segment, SYMDEB uses DS.

    The value parameter is one doubleword value, entered as two 16-bit
    hexadecimal words separated by a colon character (:). Each value is
    entered in the form segment:offset. The offset portion is stored at
    address, and the segment portion is stored at address+2, both in
    reverse byte order. For example, a value of AABB:CCDDH would be stored
    in memory as DDH, CCH, BBH, and AAH, starting at address. Multiple
    values cannot be used in an ED command line; SYMDEB ignores any values
    after the first value.

    If value is omitted from the command line, SYMDEB prompts the user
    for new data, starting at address. The current contents of the
    location are displayed, followed by a period. The user can then enter
    a new doubleword value and press the Enter key or leave the contents
    unchanged by pressing the Enter key alone, which also terminates the
    ED command. If a new value is entered, SYMDEB increments address and
    displays the next doubleword value.

Example

    To store the doubleword value F000:1392H at the address DS:0200H,
    type

    -ED 200 F000:1392  <Enter>



SYMDEB: EL
Enter Long Reals


Purpose

    Enters 64-bit floating-point numbers into memory.

Syntax

    EL address [value]

    where:

    address    is the first memory location for storage.

    value      is a 64-bit floating-point decimal number.

Description

    The Enter Long Reals (EL) command enters into memory 64-bit floating-
    point numbers in decimal format. Any data previously stored at the
    specified memory locations is lost. If SYMDEB displays an error
    message, no changes are made.

    The address parameter specifies the first byte to be modified. If
    address does not include a segment, SYMDEB uses DS.

    The value parameter is a floating-point number entered in decimal
    radix, with or without a decimal point and/or exponent. Multiple
    values cannot be used in an EL command line; SYMDEB ignores any
    values after the first value.

    The 64-bit floating-point decimal value must be entered in the
    form

    [+|-]decimaldigits[E[+|-]mantissa]

    where:

    +|-             is the sign of the long floating-point value or the
                    mantissa.

    decimaldigits   is a decimal number. A maximum of 16 digits is
                    allowed, including digits before and after a decimal
                    point.

    E               denotes the beginning of the mantissa.

    mantissa        is the decimal mantissa value.

    If value is omitted from the command line, SYMDEB prompts the user
    for new data, starting at address. The current contents of the
    location are displayed. The user can enter a new value and press the
    Enter key or leave the contents unchanged by pressing the Enter key
    alone, which also terminates the EL command. If a new value is entered
    and the Enter key is pressed, SYMDEB increments address and displays
    the next long real number.

Example

    To store an approximation of the value pi in the form of a 64-
    bit floating-point number at address DS:0020H, type

    -EL 20 +0.3141592653589793E+1  <Enter>

    or

    -EL 20 3.141592653589793  <Enter>



SYMDEB: ES
Enter Short Reals


Purpose

    Enters 32-bit floating-point numbers into memory.

Syntax

    ES address [value]

    where:

    address    is the first memory location for storage.

    value      is a 32-bit floating-point decimal number.

Description

    The Enter Short Reals (ES) command enters into memory 32-bit floating-
    point numbers in decimal format. Any data previously stored at the
    specified locations is lost. If SYMDEB displays an error message, no
    changes are made.

    The address parameter specifies the first byte to be modified. If
    address does not include a segment, SYMDEB uses DS.

    The value parameter is a floating-point number entered in decimal
    radix, with or without a decimal point and/or exponent. Multiple
    values cannot be used in an ES command line; SYMDEB ignores any values
    after the first value.

    The 32-bit floating-point decimal value must be entered in the
    form

    [+|-]decimaldigits[E[+|-]mantissa]

    where:

    +|-             is the sign of the short floating-point value or the
                    mantissa.

    decimaldigits   is a decimal number. A maximum of 16 digits is
                    allowed, including digits before and after a decimal
                    point.

    E               denotes the beginning of the mantissa.

    mantissa        is the decimal mantissa value.

    Note: For short floating-point values, the last nine decimaldigits
    are not significant. This can be demonstrated by using the Display
    Short Reals (DS) command to check the new value in memory.

    If value is omitted from the command line, SYMDEB prompts the user
    for new data, starting at address. The current contents of the
    location are displayed. The user can then enter a new value and press
    the Enter key or leave the contents unchanged by pressing the Enter
    key alone, which also terminates the ES command. If a new value is
    entered and the Enter key is pressed, SYMDEB increments address and
    displays the next short floating-point number.

Example

    To store an approximation of the value pi in the form of a 32-bit
    floating-point number at address DS:0020H, type

    -ES 20 +0.31415927E+1  <Enter>

    or

    -ES 20 3.1415927  <Enter>



SYMDEB: ET
Enter 10-Byte Reals


Purpose

    Enters 10-byte (80-bit) floating-point numbers into memory.

Syntax

    ET address [value]

    where:

    address    is the first memory location for storage.

    value      is an 80-bit floating-point decimal number.

Description

    The Enter 10-Byte Reals (ET) command enters into memory 10-byte (80-
    bit) floating-point numbers in decimal format. Any data previously
    stored at the specified locations is lost. If SYMDEB displays an error
    message, no changes are made. (This 10-byte format is ordinarily used
    by the Intel 8087 math coprocessor only for intermediate results
    during chained floating-point calculations.)

    The address parameter specifies the first memory location to be
    modified. If address does not include a segment, SYMDEB uses DS.

    The value parameter is a floating-point number entered in decimal
    radix, with or without a decimal point and/or exponent. Multiple
    values cannot be used in an ET command line; SYMDEB ignores any values
    after the first value.

    The 10-byte floating-point decimal value must be entered in the form

    [+|-]decimaldigits[E[+|-]mantissa]

    where:

    +|-             is the sign of the 10-byte floating-point value or
                    the mantissa.

    decimaldigits   is a decimal number. A maximum of 16 digits is
                    allowed, including digits before and after a decimal
                    point.

    E               denotes the beginning of the mantissa.

    mantissa        is the decimal mantissa value.

    If value is omitted from the command, SYMDEB prompts the user for new
    data, starting at address. The current contents are displayed. The
    user can enter a new value and press the Enter key or leave the
    contents unchanged by pressing the Enter key alone, which also
    terminates the ET command. If a new value is entered and the Enter key
    is pressed, SYMDEB increments address and displays the next 10-byte
    floating-point number.

Example

    To store an approximation of the value pi in the form of an 80-
    bit floating-point number at address DS:0020H, type

    -ET 20 +0.31415926535897932384E+1  <Enter>

    or

    -ET 20 3.1415926535897932384  <Enter>



SYMDEB: EW
Enter Words


Purpose

    Enters word values into memory.

Syntax

    EW address [value]

    where:

    address    is the first memory location for storage.

    value      is a word (16-bit) hexadecimal value.

Description

    The Enter Words (EW) command enters into memory 16-bit hexadecimal
    word values. Any data previously stored at the specified locations is
    lost. If SYMDEB displays an error message, no changes are made.

    The address parameter specifies the first memory location to be
    modified. If address does not include a segment, SYMDEB uses DS.

    The value parameter is one word value in the range 0 through FFFFH.
    The value is stored in reverse byte order. For example, a value of
    AABBH would be stored in memory as BBH and AAH, starting at address.
    Multiple values cannot be used in an EW command line; SYMDEB ignores
    any values after the first value.

    If value is omitted from the command line, SYMDEB prompts the user
    word by word for new data, starting at address. The current contents
    are displayed, followed by a period. The user can enter a new word
    value as one to four hexadecimal digits and press the Enter key or
    leave the contents unchanged by pressing the Enter key alone, which
    also terminates the EW command. If a new value is entered, SYMDEB
    increments address and displays the next word value.

Example

    To store the word value 1355H at the address DS:1C00H, type

    -EW 1C00 1355 <Enter>



SYMDEB: F
Fill Memory


Purpose

    Stores a repetitive data pattern into an area of memory.

Syntax

    F range list

    where:

    range      specifies the starting and ending addresses or the
                starting address and length of memory to be filled.

    list       is the data to be used to fill memory.

Description

    The Fill Memory (F) command fills an area of memory with the data from
    a list. The data can be entered in either hexadecimal or ASCII format.
    Any data previously stored at the specified locations is lost. If
    SYMDEB displays an error message, no changes are made.

    The range parameter specifies the starting and ending addresses or
    the starting address and hexadecimal length in bytes of the area of
    memory to be filled. If range does not include an explicit segment,
    SYMDEB uses DS.

    The list parameter is one or more hexadecimal byte values and/or
    strings, separated by spaces, commas, or tab characters. Strings must
    be enclosed in single or double quotation marks, and case is
    significant within a string.

    If the area to be filled is larger than the data list, the list is
    repeated as often as necessary to fill the area. If the data list is
    longer than the area of memory to be filled, the list is truncated to
    fit.

Examples

    To fill the area of memory from DS:0B10H through DS:0B4FH with the
    value 0E8H, type

    -F B10 B4F E8  <Enter>

    or

    -F B10 L40 E8  <Enter>

    To fill the 16 bytes of memory beginning at address CS:1FA0H by
    replicating the 2-byte sequence 0DH 0AH, type

    -F CS:1FA0 1FAF 0D 0A  <Enter>

    or

    -F CS:1FA0 L10 0D 0A  <Enter>

    To fill the area of memory from ES:0B00H through ES:0BFFH by
    replicating the text string BUFFER, type

    -F ES:B00 BFF "BUFFER"  <Enter>

    or

    -F ES:B00 L100 "BUFFER"  <Enter>



SYMDEB: G
Go


Purpose

    Transfers execution control from SYMDEB to the target program being
    debugged.

Syntax

    G[=address] [break0[... break9]]

    where:

    address                is the location at which to begin execution.

    break0 ... break9      specify from 1 to 10 breakpoints.

Description

    The Go (G) command transfers control from SYMDEB to the target
    program. If no breakpoints are set, the program will execute until it
    crashes or until it reaches a normal termination, in which case the
    message Program terminated normally is displayed and control returns
    to SYMDEB. (After this message has been displayed, it may be necessary
    to reload the program before it can be executed again.)

    The address parameter can be any location in memory. If no segment is
    specified, SYMDEB uses the target program's CS register. If address
    is omitted, SYMDEB transfers to the current address in the target
    program's CS:IP registers. An equal sign (=) must precede address to
    distinguish it from the breakpoints break0 ... break9.

    The parameters break0 ... break9 specify from 1 to 10 breakpoints
    that can be set as part of the G command. Breakpoints can be placed in
    any order, because execution stops at the first breakpoint address
    encountered, regardless of the position of that breakpoint in the
    list. Each of the breakpoint addresses must contain the first byte of
    an 8086 opcode. SYMDEB installs breakpoints by replacing the first
    byte of the machine instruction at each breakpoint address with an
    Interrupt 03H instruction (opcode 0CCH). If the program encounters a
    breakpoint, program execution is suspended and control returns to
    SYMDEB. SYMDEB then restores the original machine code in the
    breakpoint locations, displays the contents of the current registers
    and flags and the instruction pointed to by CS:IP, and issues the
    standard SYMDEB prompt. If the target program executes to completion
    and terminates without encountering any of the breakpoints or is
    halted by some means other than a breakpoint, the Interrupt 03H
    instructions are not replaced with the original machine code and the
    Load File or Sectors (L) command must be used to reload the original
    program.

    The G command requires that the target program's SS:SP registers point
    to a valid stack that has at least 6 bytes of stack space available.
    When the G command is executed, it pushes the target program's flags
    and CS and IP registers onto the stack and then transfers control to
    the program with an IRET instruction. Thus, if the target program's
    stack is not valid or is too small, the system may crash.

    The G command also recognizes any sticky breakpoints set with the Set
    Breakpoint (BP) command. These sticky breakpoints are not counted as
    part of the transient breakpoints specified in the G command line and
    are not removed after a breakpoint has been encountered.

Examples

    To begin execution of the program in SYMDEB's buffer at location
    CS:110AH, setting breakpoints at CS:12FCH and CS:1303H, type

    -G =110A 12FC 1303  <Enter>

    To resume execution of the program following a breakpoint, type

    -G  <Enter>

    To begin execution at the label main, setting breakpoints at the
    procedures fopen() and printf(), type

    -G =_main _fopen _printf  <Enter>

Messages

    Program terminated normally
    The program being debugged executed successfully without encountering
    any breakpoints and performed a normal termination with Interrupt 20H,
    Interrupt 21H Function 00H, or Interrupt 21H Function 4CH. If any
    breakpoints were set, the original program should be reloaded with the
    Load File or Sectors (L) command.

    Too many breakpoints!
    More than 10 breakpoints were specified in a Go (G) command. Enter the
    command again with 10 or fewer breakpoints.



SYMDEB: H
Perform Hexadecimal Arithmetic


Purpose

    Displays the sum and difference of two hexadecimal numbers.

Syntax

    H value1 value2

    where:

    value1 and value2     are any two hexadecimal numbers in the range 0
                        through FFFFH.

Description

    The Perform Hexadecimal Arithmetic (H) command displays the sum and
    difference of two 16-bit hexadecimal numbers--that is, the result of
    the operations value1+value2 and value1-value2. If value2 is
    greater than value1, SYMDEB displays their difference as a two's
    complement hexadecimal number. This command is convenient for
    performing quick calculations of addresses and other values during an
    interactive debugging session.

Examples

    To display the sum and difference of the values 4B03H and 104H,
    type

    -H 4B03 104  <Enter>

    This produces the following display:

    4C07  49FF

    If the addition produces an overflow, the four least significant
    digits are displayed. For example, the command line

    -H FFFF 2  <Enter>

    produces the following display:

    0001 FFFD

    If value2 is greater than value1, the difference is displayed in
    two's complement form. For example, the command line

    -H 1 2  <Enter>

    produces the following display:

    0003 FFFF



SYMDEB: I
Input from Port


Purpose

    Reads and displays 1 byte from an input/output (I/O) port.

Syntax

    I port

    where:

    port       is a 16-bit I/O port address in the range 0 through FFFFH.

Description

    The Input from Port (I) command performs a read operation on the
    specified I/O port address and displays the data as a two-digit
    hexadecimal number.

    Warning: This command must be used with caution because it involves
    direct access to the computer hardware and no error checking is
    performed. Input operations directed to the ports assigned to some
    peripheral device controllers may interfere with the proper operation
    of the system. If no device has been assigned to the specified I/O
    port or if the port is write-only, the value that will be displayed by
    an I command is unpredictable.

Example

    To read and display the contents of I/O port 10AH, type

    -I 10A  <Enter>

    An example of the result of this command is

    FF



SYMDEB: K
Perform Stack Trace


Purpose

    Displays the current stack frame.

Syntax

    K [number]

    where:

    number     is the number of parameters supplied to the current
                procedure.

Description

    The Perform Stack Trace (K) command displays the contents of the
    current stack frame. The first line of the display shows the name of
    the current procedure, parameters to the procedure, and the filename
    and line number of the call to the procedure. The subsequent lines
    trace the flow of execution that led to the current procedure.

    In cases where SYMDEB cannot determine the number of parameters for a
    procedure by inspection of the stack frame (for example, if the number
    of parameters sent to a procedure varies), the number option can be
    used in the command to force the display of one or more
    parameters.

    The K command can be used only on procedures that follow the calling
    conventions used by Microsoft high-level-language compilers.

Examples

    Assume that a breakpoint has been set within the C library printf()
    routine, that the breakpoint has been reached, and that the SYMDEB
    prompt has reappeared. The command

    -K  <Enter>

    produces the following output:

    _TEXT:_printf(00D4,0000,0000) from .dump.C:108
    _TEXT:_dump_para(0000,0000,0FB8) from .dump.C:92
    _TEXT:_dump_rec(0FB8,0001,0000,0000) from .dump.C:61
    _TEXT:_main(?)

    In this example, the breakpointed procedure printf() was called by
    the routine dump_para() with three parameters. Dump_para() was
    called by dump_rec(),  which in turn was called by main(). Because
    SYMDEB cannot determine the depth of the stack frame for the routine
    main(), it displays no parameters for it. The display of at least two
    parameters for every procedure can be forced by the command

    -K 2  <Enter>

    which produces the following example display:

    _TEXT:_printf(00D4,0000,0000) from .dump.C:108
    _TEXT:_dump_para(0000,0000,0FB8) from .dump.C:92
    _TEXT:_dump_rec(0FB8,0001,0000,0000) from .dump.C:61
    _TEXT:_main(0002,1044)

    From a knowledge of C conventions, it follows that the first parameter
    for main() is argc, or the number of tokens in the command line that
    invoked the program being debugged; the second parameter is the offset
    within DGROUP of argv, or an array of pointers to each token.



SYMDEB: L
Load File or Sectors


Purpose

    Loads a file or individual sectors from a disk.

Syntax

    L [address]

    or

    L address drive start number

    where:

    address    is the starting address in memory that data read from a
                disk is placed into.

    drive      is the decimal number (0-3) of the disk to read
                (0 = drive A, 1 = drive B, 2 = drive C, 3= drive D).

    start      is the hexadecimal number of the first sector to load
                (0-FFFFH).

    number     is the hexadecimal number of consecutive sectors to load
                (0-FFFFH).

Description

    The Load File or Sectors (L) command loads a file or individual
    sectors from a disk.

    When the L command is entered without parameters or with an address
    alone, the file specified in the SYMDEB command line or with the most
    recent Name File or Command-Tail Parameters (N) command is loaded from
    the disk into memory. If no segment is specified in address, SYMDEB
    uses CS. If the file's extension is .EXE, the file is placed in
    SYMDEB's target program buffer at the load address specified in the
    .EXE file's header; if the file's extension is .COM, the file is
    loaded at offset 100H. (If for some reason an address is entered for a
    .EXE or .COM file and the address is anything but 100H, an error
    message is displayed; if the address is 100H, it will be ignored.) If
    the file has a .HEX extension, the .HEX file's starting address is
    added to address before loading the file. If address is not
    specified, the .HEX file is placed at its own starting address. The
    length of the file or, in the case of a .EXE file, the actual length
    of the program (the length of the file minus the header) is placed in
    the target program's BX and CX registers, with the most significant 16
    bits in register BX.

    The L command can also be used to bypass the MS-DOS file system and
    obtain direct access to logical sectors on the disk. The memory
    address (address), disk drive number (drive), starting logical sector
    number (start), and number of sectors to read (number) must all be
    specified in the command line.

    Note: The L command should not be used to access logical sectors on
    network drives.

Examples

    To load the file specified in the SYMDEB command line or in the most
    recent N command into SYMDEB's target program buffer, type

    -L  <Enter>

    To load eight sectors from drive B, starting at logical sector 0, to
    memory location CS:0100H in SYMDEB's memory buffer, type

    -L 100 1 0 8  <Enter>

Messages

    Disk error reading disk  <FI>X<FS>
    A hardware-related disk error, such as a checksum error or seek
    incomplete, was encountered during the execution of an L command.

    File not found
    The file specified in the most recent N command cannot be found.



SYMDEB: M
Move (Copy) Data


Purpose

    Copies the contents of one area of memory to another.

Syntax

    M range address

    where:

    range      specifies the starting and ending addresses or the
                starting address and length of the area of memory to be
                copied.

    address    is the first byte of the destination of the copy
                operation.

Description

    The Move (Copy) Data (M) command copies data from one location in
    memory to another without altering the data in the original location.
    If the source and destination areas overlap, the data is copied in the
    correct order so that the resulting copy is correct; the data in the
    original location is changed only when the two areas overlap.

    The range parameter specifies the starting and ending addresses or
    the starting address and length of the memory to be copied. The
    address parameter is the first byte in which the copy will be placed.
    If range does not contain an explicit segment, SYMDEB uses DS; if
    address does not contain a segment, SYMDEB uses the same segment used
    for range.

Example

    To copy the data in locations DS:0800H through DS:08FFH to locations
    DS:0900H through DS:09FFH, type

    -M 800 8FF 900  <Enter>

    or

    -M 800 L100 900  <Enter>



SYMDEB: N
Name File or Command-Tail Parameters


Purpose

    Inserts parameters into the simulated program segment prefix
    (PSP).

Syntax

    N parameter [parameter...]

    where:

    parameter       is a filename or switch to be placed into the
                    simulated PSP.

Description

    The Name File or Command-Tail Parameters (N) command is used to enter
    one or more parameters into the simulated PSP that is built at the
    base of the buffer holding the program to be debugged. The N command
    can also be used before the Load File or Sectors (L) and Write File or
    Sectors (W) commands to name a file to be read from a disk or written
    to a disk.

    The count of the characters following the N command is placed at
    DS:0080H in the simulated PSP and the characters themselves are copied
    into the PSP starting at DS:0081H. The string is terminated by a
    carriage return (0DH), which is not included in the count. If the
    second and third parameters follow the naming conventions for MS-DOS
    files, they are parsed into the default file control blocks (FCBs) in
    the simulated PSP, at offset 5CH and offset 6CH, respectively. Note
    that this is different from the N command in DEBUG, which loads the
    first and second parameters into the default FCBs. (Switches and other
    filenames specified as parameters are stored in the PSP starting at
    offset 81H along with the rest of the command line but are not parsed
    into the default FCBs.)

    If the N command line contains only one filename, any parameters
    placed in the default FCBs by a previous N command are destroyed. If
    the drive included with the second filename parameter is invalid, the
    AL register is set to 0FFH. If the drive included with the third
    filename parameter is invalid, the AH register is set to 0FFH. The
    existence of a file specified with the N command is not verified until
    it is loaded with the L command.

    The filename at DS:0081H specifies the file that is read or written by
    a subsequent L or W command.

Example

    Assume that SYMDEB was started without specifying the name of a target
    program in the command line. To load the program CLEAN.COM for
    execution under the control of SYMDEB and include the parameter
    MYFILE.DAT in the simulated PSP's command tail and FCB, use the N and
    L commands together as follows:

    -N CLEAN.COM  MYFILE.DAT  <Enter>
    -L  <Enter>

    To execute the program CLEAN.COM, type

    -G  <Enter>

    The net effect is the same as if the CLEAN.COM program had been run
    from the MS-DOS command level with the command line

    C>CLEAN MYFILE.DAT  <Enter>

    except that the program is executing under the control of SYMDEB and
    within SYMDEB's memory buffer.



SYMDEB: O
Output to Port


Purpose

    Writes 1 byte to an input/output (I/O) port.

Syntax

    O port byte

    where:

    port       is a 16-bit I/O port address in the range 0 through FFFFH.

    byte       is a value to be written to the I/O port (0-0FFH).

Description

    The Output to Port (O) command writes 1 byte of data to the specified
    I/O port address. The data value must be in the range 00H through
    0FFH.

    Warning: This command must be used with caution because it involves
    direct access to the computer hardware and no error checking is
    performed. Attempts to write to some port addresses, such as those for
    ports connected to peripheral device controllers, timers, or the
    system's interrupt controller, may cause the system to crash or may
    even result in damage to data stored on disk.

Example

    To write the value C8H to I/O port 10AH, type

    -O 10A C8  <Enter>



SYMDEB: P
Proceed Through Loop or Subroutine


Purpose

    Executes a loop, string instruction, software interrupt, or subroutine
    to completion.

Syntax

    P[=address] [number]

    where:

    address    is the location of the first instruction to be executed.

    number     is the number of instructions to execute.

Description

    The Proceed Through Loop or Subroutine (P) command transfers control
    to the target program. The program executes without interruption until
    the loop, repeated string instruction, software interrupt, or
    subroutine call at address is completed or until the specified number
    of machine instructions have been executed. Control then returns to
    SYMDEB and the current contents of the target program's registers and
    flags are displayed.

    Warning: The P command should not be used to execute any instruction
    that changes the contents of the Intel 8259 interrupt mask (ports 20H
    and 21H on the IBM PC and compatibles) and cannot be used to trace
    through ROM. Use the Go (G) command instead.

    If the address parameter does not contain a segment, SYMDEB uses the
    target program's CS register; if address is omitted, execution begins
    at the current address specified by the target's CS:IP registers. The
    address parameter must be preceded by an equal sign (=) to
    distinguish it from number.

    The number parameter specifies the number of instructions to be
    executed before control returns to SYMDEB. If number is omitted, one
    instruction is executed.

    When the Enable Source Display Mode (S+) command is selected, the P
    command operates directly on source-code lines, passing over function
    or procedure calls. (The S+ command can be used only with programs
    created by high-level-language compilers that insert line-number
    information into object modules.)

    When source display mode is disabled with the S- command or when the
    program being debugged does not have a .SYM file or has been created
    with the Microsoft Macro Assembler (MASM) or with a compiler that does
    not support line numbers in relocatable object modules, the P command
    behaves like the Trace Program Execution (T) command except that when
    P encounters a loop, repeated string instruction, software interrupt,
    or subroutine call, it executes it to completion and then returns to
    the instruction following the call. For example, if the user wants to
    trace the first three instructions in a program and if the second
    instruction is a subroutine call, a P3 command executes the first
    instruction, goes to the second instruction, identifies it as a CALL
    instruction, jumps to the subroutine and executes the entire
    subroutine, comes back and executes the third instruction, and then
    stops. A T3 command, on the other hand, executes the first
    instruction, executes the second, executes the first instruction of
    the subroutine as its third instruction, and then stops. If the
    instruction at address is not a loop, repeated string instruction,
    software interrupt, or subroutine call, the P command functions just
    like the T command. After each instruction is executed, SYMDEB
    displays the current contents of the target program's registers and
    flags and the next instruction to be executed.

Examples

    Assume that the program being debugged was compiled with Microsoft C,
    a .SYM file was loaded with the executable program to provide line-
    number information, and source-code display has been enabled with the
    S+ command.  To execute the machine instructions corresponding to the
    next four lines of source code, type

    -P 4  <Enter>

    Assume that the target program was created with MASM and location
    CS:143FH contains a CALL instruction. To execute the subroutine that
    is the destination of CALL at full speed and then return control to
    SYMDEB, type

    -P =143F  <Enter>



SYMDEB: Q
Quit


Purpose

    Ends a SYMDEB session.

Syntax

    Q

Description

    The Quit (Q) command terminates the SYMDEB program and returns control
    to MS-DOS or the command shell that invoked SYMDEB. Any changes made
    to a program or other file that were not previously saved to disk with
    the Write File or Sectors (W) command are lost when the Q command is
    used.

Example

    To exit SYMDEB, type

    -Q  <Enter>



SYMDEB: R
Display or Modify Registers


Purpose

    Displays one or all registers and allows a register to be
    modified.

Syntax

    R

    or

    R register [[=] value]

    where:

    register   is the two-character name of an Intel 8086/8088 register
                from the following list:

                AX BX CX DX SP BP SI DI DS ES SS CS IP PC

                or the character F, to indicate the CPU flags.

    =          is an optional equal sign preceding value.

    value      is a 16-bit integer (0-FFFFH) that will be assigned to
                the specified register.

Description

    The Display or Modify Registers (R) command allows the target
    program's register contents and CPU flags to be displayed and
    modified.

    If R is entered without a register parameter, the current contents of
    all registers and CPU flags are displayed, followed by a disassembly
    of the machine instruction currently pointed to by the target
    program's CS:IP registers.

    A register can be assigned a new value in a single command by entering
    both register and value parameters, optionally separated by an equal
    sign (=). If a register is named but no value is supplied, SYMDEB
    displays the current contents of the specified register and then
    prompts with a colon character (:) for a new value to be placed in the
    register. The user can enter the value in any valid radix or as an
    expression and then press the Enter key. If no radix is appended to
    the new value, hexadecimal is assumed. If the user presses the Enter
    key alone in response to the prompt, no changes are made to the
    register contents.

    Note: The PC register name is not supported properly in some versions
    of SYMDEB, so the IP register name should always be used
    instead.

    Use of the character F instead of a register name causes SYMDEB to
    display the current status of the traced program's CPU flags as a set
    of two-character codes from the following list:

╓┌─────────────────┌───────────────────┌─────────────────────────────────────╖
    Flag Name    Value If Set (1)    Value If Clear (0)
    ──────────────────────────────────────────────────────────────────────
    Overflow     OV (Overflow)       NV (No Overflow)
    Direction    DN (Down)           UP (Up)
    Interrupt    EI (Enabled)        DI (Disabled)
    Sign         NG (Minus)          PL (Plus)
    Zero         ZR (Zero)           NZ (Not Zero)
    Aux Carry    AC (Aux Carry)      NA (No Aux Carry)
    Parity       PE (Even)           PO (Odd)
    Carry        CY (Carry)          NC (No Carry)

    After displaying the current flag values, SYMDEB again displays its
    prompt (-). Any or all of the individual flags can then be altered by
    typing one or more two-character flag codes (in any order and
    optionally separated by spaces) from the list above and then pressing
    the Enter key. If the user responds to the prompt by pressing the
    Enter key without entering any codes, no changes are made to the
    status of the flags.

Examples

    To display the current contents of the target program's CPU registers
    and flags, followed by the disassembled mnemonic for the next
    instruction to be executed (pointed to by CS:IP), type

    -R  <Enter>

    This produces the following display:

    AX=0000  BX=0000  CX=00A1  DX=0000  SP=FFFE  BP=0000 SI=0000  DI=0000
    DS=19A5  ES=19A5  SS=19A5  CS=19A5  IP=0100   NV UP EI PL NZ NA PO NC
    19A5:0100 BF8000       MOV   DI,0080

    If the source display mode is enabled, the R command displays the
    following:

    AX=0000  BX=1044  CX=0000  DX=0102  SP=103C  BP=0000  SI=00EA  DI=115E
    DS=2143  ES=2143  SS=2143  CS=1F6E  IP=0010   NV UP EI PL ZR NA PE NC
    32:    int   argc;
    _TEXT:_main:
    1F6E:0010 55             PUSH    BP                            ;BR0

    This format includes the source code that corresponds to the next
    instruction to be executed.

    To set the contents of register AX to FFFFH without displaying its
    current value, type

    -R AX=FFFF  <Enter>

    or

    -R AX -1  <Enter>

    To display the current value of the target program's BX register, type

    -R BX  <Enter>

    If BX contains 200H, for example, SYMDEB displays that value and then
    issues a prompt in the form of a colon:

    BX 0200
    :

    The contents of BX can then be altered by typing a new value and
    pressing the Enter key, or the contents can be left unchanged by
    pressing the Enter key alone.

    To set the direction and carry flags, first type

    -R F  <Enter>

    SYMDEB displays the current flag values, followed by a prompt in the
    form of a hyphen character (-). For example:

    NV UP EI PL NZ NA PO NC  -

    The direction and carry flags can then be set by entering

    -DN CY  <Enter>

    on the same line as the prompt.

Messages

    Bad Flag!
    An invalid code for a CPU flag was entered.

    Bad Register!
    An invalid register name was entered.

    Double Flag!
    Two values for the same CPU flag were entered in the same
    command.



SYMDEB: S
Search Memory


Purpose

    Searches memory for a pattern of one or more bytes.

Syntax

    S range list

    where:

    range      is the starting and ending address or the starting address
                and length in bytes of the area to be searched.

    list       is one or more byte values or a string to be searched for.

Description

    The Search Memory (S) command searches a designated range of memory
    for a sequence of byte values or text strings and displays the
    starting address of each set of matching bytes. The contents of the
    searched area are not altered.

    The range parameter specifies the starting and ending address or the
    starting address and length in bytes of the area to be searched. If a
    segment is not included in range, SYMDEB uses DS. If a segment is
    specified only for the starting address, SYMDEB uses the same segment
    for the ending address. If a starting address and length in bytes are
    specified, the starting address plus the length less 1 cannot exceed
    FFFFH.

    The list parameter is one or more hexadecimal byte values and/or
    strings separated by spaces, commas, or tab characters. Strings must
    be enclosed in single or double quotation marks, and case is
    significant within a string.

Examples

    To search for the string Copyright in the area of memory from
    DS:0000H through DS:1FFFH, type

    -S 0 1FFF 'Copyright'  <Enter>

    or

    -S 0 L2000 "Copyright"  <Enter>

    If a match is found, SYMDEB displays the address of each
    occurrence:

    20A8:0910
    20A8:094F
    20A8:097C

    To search for the byte sequence 3BH 06H in the area of memory from
    CS:0100H through CS:12A0H, type

    -S CS:100 12A0 3B 06  <Enter>

    or

    -S CS:100 L11A1 3B 06  <Enter>



SYMDEB: S+
Enable Source Display Mode


Purpose

    Displays source-code lines, rather than machine instructions.

Syntax

    S+

Description

    The Enable Source Display Mode (S+) command affects the display format
    of certain SYMDEB commands: Proceed Through Loop or Subroutine (P),
    Trace Program Execution (T), and Display or Modify Registers (R). The
    S+ command causes source code, rather than disassembled machine
    instructions, to be displayed by those commands.

    The S+ command is useful only if the program being debugged was
    created with a high-level-language compiler capable of placing line-
    number information into the relocatable object modules processed by
    the Microsoft Object Linker (LINK). When debugging Microsoft Macro
    Assembler (MASM) programs or programs generated by language compilers
    that do not pass line-number information to LINK, the S+ command has
    no effect.

Example

    To enable the display of source-code statements during debugging,
    type

    -S+  <Enter>



SYMDEB: S-
Disable Source Display Mode


Purpose

    Displays disassembled machine instructions, rather than source-code
    lines.

Syntax

    S-

Description

    The Disable Source Display Mode (S-) command affects the display
    format of certain SYMDEB commands: Proceed Through Loop or Subroutine
    (P), Trace Program Execution (T), and Display or Modify Registers (R).
    The S- command causes disassembled machine instructions, rather than
    source code, to be displayed by those commands. By default, SYMDEB
    displays disassembled machine instructions when debugging Microsoft
    Macro Assembler (MASM) programs or programs generated by language
    compilers that do not pass line-number information to the Microsoft
    Object Linker (LINK).

Example

    To disable the display of source-code statements during debugging,
    type

    -S-  <Enter>



SYMDEB: S&
Enable Source and Machine Code Display Mode


Purpose

    Displays both source-code lines and disassembled machine
    instructions.

Syntax

    S&

Description

    The Enable Source and Machine Code Display Mode (S&) command affects
    the display format of certain SYMDEB commands: Proceed Through Loop or
    Subroutine (P), Trace Program Execution (T), and Display or Modify
    Registers (R). The S& command causes both the disassembled machine
    instructions and the corresponding source-code lines to be displayed
    by those commands.

    The S& command is useful only if the program being debugged was
    created with a high-level-language compiler capable of placing line-
    number information into the relocatable object modules processed by
    the Microsoft Object Linker (LINK). When debugging Microsoft Macro
    Assembler (MASM) programs or programs generated by language compilers
    that do not pass line-number information to LINK, the S& command has
    no effect.

Example

    To enable the display of both source-code statements and disassembled
    machine-code statements during debugging, type

    -S&  <Enter>



SYMDEB: T
Trace Program Execution


Purpose

    Executes one or more machine instructions in single-step mode.

Syntax

    T[=address] [number]

    where:

    address     is the location of the first instruction to be executed.

    number      is the number of machine instructions to be executed.

Description

    The Trace Program Execution (T) command executes one or more machine
    instructions, starting at the specified address. If source display
    mode has been enabled with the S+ command, each trace operation
    executes the machine code corresponding to one source statement and
    displays the lines from the source code. If source display mode has
    been disabled with the S- command, each trace operation executes an
    individual machine instruction and displays the contents of the CPU
    registers and flags after execution.

    Warning: The T command should not be used to execute any instruction
    that changes the contents of the Intel 8259 interrupt mask (ports 20H
    and 21H on the IBM PC and compatibles). Use the Go (G) command
    instead.

    The address parameter points to the first instruction to be executed.
    If address does not include a segment, SYMDEB uses the target
    program's CS register; if address is omitted entirely, execution is
    begun at the current address specified by the target program's CS:IP
    registers. The address parameter must be preceded by an equal sign (=)
    to distinguish it from number.

    The number parameter specifies the hexadecimal number of source-code
    statements or machine instructions to be executed before the SYMDEB
    prompt is displayed again (default = 1). If source display mode is
    enabled, the number parameter is required. Execution of a sequence of
    instructions using the T command can be interrupted at any time by
    pressing Ctrl-C or Ctrl-Break and can be paused by pressing Ctrl-S
    (pressing any key resumes the trace).

Examples

    To execute one instruction at location CS:1A00H and then return
    control to SYMDEB, displaying the contents of the CPU registers and
    flags, type

    -T =1A00  <Enter>

    Consecutive instructions can then be executed by entering repeated T
    commands with no parameters.

    If source display mode has been enabled with a previous S+ command, to
    begin execution at the label main and continue through the machine
    code corresponding to four source- code statements, type

    -T =main 4  <Enter>



SYMDEB: U
Disassemble (Unassemble) Program


Purpose

    Disassembles machine instructions into assembly-language
    mnemonics.

Syntax

    U [range]

    where:

    range      specifies the starting and ending addresses or the
                starting address and the number of instructions of the
                machine code to be disassembled.

Description

    The Disassemble (Unassemble) Program (U) command translates machine
    instructions into their assembly-language mnemonics.

    The range parameter specifies the starting and ending addresses or
    the starting address and number of machine instructions to be
    disassembled. If range does not include an explicit segment, SYMDEB
    uses CS. Note that the resulting disassembly will be incorrect if the
    starting address does not fall on an 8086 instruction boundary.

    If range does not include the number of machine instructions to be
    executed or an ending address, eight instructions are disassembled. If
    range is omitted completely, eight instructions are disassembled
    starting at the address following the last instruction disassembled by
    the previous U command, if a U command has been used; if no U command
    has been used, eight instructions are disassembled starting at the
    address specified by the current value of the target program's CS:IP
    registers.

    The display format for the U command depends on the current source
    display mode setting and on whether the program was developed with a
    compatible high-level-language compiler. If the source display mode
    setting is S- or the program was developed with the Microsoft Macro
    Assembler (MASM) or a noncompatible high-level-language compiler, the
    display contains only the address and the disassembled equivalent of
    each instruction within range. (For 8-bit immediate operands, SYMDEB
    also displays the ASCII equivalent as a comment following a
    semicolon.) If the setting is S+ or S& and a compatible symbol file
    containing line-number information was loaded with the program being
    debugged, the display contains both the source-code lines and their
    corresponding disassembled machine instructions.

    Note: The 80286 instructions that are considered privileged when the
    microprocessor is running in protected mode are not supported by
    SYMDEB's disassembler.

Examples

    To disassemble four machine instructions starting at CS:0100H,
    type

    -U 100 L4  <Enter>

    This produces the following display:

    44DC:0100 EC             IN     AL,DX
    44DC:0101 B80200         MOV    AX,0002
    44DC:0104 E86102         CALL   0368
    44DC:0107 57             PUSH   DI

    Successive eight-instruction fragments of machine code can be
    disassembled by entering additional U commands without
    parameters.

    When a program is being debugged with a symbol file that contains
    line-number information and source display mode has been enabled,
    disassembled machine code is accompanied by the corresponding source
    code:

    43:        if (argc != 2)
    28A5:0031 837E0402       CMP    Word Ptr [BP+04],+02
    28A5:0035 7503           JNZ    _main+2A (003A)
    28A5:0037 E91400         JMP    _main+3E (004E)
    44:         {  fprintf(stderr,"\ndump: wrong number of parameters\n");
    28A5:003A B83600         MOV    AX,0036
    28A5:003D 50             PUSH   AX
    28A5:003E B8F600         MOV    AX,00F6
    28A5:0041 50             PUSH   AX
    28A5:0042 E8AC04         CALL   _fprintf
    28A5:0045 83C404         ADD    SP,+04
    45:                return(1);
    28A5:0048 B80100         MOV    AX,0001
    28A5:004B E9AA00         JMP    _main+E8 (00F8)



SYMDEB: V
View Source Code


Purpose

    Displays lines from the source-code file for the program being
    debugged.

Syntax

    V address [length]

    or

    V [.sourcefile:linenumber]

    where:

    address         is the location of an executable instruction in the
                    target program.

    length          is an ending address or the number of source-code
                    lines.

    .sourcefile     is the base name of the source file of the program
                    being debugged, preceded by a period (.).

    linenumber      is the first literal line number of .sourcefile to
                    be displayed.

Description

    The View Source Code (V) command displays lines of source code for the
    program being debugged, beginning at the location specified by
    address. If address does not include a segment, SYMDEB uses the
    target program's CS register.

    The optional length parameter can be an ending address or an L
    followed by a hexadecimal number of source-code lines. If length is
    not specified, eight lines of source code are displayed.

    If the .sourcefile parameter is specified, followed by a colon
    character (:) and a line number, eight lines of source code are
    displayed, starting at linenumber. If the V command is entered
    without parameters after the .sourcefile:linenumber parameter has
    been specified, eight lines are displayed from the current source
    file, beginning with the line after the last line displayed with the V
    command. The .sourcefile parameter must be the name of a high-level-
    language source file in the current directory. Pathnames and
    extensions are not supported. The length option cannot be used with
    the .sourcefile parameter.

    Warning: Specifying a file that does not exist in the current
    directory may cause the system to crash.

    The V command can be used only with programs created by a high-level-
    language compiler that is capable of placing line-number information
    into the relocatable object modules processed by the Microsoft Object
    Linker (LINK). The current source display mode setting (S-, S+, or S&)
    has no effect on the V command.

Examples

    Assume that the program DUMP.EXE is being debugged with the aid of the
    symbol file DUMP.SYM and that the source file DUMP.C is available in
    the current directory. To display eight lines of source code beginning
    at the label main, type

    -V _main  <Enter>

    This produces the following output:

32:        int   argc;
33:        char  *argv[];
34:
35:    {   FILE *dfile;              /* control block for input file */
36:        int status = 0;           /* status returned from file read */
37:        int file rec = 0;         /* file record number being dumped */
38:        long file ptr = 0L;       /* file byte offset for current rec */
39:        char file buf[REC SIZE];  /* data block from file */

    To view eight lines of source code from the file DUMP.C, beginning
    with line 20, type

    -V .DUMP:20  <Enter>

Message

    Source file for filename (cr for none)?
    The current directory does not contain the source file specified with
    the .sourcefile parameter. Enter the correct filename or press Enter
    to indicate no source file.



SYMDEB: W
Write File or Sectors


Purpose

    Writes a file or individual sectors to disk.

Syntax

    W [address]

    or

    W address drive start number

    where:

    address    is the first location in memory of the data to be written.

    drive      is the number of the destination disk drive (0 = drive A,
                1 = drive B, 2 = drive C, 3 = drive D).

    start      is the number of the first logical sector to be written
                (0-FFFFH).

    number     is the number of consecutive sectors to be written (0-
                FFFFH).

Description

    The Write File or Sectors (W) command transfers a file or individual
    sectors from memory to disk.

    When the W command is entered without parameters or with an address
    alone, the number of bytes specified by the contents of registers
    BX:CX are written from memory to the file named by the most recent
    Name File or Command-Tail Parameters (N) command or to the first file
    specified in the SYMDEB command line if the N command has not been
    used.

    Note: If a Go (G), Proceed Through Loop or Subroutine (P), or Trace
    Program Execution (T) command was previously used or the contents of
    the BX or CX registers were changed, BX:CX must be restored before the
    W command is used.

    When address is not included in the command line, SYMDEB uses the
    target program's CS:0100H. Files with a .EXE or .HEX extension cannot
    be written with the W command.

    The W command can also be used to bypass the MS-DOS file system and
    obtain direct access to logical sectors on the disk. To use the W
    command in this way, the memory address (address), disk unit number
    (drive), starting logical sector number (start), and number of sectors
    to be written (number) must all be provided in the command line in
    hexadecimal format.

    Warning: Extreme caution should be used with the W command. The
    disk's file structure can easily be damaged if the command is entered
    incorrectly. The W command should not be used to write logical sectors
    to network drives.

Example

    Assume that the interactive Assemble Machine Instructions (A) command
    was used to create a program in SYMDEB's memory buffer that is 32
    (20H) bytes long, beginning at offset 100H. This program can be
    written into the file QUICK.COM by sequential use of the Name File or
    Command-Tail Parameters (N), Display or Modify Registers (R), and
    Write File or Sectors (W) commands. First, use the N command to
    specify the name of the file to be written:

    -N QUICK.COM  <Enter>

    Next, use the R command to set registers BX and CX to the length to be
    written. Register BX contains the upper half or most significant part
    of the length; register CX contains the lower half or least
    significant part. Type

    -R CX  <Enter>

    SYMDEB displays the current contents of register CX and issues a colon
    character (:) prompt . Enter the length after the prompt:

    :20  <Enter>

    To use the R command again to set the BX register to zero, type

    -R BX  <Enter>

    Then type

    :0  <Enter>

    To create the disk file QUICK.COM and write the program into it,
    type

    -W  <Enter>

    SYMDEB responds:

    Writing 0020 bytes

Messages

    EXE and HEX files cannot be written
    Files with a .EXE or .HEX extension cannot be written to disk with the
    W command.

    Writing nnnn bytes
    After a successful write operation, SYMDEB displays in hexadecimal
    format the number of bytes written to disk.



SYMDEB: X
Examine Symbol Map


Purpose

    Displays names and addresses in the symbol maps.

Syntax

    X[*]

    or

    X? [map!] [segment:] [symbol]

    where:

    map!        is the name of a symbol file, without the .SYM extension,
                followed by an exclamation point (!).

    segment:    is the name of a segment within the currently open or
                specified map, followed by a colon character (:).

    symbol      is a symbol name within the specified segment.

Description

    The Examine Symbol Map (X) command displays the addresses and names of
    symbols in the currently open symbol maps. (SYMDEB maintains a symbol
    map for each symbol file specified in the SYMDEB command line.)

    If the X command is followed by the asterisk wildcard character (*),
    the map names, segment names, and segment addresses for all currently
    loaded symbol maps are displayed. If X is entered alone, the
    information is displayed only for the active symbol map.

    Information from the symbol maps can be displayed selectively by
    following the X? command with the map!, segment:, and symbol
    parameters. The three parameters may be used individually or in
    combination, but at least one parameter must be specified.

    The map! parameter must be terminated by an exclamation point and
    consists of the name, without the extension, of a previously loaded
    symbol file. If map! is omitted, SYMDEB uses the currently open symbol
    map. If more than one .SYM file is specified in the command line, the
    one with the same name as the program being debugged is opened first.

    The segment: parameter must be terminated with a colon; it is the name
    of a segment declared within the specified or currently open symbol
    map.

    The symbol parameter is the name of a label, variable, or other
    object within the specified segment.

    Any or all parameters can consist of or include the asterisk wildcard
    character. For example, X?* displays everything in the current map.

Examples

    Assume that the program DUMP.EXE is being debugged with the symbol
    file DUMP.SYM. If the following is typed

    -X  <Enter>

    SYMDEB displays:

    [456E DUMP]
        [456E _TEXT]
            4743 DGROUP

    This indicates that the program contains one executable code segment
    (named _TEXT), which is loaded at segment 456EH, and one NEAR DATA
    group and segment (named DGROUP), which is loaded at segment 4743H.

    To display the addresses of all procedures in the same example program
    whose names begin with the character f, type

    -X? _TEXT:_F*  <Enter>

    This produces the following listing:

    _TEXT: (456E)
    0428 _fclose           04CB _fopen            04F1 _fprintf
    0528 _fread            0ACB _fflush           0BC2 _free
    19AD _flushall

    Note: Unlike the Microsoft C Compiler, SYMDEB is not case
    sensitive.



SYMDEB: XO
Open Symbol Map


Purpose

    Selects the active symbol map and/or segment.

Syntax

    XO [map!] [segment]

    where:

    map!       is the name of a symbol file, without the .SYM extension,
                followed by an exclamation point (!).

    segment    is the name of the segment that will become the active
                segment in the current symbol map.

Description

    The Open Symbol Map (XO) command selects the active symbol map and/or
    the active segment within the current symbol map to be used during
    debugging.

    The optional map! parameter must be terminated by an exclamation point
    and must be the name, without the extension, of a symbol file
    specified in the original SYMDEB command line. If map! is omitted, no
    changes are made to the active symbol map.

    The optional segment parameter must be the name of a segment within
    the current or specified symbol map. All segments in the active symbol
    map are accessible; the active segment is searched first for symbols
    specified in other SYMDEB commands. If segment is omitted and a new
    active symbol map is specified, the segment with the smallest address
    in the new active symbol map will become the active segment.

Examples

    Assume that the program SHELL.EXE has been loaded with the two symbol
    files SHELL.SYM and VIDEO.SYM. To use the information loaded from
    VIDEO.SYM as the active symbol map for debugging, type

    -XO VIDEO!  <Enter>

    Subsequent entry of the command

    -XO _TEXT  <Enter>

    causes the segment _TEXT within the symbol map VIDEO to be searched
    first for symbol names.

Message

    Symbol not found
    The specified symbol map or segment does not exist.



SYMDEB: Z
Set Symbol Value


Purpose

    Assigns a value to a symbol.

Syntax

    Z [map!] symbol value

    where:

    map!       is the name of a symbol file, without the .SYM extension,
                followed by an exclamation point (!).

    symbol     is an existing symbol name in the active symbol map or in
                the symbol map specified by map!.

    value      is the new address of symbol (0-FFFFH).

Description

    The Set Symbol Value (Z) command allows the address associated with a
    name in one of the loaded symbol maps to be overridden by a new
    value.

    Note that altering the address of a symbol at debugging time will not
    affect other addresses or values that were derived from the value of
    the same symbol at compilation or assembly time.

    The optional map! parameter must be terminated by an exclamation point
    and must be the name, without the extension, of a symbol file
    specified in the original SYMDEB command line. If map! is omitted,
    SYMDEB uses the active symbol map.

    The symbol parameter specifies the name of a label, variable, or
    other object in map! or the active symbol map.

    The value parameter specifies a new address to be associated with
    symbol.

    To debug programs created with older versions of FORTRAN and Pascal
    (Microsoft versions earlier than 3.3 or IBM versions earlier than
    2.0), the user must start SYMDEB, locate the first procedure of the
    program being debugged, and then use the Z command to set the address
    of DGROUP to the current value of the DS register. (Later versions of
    FORTRAN and Pascal do this by default.)

Examples

    To change the segment address for the symbol DGROUP to 5000H, type

    -Z DGROUP 5000  <Enter>

    The actual data associated with the label DGROUP must be moved to the
    new address before debugging can continue.

    To change the segment address for the symbol CODE in the inactive
    symbol map COUNT to 0F00H, type

    -Z COUNT! CODE F00  <Enter>



SYMDEB: <
Redirect SYMDEB Input


Purpose

    Redirects input to SYMDEB.

Syntax

    < device

    where:

    device     is the name of any MS-DOS device or file.

Description

    The Redirect SYMDEB Input (<) command causes SYMDEB to read its
    commands from the specified text file or character device, rather than
    from the keyboard (CON).

    The device parameter specifies the name of any MS-DOS device or file
    from which commands will be read. If the device parameter is a
    filename, the file must be an ASCII text file and each command in the
    file must be on a separate line.

    If input will be taken from a terminal attached to one of the serial
    communications ports (AUX, COM1, or COM2), the port must be properly
    configured with the MODE command before the SYMDEB session is
    started.

    When SYMDEB commands are redirected from a file, the last entry in the
    file must be either the < CON command, which restores the keyboard as
    the input device, or the Quit (Q) command.  Otherwise, SYMDEB will
    lock and the system will have to be restarted.

Examples

    Assume that the text file FILL.TXT contains the following SYMDEB
    commands:

    F CS:0100 L100 00
    D CS:0100 L100
    R
    Q

    To process FILL.TXT during a SYMDEB session (which in turn exits
    SYMDEB with the Quit [Q] command), type

    -< FILL.TXT  <Enter>

    Assume that the text file SEARCH.TXT contains the following SYMDEB
    commands:

    S BUFFER L2000 "error"
    < CON

    To process SEARCH.TXT during a SYMDEB session and return control to
    the console, type

    -< SEARCH.TXT  <Enter>



SYMDEB: >
Redirect SYMDEB Output


Purpose

    Redirects SYMDEB's output to a device or file.

Syntax

    > device

    where:

    device     is the name of any MS-DOS device or file.

Description

    The Redirect SYMDEB Output (>) command causes SYMDEB to send all its
    messages to the specified device or file, rather than to the video
    display (CON). This is useful for creating a record of a debugging
    session that can be viewed later with an editor or listed on a
    printer.

    After SYMDEB output is redirected, commands typed on the keyboard are
    not echoed to the video display. Therefore, the user must know in
    advance which commands to use and which parameters to supply.

    The device parameter specifies the name of an MS-DOS device or file
    to receive SYMDEB's output. If output will be redirected to one of the
    serial communications ports (AUX, COM1, or COM2), the port must be
    properly configured with the MODE command before the SYMDEB session is
    started.

    Output can be restored to the video display by entering the > CON
    command or by terminating SYMDEB with the Quit (Q) command.

Examples

    To cause SYMDEB to send all prompts and messages to the file
    SESSION.TXT, type

    -> SESSION.TXT  <Enter>

    After this command, new commands are still accepted by SYMDEB, but the
    keypresses are not echoed to the screen until the command

    -> CON  <Enter>

    is entered or SYMDEB is terminated with the Quit (Q) command.

    To cause SYMDEB to send all its prompts and messages to the standard
    printing device, PRN, type

    -> PRN  <Enter>



SYMDEB: =
Redirect SYMDEB Input and Output


Purpose

    Redirects both input and output for SYMDEB.

Syntax

    = device


    where:

    device     is the name of any MS-DOS device.

Description

    The Redirect SYMDEB Input and Output (=) command causes SYMDEB to read
    its commands from and send its output to the specified device, rather
    than reading from the keyboard and sending output to the video display
    (CON). This command is especially useful for debugging programs that
    run in graphics mode; the SYMDEB commands can be entered on a terminal
    attached to the computer's serial port while the graphics program has
    the full use of the system's video display.

    The device parameter specifies the name of any MS-DOS device. If
    input and output will be redirected to one of the serial
    communications ports (AUX, COM1, or COM2), the port must be properly
    configured with the MODE command before the SYMDEB session is started.

    Input and output can be restored to the standard settings with the =
    CON command.

Example

    To redirect SYMDEB's input and output to the first serial
    communications port (COM1), type

    -= COM1  <Enter>



SYMDEB: {
Redirect Target Program Input


Purpose

    Redirects input to the program being debugged.

Syntax

    { device

    where:

    device     is the name of any MS-DOS device or file.

Description

    The Redirect Target Program Input ({) command causes read operations
    by the program being debugged to be taken from the specified file or
    device when the program is executed, rather than from the keyboard
    (CON).

    The device parameter specifies the name of an MS-DOS device or file
    from which the target program will read. If the device parameter is a
    filename, the file must be an ASCII text file and each command in the
    file must be on a separate line.

    If input will be taken from a terminal attached to one of the serial
    communications ports (AUX, COM1, or COM2), the port must be properly
    configured with the MODE command before the SYMDEB session is
    started.

Example

    To cause input for the program being debugged to be taken from the
    file TEST.TXT, type

    -{ TEST.TXT  <Enter>



SYMDEB: }
Redirect Target Program Output


Purpose

    Redirects the output of the program being debugged.

Syntax

    } device

    where:

    device     is the name of any MS-DOS device or file.

Description

    The Redirect Target Program Output (}) command causes write operations
    by the program being debugged to be redirected to the specified device
    or file when the program is executed, rather than to the video display
    (CON). This is useful for capturing the output of a program in a file
    for later listing on a printer.

    The device parameter specifies the name of an MS-DOS device or file
    to receive the target program's output. If output will be redirected
    to one of the serial communications ports (AUX, COM1, or COM2), the
    port must be properly configured with the MODE command before the
    SYMDEB session is started.

Example

    To send the output from the program being debugged to the file
    SESSION.TXT, type

    -} SESSION.TXT  <Enter>



SYMDEB: ~
Redirect Target Program Input and Output


Purpose

    Redirects both input and output for the program being debugged.

Syntax

    ~ device

    where:

    device     is the name of any MS-DOS device.

Description

    The Redirect Target Program Input and Output (~) command causes all
    read and write operations by the program being debugged to be
    redirected to the specified character device.

    The device parameter specifies the name of an MS-DOS device that the
    target program will read from and write to. If input and output are
    redirected to one of the serial communications ports (AUX, COM1, or
    COM2), the port must be properly configured with the MODE command
    before the SYMDEB session is started.

Example

    To redirect input and output for the program being debugged to the
    first serial communications port (COM1), type

    -~ COM1  <Enter>



SYMDEB: \
Swap Screen


Purpose

    Exchanges the SYMDEB display for the target program's display.

Syntax

    \

Description

    The Swap Screen (\) command causes the SYMDEB status display to be
    exchanged for the virtual screen used by the program being debugged.
    After the program's output has been inspected on the virtual screen,
    the SYMDEB display can be restored by pressing any key. This command
    is useful for debugging programs that perform direct screen access or
    run in graphics mode.

    Note: Any information on the display when SYMDEB was invoked will
    also appear on the virtual screen. When SYMDEB is terminated, the
    current display is set to match the virtual screen.

    The Swap Screen command is available only if the /S switch (or the /I
    switch, if the computer is IBM compatible) preceded the names of the
    symbol and program files in the original SYMDEB command line.

Example

    To exchange the SYMDEB status display for the virtual screen of the
    program being debugged, type

    -\  <Enter>

    To restore the SYMDEB display, press any key.



SYMDEB: .
Display Source Line


Purpose

    Displays the current source-code line.

Syntax

    .

Description

    The Display Source Line (.) command displays the line from the source-
    code file that corresponds to the machine instruction currently
    pointed to by the target program's CS:IP registers.

    The . command is independent of the current Source Display Mode status
    (S+, S-, or S&). However, if the program being debugged was not
    created with a high-level-language compiler that inserts line numbers
    into the object modules, the . command has no effect.

Example

    To display the source-code line corresponding to the next instruction
    to be executed, type

    -.  <Enter>

    This produces output in the following form:

    56:        printf( '\nDump of file: %s ', argv[1] );



SYMDEB: ?
Help or Evaluate Expression


Purpose

    Displays the help screen or the value of an expression.

Syntax

    ? [expression]

    where:

    expression      is any valid combination of symbols, addresses,
                    numbers, and operators.

Description

    When ? is entered alone, a help screen summarizing all valid SYMDEB
    commands, operators, and types is displayed.

    When ? is followed by the expression parameter, expression is
    evaluated and the value is displayed. The expression parameter can
    include any valid combination of symbols, addresses, numbers, and
    operators.

    The form and content of the resulting display depends on the type of
    expression entered. If expression is a symbol or an address
    (optionally including operators), the value is shown first as a FAR
    address pointer in the form segment:offset, then as a 32-bit
    hexadecimal number representing the value's physical location in
    memory (followed by its decimal equivalent in parentheses), and
    finally as the physical location's ASCII character equivalents
    displayed as a string enclosed in quotation marks (which have no
    practical value if expression is an address or symbol).

    If expression includes numbers (interpreted as signed hexadecimal
    values unless a radix is specified) and operators, the resulting value
    is shown first as a 16-bit hexadecimal value, then as a 32-bit
    hexadecimal value (followed by its decimal equivalent in parentheses),
    and finally as the value's ASCII character equivalents displayed as a
    string enclosed in quotation marks.

    (The ASCII characters within the string are displayed as dots if their
    value is less than 20H [32] or greater than 7EH [126].)

Examples

    Assume that the pointer array argv in the program DUMP.C is located
    at address 4743:029CH. The command

    -? _argv+4  <Enter>

    produces the following display:

    4743:02A0h  000476D0  (292560)

    To display the result of an exclusive OR operation between the values
    0FCH and 14H, type

    -? FC XOR 14  <Enter>

    SYMDEB displays

    00E8h  000000E8  (232)



SYMDEB: !
Escape to Shell


Purpose

    Invokes the MS-DOS command processor.

Syntax

    ! [command]

    where:

    command         is the name of any MS-DOS command, program, or batch
                    file and its required parameters.

Description

    The Escape to Shell (!) command loads a copy of the system's command
    processor (COMMAND.COM), optionally passing it the name of a program
    or batch file to be executed. This allows MS-DOS functions such as
    listing or copying files to be carried out without losing the context
    of the debugging session.

    If the ! command is entered alone, an additional copy of COMMAND.COM
    gains control and displays the system prompt. Control can be returned
    to SYMDEB by leaving the new shell with the EXIT command.

    If the ! character is followed by a command parameter that specifies
    any valid MS-DOS command, program name, or batch-file name, the
    specified command is executed immediately and control returns directly
    to SYMDEB.

    The SYMDEB statement connector (;) cannot be used on the same line as
    the ! command; all text encountered after this command is passed to
    COMMAND.COM and is interpreted as an MS-DOS command line.

Example

    To list the files in the current directory, type

    -! DIR /W  <Enter>

Messages

    COMMAND.COM not found!
    SYMDEB could not find COMMAND.COM because it was not present in the
    directory location specified in the environment block's COMSPEC
    variable.

    Not enough memory!
    Free memory in the transient program area (TPA) is insufficient to
    execute the requested command or program. This is a common occurrence
    when debugging a large program with symbol files.



SYMDEB: *
Enter Comment


Purpose

    Allows insertion of a comment that will be ignored by SYMDEB's command
    interpreter.

Syntax

    *text

    where:

    text       is any ASCII text up to and including a carriage return.

Description

    The Enter Comment (*) command causes the remainder of the text on that
    line to be ignored, thereby providing a means of commenting a SYMDEB
    debugging session. SYMDEB echoes any text following the asterisk to
    the screen or redirected output device, providing the user with a
    convenient way to comment program output redirected to a file or a
    printer. A maximum of 78 characters can be included on each comment
    line. Comment lines are also useful for documenting lines within a
    text file that SYMDEB will use as redirected input for the program
    being debugged.

Example

    To echo the reminder Errors in program output start here: to the
    screen or redirected output device, type

    -*Errors in program output start here:  <Enter>

    A line in a text file that will be used by SYMDEB for redirected input
    to the program being debugged may be "commented out" by inserting an
    asterisk at the beginning of the line. For example:

    *EB CS:1200 90



CodeView
Window-Oriented Debugger


Purpose

    Allows the controlled execution of an assembly-language program or
    high-level-language program for debugging purposes. Both source code
    and the corresponding unassembled machine code can be displayed as
    program execution is traced. In addition, watch variables, CPU
    registers and flags, and program output can be examined in separate
    debugging windows. CodeView is supplied with the Microsoft Macro
    Assembler (MASM), C Compiler, Pascal Compiler, and FORTRAN Compiler.
    This documentation describes CodeView version 2.0.

Syntax

    CV [options] exe_file [parameters]

    where:

    exe_file        is the name of the executable file containing the
                    program to be debugged (default extension = .EXE).

    parameters      is one or more filenames or switches required by the
                    program being debugged.

    options         is one or more switches from the following list.
                    Switches can be either uppercase or lowercase and
                    can be preceded by a dash (-) instead of a forward
                    slash (/).

                    /2           Allows the use of two video displays for
                                debugging.

                    /43          Enables 43-line display mode. (An IBM-
                                compatible computer with an enhanced
                                graphics adapter [EGA] and an enhanced
                                color display is required for this
                                option.)

                    /B           Forces the attached monitor to use two
                                shades of color when displaying
                                information.

                    /Ccommands   Executes the specified list of startup
                                commands when CodeView is invoked. If
                                the list of startup commands contains
                                any spaces, the entire list must be
                                enclosed in double quotation marks (").
                                Commands in the list must be separated
                                by a semicolon character (;).

                    /D           Turns off nonmaskable interrupt trapping
                                and Intel 8259 interrupt trapping.
                                (This switch prevents system crashes on
                                some IBM-compatible machines that do
                                not support certain IBM-specific
                                interrupt trapping functions.)

                    /E           Stores the symbolic information of the
                                program in expanded memory.

                    /F           Enables the screen-flipping method of
                                switching between the debugging display
                                and the virtual output display. Screen
                                flipping is the default method for IBM-
                                compatible computers with color/graphics
                                adapters.

                    /I           Enables nonmaskable interrupt trapping
                                and Intel 8259 interrupt trapping on
                                computers that are not IBM-compatible.

                    /M           Disables mouse support within CodeView.

                    /P           Enables palette register restore mode,
                                which allows non-IBM EGAs to restore
                                the proper colors upon return from the
                                virtual output screen.

                    /R           Enables Intel 80386 debugging registers.

                    /S           Enables the screen-swapping method of
                                switching between the debugging display
                                and the virtual output display. Screen
                                swapping is the default method for IBM-
                                compatible computers with monochrome
                                adapters.

                    /T           Disables window mode. This switch is
                                necessary for some non-IBM computers or
                                when a sequential debugging session is
                                desired.

                    /W           Enables window mode. This switch allows
                                CodeView to operate in multiple windows
                                on the same screen. (This option is not
                                the default for some computers.)

Description

    CodeView is a window-oriented menu-driven debugger that allows tracing
    and debugging of high-level-language programs and assembly-language
    programs. In general, any valid C, FORTRAN, BASIC, Pascal, or MASM
    source code can be debugged with CodeView.

    To prepare a program for debugging under CodeView, the program must be
    compiled and linked so that the resulting executable file has the
    extension .EXE and contains line-number information, a symbol table,
    and executable code. (To a limited extent, text files and .COM files
    can also be examined under CodeView.) During the debugging session,
    the program source file must remain in the current directory if
    source-code display is desired.

    The CodeView screen contains four windows that display information
    about the pro- gram being debugged: the display window, which contains
    program source code and (if requested) the unassembled machine code
    corresponding to the source code; the dialog window, where line-
    oriented commands similar (and in some cases identical) to SYMDEB can
    be entered and viewed (see PROGRAMMING UTILITIES: SYMDEB);
    the register window (optional), which contains the current status of
    the microprocessor's registers and flags; and the watch window
    (optional), which contains program variables or memory locations to be
    examined during program execution. CodeView also provides a virtual
    output screen (stored internally) that contains all display output
    generated during the CodeView session.

    A typical CodeView debugging screen looks like this:


            ╔══════════════════════════════════════════╗
            ║                                          ║
            ║  The CodeView display is found on page   ║
            ║ 1159 in the printed version of the book. ║
            ║                                          ║
            ╚══════════════════════════════════════════╝


    The CodeView display.

Display window commands

    Commands that control the display window are available in nine pull-
    down menus whose names appear in a menu bar near the top of the
    screen. Commands can be selected with the keyboard or the mouse.
    Commands are selected with the keyboard by pressing the Alt key,
    pressing the first letter in the menu name, and then pressing the
    first letter of the command. Commands are selected with the mouse by
    pulling down the menu with the mouse pointer, highlighting the
    command, and then releasing the mouse button. Commands with small
    double arrows to the left of the command name are currently active.
    The CodeView menus and commands are described below.

    File menu
    The File menu includes commands that manipulate the current source or
    program file. To select the File menu with the keyboard, press Alt-F.

╓┌─────────────────┌─────────────────────────────────────────────────────────╖
    Command      Action
    ──────────────────────────────────────────────────────────────────────
    Open...      Opens the specified source file, include file, or text
                file in the display window.

    DOS Shell    Exits to the shell temporarily. Type exit to return to
                CodeView.

    Exit         Ends the current CodeView session.


    View menu
    The View menu includes commands that select source or assembly modes
    and commands that select the debugging screen or the virtual output
    screen. To select the View menu with the keyboard, press Alt-V.

╓┌─────────────────┌─────────────────────────────────────────────────────────╖
    Command      Action
    ──────────────────────────────────────────────────────────────────────
    Source       Displays only the high-level-language or assembly-
                language source code corresponding to the program being
                debugged.

    Mixed        Displays both the unassembled machine code and the source
                code corresponding to the program being debugged.

    Assembly     Displays only the unassembled machine code corresponding
                to the program being debugged.

    Registers    Displays or removes the optional register window.

    Output       Replaces the debugging screen with the virtual output
                screen. Press any key to return to the debugging screen.


    Search menu
    The Search menu includes commands that search through text files for
    text strings and through executable code for labels. To select the
    Search menu with the keyboard, press Alt-S.

╓┌───────────────────────┌───────────────────────────────────────────────────╖
    Command            Action
    ──────────────────────────────────────────────────────────────────────
    Find...            Searches the current source file or other text file
                        for the specified expression.

    Next               Searches forward through the file for the next
                        match of the last expression specified with the
                        Find... command.

    Previous           Searches backward through the file for the next
                        match of the last expression specified with the
                        Find... command.

    Label...           Searches the executable code for the specified
                        procedure name or program label.


    Run menu
    The Run menu includes commands that run the program being debugged. To
    select the Run menu with the keyboard, press Alt-R.

╓┌───────────────────────┌───────────────────────────────────────────────────╖
    Command            Action
    ──────────────────────────────────────────────────────────────────────
    Start              Runs the program at full speed from the first
                        instruction.

    Restart            Reloads the program and moves to the first
                        instruction.

    Execute            Runs the program at reduced speed from the current
                        instruction.

    Clear Breakpoints  Clears all breakpoints.


    Watch menu
    The Watch menu includes commands that add watch statements to and
    delete watch statements from the watch window. Watch statements
    describe expressions or areas of memory to be examined during program
    execution. To select the Watch menu with the keyboard, press Alt-W.

╓┌───────────────────────┌───────────────────────────────────────────────────╖
    Command            Action
    ──────────────────────────────────────────────────────────────────────
    Add Watch...       Adds the specified watch-expression statement to
                        the watch window.

    Watchpoint...      Adds the specified watchpoint statement to the
                        watch window. A watchpoint is a conditional
                        breakpoint that is taken when the expression
                        becomes nonzero (true).

    Tracepoint...      Adds the specified tracepoint statement to the
                        watch window. A tracepoint is a conditional
                        breakpoint that is taken when a given expression
                        or range of memory changes.

    Delete Watch...    Deletes the specified statement from the watch
                        window.

    Delete All Watch   Deletes all statements from the watch window.


    Options menu
    The Options menu contains commands that affect the general behavior of
    CodeView. To select the Options menu with the keyboard, press Alt-O.

╓┌─────────────────┌─────────────────────────────────────────────────────────╖
    Command      Action
    ──────────────────────────────────────────────────────────────────────
    Flip/Swap    When on (the default), enables screen swapping or screen
                flipping (whichever option CodeView was started with);
                when off, disables swapping or flipping. Either method
                can be used to display the CodeView virtual output
                screen.

    Bytes Coded  When on (the default), displays the instructions,
                instruction addresses, and the bytes for each
                instruction; when off, displays only the instructions.

    Case Sense   When on, causes CodeView to assume that symbol names are
                case sensitive; when off, causes CodeView to assume that
                symbol names are not case sensitive. This option is on
                by default for C programs and off by default for
                FORTRAN, BASIC, and assembly programs.

    386           When on, allows instructions that reference 32-bit
                instructions to be assembled and executed and the
                register window to display 32-bit values. When off, does
                not allow Intel 80386 instructions and registers to be
                supported.


    Language menu
    The Language menu contains commands that select the language-dependent
    expression evaluator or instruct CodeView to select it for you. To
    select the Language menu with the keyboard, press Alt-L.

╓┌─────────────────┌─────────────────────────────────────────────────────────╖
    Command      Action
    ──────────────────────────────────────────────────────────────────────
    Auto         Forces CodeView to select the expression evaluator of the
                source file being loaded, based on the extension of the
                source file.

    Basic        Uses a BASIC expression evaluator to determine the value
                of source-level expressions.

    C            Uses a C expression evaluator to determine the value of
                source-level expressions.

    Fortran      Uses a FORTRAN expression evaluator to determine the
                value of source-level expressions.


    Calls menu
    The Calls menu is different from other menus in that its contents vary
    depending on the status of the program. The Calls menu lists the names
    of specific routines that will be displayed on the screen when that
    routine name is selected. Routine names in the Calls menu can be
    selected by typing the number displayed immediately to the left of a
    routine name. The cursor will move to the line at which the selected
    routine was last executing.

    The current value of each parameter, if any, is shown in parentheses
    following the name of the routine in the Calls menu. The menu expands
    to accommodate the parameters of the widest line. Parameters are shown
    in the current radix (default = decimal). If the program contains more
    active routines than will fit on the screen or if the routine
    parameters are too wide, the menu expands to the left and right.

    To select the Calls menu with the keyboard, press Alt-C.

    Help menu
    The Help menu lists the major topics in the CodeView "linked-list"
    help system. For help, pull down the Help menu and then select the
    topic of interest. To select the Help menu with the keyboard, press
    Alt-H.

╓┌───────────────────────┌───────────────────────────────────────────────────╖
    Command            Action
    ──────────────────────────────────────────────────────────────────────
    Intro to Help      Displays information about the "linked-list" help
                        system.

    Keyboard/Mouse     Displays information about keyboard and mouse
                        commands.

    Run commands       Displays information about Run commands.

    Display cmds.      Displays information about Display commands.

    Watch/Break        Displays information about setting, listing, and
                        deleting watchpoints and breakpoints.

    Memory Ops         Displays information about viewing and modifying
                        memory.

    System cmds.       Displays information about system and environment
                        commands.

    About CodeView     Displays information about the current CodeView
                        version, time, and date.


Key commands

    CodeView supports a variety of function keys and key combinations that
    modify the active window.

╓┌─────────────────┌─────────────────────────────────────────────────────────╖
    Key          Action
    ──────────────────────────────────────────────────────────────────────
    F1           Displays the introductory help screen.

    F2           Displays or removes the register window.

    F3           Changes the display in the display window to source,
                mixed, or assembly mode.

    F4           Displays the virtual output screen (press any key to
                return).

    F5           Executes to the next breakpoint or to the end of the
                program if no breakpoint is encountered.

    F6           Toggles between the display window and the dialog window.

    F7           Sets a temporary breakpoint on the line containing the
                cursor and executes to that line (or the next
                breakpoint).

    F8           Executes a trace command, stepping through program calls
                if present.

    F9           Sets or clears a breakpoint on the line containing the
                cursor.

    F10          Executes the next source line (in source mode) or the
                next instruction (in assembly mode), stepping over
                program calls if present.

    Ctrl+G       Increases the size of the display window or the dialog
                window, whichever is active.

    Ctrl+T       Decreases the size of the display window or the dialog
                window, whichever is active.


Dialog window commands

    After CodeView and the specified executable file are loaded, CodeView
    displays its special prompt character (>) at the bottom of the dialog
    window and awaits a dialog command. CodeView dialog commands consist
    of one, two, or three characters, usually followed by one or more
    parameters. CodeView treats uppercase and lowercase characters the
    same except when they are contained in strings enclosed within single
    or double quotation marks. The default radix for dialog command
    parameters is 10 (decimal). Dialog commands are executed when the
    Enter key is pressed.

    A detailed explanation of CodeView dialog commands and parameters is
    not presented in this entry. CodeView dialog commands and parameters
    are similar to SYMDEB commands and parameters. See PROGRAMMING
    UTILITIES: SYMDEB. Additional information about using CodeView
    dialog commands and parameters can be found in the CodeView
    documentation supplied with the Microsoft Macro Assembler (MASM), C
    Compiler, Pascal Compiler, and FORTRAN Compiler. A sample debugging
    session using CodeView dialog commands and window commands is
    documented in this book. See PROGRAMMING IN THE MS-DOS ENVIRONMENT:
    PROGRAMMING TOOLS: Debugging in the MS-DOS Environment.

    The dialog commands available with CodeView are as follows:

╓┌─────────────────┌─────────────────────────┌───────────────────────────────╖
    Command      Syntax                    Action
    ──────────────────────────────────────────────────────────────────────
    !            ! [command]               Escape to shell.
    "            "                         Pause redirected file
                                            execution.
    #            #number                   Set display window tabs.
    *            *comment                  Echo comment to output device.
    .            .                         Display current source line.
    /            /[searchtext]             Search for regular expression.
    7            7                         Display 8087 registers.
    :            :[:]...[:]                Delay redirected file
                                            execution.
    <            < device                  Redirect dialog window input.
    =            = device                  Redirect dialog window input
                                            and output.
    >            [T] > [>] device          Redirect dialog window output.
    ?            ? expression[,format]     Evaluate expression.
    @            @                         Redraw screen.
    A            A [address]               Assemble machine instructions.
    BC           BC [*] [list]             Clear breakpoints.
    BD           BD [*] [list]             Disable breakpoints.
    BE           BE [*] [list]             Enable breakpoints.
    BL           BL                        List breakpoints.
    BP           BP [address [passcount]   Set breakpoints.
                ["cmds"]]
    C            C range address           Compare memory areas.
    D            D [range]                 Display (dump) memory.
    DA           DA [range]                Display ASCII.
    DB           DB [range]                Display bytes.
    DD           DD [range]                Display doublewords.
    DI           DI [range]                Display integers.
    DL           DL [range]                Display long reals.
    DS           DS [range]                Display short reals.
    DT           DT [range]                Display 10-byte reals.
    DU           DU [range]                Display unsigned integers.
    DW           DW [range]                Display words.
    E            E address [list]          Enter data.
    EA           EA address [list]         Enter ASCII string.
    EB           EB address [list]         Enter bytes.
    ED           ED address [value]        Enter doublewords.
    EI           EI address [list]         Enter integers.
    EL           EL address [value]        Enter long reals.
    ES           ES address [value]        Enter short reals.
    ET           ET address [value]        Enter 10-byte reals.
    EU           EU address [value]        Enter unsigned integers.
    EW           EW address [value]        Enter words.
    F            F range list              Fill memory.
    G            G [breakpoint]            Go execute program.
    H            H                         Display help screen.
    I            I port                    Input from port.
    K            K [number]                Perform stack trace.
    L            L [parameters]            Reload program.
    M            M range address           Move (copy) data.
    N            N [radix]                 Change current radix.
    O            O port byte               Output to port.
    O            O                         Display all options.
    O3           O3[+|-]                   Toggle Intel 80386 option.
    OB           OB[+|-]                   Toggle bytes coded option.
    OC           OC[+|-]                   Toggle case-sense option.
    OF           OF[+|-]                   Toggle flip/swap option.
    P            P [count]                 Step through program (over
                                            calls).
    Q            Q                         Quit debugger.
    R            R [register [value]]      Display or modify registers.
    RF           RF [flags]                Display or modify flags.
    S            S range list              Search memory.
    S            S                         Display current display mode.
    S+           S+                        Display source code.
    S-           S-                        Display assembly language.
    S&           S&                        Display source code and
                                            assembly language.
    T            T [count]                 Trace program execution
                                            (through calls).
    TP           TP [type] range           Set memory-tracepoint
                                            statement.
    TP?          TP? expression[,format]   Set tracepoint-expression
                                            statement.
    U            U [range]                 Disassemble (unassemble)
                                            program.
    USE          USE [language]            Switch expression evaluators.
    V            V [.[filename:]linenumber View source code.
    W            W                         List watchpoints and
                                            tracepoints.
    W            W [type] range            Set memory-watch statement.
    W?           W? expression[,format]    Set watch-expression statement.
    WP?          WP? expression[,format]   Set watchpoint.
    X            X[?[module!]              Examine program symbols.
                [routine.]symbol|*]
    Y            Y [*] [list]              Delete watch statements.
    \            \                         Display virtual output screen.


Examples

    To prepare the source file SHELL.C for debugging with CodeView, first
    compile the source file with the switches that disable optimization
    and cause symbol-table and line-number information to be written to
    the relocatable object module:

    C>MSC /Zi /Od SHELL;  <Enter>

    Next, to convert the object module to an executable program and
    prepare it for CodeView, type

    C>LINK /CO SHELL;  <Enter>

    To begin debugging, type

    C>CV SHELL  <Enter>

    To start CodeView in 43-line mode with TEST.EXE as the executable file
    and INFO.DAT as the command-tail parameter, type

    C>CV /43 TEST INFO.DAT  <Enter>

    In both examples the source file corresponding to the specified
    executable file must be in the current directory if source-code
    display is desired.

Messages

    Argument to IMAG/DIMAG must be simple type
    An invalid parameter to an IMAG or DIMAG function, such as an array
    with no subscripts, was specified.

    Array must have subscript
    An array without any subscripts was specified in an expression, such
    as IARRAY + 2. A correct example is IARRAY[1] + 2.

    Bad address
    An invalid address was specified. For example, an address containing
    hexadecimal characters might have been specified when the radix is
    decimal.

    Bad breakpoint command
    An invalid breakpoint number was specified with the BC, BD, or BE
    dialog command. The breakpoint number must be in the range 0 through
    19.

    Bad flag
    An invalid flag mnemonic was specified with the RF dialog command.

    Bad format string
    An invalid format specifier was used following an expression.
    Expressions used with the ?, W?, WP?, and TP? dialog commands can have
    format specifiers set off from the expression by a comma. The valid
    format specifiers are c, d, e, E, f, g, G, i, o, s, u, x, and X. Some
    format specifiers can be preceded by the prefix h (to specify a 2-byte
    integer) or l (to specify a 4-byte integer).

    Bad integer or real constant
    An invalid numeric constant was specified in an expression.

    Bad intrinsic function
    An invalid intrinsic function name was specified in an expression.

    Badly formed type
    The type information in the symbol table of the file being debugged is
    incorrect. This is a serious problem. Note the circumstances of the
    failure and notify Microsoft Corporation.

    Bad radix (use 8, 10, or 16)
    An invalid radix was specified with the N dialog command. Use an
    octal, decimal, or hexadecimal radix.

    Bad register
    An invalid register name was specified with the R dialog command. Use
    AX, BX, CX, DX, SP, BP, SI, DI, DS, ES, SS, CS, or IP. If your machine
    is equipped with an Intel 80386 microprocessor, use EAX, EBX, ECX,
    EDX, ESP, EBP, ESI, EDI, DS, ES, FS, GS, SS, CS, or IP.

    Bad subscript
    An invalid subscript expression was specified for an array, such as
    IARRAY (3.3) or IARRAY ((3,3)). The correct expression for this
    example (in BASIC or FORTRAN) is IARRAY (3,3).

    Bad type cast
    Incompatible types of operands were specified in an expression.

    Bad type (use one of 'ABDILSTUW')
    An invalid type was used in a Display (D, DA, DB, DF, DU, DW, DD, DS,
    DL, or DT) dialog command. The valid types are ASCII (A), byte (B),
    integer (I), unsigned (U), word (W), doubleword (D), short real (S),
    long real (L), and 10-byte real (T).

    Breakpoint # or '*' expected
    The BC, BD, or BE dialog command was entered without a parameter.

    Cannot cast complex constant component into REAL
    An incompatible real or imaginary component was specified in a COMPLEX
    constant. Both real and imaginary components must be compatible with
    type REAL.

    Cannot cast IMAG/DIMAG argument to COMPLEX
    An invalid parameter was specified with an IMAG or DIMAG function.
    IMAG and DIMAG parameters must be simple numeric types.

    Cannot use struct or union as scalar
    A struct or union variable was used as a scalar value in a C
    expression. Such variables must be followed by a file specifier or
    preceded by the address-of (&) operator.

    Can't find filename
    CodeView could not find the executable file specified in the command
    line.

    Character constant too long
    A character constant that is too long for the FORTRAN expression
    evaluator was specified. The limit is 126 bytes.

    Character too big for current radix
    A radix that is larger than the current CodeView radix was specified
    in a constant. Use the N dialog command to change the radix.

    Constant too big
    An unsigned constant number larger than 4,294,967,295 (FFFFFFFFH) was
    specified.

    CPU not an 80386
    The 386 option was selected but a machine without an Intel 80386
    microprocessor is being used.

    Divide by zero
    An expression in a parameter of a dialog command attempted to divide
    by zero.

    EMM error
    CodeView failed to use the Expanded Memory Manager (EMM) correctly.
    This is a serious problem. Note the circumstances of the failure and
    notify Microsoft Corporation.

    EMM hardware error
    The Expanded Memory Manager (EMM) routines reported a hardware error.
    Check your expanded memory board for defects.

    EMM memory not found
    The /E option was used but expanded memory has not been installed.
    Install software that accesses the memory according to the
    Lotus/Intel/Microsoft  Expanded Memory Specification (LIM EMS).

    EMM software error
    The Expanded Memory Manager (EMM) routines reported a software error.
    Reinstall the EMM software.

    Expression too complex
    An expression given as a dialog-command parameter is too complex.

    Extra input ignored
    Too many parameters were specified with a command. CodeView evaluates
    the valid parameters and ignores the rest. In this situation, CodeView
    often does not evaluate the parameters as intended.

    Flip/Swap option off--application output lost
    The program being debugged is writing to the screen, but the output
    cannot be displayed because the flip/swap option has been disabled.

    Floating point error
    This is a serious problem. Note the circumstances of the failure and
    notify Microsoft Corporation.

    Illegal instruction
    This message usually indicates that a machine instruction attempted to
    divide by zero.

    Index out of bound
    A subscript value was specified that is outside the bounds declared
    for the array.

    Insufficient EMM memory
    Expanded memory is insufficient to hold the program's symbol table.

    Internal debugger error
    This is a serious problem. Note the circumstances of the failure and
    notify Microsoft Corporation.

    Invalid argument
    An invalid CodeView expression was specified as a parameter.

    Invalid executable file format--please relink
    The executable file was not linked with the version of LINK released
    with this version of the CodeView debugger. Relink with the
    appropriate version of LINK.

    Invalid option
    An invalid switch was specified with the O command.

    Missing ' " '
    A string specified as a parameter to a dialog command did not have a
    closing double quotation mark.

    Missing '('
    A parameter to a dialog command was specified as an expression
    containing a right parenthesis but no left parenthesis.

    Missing ')'
    A parameter to a dialog command was specified as an expression
    containing a left parenthesis but no right parenthesis.

    Missing ']'
    A parameter to a dialog command was specified as an expression
    containing a left bracket but no right bracket, or a regular
    expression was specified with a right bracket but no left
    bracket.

    Missing '(' in complex constant
    An opening parenthesis of a complex constant in an expression was
    expected but was not found.

    Missing ')' in complex constant
    A closing parenthesis of a complex constant in an expression was
    expected but was not found.

    Missing ')' in substring
    A closing parenthesis of a substring expression was expected but was
    not found.

    Missing '(' to intrinsic
    An opening parenthesis for an intrinsic function was expected but was
    not found.

    Missing ')' to intrinsic
    A closing parenthesis for an intrinsic function was expected but was
    not found.

    No closing single quote
    A character was specified in an expression used as a dialog-command
    parameter, but the closing single quotation mark is missing.

    No code at this line number
    A breakpoint was set on a source line that does not correspond to
    machine code. (In other words, the source line does not contain an
    executable statement.) For example, the line might be a data
    declaration or a comment.

    No free EMM memory handles
    CodeView could not find an available EMM handle. Expanded Memory
    Manager (EMM) software allocates a fixed number of memory handles
    (usually 256) to be used for specific tasks.

    No match of regular expression
    No match was found for the regular expression specified with the
    Search (S) dialog command or with the Find... command from the Search
    menu.

    No previous regular expression
    The Previous command was selected from the Search menu, but CodeView
    found no previous match for the last regular expression specified.

    No source lines at this address
    The address specified as a parameter for the V dialog command does not
    have any source lines. For example, it could be an address in a
    library routine or an assembly-language module.

    No such file/directory
    The specified file or directory does not exist.

    No symbolic information
    The executable file specified is not in the CodeView format. The
    program cannot be debugged in source mode unless the file is created
    in the CodeView format. The program can be debugged in assembly
    mode.

    Not an executable file
    The file specified to be debugged when CodeView started is not an
    executable file with a .EXE or .COM extension.

    Not a text file
    An attempt was made to load a file with the Open... command from the
    File menu or with the V dialog command, but the file is not a text
    file. CodeView determines if a file is a text file by checking the
    first 128 bytes for characters that are not in the ASCII ranges 9
    through 13 and 20 through 126.

    Not enough space
    The ! dialog command or the DOS Shell command from the File menu was
    chosen, but free memory is insufficient to execute COMMAND.COM.
    Because memory is released by code in the FORTRAN startup routines,
    this error always occurs if the ! command is used before executing any
    code. Use any of the code-execution dialog commands (T, P, or G) to
    execute the FORTRAN startup code; then try the ! command again. This
    message also occurs with assembly-language programs that do not
    specifically release memory.

    Object too big
    A TP? dialog command was entered with a data object (such as an array)
    that is larger than 128 bytes.

    Operand types incorrect for this operation
    An operand in a FORTRAN expression had a type incompatible with the
    operation applied to it. For example, if P is declared as CHARACTER P
    (10), then ? P+5 would produce this error, because a character array
    cannot be an operand of an arithmetic operator.

    Operator must have a struct/union type
    One of the C member-selection operators (-, >, or .) was used in an
    expression that does not reference an element of a structure or
    union.

    Operator needs lvalue
    An expression was specified that does not evaluate to a memory
    location in an operation that requires one. (An lvalue is an
    expression that refers to a memory location.) For example,
    buffer (count) is correct; it represents a symbol in memory.
    However, I .EQV. 10 is invalid because it evaluates to TRUE or
    FALSE instead of to a single memory location.

    Overlay not resident
    An attempt was made to unassemble machine code from a function that is
    currently not in memory.

    Program terminated normally (exitcode)
    The program terminated execution normally. The number displayed in
    parentheses is the exit code returned to MS-DOS by the program.

    Radix must be between 2 and 36 inclusive
    A radix that is outside the allowable range was specified.

    Register variable out of scope
    An attempt was made to specify a register variable by using the period
    (.) operator and a routine name.

    Regular expression too complex
    The regular expression specified is too complex for CodeView to
    evaluate.

    Regular expression too long
    The regular expression specified is too long for CodeView to
    evaluate.

    Restart program to debug
    The program being debugged has executed to the end.

    Simple variable cannot have argument
    A parameter to a simple variable was specified in an expression. For
    example, given the declaration INTEGER NUM, the expression NUM(I) is
    not allowed.

    Substring range out of bound
    A character expression exceeded the length specified in the CHARACTER
    statement.

    Syntax error
    An invalid command line was specified for a dialog command, or an
    invalid assembly-language instruction was entered with the A dialog
    command.

    Too few array bounds given
    The bounds specified in an array subscript do not match the array
    declaration. For example, given the array declaration INTEGER
    IARRAY(3,4), the expression IARRAY(I) would produce this error
    message.

    Too many array bounds given
    The bounds specified in an array subscript do not match the array
    declaration. For example, given the array declaration INTEGER
    IARRAY(3,4), the expression IARRAY(I,3,J) would produce this error
    message.

    Too many breakpoints
    An attempt was made to specify more than 20 breakpoints; CodeView
    permits only 20.

    Too many files
    Too few file handles were specified for CodeView to operate correctly.
    Specify more files in your CONFIG.SYS file.

    Type clash in function argument
    The type of an actual parameter does not match the corresponding
    formal parameter, or a subroutine that uses alternate returns was
    called and the values of the return labels in the actual parameter
    list are not 0.

    Type conversion too complex
    An attempt was made to typecast an element of an expression in a type
    other than the simple types or with more than one level of
    indirection. An example of a complex type would be typecasting to a
    struct or union type. An example of two levels of indirection is
    char **.

    Unable to open file
    A file specified in a command parameter or in response to a prompt
    cannot be opened.

    Unknown symbol
    An identifier that is not in CodeView's symbol table was specified, or
    a local variable was used in a parameter when not in the routine where
    the variable is defined, or a subroutine that uses alternate returns
    was called and the values of the return labels in the parameter list
    are not 0.

    Unrecognized option option
    Valid options: /B /C<command> /D /E /F /I /M /P /R /S /T /W /43 /2
    An invalid switch was entered when starting CodeView.

    Usage: cv [options] file [arguments]
    An executable file was not specified when starting CodeView.

    Video mode changed without /S option
    The program changed video modes (either to or from graphics modes)
    when screen swapping was not specified. Use the /S option to specify
    screen swapping when debugging graphics programs. Debugging can be
    continued after receiving this message, but the output screen of the
    debugged program may be damaged.

    Warning: packed file
    CodeView was started with a packed file as the executable file. The
    program cannot be debugged in source mode because all symbolic
    information is stripped from a file when it is packed with LINK's
    /EXEPACK option or the EXEPACK utility. Try to debug the program in
    assembly mode. (The packing routines at the start of the program might
    make this difficult.)

    Wrong number of function arguments
    An incorrect number of parameters was specified when evaluating a
    function in a CodeView expression.
```

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
