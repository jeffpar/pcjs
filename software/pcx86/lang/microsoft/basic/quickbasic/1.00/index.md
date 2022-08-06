---
layout: page
title: Microsoft QuickBASIC 1.00
permalink: /software/pcx86/lang/microsoft/basic/quickbasic/1.00/
redirect_from: /disks/pcx86/tools/microsoft/basic/quickbasic/1.00/
machines:
  - id: ibm5160-msdos320
    type: pcx86
    config: /machines/pcx86/machine/ibm/5160/ega/512kb/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    floppyDrives: '[{boot:false},{}]'
    autoMount:
      A:
        name: MS QuickBASIC 1.00
      B:
        name: None
---

A machine with QuickBASIC 1.00 loaded in drive A: is provided below, along with a
[Directory Listing](#directory-of-ms-quickbasic-100) of the original 360Kb distribution diskette
and a copy of the [README](#readmedoc).

{% include machine.html id="ibm5160-msdos320" %}

### Directory of MS QuickBASIC 1.00

     Volume in drive A has no label
     Directory of A:\

    BASCOM   EXE     52560   7-17-85   1:56p
    BCOM10   LIB    154624   7-17-85   1:56p
    BRUN10   LIB      3072   7-17-85   1:56p
    BRUN10   EXE     58388   7-17-85   1:56p
    GWCOM    OBJ      2782   7-17-85   1:56p
    GWCASS   OBJ      2099   7-17-85   1:56p
    SMALLERR OBJ       246   7-17-85   1:56p
    REMLINE  BAS     12591   7-23-85   9:33a
    CALL     BAS       612   4-12-85   5:53p
    README   DOC      7206   7-23-85   9:35a
    COMMAND  BAS       659   4-04-85   4:06p
    DEFFN    BAS       336   3-07-85   3:04p
    MAIN     BAS       180   7-11-85   6:45p
    DIGIT    BAS       217   7-11-85   6:46p
    SUB      BAS       349   4-01-85   6:58p
    DEC      BAS       236   7-11-85   6:46p
    DRAW     BAS       681   4-19-85   4:03p
    PLAY     BAS       192   3-21-85   1:08p
    REDIM    BAS       439   4-13-85   3:15p
    SHARED   BAS       629   4-01-85   1:54p
    LINK     EXE     43642   3-11-85   8:06p
           21 file(s)     341740 bytes
                            8192 bytes free

### README.DOC

    MICROSOFT
    QuickBASIC Compiler
    README.DOC

    July 18, 1985


    The following file contains information in addition to the
    Microsoft QuickBASIC Manual.

    The following files are on your QuickBASIC diskette:

    Compiler Files:

    BASCOM   EXE    The QuickBASIC Compiler
    BCOM10   LIB    The QuickBASIC Compiler Library
    BRUN10   EXE    The QuickBASIC Runtime
    BRUN10   LIB    The QuickBASIC Runtime Library
    LINK     EXE    The Microsoft Linker
    GWCASS   OBJ    Object module for cassette support
    GWCOM    OBJ    Object module for communications support
    SMALLERR OBJ    Object module for producing small error
                    messages, and therefore, a smaller EXE file

    README   DOC    This information file


    Demonstration Files:  The following examples have been
    placed on the disk for your convenience.  These examples are
    identical to the examples in chapter 9 of the manual, under
    the sections headed by the statement/function noted.

    CALL     BAS    This demonstrates the use of the CALL
                    statement

    COMMAND  BAS    This shows the use of the COMMAND$ function

    DEFFN    BAS    This shows the use of DEF FN in multi-line
                    functions

    MAIN     BAS    This example, combined with DIGIT.BAS and
                    DEC.BAS show the use of the CHAIN statement
                    as well as COMMON variables

    DIGIT    BAS    See MAIN.BAS
    DEC      BAS    See MAIN.BAS

    SUB      BAS    This shows the use of SUB..SUB END/SUB EXIT
                    to create named subroutines

    DRAW     BAS    This shows the use of the DRAW statement

    PLAY     BAS    This shows the use of the PLAY statement

    REDIM    BAS    This shows the use of the REDIM statement
                    with dynamic arrays and ERASE

    SHARED   BAS    This shows the use of SHARE statement in
                    named subroutines with shared variables

    REMLINE  BAS    This program is designed to take programs
                    written for a Microsoft BASIC Interpreter
                    and remove the unreferenced line numbers
                    for use with QuickBASIC.  REMLINE assumes
                    that the program is syntactically correct.

    GENERAL NOTES:

    - QuickBASIC can read Microsoft Word formatted files.  For
    those users of QuickBASIC who own Microsoft Word,
    you can use Word to edit your programs.  There is no need to
    save the file non-formatted, as QuickBASIC will disreguard
    any formatting information and compile the program.

    - if you are using the runtime library and either cassette or
    communications support, you must link in either
    GWCASS.OBJ (for cassette support) or GWCOM.OBJ (for
    communications support).

    - If you are using the LOCK or  UNLOCK statements, or the
    LOCK type clause in the OPEN statement , you should
    be aware that they will only function at runtime if you are
    using MS-DOS 3.00 or higher.  The code will be compiled,
    however, if you are using a DOS below 3.00 you will receive
    an ADVANCED FEATURE runtime ERROR if either a LOCK or an
    UNLOCK is performed.

    If you are using MS-DOS 3.00 you must run the SHARE
    program to perform any locking operation.


    ADDITIONS TO THE MANUAL:

    OPEN STATEMENT:

    The compiler fully supports the syntax of the IBM BASICA 3.00
    interpreter OPEN statement. The functionality of the OPEN statement
    has been enhanced to control access to opened files in a
    network environment. The new, expanded syntax is:

    OPEN "<filespec>" [FOR <mode>][ACCESS <access>]
        [<locktype>] AS [#] <filenum> [LEN=<record length>]

    <mode> specifications may now include the RANDOM keyword.

    When no <mode> is specified, RANDOM file mode is assumed.
    In RANDOM mode, if no ACCESS clause is present, three
    attempts are made to open the file when the OPEN
    statement is executed. Access is attempted in the
    following order:

        1. Read/write

        2. Write-only

        3. Read-only

    The ACCESS clause specifies the type of operation to be
    performed on the opened file. If the file is already opened
    by another process and access of the type specified is
    not allowed, the OPEN will fail and a "Permission Denied"
    error message is generated.

    The ACCESS types are:

    READ      Opens the file for reading only.

    WRITE          Opens the file for writing only.


    READ WRITE     Opens the file for both reading and
            writing. This mode is invalid for all
            except RANDOM files and files opened for APPEND.

    The <locktype> clause restricts access by other processes
    to an open file. The locktypes are

    default      If <locktype> is not specified, the file
                may be opened for reading and
                writing any number of times by this process,
                but other processes are
                denied access to the file while it is opened.

    SHARED            Any process on any machine may read from or write
                    to this file.

    LOCK READ    No other process is granted read access to this file.
                This access is granted only if no other process has
                a previous LOCK READ access to the file.

    LOCK WRITE        No other process is granted write access to this
                file.  This also is granted only if no other process
                has a previous access
                of this kind to the file.

    LOCK READ WRITE    No other process is granted either read or write
                access to this file. This access is
                    granted only if LOCK READ WRITE
                has not already been granted to another process.

    OPEN now generates error 70 "Permission Denied", when the
    OPEN is restricted by a previous process. Error 70 was
    previously "Disk Write Protect." A write protected disk will
    still give you an error 70.


    SEGMENT MAPS:  Section 8.5

    The following entry showed be added to the Segment Maps
    found in both tables 8.1 and 8.2.  If you use named
    COMMON, the named COMMON segment will be in the segment
    table.

    In the Low DS section of the tables, after the entry which
    looks like:

            BC_DATA               BC_VARS

    If named COMMONs are used there will be one entry for each
    named COMMON which looks like:

            FOO                   BC_VARS

    where "FOO" is the name of the COMMON.

---

![MS QuickBASIC 1.00]({{ site.software.diskettes.server }}/pcx86/lang/microsoft/basic/quickbasic/1.00/MS-QUICKBASIC-100.jpg)
