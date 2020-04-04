---
layout: page
title: "MS Professional Advisor - Library Reference"
permalink: /documents/books/programming/mspl13/c/cadvisor/
redirect_from: /pubs/pc/reference/microsoft/mspl13/c/cadvisor/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft  Professional Advisor - LIBRARY REFERENCE








────────────────────────────────────────────────────────────────────────────
            Microsoft (R) Professional Advisor - LIBRARY REFERENCE


────────────────────────────────────────────────────────────────────────────


                        FOR MS (R) OS/2 and MS-DOS (R)
                                OPERATING SYSTEMS








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


Microsoft, MS, MS-DOS, CodeView, and QuickC
are registered trademarks of Microsoft Corporation.

Apple and Macintosh are registered trademarks of Apple
Computer, Inc.

IBM is a registered trademark of International Business
Machines Corporation.



Document No. LN18160-0990
                            OEM D/0711-1Z

10 9 8 7 6 5 4 3 2 1







Introduction

Chapter 1  The Help Database

        1.1   QuickHelp ASCII
            1.1.1    Formatting Flags
            1.1.2    Cross-References
            1.1.3    QuickHelp Example
        1.2   Minimally Formatted ASCII
        1.3   Unformatted ASCII
        1.4   RTF ASCII
            1.4.1    RTF Example
            1.4.2    Local Contexts
        1.5   Physical Database Organization
            1.5.1    Concatenated Order
            1.5.2    Decompressed Topic Format
        1.6   The Encoding Process

Chapter 2  Text Structure and Conventions

        2.1   Authoring the Help Database
            2.1.1    QuickHelp Format
            2.1.2    RTF Format
        2.2   Hotspots and Cross-References
        2.3   Topic Commands
        2.4   Cross-Reference Commands
        2.5   Context Conventions
            2.5.1    Contexts Covered by Convention
            2.5.2    Required Contexts
            2.5.3    Recommended Contexts
            2.5.4    Product-Specific Contexts
        2.6   Hierarchical Contexts
        2.7   Environment Support

Chapter 3  The HELPMAKE Program

        3.1   HELPMAKE Options
            3.1.1    Encoding Options
            3.1.2    Other HELPMAKE Options

Chapter 4  Applications Interface

        4.1   Defining the Interface
        4.2   Base File Management
        4.3   Context String Management
        4.4   Topic Look-Up and Decompression
        4.5   Context Maneuvering
        4.6   Topic Display
        4.7   Cross-References
        4.8   Utility
        4.9   Help Engine Callbacks
        4.10  Interface Usage

Chapter 5  Size and Performance

        5.1   Help Engine
        5.2   HELPMAKE.EXE

Glossary



Introduction
────────────────────────────────────────────────────────────────────────────

The Microsoft(R) Professional Advisor Library Reference contains information
about the help library supplied with Microsoft C products. There are several
advantages to using the Advisor Help Library.

Speed and Maneuverability - The help desired by the user must be available
quickly, with a minimum of user decisions and selections. To achieve this
goal, the Advisor Help Library supports cross-referencing, context
sensitivity, preserves previous help activity, and flexible help-text
organization.

Modification - Users and/or application developers need to be able to add
help text to the help system and modify existing help text to suit their
applications and environments. To meet this need, a maintenance utility
performs both compression and decompression of help files. Also, the Advisor
Help Library provides the ability to read uncompressed ASCII text as a help
file.

Integration - The help text presented must be available to outside
applications. The Advisor Help Library provides support routines necessary
to allow the application to access this valuable help text.

Size - It is important to create help files that take up minimal disk space
but do not at the same time severely impact look-up speed. The Advisor Help
Library provides three compression algorithms to reduce disk space and meet
speed requirements.

The Advisor Help Library includes the following files:

File Name                         Description
────────────────────────────────────────────────────────────────────────────
HELPMAKE.EXE                      Bound Help-File-Maintenance Utility.

MSHELP.DLL                        OS/2 help engine in DLL form.

MSHELP.LIB                        OS/2 help engine export library.

MHELP.LIB                         Medium-model help engine.

MHELPH.LIB                        Medium-model help engine using
                                    handle:offset.

LHELP.LIB                         Large-model help engine.

WHELPP.LIB                        SS!=DS help engine, protected mode.

WHELPR.LIB                        SS!=DS help engine, real mode.

HELP.H                            Help engine include file. All
                                    applications should
                                    use this.

MSHELP.DEF                        .DEF file for applications that can use
                                    it.

SHELP.LIB                         Small-model help engine.

────────────────────────────────────────────────────────────────────────────
NOTE

The pages that follow use the term "OS/2" to refer to the OS/2
systems─Microsoft Operating System/2 (MS(R) OS/2) and IBM(R) OS/2.
Similarly, the term "DOS" refers to both the MS-DOS(R) and IBM Personal
Computer DOS operating systems. The name of a specific operating system is
used when it is necessary to note features that are unique to the system.

────────────────────────────────────────────────────────────────────────────






Chapter 1  The Help Database
────────────────────────────────────────────────────────────────────────────

There are four types of format text for the topical contents of the help
database:

ASCII Format                      Description
────────────────────────────────────────────────────────────────────────────
QuickHelp                         Default source format for compressed
                                    databases

Minimally formatted               Can be either compressed or read
                                    directly from the help engine

RTF                               An alternate source for the compressed
                                    database

Unformatted                       For use directly by the help engine


1.1  QuickHelp ASCII

QuickHelp uses "dot" commands and embedded formatting characters to convey
information to HELPMAKE. For example:

    .context

Each topic is preceded by one or more .context commands that indicate the
context string for the following topic text up to the next .context line.
More than one .context command may be specified for a single topic, if no
topic text is placed between them. For more information on topic commands,
see Section 2.3 in Chapter 2, "Text Structure and Conventions."


1.1.1  Formatting Flags

The following flags may be embedded in the text to change the attributes of
the topic text:

Formatting Flag                   Action
────────────────────────────────────────────────────────────────────────────
\b or \B                          Bold

\i or \I                          Italic

\p or \P                          Plain

\u or \U                          Underline

\v or \V                          Invisible

The flags \b, \i, \u and \v are toggles, turning on and off their respective
attribute. They may be combined. The \p flag turns off all attributes.

The backslash character also escapes the character which follows it, that
is,

\b

indicates the toggling of the bold attribute, while

\\b

places a " \b" into the actual text.

Lines are truncated to the specified width in characters (which defaults to
76); flags affecting the attribute do not count towards the 76-character
limit. When "/T" is specified, lines beginning with the specified
application's control character or "." are truncated at 255, regardless of
the width specification.


1.1.2  Cross-References

Cross-references are embedded in one of two ways:


    1.  Invisible text, immediately following a space-delineated word,
        generates a cross-reference whose text is the invisible text and whose
        hotspot is the entire word.

    2.  An anchor, signified by " \a", followed by normal text, which is then
        followed by invisible text, generates a cross-reference whose text is
        the invisible text and whose hotspot is all text between the anchor
        and the beginning of the invisible text.



1.1.3  QuickHelp Example

The following is an example of a help database containing a single entry
using QuickHelp format:

    .context  #define
    Syntax:   #define <identifier> <substitution-text>
            #define <identifier> [(<parameter-list>)]
            <substitution-text>

    Replaces all subsequent cases of \bidentifier\p with the
substitution-text.
    If \bparameter-list\p is given after \bidentifier\p, each occurrence
    of \bidentifier\p (\bparameter-list\p) is replaced with a version
    of \isubstitution-text\p modified by substituting actual
    arguments for formal parameters.


1.2  Minimally Formatted ASCII

Uncompressed, minimally formatted ASCII help files can be used at run time
at the cost of slower searches and larger help files. Unformatted ASCII
files are a fixed width and may not contain highlighting or
cross-references.

The help file is a sequential series of topics, each preceded by one or more
unique context definitions. Each context definition should be on a line of
its own, beginning with ">>." Subsequent lines up to the next context
definition constitute the topic text. For example:

    >>#define

    Syntax:   #define <identifier> <substitution-text>
            #define <identifier> [(<parameter-list>)]
            <substitution-text>

    Replaces all subsequent cases of identifier with the substitution-text.
    If parameter-list is given after identifier, each occurrence of identifier

    (parameter-list) is replaced with
    a version of substitution-text modified by substituting actual arguments
    for formal parameters.

The minimally formatted ASCII help file must begin with ">>." Since the
first topic in such a database must start with a context definition line
anyway, this allows for limited error checking to ensure that the referenced
file is indeed an ASCII help file.

Minimally formatted ASCII files do not support non-default attributes or
cross-references.


1.3  Unformatted ASCII

Fully unformatted ASCII files may be cross-referenced by other help files.
When referenced, the entire ASCII file is treated as a single help topic. No
formatting information may be present in such a file, and color may not be
used. The file is returned by the help engine "as is." Such a file has no
physical "next" or "previous."


1.4  RTF ASCII

In this format, the database is formatted in a subset of RTF to support
special attributes. RTF syntax outside of the understood subset is ignored
and stripped out by HELPMAKE. RTF generated by other programs such as
Microsoft Word 4. x, Microsoft Word for the Apple(R) Macintosh(R), or
Word-RTF can be used directly. This allows help authors to write and format
directly in these word processors.

HELPMAKE recognizes the subset of RTF listed below:

RTF Code                          Action
────────────────────────────────────────────────────────────────────────────
\plain                            Reset to default attributes. On most
                                    screens this is unblinking normal
                                    intensity.

\b                                Bold. This is displayed as intensified
                                    text.

\i                                Italic. Displayed as reverse video.

\v                                Hidden text. Hidden text is used for
                                    cross-reference information and some
                                    application-specific communications, and
                                    is not displayed.

\ul                               Underline. Represented as blue text on
                                    adapters which do not support
                                    underlining.

\par                              End of paragraph.

\pard                             Reset paragraph formatting to defaults.

\fi                               Paragraph first line indent.

\li                               Paragraph left indent.

\line                             New line (not new paragraph).

\tab                              Tab character.

Topics may be paragraph-broken. HELPMAKE formats the text to a fixed width
at compression time.

Each entry in the database source consists of one or more context strings,
followed by topic text. The sequence ">>" at the beginning of any paragraph
denotes the beginning of a new help entry. Subsequent text within that
paragraph constitutes the keyword. If the immediately following paragraph
begins with ">>," it also defines a context string for the same topic text.
Subsequent paragraphs, up to the next paragraph beginning with ">>",
constitute the topic text associated with those contexts.


1.4.1  RTF Example

The following is an example of a help database containing a single entry
using minimal RTF text:

    {\rtf0
    >> #define \par
    Syntax:\tab #define <identifier> <substitution-text>
    \par
    \tab #define <identifier>[(<parameter-list>)] <substitution-text>
    \par
    \par
    Replaces all subsequent cases of {\b identifier} with the
substitution-text.
    If {\b parameter-list} is given after {\b identifier}, each occurrence
    of
    {\b identifier} ({\b parameter-list} ) is replaced with a version
    of
    {\i substitution-text} modified by substituting actual arguments for
    formal parameters. \par
    }

The result, referenced by the context string #define:

    Syntax: #define <identifier> <substitution-text>
            #define <identifier>[(<parameter-list>)] <substitution-text>

    Replaces all subsequent cases of identifier with the substitution-text.
    If parameter-list is given after identifier, each occurrence
    of identifier (parameter-list) is replaced with a version
    of substitution-text modified by substituting actual
    arguments for formal parameters.

Note that the bold attributes in this example are shown as underline.


1.4.2  Local Contexts

In RTF, QuickHelp, and minimal ASCII formats, certain context strings may be
defined as local contexts, being "local" to the help file. Then these
context strings may not be looked up by HelpNc, but instead may be used only
as the target of embedded cross references in the text.

Local contexts are encoded just like normal contexts, except that they begin
with the at-sign character (@). The actual strings following the at sign are
discarded by HELPMAKE during compression. Cross-references to local contexts
are then encoded in the help file in a more compact form.

Local contexts provide the following advantages:


    ■   Space savings. The context strings are not preserved and hence are not
        carried in the help file's context string table. Cross-references to
        local contexts do not reference the actual context string, but instead
        are encoded in a smaller, 3-byte format.

    ■   Access restriction. You cannot mistakenly ask for help on what would
        be a local context string.


The following restrictions also apply:


    ■   Local contexts must be resolvable within a single help file. HELPMAKE
        produces warnings if a local context is cross-referenced, but never
        defined in the help file being created.

    ■   Topics which are the targets of local contexts can be accessed in only
        two ways: as the target of a cross-reference or by physical or
        historical relative movement in the help file (Next, Previous, or
        Back).

        For example:

        .context normal
        This is a normal topic, accessible by the context string "normal."
        [button\v@local\v] is a cross-reference to the following topic.

        .context @local
        This topic can be reached only by physical previous or next, a
historical
        backup, or by the cross-reference in the previous topic.



1.5  Physical Database Organization

The physical database consists of several pieces, as outlined below:

    +-----
    | Header
    +-----
    | Topic Index
    +-----
    | Context Strings
    +-----
    | Context Map
    +-----
    | Keyphrase Table
    +-----
    | Huffman Decode Tree
    +----
    | Compressed Topic Text
    +----
    | File Title
    +----

Help files may also be concatenated together so that the above pattern is
repeated. For example,

    COPY FOO.HLP/B + BAR.HLP/B + YOU.HLP/B MONDO.HLP/B

This command creates a single help file called MONDO.HLP, which consists of
the three component help files: FOO, BAR, and YOU. This file, when opened by
the help engine, counts as three files against the engine's open file limit.
In most other respects, it acts exactly like a single help file.


1.5.1  Concatenated Order

The next several sections explain the pieces in the order in which they
physically appear in a concatenated help database.

Header - Identifies the help file and contains data relating to the content
of the file. It is described by the following C structure:

    typedef struct {
        ushort      wMagic;
        ushort      wSignature;
        ushort      wFlags;
        ushort      appChar;
        ushort      cTopics;
        ushort      cContexts;
        ushort      cbWidth;
        ushort      cPreDef;
        uchar       fname[14];
        ushort      reserved[2];
        ulong       posTbl[9];
        ulong       fsize;
        } header;

where the following information is called out by the left-hand column:

Header Data                       Description
────────────────────────────────────────────────────────────────────────────
wMagic                            A word that identifies this as a help
                                    file.

wSignature                        A word that identifies the "owner" or
                                    application that uses this help file.

wFlags                            A word that contains the following
                                    flags:

                                    Bit         Action
────────────────────────────────────────────────────────────────────────────
                                    0           Set if context look-up is to
                                                be case sensitive.

                                    1           Set if the file is locked
                                                and cannot be
                                                decompressed.

appChar                           Application-specific character,
                                    controlling access to certain line of
                                    help text. (See the /A parameter to
                                    HELPMAKE.) 0xff if not set.

cTopics                           A count of entries in the topic index.

cContexts                         A count of context strings.

cbWidth                           The fixed width encoded by HELPMAKE, if
                                    one was specified. If zero, the data
                                    must be formatted to the display width
                                    by the application.

cPreDef                           Count of predefined contexts.

fname                             The original file name created by
                                    HELPMAKE. This is used to identify
                                    individual help files which have been
                                    concatenated into larger help files.

posTbl                            A table of file positions for the
                                    various fields in the database:

                                    File        Description
                                    Position
────────────────────────────────────────────────────────────────────────────
                                    0           File offset of the topic
                                                index.

                                    1           File offset of the context
                                                strings.

                                    2           File offset of the context
                                                map.

                                    3           File offset of the keyphrase
                                                table;
                                                0 if keyphrase compression
                                                was
                                                not performed.

                                    4           File offset of the Huffman
                                                decode
                                                tree; 0 if Huffman encoding
                                                was
                                                not performed.

                                    5           File offset of text of the
                                                first topic.

                                    6           File offset of file title.

                                    7-8         Reserved.

                                    9           Size of help file in bytes.

Topic Index - A table of file positions for each topic contained in the
help file. Topic #n's file position can be found in the nth
entry in this table. In addition,
the size in bytes of any compressed topic can be determined by the
difference between two successive file positions.

Context Strings - An array of strings which map to context numbers in the
following
context map. These strings are used for topic look-up when no predefined
context number has been assigned.

Context Map - A mapping of context numbers to topic numbers. This allows
context numbers to be somewhat arbitrarily assigned, by an outside
piece of software, such as a parser, and then mapped to sequential
topic numbers.

Keyphrase Table - Table of strings used in keyphrase decompression.

Huffman Decode Tree - The tree used to decompress Huffman encoded data.

Compressed Topic Text - The compressed text for the actual topic data,
preceded by
a 1-word count of bytes in the uncompressed topic.

File Title - The title or name specified with the /N command at compression
time.


1.5.2  Decompressed Topic Format

Each line of the decompressed topic is formatted as follows:

    +--------+----------------------+
    | cbText | ASCII Text.......... |
    +-------------------------+-----+--+----------------+
    | cbInfo | Attr Info      | 0ffffh | Cross-Ref Info |
    +-------------------------+--------+----------------+
    .
    .

Topic information appears in the following order:

Topic Data                        Description
────────────────────────────────────────────────────────────────────────────
cbText                            Byte. Length in bytes, plus one, of the
                                    ASCII text which follows.

ASCII Text                        Text of the line. All characters are
                                    displayable.
                                    CR-LF characters have no special meaning.

cbInfo                            Word. Length in bytes plus two of the
                                    attribute and cross-reference
                                    information that follows.

Attr Info                         Information describing the attributes
                                    associated with the preceding line.
                                    These are formatted as attribute
                                    index/byte-count-byte pairs with
                                    attribute 0ffh indicating the end.

                                    Attribute indexes are bytes whose bits
                                    represent the following attributes:

                                    Bit         Attribute
────────────────────────────────────────────────────────────────────────────
                                    0           Bold

                                    1           Italic

                                    2           Underline

                                    Thus, attribute indexes can range in
                                    value from 0 -7, representing various
                                    combinations of the above.

Cross-Ref Info                    Definition of the "hotspots" contained
                                    in the line and what they
                                    cross-reference to. Each hotspot is
                                    formatted as:

                                    +------+------+-----------+
                                    |cols|cole|cross-ref|
                                    +------+------+-----------+

                                    where format information breaks down as
                                    follows:

                                    Definition  Description
────────────────────────────────────────────────────────────────────────────
                                    cols        Byte. Starting column of
                                                hotspot.

                                    cole        Byte. Ending column of the
                                                hotspot (inclusive).

                                    cross-ref   ASCIIZ string. Context which
                                                the
                                                hotspot cross-references to.
                                                Either
                                                a null-terminated ASCII
                                                string or a
                                                "local context" (a 3-byte
                                                internal
                                                data structure, the first
                                                byte of
                                                which is zero).


1.6  The Encoding Process

The HELPMAKE utility makes several passes on the data when encoding source
files into help-file format. The amount of compression to be performed is
optional and is specified when HELPMAKE is run.

HELPMAKE passes are described below.


    1.  In the first pass, extraneous encoding information is stripped from
        the file and remaining formatting information is converted to an
        internal form. Local context references and definitions are collected.

    2.  During the second pass, local context references are resolved. If
        enabled, the text is also run-length encoded. All runs of 4 to 255
        identical characters are replaced with a flag, the character, and a
        repetition count. During this pass the context strings are collected.
        If keyphrase compression is enabled, the encoded text is analyzed for
        keyword/phrase frequency.

    3.  If keyphrase compression is enabled, the following pass replaces all
        space-saving occurrences of keyphrases with a flag byte and a byte
        index. If Huffman encoding is enabled, character frequency of the
        output is analyzed for Huffman tree construction.

    4.  If Huffman encoding is enabled, a following Huffman pass encodes the
        topic text.

    5.  The next-to-last pass builds file topic and compression tables in
        their final form in preparation for writing to the output file.

    6.  In the final pass, the actual help file is written. The help-file
        header, topic index, context string table, context map, keyphrase
        table, and Huffman tree are all written to the help file, followed by
        the compressed topic text.


As noted above, once compressed, multiple help files can be manually
concatenated to produce single help files.






Chapter 2  Text Structure and Conventions
────────────────────────────────────────────────────────────────────────────

Common structures and conventions ensure that help files for one application
will make sense when viewed using another. This information goes beyond the
context-string and topic-text mapping functions of the help engine itself.
This chapter outlines organizational conventions and approaches that should
be followed by applications that provide maximally cross-compatible help
files.


2.1  Authoring the Help Database

The help engine is a data-retrieval tool that imposes no real restrictions
on the content and format of the help text. The HELPMAKE utility and
additional display routines and conventions, however, make certain
assumptions about the format of help text. This section provides some help
authoring guidelines.


2.1.1  QuickHelp Format

When using QuickHelp format, a text editor would be used. QuickHelp format
also lends itself to relatively easy automated translation from other
document forms.

Help text source is a sequential series of topics, each preceded by one or
more unique context definitions. In QuickHelp format, each topic begins with
one or

more ".context" lines defining the context strings which map to the topic
text. Subsequent lines up to the next ".context" constitute the topic text.
For example:

    .context #define
    Syntax: #define <identifier> <substitution-text>
    #define <identifier> [(<parameter-list>)]
    <substitution-text>

    Replaces all subsequent cases of \bidentifier\p with the
substitution-text.
    If \bparameter-list\p is given after \bidentifier\p, each occurrence
    of \bidentifier\p (\bparameter-list\p) is replaced with a version
    of \isubstitution-text\p modified by substituting actual arguments
    for formal parameters.

See Chapter 1 for a detailed discussion of QuickHelp.


2.1.2  RTF Format

When using RTF format, authoring can take place using a word processor  or
other tool capable of generating RTF output. Mac WORD, Microsoft  Word 4.x,
and Word-RTF (a tool that converts Word format files to RTF) are all
alternatives.

In RTF, each context definition should be in a paragraph of its own,
beginning with ">>." Subsequent paragraphs up to the next context definition
constitute the topic text. For example:

    {\rtf0
    >> #define \par
    Syntax:\tab #define <identifier> <substitution-text>
    \par
    \tab #define <identifier>[(<parameter-list>)] <substitution-text>
    \par
    \par
    Replaces all subsequent cases of {\b identifier} with the
substitution-text.
    If {\b parameter-list} is given after {\b identifier}, each occurrence
    of
    {\b identifier} ({\b parameter-list} ) is replaced with a version
    of
    {\i substitution-text} modified by substituting actual arguments for
    formal parameters. \par
    }

In these examples, the context string  #define  relates to the topic text
which follows it. The topic text contains embedded bold and italic text. See
Chapter 1 for a detailed discussion of RTF format.


2.2  Hotspots and Cross-References

Cross-references are included as invisible text. A word or an anchored
phrase, known as a hotspot, followed by invisible text, constitutes a
cross-reference. For example:

    .context EXE2BIN
    EXE2BIN

    Convert .EXE file to Binary-Image File

    \bPurpose\b

    Converts an executable file in the .EXE\vexe_format\v format to a
    memory image file in binary format. The EXE2BIN utility is supplied
    with the MS-DOS distribution disks.

In this example, the word ".EXE" in the first line of the paragraph is the
hotspot. It cross-references to "exe_format." A mouse click or other form of
selection with the cursor on any of the letters of ".EXE" brings up the help
topic whose context was "exe_format." The invisible text "exe_format" is not
actually displayed.

When the desired hotspot crosses more than one word, an anchor is used:

    Converts an executable file in the \a.EXE format\vexe_format\v
    to a memory image file in binary format. The EXE2BIN utility is
    supplied with the MS-DOS distribution disks.

In this case, the hotspot consists of the entire phrase ".EXE format."
Anchored hotspots must be contained on a single line.

The invisible cross-reference text is formatted as one of the following:

Text Command                      Action
────────────────────────────────────────────────────────────────────────────
context_string                    Results in the help topic associated
                                    with the arbitrary context string being
                                    displayed. For example, "exe_format"
                                    results in the help topic associated
                                    with that context being displayed.

@context_string                   Causes the help topic associated with
                                    the local context string to be displayed.
                                    As defined in a previous section, local
                                    contexts must be defined in the same
                                    help file that they are referenced in.

filename!                         Causes the entire file referenced to
                                    be treated as a single topic to be
                                    displayed. For example, the command
                                    "$INCLUDE:stdio.h!" would search the
                                    INCLUDE environment variable for STDIO.H,
                                    and display it as a single help topic.

filename!context_string           Same as "context_string" above, except
                                    that only the help file "filename" is
                                    searched. If not already open, it is
                                    searched for, either on the path or
                                    explicit environment variable, and
                                    opened. For example, the command
                                    "$INIT:mep.hlp!assign" would search for
                                    "mep.hlp" on the INIT environment
                                    variable, and bring up the topic
                                    associated with "assign."

!cmd                              A cross-reference command. These
                                    commands are discussed in Section 2.4.


2.3  Topic Commands

Topic commands embedded into the help text provide additional control
information to the application displaying help. The commands are contained
on a single line which is not considered part of the help text, and is not
displayed to the user, but is embedded into the help text source.

With the exception of ".context" and ".comment," topic commands take two
forms: an "English" version used in the help source code (dot command), and
a shortened version actually placed in the encoded help file and understood
by the application displaying help (colon command). English versions of the
commands are automatically converted by the HELPMAKE program to the single
character versions (or back) on encode (or decode).

Note that ":" is replaced by whatever application-specific character is
specified to HELPMAKE using the /A parameter. Applications writers should
support only the ":" commands listed below. Help-file authors should be
concerned with only the English "." forms of the commands discussed in Table
2.1.

Table 2.1  HELPMAKE Topic Commands

╓┌─────────────────────────────────────┌─────────────────────────────────────╖
Command                               Action
────────────────────────────────────────────────────────────────────────────
Command                               Action
────────────────────────────────────────────────────────────────────────────
.context context string               Required.

.category string number               Contains the category name the
:cstring number                       current function is in, and its
                                        position in the list of functions.
                                        The .category name is used by the
                                        QuickHelp Topic command, which
                                        brings up the list of topics that
                                        the current topic is part of. This
                                        is done by fetching the category
                                        name, which is a .list-type topic,
                                        and finding where the current topic
                                        is within the list of topics.

                                        If the help topic being displayed at
                                        the time of a request is for
                                        "h.contents" (the table of contents),
                                        applications may divert the search
                                        to the .category string of the
Command                               Action
────────────────────────────────────────────────────────────────────────────
                                        to the .category string of the
                                        currently displayed topic.

                                        The .category command, if present,
                                        must precede all displayable help
                                        text. If not supported by an
                                        application, this command should be
                                        ignored.

.command                              Indicates that the topic text is not
:x                                    a displayable help topic, and should
                                        not be displayed to the user. Used
                                        to precede script topics, and other
                                        internal information.

                                        The .command command, if present,
                                        must precede all displayable help
                                        text. Should be supported by all
                                        applications. (If a next or previous
Command                               Action
────────────────────────────────────────────────────────────────────────────
                                        applications. (If a next or previous
                                        operation encounters a topic
                                        containing this command, the topic
                                        should simply be skipped.)

.comment text                         Used in the source file to specify a
                                        comment line which will not be
                                        placed into the database (i.e.,
                                        HELPMAKE removes this line). This is
                                        used by help authors to comment
                                        their source code so that it can be
                                        maintained by other authors without
                                        having the text go into the database.
                                        This can be particularly valuable
                                        when documenting cross-
                                        references that have commands (i.e.,
                                        you can insert a .comment and say
                                        what the cross-reference is supposed
                                        to do).
Command                               Action
────────────────────────────────────────────────────────────────────────────
                                        to do).

                                        Since the comments are not preserved
                                        in the compressed file, they cannot
                                        be restored via decompression.

.execute cmd                          Executes the specified
:ycmd                                 cross-reference command. This
                                        command is executed at the time the
                                        line is encountered while the
                                        application is processing the topic
                                        for display. All cross-reference
                                        commands are valid, even though not
                                        all make sense. This command may
                                        appear anywhere in a topic.

                                        If not supported by an application,
                                        this command should be ignored.

Command                               Action
────────────────────────────────────────────────────────────────────────────

.file filename                        Normally used by an internal release
:ffilename                            of the database to point to the
                                        location of the source file. The
                                        private build of QuickHelp along
                                        with a macro command in MEP
                                        can make it possible to load the
                                        source file with two keystrokes.

                                        If not supported by an application,
                                        should be ignored.

.freeze ##                            Indicates that the next ## lines
:z ##                                 which follow are to be "frozen" as
                                        the top line(s) on the help screen.
                                        This is typically used to freeze a
                                        row of cross-reference buttons at
                                        the top of a help topic which might
                                        be scrolled.
Command                               Action
────────────────────────────────────────────────────────────────────────────
                                        be scrolled.

                                        The .freeze command, if present,
                                        must precede all displayable help
                                        text. If not supported, should be
                                        ignored.

.mark text [##]                       Defines a "mark" immediately
:mtext [##]                           preceding the following line of text.
                                        An optional number, indicating
                                        column location, may also be
                                        included. Can be referenced by
                                        Advisor Script commands (see Section
                                        2.4), usually to indicate that
                                        display of a particular topic begins
                                        at the marked line, rather than the
                                        first line.

                                        .mark names are unique (local) to
Command                               Action
────────────────────────────────────────────────────────────────────────────
                                        .mark names are unique (local) to
                                        each topic. If not supported by an
                                        application, should be ignored.

.length #                             Specifies the initial length of the
:l#                                   topic when displayed. Applications
                                        that can resize the window in which
                                        help is displayed should attempt to
                                        resize so that # number of lines are
                                        displayed.

                                        The .length command, if present,
                                        must precede all displayable help
                                        text. If not supported by an
                                        application, should be ignored, and
                                        the application must support a
                                        reasonable default window or screen
                                        size.

Command                               Action
────────────────────────────────────────────────────────────────────────────

.list                                 Indicates that the current topic
:i                                    contains a list of topics. This will
                                        cause a highlighted line to be
                                        displayed. You can select a topic by
                                        moving the highlighted line over the
                                        desired topic, and then pressing the
                                        ENTER key. The first word of the
                                        line will be used as the topic
                                        string to search for.

                                        If not supported by an application,
                                        the topic should
                                        be displayed as any other help topic
                                        (i.e., .list can be ignored).

.next context string                  Indicates that the physically next
:>context string                      topic should be looked up using the
                                        supplied context string, rather than
Command                               Action
────────────────────────────────────────────────────────────────────────────
                                        supplied context string, rather than
                                        getting the actual next topic. This
                                        is used to skip large blocks of
                                        .command or .popup topics quickly.

                                        The .next command, if present, must
                                        precede all displayable help text.

.previous context string              Tells the help system to look up the
:<context string                      physically previous topic using the
                                        supplied context string rather than
                                        get the actual previous topic. This
                                        is used to skip large blocks of
                                        .command or .popup topics quickly.

.paste paste-name                     Begins a paste section, with the
:ppaste-name                          name appearing in QuickHelp's Paste
                                        menu. If not supported by an
                                        application, should be ignored.
Command                               Action
────────────────────────────────────────────────────────────────────────────
                                        application, should be ignored.

                                        The .paste command, if present, must
                                        precede all displayable help text.

.end                                  Ends a paste section. If not
:e                                    supported by an application, this
                                        command should be ignored.

.popup                                Indicates to QuickHelp that the
:g                                    current topic is not to be loaded as
                                        a normal, scrollable topic. Instead
                                        the number of lines in the current
                                        topic is counted, and a box is
                                        created with the topic displayed
                                        within it. As soon as you press a
                                        key or click the mouse button, the
                                        popup box will go away. If you have
                                        already loaded QuickHelp, the
Command                               Action
────────────────────────────────────────────────────────────────────────────
                                        already loaded QuickHelp, the
                                        previous topic is displayed.

                                        When QuickHelp is first run, it
                                        attempts to find a topic from the
                                        word underneath the cursor. If that
                                        topic is a popup topic, QuickHelp
                                        displays the popup box, then returns
                                        without displaying its main window.

                                        The .popup command, if present, must
                                        precede all displayable help text.
                                        If not supported by an application,
                                        the topic can be displayed normally.

.ref [string], [string], ...          Contains a list of comma-separated
:r[string], [string], ...             topics (i.e., functions and
                                        structures) that appear in the
                                        Reference menu, and will be
Command                               Action
────────────────────────────────────────────────────────────────────────────
                                        Reference menu, and will be
                                        preloaded by the PreLoad thread. If
                                        not supported by an application,
                                        this command should be ignored.

.topic topic name                     If not supported by an application,
:ntopic name                          this command should be ignored, and
                                        no title or name displayed.

────────────────────────────────────────────────────────────────────────────




2.4  Cross-Reference Commands

Cross-reference commands extend hotspots beyond simply moving around in help
information. These commands actually carry out actions in response to user
selection.

Typically, when a hotspot is selected by the user of the help system, the
associated invisible text or "cross-reference" is simply "looked-up" as
another help request, and its associated topic displayed. A cross-reference
command (usually prefixed by an exclamation point) contains instead an
instruction to be carried out by the host application.

The executable command, or in some cases the command class, is defined by
its first character. Uppercase alphabetic and special character commands are
broadly classified as "Advisor Script Commands," and potentially applicable
to all help systems. Lowercase characters are used to define commands or
command classes of restricted applicability.

These commands are discussed in Table 2.2.

Table 2.2  HELPMAKE Cross-Reference Commands

╓┌─────────────────────────────────┌─────────────────────────────────────────╖
Command                           Class
────────────────────────────────────────────────────────────────────────────
>string                           Indirection. The rest of the command is
Command                           Class
────────────────────────────────────────────────────────────────────────────
>string                           Indirection. The rest of the command is
                                    a context string which should be looked
                                    up, and whose topic contents should be
                                    executed, line by line, as a series of
                                    Advisor Script Commands. Such a topic is
                                    referred to as a script topic. The
                                    initial exclamation point is not present
                                    on the commands contained within a
                                    script topic.

space                             The rest of the command string should be
                                    executed visibly by the operating system.
                                    For example, "! DIR" causes the
                                    operating system to print the contents
                                    of the current directory.

!                                 The rest of the command string should be
                                    executed invisibly by the operating
                                    system. For example, "!!COPY FILEA FILEB"
Command                           Class
────────────────────────────────────────────────────────────────────────────
                                    system. For example, "!!COPY FILEA FILEB"
                                    causes the operating system to copy
                                    FILEA to FILEB, with no visible output.

B                                 Back. The application is to redisplay
                                    the previously viewed help topic. May be
                                    ignored if the historical backtrace list
                                    is exhausted, or if historical backtrace
                                    is not supported by the application.

C                                 Context. The rest of the command string
                                    is a context string to be retrieved and
                                    immediately displayed. (Intended for use
                                    within script topics.) This is
                                    equivalent to a traditional
                                    cross-reference that does not begin with
                                    a "!."

D                                 Delay. The rest of the command string is
Command                           Class
────────────────────────────────────────────────────────────────────────────
D                                 Delay. The rest of the command string is
                                    an ASCII encoded number, which is the
                                    number of tenths of a second to delay.
                                    When executed, the application simply
                                    delays that much time before continuing.
                                    (Intended for use within script topics.)

Hsx1,y1, x2,y2                    Highlight. The rest of the command
                                    specifies a region, and a highlighting
                                    state "s" is replaced by either "E" to
                                    enable highlighting on the region, or "D"
                                    to disable. The highlighted region is
                                    from the upper left corner specified by
                                    (x1,y1) to the lower right corner
                                    specified by (x2,y2). All coordinates
                                    are one-based. The actual visual effect
                                    of highlighting is left up to the
                                    application; however, reverse video is
                                    the commonly accepted result.
Command                           Class
────────────────────────────────────────────────────────────────────────────
                                    the commonly accepted result.

K                                 Wait for any keystroke before proceeding.

Kkey                              Wait for specific keystroke before
                                    proceeding; "key" is replaced by the key
                                    name. Beep until correct key is entered.

Kkey text                         Wait for specific keystroke before
                                    proceeding; "key" is replaced by the key
                                    name. Display "text" if wrong key is
                                    entered.

Mtext                             Mark. Position current topic such that
                                    the line marked by "text" is the first
                                    line displayed. (See topic commands for
                                    a description of marked text.)

Ptext text                        Position. Combination of .context and
Command                           Class
────────────────────────────────────────────────────────────────────────────
Ptext text                        Position. Combination of .context and
                                    .mark commands. The second "text" string
                                    is a context looked up and immediately
                                    displayed. The first "text" string is a
                                    mark at which the display of the topic
                                    should begin.

b                                 Specific to Basic.

c                                 Specific to C.

CQ.HB                             Used in Microsoft QuickC(R) version 2.0.
                                    Indicates that the previously viewed
                                    help topic should be redisplayed.
                                    (Executes the QuickC version 2.0 "Help
                                    Back" command.) This is equivalent to
                                    the Advisor Script Command "back" listed
                                    above, and should also be supported by
                                    applications requiring compatibility
Command                           Class
────────────────────────────────────────────────────────────────────────────
                                    applications requiring compatibility
                                    with C and QuickC help files.

d                                 Specific to the Microsoft CodeView(R)
                                    debugger.

m                                 The command is specific to the Microsoft
                                    Editor and/or Programmer's WorkBench
                                    (PWB). The command is an editor macro
                                    string, which is executed.

q                                 Specific to the QuickHelp utility.

────────────────────────────────────────────────────────────────────────────




2.5  Context Conventions

Certain contexts are defined by convention across multiple product lines.
The intent is that multiple products can access the same types of help in
the same manner, while also providing mechanisms for truly product-specific
help to be readily identified as such.

Constructed context strings are kept small, to avoid unnecessary growth of
the context string table in each help file. In addition, many utilities
using the help system will display the context strings associated with help
topics. These conventions also define characteristics which allow such
utilities to present more intelligent information.


2.5.1  Contexts Covered by Convention

Context strings beginning with "x." (where "x" is an arbitrary character,
and "." is a period) are defined to be "internal" or "constructed" help
context strings. They are unlikely to be explicitly requested, and you may
in fact be prevented from entering contexts of this form.

The following "lead" characters are defined:

Character                         Definition
────────────────────────────────────────────────────────────────────────────
h                                 Generic help. Prefixes miscellaneous
                                    help contexts that may be constructed or
                                    otherwise hidden from the user. For
                                    example, a "contents" menu item would
                                    cause a reference to "h.contents."

m                                 Menu items. Contexts that relate to
                                    product menu items are further defined
                                    by their accelerator keys (for example,
                                    the Open selection on the File menu is
                                    referenced by "m.f.o").

d                                 Dialogs. Dialogs are assigned a number,
                                    and the help context string is
                                    constructed by "d." and the ASCII text
                                    number (for example, "d.12").

e                                 Error numbers. Products that support the
                                    uniform error numbering scheme used
                                    within languages would reference those
                                    by prefixing the error number with "e."
                                    (for example, "e.c1234").

!                                 Indicates a cross-reference command, as
                                    defined in Table 2.2.


2.5.2  Required Contexts

The following contexts should be provided in all help files:

Context                           Description
────────────────────────────────────────────────────────────────────────────
h.default                         This is the "most-default" help screen,
                                    generally displayed in response to
                                    pressing F1 at the "top level" in most
                                    applications.

h.notfound                        This is the help-text applications
                                    display when a search for a particular
                                    context fails. Can be an index, topical
                                    list, or general help. Applications may
                                    alternately present error messages when
                                    help cannot be found.

h.pg1                             Indicates the help text that is
                                    logically the first "page" in the file.
                                    Used by some applications in response to
                                    a "go to the beginning" request in help
                                    manipulation.

h.pg$                             Indicates the help text which is
                                    logically the last "page" in the file.
                                    This is used by some applications in
                                    response to a "go to the end" request in
                                    help manipulation.


2.5.3  Recommended Contexts

The following contexts are not mandatory, but if used, should be of the
following defined forms:

Context                           Description
────────────────────────────────────────────────────────────────────────────
h.contents                        Help-file table of contents. In addition,
                                    the context string contents may also be
                                    used by itself to allow direct reference
                                    by the user.

h.index                           Help-file index. In addition, the
                                    context string index may also be used by
                                    itself to allow direct reference by the
                                    user.

h.pg#                             Specific page number. "#" is replaced
                                    with the page number of interest.

Care should be taken to maintain "common" usage when writing help that is
referenced from context strings such as these, since other applications may
access them in this manner.


2.5.4  Product-Specific Contexts

When multiple products use the same naming mechanisms for the same
operations, confusion can arise when one product help file is made available
for use by another product. For example, search order might be the only
factor determining which product's help appears when a request for help is
made from a File:Open menu and multiple product help files are available.
All products would reference the context string "m.f.o" by convention, and
it would be in both help files.

As defined elsewhere, contexts can be prefixed by a file name. The original
help-file file names are also embedded in each help file, and preserved
regardless of what you rename the help file. This allows product-specific
contexts to be dereferenced by prefixing the original help-file name to the
context string.

For example, in PWB, QB.HLP, QC.HLP, and PWB.HLP are available. All have a
"m.f.o" context entry. When you request help on the File:Open menu, however,
PWB prefixes that string with "pwb.hlp!", creating "pwb.hlp!m.f.o" which
completely specifies that the help comes from the PWB help file.


2.6  Hierarchical Contexts

Hierarchical context strings should be manufactured by concatenating context
strings with period separators to form longer context strings. For example:


    cc.error.c1876

could represent help relating to a C compiler error number c1876. The
application could manufacture a help look-up request based on its current
state, such as currently viewing errors on a C compiler, where c1876 is the
currently viewed error.

For space reasons, it may also be advisable to shorten contexts as much as
possible, when the context string will never be seen by the user. This is
the shortened example:

    c.e.1876

It is important to note that the help engine does not infer anything from
the fact that the context string may be viewed elsewhere as a concatenated
hierarchy. Only a help topic whose entire context string matches exactly
will correspond to such a request.


2.7  Environment Support

File names used within the help engine may include explicit path
specifications or explicit environment variable specifications, or it may
default to being opened on the PATH environment variable. The support for
each of these is provided by the client application. For example:

Path                              Description
────────────────────────────────────────────────────────────────────────────
c:\lib\qb.hlp                     Explicit path

$INCLUDE:qb.hlp                   Explicit environment variable

qb.hlp                            Implicit PATH search

Applications may also elect to support the HELPFILES environment variable
that specifies the help files to be used. When used, the syntax of this
variable should be

    SET HELPFILES=QB.HLP;QC.HLP;CV.HLP

This example instructs applications to use the three help files, QB.HLP,
QC.HLP, and CV.HLP, in that order. This may be overridden within the
application.






Chapter 3  The HELPMAKE Program
────────────────────────────────────────────────────────────────────────────

HELPMAKE is a general support program that manipulates help files. It can
dump a help file to RTF text format for editing, and compress an RTF,
QuickHelp, or modified ASCII formatted text file into help-file format.

HELPMAKE is a distributed utility; further documentation is available in the
C 6.0 Compiler or Microsoft QuickC 2.0 Compiler products. Use HELPMAKE when
you want to modify Microsoft-supplied help or to compress user-supplied help
files.


3.1  HELPMAKE Options

The syntax for HELPMAKE is as follows:

    HELPMAKE { /E[n] [/Ac] [/C] [/L] [/N name] [/Sn] [/Wwidth]
    | /D[U|S] | /H }
                [/T][ [/V[n» [/Odestfile] sourcefile(s)

At least one source file and either the "/E" (for Encode) or "/D" (for
Decode) must be present.


3.1.1  Encoding Options

When encoding (/E) to create a help file, the /O parameter must be present.
Multiple source files may be specified, including wild cards.

The optional n parameter on /E indicates the amount of compression to take
place. Successive powers of two indicate various compression techniques to
use, as in the following list:

╓┌─────────────────────┌─────────────────────────────────────────────────────╖
Parameter             Technique
────────────────────────────────────────────────────────────────────────────
0                     No compression
1                     Run-length compression
2                     Keyword compression
4                     Extended keyword compression
8                     Huffman compression


For example, to use both run-length and keyword compression, specify /E3.
The default is all compression-selected.

Mixing the types of compression allows HELPMAKE to be maximally fast while
developing help files, or at the user's option when used in the field.


3.1.2  Other HELPMAKE Options

Other options that apply when encoding are listed below:

╓┌───────┌─────────────────────────────────┌─────────────────────────────────╖
Option  Action
────────────────────────────────────────────────────────────────────────────
/A      Specifies the
        application-specific control
        character
        for the file. This is used with
        the HelpGetCells, HelpGetLine,
        and HelpGetLineAttr calls to
        ignore lines that begin with
        this character. This feature
        allows you to embed control
        information into the help topics.
Option  Action
────────────────────────────────────────────────────────────────────────────
        information into the help topics.
        Such information can then be
        automatically stripped out by
        other applications without
        determining the format.

/C      Indicates that the context
        strings for this help file are
        case sensitive. All look-ups at
        run time are case sensitive if
        this switch has been set.

/W      When specified, indicates the
        fixed width of the resulting
        help text, in characters. The
        default value is 76. When
        HELPMAKE is run to encode RTF
        source, HELPMAKE automatically
        formats the text to this width.
Option  Action
────────────────────────────────────────────────────────────────────────────
        formats the text to this width.
        When used with QuickHelp or
        Minimal ASCII, lines are
        truncated to this width.

/L      Locks the generated file so that
        it cannot be decoded by HELPMAKE
        later.

/Sn     Specifies the type of input
        file:

        Option                            File Type

        1                                 RTF ASCII

        2                                 QuickHelp ASCII (default)

        3                                 Minimally formatted (>) ASCII
Option  Action
────────────────────────────────────────────────────────────────────────────
        3                                 Minimally formatted (>) ASCII

/N      Specifies a "name" or title for
        the help files, subsequently
        available to applications via
        the HelpGetInfo interface.
        Multiple word titles may be
        enclosed in quotes.

/D      Decodes a help file. The
        destination file need not be
        present, in which case the help
        file is decoded to standard
        output. Help files are decoded
        into QuickHelp ASCII format.

        Option                            Effect

        /DS                               "Decode split." Splits a
Option  Action
────────────────────────────────────────────────────────────────────────────
        /DS                               "Decode split." Splits a
                                            concatenated help file back into
                                            its component files. No actual
                                            decoding is done, as the
                                            resulting help files, written to
                                            their original file names (as
                                            encoded in each help-file header)
                                            remain compressed.

        /DU                               "Decode unformatted." Creates a
                                            plain ASCII text file from a
                                            help file. All formatting
                                            information, such as color and
                                            cross-referencing, is lost
                                            except for .context statements.

/T      Translates between topic
        commands in "English"
        dot-command form, and the terser
Option  Action
────────────────────────────────────────────────────────────────────────────
        dot-command form, and the terser
        form. See the section in Chapter
        2 on topic commands for more
        details. This switch is valid in
        both encoding and decoding.

/H      Causes HELPMAKE to display a
        summary of usage and exit.








Chapter 4  Applications Interface
────────────────────────────────────────────────────────────────────────────

The embedded help library provides the following functionality to client
applications:


    ■   Help-file location and multiple file management (Open, Close)

    ■   Context look-up and help topic retrieval

    ■   Browsing functions (Next, Back)

    ■   Display utilities



4.1  Defining the Interface

The help "engine" is a library of database tools that control retrieval of
text based on reference words (context strings), indexes (context numbers),
or position. The applications interface is to this help engine. This section
defines the help engine's procedural interface. The engine handles the
decompression of the help file and physical file I/O.

Term                              Definition
────────────────────────────────────────────────────────────────────────────
Convention                        All routines are FAR PASCAL.

Pointers                          All pointers are FAR.

"nc" type                         An unsigned long "context number." All
                                    referenceable keywords or phrases
                                    (contexts) map to context numbers. A
                                    context number identifies both the
                                    source help file and the help context
                                    itself.

"f" type                          A Boolean.

"PB" type                         A "pointer to a buffer." In most
                                    versions of the help engine, this is a
                                    far pointer (void far *). In
                                    handle-based versions of the engine,
                                    this is a long, containing a memory
                                    handle in the upper word, and an offset
                                    in the lower word. The memory handle is
                                    passed to HelpLock for dereferencing,
                                    and the offset is then added to the
                                    result to form the actual physical
                                    memory address used by the help engine.


4.2  Base File Management


HelpOpen

    nc pascal far HelpOpen (char far *lpszName)

Given a help-file name, this function opens a help file and returns an
initial context, or an error code on failure. Up to 25 help files can be
open at a time. The application-provided routine OpenFileOnPath is used to
open the file; typically that routine uses the PATH environment variable to
locate the file.

The value returned by HelpOpen, if less than HELPERR_MAX (defined in
HELP.H), is an error code that displays the reason the file could not be
opened.

Concatenated help files count against the upper help-file limit once for
each concatenated portion. The initial context returned is the context for
the first physical topic in the help file. HelpOpen itself does not attempt
to automatically append any extension to the file name.


HelpClose

    void pascal far HelpClose (nc ncCur)

Given a context, this function closes the help file associated with it and
deallocates all associated memory. Calling with  ncCur  of zero closes all
open help files.


4.3  Context String Management


HelpNc

    nc pascal far HelpNc (char far *lpszContext, nc ncInitial)

Given a pointer to a context string, this function looks up the word and
returns its nonzero context number. This can be used as a Boolean, returning
FALSE if a help entry does not exist for that context string.

Here,  ncInitial  is the context from which the search for the help topic
begins. This context references a particular help file and help topic, and
the search commences there.

Where concatenated help files are used and  ncInitial  references something
other than the first of the concatenated files, those preceding it are not
searched. Similarly, if  ncInitial  references a help context in the middle
of the help file, those contexts preceding it will not be searched.

The initial context returned by HelpOpen (which references the first topic
in the file), should be saved and used for this call.

Context strings are of the form

    [filename!][context]

where  filename  is the help file containing the cross-reference and allows
cross-references to cross help files. The help file is located at reference
time by using HelpOpen, and thus is located on the PATH;  context  is the
context string to be referenced. If no context is present, then  filename!
must be present, and the file is assumed to be unformatted ASCII and to
contain the entire topic.

Context strings may also be of an internal form returned by HelpXref. See
HelpXref in Section 4.7 for more details.


HelpNcCmp

    nc pascal far HelpNcCmp (char far *fpszContext,nc ncInitial,
                            f (pascal far *lpfnCmp) (uchar far *,
                                uchar far *, ushort, f, f));

Like HelpNc, when given an ASCII string, this function determines the
context number of that string. HelpNcCmp uses a caller-supplied comparison
routine; lpfnCmp  is a far pointer to the comparison routine that takes the
following parameters:

Parameter                         Description
────────────────────────────────────────────────────────────────────────────
fpsz1                             Far pointer to string 1. Normally the
                                    constant string being "looked up."

fpsz2                             Far pointer to string 2. This is usually
                                    a string in the help file's string table
                                    (compressed) or an actual segment of the
                                    help file (formatted ASCII) being
                                    searched.

cbCmp                             Maximum number of bytes to compare.
                                    Normally the strings above are
                                    zero-terminated, and this value is
                                    passed as 255. In ASCII files, this
                                    value may represent the number of bytes
                                    in the second string actually being
                                    compared. This value can be used as a
                                    max comparison count, regardless of file
                                    type.

fCase                             TRUE if search is to be case insensitive.
                                    This is the setting of the case
                                    sensitivity flag in the help file being
                                    processed.

fTerm                             TRUE if special termination processing
                                    is allowed. In this case, if any white
                                    space is encountered in the second
                                    string when NULL is found in the first,
                                    a match is declared.


HelpSzContext

    f pascal far HelpSzContext (char far *pBuffer, nc ncCur)

Given a context and a pointer to a buffer, this function places the first
context string associated with that help topic in the buffer and returns
TRUE on success.

The format of the string is as described for HelpNc, except that the
file-name part is always present (but does not include any leading path).
The file-name part references the original file name created by HELPMAKE,
not the current open file name if the help file was renamed, or if the file
was concatenated with other help files.


4.4  Topic Look-Up and Decompression


HelpNcCb

    unsigned pascal far HelpNcCb (nc nContext)

Given a context number, this function returns the size in bytes of the
compressed topic.


HelpLook

    unsigned pascal far HelpLook (nc nContext, PB pbDest)

Given a context number, this function places the topic text into the passed
buffer, which must be of sufficient size. HelpLook returns count of bytes in
an uncompressed topic or zero on error.


HelpDecomp

    f pascal far HelpDecomp (PB pbTopic, PB pbDest, nc ncContext)

Given a compressed topic as returned by HelpLook (above) and its context
number, this function decompresses it into the destination buffer. The
decompressed text in the destination buffer is prefixed by the following
topic header structure:

    typedef struct {
    uchar appchar;
    uchar linchar;
    uchar filetype;
    ushort reserved[2];
    } topichdr;

where uchar is defined as follows:

Character                         Description
────────────────────────────────────────────────────────────────────────────
appchar                           The character specified by the /A switch
                                    when the help file was created by
                                    HELPMAKE.

linchar                           Line-removal character. Lines beginning
                                    with this character are ignored by the
                                    HelpGet routines described in Section
                                    4.6.

filetype                          The type of file that the topic came
                                    from. Values are:

                                    0           Unformatted ASCII

                                    1           Minimally formatted ASCII

                                    3           Fully compressed

reserved                          Reserved for use by the HelpGet routines
                                    (see Section 4.6).

Access to this data structure is currently present for compatibility only
(see HelpCtl for manipulation of the  linchar  byte). HelpDecomp returns
TRUE on error.


4.5  Context Maneuvering


HelpNcNext

    nc pascal far HelpNcNext (nc ncCur)

Given a context, this function returns the context number for the next help
topic, or NULL on catastrophic failure.


HelpNcPrev

    nc pascal far HelpNcPrev (nc ncCur)

Given a current context, this function returns the context number for the
"physically previous" help topic in the help file, or NULL on catastrophic
failure.

This function is present for those applications that present a "previous"
function in a physical, rather than historical, manner.


HelpNcRecord

    void pascal far HelpNcRecord (nc ncCur)

The HelpNcRecord function records a context number in the help engine
backtrace list. Numbers are not automatically recorded by the help engine,
but must be explicitly recorded by client applications. This routine and
HelpNcBack (below) maintain a Last In First Out (LIFO) list of context
numbers used to maintain the historical backtrace list.


HelpNcBack

    nc pascal far HelpNcBack ()

Given a current context, this function returns the context number for the
"historically previous" help topic. These are the context numbers previously
saved by calls to HelpNcRecord.


HelpNcUniq

    nc pascal far HelpNcUniq (nc ncCur);

The HelpNcUniq function transforms a context number into a context number
guaranteed unique for each topic in the file. That is, given that many
context strings (and hence many context numbers) may map to the same topic,
HelpNcUniq transforms all the context numbers that refer to a particular
topic into the same context number. The information on the context string
originally used is lost. This function returns NULL on any error.


4.6  Topic Display

Help text returned by the help engine contains encoding information. The
following routines are provided to aid interpretation.


HelpGetCells

    int pascal far HelpGetCells (ushort ln ,int cbMax , PB pbDst,

                                uchar far *pbTopic, uchar far *prgAttr)

HelpGetCells interprets the help file's stored format and returns character
and attribute information a line at a time.

Character                         Description
────────────────────────────────────────────────────────────────────────────
ln                                The one-based line number to return.

cbMax                             The maximum number of bytes to transfer.

pbDst                             A pointer to the destination.

pbTopic                           A pointer to the topic text.

prgAttr                           A pointer to array of character
                                    attributes. Internal attribute indexes
                                    are mapped to physical attributes
                                    through this table.

Returns number of characters transferred, or -1 if that line does not exist.



HelpGetLine

    ushort pascal far HelpGetLine (ushort ln, ushort cbMax,
                                char far *pszDst, PB pbTopic);

This function interprets the format of a topic previously read and
decompressed and returns ASCII text a line at a time.

The HelpGetLine function places characters into pszDst up to cbMax-1 for the
line specified by ln in the help topic pointed to by pbTopic. The line is
zeroterminated and the function returns the number of characters placed in
buffer.


HelpGetLineAttr

    ushort pascal far HelpGetLineAttr (ushort ln, ushort cbMax,
                                        LINEATTR far *rgAttrs,
                                        PB pbTopic);

This function fills rgAttrs buffer with line attributes for a line defined
by ln. A line attribute is a word containing an attribute index followed by
count of characters of the attribute.

    LineAttr      STRUC
        LA_attr   dw       ?      ;color attribute
        LA_cb     dw       ?      ;count of chars
                                ;with attribute
    LineAttr      ENDS

The array rgAttr may be terminated by an attribute of FFFF. Alternatively,
if cb is FFFF, the attribute is used for the rest of the line. cbMax is the
maximum size for the rgAttr buffer, and the function returns 0 if the buffer
is too small for attributes; otherwise, it returns nonzero.


HelpcLines

    int pascal far HelpcLines (PB pbTopic);

This function returns the number of text lines in the topic pointed to by
pbTopic.


4.7  Cross-References


HelpXRef

    char far * pascal far HelpXRef (PB pbTopic, hotspot far *photspot)

Given a row, column (in the hotspot structure defined below), and topic,
this function returns a pointer to a cross-reference string. pbTopic is the
pointer to the topic text, and photspot is a pointer to a hotspot structure
to update.

The HelpXRef function returns a far pointer into the topic text of a
cross-reference string and updates the contents of the hotspot structure. It
returns NULL if no cross-reference exists for that line.

A "hotspot" structure defines the position of an embedded cross-reference,
defined as follows:

    typedef struct {
        ushort line;  /* the topic line with an xref  */
        ushort col;  /* the starting column of xref  */
        ushort ecol;  /* the ending column of xref  */
        uchar far *pXref;   /* pointer to xref string  */
        } hotspot;

────────────────────────────────────────────────────────────────────────────
IMPORTANT

The cross-reference string can take either of two forms: a normal,
nullterminated ASCII string, or a three-byte data structure whose first byte
is NULL. It is important that the first byte be checked before copying the
string, because normal string copy routines will not copy the three-byte
data structure correctly. (The three-byte data structure is a
cross-reference to a "local context.")
────────────────────────────────────────────────────────────────────────────


HelpHlNext

    f pascal far HelpHlNext (int cLead, PB pbTopic,
                            hotspot far *photspot);

This function locates the next cross-reference in the help topic. Given a
starting position in the passed hotspot structure, HelpHlNext locates either
the next physical cross-reference, or the next reference beginning with a
particular character (case insensitive); it locates either forward or
backward.

One of the following can be  cLead:

NULL                              The next hot-link searching forward from
                                    the specified position is returned.

-1                                The next hot-link searching backward
                                    from the specified position is returned.

char                              If positive and non-NULL, the next
                                    hot-link following the specified
                                    position whose on-screen keyword begins
                                    with the character  cLead  is returned (
                                    cLead  must be uppercase).

-char                             If negative and not -1, the next
                                    hot-link before the specified position
                                    whose on-screen keyword begins with the
                                    character  -cLead  is returned (cLead
                                    must be uppercase).

Here,  pbTopic  is a pointer to the topic text;  photspot  is a pointer to a
hotspot structure to receive information; line  and  col  indicate a
starting point.

The HelpHlNext function returns TRUE if a cross-reference is found or if a
hotspot structure is updated; it returns NULL if no such cross-reference.


4.8  Utility


HelpCtl

    void pascal far HelpCtl (PB pbTopic, flag);

Here,  pbTopic  is a pointer to the topic text about to be retrieved. If the
flag is TRUE, HelpGetLine (and family) subsequently returns all lines of
text in the topic. If the flag is FALSE, HelpGetLine returns only those
lines that do not begin with the application-specific control character, as
specified by the /A parameter to HELPMAKE when the file was compressed.
(HelpGetLine "and family" refers to all line-retrieval, cross-reference, and
line-counting routines that operate on the decompressed topic text.)

────────────────────────────────────────────────────────────────────────────
NOTE

HelpCtl is provided to clarify the speed-optimization behavior in these
routines. The current method in most applications is to replace a character
in the topic header (setting it to FF) prior to calling the line-retrieval
routines, which confuses the optimization. This new interface hides the
internal data structures that would otherwise also be modified.
────────────────────────────────────────────────────────────────────────────


HelpGetInfo

    int pascal far HelpGetInfo (struct helpinfo far *fpDest,
                                int cbDest);

This utility copies a  helpinfo  structure relating to the specified nc to
the specified buffer. Here, cbDest  is the maximum length of the data to be
copied. If HelpGetInfo cannot copy the data because the buffer is too small,
it returns the required buffer size. Otherwise, it returns 0, indicating
success.


HelpInit

    void pascal far HelpInit (void)

This call initializes data internal to the help engine. It should be called
once, at program startup.

────────────────────────────────────────────────────────────────────────────
NOTE

This function is used only in versions of the help library that do not have
preinitialized data. For convenience, all libraries distributed outside of
Microsoft have initialized data (this function is not included).
────────────────────────────────────────────────────────────────────────────


HelpShrink

    void pascal far HelpShrink (void)

When called, this function causes the help engine to free all memory whose
data can be regenerated. This frees up indexes and keyword tables loaded
from help files. The next help access can cause one or more of these tables
to be reloaded. If there are no open help files, the engine has no memory
allocated, and this call does nothing.


4.9  Help Engine Callbacks

The help engine requires some support from the application environment for
file and memory management.

In the discussions below, "mh" is an unsigned short memory handle. "DOS
only" indicates that the call is used only in those versions of the help
engine that are run under MS-DOS, and not in OS/2-specific versions.

Because of the limitations of some client applications, memory management
within the help engine is such that the engine holds no locked memory when
an allocation is performed.


HelpAlloc

    mh pascal far HelpAlloc (ushort cbMem)

This function allocates a block of memory. The memory may be movable, and
outside of the default data segment. HelpAlloc returns NULL on failure, or
if cbMem  is 0. DOS only.


HelpDealloc

    void pascal far HelpDealloc (mh)

This function deallocates a block of memory. DOS only.


HelpLock

    char far * pascal far HelpLock (mh)

This function returns a far pointer to the base of the memory referenced by
the handle. In the case of movable memory, the memory is also locked. If the
memory handle passed is invalid or NULL, NULL should be returned. DOS only.



HelpUnlock

    void pascal far HelpUnlock (mh)

This function unlocks the memory referenced by the handle. DOS only.


OpenFileOnPath

    fhandle pascal far OpenFileOnPath (char *fname, f fWrite);

The file name is of the following form:

    [$ENVVAR: | path]filename.ext

If                                Then
────────────────────────────────────────────────────────────────────────────
$ENVVAR:  is present              The file does not exist in the current
                                    directory; it should be located on the
                                    path-formatted environment variable
                                    specified.

path  is not present              The file does not exist in the current
                                    directory; it should be located on the
                                    PATH environment variable.

path  is present                  The file is simply opened. DOS only.


ReadHelpFile

    ulong pascal far ReadHelpFile (int fhandle, ulong fpos, char
    far *pData, ushort cbBytes);

ReadHelpFile reads  cbBytes  of data, placing it beginning at  pData  from
the file whose handle is  fhandle, beginning at file offset  fpos. It
returns the number of bytes read.

If  cbBytes  is zero, then the routine should return the size in bytes of
the referenced file. DOS only.


HelpCloseFile

    void pascal far HelpCloseFile (int fhandle)

This function closes the file whose handle is passed. DOS only.


Callback Notes

Each call by an application to HelpOpen results in a call by the engine to
OpenFileOnPath if the file referenced is not already open. CloseFile will
not be called until a HelpClose operation is performed on that file.

To reduce the number of concurrently open file handles (for applications
which support multiple simultaneous help files), the handle returned by
HelpOpen (and used by ReadHelpFile and CloseFile) should be a "virtual"
handle. Also, some form of currently open file "handle caching" should be
performed. By keeping only the most recently accessed file physically open
at the DOS level, and by closing or opening when a request against a new
virtual handle is made, the help system can be guaranteed to only have one
file handle open at a time.


4.10  Interface Usage

For simple context-string-to-help-topic-text retrieval, the following steps
outline the process. Assume that the help file has been opened via HelpOpen:



    1.  Call HelpNc to get a context number for the string on which help is
        desired.

    2.  Call HelpNcCb to determine the amount of memory required by the
        compressed topic. If appropriate, allocate this memory.

    3.  Call HelpLook to retrieve the compressed topic from the help file.
        This call also returns the size of the uncompressed topic. If
        appropriate, allocate this memory.

    4.  Call HelpDecomp to decompress the topic text. Once completed, the
        memory for the compressed topic text may be deleted.

    5.  Call HelpGetCells or HelpGetLine and HelpGetLineAttr to extract the
        topic text and formatting information one line at a time.


Given any valid context number returned by the help engine, you can also:


    1.  Call HelpNcNext to get the context number for the next sequential
        topic in the file.

    2.  Call HelpNcPrev to get the context number for the previous sequential
        topic in the file.

    3.  Use HelpNcRecord and HelpNcBack to manage a history list of context
        numbers.







Chapter 5  Size and Performance
────────────────────────────────────────────────────────────────────────────


5.1  Help Engine

The help engine itself varies in size based on functions used (and hence
linked in) and on memory model or environment selected. In general, it
ranges in size from 4K to 6K of code. In addition, the application requires
around 4K of code to interface the help engine to its own environment.

The help engine maintains 104 bytes of static data. All other data is
allocated dynamically, based on the number of help files being opened. For
each help file open, 115 bytes of dynamic memory is allocated. This memory
is not freed until the file is actually closed with the HelpClose function.
Note also that concatenated files count separately. That is, each
concatenated portion counts as a single separate file.

When accessing a help file, several tables are read in from the actual help
file. These tables are discardable under most circumstances by calling
HelpShrink. The tables vary in size based on the size of the help file
itself. The information in Table 5.1 presents the relevant numbers for the
file QC.HLP, a file shipped with QuickC 2.0, and some indication of what
each is dependent on.

At decompression time, the Keyphrase and Huffman tables must be resident in
memory simultaneously. This is checked by the engine. In all other cases,
HelpShrink may be called during HelpAlloc to discard unneeded or rebuildable
memory.

At decompression time, memory is also required for both the compressed and
decompressed topic texts.

Table 5.1  QC.HLP File Information

╓┌────────────────┌────────────────┌─────────────────────────────────────────╖
Type             Size (in Bytes)  Description
────────────────────────────────────────────────────────────────────────────
File size        355,940          Dependent on all of the tables below,
                                    plus the volume of help actually
                                    provided. File size has no bearing on
                                    the memory requirements of applications.

Topic index      3,084            Four times the number of help topics in
                                    the file. QC.HLP has 771 topics.

Context strings  4,700            Total length of all context strings
Type             Size (in Bytes)  Description
────────────────────────────────────────────────────────────────────────────
Context strings  4,700            Total length of all context strings
                                    supported by the help file.

Context map      1,168            Two times the number of context strings
                                    supported. QC.HLP has 584 context
                                    strings.

Keyphrase table  8,087            Number plus 2,048 actually allocated at
                                    decompression time. This table is
                                    proportional to the size of the
                                    compressible key phrases identified in
                                    the file at compression time. This is
                                    limited to 1,024 words, but the
                                    individual words may be of arbitrary
                                    length.

Huffman table    1,024            Occasionally smaller than this, but in
                                    most cases quickly growing to this size.
                                    It is never larger.
Type             Size (in Bytes)  Description
────────────────────────────────────────────────────────────────────────────
                                    It is never larger.

────────────────────────────────────────────────────────────────────────────




5.2  HELPMAKE.EXE

HELPMAKE.EXE is a bound program around 60K in size. It requires 256K
available memory to run. When compressing, it requires free disk space up to
2.5 times the size of the input file(s).







Glossary
────────────────────────────────────────────────────────────────────────────

Advisor
The Microsoft Advisor is the name given to the help system as actually
implemented in many Microsoft language products.

Application-Specific Character
A character agreed upon by the applications developer and help-file author
that signifies that the rest of the line following it is a topic command
line, and not a line of actual help text to be displayed. Specified to
HELPMAKE using the /A parameter.

Context
A keyword or phrase which is recognized by the help system and relates to a
topic.

Context Map
A table which maps a context number to a topic index.

Context Number
A number in the range 1-32,767 that uniquely identifies a context.

Cross Reference
A string associated with a "hotspot" or location in displayed help text.
When activated, the cross-reference string may reference another help
context or help file, or it may cause the application to take some other
kind of action.

Cross-Reference Command
A context string which, when looked up by the application, usually in
response to a hotspot selection, does not cause additional help to be
retrieved. Instead it executes a DOS command or causes some other
application-specific action to occur.

Dot Command
English form of topic command used within QuickHelp-formatted databases.

Executable Context
See Cross-Reference Command.

Executable Cross-Reference Command
See Cross-Reference Command.

Help Database
The single compressed file output by HELPMAKE. Also, that single help file,
when concatenated with others.

Help File
A collection of one or more help databases that constitutes a single
physical file. Also, a single minimally formatted ASCII file.

Help Item
See Topic.

Help Screen
An application-provided window on a single topic. A help screen should be
scrollable to allow viewing of the entire topic, should it exceed the size
of a single screen.

Hotspot
The location in topic text to which a cross-reference has been attached.
Hotspots are normally highlighted in some fashion when displayed, and define
areas within the displayed topic that activate the cross-reference when
selected.

Keyphrase
A word or phrase extracted from the help text and replaced by a token during
compression.

Label
See Context String.

Local Context
A context that has no associated context string in the help file, and is
referenced only by a hotspot elsewhere in the same help file.

Node
See Topic.

Node Name
See Context String.

RTF
Rich Text Format. An ASCII text format for storing documents and their
formatting information.

Script Topic
A topic whose contents are executable cross-reference commands.

Topic
The text displayed as a help entry. May be up to 64K of encoded text.

Topic Command
A control line embedded into help text which contains control information or
instructions for the application displaying help, as opposed to help text to
be displayed.

Topic Index
A number corresponding to a sequential topic entry in the help file. Also,
the table that maps these numbers to actual file positions.
```

{% endraw %}
