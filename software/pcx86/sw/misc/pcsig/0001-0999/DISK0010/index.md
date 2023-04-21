---
layout: page
title: "PC-SIG Diskette Library (Disk #10)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0010/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0010"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CHASM  (CHEAP ASSEMBLER)"

    CHASM (Cheap Assembler) is a prime weapon for programmers who want to
    learn to program in Assembly language.  The program comes with clearly-
    written documentation and has a tutorial built in for users lacking
    detailed experience with Assembly language.
    
    CHASM is a compiler only and there is no editor included.  You use an
    ASCII word processor to create your source code file, then use CHASM to
    compile it.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHASM.DOC

{% raw %}
```


                                          READ
                                          THIS
                                         BEFORE
                                        PRINTING!!!!

        This document has been formatted in a special way. Virtually all dot
        matrix printers have a condensed mode which prints 132 characters
        across a standard 8 1/2 inch page.  When this file is printed out in
        condensed mode, the resulting printed pages can be cut down to 5 1/2 X
        8 1/2 inches.  The cut pages will fit nicely in the back of your
        DOS manual for storage.

        Typically, you can turn on this mode by sending a special control
        sequence to the printer from BASIC.  For example, you can turn on the
        condensed mode of the IBM/Epson printer with the BASIC statement:
        LPRINT chr$(15).  If your printer has such a condensed mode, turn it
        on now, before printing the rest of this document.























































                                           (tm)
                                      CHASM

                                 Cheap Assembler
                          for the IBM Personal Computer

                                  User's Manual
                    (c) 1985, 1986, 1987, 1989 by David Whitman
                                  Version 4.14
























    David Whitman
    P.O. Box 1157
    North Wales, PA 19454
    (215) 234-4084 (evenings)
























                      Table of Contents


    Why CHASM?.....................................................4
    What can CHASM do?.............................................5
    What WON'T it do?..............................................6
    System Requirements............................................7
    Advanced and Subset CHASM......................................8
    Modifiying CHASM's I/O Defaults................................9
    Syntax........................................................14
    Labels........................................................16
    Operands......................................................19
    Operand Expressions...........................................25
    Resolution of Ambiguities.....................................28
    Pseudo-Operations.............................................32
    Macros........................................................41
    Structures....................................................51
    8087 Support..................................................55
    Outside the Program Segment...................................57
    Running CHASM.................................................58
    Error and Diagnostic Messages.................................62
    Execution of Assembled Programs...............................67
    Notes for Those Upgrading to This Version of CHASM............79
    Miscellaneous and A Word From Our Sponsor.....................83
    Appendix A: 8088 Mnemonic List................................88
    Appendix B: 8087 Mnemonic List................................90
    Appendix C: Differences Between CHASM and TOA.................91
    Appendix D: Description of Files..............................95
    Appendix E: Bug Reporting Procedure...........................96
    Appendix F: Using CHASM on "Compatible" Systems...............97
    Advanced Version Order Form...................................99
    Index........................................................103

































    `.PGNO01
    >>Why CHASM?<<

    Why go to the trouble to write an assembler, when one already
    exists?  The IBM Macro Assembler is a very powerful software tool
    available off the shelf.  It supports features such as macros,
    multiple segments, and linking to external procedures.

    Unfortunately, the cost of all this power is complexity. The
    Macro Assembler is so complicated that IBM warns beginners it is
    only suitable for "experienced assembly language programmers".

    For most users, this sophistication is more of a hindrance than
    an aid.  Even when writing short, simple programs, the user is
    saddled with a set of confusing pseudo-ops only appropriate for
    large, multi-segment programs.  Producing a fast loading
    executable file requires running three separate programs (MASM,
    LINK and EXE2BIN) before you can get down to testing.

    The macro assembler is totally unsuitable for use with BASIC.
    Although it is *possible* to produce machine language BASIC
    subroutines with the Macro Assembler, the process is incredibly
    convoluted and confusing.

    To top it all off, the Macro Assembler costs an overpriced $125.

    CHASM is, I hope, a more reasonable compromise between power and
    accessibility.  CHASM is simple to use and understand.  Unlike
    the Macro Assembler, CHASM doesn't require a second LINK step to
    produce a working program.  CHASM also produces fast loading
    programs without the use of the utility EXE2BIN.

    CHASM supports several different simple mechanisms for getting
    machine language routines into BASIC and Turbo Pascal versions 2
    and 3. (Turbo Pascal versions 4 and higher require OBJ files,
    which CHASM does not support.  For use with Turbo 4 or later, use
    the Turbo Assembler, or MASM.)

    Finally, the suggested payment for CHASM is a modest $40.

    A Note for Beginners:

    Before going on, you might find it useful to print and read the
    file PRIMER.DOC, included on your CHASM disk.  PRIMER is a gentle
    introduction to assembly language, which will teach you some of
    the vocabulary and key concepts you will need to start out with.




















































































                                                                    6

    >>What can CHASM do?<<

    CHASM is a tool for translating assembly language into the native
    machine language of the 8088 microprocessor.  Using CHASM, you
    can write down easy to remember "mnemonics" which are then
    converted into the relatively incomprehensible series of ones and
    zeros that your PC prefers to work with.

    In addition to simple mnemonic translation (such as provided by
    the mini-assembler in DEBUG), CHASM provides a great many
    "convenience" features which make writing machine language much
    easier.

    CHASM allows you to define labels for branching, rather than
    requiring you to figure out offsets or addresses to jump to.
    CHASM also lets you give symbolic names to any constants or
    memory locations you use, to make your program easier to
    understand.

    You can instruct CHASM to make your file "BLOADable" so that
    BASIC can load it as a subroutine.   A utility is also provided
    to convert machine language into BASIC "DATA" statements, so that
    BASIC can "POKE" routines into memory.  Similarly, for Turbo
    Pascal, CHASM can produce external procedures and functions, or a
    file of Turbo "INLINE" statements.

    CHASM has intelligent error and diagnostic messages which guide
    you in correcting mistakes and ambiguities in your program.  A
    nicely formatted listing is produced during assembly, to help
    during debugging.

    In general, CHASM is designed to eliminate much of the confusion
    and dirty work involved in writing machine language for the IBM
    PC.

    Using CHASM, you can produce:

       1. Lightning fast "stand-alone" programs.

       2. Machine language subroutines for BASIC programs, both
          interpreted and compiled.

       3. Machine language procedures and functions for Turbo Pascal
         versions 2 and 3.




















                                                                    7

    >>What WON'T it do?<<

    In the interest of simplicity, CHASM has the following
    restrictions:

    1. Multiple segment definitions are not allowed. CHASM assumes
       that your entire program fits in one segment, that the cs, ds,
       and es registers all point to this same segment, and that the
       ss register points to a valid stack area.  An equivalent
       statement is that CHASM produces COM files, not EXE files.

    2. Linking to Microsoft or Borland languages is not supported.
       You can't use CHASM to produce object modules for use with
       IBM/Microsoft Pascal or FORTRAN, or Borland Turbo Pascal
       version 4 or later.

















































                                                                    8

    >>System Requirements<<

    Minimum system requirements to use CHASM are:

         IBM PC or true compatible (must emulate IBM BIOS)
         128K of memory            (some systems need 192K)
         1 disk drive
         80 column display
         DOS 2.0 or later.

    Note the DOS 2 requirement.  To provide *true* DOS 2 support, it
    was necessary to give up DOS 1 compatibility.  If you're still
    using DOS 1, you'll need to upgrade to DOS 2.0 or later to use
    CHASM.

    IBM PCjrs, and some compatibles seem to require 192K of memory.
    In general, adding more memory will allow you to assemble larger
    programs.  CHASM can take advantage of all available memory, up
    to a megabyte.

    CHASM will run faster if your source files and object files are
    on a hard disk or RAM disk.

    If you have a non-IBM computer, please read about the /VIDEO
    switch in "Modifying CHASM's I/O Defaults" and also the appendix
    titled "Using CHASM on Compatible Systems"






































                                                                    9

    >>Advanced and Subset CHASM<<

    CHASM is available in two flavors, Advanced and Subset.
    The two versions vary in their capabilities and method of
    distribution.

    The subset version is the budget release.  It may be freely
    copied by individuals as "user-supported" software, and is
    available from user groups and bulletin boards across the
    country.  Every time the subset runs, it prints a banner page
    suggesting a payment of $40 to the author.  As its name
    suggests, Subset CHASM does not support all the features of
    Advanced CHASM.

    Advanced CHASM is the deluxe release.  It runs twice as fast, and
    has a number of features not supported by the subset:

          macros
          conditional assembly
          8087 support
          include files
          structures

    Advanced CHASM is only available directly from Whitman Software.
    Users who make the suggested $40 payment receive an upgrade to
    Advanced CHASM.  Details, and an order blank are given at the
    end of this document.

    Throughout this document, features supported only by the
    advanced version will be marked as follows:

      ==>Advanced version only.

    Attempts to use these features in the subset version will
    generally result in error messages, with the advanced feature
    otherwise being ignored; however, unpredictable behavior could
    result in some instances.



























                                                                   10

    >>Modifying CHASM's I/O Defaults<<

    CHASM supports the use of a configuration file, which can be used
    to override some of CHASM's I/O defaults.  If you are willing to
    accept CHASM's defaults, you may skip this section - on most
    systems, CHASM will work perfectly well without the file
    described below.

    The configuration process involves supplying a text file named
    CHASM.CFG on your default drive.  You can create this file with
    any text editor or word processor.

    You have some freedom in where you put the configuration file.
    If CHASM.CFG is not found in the current directory, CHASM will
    also try the following paths:

          \CHASM\CHASM.CFG
          \CHASM.CFG

    The file should contain a series of text "switches" of the
    following form:

    /SWITCH, xx [, yy, zz,...]

    Where "/SWITCH" is a reserved word, listed below, and xx, yy, zz
    are numbers.  The brackets around yy and zz indicate that these
    numbers are optional - don't put brackets in CHASM.CFG.

    Each switch should start a new line, and the switch and each of
    the numbers should separated by one or more blanks or commas.

    The following switches are implemented:

    /VIDEO      Video access method.  With this switch, you can
                control the method CHASM uses to write data on your
                video screen.  Three settings are currently
                supported:

                /VIDEO 0  Direct write to screen memory.

                /VIDEO 1  Direct write to screen memory, but only
                          during the horizontal retrace interval.

                /VIDEO 2  Write using BIOS calls.




















                                                                   11

    /VIDEO      (continued) In general, the lower a number you
                specify for /VIDEO, the faster CHASM will run.

                /VIDEO 0 is the fastest mode, and is intended for use
                with either the IBM monochrome display adapter or the
                EGA adapter.  You can use /VIDEO 0 with the CGA
                adapter, but some annoying "snow" and flicker may
                result.

                /VIDEO 1 is intended for use with the CGA adapter.
                It is almost as fast as /VIDEO 0, and the snow is
                eliminated.  /VIDEO 1 is CHASM's default mode.

                /VIDEO 2 is intended for non-IBM systems that emulate
                the IBM BIOS, but have significantly different screen
                hardware.  If you have trouble running CHASM on a
                "compatible" system, try setting /VIDEO 2.  Use of
                /VIDEO 2 will slow CHASM down significantly.

    /FG         Foreground color.  Users with color monitors may
                select a foreground color from the following list:

                0    Black               8    Gray
                1    Blue                9    Light Blue
                2    Green              10    Light Green
                3    Cyan               11    Light Cyan
                4    Red                12    Light Red
                5    Magenta            13    Light Magenta
                6    Brown              14    Yellow
                7    White              15    High Intensity White

                Example: (Magenta)

                /FG 5

    /BG         Background color.  Selections 0-7 above are
                available. Example: (Cyan)

                /BG, 3

























                                                                   12


    /132        Printer 132 column mode.  The numbers following this
                switch are the ASCII codes for the characters which
                cause your printer to go into condensed mode.  You
                may specify as many characters as you like.  If you
                don't provide this switch, CHASM will truncate source
                lines in listings to avoid going over 80 columns. You
                can also include characters to activate any special
                features of your printer you want CHASM to use during
                printing.  Example: (for IBM printer)

                /132, 15

    /80         Printer 80 column mode.  Similar to /132, but the
                numbers represent the characters to return your
                printer to normal.  Include the codes for any
                characters you want CHASM to send to your printer
                before returning you to DOS.  The following example
                turns off condensed mode and causes a Form Feed on
                the IBM printer:

                /80, 18, 12

    /FF         Formfeed.  A value of zero tells CHASM that your
                printer doesn't recognize ASCII 12 as a formfeed
                command.  Any other value, and CHASM assumes that
                formfeeds will be recognized.  The default is no
                formfeed character.

                If /FF is off, CHASM will simulate formfeeds with a
                series of linefeeds.  However, most printers respond
                quicker to a formfeed than to multiple line feeds, so
                set /FF on if possible.  Example: (on)

                /FF 1

    /PAGELEN    CHASM assumes that there are 66 lines to each printed
                page.  If you use different sized paper, enter the
                number of lines per page after this switch.
                Example: (European standard)

                /PAGELEN 72






















                                                                   13


    /LINES      By default, CHASM will print 58 lines on each printed
                page, then skip over the perforation to the next
                page.  You can change this number to suit your paper
                and personal taste.  Example:

                /LINES 50

    /BEEP       Enables/Disables audible warning when errors are
                discovered in your source program.  The following
                values are supported: (default is 1)

                /BEEP 0      (no beeping)
                /BEEP 1      (beep for all errors/diagnostics)
                /BEEP 2      (beep only for FIRST error/diagnostic)

     /DWIDTH    When listing to a disk file, CHASM normally truncates
                listing lines to 80 columns to prevent wrap-around
                when viewing the file.  In some instances, such as
                disk-based print spooling with DOS's PRINT utility,
                you may wish to override this truncation.  You can
                enter a new truncation limit after this switch.
                Example: (128 column lines)

                /DWIDTH 128

     /DPAGE     For easier scanning, listings sent to disk files do
                not normally contain page breaks.   If you want to
                produce printable listing files, you can turn on page
                breaks by setting /DPAGE to any value other than
                zero.  Example: (page breaks on)

                /DPAGE 1































                                                                   14


      /PATH     Path Strategy.  Affects the way CHASM constructs the
                default file names for list and object files.  If
                /PATH is set to 0 (the default), any drive or path
                specified on the source file name will be included in
                the default file names.  If /PATH is set to anything
                else, path and drive info are removed, thus putting
                the default list and object files in the current
                directory of the logged drive.  The following table
                shows how this works:

                /PATH | Source filename   | Default object file
                ------|-------------------|-------------------------
                   0  | a:\chasm\test.asm |   a:\chasm\test.com
                   1  | a:\chasm\test.asm |   test.com

                /PATH only affects how the default file names are
                constructed - CHASM won't edit filenames that you
                explicitly type in.

     /TIMER     Enables/Disables reporting of total assembly time. A
                value of 0 turns off timing, anything else turns it
                on.  The default is off.  This switch is used
                internally at Whitman Software to benchmark new
                versions of CHASM.

    A sample CHASM.CFG file, suitable for use with the IBM dot matrix
    printer, is included on your CHASM distribution disk.




































                                                                   15

    >>Syntax<<

    CHASM accepts a standard DOS text file for input.  In this
    context, "standard DOS text file" means:

        1. Lines are terminated with a CR/LF pair.

        2. The end of the file is marked with an EOF marker (cntl-Z).

    Virtually every word processor or editor produces files which
    meet these criteria.  Some word processors have to be in a
    special mode to produce standard DOS files.  (For example, in
    WordStar, you have to be in "non-document" mode.) The user's
    manual for your editor should inform you if any special mode
    needs to be activated.

    Some users have reported problems with the user-supported word
    processor PC-Write.  Under certain circumstances, older
    versions of PC-Write can produce lines ending with just a LF
    (violation of rule 1) or files which aren't terminated with an
    EOF marker (violation of rule 2).  If you use PC-Write, make sure
    you have the latest version.

    Lines may be any combination of upper and lower case characters.
    CHASM does not distinguish between the two cases: everything
    except single quoted strings are automatically converted to upper
    case during the parsing process.  Thus, BUFFER, Buffer, buffer,
    and bUFFer all refer to the same symbol.

    The characters  blank ( ), comma (,), single quote (') semi-colon
    (;) and TAB are reserved, and have special meaning to CHASM (see
    below).  The characters + - * / ) ( are reserved for use as
    operators in expressions.

    Each line must be no more than 80 characters long and have the
    following format:

       Label Operation Operand(s) ;comment

    The different fields of an input line are separated by the
    delimiters blank ( ), comma (,) or TAB.  Any number of any
    delimiter may be used to separate fields.






















                                                                   16

    Explanation of Fields:

    Label: A label is a string of characters, beginning in column 1.
       Depending on the operation field, the label might represent a
       program location for branching, a memory location, or a
       numeric constant (see the section titled "Labels" for more on
       this topic). No reserved characters can appear within the
       label, and to ensure that CHASM can distinguish between labels
       and numeric constants, the first character of a label must
       *not* be a numeric (i.e. 0-9). Anything beginning in column 1,
       except a comment, is considered a label.

    Operation: Either a pseudo-op (see the section with the same
       name) or an instruction mnemonic as defined in "The 8086
       Book" by Rector and Alexy.  A list of acceptable mnemonics is
       given in Appendix A.

       Note 1: Except as modified below,"The 8086 Book" is the
          definitive reference for use with CHASM.

       Note 2: There are several ways to resolve some ambiguities in
          8086 assembly language.  Please read page 3-285 of The 8086
          Book, and "Resolution of Ambiguities" in this document.

    Operand(s): A list of one or more operands, as defined in
       the section titled "Operands", separated by delimiters.

    Comment: Any string of characters, beginning with a semicolon
       (;). Anything to the right of a semicolon will be ignored by
       CHASM.

    Note that except for the case of an operation which requires
    operands, or the EQU pseudo-op which requires a label, all of the
    fields are optional.  The fields MUST appear in the order shown.






























                                                                   17

    >>Labels<<

    The symbol in the label field of an input line can be interpreted
    in four different ways by CHASM:

      1. A program location which may be branched to.

      2. A memory location for data storage.

      3. An equated symbol, which takes the place of a numeric
         constant.

      4. A macro name, which takes the place of a series of
         frequently used source code lines.

    The default interpretation of a symbol is a program location for
    branching.  This default is modified by the presence of one of
    the following pseudo-ops in the instruction field:

    DB, DS, or DW:

          Normal:  The symbol is a memory location.

          In a Structure: The symbol is a numeric constant.

    EQU:

          Normal:  The symbol is a numeric constant.

          Memory Option:  The symbol is a memory location.

    MACRO:
         The symbol is a macro name.

    A given symbol may have only ONE of the above interpretations!
    Attempts to branch into a memory location or an equated symbol
    will result in error messages.  Similarly, CHASM will not allow
    you to treat program code as a data area.  Examples:

    TEXT DB  'Hit any key when ready'  ;memory location
         MOV  AL,TEXT                  ;ok
         JMP  TEXT                     ;wrong!
    LOOP MOV  AX,CX                    ;program location
         JMP  LOOP                     ;ok
         MOV  AX, LOOP                 ;wrong!



















                                                                   18

    If for some arcane reason you *need* to branch into a data area,
    you can fool CHASM by placing a label on an otherwise blank line,
    immediately before the data area.  Example:

          JNZ NPU
          RET
    NPU                                ;dummy label for jump
          DB  D8H, 00H                 ;an 8087 instruction

    If you have a masochistic urge to crash your system by writing
    self-modifying code, there are at least two ways you can defeat
    CHASM's injunction against using program code as a data area.

    The first way is to use DS to declare zero bytes of storage
    immediately before the code you want to access.  A label on the
    null DS will have the same offset as the immediately following
    code.  Example:

           MOV   JUNK1, 9090         ;change endless loop to NOP
    JUNK1  DS    0
    JUNK   JMP  JUNK

    A sneakier approach is to load the OFFSET of a program
    location into a register, then use the register for indirect
    addressing. Using the optional displacement field, you can even
    address the middle of an instruction.  Examples:

           MOV   BX, OFFSET(CALL)
           MOVB  1[BX], 00H          ;change interrupt number in code
    CALL   INT   0

    In general, I cannot recommend trying to get around CHASM's type
    restrictions.  If you find yourself in a situation where it
    seems necessary to fool CHASM, there's probably a safer, more
    direct way to legally program what you're trying to accomplish.

    Labels can be up to 80 characters long, but only the first 15
    characters are significant.  For example, CHASM considers the
    following labels identical:

       VERYLONGLABELOVER15CHARACTERS
       VERYLONGLABELOVER






















                                                                   19

    To avoid ambiguity, a given string can legally appear in the
    label field of only ONE statement.  If the same string appears on
    more than one instruction, all instances after the first will
    receive an error message.  Remember that labels are only
    significant to 15 characters, and if the first 15 characters are
    identical, an error will occur.

    TWO   EQU  '2'      ;first use is ok
    TWO   PROC FAR      ;wrong! symbol already defined

    CHASM has a number of reserved strings which are "predefined" in
    the symbol table, and will generate an error message if used as
    labels.  All the register names are reserved, as are the indirect
    address mode combinations.  The only other reserved strings are
    the words "NEAR" and "FAR", and the symbol "$". Examples:

    AX   MOV  AX, DX      ;wrong! (register name)
    [DI] ADD  AX, BX      ;wrong! (indirect address)
    FAR  CALL GETINPUT    ;wrong! (reserved word)
    $    SUB  AX, DX      ;wrong! (reserved word)












































                                                                   20

    >>Operands<<

    The following operand types are allowed.

    1. Immediate data: A number, stored as part of the program's
       object code.  Immediate data are classified as either byte,
       expressible as an 8 bit binary integer; or word, expressible
       as a 16 bit binary integer.  If context requires it, CHASM
       will left-pad byte values with zeroes to convert them to word
       values.  Attempts to use a word value where only a byte will
       fit will cause an error message to be printed.

       Immediate data may be represented in 9 ways:

          A. An optionally signed decimal number in the range -32768
             to 32767.  Examples:

             MOV AL, 21
             MOV BX, -6300

          B. A series of up to 4 hex digits, followed by the letter
             H.  The first digit must be non-alphabetic, i.e. in the
             range 0-9, to allow CHASM to distinguish between numbers
             and symbols. If necessary, a leading zero, which does
             not count in the four allowed digits, may be added to
             fulfill the non-alphabetic condition.

             If a hex number starts with a digit in the range A-F,
             without a leading zero, a syntax error will result, and
             CHASM will usually offer the following diagnostic:

             ***Diagnostic: Add leading zero to hex constant

             To correct the problem, just add a zero on the front of
             the number.

             If the RADIX pseudo-op has been used to change the
             default number base to 16, the final H can optionally be
             omitted.  Examples:

             ADD   CX, 0B123H   ;leading zero required
             RADIX 16           ;change default number base
             ADD   DL, 12       ;same as 12H





















                                                                   21

         C.  A series of up to 16 binary digits, followed by the
             letter B.  Examples:

             MASK   EQU   00000111B
                    MOV   AL, 10000000B

          D. A symbol representing types A, B or C above, defined
             using the EQU pseudo-op.  Examples:

             MASK EQU 10H
             MAX  EQU 1000
                  AND  CL,MASK
                  SUB  AX,MAX

          E. The offset of a label or storage location returned by
             the OFFSET operator.  OFFSET always returns a word
             value. OFFSET is used to get the address of a named
             memory location, rather than its contents.  Example:

                    MOV DI,OFFSET(BUFFER)
             BUFFER DS  0FFH

          F. The ASCII value of a printable character, represented by
             the character enclosed in single quotes (').  Thus, the
             following lines will generate the same object code:

                MOV AL,41H  ;ascii code for 'A'
                MOV AL,'A'

          G. When producing Turbo Pascal INLINE code, the function
             TURBO(x) assembles as 16 bit immediate data.

          H. ==>Advanced version only:
             Labels within structures become immediate operands whose
             values equal their offset within the structure.  See the
             section titled "Structures" for more detail and
             examples.

          I. ==>Advanced version only:
             The length of a structure, returned either by the LENGTH
             operator, or simply the structure's name.  See the
             section titled "Structures" for more detail and
             examples.





















                                                                   22

          J. An expression that evaluates out to type Immediate.
             Examples:

                    MOV AX, (3+2)*5
                    MOV DX, MEMLOC1-MEMLOC2

             See the "Operand Expressions" section for more details.

    Note: Certain word length 8088 instructions taking immediate data
    have a special "sign extended" version which saves one byte of
    object code if the immediate data can be expressed in 8 bits.
    You can add an "S" suffix to instructions ADC, ADD, CMP, SBB and
    SUB to force CHASM to use the shorter, sign extended version of
    these instructions.  A syntax error will occur if you use the "S"
    suffix with immediate data larger than FFH.

    Since the "S" suffix is only meaningful with word length
    instructions, you don't need a "W" suffix to resolve ambiguous
    memory references.

    Most users can safely ignore this note.  However, using the "S"
    suffix allows you to save a few bytes to pare your object code
    down to the absolute minimum size.

    Examples:

          ADD   CX, 10H    ;16 bit immediate data
          ADDS  CX, 10H    ;8 bit sign extended version saves 1 byte
          SUBW  [DI], 2FH  ;16 bit reference with 16 bit data
          SUBS  [DI], 2FH  ;no "W" needed: 16 bit ref, 8 bit data

    2. Register Operands

       A. An 8 bit 8088 register from the following list:
          AH    AL
          BH    BL
          CH    CL
          DH    DL

       B. A 16 bit 8088 register from the following list:

          AX   BX   CX   DX   SP   BP   SI   DI

       C. An 8088 segment register from the following list:

          CS   SS   DS   ES


















                                                                   23




       D. An 8087 stack register from the following list:

          ST ST(1) ST(2) ST(3) ST(4) ST(5) ST(6) ST(7)

          Note: ST can also be referenced as ST(0).

    3. Memory Operands: The contents of a memory location addressed
       by one of the following methods.  Note that none of the memory
       addressing options specifies the *size* of the operand.  8088
       instructions have word or byte sized operands, and 8087
       instructions can have word, short, long or temporary real
       operands.  See the section titled "Resolution of Ambiguities"
       for more on this topic.

       All memory operands can optionally be preceded with a segment
       override to specify the segment register to be used in
       accessing memory.  The override takes the form of a segment
       register, followed by a colon, followed by the memory operand.
       No intervening delimiters are allowed.  Examples:

            MOV AX, ES:[80H]   ;80H into the extra segment
            MOV CS:[DI], SI     ;indirect with DI in the code segment

       Segment overrides are also discussed in the section titled
       "Resolution of Ambiguities".

       A. Direct Memory Address.

          1. A number or other immediate operand, enclosed in
             brackets, indicating an offset into the data segment.
             Example:

             BUFFER EQU 5A5AH
                    MOV BH, [BUFFER]
                    MOV [80H], DI
                    MOV AX, CS:[TURBO(I)]

          2. A symbol, defined to be a variable (i.e. a named memory
             location) using the EQU pseudo-op.  Example:

             FCB EQU [80H]
                 MOV DI,FCB



















                                                                   24




          3. A symbol, defined to be a variable by its use on a
             storage defining pseudo-op.  Examples:

                  MOV AX,FLAG
                  MOV DATE,BX
             FLAG DS 1
             DATE DB 31

          4. The special symbol '$'.  $ returns an address of value
             equal to the current setting of CHASM's location
             counter.  This address can be used as either a memory
             location or a program location for branching.  Used by
             itself, $ has little utility, but it is a very powerful
             tool when used in expressions.  Example:

                  MOV AX, $+4    ;get the byte after this instruction

          5. An expression that evaluates out to type address.
             Example:

                    MOV AX, buffer+3
             BUFFER DS 20

             See the "Operand Expressions" section for more details.


       B. Indirect Memory Address:  The address of the operand is the
          sum of the contents of the indicated register(s) and a
          displacement.  The register, or sum of registers, are
          enclosed in square brackets: []

          The displacement is optional, and takes the form of either
          an immediate operand or the label of a memory location,
          placed without intervening delimiters to the left of the
          first bracket.

          Immediate data written as decimal numbers, with values
          between 127 and -128 generate a signed 8 bit offset.
          Values outside this range, or those expressed in some
          other manner generate 16 bit offsets.





















                                                                   25

          The following indirect modes are provided:

          1. Indirect through a base register (BX or BP).  Examples:

             ENTRYLENGTH EQU 6
                         MOV AX, ENTRYLENGTH[BP]
                         MOV DL, -2[BX]
                         MOV CX, TURBO(COUNT)[BP]
                         MOV MEMLOC[BX], AX
             MEMLOC      DB  00H

          2. Indirect through an index register (DI or SI).
             Examples:

             MOV [DI], CX
             MOV CX, -5[SI]

          3. Indirect through the sum of one base register and one
             index register.  Examples:

             MOV [BP+DI], SP      ;note that no spaces are
             MOV BX, 10H[BX+SI]   ;allowed within the
             MOV CL, [BP+SI]      ;brackets.
             MOV DH, -2[BX+DI]

    4. Labels

       A label on most instructions may be used as an operand for
       call and jump instructions.  See the section titled "Labels"
       for more information.  Examples:

       START    PROC NEAR
                CALL GETINPUT
                JMPS START
                ENDP
       GETINPUT PROC NEAR

    5. Strings

       A string is any sequence of characters (including delimiters)
       surrounded by single quotes (').  If you want to use the
       single quote character inside a string, put two of them
       in a row for each one you want in the string. Example:

       DB 'This is a ''string'' with embedded quotes'



















                                                                   26

    >>Operand Expressions<<

    CHASM can perform arithmetic calculations at assemble time, to
    help you generate memory addresses and immediate data constants.

    The following operand types can participate in operand
    expressions:

         immediate data
         program locations
         data storage locations

    Actually, for the purpose of expression evaluation, CHASM treats
    both program locations and data storage locations identically.
    Thus, really only two types of operands are allowed in
    expressions: immediate and address.

    Symbols standing for immediate operands must have been defined
    prior to use in an expression, or you may get Phase Errors (see
    the error message section for a discussion on this topic).  You
    should put all your EQU and STRUC pseudo-ops at the beginning of
    your program, before any machine instructions.

    The following arithmetic operators are available:

         +  addition
         -  subtraction
         *  multiplication
         /  integer division

    Note that / performs *integer* division.  5/2 evaluates to 2.

    The normal rules of precedence apply.  To force evaluation
    contrary to normal precedence, you can use parenthesis: ().

         MOV AX  2+5*3   ;means mov ax, 17 because * outranks +
         MOV AX, (2+5)*3 ;means mov ax, 21

    No delimiters can appear within an expression.  If you separate
    the parts of an expression with delimiters, CHASM will try to
    interpret each part as a separate operand.

         MOV [BX], BUFFER + 3    ;WRONG!!
         MOV [BX], BUFFER+3      ;ok




















                                                                   27

    The type of an operand expression is determined by the individual
    operand types that are combined within it.  In evaluating each
    operation in an expression, the result type follows this rule:

         If the two operand types are the same, the result type is
         IMMEDIATE.

         If the two operand types are different, the result type is
         an ADDRESS.

    In expressions, both program locations and data storage locations
    are considered identical.  An expression which evaluates to type
    address can be used in either a MOV or a JMP.

    The result type of a complicated expression is determined by
    replacing individual binary operations with their result, and
    evaluating the (simpler) expression thus formed, following the
    above rules.

    Here's a program fragment with some expressions, and a discussion
    of their types and significance:

    EXPSAMPLE PROC  NEAR
              MOV   AX, 3+5         ;immediate, calculated value
              MOV   DX, STRING-END  ;immediate, length of string
              MOV   STRING+5, 'A'   ;address, fifth byte of string
              JMP   EXPSAMPLE+100H  ;address, used as program loc.
              JMP   STRING+100H     ;valid address syntax, but silly
    STRING    DB    'MESSaGE'       ;data area
    END                             ;marks position of end of string


    The special symbol '$' returns the current value of CHASM's
    location counter for use in expressions.  $ is of type address.
    Thus, $-1 is the address of the byte immediately prior to the
    instruction currently being assembled.




























                                                                   28

    The rules for typing expressions were set up to produce the "most
    useful" result type, taking a guess as to why one would want to
    do a given calculation.  If the type isn't what you have in mind,
    you can coerce CHASM using square brackets or the OFFSET
    function:

          MOV AX, 3+5              ;immediate
          MOV AX, [3+5]            ;coerced to address
          MOV DX, $+4              ;address
          MOV DX, OFFSET($+4)      ;coerced to immediate

    Under certain circumstances, CHASM can get confused when you use
    OFFSET or LENGTH functions in expressions.  The problem occurs if
    the expression starts with a function, and ends with a close
    parenthesis:

          MOV AX, OFFSET(BUFFER)*(3+2)    ;will be misinterpreted

    CHASM will try to interpret this as the offset of "BUFFER)*(3+2",
    and you'll get the error message "Illegal or undefined argument
    for OFFSET".  The solution is to enclose the whole works in
    parenthesis, to force CHASM to recognize it as an expression:

          MOV AX, (OFFSET(BUFFER)*(3+2))  ;correct








































                                                                   29

    >>Resolution of Ambiguities<<

    The language defined in "The 8086 Book" contains a number of
    ambiguities which must be resolved by an assembler.  This is
    discussed throughout the book, but pages 3-285 and 3-286
    specifically cover this topic.  CHASM's solutions of these
    problems are discussed in this section.

    A. 8088 Memory references:

    When one specifies the address of a memory location, it is
    unclear how large an operand is being referenced.  An operand
    might be a byte, or a word.

       1. If a register is present as an operand, it is assumed that
          the memory operand matches the register in size.  An
          exception to this rule are the shift and rotate
          instructions, where the CL register is used as a counter,
          and has nothing to do with the size of the other operand.
          Examples:

          MOV MASK, AX  ;mask is a word
          MOV DH, [BX]  ;BX points to a byte
          NEG [SI]      ;error, operand of unknown size
          SHR FLAG, CL  ;error, flag is of unknown size

       2. If no register is present, (or if the only register is CL
          being used as a counter) the size of the memory operand is
          specified by adding the suffix "B" or "W" to the
          instruction mnemonic.  Examples:

          NEGB [SI]        ;SI points to a byte
          SHRW FLAG, CL    ;flag is a word
          MOVW MASK, 0AH   ;mask is a word
          MOVB MASK, 0AH   ;mask is a byte
          MOVW MASK, 9A9AH ;must specify size even though
                           ;immediate operand implies word

    You don't need to use a "W" suffix if an "S" suffix was used to
    indicate a 16 bit operation which uses a sign extended 8 bit data
    byte.   See the Operand section of this manual for a discussion
    of the "S" suffix for assembling certain instructions in their
    sign extended form.





















                                                                   30

    B. 8087 Memory References:

       All real and integer 8087 memory references are ambiguous as
       to the operand size.  Integer operands could be word, short,
       or long.  Reals can be short, long or temporary real.  As with
       8088 memory references, you specify the size using a suffix:

             W: word
             S: short
             L: long
             T: temporary real

       For more details and examples, see the section on 8087
       support.

    C. Indirect Branching.

    The 8088 supports two flavors of indirect branching: intra, and
    intersegment.  A register is set to point at a memory location
    which contains a new value for the program counter, and in the
    case of intersegment branching, a new value for the CS register
    as well.

    The syntax of "The 8086 Book" does not specify which flavor of
    branch is being invoked.  CHASM adds the suffixes "N" (for near,
    or intrasegment) and "F" (for far, or intersegment) to the
    indirect CALL and JMP mnemonics.  Examples:

       CALLN [BX]    ;intrasegment call
       JMPF  [DI]    ;intersegment jump
       JMP   [BP]    ;error, unspecified flavor

    D. Long and Short Jumps

    Two types of relative jumps are supported by the 8088: short
    (specified by a signed 8 bit displacement) and long (specified by
    a 16 bit displacement).  Both are implemented in CHASM as a jump
    to a label.

    The short jump is specified by mnemonic JMPS. Since one of the
    displacement bits is used to indicate direction, only seven are
    left to express the magnitude of jump.  JMPS (and similarly, all
    the jump on condition instructions) is thus limited to branching
    to labels within a range of -128 to +127 bytes.




















                                                                   31

    CHASM reserves mnemonic JMP for the long jump.  JMP may be used
    to jump anywhere within the program segment, but the object code
    generated is less compact than that from JMPS.

    Examples:

       START PROC NEAR
             JMPS END     ;short jump
             JMP  START   ;long jump
       END   ENDP


    E. Instruction Prefixes.

    The 8088 supports three instruction prefixes:

       1. SEG: segment override. An alternate segment register is
          specified for a reference to memory.

       2. REP, REPE,REPNE,REPZ,REPNZ: repeat. A string primitive is
          repeated until a condition is met.

       3. LOCK: Turns on the LOCK signal. Only useful in
          multi-processor situations.

    SEG is implemented as a modifier attached to a memory operand.
    If you want to override the default segment register for a memory
    access, precede the memory operand with the segment register
    followed by a colon.  Examples:

       MOV AX, ES:FLAG     ;flag is in the extra segment
       MOV CS:[100H], DX   ;offset 100H in the code segment
































                                                                   32

    The other prefixes are implemented as separate instructions. They
    appear on a separate line, immediately before the instruction
    which they modify.  For compatibility with earlier versions of
    CHASM, you can also specify segment overrides on a separate line,
    using the mnemonic SEG. Examples:

       REP
       MOVSB           ;move bytes until CX decremented to 0
       SEG SS
       MOV AX,BUFFER   ;buffer is in the stack segment
       LOCK
       MOV [8FFH], AX  ;lock bus to ensure data is transferred
                       ;before other processors try to access it

    Note for 8087 users:  You may get unexpected results using the
       separate instruction form of SEG on 8087 instructions.  Use
       the operand modifier form for segment overrides on 8087
       instructions.














































                                                                   33

    >>Pseudo-Operations<<

    The following pseudo-ops are implemented:

    BSAVE: Generate object code in BSAVE format.

      Instructs CHASM to build a header in the format of BASIC's
      BSAVE command.  The resulting object code file may be BLOADed
      by BASIC programs.  No operands are required, and the pseudo-op
      may appear anywhere within the source code. Example:

            ORG    0     ;no psp
      SUBRT PROC   FAR   ;subroutine for BASIC program
            BSAVE        ;make BLOADable object file

    COUNT ...ENDC:  Count bytes.

      COUNT was available in earlier versions of CHASM. With the
      addition of operand expression support, COUNT became obsolete,
      and was eliminated to make room for new features.

      Existing programs using COUNT can be modified as in the
      following example.  The length of the string is calculated by
      subtracting two labels, one just before the string, one just
      after it:

      MESSAGE    COUNT
      MSG_TXT    DB   'This utility requires DOS 2.0!' beep cr lf
                 ENDC
                 MOV CX, LENGTH(MESSAGE)

      becomes:

      MSG_TXT    DB   'This utility requires DOS 2.0!' beep cr lf
      MSG_END
                 MOV   CX, MSG_END-MSG_TXT




























                                                                   34

    DB: Declare Bytes

      Memory locations are filled with values from the operand list.
      Any number of operands may appear, but all must fit on one
      line. Acceptable operands are immediate data, or strings
      enclosed in single quotes (').  DB interprets strings as a
      series of ASCII bytes.

      If a label appears, it is redefined as a memory location, and
      the data area may be referred to using the label, rather than
      an address. Examples:

            MOV AX,MASK
      MASK  DB  00H,01H
      STG   DB  'A string operand'

      CHASM generates an error message ("Data too large") if word
      operands (such as OFFSETs, or numbers greater than 255) are
      found in the DB operand list. DW should be used for declaring
      words.

    DM: Declare Multiple Bytes

      Like COUNT, DM became obsolete when operand expressions became
      available, and has been eliminated to make room for new
      features.  Existing programs using DM can be modified as
      follows:

          DM  500, ENTRYLENGTH

      becomes:

          DS  500*ENTRYLENGTH































                                                                   35

    DS: Declare Storage

      Used to declare large blocks of identically initialized
      storage.  The first operand is required, a number specifying
      how many bytes are declared.  If a second operand in the form
      of a number 0-FFH appears, the locations will all be
      initialized to this value.  If the second operand is not
      present, locations are initialized to 0.   As with DB, any
      label is redefined as a memory location.  To save space, the
      object code does not appear on the listing.  Examples:

         DS 10         ;10 locs initialized to 0
         DS 100H,1AH   ;256 locs initialized to 1AH

    DW: Declare Words

      Used to unambiguously assign a word of storage for each item in
      the operand list.  Any number of immediate operands may appear,
      but all must fit on one line.  You can also put labels in the
      DW operand list; they will be replaced with the offset of the
      corresponding memory or code location.  As with DB, any label
      on the DW statement itself is redefined as a memory location.
      Example:

          DW 0012H, FFFFH       ;four bytes declared

    EJECT: Begin New Print Page

      When listing is enabled, causes CHASM to move to the top of the
      next listing page.  Normally has no effect on listings sent to
      the screen or to disk, although you can enable EJECTs in disk
      listings with CHASM's /DPAGE configuration switch.
































                                                                   36

    EJECTIF: Conditional Page Break

      Requires one immediate operand.  If listing is enabled and
      fewer than that many lines are left on the current page of the
      listing, CHASM will move to the top of the next page.

      If you put an appropriate EJECTIF at the beginning of each
      procedure or section of your programs, CHASM will keep them in
      one piece.  Like EJECT, EJECTIF normally has no effect on
      listings to the screen or disk.  You can enable EJECTIF for
      disk listings with CHASM's /DPAGE configuration switch.
      Example:

          EJECTIF 20    ;following procedure is 20 lines long

    ENDP: End of Procedure

      See PROC (below) for details.

    ENDSTRUC: End of Structure

      ==>Advanced version only.  See STRUC (below) for details.

    EQU: Equate

      Used to equate a symbolic name with a number. The symbol may
      then be used anywhere the number would be used.  Use of symbols
      makes programs more understandable, and simplifies
      modification.

      An alternate form of EQU encloses the number in square
      brackets: []. The symbol is then interpreted as a memory
      location, and may be used as an address for memory access. This
      version is provided to allow symbolic reference to locations
      outside the program segment. Examples:

         MOFFSET    EQU 0B000H
         MONOCHROME EQU [0000H]

      Warning: Difficult to debug errors may result from using a
      ======>  symbol prior to its being defined by EQU.  You are
      strongly urged to group all your equates together at the
      beginning of programs, before any other instructions. See
      "Phase Error" in the Error Message section.




















                                                                   37

    INLINE: Generate Turbo Pascal inline statements

      Instructs CHASM to output object code in the form of a text
      file, suitable for including in Turbo Pascal inline statements.
      The resulting object file is not directly executable, but with
      minimal editing, can be compiled by Turbo Pascal as inline
      data.

      INLINE can appear anywhere in your source file, and requires no
      operands.

      See the "Execution of Assembled Programs" section of this
      document for examples, and more details.

    IFXX... [ELSE]... ENDIF: Conditional Assembly

      ===> Advanced version only.

      CHASM's conditional assembly pseudo-ops can be used to cause
      macros to expand differently according to the parameters
      supplied on the invocation.  Many different IF pseudo-ops are
      provided, to allow testing for (in)equality, relative size, and
      (non)existence of parameters.  You can also test whether a
      parameter is a register, and if so, what type.

      For more details and examples, see the Macro section of this
      document.

    INCLUDE: Include file

      ==>Advanced version only.

      INCLUDE requires one string operand, a filename enclosed in
      single quotes.  If desired, you can specify a drive and/or a
      path as part of the filename.

      The contents of the specified file are logically inserted into
      the source file at the point where the INCLUDE appears.
      INCLUDEs cannot be nested: an error message will be printed if
      the specified file itself contains an INCLUDE.  Example:

          INCLUDE '\ASM\STDIO.HDR'    ;bring in standard library






















                                                                   38

    LIST: Enable listing output

      Output to the list device is enabled, presumably after a NOLIST
      was encountered.  No operands required.

    MACRO ...ENDM: Macro Definition

      ==> Advanced version only.

      Declares a macro.  MACRO requires no operands, and signals
      CHASM that the following lines constitute a macro definition,
      and are to be stored for later use, rather than assembled in
      place.  A label is required on the MACRO statement to name the
      defined macro.

      ENDM terminates the macro definition, and requires no operands.

      For more information and examples, see the section titled
      "Macros".

    MAP: Generate map file

      ==> Advanced Version Only.

      Generates a file with the same name as your source file but
      with extension .MAP, containing label information for use by
      symbolic debuggers.  Works with Advanced Trace86 by Morgan
      Computing, and maybe other debuggers.  See "Execution of
      Assembled Programs" for more details.

      The MAP pseudo-op can appear anywhere in your program, and
      requires no operands.

    NOLIST: Disable listing output

      Normal output to the list device is disabled.  Error messages
      are listed as usual.  No operands required.



























                                                                   39

    ORG: Origin

      Allows direct manipulation of the location counter during
      assembly.  By default, CHASM assembles code to start at offset
      100H, thus leaving room for the program segment prefix normally
      built by COMMAND or DEBUG.  In situations where no PSP is
      provided, such as routines to be called from BASIC, you should
      override this default with ORG, or incorrect assembly may
      result.

      ORG requires one operand, a number between 0 and FFFFH, which
      represents the new setting of CHASM's location counter.
      Although the location counter may be reset anywhere within a
      program, generally this pseudo-op should be used before any
      machine executable instructions for meaningful results.

      Example:

         ORG 0   ;Code will be assembled for starting
                 ;offset of 0

    PROC ...ENDP: Procedure Definition

      Declares a procedure.  One operand is required on PROC, either
      the word NEAR, or the word FAR.  This pseudo-op warns CHASM
      whether to assemble returns as intra (near) or intersegment
      (far).  Procedures called from within the program being
      assembled should be declared NEAR.  Generally, all others
      should be FAR.  ENDP terminates the procedure, and requires no
      operands.  If a RET is encountered outside of a declared
      procedure, an error occurs.  Procedures may be nested, up to 10
      deep.  Example:

      MAIN  PROC  FAR
            ...
            ...      ;body of procedure
            ENDP

    RADIX:  Default Number Base

      CHASM's default radix is 10, meaning that numbers are assumed
      to be in base 10 unless they end in "B" or "H".  The RADIX
      pseudo-op allows you to change this default.  Allowed RADIX
      values are 16 and 10.  Setting RADIX 16 allows you to specify
      hex numbers without the trailing "H".



















                                                                   40

      Note that when RADIX 16 is in effect, there is no way to
      specify numbers in base 1 (binary) or base 10 (decimal).  To
      write in either of these bases, shift back to RADIX 10.  For
      example:

         RADIX 16
         mov   ax, 1B     ;means 1B in hexadecimal
         mov   ax, 20     ;means 20 in hexadecimal
         mov   ax, 30H    ;trailing "H" allowed, but not necessary
         RADIX 10
         mov   ax, 1B     ;means 1 in binary
         mov   ax, 20     ;means 20 in decimal
         mov   ax, 30H    ;means 30 in hexadecimal


    STRUC ...ENDSTRUC: Structure Definition

       ==> Advanced version only.

      Declares a structure.  STRUC requires no operands, and signals
      CHASM that the following lines constitute a structure template,
      and not actual storage declaration.  If a label appears on the
      STRUC, the label is equated with the length of the structure.

      ENDSTRUC terminates the structure definition, and requires no
      operands.

      Inside the structure, storage defining pseudo-ops behave
      somewhat differently.  See the section titled "Structures" for
      more information. Example:

          DIRENTRY STRUC      ;disk directory entry
          NAME     DS    8
          EXT      DS    3
          ATRIB    DS    1
          RESERVED DS   10
          TIME     DS    2
          DATE     DS    2
          START    DS    2
          SIZE     DS    4
                   ENDSTRUC























                                                                   41

    WAITON / WAITOFF: Toggle Automatic WAIT Assembly

      CHASM normally assembles WAIT instructions before most 8087
      instructions.  After a WAITOFF pseudo-op is encountered, CHASM
      will not add WAITs.  This allows you to let the 8088 and 8087
      run in parallel for greater speed, putting in WAITs manually
      where synchronization is important.  WAITON turns automatic
      WAIT assembly back on.

    CHKJMP / NOCHKJMP

      Following a CHKJMP pseudo-op, CHASM will check each JMP
      instruction to see if it could have been coded as JMPS (to
      produce tighter code).  JMP instructions with displacements
      smaller than 128 bytes will be flagged with a diagnostic
      message ("Could Use JMPS").  NOCHKJMP turns off JMP checking.

    = : Assignment to Assembler Variable

      CHASM supports the use of "assembler variables", which can be
      dynamically redefined throughout your program.  The assignment
      operator "=" acts similarly to pseudo-op EQU.  A label on a "="
      line will be defined as equivalent to the operand, until it is
      redefined by another assignment statement.  Unlike EQU, with
      "=" you can assign any valid operand type (except string) to
      the assembler variable. These assignments do *NOT* result in
      object code generation - they simply redefine a symbol to have
      different meanings to CHASM in different parts of your program.
      For example:

       x    =   [80]
            mov ax, x      ;means mov ax, [80]
       x    =   bx
            mov ax, x      ;x  redefined, means mov ax, bx
       x    =   100H
            mov ax, x      ;redefined again, means mov ax, 100H




























                                                                   42

    >>Macros<<

    ==>Advanced version only.

    Macros are an advanced feature.  Beginners may wish to skip this
    section until they become more experienced with CHASM and
    assembly language programming.

    A. Introduction

       Macros are a shorthand way of writing frequently used
       sections of code.  Using macros, you can write a code fragment
       once, then any time you want to use it, just reference it by
       name.  Once you define a macro and give it a name, anywhere
       CHASM sees the name will be automatically "expanded" into the
       previously defined code.

       For example, suppose you were writing a large program, and at
       the beginning of each subroutine you pushed all the general
       purpose registers onto the stack to save their contents.
       Every subroutine would start out something like this:

             push ax       ;save register contents
             push bx
             push cx
             push dx

       Before long, you'd get pretty sick of writing the same thing
       for each subroutine.  Macros are a way to put some of the
       boring, repetitive nature of assembly language into the hands
       of the assembler, freeing you up for the more creative
       aspects.  Here's how you define a CHASM macro to take the
       place of this code fragment:

       savestate  macro
                  push ax           ;save general purpose registers
                  push bx
                  push cx
                  push dx
                  endm
























                                                                   43

       Note the MACRO and ENDM statements.  These signal to CHASM
       that the enclosed code is a macro definition to be saved for
       later use, rather than code to be assembled at this point in
       your program.  The MACRO statement also gives a name
       (SAVESTATE) to the macro, which will take the place of the
       stored code.

       Now, at the beginning of each subroutine you can just write
       "SAVESTATE" when you want to push the general purpose
       registers. Here's an example:

       get_input  proc  near
                  savestate
                  ...
                  ...
                  endp

       Given the previous macro definition, the above example is
       *exactly* equivalent to:

       get_input  proc  near
                  push ax
                  push bx
                  push cx
                  push dx
                  ...
                  ...
                  endp

       The only difference is that less busy work is required on your
       part.

       Macros are NOT subroutines!  Subroutines are coded once, then
       called within your program at run time.  Macros are expanded
       in-line at assembly time, and the code is inserted into your
       program at the invocation point.  If you invoke the macro 20
       times in your program, you'll end up with 20 copies of the
       macro code.


























                                                                   44

       Although this does waste some memory space, you save execution
       time by eliminating the subroutine call and return process.
       At a minimum, it takes 32 machine cycles to call a subroutine.
       The four instruction macro given above requires 40 cycles to
       execute.  If it were coded as a subroutine, the time to
       execute it would almost *double*.  Macros trade off space for
       speed.

    B. Macro Parameters

       CHASM's macros allow 9 user defined parameters, which are
       evaluated at expansion time.  The parameters work just like
       those in DOS batch files.  Here's an example of a macro with
       one parameter.  PRINT calls DOS function 9 to print a string
       on the console.  A parameter is used to specify the name of
       the string to be printed:

       print    macro
                mov  ah, 09H          ;specify print string function
                mov  dx, offset(%1)   ;point to string
                int  21H              ;call DOS
                endm

       Given this definition, when CHASM sees a line like:

             print title

       The following code gets inserted in its place:

             mov  ah, 09H
             mov  dx, offset(title)
             int  21H

       Note how the "%1" in the macro definition got replaced by
       "title" which was put as an operand on the invocation of the
       macro.  You can put up to 9 operands onto a macro invocation,
       and they will be substituted for the dummy parameters %1
       through %9.


























                                                                   45

       If you put a label on a macro invocation, two things happen.
       As usual, the label represents a program location for
       branching, with offset equal to the beginning of the expanded
       macro.  You can branch into the expanded macro by using the
       label as an operand on a jump or call instruction.  In
       addition, if the special dummy parameter "%0" is used in the
       macro definition, it is replaced with the label text when the
       macro is expanded.  This feature is provided to facilitate
       writing loops within macros.

       If you fail to provide an operand for any dummy parameter used
       in the macro definition, CHASM substitutes a null string of
       length zero.  To leave one parameter blank, but provide
       replacements for parameters with higher numbers, use the
       special operand "%B" for the one you want blank.  For example:

            def_mem  macro
            %1       db  %2, %3
                     endm

                     def_mem twobytes, 128, FFH
                     def_mem %B, 'Hit any key when ready...'

       Expands to:

            twobytes  db 128, FFH
                      db 'Hit any key when ready...'

    C. Internal Labels

       A potential problem exists if you put a label on a statement
       within a macro.  The first time the macro gets invoked,
       everything works fine.  However, remember that a given label
       can only be used once.  The second time you invoke the macro,
       the line with the label will get a "Duplicate definition"
       error message.

       CHASM offers "internal labels" for use within macros.  When
       expanding macros, CHASM replaces these internal labels with a
       unique text, different for each invocation of the macro.
























                                                                   46

       Macro internal labels are of the form:

           %Lx

       The "%L" signals CHASM that you want an internal label.  The
       "x" can be any character that isn't a delimiter.  By using
       different characters, you can define many different labels in
       each macro.

       Within the macro, you use the internal label symbol just like
       a normal label.  For example:

           INTLAB MACRO
           %LA    MOV AX, DX
                  JMPS %LA
                  ENDM

       Each time this macro is invoked, all occurrences of "%LA" will
       be replaced with a different text.  (The replacement text will
       be of the form "%LAnnnn" where "nnnn" is a number.)

       Using the symbol table dump on your listing, you can figure
       out what text CHASM used in any given invocation.  DON'T try
       to use this information to branch into the macro invocation
       from the outside.  Editing your source file can cause CHASM to
       use a different substitution text the next time you assemble.
       Internal labels are intended for macro INTERNAL use only.

    D. Macro Nesting

       Macro invocations can be nested, up to 10 deep.  Invocations
       are maintained on a stack, and each invocation has it's own
       set of parameters and internal labels.

       CHASM does not check for recursive macro calls.  If you call a
       macro from within itself, it's quite possible to get caught in
       an endless loop.  This can also happen indirectly, where a
       macro invokes another macro, which ends up calling the first.
       If you get caught, you can escape by hitting Ctrl-Break.

       Experienced programmers can use macro recursion along with
       expressions and conditional assembly to create some really
       elegant macros.  However, this is definitely not for beginners
       or the faint of heart.  Enter at your own risk.




















                                                                   47

    E. Conditional Macro Expansion

       This advanced feature allows you to write general purpose
       macros which expand in different ways based on the parameters
       used on the invocation.

       For example, suppose you wanted to write a macro to do
       operating system calls.  Many of the DOS functions just load
       the function number into AH, then call DOS with an interrupt.
       Here's a macro to do this:

       doscall  macro
                mov ah, %1
                int 21H
                endm

       Given the above definition, "DOSCALL 1" will expand into a
       call to DOS function #1, keyboard input.

       Unfortunately, not all DOS calls are quite so simple.  For
       example, the call for printing a string to the console
       requires that the offset of the string be loaded into DX.
       Different system calls are going to require somewhat different
       handling.  One approach would be to write separate macros for
       each function.  However, with 87 different functions in DOS 2,
       this starts to get unwieldy.

       A more general approach is to incorporate some "intelligence"
       into the macro, and let it expand differently for different
       DOS functions.  Here's a slightly more general macro, which
       loads DX whenever the "print string" function is requested:

       doscall  macro
                mov ah, %1
                ife %1 9
                   mov dx, offset(%2)
                endif
                int 21H
                endm

























                                                                   48

       "IFE" is short for "If Equal".  The "IFE" and "ENDIF" bracket
       a line of macro code which will be included during expansion
       only if the "IFE" statement is satisfied.  In this example,
       the MOV DX statement will be included only if the first
       parameter is equal to 9.  The enclosed line is indented in
       this example to help show the structure of the macro, but
       indentation is not required.

       Given the above definition, "DOSCALL 1" expands to only two
       lines:

          mov ah, 1
          int 21H

      However, "DOSCALL 9, STRING" expands to three lines:

          mov ah, 9
          mov dx, offset(string)
          int 21H

       CHASM supports twelve different conditional test statements.
       They are:

            IFE       "if equal"
            IFNE      "if not equal"
            IFGT      "if greater than"
            IFGE      "if greater than or equal"
            IFLE      "if less than or equal"
            IFLT      "if less than"
            IFB       "if blank"
            IFNB      "if not blank"
            IFREG     "if a register"
            IFREG8    "if an 8 bit register"
            IFREG16   "if a 16 bit register"
            IFSEGREG  "if a segment register"

       Most of the conditionals take two operands, and perform a
       comparison.  The operands are evaluated, and their values are
       compared according to the condition being tested.  Strings are
       compared in the normal alphabetical order sense.  Examples:

            IFE   15, 0FH       ;is true
            IFGT  'ABCD' 'EFGH' ;is false
            IFLE  20H, 128      ;is true




















                                                                   49

       IFB and IFNB require only one operand, which should be a dummy
       parameter.  These conditionals test whether the parameter was
       left "blank" or if a replacement was provided on the
       invocation.

       The IFREG conditionals take one operand.  They return true if
       the operand is a register in the following sets:

            IFREG:    any register
            IFREG8:   AH, AL, BH, BL, CH, CL, DH, DL
            IFREG16:  AX, BX, CX, DX, DI, SI, BP, SP
            IFSEGREG: CS, DS, ES, SS

       You can place as many lines as you like between an IF
       statement and the ENDIF.  All will be included if the
       condition tested is true, and none will be included if it's
       false.

       An optional "ELSE" construct is also provided.  Statements
       after the ELSE get included only if the tested condition is
       false. CHASM's conditional assembly syntax can be summarized
       as follows:

           IF.....            ;if statement with parameter(s)
             s1                  ;statements included if true
             s2                  ;    "         "      "   "
           ELSE               ;end of "true" option, begin "false"
             s3                  ;statements included if false
             s4                  ;    "         "      "   "
           ENDIF              ;end of conditional assembly

       IF statements can be nested, up to 10 deep.  During nesting,
       CHASM assumes that ELSEs are paired with the latest unfinished
       IF statement.  For example:

       example macro
               ife %1, 1
                  db 'Outer IF is true'
                  ifb %2
                     'Inner IF is true'
                  else
                     'Where do I belong?'
                  endif
               endif




















                                                                   50

       "EXAMPLE 1, 5" expands to:

              db 'Outer IF is true'
              db 'Where do I belong?'

       But "EXAMPLE 2" produces no expansion at all.

       This is easiest to follow if you use "structured" indenting
       when writing the macro, as in the example above. Remember,
       however, that CHASM ignores indenting and follows the
       "latest unfinished" rule in figuring out which IF gets the
       ELSE.  Don't fool yourself with improper indentation.

    F. Final Notes:

       The conditional assembly pseudo-ops are not restricted to use
       in macros, although there aren't that many useful non-macro
       applications.

       CHASM won't recursively expand parameters.  For example:

           RECUR MACRO
                 XOR %1, %2
                 ENDM

                 RECUR AX, %1

       expands to:

                XOR AX, %1   ;actual expansion

       NOT to:

                XOR AX, AX   ;won't happen

       Like equates and structures, macro definitions should all be
       placed at the beginning of your programs, before the macro
       gets invoked.  If you invoke a macro before it's defined, a
       phase error will occur.

























                                                                   51

       Macro definitions are stored and expanded blindly by CHASM,
       with no syntax checking.  Dummy parameter symbols can appear
       in any of the input line fields.  Any errors in a macro
       definition will only become evident when CHASM expands the
       macro and attempts to assemble the result.

       In keeping with the "shorthand" philosophy of macros, the
       results of macro expansion don't normally appear on the
       listing.  If you want to see the expansion for debugging
       purposes, insert a LIST pseudo-op as the first line of the
       macro definition.

       Once you start writing macros, you might find it useful to
       gather them together into a single file.  You can then pull
       this file into the beginning of all your programs with an
       INCLUDE pseudo-op.  Macros which don't get invoked won't add
       anything to the object code produced, and you'll save yourself
       the trouble of typing in the ones you *do* need.  If you put a
       NOLIST at the beginning and a LIST at the end of your INCLUDE
       file, you don't even have to look at the definitions on your
       listings.











































                                                                   52

    >>Structures<<

    ==>Advanced version only.

    Structures are an advanced feature.  Beginners may wish to skip
    this section until they become more experienced with CHASM and
    assembly language programming.

    CHASM's structure capability allows you to generate a "template"
    with which to organize repetitive data structures.  As an example
    of a repetitive data structure, consider a phone list.  Each
    entry in the list has three components:

         Name    - 20 characters
         Address - 50 characters
         Phone   - 10 characters

    Each entry thus uses a total of 80 bytes of storage.  To declare
    a list with 500 entries, you would declare 80 x 500 = 4000 bytes:

         PHONELIST  DS  4000   ;500 entries @ 80 bytes/entry

    That's easy enough, but now what's the offset of the 346th
    address field?  This is starting to get confusing, and time
    consuming to figure out.

    Furthermore, hard-coding numbers (like that 4000, above) into a
    program is never a good idea.  What's going to happen when you
    decide to add a zip code field, or make more room in the name
    field because you just met Alexandria Zbrievskivich?  You'd have
    to go through and change by hand each number which depended on
    the actual layout of your data.  Murphy's law guarantees that
    it'll take somewhere between "several" and "too many" assemblies
    to find them all.

    Structures allow you to set up a symbolic template which makes it
    much easier to manage structured data like this phone list.  By
    using symbols defined in the structure, rather than bare numbers,
    a change in data structure doesn't mean a frantic search
    throughout your entire program to make corrections.  If you
    change the structure definition, the symbols take on new values
    automatically.






















                                                                   53

    Here's what the phone list structure looks like:

         LISTENTRY  STRUC
         NAME       DS 20
         ADDRESS    DS 50
         PHONE      DS 10
                    ENDSTRUC

    Note the STRUC and ENDSTRUC statements.  They mark the beginning
    and end of the structure, and give it a name (LISTENTRY).

    Within the structure are storage defining pseudo-ops.  DS is used
    in this example, but DB and DW could also be used.  ORG can be
    used within a structure, but any 8088 instruction will result in
    an diagnostic message and termination of the structure
    definition.

    Inside a structure, the storage defining pseudo-ops
    behave somewhat differently than normal.  No actual storage is
    set aside, but CHASM keeps track of how much space would normally
    be declared.

    Labels on pseudo-ops get assigned values equal to their offset
    within the *structure*, not within the program as a whole.  Also,
    CHASM will treat the labels as immediate operands, rather than
    memory locations.  The result of the structure given above is to
    generate three immediate operands, with the following values:

         NAME    =  0
         ADDRESS = 20
         PHONE   = 70

    CHASM does one other piece of useful book-keeping during
    structure definitions.  If a label appears on the STRUC
    pseudo-op, it gets treated as an immediate operand, whose value
    is equal to the total length of the structure.

    You can either use the STRUC label directly as an operand, or if
    you like "pretty" code, use the LENGTH operator on it.  In this
    example, both LISTENTRY and LENGTH(LISTENTRY) are immediate
    operands of value 80.

    (Inside note: LENGTH is a null operator, provided mainly for
    aesthetic reasons.  Using LENGTH will often make your code more
    readable, but is equivalent to using just the label itself.)



















                                                                   54

    Like equates and macros, structures should be placed at the
    beginning of your programs before any machine instructions,
    otherwise phase errors can occur.  If you *do* embed structures
    inside your program, you can eliminate any phase errors by using
    the LENGTH function to reference any of the immediate operands
    generated by the embedded structure.

    The immediate operands generated during a structure definition
    can be very useful in writing your program.  Following the phone
    list example, here's a better way to declare storage for the
    list:

       NUMENTRYS  EQU 500
       PHONELIST  DS  LISTENTRY*NUMENTRYS ;500 entries of length
                                          ;defined by the structure.

    Now if you add another field to the structure, PHONELIST will
    automatically increase in size.

    The 8088's indirect addressing modes, coupled with structures,
    make a very powerful combination for accessing structured data in
    memory.  Suppose AX contains the number of the entry you want to
    work on.  You can calculate the address of the entry as follows:

        MOV BX, LENGTH(LISTENTRY)    ;length per entry
        MUL AX, BX                   ;times entry number
        ADD AX, OFFSET(PHONELIST)    ;plus the starting offset
        MOV BX, AX                   ;BX <== frame pointer

    BX is now a "frame pointer" - it points to the beginning of the
    desired entry.  You can access the various parts of the entry
    using the optional displacement field in the indirect address.
    For example, here's how you would store the letter 'A' into the
    first byte of the address field:

         MOV  ADDRESS[BX], 'A'

    As another example, the following line reads the third letter of
    the name into the AL register:

         MOV  AL, NAME+3[BX]























                                                                   55

    The first entry in a structure almost invariably has value 0.
    CHASM "optimizes" indirect addresses with structure-generated
    constants equal to zero, generating the no-offset form of the
    address.  In this example:

        MOV AX, NAME[BX]

    actually assembles as MOV AX, [BX] rather than MOV AX, 0[BX]
    The resulting code is more compact, and runs faster.

    The more complicated indirect modes can be used to scan through
    or point within the fields.  The following program fragment gets
    the fourth digit in the phone number:

         MOV DI, 4             ;specify 4th digit
         MOV AL, PHONE[BX+DI] ;read it into AL

    Often times, you'll want to process entries sequentially.  To
    move to the next entry, you just add the length of the entry to
    the frame pointer:

         ADD   BX, LENGTH(LISTENTRY)    ;point to next entry

    The preceding examples should give you a feel for what you can
    do with structures, but do not exhaust all the possibilities.
    Experiment with this feature, and many of your programs will be
    both more readable and more easily modified.





































                                                                   56

    >>8087 Support<<

    ===> Advanced version only.

    In addition to the normal 8088 instructions, CHASM's Advanced
    version supports all the 8087 mnemonics.  Look in the appendices
    for a list available instructions.

    Several books describing the functions of the 8087 instructions
    are available.  CHASM's 8087 support is based on Appendix D of
    Intel's 8087 Support Library, and the book "Assembly Language
    Programming for the IBM Personal Computer" by David J. Bradley
    (Prentice-Hall, 1984).

    ALL the 8087 instructions that reference memory for a real or
    integer quantity are ambiguous as to the size of operand.
    Integers can be Word (2 bytes), Short (4 bytes) , or Long (8
    bytes).  Reals can be Short (4 bytes), Long (8 bytes) or
    Temporary Real (10 bytes).

    As with 8088 memory references, CHASM resolves ambiguities using
    a suffix.  The following suffixes can be added to mnemonics to
    specify operand size:

       W: word
       S: short
       L: long
       T: temporary real

    Here are some examples of using suffixes:

       FADD   [200H]    ;wrong! ambiguous memory reference
       FADDT  [200H]    ;add 10 byte temporary real
       FILD   CS:[DI]   ;wrong! ambiguous memory reference
       FILDW  CS:[DI]   ;load 2 byte integer

    CHASM automatically generates a WAIT instructions prior to most
    8087 instructions.  The only exceptions are the "No Wait"
    instructions with a "N" as the mnemonic's second letter.
    Examples:

        FYL2X   ;automatically preceded by WAIT
        FNCLEX  ;no wait form of FCLEX





















                                                                   57

    If you'd prefer to manually add WAITs only where needed to
    synchronize critical instructions, the WAITOFF pseudo-op disables
    CHASM's automatic WAIT assembly.  Using fewer WAITs allows the
    8088 and 8087 to run in parallel more often, giving better
    performance.  Make sure you synchronize with a WAIT before
    allowing the 8088 to access a location being modified by the
    8087.  You can turn CHASM's automatic WAIT assembly back on using
    a WAITON pseudo-op.

    You must use the operand modifier form for segment overrides on
    8087 instructions.  A separate SEG instruction will modify
    CHASM's automatically generated WAIT instruction, and won't
    affect the intended 8087 instruction.  Example:

        SEG CS
        FLDS [100H]     ;wrong!
        FLDS CS:[100H]  ;correct















































                                                                   58

    >>Outside the Program Segment<<

    As mentioned previously, CHASM does not support multiple segment
    definitions.  Provision is made for limited access outside of the
    program segment, however.

    A. Memory References:
       To access memory outside the program segment, you move a new
       segment address into the DS register, then address using
       offsets in the new segment.  The memory option of the EQU
       pseudo-op allows you to give a variable name to offsets in
       other segments. For example, to access DOS's equipment flag:

          BIOS_DATA   EQU  40H
          EQUIP_FLAG  EQU  [0010H]
                      MOV  AX,BIOS_DATA  ;can't move immed. to DS
                      MOV  DS,AX
                      MOV  AX,EQUIP_FLAG ;get bios equipment flag

    B. Code Branching:
       CHASM supports 4 instructions for branching outside the
       program segment.

       1. Direct CALL and JMP

          New values for the PC and CS registers are included in the
          instruction as two immediate operands.  Example:

          BIOS         EQU  0F000H            ;RAM bios segment
          DISKETTE_IO  EQU  0EC59H            ;disk handler
                       JMP  DISKETTE_IO,BIOS

       2. Indirect CALLF and JMPF

          Four consecutive bytes in memory are initialized with new
          values for the PC and CS registers.  The CALLF or JMPF then
          references the address of the new values.  Example:

          BIOS        EQU   0F000H           ;RAM bios segment
          PRINTER_IO  EQU   0EFD2H           ;printer routine
                      MOV   [DI],PRINTER_IO
                      MOV   2[DI],BIOS
                      CALLF [DI]





















                                                                   59

    >>Running CHASM<<

    A. Prompt Mode

       From DOS, type:

         CHASM

       If you're using the Subset version, a hello screen is printed,
       followed by the message:

         Hit Esc to exit, anything else to continue...

       Advanced CHASM skips the commercial message.

       You're now presented with a series of prompts:

          Source code file name? [.asm]

       Type in the name of the file which contains your program.  If
       you don't include an extension for the filename, CHASM
       assumes it to be .ASM.  If CHASM is unable to find the file,
       it will give you the option of naming another file, or
       returning to DOS.  Note that anywhere CHASM expects a
       filename, you can optionally include a drive and/or path.

       Assuming your file is present, CHASM prompts:

          Direct listing to Printer (P), Screen (S), or Disk (D)?
          [nul:]

       Respond with either an upper or lower case letter.  If you
       just press enter, no listing will be produced.  If you select
       "D", CHASM will prompt:

          Name for listing file? [fname.lst]

       Type in a name for the listing file.  If you just press ENTER,
       the name defaults to that of your source file, with an
       extension of .LST.
























                                                                   60

       Listing Notes:

          1. The setting of the /PATH configuration switch controls
             the exact form of the default list file name.

          2. Regardless of where the listing is sent, error messages
             are always echoed to the screen.

          3. Suppressing the listing will result in faster assembly.

       The final prompt is:

          Name for object file? [fname.com]

       Type in a name for the assembled program.  If you just press
       ENTER, the name defaults to that of your source file, with an
       extension of .COM.

       Note: The setting of the /PATH configuration switch controls
             the exact form of the default object file name.

       CHASM now assembles your program.  A status line is maintained
       on the screen, showing how many lines have been processed,
       along with how many errors have been discovered.  CHASM makes
       two passes over your source file, outputting the listing and
       object code on the second pass.  You can pause assembly at any
       time by hitting Cntl-S (or just S).  Hitting any key then
       resumes assembly. You may abort assembly and return to DOS at
       any time by hitting Esc, Ctrl-C or Ctrl-Break.

       At the end of the second pass, a final summary of the assembly
       process is printed.  It will look something like:

          0 Error(s) detected
          0 Diagnostic(s) offered

       954 (3BAH) Bytes of object code generated

       This information should be self-explanatory.  The number of
       bytes is given in both decimal and hex format.
























                                                                   61

       If labels appeared in your program, a dump of the symbol table
       will follow.  This lists each user-defined symbol, along with
       its value (in hex). The symbols are printed in alphabetical
       order.  Each value is preceded by a one-letter code, which
       tells the symbol's type:

                P: a program location
                M: a memory location for data
                I: immediate data

       Upon exit, CHASM sets the system variable ERRORLEVEL to
       (surprise!) the total number of errors discovered in your
       source file. If you run CHASM from a batch file, you can use
       this feature to automatically invoke your text editor if
       errors were discovered.

    B. Expert Mode:

       This mode allows you to specify all i/o information on the
       command line which invokes CHASM.  The syntax is:

          CHASM sourcefile [p|s|d|/] [listfile|/] [objectfile]

       Items within brackets ([]) are optional. You may select *one*
       of any list of items separated by a bar (|).

       Basically, you just include on the command line all your
       responses to the normal prompts.  Each response must be
       separated from the others by either a space or comma.

       If you don't specify the list device/file or the object file,
       they default to NUL: and sourcename.COM respectively.  To
       represent a carriage return (to specify a default choice, but
       allow modifying a later response) use the character slash (/).






























                                                                   62

       Expert mode examples:

          1. Source file is EXAMPLE.ASM, no listing, object file
             EXAMPLE.COM:

                CHASM example

          2. Source file is SDIR.ASM, list to printer, object file
             SDIR.COM:

                CHASM sdir p

          3. Source file is MYFILE.PRG, list to disk file MYFILE.LST,
             object file SUBR.COM:

                CHASM myfile.prg d / subr.com
















































                                                                   63

    >>Error and Diagnostic Messages<<

    Error messages generated on pass one appear on the listing before
    any source code is printed, and mention the line number to which
    they refer.  The majority of messages occur during pass two, and
    will appear in the listing immediately prior to the line which
    caused the message.  Unless the listing itself is going to the
    screen, messages and the source line which generated them will be
    echoed there.

    Add Leading Zero to Hex Constant: Diagnostic.  The unknown
       symbol could be interpreted as a hexadecimal number if a
       leading zero was added.

    CHASM Internal Error: XX PC: YYYY or
    CHASM I/O Error: XX PC: YYYY
       Sigh. You just discovered a problem in CHASM itself.  Please
       contact Whitman Software, following the procedure in the
       appendix on Bug Reporting.

    Could Use JMPS: Diagnostic.  The specified label requires an
       offset of less than 128 bytes; specifying the short jump would
       result in more compact code.  The assembled code is correct,
       however.

    Conditional Nested Too Deeply:  IF statements can only be nested
       10 deep.

    Data too Large:  You are attempting to use a word of immediate
       data where only a byte is allowed.

    Duplicate Definition of XXX in (linenum): Pass 1 error.  An
       attempt was made to define a symbol already present in the
       symbol table.

    ELSE without IF: An ELSE was encountered, but no corresponding
       conditional pseudo-op was found.

    ENDIF without IF: An ENDIF was encountered, but no corresponding
       conditional pseudo-op was found.

    ENDM without MACRO:  An ENDM was encountered, but no
       corresponding MACRO was found.

    ENDP without PROC: An ENDP was encountered, but no corresponding
       PROC was found.


















                                                                   64


    ENDSTRUC without STRUC: An ENDSTRUC was encountered, but no
       corresponding STRUC was found.

    EQU Without Label: No symbol was found to equate with the
       operand.

    File not found: XXX in (linenum).  Pass one error.  CHASM was
       unable to find the file XXX, specified in the INCLUDE
       pseudo-op.

    Heap Full: Too many XXX.  Usually a Pass one error.
       You've run out of memory for the symbol and macro tables.  You
       shouldn't see this message unless you have only 128K and are
       assembling a very large program.

    Illegal Label: XXX in (linenum). Pass one error.  The symbol
       XXX begins in column one and has as its first character a
       number, or a plus or minus sign.  Alternatively, you tried to
       use a reserved word or symbol as a label.

    Illegal Operation for Structure - ENDSTRUC Implied: Diagnostic.
       The current line is within a structure, and is not a storage
       defining pseudo-op.  CHASM generates an ENDSTRUC, which
       terminates the structure definition, then assembles the line
       normally.

    Illegal or Undefined Argument for LENGTH:  The argument for the
       LENGTH  function was not present in the symbol table as an
       immediate operand on pass 2.

    Illegal or Undefined Argument for OFFSET: The argument for the
       OFFSET function was not present in the symbol table as a near
       label or memory location on pass 2.

    Missing ENDM:  The end of the input file was encountered, and at
       least one MACRO had not been terminated by an ENDM.

    Missing ENDP: The end of the input file was encountered, and at
       least one PROC had not been terminated by an ENDP.

    Missing ENDSTRUC: The end of the input file was encountered, and
       at least one STRUC had not been terminated by an ENDSTRUC.





















                                                                   65

    Multiple Segment Overrides are Illegal:  Diagnostic.  You have
       specified more than one segment override on this instruction.
       The first override is used, and the other(s) ignored.

    Nested INCLUDE: An INCLUDE was encountered in an INCLUDEd file.
       The INCLUDE pseudo-op cannot be nested.

    Nested Structure: A STRUC was encountered inside a structure.
       Structures cannot be nested.

    No Name For Macro:  Diagnostic.  The macro statement did not have
       a label.  CHASM is unable to give a name to the macro, and you
       will be unable to reference it.

    Operands Not Compatible:  The size of the two operands does not
       match.

    Phase Error: A label or memory location is found to have
       different values on pass 1 and pass 2.  A difficult to debug
       error: generally the problem is not caused by the statement
       which received the error message. The problem is caused by an
       improper statement before this one, but after any other labels
       (otherwise *they* would have received the error message).

       When phase errors are discovered, CHASM prints this message,
       then resynchronizes the location counter to match the offset
       calculated on pass one.  If further phase errors are reported,
       the line responsable for each subsequent error will be located
       between two Phase Error messages, but after any unflagged
       labels.

       There are four documented ways to generate phase errors.

       1. A previous instruction used a symbolic immediate operand
          prior to the symbol's definition.

       2. A previous instruction made improper use of a forward
          referenced label, either an attempt to branch into a data
          area, or to access a code area as if it was data.

       3. The label on the flagged statement is defined more than
          once in the program.

       4. A previous instruction invoked a macro prior to its
          definition.



















                                                                   66

       Whitman Software would appreciate hearing about any other
       situations which cause the Phase Error message to appear.

    Parameter Too Large for Expansion: Diagnostic. Replacement of the
       dummy parameter would cause the macro line to exceed CHASM's
       internal 255 character limit for manipulating strings.
       Generally this message will be accompanied by the "Source Line
       Truncated" message, warning that a line has exceeded the
       allowed 80 columns.

    Procedures Nested Too Deeply: Procedures may be
       nested no more than 10 deep.

    Source Line Truncated:  The length of the input line exceeded 80
       characters.

    Specify Word or Byte Operation: Diagnostic.  CHASM suggests that
       the Syntax Error might be resolved by adding the suffix "B" or
       "W" to the instruction mnemonic.  Most, but not all, ambiguous
       memory references are flagged with this diagnostic.

    Syntax Error: (OP) (DEST), (SOURCE).  CHASM was unable to find a
      version of the instruction (OP) which allows the operands
      (DEST) and (SOURCE).  Either the instruction doesn't exist, or
      it is an inappropriate choice for the given operands.  The (OP)
      (Dest), (Source) is a reconstruction of your source line based
      on how CHASM parsed it.  A comparison of the reconstruction and
      your original source code will sometimes help pinpoint the
      error.

      Syntax Error messages are followed by two diagnostics which
      spell out in words CHASM's best guess about the operands.
      Again, a comparison between CHASM's guesses and what you
      really meant can help find the problem.

    Too Far For Short Jump: The displacement to the specified label
       is not in the range -128 to +127.

    Undefined Operand for EQU: Any operands on an EQU statement must
       have been previously defined.

    Undefined Symbol XXX: The symbol XXX was used as an operand, but
       never appeared as a label, and is not a predefined symbol.





















                                                                   67

    Unrecognized Operand XXX: XXX is used in the DB or DW operand
       list, but is not a valid immediate operand. (or string, in the
       case of DB).





























































                                                                   68

    >>Execution of Assembled Programs<<

    A. Object code format

       The object code file produced by CHASM is in the form of a
       memory image, exactly as will be present in your computer at
       run time.  No link step is required.  Provided that the segment
       registers are set correctly, the architecture of the 8088
       guarantees that code is self-relocating, and will run correctly
       loaded anywhere in memory.  Storing a program as an exact image
       of memory at run time is called the COM format by IBM.

       This COM format is *not* that produced by the IBM assembler.
       The output of the IBM assembler is in the form of an "object
       module" suitable for input to the linker.  The object module
       is not directly executable, but must first be "filtered"
       through the linker.  This adds an extra step to the process of
       producing a working program, but gives you the option of
       combining multiple object modules into one program.  The
       resulting linked program is *still* not a memory image, but
       has a header which is used to perform relocation during
       loading.  This linked program plus header is called the EXE
       format by IBM.

    B. Running Assembled Programs From DOS

       DOS provides a loader for running machine language programs.
       To run a program, you merely type its name, without the
       extension.  This is what you're doing every time you use a DOS
       external command such as FORMAT or CHKDSK.  In fact, the COM
       format is named after "external COMmand".

       When DOS loads a program, it examines the file extension to
       determine what format the file is in, either COM or EXE.  This
       is why CHASM defaults to using the extension .COM for your
       object file.  If you plan to run the program from DOS, don't
       change the extension.

       For COM programs, DOS builds a 255 byte long "program segment
    prefix" and sets the segment registers to point to this PSP. The
    contents of the file are then loaded verbatim right after the
    PSP, at offset hex 100 in the segment defined by the segment
    registers.  As soon as loading is complete, your program is
    executed starting with the instruction at hex 100.




















                                                                   69

       Although you can totally ignore the PSP, you should read pages
    E-3 through E-11 of the DOS manual to see what DOS puts there for
    you.  It turns out there are some real goodies which your program
    might want to use.

       When your program is done, it must transfer control back to
       DOS, otherwise the 8088 will continue to fetch what it
       believes are instructions from whatever garbage or bit-hash
       happens to follow your program in memory.  The easiest way to
       return to DOS is to execute the instruction:

         INT 20H

       This is the vectored interrupt reserved by DOS for program
       termination.

       While we're on the topic of vectored interrupts, you would be
       well rewarded to study both the DOS Technical Reference and
       Hardware Technical Reference Manuals to find out what happens
       when you execute some of the other interrupts.  Some very
       useful functions, such as file handling and screen i/o, are
       available at the machine language level through this
       mechanism.  Information on interrupts is also available in
       Peter Norton's book "Programmer's Guide to the IBM PC", which
       is cheaper than buying both of IBM's reference manuals, and
       also more readable.

       Looking at things the other way, by changing the interrupt
       vector for a given function to point to your own code, you can
       override the way DOS or the BIOS does something, and do it
       your way.  DOS even provides a method (via interrupt 27H) by
       which your new code can be grafted onto DOS, and not be
       overwritten by other programs.

    C. Debugging Assembled Programs

       IBM provides an excellent utility with DOS, called DEBUG.COM.
       By specifying your program's name as a parameter when invoking
       DEBUG, you can observe your program execute with DEBUG's trace
       and other functions.  To debug your program, from DOS type:

          DEBUG progname.COM






















                                                                   70

       DEBUG builds a PSP and loads your program just like DOS does,
       but you have the added power of the debugging commands to
       monitor your program while it runs.  See chapter 6 of the DOS
       manual for more details about using DEBUG.

       On the topic of debugging, I can recommend most highly a
       program called TRACE86, from Morgan Computing (10400 N.
       Central Expressway, Suite 210, Dallas, TX 75231).  The program
       replaces DEBUG, and although rather steeply priced, makes the
       IBM debugger look silly.  I've been using TRACE86 for some
       time now, and wouldn't be without it.

    D. Using Assembled Programs in BASIC

       To incorporate a machine language subroutine in a BASIC
       program, write it in assembly language, then assemble it with
       CHASM.  You should read page C-7 of the BASIC manual for some
       conventions to use in writing your subroutine.  In particular,
       note that you must declare the routine to CHASM as a FAR
       procedure using the PROC pseudo-op, and that the last
       instruction of the routine should be a RET.

       Unlike programs which are run directly from DOS, your routine
       will not be preceded by a program segment prefix.  You should
       prevent CHASM from leaving room for a PSP by putting an ORG 0
       pseudo-op at the beginning of your routine. If you don't
       include the ORG, memory references will not be assembled
       correctly.  Example:

            ORG  0    ;no psp
       SUBR PROC FAR  ;far procedure
            ...       ;body of subroutine
            RET
            ENDP

       CHASM supports two methods for getting assembled routines into
       BASIC programs.  The methods differ in whether the routine is
       included in the BASIC program file, or in a separate file.

       A utility program called COM2DATA is provided for including
       machine language within BASIC program files.  The program is
       distributed in source code form (file COM2DATA.ASM) and must
       be assembled with CHASM prior to use.  The program functions
       as a DOS 2 filter, reading a COM file in from the standard
       input, and writing a series of BASIC DATA statements to the
       standard output.


















                                                                   71


       COM2DATA's syntax is as follows:

         COM2DATA [<infile] [>outfile] [linenum]

       You specify the input and output files as with any DOS 2
       filter.  The linenum parameter sets the starting line number
       used on the BASIC code produced.  If you don't specify
       linenum, it defaults to 1000.

       If you MERGE the file of DATA statements into your BASIC
       program, the program can then READ the data and POKE it into
       memory.  An example program to do this is given on page C-6 of
       the BASIC manual.  An alternative approach would be to store
       the routine in a string variable, which could later be located
       with the VARPTR function.

       If you would prefer to keep your machine language subroutine
       in a separate file, include a BSAVE pseudo-op somewhere within
       your assembly language source code.  CHASM will build a header
       on the object code produced, which will mimic that built by
       BASIC's BSAVE command.  The resulting file may be BLOADed by
       BASIC to any location in memory.

       You transfer control to your routine with either the USR
       function, or the CALL statement.  Syntax for these statements
       can be found in the BASIC manual.





































                                                                   72


    E. Using Assembled Programs with Turbo Pascal:

       CHASM and Turbo Pascal work splendidly together, complementing
       each other's strong points.  You can use CHASM to provide new
       functions you wish Turbo had, or to fine tune a critical
       procedure for optimum speed.   CHASM itself is written in a
       combination of Turbo Pascal and CHASM.

       CHASM supports two techniques for producing machine language
       code for Turbo Pascal: external procedures or functions, and
       Turbo INLINE code.

    1. External Procedures and Functions:

       Turbo loads external procedures and functions within the same
       segment as the rest of your Pascal program.  You have no
       control of the exact load location (more on this later), but
       on the other hand, you don't have to worry about setting aside
       a special location for your procedures (as in BASIC).  Since
       your external procedure is loaded in the same segment as the
       Pascal code, it should be declared NEAR to CHASM:

         EXTERNAL PROC NEAR
                  ...           ;body of procedure
                  ...
                  ENDP

       Turbo passes parameters to your procedure/function via the
       stack.  To work effectively, a good grasp of the stack
       structure is critical.  Read the Turbo manual for information
       on internal data formats and parameter passing, to see just
       what to expect on the stack.  Also, remember that the stack
       grows *down* from the top of memory.

       If you're going to access the stack in your procedure, the
       first thing you should do is set up BP as a stack pointer.
       Since Turbo also uses BP, you have to save the current value
       first.  The obvious place to save it is on the stack...

          PUSH BP           ;save old BP
          MOV  BP, SP        ;and set up to indirectly address stack






















                                                                   73

       You can now access the parameters on the stack using offsets
       relative to the BP register.  Note that since you PUSHed BP,
       everything is 2 bytes deeper onto the stack than what Turbo
       originally sent you.

       Here's an example.  Suppose you declare the following external
       function in Turbo:

          function Sum(x,y: int): int;
             external 'sum.com';

       After you've pushed BP, here's how the stack looks:

           stack contents           indirect address
        ----------------------------------------------
           <function result>             8[BP]
           <value of parameter y>        6[BP]
           <value of parameter x>        4[BP]
           <return address to Turbo>     2[BP]
           <old BP value>                 [BP]

       The indirect addresses go up two at a time, since each item on
       the stack is a word (two bytes) long. You can access the
       parameters using their indirect addresses. We'll talk more
       about the "function result" area later; ignore it for now.
       Here's the code for an external function to add two integer
       parameters:

       SUM  PROC NEAR
            PUSH BP          ;save old BP
            MOV  BP, SP      ;set up stack pointer

            MOV  AX,  4[BP]  ;get parameter x
            MOV  ADD, 6[BP]  ;add parameter y
                             ;leave sum in AX to return to Turbo

            POP  BP          ;restore old BP for Turbo
            RET  6           ;clear params and "result" off stack
            ENDP

























                                                                   74

       A more elegant way to access the parameters is by using a
       CHASM structure to define their offsets on the stack:

       STACK    STRUC
       OLDBP    DW   0000H
       RETADDR  DW   0000H
       XPARAM   DW   0000H
       YPARAM   DW   0000H
                ENDSTRUC

       With this structure added to the above example, you could
       access the parameters like this:

                MOV  AX, XPARAM[BP]    ;get parameter X

       Functions return scalar results by having the value in AX upon
       return.  The function in the above example saves some time by
       calculating the value in AX in the first place.  Upon exit,
       the function POPs BP, to restore the value Turbo was using.

       Note the RET 4 in the example.  This returns to Turbo, while
       simultaneously POPing (and discarding) 4 bytes off the stack.
       This clears off the two parameters which Turbo passed.  If
       there were three parameters, you'd use a RET 6; if none, a
       simple RET would do. When Turbo receives control, it assumes
       that you've cleaned up the stack by removing all parameters.
       If you don't do this properly, a run-time error, or even a
       system crash will result.

       (Typical scenario:  Turbo tries to return from one of its own
       subroutines, thinking the top of the stack has the return
       address.  Unfortunately, the top is really an integer
       parameter, left over from your external function.  Turbo's
       RET sends control into some random area of memory, and boom -
       the system crashes.)

       It's easy to get confused about the exact contents of the
       stack.  If your procedure doesn't seem to be working right,
       the first thing to suspect is Turbo and you have different
       ideas about what's where on the stack.  A DEBUG session can
       usually straighten things out.























                                                                   75

       Boolean functions constitute a special case which is poorly
       documented in the Turbo Pascal manual.  Boolean functions must
       return their result in two ways:

           1. by setting the zero flag (Z = false, NZ = true)

           2. and by returning either 0 (false) or 1 (true) in AX

       The first return method is assumed by Turbo if you use the
       function in a conditional statement, the second if you assign
       the value of the function to a variable.  You need to return
       the result both ways to cover all possible uses of your
       function.

       When external functions are called, in addition to the normal
       parameters, Turbo passes something called the "function
       result" on the stack.  When the result is a scalar type (other
       than real), this seems to be intended just as a local work
       area for you to use, since Turbo ignores any value you store
       there.  (For non-real scalars, the result is actually
       returned in AX).

       In fact, like a parameter, the function result must be POPed
       off the stack when your function returns to Turbo. Unlike
       scalar parameters (which always occupy a word of stack memory,
       even if they are defined as byte), the function result is the
       exact length of the result type.  Thus for a boolean function,
       you have to POP off one extra byte above and beyond those for
       clearing off the parameters.

       Functions which return either a real or non-scalar result use
       the "function result" area to return their result, since it
       won't fit in AX.  For these types of functions, you shouldn't
       pop the "function result" area before returning, since Turbo
       is expecting to find it on top of the stack.

       A problem of addressability can crop up if your external
       procedure tries to maintain its own local variables and/or
       constants.  The problem is that you have no way of knowing
       just where Turbo is going to load your procedure within the
       shared segment.  As such, the address CHASM calculates for any
       memory locations are going to be offset from their real values
       by some unknown constant, the offset of the procedure within
       the shared segment.  This is called a relocation problem.




















                                                                   76

       Fortunately, there's a way around this problem, but it
       requires using a trick.  Your program has to figure out, *at
       run time*, just where it's located in memory.  If you could
       find out the offset of any known point in your procedure,
       you'd "have your bearings" so to speak, and could go on.

       The trick is as follows.  The 8088 CALL instruction pushes the
       address of the next instruction onto the stack, then branches
       to the location given in the CALL.  By performing a dummy
       CALL, then stealing the value off the stack, we have the
       location of a known spot in the procedure.   By subtracting
       the offset within the procedure of that known location, we get
       a pointer to the beginning of the procedure which can be used
       to access everything else.  Here's an example:

       LOCAL  PROC NEAR
              PUSH BP                     ;set up to access stack
              MOV  BP, SP                 ; ditto

              CALL DUMMY                  ;establish addressability
       DUMMY  POP  BX                     ;  "           "
              SUB  BX, OFFSET(DUMMY)

              MOV  AX, 4[BP]                ;get parameter
              SEG  CS                       ;offset relative to CS
              ADD  OFFSET(TOTAL)[BX], AX    ;maintain running total

              POP  BP
              RET  2
       TOTAL  DW   0000H
              ENDP

       We use indirect addressing here.  After the funny business
       with the CALL, POP, SUB sequence, BX has a pointer to the
       beginning of the procedure.  Using indirect addressing, we
       take that pointer and add in the offset of the memory location
       we want to access.  In this example we're using a local
       variable to maintain a running total of the parameter which
       gets passed.

























                                                                   77

       Note the SEG CS just before the ADD which accesses the
       location TOTAL.  Since we found our bearings by stealing the
       address of a program instruction, our offset is known relative
       to the CS register, NOT the DS which is normally used to
       access data.  The SEG CS forces the 8088 to calculate the
       address using CS rather than the default DS register.  Every
       time you access a memory location within your procedure, you
       *MUST* do it relative to CS by using a segment override.

       Turbo requires that you preserve the values of the following
       registers:

            BP, CS, DS, SS

       If you want to use these registers in your routine, the
       easiest way to preserve them is to PUSH them onto the stack at
       the beginning of your routine, then POP them just before
       returning.  As near as I can tell, you can safely trash the
       other registers.


    2. INLINE Code

       An alternative method of incorporating code into Turbo Pascal
       is through Turbo's inline statement.  The inline statement is
       intended for short routines or patches where you just give
       Turbo a list of numbers representing the code.  In addition to
       numbers, you can also include variable names in the inline
       list.  Turbo replaces them with their offsets at compile time.

       CHASM's INLINE pseudo-op is provided to facilitate producing
       Turbo inline code.  If you put an INLINE pseudo-op in your
       CHASM source file, rather than producing a normal object code
       file, CHASM produces a text file formatted to include in a
       Turbo inline statement.  For example:

           inline        ;shift to inline mode
           mov  ah, 0FH  ;call bios for video mode
           int  10H      ;  ditto

       produces the following object file:

                        {    inline       ;shift to inline mode    }
          $B4/$0F/      {    mov ah, 0FH  ;call bios for video mode}
          $CD/$10/      {    int 10H      ;  ditto                 }



















                                                                   78

       Object code is output in text form, as hex constants.  A
       comment with the source code for each line is also generated.

       The INLINE pseudo-op can appear anywhere in your source file,
       and it requires no operands.

       Object files produced from source files with an INLINE
       pseudo-op are NOT executable!  They contain text suitable for
       inclusion in Turbo Pascal inline statements.  It's probably a
       good idea to override CHASM's default name for the object
       file, and specify something with an extension other than COM
       to prevent DOS from trying to run the program.

       Your inline code must preserve the BP, SP, DS and SS
       registers. If you need to modify these registers, you should
       PUSH the ones you need at the beginning of your code, and POP
       them at the end.

       Turbo's inline statement allows you to insert variable names
       in with the list of numbers.  At compile time, Turbo will
       replace the name with the 16 bit offset of the variable in its
       native segment.  (See the Turbo Pascal manual for a discussion
       of internal data formats and the native segment of variables.)

       CHASM supports this capability with the TURBO() function.
       CHASM treats TURBO() as 16 bit immediate data during assembly.
       However, in place of the two bytes of data, CHASM outputs the
       function argument literally for Turbo to evaluate:

          inline
          mov   bl, turbo(flag)[bp]     ;local variable "flag"
          mov   ax, cs:[turbo(maxcode)] ;typed constant "maxcode"
          lds   si, turbo(y)[bp]        ;pointer to var parameter "y"

       produces:

                              {      inline                        }
          $8A/$9E/FLAG/       {      mov   bx, turbo(flag)[bp]     }
          $2E/$A1/MAXCODE/    {      mov   ax, cs:[turbo(maxcode)] }
          $C5/$B6/Y/          {      lds   si, turbo(y)[bp]        }
























                                                                   79

    F. Symbolic Debugging

       ===> Advanced Version Only

       The MAP pseudo-op (available in CHASM's advanced version)
       generates a file containing label information that can be used
       by debugging software to show label names in your program
       during debugging.  This makes debugging *much* easier, since
       you don't have to keep looking at a listing to tell where you
       are in your program.

       The map file is formatted to be used by Advanced Trace86 from
       Morgan Computing, but may be usable by other debuggers.  If
       you're using CHASM's map files with another debugger, please
       write so that other's can share this information.

       In AT86, the following command sequence will load in a
       program, including labels:

           N program.MAP
           LL
           N program.COM
           L

       The LL (load labels) command has to come before you load the
       program, since AT86 uses the program area as a workspace when
       loading labels.

       The map file contains data about both program locations and
       data locations.  AT86 handles the program labels correctly, so
       the label appears both on the labeled line, and is referenced
       on any JMP or CALL to the labeled line.  Data locations get
       partial support.  The location is labeled, but only memory
       references with a CS: segment override use the symbolic name.






























                                                                   80

    >>Notes for Those Upgrading to This Version of CHASM<<

    CHASM is not yet carved in stone - improvements and corrections
    are made fairly frequently, based on both my own experience in
    using the program, and the comments of outside users.  This
    section summarizes the changes which have been made since version
    1.2 was released.  Changes followed with an asterisk (*) denote
    modifications which could invalidate programs written under
    earlier versions of CHASM.

    Version   Notes
    4.14      "S" suffix allowed on ADC, ADD, CMP, SBB and SUB to
              generate sign extended versions of these instructions
              when used with immediate data which can be expressed in
              8 bits.  Sign extension saves 1 byte per instruction.

    4.13      Labels and memory locations now allowed in DW operand
              list without using OFFSET().

    4.12      FBLD now working.  Corrected bug in reporting number
              of object code bytes generated by DS with large
              numbers.

    4.11      "N" suffix now optional on JMP and CALL through a 16
              bit register.

    4.10      Fixed bug which caused lockup when using negative
              numbers with RADIX 16 in effect.  Document
              improvements, including index.

    4.09      Speed enhancement. MUL, IMUL, DIV, IDIV now accept more
              operand options.  Memory labels now allowed as indirect
              offsets.  Some bugs in COM2DATA fixed.

    4.08      New option in /BEEP switch.  MAP pseudo-op for use with
              symbolic debuggers.

    4.07      Speed enhancement.  Intersegment JMP and CALL fixed.
              Expressions now allowed in the subset.  Characters + -
              * / ) ( are now reserved for expressions only. (*)

    4.06      Speed enhancement.  Turbo Pascal INLINE facility.
              /VIDEO configuration switch.  New conditionals: IFREG,
              IFREG8, IFREG16, IFSEGREG.  New pseudo-ops: INLINE,
              RADIX, CHKJMP, NOCHKJMP.  New function: TURBO(). Single
              quotes now allowed in strings (use two).  Obsolete


















                                                                   81

              COUNT, ENDC and DM pseudo-ops no longer supported. (*)



    4.05      Speed enhancement.  Characters now work in expressions.
              EJECT and EJECTIF appear *before* page breaks.  /DPAGE
              configuration switch.  Parameter collection on macro
              invocations now halts before comments.  SHL can now
              also be written as SAL.

    4.04      RET with displacement is now assembled correctly.
              Parser bug fixed which crashed on strings with '/'.

    4.03      Assembler variables.  Operand size incompatibility now
              reported. FSUB now assembles correctly.  Intermittent
              bug in expressions with forward references fixed.
              Indirect memory references with offsets and segment
              overides now assemble correctly.  Only the first
              occurrence of a phase error is now reported.

    4.02      DS storage assembly is now turned off during structure
              definitions.  Structures assemble faster. Intermittent
              problem with macro parameter expansion cleared up.

    4.01      8087 support.  WAITON and WAITOFF pseudo-ops. Internal
              labels for macros.  Corrects bug which caused crash on
              certain syntax errors.

    4.00      Total rewrite in Turbo Pascal.  Subset replaces
              interpreted version as free distribution release.
              Faster assembly.  Symbol and macro tables now use all
              available memory.  Nested macros permitted.  Operand
              expressions. $ now returns location counter value.  New
              syntax for segment overrides.  Conditional pseudo-ops
              now evaluate operands.  Improved error and diagnostic
              messages.  DOS 2 or later now required (*). DOS 2 path
              support for files. Setting of DOS 2 ERRORLEVEL. EJECTIF
              pseudo-op added. New configuration switches: /DWIDTH,
              /FF /TIMER, /PATH. CHASM.CFG must now have only one
              switch per line (*).

    3.15      Macros added. New pseudo-ops: MACRO, ENDM, IFE, IFNE,
              IFB, IFNB, ELSE, ENDIF.





















                                                                   82





    3.14      Interpreted version frozen at version 2.13, further
              changes apply only to compiled version.  Memory
              requirement raised to 128K.  INCLUDE, STRUC, ENDSTRUC,
              DM, DW, LIST, NOLIST, COUNT and ENDC pseudo-ops added.
              Alternate mnemonics for the jump on condition
              instructions, and alternate syntax for the DIV and MUL
              instructions.  Binary numbers added.

    2.13      Assembly can now be aborted with the Esc key. Negative
              decimal numbers are working again.  Input lines now
              limited to 80 characters, and labels must begin with a
              non-numeral. (*)

    2.12      Listings can now be suppressed.  Error messages echoed to
              the console on non-screen listings. Expert mode added.

    2.11      Pagination improved.  Listings now time stamped. OFFSETs
              and word values now allowed in DB operand list.

    2.10      Equated symbols allowed in the DB operand list.  Status
              line improved.

    2.09      The first digit of hexadecimal constants must now be in
              the range 0-9. A leading zero is permitted on four digit
              hex constants, to allow fulfilling this condition. (*)

    2.08      Configuration process expanded.  CHASM now skips over
              perforations on printed listings.  EJECT pseudo-op added.

    2.07      Oops.  Configuration file now works as advertised.

    2.06      CHASM now supports reverse long jumps.

    2.05      Compiled version released.  BSAVE pseudo-op.
              Configuration process simplified.

    2.04      TABs are now expanded and replaced with blanks, for
              compatibility with IBM text editors.

    2.03      Two bugs corrected.  The first involved incorrect
              assembly of indirect memory references with
              displacements in the range 128-255.  The second caused


















                                                                   83

              a crash if a hex number longer than 4 digits used.

    2.01      COM2DATA utility added.

    2.00      Corrected a bug in the DS and DB pseudo-ops which caused
              the last label in a program to be redefined as a memory
              location.  Also, the TAB character was added as a new
              delimiter, and PRIMER.DOC was added to the CHASM package.

    1.9       The short jump is now represented with mnemonic JMPS, for
              compatibility with DEBUG version 1.1. (*)

    1.8       The operand type "character" was added as a new way to
              represent immediate data.

    1.7       The DS operator now works for blocks larger than 255
              bytes.  Also, the OFFSET function now works properly in
              the displacement field of an indirect memory reference.

    1.6       A revision of this document.  Some sections were improved
              slightly, and in response to user requests, a section on
              execution of assembled programs was added.

    1.5       Corrected an error which generated the message "Data too
              Long" if the value FFH was used as 8 bit immediate data.

    1.4       User interface improved.  CHASM now traps some common
              input errors such as misspelling a file name, or
              forgetting to turn on your printer.

    1.3       A speed enhancement.  Version 1.3 benchmarks about 5
              times faster than version 1.2.
































                                                                   84

    >>Miscellaneous and A Word From Our Sponsor...<<

    A. Programming Notes:

       1. CHASM is written in a combination of Turbo Pascal and
          CHASM.  This is less incestuous than it sounds: the
          program was written in Turbo, then profiled to single
          out the critical routines.   The rate determining sections
          were rewritten in optimized assembly language, and
          assembled with the original Turbo Pascal version of CHASM.
          These routines were then incorporated as Turbo external
          procedures and functions in a new version of CHASM.

          The speed enhancements possible by "helping out" Turbo with
          CHASM can be quite dramatic.  Replacing four rate limiting
          routines out of over ten thousand lines of Pascal gave
          almost a four-fold speed increase!

          CHASM's source code is available to registered users by
          sending a formatted disk and stamped return mailer.  If you
          make any improvements, I'd like to hear about them for
          possible inclusion in future releases.

          Please note that although you can modify CHASM for your own
          use, under NO CIRCUMSTANCES may you distribute modified or
          translated versions, either in the public domain or for
          profit.

    B. Red Tape and Legal Nonsense:

       1. Disclaimer:

          CHASM is distributed as is, with no guarantee that it will
          work correctly in all situations.  In no event will the
          Author be liable for any damages, including lost profits,
          lost savings or other incidental or consequential damages
          arising out of the use of or inability to use these programs,
          even if the Author has been advised of the possibility of
          such damages, or for any claim by any other party.

          Despite the somewhat imposing statement above, it *is* my
          intention to fix any bugs which are brought to my attention.
          See the appendix on Bug Reporting for more details.





















                                                                   85

       2. Copyright Information:

          The entire CHASM distribution package, consisting of the
          main program, documentation files, and various data and
          utility files, is copyright (c) 1983, 1984, 1985 and 1986
          by David Whitman.  The author reserves the exclusive right
          to distribute this package, or any part thereof, for
          profit. The name "CHASM (tm)", applied to a microcomputer
          assembler program, is a trademark of David Whitman.

          CHASM's Subset version and various subsidiary files may be
          copied freely by individuals for evaluation purposes.  It
          is expected that those who find the package useful will
          make a contribution directly to the author of the program.
          The Subset version identifies itself by displaying a banner
          page giving the author's address and inviting free copying.
          ONLY VERSIONS DISPLAYING THIS BANNER PAGE MAY BE COPIED.

          CHASM's Advanced version is only available to registered
          users who have made the $40 suggested payment.  Registered
          users may copy the program for backup purposes, but must
          restrict use of the program to either one user or one CPU,
          at their option.

          CHASM's source code is made available for educational
          purposes and to allow users to customize for their own
          personal use.  Under NO CIRCUMSTANCES may modified versions
          or translations into other computer languages be
          distributed, either in the public domain or for profit.

          User groups and clubs are authorized to distribute CHASM's
              Subset version under the following conditions:

          1.  No charge is made for the software or documentation.  A
              nominal distribution fee may be charged, provided that
              it is no more than $8 total.

          2.  Recipients are to be informed of the user-supported
              software concept, and encouraged to support it with
              their donations.

          3.  The program and documentation are not modified in ANY
              way, and are distributed together.





















                                                                   86

          Interested manufacturers are invited to contact Whitman
          Software to discuss licensing CHASM for bundling with
          MS-DOS based computer systems.

          Distribution of CHASM outside the United States is through
          licensed distributors, on a royalty basis.  Interested
          distributors are invited to contact Whitman Software.

       3. Royalty Information:

          No royalties are required to distribute programs produced
          using CHASM.  However, if you send me a copy of any major
          program you have produced using CHASM, I'll give you a free
          page of advertising in this document.

       4. Educational Discount:

          Substantial discounts are available for multi-CPU licenses
          of CHASM's Advanced version to educational institutions.
          Contact Whitman Software for details.

    C. An Offer You Can't Refuse.

       CHASM is User-Supported software, distributed under a
       modification of the FREEWARE (tm) marketing scheme developed by
       the late Andrew Fluegelman, whose inspiration and efforts are
       gratefully acknowledged.

       Anyone may obtain a free copy of CHASM's Subset version by
       sending a blank, formatted diskette to the author. An
       addressed, postage-paid return mailer must accompany the disk
       (no exceptions, please).

       A copy of the program, with documentation, will be sent by
       return mail.  The program will carry a notice suggesting a
       payment to the program's author.  Making the payment
       is totally voluntary on the part of the user.  Regardless of
       whether a payment is made, the user is encouraged to
       share the program with others.  Payment for use is
       discretionary on the part of each subsequent user.
























                                                                   87

       The underlying philosophy here is based on three principles:

       First, that the value and utility of software is best assessed
          by the user on his/her own system.  Only after using a
          program can one really determine whether it serves personal
          applications, needs, and tastes.

       Second, that the creation of independent personal computer
          software can and should be supported by those who benefit
          from its use.

       Finally, that copying and networking of programs should be
          encouraged, rather than restricted.  The ease with which
          software can be distributed outside traditional commercial
          channels reflects the strength, rather than the weakness,
          of electronic information.

      If you like this software, please help support it.  Your
      support can take three forms:

      1. Become a registered user.  The suggested payment for
         registration is $40.

      2. Suggestions, comments, and bug reports.  Your comments will
         be taken seriously - user feedback was responsible for most
         of the changes listed in CHASM's revision history.

      3. Spread the word.  Make copies of the Subset for friends.
         Write the editor of your favorite computer magazine.
         Astronomical advertising costs are one big reason that
         commercial software is so overpriced.  To continue offering
         CHASM this way, I need your help in letting other people
         know about CHASM.































                                                                   88

      Those who make the $40 payment to become registered users
      receive the following benefits:

      1. An upgrade to the Advanced version of the program. The
         Advanced version executes twice as fast as the Subset and
         supports macros, conditional assembly and other features.
         An order form for the Advanced version is given at the end
         of this manual.

      2. User support, by phone or mail. The phone number and address
         for help are given below.  SUPPORT IS ONLY AVAILABLE TO
         REGISTERED USERS.  If you call without registering, be
         prepared to listen to a Tanstaafl lecture (*).

      3. Notices announcing the release of significant upgrades.

     (*) Tanstaafl = There Ain't No Such Thing As A Free Lunch.  A
         basic truism of the universe, first expounded by R.A.
         Heinlein.  There is also no such thing as free user support.

    CHASM is copyrighted, and users are requested NOT to make copies
    of the Advanced version other than for their own use.  I am
    strongly opposed to copy protection, and would regret being
    forced to protect CHASM.  Please recognize the amount of time and
    money which went into producing CHASM, and respect the wishes of
    the author.

          David Whitman
          P.O. Box 1157
          North Wales, PA 19454

          (215) 234-4084 (evenings/weekends only)
































                                                                   89

    Appendix A: 8088 Mnemonic List

    This appendix lists the mnemonics which CHASM will recognize,
    grouped roughly by function.  Consult "The 8086 Book" for
    definitions of these instructions, and for the operands each will
    accept.  Mnemonics marked with an asterisk (*) will accept a 'B'
    or 'W' suffix for ambiguous memory references.

    Arithmetic:

    AAA      AAD       AAM       AAS       ADC*      ADD*      CBW
    CWD      CMP*      CMPS*     DAA       DAS       DEC*      DIV*
    IDIV*    IMUL*     INC*      MUL*      NEG*      SBB*      SUB*

    Data Movement:

    LAHF     LDS       LEA       LES       LODS*     MOV*     MOVS*
    POP      POPF      PUSH      PUSHF     SAHF      XCHG     XLAT

    Logical:

    AND*     NOT*      OR*       TEST*     XOR*

    String Primitives:

    CMPS*    LODS*     MOVS*     SCAS*     STOS*

    Instruction Prefixes:

    LOCK     REP       REPE      REPNE     REPNZ     REPZ      SEG

    Program Counter Control: (unconditional)

    CALL     CALLN     CALLF     JMP       JMPF      JMPN      JMPS
    RET

    Program Counter Control: (conditional)

    JA       JAE      JB      JBE      JC        JCXZ       JE
    JG       JGE      JL      JLE      JNA       JNAE       JNB
    JNBE     JNC      JNE     JNG      JNGE      JNL        JNLE
    JNO      JNO      JNP     JNS      JNZ       JO         JP
    JPE      JPO      JS      JZ       LOOP      LOOPE      LOOPNE
    LOOPNZ   LOOPZ




















                                                                   90

    Processor Control:

    CLC      CLD       CLI       CMC       HLT       NOP       STC
    STD      STI       WAIT

    I/O:

    IN       OUT

    Interrupt:

    INT      INTO      IRET

    Rotate and Shift:

    RCL*     RCR*      ROL*      ROR*      SAL*      SAR*      SHL*
    SHR*















































                                                                   91

    Appendix B: 8087 Mnemonic List

    ===> Advanced version only.

    This appendix lists the 8087 mnemonics recognized by CHASM's
    Advanced version, grouped roughly by function.

    Arithmetic:

    FADD     FADDP    FCHS     FDIV     FDIVP     FDIVR    FDIVRP
    FIADD    FIDIV    FIDIVR   FIMUL    FISUB     FISUBR   FMUL
    FMULP    FPREM    FSUB     FSUBP    FSUBR     FSUBRP

    Mathematical Functions:

    F2XM1    FABS     FPATAN   FPTAN    FRNDINT   FSCALE   FSQRT
    FXTRACT  FYL2X    FYL2XP1

    Data Movement:

    FBLD     FBSTP    FILD     FIST     FISTP     FLD      FLD1
    FLDL2E   FLDL2T   FLDLG2   FLDLN2   FLDPI     FLDZ     FST
    FSTP     FXCH

    Comparison:

    FCOM     FCOMP    FCOMPP   FICOM    FICOMP    FTST      FXAM

    Processor Control:

    FCLEX    FDECSTP  FDISI    FENI     FFREE     FINCSTP   FINIT
    FNCLEX   FNDISI   FNENI    FNINIT   FNOP      WAIT

    Processor Status:

    FLDCW    FLDENV   FNSAVE   FNSTCW   FNSTENV   FNSTSW    FRSTOR
    FSAVE    FSTCW    FSTENV   FSTSW



























                                                                   92

    Appendix C: Differences Between CHASM and That Other Assembler

    Virtually all magazine articles about assembly language
    programming on the IBM PC assume that the reader is using That
    Other Assembler - you know, the outrageously priced one.  This
    appendix will try to summarize the differences between the two
    programs.  Please note that I do not own a copy of That Other
    Assembler, and therefore this section is not complete, nor even
    guaranteed to be correct.  I continue to work on this section,
    and users of both products are invited to suggest additions or
    corrections, so that this section will continually improve with
    time.

    A. General Differences

    The biggest difference is philosophical.  The IBM assembler was
    designed for use by professional assembly language programmers,
    to write operating systems and other huge projects.  This is
    reflected in the large size and relative complexity of the macro
    assembler.

    On the other hand, CHASM was designed for use by beginners, to
    write relatively short programs.  This was done by leaving out
    some of the power offered by IBM's assembler, in exchange for
    simplicity and ease of use.  The main simplification involved
    producing object code in the COM format, rather than the EXE
    format chosen by IBM. There are two main consequences of this
    choice:

       1. You can't link routines assembled by CHASM to
          Microsoft languages. (Although you *can* include them in
          Turbo Pascal or BASIC programs.)

       2. Your program has to fit in one 64K segment.  If (shudder!)
          you want to write a 256K assembly language program, you're
          out of luck.

    Like Pascal, the IBM assembler is a strongly typed language.  By
    requiring you to specify the *type* of each memory location you
    will access in your program, the IBM assembler generally knows
    what size of memory operand you want.  If you don't like the
    declared size, you have to override the default with the PTR
    operator.  Thus, to loading the AL register from a location
    declared word is a syntax error, unless you specify BYTE PTR
    before the address.



















                                                                   93


    In analogy to the C language, CHASM is weakly typed. CHASM is
    perfectly happy extracting a byte from where you originally set
    aside a word - CHASM can't tell the difference. In most cases,
    CHASM can tell what size you want from context:  for example, if
    you're using a word register, it *must* be a word memory access. On
    the other hand, for any access to memory which doesn't have a
    register as the other operand, you must add either a 'B' or a 'W'
    to the instruction mnemonic used by IBM.

    B. Miscellaneous Differences:

       1. Short Jumps:

          IBM uses the SHORT keyword, CHASM uses an 'S' suffix.
          Example:

          JMP   SHORT label    ;ibm
          JMPS  label          ;chasm

       2. Offset Function:

          Where IBM precedes an operand with the keyword OFFSET,
          CHASM has a *function* called OFFSET. CHASM requires
          parentheses around the operand. Example:

          MOV   AX, OFFSET FCB  ;ibm
          MOV   AX, OFFSET(FCB) ;chasm

       3. Declaring Storage:

          A.  If you don't care what value a memory location is
              initialized to, the IBM assembler allows you to specify
              '?' as its contents.  In CHASM, if you don't care what
              value the variable is initialized to, just put down a
              zero.  Example:

                 DB   ?      ;ibm
                 DB   0      ;chasm

























                                                                   94


          B.  The IBM assembler allows the keyword DUP as an operand
              in storage declaring pseudo-ops.  This means to repeat
              the definition as many times as the number just before
              the DUP.  Example:

              DW   3 DUP(?)  ;ibm
              DW   0, 0, 0   ;chasm

    4. ASSUME Pseudo-op:

       IBM's ASSUME pseudo-op tells the assembler where the segment
       registers will be pointing.  CHASM always assumes that the CS,
       DS and SS registers point to the beginning of the code
       segment, and that the SS register has been set up to point to
       a valid stack area.  If you find an ASSUME pseudo-op with
       different assumptions for the CS, DS and ES registers you'll
       have to figure out the addresses for memory references in the DS
       and ES segments yourself.

    5. Segment Pseudo-op:

       This pseudo-op is used to set up multiple segments in the IBM
       assembler.  Since CHASM only allows one segment, there is no
       equivalent pseudo-op.  If there is only one segment definition
       in an IBM assembler program, everything is fine, just leave
       the pseudo-op out for CHASM.

       Often times the SEGMENT pseudo-op is used to provide
       addressing of an area in the BIOS, or perhaps the interrupt
       vector table at the beginning of memory.  For example, if a
       program needed to get at the BIOS data area, in the IBM
       assembler you would define a dummy segment with the same
       structure as that in the BIOS listing in Technical Reference:

         DATA          SEGMENT AT 40H
         RS232_BASE    DW    4 DUP(?)
         PRINTER_BASE  DW    4 DUP(?)
         EQUIP_FLAG    DW    ?
         MFG_TST       DB    ?
         MEMORY_SIZE   DW    ?
         IO_RAM_SIZE   DW    ?

       All this is really accomplishing is giving a name to some
       memory locations which are outside the actual program being
       written.


















                                                                   95

       In CHASM, you can accomplish the same thing using a structure.
       This will generate a series of immediate operands whose values
       correspond to the offsets of the labels in the dummy segment.
       You can then reference the locations by enclosing the label
       names in square brackets, to coerce from type immediate to
       type address.

         DUMMY         STRUC            ;simulate dummy segment
         RS232_BASE    DW    0, 0, 0, 0
         PRINTER_BASE  DW    0, 0, 0, 0
         EQUIP_FLAG    DW    0
         MFG_TST       DB    0
         MEMORY_SIZE   DW    0
         IO_RAM_SIZE   DW    0
                       ENDSTRUC
                       MOV AX, [EQUIP_FLAG]

    6. Labels:

       The macro assembler indicates a local label by appending a
       colon (:).  The colon does not become part of the label, and
       is not included when referencing the label.  CHASM's labels
       are all global, and although they may end with a colon, the
       colon will become part of the label itself, and must then be
       used when referencing the label.  Example:

       a2:   mov ax,cx      ;ibm
             jmp a2         ; "

       a2:   mov ax,cx      ;chasm
             jmp a2:        ;  "

       CHASM does provide support for local labels in macros.  See
       the discussion on internal labels in the macro section of this
       document.

    7. Entry Point:

       The macro assembler allows you to specify the point within
       your program where execution will begin.  A label is put
       on the entry point, then to indicate entry, the same label is
       placed on the "END" pseudo-op.  Since COM programs must always
       start at offset 100H, CHASM doesn't allow setting an entry
       point, or use the END pseudo-op.




















                                                                   96

    Appendix D: Description of Files

    Your CHASM distribution disk contains a number of files.  This
    appendix will give a brief statement of the purpose of each.

    FILE           DESCRIPTION
    ----------------------------------------------------------------
    CHASM.CFG       Sample configuration file, for IBM printer.

    CHASM.COM       The CHASM program (either subset or advanced)

    CHASMS.COM      This file may appear on the disk of advanced
                    version users.  It is the current subset version,
                    that can be shared with others.  Please rename it
                    CHASM.COM on their disk, to avoid confusion.

    CHASM.DOC       This document.

    EXAMPLE.ASM     Sample source file.

    COM2DATA.ASM    Source code for COM2DATA filter.

    COM2DATA.DOC    Documentation for COM2DATA.

    FREEWARE.DOC    References to other User Supported programs.

    PRIMER.DOC      Simple introduction to assembly language.

    Occasionally, various other sample source files for CHASM will be
    distributed.  These files will have extension ASM, and will be
    accompanied by a corresponding DOC file.

































                                                                   97

    Appendix E: Bug Reporting Procedure

    Although each version of CHASM is tested extensively prior to
    release, any program of this magnitude is bound to contain a few
    bugs.  It is the intention of Whitman Software to correct any
    genuine problem which is reported.

    If you think you have found a bug in CHASM, please take the time
    to report it for correction.  Although any report is helpful,
    correction of the problem will be easiest if you provide the
    following:

       1. The version of CHASM you are using.  Your problem may have
          been fixed already!

       2. A brief description of what you believe the problem to be.

       3. A printed listing of a source file which manifests the
          problem.

          * DON'T send a 5,000 line program which has one
            manifestation of the bug!  Isolate the problem area, or
            write a short sample routine that demonstrates the bug.

    Unlike normal commercial software, where corrections are saved up
    for a major revision, bugs in CHASM are fixed as soon as reported,
    with a new version released almost immediately (which is why there
    are so many versions in CHASM's revision history).

                   =====> BONUS <======

    If you send a copy of your problem source file on disk, it will
    be returned with either a new, corrected version of CHASM, or
    with an explanation of what you were doing wrong to *think* you'd
    found a bug.





























                                                                   98

    Appendix F: Using CHASM on "Compatible" Systems

    CHASM was written specifically for the IBM PC, but should
    function normally on true "compatibles".  This appendix is a new
    section to summarize compatibility data for various systems.

    Please help make this document section useful to others.  If you
    are using (or are unable to use...) CHASM on a non-IBM computer,
    please write with your experiences.  Does CHASM work correctly on
    your system? Are there specific problem areas?  Can they be
    worked around?

    If you are using a non-IBM system, I strongly recommend that at
    least to start out, you include the line:

          /VIDEO 2

    in your CHASM.CFG file (see the section on "Modifying CHASM's I/O
    Defaults" for a discussion of the CHASM.CFG file).  This will
    force CHASM to use BIOS calls to access your video screen.  By
    default, CHASM writes directly to the screen hardware for maximum
    speed.  Without this line, if your hardware is not *strictly* IBM
    compatible, CHASM's output could be invisible, or your system
    could even hang up and require re-booting.

    The following systems are reported to run CHASM sucessfully:

           Artisoft XT
           AT&T 6300
           Chameleon
           Columbia 1600-1
           Compaq, Compaq DeskPro, Compaq Plus
           Corona PC-2
           Heath 151
           IBM PC, XT, AT, 3270 PC, 3270 PC/G
           ITT XTRA
           Kaypro 16
           Leading Edge Model D
           Mega XT
           PC Designs FD-1
           Sanyo 555
           Sun-ST
           Superior PC
           Tandy 1000, 2000
           Televideo 1605
           Zenith 150


















                                                                   99



    The following systems have one or more problems:

    ================================================================
    Tandy 1200HD - CHASM crashes on some systems.  The problem seems
    to be related to the exact amount of free memory available on the
    system.  You can prevent the crash by slightly changing the
    amount of free memory, to either a higher or lower number.
    Probably the easiest way to do this is to change the number of
    disk buffers, or load an extra device driver such as ANSII.SYS.
    Call Whitman Software if you have trouble.
    ================================================================
    ================================================================
    IBM PCjr. - Several users report getting as far as the source file
    prompt, at which point the program crashes.  Several other users
    (invariably with more than 128K of memory) report that CHASM works
    fine.  The PCjr uses part of user memory for the screen buffer, and
    PCjr users probably need 192K to run CHASM.
    ================================================================












































                                                                  100

          ********ADVANCED VERSION ORDER FORM********

    Please add me to the list of registered CHASM users, and send me
    an upgrade to Advanced CHASM.  I understand that CHASM is
    copyrighted, and agree not to distribute any unauthorized copies
    of this Advanced version.

    Note that version 4 requires DOS 2 (or later)
    and 128K of memory. (192K for PCjr)

    Computer Model: ____________________________________

    Diskette format:            Total Memory: _______K

       __ single sided/9 sector

       __ doubled sided/9 sector

    Check one:

           ___ I enclose a check for $40

           ___ I am a past customer.  The enclosed check brings my
               total payment up to $40.


    Where did you hear about CHASM? ________________________________

    Name:    _______________________________________________________

    Address: _______________________________________________________

    City, State, Zip: ______________________________________________


    ================================================================
         Send order form and check to:

              Whitman Software
              P.O. Box 1157
              North Wales, PA 19454























                                                                  101

      ==============PRINTER ENHANCEMENT===================


    Michael Hoyt, of Soft and Friendly Software, has produced a set
    of printer enhancement programs using CHASM, which is sold under
    the name Prowriter Utilities.  The package supports the following
    printers:

        NEC 8023A-C
        Prowriter I  (C. Itoh 8510)
        Prowriter II (C. Itoh 1550)

    The package contains three programs:

        PRINT_CHARACTERS
        PRINT_SCREEN
        PRINT_SET

    Once PRINT_CHARACTERS is run, it attaches itself to DOS, and
    makes your printer have exactly the same character set as your
    video monitor.  The conversion is very professionally done.
    Particularly impressive are the line drawing characters, which
    actually form connected lines, both horizontally and vertically.

    As if this wasn't enough, PRINT_CHARACTERS adds italics
    capability as well.  The italics make very effective emphasis in
    documents and letters, and look really good.

    PRINT_SCREEN is a graphics screen dump, activated by the normal
    Shift/PrtSc sequence.  Several options are available which trade
    off speed and print quality.  Since I have the mono card, I
    haven't tried PRINT_SCREEN, but Michael sent me a sample printout
    which looked quite nice.

    PRINT_SET is a menu-driven program to turn on and off the various
    special printing modes supported by these printers.  A simple but
    effective program.

    I've been using this package with my NEC 8023 for a few months
    now, and I like them quite a bit.  To get a copy, send $35 to:

        Soft and Friendly
        RR 2 Box 65
        Solsberry, IN 47459




















                                                                  102

         ================= NEW PRODUCT ====================
    VPRINT version 2.00

    VPRINT traps printer output to create a "virtual printer".
    Normal printer output is sent to a disk file of your chosing.
    Redirection of printer output allows you to:

       * Produce formatted disk files with software packages that
         don't support "printing to disk".

       * Set up word processors and other software to work with your
         printer.  Using DEBUG to examine output trapped to disk
         allows you to see exactly what's being sent to your printer,
         to immediately pinpoint problems.

       * Capture output generated on one computer, to be printed on
         another system.

       * Take disk "snapshots" of your video screen.  With VPRINT
         enabled, the PrtSc key copies your screen to disk.

       * Delaying output for later printing.  VPRINT uses less memory
         than most print spoolers (only about 3K), but runs almost as
         fast.  If you can't afford lots of memory for a print
         spooler, you can VPRINT quickly, then print the file during
         a time when your computer is idle.

    VPRINT is distributed as User-Supported software, with a
    suggested payment of $15 from satisfied users.  VPRINT is written
    in CHASM, and registered users get access to VPRINT's heavily
    commented source code, which can be studied to learn about
    writing memory resident software.

    To get VPRINT, send a either $15 for a registered copy, or a disk
    and stamped return mailer for a evaluation copy to:

              Whitman Software
              P.O. Box 1157
              North Wales, PA  19454

    Be sure to specify that you're interested in VPRINT.























                                                                  103


         ================= ALSO AVAILABLE ==================

    If you use the IBM/Microsoft BASIC compiler, chances are your
    programs are bigger and slower than they have to be.  If all
    unreferenced line numbers are removed from your source program,
    and the /N switch is used, BASCOM will "optimize" your program.
    The result is tighter, more efficient code.

    NUMZAP is a utility which carefully scans your source file, and
    deletes all the non-essential line numbers.  Performing this task
    by hand would be prohibitively time consuming and you'd probably
    introduce errors into your program in the process.  NUMZAP will
    do the job in minutes, 100% error free.

    The old BASIC version of CHASM was passed through NUMZAP, and the
    resulting compiled code shrank by a factor of 10% (!).  That 10%
    reduction could make the difference between your program running
    in 64K, or having users with minimal systems get "Out of Memory"
    messages just before your program crashes.

    An added advantage to using NUMZAP is that bigger programs can be
    compiled.  You may not be aware that there is a limit on the size
    of program which the compiler can handle.  BASCOM uses up space
    remembering the offset of each line number in your program. If
    you have too many numbered lines, BASCOM will run out of room and
    you'll get a unending series of "TC" (Too Complex) error
    messages.  By eliminating the unneeded line numbers, you give
    BASCOM more elbow room.  The free space available to compile
    CHASM increased 27% (!) after using NUMZAP.

    NUMZAP is distributed as User-Supported software, with a
    suggested payment of $15 from satisfied users.  To get NUMZAP,
    send a either $15 for a registered copy, or a disk and stamped
    return mailer for a evaluation copy to:

       Whitman Software
       P.O. Box 1157
       North Wales, PA  19454

    Be sure to specify that you're interested in NUMZAP.























                                                                  104

    Index


    $.............................23,26    copyright information............83
    /132.............................10    COUNT............................32
    /80..............................11    DB.........................16,32,52
    /BEEP............................12    debugging........................68
    /BG..............................10    decimal numbers..................19
    /DPAGE...........................12    delimiters.......................14
    /DWIDTH..........................12    description of files.............95
    /FF..............................11    diagnostic messages..............62
    /FG..............................10    direct addressing................22
    /LINES...........................11    DM...............................33
    /PAGELEN.........................11    DS.........................16,33,52
    /PATH.........................12,59    duplicate labels.................17
    /TIMER...........................13    DW.........................16,34,52
    /VIDEO.........................9,97    educational discount.............85
    8086 Book........................15    EJECT............................34
    8087.......................28,31,55    EJECTIF..........................34
    8087 registers...................22    ENDP..........................35,38
    =................................40    ENDSTRUC...................35,39,52
    aborting assembly................59    EQU.....................15,16,20,35
    advanced version order form......99    error messages...................62
    ambiguities......................28    ERRORLEVEL.......................60
    arithmetic operators.............25    EXE format.......................67
    ASCII............................20    execution of assembled program...67
    assembler variables..............40    expert mode......................60
    BASIC.........................69,69    expression result types..........25
    binary numbers...................19    expressions................20,23,25
    BSAVE.........................32,70    fields...........................14
    bug reporting procedure..........96    hex numbers......................19
    changes to CHASM.................79    IBM macro assembler..............91
    characters.......................20    IF............................36,46
    CHASM revision history...........79    immediate data...................19
    CHASM's source code..............83    INCLUDE..........................36
    CHASM.CFG.........................9    indirect addressing........23,53,75
    CHKJMP...........................40    indirect branching............29,57
    coercing expression results......26    INLINE........................35,76
    COM format.......................67    input files......................14
    COM2DATA......................69,69    instruction prefixes.............30
    comments.........................15    internal labels..................44
    compatibles....................7,97    interrupt vectors................68
    conditional assembly..........36,45    JMP..............................29
    configuring CHASM.................9    JMPS.............................29
    conversion of programs...........91    label significant characters.....17



















                                                                  105

    labels.....................15,16,24    red tape.........................83
    legal nonsense...................83    registers........................21
    LENGTH function............20,27,52    REP..............................30
    limitations.......................6    requirements......................7
    LIST.............................36    reserved characters..............14
    listing.......................58,58    reserved strings.................18
    location counter..............23,26    resolution of ambiguities........28
    LOCK.............................30    royalty information..............85
    MACRO............................37    running assembled programs.......67
    macro blank parameters...........44    running CHASM....................58
    macro internal labels............44    SEG..............................30
    macro nesting....................45    segment override........22,30,56,75
    macro parameters.................43    segment registers................21
    macros...........................41    short jumps......................29
    MAP...........................37,78    sign extended.................21,28
    memory operands..................22    source code (CHASM's)............83
    messages.........................62    standard DOS files...............14
    mnemonic list (8087).............90    strings..........................24
    mnemonic list (8088).............88    STRUC.........................39,52
    modifying CHASM'S I/O defaults....9    structures.................20,51,72
    multi-segment programs...........57    symbol table dump................59
    NOCHKJMP.........................40    symbolic debugging...............78
    NOLIST...........................37    syntax...........................14
    NUMZAP..........................102    system requirements...............7
    object code format...............67    Tandy............................98
    OFFSET function...............20,26    Tanstaafl........................87
    operand expressions..............25    The 8086 Book....................28
    operands.........................19    TURBO function...................20
    order form.......................99    Turbo Pascal...............20,70,83
    ORG........................37,52,69    Turbo Pascal function results....73
    outside the program segment......57    Turbo Pascal inline code.........76
    pausing assembly.................59    TURBO(x) function................77
    PC-Write.........................14    user-supported software..........85
    PCjr...........................7,98    VPRINT..........................101
    permission to copy...............84    WAIT.............................55
    phase error.............35,49,52,64    WAITOFF.......................39,55
    PRIMER.DOC........................4    WAITON...........................39
    PROC.............................38
    program segment prefix........67,67
    program termination..............68
    programming notes................83
    prompt mode......................58
    pseudo-ops.......................32
    PSP...........................67,67
    RADIX.........................19,38




















```
{% endraw %}

## CHMOD.ASM

{% raw %}
```
;================================================
; CHMOD    Version 2.0   3/8/86
;
;         by David Whitman
;
; Utility to examine and modify the read/write
; mode of a file under DOS 2.0.
;
; Syntax:
;
; CHMOD [d:][path] [filespec] [/N] [/R] [/S] [/H]
;
; If no file is specified, a help message is printed,
; summarizing the CHMOD command syntax.
;
; The attribute byte of the specified file is set
; according to the selected options:
;
;     /N - normal file
;     /R - read only
;     /S - system file
;     /H - hidden file
;
; Multiple options may be selected.  /N will cancel
; options preceding it in the command line.
;
; If no options are selected, a report on the current
; mode of the specified file is sent to the standard output.
;
; On exit, ERRORLEVEL is set to reflect the current file
; mode, and/or the success of the change, as follows:
;
;   normal file      --> 0
;   read only file   --> 1
;   hidden file      --> 2
;   system file      --> 4
;   failed operation --> 8
;
; Requires DOS 2.0, will abort under earlier versions.
;
; This source file is in CHASM assembler syntax.
;======================================================

;==========
; EQUATES
;==========

@chmod     equ    43H        ;change file mode
@dosver    equ    30H        ;get DOS version number
@exit      equ    4CH        ;set ERRORLEVEL and exit
@prnstr    equ    09H        ;print string

normal     equ    00H
readonly   equ    01H
hidden     equ    02H
system     equ    04H
failure    equ    08H

true       equ    0FFH       ;boolean values
false      equ    00H

cr         equ    0DH        ;carriage return
lf         equ    0AH        ;line feed
beep       equ    07H        ;bell

param_area  equ   [81H]      ;unformatted parameter area
param_count equ   [80H]      ;number of characters in above

;===========================================================

chmod      proc   near
           call   chkdos              ;test for proper DOS
           call   parsefile           ;parse path/filename
           call   options             ;parse options, set flags
           call   doit                ;perform specified action
           call   cleanup             ;final processing, exit
           call   set_errlev          ;set errorlevel value in AL
           mov    ah, @exit           ;and exit
           int    21H
           endp

;=================================================
; SUBROUTINE CHKDOS
; Checks for proper DOS, exits if not 2.0 or above
;=================================================
chkdos     proc   near
           mov    ah, @dosver         ;get dos version number
           int    21H                 ;with dos call
           cmp    al, 2               ;2.0 or over?
           jae    a1                  ;yes, skip

           mov    ah, @prnstr         ;no, bitch
           mov    dx, offset(baddos)  ;point to message
           int    21H                 ;and print it
           pop    ax                  ;reset stack
           int    20H                 ;and exit
a1
           ret

baddos     db     beep, cr, lf, 'This program requires DOS 2.0!' cr, lf, '$'
           endp

;===================================================
; SUBROUTINE PARSEFILE
; Scans the parameter area for a path/filename.
; Sets PATHPTR to point to the name, and terminates
; it with a 0, to make an ASCIIZ string.
;
; If no name is found, ERRORLEVEL is set to 8,
; and control is passed back to DOS.
;===================================================
parsefile  proc   near

           xor    ch,ch               ;cx <== # of parameter characters
           mov    cl, param_count     ;    "
           mov    di, offset(param_area)
           mov    al, ' '             ;search for first non-blank
           rep
           scasb
           jcxz   berror              ;nothing? bitch

           dec    di                  ;back up to character found
           inc    cx                  ; "
           cmpb   [di], '/'           ;are we into the options?
           jne    b1                  ;no, skip
berror     mov    ah, @prnstr         ;yes, print help message
           mov    dx, offset(nofile)
           int    21H
           pop    ax                  ;reset stack
           mov    ah, @exit           ;set error level and exit
           mov    al, failure
           int    21H

b1
           mov    pathptr, di         ;otherwise point to pathname

           repne                      ;now search for next blank
           scasb
           jcxz   b2                  ;reached end of data?
           dec    di                  ;nope, back up to last non-blank
           inc    cx                  ; "
b2         movb   [di], 00H           ;ASCIIZ string terminator
           ret

pathptr    dw   0000H                 ;pointer to path/filename
nofile     db   cr, lf
           db   'CHMOD version 2.0' cr lf
           db   cr lf
           db   'Syntax:  CHMOD [d:][path] [filespec] [/N] [/R] [/S] [/H]'
           db   cr lf cr lf
           db   'The attribute byte of the specified file is set' cr lf
           db   'according to the selected options:' cr lf
           db   cr lf
           db   '     /N - normal file' cr lf
           db   '     /R - read only' cr lf
           db   '     /S - system file' cr lf
           db   '     /H - hidden file' cr lf
           db   cr lf
           db   'Multiple options may be selected.' cr lf
           db   cr lf
           db   'If no options are specified, a report of the current' cr lf
           db   'attributes is printed, and ERRORLEVEL is set to the' cr lf
           db   'value of the attribute byte.' cr lf
           db   '$'
           endp
;=====================================================
; SUBROUTINE OPTIONS
; Scans the command line for options, and builds
; the new attribute byte in NEWATTRIB.
;
; If options are found, OPFOUND is set true, otherwise
; it remains false.
;======================================================
options    proc near
                                      ;cx still has number of chars. left,
                                      ;di points to current position.

c1         mov   al, '/'              ;options marked with '/'
           repnz                      ;scan for options
           scasb
           jcxz  cexit                ;reached end

           mov   al, [di]             ;get option character
           and   al, 0DFH             ;guarantees upper case

           cmp   al, 'N'              ;normal file?
           jne   c2                   ;no, skip
           movb  newattrib, normal    ;yes, clear all bits
           movb  opfound, true        ;set found flag
           jmps  c1                   ;and loop

c2         cmp   al, 'R'              ;read only?
           jne   c3                   ;no, skip
           orb   newattrib, readonly  ;yes, set option flag
           movb  opfound, true        ;set found flag
           jmps  c1                   ;and loop

c3         cmp   al, 'S'              ;system?
           jne   c4                   ;no, skip
           orb   newattrib, system    ;yes, set option flag
           movb  opfound, true        ;set found flag
           jmps  c1                   ;and loop

c4         cmp   al, 'H'              ;hidden?
           jne   c1                   ;no, just loop
           orb   newattrib, hidden    ;yes, set option flag
           movb  opfound, true        ;set found flag
           jmps  c1                   ;and loop

cexit      ret

newattrib  db    00H                  ;options selected - new attribute byte
opfound    db    00H                  ;if non-zero, an option was decoded
           endp

;========================================================
; SUBROUTINE DOIT
; Does the actual work.  Either sets new file attribute,
; or reads the existing attribute.
;========================================================
doit       proc  near
                                      ;read the old attributes
           mov   dx, pathptr          ;point DX at ASCIIZ path/filename
           mov   al, 00H              ;read file mode
           mov   ah, @chmod           ;specify CHMOD call
           int   21H                  ;call dos
           jc    derr                 ;carry flag means error
           and   cl, 07H              ;OK? mask off high bits
           mov   oldattrib, cl        ;save attribute byte

           cmpb  opfound, true        ;were there any options?
           jne   dexit                ;no? exit
                                      ;yes, reset attributes
           mov   dx, pathptr          ;point DX at ASCIIZ path/filename
           xor   ch, ch               ;CX <== new attribute byte
           mov   cl, newattrib        ; "
           mov   al, 01H              ;set file mode
           mov   ah, @chmod           ;specify CHMOD call
           int   21H                  ;call dos
           jc    derr                 ;carry flag means error
           jmps  dexit                ;otherwise done

derr       cmp   al, 02H              ;file not found error?
           jne   d3
           mov   dx, offset(fnferror)
           jmps  dabort

d3         cmp   al, 03H              ;path not found error?
           jne   d4
           mov   dx, offset(pnferror)
           jmps  dabort

d4         cmp   al, 05H              ;access denied error?
           jne   dabort
           mov   dx, offset(aderror)
           jmps  dabort

           mov   dx, offset(unkerror) ;not matched? panic

dabort     mov   ah, @prnstr          ;print the error message
           int   21H
           pop   ax                   ;reset stack
           mov   al, failure          ;set errorlevel
           mov   ah, @exit            ;and abort to dos
           int   21H

dexit      ret                        ;normal return

oldattrib  db    00H
fnferror   db    cr, lf, 'File not found.' cr, lf, '$'
pnferror   db    cr, lf, 'Path not found.' cr, lf, '$'
aderror    db    cr, lf, 'Access denied.'  cr, lf, '$'
unkerror   db    cr, lf, 'CHMOD internal error.' cr, lf, '$'
           endp

;==================================================
; SUBROUTINE CLEANUP
; Reports old and new attributes.
;==================================================
cleanup    proc  near
           mov   ah, @prnstr          ;print crlf
           mov   dx, offset(newline)
           int   21H

           cmpb  opfound, true        ;were options specified?
           jne   p_current            ;no, so just report current settings

           mov   ah, @prnstr          ;yes, report old attributes...
           mov   dx, offset(oldheader)
           int   21H
           mov   bl, oldattrib
           call  print_att

           mov   ah, @prnstr          ;...and the new ones
           mov   dx, offset(newheader)
           int   21H
           mov   bl, newattrib
           call  print_att
           jmps  clean_exit

p_current  mov   ah, @prnstr          ;no options, just report current
           mov   dx, offset(newheader)
           int   21H
           mov   bl, oldattrib
           call  print_att

clean_exit ret
newline    db    cr lf '$'
oldheader  db    'Previous Attributes:  $'
newheader  db    'Current Attributes:   $'
           endp

;===========================================
; PRINT_ATT
;
; Decodes an attribute byte in BL and prints
; a summary.
;===========================================
print_att  proc near
           mov   ah, @prnstr
           test  bl, readonly         ;read only?
           jz    e1
           mov   dx, offset(roattrib) ;print attribute message
           int   21H

e1         test  bl, system           ;system?
           jz    e2
           mov   dx, offset(sattrib)  ;print attribute message
           int   21H

e2         test  bl, hidden           ;hidden?
           jz    e3
           mov   dx, offset(hattrib)  ;print attribute message
           int   21H

           ;note: a "normal" byte has none of the bits set,
           ;so we use CMP rather than TEST
e3         cmp   bl, normal           ;normal?
           jne   eexit
           mov   dx, offset(nattrib)  ;print attribute message
           int   21H

eexit      mov   dx, offset(eolstr)   ;terminate line
           int   21H
           ret

roattrib   db            'Read only  $'
sattrib    db            'System  $'
hattrib    db            'Hidden  $'
nattrib    db            'Normal  $'
eolstr     db            cr lf cr lf '$'
           endp

;===========================================
; SET_ERRLEV
;
; Moves an attribute value into AL
; for output in ERRORLEVEL.  If options were
; specified, the new attribute byte is used,
; otherwise the existing value is used.
;============================================
set_errlev proc   near
           cmpb   opfound, true       ;options found?
           jne    se1                 ;no, skip
           mov    al, newattrib       ;yes, use new attributes
           jmps   se_exit
se1        mov    al, oldattrib       ;no, use old attributes
se_exit    ret
           endp
```
{% endraw %}

## CHMOD.DOC

{% raw %}
```
CHMOD
Command

----------------------------------------------------------------
Purpose:  Displays or modifies the attributes of the specified
          file.

Format:   CHMOD [d:][path] filename[.ext] [/n][/r][/h][/s]

Type:     Internal         External
                             ***

Remarks:  The specified file's attributes are modified according
          to the specified options:

                   /N  Normal
                   /R  Read-only
                   /H  Hidden
                   /S  System

          Multiple options may be specified.  /N will cancel any
          options preceding it on the command line.

          If no options are specified, a report of the file's
          current attributes is sent to the standard output.

          Upon exit, CHMOD sets ERRORLEVEL according to the
          file's current (updated) attributes, and/or the success
          of the operation:

                   Normal file      ==> 0
                   Read-only file   ==> 1
                   Hidden file      ==> 2
                   System file      ==> 4
                   Failed operation ==> 8

          The only documented way to generate the "failed
          operation" error is to specify a non-existant file.

          CHMOD requires DOS 2.0, and will abort under earlier
          versions.

Author:   David Whitman
          P.O. Box 1157
          North Wales, PA 19454

This program is in the public domain.

```
{% endraw %}

## COM2DATA.ASM

{% raw %}
```
;======================================================
; COM2DATA  release 2.1
; (c) 1984 by David Whitman
;
; High speed DOS 2.0 filter version
; of file conversion utility.
;
; Reads a COM file from STDIN and
; writes BASIC data statements to STDOUT
;
; Syntax:  COM2DATA [<filename] [>filename] [linenumber]
;
; The starting line number defaults to 1000 unless a number
; is given on the command line.
;
; Requires DOS 2.0, will abort under earlier versions.
;
; This source file is in CHASM assembler syntax.
;======================================================


@dosver        equ     30H             ;get dos version #
@prnchr        equ     02H             ;print character
@prnstr        equ     09H             ;print string
@read          equ     3FH             ;read device
@write         equ     40H             ;write device

beep           equ     07H             ;bell character
lf             equ     0AH             ;line feed character
cr             equ     0DH             ;carrage return character
comma          equ     2CH             ;comma character
param_count    equ     [80H]           ;number of chars in param_area
param_area     equ     [81H]           ;command line parameter text
stdin          equ     0000H           ;standard input device
stdout         equ     0001H           ;standard output device
stderror       equ     0002H           ;standard error output device
buf_length     equ     512             ;input buffer size

com2data       proc    near
               call    init            ;check dos, print title
               call    get_linenum     ;get starting line number
               call    doit            ;run conversion
               call    cleanup         ;final processing
               int     20H             ;return to dos
               endp

init           proc    near            ;initialization routine
               mov     ah, @dosver     ;what dos are we under?
               int     21H
               cmp     al,2            ;dos 2.0 or over?
               jae     a1              ;yes, skip

               mov     ah, @prnstr     ;no, bitch
               mov     dx, offset(baddos)
               int     21H
               pop     ax              ;reset stack
               int     20              ;and exit

a1             mov     ah, @write      ;send title message
               mov     bx, stderror    ;to stderror
               mov     cx, title_msg_end-title_msg
               mov     dx, offset(title_msg)
               int     21H
               ret

baddos         db      beep cr lf
               db      'This program requires DOS 2.0!' cr lf
               db      cr lf '$'


title_msg      db      cr lf
               db      'COM2DATA version 2.1' cr lf
               db      'Copyright (c) 1986 by D. Whitman' cr lf
               db      cr lf
title_msg_end
               endp

get_linenum    proc     near           ;parse command line for
                                       ;starting line number
               xor     ch,ch           ;cx <== # of param chars
               mov     cl, param_count ;   "
               cmp     cl, 0           ;any parameters?
               je      b1              ;no, exit with default

               mov     di, offset(param_area)
               mov     al, ' '         ;search for first non-blank
               rep
               scasb
               jcxz    b1              ;nothing? exit with default

               dec     di              ;back up to character found
               inc     cx              ; "

               xor     ax,ax           ;will hold building linenum
               jmps    enter_convert   ;convert string to binary

convert        mov     bx, 10          ;multiply running total by 10
               mul     ax,bx
               jo      bad_num         ;overflow?  error exit
enter_convert  xor     bx,bx           ;clear out top half
               mov     bl, [di]        ;get a digit into al
               inc     di              ;bump pointer
               cmp     bl, '0'         ;must be between 0
               jb      bad_num
               cmp     bl, '9'         ;and 9
               ja      bad_num
               sub     bl, '0'         ;convert to binary
               add     ax, bx          ;add to running total
               jo      bad_num         ;overflow? error exit
               loop    convert

               mov     linenum, ax     ;store converted number
               ret                     ;normal return

bad_num        mov     ah, @write      ;print error message
               mov     bx, 2           ;on stderror
               mov     cx, num_msg_end-num_msg
               mov     dx, offset(num_msg)
               int     21H             ;and use default
b1             ret                     ;normal return

linenum        dw      1000            ;line number defaults to 1000


num_msg        db      beep cr lf
               db      'Invalid starting line number - Defaulting to 1000' cr lf
               db      cr lf
num_msg_end
               endp

doit           proc    near            ;convert infile to data

               call    write_linenum   ;initialize output buffer
do1            mov     ah, @read       ;read
               mov     bx, stdin       ;from stdin
               mov     cx, buf_length  ;one buffer's worth
               mov     dx, offset(in_buf)
               int     21H
               test    ax, ax          ;test for EOF
               jz      done            ;no bytes? done

               mov     cx, ax          ;cx <== # of bytes read
               mov     si, offset(in_buf)
do2            lodsb                   ;
               call    output          ;convert and send to stdout
               loop    do2             ;loop for # of bytes read
               jmps    do1             ;then refill buffer

done           ret
               endp

output         proc    near            ;convert byte in al to hex string
                                       ;and send to stdout

               cmpw    cur_pos, offset(eol) ;is the line full?
               jb      o1              ;no, skip
               call    newline         ;yes, dump buffer

o1             call    send_byte       ;print hex value of byte
               addw    cur_pos, 8      ;bump line positions used
               ret                     ;and exit

cur_pos        dw      offset(first_hex) ;current position in line
               endp


newline        proc    near            ;starts a new data line

               push    ax              ;save state
               push    dx              ; "

               mov     ah, @prnstr      ;print line
               mov     dx, offset(out_buf)
               int     21H

               movw    cur_pos, offset(first_hex)   ;reset pointer
               addw    linenum, 10                  ;bump line number

               call    write_linenum                ;update line number

               pop     dx              ;restore state
               pop     ax
               ret                     ;and exit
               endp

;==========================================================
; WRITE_LINENUM
;
; Updates the line number field of the output line buffer.
;==========================================================
write_linenum  proc    near
               push    ax              ;save machine state
               push    bx
               push    cx
               push    dx
               push    di

               mov     al, ' '         ;blank out old number
               mov     di, offset(out_buf)
               mov     cx, 5
               rep
               stosb

               mov    ax, linenum      ;print line number

                                       ;the following code fragment was written
                                       ;by Bob Smith and published in PC Age
                                       ;Volume 3.1 (Jan. '84) p. 116

               mov     bx, 10          ;set up divisor
               xor     cx, cx          ;clear counter
nxt_in         xor     dx, dx          ;clear for division
               div     bx              ;dl <== AX mod 10
               or      dl, '0'         ;convert to ascii digit
               push    dx              ;save digit
               inc     cx              ;bump counter
               and     ax, ax          ;are we done?
               jnz     nxt_in          ;nope, keep going
                                       ;stack now has digits of number
                                       ;end of Bob Smith's code

               mov     di, offset(out_buf) ;peel digits off stack
nxt_out        pop     ax                  ;into number field
               stosb
               loop    nxt_out

               pop     di              ;restore state
               pop     dx
               pop     cx
               pop     bx
               pop     ax
               ret                     ;and exit
               endp                    ;(write_linenum)


send_byte      proc    near            ;converts byte in AL to hex string
                                       ;and stuffs it into output buffer

               push    bx
               push    dx
               push    ax

               mov     bx, offset(table)  ;point to xlat table

               and     al, 0F0H        ;mask off low nybble
               shr     al
               shr     al
               shr     al
               shr     al
               xlat                    ;translate to hex string
               mov     bp, cur_pos     ;and stuff it into buffer
               mov     [bp], al

               pop     ax              ;recover character
               and     al, 0FH         ;mask off high nybble
               xlat                    ;translate low nybble to hex
               mov     1[bp], al       ;and stuff it into buffer

               pop     dx
               pop     bx
               ret                     ;and return

table          db '0123456789ABCDEF'
               endp

cleanup        proc    near            ;send out any partial line

               cmpw    cur_pos, offset(first_hex) ;any unprinted chars?
               je      cexit                      ;no, exit

               mov     ah, @write
               mov     bx, stdout

               mov     cx, cur_pos                ;calculate # of chars
               cmp     cx, offset(eol)            ;to output
               je      c_full_line                ;special case: full line
               sub     cx, offset(out_buf)        ;normal case: incomplete line
               sub     cx, 6                      ;don't use ',' or next field
               jmps    c_length_done
c_full_line    mov     cx, eol-out_buf

c_length_done
               mov     dx, offset(out_buf)
               int     21H

               mov     ah, @prnstr                ;print cr/lf to end line
               mov     dx, offset(eol)
               int     21H
cexit          ret
               endp



out_buf        ds      5               ;5 digit line number
               db      '  DATA'
               db      '   &H'        ;8 hex bytes per line
first_hex      db      '00' comma      ;first hex field
               db      '   &H00' comma
               db      '   &H00' comma
               db      '   &H00' comma
               db      '   &H00' comma
               db      '   &H00' comma
               db      '   &H00' comma
               db      '   &H00'
eol            db      cr lf '$'       ;end of output line

in_buf
```
{% endraw %}

## DETAB.ASM

{% raw %}
```
;===================================================
; PROGRAM DETAB    Version 1.0 by Dave Whitman
;
; Filter to expand tabs.
; System standard tab stops every 8 columns are assumed.
;
; Syntax:  DETAB [?] [<infile] [>outfile]
;
; The ? option prints a help message.
;
; Requires DOS 2.0, will abort under earlier versions.
;====================================================

;============
; Equates
;============

@read   equ    3FH                ;read file/device
@write  equ    40H                ;write file/device
@dosver equ    30H                ;get dos version
@prnstr equ    09H                ;print string

cr      equ    0DH                ;carriage return character
lf      equ    0AH                ;line feed character
tab     equ    09H                ;horizontal tab character

stdin   equ    0000H              ;standard input
stdout  equ    0001H              ;standard output

buf_size       equ     8192       ;size of input and output buffers
max_line       equ     255        ;maximum input line length
yes            equ     0FFH       ;boolean true
no             equ     00H        ;boolean false

param_count    equ     [80H]
param_area     equ     [81H]
mem_avail      equ     [06H]      ;PSP field: memory available in segment

main   proc    far
       call    setup           ;check dos, parse options
       call    stops           ;fill tab stop array
       call    process         ;expand tabs
       int     20H             ;and return to dos
       endp

;======================================
; SUBROUTINE SETUP
; Checks for proper DOS, parses options
;======================================
setup  proc    near

       mov     ah, @dosver     ;what dos are we under?
       int     21H
       cmp     al, 2           ;2.0 or over?
       jae     a_mem           ;yes, skip

       mov     ah, @prnstr     ;no, bitch
       mov     dx, offset(baddos)
       int     21H
       pop     ax              ;reset stack
       int     20H             ;and exit

a_mem  mov     ax, mem_avail   ;do we have room for the buffers and array?
       cmp     ax, buf_size*2+max_line
       jae     a_help          ;yes
       mov     ah, @prnstr     ;no, bitch
       mov     dx, offset(nomem)
       int     21H
       pop     ax              ;reset stack
       int     20H             ;and exit

a_help xor     ch,ch           ;cx <== param count
       mov     cl, param_count ;  "
       cmp     cl, 00H         ;any params?
       je      a_exit          ;return if none

       mov     di, offset(param_area)   ;scan for help request
       mov     al, '?'
       repnz                   ;repeat until matched or end
       scasb
       jnz     a_exit          ;reached end, no match? skip
       mov     ah, @prnstr     ;found ?, so print help
       mov     dx, offset(help)
       int     21H
       pop     ax              ;pop stack
       int     20H             ;and exit

a_exit ret

baddos db      cr lf 'This program requires DOS 2.0!' cr, lf, '$'

nomem  db      cr lf 'Insufficient memory, program aborted' cr lf '$'


help   db      cr lf
       db      'DETAB version 1.0 by D. Whitman' cr lf
       db      cr lf
       db      'Syntax:  DETAB [?] [<infile] [>outfile]' cr lf
       db      cr lf
       db      'Reads stdin, expands tab characters, '
       db      'and writes to stdout.' cr lf
       db      'Tab stops are set every 8 columns.' cr lf
       db      cr lf
       db      'Option:' cr lf
       db      '    ?  = print this help message' cr lf
       db      cr lf
       db      'This program is in the public domain.' cr lf
       db      cr lf '$'
       endp

;=========================================
; SUBROUTINE STOPS
;
; Set tab stops in array.  Following the system
; standard, stops are set every 8 columns.
;=========================================

stops  proc  near
       mov   di, offset(tabstops)      ;point to array
       mov   cx, 1                     ;count columns
       mov   dl, 8                     ;stops every 8 columns
s1     cmp   cx, max_line              ;are we done?
       jg    s_exit                    ;yes, exit
       mov   ax, cx                    ;no, continue: get count
       div   dl                        ;ah gets remainder
       cmp   ah, 0                     ;multiple of eight?
       jne   s2                        ;branch if not
       movb  [di], yes                 ;yes, so mark tab
       jmps  s3                        ;and skip
s2     movb  [di], no                  ;no, mark no tab
s3     inc   cx                        ;bump counts
       inc   di                        ; "     "
       jmps  s1                        ;and loop till done
s_exit ret
       endp

;=========================================
; SUBROUTINE PROCESS
;
;   1. load input buffer
;   2. convert each char, pass to output buffer
;   3. dump output buffer
;   4. repeat until EOF
;==========================================

process proc    near

       mov     di, offset(buf_out) ;point to output buffer
       movw    outnum, 0           ;output buffer is empty
       movw    column, 0           ;start in column 0

bu1    mov     ah, @read           ;read
       mov     bx, stdin           ;from stdin
       mov     cx, buf_size        ;one buffer's worth
       mov     dx, offset(buf_in)
       int     21H
       cmp     ax, 00H             ;test for EOF
       jz      budone              ;if so, done

       mov     cx, ax              ;cx <== number of chars read
       mov     si, offset(buf_in)  ;source is input buffer


bu2    lodsb                       ;al <== next char from buffer
       mov     bx, column          ;bx <== current column
       cmp     al, tab             ;test if tab character
       jne     bu3                 ;nope, skip
       mov     al, ' '             ;yes, replace with spaces
bu2a   call    putchar             ;send blank to StdOut
       inc     bx                  ;bump column count
       cmp     bx, max_line        ;line overflowing?
       jge     bu2b                ;yes, so assume we're at a stop
       cmpb    offset(tabstops)[bx], yes    ;are we at a stop?
       jne     bu2a                ;no, keep emitting spaces
bu2b   jmps    bu5                 ;yes, so done expanding

bu3    cmp     al, lf              ;EOL?
       jne     bu4                 ;nope, skip
       mov     bx, 0               ;reset column counter
       call    putchar             ;print char
       jmps    bu5                 ;and skip

bu4    call    putchar             ;otherwise, just send char to StdOut
       inc     bx                  ;and bump column count

bu5    mov     column, bx          ;save column count
       loop    bu2                 ;loop until buffer processed
       jmps    bu1                 ;and loop until EOF

budone cmpw    outnum, 0           ;input done.  Any outstanding output?
       jle     buexit              ;no, exit
       call    dumpbuf             ;yes, empty buffer
buexit ret
       endp

;===================================================
; SUBROUTINE PUTCHAR
;
; Moves the character in AL into the output buffer.
; If the buffer is now full, it is dumped to disk.
;===================================================

putchar proc near
        stosb                   ;move character into buffer
        incw  outnum            ;bump count of chars in buffer
        cmpw  outnum, buf_size  ;if buffer full?
        jl  p_exit              ;no, skip
        call dumpbuf            ;yes, dump buffer to disk
p_exit  ret
        endp

;==================================================
; SUBROUTINE DUMPBUF
;
; Dumps the output buffer to StdOut.
;==================================================
dumpbuf proc near
        push    ax             ;save active registers
        push    bx             ; "      "      "
        push    cx             ; "      "      "
        mov     ah, @write     ;write
        mov     bx, stdout     ;to stdout
        mov     cx, outnum     ;number of chars for output
        mov     dx, offset(buf_out)
        int     21H
        movw    outnum, 0            ;reset buffer
        mov     di, offset(buf_out)  ;  "     "
        pop     cx             ;restore active registers
        pop     bx             ;   "       "       "
        pop     ax             ;   "       "       "
        ret
        endp
;==================
; GLOBAL VARIABLES
;==================

innum  dw 0000H      ;number of characters in input buffer
outnum dw 0000H      ;number of characters in output buffer
column dw 0000H      ;current column in line

;=====================================================
;BUFFERS
;
; No space is actually allocated for the buffers.
; At run time, the program checks to ensure there
; is suffcient free memory, then uses the memory
; immediately after itself for buffers.
;
; This stratagy minimizes the size of the object file,
; and lets the program load quicker.
;======================================================

tabstops               ;tab stop array

         org offset(tabstops+max_line)

buf_in                 ;input buffer

         org offset(buf_in+buf_size)

buf_out                ;output buffer
```
{% endraw %}

## DSIZE.ASM

{% raw %}
```
;===============================================
; PROGRAM DSIZE  Version 1.00 by Dave Whitman
;
; Syntax:  DSIZE [d:]
;
; Examines the disk in the specified drive
; and sets ERRORLEVEL as follows:
;
;  0 = unknown format
;  1 = single sided, 8 sectors (160K)
;  2 = single sided, 9 sectors (180K)
;  3 = double sided, 8 sectors (320K)
;  4 = double sided, 9 sectors (360K)
;
; DSIZE will only run under DOS 2.0
;
; This source file is in CHASM assembler syntax.
;===============================================

;===============
; Equates
;===============
@getver        equ     30H     ;get DOS version number
@getfsp        equ     36H     ;get disk free space
@prnstr        equ     09H     ;print string to console
@exit          equ     4CH     ;exit and set ERRORLEVEL

cr     equ     0DH             ;carriage return
lf     equ     0AH             ;linefeed
beep   equ     07H             ;bell

param_count    equ     [80H]
param_area     equ     [81H]

drv1   equ     [5CH]           ;drive number in 1st fcb

dsize  proc    far

       cmp     al, 0FFH           ;is the drivespec valid?
       jne     chkver             ;yes, continue
       mov     dx, offset(baddrv) ;no, bitch
       mov     ah, @prnstr        ;print message
       int     21H                ;with dos call
       jmp     exit               ;and quit

chkver mov     ah,@getver         ;what DOS are we under?
       int     21H                ;ask DOS.

       cmp     al,00              ;earlier than 2.0?
       jne     param              ;no, continue
       mov     dx, offset(baddos) ;yes, bitch
       mov     ah, @prnstr        ;print message
       int     21H                ;with dos call
       jmps    exit               ;and quit

param  xor     ch, ch             ;cx <== number of parameter chars
       mov     cl, param_count
       cmp     cl, 00H            ;any parameters?
       je      chkdsk             ;skip if none
       mov     di, offset(param_area) ;scan parameter area for help request
       mov     al, '?'            ;marked with ?
       repnz                      ;scan till match or end
       scasb
       jnz     chkdsk             ;no match? skip
       mov     ah, @prnstr        ;otherwise print help
       mov     dx, offset(help)
       int     21H
       int     20H                ;and exit

chkdsk mov     dl, drv1           ;get drive number
       mov     ah, @getfsp        ;ask for disk info
       int     21H                ;with dos call

       cmp     dx, 0162H          ;360K
       jne     c1
       mov     dx, offset(K360)   ;print message
       mov     ah, @prnstr
       int     21H
       mov     al, 04H            ;and set errorlevel
       jmps    seterr

c1     cmp     dx, 015FH          ;180K
       jne     c2
       mov     dx, offset(K180)   ;print message
       mov     ah, @prnstr
       int     21H
       mov     al, 02H            ;and set errorlevel
       jmps    seterr

c2     cmp     dx, 013BH          ;320K
       jne     c3
       mov     dx, offset(K320)   ;print message
       mov     ah, @prnstr
       int     21H
       mov     al, 03H            ;and set errorlevel
       jmps    seterr

c3     cmp     dx, 0139H          ;160K
       jne     unkwn
       mov     dx, offset(K160)   ;print message
       mov     ah, @prnstr
       int     21H
       mov     al, 01H            ;and set errorlevel
       jmps    seterr

unkwn  mov     dx, offset(K?)     ;print message
       mov     ah, @prnstr
       int     21H
       mov     al, 00H            ;and set errorlevel

seterr mov     ah, @exit          ;set errorlevel
       int     21H                ;and exit


exit   int     20H                ;abnormal exit for errors
       endp
;====================
; Messages
;====================
K360   db cr lf '360K disk' cr lf cr lf '$'
K180   db cr lf '180K disk' cr lf cr lf '$'
K320   db cr lf '320K disk' cr lf cr lf '$'
K160   db cr lf '160K disk' cr lf cr lf '$'
K?     db cr lf 'Unrecognized disk format' cr lf cr lf '$'

baddrv db cr lf beep 'Invalid drive specifier!' cr lf '$'
baddos db cr lf beep 'This utility only works under DOS 2.0!' cr lf '$'
help   db cr lf
       db 'DSIZE version 1.0 by D. Whitman' cr lf
       db  cr lf
       db 'Examines the disk in the specified drive' cr lf
       db 'and determines its format.' cr lf
       db  cr lf
       db 'Syntax:' cr lf
       db  cr lf
       db '   DSIZE [?] [d:]' cr lf
       db cr lf
       db '   Option:' cr lf
       db '       ? = Print this help message' cr lf
       db cr lf
       db 'A printed summary is produced, and ERRORLEVEL is set as follows:'
       db  cr lf cr lf
       db '    0 = unknown format' cr lf
       db '    1 = single sided, 8 sector (160K)' cr lf
       db '    2 = single sided, 9 sector (180K)' cr lf
       db '    3 = double sided, 8 sector (320K)' cr lf
       db '    4 = double sided, 9 sector (360K)' cr lf
       db '$'
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

## DUP.ASM

{% raw %}
```
;===================================================
; PROGRAM DUP   Version 1.0 by Dave Whitman
;
; Filter to remove adjacent duplicate lines.
; Reads StdIn and writes non-duplicated lines to StdOut.
; Duplicate lines must be adjacent to be detected.
;
; Syntax:  DUP [?] [/nn] [<infile] [>outfile]
;
; The ? option prints a help message.
; If option /nn is used, comparision is based on
; the first nn characters only.
;
; Requires DOS 2.0, will abort under earlier versions.
;====================================================

;============
; Equates
;============

@read   equ    3FH                ;read file/device
@write  equ    40H                ;write file/device
@dosver equ    30H                ;get dos version
@prnstr equ    09H                ;print string

cr      equ    0DH                ;carriage return character
lf      equ    0AH                ;line feed character

stdin   equ    0000H              ;standard input
stdout  equ    0001H              ;standard output
u       equ    01H                ;upper case option selected

buf_size       equ     8192       ;size of input and output buffers

param_count    equ     [80H]
param_area     equ     [81H]
mem_avail      equ     [06H]      ;PSP field: memory available in segment

up_mask        equ     11011111B  ;mask for lowercase conversion (with AND)
low_mask       equ     00100000B  ;mask for uppercase conversion (with OR)

main   proc    far
       call    setup           ;check dos, parse options
       call    process         ;count w, l, c from std i/o
       int     20H             ;and return to dos
       endp

;======================================
; SUBROUTINE SETUP
; Checks for proper DOS, parses options
;======================================
setup  proc    near

       mov     ah, @dosver     ;what dos are we under?
       int     21H
       cmp     al, 2           ;2.0 or over?
       jae     a_mem           ;yes, skip

       mov     ah, @write      ;no, bitch
       mov     bx, 2           ;on stderror
       mov     cx, dosend-baddos
       mov     dx, offset(baddos)
       int     21H

       pop     ax              ;reset stack
       int     20H             ;and exit

a_mem  mov     ax, mem_avail   ;do we have room for the buffers?
       cmp     ax, (buf_size*2)+200H
       jae     a_help          ;yes
       mov     ah, @write      ;no, bitch
       mov     bx, 2           ;on stderror
       mov     cx, memend-nomem
       mov     dx, offset(nomem)
       int     21H
       pop     ax              ;reset stack
       int     20H             ;and exit

a_help xor     ch,ch           ;cx <== param count
       mov     cl, param_count ;  "
       cmp     cl, 00H         ;any params?
       je      aexit           ;return if none

       mov     di, offset(param_area)   ;scan for help request
       mov     al, '?'
       repnz                   ;repeat until matched or end
       scasb
       jnz     a_par           ;reached end, no match? skip
       mov     ah, @write      ;founc ?, so print help
       mov     bx, 2           ;on stderror
       mov     cx, helpend-help
       mov     dx, offset(help)
       int     21H
       pop     ax              ;pop stack
       int     20H             ;and exit

a_par  xor     ch, ch                   ;cx <== param count
       mov     cl, param_count          ;  "
       mov     di, offset(param_area)   ;scan for options
a_loop mov     al, '/'                  ;will be marked with /
       repnz                   ;repeat until matched or end
       scasb
       jnz     aexit           ;reached end, no match? skip

       xor     ax,ax           ;will hold building number
       jmps    enter           ;convert string to binary

s2bin  mov     bl, 10          ;multiply running total by 10
       mul     al,bl
       jo      bad_num         ;overflow?  error exit
enter  xor     bx,bx           ;clear out top half
       mov     bl, [di]        ;get a digit into al
       inc     di              ;bump pointer
       cmp     bl, ' '         ;if space, done
       je      aexit
       cmp     bl, '0'         ;must be between 0
       jb      bad_num
       cmp     bl, '9'         ;and 9
       ja      bad_num
       sub     bl, '0'         ;convert to binary
       add     ax, bx          ;add to running total
       jo      bad_num         ;overflow? error exit
       loop    s2bin

       cmp     ax, 0FFH        ;too long?
       jg      bad_num         ;abort
       mov     comp_length, al ;else store converted number
aexit
       ret                     ;normal return

bad_num        mov     ah, @write      ;print error message
               mov     bx, 2           ;on stderror
               mov     cx, numend-nummsg
               mov     dx, offset(nummsg)
               int     21H             ;and use default
               ret

baddos db      cr lf 'This program requires DOS 2.0!' cr, lf
dosend

nomem  db      cr lf 'Insufficient memory, program aborted' cr lf
memend

nummsg db      cr lf 'Length parameter non-numeric or greater than 255'
       db      cr lf
numend

help   db      cr lf
       db      'DUP version 1.0 by D. Whitman' cr lf
       db      cr lf
       db      'Reads stdin and writes all non-duplicated lines to stdout.'
       db      cr lf
       db      'Duplicates must be adjacent to be detected.' cr lf
       db      'DUP will normally be used in a pipeline, following SORT.'
       db      cr lf cr lf
       db      'Syntax:  DUP [?] [/nn] [<infile] [>outfile]' cr lf
       db      cr lf
       db      'Options:' cr lf
       db      '    ?   = print this help message' cr lf
       db      '    /nn = base comparision on first nn chars only' cr lf
       db      cr lf
       db      'This program is in the public domain.' cr lf
       db      cr lf
helpend
       endp

;=========================================
; SUBROUTINE PROCESS
;
;   while not(EOF) do
;     begin
;       get next line
;       if curr_line <> last_line
;          then begin
;             write(curr_line)
;             last_line := curr_line
;          end
;      end
;==========================================

;==================
; Register assignments:
;
; SI  ^buf_in
; DI  ^buf_out
; CX  # of chars left in buf_in
;===================

process proc near
        movw outnum, 0000H      ;output buffer is empty
        mov  si, offset(buf_in)
        mov  di, offset(buf_out)

        call fillbuf            ;get 1st buffer's worth
        cmp  cx, 0000H          ;any chars?
        je   p_done             ;if not, quit
        call read_line          ;read 1st line
        call save_line          ;save as "old_line"
        call put_line           ;and output it
        ;===========
        ; Main loop
        ;===========
p_loop  call read_line          ;get next line
        jc   p_done             ;none available? done
        call compare            ;is it unique?
        jc   p_loop             ;if not, bit bucket, and try again
        call put_line           ;if so, output it
        call save_line          ;and save as new template
        jmps p_loop             ;and continue til EOF

p_done  call dumpbuf            ;flush output buffer
        ret
        endp
;=======================================================
; SUBROUTINE READLINE
;
; Reads the next line from the input buffer into string
; CURR_LINE.  If sucessful, clears the carry flag.
; If not sucessful, sets the carry flag
;=======================================================
read_line proc near
          push bx
          push dx
          xor  dx, dx

          mov  bx, offset(curr_line)
          call getchar
          jc   r_fail

r_loop    mov  [bx], al           ;put char in string
          inc  bx                 ;bump string pointer
          inc  dl                 ;bump char count
          cmp  al, lf             ;newline?
          je   r_exit             ;done if so
          cmp  dl, 0FFH           ;string too long?
          je   r_exit             ;abort if so
          call getchar            ;get next character
          jc   r_exit             ;none available? exit
          jmps r_loop             ;otherwise continue

r_exit    mov  [offset(curr_length)], dl    ;save length
          pop  dx
          pop  bx
          clc
          ret

r_fail    pop  dx
          pop  bx
          stc
          ret
          endp

;==================================
; SUBROUTINE SAVE_LINE
;
; Copies CURR_LINE into LAST_LINE.
;==================================
save_line proc  near
          push  si
          push  di
          push  cx
          mov   si, offset(curr_line)
          mov   di, offset(last_line)
          xor   cx, cx
          mov   cl, [offset(curr_length)]
          mov   [offset(last_length)], cl
          cld       ;autoincrement mode
          rep
          movsb
          pop   cx
          pop   di
          pop   si
          ret
          endp

;==================================================
; SUBROUTINE COMPARE
;
; Compares CURR_LINE and LAST_LINE.  If identical,
; sets carry flag, otherwise carry is cleared.
;==================================================
compare  proc  near
         push  si
         push  di
         push  cx

         xor   cx, cx
         mov   cl, [offset(curr_length)]   ;set comparison length
         cmp   cl, comp_length
         ja    c_trunc           ;longer than compare length? truncate
         jmps  c_doit
c_trunc  mov   cl, comp_length

c_doit   mov   di, offset(curr_line)
         mov   si, offset(last_line)
         repe                    ;repeat until different or end
         cmpsb
         je c_match              ;matched
         clc                     ;not identical
         jmps c_exit
c_match  stc
c_exit   pop  cx
         pop  di
         pop  si
         ret
         endp

;================================================
; SUBROUTINE PUT_LINE
;
; Moves the current line into the output buffer.
;================================================
put_line proc  near
         push  bx
         push  dx

         mov   bx, offset(curr_line)
         xor   dx, dx
         mov   dl, [offset(curr_length)]
         cmp   dl, 0
         je    pl_done

pl_loop  mov   al, [bx]     ;get char
         call  putchar      ;output it
         inc   bx           ;bump string pointer
         dec   dl           ;used one char
         jnz   pl_loop      ;loop til done

pl_done  pop   dx
         pop   bx
         ret
         endp

;======================================================
; SUBROUTINE GETCHAR
;
; Trys to get a character from the input buffer.
; If sucessful, returns with character in AL, and carry
; flag clear.  If unsucessful, sets carry flag.
;======================================================
getchar proc   near
        cmp    cx, 0000           ;is the buffer empty?
        jne    g1                 ;nope, skip
        call   fillbuf            ;if so, try to refill it
        cmp    cx, 0000           ;still empty?
        je     g_abort            ;then return failure

g1      lodsb                     ;get character from [si]
        dec    cx                 ;used up one char
        clc                       ;clear flag to indicate sucess
        ret                       ;and return

g_abort stc                       ;set flag for failure
        ret
        endp

;======================================================
; SUBROUTINE FILLBUF
;
; Fills the input buffer from StdIn.  The number of
; available characters is stored in CX, and SI is reset
; to the beginning of the buffer.
;======================================================
fillbuf proc   near
        push    bx
        push    dx
        mov     ah, @read           ;read
        mov     bx, stdin           ;from stdin
        mov     cx, buf_size        ;one buffer's worth
        mov     dx, offset(buf_in)  ;into the input buffer
        int     21H
        mov     cx, ax              ;save number of chars read
        mov     si, offset(buf_in)  ;reset buffer
        pop     dx
        pop     bx
        ret
        endp

;===================================================
; SUBROUTINE PUTCHAR
;
; Moves the character in AL into the output buffer.
; If the buffer is now full, it is dumped to disk.
;===================================================

putchar proc near
        stosb                   ;move character into buffer
        incw  outnum            ;bump count of chars in buffer
        cmpw  outnum, buf_size  ;is buffer full?
        jl    pu_exit           ;no, skip
        call  dumpbuf           ;yes, dump buffer to disk
pu_exit ret
        endp

;==================================================
; SUBROUTINE DUMPBUF
;
; Dumps the output buffer to StdOut.
;==================================================
dumpbuf proc near
        push    ax                   ;save active registers
        push    bx                   ; "      "      "
        push    cx                   ; "      "      "
        push    dx                   ; "      "      "
        mov     ah, @write           ;write
        mov     bx, stdout           ;to stdout
        mov     cx, outnum           ;number of chars for output
        mov     dx, offset(buf_out)  ;from output buffer
        int     21H
        movw    outnum, 0            ;reset buffer
        mov     di, offset(buf_out)  ;  "     "
        pop     dx                   ;restore active registers
        pop     cx                   ;   "       "       "
        pop     bx                  ;   "       "       "
        pop     ax                   ;   "       "       "
        ret
        endp
;=====================================================
;BUFFERS
;
; No space is actually allocated for the buffers.
; At run time, the program checks to ensure there
; is suffcient free memory, then uses the memory
; immediately after itself for buffers.
;
; This stratagy minimizes the size of the object file,
; and lets the program load quicker.
;======================================================

outnum      dw 0000H
comp_length db 0FFH

last_length
            org offset($+1)
last_line
            org offset($+0FFH)
curr_length
            org offset($+1)
curr_line
            org offset($+0FFH)
buf_in
            org offset($+buf_size)
buf_out
```
{% endraw %}

## DUP.DOC

{% raw %}
```
DUP Filter
Command


----------------------------------------------------------------

Purpose: Reads data from the standard input, removes adjacent
         duplicated lines, and writes remainder to the standard
         output.

Format:  DUP [<infile] [>outfile] [?] [/nn]

Type:    Internal      External
                         ***

Remarks: Duplicate lines must be adjacent to be detected.
         Normally, DUP will be used in a pipeline after
         SORT, which will bring duplicates together.

         If option /nn (where nn is a number) is used, the
         comparison is based on only the first nn characters of
         each line.

         Option ? prints a command summary help message.

         DUP requires DOS 2.0, and will abort and print an error
         message under earlier versions of DOS.

Author:  David Whitman
         P.O. Box 1157
         North Wales, PA 19454

This program is in the public domain.

```
{% endraw %}

## ENCRYPT.ASM

{% raw %}
```
;===================================================
; PROGRAM ENCRYPT    Version 3.0 by Dave Whitman
;
; Filter to encrypt/decrypt files.
;
; Syntax:  ENCRYPT [?] [/key] [<infile] [>outfile]
;
; Reads stdin, encrypts data and writes it to stdout.
; Already encrypted files will be decrypted.
;
; An optional "key" word can be specified.
; If a key is specified, it must also be used in
; decrypting the file.
;
; The ? option prints a help message.
;
; Requires DOS 2.0, will abort under earlier versions.
;====================================================

;===============================================================
; Discussion:
;
; ENCRYPT modifies each character by XORing it with a "mask", a
; pattern of bits.  XOR has the following truth table:
;
;          XOR |  0  1   data bit
;          ----|--------
;    mask   0  |  0  1   result
;    bit    1  |  1  0   of XOR
;
; Anywhere the mask has a 0 bit, the data will be unmodified.  A
; 1 bit in the mask will invert the state of a data bit.  For
; example:
;
;             data byte: 10000001  (character "A")
;             mask byte: 11110000
;               XOR    -----------
;                        01110001  (encrypted to character "G")
;
; Aside from encryption, use XOR any time you want to flip the state
; of one or more bits.  Use a mask with 1's in the positions you
; want to flip, and 0's in positions you want left alone.
;
; XOR has the interesting property of being its own inverse.  If
; you XOR data with a mask, then XOR again with the same mask,
; you recover the original data.  Try this example, it works!
;
;         data byte: 01110001  (encrypted character "G" from above)
;         mask byte: 11110000
;         XOR       ----------
;                    10000001  (decrypted character "A")
;
; To make the encryption a little tougher to crack, ENCRYPT
; modifies the mask after each use, by performing a 1 bit rotate
; (instruction ROL, rotate left).  Since the mask is 8 bits wide,
; a total of 8 different masks are generated:
;
;                11110000 initial mask
;                11100001 rotate left one bit (note wrap-around)
;                11000011   "
;                10000111   "
;                00001111   "
;                00011110   "
;                00111100   "
;                01111000   "
;                11110000   back to initial mask
;================================================================
;============
; Equates
;============
                                  ;DOS call codes
@read          equ    3FH         ;read file/device
@write         equ    40H         ;write file/device
@dosver        equ    30H         ;get dos version
@prnstr        equ    09H         ;print string

cr             equ    0DH         ;carriage return character
lf             equ    0AH         ;line feed character
scrambler      equ    10101010B   ;mask to scramble key

stdin          equ    0000H       ;standard input handle
stdout         equ    0001H       ;standard output handle

buf_size       equ    2000        ;size of input and output buffers

                                  ;fields in program segment prefix
param_count    equ     [80H]      ;number of command line characters
param_area     equ     [81H]      ;command line characters
mem_avail      equ     [06H]      ;memory available in segment


main          proc    far
              call    setup       ;check dos, parse options
              call    process     ;encrypt data
              int     20H         ;and return to dos
              endp

;======================================
; SUBROUTINE SETUP
; Checks for proper DOS, parses options
;======================================
setup        proc    near

             mov     ah, @dosver     ;what dos are we under?
             int     21H
             cmp     al, 2           ;2.0 or over?
             jae     a_mem           ;yes, skip

             mov     ah, @prnstr     ;no, bitch
             mov     dx, offset(baddos)
             int     21H
             pop     ax              ;reset stack
             int     20H             ;and exit

a_mem        mov     ax, mem_avail   ;do we have room for the buffers?
             cmp     ax, buf_size*2  ;two buffers, each buf_size long
             jae     a_help          ;yes, skip
             mov     ah, @prnstr     ;no, bitch
             mov     dx, offset(nomem)
             int     21H
             pop     ax              ;reset stack
             int     20H             ;and exit

a_help       xor     ch,ch           ;cx <== param count (clear out ch)
             mov     cl, param_count ;  "                (fill in cl)
             cmp     cl, 00H         ;any params?
             je      a_exit          ;return if none

             mov     di, offset(param_area)   ;scan for help request
             mov     al, '?'
             cld                     ;scan up, not down
             repnz                   ;repeat until matched or end
             scasb                   ;scan for ?
             jnz     a_key           ;reached end, no match? skip
             mov     ah, @prnstr     ;found ?, so print help
             mov     dx, offset(help)
             int     21H
             pop     ax              ;pop stack
             int     20H             ;and exit

a_key        mov     di, offset(param_area)   ;scan for key
             xor     ch, ch           ;cx <== param count
             mov     cl, param_count  ;  "
             mov     al, '/'          ;key marked with "/"
             cld                     ;scan up, not down
             repnz                   ;repeat until matched or end
             scasb                   ;scan for /
             jnz     a_exit          ;reached end, no match? exit

;=================================================================
; Here we copy the key from the command line into a buffer for use
; during encryption.  During copying, we scramble it somewhat, to
; disguise it.  During testing of earlier versions, it was noted that
; the key would be repeated many times in the encrypted text.  The problem
; is that the space character (20H) encrypts to the key character used,
; but shifted in case.  Since spaces often come in groups, the key word
; gets copied out into the output (poor security!).  Scrambling the key
; at least ensures that the key doesn't stand out like a sore thumb.
;==================================================================

             mov     si, di            ;si points to 1st char of key
             mov     di, offset(key+1) ;di points to key buffer
                                       ;cx has param chars left
             xor     bx, bx          ;bl counts key characters
                                     ;copy the mask:
copy_key    lodsb                    ;get key character
             cmp     al, ' '         ;terminate with space (or end of chars)
             je      ck_exit
             xor     al, scrambler   ;scramble key
             stosb                   ;add char to key buffer
             inc     bl              ;bump char count
             loop    copy_key        ;and loop
ck_exit      mov     key, bl         ;save count

a_exit       ret

baddos       db      cr lf 'This program requires DOS 2.0!' cr, lf, '$'

nomem        db      cr lf 'Insufficient memory, program aborted' cr lf '$'

help         db  cr lf
             db  'ENCRYPT version 3.0 by D. Whitman' cr lf
             db  cr lf
             db  'Syntax:  ENCRYPT [?] [/key] [<infile] [>outfile]' cr lf
             db  cr lf
             db  'Reads stdin, encrypts data, and writes it to stdout.' cr lf
             db  'If file is already encrypted, it will be decrypted.' cr lf
             db  cr lf
             db  'An optional "key" word can be specified.' cr lf
             db  'If used, the key must also be specified when decrypting'
             db  ' the file.' cr lf
             db  cr lf
             db  'The ? option prints this help message.' cr lf
             db  cr lf
             db  'Encrypted text is unintelligable, and cannot be'
             db  ' decoded by simple' cr lf
             db  'substitution.  However, the encryption algorithm is'
             db  ' by no means unbreakable.' cr lf
             db  'Encryption should not be used as a replacement for'
             db  ' proper security' cr lf
             db  'with extremely sensitive data.' cr lf
             db  cr lf
             db  'Warning: editing of encrypted files can scramble them'
             db  ' beyond recovery!' cr lf
             db  cr lf
             db  'This program is in the public domain.' cr lf
             db  '$'
             endp

;=========================================
; SUBROUTINE PROCESS
;
;   1. load input buffer
;   2. convert each char, pass to output buffer
;   3. dump output buffer
;   4. repeat until EOF
;==========================================

process proc    near

       mov     di, offset(buf_out) ;point to output buffer
       movw    outnum, 0           ;output buffer is empty
       mov     bx,  0001H          ;bx holds current offset in key buffer
       call    fillbuf             ;load input buffer
       cmp     cx, 0000H           ;any characters available?
       je      p_exit              ;nope, exit

p1     call    getchar             ;get next char in al
       jc      p_done              ;carry flag set means none available
       call    getkey              ;get a key character in dl
       xor     al, dl              ;encrypt character
       call    putchar             ;output character
       jmps    p1                  ;and loop till done

p_done cmpw    outnum, 0           ;input done.  any outstanding output?
       jle     p_exit              ;nope, exit
       call    dumpbuf             ;yes, empty buffer

p_exit ret
       endp

;======================================================
; SUBROUTINE GETCHAR
;
; Trys to get a character from the input buffer.
; If sucessful, returns with character in AL, and carry
; flag clear.  If unsucessful, sets zero flag.
;======================================================
getchar proc   near
        cmp    cx, 0000           ;is the buffer empty?
        jne    g1                 ;nope, skip
        call   fillbuf            ;if so, try to refill it
        cmp    cx, 0000           ;still empty?
        je     g_abort            ;then return failure

g1      lodsb                     ;get character from [si]
        dec    cx                 ;used up one char
        clc                       ;clear flag to indicate sucess
        ret                       ;and return

g_abort stc                       ;set flag for failure
        ret
        endp

;======================================================
; SUBROUTINE FILLBUF
;
; Fills the input buffer from StdIn.  The number of
; available characters is stored in CX, and SI is reset
; to the beginning of the buffer.
;======================================================
fillbuf proc   near
        push    bx                  ;save position in key buffer
        mov     ah, @read           ;read
        mov     bx, stdin           ;from stdin
        mov     cx, buf_size        ;one buffer's worth
        mov     dx, offset(buf_in)  ;into the input buffer
        int     21H
        mov     cx, ax              ;save number of chars read
        mov     si, offset(buf_in)  ;reset buffer
        pop     bx                  ;restore key buffer position
        ret
        endp

;==================================================
; SUBROUTINE GETKEY
;
; Gets a key byte from the key buffer.  The byte
; is returned in DL.
;
; Each character from the key word is used sucessively.
; To maximize confusion, the byte is rotated before each use.
;====================================================

getkey  proc    near
        mov     dl, offset(key)[bx]  ;get key byte
        rolb    offset(key)[bx]      ;rotate it for next use
        inc     bl                   ;point to next character
        cmp     bl, key              ;have we run out of characters?
        jle     gk_exit              ;nope, exit
        mov     bl, 01H              ;yes, start back at beginning
gk_exit ret
        endp

;===================================================
; SUBROUTINE PUTCHAR
;
; Moves the character in AL into the output buffer.
; If the buffer is now full, it is dumped to disk.
;===================================================

putchar proc near
        stosb                   ;move character into buffer
        incw  outnum            ;bump count of chars in buffer
        cmpw  outnum, buf_size  ;is buffer full?
        jl    pu_exit           ;no, skip
        call  dumpbuf           ;yes, dump buffer to disk
pu_exit ret
        endp

;==================================================
; SUBROUTINE DUMPBUF
;
; Dumps the output buffer to StdOut.
;==================================================
dumpbuf proc near
        push    ax                   ;save active registers
        push    bx                   ; "      "      "
        push    cx                   ; "      "      "
        push    dx                   ; "      "      "
        mov     ah, @write           ;write
        mov     bx, stdout           ;to stdout
        mov     cx, outnum           ;number of chars for output
        mov     dx, offset(buf_out)  ;from output buffer
        int     21H
        movw    outnum, 0            ;reset buffer
        mov     di, offset(buf_out)  ;  "     "
        pop     dx                   ;restore active registers
        pop     cx                   ;   "       "       "
        pop     bx                   ;   "       "       "
        pop     ax                   ;   "       "       "
        ret
        endp

;=================
;GLOBAL VARIABLES
;=================
outnum     dw  0000H     ;number of characters in output buffer

;=====================================================
;BUFFERS
;
; No space is actually allocated for the buffers.
; At run time, the program checks to ensure there
; is suffcient free memory, then uses the memory
; immediately after itself for buffers.
;
; This stratagy minimizes the size of the object file,
; and lets the program load quicker.
;======================================================

key       db  01H                 ;number of characters in key
          db  01H                 ;key text
          ds  128                 ; "   "

buf_in

          org offset($+buf_size)   ;this is a trick to set the address
                                   ;the output buffer.
                                   ;the address of buf_out is set to be
                                   ;the offset of the input buffer, plus
                                   ;the buffer length.

buf_out                            ;output buffer
```
{% endraw %}

## ENCRYPT.DOC

{% raw %}
```

ENCRYPT version 3.0 by D. Whitman

Syntax:  ENCRYPT [?] [/key] [<infile] [>outfile]

Reads stdin, encrypts data, and writes it to stdout.
If file is already encrypted, it will be decrypted.

An optional "key" word can be specified.
If used, the key must also be specified when decrypting the file.

The ? option prints this help message.

Encrypted text is unintelligable, and cannot be decoded by simple
substitution.  However, the encryption algorithm is by no means unbreakable.
Encryption should not be used as a replacement for proper security
with extremely sensitive data.

Warning: editing of encrypted files can scramble them beyond recovery!

This program is in the public domain.
```
{% endraw %}

## EXAMPLE.ASM

{% raw %}
```
;=====================================;
;HELLO     Version 1.00               ;
;          1984 by David Whitman      ;
;                                     ;
; Sample source file for CHASM.       ;
; Prints a greeting on the console.   ;
;=====================================;

        MOV AH, 9                 ;specify DOS function 9
        MOV DX, OFFSET(MESSAGE)   ;get address of string
        INT 21H                   ;call DOS

        INT 20H                   ;return to DOS

MESSAGE DB  'Hello, World!$'      ;message to be printed
```
{% endraw %}

## FREEWARE.DOC

{% raw %}
```
         Other User-Supported/Freeware Offerings:

The user-supported/freeware scheme is described in CHASM's
documentation in the section titled "Miscellaneous and a Word
From Our Sponsor...". If you like this rather novel way of
marketing, you might be interested in other programs offered
under the same deal.  I have experience with two other such
programs at this time, and can recommend both of them highly.

PC-TALK is an asynchronous communciations package, allowing you
to use a modem to talk to other computers.  To receive a copy,
send a disk and stamped return mailer to:

   Andrew Fluegelman
   P.O. Box 862
   Tiburon, CA 94920

Note: Andrew is the originator of the whole Freeware idea, and in
fact, the name "Freeware (tm)" is a trademark of his company, The
Headlands Press.

PC-FILE is a general purpose database manager program.  I use it
to maintain records of your donations, and to generate mailing
labels when announcing significant upgrades to my contributors.
To get a copy, send a double sided disk (or two single sided
ones), along with a stamped return mailer to:

   Jim Button
   P.O. Box 5786
   Bellevue, WA 98006

Jim coined the phrase "user-supported" which means "Freeware"
without violating AF's trademark.  To the best of my knowlege,
Jim intends "user-supported" to be a generic term for free use
by everyone using the Freeware-style distribution scheme.  In
magazines and on bulletin boards you may see "user-supported"
abreviated to U/S.

In addition to these packages, I have heard of, but not tried the
following U/S programs:

1-Ringy Dingy  (Async communications)

   Jim Button
   P.O. Box 5786
   Bellevue, WA 98006

Extended Batch Facility

   Frank Canova
   Seaware Corp.
   PO Box 1656
   Delray Beach, FL 33444

FRED (Full Screen Editor)
   and
LadyBug (Logo interpreter)

   David Smith
   44 Ole Musket Lane
   Danbury, CT 06810

NEWKEY (keyboard enhancer)

   Frank Bell
   20950 Smallwood
   Birmingham, MI 48010

Ultra-Zap (?Norton Utility Clone?)

   The Freesoft Company
   PO Box 27608
   St. Louis, MO 63146

EPISTAT (Statistics package)

   Tracy L. Gustafson, M.D.
   1705 Gattis School Rd.
   Round Rock, TX 78664

PC-Write (Word Processor)

   Bob Wallace
   Quicksoft
   219 First N. #223
   Seattle, WA 98109

Tables 'n Forms  (programming utility for Knowlegeman databases)
   and
Program Writer   (BASIC code writer for file handling)

   Larry Raper
   Financial Software Service
   29497 Spring Hill Dr.
   Southfield, MI 48076

Wordflex (?Word Processor?)

   Nemco
   9 Walnut St.
   Rutherford, NJ 07070

Genealogy

   Melvin O. Duke
   PO Box 20836
   San Jose, CA 95160

BASIC Cross Reference Utility

   Martin E. Knebel
   378 Shea Drive
   New Milford, NJ 07646


If you know of or have written other U/S software packages, let
me know, and I'll list them in this file.

```
{% endraw %}

## LABEL.ASM

{% raw %}
```
;===========================================================
; PROGRAM LABEL  Version 1.10 (1983)
;
;        by David Whitman
;
; Adds or replaces DOS 2.0 volume labels on already
; formatted disks.  Will overwrite an existing label.
; The syntax is:
;
;   LABEL [d:]
;
; If no drive is specified, the default drive is assumed.
;
; LABEL will prompt for the text desired as a volume label.
; A maximum of 11 characters are allowed.
;
; Requires DOS 2.0, will abort under earlier versions.
; The program will also abort if the specfied disk is
; formatted with 8 sectors/track.
;
; This source file is written for the
; syntax of the CHASM assembler.
;============================================================
; HELP!
; The author was unable to find a way to safely
; erase existing volume labels.  The following
; methods were tried:
;
;        Technique                      Result
;  Delete with DOS call 0AH    Trashed file allocation table
;  Rename to begin with E5H    High bit turned off, label begins with 'E'
;  Rename to all blanks        Rename failed - no change in label
;
; It would be nice to have this capability.  Any suggestions?
;=============================================================
;
;===============
; Equates
;===============
;
@getver   equ  30H      ;Get DOS version number
@getfsp   equ  36H      ;Get disk free space
@create   equ  16H      ;Create file
@bufinp   equ  0AH      ;Buffered keyboard input
@prnstr   equ  09H      ;Print string
@close    equ  10H      ;close file
@rename   equ  17H      ;rename file
;
cr        equ  0DH      ;carriage return
lf        equ  0AH      ;line feed
beep      equ  07H      ;bell (makes a beep sound when printed)

drvnbr    equ  [5CH]    ;drive number for first parameter

;=============
; Print title
;=============
       mov     drvok, al            ;save validity of drive
       mov     dx, offset(title)    ;title message
       mov     ah, @prnstr          ;print
       int     21H                  ;with dos call

       cmpb    drvok, 0FFH          ;was the drive valid?
       jne     doschk               ;yes, continue
       mov     dx, offset(baddrv)   ;no, bitch
       mov     ah, @prnstr          ;print message
       int     21H                  ;with dos call
       jmps    exit                 ;and exit

doschk mov     ah, @getver          ;what dos are we under?
       int     21H
       cmp     al, 00H              ;earlier than 2.0?
       jne     setdrv               ;no
       mov     dx, offset(baddos)   ;yes: bitch
       mov     ah, @prnstr          ;print message
       int     21H                  ;with dos call
       jmps    exit                 ;and exit

setdrv mov     dl, drvnbr           ;get drive number
       mov     drvnbr1, dl          ;and put it in both
       mov     drvnbr2, dl          ;extended FCBs

;=============================================================
;we can tell what format the disk is in by examining the total
;number of clusters available.  The following numbers apply:
;
;  162H = 2 sides, 9 tracks    15FH = 1 side, 9 tracks
;  13BH = 2 sides, 8 tracks    139H = 1 side, 8 tracks
;=============================================================
                                    ;dl already has drive number
chkdsk mov     ah, @getfsp          ;get disk info
       int     21H                  ;with dos call
       cmp     dx, 13BH             ;how many clusters?
       jg      input                ;more than 8 sectors, ok
       mov     dx, offset(baddsk)   ;8 sectors? bitch
       mov     ah, @prnstr          ;print message
       int     21H                  ;with dos call
       jmps    exit                 ;and quit

;=========================================
; Prompt for and input the new label text.
;=========================================
input  mov     dx, offset(prompt)   ;point to prompt message
       mov     ah, @prnstr          ;print prompt
       int     21H                  ;with dos call
       mov     dx, offset(buffer)   ;point to buffer
       mov     ah, @bufinp          ;call for buffered input
       int     21H                  ;with dos call

;=========================
; Create the volume label.
;=========================
write  mov     si, offset(buftxt)   ;input buffer
       mov     di, offset(newname)  ;rename field
       sub     cx,cx                ;zero cx
       mov     cl, numchr           ;number of input chars
       rep                          ;move'em into FCB rename field
       movsb
       mov     dx, offset(xfcb2)    ;try to rename
       mov     ah, @rename          ;with dos call
       int     21H
       cmp     al, 00H              ;was rename sucess?
       je      exit                 ;yes, exit

       mov     si, offset(buftxt)   ;otherwise create new label
       mov     di, offset(name1)    ;move text into fcb
       sub     cx, cx               ;as above
       mov     cl, numchr
       rep
       movsb
       mov     dx, offset(xfcb)     ;and create label
       mov     ah, @create          ;with dos call
       int     21H

exit   mov     dx, offset(crlf)     ;start new line
       mov     ah, @prnstr
       int     21H
       int     20H                  ;and get out of here

;=======================
; Input buffer
;=======================
buffer db      0CH        ;can hold 12 chars (including a CR)
numchr db      00H        ;number of characters inputted
buftxt ds      12, ' '    ;initial text is twelve spaces

drvok  db      00H        ;holds entry al value - drive validity

;=======================
;File control blocks
;=======================
xfcb    db 0FFH, 0,0,0,0,0
attrib  db 08H                   ;volume label attribute
drvnbr1 db 00H                   ;drive number
name1   db '        '            ;name
        db '   '                 ;extension
        ds 25                    ;rest of fcb

xfcb2   db 0FFH, 0,0,0,0,0
attrib2 db 08H                   ;volume label attribute
drvnbr2 db 00H                   ;drive number
        db '????????'            ;name
        db '???'                 ;extension
        ds 5                     ;first 5 'reserved' bytes
newname db '        '            ;rename field
        db '   '                 ;new extension
        ds 9                     ;rest of fcb

;==========
;Messages
;==========
title  db  cr,lf 'LABEL Version 1.1 - 1983 by D. Whitman' cr,lf '$'
prompt db  'Volume label (11 characters maximum): $'
baddrv db  beep,cr,lf 'Invalid drive specification!' cr, lf, '$'
baddos db  beep,cr,lf 'This utility only works under DOS 2.0!' cr, lf, '$'
baddsk db  beep,cr,lf 'Volume labels not allowed on 8 track disks!' cr, lf, '$'
crlf   db  cr, lf, '$'
```
{% endraw %}

## LABEL.DOC

{% raw %}
```
          LABEL
          Command



         -----------------------------------------------

          Purpose: Adds a volume label to an already
                   formatted disk.

          Format:  LABEL [d:]

          Type:    Internal     External
                                  ***

          Remarks: If the drive specifier is omitted,
                   the default drive is assumed.  LABEL will
                   prompt for the text desired as a volume
                   label.  If no text is given, any existing
                   label remains unchanged.

                   Requires DOS 2.0, will abort and
                   print an error message under earlier
                   versions.  Will also abort and print
                   an error message if the disk in the
                   specified drive is formatted with 8
                   sectors/track.

          Author:  David Whitman
                   2 N Park Street, Apartment L
                   Hanover, NH 03755

```
{% endraw %}

## LC.ASM

{% raw %}
```
;===================================================
; PROGRAM LC    Version 1.0 by Dave Whitman
;
; Filter to convert a file to all lower case.
; Non-alphabetic characters are not affected.
;
; Syntax:  LC [?] [/u] [<infile] [>outfile]
;
; The ? option prints a help message.
; /U modifys the conversion to give all caps.
;
; Requires DOS 2.0, will abort under earlier versions.
;====================================================

;============
; Equates
;============

@read   equ    3FH                ;read file/device
@write  equ    40H                ;write file/device
@dosver equ    30H                ;get dos version
@prnstr equ    09H                ;print string

cr      equ    0DH                ;carriage return character
lf      equ    0AH                ;line feed character

stdin   equ    0000H              ;standard input
stdout  equ    0001H              ;standard output
u       equ    01H                ;upper case option selected

buf_size       equ     512        ;size of input and output buffers

param_count    equ     [80H]
param_area     equ     [81H]
mem_avail      equ     [06H]      ;PSP field: memory available in segment

up_mask        equ     11011111B  ;mask for lowercase conversion (with AND)
low_mask       equ     00100000B  ;mask for uppercase conversion (with OR)

main   proc    far
       call    setup           ;check dos, parse options
       call    process         ;count w, l, c from std i/o
       int     20H             ;and return to dos
       endp

;======================================
; SUBROUTINE SETUP
; Checks for proper DOS, parses options
;======================================
setup  proc    near

       mov     ah, @dosver     ;what dos are we under?
       int     21H
       cmp     al, 2           ;2.0 or over?
       jae     a_mem           ;yes, skip

       mov     ah, @prnstr     ;no, bitch
       mov     dx, offset(baddos)
       int     21H
       pop     ax              ;reset stack
       int     20H             ;and exit

a_mem  mov     ax, mem_avail   ;do we have room for the buffers?
       cmp     ax, buf_size*2
       jae     a_help          ;yes
       mov     ah, @prnstr     ;no, bitch
       mov     dx, offset(nomem)
       int     21H
       pop     ax              ;reset stack
       int     20H             ;and exit

a_help xor     ch,ch           ;cx <== param count
       mov     cl, param_count ;  "
       cmp     cl, 00H         ;any params?
       je      aexit           ;return if none

       mov     di, offset(param_area)   ;scan for help request
       mov     al, '?'
       repnz                   ;repeat until matched or end
       scasb
       jnz     a_par           ;reached end, no match? skip
       mov     ah, @prnstr     ;found ?, so print help
       mov     dx, offset(help)
       int     21H
       pop     ax              ;pop stack
       int     20H             ;and exit

a_par  xor     ch, ch                   ;cx <== param count
       mov     cl, param_count          ;  "
       mov     di, offset(param_area)   ;scan for options
a_loop mov     al, '/'                  ;will be marked with /
       repnz                   ;repeat until matched or end
       scasb
       jnz     aexit           ;reached end, no match? skip

       mov     al, [di]        ;get option char (right after '/')
       and     al, up_mask     ;guarantees upper case for compare

       cmp     al, 'U'         ;option U specified?
       jne     a_pend          ;nope
       orb     options, u      ;yes, set flag
a_pend jmps    a_loop          ;and loop

aexit  ret

baddos db      cr lf 'This program requires DOS 2.0!' cr, lf, '$'

nomem  db      cr lf 'Insufficient memory, program aborted' cr lf '$'


help   db      cr lf
       db      'LC version 1.0' cr lf
       db       cr lf
       db      '1/2/86 by D. Whitman' cr lf
       db      cr lf
       db      'Syntax:  LC [?] [/u] [<infile] [>outfile]' cr lf
       db      cr lf
       db      'Reads stdin and writes all lower case to stdout.' cr lf
       db      cr lf
       db      'Options:' cr lf
       db      '    ?  = print this help message' cr lf
       db      '    /u = upper case output' cr lf
       db      cr lf
       db      'This program is in the public domain.' cr lf
       db      cr lf '$'
       endp

;=========================================
; SUBROUTINE PROCESS
;
;   1. load input buffer
;   2. convert each char, pass to output buffer
;   3. dump output buffer
;   4. repeat until EOF
;==========================================

process proc    near

bu1    mov     ah, @read       ;read
       mov     bx, stdin       ;from stdin
       mov     cx, buf_size    ;one buffer's worth
       mov     dx, offset(buf_in)
       int     21H
       cmp     ax, 00H         ;test for EOF
       jz      buexit          ;if so, done

       push    ax              ;save number of chars read
       mov     cx, ax          ;cx <== number chars read
       mov     si, offset(buf_in)  ;source is input buffer
       mov     di, offset(buf_out) ;destination is output buffer

bu2    lodsb                   ;al <== next char from buffer
       cmp al, 'A'             ;test if alphabetic char
       jb  bu4                 ;too low? skip
       cmp al, 'Z'
       jbe bu3                 ;in range? is upper case, so process
       cmp al, 'a'             ;how about a lower case char?
       jb  bu4                 ;nope
       cmp al, 'z'             ;maybe, check upper bound
       ja  bu4                 ;nope  (falls through if lower case)

bu3                            ;if here, al guaranteed alphabetic
       testb options, u        ;was option u specified?
       jnz  bu_up              ;yes, jump and set upper case
       or   al, low_mask       ;no, convert to lower case
       jmps bu4                ; and skip u/c conversion
bu_up  and  al, up_mask        ;convert to upper case
bu4    stosb                   ;put in output buffer
       loop bu2                ;loop until input buffer empty

                               ;dump output buffer
       mov     ah, @write      ;write
       mov     bx, stdout      ;to stdout
       pop     cx              ;number of chars read
       mov     dx, offset(buf_out)
       int     21H

       jmps    bu1              ;and loop until EOF

buexit ret
       endp

;=================
;GLOBAL VARIABLES
;=================
options  db  00H       ;byte of option flags

;=====================================================
;BUFFERS
;
; No space is actually allocated for the buffers.
; At run time, the program checks to ensure there
; is suffcient free memory, then uses the memory
; immediately after itself for buffers.
;
; This stratagy minimizes the size of the object file,
; and lets the program load quicker.
;======================================================

buf_in                 ;input buffer

         org offset($+buf_size)   ;this is a trick to set the address
                                  ;the output buffer.
                                  ;the address of buf_out is set to be
                                  ;the offset of the input buffer, plus
                                  ;the buffer length.

buf_out                ;output buffer
```
{% endraw %}

## LC.DOC

{% raw %}
```
LC Filter
Command


----------------------------------------------------------------

Purpose: Reads data from the standard input, converts it to all
         lower case, and writes it to the standard output.

Format:  LC [?] [/u] [<infile] [>outfile]

Type:    Internal      External
                         ***

Remarks: Only alphabetic characters (i.e. A-Z, a-z) are affected.
         All other characters are passed through unmodified.

         Option /u results in all upper case output.

         Option ? prints a command summary help message.

         LC requires DOS 2.0, and will abort and print an error
         message under earlier versions of DOS.

Author:  David Whitman
         P.O. Box 1157
         North Wales, PA 19454

This program is in the public domain.

```
{% endraw %}

## PRIMER.DOC

{% raw %}
```











                    An Assembly Language Primer

                     (c) 1983 by David Whitman






















































                  TABLE OF CONTENTS


    Introduction.......................................2

    The Computer As A Bit Pattern Manipulator..........3

    Digression: A Notation System for Bit Patterns.....5

    Addressing Memory..................................7

    The Contents of Memory: Data and Programs..........8

    The Dawn of Assembly Language......................9

    The 8088..........................................11

    Assembly Language Syntax..........................14

    The Stack.........................................17

    Software Interrupts...............................19

    Pseudo-Operations.................................21

    Tutorial..........................................23







































                                                                    2
    >>INTRODUCTION<<

    Many people requesting CHASM have indicated that they are
    interested in *learning* assembly language.  They are beginners,
    and have little idea just where to start.  This primer is
    directed to those users.  Experienced users will probably find
    little here that they do not already know.

    Being a primer, this text will not teach you everything there is
    to know about assembly language programming.  It's purpose is to
    give you some of the vocabulary and general ideas which will help
    you on your way.

    I must make a small caveat: I consider myself a relative beginner
    in assembly language programming.  A big part of the reason for
    writing CHASM was to try and learn this branch of programming
    from the inside out.  I think I've learned quite a bit, but it's
    quite possible that some of the ideas I relate here may have some
    small, or even large, flaws in them.  Nonetheless, I have
    produced a number of working assembly language programs by
    following the ideas presented here.












































                                                                    3
    >>THE COMPUTER AS A BIT PATTERN MANIPULATOR.<<

    We all have some conception about what a computer does.  On one
    level, it may be thought of as a machine which can execute BASIC
    programs.  Another idea is that the computer is a number
    crunching device.  As I write this primer, I'm using my computer
    as a word processor.

    I'd like to introduce a more general concept of just what sort of
    machine a computer is: a bit pattern manipulator.

    I'm certain that everyone has been introduced to the idea of a
    *bit*.  (Note: Throughout this primer, a word enclosed in
    *asterisks* is to be read as if it were in italics.)  A bit has
    two states: on and off, typically represented with the symbols
    "1"  and "0".  In this context, DON'T think of 1 and 0 as
    numbers.  They are merely convenient shorthand labels for the
    state of a bit.

    The memory of your computer consists of a huge collection of
    bits, each of which could be in either the 1 or 0 (on or off)
    state.

    At the heart of your computer is an 8088 microprocessor chip,
    made by Intel.  What this chip can do is manipulate the bits
    which make up the memory of the computer.

    The 8088 likes to handle bits in chunks, and so we'll introduce
    special names for the two sizes of bit chunks the 8088 is most
    happy with.  A *byte* will refer to a collection of eight bits.
    A *word* consists of two bytes, or equivalently, sixteen bits.

    A collection of bits holds a pattern, determined by the state of
    its individual bits.  Here are some typical byte long patterns:

    10101010         11111111         00001111

    If you've had a course in probability, it's quite easy to work
    out that there are 256 possible patterns that a byte could hold.
    similarly, a word can hold 65,536 different patterns.

























                                                                    4
    All right, now for the single most important idea in assembly
    language programming.  Are you sitting down?  These bit patterns
    can be used to represent other sets of things, by mapping each
    pattern onto a member of the other set.  Doesn't sound like much,
    but IBM has made *BILLIONS* off this idea.

    For example, by mapping the patterns a word can hold onto the set
    of integers, you can represent either the numbers from 0 to 65535
    or -32768 to 32767, depending on the exact mapping you use.  You
    might recognize these as the BASIC's range of possible line
    numbers, and possible values for integer variables.  This
    explains these somewhat arbitrary seeming limits: BASIC uses
    words of memory to hold line numbers and integer variables.

    As another example, you could map the patterns a byte can hold
    onto a series of arbitrarily chosen little pictures which might
    be displayed on a video screen.  If you look at the table in
    the back of your BASIC manual, you'll notice that there are
    *exactly* 256 different characters that can be displayed on your
    screen.  Your computer uses a byte of memory to tell it what
    character to display at each location of the video screen.

    Without getting too far ahead of myself, I'll just casually
    mention that there are about 256 fundamental ways the 8088 can
    manipulate the bit patterns stored in memory.  This suggests
    another mapping which we'll discuss in more detail later.

    The point of this discussion is that we can use bit patterns to
    represent anything we want, and by manipulating the patterns in
    different ways, we can produce results which have significance in
    terms of what we're choosing to represent.


































                                                                    5
    >>DIGRESSION: A NOTATION SYSTEM FOR BIT PATTERNS<<

    Because of their importance, it would be nice to have a
    convenient way to represent the various bit patterns we'll be
    talking about.  We already have one way, by listing the states of
    the individual bits as a series of 1's and 0's.  However, this
    system is somewhat clumsy, and error prone.  Are the following
    word patterns identical or different?

    1111111011111111                         1111111101111111

    You probably had trouble telling them apart.  It's easier to tell
    that they're different by breaking them down into more manageable
    pieces, and comparing the pieces.  Here are the same two patterns
    broken down into four bit chunks:

    1111 1110 1111 1111                      1111 1111 0111 1111

    Some clown has given the name *nybble* to a chunk of 4 bits,
    presumably because 4 bits are half a byte.  A nybble is fairly
    easy to handle.  There are only 16 possible nybble long patterns,
    and most people can distinguish between the patterns quite
    easily.

    Each nybble pattern has been given a unique symbol agreed upon by
    computer scientists.  The first 10 patterns were given symbols
    "0" through "9", and when they ran out of digit style symbols,
    they used the letters "A" through "F" for the last six patterns.
    Below is the "nybble pattern code":

    0000 = 0    0001 = 1    0010 = 2    0011 = 3

    0100 = 4    0101 = 5    0110 = 6    0111 = 7

    1000 = 8    1001 = 9    1010 = A    1011 = B

    1100 = C    1101 = D    1110 = E    1111 = F

    Using the nybble code, we can represent the two similar word
    patterns given above, with the following more manageable
    shorthand versions:

                   FEFF       FF7F






















                                                                    6
    Of course, the assignment of the symbols for the various nybble
    patterns was not so arbitrary as I've tried to make it appear.  A
    perceptive reader who has been exposed to binary numbers will
    have noticed an underlying system to the assignments.  If the 1's
    and 0's of the patterns are interpreted as actual *numbers*,
    rather than mere symbols for bit states, the first 10 patterns
    correspond to binary numbers whose decimal representation is the
    symbol assigned to the pattern.

    The last six patterns receive the symbols "A" through "F", and
    taken together, the symbols 0 through F constitute the digits of
    the *hexadecimal* number system.  Thus, the symbols assigned to
    the different nybble patterns were born out of historical
    prejudice in thinking of the computer as strictly a number
    handling machine.  Although this is an important interpretation
    of these symbols, for the time being it's enough to merely think
    of them as a shorthand way to write down bit patterns.

    Because some nybble patterns can look just like a number, it's
    often necessary to somehow indicate that we're talking about a
    pattern.  In BASIC, you do this by adding the characters &H to
    the beginning of the pattern: &H1234.  A more common convention
    is to just add the letter H to the end of the pattern: 1234H.  In
    both conventions, the H is referring to hexadecimal.

    Eventually you'll want to learn about using the hexadecimal
    number system, since it is an important way to use bit patterns.
    I'm not going to discuss it in this primer, because a number of
    books have much better treatments of this topic than I could
    produce.  Consider this an advanced topic you'll want to fill in
    later.


































                                                                    7
    >>ADDRESSING MEMORY<<

    As stated before, the 8088 chip inside your computer can
    manipulate the bit patterns which make up the computer's memory.
    Some of the possible manipulations are copying patterns from one
    place to another, turning on or turning off certain bits, or
    interpreting the patterns as numbers and performing arithmetic
    operations on them.  To perform any of these actions, the 8088
    has to know what part of memory is to be worked on.  A specific
    location in memory is identified by its *address*.

    An address is a pointer into memory.  Each address points to the
    beginning of a byte long chunk of memory.  The 8088 has the
    capability to distinguish 1,048,576 different bytes of memory.

    By this point, it probably comes as no surprise to hear that
    addresses are represented as patterns of bits.  It takes 20 bits
    to get a total of 1,048,576 different patterns, and thus an
    address may be written down as a series of 20 bits (or 5 nybble
    codes).  For example, DOS stores a pattern which encodes
    information about what equipment is installed on your IBM PC in
    the word which begins at location 00410.  Interpreting the
    address as a hex number, the second byte of this word has an
    address 1 greater than 00410, or 00411.

    The 8088 isn't very happy handling 20 bits at a time.  The
    biggest chunk that's convenient for it to use is a 16 bit word.
    The 8088 actually calculates 20 bit addresses as the combination
    of two words, a segment word and an offset word.  The combination
    process involves interpreting the two patterns as hexadecimal
    numbers and adding them.  The way that two 16 bit patterns can be
    combined to give one 20 bit pattern is that the two patterns are
    added out of alignment by one nybble:

        0040      4 nybble segment
         0010     4 nybble offset
       --------
        00410     5 nybble address

    Because of this mechanism for calculating addresses, they will
    often be written down in what's called segment:offset form.
    Thus, the address in above calculation could be written:

    0040:0010





















                                                                    8
    >>MEMORY CONTENTS: DATA AND PROGRAMS<<

    The contents of memory may be broken down into two broad classes.
    The first is *data*, just raw patterns of bits for the 8088 to
    work on.  The significance of the patterns is determined by what
    the computer is being used for at any given time.

    The second class of memory contents are *instructions*.  The 8088
    can look at memory and interpret a pattern it sees there as
    specifying one of the 200 some fundamental operations it knows
    how to do.  This mapping of patterns onto operations is called
    the *machine language* of the 8088.  A machine language *program*
    consists of a series of patterns located in consecutive memory
    locations, whose corresponding operations perform some useful
    process.

    Note that there is no way for the 8088 to know whether a given
    pattern is meant to be an instruction, or a piece of data to
    operate on.  It is quite possible for the chip to accidentally
    begin reading what was intended to be data, and interpret it as a
    program.  Some pretty bizarre things can occur when this happens.
    In assembly language programming circles, this is known as
    "crashing the system".










































                                                                    9
    >>THE DAWN OF ASSEMBLY LANGUAGE<<

    Unless you happen to be an 8088 chip, the patterns which make up
    a machine language program can be rather incomprehensible.  For
    example, the pattern which tells the 8088 to flip all the bits in
    the byte at address 5555 is:

    F6 16 55 55

    which is not very informative, although you can see the 5555
    address in there.  In ancient history, the old wood-burning and
    vacuum tube computers were programmed by laboriously figuring out
    bit patterns which represented the series of instructions
    desired.  Needless to say, this technique was incredibly tedious,
    and very prone to making errors.  It finally occurred to these
    ancestral programmers that they could give the task of figuring
    out the proper patterns to the computer itself, and assembly
    language programming was born.

    Assembly language represents each of the many operations that the
    computer can do with a *mnemonic*, a short, easy to remember
    series of letters.  For example, in boolean algebra, the logical
    operation which inverts the state of a bit is called "not", and
    hence the assembly language equivalent of the preceding machine
    language pattern is:

        NOTB [5555]

    The brackets around the 5555 roughly mean "the memory location
    addressed by".  The "B" at the end of "NOTB" indicates that we
    want to operate on a byte of memory, not a word.

    Unfortunately, the 8088 can't make head nor tail of the string of
    characters "NOTB".  What's needed is a special program to run on
    the 8088 which converts the string "NOTB" into the pattern F6 16.
    This program is called an assembler.  A good analogy is that an
    assembler program is like a meat grinder which takes in assembly
    language and gives out machine language.

    Typically, an assembler reads a file of assembly language and
    translates it one line at a time, outputting a file of machine
    language.  Often times the input file is called the *source file*
    and the output file is called the *object file*.  The machine
    language patterns produced are called the *object code*.





















                                                                   10
    Also produced during the assembly process is a *listing*, which
    summarizes the results of the assembly process.  The listing
    shows each line from the source file, along with the shorthand
    "nybble code" representation of the object code produced.  In the
    event that the assembler was unable to understand any of the
    source lines, it inserts error messages in the listing, pointing
    out the problem.

    The primeval assembly language programmers had to write their
    assembler programs in machine language, because they had no other
    choice.  Not being a masochist, I wrote CHASM in Turbo Pascal.
    When you think about it, there's a sort of circular logic in
    action here. Some programmers at Borland wrote the Turbo Pascal
    in assembly language, and I used Turbo to write an assembler.
    Someday, I hope to use the present version of CHASM to produce a
    machine language version, which will run about a ten times
    faster, and at the same time bring this crazy process full
    circle.















































                                                                   11
    >>THE 8088<<

    The preceding discussions have (I hope) given you some very
    general background, a world view if you will, about assembly and
    machine language programming.  At this point, I'd like to get
    into a little more detail, beginning by examining the internal
    structure of the 8088 microprocessor from the programmer's point
    of view.  This discussion is a condensation of information which
    I obtained from "The 8086 Book" which was written by Russell
    Rector and George Alexy, and published by Osborne/McGraw-Hill.
    Once you've digested this, I'd recommend going to The 8086 Book
    for a deeper treatment.

    Inside the 8088 are a number of *registers* each of which can
    hold a 16 bit pattern.  In assembly language, each of the
    registers has a two letter mnemonic name.  There are 14
    registers, and their mnemonics are:

    AX BX CX DX     SP BP    SI DI     CS DS SS ES    PC ST

    Each of the registers are a little different and have different
    intended uses, but they can be grouped into some broad classes.

    The *general purpose* registers (AX BX CX DX) are just that.
    These are registers which hold patterns pulled in from memory
    which are to be worked on within the 8088.  You can use these
    registers for just about anything you want.

    Each of the general purpose registers can be broken down into two
    8 bit registers, which have names of their own.  Thus, the CX
    register is broken down into the CH and CL registers.  The "H"
    and "L" stand for high and low respectively.  Each general
    purpose register breaks down into a high/low pair.

    The AX register, and its 8 bit low half, the AL register, are
    somewhat special.  Mainly for historical reasons, these registers
    are referred to as the 16 bit and 8 bit *accumulators*.  Some
    operations of the 8088 can only be carried out on the contents of
    the accumulators, and many others are faster when used in
    conjunction with these registers.

























                                                                   12
    Another group of registers are the *segment* registers (CS DS SS
    ES).  These registers hold segment values for use in calculating
    memory addresses.  The CS, or code segment register, is used
    every  time the 8088 accesses memory to read an instruction
    pattern.  The  DS, or data segment register, is used for bringing
    data patterns in.  The SS register is used to access the stack
    (more about the stack later).  The ES is the extra segment
    register.  A very few special instructions use the ES register to
    access memory, plus you can override use of the DS register and
    substitute the ES register if you need to maintain two separate
    data areas.

    The *pointer* (SP BP) and *index* (DI SI) registers are used to
    provide indirect addressing, which is an very powerful technique
    for accessing memory.  Indirect addressing is beyond the scope of
    this little primer, but is discussed in The 8086 Book.  The SP
    register is used to implement a stack in memory. (again, more
    about the stack later)  Besides their special function, the BP,
    DI and SI registers can be used as additional general purpose
    registers.  Although it's possible to directly manipulate the
    value in the SP register, it's best to leave it alone, since you
    could wipe out the stack.

    Finally, there are two registers which are relatively
    inaccessible to direct manipulation.  The first is the *program
    counter*, PC.  This register always contains the offset part of
    the address of the next instruction to be executed.  Although
    you're not allowed to just move values into this register, you
    *can* indirectly affect its contents, and hence the next
    instruction to be executed, using operations which are equivalent
    to BASIC's GOTO and GOSUB instructions.  Occasionally, you will
    see the PC referred to as the *IP*, which stands for instruction
    pointer.

    The last register is also relatively inaccessible.  This is the
    *status* register, ST.  This one has a *two* alternate names, so
    watch for FL (flag register) and PSW (program status word).  The
    latter is somewhat steeped in history, since this was the name
    given to a special location in memory which served a similar
    function on the antique IBM 360 mainframe.

























                                                                   13
    The status register consists of a series of one bit *flags* which
    can affect how the 8088 works.  There are special instructions
    which allow you to set or clear some of the flags.  In addition,
    many instructions affect the state of the flags, depending on
    their outcome.  For example, one of the bits of the status
    register is called the Zero flag.  Any operation which ends up
    generating a bit pattern of all 0's automatically sets the Zero
    flag on.

    Setting the flags doesn't seem to do much, until you know that
    there a whole set of conditional branching instructions which
    cause the equivalent to a BASIC GOTO if the particular flag
    pattern they look for is set.  In assembly language, the only way
    to make a decision and branch accordingly is via this flag
    testing mechanism.

    Although some instructions implicitly affect the flags, there are
    a series of instructions whose *only* effect is to set the flags,
    based on some test or comparison.  It's very common to see one
    of these comparison operations used to set the flags just before
    a conditional branch.  Taken together, the two instructions are
    exactly equivalent to BASIC's:

    IF (comparison) THEN GOTO (linenumber)









































                                                                   14
    >>ASSEMBLY LANGUAGE SYNTAX<<

    In general, each line of an assembly language program translates
    to a set of patterns which specify one fundamental operation for
    the 8088 to carry out.

    Each line may consist of one or more of the following parts:

    First, a label, which is just a marker for the assembler to use.
    If you want to branch to an instruction from some other part of
    the program, you put a label on the instruction.  When you want
    to branch, you refer to the label.  In general, the label can be
    any string of characters you want.  A good practice is to use a
    name which reminds you what that particular part of the program
    does. CHASM will assume that any string of characters which
    starts in the first column of a line is intended to be a label.

    After the label, or if the text of the line starts to the right
    of the first column, at the beginning of the text, comes an
    instruction mnemonic.  This specifies the operation that the line
    is asking for.  For a list of the 200-odd mnemonics, along with
    the instructions they stand for, see The 8086 Book.

    Most of the 8088 instructions require that you specify one or
    more *operands*.  The operands are what the operation is to work
    on, and are listed after the instruction mnemonic.

    There are a number of possible operands.  Probably the most
    common are registers, specified by their two letter mnemonics.

    Another operand type is *immediate data*, a pattern of bits to be
    put somewhere or compared or combined with some other pattern.
    Generally immediate data is specified by its nybble code
    representation, marked as such by following it with the letter
    "H".  Most assemblers allow alternate ways to specify immediate
    data which emphasize the pattern's intended use.  CHASM
    recognizes ten different ways of representing immediate data.




























                                                                   15
    A memory location can be used as an operand.  We've seen one way
    to do this, by enclosing its address in brackets.  (You can now
    see why the brackets are needed.  Without them, the assembler
    couldn't distinguish between an address and immediate data.)  If
    you've asked the assembler to set aside a section of memory for
    data (more on this latter), and put a label on the request, you
    can specify that point in memory by using the label.  Finally,
    there are a number of indirect ways to address memory locations,
    which you can read about in The 8086 Book.

    The last major type of operands are labels.  Branching
    instructions require an operand to tell them where to branch
    *to*.  In assembly language, you specify locations which may be
    branched to by putting a label on them.  You can then use the
    label as an operand on branches.

    Often times, the order in which the operands are listed can be
    important.  For example, when moving a pattern from one place to
    another, you need to specify where the pattern is to come from,
    and where it's going.  The convention in general use is that the
    first operand is the *destination* and the second is the
    *source*.  Thus, to move the pattern in the DX register into the
    AX register, you would write:

            MOV AX,DX

    This may take some getting used to, since when reading from left
    to right it seems reasonable to assume that the transfer goes in
    this direction as well.  However, since this convention is pretty
    well entrenched in the assembly language community, CHASM goes
    along with it.

    The last part of an assembly language line is a *comment*.  The
    comment is totally ignored by the assembler, but is *vital* for
    humans who are attempting to understand the program.  Assembly
    language programs tend to be very hard to follow, and so it's
    particularly important to put in lots of comments so that you'll
    remember just what it was you were trying to do with a given
    piece of code.  Professional assembly language programmers put a
    comment on *every* line of code, explaining what it does, plus
    devoting many entire lines for additional explanations.  For an
    example, you should examine the BIOS source listing given in the
    IBM Technical Reference manual.  Over *half* the text consists of
    comments!





















                                                                   16
    Since the assembler ignores the comments, they cost you nothing
    in terms of size or speed of execution in the resulting machine
    language program.  This is in sharp contrast to BASIC, where each
    remark slows your program down and eats up precious memory.

    Generally, a character is set aside to indicate to the assembler
    the beginning of a comment, so that it knows to skip over.  CHASM
    follows a common convention of reserving the semi-colon (;) for
    marking comments.
























































                                                                   17
    >>THE STACK<<

    I've been dropping the name *stack* from time to time.  The stack
    is just a portion of memory which has been temporarily set aside
    to be used in a special way.

    To get a picture of how the stack works, think of the spring
    loaded contraptions you sometimes see holding trays in a
    cafeteria.  As each tray is washed, the busboy puts it on top of
    the stack in the contraption.  Because the thing is spring
    loaded, the whole stack sinks down from the weight of the new
    tray, and the top of the stack ends up always being the same
    height off the floor.  When a customer takes a tray off the
    stack, the next one rises up to take its place.

    In the computer, the stack is used to hold data patterns, which
    are generally being passed from one program or subroutine to
    another.  By putting things on the stack, the receiving routine
    doesn't need to know a particular address to look for the
    information it needs, it just pulls them off the top of the
    stack.

    There is some jargon associated with use of the stack.  Patterns
    are *pushed* onto the stack, and *popped* off.  Accordingly,
    there are a set of PUSH and POP instructions in the 8088's
    repertoire.

    Because you don't need to keep track of where the patterns are
    actually being kept, the stack is often used as a scratch pad
    area, patterns being pushed when the register they're in is
    needed for some other purpose, then popped out when the register
    is free.  It's very common for the first few instructions of a
    subroutine to be a series of pushes to save the patterns which
    are occupying the registers it's about to use.   This is referred
    to as *saving the state* of the registers.  The last thing the
    subroutine will do is pop the patterns back into the registers
    they came from, thus *restoring the state* of the registers.

    Following the analogy of the cafeteria contraption, when you pop
    the stack, the pattern you get is the last one which was pushed.
    When you pop a pattern off, the next-to-last thing pushed
    automatically moves to the top, just as the trays rise up when a
    customer removes one.  Everything comes off the stack in the
    reverse order of which they went on.  Sometimes you'll see the
    phrase "last in, first out" or *LIFO stack*.




















                                                                   18
    Of course, there are no special spring loaded memory locations
    inside the computer.  The stack is implemented using a register
    which keeps track of where the top of the stack is currently
    located.  When you push something, the pointer is moved to the
    next available memory location, and the pattern is put in that
    spot.  When something is popped, it is copied from the location
    pointed at, then the pointer is moved back.  You don't have to
    worry about moving the pointer because it's all done
    automatically with the push and pop instructions.

    The register set aside to hold the pointer is SP, and that's why
    SP shouldn't be monkeyed with.  You'll recall that to form an
    address, two words are needed, an offset and a segment.  The
    segment word for the stack is kept in the SS register, so you
    should leave SS alone as well.  When you run the type of machine
    language program that CHASM produces, DOS will automatically set
    the SP and SS registers to reserve a stack capable of holding 128
    words.















































                                                                   19
    >>SOFTWARE INTERRUPTS<<

    I have been religiously avoiding talking about the various
    individual instructions the 8088 can carry out, because if I
    didn't, this little primer would soon grow into a rather long
    book.  However, there's one very important instruction, which
    when you read about it in The 8088 Book, won't seem particularly
    useful.  This section will discuss the *software interrupt*
    instruction, INT, and why it's so important.

    The 8088 reserves the first 1024 bytes of memory for a series of
    256 *interrupt vectors*.  Each of these two word long interrupt
    vectors is used to store the segment:offset address of a location
    in memory.  When you execute a software interrupt instruction,
    the the 8088 pushes the location of the next instruction of your
    program onto the stack, then branches to the memory location
    pointed at by the vector specified in the interrupt.

    This probably seems like a rather awkward way to branch around in
    memory, and chances are you'd never use this method to get from
    one part of your program to another.  The way these instructions
    become important is that IBM has pre-loaded a whole series of
    useful little (and not so little) machine language routines into
    your computer, and set the interrupt vectors to point to them.
    All of these routines are set up so that after doing their thing,
    they use the location pushed on the stack by the interrupt
    instruction to branch back to your program.

    Some of these routines are a part of DOS, and documentation for
    them can be found in the DOS Technical Reference manual.  The
    rest of them are stored in ROM (read only memory) and comprise
    the *BIOS*, or basic input/output system of the computer.
    Details of the BIOS routines can be found in the Hardware
    Technical Reference Manual.  DOS and BIOS interrupt data is also
    available in Peter Norton's book "Programmer's Guide to the IBM
    PC".

    The routines do all kinds of useful things, such as run the disk
    drive for you, print characters on the screen, or read data from
    the keyboard.  In effect, the software interrupts add a whole
    series of very powerful operations to the 8088 instruction set.
























                                                                   20
    A final point is that if you don't like the way that DOS or the
    BIOS does something, the vectored interrupt system makes it very
    easy to substitute your own program to handle that function.  You
    just load your program and reset the appropriate interrupt vector
    to point at your program rather than the resident routine.  This
    is how all those RAM disk and print spooler programs work.  The
    programs change the vector for disk drive or printer support to
    point to themselves, and carry out the operations in their own
    special way.

    To make things easy for you, one of the DOS interrupt routines
    has the function of resetting interrupt vectors to point at new
    code.  Still another DOS interrupt routine is used to graft new
    code onto DOS, so that it doesn't accidentally get wiped out by
    other programs.  The whole thing is really quite elegant and easy
    to use, and IBM is to be complimented for setting things up this
    way.
















































                                                                   21
    >>PSEUDO-OPERATIONS<<

    Up to this point, I've implied that each line of an assembly
    language program gets translated into a machine language
    instruction.  In fact, this is not the case.  Most assemblers
    recognize a series of *pseudo-operations* which are handled as
    embedded commands to the assembler itself, not as an instruction
    in the machine language program being built.  Almost invariably
    you'll see the phrase "pseudo-operation" abbreviated down to
    *pseudo-op*. Sometimes you'll see *assembler directive*, which
    means the same thing, but just doesn't seem to roll off the
    tongue as well.

    One very common pseudo-op is the *equate*, usually given mnemonic
    *EQU*.  What this allows you to do is assign a name to a
    frequently used constant.  Thereafter, anywhere you use that
    name, the assembler automatically substitutes the constant.  This
    process makes your program easier to read, since in place of the
    somewhat meaningless looking pattern, you see a name which tells
    you what the pattern is for.  It also makes your program easier
    to modify, since if you decide to change the constant, you only
    need to do it once, rather than all over the program.

    The only other type of pseudo-op I'll talk about here are those
    for setting aside memory locations for data.  These pseudo-ops
    tend to be quite idiosyncratic with each assembler.  CHASM
    implements three such pseudo-ops: DB (declare bytes), DW (declare
    words) and DS (declare storage).  DB is used to set aside small
    data areas, which can be initialized to any pattern, one byte at
    a time.  DW is an analogous pseudo-op for setting asides whole
    words of memory, one at a time.  DS sets up relatively large
    areas, but all the locations are filled with the same initial
    pattern.

    If you put a label on a pseudo-op which sets aside data areas,
    most assemblers allow you to use the label as an operand, in
    place of the actual address of the location.  The assembler
    automatically substitutes the address for the name during the
    translation process.

    Some assemblers have a great number of pseudo-ops.  CHASM
    implements a few more, which aren't discussed here.























                                                                   22
    >>TUTORIAL<<

    To conclude this primer, this section will walk through the
    process of writing, assembling, and running a very simple
    program.

    Our program will just print a message on the video screen, and
    then return to DOS.  Although very simple, this program will
    demonstrate a number of points, including a DOS function call,
    setting aside memory for storage, and good programming form.

    The DOS technical reference manual (or Norton's book) discusses
    the various DOS functions and interrupts available to the
    assembly language programmer.   To print a text string to the
    video screen, we'll use function 9.  You should read the
    documentation for this function at this time.


    Did it make any sense?  To use this function, we have to load the
    DX register with the address of a string in memory, specify
    function 9 by loading a "9" into the AH register, then ask DOS to
    do the printing by executing interrupt 21H.  Basically, we just
    set things up, and DOS does all the real work.

    Here's the code to do this:

         MOV AH, 9                 ;specify DOS function 9
         MOV DX, OFFSET(MESSAGE)   ;get address of string
         INT 21H                   ;call DOS

    Note that none of the lines starts at the left margin  (column
    one). If they did, CHASM would think that the instruction
    mnemonic was meant to be a label, and would get very confused.
    Also note that each line has a comment explaining what's going
    on.

    The second line needs a little explaining.  CHASM's OFFSET
    function returns the address of whatever is included in the
    parentheses, in this case, MESSAGE.  The assumption made here is
    that later in the program we will set aside a memory location
    containing our string to be printed, and give it the name
    "MESSAGE".























                                                                   23
    Once we've printed our string, we want to return to DOS.  If we
    don't explicitly transfer control back to DOS, the 8088 will
    happily continue to execute whatever random patterns are in
    memory after our stuff.  Remember "crashing the system"?  One of
    DOS's reserved interrupts handles program termination, returning
    you to DOS.  The proper instruction is:

           INT 20H        ;return to DOS

    All that's left at this point is to set aside a chunk of memory
    containing a string to be printed.  We'll use CHASM's DB (Declare
    Bytes) pseudo-op to do this:

    MESSAGE DB  'Hello, World!$'     ;message to be printed

    The memory location is given the name "MESSAGE" because the line
    started with a "MESSAGE" as a label.  Now CHASM will know that
    the preceding OFFSET was talking about this memory location.  You
    don't need to worry about what the actual address of MESSAGE is,
    CHASM takes care of that.

    Fourteen bytes of memory get set aside here, containing the ASCII
    codes for the characters in "Hello, World!$".  Note that the
    string ends in the character "$".  DOS function 9 prints
    characters until it encounters a "$", at which point it stops.
    If you forget to put the "$" at the end of your string, you'll
    have the less-than-amusing experience of watching DOS attempt to
    print out the entire contents of memory.





































                                                                   24
    Bringing everything together, and adding a few comments at the
    beginning, here's our complete program:

    ;=====================================;
    ; HELLO    Version 1.00               ;
    ;          1984 by David Whitman      ;
    ;                                     ;
    ; Sample source file for CHASM.       ;
    ; Prints a greeting on the console.   ;
    ;=====================================;

            MOV AH, 9                 ;specify DOS function 9
            MOV DX, OFFSET(MESSAGE)   ;get address of string
            INT 21H                   ;call DOS

            INT 20H                   ;return to DOS

    MESSAGE DB  'Hello, World!$'      ;message to be printed

    After writing all this, we need to create a text file which
    contains the lines of our program.  You do this with a text
    editor or word processor.  (Of course, in real life you write the
    program using the editor in the first place.)

    CHASM likes its source files in "standard DOS" format, what some
    word processors call "document" or "ASCII mode".  Most word
    processors, and all straight text editors work in this format
    automatically.  Wordstar and Easywriter (and probably a few other
    packages) have their own special formats, but their manual should
    tell you how to make standard DOS files.

    At this point, make a standard DOS file named HELLO.ASM which
    contains the above program lines.  If you're feeling lazy, or if
    you run into problems, the file EXAMPLE.ASM on your CHASM disk
    has these lines already entered for you.  Just copy EXAMPLE.ASM
    into a new file called HELLO.ASM and you're in business.

    It's now time to assemble the program.  If it's not already
    there, copy HELLO.ASM onto your CHASM disk. Put the CHASM disk
    into your default drive, and start up CHASM by typing its name:

       A> CHASM

    CHASM will respond by printing a hello screen, and ask you to
    press a key when you're done reading it.  When you do so, CHASM
    will ask you some questions:



















                                                                   25

        Source code file name? [.asm]

    Type in the HELLO.ASM, or just HELLO, then hit return.  (If you
    don't enter the file extension, CHASM assumes that it's .ASM)

        Direct listing to Printer (P), Screen (S), or Disk (D)?

    CHASM wants to know where to send the listing produced during the
    assembly process.  If you have a printer, turn it on, and then
    press P.  If you don't have a printer, press S.

    The last question is:

        Name for object file? [hello.com]

    CHASM is asking for the name you'd like to give to the machine
    language program which is about to be produced.  Just press enter
    here.  CHASM will name the program HELLO.COM

    At this point CHASM will start accessing the disk drive, reading
    in your program a line at a time.  A status line will appear at
    the bottom of your screen, telling you how far along the
    translation has gotten.  CHASM will make two passes over your
    file, outputing the translated program on the second pass.

    If the listing went to your printer, CHASM automatically returns
    you to DOS when finished.  If the listing went to the screen,
    CHASM waits for you to press a key to indicate that you're done
    reading.  Near the bottom of the listing will be the message:

    XXX Diagnostics Offered
    YYY Errors Detected

    If both numbers are 0, everything went fine.  If not, look up on
    the listing for error messages, which will point out the
    offending lines.  At this point, don't worry too much about what
    the error messages say, just fix the line in your input file to
    look like the text developed above.  Once you manage to get an
    assembly with no errors, you're ready to go on.

    Your disk will now contain a machine language program named
    HELLO.COM.  Confirm this by typing DIR to get a directory
    listing.  You should see the new program file listed.





















                                                                   26
    To run the machine language program, you just type its name,
    without the .COM extension.  (Note: even though you don't *enter*
    the "COM", the file has to have this extension for DOS to
    recognize it as a machine language program.)  Try it out now.
    From the DOS prompt, type: HELLO.  Your disk drive will whir for
    a second, then the message "Hello World!" will appear.

    For a further exercise, you might try printing a carriage return
    and then a line feed before the message, to space it down the
    screen a little.  Carriage return has ASCII code 13, and line
    feed is 10.  Read the CHASM User's Manual about the DB pseudo-op,
    and add these two characters at the beginning of STRING using
    their decimal representations.

    Try writing a new program called BEEP which writes the "bell"
    character to the screen.  You can use BEEP to signal the end of
    long batch files, or to annoy your co-workers.  Resist the urge
    to program a loop into BEEP.

    An even more advanced exercise would be to clear the screen
    before printing a message.  The easiest way to do this is to
    use a BIOS function, VIDEO_IO, documented on in the Hardware
    Technical Reference Manual.  The comments in the BIOS listing
    tell you what values to load into which registers to get VIDEO_IO
    to monkey with the screen for you.  Load the registers and
    execute INT 10H, once to blank the screen, and again to move the
    cursor to the upper left hand corner.

    If you've read all of this primer and run the above program,
    maybe modifying it a little, you're no longer a rank beginner.
    At this point you should have enough of a start to be able to
    digest the CHASM User's Manual and The 8086 Book, then begin to
    write your own programs.  Good Luck!
































```
{% endraw %}

## STRCOMP.ASM

{% raw %}
```
;==============================================================
; function StrComp(var Str1, Str2: AnyString): integer;
;    external 'strcomp';
;
; External function for Turbo Pascal
;
; Compares two strings, returning an integer as follows:
;
;          0 : Str1 = Str2
;          1 : Str1 > Str2
;          2 : Str2 > Str1
;
; Turbo's string compare routine copies both strings onto
; the stack and compares the copies.  This routine runs
; about 3 times faster by passing pointers and comparing
; the strings in place.
;
; Another advantage is that the integer result can be used to
; drive a CASE statement, eliminating multiple comparisons.
;================================================================

stack         struc                ;models structure of stack
oldbp         dw  0000H            ;saved BP register
retaddr       dw  0000H            ;return address to Turbo
str2ptr       dw  0000H, 0000H     ;address of 2nd parameter
str1ptr       dw  0000H, 0000H     ;address of 1st parameter
result        dw  0000H            ;funtion result field
              endstruc

strcomp       proc   near
              push   bp               ;establish addressability
              mov    bp, sp           ;of parameters
              push   ds

              lds    si, str1ptr[bp]  ;point to string 1
              les    di, str2ptr[bp]  ;and string 2

              mov    cl, [si]         ;CX <== length(Str1)
              xor    ch, ch           ;  ditto
              inc    si               ;point to 1st char of string

              mov    dl, es:[di]      ;DX <== length(Str2)
              xor    dh, dh           ;   ditto
              inc    di               ;point to 1st char of string

              mov    bh, cl           ;save lengths for later
              mov    bl, dl

              cmp    cl, dl           ;use shorter length
              jb     s1               ;skip if CL has short one
              xchg   cl, dl           ;otherwise switch them

s1            or     cl, cl           ;null string?
              jz     s2               ;skip if so

              repe                    ;perform string comparison
              cmpsb
              jne    s4

s2            cmp    bh, bl           ;substrings equal? if so,
                                      ;resolve by length comparison

s3            jne    s4               ;test for equal option
              xor    ax, ax           ;send 0 for equal
              jmps   exit
s4            jb     s5               ;St1 > St2?
              mov    ax, 0001H        ;send 1 if St1 greater
              jmps   exit
s5            mov    ax, 0002H        ;send 2 if St2 greater

exit          pop    ds
              pop    bp
              ret    0AH
              endp
```
{% endraw %}

## WC.ASM

{% raw %}
```
;================================================
; PROGRAM WC    Version 1.1 by Dave Whitman
;
; Filter to count words, lines and characters.
; Based loosely on Kernighan and Ritchie, page 18.
;
; Syntax:  WC [?] [/w] [/l] [/c]
;
;           ? = print help message
;          /w = unlabeled word count
;          /l = unlabeled line count
;          /c = unlabeled character count
;        none = combined counts, with labels
;
; The three options may be present in any combination.
; Regardless of option order, the selected counts will
; be in the following order:
;    words
;    lines
;    characters
;
; Requires DOS 2.0, will abort under earlier versions.
;====================================================

;============
; Equates
;============

@read   equ    3FH             ;read file/device
@chrin  equ    06H             ;get char from stdin
@chrout equ    02H             ;send char to stdout
@dosver equ    30H             ;get dos version
@prnstr equ    09H             ;print string

stdin   equ    0000H           ;standard input

w       equ    01H             ;flag value for word option
l       equ    02H             ;flag value for line option
c       equ    04H             ;flag value for char option

yes     equ    0FFH            ;boolean value
no      equ    00H             ;    "
cr      equ    0DH             ;carriage return
lf      equ    0AH             ;line feed
\n      equ    0DH             ;newline char
\t      equ    09H             ;tab char
\l      equ    0AH             ;linefeed char

buf_size       equ     8192
mem_avail      equ     [06H]
param_count    equ     [80H]
param_area     equ     [81H]

main   proc    far
       call    setup           ;check dos, parse options
       call    buf_in          ;count w, l, c from std i/o
       call    output          ;send requested output
       int     20H             ;and return to dos
       endp

;======================================
; SUBROUTINE SETUP
; Checks for proper DOS, parses options
;======================================
setup  proc    near

       mov     ah, @dosver     ;what dos are we under?
       int     21H
       cmp     al, 2           ;2.0 or over?
       jae     a0              ;yes, skip

       mov     ah, @prnstr     ;no, bitch
       mov     dx, offset(baddos)
       int     21H
       pop     ax              ;reset stack
       int     20H             ;and exit

a0     mov     ax, mem_avail   ;do we have room for the buffer?
       cmp     ax, buf_size
       jae     a1              ;yes, skip
       mov     ah, @prnstr     ;no, bitch
       mov     dx, offset(nomem)
       int     21H
       pop     ax              ;reset stack
       int     20H             ;and exit

a1     xor     ch,ch           ;cx <== param count
       mov     cl, param_count ;  "
       cmp     cl, 00H         ;any params?
       je      aexit           ;exit if none

       mov     di, offset(param_area)  ;scan for help request
       mov     al, '?'                 ;marked with ?
       repnz                           ;scan until match or end
       scasb
       jnz     a_par                   ;reached end, no match? skip
       mov     ah, @prnstr             ;matched? print help
       mov     dx, offset(help)
       int     21H
       pop     ax                      ;pop stack and exit
       int     20H

a_par  xor     ch, ch                   ;get number of param chars again
       mov     cl, param_count
       mov     di, offset(param_area)   ;scan for options
a2     mov     al, '/'                  ;will be marked with /
       repnz
       scasb
       jnz     aexit           ;reached end

       mov     al, [di]        ;get option char
       and     al, 0DFH        ;guarantees upper case

       cmp     al, 'W'         ;words?
       jne     a3              ;nope
       orb     options, w      ;yes, set flag
       jmps    a2              ;and loop

a3     cmp     al, 'L'         ;lines?
       jne     a4              ;nope
       orb     options, l      ;yes, set flag
       jmps    a2              ;and loop

a4     cmp     al, 'C'         ;characters?
       jne     a2              ;nope, just loop
       orb     options, c      ;yes, set flag
       jmps    a2              ;and loop

aexit  ret

baddos db      cr lf 'This program requires DOS 2.0!' cr, lf, '$'

nomem  db      cr lf 'Insufficient memory, program aborted' cr lf '$'
help   db       cr lf
       db      'WC  version 1.2 by D. Whitman' cr lf
       db       cr lf
       db      'Reads StdIn, and writes count of words, lines,' cr lf
       db      'and characters to StdOut.' cr lf
       db       cr lf
       db      'Syntax:' cr lf
       db       cr lf
       db      '   WC [?] [/W] [/L] [/C] [<infile] [>outfile]' cr lf
       db       cr lf
       db      '   Options:' cr lf
       db      '        ? = print this help message' cr lf
       db      '       /W = print unlabeled word count' cr lf
       db      '       /L = print unlabeled line count' cr lf
       db      '       /C = print unlabeled character count' cr lf
       db      '     none = combined counts, with labels' cr lf
       db       cr lf
       db      'Multiple options can be selected.' cr lf
       db       cr lf
       db      'This program is in the public domain.' cr lf '$'
       endp

;=========================================
; SUBROUTINE BUF_INPUT
; Inputs data by sector, sends it one char
; at a time for counting.
;==========================================


buf_in proc    near

       movb    inword, no      ;not currently in a word

bu1    mov     ah, @read       ;read
       mov     bx, stdin       ;from stdin
       mov     cx, buf_size    ;one buffer's worth
       mov     dx, offset(buffer)
       int     21H
       cmp     ax, 00H         ;test for EOF
       jz      buexit          ;if so, done

       mov     cx,ax           ;cx <== number chars read
       mov     si, offset(buffer)
bu2    lodsb                   ;al <== next char from buffer
       call    count           ;update totals
       loop    bu2
       jmps    bu1
buexit ret
       endp

;=============================================
;SUBROUTINE COUNT
;Counts words, lines and characters as per K&R
;=============================================
count  proc    near
       addw    clow,0001H      ;bump # of chars
       jae     b1              ;no carry? skip
       incw    chigh           ;handle carry

       ;in the following, note use of ADD to increment
       ;doublewords.  INC does not affect Carry Flag.

b1     cmp     al, \n          ;is it a newline?
       jne     b2              ;no, skip
       addw    llow,0001H      ;bump # of lines
       jae     b2              ;no carry? skip
       incw    lhigh           ;handle carry

b2     cmp     al, \n          ;newline or
       je      b3
       cmp     al, \t          ;tab or
       je      b3
       cmp     al, \l          ;linefeed or
       je      b3
       cmp     al, ' '         ;blank,
       je      b3              ;then skip

      ;none of the above
       cmpb    inword, yes     ;already in a word?
       je      b4              ;yes, return
       movb    inword, yes     ;if not, we are now.
       addw    wlow,0001H      ;bump word count
       jae     b4              ;no carry? return
       incw    whigh           ;handle carry
       jmps    b4              ;return

      ;any of the above
b3     movb    inword, no
b4     ret
       endp

;=====================================
; SUBROUTINE OUTPUT
; Prints results, modified by options.
;=====================================
output proc    near

       cmpb    options, 00H    ;any options?
       jne     c1              ;yes, skip label
       mov     ah, @prnstr     ;print label for word count
       mov     dx, offset(word_label)
       int     21H
       jmps    c1a             ;print count

c1     testb   options, W      ;/w option?
       jz      c2              ;nope, skip
c1a    mov     di, whigh       ;get doubleword word count
       mov     si, wlow        ; in di:si
       call    printdd         ;convert and print it.
       call    newline

c2     cmpb    options, 00H    ;any options?
       jne     c3              ;yes, skip label
       mov     ah, @prnstr     ;print label for line count
       mov     dx, offset(line_label)
       int     21H
       jmps    c3a             ;print count

c3     testb   options, L      ;/l option?
       jz      c4              ;nope, skip
c3a    mov     di, lhigh       ;get doubleword line count
       mov     si, llow        ; in di:si
       call    printdd         ;convert and print it
       call    newline

c4     cmpb    options, 00H    ;any options?
       jne     c5              ;yes, skip label
       mov     ah, @prnstr     ;print label for char count
       mov     dx, offset(char_label)
       int     21H
       jmps    c5a             ;print count

c5     testb   options, C      ;/c option?
       jz      c6              ;nope, skip
c5a    mov     di, chigh       ;get doubleword char count
       mov     si, clow        ; in di:si
       call    printdd         ;convert and print it
       call    newline

c6     ret

word_label db 'Words:  $'
line_label db 'Lines:  $'
char_label db 'Chars:  $'
      endp

;=========================
; SUBROUTINE NEWLINE
; Prints a CR/LF to stdout
;=========================
newline proc   near
       mov     ah, @prnstr
       mov     dx, offset(crlf)
       int     21H
       ret
crlf   db      0DH, 0AH, '$'
       endp

;=========================================================
; SUBROUTINE PRINTDD
; This less-than-comprehensible routine was swiped verbatim
; from Ted Reuss's disassembly of John Chapman's sorted
; disk directory program.  The routine converts a 32 bit
; integer in DI:SI to ASCII digits and sends them to STDOUT.
;==========================================================

PRINTDD PROC    NEAR    ;Prints a 32 bit integer in DI:SI
        XOR     AX,AX           ;Zero out the
        MOV     BX,AX           ; working
        MOV     BP,AX           ; registers.
        MOV     CX,32           ;# bits of precision
J1      SHL     SI
        RCL     DI
        XCHG    BP,AX
        CALL    J6
        XCHG    BP,AX
        XCHG    BX,AX
        CALL    J6
        XCHG    BX,AX
        ADC     AL,0
        LOOP    J1
        MOV     CX,1710H        ;5904 ?
        MOV     AX,BX
        CALL    J2
        MOV     AX,BP
J2      PUSH    AX
        MOV     DL,AH
        CALL    J3
        POP     DX
J3      MOV     DH,DL
        SHR     DL              ;Move high
        SHR     DL              ; nibble to
        SHR     DL              ; the low
        SHR     DL              ; position.
        CALL    J4
        MOV     DL,DH
J4      AND     DL,0FH          ;Mask low nibble
        JZ      J5              ;If not zero
        MOV     CL,0
J5      DEC     CH
        AND     CL,CH
        OR      DL,'0'          ;Fold in ASCII zero
        SUB     DL,CL

        MOV     AH, @CHROUT     ;Print next digit
        INT     21H

        RET                     ;Exit to caller
        ENDP

J6     PROC    NEAR
        ADC     AL,AL
        DAA
        XCHG    AL,AH
        ADC     AL,AL
        DAA
        XCHG    AL,AH
        RET
        ENDP

;=================
;GLOBAL VARIABLES
;=================
options  db  00H       ;byte of option flags
inword   db  00H       ;flag: yes indicates scan is within a word
wlow     db  00H, 00H  ;low part of doubleword word count
whigh    db  00H, 00H  ;high "   "      "       "     "
llow     db  00H, 00H  ;low part of doubleword line count
lhigh    db  00H, 00H  ;high "   "      "       "     "
clow     db  00H, 00H  ;low part of doubleword char count
chigh    db  00H, 00H  ;high "   "      "       "     "
buffer                 ;input buffer
```
{% endraw %}

## WC.DOC

{% raw %}
```
WC Filter
Command


----------------------------------------------------------------

Purpose: This filter reads data from the standard input and
         counts the number of words, lines and characters.  A
         report of the totals is sent to the standard output.

Format:  WC [/W] [/L] [/C]

Type:    Internal      External
                         ***

Remarks: If no parameters are specified, a labeled report of
         total words, lines and characters is produced.

         The parameters may be used to select a report of words
         (/W), lines (/L), or characters (/C).  Any combination
         of the various parameters may be used.  To allow piping
         of results, use of any of the parameters will supress
         labeling of the output.  Regardless of the order of
         parameters, the output report is ordered:

              Words
              Lines
              Characters

         WC defines a word as any string of characters which does
         not contain a blank, tab, carriage return, or line
         feed.

         WC requires DOS 2.0, and will abort and print an error
         message under earlier versions of DOS.

Author:  David Whitman
         P.O. Box 1157
         North Wales, PA 19545

```
{% endraw %}

## ZAPSTUFF.ASM

{% raw %}
```
;===================================================
; module ZapStuff
;
; Module of external procedures for Turbo Pascal.
; Provides high speed direct write screen output.
;
; In Turbo, declare as:
;
; procedure ZapStuff;
;    external 'zapstuff.com';
;
; procedure ZapStr(var Str: AnyString; Row, Column, Attribute, Video: byte);
;    external zapstuff[0];
;
; procedure ZapClrEOL(Row, Column, Attribute, Video: byte);
;    external zapstuff[3];
;
; procedure ZapClrBox(ulrow, ulcolumn, lrrow, lrcol, attribute: byte);
;    external zapstuff[6];
;
; See page 211 of the Turbo Pascal version 3 manual for
; a discussion of this declaration syntax.
;===================================================

bios_data    equ   40H
equip_flag   equ   [10H]
crt_status   equ   3DAH       ;crt status port on 6845 controller chip
mono_seg     equ   0B000H
color_seg    equ   0B800H

;==========================================================
; The following structures mimic the contents of the stack
; for calls to each of the procedures.  Note that byte
; parameters occupy an entire word on the stack.
;==========================================================

strstack        struc                       ;simulate stack contents
str_old_bp      dw      0000H               ;saved bp register
str_ret_addr    dw      0000H               ;return address to turbo pascal
str_video       dw      0000H               ;5th param: video output method
str_attrib      dw      0000H               ;4th param: attribute byte
str_col         dw      0000H               ;3rd param: column
str_row         dw      0000H               ;2nd param: row
str_str_offs    dw      0000H               ;1st param: offset of string
str_str_seg     dw      0000H               ;1st param: segment of string
                endstruc

eolstack        struc
eol_old_bp      dw      0000H               ;saved bp register
eol_ret_addr    dw      0000H               ;return address to turbo pascal
eol_video       dw      0000H               ;4th param: video output method
eol_attrib      dw      0000H               ;3rd param: video attribute
eol_col         dw      0000H               ;2nd param: column
eol_row         dw      0000H               ;1st param: row
                endstruc

cbstack         struc
cb_old_bp       dw      0000H               ;saved bp register
cb_ret_addr     dw      0000H               ;return address to turbo pascal
cb_attrib       dw      0000H               ;5th param: video attribute
cb_lrc          dw      0000H               ;4th param: lower right column
cb_lrr          dw      0000H               ;3rd param: lower right row
cb_ulc          dw      0000H               ;2nd param: upper left column
cb_ulr          dw      0000H               ;1st param: upper left row
                endstruc

;==================================
; Entry Point
;
; Jump table to various procedures
;==================================
            org  0
enterstr    jmp  zapstr      ;print a string
enterclreol jmp  zapclreol   ;clear to the end of line
enterclrbox jmp  zapclrbox   ;clear out a defined area

;=======================================================================
; procedure ZapStr(var Str: AnyString; Row, Column, Attribute, Video: byte);
;
; Outputs a string at the specified screen location, using the given attribute.
;
; The output method depends on the value of parameter VIDEO:
;
;    0 = direct write to hardware, no delay
;    1 = direct write to hardware, but only during screen retrace
;    2 = write via BIOS
;========================================================================
zapstr          proc    near

                push    bp                   ;establish stack
                mov     bp, sp               ;  addressability
                push    ds                   ;save state
                push    es                   ; ditto

                lds     si, str_str_offs[bp] ;set up to access string
                xor     ch, ch               ;CX <== length of string
                mov     cl, [si]             ; ditto
                cmp     cl, 0                ;any characters to write?
                je      str_exit             ;exit if not
                inc     si                   ;SI <== pointer to first char

                mov     dl, str_video[bp]    ;which video method?
                cmp     dl, 2                ; -BIOS calls?
                jl      str_direct           ; if not use direct write
                call    str_bios             ; if so, use bios calls
                jmps    str_exit             ; and exit
                ;=====================================
                ; Set up for both direct write flavors
                ; After this fragment, the following
                ; register assignments hold:
                ;
                ;   ES:DI  pointer into video buffer
                ;   DS:SI  pointer to 1st string character
                ;   CX: length of string
                ;   AH: video attribute byte
                ;   DL: video output method
                ;=====================================
str_direct      xor     ah, ah               ;AX <== column number
                mov     al, str_col[bp]      ;get column
                xor     bh, bh               ;BX <== row number
                mov     bl, str_row[bp]      ;get row
                call    calc_offset          ;DI <== offset into buffer
                call    set_video_seg        ;set up ES to access video buffer
                mov     ah, str_attrib[bp]   ;AH <== video attribute
                jc      str_use_dw           ;monochrome always direct write
                rcr     dl                   ;retrace only mode?
                jc      str_use_dwr          ;yes
str_use_dw      call    str_dw               ;else use direct write
                jmps    str_exit             ;and done
str_use_dwr     call    str_dwr              ;use direct write/retrace
                                             ;fall through to exit

str_exit        pop     es                   ;restore state
                pop     ds                   ; ditto
                pop     bp                   ; ditto
                ret     12                   ;clear params and return
                endp                         ;zapstr
;=================================================
; STR_BIOS
;
; Write string to the screen using BIOS calls.
; Slow as a dog, but safe.
;
; Assumptions:
;
;    DS:SI         pointer to string
;    CX            length of string
;==================================================
str_bios        proc     near
                mov     di, cx               ;DI <== string length

                mov     ah, 03               ;get current cursor position
                mov     bh, 0                ;active page number
                int     10H                  ;call BIOS
                push    dx                   ;save cursor position for restore

                mov     dl, str_col[bp]      ;get column
                dec     dl                   ;correct for 0,0 origin
                mov     dh, str_row[bp]      ;get row
                dec     dh                   ;correct for 0,0 origin
                mov     bl, str_attrib[bp]   ;get attribute byte

                mov     cx, 1                ;write only one char per call
                mov     bh, 0                ;work on page 0
str_bios_loop   mov     ah, 2                ;set cursor position
                int     10H                  ;with BIOS call

                lodsb                        ;AH <== next character
                mov     ah, 9                ;write char/attrib
                int     10H                  ;with BIOS call

                inc     dl                   ;bump current column
                dec     di                   ;used up one char
                jnz     str_bios_loop        ;loop til out of chars

                pop     dx                   ;restore cursor
                mov     ah, 2                ;  ditto
                int     10H                  ;  ditto
                ret                          ;and return
                endp

;====================================================
; Str_DW
;
; Full speed direct write of string to video buffer.
;
; Assumptions:
;
;   DS:SI points to first character of string
;   ES:DI points to desired location in video buffer
;   CX    has length of string
;   AH    has desired video attribute byte
;
; Note that we read char *bytes* from the string,
; but write char/attrib *words* to buffer.
;====================================================
str_dw          proc    near
                cld                          ;8088 --> autoincrement mode
str_dw_loop     lodsb                        ;get a char from string
                stosw                        ;put char and attrib in buffer
                loop    str_dw_loop          ;continue till done
                ret                          ;done, so exit
                endp
;====================================================
; Str_DWR
;
; String direct write during retrace.
;
; Assumptions:
;
;   DS:SI points to first character of string
;   ES:DI points to desired location in video buffer
;   CX    has length of string
;   AH    has desired video attribute byte
;=====================================================
str_dwr         proc    near
                                             ;preload stuff for fast action
                mov     bh, 9                ;mask to detect both retraces
                mov     dx, crt_status       ;pointer to crt controller chip

                cld                          ;8088 --> autoincrement mode
str_stall       in      al, dx               ;throw away any current horiz.
                rcr     al                   ;retrace so we catch the next
                jc      str_stall            ;*full* one.  This one may be
                                             ;half over already.

                lodsb                        ;get the next char
                mov     bl, al               ;save it, we need AL
                cli                          ;we're busy, let the phone ring
str_wait        in      al, dx               ;watch for retrace
                and     al, bh               ;either horiz or vert
                jz      str_wait             ;not yet? loop

                mov     al, bl               ;recover char
                stosw                        ;stuff it into the buffer
                sti                          ;answer the phone
                loop    str_stall            ;loop til done
                ret
                endp

;============================================
; ZapClrEOL
;
; Starting from the indicated row and column,
; clear to the end of the line.
;============================================
zapclreol       proc    near
                push    bp                   ;establish stack
                mov     bp, sp               ;  addressability
                push    ds                   ;save state
                push    es                   ; ditto

                mov     dl, eol_video[bp]    ;which video method?
                cmp     dl, 2                ;bios call?
                jne     eol_direct           ;if not, use direct write
                call    eol_bios             ;otherwise use bios calls
                jmps    eol_exit

                ;======================================
                ; Set up for both direct write flavors
                ;======================================
eol_direct      mov     cx, 81               ;calculate bytes to clear
                mov     ax, eol_col[bp]      ;AX <== column
                mov     bx, eol_row[bp]      ;BX <== row
                sub     cx, ax               ;CX <== bytes to clear

                call    calc_offset          ;DI <== offset into buffer
                call    set_video_seg        ;set up ES to access video buffer
                mov     ah, eol_attrib[bp]   ;AH <== video attribute
                mov     al, ' '              ;fill with spaces
                jc      eol_use_dw           ;monochrome always direct write
                rcr     dl                   ;retrace only mode?
                jc      eol_use_dwr          ;yes
eol_use_dw      call    eol_dw               ;no, use direct write
                jmps    eol_exit             ;then exit
eol_use_dwr     call    eol_dwr              ;use write during retrace
                jmps    eol_exit             ;then exit

eol_exit        pop     es                   ;restore state
                pop     ds                   ; ditto
                pop     bp                   ; ditto
                ret     8                    ;clear params and return
                endp                         ;zapclreol

;===============================================
; Char_DW
;
; Direct write of character(s) to video buffer.
; Assumptions:
;
;    ES:DI   pointer into video buffer
;    AX      char/attribute
;    CX      repetition factor
;===============================================
eol_dw          proc    near
                cld                          ;8088 <== autoincrement mode
                rep                          ;do it
                stosw
                ret
                endp

;===============================================
; EOL_DWR
;
; Direct write of character(s) to video buffer,
; during retrace interval.
; Assumptions:
;
;    ES:DI   pointer into video buffer
;    AX      char/attribute
;    CX      repetition factor
;===============================================
eol_dwr         proc    near
                                             ;preload stuff for fast action
                mov     bl, al               ;save character
                mov     bh, 9                ;mask to detect both retraces
                mov     dx, crt_status       ;pointer to crt controller chip
                cld                          ;8088 --> autoincrement mode

eol_stall       in      al, dx               ;throw away any current horiz.
                rcr     al                   ;retrace so we catch the next
                jc      eol_stall            ;*full* one.  This one may be
                                             ;half over already.

                cli                          ;we're busy, let the phone ring
eol_wait        in      al, dx               ;watch for retrace
                and     al, bh               ;either horiz or vert
                jz      eol_wait             ;not yet? loop

                mov     al, bl               ;recover char
                stosw                        ;stuff it into the buffer
                sti                          ;answer the phone
                loop    eol_stall            ;loop til done
                ret
                endp

;=============================================
; EOL_BIOS
;
; Write character(s) to screen using BIOS call.
;=============================================
eol_bios        proc    near
                mov     ah,  03              ;current cursor position?
                mov     bh,  0               ;  on page 0
                int     10H                  ;  with BIOS call
                push    dx                   ;  save position on stack

                mov     cx, 81               ;calculate bytes to clear
                mov     dx, eol_col[bp]      ;AX <== column
                mov     ax, eol_row[bp]      ;DX <== row
                sub     cx, dx               ;CX <== bytes to clear

                mov     dh, al               ;DH,DL <== row, column
                dec     dh                   ;correct for 0,0 origin
                dec     dl                   ;  ditto

                mov     ah, 2                ;set cursor position
                mov     bh, 0                ;work on page 0
                int     10H

                mov     al, ' '              ;fill with space chars
                mov     bl,  eol_attrib[bp]  ;get video attribute for clear
                mov     ah, 9                ;call BIOS for write operation
                int     10H

                mov     ah, 02               ;restore cursor position
                mov     bh, 0                ;  ditto
                pop     dx                   ;  ditto
                int     10H                  ;  ditto

                ret                          ;and exit
                endp

;==============================================
; ZapClrBox
;
; Clears the specifed area of the video screen.
;==============================================
zapclrbox      proc    near
               push    bp                   ;establish stack
               mov     bp, sp               ;  addressability

               mov     ch, cb_ulr[bp]       ;define upper left corner
               dec     ch                   ;BIOS defines upper left 0,0
               mov     cl, cb_ulc[bp]       ;
               dec     cl
               mov     dh, cb_lrr[bp]       ;define lower right corner
               dec     dh
               mov     dl, cb_lrc[bp]       ;  ditto
               dec     dl
               mov     bh, cb_attrib[bp]    ;attribute to fill with
               mov     ax, 0600H            ;scroll entire window up

               int     10H                  ;call bios

               pop     bp                   ; ditto
               ret     10                   ;clear params and return
               endp                         ;zapclreol
;===========================================
; SET_VIDEO_SEG
;
; Points ES at the appropriate video buffer
; depending on which display adapter is installed.
; Returns with carry flag clear if color card,
; set for monochrome.
;===========================================
set_video_seg   proc    near                 ;points ES at video buffer
                push    ds                   ;set up to read equipment flag
                mov     ax, bios_data        ; ditto
                mov     ds, ax               ; ditto
                mov     ax, equip_flag       ;get flag
                and     ax, 30H              ;look at monitor bits only
                cmp     ax, 30H              ;is this the monochrome monitor?
                je      set_video_mono       ;yep, skip.
                mov     ax, color_seg        ;nope.  Use color segment
                mov     es, ax
                clc                          ;set carry to indicate color
                jmps    set_video_exit       ;and exit

set_video_mono  mov     ax, mono_seg         ;yep, use monochrome segment
                mov     es, ax
                stc                          ;set carry to indicate monochrome

set_video_exit  pop     ds
                ret
                endp

;========================================================
; CALC_OFFSET
;
; Input:  AX   screen column
;         BX   screen row
;
; Output: DI   offset into video buffer
;         AX   trash
;         BX   trash
;
; Shifts and adds are used in place of multiplication
; for optimum speed.  MUL requires a minimum of 74 clocks.
; The optimized "multiply by 160" sequence uses only 19 clocks.
;===============================================================
calc_offset     proc    near
                dec     bx                   ;rows past #1
                mov     di, bx               ;multiply row by 160
                shl     di                   ;times 2
                shl     di                   ;times 2 makes 4
                add     di, bx               ;1 more makes 5
                shl     di                   ;times 2 makes 10
                shl     di                   ;times 2 makes 20
                shl     di                   ;times 2 makes 40
                shl     di                   ;times 2 makes 80
                shl     di                   ;times 2 makes 160
                dec     ax                   ;columns past #1
                shl     ax                   ;column x 2 (2 bytes/char)
                add     di, ax               ;di now has offset in buffer
                ret                          ;return to caller
                endp
```
{% endraw %}

## FILE0010.TXT

{% raw %}
```
Disk No:   10                                                           
Disk Title: Chasm  (Cheap Assembler)                                    
PC-SIG Version: S4.8                                                    
                                                                        
Program Title: CHASM                                                    
Author Version: 4.14                                                    
Author Registration: $40.00                                             
Special Requirements: Two floppy drives.                                
                                                                        
CHASM (Cheap Assembler) is a prime weapon for programmers who want to   
learn to program in Assembly language.  The program comes with clearly- 
written documentation and has a tutorial built in for users lacking     
detailed experience with Assembly language.                             
                                                                        
CHASM is a compiler only and there is no editor included.  You use an   
ASCII word processor to create your source code file, then use CHASM to 
compile it.                                                             
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## VPRINT.ASM

{% raw %}
```
;=======================================================
; VPRINT version 5.00
;
; Printer redirection utility.
; Memory resident software to capture
; printer output and save to disk.
;
; Revision History:
;
; Version    Comments
; 1.00       Very primative DOS 1 version, to upgrade EasyWriter
; 2.00       Updated DOS 2 version, not released
; 2.01       Released as U/S
; 3.00       Add int 28H buffer dump, watch dos critical flag before writes.
; 3.01       Correct bug in dos critical byte handling
; 3.02       Add selective trapping of PrtSc operation
; 4.00       Add int 21H buffer dump & function 40H handler, variable buf size
; 5.00       Add emulation of async output COM1: and COM2:, kill risky mode
;============================================================================
; Copyright Information
;
; This program is copyright (c) 1986, 1987, 1988 by D. Whitman
; The source code is provided to registered users of the program
; for educational purposes, and to allow them to customize for
; their OWN use.  UNDER NO CIRCUMSTANCES MAY YOU FURTHER DISTRIBUTE
; THIS FILE, MODIFIED VERSIONS OF VPRINT, OR TRANSLATIONS INTO
; INTO OTHER LANGUAGES.
;============================================================================
; This source file is in CHASM assembler syntax.  It will NOT assemble under
; the Microsoft assembler without a lot a little syntax changes.  
;
; CHASM is product of Whitman Software.  An evaluation copy can
; be obtained by sending a disk and stamped return mailer to:
;
;  Whitman Software
;  P.O. Box 1157
;  North Wales, PA  19454
;
; A registered copy can be obtained by sending $40 to the above address.  
; Purchase orders are accepted from corporations and educational institutions.  
;=============================================================================
;
; References:
;
; The following articles provided insights into safely obtaining
; DOS services from within a TSR:
;
;   Dr. Dobb's Journal, Feb 87, p 103
;   Byte Magazine, Sept 86, p 399
;   PC Magazine, Apr 14, 1987, p 313
;
; (Thanks to Wayne B'Rells for pointing out these articles!)
;=============================================================================

;==============
; Equates
;==============
cr              equ 0DH          ;carrage return character
lf              equ 0AH          ;line feed character
true            equ 0FFH         ;boolean "TRUE"
false           equ 00H          ;boolean "FALSE"
stdin           equ 0000H        ;standard input handle
stdout          equ 0001H        ;standard output handle
off_line        equ 0C8H         ;bad printer status value (=printer turned off)
clear2send      equ 0010H        ;aux port ready for output
not_clear       equ 8000H        ;aux port has timed out
ready           equ 90H          ;good printer status value

param_count     equ [80H]        ;# of param chars in command line
param_area      equ [81H]        ;text of DOS command line
environ_ptr     equ [2CH]        ;pointer to our copy of environment

@prnstr         equ 09H          ;DOS print screen function
@create         equ 3CH          ;DOS create file function
@open           equ 3DH          ;DOS open file function
@write          equ 40H          ;DOS write block to file/device function
@close          equ 3EH          ;DOS close file function
@dosver         equ 30H          ;DOS get DOS version function
@alloc          equ 48H          ;DOS allocate memory block
@free           equ 49H          ;DOS free allocated memory
@setblock       equ 4AH          ;DOS modify allocated memory block


entry_point     jmp   main       ;jump over resident stuff when starting up

;===========================================================
; NEW_INT14
; This section of code traps interrupt 14H, BIOS RS232_IO.
; We test for whether we're enabled, and whether this is an
; output call for of our emulated aux ports.  If so, handle the
; call, otherwise pass it along to the original service routine.
;===========================================================
new_int14
                sti                          ;enable interupts
                push  ax                     ;save state
                push  bx                     ;  ditto
                push  dx                     ;  ditto
                push  ds                     ;  ditto
                push  es                     ;  ditto
                mov   bx, cs                 ;and establish addressability
                mov   ds, bx                 ;  ditto

                cmpb  enable_flag, true      ;are we enabled?
                jne   pass_14                ;if not, pass call down the pipe

                inc   dl                     ;convert printer code for AND
                test  dl, enabled_aux        ;request for one of ours?
                jz    pass_14                ;if not, pass call down the pipe

                cmp   ah, 02H                ;receive character request?
                je    pass_14                ;if so, pass along to BIOS

                cmp   ah, 01H                ;output char request?
                jne   ni14_status            ;if not, just return status
                call  output_char            ;else handle char output

ni14_short_status
                pop   es
                pop   ds
                pop   dx
                pop   bx
                pop   ax
                mov   ah, cs:aux_status
                iret

ni14_status
                pop   es
                pop   ds
                pop   dx
                pop   bx
                pop   ax
                mov   ax, cs:aux_status
                iret                         ;return to caller

pass_14         pop   es     ;restore state
                pop   ds
                pop   dx
                pop   bx
                pop   ax
                ;===================================================
                ;jump to the original vector.  Note CS: prefix,
                ;since we just lost our addressability by popping DS
                ;===================================================
                cli                          ;real INT turns off interupts
                jmpf  cs:old_int14           ;allow BIOS to do it

;===========================================================
; NEW_INT17
; This section of code traps interrupt 17H, BIOS PRINTER_IO.
; We test for whether we're enabled, and whether this is a
; one of our emulated printers.  If so, handle the call,
; otherwise pass it along to the original service routine.
;===========================================================
new_int17
                sti                  ;enable interupts
                push  ax             ;save state
                push  bx             ;  ditto
                push  dx             ;  ditto
                push  ds             ;  ditto
                push  es             ;  ditto
                mov   bx, cs         ;and establish addressability
                mov   ds, bx         ;  ditto

                cmpb  enable_flag, true      ;are we enabled?
                jne   pass_17                ;if not, pass call down the pipe

                cmpb  enabled_printers, 8    ;are we in PrtSc only mode?
                jne   r1                     ;skip if not
                les   bx, ps_status_ptr      ;else get pointer to PrtSc status
                testb es:[bx], 0FFH          ;is PrtSc active?
                jz    pass_17                ;if not, pass call down the pipe
                jmps  r2                     ;otherwise, handle print request

r1              inc   dl                     ;convert printer code for AND
                test  dl, enabled_printers   ;request for one of ours?
                jz    pass_17                ;if not, pass call down the pipe

                or    ah, ah                 ;request to print?
                jnz   return_status          ;if not, either init or status
r2              call  output_char            ;else handle char output

return_status
                pop   es
                pop   ds
                pop   dx
                pop   bx
                pop   ax
                mov   ah, cs:prn_status
                iret                         ;return to caller

pass_17         pop   es     ;restore state
                pop   ds
                pop   dx
                pop   bx
                pop   ax
                ;============================================
                ;Fake an interupt instruction and jump to the
                ;original vector.  Note CS: prefix, since we
                ;just lost our addressability by popping DS
                ;============================================
                cli                           ;real INT turns off interupts
                jmpf  cs:old_int17            ;allow BIOS to do it

;========================================================
; NEW_INT21
;
; This section of code intercepts interupt 21H, the DOS function
; dispatcher.  We do this for two reasons:
;
;     1. It gives us a chance to empty our buffer every time
;        an application makes a DOS call, at a time when DOS
;        *has* to be idle.  (It's idle, because it hasn't
;        received the application's call yet - sneaky, eh?)
;        Note that to be strictly safe, we still check the
;        DOS_CRITICAL byte to rule out the situation where
;        DOS is calling itself.
;
;     2. We can trap function 40H and do it ourselves.  A debug
;        session revealed that DOS goes critical during function 40H
;        processing.  If the application requests output of a block
;        larger than our buffer size, with DOS critical the whole time,
;        our buffer will overflow.  If function 40H gets called with
;        a handle we're emulating, we'll do it ourselves, and INT 17H
;        can dump the buffer since DOS isn't critical yet.
;
; This allows us to support essentially all software.  The only
; hitch is if a program opens the printer or COM port as if it
; was a file, we won't be able to recognise the generated handle.
; As long as applications either use the pre-defined handles, or
; only write blocks smaller than our buffer, we're OK.
;============================================================
new_int21       proc  far
                pushf                      ;save caller's flags
                sti                        ;allow interupts
                cmpb  cs:need_dump, true   ;do we need a buffer dump?
                jne   test_function        ;no, skip
                                           ;try to dump the buffer
                push  es                   ;else get DOS critical byte
                push  bx
                les   bx, cs:dos_c_ptr     ;get pointer to dos critical byte
                cmpb  es:[bx], 01H         ;is dos critical?
                pop   bx
                pop   es
                jge   test_function        ;abort if so
                call  dump_buffer

test_function   cmp   ah, @write           ;is this a write block call?
                jne   ni21_pass            ;nope, pass along
                cmpb  cs:enable_flag, true     ;are we enabled?
                jne   ni21_pass            ;if not, pass along
;=============================================================
; Cut ourselves some extra insurance here.  If the requested
; block is bigger than the available room in our buffer, force
; a buffer flush, whether we recognize the handle or not.  
; This maximizes the probability we can take care of output
; when the user has opened his device as if it was a file.  
;=============================================================
                cmpw  cs:numchars, 0000H   ;anything at all in buffer?
                je    test_handles         ;skip if nothing there
                push  di
                mov   di, cs:buf_size      ;calculate room left in buffer
                sub   di, cs:numchars
                cmp   di, cx               ;is there enough room for this call?
                pop   di
                jae   test_handles         ;skip if enough room
                movb  need_dump, true      ;assert need_dump, in case we can't
                push  es                   ;else try to flush the buffer
                push  bx
                les   bx, cs:dos_c_ptr     ;get pointer to dos critical byte
                cmpb  es:[bx], 01H         ;is dos critical?
                pop   bx
                pop   es
                jge   test_handles         ;abort if so
                call  dump_buffer

;=======================================================
; Now check for the handles we're specifically emulating
;=======================================================
test_handles    cmp   bx, 4                ;check for std printer handle
                jne   ni21_aux             ;no, check for aux
                testb cs:enabled_printers, 1  ;are we emulating the std printer?
                jz    ni21_pass            ;if not, pass along
                call  handle_40_prn        ;else do the function 40 ourselves
                jmps  ni21_exit

ni21_aux        cmp   bx, 3                ;check for std aux handle
                jne   ni21_pass            ;pass on if not
                testb cs:enabled_aux, 1    ;are we emulating the std aux device?
                jz    ni21_pass            ;if not, pass along
                call  handle_40_aux        ;else do the function 40 ourselves
                jmps  ni21_exit

;==========================================================
; DOS returns from interupts in a strange way, not via IRET
; We need to return the callers original flags, but with
; the carry flag cleared (it's set if DOS had an error).  
; We do this by popping our saved user flags, clearing the
; carry bit, and doing a RET 2 to discard the flag set
; pushed by the original INT 21H instruction.  
;===========================================================
ni21_exit       popf                       ;restore saved user flags
                clc                        ;indicate no errors
                ret   2                    ;simulate DOS's return
ni21_pass
                popf                       ;restore saved user flags
                cli                        ;real INT turns off interupts
                jmpf cs:old_int21          ;and pass call to DOS
                endp

;======================================================
; NEW_INT28
;
; This section of code intercepts interrupt 28H.
; This is an undocumented DOS interrupt, which DOS
; seems to call periodically during idle periods.
; The DOS external command PRINT works by intercepting
; int 28H.   If our buffer is more than half full
; during an int 28H call, try to empty it to disk.
;
; Intercepting int 28H allows us to empty the buffer
; under conditions where the DOS critical byte is set
; during calls to VPRINT's BIOS interupts.
;
; According to the PC magazine article referenced in the
; prolog, it's safe to call DOS during int 28H processing,
; AS LONG AS WE ONLY USE DOS FUNCTIONS HIGHER THAN 0CH.
; Using the lower functions will clobber one of DOS's
; internal stacks.  Since we only use high functions,
; we don't need to check the DOS critical byte before
; requesting services.
;========================================================
new_int28
                sti                      ;be polite, answer the phone
                push ax
                push bx
                push ds

                mov  ax, cs              ;establish local addressability
                mov  ds, ax

                mov  ax, numchars        ;how many chars in our buffer?
                cmp  ax, trigger         ;are we above the trigger amount?
                jb   idle_exit           ;abort if below

                call  dump_buffer

idle_exit       pop  ds
                pop  bx
                pop  ax
                cli
                jmpf cs:old_int28        ;now service original int 28 routine.         

;===================================================
; HANDLE_40_PRN
;
; This routine emulates a DOS "write block" function
; to the standard printer device.  We send the block
; one character at a time to our int 17H handler.
;
; By emulating this function, we prevent DOS from
; going critical during the int 17H calls, so
; they can safely empty our buffer as needed.
;===================================================
handle_40_prn   proc near
                jcxz h4p_exit               ;if nothing to write, abort

                push si                     ;else save state and do it
                push cx
                push dx

                cld                         ;8088 <-- autoincrement mode
                mov  si, dx                 ;ds:si <-- pointer to string
                xor  dx, dx                 ;handle 4 is printer id = 0

h4p_loop        lodsb                       ;get a char
                xor  ah, ah                 ;print char function
                int  17H                    ;call our routine
                loop h4p_loop               ;loop til CX = 0

                pop dx                      ;restore regs
                pop cx
                pop si

h4p_exit        mov ax, cx                  ;tell caller we wrote all his chars
                ret
                endp

;===================================================
; HANDLE_40_AUX
;
; This routine emulates a DOS "write block" function
; to the standard auxiliary device.  Implementation
; and rationale are analogous to HANDLE_40_PRN.
;===================================================
handle_40_aux   proc near
                jcxz h4a_exit               ;if nothing to write, abort

                push si                     ;else save state and do it
                push cx
                push dx

                cld                         ;8088 <-- autoincrement mode
                mov  si, dx                 ;ds:si <-- pointer to string
                xor  dx, dx                 ;handle 3 is async id = 0

h4a_loop        lodsb                       ;get a char
                mov  ah, 01H                ;print char function
                int  14H                    ;call our routine
                loop h4a_loop               ;loop til CX = 0

                pop dx                      ;restore regs
                pop cx
                pop si

h4a_exit        mov ax, cx                  ;tell caller we wrote all his chars
                ret
                endp

;=================================================
; OUTPUT_CHAR
;
; We implement 3 printing modes: verbatim, and 2
; "trapping" modes to force proper CR/LF terminated
; lines, since some programs don't bother to send
; both CR and LF to a printer.  This routine
; handles the various trapping modes, and then
; calls PRINT_CHAR for the actual output.
;=================================================
output_char     proc  near
                push  ax
                push  bx
                push  ds
                mov   bx, cs                 ;establish local addressability
                mov   ds, bx

                cmpb  trap_char, lf          ;are we in trap linefeed mode?
                jne   try_cr                 ;nope, skip
                cmp   al, lf                 ;is this a line feed?
                je    oc_exit                ;exit if so
                call  print_char             ;otherwise print it
                cmp   al, cr                 ;was that a carriage return?
                jne   oc_exit                ;nope, we're done
                mov   al, lf                 ;if so, add line feed
                call  print_char
                jmps  oc_exit                ;and exit

try_cr          cmpb  trap_char, cr          ;trap carrage return mode?
                jne   no_traps               ;nope, skip
                cmp   al, cr                 ;is this a CR?
                je    oc_exit                ;exit if so
                cmp   al, lf                 ;line feed?
                jne   no_traps               ;nope, skip
                mov   al, cr                 ;yes, send CR first
                call  print_char
                mov   al, lf                 ;& THEN send line feed

no_traps        call  print_char

oc_exit         pop   ds
                pop   bx
                pop   ax
                ret
                endp

;============================================
; PRINT_CHAR
;
; Add the character in AL to the buffer.
; If the buffer is full enough, dump it to disk.
;============================================
print_char      proc  near
                push  ax
                push  bx
                push  di
                push  ds
                push  es

                mov   bx, cs                 ;establish local addressability
                mov   ds, bx

                mov   di, numchars           ;position in buffer for char
                cmp   di, buf_size           ;is buffer overflowing?
                jae   pc_0                   ;drop char & try to dump buffer
                mov   bx, buffer_seg         ;else char to buffer
                mov   es, bx                 ;    establish addr. of buffer
                mov   es:[di], al            ; and move char into buffer

                inc   di                     ;bump number of characters
                mov   numchars, di           ;and save
                cmp   di, trigger            ;is buffer full enough to dump?
                jb    pc_exit                ;if not, return

;===============================================================
; If we call for DOS services when DOS is in a re-entrant condition,
; we can mung up the system by trashing one of DOS's internal stacks.
; We can tell if it's safe by examining the DOS_CRITICAL byte,
; an undocumented flag maintained by DOS.  If this byte is zero,
; it is safe to call DOS for i/o.
;=================================================================
; During installation, we determined the location of this byte by
; using undocumented DOS function 34H.  Function 34H returns a
; pointer to DOS_CRITICAL in ES:BX.  Note that we *had* to do this
; during installation, since if DOS is critical now, we're in a
; catch-22 situation, where we could crash the system by calling
; DOS for the pointer.  Fortunately, the byte doesn't seem to move.
;=================================================================
pc_0            les   bx, dos_c_ptr          ;get pointer to DOS_CRITICAL
                cmpb  es:[bx], 01H           ;is dos critical?
                jge   pc_fail                ;abort if so

pc_1            call  dump_buffer
                jnc   pc_exit                ;if successful, exit

pc_fail         movb  need_dump, true        ;couldn't empty, so set flag
                mov   ax, numchars
                cmp   ax, buf_size           ;is the buffer completely full?
                jb    pc_exit                ;if not, hope we can dump later
                movb  prn_status, off_line   ;else send bad status to caller
                movw  aux_status, not_clear  ;ditto
pc_exit
                pop   es
                pop   ds
                pop   di
                pop   bx
                pop   ax
                ret
                endp

;======================================================
; DUMP_BUFFER
;
; Attempts to dump the print buffer to disk.
; Clears carry flag if sucessful, sets it if not.
;
; No safety checking is performed.  DUMP_BUFFER
; should only be called if the caller knows it's
; safe to call DOS for services.
;
; We don't use any of the old DOS 1.x  "traditional
; character device" calls, so it should be safe to call
; DUMP_BUFFER from an INT 28H handler, regardless of the
; state of DOS_CRITICAL.
;
; Preserves all registers.
;=======================================================
dump_buffer     proc  near
                movb  cs:need_dump, false    ;don't let other routines call again

                push  ax                     ;save state
                push  bx
                push  cx
                push  dx
                push  ds

                mov   ax, cs                 ;establish addressability
                mov   ds, ax                 ;  ditto

                mov   dx, offset(filename)   ;point to filename
                mov   ax, 3D01H              ;open file for write
                call  real_DOS               ;skip our int 21H trap routine
                jnc   db_cont                ;continue if ok

;===================================================================
; if we can't find our file, maybe the user changed the disk on us.
; Try making a new file.
;===================================================================
                mov   ah, @create
                xor   cx, cx                 ;normal file attribute
                mov   dx, offset(filename)
                call  real_DOS               ;skip our int 21H trap routine
                jnc   db_fail

db_cont         mov   bx, ax                 ;get handle from last call
                mov   ax, 4202H              ;seek EOF
                xor   cx, cx
                xor   dx, dx
                call  real_DOS               ;skip our int 21H trap routine

                push  ds                     ;establish addr. of buffer
                mov   ax, buffer_seg         ;ditto
                mov   ds, ax                 ;ditto
                mov   ah, @write             ;request file write
                mov   cx, cs:numchars        ;number of bytes in buffer
                xor   dx, dx                 ;from offset 0 in buffer
                call  real_DOS               ;skip our int 21H trap routine
                pop   ds                     ;reestablish local addressability

                mov   ah, @close             ;close file
                call  real_DOS               ;skip our int 21H trap routine

;=================
; Exit Sucessfully
;=================
                movw  numchars, 0000H        ;buffer is now empty
                movb  prn_status, ready      ;send normal status back to caller
                movw  aux_status, clear2send ;ditto
                pop   ds
                pop   dx
                pop   cx
                pop   bx
                pop   ax
                clc                          ;indicate sucess
                ret
;==============
; Failure Exit
;==============
db_fail         movb  need_dump, true            ;still need to dump buffer
                movb  prn_status, off_line       ;send bad status to caller
                movw  aux_status, not_clear
                pop   ds
                pop   dx
                pop   cx
                pop   bx
                pop   ax
                stc                          ;indicate failure
                ret
                endp


;======================================================
; REAL_DOS
;
; This allows our resident routines to make calls directly
; to DOS, skipping our int 21H handler, and avoiding
; some pathological cases of infinite recursion.
;======================================================
real_dos        proc near
                pushf                      ;real INT pushes flags
                cli                        ;real INT turns off interupts
                callf cs:old_int21
                sti                        ;re-enable interupts
                ret
                endp

               list                        ;$$$
;=======================
; Resident data section
;=======================
verify          db 'VPRINT 5.00'     ;recognition string
verify_end

old_int14        dw 0000H, 0000H     ;original async handler vector
old_int17        dw 0000H, 0000H     ;original printer handler vector
old_int21        dw 0000H, 0000H     ;original dos function vector
old_int28        dw 0000H, 0000H     ;original dos idle handler vector
dos_c_ptr        dw 0000H, 0000H     ;pointer to dos critical byte
ps_status_ptr    dw 0000H, 0050H     ;pointer to print screen status byte
need_dump        db false            ;boolean flag - does buffer want dumping?
enable_flag      db true             ;boolean flag - are we active?
enabled_printers db 03H              ;which printer(s) are we emulating?
enabled_aux      db 00H              ;which aux port(s) are we emulating?
trap_char        db 00H              ;character to trap (none, cr, or lf)
numchars         dw 0000H            ;number of chars now in buffer
prn_status       db ready            ;printer status to send to caller
aux_status       dw clear2send       ;aux status: assert clear to send
filename         ds 73               ;length, 63 byte path, filename.ext 00
buffer_seg       dw 0000H            ;segment pointer for buffer
buf_size         dw 0800H            ;size of buffer
trigger          dw 0400H            ;if this many chars in buffer, try to dump
end_resident                         ;end of resident code and data
                                     ;buffer segment follows this point

               nolist                        ;$$$
;================================
; Beginning of non-resident code
;================================

main            proc  near
                call  check_dos
                call  uc_command_line
                call  parse_options
                cmpb  param_found, true
                jne   exit_with_help

                ;print title message
                mov   ah, @write
                mov   bx, stdout
                mov   cx, short_end-short_hello
                mov   dx, offset(short_hello)
                int   21H

                call  check_install
                cmpb  install_request, true
                jne   m1
                jmp   install_code     ;program terminates in this routine
m1              call  update_res
                int   20H              ;program halts here
;======================================================
; If no valid options were given, print a help screen,
; and exit without doing anything else.
;======================================================
exit_with_help  mov   ah, @write       ;print help message
                mov   bx, stdout       ;on standard output
                mov   cx, h_end-hello
                mov   dx, offset(hello)
                int   21H
                mov   ax,4C00H         ;exit with ERRORLEVEL 0
                int   21H
                endp

;=================================================
; CHECK_DOS
; Confirms that we're running under DOS 2 or later.
; Aborts program with error message if not.
;=================================================
check_dos       proc  near
                mov   ah, @dosver      ;get DOS version
                int   21H
                cmp   al, 2            ;DOS 2 or later?
                jge   cd_exit          ;yes, skip
                mov   ah, @prnstr      ;no, bitch
                mov   dx, offset(baddos)
                int   21H
                int   20H              ;and exit
cd_exit         ret
                endp

;==============================================
; UC_COMMAND_LINE
; Converts the command line to all upper case.
;==============================================
uc_command_line proc  near
                push  si
                push  di
                mov   cl, param_count         ;length of command line
                xor   ch, ch                  ;  "    "     "      "
                jcxz  uc_exit                 ;abort if nothing to process
                mov   si, offset(param_area)  ;pointers to command line
                mov   di, si                  ;   "      "    "      "
uc_1            lodsb
                cmp   al, 'a'     ;too low?
                jl    uc_2        ;skip char if so
                cmp   al, 'z'     ;too high?
                jg    uc_2        ;skip char if so
                and   al, 0DFH    ;otherwise force upper case
uc_2            stosb
                loop  uc_1

uc_exit         pop   di
                pop   si
                ret
                endp

;==================================================
; PARSE_OPTIONS
; Parse the command line, and set flags accordingly
;==================================================
parse_options   proc  near
                xor   ch, ch           ;CX <== # of parameter chars
                mov   cl, param_count  ;ditto
                mov   di, offset(param_area)
                mov   al, ' '          ;search for 1st non-blank
                cld
                rep
                scasb
                jcxz  po_exit_1        ;no parameters? just print hello screen
                jmps  po_cont_1        ;otherwise continue
po_exit_1       jmp   po_exit          ;need long jump, hence convolutions

po_cont_1       dec   di               ;back up to char found
                inc   cx               ;  ditto

                cmpb  [di], '?'        ;help request?
                je    po_exit_1        ;exit by printing help

                call  get_filename     ;read user's or use default
                jcxz  po_exit_1        ;out of param chars?

po1             mov   al, '/'          ;nope, scan for options
                cld
                repne
                scasb
                jcxz  po1a
                jmps  po2              ;found, continue
po1a            jmp   po_exit          ;none found, skip

po2             mov   al, [di]         ;get option char

                cmp   al, 'I'          ;install request?
                jne   po3              ;nope, skip
                movb  install_request, true
                movb  param_found,true
                jmps  po1              ;and loop

po3             cmp   al, 'P'          ;printer number request?
                jne   po5              ;nope, skip
                movb  set_printers, true
                movb  param_found, true
                inc   di               ;get next char
                dec   cx
                mov   al, [di]
                cmp   al, 'P'          ;just PrtSc?
                jne   po3a
                movb  enabled_printers, 8
                jmps  po1
po3a            cmp   al, '0'          ;no LPT output?
                jne   po3b
                movb  enabled_printers, 0
                jmps  po1
po3b            cmp   al, '1'          ;LPT1: request
                jne   po3c
                movb  enabled_printers, 1
                jmps  po1
po3c            cmp   al, '2'          ;LPT2 request?
                jne   po3d
                movb  enabled_printers, 2
                jmps  po1
po3d            cmp   al, '3'          ;both ports request?
                jne   po4              ;nope, skip
                movb  enabled_printers, 3
po4             jmps  po1

po5             cmp   al, 'A'          ;COM port number request?
                jne   po6              ;nope, skip
                movb  set_aux, true
                movb  param_found, true
                inc   di               ;get next char
                dec   cx
                mov   al, [di]
                cmp   al, '0'          ;no COM output
                jne   po5a
                movb  enabled_aux, 0
                jmp   po1
po5a            cmp   al, '1'          ;COM1: request
                jne   po5b
                movb  enabled_aux, 1
                jmp   po1
po5b            cmp   al, '2'          ;COM2 request?
                jne   po5c
                movb  enabled_aux, 2
                jmp   po1
po5c            cmp   al, '3'          ;both ports request?
                jne   po5d             ;nope, skip
                movb  enabled_aux, 3
po5d            jmp   po1

po6             cmp   al, 'S'          ;status request?
                jne   po7              ;nope, skip
                movb  status_request, true
                movb  param_found, true
                jmp   po1

po7             cmp   al, 'E'          ;enable request?
                jne   po8              ;nope, skip
                movb  enable_flag, true
                movb  set_enable_state, true
                movb  param_found,true
                jmp   po1

po8             cmp   al, 'D'          ;disable request?
                jne   po9              ;nope, skip
                movb  enable_flag, false
                movb  set_enable_state, true
                movb  param_found,true
                jmp   po1

po9             cmp   al, 'N'          ;neutral request?
                jne   po10             ;nope, skip
                movb  trap_char, 00H
                movb  set_trap_mode, true
                movb  param_found,true
                jmp   po1

po10            cmp   al, 'C'          ;trap CR request?
                jne   po11             ;nope, skip
                movb  trap_char, cr
                movb  set_trap_mode, true
                movb  param_found,true
                jmp   po1

po11            cmp   al, 'L'          ;trap LF request?
                jne   po12             ;nope, skip
                movb  trap_char, lf
                movb  set_trap_mode, true
                movb  param_found,true
                jmp   po1

po12            cmp   al, 'F'          ;flush buffer request?
                jne   po14             ;nope, skip
                movb  flush_request, true
                movb  param_found, true
po13            jmp   po1

;=============================================
; Note below that we don't set the normal two flags,
; since /B is only valid during installation.                                    
;=============================================
po14            cmp   al, 'B'          ;set buffer size request?
                jne   po15
                xor   ax, ax           ;clear running total
                mov   dl, 10           ;frequently used constant
po14a           cmpb  1[di], '0'       ;next char valid digit?
                jb    po14b            ;done if not
                cmpb  1[di], '9'
                ja    po14b
                mul   dl               ;multiply by 10 for next digit
                inc   di               ;point to next digit
                dec   cx               ;used up a char
                mov   bl, [di]         ;get the next digit
                sub   bl, '0'          ;convert from ASCII to binary
                xor   bh, bh           ;and add to running total
                add   ax, bx
                jmps  po14a
;===================================
; We now have the buffer size in K.                                              
; Validate, and convert to bytes for internal use.                              
;===================================
po14b           cmp   ax, 1            ;force outliers to min or max value
                jge   po14c
                mov   ax, 1
po14c           cmp   ax, 64
                jle   po14d
                mov   ax, 64
                                       ;convert to bytes
po14d           push  cx               ;save number of param chars left
                mov   cl, 9            ;multiply by 2^9 for trigger amount
                shl   ax, cl           ;(trigger is buf_size/2)
                mov   trigger, ax      ;save trigger amount
                shl   ax               ;multiply by 2 for buf_size
                cmp   ax, 0000H        ;handle conversion overflow
                jne   po14e            ;skip if ok
                mov   ax, 0FFFFH       ;otherwise use MaxInt
po14e           mov   cs:buf_size, ax  ;save buf_size
                pop   cx               ;restore number of param chars left

po15            jmp   po1

po_exit         ret
                endp

;==============================================================
; CHECK_INSTALL
; Checks to see if a copy of VPRINT is already resident.
; Sets the flag INSTALLED accordingly.  ES is set to the segment
; of the current printer support routine, and the current
; printer support vector is saved for possible re-use.
;==============================================================
check_install   proc  near

                ;save the current bios printer vector
                mov   ax, 3517H           ;get vector 17 (printer_io)
                int   21H
                mov   old_int17, bx       ;and save it
                mov   old_int17+2, es

;======================================================
; ES now points to the current routine's segment
; If the current routine is VPRINT already, variables in
; our segment are at same offsets as those in the resident
; routine.  The only difference is that DS points to our
; stuff, while ES points to the resident routine.
;========================================================
; Compare our verifier string with the same location
; in the current printer support routine.  If they match,
; a copy of us is already resident.
;========================================================
                mov   di, offset(verify)
                mov   si, di                   ;same offset in both segments
                mov   cx, verify_end-verify    ;length of verifier string
                cld
                repe
                cmpsb
                jcxz  ci_yes
                movb  installed, false    ;not matched, so not installed
                jmps  ci_exit
ci_yes          movb  installed, true     ;matched, so already installed
ci_exit         ret
                endp

;======================================================
; INSTALL_CODE
; If we're not already there, install resident code.
;======================================================
install_code    proc  near
                cmpb  installed, true     ;are we aleady installed?
                jne   ic_1                ;no, continue
                jmp   ic_res_error        ;yes, bitch (need long jump)

                ;create/open our file
ic_1            mov   ah, @create         ;create file
                xor   cx, cx              ;normal file attribute
                mov   dx, offset(filename)
                int   21H                 ;to make sure we can
                jnc   ic_2                ;if so, continue
                jmp   ic_open_error       ;else bitch (need long jump)

ic_2            mov   ah, @close          ;close it until we need it
                int   21H

                push  es                  ;summarize switch settings
                push  ds
                pop   es
                call  print_status
                pop   es

                ;print reassuring message
                mov   ah, @write
                mov   bx, stdout
                mov   cx, inst_end-inst_msg
                mov   dx, offset(inst_msg)
                int   21H

                ;grab the BIOS printer vector for our own use.
                ;(we already saved it's current value)
                mov   dx, offset(new_int17)
                mov   ax, 2517H
                int   21H

                ;save the current BIOS async vector
                mov   ax, 3514H            ;get vector 14H (rs232_io)
                int   21H
                mov   old_int14, bx        ;and save it
                mov   old_int14+2, es

                ;and grab it for our own use.
                mov   dx, offset(new_int14)
                mov   ax, 2514H
                int   21H

                ;save the current DOS function dispatcher vector
                mov   ax, 3521H             ;get vector 21H
                int   21H
                mov   old_int21, bx         ;and save it
                mov   old_int21+2, es

                ;and grab it for our own use.
                mov   dx, offset(new_int21)
                mov   ax, 2521H
                int   21H

                ;save the current dos idle vector
                mov   ax, 3528H             ;get vector 28H (dos idle)
                int   21H
                mov   old_int28, bx        ;and save it
                mov   old_int28+2, es

                ;and grab it for our own use.
                mov   dx, offset(new_int28)
                mov   ax, 2528H
                int   21H

                ;get and save pointer to dos critical byte
                mov   ah, 34H
                int   21H
                mov   dos_c_ptr, bx
                mov   dos_c_ptr+2, es

;=========================================================================
;Set up our buffer
;
;I can't seem to find an elegant way to tell how much memory
;is available outside our segment.  Instead of knowing how much is available
;and just grabbing it off when we return via int 31H, we'll be polite and
;let DOS handle memory allocation for us.  To start with, we de-allocate
;all un-needed memory; we're given everything on entry.  We then
;request a new segment for our buffer.  We have to check after return
;whether we were able to get all that we asked for, and if not, bitch
;to user and abort.
;=========================================================================
                ;===========================
                ; Deallocate our environment
                ;===========================
                mov   ax, environ_ptr       ;get pointer to environment block
                mov   es, ax
                mov   ah, @free             ;free block
                int   21H
                ;=================================================
                ;Figure out where we actually end,
                ;and shrink our block to its miminum size.  
                ;Adding 15 guarantees we don't lop off anything
                ;when we convert to paragraphs via the divide by 16
                ;=================================================
                mov   ax, cs               ;point to our segment
                mov   es, ax
                mov   bx, offset((end_nonres+15)/16)  ;minimum size, paragraphs
                mov   ah, @setblock        ;set block size
                int   21H
                ;=======================
                ;Now allocate the buffer
                ;=======================
                mov   bx, buf_size         ;buffer size in bytes
                mov   cl, 4                ;divide by 16 for paragraphs
                shr   bx, cl
                inc   bx                   ;takes care of anything lopped off
                mov   ah, @alloc           ;allocate block
                int   21H
                jc    ic_mem_error         ;fatal error if not enough memory
                mov   buffer_seg, ax       ;save pointer to new segment
;======================================================================
;Terminate and Stay Resident
;The DOS 2 TSR call asks for the number of PARAGRAPHs of memory we want.
;Paragraphs are 16 byte chunks, hence we divide the number of bytes by 16.
;We reserve memory here for our code and various small local variables.  
;Our main buffer was reserved above by a DOS memory allocation call.            
;======================================================================
;Usage note: Large amounts of memory are given in paragraphs because
;this is the smallest unit in which the total possible memory of the 8088
;can be specified in a word: FFFF paragraphs = 1 megabyte
;======================================================================
                mov   ax, 3100H                       ;TSR w/ ERRORLEVEL = 0
                mov   dx, offset((main+15)/16)  ;total paragraphs
                int   21H
;==============================
; program halts after TSR call.
;==============================

;==============================
; Fatal Error Messages
; Print message, then abort.
;==============================
ic_res_error    mov   cx, ic_res_end-ic_res_msg
                mov   dx, offset(ic_res_msg)
                jmps  fatal_error


ic_open_error   mov   cx, ic_open_end-ic_open_msg
                mov   dx, offset(ic_open_msg)
                jmps  fatal_error

ic_mem_error    mov   cx, ic_mem_end-ic_mem_msg
                mov   dx, offset(ic_mem_msg)
                jmps  fatal_error

fatal_error     mov   ah, @write          ;write error message
                mov   bx, stdout          ;on standard output
                int   21H
                mov   ax, 4CFFH           ;and exit w/ ERRORLEVEL = 255
                int   21H
                endp
;=======================================
; program halts upon exit w/ errorlevel
;=======================================

;===============================================
; GET_FILENAME
; Builds the proper d:\path\filename, from either
; the default or the user's specifications.
;===============================================
; Upon entry, ES:DI point to the first non-blank
; character on the command line, and CX has the
; number of characters left on the command line.
;===============================================
; Upon exit, FILENAME has an ASCIIZ string specifying
; the full filespec.  ES:DI have been moved on the command
; line past the filename, and CX has the (updated) number
; of command line characters left.
;===============================================
get_filename    proc  near
                cld                          ;8088 <== autoincrement mode
                push  ax
                push  bx
                push  cx
                push  dx
                push  di
                push  si
                mov   si, di
                mov   di, offset(filename)
;=====================================================
; DI now points to where we will build the filespec.
; SI points to the command line.
; Assumes ES and DS both point to our local segment
;=====================================================
                cmpb  [si], '/'              ;are we looking at an option?
                jne   gf_0                   ;no, skip
;===================================================
;if no filename was specified, use our default name
;on the current default drive.
;===================================================
use_default     mov   ah, 19H                ;get default drive
                int   21H
                add   al, 'A'                ;convert code to drive letter
                stosb                        ;move it to filespec
                mov   al, ':'                ;followed by a colon
                stosb
                mov   si, offset(default_file)
                push  cx
                mov   cx, default_end-default_file
                rep
                movsb
                pop   cx
                jmps  gf_exit

;==========================================================
; Build a complete filespec with info from the command line
;==========================================================
gf_0            movb  file_request, true     ;user specified a filename
                movb  param_found, true
                call  approve_file           ;make sure its an allowed name
                jnc   gf_0a                  ;ok? continue
                mov   ah, @write             ;illegal name? bitch and abort
                mov   bx, stdout
                mov   cx, illegal_end-illegal_msg
                mov   dx, offset(illegal_msg)
                int   21H
                int   20H

gf_0a           cmpb  1[si], ':'             ;was a drive specified?
                jne   gf_1                   ;no, skip
                mov   al, [si]               ;yes, get it
                movsw                        ;then copy into filespec
                sub   cx, 2                  ;used up two chars
                mov   dl, al                 ;will need drive later
                and   dl, 0DFH               ;force upper case
                sub   dl, 'A'-1              ;convert to drive code
                jmps  gf_2                   ;done

gf_1            mov   ah, 19H                ;otherwise get default drive
                int   21H
                add   al, 'A'                ;convert code to drive letter
                stosb                        ;move it to filespec
                mov   al, ':'                ;followed by a colon
                stosb
                sub   dl, dl                 ;use code 0 (default) in next call
;====================================================
; Filespec now has D:, and DL has drive code (A: = 1)
;====================================================
gf_2            cmpb  [si], '\'              ;was a path specified?
                je    gf_3                   ;skip if so
;=============================================
; if no path specified, use current directory
;=============================================
                mov   al, '\'                ;start with \
                stosb                        ;  ditto
                mov   ah, 47H                ;ask for current directory
                push  si                     ;need SI temporarily
                mov   si, di                 ;point to building filespec
                int   21H
                pop   si                     ;restore SI
                push  cx                     ;need CX temporarily
                mov   al, 00H                ;now search for end of path
                mov   cx, 64                 ;maximum path length
                repne                        ;will stop after terminator byte
                scasb                        ;  ditto
                dec   di                     ;now points to terminator byte
                cmpb  -1[di], '\'            ;do we need the final \?
                je    gf_2a                  ;no, skip
                mov   al, '\'                ;end with \
                stosb
gf_2a           pop   cx                     ;restore CX

;============================================
; Now copy the filename, up to the delimiter
;============================================
gf_3           jcxz  gf_exit
               lodsb                         ;get a byte
               cmp   al, '.'                 ;in valid range?
               jl    gf_exit                 ;too low?
               cmp   al, 'z'
               jg    gf_exit                 ;too high?
               stosb                         ;otherwise, add to filespec
               jmps  gf_3                    ;and loop for another

gf_exit        mov   al, 00H                 ;terminate filespec
               stosb
               pop   si                      ;and restore registers
               pop   di
               pop   dx
               pop   cx
               pop   bx
               pop   ax
               ret
               endp

;=========================================================
; APPROVE_FILE
; Checks to see if the user specified an illegal filename.
; If we allow devices LPT1: LPT2: or PRN, we could lock up
; the system.  The carry flag is set if the name is illegal.
;==========================================================
approve_file  proc near
              push es
              push ax
              push cx
              push di
              push si
              push bp
              mov  bp, sp

              mov  ax, ds         ;establish addressability
              mov  es, ax         ;of test strings

              mov  di, offset(lpt1_string)
              mov  cx, 5
              repe
              cmpsb
              jcxz disapprove
              mov  si, 2[bp]                ;restore si after last loop
              mov  di, offset(lpt2_string)
              mov  cx, 5
              repe
              cmpsb
              jcxz disapprove
              mov  si, 2[bp]                ;restore si after last loop
              mov  di, offset(prn_string)
              mov  cx, 3
              repe
              cmpsb
              jcxz disapprove
              clc                         ;no matches? file ok
              jmps ap_exit
disapprove    stc                         ;matched on, so bad name
ap_exit       pop  bp
              pop  si
              pop  di
              pop  cx
              pop  ax
              pop  es
              ret
              endp
;==========================================================
; UPDATE_RESIDENT
; Apply the specified options to the already resident code.
;
; ES contains the segment of the resident copy of us.
; Modify the resident copy's flags, etc, according
; to our parameters.
;==========================================================
update_res     proc  near
               cmpb  installed, true
               je    ur_cont
;====================================================
; We can't modify resident code if its not installed
;====================================================
not_inst_err   mov   dx, offset(not_inst_msg)
               mov   cx, not_inst_end-not_inst_msg
               mov   bx, stdout
               mov   ah, @write
               int   21H
               int   20H

;=====================================
; Request to change emulated printers?
;=====================================
ur_cont        cmpb set_printers, true
               jne  ur_2
               mov  al, enabled_printers
               mov  es:enabled_printers, al

;========================================
; Request to change emulated async ports?
;========================================
ur_2           cmpb set_aux, true
               jne  ur_3
               mov  al, enabled_aux
               mov  es:enabled_aux, al

;===========================================
; Request to change character trapping mode?
;===========================================
ur_3           cmpb set_trap_mode, true
               jne  ur_4
               mov  al, trap_char
               mov  es:trap_char, al

;=========================
; enable/disable request?
;=========================
ur_4           cmpb set_enable_state, true
               jne  ur_5
               mov  al, enable_flag
               mov  es:enable_flag, al
               cmp  al, false            ;did we just disable resident code?
               jne  ur_5                 ;skip if not
               call flush_resident       ;if so, flush resident buffer

;==================================
; Request to flush resident buffer?
;==================================
ur_5           cmpb flush_request, true
               jne  ur_6
               call flush_resident

;==========================
; Request to use new file?
;==========================
ur_6           cmpb file_request, true
               jne  ur_exit
               mov  ah, @create       ;confirm the file's there
               xor  cx, cx
               mov  dx, offset(filename)
               int  21H
               jc   ur_open_err

               ;close file for later use
               mov  bx, ax            ;get handle
               mov  ah, @close
               int  21H

ur_1a          call flush_resident    ;flush out buffer to old file

;===========================================
; copy the new filename to the resident code
;===========================================
               mov  si, offset(filename)
               mov  di, si
               lodsb                  ;get a character
ur_1           stosb                  ;transfer to resident copy
               or   al, al            ;was that the null terminator?
               jz   ur_exit           ;if so, exit
               lodsb                  ;otherwise, get another char
               jmps ur_1              ;and continue

;====================================
; Print post-processing status, exit
;====================================
ur_exit        call print_status
               ret

;=========================================
; error handler if unable to open new file
;=========================================

ur_open_err    call print_status
               mov  ah, @write        ;unable to open file, so bitch
               mov  bx, stdout
               mov  cx, ic_open_end-ic_open_msg
               mov  dx, offset(ic_open_msg)
               int  21H
               ret
               endp

;==============================================
; PRINT_STATUS
; print the current status of the resident copy
; Assumes that ES points to the resident copy.
;==============================================
print_status   proc near
               mov  ah, @write      ;write title block
               mov  bx, stdout
               mov  cx, cs_status_end-cs_status_hdr
               mov  dx, offset(cs_status_hdr)
               int  21H

               mov  ah, @write            ;are we enabled or disabled?
               mov  bx, stdout
               cmpb es:enable_flag, true
               jne  cs_1a
               mov  cx, cs_enab_end-cs_enab_msg
               mov  dx, offset(cs_enab_msg)
               jmps cs_1b
cs_1a          mov  cx, cs_disab_end-cs_disab_msg
               mov  dx, offset(cs_disab_msg)
cs_1b          int  21H

               mov  ah, @write             ;which printers are we emulating?
               mov  bx, stdout
               cmpb es:enabled_printers, 1
               jne  cs_2a
               mov  cx, cs_prn1_end-cs_prn1_msg
               mov  dx, offset(cs_prn1_msg)
               jmps cs_2c
cs_2a          cmpb es:enabled_printers, 2
               jne  cs_2b
               mov  cx, cs_prn2_end-cs_prn2_msg
               mov  dx, offset(cs_prn2_msg)
               jmps cs_2c
cs_2b          cmpb es:enabled_printers, 3
               jne  cs_2d
               mov  cx, cs_prn3_end-cs_prn3_msg
               mov  dx, offset(cs_prn3_msg)
               jmps cs_2c
cs_2d          cmpb es:enabled_printers, 8
               jne  cs_2e
               mov  cx, cs_prsc_end-cs_prsc_msg
               mov  dx, offset(cs_prsc_msg)
               jmps cs_2c
cs_2e          cmpb es:enabled_printers, 0
               jne  cs_2f
               mov  cx, cs_prn0_end-cs_prn0_msg
               mov  dx, offset(cs_prn0_msg)
               jmps cs_2c
cs_2c          int  21H
cs_2f

               mov  ah, @write             ;which async ports are we emulating?
               mov  bx, stdout
               cmpb es:enabled_aux, 1
               jne  cs_4a
               mov  cx, cs_aux1_end-cs_aux1_msg
               mov  dx, offset(cs_aux1_msg)
               jmps cs_4c
cs_4a          cmpb es:enabled_aux, 2
               jne  cs_4b
               mov  cx, cs_aux2_end-cs_aux2_msg
               mov  dx, offset(cs_aux2_msg)
               jmps cs_4c
cs_4b          cmpb es:enabled_aux, 3
               jne  cs_4d
               mov  cx, cs_aux3_end-cs_aux3_msg
               mov  dx, offset(cs_aux3_msg)
               jmps cs_4c
cs_4d          cmpb es:enabled_aux, 0
               jne  cs_4e
               mov  cx, cs_aux0_end-cs_aux0_msg
               mov  dx, offset(cs_aux0_msg)
               jmps cs_4c
cs_4c          int  21H
cs_4e
               mov  ah, @write             ;are we trapping any characters?
               mov  bx, stdout
               cmpb es:trap_char, 00H
               jne  cs_3a
               mov  cx, cs_notrap_end-cs_notrap_msg
               mov  dx, offset(cs_notrap_msg)
               jmps cs_3c
cs_3a          cmpb es:trap_char, lf
               jne  cs_3b
               mov  cx, cs_traplf_end-cs_traplf_msg
               mov  dx, offset(cs_traplf_msg)
               jmps cs_3c
cs_3b          cmpb es:trap_char, cr
               jne  cs_3d
               mov  cx, cs_trapcr_end-cs_trapcr_msg
               mov  dx, offset(cs_trapcr_msg)
cs_3c          int  21H

cs_3d
               mov  ah, @write           ;buffer size message
               mov  bx, stdout
               mov  cx, cs_buf1_end-cs_buf1_msg
               mov  dx, offset(cs_buf1_msg)
               int  21H

               call write_bufsize        ;print out buffer size in bytes

               mov  ah, @write           ;2nd part buffer size message
               mov  bx, stdout
               mov  cx, cs_buf2_end-cs_buf2_msg
               mov  dx, offset(cs_buf2_msg)
               int  21H

               mov  ah, @write           ;filename message
               mov  bx, stdout
               mov  cx, cs_file_end-cs_file_msg
               mov  dx, offset(cs_file_msg)
               int  21H

               ;calculate length of filename string
               push ds
               mov  ax, es
               mov  ds, ax
               mov  al, 00H               ;scan for terminator byte
               mov  cx, 72                ;maximum filename length
               mov  di, offset(filename)
               repne
               scasb
               mov  ax, cx
               mov  cx, 72
               sub  cx, ax
               ;and write filename
               mov  ah, @write
               mov  bx, stdout
               mov  dx, offset(filename)
               int  21H
               pop  ds
               mov  ah, @write
               mov  bx, stdout
               mov  cx, 2
               mov  dx, offset(crlf)
               int  21H

               ;buffer flushed?
               cmpb buf_flushed, true
               jne  cs_exit
               mov  ah, @write
               mov  bx, stdout
               mov  cx, flush_end-flush_msg
               mov  dx, offset(flush_msg)
               int  21H
cs_exit
               ret
               endp


;===========================================
; WRITE_BUFSIZE
; Converts the size of our buffer to ASCII,
; and writes it to the standard output.  
;===========================================
write_bufsize  proc    near
               push    ax              ;save machine state
               push    bx
               push    cx
               push    dx
               push    di

               mov    ax, es:buf_size  ;number to convert

                                       ;the following code fragment was written
                                       ;by Bob Smith and published in PC Age
                                       ;Volume 3.1 (Jan. '84) p. 116

               mov     bx, 10          ;set up divisor
               xor     cx, cx          ;clear counter
nxt_in         xor     dx, dx          ;clear for division
               div     bx              ;dl <== AX mod 10
               or      dl, '0'         ;convert to ascii digit
               push    dx              ;save digit
               inc     cx              ;bump counter
               and     ax, ax          ;are we done?
               jnz     nxt_in          ;nope, keep going
                                       ;stack now has digits of number
                                       ;end of Bob Smith's code

               mov     ah, 06H         ;write char function
nxt_out        pop     dx
               int     21H
               loop    nxt_out

               pop     di              ;restore state
               pop     dx
               pop     cx
               pop     bx
               pop     ax
               ret                     ;and exit
               endp                    ;(write_linenum)

;==============================================
; Flush_Resident
; Doesn't actually flush the buffer, just sets
; the resident flag indicating a flush request.
; Note: ES points to resident data section.
;==============================================
flush_resident proc   near
               movb   es:need_dump, true
               movb   cs:buf_flushed, true
               ret
               endp

;======================
; Flags (non-resident)
;=====================
param_found     db    false               ;was anything found to process?
file_request    db    false               ;did user specify a file?
install_request db    false               ;is this an install request?
set_printers    db    false               ;change printers to emulate?
set_aux         db    false               ;change aux ports to emulate?
status_request  db    false               ;should we print a status report?
set_enable_state db   false               ;request to enable or disable?
set_trap_mode   db    false               ;request to change trap mode?
flush_request   db    false               ;request to flush buffer?
buf_flushed     db    false               ;did we flush the buffer?
installed       db    false               ;are we already installed?

default_file    db    '\VIRTUAL.PRN'
default_end

baddos          db cr lf 'This program requires DOS 2.0 or later!$' cr lf
inst_msg        db cr lf 'Resident section has been installed.' cr lf
inst_end
lpt1_string     db 'LPT1:'
lpt2_string     db 'LPT2:'
prn_string      db 'PRN'
illegal_msg     db cr lf 'Invalid filename - redirecting to a printer'
                db       ' would cause a system crash.' cr lf
                db       'Use VPRINT /D to send output back to a real printer.'
                db cr lf
illegal_end
not_inst_msg    db cr lf 'Unable to locate resident routine.' cr lf
not_inst_end
flush_msg       db cr lf 'Internal buffer flushed to disk.' cr lf
flush_end
ic_res_msg      db cr lf 'VPRINT is already resident!' cr lf
ic_res_end
ic_open_msg     db cr lf 'Unable to open file.' cr lf
ic_open_end
ic_mem_msg      db cr lf 'Insufficient memory to load VPRINT.' cr lf
                db       'Specify a smaller buffer and try again.' cr lf
ic_mem_end
short_hello     db cr lf 'VPRINT - virtual printer (version 5.00)' cr lf
                db cr lf
                db       'User-supported software by D. Whitman' cr lf
                db       'For help/info, type VPRINT ?' cr lf
short_end
cs_status_hdr   db     cr lf  'Current Status: '  cr lf cr lf
cs_status_end
cs_enab_msg     db '   Redirection:         ENABLED' cr lf
cs_enab_end
cs_disab_msg    db '   Redirection:         DISABLED' cr lf
cs_disab_end
cs_prn0_msg     db '   Emulated printer:    None' cr lf
cs_prn0_end
cs_prsc_msg     db '   Emulated printer:    PrtSc ONLY' cr lf
cs_prsc_end
cs_prn1_msg     db '   Emulated printer:    LPT1:' cr lf
cs_prn1_end
cs_prn2_msg     db '   Emulated printer:    LPT2:' cr lf
cs_prn2_end
cs_prn3_msg     db '   Emulated printers:   LPT1: and LPT2:' cr lf
cs_prn3_end
cs_aux0_msg     db '   Emulated async port: None' cr lf
cs_aux0_end
cs_aux1_msg     db '   Emulated async port: COM1:' cr lf
cs_aux1_end
cs_aux2_msg     db '   Emulated async port: COM2:' cr lf
cs_aux2_end
cs_aux3_msg     db '   Emulated async port: COM1: and COM2:' cr lf
cs_aux3_end
cs_notrap_msg   db '   Filter mode:         VERBATIM' cr lf
cs_notrap_end
cs_traplf_msg   db '   Filter mode:         '
                db 'drop LF, expand CR --> CR/LF' cr lf
cs_traplf_end
cs_trapcr_msg   db '   Filter mode:         '
                db 'drop CR, expand LF --> CR/LF' cr lf
cs_trapcr_end
cs_buf1_msg     db '   Buffer size:         '
cs_buf1_end
cs_buf2_msg     db ' bytes' cr lf
cs_buf2_end

cs_file_msg     db '   Print file:          '
cs_file_end
crlf            db    cr lf
hello
  db cr lf
  db 'VPRINT - Virtual Printer (version 5.00)' cr lf
  db cr lf
  db 'Purpose: Redirects printer output to a disk file.' cr lf
  db cr lf
  db 'Syntax:  VPRINT [[d:][path]filename[.ext]] [options]' cr lf
  db cr lf
  db 'Options: /i               install (required to load resident code)' cr lf
  db '         /bnn             buffer size, K (nn = 1-64, default is 2)' cr lf
  db '         /p1,p2,p0,pp,p3  emulate LPT1, LPT2, none, PrtSc, or all (default)' cr lf
  db '         /a1,a2,a3,a0     emulate COM1, COM2, both, or none (default)' cr lf
  db '         /l,c,n           filter mode: drop LF, drop CR, or none (default)' cr lf
  db '         /d,e             redirection: disabled, enabled (default)' cr lf
  db '         /f               flush - empty any buffered output to disk' cr lf
  db '         /s               report status' cr lf
  db cr lf
  db 'Once installed, you can change file or options by running VPRINT again.'
  db cr lf cr lf
  db 'VPRINT is user-supported software.  If you find this program of value, '
  db 'please' cr lf
  db 'support its development with a payment of $20 to:' cr lf
  db cr lf
  db '            Whitman Software' cr lf
  db '            P.O. Box 1157' cr lf
  db '            North Wales, PA  19454'
h_end
end_nonres
```
{% endraw %}

## VPRINT.DOC

{% raw %}
```


                                          READ
                                          THIS
                                         BEFORE
                                        PRINTING!!!!

        This document has been formatted in a special way. Virtually all dot
        matrix printers have a condensed mode which prints 132 characters
        across a standard 8 1/2 inch page.  When this file is printed out in
        condensed mode, the resulting printed pages can be cut down to 5 1/2 X
        8 1/2 inches.  The cut pages will fit nicely in the back of your
        DOS manual for storage.

        Typically, you can turn on this mode by sending a special control
        sequence to the printer from BASIC.  For example, you can turn on the
        condensed mode of the IBM/Epson printer with the BASIC statement:
        LPRINT chr$(15).  If your printer has such a condensed mode, turn it
        on now, before printing the rest of this document.























































                                      (tm)
                                 VPRINT

                         Virtual Printer Utility
                      for the IBM Personal Computer

                              User's Manual
                  (c) 1986, 1987, 1988 by David Whitman
                              Version 5.00
























    David Whitman
    P.O. Box 1157
    North Wales, PA 19454
    (215) 234-4084 (evenings only)

























                       Table of Contents



    What is VPRINT?.............................................1

    System Requirements.........................................2

    Starting VPRINT.............................................3

    Advanced Usage..............................................5

    Printer Emulation Options...................................7

    RS-232 Emulation Options....................................8

    Setting VPRINT's Buffer Size................................9

    Filter Options.............................................10

    Enable Options.............................................11

    Miscellaneous Options......................................12

    Software Compatibility.....................................13

    Programming Notes..........................................14

    Notes for Those Upgrading to This Version of VPRINT........17

    Miscellaneous and A Word From Our Sponsor..................18

    Registration Form..........................................22






























                                                                    1
    >> What is VPRINT? <<

    VPRINT implements a "virtual printer" by capturing output
    normally sent to your printer or COM port and redirecting it to a
    file of your chosing.  There are many reasons you might want to
    capture printer output:

       * Producing formatted files from software packages that don't
         support "printing to disk".

       * Capturing output so it can be modified by other programs
         prior to printing.

       * Setting up word processors and other programs to work with
         your printer.  By capturing to disk, you can see exactly
         what's being sent, and pinpoint problems immediately.

       * Capturing output generated on one computer, to be printed on
         a different system.

       * Taking disk "snapshots" of your video screen.  When VPRINT
         is running, the PrtSc key copies the screen to your disk
         file.

       * Delaying printer output for later printing.  VPRINT responds
         much faster than a "real" printer, but takes up much less
         memory than most print spooling software.  If you can't
         afford the memory for a print spooler, you can VPRINT
         quickly, then print the file later during a time when your
         computer is idle.



































                                                                    2

    >> System Requirements <<

    To run VPRINT, you need:

        IBM PC

        64K of memory, minimum

        1 disk drive, minimum

        DOS 2.0 or later

    VPRINT is designed to run on IBM PCs, but should run on all
    systems that are compatible with the IBM BIOS.

    The following systems are known to run VPRINT successfully.  If
    you are using VPRINT on a computer not on this list, please
    write, and the list will be updated so that others can share this
    information.

           IBM PC
           IBM XT
           IBM 3270 PC
           IBM 3270 PC/G








































                                                                    3

    >> Starting VPRINT <<

    To capture printer output, you must "install" VPRINT.
    Installation temporarily grafts a portion of VPRINT onto your
    computer's input/output system.  Once installed, VPRINT remains a
    part of the I/O system until you either shut your computer off,
    or reset the system by pressing Ctrl-Alt-Del.

    To install VPRINT, type:

        VPRINT filename.ext  /i

    Use whatever filename you'd like printer output to be sent to.
    The filename can optionally have a drive and/or pathname.  If you
    don't use a filename, VPRINT will create a file named
    VIRTUAL.PRN for you in the root directory of the default drive.

    The "/i" tells VPRINT that you want to install the program, and
    if a filename is used, the "/i" must come AFTER the filename.

    After you type the above command, VPRINT will respond:

         VPRINT - virtual printer (version 5.00)

         User-supported software by D. Whitman
         For help/info, type VPRINT ?

         Current Status:

            Redirection:         ENABLED
            Emulated printers:   LPT1: and LPT2:
            Emulated async port: None
            Filter mode:         VERBATIM
            Buffer size:         2048 bytes
            Print file:          C:\VIRTUAL.PRN 

         Resident section has been installed.

    As programs attempt to send output to your printer, VPRINT
    intercepts the output, and stores it in an internal buffer. Every
    time this buffer fills up, VPRINT dumps the buffer to the file
    you specified during installation.






















                                                                    4
    After you have finished your printing, the buffer may still
    contain some of your output, not yet transferred to disk.  Before
    using the output file, you should ask VPRINT to "flush" the
    buffer, using the command:

         VPRINT /f



























































                                                                    5
    >> Advanced Usage <<

    The procedure given in the previous section will allow you to
    capture printer output from most software packages, but does not
    make use of all of VPRINT's capabilities.  This section will
    discuss these further options.

    The VPRINT command has the following syntax:

       VPRINT [?] [d:][path][filename[.ext]]] /options

    If you type VPRINT ?, a one page help screen will be printed.

    You can specify a fully qualified file name, including drive and
    path.  After installation, you can change the active printer file
    by running VPRINT with a different filename.  This modifies the
    resident code without loading a new copy or using more memory.

    VPRINT's options all start with a slash character "/" followed by
    a single letter or number.  If a filename is used, the options
    must come AFTER the filename.  Multiple options can be used.  The
    following options are available:

        /i      install (required to load resident code)
        /bnn    set buffer size in Kbytes: nn = 1-64 (defaults to 2)
        /f      flush - empty any buffered output to disk
        /s      report status

        /p1     emulate LPT1:
        /p2     emulate LPT2:
        /p3     emulate both printers (default)
        /pp     emulate PrtSc only 
        /p0     don't emulate LPT ports

        /a1     emulate COM1: (AUX:)
        /a2     emulate COM2:
        /a3     emulate both COM1: and COM2:
        /a0     don't emulate COM ports (default)

        /n      neutral - don't filter output (default)
        /l      drop LFs, expand CR to CR LF
        /c      drop CRs, expand LF to CR LF

        /d      disable - flush buffer, use physical devices
        /e      enable - use virtual printer again, after /d




















                                                                    6

    Again, like the filename, you can install VPRINT using one set of
    options, then change by running VPRINT again with different
    options.  The new options will modify the resident code without
    using more memory.  The following sections will discuss these
    options in more detail.



























































                                                                    7
    >> Printer Emulation Options <<

    You can control which printer port(s) VPRINT emulates.  By
    default, VPRINT redirects printer output intended for both LPT1:
    and LPT2:.  You can restrict this to only one printer using
    options /p1 and /p2 , or capture just PrtSc output with option
    /pp.

    For example, if you only want to capture output from LPT1:, you
    would install VPRINT like this:

        VPRINT /i /p1

    Alternatively, if VPRINT is already installed, you can restrict
    capture to LPT2: with this command:

        VPRINT /p2

    To only capture only screen print output, use the command:

        VPRINT /pp

    Note: Selective trapping of PrtSc may only work on IBM PCs or
          extremely faithful clones.

    The /p3 option returns you to the default state, where output to
    both printer ports is captured.

    You can turn off printer emulation altogether using option /p0.
    This option is provided for use during RS-232 emulation.  (See
    next section.)


































                                                                    8
    >>RS-232 Emulation Options<<

    VPRINT can also trap output sent to your computer's RS-232 ports.
    This allows you to redirect output to serial printers or
    plotters.  Only *output* is affected - input from the COM port is
    handled normally.

    By default, RS-232 emulation is turned off.  You can install
    VPRINT to redirect COM1: output with the following command:

          VPRINT /i /a1

    Similar to the parallel printer emulation options, you can select
    just COM2: with option /a2, both COM ports with /a3, or neither
    with /a0.

    You may prefer to turn off parallel printer emulation with option
    /p0 when using RS-232 emulation, to avoid mixing output for the
    two types of devices.














































                                                                    9
    >>Setting VPRINT's Buffer Size<<

    By default, VPRINT sets up an internal buffer capable of holding
    2048 characters.  This value was determined experimentally to
    give the quickest operation while using the minimum of memory on
    the author's system.

    If your print jobs are small, but larger than VPRINT's default 2K
    buffer, you can maximize speed by specifying a buffer big enough
    to hold the entire job, and eliminate disk access during
    printing.

    Compatibility with certain software packages may require you to
    install VPRINT with a larger buffer size.  If a program you're
    running complains about your printer not being ready, or hangs up
    when printing with VPRINT installed, reboot and try again with a
    larger buffer.  If you can spare the memory, a buffer size of 64K
    should allow VPRINT to work with absolutely any software.  See
    the section titled "Software Compatibility" for more discussion
    on this issue.

    You can change VPRINT's default buffer size during installation,
    by using option /B.  For example, the following command installs
    VPRINT with a buffer size of 16K:

             VPRINT /i /b16

    You can specify buffer sizes from 1 to 64K.  If you specify a
    value larger than 64, VPRINT will give you a buffer size of 64K.
    A buffer size of less than one is forced up to 1K.

    Unlike VPRINT's other options, once the buffer size is set, you
    can't modify it without rebooting your computer and reinstalling
    VPRINT.































                                                                   10

    >> Filter Options <<

    By default, VPRINT stores to disk exactly what is being sent to
    your printer.  However, under certain circumstances, it is
    desirable to "filter" the output slightly.

    Standard DOS files end each line with a carriage return character
    (CR), followed by a line feed character (LF).  Many programs,
    including most word processors, will require files to be in this
    format.  Unfortunately, when sending output to a printer, not all
    programs terminate lines with a CR LF pair.

    For example, Volkswriter sends only line feeds at the end of
    blank lines.  This works fine when sent to a printer, but if
    captured to a file, the resulting file will look very strange
    when re-edited. (Multiple blank lines disappear, and are replaced
    with a single line full of boxes with holes in them -the screen
    representation of the line feed character.)

    At least on older PC's, the PrtSc function acts even stranger.
    PrtSc terminates each line exactly backwards, with a LF followed
    by a CR.  This combination will confuse most text editors,
    causing very strange behavior.

    VPRINT has two "filtering" modes which tend to force printed
    output into standard DOS format.  These modes ignore either CRs
    or LFs, while replacing the other character with a CR LF pair.

    Option /C ignores carriage returns, and expands LF to CR LF.
    Similarly, /L ignores printed line feeds, but adds one after each
    CR.

    If your captured output looks strange, try turning on the
    different filtering modes and see if your output looks more
    normal.

    You can turn off filtering with the /N option.  After /N is in
    effect, output will again be captured verbatim.


























                                                                   11

    >> Enable Options <<

    Once VPRINT is installed, it remains a part of your computer's
    input/output system until you either turn off your computer or
    re-boot.  However, VPRINT can be temporarily disabled to allow
    output to go to your printer as usual.

    Option /D disables VPRINT.  When /D is in effect, VPRINT remains
    resident, but passes output unmodified to your printer.  Option
    /D also flushes VPRINT's internal buffer, so that all your output
    is available on disk.

    Option /E enables VPRINT, presumably after it's been disabled
    with option /D.  When option /E is in effect, printer output is
    once again redirected to your disk file.

















































                                                                   12
    >> Miscellaneous Options <<

    A short help summary will be printed if you type VPRINT ?, or
    just VPRINT with no other options.

    The /I option installs VPRINT.  This option loads VPRINT's
    resident code, and grafts it onto the I/O system of your
    computer.  Once VPRINT is loaded, there is no need to specify
    /I on subsequent commands.  If you use /I when the resident code
    is already loaded, VPRINT will detect the resident code and will
    print an error message without re-loading.

    Option /F flushes VPRINT's internal buffer to disk.  To avoid
    constantly running your disk drive during printing, VPRINT
    collects about 2000 characters, then writes them to disk all at
    once.  Unless you output an exact multiple of 2048 characters,
    when printing is finished, part of your output is still in
    VPRINT's internal buffer.  Option /F forces the last part of your
    output to disk.

    Incidentally, VPRINT's internal buffer is automatically flushed
    before shifting to a new file, and also before disabling, if you
    turn on option /D.

    Option /S prints a status report, indicating which options are in
    effect, and where your printed output is being sent.  This is the
    same report which is printed after using any of the other
    options, but /S allows you to check status without changing
    anything.




































                                                                   13
    >> Software Compatibility <<

    VPRINT is compatible with essentially all software which can run
    under DOS.  However, certain programs may require you to install
    VPRINT with a larger buffer than the default 2048 bytes.

    If a software package over-runs VPRINT's buffer, VPRINT sends
    signals back to your program that your "printer" has gone
    off-line.  Upon receiving such signals, most software will stop
    printing, and ask you to correct the problem.  If this happens,
    abort the print and exit the program, then re-boot your computer.

    If your software ignores the signals, rather than getting an
    error message about your printer going off-line, your computer
    may lock up and cease to respond to the keyboard.  If you get
    such a lock-up, just turn your computer off, wait 5 seconds, then
    turn it on again.

    In either case, try installing VPRINT with a larger buffer size.
    The exact size needed will vary from program to program.  If
    you're having trouble and can spare the memory, use a buffer size
    of 64K.  DOS limits programs to printing 64K or less of data at
    once, so a 64K buffer guarantees that VPRINT can handle anything
    your software can throw at it.

    Sometimes when you examine your captured output, you'll see lots
    of strange characters mixed in with your text.  These are control
    characters sent by your software to set up and control your
    printer.  If you install your software to use a "generic" or
    "unknown" printer, you can usually eliminate these characters.
    You can also use VPRINT's filtering modes to correct the use of
    carriage return and line feed characters.

































                                                                   14
    >> Programming Notes <<

    You can use VPRINT effectively without reading or understanding
    this section.  However, many users have expressed interest in how
    VPRINT works, and this section is provided for their benefit.

    VPRINT is written in assembly language for maximum speed and
    minimum size.  The source code is available to registered users
    by sending a formatted disk and a stamped return mailer.   The
    source code is in the syntax of the CHASM assembler, which is
    another product of Whitman Software.  A one page advertisement
    for CHASM is given near the end of this document.

    Please note that VPRINT's source code is provided for educational
    purposes, and to allow you to customize for your own use.  Under
    NO CIRCUMSTANCES may you distribute modified or translated
    versions, either in the public domain or for profit.

    Upon installation, VPRINT takes over the following interrupt
    vectors:

          INT 14H - BIOS routine RS232_IO
          INT 17H - BIOS routine PRINTER_IO
          INT 21H - DOS function dispatcher
          INT 28H - DOS_IDLE

    Vectors 14H and 17H are the low level BIOS routines handling
    output to RS-232 ports and parallel ports respectively.  VPRINT
    traps output by monitoring these interrupts, and stores the
    output in its buffer.  Essentially all software interfaces to
    devices directly or indirectly through these interrupts.
    However, any software which bypasses the BIOS for output will be
    unaffected by VPRINT.

    Safely emptying VPRINT's buffer turns out to be much harder than
    filling it.  DOS is not re-entrant, which means that it isn't
    necessarily safe for a memory resident program to call DOS for
    services such as disk i/o.  If DOS is already in the midst of
    processing a function call, a new call will clobber one of DOS's
    internal stacks and crash the system.

    Unfortunately, if a program is well behaved and uses DOS services
    rather than direct BIOS calls for output, DOS is going to be busy
    whenever VPRINT's interrupt 17H or interrupt 14H handlers are
    active.  VPRINT uses several different tricks to get around this
    problem.



















                                                                   15

    DOS maintains an undocumented flag which indicates whether a call
    would be re-entrant.  Although undocumented, DOS_CRITICAL is
    reasonably well understood, and used by many memory resident
    programs.  During installation, VPRINT gets a pointer to
    DOS_CRITICAL using an undocumented (but again, well understood
    and commonly used) DOS function.  If VPRINT's buffer is more than
    half full when a character is received for printing, VPRINT
    checks DOS_CRITICAL, and if it's safe, the buffer is emptied to
    disk.

    A second trick is taking over interrupt 28H, DOS_IDLE.  This is
    an undocumented DOS interrupt which is called during keyboard
    input and other periods when DOS has some time to kill.  With
    certain restrictions, it is safe to call DOS during interrupt 28H
    processing, even if DOS_CRITICAL is set.  The spooler program
    PRINT supplied with DOS functions by intercepting interrupt 28H.
    VPRINT monitors interrupt 28H and dumps the buffer if it's more
    than half full.

    VPRINT's last trick is intercepting calls to the DOS function
    dispatcher, interrupt 21H.  If VPRINT's buffer is more than half
    full when interrupt 21H is called, an attempt is made to empty
    the buffer.  This attempt is almost guaranteed to be successful,
    since DOS can't be active - by taking over the function
    dispatcher, we get a chance to do some i/o before DOS ever sees
    any other request for services and becomes busy.

    VPRINT's interrupt 21H handler still monitors DOS_CRITICAL before
    attempting output, to guard against the chance of some other
    memory resident routine making a re-entrant call, and fooling
    VPRINT into thinking i/o was safe.

    As a final bit of insurance, the interrupt 21H handler watches
    for any output request, even if it's not obviously printer or
    RS-232 related.  If a request comes to output a block that
    wouldn't fit in VPRINT's buffer, the buffer is emptied even if
    the buffer is less than half full.  Since the DOS WRITE_BLOCK
    function can only handle blocks up to 64K, if VPRINT is installed
    with a 64K buffer, we should be able to handle any output a
    program sends.
























                                                                   16
    To change options in the resident code, VPRINT examines the
    vector for interrupt 17H, then searches at the specified location
    for a "recognition string".   If this recognition string is not
    matched, changes are aborted.  If you load another memory
    resident program after VPRINT that intercepts interrupt 17H, you
    will not be able to change options or files used by the resident
    part of VPRINT.

    Selective trapping of PrtSc output is performed by monitoring a
    IBM documented flag in the BIOS data area: STATUS_BYTE at
    0050:0000.  This flag contains a non-zero value if a PrtSc
    operation is in progress.  Clones with a non-IBM BIOS may or may
    not maintain this flag at the same location, hence VPRINT's /PP
    option may not work on all clones.



















































                                                                   17
    >> Notes for Those Upgrading to This Version of VPRINT <<

    VPRINT is not yet carved in stone - improvements and corrections
    are made fairly frequently, based on both my own experience using
    the program, and the comments of outside users.  This section
    summarizes the changes which have been made since version 1.00
    was released.

    Version   Notes

       1.00   Very primitive DOS 1 version, to upgrade the original
              EasyWriter - at one point, the only available word
              processor for the IBM.  Veteran PC users still shudder
              when EasyWriter 1 is mentioned; among many other
              defects, it wouldn't print to disk.

       2.00   Updated DOS 2 version, not released

       2.01   Released as U/S

       3.00   Add int 28H buffer dump, add harmless output mode to
              watch dos critical flag before writes.

       3.01   Corrected bug in VPRINT's dos critical byte handling

       3.02   Add selective trapping of PrtSc operation

       4.00   Add int 21H buffer dump, variable buffer size, and kill
              off VPRINT's risky output mode, since harmless mode is
              now powerful enough for all programs.

       5.00   Add emulation of RS-232 output

































                                                                   18

    >> Miscellaneous and a Word From Our Sponsor...<<

    A. Red Tape and Legal Nonsense:

       1. Disclaimer:

          VPRINT is distributed as is, with no guarantee that it will
          work correctly in all situations.  In no event will the
          Author be liable for any damages, including lost profits,
          lost savings or other incidental or consequential damages
          arising out of the use of or inability to use this program,
          even if the Author has been advised of the possibility of
          such damages, or for any claim by any other party.

          Despite the somewhat imposing statement above, it *is* my
          intention to fix any bugs which are brought to my
          attention.

       2. Copyright Information

          The entire VPRINT distribution package, consisting of the
          program, documentation file, and source code file are
          copyright (c) 1986, 1987 and 1988 by David Whitman.  The
          author reserves the exclusive right to distribute this
          package, or any part thereof, for profit.  The name VPRINT
          (tm) applied to a microcomputer printer redirection utility
          is a trade mark of David Whitman.

          The VPRINT package (with the exception of the source code
          file VPRINT.ASM) may be freely copied by individuals for
          evaluation purposes.  It is expected that those who find
          the package useful will make a contribution directly to the
          author of the program.

          VPRINT's source code is made available to registered users
          for educational purposes and to allow them to customize for
          their own personal use.  The source code file is available
          only to those who make the suggested payment for use of
          VPRINT.  Under NO CIRCUMSTANCES may modified versions or
          translations into other computer languages be distributed,
          either for profit or in the public domain.























                                                                   19

          User's groups, clubs, libraries and clearing houses are
          authorized to distribute VPRINT under the following
          conditions:

          1. No charge is made for the software or documentation.  A
             nominal distribution fee may be charged, provided that
             is no more that $8 total.

          2. Recipients are to be informed of the user-supported
             software concept, and encouraged to support it with
             their donations.

          3. The program and documentation are distributed together
             and are not modified in ANY way.

          4. The source code file VPRINT.ASM or disassemblies of
             VPRINT.COM may not be distributed.

    B. An Offer You Can't Refuse.

       VPRINT is user-supported software, distributed under a system
       identical to the FREEWARE (tm) marketing scheme developed by
       the late Andrew Flugelman, whose efforts are gratefully
       acknowledged.

       Anyone may obtain a free copy of VPRINT by sending a blank,
       formatted diskette to the author.  An addressed, postage-paid
       return mailer must accompany the disk (no exceptions, please).

       A copy of the program, with documentation, will be sent by
       return mail.  The program will carry a notice suggesting a
       payment to the program's author.  Making the payment is
       totally voluntary on the part of the user.  Regardless of
       whether a payment is made, the user is encouraged to share the
       program with others.  Payment for use is discretionary on the
       part of each subsequent user.




























                                                                   20

       The underlying philosophy here is based on the following
       principles:

       First, that the value and utility of software is best assessed
          by the user on his/her own system.  Only after using a
          program can one really determine whether it serves personal
          applications, needs, and tastes.

       Second, that the creation of independent personal computer
          software can and should be supported by those who benefit
          from its use.  Remember the Tanstaafl principal: There
          Ain't No Such Thing As A Free Lunch.  Support to authors
          encourages the continued creation of novel, low cost
          software.

       Finally, that copying and networking of programs should be
          encouraged, rather than restricted.  The ease with which
          software can be distributed outside traditional commercial
          channels reflects the strength, rather than the weakness,
          of electronic information.

    If you like this software, please help support it.  Your support
    can take three forms:

        1. Become a registered user.  The suggested payment for
           registration is $20.

        2. Suggestions, comments and bug reports.  Your comments will
           be taken seriously.  VPRINT will evolve over time, based
           on the feedback of users.

        3. Spread the word.  Make copies for friends, or send the
           program to your favorite BBS.  Astronomical advertising
           costs are one big reason that commercial software is so
           overpriced.  To continue offering VPRINT this way, I need
           your help in letting other people know about VPRINT.




























                                                                   21

    Those who make the suggested $20 payment to become registered
    users receive the following benefits:

        1. Access to VPRINT's heavily commented source code.

        2. User support, by phone or mail.  SUPPORT IS ONLY AVAILABLE
           TO REGISTERED USERS.

        3. Notices of significant upgrades.

        4. A warm, fuzzy feeling of having done the right thing.  The
           converse is also true.  If you continue to use VPRINT
           without making the suggested payment, your self-image will
           gradually deteriorate until you wake up one day in the
           gutter on Skid Row, grubbing for cigarette butts and
           discarded floppy disks.  Honest.

    This documentation file was written using Volkswriter 3, then
    printed and captured by VPRINT to eliminate Volkswriter's special
    effects markers and get proper pagination.  Option /C was in
    effect to force line feeds into CR/LF pairs.


           - Dave Whitman

             Whitman Software
             P.O. Box 1157
             North Wales, PA  19454

             (215) 234-4084 (evenings only)


































                                                                   22

             >> Registration Form (version 5.00)<<


    Please send me a copy of the current version of VPRINT, and
    add me to the list of registered VPRINT users, to be eligible for
    phone support and upgrade notices.  I enclose a check for $20.

    Note: VPRINT requires DOS 2 or later to run.


    Computer Model: ______________________________

    Diskette Format:   ____ single    _____ double sided

    ===============================================================

    Name:             ______________________________________

    Address:          ______________________________________

    City, State, Zip: ______________________________________

    ==============================================================

    Where did you hear about VPRINT? _______________________

    ==============================================================


     Send registration form and check to:

          Whitman Software
          P.O. Box 1157
          North Wales, PA  19454






























                                                                   23


                  >> Also Available  <<

    CHASM is a full featured assembler for the IBM PC.
    Substantially simpler than the IBM macro assembler, CHASM is
    particularly suited for those learning assembly language.

    Using CHASM you can:

       * Learn 8088 / 8086 / 8087 assembly language.

       * Explore the inner workings of the IBM PC.

       * Write lighting-fast stand alone programs.

       * Produce machine language subroutines for BASIC programs.

       * Write external procedures or inline code for Turbo Pascal.

    Although easy enough for beginners, CHASM is powerful enough for
    production coding.  VPRINT was assembled using CHASM.

    CHASM features macros, conditional assembly, structured
    variables, operand expressions and much more.  A free evaluation
    version can be obtained by sending a formatted disk and stamped
    return mailer to:

             Whitman Software
             P.O. Box 1157
             North Wales, PA 19454

    A payment of $40 is requested from those who find the program
    useful.  Those who make this payment are upgraded to a version
    which runs twice as fast.





























```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0010

     Volume in drive A has no label
     Directory of A:\

    CHASM    ARC    265504  10-01-89  12:06a
    ARCE     COM      5084   4-13-86   5:44p
    READ     ME       2831  11-21-86   9:06p
    FLOPPY   BAT      1588  11-13-86   7:06p
    VPRINT   ARC     44178   3-06-89   9:09p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       575   1-01-80   3:12a
    FILE0010 TXT      1703   7-09-90   7:23p
            8 file(s)     321501 bytes
                           36864 bytes free
