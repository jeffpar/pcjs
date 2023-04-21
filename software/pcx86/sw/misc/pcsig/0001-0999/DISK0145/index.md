---
layout: page
title: "PC-SIG Diskette Library (Disk #145)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0145/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0145"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "FABULA DISK 2 OF 2  (#144 FIRST DISK)"

    A fine collection of tools for communications users and others.  The
    SQIBM and USQIBM programs compress and expand files to save on costs
    when using modem transmission.  TALK450 shows how to add 450 baud
    capacity to your Hayes 300 modem.  There are other goodies like
    SCRNSAVE, which prevents phosphor burn on your monitor, and a series of
    batch files to give sorted directory listings.
    
    How to Start: To run a COM or BAT program simply type its name and
    press <ENTER>.  To read DOC files simply enter TYPE filename.ext and
    press <ENTER>.
    
    File Descriptions:
    
    The First Disk Contains:
    DNXSD    DOC  Documentation for .BAT files
    DN       BAT  Sorts Directory by fileName
    DXSAVE   BAT  Sorts Directory by eXtension and saves sorted
    DD       BAT  Sorts Directory by Date
    DS       BAT  Sorts Directory by Size
    DX       BAT  Sorts Directory by eXtension
    USQ      COM  Unsqueezes files
    SQ       DOC  Documentation for SQIBM
    SQ       COM  Squeezes files
    SCRNSAVE COM  Prevents screen "burn-in"
    SCROLLK  DOC  Documentation for SCROLLK
    TALK450  MRG  Adds 450 baud capacity to PC-TALK III
    SCROLLK  COM  Enables SCROLLLOCK key
    TALK450  DOC  Documentation for TALK450.MRG
    USQ      DOC  Documentation for USQIBM
    
    The Second Disk Contains:
    ASMGEN   COM  Converts EXE and COM to ASM files
    ASMGEN   DOC  Documentation for ASMGEN.COM
    BINSIX   DOC  Documentation for BINSIX.DOC
    COMP     BAS  Compares two tokenized BASIC files
    BINSIX   EXE  New squeeze program, 20% less then hex
    DIP-MEM  COM  Bypasses power-up memory test
    CROSSOPT      Data file for CROSSREF.EXE
    MAKEDATA BAS  Checksumed data files for COM/EXE
    DIP-MEM  DOC  Documentation for DIP-MEM.COM
    SQIBM    DOC  Documentation for SQIBM.DOC
    SQIBM    COM  Squeezes files for faster transfer
    RSVD     COM  Changes the size of VDISK
    WRT      DOC  DOC for WRTE.COM and WRTP.COM
    WRITECOM BAS  Converts data from MAKEDATA.BAS to EXE/COM
    UPNUM    COM  Shows if NumLock or CapsLock in use
    TABS     BAS  Puts tab codes in or removes them
    VDISK    COM  160k RAM disk program  (see RSVD.COM)
    USQIBM   DOC  Documentation for USQIBM.COM
    USQIBM   COM  Unsqueezes files squeezed by SQIBM
    UPNUM    DOC  Documentation for UPNUM.DOC
    WRTE     COM  Erases read-only attribute from a file
    WRTP     COM  Sets read-only attribute of a file
    XREF     BAS  BASIC program
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ASMGEN.DOC

{% raw %}
```



************************************************************************
*                                                                      *
*   ASMGEN.COM - by J. Gersbach   and  J. Damke    (Ver. 2.01)         *
*                                                                      *
*   A program to generate cross-referenced assembly language code      *
*   from any executable file.                                          *
*                                                                      *
*                                                                      *
*                                                                      *
*   Uploaded to PCanada by Mark Magner   November 23, 1983             *
*                                                                      *
************************************************************************



*  PREFACE  *


This program will generate 8086/87/88 assembly code text
that is compatible with the IBM Personal Computer Macro
Assembler from any executable diskette file up to 65,535
bytes.  The output can be routed to the console or a disk-
ette file.  A reference list may be generated separately or
embedded at the appropiate instruction counter address in
the assembly code.

Some manual touch up will be required before reassembly, but
nearly all the typing is done for you by ASMGEN and anything
questionable is marked with "??".

A file of sequential instructions may be resident on the
same diskette to indicat to ASMGEN which addresses contain
code, byted, words, or strings.  This file may also include
instructions to assume segment register values or toggle the
output of assembley code text, generation of the reference
table, 8087 mnemonics, of the inclusion of embedded reference
information in the assembly file.

DEBUG may be used to browse through the executable file to
determine the starting locations of code and data to develop
the sequential instruction file.  It is important to accu-
rately specify these locations for an accurate reference
tabel and minimum touching up of the ASM output text.

The number of references within the file determines the amount
of memory required since a reference tabel is built in
memory during the first pass.  Disassembly is done from disk
and only one file sector is in memory at any given time.
Therefore memory size does not limit the size of the file
to be disassembled.  48K bytes of memory will be enough for
most programs but a few will need 64K or 128K.  One diskette
drive is sufficient but two is more convenient.


*  STARTING ASMGEN  *

There are two ways to work with ASMGEN:  either by using the
command menu or by calling ASMGEN with parameters.
Following are the descriptions of both options.

*  USING THE ASMGEN MENU  *

The program is invoked by typing:  ASMGEN

You are then prompted for a file specification.  Respond with
the name of the executable file from which you wish to
generate the assembly code.  The executable file will normally
have an extension of .EXE or .COM.  ASMGEN will check this
file spec for validity and then respond with a prompt that
includes a summary of the command letters indicating that
you may give it a command.  The executable file contents
are not checked for valid code and ASMGEN will try to dis-
assemble text or compressed BASIC files and produce unintell-
igible assembly code.

The commands are:

X filespec      This file spec replaces any previous executable
                file spec.  The usual file extension is .COM
                or .EXE

                EXAMPLE:  X DATE.COM


A <filespec>    The executable file is disassembled and the assem-
                bly code is routed to the specified file.  The
                usual file extension is .ASM.  If the filespec is
                omitted, the output will default to the console.

                EXAMPLE:  A DATE.ASM

R <filespec>    The reference table is sent to the file specified.
                The usual file extension is .TBL.  If the filespec
                is omitted, the output will default to the console.

                EXAMPLE:  R DATE.TBL

Q               The program is terminated and control returned to
                DOS.


Each time a command has been executed, ASMGEN waits with a one line
prompt for the next command.

X <filespec>, A <CON>, R <CON> or Q ?

The default filespec for each command is shown in brackets.  Enter
the next command of your choice as described above.


*  USING ASMGEN WITH PARAMETER CALLS  *

Up to three file specifications may be included when ASMGEN is
first called from DOS.  The executable file's name is given first,
followed by specifications for the assembly and reference table
files.

EXAMPLE:  ASMGEN DATE.COM, DATE.ASM, DATE.TBL

If a semicolon follows the last filespec, ASMGEN will exit to DOS
when the command has been executed.  If no semicolon is entered,
ASMGEN will display the menu options described above and wait for
further input after executing the command.

EXAMPLE:  ASMGEN DATE.COM, DATE.ASM;

If the filespec for the .ASM file and/or .TBL file is omitted,
ASMGEN will generate first the .ASM file, then a .TBL file using
the filename of the first filespec.

EXAMPLE:  ASMGEN DATE.COM,,; creates DATE.ASM and DATE.TBL and exits
                             to DOS.

If only the reference table is desired, the dummy name NUL should be
entered in place of an .ASM filespec

EXAMPLE:  ASMGEN DATE.COM, NUL, DATE.TBL

If only one filespec is given when the program is called, the reference
table is built in memory and then the menu options are displayed for
further commands.

EXAMPLE:  ASMGEN DATE.COM


*  PROGRAM EXECUTION  *

The disassembly is done in two passes through the scource file.  On pass
#1, the reference table is built in memory and the actual output is gen-
erated during pass #2.  Once the reference table is established, it remains
in memory until an X or Q command is issued, and subsequent A and R com-
mand executions skip pass #1.  This saves a lot of time when the executable
file is large.

Three contiguous data areas are built dynamically in memory during pass #1.
First is the compressed sequential instruction list.  Second is a list of
pointers for .EXE files that point to the locations of all relocatable
variables in the program, also arranged in numerical order.  These are
established before reading any code.  Third, the reference table is then
built in a higher area of memory as pass #1 progresses.

If all available memory in the program segment is filled before the first
two data areas are completed, ASMGEN will abort to the command prompt.
After the reference table is started, a shortage of memory will produce
the message "Reference Table Incomplete Due to Insufficient Memory" and
continue.

Ctrl-Break may be used at any time to interrupt a command in progress.


*  READING THE ASSEMBLY CODE FILE (.ASM)  *

This file begins with a title taken from the executable file's name and
date followed by the current date (in brackets).

If not inhibited by the  M  switch in a SEQ file (explained later), the macro
library will appear next in the file.

Next will be a .RADIX 16 pseudo-op which tells the macro assembler that all
numbers are in hexadecimal form.

Then comes a header that indicates a starting value for the code segment,
stack segment, instruction pointer and the stack pointer.  The stack pointer
is usually set to FFFF for .COM files but may be somewhat less depending on
available memory.  These values are passed by the linker for .EXE files.

The first ASSUME statement might come next.  There is one generated for each
segment that begins with code.  All segment registers are designated according
to the current set of ASSUMEs.  They will sometimes be incorrect, so all
ASSUME statements should be checked prior to re-assembly.

The disassembled output follows, terminated by an END statement and the
execution address.  An ORG psuedo-op is included if required.

The text is compatible with the IBM Macro Assembler and the format is the same
except for RETurns.  To avoid the need for PROCedure titles, special mnemonics
are provided for all RET instructions.  These are defined in the macro library
at the beginning of the file.  Only macros that are needed for the current file
are produced.  The optional embedded commands that make up the reference table
enhance the readability of the file.  For very large files, this is sometimes
undesirable and a separate reference table is best.

When invalid instructions are encountered in code areas, they are reproduced
as byte values followed by "??".  If a near jump is defined previously in the
code, and it is within range of a short jump, a NOP instruction is inserted
after the jump.  The executable file created with this .ASM file and the
Macro Assembler and Linker will then be the same length as the original file.
This makes it less important to differentiate between labels and numeric
constants since the label values and their offsets within the file will be
the same.  The fundamental problem of disassembly is in knowing if the
original assembly code defined a number as a label which changes as a function
of it's position or as a number that always remains the same.  If you make
changes in the assembly code however, you must properly specify all values.
You might as well remove all NOPs at the same time.

Labels are five characters long and begin with "L".  Segment labels begin with
"S".  The remaining characters are the current instruction counter in hex
form, thus making each label unique and showing it's location in the original
file.  The instruction counter is continuous throughout the assembly code
without resetting at segment boundaries.  The segment labels are then in byte
as opposed to paragraph form.  In those cases where a label value is modified
by an ASSUME statement, the original value is included as a comment in the
referencing instruction so that it may be easily changed back if it was not
intended as a location.

The word "Relocatable" is printed at the end of any line that contains an
ablolute paragraph value.  These are values that DOS modifies after loading but
befor executing a program.  They are used for loading segment registers that
are sensitive to the program location in menory.  Relocatable values are not
modified by ASSUMEs.  ASMGEN converts these numbers from paragraph to byte
values by multiplying them by sixteen so that they will fit within the 16-bit
instruction counter field.  When the paragraph value is negative or exceeds
0FFFH, it is left unchanged and a warning (??) is issued on that line.  When
a program larger than 64K bytes is being disassembled, it should be divided
into smaller files.

All words are produced as labels, except when the "L" switch has been enacted
in the .SEQ file (explained later).  The label name indicates it's numeric
value and, if it does not occur on an instruction boundary, the name indicates
it's position relative to the current instruction pointer is given by an EQU
statement.  Therefore the Macro Assember will assume that it is a location,
but it is easily changed to a constant since the value is given in the label
name.  The word OFFSET precedes a label whenever it is questionable whether
it is a label or an immediate value.  You must decide which of the labels
should be constants and which of the constants should be labels, and change
them accordingly.  When changing labels to numbers, be sure to append an
"H" if the number ends with a "D" or a "B" since the Macro Assembler will
otherwise assume that it is decimal or binary.

Bytes are always treated as constants.  An optional switch may be included in
the .SEQ file (explained later) which enables numbers instead of labels if all
references to the value are data segment and immediate operation types.

An effective procedure to follow in attempting to understand the assembly code
file is to look first for the message text area, the input commands, and the
simpler subroutines.  Then add label names to addresses in the .SEQ file
(explained later) that remind the you of their purpose.  Add comments to the
labels.  If these names are well chosen, the larger routines eventually will
become clear.  The embedded references are produced as labels so they will
retain their meanings as they are changed.

It is also helpful to spend some time studying the structure of data areas.
Vector tables, which are frequently used to control the program's flow, reveal
the program's structure very quickly.  If some routines do not have labels at
the beginning, it is usually because the code or tables that reference them
(or the segment register assumptions) are not properly defined in the .SEQ
file.


*  READING THE REFERENCE TABLE (.TBL)  *

A referencee is defined as a number that is referenced somewhere in the
program.  It may be a program loaction or a numeric constant.

A referencor is is defined as the address in the program from which a refer-
ence is made to the referencee.

Each entry is composed of a referencEE  followed by a list of referencors.  If
more than one line is needed, additional lines are indented to the first
referencor position.  The referencEE is followed by an "S" if it includes
references to the beginning of segment.  The referencor is followed by two
letters, the first of which represents the segment register that is implied
or prefixed in the referencing instruction.  The second letter indicates the
type of operation on the referencEE.  When the reference entries are embedded
in the assembly code, all values are preceded with the letter "L".

----------------------------------------------------------------------------
1st letter      |  2nd letter
SEG REGISTER    |  TYPE OF OPERATION
----------------------------------------------------------------------------
C  code         |  J  jump         M  modify - INC, ADD, etc.
S  stack        |  C  call         I  immediate - value or offset
D  data         |  R  read         T  test or compare
E  extra        |  W  write        ?  unknown or ESC instruction
                |  P  port
----------------|-----------------------------------------------------------



*  WRITING/READING THE SEQUENTIAL INSTRUCTION FILE (.SEQ)  *

The sequential instruction file is a list of special instructions to ASMGEN
which the user creates.  The file takes the form of a list of hexadecimal
addresses and single-letter instructions or generation switches.  If used,
the .SEQ file must be on the same diskette as the source file and have the
same name as the source file with an extension of .SEQ.  Each instruction in
the file must be in one of the following formats:

addr    command
or
addr    command         ;comment
or
addr    command         label   comment
or
addr    command         label   comment ;comment

"addr" represents the instruction pointer value.  All addr values must be in
numerical sequence in the file.

"command" may be either a toggle switch or a generation instruction.

"label" is optional and replaces the label generated for this address with
this non-blank string.

"comment" is optional and must be preceded by "label" unless the dummy label
"." is used.  Everything following "label" is treated as an address comment
and will be printed in the ASM file behind the generated instruction.  The
address comment may be up to 255 characters in length and should not contain
a semi-colon.

";comment" is optional.  Anything following a semi-colon in the .SEQ file
instructions is considered as a comment in the .SEQ file only and is not added
to the generated .ASM file.

"label" and "comment" are not allowed when a generation switch is coded, but
a ";comment" may be used to help clarify the .SEQ file.

The .SEQ file is read into memory before the first pass starts.  The addresses
and commands will be compressed, but "label" and "comment" will be held in
memory one to one.  An effect of this is that memory space required for dis-
assembly increases with each "label" and "comment" added to the .SEQ file.


*  DESCRIPTION OF GENERATION SWITCHES  *

THE VARIOUS TOGGLE SWITCHES ARE SET TO ON BY DEFAULT.  Switches may be toggled
on and off at any point in the .SEQ file/disassembly.

All options switches except /M and /H can be either toggled or directly set by
the user.  A suffix of "+" turns the switch ON, and a suffix of "-" turns the
switch OFF.  Switches encountered in the file that have neither of these
suffixes are toggled to the opposite of their state at the time; ON switches
are turned OFF and OFF switches are turned ON.

/B - generate byte references

When ON, byte and word references are included in the reference table.  When
OFF, only word references are generated.

/E - embedded references in ASM file

When ON, reference table entries are inserted in the text just before the
referencee's definition statement.  When OFF, these entries are not included
with the disassembled text.  The entire reference table can be printed with
the "R" command.

/F - 8087 mnemonics

When ON, ESC instructions are produced.  When OFF, ESC instructions are assumed
to be 8087 instructions and 8087 mnemonics are produced.

/H - append hex "H"

When this switch appears at any point in the .SEQ file, an "H" is appended to
all hex numbers.  This does not, of course, apply to the labels which are
hex values preceded by the letter "L".  The .RADIX 16 pseudo-op is omitted
which allows the assembler's radix to default to decimal.  This switch defaults
to NO H APPEND.  Note that it will be set only once.  It retains it's value
until the next .SEQ file is read.

/L - generate label or number

When ON, all word references are treated as labels.  When OFF, a word reference
is treated as a constant if all referencors are data immediate types.

/M - suppress macro library

When this switch appears at any point in the .SEQ file, no macro library is
included in the text output.  The DEFAULT IS THAT THE MACRO LIBRARY WILL BE
INCLUDED.  Note that this switch will be set only once.  It retains it's
value until the next .SEQ file is read.

/O - control ASM output

When ON, ASMGEN will output the generated text.  When OFF, output will be
suppressed.

/R - control TBL output

When ON, ASMGEN will output the generated reference data.  When OFF, the
reference table is not printed.

/T - control trace output

When ON, up to 16 bytes of object code are included as comments in each line
of the assembly code file.  When OFF, object code is not included.


*  DESCRIPTION OF .SEQ FILE COMMANDS  *

A - assume

The following lines contain ASSUMptions for segment register values.  They
become effective at the address specified by this instruction and may be
modified anywhere in the disassembly.  The required format for assumptions is:

& 0400  DS

The ampersand indicates a continuation of the A instruction.

In this example, a data segment beginning at a instruction pointer value of
400 will be assumed until another  A  instruction changes it.  CS, ES, and
SS are also supported.  The segment assumptions are used for effective address
calculations only.  The code segment assumption does not affect the instruction
pointer value.

B - bytes

The bytes encountered in the source file are assumed to have meaning as single
byte values.

C - code

The bytes encountered in the source file are assumed to be valid 8088 machine
language instructions.

D - generate data operand

The operand of the instructions is changed to immediate data.  Subsequent bytes
are interpreted as "C" (code follows).

I - initial value for IP

The hexadecimal value on this line overrides the instruction pointer value at
the beginning of the file - not to be confused with the address at which
execution begins.  The default values are 0000 for EXE files and 0100H for COM
and other files.  The execution address following the END statement is omitted
if this option is invoked.

S - strings

The bytes encountered in the source file are assumed to form text.  Quoted text
is produced for valid ASCII characters and byte values for others.

# - defined length strings

The first byte encountered in the source file contains the length of the
character string which begins with the next encountered character.  This length
value may be overridden by a subsequent SEQ file instruction.

$ - defined length strings

The first byte encountered in the source file contains the length of the
character string which begins with the next encountered character plus the
length byte itself.  This length value may be overridden by a subsequent SEQ
file instruction.

W - words

Pairs of bytes encountered in the source file are assumed to have meaning
as word values.

X - repeating data structure

A cyclic data structure is assumed to begin at the specified instruction
pointer value.  The structure definition may follow and is prefixed by
an ampersand (&) to indicate the continuation of this instruction.  If the
definition does not follow, then the most recent definition is used.  If no
structure is yet defined, then an error message is displayed.

The following elements may be used to define the structure:

& NNNN S  -  The next NNNN bytes are defined as string characters
& NNNN B  -  The next NNNN bytes are defined as byte values
& NNNN W  -  The next NNNN bytes are defined as word values
& XXNN $  -  The next sequence of bytes is defined as NN fields.  Each field
             consists of a length byte and a string of characters.  The length
             of each field is contained in the first encountered byte.  The
             high nibble (XX), if non-zero, is a bit mask of the length field
             within the byte.  The length field is right-justified within the
             byte after the byte value is sent to the output file.



*  EXAMPLES OF .SEQ COMMANDS  *

This example .SEQ file shows all the possible instructions in the appropriate
format.

;All switches are on at the beginning.
0       /T      ;no object code as comments in output
0       /M      ;no macro library in output
0       /H      ;append "H" to all numbers
00H     /A      ;assume the following segment values
;Note that the ampersand (&) indicates the extended ASSUME
& 380   DS      ;the data segment starts at 380 hex
& 380   ES      ;the extra segment starts at 380 hex
0200     I      ;initialize the instruction pointer to 200
0200    /F      ;introduce 8087 mnemonics (not ESC)
0200    /E      ;no embedded references
0200     C      ;code begins at 200
0203H    W      ;words are at 203
0207     C      ;more code starting here
220      X      ;complex data structure begins here
& 3      W      ;words
& 1      B      ;byte
& 0E02   $      ;2 strings starting with the 2nd byte follow
                ;bits 3,2,1 of the first byte contain the length of the
                ;string including the length byte.
                ;the high nibble (0E) is the mask.
                ;see also # in summary below
& 1      B      ;byte
                ;the structure repeats until 351
351      B      ;bytes
358      C      ;more code
380      S      ;strings - list of messages
421      W      ;words
4FD     /B      ;no further byte references
502     /R      ;garbage here - turn off reference generation
502     /O      ;and output
600H    /O+     ;valid code - turn output back on
600     /R
600      C
1A60    /O-     ;output file about to fill diskette - turn output off but keep
                ;scanning for references.
                ;another run will be needed to get the remaining code.
1B00    /D      ;treat operand as immediate data
1DFD    /B+     ;continue with byte references
1F45     W      user_prt        ;user provided labels will translate
2256     S      $MSG            ;to upper case


Comments may be included if preceded by a semicolon.

Alphabetic characters may be either upper or lower case.

An "H" may follow the hex address.



*  SAMPLE SESSION  *

The external command CHKDSK.COM will serve as an example for this sample
session because it is short.  The .SEQ file is also short and easy to generate.
Only these few instructions are needed.


0100  /T  ;include object code as comments in .ASM file
0100  /E  ;simpler output without references
04F7H  S  ;messages
04F7H /H  ;append "H" to numeric values

Using DEBUG, browse through CHKDSK.COM to see how this was arrived at.
Usually, but not always, the best procedure is to assume code.  If the code
appears unintelligible, display it in hex/ASCII.  If it is not text, assume
bytes.  Label positions in the first disassembly may indicate that some
locations should be words.  Next, generate the .ASM file by typing

ASMGEN CHKDSK.COM <enter>
A                 <enter>

The assembly code can be viewed on the screen.  Then type

A CHKDSK.ASM      <enter>

to save the assembly source code to a file.  Then,

R CHKDSK.TBL      <enter>

to save the cross-reference table to disk.

The Macro Assembler, Link.exe and Exe2bin could now be used to assemble
CHKDSK.ASM, link it to .EXE and convert it to a .COM file.  No modification
should be necessary in this case.

If working with code that is to be modified, the symbol types must be correctly
specified as locations or as constants.  If they are constants, place them
outside of any segment.  The label names may then be changed to make the code
more readable.


ENDENDENDENDENDENDENDENDENDENDENDENDENDENDENDENDENDENDENDENDENDENDENDENDENDEND
END OF TRANSFER - PRESS ENTER TO RETURN TO MENU


<*>End of file<*>

Time remaining =  39 min.
      ===================== RBBS-PC FILE MENU ====================
 
      G)oodbye      H)elp        D)ownload a file - D;filespec.ext
      L)ist files   M)ain menu   U)pload a file   - U;filespec.ext
      N) List New files added since last log-on   - N;directory # 
      ?) Xfer Info

File Function <G,H,L,N,D,U,M,?>? l

* Use <Ctrl K> to abort, <Ctrl S> to suspend *

+-----------------------------------------------------+
|                       Utilitys                      |
|                                                     |
|    Here are some of the utilitys that I have        |
|    and hope that you enjoy them. some of the        |
|    files might be in tokenized format so you        |
|    might have to use xmodem to transfer.            |
+-----------------------------------------------------+


ASMGEN.COM     11264  02-24-1984 - Converts .EXE and .COM to .ASM files.
ASMGEN.DOC     26112  02-25-1984 - Doc. for above.
BASICAID.BAS   31104  03-04-1984 - Squeezes and unsqueezes files.
BASICAID.DOC   12393  03-15-1984 - Doc. for above.
BINSIX.DOC      4608  04-21-1984 - Doc. for BINSIX.EXE.
BINSIX.EXE     15744  04-22-1984 - New squeeze program, 20% less then HEX.
COMP.BAS        3456  04-21-1984 - Compare two tokenized basic files.
CROSSOPT         128  01-22-1984 - Data file for CROSSREF.EXE.
CROSSREF.DOC   15232  01-22-1984 - Doc. for CROSSREF.EXE.
CROSSREF.EXE   43392  01-22-1984 - Excellent cross reference utility.
CROSSWDS.DAT    1024  01-22-1984 - Data file for CROSSREF.EXE.
DIP-MEM.COM     1536  02-26-1984 - Speed up power on,bypass memory test.
More (Y),N,NS? 2-1984 - Data file for CROSSREF.EXE.
DIP-MEM.COM     1536  02-26-1984 - Speed up power on,bypass memory test.
More (Y),N,NS? 
```
{% endraw %}

## BINSIX.DOC

{% raw %}
```


                           BinSix
         (A program for converting binary to text)
                      (and back again)


     ---------
     Operation
     ---------

     The BINSIX program is used to convert both to and  from
.SIX format.  To convert, say, foobar.com to foobar.six, one
would issue the command:

     binsix -s foobar.com foobar.six


     Likewise, to convert foobar.six back  into  foobar.com,
one would type:

     binsix -b foobar.six foobar.com


     The  "-b"  indicates  to  the  program  that  you   are
converting from .SIX format to a binary file, while the "-s"
indicates just the opposite.

     The program is silent in its operation.  The only  time
it outputs any messages are when an error occurs.  If  there
are no messages from the program, you may assume it finished
successfully.


     ----------------------
     Background information
     ----------------------

     In situations where  people  need  to  transfer  binary
files (for example, .COM files) but cannot send  8  bits  of
raw data (for lack of  an  appropriate  protocol,  perhaps),
there is the need to convert the binary file(s) into a  form
more acceptable to the communications  link.   The  standard
approach has  been  to  create  .HEX  files.  This  approach
entails the splitting of every byte of binary data into  two
text characters; these two text  characters  are  the  "hex"
representation of the byte.  By doing this, all  256  binary
codes are reduced down to a pair of printing characters, and
there is no problems sending the file.
     This approach, however, is wasteful.  .HEX  files  will
be slightly larger than  twice  the  size  of  the  original
.COM/.EXE file.  A 30k .EXE program will suddenly  swell  to
over 60k, making the download time at  300  baud  grow  from
about 15 minutes to over half an hour (making that file cost
$3 to download instead of $1.50).
     To overcome some of these shortfalls, the  .SIX  format
was invented.  .SIX files, like  .HEX  files,  contain  only
printing  characters,  so  there  are  no  embedded  control
characters  in  the  text  file  (aside  from  returns   and
linefeeds which have been placed in the file for  formatting
purposes).  Unlike .HEX files, .SIX files do not  cause  the
file to balloon in size when converted from .COM.   The  30k
file mentioned above would grow to just  40k  when  convered
into a .SIX file instead of a 60k file when converted into a
.HEX file.

     -----------------
     Technical details
     -----------------

     The format of the .SIX file is described below:




        Normally, 3 bytes of binary data are formated into 4
bytes of text.  The expansion takes place like this:


        Step 1:

Byte                    Contents
----                    --------

        +----+----+----+----+----+----+----+----+ }
1       | 07 | 06 | 05 | 04 | 03 | 02 | 01 | 00 |  }
        +----+----+----+----+----+----+----+----+  }
2       | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 |   } Input
        +----+----+----+----+----+----+----+----+  }
3       | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 |  }
        +----+----+----+----+----+----+----+----+ }

                            |
                            |
                            V

        +----+----+----+----+----+----+----+----+
1       | xx | xx | 05 | 04 | 03 | 02 | 01 | 00 |
        +----+----+----+----+----+----+----+----+
2       | xx | xx | 15 | 14 | 13 | 12 | 11 | 10 |
        +----+----+----+----+----+----+----+----+
3       | xx | xx | 25 | 24 | 23 | 22 | 21 | 20 |
        +----+----+----+----+----+----+----+----+
4       | xx | xx | 27 | 26 | 17 | 16 | 07 | 06 |
        +----+----+----+----+----+----+----+----+

The three bytes of data are expanded out to be four bytes of
data.


        Step 2:

-- The value 0x20 is added to each of the three bytes.
-- This results in characters in the range 0x20 .. 0x5F


        End of file funnies:

Since most files will not be an even multiple  of  three  in
length, the last  packet  will  not  contain  a  full  three
characters of data. Thus, in the last packet, the value 0x60
contained in either  the  second  and/or  third  byte  means
"place holder".

        Checksum:

        The checksum of the *binary* data will be kept.  The
next to the last line  of  the  text  file  will  be  blank,
signaling EOF, and the last line of the file will  be  a  24
bit checksum, packed, of  course,  in  the  4  bit  expanded
format.



d the last line of the file will  be  a  24
bit checksum, packed, of  course,  in  the  4  bit  expanded
format.



```
{% endraw %}

## COMP.BAS

{% raw %}
```bas
10 '**************************************************************************
20 '*                                                                        *
30 '*                 COMP.BAS BY ROBERT RELF (C)1984                        *
40 '*                                                                        *
50 '**************************************************************************
60 DIM C$(128),D$(128)
70 POINTER1=129:POINTER2=129
80 CLS:KEY OFF:PRINT"                BASIC PROGRAM FILE COMPARISON UTILITY":PRINT
90 INPUT "ENTER FIRST FILE NAME INCLUDING DRIVE AND EXTENSION: ",FILENAME1$:PRINT
100 INPUT "ENTER SECOND FILE NAME INCLUDING DRIVE AND EXTENSION: ",FILENAME2$:PRINT
110 LPRINT "BASIC PROGRAM FILE COMPARISON
120 LPRINT
130 LPRINT "COMPARING ";FILENAME1$;" AND ";FILENAME2$
140 LPRINT :LPRINT
150 OPEN FILENAME1$ AS #1 LEN=128
160 OPEN FILENAME2$ AS #2 LEN=128
170 FOR I=1 TO 128
180 FIELD #1,(I-1)AS X$,1 AS C$(I)
190 FIELD #2,(I-1)AS Y$,1 AS D$(I):NEXT
200 GOSUB 480:IF C<>255 THEN PRINT "NOT A TOKENIZED PROGRAM FILE":END
210 GOSUB 550:IF D<>255 THEN PRINT "NOT A TOKENIZED PROGRAM FILE":END
220 GOSUB 400
230 GOSUB 440
240 GOSUB 620
250 GOSUB 750
260 LOCATE 8,1:PRINT "PROCESSING #1 LINE ";LINE1
270 LOCATE 10,1:PRINT "PROCESSING #2 LINE ";LINE2
280 IF DONE1=1 AND DONE2=1 THEN IF ID=0 THEN LPRINT "FILES COMPARE OK":LPRINT CHR$(12):END ELSE LPRINT CHR$(12):END
290 IF DONE1=1 AND DONE2=0 THEN GOSUB 380:GOSUB 440:GOSUB 750:GOTO 260
300 IF DONE1=0 AND DONE2=1 THEN GOSUB 360:GOSUB 400:GOSUB 620:GOTO 260
310 IF LINE1=LINE2 THEN IF LINE1$=LINE2$ THEN GOTO 220 ELSE GOSUB 340:GOTO 220
320 IF LINE1<LINE2 THEN GOSUB 360:GOSUB 400:GOSUB 620:GOTO 260
330 IF LINE1>LINE2 THEN GOSUB 380:GOSUB 440:GOSUB 750:GOTO 260
340 LPRINT "LINES ";LINE1;" ARE NOT IDENTICAL":ID=1
350 RETURN
360 LPRINT "LINE NUMBER ";LINE1;" IN  ";FILENAME1$;"  DOES NOT EXIST IN  ";FILENAME2$:ID=1
370 RETURN
380 LPRINT "LINE NUMBER ";LINE2;" IN  ";FILENAME2$;"  DOES NOT EXIST IN  ";FILENAME1$:ID=1
390 RETURN
400 GOSUB 480:LOW.BYTE=C
410 GOSUB 480:HIGH.BYTE=C
420 ADR1=HIGH.BYTE+LOW.BYTE
430 RETURN
440 GOSUB 550:LOW.BYTE=D
450 GOSUB 550:HIGH.BYTE=D
460 ADR2=HIGH.BYTE+LOW.BYTE
470 RETURN
480 IF POINTER1<128 GOTO 510
490 GET #1
500 POINTER1=0
510 POINTER1=POINTER1+1
520 C=ASC(C$(POINTER1))
530 LINE1$=LINE1$+C$(POINTER1)
540 RETURN
550 IF POINTER2<128 GOTO 580
560 GET #2
570 POINTER2=0
580 POINTER2=POINTER2+1
590 D=ASC(D$(POINTER2))
600 LINE2$=LINE2$+D$(POINTER2)
610 RETURN
620 IF ADR1=0 THEN DONE1=1:RETURN
630 GOSUB 480:LOW.BYTE=C
640 GOSUB 480:HIGH.BYTE=C
650 LINE1=(HIGH.BYTE*256)+LOW.BYTE:LINE1$=STR$(LINE1)
660 GOSUB 480
670 WHILE C<>0
680 GOSUB 480
690 IF (C>10 AND C<15) OR C=28 THEN GOSUB 480:GOSUB 480:GOSUB 480:GOTO 730
700 IF C=15 THEN GOSUB 480:GOTO 730
710 IF C=29 THEN FOR I=1 TO 4:GOSUB 480:NEXT I:GOTO 730
720 IF C=31 THEN FOR I=1 TO 8:GOSUB 480:NEXT I:GOTO 730
730 WEND
740 RETURN
750 IF ADR2=0 THEN DONE2=1:RETURN
760 GOSUB 550:LOW.BYTE=D
770 GOSUB 550:HIGH.BYTE=D
780 LINE2=(HIGH.BYTE*256)+LOW.BYTE:LINE2$=STR$(LINE2)
790 GOSUB 550
800 WHILE D<>0
810 GOSUB 550
820 IF (D>10 AND D<15) OR D=28 THEN GOSUB 550:GOSUB 550:GOSUB 550:GOTO 860
830 IF D=15 THEN GOSUB 550:GOTO 860
840 IF D=29 THEN FOR I=1 TO 4:GOSUB 550:NEXT I:GOTO 860
850 IF D=31 THEN FOR I=1 TO 8:GOSUB 550:NEXT I:GOTO 860
860 WEND
870 RETURN
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #145, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  UPNUM   .DOC         CRC = C9 56

--> FILE:  SQIBM   .COM         CRC = 44 B6

--> FILE:  XREF    .BAS         CRC = 1E 97

--> FILE:  SQIBM   .DOC         CRC = EB 0D

--> FILE:  BINSIX  .EXE         CRC = 6C DE

--> FILE:  USQIBM  .COM         CRC = 92 7B

--> FILE:  USQIBM  .DOC         CRC = 9E 22

--> FILE:  BINSIX  .DOC         CRC = E0 9A

--> FILE:  ASMGEN  .COM         CRC = BF 88

--> FILE:  ASMGEN  .DOC         CRC = 8E CC

--> FILE:  DIP-MEM .COM         CRC = 37 05

--> FILE:  DIP-MEM .DOC         CRC = 2C 03

--> FILE:  WRITECOM.BAS         CRC = 70 FF

--> FILE:  WRT     .DOC         CRC = D4 8A

--> FILE:  WRTP    .COM         CRC = 64 F0

--> FILE:  WRTE    .COM         CRC = 2C 53

--> FILE:  VDISK   .COM         CRC = 92 D7

--> FILE:  RSVD    .COM         CRC = 60 AF

--> FILE:  MAKEDATA.BAS         CRC = CF E9

--> FILE:  TABS    .BAS         CRC = C2 83

--> FILE:  CROSSOPT.            CRC = 80 E0

--> FILE:  COMP    .BAS         CRC = DA 1C

--> FILE:  UPNUM   .COM         CRC = 3C 60

 ---------------------> SUM OF CRCS = 3B 3B

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## DIP-MEM.DOC

{% raw %}
```

le then enter <C/R> to start? 
			MEMORY DOCUMENTATION
			====================

VERSION 1.01   8 NOV 1982    (C)  MICROLIFE, INC.  (301) 799-5509


Memory is a utility to allow dynamic setting/resetting of the amount

of memory used by DOS.  The major advantage is that the system switches

can be set to anything your heart desires, with the knowledge that you 

should not have to open up the PC to set switches while using MEMORY.    

For example, some games (like ZORK and Adventure) seem to require a 

maximum of 320K, the switches can be set for the 128K and then MEMORY 

can be run to set DOS for larger amounts or smaller amounts of memory 

as required.  MEMORY can be used in batch files or simply run from the 

system prompt to set DOS memory size from 64K (lowest switch setting) 

up to 640K.  More specific parameter information is as follows:

MEMORY		Restores DOS memory size to what it was prior to
		running MEMORY.  Follow the example below:
           
		Step 1 	MEMORY 3	Sets DOS to 192K
		Step 2  MEMORY 5	Sets DOS to 320K
		Step 3  MEMORY		Restores DOS to 192K

MEMORY 0	Forces DOS read the value of the switches on the
		motherboard.

MEMORY N	(Where N can be a decimal number from 1 to 10).  Installs 
		N times	64K of memory to DOS.  That is, assuming N was 7, 
		7 * 64K = 448K.  A very important note here is that the 
		DOS can now be set to beyond the value of the switches 
		(544K Maximum) to 640K !! 


An example of MEMORY used in an Autoexec file:

Commands		Description of each command
.............................................................................

PWRUPCLK		Sets the System time equal to the Quadboard time
MEMORY 9		Sets DOS memory size to 9 * 64K =  576K !!!
RAMDISK 10/A		Creates a Ramdisk of size 10 * 32K = 320K
COPY *.* D:		Copies all of Drive A: to Drive B:
D:			Logs onto Drive D:
CHKDSK			Checks the Disk Parameters

............................................................................

   




Special Notes:

1. MEMORY resets the system when run, except in the cases of bad para-
   meters entered or when the same command is run more than once.
2. MEMORY will only install up to the available RAM present in the system.
   For example, you have 320K in the system, a command like MEMORY 6 would
   result in an error and no change from the present memory size.
3. The QD Ramdisk software provided with the Quadboard reads the memory
   size from the switches on the motherboard, not what DOS thinks it has.
   By doing so, the maximum size of memory under the Ramdisk (reading
   the switches) is 544K bytes.


inks it has.
  
```
{% endraw %}

## MAKEDATA.BAS

{% raw %}
```bas
100 GOSUB 1000                            'Intialize variables,etc.
110 GOSUB 2000                          'Get name of input and output file
120 GOSUB 3000                          'Open files for input and output
130 CHECK.SUM.%=0
140 PRINT "Writing";
150 GOSUB 4000                          'Generate the data for program
160 GOSUB 5000                          'Write data for checksum
170 NUM.DATA.%=0:DATA.BASE.%=1000
180 NUM.%=LENGTH.%                      'Output number of bytes
190 GOSUB 6000                          'Write number of bytes
200 NUM.%=CHECK.SUM.%                   'Write the checksum
210 GOSUB 6000
220 PRINT#2,",";CHR$(9);CHR$(34);COM.FILE.$;CHR$(34)
230 END
1000 '------------------------------------------------------------------------'
1010 ' This subroutine is just for intializing variables, etc.                '
1020 '------------------------------------------------------------------------'
1030 TRUE.%=-1                          'Set the two Boolean values
1040 FALSE.%=0
1050 RETURN
2000 '------------------------------------------------------------------------'
2010 ' This subroutine gets the name for the input and output files.          '
2020 '              com.files.$              Name of the".com" file           '
2030 '              data.file.$              Where Makedata writes the data   '
2040 '------------------------------------------------------------------------'
2050 INPUT"Name of com file (without extension)";COM.FILE.$
2060 DATA.FILE.$=COM.FILE.$ + ".bas"    'Build name for basic data statements
2070 COM.FILE.$=COM.FILE.$ + ".com"     'Build name for ".com" file
2080 RETURN
3000 '------------------------------------------------------------------------'
3010 ' This subroutine opens the two files and sets some variables            '
3020 '              length.%               The # of bytes in the ".com" file  '
3030 '              #1                     File # of com.file.$               '
3040 '              #2                     File # of data.file.$
3050 '------------------------------------------------------------------------'
3060 OPEN COM.FILE.$ AS #1 LEN=1
3070 LENGTH.%=LOF(1)                    '# of bytes in '.com' file
3080 PRINT"length = ";LENGTH.%
3090 DIM CHECK.%(LENGTH.%)              'Reserve room for checksums
3100 OPEN DATA.FILE.$ FOR OUTPUT AS #2
3110 FIELD #1,1 AS BYTE.$
3120 RETURN
4000 '------------------------------------------------------------------------'
4010 ' This subroutine writes the data statments for each byte in the         '
4020 ' '.com' file.                                                           '
4030 '------------------------------------------------------------------------'
4040 NUM.BYTES.%=0:NUM.DATA.%=0:DO.CHECK.%=TRUE.%
4050 DATA.BASE.%=1010                   'Start data statements at 1010
4060 WHILE NUM.BYTES.% < LENGTH.%
4070    GET #1                          'Read next byte
4080    NUM.BYTES.%=NUM.BYTES.% + 1
4090    ZERO.COUNT.%=0
4100    WHILE (ASC(BYTE.$)=0) AND (NUM.BYTES.% < LENGTH.%)
4110       ZERO.COUNT.%=ZERO.COUNT.% + 1
4120       GET #1
4130       NUM.BYTES.%=NUM.BYTES.% +1
4140    WEND
4150    IF ZERO.COUNT.%=1 THEN NUM.%=0:GOSUB 6000
4160    IF ZERO.COUNT.% > 1 THEN IF.COND.%=TRUE.% ELSE IF.COND.%=FALSE.%
4170       WHILE IF.COND.%
4180          NUM.%=-1                  'Signal "repeat count for 0's follows"
4190          GOSUB 6000
4200          NUM.%=ZERO.COUNT.%        'Write the repeat count
4210          GOSUB 6000
4220          IF.COND.%=FALSE.%
4230       WEND
4240    NUM.%=ASC(BYTE.$)               'Now write the next byte
4250    GOSUB 6000
4260 WEND
4270 RETURN
5000 '------------------------------------------------------------------------'
5010 ' This subroutine writes the checksum for each line of data              '
5020 ' statements'                                                            '
5030 '------------------------------------------------------------------------'
5040 PRINT #2,"":PRINT #2,10000"";      'Leave a blank line at the start
5050 DO.CHECK.%=FALSE.%:CHECK.SUM.%=0
5060 LENGTH.%=NUM.DATA.%                'Number of data items written
5070 NUM.CHECK.%=(NUM.DATA.%+7)\8
5080 NUM.DATA.%=0:DATA.BASE.%=10010
5090 FOR I.%=1 TO NUM.CHECK.%
5100    NUM.%=CHECK.%(I.%)
5110    CHECK.SUM.%=CHECK.SUM.% >= NUM.%
5120    GOSUB 6000
5130 NEXT I.%
5140 RETURN
6000 '------------------------------------------------------------------------'
6010 ' This subroutine prints the number in num.% as a string                 '
6020 '------------------------------------------------------------------------'
6030 IF (NUM.DATA.% MOD 8)=0 THEN WRITE.IF.%=TRUE.% ELSE WRITE.IF.%=FALSE.%
6040    WRITE.ELSE.%=NOT WRITE.IF.%
6050 WHILE WRITE.IF.%
6060       CHECK.INDEX.%=1 + NUM.DATA.%\8
6070       PRINT #2,""                  'Go to the next line
6080       PRINT ".";
6090       PRINT #2,DATA.BASE.% + INT(10*(NUM.DATA.%\8));
6100       PRINT #2,"data";CHR$(9);
6110       WRITE.IF.%=FALSE.%
6120    WEND
6130    WHILE WRITE.ELSE.%
6140       PRINT #2,",";CHR$(9);
6150       WRITE.ELSE.%=FALSE.%
6160    WEND
6170 NUM.$=STR$(NUM.%)
6180 IF NUM.% > 0 THEN NUM.$=RIGHT$(NUM.$,LEN(NUM.$)-1)
6190 PRINT #2,NUM.$;
6200 IF DO.CHECK.% THEN CHECK.%(CHECK.INDEX.%)=CHECK.%(CHECK.INDEX.%) >= NUM.%
6210 NUM.DATA.%=NUM.DATA.% + 1
6220 RETURN
```
{% endraw %}

## SQIBM.DOC

{% raw %}
```

SQ.COM - 

The purpose of this program is to squeeze all types of files. It is 
most effective on text files and least effective on binary files such
as .EXE and .COM.

The output file name is changed so that the middle letter in the 
filetype is changed to a "Q". For example, a file called  ABC.TXT
would be called  ABC.TQT. The input file is not changed.

To run the squeezer:

SQ filename.filetype               (i.e.  SQ  ABC.TXT)

There are no messages displayed while the program is running. Make sure
you have enough disk space to handle the output file (which can be 5% to
50% smaller than the original depending on the type of file).

```
{% endraw %}

## TABS.BAS

{% raw %}
```bas
10 '  "TABS"
20 '
30 '    J.R. Pulliam   4/01/84  Public Domain
40 '
50 TAB$ = CHR$(9) : TS = 8
60 IFILE$ = "B:INFILE.ASM"
70 OFILE$ = "B:OUTFILE.ASM"
80 CLS
90 PRINT  TAB(38);"TABS":PRINT
100 PRINT "     This program converts spaces in a file into TAB codes ";
110 PRINT "or converts TAB codes"
120 PRINT"into spaces."
130 PRINT:PRINT "     The TAB spacing is selectable by the user.";
140 PRINT "  The default is every eighth"
150 PRINT "character position with the TABS in positions 8, 16, 24, etc.,";
160 PRINT " making the";
170 PRINT "TAB STOPS at positions 9, 17, 25, etc."
180 PRINT:PRINT "     All TABS or spaces in the file are converted. ";
190 PRINT "If there are some portions of"
200 PRINT "the file, such as DB statements, that you do not want converted,";
210 PRINT " they should be"
220 PRINT "separated into a temporary file before conversion";
230 PRINT " and then reattached later."
240 PRINT:PRINT "The input and output files must be ASCII files."
250 '
260 PRINT:PRINT:PRINT TAB(24);"ENTER SELECTION (1-4)"
270 PRINT:PRINT TAB(17);"1  Replace spaces with TABS where possible."
280 PRINT TAB(17);"2  Replace TABS with spaces."
290 PRINT TAB(17);"3  Change TAB spacing of";TS"."
300 PRINT TAB(17);"4  Quit and return to DOS.
310 PRINT
320 INPUT "                       Selection = ",A$
330 IF A$ < "1" OR A$ > "4" THEN PRINT:PRINT TAB(24);"ILLEGAL INPUT":GOTO 260
340 SEL = VAL(A$)
350 '
360 IF SEL <> 3 THEN 400
370 GOSUB 970
380 GOTO 260
390 '
400 IF SEL = 4 THEN CLOSE : SYSTEM
410 '
420 PRINT:PRINT "ENTER THE NAME OF THE INPUT FILE TO CONVERT [";IFILE$;"]  ";
430 INPUT "",A$
440 IF LEN(A$) > 0 THEN IFILE$ = A$
450 PRINT:PRINT "ENTER THE NAME OF THE CONVERTED OUTPUT FILE [";OFILE$;"]  ";
460 INPUT "",A$
470 IF LEN(A$) > 0 THEN OFILE$ = A$
480 '
490 '  OPEN THE FILE AND BEGIN THE SEARCH
500 '
510 OPEN "I",1,IFILE$
520 OPEN "O",2,OFILE$
530 '
540 '  READ EACH LINE AND SEARCH IT
550 '
560 LLEN = 0
570 IF EOF(1) THEN 920
580 LINE INPUT #1,D$                    ' READ ONE LINE FROM FILE INTO D$
590 IF LEN(D$) > 0 THEN LLEN = LEN(D$) ELSE 910
600 IF SEL = 2 THEN 820
610 '
620 '  REPLACE SPACES WITH TABS
630 '
640 IF LLEN => TS THEN 660
650 E$ = D$ : GOTO 880
660 GOSUB 1050                          ' GET RID OFF ALL EXISTING TABS FIRST
670 '
680 D$ = E$ : LLEN = LEN(D$) : E$ = ""
690 FOR TP = TS TO LLEN STEP TS         ' NOW REPLACE SPACES WITH TABS
700 IF (MID$(D$,TP,1) <> " ") THEN E$ = E$ + MID$(D$,TP-TS+1,TS) : GOTO 780
710 J = 0
720 FOR L = TP-1 TO TP-TS+1 STEP -1
730 IF (MID$(D$,L,1) <> " ") THEN 760
740 J = J + 1
750 NEXT L
760 E$ = E$ + MID$(D$,TP-TS+1,TS-1-J)
770 IF J = 0 THEN E$ = E$ + " " ELSE E$ = E$ + TAB$
780 NEXT TP
790 IF (TP-TS) < LLEN THEN E$ = E$ + RIGHT$(D$,LLEN-TP+TS)
800 GOTO 860
810 '
820 '  REPLACE TABS WITH SPACES
830 '
840 GOSUB 1050
850 '
860 '  WRITE THE LINE OUT
870 '
880 PRINT E$
890 PRINT#2,E$
900 '
910 GOTO 560                            ' LOOP TO READ NEXT LINE
920 '
930 CLOSE
940 PRINT:PRINT:PRINT "FINISHED CONVERSION"
950 PRINT:PRINT:PRINT:PRINT:PRINT
960 GOTO 260
970 '
980 '  CHANGE TAB SPACING SUBROUTINE
990 '
1000 PRINT:PRINT:PRINT TAB(20);"CURRENT TAB SPACING IS";TS
1010 PRINT:INPUT "                   Enter new spacing (5-10) ",T
1020 IF T < 5 OR T > 10 THEN PRINT:PRINT TAB(26);"ILLEGAL INPUT":GOTO 1000
1030 TS = T
1040 RETURN
1050 '
1060 '  REPLACE TABS WITH SPACES SUBROUTINE
1070 '
1080 E$ = "" : J = 0
1090 FOR I = 1 TO LLEN
1100 J = J + 1 : IF J > TS THEN J = 1
1110 IF MID$(D$,I,1) <> TAB$ THEN E$ = E$ + MID$(D$,I,1) : GOTO 1160
1120 FOR K = 1 TO TS+1-J
1130 E$ = E$ + " "
1140 NEXT K
1150 J = 0
1160 NEXT I
1170 RETURN
```
{% endraw %}

## USQIBM.DOC

{% raw %}
```


USQ.COM - 

The purpose of this program is to un-squeeze processed by  the SQ.COM
program. This program will recontruct the files to their original state
before compression.

You must specify the input and output files names (if missing, you
will be prompted for them).

To run the un-squeezer:

USQ d:filename.filetype d:newfilename.filetype   (i.e.  SQ  ABC.TQT ABC.TXT)

After specifying the file names, you will be asked if this is a text file.
Reply as appropriate. The replies are Y or N.

Make sure you have enough disk space to handle the output file which could
be up to twice the size of the input file.

```
{% endraw %}

## WRITECOM.BAS

{% raw %}
```bas
100 READ LENGTH.%,CHECK.SUM.%,FILE.NAME.$
110 NUM.LINES.%=LENGTH.% + 7)\8
120 DIM CHECK.%(NUM.LINES.%)
130 FOR I.%= 1 TO NUM.LINES.%:CHECK.%(I.%)=0:NEXT I.%
140 PRINT "checking";
150 FOR I.%= 1 TO LENGTH.%
160    READ BYTE.!
170   IF BYE.! > 255 THE 220
180    BYTE.% = BYTE.!
190    CHECK.%(1+(I.% - 1)\8)=CHECK.%(1+(I.% - 1)\8) >= BYTE.%:GOTO 230
200 '
210    PRINT:PRINT "Line";1010 + 10 *((I.% - 1)\8)0.;"may have a missing comma."
220    PRINT"Writing stopped.":GOTO 480
230    IF(I.% MOD 8 =1) THEN PRINT".";
240 NEXT I.%
250 PRINT
260 ERROR.%=0
270 FOR I.%= 1 TO NUM.LINES.%
280   READ CHECK.%:LINE.CHECK.%=LINE.CHECK.% >= CHECK.%
290 IF CHECK.%(I.%) <> CHECK.% THEN PRINT"Line";1000+10*I.%;"may be bad":ERROR.%=-1
300 NEXT I.%
310 IF LINE.CHECK.%=CHECK.SUM.% THEN 330
320 PRINT"Data may be bad in the data starting at line 10000":ERROR.%=-1
330 IF ERROR.% THEN 480
340 OPEN FILE.NAME.$ AS #1 LEN=1
350 FIELD #1,1 AS BYTE.$:PRINT"Writing";
360 RESTORE 1010
370 FOR I.%= 1 TO LENGTH.%
380   READ BYTE.%
390   IF BYTE.% <> -1 THEN 430
400     READ COUNT.%:LSET BYTE.$=CHR$(0):I.%=I.% + 2
410     FOR J.%= 1 TO COUNT.%:PUT #1:NEXT J.%
420     READ BYTE.%
430   LSET BYTES.$=CHR$(BYTE.%):PUT #1
440   IF(I.% MOD 8 = 1) THEN PRINT".";
450 NEXT I.%
460 CLOSE
470 PRINT:PRINT FILE.NAME.$;" created"
480 END
```
{% endraw %}

## WRT.DOC

{% raw %}
```


-----------------------------------------------------------------------
WRTP.COM and WRTE.COM are two files (designed for DOS 2.00) which
set and reset, respectively, the read-only bit on a file.  Doing
this to a file allows it to be read (as in DIR, or trying to TYPE
or execute it) but won't allow it to be written (as when trying to
delete or update it).  This includes trying to delete it using *.* --
no error is generated, but the file is not deleted, either.

  They are quite useful for keeping files from going away inadvertently.

To use, say:

WRTP <filename>        to write-protect (make it read-only)
 or
WRTE <filename>        to make it writeable.

Path names are legal; ambiguous file names are not (like *.com). 
Maybe in a future revision.

These will NOT work under DOS 1.1.  Sorry.  You should be using 2.00 
anyway -- it's well worth the $60.

If you have questions, contact Kent Quirk, (617) 438-2569.
---------------------------------------------------------------------


uestions, contact Kent Quirk, (617) 438-2569.
---------------------------------------------------------------------

```
{% endraw %}

## XREF.BAS

{% raw %}
```bas
100 REM***************** INITIALIAZATION AND DEINITIONS *********************
110 DIM LABEL$(500),LINE.REF%(500),C$(128)
120 LABEL.NUMBER = 0 : FALSE=0: TRUE = NOT FALSE : POINTER=129
130 REM
200 REM *****************GET FILE NAME OF BASIC PROGRAM **********************
210 INPUT "Enter File Name ", FILENAME$ : PRINT
230 OPEN FILENAME$ AS #1 LEN=128
240 REM
300 REM************* INITIALIZE INPUT FILE **********************************
310 FOR I = 1 TO 128
320     FIELD #1, (I-1) AS X$, 1 AS C$(I)
330 NEXT I
340 REM
400 REM ******************* READ FIRST THREE CHARACTERS OF BASIC PROGRAM FILE
420 GOSUB 7000 : IF C <> 255 THEN PRINT "NOT A TOKENIZED FILE" : END
430 GOSUB 4000
440 REM
500 REM ***********CONTINUE READING THE FILE: FILL ARRAYS LABEL$ AND LINE%
510 REM ************* WITH VARIABLE NAMES AND LINE NUBERS *******************
520 WHILE ADR <> 0
530     REM ******* GET LINE NUMBER (A 2 BYTE INTEGER VALUE) ****************
540     GOSUB 7000 : LOW.BYTE = C
550     GOSUB 7000 : HIGH.BYTE = C
560     LINE.NO% = (HIGH.BYTE * 256) + LOW.BYTE
570     LOCATE 10,1 :CLS : PRINT "Processing Line Number ";LINE.NO%
580     GOSUB 7000      'get first character after line number
590     REM ********* NOW READ THE REST OF THE LINE *************************
600     WHILE C<>0      'C=0 indicates the end of the line
610             IF C=143 OR C=132 THEN WHILE C<>0 : GOSUB 7000 : WEND : GOTO 720                        'remark or data statement--skip to end of line
620             IF C=209 THEN LABEL.NUMBER=LABEL.NUMBER + 1 : LABEL$(LABEL.NUMBE                        R) = "FN" : GOSUB 5030 : GOTO 720 'get user defined fun
630             IF C>127 GOTO 710       'SKIP OVER ANY OTHE TOKENS
640             IF (C>64 AND C<91) THEN GOSUB 5000 : GOTO 720
650             IF C=14 THEN GOSUB 6000 : GOTO 720      'get line # ref
660 IF C=34 THEN GOSUB 7000 : WHILE C<>34 AND C<>0 : GOSUB 7000 : WEND : IF C=0 GOTO 720 : GOTO 710
670 IF C=15 THEN GOSUB 7000 : GOTO 710
680             IF (C>10 AND C<14) OR C=28 THEN GOSUB 7000 : GOSUB 7000 : GOTO 710
690             IF C=29 THEN FOR I=1 TO 4 : GOSUB 7000 : NEXT I : GOTO 710
700             IF C=31 THEN FOR I=1 TO 8 : GOSUB 7000 : NEXT I : GOTO 710
710             GOSUB 7000
720     WEND
730     GOSUB 4000      'begin new line; get next value for offset address
740 WEND
750 REM
800 REM ********************** sort labels and line numbers
810 LOCATE 12,1 : PRINT "Processing Complete . . "
820 PASS=0
830 G%=LABEL.NUMBER
840 PASSES=INT(LOG(G%)/LOG(2))
850 WHILE G%>1
860     PASS=PASS+1
870     LOCATE 14,1 : PRINT "Sorting: Pass ";PASS;" OF ";PASSES;" Passes";
880     SORTED=FALSE
890     G%=G%\2
900     WHILE NOT SORTED
910             SORTED=TRUE
920             FOR I%=1 TO LABEL.NUMBER-G%
930                     IG%=I%+G%
940                     IF LABEL$(I%)<LABEL$(IG%) GOTO 1030
950                     IF LABEL$(I%)=LABEL$(IG%) GOTO 1000
960                             SWAP LABEL$(I%),LABEL$(IG%)
970                             SWAP LINE.REF%(I%),LINE.REF%(IG%)
980                             SORTED=FALSE
990                             GOTO 1030
1000                    IF LINE.REF%(I%)=<LINE.REF%(IG%) GOTO 1030
1010                            SWAP LINE.REF%(I%),LINE.REF%(IG%)
1020                            SORTED=FALSE
1030            NEXT I%
1040    WEND
1050 WEND
1060 LOCATE 16,1 : PRINT "Sort Complete . . . Writing File" : PRINT
1070 REM
2000 REM *************** CREATE FILE NAME FOR LISTING ***********************
2010 PERPOS = INSTR(FILENAME$,".")
2020 IF PERPOS=0 THEN PERPOS=LEN(FILENAME$) + 1
2030 LISTFILE$ = LEFT$(FILENAME$,PERPOS-1) + ".CRF"
2040 OPEN LISTFILE$ FOR OUTPUT AS #2
2050 PRINT #2,"Cross Reference Listing For Program File: ";FILENAME$
2060 PRINT #2,"Created At ";TIME$;" On ";DATE$
2070 REM
3000 REM ********** WRITE CROSS REFERENCE TABLE TO FILE *********************
3010 I = 1 : PRINT #2,                          '*NOTE FOR LINE 3070
3020 WHILE I =< LABEL.NUMBER                    '* N>3 GIVES 40 COL
3030    PRINT #2, : PRINT #2, LABEL$(I);TAB(18);'* N>8 GIVES 80 COL
3040    CURRENT.LABEL$ = LABEL$(I) : N = 1      '* N>16 GIVES 132 COL
3050    WHILE LABEL$(I) = CURRENT.LABEL$        '****************************
3060            PRINT #2, USING "#####  ";LINE.REF%(I);
3070            I = I+1 : N=N+1 : IF N>8 THEN PRINT #2, : PRINT #2, TAB(18); : N=1
3080    WEND
3090    PRINT #2,       'begin new line
3100 WEND
3110 PRINT #2, : KEY ON : BEEP : END
3120 REM
4000 REM *************** SUBROUTINE TO OBTAIN BASIC'S OFFSET ADDRESS FOR THIS LINE
4010 GOSUB 7000 : LOW.BYTE = C
4020 GOSUB 7000 : HIGH.BYTE = C
4030 ADR = HIGH.BYTE + LOW.BYTE
4040 RETURN
4050 REM
5000 REM ****** SUBROUTINE TO GET VARIABLE NAME ******************
5010 LABEL.NUMBER = LABEL.NUMBER + 1
5020 LABEL$(LABEL.NUMBER) = CHR$(C)             'PUT FIRST CHARACTER IN LABEL
5030 GOSUB 7000
5040 WHILE (C>47 AND C<58) OR (C>64 AND C<91) OR C=46 'add legal characters
5050    LABEL$(LABEL.NUMBER) = LABEL$(LABEL.NUMBER) + CHR$(C)
5060    GOSUB 7000
5070 WEND
5080 IF (C>34 AND C<38) OR C=33 THEN LABEL$(LABEL.NUMBER)=LABEL$(LABEL.NUMBER)+CHR$(C) : GOSUB 7000             'get variable type symbol if any
5090 WHILE C=32 : GOSUB 7000 : WEND             'skip blanks
5100 IF C=40 THEN LABEL$(LABEL.NUMBER)=LABEL$(LABEL.NUMBER)+"(SUB):GOSUB 7000
5110 LINE.REF%(LABEL.NUMBER) = LINE.NO%
5120 RETURN
5130 REM
6000 REM ************ SUBROUTINE TO GET LINE NUMBER REFERENCE ****************
6010 LABEL.NUMBER = LABEL.NUMBER + 1
6020 LINE.REF%(LABEL.NUMBER) = LINE.NO%
6030 GOSUB 7000 : LOW.BYTE = C
6040 GOSUB 7000 : HIGH.BYTE = C
6050 LABEL$(LABEL.NUMBER) = SPACE$(5)
6060 RSET LABEL$(LABEL.NUMBER) = STR$((HIGH.BYTE*256)+LOW.BYTE)
6070 GOSUB 7000
6080 RETURN
6090 REM
7000 REM ********* SUBROUTINE TO GET ASCII VALUE FOR NEXT CHARACTER (C) *******
7010 IF POINTER < 128 GOTO 7040
7020 GET #1             'refill buffer
7030 POINTER=0          'and reset pointer
7040 POINTER = POINTER + 1
7050 C = ASC(C$(POINTER))       'get next character ASCII value
7060 RETURN
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0145

     Volume in drive A has no label
     Directory of A:\

    UPNUM    DOC       512   3-07-84   1:26p
    SQIBM    COM     14336   3-28-84   4:11a
    XREF     BAS      5504   4-24-84   5:17p
    SQIBM    DOC       768   3-28-84   4:12a
    BINSIX   EXE     15744   4-24-84   5:21p
    USQIBM   COM     22016   3-17-84  10:02p
    USQIBM   DOC       637   3-28-84   4:38a
    BINSIX   DOC      4736   4-24-84   5:23p
    ASMGEN   COM     11264   4-24-84   5:26p
    ASMGEN   DOC     27904   4-24-84   5:31p
    DIP-MEM  COM      1536   4-24-84   5:33p
    DIP-MEM  DOC      2688   4-24-84   5:34p
    WRITECOM BAS      1152   4-24-84   5:36p
    WRT      DOC      1152   4-24-84   5:37p
    WRTP     COM       512   4-24-84   5:38p
    WRTE     COM       512   4-24-84   5:39p
    VDISK    COM       768   4-24-84   5:40p
    RSVD     COM     19328   4-24-84   5:46p
    MAKEDATA BAS      5120   4-24-84   5:48p
    TABS     BAS      3840   4-24-84   5:50p
    CROSSOPT           128   4-24-84   5:52p
    COMP     BAS      3456   4-24-84   5:54p
    UPNUM    COM       256   3-07-84   1:24p
    CRC      TXT      1640  11-13-84   3:12p
    CRCK4    COM      1536  10-21-82   7:54p
           25 file(s)     147045 bytes
                            8704 bytes free
