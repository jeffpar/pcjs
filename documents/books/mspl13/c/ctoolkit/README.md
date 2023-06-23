---
layout: page
title: "MS C 6.0 Developer's Toolkit Reference"
permalink: /documents/books/mspl13/c/ctoolkit/
redirect_from: /pubs/pc/reference/microsoft/mspl13/c/ctoolkit/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft  C - DEVELOPER'S TOOLKIT REFERENCE







────────────────────────────────────────────────────────────────────────────
                Microsoft (R) C - DEVELOPER'S TOOLKIT REFERENCE

                        FOR THE MS (R) OS/2 AND MS-DOS (R)
                                OPERATING SYSTEM








MICROSOFT CORPORATION

Information in this document is subject to change without notice and does
not represent a commitment on the part of Microsoft Corporation. The
software described in this document is furnished under a license agreement
or nondisclosure agreement. The software may be used or copied only in
accordance with the terms of the agreement. It is against the law to copy
the software on any medium except as specifically allowed in the license or
nondisclosure agreement. No part of this manual may be reproduced or
transmitted in any form or by any means, electronic or mechanical, including
photocopying and recording, for any purpose without the express written
permission of Microsoft.
RESTRICTED RIGHTS: Use, duplication, or disclosure by the U.S. Government is
subject to restrictions as set forth in subparagraph (c)(1)(ii) of the
Rights in Technical Data and Computer Software clause at DFARS 252.227-7013
or subparagraphs (c)(1) and (2) of Commercial Computer Software
─Restricted Rights at 48 CFR 52.227-19, as applicable.
Contractor/Manufacturer is Microsoft Corporation, One Microsoft Way,
Redmond, WA  98052-6399.


(C) Copyright Microsoft Corporation, 1990. All rights reserved.


Printed in the United States of America.


Microsoft, MS, MS-DOS, CodeView, and XENIX are registered
trademarks of Microsoft Corporation.

IBM is a registered trademark of International Business
Machines Corporation.

Intel is a registered trademark of Intel Corporation.

UNIX is a registered trademark of American Telephone
and Telegraph Company.

Document No. LN18161-0990
        OEM D/0711-1Z

10 9 8 7 6 5 4 3 2 1







Introduction


PART I  File Formats
────────────────────────────────────────────────────────────────────────────


Chapter 1  Object Module Format for Symbolic Debugging

        1.1   Type Representation
            1.1.1    Type Index
            1.1.2    TYPES Segment Definition
        1.2   Imported Symbols
            1.2.1    $$lmport Segment Definition
            1.2.2    $$Import Representation
        1.3   Symbol Representation
            1.3.1    $$SYMBOLS Segment Definition
            1.3.2    Description of SYMBOLS Records
        1.4   Types Definition Segment (TYPES)
            1.4.1    Type Definition
            1.4.2    Type String
            1.4.3    Start Leaves
            1.4.4    Pointers
            1.4.5    Based Pointer
            1.4.6    Scalars
            1.4.7    Structures
            1.4.8    Bitfields
            1.4.9    Procedures
            1.4.10   Component Leaves
        1.5   Examples of TYPES Records for C Types
            1.5.1    C 5.0/C 6.0 Structures
        1.6   Predefined Primitive Types
        1.7   Codes for Register Variables

Chapter 2  Object Module Format Extensions

        2.1   BAKPAT Record (QC 1.0)─B2h, B3h
        2.2   Local Symbols (C 5.0)─B4h, B6h, B7h, B8h
        2.3   New OMF Comment─Class A1h
        2.4   IMPDEF (OS/2, Windows)─Comment Class A0h, Subtype 1
        2.5   EXPDEF (C 5.1)─Comment Class A0h, Subtype 2
        2.6   Link-Pass-2 Comment Record (C 5.0)─ Class A2h
        2.7   Incremental Compilation─INCDEF (QC 2.0)
        2.8   LIBMOD Comment Record─Class A3h (LIB 3.07 in MASM 5.00)
        2.9   EXESTR Comment Record─ Class A4h (C 5.2)
        2.10  Incremental Compilation Error─ INCERR (QC 2.0)
        2.11  Weak Extern ─WKEXT
        2.12  COMENT Classes

Chapter 3  Extended .EXE Format for Debug Information

        3.1   Glossary
        3.2   Principles
            3.2.1    SubSections
            3.2.2    Linker
        3.3   Header Linkage
        3.4   SubSection Directory
        3.5   SubSection Data
        3.6   SubSection Types (sst)
            3.6.1    sstModules (101H)
            3.6.2    sstPublics (102H)
            3.6.3    sstType (103H)
            3.6.4    sstSymbols (104H)
            3.6.5    sstSrcLines (105H)
            3.6.6    sstLibraries (106H)
            3.6.7    sstCompacted (108H)
            3.6.8    sstSrcLnSeg (109H)
        3.7   A CodeView Sample Header File

Chapter 4  .ILK and .SYM Binary File Formats


Chapter 5  Library Format

        5.1   Library Header Record
        5.2   Object Modules
        5.3   Dictionary Blocks
            5.3.1    Symbol Collisions
            5.3.2    Symbol Entries
        5.4   Extended Dictionary


PART II  Browser Information
────────────────────────────────────────────────────────────────────────────


Chapter 6  Browser Library Tutorial

        6.1   Overview of BSCDUMP.C
        6.2   BSCDUMP Arguments
            6.2.1    List Commands
            6.2.2    Calltree Commands
            6.2.3    Browser Statistics
            6.2.4    List Symbol Commands

Chapter 7  Browser API Definitions

        7.1   Using the Browser Library
        7.2   Browser Database Functions
            7.2.1    Callback Functions
            7.2.2    Opening and Closing the Browser Database
            7.2.3    Querying the Database File
            7.2.4    Definitions and References (IDEF and IREF Variables)
            7.2.5    Uses/Used-by Information (IUSE and IUBY Variables)
        7.3   Miscellaneous Functions
            7.3.1
        7.4   Browser Objects
            7.4.1    Creating and Manipulating BOB Variables
            7.4.2    Performing Database Queries
        7.5   Generating Calltrees
        7.6   Listing Database References
        7.7   File Outline Functions
        7.8   String Processing Functions


PART III  Programmer's Workbench Extensions
────────────────────────────────────────────────────────────────────────────


Chapter 8  PWB State File Specification

        8.1   Current State File
        8.2   State File Structure
            8.2.1    Globally Shared Information
            8.2.2    Generic Tool Information
            8.2.3    Tool-Specific Information

Chapter 9  Creating PWB Extensions

        9.1   Extending PWB Functionality
        9.2   Major Components
        9.3   Arguments for PWB Functions
        9.4   Creating New Menus
        9.5   Adding Menu Options
        9.6   Modifying a Menu
        9.7   Windows
        9.8   File Buffers
        9.9   Miscellaneous API
        9.10  An Example Extension
        9.11  Building the Extension
        9.12  Tips and Hints
        9.13  The Argument Structure
        9.14  CURLYBRC.C
        9.15  Summary


Introduction
────────────────────────────────────────────────────────────────────────────

The Microsoft(R) C Developer's Toolkit Reference describes how to get the
most out of the Microsoft C Professional Development System.

This manual is divided into three parts. Part 1 defines many of the file
formats necessary to the compilation process. This includes the information
necessary to correctly interface with the Microsoft Object Module Format
(OMF) in both the CodeView(R) debugger and the C Compiler. It also defines
the formats for both extended executable files and the symbol files created
during compilation.

Part 2 both defines and demonstrates the use of the browser library. This
library makes it possible for you to produce call graphs from a C program
and more fully understand the structure of a program. A sample program
(BSCDUMP.C) is included to further demonstrate the use of the browser
library.

Finally, Part 3 describes how to create extensions for the Programmer's
WorkBench (PWB). One of the chapters is an article written by a developer of
a PWB extension. This will give prospective PWB extension developers a
real-life example of what is possible with the PWB integrated development
system.

The Developer's Toolkit Reference outlines the information necessary to
create seamless applications with the Microsoft C Professional Development
System.

────────────────────────────────────────────────────────────────────────────
NOTE
The pages that follow use the term "OS/2" to refer to the OS/2
systems─Microsoft Operating System/2 (MS(R) OS/2) and IBM(R) OS/2.
Similarly, the term "DOS" refers to both the MS-DOS(R) and IBM Personal
Computer DOS operating systems. The name of a specific operating system is
used when it is necessary to note features that are unique to the system.

────────────────────────────────────────────────────────────────────────────






PART I  File Formats
────────────────────────────────────────────────────────────────────────────

This is some text for the part openings. This is some text for the part
openings. This is some text for the part openings. This is some text for the
part openings.

This is some text for the part openings. This is some text for the part
openings. This is some text for the part openings. This is some text for the
part openings. This is some text for the part openings. This is some text
for the part openings.

Got the idea yet?






Chapter 1  Object Module Format for Symbolic Debugging
────────────────────────────────────────────────────────────────────────────

Microsoft C version 6.0 provides support in the 16-bit Debug OMF and Debug
.EXE format that goes beyond what was defined for C 5.x. This chapter
describes the specific changes affecting individual records within the
format. Be aware that, although this information is correct for C version
6.0, Microsoft makes no guarantee of backward compatibility. The changes can
be summarized as follows:


    ■   The .EXE signature has changed from "NB00" to "NB02" for all the
        records described in this chapter. Additionally, the signature "NB01"
        indicates output from LINK version 5.05, and "NB02" indicates output
        from LINK version 5.10, which was shipped with C 6.0. For
        interpretation purposes, NB01 and NB02 are currently identical.

    ■   Support for the _based pointer type.

    ■   Additions for _fastcall (register parameter passing) procedures. This
        is done through an addition to the Type leaves.



1.1  Type Representation

The following section gives informtion about the use of Type Index fields
and the TYPES Segment Definition.


1.1.1  Type Index

All OMF records for which a Type Index field is part of the specification
(including EXTDEF, PUBDEF, COMDEF, and SYMBOLS records) will have a valid
type index. Since many types are common, type index values in the range of
0-511 (0-1FFH) are reserved for a set of predefined primitive types.

Indexes in the range of 512-32,767 (200H-7FFFH) index into the set of type
definitions in the module's TYPES segment, relative to 512. Thus 512 is the
first new type, 513 the second, and so on. Type indexes greater than 32,767
(7FFFH) are invalid.

This information only applies to new-format objects; old-format objects
cannot have any valid type information.


1.1.2  TYPES Segment Definition

Type information appears in OMF-286 TYPDEF format in LEDATA records that are
part of a special TYPES debug segment. A SEGDEF record for this segment
produced in each module contains debug type information and has these
attributes:

Name:                             $$TYPES

Combine type:                     private

Class:                            DEBTYP

For a description of the format of $$TYPE definitions, see Section 1.4,
"Types Definition Segment (TYPES)."

For examples of how some of the predefined types are defined according to
the format, see Section 1.5, "Examples of TYPES Records for C Types."


1.2  Imported Symbols

$$Import Segment Definition and Representation are the topics discussed in
the following two subsections.


1.2.1  $$lmport Segment Definition

Under OS/2, much of the user program resides in DLLs. Since fix-ups to DLL
imports are done at program load time, neither the compiler nor the linker
can resolve the physical location of a DLL symbol. Thus any symbols found in
the DLL must be fixed up by the loader. So that the loader knows what to fix
up, the .EXE header contains pointers to the Module Reference Table and the
Import Name Table. The $$Import segment contains references to these tables,
but the location of the tables must be found from the .EXE header.

The loader does a symbol fix-up on the $$Import segment. It is up to the
debugger to search the $$Import segment for potential symbol references in a
DLL. The symbols in the $$Import table might be thought of as an extension
to the Publics table, except there is only one $$Import segment.


1.2.2  $$Import Representation

In this diagram of $$Import Representation the numbers above the fields
indicate the length in bytes.

        2       2       2         2
    +------+-------+--------+----------+
    | iMod | iName | offset | selector |
    +------+-------+--------+----------+

iMod                              Index into the Module Reference Table to
                                    the
                                    dynamic library name

iName                             Index into the Import Name Table
                                    indexing the
                                    symbol's name

offset                            Offset into the segment of the symbol

selector                          Selector of the DLL symbol

The number of entries in the $$Import segment is determined by the segment
size divided by the record length (8 bytes per record in the 16-bit OMF
format).

Note that the $$Import segment format is new to the OMF and is not stable.
The 32-bit format is not completely defined. Also, iMod may be changed to
iModName, where iModName points into the Import Name Table instead of the
Module Reference Table.


1.3  Symbol Representation

Two topics are discussed below: $$SYMBOLS Segment Definition and Symbols
Records.


1.3.1  $$SYMBOLS Segment Definition

Information about stack, local, procedure, block start, constant, and
register symbols and code labels goes in LEDATA records that are part of a
special SYMBOLS debug segment. A SEGDEF record for this segment is produced
that has these attributes:

Name:                             $$SYMBOLS

Combine type:                     private

Class:                            DEBSYM

Data in the SYMBOLS segment is a series of symbol records in a format
loosely based on OMF-286. Each record has the following form:

        1     1         *
    +-----+-----+-----------+
    | len | typ |  data ... |
    +-----+-----+-----------+

len                               Length of record, excluding first byte

typ                               Type of record

The record types are described in this chapter without the length byte.
Numbers above fields indicate length in bytes, and '*' means variable
length.

────────────────────────────────────────────────────────────────────────────
NOTE
This chapter describes the 16-bit OMF. The 16-bit OMF will have offsets of 2
bytes. This is denoted by the 2 above the offset field.
────────────────────────────────────────────────────────────────────────────


1.3.2  Description of SYMBOLS Records

This section describes SYMBOLS records.


Block Start

    1    2            2             *
    +---+--------+--------------+------------+
    | 0 | offset | block length | block name |
    +---+--------+--------------+------------+

offset                            Offset of the start of the block in the
                                    code segment

block length                      Length in bytes of the scope of this
                                    block

block name                        Optional name of the block


Block, Procedure, or With End

    1
    +---+
    | 2 |
    +---+

Closes the scope of the nearest preceding Block Start, Procedure Start, or
With Start definition.


BP-Relative Symbol

    1    2           2         *
    +---+--------+------------+------+
    | 4 | offset | type index | name |
    +---+--------+------------+------+

offset                            Signed, relative to BP

type index                        Index into the TYPES section indicating
                                    the type of this symbol

name                              Length-prefixed ASCII name of the symbol

────────────────────────────────────────────────────────────────────────────
NOTE:

Includes frame variables and parameters.
────────────────────────────────────────────────────────────────────────────


Local (Data) Symbols

Called static externals or file statics in C. While any type of local symbol
may have one of these records, there is no need for non-data symbols to use
them.

    1    2        2          2            *
    +---+--------+-----+------------+-------------+
    | 5 | offset | seg | type index | symbol name |
    +---+--------+-----+------------+-------------+

offset                            Offset of the symbol

seg                               Segment address of the symbol


Code Label

    1       2          1         *
    +---------+---------+----------+------+
    | 0BH(ll) | offset  | NEAR/FAR | name |
    +---------+---------+----------+------+

offset                            Offset from code segment

NEAR/FAR                          Near label = 0, far label = 4


With Start Symbol

    1       2         2         *
    +---------+--------+--------+---------+
    | 0CH(12) | offset | length | "value" |
    +---------+--------+--------+---------+

offset                            Offset of the start of the with block in
                                    the code
                                    segment

length                            Length in bytes of the scope of the with
                                    block

value                             ASCII string, evaluated at run time, of
                                    the value used in the with statement


Register Symbol

        1          2          1            *
    +---------+------------+----------+-------------+
    | 0DH(13) | type index | register | symbol name |
    +---------+------------+----------+-------------+

type index                        Type of the symbol

register                          Register the symbol is stored in. (For
                                    values of the register field, see
                                    Section 1.7,  "Codes for Register
                                    Variables.")

symbol name                       Name of the symbol


Constant Symbol

    1           2         *      *
    +---------+------------+-------+------+
    | 0EH(14) | type index | value | name |
    +---------+------------+-------+------+

type index                        Type of symbol

value                             Constant value of symbol

name                              Name of symbol


FORTRAN Entry

This has the same format as Procedure Start except its record ID is 0FH
(15).


Procedure Start

    1    2        2       2        2       2
    +---+--------+-------+--------+-------+-------+
    | 1 | offset | type  | proc.  | debug | debug | ->
    |   |        | index | length | start | end   | ->
    +---+--------+-------+--------+-------+-------+

        2           1         *
    +----------+----------+-------+
    | reserved | NEAR/FAR |  name |
    +----------+----------+-------+

offset                            Offset of the start of the procedure in
                                    the code
                                    segment

type index                        Type of the procedure

proc. length                      Length in bytes of this procedure

debug start                       Offset in bytes from the start of the
                                    procedure where the stack frame has been
                                    set up

debug end                         Offset in bytes from the start of the
                                    procedure where the procedure is ready
                                    to return and has calculated its return
                                    value, if any, but frame and register
                                    variables can still be viewed

reserved                          Field reserved for use by the debugger

NEAR/FAR                          Type of return the procedure makes:

                                    0           16-bit near

                                    4           32-bit far

name                              Name of the procedure


Skip Record

Reserves space for incremental builds. The compiler can reserve a dead space
in the OMF for future expansions due to an incremental build.

        1           *
    +-----------+-----------+
    |  l0H(16)  | Skip Data |
    +-----------+-----------+

Skip Data                         Unused data; use the len field that
                                    precedes every Symbol record to skip
                                    this record


Change Default Segment

This record was added for the alloc_ text option in C. This option allows
more than one segment per module. If the alloc_text pragma is used, the
$$Symbols table will contain the Change Default Segment record each time the
module's segment changes. Note that the first record in the $$Symbols table
must be a Change Default Segment record indicating the initial default
segment.

        1         2         2
    +---------+----------+----------+
    | 11H(17) | Segment  | reserved |
    +---------+----------+----------+

Segment                           Used by following Symbol information as
                                    the default segment

reserved                          Reserved for use by the debugger


1.4  Types Definition Segment (TYPES)

The format of the TYPES segment is a subset of the OMF-286 TYPDEF
mechanism.

A TYPES segment may appear in linkable modules. It provides descriptions of
the types of symbols found in the PUBLICS and SYMBOLS debug section. Type
internal names are keyed to the order of type definitions in TYPES. The
format of the TYPES segment is as follows:

            *
    +-----------------+
    | type definition | ...
    +-----------------+


1.4.1  Type Definition

A type definition has a linkage field, the length of the type definition (in
bytes), and the type definition itself. It is defined as follows:

        1        2           *
    +---------+--------+-------------+
    | linkage | length | type string |
    +---------+--------+-------------+

linkage                           Linkage = TRUE indicates that the
                                    following type definition is needed for
                                    public-external linkage.

                                    Linkage = FALSE indicates that the type
                                    is only defined for debug symbols.
                                    Initially, all TYPDEFs will have linkage
                                    = FALSE, since the linker does not do
                                    type checking.

                                    0           FALSE

                                    1           TRUE (or any nonzero value)

length                            Length in bytes of the following type
                                    string.


1.4.2  Type String

A type string is a series of consecutive leaves.

        *      *              *
    +------+------+       +------+
    | leaf | leaf | . . . | leaf |
    +------+------+       +------+


1.4.3  Start Leaves


Strings

        1       *
    +---------+--------+
    | 60H(96) | length |
    +---------+--------+

length                            Length of string in bits


List

        1        *
    +----------+------+
    | 7FH(127) | data |
    +----------+------+

data                              List of leaves whose format is defined
                                    by the leaf which indexes the list


Code Label

    1       1       1
    +----------+-----+----------+
    | 72H(144) | nil | NEAR/FAR |
    +----------+-----+----------+


Newtype

        1       3      *
    +---------+-------+------+
    | 5DH(93) | @type | name |
    +---------+-------+------+

Assigns another name to a previously defined type (for example, a simple
typedef in C).


Skip

This is used by incremental compilers to reserve space for future indexes.

    1          2        *
    +----------+-----------+-----+
    | 90H(144) | new index | pad |
    +----------+-----------+-----+

new index                         In searching $$Types, the index counter
                                    should be set to this index count,
                                    skipping all intermediate indexes. This
                                    is the next valid index.

pad                               Space reserved for incremental compiles.


1.4.4  Pointers

    1        1       3     *
    +----------+-------+------+------+
    | 7AH(122) | model | @type| name |
    +----------+-------+------+------+

model                             Size of the pointer; must be NEAR, FAR,
                                    or HUGE

type                              Type index of object pointed to

name                              (Optional) name of this type


1.4.5  Based Pointer

Based variables may be based on another variable or a segment, or may
require an explicit base (:> operator). And in some cases, the base of the
variable may not be known (the compiler knows segment names, but not segment
numbers; the debugger knows segment numbers but not names; the linker knows
both but doesn't pass segment names onto the debugger). The base field
describes the base of the based variable.

    1        3      *
    +----------+-------+------+
    | 91H(145) | @type | base |
    +----------+-------+------+

type                              Type index of the declared based
                                    variable

base                              Leaf that describes the base pointer

The valid component leaves are described in the next four sections.


BASEDSEG

When a base pointer is based on a segment (or segment name), the segment is
needed. This leaf describes which segment the base pointer is based on.

    1       2
    +-----------+-----+
    |  92H(146) | seg |
    +-----------+-----+

seg                               Segment at which to base the base
                                    pointer; this is the paragraph address
                                    of the segment as opposed to an OMF
                                    segment index


BASEDVAL

When a base pointer is based on the value of another variable, the location
of the base is needed. This leaf points to that base in the $$Symbol
segment. For example, the following declaration would generate a BASEDVAL
base pointer:

    char _based(lpch) *lp;

    1        2        *
    +-----------+--------+
    |  93H(147) | offset |
    +-----------+--------+

offset                            Given the same module as the BASED leaf,
                                    the base can be found at offset in the
                                    $$Symbol segment.


BASEDSEGVAL

This case is similar to BASEDVAL with one exception. Only the segment
portion of the symbol pointed to will be used. For example, the following
declaration would generate a BASEDSEGVAL base pointer:

    char_based( (_segment) lpch ) *lp;

Only the segment portion of lpch will be used in calculating the actual
address of lp; that is,

    lp -> FP_ SEG(lpch):FP_OFF(lp)

    1        2
    +----------+--------+
    | 94H(148) | offset |
    +----------+--------+

offset                            Given the same module as the BASED leaf,
                                    the base can be found at offset in the
                                    $$Symbol segment.


BASEDSEGADDR

In this case, only the segment portion of the symbol pointed to will be
used. For example, the following declaration would generate a BASEDSEGADDR
base pointer:

    char _based( (_segment) &lpch ) *lp;

Only the segment portion of the address lpch will be used in calculating the
actual address of lp; that is,

    lp -> FP_SEG(&lpch):FP_OFF(lp)

        1        2       *
    +----------+--------+
    | 98H(152) | offset |
    +----------+--------+

offset                            Given the same module as the BASED leaf,
                                    the base can be found at offset in the
                                    $$Symbol segment.

Based on Type - This is used when the pointer is based on type; that is,

    char _based(void) *lp;

    1        2
    +----------+------+
    | 83H(131) | @type|
    +----------+------+

@type                             Type index of base

Based on Self - This is used for the based-on-self construct; that is,

    char _based( (_segment)_self) *lp;

    1
    +----------+
    | 80H(128) |
    +----------+


1.4.6  Scalars

The full form of a scalar type is

    1        *       1      *       *      *       *

    +----------+--------+------+------+-------+------+------+
    | 7BH(123) | length | type | name | style | lbnd | ubnd |
    +----------+--------+------+------+-------+------|------+

length                            Length in bits of object

type                              Usually a type leaf, such as SGNINT,
                                    UNSINT, or REAL; or an index to another
                                    type definition

name                              (Optional) name given to this type

style                             Method of representation in memory of
                                    values of this type

lbnd, ubnd                        Minimum and maximum values that the
                                    scalar is allowed to take; may be useful
                                    to describe array bounds or ranges

The simplest form of the scalar type will include only the first three
leaves. This represents the C character type:

    +-----+---+--------+
    | 7BH | 8 | SGNINT |
    +-----+---+--------+

Some languages allow types which are primitive but have restrictions imposed
on them. For example, the Pascal type

    type index = 1..10

can be described by

    +-----+----+--------+---------+-----+---+----+
    | 7BH | 16 | SGNINT | "index" | nil | 1 | 10 |
    +-----+----+--------+---------+-----+---+----+

Enumeration types can also be described by this method. As an example, the
Ada type

    type stoplight is (red, amber, green);

can be described by

    +-----+----+--------+-------------+--------+---+---+
    | 7BH | 16 | SGNINT | "stoplight" | @eLIST | 0 | 2 |
    +-----+----+--------+-------------+--------+---+---+

where eList is an index to the enumList:

    +----------+-------+---+---------+---+---------+---+
    | enumLIST | "red" | O | "amber" | 1 | "green" | 2 |
    +----------+-------+---+---------+---+---------+---+


1.4.7  Structures

This section describes the format for structures in C 4.x, C 5.x, and C 6.0.


        1        *      *       3        3       *    1
    +----------+-----+-------+--------+--------+------+---+
    | 79H(121) | len | count | @tLIST | @nLIST | name | p |
    +----------+-----+-------+--------+--------+------+---+

len                               Size in bits of structure

count                             Number of fields

_@tLIST                           Index to list of field types

_@nLIST                           Index to list of field names and offsets

name                              (Optional) name or tag of this type

    p                                (Optional) basic type leaf telling
                                    whether or not the structure is packed


tList

    1       3
    +------+---------+
    | LIST |  INDEX  | ...
    +------+---------+
            |         |
            -repeated--

INDEX                             Leaf index


nLlST

    1     *       *
    +------+------+--------+
    | LIST | name | offset | ...
    +------+------+--------+
            |               |
            ----repeated-----

offset                            In bytes from start of structure

name                              Length-prefixed name of structure member


1.4.8  Bitfields

Bitfields will be represented by an entry in the tLlST index which indexes a
BITFIELD type definition:

        1       *          1             1
    +---------+--------+------------+----------+
    | 5CH(92) | length | basic_type | position |
    +---------+--------+------------+----------+

length                            Length in bits of the object

basic_type                        Type of the object; must be SGNINT or
                                    UNSINT

position                          Starting position (from bit 0) of the
                                    object in the word


1.4.9  Procedures

    1       1      3        1         *       3
    +----------+-----+---------+---------+--------+-------+
    | 75H(117) | nil | @rvtype | calling | #parms | @list |
    +----------+-----+---------+---------+--------+-------+`

        1       3              3
    +------+-------+     +-------+
    | LIST | @type | ... | @type |
    +------+-------+     +-------+

rvtype                            Type index of the value returned by the
                                    procedure

calling                           Calling convention of the procedure:

                                    63H         C (args pushed right to left,
                                                caller pops args) short

                                    64H         C long

                                    95H         NEAR FASTCALL

                                    96H         FAR FASTCALL

parms                             Number of parameters

list                              Type index of list of type indexes for
                                    the
                                    parameters


Arrays

        1        *          3           3          *
    +----------+--------+------------+-----------+------+
    | 78H(120) | length | @elem_type | @idx_type | name |
    +----------+--------+------------+-----------+------+

length                            Size in bits of array

elem_type                         Type index of array element

idx_type                          (Optional) type index of indexing
                                    method; default is
                                    integer

name                              (Optional) name or tag of this type


Basic Arrays

        1          3
    +----------+-----------+
    | 8CH(140) | @ele_type |
    +----------+-----------+

ele_type                          Type index of array element type


FORTRAN Strings

        1       1         *
    +----------+-----+-------------+
    | 8DH(141) | tag | information |
    +----------+-----+-------------+

Describes a FORTRAN string. There are two variants to this type string:

        1     1     *
    +-----+----+--------+
    | 8DH | 0H | length |
    +-----+----+--------+

length                            Length of a fixed-length FORTRAN string

    1     1      *
    +-----+----+--------+
    | 8DH | IH | offset |
    +-----+----+--------+

offset                            BP-relative offset which at run time
                                    contains the length of a string


FORTRAN Array Indexes

        1       1         *
    +----------+-----+-------------+
    | 8EH(142) | tag | information |
    +----------+-----+-------------+

Describes a FORTRAN array index. It takes on the variants described below.
Note that all names are string leaves.

        1     1      *
    +-----+----+-----------+
    | 8EH | lH | low_bound |
    +-----+----+-----------+

low_bound                         Lower bound of the index

Used when the index for a dimension of the array takes the form of a(1:*).
This is not currently generated by the Microsoft FORTRAN Compiler version
4.0.

        1     1       *          *
    +-----+----+-----------+----------+
    | 8EH | 2H | low_bound | hi_bound |
    +-----+----+-----------+----------+

low_bound                         Lower bound of the index

hi _bound                         Upper bound of the index

This is the case for regular FORTRAN array indices, i.e., a(l:10), or when
abbreviated, a(10). This is not currently generated by the Microsoft FORTRAN
Compiler version 4.0.

        1     1       *          *
    +-----+----+-----------+---------+
    | 8EH | 3H | low_bound | hi_name |
    +-----+----+-----------+---------+

low_bound                         Lower bound of the index

hi_name                           Name of a BP-relative symbol which at
                                    run time will contain the upper bound of
                                    the index

This is for the case where the upper bound of an index is an expression,
i.e., a(1:m). This is not currently generated by the Microsoft FORTRAN
Compiler version 4.0.

        1     1       *          *
    +-----+----+----------+----------+
    | 8EH | 4H | low_name | hi_bound |
    +-----+----+----------+----------+

low_name                          Name of a BP-relative symbol which at
                                    run time will contain the lower bound or
                                    the index

hi_bound                          Upper bound of the index

This is for the case where the lower bound of an index is an expression,
i.e., a(m:10). This is not currently generated by the Microsoft FORTRAN
Compiler version 4.0.

        1     1       *          *
    +-----+----+----------+---------+
    | 8EH | 5H | low_name | hi_name |
    +-----+----+----------+---------+

low_name                          Name of a BP-relative symbol which at
                                    run time will contain the lower bound of
                                    the index

hi_name                           Name of a BP-relative symbol which at
                                    run time will contain the lower bound of
                                    the index

This is for the case where both the upper and lower bound of an index are
expressions, i.e., a(m:n). This is not currently generated by the Microsoft
FORTRAN Compiler version 4.0.

    1     1     *
    +-----+----+-------+
    | 8EH | 6H | value |
    +-----+----+-------+

value                             Value used in the index calculation of
                                    arrays

This is currently generated by the Microsoft FORTRAN Compiler version 4.0.

        1     1     *
    +-----+----+------+
    | 8EH | 7H | name |
    +-----+----+------+

name                              Name of a BP-relative symbol which
                                    contains a value to be used in array
                                    index calculation at run time

This is currently generated by the Microsoft FORTRAN Compiler version 4.0.


1.4.10  Component Leaves

This section contains the full set of component leaves in the symbolic
debugging OMF.


Null (nil/easy) Leaf

A null leaf is assumed to be an "easy" null leaf; that is, it will match any
other leaf.

        1
    +----------+
    | 80H(128) |
    +----------+


Index Leaf

        1       *
    +----------+-------+
    | 83H(131) | index |
    +----------+-------+

index                             Type index; leaves beginning with "@"
                                    are index leaves


String Leaf

        1        *
    +----------+------+
    | 82H(130) | name |
    +----------+------+

name                              Length-prefixed string; fields below
                                    with the description "name" are
                                    understood to be string leaves


Unsigned Numeric Leaves

        1
    +-----+
    |  m  |
    +-----+

    1       2
    +----------+---+
    | 85H(133) | n |
    +----------+---+

        1       4
    +----------+---+
    | 86H(134) | n |
    +----------+---+

        1       8
    +----------+---+
    | 87H(135) | n |
    +----------+---+

m                                 Number from 0-127

n                                 Any unsigned number which fits in the
                                    indicated space


Signed Numeric Leaves

        1       1
    +----------+---+
    | 88H(136) | s |
    +----------+---+

        1       2
    +----------+---+
    | 89H(137) | s |
    +----------+---+

        1       4
    +----------+---+
    | 8AH(138) | s |
    +----------+---+

        1       8
    +----------+---+
    | 8BH(139) | s |
    +----------+---+

s                                 Any signed number which fits in the
                                    indicated space

Table 1.1 gives an alphabetical listing of type leaves. Notice that the
index is presented in both hexadecimal and decimal formats.

Table   1.1 Alphabetical List of Type Leaves

╓┌─────────────┌──────────┌─┌─────────────────────┌──────────────────────────╖
Leaf Name     Index        Leaf Name             Index
────────────────────────────────────────────────────────────────────────────
ARRAY         78H (120)    NEAR FASTCALL         95H (149)

BARRAY        8CH (140)    NEWTYPE               5DH (93)

BASEDADDR     97H (151)    Nil                   80H (128)

BASEDSEG      92H (146)    PACKED                68H (104)

BASEDSEGADDR  98H (152)    PARAMETER             76H (118)

BASEDSEGVAL   94H (148)    POINTER               7AH (122)

BASEDVAL      93H (147)    PROCEDURE             75H (117)

BITFIELD      5CH (92)     REAL                  7EH (126)

BOOLEAN       6CH (108)    SCALAR                7BH (123)

C NEAR        63H (9F)     SIGNED INTEGER        7DH (125)
Leaf Name     Index        Leaf Name             Index
────────────────────────────────────────────────────────────────────────────
C NEAR        63H (9F)     SIGNED INTEGER        7DH (125)

C FAR         64H (100)    SKIP                  90H (144)

CHARACTER     6FH (111)    STRING                82H (130)

CONST         71H (113)    STRINGS               60H (96)

FAR           73H (115)    STRUCTURE             79H (121)

FAR FASTCALL  96H (150)    TAG                   5AH (90)

FSTRING       8DH (141)    UNPACKED              69H (105)

FARRIDX       8EH (142)    UNSIGNED INTEGER      7CH (124)

HUGE          5EH (94)     VARIANT               5BH (91)

INDEX         83H (131)    16-bit unsigned       85H (133)
Leaf Name     Index        Leaf Name             Index
────────────────────────────────────────────────────────────────────────────
INDEX         83H (131)    16-bit unsigned       85H (133)
                            number

INTEGER       70H (112)    32-bit unsigned       86H (134)
                            number

LABEL         72H (114)    8-bit signed number   88H (136)

LIST          7FH (127)    16-bit signed number  89H (137)

NEAR          74H (116)    32-bit signed number  8AH (138)

────────────────────────────────────────────────────────────────────────────




1.5  Examples of TYPES Records for C Types

These are examples of how the typing mechanism can be used for some common
and uncommon types in the C language. Since many of the common types have
been predefined (see Section 1.6, "Predefined Primitive Types"), these types
will indicate the predefined type corresponding to the example type
definition.

    char (predefined type T_CHAR)

    +--------+---+--------+
    | SCALAR | 8 | SGNINT |
    +--------+---+--------+

    int, short (predefined type T_ SHORT)

    +--------+----+--------+
    | SCALAR | 16 | SGNINT |
    +--------+----+--------+

    long (predefined type T_ LONG)

    +--------+----+--------+
    | SCALAR | 32 | SGNINT |
    +--------+----+--------+

    unsigned char (predefined type T_ UCHAR)

    +--------+---+--------+
    | SCALAR | 8 | UNSINT |
    +--------+---+--------+

    unsigned int,  short, unsigned (predefined type T_ USHORT)

    +--------+----+--------+
    | SCALAR | 16 | UNSINT |
    +--------+----+--------+

    unsigned long (predefined type T_ ULONG)

    +--------+----+--------+
    | SCALAR | 32 | UNSINT |
    +--------+----+--------+

    float (predefined type T_ REAL32)

    +--------+----+------+
    | SCALAR | 32 | REAL |
    +--------+----+------+

    double (predefined type T_ REAL64)

    +--------+----+------+
    | SCALAR | 64 | REAL |
    +--------+----+------+

    char [10]

    +-------+----+------------+
    | ARRAY | 80 | @char_type |
    +-------+----+------------+

    struct event {
        int         rank;
        long        date;
    };


1.5.1  C 5.0/C 6.0 Structures

New structures introduced with C5.0/C6.0 have the following form:

    +-----------+----+---+--------+--------+---------+
    | STRUCTURE | 48 | 2 | @tLIST | @sLIST | "event" |
    +-----------+----+---+--------+--------+---------+

    +-------+-----------+------------+
    | tLIST | @int_type | @long_type |
    +-------+-----------+------------+

    +-------+--------+---+--------+---+
    | sLIST | "rank" | 0 | "date" | 2 |
    +-------+--------+---+--------+---+

    enum {club, spade, heart, diamond} suit;

    +--------+----+--------+--------+--------+---+
    | SCALAR | 16 | SGNINT | "suit" | @eLIST | 4 |

    +--------+----+--------+--------+--------+---+

    +-------+--------+---+---------+---+---------+---+
    | eLIST | "club" | O | "spade" | 1 | "heart" | 2 |
    ...
    +-------+--------+---+---------+---+---------+---+

    char * (predefined type T_ PCHAR)

    +---------+------------+
    | POINTER | @char_type |
    +---------+------------+

    char  _based(_segname("foo")) *pbased;

    +-------+-------+----------+---------------------+
    | BASED | @type | BASEDSEG | segment ptr for foo |
    +-------+-------+----------+---------------------+

    char *pb;
    char _based(pb) *pbased;

    +-------+-------+----------+-------------------+
    | BASED | @TYPE | BASEDVAL | SYM offset for pb |
    +-------+-------+----------+-------------------+


1.6  Predefined Primitive Types

Types 0-511 are reserved. Types 0-255 (high byte = 0) have meaning according
to the decoding of the following bits:

    xxxx xxxx x xx xxx xx
    xxxx xxxx i md typ sz

The format of Type Index (and Reserved Types) is illustrated in the next
four tables.

Table 1.2, Format of i

i                                 Action
────────────────────────────────────────────────────────────────────────────
i0                                Special type, not interpreted as follows
                                    (see "Special Types" below

1                                 Low 7 bits are interpreted as follows:

Table 1.3, Format of md

md Mode
────────────────────────────────────────────────────────────────────────────
00                                Direct

01                                Near Pointer

10                                Far pointer

11                                Huge pointer

Table 1.4, Format of typ

typ                               Basic type
────────────────────────────────────────────────────────────────────────────
000                               Signed

001                               Unsigned

010                               Real

011                               Complex

100                               Boolean

101                               ASCII

110                               Currency

111                               Reserved

Table   1.5 Format of sz

sz   Size      (Real)   (Complex)  (Currency)
────────────────────────────────────────────────────────────────────────────
00   8-bit     4-byte   8-byte     Reserved
01   16-bit    8-byte   16-byte    8-byte
10   32-bit    10-byte  20-byte    Reserved
11   Reserved
────────────────────────────────────────────────────────────────────────────

Tables 1.6 and 1.7 list the predefined primitive types of the symbolic
debugging OMF.

Table   1.6 Special Types (8th bit = 0)

Name      Value  Description
────────────────────────────────────────────────────────────────────────────
T_NOTYPE  0      Uncharacterized type (no type)
T_ABS     1      Absolute symbol
────────────────────────────────────────────────────────────────────────────

Table   1.7 Primitive Type Listing (8th bit = 1)

╓┌──────────┌─────────┌──────────────────────────────────────────────────────╖
Name       Value     Description
────────────────────────────────────────────────────────────────────────────
T_CHAR     80H       8-bit signed
T_SHORT    8lH       16-bit signed
T_LONG     82H       32-bit signed
T_UCHAR    84H       8-bit unsigned
T_USHORT   85H       16-bit unsigned
T_ULONG    86H       32-bit unsigned
T_REAL2    88H       32-bit real
T_REAL64   89H       64-bit real
T_REAL80   8AH (10)  80-bit real
T_CPLX64   8CH (12)  64-bit complex
T_CPLX128  8DH (13)  128-bit complex
T_CPLX160  8EH (14)  160-bit complex
T_BOOL08   90H (16)  8-bit Boolean


Table   1.7 Primitive Type Listing (8th bit = 1) (continued)

╓┌─────────────┌──────────┌──────────────────────────────────────────────────╖
Name          Value      Description
────────────────────────────────────────────────────────────────────────────
T_BOOL16      91H (17)   16-bit Boolean
T_BOOL32      9H (18)    32-bit Boolean
T_ ASCII      94H (20)   8-bit character
T_ASCII16     95H (21)   16-bit characters
T_ASCII32     96H (22)   32-bit characters
T_BSTRING     97H (23)   Basic string type
T_PCHAR       A0H (32)   Near pointer to 8-bit signed
T_PSHORT      A1H (33)   Near pointer to 16-bit signed
T_PLONG       A2H (34)   Near pointer to 32-bit signed
T_PUCHAR      A4H (36)   Near pointer to 8-bit unsigned
T_PUSHORT     A5H (37)   Near pointer to 16-bit unsigned
T_PULONG      A6H (38)   Near pointer to 32-bit unsigned
T_PREAL32     A8H (40)   Near pointer to 32-bit real
T_ PREAL64    A9H (41)   Near pointer to 64-bit real
T_ PREAL80    AAH (42)   Near pointer to 80-bit real
T_PCPLX64     ACH (44)   Near pointer to 64-bit complex
T_PCPLX128    ADH (45)   Near pointer to 128-bit complex
T_ PCPLX160   AEH (46)   Near pointer to 160-bit complex
T_PBOOL08     B0H (48)   Near pointer to 8-bit Boolean
Name          Value      Description
────────────────────────────────────────────────────────────────────────────
T_PBOOL08     B0H (48)   Near pointer to 8-bit Boolean
T_PBOOL16     B1H (49)   Near pointer to 16-bit Boolean
T_PBOOL32     B2H (50)   Near pointer to 32-bit Boolean
T_PASCII      B4H (52)   Near pointer to 8-bit character
T_PASCII16    B5H (53)   Near pointer to 16-bit character
T_PASC1132    B6H (54)   Near pointer to 32-bit character
T_PBSTRING    B7H (55)   Near pointer to Basic string
T_PFCHAR      C0H (64)   Far pointer to 8-bit signed
T_PFSHORT     C1H (65)   Far pointer to 16-bit signed
T_PFLONG      C2H (66)   Far pointer to 32-bit signed
T_PFUCHAR     C4H (68)   Far pointer to 8-bit unsigned
T_PFUSHORT    C5H (69)   Far pointer to 16-bit unsigned
T_PFULONG     C6H (70)   Far pointer to 32-bit unsigned
T_PFREAL32    C8H (72)   Far pointer to 32-bit real


Table   1.7 Primitive Type Listing (8th bit = 1) (continued)

╓┌────────────┌───────────┌──────────────────────────────────────────────────╖
Name         Value       Description
────────────────────────────────────────────────────────────────────────────
T_PFREAL64   C9H (73)    Far pointer to 64-bit real
T_PFREAL80   CAH (74)    Far pointer to 80-bit real
T_PFCPLX64   CCH (76)    Far pointer to 64-bit complex
T_PFCPLX128  CDH (77)    Far pointer to 128-bit complex
T_PFCPLX160  CEH (78)    Far pointer to 160-bit complex
T_PFBOOL08   D0H (80)    Far pointer to 8-bit Boolean
T_PFBOOL16   D1H (81)    Far pointer to 16-bit Boolean
T_PFBOO132   D2H (82)    Far pointer to 32-bit Boolean
T_PFASCII    D4H (84)    Far pointer to 8-bit character
T_PFASCII16  D5H (85)    Far pointer to 16-bit character
T_PFASCII32  D6H (86)    Far pointer to 32-bit character
T_PFBSTRING  D7H (87)    Far pointer to Basic string
T_PHCHAR     E0H (96)    Huge pointer to 8-bit signed
T_PHSHORT    E1H (97)    Huge pointer to 16-bit signed
T_PHLONG     E2H (98)    Huge pointer to 32-bit signed
T_PHUCHAR    E4H (100)   Huge pointer to 8-bit unsigned
T_PHUSHORT   E5H (101)   Huge pointer to 16-bit unsigned
T_PHULONG    E6H (102)   Huge pointer to 32-bit unsigned
T_PHREAL32   E8H (104)   Huge pointer to 32-bit real
Name         Value       Description
────────────────────────────────────────────────────────────────────────────
T_PHREAL32   E8H (104)   Huge pointer to 32-bit real
T_PHREAL64   E9H (105)   Huge pointer to 64-bit real
T_PHREAL80   EAH (106)   Huge pointer to 80-bit real
T_PHCPLX64   ECH (108)   Huge pointer to 64-bit complex
T_PHCPLX128  EDH (109)   Huge pointer to 128-bit complex
T_PHCPLX160  EEH (110)   Huge pointer to 160-bit complex
T_PHBOOL08   F0H (112)   Huge pointer to 8-bit Boolean
T_PHBOOL16   F1H (113)   Huge pointer to 16-bit Boolean
T_PHBOOL32   F2H (114)   Huge pointer to 32-bit Boolean
T_PHASCII    F4H (116)   Huge pointer to 8-bit character
T_PHASC1116  F5H (117)   Huge pointer to 16-bit character
T_PHASC1132  F6H (118)   Huge pointer to 32-bit character
T_PHBSTRING  F7H (119)   Huge pointer to Basic string
────────────────────────────────────────────────────────────────────────────



1.7  Codes for Register Variables

Table 1.8 gives the codes for register variables.

Table   1.8 Register Variables

╓┌──────────────────┌─────────┌──────────────────────────────────────────────╖
Register Type      Register  Code
────────────────────────────────────────────────────────────────────────────
8-bit registers    0         AL
                    1         CL
                    2         DL
                    3         BL
                    4         AH
                    5         CH
                    6         DH
                    7         BH
16-bit  registers  8         AX
                    9         CX
                    10        DX
                    11        BX
                    12        SP
                    13        BP
Register Type      Register  Code
────────────────────────────────────────────────────────────────────────────
                    13        BP
                    14        SI
                    15        DI
32-bit registers   16        EAX
                    17        ECX
                    18        EDX
                    19        EBX
                    20        ESP
                    21        EBP
                    22        ESI
                    23        EDI


Table   1.8 Register Variables (continued)

╓┌────────────────────┌─────────┌────────────────────────────────────────────╖
Register Type        Register  Code
────────────────────────────────────────────────────────────────────────────
Segment registers    24        ES
Register Type        Register  Code
────────────────────────────────────────────────────────────────────────────
Segment registers    24        ES

                        25        CS

                        26        SS

                        27        DS

                        28        FS

                        29        GS

Special cases        32        DX:AX

                        33        ES:BX

                        34        IP

                        35        FLAGS
Register Type        Register  Code
────────────────────────────────────────────────────────────────────────────
                        35        FLAGS

Register extensions  128       ST(0)
for 8087/287/387

                        129       ST(1)

                        130       ST(2)

                        131       ST(3)

                        132       ST(4)

                        133       ST(5)

                        134       ST(6)

────────────────────────────────────────────────────────────────────────────

Register Type        Register  Code
────────────────────────────────────────────────────────────────────────────








Chapter 2  Object Module Format Extensions
────────────────────────────────────────────────────────────────────────────

This chapter serves as a guideline to the extensions introduced to the
Microsoft OMF since its publication in the Microsoft MS-DOS Encyclopedia.
This information may be modified in the future, and Microsoft cannot
guarantee backward compatibility. This means that any software you develop
using information provided in this chapter may not be compatible with future
versions of the OMF extensions.


2.1  BAKPAT Record (QC 1.0)─B2h, B3h

This record is for backpatches to locations which cannot be conveniently
handled by a FIXUPP at reference time (for example, forward references in a
one-pass compiler). It is essentially a specialized fix-up. The following
diagram shows the format of BAKPAT:

        1          2         *       1       2       2        1

    +---------+--------+--//-----+--------+--------+--------+--------+

    | B2H(178)| RECLEN | SEGIND  | LOCTYP | OFFSET | VALUE  | CHKSUM |
    +---------+--------+--//-----+--------+--------+--------+--------+

                                        |                 |
                                        +-----repeated----+

The following list explains the record elements of BAKPAT:

Record Elements                   Description
────────────────────────────────────────────────────────────────────────────
RECTYP                            0xb2 (178) or 0xb3 (179).

RECLEN                            Record length.

SEGIND                            Segment index formed as in an LEDATA
                                    record; i.e., indexes less than 0x80 are
                                    a single byte
                                    and indexes greater than 0x80 are formed
                                    by
                                    (0x80 | hibyte), lobyte.

LOCTYP                            Type of location to be patched.

                                    0           8-bit lobyte

                                    1           16-bit offset

                                    2           32-bit offset (0xb3 record
                                                only)

                                    The VALUE field will be fixed length (16-
                                    or 32-bit according to RECTYP),
                                    regardless of LOCTYP, to make .OBJ
                                    processing easier.

OFFSET                            Offset into the segment to be patched
                                    (16 bits if RECTYP = 0xb2, 32 bits if
                                    RECTYP = 0xb3).

VALUE                             Value to add to the location being
                                    patched (16 bits if      RECTYP = 0xb2,
                                    32 bits if RECTYP = 0xb3).

CHKSUM                            Record checksum.

BAKPAT records can occur anywhere in the object module following the SEGDEF
to which they refer. They do not have to follow the appropriate LEDATA
record immediately, as FIXUPP records do.

For every module, the linker buffers all BAKPAT records in pass two until
the end of the module and then processes them as fix-ups.


2.2  Local Symbols (C 5.0)─B4h, B6h, B7h, B8h

Three new record types handle local symbols, as shown in Table 2.1.

Table 2.1  New Record Types

╓┌────────────┌─────────────────────────┌────────────────────────────────────╖
Record Type
────────────────────────────────────────────────────────────────────────────
LEXTDEF      0xb4 (180)                EXTDEF
LPUBDEF      0xb6 (182) or 0xb7 (183)  PUBDEF
LCOMDEF      0xb8 (184)                COMDEF
────────────────────────────────────────────────────────────────────────────


You can use LEXTDEF, LPUBDEF, and LCOMDEF in exactly the same manner as
EXTDEF, PUBDEF, and COMDEF except that the symbols are not visible outside
the module where they are defined (for example, C statics).

The LPUBDEF record is extended for the 80386 in exactly the same way as the
PUBDEF record.


2.3  New OMF Comment─Class A1h

A comment record with class A1h indicates that the obsolete method of
communal representation via TYPDEF and EXTDEF pairs is not used, and that
COMDEF records can be interpreted. The meaning of this record is undergoing
revision.


2.4  IMPDEF (OS/2, Windows)─Comment Class A0h, Subtype 1

The Import Definition (IMPDEF) record takes the form of a COMENT record with
class 0xa0:

    DB      88h         ; COMENT
    DW      reclen      ; record length
    DB      00h         ; for Intel compatibility
    DB      A0h         ; class: OMF extension
    DB      01h         ; subtype: IMPDEF
    DB      fOrd        ; nonzero value means import by ordinal
    ; Internal Name
    DB      n           ; length of name
    DB      n dup(?)    ; ASCII text of name
    ; Module Name
    DB      n           ; length of name
    DB      n dup(?)    ; ASCII text of name

    IF import by name (fOrd == 0)

    ; Imported Name: if length byte is 0 then imported name is
    ; identical to internal name.
    ;
    DB      n           ; length of name
    DB      n dup(?)    ; ASCII text of name
    ELSE
    DW      ordno       ; ordinal number
    ENDIF
    DB      checksum


2.5  EXPDEF (C 5.1)─Comment Class A0h, Subtype 2

The Export Definition (EXPDEF) record takes the form of a COMENT record with
class 0xa0:

    DB      88h         ; COMENT
    DW      reclen      ; record length
    DB      00h         ; for Intel compatibility
    DB      A0h         ; class: OMF extension
    DB      02h         ; extension type: EXPDEF
    DB      flags
        ;   80h = set if ordinal number specified
        ;   40h = set if RESIDENTNAME
        ;   20h = set if NODATA
        ;   1Fh = # of parameter words
    ;Exported name:
    DB      n           ; length of name
    DB      n dup(?)    ; ASCII text of name
    ; IF internal name different from exported name:
    DB      n           ; length of name
    DB      n dup(?)    ; ASCII text of name
    ; ELSE internal name same as exported name:
    DB      00h
    ; IF ordinal number specified
    DW      ordno       ; ordinal number
    DB      checksum


2.6  Link-Pass-2 Comment Record (C 5.0)─ Class A2h

For the linker to take advantage of "1-1/2 pass" linking, you need to
generate a new comment record indicating the start of Link-Pass-2 records.
The class field for this record is 162 (0xa2), followed by a byte with the
value 01, followed by anything you want or nothing at all. For example, the
following diagrams the record structure and is followed by a list describing
its contents:

    0  1  2  3  4  5  6
    000:   88 04 00 00 a2 01 <cs>

╓┌───────┌────────┌──────────────────────────────────────────────────────────╖
Offset  Content
Offset  Content
────────────────────────────────────────────────────────────────────────────
0       88       Record type = COMENT

1-2     0004     Record length excluding first 3 bytes

3       00       Attribute: must be zero

4       A2       Class 162: MS OMF extension

5       01       Sub-extension 1: start Link-Pass-2

6       <cs>     Checksum: the linker doesn't verify it but other
                    utilities like RANLIB do

────────────────────────────────────────────────────────────────────────────



All LEDATA, LIDATA, FIXUPP, LINNUM, and MODEND records must go after the
comment record, and all other records must go before.


2.7  Incremental Compilation─INCDEF (QC 2.0)

The Incremental Definition (INCDEF) record takes the form of a COMENT record
with class 0xa0:

    DB    88h       ; COMENT
    DW    reclen    ; record length
    DB    00h       ; for Intel compatibility
    DB    A0h       ; class: OMF extension
    DB    03h       ; extension type: INCDEF (INCremental DEFinition)

    DW    extdel    ; EXTDEF delta (signed)
    DW    lindel    ; LINNUM delta (signed)
    DB    ? dup(?)  ; padding
    DB    checksum

Every subsequent FIXUPP and LINNUM record will adjust all external index
values and line number values by the appropriate delta. The deltas are
cumulative if there is more than one INCDEF per module.


2.8  LIBMOD Comment Record─Class A3h (LIB 3.07 in MASM 5.00)

The LIBMOD comment record identifies the name of a library module:

    DB    88h       ; COMENT
    DW    reclen    ; record length
    DB    00h       ; for Intel compatibility
    DB    A3h       ; class: LIBrary MODule name
    DB    N         ; length of module name
    DB    N dup(?)  ; ASCII text of module name
    DB    checksum  ; or 0

This record allows LIB to preserve the source file name in the THEADR record
and still identify the module name. Since the module name is the base name
of the .OBJ file, the two names may be completely different.

LIB adds a LIBMOD record when a .OBJ file is added to a library and strips
the LIBMOD record when a .OBJ file is removed from a library, so typically
this record exists only in .LIB files.


2.9  EXESTR Comment Record─ Class A4h (C 5.2)

The EXESTR comment record identifies text to be copied by the linker:

    DB      88h       ; COMENT
    DW      reclen    ; record length
    DB      00h       ; for Intel compatibility
    DB      A4h       ; class: EXEcutable STRing
    DB      ? dup(?)  ; arbitrary text
    DB      checksum  ; or 0

The EXESTR comment record implements these ANSI and XENIX/UNIX features in
C:

    #pragma comment(exestr, <char-sequence>)
    #ident string

The linker will copy the text in the "arbitrary text" field byte-for-byte to
the end of the executable file. The text will not be included in the program
load image. If CodeView information is present, the text will not be at the
end of the file but somewhere before so as not to interfere with the
CodeView signature.

There is no limit on the number of EXESTR comment records.


2.10  Incremental Compilation Error─ INCERR (QC 2.0)

A COMENT record with a class value of 0xA6 will cause the linker to
terminate with a fatal error to the effect of "invalid object─error
encountered during incremental compilation." This is for the case when an
incremental compilation fails and the user tries to link manually. The
object cannot be deleted, in order to preserve the base for the next
incremental compilation.

    NOPAD─No Segment Padding

    DB      88h             ; COMENT
    DW      reclen          ; record length
    DB      00h             ; for Intel compatibility
    DB      A7h             ; class: EXEcutable STRing
    <index> iSegdef dup(?)  ; list of SEGDEF indexes
    DB      checksum        ; or 0

This comment record identifies a set of segments to be excluded from padding
imposed with the /PADDATA or /PADCODE options. This is for MicroFocus COBOL.
The index type is the standard MS/Intel OMF index type.


2.11  Weak Extern ─WKEXT

This record marks a set of external names as "weak," and for every weak
extern associates another external name to use as the default resolution.

    DB    88h      ; COMENT
    DW    reclen   ; record length
    DB    00h      ; for Intel compatibility
    DB    A8h      ; class: weak extern
    ; The following two fields are repeated.
    <index> iWeak    ; index to EXTDEF which is weak
    <index> iDefRes  ; index to EXTDEF which is the default resolution

    DB    checksum ; or 0

If a PUBDEF for the weak extern is linked in through other means than the
weak extern, then the weak extern is the same as an EXTDEF (for example, if
there is a weak extern for "foo," and a nonlibrary module is linked in which
defines a PUBDEF for "foo").

But if the weak extern is not linked in through some other means, then all
references to it are resolved to the address of the default resolution name.
For example, this happens if there is a weak extern for "foo" with a default
resolution name of "bar," and a PUBDEF for "foo" is in some library module X
which would not otherwise be linked in. Then X is not linked in, and any
references to "foo" are resolved to "bar."

The index type is the standard MS/Intel OMF index type.


2.12  COMENT Classes

For your reference, the COMENT classes are listed below:

Class                             Description
────────────────────────────────────────────────────────────────────────────
A0                                OMF Extension:

                                    01          IMPDEF

                                    02          EXPDEF

                                    03          INCDEF

                                    04          Protected Memory Library
                                                (link386 only)

A1                                "New OMF"

A2                                Link-Pass-2

A3                                Library module name (LIBMOD)

A4                                EXESTR

A5                                QC #1

A6                                INCERR

A7                                NOPAD

A8                                WKEXT








Chapter 3  Extended .EXE Format for Debug Information
────────────────────────────────────────────────────────────────────────────

This chapter describes a format used by the Microsoft/IBM OS/2 linker to
embed debug information into the executable file. Language development
utilities, such as compilers and assemblers, may attach arbitrary
information to an executable file via this format, which is not part of the
program's load image. Executable files of interest include DOS 2. x-3. x and
OS/2 segmented executable files, although in theory the debug format is not
limited to these.

Use this chapter in conjunction with Chapter 1, "Microsoft Symbolic
Debugging Object Module Format," which describes the content for type
information used by the debugger and emitted by Microsoft compilers and
assemblers in object files.


3.1  Glossary

Some terms are defined below:

Term                              Definition
────────────────────────────────────────────────────────────────────────────
SubSection                        Object in the format that contains
                                    specific information for only one module

Module                            Object module, i.e., an .OBJ file or
                                    .LIB module

Linker                            Microsoft/IBM OS/2 linker


3.2  Principles

The sections that follow discuss principles used in embedding debug
information.


3.2.1  SubSections

SubSections are the primary element of organization in the extended .EXE
format. A special WORD determines the type of each SubSection. Typically,
each SubSection describes some aspect of one module.

The modular nature of SubSections makes incremental changes to the .EXE file
easier.


3.2.2  Linker

The linker generates certain module-based and symbol-based information
obtained from the Microsoft Object Module Format (OMF) into the sstModules
and sstSrcLines SubSections (see Sections 3.6.1 and 3.6.5 below). This
information is not specific to any compiler.


3.3  Header Linkage

The format encompasses a block of data which goes at the end of a normal DOS
3. x or OS/2 segmented .EXE file, i.e., after the header plus load image and
possibly overlays. The lower portion of the file is unaffected by the
format.

The last 8 bytes of the file contain a signature and a long file offset from
the end of the file (dlfaBase). The signature is "NBxx" where xx is the
version number. The long offset indicates the position in the file of the
base address. The following version numbers are active in released versions
of the linker:

Version Number                    Description
────────────────────────────────────────────────────────────────────────────
NB00                              All linkers distributed with file dates
                                    earlier than September 1989 produce this
                                    format .EXE. In particular, LINK
                                    versions 3. x, 4.0, and 5.0x up to 5.03
                                    produce NB00 signature .EXE's. NB00
                                    .EXE's are primarily restricted to one
                                    segment per module and do not support
                                    the based or currency data types.

NB01                              LINK version 5.05 (provided with the
                                    BASIC PDS 7.0) emits this signature. It
                                    contains extensions for multiple
                                    segments per module and for the currency
                                    data type.

NB02                              LINK version 5.10 (provided with C 6.0)
                                    emits this signature. The primary
                                    differences are support for the based
                                    data type and multiple segments per
                                    module.

At the base address are another 8 bytes. The signature is repeated there.
The next long word is a long file offset (LFO) to the SubSection directory
with the exception of the original long file address (LFA) to the base
address (i.e., the number of bytes from the start of the line).


3.4  SubSection Directory

The SubSection directory is a WORD count followed by the same number of
SubDirectory entries (DNTs).

    DW   cdnt # of directory entries

followed by an array of DNT structures containing:

Location                          Description
Size
────────────────────────────────────────────────────────────────────────────
00DW                              sst─SubSection type

02DW                              module─Module index number
                                    1-based (or other attribute)

04DD                              lfoStart─LFO of start of section

08DW                              cb─Size of section in bytes

A SubSection is limited to 64K-1 bytes.

In order to collect information about a given module, the module index
number is used. There is no requirement that a SubSection use a particular
module.


3.5  SubSection Data

The SubSection directory gives the location (LFO) and size of each
SubSection, as well as its type and module number, if applicable. The actual
data resides in the end part of the .EXE file and is in an arbitrary order.
Table 3.1 shows the organization of the .EXE file.

Table 3.1  File Organization

╓┌───────────────────────────────┌───────────────────────────────────────────╖
File Data                       Location
────────────────────────────────────────────────────────────────────────────
DOS or segmented .EXE           0

base section                    base = eof - dlfaBase
DWORD "NBxx"
DWORD IfoDIR

SubSection data

dir section                     dir = IfoDir + base
Number of dir entries
Dir entries

DWORD "NBxx"                    eof
DWORD dlfaBase
File Data                       Location
────────────────────────────────────────────────────────────────────────────
DWORD dlfaBase

────────────────────────────────────────────────────────────────────────────



The base section is located by subtracting the dlfaBase value from the LFO
for end-of-file. The dir section file offset is calculated in turn by the
addition of IfoDIR and dlfaBase.


3.6  SubSection Types (sst)

Values 200-3FFH inclusive are available for general use. All other values
not defined below are reserved for future use. For more information on
Microsoft types, please see Chapter 2, "Microsoft OMF Extensions."


3.6.1  sstModules (101H)

The basic information about an object module─including code segment,  module
name, and number of segments for the module that follows─is described as
follows:

Location                          Description
Size
────────────────────────────────────────────────────────────────────────────
00DW                              Code segment base

02DW                              Code segment offset

04DW                              Code segment length

06DW                              Overlay number

08DW                              Index into sstLibraries SubSection, or 0
                                    if non-library module

0ADB                              Number of segments to follow (total
                                    number of segments); 0 or 1 indicate a
                                    single segment for the module

0BDB                              Reserved for future use

0CDB                              Length-prefixed string

────────────────────────────────────────────────────────────────────────────
NOTE

The number of segments for the module to follow is specific to version
signatures NB01 or later (currently that means NB01 or NB02).
────────────────────────────────────────────────────────────────────────────


3.6.2  sstPublics (102H)

The linker fills each SubSection of this type with an entry for every public
symbol, as follows:

Location                          Description
Size
────────────────────────────────────────────────────────────────────────────
00DW                              Offset

02DW                              Segment

04DW                              Type index

06DB                              Name length

07                                Name start


3.6.3  sstType (103H)

The linker fills in each SubSection with the contents of a special segment
defined in the module, which must have these characteristics:

Characteristic                    Description
────────────────────────────────────────────────────────────────────────────
Name                              $$TYPES

Combine type                      private

Class                             DEBTYP

In addition, a COMMENT record with class A1H(161) must appear in the object
module before the SEGDEF record.

The linker places all LEDATA and LIDATA records for this segment into the
SubSection after applying fix-ups. The data is not processed otherwise.

The format of records emitted by Microsoft compilers is discussed in Chapter
2.


3.6.4  sstSymbols (104H)

The linker fills in each SubSection with the contents of a special segment
defined in the module, which must have these characteristics:

Characteristic                    Description
────────────────────────────────────────────────────────────────────────────
Name                              $$SYMBOLS

Combine type                      private

Class                             DEBSYM

In addition, a COMMENT record with class A1H(161) must appear in the object
module before the SEGDEF record.

The linker places all LEDATA and LIDATA records for this segment into the
SubSection after applying fix-ups. The data is not processed otherwise.

The format of records emitted by Microsoft compilers is discussed in Chapter
2.


3.6.5  sstSrcLines (105H)

The linker fills in each SubSection with information obtained from any
LINNUM records in the module. The SubSection is divided into areas, one per
source file in that module. The typical module will have one area. The
format of each area is:

    Length-prefix string    2 bytes   2 bytes   2 bytes
    Name                    count     line-num  offset

The name is a length-prefixed string, indicating the source file name.

The offset is relative to the beginning of the module's code segment in the
.EXE file, not the module. For example, if the module contributes to segment
_TEXT starting at offset 0100H, and the code offset of the first line number
is 0010H relative to the module, it will show up in the SubSection as 0110h.
Count is the number of line-num/offset combinations.

This record is emitted in NB00-level CodeView information. NB01 and NB02 use
the 109H sstSrcLnSeg record.


3.6.6  sstLibraries (106H)

There can be a maximum of one of these SubSections.

The format is an array of:

    DB  length prefixed name

These names define all the library files used during linking. The order of
this list defines the library index number (see Section 3.6.1, "sstModules
(101H)"). The use of this list allows removal of redundant library names in
the modules section. The first entry should be empty (i.e., zero-length
string) since library indexes are 1-based.


3.6.7  sstCompacted (108H)

This SubSection has the same form as the sstType section. This SubSection is
produced by CVPACK and indicates to CodeView that there is only one
SubSection that contains type information.


3.6.8  sstSrcLnSeg (109H)

This is the same record as sstSrcLines, except it contains a segment index.
The linker fills in each SubSection of this type with information obtained
from any LINNUM records in the module. The SubSection is divided into areas,
one per source file in that module. The typical module will have one area.
The format of each area is:

    Length-prefix sting   2 bytes   2 bytes   2 bytes
    Name                  count     line-num  offset

The name is a length-prefixed string, indicating the source file name.

The offset is relative to the beginning of the module's code segment in the
.EXE file, not the module. For example, if the module contributes to segment
TEXT starting at offset 0100H, and the code offset of the first line number
is 001 0H relative to the module, it will show up in the SubSection as
0110h. See Section 3.6.1, "sstModules (101H)," for more information on seg.
In this example, count represents the total count of line number records.


3.7  A CodeView Sample Header File

Use the following header file to read CodeView information:

    #define SSTMODULES              0xl0l
    #define SSTPUBLIC               0x102
    #define SSTTYPES                0X103
    #define SSTSYMBOLS              0x104
    #define SSTSRCLINES             0x105
    #define sstLibraries            0x106
    #define SSTCOMPACTED            0x108     // like SSTTYPES
    #define sstSrcLnSeg             0xl09

    // This is the DNT structure
    typedef struct dnt {
        unsigned short  SubSection;
        unsigned short  iMod;
        signed long     lfo;
        unsigned short  cb;
        } dnt;                                //* the directory block

    // These make up the SSTMODULES
    typedef struct nsg {
        unsigned Seg;
        unsigned Off;
        unsigned cbSeg;
        } nsg;                                //* Extra segments in
    a
                                            //* module

    typedef struct smd {
        nsg         SegInfo;                  // represents cSeg (0
    or
                                            // 1). if cSeg >= 2
        unsigned    ovlNbr;                   // this represents the
                                            // first segment
        unsigned    iLib;
        char        cSeg;                     // Nbr of seg
                                            // represented by module

        char        reserved;
        char        cbName;
        nsg         arnsg[];                  // cSeg-l of these
                                            // struct exist for
                                            // alloc text
        } smd;                                // Module entry

    // SSTPUBLICS
    typedef struct pbi {
        uoffset_t         off;
        unsigned          seg;
        unsigned          type;
        unsigned char     cbName;
        char              Name[];
        } pbi;                                //* public record type

    // SSTTYPES
    // SSTCOMPACTED
    // SSTSYMBOLS
    // SSTSRCLINES
    typedef struct {
        char              cbName;
        char              Name[];             // cannot be a real member
        unsigned short    cOff;               // count of structures
    to
                                            // follow.
        struct {
        unsigned short    lineNbr;
        unsigned short    offset;
        } loe;

    // sstSrcLnSeg

    typedef struct {
        char              cbName;
        char              Name[];             // cannot be a real
                                            // member
        _segment          Seg;
        unsigned short    cOff;               // count of
                                            // structures to
                                            // follow.
        struct {
            unsigned short lineNbr;
            unsigned short offset;
            };
        } loe;

    // sstLibraries
    typedef struct {
        unsigned char     cbLibs;
        char              Libs[];
        } lib[];                              // an array of lib names






Chapter 4  .ILK and .SYM Binary File Formats
────────────────────────────────────────────────────────────────────────────

This chapter describes the Microsoft Incremental Linker (ILINK) and Symbol
(SYM) binary file formats, which are compatible. This information is
provided to facilitate the development of applications and tools that work
with the ILINK or SYM binary files.

Microsoft cannot guarantee that future modifications to the binary file
formats of ILINK and SYM will have backward compatibility. This means that
any software you develop using the information provided in this chapter may
not be compatible with future versions of ILINK and SYM.

Figure 4.1 illustrates schematically the binary file formats shared by ILINK
and SYM. Figures 4.2-4.7 provide further detail on the structure shown in
Figure 4.1.

(This figure may be found in the printed book.)

Each of the sections (1a, 2, 3, 4, 5, and 7) in Figure 4.1 can be subdivided
into constituent parts. Section 1a─Segments, is illustrated in Figure 4.2.

(This figure may be found in the printed book.)

Section 2─Groups, can also be divided into subparts, as shown in Figure 4.3.


(This figure may be found in the printed book.)

Section 3─Imports, illustrated in Figure 4.4, has three constituent parts.

(This figure may be found in the printed book.)

Figure 4.5 shows the breakdown of Section 4─Library File Names.

(This figure may be found in the printed book.)

Figure 4.6 illustrates the subparts of Section 5─Modules and Contributions.


(This figure may be found in the printed book.)

Finally, Figure 4.7 breaks down the structure of Section 7─Segment Module
Info, into its relevant parts.

(This figure may be found in the printed book.)






Chapter 5  Library Format
────────────────────────────────────────────────────────────────────────────

Libraries under MS-DOS are always multiples of 512-byte blocks. This chapter
describes the components of these libraries, using tables to reflect their
structure.


5.1  Library Header Record

The first record in the library is a header. This record, shown below, looks
very much like any other Microsoft object-module-format (MS OMF) record.
That is, the first byte of the record identifies the record's type, and the
next two bytes specify the number of bytes remaining in the record.

    +-----+--------+--------+--------+--------+--------+--------+-------+
    |F0H  |      n
    - 3      |         DICTIONARY OFFSET         |  DICT |
+-----+--------+--------+--------+--------+--------+--------+-------+
|SIZE
    |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A  |
+-----+--------+--------+--------+--------+--------+--------+-------+
|N/A  |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A  |
    +-----+--------+--------+--------+--------+--------+--------+-------+
|     |        |        |        |        |        |        |       |
    +-----+--------+--------+--------+--------+--------+--------+-------+
|N/A  |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A  |
    +-----+--------+--------+--------+--------+--------+--------+-------+
|N/A  |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A  |
    +-----+--------+--------+--------+--------+--------+--------+-------+

Note that this word field is byte-swapped (i.e., the low-order byte precedes
the high-order byte). The record type for this library header is F0 hex (240
decimal). The record length field specifies the page size within the
library. Modules in a library always start at the beginning of a page. Page
size is determined by adding three to the value in the record length field;
thus the header record always occupies exactly one page. Legal values for
page size are given by the range of 2 through the n, where n is greater than
or equal to 4 and less than or equal to 15.

The four bytes immediately following the length field are a byte-swapped
long integer specifying the byte offset within the library of the first byte
of the first block of the dictionary. The next two bytes are a byte-swapped
word field that specifies the number of blocks in the dictionary.

────────────────────────────────────────────────────────────────────────────
NOTE

The MS-DOS Library Manager cannot create a library whose dictionary requires
more than 251 512-byte pages.
────────────────────────────────────────────────────────────────────────────

The next byte contains flags describing the library. One current flag
definition is  0x01 = case sensitive. This applies to both regular and
extended dic-tionaries.

All other values are reserved for future use and should be 0. The remaining
bytes in the library header record are not significant. This record deviates
from the typical Microsoft OMF record in that the last byte is not used as a
checksum on the rest of the record.


5.2  Object Modules

The first object module in the library immediately follows the header, as
illustrated below. It is succeeded in turn by all other object modules in
the library. Each module is in Microsoft OMF. Individual modules are aligned
so that they start at the beginning of a new page. If, as is commonly the
case, a module does not occupy a number of bytes that is exactly a multiple
of the page size, then its last block is padded with as many null bytes as
are required to fill it.

First Record (n bytes):

    +------+--------+--------+--------+--------+--------+--------+----------+
    |80H   |      RECLEN     |   LEN  |  NAME  |  ....  |  NAME  |
    CHKSUM   |
+------+--------+--------+--------+--------+--------+--------+----------+
|RECTYP|      RECLEN     |  DATA  |  DATA  |  DATA  |  DATA  |  DATA    |
    +------+--------+--------+--------+--------+--------+--------+----------+
|DATA  |  DATA  |  ....                       ....  |  DATA  |
    CHKSUM   |
+------+--------+--------+--------+--------+--------+--------+----------+
|RECTYP|      RECLEN     |  DATA  |  DATA  |  DATA  |  DATA  |  DATA    |
+------+--------+--------+--------+--------+--------+--------+----------+
|      |        |        |        |        |        |        |          |
    +------+--------+--------+--------+--------+--------+--------+----------+
|DATA
    |  DATA  |  ....                       ....  |  DATA  | CHKSUM   |
    +------+--------+--------+--------+--------+--------+--------+----------+
|8AH   |      RECLEN     |  DATA  |
    CHKSUM |  N/A   |  N/A   |  N/A     |
+------+--------+--------+--------+--------+--------+--------+----------+
|N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A     |
    +------+--------+--------+--------+--------+--------+--------+----------+
|      |        |        |        |        |        |        |          |
+------+--------+--------+--------+--------+--------+--------+----------+
|N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A     |
    +------+--------+--------+--------+--------+--------+--------+----------+
|80H   |      RECLEN     |   LEN  |  NAME  |  ....  |  NAME  |
    CHKSUM   |
+------+--------+--------+--------+--------+--------+--------+----------+
|RECTYP|      RECLEN     |  DATA  |  DATA  |  DATA  |  DATA  |  DATA    |
    +------+--------+--------+--------+--------+--------+--------+----------+
|DATA  |  DATA  |  ....                       ....  |  DATA  |
    CHKSUM   |
+------+--------+--------+--------+--------+--------+--------+----------+
|RECTYP|      RECLEN     |  DATA  |  DATA  |  DATA  |  DATA  |  DATA    |
    +------+--------+--------+--------+--------+--------+--------+----------+
|      |        |        |        |        |        |        |          |
+------+--------+--------+--------+--------+--------+--------+----------+
|DATA  |  DATA  |  ....                       ....  |  DATA  | CHKSUM   |
    +------+--------+--------+--------+--------+--------+--------+----------+
|8AH   |      RECLEN     |  DATA  |
    CHKSUM |  N/A   |  N/A   |  N/A     |
+------+--------+--------+--------+--------+--------+--------+----------+
|N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A     |
    +------+--------+--------+--------+--------+--------+--------+----------+
|      |        |        |        |        |        |        |          |
+------+--------+--------+--------+--------+--------+--------+----------+
|N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A     |
    +------+--------+--------+--------+--------+--------+--------+----------+

The following illustration shows a record which follows the last object
module in the library and serves as a marker between the object files and
the dictionary. This record also resembles an Microsoft OMF record. Its type
field contains F1 hex (241 decimal), and its length field is set so that the
dictionary begins on a 512-byte boundary. It contains no further useful
information; the remaining bytes are insignificant. As with the library
header, the last byte is not a checksum.

Marker (marks end of objects and beginning of dictionary):

    +-----+--------+--------+--------+--------+--------+--------+--------+
    |F1H  |    13
    - 32765   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |
+-----+--------+--------+--------+--------+--------+--------+--------+
|SIZE |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |
    +-----+--------+--------+--------+--------+--------+--------+--------+
|N/A  |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |
    +--------+--------+--------+--------+--------+--------+--------+-----+
|N/A  |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |
    +-----+--------+--------+--------+--------+--------+--------+--------+
|     |        |        |        |        |        |        |        |
+-----+--------+--------+--------+--------+--------+--------+--------+
|N/A  |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |
+-----+--------+--------+--------+--------+--------+--------+--------+
|N/A
    |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |  N/A   |
+-----+--------+--------+--------+--------+--------+--------+--------+


5.3  Dictionary Blocks

The remaining blocks in the library, shown in the following illustration,
compose the dictionary. The number of blocks in the dictionary is given in
the library header.

Dictionary (length is DICT SIZE 512-byte blocks):

    +-----+--------+--------+--------+--------+--------+--------+--------+
    |HTAB
    |  HTAB  |  HTAB  |  HTAB  |  HTAB  |  HTAB  |  HTAB  |  HTAB  |
+-----+--------+--------+--------+--------+--------+--------+--------+
|HTAB
    |  HTAB  |  HTAB  |  HTAB  |  HTAB  |  HTAB  |  HTAB  |  HTAB  |
+-----+--------+--------+--------+--------+--------+--------+--------+
|HTAB
    |  HTAB  |  HTAB  |  HTAB  |  HTAB  |  HTAB  |  HTAB  |  HTAB  |
+-----+--------+--------+--------+--------+--------+--------+--------+
|HTAB
    |  HTAB  |  HTAB  |  HTAB  |  HTAB  |  HTAB  |  HTAB  |  HTAB  |
+-----+--------+--------+--------+--------+--------+--------+--------+
|HTAB
    |  HTAB  |  HTAB  |  HTAB  |  HTAB  |  FFLAG |  LEN   |  CHAR  |
+-----+--------+--------+--------+--------+--------+--------+--------+
|CHAR
    |  ....  |  CHAR  |  BLOCK   NUMBER |  ALIGN |  LEN   |  CHAR  |
+-----+--------+--------+--------+--------+--------+--------+--------+
|CHAR
    |  ....  |  CHAR  |  BLOCK   NUMBER |  ALIGN |  LEN   |  CHAR  |
+-----+--------+--------+--------+--------+--------+--------+--------+
|     |        |        |        |        |        |        |        |
+-----+--------+--------+--------+--------+--------+--------+--------+
|CHAR |  ....  |  CHAR  |  BLOCK   NUMBER
    |  ALIGN |  LEN   |  CHAR  |
+-----+--------+--------+--------+--------+--------+--------+--------+
|CHAR |  ....  |  CHAR  |  BLOCK   NUMBER
    |  N/A   |  N/A   |  N/A   |
+-----+--------+--------+--------+--------+--------+--------+--------+

The dictionary is a hashed index to the library. Public symbols are
essentially hashed twice, though in fact both hash indexes are produced
simultaneously. The first hash index determines a block within the
dictionary in which to place the symbol; call it the block index. The second
is used to choose a bucket within the block for the symbol; call it the
bucket index.

Blocks always have 37 buckets; they are the first 37 bytes of each block. If
a bucket is full, then it contains a nonzero value which points to the text
of the symbol. To actually find the symbol, take the bucket value, multiply
it by two, and use the resulting number as a byte offset from the beginning
of the block.


5.3.1  Symbol Collisions

Collisions (i.e., two or more distinct symbols hashing to the same block and
bucket in the dictionary) are resolved by a technique known as linear open
addressing. Two hash deltas are produced at the same time as the hash
indexes. If a symbol collides with a symbol already installed in the
dictionary, then the librarian will attempt to find an empty bucket for it
by adding the bucket delta to the bucket index and using the result mod 37
as a new bucket index. If this new bucket index points to a bucket that is
empty, then the librarian will install the symbol in that bucket. If the
bucket is not empty, then the delta is applied repeatedly until an empty
bucket is found or until it is determined that there are no empty buckets on
the block. If the latter is the case, then the block delta is added to the
block index, and the result mod the number of blocks in the dictionary is
used as a new block index. With the new block index and the original bucket
index, the sequence is repeated until an empty bucket on some block is
found. The number of blocks and the number of buckets are prime so that no
matter what values of hash indexes and deltas are produced for a symbol, in
the worst case, all possible block-bucket combinations will be tried.


5.3.2  Symbol Entries

Once a free block-bucket pair has been found for a symbol, the symbol and
information concerning its place of definition must be installed. Since a
bucket is a single byte pointing to a 512-byte block, it can give at best a
word offset within that block. Thus, symbol entries within a dictionary must
start on word boundaries. Since bytes 0-36 of each dictionary block are the
hash table, the first symbol entry will begin at byte 38 (decimal).

Entries consist of the following: the first byte is the length of the symbol
to follow, the following bytes are the text of the symbol, and the last two
bytes are a byte-swapped word field which specifies the page number
(counting the library header as the 0th page) at which the module defining
the symbol begins. All entries may have at most one trailing null byte in
order to align the next entry on a word boundary.

It is possible for a dictionary block to be full without all of its buckets
being in use. This will be the case, for example, if symbol names average
more than nine characters each. Therefore, there must be some way to mark a
block as full so that empty buckets will be ignored. Byte 37 decimal
(counting from 0) is reserved for this purpose. If the block is not full,
then byte 37 will contain the word offset of the beginning of free space in
the block, but if the block is full, then byte 37 will contain the special
value 255 decimal (FF hex). Module names are stored in the THEADR record of
each module.


5.4  Extended Dictionary

The extended dictionary is optional and indicates dependencies between
modules in the library. Versions of LIB earlier than version 3.09 did not
create an extended dictionary. The extended dictionary is placed at the end
of library and preceded by these values:

Value                             Description
────────────────────────────────────────────────────────────────────────────
BYTE                              0xF2─extended dictionary header.

WORD                              Length of the extended dictionary in
                                    bytes excluding first 3 bytes.

WORD                              Start of extended dictionary. The number
                                    of modules in library = N.

WORD                              Module table, indexed by module number,
                                    with N + 1 fixed-length entries. The
                                    module page number.

WORD                              Offset from start of extended dictionary
                                    to list of required modules. The last
                                    entry is null.






PART II  Browser Information
────────────────────────────────────────────────────────────────────────────

This is some text for the part openings. This is some text for the part
openings. This is some text for the part openings. This is some text for the
part openings.

This is some text for the part openings. This is some text for the part
openings. This is some text for the part openings. This is some text for the
part openings. This is some text for the part openings. This is some text
for the part openings.

Got the idea yet?






Chapter 6  Browser Library Tutorial
────────────────────────────────────────────────────────────────────────────

This chapter introduces the browser library (BSC.LIB) included in the
Microsoft C Developer's Toolkit Reference. The program BSCDUMP.C is included
to demonstrate the use of the browser library; it will provide the framework
for this chapter. It is suggested that you produce a hard copy of BSCDUMP.C
for quick reference while reading this chapter.


6.1  Overview of BSCDUMP.C

BSCDUMP demonstrates the use of many browser library functions. It also
serves as a simple tool for viewing .BSC files. The .BSC files are actually
comprehensive databases containing information about the particular symbols
contained within specific code. These symbols include names of functions,
modules, variables, types, and even macros. The database contains such
information as the calltree of a function, the symbol table, the definition
table, and the reference table. Each of these tables can be queried by the
browser library to provide valuable information about these symbols.

Most of the work within BSCDUMP is done by the user interface. The database
work, as expected, is passed on to the browser library. The included header
files, BSCSUP.H and BSC.H, provide the necessary API; each of these follows
the specification explained in Chapter 7, "Browser API Definitions." Special
attention to the browser library "callback" functions is also necessary.
These functions, such as BSCOutput and BSCOpen, must be defined to avoid
dependency on the C standard I/O library.


6.2  BSCDUMP Arguments

BSCDUMP takes several arguments, as listed in Table 6.1.

Table 6.1  BSCDUMP Arguments

╓┌─────────┌───────────────────────────────────────┌─────────────────────────╖
Argument  Action                                  Functions Called
────────────────────────────────────────────────────────────────────────────
-o[FVMT]  Lists outlines                          FOutlineModuleLsz
-l[FVMT]  Lists references                        ListRefs
-u[FVMT]  Lists redundant definitions             ListRdds
-t<sym>   Provides calltree from <sym>            FcallTreeLsz
-b<sym>   Provides backwards calltree from <sym>  FrevTreeLsz
-s        Emits BSC statistics                    StatsBSC
-r<sym>   List all references to symbol           RefRangeOfInst, RefInfo
-d<sym>   Lists all definitions of symbol         DefRangeOfInst, DefInfo
────────────────────────────────────────────────────────────────────────────



6.2.1  List Commands

To understand how BSCDUMP works with each argument individually, note that
the arguments are interpreted in the following manner:

    -o[FVMT] <file> - List outlines

This option (-o) produces all of the symbols in the module with attributes
and type that match the additional arguments. Table 6.2 shows additional
arguments that allow you to specify what should be outlined:

Table   6.2 Additional Arguments for BSCDUMP

╓┌───────────────────────┌───────────────────────────────────────────────────╖
Argument                Symbol Information
────────────────────────────────────────────────────────────────────────────
F                       Functions
V                       Variables
M                       Macros
T                       Types
────────────────────────────────────────────────────────────────────────────


BSCDUMP then creates a filter mask, in this case, which represents each
option desired for the outline. If none of the suboptions is explicitly
selected, then by default they are all selected. FOutlineModuleLsz is called
with the file name of the module symbol index and the filter mask, as
follows:

    -l[FVMT]        List References

This call takes the same additional arguments that outlining (-o) did. A
similar mechanism is employed to set the appropriate filter mask named
mbfRef. If none of the additional options is selected for the List
References command, by default they will all be taken. BSCDUMP then calls
the library function ListRefs with the parameter of mbfRef, as follows:

    -u[FVMT]        List Redundant Definitions

BSCDUMP depends on the function ListRdds to list redundant definitions. This
is not a browser library function and therefore is a good example of one way
to extend the library's functionality. For example:

    void ListRdds(MBF)
    {
        ISYM isym, isymMac, isymname;
        IINST iinst, iinstMac;
        IUBY iubyFirst, iubyLast;

        isymMac = IsymMac();

        for (isym = 0 ; isym < isymMac; isym++)
        {
        InstRangeOfSym(isym,&iinst,&iinstMac);

        for ( ; iinst < iinstMac ; iinst++)
        {
            UbyRangeOfInst(iinst,&iubyFirst,&iubyLast);

            if (iubyFirst == iubyLast && FInstFilter(iinst,
                                                        mbf))
            {
                DumpInst(iinst);
                BSCPrintf("\n");
            }
        }
        }
    }

Initially,  ListRdds  calls a browser library function  IsymMac, which
returns the biggest symbol index in the browser database. This number
provides the upper bound for searching for redundant symbol definitions. The
following for loop allows the remaining part of the function to query each
symbol individually with the range of  isym=0  to  isym=isymMac-1. The
function then queries  InstRangeOfSym  to determine what the range of
instances associated with each symbol in the symbol table is.
InstRangeOfSym  stores the lower and upper bounds in  iinst  and  iinstMac,
respectively.

Using the two bounds for the symbols,  ListRdds  calls on the library
function  UbyRangeOfInst, which returns the associated range called by the
table. The function then makes a simple test to see if the upper and lower
bounds of this range are identical and if this particular symbol is one that
you requested.

After determining that the current symbol is redundant,  ListRdds  calls the
function  DumpInst. Regardless of the type of the symbol instance,  DumpInst
    is sent to the standard output in the following format:

<ASCII instance name> <ASCII type name> <ASCII attribute name>

Finally, the  BSCPrintf  function is called to output the new line to stdout
via the BSCOutput callback.


6.2.2  Calltree Commands

    -t<sym>       Calltree <sym>

This option (-t) within BSCDUMP provides the calltree from a symbol name.
This symbol name may either be the name of a function or the name of a
module. This is accomplished by calling the library function  FCallTreeLsz,
which takes the symbol name as an argument.

    -b<sym>       Backwards Calltree <sym>

Like the Calltree option, Backwards Calltree (-b) uses a symbol name to
produce its output. Once again the symbol may either be the name of a
function or the name of a module. The function called by BSCDUMP is
FRevTreeLsz, which takes the symbol name as an argument.


6.2.3  Browser Statistics

To emit the browser statistics, BSCDUMP calls the library function  StatsBSC
    with the -s option:

    -s              Emit BSC stats

The statistics include the table sizes for the following tables and lists:


    ■   Module table

    ■   Symbols listed by module name

    ■   Symbol list

    ■   Properties list

    ■   Definition table

    ■   Reference table

    ■   Call table

    ■   Called by table


In addition, the  StatsBSC  function outputs each symbol and the associated
instance information counts.


6.2.4  List Symbol Commands

The -r option within BSCDUMP allows the user to list each reference to a
symbol.

    -r <sym>        List All References to Symbol

Even though this option is not included within the browser library, this
function is useful in certain situations. Thus, when this option is
executed, the program calls the function  DumpRefsLsz. For example:

    void DumpRefsLsz(LSZ lszSym)
    {
        ISYM isym;
        IINST iinst, iinstMac;
        IREF iref, irefMac;
        LSZ  lsz;
        WORD line;

        isym = IsymFrLsz(lszSym);

        if (isym == isymNil)
        {
            BSCPrintf("unknown symbol %s\n", (LSZ)lszSym);
            return;
        }

        InstRangeOfSym(isym, &iinst, &iinstMac);

        for (;iinst < iinstMac; iinst++)
        {
            RefRangeOfInst(iinst, &iref, &irefMac);
            for ( ; iref < irefMac; iref++)
            {
            RefInfo(iref, &lsz, &line);
            BSCPrintf("%s %d\n", (LSZ)lsz, line);
            }
        }
    }

First,  DumpRefs  checks the validity of the symbol passed  (lszSym) by
calling  IsymFrLsz, which returns the index into the symbol table for the
appropriate symbol. Assuming that the symbol is valid, the function
determines the range of instances associated with this symbol using the
library function  InstRangeOfSym. The lower and upper bounds of this range
are stored in  iinst  and  iinstMac, respectively.

Using this range of instances, the function InstRangeofSym queries each
particular instance of the associated symbol identified by the variable
iinst. The function  RefRangeOfInst  takes a particular instance of a symbol
and returns the lower and upper bounds of the range in the reference table.
These values are stored in  iref  and  irefMac, respectively.

Finally, the last  for  loop calls  RefInfo  for each particular reference
of a particular instance of a particular symbol.  RefInfo  takes a reference
to a symbol and returns the file name and line number within that file for a
particular reference.  DumpRefs  then calls the function  BSCPrintf  in much
the same way the standard C printf function is called.

    -d <sym>        List All Definitions of Symbol\n");

To list all definitions of a symbol, BSCDUMP uses a function much like the
one it used to list all the references of a symbol. The only differences are
caused by a change in type from  IREF  to  IDEF. Thus,  DumpDefsLsz  calls
the functions  DefRangeOfInst  and  DefInfo  instead of the reference
counterparts.






Chapter 7  Browser API Definitions
────────────────────────────────────────────────────────────────────────────

This chapter discusses Browser API definitions. It explains how to use the
browser library and the processor database.


7.1  Using the Browser Library

Within the browser library (named BSC.LIB), there are many functions that
perform file I/O on the <database.bsc> file and that query the metrics of
the database tables and the information stored in them. Functions that
generate information, such as calltrees and symbol reference tables, are
also provided. Details of these functions may be found in Section 7.2,
"Browser Database Functions."

The library itself is model independent, but it does make use of the C
run-time library, which is not model independent. To provide users of the
library with maximum flexibility, there are four interface objects allowing
BSC.LIB to access either the small, medium, compact, or large C libraries.
These objects are called BTHUNKS.OBJ, BTHUNKM.OBJ, BTHUNKC.OBJ, and
BTHUNKL.OBJ, respectively. Each object module implements the callbacks
described below by calling the C run-time library in a model-specific way.
For example, to compile a small-model C program and link it with BSC.LIB
under DOS, you could use the following command:

    cl /o anyprog.exe /AS anyprog.c bthunks.obj /F 2000 /link /nod
    bsc slibcer

The /F 2000 sequence above indicates that an 8K stack should be allocated
for the program. This is the recommended size. Depending on your usage of
the library, you may be able to use a smaller setting.

If you have real-mode C libraries installed as your default libraries, then
the trailing 'R' in SLIBCER may be dropped (i.e., you need to specify only
SLIBCE). To create a protected-mode .EXE, simply replace SLIBCER with the
two libraries SLIBCEP and OS2. As with the real-mode (DOS) command, if the
protected-mode library has been installed as your default you can leave off
the trailing 'P' in SLIBCEP.

To build the program for any other model, consult Table 7.1.

Table 7.1  Elements of a C Object Module

╓┌────────┌───────┌────────────┌────────────┌────────────────────────────────╖
Model    Switch  File         DOS Library  OS/2 Library
────────────────────────────────────────────────────────────────────────────
Small    /AS     BTHUNKS.OBJ  SLIBCER      SLIBCEP and OS2
Medium   /AM     BTHUNKM.OBJ  MLIBCER      MLIBCEP and OS2
Compact  /AC     BTHUNKC.OBJ  CLIBCER      CLIBCEP and OS2
Large    /AL     BTHUNKL.OBJ  LLIBCER      LLIBCEP and OS2
────────────────────────────────────────────────────────────────────────────


────────────────────────────────────────────────────────────────────────────
NOTE

If you choose to define the callbacks required by the library yourself
(these are described in Section 7.2.1), then you should not link with any
version of the BTHUNK?.OBJ files. Thus you can use BSC.LIB in any custom
environments you may have.
────────────────────────────────────────────────────────────────────────────


7.2  Browser Database Functions

The following sections describe various browser database functions.


7.2.1  Callback Functions

Several callbacks must be defined by the client to avoid dependency on the C
standard I/O library. Default versions of these functions are provided via
the BTHUNK?.OBJ files described in Section 7.1, "Using the Browser Library";
the prototypes are detailed in Table 7.2. These functions handle primitive
file I/O, and memory allocation and deallocation.

Table 7.2  Callback Functions

╓┌────────────────────────┌────────────────────────┌─────────────────────────╖
Callback To              Result                   Prototype
────────────────────────────────────────────────────────────────────────────
Standard memory          A void far pointer must  LPV LpvAllocCb (WORD cb)
Callback To              Result                   Prototype
────────────────────────────────────────────────────────────────────────────
Standard memory          A void far pointer must  LPV LpvAllocCb (WORD cb)
allocation function      be returned to a block
                            of size cb bytes. If
                            the block of memory has
                            not been allocated,
                            then the return value
                            should be NULL.

Standard memory          Given a void far         VOID FreeLpv (LPV lpv)
deallocation function    pointer to a block of
                            memory lpv, the
                            function must
                            deallocate the memory
                            block.

Standard file open       Opens the file           int API BSCOpen (LSZ
function                 lszFileName and          lszFileName,
                            prepares the file for    *****************int
                            subsequent reading or    mode);
Callback To              Result                   Prototype
────────────────────────────────────────────────────────────────────────────
                            subsequent reading or    mode);
                            writing, as defined by
                            mode. The function must
                            return a file handle
                            for the opened file. A
                            return value of -1
                            should indicate an
                            error. The mode
                            parameter may be any
                            combination of the O_*
                            bits that are used in
                            the standard open()
                            call. At this time,
                            however, the library
                            will make this call
                            only with mode =
                            O_BINARY|O_RDONLY.

Standard file close      Closes the file with     int API BSCClose (int
Callback To              Result                   Prototype
────────────────────────────────────────────────────────────────────────────
Standard file close      Closes the file with     int API BSCClose (int
function                 handle value handle. A   handle);
                            return value of 0
                            should indicate success.

Standard file read       Reads from the file      int API BSCRead (int
function                 with handle value        handle,
                            handle a number of       ***************LPCH
                            bytes cb into the far    lpchBuf,
                            character buffer         ***************WORD ch);
                            pointed to by lpchBuf.
                            The return value should
                            be the number of actual
                            bytes which were read
                            or -1 if an error was
                            encountered.

Standard file seek       Moves the file pointer   int API BSCS
function                 associated with the
Callback To              Result                   Prototype
────────────────────────────────────────────────────────────────────────────
function                 associated with the
                            file with handle value
                            handle to a new
                            location lpos bytes
                            from the position in
                            the file determined by
                            mode. Here mode can be
                            any of SEEK_CUR,
                            SEEK_END, or SEEK_SET
                            as in the lseek() call
                            from the C standard
                            library. Currently only
                            SEEK_SET is used by
                            BSC.LIB. The return
                            value should be -1 on
                            an error; any other
                            value indicates success.

ASCII text output        Writes the given         VOID API BSCOutput (LSZ
Callback To              Result                   Prototype
────────────────────────────────────────────────────────────────────────────
ASCII text output        Writes the given         VOID API BSCOutput (LSZ
function                 zero-terminated string   lsz);
                            to the standard output.
                            This function is called
                            by the library whenever
                            it wants to output any
                            text (e.g., for a
                            calltree, outline, or
                            other request). The
                            default implementation
                            writes the output to
                            the standard output;
                            however, a user
                            implementation can be
                            used to direct the
                            output elsewhere.



Callback To              Result                   Prototype
────────────────────────────────────────────────────────────────────────────

Error-handling           These functions should   VOID API SeekError (LSZ
functions                be provided to handle    lszFileName);
                            the occurrence of any    VOID API ReadError (LSZ
                            one of the               lszFileName);
                            corresponding errors.    VOID API BadBSCVer (LSZ
                            The string parameter is  lszFileName);
                            the name of the file
                            involved in the error.
                            If these functions
                            choose to exit the
                            application, they
                            should close any file(s)
                            the browser has opened.

────────────────────────────────────────────────────────────────────────────




7.2.2  Opening and Closing the Browser Database

Two browser database functions are used to open and close a browser database
file. The prototypes are detailed in Table 7.3.

Table   7.3 File I/O Functions

╓┌────────────┌────────────────────────┌─────────────────────────────────────╖
Purpose      Result                   Prototype
────────────────────────────────────────────────────────────────────────────
Opens the    Opens the specified      BOOL API FOpenBSC (LSZ lszName);
    .BSC file   database file lszName.
                Returns the value TRUE
                if successful, or FALSE
                if it can't be read.
                The lszName parameter
                can be any valid path
                name to a .BSC file.

Closes the   Closes the current       VOID API CloseBSC (VOID);
Purpose      Result                   Prototype
────────────────────────────────────────────────────────────────────────────
Closes the   Closes the current       VOID API CloseBSC (VOID);
.BSC file    database file. This
                will free any memory
                the library may be
                using.

────────────────────────────────────────────────────────────────────────────




7.2.3  Querying the Database File

Several functions are provided to gain information about the metrics of the
database and its data. Each sort of object found in the database is
represented by an index value that uniquely identifies one database object.
The various indexes/objects are described below.


Modules (IMOD Variables)

Each module in the database has an associated index or IMOD value. Using the
functions detailed in Table 7.4, you can convert a file name into an IMOD,
convert an IMOD into a file name, or enumerate all the IMOD values in the
database.

Table 7.4  IMOD Conversion Functions

╓┌────────────────────────┌────────────────────────┌─────────────────────────╖
Purpose                  Result                   Prototype
────────────────────────────────────────────────────────────────────────────
Converts from IMOD to    LszNameFrMod (given an   LSZ API LszNameFrMod
module name              index IMOD) returns the  (IMOD imod);
Converts from module     zero-terminated string
name to IMOD             name for that symbol     IMOD API ImodFrLsz (LSZ
                            index.                   lszModName);
                            ImodFrLsz returns the
                            index, if one exists,
                            from the symbol name
                            lszModName. If that
Purpose                  Result                   Prototype
────────────────────────────────────────────────────────────────────────────
                            lszModName. If that
                            module name does not
                            exist, then the return
                            value is imodNil.

Determines largest IMOD  The return value is the  IMOD API ImodMac (VOID);
value                    biggest IMOD index in
                            this database; the
                            range of these indexes
                            is from zero to the
                            return value -1.

────────────────────────────────────────────────────────────────────────────




Module Symbols (IMS Variables)

The browser database contains a list of all the symbol instances (see the
section "Symbol Instances," below) defined in any particular module. Given
an IMOD variable, you can find the range of valid IMS variables for that
module, which in turn tells you the contents of that module. Table 7.5
describes IMS values.

Table   7.5 IMS Values

╓┌────────────────────────┌────────────────────────┌─────────────────────────╖
Purpose                  Result                   Prototype
────────────────────────────────────────────────────────────────────────────
Determines the range of  The IMS values pointed   VOID API MsRangeOfMod
IMS values for the       to pimsMin and pimsMac   (IMOD imod,
given IMOD               will be filled in with   *********************
                            the IMS start and end    IMS far
                            values for the           *********************
                            specified imod. Note     *pimsMin,
                            that valid IMS values    *********************
                            range from imsMin up to  IMS far
                            but not including        *********************
                            imsMac. If imsMin is     *pimsMac);
Purpose                  Result                   Prototype
────────────────────────────────────────────────────────────────────────────
                            imsMac. If imsMin is     *pimsMac);
                            equal to imsMac, then
                            the specified module
                            (imod) contains no
                            definitions and hence
                            has no correspond-
                            ing IMS values.

Gets the instance index  Given the index ims of   IINST API IinstOfIms
(IINST) from the module  the module definition,   (IMS ims);
symbol index (IMS)       this function returns
                            the instance index for
                            subsequent use in other
                            calls.

────────────────────────────────────────────────────────────────────────────




Symbols (ISYM Variables)

All symbols (identifiers) of any type have an associated ISYM index; that
is, there is a one-to-one correspondence between ISYM indexes and symbol
names known to the database. The range of valid ISYM values is determined by
the call

    ISYM API IsymMac (VOID);

which determines the size of the Symbol Table.

The return value is the biggest ISYM index in this browser database; the
range of these indexes is from zero to the return value -1. The ISYM values
are assigned to symbols such that increasing the value of ISYM also
increases alphabetical order (without respect to case). Strings can be
converted to ISYMs (and vice versa) using the following calls:

    LSZ API LszNameFrSym (ISYM isym);
    ISYM API IsymFrLsz (LSZ lszSymName);

Given an index isym, LszNameFrSym returns the zero-terminated string name
for that symbol index. IsymFrLsz returns the index, if one exists, from the
symbol name lszSymName. If that symbol name does not exist in the database,
then the return value is isymNil.

To get data other than the name from an ISYM, you must enumerate its
corresponding IINST values.


Symbol Instances (IINST Variables)

Each symbol may have several instances associated with it; each instance
corresponds to a different way the symbol is used in the program(s)
described in the browser database (see Table 7.6). For example, the symbol
"foo" might be used as a static variable in one place, and as a function
parameter in another.

Table   7.6 IINST Values

╓┌────────────────────────┌────────────────────────┌─────────────────────────►
Purpose                  Result                   Prototype
Purpose                  Result                   Prototype
─────────────────────────────────────────────────────────────────────────────
Determines the range of  Fills in the values of   VOID API InstRangeOfSym (IS
valid IINST values for   piinstMin, and           isym,
a particular symbol      piinstMac in an          *********************  IINS
(ISTM)                   analogous way to         far
                            MsRangeOfMod().          *********************
                                                    *piinstMin,
                                                    *********************  INST
                                                    far
                                                    ******************* **
                                                    *piinstMac);

Finds the range of       Determines the size of   IINST API IinstMac (VOID);
valid IINST values for   PropList Table. As with
the whole database       ImodMac() and IsymMac(),
                            IinstMac() returns the
                            upper bound on valid
                            IINST values. IINST
                            values run from zero to
                            the return value -1.
Purpose                  Result                   Prototype
─────────────────────────────────────────────────────────────────────────────
                            the return value -1.

Gets information about   Fills in the             VOID API InstInfo (IINST
a particular instance    corresponding symbol,    iinst,
                            type, and attribute      ******************ISYM far
                            values (pointer to ISYM,  *******************pisymin
                            TYP, and ATR,            ******************TYP far
                            respectively) given an   *ptype,
                            IINST. ISYM values have  ******************ATR far *
                            been discussed in the    pattr);
                            section "Symbols,"
                            above, and can be used
                            as in the preceding
                            section.

─────────────────────────────────────────────────────────────────────────────



The type value will be exactly one of the following:

    INST_TYP_FUNCTION INST_TYP_LABEL  INST_TYP_PARAMETER INST_TYP_VARIABLE
    INST_TYP_CONSTANT INST_TYP_MACRO
    INST_TYP_TYPEDEF  INST_TYP_STRUCNAM INST_TYP_ENUMNAM INST_TYP_ENUMMEM
INST_TYP_UNIONNAM INST_TYP_SEGMENT
    INST_TYP_GROUP  INST_TYP_PROGRAM

The attribute value describes the storage class and/or scope of the
instance. Any combination of the attribute bits may be set, although some
combinations do not make sense and thus do not occur in practice. These bits
can be tested using the C language bitwise operators, or through the use of
the FInstFilter function (described in Table 7.7). The attribute bits are as
follows:

    INST_ATR_LOCAL  INST_ATR_STATIC  INST_ATR_SHARED INST_ATR_NEAR
    INST_ATR_COMMON  INST_ATR_DECL_ONLY
    INST_ATR_PUBLIC  INST_ATR_NAMED  INST_ATR_MODULE

Several functions designed to help with some typical operations on IINST
values are shown in Table 7.7.

Table   7.7 Attribute-Testing Functions

╓┌────────────────────────┌────────────────────────┌─────────────────────────►
Purpose                  Result                   Prototype
─────────────────────────────────────────────────────────────────────────────
Acts as an attribute     FInstFilter returns      BOOL API FInstFilter
filter                   TRUE if the given IINST  (IINST iinst,
                            value has a TYP value    *********************MBF
                            that corresponds with    mbf);
                            the value passed in MBF.
                            The MBF value can be
                            any bitwise-OR
                            combination of the
                            following constants:
                            mbfNil     mbfVars
                            mbfFuncs
                            mbfMacros  mbfTypes
                            mbfAll

Gets an ASCII            Returns the              LSZ API LszTypInst (IINST
Purpose                  Result                   Prototype
─────────────────────────────────────────────────────────────────────────────
Gets an ASCII            Returns the              LSZ API LszTypInst (IINST
description of an IINST  zero-terminated ASCII    iinst);
variables type           string from the
                            instance index iinst.
                            These correlate
                            directly with the types
                            given above as
                            INST_TYP_LABEL and so
                            on.

Dumps a single           Information about the    VOID API DumpInst (IINST
instance                 instance indexed by      iinst);
                            iinst is output to the
                            standard output using
                            the BSCOutput()
                            callback. The format of
                            the output is
                            <ascii instance name> <
                            ascii type name> <ascii
Purpose                  Result                   Prototype
─────────────────────────────────────────────────────────────────────────────
                            ascii type name> <ascii
                            attribute names>

─────────────────────────────────────────────────────────────────────────────




7.2.4  Definitions and References (IDEF and IREF Variables)

Each instance in the database has an associated set of definitions and
references. These can be accessed by finding the range of valid IDEF or IREF
indexes using one of the following functions:

    VOID API DefRangeOfInst (IINST iinst,
            IDEF far * pidefMin,
            IDEF far * pidefMac);

    VOID API RefRangeOfInst (IINST iinst,
            IREF far * pirefMin,
            IREF far * pirefMac);

Given an instance index iinst, the range of its associated definition and
reference indexes can be determined. In the former case, these are of type
IDEF, and in the latter case, these are of type IREF. From an IREF or an
IDEF, the file name and line number of the reference or definition of an
instance can be determined using one of the following functions:

    VOID API DefInfo (IDEF idef, LSZ far *plszName, WORD far *pline);
    VOID API RefInfo (IREF iref, LSZ far *plszName, WORD far *pline);

────────────────────────────────────────────────────────────────────────────
NOTE

Study the prototype for these two functions carefully. The LSZ argument is
not handled in the normal way; instead of putting the text in a buffer which
the caller provides, the library actually fills in a pointer to where the
name can be found in one of its internal buffers.
────────────────────────────────────────────────────────────────────────────


7.2.5  Uses/Used-by Information (IUSE and IUBY Variables)

Each instance in the database has an associated set of instances that it
uses or is used by. These can be accessed by finding the range of valid IUSE
or IUBY indexes using one of the following functions:

    VOID API UseRangeOfInst (IINST iinst,
            IUSE far * piuseMin,
            IUSE far * piuseMac);

    VOID API UbyRangeOfInst (IINST iinst,
            IUBY far * piubyMin,
            IUBY far * piubyMac);

Given an instance index IINST, the range of its associated uses and used-by
indexes can be determined. In the former case, these are of type IUSE, and
in the latter case, these are of type IUBY. From an IUSE or an IUBY, the
instance used or the instance which uses the queried instance can be
determined, as can the number of times it uses or is used by the queried
instance.

    VOID API UseInfo (IUSE iuse, IINST far *piinst, WORD far *pcnt);
    VOID API UbyInfo (IUBY iuby, IINST far *piinst, WORD far *pcnt);

After a call to one of the above functions, piinst will point to the IINST
value for the instance to which the IUSE or IUBY variable refers. The pcnt
variable will point to the number of times the symbol is used by or uses the
queried IINST.


7.3  Miscellaneous Functions

Table 7.8 describes other useful browser functions:

Table 7.8  Miscellaneous Functions

╓┌────────────────────────┌────────────────────────┌─────────────────────────►
Purpose                  Result                   Prototype
─────────────────────────────────────────────────────────────────────────────
Returns the length of    Assists formatting of    WORD API BSCMaxSymLen (VOID
the largest symbol in    output from database
Purpose                  Result                   Prototype
─────────────────────────────────────────────────────────────────────────────
the largest symbol in    output from database
the browser database     queries.

Determines case          Returns TRUE if the      BOOL API FCaseBSC (VOID);
sensitivity              database was built with
                            a case-sensitive
                            language; returns FALSE
                            otherwise.

Sets the case            Overrides the case       VOID API SetCaseBSC (BOOL f
sensitivity              sensitivity of the
                            database. Lookups in     ********************Sensiti
                            the Symbol Table become
                            case (in)sensitive as
                            specified by
                            fCaseSensitive.

Compares strings         Performs a               INT API CaseCmp (LSZ lsz1,
                            case-insensitive         *************** lsz2);
Purpose                  Result                   Prototype
─────────────────────────────────────────────────────────────────────────────
                            case-insensitive         *************** lsz2);
                            comparison qualified by
                            a case-sensitive
                            comparison if the
                            function fCaseSensitive
                            has set the case
                            sensitivity. Note that
                            this is the order of
                            the symbols in the
                            Symbol Table.

Dumps database           Outputs statistics to    VOID API StatsBSC ();
statistics               the standard output
                            using BSCOutput. The
                            dump for the trivial
                            "Hello world!"  script
                            when this function is
                            called is as follows:

Purpose                  Result                   Prototype
─────────────────────────────────────────────────────────────────────────────

                            :#include <stdio.h>
                            main()
                            {
                                        printf
                            ("Hello world!");
                            }

─────────────────────────────────────────────────────────────────────────────




7.3.1


Totals

    MOD : 3
    MODSYM : 9
    SYM : 9
    INST : 9
    REF : 112
    DEF : 9
    USE : 1
    UBY : 1


Detail

    <Unknown> Modsyms:2
    c:\include\stdio.h Modsyms:6
    hello.c Modsyms:1
    _FAR_    (constant) DEF 1 REF 65 USE 0 UBY 0
    _iobuf    (strucnam:local) DEF 1 REF 1 USE 0 UBY 0
    _MSC_VER    (constant) DEF 1 REF 1 USE 0 UBY 0
    FILE    (typedef:static) DEF 1 REF 35 USE 0 UBY 0
    fpos_t    (typedef:static) DEF 1 REF 2 USE 0 UBY 0
    main    (function:public) DEF 1 REF 0 USE 1 UBY 0
    printf    (function:decl_only:public) DEF 1 REF 2 USE 0 UBY 1
    size_t    (typedef:static) DEF 1 REF 3 USE 0 UBY 0
    va_list    (typedef:static) DEF 1 REF 3 USE 0 UBY 0 2.2


7.4  Browser Objects

The following sections describe processor objects (BOBs).


7.4.1  Creating and Manipulating BOB Variables

The browser library provides several high-level functions which help the
client to query about the information stored in the database. Examples of
such queries are


    ■   Information about the names of all modules in the database

    ■   Functions an instance might call

    ■   Occurrences of a symbol definition


All the queries process one item called a browser object (BOB). A BOB is
actually one of the index values that are encoded along with the type of
index into a 32-bit quantity. Thus, once it is known, the type or "class" of
the BOB can be extracted, as can its appropriate index value (see below).
The  ClsOfBob() macro returns one of the following CLS types for the given
BOB:

    clsMod  clsInst  clsSym
    clsRef  clsDef  clsUse  clsUby

A BOB can be created from either a name of a symbol known to the database or
from an index which is valid with respect to the database.

The following call creates a BOB from the name of an object:

    BOB API BobFrName (LSZ lsz);

If no BOB can be created from the given name, the value bobNil is returned.
If the name is found, then the BOB returned will be either of class clsMod
(if the name was a module name) or of class clsInst (if the name was a
symbol name). If more than one instance is associated with the given name,
the BOB's value will be the first (smallest) such instance.

The following macros can create a BOB from one of the index values. Listed
beside each macro is the macro that performs the reverse operation.

    BobFrMod(IMOD x)  ImodFrBob(BOB b)
    BobFrSym(ISYM x)  IsymFrBob(BOB b)
    BobFrInst(IINST x) IinstFrBob(BOB b)
    BobFrRef(IREF x)  IrefFrBob(BOB b)
    BobFrDef(IDEF x)  IdefFrBob(BOB b)
    BobFrUse(IUSE x)  IuseFrBob(BOB b)
    BobFrUby(IUBY x)  IubyFrBob(BOB b)

────────────────────────────────────────────────────────────────────────────
NOTE

The macros which convert an index into a BOB create a BOB whose CLS
corresponds to the type of index given. But the macros which convert a BOB
back to an index do not check to make sure that the BOB has the correct CLS
to do the conversion. It is up to the user of these macros to do whatever
checking may be required before using them.
────────────────────────────────────────────────────────────────────────────

To retrieve the symbol name of a BOB, use the function

    LSZ API LszNameFrBob (BOB bob);

which returns either a symbol name or a module name, depending on the CLS of
the BOB.


7.4.2  Performing Database Queries

You can initiate several predefined queries (qy...) once a BOB has been
created. These are passed to the function InitBSCQuery along with the BOB
itself.

    BOOL API InitBSCQuery (QY qy, BOB bob);

The function returns TRUE if the query has been initiated successfully, and
FALSE otherwise. Not all queries can be performed of all BOBs (for example,
trying to perform the query 'What does this BOB call?' when the type of the
BOB is actually a module index). The possible queries and their permitted
BOB types are outlined in Table 7.9.

Table   7.9 Database Queries and BOB Types

╓┌────────────┌─────────────────┌────────────────┌───────────────────────────╖
Query        Input BOB Type    Return BOB Type  Function
────────────────────────────────────────────────────────────────────────────
qyFiles      (ignored)         module           Initiate a query about the
                                                modules that are defined
                                                in the database.

qySymbols    (ignored)         instance         Initiate a query about all
                                                the instances of symbols
                                                that occur in the database.

qyContains   module            instance         Initiate a query about the
                                                symbols which are defined
                                                in that module.
Query        Input BOB Type    Return BOB Type  Function
────────────────────────────────────────────────────────────────────────────
                                                in that module.

qyCalls      instance          instance         Initiate a query about the
                                                instances which a function
                                                (instance) calls. If the
                                                instance in that BOB is
                                                not of the type function,
                                                then the list of instances
                                                returned will be of zero
                                                length.

qyUses       instance          instance         Initiate a query about the
                                                instances which an
                                                instance uses.

qyCalledBy   instance          instance         Initiate a query about the
                                                instances which an
                                                instance is called by.
                                                These instances will be of
Query        Input BOB Type    Return BOB Type  Function
────────────────────────────────────────────────────────────────────────────
                                                These instances will be of
                                                the type function.

qyUsedBy     instance          instance         Initiate a query about the
                                                instances which an
                                                instance is used by.

qyUsedIn     instance          module           Initiate a query about the
                                                modules an instance is
                                                used in (referenced).

qyDefinedIn  instance          module           Initiate a query about the
                                                modules an instance is
                                                defined in.

qyRefs       instance, symbol  reference        Initiate a query about the
                                                references to all
                                                instances of the symbol,
                                                or, if the BOB is an
Query        Input BOB Type    Return BOB Type  Function
────────────────────────────────────────────────────────────────────────────
                                                or, if the BOB is an
                                                instance, then the
                                                references to that
                                                particular instance itself.

qyDefs       instance, symbol  definition       Initiate a query about the
                                                definitions of all
                                                instances of the symbol,
                                                or, if the BOB is an
                                                instance, then the
                                                definitions to that
                                                particular instance itself.

────────────────────────────────────────────────────────────────────────────



To obtain the next BOB in the query information, use the following function:


    BOB API BobNext (VOID);

The result of a query is a collection of BOBs. Any one of these may be
passed back to initiate another query, or the name of the symbol for that
BOB may be found using the function LszNameFrBob. To obtain the next BOB in
the collection, this function may be used. If there are no more BOBs left in
the collection, then the value bobNil is returned.


7.5  Generating Calltrees

A very important feature of the browser database is the ability to generate
the calltrees from any function and output the result to the standard
output. These calltrees may be generated both forward and backward from the
given instance index or symbol name. The following functions will generate
the calltree and reverse calltree from either an instance index or a symbol
name, respectively.

    VOID API CallTreeInst (IINST iinst);
    VOID API RevTreeInst (IINST iinst);

    VOID API FCallTreeLsz (LSZ lszName);
    VOID API FRevTreeLsz (LSZ lszName);

The symbol name may either be the name of a function or the name of a
module. In the latter case, the root of the tree is the module name; the
child subtrees are the functions contained in that module. The result is
ASCII output to the standard output. Levels of the tree are denoted by
indentation. If any node is visited more than once, due to cycles in the
call graph, then the name of the node will be succeeded by '...'. If the
source script of the function is not known, then it will be succeeded by
'?'.

    #include <stdio.h>
    void pony    (void);
    void lucifer (void);

    void
    pony()
    {
        printf("I knew a pony");
        lucifer();
    }

    void lucifer()
    {
        printf(" her name was Lucifer.\n");
    }

    main()
    {
        printf("Hello world!\n");
        pony();
    }

The following are three forward-calling calltrees, which are generated by
passing the names hello.c, pony, and main to the function FCallTreeLsz after
the browser database for the above script has been opened. Note that the
second

calltree is a subtree of the final calltree. This is to be expected, since
the function main calls the function pony.

    hello.c  pony  main
    | lucifer | pony  | main
    | | printf? | | printf? | | printf?
    | main  | | lucifer | | pony
    | | printf? | | | printf? | | | printf?
    | | pony    | | | lucifer
    | | | printf?   | | | | printf?
    | | | lucifer...

    | pony...


7.6  Listing Database References

The following function lists references of all symbols in the browser
database which meet the requirements set by the filter mask mbfReqd. These
symbols will be dumped to the standard output. If the function is unable to
complete its task, then the return value is FALSE; otherwise it is TRUE. The
filter mask can be set using the bitwise OR operator.

    BOOL ListRefs (MBF mbfReqd);

For example,

    ListRefs (mbfFuncs | mbfMacros | mbfTypes);

produces the following output:

    FUNCTION  CALLED BY LIST
    lucifer: pony
    main:
    pony:  main
    printf: pony lucifer
    main

    MACRO  USED BY LIST
    _FAR_:
    _MSC_VER:

    TYPE  USED BY LIST
    iobuf:
    FILE:
    fpos_t:
    size_t:
    va_list:


7.7  File Outline Functions

The following function outputs the outline for this module:

    VOID API OutlineMod (IMOD imod, MBF mbf);

Given a module symbol index imod and a filter mask mbf, this function will
output to the standard output all of the symbols in that module with
attributes and type that match the required filter.

For example, a call of this function

    OutlineMod (imod, mbfVars | mbfFuncs);

produces the following output:

    hello.c
    lucifer          (function:public)
    main             (function:public)
    pony             (function:public)

The following function outputs the outline for the module(s) matching the
name/pattern:

    BOOL API FOutlineModuleLsz (LSZ lszName, MBF mbf);

This function performs in a similar way to OutlineMod, except the
zeroterminated string lszName contains the pattern-matching wildcard symbols
'*' and '?'.


7.8  String Processing Functions

Table 7.10 summarizes information about string processing functions.

Table 7.10  String Processing Functions

╓┌────────────────────────┌────────────────────────┌─────────────────────────╖
Action                   Result                   Prototype
────────────────────────────────────────────────────────────────────────────
Simple formatter         Format from the string   VOID API BSCFormat (LPCH
                            lszFormat to the string  lpchOut,
                            lpchOut as specified by  ****************  *LSZ
                            the standard switches.   lszFormat,
                                                    *****************
                                                    va_list va);

Simple printf            Not declared as an API   VOID BSCPrintf (LSZ
replacement              due to the unlimited     lszFormat, ...);
                            number of actual
                            parameters that may be
                            passed to it. This will
                            take one or more zero-
                            terminated strings and
                            output them to the
                            standard output. Only
                            three switches are
Action                   Result                   Prototype
────────────────────────────────────────────────────────────────────────────
                            three switches are
                            supported; these are %s,
                            %d, and %l.

Simple sprintf           See printf above.        VOID BSCSprintf (LPCH
replacement                                       lpchOut, LSZ
                                                    ****************
                                                    lszFormat, ...);

Pattern-matching         Returns TRUE if the      BOOL API FWildMatch (LSZ
function                 pattern string pchPat    pchPat, LSZ
                            matches the string       *******************
                            pchText. The standard    pchText);
                            wildcard symbols may be
                            used ('*' and '?') in
                            the pattern string. The
                            matching is undertaken
                            in the same way that
                            DOS matches file names.
Action                   Result                   Prototype
────────────────────────────────────────────────────────────────────────────
                            DOS matches file names.

Returns the base name    Given a path name lsz,   LSZ API LszBaseName (LSZ
of a path                the base name is         lsz);
                            extracted and returned.
                            If an empty string is
                            passed to the function,
                            then it is returned.

────────────────────────────────────────────────────────────────────────────








PART III  Programmer's Workbench Extensions
────────────────────────────────────────────────────────────────────────────

This is some text for the part openings. This is some text for the part
openings. This is some text for the part openings. This is some text for the
part openings.

This is some text for the part openings. This is some text for the part
openings. This is some text for the part openings. This is some text for the
part openings. This is some text for the part openings. This is some text
for the part openings.






Chapter 8  PWB State File Specification
────────────────────────────────────────────────────────────────────────────

PWB maintains a project-oriented state file to be shared among multiple
applications. These state files are identified by the .STS file extension.

A state file exists for each project you define. If no state file exists,
one is created using "Set Program List" in PWB the first time it is run in a
particular directory. The program list file is the makefile for the project;
the base name of the program list's file name becomes the project name. The
program list is located in the "home" directory for the project, which also
contains the state file for that project.


8.1  Current State File

When the active project is changed (or created), the associated state file
is copied to the INIT directory (or the current directory, if INIT is not
defined) with the name "CURRENT.STS." All updates are made to this "current"
state file, which is then copied back to the project state file under
certain conditions such as calling a shell function, invoking the debugger,
making a project change, or exiting PWB. CURRENT.STS is never deleted, but
remains available to restore default conditions the next time PWB is
started.


8.2  State File Structure

The state file consists of a three-tiered structure containing the following
information:

Category                          Description
────────────────────────────────────────────────────────────────────────────
Shared                            Globally shared and modified information

Generic                           Information specific to a particular
                                    type of tool, such as a debugger

Specific                          Information specific to a particular
                                    tool, such as the CodeView debugger

The overall format of the state file is a text file similar to TOOLS.INI.
Each section is introduced with a tag:

Tag                               Description
────────────────────────────────────────────────────────────────────────────
[shared-]                         Globally shared information

[edit-]                           Information specific to and owned by all
                                    cooperating editors

[debug-]                          Information specific to and owned by all
                                    cooperating debuggers

[cv]                              One of several optional sections
                                    containing information specific to a
                                    particular version or brand of tool, in
                                    this case CodeView

[pwb]                             Another optional section containing
                                    information specific to a particular
                                    version or brand of tool, in this case
                                    PWB

All tools communicate with each other through the shared section. Different
tools of the same type communicate through the generic sections. Tools
communicate with themselves through the tool-specific sections. All path
names in the status file are fully qualified, including the device name.


8.2.1  Globally Shared Information

The items listed in Table 8.1 are placed in the  [shared-]  section of the
status file. It is the responsibility of every cooperating tool in the
system to update this information as appropriate.

Table 8.1  State File Format (Shared)

╓┌──────────┌───────────────────────────────┌────────────────────────────────╖
Tag/Item   Description                     Example
────────────────────────────────────────────────────────────────────────────
version=   Defines the version of the      version=2
            state file being used.
            Cooperating programs may
            either process or
            decline to process state files
            of older versions.
            Programs should decline to
            process state files
Tag/Item   Description                     Example
────────────────────────────────────────────────────────────────────────────
            process state files
            with version numbers newer
            than (greater than) they
            understand.

project=   Defines the location of the     project=d:\zeditor\editor.mak
            project program list/makefile.
            This is used primarily to
            locate the previously active
            project on start-up.

            This example defines the home
            directory  (d:\zeditor), the
            project name  (editor), and
            the project makefile
            (editor.mak).

mark=      Positional "points of            mark=debug newcmd.c 34 1
            interest," such as debugger     mark=debug newcmd.c 40 1
Tag/Item   Description                     Example
────────────────────────────────────────────────────────────────────────────
            interest," such as debugger     mark=debug newcmd.c 40 1
            breakpoints or editor
            bookmarks, to be preserved and
            updated as the associated file
            is modified.
            Syntax is:
            mark=owner file line col
            [other]

            Line numbers are one-based. A
            deleted line is indicated by
            -1. 0 is reserved for future
            use. The column entry is
            required and is one-based; 0
            indicates that no column is
            relevant. Optional "other"
            information can be included on
            the line and should be ignored
            and preserved by applications
Tag/Item   Description                     Example
────────────────────────────────────────────────────────────────────────────
            and preserved by applications
            other than the owner.

            The example shows two debugger
            marks, presumably breakpoints.
            They are defined on lines 34
            and 40 of  newcmd.c. All
            cooperating tools which modify
            files are required to update
            shared mark coordinates. This
            is primarily the concern of
            the editor.

pmark=     Primary mark. The last          pmark=newcmd.c 32 1
            location edited by the editor
            or viewed in the debugger. It
            follows the same syntax as
            other marks except that there
            is only one pmark  definition
Tag/Item   Description                     Example
────────────────────────────────────────────────────────────────────────────
            is only one pmark  definition
            and one mark on that
            definition. When returning to
            the editor from the debug-
            ger, the editor moves to the
            pmark  location.

────────────────────────────────────────────────────────────────────────────




8.2.2  Generic Tool Information

These items are placed in generic locations like  [edit-]  or  [debug-]  to
allow multiple types of editors to communicate among themselves. Once again,
it is the responsibility of every cooperating tool to update this
information.


8.2.2.1  Edit File Tag

The following information is specific to editors:

    [edit-]
        srch=text
        fSrchRe=0
        rpl=new
        src=old
        fRplRe=0
        file=c:\n\update.upd 45 1 49 33
        file=c:\n\update.bat 1 1 1 1
        file=c:\help\doc\appschng.txt 49 1 86 1
        file=c:\nightly.log 1269 1 1271 1

File items have the following meaning:

Tag/Item                          Description
────────────────────────────────────────────────────────────────────────────
srch                              Last search string.

fSrchRe                           Nonzero if last search used regular
                                    expressions,
                                    else zero.

rpl                               Last replacement string of a
                                    search-and-replace operation.

src                               Last object of a search-and-replace
                                    operation.

fRplRe                            Nonzero if last search-and-replace
                                    operation used regular expressions, else
                                    zero.

file                              May be repeated more than one time and
                                    represents the file history for the most
                                    recently active "current" window, most
                                    recently accessed files first. Each file
                                    name is followed by the line and column
                                    that was in the upper left corner of the
                                    display or window, and the line and
                                    column that the cursor was on.


8.2.2.2  Debug File Tag

The following information is specific to debuggers:

    [debug-]
        target=d:\cv3\foo.exe
        watch=slime
        genericbp=D:\CV3\foo.c!main

File items have the following meaning:

Tag/Item                          Description
────────────────────────────────────────────────────────────────────────────
target                            Name of the previously debugged
                                    executable. Checks upon state
                                    restoration that you are using
                                    the same .EXE file as before.

watch                             A watch on a particular variable.

genericbp                         A generic breakpoint, one that cannot be
                                    tied to a line number.


8.2.3  Tool-Specific Information

The form and contents of these sections are left up to individual tools. The
only restraint is that each tool needs to identify its own section with a
tag, as in  [cv]. It is expected that tools follow the purpose of the state
file; i.e., they should store information only in the state file that they
need to preserve across successive invocations of themselves.

The editor maintains the file list associated with the primary window in
Section 8.2.2.1, "Edit File Tag." In the tool-specific section, the editor
keeps additional state information, such as insert mode, window layout, and
additional file instance lists for those windows.


8.2.3.1  PWB Tag

The following information is specific to PWB:

    [pwb]
        screen=43 80
        winstyle=7
        wnd=C 2 1 42 80
        file=c:\hello.c 1 1 1 1

File items in the tools-specific section of PWB have the following meaning:


Tag/Item                          Description
────────────────────────────────────────────────────────────────────────────
screen                            Previously used screen size, rows by
                                    columns.

winstyle                          Window style:

╓┌─────────────────┌─────────────────────────────────────────────────────────╖
────────────────────────────────────────────────────────────────────────────
0                 Plain
1                 Border
3                 Border+vscroll
5                 Border+hscroll
7                 Border+vscroll+hscroll


wnd                               One entry per screen window. First
                                    parameter is a single character:

╓┌────────────────────┌──────────────────────────────────────────────────────╖
────────────────────────────────────────────────────────────────────────────
W                    Regular window
C                    Current window
Z                    Zoomed window


                                    The next two parameters are the row and
                                    column of the upper left corner of the
                                    window. The last two parameters are the
                                    row and column of the lower right corner
                                    of the window.

file                              May be repeated more than one time and
                                    represents the file history for the most
                                    recently active "current window," most
                                    recently accessed files first. Each file
                                    name is followed by the line and column
                                    that was in the upper left corner of the
                                    display or window, and the line and
                                    column that the cursor was on.








Chapter 9  Creating PWB Extensions
────────────────────────────────────────────────────────────────────────────

The new Microsoft Programmer's Workbench (PWB) provides developers with a
flexible software development environment (i.e., an editor, interface or
dialog windows, and "extensions"). As shipped, PWB allows access to almost
all of the Microsoft C 6.0 compiler options, linker options, and even OS/2
Presentation Manager Toolkit options, creating a powerful and easy-to-use
programming environment.


9.1  Extending PWB Functionality

Much of the functionality of PWB, though, is implemented as
extensions─separate C programs stored in separate files and loaded during
the PWB start-up cycle. While some editors allow you to create functions and
link them in with the editor, this editor provides an extensive API─an API
sophisticated enough to support extensions like PWB's own help facility.

PWB provides extension developers with a rich API that includes functions to
load, search, edit, delete, create, and save files; and create and manage
windows, menus, memory, full-screen operations, and even some standard C
run-time library functions.

Custom extensions can do more than just enhance the editor's text editing
functionality. Because extensions become a part of PWB's top-level user
interface, they provide a relatively unrestricted mechanism for coordinating
the interaction of all development tools. For example, if you use Microsoft
C as well as Glockenspiel's C++ front end, you can write a custom extension
to add a pull-down menu, complete with appropriate option settings, that
directly invokes the front end.

PWB's extensibility offers several advantages. Functions implemented as
extensions (rather than as parts of the core .EXE) are easy to
update─Microsoft doesn't have to release a new version of PWB, just a
different extension. PWB's open structure also allows others besides
Microsoft to develop add-on functions. Dozens of tool vendors have already
released extensions that allow PWB to manipulate their products directly.
Finally, extensions allow you to customize and configure PWB by creating and
selecting exactly the extensions you need.


9.2  Major Components

All PWB extensions must contain a "switch" table, "command" table, the
WhenLoaded function, and a PWB function.

The switch table describes the C variables associated with
extension-specific switches. These switches are available through the Editor
Settings command on the Options menu and control the behavior of the
extension.

The switch table is an array of structures of the following form:

    struct swiDesc swTable[] =
    {
        { "NonAnsiCommnents", &bfNonAnsiComments, SWI_BOOLEAN
    },
        { NULL, NULL, 0 } };

The first field contains the name of the switch as it will appear in the
editor Options window. The name can be any text string and contain any
alphanumeric characters─though you should avoid common names such as
"switch" or "flag."

The second field is a pointer to the variable where the flag will be stored.
The variable's type should match that of information required (i.e., use a
char array to get a string, and int to get a whole number).

The last field tells PWB what kind of switch to retrieve.

The end of the swiDesc array is marked with a null entry:

    { NULL, NULL, 0 }.

The "command" table provides the link between PWB and your extension's
functions. The table contains the names of functions resident within the
extension that can be invoked by PWB.

The command table is an array of cmdDesc structures. The first element of
each structure is the name of the function as a text string. PWB calls will
reference the function by this name.

The second part of the cmdDesc structure is the actual PWB function address.
These entry points must be functions defined as PWBFUNC type or

    (_pascal EXTERNAL *func)().

The third field is reserved and always set to zero. Finally, the fourth
field is a combination of flags showing what type of arguments the PWB
function can accept. See Section 9.13, "The Argument Structure," for more
details.

In addition to the developer-defined entry points listed in the command
table, every extension must define a WhenLoaded function. PWB executes the
WhenLoaded function as the extension is loaded during startup. Typically
this function sets up any macros, menus, or initialization required by the C
extension. In addition, it can display a message informing the user that the
extension is loading. The WhenLoaded function is a regular C function
declared as a

    void EXTERNAL WhenLoaded( void ).

PWB Extensions must also have at least one primary function of the type
PWBFUNC. These functions are the code bodies associated with the entry
points defined in the command table─they are the functions called by the PWB
when the user invokes one of the extension commands. Each PWB function must
be of the type PWBFUNC, a macro for

    flagType _pascal _loadds _far.

PWB functions should return TRUE if the extension is able to function
correctly and FALSE if there is an error.


9.3  Arguments for PWB Functions

PWB functions use the arguments to receive user input or cursor and block
highlighting information. The first argument is the unsigned argData
variable that contains the keystroke used to invoke the extension.

The second argument points to a structure set by the user's keystrokes
(either information about the cursor location, text entered by the user, or
text highlighted by the user). See Section 9.13, "The Argument Structure,"
for more details.

The third argument is a Boolean flag that shows whether the Meta was set by
a previous Meta command. The Meta is a flag generated when the user has
pressed the F9 key. It provides a way to produce an alternate meaning for a
specified keystroke. For example, the Meta Exit (F9 then F8) command would
call the exit command with the Meta flag set to TRUE. This would allow the
command function to decide whether to save the file before exiting.


9.4  Creating New Menus

Several API functions provide menu creation and access capabilities. These
should be invoked in the WhenLoaded function so that the menus exist when
the editor is ready for user input.

The AddMenu function creates a new menu. The new menu can be placed in
either the leftmost or rightmost open location on the PWB menu bar. The
exact menu location varies depending on the number of other C extensions
loaded and the order in which extensions are loaded.

The AddMenu function takes four arguments. The first argument is the text
string to use as the menu title (the text that shows up in the menu bar at
the top of the PWB display). You can mark one character in this string as
the menu activation key (the keystroke that selects this entry from the PWB
menu bar) by placing a tilde in front of that character. For example,

    "e~Xample"

would be activated by pressing X. PWB will also highlight the marked
character.

The second argument is a description that appears in the message line at the
bottom of the screen. The third argument is a hook for the PWB help system
that allows the extension developer to supply help text for each of the
extension's menus.

The final argument determines whether the menu is added to the menu bar at
the farthest left or farthest right location. A TRUE value places the menu
at the farthest left open menu bar space.

The AddMenu function returns a handle to the newly created menu. A return
value of -1 signifies an error creating the menu.


9.5  Adding Menu Options

The AddMenuItem function adds options to a menu. Each option requires a menu
handle, a text string to be displayed as the menu option, a description
string shown on the message line at the bottom of the display, a help hook
string, and the PWB function text string description as defined in the
command table.

Again the highlighted selection key for the menu option is marked with a
tilde. You can add a separator bar to the menu bar using the AddMenuItem
function with a menu item title of "-". The AddMenuItem returns a handle to
the menu item for use with the ChangeMenu function.

The AddMenuItem function can even add items to any of the predefined PWB
menus. The API supplies predefined constants you can use as handles for
these menus (see the list below). There doesn't, however, seem to be a way
to retrieve handles to the items in these menus. You can adjust objects that
you add to the menu, but without an item handle, you can't change the
standard menu items. You can, however, add and remove files in the file
menu's file list with the  AddFile and RemoveFile functions.

The following constants can be used as window handles to add options to the
PWB menus:

Constant                          Menu
────────────────────────────────────────────────────────────────────────────
MID_FILE                          File menu

MID_EDIT                          Edit menu

MID_VIEW                          View menu

MID_SEARCH                        Search menu

MID_MAKE                          Make menu

MID_RUN                           Run menu

MID_OPTIONS                       Options menu

MID_EXTENSION                     First extension loaded

────────────────────────────────────────────────────────────────────────────
NOTE

The online help incorrectly gives MID_OPTION as the menu handle constant for
the Options menu.
────────────────────────────────────────────────────────────────────────────


9.6  Modifying a Menu

The ChangeMenu function can change both the contents and the state of a menu
option. Options can be disabled, checked, renamed, or linked to a different
command function.


9.7  Windows

Several functions support window handling, including specialized functions
that provide "pop-up" windows containing messages or even files. You can
create standard windows using the SplitWnd function, deciding how
(horizontally or vertically) and where (what line) to split the current
window. PWB returns a handle to the new window (of type PWND). You can
change the size of any window (down to a minimum of five lines by 10
columns) with the Resize function.

The GetEditorObject function will retrieve the handle of an existing window.



9.8  File Buffers

In PWB, you access most files through "file buffers," memory buffers that
hold the contents of a file. When a PWB extension requires access to a file,
it must first request a special handle to a file buffer. The
FileNameToHandle function returns the file handle associated with a file
name and is defined:

    PFILE FileNameToHandle( char far *PathName,
                            char far *pszShortName );

The first argument is the complete name of the file (i.e., the base name
plus the extension) and may include a path name also. If the first argument
is NULL, then the argument isn't used.

The second argument is the "short" (or base) name of the file. PWB searches
its list of files for a matching base name and returns that file's handle.
If the file doesn't match any located in the internal PWB list, then PWB
returns an error code of PNULL (not NULL). The second argument also can be
NULL, in which case PWB ignores it. If both arguments are NULL, PWB opens
the current file.

Character string constants should be typecast to (char far *) if used as
arguments. The cast insures that the compiler doesn't generate a NULL
address as the argument to the function (which would then cause PWB to
return the handle to the current file and not report an error).

The AddFile function creates a file buffer and associates a file with it,
returning a file handle. The file name must include both the base name and
extension, and may include a path. This function always returns with a file
handle, even if the extension gives it an illegal path name, so care should
be taken when the extension creates the path name.

Given a file handle, the FileRead function will load the current contents of
the disk file into the file buffer. FileRead initializes the buffer for
files just opened with AddFile, but will overwrite changes to the current
file if used on handle pointers retrieved with FileNameToHandle.

Extensions can make changes to the file buffer through a series of reads and
writes to the buffer. The GetLine function reads a specified line from the
file buffer into a local buffer:

    COL colMaxLength;
    LINE yStart;
    PFILE pfile;
    char pszInBuffer[ BUFLEN ];
    colMaxLength = GetLine( yStart,
                            pszInBuffer, pfile );

The line variable (defined currently by Microsoft as  long, but the type
LINE  should be used to provide upward compatibility with future releases of
PWB extension files) is a zero-based line number (first line of file buffer
is line zero) that specifies the line of the file to retrieve. The buffer
variable is a far pointer to an array large enough to hold the entire line
being read. The type  linebuf  can be used to declare the buffer array and
will guarantee that the buffer is large enough. The constant  BUFLEN
specifies the maximum line length.

The PutLine function writes a local buffer into the file buffer. The PutLine
function has the same calling convention as GetLine. It replaces the
specified line in the file buffer with the contents of the local buffer.

The FileWrite function will force the file buffer to be written to the disk,
updating the disk file. PWB will also give the user an opportunity to save
the file buffer during the PWB exit cycle.

Not all file buffers are associated with disk files. A PWB pseudofile exists
only in memory. PWB maintains several pseudofiles, including one for the
current editor settings, the current clipboard, and one that contains the
results of the most recent compile or build.

The FileNameToHandle function will also return a file handle to pseudofiles.
For example, to access the editor settings, just call FileNameToHandle with
the short file name <assign>. Any of the items in this pseudofile (including
screen size, window sizes, build options, and defined macros) can be altered
just as if the pseudofile was a normal file buffer.

The clipboard and compile output files are identified as <assign> and
<compile>, respectively.


9.9  Miscellaneous API

The omnibus GetEditorObject retrieves various information about files,
colors, and windows. For example, you can get a handle for the current
window with the call:

    PWND pwndCurrent;
    GetEditorObject( RQ_WIN_HANDLE, 0, &pwndCurrent );

Microsoft calls the first parameter the "infotype" parameter. It specifies
what object should be retrieved. The second parameter is the object
"qualifier" and is zero for most objects.

The GetEditorObject function will retrieve the window "number" of the
current window when passed RQ_WIN_CUR. The top left window is number one.
The GetEditorObject function can also retrieve the window number associated
with a given window handle.

The GetString function allows extensions to display a dialog box that asks
the user for text strings.

Using the fExecute function, the extension can execute any command available
to the user─macros can be changed, menu commands executed, and keystrokes
entered.

The GetCursor and MoveCur functions will position the cursor in the active
window. The DoMessage function writes the text string out to the dialog line
(the line used for output, typically located on the left part of the lowest
line on the display).


9.10  An Example Extension

The file CURLYBRC.C (see Section 9.14) is a PWB extension that finds
matching curly braces and parentheses in the current file. When invoked,
this extension will search the current line for either an opening curly
brace ("{") or an opening parenthesis. It will then find the matching curly
brace or indicate that no match exists if the file has unmatched braces or
parentheses. This example demonstrates how to create PWB menus, set
activation keys, and access the current file.

In this extension, the WhenLoaded function creates a menu and several menu
options. It also displays a message indicating the loading of Curly Brace
Matching functions using the DoMessage function.

Two PWB functions are defined, one for matching curly braces ("{}") and one
for matching parentheses. The curly brace matching function is defined:

    PWBFUNC CheckCurlyBrace(
        unsigned argData, ARG _far *pArg,
        flagType fMeta ) {
        return ScanText( MODE_CURLYBRACES ); }


9.11  Building the Extension

There are two different ways to build a C extension. The first and easiest
is to build the extension within PWB. The Build menu includes options for
both DOS and OS/2 PWB extensions.

Building an extension without using PWB requires compiling the C source
files using

    /c /As /Af /Aw

to produce near code and far data, and making sure that

    SS != DS

Default code may be far, using instead

    /Al /Af /Aw

and not automatically linking the file (/c). Stack checking must be turned
off (the /Gs option). Extensions that use global variables must be compiled
with /Au instead of /Aw to reload DS properly on function entry.

Linking will require that EXTHDR.OBJ (for DOS extensions) or the file
EXTHDRP.OBJ (for OS/2 extensions) be in the current directory. These files
are included as part of the Microsoft C version 6.0 Compiler. The EXT.H file
must be in the INCLUDE directory (this is where the C 6.0 installation
places it). Finally, the EXTSUP.LIB must be in the LIB directory.

OS/2 PWB C extensions always have the .PXT file extension. DOS PWB C
extensions use the .MXT file extension. The EXT.DEF file comes with the
Microsoft C 6.0 Compiler and should be linked into OS/2 PWB C extensions to
provide the correct references for the PWB API functions. If you are
building the extension for OS/2 version 1.0, you must change the name of the
extension's output file extension from .PXT to .DLL. If you wish to build an
extension that uses the DLL version of the C run-time library, then replace
the /ACu with /ML.

Normally, extensions are placed in the BIN directory, but during development
it's more convenient to have the load statement read the file from the
current directory. This allows PWB to reread the extension immediately after
you build it, so you can test the extension without having to leave PWB.

To tell PWB to use an extension, place an appropriate load: command to the
TOOLS.INI file.


9.12  Tips and Hints

Building extensions is both easier and harder under DOS. The process is
easier under DOS because alterations to the C extension can be tested
immediately without exiting PWB. Because the OS/2 file sharing protection
prevents alteration of an open file, to test an alteration under OS/2 you
must alter the TOOLS.INI file (removing the load command), exit PWB, then
restart it to build the extension, re-edit the TOOLS.INI, exit PWB, and
again restart it to test the extension. This problem exists even with
multiple PWB sessions, since the extension file is still opened by the
original instance of PWB.

On the other hand, the CodeView debugger cannot be used to debug extensions
under DOS, but can be under OS/2.

Some of the DOS C run-time library functions can be called. Unfortunately,
functions that dynamically allocate buffer space (such as sprintf()) will
always fail. Fortunately, it's simple to tell whether a function can be used
safely─if the linker doesn't complain then the function is safe. OS/2
eliminates this library limitation if you link with the DLL C run-time
library.

You can generate written documentation for creating PWB extensions by using
the MAKEHELP.EXE utility to decode the PWB help file (PWB.HLP). Use

    MAKEHELP /D PWB.HLP

to generate a large text file containing all the PWB help information. Edit
it to remove the MAKEHELP control codes, creating a complete reference that
can be printed on any printer. Combining the online help with the printed
text really simplifies extension development.


9.13  The Argument Structure

PWB passes a pointer to an argument structure on every entry to a PWBFUNC
function. This argument has the following form:

    struct ARG
        {
        int argType;
                union
                        {
                        struct noargType noarg;
                        struct textargType textarg;
                        struct nullargType nullarg;
                        struct lineargType linearg;
                        struct streamargType streamarg;
                        struct boxargType boxarg;
                        } arg;
        };

The union within the structure allows the PWBFUNC function to handle all
standard argument types with a single parameter. For robustness, extension
functions that accept more than one type of argument must check the argType
before processing the argument. However, PWB will pass only the argument
types specified in the command description (cmdDesc) table. If you specify
only one type in the table, or if the type won't be used, you can ignore the
argument type and value.

Some of the most important argument types are as follows:

Argument                          Description
────────────────────────────────────────────────────────────────────────────
TEXTARG                           Allows the user to pass in a text
                                    argument string

LINEARG                           Passes the location of the first and
                                    last marked lines

BOXARG                            Passes the coordinates of the four
                                    corners of a highlighted box

BOXSTR                            Passes in the string of the highlighted
                                    text

NOARG                             No argument required by the function

Some different argument types generate the same type of information. For
example, both NULLEOL and NULLEOW (discussed below) use the TEXTARG type for
their arguments.

All argument types, except NOARG, read the number of arguments that PWB
generates (i.e., the number of times the user pressed the ALT+A combination
before pressing the extension activation keys). The count is stored in the
cArg element of the structures.

To read text string arguments, use the textargType structure (type TEXTARG).
Like the NOARG type, TEXTARG supplies cursor location information, but
TEXTARG also returns the argument text entered by the user. This structure
is also used by NULLEOL (retrieves text from cursor location to end of
line),  NULLEOW (retrieves text from cursor location to next white space),
and BOXSTR (retrieves all text within a highlighted argument box) command
table flags.

To find the first and last lines highlighted, use the lineargType structure
(type LINEARG). LINEARG sets the LINE yStart to the first line highlighted
and the LINE yEnd to the last line highlighted. The NUMARG command table
flag also uses this structure. NUMARG requires a numeric argument from the
user and then calculates a line number in the file buffer by adding the
argument to the current line, storing that value in yEnd.

To get the four corners of a highlighted area, use the boxargType (type
BOXARG). BOXARG returns the top left and bottom right column (COL xLeft,
xRight) and row (LINE yTop, yBottom) coordinates of the highlighted block.


9.14  CURLYBRC.C

    /*
        File: CURLYBRC.C
        Author:  Bill Perez/Mario Perez
        Date:  6/17/1990
        Purpose:  Finds matching curly braces in current
                file buffer of PWB.
        Operating System:  MS-DOS 3.x
    */

    /* Include Files */
    #include <stdlib.h>
    #include <ext.h>

    /* Define Statements */
    #define MODE_CURLYBRACES     0
    #define MODE_PARENTHESIS     1

    /* Structures */

    /* Type Definitions */

    /* Prototypes */
    void EXTERNAL WhenLoaded( void );
    PWBFUNC CheckCurlyBrace( unsigned argData, ARG _far *pArg,
                            flagType fMeta );
    PWBFUNC CheckParenthesis( unsigned argData, ARG _far *pArg,
                            flagType fMeta );

    /* Global Variables */
    char pszOpenBrace[ 2 ] = "{";
    char pszCloseBrace[ 2 ] = "}";
    char pszOpenParen[ 2 ] = "(";
    char pszCloseParen[ 2 ] = ")";

    /* Switch table */
    struct swiDesc swiTable[] =
    {
        { "OpenBrace",  toPIF( pszOpenBrace ), SWI_SPECIAL },
        { "CloseBrace", toPIF( pszCloseBrace ), SWI_SPECIAL },
        { "OpenParen",  toPIF( pszOpenParen ), SWI_SPECIAL },
        { "CloseParen", toPIF( pszCloseParen ), SWI_SPECIAL },
        { NULL, NULL, 0, }
    };

    /* Command Table */
    struct cmdDesc cmdTable[] =
    {
        { "CheckCurlyBrace", CheckCurlyBrace, 0,
        NOARG | NULLARG },
        { "CheckParenthesis", CheckParenthesis, 0,
        NOARG | NULLARG },
        { NULL, NULL, 0, 0 }
    };

    // Called during loading by PWB for initialization purposes.

    void EXTERNAL WhenLoaded( void )
    {
        int hMatch;

    DoMessage( "Loading Curly Brace Matcher" );

        // Create the top-line menu bar menu
        hMatch =
            AddMenu(
            "Ma~tch",
                "Match curly braces or parenthesis",
                "",
                TRUE );

        // Create menu item under Match menu
        AddMenuItem(
            hMatch,
            "Match ~Curly Brace",
            "Matches curly braces",

                NULL,
                "CheckCurlyBrace");

        // Place separator between options
        AddMenuItem( hMatch,"-","","","");

        AddMenuItem(
            hMatch,
            "Match ~Parenthesis",
            "Matches parenthesis",
            NULL,
            "CheckParenthesis");

        // Set key for functions
        SetKey( "CheckCurlyBrace", "shift+ctrl+b" );
        SetKey( "CheckParenthesis", "shift+ctrl+p" );
    }

    // Searches from current location for first curly brace until

    // closing curly brace found (counting all curly braces from
    // there until closing one found or end of file found).
    // Reports error if unmatched brace found.
    unsigned int ScanText( unsigned int uMode )
    {
        LINE yStart,
            yStartInit,
            lineCurrent,
            lines_in_file;
        COL xStart,
            xStartInit,
            column,
            colMaxLength;
        int brace_count = 0;
        int col;
        PFILE pFile;
        char pszInBuffer[ BUFLEN ];
        char pszOpenChar[ 2 ],
            pszCloseChar[ 2 ];

    DoMessage(
            uMode == MODE_CURLYBRACES ?
            "Searching for opening curly brace" :
            "Searching for opening parenthesis" );

        farstrcpy(
            pszOpenChar,
            uMode == MODE_CURLYBRACES ? pszOpenBrace :
                                        pszOpenParen );

        farstrcpy(
            pszCloseChar,
            uMode == MODE_CURLYBRACES ? pszCloseBrace :
                                        pszCloseParen );

        // Get starting location - (both line and column).
        GetCursor( &xStart, &yStart );
        yStartInit = yStart;
        xStartInit = xStart;

        // Get handle to file
        pFile = FileNameToHandle( "", "" );

        // Get the number of lines in the files
        lines_in_file = FileLength( pFile );

        // Read current line
        colMaxLength = GetLine( yStart, pszInBuffer, pFile );

        // Find opening brace on this line (starting first from

        // current location, then from first column on current
        // line to end of current line - if not found, then error
        // message in message box).
        if( pszInBuffer[ xStart ] != pszOpenChar[ 0 ] )
        {
            for( column = 0; column < colMaxLength; column++ )
                if( pszInBuffer[ column ] == pszOpenChar[ 0 ] )
                {
                    xStart = column;
                    MoveCur (xStart, yStart );
                    xStartInit = xStart;
                    break;
                }
            if( column >= colMaxLength )
            {
                DoMessageBox(
                "",
                uMode == MODE_CURLYBRACES ?
                    "Starting curly brace not found" :
                    "Starting parenthesis not found",
                "",
                MBOX_OK,
                0 );

                return FALSE;
            }
        }

        DoMessage(
            uMode == MODE_CURLYBRACES ?
            "Searching for closing curly brace" :
            "Searching for closing parenthesis" );

        /* We found an opening brace, or wouldn't be here */
        brace_count = 1;

        // Slide past current opening brace character in current

        // buffer
        xStart++;

        // Loop until closing brace found starting from
        // xStart, ystart
        while( brace_count )
        {
            for( col = xStart; col < colMaxLength; col++ )
            {
                if( pszInBuffer[ col ] == pszOpenChar[ 0 ] )
                {
                    brace_count++;
                    continue;
                }

                if( pszInBuffer[ col ] == pszCloseChar[ 0 ] )
                {
                    brace_count--;
                    /* More braces to find? */
                    if( brace_count )
                        continue;
                    else
                    (
                    /* All braces found, since none are left */
                        xStart = col;
                        break;
                    }
                }
            }

            if( brace_count )
            {
                /* Should really check to see that yStart is in file
    */
                if( yStart < lines_in_file )
                    colMaxLength = GetLine( ++yStart,
                                            pszInBuffer, pFile );
                else
                {
                    MoveCur( xStartInit, yStartInit );
                    DoMessage(
                        uMode == MODE_CURLYBRACES ?
                        "Couldn't find matching curly brace" :
                        "Couldn't find matching parenthesis" );
                    break;
                }
                xStart = 0;
            }
            else
            {
            /*  Move the cursor to the row and column found */
                MoveCur( xStart, yStart );
                DoMessage(
                    uMode == MODE_CURLYBRACES ?
                        "Found closing curly brace" :
                        "Found closing parenthesis" );
            }
        }
        return TRUE;
    }

    // Sets mode to search for curly braces, then scans text
    PWBFUNC CheckCurlyBrace( unsigned argData, ARG _far *pArg,
                            flagType fMeta )
    {
        // Set up characters to search for based on mode
        return ScanText( MODE_CURLYBRACES );
    }

    // Sets mode to parenthesis
    PWBFUNC CheckParenthesis( unsigned argData, ARG _far *pArg,
                            flagType fMeta )
    {
        return ScanText( MODE_PARENTHESIS );
    }


9.15  Summary

Creating C extensions to work with the Microsoft PWB is not difficult, with
the proper information. Once you know what to look for, the online help
provides a quick and easy reference. Many third-party developers have
already announced PWB extensions that integrate their tools into PWB. With
such a rich set of development functions to choose from, you should expect
to see many more third-party-developed extensions available in the near
future.

This article originally appeared in TECH Specialist, August 1990, page 57.
It is reprinted with permission of R&D Publications, Inc., 2601 Iowa,
Lawrence, KS 66046, (913) 841-1631.
```

{% endraw %}
