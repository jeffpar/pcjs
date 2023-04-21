---
layout: page
title: "PC-SIG Diskette Library (Disk #1295)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1295/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1295"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DCA CONVERSION FOR PC-WRITE"

    DCA CONVERSION climbs two mighty compatibility mountains and brings to
    the world of shareware solutions to problems IBM has long ignored.  The
    biggest involves a duo of programs that convert text on IBM mainframe
    environments from EBCDIC to microcomputer ASCII.  This allows mainframes
    to share files that were created with PC-Write.  Likewise, PC-Write
    files can be converted to EBCDIC for the most part and sent to
    mainframes.
    
    The same programs allow microcomputers using different wordprocessing
    programs to communicate.  DCA CONVERSION lets PC-Write transfer files
    between any program that will accept DCA files.  Many popular programs
    will accept DCA files including Ventura desktop publishing.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DCAMAN1.DOC

{% raw %}
```















                               PC-Write

                         DCA Conversion Guide


                               June 1987
                      DCA Conversion, Version 1.0

                    Printed and published in U.S.A.
           Copyright 1987 by Quicksoft.  All rights reserved.
   Quicksoft, 219 First N. #224, Seattle, WA 98109. (206) 282-0452.

DCA is the acronym for IBM's Document Content Architecture. There are
two forms of DCA: Fixed-Form-Text (FFT) and Revisable-Form-Text (RFT).
The PC-Write DCA conversion programs are designed to be used only with
DCA Revisable Form Text documents.

PC-Write has two DCA conversion programs: One converts a PC-Write file
into DCA format and the other converts a DCA file into PC-Write
format. These programs serve two purposes:
1.  They can transfer documents between an IBM mainframe environment
    and a microcomputer.
2.  They allow microcomputers using different word processors to share
    formatted text. They filter the formatting commands of a word
    processor into standard commands that can be interpreted by the
    DCA conversion program of another word processor. The end result
    is a translation of one system's commands to another's.

The next five pages contain instructions for installing and running
the DCA conversion programs. The rest of this Guide consists of
general information that may be useful to you. This includes:

o  Advanced features of the conversion programs, page 8.
o  The relationship between PC-Write and DCA, page 13.
o  The DCA list utility, page 23.
o  Correspondence between PC-Write commands and DCA structures, page 29.
o  Error messages, page 32.
o  Summaries of DCA structures, pages 33, 34, and 35.
o  ASCII to EBCDIC conversion chart, pages 36 and 37.































PC-WRITE DCA CONVERSION GUIDE                                        2
Installing the DCA Conversion Programs

To install the conversion programs on a floppy disk system:

1. Place the DCA conversion diskette in drive A. Place a blank,
   formatted diskette in drive B. This will be your DCA conversion
   working diskette. At the A> prompt, type:
      WORKDCA B:

2. Press the Enter key. The WORKDCA program will copy the DCA
   conversion files onto your working diskette.

To install the conversion programs on a hard disk system:

1. Place the DCA conversion diskette in drive A. At the A> prompt,
   type:
      WORKDCA  C:\subdir\

   where "subdir" is the name of your PC-Write working directory.

2. Press the Enter key. The WORKDCA program will copy the DCA
   conversion files into your PC-Write working directory.




































3                                        PC-WRITE DCA CONVERSION GUIDE
Using the DCA Conversion Programs

The programs that convert between PC-Write and DCA are DCATOPCW and
PCWTODCA. Install the DCA conversion programs before converting any
files. The operation of these programs is easy enough for the novice
computer user. More advanced users can learn to run the programs more
efficiently by reading the next section of this Guide, Advanced
Features of the DCA Conversion Programs. Here you will find flags that
can be set from the command line, including flags for converting tabs
to spaces and for reformat protection.

PCWTODCA will recognize Dot lines from all versions of PC-Write, with
or without the Alt-G font character before the dot. Not all PC-Write
Dot lines can be converted to DCA. To learn which Dot lines are
converted, see Appendix A in the back of this Guide. Also, PC-Write
uses the ASCII character set and DCA the EBCDIC character set. Not all
characters can be translated between ASCII and EBCDIC. See Appendix F
an for ASCII to EBCDIC conversion chart.

The PC-Write conversion programs produce good but somewhat rough
command translations. You will have to work a bit on your converted
documents to complete the formatting.

Instructions are given two ways: first for computers with two floppy
disk drives, then for computers with hard disks.



Converting from DCA to PC-Write

To convert from DCA to PC-Write on a floppy disk system:

1. Place your DCA conversion working diskette in drive A. Place the
   diskette containing the DCA file in drive B. At the A> prompt,
   type:
      dcatopcw

2. Press the Enter key. The program prompts you as follows:
      DCA Filename:

3. Type the name of the DCA file you want to convert. Include B: in
   front of the file name. Press Enter. The program then prompts you
   with:
      PCW Filename:

4. Type any valid DOS name for the PC-Write output file and press
   Enter. Make sure you place B: in front of the file name if you want
   the converted file to be placed on the diskette in the B drive. As
   it converts the DCA file, the program prints a series of dots
   across the screen. When the conversion is done, the program
   displays:
      Conversion Completed.

   The DOS prompt reappears, and you are ready to edit the output file
   with PC-Write.



PC-WRITE DCA CONVERSION GUIDE                                        4
To convert from DCA to PC-Write on a hard disk system:

1. Change to the PC-Write working subdirectory of your hard disk.
   Place the diskette containing the DCA file in the A drive or copy
   the file onto your hard disk. At the DOS prompt, type:
      dcatopcw

2. Press the Enter key. The program prompts you as follows:
      DCA Filename:

3. Type the name of the DCA file you want to convert. Include the disk
   drive specification or subdirectory name, if any. Press Enter. The
   program then prompts you with:
      PCW Filename:

4. Type any valid DOS name for the PC-Write output file and press
   Enter. As it converts the DCA file, the program prints a series of
   dots across the screen. When the conversion is done, the program
   displays:
      Conversion Completed.

   The DOS prompt reappears, and you are ready to edit the output file
   with PC-Write.

EXAMPLE
You want to convert the DCA file TESTDCA into a PC-Write file called
NEWPCW. At the DOS prompt, type DCATOPCW and press Enter. The screen
says "DCA Filename:". The DCA file is on the diskette in the B drive,
so type B:TESTDCA and press Enter. The screen now says "PCW
Filename:". You also want this file on the diskette in the B drive, so
type B:NEWPCW. The screen now looks like this:

   A>dcatopcw

   DCA Filename: b:testdca
   PCW Filename: b:newpcw

Press the Enter key. The program responds with "Conversion Completed,"
and the DOS prompt reappears. Now load NEWPCW with PC-Write and edit
or print it.



Converting from PC-Write to DCA

The PCWTODCA program can read the Ruler line and Dot lines in an edit
control file. The PCWTODCA program prompts you for the name of an edit
control file. If you want it to read one, type that file name (for
instance, ED.TEM) at the prompt. If you want it to read ED.DEF, type
that. If you have !ED.* in the ED.DEF file, PCWTODCA will also read
the edit control file with the same extension as the file you are
converting. If you have Dot lines in PR.DEF that you want the
conversion program to read, type PR.DEF. If you want PCWTODCA to read
an edit control file and PR.DEF, make sure the edit control file
contains the line !PR.DEF and type the edit control file name at the
prompt. Note: The program does not look at the ED= environment string.


5                                        PC-WRITE DCA CONVERSION GUIDE
To convert from PC-Write to DCA on a floppy disk system:

1. Place your DCA conversion working diskette in drive A. Place the
   diskette containing the PC-Write file to be converted in the B
   drive. At the A> prompt, type:
      pcwtodca

2. Press the Enter key. The program prompts you as follows:
      PCW Filename:

3. Type the name of the PC-Write file you want to convert. Include B:
   in front of the file name. Press Enter. The program then prompts
   you with:
      DCA Filename:

4. Type a name for the DCA output file and press Enter. Make sure you
   place B: in front of the file name if you want the converted file
   to be placed on the diskette in the B drive. The program then
   prompts you with:
      Edit Control Filename (Optional):

5. Type the name of the PC-Write control file you want to use and
   press Enter, or just press Enter if you don't want to use a control
   file. If you type a control file name, include the drive
   specification if necessary. As it converts the PC-Write file, the
   program prints a series of dots across the screen. When the
   conversion is done, the program displays:
      Conversion Completed.

   The DOS prompt reappears.

   The PCWTODCA program creates a temporary file (TEMPDCA) as well as
   an output file. It places this temporary file on the diskette that
   contains the PCWTODCA program. TEMPDCA will be about the same size
   as the input file so make sure you have enough room on the diskette
   for it. When the conversion is complete, the program deletes
   TEMPDCA.

To convert from PC-Write to DCA on a hard disk system:

1. Change to the PC-Write working subdirectory of your hard disk.
   Place the diskette containing the PC-Write file to be converted in
   the A drive or copy the file onto your hard disk. At the DOS
   prompt, type:
      pcwtodca

2. Press the Enter key. The program prompts you as follows:
      PCW Filename:

3. Type the name of the PC-Write file you want to convert. Include the
   disk drive specification or subdirectory name, if any. Press Enter.
   The program then prompts you with:
      DCA Filename:

4. Type a name for the DCA output file and press Enter. Include the
   disk drive specification or subdirectory name, if any. The program
   prompts you with:

PC-WRITE DCA CONVERSION GUIDE                                        6
      Edit Control Filename (Optional):

5. Type the name of the PC-Write edit control file you want to use and
   press Enter, or just press Enter if you don't want to use an edit
   control file. If you type a control file name, include the drive
   specification or subdirectory if necessary. As it converts the
   PC-Write file, the program prints a series of dots across the
   screen. When the conversion is done, the program displays:
      Conversion Completed.

   The DOS prompt reappears.

   The PCWTODCA program creates a temporary file (TEMPDCA) as well as
   an output file. It places this temporary file in the subdirectory
   that contains the PCWTODCA program. TEMPDCA will be about the same
   size as the input file so make sure you have enough room in the PC-
   Write subdirectory for it. When the conversion is complete, the
   program deletes TEMPDCA.

EXAMPLE
You want to convert the PC-Write file TESTPCW into a DCA file called
NEWDCA. At the DOS prompt, type PCWTODCA and press Enter. The screen
says "PCW Filename". The file is located in the \DOC subdirectory of
your hard disk, so type \DOC\TESTPCW and press Enter. The screen now
says "DCA Filename:". You want to place this file in the \DOC
subdirectory too, so type \DOC\NEWDCA and press Enter. The screen says
"Edit Control Filename (Optional):". Type \DOC\ED.DEF. The screen
looks like this:

   C>pcwtodca

   PCW Filename: \doc\testpcw
   DCA Filename: \doc\newdca
   Edit Control Filename (Optional): \doc\ed.def

Press the Enter key. The program responds with "Conversion Completed".
The DOS prompt reappears. The NEWDCA file is now in the \DOC
subdirectory and is ready for use with another program.




















7                                        PC-WRITE DCA CONVERSION GUIDE
Advanced Features of the DCA Conversion Programs

The PCWTODCA and DCATOPCW conversion programs have a number of
advanced features that you may want to take advantage of. These are:
o  Command line operation.
o  "*" wildcards for file names.
o  Batch mode execution.

These features allow you to run the program without prompts, set
different processing modes, and process large sets of files with a
single command. Together, they can greatly simplify the operation of
the conversion programs. Let's look at each of these features.



Command Line Operation

If you use the conversion programs frequently, you probably don't want
to go through the program prompts each time you convert a file.
Command line operation allows you to specify all the information the
program needs directly on the command line. This information consists
of file names and flags. The file names are the PC-Write file name,
the DCA file name, and the edit control file name. The flags are used
to designate processing options you may wish to use.


DCATOPCW Command Line Operation

When you run the DCATOPCW program, you can enter the command line as
follows:
   DCATOPCW [dca-file] [pcw-file] [-i/b] [-f/w/q] [-r/u]

The first two parameters are file names. The DCA file name is first,
and the PC-Write file name is second. The order is important. There
are three flags for the DCATOPCW program. These are discussed below.


PCWTODCA Command Line Operation

When you run the PCWTODCA program, you can enter the command line as
follows:
   PCWTODCA [pcw-file] [dca-file] [ecf-file] [-i/b] [-f/w/q] [-t/s] [-e/d]

The first three parameters are file names, and the next four are
flags. These are discussed in detail below. All seven parameters are
optional. You can enter any or all of the file names, but they must
come in the order listed. The flags can be placed anywhere on the
command line and in any order.

If the PC-Write and edit control files are specified, they must
indicate existing files. The DCA file name, if specified, must be a
valid DOS file name. Again, the file names must be given in the order
shown.





PC-WRITE DCA CONVERSION GUIDE                                        8
Command Line File Names

The file name parameters are as follows:

   pcw-file       The PC-Write file name.
   dca-file       The DCA file name.
   ecf-file       The edit control file name.

When you run the PCWTODCA program, you can use any or all of these
parameters. With the DCATOPCW program, you can use only the PC-Write
and DCA file names.


Command Line Flags

There are eleven available flags that can be used to activate or
deactivate different program modes. Place these flags on the command
line as indicated above in either upper or lower case.

These eleven flags are grouped into five categories. Only one flag
from each category should be included in any command line. If more
than one flag from a category is included, all the flags from that
category are ignored and the default is used. Flags may be used
anywhere in the command line, but to be consistent we recommend that
they follow the file names.

Flags          Category                        Applicable Program(s)

-i, -b         Interface                             Both
-f, -w, -q     Display Feedback Level                Both
-s, -t         Tab Conversion                        PCWTODCA
-d, -e         Edit Control File Selection           PCWTODCA
-r, -u         Reformat Protection                   DCATOPCW

Here are descriptions of the flags:

Interface Flags

-i       Interactive Mode Flag. This flag tells the program to prompt
         you for any required input that is not specified on the
         command line. It is the default mode and need not be
         specified.

-b       Batch Mode Flag. This flag tells the program not to prompt
         you for input, but rather to use defaults whenever possible.
         If the program is unable to continue, either because of a
         missing PC-Write file name or errors on the command line, it
         will stop immediately.


Display Feedback Flags

-f       Feedback Flag. This flag sets the feedback level to its
         maximum. This means that the introductory screen is
         displayed, feedback is given on all user modes, warnings are
         displayed, dots are displayed as processing occurs, imported
         files are named, and a message noting program completion is

9                                        PC-WRITE DCA CONVERSION GUIDE
         given. This is the default for interactive mode.

-w       Warning Flag. This flag tells the program to limit feedback
         to warning messages, progress dots, and the names of the
         input, output, and other imported files.

-q       Quiet Flag. This flag causes all messages to be suppressed
         with the exception of the input file name. This is the
         default for batch mode.


Tab Conversion Flags (PC-Write to DCA only)

-s       Spaces Flag. This flag causes spaces to be left alone (not
         converted to tabs). This is the default.

-t       Tabs Flag. This flag causes spaces to be converted to tabs
         when possible.


Edit Control File Flags (PC-Write to DCA only)

-d       No ECF Flag. This flag indicates that the edit control file
         ED.DEF will not be read automatically. If you type -d and an
         edit control file name in the command line, PCWTODCA reads
         the edit control file but not ED.DEF. This is the default.

-e       ED.DEF Flag. This flag indicates the file ED.DEF will be read
         as the edit control file. If you type -e and an edit control
         file name in the command line, PCWTODCA reads ED.DEF first
         then the edit control file.


Reformat Protection Flags (DCA to PC-Write only)

-r       Reformat Protection Flag. This flag causes the DCATOPCW
         program to search for short strings that are unformatted and
         precede them with a .- so that they are protected from
         reformatting. This is helpful for sections of a file that
         should not be reformatted even though you have not indicated
         that protection is needed. The drawback of this flag is that
         it can make a cluttered output file. It is the default.

-u       Un-Protect Flag. This flag causes the DCATOPCW program not to
         protect short unprotected strings from reformatting.

EXAMPLES
The following command line runs the PCWTODCA program, translating the
file SAMPLET.PCW (a PC-Write file) into a DCA file named SAMPLET.DCA,
using ED.TXT as the edit control file:
   pcwtodca samplet.pcw samplet.dca ed.txt

The following command line runs the DCATOPCW program, translating the
file TEST1.DCA (a DCA file) into a PC-Write file named TEST1.PCW:
   dcatopcw test1.dca test1.pcw

The -i flag in the following command line causes the PCWTODCA program

PC-WRITE DCA CONVERSION GUIDE                                       10
to be run in interactive mode, but the PC-Write and DCA file names are
specified so you are not prompted for them. Since there is no edit
control file listed and no flag (-e or -d) indicating what control
file to use, you are prompted for one. The -w flag reduces feedback,
and the -t flag indicates that spaces will be converted to tabs where
possible.
   pcwtodca samplet.pcw samplet.dca -i -w -t



The "*" Wildcard

You can use a "*" wildcard symbol as part of an output file name when
you run the PCWTODCA and DCATOPCW programs. This symbol tells the
program to use the name of the current input file (not including the
extension) as the output file name. For example, using PCWTODCA, if
you type SAMPLET.PCW as the PC-Write file name and *.OUT as the DCA
file name, PCWTODCA creates a new DCA file called SAMPLET.OUT.

This would appear on the screen as follows:
   PCW Filename: samplet.pcw
   DCA Filename: *.out
   DCA Filename: samplet.out

You can also use a "*" wildcard in a command line operation. In Batch
Mode Execution (see below), you will learn how you can couple the "*"
wildcard with the batch mode flag (-b) to execute the conversion
programs automatically for a large set of PC-Write or DCA files.

The default output file name for PCWTODCA is *.DCA and the default
output file name for DCATOPCW is *.PCW. When you run a conversion
program in batch mode (with the -b flag), it uses defaults whenever
possible. So, for example, if you want the output file of the PCWTODCA
program to have the same name as the input file name but the extension
.DCA, you do not have to place *.DCA in the command line.

EXAMPLES
The following command line causes the PCWTODCA program to run in
interactive mode with full feedback, so you are prompted for an edit
control file name. In addition, the DCA output file is called SAMP.DCA
as indicated by the wildcard.
   pcwtodca samp.pcw *.dca

The following command line tells the PCWTODCA program to convert the
PC-Write file SAMP.PCQ to a DCA file called SAMP.DCA. The program is
executed in batch mode. No prompts are issued and no feedback is given
except for the name of the PC-Write file being converted. If the file
name is mistyped (maybe the extension should be .PCW instead of .PCQ),
the program is not able to find the file and it stops. If the same
thing happened in interactive mode, you would be prompted again.
   pcwtodca samp.pcq -b

The following command line runs the DCATOPCW program converting
SAMP.DCA to a PC-Write file named SAMP.PCW. Reformat protection is
included for unprotected short lines.
   dcatopcw samp.dca *.pcw -p


11                                       PC-WRITE DCA CONVERSION GUIDE
Batch Mode Execution

Using a DOS batch file, you can convert a number of PC-Write files
with one command. The following example shows how to do this:
   FOR %%1 IN (*.PCW) DO PCWTODCA %1 *.dca -b -q -t -e

This command in a batch file causes the PCWTODCA program to be run
once for each file specified by *.PCW. The -b flag tells PCWTODCA to
run in batch mode, using as many defaults as it can. The default
output file name is *.DCA, so the above command tells the program to
use the the current PC-Write file name as the output file name with
the extension .DCA. So, if there are three files that match *.PCW in
the current directory, say SAMP1.PCW, SAMP2.PCW, and SAMP3.PCW, three
DCA files are created with the names SAMP1.DCA, SAMP2.DCA, and
SAMP3.DCA. In other words, it is just as if you had typed:
   PCWTODCA SAMP1.PCW SAMP1.DCA -b -q -t -e
   PCWTODCA SAMP2.PCW SAMP2.DCA -b -q -t -e
   PCWTODCA SAMP3.PCW SAMP3.DCA -b -q -t -e

You can cut down on the number of keystrokes needed to accomplish this
by omitting the -t, -e, and -q flags. These are the defaults for batch
mode. Now you have:
   FOR %%1 IN (*.PCW) DO PCWTODCA %1 *.dca -b

This process can be streamlined even further since *.DCA is the
default name for the DCA file. So, all you really need is:
   FOR %%1 IN (*.PCW) DO PCWTODCA %1 -b

This is all it takes to translate all PC-Write files with the .PCW
extension into DCA files with the same name and a .DCA extension.




























PC-WRITE DCA CONVERSION GUIDE                                       12
Understanding PC-Write and DCA

PC-Write is a word processor designed to help users create documents.
DCA is primarily a system to store text formatting information for
translation to other systems. (In this document, DCA refers to DCA
Revisable-Form-Text.) As an analogy, if we see PC-Write as a press
turning out money, DCA is a bank where the currency of one country can
be exchanged for that of another.

A PC-Write file has three basic elements:

o  Guide lines (Ruler lines and Dot lines). Guide lines define
   formatting information such as margins, headers and footers, and
   justification. For example .XT:4 is used to define a top margin of
   four lines (.667 inches).
o  Control codes (ASCII characters below 32). Control codes (font
   characters) provide formatting information primarily about font
   changes, such as boldfacing.
o  Text, using ASCII character codes.

A DCA file has two basic elements:

o  Format information. The format information is contained in data
   structures. Data structures can be combined in different ways to
   define a large variety of documents. They may represent page layout
   features such as margins, font definitions, and line spacing;
   justification; tab placement; header and footer information; or
   printable characters.
o  Text, using EBCDIC character codes.

The structure of a DCA file is more complex than a PC-Write file since
DCA must be flexible enough to account for the many ways that word
processors define a document format.

The PCWTODCA program takes the basic elements of a PC-Write file and
translates them into DCA data elements. The resulting DCA file can
then be converted into the format of another word processor by running
it through that program's DCA conversion. See Appendix A: PC-Write/DCA
Equivalencies at the end of this Guide to see which PC-Write commands
are implemented. Some PC-Write commands are ignored.

The DCATOPCW program converts a DCA file's data structures into PC-
Write lines. See Appendix C: Structured Field Summary, Appendix D:
Multibyte Controls, and Appendix E: One-Byte Controls to learn which
DCA data elements are implemented and which are ignored.

In the rest of this section, we'll explore the DCA and PC-Write
structures and how they relate to each other. We'll look at:
o  The fundamental differences between the two systems.
o  The components and syntax of the DCA standard.
o  The process for converting DCA to PC-Write documents and vice
   versa.
o  The equivalencies between DCA and PC-Write files.

It isn't necessary to read this section to use the DCATOPCW and
PCWTODCA conversion programs. This information is provided to give you
a good understanding of the two file structures and how conversion

13                                       PC-WRITE DCA CONVERSION GUIDE
between them is accomplished. If you want an even deeper understanding
of DCA, consult the Document Content Architecture: Revisable-Form-Text
Reference Manual available from IBM (document number SC23-0758-1).



The Differences Between PC-Write and DCA

There are three fundamental differences between PC-Write files and DCA
files. These differences dictate the steps required to translate one
to the other. The differences are as follows:

1. Character representation. DCA uses EBCDIC character codes, while
   PC-Write uses ASCII. Therefore, all characters must be translated
   from one internal representation to the other.

2. Record structure. DCA uses a variable length record structure with
   prefix identifiers, while PC-Write uses a simple record-per-line
   structure with the Alt-G font character (ASCII code 11).

   DCA uses a predefined byte sequence to define the structure of a
   data element. Each data structure, whether it holds text or
   parameter definitions, has a specified class and type at its
   beginning and, in most cases, a field that contains its length. In
   addition, each type of structure can only occur in certain places
   within the document.

   All PC-Write text and commands are line oriented. The Alt-G font
   character is used to specify a Ruler line or Dot line. The ordering
   of commands is less constricted than in DCA. Ruler lines, Dot
   lines, and text lines can be freely interspersed.

3. Underlying purpose. DCA is a language designed to define formatted
   documents; PC-Write is an application used to create formatted
   documents. DCA must be broad enough in scope to define virtually
   any formatted document. PC-Write need only define PC-Write
   commands. That means many different DCA commands may produce the
   same PC-Write command. For example, hundreds of fonts can be
   defined in DCA; only a small fraction of these are implemented in
   PC-Write. Some DCA commands have no PC-Write equivalent and vice
   versa.



DCA Document Structure

To understand the process by which PC-Write files are converted to and
from DCA files, it is important to understand the basic structures of
the DCA architecture. At the highest level is the document. The document
is composed of two or three Format Units: Format Unit 1 (Document
Declarations), Format Unit 2 (the Primary Master Format Unit), and an
optional Format Unit 3 (Alternative Master Format Unit). Following the
Format Units, comes one or more Text Units. At the very end of a DCA
document is an End Unit. The following figure illustrates this high
level view of a DCA file:



PC-WRITE DCA CONVERSION GUIDE                                       14

                        +----------------------+
                        |      DCA Document    |
                        +----------+-----------+
                                   |
     +--------------------+--------+-----------+-----------------+
     |                    |                    |                 |
+----+-----+        +-----+----+         +-----+----+      +-----+----+
|  Format  |        |  Format  |         |   Text   |      |   End    |
|  Unit 1  |        | Unit 2/3 |         |  Unit(s) |      |   Unit   |
+----------+        +----------+         +----------+      +----------+


Now let's look at each of these units and their constituent parts.












































15                                       PC-WRITE DCA CONVERSION GUIDE
Format Unit 1

Format Unit 1 is composed of:
o  A required Format Unit Prefix (FUP).
o  A required Document Parameter (DP).
o  Zero or more Punctuation Formats (PFA/PFC).

Every DCA document begins with a Format Unit Prefix followed by
Document Parameters. This is followed by either a Punctuation Format
or Format Unit 2. The following figure shows the structure of Format
Unit 1:
                       +----------------------+
                       |     Format Unit 1    |
                       +----------+-----------+
             +--------------------+--------------------+
             |                    |                    |
       +-----+-----+        +-----+-----+        +-----+-----+
       |  Format   |        |  Document |        |Punctuation|
       |Unit Prefix|        | Parameters|        | Format(s) |
       +-----------+        +-----------+        +-----------+

Format Unit Prefix (FUP). Each Format Unit begins with a Format Unit
Prefix. This marks the beginning of the Format Unit. It contains no
data fields.

Document Parameters (DP). The Document Parameters contain some basic
information about the document itself. This includes the Coded
Graphics Character Set (Standard EBCDIC for PC-Write) and whether (and
for what language) spell checking should occur (off for PC-Write).

Punctuation Formats (PFA/PFC). Punctuation Formats are used to define
the record structure of data that may be merged in later. PC-Write
does not use this structure.



Format Units 2 and 3

Format Units 2 and 3 are identical in structure. These Format Units
are comprised of:
o  A Format Unit Prefix (FUP).
o  A required master format; either a Primary Master Format (PMF) or
   an Alternative Master Format (AMF). The Primary Master Format (PMF)
   is required; the Alternative Format Unit (AMF) is optional.
o  An optional Margin Text Declaration.

The following figure shows the structure of Format Units 2 and 3:

                        +----------------------+
                        |  Format Unit 2/3     |
                        +----------+-----------+
              +--------------------+--------------------+
              |                    |                    |
        +-----+-----+        +-----+-----+        +-----+-----+
        |  Format   |        |Primary/Alt|        |Margin Text|
        |Unit Prefix|        |Mast Format|        |Declaration|
        +-----------+        +-----------+        +-----------+

PC-WRITE DCA CONVERSION GUIDE                                       16
Format Unit Prefix (FUP). The Format Unit Prefix is simply an
identifier that marks the beginning of any Format Unit.

Primary and Alternative Master Format (PMF/AMF). The Primary and
Alternative Master Formats contain most of the formatting information
that must be shared with PC-Write. Each is composed of three required
and seven optional components.

The required fields are Page Image Parameters (PIP), Line Parameters
(LP), and Tab Parameters (TP). The optional components are Line
Numbering (LN), Page Image Numbering (PIN), Print Medium (PM),
Operator Message (OM), Page Formatting Parameters (PFP), Note Format
Parameters (NFP), and Auto-Outline Parameters (AOP).

The following figure shows the subcomponents of the
Primary/Alternative Master Formats:

                         +----------------------+
                         | Primary/Alternative  |
                         |    Master Formats    |
                         +----------+-----------+
      +--------------------+--------+-----------+-----------------+
      |                    |                    |                 |
+-----+-----+        +-----+-----+        +-----+-----+     +-----+-----+
|Page Image |        |   Line    |        |    Tab    |     | Optional  |
|Parameters |        |Parameters |        |Parameters |     |Parameters |
+-----------+        +-----------+        +-----------+     +-----------+

Page Image Parameters (PIP). The Page Image Parameters contain fields
that specify the width and depth of the page, and the first and last
line where body text will be located. Data stored in these fields
corresponds to the .L, .XB, and .XT Dot lines in PC-Write.

Line Parameters (LP). The Line Parameters are the most important store
of formatting data used by PC-Write. This structure specifies the
font, character set, left margin, right margin, line density, line
spacing, alignment state, and line numbering state. Many PC-Write Dot
lines correspond to the LP: .N, .Q, .QQ, .R, .S, .W, .X, .XF, .XH,
.XL, and .XR. In addition, the Ruler line data on margins and
justification and the Alt-letter font commands correspond to the LP.

Tab Parameters (TP). The Tab Parameters contain fields specifying the
type, alignment, and spacing of the tabs. This information corresponds
to the Ruler line in PC-Write.

Optional Parameters. All optional parameters are ignored by PCWTODCA
and DCATOPCW except Page Image Numbering (PIN). This defines line
numbering in PC-Write.

Margin Text Declaration Components. The Margin Text Declaration
contains Margin Text Parameters followed by Margin Text. Together,
these specify headers and footers in the document.

The Type field in the Margin Text block indicates which type of Margin
Text is to be used. The following figure shows the structure of Margin
Text Declarations:


17                                       PC-WRITE DCA CONVERSION GUIDE
                    +---------------------------+
                    |  Margin Text Declaration  |
                    +-------------+-------------+
                        +---------+----------+
                        |                    |
                  +-----+-----+        +-----+-----+
                  |Margin Text|        |  Margin   |
                  |Parameters |        |   Text    |
                  +-----------+        +-----------+


Margin Text Parameters. There are two Margin Text Parameters -- Margin
Parameters Top (MPT) and Margin Parameters Bottom (MPB). Margin
Parameters Top specifies a header. Margin Parameters Bottom indicates
a footer. The MPT and MPB contain fields that specify the starting
line and page of the header or footer.

Margin Text. The Margin Text block contains the actual text that will
make up the header or footer. There are six types of Margin Text:

      Top margin (headers)              Bottom margin (footers)
         all pages:  MTTA                      all pages:  MTBA
         odd pages:  MTTO                      odd pages:  MTBO
         even pages: MTTE                      even pages: MTBE



Text Unit (TU)

The Text Unit is made up of:
o  A Text Unit Prefix (TUP).
o  An optional Format Change Declaration.
o  Zero or more Body Text (BT).

The following figure shows the structure of a Text Unit:

                        +----------------------+
                        |      Text Unit       |
                        +----------+-----------+
              +--------------------+--------------------+
              |                    |                    |
        +-----+-----+        +-----+-----+        +-----+-----+
        | Text Unit |        |Format Chng|        |   Body    |
        |  Prefix   |        |Declaration|        |  Text(s)  |
        +-----------+        +-----------+        +-----------+


Text Unit Prefix (TUP). The Text Unit Prefix marks the beginning of
the Text Unit. It contains no fields.

Format Change Declaration. The optional Format Change Declaration may
be any of the following:
o  Establish Primary Master (EPM).
o  Establish Alternative Master (EAM).
o  Text Unit Format Change (TUFC).
o  Return to Master Format (RTMF).


PC-WRITE DCA CONVERSION GUIDE                                       18
These codes cause the page image, line, and tab parameters to change
instantly to the new format.

Body Text (BT). The Body Text contains three kinds of data:
o  EBCDIC characters.
o  One-Byte Controls.
o  Multibyte Controls.

The following figure shows the structure of Body Text:

                        +----------------------+
                        |      Body Text       |
                        +----------+-----------+
              +--------------------+--------------------+
              |                    |                    |
        +-----+-----+        +-----+-----+        +-----+-----+
        |  EBCDIC   |        | One-Byte  |        | Multibyte |
        |characters |        | Controls  |        | Controls  |
        +-----------+        +-----------+        +-----------+


EBCDIC characters. EBCDIC characters are the IBM equivalent of ASCII.
They are numeric codes that translate to alphabetic and graphic
characters. The actual text characters in a DCA document are stored in
the EBCDIC format. Since PC-Write uses ASCII, the conversion programs
must translate between EBCDIC and ASCII. Appendix F in this Guide
lists the EBCDIC codes.

One-Byte Controls. One-Byte Controls are used to indicate various
kinds of formatting delimiters. Hard and soft page and line breaks,
hyphens, null characters, tabs, and backspaces are all indicated with
One-byte Controls. In addition, superscript and subscript can be
turned on or off with One-byte Controls. Appendix C summarizes the
One-Byte Controls.

Multibyte Controls. Multibyte Controls are sequences of characters
that indicate various changes to the default format. The first
character in a Multibyte Control sequence is always 2B hex. These
Controls indicate such format changes as Begin or End overstrike,
underline, or keep. They are used to insert graphics characters, to
change document parameters, to format blocks of text, and to do number
of other things. Appendix E summarizes the Multibyte Controls.

In addition, major format changes can be accomplished with Multibyte
Controls. The most important single Multibyte Control for PC-Write is
the Begin Line Format Change (BLFC). This command indicates a change
in the Line and/or Tab Parameters. As mentioned above, the Line
Parameters contain data used in many Dot lines. A BLFC will be
followed by a Set Line Parameters (SLP), a Set Tabs (STAB), and an End
Line Format Change (ELFC). The SLP is virtually identical to the Line
Parameters (LP). The STAB is very similar to Tab Parameters (TP). The
Line Format Change represents the DCA equivalent of embedded Ruler
lines, font changes, and most Dot lines.

The DCA format has an important limitation. There is no way to change
the current character width in the middle of a line. Any changes of
PC-Write width fonts (like Pica or Compressed) in the middle of a line

19                                       PC-WRITE DCA CONVERSION GUIDE
cannot be converted and are ignored with a warning.

End Unit (EU)

An End Unit marks the end of a DCA file. It is composed of:
o  An End Unit Prefix (EUP).
o  Optional Body Text.
The following figure shows the structure of an End Unit:

                      +----------------------+
                      |      End Unit        |
                      +----------+-----------+
                        +--------+----------+
                        |                   |
                  +-----+-----+       +-----+-----+
                  | End Unit  |       |   Body    |
                  |  Prefix   |       |   Text    |
                  +-----------+       +-----------+



Summary

When you put all the pieces together, you get the structure
illustrated in the following figure.

                             +----------------------+
                             |      DCA Document    |
                             +----------+-----------+
                                        |
          +--------------------+--------+-----------+-----------------+
          |                    |                    |                 |
     +----+-----+        +-----+----+         +-----+----+      +-----+----+
     |  Format  |        |  Format  |         |   Text   |      |   End    |
     |  Unit 1  |        | Unit 2/3 |         |  Unit(s) |      |    Unit  |
     +----+-----+        +-----+----+         +-----+----+      +-----+----+
          |                    |                    |                 |
   +------+------+      +------+------+      +------+------+      +---+--+
+--+--++--+--++--+--++--+--++--+--++--+--++--+--++--+--++--+--++--+--++--+--+
| FUP || DOC || PFA || FUP ||PRIM/||MARGN|| TUP ||FORMT||BODY || EUP ||BODY |
|     ||PARMS||/PFC ||     || ALT || TXT ||     ||CHNGE||TEXT ||     ||TEXT |
+-----++-----++-----++-----++--+--++--+--++-----++-----++--+--++-----++-----+
                               |      |                    |
             +-----------------+      +--+                 +--+
      +------+------+------+      +------+------+      +------+------+
   +--+--++--+--++--+--++--+--++--+--++--+--++--+--++--+--++--+--++--+--+
   |PAGE ||LINE || TAB ||PAGE || MPT || MTT?||MARGN||EBC- ||ONE- ||MULTI|
   |PARMS||PARMS||PARMS||NUMB ||/MPB ||/MTB?|| TXT ||DIC  ||BYTE ||BYTE |
   +-----++-----++-----++-----++-----++-----++-----++-----++-----++-----+









PC-WRITE DCA CONVERSION GUIDE                                       20
```
{% endraw %}

## DCAMAN2.DOC

{% raw %}
```
Understanding the DCA to PC-Write Conversion Process

To translate from DCA to PC-Write, the following steps are taken by
the DCATOPCW program:

1. The first blocks of the DCA document always relate to the overall
   document structure. There is always a Primary and sometimes an
   Alternative Master Format (PMF and AMF) defined, containing Page
   Image Parameters (PIP), Line Parameters (LP), and Tab Parameters
   (TP). Based on the Primary Master's PIP, LP, and TP, a Ruler line
   and an initial set of Dot lines are generated. These include the
   .L, .M, .S, .X, and .R commands and may include others.

   The PIP contains the data for the .L, .XB, and .XT Dot lines. What
   this data is depends on the information received from the DCA file.
   The LP contains the data for the .R, .Q, .X, .XF, .XH, .XL, and .XR
   Dot lines, as well as the margins for the Ruler line. The TP
   contains data for the tabs used in the Ruler line.

2. Next, the optional document parameters are evaluated. These include
   the Page Image Number (PIN), the Margin Text Parameters (MPT and
   MPB), and the margin text (MTTA, MTTE, MTTO, MTBA, MTBE, and MTBO).
   Other optional parameters -- Page Format Parameters (PFP), Print
   Medium (PM), Operator Message (OM), Auto-Outline Parameters (AOP),
   and Note Format Parameters (NFP) -- are ignored.

   The PIN provides data for a possible .N Dot line and for $$$ in the
   .H or .F Dot lines. The various margin parameters (MPT, MPB, MTT?,
   and MTB?) define the .H and .F Dot lines.

3. Following the optional parameters are the Text Unit Prefix (TUP)
   and the Body Text (BT). This section contains primarily EBCDIC text
   characters that must be translated to ASCII. It may also contain
   single byte control codes that define such things as underlining,
   superscript, subscript, hard line and page ends, and backspaces.
   And, at any time, the format options in effect may be changed by a
   Line Format Change (LFC). An LFC will contain a Set Line Parameters
   (SLP) and a Set Tabs (STAB). These are virtually identical to the
   LP and TP described above.

   Based on the information found in the Text Unit, additional
   embedded font characters, Dot lines, and Ruler lines may be
   constructed to reflect changes in fonts, margins, and tabs.

4. In addition to the LFC, there may also be calls to change the
   global parameters with four global format change commands --
   Establish Primary Master (EPM), Establish Alternative Master (EAM),
   Text Unit Format Change (TUFC), or Return to Master Format (RTMF).
   These codes cause the page image, line, and tab parameters to
   change instantly to the new format. They will also construct new
   Dot lines or Ruler lines.

5. The end of a DCA document is represented by the End Unit Prefix
   (EUP). When this is encountered, you are notified that the
   conversion process has completed. You may now use the new PC-Write
   file.


21                                       PC-WRITE DCA CONVERSION GUIDE
Understanding the PC-Write to DCA Conversion Process

To translate from PC-Write to DCA, a similar process is followed by
the PCWTODCA program.

1. The ED.DEF or PR.DEF is examined for any Ruler line or Dot lines.
   When Ruler lines or Dot lines are found, the relevant data is
   extracted and stored for the creation of Page Image Parameters
   (PIP), Line Parameters (LP or SLP), and Tab Parameters (TP or
   STAB).

2. The PC-Write file is examined to the first line of text. If Ruler
   lines or Dot lines are encountered, they are treated as described
   in step one. In addition, there may be headers, footers, or font
   definitions. These are also stored in the appropriate fields.

3. Before any text is processed, the header blocks for the DCA
   document are constructed. These begin with a Document Declarations
   Format Unit, a Primary Master Format Unit (including the PIP, LP,
   and TP structures), and an Alternative Master Format Unit. The PMF
   and AMF will be identical since there is only one master format in
   PC-Write. If headers or footers are found, the optional Margin Text
   components are constructed.

4. Text from the PC-Write file becomes a Text Unit, consisting of a
   Text Unit Prefix (TUP), a Body Text marker (BT), and converted
   EBCDIC. Font changes, Ruler lines and Dot lines are handled as Line
   Format Changes. Set Line Parameters (SLP) and Set Tabs (STAB)
   fields reflect these changes.

5. When the end of the file is encountered, an End Unit Prefix (EUP)
   is generated and you are notified that the conversion process has
   completed. You may now use the new DCA file.

























PC-WRITE DCA CONVERSION GUIDE                                       22
The DCA List Utility

The DCA List Utility is a program to help you interpret the contents
of your DCA files. You can use it as a tool to understand the
structure of a DCA-RFT file.

The program is simple to run, and we recommend that you use it at
least once in order to see how DCA files are put together.



Running the DCA List Utility

To run the DCA list utility:

1. If you have a floppy disk system, place your DCA conversion working
   diskette in drive A and the disk that contains the file you want
   interpreted in drive B. If you are on a hard disk, change to your
   PC-Write subdirectory.

2. At the DOS prompt, type:
      DCALIST

   The program prompts you as follows:
      DCA Filename:

3. Type the name of the DCA file you want to have interpreted and
   press Enter. You are then prompted as follows:
      Output Filename:

4. Type a valid file name and press Enter. If you would like the
   output to go to the screen, do not type anything, just press Enter.
   Now the program creates the output file. When it finishes, it
   displays the following message:
      Conversion completed: "nn" characters processed.

   where "nn" is the number of characters in the file. You can now
   print and examine the output file.

EXAMPLE
You want to create a list of the file TEST.DCA and place it in the
file TEST.DMP. These files and the DCA programs are in the PC-Write
subdirectory of your hard disk. First, change to your PC-Write
subdirectory. Now, type DCALIST and press the Enter key. The screen
responds with:
   DCA Filename:

Type TEST.DCA, and press the Enter key. Now the screen says:
   Output Filename:

Type TEST.DMP, and press Enter. The program runs, and then the screen
says:
   Conversion completed: 781 characters processed.

Now you can edit or print this file and examine its contents.



23                                       PC-WRITE DCA CONVERSION GUIDE
Program Options

You can include a number of options on the command line when you run
the DCALIST program. You can:
o  List the DCA and output file names.
o  Set the maximum number of characters to process.
o  Send the program output to the screen, to a file, or to both.

To run the DCALIST program with options from the command line:

o  Type the DCALIST command as follows:
      DCALIST [dca-filename] [out-filename] [number] [-d]

The parameters for the command line operation are as follows:
   dca-filename     The name of the DCA file to be processed.
   out-filename     The name of the output file.
   number           The number of characters to be processed in the
                    DCA file.
   -d               A flag that forces the output to the screen as
                    well as the output file.

All four parameters are optional. The file names and the number of
characters to process must be specified in the order shown; the -d
flag can be anywhere on the command line.

Here are the ways in which these parameters are used in the command
line operation:
o  If you don't specify any parameters, the program runs in the normal
   interactive mode prompting you for the file names.
o  If you just specify the DCA file name, the output is sent to the
   screen.
o  If you specify both the DCA and output file names, the output is
   sent only to the output file.
o  If you specify the DCA file name, an output file name, and a
   number, the number is interpreted as the maximum number of
   characters to process.
o  If you specify the -d flag, the output is sent to the screen and to
   the output file (if one is specified).

EXAMPLES
Here are some examples running the DCALIST program from the command
line:
   DCALIST test.dca                   This sends the output to the
                                      screen.
   DCALIST test.dca test.dmp          This sends the output to the
                                      file TEST.DMP.
   DCALIST test.dca test.dmp 2000     This causes the DCALIST program
                                      to process only the first 2000
                                      characters of the DCA file
                                      TEST.DCA.
   DCALIST test.dca test.dmp -d       This forces the output of the
                                      DCALIST program to go to the
                                      screen as well as to the output
                                      file.




PC-WRITE DCA CONVERSION GUIDE                                       24
Interpreting the Output

PC-Write's DCA dump utility is designed to give you formatted lists of
standard DCA-RFT files. The output it creates can be sent to a file or
viewed on the screen. This output is comprised of four kinds of
information:
1.  Structured fields.
2.  Multibyte controls.
3.  Field Values.
4.  Data.

A sample of the output for a small file is shown at the end of this
section. Refer to it as necessary when reading the following
explanations.



Structured Fields

When the DCALIST program encounters a structured field, it lists its
acronym and labels and gives the values of its length, class, type,
and format fields. Then, if there are additional field values, it
lists them sequentially. All values are given in hexadecimal form.

DCALIST lists the acronyms for structured fields in all caps unless
they are subcomponents of another structured field. If the structured
field is a subcomponent, the program indents the name two spaces and
lists it with initial caps only.

In the sample output file that follows, the top level stuctured fields
are FUP, DP, PMF, MPT, MPB, TUP, BT, and EUP. The subcomponent
stuctured fields are Pip, Lp, and Tp. Notice the description line for
each structured field showing its length, class, type, and format
values.


Multibyte Controls

When DCALIST encounters a multibyte control, it lists its acronym
indented four spaces and in lower case. It gives labels and field
values for its class, type, and count.

The multibyte controls in the sample output file are blfc, slp, stab,
and elfc. Together, these define a Line Format Change. The effect of
the sample Line Format Change is to redefine the current font from 10
point to 12 point. Notice that DCALIST lists each multibyte control
with its class, type, and count.


Field Values

All field values for either structured fields or multibyte controls
are listed immediately below, sequentially in groups of 12. The list
program always gives field values in hexadecimal form.

In the sample file there are field values associated with DP, Pip, Lp,
Tp, MPT, MPB, TUP, slp, and stab. Notice that the count in the

25                                       PC-WRITE DCA CONVERSION GUIDE
associated structured field or multibyte control always includes the
number of fields.


Data

DCALIST displays textual data in a standard hexadecimal/text format.
The first column contains the offset. Columns 10 through 56 contain
the hexadecimal representations of the EBCDIC characters. Columns 64
through 79 contain the character equivalents of the EBCDIC characters.
When the characters are not displayable, a dot (.) is displayed in the
text section.

The sample file contains three data sections. Each is associated with
a BT (Body Text), although other structured fields can have data
associated with them. The first data section starts, "This is what a
typical text line." Notice the offset and the hexadecimal
representations shown next to the text. The second text section
follows the Line Format Change and is printed in 12 point. The final
section contains only the final Page End character (seen as a dot in
the text section).



Summary

The information provided by the DCALIST utility helps you understand
and interpret a DCA file. The only things not explicitly given are the
meanings of field values and nonprintable characters. In the case of
field values, you must consult the Document Content Architecture:
Revisable-Form-Text Reference Manual from IBM to interpret field
position. The nonprintable characters may be interpreted by looking up
their hexadecimal codes in the section of this manual on one-byte
controls.



DCA Sample File

Here is a sample PC-Write file:

   .R:E
   This is what a typical text line looks like when displayed by the
   list utility.
   .Q:E

   .R:F
   This is what it looks like after a Line Format Change
   has been used to change the font.
   .Q:F

When we convert this file to DCA format with the PCWTODCA program, we
can use the DCALIST list utility on it. Here is the list produced by
DCALIST:




PC-WRITE DCA CONVERSION GUIDE                                       26
FUP          Length=05;    Class=E1;    Type=03;    Format= 00

DP           Length=1A;    Class=E2;    Type=05;    Format= 00
               00 01 01 00 00 00 00 00 00 00 00 00
               00 00 00 00 00 00 00 FF FF

FUP          Length=05;    Class=E1;    Type=03;    Format= 00

PMF          Length=5E;    Class=E2;    Type=01;    Format= 00

  Pip        Length=13;    Class=E5;    Type=07;    Format= 00
               00 00 00 00 2F D0 3D E0 01 E0 01 E0
               37 50

  Lp         Length=1E;    Class=E6;    Type=01;    Format= 00
               00 00 00 1A 00 90 01 00 67 01 00 00
               90 33 30 00 F0 02 01 00 06 00 64 01
               04

  Tp         Length=28;    Class=E6;    Type=02;    Format= 00
               00 00 00 00 0F 00 00 10 00 00 15 00
               00 1A 00 00 1F 00 00 24 00 00 29 00
               00 2E 00 00 33 00 00 38 00 00 3D

MPT          Length=08;    Class=E5;    Type=01;    Format= 00
               00 00 F0

MPB          Length=08;    Class=E5;    Type=04;    Format= 00
               00 38 40

TUP          Length=0B;    Class=E1;    Type=04;    Format= 00
               F0 F0 F0 F1 F0 F0

BT           Length=A2;    Class=E8;    Type=07;    Format= 00

Offset                    Hexadecimal                              TEXT
 170    E3 88 89 A2 40 89 A2 40 A6 88 81 A3 40 81 40 A3      This is what a t
 180    A8 97 89 83 81 93 40 A3 85 A7 A3 40 93 89 95 85      ypical text line
 190    40 93 96 96 92 A2 40 93 89 92 85 40 A6 88 85 95       looks like when
 1A0    40 84 89 A2 97 93 81 A8 85 84 40 15 82 A8 40 A3       displayed .by t
 1B0    88 85 40 84 A4 94 97 40 A4 A3 89 93 89 A3 A8 4B      he dump utility.
 1B2    06 06                                                ..

BT           Length=AA;    Class=E8;    Type=07;    Format= 00

    blfc        class=D4;   type=02;  count=2

    slp         class=D4;   type=05;  count=1B
               00 00 00 50 00 78 01 00 01 01 00 00
               78 2A A8 00 F0 02 01 00 06 00 64 01
               04

    stab        class=D2;   type=01;  count=24
               00 00 00 0F 00 00 10 00 00 15 00 00
               1A 00 00 1F 00 00 24 00 00 29 00 00
               2E 00 00 33 00 00 38 00 00 3D


27                                       PC-WRITE DCA CONVERSION GUIDE
    elfc        class=D4;   type=06;  count=2

Offset                    Hexadecimal                              TEXT
 212    E3 88 89 A2 40 89 A2 40 A6 88 81 A3 40 89 A3 40      This is what it
 222    93 96 96 92 A2 40 93 89 92 85 40 81 86 A3 85 99      looks like after
 232    40 81 40 D3 89 95 85 40 C6 96 99 94 81 A3 40 C3       a Line Format C
 242    88 81 95 87 85 40 88 81 A2 40 82 85 85 95 40 A4      hange has been u
 252    A2 85 84 40 A3 96 40 15 83 88 81 95 87 85 40 A3      sed to .change t
 25C    88 85 40 86 96 95 A3 4B 06 0C                        he font...

EUP          Length=05;    Class=E1;    Type=06;    Format= 00

BT           Length=06;    Class=E8;    Type=07;    Format= 00

Offset                    Hexadecimal                              TEXT
 267    0C                                                   .










































PC-WRITE DCA CONVERSION GUIDE                                       28
Appendix A: PC-Write/DCA Equivalencies

The DCATOPCW and PCWTODCA programs convert files between PC-Write and
DCA formats. To do this, a set of equivalencies has been established
between the two specifications. Below is an overview of these
equivalencies. The PC-Write commands listed are the only ones that can
be translated into DCA format. All others are ignored.


Fonts

There are two kinds of fonts defined in PC-Write -- width and non-
width. There are also font characters used for PC-Write commands and
the Alt-G font used to start Guide lines.

Width fonts

Font Description     Data Structure          Field          Value

C (Compressed)       LP,SLP                  GFID            215
D (Double wide)      LP,SLP                  GFID            240
E (Elite)            LP,SLP                  GFID             80
F (Fast)             LP,SLP                  GFID             26
P (Pica)             LP,SLP                  GFID             26
Q (Quality)          LP,SLP                  GFID             80
V (Variable)         LP,SLP                  GFID            154

Non-Width Fonts

                               Data Stucture
Font Description        On                   Off

B (Bold)                BBLD                 EBLD
H (Superscript, higher) Hex 09               Hex 09
I (Italics)             Ignored
J (Jade Green)          Ignored
L (Subscript, lower)    Hex 3F               Hex 3F
M (Marine Blue)         Ignored
O (Overstrike)          BOS                  EOS
R (Red)                 Ignored
S (Second strike)       BBLD                 EBLD
U (Underscore)          BUS                  EUS
W (Double underline)    BUS                  EUS
X (User-defined)        Ignored
Y (Yellow)              Ignored
Z (User-defined)        Ignored

Command Fonts

Font Description       Data Structure

A (Align)               Ignored
K (Keep Paragraph)      Ignored
N (Number)              Ignored
T (Top-of-Page)         RPE,PE



29                                       PC-WRITE DCA CONVERSION GUIDE
Ruler Lines

Ruler line settings are stored as follows:

Ruler Command                DCA      Field
                          Structure

Tabs (T,D)                TP,STAB     All
L (Left margin)           LP,SLP      Left Margin
M (Old left margin)       Ignored
P (Paragraph margin)      Ignored
Q (Old paragraph margin)  Ignored
R (Right margin)          LP,SLP      Right Margin / Alignment State
C (Center)                LP,SLP      Right Margin / Alignment State
J (Justify)               LP,SLP      Right Margin / Alignment State
F (Flush right)           LP,SLP      Right Margin / Alignment State
A (Auto-reformat on)      Ignored
N (Auto-reformat off)     Ignored
@ (Fixed line spacing)    LP,SLP      Line Spacing



Dot Lines

PC-Write
Command      Description                 DCA Structure   Field

..           Comment line                Ignored
.-           Begin reformat protection   EFT (End
                                         Formatted Text)
.+           End reformat protection     BFT (Begin
                                         Formatted Text)
.DD          Begin footnote on page      Ignored
.DB          Begin footnote entry        Ignored
.DQ          Quit footnote entry         Ignored
.D           Footnote entry begin/end    Ignored
.DF:filename Footnote file               Ignored
.DH:text     Footnote header (fence)     Ignored
.DM:number   Footnote spacing            Ignored
.E           Entire text begin/end       KEEP (toggle)
.EB          Entire text begin           KEEP Begin
.EQ          Entire text quit            KEEP End
.E:number    Entire text, print lines    Carriage Return
                                         (# times)
.EL:length   Inserted text on page       Ignored
.EA          Automatic page breaks on    Ignored
.EN          Automatic page breaks off   Ignored
.F:text      Footer line on all pages    MPB, MTBA       All
.FL:text     Footer line on left pages   MPB, MTBO       All
.FR:text     Footer line on right pages  MPB, MTBE       All
.FQ          Reset to no footer lines    MPB, MTBA
.H:text      Header line on all pages    MPB, MTTA       All
.HL:text     Header line on left pages   MPB, MTTO       All
.HR:text     Header line on right pages  MPB, MTTE       All
.HQ          Reset to no header lines    MPB, MTBA
.I:text      Index entry                 Ignored
.IF:filename Index file name             Ignored

PC-WRITE DCA CONVERSION GUIDE                                       30
.IW:number   Index entry minimum width   Ignored
.IX:number   Index entry symbol space    Ignored
.K:text      TOC entry                   Ignored
.KF:filename TOC file name               Ignored
.KW:number   TOC entry minimum width     Ignored
.KX:number   TOC entry symbol space      Ignored
.L:length    Page length                 PIP             Page Image Depth
.LB:length   Length of body text         PIP             Last Body Text
                                                         Line
.M:number    Set multiple line spacing   LP,SLP          Line Spacing
.N:number    Number for this page        PIN
.O:filename  Output file                 Ignored
.PL:text     Force left page             Ignored
.PR:text     Force right page            Ignored
.Q:letter    Stop a Regular font         LP,SLP          GFID
.QQ          Stop all Regular fonts      LP,SLP          GFID
.R:letter    Start a Regular font        LP,SLP          GFID
.S:length    Set line spacing per inch   LP,SLP          Line Spacing
.T:filename  Change the input file       Changes the
                                         input file
.TI:filename Insert unprocessed input    Ignored
.TL:length   Inserted material adjust    Ignored
.TT:text     Insert text or ASCII codes  Ignored
.U           Keyboard input              Ignored
.U:prompt    Prompt for keyboard input   Ignored
.W:number    Width of header/footer      LP,SLP          Left Margin
.X:number    Extra margin on all pages   LP,SLP          Left Margin
.XB:length   Bottom margin               PIP             Last Body Text
                                                         Line
.XF:number   Extra footer left margin    LP,SLP          Left Margin
.XH:number   Extra header left margin    LP,SLP          Left Margin
.XL:number   Extra margin on left pages  LP,SLP          Left Margin
.XR:number   Extra margin on right pages LP,SLP          Left Margin
.XT:length   Top margin                  PIP             First Body Text
                                                         Line


PC-Write Features Not Included

The important PC-Write features with no DCA equivalents are:
o  Index.
o  Table of Contents.
o  Footnotes.
o  Italics.
o  Width font change in mid-line.


Limitations

Only Dot lines and Ruler lines are interpreted in edit and print
control files.

Beyond this, these tools should offer a complete translation between
PC-Write and DCA-RFT.




31                                       PC-WRITE DCA CONVERSION GUIDE
Appendix B: Error Messages

The following is a list of the error messages you may encounter when
you use PCWTODCA. Most of these have to do with Dot lines that the
program does not recognize. They are only issued as warnings; PCWTODCA
will just ignore the unrecognized commands and continue.

(WARNING 1) INCORRECT DOT L COMMAND -- Line "nn" or in ECF file.
   The program has encountered an invalid .L or .LB Dot line at line
   "nn" of the file or in the edit control file. The character
   following the .L or .LB should be a colon followed by a number.

(WARNING 2) FILE STACK LIMIT EXCEEDED -- Line "nn" or in ECF file.
   You have nested more than eight .T Dot lines. The eighth command is
   on line "nn" of the file or in the edit control file. Eight is the
   maximum number of files you can nest with .T Dot lines.

(WARNING 3) INCORRECT DOT T COMMAND -- Line "nn" or in ECF file.
   You have specified an invalid or nonexistent file with a .T Dot
   line on line "nn" of the file or in the edit control file.

(WARNING 4) EDIT CONTROL FILE NOT FOUND -- USING DEFAULTS.
   You have specified an invalid or nonexistent edit control file.

(WARNING 5) INCORRECT DOT H COMMAND -- Line "nn" or in ECF file.
   You have specified an invalid .H Dot line on line "nn" of the file
   or in the edit control file.

(WARNING 6) INCORRECT DOT F COMMAND -- Line "nn" or in ECF file.
   You have specified an invalid .F Dot line on line "nn" of the file
   or in the edit control file.

(WARNING 7) INCORRECT DOT X COMMAND -- Line "nn" or in ECF file.
   You have specified an invalid .X Dot line on line "nn" of the file
   or in the edit control file. .X Dot lines should follow one of the
   following formats:
      .X:number     .XB:length     .XH:number     .XR:number
      .XB:length    .XF:number     .XL:number     .XT:length

(WARNING 8) INCORRECT DOT R COMMAND -- Line "nn" or in ECF file.
   You have specified an invalid .R Dot line on line "nn" of the file or
   in the edit control file. This command should be in the form .R:letter,
   where "letter" is a letter specifying the desired font.

(WARNING 9) INCORRECT DOT Q COMMAND -- Line "nn" or in ECF file.
   You have specified an invalid .Q Dot line on line "nn" of the file or
   in the edit control file. This command should be in the form .Q:letter,
   where "letter" is a letter specifying the desired font.

(WARNING 10) UNRECOGNIZED DOT COMMAND: .command -- Line "nn" or in ECF file.
   You have specified a Dot line that PC-Write does not recognize on
   line "nn" of the file or in the edit control file. Check your file.

(WARNING 11) CANNOT TRANSLATE MIDLINE WIDTH FONT CHANGE: (font letter)
-- Line "nn".
   DCA doesn't allow changes in width font in the middle of a text
   line, only at the beginning. The font change will be ignored.

PC-WRITE DCA CONVERSION GUIDE                                       32
Appendix C: Structured Field Summary

Abrv Class Type        Name                        Description

FUP    E1   03  Format Unit Prefix         Identifier at Format Unit start
TUP    E1   04  Text Unit Prefix           Identifier at Text Unit start
EUP    E1   06  End Unit Prefix            Identifier marking final unit
BT     E8   07  Body Text                  Marks the start of a text block
EPM    E3   01  Establish Primary Master   Defines current format as Prim.
EAM    E3   02  Establish Alternative      Defines current format as Alt.
                Master
RTMF   E3   03  Return to Master Format    Sets all param. to Master Format
PMF    E2   01  Primary Master Format      Defines param. for Primary Master
AMF    E2   02  Alternative Master Format  Defines param. for Alt. Master
DP     E2   05  Document Parameters        Defines document parameters
TUFC   E2   04  Text Unit Format Change    Change parameters for duration
                                           of Text Unit
PM     E4   02  Print Medium               Defines parameters for the print
                                           medium
OM     E4   03  Operator Message           Defines a message for operator
PIP    E5   07  Page Image Parameters      Define Page Image (margins)
PIN    E5   08  Page Image Numbering       Define Page Numbering
MPT    E5   01  Margin Text Parameters,    Define Header Information
                Top
MPB    E5   04  Margin Text Parameters,    Define Footer Information
                Bottom
MTTA   E8   01  Margin Text, Top, All      Header text (odd and even pages)
MTBA   E8   04  Margin Text, Bottom, All   Footer text (odd and even pages)
LP     E6   01  Line Parameters            Fonts, margins, justification,
                                           spacing
TP     E6   02  Tab Parameters             Tab type, alignment, and spacing
LN     E6   03  Line Numbering             Line numbering parameters
PFA    E9   01  Punctuation Format         Arithmetic parameters
PFC    E9   02  Punctuation Format         Character parameters
MTTO   E8   02  Margin Text, Top, Odd      Header text (odd pages)
MTTE   E8   03  Margin Text, Top, Even     Header text (even pages)
MTBO   E8   05  Margin Text, Bottom, Odd   Footer text (odd pages)
MTBE   E8   06  Margin Text, Bottom, Even  Footer text (even pages)
AOP    E9   04  Auto-Outline Parameters    Define outline parameters
NFP    E9   03  Note Format Parameters     Define footnote parameters
PFP    E9   05  Page Formatting Param.     Set max and min values for page
                                           formats
















33                                       PC-WRITE DCA CONVERSION GUIDE
Appendix D: Multibyte Controls

Abrv Class Type         Name                      Description

SFG    D1   05  Set CFID through GFID     Set font and its attributes
SCG    D1   01  Set GCGID through GCID    Set graphic character set
RLM    D2   0B  Release Left Margin       Allow backspace inside left
                                          margin
RMF    D4   13  Return to Master Font     Changes font back to Master font
IEG    D1   15  Insert Escaped Graphic    Allows insertion of special
                                          character
STAB   D2   01  Set Tabs                  Sets position and type of
                                          horizontal tabs
ATF    D4   0B  Align Text Field          Marks a field to be aligned
ATL    D4   0F  Align Text Line           Marks a text line to be aligned
BK     D4   62  Begin Keep                Marks start of text to keep
                                          together
EK     D4   66  End Keep                  Marks end of text to keep
                                          together
BOS    D4   72  Begin Overstrike          Start overstrike of text
EOS    D4   76  End Overstrike            End overstrike of text
BUS    D4   0A  Begin Underscore          Start underscore of text
EUS    D4   0E  End Underscore            End underscore of text
PPIN   D4   47  Print Page Image Number   Print the page number
PTUN   D4   63  Print Text Unit Name      Print the name of the text unit
DPS    D4   90  Display Prompt and Stop   Prompt operator for input
BLM    D4   7A  Begin Linguistic Mark     Start of special word/syllable
ELM    D4   7E  End Linguistic Mark       End of special word/syllable
BLFC   D4   02  Begin Line Format Change  Start change of document param.
ELFC   D4   06  End Line Format Change    End change of document param.
SLP    D4   05  Set Line Parameters       Change line parameters in text
RMLF   D4   04  Return to Master Line     Change document parameters back
                Format                    to Master
BCL    D8   62  Begin Column Layout       Start of identifiable column
ECL    D8   66  End Column Layout         End of identifiable column
SSCA   D8   82  Set Spelling Check        Turn on/off spelling checker
                Attributes
SVA    D2   35  Set Visual Attributes     Set attributes of video display
IU     D9   81  Include Unit              Include external text units
INS    D9   82  Insert                    Include external data
AO     D9   6A  Auto-Outline              Set param. for outline creation
NR     D9   85  Note Reference            Location where footnote should go
NTR    D9   86  Note Text Reference       Location of footnote reference
NPD    D8   95  Note Partition Delimiter  Marks beginning of footnote text
LPO    D8   96  Locate Process Output     Marks where to insert note
BFT    D8   6A  Begin Formatted Text      Start of text area to format
EFT    D8   6E  End Formatted Text        End of text area to format
CWB    D8   94  Conditional Word Break    Place in word where line break
                                          is okay









PC-WRITE DCA CONVERSION GUIDE                                       34
Appendix  E: One-Byte Controls

Abrv  Code         Name                         Description

BS     16   Backspace                   Move back one space
CRE    15   Carriage Return             Move down one line and to left
                                        margin
HT     05   Horizontal Tab              Move forward to next tab
IT     39   Indent Tab                  Insert tab at beginning of
                                        paragraph
INX    25   Index                       Move down one line (line feed)
IRT    33   Index Return                Move down one line and to left
                                        margin
NUL    00   Null                        No action
NBS    36   Numeric Backspace           Move backward one font width
NSP    E1   Numeric Space               Move forward one font width
PE     0C   Page End                    End of Text Unit
RCR    06   Required Carriage Return    Move down one line and to left
                                        margin
HYP    60   Required Hyphen             Place a hyphen at this location
RPE    3A   Required Page End           Acts as form feed
RSP    41   Required Space              Hard space
SP     40   Space                       Soft space
SBS    38   Subscript                   Start subscript text
SUB    3F   Substitute                  Character to substitute for
                                        invalid characters
SPS    09   Superscript                 Start superscript of text
SHY    CA   Syllable Hyphen             Location of optional hyphen
UBS    1A   Unit Backspace              Move backward one PSM unit
WUS    23   Word Underscore             Toggles word underlining
ZICR   0D   Zero Index Carriage Return  Move to left margin




























35                                       PC-WRITE DCA CONVERSION GUIDE
Appendix F: ASCII to EBCDIC Conversion Chart

  ASCII     EBCDIC        ASCII     EBCDIC        ASCII     EBCDIC
Code Char  Code Char    Code Char  Code Char    Code Char  Code Char

032  sp    064  sp      070  F     198  F       108  l     147  l
033  !     079  !       071  G     199  G       109  m     148  m
034  "     127  "       072  H     200  H       110  n     149  n
035  #     123  #       073  I     201  I       111  o     150  o
036  $     091  $       074  J     209  J       112  p     151  p
037  %     108  %       075  K     210  K       113  q     152  q
038  &     080  &       076  L     211  L       114  r     153  r
039  '     125  '       077  M     212  M       115  s     162  s
040  (     077  (       078  N     213  N       116  t     163  t
041  )     093  )       079  O     214  O       117  u     164  u
042  *     092  *       080  P     215  P       118  v     165  v
043  +     078  +       081  Q     216  Q       119  w     166  w
044  ,     107  ,       082  R     217  R       120  x     167  x
045  -     096  -       083  S     226  S       121  y     168  y
046  .     075  .       084  T     227  T       122  z     169  z
047  /     097  /       085  U     228  U       123  {     192  {
048  0     240  0       086  V     229  V       124  |     106  |
049  1     241  1       087  W     230  W       125  }     208  }
050  2     242  2       088  X     231  X       126  ~     161  ~
051  3     243  3       089  Y     232  Y       127        078  *
052  4     244  4       090  Z     233  Z       128  *     104  *
053  5     245  5       091  [     074  [       129  *     220  **
054  6     246  6       092  \     224  \       130  *     081  *
055  7     247  7       093  ]     090  ]       131  *     066  *
056  8     248  8       094  ^     190  ^       132  *     067  *
057  9     249  9       095  _     109  _       133  *     068  *
058  :     122  :       096  `     121  `       134  *     071  *
059  ;     094  ;       097  a     129  a       135  *     072  *
060  <     076  <       098  b     130  b       136  *     082  *
061  =     126  =       099  c     131  c       137  *     083  *
062  >     110  >       100  d     132  d       138  *     084  *
063  ?     111  ?       101  e     133  e       139  *     087  *
064  @     124  @       102  f     134  f       140  *     086  *
065  A     193  A       103  g     135  g       141  *     088  *
066  B     194  B       104  h     136  h       142  *     099  *
067  C     195  C       105  i     137  i       143  *     103  *
068  D     196  D       106  j     145  j       144  *     113  *
069  E     197  E       107  k     146  k       145  *     156  *

Many characters do not translate directly from ASCII to EBCDIC:

*   indicates an ASCII character that translates directly to EBCDIC.
**  indicates an ASCII box drawing character that translates to EBCDIC
    character 169.
*** indicates an ASCII character that translates to EBCDIC character 112.

Note: "sp" in the above chart means space.
Note: When the DCATOPCW program translates the EBCDIC characters of
a DCA file to ASCII, untranslatable EBCDIC characters become ASCII
character 237.



PC-WRITE DCA CONVERSION GUIDE                                       36


  ASCII     EBCDIC        ASCII     EBCDIC        ASCII     EBCDIC
Code Char  Code Char    Code Char  Code Char    Code Char  Code Char

146  *     158  *       183  **    169  **      220  **    169  **
147  *     203  *       184  **    169  **      221  **    169  **
148  *     204  *       185  **    169  **      222  **    169  **
149  *     205  *       186  **    169  **      223  **    169  **
150  *     219  *       187  **    169  **      224  ***   112  ***
151  *     221  *       188  **    169  **      225  *     089  *
152  *     223  *       189  **    169  **      226  ***   112  ***
153  *     236  *       190  **    169  **      227  ***   112  ***
154  *     252  *       191  **    169  **      228  ***   112  ***
155  *     176  *       192  **    169  **      229  ***   112  ***
156  *     177  *       193  **    169  **      230  *     160  *
157  *     178  *       194  **    169  **      231  ***   112  ***
158  *     179  *       195  **    169  **      232  ***   112  ***
159  *     180  *       196  **    169  **      233  ***   112  ***
160  *     069  *       197  **    169  **      234  ***   112  ***
161  *     085  *       198  **    169  **      235  ***   112  ***
162  *     206  *       199  **    169  **      236  ***   112  ***
163  *     222  *       200  **    169  **      237  ***   112  ***
164  *     073  *       201  **    169  **      238  ***   112  ***
165  *     105  *       202  **    169  **      239  ***   112  ***
166  *     154  *       203  **    169  **      240  ***   112  ***
167  *     155  *       204  **    169  **      241  *     143  *
168  *     171  *       205  **    169  **      242  ***   112  ***
169  **    169  **      206  **    169  **      243  ***   112  ***
170  *     186  *       207  **    169  **      244  ***   112  ***
171  *     184  *       208  **    169  **      245  ***   112  ***
172  *     183  *       209  **    169  **      246  *     161  Hard-Hyphen
173  *     170  *       210  **    169  **      247  ***   112  ***
174  *     138  *       211  **    169  **      248  *     144  *
175  *     139  *       212  **    169  **      249  ***   112  ***
176  **    169  **      213  **    169  **      250  *     065  Required space
177  **    169  **      214  **    169  **      251  ***   112  ***
178  **    169  **      215  **    169  **      252  *     250  *
179  **    169  **      216  **    169  **      253  *     234  *
180  **    169  **      217  **    169  **      254  ***   112  ***
181  **    169  **      218  **    169  **      255  *     000  Null
182  **    169  **      219  **    169  **
















37                                       PC-WRITE DCA CONVERSION GUIDE

```
{% endraw %}

## FILE1295.TXT

{% raw %}
```
Disk No: 1295
Program Title:  DCA CONVERSION
PC-SIG version: 1

DCA CONVERSION climbs two mighty compatability mountains and brings to
the world of Shareware solutions to problems IBM has long ignored.  The
biggest involves a duo of programs that convert text on IBM mainframe
environments from EBCDEC to microcomputer ASCII.  This allows mainframes
to share files that were created with PC-WRITE.  Likewise, PC-WRITE
files can be converted to EBCDEC for the most part and sent to
mainframes.

The same programs allow microcomputers using different wordprocessing
programs to communicate.  CDA CONVERSION lets PC-Write transfer files
between any program that will accept DCA files.  Many popular programs
will accept DCA files including Ventura desktop publishing.

Usage:  Conversion of DCA to PC-WRITE and PC-WRITE TO DCA.

Special Requirements:  PC-WRITE.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

READ     ME   Program description.
WORKDCA  BAT  Copies program to disk.
DCAMAN1  DOC  Half of documentation text.
DCAMAN2  DOC  Half of documentation text.
DCALIST  EXE  Utility dump program.
DCATOPCW EXE  Converts DCA text to PC-WRITE format.
PCWTODCA EXE  Converts PC-WRITE files to DCA format.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1295

     Volume in drive A has no label
     Directory of A:\

    DCALIST  EXE     45028  10-27-87  12:16p
    DCAMAN1  DOC     43277   6-23-87   2:02p
    DCAMAN2  DOC     41173   6-23-87   2:05p
    DCATOPCW EXE     89386  10-27-87  12:16p
    FILE1295 TXT      1389   1-19-89   4:03p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694  12-20-88   2:54p
    MANUAL   BAT       162  12-20-88   2:54p
    PCWTODCA EXE    119080  10-27-87  12:16p
    READ     ME       1009   6-26-87   3:07p
    WORKDCA  BAT       437   6-23-87   4:26p
           11 file(s)     341673 bytes
                           14336 bytes free
