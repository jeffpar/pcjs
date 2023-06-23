---
layout: page
title: "MS MASM 6.0 Reference"
permalink: /documents/books/mspl13/masm/mref/
redirect_from: /pubs/pc/reference/microsoft/mspl13/masm/mref/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft(R) Macro Assembler Reference


for the MS-DOS(R) and OS/2 Operating Systems


Microsoft Corporation
Information in this document is subject to change without notice and does
not represent a commitment on the part of Microsoft Corporation.  The
software described in this document is furnished under a license agreement
or nondisclosure agreement.  The software may be used or copied only in
accordance with the terms of the agreement.  The purchaser may make one copy
for backup purposes.  No part of this manual may be reproduced or
transmitted in any form or by any means, electronic or mechanical, including
photocopying and recording, for any purpose other than the purchaser's
personal use without the written permission of Microsoft Corporation.


(C) Copyright Microsoft Corporation, 1987, 1988.  All rights reserved.
Simultaneously published in the U.S. and Canada.

Printed and bound in the United States of America.

Timings and encodings in this manual are used with permission of Intel and
come from the following publications:

Intel Corporation. iAPX 86, 88, 186 and 188 User's Manual, Programmer's
Reference. Santa Clara, Calif. 1986.
Intel Corporation. iAPX 286 Programmer's Reference Manual including the iAPX
286 Numeric Supplement, Santa Clara, Calif. 1985.

Intel Corporation. 80386 Programmer's Reference Manual. Santa Clara, Calif.
1986
Intel Corporation. 80387 80-bit CHMOS III Numeric Processor Extension. Santa
Clara, Calif. 1987.
Intel Corporation.  i486 Microprocessor, Santa Clara, Calif. 1989.

Document No. 410610002-500-R01-1287
10   9   8   7   6   5   4   3   2   1

Part No. 04696



Document Conventions


KEY TERMS
Bold type indicates text that must be typed exactly as shown. This includes
assembly-language instructions, directives, symbols, and operators, as well
as keywords in other languages.


placeholders
Italics indicate variable information supplied by the user.

Examples
This typeface indicates example programs, user input, and screen output.


[optional items]
Double brackets indicate that the enclosed item is optional.


{choice1 |  choice2}
Braces and a vertical bar indicate a choice between two or more items. You
must choose one of the items unless double square brackets surround the
braces.


Repeating elements...
Three dots following an item indicate that more items having the same form
may be typed.

SHIFT+F1
Small capital letters indicate key names.



Tools



BIND

The BIND utility converts an OS/2 program to run under both DOS and OS/2.

Command-Line Syntax
BIND infile [libraries] [options]


Options
╓┌───────────────────────────────────┌───────────────────────────────────────╖
Option                              Action
────────────────────────────────────────────────────────────────────────────
/HELP                               Option name: /HELP. Calls QuickHelp
                                    for help on BIND.

/MAP [ mapfile]                     Option name: /M[AP]. Generates a map
                                    of the DOS part of the executable file.

/NAMES  functions/NAMES  @filename  Option name: /N[AMES]. Specifies
                                    functions supported under OS/2 only.
                                    Use with a list of functions separated
                                    by spaces or a file specification
                                    preceded by  @.
Option                              Action
────────────────────────────────────────────────────────────────────────────
                                    preceded by  @.

/NOLOGO                             Option name: /NOLOGO. Suppresses the
                                    BIND copyright message.

/O  outfile                         Option name: /O[UTFILE]. Specifies the
                                    name for the bound application.

/?                                  Option name: /?. Displays a brief
                                    summary of BIND command-line syntax.







Environment Variables
╓┌───────────┌───────────────────────────────────────────────────────────────╖
Variable    Description
────────────────────────────────────────────────────────────────────────────
LIB         Specifies search path for library files.
LINK        Specifies default command-line options for the linker.
TMPf        Specifies path for the VM.TMP file.




Microsoft(R) CodeView(R) Debugger

The Microsoft(R) CodeView(R) debugger runs the assembled or compiled program
while simultaneously displaying the program source code, program variables,
memory locations, processor registers, and other pertinent information.

Command-Line Syntax
CV [options] executablefile [arguments]
CVP [options] executablefile [arguments]



Options
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            Action
────────────────────────────────────────────────────────────────────────────
/2                                Permits the use of two monitors.

/25                               Starts in 25-line mode.

/43                               Starts in 43-line mode.

/50                               Starts in 50-line mode.

/B                                Starts in black-and-white mode.

/C commands                       Executes  commands on start-up.

/D[ buffersize]                   Enables disk overlays (CV only).

/E                                Enables use of expanded memory (CV only).

/F                                Exchanges screens by flipping between
Option                            Action
────────────────────────────────────────────────────────────────────────────
/F                                Exchanges screens by flipping between
                                    video pages (CV only).

/G                                Eliminates refresh snow on CGA monitors
                                    (CV only).

/I[0 | 1]                         Turns nonmaskable-interrupt and
                                    8259-interrupt trapping on (/I1) or off
                                    (/I0) (CV only).

/K                                Disables installation of keyboard
                                    monitors for the program being debugged.

/L dll                            Loads symbolic information for the
                                    specified dynamic-link library (CVP
                                    only).

/M                                Disables CodeView use of the mouse (use
                                    this option when debugging an
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    this option when debugging an
                                    application that supports the mouse).

/N[0 | 1]                         /N0 tells CodeView to trap nonmaskable
                                    interrupts; /N1 tells it not to trap (CV
                                    only).

/O                                Enables debugging of multiple processes
                                    (CVP only).

/R                                Enables 80386/486 debug registers (CV
                                    only).

/S                                Exchanges screens by changing buffers
                                    (primarily for use with graphics
                                    programs) (CV only).

/TSF                              Toggles TOOLS.INI entry to read/not read
                                    the CURRENT.STS file.
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    the CURRENT.STS file.

/X                                Enables use of extended memory (CV only).







Environment Variables

variable     Description
────────────────────────────────────────────────────────────────────────────
HELPFILES    Specifies path of help files or list of help filenames.
INIT         Specifies path for TOOLS.INI and CURRENT.STS files.




CVPACK

The CVPACK utility reduces the size of an executable file that contains
CodeView debugging information.

Command-Line Syntax
CVPACK [options] exefile


Options

Option     Action
────────────────────────────────────────────────────────────────────────────
/HELP      Calls QuickHelp for help on CVPACK.
/P         Packs the file to the smallest possible size.
/?         Displays a brief summary of CVPACK command-line syntax.




EXEHDR

The EXEHDR utility displays and modifies the contents of an executable-file
header.

Command-Line Syntax
EXEHDR [options]  filenames


Options
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            action
────────────────────────────────────────────────────────────────────────────
/HEAP: number                     Option name: /HEA[P]. Sets the heap
                                    allocation field to  number bytes for
                                    segmented executable files.

/HELP                             Option name: /HEL[P]. Calls QuickHelp
                                    for help on EXEHDR.

/MAX: number                      Option name: /MA[X]. Sets the maximum
Option                            action
────────────────────────────────────────────────────────────────────────────
/MAX: number                      Option name: /MA[X]. Sets the maximum
                                    memory allocation to  number paragraphs
                                    for DOS executable files.



/MIN: number                      Option name: /MI[N]. Sets the minimum
                                    memory allocation to  number paragraphs
                                    for DOS executable files.

/NEW                              Option name: /NE[WFILES]. Enables
                                    support for HPFS.

/NOLOGO                           Option name: /NO[LOGO]. Suppresses the
                                    EXEHDR copyright message.

/PM: type                         Option name: /P[MTYPE]. Sets the
                                    application type for OS/2 or Microsoft
                                    Windows[tm], where  type is one of the
Option                            action
────────────────────────────────────────────────────────────────────────────
                                    Windows[tm], where  type is one of the
                                    following:  PM (or  WINDOWAPI),  VIO (or
                                    WINDOWCOMPAT), or  NOVIO (or
                                    NOTWINDOWCOMPAT).

/RESET                            Option name: /R[ESETERROR]. Clears the
                                    error bit in the header of an OS/2 or
                                    Windows executable file.

/STACK: number                    Option name: /S[TACK]. Sets the stack
                                    allocation to  number bytes.

/V                                Option name: /V[ERBOSE]. Provides more
                                    information about segmented executable
                                    files, including the default flags in
                                    the segment table, all run-time
                                    relocations, and additional fields from
                                    the header.

Option                            action
────────────────────────────────────────────────────────────────────────────

/?                                Option name: /?. Displays a brief
                                    summary of EXEHDR command-line syntax.






EXP

The EXP utility deletes all files in the hidden DELETED subdirectory of the
current or specified directory. EXP is used along with RM and UNDEL to
manage backup files.

Command-Line Syntax
EXP [options] [directories]


Options
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            Action
────────────────────────────────────────────────────────────────────────────
/HELP                             Calls QuickHelp for help on EXP.

/Q                                Suppresses display of deleted files.

/R                                Recurses into subdirectories of the
                                    current or specified directory.

/?                                Displays a brief summary of EXP
                                    command-line syntax.






HELPMAKE

The HELPMAKE utility creates help files and customizes the help files
supplied with Microsoft language products.

Command-Line Syntax
HELPMAKE {/E[n] | /D[c] | /H | /?} [options] sourcefiles


Options
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            Action
────────────────────────────────────────────────────────────────────────────
/A c                              Specifies  c as an application-specific
                                    control character for the help database,
                                    marking a line that contains special
                                    information for internal use by the
                                    application.

/C                                Indicates that the context strings are
                                    case sensitive so that at run time all
                                    searches for help topics will be case
                                    sensitive.
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    sensitive.

/D                                Fully decodes the help database.

/DS                               Splits the concatenated, compressed help
                                    database into its components, using
                                    their original names. No decompression
                                    occurs.

/DU                               Decompresses the database and removes
                                    all screen formatting and
                                    cross-references.

/E[ n]                            Creates ("encodes") a help database from
                                    a specified text file (or files). The
                                    optional  n indicates the amount of
                                    compression to take place. The value of
                                    n can range from 0 to 15.

Option                            Action
────────────────────────────────────────────────────────────────────────────

/H[ELP]                           Calls the QuickHelp utility. If HELPMAKE
                                    cannot find QuickHelp or the help file,
                                    it displays a brief summary of HELPMAKE
                                    command-line syntax.

/K filename                       Specifies a file containing
                                    word-separator characters. This file
                                    must contain a single line of characters
                                    that separate words. ASCII characters
                                    from 0 to 32 (including the space) and
                                    character 127 are always separators. If
                                    the /K option is not specified, the
                                    following characters are also considered
                                    separators:


/L                                Locks the generated file so that it
                                    cannot be decoded by HELPMAKE at a later
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    cannot be decoded by HELPMAKE at a later
                                    time.

/NOLOGO                           Suppresses the HELPMAKE copyright
                                    message.

/O outfile                        Specifies  outfile as the name of the
                                    help database. The name  outfile is
                                    optional with the /D option.



/S n                              Specifies the type of input file,
                                    according to the following  n values:

/T                                During encoding, translates dot commands
                                    to application-specific commands. During
                                    decoding, translates application
                                    commands to dot commands. The /T option
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    commands to dot commands. The /T option
                                    forces /A:.

/V[ n]                            Sets the verbosity of the diagnostic and
                                    informational output, depending on the
                                    value of  n. The value of  n can range
                                    from 0 to 6.

/W width                          Sets the fixed width of the resulting
                                    help text in number of characters. The
                                    value of  width can range from 11 to 255.

/?                                Displays a brief summary of HELPMAKE
                                    command-line syntax.





H2INC

The H2INC utility converts C header (.H) files into MASM- compatible include
(.INC) files. It translates declarations and prototypes, but does not
translate code.

Command-Line SyntaxH2INC [options]  filename.H


Options
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            Action
────────────────────────────────────────────────────────────────────────────
/C                                Passes comments in the .H file to the
                                    .INC file.

/Fa [ filename]                   Specifies that the output file contain
                                    only equivalent MASM statements. This is
                                    the default.

/Fc [ filename]                   Specifies that the output file contain
Option                            Action
────────────────────────────────────────────────────────────────────────────
/Fc [ filename]                   Specifies that the output file contain
                                    equivalent MASM statements plus original
                                    C statements converted to comment lines.

/HELP                             Calls QuickHelp for help on H2INC.

/Ht                               Enables generation of text equates. By
                                    default, text items are not translated.

/Mn                               Instructs H2INC to explicitly declare
                                    the distances for all pointers and
                                    functions.

/Ni                               Suppresses the expansion of nested
                                    include files.

/Zn  string                       Adds  string to all names generated by
                                    H2INC. Used to eliminate name conflicts
                                    with other H2INC-generated include files.
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    with other H2INC-generated include files.



/Zu                               Makes all structure and union tag names
                                    unique.

/?                                Displays a brief summary of H2INC
                                    command-line syntax.




Note: H2INC also supports the following options from Microsoft C, version
6.0: /AC, /AH, /AL, /AM, /AS, /AT, /D, /F, /Fi, /G0, /G1, /G2, /G3, /G4,
/Gc, /Gd, /Gr, /I, /J, /Tc, /U, /u, /W0, /W1, /W2, /W3, /W4, /X, /Za, /Zc,
/Ze, /Zp1, /Zp2, /Zp4.

Environment Variables
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Variable                          Description
────────────────────────────────────────────────────────────────────────────
CL                                Specifies default command-line options.

H2INC                             Specifies default command-line options.
                                    Appended after the CL environment
                                    variable.

INCLUDE                           Specifies search path for include files.






IMPLIB

The IMPLIB utility creates import libraries used by LINK to link
dynamic-link libraries with applications.

Command-Line Syntax
IMPLIB [options] implibname {dllfile... | deffile...}


Options
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            action
────────────────────────────────────────────────────────────────────────────
/HELP                             Option name: /H[ELP]. Calls QuickHelp
                                    for help on IMPLIB.

/NOI                              Option name: /NOI[GNORECASE]. Preserves
                                    case for entry names in DLLs.

/NOLOGO                           Option name: /NOL[OGO]. Suppresses the
                                    IMPLIB copyright message.

/?                                Option name: /?. Displays a brief
                                    summary of IMPLIB command-line syntax.





LIB

The LIB utility helps create, organize, and maintain run-time libraries.
Command-Line SyntaxLIB inlibrary [options] [commands] [, [listfile] [,
[outlibrary] ] ] [;]


Options
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            Action
────────────────────────────────────────────────────────────────────────────
/HELP

/IGN                              Option name: /I[GNORECASE]. Tells LIB to
                                    ignore case when comparing symbols (the
                                    default). Use to combine a library
                                    marked /NOI with an unmarked library to
                                    create a new case-insensitive library.
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    create a new case-insensitive library.

/NOE                              Option name: NOE[XTDICTIONARY]. Prevents
                                    LIB from creating an extended dictionary.

/NOI                              Option name: /NOI[GNORECASE]. Tells LIB
                                    to preserve case when comparing symbols.
                                    When combining libraries, if any library
                                    is marked /NOI, the output library is
                                    case sensitive, unless /IGN is specified.

/NOLOGO                           Option name: /NOL[OGO]. Suppresses the
                                    LIB copyright message.

/PAGE: number                     Option name: /P[AGESIZE]. Specifies the
                                    page size (in bytes) of a new library or
                                    changes the page size of an existing
                                    library. The default for a new library
                                    is 16.
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    is 16.

/?                                Option name: /?. Displays a brief
                                    summary of LIB command-line syntax.






Commands
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Operator                          Action
────────────────────────────────────────────────────────────────────────────
+ name                            Appends an object file or library file.

    - name                           Deletes a module.

    -+ name                          Replaces a module by deleting it and
Operator                          Action
────────────────────────────────────────────────────────────────────────────
    -+ name                          Replaces a module by deleting it and
                                    appending an object file with the same
                                    name.

    * name                           Copies a module to a new object file.

    -* name                          Moves a module out of the library by
                                    copying it to a new object file and then
                                    deleting it.






LINK

The LINK utility combines object files into a single executable file or
dynamic-link library.

Command-Line Syntax
LINK objfiles [, [exefile] [, [mapfile] [, [libraries] [, [deffile] ] ] ] ]
[;]


Options
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            Action
────────────────────────────────────────────────────────────────────────────
/ALIGN: size                      Option name: /A[LIGNMENT]. Directs LINK
                                    to align segment data in a segmented
                                    executable file along the boundaries
                                    specified by  size bytes, where  size
                                    must be a power of two.

/BATCH                            Option name: /B[ATCH]. Suppresses
                                    prompts for library or object files not
                                    found.

/CO                               Option name: /CO[DEVIEW]. Adds symbolic
Option                            Action
────────────────────────────────────────────────────────────────────────────
/CO                               Option name: /CO[DEVIEW]. Adds symbolic
                                    data and line numbers needed by the
                                    Microsoft CodeView debugger. This option
                                    is incompatible with the /EXEPACK option.

/CPARM: number                    Option name: /CP[ARMAXALLOC]. Sets the
                                    program's maximum memory allocation to
                                    number of 16-byte paragraphs.

/DOSSEG                           Option name: /DO[SSEG]. Orders segments
                                    in the default order used by Microsoft
                                    high-level languages.

/DSALLOC                          Option name: /DS[ALLOCATE]. Directs LINK
                                    to load all data starting at the high
                                    end of the data segment. The /DSALLOC
                                    option is for assembly-language programs
                                    that create DOS .EXE files.

Option                            Action
────────────────────────────────────────────────────────────────────────────

/EXEPACK                          Option name: /E[XEPACK]. Packs the
                                    executable file. The /EXEPACK option is
                                    incompatible with either /INCR or /CO.
                                    Do not use /EXEPACK on a Windows program.

/FARCALL                          Option name: /F[ARCALLTRANSLATION].
                                    Optimizes far calls. The /FARCALL option
                                    is on automatically when using /TINY.
                                    Use the /PACKC option with /FARCALL when
                                    linking for OS/2; /PACKC is not
                                    recommended with /FARCALL when linking
                                    for Windows.

/HELP                             Option name: /HE[LP]. Calls QuickHelp
                                    for help on LINK.

/HIGH                             Option name: /HI[GH]. Places the
                                    executable file as high in memory as
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    executable file as high in memory as
                                    possible. Use /HIGH with the /DSALLOC
                                    option. This option is for
                                    assembly-language programs that create
                                    DOS .EXE files.

/INCR                             Option name: /INC[REMENTAL]. Prepares
                                    for incremental linking with ILINK. This
                                    option is incompatible with /EXEPACK and
                                    /TINY.

/INFO                             Option name: /INF[ORMATION]. Displays to
                                    the standard output the phase of linking
                                    and names of object files being linked.

/LINE                             Option name: /LI[NENUMBERS]. Adds
                                    source-file line numbers and associated
                                    addresses to the map file. The object
                                    file must be created with line numbers.
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    file must be created with line numbers.
                                    This option creates a map file even if
                                    mapfile is not specified.

/MAP                              Option name: /M[AP]. Adds public symbols
                                    to the map file.

/NOD[: libraryname]               Option name: /NOD[EFAULTLIBRARYSEARCH].
                                    Ignores the specified default library.
                                    Specify without  libraryname to ignore
                                    all default libraries.

/NOE                              Option name: /NOE[XTDICTIONARY].
                                    Prevents LINK from searching extended
                                    dictionaries in libraries. Use /NOE when
                                    redefinition of a symbol causes error
                                    L2044.

/NOFARCALL                        Option name: /NOF[ARCALLTRANSLATION].
Option                            Action
────────────────────────────────────────────────────────────────────────────
/NOFARCALL                        Option name: /NOF[ARCALLTRANSLATION].
                                    Turns off far-call optimization.

/NOI                              Option name: /NOI[GNORECASE]. Preserves
                                    case in identifiers.

/NOLOGO                           Option name: /NOL[OGO]. Suppresses the
                                    LINK copyright message

/NONULLS                          Option name: /NON[ULLSDOSSEG]. Orders
                                    segments as with the /DOSSEG option, but
                                    with no additional bytes at the
                                    beginning of the _TEXT segment (if
                                    defined). This option overrides /DOSSEG.

/NOPACKC                          Option name: /NOP[ACKCODE]. Turns off
                                    code segment packing.

/PACKC[: number]                  Option name: /PACKC[ODE]. Packs
Option                            Action
────────────────────────────────────────────────────────────────────────────
/PACKC[: number]                  Option name: /PACKC[ODE]. Packs
                                    neighboring code segments together.
                                    Specify  number bytes to set the maximum
                                    size for physical segments formed by
                                    /PACKC.

/PACKD[: number]                  Option name: /PACKD[ATA]. Packs
                                    neighboring data segments together.
                                    Specify  number bytes to set the maximum
                                    size for physical segments formed by
                                    /PACKD. This option is for OS/2 and
                                    Windows only.

/PAUSE                            Option name: /PAU[SE]. Pauses during the
                                    link session for disk changes.

/PM: type                         Option name: /PM[TYPE]. Specifies the
                                    type of Windows or OS/2 application
                                    where  type is one of the following:  PM
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    where  type is one of the following:  PM
                                    (or  WINDOWAPI),  VIO (or  WINDOWCOMPAT),
                                    or  NOVIO (or  NOTWINDOWCOMPAT).

/STACK: number                    Option name: /ST[ACK]. Sets the stack
                                    size to  number bytes, from 1 byte to
                                    64K.

/TINY                             Option name: /T[INY]. Creates a
                                    tiny-model DOS program with a .COM
                                    extension instead of .EXE. Incompatible
                                    with /INCR.

/?                                Option name: /?. Displays a brief
                                    summary of LINK command-line syntax.



Note: Several rarely used options not listed above are described in online
help.

Environment Variables
╓┌────────────────┌──────────────────────────────────────────────────────────╖
Variable         Description
────────────────────────────────────────────────────────────────────────────
INIT             Specifies path for the TOOLS.INI file.
LIB              Specifies search path for library files.
LINK             Specifies default command-line options.
TMP              Specifies path for the VM.TMP file.




MASM

The MASM program converts command-line options from MASM style to ML style,
adds options to maximize compatibility, and calls ML.EXE.

Command-Line Syntax
MASM [options] sourcefile [, [objectfile] [, [listingfile]
[, [crossreferencefile] ] ] ] [;]


Options
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            Action
────────────────────────────────────────────────────────────────────────────
/A                                Orders segments alphabetically. Results
                                    in a warning. Ignored.

/B                                Sets internal buffer size. Ignored.

/C                                Creates a cross-reference file.
                                    Translated to /FR.

/D                                Creates a Pass 1 listing. Ignored.

/D symbol[ = value]               Defines a symbol. Unchanged.

/E                                Emulates floating-point instructions.
                                    Translated to /FPi.
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    Translated to /FPi.

/H                                Lists command-line arguments. Translated
                                    to /help.

/HELP                             Calls QuickHelp for help on the MASM
                                    driver.

/I  pathname                      Specifies an include path. Unchanged.

/L                                Creates a normal listing. Translated to
                                    /Fl.

/LA                               Lists all. Translated to /Fl and /Sa.

/ML                               Treats names as case sensitive.
                                    Translated to /Cp.

/MU                               Converts names to uppercase. Translated
Option                            Action
────────────────────────────────────────────────────────────────────────────
/MU                               Converts names to uppercase. Translated
                                    to /Cu.

/MX                               Preserves case on nonlocal names.
                                    Translated to /Cx.

/N                                Suppresses table in listing file.
                                    Translated to /Sn.

/P                                Checks for impure code. Use  OPTION
                                    READONLY. Ignored.

/S                                Orders segments sequentially. Results in
                                    a warning. Ignored.

/T                                Enables terse assembly. Translated to
                                    /nologo.

/V                                Enables verbose assembly. Ignored.
Option                            Action
────────────────────────────────────────────────────────────────────────────
/V                                Enables verbose assembly. Ignored.

/W0                               Enables warning level 0. Unchanged.

/W1                               Enables warning level 1. Unchanged.

/W2                               Enables warning level 2. Unchanged.

/X                                Lists false conditionals. Translated to
                                    /Sx.

/Z                                Displays error lines on screen. Ignored.

/ZD                               Generates line numbers for CodeView.
                                    Translated to /Zd.

/ZI                               Generates symbols for CodeView.
                                    Translated to /Zi.

Option                            Action
────────────────────────────────────────────────────────────────────────────






Environment Variables
╓┌────────────────┌──────────────────────────────────────────────────────────╖
Variable         Description
────────────────────────────────────────────────────────────────────────────
INCLUDE          Specifies default path for .INC files.
MASM             Specifies default command-line options.
TMP              Specifies path for temporary files.





ML

The ML program assembles and links one or more assembly-language source
files. The command-line options are case sensitive.

Command-Line Syntax
ML [options]  filename [ [options]  filename]... [/link linkoptions]


Options
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            Action
────────────────────────────────────────────────────────────────────────────
/AT                               Enables tiny-memory-model support.
                                    Enables error messages for code
                                    constructs that violate the requirements
                                    for .COM format files. Note that this is
                                    not equivalent to the  .MODEL  TINY
                                    directive.

/Bl  filename                     Selects an alternate linker.

Option                            Action
────────────────────────────────────────────────────────────────────────────

/c

/Cp                               Preserves case of all user identifiers.

/Cu                               Maps all identifiers to uppercase
                                    (default).

/Cx                               Preserves case in public and extern
                                    symbols.

/D symbol[ = value]               Defines a text macro with the given name.
                                    If  value is missing, it is blank.
                                    Multiple tokens separated by spaces must
                                    be enclosed in quotation marks.

/EP                               Generates a preprocessed source listing
                                    (sent to STDOUT). See /Sf.

Option                            Action
────────────────────────────────────────────────────────────────────────────



/F  hexnum                        Sets stack size to  hexnum bytes (this
                                    is the same as /link /STACK: number).
                                    The value must be expressed in
                                    hexadecimal notation. There must be a
                                    space between /F and  hexnum.

/Fb [ filename]                   Creates a bound executable file.

/Fe  filename                     Names the executable file.

/Fl [ filename]                   Generates an assembled code listing. See
                                    /Sf.

/Fm [ filename]                   Creates a linker map file.

/Fo  filename                     Names an object file.
Option                            Action
────────────────────────────────────────────────────────────────────────────
/Fo  filename                     Names an object file.

/FPi                              Generates emulator fixups for
                                    floating-point arithmetic
                                    (mixed-language only).

/Fr [ filename]                   Generates a source browser .SBR file.

/FR [ filename]                   Generates an extended form of a source
                                    browser .SBR file.

/Gc                               Specifies use of FORTRAN- or
                                    Pascal-style function calling and naming
                                    conventions. Same as  OPTION
                                    LANGUAGE:PASCAL.

/Gd                               Specifies use of C-style function
                                    calling and naming conventions. Same as
                                    OPTION  LANGUAGE:C.
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    OPTION  LANGUAGE:C.

/H  number                        Restricts external names to  number
                                    significant characters. The default is
                                    31 characters.

/help                             Calls QuickHelp for help on ML.

/I  pathname                      Sets path for include file. A maximum of
                                    10 /I options is allowed.

/nologo                           Suppresses messages for successful
                                    assembly.

/Sa                               Turns on listing of all available
                                    information.

/Sf                               Adds first-pass listing to listing file.

Option                            Action
────────────────────────────────────────────────────────────────────────────

/Sg                               Turns on listing of assembly-generated
                                    code.

/Sl  width                        Sets the line width of source listing in
                                    characters per line. Range is 60 to 255
                                    or 0. Default is 0. Same as  PAGE  ,
                                    width.

/Sn                               Turns off symbol table when producing a
                                    listing.

/Sp  length                       Sets the page length of source listing
                                    in lines per page. Range is 10 to 255 or
                                    0. Default is 0. Same as  PAGE  length.

/Ss  text                         Specifies  text for source listing. Same
                                    as  SUBTITLE  text.

Option                            Action
────────────────────────────────────────────────────────────────────────────

/St  text                         Specifies title for source listing. Same
                                    as  TITLE  text.

/Sx                               Turns on false conditionals in listing.

/Ta  filename                     Assembles source file whose name does
                                    not end with the .ASM extension.

/w                                Same as /W0.

/W level                          Sets the warning level: level 0, 1, 2,
                                    or 3.



/WX                               Returns an error code if warnings are
                                    generated.

Option                            Action
────────────────────────────────────────────────────────────────────────────

/Zd                               Generates line-number information in
                                    object file.

/Zf                               Makes all symbols public.

/Zi                               Generates CodeView information in object
                                    file.

/Zm                               Enables  M510 option for maximum
                                    compatibility with MASM 5.1.

/Zp [ alignment]                  Packs structures on the specified byte
                                    boundary. The  alignment may be 1, 2, or
                                    4.

/Zs                               Performs a syntax check only.

/?                                Displays a brief summary of ML
Option                            Action
────────────────────────────────────────────────────────────────────────────
/?                                Displays a brief summary of ML
                                    command-line syntax.







QuickAssembler Support

For compatibility with QuickAssembler makefiles, ML recognizes the following
options:
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            Action
────────────────────────────────────────────────────────────────────────────
/a                                Orders segments alphabetically. In MASM
                                    6.0, the  .ALPHA directive must be used.
                                    Ignored.
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    Ignored.

/Cl                               Equivalent to /Cp.

/Ez                               Prints the source for error lines to the
                                    screen. This option is no longer
                                    supported and is ignored by MASM 6.0.

/P1                               Performs one-pass assembly. MASM 6.0
                                    always performs a single pass through
                                    the source file. This option is ignored
                                    by MASM 6.0.

/P2                               Performs two-pass assembly. MASM 6.0
                                    always performs a single pass through
                                    the source file. This option is ignored
                                    by MASM 6.0.

/s                                Orders segments sequentially. In MASM
Option                            Action
────────────────────────────────────────────────────────────────────────────
/s                                Orders segments sequentially. In MASM
                                    6.0, the  .SEQ directive must be used.
                                    Ignored.

/Sq                               Equivalent to /Sl0 /Sp0.






Environment Variables
╓┌────────────────┌──────────────────────────────────────────────────────────╖
Variable         Description
────────────────────────────────────────────────────────────────────────────
INCLUDE          Specifies search path for include files.
ML               Specifies default command-line options.
TMP              Specifies path for temporary files.



NMAKE

The NMAKE utility automates the process of compiling and linking project
files.

Command-Line Syntax
NMAKE [options] [macros] [targets]


Options
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            Action
────────────────────────────────────────────────────────────────────────────
/A                                Executes all commands even if targets
                                    are not out-of-date.

/C                                Suppresses the NMAKE copyright message
                                    and prevents nonfatal error or warning
                                    messages from being displayed.
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    messages from being displayed.

/D                                Displays the modification time of each
                                    file when the times of targets and
                                    dependents are checked.

/E                                Causes environment variables to override
                                    macro definitions within description
                                    files.

/F  filename                      Specifies  filename as the name of the
                                    description file to use. If a dash (-)
                                    is entered instead of a filename, NMAKE
                                    reads the description file from the
                                    standard input device.If /F is not
                                    specified, NMAKE uses MAKEFILE as the
                                    description file. If MAKEFILE does not
                                    exist, NMAKE builds command-line targets
                                    using inference rules.
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    using inference rules.

/HELP                             Calls QuickHelp for help on NMAKE.

/I                                Ignores exit codes from commands in the
                                    description file. NMAKE continues
                                    executing the rest of the description
                                    file despite the errors.

/N                                Displays but does not execute commands
                                    from the description file.

/NOLOGO                           Suppresses the NMAKE copyright message.

/P                                Displays all macro definitions,
                                    inference rules, target descriptions,
                                    and the . SUFFIXES list.

/Q                                Checks modification times of
Option                            Action
────────────────────────────────────────────────────────────────────────────
/Q                                Checks modification times of
                                    command-line targets (or first target in
                                    the description file if no command-line
                                    targets are specified). NMAKE returns a
                                    zero exit code if all such targets are
                                    up-to-date and a nonzero exit code if
                                    any target is out-of-date. Only
                                    preprocessing commands in the
                                    description file are executed.

/R                                Ignores inference rules and macros that
                                    are defined in the TOOLS.INI file or are
                                    predefined.

/S                                Suppresses display of commands as they
                                    are executed.

/T                                Changes modification times of
                                    command-line targets (or first target in
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    command-line targets (or first target in
                                    the description file if no command-line
                                    targets are specified) to the current
                                    time. Only preprocessing commands in the
                                    description file are executed. The
                                    contents of target files are not
                                    modified.

/X  filename                      Sends all error output to  filename,
                                    which can be either a file or a device.
                                    If a dash (-) is entered instead of a
                                    filename, the error output is sent to
                                    the standard output device.

/Z                                Internal option for use by the Microsoft
                                    Programmer's WorkBench (PWB).

/?                                Displays a brief summary of NMAKE
                                    command-line syntax.
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    command-line syntax.






Environment Variable
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Variable                          Description
────────────────────────────────────────────────────────────────────────────
INIT                              Specifies path for TOOLS.INI file, which
                                    may contain macros, inference rules, and
                                    description blocks.





PWB (Programmer's WorkBench)

The Microsoft Programmer's WorkBench (PWB) provides an integrated
environment for developing programs in assembly language. The command-line
options are case sensitive.

Command-Line Syntax
PWB [options] [files]


Options
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            Action
────────────────────────────────────────────────────────────────────────────
/D[ init]                         Prevents PWB from examining
                                    initialization files, where  init is one
                                    or more of the following characters:

                                    A    Disable autoload extensions
                                    (including language-specific extensions
                                    and online help)
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    and online help)

                                    S    Ignore CURRENT.STS

                                    T    Ignore TOOLS.INI

                                    If the /D option does not include an
                                    init character, it is equivalent to
                                    specifying /DAST (all files


/e  cmdstr                        Executes the command or sequence of
                                    commands at start-up. The entire  cmdstr
                                    argument must be placed in double
                                    quotation marks if it contains a space.
                                    If  cmdstr contains literal double
                                    quotation marks, place a backslash (\)
                                    in front of each double quotation mark.
                                    To include a literal backslash in the
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    To include a literal backslash in the
                                    command string, use double backslashes
                                    (\\).

/m  mark                          Moves the cursor to the specified  mark
                                    instead of moving it to the last known
                                    position. The mark can be a line number.

/P[ init]                         Specifies a program list for PWB to read,
                                    where  init can be

                                    F file    Read a foreign program list
                                    (one not created using PWB).

                                    L         Read the last program list.
                                    Use this option to start PWB in the same
                                    state you left it.

                                    P file    Read a PWB program list.
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    P file    Read a PWB program list.

/r                                Starts PWB in no-edit mode. Functions
                                    that modify files are disallowed.

[ [/t]  file...]                  Loads the specified file at start-up.
                                    The  file specification can contain
                                    wildcards. If multiple  files are
                                    specified, PWB loads only the first file.
                                    When the  Exit function is invoked, PWB
                                    saves the current file and loads the
                                    next file in the list. Files specified
                                    with /t are temporary; PWB does not add
                                    them to the file history on the File
                                    menu.

                                    No other options can follow /t on the
                                    command line. Each temporary file must
                                    be specified in a separate /t option.
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    be specified in a separate /t option.

/?                                Displays a brief summary of PWB
                                    command-line syntax.





Environment Variables
╓┌────────────┌──────────────────────────────────────────────────────────────╖
Variable     Description
────────────────────────────────────────────────────────────────────────────
HELPFILES    Specifies path of help files or list of help filenames.
INIT         Specifies path for TOOLS.INI and CURRENT.STS files.
TMP          Specifies path for temporary files.




PWBRMAKE

PWBRMAKE converts the .SBR files created by the assembler into database .BSC
files that can be read by the Microsoft Programmer's WorkBench (PWB) Source
Browser. The command-line options are case sensitive.

Command-Line Syntax
PWBRMAKE [options] sbrfiles


Options
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            Action
────────────────────────────────────────────────────────────────────────────
/Ei  filename/Ei ( filename...)   Excludes the contents of the specified
                                    include files from the database. To
                                    specify multiple filenames, separate
                                    them with spaces and enclose the list in
                                    parentheses.

Option                            Action
────────────────────────────────────────────────────────────────────────────

/Em                               Excludes symbols in the body of macros.
                                    Use /Em to include only macro names.

/Es                               Excludes from the database every include
                                    file specified with an absolute pathname
                                    or found in an absolute path specified
                                    in the INCLUDE environment variable.



/HELP                             Calls QuickHelp for help on PWBRMAKE.

/Iu                               Includes unreferenced symbols.

/n                                Forces a nonincremental build and
                                    prevents truncation of .SBR files.

/o  filename                      Specifies a name for the database file.
Option                            Action
────────────────────────────────────────────────────────────────────────────
/o  filename                      Specifies a name for the database file.

/v                                Displays verbose output.

/?                                Displays a brief summary of PWBRMAKE
                                    command-line syntax.





QuickHelp

The QuickHelp utility displays online help files. All MASM reserved words
and error messages can be used for topic.

Command-Line Syntax
QH [options] [topic]


Options
╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Option                            Action
────────────────────────────────────────────────────────────────────────────
/d  filename                      Specifies either a specific database
                                    name or a path where the databases are
                                    found.

/l number                         Specifies the number of lines the
                                    QuickHelp window should occupy.

/m number                         Changes the screen mode to display the
                                    specified number of lines, where  number
                                    is in the range 25 to 60.

/p  filename                      Sets the name of the paste file.

/pa [ filename]                   Specifies that pasting operations are
                                    appended to the current paste file
                                    (rather than overwriting the file).
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    (rather than overwriting the file).

/q                                Prevents the version box from being
                                    displayed when QuickHelp is installed as
                                    a keyboard monitor.

/r  command                       Specifies the command that QuickHelp
                                    should execute when the right mouse
                                    button is pressed. The  command can be
                                    one of the following letters:

                                    l    Display last topic

                                    i    Display history of help topics

                                    w    Hide window

                                    b    Display previous topic

Option                            Action
────────────────────────────────────────────────────────────────────────────

                                    e    Find next topic

                                    t    Display contents

/s                                Specifies that clicking the mouse above
                                    or below the scroll box causes QuickHelp
                                    to scroll by lines rather than by pages.

/sg number                        Specifies the number of screen groups
                                    that QuickHelp should monitor, where
                                    number is in the range 1 to 12. This
                                    option is valid only when QuickHelp is
                                    detached from an OS/2 protected-mode
                                    screen group.

/t  name                          Directs QuickHelp to copy the specified
                                    section of the given topic to the
                                    current paste file and exit. The  name
Option                            Action
────────────────────────────────────────────────────────────────────────────
                                    current paste file and exit. The  name
                                    may be

                                    All      Paste the entire topic

                                    Syntax   Paste the syntax only

                                    Example  Paste the example only

                                    If the topic is not found, QuickHelp
                                    returns an exit code of 1.

/u                                Specifies that QuickHelp is being run by
                                    a utility. If the topic specified on the
                                    command line is not found, QuickHelp
                                    immediately exits with an exit code of 3.






Environment Variables
╓┌────────────┌──────────────────────────────────────────────────────────────╖
Variable     Description
────────────────────────────────────────────────────────────────────────────
HELPFILES    Specifies path of help files or list of help filenames.
QH           Specifies default command-line options.
TMP          Specifies directory of default paste file.




RM

The RM utility moves a file to a hidden DELETED subdirectory of the
directory containing the file. Use the UNDEL utility to recover the file and
the EXP utility to expunge the hidden file.

Command-Line Syntax
RM [options] [files]


Options
╓┌──────────────┌────────────────────────────────────────────────────────────╖
Option         Action
────────────────────────────────────────────────────────────────────────────
/F             Deletes read-only files without prompting.
/HELP          Calls QuickHelp for help on RM.
/I             Inquires for permission before removing each file.
/K             Keeps read-only files without prompting.
/R  directory  Recurses into subdirectories of the specified directory.
/?             Displays a brief summary of RM command-line syntax.




UNDEL

The UNDEL utility moves a file from a hidden DELETED subdirectory to the
parent directory. UNDEL is used along with EXP and RM to manage backup
files.

Command-Line Syntax
UNDEL [{option | files}]


Options
╓┌──────────┌────────────────────────────────────────────────────────────────╖
Option     Action
────────────────────────────────────────────────────────────────────────────
/HELP      Calls QuickHelp for help on UNDEL.
/?         Displays a brief summary of UNDEL command-line syntax.





Cross-References



Topical Cross-Reference for Directives


Simplified Segment
.MODEL
.STARTUP
.EXIT
.CODE
.STACK
.DATA
.DATA?
.FARDATA
.FARDATA?
.CONST
.DOSSEG


Segment
SEGMENT
ENDS
GROUP
ASSUME
END
.ALPHA
.DOSSEG
.SEQ


Conditional Assembly
IF
IFE
IFB/IFNB
IFDEF/IFNDEF
IFDIF/IFDIFI
IFIDN/IFIDNI
ELSE
ENDIF


Macros
MACRO
LOCAL
PURGE
GOTO
ENDM
EXITM


Data Allocation
BYTE/SBYTE
WORD/SWORD
DWORD/SDWORD
FWORD
QWORD
TBYTE
LABEL
ALIGN
EVEN
ORG
REAL4
REAL8
REAL10


Code Labels
LABEL
ALIGN
EVEN
ORG


Scope
PUBLIC
EXTERNDEF
EXTERN
COMM
INCLUDELIB


Structure and Record
RECORD
STRUCT
UNION
ENDS
TYPEDEF


String
CATSTR
SIZESTR
SUBSTR
INSTR


Equates
EQU
=
TEXTEQU


Repeat Blocks
REPEAT
WHILE
FOR
FORC
ENDM
GOTO


Conditional Control Flow
.IF
.ELSE
.ELSEIF
.ENDIF
.WHILE
.ENDW
.REPEAT
.UNTIL/
.UNTILCXZ
.BREAK
.CONTINUE


Listing Control
TITLE
SUBTITLE
PAGE
.LIST
.NOLIST
.LISTIF
.NOLISTIF
.TFCOND
.LISTMACROALL
.NOLISTMACRO
.LISTMACRO
.CREF
.NOCREF
.LISTALL


Conditional Error
.ERR
.ERRE
.ERRNZ
.ERRB
.ERRNB
.ERRDEF
.ERRNDEF
.ERRDIF/.ERRDIFI
.ERRIDN/.ERRIDNI


Processor
.8086    .486
.186    .486P
.286    .8087
.286P    .287
.386    .387
.386P    .NO87


Procedures
PROC
ENDP
PROTO
INVOKE
USES


Miscellaneous
OPTION
COMMENT
ECHO
.RADIX
END
PUSHCONTEXT
POPCONTEXT
INCLUDE
INCLUDELIB
ASSUME




Topical Cross-Reference for Symbols


Segment Information
@code
@CodeSize
@CurSeg
@data
@DataSize
@fardata
@fardata?
@Model
@stack
@WordSize


Macro Functions
@CatStr
@InStr
@SizeStr
@SubStr


Environment Information
@Cpu
@Environ
@Interface
@Version


Date and Time Information
@Date
@Time


File Information
@FileCur
@FileName
@Line


Miscellaneous
$
?
@@:
@B
@F


Topical Cross-Reference for Operators


Arithmetic
+    MOD
-    .
*    []
/


Macro
<>    %
!    &
;;


Relational
EQ    GE
NE    LT
GT    LE


Logical
and ShiftAND
OR
XOR
NOT
SHL
SHR


Record
MASK
WIDTH


Segment
:
SEG
OFFSET
LROFFSET


Type
HIGH
HIGHWORD
LOW
LOWWORD
PTR
SHORT
SIZE
SIZEOF
LENGTH
LENGTHOF
THIS
TYPE
OPATTR


Control Flow
!    = =
!=    >=
&&    <=
||    >
&    <


Miscellaneous
;    :
DUP    ::
"  "    ' '
CARRY?
OVERFLOW?
PARITY?
SIGN?
ZERO?



Directives

    name =  expression
Assigns the numeric value of  expression to  name. The symbol may be
redefined later.


.186
Enables assembly of instructions for the 80186 processor; disables assembly
of instructions introduced with later processors. Also enables 8087
instructions.


.286
Enables assembly of nonprivileged instructions for the 80286 processor;
disables assembly of instructions introduced with later processors. Also
enables 80287 instructions.


.286P
Enables assembly of all instructions (including privileged) for the 80286
processor; disables assembly of instructions introduced with later
processors. Also enables 80287 instructions.


.287
Enables assembly of instructions for the 80287 coprocessor; disables
assembly of instructions introduced with later coprocessors.

.386
Enables assembly of nonprivileged instructions for the 80386 processor;
disables assembly of instructions introduced with later processors. Also
enables 80387 instructions.

.386P
Enables assembly of all instructions (including privileged) for the 80386
processor; disables assembly of instructions introduced with later
processors. Also enables 80387 instructions.

.387
Enables assembly of instructions for the 80387 coprocessor.

.486
Enables assembly of nonprivileged instructions for the 80486 processor.

.486P
Enables assembly of all instructions (including privileged) for the 80486
processor.

.8086
Enables assembly of 8086 instructions (and the identical 8088 instructions);
disables assembly of instructions introduced with later processors. Also
enables 8087 instructions. This is the default mode for processors.

.8087
Enables assembly of 8087 instructions; disables assembly of instructions
introduced with later coprocessors. This is the default mode for
coprocessors.

ALIGN [ number]
Aligns the next variable or instruction on a byte that is a multiple of
number.

.ALPHA
Orders segments alphabetically.

ASSUME  segregister : name [ ,  segregister : name]...
    ASSUME  dataregister : type [ ,  dataregister : type]...


ASSUME  register :ERROR [ ,  register :ERROR]...


ASSUME [ register :]  NOTHING [ ,  register :NOTHING]...
Enables error-checking for register values. After an  ASSUME is put into
effect, the assembler watches for changes to the values of the given
registers.  ERROR generates an error if the register is used at all. NOTHING
assumptions in one statement.

.BREAK [ .IF  condition]
Generates code to terminate a  .WHILE or  .REPEAT block if  condition is
true.

[ name]  BYTE  initializer [ ,  initializer]...
Allocates and optionally initializes a byte of storage for each
initializer. Can also be used as a type specifier anywhere a type is legal.

    name  CATSTR [ textitem1  [ ,  textitem2]...]
Concatenates text items. Each text item can be a literal string, a constant
preceded by a  %, or the string returned by a macro function.

.CODE [ name]
When used with  .MODEL, indicates the start of a code segment called  name
(the default segment name is _TEXT for tiny, small, compact, and flat
models, or  module_TEXT for other models).

COMM  definition [ ,  definition]...
Creates a communal variable with the attributes specified in  definition.
Each  definition has the following form:

[ langtype]  [ NEAR |  FAR]  label : type[ : count]

The  label is the name of the variable. The  type can be any type specifier
( BYTE,  WORD, etc.) or an integer specifying the number of bytes. The
count specifies the number of data objects (one is the default).

COMMENT  delimiter [ text]
        [ text]
[ text]  delimiter [ text]
Treats all  text between or on the same line as the delimiters as a comment.

.CONST
When used with  .MODEL, starts a constant data segment (with segment name
CONST). This segment has the read-only attribute.

.CONTINUE [ .IF  condition]

Generates code to jump to the top of a  .WHILE or  .REPEAT block if
condition is true.

.CREF
Enables listing of symbols in the symbol portion of the symbol table and
browser file.

.DATA
When used with  .MODEL, starts a near data segment for initialized data
(segment name _DATA).

.DATA?
When used with  .MODEL, starts a near data segment for uninitialized data
(segment name _BSS).

.DOSSEG
Orders the segments according to the DOS segment convention: CODE first,
then segments not in DGROUP, and then segments in DGROUP. The segments in
DGROUP follow this order: segments not in BSS or STACK, then BSS segments,
and finally STACK segments. Primarily used for ensuring CodeView support in
MASM stand-alone programs. Same as  DOSSEG.

DOSSEG
Identical to . DOSSEG, which is the preferred form.

DB
Can be used to define data like  BYTE.

DD
Can be used to define data like  DWORD.

DF
Can be used to define data like  FWORD.

DQ
Can be used to define data like  QWORD.

DT
Can be used to define data like  TBYTE.

DW
Can be used to define data like  WORD.

[ name]  DWORD  initializer [ ,  initializer]...
Allocates and optionally initializes a doubleword (4 bytes) of storage for
each  initializer. Can also be used as a type specifier anywhere a type is
legal.

ECHO  message
Displays  message to the standard output device (by default, the screen).
Same as  %OUT.

.ELSE
See  .IF.

ELSE
Marks the beginning of an alternate block within a conditional block. See IF.

END [ address]
Marks the end of a module and, optionally, sets the program entry point to
address.

.ENDIF
See  .IF.

ENDIF
See  IF.

ENDM
Terminates a macro or repeat block. See  MACRO,  FOR,  FORC,  REPEAT, or WHIL
    name  ENDP
Marks the end of procedure  name previously begun with  PROC. See  PROC.

    name  ENDS
Marks the end of segment, structure, or union  name previously begun with SEG

.ENDW
See  .WHILE.

    name  EQU  expression
Assigns numeric value of  expression to  name. The  name cannot be redefined
later.

    name  EQU  < text >
Assigns specified  text to  name. The  name can be assigned a different text

.ERR [ message]
Generates an error.

.ERRB  < textitem > [ ,  message]
Generates an error if  textitem is blank.

.ERRDEF  name [ ,  message]
Generates an error if  name is a previously defined label, variable, or
symbol.

.ERRDIF[ I]  < textitem1 >, < textitem2 > [ ,  message]
Generates an error if the text items are different. If  I is given, the
comparison is case insensitive.

.ERRE  expression [ ,  message]
Generates an error if  expression is false (0).

.ERRIDN[ I]  < textitem1 >, < textitem2 > [ ,  message]
Generates an error if the text items are identical. If  I is given, the
comparison is case insensitive.

.ERRNB  < textitem > [ ,  message]
Generates an error if  textitem is not blank.

.ERRNDEF  name [ ,  message]
Generates an error if  name has not been defined.

.ERRNZ  expression [ ,  message]
Generates an error if  expression is true (nonzero).

EVEN
Aligns the next variable or instruction on an even byte.

.EXIT [ expression]
Generates termination code. Returns optional  expression to shell.

EXITM [ expression]
Terminates expansion of the current repeat or macro block and begins
assembly of the next statement outside the block. In a macro function,
expression is the value returned.

EXTERN [ langtype]  name [ ( altid )]  : type
[ , [ langtype]  name [ ( altid )]  : type]...
Defines one or more external variables, labels, or symbols called  name
whose type is  type. The  type can be  ABS, which imports  name as a
constant. Same as  EXTRN.

EXTERNDEF [ langtype]  name : type [ , [ langtype]  name : type]...
Defines one or more external variables, labels, or symbols called  name
whose type is  type. If  name is defined in the module, it is treated as

PUBLIC. If  name is referenced in the module, it is treated as  EXTERN. If
name is not referenced, it is ignored. The  type can be  ABS, which imports
name as a constant. Normally used in include files.

EXTRN
See  EXTERN.

.FARDATA [ name]
When used with  .MODEL, starts a far data segment for initialized data
(segment name FAR_DATA or  name).

.FARDATA? [ name]
When used with  .MODEL, starts a far data segment for uninitialized data
(segment name FAR_BSS or  name).

FOR  parameter [ :REQ |  := default]  ,  < argument [ ,  argument]... >
        statements

    ENDM
Marks a block that will be repeated once for each  argument, with the
current  argument replacing  parameter on each repetition. Same as  IRP.

FORC  parameter ,  < string >
        statements

    ENDM
Marks a block that will be repeated once for each character in  string, with
the current character replacing  parameter on each repetition. Same as

IRPC.
[ name]  FWORD  initializer [ ,  initializer]...
Allocates and optionally initializes 6 bytes of storage for each
initializer. Can also be used as a type specifier anywhere a type is legal.

GOTO  macrolabel
Transfers assembly to the line marked  : macrolabel.  GOTO is permitted only
inside  MACRO,  FOR,  FORC,  REPEAT, and  WHILE blocks. The label must be
the only directive on the line and must be preceded by a leading colon.

    name  GROUP  segment [ ,  segment]...
Add the specified  segments to the group called  name.

.IF  condition1
        statements
[ .ELSEIF  condition2
        statements]
[ .ELSE
        statements]
.ENDIF
Generates code that tests  condition1 (for example, AX > 7) and executes the
    statements if that condition is true. If an  .ELSE follows, its statements
are executed if the original condition was false. Note: The conditions are
evaluated at run time.

IF  expression1
        ifstatements
[ ELSEIF  expression2
        elseifstatements]
[ ELSE
        elsestatements]
ENDIF
Grants assembly of  ifstatements if  expression1 is true (nonzero) or
elseifstatements if  expression1 is false (0) and  expression2 is true. The
following directives may be substituted for  ELSEIF:  ELSEIFB,  ELSEIFDEF,

ELSEIFDIF,  ELSEIFDIFI,  ELSEIFE,  ELSEIFIDN,  ELSEIFIDNI,  ELSEIFNB, and ELS
is false. Note: The expressions are evaluated at assembly time.

IFB  textitem
Grants assembly if  textitem is blank. See  IF for complete syntax.

IFDEF  name
Grants assembly if  name is a previously defined label, variable, or symbol.
See  IF for complete syntax.

IFDIF[ I]  textitem1 ,  textitem2
Grants assembly if the text items are different. If  I is given, the
comparison is case insensitive. See  IF for complete syntax.

IFE  expression
Grants assembly if  expression is false (0). See  IF for complete syntax.

IFIDN[ I]  textitem1 ,  textitem2
Grants assembly if the text items are identical. If  I is given, the
comparison is case insensitive. See  IF for complete syntax.

IFNB  textitem
Grants assembly if  textitem is not blank. See  IF for complete syntax.

IFNDEF  name
Grants assembly if  name has not been defined. See  IF for complete syntax.

INCLUDE  filename
Inserts source code from the source file given by  filename into the current
source file during assembly. The  filename must be enclosed in angle
brackets if it includes a backslash, semicolon, greater-than symbol,
less-than symbol, single quotation mark, or double quotation mark.

INCLUDELIB  libraryname
Informs the linker that the current module should be linked with
libraryname. The  libraryname must be enclosed in angle brackets if it
includes a backslash, semicolon, greater-than symbol, less-than symbol,
single quotation mark, or double quotation mark.
    name  INSTR [ position ,]  textitem1 ,  textitem2
Finds the first occurrence of  textitem2 in  textitem1. The starting
position is optional. Each text item can be a literal string, a constant
preceded by a  %, or the string returned by a macro function.

INVOKE  expression [ ,  arguments]

Calls the procedure at the address given by  expression, passing the
arguments on the stack or in registers according to the standard calling
conventions of the language type. Each argument passed to the procedure may
be an expression, a register pair, or an address expression (an expression
preceded by  ADDR).

IRP
See  FOR.

IRPC
See  FORC.
    name  LABEL  type
Creates a new label by assigning the current location-counter value and the
given  type to  name.
    name  LABEL [ NEAR |  FAR |  PROC]  PTR [ type]

Creates a new label by assigning the current location-counter value and the
given  type to  name.

.LALL
See  .LISTMACROALL.

.LFCOND
See  .LISTIF.

.LIST
Starts listing of statements. This is the default.

.LISTALL
Starts listing of all statements. Equivalent to the combination of  .LIST,

.LISTIF, and  .LISTMACROALL.
.LISTIF
Starts listing of statements in false conditional blocks. Same as  .LFCOND.

.LISTMACRO
Starts listing of macro expansion statements that generate code or data.
This is the default. Same as  .XALL.

.LISTMACROALL
Starts listing of all statements in macros. Same as  .LALL.

LOCAL  localname [ ,  localname]...
Within a macro,  LOCAL defines labels that are unique to each instance of
the macro.

LOCAL  label [  [ count ] ] [ : type] [ ,  label [  [ count ] ] [ type]
]...
Within a procedure definition ( PROC),  LOCAL creates stack-based variables
that exist for the duration of the procedure. The  label may be a simple
variable or an array containing  count elements.
    name  MACRO [ parameter [ :REQ |  := default |  :VARARG] ]...
        statements


ENDM [ value]
Marks a macro block called  name and establishes  parameter placeholders for
arguments passed when the macro is called. A macro function returns  value
to the calling statement.

.MODEL  memorymodel  [ ,  langtype] [ ,  ostype] [ ,  stackoption]
Initializes the program memory model. The  memorymodel may be  TINY,  SMALL,

COMPACT,  MEDIUM,  LARGE,  HUGE, or  FLAT. The  langtype may be  C,  BASIC,

FORTRAN,  PASCAL,  SYSCALL, or  STDCALL. The  ostype may be  OS_DOS or

OS_OS2. The  stackoption may be  NEARSTACK or  FARSTACK.

NAME  modulename
Ignored in version 6.0.

.NO87
Disallows assembly of all floating-point instructions.

.NOCREF [ name[ ,  name]...]
Suppresses listing of symbols in the symbol table and browser file. If names
are specified, only the given names are suppressed. Same as  .XCREF.

.NOLIST
Suppresses program listing. Same as  .XLIST.

.NOLISTIF
Suppresses listing of conditional blocks whose condition evaluates to false
(0). This is the default. Same as  .SFCOND.

.NOLISTMACRO
Suppresses listing of macro expansions. Same as  .SALL.

OPTION  optionlist
Enables and disables features of the assembler. Available options include

CASEMAP, DODD DOTNAME,  NODOTNAME, EPILOGUEEE EMULATOR,  NOEMULATOR,
EPILOGUE,  EXPR16,  EXPR32,  LANGUAGE,  LJMP,  NOLJMP,  M510,  NOM510,
NOKEYWORD,  NOSIGNEXTEND,  OFFSET,  OLDMACROS,  NOOLDMACROS,  OLDSTRUCTS,
NOOLDSTRUCTS,  PROC,  PROLOGUE,  READONLY,  NOREADONLY,  SCOPED,  NOSCOPED,
and  SEGMENT.

ORG  expression
Sets the location counter to  expression.

%OUT
See  ECHO.

PAGE [ [ length] ,  width]
Sets line  length and character  width of the program listing. If no
arguments are given, generates a page break.

PAGE +
Increments the section number and resets the page number to 1.

POPCONTEXT  context
Restores part or all of the current  context (saved by the  PUSHCONTEXT
directive). The  context can be  ASSUMES,  RADIX,  LISTING,  CPU, or  ALL.

    label  PROC [ distance] [ langtype] [ visibility] [ < prologuearg >]
[ USES  reglist] [ ,  parameter [ : tag] ]...
        statements
    label  ENDP
Marks start and end of a procedure block called  label. The statements in
the block can be called with the  CALL instruction or  INVOKE directive.

    label  PROTO [ distance] [ langtype] [ ,  [ parameter] : tag]...
Prototypes a function.

PUBLIC [ langtype]  name [ , [ langtype]  name]...
Makes each variable, label, or absolute symbol specified as  name available
to all other modules in the program.

PURGE  macroname [ ,  macroname]...
Deletes the specified macros from memory.

PUSHCONTEXT  context
Saves part or all of the current  context: segment register assumes, radix
value, listing and cref flags, or processor/coprocessor values. The  context
can be  ASSUMES,  RADIX,  LISTING,  CPU, or  ALL.

[ name]  QWORD  initializer [ ,  initializer]...
Allocates and optionally initializes 8 bytes of storage for each
initializer. Can also be used as a type specifier anywhere a type is legal.

.RADIX  expression
Sets the default radix, in the range 2 to 16, to the value of  expression.

    name  REAL4  initializer [ ,  initializer]...
Allocates and optionally initializes a single-precision (4-byte)
floating-point number for each  initializer.

    name  REAL8  initializer [ ,  initializer]...
Allocates and optionally initializes a double-precision (8-byte)
floating-point number for each  initializer.

    name  REAL10  initializer [ ,  initializer]...
Allocates and optionally initializes a 10-byte floating-point number for
each  initializer.

    recordname  RECORD  fieldname : width [ =  expression]
[ ,  fieldname : width [ =  expression] ]...
Declares a record type consisting of the specified fields. The  fieldname
names the field,  width specifies the number of bits, and  expression gives
its initial value.

.REPEAT
        statements
.UNTIL  condition
Generates code that repeats execution of the block of  statements until
condition becomes true.  .UNTILCXZ, which becomes true when CX is zero, may
be substituted for  .UNTIL. The  condition is optional with  .UNTILCXZ.

REPEAT  expression
    statements
    ENDM
Marks a block that is to be repeated  expression times. Same as  REPT.

REPT
See  REPEAT.

.SALL
See  .NOLISTMACRO.
    name  SBYTE  initializer [ ,  initializer]...
Allocates and optionally initializes a signed byte of storage for each
initializer. Can also be used as a type specifier anywhere a type is legal.

    name  SDWORD  initializer [ ,  initializer]...
Allocates and optionally initializes a signed doubleword
(4 bytes) of storage for each  initializer. Can also be used as a type
specifier anywhere a type is legal.

    name  SEGMENT [ READONLY] [ align] [ combine] [ use] [ ' class ']
        statements
name  ENDS
Defines a program segment called  name having segment attributes  align (BYTE
AT  address,  PRIVATE),  use ( USE16,  USE32,  FLAT),  and  class.

.SEQ
Orders segments sequentially (the default order).

.SFCOND
See  .NOLISTIF.

    name  SIZESTR  textitem
Finds the size of a text item.

.STACK [ size]
When used with  .MODEL, defines a stack segment (with segment name STACK).
The optional  size specifies the number of bytes for the stack (default
1,024). The  .STACK directive automatically closes the stack statement.

.STARTUP
Generates program start-up code.

STRUC
See  STRUCT.

    name  STRUCT [ alignment] [ ,  NONUNIQUE]
        fielddeclarations
name  ENDS
Declares a structure type having the specified  fielddeclarations. Each
field must be a valid data definition. Same as  STRUC.


STRUC
STRUCT

    name  SUBSTR  textitem ,  position  [ ,  length]
Returns a substring of  textitem, starting at  position. The  textitem can
be a literal string, a constant preceded by a  %, or the string returned by
a macro function.

SUBTITLE  text
Defines the listing subtitle. Same as  SUBTTL.

SUBTTL
See  SUBTITLE.
    name  SWORD  initializer [ ,  initializer]...

Allocates and optionally initializes a signed word (2 bytes) of storage for
each  initializer. Can also be used as a type specifier anywhere a type is
legal.
[ name]  TBYTE  initializer [ ,  initializer]...
Allocates and optionally initializes 10 bytes of storage for each
initializer. Can also be used as a type specifier anywhere a type is legal.
    name  TEXTEQU [ textitem]

Assigns  textitem to  name. The  textitem can be a literal string, a
constant preceded by a  %, or the string returned by a macro function.

.TFCOND
Toggles listing of false conditional blocks.

TITLE  text
Defines the program listing title.

    name  TYPEDEF  type
Defines a new type called  name, which is equivalent to  type.

    name  UNION [ alignment] [ , NONUNIQUE]
    fielddeclarations
[ name]   ENDS
Declares a union of one or more data types. The  fielddeclarations must be
valid data definitions. Omit the  ENDS  name label on nested  UNION
definitions.

.UNTIL
See  .REPEAT.

.UNTILCXZ
See  .REPEAT.

.WHILE  condition
        statements
.ENDW
Generates code that executes the block of  statements while  condition
remains true.

WHILE  expression
        statements
ENDM
Repeats assembly of block  statements as long as  expression remains true.

[ name]  WORD  initializer [ ,  initializer]...
Allocates and optionally initializes a word (2 bytes) of storage for each

initializer. Can also be used as a type specifier anywhere a type is legal.

.XALL
See  .LISTMACRO.

.XCREF
See  .NOCREF.

.XLIST
See  .NOLIST.




Predefined Symbols

$
The current value of the location counter.

?
In data declarations, a value that the assembler allocates but does not
initialize.

@@:
Defines a local code label. Overrides any previous  @@: labels. See  @B and

@F.
The location of the previous  @@: label.
@CatStr(  string1 [ ,  string2...]  )

Macro function that concatenates one or more strings. Returns a string.


@code
The name of the code segment (text macro).

@CodeSize
0 for  TINY,  SMALL,  COMPACT, and  FLAT models, and 1 for  MEDIUM,  LARGE,
and  HUGE models (numeric equate).

@Cpu
A bit mask specifying the processor mode (numeric equate).

@CurSeg
The name of the current segment (text macro).

@data
The name of the default data group. Evaluates to DGROUP for all models
except  FLAT. Evaluates to  FLAT under the  FLAT memory model (text macro).


@DataSize
0 for  TINY,  SMALL,  MEDIUM, and  FLAT models, 1 for  COMPACT and  LARGE
models, and 2 for  HUGE model (numeric equate).

@Date
The system date in the format mm/dd/yy (text macro).

@Environ(  envvar  )
Value of environment variable  envvar (macro function).


@F
The location of the next  @@: label.

@fardata
The name of the segment defined by the  .FARDATA directive (text macro).

@fardata?
The name of the segment defined by the  .FARDATA? directive (text macro).

@FileCur
The name of the current file (text macro).

@FileName
The base name of the main file being assembled (text macro).

@InStr( [ position] ,  string1 ,  string2  )

Macro function that finds the first occurrence of  string2 in  string1. The
starting position within  string1 is optional. Returns an integer (0 if
string2 is not found).


@Interface
Information about the language parameters (numeric equate).

@Line
The source line number in the current file (numeric equate).

@Model
1 for  TINY model, 2 for  SMALL model, 3 for  COMPACT model, 4 for  MEDIUM
model, 5 for  LARGE model, 6 for  HUGE model, and 7 for  FLAT model (numeric
equate).

@SizeStr(  string  )
Macro function that returns the length of the given string. Returns an
integer.

@SubStr(  string ,  position [ ,  length]  )
Macro function that returns a substring starting at  position.

@stack
DGROUP for near stacks or STACK for far stacks (text macro).

@Time
The system time in 24-hour hh:mm:ss format (text macro).

@Version
600 in MASM 6.0 (text macro).

@WordSize
2 for a 16-bit segment or 4 for a 32-bit segment (numeric equate).



Operators


expression1  + expression2
Returns expression1 plus expression2.

expression1 - expression2
Returns expression1 minus expression2.

expression1 * expression2
Returns expression1 times expression2.

expression1  / expression2
Returns expression1 divided by expression2.

-expression
Reverses the sign of expression.

[expression1]  [expression2 ]
Returns expression1 plus  [expression2 ].

segment : expression
Overrides the default segment of expression with segment. The segment can
be a segment register, group name, segment name, or segment expression. The e

expression . field [ . field]...
Returns expression plus the offset of field within its structure or union.

    [register ]. field [ . field]...
Returns value at the location pointed to by register plus the offset of
field within its structure or union.

    <text >
Treats text as a single literal element.

"text"
Treats "text" as a string.

'text'
Treats 'text' as a string.

    !character
Treats character as a literal character rather than as an operator or
symbol.

    ;text
Treats text as a comment.

    ;;text
Treats text as a comment that will not be listed in expanded macros.

    %expression
Treats the value of expression in a macro argument as text.

    &parameter &
Replaces parameter with its corresponding argument value.

    ABS
See the  EXTERNDEF directive.

    ADDR
See the  INVOKE directive.

expression1  AND expression2
Returns the result of a bitwise Boolean AND done on expression1 and expressio

count  DUP (initialvalue [ , initialvalue]...)
Specifies count number of declarations of initialvalue.

expression1  EQ expression2
Returns true (-1) if expression1 equals expression2, or returns false (0)
if it does not.

expression1  GE expression2
Returns true (-1) if expression1 is greater than or equal to expression2,
or returns false (0) if it is not.

expression1  GT expression2
Returns true (-1) if expression1 is greater than expression2, or returns
false (0) if it is not.

    HIGH expression
Returns the high byte of expression.

    HIGHWORD expression
Returns the high word of expression.

expression1  LE expression2
Returns true (-1) if expression1 is less than or equal to expression2, or
returns false (0) if it is not.

    LENGTH variable
Returns the number of data items in variable created by the first
initializer.

    LENGTHOF variable
Returns the number of data objects in variable.

    LOW expression
Returns the low byte of expression.

    LOWWORD expression
Returns the low word of expression.

    LROFFSET expression
Returns the offset of expression. Same as  OFFSET, but it generates a
loader resolved offset, which allows Windows to relocate code segments.

expression1  LT expression2
Returns true (-1) if expression1 is less than expression2, or returns
false (0) if it is not.

    MASK {recordfieldname | record}
Returns a bit mask in which the bits in recordfieldname or record are set
and all other bits are cleared.

expression1  MOD expression2
Returns the remainder of dividing expression1 by expression2.

expression1  NE expression2
Returns true (-1) if expression1 does not equal expression2, or returns
false (0) if it does.

    NOT expression
Returns expression with all bits reversed.

    OFFSET expression
Returns the offset of expression.

    OPATTR expression

Returns a word defining the mode and scope of expression. The low byte is
identical to the byte returned by  .TYPE. The high byte contains additional
information.

expression1  OR expression2
Returns the result of a bitwise OR done on expression1 and expression2.

type  PTR expression
Forces the expression to be treated as having the specified type.

[distance]  PTR type

Specifies a pointer to type.

    SEG expression
Returns the segment of expression.

expression  SHL count
Returns the result of shifting the bits of expression left count number of
bits.

    SHORT label
Sets the type of label to short. All jumps to
label must be short (within
the range -128 to +127 bytes from the jump instruction to label).

expression  SHR count
Returns the result of shifting the bits of expression right count number
of bits.

    SIZE variable
Returns the number of bytes in variable allocated by the first initializer.

    SIZEOF {variable | type}
Returns the number of bytes in variable or type.

    THIS type
Returns an operand of specified type whose offset and segment values are
equal to the current location-counter value.

    .TYPE expression
See  OPATTR.

    TYPE expression
Returns the type of expression.

    WIDTH {recordfieldname | record}
Returns the width in bits of the current recordfieldname or record.

expression1  XOR expression2
Returns the result of a bitwise Boolean XOR done on expression1 and
expression2.





Run-Time Operators

The following operators are used only within  .IF,  .WHILE, or  .REPEAT
blocks and are evaluated at run time, not at assembly time:

expression1  ==  expression2
Is equal to.

expression1  !=  expression2
Is not equal to.

expression1  >  expression2
Is greater than.

expression1  >=  expression2
Is greater than or equal to.

expression1  <  expression2
Is less than.

expression1  <=  expression2
Is less than or equal to.

expression1  ||  expression2
Logical OR.

expression1  &&  expression2
Logical AND.

expression1  &  expression2
Bitwise AND.

! expression
Logical negation.

CARRY?
Carry (C) processor flag.

OVERFLOW?
Overflow (O) processor flag.

PARITY?
Parity (P) processor flag.

SIGN?
Sign (S) processor flag.

ZERO?
Zero (Z) processor flag.


Processor



Topical Cross-Reference for Processor


Data Transfer
MOV
MOVS
MOVSX
MOVZX
XCHG
LODS
STOS
LEA
LDS/LES
LFS/LGS/LSS
XLAT/XLATB
BSWAP#
CMPXCHG#
XADD#


Stack
PUSH
PUSHF
PUSHA*
POP
POPF
POPA*
ENTER*
LEAVE*


Input/Output
IN
INS*
OUT
OUTS*


Type Conversion
CBW
CWD
CWDE
CDQ
BSWAP#


Flag
CLC
CLD
CLI
CMC
STC
STD
STI
POPF
PUSHF
LAHF
SAHF


String
MOVS
LODS
STOS
SCAS
CMPS
INS*
OUTS*
REP
REPE/REPZ
REPNE/REPNZ


Arithmetic
ADD
ADC
INC
SUB
SBB
DEC
NEG
IMUL
MUL
DIV
IDIV
XADD#


Bit Operations
AND
OR
XOR
NOT
ROL
ROR
RCL
RCR
SHL/SAL
SHR
SAR
SHLD
SHRD
BSF
BSR
BT
BTC
BTR
BTS


Compare
CMP
CMPS
TEST
BT
BTC
BTR
BTS
CMPXCHG#


Unconditional Transfer
CALL
INT
IRET
RET
RETN/RETF
JMP


Loop
LOOP
LOOPE/LOOPZ
LOOPNE/LOOPNZ
JCXZ/JECXZ


Conditional Transfer
JB/JNAE
JAE/JNB
JBE/JNA
JA/JNBE
JE/JZ
JNE/JNZ
JL/JNGE
JGE/JNL
JLE/JNG
JG/JNLE
JS
JNS
JC
JNC
JO
JNO
JP/JPE
JNP/JPO
JCXZ/JECXZ
INTO
BOUND*


Conditional Set
SETB/SETNAE
SETAE/SETNB
SETBE/SETNA
SETA/SETNBE
SETE/SETZ
SETNE/SETNZ
SETL/SETNGE
SETGE/SETNL
SETLE/SETNG
SETG/SETNLE
SETS
SETNS
SETC
SETNC
SETO
SETNO
SETP/SETPE
SETNP/SETPO


BCD Conversion
AAA
AAS
AAM
AAD
DAA
DAS


Processor Control
NOP
WAIT
LOCK
HLT


Process Control
ARPL
CLTS
LAR
LGDT/LIDT/LLDT
LMSW
LSL
LTR
SGDT/SIDT/SLDT
SMSW
STR
VERR
VERW
MOV special
INVD#
INVLPG#
WBINVD#



Interpreting Processor Instructions

This section provides an alphabetical reference to the instructions for the
8086, 8088, 80286, 80386, and 80486 processors. Figure 1 gives a key to each
element of the reference.


Flags
The first row of the display has a one-character abbreviation for the flag
name. Only the flags common to all processors are shown.

O  Overflow       T  Trap       A  Auxiliary carry
D  Direction      S  Sign       P  Parity
I  Interrupt      Z  Zero       C  Carry


The second line has codes indicating how the flag can be affected.
1    Sets the flag
0    Clears the flag
?    May change the flag, but the value is not predictable
blank    No effect on the flag
+-   Modifies according to the rules associated with the flag

Syntax
Each encoding variation may have different syntaxes corresponding to
different addressing modes. The following abbreviations are used:
reg
A general-purpose register of any size
segreg
One of the segment registers: DS, ES, SS, or CS (also FS or GS on the
80386/486)
accum
An accumulator register of any size: AL or AX (also EAX on the 80386/486)
mem
A direct or indirect memory operand of any size
label
A labeled memory location in the code segment
src,dest
A source or destination memory operand used in a string operation
immed
A constant operand
In some cases abbreviations have numeric suffixes to specify that the
operand must be a particular size. For example, reg16 means that only a
16-bit (word) register is accepted.


Examples
One or more examples are shown for each syntax. Their position is not
related to the clock speeds in the right column.

Clock Speeds
Column 3 shows the clock speeds for each processor. Sometimes an instruction
may have more than one clock speed. Multiple speeds are separated by commas.
If several speeds are part of an expression, they are enclosed in
parentheses. The following abbreviations are used to specify variations:
EA      Effective address. This applies only to the 8088 and 8086 processors,
described in the next section.
b,w,d   Byte, word, or doubleword operands.
pm      Protected mode.
n       Iterations. Repeated instructions may have a base number of clocks pl
number of clocks for each iteration. For example, 8+4n means eight clocks
plus four clocks for each iteration.
noj     No jump. For conditional jump instructions, noj indicates the speed i
condition is false and the jump is not taken.
m       Next instruction components. Some control transfer instructions take
different times depending on the length of the next instruction executed. On
the 8088 and 8086, m is never a factor. On the 80286, m is the number of
bytes in the instruction. On the 80386/486, m is the number of components.
Each byte of encoding is a component, and the displacement and data are
separate components.
W88,88  8088 exceptions. See "Timings on the 8088 and 8086 Processors."

Clocks can be converted to nanoseconds by dividing one microsecond by the
number of megahertz (MHz) at which the processor is running. For example, on
a processor running at 8 MHz, one clock takes 125 nanoseconds (1000 MHz per
nanosecond / 8 MHz).

The clock counts are for best-case timings. Actual timings vary depending on
wait states, alignment of the instruction, the status of the prefetch queue,
and other factors.


Timings on the 8088 and 8086 Processors
Because of its 8-bit data bus, the 8088 always requires two fetches to get a
16-bit operand. Instructions that work on 16-bit memory operands therefore
take longer on the 8088 than on the 8086. Separate 8088 timings are shown in
parentheses following the main timing. For example, 9 (W88=13) means that
the 8086 with any operands or the 8088 with byte operands take 9 clocks, but
the 8088 with word operands takes 13 clocks. Similarly, 16 (88=24) means
that the 8086 takes 16 clocks, but the 8088 takes 24 clocks.
On the 8088 and 8086, the effective address (EA) value must be added for
instructions that operate on memory operands. A displacement is any direct
memory or constant operand, or any combination of the two. Below are the
number of clocks to add for the effective address.
╓┌───────────────────────────────┌──────────┌────────────────────────────────╖
────────────────────────────────────────────────────────────────────────────
Components                      EA Clocks  Examples

Displacement                    6          mov   ax,stuffmov   ax,stuff+2

Base or index                   5          mov   ax,[bx]mov   ax,[di]

────────────────────────────────────────────────────────────────────────────

Displacementplus base or index  9          mov   ax,[bp+8]mov
                                            ax,stuff[di]

Base plus index (BP+DI,BX+SI)   7          mov   ax,[bx+si]mov   ax,[bp+di]

Base plus index (BP+SI,BX+DI)   8          mov   ax,[bx+di]mov   ax,[bp+si]

Base plus indexplus             11         mov   ax,stuff[bx+si]mov
displacement (BP+DI+disp                   ax,[bp+di+8]
,BX+SI+disp)

Base plus indexplus             12         mov   ax,stuff[bx+di]mov
displacement  (BP+SI+disp                  ax,[bp+si+20]
,BX+DI+disp)

Segment override                EA+2       mov   ax,es:stuffmov
                                            ax,ds:[bp+10]





Timings on the 80286-80486 Processors
On the 80286-80486 processors, the effective address calculation is handled
by hardware and is therefore not a factor in clock calculations except in
one case. If a memory operand includes all three possible elements--a
displacement, a base register, and an index register--then add one clock. On
the 80486, the extra clock is not always used. Examples are shown below.

mov    ax,[bx+di]         ;No extra
mov    ax,array[bx+di]    ;One extra
mov    ax,[bx+di+6]       ;One extra


Note: 80186 and 80188 timings are different from 8088, 8086, and 80286
timings. They are not shown in this manual. Timings are also not shown for
protected-mode transfers through gates or for the virtual 8086 mode
available on the 80386/486 processors.

Interpreting Encodings
Encodings are shown for each variation of the instruction. This section
describes encoding for all processors except the 80386/486. The encodings
take the form of boxes filled with 0s and 1s for bits that are constant for
the instruction variation, and abbreviations (in italics) for the following
variable bits or bitfields:
d
Direction bit. If set, do memory to register or register to register; the
reg field is the destination. If cleared, do register to memory; the reg
field is the source.

w
Word/byte bit. If set, use 16-bit or 32-bit operands. If cleared, use 8-bit
operands.

s
Sign bit. If set, sign-extend 8-bit immediate data to 16 bits.

mod
Mode. This two-bit field gives the register/memory mode with displacement.
The possible values are shown below.

mod    Meaning
00    This value can have two meanings:
    If r/m is 110, a direct memory operand is used.
If r/m is not 110, the displacement is 0 and an indirect memory operand is
used. The operand must be based, indexed, or based indexed.
01    An indirect memory operand is used with an 8-bit displacement.
10    An indirect memory operand is used with a 16-bit displacement.
11    A two-register instruction is used; the reg field specifies the
destination and the r/m field specifies the source.


reg
Register. This three-bit field specifies one of the general-purpose
registers:

reg    16/32 biut if w=1   8-bit if w=0
000       AX/EAX              AL
001       CX/ECX              CL
010       DX/EDX              DL
011       BX/EBX              BL
100       SP/ESP              AH
101       BP/EBP              CH
110       SI/ESI              DH
111       DI/EDI              BH

The reg field is sometimes used to specify encoding information rather than
a register.
sreg
Segment register. This field specifies one of the segment registers.
sreg    Register
000    ES
001    CS
010    SS
011    DS
100    FS
101    GS


r/m
Register/memory. This three-bit field specifies a register or memory r/m
operand.
If the mod field is 11, r/m specifies the source register using the reg
field codes. Otherwise, the field has one of the following values:

r/m    Operand Address

000    DS:[BX+SI+disp]
001    DS:[BX+DI+disp]
010    SS:[BP+SI+disp]
011    SS:[BP+DI+disp]
100    DS:[SI+disp]
101    DS:[DI+disp]
110    SS:[BP+disp]*

* If mod is 00 and r/m is 110, then the operand is treated as a direct
memory operand. This means that the operand [BP] is encoded as [BP+0] rather
than having a short-form like other register indirect operands. Encoding
[BX] takes one byte, but encoding [BP] takes two.
111    DS:[BX+disp]


disp
Displacement. These bytes give the offset for memory operands. The possible
lengths (in bytes) are shown in parentheses.

data
Data. These bytes gives the actual value for constant values. The possible
lengths (in bytes) are shown in parentheses.

If a memory operand has a segment override, the entire instruction has one
of the following bytes as a prefix:

Prefix                 Segment
00101110    (2Eh)        CS
00111110    (3Eh)        DS
00100110    (26h)        ES
00110110    (36h)        SS
01100100    (64h)        FS
01100101    (65h)        GS

Example
As an example, assume you want to calculate the encoding for the following
statement (where  warray  is a 16-bit variable):
add    warray[bx+di],-3

First look up the encoding for the immediate to memory syntax of the ADD
instruction:
100000sw
mod,000,r/m

data (0, 1, or 2)


Since the destination is a word operand, the w bit is set. The 8-bit
immediate data must be sign-extended to 16 bits in order to fit into the
operand, so the s bit is also set. The first byte of the instruction is
therefore 10000011 (83h).
Since the memory operand can be anywhere in the segment, it must have a
16-bit offset (displacement). Therefore the mod field is 10. The reg field
is 000, as shown in the encoding. The r/m coding for [bx+di+disp] is 001.
The second byte is 10000001 (81h).
The next two bytes are the offset of  warray. The low byte of the offset is
stored first and the high byte second. For this example, assume that  warray
is located at offset 10EFh.
The last byte of the instruction is used to store the 8-bit immediate value
-3 (FDh). This value is encoded as 8 bits (but sign-extended to 16 bits by
the processor).

83 81 EF 10 FD

You can confirm this by assembling the instruction and looking at the
resulting assembly listing.

Interpreting 80386/486 Encoding Extensions
This book shows 80386/486 encodings for instructions that are available only
on the 80386/486 processors. For other instructions, encodings are shown
only for the 16-bit subset available on all processors. This section tells
how to convert the 80286 encodings shown in the book to 80386/486 encodings
that use extensions such as 32-bit registers and memory operands.
The extended 80386/486 encodings differ in that they can have additional
prefix bytes, a Scaled Index Base (SIB) byte, and 32-bit displacement and
immediate bytes. Use of these elements is closely tied to the segment word
size. The use type of the code segment determines whether the instructions
are processed in 32-bit mode (USE32) or
16-bit mode (USE16). Current versions of MS-DOS(R) and Microsoft Windows and
version 1.x of OS/2 use 16-bit mode only. Version 2.0 of OS/2 uses 32-bit
mode.

Additional bytes may be added for a segment prefix, a repeat prefix, or the
LOCK prefix.



Address-Size Prefix
The address-size prefix determines the segment word size of the operation.
It can override the default size for calculating the displacement of memory
addresses. The address prefix byte is 67h. The assembler automatically
inserts this byte where appropriate.
In 32-bit mode (USE32 or FLAT code segment), displacements are calculated as
32-bit addresses. The effective address-size prefix must be used for any
instructions that must calculate addresses as 16-bit displacements. In
16-bit mode the defaults are reversed. The prefix must be used to specify
calculation of 32-bit displacements.


Operand-Size Prefix
The operand-size prefix determines the size of operands. It can override the
default size of registers or memory operands. The operand-size prefix byte
is 66h. The assembler automatically inserts this byte where appropriate.
In 32-bit mode, the default sizes for operands are 8 bits and 32 bits
(depending on the w bit). For most instructions, the operand-size prefix
must be used for any instructions that use 16-bit operands. In 16-bit mode,
the default sizes are 8 bits and 16 bits. The prefix must be used for any
instructions that use 32-bit  operands. Some instructions use 16-bit
operands, regardless of mode.


Encoding Differences for 32-Bit Operations
When 32-bit operations are performed, the meaning of certain bits or fields
are different than for 16-bit operations. The changes may affect default
operations in 32-bit mode, or 16-bit mode operations in which the
address-size prefix or the operand-size prefix is used. The following fields
may have a different meaning for 32-bit operations than the meaning
described in the "Interpreting Encodings" section:

w
Word/byte bit.  If set, use 32-bit operands. If cleared, use
8-bit operands.

s
Sign bit.  If set, sign-extend 8-bit or 16-bit immediate data to 32 bits.

mod
Mode. This field indicates the register/memory mode. The value 11 still
indicates a register-to-register operation with r/m containing the code for
a 32-bit source register. However, other codes have different meanings as
shown in the tables in the next section.

reg
Register. The codes for 16-bit registers are extended to
32-bit registers. For example, if the reg field is 000, EAX
is used instead of AX. Use of 8-bit registers is unchanged.

sreg
Segment register. The 80386 has the following additional segment registers:
                sreg     Register
                100         FS
                101         GS

r/m
Register/memory. If the r/m field is used for the source register, 32-bit
registers are used as for the reg field. If the field is used for memory
operands, the meaning is completely different than for 16-bit operations, as
shown in the tables in the next section.

disp
Displacement. This field is four bytes for 32-bit addresses.

data
Data. Immediate data can be up to four bytes.


Scaled Index Base Byte
Many 80386/486 extended memory operands are too complex to be represented by
a single mod-reg-r/m byte. For these operands, a value of 100 in the r/m
field signals the presence of a second encoding byte called the Scaled Index
Base (SIB) byte. The SIB byte is made up of the following fields:

ss
Scaling Field. This two-bit field specifies one of the following scaling
factors:
        ss   Scale
        00    1
        01    2
        10    4
        11    8

index
Index Register. This three-bit field specifies one of the following index
registers:
        index    Register
        000    EAX
        001    ECX
        010    EDX
        011    EBX
        100    no index
        101    EBP
        110    ESI
        111    EDI

Note that ESP cannot be an index register. If the index field is 100, then
the ss field must be 00.

base
Base Register. This three-bit field combines with the mod field to specify
the base register and the displacement. Note that the base field only
specifies the base when the r/m field is 100. Otherwise, the r/m field
specifies the base.

If a memory operand has a segment override, the entire instruction has one
of the prefixes discussed earlier in the "Interpreting Encodings" section or
one of the following prefixes for the segment registers available only on
the 80386/486:
        Prefix                 Segment
        01100100    (64h)        FS
        01100101    (65h)        GS


Example
Assume you want to calculate the encoding for the following statement (where
warray  is a 16-bit variable). Assume also that the instruction is used in
16-bit mode.
add   warray[eax+ecx*2],-3

First look up the encoding for the immediate to memory syntax of the ADD
instruction:
100000sw
mod,000,r/m

This encoding must be expanded to account for 80386/486 extensions. Note
that the instruction operates on 16-bit data in a 16-bit mode program.
Therefore, the operand-size prefix is not needed. However, the instruction
does use 32-bit registers to calculate a 32-bit effective address. Thus the
first byte of the encoding must be the effective address-size prefix,
01100111 (67h).

The opcode byte is the same (83h) as for the 80286 example described in the
"Interpreting Encodings" section.

The mod-reg-r/m byte must specify a based indexed operand with a scaling
factor of two. This operand cannot be specified with a single byte, so the
encoding must also use the SIB byte. The value 100 in the r/m field
specifies an SIB byte. The reg field is 000, as shown in the encoding. The
mod field is 10 for operands that have base and scaled index registers and a
32-bit displacement. The combined mod, reg, and r/m fields for the second
byte are 10000100 (84h).

The SIB byte is next. The scaling factor is 2, so the ss field is 01. The
index register is ECX, so the index field is 001. The base register is EAX,
so the base field is 000. The SIB byte is 01001000 (48h).

The next four bytes are the offset of  warray. The low bytes are stored
first. For this example, assume that  warray  is located at offset 10EFh.
This offset only requires two bytes, but four must be supplied because of
the addressing mode. A 32-bit address can be safely used in 16-bit mode as
long as the upper word is 0.

The last byte of the instruction is used to store the 8-bit immediate value
-3 (FDh).

The encoding is shown below in hexadecimal:
67 83 84 48 00 00 EF 10 FD



Processor Instructions



AAA
ASCII Adjust after Addition

Adjusts the result of an addition to a decimal digit (0-9). The previous
addition instruction should place its 8-bit sum in AL. If the sum is greater
than 9h, AH is incremented and the carry and auxiliary carry flags are set.
Otherwise, the carry and auxiliary carry flags are cleared.



AAD
ASCII Adjust before Division

Converts unpacked BCD digits in AH (most significant digit) and AL (least
significant digit) to a binary number in AX. This instruction is often used
to prepare an unpacked BCD number in AX for division by an unpacked BCD
digit in an 8-bit register.



AAM
ASCII Adjust after Multiply

Converts an 8-bit binary number less than 100 decimal in AL to an unpacked
BCD number in AX. The most significant digit goes in AH and the least
significant in AL. This instruction is often used to adjust the product
after a MUL instruction that multiplies unpacked BCD digits in AH and AL. It
is also used to adjust the quotient after a DIV instruction that divides a
binary number less than 100 decimal in AX by an unpacked BCD number.




AAS
ASCII Adjust after Subtraction

Adjusts the result of a subtraction to a decimal digit (0-9). The previous
subtraction instruction should place its 8-bit result in AL. If the result
is greater than 9h, AH is decremented and the carry and auxiliary carry
flags are set. Otherwise, the carry and auxiliary carry flags are cleared.



ADC
Add with Carry

Adds the source operand, the destination operand, and the value of the carry
flag. The result is assigned to the destination operand. This instruction is
used to add the more significant portions of numbers that must be added in
multiple registers.



ADD
Add

Adds the source and destination operands and puts the sum in the destination
operand.



AND
Logical AND

Performs a bitwise AND operation on the source and destination operands and
stores the result in the destination operand. For each bit position in the
operands, if both bits are set, the corresponding bit of the result is set.
Otherwise, the corresponding bit of the result is cleared.



ARPL
Adjust Requested Privilege Level
80286-80486 Protected Only

Verifies that the destination Requested Privilege Level (RPL) field (bits 0
and 1 of a selector value) is less than the source RPL field. If it is not,
ARPL adjusts the destination RPL up to match the source RPL. The destination
operand should be a 16-bit memory or register operand containing the value
of a selector. The source operand should be a
16-bit register containing the test value. The zero flag is set if the
destination is adjusted; otherwise, the flag is cleared. ARPL is useful only
in 80286-80486 protected mode. See Intel documentation for details on
selectors and privilege levels.



BOUND
Check Array Bounds
80186-80486 Only

Verifies that a signed index value is within the bounds of an array. The
destination operand can be any 16-bit register containing the index to be
checked. The source operand must then be a 32-bit memory operand in which
the low and high words contain the starting and ending values, respectively,
of the array. (On the 80386/486 processors, the destination operand can be a
32-bit register; in this case, the source operand must be a 64-bit operand
made up of 32-bit bounds.) If the source operand is less than the first
bound or greater than the last bound, an interrupt 5 is generated. The
instruction pointer pushed by the interrupt (and returned by IRET) points to
the BOUND instruction rather than to the next instruction.



BSF/BSR
Bit Scan
80386/486 Only

Scans an operand to find the first set bit. If a set bit is found, the zero
flag is set and the destination operand is loaded with the bit index of the
first set bit encountered. If no set bit is found, the zero flag is cleared.
BSF (Bit Scan Forward) scans from bit 0 to the most significant bit. BSR
(Bit Scan Reverse) scans from the most significant bit of an operand to bit
0.



BSWAP
Byte Swap
80486 Only

Takes a single 32-bit register as operand and exchanges the first byte with
the fourth and the second byte with the third. This instruction does not
alter any bit values within the bytes and is useful for quickly translating
between 8086-family byte storage and storage schemes in which the high byte
is stored first.



BT/BTC/BTR/BTS
Bit Tests
80386/486 Only

Copies the value of a specified bit into the carry flag, where it can be
tested by a JC or JNC instruction. The destination operand specifies the
value in which the bit is located; the source operand specifies the bit
position. BT simply copies the bit to the flag. BTC copies the bit and
complements (toggles) it in the destination. BTR copies the bit and resets
(clears) it in the destination. BTS copies the bit and sets it in the
destination.



CALL
Call Procedure

Calls a procedure. The instruction pushes the address of the next
instruction onto the stack and jumps to the address specified by the
operand. For NEAR calls, SP is decreased by 2, the offset (IP) is pushed,
and the new offset is loaded into IP.
For FAR calls, SP is decreased by 2, the segment (CS) is pushed, and the new
segment is loaded into CS. Then SP is decreased by 2 again, the offset (IP)
is pushed, and the new offset is loaded into IP. A subsequent RET
instruction can pop the address so that execution continues with the
instruction following the call.



CBW
Convert Byte to Word

Converts a signed byte in AL to a signed word in AX by extending the sign
bit of AL into all bits of AH.



CDQ
Convert Double to Quad
80386/486 Only

Converts the signed doubleword in EAX to a signed quadword in the EDX:EAX
register pair by extending the sign bit of EAX into all bits of EDX.



CLC
Clear Carry Flag

Clears the carry flag.



CLD
Clear Direction Flag

Clears the direction flag. All subsequent string instructions will process
up (from low addresses to high addresses) by increasing the appropriate
index registers.



CLI
Clear Interrupt Flag

Clears the interrupt flag. When the interrupt flag is cleared, maskable
interrupts are not recognized until the flag is set again with the STI
instruction. In protected mode, CLI only clears the flag if the current
task's privilege level is less than or equal to the value of the IOPL flag.
Otherwise, a general-protection fault occurs.



CLTS
Clear Task Switched Flag
80286-80486 Privileged Only

Clears the task switched flag in the Machine Status Word (MSW) of the 80286
or the CR0 register of the 80386/486. This instruction can be used only in
systems software executing at privilege level 0. See Intel documentation for
details on the task-switched flag and other privileged-mode concepts.



CMC
Complement Carry Flag

Complements (toggles) the carry flag.



CMP
Compare Two Operands

Compares two operands as a test for a subsequent conditional-jump or set
instruction. CMP does this by subtracting the source operand from the
destination operand and setting the flags according to the result. CMP is
the same as the SUB instruction, except that the result is not stored.



CMPS/CMPSB/
CMPSW/CMPSD
Compare String

Compares two strings. DS:SI must point to the source string and ES:DI must
point to the destination string (even if operands are given). For each
comparison, the destination element is subtracted from the source element
and the flags are updated to reflect the result (although the result is not
stored). DI and SI are adjusted according to the size of the operands and
the status of the direction flag. They are increased if the direction flag
has been cleared with CLD or decreased if the direction flag has been set
with STD.
If the CMPS form of the instruction is used, operands must be provided to
indicate the size of the data elements to be processed. A segment override
can be given for the source (but not for the destination). If CMPSB (bytes),
CMPSW (words), or CMPSD (doublewords on the 80386/486 only) is used, the
instruction determines the size of the data elements to be processed.

CMPS and its variations are normally used with repeat prefixes. REPNE (or
REPNZ) is used to find the first match between two strings. REPE (or REPZ)
is used to find the first nonmatch. Before the comparison, CX should contain
the maximum number of elements to compare. After a REPNE CMPS, the zero flag
will be cleared if no match was found. After a REPE CMPS, the zero flag will
be set if no nonmatch was found. Otherwise, SI and DI will point to the
element after the first match or nonmatch.



CMPXCHG
Compare and Exchange
80486 Only

Compares the destination operand to the accumulator (AL, AX, or EAX). If
equal, the source operand is copied to the destination. Otherwise, the
destination is copied to the accumulator. The instruction sets flags
according to the result of the comparison.



CWD
Convert Word to Double

Converts the signed word in AX to a signed doubleword in the DX:AX register
pair by extending the sign bit of AX into all bits of DX.



CWDE
Convert Word to  Extended Double
80386/486 Only

Converts a signed word in AX to a signed doubleword in EAX by extending the
sign bit of AX into all bits of EAX.



DAA
Decimal Adjust after Addition

Adjusts the result of an addition to a packed BCD number (less than 100
decimal). The previous addition instruction should place its 8-bit binary
sum in AL. DAA converts this binary sum to packed BCD format with the least
significant decimal digit in the lower four bits and the most significant
digit in the upper four bits. If the sum is greater than 99h after
adjustment, the carry and auxiliary carry flags are set. Otherwise, the
carry and auxiliary carry flags are cleared.



DAS
Decimal Adjust after Subtraction

Adjusts the result of a subtraction to a packed BCD number (less than 100
decimal). The previous subtraction instruction should place its
8-bit binary result in AL. DAS converts this binary sum to packed BCD format
with the least significant decimal digit in the lower four bits and the most
significant digit in the upper four bits. If the sum is greater than 99h
after adjustment, the carry and auxiliary carry flags are set. Otherwise,
the carry and auxiliary carry flags are cleared.



DEC
Decrement

Subtracts 1 from the destination operand. Because the operand is treated as
an unsigned integer, the DEC instruction does not affect the carry flag. To
detect any effects on the carry flag, use the SUB instruction.



DIV
Unsigned Divide

Divides an implied destination operand by a specified source operand. Both
operands are treated as unsigned numbers. If the source (divisor) is 16 bits
wide, the implied destination (dividend) is the DX:AX register pair. The
quotient goes into AX and the remainder into DX. If the source is 8 bits
wide, the implied destination operand is AX. The quotient goes into AL and
the remainder into AH. On the 80386/486, if the source is EAX, the quotient
goes into EAX and the divisor into EDX.



ENTER
Make Stack Frame
80186-80486 Only

Creates a stack frame for a procedure that receives parameters passed on the
stack. When immed16 is 0, ENTER is equivalent to push bp, followed by mov
bp,sp. The first operand of the ENTER instruction specifies the number of
bytes to reserve for local variables. The second operand specifies the
nesting level for the procedure. The nesting level should be 0 for languages
that do not allow access to local variables of higher-level procedures (such
as C, Basic, and FORTRAN). See the complementary instruction LEAVE for a
method of exiting from a procedure.



HLT@EH@%
Halt

Stops CPU execution until an interrupt restarts execution at the instruction
following HLT. In protected mode, this instruction works only in privileged
mode.



IDIV
Signed Divide

Divides an implied destination operand by a specified source operand. Both
operands are treated as signed numbers. If the source (divisor) is 16 bits
wide, the implied destination (dividend) is the DX:AX register pair. The
quotient goes into AX and the remainder into DX. If the source is 8 bits
wide, the implied destination is AX. The quotient goes into AL and the
remainder into AH. On the 80386/486, if the source is EAX, the quotient goes
into EAX and the divisor into EDX.



IMUL
Signed Multiply

Multiplies an implied destination operand by a specified source operand.
Both operands are treated as signed numbers. If a single 16-bit operand is
given, the implied destination is AX and the product goes into the DX:AX
register pair. If a single 8-bit operand is given, the implied destination
is AL and the product goes into AX. On the 80386/486, if the operand is EAX,
the product goes into the EDX:EAX register pair. The carry and overflow
flags are set if the product is sign-extended into DX for 16-bit operands,
into AH for 8-bit operands, or into EDX for 32-bit operands.

Two additional syntaxes are available on the 80186-80486 processors. In the
two-operand form, a 16-bit register gives one of the factors and serves as
the destination for the result; a source constant specifies the other
factor. In the three-operand form, the first operand is a 16-bit register
where the result will be stored, the second is a 16-bit register or memory
operand containing one of the factors, and the third is a constant
representing the other factor. With both variations, the overflow and carry
flags are set if the result is too large to fit into the 16-bit destination
register. Since the low 16 bits of the product are the same for both signed
and unsigned multiplication, these syntaxes can be used for either signed or
unsigned numbers. On the 80386/486, the operands can be either 16 or 32 bits
wide.

A fourth syntax is available on the 80386/486. Both the source and
destination operands can be given specifically. The source can be any 16- or
32-bit memory operand or general-purpose register. The destination can be
any general-purpose register of the same size. The overflow and carry flags
are set if the product does not fit in the destination.



IN
Input from Port

Transfers a byte or word (or doubleword on the 80386/486) from a port to the
accumulator register. The port address is specified by the source operand,
which can be DX or an 8-bit constant. Constants can only be used for port
numbers less than 255; use DX for higher port numbers. In protected mode, a
general-protection fault occurs if IN is used when the current privilege
level is greater than the value of the IOPL flag.



INC
Increment

Adds 1 to the destination operand. Because the operand is treated as an
unsigned integer, the INC instruction does not affect the carry flag. If a
signed carry requires detection, use the ADD instruction.



INS/INSB/INSW/INSD
Input from Port to String
80186-80486 Only

Receives a string from a port. The string is considered the destination and
must be pointed to by ES:DI (even if an operand is given). The input port is
specified in DX. For each element received, DI is adjusted according to the
size of the operand and the status of the direction flag. DI is increased if
the direction flag has been cleared with CLD or decreased if the direction
flag has been set with STD.

If the INS form of the instruction is used, a destination operand must be
provided to indicate the size of the data elements to be processed and DX
must be specified as the source operand containing the port number. A
segment override is not allowed. If INSB (bytes), INSW (words), or INSD
(doublewords on the 80386/486 only) is used, the instruction determines the
size of the data elements to be received.

INS and its variations are normally used with the REP prefix. Before the
repeated instruction is executed, CX should contain the number of elements
to be received. In protected mode, a general-protection fault occurs if INS
is used when the current privilege level is greater than the value of the
IOPL flag.



INT
Interrupt

Generates a software interrupt. An 8-bit constant operand (0 to 255)
specifies the interrupt procedure to be called. The call is made by indexing
the interrupt number into the Interrupt Descriptor Table (IDT) starting at
segment 0, offset 0. In real mode, the IDT contains 4-byte pointers to
interrupt procedures. In privileged mode, the IDT contains 8-byte pointers.

When an interrupt is called in real mode, the flags, CS, and IP are pushed
onto the stack (in that order) and the trap and interrupt flags are cleared.
STI can be used to restore interrupts. See Intel documentation and the
documentation for your operating system for details on using and defining
interrupts in privileged mode. To return from an interrupt, use the IRET
instruction.



INTO
Interrupt on Overflow

Generates interrupt 4 if the overflow flag is set. The default DOS behavior
for interrupt 4 is to return without taking any action. You must define an
interrupt procedure for interrupt 4 in order for INTO to have any effect.



INVD
Invalidate Data Cache
80486 Only

Empties contents of the current data cache without writing changes to
memory. Proper use of this instruction requires knowledge of how contents
are placed in the cache. INVD is intended primarily for systems programming.
See Intel documentation for details.



INVLPG
Invalidate TLB Entry
80486 Only

Invalidates an entry in the Translation Lookaside Buffer (TLB), used by the
demand-paging mechanism for OS/2 and other virtual-memory systems. The
instruction takes a single memory operand and calculates the effective
address of the operand, including the segment address. If the resulting
address is mapped by any entry in the TLB, this entry is removed. Proper use
of INVLPG requires understanding the hardware-supported demand-paging
mechanism. INVLPG is intended primarily for systems programming. See Intel
documentation for details.



IRET/IRETD
Interrupt Return

Returns control from an interrupt procedure to the interrupted code. In real
mode, the IRET instruction pops IP, CS, and the flags (in that order) and
resumes execution. See Intel documentation for details on IRET operation in
privileged mode. On the 80386/486, the IRETD instruction should be used to
pop a 32-bit instruction pointer when returning from an interrupt called
from a 32-bit segment. The F suffix prevents epilogue code from being
generated when ending a PROC block. Use it to terminate interrupt service
procedures.



Jcondition
Jump Conditionally

Transfers execution to the specified label if the flags condition is true.
The condition is tested by checking the flags shown in the table on the
following page. If the condition is false, no jump is taken and program
execution continues at the next instruction. On the 8086-80286 processors,
the label given as the operand must be short (between -128 and +127 bytes
from the instruction following the jump).* The 80386/486 processors allow
near jumps (-32,768 to +32,767 bytes). On the 80386/486, the assembler
generates the shortest jump possible, unless the jump size is explicitly
specified.

When the 80386/486 processors are in FLAT memory model, short jumps range
from -128 to +127 bytes and near jumps range from -2 to +2 gigabytes. There
are no far jumps.



JMP
Jump Unconditionally

Transfers program execution to the address specified by the destination
operand. Jumps are near (between -32,768 and +32,767 bytes from the
instruction following the jump), or short (between -128 and +127 bytes), or
far (in a different code segment). Unless a distance is explicitly
specified, the assembler selects the shortest possible jump. With near and
short jumps, the operand specifies a new IP address. With far jumps, the
operand specifies new IP and CS addresses.

When the 80386/486 processors are in FLAT memory model, short jumps range
from -128 to +127 bytes and near jumps range from -2 to +2 gigabytes.



LAHF
Load Flags into AH Register

Transfers bits 0 to 7 of the flags register to AH. This includes the carry,
parity, auxiliary carry, zero, and sign flags, but not the trap, interrupt,
direction, or overflow flags.



LAR
Load Access Rights
80286-80486 Protected Only

Loads the access rights of a selector into a specified register. The source
operand must be a register or memory operand containing a selector. The
destination operand must be a register that will receive the access rights
if the selector is valid and visible at the current privilege level. The
zero flag is set if the access rights are transferred, or cleared if they
are not. See Intel documentation for details on selectors, access rights,
and other privileged-mode concepts.



LDS/LES/LFS/LGS/LSS
Load Far Pointer

Reads and stores the far pointer specified by the source memory operand. The
instruction moves the pointer's segment value into DS, ES, FS, GS, or SS
(depending on the instruction). Then it moves the pointer's offset value
into the destination operand. The LDS and LES instructions are available on
all processors. The LFS, LGS, and LSS instructions are available only on the
80386/486.



LEA
Load Effective Address

Calculates the effective address (offset) of the source memory operand and
stores the result in the destination register.

If the source operand is a direct memory address, the assembler encodes the
instruction in the more efficient  MOV reg,immediate  form (equivalent to
MOV reg, OFFSET mem).



LEAVE
High Level Procedure Exit
80186-80486 Only

Terminates the stack frame of a procedure. LEAVE reverses the action of a
previous ENTER instruction by restoring SP and BP to the values they had
before the procedure stack frame was initialized. LEAVE is equivalent to mov
sp,bp, followed by pop bp.



LES/LFS/LGS
Load Far Pointer to Extra Segment
See LDS.



LGDT/LIDT/LLDT
Load Descriptor Table
80286-80486 Privileged Only

Loads a value from an operand into a descriptor table register. LGDT loads
into the Global Descriptor Table, LIDT into the Interrupt Descriptor Table,
and LLDT into the Local Descriptor Table. These instructions are available
only in privileged mode. See Intel documentation for details on descriptor
tables and other protected-mode concepts.



LMSW
Load Machine Status Word
80286-80486 Privileged Only

Loads a value from a memory operand into the Machine Status Word (MSW). This
instruction is available only in privileged mode. See Intel documentation
for details on the MSW and other protected-mode concepts.



LOCK
Lock the Bus

Locks out other processors during execution of the next instruction. This
instruction is a prefix. It must precede an instruction that accesses a
memory location that another processor might attempt to access at the same
time. See Intel documentation for details on multiprocessor environments.



LODS/LODSB/
LODSW/LODSD
Load String Operand

Loads a string from memory into the accumulator register. The string to be
loaded is the source and must be pointed to by DS:SI (even if an operand is
given). For each source element loaded, SI is adjusted according to the size
of the operands and the status of the direction flag. SI is increased if the
direction flag has been cleared with CLD or decreased if the direction flag
has been set with STD.

If the LODS form of the instruction is used, an operand must be provided to
indicate the size of the data elements to be processed. A segment override
can be given. If LODSB (bytes), LODSW (words), or LODSD (doublewords on the
80386/486 only) is used, the instruction determines the size of the data
elements to be processed and whether the element will be loaded to AL, AX,
or EAX.

LODS and its variations are not normally used with repeat prefixes, since
there is no reason to repeatedly load memory values to a register.



LOOP/LOOPW/LOOPD
Loop

Loops repeatedly to a specified label. LOOP decrements CX (without changing
any flags) and, if the result is not 0, transfers execution to the address
specified by the operand. On the 80386/486, LOOP uses the 16-bit CX in
16-bit mode and the 32-bit ECX in 32-bit mode. The default can be overridden
with LOOPW (CX) or LOOPD (ECX). If CX is 0 after being decremented,
execution continues at the next instruction. The operand must specify a
short label (between -128 and +127 bytes from the instruction following the
LOOP instruction).



LOOPcondition
LOOPconditionW
LOOPcondition
Loop Conditionally

Loops repeatedly to a specified label if condition is met and if CX is not
0. On the 80386/486, these instructions use the 16-bit CX in
16-bit mode and the 32-bit ECX in 32-bit mode. This default can be
overridden with the W (CX) or D (ECX) forms of the instruction. The
instruction decrements CX (without changing any flags) and tests whether the
zero flag was set by a previous instruction (such as CMP). With LOOPE and
LOOPZ (they are synonyms), execution is transferred to the label if the zero
flag is set and CX is not 0. With LOOPNE and LOOPNZ (they are synonyms),
execution is transferred to the label if the zero flag is cleared and CX is
not 0. Execution continues at the next instruction if the condition is not
met. Before entering the loop, CX should be set to the maximum number of
repetitions desired.



LSL
Load Segment Limit
80286-80486 Protected Only

Loads the segment limit of a selector into a specified register. The source
operand must be a register or memory operand containing a selector. The
destination operand must be a register that will receive the segment limit
if the selector is valid and visible at the current privilege level. The
zero flag is set if the segment limit is transferred, or cleared if it is
not. See Intel documentation for details on selectors, segment limits, and
other protected-mode concepts.



LSS
Load Far Pointer to Stack Segment

See LDS.



LTR
Load Task Register
80286-80486 Privileged Only

Loads a value from the specified operand to the current task register. LTR
is available only in privileged mode. See Intel documentation for details on
task registers and other protected-mode concepts.



MOV
Move Data

Moves the value in the source operand to the destination operand. If the
destination operand is SS, interrupts are disabled until the next
instruction is executed (except on early versions of the 8088 and 8086).



MOV
Move to/from Special Registers
80386/486 Only

Moves a value from a special register to or from a 32-bit general-purpose
register. The special registers include the control registers CR0, CR2, and
CR3; the debug registers DR0, DR1, DR2, DR3, DR6, and DR7; and the test
registers TR6 and TR7. On the 80486, the test registers TR4, TR5, and TR7
are also available. See Intel documentation for details on special
registers.



MOVS/MOVSB/
MOVSW/MOVSD
Move String Data

Moves a string from one area of memory to another. The source string must be
pointed to by DS:SI, and the destination address must be pointed to by ES:DI
(even if operands are given). For each element moved, DI and SI are adjusted
according to the size of the operands and the status of the direction flag.
They are increased if the direction flag has been cleared with CLD, or
decreased if the direction flag has been set with STD.

If the MOVS form of the instruction is used, operands must be provided to
indicate the size of the data elements to be processed. A segment override
can be given for the source operand (but not for the destination). If MOVSB
(bytes), MOVSW (words), or MOVSD (doublewords on the 80386/486 only) is
used, the instruction determines the size of the data elements to be
processed.

MOVS and its variations are normally used with the REP prefix.



MOVSX
Move with Sign-Extend
80386/486 Only

Moves and sign-extends the value of the source operand to the destination
register. MOVSX is used to copy a signed 8-bit or 16-bit source operand to a
larger 16-bit or 32-bit destination register.



MOVZX
Move with Zero-Extend
80386/486 Only

Moves and zero-extends the value of the source operand to the destination
register. MOVZX is used to copy an unsigned 8-bit or
16-bit source operand to a larger 16-bit or 32-bit destination register.



MUL
Unsigned Multiply

Multiplies an implied destination operand by a specified source operand.
Both operands are treated as unsigned numbers. If a single
16-bit operand is given, the implied destination is AX and the product goes
into the DX:AX register pair. If a single 8-bit operand is given, the
implied destination is AL and the product goes into AX. On the 80386/486, if
the operand is EAX, the product goes into the EDX:EAX register pair. The
carry and overflow flags are set if DX is not 0 for 16-bit operands or if AH
is not 0 for 8-bit operands.



NEG
Two's Complement Negation

Replaces the operand with its two's complement. NEG does this by subtracting
the operand from 0. If the operand is 0, the carry flag is cleared.
Otherwise, the carry flag is set. If the operand contains the maximum
possible negative value (-128 for 8-bit operands or -32,768 for 16-bit
operands), the value does not change, but the overflow and carry flags are
set.



NOP
No Operation

Performs no operation. NOP can be used for timing delays or alignment.



NOT
One's Complement Negation

Toggles each bit of the operand by clearing set bits and setting cleared
bits.



OR
Inclusive OR

Performs a bitwise OR operation on the source and destination operands and
stores the result to the destination operand. For each
bit position in the operands, if either or both bits are set, the
corresponding bit of the result it set. Otherwise, the corresponding
bit of the result is cleared.



OUT
Output to Port

Transfers a byte or word (or a doubleword on the 80386/486) to a port from
the accumulator register. The port address is specified by the destination
operand, which can be DX or an 8-bit constant. In protected mode, a
general-protection fault occurs if OUT is used when the current privilege
level is greater than the value of the IOPL flag.



OUTS/OUTSB/
OUTSW/OUTSD
Output String to Port
80186-80486 Only

Sends a string to a port. The string is considered the source and must be
pointed to by DS:SI (even if an operand is given). The output port is
specified in DX. For each element sent, SI is adjusted according to the size
of the operand and the status of the direction flag. SI is increased if the
direction flag has been cleared with CLD or decreased if the direction flag
has been set with STD.

If the OUTS form of the instruction is used, an operand must be provided to
indicate the size of data elements to be sent. A segment override can be
given. If OUTSB (bytes), OUTSW (words), or OUTSD (doublewords on the
80386/486 only) is used, the instruction determines the size of the data
elements to be sent.

OUTS and its variations are normally used with the REP prefix. Before the
instruction is executed, CX should contain the number of elements to send.
In protected mode, a general-protection fault occurs if OUTS is used when
the current privilege level is greater than the value of the IOPL flag.



POP
Pop

Pops the top of the stack into the destination operand. The value at SS:SP
is copied to the destination operand and SP is increased by 2. The
destination operand can be a memory location, a general-purpose 16-bit
register, or any segment register except CS. Use RET to pop CS. On the
80386/486, 32-bit values can be popped by giving a 32-bit operand. ESP is
increased by 4 for 32-bit pops.



POPA/POPAD
Pop All
80186-80486 Only

Pops the top 16 bytes on the stack into the 8 general-purpose registers. The
registers are popped in the following order: DI, SI, BP, SP, BX, DX, CX, AX.
The value for the SP register is actually discarded rather than copied to
SP. POPA always pops into 16-bit registers. On the 80386/486, use POPAD to
pop into 32-bit registers.



POPF/POPFD
Pop Flags

Pops the value on the top of the stack into the flags register. POPF always
pops into the 16-bit flags register. On the 80386/486, use POPFD to pop into
the 32-bit flags register.



PUSH/PUSHW/PUSHD
Push

Pushes the source operand onto the stack. SP is decreased by 2 and the
source value is copied to SS:SP. The operand can be a memory location, a
general-purpose 16-bit register, or a segment register. On the 80186-80486
processors, the operand can also be a constant. On the 80386/486, 32-bit
values can be pushed by specifying a 32-bit operand. ESP is decreased by 4
for 32-bit pushes. On the 8088 and 8086, PUSH SP saves the value of SP after
the push. On the 80186-80486 processors, PUSH SP saves the value of SP
before the push. The PUSHW and PUSHD instructions push a word (2 bytes) and
a doubleword (4 bytes), respectively.



PUSHA/PUSHAD
Push All
80186-80486 Only

Pushes the eight general-purpose registers onto the stack. The registers are
pushed in the following order: AX, CX, DX, BX, SP, BP, SI, DI. The value
pushed for SP is the value before the instruction. PUSHA always pushes
16-bit registers. On the 80386/486, use PUSHAD to push 32-bit registers.



PUSHF/PUSHFD
Push Flags

Pushes the flags register onto the stack. PUSHF always pushes the 16-bit
flags register. On the 80386/486, use PUSHFD to push the 32-bit flags
register.



RCL/RCR/ROL/ROR
Rotate

Rotates the bits in the destination operand the number of times specified in
the source operand. RCL and ROL rotate the bits left; RCR and ROR rotate
right.

ROL and ROR rotate the number of bits in the operand. For each rotation, the
leftmost or rightmost bit is copied to the carry flag as well as rotated.
RCL and RCR rotate through the carry flag. The carry flag becomes an
extension of the operand so that a 9-bit rotation is done for 8-bit
operands, or a 17-bit rotation for 16-bit operands.

On the 8088 and 8086, the source operand can be either CL or 1. On the
80186-80486, the source operand can be CL or an 8-bit constant. On the
80186-80486, rotate counts larger than 31 are masked off, but on the 8088
and 8086, larger rotate counts are performed despite the inefficiency
involved. The overflow flag is only modified by single-bit variations of the
instruction; for multiple-bit variations, it is undefined.



REP
Repeat String

Repeats a string instruction the number of times indicated by CX. First, CX
is compared to zero; if it equals zero, execution proceeds to the next
instruction. Otherwise, CX is decremented, the string instruction is
performed, and the loop continues with CX being compared to zero. REP is
used with MOVS and STOS. REP can also be used with INS and OUTS on the
80186-80486 processors. On all processors except the 80386/486, combining a
repeat prefix with a segment override can cause errors if an interrupt
occurs.



REPcondition
Repeat String Conditionally

Repeats a string instruction as long as condition is true and the maximum
count has not been reached. REPE and REPZ (they are synonyms) repeat while
the zero flag is set. REPNE and REPNZ (they are synonyms) repeat while the
zero flag is cleared. The conditional-repeat prefixes should only be used
with SCAS and CMPS, since these are the only string instructions that modify
the zero flag. Before executing the instruction, CX should be set to the
maximum allowable number of repetitions. First, CX is compared to zero; if
it equals zero, execution proceeds to the next instruction. Otherwise, CX is
decremented, the string instruction is performed, and the loop continues
with CX being compared to zero. On all processors except the 80386/486,
combining a repeat prefix with a segment override may cause errors if an
interrupt occurs during a string operation.



RET/RETN/RETF
Return from Procedure

Returns from a procedure by transferring control to an address popped from
the top of the stack. A constant operand can be given indicating the number
of additional bytes to release. The constant is normally used to adjust the
stack for arguments pushed before the procedure was called. The size of a
return (near or far) is the size of the procedure in which the RET is
defined with the PROC directive. RETN can be used to specify a near return;
RETF can specify a far return. A near return pops a word into IP. A far
return pops a word into IP and then pops a word into CS. After the return,
the number of bytes given in the operand (if any) is added to SP.



ROL/ROR
Rotate

See RCL/RCR.



SAHF
Store AH into Flags

Transfers AH into bits 0 to 7 of the flags register. This includes the
carry, parity, auxiliary carry, zero, and sign flags, but not the trap,
interrupt, direction, or overflow flags.



SAL/SAR
Shift

See SHL/SHR/SAL/SAR.



SBB
Subtract with Borrow

Adds the carry flag to the second operand, then subtracts that value from
the first operand. This result is assigned to the first operand. SBB is used
to subtract the least significant portions of numbers that must be processed
in multiple registers.



SCAS/SCASB/
SCASW/SCASD
Scan String Flags

Scans a string to find a value specified in the accumulator register. The
string to be scanned is considered the destination and must be pointed to by
ES:DI (even if an operand is specified). For each element, the destination
element is subtracted from the accumulator value and the flags are updated
to reflect the result (although the result is not stored). DI is adjusted
according to the size of the operands and the status of the direction flag.
DI is increased if the direction flag has been cleared with CLD or decreased
if the direction flag has been set with STD.

If the SCAS form of the instruction is used, an operand must be provided to
indicate the size of the data elements to be processed. No segment override
is allowed. If SCASB (bytes), SCASW (words), or SCASD (doublewords on the
80386/486 only) is used, the instruction determines the size of the data
elements to be processed and whether the element scanned for is in AL, AX,
or EAX.

SCAS and its variations are normally used with repeat prefixes. REPNE (or
REPNZ) is used to find the first match of the accumulator value. REPE (or
REPZ) is used to find the first nonmatch. Before the comparison, CX should
contain the maximum number of elements to compare. After a REPNE SCAS, the
zero flag will be cleared if no match was found. After a REPE SCAS, the zero
flag will be set if no nonmatch was found. Otherwise, ES:DI will point to
the element past the first match or nonmatch.



SETcondition
Set Conditionally
80386/486 Only

Sets the byte specified in the operand to 1 if condition is true or to 0 if
condition is false. The condition is tested by checking the flags shown in
the table on the following page. The instruction is used to set Boolean
flags conditionally.



SGDT/SIDT/SLDT
Store Descriptor Table
80286-80486 Only

Stores a descriptor table register into a specified operand. SGDT stores the
Global Descriptor Table; SIDT, the Interrupt Descriptor Table; and SLDT, the
Local Descriptor Table. These instructions are generally useful only in
privileged mode. See Intel documentation for details on descriptor tables
and other protected-mode concepts.


SHL/SHR/SAL/SAR
Shift

Shifts the bits in the destination operand the number of times specified by
the source operand. SAL and SHL shift the bits left; SAR and SHR shift
right.

With SHL, SAL, and SHR, the bit shifted off the end of the operand is copied
into the carry flag and the leftmost or rightmost bit opened by the shift is
set to 0. With SAR, the bit shifted off the end of the operand is copied
into the carry flag and the leftmost bit opened by
the shift retains its previous value (thus preserving the sign of the
operand). SAL and SHL are synonyms.

On the 8088 and 8086, the source operand can be either CL or 1. On the
80186-80486 processors, the source operand can be CL or an 8-bit constant.
On the 80186-80486 processors, shift counts larger than 31 are masked off,
but on the 8088 and 8086, larger shift counts are performed despite the
inefficiency involved. The overflow flag is only modified by single-bit
variations of the instruction; for multiple-bit variations, it is undefined.



SHLD/SHRD
Double Precision Shift
80386/486 Only

Shifts the bits of the second operand into the first operand. The number of
bits shifted is specified by the third operand. SHLD shifts the first
operand to the left by the number of positions specified in the count. The
positions opened by the shift are filled by the most significant bits of the
second operand. SHRD shifts the first operand to the right by the number of
positions specified in the count. The positions opened by the shift are
filled by the least significant bits of the second operand. The count
operand can be either CL or an 8-bit constant. If a shift count larger than
31 is given, it is adjusted by using the remainder (modulus) of a division
by 32.



SMSW
Store Machine Status Word
80286-80486 Only

Stores the Machine Status Word (MSW) into a specified memory operand. SMSW
is generally useful only in protected mode. See Intel documentation for
details on the MSW and other protected-mode concepts.



STC
Set Carry Flag

Sets the carry flag.



STD
Set Direction Flag

Sets the direction flag. All subsequent string instructions will process
down (from high addresses to low addresses).



STI
Set Interrupt Flag

Sets the interrupt flag. When the interrupt flag is set, maskable interrupts
are recognized. If interrupts were disabled by a previous CLI instruction,
pending interrupts will not be executed immediately; they will be executed
after the instruction following STI.



STOS/STOSB/
STOSW/STOSD
Store String Data

Stores the value in the accumulator in a string. The string to be filled is
the destination and must be pointed to by ES:DI (even if an operand is
given). For each source element loaded, DI is adjusted according to the size
of the operands and the status of the direction flag. DI is increased if the
direction flag has been cleared with CLD or decreased if the direction flag
has been set with STD.

If the STOS form of the instruction is used, an operand must be provided to
indicate the size of the data elements to be processed. No segment override
is allowed. If STOSB (bytes), STOSW (words), or STOSD (doublewords on the
80386/486 only) is used, the instruction determines the size of the data
elements to be processed and whether the element comes from AL, AX, or EAX.

STOS and its variations are often used with the REP prefix. Before the
repeated instruction is executed, CX should contain the number of elements
to store.



STR
Store Task Register
80286-80486 Only

Stores the current task register to the specified operand. This instruction
is generally useful only in privileged mode. See Intel documentation for
details on task registers and other protected-mode concepts.


SUB
Subtract

Subtracts the source operand from the destination operand and stores the
result in the destination operand.



TEST
Logical Compare

Tests specified bits of an operand and sets the flags for a subsequent
conditional jump or set instruction. One of the operands contains the value
to be tested. The other contains a bit mask indicating the bits to be
tested. TEST works by doing a bitwise AND operation on the source and
destination operands. The flags are modified according to the result, but
the destination operand is not changed. This instruction is the same as the
AND instruction, except the result is not stored.



VERR/VERW
Verify Read or Write
80286-80486 Protected Only

Verifies that a specified segment selector is valid and can be read or
written to at the current privilege level. VERR verifies that the selector
is readable. VERW verifies that the selector can be written to. If the
segment is verified, the zero flag is set. Otherwise, the zero flag is
cleared.



WAIT
Wait

Suspends processor execution until the processor receives a signal that a
coprocessor has finished a simultaneous operation. It should be used to
prevent a coprocessor instruction from modifying a memory location that is
being modified simultaneously by a processor instruction. WAIT is the same
as the coprocessor FWAIT instruction.



WBINVD
Write Back and Invalidate Data Cache
80486 Only

Empties the contents of the current data cache but first writes changes to
memory. Proper use of this instruction requires knowledge of how contents
are placed in the cache. WBINVD is intended primarily for systems
programming. See Intel documentation for details.



XADD
Exchange and Add
80486 Only

Adds the source and destination operands and stores the sum in the
destination; simultaneously, the original value of the destination is moved
to the source. The instruction sets flags according to the result of the
addition.



XCHG
Exchange

Exchanges the values of the source and destination operands.



XLAT/XLATB
Translate

Translates a value from one coding system to another by looking up the value
to be translated in a table stored in memory. Before the instruction is
executed, BX should point to a table in memory and AL should contain the
unsigned position of the value to be translated from the table. After the
instruction, AL contains the table value with the specified position. No
operand is required, but one can be given in order to specify a segment
override. DS is assumed unless a segment override is given. XLATB is a
synonym for XLAT. Either version allows an operand, but neither requires
one.



XOR
Exclusive OR

Performs a bitwise exclusive OR operation on the source and destination
operands and stores the result in the destination. For each bit position in
the operands, if both bits are set or if both bits are cleared, the
corresponding bit of the result is cleared. Otherwise, the corresponding bit
of the result is set.




Coprocessor


Topical Cross-Reference for Coprocessor


Load
FLD/FILD/FBLD
FXCH
FLDCW
FLDENV
FRSTOR


Store Data
FST/FIST
FSTP/FISTP/FBSTP
FSTCW/FNSTCW
FSTSW/FNSTSW
FSAVE/FNSAVE
FSTENV/FNSTENV


Load Constant
FLD1
FLDL2E
FLDL2T
FLDLG2
FLDLN2
FLDPI
FLDZ


Arithmetic
FADD/FIADD
FADDP
FSUB/FISUB
FSUBP
FSUBR/FISUBR
FSUBRP
FMUL/FIMUL
FMULP
FSCALE
FDIV/FIDIV
FDIVP
FDIVR/FIDIVR
FDIVRP
FABS
FCHS
FRNDINT
FSQRT
FPREM
FPREM1
FXTRACT


Transcendental
FPTAN
FPATAN
FSIN
FCOS
FSINCOS
F2XM1
FYL2X
FYL2P1
FPREM
FPREM1


Compare
FCOM/FICOM
FCOMP/FICOMP
FCOMPP
FUCOM
FUCOMP
FUCOMPP
FTST
FXAM
FSTSW/FNSTSW


Processor Control
FINIT/FNINIT
FFREE
FNOP
FWAIT
FDECSTP
FINCSTP
FCLEX/FNCLEX
FSETPM
FDISI/FNDISI*
FENI/FNENI*
FSAVE/FNSAVE
FLDCW
FRSTOR
FSTCW/FNSTCW
FSTSW/FNSTSW
FSTENV/FNSTENV



Interpreting  Coprocessor Instructions

This section provides an alphabetical reference to instructions of the 8087,
80287, and 80387 coprocessors. The format is the same as the processor
instructions except that encodings are not provided. Differences are noted
below.
The 80486 has the coprocessor built in. This one chip executes all the
instructions listed in the previous section and this section.


Syntax
Syntaxes in Column 1 use the following abbreviations for operand types:

reg
A coprocessor stack register

memreal
A direct or indirect memory operand storing a real number

memint
A direct or indirect memory operand storing a binary integer

membcd
A direct or indirect memory operand storing a BCD number


Examples
The position of the examples in Column 2 is not related to the clock speeds
in Column 3.


Clock Speeds
Column 3 shows the clock speeds for each processor. Sometimes an instruction
may have more than one possible clock speed. The following abbreviations are
used to specify variations:

EA
Effective address. This applies only to the 8087. See the Processor Section,
"Timings on the 8088 and 8086 Processors," for an explanation of effective
address timings.

s,l,t
Short real, long real, and 10-byte temporary real.

w,d,q
Word, doubleword, and quadword binary integer.

to,fr
To or from stack top. On the 80387 and 80486, the to clocks represent
timings when ST is the destination. The fr clocks represent timings when ST
is the source.



Instruction Size
The instruction size is always two bytes for instructions that do not access
memory. For instructions that do access memory, the size is four bytes on
the 8087 and 80287. On the 80387 and 80486, the size for instructions that
access memory is four bytes in 16-bit mode or six bytes in 32-bit mode.
On the 8087, each instruction must be preceded by the WAIT (also called
FWAIT) instruction, thereby increasing the instruction's size by one byte.
The assembler inserts WAIT automatically by default, or with the .8087
directive.


Architecture
The 8087, 80287, and 80387 coprocessors, along with the 80486, have several
elements of architecture in common. All have a register stack made up of
eight 80-bit data registers. These can contain floating-point numbers in the
temporary real format. The coprocessors also have 14 bytes of control
registers. Figure 2 shows the format of registers.

The most important control registers are the control word and the status
word. Figure 3 shows the format of these registers.



Coprocessor Instructions



F2XM1
2X-1

Calculates Y = 2X - 1. X is taken from ST. The result, Y, is returned in ST.
X must be in the range 0  X  0.5 on the 8087/287, or in the range -1.0  X
+1.0 on the 80387/486.



FABS
Absolute Value

Converts the element in ST to its absolute value.



FADD/FADDP/FIADD
Add

Adds the source to the destination and returns the sum in the destination.
If two register operands are specified, one must be ST. If a memory operand
is specified, the sum replaces the value in ST. Memory operands can be 32-
or 64-bit real numbers or 16- or 32-bit integers. If no operand is
specified, ST is added to ST(1) and the stack is popped, returning the sum
in ST. For FADDP, the source must be ST; the sum is returned in the
destination and ST is popped.



FBLD
Load BCD

See FLD.



FBSTP
Store BCD and Pop

See FST.



FCHS
Change Sign

Reverses the sign of the value in ST.



FCLEX/FNCLEX
Clear Exceptions

Clears all exception flags, the busy flag, and bit 7 in the status word. Bit
7 is the interrupt-request flag on the 8087 and the error-status flag on the
80287, 80387, and 80486. The instruction has wait and no-wait versions.



FCOM/FCOMP/FCOMPP/
FICOM/FICOMPCompare

Compares the specified source operand to ST and sets the condition codes of
the status word according to the result. The instruction subtracts the
source operand from ST without changing either operand. Memory operands can
be 32- or 64-bit real numbers or 16- or 32-bit integers. If no operand is
specified or if two pops are specified, ST is compared to ST(1) and the
stack is popped. If one pop is specified with an operand, the operand is
compared to ST. If one of the operands is a NAN, an invalid-operation
exception occurs (see FUCOM for an alternative method of comparing on the
80387/486).



FCOS
Cosine

80387/486 Only
Replaces a value in radians in ST with its cosine. If |ST| < 263, the C2 bit
of the status word is cleared and the cosine is calculated. Otherwise, C2 is
set and no calculation is performed. ST can be reduced to the required range
with FPREM or FPREM1.
* For operands with an absolute value greater than /4, up to 76 additional
clocks may be required.
    For operands with an absolute value greater than /4, add n clocks where  n
= operand/(/4).



FDECSTP
Decrement Stack Pointer

Decrements the stack-top pointer in the status word. No tags or registers
are changed, and no data is transferred. If the stack pointer is 0, FDECSTP
changes it to 7.



FDISI/FNDISI
Disable Interrupts
8087 Only

Disables interrupts by setting the interrupt-enable mask in the control
word. This instruction has wait and no-wait versions. Since the 80287,
80387, and 80486 do not have an interrupt-enable mask, the instruction is
recognized but ignored on these coprocessors.



FDIV/FDIVP/FIDIV
Divide

Divides the destination by the source and returns the quotient in the
destination. If two register operands are specified, one must be ST. If a
memory operand is specified, the quotient replaces the value in ST. Memory
operands can be 32- or 64-bit real numbers or 16- or 32-bit
integers. If no operand is specified, ST(1) is divided by ST and the stack
is popped, returning the result in ST. For FDIVP, the source must be ST; the
quotient is returned in the destination register and ST is popped.



FDIVR/FDIVRP/FIDIVR
Divide Reversed

Divides the source by the destination and returns the quotient in the
destination. If two register operands are specified, one must be ST. If a
memory operand is specified, the quotient replaces the value in ST. Memory
operands can be 32- or 64-bit real numbers or 16- or 32-bit
integers. If no operand is specified, ST is divided by ST(1) and the stack
is popped, returning the result in ST. For FDIVRP, the source must be ST;
the quotient is returned in the destination register and ST is popped.



FENI/FNENI
Enable Interrupts
8087 Only

Enables interrupts by clearing the interrupt-enable mask in the control
word. This instruction has wait and no-wait versions. Since the 80287,
80387, and 80486 do not have an interrupt-enable mask, the instruction is
recognized but ignored on these coprocessors.



FFREE
Free Register

Changes the specified register's tag to empty without changing the contents
of the register.



FIADD/FISUB/FISUBR/
FIMUL/FIDIV/FIDIVR
Integer Arithmetic

See FADD, FSUB, FSUBR, FMUL, FDIV, and FDIVR.



FICOM/FICOMP
Compare Integer

See FCOM.



FILD
Load Integer

See FLD.



FINCSTP
Increment Stack Pointer

Increments the stack-top pointer in the status word. No tags or registers
are changed, and no data is transferred. If the stack pointer is 7, FINCSTP
changes it to 0.



FINIT/FNINIT
Initialize Coprocessor

Initializes the coprocessor and resets all the registers and flags to their
default values. The instruction has wait and no-wait versions. On the
80387/486, the condition codes of the status word are cleared. On the
8087/287, they are unchanged.



FIST/FISTP
Store Integer

See FST.



FLD/FILD/FBLD
Load

Pushes the specified operand onto the stack. All memory operands are
automatically converted to temporary-real numbers before being loaded.
Memory operands can be 32-, 64-, or 80-bit real numbers or 16-, 32-, or
64-bit integers.



FLD1/FLDZ/FLDPI/FLDL2E/
FLDL2T/FLDLG2/FLDLN2
Load Constant

Pushes a constant onto the stack.


FLDCW
Load Control Word

Loads the specified word into the coprocessor control word. The format of
the control word is shown in the "Interpreting Coprocessor Instructions"
section.



FLDENV/FLDENVW/FLDENVD
Load Environment State

Loads the 14-byte coprocessor environment state from a specified memory
location. The environment includes the control word, status word, tag word,
instruction pointer, and operand pointer. On the 80387/486 in 32-bit mode,
the environment state is 28 bytes.



FMUL/FMULP/FIMUL
Multiply

Multiplies the source by the destination and returns the product in the
destination. If two register operands are specified, one must be ST. If a
memory operand is specified, the product replaces the value in ST. Memory
operands can be 32- or 64-bit real numbers or 16- or 32-bit integers. If no
operand is specified, ST(1) is multiplied by ST and the stack is popped,
returning the product in ST. For FMULP, the source must be ST; the product
is returned in the destination register and ST is popped.



FNinstruction
No-Wait Instructions

Instructions that have no-wait versions include FCLEX, FDISI, FENI, FINIT,
FSAVE, FSTCW, FSTENV, and FSTSW. Wait versions of instructions check for
unmasked numeric errors; no-wait versions do not. When the .8087 directive
is used, the assembler puts a WAIT instruction before the wait versions and
a NOP instruction before the no-wait versions.




FNOP
No Operation

Performs no operation. FNOP can be used for timing delays or alignment.



FPATAN
Partial Arctangent

Finds the partial tangent by calculating Z = ARCTAN(Y / X). X is taken from
ST and Y from ST(1). On the 8087/287, Y and X must be in the range 0  Y < X
< . On the 80387/486, there is no restriction on X and Y. X is popped from
the stack and Z replaces Y in ST.



FPREM
Partial Remainder

Calculates the remainder of ST divided by ST(1), returning the result in ST.
The remainder retains the same sign as the original dividend. The
calculation uses the following formula:

Condition Codes for FPREM and FPREM1

C3    C2    C1    C0    Meaning
    ?     1     ?     ?    Incomplete reduction
    0     0     0     0    quotient MOD 8 = 0
    0     0     0     1    quotient MOD 8 = 4
    0     0     1     0    quotient MOD 8 = 1
    0     0     1     1    quotient MOD 8 = 5
    1     0     0     0    quotient MOD 8 = 2
    1     0     0     1    quotient MOD 8 = 6
    1     0     1     0    quotient MOD 8 = 3
    1     0     1     1    quotient MOD 8 = 7



FPREM1
Partial Remainder (IEEE Compatible)
80387/486 Only

Calculates the remainder of ST divided by ST(1), returning the result in ST.
The remainder retains the same sign as the original dividend.



FPTAN
Partial Tangent

Finds the partial tangent by calculating Y / X = TAN(Z). Z is taken from ST.
Z must be in the range 0  Z   / 4 on the 8087/287. On the 80387/486, |Z|
must be less than 263. The result is the ratio Y / X. Y replaces Z, and X is
pushed into ST. Thus, Y is returned in ST(1) and X in ST.



FRNDINT
Round to Integer

Rounds ST from a real number to an integer. The rounding control (RC) field
of the control word specifies the rounding method, as shown in the
introduction to this section.



FRSTOR/FRSTORW/FRSTORD
Restore Saved State

Restores the 94-byte coprocessor state to the coprocessor from the specified
memory location. In 32-bit mode on the 80387/486, the environment state
takes 108 bytes.



FSAVE/FSAVEW/FSAVED
FNSAVE/FNSAVEW/FNSAVED
Save Coprocessor State

Stores the 94-byte coprocessor state to the specified memory location. In
32-bit mode on the 80387/486, the environment state takes 108 bytes. This
instruction has wait and no-wait versions. After the save, the coprocessor
is initialized as if FINIT had been executed.



FSCALE
Scale

Scales by powers of 2 by calculating the function Y = Y * 2X. X is the
scaling factor taken from ST(1), and Y is the value to be scaled from ST.
The scaled result replaces the value in ST. The scaling factor remains in
ST(1). If the scaling factor is not an integer, it will be truncated toward
zero before the scaling.



FSETPM
Set Protected Mode
80287 Only

Sets the 80287 to protected mode. The instruction and operand pointers are
in the protected-mode format after this instruction. On the 80387/486,
FSETPM is recognized but interpreted as FNOP, since the 80386/486 processors
handle addressing identically in real and protected mode.



FSIN
Sine
80387/486 Only

Replaces a value in radians in ST with its sine. If |ST| < 263, the C2 bit
of the status word is cleared and the sine is calculated. Otherwise, C2 is
set and no calculation is performed. ST can be reduced to the required range
with FPREM or FPREM1.



FSINCOS
Sine and Cosine
80387/486 Only

Computes the sine and cosine of a radian value in ST. The sine replaces the
value in ST, and then the cosine is pushed onto the stack. If |ST| < 263,
the C2 bit of the status word is cleared and the sine and cosine are
calculated. Otherwise, C2 is set and no calculation is performed. ST can be
reduced to the required range with FPREM or FPREM1.



FSQRT
Square Root

Replaces the value of ST with its square root. (The square root of -0
is -0.)



FST/FSTP/FIST/FISTP/FBSTP
Store

Stores the value in ST to the specified memory location or register.
Temporary-real values in registers are converted to the appropriate integer,
BCD, or floating-point format as they are stored. With FSTP, FISTP, and
FBSTP, the ST register value is popped off the stack. Memory operands can be
32-, 64-, or 80-bit real numbers for FSTP or 16-, 32-, or 64-bit integers
for FISTP.



FSTCW/FNSTCW
Store Control Word

Stores the control word to a specified 16-bit memory operand. This
instruction has wait and no-wait versions.



FSTENV/FSTENVW/FSTENVD
FNSTENV/FNSTENVW/FNSTENVD
Store Environment State

Stores the 14-byte coprocessor environment state to a specified memory
location. The environment state includes the control word, status word, tag
word, instruction pointer, and operand pointer. On the 80387/486 in 32-bit
mode, the environment state is 28 bytes.



FSTSW/FNSTSW
Store Status Word

Stores the status word to a specified 16-bit memory operand. On the 80287,
80387, and 80486, the status word can also be stored to the processor's AX
register. This instruction has wait and no-wait versions.



FSUB/FSUBP/FISUB
Subtract

Subtracts the source operand from the destination operand and returns the
difference in the destination operand. If two register operands are
specified, one must be ST. If a memory operand is specified, the result
replaces the value in ST. Memory operands can be 32- or 64-bit real numbers
or 16- or 32-bit integers. If no operand is specified, ST is subtracted from
ST(1) and the stack is popped, returning the difference in ST. For FSUBP,
the source must be ST; the difference (destination minus source) is returned
in the destination register and ST is popped.



FSUBR/FSUBRP/FISUBR
Subtract Reversed

Subtracts the destination operand from the source operand and returns the
result in the destination operand. If two register operands are specified,
one must be ST. If a memory operand is specified, the result replaces the
value in ST. Memory operands can be 32- or 64-bit real numbers or 16- or
32-bit integers. If no operand is specified, ST(1) is subtracted from ST and
the stack is popped, returning the difference in ST. For FSUBRP, the source
must be ST; the difference (source minus destination) is returned in the
destination register and ST is popped.



FTST
Test for Zero

Compares ST with +0.0 and sets the condition of the status word according to
the result.

Condition Codes for FTST

C3    C2    C1    C0    Meaning
    0     0     ?     0    ST is positive
    0     0     ?     1    ST is negative
    1     0     ?     0    ST is 0
    1     1     ?     1    ST is not comparable (NAN or projective
infinity)



FUCOM/FUCOMP/FUCOMPP
Unordered Compare
80387/486 Only

Compares the specified source to ST and sets the condition codes of the
status word according to the result. The instruction subtracts the source
operand from ST without changing either operand. Memory operands are not
allowed. If no operand is specified or if two pops are specified, ST is
compared to ST(1). If one pop is specified with an operand, the given
register is compared to ST.

Condition Codes for FUCOM

C3    C2    C1    C0    Meaning
    0     0     ?     0    ST > source
    0     0     ?     1    ST < source
    1     0     ?     0    ST = source
    1     1     ?     1    Unordered



FWAIT
Wait

Suspends execution of the processor until the coprocessor is finished
executing. This is an alternate mnemonic for the processor WAIT instruction.



FXAM
Examine

Reports the contents of ST in the condition flags of the status word.

Condition Codes for FXAM

C3    C2    C1    C0    Meaning
    0     0     0     0    + Unnormal*
    0     0     0     1    + NAN
    0     0     1     0    - Unnormal*
    0     0     1     1    - NAN
    0     1     0     0    + Normal
    0     1     0     1    + Infinity
    0     1     1     0    - Normal
    0     1     1     1    - Infinity
    1     0     0     0    + 0
    1     0     0     1    Empty
    1     0     1     0    - 0
    1     0     1     1    Empty
    1     1     0     0    + Denormal
    1     1     0     1    Empty*
    1     1     1     0    - Denormal
    1     1     1     1    Empty*


* Not used on the 80387/486. Unnormals are not supported by the 80387/486.
Also, the 80387/486 use two codes instead of four to identify empty
registers.



FXCH
Exchange Registers

Exchanges the specified (destination) register and ST. If no operand is
specified, ST and ST(1) are exchanged.



FXTRACT
Extract Exponent and Significand

Extracts the exponent and significand (mantissa) fields of ST. The exponent
replaces the value in ST, and then the significand is pushed onto the stack.



FYL2X
Y log2(X)

Calculates Z = Y log2(X). X is taken from ST and Y from ST(1). The stack is
popped, and the result, Z, replaces Y in ST. X must be in the range 0 < X <
and Y in the range - < Y < .



FYL2XP1
Y log2(X+1)

Calculates Z = Y log2(X + 1). X is taken from ST and Y from ST(1). The stack
is popped once, and the result, Z, replaces Y in ST. X must be in the range
0  |X| < (1 - (2 / 2)). Y must be in the range
- < Y < .
```

{% endraw %}
