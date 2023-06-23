---
layout: page
title: "PC-SIG Diskette Library (Disk #2011)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2011/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2011"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-TAGS"

    PC-TAGS is a DOS and OS/2 source-code retrieval system and source
    browser that will locate and retrieve a function or procedure definition
    from a text file written in C, Pascal, BASIC, dBASE, Assembly, Modula-2
    or any other language (including English).  After locating the correct
    source file, PC-TAGS will load the file into your editor and place the
    cursor at the retrieved function or procedure's beginning.
    
    PC-TAGS can be used in conjunction with any text editor or programming
    environment.  There is no need to change your current method of working.
    Further, if you use a MAKE facility or version-control system, PC-TAGS
    can be integrated easily into your current system.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2011.TXT

{% raw %}
```
Disk No: 2011                                                           
Disk Title: PC-TAGS                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: PC-TAGS                                                  
Author Version: 1.01                                                    
Author Registration: $34.95                                             
Special Requirements: None.                                             
                                                                        
PC-TAGS is a DOS and OS/2 source-code retrieval system that will locate 
and retrieve a function or procedure definition from a text file written
in C, Pascal, BASIC, dBASE, Assembly, Modula-2 or any other language    
(including English).  After locating the correct source file, PC-TAGS   
will load the file into your editor and place the cursor at the         
retrieved function or procedure's beginning.                            
                                                                        
PC-TAGS can be used in conjunction with any text editor or programming  
environment.  There is no need to change your current method of working.
Further, if you use a MAKE facility or version-control system, PC-TAGS  
can be easily integrated into your current system.                      
                                                                        
Instructions on using PC-TAGS can be found in the "PC-TAGS User Manual" 
supplied on-disk in the distribution package.  The PC-TAGS distribution 
includes the following files:                                           
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PCTAGS.DOC

{% raw %}
```







                                    PC-TAGS
                                  User Manual

                                  Version 1.OO



















                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95O55-3638


                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER




                              Copyright (C) 1989
                              by Moderne Software
                              All rights reserved


          PC-TAGS, PCTAGS and RETRO are trademarks of Moderne Software.
                Other brand and product names are trademarks or
               registered trademarks of their respective holders.






                               Introduction
                               ------------

   PC-TAGS(tm) is a DOS and OS/2 source-code retrieval system that will
locate and retrieve a function or procedure definition from a text file
written in C, Pascal, BASIC, dBASE, Assembly, Modula-2 or any other language
(including English).  After locating the source file, PC-TAGS will load it
into your editor and place the cursor at the retrieved function or
procedure's beginning.

   PC-TAGS can be used in conjunction with any text editor or programming
environment.  There is no need to change your current method of working.
Further, if you use a MAKE facility or version-control system, PC-TAGS can
be easily integrated into your current system.

   As an example of the functionality PC-TAGS provides, imagine you are in
your favorite editor viewing a source file.  You see that your code calls a
particular function, but you're not exactly sure what the function does.
Simply place the cursor anywhere under the function's name and press a
single key.  PC-TAGS will locate the source file that contains the function,
load it into the editor and position the cursor at the function's beginning.
If the source file had been stored in a version-control library, PC-TAGS
would have extracted the file from the library before loading it into the
editor.  You can now examine the function's code to determine exactly what
it does.

   As previously mentioned, built into PC-TAGS is the capability to
recognize function and procedure definitions written in the C, Pascal,
BASIC, dBASE, Assembly and Modula-2 programming languages.  PC-TAGS will
also recognize certain data structures, such as structures, records and
macros, in some of the supported languages.  All existing compilers and
interpreters that run under the DOS and OS/2 operating systems are
supported.  This includes, but is not restricted to:

                -- Borland Turbo C
                -- DeSmet DC88
                -- Ecosoft Eco-C88
                -- Lattice C
                -- Manx Aztec C
                -- Mark Williams C and Let's C
                -- MetaWare High C
                -- Microsoft C and QuickC
                -- Mix Power C
                -- Rational Systems Instant C
                -- Watcom C

                -- Borland Turbo Pascal
                -- MetaWare Professional Pascal
                -- Microsoft Pascal and QuickPascal

                -- Borland Turbo BASIC
                -- Microsoft BASIC and QuickBASIC

                -- Ashton-Tate dBASE, all versions
                -- Fox Software FoxBASE+
                -- Nantucket Clipper
                -- All other dBASE clones

                -- Jensen & Partners TopSpeed Modula-2
                -- Logitech Modula-2
                -- Stony Brook Modula-2 and QuickMod

                -- Borland Turbo Assembler
                -- Microsoft Macro Assembler and QuickAssembler
                -- SLR Systems OPTASM Assembler

   Besides the languages built into PC-TAGS, other programming languages are
supported indirectly.  Any line of an ASCII text file can be explicitly
tagged by placing on it a comment containing the keyword "PCTAGS".  PC-TAGS
will recognize those lines just as it recognizes the function definitions of
the built-in languages.  Thus, PC-TAGS can be used with any programming
language that supports comments.  Using the explicit tags, PC-TAGS can also
be used to retrieve other types of information besides function definitions.

   When using PC-TAGS with source code files, it can extract files from any
version control system available under DOS and OS/2.  This includes, but is
not restricted to:

                -- Burton Systems TLIB
                -- MKS RCS
                -- Polytron PVCS
                -- Quilt Computing SRMS
                -- Seidl Version Manager

   PC-TAGS will work with any editor, word processor or programing
environment, such as Borland's Turbo and Microsoft's Quick environments.
(From now on, references to "editor" include text editors, word processors,
programming environments and all other types of application programs that
allow the editing of ASCII files.)

   Editors that support a macro language can have the PC-TAGS retrieval
operation incorporated into the editor as an extension.  Pre-written macros
for the following editors are included as part of the PC-TAGS package:

                -- American Cybernetics Multi-Edit
                -- Lugaru Software Ltd. Epsilon
                -- Magma Software Systems ME
                -- Mansfield Software Group KEDIT
                -- UnderWare, Inc. BRIEF

   PC-TAGS is distributed as shareware.  Each user is given the opportunity
to evaluate the complete PC-TAGS software package for 30 days with no
obligation.  After the evaluation period, if you find PC-TAGS to be a useful
tool and wish to continue using it, you must register your copy with Moderne
Software.

   PC-TAGS is distributed in three forms:

        -- An unregistered evaluation version which is distributed via
        computer bulletin boards, disk distributors and user groups.
        This version will run under the DOS operating system only.

        -- A registered version of PC-TAGS that will run under the DOS
        operating system is available from Moderne Software when you
        register the program.

        -- Also available is a registered version that will run under
        both the DOS and OS/2 operating systems.  This version is only
        available from Moderne Software by registering PC-TAGS.

   The unregistered version is fully-functional with no hidden or disabled
features.  However, the unregistered version requires "special input" from
the user during program operation that is not necessary in the registered
versions.  This special input serves as a reminder to the user that the
program is an unregistered evaluation copy and also as a prod to register.

   PC-TAGS registration is only $34.95 for the DOS version and $69.95 for
the DOS-OS/2 version.  Quantity discounts are available for use by a
commercial institution.  Refer to the LICENSE file for quantity discount
schedules.

   A copy of the appropriate registered version will be sent to you upon
receipt of your paid registration form.  A printed copy of the PC-TAGS
manual is included as part of the registered versions.  Registration also
entitles you to technical support and future releases at a reduced price.
Considering the powerful functionality provided by PC-TAGS, this is an
outstanding value.

   A PC-TAGS registration form is included in the file ORDERFRM.  Take the
time to fill it out and return it.  If you would like high-quality software
to continue to be made available on a try-first basis and for a reasonable
cost, it is up to YOU to support such programs.  Please do.



                               Getting Started
                               ---------------

   Using PC-TAGS is a two-step process:

        1) Creation of a diskfile containing information, or "tags," about
        each function and procedure definition in a source-code file.  This
        disk file is appropriately called a "tagfile."

        2) Retrieval of a specific function or procedure definition during
        the editing process.

   For the sake of brevity, future uses of the word "function" will refer to
both "function and procedure" unless stated otherwise.  PC-TAGS will also
recognize and tag some data structures, such as typedefs, structs, records,
objects and macros in some of the supported languages.  References to
"function" will also refer to these data structures.  Information on the
other recognized data structures is included later in this manual.

   The first step in the process, the creation of the tagfile, is performed
by the PCTAGS.EXE program.  It scans through your source code files,
extracting the function-definition information contained within.  This
information is then stored in a disk tagfile.

   The tagfile is used later during the retrieval step.  The tagfile will be
accessed to recall the tag information related to a particular definition.
This information is then used to locate the function's source file and move
to the line in the file where it is defined.

   Retrieval is done by the various RETRO programs.  Several different RETRO
programs are provided in the PC-TAGS package.  The appropriate RETRO method
you should use depends upon your text editor.  This will be discussed later
in this manual.  Regardless of which editor you use, one of the versions of
RETRO will work for you.

   PCTAGS and RETRO will NEVER modify your source files.  PCTAGS only reads
through a file and never writes to it.  The only files modified by PCTAGS
are the tagfiles which are then read by RETRO during the retrieval process.
RETRO only reads tagfiles and never modifies them.

   The remainder of this manual will explain how to use the PCTAGS and RETRO
programs to make your programming life a little easier.



                      Creating Tagfiles with PCTAGS.EXE
                      ---------------------------------

   PCTAGS.EXE (from now on referred to as "PCTAGS") scans source code
written in C, Pascal, BASIC, dBASE, Modula-2 and Assembly and extracts
information about the function definitions contained in the file.  It is
also possible to instruct PCTAGS to tag lines containing the "PCTAGS"
keyword, thus allowing PCTAGS to process text files of any type.  This
capability is explained later in this manual.

   Specifically, PCTAGS extracts three pieces of information for each
function or keyword line:

                1) the function name
                2) the file name, including drive and complete path
                3) the entire line on which the function is defined

   These pieces of information identify and tag a specific function and are
therefore referred to as a "function tag."  Each function tag is written and
saved to a disk "tagfile."  Tagfiles consist of one or more function tags.

   Tagfiles may contain function tags from one or more source files stored
anywhere on your computer system.  For example, a single tagfile could be
created which has all the function tags used for a particular program.  The
source files for the program may be scattered over several directories and
drives, but all the tag information can be combined in a single tagfile.

   Another approach would be to create a tagfile for each directory or
library of source files.  Most significant programs are a combination of
several libraries of routines.  For example, one library will contain all
the window routines and another will have low-level operating system
functions.  The source code files for each library are most likely stored in
separate directories.  A separate tagfile can be created for each directory
of routines.  Thus you would have a tagfile containing window function tags
and another with the low-level tags.  During the function retrieval
operation, both tagfiles can be searched for the desired function
information.

   The organization of the tagfiles is entirely up to you.  PC-TAGS is very
flexible and can be configured to work within your current file structure.


Running PCTAGS
--------------
   The creation and maintenance of tagfiles is a very easy process.  Simply
run the PCTAGS program and include on the command line the names of the
source files PCTAGS should process.  Several command-line options are
available to configure PCTAGS operation to something other than its default
actions.

   The command-line syntax for PCTAGS is:

     PCTAGS [-global_options] srcfile [-options] [srcfile [-options] ...]

   Where:
        "global_options" are instructions to PCTAGS on how to treat ALL of
        the source files on the command line

        "srcfile" is a file specification, with optional drive and path, of
        the source code file.  DOS wildcard characters are supported.

        "options" are instructions to PCTAGS on how to treat the source
        file(s) to the left of the option.  These are equivalent to "local"
        options and can be used to override a global option.

   If PCTAGS is invoked with no command line arguments, a usage message is
displayed.

   The supported options and a discussion of global vs. local options are
included a little later in this manual.

   In the unregistered version of PCTAGS, a random two-digit number will be
displayed when PCTAGS first starts executing and again for every five source
files it scans.  You must re-enter the displayed number in order for PCTAGS
to continue its operation.  This user input is not required in the
registered versions of PC-TAGS.  Its purposes are to remind you that you are
running an unregistered evaluation version and to act as an impetus to
register.  You can receive a registered version by sending your paid
registration form contained in the file ORDERFRM to Moderne Software.

   In its simplest form, a command line to process the single file MAIN.C
would be:

                >PCTAGS main.c

   The above line instructs PCTAGS to scan the file MAIN.C and extract all
function tag information from it.  PCTAGS does not alter the source file in
any way; it simply accumulates tag information in its own internal tables.
The tag information is then written to the default tagfile PCTAGS.TAG in the
current directory of the current drive.  If PCTAGS.TAG does not already
exist, it is created.  If the tagfile does already exist, it is "updated."

   Updating a tagfile is a three-step process.

           1) Remove from the tagfile all existing function tags
           associated with the source file
           2) Scan the source file, accumulating function tags
           3) Append the function tags to the end of the tagfile

   During the update operation, any existing function tags associated with
the currently-processed source file are removed from the tagfile.  For
example, say the file MAIN.C contains code for a function called "main."
Assume a previous run of PCTAGS extracted the tag information for "main" and
stored it in the PCTAGS.TAG tagfile.  If PCTAGS processes MAIN.C a second
time, the original "main" tag information is removed from the tagfile.  This
is done to prevent multiple entries of a function tag from occurring in a
tagfile and to eliminate potentially obsolete function tags.

   The updating of tagfiles allows you to modify tagfiles incrementally.
When you change a single source file, it is only necessary to add the
information for that file to the tagfile rather than recreate the entire
tagfile over again.  This makes the maintenance of tagfiles quick and
simple.

   Tagfile updating is done automatically by PCTAGS unless you explicitly
tell it not to by specifying the -A option on the command line.  The -A
option is explained in detail a little later in this manual.

   After any associated function tags are removed from the tagfile, PCTAGS
scans the specified files and extracts tag information related to the
functions defined in the files.

   Since each programming language defines its own syntax for declaring
functions, PCTAGS must know the source language type in order to correctly
process it.  PCTAGS examines the source file's file extension to determine
the type of source language in the file.  The following file extensions are
recognized:

                      .C      -- C source file
                      .H      -- C source file
                      .PAS    -- Pascal source file
                      .BAS    -- BASIC source file
                      .PRG    -- dBASE source file
                      .MOD    -- Modula-2 source file
                      .DEF    -- Modula-2 source file
                      .ASM    -- Assembly source file

   If the source file has an extension other than one of the supported
extensions, the source language type must be specified explicitly to PCTAGS
via the -S command-line option, discussed later in this manual.

   PCTAGS will scan and recognize code which conforms to the syntactic
definition of the processed language.  Source code containing syntax errors
may result in incorrect identification of function definitions.  It is
recommended that a source file be compiled and debugged until it does not
contain any syntax errors before being sent through PCTAGS.

   As previously mentioned, the extracted tag information consists of the
function's name, the complete file name, including drive and path, and a
copy of the line on which the function is defined.  Additional information
may be saved for each function tag depending on the options specified on the
PCTAGS command line.

   Exactly what tag information PCTAGS accumulates is not important to the
PCTAGS user.  It is not necessary for you to know what PCTAGS is extracting
and saving.  You can safely think of PCTAGS as a program that produces
output used only by the various RETRO programs.

   After scanning the source files and accumulating the function tags,
PCTAGS writes the tag information to the end of the tagfile.  If the tagfile
does not already exist, it is created.

   The format of the information stored in the tagfile is not important to
the PCTAGS user.  For curious users, this information is documented in the
"Tagfile Format" section of this manual.

   PCTAGS will accept more than one file name on its command line.  Multiple
files can be specified and each may contain the standard DOS wildcard
characters, '?' and '*'.  As examples, each of these command lines are
valid:

                >PCTAGS *.c e:\prog\src\*.c
                >PCTAGS prog?src.pas c:\pascal\*.pas
                >PCTAGS c:/prog/src/*.c c:\prog2\src\*.c

   In each of the above examples, PCTAGS will scan all the matching files
and extract all their function tag information.  The original source files
are not modified in any way.  The information accumulated by PCTAGS is then
written to the PCTAGS.TAG tagfile.  The tagfile will be updated if it
already existed when PCTAGS was run.  If each of the examples were run
consecutively as shown above, PCTAGS.TAG would contain all the tag
information for all the processed files.

   Notice from the last example that PCTAGS accepts both backslashes(\) and
slashes(/) as a path separator.


Explicit Tags
-------------
   In addition to function definitions, other items can be tagged by placing
the keyword "PCTAGS" within the file.  Following the "PCTAGS" keyword must
be the "tagname" by which the line will be retrieved.  For example, a line
in a source file which defines a variable called "counter" will probably
have the tag "PCTAGS counter."  The exact syntax of explicit tags is:

                                PCTAGS tagname

   The "PCTAGS" keyword may be in upper or lower case.

   In most cases, explicit tags should be specified within a comment as
defined in the file's source language.  While placing an explicit tag within
a comment is not a requirement for PCTAGS, doing so is necessary to prevent
confusion when the file is later processed by a compiler or interpreter.

   The following examples show explicit tags for a variety of languages.

         C:           int counter;            /* PCTAGS counter */
         Pascal:      counter : INTEGER;      { PCTAGS counter }
         BASIC:       DEFINT counter          ' PCTAGS counter
         dBASE        PUBLIC total            && PCTAGS total
         Modula-2:    counter : INTEGER;      (* PCTAGS counter *)
         Assembly:    counter dw 0            ; PCTAGS counter
         Cobol:       INITIALIZE_TAX_TABLE.   * PCTAGS INITIALIZE_TAX_TABLE
         C++:         void ice::melt(){       // PCTAGS melt
         Lisp:        (DEFUN LIBERATE         ; PCTAGS LIBERATE
         Forth:       :ANARKEY CMD EDITOR     ( PCTAGS ANARKEY)
         Prolog:      find_all:-              % PCTAGS find_all
         ADA:         PROCEDURE test() is     -- PCTAGS test
         English:     My Diary, Day 1         PCTAGS Day1
         Corporate:   Quarterly Expenses ---- PCTAGS Q1Exps

   As the above examples show, explicit tags allow PCTAGS to support all
programming languages and English text files, even corporate statements,
which few would consider as English.

   When explicit tags are placed in a source file containing code in one of
the built-in languages (C, Pascal, etc.), the file will usually need to be
processed by PCTAGS twice; once to extract the function definitions and
again to recognize the explicit tags.  But recall that PCTAGS will update
the tagfile by first removing all tag references to the processed file.  To
prevent the second pass from removing the tag information extracted by the
first pass, it is necessary to repress the automatic-update operation during
the second run.  This is easily done by specifying the -A option on the
command line of the second pass.  The -A option is explained in further
detail in the section on PCTAGS options.

   Once scanned and stored in the tagfile, explicit tag information is no
different from the standard function tags.  During the retrieval operation,
RETRO makes no distinction between function tags and explicit tags; they are
exactly alike.


Keep Your Tagfiles Up-to-Date
-----------------------------
   The information stored in the tagfiles is used by RETRO to retrieve a
desired function definition.  It is important that the tag information
accurately represent the current status of each function definition in each
source file.  Obsolete tagfiles will cause the retrieval operation to fail.

   If function definitions are altered or moved to a different file, the
tagfile must be updated.  If line numbers are stored in the tagfile instead
of a copy of the definition line (explained in the -L option later in this
manual), inserting or deleting a single line in a source file will often
require the tagfile to be updated.

   Because PCTAGS automatically updates a tagfile, maintenance of tagfiles
is not a costly or time-consuming task.  It is a good idea to get in the
habit of sending your source files through PCTAGS whenever you modify them.
PCTAGS is designed so that if you modify only one file of a 100-file
program, only the modified file needs to be rescanned.  Thus, there is
little reason to not keep your tagfiles up-to-date.

   When to perform tagfile maintenance depends upon your programming
environment.  If you use a MAKE utility in your development cycle, a single
line can be added which would update the tagfile for all modified source
files.  Or a simple batch file can be created to do the updating.  If you
employ a version-control system, the best time to update the tagfile would
be when you enter the new version into the library.

   The important point is that necessary tagfile maintenance be performed on
a regular basis.  The correct operation of the PC-TAGS system depends upon
it.


PCTAGS Options
--------------
   So far we have discussed only the default operation of PCTAGS.  Several
options are provided which can be used to alter the default PCTAGS actions.

   A PCTAGS option is prefaced by a dash(-) character.  The option itself
may be specified in upper or lower case.  All options are single characters,
however, some require an additional argument which must appear immediately
after the option with no spaces between them.  More than one option can be
specified on a command line.  They may appear in any order, but each option
must be separated from the others by at least one space.

   PCTAGS supports two types of options: global and local.  Global options
bind to all the source files specified on the command line.  Global options
must be specified on the PCTAGS command line before the first source file
name.

   In the example below, -V is a global option bound to both FILE1.C and
FILE2.C.

                        PCTAGS -v file1.c file2.c

   Local options bind to a single source file or, if wildcard characters are
used, to a single group of source files.  Local options are specified
immediately after the source file specification to which they refer.

   Here is a command line which is equivalent to the example above, but
which uses local options instead:

                        PCTAGS file1.c -v file2.c -v

   Local options can be used to override a global option, as shown in this
example:

                PCTAGS -ttagmain *.c *.asm c:\lib\*.c -tlib.tag

   In the example above, the tag information for the files "*.c" and "*.asm"
are written to a tagfile called "tagmain."  However, the tagfile "lib.tag"
will receive the function tags from the files "c:\lib\*.c."

   All the supported options may be used as either global or local options.
In other words, there are no options which can only be used as global
options or which can only be used as local.

   In addition to being specified on the command line, global options may
also be stored in an environment variable called "PCTAGS."  Options assigned
to the PCTAGS environment variable are always interpreted as global options.
They will be processed by the PCTAGS program before any command-line global
options.  If conflicting options are specified in the PCTAGS environment
variable and on the command line (such as specifying two different tagfile
names), the command line options will override those from the environment.

   As an example, if the following PCTAGS environment variable is defined:

                SET PCTAGS=-v -tc:\tagfiles\prog1.tag

   Then the command line:

                PCTAGS *.c

   Will be processed as:

                PCTAGS -v -tc:\tagfiles\prog1.tag *.c

   The PCTAGS environment variable provides a convenient location to specify
global options which will be common to all or most invocations of the
PCTAGS program.

   The remainder of this section describes the supported options.


Repressing Automatic Update
---------------------------

   -A           -- Append tag information to tagfile.  No automatic update.

   As discussed in the section on PCTAGS operation, all old tag information
associated with the processed file is normally removed from the tagfile to
prevent the creation of duplicate and obsolete tag entries.  A few
situations exist where this automatic updating is not desirable.

   For example, a source file may have to be scanned twice by PCTAGS to
extract all its tag information.  This will occur when there are explicitly-
tagged lines in the file in addition to the normal function definitions.
For both types of tag information to be extracted and written to the
tagfile, PCTAGS must process the file twice.  Normally, the second run of
PCTAGS would cause the removal of the function tags extracted during the
first run.  To prevent this from happening, specify the -A option on the
command line for the second run of PCTAGS.  This is shown in the following
command line:

                       >PCTAGS file.c file.c -A -SE

   In the above command line, the first processing of FILE.C will extract
the C function definitions and add them to the tagfile, removing during the
update process all tags that previously existed in the tagfile.  The second
processing will not perform the update operation because the -A local option
is specified.  The second time through FILE.C, PCTAGS will extract tag
information for each explicitly-tagged line.  This is due to the -SE option.

   More information on processing explicitly-tagged files can be found in
the discussion of the -S option.


Retrieve Source File from Version-Control Library
-------------------------------------------------

   -E           -- Execute RETROEXEC environment variable during retrieval

   Part of the tag information extracted from the source file and saved in
the tagfile is the file's complete name, including drive and path.  The
various RETRO programs require this name in order to retrieve the file.

   However, in many programming environments, this name will not always be
valid because the file may eventually be stored in a version-control library
or moved to a network file server.  In order for RETRO to locate such files,
it must perform a special operation.  Basically, this special operation is a
command that is assigned to an environment variable called RETROEXEC.  The
RETROEXEC operation is explained in detail in the discussion of the RETRO
programs later in this manual.

   RETRO will not perform its RETROEXEC retrieval operation unless it is
"told" to do so by PCTAGS.  Communication between PCTAGS and RETRO is
accomplished by PCTAGS embedding a special instruction among the tag
information written to the tagfile.  This instruction is then interpreted by
RETRO during the retrieval operation.

   The -E option instructs PCTAGS to include its special RETROEXEC
instruction to the tag information accumulated for the current source file.

   If the file PCTAGS is processing will be moved or its name changed
between the time PCTAGS scans it and RETRO retrieves it, the -E option must
be specified.  Failure to do so may prevent RETRO from finding the file.

   The exact operation RETRO performs when it receives this instruction is
documented later in this manual.


Storing Line Numbers in the Tagfile
-----------------------------------

   -L           -- Store a function definition's line number in the tagfile

   One piece of tag information normally extracted by PCTAGS is a copy of
the line containing the function definition.  This line is written to the
tagfile and later used by RETRO to position the cursor at the beginning of
the function.

   Alternatively, PCTAGS can be instructed to save the function definition's
line number to the tagfile by specifying the -L option on the command line.
The line number is saved instead of a copy of the line itself.  RETRO
recognizes and supports either piece of information in its retrieval
operation.

   Storing line numbers instead of line contents will make the resulting
tagfiles smaller and PCTAGS and RETRO will execute slightly faster.
However, you must relentlessly maintain the tagfiles so they never contain
obsolete information.  Adding or deleting a single line of a source file can
make the tag information for that file obsolete.

   Proper maintenance of tagfiles is important regardless of whether you
store line numbers or lines themselves in the tagfile.  However, its
importance is increased when using line numbers.

   In order to use line number information with the resident version of
RETRO (explained later), your editor must provide a "goto-line"-type
operation.  If your editor does not support a "goto-line" command, you
should never run PCTAGS with the -L option.  For example, the Turbo
environments do not supply such an operation, thus, they are not able to use
the line-number information which would be stored by the -L option.


Recognizing Nested Comments in C Source Files
---------------------------------------------

   -N           -- Source code contains nested comments (C source only)

   The standard definition of the C programming language does not allow
nested comments.  However, some vendors of C compilers have extended the
language definition to support the nesting of comments, as shown in this
example:

                /* Comment  /* nested comment */  Comment */

   By default, PCTAGS does not support nested comments in C source code.
However, it will recognize nested comments if the -N option is specified on
the command line.  If the processed source code contains nested comments
like those depicted above, the -N option is required in order for PCTAGS to
scan the file correctly.

   This option is only relevant when processing C source files.  The
definitions for some of the other supported languages already support nested
comments, for example, Modula-2 and Pascal.  The -N option is therefore
unnecessary and ignored when processing any source language other than C.


Removing Tag Information from Tagfiles
--------------------------------------

   -R           -- Remove from tagfile all function tags for specified files

   Occasionally during the course of software development, source files are
moved, merged or eliminated altogether.  When this occurs, it is necessary
to update the tagfile by removing the tag information related to the
obsolete source file.  This is easily done by running PCTAGS with the -R
command-line option.  Include the names of the source files whose tag
information should be removed from the tagfile.  Wildcard file
specifications are not supported when using the -R option.

   As an example, the following line will remove from the PCTAGS.TAG tagfile
all tags associated with the file SOURCE.PAS:

                        >PCTAGS -r source.pas

   The specified source files do not need to exist when removing tag
references.

   Remember that the complete file name, including its drive and path, is
stored in the tagfile.  If a complete name is not specified on the PCTAGS
command line, one will be constructed using the current drive and path.
This constructed file name is then used when searching the tagfile for
function tags to remove.  If the original source file was processed in a
location other than the current drive and directory, no function tags will
be found for the file.  To prevent this from occurring, specify a complete
file name with drive and path on the PCTAGS command line.


Explicitly Specifying the Source Language
-----------------------------------------

   -Sx          -- Source language

   For PCTAGS to accurately recognize function definitions, it must be aware
of the file's source language.  It can often determine this on its own by
examining the file name's extension.  PCTAGS recognizes the following
extensions:

                        .C   -- C source file
                        .H   -- C source file
                        .PAS -- Pascal source file
                        .BAS -- BASIC source file
                        .PRG -- dBASE source file
                        .MOD -- Modula-2 source file
                        .DEF -- Modula-2 source file
                        .ASM -- Assembly source file

   If one of these extensions is part of the scanned file's name, PCTAGS
will assume the file is written in the associated source language and
interpret its contents accordingly.

   If an unrecognized extension is used, PCTAGS must be told the source
language explicitly via the -S option.

   The -S option is also needed when a recognized extension is used on a
file containing source code written in a language other than what PCTAGS
would expect.  Such a situation would occur if the file PROG.BAS contained
assembly code.

   The -S option takes a required single-character modifier to identify the
source language.  The modifier must be immediately after the -S option; no
spaces may separate the option from the modifier.

   The supported modifiers are:

                        A -- Assembly language
                        B -- BASIC language
                        C -- C language
                        D -- dBASE/Clipper/FoxBASE+ language
                        E -- Explicitly-tagged file
                        M -- Modula-2 language
                        P -- Pascal language

   As an example, to inform PCTAGS that the file SOURCE.PSC contains Pascal
source code, enter the following line:

                        >PCTAGS source.psc -sp

   Often when processing an explicitly-tagged file (-SE option), it will be
the file's second time through PCTAGS.  For example, a source file may
contain both function definitions and explicitly-tagged lines.  When
processing a file for the second time, be sure to include the -A option so
the function tags from the first run will be preserved.

   This is depicted in the following two commands.  The first command
extracts the C function definitons and the second saves the explicitly-
tagged lines.  The resulting tagfile will contain the information extracted
from both runs.

                        >PCTAGS file.c
                        >PCTAGS -se -a file.c


Specifying a Tagfile Name
-------------------------

   -Tfilename   -- Write tag information to "filename"

   PCTAGS usually writes the tag information it accumulates to a disk file
called PCTAGS.TAG located in the current directory of the current drive.
The tag information will be saved to a different file if the -T option is
specified on the command line.

   Immediately after the -T option, include the name of the desired tagfile.
No spaces should separate the -T from the tagfile name.  The tagfile name
may contain a drive and path specification; it may not contain DOS wildcard
characters.

   For example, to save the tag information in a file called PROG.TAG in the
TAGFILES directory, enter:

                >PCTAGS -t\tagfiles\prog.tag file.bas


Display Verbose Output
----------------------

   -V           -- Display verbose output while scanning source files

   Normally, PCTAGS displays only the name of the source file it is
processing.  If the -V option is specified, it will also display the name of
each function definition and explicit tag it encounters.



PCTAGS and Source Code Considerations
-------------------------------------
   Great efforts have been made so that PCTAGS will recognize all valid
function definitions in the supported languages.  If you ever discover a
source file that PCTAGS cannot properly process, we want to know about it.
Please send the offending source file or a sample file that exhibits the
problem to us at Moderne Software.  We will do what we can to rectify the
matter.

   There are some special considerations to be aware of in the way in which
PCTAGS scans some of the supported source languages.

C Source Code
-------------
   PCTAGS will interpret C source code that is compatible with the ANSI and
K&R standards.  This includes almost all of the C compilers available for
the DOS and OS/2 operating systems.  PCTAGS will also recognize the language
extensions added by some compiler venders, for example, Microsoft C and
Turbo C, among others.

   In addition to recognizing and tagging all function definitions, PCTAGS
will tag all non-local "typedef," "struct," "union" and "enum" definitions.
Each of these data types is considered to be non-local if it is defined
outside of a function.

   PCTAGS will not produce tags for items defined by in-line assembly code.
If you wish such items tagged, it is best to do so with explicit tags.

   PCTAGS does not perform a preprocessing stage during its scanning
operation.  Most preprocessor directives, like #include and #define, are
completely ignored.  However, PCTAGS does recognize #if, #ifdef and #ifndef
directives in a limited fashion.

   When a #if, #ifdef or #ifndef directive is encountered, PCTAGS scans and
processes the code after it, extracting any function definitions or explicit
tags, until either a #else or #elif is found.  All code between the #else or
#elif up until the ending #endif is ignored.  If the #if(ndef) block does
not contain a #else or #elif, the entire block is processed.  Nested
#if(ndef) directives are recognized and processed accordingly.

   The following code segment will help to illustrate this situation.

                           #if 0
                                function_one(){}
                           #else
                                function_two(){}
                           #endif

   During processing, PCTAGS will scan the function_one declaration and save
its related tag information.  The block of code after the #else directive
will be ignored until the #endif is encountered.  Thus the function_two tag
information will not be saved.

   Notice that all this occurs even though the #if directive evaluates to
"false" (0).  PCTAGS does not evaluate the #if expression; it assumes that
#if, #ifdef and #ifndef directives always evaluate to "true" and scans the
blocks of code following them accordingly.

   Be aware that when C source code is scanned as an explicitly-tagged file
(-SE option), the concept of preprocessor directives does not even exist.
Thus, all of the following lines would get properly scanned and entered in
the tagfile:

               #define inc(x)  ++x;       /* PCTAGS inc */

               #if
                   ...code...             /* PCTAGS stage1 */
               #else
                   ...code...             /* PCTAGS stage2 */
               #endif

   Massive efforts have been expended so that PCTAGS will recognize all
valid function definitions.  However, the fact that PCTAGS does not
interpret preprocessor directives means that some coding practices cannot be
supported.  For example, the following constant definitions will hopelessly
confuse PCTAGS:

               #define BEGIN {
               #define END   }

   PCTAGS cannot handle this because curly braces are an integral part
of a C function definition.  Since the preprocessor directives redefining
the braces are ignored, PCTAGS has no idea that "BEGIN" and "END" refer to
them.  Consequently, PCTAGS will not correctly identify the related function
definitions.  If definitions of this type are used in your source code, they
will have to be removed before PCTAGS will successfully scan them.


Pascal Source Code
------------------
   PCTAGS will process Pascal source code for any DOS and OS/2 Pascal
compiler currently available.

   This includes Turbo Pascal 5.5 and Microsoft QuickPascal 1.0 with their
object-oriented extensions.  When scanning Turbo Pascal 5.5 source code,
"method," "constructor" and "destructor" definitions are extracted in
addition to function and procedure definitions.

   PCTAGS will also tag all global RECORDs it encounters in the TYPE section
of the source code.  RECORDs defined in the VAR section will not be
recognized.  To be defined "globally," the RECORD must be defined in either
the INTERFACE, UNIT or PROGRAM section of a source file.  RECORDs defined
locally within a function or procedure are not tagged.

   In Turbo Pascal 5.5 and QuickPascal, all global OBJECTs are also tagged.


BASIC Source Code
-----------------
   PCTAGS recognizes subroutine definitions which use any of the following
forms of syntax:

                              FUNCTION name
                              SUB name
                              DEF FNname

   Most versions of BASIC will also allow a subroutine to be defined using
an explicit line number.  PCTAGS will not recognize such subroutines.
However, line-number subroutines can be entered into the tagfile by
explicitly tagging them with the "PCTAGS" keyword.

   PCTAGS does not include the variable-type characters $, %, &, ! or #, as
part of the function name.  If your source code contains function names that
differ only by the variable-type character, the tagfile will contain a
"double-entry" of seemingly-identical function names.  During the retrieval
operation, RETRO will retrieve the first occurence of the identical function
names.  Because of this anomaly, it is strongly recommended that function
names be differentiated by something other than the type character.


dBASE Source Code
-----------------
   PCTAGS recognizes functions, procedures and UDF's contained in source
code written for any version of dBASE, Clipper and FoxBASE+ running under
the DOS and OS/2 operating systems.  There are no idiosyncrasies to be aware
of.


Modula-2 Source Code
--------------------
   All known Modula-2 implementations for the DOS and OS/2 environments are
supported by PCTAGS.

   In addition to recognizing all procedures, PCTAGS will tag any global
RECORD definitions it encounters.  A RECORD is considered to be "global" if
it is defined outside of any procedure.


Assembly Source Code
--------------------
   PCTAGS recognizes the standard MASM syntax and the Turbo Assembler IDEAL
syntax of function definitions as shown below:

                               name PROC
                               PROC name

   DOS and OS/2 assemblers also support labels as valid places to which to
call, however, PCTAGS does not accumulate tag information for such labels.
Labels may be tagged by placing an explicit tag on the label's line.

                  label1:                 ; PCTAGS label1

   In addition to functions, PCTAGS recognizes and tags STRUC, RECORD,
UNION, LABEL and MACRO definitions.  (Notice that the LABEL assembler
directive is tagged, but labels such as those shown above are not.)

   PCTAGS fully recognizes the syntax of both the MASM and IDEAL modes
supported by the Turbo Assembler for the above-mentioned tag items.

   In order to support the creation of Turbo Pascal object-oriented method
implementations, Turbo Assembler v1.01 added a new syntax to method
definitions.  In Turbo Pascal, method syntax uses a period(.) to write
qualified identifiers.  In Turbo Assembler, an at-sign(@) is used instead of
the period.  The two examples below show equivalent method definitions for
Turbo Pascal and the Turbo Assembler:

                PROCEDURE Thing.Init;       <--- Turbo Pascal Method

                Thing@Init PROC FAR         <--- Turbo Assembler Method

   To maintain consistency among method definitions, PCTAGS changes the '@'
character in an assembly method to a '.' before writing the tag information
to the tagfile.  This will allow you to retrieve a method definition by
always using a period and you will not have to be aware of the method's
source language.  (Note: PCTAGS changes only the tagname stored in the
tagfile; it does not alter the source file in any way.)



                Retrieving Function Definitions with RETRO
                ------------------------------------------

   RETRO is a method used to retrieve functions and explicitly-tagged lines
during an editing session.  Executing RETRO from within most editors will
cause it to load the file which contains the desired item and position the
cursor at its beginning.

   RETRO provides several methods of retrieval: macro, resident (TSR) and
command-line.  Each of these methods shares much of the same functionality.
Often one method will serve your needs a majority of the time.  The
appropriate method to use will depend upon your editor and situation.

   Each of the three RETRO methods (macro, resident and command-line) are
discussed in detail in this chapter following a brief introduction.

   The macro retrieval method can be implemented on text editors that
support a macro extension language.  The macro method is the most desirable
approach because it provides the most powerful and seamless functionality.
The macro method fully supports the extraction of source files from version-
control libraries.

   Pre-written RETRO macros are provided as part of the PC-TAGS package for
the following editors:

                -- BRIEF
                -- Epsilon
                -- KEDIT
                -- ME (from Magma Software Systems, not Microsoft)
                -- Multi-Edit

   If you use one of the above editors, it is recommended that you use the
supplied macro.  Instructions on how to compile and incorporate the macros
into their respective editors are described later in this section.

   If your editor contains a macro language, but a pre-written RETRO macro
is not included with PC-TAGS, you may either write your own RETRO macro or
you may use one of the other RETRO methods explained below.  If you decide
to write your own macro, the information contained in the section "Tagfile
Format" contains important information necessary for such a task.  The macro
source code for the supported editors should also prove useful.

   The resident method is supported by a TSR (Terminate-and-Stay-Resident)
version of RETRO (RETRO.COM).  The TSR RETRO can be popped-up at any time
from within a text editor.  It is capable of loading a source file into the
editor and positioning the cursor on a tagged line, automatically.
Alternatively, it can simply display information about a function, such as
its source file and the line number on which it's defined.

   The TSR RETRO provides much of the same functionality as the macro method
except it cannot extract source files from a version-control library.

   The command-line method is executed from the DOS command prompt.  This
differs from the macro and resident methods which are used from within an
editing session.  The command-line method is useful when using editors that
do not support the loading of multiple files.  Also, since the command-line
method is able to extract source files from version-control libraries, it
can be used in combination with the TSR RETRO to provide capabilities
similar to the macro method.

   As mentioned, there is much overlapping functionality between the three
retrieval methods.  This is required because one retrieval method will not
work with every editor in every situation.  The supplied RETRO methods
provide comprehensive retrieval capabilities.  By using one or a combination
of the three supported methods, RETRO can be used with any text editor
running under the DOS or OS/2 operating systems.

   Use of one retrieval method does not exclude the use of another.  In
fact, it is possible to use all three methods together.  Depending upon the
editor and the particular situation, one method may prove superior to the
others.  Making the appropriate choice of retrieval methods exhibits the
craftsmanship of the user.

   Because of the several retrieval methods and their overlapping
functionality, it may be confusing at first to remember the operations
supported by each method.  To reduce this confusion, the end of this
section contains a table which summarily depicts the functionality of each
retrieval method.


Common RETRO Operations
-----------------------
   Many of RETRO's features are available in all three retrieval methods:
macro, resident and command-line.  Most of these shared abilities are
discussed in this section.

   Although the command-line retrieval method shares many of the macro and
resident operations, its concept and method of usage differs dramatically.
These differences are substantial enough that combining the discussion of
the command-line method with the other retrieval methods would be
inappropriate.

   For this reason, the operations discussed in this section will
concentrate exclusively on the macro and resident methods, even though the
command-line method supports many of the same capabilities.  A section
dedicated to the command-line method will be included later in this manual.

   Unless specified otherwise, references to "RETRO" in this section refer
to the macro and resident versions.

   Once RETRO is installed, two new commands are available for execution:
"pctags_auto" and "pctags_prompt."  These commands will usually be assigned
to specific keys so that they may be invoked with a single key-press.  The
key assignments are user-configurable so you can assign the two new commands
to any keys that are most convenient for you.

   The "pctags_prompt" command will ask for the name of the function (or
explicit tag) you wish to retrieve.  Simply enter the desired name followed
by the <Enter> key and RETRO will begin its retrieval operation.  Tagnames
may contain any alphabetic(A-Z, a-z), numeric(0-9), underscore(_) or
period(.) characters.

   The "pctags_auto" command does not prompt for the tagname.  Instead, it
uses the word above the cursor as the tagname to use in its retrieval
operation.  This is obviously very convenient; pressing a single key will
pop the respective function definition onscreen instantly.

   Except for the method used to get the tagname, pctags_auto and
pctags_prompt are identical; they both use the exact same retrieval
procedure.  For the rest of this section, references to RETRO will refer to
both commands.

   Extensive knowledge of the internal workings of the retrieval operation
is not necessary.  However, certain aspects of the retrieval procedure are
configurable and may affect the outcome of the operation.  These aspects
will be discussed in detail here.  Curious users interested in the finer
details of RETRO can examine the source code for the RETRO macros.

   After getting the tagname it is to retrieve, one of the first things
RETRO does is search through the tagfile(s) created by PCTAGS.  It scans the
tagfiles attempting to locate additional tag information associated with the
specified tagname.

   By default, RETRO searches through all the files with a ".TAG" extension
in the current directory of the current drive.

   RETRO can be directed to search other tagfiles by defining an environment
variable called "RETRO."  The RETRO environment variable should be assigned
the complete file specifications of the tagfiles you wish the RETRO program
to search.  The file specifications may contain DOS wildcard characters.
Multiple file specifications can be included by separating each spec with a
semicolon(;) character.

   As a simple example, defining the following environment variable will
instruct RETRO to search the single tagfile C:\PCTAGS\TAGFILES\PROG1.TAG:

                SET RETRO=c:\pctags\tagfiles\prog1.tag

   This next example demonstrates how to inform RETRO to search all the
files having a .TAG extension in the C:\TAGS and D:\MORETAGS directories:

                SET RETRO=c:\tags\*.tag;d:\moretags\*.tag

   If you want RETRO to search all the files in the current directory with a
TAG extension and all the files in the \PCTAGS\TAGFILES directory:

                SET RETRO=*.tag;\pctags\tagfiles\*.*

   Notice that specifying the drive and path are optional, but the filename
is required at all times.  The following RETRO definition is not valid
because it does not include a file specification:

                SET RETRO=c:\tagfiles      <---- Invalid setting

   When RETRO searches through a tagfile for a matching tagname, the search
performed is case-sensitive by default.  However, this can be modified so
RETRO will ignore case.  Changing the case sensitivity of the tagname search
is different for each of the RETRO retrieval methods.  Therefore,
instructions on doing so are described later in sections dedicated to each
RETRO method.

   As mentioned, RETRO will search all default or specified tagfiles until
it locates the tag information pertaining to the searched-for tagname.  If
all the tagfiles are searched and the tag information is not found, RETRO
cannot continue its operation.  It will display a message stating that the
tagname was not found and then terminate.

   If the correct tag information is found, RETRO uses it to locate the
tagname's source file.

   Recall from the discussion on PCTAGS that one piece of the extracted tag
information is the file's name.  RETRO retrieves that file name and then
attempts to load the file into the editor.  If the file exists, it will be
successfully loaded and RETRO will continue its operation.  (The TSR RETRO
has the option of only displaying the retrieved tag information onscreen and
not loading the file.)

   However, if the source file has been moved, renamed, stored in a version-
control library or its name and/or location otherwise been altered since it
was processed by PCTAGS, RETRO will not be able to find it.  At this point,
the TSR and macro versions of RETRO diverge along different paths.

   If the desired source file cannot be found in its original, PCTAGS-saved
location, the TSR RETRO will simply display a message stating that the file
could not be found and then terminate.

   The macro RETROs will do the same thing, unless the -E option was
specified on the PCTAGS command line when the source file was originally
processed.  Remember that the PCTAGS -E option embeds in the tagfile an
"instruction" to RETRO.  When RETRO cannot locate a source file, it looks to
see if that instruction is among the retrieved tag information.  If it is
not, RETRO will display the message saying it could not find the file and
then terminate.  If the instruction is present, RETRO will execute a
"special command" whose purpose is to make the source file available.

   This "special command" is multi-faceted and, since it is supported only
in the macro versions of RETRO (and in the command-line version), it is not
appropriate to discuss in detail here.  Suffice to say that the special
command's sole purpose is to do whatever is necessary to make available the
desired source file.  This could entail extracting the file from a version-
control library.  It is this special command that allows the PCTAGS system
to work in harmony with development systems which incorporate networks and
version-control libraries.  Details of the special command are explained in
the section "Macro-Specific RETRO Operations."

   Let's return to the common RETRO operations.

   If the file is successfully loaded into the editor, RETRO will use
additional information retrieved from the tagfile to locate the line in the
file where the tagname exists.  RETRO will place the cursor upon the tagged
line containing the desired function definition or explicit tag.  Its job
done, RETRO will then terminate.


Macro-Specific RETRO Operations
-------------------------------
   This section continues the discussion of the RETRO operation.  It
explains the operations that are available only in the macro versions of
RETRO.  The TSR RETRO is not capable of performing the tasks detailed in
this section.  However, the command-line method does support many of the
operations explained here.  More details about the TSR and command-line
RETROs are explained in subsequent sections.

   RETRO macros in source code form for the BRIEF, Epsilon, KEDIT, ME and
Multi-Edit editors are distributed as part of the PC-TAGS software package.
The source code for the RETRO macros is organized in the following files:

                   RETRO.M   -- BRIEF macro source
                   RETRO.E   -- Epsilon macro source
                   RETRO.KML -- KEDIT macro source
                   RETRO.    -- ME macro source
                   RETRO.SRC -- Multi-Edit macro source

   The source code for all RETRO macros is copyrighted material.  The
copyright owner, Moderne Software, gives limited permission to registered
PC-TAGS users to modify the source files for their own personal use only.
The RETRO macros may not be used, modified or distributed for any purpose
other than in conjunction with the PC-TAGS software package.

   Each RETRO macro provides identical functionality, thus they will be
explained together.  Any idiosyncrasies characteristic of only one of the
macros will be pointed out.

   Although functionally identical, the installation procedure necessary to
integrate a macro into its respective editor is different for each editor.
Special sections dedicated to a particular editor are contained later in
this manual to explain each editor's recommended RETRO installation
procedure.

   For the remainder of this section, references to "RETRO" will apply to
all macro versions of RETRO.  This section will also assume that RETRO has
already been installed into your editor and is available by pressing a
single keystroke.

   One of the main tasks RETRO performs is search through tagfiles for a
matching tagname.  By default, this search is case-sensitive.  However,
RETRO can be altered so that the search ignores a character's case.
Modifying the search operation is done by changing the initial value of one
of RETRO's variables.

   In the beginning of each macro (within the first 100 lines) are global
variable definitions.  The "pctags_tagname_case" variable determines the
case sensitivity of the tagname search.  As distributed by Moderne Software,
pctags_tagname_case is initialized to a value of "CASE_SENSITIVE."  Simply
change the initialization value to "CASE_INSENSITIVE."  If necessary, be
sure to compile the macro afterward so that the change can take effect.

   Another important operation RETRO performs is the retrieval of tag
information compiled by the PCTAGS program.  One piece of information is the
source file's name.  RETRO will attempt to load this source file into the
editor.  However, if the file has been moved, renamed or stored in a
version-control library since it was processed by PCTAGS, RETRO will not be
able to find the file.  The action RETRO performs at this point depends on
whether or not the -E option was specified on the PCTAGS command line when
the file was originally processed.

   Remember that the PCTAGS -E option embeds in the tagfile an "instruction"
to RETRO.  When RETRO cannot locate a source file, it looks to see if that
instruction is among the retrieved tag information.  If it is not (i.e. the
file was processed without the -E option), RETRO will display a message
stating that it could not find the file and then terminate.  If the
instruction is present (PCTAGS -E option specified), RETRO will execute a
"special command" whose purpose is to make the source file available.

   This "special command" is user-defined.  Making it user-defined allows
RETRO to support any kind of file organization and development system you
have set up, including version-control libraries.  The special command can
be any valid DOS command line, including execution of a batch file.

   The objective of the command (or batch file) is to perform whatever
actions are necessary to get the searched-for file into the directory where
RETRO expects to find it.  For example, if the file has been archived in a
version-control library, the command must extract the file.

   RETRO accesses the special command through an environment variable called
RETROEXEC.  You should define this variable and assign to it the command
line you wish executed.  As mentioned, the command can be any valid DOS
command line, complete with program arguments.

   Here is a simple example of a user-defined command which will execute a
batch file called GETFILE:

                          SET RETROEXEC=getfile

   When RETRO executes the RETROEXEC command, all the common DOS
characteristics are active.  In other words, RETRO will search for the
program in the current directory.  If the program is not found in the
current directory, the directories in the PATH environment variable are
searched.

   If the special command contains any of the DOS redirection characters
(e.g. '<' or '>'), the line must be bracketed with double quotation marks.
For example,

                       SET RETROEXEC="getfile >nul"

   The special program or batch file will most likely require information
about the file it is to retrieve, such as the file's name and location to
which it should be restored.  This information can be passed to the special
program in the form of command-line arguments.

   For example, a batch file could be created that extracts a file specified
on its command line from a version-control library.  Normal invocation of
the batch file from the DOS command prompt might look like this:

                           >getfile source.c

   The batch file GETFILE would access the SOURCE.C argument by using the
normal DOS batch-file arguments %1 through %9.

   This exact same command can be executed by RETRO by assigning the command
to the RETROEXEC environment variable.

                      SET RETROEXEC=getfile source.c

   The above RETROEXEC setting will work fine if RETRO will only be looking
for the file SOURCE.C all the time.  Realistically, the searched-for file
name will be different each time the special command is executed.  Such
variations require an interface that can support the processing of variable
data while the interface itself remains constant.

   RETRO provides several "string substitution markers" that can be used to
pass any required information from RETRO to the special program via its
command-line arguments.  Each marker consists of two characters, the first
of which is always a percent sign(%).  The second character identifies the
string that will be substituted for the marker.

   For example, the substitution string "%f" represents the searched-for
file name.  If "%f" is included in the RETROEXEC special command line, RETRO
will replace the marker with the name of the file for which it is currently
searching.  Any substitution is performed before the special command is
actually executed.  Thus, the following special command could be defined:

                        SET RETROEXEC=getfile %f

   Now when RETRO cannot find the SOURCE.C file, it goes to execute the
RETROEXEC command, but replaces the substitution marker so that the actual
command executed is:

                            getfile source.c

   Later, during a subsequent run of RETRO, if it cannot find the DATA.C
file, the executed command will be:

                             getfile data.c

   As can be seen, this method of passing information from RETRO to the
special command is flexible enough to handle any foreseeable situation.

   The supported substitution markers are described in the following list.

        %s      - The entire file specification of the searched-for file.
                  Includes "drive:\path\name"

        %d      - Drive of searched-for file.  No path or name.

        %p      - Path of searched-for file.  No drive or name.  When
                  combined with the %d marker, the resulting string is
                  suitable as an argument for the CD command within a batch
                  file.

        %f      - Name of searched-for file.  No drive or path.

        %c      - Current directory within the editor, including drive and
                  path.  The format is suitable as an argument for the CD
                  command within a batch file.

        %u      - User-defined substitution string.  RETRO will prompt for
                  the value of this marker each time the RETROEXEC special
                  command is executed.

        %%      - Single '%' character.

   All of these substitution markers are case-sensitive.  In other words, %D
is not the same as %d.

   Several RETROEXEC examples using the substitution markers are diagrammed
below.  They all assume that RETRO is searching for a file called
C:\SRC\INPUT.C and the current directory is D:\WORK.

              RETROEXEC value         Expanded command line
              ---------------         ---------------------
              get %s                  get c:\src\input.c
              get %f                  get input.c
              get %d %p %f            get c: \src input.c
              get %f %d%p             get input.c c:\src
              get %f %d%p %c          get input.c c:\src d:\work
              get %%                  get %

   The %u substitution marker is set by the user each time the RETROEXEC
command line is executed.   RETRO will prompt for its value during the
substitution operation.  You may enter any string, including an empty string
or strings containing other substitution markers.  If multiple %u's are in
the command line, RETRO will prompt for each one separately.

   The %u substitution marker is meant for the few situations where the
other markers do not provide sufficient information for the special command
or batch file to carry out its required task.  In most situations, %u should
not be necessary.

   As previously mentioned, RETRO is not concerned about what actions need
to be performed by the special command.  Its only concern is that at the
command's conclusion the searched-for file exists in the expected location
under the expected name.  (Remember, the expected location and name are the
values that were current when PCTAGS processed the file.)

   While the RETROEXEC special command is running, it may produce output
which will be displayed onscreen.  In many cases, this output will
temporarily overwrite the displayed file's text, however, the output will
NOT be entered into the file and will not corrupt the file's contents in any
way.  RETRO will always restore the original screen's contents before
terminating.

   After the special command completes its execution, RETRO checks one more
time to see if it can locate the desired file.  If it finds the file, RETRO
will load it into the editor and continue its operation.  If the file still
cannot be found, RETRO will display a descriptive message stating that fact.
Since there is nothing else it can do at that point, RETRO will terminate.

   If the tagfiles have been allowed to become obsolete so that their tag
information does not accurately represent the conditions within the source
files, RETRO may not be able to locate the correct tagline in the loaded
file.  If this occurs, RETRO will display a message suggesting that the
tagfile be updated.  If the retrieved source file was read into the editor
from the disk, RETRO will clean up after itself by removing the file from
the editor's memory.  If the retrieved file existed in the editor's memory
before RETRO began execution, it will be left in memory.  In either case,
RETRO will then terminate.

   The RETROEXEC capability is the main advantage the macro RETROs have over
the TSR version.  In addition, since the macros are more closely tied to the
editor, they are aware of any errors that could occur during the retrieval
operation and can recover gracefully.


Installing RETRO in BRIEF
-------------------------
   RETRO source code for the BRIEF editor is contained in the file RETRO.M.
The RETRO.M module is copyrighted material and may not be modified, used or
distributed except in conjunction with the PC-TAGS software package.
Registered PC-TAGS users are given permission to modify the RETRO source
code, however, any changes made by an individual cannot be supported by
Moderne Software.

   BRIEF supports several methods to incorporate macros into the editor.
The method described here is the recommended method.  Depending on your
preferences and computer environment, any of the other installation methods
may be chosen instead.  Refer to the BRIEF manuals for instructions on using
the other installation methods.

   The first step to installing RETRO is to compile the RETRO.M source code
with the BRIEF macro compiler, CM.EXE.  Assuming the compiler is available
in the current directory or in a directory along the PATH variable, the
correct command line is:

                               CM RETRO.M

   Compiling the source file will create a file called RETRO.CM.  This file
should be stored in a directory with other compiled macros or in a directory
specified in the BPATH environment variable.

   The next step is to inform BRIEF of the new commands available in the
RETRO.CM macro and assign the commands to keystrokes.  The recommended
method is to modify the "initials" macro file.  The initials file is
created by the BRIEF SETUP program when you install BRIEF.  During
installation, SETUP asks for your initials and uses them to create a macro
source file containing individualized configuration data.  For example, if
your name is Joe Collins, the name of your initials file would be JC.M.  The
initials file is the recommended location to add the RETRO installation data
because it will not get overwritten when you upgrade to new versions of
BRIEF.

   Load the initials file into your editor and locate the "initials macro."
The initials macro will be designated as such by comments in the file; the
macro will have the same name as your initials.  For example, Joe Collins
will have a macro called "macro JC."

   When you find the initials macro, add the lines specified below so that
the macro looks similar to this:

;** Initials macro.
;** Use this macro for additional customization.
(macro JC
    (
        ;** Put your changes here.
        .
        .
        .

        ; ************  ADD THESE LINES FOR RETRO INSTALLATION  ************
        ; PC-TAGS(tm) RETRO installation
        (autoload "retro" "pctags_auto" "pctags_prompt")
        (assign_to_key "<Ctrl-a>" "pctags_auto")
        (assign_to_key "<Ctrl-s>" "pctags_prompt")

        .
        .
        .
    )
)

   The "autoload" command will inform BRIEF of the RETRO macro file and the
two new commands in it.  You should add this line to your initials macro
exactly as it is shown above.  The first time either of the new commands is
invoked, BRIEF will load the RETRO.CM file and execute the command.  Be sure
the RETRO.CM file is in a directory specified in the BPATH environment
variable or BRIEF will not be able to find it.

   The two "assign_to_key" commands assign the RETRO macros to keys so that
they may be easily executed.  The example shows pctags_auto being assigned
to the <Ctrl-A> key and pctags_prompt assigned to <Ctrl-S>.  These can
easily be configured to whichever keys you prefer.  Refer to the BRIEF
manuals for further details on key assignments.

   After the necessary lines have been added to the initials macro, save the
initials file.  The initials file must now be compiled by the macro
compiler.  The appropriate command line is:

                              CM initials.M

   As an example, Joe Collins would execute "CM JC.M."

   To guarantee that the initials file will be read by BRIEF, be sure the
BFLAGS environment variable includes a "-m" option.  If it does not, you can
add it or you can specify it as an argument on the BRIEF command line.
Refer to the BRIEF manuals for further information on the -m option.

   Also, to make sure there will be enough memory to execute the RETROEXEC
special command, the -M option should be included in the BFLAGS environment
variable or on the BRIEF command line.  The -M option instructs BRIEF to
swap itself to either expanded memory or disk when a program is executed
from within the editor.  This will provide additional memory in which the
RETROEXEC command can run.  Check the BRIEF manuals for more information on
the -M option.  (Notice that -m and -M are two different options.)

   If everything has been setup correctly, the new RETRO commands will be
available at the touch of a single key the next time you run BRIEF.


Installing RETRO in Epsilon
---------------------------
   RETRO source code for the Epsilon editor is contained in the file
RETRO.E.  The RETRO.E module is copyrighted material and may not be
modified, used or distributed except in conjunction with the PC-TAGS
software package.  Registered PC-TAGS users are given permission to modify
the RETRO source code, however, any changes made by an individual cannot be
supported by Moderne Software.

   There is more than one way to incorporate macros into the Epsilon editor.
The method described here is the recommended manner.  Depending on your
personal preferences and computer environment, any of the other installation
methods may be chosen as an alternative.  Refer to the Epsilon manuals for
instructions on using other installation methods.

   The first step in installing RETRO is to compile the RETRO.E source code
with the Epsilon EEL compiler, EEL.EXE.  There were some changes made to the
EEL macro language between Epsilon versions 3.2 and 4.0.  Some of these
changes effect the RETRO macro source.

   By default, RETRO.E will compile and run with Epsilon v4.0 only.  It can
easily be made to work with v3.2 by redefining the constants "V40x" and
"V32x" in the RETRO.E source file.  As shipped from Moderne Software, these
two constants are defined as:

#define V40x                    TRUE    /* Versions 4.00 and above */
#define V32x                    FALSE   /* Versions 3.20-3.23      */

   To use RETRO.E with Epsilon v3.2, simply switch the values of the
constants so they are defined as:

#define V40x                    FALSE   /* Versions 4.00 and above */
#define V32x                    TRUE    /* Versions 3.20-3.23      */

   If you make this change to RETRO.E, it must be done before compiling the
file.

   To successfully compile, RETRO.E requires the files EEL.H and LOWLEVEL.H
to be in the current directory.  These two files are distributed as part of
the Epsilon editor.

   The appropriate EEL command line to compile RETRO.E is:

                             EEL -s RETRO.E

   Compiling the source file will create a file called RETRO.B.  The -s
option will prevent debug information from being stored in the compiled file
and, therefore, make it smaller in size and faster in execution.

   The next step is to incorporate the RETRO.B file into the standard
Epsilon configuration.  Begin an editing session by executing Epsilon.
Execute the Epsilon "load-bytes" command which has a default key assignment
of <F3>.  When prompted for the name of the bytes file, enter "RETRO."  You
will have to include a drive and path specification if the RETRO.B file is
not in the current directory.

   After the RETRO file has been loaded, the "pctags_auto" and
"pctags_prompt" commands will be available for execution.  Epsilon changes
any underscore characters in a command to dashes, so the new commands will
actually be "pctags-auto" and "pctags-prompt."

   It will be easier to invoke the new commands if they are assigned to
keystrokes.  This can be accomplished by executing the Epsilon "bind-to-key"
command assigned by default to the <F4> key (<F1> in version 3.2).  Execute
bind-to-key once for each new command.  Pctags-auto and pctags-prompt can be
assigned to any keystrokes you wish.

   The new commands and their key assignments can be saved so that they will
be available in subsequent editing sessions by executing the Epsilon
"write-state" command.  Write-state does not have a default key assignment.
It can be executed by invoking "named-command" which is assigned to <F2> or
<Alt-X>.  Named-command will ask for the name of the Epsilon command you
wish to execute.  Respond with "write-state."

   Write-state will, in turn, prompt for the name of the disk file in which
to write the current editor state.  It is recommended that you save the
state in a file called EPSILON.STA.  This state file should be written to the
same directory in which EPSILON.EXE is stored.  Upon startup, Epsilon looks
in its home directory for a file called EPSILON.STA and loads the file
automatically if it finds it.  Saving the RETRO macros and key assignments
in the EPSILON.STA file will make them instantly available in subsequent
editing sessions.


Installing RETRO in KEDIT
-------------------------
   RETRO source code for the KEDIT editor is contained in the file
RETRO.KML.  The RETRO.KML module is copyrighted material and may not be
modified, used or distributed except in conjunction with the PC-TAGS
software package.  Registered PC-TAGS users are given permission to modify
the RETRO source code, however, any changes made by an individual cannot be
supported by Moderne Software.

   There is more than one way to incorporate macros into the KEDIT editor.
The method described here is the recommended manner.  Depending on your
personal preferences and computer environment, any of the other installation
methods may be chosen as an alternative.  Refer to the KEDIT manuals for
instructions on using other installation methods.

   The RETRO.KML file is designed to run as a KEDIT "in-memory" macro.  Each
RETRO command, pctags_auto and pctags_prompt, is invoked by pressing the key
assigned to it.  By default, pctags_auto is assigned to <Alt-T> and
pctags_prompt can be executed by pressing <Alt-P>.

   The <Alt-T> and <Alt-P> key assignments are built into the RETRO.KML
file.  If you have organized KEDIT so that it already uses these two
keystrokes or if you prefer to assign the RETRO commands to other keys, you
may do so by modifying the RETRO.KML source file.

   To change the default RETRO key assignments, locate the definition line
of the pctags_auto or pctags_prompt macros.  Each is located near the
beginning of the RETRO.KML file (within the first 200 lines) and is clearly
marked by comments within the file.

   The pctags_auto key assignment is performed by the RETRO.KML line:

                                :alt-t

   The key assignment for pctags_prompt is:

                                :alt-p

   You may modify either of these lines to any valid KEDIT key assignment.
Refer to the KEDIT manuals for information on valid key strings.

   The RETRO.KML file should be stored in a directory with the other KEDIT
macro files you commonly use.

   KEDIT is informed of the new RETRO commands in RETRO.KML by adding one
line to your PROFILE.KEX file.  KEDIT reads PROFILE.KEX every time KEDIT is
executed.  PROFILE.KEX contains configuration information that KEDIT
interprets to customize its editing environment to your preferences.  If you
do not currently use a PROFILE.KEX file, you will have to create one to
install RETRO.  Further information about PROFILE.KEX can be found in the
KEDIT manuals.

   The line which must be added to PROFILE.KEX will inform KEDIT of the name
and location of the RETRO.KML macro file.  It will also tell KEDIT to load
the file so that the macros contained within it will be available for
execution.  These tasks are performed by the KEDIT DEFINE command.

   As an argument to the DEFINE command, you must specify the file name of
the RETRO.KML file.  The file name may or may not require a drive and path
specification.  If RETRO.KML is stored in a directory that KEDIT normally
looks for macros, for example, along your 'SET MACROPATH ...' or PATH
environment settings, a drive and path will not be necessary.  But even if
the drive and path are not required, including them will not hurt.  To be
safe, go ahead and specify RETRO.KML's drive and path.

   The following example line tells KEDIT to load the macro file RETRO.KML.
It assumes that RETRO.KML is stored in the C:\KEDIT\MACROS directory.

                    'define c:\kedit\macros\retro.kml'

   A DEFINE command line similar to that shown above must be added to your
PROFILE.KEX file.  On your system, the drive and directory location of the
RETRO.KML file may be different than that shown above.  If so, modify the
example line so that it correctly reflects RETRO.KML's location.

   The single quotes which surround the DEFINE command are required and must
be included when entering the line in PROFILE.KEX.

   After making this change to PROFILE.KEX, RETRO will be installed
automatically every time you run KEDIT.  To execute either of the RETRO
commands, simply press the keystrokes assigned to them.

   One characteristic of the KEDIT RETRO macros should be mentioned.  There
must be at least two available spaces in the open-file ring for the
retrieval operation to succeed.  Since KEDIT limits the number of open files
to 15 (20 in the OS/2 version), there can be no more than 13 open files (18
in OS/2) when the RETRO macros are invoked.  If there is not enough space in
the ring, RETRO will fail gracefully, restoring the original status and
displaying an appropriate message before terminating.


Installing RETRO in ME
----------------------
   RETRO source code for the ME editor from Magma Software Systems (not
Microsoft) is contained in the file RETRO (no extension).  The RETRO module
is copyrighted material and may not be modified, used or distributed except
in conjunction with the PC-TAGS software package.  Registered PC-TAGS users
are given permission to modify the RETRO source code, however, any changes
made by an individual cannot be supported by Moderne Software.

   There is more than one way to incorporate macros into the ME editor.  The
method described here is the recommended manner.  Depending on your personal
preferences and computer environment, any of the other installation methods
may be chosen as an alternative.  Refer to the ME manual for instructions on
using other installation methods.

   The RETRO macro supplied with PC-TAGS is designed to run with ME version
2.20 or later.  It will work with ME versions 2.00 and 2.10, however, these
versions will not support the "%c" (current directory) substitution argument
in the RETROEXEC command line.  All other operations are identical.  The
RETRO macro will not work with versions of ME prior to 2.00.

   If you are going to use the RETRO macro with a version of ME prior to
2.20, a small change must be made to the RETRO source file.  Within the
first 100 lines of the file, a constant called VER220_PLUS is defined to a
value of TRUE.  The source code line looks like this:

#define VER220_PLUS             TRUE

   Simply change the "TRUE" to "FALSE".  The resulting line should look like
this:

#define VER220_PLUS             FALSE

   There are a couple of other changes to the RETRO macro that you may wish
to make.

   In the init() function are the default key assignments for the two RETRO
commands.  Pctags_auto is assigned to the <Ctrl-A> key while <Ctrl-P> will
execute pctags_prompt.  If you want to reassign these commands to other
keys, you may change their assignments here.  The ME manual will explain how
to calculate the appropriate key values.

   Just before the RETRO macro terminates, it sets the operation of
subsequent regular-expression searches to be case-sensitive.  This may not
be what you want.  There is no method for a ME macro to determine the case
sensitivity upon its entry so it is not possible for it to reset the
original setting when finished.

   RETRO sets the case sensitivity by calling the ignore_case() function
near the end of the _pctags_main() function.  This is located near the very
end of the RETRO source file.  If you would prefer subsequent non-RETRO
searches to ignore case, change the argument to the ignore_case() function
from FALSE to TRUE.

   After you have made any changes, save the modified file.

   Before the ME editor can recognize and execute the RETRO commands, the
macro's source file must be compiled with the MACCOMP.EXE compiler which is
provided with the ME editor.  The correct command line to compile the RETRO
macro is:

                        >MACCOMP retro

   Compilation will create a new file called RETRO.EXM.  This file should be
placed in the same directory with any other compiled EXM files you use.
This directory should be specified in the ME environment variable.  For
example, if the executable ME program is stored in C:\ME and all your EXM
files are in C:\ME\MACROS, you should define the following environment
variable:

                        >SET ME=c:\me;c:\me\macros

   This will allow ME to locate the RETRO macro file when the editor is
powered-up.  Further details about the ME environment variable are described
in the ME manual.

   Finally, RETRO should be added to the list of macro files that ME
automatically loads upon startup.  These macros are specified in an
environment variable called MEMACROS.  The following environment variable
accomplishes this:

                        >SET MEMACROS=retro

   If you already have a MEMACROS variable, the RETRO macro can be added to
the existing list of preloaded macros by separating each macro with a
semicolon(;).  For example:

                        >SET MEMACROS=msccomp;retro

   After you have completed these steps, the two RETRO commands will be
available for use the next time you run ME.  They may be executed by simply
pressing the keys assigned to them.


Installing RETRO in Multi-Edit
------------------------------
   RETRO source code for the Multi-Edit editor is contained in the file
RETRO.SRC.  The RETRO.SRC module is copyrighted material and may not be
modified, used or distributed except in conjunction with the PC-TAGS
software package.  Registered PC-TAGS users are given permission to modify
the RETRO source code, however, any changes made by an individual cannot be
supported by Moderne Software.

   The first step to integrating RETRO into Multi-Edit is to compile the
RETRO.SRC file with the MEMAC macro compiler.  The command line to do this
is:

                             MEMAC RETRO.SRC

   Compiling the source file produces a file called RETRO.MAC.  This file
must be placed in the directory specified in the ME_PATH environment
variable.  The ME_PATH directory should contain all the other MAC files
necessary for Multi-Edit operation, such as MEUTIL1.MAC and MESYS.MAC.  If
you do not define a ME_PATH environment variable, simply place the RETRO.MAC
file in the directory containing all the other MAC files.

   Informing Multi-Edit of the RETRO macros and assigning keystrokes to them
is done through Multi-Edit's Install procedure.  The Install process is
activated from within Multi-Edit through its main menu.

   Invoke Multi-Edit.  If you wish you may load a text file, but it is not
necessary.  Pop up the main menu by pressing the <Esc> key.  Choose the
"Install" option by either pressing <I> or using the cursor keys to
highlight the option.

   The Install option pops up another menu titled "Installation and Setup."
To tell Multi-Edit of the RETRO macros, we must go through the "Key mapping"
option.  Activate the "Key mapping" procedure by pressing <K>.  This will
cause Multi-Edit to display all the macros it currently recognizes and the
keystrokes assigned to them.  To this list we will add the RETRO macros
"pctags_auto" and "pctags_prompt."

   Using the cursor keys, place the highlighted line onto the macro you wish
listed immediately before the RETRO macros.  When Multi-Edit is told of our
new macros, it will place them immediately after the highlighted line.  You
may place the RETRO macros anywhere you want in the entire listing, however,
the "Search and Replace" or "Misc. Operations" groups are probably the most
appropriate.

   After you have positioned the highlighted line, press the <Ins> or <1>
key to create a new macro definition.  Multi-Edit will prompt you for the
name of the macro.  Respond with the name "PCTAGS_AUTO" and hit <Enter>.  A
"Keystroke Assignment" menu with several fields will appear.  For each of
the fields, enter the following information:

   "Macro:" -- This will already be filled in for you with the "PCTAGS_AUTO"
               name you entered previously.  Simply hit <Enter> to advance
               to the next field.

   "Parameters:" -- Neither of the RETRO macros take parameters so this
                    field should be left empty.  Hit <Enter>.

   "Description:" -- This is a simple description of the macro being
                     defined.  It will be used when displaying the list of
                     recognized macros and their key assignments.  You may
                     place anything you wish in this field.  As a
                     suggestion, pctags_auto may be described as "Retrieve
                     cursor tagname" and pctags_prompt can be "Retrieve
                     input tagname."  When you are finished, press <Enter>.

   "Primary key:"
   "Secondary key:"  -- If you wish to execute the RETRO macros by pressing
                        a single key, you must tell Multi-Edit which key
                        will invoke the macro.  This is done through the
                        Primary and Secondary key fields.

                        Pressing <Enter> will pop up a "Keycode" menu.
                        Choose the "Define keycode" option by pressing <D>.
                        Multi-Edit will prompt you to press the keystroke
                        you wish assigned to the macro.  You may assign any
                        key to want to the RETRO macros, provided the key is
                        recognized by Multi-Edit.  Make sure the key you
                        press is not already assigned to another macro.

                        After pressing the key, Multi-Edit will display it
                        in the active, highlighted field (either Primary Key
                        or Secondary Key).

                        You may define only a primary key or both a primary
                        and secondary key.  When you are finished, use the
                        cursor keys to move to the next field.

   "Function key label:" -- Multi-Edit usually displays on the last line of
                            the screen abbreviations of the macros assigned
                            to the function keys.  If you have assigned the
                            RETRO macros to function keys, you may enter in
                            this field the string you wish displayed.  Enter
                            any string you wish.  As suggestions,
                            pctags_auto may be abbreviated as "PCTAGS" and
                            pctags_prompt as "TagAsk".  Press <Enter> when
                            you are finished.

   "Mode:" -- The Mode field specifies the editor context in which the key
              assignments will invoke the RETRO macros.  This field should
              be set to "EDIT."  Since EDIT mode is the default, you can use
              the cursor keys to advance to the next field.

   "Macro file:" -- For Multi-Edit to load the RETRO macro file, it must
                    know the file's name.  Type the name "RETRO" into this
                    field and press <Enter>.

   After each field has been entered, press the <Esc> key.  Multi-Edit will
insert your new macro definition into its list of recognized macros.

   Go through the definition process again for the pctags_prompt macro by
pressing the <Ins> key.

   Once both of the RETRO macros have been defined and assigned keystrokes,
press the <Esc> key until you return to the "Installation and Setup" menu.
Press <Esc> again to exit the menu.  Multi-Edit will prompt you, asking if
you wish to save your changes.  Respond by pressing the <S> key for the
"Save-settings-and-exit" option.

   Multi-Edit will generate and compile a new initialization macro which
includes the RETRO macros and your key assignments.  The only thing that can
go wrong at this point is that Multi-Edit will not be able to find the
RETRO.MAC file if you have not placed it in the ME_PATH directory.  If this
occurs, exit Multi-Edit, copy the RETRO.MAC file into the appropriate
location and go through the installation process again.

   After Multi-Edit has successfully compiled the new initialization macro,
the new RETRO commands will be available for your use.  They may be invoked
by either pressing the key you assigned to them or by executing them by name
through the main menu or Run-Macro command.


TSR-Specific RETRO Operations
-----------------------------
   The resident (TSR) version of RETRO is in the file RETRO.COM.  This
version can be used with any editor.

   If your editor supports the loading of multiple files, RETRO can
automatically load a source file and position the cursor at the beginning of
the specified function definition.  If your editor only allows one file to
be edited at a time, RETRO can tell you the name of the source file which
contains a desired function definition and you can re-execute your editor to
load the file yourself.

   The TSR RETRO is written entirely in assembly language so it requires a
minimal amount of memory and will execute at near-instantaneous speed.

   The TSR RETRO does not support the RETROEXEC special command described in
the "Macro-Specific RETRO Operations" section.  However, it does offer some
features that are not available in the macro RETROs.  These features will be
explained in this section.

   The TSR RETRO is installed by executing it from the DOS command prompt or
from within a batch file.  Various command-line options are supported to
configure the RETRO retrieval operation to your personal tastes.  RETRO can
also be uninstalled, or removed from memory, by specifying a particular
option.  All the supported options are detailed in the next section,
"RETRO.COM Installation Options."

   In the unregistered version of RETRO, a random eight-digit number will be
displayed when it is installed.  You must re-enter the displayed number in
order for RETRO to continue its installation procedure.  This user input is
not required in the registered versions of PC-TAGS.  Its purposes are to
remind you that you are running an unregistered evaluation version and to
act as an impetus to register.  You can receive a registered version by
sending your paid registration form contained in the file ORDERFRM to
Moderne Software.

   Once installed, RETRO is activated by pressing one of its "hotkeys."  By
default, RETRO assigns its two commands (pctags_auto and pctags_prompt) to
the following keys:

              <Alt-A>  -- pctags_auto    (gets tagname above cursor)
              <Alt-P>  -- pctags_prompt  (prompts for tagname)

   Pressing either of these keys will cause the associated command to
execute.  If your editor already has commands assigned to these keys, you
will have to change the default RETRO hotkeys.  The RETRO hotkeys can be
reassigned via the -H installation option which will be explained later.

   Invoking the pctags_auto command (<Alt-A>) will execute the retrieval
operation as it is described in the "Common RETRO Operations" section.  The
word above the cursor will be used as the tagname.

   Invoke the pctags_prompt command (<Alt-P>) and RETRO will display a
pop-up window in the center of your screen.  You will be prompted to enter
the tagname you wish to retrieve.  Pressing <Esc> or entering an empty line
will cancel the RETRO operation.  Otherwise, enter the name of the function
or tag and press <Enter>.  RETRO will begin its retrieval operation.

   Besides prompting for a tagname, there are two fields displayed in the
pop-up window.  The headings on the fields are "Operation" and "Case."  Each
of these fields controls a particular aspect of the retrieval operation.

   The "Operation" field determines whether RETRO will actually load the
source file containing the tagged line ("Load File") or simply display the
tag information it retrieves and leave the file-loading to the user ("Show
Info").  One of the two options is always active.  The active field is
displayed in inverse video.  It is possible to toggle between the two fields
by pressing the <F1> key.

   The default active Operation is "Load File," but this can be changed to
"Show Info" by installing RETRO with the -I option explained in the next
section.

   The active Operation field is "sticky" in that it affects the execution
of all subsequent pctags_auto and pctags_prompt commands until it is
changed.

   The other field displayed in the pop-up window is titled "Case."  There
are two options in the Case category: "Sensitive" and "Insensitive."  These
options refer to the search operation performed when RETRO is looking for a
matching tagname in the tagfiles.  By default, RETRO performs a case-
sensitive search when looking for tag information.  This means that the case
of the tagname entered at the prompt of a pctags_prompt command or the word
above the cursor of a pctags_auto operation must match exactly to the
tagname stored in the tagfile.  If it does not, the tagname will not be
found.

   Like the Operation fields, one of the Case fields is always active and
displayed in inverse video.  The active Case field can be toggled by
pressing the <F2> key.  Also, like the Operation fields, the active Case
field is sticky.

   The default Case field can be set to "Insensitive" by specifying the -C
option on the RETRO installation line.  Further details will be explained in
the next section.

   The TSR RETRO loads source files and positions the cursor by invoking
editor commands.  RETRO achieves this by sending to the editor the
keystrokes the editor recognizes as command invocations.  For example, if
your editor is configured to load a file whenever the <F3> key is pressed,
RETRO would send an <F3> keystroke to the editor when it wanted to load a
source file.  When your editor would prompt for the name of the file to
load, RETRO would send it the source file name.  All this is done
automatically by RETRO as part of the retrieval process.

   Since every editor has its own set of keystroke assignments, RETRO must
be informed of the sequence of keystrokes that your editor recognizes to
execute certain commands.  This is done by configuring RETRO with the
RETROCON program.  RETRO must be configured with RETROCON before it can be
used to load a source file.

   RETROCON is included in the PC-TAGS software package.  RETROCON
instructions are contained later in this manual in the section "Configuring
the TSR RETRO with RETROCON."

   Some other characteristics of the TSR RETRO must first be mentioned.

   The TSR RETRO will not activate if the screen is in a graphics mode.
This means that if the editor is in the 43-line EGA or 50-line VGA mode,
pressing either of the hotkeys will have no effect.  RETRO can be invoked if
you switch back to the 25-line text mode.

   RETRO also does not support 40-column text displays.  This should not be
a problem as 40-column screens are rarely, if ever, used for text editing.

   In addition to popping up during an editing session, RETRO can also be
invoked from the DOS command prompt.  If RETRO is instructed to load a
source file, it will execute your editor to do so.  RETRO is smart enough to
know whether it is necessary to execute your editor or if the editor is
already running.

   However, RETRO will only execute your editor from a primary command-
processor prompt, not from the prompt of a secondary shell.  RETRO may be
used from a secondary shell, but only if the Operation option is set to
"Show-Info" and not "Load-File."


RETRO.COM Installation Options
------------------------------
   The TSR RETRO recognizes several command-line options which can be used
to configure RETRO to your personal tastes and computer environment.

   All options are preceded by a dash(-) character.  Options may be in upper
or lower case.  Multiple options can be specified, but each must be
separated by at least one space.

   An example RETRO installation line with multiple options would be:

                             >RETRO -C -V

   Each of the supported RETRO options are explained in this section.


Case-Insensitive Tagname Searching
----------------------------------
   -C        -- Default Tagname Comparison is Case-Insensitive

   By default, RETRO will perform a case-sensitive comparison when searching
a tagfile for a matching tagname.  This is depicted in the pop-up window by
the active Case field "Sensitive" being displayed in inverse video.

   Installing RETRO with the -C option will toggle the active Case field so
that RETRO will powerup with the "Insensitive" field active.  The active
field can still be toggled by pressing the <F2> key when the RETRO prompt
window is displayed.


Assign RETRO Hotkeys
--------------------
   -Hx:x:x      -- Assign Hotkey to the pctags_auto or pctags_prompt Command

   By default, RETRO makes the following hotkey assignments:

                         <Alt-A> -- pctags_auto
                         <Alt-P> -- pctags_prompt

   One or both of these assignments may be altered by the -H option.  If
your editor already uses one of the default hotkeys to execute an editor
command, you should reassign the RETRO hotkey to some unused keystroke.

   The -H option requires additional information to be specified with it.
This information must be immediately after -H with no spaces between it.
The information is specified in several parts, each part separated by a
colon(:).

   The first part specifies the RETRO command to which the hotkey will be
assigned, either pctags_auto or pctags_prompt.  Each command is specified by
a single character.

                        A -- assign hotkey to pctags_auto
                        P -- assign hotkey to pctags_prompt

   The RETRO command specifier is immediately followed by a colon.  Thus, if
we were assigning a new hotkey to pctags_auto, the first part of the option
would be:

                        >RETRO -HA:

   The second part of the option designates which shift keys to use in the
hotkey.  Possible shift keys are the <Alt>, <Ctrl>, <LeftShift> and
<RightShift> keys.  Shift keys are specified by a single letter.

                        A -- Alt
                        C -- Ctrl
                        L -- Left Shift
                        R -- Right Shift

   Immediately following the shift keys must be another colon.

   Shift keys can be combined.  For example, specifying both A(Alt) and
C(Ctrl) will require that you press both the <Alt> and <Ctrl> keys to
activate the associated command.

   Notice that RETRO differentiates between the Left and Right Shift keys.
Specifying both as part of the hotkey does not mean that you can press
EITHER of them to activate RETRO; it means you must press BOTH of them.

   There do not have to be any shift keys in a hotkey definition.  In this
case, the colon character would follow immediately after the colon which
ended the command specifier.  For example,

                        >RETRO -HA::

   To add to our original sample definition, say we want to combine the
<Alt> and <Ctrl> keys in our pctags_auto hotkey.  Our constructed option
would now look like:

                        >RETRO -HA:AC:

   The third and final part of a hotkey definition is the hotkey itself.
Valid hotkeys are:

                        A-Z    (case-insensitive)
                        0-9
                        F1-F12 (F11 and F12 may not work on all machines)

   To complete our sample definition, let's assign the hotkey <Alt>-<Ctrl>-A
to the pctags_auto command:

                        >RETRO -HA:AC:A

   To assign the <F1> key to the pctags_prompt command:

                        >RETRO -HP::F1

   Certain editors require the hotkeys to either use or not use certain
shift keys.  For example, if your editor uses the <Alt> key to activate a
menu system (as the Quick environments do) then hotkeys using the <Alt>
shift key will have an effect on the retrieval operation.

   Popular editors that limit the use of certain hotkeys are mentioned in
the following section.

   Hotkeys in the Quick Environments
   ---------------------------------
   If you will be using RETRO with one of the Microsoft Quick environments,
such as QuickC, QuickBASIC or QuickPascal, and you will be loading source
files, BOTH of your RETRO hotkeys must include the <Alt> key.  However, if
you will only be showing tag information and not loading files, it is
recommended that NEITHER hotkey include the <Alt> key.


Show Tag Information
--------------------
   -I           -- Show Tag Information, Do Not Load Source File

   By default, RETRO will attempt to load the relevant source file when a
tagname's tag information is found.  This is depicted in the pop-up window
by the active Operation field "Load File" being displayed in inverse video.

   Installing RETRO with the -I option will toggle the active Operation
field so that RETRO will powerup with the "Show Info" field active.  The
active field can still be toggled by pressing the <F1> key when the RETRO
prompt is displayed.


Keystroke Stuff Rate
--------------------
   -Kx          -- Rate at which Keystrokes Should Be Fed to Editor

   By default, when RETRO is trying to load a file and position the cursor,
it will send keystrokes to the editor as fast as it can.  Some editors
cannot accept keystrokes as fast as RETRO sends them.  If you find that your
editor is losing RETRO keystrokes, install RETRO with the -K option.

   -K takes a mandatory single-character modifier which designates the
keystroke stuff speed.  This modifier must be specified immediately after
the -K option with no spaces between them.  The supported modifiers are:

                        S -- Slow rate
                        M -- Medium rate
                        F -- Fast rate (default)

   For example, to instruct RETRO to use the medium keystroke speed:

                        >RETRO -KM


Remove RETRO From Memory
------------------------
   -R           -- Remove RETRO from memory, uninstall

   When you are through using RETRO, it can be removed from memory by
specifying the -R option.  Thus, RETRO need only be resident when you need
it.


Prevent Snow on CGA Screens
---------------------------
   -V           -- Display RETRO Output Without Video Snow

   By default, RETRO will write to the screen as fast as it can.  This will
create a snow effect on some CGA monitors.  If you experience snow with
RETRO output, install it with the -V option.


 
Configuring the TSR RETRO with RETROCON
---------------------------------------
   Before RETRO can load a source file into your editor, it must know the
keystrokes the editor recognizes to execute certain commands.  When loading
a file and positioning the cursor, RETRO will send these keystrokes,
combined with the relevant tag information, to the editor.

   The RETROCON.EXE program is used to configure the TSR RETRO so that it
will send the appropriate keystrokes to your editor.  Examples of using
RETROCON to configure several popular editors and environments are described
in following sections.

   RETROCON will prompt you for the keystrokes your editor recognizes to
invoke the following commands:

                Load-file
                Search-for-text (non-regular expression forward search)
                Jump- or goto-line
                Customization commands

   When prompted for keystrokes to a particular editor command, you should
press those keys that you normally do when executing the command yourself
during an edit session.  When sending the keystrokes to your editor, RETRO
will combine them with the relevant file information retrieved from the
tagfile.

   To indicate to RETROCON that you have entered all the necessary keys for
a particular command, press <Ctrl-@>.  DO NOT PRESS <Enter> TO TERMINATE
YOUR INPUT.  The <Enter> key will simply be added to the rest of your
command keystrokes.  You must press <Ctrl-@> to terminate an input sequence.

   As an example, say your editor uses the <F3> key to begin a load-file
operation.  When prompted for the load-file keystrokes, simply press the
following key sequence:

                               <F3><Ctrl-@>

   The <F3> is the editor command key and the <Ctrl-@> tells RETROCON that
you have finished entering keystrokes.  (The "< >" brackets should not be
entered; they are only shown here to differentiate the keys.)

   Perhaps your editor requires you to activate a main menu and then pull
down a File submenu in order to load a file.  If the <Esc> key activates the
main menu, the <F> key pulls down the File submenu and <L> initiates the
load operation, the correct RETROCON input is:

                            <Esc><F><L><Ctrl-@>

   Notice that the key sequence takes the editor up to the point where it
will prompt for the name of the file to load.  You do not have to enter
anything for the file-name input; RETRO will add the file name itself during
the retrieval process.

   All of the editor-command keystroke prompts act in this manner.  You
should enter the keystrokes your editor requires up until the point where it
will ask you for input which is specific to an individual operation.  For
example, since the file name will change for each load operation, it is
considered "specific" to each load command.  The same is true for the line
number in a jump-to-line command and the search string in a search
operation.  RETRO will fill in the command-specific information itself.

   There may be some instances where executing a single editor command will
not always perform the retrieval operation correctly.  When these situations
occur, RETROCON can be used to configure RETRO so that it will execute
multiple commands.  One instance where multiple commands may be required is
described here.
 
   Some editors will not load a second copy of a file which is already
loaded.  When instructed to load a second copy, the editor will simply
switch to the window or buffer that already contains the file.  The cursor
position in the "new" window remains unchanged from its last placement.  The
QEdit text editor and the Turbo environments act in this manner.

   Leaving the cursor position unchanged could have an effect on the success
of the RETRO search operation.  For example, if the cursor is positioned
after the function definition that RETRO is searching for, the search
operation will not succeed.  For this reason, it may be appropriate to
precede the search command with a "Top-of-File" command.  Doing so will
guarantee that the search operation will scan the entire file and find the
function definition.

   When this situation occurs, it will be necessary to configure RETRO so
that it always performs a Top-of-File command just before doing its search.
This is easily done with RETROCON.

   Say your editor recognizes the <Ctrl-Home> key as an instruction to
position the cursor at the start of the file and <F7> to begin a search
operation.  When RETROCON prompts you for the keystrokes required for a
Text-Search, press the following keys:

                         <Ctrl-Home><F7><Ctrl-@>

   Neither RETROCON nor RETRO knows that it will be executing two editor
commands (Top-of-File and Search).  Neither program analyzes the keystrokes
you tell it to pass to the editor; they simply pass them along and assume
they will perform the desired operations.  This gives you great power in
controlling the RETRO retrieval operation, as shown in the above two-command
Top-of-File/Search command.

   Each editor has its own method of processing certain operations.  For
example, some editors begin a search operation immediately after entering
the search text and pressing the <Enter> key.  Other editors will prompt for
additional information, such as the case-sensitivity or direction of the
search.  Some editors use the <Esc> key instead of the <Enter> key to signal
the end of the search-string.  RETRO and RETROCON are capable of handling
this wide range of editor methods.

   For example, as part of instigating a search command, some editors prompt
for additional input after the search string has been entered.  As mentioned
above, the editor might ask whether the search should be case-sensitive or
in which direction the search should move.  To handle this type of
operation, RETRO and RETROCON break the search-command keystrokes into two
groups: (1) keys entered up until the search string and (2) keys entered
after the search string.  If your editor begins the search operation
immediately after entering the search string, you should simply enter a
<Ctrl-@> when prompted for the additional keystrokes.  Otherwise, you may
enter any keystrokes that your editor will recognize.

   Some editors do not support a jump-to-line command.  If your editor falls
in this group, enter a <Ctrl-@> when prompted for the jump-to-line command
keystrokes.  Also, be sure the PCTAGS -L option is NOT specified when you
process your source files.  The -L option places line numbers in the tagfile
and your editor will not be able to handle them if it does not support a
jump-to-line command.

   At the end of the RETRO retrieval operation, but before it terminates,
RETRO will send any additional editor keystrokes that you specify.  You may
use this feature to customize the RETRO operation to your particular tastes.
For example, you may wish to center the cursor line onscreen or move the
cursor to the beginning of the line.  Whatever you wish done, simply enter
the appropriate editor keystrokes when prompted for the customization keys.
If there are no additional operations you want done, press the <Ctrl-@> key.

   In addition to requesting editor command keystrokes, RETROCON will ask
you for the name of your editor.  This is used if RETRO is ever popped-up
from the DOS command prompt and is instructed to load a file.  In this
situation, RETRO will execute your editor automatically.  If you normally
include command-line options when executing your editor, they should be
specified along with the editor's name.

   Once all the required information is input, RETROCON will display its
main menu.  From here you can re-enter any command keystrokes you mistakenly
entered or save your input to the RETRO.COM program file.  If you save the
information, RETRO will use it in its retrieval operation the next time it
is installed.

   RETROCON can be used again in the future if you need to modify any of
your editor's command keystrokes.


Configuring RETRO for the Turbo Environments
--------------------------------------------
   This section will describe how RETROCON can be used to configure the TSR
RETRO to work with the Turbo environments, like Turbo Pascal and Turbo C.
All the keystrokes specified here use the default key configurations for the
Turbo environment.

   The example Turbo configuration described here works with Turbo C v2.0
and Turbo Pascal v5.5.  Other Turbo languages and versions should be
configured in a similar manner.

   The first input for which RETROCON will prompt is the name of the editor
with which you will be using RETRO.  This will change depending upon which
Turbo environment you'll be using.  For our example, we'll assume we will be
using Turbo C whose program name is TC.  Thus, RETROCON's prompt and our
response would look like this:

                Editor name and options: tc<Ctrl-@>

   Notice that the end of the input was terminated by a <Ctrl-@>.  Do not
hit the <Enter> key to terminate input; all RETROCON input is terminated by
<Ctrl-@>.

   RETROCON will next ask for the keystrokes necessary to execute a
Load-File command.  Turbo's method of executing a "load" command will
require special handling by the resident RETRO.  During Turbo's course of
carrying out a "load" command, it checks to see if the current file has been
modified.  If it has, Turbo will ask the user if the modified file should be
saved to disk before continuing.  If the file has not been changed, the
load will occur without this additional prompting.

   RETRO does not have the capacity to handle this intermittent prompting.
Thus, for RETRO to work with the Turbo environments, it must be configured
in such a way as to guarantee that the "save-file" prompt never occurs.
This requires that the Load-File command be configured as a "double-
command," like that described in the previous section.

   So that Turbo will never prompt to ask whether it should save a modified
file, the Load-File command must be preceded by a Save-File command.  In the
default Turbo configuration, the <F2> key executes a Save-File operation and
the <F3> key will load a file.  Thus, when RETROCON asks for the keystrokes
to execute a Load-File command, the correct input is:

                    Load-File keystrokes: <F2><F3><Ctrl-@>

   RETROCON will then prompt for the keystrokes necessary to invoke a
Text-Search operation.  The characteristics of the Turbo environment require
that RETRO execute another double-command in this situation, as well.

   If Turbo is told to load a file that already exists in its buffers, then
it will simply "switch" to that file.  This switch leaves the cursor
position unchanged from its original location.  In most cases, the cursor
will be somewhere other than the top of the file.  If the cursor is
positioned beyond the tagged line for which RETRO will search, the search
operation will fail.  To guarantee that the search will succeed, it must
scan the entire file starting from the file's beginning.  Thus, the RETRO
Text-Search operation should be preceded by a Top-of-File command.

   Turbo recognizes <Ctrl-QR> as the Top-of-File command and <Ctrl-QF> to
begin a search operation.  Therefore, the appropriate RETROCON input is:

           Text-Search keystrokes: <Ctrl-Q><R><Ctrl-Q><F><Ctrl-@>

   The following input is equivalent:

      Text-Search keystrokes: <Ctrl-Q><Ctrl-R><Ctrl-Q><Ctrl-F><Ctrl-@>

   After RETRO sends the above Text-Search keystrokes to Turbo, it will send
Turbo the search-string.  The search-string will be the contents of the
tagged line.  Turbo limits the length of the search-string to 30 characters.
However, in many cases, the tagged line will be more than 30 characters.
When this occurs, Turbo will use only the first 30 characters of the tagged
line for its search.  This will not usually cause a problem.  However,
sometimes the short search-string will match a line in the file other than
the original tagged line, for example, a function prototype in the C
language.  When this happens, manually pressing the <Ctrl-L> key will cause
Turbo to find the next matching line.  In most cases, the next match will
find the desired tagline.

   After telling RETROCON the Text-Search keystrokes, it will ask for any
additional keys required to begin the actual search.  After receiving the
search-string, Turbo always prompts for options to customize the search.
For example, the search could be made case-sensitive or move forward or
backward through the file.  After entering any options, pressing the <Enter>
key will begin the search operation.

   For RETRO's purposes, the default Turbo search options are sufficient.
Thus, only the <Enter> key is required.  The proper RETROCON input is:

              Additional Text-Search keystrokes: <Enter><Ctrl-@>

   Next, RETROCON asks for the keystrokes which will invoke a Goto-Line
operation.  The Turbo environment does not provide such a command, so this
prompt can be "skipped" by simply entering <Ctrl-@>.  (Note: Because Turbo
does not support a Goto-Line command, line number information should never
by stored in the tagfiles.  Line number information is stored when PCTAGS is
executed with the -L option.)

   The RETROCON input when prompted for the Goto-Line keystrokes is:

                      Jump-to-Line keystrokes: <Ctrl-@>

   Finally, RETROCON will ask for keystrokes to customize the RETRO
retrieval operation.

   Following a Turbo search operation, the cursor is often positioned near
the bottom of the screen.  Also, the cursor is located at the end of the
search-string.  It might be nicer to move the cursor to the start of the
line (<Home> key) and move the tagged line up near the middle of the screen.
This can be done by sending several <Down> keystrokes followed by the same
number of <Up> keys to restore the cursor onto the tagged line.  Such a
customization would be entered as:

   Custom keystrokes: <Home><Down><Down><Down><Down><Up><Up><Up><Up><Ctrl-@>

   You may prefer a different customization or none at all.  It is not
important what keys are entered for this prompt (as long as it is terminated
with a <Ctrl-@>).

   At this point, RETRO configuration is nearly complete.  The RETROCON main
menu will be displayed and you will be able to re-enter any of the keystroke
fields or save your configuration to the RETRO.COM file.


Configuring RETRO for QEdit
---------------------------
   This section will describe how RETROCON can be used to configure the TSR
RETRO to work with the Qedit text editor.  The example demonstrates how to
configure QEdit using its default keystroke assignments.

   First, RETROCON will prompt for the name of the editor.  Simply enter "Q"
and <Ctrl-@> to terminate the input.  The RETROCON prompt and your response
should look like this:

                Editor name and options: <Q><Ctrl-@>

   Notice that the end of the input was terminated by a <Ctrl-@>.  Do not
hit the <Enter> key to terminate input; all RETROCON input is terminated by
<Ctrl-@>.

   Next, RETROCON will ask for the keystrokes which will cause QEdit to load
a file.  The <Alt-E> key will do this, therefore the appropriate RETROCON
input should be:

                Load-File keystrokes: <Alt-E><Ctrl-@>

   RETROCON will then prompt for the keys that will begin a Text-Search
operation.  The <Ctrl-Q><F> keys will invoke the QEdit command, however,
this will not be enough to guarantee a successful search.

   When QEdit loads a file, it first checks to see if the file is already
loaded in its buffers.  If it is then QEdit simply "switches" to the file.
When the switch occurs, the cursor position remains unchanged from its
original location when the file was last accessed.  In most cases, the
cursor will not be at the beginning of the file.  If the cursor is beyond
the tagged line for which RETRO will search then QEdit will not find the
line.

   To guarantee that the search will succeed, QEdit must scan the entire
file.  This can be accomplished if the cursor is always at the beginning of
the file when the search is begun.  Thus, a Top-of-File command should
immediately precede the Text-Search operation.  QEdit recognizes a press of
the <Ctrl-PgUp> keys as an instruction to move the cursor to the start of
the file.

   The correct RETROCON input will look like this:

           Text-Search keystrokes: <Ctrl-PgUp><Ctrl-Q><F><Ctrl-@>

   When RETRO is performing its retrieval operation, it will append to the
above keystrokes the search-string for which to search.  The search-string
will be the contents of the tagged line.  After sending the search-string, a
carriage return will be sent to QEdit.

   Before QEdit actually begins the search, it prompts for search options.
These options control important characteristics of the search operation,
such as case-sensitivity and search direction.  After entering any options,
pressing the <Enter> key will begin the actual search.  For RETRO's
purposes, no options are the best.  When no options are chosen, the search
will be case-sensitive and perform a forward search through the file.

   By default, QEdit will ignore the case of the search-string when scanning
the file for a match.  This setting and any other default options can be
removed by simply pressing the <Space> key.

   RETROCON will ask for the additional keys required to begin the QEdit
search.  Your response should look like this:

         Additional Text-Search keystrokes: <Space><Enter><Ctrl-@>

   Next, RETROCON will prompt for the keystrokes necessary to execute a
Jump-to-Line command.  RETRO will invoke such an operation when the line
number of the tagged line is stored in the tagfile.  (This occurs when
PCTAGS is run with the -L option.)  QEdit uses the <Ctrl-J> key to invoke
the command so the correct RETROCON input is:

               Jump-to-Line keystrokes: <Ctrl-J><Ctrl-@>

   Finally, RETROCON will ask for any keystrokes RETRO should send to QEdit
at the completion of its retrieval operation.  These keys can be used to
customize the RETRO retrieval operation to your preferences.  For example,
when QEdit locates a matching search-string, the cursor will be on the top
line in the window.

   It might be nice to move the line a little lower so that a few lines
before the tagged line can be seen.  This is easily done by moving the
cursor up a few rows using the <Up> arrow key and then back down the same
number of rows with the <Down> arrow key to replace the cursor onto the
tagged line.

   The RETROCON input to achieve this is:

                Custom keystrokes: <Up><Up><Down><Down><Ctrl-@>

   Of course, you do not have to enter the same keystrokes to customize your
retrieval operation.  Choose any keys you like or none at all.

   At this point, the RETRO configuration is nearly complete.  The RETROCON
main menu will be displayed and you will be able to re-enter any of the
keystroke fields or save your configuration to the RETRO.COM file.


Configuring RETRO for MicroEMACS
--------------------------------
   This section will describe how RETROCON can be used to configure the TSR
RETRO to work with the IBM version of the MicroEMACS text editor.  The
example shows how to configure MicroEMACS using its default keystroke
assignments.

   First RETROCON will prompt for the name of the editor.  Simply enter
"MEIBM" and <Ctrl-@> to terminate the input.  The RETROCON prompt and your
response should look like this:

                Editor name and options: meibm<Ctrl-@>

   Notice that the end of the input was terminated by a <Ctrl-@>.  Do not
hit the <Enter> key to terminate input; all RETROCON input is terminated by
<Ctrl-@>.

   Next, RETROCON will ask for the keystrokes which will cause MicroEMACS to
load a file.  The <Ctrl-X><Ctrl-F> key sequence will do this, thus the
appropriate RETROCON input is:

              Load-File keystrokes: <Ctrl-X><Ctrl-F><Ctrl-@>

   RETROCON will then prompt for the keys that will begin a Text-Search
operation.  The <Ctrl-S> key will invoke the MicroEMACS command, however,
this will not be enough to guarantee a successful search.

   When MicroEMACS loads a file, it first checks to see if the file is
already loaded in its buffers.  If it is then MicroEMACS simply "switches"
to the file.  When the switch occurs, the cursor position remains unchanged
from its original location when the file was last accessed.  In most cases,
the cursor will not be at the beginning of the file.  If the cursor is
beyond the tagged line for which RETRO will search then MicroEMACS will not
find the line.

   To guarantee that the search will succeed, MicroEMACS must scan the
entire file.  This can be accomplished if the cursor is always at the
beginning of the file when the search is begun.  Thus, a Top-of-File command
should immediately precede the Text-Search operation.  MicroEMACS recognizes
a press of the <Home> key as an instruction to move the cursor to the start
of the file.

   The correct RETROCON input will look like this:

               Text-Search keystrokes: <Home><Ctrl-S><Ctrl-@>

   When RETRO is performing its retrieval operation, it will append to the
above keystrokes the search-string for which to search.  The search-string
will be the contents of the tagged line, including the ending carriage
return (but not the linefeed).

   Note: The resident RETRO program assumes that all lines in tagfiles end
with a carriage return-linefeed pair.  PCTAGS will always generate such
files.  If you manually modify a tagfile, you must be certain that each line
ends with the necessary termination pair.

   Before MicroEMACS will begin the search, the Meta key (<Esc>) must be
pressed.  RETRO should send this to MicroEMACS immediately after sending it
the search-string.  When RETROCON asks for any additional keys required to
begin the MicroEMACS search, the <Esc> key should be specified.

             Additional Text-Search keystrokes: <Esc><Ctrl-@>

   Next, RETROCON will prompt for the keystrokes necessary to execute a
Jump-to-Line command.  RETRO will invoke such an operation when the line
number of the tagged line is stored in the tagfile.  (This occurs when
PCTAGS is run with the -L option.)  MicroEMACS uses the <Esc>-G key sequence
to invoke the command so the appropriate RETROCON input is:

               Jump-to-Line keystrokes: <Esc><G><Ctrl-@>

   Finally, RETROCON will ask for any keystrokes RETRO should send to
MicroEMACS at the completion of its retrieval operation.  These keys can be
used to customize the RETRO retrieval operation to your preferences.  For
example, when MicroEMACS locates a matching search-string, the cursor will
be located at the end of the string.  Because the ending carriage return was
included in the search, the cursor will actually be on the line below the
tagged line.

   It might be nice to position the cursor at the beginning of the tagged
line.  This is easily done by moving the cursor to the start of the current
line using the <Ctrl-A> key and up one row with the <Up> arrow key.

   The RETROCON input to achieve this is:

                  Custom keystrokes: <Ctrl-A><Up><Ctrl-@>

   Of course, you do not have to enter the same keystrokes to customize your
retrieval operation.  Choose any keys you like or none at all.

   At this point, the RETRO configuration is nearly complete.  The RETROCON
main menu will be displayed and you will be able to re-enter any of the
keystroke fields or save your configuration to the RETRO.COM file.


Configuring RETRO for the Quick Environments
--------------------------------------------
   This section will describe how RETROCON can be used to configure the TSR
RETRO to work with the Quick environments, like QuickC and QuickPascal.  The
example shows how to configure QuickPascal v1.00 using its default keystroke
assignments.

   While all the Quick environments are similar, each has their own
characteristics.  Even the different versions of the same Quick language may
include changes that would effect RETRO's retrieval operation.  Thus, the
exact configuration for a particular Quick environment may differ from the
example configuration described here.  If you use a Quick environment other
than QuickPascal v1.00, you should use this example as a starting point, but
do not assume it will work correctly with your particular system.

   Another caveat must be mentioned when using RETRO to load files into a
Quick environment.  It has been found that version 1.01 of the QuickC
environment cannot be made to load a file using the resident RETRO.  This is
due to certain characteristics of that version in the loading of files and
recognition of keystrokes.  Because there are several Quick environments
available, it is impossible for us to test every version of each environment
for RETRO compatibility.

   We suggest that you use the example configuration described in this
section for QuickPascal v1.00 as a starting point.  This configuration does
work for that environment (however, only with limitations described below).
If it does not work in your Quick environment, try making some adjustments.
This may include using other keystrokes to invoke the editor commands or
defining hotkeys that do (or do not) use the <Alt> key.  (Depending on the
Quick version and language, pressing the <Alt> key alone may activate the
menu system.  In some environments, it may be desirable to have the menu
active during the retrieval operation.  If so, include the <Alt> key as part
of the RETRO hotkey.  Invoking RETRO will then activate the menu system at
the same time.)

   If you try everything and still cannot get RETRO to consistently load
files, we have two suggestions:

   (1) Do not use the resident RETRO to load files into the Quick
   environment.  Instead, install RETRO with the -I option.  This will cause
   the retrieval operation to simply show the retrieved tag information,
   such as the source file's name and the tagname's line number.  The file
   can then be loaded into Quick manually.  While not as useful, this is
   still faster than searching through the files using some other method.

   (2) Use another editor.  If you are at the point where PC-TAGS is useful
   to you, i.e. you are generating programs consisting of multiple files,
   then you have probably outgrown the Quick environment.  A stand-alone
   editor would provide many useful functions you would come to appreciate.
   Cost and the time required to learn a new editor should not be a problem.
   There are many free (public domain) and low-cost (shareware) editors
   available today and nearly all of them can be configured to use the same
   keystrokes you are accustomed to using in the Quick environment.

   Also, if RETRO is popped up from the DOS command prompt, it should not be
instructed to load a file into the Quick environment.  As part of Quick's
startup initialization, it clears the keyboard buffer.  Any keystrokes RETRO
had placed in the buffer up to that point are lost.  Since Quick never
receives all the keystrokes that RETRO sent to it, the retrieval operation
fails.  Quick will lose keystrokes even if RETRO is installed with the -KS
option for slow keystroke stuffing.

   Using QuickPascal with the configuration described below contains one
major limitation: if the source file RETRO wishes to load is already loaded,
the retrieval operation will fail.  This occurs because when an attempt is
made to load another copy of a loaded file, the Quick environment pops up a
window stating the file is already loaded.  It then waits for a user
keystroke, such as <Space> or <Enter>, before continuing.  RETRO cannot know
that the file was already loaded and, therefore, continues sending Quick the
keystrokes necessary to begin a search operation.  Quick will "eat" these
keys until either a <Space> or <Enter> is encountered, at which point it
will return to the original file.  Any additional Text-Search keys that
Quick has not eaten will be inserted into the text of the file.  You will
have to delete these characters manually.

   If the source file RETRO attempts to load is not already loaded, the
retrieval operation will succeed.

   It is understandable if, due to the serious limitations, you decide to
not use the resident RETRO to load files into the Quick environments.
However, as mentioned previously, RETRO can still prove useful by informing
you of the file containing a desired tag.

   The following example will describe how to use RETROCON to configure the
resident RETRO to load files using QuickPascal v1.00.

   The first input for which RETROCON will prompt is the name of the editor
with which you will be using RETRO.  This will change depending upon which
Quick environment you will be using.  For our example, the QuickPascal
program's name is QP. Thus, RETROCON's prompt and our response would look
like this:

                Editor name and options: qp<Ctrl-@>

   Notice that the end of the input was terminated by a <Ctrl-@>.  Do not
hit the <Enter> key to terminate input; all RETROCON input is terminated by
<Ctrl-@>.

   RETROCON will next ask for the keystrokes necessary to execute a Load-
File command.  QuickPascal's method of executing a "load" command requires
some special setup of the hotkeys used to invoke the resident RETRO.
QuickPascal will load a file when the key sequence <Alt-F><O> is pressed;
the <Alt> key activating the menu structure at the top of the screen.
Unfortunately, the QuickPascal environment does not recognize an <Alt-F>
keystroke passed to it from RETRO (all non-Quick editors do recognize it).

   For RETRO to load a file into QuickPascal, the menu must already be
active when RETRO is invoked.  This can be achieved by including the <Alt>
key as part of the RETRO hotkey, as is the case with the default hotkeys,
<Alt-A> and <Alt-P>.  Thus, pressing the <Alt>-hotkey to invoke RETRO will
activate the Quick menu system, too.

   If you redefine a RETRO hotkey with the -H option, the <Alt> key MUST be
included as part of it.

   With the menu activated, all RETRO needs to send to Quick to load a file
are the <F> and <O> keys.  Thus, the correct RETROCON input is:

                   Load-File keystrokes: <F><O><Ctrl-@>

   Please note that if the file RETRO attempts to load is already loaded,
the retrieval operation will likely fail.  This limitation was mentioned
earlier in this section.

   After receiving the Load-File keystrokes, RETROCON will prompt you for
the keys necessary to invoke a Text-Search.  Although Quick Pascal will
recognize several different keystrokes as Search invocations, only <Ctrl-F3>
should be used by RETRO.  All the others are either not recognized by Quick
when RETRO sends them or they have undesirable side effects.  The correct
response to RETROCON when prompted for the Text-Search keystrokes is:

                Text-Search keystrokes: <Ctrl-F3><Ctrl-@>

   Quick will begin the search operation immediately after receiving the
carriage return RETRO sends it at the end of the search-string.  Thus, no
additional keys need be sent to execute the search operation.  When RETROCON
asks for the additional search keys, simply enter <Ctrl-@>.

                Additional Text-Search keystrokes: <Ctrl-@>

   RETROCON will then ask for the keys necessary to invoke a Jump-to-Line
command.  Quick does not support such an operation, so simply enter
<Ctrl-@>.

                    Jump-to-Line keystrokes: <Ctrl-@>

   Finally, RETROCON will prompt for any keystrokes you wish to send to
Quick at the completion of the retrieval operation.  Since Quick reasonably
positions the tagged line in the middle of the screen already, no real
customization is required, however, you may enter any keys here that you
wish (as long as they are terminated with <Ctrl-@>).

                        Custom keystrokes: <Ctrl-@>

   The RETRO configuration is now nearly complete.  The RETROCON main menu
will be displayed and you will be able to re-enter any of the keystroke
fields or save your configuration to the RETRO.COM file.  The next time you
run RETRO and QuickPascal, the RETRO retrieval capabilities will be
avaiable for your use.



                    Using RETROCL - The Command-Line RETRO
                    --------------------------------------
   The command-line method of RETRO retrieval is implemented in the
RETROCL.EXE (RETRO Command-Line) program.

   There are several situations in which RETROCL is useful.  For example, if
you are using an editor that does not support the loading of multiple files,
RETROCL can be used to inform you of the appropriate file to load (as can
the resident RETRO).

   Also, since RETROCL is able to extract source files from version-control
libraries, it is a logical companion to the TSR RETRO.  The macro RETRO
method cannot be invoked from the DOS command prompt, so RETROCL can be used
in such instances.  If you are running under the OS/2 operating system and
are using an editor that does not have RETRO macro support, RETROCL is
really the only way to go.  (The resident RETRO method is not currently
supported under OS/2.)  A copy of RETROCL that will run under both the DOS
and OS/2 operating systems is included as part of the registered OS/2
version of the PC-TAGS package.

   RETROCL shares much of the functionality of the macro and resident
retrieval methods.  Complete explanations of common operations have already
been described in previous sections and will not be repeated here.  Instead,
the supported command-line functions will only be mentioned.  Refer to the
earlier sections for details on each operation.

   As its name implies, RETROCL is executed from the DOS command prompt.
The correct syntax is:

                       RETROCL [-options] tagname

   In the unregistered version of RETROCL, a random two-digit number will be
displayed when it is first executed.  You must re-enter the displayed number
in order for RETROCL to continue its retrieval operation.  This user input
is not required in the registered versions of PC-TAGS.  Its purposes are to
remind you that you are running an unregistered evaluation version and to
act as an impetus to register.  You can receive a registered version by
sending your paid registration form contained in the file ORDERFRM to
Moderne Software.

   The "tagname" is the name of the function or explicit tag that you wish
to retrieve.  All the guidelines that apply to specifying a tagname using
the macro and resident retrieval methods also apply to RETROCL.  This means
that a tagname may contain alphabetic and numeric characters.  Underscore
and period characters are also supported.  By default, the tagname is case
sensitive, but that can be changed by specifying the -C option described
below.

   Including an "-options" argument on the RETROCL command line will alter
the default operation.  Options are not required.  If they are specified,
they must be preceded by a dash(-).  The case of the options is not
important.  A list of the recognized options and their descriptions follows.

   -C        -- Tagname Search is Case-Insensitive

                By default, the tagname search is case-sensitive.  If the -C
                option is specified, the search will ignore case.

   -V        -- Verbose Output

                If the tagname is found, RETROCL will simply display the
                name of the source file containing it.  If the retrieved tag
                information includes the line number on which the tagname is
                defined, the line number will be output after the source
                file's name.  Sample output is shown below.

                        c:\source\prog\edit.c
                        c:\src\pascal\getline.pas 143

                More wordy output can be generated by including the -V
                option on the RETROCL command line.  No additional
                information of any use will be displayed, but the format may
                seem more warm-hearted.

   If RETROCL options are to be used, chances are that the same options will
be desired every time RETROCL is executed.  Rather than enter the same
options each time, an environment variable called "RETROCL" can be defined.
The RETROCL environment variable should be assigned those options you wish
the RETROCL program to act upon.  RETROCL will check the environment
variable every time it is executed and process the options assigned to it as
if they had been specified on the command line.

   Sample RETROCL environment variables are shown below.

                             >SET RETROCL=-c
                             >SET RETROCL=-v
                             >SET RETROCL=-c -v

   Like the other retrieval methods, RETROCL will search for a matching
tagname in all the files with a ".TAG" extension in the current directory of
the current drive.  Also like the other methods, RETROCL supports the
designation of tagfiles in a RETRO environment variable.  Multiple tagfiles
are separated by a semicolon and the DOS wildcard characters are supported.

   RETROCL supports the RETROEXEC environment variable in the same manner as
the macro method.  Details about using RETROEXEC can be found in the section
"Macro-Specific RETRO Operations."

   Since RETROCL is executed from the command line, it cannot load a source
file into your editor.  Also, the tagname must be explicitly specified on
the RETROCL command line; there is no support for grabbing the word above
the cursor as there is in the macro and resident versions.

   Because of its support for RETROEXEC, RETROCL works well with the
resident method when version-control libraries are used.  If the TSR RETRO
says that it cannot locate a file, RETROCL can be executed to scan for the
same tagname.  Provided everything is set up correctly, RETROCL will extract
the source file from the library, thereby making it available for loading by
the TSR RETRO.

   Examples of RETROCL invocations are:

                >RETROCL get_input
                >RETROCL -v AddNumbers
                >RETROCL Display.String



                          RETRO Functionality Table
                          -------------------------
   Due to the large overlap of functionality between the various retrieval
methods, it may be initially confusing to remember the capabilities
supported by each version.  To reduce such confusion, the following table
depicts the operations supported by each retrieval method.

                                                      RETRO METHOD
Operation                                     Macro     Resident   Cmd-Line
--------------------------------------       --------   --------   --------
Accepts user-input tagname                     Yes        Yes        Yes

Uses tagname above cursor                      Yes        Yes        No

Multiple tagfiles specified in RETRO
  environment variable                         Yes        Yes        Yes

Configurable tagname case-sensitivity          Yes        Yes        Yes

Support for RETROEXEC environment variable     Yes        No         Yes

Loads source file and positions cursor         Yes        Yes        No

Can be invoked from DOS prompt                 No         Yes        Yes

Can be invoked from within editor              Yes        Yes        No



                                Tagfile Format
                                --------------
   The internal structure of tagfiles created by PCTAGS is of no concern to
the average PCTAGS and RETRO user.  Tagfiles can safely be thought of as
black boxes containing unknown mysteries in bizarre and ancient languages.

   However, if you use an editor that supports a macro language and a
pre-written RETRO macro is not included in the PC-TAGS software package, you
may want to write your own macro to retrieve tag information.  In this case,
an understanding of the tagfile contents will be required information.  For
such people and for those who are just plain curious, the format of
information in a tagfile is documented here.

   Tagfiles are made up of standard ASCII characters.  They may be examined
by most text editors.  It is not recommended that tagfiles be modified by
anyone or anything other than the PCTAGS program.  An editing mistake could
cause RETRO to fail in its retrieval operation.

   A tagfile contains three basic pieces of information for each function
definition and explicitly-tagged line in a source file.  These pieces of
information are:

        1) the function name (also called the "tagname")
        2) the complete file name of the source file
        3) either A) a copy of the line containing the tagged
                     function or
                  B) the tagged function's line number within the
                     source file (one-based)

   These three pieces of information are stored on a single line in the
tagfile.  A single space separates each piece of information from the
others.  A sample tagfile line would look like this:

TagName c:\dir\filename.ext ^PROCEDURE TagName( VAR i : INTEGER )

   The first piece of tag information is always the tagname.  It will always
begin in the first column of the line.  The case of the tagname will be
unchanged from that which was extracted from the source file.  In its search
operation, RETRO compares the tagname to the name that was either extracted
from above the cursor or entered by the user via the prompt.

   The second bit of tag information is the name of the file containing the
tagged function.  The file name always contains a drive and complete path
specification.  The path separator is always a backslash character (never a
slash).  All characters of the file name are always in lower case.

   The file name may contain a prefix of one or more special characters
which have meaning to RETRO.  There are currently two supported special
characters.  They are:

        '!'  -- instructs RETRO to execute the RETROEXEC special command if
                the source file cannot be found.  Placed on tagline when -E
                option is specified on PCTAGS command line.

        '#'  -- tells RETRO that the third piece of information in the
                tagfile is a line number (as opposed to text).  Placed on
                tagline when -L option is specified on PCTAGS command line.

   Some sample taglines containing special characters are:

TagName !c:\dir\filename.ext ^PROCEDURE TagName( VAR i : INTEGER )
TagName #c:\dir\filename.ext ^14
TagName !#c:\dir\filename.ext ^14

   The third and final piece of tag information is either a copy of the line
containing the tag definition or the definition's line number within the
source file.  The information type, either text or numeric, can be
determined by the presence or absence of the '#' prefix on the file name.
If the '#' prefix exists, the line number is specified; if the prefix does
not exist then a copy of the definition line is included.

   A caret(^) character marks the start of the third piece of information.
This is necessary because the first character(s) in the copied line may be
whitespace (blanks or tabs).  For example,

GetInput d:\prog\src\inchar.pas ^    FUNCTION GetInput()

   If a line number is specified in the third piece of tag information, it
will begin immediately after the caret.  Line numbers in PCTAGS-processed
source files begin with number one.  In other words, the first line in a
file is line number 1, the second line is number 2 and so on.



                 The Association of Shareware Professionals
                 ------------------------------------------

   PC-TAGS is produced by Steven Calwas, a member of the Association of
Shareware Professionals (ASP).  ASP wants to make sure that the shareware
principle works for you.  If you are unable to resolve a shareware-related
problem with an ASP member by contacting the member directly, ASP may be
able to help.  The ASP Ombudsman can help you resolve a dispute or problem
with an ASP member, but does not provide technical support for members'
products.  Please write to the ASP Ombudsman at P.O. Box 5786, Bellevue, WA
98006 or send a CompuServe message via EasyPlex to ASP Ombudsman 70007,3536.



                     Send Us Your Comments and Suggestions
                     -------------------------------------

   We would love to hear your suggestions, comments, and enhancement ideas
concerning the PC-TAGS software package.  Please send your suggestions to:

                                Steven Calwas
                               Moderne Software
                                P.O. Box 3638
                          Santa Clara, CA 95055-3638

                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2011

     Volume in drive A has no label
     Directory of A:\

    CREDIT   CRD      2793  10-01-89
    FILE2011 TXT      2369   1-26-90  12:49p
    LICENSE           5111  10-01-89
    ORDERFRM          2708  10-01-89
    OS2      VER      2368  10-01-89
    PCTAGS   DOC    157908  10-01-89
    PCTAGS   EXE     56655  10-01-89
    READ     ME       5198  10-01-89  12:00a
    RETRO    COM     18504  10-02-89
    RETROCL  EXE     24477  10-01-89
    RETROCON EXE     21173  10-02-89
    RETROMAC COM     56888  10-01-89
           12 file(s)     356152 bytes
                               0 bytes free
