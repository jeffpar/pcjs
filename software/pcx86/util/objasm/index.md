---
layout: page
title: "OBJASM: An Object Module Disassembler"
permalink: /software/pcx86/util/objasm/
redirect_from: /disks/pcx86/tools/other/objasm/
machines:
  - id: ibm5160
    type: pcx86
    config: /configs/pcx86/xml/machine/5160/cga/640kb/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: OBJASM 2.0 (Bin)
    autoType: B:OBJASM\r$30MKDIR OBJASM\r$10CD OBJASM\r$10B:OBJUNARC\rMAKE O\r
---

{% include machine.html id="ibm5160" %}

### Original OBJASM Documentation

                                O B J A S M
        An object file to assembly language file conversion utility

    INTRODUCTION
    ------------

        Under normal compilation procedures, most programs are converted into an
    intermediate notation before being converted into executable code.  This 
    notation simplifies the process of managing large programs by allowing the
    programmer to divide a program into many modules.  When changes are made
    to a module, the programmer need only compile that module rather than
    the entire program.  For most 80x86 and compatible processors, this notation
    is stored in a .OBJ file.

        After compilation, the .OBJ file must be converted into a machine 
    executable form.  At this stage the various modules must be combined and
    any inter-module dependencies must be resolved.  This process is called
    linking and is accomplished by LINK, LINK86, or PLINK86 (depending on which
    vendor you purchase it from).  In order to accomplish this resolving, the
    inter-module dependancy information must be stored in the .OBJ file.  This
    information normally consists of routine names, variable names, and other
    globally known quantities.

        For the most part, once a program has been compiled into its .OBJ file,
    there is no going back.  There is no way to convert the .OBJ file back into
    its appropriate language.  It is for that reason that many companies who wish
    to sell thier proprietary routines to programmers, do so in the .OBJ file
    form.  Normally these companies send out a library file (.LIB).  .LIB files
    contain one or more .OBJ files. The program which groups .OBJ files into an
    .LIB file is known as LIB, LIB86, or PLIB86.  This method of distribution
    has made routine vendors happy for many years.

        But this distribution of encoded routines has meant headaches for 
    programmers.  Programmers who discovered bugs in the routines, or wanted to
    make enhancements had to contact the vendor and plead for help.  The 
    programmers were at the mercy of the routine vendors.

        Fortunately, OBJASM came along.  OBJASM is a utility which can convert
    .OBJ files back into assembly language, much like a dis-assembler.  Unlike
    a dis-assembler however, OBJASM is able to determine the names of the routines
    that it is dis-assembling.  Globally known data names can be determined as
    well. OBJASM is also able to determine the segments of the original routines.  
    Segments are logical/physical divisions of sections of routines, normal
    segments are code, data, stack, etc.  With this additional knowledge, OBJASM
    is able to produce an assembly language listing which is easier to read, easier
    to understand, and easier to modify than normal dis-assembler output.  

        OBJASM output is compatible with MASM version 4.0 or later.  It runs 
    under MS-DOS version 3.0 or later although it is able to process .OBJ files
    (as specified by INTEL, document order no. 121748-001) from many other 80x86
    operating systems such as CPM-86, XENIX 80x86, OS/2 and more.  I believe that
    the format for UNIX (it has .o files) is completely different.

    COMPILING OBJASM
    ----------------

        OBJASM was written for Microsoft C version 4.0 or later, and there is
    a supplied 'make' file for that environment.  To execute the 'make' file,
    set-up your Microsoft C environment and go to the directory which contains
    the OBJASM source files.  Make sure that you have the Microsoft C utility
    programs reachable using your 'PATH' environment variable, and type 'MAKE O'
    from the dos prompt.  The compilation will proceed to compile OBJASM for
    the large model.

        One of the modules (ouinsert.c) will give a compiler warning message, or
    may fail depending how picky you have set your compiler.  The message has
    something to do with 'casting far pointer to long' or vice-versa.  Make sure
    your compiler gives only a warning message and proceeds with the compilation
    process.  The warning message can be ignored.  Data structure fanatics: the
    program uses threaded balanced binary trees for many internal lists and the
    ouinsert module is the insert-into-a-list function.  The root node of each tree
    has the tree's height (an integer) stored into one of the structures
    pointer type members.  This is non-portable C code, but it's ok for most C
    compilers.  These threaded balanced binary tree routines were taken from a
    set of generic list handling functions.

        The modules contained in OBJASM are as follows:

    omain.c         main() processes command line and passes through input file
    oprocess.c      dis-assembly/dumping controlling routines
    odisasm.c       routines to dis-assembly the various kinds of 80x86
                        instructions 
    oreport.c       routines to display some of the internal lists (publics and
                        externals)
    ooutput.c       routines to display various pieces of the dis-assembled .OBJ
                        routine
    orXXXXXX.c      (all except oreport.c) routines to process the various INTEL
                        standard .OBJ record formats
    oubuff.c        buffer I/O routines for the input file
    ouinsert.c      list insertion routine
    oufind.c        list searching routine
    ounewtre.c      list creation routine
    ouinitre.c      initialize all lists
    oufmterr.c      .OBJ format error handling routine
    ouget.c         input file formating (into chars,ints,longs,etc) routines
    oumalloc.c      internal memory allocation routine (with check for out of
                        memory error)
    oustruct.c      assembly language structure routines
    oextra.c        additional information file processing routines

        In addition, some of the modules (omain for example) have some debugging
    statements conditionally compiled.  If OBJASM exhibits strange behavior and 
    you wish to trace it down, re-compile these modules with the /DDEBUG option
    (for MSC). This will define the preprocessor variable DEBUG, which will
    enable the conditionally compiled debugging statements.


    EXECUTING OBJASM
    ----------------

        OBJASM is executed from the command line as:

                OBJASM -options filename
                OBJASM -options filename.OBJ

    If you are dis-assembling a .LIB file, then you must use your LIB, LIB86, or
    PLIB86 utility to extract the .OBJ files.

    All output is sent to standard output (normally the console), but can be re-
    directed using the '>' symbol.  A normal OBJASM execution would look like this:

                OBJASM OMAIN >OMAIN.ASM

    The output would then be stored in the file omain.asm.  Output contains tab
    (control-I) characters to seperate the various assembly language columns.
    A normal line format would appear as:

                [LABEL]: (tab)  [INSTRUCTION] (tab) [OPERANDS] (tab) ;[COMMENT]

                start:      mov     ds,ax       ; dummy comment

        The options currently available for OBJASM are as follows:

    Option                         Description
    ------   ---------------------------------------------------------------
    -4     Make MASM v4.0 compatible output (No retf)
    -a     Add labels for better output (use with EXEOBJ)
    -h     Add hex comments showing bytes dis-assembled
    -r     Make RASM86 compatible output (special segment directives, etc)
    -c     Set the minimum size in a code segment, this option is followed
                by a number which represents the new value. Eg. -c20
    -s     Set the minimum size in a data segment, this option is followed
                by a number which represents the new value. Eg. -s10
    -f     Specifies an additional information file.  The additional information
                file must be given in parenthesis. Eg. -f(myfile)  The additional
                information file's default extension is ".add", as in the example
                above, the file specified would be "myfile.add".  For more
                information see the ADDITIONAL INFORMATION FILE section.


    Technical Information
    ---------------------

        Most information used in writing OBJASM was taken from the following
    public documents:

        INTEL 8086 RELOCATABLE OBJECT MODULE FORMATS (Order No. 121748-001)
        MICROSOFT OMF Specification (Dated February 18,1986; this is an edited
                                    copy of the INTEL document)
        MS-DOS ENCYCLOPEDIA

        These documents describe the .OBJ file format.  Here is a quick
    summarization of the format.   Each .OBJ file contains one or more records.
    Each record has a record type (which specifies its purpose), a record length, 
    and record data (which depends on the record type). INTEL outlines 30
    different record types, most of which are never used.  MICROSOFT added to
    these record types and removed the ones which it didn't need.  The record
    types which OBJASM supports are listed below.

        Record Type   Type Name                 Description
        -----------  -----------    -----------------------------------
            80h         THEADR      Module Header Record
            88h         COMENT      Comment Record
            8Ah         MODEND      End of Module Record
            8Ch         EXTDEF      External Dependancy Definition
            90h         PUBDEF      Public Value Definition
            96h         LNAMES      List of Internally Referenced Names
            98h         GRPDEF      Group Definition
            9Ah         SEGDEF      Segment Definition
            9Ch         FIXUPP      Dependancy Fixing-up Record
            A0h         LEDATA      (Logically) Enumerated Data Record
            A2h         LIDATA      (Logically) Iterated Data Record
            B0h         COMDEF      Communal Value Definition
            B4h         LEXTDEF     Local External Definitions (C static routines)
            B6h         LPUBDEF     Local Public Definitions (??)
            B7h         LPUBDF2     Local Public Definitions (?? Another case? )
            B8h         LCOMDEF     Local Communal Value Definitions (??)

        The C modules which handle the records of the above formats are named by
    placing the characters "OR" before the type name and have a .C extension.
    For example, the module named "ORSEGDEF.C" contains the C routine to handle
    the segment definition records.

        INTEL defines these other record types which are not supported by OBJASM.

        Record Type   Type Name                 Description
        -----------  -----------    -----------------------------------
            6Eh       RHEADR        R-Module Header Record
            70h       REGINT        Register Initialization Record
            72h       REDATA        Relocatable Enumerated Data Record
            74h       RIDATA        Relocatable Iterated Data Record
            76h       OVLDEF        Overlay Definition Record
            78h       ENDREC        End Record
            7Ah       BLKDEF        Block Definition Record
            7Ch       BLKEND        Block End Record
            7Eh       DEBSYM        Debug Symbols Record
            82h       LHEADR        L-Module Header Record
            84h       PEDATA        Physically Enumerated Data Record
            86h       PIDATA        Physically Iterated Data Record
            8Eh       TYPDEF        Type Definition Record
            92h       LOCSYM        Line Numbers Record
            94h       LINNUM        Line Number Record
            A4h       LIBHED        Library Header Record
            A6h       LIBNAM        Library Module Names Record
            A8h       LIBLOC        Library Module Locations Record
            AAh       LIBDIC        Library Value Dictionary

        MICROSOFT documents an obsolete method for generating communal records
    using the TYPDEF record.  This obsolete method is not handled by OBJASM.


        The dis-assembler portion of OBJASM is a two pass process.  The first
    determines where local labels and symbols need to be placed, and the second
    outputs the dis-assembled instructions (with the labels and symbols).

        To determine whether to dis-assemble instructions or data, OBJASM performs
    a look ahead operation on each byte of the data records.  If the byte is a
    printable character, then successive bytes are checked as well.  The main 
    module has a two variables called 'code_string' and 'data_string' which are
    used to specify the minimum length of a string.  The 'code_string' value
    is used in code segments while the 'data_string' value is used in data
    segments.  If this minimum length of printable characters is exceeded, then
    the bytes will be output as a string.  OBJASM is shipped with a value of 20
    for 'code_string' and 3 for 'data_string'.  They work well for most .OBJ files.

        Bytes which are not contained in strings are checked against an instruction
    lookup and processing routine.  If it is determined that this byte will 
    generate a valid instruction, then it is output as an instruction.  All other
    bytes are output as simple data bytes.

        Some assemblers and compilers will generate .OBJ records which contain
    a portion of a string or instruction in one record and the remainder in the
    next .OBJ record.  OBJASM does not handle this very well.  Strings spanning
    more than one record will be divided. Instructions spanning more than one
    record will not be recognized.  Output would look this this:

    String:
        db  'This is all o'       it should be      db  'This is all one string'
        db  'ne string'

    Instruction:
        db  0BBh                  it should be      mov bx,MYSYMBOL

        dw  MYSYMBOL

        OBJASM attempts to accomodates for this by keeping a 16 byte overlap
    area.  This overlap area is checked before processing the end of a record.
    This helps alleviate the problem for objects which are smaller that 16 bytes,
    something which is true for all normal instructions.

        For some other interesting quirks in OBJASM, please read the sections
    titled "Differences in .OBJ files which cannot be detected" and "Features
    allowable in .OBJ format which are not translatable into MASMable code".

    ADDITIONAL INFORMATION FILE
    ---------------------------
        The additional information file, specified with the -f option, is another
    method of specifying information to OBJASM.  Lines in this file take one of
    the following formats:

        Format:                         Example:
        SEG segname segtype               SEG DRIVER CODE

        This specifies that the segment named "segname" should be considered
    either data or code.  The segtype should be either CODE or DATA indicating
    which type is desired. Normally OBJASM determines the segment using the
    segment's name, but specifying the segment name and segment type in this
    way allows overiding this determination.

        Format:                         Example:
        var = segname : offset            TableY = DRIVER : 128
                                            TableX = DRIVER : 200h

        This specifies that a label should be placed within the segment "segname"
    at the offset "offset".  This can be used to add labels to the dis-assembled
    code, and can also be used to overide the internal labels generated by OBJASM.

        Format:                         Example:
        segname : offset : datatype       DRIVER : 200h : DW
                                            DRIVER : 202h : DD

        This directs OBJASM to avoid the instruction/string look-ahead process
    and output data of a specified type.  OBJASM outputs a data directive within
    the specified segment named "segname", at the offset "offset".  The "datatype"
    can be any of these values: DB, DW, DD, DF, DQ, or DT.  These correspond to
    the MASM base data types.

        Although this last format allows direct control of how OBJASM outputs
    data, care must be taken to put OBJASM into a state where it can actually
    use this information.   If OBJASM is processing data as an instuction, it
    cannot be directed to output a data directive in the middle of that
    instruction.  For example:

        Additional information:           .OBJ FILE:
            SOME_SEGMENT: 1 : DW             8B360200   MOV SI,[0002]

    this would direct OBJASM to output a word in the middle of the MOV instruction.
    In-order to accomplish this, the addtional information file would have to
    direct that the first byte of the MOV instruction was also a data byte.
    To get it to work, you would have to have this:

        Additional information:           .OBJ FILE:
            SOME_SEGMENT: 0 : DB             8B         db  08Bh
            SOME_SEGMENT: 1 : DW             3602       dw  0236h
                                            00         ...

    Other
    -----

        Yes, there always is a section which defies categorization...
    The OBJASM program being continually refined.  If you have any comments about
    its execution, wish to add features to it, or need to report a bug(s), please
    contact:

            Robert F. Day
            19906 Filbert Drive
            Bothell, WA 98012
            (206) 481-8431

        The following section is a list of bugs that could not be fixed before
    shipping OBJASM.  Please read the bug and problems lists to familiarize
    yourself with the known bugs and problem situations.  The design notes are
    included to help you help me in refining OBJASM.  If you need (or want) to
    add features to OBJASM, please contact me.  We may be working on a similar
    addition and we may be able to save you some time.

    -------------------
    Bugs to Dec 14 1990
    -------------------

    1.  TYPDEF records are ingored (I had some Digital Research Libraries which
        used TYPDEF records, but Microsoft doesn't use them).

    2.  Some languages generate segment names which are the same as the names
        of labels within the segment.  MASM won't allow this.  Please rename
        the segment, if possible.

    --------------------------------------------------
    Differences in .OBJ files which cannot be detected
    --------------------------------------------------

    (1) if label2 = label1 + 010h

            MOV     AX,label1 + 0010h           ; Might have been like this

                        and

            MOV     AX,label2                   ; OBJASM will generate this
                                                ; (Evaluates to equivalent address)

        Reason: Public labels are resolved in local code before being sent to
                the linker.  Although the .OBJ specifications allow two places
                to store symbol addition information (above, the 0010h), MASM 
                only uses one of them. This is a probable source of some other
                .OBJ differences.  MASM automatically computes the offset of
                the public symbol and creates a fixup record indicating that
                the offset of the segment added to the offset of the public
                within the segment should be used (rather than just a fixup
                indicating that the offset of the public should be used).

        Handling: When resolving a reference to an address which is not equal to a
                public symbol, a new local symbol is created.


    -------------------------------------------------------------------------------
    Features allowable in .OBJ format which are not translatable into MASMable code
    -------------------------------------------------------------------------------

    (1)   A piece of code like:

            DW      _labeln - $             ; Relative (data form of local jmp/call)

        Reason:  MASM will not compile the above line.  It is an equivalent data
                representations for relative 'JMP's and 'CALL's
                where _labeln is the label to jump or call to.

        Handling: If OBJASM detects this type of code (almost all .OBJ files have
                it) then the data output function will substitute an
                actual value for the $ operator.  This will be noted by a nasty
                comment. The dis-assembly output function will still work if
                they are truly 'JMP's or 'CALL's (Relative addressing is
                proceeded by the jump short or call short opcodes).

    -----------------
    End of OBJASM.DOC
