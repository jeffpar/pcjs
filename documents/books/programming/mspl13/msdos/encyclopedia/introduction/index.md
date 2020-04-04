---
layout: page
heading: The MS-DOS Encyclopedia
title: "The MS-DOS Encyclopedia: Introduction"
permalink: /documents/books/programming/mspl13/msdos/encyclopedia/introduction/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/introduction/
---

### Introduction

{% raw %}

```none
    The MS-DOS Encyclopedia is the most comprehensive reference work
    available on Microsoft's industry-standard operating system. Written
    for experienced microcomputer users and programmers, it contains
    detailed, version-specific information on all the MS-DOS commands,
    utilities, and system calls, plus articles by recognized experts in
    specialized areas of MS-DOS programming. This wealth of material is
    organized into major topic areas, each with a format suited to its
    content. Special typographic conventions are also used to clarify the
    material.


Organization of the Book

    The MS-DOS Encyclopedia is organized into five major sections, plus
    appendixes. Each section has a unique internal organization;
    explanatory introductions are included where appropriate.

    Section I, The Development of MS-DOS, presents the history of
    Microsoft's standardsetting operating system from its immediate
    predecessors through version 3.2. Numerous photographs, anecdotes, and
    quotations are included.

    Section II, Programming in the MS-DOS Environment, is divided into
    five parts: Structure of MS-DOS, Programming for MS-DOS, Customizing
    MS-DOS, Directions of MS-DOS, and Programming Tools. Each part
    contains several articles by acknowledged experts on these topics. The
    articles include numerous figures, tables, and programming examples
    that provide detail about the subject.

    Section III, User Commands, presents all the MS-DOS internal and
    external commands in alphabetic order, including ANSI.SYS, BATCH,
    CONFIG.SYS, DRIVER.SYS, EDLIN, RAMDRIVE.SYS, and VDISK.SYS. Each
    command is presented in a structure that allows the experienced user
    to quickly review syntax and restrictions on variables; the
    less-experienced user can refer to the detailed discussion of the
    command and its uses.

    Section IV, Programming Utilities, uses the same format as the User
    Commands section to present the Microsoft programming aids, including
    the DEBUG, SYMDEB, and CodeView debuggers. Although some of these
    utilities are supplied only with Microsoft language products and are
    not included on the MS-DOS system or supplemental disks, their use is
    intrinsic to programming for MS-DOS, and they are therefore included
    to create a comprehensive reference.

    Section V, System Calls, documents Interrupts 20H through 27H and
    Interrupt 2FH. The Interrupt 21H functions are listed in individual
    entries. This section, like the User Commands and Programming
    Utilities sections, presents a quick review of usage for the
    experienced user and also provides extensive notes for the less-
    experienced programmer.

    The 15 appendixes provide quick-reference materials, including a
    summary of MS-DOS version 3.3, the segmented (new) .EXE file header
    format, an object file dump utility, and the Intel hexadecimal object
    file format. Much of this material is organized into tables or
    bulleted lists for ease of use.

    The book includes two indexes--one organized by subject and one
    organized by command name or system-call number. The subject index
    provides comprehensive references to the indexed topic; the command
    index references only the major entry for the command or system call.


Program Listings

    The MS-DOS Encyclopedia contains numerous program listings in assembly
    language, C, and QuickBASIC, all designed to run on the IBM PC family
    and compatibles. Most of these programs are complete utilities; some
    are routines that can be incorporated into functioning programs.
    Vertical ellipses are often used to indicate where additional code
    would be supplied by the user to create a more functional program. All
    program listings are heavily commented and are essentially self-
    documenting.

    The programs were tested using the Microsoft Macro Assembler (MASM)
    version 4.0, the Microsoft C Compiler version 4.0, or the Microsoft
    QuickBASIC Compiler version 2.0.

    The functional programs and larger routines are also available on
    disk. Instructions for ordering are on the page preceding this
    introduction and on the mail-in card bound into this volume.


Typography and Terminology

    Because The MS-DOS Encyclopedia was designed for an advanced audience,
    the reader generally will be familiar with the notation and
    typographic conventions used in this volume. However, for ease of use,
    a few special conventions should be noted.

Typographic conventions

    Capital letters are used for MS-DOS internal and external commands in
    text and syntax lines. Capital letters are also used for filenames in
    text.

    Italic font indicates user-supplied variable names, procedure names in
    text, parameters whose values are to be supplied by the user, reserved
    words in the C programming language, messages and return values in
    text, and, occasionally, emphasis.

    A typographic distinction is made between lowercase l and the numeral
    1 in both text and program listings.

    Cross-references appear in the form SECTION NAME: PART NAME,
    COMMAND NAME, OR INTERRUPT NUMBER: Article Name or Function
    Number.

    Color indicates user input and program examples.

Terminology

    Although not an official IBM name, the term PC-DOS in this book means
    the IBM implementation of MS-DOS. If PC-DOS is referenced and the
    information differs from that for the related MS-DOS version, the
    PC-DOS version number is included. To avoid confusion, the term DOS is
    never used without a modifier.

    The names of special function keys are spelled as they are shown on
    the IBM PC keyboard. In particular, the execute key is called Enter,
    not Return. When <Enter> is included in a user-entry line, the user is
    to press the Enter key at the end of the line.

    The common key combinations, such as Ctrl-C and Ctrl-Z, appear in this
    form when the actual key to be pressed is being discussed but are
    written as Control-C, Control-Z, and so forth when the resulting code
    is the true reference. Thus, an article might reference the Control-C
    handler but state that it is activated when the user presses Ctrl-C.

    Unless specifically indicated, hexadecimal numbers are used
    throughout. These numbers are always followed by the designation H (h
    in the code portions of program listings). Ranges of hexadecimal
    values are indicated with a dash--for example, 07-0AH.

    In the printed version of the book, the notation (more) appears
    in italic at the bottom of program listings and tables that
    are continued on the next page. The complete caption or table title
    appears on the first page of a continued element and is designated
    Continued on subsequent pages.

    Book Design by The NBBJ Group, Seattle, Washington

    Cover Design by Greg Hickman

    Principal Typography by Carol L. Luke

    The manuscript for this book was prepared and submitted to Microsoft
    Press in electronic form. Text files were processed and formatted
    using Microsoft Word.

    Text composition by Microsoft Press in Garamond with display in
    Garamond Bold using the Magna composition system and the Linotronic
    300 laser imagesetter.
```

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
